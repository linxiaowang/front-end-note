# 对象类型

## Interface

TypeScript 允许您使用可被多个对象重复使用的接口对对象进行特定类型化。

```ts
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello ' + person.name;
}
```

## Class
在 TypeScript 中，类是创建具有特定属性和方法的对象的蓝图。类是面向对象编程的基本概念。
下面是 TypeScript 中一个简单类的示例：
```ts
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}
```
## Enum
枚举不是 JavaScript 的类型级扩展。它允许开发人员定义一组命名常量。使用枚举可以更容易地记录意图，或创建一组不同的情况。TypeScript 提供了基于数字和字符串的枚举。

下面是 TypeScript 中数字枚举的示例：
```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```
在上面的数字枚举中，Up 的初始化值为 1，从那时起，下面的所有成员都会自动递增。换句话说，Direction.Up 的值为 1，Down 为 2，Left 为 3，Right 为 4。

如果我们不对 Up 进行初始化，它的值就会是 0，而其他成员的值也会从这里开始自动递增。

## Array
要指定 `[1, 2, 3]` 之类数组的类型，可以使用语法 `number[]`；该语法适用于任何类型（例如 `string[]` 是字符串数组，以此类推）。您也可以将其写成 `Array<number>`，意思是一样的。

```ts
const numbers: number[] = [1, 2, 3];
```
## Tuple
元组类型是另一种数组类型，它知道自己包含多少个元素，以及在特定位置上包含哪些类型。
```ts
type StringNumberPair = [string, number];

const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];

// Error: Index out of bounds
const third = pair[2];
```
