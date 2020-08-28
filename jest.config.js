module.exports = {
  testEnvironment: 'node',

  // config for ts-jest
  // preset: 'ts-jest',

  // config for @swc-node/jest
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
};