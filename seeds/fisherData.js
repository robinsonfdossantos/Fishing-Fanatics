const { Fisher } = require('../models');

const fisherData = [
  {
    username: 'Robinson',
    email: 'robinson@email.com',
    password: '1234', 
    location: 'Adelaide'
  },
  {
    username: 'Iggy',
    email: 'iggy@email.com',
    password: '1234', 
    location: 'Brisbane'
  },
  {
    username: 'Kana',
    email: 'kana@email.com',
    password: '1234', 
    location: 'Adelaide'
  }
];



const seedFisher = () => Fisher.bulkCreate(fisherData);

module.exports = seedFisher;
