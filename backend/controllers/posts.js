const fs = require("fs");
const database = require("../util/database");
const misc = require("../util/functions");
const env = require("dotenv").config();

exports.getAll = (req, res, next) => {
  //A modif plus tard pour éviter de manipuler les données sensibles
  database.query("SELECT * FROM `post`", (err, results, fields) => {
    if (err) {
      return res.status(404).json(err.sqlMessage);
    } else {
      return res.status(200).json(results);
    }
  });
};

exports.create = (req, res, next) => {
  const formatDate = misc.formatDate();
  console.log(req.body.userId);
  //Si image reçue
  if (req.file !== undefined) {
    const imgUrl = `./images/${req.file.filename}`;
    // & Si aucun contenu texte mais une image
    if (req.body.content === undefined) {
      database.query(
        "INSERT INTO `post` (`postdate`, `postimg`, `users_id`) VALUES (?, ?, ?)",
        [formatDate, imgUrl, req.body.userId],
        (err, results, fields) => {
          if (err) {
            return res.status(400).json(err.sqlMessage);
          } else {
            return res.status(201).json({ message: "Publié!" });
          }
        }
      );
      //Si contenu texte et image
    } else {
      database.query(
        "INSERT INTO `post`(`postdate`, `postimg`, `content`, `users_id`) VALUES (?, ?, ?, ?)",
        [formatDate, imgUrl, req.body.content, req.body.userId],
        (err, results, fields) => {
          if (err) {
            return res.status(400).json({ message: "Une erreur est survenue" });
          } else {
            return res.status(201).json(results);
          }
        }
      );
    }

    //Si pas image mais contenu
  } else {
    database.query(
      "INSERT INTO `post` (`postdate`, `content`, `users_id`) VALUES (?, ?, ?)",
      [formatDate, req.body.content, req.body.userId],

      (err, results, fields) => {
        if (err) {
          return res.status(400).json(err.sqlMessage);
        } else {
          return res.status(201).json({ message: "results" });
        }
      }
    );
  }
};

exports.delete = (req, res, next) => {
  console.log("ca rentre dans la fonction");
  const userId = misc.getUserId(req);
  const hasRight = misc.hasRight(req);
  database.query(
    //On selectionne le bon post
    "SELECT * FROM `post` WHERE id=?",
    [req.params.post_id],
    (err, result, fields) => {
      //Si aucun post a delete
      if (result.length === 0) {
        return res
          .status(500)
          .json({ message: "La publication n'existe plus" });
      } else {
        console.log(result[0].users_Id === userId);
        //Si quelque chose a delete
        if (result[0].image !== null) {
          //Et qu'il y a une imag
          const fileName = result[0].postimg.split("images/")[1];
          //Si la personne a les droits de delete

          if (result[0].users_id === userId || hasRight === 1) {
            database.query(
              "DELETE FROM `post` WHERE id=?",
              [req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  //Si il y a une erreur
                  return res.status(400).json({ message: sqlMessage });
                } else {
                  //On supprime aussi l'image de la BDD
                  if (fs.existsSync(`images/${fileName}`)) {
                    fs.unlinkSync(`images/${fileName}`);
                  }
                  return res.status(204).json();
                }
              }
            );
          } else if (err) {
            return res.status(400).json({ message: err.sqlMessage });
          } else {
            return res.status(403).json({ message: "Requête non autorisée" });
          }
        } else {
          if (result[0].users_Id === userId || hasRight === 1) {
            database.query(
              "DELETE FROM `post` WHERE id=?",
              [req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  return res.status(400).json({ message: sqlMessage });
                } else {
                  return res.status(200).json(result);
                }
              }
            );
          } else if (err) {
            return res.status(400).json({ message: err.sqlMessage });
          } else {
            return res.status(403).json({ message: "Requête non autorisée" });
          }
        }
      }
    }
  );
};

exports.edit = (req, res, next) => {
  //Pb à régler
  
  const userId = misc.getUserId(req);
  const hasRight = misc.hasRight(req);
  database.query(
    "SELECT * FROM `post` WHERE id=?",
    [req.params.post_id],
    (err, result, fields) => {
      //Recup dans le 2e if pour scope
      let fileName;
      console.log(result);
      if (result.lenght > 0) {
        if (result[0].image != undefined) {
          console.log("J'ai repéré ton image");
          fileName = result[0].image.split("images/")[1];
        }
        if (result[0].users_Id === userId || hasRight === 1) {
          //const host = `${req.protocol}://${req.get("host")}`;
          if (req.file !== undefined) {
            const imgUrl = `images/${req.file.fileName}`;
            if (fs.existsSync(`images/${fileName}`)) {
              fs.unlinkSync(`images/${fileName}`);
            }
            database.query(
              "UPDATE `post` SET `image`, `content` WHERE id=?",
              [imgUrl, req.body.content, req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  return res.status(400).json({ message: err.sqlMessage });
                } else {
                  return res.status(200).json(result);
                }
              }
            );
          } else {
            console.log("On a vu que t'avais pas d'image! ");
            database.query(
              "UPDATE `post` SET content=? WHERE id=?",
              [req.body.content, req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  return res.status(400).json({ message: err.sqlMessage });
                } else {
                  return res.status(200).json(result);
                }
              }
            );
          }
        }
      } else if (err) {
        return res.status(400).json({ message: err.sqlMessage });
      } else {
        console.log(result.length);
        return res
          .status(200)
          .json({ message: "Cette publication n'existe plus" });
      }
    }
  );
};

exports.like = (req, res, next) => { //1 pour like 0 pour dislike

  const userId = misc.getUserId(req);
  database.query(
    "SELECT * FROM `likeposts` WHERE users_id=? AND post_id=?",
    [userId, req.params.post_id],
    (err, result, fields) => {
      if (result.length === 0) { 
        console.log(result)
        //Si le user n'a pas voté
        if (req.body.value === 1) {
          console.log(req.body)
          //Et qu'il vote
          database.query(
            "INSERT INTO `likeposts`(users_id, post_id, value)VALUES(?, ?, ?)",
            [userId, req.params.post_id, req.body.value],
            (err, result, fields) => {
              if (err) {
                return res.status(401).json({ message: err.sqlMessage });
              } else {
                console.log("C'est okayyyyyyy")
                return res.status(200).json(result);
              }
            }
          );
        }
      } else if (req.body.value === 0){ 
          database.query(
            "DELETE FROM `likeposts` WHERE users_id=? AND post_id=?", [userId, req.params.post_id],
            (err, result, fields) => {
              if (err) {
                return res.status(400).json({ message: err.sqlMessage });
              } else {
                return res
                  .status(200)
                  .json({ message: "Vous n'aimez plus cette publication." });
              }
            }
          );
      }else if(err){
        return res.status(400).json({message: err.sqlMessage})
      }else{
        return res.status(403).json({message: "Oups!"})
      }
    }
  );
};
