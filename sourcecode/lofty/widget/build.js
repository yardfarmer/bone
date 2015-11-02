var path = require('path');
var pkg = require('./package.json');

module.exports = {
    'fmd-maker': {
        'resolve': function(relativePath) {
            return path.join('pkg/', pkg.name, pkg.version, relativePath);
        },
        'exclude': [
            // 'spm_modules/**/*.js'
        ]
    },
    'apm-converter': {}
}