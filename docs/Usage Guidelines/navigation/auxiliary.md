---
title: 辅助链接
parent: 导航
nav_order: 2
---

# Auxiliary Links

恁可以向网站添加辅助链接列表，该列表显示在所有页面的右上角。恁可以通过在网站的 `_config.yml` 文件中添加 `aux_links` [配置选项]({% link docs/Usage Guidelines/configuration.md %}#aux-links) 来实现此目的。

## Example Auxiliary Link
{: .text-delta }

该网站有一个辅助链接: “GitHub”。它使用以下代码呈现: 

```yaml
aux_links:
  GitHub:
    - https://github.com
```
