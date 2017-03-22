开发问题记录
=========

* [存在问题](#存在问题)
    + [Synchronous XMLHttpRequest on the main thread is deprecated](#Synchronous XMLHttpRequest on the main thread is deprecated)
* [注意事项](#注意事项)
    + [路由配置注意事项](#配置路由注意事项)    
* [待深入问题](#待深入问题)
    + [指令中存在@input参数](#ng2指令中存在@input参数，如何传递参数)
    + [angular2生成桌面应用](#angular2生成原生应用，令人兴奋的神一般的特性)
    
    
# 存在问题 #
## Synchronous XMLHttpRequest on the main thread is deprecated
在ng的component中使用jquery的load方法时，浏览器提示`Synchronous XMLHttpRequest on the main thread is deprecated`

# 注意事项 #
## 配置路由注意事项
以下类型的路由，一定要配置到当前路由模块的最后一条，如何配置到最上面会导致无法导航到想要的路径
    ```
    path: "**", component: ForumComponent
    ```


    
# 待深入问题 #
## ng2指令中存在@input参数，如何传递参数

## angular2生成原生应用，令人兴奋的神一般的特性