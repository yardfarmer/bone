var exec = require('child_process').exec,
			child;

		child = exec('cd /Users/cyk/Documents/joy/project/olio/hg_a/ && hg log',
			function (error, stdout, stderr) {

				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			});
