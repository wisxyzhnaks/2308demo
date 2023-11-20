<template>
	<view class="my-config">
		<view class="config-item">
			<view>个人资料</view>
			<view class="config-mark"> > </view>
			
		</view>
		<view class="config-item" @click="goPathlist">
			<view>地址管理</view>
			<view class="config-mark"> > </view>
			
		</view>
		<view class="config-item">
			<view>实名认证</view>
			<view class="config-mark"> > </view>
			
		</view>
		<view class="config-item">
			<view>关于我们</view>
			<view class="config-mark"> > </view>
			
		</view>
		<view class="config-item">
			<view>清除缓存</view>
			<view class="config-mark"> > </view>
			
		</view>
		<view class="my-exit">退出</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goPathlist(){
				uni.navigateTo({
					url:'../my-path-list/my-path-list'
				})
			}
		}
	}
</script>

<style>
.config-item{
	display: flex;
	justify-content: space-between;
	padding:20rpx 0 20rpx 20rpx;
	border-bottom:2rpx solid #CCCCCC;
}

.my-exit{
	background-color: #f45200;
	width: 100%;
	line-height: 80rpx;
	text-align: center;
	color:#fff;
}
.config-mark{
	padding-right:10rpx;
}
</style>
