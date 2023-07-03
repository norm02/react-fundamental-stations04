module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/server/index.tsx",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: [/\.tsx$/],
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES5 に変換
                "@babel/preset-env",
                // React の JSX を解釈
                "@babel/react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"],
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      string_decoder: require.resolve("string_decoder/"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      url: require.resolve("url/"),
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
      fs: require.resolve("fs"),
      async_hooks: require.resolve("async"),
    },
  },
  target: ["node"],
};
