module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'max-len': ['error', { code: 150 }],
    'vue/no-v-html': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
