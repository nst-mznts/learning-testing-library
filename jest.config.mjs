/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
    "^.+\\.(js|jsx|mjs)$": "babel-jest"  // <-- добавлено jsx
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"],
  extensionsToTreatAsEsm: [".ts", ".tsx"], // .jsx/.js автоматически через babel-jest
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mjs"]
};
