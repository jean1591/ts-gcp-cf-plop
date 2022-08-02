module.exports = {
  clearMocks: true,
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/dist'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  watchPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/functions/**/*.ts',
    '!src/functions/**/config.ts',
    'src/libs/**/*.ts',
    '!src/libs/config/logger.config.ts',
  ],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '@functions/(.*)': '<rootDir>/src/functions/$1',
    '@libs/(.*)': '<rootDir>/src/libs/$1',
  },
};
