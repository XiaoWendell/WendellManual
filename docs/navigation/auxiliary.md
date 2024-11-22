---
title: Auxiliary Links
parent: Navigation
nav_order: 2
---

# Auxiliary Links

您可以向网站添加辅助链接列表，该列表显示在所有页面的右上角。您可以通过在网站的 `_config.yml` 文件中添加 `aux_links` [配置选项]({% link docs/configuration.md %}#aux-links) 来实现此目的。

## Example Auxiliary Link
{: .text-delta }

该网站有一个辅助链接: “Just the Docs on GitHub”。它使用以下代码呈现: 

```yaml
aux_links:
  Just the Docs on GitHub:
    - https://github.com/just-the-docs/just-the-docs
```
