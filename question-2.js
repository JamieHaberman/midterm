// Fill out the `filterUsersByState` function so that it returns a
// filtered list of users by the `state` variable passed in. Use the array `filter()` method.
// Ignore the `module.exports` at the bottom. You can run this file by using
// `nodemon question-2.js` or `node question-2.js` and seeing your results in the terminal.
// Alternatively, you can try out your implementation somewhere else and copy your
// solution back into this file.


function filterUsersByState(users, state) {
  var filterthem = users.filter(function(theuser){
    if (theuser.address.state == state)
    return theuser;
  });
  return filterthem;
};



var users = [
  {
    name: 'David',
    address: {
      state: 'CA'
    }
  },
  {
    name: 'Jeff',
    address: {
      state: 'TX'
    }
  },
  {
    name: 'Sandra',
    address: {
      state: 'NY'
    }
  },
  {
    name: 'Nevil',
    address: {
      state: 'CA'
    }
  }
];

var usersInCA = filterUsersByState(users, 'CA');
console.log(usersInCA);
module.exports = usersInCA;
