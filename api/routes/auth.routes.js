import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { validateAuthField } from '../middlewares/register.middleware.js';

const authRouter = Router();

authRouter.post('/register', validateAuthField, register);
authRouter.post('/login', validateAuthField, login);

export { authRouter };
