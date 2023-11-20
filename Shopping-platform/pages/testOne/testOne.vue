<template>
	<view class="shop-cart">
		
		<template v-if= "list.length">
		<!-- 自定义导航栏 -->
		<uniNavBar 
		     title="购物车" 
			 :right-text=' isNavBar?"完成":"编辑" '
			 fixed="true" 
			 status-bar="true"
			 @clickRight="isNavBar = !isNavBar"
			 >
		</uniNavBar>
		
		<!-- 商品内容 -->
		<view class="shop-list">
			<view class="shop-item" v-for='(item,index) in list' :key='index'>
				<label class="radio">
					<radio value="" color="#FF3333"/><text></text>
				</label>
				<image class="shop-img" :src="item.imgUrl"></image>
				
				<view class="shop-text">
					<view class="shop-name">{{item.name}}</view>
					<view class="shop-color">{{item.color}}</view>
					<view class="shop-price">
						<view >￥{{item.price}}</view>
						<view>*{{item.num}}</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 底部-->
		<view class="shop-foot">
			<label class="radio foot-radio">
				<radio value="" color="#FF3333"/><text>全选</text>
			</label>
			<view class="foot-total">
				<view class="foot-count">合计：￥<text style="color: #f24300;">0</text></view>
				<view class="foot-num">结算（0）</view>
			</view>
		</view>
		</template>
		<template v-else>
			<uniNavBar title="购物车" status-bar="true" fiex="true"></uniNavBar> 
			<view class="shop-else-list">
				<h1>{{counter.count}}</h1>
				<text>购物车空空~</text>
			</view>	 
				 
			
		</template>

	</view>
	<!-- <view class="cart">
		<view class="shops" style="background-color: blue;">
			<view class="shop_title" style="background-color: crimson;">
				<image src="../../static/logo.png"></image>
				<text>文轩花店</text>
			</view>
			<view class="shop">
				<image src="../../static/img6.jpg" mode="aspectFill"></image>
				<view class="info">
					<view class="name">你好</view>
					<view class="title">严浩翔</view>
					<view class="pic"><text>￥57元</text> <view class="nums">数量:9</view></view>
				</view>
			</view>
		</view>
		<view class="end">
			<text>总价:￥27元</text>
			<view>结算</view>
		</view>
	</view> -->
</template>

<script setup>
	import uniNavBar from '../../components/uni/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	// import store from '../../store/index.js'
	// import { mapState } from 'vuex'
	import { useCounterStore } from '@/stores/counter'
	const counter = useCounterStore()
	let list =counter.list;
	console.log(list)
</script>

<style scoped>
	.shop-list{
		padding-bottom: 100rpx;
	}
	
	.shop-else-list{
		position: absolute;
		left: 0;
		top: 0;
		right:0;
		bottom:0;
		background-color: #F7F7F7;
		width: 100%;
		height:100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shop-item{
		display: flex;
		padding: 20rpx;
		align-items: center;
		background-color: #F7F7F7;
		margin-bottom: 10rpx;
	}
	
	.shop-img{
		width: 200rpx;
		height: 200rpx;
	}
	.shop-text{
		flex: 1;
		padding-left: 20rpx;
	}
	
	.shop-name{
		font-size: 32rpx;
	}
	.shop-color{
		font-size: 24rpx;
		color: #c7c5c7;
	}
	
	.shop-price{
		display: flex;
		justify-content: space-between;
	}
	
	.shop-foot{
		background: #FFFFFF;
		border-top: 2rpx solid #F7F7F7;
		position: fixed;
		bottom: 90rpx;
		left: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.foot-radio{
		padding-left: 20rpx;
	}
	
	.foot-total{
	     display: flex;
	}
	
	.foot-count{
		line-height: 120rpx;
		padding: 0 20rpx;
		font-size: 32rpx;
	}
	
	.foot-num{
		background-color: #f24300;
		color: #FFFFFF;
		padding: 0 60rpx;
		line-height: 120rpx;
	}
</style>
