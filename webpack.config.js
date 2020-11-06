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
                  {
                    loader: miniCss.loader,
                    options: {
                      publicPath: ''
                    }
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'sass-loader',
                  }
                ]
            },
            {
                test: /\.(svg|jpe?g|gif|png)$/,
                loader: 'url-loader',

            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
            ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};
