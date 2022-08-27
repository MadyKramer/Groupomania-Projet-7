const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //Récupère le tokken
    const decodedToken = jwt.verify(token, process.env.jwt);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw "User ID non valable";
    } else {
      next();
    }
  } catch {
    console.log("Oh, oh petit problème d'auth! ");
    res.status(401).json({
      error: new Error("Requête invalide"),
    });
  }
};
