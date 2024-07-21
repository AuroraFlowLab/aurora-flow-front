# vue3


## 组合式API
+ setup
+ reative/ref
+ computed
+ watch

## vue3生命周期API(选项式VS组合式)

| 选项式API                     | 组合式API           |
|----------------------------|------------------|
| beforeCreate/created       | setup            |
| beforeMount                | onBeforeMount    |
| mounted                    | onMounted        |
| beforeUpdate               | onBeforeUpdate   |
| updated                    | onUpdated        |
| beforeUnmount              | onBeforeUnmount  |
| unmounted                  | onUnmounted      |

生命周期函数是可以多次执行的，多次执行时传入的回调会在时机成熟时依次执行      

生命周期函数基本使用：
+ 导入生命周期函数
+ 执行生命周期函数，传入回调
```
import {onMounted} from 'vue'
onMounted(()=>{
    // 自定义逻辑
})
```

## 组合式API父子通信
+ 父组件中给子组件绑定属性
+ 子组件内部通过props选项接收  defineProps

父组件给子组件传递基本数据和响应式数据

子组件传递数据给父组件  defineEmits

## 模板引用
通过ref标识获取真实的dom对象或者组件实例对象      

获取模板引用时机是组件挂载完毕onMounted 


## 跨层组件通信
跨层传递普通数据
+ 顶层组件通过provide函数提供数据
+ 底层组件通过inject函数获取数据

跨层传递方法
+ 顶层组件可以向底层组件传递方法，底层组件调用方法修改顶层组件中的数据








