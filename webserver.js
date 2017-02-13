module.exports = function(app) {
  app.get('/get1', function(req, res) {
    res.json({ resp: 'response for get1' });
  });

  app.get('/get2', function(req, res) {
    res.json({ resp: 'response for get2' });
  });

  app.get('/get3', function(req, res) {
    res.json({ resp: 'response for get3' });
  });
};
