import { Router } from 'express';
import { RoleModel } from '../models/role_model';
import { ErrorModel } from '../models/error_model';
import { v4 as uuid} from 'uuid'

const router = Router()

const entities: RoleModel[] = []

router.get('/', (req, res) => {
    res.status(200).json(entities);
});

router.post('/', (req, res) => {
    const {name} = req.body

    if(!name) throw new ErrorModel(400, 'Bad Request')

    const role = new RoleModel(
        uuid(),
        name,
        Date()
    )

    entities.push(role)
    
    res.status(201).json(role)
});

export default router;