var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        extensions: ['.ts', '.js', '.css', '.scss']
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
        loaders: [
            // Support for .ts files
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, "src")]
            },
            // Support for .html as raw text
            {
                test: /\.html$/,
                loader: 'raw-loader',
                include: [path.resolve(__dirname, "src")]
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
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
        // Generate the index.html
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ]
}
;