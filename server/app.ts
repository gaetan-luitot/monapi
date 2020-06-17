// Extern Imports :
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {readdirSync} = require('fs');
import {DatabaseConfig} from './config/DatabaseConfig';

// Self Imports :
//const moduleFolder = './modules';
const files = readdirSync('./controller', { withFileTypes: true });// .filter(dirent => !dirent.isDirectory()).map(dirent => dirent.name);
let controllers: string[] = [];
for (let i = 0; i < files.length; ++i) {
    if (!files[i].isDirectory()) {
        controllers.push(files[i].name);
    }
}


// Version & Port :
const version = 0;
const port = process.env.PORT || 4000;
console.log('Current Version => ' + version + '.');

// Atris :
const SESSION_SECRET = '73309450e8d8763693f7492458e798ac8c0b4a62b13c9a348bf60bc46962bad4';


// App :
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Set Database
DatabaseConfig.setIConfig({
    host: 'localhost',
    port: 3306,
    user: 'monapi_user',
    password: 'fd6ed2f62ded1c334a383aab63d243e36fe46dccef1c1f26a3775cd16854e159',
    database : 'monapibdd',
});

// Loading controllers :
/** @Todo : output the loading progress only if debug == true **/
console.log('Loading controllers : ');
for (var i = 0; i < controllers.length; ++i) {
    const controller = controllers[i].split('.ts')[0];
    const routeName = controller.split('Controller')[0].toLowerCase();
    console.log(' * ', routeName);
    if (routeName.length > 0) {
      app.use('/' + routeName, require('./controller/' + controller));
    }

}

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
