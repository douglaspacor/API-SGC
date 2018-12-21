export function validadeUrl(url){
    const permited = ['/api/ping/test'];
    return permited.indexOf(url) > -1 ? true : false;
}