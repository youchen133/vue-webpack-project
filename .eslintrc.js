module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential'
    // 'plugin:prettier/recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never']
  }
}