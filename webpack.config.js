const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // точка входа сборщика webpack
  output: {
    clean: true,
    path: path.resolve(__dirname, 'prod'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]'
  },
  externalsType: 'script',
    externals: {
        // Вместо YOUR_API_KEY подставить значение настоящего ключа
        ymaps3: [
          `promise new Promise((resolve) => {
              if (typeof ymaps3 !== 'undefined') {
                return ymaps3.ready.then(() => resolve(ymaps3));
              }
              const script = document.createElement('script');
              script.src = "https://api-maps.yandex.ru/v3/?apikey=fbf16afb-9832-4aeb-974c-6cb032ebaab5&lang=ru_RU";
              script.onload = () => {
                ymaps3.ready.then(() => resolve(ymaps3));
              };
              document.head.appendChild(script);
            })`
        ]
    },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer:{
    historyApiFallback: true,
  },
  plugins: [
    // HtmlWebpackPlugin создает index.html в директории с бандлом и автоматически добавляет в него ссылку на бандл.
    new HtmlWebpackPlugin({
      template: 'index.html', // откуда брать шаблон
    }),
  ],
};
