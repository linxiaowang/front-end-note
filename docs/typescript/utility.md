# 实用工具类型

## Partial


`Partial` 是 TypeScript 中的一种类型，它允许你将类型的所有属性变为可选的。这在你需要创建一个只包含现有类型的一部分属性的对象时非常有用。

以下是在 TypeScript 中使用 `Partial` 类型的示例：
```ts
interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// 输出: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }

```
在这个示例中，`Partial` 类型允许你创建一个只包含 `User` 接口的一部分属性的对象，并且在创建对象时可以选择性地提供属性。这使得创建对象时更加灵活，你可以只提供你感兴趣的属性。

## Pick
`Pick` 是 TypeScript 中的一种实用工具类型，它允许你从现有类型中选择指定属性。它的语法如下：

```ts
type NewType = Pick<OriginalType, 'Property1' | 'Property2' | ...>;
```
在你的示例中，你有一个 `Todo` 接口，它具有多个属性。然后，你使用 `Pick` 创建了一个新类型 `TodoPreview`，该类型仅包含 `title` 和 `completed` 两个属性。这对于从一个更大的接口中选择一部分属性非常有用，以创建一个新类型，该类型只包含你感兴趣的属性。

在 `Todo` 接口中，你有 `title`、`description` 和 `completed` 三个属性，但在 `TodoPreview` 类型中，你只选择了 `title` 和 `completed`。这意味着你可以创建一个对象，该对象只包含这两个属性。

以下是你示例中的代码：
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

```
这里，`todo` 对象只包含 `title` 和 `completed` 属性。这使得类型更加具体和可控，适合特定的用途。


## Omit
`Omit` 是 TypeScript 中的一种实用工具类型，它允许你从现有类型中排除指定的属性。它的语法如下：
```ts
type NewType = Omit<OriginalType, 'Property1' | 'Property2' | ...>;
```

在你的示例中，你有一个 `Todo` 接口，它具有多个属性。然后，你使用 `Omit` 创建了两个新类型 `TodoPreview` 和 `TodoInfo`，分别排除了 `description` 和 `completed` 或 `createdAt` 这些属性。

在 `Todo` 接口中，你有 `title`、`description`、`completed` 和 `createdAt` 四个属性。通过使用 `Omit`，你可以创建一个新类型，该类型不包含你想要排除的属性。

以下是你示例中的代码：
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

```

在 `TodoPreview` 类型中，你排除了 `description` 属性，所以 `todo` 对象只包含 `title` 和 `completed`。在 `TodoInfo` 类型中，你排除了 `completed` 和 `createdAt` 属性，所以 `todoInfo` 对象只包含 `title` 和 `description`。

这使得你能够根据需要创建新的类型，以适应特定的用例和数据结构。

## Readonly

`Readonly` 是 TypeScript 中的一个实用工具类型，它用于创建一个只读的版本，即将给定类型的所有属性都设置为只读，这意味着在创建的只读类型实例中，属性的值不能被重新分配。

在你的示例中，你有一个 `Todo` 接口，它具有一个 `title` 属性。然后，你使用 `Readonly` 将 `Todo` 接口的属性设置为只读，创建了一个只读类型的 `todo` 对象。这意味着你不能再尝试重新分配 `todo.title` 的值。

以下是你示例中的代码：
```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// 不能分配给 'title'，因为它是一个只读属性。
todo.title = 'Hello';
```
这是一个有用的工具类型，特别是当你希望确保某些对象的属性不会在后续的代码中被意外修改时。


## Record
`Record` 是 TypeScript 中的一个实用工具类型，它用于创建一个对象类型，其中属性键是由 `Keys` 指定的字符串字面量或联合类型，属性值是由 `Type` 指定的类型。这个实用工具类型通常用于将类型的属性映射到另一个类型上。

在你的示例中，你有一个 `CatInfo` 接口，它定义了关于猫的信息的类型。然后，你有一个 `CatName` 类型，它是三个字符串字面量的联合类型。接着，你使用 `Record` 创建了一个对象 `cats`，将 `CatName` 作为属性键，将 `CatInfo` 作为属性值，以创建一个映射，将每个猫的名称映射到其信息。

以下是你示例中的代码：

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

```
这个例子创建了一个 `cats` 对象，该对象包含了三只猫的信息，每只猫都可以通过其名称（'`miffy`'、'`boris`' 和 '`mordred`'）来访问其信息。

`Record` 可以在许多情况下很有用，特别是在需要将一组字符串映射到特定类型的情况下。

## Exclude
Exclude（排除）是一个 TypeScript 中的类型工具，它用于从一个联合类型（Union Type）中排除满足某个条件的成员，返回一个新的类型。

例如：

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // 结果为 "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // 结果为 "c"
type T2 = Exclude<string | number | (() => void), Function>; // 结果为 string | number

```

