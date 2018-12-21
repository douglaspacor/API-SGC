const paramsRoles = {
    name: {
        type: 'string',
        min: 2,
        max: 10
    },
    nome    : {
        type: 'string',
        min: 1,
        max: 10,
        allowOnly: ['val1', 'val2']
    }    
}

export { paramsRoles };