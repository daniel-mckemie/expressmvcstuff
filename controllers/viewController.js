module.exports = {

  notFound(err, req, res, next) {
    console.error(err);
    res.sendStatus(404);
  },

  showJSON(req, res) {
    res.json(res.locals);
  },

  handleSave(req, res) {
    res.redirect('.');
  },

  showChooseColors(req, res) {
    debugger;
    res.render('ChooseColors');
  },

};
