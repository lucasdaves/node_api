import roleRoutes from "./role_routes";
import { Router } from "express";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../swagger.json";

const router = Router();

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/roles", roleRoutes);

export default router;
