# ESlint

## 安装

`npm install eslint@7.32.0 eslint-plugin-vue@8.0.3 @babel/eslint-parser --save-dev`

## 指令配置
`package.json`中加入如下指令：

```json
"lint": "vue-cli-service lint --no-fix",
"lint:fix": "vue-cli-service lint",
```

## `.eslintrc`配置

```js
module.exports = {
  root: true,
  env: {
    // node环境
    node: true,
    // 浏览器环境
    browser: true,
    // es6环境
    es6: true,
    jquery: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    // 关键字前后空格
    'keyword-spacing': ['error', { after: true, before: true }],
    // 要求在操作符之间留有空格
    'space-infix-ops': ['error'],
    // 回调函数需要加上return
    'callback-return': ['error', ['callback', 'cb', 'next', 'done']],

    // Common
    'semi': ['error', 'never'],
    'curly': ['error', 'all'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': 'warn',
    'no-constant-condition': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-restricted-properties': [
      'error',
      { property: '__proto__', message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.' },
      { property: '__defineGetter__', message: 'Use `Object.defineProperty` instead.' },
      { property: '__defineSetter__', message: 'Use `Object.defineProperty` instead.' },
      { property: '__lookupGetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
      { property: '__lookupSetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' }
    ],

    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'generator-star-spacing': 'off',
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['/', '#']
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true
      }
    }],

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'complexity': 'off',
    'eqeqeq': ['error', 'smart'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'no-invalid-this': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': ['error', 'before'],
    'max-statements-per-line': ['error', { max: 1 }],

    /** ***********************************针对Vue文件的规则********************************************* */
    'vue/max-attributes-per-line': 'off',
    // html和js和css都要空一行
    'vue/padding-line-between-blocks': ['error', 'always'],
    // 组件中hmtl js css的顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    // Vue避免 v-if 和 v-for 用在一起
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true
      }
    ],
    'vue/no-v-html': 'off',
    // 多行元素换行符
    'vue/multi-word-component-names': 'off',
    'vue/no-lone-template': 'off'
    // 'vue/multiline-html-element-content-newline': 'off',
    // 'vue/singleline-html-element-content-newline': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
```
