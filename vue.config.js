// const {defineConfig} = require("@vue/cli-service");
// module.exports = defineConfig({
//     transpileDependencies: true,
// });
// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {},

  devServer: {
    port: "8080",
    host: "192.41.233.53",
    // host: "0.0.0.0",
    hot: true,
  },

  transpileDependencies: ["vuetify"],
};
