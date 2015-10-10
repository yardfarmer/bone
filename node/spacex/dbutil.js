/**
 * Created by cyk on 14-6-25.
 */

var mysql = require("mysql");

// 详细参数见 https://www.npmjs.org/package/mysql
var connection = mysql.createConnection(
    {
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : '19890801',
        database : 'hibnatedb'
        //charset  : ''
    }
);

connection.connect();

connection.query('select * from notes',function(err, rows, fields){
    "use strict";
    if( err ){
        console.log(err);
        throw err;
    }

    for(var r in rows){
        console.log(rows[r]);
    }

    for(var f in fields){
       console.log(fields[f].name);
    }
    // console.log(fields.name);
    // console.log("The solution is :"+ rows[0].solution);
})

// connection.end();
// or
connection.end(function () {
    "use strict";
    console.log("close successful");
});