import { Router } from 'express';
import { ErrorModel } from '../models/error_model';
import { RoleRepository } from '../repositories/role_repository';

const router = Router()
const repository = new RoleRepository()

router.get('/', (req, res) => {
    const roles = repository.findAll()
    res.status(200).json(roles)
});

router.post('/', (req, res) => {
    const {name} = req.body
    if(!name) throw new ErrorModel(400, 'Bad Request')
    const role = repository.create({ name })
    res.status(201).json(role)
});

export default router;