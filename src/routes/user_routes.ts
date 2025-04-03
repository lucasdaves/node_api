import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: '[GET] user' });
});

router.post('/', (req, res) => {
    res.json({ message: '[POST] user' });
});

export default router;