<template>
	<view class="my-path-list">
		<view class="path-list">
			<view class="path-item">
				<view class="item-main">
					<view class="item-name">严浩翔</view>
					<view>19985016208</view>
				</view>
				<view class="item-main">
					<view class="active">默认</view>
					<view>重庆市南岸区长江国际</view>
				</view>
				
			</view>
		</view>
		<view class="add-path">
			<view class="add-path-btu" @click="goAddPath">新增地址</view>
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
			goAddPath(){
				uni.navigateTo({
					url:'../my-add-path/my-add-path'
				})
			}
		}
	}
</script>

<style>

.path-list{
	padding-left:20rpx;
}
.path-item{
	padding:10rpx;
	border-bottom:2rpx solid #CCCCCC;
}

.item-main{
	display:flex;
	align-items: center;
}
.item-name{
	padding-right: 10rpx;
}
.active{
	padding: 2rpx 6rpx;
	background:  #f55a00;
	color: #ffffff;
	border-radius:20rpx;
	font-size: 26rpx;
	padding-right: 10rpx;
	text-align: center;
}

.add-path{
	padding:20rpx;
	width:100%;
	display:flex;
	justify-content: center;
}

.add-path-btu{
	border:2rpx solid #f55a00;
	color:  #f55a00;
	border-radius:30rpx;
	padding:6rpx 60rpx;
}
</style>
