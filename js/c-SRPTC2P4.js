var U = function () {
    var oz = true;
    return function (op, ob) {
      var oJ = oz ? function () {
        if (ob) {
          var oZ = ob.apply(op, arguments);
          return ob = null, oZ;
        }
      } : function () {};
      return oz = false, oJ;
    };
  }(),
  V = U(this, function () {
    if (V.bind().toString().indexOf('\x0a') !== -0x1) return;
    return V.toString().search(".*").toString().constructor(V).search(".*");
  });
V();
import { A as P, B as Z, D as Q, E as Y, F as T, G as X, H as N, I as L, J as R, K as o0, M as o1, N as o2, O as o3, P as o4 } from './c-QFDZPUX2.js';
import { a as o5 } from './c-DTW63MWW.js';
import { f, g as o6, i as o7 } from './c-3ELH3LBH.js';
import { d as o8, n as o9 } from './c-MYK6C3LF.js';
import { C as oo, F as oS, G as od, H as oW, I as oM, J as oC, M as oF, N as oO, O as oU, Q as oB, R as or, S as oa, T as oV, V as oc, W as of } from './c-ZQQWH6UG.js';
import { c as om, l as oP } from './c-XSSGDLV7.js';
var oI = {};
om(oI, {
  'scr_attackphase': () => X,
  'scr_battletext': () => f,
  'scr_battletext_default': () => o6,
  'scr_bullet_inherit': () => o5,
  'scr_charcan': () => Z,
  'scr_damage': () => oa,
  'scr_damage_all': () => oV,
  'scr_damage_check': () => of,
  'scr_damage_enemy': () => oc,
  'scr_dark_marker': () => o8,
  'scr_dead': () => oM,
  'scr_endcombat': () => R,
  'scr_endturn': () => T,
  'scr_enemyblcon': () => o7,
  'scr_heal': () => oO,
  'scr_healall': () => oU,
  'scr_healallitemspell': () => o3,
  'scr_healitemspell': () => o2,
  'scr_iteminfo_all': () => oo,
  'scr_mercyadd': () => oF,
  'scr_mnendturn': () => N,
  'scr_monsterpop': () => oW,
  'scr_moveheart': () => o9,
  'scr_nexthero': () => Q,
  'scr_prevhero': () => Y,
  'scr_randomtarget': () => oB,
  'scr_retarget': () => P,
  'scr_revive': () => oC,
  'scr_spell': () => o4,
  'scr_spellconsumeb': () => o0,
  'scr_spellinfo_all': () => oS,
  'scr_spelltext': () => o1,
  'scr_targetall': () => or,
  'scr_tensionheal': () => od,
  'scr_wincombat': () => L
}), oP();
export { oI as a };