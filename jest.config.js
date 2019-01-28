const fileMockExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'webp',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'mp4',
  'webm',
  'wav',
  'mp3',
  'm4a',
  'aac',
  'oga',
].join('|');


const firebaseImports = [
  'firebase/app',
  'firebase/firestore',
  'firebase/auth',
  'firebase/messaging',
].join('|');


const mockPath = '<rootDir>/src/tooling/jest-config/__mocks__';


const moduleNameMapper = {
  '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  [`.+\\.(${fileMockExtensions})$`]: `${mockPath}/fileMock.js`,
  [`(${firebaseImports})`]: `${mockPath}/firebase.js`,
};


module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/src/tooling/jest-config/preprocess.js',
  },
  moduleNameMapper,
  testPathIgnorePatterns: ['node_modules', '.cache', '.history'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/src/tooling/jest-config/loadershim.js'],
};
