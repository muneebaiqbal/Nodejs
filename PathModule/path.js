const path = require("path");

// console.log(path.dirname('E:/Nodejs/PathModule/path.js'));
// console.log(path.extname('E:/Nodejs/PathModule/path.js'));
console.log(path.basename('E:/Nodejs/PathModule/path.js'));

const myPath = path.parse('E:/Nodejs/PathModule/path.js');
// console.log(myPath.name);
// console.log(myPath.ext);
console.log(myPath.root);

