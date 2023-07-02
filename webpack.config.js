module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./server/index.js",
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
        // 拡張子 .tsx の場合
        test: /\.tsx?$/,
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
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
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
