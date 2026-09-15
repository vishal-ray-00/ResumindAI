import { Router } from "express";
import { loginUser, getCurrentUser} from "../controllers/auth.controller.js";
import {createUser} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const route = Router();

route.post("/login", loginUser);
route.post("/register", createUser);
route.get("/me", authMiddleware, getCurrentUser);

export default route;