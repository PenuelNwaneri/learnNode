const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  req.flash('', '');
  res.render('index');
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
  res.redirect(`/store/${store.slug}`);
}

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores });
}

// exports.myMiddleware = (req, res, next) => {
//   req.name = 'Wes'; // passed down to the next function
//   if (req.name === 'Wes') {
//     throw Error('That is a stupid name'); // helps throw a stack trace for debugging
//   }

//   res.cookies('name', 'Wes is cool', { maxAge: 9000000 }); // sets cookies with cookieParser
//   next();
// }