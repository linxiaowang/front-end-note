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
