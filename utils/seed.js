const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {getRandomName, getRandomThoughts} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(9);


  for (let i = 0; i < 10; i++) {
    const username = getRandomName();
    const email = getRandomEmail();

    users.push({
     username,
     email, 
    });
  }

  function getRandomEmail() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var i=0; i<15; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return (string + '@gmail.com');
  }


  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
