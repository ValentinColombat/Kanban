import 'dotenv/config';
// *
import cors from 'cors';
import express from 'express';
import { xss } from 'express-xss-sanitizer';
import { errorHandler, notFound } from './middlewares/common.middleware.js';
import { cardRouter } from './routes/card.routes.js';
import { listRouter } from './routes/list.routes.js';
import { tagRouter } from './routes/tag.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

// ? l'étoile permet de dire qu'on accepte les requêtes depuis toutes les sources
// app.use(cors());
// app.use(cors('*'));
// ? l'option origin permet de restreindre les sites autorisés à faire des requêtes sur notre serveur
app.use(
    cors({
        // * On autorise seulement ces deux sites à faire des requêtes sur notre api
        origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    }),
);

app.use(express.json());

app.use(xss());

app.use('/lists', listRouter);
app.use('/cards', cardRouter);
app.use('/tags', tagRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.info(`🚀 Server running at http://localhost:${PORT}`);
});
