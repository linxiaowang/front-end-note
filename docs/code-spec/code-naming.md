# 代码参数命名

## name
组件名应该始终是多个单词，应该始终是 PascalCase 的。 根组件 App 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
为使组件易于在devtools中调试（如下图为调试面板），每个组件都应指定组件名

```js
export default {
  name: 'ToDoList',
  // ...
}

```

## prop

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。我们单纯的遵循每个语言的约定，在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

```html
<WelcomeMessage greeting-text="hi"/>
```

```js
export default {
  name: 'MyComponent',
  // ...
  props: {
    greetingText: {
      type: String,
      required: true,
      validator: function (value) {
        return ['syncing', 'synced',].indexOf(value) !== -1
      }
    }
  }
}
```

## 变量

命名方法：camelCase
命名规范：类型 + 对象描述或属性的方式

```js
// bad
var getTitle = "LoginTable"

// good
let tableTitle = "LoginTable"
let mySchool = "我的学校"
```

## 常量
命名方法：全部大写下划线分割
命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

```js
const MAX_COUNT = 10
const URL = 'http://test.host.com'
```

## 方法

命名方法：camelCase
命名规范：统一使用动词或者动词 + 名词形式

```js
// 1、普通情况下，使用动词 + 名词形式
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog

// 2、请求数据方法，以 data 结尾
// bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData

// 3、单个动词的情况
init、refresh
```
| 动词 | 含义                         | 返回值                                                  |
| ---- | ---------------------------- | ------------------------------------------------------- |
| can  | 判断是否可执行某个动作 (权 ) | 函数返回一个布尔值。true：可执行；false：不可执行；     |
| has  | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值； |
| is   | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值； |
| get  | 获取某个值                   | 函数返回一个非布尔值                                    |
| set  | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象              |


## 自定义事件

自定义事件应始终使用 kebab-case 的事件名。
不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

```js
this.$emit('my-event')
```

```html
<MyComponent @my-event="handleDoSomething" />
```
不同于组件和 `prop`，事件名不会被用作一个 JavaScript 变量名或 `property` 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

