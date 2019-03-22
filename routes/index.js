const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // const wes = { name: 'Wes', age: 100, cool: true };
  // console.log('Hey!!');
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  res.json(req.query);
  res.render('hello');
});

router.get('/reverse/:name', (req, res) => {
  // res.send('it works!');
  // res.send(req.params.name)
  const reversed = [...req.params.name].reverse().join('');
  res.send(reversed)
})

module.exports = router;
