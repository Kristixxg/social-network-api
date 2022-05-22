const names = [
    'testusername 1',
    'testusername 2',
    'testusername 3',
    'testusername 4',
    'testusername 5',
    'testusername 6',
    'testusername 7',
    'testusername 8',
    'testusername 9',
    'testusername 10',
    'testusername 11',
    'testusername 12',
    'testusername 13',
    'testusername 14',
    'testusername 15',
    'testusername 16',
    'testusername 17',
    'testusername 18',
    'testusername 19',
  ];

  const thoughts = [  
  'This is Thought 1',
  'This is Thought 2',
  'This is Thought 3',
  'This is Thought 4',
  'This is Thought 5',
  'This is Thought 6',
  'This is Thought 7',
  'This is Thought 8',
  'This is Thought 9',
  'This is Thought 10',
  'This is Thought 11',
  'This is Thought 12',
  'This is Thought 13',
  'This is Thought 14',
  'This is Thought 15',
  'This is Thought 16',
  'This is Thought 17',
  'This is Thought 18',
  'This is Thought 19',
];

const reactions = [  
    'This is reaction 1',
    'This is reaction 2',
    'This is reaction 3',
    'This is reaction 4',
    'This is reaction 5',
    'This is reaction 6',
    'This is reaction 7',
    'This is reaction 8',
    'This is reaction 9',
    'This is reaction 10',
    'This is reaction 11',
    'This is reaction 12',
    'This is reaction 13',
    'This is reaction 14',
    'This is reaction 15',
    'This is reaction 16',
    'This is reaction 17',
    'This is reaction 18',
    'This is reaction 19',
  ];


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

//Gets a random thought
const getRandomThoughts = (int) => {
    let results = [];
    for (let i=0; i<int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomArrItem(names),
            reactions: [...getThoughtReaction(3)],
        })
    }
    return results;
};

const getThoughtReaction = (int) => {
 if( int === 1 ) {
     return getRandomArrItem(reactions);
 } 
 let results = [];
 for (let i=0; i < int; i++) {
     results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomName(),
     })
 }
 return results;
}

module.exports = {getRandomName, getRandomThoughts}