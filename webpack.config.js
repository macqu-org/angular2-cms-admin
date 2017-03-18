var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
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
    output: {
        path: path.resolve(__dirname, 'dist'),
        /**
         * Specifies the name of each output file on disk.
         * IMPORTANT: You must not specify an absolute path here!
         *
         * See: http://webpack.github.io/docs/configuration.html#output-filename
         */
        filename: '[name].bundle.js'
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
                            loader: 'async-import'
                        }
                    },
                    {
                        loader: 'awesome-typescript-loader' //这个loader会提示require错误
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.(html|css)$/,
                use: 'raw-loader'
            }
        ]
    },
    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
        // Copy static assets to the build folder
        // 复制src/app目录下所有的.html文件
        // {context: 'src/app', from: "**/*.html", to: "app"}
        new CopyWebpackPlugin([
            {from: 'src/assets', to: 'assets'},
            {from: "src/index.html", to: "index.html"}
        ])
    ]
}
;