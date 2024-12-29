import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // pastikan globals.browser tidak memiliki kesalahan konfigurasi
      }
    }
  },
  pluginJs.configs.recommended,
];
