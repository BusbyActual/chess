

module.exports = (app, express) => {

 app.get('/', (req, res) => {
    res.json('hello, world + Placeholder UI');
  });

 app.post('/api/chess'), (req,res) => {
    //API entry point for chess request.
    res.json('Do chess things here');
 }

};