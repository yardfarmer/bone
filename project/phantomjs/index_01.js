var page = require('webpage').create();
page.open('http://1688.com/', function() {
    page.render('1688.png');
    phantom.exit();
});