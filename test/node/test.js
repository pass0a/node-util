//var util = require('../../');
var util = require('../../');
var tmp = new Uint32Array(100);
console.log(util.format({ jjj: tmp, abc: 'sdfsdf' }));
console.log(util.format(Buffer.from(tmp)));
