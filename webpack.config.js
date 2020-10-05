const path = require('path');

module.exports={
    entry: ['./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        //path 는 절대경로여야한다.
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template :'./src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};