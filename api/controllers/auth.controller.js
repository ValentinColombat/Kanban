import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import { StatusCodes } from 'http-status-codes';

export async function register(req, res) {
    // ! il faut sanitizer username
    const { username, password } = req.body;

    try {
        const hash = await argon2.hash(password);
        const user = await User.create({ username: username, password: hash });
        // const user = await User.create({ username, password: hash });

        res.status(StatusCodes.CREATED).json({ id: user.id, username: user.username });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(StatusCodes.CONFLICT).json({ error: 'Username exists' });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

export async function login(req, res) {
    // ! il faut sanitizer username
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Pseudo ou mot de passe invalide' });
        }

        // * destructuring : on extrait password de user, et on le renomme hash car la constante password est déjà utilisé?
        //  const { password: hash } = user;
        const hash = user.password;
        // * la méthode de comparaison de argon
        const ok = await argon2.verify(hash, password);

        if (!ok) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Pseudo ou mot de passe invalide' });
        }

        // * Création du token
        // * Le premier argument est le payload : les données qu'on met dans le token.
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(StatusCodes.OK).json({ token });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(StatusCodes.CONFLICT).json({ error: 'Username exists' });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}
