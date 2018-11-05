// import Dep from './Dep'

class Dep {
  constructor() {
    this.subscribers = []
  }
  depend(target) {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }
  notify(data) {
    this.subscribers.forEach(callback => {
      callback(data)
    })
  }
}

export default Dep