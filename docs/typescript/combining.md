# 组合类型

在 TypeScript 中，您可以使用类型联合（type union）和类型交叉（type intersection）来组合类型。

## 联合类型
TypeScript 中的联合类型允许您为单个变量或参数指定多种可能的类型。联合类型以竖条分隔的类型列表形式书写。

例如，一个函数的参数是字符串或数字：

```ts
function combine(input1: string | number, input2: string | number) {
  return input1 + input2;
}
```

## 交叉类型
交叉类型通过组合多个现有类型来创建一个新类型。新类型具有现有类型的所有特征。

要组合类型，可以使用 `&` 操作符，如下所示：

```ts
type typeAB = typeA & typeB;
```

`TypeAB` 将具有 `typeA` 和 `typeB` 的所有属性。

请注意，联合类型使用 `|` 操作符定义了一个变量，该变量可以保存类型 `A` 或 类型 `B` 的值


## 类型别名
TypeScript 中的类型别名允许您为类型创建一个新名称。

下面是一个例子：

```ts
type Name = string;
type Age = number;
type User = { name: Name; age: Age };

const user: User = { name: 'John', age: 30 };
```

在上面的示例中，`Name` 和 `Age` 分别是字符串和数字的类型别名。而 `User` 是一个对象的类型别名，该对象的属性 `name` 是 `Name` 类型，`age` 是 `Age` 类型。


## keyof 操作符
TypeScript 中的 `keyof` 操作符用于从对象类型中获取键的联合。下面是一个如何使用它的示例：

```ts
interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';
```
在这个示例中，`UserKeys` 是一个类型，代表了 User 接口中的键的联合，该接口包括 `"name"` | `"age"` | `"location"`。并且声明了一个名为 `key` 的常量，其类型是 `UserKeys`，其值为 `"name"`。
