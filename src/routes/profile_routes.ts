import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: '[GET] profile' });
});

router.post('/', (req, res) => {
    res.json({ message: '[POST] profile' });
});

export default router;