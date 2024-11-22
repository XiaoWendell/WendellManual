---
title: 标注
parent: UI 组件
nav_order: 7
---

# 标注
{: .d-inline-block }

新 (v0.4.0)
{: .label .label-green }

Markdown 不支持标注。但是，您可以使用 kramdown 支持的 Markdown 扩展将文本样式设置为标注: [*block IALs*](https://kramdown.gettalong.org/quickref.html#block-attributes)。

常见的标注类型包括 `highlight`、`important`、`new`、`note` 和 `warning`。

{: .warning }
这些标注名称*不是*由主题预先定义的: 您需要定义自己的名称。

当你 [配置]({% link docs/configuration.md %}#callouts) 标注的 `color` 和 (可选) `title` 后，你可以将其应用到段落，或者应用到包含多个段落的引用块，如下图所示。[^postfix]

[^postfix]:
    You can put the callout markup either before or after its content.

## An untitled callout
{: .no_toc .text-delta }

```markdown
{: .highlight }
A paragraph
```

{: .highlight }
A paragraph


## A single paragraph callout
{: .no_toc .text-delta }

```markdown
{: .note }
A paragraph
```

{: .note }
A paragraph

```markdown
{: .note-title }
> My note title
>
> A paragraph with a custom title callout
```

{: .note-title }
> My note title
>
> A paragraph with a custom title callout

## A multi-paragraph callout
{: .no_toc .text-delta }

```markdown
{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph

```markdown
{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph

## An indented callout
{: .no_toc .text-delta }

```markdown
> {: .highlight }
  A paragraph
```

> {: .highlight }
  A paragraph

## Indented multi-paragraph callouts
{: .no_toc .text-delta }

```markdown
> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph
```

> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph


## Nested callouts
{: .no_toc .text-delta }

```markdown
{: .important }
> {: .warning }
> A paragraph
```

{: .important }
> {: .warning }
> A paragraph

## Opaque background
{: .no_toc .text-delta }

```markdown
{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>
```

{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>
