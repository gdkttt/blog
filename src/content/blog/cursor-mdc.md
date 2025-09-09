---
title: Cursor 教程｜配置 mdc 提高编程质量
description: 在 Cursor 中，.mdc 文件的出现，是对 AI 辅助编程方式的一种升级。它不仅能保存上下文与规则，让 AI 的回答更加准确、连贯，还能帮助开发者建立团队统一的代码规范和协作习惯。
pubDate: 'Sep 09 2025'
---
# 一、引言

## 初次使用 Cursor 时常见的问题

### 上下文丢失

1. 写一个稍复杂的文件，比如包含两个函数：

```jsx
function getUser(id) {
  return { id, name: "Tom" };
}

function renderUser(user) {
  console.log(user.name);
}
```

1. 在 Cursor 只选中 `getUser` 函数，问：
    
    > 这个函数能不能加一个 age 字段
    > 
2. AI 会给出一个只改了 `getUser` 的版本，但是它**没有修改 `renderUser`**，导致 `renderUser` 依然只打印 `name`：

```jsx
function getUser(id) {
  return { id, name: "Tom", age: 25 };
}

function renderUser(user) {
  console.log(user.name);
}
```

1. 这时你在 Cursor 中继续输入：
    
    > 让 renderUser 也输出 age
    > 
2. 结果如下，它已经忘记了之前返回的 key 是`age` ，返回了一个自认为正确的 key 叫`Age`：

```jsx
function getUser(id) {
  return { id, name: "Tom", age: 25 };
}

function renderUser(user) {
  console.log(`${user.name}, Age: ${user.age}`);
}
```

## mdc 大有用处

在上面的例子中，可以看到

> **AI 没有真正记住我们之前的对话和代码上下文**。
> 

为了解决这个问题，Cursor 引入了 **`.mdc` 文件** —— 它相当于 AI 的“备忘录”，可以保存：

- 之前对话中 AI 看到的代码片段
- 你和 AI 的对话内容和修改请求

当你再次发起请求时，AI 可以从 `.mdc` 文件中恢复上下文，避免“失忆”，保证修改连续、理解全面。

# 二、如何配置

## 什么是 `.mdc`  文件

`.mdc` 文件是 Cursor 自动生成的一类 **上下文缓存文件**，全称可以理解为 *Memory Data Cache*（虽然官方没明确说明，但社区里普遍这样理解）。

一般存放在项目的 `.cursor` 文件夹中，文件名一般和对话或任务名称对应，例如 `auth.mdc`、`ui.mdc` （⚠️ 内容是 Cursor 内部格式，用户通常不应该手动去编辑）

`.mdc` 并不属于项目业务逻辑的一部分，它只是 AI 的“临时记忆库”，建议在 `.gitignore` 里忽略掉，不要提交到 Git 仓库

## 配置教程

打开聊天框，输入 **`/Generate Cursor Rules` 就可以了**

# 三、最佳实践

**结合 `/Generate Cursor Rules` 快速创建**

- 先在对话里和 AI 讨论需求，再用命令生成 `.mdc`，省时省力。

**定期复查和清理**

- 项目迭代时，旧的 `.mdc` 可能与最新代码风格冲突。
- 每个版本周期（比如每两周）检查一次 `.mdc` 文件，把过期的删掉或合并。

# 四、总结

在 Cursor 中，`.mdc` 文件的出现，是对 AI 辅助编程方式的一种升级。它不仅能保存上下文与规则，让 AI 的回答更加准确、连贯，还能帮助开发者建立团队统一的代码规范和协作习惯。

- 对于个人开发者而言，合理配置 `.mdc` 可以减少反复解释需求、AI 理解片段化等问题；
- 对于团队而言，更是一种提升协作效率、保持代码一致性的有效手段。

建议大家在日常开发中合理使用 `.mdc` 文件，它能提升你的编程效率和质量。