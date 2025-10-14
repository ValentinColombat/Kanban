import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize.client.js';

//
class User extends Model {}

//
User.init(
    // ? la méthode init attend deux objets
    // * le 1er objet est la définition de notre modèle
    {
        // VARCHAR  dont le nombre de caractères était compris entre 1 min et 255 max, le max est supérieur de nos jours
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [2],
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    // * le 2nd objet est la configuration du modèle (comment se connecter à la BDD, comment se nomme la table sur laquelle agit le modèle)
    {
        sequelize: sequelize,
        tableName: 'users',
    },
);
//
export { User };
