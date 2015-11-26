module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		// SASS task
		sass: {
			options:{
				outputStyle: "nested",
				sourceMap: true
			},
			dist: {
				files: {
					"build/main.css": "sass/main.scss"
				}
			}
		},
		// Autoprefixer task
		autoprefixer: {
			dist:{
				options: {
					map: true // Create sourcemap
				},
				files:{
					"build/main.css": "build/main.css"
				}
			}
		},
		// Concatenation task
		concat: {
			dist: {
				files: {
					"build/main.js": [
						"js/main.js"
					]
				}
			}
		},
		// Watch task
		watch: {
			css: {
				files: "sass/**/*.scss",
				tasks: ["sass", "autoprefixer"]
			},
			js: {
				files: "js/**/*.js",
				tasks: ["concat"]
			}
		}
	});

	// Node dependencies
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-concat");

	// Run all tasks and keep watching when invoking grunt without args
	grunt.registerTask("default", ["concat", "sass", "autoprefixer", "watch"]);
};
