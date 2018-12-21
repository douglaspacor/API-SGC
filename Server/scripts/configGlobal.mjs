import os from 'os';


export default function configGlobal() {
    let clusterCount = os.cpus().length || process.env.CLUSTER_COUNT;

    return {
        apiName: process.env.API,
        env: process.env.NODE_ENV || 'dev',
        debug: process.env.DEBUG || 'true',
        server: {
            host: process.env.HOST,
            port: process.env.PORT,
            clusterCount: clusterCount
        },
        security: {
            algorithm: 'aes192',
            type: 'hex',
            key: process.env.KEY
        },
        db: {
            dbHost: process.env.DBHOST,
            dbPort: process.env.DBPORT,
            dbName: process.env.DBNAME,
            dbUser: process.env.DBUSER,
            dbUserKey: process.env.DBUSERKEY,
            force: process.env.FORCE    
        }
    }
}



