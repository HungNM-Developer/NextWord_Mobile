/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {  
  transformer: {
    getTransformOptions: async () => ({
      "assets":[
        "fonts"
      ],
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
