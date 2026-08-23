 
const users = [
  { id: 1, email: 'alice@example.com', name: 'Alice', role: 'user' },
  { id: 2, email: 'bob@example.com', name: 'Bob', role: 'user' },
  { id: 3, email: 'merchant@example.com', name: 'Merchant Inc', role: 'merchant' },
];

 
const cryptos = [];
const cryptoSymbols = ['BTC','ETH','SOL','ADA','DOT','AVAX','LTC','XRP','DOGE','LINK','UNI','MATIC','ATOM','XLM','TRX'];
for (let i=0;i<100;i++){
  const symbol = cryptoSymbols[i % cryptoSymbols.length] + (i>0?i:'');
  cryptos.push({
    id: i+1,
    name: `${symbol} Coin`,
    symbol,
    price: Number((Math.random()*50000).toFixed(2)),
    change24h: Number((Math.random()*10-5).toFixed(2)),
    marketCap: Math.floor(Math.random()*1e10),
  });
}

 
const purchaseHistory = [];
for (let i=0;i<200;i++){
  const userId = users[(i%users.length)].id;
  const crypto = cryptos[Math.floor(Math.random()*cryptos.length)];
  purchaseHistory.push({
    id: i+1,
    user_id: userId,
    crypto_symbol: crypto.symbol,
    amount: Number((Math.random()*2).toFixed(6)),
    fiat_amount: Number((Math.random()*2000).toFixed(2)),
    date: new Date(Date.now() - Math.floor(Math.random()*1000*60*60*24*180)).toISOString(),
    status: ['completed','pending','failed'][Math.floor(Math.random()*3)]
  });
}

 
const rewardHistory = [];
for (let i=0;i<200;i++){
  const userId = users[(i%users.length)].id;
  rewardHistory.push({
    id: i+1,
    user_id: userId,
    type: ['airdrop','purchase_bonus','referral'][i%3],
    amount: Number((Math.random()*100).toFixed(2)),
    date: new Date(Date.now() - Math.floor(Math.random()*1000*60*60*24*180)).toISOString(),
  });
}

 
const goods = [
  { id: 1, name: '1-month membership', price: 9.99, discount: 10, merchant: 'Merchant Inc', payment_method: 'card' },
  { id: 2, name: '1-month crypto membership', price: 0.01, discount: 0, merchant: 'Merchant Inc', payment_method: 'crypto' },
  { id: 3, name: 'Annual membership', price: 99.99, discount: 15, merchant: 'Merchant Inc', payment_method: 'card' },
];

 
const cards = [];
const banks = [];
for (let u of users) {
  cards.push({ id: cards.length+1, holder_id: u.id, brand: 'Visa', last4: String(1000 + u.id).slice(-4), exp: '12/27', name: u.name });
  cards.push({ id: cards.length+1, holder_id: u.id, brand: 'Mastercard', last4: String(2000 + u.id).slice(-4), exp: '11/26', name: u.name });
  banks.push({ id: banks.length+1, holder_id: u.id, bank_name: 'First Mock Bank', account_last4: String(3000 + u.id).slice(-4), routing: '000000000' });
}

module.exports = { users, cryptos, purchaseHistory, rewardHistory, goods, cards, banks };
