module.exports = {
  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
  testMatch: ['<rootDir>/src/**/?(*.)test.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/plugins/**', '!src/index.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};
