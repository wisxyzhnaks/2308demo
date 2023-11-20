<template>
  <nav>
    <img src="../assets/home/1.png" alt="" />
  </nav>
  <main>
    <div class="main1">
		<div class="search_box">
			<img src="../assets/home/taobao.gif" alt="" class="gif1"/>
			<div class="search">
				<input type="text" />
				<button>搜索</button>
			</div>
			<img src="../assets/home/download.avif" alt="" class="load"/>
		</div>
    <div class="main2">
        <div class="left">
          <h2 style="margin: 5%">分类</h2>
          <ul>
            <li>
              <div></div>
              <p>女装</p>
              /
              <p>内衣</p>
              /
              <p>奢品</p>
            </li>
            <li>
              <div></div>
              <p>女鞋</p>
              /
              <p>男鞋</p>
              /
              <p>箱包</p>
            </li>
            <li>
              <div></div>
              <p>美妆</p>
              /
              <p>饰品</p>
              /
              <p>洗护</p>
            </li>
            <li>
              <div></div>
              <p>男装</p>
              /
              <p>运动</p>
              /
              <p>百货</p>
            </li>
            <li>
              <div></div>
              <p>手机</p>
              /
              <p>数码</p>
              /
              <p>企业礼品</p>
            </li>
            <li>
              <div></div>
              <p>家装</p>
              /
              <p>电器</p>
              /
              <p>车品</p>
            </li>
            <li>
              <div></div>
              <p>食品</p>
              /
              <p>生鲜</p>
              /
              <p>母婴</p>
            </li>
            <li>
              <div></div>
              <p>医药</p>
              /
              <p>保健</p>
              /
              <p>进口</p>
            </li>
          </ul>
        </div>
        <div class="right">
			<div class="right_top">
				天猫|聚划算|天猫超市|司法拍卖|飞猪旅行|天天特卖|极有家|淘宝直播
			</div>
			<div class="right_content">
			  <div class="swiper">
				<van-swipe
				  class="my-swipe"
				  :autoplay="3000"
				  indicator-color="orangered"
				>
				  <van-swipe-item>
					<img src="../assets/home/swiper1.jpg" alt="">
				  </van-swipe-item>
				  <van-swipe-item>
					<img src="../assets/home/swiper2.jpg" alt="">
				  </van-swipe-item>
				  <van-swipe-item>
					<img src="../assets/home/swiper3.jpg" alt="">
				  </van-swipe-item>
				  <van-swipe-item>
					<img src="../assets/home/swiper4.jpg" alt="">
				  </van-swipe-item>
				  <van-swipe-item>
					<img src="../assets/home/swiper5.jpg" alt="">
				  </van-swipe-item>
				</van-swipe>
				
			  </div>
			  <div class="login">
				<img src="../assets/home/tou.jpg" alt="" class="head"/>
				<p class="hello">Hi!你好</p>
				<ul class="action">
					<li>登录</li>
					<li>注册</li>
					<li>开店</li>
				</ul>
				<ul class="history">
					<li>
						<van-icon name="star-o" size="24px"/>
						<p>宝藏收藏</p>
					</li>
					<li>
						<van-icon name="shop-o" size="24px"/>
						<p>买过的店</p>
					</li>
					<li>
						<van-icon name="shop-collect" size="24px"/>
						<p>收藏的店</p>
					</li>
					<li>
						<van-icon name="clock-o" size="24px"/>
						<p>我的足迹</p>
					</li>
				</ul>
			  </div>
		  </div>
        </div>
    </div>
	<div class="main3">
		<div class="rec_head">
			<h3>猜你喜欢</h3><img src="../assets/home/suggest.avif" alt="" />
		</div>
		<div class="recommend">
			<van-row class="van_row">
		      <van-col class="van_col" span="7" v-for="(item,index) in datas" @click="onclick(index)" :key="index">
				  <img :src="item.img" alt="" />
				  <div class="sug_content">
				  	<div class="title">{{item.title}}</div>
				  	<p></p>
				  	<p class="price">¥<span>{{item.price}}{{index}}</span></p>
				  </div>
			  </van-col>				  
			  
			</van-row>
		</div>
		
	  </div>
    </div>
	
  </main>
</template>
<script setup>
	import {ref} from "vue"
	import {useRouter} from 'vue-router'
	const router = useRouter();
	let datas = ref([
		{
			id:1,
			title:"1VM非常博物馆boneclones美国定制骨骼南方古猿阿法种露西组装股骨",
			price:16,
			store:"A",
			img:"src/assets/home/shop.webp"
		},
		{
			id:1,
			title:"2VM非常博物馆boneclones美国定制骨骼南方古猿阿法种露西组装股骨",
			price:161,
			store:"B",
			img:"src/assets/home/shop_img.avif"
		},
		{
			id:1,
			title:"3VM非常博物馆boneclones美国定制骨骼南方古猿阿法种露西组装股骨",
			price:162,
			store:"C",
			img:""
		},
		{
			id:1,
			title:"4VM非常博物馆boneclones美国定制骨骼南方古猿阿法种露西组装股骨",
			price:163,
			store:"D",
			img:""
		},
		{
			id:1,
			title:"5VM非常博物馆boneclones美国定制骨骼南方古猿阿法种露西组装股骨",
			price:164,
			store:"E",
			img:""
		}
	])
	function onclick(index){
		console.log('进入')
		// let routeData = router.push({
		// 	name:'produce'
		// })
		// window.open(routeData, '商品详情页');
		let arr = datas.value[index]
		router.push({
			path:'/produce'
		})
		localStorage.setItem("shop_msg",JSON.stringify(arr))
		console.log(arr)
		console.log(datas.value[1])
	}
