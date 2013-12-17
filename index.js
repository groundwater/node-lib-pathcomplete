var glob = require('glob');
var chop = require('pathchop');

function complete(token, callback) {
  var info = chop(token);

  var wild = info.file + "*";
  glob(wild, {cwd: info.dir}, callback);
}

module.exports = complete;
