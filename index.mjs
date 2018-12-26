import cluster from 'cluster';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();
import configGlobal from './Server/scripts/configGlobal';
global.config = configGlobal();
global.tools = { chalk }
import { syncDataBase as SyncDb } from './Server/scripts/SyncDb';

// if (global.config.env !== 'dev' && cluster.isMaster) {
//     console.log(`[Cluster]: Master ${process.pid} is running`);

//     for (let i = 0; i < global.config.clusterCount; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', worker => console.error(`[Cluster]: Worker ${worker.process.pid} died`))
// } else {
//     global.config.env === 'dev' && console.log('[Server]: Development mode enabled');
//     global.config.debug && console.log('[Server]: Debug mode enabled');
// }


SyncDb(global.config.db.force);

import app from './Server/app';

app.listen(global.config.server.port, () => {
    console.log(`Api running on: ${global.config.server.host}:${global.config.server.port}`);
});














