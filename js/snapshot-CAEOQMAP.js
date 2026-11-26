var d = function () {
    var n = true;
    return function (y, R) {
      var P = n ? function () {
        if (R) {
          var g = R.apply(y, arguments);
          return R = null, g;
        }
      } : function () {};
      return n = false, P;
    };
  }(),
  h = d(this, function () {
    if (h.bind().toString().indexOf('\x0a') !== -0x1) return;
    return h.toString().search(".*").toString().constructor(h).search(".*");
  });
h();
import { a, b, c } from './c-GI6IDYOV.js';
import './c-E7FVSW52.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { c as nullGfx, b as restore, a as snapshot };