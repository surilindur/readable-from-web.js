const config = require('@rubensworks/eslint-config');

module.exports = config([
  {
    files: [ '**/*.ts' ],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [ 'tsconfig.eslint.json' ],
      },
    },
  },
  {
    files: [ 'webpack.config.js' ],
    rules: {
      'import/no-nodejs-modules': 'off',
    },
  },
]);
