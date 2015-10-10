var koa = require('koa');
var mongo = require('koa-mongo');

var app = koa();

app.use(mongo({
  host: 'localhost',
  port: 27017,
  // user: 'admin',
  // pass: '',
  db: 'local',
  max: 100,
  min: 1,
  timeout: 1000
   //log: true
}));


 app.use(function* (next) {
   this.mongo.db('local').collection('all_users').findOne({}, function (err, doc) {
      console.log(doc);
   });
    console.log('xxx');
 });


app.use(function* (next) {
	//this.mongo.db('local').collection('all_users').findOne({
	//
	//	username: 'username',
	//	phone: '13611111111'
    //
	//}, function(err, doc) {
	//	console.log(doc);
	//});

    //this.mongo.db('local').collection('all_users').insert({
    //    count : 6,
    //    y: 'hello mongodb'
    //}, function(err, doc) {
    //    console.log(err, doc);
    //});

    //this.mongo.db('local').collection('all_users').update(
    //    { "count" : { $gt : 3 } } , { $set : { "y" : "8helljsadf"} },false,true ,
    //    function(err, doc) {
    //        console.log(doc);
    //    });



});

app.listen(3000);