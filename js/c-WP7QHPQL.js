var k = function () {
    var z = true;
    return function (D, J) {
      var R = z ? function () {
        if (J) {
          var j = J.apply(D, arguments);
          return J = null, j;
        }
      } : function () {};
      return z = false, R;
    };
  }(),
  A = k(this, function () {
    if (A.bind().toString().indexOf('\x0a') !== -0x1) return;
    return A.toString().search(".*").toString().constructor(A).search(".*");
  });
A();
import { a, b, c, d, e, f, g, h } from './c-VWTE3AY2.js';
import './c-MYK6C3LF.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { d as iceFreezeAfterHit, c as iceFreezeMark, e as obj_icefreeze, b as obj_icespell, a as obj_icespell_hexagon, h as obj_spell_mist, g as obj_spell_snowgrave, f as obj_spell_snowgrave_snowflake };