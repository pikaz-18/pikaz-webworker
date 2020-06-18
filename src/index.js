/*
 * @Author: zouzheng
 * @Date: 2020-05-25 10:54:46
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-18 15:30:34
 * @Description: 这是webworker组件（页面）
 */
import SWorker from 'simple-web-worker'

class WebWorker {
  constructor() {
    this.w = null
  }
  /**
  * @name: webworker运行函数
  * @param {Object[]} arr/传入数组对象
  * @param {Function} fuc/数组对象函数
  * @param {Array} params/数组对象函数参数
  * @return:
  */
  run (arr) {
    const actions = []
    const func = []
    arr.forEach((item, index) => {
      actions.push({ message: index.toString(), func: item.fuc })
      func.push({ message: index.toString(), args: item.params })
    })
    this.w = SWorker.create(actions)
    return this.w.postAll(func)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      }).finally(() => {
        this.w = null
      })
  }
}

const worker = new WebWorker()

export default worker