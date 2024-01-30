import { Sequelize } from "sequelize";
//créer et configurer une instance de .sequelize
//const sequelize = new Sequelize('database', 'username', 'password', {....


const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,  
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        //logging: false,
        define: {
            underscored: true,
        }
    }
);

export default sequelize;