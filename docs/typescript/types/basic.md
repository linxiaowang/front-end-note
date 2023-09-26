# 基础类型

## boolean

`boolean`是 TypeScript 中的一种原始数据类型，表示布尔值，即 true 或 false。
下面是一个布尔变量声明的示例：
```ts
let isTrue: boolean = true;
let isFalse: boolean = false;
```
## number
`number`是 TypeScript 中表示数值的原始数据类型。它包括整数和浮点数值。

```ts
let intValue: number = 42;
let floatValue: number = 3.14;
```
## string
`string` 是 TypeScript 中表示文本数据的原始数据类型。它是一组 16 位 Unicode 字符集的元素。
```ts
let name: string = 'John Doe';
```
## void
`void` 表示不返回值的函数的返回值。当函数没有任何 `return` 语句，或没有从这些返回语句中返回任何显式值时，它就是推断类型：
```ts
// The inferred return type is void
function noop() {
  return;
}
```
在 JavaScript 中，不返回任何值的函数将隐式返回值 `undefined`。
但在 TypeScript 中，`void` 和 `undefined` 并不相同。

## undefined
JavaScript 有两个原始值用于表示值不存在或未初始化：`null` （不存在）和 `undefined` （未初始化）。

TypeScript 也有两个同名的相应类型。这些类型的行为方式取决于是否开启了 `strictNullChecks` 选项。

在关闭 `strictNullChecks` 的情况下，可能为`null` 或 `undefined`的值仍可正常访问，并且`null` 和 `undefined` 可赋值给任何类型的属性。这与没有`null`检查的语言（如 C#、Java）的行为类似。缺乏对这些值的检查往往是 bug 的主要来源；如果在代码库中可以做到这一点，TypeScript 总是建议人们开启 strictNullChecks。

打开 strictNullChecks 后，当某个值为 `null` 或`undefined`时，您需要在对该值使用方法或属性之前测试这些值。就像在使用可选属性前检查`undefined`一样，我们可以使用缩小检查来检查可能为`null`的值：
```ts
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}
```

## null
JavaScript 有两个原始值用于表示值不存在或未初始化：`null` （不存在）和 `undefined` （未初始化）。

TypeScript 也有两个同名的相应类型。这些类型的行为方式取决于是否开启了 `strictNullChecks` 选项。

在关闭 `strictNullChecks` 的情况下，可能为`null` 或 `undefined`的值仍可正常访问，并且`null` 和 `undefined` 可赋值给任何类型的属性。这与没有`null`检查的语言（如 C#、Java）的行为类似。缺乏对这些值的检查往往是 bug 的主要来源；如果在代码库中可以做到这一点，TypeScript 总是建议人们开启 strictNullChecks。

打开 strictNullChecks 后，当某个值为 `null` 或`undefined`时，您需要在对该值使用方法或属性之前测试这些值。就像在使用可选属性前检查`undefined`一样，我们可以使用缩小检查来检查可能为`null`的值：
```ts
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}
```


