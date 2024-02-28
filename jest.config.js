module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'cjs'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
  coverageReporters: ['text', 'json', 'clover', 'lcov'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/*.+(js|jsx)'],
  testEnvironment: 'jest-environment-jsdom-global',
};
