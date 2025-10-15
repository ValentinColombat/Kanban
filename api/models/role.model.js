import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize.client.js';

class Role extends Model {}

Role.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // ? defaut ou pas defaut
            defaultValue: 'member',
            unique: true,
        },
    },
    {
        sequelize: sequelize, // instance de connexion
        tableName: 'role',
    },
);

export { Role };
