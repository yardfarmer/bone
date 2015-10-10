var async = require('async');
var fs = require('fs');

// (process: 进程),change the working directory
process.chdir('recipes');

var concatenation = '';
var dirContents = fs.readdirSync('.'); // Array


// 不保证按顺序执行, 如果要求按顺序, 使用 `eachSeries`
// no guarantee that
// the iterator functions will complete in order
async.each(dirContents, function(file, callback) {

    // Perform operation on file here.
    console.log('Processing file ' + file);

    if( file.length > 32 ) {
        console.log('This file name is too long');
        //callback('File name too long');
    } else {
        //console.log('File processed');
        /**
         * The iterator is called with an item from the list,
         * and a callback for when it has finished.
         * If the iterator passes an error to its callback,
         * the main callback (for the each function) is immediately called with the error.
         */

        // 在所有的任务都执行结束后才调用, 但是如果出来问题, 会立马调用
        callback();
        //callback('wo....');
    }
}, function(err){
    if( err ) {
        // One of the iterations produced an error.
        // All processing will now stop.
        console.log('A file failed to process');
    } else {
        console.log('All files have been processed successfully');
    }
});