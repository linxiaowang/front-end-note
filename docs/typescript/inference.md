# 类型推断

TypeScript 中的类型推断是指根据变量赋值自动确定变量类型的过程。这使您编写的代码更简洁、更易于理解，因为 TypeScript 编译器可以推断出变量的类型，而无需您明确指定。

下面是 TypeScript 中类型推断的一个示例：
```ts
let name = 'John Doe';
```
在本例中，TypeScript 编译器会自动推断 `name` 变量的类型是字符串。这意味着你可以像在代码中使用其他字符串一样使用 `name` 变量，TypeScript 编译器会确保你不会对它执行任何无效操作。
