const express = require('express');
const router = express.Router();
const gameController = require('../controller/game_controller');
router.get('/game/start', gameController.gameStart);

module.exports = router;