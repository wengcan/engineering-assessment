export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    rootDir: 'src',
    moduleNameMapper: {
       "\\.(css|less|sass|scss|gif|ttf|eot|svg|png)$": "identity-obj-proxy",
    }
}