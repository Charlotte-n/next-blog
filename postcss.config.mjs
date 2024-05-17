/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 50,
      propList: ["*"],
      selectorBlackList: [/^\.html/], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    }
  },
};

export default config;
