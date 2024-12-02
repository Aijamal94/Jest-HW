module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
  },
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**jest.config.js**",
  ],
};
