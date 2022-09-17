const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts");
const profilesRoutes = require("./routes/userDatas");
const commentRoutes = require("./routes/comments");
const database = require("./util/database.js");
const mysql = require ('mysql2')


const app = express();



app.use((req, res, next) => {

  //console.log('app');
  //on indique que les ressources peuvent être partagées depuis n'importe quelle origine
  res.setHeader("Access-Control-Allow-Origin", "*");
  //on indique les entêtes qui seront utilisées après la pré-vérification cross-origin afin de donner l'autorisation
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  //on indique les méthodes autorisées pour les requêtes HTTP
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/api/auth", userRoutes);
app.use("/api/profiles", profilesRoutes);
app.use("/api/posts", commentRoutes);
app.use("/api/posts", postsRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));


module.exports = app;
