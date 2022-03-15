// jshint esversion:6

exports.getDate = function(){
const today = new Date();
const options = {
  day: "numeric",
  weekday: "long",
  month:"long"
};
  return today.toLocaleDateString("en-US", options);
};

exports.titleCase = function(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};
