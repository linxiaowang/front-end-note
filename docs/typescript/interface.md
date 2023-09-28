# 接口

在TypeScript中，接口（Interfaces）提供了一种定义类型的契约方式，包括一组属性、方法和事件。它用于强制规定对象、类或函数参数的结构。接口不会被转译成JavaScript代码，仅在TypeScript的编译时用于类型检查。

以下是在TypeScript中定义和使用接口的示例：
```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John Doe',
  age: 30,
};

```
在这个示例中，User接口定义了user对象的结构，具有两个属性，name和age。然后，对象被类型化为User，使用了类型断言：User。这有助于TypeScript进行类型检查。

## Types vs Interfaces

在TypeScript中，类型（Types）和接口（Interfaces）都可以用于定义对象的结构并强制类型检查。但是，它们之间存在一些区别。

类型（Types）用于基于现有类型创建新的命名类型或将现有类型组合成新类型。可以使用type关键字创建类型。例如：
```ts
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};

```

而接口（Interfaces）用于描述对象和类的结构。可以使用interface关键字创建接口。例如：
```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};

```

类型别名（Type aliases）和接口（Interfaces）非常相似，而且在许多情况下，您可以自由选择它们之间的使用。接口的几乎所有特性在类型中都是可用的，关键区别在于类型无法重新打开以添加新属性，而接口始终是可扩展的。

拓展接口

```ts
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

通过交集扩展类型
```ts
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

```
向现有接口添加新字段：
```ts
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

类型在创建后无法更改

```ts
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

// 错误：重复的标识符 'Window'。
```

## Extends - 继承
在 TypeScript 中，您可以通过使用 "extends" 关键字创建一个新接口，该接口继承自原始接口，从而扩展接口。新接口可以包含额外的属性、方法或重新定义原始接口的成员。

```ts
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};

```
在此示例中，`Square` 接口扩展了 `Shape` 接口，并添加了一个额外的属性 `sideLength`。类型为 `Square` 的变量必须具有 `Shape` 和 `Square` 接口中定义的所有属性。这意味着 `square` 变量必须具有 `width`、`height` 和 `sideLength` 属性。


## 接口声明

在 TypeScript 中，接口是用于创建具有特定结构的对象的蓝图。接口定义了一个类或对象必须实现的一组属性、方法和事件。接口是对象和类之间的契约，可用于强制代码中对象的特定结构。

以下是在 TypeScript 中声明接口的示例：
```ts
interface Person {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}

```
在此示例中，`Person` 接口定义了四个属性：`firstName`、`lastName`、`age` 和一个名为 `getFullName()` 的方法。`age` 属性是可选的，由 `?` 符号表示。实现 `Person` 接口的任何类或对象必须具有这些属性和方法。

## 混合类型

在 TypeScript 中，混合类型是一种将多个类型组合成单一类型的方式。结果类型被视为这些类型的联合。这允许您指定一个值可以具有多个类型，而不仅仅是一个类型。

例如，您可以创建一个混合类型，它可以接受字符串或数字：
```ts
type StringOrNumber = string | number;
```

您还可以使用混合类型来创建更复杂的类型，可以表示多种不同类型的值的组合。例如

```ts
type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};

```
在上述示例中，`StringOrNumber` 是一个可以是字符串或数字的混合类型，而 `User` 是一个更复杂的混合类型，它包括多种不同类型的属性。这使得在 TypeScript 中可以更灵活地表示多样化的数据结构。
