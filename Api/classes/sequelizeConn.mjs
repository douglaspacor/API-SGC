import dataBase from './dataBase';
import Sequelize from 'sequelize';
export default class sequelizeConn extends dataBase {
    constructor() {
        super();
        this.Sequelize = Sequelize;
        this.sequelize = new Sequelize(this.name, this.user, this.password, {
            host: this.host,
            dialect: 'postgres',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            logging: false
        });        
    }
}