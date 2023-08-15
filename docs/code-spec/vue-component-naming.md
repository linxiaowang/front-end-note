# Vue组件命名

## 组件名
组件名应该始终是多个单词的，根组件 App 以及 `<transition>`、`<component>`之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```
components/
|- MyComponents.vue
```


## 紧密耦合的组件名
和父组件紧密耦合的子组件应该以父组件名作为前缀命名。 因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

## 组件名中单词顺序

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue

```

## 完整单词的组件名
组件名应该倾向于而不是缩写。 编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。
```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue

```
