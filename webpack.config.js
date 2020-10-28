const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: '/src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|jpe?g|gif|png)$/,
                loader: 'url-loader',

            }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};
