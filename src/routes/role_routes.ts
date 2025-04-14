import { Router } from 'express';
import { ErrorModel } from '../models/error_model';
import { RoleController } from '../controllers/role/role_controller';

const router = Router()
const controller = new RoleController()

router.get('/', (req, res) => {
    controller.getAll(req, res)
});

router.post('/', (req, res) => {
    controller.create(req, res)
});

export default router;