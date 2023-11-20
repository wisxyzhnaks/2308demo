import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { 
			count: 0 ,
			list:[
				{
					checked:false,
					id:1,
					name:"11祺马嘉祺马嘉祺马嘉祺马嘉祺马嘉祺",
					color:"颜色",
					imgUrl:"../../static/img7.jpg",
					price:"23",
					num:1
				},
				{
					checked:false,
					id:2,
					name:"22嘉祺马嘉祺马嘉祺马嘉祺马嘉祺马嘉祺",
					color:"颜色",
					imgUrl:"../../static/img7.jpg",
					price:"23",
					num:1
				},
				{
					checked:false,
					id:3,
					name:"马嘉祺马嘉祺马嘉祺马嘉祺马嘉祺马嘉祺",
					color:"颜色",
					imgUrl:"../../static/img7.jpg",
					price:"23",
					num:1
				}
			]
		};
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});