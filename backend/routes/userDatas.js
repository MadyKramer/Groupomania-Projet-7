const express = require("express");
const router = express.Router();
const profilesCtrl = require("../controllers/profiles");

const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config")

router.get("/:user_id", auth, profilesCtrl.getProfile);
router.put("/:user_id", auth, multer, profilesCtrl.editProfile);



module.exports = router;