var path = require('path');
var webpack = require('webpack');
const helpers = require('./config/helpers');

//webpack打包时所需要的插件
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const AssetsPlugin = require('assets-webpack-plugin');


module.exports = function (options) {
    var currentWorkDir = process.cwd();
    var workDirObject = path.parse(currentWorkDir);
    //开发环境生成文件路径
    var devPath = path.format({
        root: workDirObject.root,
        dir: path.resolve(currentWorkDir.replace('YiChe.App.CmsWeb-Ng2', ''), 'YiChe.App.CmsWeb', 'dist')
    });
    //正式部署时生成文件路径，需要更加实际情况调整
    var prodPath = path.resolve(__dirname, 'dist');
    var webpackOutputPath = options.env == 'dev' ? devPath : prodPath;
    return {
        entry: {
            'shim': path.resolve(__dirname, 'node_modules/core-js/client/shim.min.js'),
            'zone': path.resolve(__dirname, 'node_modules/zone.js/dist/zone.js'),
            'main': path.resolve(__dirname, 'src/main.ts')
        },
        /*
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {

            /*
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['.ts', '.js', '.css', '.scss', '.json']
        },
        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'cheap-module-source-map',
        output: {
            //path: path.resolve(__dirname, 'dist'),
            //这个是我自己本地的网站的开发根目录，需要根据实际情况决定
            path: webpackOutputPath,
            /**
             * Specifies the name of each output file on disk.
             * IMPORTANT: You must not specify an absolute path here!
             *
             * See: http://webpack.github.io/docs/configuration.html#output-filename
             */
            filename: '[name].bundle.js',
            /**
             * The filename of the SourceMaps for the JavaScript files.
             * They are inside the output.path directory.
             *
             * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
             */
            sourceMapFilename: '[file].map'
        },
        /*
         * Options affecting the normal modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#module
         */
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        { // MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
                            loader: 'ng-router-loader',
                            options: {
                                loader: 'async-require' //https://shlomiassaf.github.io/ng-router-loader/globals.html#built_in_loaders
                            }
                        },
                        {
                            loader: 'awesome-typescript-loader'
                        }
                        // /**
                        //  *
                        //  * angular2 组件模板处理插件
                        //  * */
                        // {
                        //     loader: 'angular2-template-loader'
                        // }
                    ]
                },
                /*
                 * to string and css loader support for *.css files (from Angular components)
                 * Returns file content as string
                 *
                 */
                {
                    test: /\.css$/,
                    use: ['raw-loader']
                },

                {
                    test: /\.scss$/,
                    use: ['raw-loader', 'sass-loader']
                },

                {
                    test: /initial\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!sass-loader?sourceMap'
                    })
                },

                {
                    test: /\.woff(2)?(\?v=.+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/font-woff'
                },

                {
                    test: /\.(ttf|eot|svg)(\?v=.+)?$/,
                    use: 'file-loader'
                },
                {
                    test: /bootstrap\/dist\/js\/umd\//,
                    use: 'imports-loader?jQuery=jquery'
                },
                /* Raw loader support for *.html
                 * Returns file content as string
                 *
                 * See: https://github.com/webpack/raw-loader
                 */
                // {
                //     test: /\.html$/,
                //     use: 'raw-loader'
                // },
                /* File loader for supporting images, for example, in CSS files.
                 */
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }
            ]
        },
        /*
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         */
        plugins: [
            new ExtractTextPlugin({filename: 'initial.css', allChunks: true}),
            /**
             *
             * webpack默认会将js文件名做hash处理，把正常的文件名变成hash值的文件名，这个插件可以将这些hash值转成正常的文件名，
             * 同时生成webpack-assets.json文件，便于查找打包或静态文件的位置
             * */
            // new AssetsPlugin({
            //     path: helpers.root('dist'),
            //     filename: 'webpack-assets.json',
            //     prettyPrint: true
            // }),
            /*
             * 提供webpack的打包速度
             * Plugin: ForkCheckerPlugin
             * Description: Do type checking in a separate process, so webpack don't need to wait.
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
             */
            new CheckerPlugin(),
            // Copy static assets to the build folder
            // 复制src/app目录下所有的.html文件
            // {context: 'src/app', from: "**/*.html", to: "app"}
            new CopyWebpackPlugin([
                {from: 'src/assets', to: 'assets'},
                {from: "src/index.html", to: "index.html"},
                {context: 'src/app', from: "**/*.html", to: "app"}
            ]),
            /**
             *
             * 这个插件可以解决webpack编译时的warning提示信息：critical-dependencies的警告，
             * 这个警告解决可以参考地址：https://webpack.github.io/docs/context.html#critical-dependencies
             * Plugin: ContextReplacementPlugin
             * Description: Provides context to Angular's use of System.import
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
             * See: https://github.com/angular/angular/issues/11580
             *
             */
            new ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
                helpers.root('src') // location of your src
            ),
            /**
             *
             * 1. 使用webpack来加载jquery,想在js中用$，需要将$与jQuery对应起来
             * 2. 使用npm install @type/jquery --save-dev 来安装jquery的typescript的类型声明文件
             * 3. 如果某个ts文件中需要用到jquery的插件，直接在文件中通过import '插件名' 来导入，不要在这里添加对应
             * */
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    }
};