---
title: lunr-languages
parent: 建站笔记
nav_order: 1
---

`lunr-languages` 是一个扩展库，用于扩展 [Lunr.js](https://lunrjs.com/) 的多语言支持，包括中文、德语、法语、西班牙语等多种语言。以下是如何在项目中实际使用 `lunr-languages` 来构建和查询多语言索引的步骤总结：

---

### 1. **安装依赖**

#### 使用 npm 安装
```bash
npm install lunr
npm install lunr-languages
```

#### 或者使用 CDN 引入
```html
<script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages/lunr.stemmer.support.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages/tinyseg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lunr-languages/lunr.zh.js"></script>
```

---

### 2. **单语言索引的构建（以中文为例）**

#### 示例文档
```javascript
const documents = [
  { id: 1, title: "恁好，世界", content: "这是一个中文测试文档。" },
  { id: 2, title: "搜索技术", content: "Lunr.js 非常轻量，但功能强大。" }
];
```

#### 构建中文索引
在初始化 Lunr 索引时，使用 `lunr.zh` 提供的中文支持：
```javascript
const lunr = require("lunr");
require("lunr-languages/lunr.stemmer.support")(lunr);
require("lunr-languages/tinyseg")(lunr);
require("lunr-languages/lunr.zh")(lunr);

const idx = lunr(function () {
  this.use(lunr.zh); // 启用中文支持

  this.field("title");
  this.field("content");
  this.ref("id");

  documents.forEach((doc) => this.add(doc));
});

// 搜索示例
const results = idx.search("测试");
console.log(results);
```

---

### 3. **多语言索引**

#### 多语言示例文档
```javascript
const documents = [
  { id: 1, title: "恁好，世界", content: "这是一个中文测试文档。" },
  { id: 2, title: "Hello World", content: "This is an English test document." },
  { id: 3, title: "Bonjour le monde", content: "Ceci est un document de test français." }
];
```

#### 构建多语言索引
多语言索引需要加载所有目标语言的插件，并使用 `lunr.multiLanguage` 方法：
```javascript
const lunr = require("lunr");
require("lunr-languages/lunr.stemmer.support")(lunr);
require("lunr-languages/lunr.zh")(lunr);
require("lunr-languages/lunr.fr")(lunr);
require("lunr-languages/lunr.multi")(lunr);

const idx = lunr(function () {
  this.use(lunr.multiLanguage("en", "fr", "zh")); // 支持英语、法语和中文

  this.field("title");
  this.field("content");
  this.ref("id");

  documents.forEach((doc) => this.add(doc));
});

// 搜索示例
const results = idx.search("document");
console.log(results);
```

---

### 4. **序列化和反序列化索引**

#### 序列化索引
将构建的索引保存为 JSON 文件，以便前端或其他脚本加载使用：
```javascript
const serializedIndex = JSON.stringify(idx);
```

#### 反序列化索引
在前端或另一个脚本中加载索引并使用：
```javascript
const lunr = require("lunr");
require("lunr-languages/lunr.stemmer.support")(lunr);
require("lunr-languages/lunr.zh")(lunr);
require("lunr-languages/lunr.fr")(lunr);
require("lunr-languages/lunr.multi")(lunr);

const serializedIndex = /* 从文件或 API 加载的 JSON */;
const idx = lunr.Index.load(JSON.parse(serializedIndex));

// 搜索示例
const results = idx.search("document");
console.log(results);
```

---

### 5. **提高中文分词效果**

默认情况下，`lunr-languages` 使用 `tinyseg` 进行中文分词，但其效果有限。可以结合服务端分词工具（如 `nodejieba`）进行预分词：

#### 示例：使用 `nodejieba` 分词
安装分词工具：
```bash
npm install nodejieba
```

对文档内容进行分词后再索引：
```javascript
const jieba = require("nodejieba");

const documents = [
  { id: 1, title: jieba.cut("恁好，世界").join(" "), content: jieba.cut("这是一个中文测试文档。").join(" ") },
  { id: 2, title: "Hello World", content: "This is an English test document." }
];
```

构建索引的方式与之前类似。

---

### 总结

1. 通过 `lunr-languages`，恁可以方便地为 Lunr.js 添加多语言支持。
2. 对于中文搜索，推荐结合预分词工具（如 `nodejieba`）提升效果。
3. 支持的语言丰富，可以轻松构建单语言或多语言索引。
4. 通过序列化和反序列化，可以将索引部署到前端，或在多个环境中复用。
