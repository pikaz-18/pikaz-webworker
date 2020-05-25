/*
 * @Author: zouzheng
 * @Date: 2020-05-25 10:54:46
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-05-25 11:03:49
 * @Description: 这是XXX组件（页面）
 */
import SWorker from 'simple-web-worker'

/**
 * @name: webworker运行函数
 * @param {arr} 传入数组对象
 * @param {Function} fuc/数组对象函数
 * @param {Array} params/数组对象函数参数
 * @return: 
 */
const worker = arr => {
  const actions = arr.map((item, index) => {
    return { message: index.toString(), func: item.fuc }
  })
  const func = arr.map((item, index) => {
    return { message: index.toString(), args: item.params }
  })
  let w = SWorker.create(actions)
  return w.postAll(func)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
      return err
    }).finally(() => {
      w = null
    }
    )
}
export { worker }