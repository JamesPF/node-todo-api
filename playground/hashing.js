const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (error, salt) => {
//   bcrypt.hash(password, salt, (error, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$cjUyJlIfGPSR7O1K6wBXOuQBZroZTNI8z1ET3ypyBLWAXhtuhrFlW';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
