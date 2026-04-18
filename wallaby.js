// Vitest is installed under code_demos/node_modules; config + tests are in examples/.
// https://wallabyjs.com/docs/integration/vitest
module.exports = function () {
  return {
    autoDetect: ["vitest"],
    testFramework: {
      path: "./code_demos/node_modules",
      configFile: "./code_demos/examples/vitest.config.js",
    },
  };
};
