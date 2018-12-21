export default async function validateParams(rules, params) {
    let result = {
        success: true,
        messages: []
    };

    let hasProp;

    for (var propRules in rules) {
        hasProp = false;
        for (var propParams in params) {
            if (JSON.stringify(propParams) === JSON.stringify(propRules)) {
                hasProp = true;

                if (typeof rules[propRules].type != 'undefined') {
                    switch (rules[propRules].type) {
                        case 'string':
                            if (!isString(params[propParams])) {
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} deve ser obrigatóriamente do tipo string.`);
                            };
                            break;
                        case 'number':
                            if (!isNumber(params[propParams])) {
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} deve ser obrigatóriamente do tipo number.`);
                            };
                            break;
                        case 'boolean':
                            if (!isBoolean(params[propParams])) {
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} deve ser obrigatóriamente do tipo boleano.`);
                            };
                            break;
                        case 'Date':
                            if (!isDate(params[propParams])) {
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} deve ser obrigatóriamente do tipo date.`);
                            };
                        default:
                            break;
                    }

                    if (typeof rules[propRules].max != 'undefined') {
                        switch (rules[propRules].type) {
                            case 'STRING':                            
                            case 'string':
                                if (!isString(params[propParams])) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} em formato inválido, validação não realizada.`);
                                    break;
                                }

                                if (rules[propRules].max < params[propParams].length) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} não deve ser maior que ${rules[propRules].max}`);
                                };
                                break;
                            case 'NUMBER':                                
                            case 'number':
                                if (!isNumber(params[propParams])) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} em formato inválido, validação não realizada.`);
                                    break;
                                }

                                if (rules[propRules].max < params[propParams]) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} não deve ser maio que ${rules[propRules].max}`);
                                };
                                break;
                            default:
                                break;
                        }
                    }

                    if (typeof rules[propRules].min != 'undefined') {
                        switch (rules[propRules].type) {
                            case 'STRING':
                            case 'string':
                                if (!isString(params[propParams])) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} em formato inválido, validação não realizada.`);
                                    break;
                                }

                                if (rules[propRules].min > params[propParams].length) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} deve ser maior que ${rules[propRules].min}`);
                                };

                                break;
                            case 'NUMBER':
                            case 'number':
                                if (!isNumber(params[propParams])) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} em formato inválido, validação não realizada.`);
                                    break;
                                }

                                if (rules[propRules].min > params[propParams]) {
                                    result.success = false;
                                    result.messages.push(`${JSON.stringify(propRules)} deve ser maior que ${rules[propRules].min}`);
                                };
                                break;
                            default:
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} min somente em tipo string e number`);
                                break;
                        }
                    }

                    if (typeof rules[propRules].allowOnly != 'undefined') {
                        if (rules[propRules].allowOnly.length > 0 ) {
                            if (rules[propRules].allowOnly.indexOf(params[propParams]) < 0){
                                result.success = false;
                                result.messages.push(`${JSON.stringify(propRules)} aceita somente os valores seguinte: ${JSON.stringify(rules[propRules].allowOnly)}`);
                            }
                        }
                    }

                }else {
                    result.success = false;
                    result.messages.push(`propriedade type obrigatória.`);                    
                }
            }
        }

        if (!hasProp){
            result.success = false;
            result.messages.push(`${JSON.stringify(propRules)} propriedade obrigatória inexistente.`);            
        }
    }

    return result;

}

function isString(parameter) {
    if (typeof parameter === 'string') {
        return true;
    } else {
        return false;
    }
}

function isNumber(parameter) {
    if (typeof parameter === 'number') {
        return true;
    } else {
        return false;
    }
}

function isBoolean(parameter) {
    if (typeof parameter === 'boolean') {
        return true;
    } else {
        return false;
    }
}

function isDate(parameter) {
    if (parameter instanceof Date) {
        return true;
    } else {
        return false;
    }
}