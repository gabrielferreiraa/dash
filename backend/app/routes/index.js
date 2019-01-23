import express from "express";
import userRoutes from "./user";

const router = express.Router();

router.use("/users", userRoutes);

export default router;
