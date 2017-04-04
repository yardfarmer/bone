/**
 * Created by yakuncyk on 16/2/4.
 */
var Glob = require('glob');

var pattern = "**/[source]/../[cg]";

console.log(pattern);

var mg = new Glob(pattern, {mark: true, sync: true});

console.log(mg);

console.log("after");