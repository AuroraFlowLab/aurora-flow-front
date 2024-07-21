# aurora-flow-front
front end project



## 技术选型
Vue3 + webpack/vite + pinia + Vue-Router + Element-plus

ElementPlus通用型组件+业务自定义组件

## 项目初始化
vue3: create vue | 基于vite 要求 node -v>=18.3.0 (初始化执行:npm init vue@latest)   
    安装node 18.18.2 ，切换版本如果出现exit status 1,需要管理员身份运行       
vue2: cli-vue | 基于webpack     

运行项目：
```
npm install
npm run dev
```

## 项目结构

```
aurora-flow-front/
|-- public/                 静态文件
|   |-- 
|
|-- src/                    源代码
|   |-- assets/             资源文件
|   |   |-- logo.png
|   |-- apis/
|   |   |--
|   |-- composables/        组合函数文件夹
|   |   |--
|   |-- directives/         全局指令文件夹
|   |   |--
|   |-- router/             vue router
|   |   |--
|   |-- stores/
|   |   |--
|   |-- styles/             全局样式文件夹
|   |   |--
|   |-- utils/              工具函数文件夹
|   |   |--
|   |-- views/
|   |   |--
|   |-- components/         vue组件
|   |   |-- MyComponent.vue
|   |
|   |-- App.vue             主组件，单文件组件SFC script-template-style
|   |-- main.js             项目入口文件，createApp函数创建应用实例
|
|-- .eslintrc.js            配置ESlint规则
|-- index.html              单页入口，提供id为app的挂载点
|-- babel.config.js         配置babel
|-- package.json            定义项目依赖和scripts ，核心依赖项变成vue3.x和vite
|-- vite.config.js          vue3打包配置，项目配置文件，基于vite配置
|-- tsconfig.json           (如果使用TypeScript)
```

## 项目功能模块
|模块名|模块功能|
|------|-------|
|||











