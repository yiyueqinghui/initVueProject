// 官方参考地址：https://element.eleme.cn/#/zh-CN/component/quickstart
// 常见问题参考地址：https://blog.csdn.net/yiyueqinghui/article/details/122100510

import Vue from 'vue';
import {
  Icon,
  Row,
  Col,
  Button,
  Loading,
  MessageBox,
  Message,
} from 'element-ui';


Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);



Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;