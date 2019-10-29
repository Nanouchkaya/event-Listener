const jwt = require('jsonwebtoken');

module.exports = {
  validateToken: (req, res, next) => {
    let result;
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const options = {
        expiresIn: '2d',
      };
      try {
        result = jwt.verify(token, process.env.APP_KEY, options);
        req.decoded = result;

        next();
      } catch (err) {
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Erreur d'authentification. Token manquant.`,
        status: 401
      };
      res.status(401).send(result);
    }
  }
};
