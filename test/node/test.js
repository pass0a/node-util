//var util = require('../../');
var util = require('../../');
var tmp = new Uint32Array(100);
console.log(util.format({ jjj: tmp, abc: 'sdfsdf' }));
console.log(util.format(Buffer.from(tmp)));
console.log(util.format('%d' + 'ddd', 1524));
console.log(util.format('%c' + 'ddd', 1524));
console.log(new Uint8Array([1,2,3]));
