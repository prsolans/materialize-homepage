var webpack = require("webpack");

module.exports = {
    entry: {
        common: [],
        index: ["./js/src/main", "./js/src/another-script.js"]
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {   test: /\.scss$/, loader: "style!css!scss"  },
            {   test: /\.css$/, loader: "style!css!" }
        ]
    },
    externals: {
        "jquery": "jQuery",
        "materialize" : "materialize"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"bundle", /* filename= */"bundle.js")
    ]


}