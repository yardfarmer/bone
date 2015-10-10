/**
 * Created by cyk on 15-4-21.
 */

var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/tasks");

//console.dir(db);
var Schema = mongoose.Schema;
var Tasks = new Schema({
    project: String,
    description: String
});


mongoose.model('Task', Tasks);


// save
var Task = mongoose.model('Task');
var task = new Task();
task.project = 'LOrem';
task.description = "lorem"+ Math.random()*100;

//task.save(function(err) {
//    if( err ) throw err;
//    console.log('Task saved.');
//    //mongoose.disconnect();
//});



// find
Task.find({'project' : 'LOrem'}, function(err, tasks) {
   console.log('find ..... ', tasks.length);
   for (var i = 0; i < tasks.length; i++) {
       console.log('ID:' + tasks[i]._id);
       console.log(tasks[i].description);
       // remove item
       // tasks[i].remove();
   }
});

// update
Task.update(
    {_id: '553659eff5a844be0ea82a25'},
    {description:''},
    {multi: false},
    function(err, rows_updated) {
        if (err) throw err;
        console.log('Updated');
    }
);





