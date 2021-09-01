const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const LazyLoadWebpackPlugin = require("lazyload-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/assets/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "assets/js/bundle.js",
    publicPath: "",
  },
  devtool: "source-map",
  optimization: {
    minimize: true, // remove this to only allow minification in production mode
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      //babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      //style and css extract
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  browsers: ["> 1%", "last 2 versions"],
                }),
              ],
            },
          },
        ],
      },
      //image file loader
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/media/",
              publicPath: "../media/",
            },
          },
        ],
      },
      //fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/",
              publicPath: "../fonts",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "src/assets/scss"),
      "@js": path.resolve(__dirname, "src/assets/js"),
      "@media": path.resolve(__dirname, "src/assets/media"),
      "@": path.resolve(__dirname, "src"),
    },
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rejaur Rahman | Web Developer",
      template: "src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/styles.css",
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, "dist"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets/media"),
          to: "assets/media",
        },
        {
          from: path.resolve(__dirname, "./src/assets/favicons"),
          to: "assets/favicons",
        },
      ],
    }),
    new LazyLoadWebpackPlugin(),
  ],
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
};
