<template>
	<view class="login">
		<swiper vertical="true" style="height: 100vh;">
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close" @click="goBack">
								<image class="close-img" src="../../static/login1.png"></image>
							</view>
							<view class="logo" >
								<image class="logo-imaage" src="../../static/tb1.jpg"></image>
							</view>
							<view class="tel">手机号注册</view>
							<LoginOther></LoginOther>
						</view>
						<view class="login-go">
							<view>已有账号去登录</view>
							<image src="../../static/login3.png"></image>
						</view>
					</view>	
				</scroll-view>
				
			</swiper-item>
			<swiper-item  >
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="close close-center" @click="goBack">
								<view>
									<image class="close-img" src="../../static/login1.png"></image>
								</view>
								<view class="login-go">
									<image src="../../static/login2.png"></image>
									<view>没有账号，去注册</view>
								</view>
								<view></view>
							</view>
							<view class="login-form">
								<view class="login-user">
									<text class="user-text">账号</text>
									<input type="text" value="" v-model="userName" placeholder="请输入手机号昵称" />
								</view>
								<view class="login-user">
									<text class="user-text">密码</text>
									<input type="text" value="" v-model="userPwd" placeholder="请输入密码6-16位字符" />
								</view>
							</view>
							<view class="login-quick">
								<view>忘记密码</view>
								<view>免密登录</view>
							</view>
							<view class="tel" @click="submit">登录</view>
							<view class="reminder">温馨提示：您可以选择免密登录更加方便</view>	
							<LoginOther></LoginOther>
						</view>
					</view>	
				</scroll-view>
			</swiper-item>
		</swiper>
		
			<!-- 第二部分 -->
			
		
	
	</view>
</template>

<script>
	import LoginOther from '../../components/login/login-other.vue'
	export default {
		data() {
			return {
				// 用户输入内容
				userName:"",
				userPwd:"",
				// 验证规则
				// rules:{
				// 	userName:{
				// 		rule:/\S/,
				// 		msg:"账号不能为空"
				// 	},
				// 	userPwd:{
				// 		rule:/[0-9a-zA-z]{6,16}$/
				// 		msg:"密码应该为6-16位"
				// 	}
					
				// },
					// this.rule.userName.rule.test{ this.userName }
				
			}
		},
		components:{
			LoginOther
		},
		methods: {
			// 关闭当前页面，返回上一页
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			// 点击登录
			submit(){
				// if( !this.validata('userName') ) return;
				// if( !this.validata('userPwd') ) return;
				
				// uni.showLoading({
				// 	title:"登录中..."
				// }),
				// setTimeout(()=>{
				// 	uni.hideLoading();
				// 	uni.navigateBack({
				// 		delta:1
				// 	})
				// },2000)

				uni.request({
					url:'http://localhost:3000/denglu',
					method:'POST',
					data:{user:this.userName, pass:this.userPwd},
					success:res=>{
						console.log(res.data);
						uni.setStorageSync('token',res.data.token);
						uni.navigateTo({
							url:'/pages/index/index'
						})
					}
				})		
				
			},
			
			// 判断验证
			// validata(key){
			// 	let bool = true;
			// 	if( !this.rules[key].rule.test(this[key]) ){
			// 		uni.showToast({
			// 			title:this.rules[key].msg,
			// 			icon:"none"
			// 		})
			// 		bool=false;
			// 		return false;
			// 	}
			// 	return bool;
			// }
		}
	}
</script>

<style scoped>
.login-tel{
	width: 100vw;
	height: 100vh;
}

.tel-main{
	padding: 0 20rpx;
}
.close{
	padding:120rpx 0;
}


.close-img{
	width: 60rpx;
	height: 60rpx;
}

.logo{
	padding-bottom: 100rpx;
	display: flex;
	justify-content: center;
}

.tel{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: #ffffff;
	border-radius: 40rpx;
	background-color: darkorange;
}

/* 其他登录方式 */


.login-go{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.login-go image{
	width: 60rpx;
	height:60rpx;
}

/* 第二部分 */
.
.close-center{
	display: flex;
	
	
}

.close-center view{
	flex:1;
}

.login-form{
	padding-top:100rpx;
}

.login-user{
	font-size: 32rpx;
	padding: 10rpx 0;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}

.user-text{
	padding-right: 10rpx;
}

.login-quick{
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0;
}

.reminder{
	color:#CCCCCC;
	padding:20rpx 0;
	text-align: center;
}
</style>
