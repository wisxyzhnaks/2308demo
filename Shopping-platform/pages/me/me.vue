<template>
	<view class="me">
		<!-- 头部 -->
		<view class="my-header">
			<view class="header-me">
				<view class="header-config" @click="goConfig">
					<image class="config-img" src="../../static/iconimg1.png"></image>
				</view>
				<view class="header-logo" @click="gotoLogin">
					<image class="logo-img" src="../../static/img9.jpg"></image>
					<view class="logo-name">用户昵称</view>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="order">
			<view class="order-title">
				<view>我的订单</view>
				<view>全部订单 ></view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<image class="order-img" src="../../static/iconimg6.png"></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/iconimg3.png"></image>
					<view>待发货</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/iconimg2.png"></image>
					<view>待收货</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/iconimg4.png"></image>
					<view>待评价</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="../../static/iconimg5.png"></image>
					<view>退款/售后</view>
				</view>
			</view>
		</view>
		
		<!-- 内容列表 -->
		<view class="my-content">
			<view class="my-content-list">
				<view class="my-content-item">
					<image class="content-img" src="../../static/list1.png"></image>
					<view class="my-content-left">我的收藏</view>
					<view class="my-content-right">></view>
				</view>
				<view class="my-content-item">
					<image class="content-img" src="../../static/list2.png"></image>
					<view class="my-content-left">浏览记录</view>
					<view class="my-content-right">></view>
				</view>
				<view class="my-content-item">
					<image class="content-img" src="../../static/list4.png"></image>
					<view class="my-content-left">我的收藏</view>
					<view class="my-content-right">></view>
				</view>
				<view class="my-content-item">
					<image class="content-img" src="../../static/list6.png"></image>
					<view class="my-content-left">我的红包</view>
					<view class="my-content-right">></view>
				</view>
				<view class="my-content-item">
					<image class="content-img" src="../../static/icon_me.png"></image>
					<view class="my-content-left">我的快递</view>
					<view class="my-content-right">></view>
				</view>
				<view class="my-content-item">
					<image class="content-img" src="../../static/icon_me.png"></image>
					<view class="my-content-left">我的收藏</view>
					<view class="my-content-right">></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goConfig(){
				uni.navigateTo({
					url:'../my-config/my-config'
				})
			},
			gotoLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style scoped>
.my-header{
	background: url(../../static/bj2.jpg) no-repeat;
	width: 100%;
	height: 400rpx;
}

.header-me{
	position: relative;
	top: 100rpx;
}

.header-config{
	position: absolute;
	left: 40rpx;
}

.header-logo{
	position: absolute;
	left: 50%;
	margin-left: -60rpx;
	width: 120rpx;
	/* height: 120rpx; */
}


.config-img{
	width: 60rpx;
	height: 60rpx;
}

.logo-img{
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #fff;
	border-radius: 50%;
	background-color: #fff;
}

.logo-name{
	font-size:boild;
	color: #fff;
}

.order-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
}

.order-list{
	padding: 20rpx;
	display: flex;
}

.order-item{
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.order-img{
	width: 70rpx;
	height: 70rpx;
}

.my-content{
	margin:20rpx 0;
	padding:20rpx 0;
}
.my-content-item{
	display: flex;
	/* justify-content: space-between; */
	align-items: auto;
	padding: 20rpx 0;
	border-bottom: 2px solid #CCCCCC;
}
.my-content-left{
	margin-left:20rpx;
}

.my-content-right{
	margin-left:530rpx;
}
.content-img{
	width: 40rpx;
	height: 40rpx;
}
</style>
