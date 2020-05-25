/*
 * @Author: zouzheng
 * @Date: 2020-05-25 10:59:38
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 11:14:52
 * @Description: 这是XXX组件（页面）
 */
import { worker } from '../src/index'

const arr = [
  { fuc: () => `函数一运行`, params: [] },
  { fuc: p => `函数${p}运行`, params: ['二'] },
]
worker(arr).then(res => {
  console.log(res)
})