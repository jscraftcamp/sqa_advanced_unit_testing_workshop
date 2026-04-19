import { defineConfig } from "vitest/config";

/**
 * Single Vitest entry for the repo. Wallaby (repo-root wallaby.js) uses this file.
 * Requires `npm install` at the repo root (npm workspaces hoist a single `vitest`).
 */
export default defineConfig({
  test: {
    projects: [
      "exercises/tire-pressure",
      "exercises/starter-vite-vitest-rtl",
      "code_demos/examples",
    ],
  },
});
