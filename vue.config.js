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
        port: '8080',
        host: '192.41.233.62',
        hot: true,

    }
}