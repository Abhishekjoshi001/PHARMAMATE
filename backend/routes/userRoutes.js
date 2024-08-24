import express from "express";
import auth from "../middleware/auth.js";
import { updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.put("/updateprofile", auth, updateProfile);

export default router;