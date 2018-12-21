import express from 'express';
let router = express.Router();

//import route file
import { pingRoutes } from '../Api/routes/pingRoute';

//especify url to route
router.use('/ping', pingRoutes);

export default router;