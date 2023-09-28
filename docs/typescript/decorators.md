# 装饰器

装饰器（Decorators）是 TypeScript 的一个特性，允许您修改类、属性、方法或参数的行为。它们是一种向现有代码添加附加功能的方式，可以用于各种任务，包括日志记录、性能优化和验证等。

以下是您可能在 TypeScript 中使用装饰器的示例：

```ts
function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// 输出: Calling add with arguments: 1,2
// 输出: 3

```

在这个示例中，我们使用 `@log` 装饰器修改了 `Calculator` 类中的 `add` 方法的行为。`log` 装饰器在调用原始方法之前记录了传递给方法的参数。这允许我们查看传递给方法的参数，而无需修改方法的代码。

[更多查看](https://www.typescriptlang.org/docs/handbook/decorators.html#handbook-content)
