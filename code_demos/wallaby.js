// Use when the editor workspace folder is `code_demos` (tests live under `examples/`).
// https://wallabyjs.com/docs/integration/vitest
module.exports = function () {
  return {
    autoDetect: ["vitest"],
    testFramework: {
      path: "./node_modules",
      configFile: "./examples/vitest.config.js",
    },
  };
};
