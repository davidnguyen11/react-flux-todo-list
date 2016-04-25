var webpack = require('webpack');
var path = require('path');

const PATHS = {
    app: path.join(__dirname, './'),
    build: path.join(__dirname, './build'),
    srcPath: path.join(__dirname, '../')
};

const CONFIGS = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-1']
            }
        },
        {
            test: /\.html/, loader: 'html'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        },
        {
            test: /\.sass/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
        },
        {
            test: /\.scss/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
        },
        {
            test: /\.(png|jpg|gif)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }
    ],
    extensions: [
        '',
        '.js',
        '.jsx'
    ]
}

module.exports = {
    context: __dirname,
    devServer: {
        outputPath: PATHS.build
    },
    output: {
        path: PATHS.build,
        sourceMapFilename: "./main.js.map",
        filename: 'main.js'
    },
    module: {
        loaders: CONFIGS.loaders
    },
    resolve: {
        extensions: CONFIGS.extensions,
        alias: {
            root: PATHS.srcPath,
            app: PATHS.srcPath,
            actions: PATHS.srcPath + '/actions/',
            pages: PATHS.srcPath + '/pages/',
            components: PATHS.srcPath + '/components/',
            // sources: PATHS.srcPath + '/sources/',
            // stores: PATHS.srcPath + '/stores/',
            // utils: PATHS.srcPath + '/utils/',
            // assets: PATHS.srcPath + '/assets/',
            // fonts: PATHS.srcPath + '/assets/fonts/',
            // images: PATHS.srcPath + '/assets/images/',
            // styles: PATHS.srcPath + '/assets/styles/'
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ]
}
