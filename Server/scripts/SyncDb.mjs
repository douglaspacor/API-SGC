import { Log } from '../../Api/models/Log';
import sequelizeConn from '../../Api/classes/sequelizeConn.mjs';

export function syncDataBase(force){
    let s = new sequelizeConn();

    let log = Log(s.Sequelize, s.sequelize);   

    s.sequelize.sync();
}