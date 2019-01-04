module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        forceAllTransforms: true,
      },
    ],
    '@babel/react'
  ],
  plugins: [
  '@babel/plugin-proposal-class-properties'
  ]
}
