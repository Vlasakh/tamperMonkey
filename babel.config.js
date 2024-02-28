const CONFIG_DEFAULT = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  ignore: ['src/setupTests.js', 'src/**/__tests__'],
};

module.exports = CONFIG_DEFAULT;
