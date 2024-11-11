import express from "express";
import { createUser, getAllUsers } from "../controllers/user.js";
import { upload } from "../config/multer.js";

const router = express.Router();

router.post("/createuser", upload.single("profile"), createUser);
router.get("/getallusers", getAllUsers);

export default router;
