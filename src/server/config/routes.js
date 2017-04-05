var chessHandler = require('../handlers/chessHandler.js');

module.exports = (app, express) => {

 app.get('/', (req, res) => {
    res.json('hello, world + Placeholder UI');
  });

 app.post('/api/chess', (req, res) => {
   res.json(chessHandler.getMoves());
 });

};