import express from 'express';
let router = express.Router();

import pingController from '../src/controller/pingController';
const controller = new pingController();

router.get('/test', async (req, res, next) => {
    await controller.getPing(req, res);
    next();
});

export const pingRoutes = router;