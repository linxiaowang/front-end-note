# Stylelint

## 安装
nodejs版本在16以上的去除版本号，直接安装最新版

`npm install stylelint stylelint-config-html postcss postcss-html postcss-scss stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue --save-dev`

## 指令配置
`package.json`中加入如下指令：

```json
"stylelint": "stylelint **/*.{css,less,scss,vue}",
"stylelint:fix": "stylelint **/*.{css,less,scss,vue} --fix"
```

## `.stylintrc.js`配置

```js
module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard'
  ],
  defaultSeverity: 'warning',
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'function-url-quotes': null,
    'font-family-no-missing-generic-family-keyword': null,
    'color-function-notation': null,
    'import-notation': 'string',
    'alpha-value-notation': 'number',
    'declaration-block-trailing-semicolon': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'max-line-length': null,
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss']
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss'
      ]
    }
  ]
}

```
