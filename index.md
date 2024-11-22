---
title: 首页
layout: home
nav_order: 1
description: “具有内置搜索功能”
permalink: /
---

# Wendell专注于编写的文档。
{: .fs-9 }

Just the Docs 可通过一个响应式 Jekyll 主题为您的文档提供快速启动，该主题可轻松定制并托管在 GitHub Pages 上。
{: .fs-6 .fw-300 }

[立即开始](#开始){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[在 GitHub 上查看][Just the Docs repo]{: .btn .fs-5 .mb-4 .mb-md-0 }

---

{: .warning }
> 请参阅 [CHANGELOG]({% link CHANGELOG.md %}) 以获取发布、新功能和错误修复的列表。

使用 [Markdown]、[Liquid] 模板语言和 HTML 为网页编写源文件。[^1] Jekyll 通过将所有包含 [front matter] 的文件转换为 HTML 来构建您的网站。

浏览文档以了解有关如何使用此主题的更多信息。

# 开始
## 关于项目

WendellManual 是 &copy; 2017-{{ "now" | date: "%Y" }}，作者是 [Patrick Marsceill](https://patrickmarsceill.com)。

### 感谢 Just the Docs 的贡献者！
<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>

----

[^1]: 本页 [source file for this page] 使用了所有三种标记语言。

[source file for this page]: https://github.com/just-the-docs/just-the-docs/blob/main/index.md
[Jekyll]: https://jekyllrb.com
[Markdown]: https://daringfireball.net/projects/markdown/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Front matter]: https://jekyllrb.com/docs/front-matter/
[Jekyll configuration]: https://jekyllrb.com/docs/configuration/
[GitHub Pages]: https://pages.github.com/
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
