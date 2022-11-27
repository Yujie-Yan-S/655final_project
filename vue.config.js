const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        host: "0.0.0.0",
        public: "192.41.233.62",
        port: "8080",
        https: false,
        disableHostCheck: true,
        open: false,
    },
});
