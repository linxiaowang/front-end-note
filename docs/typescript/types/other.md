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
## Object

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
## Unknown

