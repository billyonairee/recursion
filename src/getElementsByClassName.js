// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var res = [];
  var findClass = function (body) {
    if (body.classList && body.classList.contains(className)) {
      res.push(body);
    }
    if(body.hasChildNodes()){
      for(var i = 0; i<body.childNodes.length; i++){
        findClass(body.childNodes[i]);
      }
    }
  }
  findClass(body)
  return res;
};

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = getElementsByClassName;
}