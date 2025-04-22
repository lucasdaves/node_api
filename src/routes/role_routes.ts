import { Router } from 'express';
import { roleController } from '../controllers/role/role_export'

const router = Router()

router.get('/', (req, res) => {
    roleController.getAll(req, res)
});

router.post('/', (req, res) => {
    roleController.create(req, res)
});

export default router;