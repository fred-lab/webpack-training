const path = require("path")
const outputPath = path.resolve(__dirname, "dist")

const config = {
    entry : {
        main: "./src/js/main.js"
    },
    output: {
        filename: "[name].js",
        path: outputPath + "/js",
        // publicPath n'a l'air de servir que pour le server de webpack
        publicPath: "/assets/"
    },
    resolve: {
        alias: {
            Src : path.resolve(__dirname, "/src/js")
        }
    }

}

module.exports = config