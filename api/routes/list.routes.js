import { Router } from 'express';
import { getAll, getById, create, update, deleteById, getAllWithCardsAndTags } from '../controllers/list.controller.js';
import { validateListCreation, validateListUpdate } from '../middlewares/list.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';
import { xss } from 'express-xss-sanitizer';
import { isAuthed } from '../middlewares/is-authed.middleware.js';
import { isAdmin } from '../middlewares/is-admin.middleware.js';

const listRouter = Router();

listRouter.get('/', getAll);
// * /lists/expanded
listRouter.get('/expanded', getAllWithCardsAndTags);

listRouter.get('/:id', validateId, getById);
listRouter.post('/', isAuthed, isAdmin, validateListCreation, create);
listRouter.patch('/:id', isAuthed, isAdmin, xss(), validateId, validateListUpdate, update);
listRouter.delete('/:id', isAuthed, isAdmin, validateId, deleteById);

// ? Bonus : trouver la syntxe condensée qui permet de ne mentionner qu'une fois les middlewares sur les routes qui intéressent

export { listRouter };
