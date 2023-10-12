# CommonJS vs ES modules

在现代软件开发中，模块是一种将代码组织成自包含单元的方式，这些单元共同构成一个更大、更复杂的应用程序。

在浏览器JavaScript生态系统中，使用JavaScript模块取决于import和export语句；这些语句分别用于加载和导出ECMAScript模块（或ES模块）。

ES模块格式是官方标准格式，用于封装JavaScript代码以供重用，并且大多数现代Web浏览器本地支持模块。

然而，Node.js默认支持CommonJS模块格式。CommonJS模块使用require()加载，变量和函数使用module.exports导出。

ES模块格式从Node.js v8.5.0中引入，当JavaScript模块系统被标准化时。作为一个实验性模块，需要使用--experimental-modules标志才能在Node.js环境中成功运行ES模块。

然而，从版本13.2.0开始，Node.js已经稳定支持ES模块。

本文不涉及两种模块格式的使用，而是比较CommonJS模块和ES模块，并讨论你可能更喜欢使用其中之一的原因。

**比较CommonJS模块和ES模块语法**

默认情况下，Node.js将JavaScript代码视为CommonJS模块。在CommonJS模块中，您使用require()导入模块，使用module.exports导出功能。以下是一个CommonJS模块的示例，导出两个函数：

```javascript
module.exports.add = function(a, b) {
  return a + b;
};

module.exports.subtract = function(a, b) {
  return a - b;
};
```

您可以使用require()将公共函数导入到另一个Node.js脚本中，如下所示：

```javascript
const { add, subtract } = require('./util');

console.log(add(5, 5)); // 10
console.log(subtract(10, 5)); // 5
```

另一方面，通过将文件扩展名从.js更改为.mjs，库作者也可以在Node.js包中启用ES模块。

例如，以下是一个简单的ES模块（带有.mjs扩展名），用于公共使用导出两个函数：

```javascript
// util.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

然后，可以使用import语句导入这两个函数：

```javascript
// app.mjs
import { add, subtract } from './util.mjs';

console.log(add(5, 5)); // 10
console.log(subtract(10, 5)); // 5
```

在项目中启用ES模块的另一种方法是在最近的package.json文件中添加"type: module"字段。通过此设置，Node.js将所有在该包内的文件视为ES模块，您无需更改文件扩展名为.mjs。

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "type": "module",
  // ...
}
```

或者，您可以安装并设置像Babel这样的转译器，将ES模块语法编译为CommonJS语法。React和Vue等项目在幕后使用Babel来支持ES模块。

**在Node.js中使用ES模块和CommonJS模块的利弊**

- **ES模块是标准：** ES模块已成为封装JavaScript代码以供重用的标准。它提供了一种清晰且广泛接受的代码结构方式。

- **Node.js中的默认CommonJS：** Node.js最初将CommonJS作为默认模块系统，因此存在大量使用CommonJS编写的库和模块。

请记住，在ES模块和CommonJS模块之间的选择取决于您项目的具体要求以及与现有代码库的兼容性。
