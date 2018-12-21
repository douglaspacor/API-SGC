import baseController from "../../classes/baseController.mjs";
import pingRepository from '../repository/pingRepository.mjs';
import validationParams from '../../scripts/validateParams.mjs';
import { paramsRoles } from '../validation/pingParamsRules.mjs';

export default class pingController extends baseController {
    constructor(){
        super();
        this.pingRepository = new pingRepository();
    }

    async getPing(req, res) {
        let params = {
            nome: 'val1',
            name: 'vwwww'
        }

        let validationResponse = await validationParams(paramsRoles, params);

        if (validationResponse.success){
            await this.pingRepository.ping();
            await this.success(null, 'Pong', res);
        }else{
            await this.validationError(validationResponse, res);
        }
    }
}