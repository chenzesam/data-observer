import Observable from '../src/index'

let data = { name: 'sam', age: 18, BWH: [1, 2, 3] }
let observer = new Observable(data)
observer.observe(function (data) {
  let info = `${data.name} is ${data.age}`
  console.log(info)
})
observer.observe(function (data) {
  console.log('age ' + data.age)
  console.log('BWH ' + data.BWH)
})

document.querySelector('#button').addEventListener('click', function () {
  observer.data.age += 1
  observer.data.BWH[0] = Math.random()
})