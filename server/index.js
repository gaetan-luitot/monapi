// Extern Imports :
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {readdirSync} = require('fs');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

// Self Imports :
//const moduleFolder = './modules';
const controllers = readdirSync('./controller', { withFileTypes: true }).filter(dirent => !dirent.isDirectory()).map(dirent => dirent.name);
const config = require('./config/config');

// Version :
const version = 0;
console.log("Current Version => " + version + ".");

// Atris :
const SESSION_SECRET = "73309450e8d8763693f7492458e798ac8c0b4a62b13c9a348bf60bc46962bad4";


// App :
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use(
    session({
        key: 'user_sid',
        name: "qid",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
            },
        store: new MySQLStore(config.dbConfig)
    })
);

// Loading controllers :
/** @Todo : output the loading progress only if debug == true **/
// console.log('Loading controllers : ');
for (var i = 0; i < controllers.length; ++i) {
    const controller = controllers[i].split('.js')[0];
    const routeName = controller.split('Controller')[0].toLowerCase();
    // console.log(' * ', routeName);
    if (routeName.length > 0) {
      app.use('/' + routeName, require('./controller/' + controller));
    }

}

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
