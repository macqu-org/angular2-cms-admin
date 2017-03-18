webpack常见问题
===========

* [为什么webpack中会使用那么多的loader？loader是干嘛用的？为什么需要loader？](#为什么需要loader)
* [如何判断应该选择怎样的loader？](#loader的选择)
* [Angular2使用webpack打包时，路由懒加载功能应该选择什么样的loader？](#angular2路由懒加载loader)
* [webpack使用对应loader来编译打包typescript时，总是有`Ts2304:can not find name require`的错误](#webpack编译时的require错误提示)
* [webpack1.x对比webpack2.x在配置文件中有哪些配置项发生了变化?](#webpack 1.x与2.x配置变化)
* [webpack编译有错误，如何定位错误并排查错误？](#webpack编译错误排查)
* [webpack工具对应的工具链](#webpack开发工具链)
* [webpack打包后的资源如何调试](#webpack打包后调试)

## 为什么需要loader ##
loader在webpack中绝对是顶梁柱的地位，loader负责处理各种资源静态资源的处理，css,html,ts各类文件的出来都有对应的loader。`                test: /\.ts$/,
                                                                                              use: [
                                                                                                  { // MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
                                                                                                      loader: 'ng-router-loader',
                                                                                                      options: {
                                                                                                          loader: 'async-import'
                                                                                                      }
                                                                                                  },
                                                                                                  {
                                                                                                      loader: 'awesome-typescript-loader' //这个loader会提示require错误
                                                                                                  },
                                                                                                  {
                                                                                                      loader: 'angular2-template-loader'
                                                                                                  }
                                                                                              ]`，这个三个组合可以达到angular2中的ts编译，路由懒加载出来，模板导入处理。

## loader的选择 ##
参考[webpack说明文档](https://webpack.js.org/guides/get-started/)中的loaders节点

## angular2路由懒加载loader ##
参考上面[为什么需要loader](#为什么需要loader)

## webpack编译时的require错误提示 ##
webpack编译typescript时需要安装类型说明:`npm install @types/webpack --save-dev`，安装完成后，重新编译之后，require错误就会消失，为什么要安装这个类型定义说明文件，因为webpack使用了自己的require函数，而且
名称为__webpack_require__并不是require，和通用require函数名称不一致导致的，所以在typescript编译器编译的时候，会提示缺少require。不处理该错误其实也不影响编译结果。

## webpack 1.x与2.x配置变化 ##
1.x中的loaders节点在2.x中使用了rules节点，配置的项也稍微有些不同，需要对比的话，请参照官方文档中的配置节点

## webpack编译错误排查 ##
关注红色提示的最上面一个错误提示，其中有错误所在的文件，行号信息，根据这些信息来定位错误源

## webpack开发工具链 ##
* [webpack开发工具链](https://webpack.js.org/guides/get-started/)

## webpack打包后调试 ##
webpack打包后调试，需要在webpack.config.js中添加对应的[devtool节点](https://webpack.js.org/configuration/devtool/)，如：`devtool: 'cheap-module-source-map'`


