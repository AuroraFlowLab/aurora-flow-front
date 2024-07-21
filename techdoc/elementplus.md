
## elementplus

官方文档地址：[ element-plus.gitee.io](https://s-test.belle.cn/zh-CN/guide/design.html)

安装： npm install element-plus -save   (生产环境依赖)

安装插件： npm install -D unplugin-vue-components unplugin-auto-import   （-D表示仅开发环境依赖）


### 主题定制 todo
scss 变量替换方案

安装 scss : npm i sass -D

准备定制样式文件 ： styles/element/index.css

对elementplus样式进行覆盖    通知element采用scss语言-->导入定制scss文件覆盖


## 配置axios
配置基础实例（统一接口配置）

axios: 1、接口基地址 2、接口超时时间  3、请求拦截器  4、响应拦截器 ===> axios实例 ===> api ===> 接口1、接口2、接口3......

