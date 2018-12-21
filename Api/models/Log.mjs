export function Log(Sequelize, sequelize) {
    let Log = sequelize.define('log', {
        id :{
            type: Sequelize.Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        api: Sequelize.Sequelize.STRING,
        url: { 
            type: Sequelize.Sequelize.STRING,
            allowNull: true,
            defaultValue: null 
        },
        metodo: { 
            type: Sequelize.Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null 
        },
        inicio: { 
            type: Sequelize.Sequelize.DATE,
            allowNull: true,
            defaultValue: null 
        },
        fim: { 
            type: Sequelize.Sequelize.DATE,
            allowNull: true,
            defaultValue: null 
        },
        body: { 
            type: Sequelize.Sequelize.STRING(1000),
            allowNull: true,
            defaultValue: null 
        },
        params: { 
            type: Sequelize.Sequelize.STRING(500),
            allowNull: true,
            defaultValue: null 
        },
        query: { 
            type: Sequelize.Sequelize.STRING(500),
            allowNull: true,
            defaultValue: null 
        },
        headers: { 
            type: Sequelize.Sequelize.STRING(1000),
            allowNull: true,
            defaultValue: null 
        },
        httpCode: { 
            type: Sequelize.Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null 
        },
        response: { 
            type: Sequelize.Sequelize.STRING,
            allowNull: true,
            defaultValue: null 
        },
        error: { 
            type: Sequelize.Sequelize.STRING,
            allowNull: true,
            defaultValue: null 
        },
        executionTime: { 
            type: Sequelize.Sequelize.STRING,
            allowNull: true,
            defaultValue: null 
        },
        userId: {
            type: Sequelize.Sequelize.BIGINT,
            allowNull: true,
        }
    }, {
        timestamps: false
    });

    return Log;
}