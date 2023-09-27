# 函数

## 给函数添加类型
在TypeScript中，可以使用几种不同的方式为函数指定输入参数和返回类型。

带有类型的函数声明：

```ts
function add(a: number, b: number): number {
  return a + b;
}

```

带有类型的箭头函数：

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};

```
函数类型：
```ts
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};

```
## 函数重载
在TypeScript中，函数重载允许定义具有相同名称但具有不同参数的多个函数。在运行时，根据传递给函数的参数的数量、类型和顺序来确定要调用的正确函数。
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"

```
上面的示例中，有两个具有相同名称的函数`add`，但一个接受两个数字参数并返回数字，另一个接受两个字符串参数并返回字符串。在运行时，根据传递给`add`函数的参数类型，TypeScript会确定调用哪个版本的`add`函数。
