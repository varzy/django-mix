[English](./README.en.md) | 简体中文

# DJANGO-MIX

一个基于 Django 和 Laravel-Mix 的，非前后端分离的网站项目脚手架，提供一种更优雅得处理前端资源的思路。

## 如何使用？

确保本地已经有以下环境：

* `node` >= 10.15.2
* `python` >= 3.6.8
* `npm` >= 6.12.0
* `pip`
* `django`

安装依赖。可以修改 `.npmrc` 切换 npm 源。

```bash
$ npm i
```

开发。

```bash
$ npm run serve
$ npm run watch
# visit http://localhost:3000

$ npm run lint
```

编译项目。

```bash
$ npm run prod
```

## TODO

[ ] 实现类似 Laravel 中的 `mix()` 方法，能够给资源自动添加版本号
