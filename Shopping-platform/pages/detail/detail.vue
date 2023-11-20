<template >
	<view class="details">
		<!-- 商品图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id" mode="aspectFill">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<!-- 商品和名称 -->
		<viev class="details-goods">
			<view class="detail_partOne">
				<view class="partOne_lf">￥999起</view>
				<view class="partOne_ri">券后￥79</view>
			</view>
			<view class="detail_partTwo">
				<text class="partTwo_lf">中国质造</text>
				<text class="partTwo_mi">官方正品，品质保证</text>
				<view class="partTwo_ri">一滴泪液体眼影闪粉亮片卧蚕珠光偏光防水高光液提亮单色眼妆</view>
			</view>
		</viev>
		<!-- 商品详情图 -->
		<view>
			<view>
				<image class="detail_img" src="../../static/img21.jpg"></image>
				<image class="detail_img" src="../../static/img20.jpg"></image>
				<image class="detail_img" src="../../static/img23.jpg"></image>
				<image class="detail_img" src="../../static/img24.jpg"></image>
				<image class="detail_img" src="../../static/img25.jpg"></image>
			</view>
		</view>
		<view class="partfive_title">猜你喜欢</view>
		<test></test>
		<!-- 底部 -->
		<view class="details-foot">
			<view>
				<image src="../../static/list1.png" class="foot_img"></image>
			</view>
			<view>
				<image src="../../static/list4.png" class="foot_img"></image>
			</view>
			<view class="add-shopcart"  @tap="showPop">加入购物车</view>
			<view class="purchase" @tap="showPop">立即购买</view>
		</view>
		
		<!-- 底部弹出层 -->
		<view class="pop" v-show="isShow" @touchmove.stop.prevent=''>
			<view class="pop-mask" @tap="hidePop"></view>
			<view class="pop-box" :animation="animationData">
				<view>
					<image class="pop-img" src="../../static/img9.jpg"></image>
					<text class="pop-h">￥269</text>
				</view>
				<!-- 颜色栏 -->
				<view class="pop-color">
					<view>颜色</view>
					<view  class="popclors_box">
						<view class="popclors">
							<image src="../../static/img9.jpg" mode="aspectFill"></image>
							<view class="popclors-title">红棕色</view>
						</view>
						<view  class="popclors">
							<image src="../../static/img9.jpg" mode="aspectFill"></image>
							<view class="popclors-title">红棕色</view>
						</view>
						<view  class="popclors">
							<image src="../../static/img9.jpg" mode="aspectFill"></image>
							<view class="popclors-title">红棕色</view>
						</view>
						<view  class="popclors">
							<image src="../../static/img9.jpg" mode="aspectFill"></image>
							<view class="popclors-title">红棕色</view>
						</view>
						<view  class="popclors">
							<image src="../../static/img9.jpg" mode="aspectFill"></image>
							<view class="popclors-title">红棕色</view>
						</view>
					</view>
				</view>
				<!-- 尺码 -->
				<!-- <view>
					<view>尺码</view>
					<view>
						<text class="popCm">1</text>
						<text class="popCm">2</text>
						<text class="popCm">3</text>
						<text class="popCm">4</text>
						<text class="popCm">5</text>
					</view>
				</view> -->
				<!-- 购买数量 -->
				<view class="popnumAll">
					<view class="pop-num">购买数量</view>
					<view class="popnumItem">
						<view class="pople">-</view>
						<view class="popmi">1</view>
						<view class="popri">+</view>
					</view>
				</view>
				<view>
					<view class="pop-sub">加入购物车</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import test from '../../components/test/test.vue'
	export default {
		data() {
			return {
				isShow: false,
				animationData:{},
				swipers:[
					{
						id:1,
						src:'../../static/img9.jpg' 
					},
					{
						id:2,
						src:'../../static/img10.jpg'
					},
					{
						id:3,
						src:'../../static/img11.jpg'
					},
					{
						id:4,
						src:'../../static/img11.jpg'
					},
					{
						id:5,
						src:'../../static/img11.jpg'
					}
				]
			}
		},
		components:{
			test
		},
		methods: {
			showPop(){
				
				var animation = uni.createAnimation({
					duration:200
					
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				
				this.isShow = true;
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData = animation.export();
				},200)
			},
			hidePop(){
				var animation = uni.createAnimation({
					duration:200
					
				})
				animation.translateY(600).step();
				this.animationData = animation.export();
				
				this.isShow = true;
				setTimeout(()=>{
					animation.translateY(0).step();
					this.isShow = false;
				},200)
			}
			
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
	}
	swiper {
		width: 100%;
		height: 400px;
	}
	
	swiper image {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.details{
		padding-bottom: 110rpx;
	}
	.detail_partOne{
		width: 100%;
		display: flex;
		color: #f44e00;
		font-size: 45rpx;
		margin-top: 40rpx;
	}
	
	.partOne_lf{
		margin-left: 25rpx;
	}
	.partOne_ri{
		font-size: 35rpx;
		color: #fff;
		background-color: #f44e00;
		border-radius: 20px;
		width: 220rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin-left: 20rpx;
	}
	
	.detail_partTwo{
		margin-top: 30rpx;
	}
	
	.partTwo_lf{
		background-color: #fb8100;
		border-radius: 25px;
		width: 220rpx;
		height: 60rpx;
		line-height: 50rpx;
		text-align: center;
		color: #fff;
		margin-left: 30rpx;
	}
	.partTwo_mi{
		margin-left: 15rpx;
	}
	.partTwo_ri{
		font-size: 43rpx;
		margin-left: 30rpx;
	}
	
	.detail_img{
		width: 100%;
		height: 900rpx;
	}
	
	.partfive_title{
		width: 100%;
		height: 70rpx;
		line-height: 70rpx;
		color: #ee2800;
		font-size: 40rpx;
		text-align: center;
	}
	
	.details-foot{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 110rpx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.foot_img{
		width: 60rpx;
		height: 60rpx;
		border-radius: 100%;
		text-align: center;
		margin: 0 10rpx;
	}
	
	.add-shopcart{
		margin: 0 40rpx;
		padding: 6rpx 30rpx;
		background-color: #fb8100;
		color: #fff;
		border-radius: 40rpx;
		height: 60rpx;
		line-height: 60rpx;
	}
	
	.purchase{
		margin: 0 30rpx;
		padding: 6rpx 30rpx;
		background-color: #f44e00;
		color: #fff;
		border-radius: 40rpx;
		height: 60rpx;
		line-height: 60rpx;
	}
	
	.pop{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	
	.pop-mask{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
	
	.pop-box{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 700px;
		background-color: #fff;
	}
	
	.pop-img{
		width: 200rpx;
		height: 200rpx;
		border-radius: 30rpx;
	}
	
	.pop-h{
		
		font-size: 80rpx;
		line-height: 200rpx;
	}
	.pop-num{
		padding: 20rpx 20rpx;
		display: flex;
		justify-content: space-between;
	}
	.pop-sub{
		line-height: 80rpx;
		background-color: #ee2800;
		color: #fff;
		text-align: center;
	}
	
	.popclors_box{
		display: flex;
		flex-wrap: wrap;
		
	}
	.popclors{
		width: 250rpx;
		height: 400rpx;
		text-align: center;
		
	}
	
	
	.popclors>image{
		width: 200rpx;
		height: 200rpx;
		margin: 0 auto;
		border-radius: 20px;
	}
	
	.popclors-title{
		font-size: 40rpx;
	}
	
	.popCm{
		
	}
	
	.popnumAll{
		display: flex;
	}
	
	.popnumItem{
		display: flex;
		margin-left: 400rpx;
	}
	
	.pople{
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #535353;
		text-align: center;
		line-height: 50rpx;
		font-size: 30rpx;
		
	}
	
	.popmi{
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #535353;
		text-align: center;
		line-height: 50rpx;
		font-size: 30rpx;
	}
	
	.popri{
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #535353;
		text-align: center;
		line-height: 50rpx;
		font-size: 30rpx;
	}
</style>
