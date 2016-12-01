const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '583d9e11194488b27d0ef383'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('583d9e11194488b27d0ef383').then((todo) => {
  console.log(todo);
});
