export default class dataBase{
    constructor(){
        this.name = process.env.DBNAME;
        this.host = process.env.DBHOST;
        this.port = process.env.DBPORT;
        this.user = process.env.DBUSER;
        this.password = process.env.DBUSERKEY;
    }
}