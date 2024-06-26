import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jestPlugin from 'eslint-plugin-jest';


export default [
  {
    languageOptions: {
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      jest: jestPlugin
    }
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the react version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Add other custom rules as needed
    },
  },
];