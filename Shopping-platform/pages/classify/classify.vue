<template>
	<view class="content">
		
		<view class="box">
			<view class="aside">
				<view :class="{show:index===action}" v-for="item,index in arr" :key="index" @click="changeAction(index)">{{item.type}}</view>
			</view>
			<view class="section">
				<scroll-view class="scroll" :scroll-y="true" :scroll-with-animation="true" :scroll-into-view="ids">
					<view :id="item.id" v-for="item,index in arr" :key="index">
						<view class="h1">{{item.type}}</view>
						<view class="msg">{{item.msg}}</view>
						<!-- <view class="list"> -->
							<view class="right_item"  >
								<!-- <image :src="value.src" mode="aspectFill"></image>
								<view class="info">
									<view class="name">{{value.name}}</view>
									<view class="title">{{value.title}}</view>
									<view class="pic"><text>￥{{value.pic}}元</text> <view class="btn" @click="add(value)">+</view></view>
								</view> -->
								<view class="rigt_item_one"  v-for="value,indexs in item.list" @click="goDetail">
									<image :src="value.src"></image>
									<view class="right_text">{{value.name}}</view>
								</view>
							</view>
						<!-- </view> -->
						
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				action: 0,
				ids:'demo1',
				arr: [
					{
						id:'demo1',
						type: '推荐',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img8.jpg',
							name: '女装'
						}, {
							id: 2,
							src: '../../static/img9.jpg',
							name: '鞋包'
						}, {
							id: 3,
							src: '../../static/img13.jpg',
							name: '饰品'
						}, {
							id: 4,
							src: '../../static/img12.jpg',
							name: '家纺'
							
						}, {
							id: 5,
							src: '../../static/img14.jpg',
							name: '美妆'
						}, {
							id: 6,
							src: '../../static/img11.jpg',
							name: '百货'
						}]
					},
					{
						id:'demo2',
						type: '女装',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
						}, {
							id: 2,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
						}, {
							id: 3,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
						}, {
							id: 4,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
							
						}, {
							id: 5,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
						}, {
							id: 6,
							src: '../../static/img8.jpg',
							name: '秋冬上新'
						}]
					},
					{
						id:'demo3',
						type: '鞋包',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img9.jpg',
							name: '皮鞋单鞋'
						}, {
							id: 2,
							src: '../../static/img9.jpg',
							name: '皮鞋单鞋'
						}, {
							id: 3,
							src: '../../static/img9.jpg',
							name: '皮鞋单鞋'
						}, {
							id: 4,
							src: '../../static/img10.jpg',
							name: '精选包包'
							
						}, {
							id: 5,
							src: '../../static/img10.jpg',
							name: '精选包包'
						}, {
							id: 6,
							src: '../../static/img10.jpg',
							name: '精选包包'
						}]
					},
					{
						id:'demo4',
						type: '百货',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img11.jpg',
							name: '日用百货'
						}, {
							id: 2,
							src: '../../static/img11.jpg',
							name: '日用百货'
						}, {
							id: 3,
							src: '../../static/img11.jpg',
							name: '日用百货'
						}, {
							id: 4,
							src: '../../static/img11.jpg',
							name: '日用百货'
							
						}, {
							id: 5,
							src: '../../static/img11.jpg',
							name: '日用百货'
						}, {
							id: 6,
							src: '../../static/img11.jpg',
							name: '日用百货'
						}]
					},
					{
						id:'demo5',
						type: '饰品',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img13.jpg',
							name: '戒指'
						}, {
							id: 2,
							src: '../../static/img13.jpg',
							name: '戒指'
						}, {
							id: 3,
							src: '../../static/img13.jpg',
							name: '戒指'
						}, {
							id: 4,
							src: '../../static/img13.jpg',
							name: '戒指'
							
						}, {
							id: 5,
							src: '../../static/img13.jpg',
							name: '戒指'
						}, {
							id: 6,
							src: '../../static/img13.jpg',
							name: '戒指'
						}]
					},
					{
						id:'demo6',
						type: '美妆',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img14.jpg',
							name: '气垫'
						}, {
							id: 2,
							src: '../../static/img14.jpg',
							name: '气垫'
						}, {
							id: 3,
							src: '../../static/img14.jpg',
							name: '气垫'
						}, {
							id: 4,
							src: '../../static/img14.jpg',
							name: '气垫'
							
						}, {
							id: 5,
							src: '../../static/img14.jpg',
							name: '气垫'
						}, {
							id: 6,
							src: '../../static/img14.jpg',
							name: '气垫'
						}]
					},
					{
						id:'demo7',
						type: '手机',
						msg: '',
						list: [{
							id: 1,
							src: '../../static/img15.jpg',
							name: '华为'
						}, {
							id: 2,
							src: '../../static/img15.jpg',
							name: '华为'
						}, {
							id: 3,
							src: '../../static/img15.jpg',
							name: '华为'
						}, {
							id: 4,
							src: '../../static/img15.jpg',
							name: '华为'
							
						}, {
							id: 5,
							src: '../../static/img15.jpg',
							name: '华为'
						}, {
							id: 6,
							src: '../../static/img15.jpg',
							name: '华为'
						}]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			// gotoDetail(list){
				
			// },
			goDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			},
			changeAction(index){
				this.action=index
				this.ids=this.arr[index].id
			},
			add(value){
				// this.nums++
				// console.log(typeof uni.getStorageSync('cart'))
				// 获取缓存
				let arr = JSON.parse(uni.getStorageSync('cart'));
				// console.log(arr)
				// 判断数组中是否包含现在有的商品
				let flag = arr.some(item=>{
					return value.name===item.name
				})
				// console.log(flag)
				if(!flag){
					value.num = 1;
					arr.push(value)
				}else{
					arr.forEach(item=>{
						if(value.name===item.name){
							item.num++
						}
					})
				}
				let str = JSON.stringify(arr);
				uni.setStorage(
					{
						key:'cart',
						data:str,
						success:()=>{
							// 提示信息
							uni.showToast({
								title: '添加成功',
								duration: 500
							});
						}
					}
				)
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	

	.box {
		width: 100%;
		height: calc(100vh - 130px);
		display: flex;
	}

	.aside {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		background:rgba(248, 248, 248, 1);
	}
	.aside>view{
		width:100%;
		height:60px;
		text-align: center;
		line-height: 60px;
		color: #333;
		border-top: 1px solid #eee;
	}
	.aside>view.show{
		background: #fc5531;
		color: #ffffff;
	}
	
	
	.section {
		width: calc(100% - 90px);
		height: 100%;
		
	}
	.scroll{
		height:100%;
	}
	.scroll>view{
		width:100%;
		height:auto;
	}
	.h1{
		width:100%;
		height:19px;
		color: rgba(56, 56, 56, 1);
		font-size: 18px;
		line-height:19px;
		text-align: left;
		font-weight: bold;
		margin-top:30px;
	}
	.msg{
		width:100%;
		height: auto;
		color: rgba(166, 166, 166, 1);
		font-size: 10px;
		text-align: left;
		margin-bottom:23px;
	}
	/* .list{
		width:100%;
		height:auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		
	} */
	/* .shop{
		width:100%;
		
		margin-bottom:21px;
		
		
	}
	
	.shop_item{
		width: 260px;
		height: 90px;
	}
	.shop_item>image{
		display:block;
		width:70px;
		height:70px;
	} */
	
	.right_item{
		width: 100%;
		/* height: 250rpx; */
		/* background-color: aqua; */
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
	
	.rigt_item_one{
		width: 180rpx;
		height: 230rpx;
		/* background-color: blueviolet; */
		
	}
	
	.rigt_item_one>image{
		width: 160rpx;
		height: 160rpx;
		margin: 10rpx 10rpx;
	}
	
	.right_text{
		text-align: center;
	}
	
	.info{
		width:174px;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.name{
		width:100%;
		height: 22px;
		color: rgba(56, 56, 56, 1);
		font-size: 15px;
		line-height: 22px;
		text-align: left;
		font-weight: bold;
	}
	.title{
		width: 100%;
		height: 26px;
		color: rgba(166, 166, 166, 1);
		font-size: 11px;
		line-height: 120%;
		text-align: left;
	}
	.pic{
		width:100%;
		height:22px;
		display:flex;
		justify-content: space-between;
	}
	.pic>text{
		color: rgba(56, 56, 56, 1);
		font-size: 15px;
		line-height:22px;
		text-align: left;
		font-weight: bold;
	}
	.btn{
		width:22px;
		height:22px;
		border-radius: 22px;
		background:rgba(136, 175, 213, 1);
		color:white;
		text-align: center;
		line-height: 22px;
		position:relative;
		/* z-index: 9999; */
	}
</style>