在上面的示例中，`Exclude` 用于排除联合类型中符合条件的成员。`T0` 排除了 `'a'`，所以结果是 `b | c`；`T1` 排除了 `'a'` 和 `'b'`，所以结果是 `'c'`；`T2` 排除了 `Function` 类型，所以结果是 `string | number`。这个工具类型在某些情况下可以帮助你过滤掉不需要的类型成员。

## Extract
`Extract` 是 TypeScript 中的类型工具之一，它用于从一个类型中提取出符合条件的成员，返回一个新的类型。具体来说，`Extract` 会从第一个类型中提取那些在第二个类型中存在的成员。

例如：

```typescript
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// 结果是 "a"
```

在这个示例中，`Extract` 从第一个类型 `'a' | 'b' | 'c'` 中提取那些在第二个类型 `'a' | 'f'` 中存在的成员，因此结果是 `'a'`，因为 `'a'` 存在于第二个类型中。

`Extract` 可以用于过滤、提取出特定类型的成员，适用于许多类型操作的场景。

## NonNullable
`NonNullable` 是 TypeScript 中的类型工具之一，它用于创建一个新类型，该类型排除了原始类型中的 `null` 和 `undefined`。

例如：

```typescript
type T0 = NonNullable<string | number | undefined>;
// 结果是 string | number

type T1 = NonNullable<string[] | null | undefined>;
// 结果是 string[]
```

在第一个示例中，`NonNullable` 排除了 `undefined`，因此结果类型是 `string | number`。在第二个示例中，它排除了 `null` 和 `undefined`，因此结果类型是 `string[]`。

这对于确保你的类型不包含可选的或未定义的值很有用，可以帮助减少潜在的运行时错误。


## Parameters

`Parameters` 是 TypeScript 中的一个类型工具，它用于从函数类型中提取参数的类型，并将它们构建成一个元组类型。以下是一些示例，展示了如何使用 `Parameters`：

```typescript
type T0 = Parameters<() => string>;
// 结果是 []

type T1 = Parameters<(s: string) => void>;
// 结果是 [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// 结果是 [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;
// 结果是 [arg: { a: number; b: string; }]

type T4 = Parameters<any>;
// 结果是 unknown[]

type T5 = Parameters<never>;
// 结果是 never

type T6 = Parameters<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T7 = Parameters<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.
```

这些示例展示了如何使用 `Parameters` 来获取不同函数类型的参数类型，并将它们构建成元组类型。但需要注意的是，某些类型，如 `string` 和 `Function`，不满足 `(...args: any) => any` 的函数类型约束，因此在这种情况下，`Parameters` 将会报错。

## ReturnType

`ReturnType` 是 TypeScript 中的一个类型工具，它用于获取函数类型的返回值类型。以下是一些示例，展示了如何使用 `ReturnType`：

```typescript
type T0 = ReturnType<() => string>;
// 结果是 string

type T1 = ReturnType<(s: string) => void>;
// 结果是 void

type T2 = ReturnType<<T>() => T>;
// 结果是 unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// 结果是 number[]

declare function f1(): { a: number; b: string };
type T4 = ReturnType<typeof f1>;
// 结果是 { a: number; b: string; }

type T5 = ReturnType<any>;
// 结果是 any

type T6 = ReturnType<never>;
// 结果是 never

type T7 = ReturnType<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T8 = ReturnType<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.
```

这些示例展示了如何使用 `ReturnType` 来获取不同函数类型的返回值类型。但需要注意的是，某些类型，如 `string` 和 `Function`，不满足 `(...args: any) => any` 的函数类型约束，因此在这种情况下，`ReturnType` 将会报错。


## InstanceType

`InstanceType` 是 TypeScript 中的一个类型工具，它用于获取构造函数的实例类型。以下是一些示例，展示了如何使用 `InstanceType`：

```typescript
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// 结果是 C

type T1 = InstanceType<any>;
// 结果是 any

type T2 = InstanceType<never>;
// 结果是 never

type T3 = InstanceType<string>;
// ^ Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

type T4 = InstanceType<Function>;
// ^ Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
```

这些示例中，`T0` 获取了类 `C` 的实例类型，`T1` 获取了 `any` 类型的实例类型，而 `T2` 获取了 `never` 类型的实例类型。

需要注意的是，像 `string` 和 `Function` 这样的类型不满足 `abstract new (...args: any) => any` 的构造函数类型约束，因此在这种情况下，`InstanceType` 将会报错。

## Awaited

`Awaited` 是 TypeScript 中的一个类型工具，用于模拟像 `await` 在异步函数中或 `Promise` 上的 `.then()` 方法等操作，特别是它们递归展开 `Promise` 的方式。

以下是一些示例，展示了如何使用 `Awaited`：

```typescript
type A = Awaited<Promise<string>>;
// 结果是 string

type B = Awaited<Promise<Promise<number>>>;
// 结果是 number

type C = Awaited<boolean | Promise<number>>;
// 结果是 number | boolean
```

在这些示例中，`Awaited` 用于获取 `Promise` 中的实际值类型，并递归展开嵌套的 `Promise`。
