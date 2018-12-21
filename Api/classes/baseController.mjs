export default class baseController {
    constructor() {}

    async meta(status) {
        return {
            host: global.config.host,
            data: new Date(),
            status
        }
    }    

    async notFound(msg, res) {
        let returnObject = {
            meta: await this.meta(203),
            message: msg ? msg : null
        }

        res.status(returnObject.meta.status).send(returnObject);
    }

    async success(cont, msg, res) {
        let returnObject = {
            meta: await this.meta(200),
            content: cont ? cont : null,
            message: msg ? msg : null
        }

        res.status(returnObject.meta.status).send(returnObject);
    }

    async validationError(msg, res) {
        let returnObject = {
            meta: await this.meta(406),
            message: msg ? msg : null
        }

        res.status(returnObject.meta.status).send(returnObject);
    }    
}