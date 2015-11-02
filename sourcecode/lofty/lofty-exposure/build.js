var path = require('path');
var fs = require('fs');
var pkg;

module.exports = {
    'fmd-maker': {
        'resolve': function(relativePath) {
            pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'UTF-8'));
            return path.join('pkg/', pkg.name, pkg.version, relativePath);
        },
        'exclude': [
            // 'spm_modules/**/*.js'
        ]
    },
    'apm-converter': {}
}