[TOCM]

##  一、目录构建规范
![size:800,1000](http://localhost:8080/storage/2021/04-23/S7jdRKLphsll50BQ8zfVUNA6mxcolHwmDUEGMAHT.png)

	- 公共组件都放到components文件夹下，
	- page文件夹下，每个路由对应一个文件夹，用来放只在该页面使用的vue文件
	- 全局公共css样式，写入static/css/common.css中，在main.js中引入即可


## 二、命名规范
#### 1、普通变量命名规范
	- 命名方法 ：小驼峰命名法
	- 命名规范 ：名字需语义化
#### 2、常量
	- 命名方法 : 全部大写
	- 命名规范 : 使用大写字母和下划线来组合命名，下划线用以分割单词。
#### 3、组件命名规范
	- 命名方法 : 大驼峰式命名
	- 命名规范 : 组件名以单词大写开头，当多个单词拼写时，每个单词开关字母大写

## 三、样式规范
	- 样式命名规范：多个单词统一采用 “_” 相连接，以防止和第三方库中的命名冲突。
	- 单个组件样式一般可直接写到组件下style标签下，为了防止样式污染，可添加scoped 属性。
	- 写样式的时候尽量少写标签选择器，为了提高代码查找速度，可以用类选择器。
	- 写全局样式时，在其前面添加唯一的父类/祖先选择器，以限制样式的范围，防污染全局。
	- 属性顺序
		- 位置属性 ( position top right z-index display float)
		- 大小 ( width height padding margin)
		- 文字系列 ( font line-height letter-spacing color text-align)
		- 背景 ( background border)
		- 其他 ( animation transition)
![size:800,1000](http://localhost:8080/storage/2021/04-23/WZE3Ha8HWSl0Mw0zI5WLE6gpFLD8GV1IXIu3wcpT.png)

## 四、字体规范
	- 优先采用第三方UI框架中的图标；
	- 如果没有，再使用阿里图标库中的图标；

## 五、SVN仓库提交管理
	- 每次修改提交，必须写注释说明；
	- node_modules、打包后的文件(比如：dist) 不需要提交到仓库内，设置忽略即可；
	  SVN忽略设置的方法：https://blog.csdn.net/yiyueqinghui/article/details/116046034