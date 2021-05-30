# mall

## Project setup（食用方法）
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 1.简介 
```
    这是一个初学者的Vue学习项目,学习视频 
    https://www.bilibili.com/video/BV15741177Eh?p=150&spm_id_from=pageDriver
```
## 2.better-scroll 无法拖动情况问题解决

### 原因 ： 
```
    better-scroll在决定多少区域可滚动时，是通过scrollHeight属性决定的
        scrollHeight是content区域的高度
        但是在计算scrollheight属性时，照片等还没有加载
        所以导致scrollHeight计算错误
        出现无法拖动的问题
```

### 解决方法 ：
```
    在创建better-scroll对象时，添加 
        observeDOM: true,
        observeImage: true,
    双参数

    在低版本使用better-scroll自带的 refresh（）函数
```
## 3.切换页面时让Home保持原状态（滚动距离相同）

### 解决方法 ：
```
    1.让Home组件不要销毁
        使用vue的keepAlive模块将 Home组件放进去

    2.让Home组件内容保持原位置
        在离开组件时 保存位置信息saveY
        在进入组件时 讲位置设置为原位置saveY
```

