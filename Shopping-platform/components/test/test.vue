<template>
	<view>
		<view class="goods_list">
			<view class="goods_item" v-for="item in goods" :key="item.id" @click="goDetails">
				<image :src="item.src"></image>
				<view class="goods_title">
					{{item.text}}
				</view>
				<view class="list_one">包邮</view>
				<view class="list_two">{{item.num}}+付款</view>
				<view class="list_three">
					<view class="three_left">￥{{item.pic}}</view>
					<view class="three_right">去购买</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"test",
		props:['goods'],
		data() {
			return {
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
					},
					{
						id:10,
						src:'../../static/img6.jpg',
						text:'棕色美瞳半年抛',
						num:4000,
						pic:19.9
					},
					{
						id:11,
						src:'../../static/img7.jpg',
						text:'珠光九色眼影盘',
						num:1000,
						pic:22,
						
					}
				]
			};
		},
		methods: {
			goDetails(){
				uni.navigateTo({
					url:'../../pages/detail/detail'
				})
				
			}
		}
	}
</script>

<style>
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