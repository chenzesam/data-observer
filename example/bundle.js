(function () {
  'use strict';

  // import Dep from './Dep'

  class Dep {
    constructor() {
      this.subscribers = [];
    }
    depend(target) {
      if (target && !this.subscribers.includes(target)) {
        this.subscribers.push(target);
      }
    }
    notify(data) {
      this.subscribers.forEach(callback => {
        callback(data);
      });
    }
  }

  class Observer {
    constructor(data) {
      this.target = null;
      let self = this;

      // 用于存放所有 Dep 实例的 Map
      let deps = new Map();

      // 给数据的每个 key 都生成一个 Dep 实例, 用于收集他们的操作
      Object.keys(data).forEach(key => {
        deps.set(key, new Dep());
      });

      this.data = new Proxy(data, {
        get(obj, key) {
          // 当有操作获取该数据时, 将该操作注入到该 key 的 Dep 中
          deps.get(key).depend(self.target);

          return obj[key]
        },
        set(obj, key, newValue) {
          // 将数据更新
          obj[key] = newValue;

          // 通知 get 时传入的响应事件, 并传入新数据
          deps.get(key).notify(obj);
          return true
        }
      });
    }
    event(func) {
      this.target = func;
      this.target(this.data);
      this.target = null;
    }
  }

  let data = { name: 'sam', age: 18, BWH: [1, 2, 3] };
  let observer = new Observer(data);
  observer.event(function (data) {
    let info = `${data.name} is ${data.age}`;
    console.log(info);
  });
  observer.event(function (data) {
    console.log('age ' + data.age);
    console.log('BWH ' + data.BWH);
  });

  document.querySelector('#button').addEventListener('click', function () {
    observer.data.age += 1;
    observer.data.BWH[0] = Math.random();
  });

}());
//# sourceMappingURL=bundle.js.map
