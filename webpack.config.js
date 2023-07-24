import CopyWebpackPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    devtool: 'source-map',
    entry:  {
        // include dist in entry point so that when running dev server,
        // we can access the files with /dist/...
        'dist/starcoder': './src/starcoder.js',
    }, 
    resolve: {
        alias: {
          Build: path.resolve(__dirname, 'build/'),
        },
    },
    output: {
        filename: 'starcoder.js',
        path: __dirname,
        library: {
            type: 'module',
        },
    },
    plugins: [
        // Copy .wasm files to dist folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'build/main.*',
                    to: '[name][ext]'
                },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.min\.js$/,
            extractComments: false,
        })],
    },
    experiments: {
        outputModule: true,
    }
};