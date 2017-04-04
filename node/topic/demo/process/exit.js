/**
 * Created by cyk on 15-1-17.
 */



// There is no way to prevent the exiting of the event loop at this point,
// and once all exit listeners have finished running the process will exit.
process.on('exit',function(code){
    setTimeout(function(){
        console.log('this will not run');
    },0);
    console.log('About to exit with code,',code);
});