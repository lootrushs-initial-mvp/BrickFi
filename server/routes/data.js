const express = require('express');
const router = express.Router();
const controller = require('../controllers/dataController');

router.get('/users', controller.getUsers);

router.get('/cryptos', controller.getCryptos);

router.get('/goods', controller.getGoods);

router.get('/cards', controller.getCards);

router.post('/cards', controller.postCard);

router.get('/banks', controller.getBanks);

router.post('/banks', controller.postBank);

router.get('/purchase_history', controller.getPurchaseHistory);

router.get('/reward_history', controller.getRewardHistory);

router.post('/purchase_history', controller.postPurchaseHistory);

router.post('/reward_history', controller.postRewardHistory);

module.exports = router;
