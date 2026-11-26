var P = function () {
    var S = true;
    return function (h, f) {
      var t = S ? function () {
        if (f) {
          var m = f.apply(h, arguments);
          return f = null, m;
        }
      } : function () {};
      return S = false, t;
    };
  }(),
  y = P(this, function () {
    if (y.bind().toString().indexOf('\x0a') !== -0x1) return;
    return y.toString().search(".*").toString().constructor(y).search(".*");
  });
y();
import { d as X, e as Y, f as s } from './c-WSZI3RLB.js';
import './c-NNTXHBME.js';
import './c-OYFOJ3BV.js';
import './c-MYK6C3LF.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { s as COLLISIONS, X as HAND, Y as HAND_IN_ENDSTEP };