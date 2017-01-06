var express = require('express');
var fs = require('fs');
var pgp = require('pg-promise')({});
var bodyParser = require('body-parser');

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'ips'
}

var DB = pgp(cn);

var App = function () {
    "use strict";

    var self = this;

    self.setupVariables = function () {
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port = process.env.OPENSHIFT_NODEJS_PORT || 8081;

        if (typeof self.ipaddress === "undefined") {
            console.log('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = '127.0.0.1';
        }
    };

    self.populateCache = function () {
        if (typeof self.zcache === 'undefined') {
            self.zcache = {
                'index.html': ''
            };
        }
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };

    self.cache_get = function (key) {
        return self.zcache[key];
    };

    self.terminator = function (sig) {
        if (typeof sig === "string") {
            console.log('%s Received %s - terminating app ...', Date(Date.now()), sig);
            pgp.end();
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()));
    };

    self.setupTerminationHandlers = function () {
        process.on('exit', function () {
            self.terminator();
        });

        [
            'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function (element, index, array) {
            process.on(element, function () {
                self.terminator(element);
            });
        });
    };

    self.createRoutes = function () {
        self.routes = {};

        self.routes['/'] = function (req, res) {
            res.setHeader('Content-type', 'text/html');
            res.send(self.cache_get('index.html'));
        };

        self.routes['/user'] = function (req, res) {
            console.log(req.body);
            var user = req.body;
            console.log('\n\n' + user + '\n\n');

            DB.any('INSERT INTO USER (first_name, last_name, username, password, mobile_number, emailId) values($1, $2, $3, $4, $5, $6)', [user.firstName, user.lastName, user.username, user.password, user.mobileNumber, user.emailId]).then(function (data) {
                res.json(data);
                console.log('User written');
            }).catch(function (e) {
                console.log(e);
                console.log('\n\nERROR\n\n');
            })

        };
        
        self.routes['/login'] = function(req, res) {
          console.log(req.body);
            
            DB.any().then(function(data) {
                
            }).catch(function(e) {
                
            })
        };
        
        self.routes['/events'] = function(req, res) {
            console.log(req.body);
            
            DB.any('SELECT * FROM EVENTS').then(function(data) {
                console.log('Events retrieved');
                res.json(data);
            }).catch(function(err) {
                console.log(err);
                console.log('\n\nERROR\n\n');
            })
        };
        
        self.routes['create'] = function(req, res) {
            console.log(req.body);  
            var event = req.body;
            
            DB.any('INSERT INTO EVENTS (event_name, event_description, amount, comission, username) values($1, $2 $3, $4, $5)', [event.eventName, event.eventDescription, event.amount, event.comission, event.username]).then(function(data) {
                console.log('Event written into DB');
                
            }).catch(function(err) {
                console.log('Error');
            })
        };
    };

    self.initializeServer = function () {
        var r;
        self.createRoutes();
        self.app = express();

        self.app.use(bodyParser.json());

        for (r in self.routes) {
            if (self.routes.hasOwnProperty(r)) {
                self.app.get(r, self.routes[r]);
            }
        }

        self.app.post('/user', function (req, res) {
            console.log('user POST method.');
            console.log(req.body);
            var user = req.body;
            DB.any('INSERT INTO USER (first_name, last_name, username, password, mobile_number, emailId) values($1, $2, $3, $4, $5, $6)', [user.firstName, user.lastName, user.username, user.password, user.mobileNumber, user.emailId]).then(function (data) {
                res.json(req.body);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            });
        });
        
        self.app.post('/create', function(req, res) {
            console.log('POST event');
            var event = req.body;
            DB.any('INSERT INTO EVENTS (event_name, event_descriptin, amount, comission, username values($1, $2, $3, $4, $5)', [event.eventName, event.eventDescription, event.amount, event.comission, event.username]).then(function(data) {
                
            }, function(err) {
                
            })
        });

        self.app.use('/ui', express.static('../Sales-UI/www/'));
    };

    self.initialize = function () {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        self.initializeServer();
    };

    self.start = function () {
        self.app.listen(self.port, self.ipaddress, function () {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
        });
    };
};

var zApp = new App();
zApp.initialize();
zApp.start();