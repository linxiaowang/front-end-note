# 单例模式

单例模式确保对象的类只有一个不可更改实例。简言之，单例模式包含一个不能被复制和修改的对象。当你希望应用遵循“真理的单点性”的观点时，这个模式就能发挥作用。

比方说，我们想在一个单一对象中包含应用程序的所有配置，而且禁止对该对象进行任何复制或修改。

可以通过对象字面量和类者两种方法来实现：

```js
const Config = {
  start: () => console.log('App has started'),
  update: () => console.log('App has updated'),
}

// 通过冻结对象来限制增加新的属性或者修改已有属性
Object.freeze(Config)

Config.start() // "App has started"
Config.update() // "App has updated"

Config.name = "Robert" // 尝试添加一个新的键
console.log(Config) // 添加失败： { start: [Function: start], update: [Function: update] }
使用对象的字面量

class Config {
    constructor() {}
    start(){ console.log('App has started') }  
    update(){ console.log('App has updated') }
}
  
const instance = new Config()
Object.freeze(instance)
```
