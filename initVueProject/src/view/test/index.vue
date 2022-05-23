<template>
  <div class="container">
    <h4 class="top" style="margin-top: 0">Axios已简单封装</h4>
    <p>示例见当前组件view/test/index.vue 中,示例mounted中调用的方法</p>

    <h4 class="top">Vuex + Vuex-persist结合使用</h4>
    <h4>
      1、vuex结合Vuex-persist实现本地永久存储 ：-----
      实现方式：在store/index.js中，将modules中需要永久存储的仓库添加入vuexLocal的modules数组中
    </h4>
    <table style="width: 300px; text-align: center">
      <tr v-for="(item, index) in userList" :key="index">
        <td style="border: 1px solid #000000">{{ item.name }}</td>
        <td style="border: 1px solid #000000">{{ item.age }}</td>
        <td style="border: 1px solid #000000">
          <el-button type="text" @click="deleteUser(item.id)">删除</el-button>
          <el-button type="text" @click="addUser">新增</el-button>
        </td>
      </tr>
    </table>
    <h4>2、vuex不刷新情况下的存储</h4>
    <table style="width: 300px; text-align: center">
      <tr v-for="(item, index) in testUserList" :key="index">
        <td style="border: 1px solid #000000">{{ item.name }}</td>
        <td style="border: 1px solid #000000">{{ item.age }}</td>
        <td style="border: 1px solid #000000">
          <el-button type="text" @click="deleteTestUser(item.id)"
            >删除</el-button
          >
          <el-button type="text" @click="addTestUser">新增</el-button>
        </td>
      </tr>
    </table>

    <h4 class="top">element-ui已经引入</h4>
    <el-button type="primary" size="mini">修改Vuex</el-button>

    <h4 class="top">全局组件的引入示例</h4>
    <BorderComp></BorderComp>

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
import { uuid } from "@/utils/index";
const Mock = require("mockjs");

export default {
  name: "Test",
  data() {
    return {
      input: ""
    };
  },
  computed: {
    userList() {
      return this.$Store.state.table.userList;
    },
    testUserList() {
      return this.$Store.state.test.userList;
    }
  },
  methods: {
    // 删除test用户
    deleteTestUser(id) {
      let filterUserList = this.testUserList.filter(item => item.id !== id);

      // 本地存储必须通过mutations方式进行更新state
      // this.$Store.commit("table/setUserList", filterUserList);

      // 不进行本地存储时可不通过mutations方式进行更新state，直接赋值更新即可
      this.$Store.state.test.userList = filterUserList;

      this.$message.success("删除成功!");
    },
    // 随机新增table用户
    addTestUser() {
      let item = this.getRandomItem();
      let copyUserList = JSON.parse(JSON.stringify(this.testUserList));
      copyUserList.push(item);

      // 不进行本地存储时可不通过mutations方式进行更新state，直接赋值更新即可
      this.$Store.state.test.userList = copyUserList;
    },
    // 删除table用户
    deleteUser(id) {
      let filterUserList = this.userList.filter(item => item.id !== id);
      // 本地存储必须通过mutations方式进行更新state
      this.$Store.commit("table/setUserList", filterUserList);
      this.$message.success("删除成功!");
    },
    // 随机新增table用户
    addUser() {
      let item = this.getRandomItem();
      let copyUserList = JSON.parse(JSON.stringify(this.userList));
      copyUserList.push(item);
      // 本地存储必须通过mutations方式进行更新state
      this.$Store.commit("table/setUserList", copyUserList);
    },
    getRandomItem() {
      return Mock.mock({
        id: "@id",
        name: "@cname",
        date: "@date(yyy-MM-dd)",
        description: "@paragraph",
        email: "@email",
        "age|18-90": 0
      });
    }
  },
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
