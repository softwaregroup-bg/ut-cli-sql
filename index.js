#! /usr/bin/env node

'use strict';

var SqlPort = require('ut-port-sql');
var config = require('rc')('ut-cli-sql', {});
console.log('Reading config from file: ' + config.config);
var sql = new SqlPort();
sql.config = config;

sql.logFactory = {
    createLog: function() {
        return {
            error: function(error) {
                console.error(error);
            }
        };
    }
};

sql.init();

console.log('Connecting to database ' + config.db.server);
sql.connect().then(() => {
    console.log('Schemas are inserted');
    sql.stop();
    process.exit(0);
});
