const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "#eval-source-map",
    entry: './src/scripts/configStorage/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
	                loader: 'babel-loader',
	                options: {
		                presets: ['@babel/preset-env']
	                }
                }
            },
	        {
		        test: /\.svg$/,
		        use: {
		            loader: 'svg-url-loader',
		            options: {
			            limit: 10000,
		            },
				},
	        }
        ]
    },
    resolve: {
		extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'configStorage.js',
        path: path.resolve(__dirname, 'wwwroot/dist/configStorage'),
        },
};