const path = require('path')

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader' // inject CSS to page
            }, {
                loader: 'css-loader' // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // run post css actions
                options: {
                  plugins: function () { // post css plugins
                    return [
                      require('precss'),
                      require('autoprefixer')
                    ];
                  }
                }
            }, {
                loader: 'sass-loader' // compiles sass to css
            }]
        }
    ]
  }
}