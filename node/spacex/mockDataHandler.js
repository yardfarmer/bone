var Mock = require("mockjs");
var url = require("url");

function doGet(request, response) {
	
	// console.log(request.url);
	// console.log(url.parse(request.url,true).query);;
	// console.log(request.headers);
	// console.log(request.method);

	var parms = url.parse(request.url,true).query;
	console.log(parms);

	// mock seed
	var props; 

	if(parms.foo) {
	  props = {
		'list|5': [{
		  'id|+1' : 1,
		  'foo|+1': "@abc"
		}]
  	  };

	} else if (parms.bar) {
	  props = {
		'list|5': [{
		  'id|+1' : 1,
		  'bar|+1': "@abc"
		}]
  	  };
	}

	var  data = Mock.mock( props ||
	{
		'list|5': 
		[{
		  'id|+1' : 1,
		  'auser|+1': "@abc"
		}],
		'string1|1-5': '★',
		// 'number1|+1': 100,
		// 'number2|1-100': 100,
		// 'number3|1-100.1-10': 1,
		// 'number4|123.1-10': 1,
		// 'number5|123.3': 1,
		// 'number6|123.10': 1.123,
		'boolean2|1-2': true,
		'object1|2-4': {
			'110000': '北京市',
			'120000': '天津市',
			'130000': '河北省',
			'140000': '山西省'
		}
		// ,
		// 'object2|2': {
		// 	'310000': '上海市',
		// 	'320000': '江苏省',
		// 	'330000': '浙江省',
		// 	'340000': '安徽省'
		// },
		// 'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
		// 'array2|1-2': ['Mock.js'],
	});
	// 允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(JSON.stringify(data));
    response.end();
}

exports.doGet = doGet;
