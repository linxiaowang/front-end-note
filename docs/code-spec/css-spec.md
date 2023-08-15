# CSS代码规范

## class和id命名
class 命名中禁止出现大写字母，必须采用’-’对class中的字母进行分隔且命名尽量按照BEM的格式进行命名

id使用小驼峰进行命名

```css
.el-button {
  font-size: 16px;
}

.el-button--small{
  font-size: 14px;
}
```
## !important
谨慎使用 `!important`
