##  一、项目目录构建规范

#### 目录结构
    - src
       - view(视图)
         - 目录1 (注意：此目录名与此页面的路由地址相同，以方便查找，eg:路由地址是'/home',则这个目录名就是home)
           - index.vue  (该页面的入口组件)
           - 目录1-1 (仅限该页面使用的组件，如果存在复用，则统一放入components中)
         - 目录2
           - index.vue  
         - ......  

       - router(路由管理)
         - index.js(旋转全局路由的配置)

       - store(全局状态管理，统一采用vuex，如果状态过多，自行划分模块管理)
         - index.js

       - utils(存放通用工具，比如,对axios请求封装、时间日期格式化等方法,这里把异步请求单独拿出来)
         - common.js(常用全局方法)
         - http.js(axios请求封装)

       - components(存放多次复用的组件)  
         - commonComp(存在复用，但复用次数较少,可不必存放入全局)
         - globalComp(将多次复用的组件install到全局)
           - index.js (配制全局组件)
           - components (全局组件的存入位置)

    - static    
       - css 
        - common.css(全局样式)
        - ...... (第三方样式，或自定义样式)

       - img
        - 按路由划分，根据路由，新建目录存图片资源

       - font(图标库，建议统一使用阿里图标库)


## 二、命名规范
#### 1、普通变量命名规范
	- 命名方法 ：小驼峰命名法
	- 命名规范 ：语义化
#### 2、常量
	- 命名方法 : 全部大写
	- 命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。
#### 3、组件命名规范
	- 命名方法 : 大驼峰式命名
	- 命名规范 : 组件名以单词大写开头，当多个单词拼写时，每个单词开关字母大写

## 三、样式规范
	- 样式命名规范：多个单词统一采用 “_” 相连接，以防止和第三方库中的命名冲突。
	- 单个组件样式一般可直接写到组件下style标签下，为了防止样式污染，必须添加scoped 属性,否则就必须写入全局样式，以防止意外的样式污染。
	- 写样式的时候尽量少写标签选择器，为了提高代码查找速度，可以用类选择器。
	- 写全局样式时，在其前面添加唯一的父类/祖先选择器，以限制样式的范围，防污染全局。
	- 属性顺序
		- 位置属性 ( position top right z-index display float)
		- 大小 ( width height padding margin)
		- 文字系列 ( font line-height letter-spacing color text-align)
		- 背景 ( background border)
		- 其他 ( animation transition)
![size:800,1000](http://localhost:8080/storage/2021/04-23/WZE3Ha8HWSl0Mw0zI5WLE6gpFLD8GV1IXIu3wcpT.png)

## 四、字体图标规范
	- 使用阿里图标库中的图标；

## 五、SVN仓库提交管理
	- 每次修改提交，必须写注释说明；
    - 注意提交时, node_modules、打包后的文件(比如：dist) 不需要提交到仓库内，设置忽略即可；
	  SVN忽略设置的方法：https://blog.csdn.net/yiyueqinghui/article/details/116046034