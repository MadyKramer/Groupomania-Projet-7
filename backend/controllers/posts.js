const fs = require("fs");
const database = require("../util/database");
const misc = require("../util/functions");
const env = require("dotenv").config();

exports.getAll = (req, res, next) => {

  database.query(
"SELECT post.id,post.content,post.postdate,post.postimg,post.users_id,users.firstname,users.lastname,users.workstation,users.avatar from post INNER JOIN users ON post.users_id = users.id",
    (err, results, fields) => {
      if (err) {
        return res.status(404).json({ message: "Une erreur est survenue" });
      } else {
        return res.status(200).json(results);
      }
    }
  );
};


exports.create = (req, res, next) => {
  console.log(req.body.content)
 
  const formatDate = misc.formatDate();

  if (req.file == undefined && req.body.content == ""){
    return res.status(400).json({message: "Veuillez ne pas envoyer de message vide."})
  }else{
    const imgUrl = req.file == undefined ? null : `./images/${req.file.filename}`;
    const postcontent = req.body.content == undefined ? "" : req.body.content;
    database.query(
    "INSERT INTO `post` (`postdate`, `content`, `users_id`, `postimg`) VALUES (?, ?, ?, ?)",
    [formatDate, postcontent, req.userId, imgUrl],
    (err, results, fields) => {
      if (err) {
        console.log(err)
        return res.status(400).json({ message: "Une erreur est survenue" });
      } else {
        return res.status(201).json({ message: "results" });
      }
    })
  }
}

exports.delete = (req, res, next) => {
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
        if (result[0].image !== undefined) {
          //Et qu'il y a une image

          const fileName = result[0].postimg.split("images/")[1];
          //Si la personne a les droits de delete

          if (result[0].users_id === req.userId || hasRight === 1) {
            database.query(
              "DELETE FROM `post` WHERE id=?",
              [req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  //Si il y a une erreur
                  return res
                    .status(400)
                    .json({ message: "Une erreur est survenue" });
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
            return res.status(400).json({ message: "Une erreur est survenue" });
          } else {
            return res.status(403).json({ message: "Requête non autorisée" });
          }
        } else {
          if (result[0].users_id === req.userId || hasRight === 1) {
            database.query(
              "DELETE FROM `post` WHERE id=?",
              [req.params.post_id],
              (err, result, fields) => {
                if (err) {
                  return res
                    .status(400)
                    .json({ message: "Une erreur est survenue" });
                } else {
                  return res.status(200).json(result);
                }
              }
            );
          } else if (err) {
            return res.status(400).json({ message: "Une erreur est survenue" });
          } else {
            return res.status(403).json({ message: "Requête non autorisée" });
          }
        }
      }
    }
  );
};


exports.edit = (req, res, next) => {
 
  const hasRights = misc.hasRight(req);
  database.query(
     "SELECT * FROM post WHERE id=?",
     [req.params.post_id],
    (err, results, fields) => {
        let filename;
        if (results.length > 0) {
           if (results[0].image != undefined) {
              filename = results[0].image.split("images/")[1];
           }
           if (results[0].users_id === req.userId || hasRights === 1) {
          
              if (req.file !== undefined) {
                 const imgUrl = `images/${req.file.filename}`;
                 if (fs.existsSync(`images/${filename}`)) {
                    fs.unlinkSync(`images/${filename}`);
                 }
                 database.query(
                    "UPDATE `post` SET postimg=?, content=? WHERE id=?",
                    [
                      
                       imgUrl,
                       req.body.content,
                       req.params.post_id,
                    ],
                    (err, results, fields) => {
                       if (err) {
                          return res
                             .status(400)
                             .json({ message: err.sqlMessage });
                       } else {
                          return res.status(200).json(results);
                       }
                    }
                 );
              } else if (req.file !== undefined) {
                 const imgUrl = `images/${req.file.filename}`;
                 database.query(
                    "UPDATE `post` SET postimg=?, content=? WHERE id=?",
                    [
                       imgUrl,
                       req.body.content,
                       req.params.post_id,
                    ],
                    (err, results, fields) => {
                       if (err) {
                          return res
                             .status(400)
                             .json({ message: err.sqlMessage });
                       } else {
                          return res.status(200).json(results);
                       }
                    }
                 );
              } else {
                 database.query(
                    "UPDATE `post` SET content=? WHERE id=?",
                    [
                  
                       req.body.content,
                       req.params.post_id,
                    ],
                    (err, results, fields) => {
                       if (err) {
                          return res
                             .status(400)
                             .json({ message: err.sqlMessage });
                       } else {
                          return res.status(200).json(results);
                       }
                    }
                 );
              }
           }
        } else if (err) {
           return res.status(400).json({ message: err.sqlMessage });
        } else {
           return res
              .status(403)
              .json({ message: "Cette publication n'existe plus" });
        }
     }
  );
};


exports.like = (req, res, next) => {
  //1 pour like 0 pour dislike

  database.query(
    "SELECT likeposts.value FROM `likeposts` WHERE likeposts.users_id=? AND likeposts.post_id=?",
    [req.userId, req.params.post_id],
    (err, result, fields) => {
      if (result.length === 0) { //Si le user n'a pas voté
        console.log(result);
        if (req.body.value === 1) { //Et qu'il vote
          console.log(req.body);
          database.query(
            "INSERT INTO `likeposts`(users_id, post_id, value)VALUES(?, ?, ?)",
            [req.userId, req.params.post_id, req.body.value],
            (err, result, fields) => {
              if (err) {
                return res
                  .status(401)
                  .json({ message: "Une erreur est survenue" });
              } else {
             
                return res.status(200).json({ message: "Vous aimez la publication"});
              }
            }
          );
        }
      } else if (req.body.value === 0) {
        database.query(
          "DELETE FROM `likeposts` WHERE users_id=? AND post_id=?",
          [req.userId, req.params.post_id],
          (err, result, fields) => {
            if (err) {
              return res
                .status(400)
                .json({ message: "Une erreur est survenue" });
            } else {
              return res
                .status(200)
                .json({ message: "Vous n'aimez plus cette publication." });
            }
          }
        );
      } else if (err) {
        return res.status(400).json({ message: "Une erreur est survenue" });
      } else {
        return res.status(403).json({ message: "Oups!" });
      }
    }
  );
};

exports.getLike = (req, res, next) => {
  database.query(
    "SELECT likeposts.value FROM `likeposts` WHERE likeposts.post_id=?",
    [req.params.post_id],
    (err, results, fields) => {
      if (err) {
        return res.status(404).json({ message: "Une erreur est survenue" });
      } else {
        return res.status(200).json(results);
      }
    }
  )
}