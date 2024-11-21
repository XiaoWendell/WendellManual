---
title: Home
layout: home
nav_order: 1
description: “具有内置搜索功能”
permalink: /
---

# Wendell专注于编写的文档。
{: .fs-9 }

Just the Docs 可通过一个响应式 Jekyll 主题为您的文档提供快速启动，该主题可轻松定制并托管在 GitHub Pages 上。
{: .fs-6 .fw-300 }

[立即开始](#入门){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[在 GitHub 上查看][Just the Docs repo]{: .btn .fs-5 .mb-4 .mb-md-0 }

---

{: .warning }
> 本网站记录了 Just the Docs 主题当前“主要”分支的功能。请参阅 [CHANGELOG]({% link CHANGELOG.md %}) 以获取发布、新功能和错误修复的列表。

Just the Docs 是一个使用 [Jekyll] 生成静态网站的主题。您可以使用 [Markdown]、[Liquid] 模板语言和 HTML 为您的网页编写源文件。[^1] Jekyll 通过将所有包含 [front matter] 的文件转换为 HTML 来构建您的网站。您的 [Jekyll 配置] 文件确定要使用哪个主题，并为您的网站设置常规参数，例如其主页的 URL。

Jekyll 使用主题本身构建此 Just the Docs 主题文档网站。这些网页显示了使用此主题时您的网页*默认情况下*的外观。但您可以轻松*[自定义]*主题，使它们看起来完全不同！

浏览文档以了解有关如何使用此主题的更多信息。

## 入门

[Just the Docs 模板] 提供了最简单、最快捷、最轻松的方式来创建使用 Just the Docs 主题的新网站。要开始创建网站，只需单击“[使用模板]”！

{: .note }
要使用主题，您***不需要***克隆或分叉 [Just the Docs repo]！只有当您打算在本地浏览主题文档、为主题开发做出贡献或基于 Just the Docs 开发新主题时，才应该这样做。

您可以轻松地将模板创建的站点设置为在 [GitHub Pages] 上发布 - [模板 README] 文件解释了如何执行此操作以及其他详细信息。

如果您的计算机上安装了 [Jekyll]，您还可以在*本地*构建和预览创建的站点。这样，您可以在提交更改之前对其进行测试，从而避免等待 GitHub Pages。[^2] 并且，您将能够将本地构建部署到与 GitHub Pages 不同的平台。

更具体地说，创建的站点：

- 使用基于 gem 的方法，即使用 `Gemfile` 并加载 `just-the-docs` gem
- 使用 [GitHub Pages / Actions 工作流] 在 GitHub Pages 上构建和发布网站

除此之外，您可以随意自定义使用模板创建的网站。您可以轻松更改 `just-the-docs` 和它使用的 Jekyll 的版本，以及添加更多插件。

{: .note }
请参阅主题 [README][Just the Docs README] 了解如何将主题用作 gem 而无需创建新网站。

## 关于项目

Just the Docs 是 &copy; 2017-{{ "now" | date: "%Y" }}，作者是 [Patrick Marsceill](https://patrickmarsceill.com)。

### 许可证
Just the Docs 采用 [MIT 许可证](https://github.com/just-the-docs/just-the-docs/tree/main/LICENSE.txt) 分发。

### 贡献

向此存储库贡献内容时，请先通过问题、
电子邮件或任何其他方式与此存储库的所有者讨论您希望进行的更改，然后再进行更改。在 [我们的 GitHub 存储库](https://github.com/just-the-docs/just-the-docs#contributing) 中了解有关成为贡献者的更多信息。

#### 感谢 Just the Docs 的贡献者！
<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>

### 行为准则

Just the Docs 致力于打造一个热情的社区。

[在我们的 GitHub 存储库上查看我们的行为准则](https://github.com/just-the-docs/just-the-docs/tree/main/CODE_OF_CONDUCT.md)。

----

[^1]: The [source file for this page] uses all three markup languages.

[^2]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Jekyll]: https://jekyllrb.com
[Markdown]: https://daringfireball.net/projects/markdown/
[Liquid]: https://github.com/Shopify/liquid/wiki
[Front matter]: https://jekyllrb.com/docs/front-matter/
[Jekyll configuration]: https://jekyllrb.com/docs/configuration/
[source file for this page]: https://github.com/just-the-docs/just-the-docs/blob/main/index.md
[Just the Docs Template]: https://just-the-docs.github.io/just-the-docs-template/
[Just the Docs]: https://just-the-docs.com
[Just the Docs repo]: https://github.com/just-the-docs/just-the-docs
[Just the Docs README]: https://github.com/just-the-docs/just-the-docs/blob/main/README.md
[GitHub Pages]: https://pages.github.com/
[Template README]: https://github.com/just-the-docs/just-the-docs-template/blob/main/README.md
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[customize]: {% link docs/customization.md %}
[use the template]: https://github.com/just-the-docs/just-the-docs-template/generate
