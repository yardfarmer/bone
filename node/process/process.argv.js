/**
 * Created by cyk on 15-1-17.
 */

/**
 *
 *	 args, 通过 shell 输入的参数信息, 自己的参数, 从第三位开始
 *	 第一个值执行程序的地址, 第二个是执行程序的地址
 */
// console.log(process.argv);  

/**
 *  process.env 可以获得是 shell 中 evn 的环境信息
 *
 */
// process.env; 

// process.pid, 当前进程号




process.argv.forEach(function(val, index, array) {
	console.log('===============');
	console.log(index + ':' + val);

});