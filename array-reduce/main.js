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

const initialValue = 0;
const sumWithInitial = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log('Value of sumWithInitial is: ', sumWithInitial);

const product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('Value of product is: ', product);

const balanceSum = 0;

const net = (balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  } else {
    return balance - transaction.amount;
  }
};
const balance = account.reduce(net, 0);
console.log('balance is: ', balance);

const composite = traits.reduce((composite, trait) => {
  return Object.assign(composite, trait);
}, {});
console.log('composite', composite);
