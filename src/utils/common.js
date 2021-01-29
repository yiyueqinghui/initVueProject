import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

export default {
	// get 请求
	axiosGet(url,params={}){
		url = /^[(http://)|(https://)]/.test(url) ? url : `${process.env.WEPAPI}${url}`; 
		return new Promise((resolve, reject) => {
			axios.get(url, { params }).then((res) => {
				resolve(res.data)
			}).catch(err => {
				Message({
					message:err,
					type: 'warning'
				})
				reject(err)
			})
		})
	},
	// post请求
	axiosPost(url,data){
		url = /^[(http://)|(https://)]/.test(url) ? url : `${process.env.WEPAPI}${url}`; 
		return new Promise((resolve, reject) => {
			axios({
				url:url,
				method: 'post',
			    data: qs.stringify(data)   //注意，这里参数提交方式是x-www-form-urlencoded
			}).then(res => {
				resolve(res.data)
			}).catch(err=>{
				Message({
					message:err,
					type: 'warning'
				})
				reject(err);
			})
		})
	}


}