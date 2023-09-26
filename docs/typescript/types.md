# 类型

## 类型断言
TypeScript 中的类型断言是一种告诉编译器将某个值视为特定类型的方法，而不考虑其推断类型。

TypeScript 中的类型断言有两种语法：
角括号 "语法：`<T>value`
"as" 语法：`value as T`

例如
```ts
let num = 42;

// using angle-bracket syntax
let str = <string>num;

// using as syntax
let str2 = num as string;
```

在这两个示例中，num 都是数字，但类型断言告诉编译器将数值视为字符串。

### `as const`
`as const` 是 TypeScript 中的一种类型断言，允许您断言表达式具有特定类型，其值应被视为只读值。

```ts
const colors = ['red', 'green', 'blue'] as const;

// colors is now of type readonly ['red', 'green', 'blue']
```
使用 `as const` 可以让 TypeScript 为常量推断出更准确的类型，从而改进代码中的类型检查和类型推断。

### as [type]
as 是 TypeScript 中的一种类型断言，它允许您告诉编译器将某个值视为特定类型，而不考虑其推断类型。

```ts
let num = 42;
let str = num as string;

// str is now of type string, even though num is a number
```
值得注意的是，类型断言不会改变值的运行时类型，也不会导致任何类型转换。它们只是为程序员提供了一种覆盖编译器执行的类型推断的方法。

### as any
any 是 TypeScript 中的一种特殊类型，代表任意类型的值。使用 any 类型声明值时，编译器不会对该值执行任何类型检查或类型推断。
```ts
let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = 'Hello, world!';
anyValue = true;
```

## 非空断言
非空断言操作符（！）是 TypeScript 中的一种类型断言，它允许您告诉编译器某个值永远不会为空或未定义。
```ts
let name: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name!.length;
```

非空断言操作符用于断言某个值不是空值或未定义值，并告诉编译器将该值视为不可空值。不过，使用非空断言操作符时一定要小心，因为如果值实际上为`null`或 `undefined`，它可能会导致运行时错误。

## `satisfies` 关键字

通过 satisfies 操作符，我们可以验证表达式的类型是否与某种类型相匹配，而不会改变表达式的结果类型。
例如，我们可以使用 satisfies 来验证调色板的所有属性都与`string | number[]` 兼容：

```ts
type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  bleu: [0, 0, 255],
  //  ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;

// Both of these methods are still accessible!
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
```
