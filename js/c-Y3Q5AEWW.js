var V = function () {
    var iI = true;
    return function (iV, iU) {
      var io = iI ? function () {
        if (iU) {
          var ic = iU.apply(iV, arguments);
          return iU = null, ic;
        }
      } : function () {};
      return iI = false, io;
    };
  }(),
  U = V(this, function () {
    if (U.bind().toString().indexOf('\x0a') !== -0x1) return;
    return U.toString().search(".*").toString().constructor(U).search(".*");
  });
U();
import { A as O, B as R, D as W, E as L, F as T, G as Q, H as S, I as i0, J as i1, K as i2, M as i3, N as i4, O as i5, P as i6 } from './c-QFDZPUX2.js';
import { a as i7 } from './c-DTW63MWW.js';
import { f as i8, g as i9, i as ii } from './c-3ELH3LBH.js';
import { d as iM, n as iH } from './c-MYK6C3LF.js';
import { C as iX, F as ik, G as ir, H as iq, I as iK, J as ie, M as iA, N as ip, O as iz, Q as iZ, R as iJ, S as iC, T as iu, V as iB, W as iy } from './c-ZQQWH6UG.js';
import { a as it, c as ih, l as iP } from './c-XSSGDLV7.js';
var iY = {};
ih(iY, {
  'scr_attackphase': () => Q,
  'scr_battletext': () => i8,
  'scr_battletext_default': () => i9,
  'scr_board_marker': () => is,
  'scr_bullet_inherit': () => i7,
  'scr_charcan': () => R,
  'scr_damage': () => iC,
  'scr_damage_all': () => iu,
  'scr_damage_check': () => iy,
  'scr_damage_enemy': () => iB,
  'scr_dark_marker': () => iM,
  'scr_dead': () => iK,
  'scr_endcombat': () => i1,
  'scr_endturn': () => T,
  'scr_enemyblcon': () => ii,
  'scr_heal': () => ip,
  'scr_healall': () => iz,
  'scr_healallitemspell': () => i5,
  'scr_healitemspell': () => i4,
  'scr_iteminfo_all': () => iX,
  'scr_mercyadd': () => iA,
  'scr_mnendturn': () => S,
  'scr_monsterpop': () => iq,
  'scr_moveheart': () => iH,
  'scr_nexthero': () => W,
  'scr_prevhero': () => L,
  'scr_randomtarget': () => iZ,
  'scr_retarget': () => O,
  'scr_revive': () => ie,
  'scr_spell': () => i6,
  'scr_spellconsumeb': () => i2,
  'scr_spellinfo_all': () => ik,
  'scr_spelltext': () => i3,
  'scr_targetall': () => iJ,
  'scr_tensionheal': () => ir,
  'scr_wincombat': () => i0
}), iP();
var is = it((...iI) => {
  is._w || (is._w = 0x1, console.warn("stub scr_board_marker", iI));
}, 'scr_board_marker');
export { is as a, iY as b };