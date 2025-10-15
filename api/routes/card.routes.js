import { Router } from 'express';
import { create, deleteById, getAll, getById, update } from '../controllers/card.controller.js';
import { validateCardCreation, validateCardUpdate } from '../middlewares/card.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';

const cardRouter = Router();

cardRouter.get('/', getAll);
cardRouter.get('/:id', validateId, getById);

cardRouter.post('/', validateCardCreation, create);
cardRouter.patch('/:id', validateId, validateCardUpdate, update);
cardRouter.delete('/:id', validateId, deleteById);

export { cardRouter };
