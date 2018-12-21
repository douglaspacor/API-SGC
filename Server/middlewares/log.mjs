import { Log } from '../../Api/models/Log.mjs';
import  sequelizeConn  from '../../Api/classes/sequelizeConn';

export function logInit(req, res, next) {
    req.log = {
        apiName: global.config.apiName,
        url: req.url,
        method: req.method,
        startTime: new Date(),
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    };

    next();
}

export async function logSave(req, res, next) {
    let c = global.tools.chalk;
    req.log = {
        ...req.log,
        endTime: new Date(),
        httpCode: res.statusCode,
        response: res.response,
        error: res.error
    };

    req.log.executionTime = (req.log.endTime.getTime() - req.log.startTime.getTime()) + 'ms';

    let method;
    switch (req.log.httpCode) {
        case 400:
            method = c.yellow(req.log.httpCode);
            break;
        case 500:
            method = c.red(req.log.httpCode);
            break;

        default:
            method = c.green(req.log.httpCode);
            break;
    }

    if (process.env.NODE_ENV == 'dev') {
        console.info(`Url: ${c.yellow(req.log.url)} | Method: ${c.green(req.log.method)} | Status: ${method} | time: ${c.inverse(req.log.executionTime)}`);
    }

    let sConn = new sequelizeConn();

    let log = Log(sConn.Sequelize, sConn.sequelize);

    log.create({
        api: req.log.apiName,
        url: req.log.url,
        metodo: req.log.method,
        inicio: req.log.startTime,
        fim: req.log.endTime,
        body: JSON.stringify(req.log.body),
        params: JSON.stringify(req.log.params),
        query: JSON.stringify(req.log.query),
        headers: JSON.stringify(req.log.headers),
        httpCode: req.log.httpCode,
        response: JSON.stringify(req.log.response),
        executionTime: req.log.executionTime
    });

    next();
}