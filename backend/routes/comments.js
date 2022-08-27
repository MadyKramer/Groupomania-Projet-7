const express = require("express");
const router = express.Router();

const commentsCtrl = require("../controllers/comments");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

router.put('/:post_id/comments/:comments_id', auth, commentsCtrl.edit);
router.post('/:post_id/comments', auth, commentsCtrl.create );
router.delete("/:post_id/comments/:comments_id", auth, commentsCtrl.delete);
router.get('/:post_id/comments/getAll', auth, commentsCtrl.getAll);

module.exports = router; 