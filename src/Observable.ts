import Dep from './Dep';

type Data = Record<string, number | string | boolean | []>;

type Target = (data: Data) => {};

class Observable {
  private target: Target | null = null;

  public data: Data;

  constructor(data: Data) {
    // 用于存放所有 Dep 实例的 Map
    const deps = new Map();

    // Proxy handler, 暂时无用, 后续可用于复杂数据的深度遍历
    // let handler = {
    //   get(obj, key, receiver) {
    //     if (typeof obj[key] === 'object' && obj[key] !== null) {
    //       return new Proxy(obj[key], handler)
    //     }
    //     // 当获取的时候
    //     deps.get(key).depend(self.target)
    //     return Reflect.get(obj, key, receiver)
    //   },
    //   set(obj, key, newValue, receiver) {
    //     obj[key] = newValue
    //     deps.get(key).notify(obj)
    //     return Reflect.set(obj, key, newValue, receiver)
    //   }
    // }

    // 给数据的每个 key 都生成一个 Dep 实例, 用于收集他们的操作
    Object.keys(data).forEach((key) => {
      deps.set(key, new Dep<Data>());
    });

    this.data = new Proxy<Data>(data, {
      get: (obj, key, receiver): void => {
        // 当有操作获取该数据时, 将该操作注入到该 key 的 Dep 中
        deps.get(key).depend(this.target);

        return Reflect.get(obj, key, receiver);
      },
      set: (obj, key, newValue, receiver): boolean => {
        // 将数据更新
        // obj[key.toString()] = newValue;
        Reflect.set(obj, key, newValue, receiver);

        // 通知 get 时传入的响应事件, 并传入新数据
        deps.get(key).notify(obj);
        return true;
      },
    });
  }

  observe(func): void {
    this.target = func;
    (this.target as Target)(this.data);
    this.target = null;
  }
}

export default Observable;
