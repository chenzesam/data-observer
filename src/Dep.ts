type Subscriber<T> = (data: T) => {};

class Dep<T> {
  private subscribers: Subscriber<T>[] = [];

  depend(target): void {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify(data): void{
    this.subscribers.forEach((callback) => {
      callback(data);
    });
  }
}

export default Dep;
