exports.myMiddleware = (req, res, next) => {
  req.name = 'Wes'; // passed down to the next function
  if (req.name === 'Wes') {
    throw Error('That is a stupid name'); // helps throw a stack trace for debugging
  }

  res.cookies('name', 'Wes is cool', { maxAge: 9000000 }); // sets cookies with cookieParser
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name); // can access the local middleware
  res.render('index');
}