/**
 * Created by yakuncyk on 16/1/23.
 */

try {
    setTimeout(function () {
        // 当 Node 遇到错误想要报告时,我们早已不在那个栈上了。
        throw Error('self error');
    }, 100);
} catch (e) {
    console.log('catch it!');
}