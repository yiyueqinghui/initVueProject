# 一、Vue项目规范  ( 官方规范: https://cn.vuejs.org/v2/style-guide/ )
#### 1、组件规范
    - 组件name属性为多个单词,且采用大驼峰形式, eg:  export default { name: 'TodoItem'  }
    - 组件的引用名，采用大驼峰形式，eg: import EditDialog from '@/components/edit/edit-dialog.vue',在组件中调用也有此名
    - 组件文件名, 多个单词的, 全部采用小写方式，以中线分隔 格式 , eg: my-component.vue
    - 和父组件紧密耦合的子组件应该以父组件名作为前缀命名, eg: todo-list.vue / user-profile-options.vue
    - Props 定义应该尽量详细,必须指定添加注释说明其作用、指定类型、添加 default ，以保证组件的独立性，

      ```
      eg: props:{ 
        userInfo :{ 
          type:Object,
          default:()=>{
             return {
               name:'',
               password:''
             }
          }}
        }
      ```
    - 为组件样式设置作用域,使用vue自带的scoped属性。 eg: <style scoped>.....</style>
    - 写全局样式时，在其前面添加唯一的父类/祖先选择器，以限制样式的范围，防污染全局
    - 必须为 v-for 设置键值 key
    - v-show 与 v-if 选择, 如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if
    - 指令缩写 (用 : 表示 v-bind:、用 @ 表示 v-on: 和用 # 表示 v-slot:) 
    - Vue Router 规范
      - 路由配置, 使用路由懒加载（延迟加载）机制 --- import()
        ```
        { 
           path: '/upload', 
           name: 'uploadt', 
           meta: { 
             title: '上传附件' 
           },
           component: () => import('@/view/components/uploadAttachment/index.vue') 
        },
        ```
      - name字段命名规范采用大驼峰命名规范且和 component 组件名保持一致！(因为要保持 keep-alive 特性，keep-alive 按照 component 的 name 进行缓存，所以两者必须高度保持一致)

#### 2、目录结构
    - src
       - api (所有api接口) 
         - 同一业务接口,放到一个api.js文件下,尽量后端一个controller 一个api.js文件
         - api中的方法名字与后端api url 尽量保持语义的一致性
         - api中的第一个方法要添加注释说明其作用
         - 示例：
         ```
           后端 url： EmployeeController.java 
           /employee/add 
           /employee/delete/{id} 
           /employee/update 
           
           前端： employee.js 
           // 添加员工 
           function addEmployee(data) {
              return postAxios('/employee/add', data) 
           }
           // 更新员工信息 
           function updateEmployee(data) { 
             return postAxios('/employee/update', data) 
           }
           // 删除员工 
           function deleteEmployee(employeeId) {
              return postAxios('/employee/delete/' + employeeId) 
           }

         ```
       - filter (公用的过滤器)
       - components(存放多次复用的公共组件)  
         - commonComp(存在复用，但复用次数较少,可不必存放入全局)
         - globalComp(将多次复用的组件install到全局)
           - index.js (配制全局组件)
           - components (全局组件的存入位置)   

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

    - static    
      - css 
        - common.css(全局样式)
        - ...... (第三方样式，或自定义样式)

       - img
        - 按路由划分，根据路由，新建目录存图片资源

       - media(统一存放视频资源,修改webpack配制，使打包后资源名称不变，若视频过大且未做修改，则不必须每次都上传，在服务端保留即可) 

       - fonts(图标库，建议统一使用阿里图标库，1、将从阿里图标库中下载下来的图标文件放入fonts内，2、再在main.js中引入 import '../static/fonts/iconfont.css' 即可)

       - mock(专门存放模拟的数据，使用export 导出 import 引入)  

#### 3、注释说明 
    - vue 文件的 methods，每个 method 必须添加注释
    - vue 文件的 data, 非常见单词要加注释
    - api 目录的接口 js 文件必须加注释

#### 4、其他
    - 尽量不要手动操作 DOM
    - 无用代码必须及时删除  

# 二、HTML规范
#### 1、img标签要写alt属性
如果图片显示不出来，就直接alt提示的内容。
```html
<img src="company-logo.svg"  />    // ✗ avoid
<img src="company-logo.svg" alt="ABC CompanyLogo"/> // ✓  ok  
```
#### 2、自定义属性要以data-开头
自己添加的非标准的属性要以data-开头，否则w3c会认为是不规范的
```html
<div count="5"></div>    // ✗ avoid
<div data-count="5"></div> // ✓  ok  
```
#### 3、td要在tr里面，li要在ul/ol里面
#### 4、ul/ol的直接子元素只能是li，同样，tr的直接子元素都应该是td
```html
// ✗ avoid
<ol>          
    <span>123</span>
    <li>a</li>
    <li>b</li>
</ol>
```
```html
// ✓  ok
<ol>          
    <li>a</li>
    <li>b</li>
</ol>
```
#### 5、自定义属性要以data-开头
自己添加的非标准的属性要以data-开头，否则w3c会认为是不规范的
```html
<div count="5"></div>    // ✗ avoid
<div data-count="5"></div> // ✓  ok  
```
#### 6、行内元素里面不可使用块级元素
行内元素内部套块元素，可能导致行内元素标签无法正常点击，如果非要行内套块，则可通过display将行内元素改为块元素
```html
// ✗ avoid
<a href="/listing?id=123">
    <div></div>
</a>
```
```html
// ✓  ok
<a href="/listing?id=123" style="display:block;">
    <div></div>
</a>
```
#### 7、每个页面要写<!DOCType html>,设置页面的渲染模式为标准模式
如果没有写，则会变成怪异模式，从而影响页面的布局

#### 8、不要在DOM中穿插style与script，script脚本放在文件结尾
script不要写在head标签里面，会阻碍页面加载
```html
// ✗ avoid
<body>
  <div></div>
  <script>
  ...
  </script>
  <p></p>
</body>  
```
```html
// ✓  ok
<body>
  <div></div>
  <p></p>
</body>  
<script>
  ...
</script>
```
#### 9、样式不能写在body里,统一放在head标签里

```html
   样式不能写在body里，写在body里会导致渲染两次，特别是写得越靠后，可能会出现闪屏的情况，比如上面的已经渲染好了，突然遇到一个style标签，导致它要重新渲染，这样页面就闪了一下，影响用户体验。

   css如果不多，也推荐写成style标签直接嵌在页面上，因为如果搞个外链，浏览器需要先做域名解析，然后再建立连接，接着才是下载，这一套下来可能已经过了0.5s/1s，甚至更多。而写在页面的CSS虽然无法缓存，但是本身它也不会很大，再加gzip压缩，基本上在50k以内。
```
#### 10、html要加上lang的属性
```html
// ✓  ok

//英文的网页
<html lang="en">     //表示是英文的网页
<html lang="en-US">  //表示是美国英语的网页

//中文的网页
<html lang="zh-CN">
```
#### 11、在head标签写上charset的meta标签，指定编码格式
```html
// ✓  ok
<head>
   <meta charset="utf-8">
</head>
```
#### 12、img中src为空的问题
有时候可能你需要在写一个空的img标签，然后在JS里面动态地给它赋src，因此可能会这么写：
```html
// ✗ avoid
<img src="" alt>
```
但是这样写会有问题，如果你写了一个空的src，会导致浏览器认为src就是当前页面链接，**然后会再一次请求当前页面**，就跟你写一个a标签的href为空类似。如果是background-image也会有类似的问题。这个时候怎么办呢？
```html
// ✓  ok

// 第一种是把src写成about:blank,去加载一个空白页面
<img src="about:blank" alt>

// 第二种是写一个1px的透明像素的base64
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
```


#### 13、行内元素之间，代码换行引起的空格问题
行内与块、块与块之间换行不会引起空格问题
```html
<form>
    <label>Email:</label>
    <input type="email">
</form>
```
如上，在label和input中间会有一个空格，这个空格是两个行内元素之间换行引起的。

解决办法如下：
```html
//第一种，将两个行内元素放一起，不要换行（不推荐，不利于阅读）
<form>
    <label>Email:</label><input type="email">
</form>
```
```html
//第二种，可以给父级font-size：0 然后再给子元素设置自己的font-size;
<form style="font-size:0;"> 
    <label style="font-size:13px;">Email:</label>
    <input style="font-size:13px;"  type="email">
</form>
```
```html
//第三种，子元素浮动，父级清除浮动;
<form style="overflow:hidden;"> 
    <label style="float:left;">Email:</label>
    <input style="float:left;"  type="email">
</form>
```
#### 14、类的命名使用小写字母加中划线连接
```html
// ✗ avoid
<div class="userinfo"></div>
<div class="userInfo"></div>
<div class="user_info"></div>
```
```html
// ✓  ok
<div class="user-info"></div>
```
#### 15、防止同一标签上同一属性的重复出现
```html
// ✗ avoid
<input class="books" type="text" name="books" class="valid">
```
```html
// ✓  ok
<input class="books valid" type="text" name="books">
```
#### 16、不推荐使用属性设置样式,能用CSS设置的就用CSS  （canvas除外）
属性上设置的样式可能会在safari上面是不支持的
```html
// ✗ avoid

// img 属性设置其宽高
<img src="test.jpg" alt width="400" height="300" /> 

// table 设置边框
<table border="1"></table>
```

```html
// ✓  ok

// 如果你用CSS设置的话它会变成拉伸，变得比较模糊
<canvas width="800" height="600"></canvas>
```
#### 17、不要在https的链接里写http的图片
只要https的网页请求了一张http的图片，就会导致浏览器地址栏左边的小锁没有了，一般不要写死，写成根据当前域名的协议去加载，用//开头：
```html
// ✓  ok
<img src=”//static.chimeroi.com/hello-world.jpg”>
```


# 三、CSS规范
#### 1、CSS书写顺序
1、位置属性(position, top, right, z-index, display, float等)
2、大小(width, height, padding, margin)
3、文字系列(font, line-height, letter-spacing, color- text-align等)
4、背景(background, border等)
5、其他(animation, transition等)
```css
// ✗ avoid
.example {
  color: red;
  z-index: 1;
  background-color: #dfdfdf;
  display: inline-block;
  font-size: 20px;
  height: 100px;
}
```
```css
// ✓  ok
.example {
  color: red;
  z-index: 1;
  background-color: #dfdfdf;
  display: inline-block;
  font-size: 20px;
  height: 100px;
}
```
#### 2、使用CSS缩写属性
```css
// ✗ avoid
.list-box {
  font-family: serif;
  font-size: 20px;
  line-height: 1.5;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
```
```css
// ✓  ok
.list-box {
  font: 20px/1.5 serif;
  padding: 10px 5px;
}
```
#### 3、去掉小数点前面的0
```css
.example {
  letter-space: .5em;    // ✓  ok
  padding-top: 0.8em;    // ✗ avoid 
}
```
#### 4、命名语义化，可简写，但前提是不影响语义化
```css
// ✗ avoid
.author{
  color: #dfdfdf;
}

// 简写为
.atr{
  color: #dfdfdf; 
}
```
```css
// ✓  ok
.navigation {
  font-size: 20px;
}

// 简写为
.nav {
  font: 20px/1.5 serif;
  padding: 10px 5px;
}
```
#### 5、命名语义化，多个单词用中横线相连

```css
// ✗ avoid
.maintitle {
  color: #dfdfdf;
}
.mainTitle {
  color: #dfdfdf; 
}
.main_title {
  color: #dfdfdf; 
}
```
```css
// ✓  ok
.main-title {
  color: #dfdfdf;
}
```
#### 6、id是唯一的，不可重复

#### 7、若选择器表示状态, 可为选择器添加状态前缀
比如下图是添加了“.is-”前缀。
```css
// ✗ avoid
.active {
  color: 'red';
}
```
```css
// ✓  ok
.is-active {
  color: 'red';
}
```
#### 8、常用的CSS命名字段
```
 头：header                内容：content/container
 尾：footer                导航：nav
 侧栏：sidebar             栏目：column
 左右中：left right center 登录条：loginbar
 标志：logo                广告：banner
 页面主体：main             热点：hot
 新闻：news                下载：download
 子导航：subnav             菜单：menu
 子菜单：submenu            搜索：search
 友情链接：friendlink       页脚：footer
 版权：copyright            滚动：scroll
 内容：content              标签：tags
 文章列表：list             提示信息：msg
 小技巧：tips               栏目标题：title
 加入：joinus               指南：guild
 服务：service              注册：regsiter
 状态：status               投票：vote
 合作伙伴：partner          页面外围控制整体布局宽度：wrapper
 按钮：btn 
```
#### 9、CSS文件命名
- 1. 一律小写;
- 2. 尽量用英文;
- 3. 多个单词用中横线相连

常用文件名
```
 主要的 master.css              模块 module.css
 基本共用 base.css              布局、版面 layout.css
 主题 themes.css                专栏 columns.css
 文字 font.css                  表单 forms.css
 补丁 mend.css                  打印 print.css
```

# 四、 Javascript 开发规范
#### 1、 变量与函数名统一采用小写驼峰命名、常量使用全部大写，字母之间用下划线分割
```javascript
function my_function () { }    // ✗ avoid
function myFunction () { }     // ✓ ok

var my_var = 'hello'           // ✗ avoid
var myVar = 'hello'            // ✓ ok

const MAXSTOCKCOUNT = 1000        // ✗ avoid
const MAX_STOCK_COUNT = 1000        // ✓ ok
```
#### 2、使用两个空格进行缩进
```javascript
function hello (name) {
  console.log('hi', name)
}
```
#### 3、除需要转义的情况外，字符串统一使用单引号
```javascript
console.log('hello there')   // 无需转义
$("<div class='box'>")       // 需要转义
```
#### 4、不要定义未使用的变量
```javascript
function myFunction () {
  var result = something()   // ✗ avoid (result 无任何地方调用)
}
```
#### 5、始终使用 === 替代 ==
```javascript
if (name === 'John') { } // ✓ ok
if (name == 'John') { }    // ✗ avoid

if (name !== 'John') { }    // ✓ ok
if (name != 'John') { }    // ✗ avoid
```
#### 6、字符串拼接操作符 (Infix operators) 之间要留空格
```javascript
var x = 2
var message = 'hello, ' + name + '!'   // ✓ ok
var message2 = 'hello, '+name+'!'      // ✗ avoid
```
#### 7、逗号后面加空格
```javascript
// ✓ ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }
```
```javascript
// ✗ avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```
#### 8、函数声明时括号与函数名间加空格。
```javascript
function name (arg) { ... }   // ✓ ok
function name(arg) { ... }    // ✗ avoid
```
#### 9、else 关键字要与花括号保持在同一行
```javascript
// ✓ ok
if (condition) {
  // ...
} else {
  // ...
}
```
```javascript
// ✗ avoid
if (condition)
{
  // ...
}
else
{
  // ...
}

```
#### 10、多行 if 语句的的括号不能省
```javascript
// ✓ ok
if (options.quiet !== true) console.log('done')
```
```javascript
// ✓ ok
if (options.quiet !== true) {
  console.log('done')
}
```
```javascript
// ✗ avoid
if (options.quiet !== true)
  console.log('done')
```

#### 12、使用浏览器全局变量时加上 window. 前缀
不包括: document, console and navigator.
```javascript
window.alert('hi')   // ✓ ok
```
#### 13、不允许有连续多行空行。
```javascript
// ✓ ok
var value = 'hello world'
console.log(value)
```
```javascript
// ✗ avoid
var value = 'hello world'


console.log(value)
```
#### 14、对于三元运算符** `?` 和 `:` 与他们所负责的代码处于同一行
```javascript
// ✓ ok 
var location = env.development ? 'localhost' : 'www.api.com'
```
```javascript
// ✓ ok
var location = env.development
  ? 'localhost'
  : 'www.api.com'
```
```javascript
// ✗ avoid
var location = env.development ?
  'localhost' :
  'www.api.com'
```
#### 15、每个 var 关键字单独声明一个变量
```javascript
// ✓ ok
var silent = true
var verbose = true
```
```javascript
// ✗ avoid
var silent = true, verbose = true
```
```javascript
// ✗ avoid
var silent = true,
    verbose = true
```
#### 16、单行代码块两边加空格
```javascript
function foo () {return true}    // ✗ avoid
function foo () { return true }  // ✓ ok
```
#### 17、对象不允许有多余的行末逗号，始终将逗号置于行末
```javascript
// ✗ avoid
var obj = {
  name:'Jony',
  message: 'hello',   // 多余行未逗号
}
var obj = {
  name:'Jony'
  ,message: 'hello'  // 逗号未始终放于行末
}
```
```javascript
// ✓  ok
var obj = {
  name:'Jony',
  message: 'hello'   
}
```
#### 18、点号操作符须与属性需在同一行
```javascript
console.
  log('hello')  // ✗ avoid

console.log('hello') // ✓ ok
```
#### 19、函数调用时标识符与括号间不留间隔
```javascript
console.log ('hello') // ✗ avoid
console.log('hello')  // ✓ ok
```
#### 20、键值对当中冒号与值之间要留空白
```javascript
var obj = { 'key' : 'value' }    // ✗ avoid
var obj = { 'key' :'value' }     // ✗ avoid
var obj = { 'key':'value' }      // ✗ avoid
var obj = { 'key': 'value' }     // ✓ ok
```
#### 21、构造函数要以大写字母开头
```javascript
function animal () {}
var dog = new animal()    // ✗ avoid

function Animal () {}
var dog = new Animal()    // ✓ ok
```
#### 22、无参的构造函数调用时要带上括号
```javascript
function Animal () {}
var dog = new Animal    // ✗ avoid
var dog = new Animal()  // ✓ ok
```
#### 23、子类的构造器中一定要调用 super
```javascript
class Dog {
  constructor () {
    super()   // ✗ avoid
  }
}

class Dog extends Mammal {
  constructor () {
    super()   // ✓ ok
  }
}
```
#### 24、定义变量时使用数组字面量而不是构造器
```javascript
var nums = new Array(1, 2, 3)   // ✗ avoid
var nums = [1, 2, 3]            // ✓ ok
```
#### 25、对象字面量中不要定义重复的属性
```javascript
var user = {
  name: 'Jane Doe',
  name: 'John Doe'    // ✗ avoid
}
```
#### 26、同一模块有多个导入时一次性写完
```javascript
import { myFunc1 } from 'module'
import { myFunc2 } from 'module'          // ✗ avoid

import { myFunc1, myFunc2 } from 'module' // ✓ ok
```
#### 27、避免不必要的布尔转换
```javascript
const result = true
if (!!result) {   // ✗ avoid
  // ...
}

if (result) {     // ✓ ok
  // ...
}
```
#### 28、switch 一定要使用 break 来将条件分支正常中断
```javascript
// ✗ avoid
switch (filter) {
  case 1:
    doSomething()    
  case 2:
    doSomethingElse()
}
```
```javascript
// ✓ ok
switch (filter) {
  case 1:
    doSomething()
    break         
  case 2:
    doSomethingElse()
}
```
#### 29、不要省去小数点前面的0
```javascript
const discount = .5      // ✗ avoid
const discount = 0.5     // ✓ ok
```
#### 30、正确使用 ES6 中的字符串模板
```javascript
const message = 'Hello ${name}'   // ✗ avoid
const message = `Hello ${name}`   // ✓ ok
```
#### 31、用 throw 抛错时，抛出 Error 对象而不是字符串
```javascript
throw 'error'               // ✗ avoid
throw new Error('error')    // ✓ ok
```
#### 32、不要使用 undefined 来初始化变量
```javascript
let name = undefined    // ✗ avoid

let name
name = 'value'          // ✓ ok

```
#### 33、return，throw，continue 和 break 后不要再跟代码
```javascript
function doSomething () {
  return true
  console.log('never called')     // ✗ avoid
}
```
#### 34、禁止多余的构造器
```javascript
class Car {
  constructor () {      // ✗ avoid
  }
}
```
#### 35、遇到分号时, 空格要留分号后面，不留前面
```javascript
for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
for (let i = 0; i < items.length; i++) {...}    // ✓ ok
```
#### 36、针对接口返回的数据，必须做数据格式的验证
###### 36.1、为什么要验证
     在对接口返回数据处理时，浏览器常见的报错如下：
     `xxx is not a function`
     `xxx is not property of xxx`
     这种报错，大多是由于返回的数据类型与预期的数据类型不一致，而你没有对数据类型进行判定，就调用了相应数据类型的方法。
###### 36.2、常见的数据类型判定方法
- 数组类型Array： 
  ```javascript
  Array.isArray(参数)、参数.constructor === Array
  ```
- 对象类型Object：
  ```javascript
  参数.constructor === Object
  ```
- 字符串String: 
  ```javascript
  参数.constructor === String  、 typeof 参数 === 'string'
  ```
- 数字Number:
  ```javascript
  参数.constructor === Number  、 typeof 参数 === 'number'
  ```
- 布尔值Boolean: 
  ```javascript
  参数.constructor === Boolean  、 typeof 参数 === 'boolean'
  ```

# 五、SVN仓库提交管理
	- 每次修改提交，必须写注释说明；
    - 注意提交时, node_modules、打包后的文件(比如：dist) 不需要提交到仓库内，设置忽略即可；
	  SVN忽略设置的方法：https://blog.csdn.net/yiyueqinghui/article/details/116046034

# 六、多个项目公共组件的管理
  - 文件参考svn地址：http://10.2.25.199/svn/zxy/01开发域/03编码实现/源代码/03业务系统/trunk/stcc-tocc-business-bigscreen-center/commonVue

  - 新建公共组件并发布到npm的步骤如下:
    - 1、创建组件
      - 1.1、在src/components目录下新建目录，并创建自己的组件
      - 1.2、之后可以在App.vue中调用自定义的组件并测试
      - 1.3、在index.js中引入自定义的组件,并导出。参考login组件即可；
    
    - 2、发布组件到npm
      - 2.1、去 npm 官网注册个账号 https://www.npmjs.com/
      - 2.2、运行npm login，会提示输入个人信息，输入邮箱后，会自动给这个邮箱发送一个邮件，通知发布成功，输入完，登录成功。
      - 2.3、发布之前的检查包名是否已被占用，package.json中的name值,即你发布后npm安装时的包名，
        可通过在https://www.npmjs.com/ 中输入name值，查看是否可以搜索到,如果可查寻到，再次修改包名
      - 2.4、发布：npm publish  (注意：每次发布的时候package.json 里面的 version不能一样，不然不能发布出去，手动改下版本就行)
      - 2.5、登录npm官网，查看自己发布的组件
      - 2.6、更新时，修改package.json 里面的 version ，再次发布即可

    - 3、安装并引用
      - 3.1、安装：npm install 你自己发布的包名
      - 3.2、在main.js中引入。eg
      ```
        import GckjUI from 'gckj-ui';
        import 'gckj-ui/src/asset/css/common.css'
        Vue.use(GckjUI)
      ```
      - 3.3、调用，在任意组件中调用时添加前缀gc即可，比如login组件
      ```
         <gc-login @login-event="login"></gc-login>
      ```

# 七、此vue项目脚手架，webpack优化如下
  - 新增hard-source-webpack-plugin插件，优化项目第二次启动时的速度，第一次启动时正常速度启动，第二次启动则可减少70%的速度。
    配制如下：
    ```
    1、安装hard-source-webpack-plugin，
        npm i hard-source-webpack-plugin -D
    2、在webpack.conf.js中配制
        const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
        module.exports = {
          // ......
          plugins: [
            new HardSourceWebpackPlugin() // <- 直接加入这行代码就行
          ]
        }


    ```
  - 项目打包后，清空console.log,防止控制台输出
    在webpack.prod.conf.js中
    ```


    ```