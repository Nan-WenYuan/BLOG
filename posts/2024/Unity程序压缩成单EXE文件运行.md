---
title: Unity程序压缩成单EXE文件运行
tags: [Unity开发]
categories: [技术笔记]
date: 2024-10-21 06:02:50
articleGPT: 这是一篇初始化文章，旨在告诉用户一些使用说明和须知。
---
## 一、准备工作

1. 安装WinRAR压缩软件
2. 准备Unity打包完成的文件

## 二、压缩流程

1. 在需要打包的Unity程序文件夹上右击，打开压缩菜单，选择添加到压缩文件

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017132626-0fxf5qp.png)
2. 将压缩文件名称的rar尾缀更改为.exe

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017132718-4agd63u.png)
3. 选择高级-自解压文件选项

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017132808-kfsyv6w.png)
4. 在安装选项卡中，填写需要解压缩前后运行的主程序名称
   例如：TestProject\TestProject.exe
   （注意：需要带上上级目录文件夹名称，否则会提示找不到主程序）

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017133216-8mpm10x.png)
5. 模式选项卡中，静默方式选择 全部隐藏

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017133313-lr7qj6i.png)
6. 更新选项卡中，更新方式选择 解压并替换文件，覆盖方式选择 覆盖全部文件

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017133426-o88f1n3.png)
7. 文字和图标选项卡中，可以选择 从文件加载自解压图标选项，即可设置打包出的单EXE文件图标

   ![image](https://cdn.jsdelivr.net/gh/Nan-WenYuan/FHS@main/data/BLOG/assets/image-20241017133637-s7p67jb.png)
8. 压缩流程准备工作结束，点击确定，等待压缩完成
9. 双击生成的单EXE文件，即可正常启动程序

## 三、注意事项

* 解压缩前后运行的主程序选项，需要带上上级目录文件夹名称，否则会提示找不到主程序
  例如：TestProject\TestProject.exe