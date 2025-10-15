import { Role, User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import { StatusCodes } from 'http-status-codes';

export async function register(req, res) {
    // ! il faut sanitizer username
    const { username, password } = req.body;

    try {
        const hash = await argon2.hash(password);
        const memberRole = await Role.findOne({ where: { name: 'member' } });

        const user = await User.create({ username: username, password: hash, role_id: memberRole.id });
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
        const user = await User.findOne({
            where: {
                username: username,
            },
            include: 'role',
        });

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
        // * https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage : bonus : implémenter cet algo en JS. (il faudra convertir les caractères en nombre (ascci table)) https://www.asciitable.com/
        const token = jwt.sign(
            // ? le payload: ce sont les infos que contient le token
            {
                user_id: user.id,
                username: user.username,
                role: user.roleName,
            },

            // ? la SECRET est la clé de chiffrement des données
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            },
        );

        // * Ajout de l'user sur la réponse
        res.status(StatusCodes.OK).json({
            token,
            user: {
                id: user.id,
                role: user.role,
                username: user.username,
                created_at: user.created_at,
                updated_at: user.updated_at,
            },
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(StatusCodes.CONFLICT).json({ error: 'Username exists' });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}

export async function getCurrentUserInfo(req, res) {
    const userId = req.userId;

    // ? On précise que l'on ne veut pas récupérer le mot de passe
    const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
        include: 'role',
    });

    res.json(user);
}
