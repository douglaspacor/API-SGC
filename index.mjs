import cluster from 'cluster';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();
import configGlobal from './Server/scripts/configGlobal';
global.config = configGlobal();
global.tools = { chalk }
import { syncDataBase as SyncDb }  from './Server/scripts/SyncDb';

if (global.config.env !== 'dev' && cluster.isMaster){
    console.log(`[Cluster]: Master ${ process.pid } is running`);
    for (let i = 0; i < global.config.clusterCount; i++) { cluster.fork() }
}

SyncDb(global.config.db.force);

import app from './Server/app.mjs';

app.listen(global.config.server.port, () => {
    console.log(`Api running on: ${ global.config.server.host }:${ global.config.server.port }`);
});
