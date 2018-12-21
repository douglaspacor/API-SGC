import crypto from 'crypto';

export async function cript(value, obj = false) {
    const cipher = crypto.createCipher(global.config.security.algorithm, global.config.security.key);
    let criptContent = obj ? JSON.stringify(value) : value; 
    let encripted = cipher.update(criptContent, 'utf8', global.config.security.type);
    encripted += cipher.final(global.config.security.type);
    return encripted;
}

export async function decript(value, obj = false) {
    const decipher = crypto.createCipher(global.config.security.algorithm, global.config.security.key);
    let decripted = decipher.update(value, global.config.security.type, 'utf8');
    decript += decipher.final('utf8');
    return obj ? JSON.parse(decript) : decript;
}