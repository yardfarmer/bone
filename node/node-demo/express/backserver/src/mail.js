/**
 * Created by cyk on 15/9/19.
 */

"use strict";

var PixlMail = require('pixl-mail');

var mail = new PixlMail('smtp.alibaba-inc.com', 465 );
//var mail = new PixlMail( '127.0.0.1' );
//var mail = new PixlMail();



var message =
        "To: yakun.cyk@alibaba-inc.com\n" +
        "From: yakun.cyk@alibaba-inc.com\n" +
        "Subject: NASA Budget\n" +
        "\n" +
        "<h1>Dear Mr. President,</h1>\n<p><b>Please</b> give NASA back their <i>money</i>.</p>\n";

mail.send( message, function(err) {
    if (err) console.log( "Mail Error: " + err );
} );