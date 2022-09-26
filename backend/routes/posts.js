const express = require("express");
const router = express.Router();


const postsCtrl = require("../controllers/posts");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config")

router.post("/", auth, multer, postsCtrl.create); 
router.put("/:post_id", auth, multer, postsCtrl.edit);
router.delete("/:post_id", auth, postsCtrl.delete);
router.get("/getAll", auth, postsCtrl.getAll);
router.post("/:post_id/like", auth, postsCtrl.like);
router.get("/:post_id/like", auth, postsCtrl.getLike);
router.put("/deletepic/:post_id", auth, postsCtrl.deletePicture);



module.exports = router;
