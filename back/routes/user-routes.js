import express from "express";
import { getAllUser, signup } from "../controllers/user-controller.js";
const user_router = express.Router();
user_router.get("/", getAllUser);

user_router.post("/signup", signup);
export default user_router;
