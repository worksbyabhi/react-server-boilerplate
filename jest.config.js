/** @type {import('ts-jest').jestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,ts,jsx,tsx}',
    '<rootDir>/src/**/tests/**/*.{js,ts,jsx,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,ts,jsx,tsx}',
  ],
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'ts-jest',
  },
  /** any local sub project may give error for export. We can add those projects in transformIgnorePatterns list*/
  // transformIgnorePatterns: ['/node_modules/(?!(project_name_1|project_name_2|...))'],
  coverageDirectory: 'coverage',
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  /** files to ignore
   * format: <rootDir>/src/__path_of_file__
   */
  coveragePathIgnorePatterns: [],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};
