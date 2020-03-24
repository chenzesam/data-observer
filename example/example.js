const data = { name: 'sam', age: 18, BWH: [1, 2, 3] };

const observer = new Observable(data);

observer.observe((data) => {
  console.log(`age ${data.age}`);
});

document.querySelector('#button').addEventListener('click', () => {
  console.log('observer.data.age', observer.data.age);
  observer.data.age += 1;
  observer.data.BWH[0] = Math.random();
});
