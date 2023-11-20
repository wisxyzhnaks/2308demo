<template>
	<view class="my-add-path">
		<view class="path-item">
			<view>收件人</view>
			<input type="text" value="" placeholder="收件人姓名"/>
		</view>
		<view class="path-item">
			<view>手机号</view>
			<input type="text" value="" placeholder="11位手机号"/>
		</view>
		<view class="path-item">
			<view>所在地区</view>
			<view @click="showCityPicker">{{cityName}} ></view>
			<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault"
			@onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm">
			</mpvue-city-picker>
		</view>
		<view class="path-item">
			<view>详细地址</view>
			<input type="text" value="" placeholder="5-60个字符"/>
		</view>
		<view class="path-item">
			<view>设为默认地址</view>
			<label>
				<radio value="" color="#FF3333" /><text></text>
			</label>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../util/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		data() {
			return {
				cityName:"请选择"
				pickerValueDefault: [0,0,1]
			}
		},
		components:{
			mpvueCityPicker
		},
		methods: {
			showCityPicker(){
				this.$refs.mpvueCityPicker.show();
			},
			onChange(e){
				console.log(e);
			},
			onCancel(e){
				console.log(e);
			}
			onConfirm(e){
				this.cityName = e.label;
			}
			
		}
	}
</script>

<style>
.my-add-path{
	padding-left:20rpx;
}
.path-item{
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 16rpx 0;
	width: 100%;
	border-bottom: 2rpx solid #cccccc;
}

.path-item input{
	flex:1;
	text-align: left;
	padding-left: 10rpx;
}
</style>
