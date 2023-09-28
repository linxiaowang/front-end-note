# 泛型

泛型（Generics）是 TypeScript 中的一种编写代码的方式，它可以处理多个数据类型，而不仅限于单一数据类型。泛型允许您编写函数、类和接口，它们可以接受一个或多个类型参数，这些参数充当实际数据类型的占位符，当使用函数、类或接口时，会使用这些占位符来表示实际数据类型。

例如，以下是一个泛型函数的示例，它接受任何数据类型的单个参数并返回相同的数据类型：

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // output 的类型将是 'string'

```
在这个示例中，`identity` 函数接受任何数据类型的单个参数，并返回相同的数据类型。实际数据类型在调用函数时指定，通过在参数 "`Hello`" 前使用 `<string>` 来指定。这就是泛型的基本概念。

## 泛型类型

泛型类型（Generic Types）允许您编写能够处理多个数据类型的对象、函数和类，而不仅限于单一数据类型。泛型类型是使用尖括号 `<T>` 定义的，可以用作特定数据类型的占位符。实际的数据类型在使用函数或类时指定。

例如，以下是一个泛型函数的示例，它接受任何数据类型的单个参数并返回相同的数据类型：
```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // output 的类型将是 'string'

```
在这个示例中，identity 函数接受任何数据类型的单个参数，并返回相同的数据类型。在调用函数时通过在参数 "Hello" 前使用 `<string>` 来指定实际数据类型。

泛型也可以用于类、接口和对象类型，使它们能够处理多个数据类型。

例如：
```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

```
在这个示例中，`GenericNumber` 类是一个泛型类，可以用于处理不同的数据类型。在创建 `myGenericNumber` 实例时，指定了 `number` 数据类型，因此它可以操作数字类型的数据。

## 泛型约束
泛型约束（Generic Constraints）在 TypeScript 中允许您指定用于泛型类型中的类型参数的要求。这些约束确保了在泛型类型中使用的类型参数满足特定的要求。

约束是使用 extends 关键字指定的，后跟类型参数必须扩展或实现的类型。
```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // 现在我们知道它具有 .length 属性，因此不再报错
  console.log(arg.length);

  return arg;
}

loggingIdentity(3); // 错误，number 没有 .length 属性
loggingIdentity({ length: 10, value: 3 }); // 正确

```
在这个示例中，`Lengthwise` 接口定义了一个 `length` 属性。`loggingIdentity` 函数使用了一个泛型类型参数 `T`，并通过 `Lengthwise` 接口进行了约束，这意味着类型参数必须扩展或实现 `Lengthwise` 接口。这个约束确保了传递给 `loggingIdentity` 函数的参数具有 `length` 属性。
