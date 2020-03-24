# 数据观察器

## Roadmap

- [ ] feat: async observe.

- [ ] feat: decouple Observable and Dep.

- [ ] feat: add test.

## Use

```js
import Observable from '@czs/data-observer';
let data = { age: 18 };

let observer = new Observable(data);

// add reactive observe
observer.observe(function (data) {
  // log "my age is 18"
  console.log('my age is ' + data.age);
})

// change data, and will log "my age is 19"
observer.data.age += 1;
```
