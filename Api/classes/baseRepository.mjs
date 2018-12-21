import sequelizeConn from './sequelizeConn';
export default class baseRepository extends sequelizeConn{
    constructor(){
        super();        
    }

    async getTransaction(){
        return await this.sequelize.transaction();
    }    
}