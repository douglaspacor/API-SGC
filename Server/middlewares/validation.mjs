import { decript } from '../scripts/cryptography';
import { validadeUrl } from '../scripts/freeUrl';

export async function tokenValidation(req, res, next){
    if(validadeUrl(req.url)){
        next();
    }else {
        if (typeof req.headers['Authorization'] === 'undefined'){
            return res.status(401).send('Token não informado');
        }
    
        let decriptedToken = await decript(req.headers['Authorization']);
    
        if(decriptedToken){
            req.identity = decriptedToken;
            next();
        }else{
            return res.status(401).send('Token inválido');
        }
    }

}