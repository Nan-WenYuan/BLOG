import {defineConfig} from 'vitepress'
import AutoConfigureNavSidebarPlugin from '@w3ctech-editorial-department/vitepress-auto-configure-nav-sidebar'

// 自动生成导航和侧边栏插件 https://github.com/w3ctech-editorial-department/vitepress-auto-configure-nav-sidebar
const {nav, sidebar} = AutoConfigureNavSidebarPlugin({
    entry: './docs/', // 设置相对于项目根目录的检索入口
    singleLayerNav: false, //是否设置单层 nav
    showTopLevelIndexUnderNav: false, // 是否在 nav 展示 index
    showSidebarIcon: false, // 显示 sidebar 修饰
    showNavIcon: false, // 显示 nav 修饰
    isCollapsible: true, // sidebar 是否可折叠
    ignoreFiles: ['../index.md'], // 需要排除的一些文件
    ignoreFolders: ['.vitepress','Files'], // 需要排除的一些目录
    filePrefix: '✏️', // 文件前缀修饰，有助于区分
    dirPrefix: '📂', // 目录前缀修饰，有助于区分
    collapsed: true, // sidebar 默认折叠
    customParentFolderName: '', // 自定义侧边栏父文件夹的显示文本，不设置或为空还是默认显示原父文件夹名
    customIndexFileName: '', // 自定义侧边栏 index.md 文件的显示文本，不设置或为空还是默认显示原文件名
})


// https://vitepress.qzxdp.cn/reference/default-theme-config.html
export default defineConfig({
    title: "南文渊的工作空间", // 网站标题
    titleTemplate: ":title | BLOG", // 网站标题后缀
    description: "A BLOG Site!", // 网站描述

    cleanUrls: true, // 干净的URL
    appearance: true, // 是否启用夜间模式
    lastUpdated: true, // 最后更新时间
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav,
        sidebar,
        aside: true, // 大纲渲染位置 ture 右侧 left 左侧 false 关闭
        outlineTitle: 'On this page', // 大纲标题
        // 导航社交图标
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Nan-WenYuan'}
        ],
        // 页脚信息
        // footer: {
        //     message: 'Released under the MIT License. Copyright © 2023-present NanWenYuan',
        // },
        // 文章上一页下一页
        docFooter: {
            prev: '',
            next: ''
        },
        // 编辑页面
        editLink: {
            pattern: 'https://github.com/NanWenYuan/BLOG/tree/main/docs/:path',
            text: 'Edit this page'
        }
    }
})
