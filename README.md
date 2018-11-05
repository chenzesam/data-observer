# 简易版依赖收集模式

## TODO

- [x] 将仓库以模块化形式呈现, 可给其他人用
- [ ] 修改数据时, 可以合并响应
- [ ] 更合理拆分 Watcher 和 Dep, 使两个都可以供外界使用, 目前 Dep 还是比较耦合于 Watcher

## Use

```js
// can look detail for example/index.js
// data for use
let data = { age: 18 }
// new a data Watcher
let dataWatcher = new Watcher(data)
// add reactive event, will get data param
dataWatcher.event(function (data) {
  console.log('my age is ' + data.age)
})
// change data
dataWatcher.data.age += 1 // my age is 19...
```