module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text"], // Убрали clover для проверки
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!node_modules/**",
    "!coverage/**",
    "!jest.config.js",
  ],
  testEnvironment: "node", // Среда тестирования
};
