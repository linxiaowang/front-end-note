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
