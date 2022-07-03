# DForm

## 1、计划与进度

动态表单的n多种实现：

- react
  - 基于react原生context ✏️
  - 基于use-context-selector 🕛
  - 基于纯props 🕛

- Vue
  - 待定 🕛

- 原生js
  - 待定 🕛

要实现的功能：
- 数据与表单对象双向绑定
- 通过Form组件和Field组件能够轻松创建表单
- 对于单个表单项而言，能够通过方法获取其他表单项的值，从而实现一些联动的功能
- 校验
- ...思考中

## 2、react

### 2.1 基于react原生context

优点：知道基本的context原理即可上手编写，代码易懂，没有啥学习成本。
缺点：context的更新会导致所有useContext的组件刷新，所以在表单项较多的情况下性能堪忧，故而适合小型表单。

设计（后期补图）：
1、`src/DFormContext`定义了一个表单context，用于记录各表单项的值和一些函数；

2、`src/DForm`定义了一个表单组件，这是整个动态表单的顶层组件。`DForm`中定义了一个`formValues`状态，记录各表单项的状态。`DForm`返回`DFormContext.Provider`，向下层的组件提供表单值和方法；

3、`src/DField`作为`DForm`和表单控件组件的中间组件，向上，消费`DFormContext`，向下，给`children`（表单控件组件）提供初始值`value`和回调函数`onChange`。换句话来说，只要`DField`的`children.props`中有`value`和`onChange`属性，便可以“加入”动态表单。