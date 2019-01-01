const path = require('path');


// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
module.exports = {
    mode: "development",
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    context: __dirname,
    devtool: 'source-map',
    devServer: {
        contentBase: 'static',
        publicPath: 'dist',
        port: 9005,
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /phaser-split\.js$/,
                use: ['expose-loader?Phaser']
            },
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
        }
    }
};
