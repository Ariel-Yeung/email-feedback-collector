const { modelNames } = require("mongoose");

if (process.env.NODE_ENV === "production") {
    module.exports = require('./prod');
} else {
    // development keys
    module.exports = require('./dev');
}