module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    /* Coding Style 相關 */
    indent: ['error', 2, { "SwitchCase": 1 }], // 縮排 2 空白
    semi: ['error', 'never'], // 結尾分號
    'linebreak-style': 0, // 作業系統 LF & CRLF 差異
    'array-bracket-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'eol-last': 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'operator-linebreak': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',

    // Custom
    'no-use-before-define': 'off', // 同檔案被使用的 Function 必須位於 使用者的上方
    'no-param-reassign': ['error', { props: false }], // 不可重新賦予值，但可改變其內容
    'import/prefer-default-export': 'off', // 若只有一個 export 於檔案 必須使用 default
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off', // function 名稱允許以下底線開頭
    'import/no-cycle': 'off', // 迴圈引用 (目前沒有問題)
    'consistent-return': 'off', // initEvents 不需要回傳值

    /* 開發期間方便用 (建議日後開啟檢查) */
    'no-console': 'off', // 允許 console.log
    'no-alert': 'off', // 允許 alert
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
