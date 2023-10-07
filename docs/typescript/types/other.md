# 其他类型

## any
TypeScript 有一种特殊的类型，即 `any`，只要不想让特定值导致类型检查错误，就可以使用它。

当一个值是 `any` 类型时，您可以访问它的任何属性（这些属性反过来也是 `any` 类型），像函数一样调用它，将它赋值给（或从）任何类型的值，或几乎任何其他语法上合法的值：
```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
```
## object

要定义对象类型，我们只需列出其属性及其类型。

例如，下面是一个接收坐标对象的函数：
```ts
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```
## unknown

`unknown` 是 any 的类型安全对应方。任何类型都可以赋值给 `unknown`，但如果没有类型断言或基于控制流的缩小，`unknown` 除了赋值给自身和 `any` 之外，不能赋值给任何其他类型。同样，如果不先断言或缩小到一个更具体的类型，就不允许对 `unknown` 进行任何操作。

```ts
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  a.b();
}
```
## never
`never` 类型表示从不出现的值类型。例如，`never` 是函数表达式或箭头函数表达式的返回类型，它总是抛出异常或从不返回。当变量被任何永远不会为真的类型保护缩小范围时，也会获得 `never` 类型。

`never` 类型是每种类型的子类型，可以赋值给每种类型；但是，没有任何类型是 `never` 的子类型，也不能赋值给 `never`（除了 `never` 本身）。甚至 `any` 也不能赋值给 `never`。

返回 never 的函数示例
```ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```
