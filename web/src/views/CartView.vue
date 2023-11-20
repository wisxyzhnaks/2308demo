<template>
  <h1>cart</h1>
  <div class="box">
	  <div class="cart_head">
		  <img src="../assets/cart/taobao.png" alt="" />
		  <div class="search">
			  <input type="text" />
			  <input type="button" value="搜索"/>
		  </div>
	  </div>
	  <div class="cart_content" v-for="(item,index) in list" :key="item.id">
		  <img :src="item.img" alt="" />
		  <div class="msg">
			  <p class="title">{{item.title}}</p>
			  <p class="num">数量：{{item.num}}</p>
			  <p>继续添加其它属性：</p>
		  </div>
		  <div class="action">
			  <p><van-icon name="success" /> 已成功加入购物车</p>
			  <p class="total">{{}}</p>
			  <p>购物车共有{{}}件商品</p>
			  <div class="control">
				  <div class="back">
					  &lt; 返回商品详情
				  </div>
				  <div class="conpont">
					  结算
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script setup>
	let data = localStorage.getItem("shops_list");
	let list = JSON.parse(data);
	
</script>

<style scoped>
	body{
		font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
	}
	.box{
		width:100%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #ccc;
	}
	.cart_head{
		width: 100%;
		height: 45px;
		box-sizing: border-box;
		padding: 0 50px;
		background: #fff;
	}
	.cart_head>img{
		height: 100%;
		
	}
	.search{
		height: 32px;
		width: 515px;
		border: 3px solid #f40;
		position: relative;
		float: right;
	}
	.search>input:nth-child(1){
		height: 32px;
			width: 200px;
		border: 0;
		position: absolute;
		top: 0;
		left: 0;
		box-sizing: border-box;
	}
	.search>input:nth-child(2){
		width: 80px;
		height: 100%;
		background: #f40;
		color: #fff;
		position: absolute;
		right: 0;
		top:0;
		border: 0;
	}
	.cart_content{
		width: 990px;
		height: 200px;
		display: flex;
		margin-top: 30px;
	}
	.cart_content>img{
		display: block;
		width: 200px;
		height: 200px;
	}
	.msg{
		width: 400px;
		height: 200px;
		
	}
	.action{
		width: 345px;
		height: 200px;
	}
	.control{
		width: 100%;
		height: 43px;
		display: flex;
		justify-content: space-between;
	}
	.control>div{
		width: 118px;
		height: 39px;
		border: 1px solid #f40;
		text-align: center;
		line-height: 39px;
		padding: 0 10px;
		justify-content: space-around;
	}
	.back{
		color: #f40;
		background: #fff;
	}
	.conpont{
		color: #fff;
		background: #f40;
	}
	.van-icon-success{
		background: green;
		border-radius: 20px;
		text-align: center;
		color: #fff;
	}
</style>