import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: 
      globals.browser,
      sourceType: "module" //, \n adicono as variaveis de ambiente aqui 
    }
  },
  pluginJs.configs.recommended, // aqui é onde vai as regras de verificação 
  {
    rules: {
      semi: ["error", "always"], // Exige ponto e vírgula
      quotes: ["error", "double"], // Exige aspas duplas
    }
  }
];