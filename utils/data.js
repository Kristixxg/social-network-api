const names = [
    'username 1',
    'username 2',
    'username 3',
    'username 4',
    'username 5',
    'username 6',
    'username 7',
    'username 8',
    'username 9',
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
}

const getThoughtReaction = (int) => {
 if( int === 1 ) {
     return getRandomArrItem(reactions);
 } 
 let results = [];
 for (let i=0; i < int; i++) {
     results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomArrItem(names),
     })
 }
 return results;
}

module.exports = {getRandomName, getRandomThoughts, getThoughtReaction}