<template>
	<view class="goods_all">
		<test></test>
	</view>
</template>

<script>
	import test from '../../components/test/test.vue'
	export default {
		data() {
			return {
				pageindex:1
			}
		},
		components:{
			"test":test
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(){
			   const res = await this.$myRuquest({
				   url:''
			   })
			   console.log(res)
			}
		},
		onLoad(){
			this.getGoodsList()
		},
		onReachBottom(){
			console.log('触底了')
			this.pageindex++
		}
	}
</script>

<style>
.goods_all{
	background: #eee;
}
</style>
