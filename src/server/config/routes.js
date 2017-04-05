var chessHandler = require('../handlers/chessHandler.js');
console.log(chessHandler)
module.exports = (app, express) => {

 app.get('/', (req, res) => {
    res.json('hello, world + Placeholder UI');
  });

 app.post('/api/chess', (req, res) => {
  console.log(req.body);
   res.json(chessHandler.getMoves());
 });

};