// 进行axios二次封装的文件

// 引入axios
import axios from 'axios';
import router from '@/router';

// 创建axios实例
let requests = axios.create({
	// 请求服务器地址
	baseURL: 'http://47.109.51.95:3000',
	timeout: 10000
})

// 拦截器
// 添加请求拦截器
requests.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	//请求头携带token
	let headers = config.headers;//获取请求头
	let token = window.localStorage.getItem('token')||' ';
	if(!headers.Authorization) headers.Authorization = `Bearer ${token}`;

	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use(function(response) {
	// 2xx 范围内的状态码都会触发该函数。
	// 对响应数据做点什么

	//token失效后跳转至登录页面
	if(response.data.state == -1){
		router.push('/login');
		window.localStorage.removeItem('token');
		ElMessage({
			message: '账号已失效，请重新登录!',
			type: 'warning',
		  })
	}

	return response.data;
}, function(error) {
	// 超出 2xx 范围的状态码都会触发该函数。
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default requests;