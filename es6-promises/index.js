const takeAChance = require('./take-a-chance');

const tac = takeAChance('Nicholas');

tac.then(value => {
  console.log(value);
});

tac.catch(value => {
  console.log(value);
});
