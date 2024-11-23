---
title: 布局
layout: default
parent: 使用指南
nav_order: 4.5
---

# 布局（Layout）

你可以在页面的 [front matter](https://jekyllrb.com/docs/front-matter/) 中指定布局。Just the Docs 提供了一个带有侧边栏的 `default` 布局（主题文档中几乎所有页面都使用该布局），以及一个省略侧边栏的 `minimal` 布局。  
{: .fs-6 .fw-300 }

## 布局的概念

请参阅 [Jekyll 的布局文档页面](https://jekyllrb.com/docs/layouts/) 了解布局的基本概念以及如何指定它们。

你可以使用 [Jekyll 的 front matter 默认值](https://jekyllrb.com/docs/configuration/front-matter-defaults/) 来为多个页面指定相同的布局。

## `default` 布局

此页面使用的是 `default` 布局。本网站通过 [front matter 默认值](https://jekyllrb.com/docs/configuration/front-matter-defaults/) 配置为 `docs` 目录下的所有页面设置 `layout: default`。

Just the Docs 的默认布局是 *响应式布局*: 在中宽及以上宽度的显示屏上，会显示一个包含导航面板的侧边栏；在较窄的显示屏上，侧边栏会自动隐藏在一个按钮下。

除了顶级页面以外，所有页面都会自动显示所谓的 *breadcrumbs*（导航路径）: 链接到它们的父页面以及更高层级的祖先页面。这些 breadcrumbs 显示在页面主要内容的上方。

通常，每个有子页面的页面会在其主要内容下方显示一个指向子页面的链接列表（可以通过在 front matter 中设置 `has_toc: false` 来隐藏此功能）。这个链接列表作为一个 *目录表*（table of contents）显示在页面中。

## `minimal` 布局

本页面的一个子页面和孙页面使用了 `minimal` 布局。该布局与 `default` 布局的区别在于省略了侧边栏以及导航面板。要在使用 `minimal` 布局的页面之间导航，你可以使用 breadcrumbs 和目录表。

## 有选择地隐藏或显示侧边栏

可以使用 [Jekyll 的 front matter 默认值](https://jekyllrb.com/docs/configuration/front-matter-defaults/) 来为多个页面应用 `minimal` 布局。此外，还有一些变量可以控制页面的布局。在 `_config.yml` 中，可以通过设置 `nav_enabled: false` 来禁用整个站点的侧边栏导航面板。然后可以通过为页面的 front matter 变量分配 `nav_enabled: true` 来选择性地在特定页面启用侧边栏。例如，可以在主页上启用侧边栏导航，而其他所有页面禁用它。

```yaml
---
layout: default
title: Home
nav_enabled: true
---
```

## 其他布局

Just the Docs 还提供其他布局: `about`、`home`、`page` 和 `post`。目前，它们都基于 `default` 布局。有关如何自定义它们，请参阅 [Jekyll 的继承文档](https://jekyllrb.com/docs/layouts/#inheritance)。

[front matter]: https://jekyllrb.com/docs/front-matter/ "Jekyll 的 front matter 文档"  
[Jekyll docs page about layouts]: https://jekyllrb.com/docs/layouts/ "Jekyll 的布局文档"  
[Jekyll's front matter defaults]: https://jekyllrb.com/docs/configuration/front-matter-defaults/ "Jekyll 的 front matter 默认值文档"  
[Jekyll docs about inheritance]: https://jekyllrb.com/docs/layouts/#inheritance "Jekyll 的继承文档"  