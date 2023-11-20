<template>
	<header>
		<img src="../assets/login/taobao.png" alt="" />
		<div class="null"></div>
		<div class="h_right">
			<p>网站无障碍</p>
			<p><van-icon name="comment" color="#FF0000" size="1rem"/>"登录页面"改进建议</p>
		</div>
	</header>
	<main>
		<form action="">
			<van-tabs v-model:active="active" line-width=60 title-inactive-color="black" color="#000000" shrink=true>
			  <van-tab title="密码登录">
				  <label for="" class="input">
					  <van-icon name="manager" />
					  <input type="text" />
				  </label>
				  <label for="" class="input">
	   				  <van-icon name="lock" />
					  <input type="text" />
				  </label>
				  <input type="submit" class="login" value="登录" @click="onclick"/>
				  <p class="p1"><van-icon name="weibo" color="#FF0000" size="1rem"/>微博登录<van-icon name="alipay" color="#0000FF" size="1rem"/>支付宝登录</p>
				  <p class="p2">忘记密码 忘记账号 名免费注册</p>
			  </van-tab>
			  <van-tab title="短信登录">
				  <label for="" class="input">
					  <img src="" alt="" /><input type="text" />
				  </label>
				  <label for="" class="input">
					  <img src="" alt="" /><input type="text" />
				  </label>
			  </van-tab>
			</van-tabs>
			
		</form>
	</main>
</template>

<script setup>
	import {useRouter} from 'vue-router'
	function onclick(){
		window.localStorage.setItem("token",true);
		let router = useRouter();
		router.push({
			name:'home'
		})
	}
	
	
</script>

<style>
	body{margin: 0;padding: 0;}
	header{
		width: 100%;
		height:88px;
		padding:22px 42px;
		box-sizing: border-box;
		
	}
	
	header>img{
		float:left;
		display:block;
		height:44px;
		width:72px;			
	}
	.null{
		display: inline-block;
		clear: both;
	}
	header>.h_right{
		float:right;
	    height:44px;
		width:160px;
		font-size:12px;
		color:#666666;
		line-height: 6px;
	}
	main{
		width: 100%;
		height:600px;
		background: url(../assets/login/login_back.png);
		background-position: center;
		position: relative;
	}
	form{
		position: absolute;
		display: block;
		height: 350px;
		width:350px;
		padding: 25px;
		right: 100px;
		top: 100px;
		background: #fff;
		box-sizing: border-box;
	}
	.input{
		width: 300px;
		height: 42px;
		display: block;
		margin-top: 20px;
		position: relative;
	}
	.input>.van-icon{
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 30px;
		text-align: center;
		background: #ccc;
		color: #fff
	}
	.input>input{
		position: absolute;
		left: 40px;
		top: 0;
		width: 248px;
		height: 38px;
		border: 1px solid #ccc;
		padding: 0;
	}
	.login{
		width: 300px;
		height: 42px;
		color: #fff;
		text-align: center;
		line-height: 42px;
		background-color: #f40;
		border: 0px;
		margin-top: 20px;
	}
	form p{
		font-size: 12px;
		color: #6c6c6c;
		height: 20px;
		line-height: 20px;
	}
	.p2{
		text-align: right;
	}
</style>