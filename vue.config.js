const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  devServer: {
    disableHostCheck: true,
    hot: true,
    clientLogLevel: "warning",
    port: 8080,
    host: "0.0.0.0",
    https: false,
    open: false,
    proxy: {
      "/dataplat_hh": {
        target: "http://61.164.40.46:28024/dataplat_hh",
        changeOrigin: true,
        pathRewrite: {
          "^/dataplat_hh": "/",
        },
      },
      "/openservice_api_2/": {
        target: "http://61.164.40.46:28024/openservice_api_2/",
        changeOrigin: true,
        pathRewrite: {
          "^/openservice_api_2/": "/",
        },
      },
    },
  },
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE,
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  configureWebpack: () => ({
    plugins: [],
    optimization: {
      minimizer: [
        new TerserPlugin({
          minify: (file, sourceMap) => {
            const uglifyJsOptions = {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            };
            if (sourceMap) {
              uglifyJsOptions.sourceMap = {
                content: sourceMap,
              };
            }
            return require("uglify-js").minify(file, uglifyJsOptions);
          },
        }),
      ],
    },
  }),
};
