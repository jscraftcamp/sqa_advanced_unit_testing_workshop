// Repo-wide Vitest via vitest.config.ts (test.projects). Open the repo root in the editor.
// https://wallabyjs.com/docs/integration/vitest
module.exports = function () {
  return {
    name: "test-doubles",
    autoDetect: ["vitest"],
    testFramework: {
      path: "./node_modules",
      configFile: "./vitest.config.ts",
    },
  };
};
