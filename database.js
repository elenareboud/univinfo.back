import { Sequelize } from "sequelize";
//créer et configurer une instance de .sequelize
//const sequelize = new Sequelize('database', 'username', 'password', {....


const sequelize = new Sequelize(
    'univinfo', //bdd
    'root',  //id pour accès à la bdd
    '', //mdp
    {
    host: 'localhost', 
    port: 5432,
    dialect: 'postgres', //nom de driver pour que le sequelize réagisse sur la bdd
    logging: false,
    define: {
        underscored: true,//convention snake_case
    }
});

export default sequelize;