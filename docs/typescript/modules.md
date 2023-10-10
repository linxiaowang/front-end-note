# 模块化

在 TypeScript 中，模块用于组织和重用代码。有两种类型的模块：

1. 内部模块（Internal Modules）：也被称为命名空间（Namespaces）。它们用于在单个文件内组织代码，使用 `namespace` 关键字来定义。

2. 外部模块（External Modules）：用于在多个文件之间组织代码。它们使用一个文件中的 `export` 关键字和另一个文件中的 `import` 关键字来定义。在 TypeScript 中，外部模块遵循 CommonJS 或 ES 模块的标准。

以下是如何在 TypeScript 中使用内部模块的示例：

```typescript
// myModule.ts
namespace MyModule {
  export function doSomething() {
    console.log('Doing something...');
  }
}

// main.ts
/// <reference path="myModule.ts" />
MyModule.doSomething(); // 输出："Doing something..."
```

在上面的示例中，我们在 `myModule.ts` 文件中创建了一个命名空间 `MyModule`，并在其中定义了一个函数 `doSomething`。然后，在 `main.ts` 文件中，我们使用 `/// <reference path="myModule.ts" />` 引用了 `myModule.ts` 文件，并调用了 `MyModule.doSomething()`。

这是一种将代码组织为模块以便重用和维护的方法。


## 命名空间（Namespaces）

在 TypeScript 中，命名空间（Namespaces）用于组织和共享跨多个文件的代码。命名空间允许您将相关功能组合成一个单独的单元，并防止命名冲突。

以下是如何在 TypeScript 中使用命名空间的示例：

```typescript
// myNamespace.ts
namespace MyNamespace {
  export function doSomething() {
    console.log('Doing something...');
  }
}

// main.ts
/// <reference path="myNamespace.ts" />
MyNamespace.doSomething(); // 输出: "Doing something..."
```

在这个示例中，我们在 `"myNamespace.ts"` 文件中使用命名空间关键字来定义一个命名空间 `"MyNamespace"`。在命名空间中，我们导出一个名为 `"doSomething"` 的函数。在主文件 `"main.ts"` 中，我们使用 `/// <reference path="myNamespace.ts" />` 来引用命名空间，然后调用了 `"MyNamespace.doSomething()"`。

这种方式可以帮助组织和管理大型代码库，使相关的代码在一个地方组织，避免了潜在的命名冲突。

## 环境模块（Ambient Modules）

在 TypeScript 中，环境模块（Ambient Modules）用于声明 TypeScript 程序中的外部模块或第三方库。环境模块为那些没有 TypeScript 声明，但在全局范围内可用的模块提供类型信息。

以下是如何在 TypeScript 中使用环境模块的示例：

```typescript
// myModule.d.ts
declare module 'my-module' {
  export function doSomething(): void;
}

// main.ts
import * as myModule from 'my-module';
myModule.doSomething();
```

在这个示例中，我们在 `myModule.d.ts` 文件中声明了一个环境模块 `"my-module"`。这个声明提供了 `"my-module"` 模块的类型信息，包括从模块导出的 `"doSomething"` 函数。

这样，TypeScript 就能够识别并检查引入自 `"my-module"` 模块的代码，以提供类型安全性和代码补全等功能。这对于与没有 TypeScript 声明的外部模块或第三方库进行交互非常有用。


## 外部模块

在 TypeScript 中，外部模块允许您在多个文件之间组织和共享代码。TypeScript 中的外部模块遵循 `CommonJS` 或 `ES` 模块标准。

以下是如何在 TypeScript 中使用外部模块的示例：

```typescript
// myModule.ts
export function doSomething() {
  console.log('Doing something...');
}

// main.ts
import { doSomething } from './myModule';
doSomething(); // 输出: "Doing something..."
```

在这个示例中，我们在 `"myModule.ts"` 文件中使用 `"export"` 关键字导出 `"doSomething"` 函数，从而使其可供其他文件使用。在 `"main.ts"` 文件中，我们使用 `"import"` 语句来引入 `"doSomething"` 函数，然后调用它，从而实现了在不同文件之间共享和使用代码的目的。

## 命名空间扩展

在 TypeScript 中，命名空间扩展是一种扩展或修改现有命名空间的方法。这在您希望向现有命名空间添加新功能或修复第三方库中缺失或不正确的声明时非常有用。

以下是如何在 TypeScript 中使用命名空间扩展的示例：

```typescript
// myModule.d.ts
declare namespace MyModule {
  export interface MyModule {
    newFunction(): void;
  }
}

// main.ts
/// <reference path="myModule.d.ts" />
namespace MyModule {
  export class MyModule {
    public newFunction() {
      console.log('I am a new function in MyModule!');
    }
  }
}

const obj = new MyModule.MyModule();
obj.newFunction(); // 输出: "I am a new function in MyModule!"
```

在这个示例中，我们使用命名空间扩展向 `"MyModule"` 命名空间添加了一个新函数 `"newFunction"`。这是在声明文件 `myModule.d.ts` 中完成的，我们在 `"MyModule"` 命名空间内声明了一个新接口 `"MyModule"`，并在其中添加了 `"newFunction"` 函数。


## 全局扩展

在 TypeScript 中，全局扩展是一种向全局范围添加声明的方法。这在您希望向现有库添加新功能或增强 TypeScript 中内置类型时非常有用。

以下是如何在 TypeScript 中使用全局扩展的示例：

```typescript
// myModule.d.ts
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

// main.ts
global.myGlobalFunction = function () {
  console.log('I am a global function!');
};

myGlobalFunction(); // 输出: "I am a global function!"
```

在这个示例中，我们声明了一个新的命名空间 `"NodeJS"` 并向其添加了一个接口 `"Global"`。在 `"Global"` 接口内部，我们声明了一个新的函数 `"myGlobalFunction"`。

这样，您可以在全局范围内使用 `"myGlobalFunction"` 函数。

