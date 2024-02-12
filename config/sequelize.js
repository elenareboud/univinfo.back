import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";
 //creer et configurer une instance de .sequelize
 //const sequelize = new Seuqlize('database', 'username', 'password', {})

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? {
            require: true,
            rejectUnauthorized: false
        } : false
    }
});


// const sequelize = new Sequelize(
//     process.env.DB_NAME, 
//     process.env.DB_USER,  
//     process.env.DB_PASSWORD, 
//     {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT,
//         logging: false,
//         define: {
//             underscored: true
//     }
// });

export default sequelize;