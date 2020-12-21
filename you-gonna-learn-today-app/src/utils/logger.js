const { Signale } = require("signale-logger");

const signale = new Signale();
signale.error("Default Error Log");
signale.success("Default Success Log");
signale.remind("Improve documentation");

const options = {};
const custom = new Signale(options);
custom.error("Custom Error log");
custom.success("Custom Success log");
custom.remind("Improve documentation");

module.exports = { signale, custom };
