var express = require('express');
var router = express.Router();
let pool = require('../../config/mysql.js');
let upload = require('../../config/upload.js');
let jwt = require('jsonwebtoken');
let {
	key,
	outtime
} = require('../../config/store.js');


//商铺信息
router.post('/', function(req, res) {
	let {index} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token,key,(err,data)=>{
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query(
				'select shop.id,shop.name,shop.logo,shop.type,shop.title,manager.user from shop left join manager on shop.mid = manager.id limit ?,5',
				[index],
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//商铺总量
router.post('/one', function(req, res) {
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token,key,(err,data)=>{
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query(
				'select count(*) as num from shop ',
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//添加商品信息
router.post('/two', function(req, res) {
	let {index} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query("select * from shop where actives= '审核中' limit ?,5",[index],function(err1,data1){
				res.send(data1);
			})
	
			connection.release();
		})
	})
})

//修改商品信息
router.post('/three', function(req, res) {
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token,key,(err,data)=>{
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query(
				'select count(*) as num from shop ',
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//同意修改商铺信息
router.post('/four', function(req, res) {
	let {
		index
	} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query('select * from shop where id = ?',
			[index],
			function(err1,data1){
				let {nname,nlogo,ntype,ntitle} = data1[0];
				connection.query('update shop set name=?,logo=?,type=?,title=?,actives=?',
				[nname,nlogo,ntype,ntitle,'已完成'],
				function(err2,data2){
					connection.query("select * from shop where actives = '审核中' limit 0,5",function(err3,data3){
						res.send(data3);
					})
				})
			})
	
			connection.release();
		})
	})
})

//驳回修改商铺信息请求
router.post('/four', function(req, res) {
	let {
		index
	} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query("update shop set actives = '已完成' where id = ?",
			[index],
			function(err1,data1){
				connection.query("select * from shop where actives= '审核中' limit 0,5",function(err3,data3){
					res.send(data3);
				})
			})
	
			connection.release();
		})
	})
})
module.exports = router;