module.exports = {

  isLoggedIn(req, res, next) {
    if (req.session.loggedin) {
      next(); 
    } else {
      res.redirect("/login"); 
    }
  },

  isNotLoggedIn(req, res, next) {
    if (!req.session.loggedin) {
      next(); 
    } else {
      res.redirect("/"); 
    }
  },




};
