var express = require('express');
var router = express.Router();
let pool = require('../../config/mysql.js');
let upload = require('../../config/upload.js');
let jwt = require('jsonwebtoken');
let {
	key,
	outtime
} = require('../../config/store.js');


//商品首页
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
				'select * from manager where active != 1 limit ?,5',
				[index],
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//商品总量
router.post('/one', function(req, res) {
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token,key,(err,data)=>{
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query(
				'select count(*) as num from manager where active != 1',
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//添加商品信息
router.post('/two', function(req, res) {
	let {
		name,
		url,
		pic,
		title,
		gactive
	} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query('select id from manager where user=?',[data.user],function(err1,data1){
				connection.query(
					'insert into good(id,name,title,pic,url,mid,gactive) value(null,?,?,?,?,?,?)',
					[name,title,pic,url,data1[0].id,gactive],
					function(err2, data2) {
						connection.query(
							'select * from good left join manager on good.mid = manager.id where manager.user=? limit 0,5',
							[data.user],
							function(err3, data3) {
								res.send(data3);
						})
				})
			})
	
			connection.release();
		})
	})
})

//修改商品信息
router.post('/three', function(req, res) {
	let {
		id,
		name,
		url,
		pic,
		title,
		gactive
	} = req.body;
	console.log(req.body);
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query('update good set nname=?,ntitle=?,npic=?,nurl=?,gactive=? where id=?',
			[name,title,pic,url,gactive,id],
			function(err1,data1){
				connection.query(
					'select * from good left join manager on good.mid = manager.id where manager.user=? limit 0,5',
					[data.user],
					function(err2, data2) {
						res.send(data2);
				})
			})
	
			connection.release();
		})
	})
})

//删除商品信息
router.post('/four', function(req, res) {
	let {
		index
	} = req.body;
	console.log(index);
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query('delete from good where id=?',
			[index],
			function(err1,data1){
				connection.query(
					'select * from good left join manager on good.mid = manager.id where manager.user=? limit 0,5',
					[data.user],
					function(err2, data2) {
						res.send(data2);
				})
			})
	
			connection.release();
		})
	})
})
module.exports = router;