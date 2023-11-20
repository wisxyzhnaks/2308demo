import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import shopcart from './modules/shopcart.js'
// import my from './modules/my.js'
// console.log(shopcart)
// import {mapState} from 'vuex'
export default new Vuex.Store({
	modules:{
		shopcart
		// my
		
	}
})