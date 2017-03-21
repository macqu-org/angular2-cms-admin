项目说明
====================

* [安装](#启动ng2项目)
* [项目配置](#配置说明)
    + [组件模板路径采用的是绝对路径](#模板路径设置)


# 启动ng2项目 #
1. 安装依赖
```
npm install 
```
2. 启动项目(开发模式)
```
npm run webpack:dev
```
# 配置说明 #
## 模板路径设置 ##
* 当前组件是通过绝对绝对路径来加载模板文件的，因为程序目前需要调用asp.net mvc中的action作为模板内容来显示
* 如果需要启用组件模板的相对路径，需要进行如下设置：
    + 启用angular2-template-loader
        ```
        // /**
        //  *
        //  * angular2 组件模板处理插件
        //  * */
        // 取消下面代码前面的注释
        {
            loader: 'angular2-template-loader'
        }
        ```
    + 启用 raw-loader 来加载html
    ```
    /* Raw loader support for *.html
    * Returns file content as string
    *
    * See: https://github.com/webpack/raw-loader
    */
    {
       test: /\.html$/,
       use: 'raw-loader'
    },
    ```
    + 取消复制src下所有的html文件到dist目录下
        ```
        // Copy static assets to the build folder
        // 复制src/app目录下所有的.html文件
        // {context: 'src/app', from: "**/*.html", to: "app"}
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
            {from: "src/index.html", to: "index.html"},
            //注释掉下面的代码
            //{context: 'src/app', from: "**/*.html", to: "app"}
        ]),
        ```
    + 为什么需要改成绝对路径来加载组件模板，[参考文章地址](http://stackoverflow.com/questions/40179955/templateurl-in-angular2-component-not-loading-url)