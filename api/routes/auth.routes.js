import { Router } from 'express';
import { register, login, getCurrentUserInfo } from '../controllers/auth.controller.js';
import { validateAuthField } from '../middlewares/register.middleware.js';
import { isAuthed } from '../middlewares/is-authed.middleware.js';

const authRouter = Router();

// ? les URLs sont préfixées avec /auth
authRouter.get('/me', isAuthed, getCurrentUserInfo);
authRouter.post('/register', validateAuthField, register);
authRouter.post('/login', validateAuthField, login);

export { authRouter };
