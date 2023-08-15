# Vue代码规范

## 代码结构

组件/实例的选项应该有统一的顺序。
这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新 property 应该放到哪里。

1. 副作用 (触发组件外的影响):
    - `el`

2. 全局感知 (要求组件以外的知识)
    - `name`
    - `parent`

3. 组件类型 (更改组件的类型)
    - `functional`

4. 模板修改器 (改变模板的编译方式)
    - `delimiters`
    - `comments`

5. 模板依赖 (模板内使用的资源)
    - `components`
    - `directives`
    - `filters`

6. 组合 (向选项里合并 property)
    - `extends`
    - `mixins`

7. 接口 (组件的接口)
    - `inheritAttrs`
    - `model`
    - `props/propsData`

8. 本地状态 (本地的响应式 property)
    - `data`
    - `computed`

9. 事件 (通过响应式事件触发的回调)
    - `watch`

10. 生命周期钩子 (按照它们被调用的顺序)
    - `beforeCreate`
    - `created`
    - `beforeMount`
    - `mounted`
    - `beforeUpdate`
    - `updated`
    - `activated`
    - `deactivated`
    - `beforeDestroy`
    - `destroyed`

11. 非响应式的 property (不依赖响应系统的实例 property)
    - `methods`

12. 渲染 (组件输出的声明式描述)
    - `template/render`
    - `renderError`

## data
当在组件中使用 data property 的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。（若使用对象类型，则当更改data中的数据时，所有引用该组件的实例会共享修改，与其相对的，我们更希望每个组件实例都管理自己的数据）。

```js
// In a .vue file
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

## prop
prop 的定义应该尽量详细，至少需要指定其类型。在开发环境下，如果向一个组件提供格式不正确的prop，Vue 会进行告警协助捕获潜在的错误来源

```js
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          'syncing', 
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
    }
  }
}
```
## 避免 `v-if` 和 `v-for` 用在一起
当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级(在Vue3中 `v-if` 比`v-for`具有更高的优先级)，所以这个模板：

```html
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```
将会经过如下运算：
```js
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})
```
因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。通过将其更换为在如下的一个计算属性上遍历：
```js
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

```html
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

我们将会获得如下好处：
1.	过滤后的列表只会在 `users` 数组发生相关变化时才被重新运算，过滤更高效。
2.	使用 `v-for="user in activeUsers"` 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。
3.	解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。
为了获得同样的好处，我们也可以把：
```html
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

更新为：
```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
通过将 `v-if` 移动到容器元素，我们不会再对列表中的每个用户检查 `shouldShowUsers`。取而代之的是，我们只检查它一次，且不会在 shouldShowUsers 为否的时候运算 `v-for`。


## 为组件样式设置作用域
对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件为防止污染全局样式都应该是有作用域的。

```vue
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```
