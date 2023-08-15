import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端笔记",
  description: "好记性不如烂笔头",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '代码规范', link: '/code-spec/overview' }
    ],

    sidebar: {
      '/code-spec/': {base: '/code-spec/', items: sidebarCodeSpec()}
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

/* prettier-ignore */
function sidebarCodeSpec(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '概述',
      collapsed: false,
      items: [
        { text: '概述', link: 'overview' },
      ]
    },
    {
      text: '命名规范',
      collapsed: false,
      items: [
        { text: '项目文件命名', link: 'file-naming' },
        { text: 'Vue组件命名', link: 'vue-component-naming' },
        { text: '代码参数命名', link: 'code-naming' },
      ]
    },
    {
      text: '代码规范',
      collapsed: false,
      items: [
        { text: 'JavaScript', link: 'js-spec' },
        { text: 'Vue', link: 'vue-spec' },
        { text: 'CSS', link: 'css-spec' },
      ]
    },
    {
      text: '代码验证及自动格式化',
      collapsed: false,
      items: [
        { text: 'ESLint', link: 'eslint' },
        { text: 'Stylelint', link: 'stylelint' },
        { text: 'Githooks', link: 'git-hooks' },
      ]
    },
   
  ]
}
