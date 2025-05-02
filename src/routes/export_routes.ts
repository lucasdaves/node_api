import roleRoutes from "./role_routes";
import profileRoutes from "./profile_routes";
import userRoutes from "./user_routes";
import { Router } from "express";

const router = Router();

router.use("/roles", roleRoutes);
router.use("/profiles", profileRoutes);
router.use("/users", userRoutes);

export default router;
