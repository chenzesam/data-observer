# 数据观察器

## TODO

- [x] 将仓库以模块化形式呈现, 可给其他人用
- [ ] 修改数据时, 可以合并响应
- [ ] 更合理拆分 Observer 和 Dep, 使两个都可以供外界使用, 目前 Dep 还是比较耦合于 Observer

## Use

```js
// can look detail for example/index.js

// data for use
let data = { age: 18 }

// new a data Observer
let dataObserver = new Observer(data)

// add reactive event, will pass changed data
dataObserver.event(function (data) {
  console.log('my age is ' + data.age)
})

// change data
dataObserver.data.age += 1 // my age is 19...
```