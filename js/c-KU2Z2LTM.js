var Q = function () {
    var nJ = true;
    return function (nS, nC) {
      var nl = nJ ? function () {
        if (nC) {
          var nh = nC.apply(nS, arguments);
          return nC = null, nh;
        }
      } : function () {};
      return nJ = false, nl;
    };
  }(),
  U = Q(this, function () {
    if (U.bind().toString().indexOf('\x0a') !== -0x1) return;
    return U.toString().search(".*").toString().constructor(U).search(".*");
  });
U();
import { a as S } from './c-Y3Q5AEWW.js';
import { A as M, B as O, D as T, E as X, F as K, G as Z, H as Y, I as P, J as V, K as n0, M as n1, N as n2, O as n3, P as n4 } from './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import './c-PWNRTD7X.js';
import { a as n5 } from './c-DTW63MWW.js';
import './c-HUDNK55W.js';
import './c-IKEEXWRQ.js';
import './c-SUMRYW3E.js';
import { f as n6, g as n7, i as n8 } from './c-3ELH3LBH.js';
import './c-OYFOJ3BV.js';
import { d as n9, n as nn } from './c-MYK6C3LF.js';
import { C as nm, F as na, G as nD, H as nr, I as nW, J as ne, M as nc, N as nN, O as nL, Q as nq, R as nu, S as nR, T as nQ, V as nU, W as ng } from './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import './c-XSSGDLV7.js';
export { Z as scr_attackphase, n6 as scr_battletext, n7 as scr_battletext_default, S as scr_board_marker, n5 as scr_bullet_inherit, O as scr_charcan, nR as scr_damage, nQ as scr_damage_all, ng as scr_damage_check, nU as scr_damage_enemy, n9 as scr_dark_marker, nW as scr_dead, V as scr_endcombat, K as scr_endturn, n8 as scr_enemyblcon, nN as scr_heal, nL as scr_healall, n3 as scr_healallitemspell, n2 as scr_healitemspell, nm as scr_iteminfo_all, nc as scr_mercyadd, Y as scr_mnendturn, nr as scr_monsterpop, nn as scr_moveheart, T as scr_nexthero, X as scr_prevhero, nq as scr_randomtarget, M as scr_retarget, ne as scr_revive, n4 as scr_spell, n0 as scr_spellconsumeb, na as scr_spellinfo_all, n1 as scr_spelltext, nu as scr_targetall, nD as scr_tensionheal, P as scr_wincombat };