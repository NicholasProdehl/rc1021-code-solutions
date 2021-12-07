const takeAChance = require('./take-a-chance');

takeAChance('Nicholas');

const promise1 = new Promise((resolve, reject) => {
  resolve(takeAChance('Nicholas'));
  reject(takeAChance('Nicholas'));
});

promise1.then(value => {
  console.log(value);
});

promise1.catch(value => {
  console.log(value);
});
