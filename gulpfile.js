var path = require('path');
var pathvar = path.parse(__dirname);
var current_dir = pathvar.name;
console.log('current_dir -------',current_dir);
const SOLUTION_NAME = current_dir;


var dateFormat = {
  fmt : {
    "yyyy": function(date) { return date.getFullYear() + ''; },
    "MM": function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
    "dd": function(date) { return ('0' + date.getDate()).slice(-2); },
    "hh": function(date) { return ('0' + date.getHours()).slice(-2); },
    "mm": function(date) { return ('0' + date.getMinutes()).slice(-2); },
    "ss": function(date) { return ('0' + date.getSeconds()).slice(-2); }
  },
  format:function dateFormat (date, format) {
    var result = format;
    for (var key in this.fmt)
      result = result.replace(key, this.fmt[key](date));
    return result;
  }
};

var time_version = dateFormat.format(new Date(),'yyyyMMddhhmm');
console.log(time_version);


const TARGET = "../"+SOLUTION_NAME+"_"+time_version;
const TARGET_ANGULAR = TARGET + "/node_modules/@angular";

console.log(TARGET);

var gulp = require('gulp');

gulp.task('localbackup',function(){
	gulp
	.src(['./**','./.**','!./node_modules/**'])
	.pipe(gulp.dest(TARGET));
});


gulp.task('default',['localbackup']);