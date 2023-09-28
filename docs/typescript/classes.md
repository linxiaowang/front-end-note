# 类
在 TypeScript 中，类是创建对象（类的实例）的蓝图，提供了一种结构化对象并封装数据和行为的方式。TypeScript 中的类具有与其他面向对象编程语言（如Java和C#）相似的语法。

在 TypeScript 中，使用 `class` 关键字定义类，后跟类的名称。类的定义可以包括字段（也称为属性或特性）、方法（函数）和构造函数。
```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const dog = new Animal('Dog');
dog.makeSound(); // 输出: Dog is making a sound
```
在此示例中，`Animal` 类具有一个名为 `name` 的字段，一个设置 `name` 字段值的构造函数，以及一个 `makeSound` 方法。可以使用 `new` 关键字创建 `Animal` 类的实例，并可以使用点表示法访问其方法和属性。

## 构造函数
在 TypeScript 中，构造函数的参数可以声明具有访问修饰符（例如 `public`、`private`、`protected`）和/或类型注解。然后，这些参数会自动分配给构造函数内部同名的属性，并可以在类内部访问。例如：
```ts
class Example {
  constructor(private name: string, public age: number) {}
}
```
在这个示例中，构造函数有两个参数：`name` 和 `age`。`name` 具有 `private` 访问修饰符，因此只能在 `Example` 类内部访问。`age` 具有 `public` 访问修饰符，因此它可以在类的外部访问。


## 构造函数重载
在 TypeScript 中，您可以通过在单个类中使用具有不同参数列表的多个构造函数定义来实现构造函数的重载。以下是一个具有多个构造函数定义的示例：
```ts
class Point {
  // 重载
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // 待定
  }
}

```
请注意，与函数重载类似，我们只有一个构造函数的实现，而只有签名会被重载。

## 访问修饰符

在 TypeScript 中，访问修饰符是用于控制类的属性和方法的可见性和可访问性的关键字。TypeScript 有三个访问修饰符：

- public（公共）：这是默认的访问修饰符。声明为公共的属性和方法可以在类内外的任何地方访问。

- private（私有）：声明为私有的属性和方法只能在同一类内部访问，它们不能从类外部访问。

- protected（受保护）：声明为受保护的属性和方法可以在类及其子类内部访问，但它们不能从类外部访问。

TypeScript 中的访问修饰符允许您定义类中属性和方法的可见性和可访问性级别，从而使您的代码更易于维护和安全。

## 抽象类
TypeScript 中的抽象类是无法单独实例化的类，必须由其他类进行子类化。抽象类为其他类提供了一个蓝图，并可以拥有抽象方法，这些方法没有方法体，必须由子类进行重写。这些类对于定义其他类可以继承和构建的通用接口或基本功能非常有用。

```ts
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}

```
在上面的示例中，`Animal` 是一个抽象类，它包含一个抽象方法 `makeSound` 和一个具体方法 `move`。`Dog` 类继承了 `Animal` 类，并实现了 `makeSound` 方法。抽象类 `Animal` 定义了一个通用的动物接口，而 `Dog` 类则实现了具体的动作。

## 继承与多态
继承与多态是面向对象编程中的两个基本概念，它们在 TypeScript 中也得到支持。

继承指的是子类从其父类继承属性和方法的机制。这允许子类重用其父类的代码和行为，同时还可以添加或修改自己的行为。在 TypeScript 中，可以使用 `extends` 关键字来实现继承。

多态是指对象具有多种形态的能力。这允许不同类的对象被视为共同类的对象，只要它们具有共同的接口或继承层次结构。在 TypeScript 中，多态是通过方法的重写和方法的重载来实现的。

```ts
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // 输出: Bark

animal = new Cat();
animal.makeSound(); // 输出: Meow

```
在上面的示例中，`Animal` 类定义了一个 `makeSound` 方法。`Dog` 和 `Cat` 类都继承自 `Animal` 类，并重写了 `makeSound` 方法，以实现不同的声音。通过多态，可以将这些不同的子类对象都视为 `Animal` 类的对象，并调用相应的 `makeSound` 方法。

## 方法重写
方法重写是 TypeScript 中的一种机制，其中子类为其父类中已经定义的方法提供了一个新的实现。这允许子类继承父类的行为，但可以根据自己的需求更改其行为。

要在 TypeScript 中重写一个方法，子类中的方法签名必须与父类中的方法签名完全匹配。

```ts
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // 输出: Bark

```
在这个示例中，`Dog` 类重写了 `Animal` 类中定义的 `makeSound` 方法，并提供了自己的实现。当在 `Dog` 类的实例上调用 `makeSound` 方法时，它将使用 `Dog` 类中的实现，而不是 Animal 类中的实现。这就是方法重写的概念。
