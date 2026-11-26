import { Df as o, G as f, Ho as n, Li as u, Oh as X, Uj as J, Yf as C, dg as N0, gm as N1, hn as N2, jm as N3, l as N4, o as N5, oq as N6, tb as N7, un as N8 } from "./c-G33BLWRS.js";
import { b as N9 } from "./c-Y3Q5AEWW.js";
import { Gb as NN, T as Nm, da as Nr } from "./c-2POG2PTP.js";
import { j as NK, m as Ng } from "./c-H5LU7UHS.js";
import { a as Nq } from "./c-AYDQ2WI5.js";
import "./c-SHU6ROUQ.js";
import "./c-F3KC5JBP.js";
import "./c-QVGXLNTR.js";
import "./c-S573BZHI.js";
import "./c-SRPTC2P4.js";
import "./c-4VFR2NSV.js";
import { c as NS, d as NG } from "./c-HQHPDIVM.js";
import "./c-PNL2T3BD.js";
import "./c-GABAATJZ.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import { B as NF, D as NW, F as NQ, K as NL, d as Nl, g as NU, x as Nx, y as No } from "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { Sh as NH, a as NO, h as Nf, k as Ny, sb as NR } from "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import "./c-3ELH3LBH.js";
import "./c-WSZI3RLB.js";
import "./c-NNTXHBME.js";
import "./c-OYFOJ3BV.js";
import { a as Nn, b as NV, q as Nb } from "./c-MYK6C3LF.js";
import { E as NA, G as Ns, N as Nh, P as NM, g as Nu, o as Ni } from "./c-ZQQWH6UG.js";
import { Da as NX, E as ND, Gc as NY, Ib as NJ, N as NP, Ra as Np, h as NB, l as NT, na as Ne, o as Nc, pb as NC, q as Nz, qb as NZ, r as Nd, u as Nt, w as Nj, xb as NE } from "./c-PBMEVLU6.js";
import { a as Nw, e as Nk, j as NI, l as Nv } from "./c-XSSGDLV7.js";
Nv();
Nv();
var m0 = new Proxy({}, {
  get: Nw((r5, r6) => N6[r6] || NN[r6], "get")
});
var m1 = Nw(r5 => u[r5] || N9[r5] || NH[r5] || (() => {}), "SCRIPT");
var {
  GID: m2,
  OBJREF: m3,
  instance_exists: m4
} = NH;
var m5 = new Proxy({}, {
  get: Nw((r5, r6) => m0[r6], "get")
});
function m6(r5) {
  this.xx = m1("camerax").call(this);
  this.yy = m1("cameray").call(this);
  let r6 = 0;
  if (Nu.char[0] !== 0 && Nu.char[1] === 0 && Nu.char[2] === 0) {
    r6 = 1;
  }
  if (Nu.char[0] !== 0 && Nu.char[1] !== 0 && Nu.char[2] === 0) {
    r6 = 2;
  }
  for (let r7 = 0; m2(r7) < 3; r7++) {
    (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[r7] = this.xx + 80;
    (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[r7] = this.yy + 50 + r7 * 80;
    (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[r7] = m3(m0.obj_baseenemy);
    (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[r7] = 1;
    (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[r7] = this.xx + 500 + r7 * 20;
    (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[r7] = this.yy + 40 + r7 * 90;
  }
  (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
  (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
  if (Nu.char[0] !== 0 && Nu.char[1] === 0 && Nu.char[2] === 0) {
    (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 140;
  }
  if (Nu.char[0] !== 0 && Nu.char[1] !== 0 && Nu.char[2] === 0) {
    (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 100;
    (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 180;
  }
  (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* It is known.";
  switch (r5) {
    case 0:
      break;
    case 1:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_baseenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 1;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_baseenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 1;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Test enemies showed up.";
        break;
      }
    case 2:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_lancerboss);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 2;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 540;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        break;
      }
    case 3:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_dummyenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 3;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 160;
        if (ND(m4(m0.obj_npc_room))) {
          (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = Nf("obj_npc_room").xstart;
          (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = Nf("obj_npc_room").ystart;
        }
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        break;
      }
    case 4:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rudinn drew near!";
        if (Nu.flag[500] >= 1) {
          (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A different Rudinn from last time drew near!";
        }
        if (Nu.flag[500] === 2) {
          (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_smallcheckers_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 9;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 150;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_clubsenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 16;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_checkers_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 10;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_ponman_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 11;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_ponman_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 11;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Ponman drew near!";
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        break;
      }
    case 14:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_ponman_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 11;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_ponman_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 11;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_ponman_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 11;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_clubsenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 7;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 30;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 420;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bloxer_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 14;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bloxer_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 14;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bloxer_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 14;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_lancerboss2);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 12;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 120;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_jigsawryenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 15;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Jigsawry drew near!";
        if (Nu.flag[500] >= 1) {
          (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A different Jigsawry from last time drew near!";
        }
        if (Nu.flag[500] === 2) {
          (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_jigsawryenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 15;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_jigsawryenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 15;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_jigsawryenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 15;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_jigsawryenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 15;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 100;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 90;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 150;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 100;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 210;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_joker);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 20;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_checkers_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 21;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Here it comes^1. Again.";
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_rudinnranger);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 22;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_rudinnranger);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 22;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_headhathy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 23;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_headhathy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 23;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_headhathy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 23;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_headhathy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 23;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_headhathy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 23;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_susieenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 19;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_lancerboss3);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 18;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 540;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 240;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_rabbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 13;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_heartenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 6;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_diamondenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_king_boss);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 25;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* King blocked the way!";
        break;
      }
    case 71:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_clubsenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 47;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_dojograzeenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 42;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* It's a grazing adventure.";
        break;
      }
    case 89:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_tasque_manager_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 42;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 487;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 94;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 0;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Graze!";
        break;
      }
    case 90:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_werewire_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 33;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_werewire_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 33;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Round One!";
        break;
      }
    case 91:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_poppup_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 31;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 412;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 40;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_omawaroid_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 30;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 466;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 106;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_virovirokun_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 35;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 412;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 184;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_tasque_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 32;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 432;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 52;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_tasque_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 32;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 140;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_maus_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 34;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 512;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 236;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        (Array.isArray(Nu.flag) ? Nu.flag : Nu.flag = [])[426] = Nd(0, 1, 2, 3);
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_swatchling_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 36;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 394;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 8;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_swatchling_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 36;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 490;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 74;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_swatchling_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 36;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 394;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 160;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_werewerewire_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 40;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 464;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 68;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_werewerewire_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 40;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 494;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 184;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Final Round!";
        break;
      }
    case 100:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_dojo_spareenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 52;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 150:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Guei wisps in your way!";
        break;
      }
    case 151:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Balthizard swings in!";
        break;
      }
    case 152:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 460;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Bibliox opens up!";
        break;
      }
    case 153:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 474;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Mizzle was woken up!";
        break;
      }
    case 154:
      {
        let r8 = [94, 50];
        let r9 = [80, 122];
        let rN = [72, 200];
        if (r6 === 1) {
          r8 = [80, 122];
        }
        if (r6 === 2) {
          r8 = [94, 86];
          r9 = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + r8[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + r8[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + r9[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + r9[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rN[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rN[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 475;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 56;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 488;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 188;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Wicabel clangs in your way!";
        break;
      }
    case 155:
      {
        let rm = [94, 50];
        let rK = [80, 122];
        let rg = [72, 200];
        if (r6 === 1) {
          rm = [80, 122];
        }
        if (r6 === 2) {
          rm = [94, 86];
          rK = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rm[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rm[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rK[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rK[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rg[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rg[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 230;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Winglade cuts in!";
        break;
      }
    case 156:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 47;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Organikk accosts you!";
        break;
      }
    case 157:
      {
        let rq = [94, 50];
        let rS = [80, 122];
        let rG = [72, 200];
        if (r6 === 1) {
          rq = [80, 122];
        }
        if (r6 === 2) {
          rq = [94, 86];
          rS = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rq[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rq[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rS[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rS[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rG[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rG[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* It's a cacophony.";
        break;
      }
    case 158:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 198;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Smells like scented candles.";
        break;
      }
    case 159:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 160:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_hammer_of_justice_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 105;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 418 + 42;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 69 + 92;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = 108;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = 149;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = 108;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = 149;
        if (Ny === "room_dw_church_arena") {
          (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = 629;
          (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = 149;
        }
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* (The bell of justice rings...)&(ATTACK to show what you've got!)";
        break;
      }
    case 161:
      {
        let rF = [94, 50];
        let rW = [80, 122];
        let rQ = [72, 200];
        if (r6 === 1) {
          rF = [80, 122];
        }
        if (r6 === 2) {
          rF = [94, 86];
          rW = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rF[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rF[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rW[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rW[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rQ[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rQ[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 459;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 56;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 227;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* The flapping of wings and pages fills the room.";
        break;
      }
    case 162:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 163:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 485;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 170;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 164:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 280;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 165:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 166:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 167:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 168:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 169:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 170:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bibliox_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 64;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 171:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 172:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 486;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 524;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 229;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 173:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 174:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_jackenstein_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 107;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 442;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cYTREASURE!\\c0";
        break;
      }
    case 175:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_titan_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 108;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 390;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
        for (let rL = 0; m2(rL) < 3; rL += 1) {
          (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[rL] = this.xx + 130 - rL * 32;
          if (rL === 0) {
            (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[rL] += 12;
          }
          (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[rL] = this.yy + 140 + rL * 30;
        }
        break;
      }
    case 176:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_sound_of_justice_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 106;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 465;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 115;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = -100;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = -100;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = 108;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = 149;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
        break;
      }
    case 177:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_titan_spawn_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 109;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500 - 40;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84 - 46;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_titan_spawn_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 109;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500 - 40;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 244 - 46;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
        break;
      }
    case 178:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_lanino_rematch_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 111;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 46;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_elnina_rematch_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 110;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* This time, the weather sticks together!";
        break;
      }
    case 179:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_pippins_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 59;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_rudinnranger);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 5;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 180:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_zapper_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 56;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_swatchling_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 36;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 181:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_ribbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 57;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_ribbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 57;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 182:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_ribbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 57;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_ribbick_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 57;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 183:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_holywatercooler_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 69;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 484;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 138;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* This is not your typical watercooler!";
        break;
      }
    case 184:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 474;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 130;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 494;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 210;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 185:
      {
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, "");
        break;
      }
    case 186:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_sound_of_justice_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 106;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 465;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 115;
        if (Ny === "room_dw_churchb_nongerson") {
          (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = m1("camerax").call(this) + 86;
          (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = m1("cameray").call(this) + 52;
        }
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] += 20;
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = -100;
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = -100;
        this.yy = 0;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
        break;
      }
    case 187:
      {
        let rl = [94, 50];
        let rU = [80, 122];
        let rx = [72, 200];
        if (r6 === 1) {
          rl = [80, 122];
        }
        if (r6 === 2) {
          rl = [94, 86];
          rU = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rl[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rl[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rU[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rU[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rx[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rx[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 22;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 176;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        break;
      }
    case 188:
      {
        let ro = [94, 50];
        let rH = [80, 122];
        let rO = [72, 200];
        if (r6 === 1) {
          ro = [80, 122];
        }
        if (r6 === 2) {
          ro = [94, 86];
          rH = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + ro[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + ro[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rH[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rH[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rO[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rO[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 5;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 106;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 210;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* It's a cacophony!";
        break;
      }
    case 189:
      {
        let rf = [94, 50];
        let ry = [80, 122];
        let rR = [72, 200];
        if (r6 === 1) {
          rf = [80, 122];
        }
        if (r6 === 2) {
          rf = [94, 86];
          ry = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rf[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rf[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + ry[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + ry[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rR[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rR[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_balthizard_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 63;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 70 - 20 - 4;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_mizzle_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 65;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 106 + 8 + 10;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_guei_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 62;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 210 - 20 + 6;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Water, fire, air.";
        break;
      }
    case 190:
      {
        let rn = [94, 50];
        let rV = [80, 122];
        let rb = [72, 200];
        if (r6 === 1) {
          rn = [80, 122];
        }
        if (r6 === 2) {
          rn = [94, 86];
          rV = [80, 166];
        }
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[0] = this.xx + rn[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[0] = this.yy + rn[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[1] = this.xx + rV[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[1] = this.yy + rV[1];
        (Array.isArray(Nu.heromakex) ? Nu.heromakex : Nu.heromakex = [])[2] = this.xx + rb[0];
        (Array.isArray(Nu.heromakey) ? Nu.heromakey : Nu.heromakey = [])[2] = this.yy + rb[1];
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bell_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 66;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 476 + 24;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 46 + 62;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Wicabel clangs in your way!";
        break;
      }
    case 191:
      {
        let rA = [94, 50];
        let rs = [80, 122];
        let rh = [72, 200];
        if (r6 === 1) {
          rA = [80, 122];
        }
        if (r6 === 2) {
          rA = [94, 86];
          rs = [80, 166];
        }
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_halo_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 67;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_organ_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 68;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 470;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Steel clangs in a song.";
        break;
      }
    case 500:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_multiboss_enemy1);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 500;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_multiboss_enemy2);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 500;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_multiboss_enemy3);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 500;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A multiboss example showed up.";
        break;
      }
    case 501:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_multiboss_controller_enemy1);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 501;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_multiboss_controller_enemy2);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 501;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_multiboss_controller_enemy3);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 501;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* A multiboss example with controller showed up.";
        break;
      }
    case 777:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_bullettester_enemy);
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_bullettester_enemy);
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[2] = m3(m0.obj_bullettester_enemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 1;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 1;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 1;
        (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = m1("stringset").call(this, " ");
        break;
      }
    default:
      {
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[0] = m3(m0.obj_baseenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[0] = 1;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(Nu.monsterinstancetype) ? Nu.monsterinstancetype : Nu.monsterinstancetype = [])[1] = m3(m0.obj_baseenemy);
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[1] = 1;
        (Array.isArray(Nu.monstermakex) ? Nu.monstermakex : Nu.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(Nu.monstermakey) ? Nu.monstermakey : Nu.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(Nu.monstertype) ? Nu.monstertype : Nu.monstertype = [])[2] = 0;
        break;
      }
  }
}
Nw(m6, "scr_encountersetup");
NI(m6, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 150:\n;\ncase 151:\n;\ncase 152:\n;\ncase 153:\n;\ncase 154:\n;\ncase 155:\n;\ncase 156:\n;\ncase 157:\n;\ncase 158:\n;\ncase 159:\n;\ncase 160:\n;\ncase 161:\n;\ncase 162:\n;\ncase 163:\n;\ncase 164:\n;\ncase 165:\n;\ncase 166:\n;\ncase 167:\n;\ncase 168:\n;\ncase 169:\n;\ncase 170:\n;\ncase 171:\n;\ncase 172:\n;\ncase 173:\n;\ncase 174:\n;\ncase 175:\n;\ncase 176:\n;\ncase 177:\n;\ncase 178:\n;\ncase 179:\n;\ncase 180:\n;\ncase 181:\n;\ncase 182:\n;\ncase 183:\n;\ncase 184:\n;\ncase 185:\n;\ncase 186:\n;\ncase 187:\n;\ncase 188:\n;\ncase 189:\n;\ncase 190:\n;\ncase 191:\n;\ncase 500:\n;\ncase 501:\n;\ncase 777:");
Nv();
var m7 = new Proxy({}, {
  get: Nw((r5, r6) => N6[r6] || NN[r6], "get")
});
var m8 = Nw(r5 => u[r5] || N9[r5] || NH[r5] || (() => {}), "SCRIPT");
var {
  GID: m9,
  instance_exists: mN
} = NH;
var mm = new Proxy({}, {
  get: Nw((r5, r6) => m7[r6], "get")
});
function mK() {
  m8("scr_monster_actreset").call(this, this.myself);
  if (Nu.monstertype[this.myself] === 1) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Enemy";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 20;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Warning";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Victory";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "Victory (S)";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[5] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[5] = "Lecture";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[1] = 1;
  }
  if (Nu.monstertype[this.myself] === 2) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 540;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 540;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 20;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Warning";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Compliment";
    (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* Lancer busts in!";
  }
  if (Nu.monstertype[this.myself] === 3) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Dummy";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 450;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 450;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Hug Ralsei";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* The tutorial begins.";
  }
  if (Nu.monstertype[this.myself] === 4) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Ralsei";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 90;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 90;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 6;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray(Nu.battlemsg) ? Nu.battlemsg : Nu.battlemsg = [])[0] = "* The tutorial begins.";
  }
  if (Nu.monstertype[this.myself] === 5) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Rudinn";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 30;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Convince";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Lecture";
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) < 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 6) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Hathy";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 150;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 150;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 6;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 28;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Flatter";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "X-Flatter";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    if (Nu.encounterno === 7) {
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
      if (m9(Nu.plot) < 40) {
        Nu.plot = 40;
      }
    }
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) < 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    }
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) >= 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "S-Flatter";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 2;
    }
  }
  if (Nu.monstertype[this.myself] === 7) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Clover";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 270;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 270;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 43;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    this.myact = Nd(0, 1, 2);
    if (this.myact === 0) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Politics";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Religion";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Sports";
    }
    if (this.myact === 1) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Kindness";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Cuteboys";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "GunControl";
    }
    if (this.myact === 2) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Trees";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Ghosts";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Games";
    }
    if (ND(m8("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[4] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 9) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "C.Round";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 10;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    if (Nu.encounterno === 7 && m9(Nu.plot) < 40) {
      Nu.plot = 40;
    }
    if (ND(m8("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "X-Compliment";
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 10) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "K.Round";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1300;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1300;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7.5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 3;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Bow";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Deep Bow";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    if (ND(m8("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 11) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Ponman";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 140;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 140;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 23;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Goodnight";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Lullaby";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) < 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 12) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 2400;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 2400;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 4;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = -40;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
  }
  if (Nu.monstertype[this.myself] === 13) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Rabbick";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 38;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Blow On";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "BreathAll";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) < 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 14) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Bloxer";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 2;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 38;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Rearrange";
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) >= 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Rival";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    }
  }
  if (Nu.monstertype[this.myself] === 15) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Jigsawry";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 90;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 90;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 20;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Befriend";
    if (ND(m8("scr_havechar").call(this, 2)) && m9(Nu.plot) < 150) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Warning";
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    }
  }
  if (Nu.monstertype[this.myself] === 16) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Clover";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 270;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 270;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 6;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 80;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "TalkBday";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "TalkBoys";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "TalkSports";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "TalkAnimals";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[5] = "TalkTrees";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[5] = 1;
    this.myact = Nd(0, 1, 2);
  }
  if (Nu.monstertype[this.myself] === 17) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "DoomTank";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 700;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 700;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 6;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 3;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Flatter";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Diplomacy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "Smile";
  }
  if (Nu.monstertype[this.myself] === 18) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 800;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 800;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 6;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Anything";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "X-Anything";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
  }
  if (Nu.monstertype[this.myself] === 19) {
    this._armordf = Nu.itemdf[2][0] + Nu.itemdf[2][1] + Nu.itemdf[2][2];
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Susie";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = -5 + this._armordf;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Anything";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Sing";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
  }
  if (Nu.monstertype[this.myself] === 20) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "JEVIL";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 3500;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 3500;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 5;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 999;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Pirouette";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Random#Chaos";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 50;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Hypnosis";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Induce#TIRED";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 125;
  }
  if (Nu.monstertype[this.myself] === 21) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "K.Round";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1300;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1300;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 3;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    if (Nu.flag[246] === 1) {
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Checkers";
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Bow";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Susie's Idea";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
  }
  if (Nu.monstertype[this.myself] === 22) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Rudinn Ranger";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 170;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 170;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 45;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 25;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Convince";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Compliment";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
  }
  if (Nu.monstertype[this.myself] === 23) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Head Hathy";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 190;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 190;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 40;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Flirt";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "X-Flirt";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
  }
  if (Nu.monstertype[this.myself] === 25) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "King";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 2800;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 2800;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 999;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Talk";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Talk";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Talk";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    if (Nu.tempflag[5] === 1) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Courage";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Defense#Boost";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 62;
    }
    if (Nu.tempflag[6] === 1) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "RedBuster";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Red#Damage";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 150;
    }
    if (Nu.tempflag[7] === 1) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "DualHeal";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Heals#everyone";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 125;
    }
  }
  if (Nu.monstertype[this.myself] === 30) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Ambyu-Lance";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 300;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 300;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 84;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 20;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    if (ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Hospitality";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    } else {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Avoid";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "GetHit";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 31) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Poppup";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    if (!ND(m8("scr_havechar").call(this, 2)) && !ND(m8("scr_havechar").call(this, 3)) && !ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    }
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 77;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 25;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Click";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Block";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    if (ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Avoid";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 32) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Tasque";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 75;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 20;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Petting";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    if (ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "PettingX";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    } else {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Roar";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "SoftVoice";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 33) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Werewire";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 5;
    if (ND(m8("scr_havechar").call(this, 3)) || ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    }
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 79;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 20;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "JiggleJiggle";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "ThrowWire";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Toss Kris#to free#wire";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 34) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Maus";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 70;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 25;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "TrapOne";
    if (ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = Nu.flag[379] === 0 ? "Fear" : "Compliment";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "TrapAll";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    } else {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Upgrade";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "TrapAll";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 35) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Virovirokun";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 240;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 84;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 20;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "TakeCare";
    if (ND(m8("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "TakeCareX";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    } else {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "TakeCareX";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself]) ? (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] : (Array.isArray(Nu.actsimulnoe) ? Nu.actsimulnoe : Nu.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 36) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Swatchling";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 300;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 300;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Warmify";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Redder#2 stages";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Coldify";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Bluer#2 stages";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Half-Warm";
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "Redder#1 stage";
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Half-Cold";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "Bluer#1 stage";
  }
  if (Nu.monstertype[this.myself] === 37) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Cap'n";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 1;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (Nu.monstertype[this.myself] === 38) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "K_K";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (Nu.monstertype[this.myself] === 39) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Sweet";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 120;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 50;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (Nu.lang !== "ja") {
      (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (Nu.monstertype[this.myself] === 40) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Werewerewire";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1753;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1753;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 11;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 300;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 5;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "BeCold";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "BeTough";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "BeSweet";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 41) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "GrazeTest";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 100;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 100;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
  }
  if (Nu.monstertype[this.myself] === 42) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Tasque Manager";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1367;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1367;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 200;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 5;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Order";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "OrderX";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 43) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Berdly";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1985;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1985;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Bump";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Ride#coaster";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "BumpX";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Everyone#rides#coaster";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Bump";
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "Ride#coaster";
    (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Bump";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "Ride#coaster";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 44) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Mauswheel";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1753;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1753;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 200;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Catch";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "CatchX";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 45) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Rouxls";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 600;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 600;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 200;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Take House";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Take House 2";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 34;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Take House 3";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 59;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[4] = 3;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "Take House 4";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[4] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[4] = 80;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = m8("stringset").call(this, "S-Action");
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Distract";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 46) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Berdly";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 900;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 900;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 100;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = m8("scr_sideb_get_phase").call(this) > 0 ? "Glare" : "Play Dumb";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 5;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = m8("scr_sideb_get_phase").call(this) > 0 ? "Wake" : "Play Smart";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself]) ? (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] : (Array.isArray(Nu.canactnoe) ? Nu.canactnoe : Nu.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself]) ? (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] : (Array.isArray(Nu.actnamenoe) ? Nu.actnamenoe : Nu.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
  }
  if (Nu.monstertype[this.myself] === 47) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Clover";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1500;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1500;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 11;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 5;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Topic";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Guess#favorite#thing";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Topic(Long)";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Longer#time to#guess";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 48) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Queen";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1510;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1510;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 10;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    if (ND(mN(m7.obj_berdlyplug_enemy))) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Loosen";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 4;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "GroupLoosen";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Throw";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 2;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "RedBuster";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Red#Damage";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 150;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[4] = 3;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "DualHeal";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[4] = "Heals#everyone";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[4] = 125;
      (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Loosen";
      (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Loosen";
    } else {
      (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
      (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    }
  }
  if (Nu.monstertype[this.myself] === 49) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Spamton";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 600;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 600;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = -50;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Deal";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "HealDeal";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "DEAL &#HEAL 60";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 125;
  }
  if (Nu.monstertype[this.myself] === 50) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Spamton NEO";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 4809;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 4809;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 13;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    if (m8("scr_sideb_get_phase").call(this) > 2) {
      (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = -27;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "X-Slash";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Physical#damage";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 62;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "FriedPipis";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Heals#120 HP";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 80;
    } else {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Snap";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "SnapAll";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Snap";
      (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "";
      (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[1] = "Supercharge";
      (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[1] = "Charge#faster";
      (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[1] = 80;
      (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "Snap";
      (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "";
      (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[1] = "FluffyGuard";
      (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[1] = "Orbiting#shield";
      (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[1] = 40;
    }
  }
  if (Nu.monstertype[this.myself] === 51) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "GIGA Queen";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 4500;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 4500;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7.5;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    if (Nu.flag[220] === 2) {
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "FireMode";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Power#Attacks";
    }
    if (Nu.flag[220] === 1) {
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "SwordMode";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Power up#each hit";
    }
    if (Nu.flag[220] === 0) {
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "LaserMode";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Fast#Attacks";
    }
    if (Nu.flag[220] === 3) {
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "DuckMode";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Sucky#Attacks";
    }
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[0] = 125;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "TurboDodge";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Better#dodge";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 62;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "SELF-FIX";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Heals#100HP";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 50;
  }
  if (Nu.monstertype[this.myself] === 52) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Jigsaw Joe";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Shave";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
  }
  if (Nu.monstertype[this.myself] === 53) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Pipis";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 200;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 200;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 56) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Zapper";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 11;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 80;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "VolumeUp";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Bullets#give big#TP...";
    if (Nu.encounterno === 135) {
      (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 4;
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Mute";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 80;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Tire#enemies";
    if (Nu.encounterno === 135) {
      (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 4;
    }
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "OffButton";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 250;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Turn#it off";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 57) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Ribbick";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 11;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 72;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "CroakOn";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Mercy#by#mashing";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "CroakOnX";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Targets#all but#weaker";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "50%#Mercy";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "25%#and#Tired";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 59) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Pippins";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 421;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 8;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 30;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Bet";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Touch#Green#4 Mercy";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Cheat";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "TIRE#Enemies,#but...";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 62) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Guei";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 13;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 120;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Exercism";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "20% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Xercism";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "60% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    if (m9(Nu.plot) >= 140 && m9(Nu.plot) < 160 && Nu.flag[868] === 0) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
      let r5 = "OldMan";
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "     " + r5;
      if (Nu.lang === "ja") {
        (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "  " + r5;
      }
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "I'm#old!";
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 63) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Balthizard";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 130;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Shake";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "ShakeX";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "LightUp";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "50% &#TIRE#others";
    if (Nu.plot === 141) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
      let r6 = "OldMan";
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "     " + r6;
      if (Nu.lang === "ja") {
        (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "  " + r6;
      }
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[4] = "I'm#old!";
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 64) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Bibliox";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 125;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Proofread";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Fix typo#for#MERCY";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "EasyProof";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "More#time to#fix";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 65) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Mizzle";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 13;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 110;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Dazzle";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "35%#Mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Embezzle";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "TIRE,#steal#item";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Nuzzle";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "TIRE by#fluffy#move";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[4] = "LullabyX";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[4] = 4;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[4] = "Sing to#everyone#...?";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 66) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Wicabel";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 9;
    if (Nu.char[2] === 3) {
      (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 13;
    }
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 160;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Tuning";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Good#timing=#mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Tuningx2";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Tuning#twice";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 67) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Winglade";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 155;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Spin";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Spin#50%#mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "SpinS";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "60%#Mercy#to all";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Whirl";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 160;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "SPARE#all!";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 68) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Organikk";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 470;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 11;
    if (Nu.char[2] === 3) {
      (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    }
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 150;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Perform";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Musical#mercy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Harmonize";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Harmonize";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 69) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "HolywaterCooler";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1740;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1740;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 500;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 4;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Flirt";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "???";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "BegForMercy";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "???";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Chat";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "???";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 105) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Hammer of Justice";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 0;
  }
  if (Nu.monstertype[this.myself] === 106) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "???";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Talk";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "???";
  }
  if (Nu.monstertype[this.myself] === 107) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Jackenstein";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 14;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Unleash";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Reveal#weakness";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 150;
    if (ND(m8("scr_debug").call(this)) && Ny === "room_battletest") {
      (Array.isArray(Nu.tempflag) ? Nu.tempflag : Nu.tempflag = [])[100] = 0;
    }
    if (Nu.tempflag[100] > 0) {
      (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "ScaredyCat";
      (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Def.Down#Speed Up";
      (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 5;
    }
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "TreasureHunt";
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "Easier#pickup";
    (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 5;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "LightUp";
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "Increase#light";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 2.5;
  }
  if (Nu.monstertype[this.myself] === 108) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Titan";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 21000;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 21000;
    NE.with("obj_titan_enemy", r7 => {
      r7.hpprev = Nu.monsterhp[r7.myself];
    });
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 18;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Brighten";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Powerup#light";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 10;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "DualHeal";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 40;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Heal#party";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Unleash";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 0;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 200;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Reveal#weakness";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "WakeKris";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 40;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "ReviveKris";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 40;
  }
  if (Nu.monstertype[this.myself] === 109) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Titan Spawn";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 3000;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 3000;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 18;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Brighten";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Powerup#light";
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[1] = 10;
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "DualHeal";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[2] = 40;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Heal#party";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[3] = "Banish";
    (Array.isArray((Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself]) ? (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] : (Array.isArray(Nu.actactor) ? Nu.actactor : Nu.actactor = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself]) ? (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] : (Array.isArray(Nu.actcost) ? Nu.actcost : Nu.actcost = [])[this.myself] = [])[3] = 160;
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[3] = "Defeat#enemy";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "WakeKris";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself]) ? (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] : (Array.isArray(Nu.actdescsus) ? Nu.actdescsus : Nu.actdescsus = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself]) ? (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] : (Array.isArray(Nu.actcostsus) ? Nu.actcostsus : Nu.actcostsus = [])[this.myself] = [])[0] = 40;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "ReviveKris";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself]) ? (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] : (Array.isArray(Nu.actdescral) ? Nu.actdescral : Nu.actdescral = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself]) ? (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] : (Array.isArray(Nu.actcostral) ? Nu.actcostral : Nu.actcostral = [])[this.myself] = [])[0] = 40;
  }
  if (Nu.monstertype[this.myself] === 110) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Elnina";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 4440;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 4440;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 16;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Umbrella";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Blocks#bullets";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "WarmHat";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Blocks#bullets";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 111) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Lanino";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 4440;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 4440;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 16;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 0;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymod) ? Nu.mercymod : Nu.mercymod = [])[this.myself] = 0;
    (Array.isArray(Nu.mercymax) ? Nu.mercymax : Nu.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "Telescope";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[1] = "Blocks#bullets";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "Sunglasses";
    (Array.isArray((Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself]) ? (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] : (Array.isArray(Nu.actdesc) ? Nu.actdesc : Nu.actdesc = [])[this.myself] = [])[2] = "Blocks#bullets";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (Nu.monstertype[this.myself] === 500) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = m8("stringset").call(this, "Multiboss Example");
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 20;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Taunt";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[3] = "Loner";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[2] = 0;
  }
  if (Nu.monstertype[this.myself] === 501) {
    (Array.isArray(Nu.monstername) ? Nu.monstername : Nu.monstername = [])[this.myself] = "Multiboss C Example";
    (Array.isArray(Nu.monstermaxhp) ? Nu.monstermaxhp : Nu.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterhp) ? Nu.monsterhp : Nu.monsterhp = [])[this.myself] = 130;
    (Array.isArray(Nu.monsterat) ? Nu.monsterat : Nu.monsterat = [])[this.myself] = 7;
    (Array.isArray(Nu.monsterdf) ? Nu.monsterdf : Nu.monsterdf = [])[this.myself] = 0;
    (Array.isArray(Nu.monsterexp) ? Nu.monsterexp : Nu.monsterexp = [])[this.myself] = 0;
    (Array.isArray(Nu.monstergold) ? Nu.monstergold : Nu.monstergold = [])[this.myself] = 20;
    (Array.isArray(Nu.sparepoint) ? Nu.sparepoint : Nu.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[0] = "Taunt";
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself]) ? (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] : (Array.isArray(Nu.canact) ? Nu.canact : Nu.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself]) ? (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] : (Array.isArray(Nu.actname) ? Nu.actname : Nu.actname = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself]) ? (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] : (Array.isArray(Nu.actsimul) ? Nu.actsimul : Nu.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself]) ? (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] : (Array.isArray(Nu.canactsus) ? Nu.canactsus : Nu.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself]) ? (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] : (Array.isArray(Nu.actnamesus) ? Nu.actnamesus : Nu.actnamesus = [])[this.myself] = [])[3] = "Loner";
    (Array.isArray((Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself]) ? (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] : (Array.isArray(Nu.actsimulsus) ? Nu.actsimulsus : Nu.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself]) ? (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] : (Array.isArray(Nu.canactral) ? Nu.canactral : Nu.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself]) ? (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] : (Array.isArray(Nu.actnameral) ? Nu.actnameral : Nu.actnameral = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself]) ? (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] : (Array.isArray(Nu.actsimulral) ? Nu.actsimulral : Nu.actsimulral = [])[this.myself] = [])[2] = 0;
  }
}
Nw(mK, "scr_monstersetup");
Nv();
var mg = {
  12: "checkers",
  175: "titan_battle"
};
var mq = {
  160: "plain",
  777: "plain"
};
var mS = "battle";
Nv();
Nv();
var mG = {
  336: "snd_swallow"
};
NX(mG, 4);
NO(N6, 4);
var mF = 4;
var mW = Nw(r5 => NE.first(r5), "first");
var mQ = Nw(r5 => NE.exists(r5), "ex");
var mL = {
  bcDefendTP: Nw(() => 40, "bcDefendTP"),
  heroDamage: Nw((r5, r6) => r6, "heroDamage"),
  heroHitTP: Nw(r5 => Math.round(r5.points / 10), "heroHitTP"),
  heroDraw: Nw((r5, r6, r7) => r7(), "heroDraw"),
  tensionCap: Nw(() => null, "tensionCap"),
  actNameColor: Nw((r5, r6, r7) => r7, "actNameColor")
};
function ml(r5, r6) {
  let r7 = NM[r5];
  NM[r5] = function (...r8) {
    if (Nu.chapter === mF) {
      return r6(...r8);
    } else if (typeof r7 == "function") {
      return r7(...r8);
    } else if (mL[r5]) {
      return mL[r5](...r8);
    } else {
      return false;
    }
  };
}
Nw(ml, "chain");
ml("bcCreate", r5 => {
  r5.questionmercy = [0, 0, 0];
  r5.soundbattle = Nu.encounterno === 176 || Nu.encounterno === 186;
  r5.hidestar = 0;
  if (Nu.encounterno === 160 || Nu.encounterno === 176 || Nu.encounterno === 186) {
    r5.questionmercy[0] = 1;
  }
  Object.assign(r5, {
    disablesusieattack: 0,
    disableitembutton: false,
    incenseturtlegersoncon: 0,
    gueigersoncon: 0,
    skipsusieturn: false,
    skipmonsterselection: false,
    facevar: 0,
    dancing_jackolantern_con: 0,
    dancing_jackolantern_alpha: 1,
    dancing_jackolantern_index: 0,
    dancing_jackolantern_timer: 0,
    gersonend: false,
    autoselect: false,
    rabbickvar: Nd(0, 1, 2)
  });
  if (Nu.encounterno === 160 && N1 && !mQ("obj_dw_church_arena_bg")) {
    NJ(0, 0, N1);
  }
  if (Nu.encounterno === 160 && Nm && !mQ("obj_dw_church_arena")) {
    let r6 = NJ(0, 0, Nm);
    if (r6) {
      r6.visible = false;
    }
  }
  return false;
});
ml("bcStepGate", r5 => {
  for (let rN of NE.list) {
    if (!rN.destroyed && !!rN.constructor && rN.constructor.name === "obj_balthizard_enemy" && (rN.gersonevent === true || rN.gersonevent === 1) && rN.gersonintro < 2) {
      return true;
    }
  }
  let r6 = mW("obj_holywatercooler_enemy");
  if (r6 && r6.introcon > 0) {
    return true;
  }
  if (r5.soundbattle === true) {
    let rm = mW("obj_sound_of_justice_enemy");
    if (rm && rm.init === 0) {
      return true;
    }
    if (Nu.myfight === 0 && Nu.bmenuno === 0 && !mQ("obj_herokris") && rm && rm.phase === 1) {
      if (Nu.hp[2] <= Nu.maxhp[2] * 0.5 && Nu.tension >= ((Nu.spellcost[2] || [])[1] ?? 999)) {
        Nu.bmenuno = 0;
        Nu.bmenucoord[2][Nu.charturn] = 1;
        Nu.chartarget[Nu.charturn] = Nu.bmenucoord[Nu.bmenuno][Nu.charturn];
        NL(NA(11).cost);
        return true;
      }
      NW();
    }
    if (Nu.hp[2] < 1 || rm && r5.victory === 0 && (r5.selnoise === 1 && (Np("snd_select"), r5.selnoise = 0), rm.kris_phase2_try_attack_con > 0 || rm.susie_phase2_try_attack_con > 0 || rm.intermission1_con > 0 || rm.endingcon > 0 || rm.introcon > 0)) {
      return true;
    }
  }
  let r7 = mW("obj_hammer_of_justice_enemy");
  if (!r7 || r7.endcon !== 5 || !(r7.endtimer >= 105)) {
    if (r7 && r7.endcon > 0 && r7.endtimer > 0 && r7.end_cutscene_version === 1) {
      return true;
    }
    if (r7 && r7.endcon > 1 && r7.end_cutscene_version === 1) {
      return true;
    }
  }
  let r8 = mW("obj_elnina_lanino_rematch_controller");
  if (r8 && r8.endcon > 0) {
    return true;
  }
  if (r8 && r8.endcon === 0 && Nu.myfight === 0 && Nu.mnfight === 0) {
    let rK = mW("obj_lanino_rematch_enemy");
    if (rK && mQ("obj_elnina_rematch_enemy") && Nu.mercymod[rK.myself] === 100) {
      return true;
    }
  }
  let r9 = mW("obj_titan_enemy");
  return !!r9 && !!r9.gerson && r9.gerson.sprite_index === "spr_gerson_item" && Nu.mnfight !== 2;
});
ml("bcDefendTP", () => mQ("obj_titan_spawn_enemy") || mQ("obj_titan_enemy") || mQ("obj_jackenstein_enemy") || mQ("obj_sound_of_justice_enemy") ? 5 : 40);
function mU(r5, r6) {
  let r7 = Nu.char[r6];
  let r8 = 0;
  if ((Nu.chararmor1 || [])[r7] === 26) {
    r8 += Math.ceil(r5 / 8);
  }
  if ((Nu.chararmor2 || [])[r7] === 26) {
    r8 += Math.ceil(r5 / 8);
  }
  return r5 + r8;
}
Nw(mU, "healAmountModify");
function mx(r5, r6) {
  let r7 = Nu.charinstance && Nu.charinstance[r5];
  if (!r7 || r7.destroyed) {
    return;
  }
  r7.healnum = r6;
  let r8 = NJ(r7.x, r7.y, NU);
  r8.target = r7;
  let r9 = NJ(r7.x, r7.y + r7.myheight - 24 - r7.tu * 20, Nl);
  r9.delay = 8;
  r9.type = 3;
  r9.damage = r6;
  if (Nu.hp[Nu.char[r5]] >= Nu.maxhp[Nu.char[r5]]) {
    r9.specialmessage = 3;
  }
  r7.tu++;
}
Nw(mx, "healFx4");
function mo(r5) {
  let r6 = 0;
  if (r5 === 0 && Nu.monster[0] === 0) {
    r5 = 1;
  }
  if (r5 === 1 && Nu.monster[1] === 0) {
    r5 = 2;
  }
  if (r5 === 2) {
    if (Nu.monster[2] === 0) {
      r5 = 3;
    }
    if (r5 === 3 && Nu.monster[0] === 1) {
      r5 = 0;
    }
    if (r5 === 3 && Nu.monster[1] === 1) {
      r5 = 1;
    }
    if (r5 === 3) {
      r6 = 1;
    }
  }
  return [r5, r6];
}
Nw(mo, "retargetSpell");
var mH = Nw(r5 => r5 === 1 ? 1.5 : r5 === 2 ? 1 : r5 === 3 ? 0.8 : r5 === 4 ? 0.3 : 0.2, "dualhealScale");
{
  let rM = NM.chapterSpell;
  NM.chapterSpell = (r5, r6) => {
    if (Nu.chapter !== mF) {
      if (typeof rM == "function") {
        return rM(r5, r6);
      } else {
        return false;
      }
    }
    let r7 = Nu.chartarget[r6];
    let r8 = mW("obj_hammer_of_justice_enemy");
    if (r8 && r5 !== 4 && r5 !== 5 && r5 !== 11 && r5 !== 100) {
      Nu.spelldelay = 10;
      if (r8.justice_item < 1) {
        r8.justice_item++;
      }
      Nu.spelldelay = 300;
      return true;
    }
    if (r5 === 2) {
      Nu.spelldelay = 10;
      let rN = Math.ceil(mU(Nu.battlemag[r6] * 5, r6));
      Nh(r7, rN);
      mx(r7, rN);
      Nu.spelldelay = 15;
      return true;
    }
    if (r5 === 4) {
      let rm = 0;
      Nu.spelldelay = 30;
      if (Nu.monster[r7] === 0) {
        [r7, rm] = mo(r7);
      }
      if (rm === 0) {
        Nu.spelldelay = 70;
        let rK = Math.ceil(Nu.battlemag[r6] * 5 + Nu.battleat[r6] * 11 - Nu.monsterdf[r7] * 3);
        let rg = my(r7, "obj_titan_enemy") ? mW("obj_titan_enemy") : null;
        if (rg) {
          if (rg.unleashed && rg.drawstate !== "defense end" && rg.drawstate !== "defense" && rg.starshootcon > 0 || rg.drawstate === "crack") {
            rK = Math.ceil(rK * 5 * rg.unleashmultiplier);
          } else if (rg.drawstate === "defense end" || rg.drawstate === "defense") {
            rK = Math.ceil(rK * 0.1);
          } else {
            rK = Math.ceil(rK * 0.5);
          }
        } else if (mQ("obj_titan_spawn_enemy") && my(r7, "obj_titan_spawn_enemy")) {
          rK = Math.ceil(rK * 0.5);
        }
        if (Nu.automiss && Nu.automiss[r7] === 1) {
          rK = 0;
        }
        let rq = mW("obj_herosusie");
        let rS = NJ(rq ? rq.x : 90, rq ? rq.y : 150, Nx);
        rS.damage = rK;
        rS.star = r7;
        rS.caster = r6;
        rS.target = Nu.monsterinstance[r7];
        if (r8 && r8.justice_rudebuster < 1) {
          r8.justice_rudebuster++;
        }
      }
      return true;
    }
    if (r5 === 6) {
      Nu.spelldelay = 10;
      let rG = Math.round(mU((Nu.battlemag[1] + Nu.battlemag[2]) * 3.5, r6));
      if (Nu.flag[1569] === 1) {
        rG = Math.round((Nu.battlemag[1] + Nu.battlemag[2]) * 6);
      }
      for (let rF of ["obj_titan_enemy", "obj_titan_spawn_enemy"]) {
        let rW = mW(rF);
        if (rW) {
          rW.dualhealcount = (rW.dualhealcount || 0) + 1;
          rG = Math.round(rG * mH(rW.dualhealcount));
        }
      }
      for (let rQ = 0; rQ < 3; rQ++) {
        if (Nu.charinstance && Nu.charinstance[rQ]) {
          Nh(rQ, rG);
          mx(rQ, rG);
        }
      }
      Nu.spelldelay = 15;
      return true;
    }
    if (!(r5 > 10) || !(r5 < 100) || typeof N0 != "function") {
      return false;
    }
    let r9 = Nu.charinstance && Nu.charinstance[r6] || {};
    N0.call(r9, r5, r6);
    return true;
  };
}
ml("bcDrawTop", (r5, r6) => {
  if (!(r5.dancing_jackolantern_con > 0)) {
    return false;
  }
  r5.dancing_jackolantern_timer++;
  r5.dancing_jackolantern_index += 0.3333333333333333;
  let r7 = mW("obj_ghosthouse_jackolantern_merciful");
  if (Nu.turntimer > 0 && r5.dancing_jackolantern_alpha > 0 || r7 && r7.end_con === 1) {
    r5.dancing_jackolantern_alpha -= 0.1;
    let r9 = mW("obj_jackenstein_enemy");
    if (Math.abs(r5.dancing_jackolantern_alpha) < 0.00001 && r9 && r9.phaseturn >= 6) {
      r5.dancing_jackolantern_con = 2;
    }
    if (Math.abs(r5.dancing_jackolantern_alpha) < 0.00001 && r9 && r9.phaseturn >= 8) {
      r5.dancing_jackolantern_con = 3;
    }
  }
  if (Nu.turntimer < 1 && r5.dancing_jackolantern_alpha < 1) {
    r5.dancing_jackolantern_alpha += 0.1;
  }
  let r8 = {
    1: [768, 128, 6],
    2: [711, 71, 10],
    3: [686, 46, 15]
  }[r5.dancing_jackolantern_con];
  if (r8) {
    let [rN, rm, rK] = r8;
    if (r5.dancing_jackolantern_timer > rN) {
      r5.dancing_jackolantern_timer -= rm;
    }
    for (let rg = 0; rg < rK; rg++) {
      r6.draw_sprite_ext("spr_dancing_lantern", r5.dancing_jackolantern_index, 640 + rg * rm - r5.dancing_jackolantern_timer, 272, 2, 2, 0, "#ffffff", r5.dancing_jackolantern_alpha);
    }
  }
  return false;
});
{
  let ru = NM.chapterSpellinfo;
  NM.chapterSpellinfo = r5 => Nu.chapter !== mF ? typeof ru == "function" ? ru(r5) : null : NA(r5);
}
ml("techConfirm", (r5, r6, r7, r8) => {
  if (r8 === "before") {
    if ((mQ("obj_titan_spawn_enemy") || mQ("obj_titan_enemy") || mQ("obj_sound_of_justice_enemy")) && Nu.charturn > 0 && r7 === 0) {
      r5.skipmonsterselection = 1;
    }
    return false;
  }
  let r9 = mW("obj_sound_of_justice_enemy");
  if (r9) {
    if (r7 === 0) {
      r9.susie_phase2_try_attack_con = 1;
    }
    if (r7 === 1) {
      r9.endingcon = 1;
    }
    NW();
    return true;
  } else {
    return false;
  }
});
var mO = Nw(r5 => {
  let r6 = 0;
  for (let r7 = 0; r7 < 3; r7++) {
    let r8 = Nu.char[r7];
    if (r8) {
      if ((Nu.chararmor1 || [])[r8] === r5) {
        r6++;
      }
      if ((Nu.chararmor2 || [])[r8] === r5) {
        r6++;
      }
    }
  }
  return r6;
}, "armorCount");
ml("bcVictoryMsg", r5 => {
  let r6 = Nu.monstergold[3];
  if (Nu.charweapon[1] === 53) {
    r6 += Math.floor(r6 / 20);
  }
  r6 *= 1 + mO(8) * 0.05;
  r6 *= 1 + mO(21) * 0.3;
  r6 -= r6 * (mO(54) * 0.1);
  r6 = Math.floor(r6);
  if (Nu.flag[37] === 1) {
    r6 = 0;
  }
  if (r6 !== Nu.monstergold[3]) {
    Nu.monstergold[3] = r6;
    Nu.msg[0] = "* You won^1!&* Got " + Nu.monsterexp[3] + " EXP and " + Nu.monstergold[3] + " D$./%";
  }
  if (r5.gersonend === true) {
    Nu.msg[0] = "* You won^1!&* Got " + Nu.monsterexp[3] + " EXP and " + Nu.monstergold[3] + " D$.&* Susie's heal power increased!/%";
  }
  return false;
});
ml("attackpressHit", r5 => {
  if (mQ("obj_jackenstein_enemy")) {
    r5.points[0] = 0;
    r5.points[1] = 0;
    r5.points[2] = 0;
    Ns(5);
  }
  let r6 = mW("obj_hammer_of_justice_enemy");
  if (r6) {
    r5.points[0] = 0;
    r6.state = 13;
    r6.sprite_index = "spr_gerson_teleport";
    r6.image_xscale = 3;
    r6.image_yscale = 3;
    r6.image_speed = 1;
    r6.x += 40;
    r6.y += 30;
    o.call(r6, "motor_swing_down", 1.4);
  }
  let r7 = mW("obj_sound_of_justice_enemy");
  if (r7) {
    r5.points[0] = 0;
    r5.points[1] = 0;
    if (r7.state !== 13) {
      r7.state = 13;
      r7.sprite_index = "spr_gerson_teleport";
      r7.image_xscale = 3;
      r7.image_yscale = 3;
      r7.image_speed = 1;
      r7.x = r7.xstart + 56;
      r7.y = r7.ystart + 70;
      o.call(r7, "motor_swing_down", 1.4);
    }
  }
  return false;
});
var mf = Nw(r5 => r5.is && r5.is("obj_herokris") && (Nu.charweapon[1] === 26 || Nu.charweapon[1] === 11), "krisSword");
var my = Nw((r5, r6) => {
  let r7 = r5 == null ? null : Nu.monsterinstance[r5];
  return r5 == null || !!r7 && !!r7.is && !!r7.is(r6);
}, "onClass");
ml("heroDamage", (r5, r6, r7) => {
  let r8 = my(r7, "obj_titan_enemy") ? mW("obj_titan_enemy") : null;
  let r9 = r8 && (r8.unleashed && r8.drawstate !== "defense end" && r8.drawstate !== "defense" && r8.starshootcon > 0 || r8.drawstate === "crack");
  let rN = r8 && (r8.drawstate === "defense end" || r8.drawstate === "defense");
  if (mf(r5)) {
    if (r8) {
      return Math.ceil(r9 ? r6 * 10 * r8.unleashmultiplier : rN ? r6 * 0.1 : r6 * 3);
    } else if (mQ("obj_titan_spawn_enemy") && my(r7, "obj_titan_spawn_enemy")) {
      return Math.ceil(r6 * 10);
    } else {
      return r6;
    }
  } else if (r8) {
    return Math.ceil(r9 ? r6 * 5 * r8.unleashmultiplier : rN ? r6 * 0.1 : r6 * 0.5);
  } else {
    return r6;
  }
});
ml("heroHitTP", r5 => {
  let r6 = mQ("obj_titan_enemy") || mQ("obj_titan_spawn_enemy") || mQ("obj_jackenstein_enemy") || mQ("obj_sound_of_justice_enemy");
  return Math.round(r5.points / (r6 ? 26 : 10));
});
ml("tpBlueBar", () => mQ("obj_jackenstein_enemy") || mQ("obj_sound_of_justice_enemy") || mQ("obj_titan_enemy") || mQ("obj_titan_spawn_enemy"));
var mR = Nw((...r5) => (Nu.monsterinstancetype || []).some(r6 => r6 && r5.includes(r6.name)), "inFight");
ml("heroSetup", r5 => {
  r5.showdarkness = true;
  if (r5.is && r5.is("obj_herosusie") && mR("obj_titan_enemy", "obj_titan_spawn_enemy")) {
    r5.normalsprite = "spr_susier_dark_unhappy";
    r5.idlesprite = Nu.charweapon[2] === 0 ? "spr_susieb_idle_unarmed_unhappy" : "spr_susieb_idle_serious";
    r5.defendsprite = "spr_susieb_defend_unhappy";
    r5.actreadysprite = "spr_susieb_actready";
    r5.attacksprite = "spr_susieb_attack_serious";
    r5.itemsprite = "spr_susieb_item_unhappy";
    r5.itemreadysprite = "spr_susieb_itemready_unhappy";
    r5.spellreadysprite = "spr_susieb_spellready_unhappy";
    r5.spellsprite = "spr_susieb_spell_unhappy";
    r5.defeatsprite = "spr_susie_dw_fell";
  }
  return false;
});
ml("heroDraw", (r5, r6, r7) => {
  let r8 = r5.showdarkness && (Nu.encounterno === 176 || Nu.encounterno === 186);
  if (r8) {
    NY(true, "#000000");
  }
  try {
    r7();
  } finally {
    if (r8) {
      NY(false, "#000000");
    }
  }
});
ml("bcDamageNoise", r5 => {
  let r6 = mW("obj_titan_enemy");
  if (r6) {
    if (r6.drawstate === "defense" || r6.drawstate === "defense end") {
      Np("snd_bump");
      return true;
    } else if (r6.drawstate === "idle" && r6.starshootcon > 0 || r6.drawstate === "crack") {
      r6.redflashtimer = 10;
      Np("snd_damage");
      Np("snd_queen_punched_lower_heavy");
      X.call(r5 || r6);
      NE.with("obj_shake", r7 => {
        r7.shakex = 4;
        r7.shakey = 4;
      });
      return true;
    } else if ((r6.drawstate === "idle" || r6.drawstate === "crack2") && r6.starshootcon === 0) {
      f.call(r5, "snd_metal_hit_reverb", 1, 0.5);
      r6.playmeatsoundcon = 1;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
ml("bcDrawEnd", (r5, r6) => {
  if (Nu.bmenuno !== 9 || Nu.myfight !== 0) {
    return false;
  }
  if (mQ("obj_balthizard_enemy") && Nu.charturn === 0 && r5.incenseturtlegersoncon === 1 && Nu.plot === 141) {
    r6.draw_sprite_ext("spr_gerson_acticon", 0, 44, 450, 1, 1, 0, "#ffffff", 1);
  }
  if (mQ("obj_guei_enemy") && Nu.plot >= 140 && Nu.plot <= 160 && Nu.flag[868] === 0 && r5.gueigersoncon === 1) {
    r6.draw_sprite_ext("spr_gerson_acticon", 0, 274, 422, 1, 1, 0, "#ffffff", 1);
  }
  let r7 = mW("obj_titan_enemy");
  if (r7 && r7.dualbusterenabled && !r7.susiesideaenabled) {
    r6.draw_sprite_ext("spr_gerson_acticon", 0, 82, 386, 1, 1, 0, "#ffffff", 1);
  }
  return false;
});
ml("tensionCap", () => null);
ml("actNameColor", (r5, r6, r7) => r7);
ml("heroAttackStart", r5 => {
  if (mQ("obj_sound_of_justice_enemy") && N8) {
    let r7 = r5.is("obj_herokris");
    let r8 = r5.is("obj_herosusie");
    if (r7 || r8) {
      let r9 = NJ(r7 ? r5.x + 30 : 140, r7 ? r5.y + 48 : 198, N8);
      r9.type = 2;
      r9.version = 1;
      r9.color = r7 ? "#00ffff" : "#ff00ff";
      r9.colorstart = r7 ? 16776960 : 16711935;
    }
  }
  let r6 = mW("obj_hammer_of_justice_enemy");
  if (r6) {
    r6.haveattacked = true;
  }
  return false;
});
ml("heroItemTick", r5 => {
  if (mQ("obj_hammer_of_justice_enemy") && r5.attacktimer === 2 && N3) {
    let r6 = mW("obj_heroparent");
    NJ((r6 ? r6.x : r5.x) + 63, (r6 ? r6.y : r5.y) + 60, N3);
  }
  return false;
});
ml("chapterNexthero", r5 => {
  r5.moveswapped = 0;
  let r6 = Nu.charturn;
  let r7 = 0;
  if (Nu.charturn === 0) {
    r7 = 1;
    if (Nu.charmove[1] === 1 && NF(1) && !r5.skipsusieturn || mQ("obj_sound_of_justice_enemy") && mQ("obj_herokris")) {
      Nu.charturn = 1;
    } else if (Nu.charmove[2] === 1 && NF(2)) {
      Nu.charturn = 2;
    } else {
      NQ();
    }
  }
  if (Nu.charturn === 1 && r7 === 0) {
    r7 = 1;
    if (NF(2) && (Nu.acting[1] === 0 || Ni() === 1)) {
      Nu.charturn = 2;
    } else {
      NQ();
    }
  }
  if (Nu.charturn === 2 && r7 === 0) {
    NQ();
  }
  if (r7 === 1) {
    Nu.bmenuno = 0;
  }
  if (Nu.charturn > 0 && Nu.charturn < 3 && (Nu.temptension[Nu.charturn] = Nu.tension, r5.tempitem)) {
    for (let r8 = 0; r8 < 12; r8++) {
      r5.tempitem[r8][Nu.charturn] = r5.tempitem[r8][r6];
    }
  }
  if (r5.disablesusieattack === 1 && Nu.charturn === 1) {
    Nu.bmenucoord[0][Nu.charturn] = 1;
  }
  return true;
});
ml("chapterEndturn", r5 => typeof N4 != "function" ? false : (N4.call(r5), true));
ml("chapterAttackphase", r5 => typeof N5 != "function" ? false : (N5.call(r5), true));
ml("heroPoseEnd", r5 => {
  let r6 = r5.sprite_index && NP[r5.sprite_index];
  let r7 = r6 && r6.frames === 1 ? r5.image_index % 1 : r5.image_index;
  if (!r5.maxframes || r7 + r5.image_speed < r5.maxframes) {
    return false;
  } else {
    r5.state = 0;
    r5.hurt = 0;
    r5.attacktimer = 0;
    r5.maxframes = 0;
    Nu.faceaction[r5.myself] = 0;
    return true;
  }
});
ml("heroSpellTick", (r5, r6) => {
  let r7 = mW("obj_titan_enemy");
  if (r6 === "spr_susieb_spell" && r7 && r7.gerson && mQ("obj_rudebuster_anim")) {
    r7.gerson.sprite_index = "spr_gerson_rudebuster_ready2";
    r7.gerson.image_index = 0;
  }
  return false;
});
ml("heroAttackSprite", (r5, r6) => {
  let r7 = mW("obj_titan_enemy");
  if (!r7 || r7.drawstate !== "defense" && r7.drawstate !== "defense end" || !r5.is("obj_herokris") && !r5.is("obj_herosusie")) {
    return false;
  } else {
    r6.sprite_index = "spr_attack_slap1_purple";
    r6.maxindex = 4;
    r6.image_speed = 0.5;
    return true;
  }
});
ml("bcSkipMenu", r5 => {
  if (r5.disablesusieattack !== 1 || Nu.charturn !== 1) {
    return false;
  }
  if (Nu.autoplay && Nu.bmenuno === 2) {
    let r7 = Nu.battlespell[1] || [];
    let r8 = Nu.battlespellcost[1] || [];
    let r9 = -1;
    for (let rN = 0; rN < 12; rN++) {
      if (r7[rN] !== 0 && r7[rN] !== undefined && (r8[rN] ?? 0) <= Nu.tension) {
        r9 = rN;
      }
    }
    if (r9 >= 0) {
      Nu.bmenucoord[2][1] = r9;
    } else {
      Nu.tensionselect = 0;
      Nu.bmenuno = 0;
      Nu.bmenucoord[0][1] = 4;
      return true;
    }
  }
  if (Nu.bmenuno !== 0) {
    return false;
  }
  let r6 = Nu.bmenucoord[0][1];
  r5.menuStep();
  if (Nu.charturn === 1 && Nu.bmenuno === 0 && Nu.bmenucoord[0][1] === 0 && r6 !== 0) {
    Nu.bmenucoord[0][1] = r6 === 4 ? 1 : 4;
  }
  return true;
});
ml("itemTargetSkip", () => {
  let r5 = mW("obj_titan_enemy");
  if (r5 && r5.acting === 1) {
    return true;
  }
  let r6 = false;
  let r7 = false;
  NE.with("obj_balthizard_enemy", r9 => {
    if (r9.acting === 5 && Nu.charturn === 1) {
      r6 = true;
    }
  });
  let r8 = mW("obj_guei_enemy");
  NE.with("obj_guei_enemy", r9 => {
    if (r9.acting === 4 && r8 && r8.gersonactcount === 1) {
      r7 = true;
    }
  });
  if (r6 && Nu.plot === 141) {
    return true;
  } else {
    return r7;
  }
});
{
  let ri = new Set(["constructor", "create", "cleanUp"]);
  let rX = Nw(() => Math.round((NE.frame || 0) * 1000 / 30), "clockFrom");
  if (typeof NR == "function") {
    for (let rD of Object.values(N6)) {
      if (typeof rD != "function" || !rD.prototype) {
        continue;
      }
      let rY = rD.prototype;
      for (let rJ of Object.getOwnPropertyNames(rY)) {
        if (ri.has(rJ)) {
          continue;
        }
        let rP = Object.getOwnPropertyDescriptor(rY, rJ);
        if (!rP || typeof rP.value != "function" || !String(rP.value).includes("current_time")) {
          continue;
        }
        let rp = rP.value;
        rY[rJ] = function (...r5) {
          NR(rX());
          try {
            return rp.apply(this, r5);
          } finally {
            NR(0);
          }
        };
      }
    }
  }
}
if (N2) {
  let rB = N2.prototype.step;
  if (typeof rB != "function") {
    throw new Error("ch4_engine: obj_titan_enemy has no step() to wrap");
  }
  N2.prototype.step = function () {
    if (this.endingcon >= 17 && this.endingcon <= 22.5 && !NE.view.live && !NE.exists("__roomhost")) {
      NE.view.live = true;
      this._g2pan = true;
    }
    rB.call(this);
    if (this._g2pan && (!(this.endingcon >= 17) || !(this.endingcon <= 22.5))) {
      NE.view.x = this.camerastartx || 0;
      NE.view.live = false;
      this._g2pan = false;
    }
    if (!Nu.battleover && this.acting === 1.25 && !!(this.endingtimer >= 210)) {
      if (!(NE.number("obj_dw_churchc_insidetitan") > 0)) {
        Nu.battleover = "win";
      }
    }
  };
}
{
  let rT = Nw(() => mW("obj_hammer_of_justice_enemy"), "hjOf");
  let re = Nw(() => Nu.chapter === mF && !!rT(), "live");
  let rc = No.prototype;
  let rC = rc.create;
  let rz = rc.step;
  let rZ = rc.draw;
  rc.create = function (...r5) {
    let r6 = rC.apply(this, r5);
    this.hurtflashalpha = 0;
    this.gersonswingtimer = 0;
    this.gersonoffset = 0;
    this.speedmax = 24;
    let r7 = re() ? rT() : null;
    if (r7) {
      if (r7.rudebusterhitcount !== r7.rudebusterhitcountmax) {
        this.speedmax = 6;
      }
      this.gersonoffset = -10;
      this.x += 20;
      this.y -= 20;
    }
    return r6;
  };
  rc.step = function (...r5) {
    let r6 = re() ? rT() : null;
    if (!r6) {
      return rz.apply(this, r5);
    }
    if (typeof this.target == "number" || !this.target) {
      this.target = r6;
    }
    let r7 = this.target;
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let r8 = r7.sprite_width || 0;
      let r9 = r7.sprite_height || 0;
      this.targetx = 200 + r7.x + r8 / 2;
      this.targety = r7.y + r9 / 2;
      this.cx = this.targetx;
      this.cy = this.targety;
      this.direction = Nt(this.x, this.y, this.cx, this.cy) - 20 + this.gersonoffset;
      this.speed = this.speedmax;
      this.friction = -1.5;
      if (r6.rudebusterhitcount === r6.rudebusterhitcountmax) {
        this.friction = -5;
        this.targety = r7.y - 60 + r9 / 2;
      }
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (r6.rudebusterhitcount < r6.rudebusterhitcountmax && this.explode === 0) {
      this.gersonswingtimer++;
      if (this.gersonswingtimer === 10) {
        {
          let rN = NP.spr_gerson_smash_stop;
          if (rN) {
            rN.ox = 25;
            rN.oy = 40;
          }
        }
        r6.sprite_index = "spr_gerson_smash_stop";
        r6.image_index = 0;
        r6.state = 10;
        Nu.spelldelay += 40;
      }
      if (this.gersonswingtimer === 17) {
        NE.with("obj_afterimage", rm => rm.instance_destroy());
        this.speedmax = 0;
        this.hurtflashalpha = 1;
        this.speed = 0;
        this.image_alpha = 1;
        N7.call(this);
        NJ(this.x, this.y, Nb);
        Np("snd_rudebuster_hit");
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (Ne() && this.bolt_timer >= 4 && this.chosen_bolt === 0 && !this.lockdamage) {
        this.chosen_bolt = this.bolt_timer;
        this.lockdamage = true;
      }
      let rm = Nt(this.x, this.y, this.cx, this.cy);
      this.direction += Nj(rm, this.direction) / 4;
      if (r6.rudebusterhitcount < r6.rudebusterhitcountmax) {
        this.direction += 4;
      } else {
        this.direction += 8;
        if (this.direction < 10) {
          this.direction = 0;
        }
      }
      this.image_angle = this.direction;
      if (r6.state !== 14 && r6.rudebusterhitcount >= r6.rudebusterhitcountmax && this.x > 500) {
        r6.saverudebusterstarcount = Math.round(this.damage / Nu.monstermaxhp[0] * 100);
        r6.state = 14;
        r6.spinxscale = 1;
        r6.spinspeed = 3.05;
        o.call(this, "snd_wallclaw", 0.7);
        Nu.spelldelay += 33;
        if (r6.rudebusterhitcount === r6.rudebusterhitcountmax && r6.rudebusterhitcountmax < 3) {
          r6.rudebusterhitcountmax++;
        }
      }
      if (this.x > 640) {
        this.instance_destroy();
        return;
      }
    }
    if (this.explode === 0 && this.speed !== 0) {
      let rK = NJ(this.x, this.y, NV);
      rK.sprite_index = this.sprite_index;
      rK.image_xscale = this.image_xscale;
      rK.image_yscale = 1.8;
      rK.image_angle = this.image_angle;
      rK.image_index = 4;
      rK.image_speed = 0.5;
      rK.image_alpha = this.image_alpha - 0.2;
      rK.depth = this.depth + 1;
      if (r6.rudebusterhitcount === r6.rudebusterhitcountmax) {
        rK.fadeSpeed = 0.08;
      }
      (this.aft ||= []).push(rK);
    }
    for (let rg of this.aft || []) {
      if (!rg.destroyed) {
        rg.image_yscale -= 0.1;
        if (rg.image_yscale <= 0.1) {
          rg.instance_destroy();
        }
      }
    }
    this.t++;
  };
  rc.draw = function (r5, ...r6) {
    if (typeof rZ == "function") {
      rZ.call(this, r5, ...r6);
    } else {
      this.draw_self(r5);
    }
    if (this.hurtflashalpha > 0) {
      NY(true, "#ffffff", 0, 1);
      r5.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, "#ffffff", this.hurtflashalpha);
      NY(false, "#000000", 0, 0);
      this.hurtflashalpha -= 0.1;
    }
  };
}
var mn = {
  236: "snd_glassbreak",
  269: "snd_punchmed",
  390: "snd_sparkle_glock"
};
var mV = class rd extends NC {
  create() {
    this.t = 0;
    this.parts = [];
    this.visible = false;
  }
  step() {
    for (let r5 of this.parts) {
      if (r5.delay === this.t) {
        Np(r5.snd, {
          pitch: r5.pitch,
          volume: r5.volume
        });
      }
    }
    this.t++;
    if (this.parts.every(r6 => r6.delay < this.t)) {
      this.instance_destroy();
    }
  }
};
Nw(mV, "obj_g2_snd_complex");
Nk(mV, "kinds", NZ("obj_g2_snd_complex", NC));
Nk(mV, "defaultDepth", 0);
var mb = mV;
var mA = class rt extends NC {
  create() {
    this.t = 0;
    this.target = null;
    this.damage = 1;
    this.caster = 0;
    this.star = 0;
    let r5 = mW("obj_titan_enemy");
    let r6 = r5 && r5.gerson;
    this.hasArt = !!NP.spr_gerson_rudebuster;
    if (r6 && !r6.destroyed) {
      if (this.hasArt) {
        r6.visible = false;
      }
      this.depth = r6.depth;
      this.x = r6.x;
      this.y = r6.y;
    }
    this.sprite_index = "spr_gerson_rudebuster";
    this.visible = this.hasArt;
    this.image_xscale = -2;
    this.image_yscale = 2;
    this.image_speed = 0.5;
  }
  step() {
    let r5 = mW("obj_titan_enemy");
    if (this.target && !this.target.destroyed && this.t === 14) {
      Np("snd_rudebuster_swing");
      let r6 = NJ(this.x - 132, this.y + 14, No);
      r6.caster = this.caster;
      r6.target = this.target;
      r6.damage = 1950 + Nz(100);
      r6.star = this.star;
      r6.sprite_index = "spr_rudebuster_beam_green";
      r6.speedmax = 44;
      Nu.faceaction[1] = 0;
    }
    if (this.t >= 32) {
      let r7 = r5 && r5.gerson;
      if (r7 && !r7.destroyed) {
        r7.visible = true;
        r7.sprite_index = "spr_gerson_idle";
        r7.image_speed = 0.25;
        r7.x = r7.xstart;
        r7.y = r7.ystart;
      }
      this.instance_destroy();
      return;
    }
    this.t++;
  }
};
Nw(mA, "obj_rudebuster_anim_gerson");
Nk(mA, "kinds", NZ("obj_rudebuster_anim_gerson", NC));
Nk(mA, "defaultDepth", 0);
Nk(mA, "defaultSprite", "spr_gerson_rudebuster");
var ms = mA;
{
  let rj = Nx.prototype;
  let rE = rj.create;
  let rw = rj.step;
  rj.create = function (...r5) {
    let r6 = rE.apply(this, r5);
    this.init = 0;
    this.dualbuster = false;
    return r6;
  };
  rj.step = function (...r5) {
    if (Nu.chapter !== mF) {
      return rw.apply(this, r5);
    }
    let r6 = mW("obj_titan_enemy");
    if (this.init === 0 && r6 && r6.acting === 1.12 && r6.gerson) {
      this.init = 1;
      let r7 = NJ(r6.gerson.x, r6.gerson.y, ms);
      r7.target = this.target;
    }
    if (!this.dualbuster) {
      return rw.apply(this, r5);
    }
    this.image_index = this.t / 2;
    if (this.target && !this.target.destroyed && this.t === 14) {
      Np("snd_rudebuster_swing");
      let r8 = NJ(this.x + 40, this.y + 30, No);
      r8.caster = this.caster;
      r8.target = this.target;
      r8.damage = this.damage + 500;
      r8.star = this.star;
      if (this.red === 1) {
        r8.red = 1;
      }
    }
    if (this.t >= 32) {
      let r9 = mW("obj_herosusie");
      if (r9) {
        r9.visible = true;
      }
      this.instance_destroy();
      return;
    }
    this.t++;
  };
  let rk = No.prototype;
  let rI = rk.step;
  rk.step = function (...r5) {
    let r6 = this.t;
    let r7 = rI.apply(this, r5);
    if (Nu.chapter === mF && r6 === 0 && this.speedmax && this.speedmax !== 24 && !mQ("obj_hammer_of_justice_enemy")) {
      this.speed = this.speedmax;
    }
    return r7;
  };
}
ml("rudebusterHit", (r5, r6) => {
  if (r6 !== "before") {
    return false;
  }
  let r7 = mW("obj_titan_enemy");
  if (!r7) {
    return false;
  }
  if (r7.drawstate === "crack") {
    r7.redflashtimer = 10;
    Np("snd_damage");
    Np("snd_queen_punched_lower_heavy");
    X.call(r5);
    NE.with("obj_shake", r8 => {
      r8.shakex = 4;
      r8.shakey = 4;
    });
  }
  if (r5.sprite_index === "spr_rudebuster_beam_green" && r7.drawstate !== "crack") {
    let r8 = NJ(0, 0, mb);
    r8.parts = [[0, 236, 0.6, 0.4, 3], [1, 390, 0.8, 0.5, 1], [2, 390, 0.71, 0.5, 1], [3, 269, 0.7, 0.95, 1]].map(([, rG, rF, rW, rQ]) => ({
      snd: mn[rG],
      pitch: rF,
      volume: rW,
      delay: rQ
    }));
    r7.drawstate = "crack";
    r7.redflashtimer = 10;
    let r9 = NE.view.x || 0;
    let rN = NE.view.y || 0;
    let rm = r9 + 500;
    let rK = rN + 300;
    let rg = (r7.camerastartx || 0) + 640 - 494;
    let rq = (r7.camerastarty || 0) - 88;
    let rS = Nn;
    {
      for (let rG = 0; rG < 6; rG++) {
        let rF = NJ(rg, rq, rS);
        Object.assign(rF, {
          sprite_index: "spr_titan_star_break",
          image_blend: NB.white,
          image_speed: 0,
          image_index: 1 + rG,
          image_xscale: 2,
          image_yscale: 2,
          gravity: 1,
          gravity_direction: 270,
          depth: 10
        });
        rF.vspeed = -4 - Nc(18);
        rF.hspeed = -6 + Nc(12);
      }
      for (let rW = 0; rW < 30; rW++) {
        let rQ = NJ(rm - 40 + Nc(80), rK - 40 + Nc(80), rS);
        Object.assign(rQ, {
          sprite_index: "spr_gerson_item_throw",
          image_blend: NT(NB.white, NB.black, 0.3),
          image_speed: 0,
          image_index: 3,
          gravity: 1,
          gravity_direction: 270,
          depth: 10
        });
        rQ.vspeed = -4 - Nc(18);
        rQ.hspeed = -6 + Nc(12);
      }
    }
  }
  return false;
});
Nv();
var mh = 4;
var mM = Nw(r5 => r5 > 1 ? 1 : r5 > 0 ? r5 : 0, "clamp01");
{
  let rv = NM.heroDraw;
  NM.heroDraw = function (r5, r6, r7) {
    if (Nu.chapter !== mh) {
      if (typeof rv == "function") {
        return rv(r5, r6, r7);
      } else {
        return r7();
      }
    }
    let r8 = Nu.targeted;
    let r9 = r5.myself;
    let rN = Array.isArray(r8) && r8[r9] === 1 ? () => {
      r8[r9] = 0;
      try {
        return r7();
      } finally {
        r8[r9] = 1;
      }
    } : r7;
    if (typeof rv == "function") {
      return rv(r5, r6, rN);
    } else {
      return rN();
    }
  };
}
if (N8) {
  let K0 = N8.prototype;
  let K1 = K0.draw;
  if (typeof K1 != "function") {
    throw new Error("ch4_church: obj_church_old_man_ripple_effect has no draw()");
  }
  K0.draw = function (r5, ...r6) {
    if (Nu.chapter !== mh || !r5) {
      return K1.call(this, r5, ...r6);
    }
    let r7 = r5.ctx;
    let r8 = Object.prototype.hasOwnProperty.call(r5, "draw_circle");
    let r9 = r8 ? r5.draw_circle : null;
    let rN = r5.draw_circle;
    r5.draw_circle = function (rm, rK, rg, rq) {
      if (this.ctx === r7 || rq) {
        return rN.call(this, rm, rK, rg, rq);
      }
      if (!(rg > 0) || !Number.isFinite(rg)) {
        return;
      }
      let rS = this.ctx;
      rS.save();
      rS.globalCompositeOperation = "destination-out";
      rS.globalAlpha = 1;
      rS.beginPath();
      rS.arc(rm, rK, rg, 0, Math.PI * 2);
      rS.fill();
      rS.globalCompositeOperation = "source-over";
      rS.globalAlpha = mM(this.alpha);
      if (rS.globalAlpha > 0) {
        rS.fillStyle = this.color;
        rS.beginPath();
        rS.arc(rm, rK, rg, 0, Math.PI * 2);
        rS.fill();
      }
      rS.restore();
    };
    try {
      return K1.call(this, r5, ...r6);
    } finally {
      if (r8) {
        r5.draw_circle = r9;
      } else {
        delete r5.draw_circle;
      }
    }
  };
}
if (J) {
  let K2 = J.prototype;
  let K3 = K2.draw;
  if (typeof K3 != "function") {
    throw new Error("ch4_church: obj_gerson_growtangle_telegraph_new has no draw()");
  }
  K2.draw = function (r5, ...r6) {
    if (Nu.chapter !== mh) {
      return K3.call(this, r5, ...r6);
    }
    let r7 = this.image_alpha;
    if (r7 > 0) {
      this.image_alpha = Math.sqrt(Math.min(r7, 1));
      try {
        return K3.call(this, r5, ...r6);
      } finally {
        this.image_alpha = r7;
      }
    }
  };
}
var mu = 3800;
var mi = 0;
var mX = ["ch4/room_dw_churchc_titanclimb2_post", mu, mi, {
  hide: ["DEBUG_ASSETS"],
  enc: 175
}];
var mD = Nw((r5, r6, r7) => r5 < r6 ? Math.min(r5 + r7, r6) : Math.max(r5 - r7, r6), "approach");
var mY = Nw(r5 => 1 - (1 - r5) * (1 - r5), "easeOut");
var mJ = class K4 extends Nr {
  create() {
    this.depth = 100000;
    this.background_spotlight_alpha = 0;
    this.lerpt = 0;
    this.layers = [];
    this.t = 0;
  }
  step() {
    this.t++;
    if (this.lerpt < 60) {
      this.lerpt++;
      this.background_spotlight_alpha = mY(this.lerpt / 60) * 0.35;
    }
    let r5 = NE.first("obj_titan_enemy");
    if (r5) {
      if (r5.phase === 3) {
        this.background_spotlight_alpha = mD(this.background_spotlight_alpha, 0.5, 0.05);
      }
      if (r5.phase === 5) {
        this.background_spotlight_alpha = mD(this.background_spotlight_alpha, 0.85, 0.05);
      }
      if (r5.phase === 7) {
        this.background_spotlight_alpha = mD(this.background_spotlight_alpha, 0, 0.05);
      }
    }
    let r6 = this.t * 1000 / 30;
    for (let {
      o: r7,
      wave: r8
    } of this.layers) {
      let r9 = r7.layer;
      if (!!r9 && !!r9.spr) {
        for (let rN = 0; rN < r9.spr.length; rN++) {
          let rm = r9.spr[rN];
          let rK = r9.inity[rN];
          let rg = rm[1] + (r9.xo || 0) - mu;
          let rq = rK + (r9.yo || 0) - mi;
          if (!(rq > -100) || !(rq < 580) || !(rg > -100) || !(rg < 740)) {
            continue;
          }
          let rS = r8 * 0.5;
          rm[2] = rK + rS + Math.sin((r6 * 0.001 + rN * 2 * 0.11) / 2 * (Math.PI * 2)) * rS;
        }
      }
    }
  }
  draw(r5) {
    let r6 = this.background_spotlight_alpha;
    if (!(r6 > 0)) {
      return;
    }
    let r7 = NP.spr_titan_background_spotlight;
    let r8 = r7 ? r7.w : 0;
    let r9 = 60;
    let rN = r9 + r8 * 2;
    r5.draw_set_color("#000000");
    r5.draw_set_alpha(r6);
    r5.draw_rectangle(0, 0, r9 - 1, 480, false);
    r5.draw_rectangle(rN, 0, 640, 480, false);
    r5.draw_set_alpha(1);
    if (r7) {
      NY(true, "#000000");
      r5.draw_sprite_ext("spr_titan_background_spotlight", 0, r9, 0, 2, 2, 0, "#000000", r6);
      NY(false, "#000000");
    }
    r5.draw_set_color("#ffffff");
  }
};
Nw(mJ, "obj_titan_room_post");
Nk(mJ, "kinds", NZ("obj_titan_room_post", Nr));
var mP = mJ;
var mp = null;
var mB = class K5 extends NC {
  create() {
    this.depth = 1000350;
    this.parts = [];
    this.stopemitting = false;
    this.seed = 175;
  }
  rnd() {
    this.seed = this.seed * 1103515245 + 12345 & 2147483647;
    return this.seed / 2147483648;
  }
  step() {
    let r5 = NE.first("obj_titan_enemy");
    if (!this.stopemitting && r5) {
      if (r5.rumble == false && this.rnd() < r5.phase * 0.2) {
        this.parts.push({
          x: this.rnd() * 640,
          y: 380 + this.rnd() * 100,
          size: 0.1 + this.rnd() * 0.3,
          spd: 0.8 + this.rnd() * 0.8,
          life: 700,
          ws: this.rnd() * Math.PI * 2,
          wd: this.rnd() * Math.PI * 2
        });
      } else if (r5.rumble) {
        this.stopemitting = true;
      }
    }
    for (let r6 of this.parts) {
      r6.life--;
      let r7 = r6.spd + Math.sin(r6.ws + r6.life * 0.2) * 0.2;
      let r8 = (90 + Math.sin(r6.wd + r6.life * 0.1) * 12) * Math.PI / 180;
      r6.x += Math.cos(r8) * r7;
      r6.y -= Math.sin(r8) * r7;
    }
    if (this.parts.length && this.parts.some(r9 => r9.life <= 0)) {
      this.parts = this.parts.filter(r9 => r9.life > 0);
    }
  }
  draw(r5) {
    if (r5.headless || !NP.spr_tower_fountain_ball2 || typeof document === "undefined") {
      return;
    }
    let r6 = this.parts.filter(rq => rq.x < 330 && rq.y < 250 && rq.y > -10);
    if (!r6.length) {
      return;
    }
    if (!mp) {
      let rq = () => {
        let rG = document.createElement("canvas");
        rG.width = 320;
        rG.height = 240;
        return rG;
      };
      let rS = rq();
      mp = {
        surf: rS,
        sil: rq(),
        sg: new r5.constructor(rS.getContext("2d"))
      };
    }
    let {
      surf: r7,
      sil: r8,
      sg: r9
    } = mp;
    let rN = r7.getContext("2d");
    let rm = r8.getContext("2d");
    rN.clearRect(0, 0, 320, 240);
    for (let rG of r6) {
      r9.draw_sprite_ext("spr_tower_fountain_ball2", 0, rG.x, rG.y, rG.size, rG.size, 0, "#ffffff", 1);
    }
    rm.globalCompositeOperation = "copy";
    rm.drawImage(r7, 0, 0);
    rm.globalCompositeOperation = "source-in";
    rm.fillStyle = "#404040";
    rm.fillRect(0, 0, 320, 240);
    rm.globalCompositeOperation = "source-over";
    let rK = r5.ctx;
    let rg = rK.imageSmoothingEnabled;
    rK.imageSmoothingEnabled = false;
    for (let [rF, rW] of [[-2, 0], [2, 0], [0, -2], [0, 2]]) {
      rK.drawImage(r8, rF, rW, 640, 480);
    }
    rK.drawImage(r7, 0, 0, 640, 480);
    rK.imageSmoothingEnabled = rg;
  }
};
Nw(mB, "obj_titan_background_balls");
Nk(mB, "kinds", NZ("obj_titan_background_balls", NC));
var mT = mB;
NS("175", ({
  vx: r5,
  vy: r6
}) => {
  let r7 = NJ(0, 0, mP);
  NJ(0, 0, mT);
  let r8 = {
    SWAYING_FORE: 2,
    SWAYING_MID: 4,
    SWAYING_BACK: 6
  };
  for (let r9 of NE.list) {
    if (!r9.is || !r9.is("obj_roomlayer") || !r9.layer) {
      continue;
    }
    let rN = r9.layer;
    if (rN.n === "PARALLAX_1") {
      r9.layer = {
        ...rN,
        xo: Math.round(r5 * 0.5),
        yo: Math.round(r6 * 0.1)
      };
    } else if (r8[rN.n] && rN.spr) {
      r9.layer = {
        ...rN,
        spr: rN.spr.map(rm => rm.slice()),
        inity: rN.spr.map(rm => rm[2])
      };
      r7.layers.push({
        o: r9,
        wave: r8[rN.n]
      });
    }
  }
});
var me = new WeakMap();
var mc = null;
function mC(r5, r6, r7) {
  if (r6 >= 255) {
    return null;
  }
  let r8 = me.get(r5);
  if (r8 === undefined) {
    let rW = document.createElement("canvas");
    rW.width = r5.width;
    rW.height = r5.height;
    let rQ = rW.getContext("2d", {
      willReadFrequently: true
    });
    rQ.drawImage(r5, 0, 0);
    r8 = rQ.getImageData(0, 0, rW.width, rW.height);
    if (!r8 || !(r8.width > 0) || !r8.data || r8.data.length !== r8.width * r8.height * 4) {
      r8 = null;
    }
    me.set(r5, r8 || false);
  }
  if (!r8) {
    return null;
  }
  mc ||= document.createElement("canvas");
  let r9 = mc;
  if (r9.width !== r8.width || r9.height !== r8.height) {
    r9.width = r8.width;
    r9.height = r8.height;
  }
  let rN = r9.getContext("2d");
  let rm = rN.createImageData(r8.width, r8.height);
  let rK = parseInt(r7.slice(1), 16);
  let rg = rK >> 16 & 255;
  let rq = rK >> 8 & 255;
  let rS = rK & 255;
  let rG = r8.data;
  let rF = rm.data;
  for (let rL = 3; rL < rG.length; rL += 4) {
    if (rG[rL] > r6) {
      rF[rL - 3] = rg;
      rF[rL - 2] = rq;
      rF[rL - 1] = rS;
      rF[rL] = 255;
    }
  }
  rN.putImageData(rm, 0, 0);
  return r9;
}
Nw(mC, "alphaTested");
if (n && typeof document !== "undefined") {
  let K6 = n.prototype;
  let K7 = K6.draw;
  let K8 = Nw(r5 => r5 > 1 ? 1 : r5 > 0 ? r5 : 0, "clamp01b");
  K6.draw = function (r5, ...r6) {
    if (Nu.chapter !== mh || !r5 || !r5.ctx) {
      return K7.call(this, r5, ...r6);
    }
    let r7 = Array.isArray(this.remprog) ? this.remprog : this.remprog = [0, 0, 0, 0];
    r7[3] = r7[2];
    r7[2] = r7[1];
    r7[1] = r7[0];
    r7[0] = this.prog;
    this.prog = K8(this.timer / this.lifetime);
    if (this.reverse) {
      this.prog = 1 - this.prog;
    }
    this.image_index = this.reverse ? 1 : 0;
    let r8 = NP[this.sprite_index];
    let r9 = r8 && r8.img && r8.img[this.image_index];
    if (r9 && r9.width > 0) {
      let rN = this.move_x !== 0 || this.move_y !== 0 ? [[(this.reverse ? this.prog : r7[2]) * 255, "#808080", "source-over"], [r7[0] * 255, "#000000", "source-over"], [(this.reverse ? r7[2] : this.prog) * 255, "#ffffff", "lighter"]] : [[this.prog * 255, null, "source-over"]];
      let rm = r5.ctx;
      for (let [rK, rg, rq] of rN) {
        if (!rg) {
          r5.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
          continue;
        }
        let rS = mC(r9, rK, rg);
        if (rS) {
          rm.save();
          rm.globalCompositeOperation = rq;
          rm.globalAlpha = 1;
          rm.translate(this.x, this.y);
          if (this.image_angle) {
            rm.rotate(-this.image_angle * Math.PI / 180);
          }
          rm.scale(this.image_xscale, this.image_yscale);
          rm.drawImage(rS, -r8.ox, -r8.oy);
          rm.restore();
        }
      }
    }
    if (this.timer < 15) {
      let rG = Math.round((1 - this.timer / 15) * 136);
      let rF = "#" + rG.toString(16).padStart(2, "0").repeat(3);
      let rW = C.call(this, this.timer / 15, 3);
      let rQ = r5.ctx;
      rQ.save();
      rQ.globalCompositeOperation = "lighter";
      r5.draw_sprite_ext("spr_titan_star_centered", 2, this.x + 348, this.y + 288, this.image_xscale + rW, this.image_yscale + rW, this.image_angle, rF, this.image_alpha);
      rQ.restore();
    }
    if (this.con === 1) {
      if (this.timer === 0) {
        Np("snd_laz_titan");
      }
      this.timer++;
      if (this.timer >= this.lifetime) {
        this.con = 2;
      }
    }
  };
}
var mz = 4;
var mZ = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 500, 501];
var md = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 501];
var mt = {
  180: "Names obj_swatchling_enemy, which chapter 4's own data has no code for (an empty object) - not a working encounter in the game.",
  500: "A developer test encounter (obj_multiboss_enemy1, obj_multiboss_enemy2, obj_multiboss_enemy3) - in the data, never started by the game.",
  501: "A developer test encounter (obj_multiboss_controller_enemy1, obj_multiboss_controller_enemy2, obj_multiboss_controller_enemy3) - in the data, never started by the game."
};
var mj = "ch4_battle";
var mE = {
  160: "ch4_extra_boss",
  174: "pumpkin_boss",
  175: "titan_battle",
  176: "statue_chord_basic",
  177: "titan_spawn",
  186: "statue_chord_basic"
};
var mw = {
  160: [2, 0, 0],
  176: [2, 0, 0],
  186: [1, 2, 0]
};
var mk = {
  186: [1, 0, 0]
};
var mI = {
  maxhp: {
    1: 200,
    2: 230,
    3: 180,
    4: 90
  },
  at: {
    1: 17,
    2: 22,
    3: 15,
    4: 3
  },
  charweapon: {
    1: 23,
    2: 24,
    3: 25,
    4: 12
  },
  chararmor1: {
    1: 25,
    2: 25,
    3: 25,
    4: 14
  },
  chararmor2: {
    1: 10,
    2: 10,
    3: 10,
    4: 22
  },
  mag: {
    2: 3,
    3: 14,
    4: 11
  },
  df: {
    4: 1
  },
  spell: {
    "1,0": 7,
    "2,0": 4,
    "2,1": 11,
    "3,0": 3,
    "3,1": 2
  }
};
var mv = {
  160: ["room_dw_church_arena", 520, 0],
  186: ["room_dw_churchb_nongerson", 0, 0]
};
var r0 = {
  default: 0.7,
  176: 0
};
var r1 = {
  150: [{
    suffix: "g",
    label: "with Gerson",
    plot: 150,
    flags: {
      868: 0
    },
    why: "Plot 150 in the dark maze - the Guei's Old Man ACT (scr_monstersetup Guei, obj_dw_church_darkmaze)"
  }],
  151: [{
    suffix: "g",
    label: "with Gerson",
    plot: 141,
    why: "Plot 141 - Gerson walks into the fight (obj_dw_church_turtles, obj_balthizard_enemy Create_0:56-59)"
  }]
};
NK(4, {
  SCR: u,
  OBJ: N6,
  startStats: mI
});
var r2 = new Set([178]);
function r3() {
  let r5 = r4();
  for (let r6 of r5) {
    if (r6.encounterno === 175) {
      let [r8, r9, rN, rm] = mX;
      let rK = NG(r8, r9, rN, rm);
      if (rK) {
        r6.background = rK;
      }
    }
    if (!r2.has(r6.encounterno)) {
      continue;
    }
    r6.music = "battle";
    r6.room = "room_dw_castle_dojo";
    let r7 = r6.background;
    r6.background = () => {
      if (r7) {
        r7();
      }
      NJ(320, 0, Nq);
    };
  }
  return r5;
}
Nw(r3, "buildFights");
function r4() {
  return Ng({
    ch: 4,
    cases: mZ,
    scr_encountersetup: m6,
    scr_monstersetup: mK,
    ENC_BG: mq,
    ENC_MUSIC: {
      ...mg,
      ...mE
    },
    DEFAULT_MUSIC: mj || mS,
    cut: Object.fromEntries(Object.entries(mt).map(([r5, r6]) => [Number(r5), r6])),
    verified: md,
    party: Object.fromEntries(Object.entries(mw).map(([r5, r6]) => [Number(r5), r6])),
    setupParty: Object.fromEntries(Object.entries(mk).map(([r5, r6]) => [Number(r5), r6])),
    room: Object.fromEntries(Object.entries(mv).map(([r5, r6]) => [Number(r5), r6])),
    musiclevel: r0,
    story: r1
  });
}
Nw(r4, "buildFightsRaw");
export { mZ as CASES, mz as CHAPTER, mj as DEFAULT_SONG, mt as DEV, mE as ENC_MUSIC_FROM_EVENTS, r0 as MUSIC_LEVEL, mw as PARTY, mv as ROOMS, mk as SETUP_PARTY, mI as START_STATS, r1 as STORY, md as VERIFIED, r3 as buildFights };
