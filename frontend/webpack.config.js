const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: "style-loader",
                    options: {
                        injectType: "lazyStyleTag",
                        insert: function insertTemplate(element, options) {
                            
                            var parent = options.target || document.head;

                            parent.appendChild(element);
                        }
                    }
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                    }
                }, {
                    loader: "postcss-loader"
                }],
            },
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
        
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};