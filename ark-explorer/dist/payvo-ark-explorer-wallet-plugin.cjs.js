'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./payvo-ark-explorer-wallet-plugin.cjs.prod.js");
} else {
  module.exports = require("./payvo-ark-explorer-wallet-plugin.cjs.dev.js");
}
