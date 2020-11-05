const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: {
      main: '/src/app.js',
      payments: '/src/pages/entry_payments.js',
      about: '/src/pages/entry_about.js',
      rules: '/src/pages/entry_rules.js',
      promo: '/src/pages/entry_promo.js',
      bonus: '/src/pages/entry_bonus.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
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

            },
            ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};
