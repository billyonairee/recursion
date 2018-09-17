// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var res = [];

  if (obj === null || obj === undefined || typeof obj === 'boolean' || typeof obj === 'number') {
    return "" + obj;
  }

  //////// string

  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //////// Array

  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    else {
      for (var i = 0; i < obj.length; i++) {
        res.push(stringifyJSON(obj[i]));
      }
    }
    console.log('res: ', res)
    return '[' + res + ']';
  }

  ////////// object

  else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (key in obj) {
        if (typeof (obj[key]) === 'function') {
          return '{}';
        } else {
          var keyJSON = stringifyJSON(key);
          var valueJSON = stringifyJSON(obj[key]);
          // console.log(key)
          // console.log(valueJSON)
          res.push(keyJSON + ':' + valueJSON);

        }
      }
      console.log(res);
      return '{' + res + '}';
    }
  }
}

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = stringifyJSON;
}

console.log(stringifyJSON([1, 2, { 'a': 'banana', 'b': 3 }]));