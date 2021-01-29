'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./desktop-wallet-explorer-v3.cjs.prod.js");
} else {
  module.exports = require("./desktop-wallet-explorer-v3.cjs.dev.js");
}
