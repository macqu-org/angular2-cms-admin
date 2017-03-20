使用SystemJS常见问题
=================

* [如何在浏览器端直接加载.ts类型的文件，不用预先编译成.js文件？](#浏览器内即时编译.ts文件)
* [配置文件中map和packages节点各自的作用？](#map和packages节点)
* [加载Angular2中的组件模板时，http404错误](#Angular2中组件模板404错误)
* [使用SystemJS加载打包项目的工具链](#SystemJS开发工具链)

## 浏览器内即时编译typescript文件 ##
要让SystemJS能够在浏览器端直接加载.ts文件，需要添加插件[plugin-typescript](https://github.com/frankwallis/plugin-typescript#make-plugin-typescript-the-default-transpiler-for-js-and-ts-files)
，为什么要添加这样的插件，可[参考SystemJS的项目说明](https://github.com/systemjs/systemjs#browser-development)

## map和packages节点 ##
map节点是包所在路径的映射，方便以后使用import导入的时候能简写，比如：`'@angular/core': 'node_modules/@angular/core/bundles/core.umd.js'`, 以后在文件中导入这个模块的时候，可以简写成`'@angular/core'`，
packages节点是对map映射路径下文件的说明，比如：`rxjs: {
                                             main: './Rx',
                                             defaultExtension: 'js'
                                         }`，说明引用这个包的时候，下面的文件默认都是以js结尾（因为在import的时候没有后缀名，这个可以告诉systemjs自动加上什么样的后缀名）。

## Angular2中组件模板404错误 ##
SystemJS中加载Angular2的应用时，组件使用的模板文件路径应该是相对与根目录的相对路径，这个要特别注意。`@Component({
                                                               selector: 'about-page',
                                                               templateUrl: './about.component.html'
                                                           })`，其中的templateUrl需要是相对与应用根目录的相对路径
，路由路径`   {
              path: 'about',
              loadChildren: './pages/about/about.module#AboutModule'
          }`，其中的loadChildren路径也应该和templateUrl的规则一直，这个和webpack有区别，webpack都是采用的是相对路径，SystemJS应该也有对应的配置，但是目前没研究

## SystemJS开发工具链 ##
* [jspm包管理器](http://jspm.io/)
* [SystemJS代码库](https://github.com/systemjs/systemjs)
* [SystemJS插件](https://github.com/systemjs/systemjs/blob/master/docs/plugins.md)
