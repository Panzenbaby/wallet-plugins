'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./payvo-ark-explorer.cjs.prod.js");
} else {
  module.exports = require("./payvo-ark-explorer.cjs.dev.js");
}
