var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config = {
  user: 'amay-mishra',
  database: 'amay-mishra',
  host: 'db.imad.hasura-app.io',
  //path: '/database.php?pgsql=localhost%3A5432',
  port: '5432',
  password: process.env.DB_PASSWORD
};

// app.use(expres.static("public"));
// app.use('/ui',express.static(__dirname+'/ui'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);

app.get('/test-db', function(req,res) {
  //make a select request
    pool.query('SELECT * FROM articles',function(err,result){
       if (err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result.rows));
    }
    });
  //return a response
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
