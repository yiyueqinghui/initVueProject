// 经常使用的组件，定义为全局组件
import BorderComp from './components/border.vue'


// 全局组件库
let globalCompList = {
	"BorderComp": BorderComp
}

const components = {
	install(Vue) {
		Object.keys(globalCompList).forEach(key => {
			Vue.component(key, globalCompList[key]);
		});
	}
}
//判断
// if (typeof window !== 'undefined' && window.Vue) {
// 	install(window.Vue);
// }

export default components;