<!--
 * @Author: zouzheng
 * @Date: 2020-05-25 11:34:55
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 14:11:02
 * @Description: 这是XXX组件（页面）
--> 
## Introduction

简单封装的webworker插件。

## Features

* 开箱即用，函数运行完后自动关闭webworker，减少内存占用。

## Installation

### With npm or yarn 

```bash
yarn add pikaz-webworker

npm i -S pikaz-webworker
```

## For Typical use

``` js
  import worker from 'pikaz-webworker'
  const arr = [
  { fuc: () => `函数一运行`, params: [] },
  { fuc: p => p+4, params: [2] },
]
worker.run(arr).then(res => {
  console.log(res)
})
```

