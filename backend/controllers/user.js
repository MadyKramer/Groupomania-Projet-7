const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const database = require("../util/database");
const auth = require("../middlewares/auth");


exports.signup = (req, res, next) => {
  
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      database.query(
        "INSERT INTO users (`firstname`, `lastname`, `workstation`, `email`, `password`) VALUES (?, ?, ?, ?, ?)",
        [
          req.body.firstname,
          req.body.lastname,
          req.body.workstation,
          req.body.email,
          hash,
        ],
       (err, result, fields) => {
          if (err) {
            return res
              .status(400)
              .json({ message: "On dirait qu'il y a une erreur dans votre inscription 🤔" });
          } else {
            return res.status(201).json(result);
          }
        }
      );
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.login = (req, res, next) => {
  database.query(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    (err, result, fields) => {
      if (result[0] != undefined) {
        bcrypt
          .compare(req.body.password, result[0].password)
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ message:"On dirait que vos indentifiants sont incorrects 😟" });
            } else {
              res.status(200).json({
                token: jwt.sign(
                  {
                    userId: result[0].id,
                    username: result[0],
                    perm: result[0].hasright,
                  },
                  process.env.jwt,
                  {
                    expiresIn: "12h",
                  }
                ),
              });
            }
          })
          .catch((error) => res.status(500).json({ message:"On dirait que vos indentifiants sont incorrects 😟" }));
      } else {
        return res
          .status(404)
          .json({ message: "On dirait que vos indentifiants sont incorrects 😟" });
      }
    }
  );
};
