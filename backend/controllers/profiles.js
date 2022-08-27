const misc = require("../util/functions");
const database = require("../util/database");
const env = require("dotenv").config();
const fs = require("fs");
const jwt = require("jsonwebtoken");

exports.getProfile = (req, res, next) => {
  database.query(
    "SELECT users.firstname, users.lastname, users.workstation, users.avatar FROM `users` WHERE id=?",
    [req.params.user_id],
    (err, result, fields) => {
        if(err){
          
            return res.status(404).json({message: "Utilisateur introuvable!"})
            
        }else{
            return res.status(200).json(result)
        }
    }
  );
};
