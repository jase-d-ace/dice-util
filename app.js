const { rollDice } = require('./roll');
const { rollStatLine, rollTime } = require('./rollStats');
const { D_20, D_4, D_6, D_8, D_10, D_12, STAT_GENERATION_LOOP, ADVANTAGE_DISADVANTAGE } = require('./constants');

// roll character stats
rollTime(STAT_GENERATION_LOOP, rollStatLine, D_6);

// roll at (dis)advantage
rollTime(ADVANTAGE_DISADVANTAGE, rollDice, D_20);

//roll a single die and record results
rollDice(D_20);
