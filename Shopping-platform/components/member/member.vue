<template>
	<view class="member">
		<view class="member-top" style="display: flex;align-items: center;justify-content: center;">
		<view class="member-left">
			<view class="" style="width: 320rpx;height: 240rpx;background-color: #167d22;">
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-top: 40rpx;padding-left: 20rpx;">100元</view>	
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-left: 20rpx;">全品类券</view>
			</view>
		</view>
		<view class="member-right">
			<view class="" style="width: 320rpx;height: 240rpx;background-color: #167d22;">
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-top: 40rpx;padding-left: 20rpx;">300元</view>	
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-left: 20rpx;">运费券</view>
			</view>
		</view>	
		</view>
		<view class="member-bottom" style="display: flex;align-items: center;justify-content: center;">
		<view class="option-left">
	        <view class="" style="width: 320rpx;height: 240rpx;background-color: #167d22;">
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-top: 40rpx;padding-left: 20rpx;">VIP价</view>	
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-left: 20rpx;">购物优惠</view>
			</view>
		</view>
		<view class="option-right">
			<view class="" style="width: 320rpx;height: 240rpx;background-color: #167d22">
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-top: 40rpx;padding-left: 20rpx;">产品特权</view>	
			<view class="" style="font-size: 55rpx;color: #fbf9fc;padding-left: 20rpx;">免费尝鲜</view>
			</view>
		</view>		
		</view>
	</view>
</template>

<script>
	export default {
		name:"member",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.member{
	width: 100%;
	height: 600rpx;
	
}
.member-top{
	width: 700rpx;
	height: 240rpx;
	background-color: #FFFFFF;
	margin-left: 25rpx;
	margin-top: 60rpx;
	
}
.member-bottom{
	width: 700rpx;
	height: 240rpx;
	background-color:#FFFFFF;
	margin-top: 40rpx;
	margin-left: 25rpx;
}

.member-right{
	margin-left: 38rpx;
}
.option-right{
	margin-left: 38rpx;
}
</style>
