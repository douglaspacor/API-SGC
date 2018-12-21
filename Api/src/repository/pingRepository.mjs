import baseRepository from '../../classes/baseRepository';
export default class pingRepository extends baseRepository {
    constructor(){
        super();
    }

    async ping(){
        return true;
    }
}