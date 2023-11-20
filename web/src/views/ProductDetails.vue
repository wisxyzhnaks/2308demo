<template>
	<div class="box">
		<h1>商品详情页</h1>
		<div class="head">
			<img src="../assets/home/淘宝.png" alt="" />
			<div class="search">
				<form action="/">
				  <van-search
					v-model="value"
					show-action
					placeholder="请输入搜索关键词"
					@search="onSearch"
					@cancel="onCancel"
				  />
				</form>
			</div>
			<div class="btn1">
				搜本店
			</div>
		</div>
		<div class="content">
			<div class="left_img">
				<img :src="img_src" alt="" />
			</div>
			<div class="right_msg">
				<div class="title">
					{{title}}
				</div>
				<div class="msg old_price">
					价格 
				</div>
				<div class="msg new_price">
					淘宝价 <span>￥{{price}}</span>
				</div>
				<div class="msg youhui">
					优惠 淘金币可抵0.25元
				</div>
				<div class="msg address">
					配送 
				</div>
				<div class="msg class">
					类型
				</div>
				<div class="msg number">
					<div>数量 </div> 
					<div class="change_num">
						<div class="jian" @click="jian">-</div>
						<div class="num">{{num}}</div>
						<div class="jia" @click="jia">+</div>
					</div>
				</div>
				<div class="msg control">
					<div class="play">
						立即购买
					</div>
					<div class="add_shop" @click="add">
						加入购物车
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { showToast } from 'vant';
    const value = ref('');
	let num = ref(1)
	let img_src;
	let title;
	let price;
    const onSearch = (val) => showToast(val);
	const onCancel = () => showToast('取消');
	var arr = JSON.parse(localStorage.getItem("shop_msg")) 
	img_src = ref(arr.img);
	price = ref(arr.price)
	title = ref(arr.title);
	console.log(arr)
	const jian = ()=>{
		num.value--;
		if(num.value<=0){
			num.value = 0;
		}
		console.log(num)
	}
	const jia = ()=>{
		num.value++
	}
	const add = ()=>{
		arr["num"] = num.value;
		let data = JSON.parse(localStorage.getItem('shops_list'));
		console.log(data)
		let list = data?data:[];
		console.log(list)
		
		list.push(arr)
		localStorage.setItem('shops_list',JSON.stringify(list))
	}
</script>

<style scoped>
	body{
		font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
	}
	.box{
		height: auto;
		width: 100%;
	}
	.head{
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.head>img{
		height:38px;
	}
	.search{
		width: 250px;
		height: 100%;
	}
	.search>form{
		border: 1px solid #f40;
	}
	.btn1{
		width: 72px;
		height: 30px;
		box-sizing: border-box;
		border: 1px solid #ffb086;
		color: #f40;
		text-align: center;
		line-height: 28px;
	}
	.content{
		width: 1140px;
		height: 569px;
		display: flex;
		justify-content: center;
		position: absolute;
		left: 50%;
		margin: -570px;
		top: 800px;
		border:1px solid #ccc
	}
	.left_img{
		width:400px;
		height:400px;
		padding-top: 20px;
	}
	.left_img>img{
		width: 100%;
		height: 100%;
	}
	.right_msg{
		width: 486px;
		height: 518px;
		box-sizing: border-box;
		padding-left: 18px;
		font-size:12px;
		color:#6c6c6c;
	}
	.title{
		width:100%;
		height:42px;
		padding-top: 20px;
		padding-bottom: 10px;
		font-size: 16px;
		font-weight: 700;
	    line-height: 21px;
	    color: #3C3C3C;
	}
	.msg{
		width: 100%;
		height: 40px;
		
		line-height: 40px;
	}
	.old_price,.new_price{
		background-color: #FFF2E8;
	}
	.msg>span{
		font-size: 26px;
		font-weight: 700;
	    font-family: Tahoma,Arial,Helvetica,sans-serif;
	    color: #F40;
	}
	.control{
		display: flex;
	}
	.play{
		color: #E5511D;
		background: #FFE4D0;
		width: 180px;
		border:1px solid #F0CAB6;
		text-align: center;
		height:38px;
		border-radius: 2px;
		font-size: 16px;
	}
	.add_shop{
		width: 180px;
	    color: #FFF;
	    border:1px solid #F40;
		background: #F40;
		text-align: center;
		height:38px;
		border-radius: 2px;
		font-size: 16px;
		margin-left: 80px;
	}
	.number{
		display: flex;
	}
	.change_num{
		width: 124px;
		height: 28px;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
	}
	.jian,.jia{
		width: 26px;
		height: 26px;
		border: 1px solid #ccc;
		font-size: ;
		line-height: 26px;
		text-align: center;
		font-weight: bold;
	}
	.num{
		width: 30px;
		height: 26px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		line-height: 26px;
		text-align: center;
	}
</style>