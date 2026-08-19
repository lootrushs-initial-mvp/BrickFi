const dataService = require('../services/dataService');

function getUsers(req, res) {
  const { email } = req.query;
  if (email) {
    const u = dataService.getUsers(email);
    if (!u) return res.status(404).json({ error: 'User not found' });
    return res.json({ user: u });
  }
  return res.json({ users: dataService.getUsers() });
}

function getCryptos(req, res) {
  return res.json({ cryptos: dataService.getCryptos() });
}

function getGoods(req, res) {
  const { payment_method } = req.query;
  const goods = dataService.getGoods(payment_method);
  return res.json({ goods });
}

function getCards(req, res) {
  const { holder_id } = req.query;
  const cards = dataService.getCards(holder_id);
  return res.json({ cards });
}

function postCard(req, res) {
  const entry = dataService.addCard(req.body);
  return res.status(201).json({ card: entry });
}

function getBanks(req, res) {
  const { holder_id } = req.query;
  const banks = dataService.getBanks(holder_id);
  return res.json({ banks });
}

function postBank(req, res) {
  const entry = dataService.addBank(req.body);
  return res.status(201).json({ bank: entry });
}

function getPurchaseHistory(req, res) {
  const { user_id } = req.query;
  const purchases = dataService.getPurchaseHistory(user_id);
  return res.json({ purchases });
}

function postPurchaseHistory(req, res) {
  const entry = dataService.addPurchase(req.body);
  return res.status(201).json({ purchase: entry });
}

function getRewardHistory(req, res) {
  const { user_id } = req.query;
  const rewards = dataService.getRewardHistory(user_id);
  return res.json({ rewards });
}

function postRewardHistory(req, res) {
  const entry = dataService.addReward(req.body);
  return res.status(201).json({ reward: entry });
}

module.exports = {
  getUsers,
  getCryptos,
  getGoods,
  getCards,
  postCard,
  getBanks,
  postBank,
  getPurchaseHistory,
  postPurchaseHistory,
  getRewardHistory,
  postRewardHistory,
};
