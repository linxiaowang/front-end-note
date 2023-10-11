# 类型守卫
类型守卫（Type guards）是一种缩小变量类型的方法。这在你想根据变量的类型执行不同操作时非常有用。

## instanceof 操作符

`instanceof` 运算符是一种缩小变量类型的方式。它用于检查一个对象是否是某个类的实例。当你想确定一个对象是否属于特定类或其子类时，可以使用 `instanceof` 运算符。例如，你可以检查一个对象是否是一个特定的 JavaScript 类的实例。这通常用于实现类型检查和条件分支逻辑。

```ts
class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log('pet is not a bird');
}
```
## typeof 操作符
`typeof`运算符用于检查变量的类型。它返回一个表示变量类型的字符串值。

```ts
let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}
```
## 等于

TypeScript还使用 `switch` 语句和相等性检查，如`===`、`!==`、`==`和`!=`来缩小类型。例如：
```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
```

## Truthiness
"Truthiness"可能不是你在词典中找到的词，但在JavaScript中，你会经常听到它的提及。

在JavaScript中，我们可以在条件语句、`&&`、`||`、`if`语句、布尔否定(`!`)等中使用任何表达式。例如，`if`语句并不总是期望它们的条件具有布尔类型。
```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}
```

## 类型谓词-is
类型谓词是返回布尔值的函数。它们用于缩小变量的类型。类型谓词通常用于类型守卫中。

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function example(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}
```

## in 操作符

`in` 操作符可用来确定对象是否具有某个名称的属性

```typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

```
