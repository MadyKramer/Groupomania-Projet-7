const multer = require("multer");

//Créé une map permettant de récuperer l'extension de fichier d'une image
const MIME_TYPES = {
  "image/jpg" : "jpg",
  "image/jpeg": "jpg",
  "image/png" : "png",
  "image/gif" : "gif",
  "image/bmp" : "bmp",
  "image/tiff": "tif",
  "image/tiff": "tiff",
  "image/webp": "webp"
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {    // Créé un nom de fichier unique 
    const name = file.originalname.split(".")[0]; // Change le format du nom
    const extension = MIME_TYPES[file.mimetype]; // récupère l'extension
    callback(null, name + Date.now() + "." + extension); // renvoie le nouveau nom en ajoutant un timestamp et l'extension
  },
});

module.exports = multer({ storage }).single("image"); //appelle la méthode multer en indiquant que c'est un seul fichier image