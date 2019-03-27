const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  res.redirect('/');
}

// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Wes'; // passed down to the next function
//   if (req.name === 'Wes') {
//     throw Error('That is a stupid name'); // helps throw a stack trace for debugging
//   }

//   res.cookies('name', 'Wes is cool', { maxAge: 9000000 }); // sets cookies with cookieParser
//   next();
// }