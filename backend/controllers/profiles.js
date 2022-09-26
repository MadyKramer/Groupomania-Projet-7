const database = require("../util/database");
const env = require("dotenv").config();
const fs = require("fs");
const jwt = require("jsonwebtoken");

//Controller prêt si on ajoute une page profil
exports.getProfile = (req, res, next) => {
  console.log(req.params.user_id)
  database.query(
    "SELECT users.firstname, users.lastname, users.workstation, users.avatar FROM `users` WHERE id=?",
    [req.user_id],
    (err, result, fields) => {
      if (err) {
        return res.status(404).json({ message: "Utilisateur introuvable!" });
      } else {
        return res.status(200).json(result);
        
      }
    }
  );
};

exports.editProfile = (req, res, next) => {
  console.log(req.userId)
  database.query(
  "SELECT * FROM `users` WHERE users_id=?",
  [req.userId],
  (err, result, fields) => {
    console.log(result)
    if (req.file != undefined) {
 
      const profilePicture = `images/${req.file.filename}`;
        database.query(
          "UPDATE users SET avatar=? WHERE id=?",
          [profilePicture, req.userId],
          (err, result, fields) => {
            if (err) {
              return res
                .status(400)
                .json({ message: "Une erreur est survenue" });
            } else {
              if (
                profilePicture &&
                profilePicture !== "images/defaultpicture.jpg"
              ) {
                // if (fs.existsSync(profilePicture)) {
                //   fs.unlinkSync(profilePicture);
                // }
              }
              return res
                .status(200)
                .json({ message: "Photo de profil mise à jour" });
            }
          }
        );
      } else if (err) {
        res
          .status(400)
          .json({ message: "Cela ne s'est pas passé comme prévu!" });
      } else {
        res
          .status(403)
          .json({
            message: "Vous n'avez pas le droit d'effectuer cette action",
          });
      }
    }
  )
};