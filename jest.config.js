module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/aws'],
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
