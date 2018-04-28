var mysql = require('mysql');


//Put your mysql configuration settings - user, password, database and port
function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'fandango.coiprk9rsjrx.us-west-1.rds.amazonaws.com',
	    user     : 'test',
	    password : 'pass',
	    database : 'fandango',
	    port	 : 3306
	});
	return connection;
}

/*
//Connection pool
function getConnection(){
	var connection = mysql.createPool({
			connectionLimit : 150,
		  host     : 'localhost',
	    user     : 'root',
	    password : 'root',
	    database : 'freelancer',
	    port	 : 3306
	});
	return connection;
}
var connection = getConnection(); */

function runQuery(callback,sqlQuery){

	console.log("\nSQL Query::"+sqlQuery);

	var connection=getConnection();
	//connection.query(sqlQuery, function(err, rows, fields) {
		connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else
		{	// return err or result
			//console.log("DB Results:",rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}

exports.runQuery=runQuery;
