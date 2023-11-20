var express = require('express');
var router = express.Router();
let pool = require('../../config/mysql.js');
let upload = require('../../config/upload.js');
let jwt = require('jsonwebtoken');
let {
	key,
	outtime
} = require('../../config/store.js');

/* GET home page. */
router.post('/', function(req, res) {
	// res.send('111')
	console.log(req.body);
	// 获取数据
	pool.getConnection((err, connection) => {
		if (err) {
			console.error('Error getting database connection: ' + err.stack);
			return;
		}
		let {
			user,
			pass
		} = req.body;
		connection.query('select pass from manager where user=?', [user], function(
			err, data) {
			if (data.length) {
				if (data[0].pass == pass) {
					let payload = {
						user: user,
						pass: data[0].pass
					}

					let token = jwt.sign(payload, key, {
						expiresIn: outtime
					});
					res.send({
						msg: '登陆成功',
						state: 200,
						token: token
					});
				} else {
					res.send({
						msg: '账号或密码错误'
					});
				}
			} else {
				res.send({
					msg: '账号和密码错误'
				});
			}
		})
		connection.release();
	})
});

router.post('/one', function(req, res) {
	// 获取数据
	upload(req, res).then((data) => {
		res.send(data)
	})
});

//获取店铺信息
router.post('/two', function(req, res) {
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}
			connection.query(
				'select * from shop left join manager on shop.mid = manager.id where manager.user=?',
				[data.user],
				function(err1, data1) {
					res.send(data1);
				})
			connection.release();
		})
	})
})

//修改店铺信息
router.post('/three', function(req, res) {
	let {
		name,
		resource,
		img,
		title,
		actives
	} = req.body;
	let token = req.headers.authorization.split(' ')[1];
	jwt.verify(token, key, (err, data) => {
		pool.getConnection((err, connection) => {
			if (err) {
				console.error('Error getting database connection: ' + err.stack);
				return;
			}

			connection.query(
				'update shop set nname=?,ntype=?,nlogo=?,ntitle=?,actives=? where mid=(select id from manager where user=?)',
				[name, resource, img, title, actives, data.user],
				function(err2, data2) {

					connection.query(
						'select * from shop left join manager on shop.mid = manager.id where manager.user=?',
						[data.user],
						function(err3, data3) {
							res.send(data3);
						})
				})

			connection.release();
		})
	})
})
module.exports = router;