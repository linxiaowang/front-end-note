import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/front-end-note/',
  title: "前端笔记",
  description: "好记性不如烂笔头",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'typescript', link: '/typescript/overview' },
      { text: '代码规范', link: '/code-spec/overview' },
      { text: 'Git规范', link: '/git-spec/overview' },
      { text: '开发工具', link: '/tools/nvm' }
    ],

    sidebar: {
      '/code-spec/': {base: '/code-spec/', items: sidebarCodeSpec()},
      '/git-spec/': {base: '/git-spec/', items: sidebarGitSpec()},
      '/tools/': {base: '/tools/', items: sidebarTools()},
      '/typescript/': {base: '/typescript/', items: sidebarTypescript()}
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linxiaowang/front-end-note' }
    ],

    lastUpdated:true
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

function sidebarGitSpec(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '概述',
      collapsed: false,
      items: [
        { text: '概述', link: 'overview' },
      ]
    },
    {
      text: 'Git 分支管理规范',
      collapsed: false,
      items: [
        { text: '分支命名规范', link: 'branch-naming' },
      ]
    },
    {
      text: 'commit',
      collapsed: false,
      items: [
        { text: 'git commit', link: 'commit' },
        { text: '合并请求模板', link: 'merge-request-template' },
      ]
    },
    {
      text: '场景说明',
      collapsed: false,
      items: [
        { text: '场景说明', link: 'scene' },
      ]
    },
    {
      text: '日常使用',
      collapsed: false,
      items: [
        { text: '常用指令', link: 'commands' },
      ]
    },
  ]
}

function sidebarTools(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Node',
      collapsed: false,
      items: [
        { text: 'nvm-node', link: 'nvm' },
        { text: '常用正则', link: 'regular' },
      ]
    },
  ]
}


function sidebarTypescript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '概述',
      collapsed: false,
      items: [
        { text: '概述', link: 'overview' }
      ]
    },
    {
      text: '类型',
      collapsed: false,
      items: [
        { text: '基础类型', link: 'types/basic' },
        { text: '对象类型', link: 'types/object' },
        { text: '其它类型', link: 'types/other' },
        { text: '类型断言', link: 'types/assertions' },
      ]
    },
    {
      text: '类型推断',
      collapsed: false,
      items: [
        { text: '类型推断', link: 'inference' }
      ]
    },
    {
      text: '类型兼容',
      collapsed: false,
      items: [
        { text: '类型兼容', link: 'compatibility' }
      ]
    },
    {
      text: '组合类型',
      collapsed: false,
      items: [
        { text: '组合类型', link: 'combining' }
      ]
    },
    {
      text: '类型守卫',
      collapsed: false,
      items: [
        { text: '类型守卫', link: 'guards' }
      ]
    },
    {
      text: '函数',
      collapsed: false,
      items: [
        { text: '函数', link: 'function' }
      ]
    },
    {
      text: '接口',
      collapsed: false,
      items: [
        { text: '接口', link: 'interface' }
      ]
    },
  ]
}
