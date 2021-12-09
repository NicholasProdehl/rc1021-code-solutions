const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const sumFunc = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(sumFunc);

console.log('sum: ', sum);

const productFunc = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(productFunc);

console.log('product: ', product);

function balanceFunc(prev, curr) {
  if (curr.type === 'deposit') {
    return prev + curr.amount;
  } else if (curr.type === 'withdrawal') {
    return prev - curr.amount;
  }
}
const balance = account.reduce(balanceFunc, 0);

console.log('balance: ', balance);

function compositeFunc(pre, cur) {
  pre = Object.assign(pre, cur);
  return pre;
}

const composite = traits.reduce(compositeFunc);

console.log('composite: ', composite);
