<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id" mode="aspectFill">
				<image :src="item.src"></image>
			</swiper-item>
			
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view class="image_box">
				<image :src="item.icon"></image>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<test :goods="goods"></test>
		</view>
	</view>
</template>

<script>
	import test from '../../components/test/test.vue'
	export default {
		data() {
			return {
				swipers:[
					{
						id:1,
						src:'../../static/img2.jpg' 
					},
					{
						id:2,
						src:'../../static/img3.jpg'
					},
					{
						id:3,
						src:'../../static/img1.jpg'
					}
				],
				goods:[
					{
						id:4,
						src:'../../static/img4.jpg',
						text:'棕色美瞳半年抛',
						num:1000,
						pic:9.9
					},
					{
						id:5,
						src:'../../static/img5.jpg',
						text:'棕色美瞳半年抛',
						num:20000,
						pic:40
					},
					{
						id:6,
						src:'../../static/img6.jpg',
						text:'棕色美瞳半年抛',
						num:4000,
						pic:19.9
					},
					{
						id:7,
						src:'../../static/img7.jpg',
						text:'珠光九色眼影盘',
						num:1000,
						pic:22
					},
					{
						id:8,
						src:'../../static/img4.jpg',
						text:'棕色美瞳半年抛',
						num:10000,
						pic:29.9
					},
					{
						id:9,
						src:'../../static/img5.jpg',
						text:'棕色美瞳半年抛',
						num:3000,
						pic:60
					}
				],
				navs:[
					{
						icon:'../../static/nav_img1.png',
						title:'天天特卖',
						path:'/pages/goods/goods'
					},
					{
						icon:'../../static/nav_img2.png',
						title:'天猫超市',
						path:'/pages/market/market'
					},
					{
						icon:'../../static/nav_imgs.png',
						title:'开心农场',
						path:'/pages/farm/farm'
					},
					{
						icon:'../../static/nav_img4.png',
						title:'摇摇现金',
						path:'/pages/money/money'
					}
				]
			}
		},
		onLoad() {
			

		},
		components:{
			"test":test
		},
		methods: {
			// 获取热门商品列表数据
			
			// 导航处理
			navItemClick (url) {
				uni.navigateTo({
					url
				})
				
			}
			
			
			// }

		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.content{
		height:100vh;
		padding-bottom: 110rpx;
	}
	swiper {
		width: 100%;
		height: 200px;
	}
	
	swiper image {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.nav {
		display: flex;
		margin-top: 20rpx;
		background: #fbe4dd;
		border-radius: 15rpx;
		height: 180rpx;
		
	}
	
	.nav_item {
		width: 25%;
		text-align: center;
		
	}
	
	.image_box{
		width: 120rpx;
		height: 120rpx;
		background: #e0e0e0;
		border-radius: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-top: 15rpx;
	}
	
	
	.nav_item image {
		width: 70rpx;
		height: 70rpx;
		display: block;
		margin: 0 auto;
		
	}
	
	.hot_goods {
		background:#eee;
	}
	
	.tit {
		height: 50px;
		line-height: 50px;
		color: #fc5531;
		text-align: center;
		letter-spacing: 20px;
		background:#fff;
		margin:4rpx 0;
	}
	
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-between;
	}
	
	.goods_item{
		width: 355rpx;
		background: #fff;
		margin: 10rpx 0;
	}
	.goods_item image{
		width: 100%;
		height: 190px;
	}
	
	.goods_title{
		font-size: 36rpx;
		margin-left: 20rpx;
	}
	
	.list_one{
		border: 1px red solid;
		width: 20%;
		border-radius: 10rpx;
		text-align: center;
		color: #fc5531;
		margin: 20rpx 20rpx;
	}
	
	.list_two {
		color: #fc5531;
		margin: 10rpx 20rpx;
	}
	
	.list_three {
		display: flex;
		border-radius: 20rpx;
		background-color: aqua;
		width: 90%;
		height: 80rpx;
		margin-left: 20rpx;
	}
	
	.list_three .three_left{
		width: 65%;
		background-color:  #fc5531;
		color: #fff;
		font-size: 50rpx;
		border-bottom-left-radius: 10rpx;
		border-top-left-radius: 10rpx;
		line-height: 80rpx;
	}
	
	.list_three .three_right{
		width: 35%;
		background-color: #fcd149;
		border-top-right-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		font-size: 35rpx;
		line-height: 80rpx;
		color: #fc5531;
	}
</style>