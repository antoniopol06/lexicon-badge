'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'badge.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-badge',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
