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

    这是一个初学者的Vue学习项目,学习视频 
    https://www.bilibili.com/video/BV15741177Eh?p=150&spm_id_from=pageDriver

## 2.better-scroll 无法拖动情况问题解决

### 原因 ： 
照片等数据加载存在同步异步问题，在better-scroll创建时无法加载数据

### 解决方法 ：
在updata生命周期函数内新建better-scroll 对象