</script>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  padding: 0;
}
nav > img {
  display: block;
  width: 100%;
  height: 100%;
}
main {
  width: 100%;
  height: auto;
  background: url("../assets/home/bk.png") no-repeat center / 100% 100%;
}
.main1 {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: rgb(255, 255, 255);
  overflow: hidden;
}
.right{
	background-color: #fff;
}
.search_box{
	width: 100%;
	height: 135px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 25px 0 25px;
	box-sizing: border-box;
}
.search {
  width: 60%;
  height: 40px;
  margin: 5px auto;
  border: 2px solid #ff5000;
  border-radius: 50px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gif1{
	display: block;
	height: 7.5rem;
	width: 10rem;
}
.search > input {
  width: 90%;
  height: 90%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 0;
  outline: none;
  padding-left: 2%;
}
.search > button {
  width: 10%;
  height: 90%;
  margin-right: 2px;
  border-radius: 50px;
  border: 0;
  background: #ff5000;
  color: white;
}
.load{
	display:block;
	height: 62px;
	width: 62px;
}
.main2 {
  width: 100%;
  height: 400px;
  display: flex;
}
.main2 > .left {
  width: 270px;
  height: 100%;
  overflow: hidden;
  background: rgb(217, 211, 211);
}
.main2 > .left > ul {
  width: 95%;
  height: auto;
  padding: 0;
  margin: 0 auto;
}
.main2 > .left > ul > li {
  list-style: none;
  width: 100%;
  height: 38px;
  margin: 2px;
  display: flex;
  align-items: center;
  color: #666;
  cursor: pointer;
}
.main2 > .left > ul > li > div {
  width: 16px;
  height: 16px;
}
.main2 > .left > ul > li > div {
  background: url("../assets/home/11.png") no-repeat center / 100% 100%;
}
.main2 > .left > ul > li:hover > div {
  background: url("../assets/home/12.png") no-repeat center / 100% 100%;
}
.main2 > .left > ul > li:hover {
  color: #e0620d;
}
.main2 > .left > ul > li > p {
  margin: 0 10px;
  font-size: 14px;
}
.right_top{
	width: 95%;
	height: 42px;
	line-height: 42px;
	text-align: center;
	border-radius: 12px;
	background: #f7f9fa;
}
.right_content{
	width: 100%;
	height: 358px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.swiper {
  width: 564px;
  height: 315px;
  display: flex;
}
.my-swipe .van-swipe-item {
  width: 564px;
  height: 315px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
}
.my-swipe img{
  display: block;
  width: 100%;
  height: 100%;
}
.login{
	width: 316px;
	height: 385px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-sizing: border-box;
	padding: 30px 10px;
}
.head{
	display:block;
	width: 60px;
	height: 60px;
	border-radius: 30px;
}
.hello{
	font-size: 16px;
	width: 100%;
	height: 24px;
	line-height: 24px;
	text-align: center;
}
.action{
	width: 100%;
	height: 42px;
	display: flex;
	justify-content: space-around;
}
.action>li{
	list-style: none;
	height: 100%;
	width: 80px;
	line-height: 42px;
	text-align: center;
	border-radius: 21px;
}
.action>li:nth-child(1){
	background: #ff5000;
	color: white;
}
.action>li:nth-child(2){
	background: #ff9000;
	color: #fff;
}
.action>li:nth-child(3){
	background: #fff;
	color: #ff5000;
}
.history{
	width: 100%;
	height: 48px;
	display: flex;
	justify-content: space-around;
	font-size: 12px;
}
.history>li{
	text-align: center;
}
.main2 > .right {
  width: 80%;
  height: 100%;
  background: #fff;
}

.main3{
	width: 100%;
	height: auto;
	/* padding-bottom: 200px; */
}
.recommend{
	width: 100%;
	height: auto;
	padding: 0 37.5px 0 37.5px;
}
.van-row{
	width: 100%;
	height: auto;
}
.van-col{
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-weight: 400;
	width: 370px;
	height: 172px;
	background: #f7f9fa;
	box-sizing: border-box;
	padding: 0 !importence;
	border: 1px solid #fff;
	margin-bottom: 37.5px;
	border-radius: 12px;
	transition: all 1s ease;
	/* transition: all .5 ease; */
}
.van-col:hover{
	border-color: orange;
}
.van-col:nth-of-type(3n-1){
	margin: 0 37.5px 0 37.5px;
}
.van-col>img{
	width: 150px;
	height: 150px;
	display: block;
	border-radius: 11px;
}
.van-col>div{
	width: 186px;
	height: 150px;
	position: relative;
	}
.title{
	width: 100%;
	height: 46px;
	display: block;
	font-size: 16px;
	overflow: hidden;
	margin-top: 8px;
}
.price{
	color: #ff5000;
	position: absolute;
	bottom: 10px;
	left: 5px;
}
.price>span{
	font-size: 22px;
	line-height: 22px;
}
.rec_head>h3{
	height: 24px;
	margin-bottom: 20px;
    margin-left: 6px;
	color: #111;
	font-weight: bold;
	font-size: 24px;
	line-height: 24px;
	float: left;
	font: 24px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;;
	font-weight: bold;
}
.rec_head>img{
	height: 20px;
	margin: 32px 0 0 6px;
	display: inline;
}
</style>