# git hooks

## 安装
nodejs版本在16以上的去除版本号，直接安装最新版

`npm install simple-git-hooks lint-staged@12.0.0 --save-dev`

## 指令配置
`package.json`中加入如下指令：

```json
"simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*.{vue,ts,js,jsx}": "vue-cli-service lint",
    "*.{vue,scss,css}": [
      "stylelint **/*.{css,less,scss,vue} --fix"
    ]
  }

```

## 配置git hooks

```
git config core.hooksPath .git/hooks/
rm -rf .git/hooks
npx simple-git-hooks
```
