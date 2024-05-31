胖达儿
---

参考：https://www.bilibili.com/video/BV1Bp4y1379L

[开发前的准备](prepare.md)



胖达儿包含从首页浏览商品，商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等功能。

## 1 基础架构

```sh
git clone http://git.itcast.cn/heimaqianduan/erabbit-uni-app-vue3-ts.git  panda-shop
```

在 manifest.json 中添加微信小程序的 appid

```
pnpm install   ->   pnpm dev:mp-weixin    ->   导入微信开发者工具
```



### 工程结构解析



```
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── components             # 全局组件
│   ├── composables            # 组合式函数
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── category            # 分类页
│       ├── cart                # 购物车
│       ├── my                  # 我的
│       └── login               # 登录页
│   ├── services               # 所有请求
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│       └── component.d.ts      # 全局组件类型声明
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vite 配置
```





### 引入uni-ui组件库

[uni-ui 介绍 | uni-app官网](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

![](images/image-20240531184530282.png)

安装uni-ui

```
pnpm i @dcloudio/uni-ui
```

通过正则配置uni-ui的组件自动导入：

```json
  // 组件自动引入规则
  "easycom": {
    // 是否开启自动扫描，自动扫描components目录等看是否有符合uniapp的组件
    "autoscan": true,
    // 以正则放到从依赖库中导入组件
    "custom": {
      // uni-ui 规则如下配置
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
    }
  }
```





`@uni-helper/uni-ui-types`作用是提供uni-ui组件类型。安装：

```
pnpm i -D @uni-helper/uni-ui-types
```

配置：

```json
    "types": [

      "@uni-helper/uni-ui-types"
    ]
```

原本：

![](images/iShot_2024-05-31_19.09.02.png)

配置后：

![](images/iShot_2024-05-31_19.11.05.png)

### 小程序端Pinia持久化





### uni.request请求封装







## 2 首页模块

### 自定义导航栏



### 通用轮播组件



### 轮播图



### 前台分类组件



### 热门推荐组价



### 猜你喜欢组件



### 下拉刷新



### 骨架屏



> 

> 推荐模块 + 分类模块 + 详情模块



## 3 推荐模块



## 4 分类模块



## 5 详情模块



## 6 登录模块



## 7 用户模块



## 8 地址管理



## 9 SKU模块



## 10 购物车模块



## 11 订单模块



## 项目打包