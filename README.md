<!--
 * @Author: zouzheng
 * @Date: 2020-05-25 11:34:55
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 14:03:13
 * @Description: 这是XXX组件（页面）
--> 
## Introduction

简单封装的webworker插件。

## Features

* 开箱即用，函数运行完后自动关闭webworker，减少内存占用。

## Installation

### With npm or yarn 

```bash
yarn add pikaz-excel-js

npm i -S pikaz-excel-js
```

**请确保vue版本在2.0以上**

## For Vue-cli

### Export:

#### Typical use:
``` html
<excel-export :sheet="sheet">
   <div>导出</div>
</excel-export>
```
.vue file:
``` js
  import {ExcelExport} from 'pikaz-excel-js'
  ...
  export default {
        components: {
            ExcelExport,
        },
        data () {
          return {
            sheet:[
              {
                title:"水果的味道",
                tHeader:["荔枝","柠檬"],
                table:[{litchi:"甜",lemon:"酸"}],
                keys:["litchi","lemon"],
                sheetName:"水果的味道"
              }
            ]
          }
        }
  ...
```