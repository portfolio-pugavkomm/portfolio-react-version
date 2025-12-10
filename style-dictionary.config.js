const config = {
  source: ['tokens.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/app/styles/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/app/styles/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'src/app/styles/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
};

export default config;
