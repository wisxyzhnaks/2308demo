// 统一管理请求
import requests from './axios.js';


// 获取数据总数
let getAll = ()=>{
	return requests.get('/api/getall')
}
let getlogin = (param)=>{
	return requests.post('/login',param)
}

//设置图片
let setImg=(param)=>{
	return requests.post('/login/one',param);
}

//获取店铺信息
let getShop=()=>{
	return requests.post('/login/two')
}

//修改店铺信息
let setShop=(param)=>{
	return requests.post('/login/three',param);
}


//商品管理
//首页商品
let getGood=(param)=>{
	return requests.post('/good',param);
}
//商品总量
let goodNum=()=>{
	return requests.post('/good/one');
}
//商品添加
let addGood=(param)=>{
	return requests.post('/good/two',param);
}
//商品修改
let changeGood=(param)=>{
	return requests.post('/good/three',param);
}
//商品删除
let deleteGood=(param)=>{
	return requests.post('/good/four',param);
}
//商品页面
let shGood = (param)=>{
	return requests.post('/good/five',param)
}

let shGoods = ()=>{
	return requests.post('/good/six');
}

let shthree=(param)=>{
	return requests.post('/good/seven',param);
}

let shfour=(param)=>{
	return requests.post('/good/eight',param);
}


//用户信息管理
let getUser=(param)=>{
	return requests.post('/user',param);
}
//用户总量
let userAll=()=>{
	return requests.post('/user/one');
}

//商品信息管理
let getShops=(param)=>{
	return requests.post('/shop',param);
}
//用户总量
let shopAll=()=>{
	return requests.post('/shop/one');
}

//店铺信息审核
let shShop=(param)=>{
	return requests.post('/shop/two',param);
}

let shAll=()=>{
	return requests.post('/shop/three');
}

let shone=(param)=>{
	return requests.post('/shop/four',param);
}

let shtwo=(param)=>{
	return requests.post('/shop/five',param);
}


//订单信息管理
let getOrder=(param)=>{
	return requests.post('/order',param)
}

let orderAll=()=>{
	return requests.post('/order/one');
}

let orderfh=(param)=>{
	return requests.post('/order/two',param);
}

let getType=()=>{
	return requests.post('/shop/six');
}


export default{getAll,getlogin,setImg,getShop,setShop,getGood,goodNum,addGood,changeGood,deleteGood,getUser,userAll,getShops,shopAll,shShop,shAll,shone,shtwo,shGood,shGoods,shthree,shfour,getOrder,orderAll,orderfh,getType}