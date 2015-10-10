/**
 * Created by cyk on 14-6-28.
 */

var Mock = require("mockjs");

var  data = Mock.mock({

    /**
     * 生成一个大于等于 1、小于等于 100, 小数位数为1到10位的浮点数
     */
    'number1|1-100.1-10': 1,
    'number2|123.1-10': 1,
    'number3|123.3': 1,
    'number4|123.10': 1.123,

    'list|1-3': [{
      'id|+1' : 1,
      'name|+1': "abc"
    }],

    /**
     * 'name|min-max': 'value' 通过重复 'value' 生成一个字符串，重复次数大于等于 min，小于等于 max
     */
    'name|3-5': 'hello/'
});

console.log(JSON.stringify(data, null,2));