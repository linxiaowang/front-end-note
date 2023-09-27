# 类型兼容性

TypeScript 使用结构类型来确定类型兼容性。这意味着，如果两个类型具有相同的结构，无论其名称如何，都会被视为兼容。

下面是 TypeScript 中类型兼容性的示例：
```ts
interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x); // Output: 10
```
在本例中，`p1` 的类型是 `Point`，而 `p2` 的类型是 `{ x: number; y: number }`。尽管这两种类型的名称不同，但由于它们具有相同的结构，因此被认为是兼容的。这意味着可以将 `Point` 类型的值赋值给 `{ x: number; y: number }` 类型的变量，就像本例中的 `p1` 和 `p2` 一样。
