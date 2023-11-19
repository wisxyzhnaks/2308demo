// 封装连接数据库
let mysql = require('mysql');
// 2.创建mysql连接
var pool = mysql.createPool({
	connectionLimit: 100000,
	host: '47.109.51.95',
	user: 'root',
	password: 'cdl152150',
	database: 'admindata',
	port: 3306
});
// 3.进行连接
module.exports = pool;