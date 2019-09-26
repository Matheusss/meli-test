module.exports = {
  presets: [
    [
      '@vue/app',
      { useBuiltIns: 'entry' },
    ],
    [
      '@babel/preset-env', {
        targets: {
          browsers: ['last 1 version', 'ie >= 11'],
        },
      }],
  ],
}
