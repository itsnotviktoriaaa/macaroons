// 'use strict';
//
//
// module.exports = function (grunt) {
//     grunt.initConfig({
//         less: {                              // Task
//             dist: {                            // Target
//                 options: {                       // Target options
//                     style: 'expanded'
//                 },
//                 files: {                         // Dictionary of files
//                     'src/all.css': 'css/styles.less'
//                 }
//             }
//         },
//         cssmin : {
//             target : {
//                 src : ["src/all.css"],
//                 dest : "src/all.min.css"
//             }
//         },
//         clean: ['src/all.css'],
//         watch: {
//             options: {
//                 livereload: true,
//             },
//             css: {
//                 files: ['css/*.less'],
//                 tasks: ['watch'],
//             },
//         },
//     });
//
//
//     grunt.loadNpmTasks('grunt-contrib-less');
//     grunt.loadNpmTasks('grunt-contrib-cssmin');
//     grunt.loadNpmTasks('grunt-contrib-clean');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//
//     grunt.registerInitTask('default', ['less', 'cssmin', 'clean', 'watch']);
// }

