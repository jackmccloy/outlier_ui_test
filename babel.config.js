module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    '@babel/env',
    '@babel/react',
  ];
  const plugins = [
    [
      'babel-plugin-styled-components', {
        displayName: true,
      },
    ],
  ];
  return {
    presets,
    plugins,
    sourceMaps: true,
  };
};
