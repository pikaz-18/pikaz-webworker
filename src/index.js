/*
 * @Author: zouzheng
 * @Date: 2020-05-25 10:54:46
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 14:31:22
 * @Description: 这是XXX组件（页面）
 */
import SWorker from 'simple-web-worker'

/**
 * @name: webworker运行函数
 * @param {Object[]} arr/传入数组对象
 * @param {Function} fuc/数组对象函数
 * @param {Array} params/数组对象函数参数
 * @return: 
 */
let w = null

const run = arr => {
  const actions = []
  const func = []
  arr.forEach((item, index) => {
    actions.push({ message: index.toString(), func: item.fuc })
    func.push({ message: index.toString(), args: item.params })
  })
  w = SWorker.create(actions)
  return w.postAll(func)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    }).finally(() => {
      w = null
    })
}

// 留作扩展
const worker = {
  run
}
export default worker