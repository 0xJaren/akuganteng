const path = require("path");

module.exports = {
    entry: "./src/index.js",  // Mengarah ke src/index.js yang baru kita buat
    output: {
        path: path.resolve(__dirname, "dist"),  // Output di folder dist
        filename: "bundle.js"  // Nama file output yang dihasilkan
    },
    mode: "development",  // Mode development
};
