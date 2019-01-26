module.exports = {
    mode: 'development',

    target: 'node', //// reference: https://stackoverflow.com/a/52306426/6638533

    entry: {
        server: './server/server.ts'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/server',
    },

    resolve: {
        extensions: ['.ts', '.js'],
        alias: { //// reference: https://github.com/jeffbski/joi-browser#webpack
            joi: 'joi-browser'
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [
                    /joi-browser/
                ]
            }
        ]
    },

    node: {
        fs: 'empty' //// reference: https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-285598881
    }
};