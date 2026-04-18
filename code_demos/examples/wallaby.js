// When `code_demos/examples` is the Wallaby project root. Repo root: ../../wallaby.js
export default function () {
  return {
    autoDetect: ["vitest"],
    testFramework: {
      path: "./node_modules",
    },
  };
}
