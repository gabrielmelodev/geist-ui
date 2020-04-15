module.exports = {
  verbose: true,
  
  setupFiles: ['./tests/setup.js'],
  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
  testPathIgnorePatterns: ['/pages/', '/dist/', '/lib/'],
  
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './tests/.babelrc.js' }],
  },
  
  testRegex: '.*\\.test\\.(j|t)sx?$',
}