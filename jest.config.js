module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "assets/(.*)": [
      "<rootDir>/images/$1",
      "<rootDir>/photos/$1",
      "<rootDir>/recipes/$1",
    ],
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
};
