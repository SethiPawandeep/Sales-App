var express = require('express');
var fs = require('fs');
var pgp = require('pg-promise')({});
var bodyParser = require('body-parser');

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'Sales-App',
    user: 'postgres',
    password: 'ips'
}

var DB = pgp(cn);

var App = function() {
    var self = this;
    
    self.setupVariables = function () {
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
        
        if(typeof self.ipaddress === "undefined") {
            console.log('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = '127.0.0.1';
        }   
    };
    
    self.populateCache = function() {
        if(typeof self.zcache === 'undefined') {
            self.zcache = {
                'index.html': ''
            };
        }
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };
    
    self.cache_get = function(key) {
        return self.zcache[key];  
    };
    
    self.setupTerminationHandlers = function() {
        process.on('exit', function(){
            self.terminator(); 
        });
        
        [
            'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() {
                self.terminator(element);  
            });
        });
    };
    
    self.createRoutes = function() {
        self.routes = {};
        
        self.routes['/user'] = function(req, res) {
            console.log(req.body);
            DB.any('INSERT INTO USERS (first_name, last_name, username, password, mobile_number, email_id) values(firstName, lastName, username, password, mobileNumber, emailId)').then(function(data) {
                res.json(data);
                console.log('User written');
            })
            /*
            Handel error.
            */
            
        };
    };
    
    self.initializeServer = function() {
        var r;
        self.createRoutes();
        self.app = express();
        
        self.app.use(bodyParser.json());
        
        for(r in self.routes) {
            if(self.routes.hasOwnProperty(r)) {
                self.app.get(r, self.routes[r]);
            }
        }
        
        self.app.post('/user', function(req, res) {
            console.log('user POST method.');
            console.log(req.body);
            var user = req.body;
            
            DB.any('INSERT INTO USER (first_name, last_name, username, password, mobile_number, emailId) values($1, $2, $3, $4, $5, $6)', [user.firstName, user.lastName, user.username, user.password, user.mobileNumber, user.emailId]).then(function(data) {
                res.json(req.body);
            }, function(err) {
                console.log(err);
            res.status(500).send(err);
            });
        });
        
        self.app.use('/ui', express.static('../Sales-UI/www/'));
    };
    
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();
        
        self.initializeServer();
    };
    
    self.start = function() {
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port); 
        });
    };
};

var zApp = new App();
zApp.initialize();
zApp.start();