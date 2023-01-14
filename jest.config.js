// @ts-check

/** @type {import("@swc/core").Config} */
const swcrcJest = {
  jsc: {
    parser: {
      syntax: "typescript",
    },
    paths: {
      "src/*": ["src/*"],
    },
  },
  sourceMaps: "inline",
}

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: [["text", { file: "report.txt" }]],
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/tmp/"],
  testEnvironment: "node",
  transform: {
    // 2023-01-15 Currently, `esbuild-jest` is not maintained. Therefore, I'm using `swc`.
    // WORKAROUND: It is waste, but I use the spread operator to convert it to `Record<string, unknown>`.
    "^.+\\.(t|j)sx?$": ["@swc/jest", { ...swcrcJest }],
  },
}

module.exports = config
