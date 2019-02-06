import express from "express";
import userController from "../controllers/user";

const router = express.Router();

router.get("/", userController.all);
router.post("/", userController.add);
router.put("/:userId", userController.update);

export default router;
