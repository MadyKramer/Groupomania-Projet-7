const database = require("../util/database");
const misc = require("../util/functions");
const jwt = require("jsonwebtoken");


exports.getAll = (req, res, next) => {
  database.query(
    "SELECT comments.id,comments.commentcontent,comments.commentimg,comments.users_id,users.firstname,users.lastname,users.avatar from comments INNER JOIN users ON comments.users_id = users.id WHERE post_id=? AND comments.users_id",
    [req.params.post_id],
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({message: "Erreur dans la récupération des commentaires"});
      } else {
        return res.status(200).json(result);
      }
    }
  );
};

exports.create = (req, res, next) => {
  const formatDate = misc.formatDate();
 console.log(req.body.commentcontent);
  database.query(
    "INSERT INTO `comments` (`commentdate`, `users_id`, `post_id`, `commentcontent`) VALUES (?, ?, ?, ?)",
    [formatDate, req.userId, req.body.post_id, req.body.commentcontent],
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({message: "Le message n'a pas été correctement posté"});
      } else {
        return res.status(201).json(result);
      }
    }
  );
};

exports.edit = (req, res, next) => {
  
  
  const hasRight = misc.hasRight(req);
  database.query(
    "SELECT * FROM `comments` WHERE id=?",
    [req.params.comments_id],
    (err, result, fields) => {
      
      if (result[0].users_id === req.userId || hasRight === 1){
        
        database.query(
          "UPDATE `comments` SET commentcontent=? WHERE id=?",
          [req.body.commentcontent, req.params.comments_id],
          (err, result, fields) => {
            if (err) {
              return res.status(400).json({message: "Une erreur est survenue"});
            } else {
              return res.status(200).json({ message: "Commentaire modifié!✨" });
            }
          }
        );
      } else if (err) {
        return res.status(404).json({ message: "Commentaire introuvable" });
      } else {
        return res
          .status(403)
          .json({
            message: "Vous n'avez pas le droit de modifier ce contenu!",
          });
      }
    }
  );
};

exports.delete = (req, res, next) => {
    
    const hasRight = misc.hasRight(req)
    database.query(
        "SELECT * FROM `comments` WHERE id=?",
        [req.params.comments_id], (err, result, fields) => {
            if(result[0].users_id === req.userId || hasRight === 1){
              database.query(
                "DELETE FROM `comments` WHERE id=?", [req.params.comments_id], (err, result, fields) => {
                    if(err){
                        return res.status(400).json({message: "Le message n'a pas été supprimé! "})
                    }else{
                        return res.status(200).json({message: "Commentaire supprimé!✨"})
                    
                    }
                })
            }else if(err){
                res.status(404).json({message: "Il n'y a aucun commentaire ici!"})
            }else{
                res.status(403).json({message: "Il faut être admin pour supprimer les commentaires des autres 😉"})
                
            }
        })
}

