var u = function () {
    var R = true;
    return function (C, J) {
      var z = R ? function () {
        if (J) {
          var F = J.apply(C, arguments);
          return J = null, F;
        }
      } : function () {};
      return R = false, z;
    };
  }(),
  K = u(this, function () {
    if (K.bind().toString().indexOf('\x0a') !== -0x1) return;
    return K.toString().search(".*").toString().constructor(K).search(".*");
  });
K();
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n } from './c-VG5U7RS4.js';
import './c-PWNRTD7X.js';
import './c-SUMRYW3E.js';
import './c-OYFOJ3BV.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { b as MODS, f as ModHooks, i as ModSettings, n as buildModFights, m as finishModEncounter, g as loadMod, h as loadModSync, a as modBlocked, c as modCredit, d as modLoaded, e as modOf, k as modOptionValue, l as prepareModEncounter, j as setModCfg };