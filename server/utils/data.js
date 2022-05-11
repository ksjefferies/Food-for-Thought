const users = [
  {
    email: 'aaron@gmail.com',
    username: 'AwesomeAaron',
    password: 'password1'
  },
  {
    email: 'betty@gmail.com',
    username: 'BettyBoop',
    password: 'password2'
  },
  {
    email: 'carey@gmail.com',
    username: 'CrazyCarey',
    password: 'password3'
  },
  {
    email: 'Dan@gmail.com',
    username: 'DangerDan',
    password: 'password4'
  }  
];

const comments = [
  {
    comment: 'Wow this is a cool recipe',
    userID: '627bd55ffe67165114662d26',
    recipeID: ''
  },
  {
    comment: 'Tasted and approved',
    userID: '627bd55ffe67165114662d27',
    recipeID: ''
  }
];


// Export the functions for use in seed.js
module.exports = { users, comments };
