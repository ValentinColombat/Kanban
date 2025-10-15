import { Router } from 'express';
import { getAll, getById, create, update, deleteById, getAllWithCardsAndTags } from '../controllers/list.controller.js';
import { validateListCreation, validateListUpdate } from '../middlewares/list.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';
import { xss } from 'express-xss-sanitizer';

const listRouter = Router();

listRouter.get('/', getAll);
// * /lists/expanded
listRouter.get('/expanded', getAllWithCardsAndTags);

listRouter.get('/:id', validateId, getById);
listRouter.post('/', validateListCreation, create);
listRouter.patch('/:id', xss(), validateId, validateListUpdate, update);
listRouter.delete('/:id', validateId, deleteById);

export { listRouter };
