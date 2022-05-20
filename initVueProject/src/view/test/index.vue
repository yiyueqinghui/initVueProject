<template>
  <div class="container">
    <h4 class="top" style="margin-top: 0">Axios已简单封装</h4>
    <p>示例见当前组件view/test/index.vue 中,示例mounted中调用的方法</p>

    <h4 class="top">Vuex使用</h4>
    <p>见store/store.js 示例 ：{{ $Store.state.name }}</p>

    <h4 class="top">Router使用</h4>
    <p>见router/index.js</p>

    <h4 class="top">全局组件的引入示例</h4>
    <BorderComp></BorderComp>

    <h4 class="top">element-ui已经引入</h4>
    <el-button type="primary" size="mini">主要按钮</el-button>

    <h4 class="top">jquery已经引入</h4>

    <h4 class="top">less已配制</h4>
    <p>示例见当前组件page/index.vue的style</p>

    <h4 class="top">阿里字体图标库</h4>
    <p>
      <a href="https://www.iconfont.cn/manage/index">
        <i style="color: red" class="iconfont icon-share"></i>阿里图标库地址
      </a>
    </p>
    <p>
      这里采用的是class的方式引入图标库的<br />此项目在index.html中引入了一个阿里图标库，创建完成仓库并添加图标后，请自行修改地址
    </p>
    <p><b>提示：项目完成后，将在线图标下载到本地,以防万一</b></p>

    <h4 class="top">目录说明</h4>
    <img src="../../../static/img/directory.jpg" />
    <dl>
      <dd>1、公共组件都放到components文件夹下</dd>
      <dd>
        2、page文件夹下，每个路由对应一个文件夹，用来放只在该页面使用的vue文件
      </dd>
      <dd>
        3、全局公共css样式，写入static/css/common.css中，在main.js中引入即可
      </dd>
    </dl>
  </div>
</template>


<script>
import { postTopicsList, getTopicsList } from "@/api/topics/topics.js";
export default {
  name: "Test",
  data() {
    return {
      input: ""
    };
  },
  methods: {},
  mounted() {
    // 调用接口示例
    this.$nextTick(() => {
      // get请求
      getTopicsList({
        pageNo: 1,
        pageSize: 50
      }).then(res => {
        console.log("get请求获取列表", res);
      });

      // post请求
      postTopicsList({
        pageNo: 1,
        pageSize: 10
      }).then(res => {
        console.log("post请求修改列表", res);
      });
    });
  }
};
</script>

<style scoped="scoped" lang="less">
.container {
  padding: 0 20px;
  .top {
    margin-top: 30px;
    font-size: 25px;
  }
}
</style>
