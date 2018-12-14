const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: '',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    // plugins: [
    //     new BundleAnalyzerPlugin({
    //         openAnalyzer: false
    //     })
    // ]
}
