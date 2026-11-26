import { i as g, m as U, n as Z, o as F, p as q, q as Y, r as L, s as P, t as O, u as J, v as u, w, x as Q, y as B } from "./c-T3NV6YZF.js";
import { $r as C, Fk as n0, Ms as n1, Nm as n2, Om as n3, Ru as n4, S as n5, Tm as n6, Tr as n7, h as n8, hv as n9, js as nn, kf as nW, qv as nD, ti as nh, wi as nj, yb as nM, zl as nl } from "./c-YIPEZQYC.js";
import { d as no } from "./c-64CKXDID.js";
import { Ba as nG, Zc as nS, ca as nf } from "./c-5QGTVUX3.js";
import { j as nH, m as nX } from "./c-H5LU7UHS.js";
import "./c-AYDQ2WI5.js";
import "./c-SHU6ROUQ.js";
import "./c-F3KC5JBP.js";
import "./c-QVGXLNTR.js";
import "./c-S573BZHI.js";
import "./c-SRPTC2P4.js";
import "./c-4VFR2NSV.js";
import "./c-HQHPDIVM.js";
import "./c-PNL2T3BD.js";
import "./c-GABAATJZ.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import { C as nd, D as nx, L as nb, d as ng, i as nK } from "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { Sh as nE, bd as nR, dd as nm, fb as np, h as ny, ie as nU, l as nZ, lf as ne, mf as nF, nd as nq, nf as nY, od as nI, qa as nL, qd as ni, x as nP, xa as nc } from "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import { c as nO, d as nV } from "./c-3ELH3LBH.js";
import { f as nJ } from "./c-WSZI3RLB.js";
import "./c-NNTXHBME.js";
import "./c-OYFOJ3BV.js";
import { a as nu } from "./c-MYK6C3LF.js";
import "./c-E7FVSW52.js";
import { P as nN, g as nw } from "./c-ZQQWH6UG.js";
import { B as nQ, Bb as nz, Da as nA, E as nT, Eb as nB, Ib as nk, Jb as nC, L as nv, N as W0, Ra as W1, Tb as W2, Vc as W3, Xb as W4, h as W5, k as W6, l as W7, o as W8, pb as W9, q as Wn, qb as WW, r as Wt, ta as WD, ua as Wh, va as Wj, wa as WM, xb as Wl, zb as Wo } from "./c-PBMEVLU6.js";
import { a as WG, e as WS, g as Wf, j as WH, l as WX } from "./c-XSSGDLV7.js";
WX();
WX();
var Wd = new Proxy({}, {
  get: WG((tk, tC) => nD[tC] || nS[tC], "get")
});
var Wx = WG(tk => n2[tk] || no[tk] || nE[tk] || (() => {}), "SCRIPT");
var {
  GID: Wb,
  OBJREF: Wg,
  instance_exists: WK
} = nE;
var WE = new Proxy({}, {
  get: WG((tk, tC) => Wd[tC], "get")
});
function WR(tk) {
  this.xx = Wx("camerax").call(this);
  this.yy = Wx("cameray").call(this);
  let tC = 0;
  let tv = [94, 50];
  let D0 = [80, 122];
  let D1 = [72, 200];
  let D2 = 0;
  if (nw.char[0] !== 0 && nw.char[1] === 0 && nw.char[2] === 0) {
    D2 = 1;
  }
  if (nw.char[0] !== 0 && nw.char[1] !== 0 && nw.char[2] === 0) {
    D2 = 2;
  }
  for (let D3 = 0; Wb(D3) < 3; D3 += 1) {
    (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[D3] = this.xx + 80;
    (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[D3] = this.yy + 50 + D3 * 80;
    (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[D3] = Wg(Wd.obj_baseenemy);
    (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[D3] = 1;
    (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[D3] = this.xx + 500 + D3 * 20;
    (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[D3] = this.yy + 40 + D3 * 90;
  }
  (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
  (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
  if (nw.char[0] !== 0 && nw.char[1] === 0 && nw.char[2] === 0) {
    (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 140;
  }
  if (nw.char[0] !== 0 && nw.char[1] !== 0 && nw.char[2] === 0) {
    (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 100;
    (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 180;
  }
  (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* It is known.";
  switch (tk) {
    case 0:
      break;
    case 1:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_baseenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 1;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_baseenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 1;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = Wx("stringset").call(this, "* Test enemies showed up.");
        break;
      }
    case 2:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_lancerboss);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 2;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 540;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        break;
      }
    case 3:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_dummyenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 3;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 160;
        if (nT(WK(Wd.obj_npc_room))) {
          (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = ny("obj_npc_room").xstart;
          (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = ny("obj_npc_room").ystart;
        }
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        break;
      }
    case 4:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rudinn drew near!";
        if (nw.flag[500] >= 1) {
          (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A different Rudinn from last time drew near!";
        }
        if (nw.flag[500] === 2) {
          (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_smallcheckers_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 9;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 150;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_clubsenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 16;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_checkers_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 10;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_ponman_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 11;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_ponman_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 11;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Ponman drew near!";
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        break;
      }
    case 14:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_ponman_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 11;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_ponman_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 11;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_ponman_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 11;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_clubsenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 7;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 30;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 420;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_bloxer_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 14;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_bloxer_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 14;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_bloxer_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 14;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_lancerboss2);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 12;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 120;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_jigsawryenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 15;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Jigsawry drew near!";
        if (nw.flag[500] >= 1) {
          (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A different Jigsawry from last time drew near!";
        }
        if (nw.flag[500] === 2) {
          (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_jigsawryenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 15;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_jigsawryenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 15;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_jigsawryenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 15;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_jigsawryenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 15;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 100;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 90;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 150;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 100;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 210;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_joker);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 20;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_checkers_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 21;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Here it comes^1. Again.";
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_rudinnranger);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 22;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_rudinnranger);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 22;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_headhathy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 23;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_headhathy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 23;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_headhathy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 23;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_headhathy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 23;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_headhathy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 23;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_susieenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 19;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 520;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_lancerboss3);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 18;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 540;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 240;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_rabbick_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 13;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_heartenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 6;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_diamondenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 5;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_king_boss);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 25;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 460;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* King blocked the way!";
        break;
      }
    case 71:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_clubsenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 47;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_dojograzeenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 42;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* It's a grazing adventure.";
        break;
      }
    case 89:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_tasque_manager_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 42;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 487;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 94;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Graze!";
        break;
      }
    case 90:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_werewire_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 33;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_werewire_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 33;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Round One!";
        break;
      }
    case 91:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_poppup_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 31;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 412;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 40;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_omawaroid_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 30;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 466;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 106;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_virovirokun_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 35;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 412;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 184;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_tasque_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 32;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 432;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 52;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_tasque_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 32;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 140;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_maus_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 34;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 512;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 236;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        (Array.isArray(nw.flag) ? nw.flag : nw.flag = [])[426] = Wt(0, 1, 2, 3);
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_swatchling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 36;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 394;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 8;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_swatchling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 36;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 490;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 74;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_swatchling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 36;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 394;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 160;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_werewerewire_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 40;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 464;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 68;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_werewerewire_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 40;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 494;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 184;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Final Round!";
        break;
      }
    case 100:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_dojo_spareenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 52;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 200:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Floradinn florads in!";
        break;
      }
    case 201:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_leafling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 71;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 510;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_leafling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 71;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 540;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Leafling floats by carefree.";
        break;
      }
    case 202:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 450;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_kawkaw_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 74;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 487;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 208;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way! (... sort of.)&* Kawkaw wants to play!";
        break;
      }
    case 203:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_shinobeetle_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 73;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_shinobeetle_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 73;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shinobeetle sneaks in!";
        break;
      }
    case 204:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_kawkaw_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 74;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_kawkaw_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 74;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Kawkaw wants to play!";
        break;
      }
    case 205:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_sheary_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 75;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 461;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_sheary_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 75;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 503;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 183;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Sheary cuts in!";
        break;
      }
    case 206:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_netskie_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 76;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 130;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Netskie unwraps itself from its big fluffy tail!";
        break;
      }
    case 207:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_terracota_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 77;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 446;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 76;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Terakota stomps towards you!";
        break;
      }
    case 208:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 458;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_leafling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 71;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Floradinn florads in!&* Leafling floats by carefree.";
        break;
      }
    case 209:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_shinobeetle_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 73;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 50;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_leafling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 71;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 540;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shinobeetle sneaks in!&* Floradinn florads in!";
        break;
      }
    case 210:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 24;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_kawkaw_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 74;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 446;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 153;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_kawkaw_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 74;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 483;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way! (... sort of.)&* Kawkaw wants to play!";
        break;
      }
    case 211:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 32;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 162;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way! (... sort of.)";
        break;
      }
    case 212:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 76;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way! (... sort of.)";
        break;
      }
    case 213:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_shinobeetle_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 73;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 474;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 24;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "SETH AND 1 SHINOBEETLE";
        break;
      }
    case 214:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 64;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 446;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 152;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 483;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* It's a din of Floradinns!";
        break;
      }
    case 215:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_leafling_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 71;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_sheary_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 75;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 490;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A leaf and its cutter appeared!";
        break;
      }
    case 220:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_aqua_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 112;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 130;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* A mysterious festival begins.";
        break;
      }
    case 221:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_orange_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 113;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 103;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_green_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 114;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 493;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Green brings the food!&* Orange brings the fight!";
        break;
      }
    case 222:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_blue_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 115;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 466;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 40;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_yellow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 116;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Yellow brings the gun's!&* Blue brings the elegance!";
        break;
      }
    case 223:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_purple_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 117;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_aqua_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 112;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Aqua brings the sword!&* Seth brings the pen!";
        break;
      }
    case 224:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_pink_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 118;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 131;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* TP MAX reduced by TEA!&Gather HEARTS to recover MAX TP!";
        break;
      }
    case 225:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_flowery_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 119;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 114;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Flowery faces you!";
        break;
      }
    case 226:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 90;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 32;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 104;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 298;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 158;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 420;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 194;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "";
        break;
      }
    case 227:
      {
        if (D2 === 1) {
          tv = [80, 122];
        }
        if (D2 === 2) {
          tv = [94, 86];
          D0 = [80, 166];
        }
        nw.heromakex = [this.xx + tv[0], this.xx + D0[0], this.xx + D1[0]];
        nw.heromakey = [this.yy + tv[1], this.yy + D0[1], this.yy + D1[1]];
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[tC] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[tC] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[tC] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[tC] = this.yy + 110;
        tC++;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Floradinn florads in!";
        break;
      }
    case 228:
      {
        if (D2 === 1) {
          tv = [80, 122];
        }
        if (D2 === 2) {
          tv = [94, 86];
          D0 = [80, 166];
        }
        nw.heromakex = [this.xx + tv[0], this.xx + D0[0], this.xx + D1[0]];
        nw.heromakey = [this.yy + tv[1], this.yy + D0[1], this.yy + D1[1]];
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[tC] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[tC] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[tC] = this.xx + 514;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[tC] = this.yy + 38;
        tC++;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[tC] = Wg(Wd.obj_sheary_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[tC] = 75;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[tC] = this.xx + 534;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[tC] = this.yy + 130;
        tC++;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[tC] = Wg(Wd.obj_netskie_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[tC] = 76;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[tC] = this.xx + 528;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[tC] = this.yy + 222;
        tC++;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Floradinn florads in!&* Sheary cuts in!&* Netskie unwraps itself from its big fluffy tail!";
        break;
      }
    case 229:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_netskie_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 76;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 473;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 130;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 0;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Netskie tricked you!";
        break;
      }
    case 230:
      {
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[0] = this.xx + 90;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[0] = this.yy + 32;
        (Array.isArray(nw.heromakex) ? nw.heromakex : nw.heromakex = [])[1] = this.xx + 90;
        (Array.isArray(nw.heromakey) ? nw.heromakey : nw.heromakey = [])[1] = this.yy + 104;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_floradinn_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 70;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 360;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 158;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "";
        break;
      }
    case 231:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 462;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way! (... sort of.)";
        break;
      }
    case 232:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_shinobeetle_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 73;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 437;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 112;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shinobeetle is no longer alone!";
        break;
      }
    case 233:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 495;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 75;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 495;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 130;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_scarecrow_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 72;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 495;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 185;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* Shi blocks the way for real!";
        break;
      }
    case 234:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_trashy_trio);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 121;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 456;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 182;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "* The world's most popular trio!";
        break;
      }
    case 235:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_enemy_example);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 123;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 456;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 102;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = "...";
        break;
      }
    case 500:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_multiboss_enemy1);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 500;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_multiboss_enemy2);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 500;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_multiboss_enemy3);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 500;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = Wx("stringset").call(this, "* A multiboss example showed up.");
        break;
      }
    case 501:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_multiboss_controller_enemy1);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 501;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_multiboss_controller_enemy2);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 501;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_multiboss_controller_enemy3);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 501;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = Wx("stringset").call(this, "* A multiboss example with controller showed up.");
        break;
      }
    case 777:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_bullettester_enemy);
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_bullettester_enemy);
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[2] = Wg(Wd.obj_bullettester_enemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 1;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 1;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 1;
        (Array.isArray(nw.battlemsg) ? nw.battlemsg : nw.battlemsg = [])[0] = Wx("stringset").call(this, " ");
        break;
      }
    default:
      {
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[0] = Wg(Wd.obj_baseenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[0] = 1;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(nw.monsterinstancetype) ? nw.monsterinstancetype : nw.monsterinstancetype = [])[1] = Wg(Wd.obj_baseenemy);
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[1] = 1;
        (Array.isArray(nw.monstermakex) ? nw.monstermakex : nw.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(nw.monstermakey) ? nw.monstermakey : nw.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(nw.monstertype) ? nw.monstertype : nw.monstertype = [])[2] = 0;
        break;
      }
  }
}
WG(WR, "scr_encountersetup");
WH(WR, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 200:\n;\ncase 201:\n;\ncase 202:\n;\ncase 203:\n;\ncase 204:\n;\ncase 205:\n;\ncase 206:\n;\ncase 207:\n;\ncase 208:\n;\ncase 209:\n;\ncase 210:\n;\ncase 211:\n;\ncase 212:\n;\ncase 213:\n;\ncase 214:\n;\ncase 215:\n;\ncase 220:\n;\ncase 221:\n;\ncase 222:\n;\ncase 223:\n;\ncase 224:\n;\ncase 225:\n;\ncase 226:\n;\ncase 227:\n;\ncase 228:\n;\ncase 229:\n;\ncase 230:\n;\ncase 231:\n;\ncase 232:\n;\ncase 233:\n;\ncase 234:\n;\ncase 235:\n;\ncase 500:\n;\ncase 501:\n;\ncase 777:");
WX();
var Wm = new Proxy({}, {
  get: WG((tk, tC) => nD[tC] || nS[tC], "get")
});
var Wp = WG(tk => n2[tk] || no[tk] || nE[tk] || (() => {}), "SCRIPT");
var Wy = new Proxy({}, {
  get: WG((tk, tC) => Wm[tC], "get")
});
function WU() {
  Wp("scr_monster_actreset").call(this, this.myself);
  if (nw.monstertype[this.myself] === 1) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = Wp("stringset").call(this, "Enemy");
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 7;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 20;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = Wp("stringset").call(this, "Check");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = Wp("stringset").call(this, "Warning");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = Wp("stringset").call(this, "Victory");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[4] = Wp("stringset").call(this, "Victory (S)");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[5] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[5] = Wp("stringset").call(this, "Lecture");
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = Wp("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = Wp("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[1] = 1;
  }
  if (nw.monstertype[this.myself] === 70) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Floradinn";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 280;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Flatter";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "60%#Mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "FlirtS";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Romance#Mercy?";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = "Convince";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[3] = "TIRE#enemy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 71) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Leafling";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 260;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "TurboSpin";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "100% Mercy#to all";
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[1] = 160;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "PinDown";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Make#TIRED";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = "BlowAway";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[3] = "Mash for#Mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 72) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Shi";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 300;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "ActScared";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "30%#Mercy";
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "Intimidate";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Pose for#Mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 73) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Shinobeetle";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 320;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Convince";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "35%#Mercy";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 74) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "KawKaw";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 270;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Hoop";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "60%#Mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "ShooOrCall";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Leave#or Love";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 75) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Sheary";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 340;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "SalonCut";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "Relaxed#cut";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "ValueCut";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Cut#quick!";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = "HyperCut";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[3] = "Cut#FAST!!!";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 76) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Netskie";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1545;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1545;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 444;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Faker";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "Touch fake#bullets";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "Impression";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Slight#Mercy";
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 77) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Terakota";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1545;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1545;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 400;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "WateringCan";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "Waters#plants";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "SlowerCan";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Waters#slower";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 78) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "???";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 160;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
  }
  if (nw.monstertype[this.myself] === 79) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "???";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 600;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 160;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 80) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "???";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 515;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 600;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 160;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 112) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "???";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 3060;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 3060;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 600;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Spin";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "20%#mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "Dance";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "20%#mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = "Care";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[3] = "20%#mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[4] = "Coolpose";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[4] = "20%#mercy";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[5] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[5] = "Flatter";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[5] = "20%#mercy";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 0;
  }
  if (nw.monstertype[this.myself] === 113) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Orange";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 400;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "GetAlong";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "25%#mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[1] = 210;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "TPCooking";
    (Array.isArray((Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself]) ? (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] : (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] = [])[0] = "Boost#TP";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "TPCooking";
    (Array.isArray((Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself]) ? (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] : (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] = [])[0] = "Boost#TP";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 114) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Green";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 400;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "FeastX";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "25%#mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[1] = 210;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "TPCooking";
    (Array.isArray((Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself]) ? (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] : (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] = [])[0] = "Boost#TP";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "TPCooking";
    (Array.isArray((Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself]) ? (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] : (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] = [])[0] = "Boost#TP";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 115) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Blue";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 450;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
  }
  if (nw.monstertype[this.myself] === 116) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Yellow";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 2060;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 450;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[1] = "HelpOut";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[1] = "HelpOut";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[1] = 1;
  }
  if (nw.monstertype[this.myself] === 117) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Seth";
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 3600;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 3600;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 160;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "FlatterX";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "50%#Mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 118) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Pink";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 7000;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 7000;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 0;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Flirt";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "Doki+1";
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[1] = 20;
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "MegaFlirt";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "Doki+5";
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[2] = 150;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[3] = "MegaFlirtX";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[3] = "Doki+5";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[3] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[4] = "GigaFlirt";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[4] = "Doki+10";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[4] = 4;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[4] = 200;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "Flirt";
    (Array.isArray((Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself]) ? (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] : (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] = [])[0] = "Doki +1";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself]) ? (Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself] : (Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself] = [])[0] = 20;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[1] = "MegaFlirt";
    (Array.isArray((Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself]) ? (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] : (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] = [])[1] = "Doki +5";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself]) ? (Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself] : (Array.isArray(nw.actcostsus) ? nw.actcostsus : nw.actcostsus = [])[this.myself] = [])[1] = 150;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[2] = "ShareFood";
    (Array.isArray((Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself]) ? (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] : (Array.isArray(nw.actdescsus) ? nw.actdescsus : nw.actdescsus = [])[this.myself] = [])[2] = "Item in#Exchange#For doki";
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "Flirt";
    (Array.isArray((Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself]) ? (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] : (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] = [])[0] = "Doki +1";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself]) ? (Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself] : (Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself] = [])[0] = 20;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[1] = "MegaFlirt";
    (Array.isArray((Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself]) ? (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] : (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] = [])[1] = "Doki +5";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself]) ? (Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself] : (Array.isArray(nw.actcostral) ? nw.actcostral : nw.actcostral = [])[this.myself] = [])[1] = 150;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[2] = "LovelyBoy";
    (Array.isArray((Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself]) ? (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] : (Array.isArray(nw.actdescral) ? nw.actdescral : nw.actdescral = [])[this.myself] = [])[2] = "Max TP#14% UP";
  }
  if (nw.monstertype[this.myself] === 119) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Flowery";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 7000;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 7000;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 0;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Posey";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "10%#Mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[1] = 160;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = "PoseyZ";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[2] = "10%#Mercy";
    (Array.isArray((Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself]) ? (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] : (Array.isArray(nw.actactor) ? nw.actactor : nw.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself]) ? (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] : (Array.isArray(nw.actcost) ? nw.actcost : nw.actcost = [])[this.myself] = [])[2] = 125;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 120) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Ball";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 21;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 280;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Flatter";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "60%#Mercy";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 121) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Trashy Trio";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 21;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 280;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 0;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
  }
  if (nw.monstertype[this.myself] === 122) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Nubert";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 21;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 280;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = "Flatter";
    (Array.isArray((Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself]) ? (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] : (Array.isArray(nw.actdesc) ? nw.actdesc : nw.actdesc = [])[this.myself] = [])[1] = "60%#Mercy";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (nw.monstertype[this.myself] === 123) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = "Example";
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 1200;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 16;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 280;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray(nw.mercymod) ? nw.mercymod : nw.mercymod = [])[this.myself] = 0;
    (Array.isArray(nw.mercymax) ? nw.mercymax : nw.mercymax = [])[this.myself] = 100;
  }
  if (nw.monstertype[this.myself] === 500) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = Wp("stringset").call(this, "Multiboss Example");
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 7;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 20;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = Wp("stringset").call(this, "Taunt");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = Wp("stringset").call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = Wp("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[2] = Wp("stringset").call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[3] = Wp("stringset").call(this, "Loner");
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = Wp("stringset").call(this, "CoolDance");
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[2] = Wp("stringset").call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[2] = 0;
  }
  if (nw.monstertype[this.myself] === 501) {
    (Array.isArray(nw.monstername) ? nw.monstername : nw.monstername = [])[this.myself] = Wp("stringset").call(this, "Multiboss C Example");
    (Array.isArray(nw.monstermaxhp) ? nw.monstermaxhp : nw.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterhp) ? nw.monsterhp : nw.monsterhp = [])[this.myself] = 130;
    (Array.isArray(nw.monsterat) ? nw.monsterat : nw.monsterat = [])[this.myself] = 7;
    (Array.isArray(nw.monsterdf) ? nw.monsterdf : nw.monsterdf = [])[this.myself] = 0;
    (Array.isArray(nw.monsterexp) ? nw.monsterexp : nw.monsterexp = [])[this.myself] = 0;
    (Array.isArray(nw.monstergold) ? nw.monstergold : nw.monstergold = [])[this.myself] = 20;
    (Array.isArray(nw.sparepoint) ? nw.sparepoint : nw.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[0] = Wp("stringset").call(this, "Taunt");
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[1] = Wp("stringset").call(this, "SimuDance");
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself]) ? (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] : (Array.isArray(nw.canact) ? nw.canact : nw.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself]) ? (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] : (Array.isArray(nw.actname) ? nw.actname : nw.actname = [])[this.myself] = [])[2] = Wp("stringset").call(this, "SimuFlatter");
    (Array.isArray((Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself]) ? (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] : (Array.isArray(nw.actsimul) ? nw.actsimul : nw.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself]) ? (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] : (Array.isArray(nw.canactsus) ? nw.canactsus : nw.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself]) ? (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] : (Array.isArray(nw.actnamesus) ? nw.actnamesus : nw.actnamesus = [])[this.myself] = [])[3] = "Loner";
    (Array.isArray((Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself]) ? (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] : (Array.isArray(nw.actsimulsus) ? nw.actsimulsus : nw.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself]) ? (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] : (Array.isArray(nw.canactral) ? nw.canactral : nw.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself]) ? (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] : (Array.isArray(nw.actnameral) ? nw.actnameral : nw.actnameral = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself]) ? (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] : (Array.isArray(nw.actsimulral) ? nw.actsimulral : nw.actsimulral = [])[this.myself] = [])[2] = 0;
  }
}
WG(WU, "scr_monstersetup");
WX();
var WZ = {
  12: "checkers",
  221: "miniboss_new_section_idea_wip",
  222: "miniboss_new_section_idea_wip",
  232: "castle_top"
};
var We = {
  230: "plain"
};
var WF = "battle";
WX();
WX();
var {
  obj_flowery_enemy: Wq
} = nD;
var WY = "room_dw_fcastle_flowerclimb";
var WI = "room_dw_post_flowery_battle";
var WL = new Set(["obj_mainchara", "obj_mainchara_dash", "obj_caterpillar_dash", "obj_kris_headobj", "obj_ch5_DW29", "obj_ch5_DW29_power_up", "obj_ch5_DW29_power_up_flowery"]);
var Wi = [];
var WP = false;
function Wc() {
  if (!WP) {
    WP = true;
    for (let [tk, tC] of Object.entries(Y || {})) {
      let tv = nS[tk];
      if (!tv || tv === tC || WL.has(tk)) {
        continue;
      }
      let D0 = {
        Stub: tv,
        proto: Object.getPrototypeOf(tv.prototype),
        ctor: Object.getPrototypeOf(tv),
        kinds: tv.kinds
      };
      Object.setPrototypeOf(tv.prototype, tC.prototype);
      Object.setPrototypeOf(tv, tC);
      tv.kinds = tC.kinds;
      Wi.push(D0);
    }
    for (let [D1, D2] of Object.entries(Z || {})) {
      for (let D3 of new Set([L[D1], nD[D1], nS[D1]])) {
        if (typeof D3 != "function" || !D3.kinds) {
          continue;
        }
        let D4 = D2.filter(D5 => !D3.kinds.has(D5));
        if (D4.length) {
          Wu.push([D3, D3.kinds]);
          D3.kinds = new Set([...D3.kinds, ...D4]);
        }
      }
    }
    for (let [D5, D6] of Object.entries(F || {})) {
      if (D6) {
        W3.set(D5, D6);
      }
    }
    if (!Object.prototype.hasOwnProperty.call(W9.prototype, "UnknownEnum")) {
      Object.defineProperty(W9.prototype, "UnknownEnum", {
        configurable: true,
        get: () => WN
      });
    }
    Wl.reindex();
    Wo(U || {}, "c5fl2", true);
    nz("c5fl2");
    WV();
  }
}
WG(Wc, "upgradeStubs");
var WO = [];
function WV() {
  if (WO.length) {
    return;
  }
  let tk = new Set(nJ.map(([tC, tv]) => tC + "|" + tv));
  for (let [tC, tv] of Object.entries(L)) {
    if (typeof tv == "function" && !!tv.prototype) {
      for (let D0 of Object.getOwnPropertyNames(tv.prototype)) {
        if (!D0.startsWith("collide_")) {
          continue;
        }
        let D1 = D0.slice(8);
        if (tk.has(tC + "|" + D1)) {
          continue;
        }
        tk.add(tC + "|" + D1);
        let D2 = [tC, D1, (D3, D4) => {
          let D5 = D3[D0];
          if (typeof D5 == "function") {
            D5.call(D3, D4);
          }
        }];
        nJ.push(D2);
        WO.push(D2);
      }
    }
  }
}
WG(WV, "addStageCollisions");
function WJ() {
  while (WO.length) {
    let tk = WO.pop();
    let tC = nJ.indexOf(tk);
    if (tC >= 0) {
      nJ.splice(tC, 1);
    }
  }
}
WG(WJ, "removeStageCollisions");
var Wu = [];
var WN = new Proxy({}, {
  get: WG((tk, tC) => {
    let tv = /^Value_(m?)(\d+)$/.exec(String(tC));
    if (tv) {
      if (tv[1]) {
        return -Number(tv[2]);
      } else {
        return Number(tv[2]);
      }
    } else {
      return undefined;
    }
  }, "get")
});
function Ww() {
  WP = false;
  WJ();
  while (Wu.length) {
    let [tk, tC] = Wu.pop();
    tk.kinds = tC;
  }
  W3.clear();
  if (Object.prototype.hasOwnProperty.call(W9.prototype, "UnknownEnum")) {
    delete W9.prototype.UnknownEnum;
  }
  Wl.reindex();
  while (Wi.length) {
    let tv = Wi.pop();
    Object.setPrototypeOf(tv.Stub.prototype, tv.proto);
    Object.setPrototypeOf(tv.Stub, tv.ctor);
    tv.Stub.kinds = tv.kinds;
  }
}
WG(Ww, "downgradeStubs");
var WQ = {
  obj_plat_floortex_FLOOR_AlignBottom1TILE: ["spr_floortex_TILES_AlignBottom1TILE", 160, 160, 0, 120],
  obj_solidblocksized: ["spr_block_sized"],
  obj_solidblockDark: ["spr_block_sized"],
  obj_castlereflect: ["spr_swordarea"],
  obj_custom_interactable_solid: ["spr_whitepixel"]
};
function Wz(tk) {
  let tC = WQ[tk];
  if (!tC) {
    return null;
  }
  let [tv, D0, D1, D2, D3] = tC;
  if (!W0[tv] && D0) {
    W0[tv] = {
      name: tv,
      w: D0,
      h: D1,
      ox: D2,
      oy: D3,
      frames: 1,
      bb: [0, 0, D0 - 1, D1 - 1],
      precise: false,
      img: [{
        width: D0,
        height: D1
      }]
    };
  }
  if (W0[tv]) {
    return tv;
  } else {
    return null;
  }
}
WG(Wz, "eventlessSprite");
for (let [D7, D8] of [["obj_plat_entity", "spr_plat_entity"], ["obj_plat_player", "spr_kris_plat_idle"], ["obj_mainchara_dash", null]]) {
  let D9 = L[D7];
  if (typeof D9 != "function" || Object.prototype.hasOwnProperty.call(D9, "defaultMask")) {
    continue;
  }
  let Dn = D8 || D9.defaultSprite;
  if (Dn) {
    D9.defaultMask = Dn;
  }
}
if (g && !Object.prototype.hasOwnProperty.call(g, "defaultMask")) {
  g.defaultMask = undefined;
}
var WA = new Map();
var WT = WG(tk => {
  if (tk === "obj_mainchara") {
    return nG;
  }
  let tC = L[tk] || nD[tk] || nS[tk];
  if (tC) {
    return tC;
  }
  let tv = (q || {})[tk];
  if (!tv) {
    return null;
  }
  if (!WA.has(tk)) {
    let D0 = L[tv] || nD[tv] || nS[tv];
    if (!D0) {
      return null;
    }
    let D1 = {
      [tk]: class extends D0 {}
    }[tk];
    D1.kinds = WW(tk, D0);
    let D2 = Wz(tk);
    if (D2) {
      D1.defaultSprite = D2;
    }
    WA.set(tk, D1);
  }
  return WA.get(tk);
}, "clsFor");
var WB = new Set(["obj_darkcontroller", "obj_caterpillarchara", "obj_markerAny", "obj_doorAny", "obj_solidblockDark"]);
function Wk(tk) {
  let tC = W0.spr_krisd_dark;
  tk.sprite_index = "spr_krisd_dark";
  tk.initwd = tC ? tC.w * Math.abs(tk.image_xscale || 2) : 38;
  tk.initht = tC ? tC.h * Math.abs(tk.image_yscale || 2) : 76;
  tk.mywidth = tk.initwd;
  tk.myheight = tk.initht;
  tk.nudgex = 0;
  tk.nudgey = 0;
  tk.nudgelerp = 0.1;
  tk.cutscene = 0;
  tk.facing = 0;
  tk.fun = 0;
  tk.press_l = 0;
  tk.press_r = 0;
  tk.press_u = 0;
  tk.press_d = 0;
  tk.dsprite = "spr_krisd_dark";
  tk.rsprite = "spr_krisr_dark";
  tk.usprite = "spr_krisu_dark";
  tk.lsprite = "spr_krisl_dark";
  tk.swordfacing = 1;
  tk.swordsprite = tk.rsprite;
  tk.set_facing = function () {
    let tv = nw.facing;
    if (tv === 0) {
      this.sprite_index = this.dsprite;
    }
    if (tv === 1) {
      this.sprite_index = this.rsprite;
    }
    if (tv === 2) {
      this.sprite_index = this.usprite;
    }
    if (tv === 3) {
      this.sprite_index = this.lsprite;
    }
  };
}
WG(Wk, "standInMainchara");
function WC(tk) {
  if (!tk.destroyed) {
    if (typeof tk.roomEnd == "function") {
      try {
        tk.roomEnd();
      } catch (tC) {
        console.warn("roomEnd", tk.constructor.name, tC);
      }
    }
    tk.destroyed = true;
    if (typeof tk.cleanUp == "function") {
      try {
        tk.cleanUp();
      } catch (tv) {
        console.warn("cleanUp", tk.constructor.name, tv);
      }
    }
    Wl.remove(tk);
  }
}
WG(WC, "roomEndRemove");
function Wv() {
  Wl.view.x = 0;
  Wl.view.y = 0;
  Wl.view.live = false;
  Wl.view.target = null;
  Wl.view.follow = null;
  Wl.room.w = 640;
  Wl.room.h = 480;
  np(640, 480);
  nZ(null);
  if (nP.impl && nP.impl.__c5) {
    nP.impl = null;
  }
  Ww();
  nz(null);
}
WG(Wv, "resetRoomState");
var t0 = class DW extends W9 {
  create() {
    this.visible = false;
    this.persistent = true;
    this.depth = -1000000000;
    this.pending = null;
    this.roomName = null;
    this.layers = [];
    this.viewx = 0;
    this.viewy = 0;
    this.roomw = 640;
    this.roomh = 480;
    this.stage = "battle";
    this.stageTimer = 0;
    this.rooms = [];
    this.impl = t2(this);
    this.border = [160, 240];
    this.follow = () => {
      let tk = Wl.view.target;
      if (typeof tk == "number") {
        tk = nB(tk);
      }
      if (!tk || typeof tk != "object" || tk.destroyed) {
        return;
      }
      let tC = 640;
      let tv = 480;
      let [D0, D1] = this.border;
      let D2 = Wl.view.x;
      let D3 = Wl.view.y;
      if (tk.x - D2 < D0) {
        D2 = tk.x - D0;
      } else if (D2 + tC - tk.x < D0) {
        D2 = tk.x + D0 - tC;
      }
      if (tk.y - D3 < D1) {
        D3 = tk.y - D1;
      } else if (D3 + tv - tk.y < D1) {
        D3 = tk.y + D1 - tv;
      }
      D2 = Math.max(0, Math.min(this.roomw - tC, D2));
      D3 = Math.max(0, Math.min(this.roomh - tv, D3));
      Wl.view.x = D2;
      Wl.view.y = D3;
      this.viewx = D2;
      this.viewy = D3;
    };
  }
  goto(tk) {
    this.pending = String(tk);
  }
  applyView() {
    Wl.view.live = true;
    Wl.view.x = this.viewx;
    Wl.view.y = this.viewy;
    Wl.room.w = this.roomw;
    Wl.room.h = this.roomh;
    np(this.roomw, this.roomh);
    nZ(this.roomName);
    nP.impl = this.impl;
    Wl.view.follow = this.follow;
    Wc();
  }
  beginStep() {
    if (this.pending) {
      let tk = this.pending;
      this.pending = null;
      this.enterRoom(tk);
    }
    if (this.roomName) {
      this.applyView();
    }
  }
  enterRoom(tk) {
    if (tk === WI) {
      nw.fighting = 0;
      nw.battleover ||= "win";
      return;
    }
    let tC = P[tk];
    if (!tC) {
      console.warn("ch5_climb: no room data for " + tk);
      nw.battleover ||= "story";
      return;
    }
    for (let D1 of Wl.list.slice()) {
      if (D1 !== this && !D1.destroyed && !D1.persistent) {
        WC(D1);
      }
    }
    this.roomName = tk;
    this.rooms.push(tk);
    let tv = {
      entrance_animation: 0,
      facing: 0,
      floortex_load_mode: 1,
      interact: 0,
      is_console: 0,
      lcharname: "Kris",
      marker_lerpX: -4,
      marker_lerpY: -4,
      msc: 0,
      parallax_focal_length: 160,
      pause_plat: false,
      plat_hspeed: -999,
      plat_vspeed: -999,
      start_in_dashmode: 0,
      start_in_platmode: 0,
      menuno: 0
    };
    for (let [D2, D3] of Object.entries(tv)) {
      if (nw[D2] === undefined) {
        nw[D2] = D3;
      }
    }
    if (nw.flowery_battle_items === undefined) {
      nw.flowery_battle_items_used = false;
      nw.flowery_battle_items = Array.isArray(nw.item) ? nw.item.slice() : [];
    }
    nw.currentroom = tk;
    this.roomw = tC.w;
    this.roomh = tC.h;
    let D0 = tC.views && tC.views[0];
    this.viewx = D0 ? D0.x : 0;
    this.viewy = D0 ? D0.y : 0;
    this.border = D0 ? [D0.bx || 0, D0.by || 0] : [0, 0];
    Wl.view.target = null;
    if (tk === WY) {
      this.stage = "throw";
      this.stageTimer = 0;
    } else {
      this.stage = tk;
      this.stageTimer = 0;
    }
    this.applyView();
    this.layers = u(tC, {
      hide: tC.layers.map(D4 => D4.name).filter(D4 => /DEBUG/.test(D4))
    });
    w(tC, D4 => WT(D4), {
      skip: WB,
      host: this,
      onMade: (D4, D5) => {
        if (D5.obj === "obj_mainchara") {
          Wk(D4);
        }
      }
    });
    Q(new Set([this]));
    this.viewx = Wl.view.x;
    this.viewy = Wl.view.y;
  }
  step() {
    this.stageTimer++;
    if (this.stage === "throw" && !Wl.exists("obj_battlecontroller")) {
      this.stage = "climb";
      this.stageTimer = 0;
    }
  }
  endStep() {
    if (this.roomName) {
      this.viewx = Wl.view.x;
      this.viewy = Wl.view.y;
    }
  }
  cleanUp() {
    Wv();
  }
};
WG(t0, "obj_c5_roomhost");
WS(t0, "kinds", new Set([...WW("obj_c5_roomhost", W9), "__roomhost"]));
var t1 = t0;
function t2(tk) {
  let tC = B(() => tk.layers);
  let tv = D5 => (typeof D5 == "string" ? tk.layers.find(D6 => D6.name === D5) : tk.layers[D5 - 1]) || null;
  let D0 = D5 => {
    let D6 = tv(typeof D5 == "object" && D5 ? D5.bgLayer : D5);
    if (D6 && D6.inst && D6.inst.L && D6.inst.L.bg) {
      return D6;
    } else {
      return null;
    }
  };
  let D1 = (D5, D6, Dt) => {
    let DD = D0(D5);
    if (DD) {
      DD.inst.L = {
        ...DD.inst.L,
        bg: {
          ...DD.inst.L.bg,
          [D6]: Dt
        }
      };
    }
  };
  let D2 = D5 => {
    let D6 = tv(D5);
    if (D6 && D6.L && D6.L.tileset) {
      return D6;
    } else {
      return null;
    }
  };
  let D3 = (D5, D6) => {
    if (D6 && !D5.__own) {
      D5.__own = true;
      let Dt = {
        ...D5.L,
        data: D5.L.data.map(DD => DD.slice())
      };
      D5.L = Dt;
      if (D5.inst) {
        D5.inst.L = Dt;
      }
    }
    return D5.L.data;
  };
  let D4 = (D5, D6, Dt) => {
    let DD = D5.L.tileset;
    return [Math.floor((D6 - D5.lx) / DD.tw), Math.floor((Dt - D5.ly) / DD.th)];
  };
  return {
    __c5: true,
    ...tC,
    layer_create(D5, D6) {
      let Dt = {
        name: D6 || "__layer" + (tk.layers.length + 1),
        type: "Background",
        depth: Number(D5) || 0,
        visible: true,
        x: 0,
        y: 0,
        hs: 0,
        vs: 0,
        bg: {
          spr: null,
          visible: true,
          fore: false,
          htile: false,
          vtile: false,
          stretch: false,
          color: 16777215,
          alpha: 1,
          frame: 0,
          speed: 0,
          xs: 1,
          ys: 1
        }
      };
      let DD = nk(0, 0, J, {
        L: Dt,
        room: {
          w: tk.roomw,
          h: tk.roomh
        },
        lx: 0,
        ly: 0,
        shown: false,
        alpha: 1
      });
      DD.depth = Dt.depth;
      tk.layers.push({
        L: Dt,
        name: Dt.name,
        lx: 0,
        ly: 0,
        shown: false,
        depth: Dt.depth,
        inst: DD
      });
      return tk.layers.length;
    },
    layer_background_create(D5, D6) {
      let Dt = tv(D5);
      if (!Dt || !Dt.inst) {
        return -1;
      }
      let DD = typeof D6 == "number" ? nv(D6) : D6;
      Dt.inst.L = {
        ...Dt.inst.L,
        bg: {
          ...Dt.inst.L.bg,
          spr: DD || null
        }
      };
      Dt.L = Dt.inst.L;
      Dt.shown = true;
      Dt.inst.shown = true;
      return {
        bgLayer: tk.layers.indexOf(Dt) + 1
      };
    },
    layer_background_destroy(D5) {
      let D6 = D0(D5);
      if (D6) {
        D6.shown = false;
        D6.inst.shown = false;
      }
    },
    layer_background_htiled: (D5, D6) => D1(D5, "htile", !!D6),
    layer_background_vtiled: (D5, D6) => D1(D5, "vtile", !!D6),
    layer_background_stretch: (D5, D6) => D1(D5, "stretch", !!D6),
    layer_background_speed: (D5, D6) => D1(D5, "speed", Number(D6) || 0),
    layer_background_index: (D5, D6) => D1(D5, "frame", Number(D6) || 0),
    layer_background_xscale: (D5, D6) => D1(D5, "xs", Number(D6)),
    layer_background_yscale: (D5, D6) => D1(D5, "ys", Number(D6)),
    layer_background_alpha: (D5, D6) => D1(D5, "alpha", Number(D6)),
    layer_background_blend: (D5, D6) => D1(D5, "color", D6),
    layer_get_all_elements(D5) {
      let D6 = tv(D5);
      if (!D6) {
        return [];
      }
      let Dt = tk.layers.indexOf(D6) + 1;
      if (D6.L && D6.L.tileset) {
        return [Dt];
      } else if (D6.inst && D6.inst.L && D6.inst.L.bg) {
        return [{
          bgLayer: Dt
        }];
      } else {
        return [];
      }
    },
    layer_get_element_type: D5 => D5 && typeof D5 == "object" && D5.bgLayer ? 1 : typeof D5 == "number" && D2(D5) ? 5 : -1,
    tilemap_get_width: D5 => {
      let D6 = D2(D5);
      if (D6) {
        return D6.L.tilesX;
      } else {
        return 0;
      }
    },
    tilemap_get_height: D5 => {
      let D6 = D2(D5);
      if (D6) {
        return D6.L.tilesY;
      } else {
        return 0;
      }
    },
    tilemap_get_tile_width: D5 => {
      let D6 = D2(D5);
      if (D6) {
        return D6.L.tileset.tw;
      } else {
        return 0;
      }
    },
    tilemap_get_tileset: D5 => {
      let D6 = D2(D5);
      if (D6) {
        return D6.L.tileset.bg;
      } else {
        return -1;
      }
    },
    tilemap_get: (D5, D6, Dt) => {
      let DD = D2(D5);
      return DD && (D3(DD)[Dt] || [])[D6] || 0;
    },
    tilemap_set: (D5, D6, Dt, DD) => {
      let Dh = D2(D5);
      if (!Dh || !Number.isFinite(D6)) {
        return 0;
      }
      let Dj = D3(Dh, true);
      if (Dj[DD] && Dt >= 0 && Dt < Dj[DD].length) {
        Dj[DD][Dt] = D6 >>> 0;
        return 1;
      } else {
        return 0;
      }
    },
    tilemap_get_at_pixel: (D5, D6, Dt) => {
      let DD = D2(D5);
      if (!DD) {
        return 0;
      }
      let [Dh, Dj] = D4(DD, D6, Dt);
      return (D3(DD)[Dj] || [])[Dh] || 0;
    },
    tilemap_set_at_pixel: (D5, D6, Dt, DD) => {
      let Dh = D2(D5);
      if (!Dh || !Number.isFinite(D6)) {
        return 0;
      }
      let [Dj, DM] = D4(Dh, Dt, DD);
      let Dl = D3(Dh, true);
      if (Dl[DM] && Dj >= 0 && Dj < Dl[DM].length) {
        Dl[DM][Dj] = D6 >>> 0;
        return 1;
      } else {
        return 0;
      }
    },
    tilemap_get_cell_x_at_pixel: (D5, D6, Dt) => {
      let DD = D2(D5);
      if (DD) {
        return D4(DD, D6, Dt)[0];
      } else {
        return -1;
      }
    },
    tilemap_get_cell_y_at_pixel: (D5, D6, Dt) => {
      let DD = D2(D5);
      if (DD) {
        return D4(DD, D6, Dt)[1];
      } else {
        return -1;
      }
    },
    draw_tile(D5, D6, Dt, DD, Dh, Dj) {
      let DM = tk.layers.find(DX => DX.L && DX.L.tileset && DX.L.tileset.bg === D6);
      if (!DM || !D5) {
        return;
      }
      let Dl = DM.L.tileset;
      let Do = Dt >>> 0 & 524287;
      if (!Do) {
        return;
      }
      let DG = Do % Dl.cols * (Dl.tw + Dl.bx * 2) + Dl.bx;
      let DS = Math.floor(Do / Dl.cols) * (Dl.th + Dl.by * 2) + Dl.by;
      let Df = Dt >>> 28 & 1;
      let DH = Dt >>> 29 & 1;
      D5.draw_sprite_part_ext(D6, 0, DG, DS, Dl.tw, Dl.th, Dh + (Df ? Dl.tw : 0), Dj + (DH ? Dl.th : 0), Df ? -1 : 1, DH ? -1 : 1, 16777215, 1);
    },
    set_border(D5, D6) {
      tk.border = [Number(D5) || 0, Number(D6) || 0];
    },
    room_goto(D5) {
      let D6 = String(D5);
      if (D6 === "room_gameover") {
        nw.battleover = "lose";
        return;
      }
      tk.goto(D6);
    },
    room_restart() {
      if (tk.roomName) {
        tk.goto(tk.roomName);
      }
    }
  };
}
WG(t2, "makeImpl");
var t3 = {
  room_goto(tk) {
    let tC = String(tk);
    if (tC === "room_gameover") {
      nw.battleover = "lose";
      return;
    }
    if (tC !== WY) {
      return;
    }
    (Wl.first("obj_c5_roomhost") || nk(0, 0, t1)).goto(tC);
  }
};
{
  let Dd = Wq.prototype.step;
  if (typeof Dd != "function") {
    throw new Error("ch5_climb: obj_flowery_enemy has no step() to wrap");
  }
  Wq.prototype.step = function () {
    if (Wl.view.live && !Wl.exists("__roomhost")) {
      Wv();
    }
    let tk = nP.impl;
    if (!Wl.exists("__roomhost")) {
      nP.impl = t3;
    }
    try {
      Dd.call(this);
    } finally {
      if (!Wl.exists("__roomhost")) {
        nP.impl = tk;
      }
    }
  };
  Wq.prototype.step.inner = Dd;
}
{
  let Dx = Wq.prototype.create;
  Wq.prototype.create = function (...tk) {
    for (let tC = 670; tC <= 674; tC++) {
      nw.flag[tC] ||= 1;
    }
    return Dx.apply(this, tk);
  };
  Wq.prototype.create.inner = Dx;
}
nA({
  228: "snd_flowery_voiceclip_yes",
  613: "snd_flowery_voiceclip_last_jarona",
  659: "snd_flowery_voiceclip_omega_flowery",
  752: "snd_flowery_voiceclip_jarona3"
}, 5);
W4(() => {
  if (Wl.view.live || WP) {
    Wv();
  }
});
{
  let Db = g;
  let Dg = Db && Db.prototype.draw;
  let DK = WG(tk => tk === 16777215 || typeof tk == "string" && /^(#?f{3}(f{3})?|rgb\(255,\s*255,\s*255\))$/i.test(tk), "white");
  let DE = WG(tk => {
    let tC = tv => {
      let D0 = Math.abs((tk + tv) % 1 * 6 - 3);
      return Math.round(Math.min(1, Math.max(0, Math.min(1, D0 - 1)) * 3.7) * 255);
    };
    return "rgb(" + tC(1) + "," + tC(0.6666666666666666) + "," + tC(0.3333333333333333) + ")";
  }, "hsv");
  if (typeof Dg == "function") {
    Db.prototype.draw = function (tk) {
      let tC = W2;
      if (!tC || !tC.ctx || typeof tC.draw_sprite_ext != "function") {
        return Dg.call(this, tk);
      }
      let tv = Object.prototype.hasOwnProperty.call(tC, "draw_sprite_ext") ? tC.draw_sprite_ext : null;
      let D0 = tC.draw_sprite_ext;
      let D1 = (Wl.frame || 0) * 33.333333333333336 * 0.07;
      tC.draw_sprite_ext = function (D2, D3, D4, D5, D6, Dt, DD, Dh, Dj) {
        if (this.ctx && this.ctx.globalCompositeOperation === "lighter" && DK(Dh)) {
          let DM = (0.5 + (D1 * 0.033 + (D4 + D5) * 0.01) * 0.5 % 1) % 1;
          return D0.call(this, D2, D3, D4, D5, D6, Dt, DD, DE(DM), (Dj === undefined ? 1 : Dj) * 0.25);
        }
        return D0.apply(this, arguments);
      };
      try {
        return Dg.call(this, tk);
      } finally {
        if (tv) {
          tC.draw_sprite_ext = tv;
        } else {
          delete tC.draw_sprite_ext;
        }
      }
    };
    Db.prototype.draw.inner = Dg;
  }
}
{
  let DR = n7;
  let Dm = DR && DR.prototype.draw;
  let Dp = 20;
  let Dy = WG(tk => tk - Math.floor(tk), "mod1");
  let DU = WG((tk, tC) => {
    let tv = document.createElement("canvas");
    tv.width = tk;
    tv.height = tC;
    let D0 = tv.getContext("2d");
    if (D0) {
      D0.imageSmoothingEnabled = false;
    }
    return tv;
  }, "canvas");
  let DZ = WG(tk => {
    let tC = typeof tk == "string" && tk.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (tC) {
      return [Number(tC[1]), Number(tC[2]), Number(tC[3])];
    } else {
      return [ne(tk), nF(tk), nY(tk)];
    }
  }, "rgb");
  let De = [3, 7, 11, 15, 19];
  let DF = WG(() => {
    let tk = W0.spr_towery_vines_depth;
    let tC = W0.spr_towery_vines;
    if (!tk || !tC || !tk.img || !tC.img || !tk.img[0]) {
      return null;
    }
    let tv = [[tk, 0], [tC, 1], [tC, 2], [tC, 3]].map(([Do, DG]) => [Do, Do.img[Math.min(DG, Do.frames - 1)]]);
    if (tv.some(([, Do]) => !Do || !Do.width)) {
      return null;
    }
    let D0 = tv.reduce((Do, [, DG]) => Do + DG.width, 0);
    let D1 = Math.max(...tv.map(([, Do]) => Do.height));
    let D2 = document.createElement("canvas");
    D2.width = D0;
    D2.height = D1;
    let D3 = D2.getContext("2d", {
      willReadFrequently: true
    });
    let D4 = 0;
    let D5 = tv.map(([, Do]) => {
      D3.drawImage(Do, D4, 0);
      D4 += Do.width;
      return D4 - Do.width;
    });
    let D6 = new Uint32Array(D3.getImageData(0, 0, D0, D1).data.buffer);
    let Dt = Do => {
      let [DG, DS] = tv[Do];
      let Df = D5[Do];
      let DH = DG.w;
      let DX = DG.h;
      if (DS.width !== DH || DS.height !== DX) {
        let Du = document.createElement("canvas");
        Du.width = 360;
        Du.height = 360;
        let DN = Du.getContext("2d", {
          willReadFrequently: true
        });
        for (let Dw = 0; Dw < 360; Dw += DX) {
          for (let DQ = 0; DQ < 360; DQ += DH) {
            DN.drawImage(DS, DQ, Dw);
          }
        }
        return DN.getImageData(0, 0, 360, 360);
      }
      let DV = new ImageData(360, 360);
      let DJ = new Uint32Array(DV.data.buffer);
      for (let Dz = 0; Dz < 360; Dz++) {
        let DA = Dz % DX * D0 + Df;
        for (let DT = 0; DT < 360; DT++) {
          DJ[Dz * 360 + DT] = D6[DA + DT % DH];
        }
      }
      return DV;
    };
    let DD = Dt(0).data;
    let Dh = [0.6, 0.7333333333333333, 0.6];
    let Dj = [];
    let DM = De.map(Do => 1 - (Do - 1) * 0.05);
    let Dl = De.map(() => new ImageData(360, 360).data);
    for (let Do = 0; Do < DD.length; Do += 4) {
      let DG = DD[Do + 3] / 255;
      let DS = DD[Do];
      let Df = DD[Do + 1];
      let DH = DD[Do + 2];
      if (!(DG < DM[DM.length - 1]) && DS + Df + DH !== 0 && !(Math.min(1, Math.ceil(DG - 0.01)) <= 0)) {
        for (let DX = 0; DX < DM.length; DX++) {
          if (DG < DM[DX]) {
            continue;
          }
          let DV = Dl[DX];
          DV[Do] = DS * Dh[0];
          DV[Do + 1] = Df * Dh[1];
          DV[Do + 2] = DH * Dh[2];
          DV[Do + 3] = 255;
        }
      }
    }
    De.forEach((DJ, Du) => {
      let DN = DU(360, 360);
      DN.getContext("2d").putImageData(new ImageData(Dl[Du], 360, 360), 0, 0);
      Dj.push({
        L: DN,
        i: DJ - 1.5
      });
    });
    for (let DJ = 1; DJ <= 3; DJ++) {
      let Du = Dt(DJ);
      let DN = Du.data;
      for (let DQ = 0; DQ < DN.length; DQ += 4) {
        DN[DQ] *= Dh[0];
        DN[DQ + 1] *= Dh[1];
        DN[DQ + 2] *= Dh[2];
      }
      let Dw = DU(360, 360);
      Dw.getContext("2d").putImageData(Du, 0, 0);
      Dj.push({
        L: Dw,
        i: 19 + DJ
      });
    }
    return Dj;
  }, "buildLayers");
  let Dq = WG((tk, tC) => {
    if (!tk.groupsBack) {
      tk.groupsBack = tk.layers.map(({
        i: D0
      }) => ({
        cv: DU(360, 720),
        i: D0
      }));
      tk.groupsFront = tk.groupsBack.slice().reverse();
      tk.tint = DU(360, 360);
    }
    let tv = tk.tint.getContext("2d");
    tk.layers.forEach(({
      L: D0
    }, D1) => {
      tv.globalCompositeOperation = "source-over";
      tv.clearRect(0, 0, 360, 360);
      tv.drawImage(D0, 0, 0);
      tv.globalCompositeOperation = "multiply";
      tv.fillStyle = "rgb(" + tC + ")";
      tv.fillRect(0, 0, 360, 360);
      tv.globalCompositeOperation = "destination-in";
      tv.drawImage(D0, 0, 0);
      let D2 = tk.groupsBack[D1].cv.getContext("2d");
      D2.setTransform(1, 0, 0, 1, 0, 0);
      D2.globalAlpha = 1;
      D2.globalCompositeOperation = "source-over";
      D2.clearRect(0, 0, 360, 720);
      D2.drawImage(tk.tint, 0, 0);
      D2.drawImage(tk.tint, 0, 360);
    });
    tk.tintKey = tC;
  }, "retint");
  let DY = WG((tk, tC) => {
    let tv = tk.blend;
    let D0 = tv.join(",");
    if (tk.shadeKey === D0) {
      return;
    }
    let D1 = !tk.shadeC;
    if (D1) {
      tk.shadeC = DU(240, 1);
      tk.shadeK = DU(240, 1);
    }
    let D2 = tk.shadeC.getContext("2d");
    let D3 = tk.shadeK.getContext("2d");
    D2.clearRect(0, 0, 240, 1);
    for (let D4 = 0; D4 < 240; D4++) {
      let D5 = (tC + (D4 + 0.5) / 240 * 120) / 360;
      let D6 = Math.abs((D5 * 2 - 1) * 3);
      let Dt = Math.floor(Math.pow(D6, 3) / 2 * 10) / 10;
      if (Dt > 0) {
        D2.fillStyle = "rgba(" + tv[0] + "," + tv[1] + "," + tv[2] + "," + Dt + ")";
        D2.fillRect(D4, 0, 1, 1);
      }
      if (D1) {
        let DD = Math.min(1, Dt * 2 + (1 - Dt * 2) * D6);
        if (DD < 1) {
          D3.fillStyle = "rgba(0,0,0," + (1 - DD) + ")";
          D3.fillRect(D4, 0, 1, 1);
        }
      }
    }
    tk.shadeKey = D0;
  }, "shade");
  let DI = WG((tk, tC, tv, D0, D1, D2, D3) => {
    let D4 = tC.getContext("2d");
    D4.setTransform(1, 0, 0, 1, 0, 0);
    D4.globalCompositeOperation = "source-over";
    D4.globalAlpha = 1;
    D4.clearRect(0, 0, 240, 720);
    let D5 = 120.00833333333334;
    let D6 = Math.round(Dy(-D0) * 360) % 360;
    let Dt = D1 ? tk.groupsFront : tk.groupsBack;
    let DD = tk.xmap ||= new Array(Dp + 1);
    for (let Dl = 0; Dl <= Dp; Dl++) {
      let Do = (D5 + Dl / Dp * 120) / 360;
      let DG = Math.max(-1, Math.min(1, (Do * 2 - 1) * 3));
      DD[Dl] = Math.acos(-DG) / Math.PI / 2 - 0.5 + tv;
    }
    let Dh = D6 + D2 / 2;
    let Dj = (D3 - D2) / 2;
    let DM = D3 - D2;
    for (let {
      cv: DS,
      i: Df
    } of Dt) {
      let DH = 2 - Df * 0.008333333333333333;
      let DX = 120 - DH * 60;
      let DV = DH * 120;
      for (let DJ = 0; DJ < Dp; DJ++) {
        let Du = DD[DJ];
        let DN = DD[DJ + 1];
        let Dw = DX + DJ / Dp * DV;
        let DQ = DX + (DJ + 1) / Dp * DV;
        let Dz = Math.floor(Du);
        let DA = Math.floor(DN - 1e-9);
        if (Dz === DA) {
          let DB = Du - Dz;
          let Dk = DN - Dz;
          let DC = DQ - Dw;
          if (DC > 0) {
            D4.drawImage(DS, DB * 360, Dh, Math.max(0.5, (Dk - DB) * 360), Dj, Dw, D2, DC, DM);
          }
          continue;
        }
        let DT = Dw + (DQ - Dw) * ((Dz + 1 - Du) / (DN - Du));
        {
          let Dv = Du - Dz;
          let h0 = DT - Dw;
          if (h0 > 0) {
            D4.drawImage(DS, Dv * 360, Dh, Math.max(0.5, (1 - Dv) * 360), Dj, Dw, D2, h0, DM);
          }
        }
        {
          let h1 = DN - DA;
          let h2 = DQ - DT;
          if (h2 > 0) {
            D4.drawImage(DS, 0, Dh, Math.max(0.5, h1 * 360), Dj, DT, D2, h2, DM);
          }
        }
      }
    }
    D4.globalCompositeOperation = "source-atop";
    DY(tk, D5);
    D4.imageSmoothingEnabled = false;
    D4.drawImage(tk.shadeC, 0, 0, 240, 1, 0, D2, 240, DM);
    if (!D1) {
      D4.drawImage(tk.shadeK, 0, 0, 240, 1, 0, D2, 240, DM);
    }
    D4.globalCompositeOperation = "source-over";
  }, "face");
  let DL = WG((tk, tC, tv, D0, D1) => {
    let D2 = tC.getContext("2d");
    D2.setTransform(1, 0, 0, 1, 0, 0);
    D2.globalCompositeOperation = "source-over";
    D2.clearRect(0, 0, 240, 720);
    D2.drawImage(tk, 0, D0, 240, D1 - D0, 0, D0, 240, D1 - D0);
    D2.globalCompositeOperation = "source-in";
    D2.fillStyle = "rgb(" + tv[0] + "," + tv[1] + "," + tv[2] + ")";
    D2.fillRect(0, D0, 240, D1 - D0);
    D2.globalCompositeOperation = "source-over";
  }, "silhouette");
  let Di = WG((tk, tC) => {
    let tv = 0;
    let D0 = 720;
    try {
      let D1 = tk.getTransform();
      let D2 = tk.canvas && tk.canvas.height;
      if (D1 && !D1.b && !D1.c && D1.d > 0 && D2 > 0) {
        let D3 = (0 - D1.f) / D1.d;
        let D4 = (D2 - D1.f) / D1.d;
        tv = Math.max(0, Math.floor((D3 - tC - 16) / 2) * 2);
        D0 = Math.min(720, Math.ceil((D4 - tC + 16) / 2) * 2);
      }
    } catch {
      tv = 0;
      D0 = 720;
    }
    if (D0 > tv) {
      return [tv, D0];
    } else {
      return null;
    }
  }, "band");
  let DP = null;
  let Dc = WG(() => {
    let tk = W0.spr_towery_vines_depth;
    let tC = tk && tk.img && tk.img[0];
    if (DP && DP.src === tC) {
      return DP;
    }
    let tv = null;
    try {
      tv = DF();
    } catch {
      tv = null;
    }
    if (tv) {
      DP = {
        src: tC,
        layers: tv,
        tintKey: "",
        front: DU(240, 720),
        back: DU(240, 720),
        sf: DU(240, 720),
        sb: DU(240, 720)
      };
      return DP;
    } else {
      return null;
    }
  }, "textures");
  let DO = WG((tk, tC) => {
    let tv = Dc();
    if (!tv) {
      tk.__T2 = {
        failed: true
      };
      return false;
    }
    tk.__T2 = tv;
    let D0 = DZ(tk.brightness).join(",");
    if (tv.tintKey !== D0) {
      Dq(tv, D0);
    }
    tv.blend = DZ(tk.towerCol);
    let D1 = nT(tk.fixed_position) ? 320 : tk.x;
    let D2 = (Wl.view.y || 0) - 120;
    let D3 = tC.ctx;
    let D4 = Di(D3, D2);
    if (!D4) {
      return true;
    }
    let [D5, D6] = D4;
    let Dt = D6 - D5;
    let DD = tk.rotation / 360;
    let Dh = tk.finalheight / 360 / 2;
    DI(tv, tv.back, Dy(DD + 0.5), Dh, false, D5, D6);
    DI(tv, tv.front, DD, Dh, true, D5, D6);
    let Dj = DZ(tk.outlineCol);
    DL(tv.front, tv.sf, Dj, D5, D6);
    DL(tv.back, tv.sb, Dj, D5, D6);
    D3.save();
    D3.globalAlpha = 1;
    D3.drawImage(tv.sf, 0, D5, 240, Dt, D1 - 120 - 2, D2 + D5, 240, Dt);
    D3.drawImage(tv.sf, 0, D5, 240, Dt, D1 - 120 + 2, D2 + D5, 240, Dt);
    D3.save();
    D3.translate(D1 + 120 - 2, D2);
    D3.scale(-1, 1);
    D3.drawImage(tv.sb, 0, D5, 240, Dt, 0, D5, 240, Dt);
    D3.restore();
    D3.save();
    D3.translate(D1 + 120 + 2, D2);
    D3.scale(-1, 1);
    D3.drawImage(tv.sb, 0, D5, 240, Dt, 0, D5, 240, Dt);
    D3.restore();
    D3.save();
    D3.translate(D1 + 120, D2);
    D3.scale(-1, 1);
    D3.drawImage(tv.back, 0, D5, 240, Dt, 0, D5, 240, Dt);
    D3.restore();
    D3.drawImage(tv.front, 0, D5, 240, Dt, D1 - 120, D2 + D5, 240, Dt);
    D3.restore();
    return true;
  }, "draw");
  if (typeof Dm == "function" && typeof document !== "undefined") {
    DR.prototype.draw = function (tk) {
      if (!tk || tk.headless || !tk.ctx || globalThis.__towerOrig || this.__towerErr || this.__T2 && this.__T2.failed) {
        return Dm.call(this, tk);
      }
      let tC = Object.create(tk);
      tC.headless = true;
      let tv = Dm.call(this, tC);
      try {
        DO(this, tk);
      } catch (D0) {
        this.__towerErr = String(D0 && D0.stack || D0);
      }
      return tv;
    };
    DR.prototype.draw.inner = Dm;
  }
}
globalThis.__c5climb = {
  obj_c5_roomhost: t1,
  RoomBuildErrors: O
};
WX();
var t4 = ng.prototype.draw;
var t5 = WG(tk => tk.snapback !== undefined && !tk.snapback, "noSnap");
var t6 = WG(tk => tk.killamount !== undefined || tk.killspeed !== undefined || t5(tk) || tk.reverse || tk.noextend, "uses");
ng.prototype.draw = function (tk) {
  if (nw.chapter !== 5) {
    return t4.call(this, tk);
  }
  let tC = null;
  if (this.delaytimer < this.delay) {
    Wl.with("obj_dmgwriter", D3 => {
      if (D3.noextend) {
        (tC ||= []).push([D3, D3.killtimer]);
      }
    });
  }
  if (!t6(this) && !tC) {
    return t4.call(this, tk);
  }
  let tv = this.delaytimer + 1 >= this.delay;
  let D0 = this.y;
  let D1 = this.killactive;
  let D2 = t4.call(this, tk);
  if (tC) {
    for (let [D3, D4] of tC) {
      D3.killtimer = D4;
    }
  }
  if (this.destroyed) {
    return D2;
  }
  if (tv) {
    let D5 = this.killamount === undefined ? 1 : this.killamount;
    if (D5 !== 1) {
      this.killtimer += D5 - 1;
      if (D1 === 0 && this.killactive === 1 && !(this.killtimer > 35)) {
        this.killactive = 0;
        this.kill = 0;
        this.y += 4;
      }
    }
    if (t5(this) && this.bounces >= 2 && D1 === 0 && this.killactive === 0) {
      this.y = D0;
    }
    let D6 = this.killspeed === undefined ? 1 : this.killspeed;
    if (D6 !== 1 && this.killactive === 1) {
      this.kill += (D6 - 1) * 0.08;
    }
    if (this.kill > 1) {
      this.instance_destroy();
      return D2;
    }
  }
  if (this.reverse) {
    if (this.damage === 0.1) {
      this.killamount = 1;
    }
    let Dt = this.damage;
    this.damage = Dt < 0.1 ? Math.min(Dt + 1, 0.1) : Math.max(Dt - 1, 0.1);
    this.damagemessage = "+" + String(Math.round(this.damage)) + "%";
  }
  return D2;
};
ng.prototype.draw.inner = t4;
WX();
{
  let h3 = nK.prototype.drawBody;
  nK.prototype.drawBody = function (tk, ...tC) {
    if (nw.chapter !== 5 || this.state !== 8 || nw.myfight !== 3 || !nw.faceaction || nw.faceaction[this.myself] !== 6) {
      return h3.call(this, tk, ...tC);
    }
    let tv = nw.faceaction;
    let D0 = this.myself;
    tv[D0] = -6;
    try {
      return h3.call(this, tk, ...tC);
    } finally {
      if (tv[D0] === -6) {
        tv[D0] = 6;
      }
    }
  };
  nK.prototype.drawBody.inner = h3;
}
nA({
  6: "snd_whack_absurdlyloud",
  370: "snd_punchheavythunder",
  390: "snd_chargeshot_charge",
  397: "snd_bounceflower_subtle",
  398: "snd_tensionhorn",
  536: "snd_select",
  613: "snd_flowery_voiceclip_last_jarona",
  659: "snd_flowery_voiceclip_omega_flowery",
  684: "snd_harp_strum"
}, 5);
{
  let h4 = n6.prototype.step;
  n6.prototype.step = function () {
    let tk = this.alarm;
    if (tk && tk[1] === 40) {
      tk[1] = 0;
      try {
        return h4.call(this);
      } finally {
        tk[1] = 40;
      }
    }
    return h4.call(this);
  };
  n6.prototype.step.inner = h4;
}
WX();
var t7 = {
  1: "snd_mercyadd",
  12: "snd_flowery_voiceclip_jarona1",
  40: "snd_ja_kidding",
  68: "snd_flowery_voiceclip_jarona4",
  71: "snd_pink_mew",
  124: "snd_forthefans",
  135: "snd_flowery_voiceclip_take_that",
  150: "snd_flowery_voiceclip_jarona2",
  228: "snd_flowery_voiceclip_yes",
  244: "snd_flowery_voiceclip_wow",
  260: "snd_jarona_orange2",
  317: "snd_flowery_voiceclip_hereicomesanfrandisco_strong",
  419: "snd_swing",
  451: "snd_swallow",
  496: "snd_scytheburst",
  613: "snd_flowery_voiceclip_last_jarona",
  659: "snd_flowery_voiceclip_omega_flowery",
  691: "snd_flowery_voiceclip_hoo",
  703: "snd_jarona_orange1",
  722: "snd_pink_throw",
  740: "snd_flowery_voiceclip_prism_blow",
  752: "snd_flowery_voiceclip_jarona3"
};
var t8 = {
  snd_flowery_voiceclip_flowery2: "snd_flowery_voiceclip_flowery2",
  snd_flowery_voiceclip_huh: "snd_flowery_voiceclip_huh",
  snd_flowery_voiceclip_itsmeflowery: "snd_flowery_voiceclip_itsmeflowery",
  snd_flowery_voiceclip_jarona1: "snd_flowery_voiceclip_jarona1",
  snd_flowery_voiceclip_jarona2: "snd_flowery_voiceclip_jarona2",
  snd_flowery_voiceclip_jarona3: "snd_flowery_voiceclip_jarona3",
  snd_flowery_voiceclip_jarona4: "snd_flowery_voiceclip_jarona4",
  snd_flowery_voiceclip_leaf_it_to_me: "snd_flowery_voiceclip_leaf_it_to_me",
  snd_flowery_voiceclip_yes: "snd_flowery_voiceclip_yes",
  snd_forthefans: "snd_forthefans",
  snd_ja_kidding: "snd_ja_kidding",
  snd_jarona_orange1: "snd_jarona_orange1",
  snd_jarona_orange2: "snd_jarona_orange2"
};
nA(t7, 5);
WX();
var {
  GID: t9,
  FIRST: tn,
  SETALL: tW,
  array_length: tD,
  random_range: th,
  irandom_range: tj,
  is_method: tM,
  objectByIndex: tl
} = nE;
var to = {};
var tG = WG(tk => to[tk] || n2[tk] || no[tk] || nE[tk] || (() => {}), "SCRIPT");
var tS = WG((tk, tC) => {
  if (typeof tk == "number") {
    tk = tl(tk);
  }
  if (typeof tk == "function" || typeof tk == "string") {
    return Wl.with(tk, tC);
  }
  if (tk && typeof tk == "object" && !tk.destroyed) {
    tC(tk);
  }
}, "withInst");
var tf = nO;
var tH = nV;
var tX = n3;
function td(tk = 0, tC = 0, tv = 0, D0 = 0, D1 = -1) {
  let D2 = tG("camerax").call(this);
  let D3 = tG("cameray").call(this);
  this.battlewriter = tG("instance_create").call(this, D2 + 30 + tv, D3 + 376 + D0, tf);
  this.myface = tG("instance_create").call(this, D2 + 26 + tk, D3 + 380 + tC, tH);
  tS(this.battlewriter, D4 => {
    D4.dialoguer = 1;
    D4.facer = 1;
    if (nw.fc === 0 && D4.originalcharline === 33) {
      D4.charline = 26;
    }
    if (D1 !== -1) {
      D4.charline = D1;
    }
  });
}
WG(td, "b_make");
function tx() {
  return nC(tf);
}
WG(tx, "b_ex");
function tb() {
  if (nw.flag[1391] === 1) {
    return 0;
  } else {
    return 1;
  }
}
WG(tb, "flvoice");
function tg(tk = this, tC = 0) {
  let tv = 1238;
  if (nT(tC)) {
    tv = 1496;
  }
  let D0 = tG("instance_create").call(this, tk.x, tk.y, tv);
  D0.sprite_index = tk.sprite_index;
  D0.image_alpha = tk.image_alpha;
  D0.image_angle = tk.image_angle;
  D0.image_blend = tk.image_blend;
  D0.image_index = tk.image_index;
  D0.image_speed = tk.image_speed;
  D0.image_xscale = tk.image_xscale;
  D0.image_yscale = tk.image_yscale;
  D0.mask_index = tk.mask_index;
  D0.depth = tk.depth;
  return D0;
}
WG(tg, "scr_marker_frominstance");
Object.assign(to, {
  b_make: td,
  b_ex: tx,
  flvoice: tb,
  scr_marker_frominstance: tg
});
var tK = class h5 extends nf {
  create() {
    this.con = 0;
    this.bcon = 1;
    this.btime = 0;
    this.timer = 0;
    this.btimer = 0;
    this.leftfl = -4;
    this.rightfl = -4;
    this.grumbleflower = -4;
    this.grumble = -4;
    this.stayinteract = 0;
    this.flowerybattle = tG("scr_marker_ext").call(this, tG("camerax").call(this) + 80, tG("cameray").call(this) + 210, "spr_flowery_walk_right_jacket", 2, 2, undefined, undefined, undefined, 160);
  }
  step() {
    let tk = tG("camerax").call(this);
    let tC = tG("cameray").call(this);
    if (this.bcon === 1) {
      let tv = {
        x: tG("camerax").call(this) + 80,
        y: tG("cameray").call(this) + 180
      };
      this.btime++;
      if (this.btime === 20) {
        let D1 = 11;
        tS(this.flowerybattle, D2 => {
          D2.sprite_index = "spr_flowery_walk_downright_jacket";
          tG("scr_lerpvar").call(D2, "x", D2.x, tv.x, D1);
          tG("scr_lerpvar").call(D2, "y", D2.y, tv.y, D1);
        });
        this.bcon = 2;
        tG("scr_delay_var").call(this, "bcon", 3, D1 + 1);
      }
    }
    if (this.bcon === 2) {
      tS(this.flowerybattle, D2 => {
        tS(tG("scr_afterimage").call(D2), D3 => {
          D3.image_alpha = 0.4;
        });
      });
    }
    if (this.bcon === 3.1) {
      this.stayinteract = 1;
      tG("scr_speaker").call(this, "no_name");
      (Array.isArray(nw.msg) ? nw.msg : nw.msg = [])[0] = "* Some enemies showed up!/";
      tG("scr_anyface_next").call(this, "flowery", "0");
      tG("msgnext").call(this, "\\E0\\Vl* Heh^1, Leaf it to me!/%");
      tG("b_make").call(this, 10, -6);
      this.bcon = 3.2;
      this.timer = 0;
    }
    if (this.bcon === 3.2 && !nT(tG("b_ex").call(this))) {
      this.timer++;
      if (this.timer === 6) {
        if (nT(tG("flvoice").call(this))) {
          tG("snd_play_flowery").call(this, 317);
        }
        this.flowerybattle.sprite_index = "spr_flowery_pose";
        tS(this.flowerybattle, D3 => {
          tG("scr_flip").call(D3, "h");
        });
      }
      let D2 = 90;
      if (nT(tG("button3_h").call(this)) || !nT(tG("flvoice").call(this))) {
        D2 = 6;
      }
      if (this.timer >= D2) {
        this.timer = 0;
        this.bcon = 3.25;
      }
    }
    if (this.bcon === 3.25) {
      this.timer++;
      if (this.timer === 1) {
        tS(this.flowerybattle, D3 => {
          tG("scr_flip").call(D3, "h");
          D3.sprite_index = "spr_flowery_shrug_spin";
          D3.image_speed = 0.5;
          D3.image_index = 999;
          D3.depth = 15;
          tG("scr_lerpvar").call(D3, "x", D3.x, tG("camerax").call(D3) + 360, 15);
          D3.vspeed = -18;
          D3.gravity = 2;
        });
      }
      if (t9(this.timer) > 1) {
        let D3 = tG("flrainbow").call(this);
        let D4 = D3[tG("scr_wrap").call(this, this.timer, 0, tD(D3) - 1)];
        tS(this.flowerybattle, D5 => {
          tS(tG("scr_afterimage_fog").call(D5, undefined, D4, 8), D6 => {
            D6.depth = D5.depth + 40 - Wl.first("obj_dw_garden_enemyrush").timer;
            D6.image_speed = 0;
          });
        });
      }
      if (this.timer === 16) {
        tS(this.flowerybattle, D5 => {
          D5.sprite_index = "spr_flowery_walk_downright";
          D5.image_index = 0;
          D5.y = tG("cameray").call(D5) + 164;
          D5.gravity = 0;
          D5.vspeed = 0;
          D5.image_speed = 0;
          tG("snd_play").call(D5, "snd_noise");
          this.bcon = 3.29;
          this.timer = 0;
        });
      }
    }
    if (this.bcon === 3.29) {
      this.timer++;
      if (this.timer === 15) {
        this.timer = 0;
        this.bcon = 3.3;
      }
    }
    if (this.bcon === 3.3) {
      this.timer++;
      let D5 = this.flowerybattle;
      if (this.timer === 5) {
        D5.sprite_index = "spr_flowery_grabfloradins";
        D5.image_index = 0;
        D5.image_speed = 0;
        Wl.with("obj_floradinn_enemy", D6 => {
          if (D6.x < tk + 386) {
            this.leftfl = tG("scr_marker_frominstance").call(D6);
          } else {
            this.rightfl = tG("scr_marker_frominstance").call(D6);
          }
          D6.visible = 0;
        });
        this.leftfl.image_blend = W5.white;
        this.rightfl.image_blend = W5.white;
      }
      if (this.timer === 8) {
        D5.image_index = 1;
      }
      if (this.timer === 11) {
        tG("scr_battle_sprite_set").call(this, "susie", "spr_susie_sheeh", 0, 0);
        Wl.with("obj_herosusie", D6 => {
          tG("scr_shakeobj").call(D6);
        });
        D5.image_index = 2;
        tG("snd_play").call(this, "snd_grab", 0.7, 1);
        this.rightfl.visible = 0;
      }
      if (this.timer === 14) {
        D5.image_index = 3;
      }
      if (this.timer === 17) {
        D5.image_index = 4;
      }
      if (this.timer === 20) {
        D5.image_index = 5;
        tG("snd_play").call(this, "snd_grab", 0.7, 1.2);
        this.leftfl.visible = 0;
      }
      if (this.timer === 23) {
        D5.image_index = 5;
      }
      if (this.timer === 26) {
        D5.image_index = 6;
      }
      if (this.timer === 29) {
        tG("snd_play").call(this, "snd_wing");
        D5.image_index = 7;
      }
      if (this.timer === 33) {
        D5.image_index = 8;
      }
      if (this.timer === 45) {
        tG("snd_play").call(this, "snd_coaster_kiss");
        this.heart = tG("scr_marker_ext").call(this, tk + 386, tC + 102, "spr_kissheart", 2, 2, undefined, undefined, undefined, 0);
        tS(this.heart, D6 => {
          D6.gravity = 0.5;
          D6.vspeed = -3;
          D6.hspeed = 2;
          tG("scr_lerpvar").call(D6, "image_xscale", 2, 1, 12);
          tG("scr_lerpvar").call(D6, "image_yscale", 2, 1, 12);
          tG("scr_lerpvar").call(D6, "image_alpha", 4, 0, 9);
          tG("scr_doom").call(D6, D6, 9);
        });
        D5.image_index = 9;
      }
      if (this.timer === 48) {
        D5.image_index = 10;
      }
      if (this.timer === 51) {
        D5.image_index = 11;
      }
      if (this.timer === 63) {
        D5.image_index = 12;
      }
      if (this.timer === 75) {
        D5.image_index = 13;
      }
      if (this.timer === 83) {
        tG("snd_play").call(this, "snd_wing");
        tG("snd_play").call(this, "snd_sparkle_gem");
        D5.image_index = 14;
        tS(this.leftfl, D6 => {
          D6.image_speed = 0;
          D6.image_index = 0;
          D6.sprite_index = "spr_enemy_floradin_spared";
          tG("scr_flip").call(D6, "h");
          D6.visible = 1;
          tG("setxy").call(D6, tk + 384, tC + 142 + 4);
          D6.depth = D5.depth - 10;
          D6.gravity = 0.5;
          D6.vspeed = -24;
        });
        tS(this.rightfl, D6 => {
          D6.image_speed = 0;
          D6.image_index = 0;
          D6.sprite_index = "spr_enemy_floradin_spared";
          D6.visible = 1;
          tG("setxy").call(D6, tk + 398, tC + 142 + 4);
          D6.depth = D5.depth + 10;
          D6.gravity = 0.5;
          D6.vspeed = -24;
        });
        tS(D5, D6 => {
          tG("scr_delay_var").call(D6, "image_index", 15, 2);
        });
        tS(D5, D6 => {
          tG("scr_delay_var").call(D6, "image_index", 16, 4);
        });
        this.bcon = 3.4;
        this.timer = 0;
      }
    }
    if (this.bcon === 3.4) {
      this.timer++;
      if (this.timer % 2 === 0) {
        let D6 = [this.leftfl, this.rightfl];
        for (let Dt = 0; Dt < tD(D6); Dt++) {
          tS(D6[Dt], DD => {
            let Dh = DD.x + 38 + th(-16, 16);
            if (Dt === 0) {
              Dh -= 76;
            }
            tS(tG("scr_marker_ext").call(DD, Dh, DD.y + 56 + th(-4, 6), "spr_shine_white", 2, 2, 0.2, 0, undefined, DD.depth + 1, undefined, 15), Dj => {
              Dj.gravity = 0.5;
              tG("scr_lerpvar").call(Dj, "image_alpha", th(1, 2), 0, tj(15, 20));
            });
          });
        }
      }
      if (this.timer === 30) {
        this.leftfl.gravity = 0;
        this.leftfl.vspeed = 0;
        this.rightfl.gravity = 0;
        this.rightfl.vspeed = 0;
        this.leftfl.visible = 0;
        this.rightfl.visible = 0;
        nw.typer = 96;
        (Array.isArray(nw.writersnd) ? nw.writersnd : nw.writersnd = [])[0] = "snd_flowery_voiceclip_heh_it_s_my_jarona";
        (Array.isArray(nw.msg) ? nw.msg : nw.msg = [])[0] = "\\E0\\VzHeh^1, How'd you&like my Jarona/%";
        tG("scr_enemyblcon").call(this, this.flowerybattle.x - 40, this.flowerybattle.y + 32, 10);
        tS(this.flowerybattle, DD => {
          DD.x += 8;
          DD.y += 2;
          DD.sprite_index = "spr_flowery_pose_point_cooler";
        });
        tG("snd_play").call(this, "snd_wing");
        this.timer = 0;
        this.bcon = 3.5;
      }
    }
    if (this.bcon === 3.5 && !nT(nC(tX))) {
      tG("safe_delete").call(this, this.leftfl);
      tG("safe_delete").call(this, this.rightfl);
      this.bcon = 9.99;
    }
  }
  endStep() {
    if (t9(this.bcon) > 0) {
      Wl.with("obj_marker", tk => {
        if (tk.sprite_index === "spr_ralseir" || tk.sprite_index === "spr_ralseil" || tk.sprite_index === "spr_ralseiu" || tk.sprite_index === "spr_ralseid") {
          tk.visible = 0;
        }
      });
      Wl.with("obj_afterimage", tk => {
        if (tk.sprite_index === "spr_ralseir" || tk.sprite_index === "spr_ralseil" || tk.sprite_index === "spr_ralseiu" || tk.sprite_index === "spr_ralseid") {
          tk.visible = 0;
        }
      });
      Wl.with("obj_heroralsei", tk => {
        tk.visible = 0;
      });
      Wl.with("obj_caterpillarchara", tk => {
        if (tk.name === "ralsei") {
          tk.visible = 0;
        }
      });
    }
    if (this.bcon === 3) {
      this.bcon = 3.01;
      this.btimer = 0;
    }
    if (this.bcon === 3.01) {
      nw.myfight = 1;
      nw.charturn = nd();
      this.btimer++;
      if (this.btimer === 15) {
        this.bcon = 3.1;
      }
    }
    if (this.bcon === 9.99) {
      Wl.with("obj_battlecontroller", tk => {
        tk.skipvictory = 1;
      });
      tG("safe_delete").call(this, this.grumbleflower);
      tG("safe_delete").call(this, this.grumble);
      tG("scr_wincombat").call(this);
      this.bcon = 10;
    }
  }
};
WG(tK, "obj_dw_garden_enemyrush");
WS(tK, "kinds", WW("obj_dw_garden_enemyrush", nf));
var tE = tK;
function tR() {
  this.mouthmove = 0;
  this.mouthtimer = 0;
  this.face_index = 0;
  this.image_speed = 0;
  this.nowface = nw.fc;
  this.facechange = 2;
  this.rate = 1;
  this.buffer = 4;
  this.f = 1;
  if (nw.darkzone === 1) {
    this.f = 2;
  }
  this.xoff = 0;
  this.yoff = 0;
  this.timer = 0;
  this.subtimer = 0;
  this.offset = 0;
  this.offset_x = 0;
  this.offset_y = 0;
  this.anim = 0;
  this.facecustom = -4;
  this.facecustomindex = 0;
  this.siner = 0;
  Wl.with("obj_yellow_trial_manager", tk => {
    this.depth = -500;
  });
  this.coloroverlay = -4;
}
WG(tR, "face5_create");
function tm() {
  this.buffer -= 1;
  if (t9(this.buffer) < 0 && this.mouthmove === 1 && this.mouthtimer === 0) {
    this.mouthtimer = 1;
    this.face_index = 1;
  }
  if (t9(this.mouthtimer) > 0) {
    this.mouthtimer += this.rate;
  }
  if (t9(this.mouthtimer) >= 1 && t9(this.mouthtimer) <= 5) {
    this.face_index = 1;
  } else {
    this.face_index = 0;
  }
  if (t9(this.mouthtimer) >= 9) {
    this.mouthtimer = 0;
    this.mouthmove = 0;
  }
}
WG(tm, "face5_step");
function tp(tk) {
  let tC;
  if (this.image_alpha !== 0) {
    this.facechange -= 1;
    if (this.nowface !== nw.fc) {
      this.facechange = 3;
    }
    if (t9(this.facechange) <= 0) {
      if (nw.fc === 1 && (nw.flag[29] === 0 && t9(nw.chapter) <= 1 && (this.face = "spr_face_s0", nw.fe === 1 && (this.face = "spr_face_s1"), nw.fe === 2 && (this.face = "spr_face_s2"), nw.fe === 3 && (this.face = "spr_face_s3"), nw.fe === 4 && (this.face = "spr_face_s4"), nw.fe === 5 && (this.face = "spr_face_s5"), nw.fe === 6 && (this.face = "spr_face_s6"), nw.fe === 7 && (this.face = "spr_face_s7"), nw.fe === 8 && (this.face = "spr_face_s8"), nw.fe === 9 && (this.face = "spr_face_s9"), nw.fe === 10 && (this.face = "spr_face_sA"), nw.fe === 11 && (this.face = "spr_face_sB"), nw.fe === 12 && (this.face = "spr_face_sC"), nw.fe === 13 && (this.face = "spr_face_sD"), tk.draw_sprite_ext(this.face, this.face_index, this.x - 5, this.y, this.f, this.f, 0, W5.white, 1)), (nw.flag[29] !== 0 || t9(nw.chapter) > 1) && (this.face = "spr_face_susie_alt", this.face_index = nw.fe, nw.fe === 61 && (this.face = "spr_face_placeholder", this.face_index = 0), nw.chapter === 5 && (nw.fe === 9999 && (this.face = "spr_face_single_susie_alt_ribboninhair", this.face_index = 0, nT(sprite_exists(this.facecustom)) && (this.face = this.facecustom, this.face_index = this.facecustomindex)), nw.fe === 9998 && (this.face = "spr_face_single_susie_alt_lips", this.face_index = 0), nw.fe === 9997 && (this.face = "spr_face_single_susie_alt_bushes", nw.lang === "ja" && (this.face = "spr_face_single_susie_alt_bushes_ja"), this.face_index = 0)), tk.draw_sprite_ext(this.face, this.face_index, this.x - 5, this.y, this.f, this.f, 0, W5.white, 1), nw.chapter === 5))) {
        let tv = 0;
        let D0 = 0;
        Wl.with("obj_dw_garden_susiechase", D1 => {
          D0 = D1.susieribbons;
        });
        Wl.with("obj_dw_garden_ribbonchest", D1 => {
          tv = D1.susieribbons;
        });
        if (nT(tv)) {
          tk.draw_sprite_ext("spr_face_susie_ribbonoverlay", 0, this.x - 29, this.y - 24, 2, 2, 0, W5.white, 1);
        }
        if (nT(D0)) {
          tk.draw_sprite_ext("spr_face_susie_spikeribbonoverlay", 0, this.x - 29, this.y - 24, 2, 2, 0, W5.white, 1);
        }
      }
      if (nw.fc === 2) {
        this.face = "spr_face_r_dark";
        if (nw.flag[30] === 1) {
          this.face = "spr_face_r_hood";
        }
        if (nw.flag[30] === 2 || t9(nw.chapter) > 1) {
          this.face = "spr_face_r_nohat";
        }
        if (nw.chapter === 5 && tG("scr_flag_get").call(this, 1311) === 1) {
          this.face = "spr_face_r_dark";
        }
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 15, this.y - 10, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 3) {
        this.face = "spr_face_n0";
        if (nw.fe === 1) {
          this.face = "spr_face_n1";
        }
        if (nw.fe === 2) {
          this.face = "spr_face_n2";
        }
        if (nw.fe === 3) {
          this.face = "spr_face_n3";
        }
        if (nw.fe === 4) {
          this.face = "spr_face_n4";
        }
        if (nw.fe === 5) {
          this.face = "spr_face_n5";
        }
        if (nw.fe === 6) {
          this.face = "spr_face_n6";
        }
        if (nw.fe === 7) {
          this.face = "spr_face_n7";
        }
        if (nw.fe === 8) {
          this.face = "spr_face_n8";
        }
        if (nw.fe === 9) {
          this.face = "spr_face_n9";
        }
        if (t9(nw.chapter) >= 2) {
          this.face = "spr_face_n_matome";
          if (nw.tempflag[63] === 1) {
            this.face = "spr_face_n_matome_extended";
          }
          this.face_index = nw.fe;
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        let D1 = tG("scr_flag_get").call(this, 1420) === 1 ? 1 : 0;
        if (nT(D1)) {
          this.timer++;
          tC = this.x - 12;
          let D2 = this.y - 10;
          if (this.timer % 2 === 1) {
            this.offset_x = choose(-1, 0, 1);
            this.offset_y = choose(-1, 0, 1);
          }
          tk.draw_sprite_ext(this.face, this.face_index, tC + this.offset_x, D2 + this.offset_y, this.f, this.f, 0, W5.white, 1);
        } else {
          tk.draw_sprite_ext(this.face, this.face_index, this.x - 12, this.y - 10, this.f, this.f, 0, W5.white, 1);
        }
      }
      if (nw.fc === 4) {
        tk.draw_sprite_ext("spr_face_tbody", 0, this.x - 7, this.y + 29, this.f, this.f, 0, W5.white, 1);
        this.face = "spr_face_t0";
        if (nw.fe === 1) {
          this.face = "spr_face_t1";
        }
        if (nw.fe === 2) {
          this.face = "spr_face_t2";
        }
        if (nw.fe === 3) {
          this.face = "spr_face_t3";
        }
        if (nw.fe === 4) {
          this.face = "spr_face_t4";
        }
        if (nw.fe === 5) {
          this.face = "spr_face_t5";
        }
        if (nw.fe === 6) {
          this.face = "spr_face_t6";
        }
        if (nw.fe === 7) {
          this.face = "spr_face_t7";
        }
        if (nw.fe === 8) {
          this.face = "spr_face_t8";
        }
        if (nw.fe === 9) {
          this.face = "spr_face_t9";
        }
        if (t9(nw.fe) >= 9) {
          this.face = "spr_face_toriel_matome_extended";
          this.face_index = nw.fe;
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 5) {
        this.face = "spr_face_l0";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 15, this.y - 10, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 6) {
        this.face = "spr_face_sans0";
        if (nw.fe === 1) {
          this.face = "spr_face_sans1";
        }
        if (nw.fe === 2) {
          this.face = "spr_face_sans2";
        }
        if (nw.fe === 3) {
          this.face = "spr_face_sans3";
        }
        if (nw.fe === 4) {
          this.face = "spr_face_sans4";
        }
        if (nw.fe === 5) {
          this.face = "spr_face_sans5";
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 9) {
        this.face = "spr_face_undyne";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 10) {
        this.face = "spr_face_asgore0";
        if (nw.fe === 1) {
          this.face = "spr_face_asgore1";
        }
        if (nw.fe === 2) {
          this.face = "spr_face_asgore2";
        }
        if (nw.fe === 3) {
          this.face = "spr_face_asgore3";
        }
        if (nw.fe === 4) {
          this.face = "spr_face_asgore4";
        }
        if (nw.fe === 5) {
          this.face = "spr_face_asgore5";
        }
        if (nw.fe === 6) {
          this.face = "spr_face_asgore6";
        }
        if (nw.fe === 7) {
          this.face = "spr_face_asgore7";
        }
        if (nw.fe === 8) {
          this.face = "spr_face_asgore8";
        }
        let D3 = nw.darkzone === 1 ? 1 : 0;
        if (nT(D3)) {
          this.face = asset_get_index("spr_face_asgore" + String(nw.fe) + "_crown");
        }
        if (t9(nw.fe) >= 9) {
          this.face = nT(D3) ? 2507 : 5767;
          this.face_index = nw.fe;
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 11) {
        this.face = "spr_alphysface";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 12) {
        this.face = "spr_face_b0";
        if (nw.fe === 1) {
          this.face = "spr_face_b1";
        }
        if (nw.fe === 2) {
          this.face = "spr_face_b2";
        }
        if (nw.fe === 3) {
          this.face = "spr_face_b3";
        }
        if (nw.fe === 4) {
          this.face = "spr_face_b4";
        }
        if (nw.fe === 5) {
          this.face = "spr_face_b5";
        }
        if (nw.fe === 6) {
          this.face = "spr_face_b1";
        }
        if (nw.fe === 7) {
          this.face = "spr_face_b1";
        }
        if (nw.fe === 8) {
          this.face = "spr_face_b1";
        }
        if (nw.fe === 9) {
          this.face = "spr_face_b1";
        }
        if (nw.darkzone === 1) {
          this.face = "spr_face_berdly_dark";
          this.face_index = nw.fe;
        } else {
          this.face = "spr_face_berdly";
          this.face_index = nw.fe;
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 13) {
        this.face = "spr_face_catti";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 14) {
        this.face = "spr_face_jock0";
        if (nw.fe === 1) {
          this.face = "spr_face_jock1";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock2";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock3";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock4";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock5";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock6";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock7";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock8";
        }
        if (nw.fe === 1) {
          this.face = "spr_face_jock9";
        }
        if (nw.flag[1336] >= 2) {
          this.face = "spr_face_jock_beard";
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 15) {
        this.face = "spr_face_rudy";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 12, this.y - 10, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 16) {
        this.face = "spr_face_catty";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
        let D4 = nw.fe === 11 ? 1 : 0;
        if (nT(D4)) {
          this.timer++;
          this.anim += 0.1;
          tC = this.x - 10;
          let D5 = tC + this.offset;
          if (this.timer % 2 === 1) {
            this.offset = choose(-1, 0, 1);
          }
          tk.draw_sprite_ext("spr_face_catty_alt", this.anim, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
          tk.draw_sprite_ext("spr_face_catty_hand_left", 0, D5, this.y, this.f, this.f, 0, W5.white, 1);
          tk.draw_sprite_ext("spr_face_catty_hand_right", 0, D5, this.y, this.f, this.f, 0, W5.white, 1);
        }
      }
      if (nw.fc === 17) {
        this.face = "spr_face_bratty";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 5, this.y + 2, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 18) {
        this.face = "spr_face_rurus";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 10, this.y, this.f, this.f, 0, W5.white, 1);
        if (nw.flag[326] === 1) {
          tk.draw_sprite_ext("spr_face_rurus_piratehat", this.face_index, this.x - 10 - this.f * 3, this.y - this.f * 4, this.f, this.f, 0, W5.white, 1);
        }
      }
      if (nw.fc === 19) {
        this.face = "spr_face_burgerpants";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 5, this.y - 5, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 20) {
        this.face = "spr_face_king";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 5, this.y - 5, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 21) {
        this.face = tG("scr_84_get_sprite").call(this, "spr_face_queen");
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 22) {
        this.face = "spr_face_carol";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x - 9, this.y - 4, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 23) {
        this.face = "spr_face_flowery";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x + 8, this.y, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 24) {
        this.face = "spr_face_flowery_d";
        this.face_index = nw.fe;
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
        }
        tk.draw_sprite_ext(this.face, this.face_index, this.x + 1, this.y + 6, this.f, this.f, 0, W5.white, 1);
      }
      if (nw.fc === 25) {
        this.face = "spr_face_blue";
        let D6 = 0;
        let Dt = 0;
        let DD = this.f;
        let Dh = nw.fe;
        if (nw.fe === 58) {
          DD = 1;
          this.face = "spr_face_blue_butterfly_angy";
          this.siner++;
          D6 = -58;
          Dt = -5;
          Dh = this.siner * 0.4166666666666667;
          if (this.facecustom !== null && this.facecustom !== -4 && this.facecustom === "blush") {
            this.face = "spr_face_blue_butterfly_blush";
            Dh = this.siner * 0.4166666666666667;
          }
        }
        if (nw.fe === 59) {
          this.face = "spr_face_blank";
        }
        if (nw.fe === 60) {
          DD = 1;
          this.face = "spr_face_blue_butterfly";
          this.siner++;
          D6 = -58;
          Dt = -5;
          Dh = nQ(this.siner / 9) * 3.5 + 3.5;
        }
        if (nw.fe === 61) {
          this.face = "spr_face_placeholder";
          this.face_index = 0;
          this.timer = 0;
        }
        tk.draw_sprite_ext(this.face, Dh, this.x - 12 + D6, this.y - 1 + Dt, DD, DD, 0, W5.white, 1);
      }
    }
    this.nowface = nw.fc;
  }
}
WG(tp, "face5_draw");
Wf(tE, "G.myfight = 1;");
var ty = 5;
var tU = WG(tk => Wl.first(tk), "first");
function tZ(tk, tC) {
  let tv = nN[tk];
  nN[tk] = function (D0) {
    if (nw.chapter === ty) {
      return tC(D0);
    } else if (typeof tv == "function") {
      return tv(D0);
    } else {
      return false;
    }
  };
}
WG(tZ, "chain");
tZ("bcStepGate", tk => {
  let tC = tU("obj_seth_shi_controller");
  if (tC && tC.con < 1) {
    return true;
  }
  let tv = tU("obj_seth_shinobeetle_controller");
  if (tv && tv.con < 1) {
    return true;
  }
  let D0 = tU("obj_flowery_enemy");
  if (D0 && D0.introcon < 2) {
    return true;
  }
  let D1 = tU("obj_pink_enemy");
  if (D1 && D1.introcon < 3 || D1 && D1.phase4introcon > 0) {
    return true;
  }
  let D2 = tU("obj_orange_green_controller");
  if (D2 && D2.endcon > 0 && tk.victory === 0) {
    if (tk.grazenoise === 1 && tk.victory === 0) {
      W1("snd_graze");
      tk.grazenoise = 0;
    }
    return true;
  }
  if (D2 && D2.afterbulletcon > 0) {
    return true;
  }
  let D3 = tU("obj_blue_enemy");
  return !!D3 && !D3.done_intro || !!D0 && (!!(D0.endcon > 0) || !!(D0.healingscenecon > 0) || !!(D0.phasetransition_con > 0) && nw.mnfight !== 2 || D0.phasetransition_con === 1 && !!D0.visible);
});
tZ("bcSkipMenu", () => {
  let tk = tU("obj_flowery_enemy");
  let tC = nw.encounterno === 226 && tU("obj_dw_garden_enemyrush");
  return !!tk && tk.introcon === 2 || !!tC && !!(tC.bcon > 0) && !!(tC.bcon < 3);
});
tZ("bcTurnTimer", () => {
  let tk = tU("obj_flowery_enemy");
  return !!tk && tk.introcon === 2;
});
tZ("bcNoReturn", tk => tU("obj_flowery_enemy") && tk.noreturn === 1 ? (tk.noreturn = 0, tk.alarm[2] = 1, true) : false);
var te = new Set([11, 12, 13]);
{
  let h6 = nN.chapterSpell;
  nN.chapterSpell = (tk, tC) => {
    if (nw.chapter !== ty) {
      if (typeof h6 == "function") {
        return h6(tk, tC);
      } else {
        return false;
      }
    }
    if (!te.has(tk) || typeof nh != "function") {
      return false;
    }
    let tv = nw.charinstance && nw.charinstance[tC] || {};
    nh.call(tv, tk, tC);
    return true;
  };
}
tZ("chapterEndturn", tk => typeof n0 != "function" ? false : (n0.call(tk), true));
tZ("chapterAttackphase", tk => typeof nW != "function" ? false : (nW.call(tk), true));
tZ("chapterMnendturn", () => {
  Wl.with("obj_monsterparent", tk => {
    if (typeof tk.end_turn_action == "function") {
      tk.end_turn_action();
    }
  });
  for (let tk = 0; tk < 3; tk++) {
    nw.hittarget ||= [];
    nw.hittarget[tk] = 0;
  }
  return false;
});
nN.chapterFace = {
  create: tR,
  step: tm,
  draw: tp
};
{
  let h7 = nN.bcCreate;
  nN.bcCreate = function (tk) {
    if (nw.chapter === ty) {
      nw.chemg_sound_map = Object.assign(nw.chemg_sound_map && typeof nw.chemg_sound_map == "object" ? nw.chemg_sound_map : {}, t8);
    }
    let tC = typeof h7 == "function" ? h7(tk) : false;
    if (nw.chapter === ty && nw.encounterno === 226 && !Wl.exists("obj_dw_garden_enemyrush")) {
      nk(0, 0, tE);
    }
    return tC;
  };
}
tZ("bcBattleStats", () => {
  if (nw.charweapon && nw.charweapon[3] === 35 && nw.battleat && nw.battleat.length > 2) {
    nw.battleat[2] += 12;
    nw.battledf[2] += 3;
    nw.battlemag[2] += 3;
  }
  nw.ignoredefense = false;
  return false;
});
tZ("bcVictoryGold", () => {
  let tk = tv => {
    let D0 = 0;
    for (let D1 = 0; D1 < 3; D1++) {
      if (nw.char[D1] !== 0) {
        D0 += (nw.chararmor1[nw.char[D1]] === tv ? 1 : 0) + (nw.chararmor2[nw.char[D1]] === tv ? 1 : 0);
      }
    }
    return D0;
  };
  let tC = nw.monstergold[3];
  if (nw.charweapon[1] === 53) {
    tC += Math.floor(tC / 20);
  }
  tC *= 1 + tk(8) * 0.05;
  tC *= 1 + tk(21) * 0.3;
  tC -= tC * (tk(54) * 0.1);
  tC = Math.min(Math.max(tC - tC * (tk(32) * 0.9), 0), tC);
  tC = Math.floor(tC);
  if (nw.flag[37] === 1) {
    tC = 0;
  }
  nw.monstergold[3] = tC;
  return false;
});
{
  let h8 = nN.chapterSpellinfo;
  nN.chapterSpellinfo = tk => {
    if (nw.chapter !== ty || typeof nj != "function") {
      if (typeof h8 == "function") {
        return h8(tk);
      } else {
        return null;
      }
    }
    let tC = {};
    try {
      nj.call(tC, tk);
    } catch {}
    return {
      spellname: tC.spellname,
      spellnameb: tC.spellnameb,
      spelltarget: tC.spelltarget ?? 0,
      cost: tk === 10 ? nw.maxtension : tC.cost ?? 0,
      spelldescb: tC.spelldescb
    };
  };
}
function tF(tk, tC) {
  if (tk._c5lastcoord === undefined) {
    tk._c5lastcoord = tC;
  }
  if (WD() || Wh() || Wj() || WM()) {
    tk.spellcoord = tk._c5lastcoord;
  }
  tk._c5lastcoord = tC;
  if (tk.spellcoord === undefined) {
    tk.spellcoord = 0;
  }
}
WG(tF, "trackSpellcoord");
{
  let h9 = nN.techBlocked;
  nN.techBlocked = (tk, tC, tv) => {
    if (nw.chapter !== ty) {
      if (typeof h9 == "function") {
        return h9(tk, tC, tv);
      } else {
        return false;
      }
    }
    tF(tk, tv);
    let D0 = nw.charturn;
    let D1 = true;
    for (let D4 = 0; D4 < 12; D4++) {
      if (tk.tempitem && tk.tempitem[D4] && tk.tempitem[D4][D0] !== 0) {
        D1 = false;
      }
    }
    let D2 = tU("obj_pink_enemy");
    let D3 = (nw.battlespellname[tC] || [])[tv];
    return !!D2 && !!nw.actnamesus && !!nw.actnamesus[D2.myself] && D3 === nw.actnamesus[D2.myself][2] && !!D1 || !!tU("obj_flowery_enemy") && D0 === 1 && tv === 1 && !!tk.disablesusieralseiattack;
  };
}
{
  let hn = nN.techActDirect;
  nN.techActDirect = (tk, tC, tv) => {
    if (nw.chapter !== ty) {
      if (typeof hn == "function") {
        return hn(tk, tC, tv);
      } else {
        return false;
      }
    }
    let D0 = nw.charturn;
    if ((nw.encounterno === 222 || nw.encounterno === 223) && D0 && (tk.spellcoord || 0) === 0) {
      nw.actingchoice[D0] = tv;
      nw.tension -= (nw.battlespellcost[tC] || [])[tv] || 0;
      nw.tensionselect = 0;
      tk.actselect(nw.bmenucoord[13][D0] || 0, tv);
      nx();
      return true;
    } else {
      return false;
    }
  };
}
tZ("bcDefendTP", () => tU("obj_flowery_enemy") || tU("obj_orange_enemy") ? 20 : 40);
var tq = {
  heroDamage: WG((tk, tC) => tC, "heroDamage"),
  heroHitTP: WG(tk => Math.round(tk.points / 10), "heroHitTP")
};
function tY(tk, tC) {
  let tv = nN[tk];
  nN[tk] = function (...D0) {
    if (nw.chapter === ty) {
      return tC(...D0);
    } else if (typeof tv == "function") {
      return tv(...D0);
    } else if (tq[tk]) {
      return tq[tk](...D0);
    } else {
      return false;
    }
  };
}
WG(tY, "chainN");
var tI = WG(tk => Wl.exists(tk), "ex");
tY("heroAttackRetarget", tk => {
  let tC = tU("obj_blue_enemy");
  let tv = tU("obj_yellow_enemy");
  let D0 = tk.myself;
  if (tC && tv && nw.chartarget[D0] === tC.myself) {
    tv.x = tC.x - 60;
    tv.y = tC.y;
    nw.chartarget[D0] = tv.myself;
    nw.monsterx[tv.myself] = tv.x + 20;
    nw.monstery[tv.myself] = tv.y + 70;
    tv.blockcon = 1;
    tv.blocktimer = 0;
    tv.hurtsprite = "spr_yellow_block";
  }
  let D1 = tU("obj_trashy_trio");
  if (D1 && nw.chartarget[D0] === D1.myself && tk.points) {
    D1.blocked_last_turn = 1;
    D1.back = 30;
  }
  return false;
});
tY("heroDamage", (tk, tC) => tI("obj_trashy_trio") ? Math.ceil(tC * 0.1) : tC);
tY("heroAttackLanded", (tk, tC, tv, D0, D1) => {
  if (tI("obj_pink_enemy") && D0) {
    D0.damage = 0;
  }
  if (tI("obj_trashy_trio")) {
    nw.monsterhp[tC] += tv;
  }
  if (tI("obj_seth_shinobeetle_controller") && nw.monsterhp[tC] < 1) {
    nw.monsterhp[tC] = 1;
  }
  let D2 = D1 || nw.monsterinstance && nw.monsterinstance[tC];
  if (D2 && typeof D2.callback_on_damage == "function") {
    try {
      D2.callback_on_damage(tk);
    } catch (D3) {
      console.warn("callback_on_damage", D3);
    }
  }
  if (tv > 0) {
    let D4 = tU("obj_flowery_enemy");
    if (D4) {
      D4.force_hurt_sprite = 1;
    }
  }
  if (tv > 0) {
    let D5 = tU("obj_trashy_trio");
    let D6 = tU("obj_battlecontroller");
    if (D5 && D6 && nw.chartarget[tk.myself] === D5.myself) {
      D6.damagenoise = 0;
      D6.bumpnoise = 1;
    }
  }
  return false;
});
tY("bcVictoryHold", () => tI("obj_seth_shi_controller") || tI("obj_seth_shinobeetle_controller"));
tY("nextheroSkip", tk => !!tk && (tk.skipsusieturn === 1 || tk.skipsusieturn === true || tk.skipralseiturn === 1 || tk.skipralseiturn === true));
tY("tpCreate", tk => {
  tk.maxtensionlimitpercent = 100;
  tk.maxtensionlimit = 250;
  if (tI("obj_pink_enemy") || (nw.monsterinstancetype || []).some(tC => tC && tC.name === "obj_pink_enemy")) {
    tk.maxtensionlimitpercent = 8;
    tk.maxtensionlimit = 20;
  }
  return false;
});
tY("tensionCap", () => {
  let tk = tU("obj_tensionbar");
  if (tk && Number.isFinite(tk.maxtensionlimit)) {
    return tk.maxtensionlimit;
  } else {
    return null;
  }
});
tY("heroSetup", tk => {
  let tC = D0 => !tk.herokey || tk.herokey === D0;
  let tv = D0 => tk.is && tk.is(D0) && tC(D0 === "obj_heroralsei" ? "ralsei" : D0 === "obj_herosusie" ? "susie" : D0 === "obj_herokris" ? "kris" : D0);
  Object.assign(tk, {
    mercycon: 0,
    mercytimer: 0,
    mercyalpha: 0,
    mercy: 0,
    mercymax: 100
  });
  if (tv("obj_heroralsei") && nw.flag[1311] !== 1) {
    Object.assign(tk, {
      attackframes: 6,
      normalsprite: "spr_ralsei_walk_right",
      idlesprite: "spr_ralsei_idle",
      defendsprite: "spr_ralsei_defend",
      hurtsprite: "spr_ralsei_hurt_fixed",
      attackreadysprite: "spr_ralsei_attackready",
      attacksprite: "spr_ralsei_attack",
      itemsprite: "spr_ralsei_item",
      itemreadysprite: "spr_ralsei_itemready",
      spellreadysprite: "spr_ralsei_spellready",
      spellsprite: "spr_ralsei_spell",
      defeatsprite: "spr_ralsei_defeat",
      victorysprite: "spr_ralsei_victory",
      actreadysprite: "spr_ralsei_actready",
      actsprite: "spr_ralsei_act",
      victoryframes: 21
    });
  }
  if (nw.encounterno === 225) {
    if (tv("obj_herosusie")) {
      Object.assign(tk, {
        normalsprite: "spr_susier_dark_unhappy",
        idlesprite: nw.charweapon[2] === 0 ? "spr_susieb_idle_unarmed_unhappy" : "spr_susieb_idle_serious",
        defendsprite: "spr_susieb_defend_unhappy",
        actreadysprite: "spr_susieb_actready",
        attacksprite: "spr_susieb_attack_serious",
        itemsprite: "spr_susieb_item_unhappy",
        itemreadysprite: "spr_susieb_itemready_unhappy",
        spellreadysprite: "spr_susieb_spellready_unhappy",
        spellsprite: "spr_susieb_spell_unhappy"
      });
    }
    if (tv("obj_heroralsei")) {
      Object.assign(tk, {
        idlesprite: "spr_ralsei_idle_mad",
        defendsprite: "spr_ralsei_defend_serious",
        hurtsprite: "spr_ralsei_kneel",
        attackreadysprite: "spr_ralse_attackready_serious",
        attacksprite: "spr_ralse_attack_serious",
        defeatsprite: "spr_ralsei_kneel"
      });
    }
  }
  return false;
});
var tL = WG((tk, tC, tv) => tk + (tC - tk) * tv, "lerp5");
tY("bcBp", tk => {
  let tC = tU("obj_pink_enemy");
  if (tC && tk.victory === 0) {
    let tv = tU("obj_date_controller");
    if (tC.datecount === 1) {
      tk.bp = tL(tk.bp, tv && tv.con !== 0 ? 36 : 152, 0.3);
    } else if (tv && (tv.con !== 7 || tv.date3endingcon === 2)) {
      tk.bp = tL(tk.bp, 36, 0.4);
    } else {
      tk.bp = tL(tk.bp, 152, 0.3);
    }
  }
  if (tk.hidebattleui === 1) {
    tk.bp = tL(tk.bp, 0, 0.3);
  }
  return false;
});
tY("actNameColor", (tk, tC, tv) => {
  let D0 = tU("obj_floradinn_enemy");
  if (D0 && D0.flowery_arena && tk === 0 && !tC) {
    tv = W5.lime;
  }
  let D1 = tU("obj_pink_enemy");
  if (D1 && D1.dateactdisabled && tk === 1) {
    tv = W5.gray;
  }
  return tv;
});
tY("actInfoHide", (tk, tC) => {
  let tv = nw.charturn;
  let D0 = nw.bmenucoord[11][tv];
  let D1 = tU("obj_pink_enemy");
  let D2 = !!D1 && !!D1.dateactdisabled && nw.bmenucoord[9][tv] === 1;
  let D3 = D2;
  if (nw.encounterno === 222) {
    let D4 = tU("obj_blue_enemy");
    let D5 = tU("obj_yellow_enemy");
    if (D4 && D0 === 0 && tC === 0 && (nw.actcost[D4.myself] || [])[0] === 2497.5) {
      D3 = true;
    }
    if (D5 && D0 === 1 && tC === 1 && (nw.actcost[D5.myself] || [])[1] === 2497.5) {
      D3 = true;
    }
  }
  return {
    desc: D2,
    tp: D3
  };
});
var ti = [[0, 1], [4, 5], [2, 3], [1, 2], [5, 6], [3, 4], [6, 7]];
tY("bcDrawEnd", (tk, tC) => {
  let tv = nw.charturn;
  if (nw.bmenuno === 9 && nw.myfight === 0 && nw.bmenucoord[11][tv] === 1) {
    let D3 = tU("obj_yellow_enemy");
    if (D3) {
      let D4 = 0;
      let D5 = DD => {
        let Dh = 440 + nQ(nw.time * 0.1 + D4 / 60) * 2;
        tC.draw_sprite_ext("spr_yellow_evidence", 0, 36 + D4, Dh, 1, 1, 45, W5.gray, 1);
        tC.draw_sprite_ext("spr_yellow_evidence", DD, 36 + D4, Dh, 1, 1, 0, W5.gray, 1);
      };
      let D6 = D3.evidence_obtained || [];
      for (let [DD, Dh] of ti) {
        if (D6[DD]) {
          D5(Dh);
          D4 += 60;
        }
      }
      let Dt = false;
      try {
        Dt = typeof nM == "function" && !!nM.call({}, 2);
      } catch {
        Dt = false;
      }
      if (Dt) {
        D5(9);
      }
    }
  }
  let D0 = tU("obj_netskie_enemy");
  let D1 = tU("obj_writer");
  if (D0 && D0.draw_kitsune_tail && D1 && D1.reachedend) {
    tC.draw_sprite_ext("spr_kitsune_tail_check2", D0.draw_kitsune_index || 0, 552, 368, 2, 2, 0, W5.white, 1);
    D0.draw_kitsune_index = (D0.draw_kitsune_index || 0) + 0.3333333333333333;
  }
  let D2 = tU("obj_flowery_enemy");
  if (nw.myfight === 0 && D2 && [1, 3, 11, 12, 13].includes(nw.bmenuno)) {
    let Dj = {
      3: [["Aqua", "aqua_mercy"], ["Seth", "purple_mercy"]],
      4: [["Orange", "orange_mercy"], ["Green", "green_mercy"]],
      5: [["Blue", "blue_mercy"], ["Yellow", "yellow_mercy"]]
    }[D2.phase];
    if (Dj) {
      let DM = W7(W5.orange, W5.red, 0.5);
      let Dl = -5;
      tC.draw_set_font("fnt_mainbig");
      Dj.forEach(([Do, DG], DS) => {
        let Df = DS * 32;
        let DH = Number(D2[DG]) || 0;
        tC.draw_set_color(W5.gray);
        tC.draw_text_transformed(80, 407 + Df, Do, 1, 1, 0);
        tC.draw_healthbar(520, 418 + Df + Dl, 600, 433 + Df + Dl, DH, DM, W5.yellow, W5.yellow, 0, 1, 0);
        tC.draw_set_color(W5.white);
        tC.draw_text_transformed(524, 397 + Df, "MERCY", 1, 0.5, 0);
        tC.draw_set_color(W5.maroon);
        tC.draw_text_transformed(524, 413 + Df, String(DH) + "%", 1, 0.5, 0);
      });
    }
  }
  return false;
});
tY("tpCustom", () => tI("obj_pink_enemy"));
tY("tpCustomDraw", (tk, tC, tv) => {
  if (!nm(tk.healthbar_surf)) {
    tk.healthbar_surf = nR(96, 250);
  }
  let D0 = 60;
  let D1 = Number(tk.maxtensionlimit) || 250;
  let D2 = Number(tk.maxtensionlimitpercent) || 100;
  let D3 = tL(-1, 75, D2 / 100);
  let D4 = D0 + 43 + D3;
  let D5 = 23 + D3 * 2;
  nq(tk.healthbar_surf);
  nL(W5.white, 0);
  let D6 = (Dl, Do, DG = 1, DS = false) => {
    if (DS) {
      tC.draw_sprite_white("spr_tensionbar_parts", Dl, 0, Do, 1, 1, 0, DG);
    } else {
      tC.draw_sprite_ext("spr_tensionbar_parts", Dl, 0, Do, 1, 1, 0, W5.white, DG);
    }
  };
  let Dt = (Dl, Do, DG = 1, DS = false) => {
    if (Do > 0) {
      if (DS) {
        tC.draw_sprite_white("spr_tensionbar_parts", 4, 0, Dl, 1, Do, 0, DG);
      } else {
        tC.draw_sprite_ext("spr_tensionbar_parts", 4, 0, Dl, 1, Do, 0, W5.white, DG);
      }
    }
  };
  let DD = Math.round(D3);
  D6(3, D0 + 20 - D3);
  Dt(D0 + 43 - (DD - 1), DD);
  Dt(D0 + 43, DD);
  D6(5, D4);
  let Dh = (Dl, Do) => {
    tC.draw_set_color(Dl);
    tC.draw_rectangle(3, D4 + 20, 21, D4 + 20 - tL(0, D5 + 20, Do / D1), false);
  };
  let Dj = tv === 1 ? W7(W5.yellow, W5.orange, 0.5) : W5.orange;
  if (tk.apparent < tk.current) {
    Dh(W5.red, tk.current);
    Dh(W5.orange, tk.apparent);
  }
  if (tk.apparent > tk.current) {
    Dh(W5.white, tk.apparent);
    Dh(Dj, tk.current);
  }
  if (tk.apparent === tk.current) {
    Dh(Dj, tk.current);
  }
  if (nw.tensionselect > 0) {
    tk.tsiner++;
    tC.draw_set_color(W5.white);
    tC.draw_set_alpha(Math.abs(Math.sin(tk.tsiner / 8) * 0.5) + 0.2);
    let Dl = D4 + 20 - tL(0, D5 + 20, tk.apparent / D1);
    let Do = Dl + tL(0, D5 + 20, nw.tensionselect / D1);
    if (Do > D4 + 22) {
      Do = D4 + 22;
      tC.draw_set_color(W5.dkgray);
      tC.draw_set_alpha(0.7);
    }
    tC.draw_rectangle(3, Dl, 21, Do, false);
    tC.draw_set_alpha(1);
  }
  D6(0, D0 + 20 - D3);
  D6(2, D4 + 1);
  nc(3);
  tC.draw_sprite_ext("spr_tensionbar_cutout_parts", 0, 0, D0 + 20 - D3, 1, 1, 0, W5.white, 1);
  tC.draw_sprite_ext("spr_tensionbar_cutout_parts", 1, 0, D4 + 1, 1, 1, 0, W5.white, 1);
  nc(0);
  let DM = tU("obj_pink_tension_glow");
  if (DM && DM.alphamod >= 0) {
    if (DM.alphamod === 1) {
      for (let DG = 0; DG < 3; DG++) {
        Wl.with("obj_tensionbar", DS => {
          let Df = nk(DS.x + Wn(25), D0 + 100 - D3 + Wn(D3 * 2), nu);
          let DH = 10 + Wn(5);
          Df.sprite_index = "spr_kissheart";
          Df.image_xscale = 1.5;
          Df.image_yscale = 1.5;
          Df.image_speed = 5 / DH;
          Df.speed = 3 + W8(3);
          Df.direction = 90;
          n5.call(Df, "speed", Df.speed, 0, DH);
          n5.call(Df, "image_alpha", 1, 0.25, DH);
          n8.call(Df, Df.instance_destroy, DH);
        });
      }
    }
    D6(3, D0 + 20 - D3, DM.alphamod, true);
    Dt(D0 + 43 - (DD - 1), DD, DM.alphamod, true);
    Dt(D0 + 44, Math.round(D3 - 1), DM.alphamod, true);
    D6(5, D4, DM.alphamod, true);
  }
  nI();
  ni(tk.healthbar_surf, tk.x, tk.y);
  return true;
});
tY("tpCustomText", (tk, tC) => {
  let tv = Number(tk.maxtensionlimitpercent) || 100;
  tC.draw_text(tk.x - 30, tk.y + 95, "/", W5.white);
  if (tv === 100) {
    tC.draw_set_color(W5.white);
    tC.draw_text_transformed(tk.x - 31, tk.y + 95 + 27, String(tv), 0.6, 1, 0);
  } else {
    tC.draw_text(tk.x - 31, tk.y + 95 + 27, String(tv), W5.white);
  }
  return true;
});
{
  let hW = nN.techActPicked;
  nN.techActPicked = tk => {
    if (nw.chapter !== ty) {
      if (typeof hW == "function") {
        return hW(tk);
      } else {
        return false;
      }
    }
    let tC = tU("obj_pink_enemy");
    if (!tC || tC.actingsus !== 3 || nw.charturn !== 1) {
      return false;
    }
    tk.shareitemcon = 1;
    nw.bmenuno = 4;
    let tv = nw.charturn;
    let D0 = nw.bmenucoord;
    for (let D1 = 0; D1 < 12; D1++) {
      if (tk.tempitem[D0[4][tv]] && tk.tempitem[D0[4][tv]][tv] === 0 && D0[4][tv] > 0) {
        D0[4][tv]--;
      }
    }
    return true;
  };
}
{
  let hD = nN.itemMenuPick;
  nN.itemMenuPick = (tk, tC, tv) => {
    if (nw.chapter !== ty) {
      if (typeof hD == "function") {
        return hD(tk, tC, tv);
      } else {
        return false;
      }
    }
    if (tk.shareitemcon !== 1) {
      return false;
    }
    let D0 = tU("obj_pink_enemy");
    if (D0) {
      D0.sharefood_item_number = tC >= 200 ? tC - 200 : tC;
    }
    nb(tC, tv);
    nw.charspecial[1] = 0;
    nw.charaction[1] = 0;
    tk.shareitemcon = 0;
    return true;
  };
}
{
  let hh = nN.itemMenuCancel;
  nN.itemMenuCancel = tk => {
    if (nw.chapter !== ty) {
      if (typeof hh == "function") {
        hh(tk);
      }
      return;
    }
    if (tk.shareitemcon !== 1) {
      return;
    }
    tk.shareitemcon = 0;
    nw.bmenuno = 0;
    let tC = nw.charturn;
    nw.actingsingle[tC] = 0;
    nw.actingsimul[tC] = 0;
    nw.faceaction[tC] = 0;
    nw.chartarget[tC] = 0;
    nw.charaction[tC] = 0;
    nw.charspecial[tC] = 0;
  };
}
{
  let hj = nN.bcCreate;
  nN.bcCreate = function (tk) {
    let tC = typeof hj == "function" ? hj(tk) : false;
    if (nw.chapter === ty) {
      nU();
    }
    if (nw.chapter === ty && nw.encounterno === 227 && !Wl.exists("obj_dw_garden_enemyrush")) {
      nk(0, 0, nf);
    }
    return tC;
  };
}
{
  let hM = nN.rudebusterHit;
  nN.rudebusterHit = (tk, tC) => {
    if (nw.chapter !== ty) {
      if (typeof hM == "function") {
        return hM(tk, tC);
      } else {
        return false;
      }
    }
    let tv = tU("obj_trashy_trio");
    let D0 = tk.target;
    if (tC === "before") {
      if (tv) {
        tk.damage = Math.ceil(tk.damage * 0.1);
        tk._hplock = D0 ? nw.monsterhp[D0.myself] : undefined;
      }
      return false;
    }
    if (tI("obj_pink_enemy")) {
      Wl.with("obj_dmgwriter", D1 => {
        D1.damage = 0;
      });
    }
    if (nw.monstertype[0] !== 20 && !tv && D0 && !D0.destroyed) {
      let D1 = tU("obj_pink_enemy");
      let D2 = null;
      if (D1 && D1.datecount < 3) {
        Wl.with("obj_pink_enemy", D3 => {
          D3.pink_head_white_alpha = 1;
        });
      } else if (typeof nl == "function") {
        D2 = nl.call(D0);
      }
      if (D2 && tI("obj_yellow_enemy")) {
        if ((tk.yellowbluecon || 0) === 0) {
          D2.sprite_index = "spr_yellow_block";
        }
        if (tk.yellowbluecon === 1) {
          D2.sprite_index = "spr_yellow_dumbfounded";
        }
      }
      if (D2 && tI("obj_flowery_enemy")) {
        D2.sprite_index = "spr_flowery_hurt";
      }
      if (D2 && tk.red === 1) {
        D2.flashcolor = W5.red;
      }
    }
    if (tv) {
      Wl.with("obj_trashy_trio", D3 => {
        D3.blocked_last_turn = true;
        D3.back = 30;
      });
      W1("snd_bounceflower");
      W1("snd_acquire_lancer", {
        volume: 0.5,
        pitch: 1
      });
      if (D0 && tk._hplock !== undefined) {
        nw.monsterhp[D0.myself] = tk._hplock;
      }
      return true;
    } else {
      return false;
    }
  };
}
{
  let hl = nN.techMenuColor;
  nN.techMenuColor = (tk, tC, tv, D0) => {
    if (nw.chapter !== ty) {
      if (typeof hl == "function") {
        return hl(tk, tC, tv, D0);
      } else {
        return null;
      }
    }
    let D1 = true;
    for (let D6 = 0; D6 < 12; D6++) {
      if (tk.tempitem && tk.tempitem[D6] && tk.tempitem[D6][nw.charturn] !== 0) {
        D1 = false;
      }
    }
    let D2 = tU("obj_pink_enemy");
    let D3 = (nw.battlespellcost[tC] || [])[tv] || 0;
    let D4 = !tk.techUnlocked(tC, tv);
    if (D2 && nw.actnamesus && nw.actnamesus[D2.myself] && (nw.battlespellname[tC] || [])[tv] === nw.actnamesus[D2.myself][2] && D1) {
      D4 = true;
    }
    if (tU("obj_flowery_enemy") && D3 === 125 && tk.disablesusieralseiattack) {
      D4 = true;
    }
    if (nw.tension < D3 || D4) {
      return W5.gray;
    }
    let D5 = (nw.battlespell[tC] || [])[tv];
    if (D5 === 3 || D5 === 8 || D5 === 13) {
      let Dt = 0;
      for (let DD = 0; DD < 3; DD++) {
        if (nw.monster[DD] === 1 && nw.monsterstatus[DD] === 1 && nw.encounterno !== 31) {
          Dt = 1;
        }
      }
      if (Dt) {
        return W7(W5.aqua, W5.blue, 0.3);
      }
    }
    return D0;
  };
  let ho = nN.techMenuInfoHide;
  nN.techMenuInfoHide = (tk, tC, tv) => {
    if (nw.chapter !== ty) {
      if (typeof ho == "function") {
        return ho(tk, tC, tv);
      } else {
        return false;
      }
    }
    let D0 = Math.floor(((nw.battlespellcost[tC] || [])[tv] || 0) / nw.maxtension * 100);
    return !!tU("obj_flowery_enemy") && D0 === 50 && !!tk.disablesusieralseiattack;
  };
}
{
  let hG = n4.prototype.draw;
  let hS = WG((tk, tC, tv, D0, D1, D2, D3, D4, D5) => {
    if (!(D2 > 0) || !(D5 > 0) || D2 <= D1) {
      return;
    }
    tk.save();
    tk.globalAlpha = Math.min(1, D5);
    tk.fillStyle = tC;
    tk.beginPath();
    let D6 = 1 / (D4 || 1);
    tk.ellipse(tv, D0, D2, D2 * D6, 0, 0, Math.PI * 2);
    if (D1 > 0) {
      tk.ellipse(tv, D0, D1, D1 * D6, 0, 0, Math.PI * 2, true);
    }
    tk.fill("evenodd");
    tk.restore();
  }, "ring");
  n4.prototype.draw = function (tk) {
    if (!tk || typeof tk.draw_rectangle != "function") {
      return hG.call(this, tk);
    }
    let tC = Object.prototype.hasOwnProperty.call(tk, "draw_rectangle") ? tk.draw_rectangle : null;
    let tv = this.ripples || [];
    let D0 = Wl.view.x || 0;
    let D1 = Wl.view.y || 0;
    tk.draw_rectangle = function (D2, D3, D4, D5) {
      let D6 = tk.ctx;
      if (!D6 || typeof D6.ellipse != "function") {
        return;
      }
      let Dt = (D2 + D4) / 2;
      let DD = (D3 + D5) / 2;
      let Dh = (D4 - D2) / 2;
      let Dj = tv.find(DV => DV && Math.abs(DV.x - D0 - Dt) < 0.01 && Math.abs(DV.y - D1 - DD) < 0.01 && Math.abs(DV.rad - Dh) < 0.01);
      if (!Dj) {
        return;
      }
      let DM = Dj.radmax - Dj.radstart || 1;
      let Dl = Math.max(0, Math.min(1, (Dh - Dj.radstart) / DM));
      let Do = Dj.thickness * (1 - Dl);
      let DG = Dj.radmax / 3;
      let DS = Dj.fading ? Math.min(1, 1 - (Dh - DG) / (Dj.radmax - DG || 1)) : 1;
      if (!(DS > 0)) {
        return;
      }
      let Df = W6(tk.color !== undefined ? tk.color : Dj.col);
      let DH = Math.max(0, Dh - Do);
      let DX = Do / 3;
      if (Dj.banding === 1) {
        for (let DV = 0; DV < 4; DV++) {
          hS(D6, Df, Dt, DD, DH + Do * DV / 4, DH + Do * (DV + 1) / 4, 0, Dj.yratio, DS * ((DH + Do * (DV + 0.5) / 4) / Dh));
        }
      } else if (Dj.banding === 2) {
        hS(D6, Df, Dt, DD, DH, Dh, 0, Dj.yratio, DS);
      } else {
        hS(D6, Df, Dt, DD, DH, DH + DX, 0, Dj.yratio, DS * 0.6);
        hS(D6, Df, Dt, DD, DH + DX, DH + DX * 2, 0, Dj.yratio, DS * 0.8);
        hS(D6, Df, Dt, DD, DH + DX * 2, Dh, 0, Dj.yratio, DS);
      }
    };
    try {
      return hG.call(this, tk);
    } finally {
      if (tC) {
        tk.draw_rectangle = tC;
      } else {
        delete tk.draw_rectangle;
      }
    }
  };
  n4.prototype.draw.inner = hG;
}
if (nN.standInParty) {
  nN.standInParty(nn);
}
{
  let hf = WG(tk => {
    let tC = (tk.image_angle || 0) * Math.PI / 180;
    let tv = Math.cos(tC);
    let D0 = Math.sin(tC);
    let D1 = tk.image_xscale;
    let D2 = tk.image_yscale;
    return [[0, 0], [D1, 0], [D1, D2], [0, D2]].map(([D3, D4]) => [tk.x + D3 * tv + D4 * D0, tk.y - D3 * D0 + D4 * tv]);
  }, "corners");
  let hH = WG((tk, tC) => {
    for (let tv of [tk, tC]) {
      for (let D0 = 0; D0 < 2; D0++) {
        let D1 = tv[D0 + 1][0] - tv[D0][0];
        let D2 = -(tv[D0 + 1][1] - tv[D0][1]);
        let D3 = D1;
        let D4 = Infinity;
        let D5 = -Infinity;
        let D6 = Infinity;
        let Dt = -Infinity;
        for (let DD of tk) {
          let Dh = DD[0] * D2 + DD[1] * D3;
          if (Dh < D4) {
            D4 = Dh;
          }
          if (Dh > D5) {
            D5 = Dh;
          }
        }
        for (let Dj of tC) {
          let DM = Dj[0] * D2 + Dj[1] * D3;
          if (DM < D6) {
            D6 = DM;
          }
          if (DM > Dt) {
            Dt = DM;
          }
        }
        if (D5 < D6 || Dt < D4) {
          return true;
        }
      }
    }
    return false;
  }, "sep");
  let hX = n9.prototype.step;
  n9.prototype.step = function () {
    let tk = hX.call(this);
    if (nw.chapter === ty && !this.destroyed && typeof this.collide_obj_scissors_line == "function") {
      let tC = hf(this);
      Wl.with("obj_scissors_line", tv => {
        if (tv !== this && !tv.destroyed && !this.destroyed && !(Math.abs(this.count - tv.count) < 3) && !hH(tC, hf(tv))) {
          this.collide_obj_scissors_line(tv);
        }
      });
    }
    return tk;
  };
  n9.prototype.step.inner = hX;
}
{
  let hd = null;
  let hx = C.prototype.draw;
  C.prototype.draw = function (tk) {
    let tC = hx.call(this, tk);
    if (nw.chapter !== ty || this.destroyed || !tk || !tk.ctx || !(nw.turntimer > 0) || !Wl.first("obj_heart")) {
      return tC;
    }
    let tv = this.surf;
    let D0 = tv && typeof tv == "object" ? tv.canvas : null;
    if (!D0 || !D0.width || typeof document === "undefined") {
      return tC;
    }
    hd ||= document.createElement("canvas");
    if (hd.width !== D0.width || hd.height !== D0.height) {
      hd.width = D0.width;
      hd.height = D0.height;
    }
    let D1 = hd.getContext("2d");
    if (!D1) {
      return tC;
    }
    let D2 = D5 => {
      D1.setTransform(1, 0, 0, 1, 0, 0);
      D1.globalAlpha = 1;
      D1.globalCompositeOperation = "copy";
      D1.drawImage(D0, 0, 0);
      D1.globalCompositeOperation = "source-in";
      D1.fillStyle = D5;
      D1.fillRect(0, 0, hd.width, hd.height);
      D1.globalCompositeOperation = "source-over";
    };
    let D3 = tk.ctx;
    let D4 = (D5, D6) => {
      D3.save();
      D3.globalAlpha = 1;
      D3.globalCompositeOperation = "source-over";
      D3.translate(this.x + D5, this.y + D6);
      D3.drawImage(hd, 0, 0);
      D3.restore();
    };
    D2("#666666");
    D4(0, -1);
    D4(0, 1);
    D4(1, 0);
    D4(-1, 0);
    D2("#000000");
    D4(0, 0);
    return tC;
  };
  C.prototype.draw.inner = hx;
}
{
  let hb = ng.prototype.draw;
  ng.prototype.draw = function (tk) {
    if (nw.chapter !== ty || this.type !== 15) {
      return hb.call(this, tk);
    }
    if (this.delaytimer < this.delay) {
      Wl.with("obj_dmgwriter", tC => {
        tC.killtimer = 0;
      });
    }
    this.delaytimer++;
    if (this.delaytimer === this.delay) {
      this.vspeed = -5 - W8(2);
      this.hspeed = 10;
      this.vstart = this.vspeed;
      this.flip = 90;
    }
    if (this.delaytimer >= this.delay) {
      if (this.hspeed > 0) {
        this.hspeed -= 1;
      }
      if (this.hspeed < 0) {
        this.hspeed += 1;
      }
      if (Math.abs(this.hspeed) < 1) {
        this.hspeed = 0;
      }
      if (this.damagemessage === undefined) {
        this.damagemessage = String(Math.round(this.damage));
      }
      let tC = Math.max(0, 1 - this.kill);
      let tv = 2 - this.stretch;
      let D0 = this.stretch + this.kill;
      tk.draw_set_halign("right");
      tk.draw_spritefont("spr_numbersfontbig_pink", "0123456789+-%/P$", this.damagemessage, this.x - 80, this.y - 20, tv, D0, W5.white, tC, 0, true, 0);
      tk.draw_set_halign("left");
      tk.draw_sprite_ext("spr_battlemsg", 15, this.x, this.y - 20, tv, D0, 0, W5.white, tC);
      if (this.bounces < 2) {
        this.vspeed += 1;
      }
      if (this.y > this.ystart && this.bounces < 2 && this.killactive === 0) {
        this.y = this.ystart;
        this.vspeed = this.vstart / 2;
        this.bounces++;
      }
      if (this.bounces >= 2 && this.killactive === 0) {
        this.vspeed = 0;
        this.y = this.ystart;
      }
      if (this.stretchgo === 1) {
        this.stretch += 0.4;
      }
      if (this.stretch >= 1.2) {
        this.stretch = 1;
        this.stretchgo = 0;
      }
      this.killtimer++;
      if (this.killtimer > 35) {
        this.killactive = 1;
      }
      if (this.killactive === 1) {
        this.kill += 0.08;
        this.y -= 4;
      }
      if (this.kill > 1) {
        this.instance_destroy();
        return;
      }
    }
    if (nw.fighting === 1 && this.stayincamera === 1 && this.x >= this.xx + 600) {
      this.x = this.xx + 600;
    }
  };
  ng.prototype.draw.inner = hb;
}
tY("heroDraw", (tk, tC, tv) => {
  tv();
  if (tk.mercycon === 1) {
    if (tk.mercyalpha < 1) {
      tk.mercyalpha += 0.1;
    }
  } else if (tk.mercyalpha > -1) {
    tk.mercyalpha -= 0.1;
  }
  if (!(tk.mercy > 0)) {
    return;
  }
  let D0 = 0;
  let D1 = 0;
  let D2 = D5 => !!tk.is && !!tk.is(D5);
  if (D2("obj_herokris")) {
    D0 = 0;
    D1 = -2;
  }
  if (D2("obj_herosusie")) {
    D0 = 12;
    D1 = -4;
  }
  if (D2("obj_heroralsei")) {
    D0 = 6;
    D1 = 2;
  }
  let D3 = tk.x;
  let D4 = tk.y;
  tC.draw_set_font("fnt_main");
  tC.draw_set_alpha(tk.mercyalpha);
  tC.draw_set_color(W5.white);
  tC.draw_text(D3 + 10 + D0, D4 - 16 + D1, "MERCY");
  tC.draw_set_color(W7(W5.orange, W5.red, 0.5));
  tC.draw_rectangle(D3 + 10 + D0, D4 + D1, D3 + D0 + tk.mercymax * 0.5, D4 + 6 + D1, false);
  tC.draw_set_color(W5.yellow);
  tC.draw_rectangle(D3 + 10 + D0, D4 + D1, D3 + D0 + tk.mercy * 0.5, D4 + 6 + D1, false);
  tC.draw_set_alpha(1);
});
{
  let hg = nN.heroDraw;
  let hK = new Set(["spr_susie_cook", "spr_susie_cook_ja"]);
  let hE = WG(tk => {
    if (!tU("obj_flowery_hero_flower")) {
      return null;
    }
    let tC = tU("obj_herosusie");
    if (!tC) {
      return null;
    }
    let tv = new Map();
    tv.set(tC.itemreadysprite, [-38, 0]);
    tv.set(tC.itemsprite, [-38, 0]);
    tv.set(tC.spellreadysprite, [-38, -28]);
    tv.set(tC.spellsprite, [-38, -57]);
    return tv;
  }, "shiftFor");
  let hR = WG((tk, tC, tv, D0) => {
    let D1 = Object.prototype.hasOwnProperty.call(tC, "draw_sprite_ext") ? tC.draw_sprite_ext : null;
    let D2 = Object.prototype.hasOwnProperty.call(tC, "draw_sprite_white") ? tC.draw_sprite_white : null;
    let D3 = tC.draw_sprite_ext;
    let D4 = tC.draw_sprite_white;
    let D5 = (D6, Dt, DD) => tk.state !== 8 && Dt === tk.x && DD === tk.y ? D0.get(D6) : null;
    tC.draw_sprite_ext = function (D6, Dt, DD, Dh, ...Dj) {
      let DM = D5(D6, DD, Dh);
      if (DM) {
        return D3.call(this, D6, Dt, DD + DM[0], Dh + DM[1], ...Dj);
      } else {
        return D3.call(this, D6, Dt, DD, Dh, ...Dj);
      }
    };
    if (typeof D4 == "function") {
      tC.draw_sprite_white = function (D6, Dt, DD, Dh, ...Dj) {
        let DM = D5(D6, DD, Dh);
        if (DM) {
          return D4.call(this, D6, Dt, DD + DM[0], Dh + DM[1], ...Dj);
        } else {
          return D4.call(this, D6, Dt, DD, Dh, ...Dj);
        }
      };
    }
    try {
      tv();
    } finally {
      if (D1) {
        tC.draw_sprite_ext = D1;
      } else {
        delete tC.draw_sprite_ext;
      }
      if (typeof D4 == "function") {
        if (D2) {
          tC.draw_sprite_white = D2;
        } else {
          delete tC.draw_sprite_white;
        }
      }
    }
  }, "shifted");
  nN.heroDraw = function (tk, tC, tv) {
    let D0 = typeof hg == "function" ? D3 => hg(tk, tC, D3) : D3 => {
      D3();
    };
    if (nw.chapter !== ty) {
      return D0(tv);
    }
    let D1 = tv;
    let D2 = tC && hE(tk);
    if (D2) {
      let D3 = D1;
      D1 = () => hR(tk, tC, D3, D2);
    }
    if (tk.normalsprite === "spr_gameshow_drowningRalsei_ralsei_origin_edit") {
      let D4 = D1;
      D1 = () => {
        let D5 = Object.prototype.hasOwnProperty.call(tC, "draw_sprite_ext") ? tC.draw_sprite_ext : null;
        let D6 = tC.draw_sprite_ext;
        let Dt = tk.image_xscale;
        let DD = tk.image_yscale;
        let Dh = Dj => Math.abs(Dj) === 2 ? Math.sign(Dj) : Dj;
        tC.draw_sprite_ext = function (Dj, DM, Dl, Do, DG, DS, ...Df) {
          return D6.call(this, Dj, DM, Dl, Do, Dh(DG), Dh(DS), ...Df);
        };
        tk.image_xscale = Dh(Dt);
        tk.image_yscale = Dh(DD);
        try {
          D4();
        } finally {
          tk.image_xscale = Dt;
          tk.image_yscale = DD;
          if (D5) {
            tC.draw_sprite_ext = D5;
          } else {
            delete tC.draw_sprite_ext;
          }
        }
      };
    }
    if (tk.state === 8 && hK.has(tk.sprite_index)) {
      let D5 = D1;
      D1 = () => {
        tk.image_xscale = 1;
        tk.image_yscale = 1;
        try {
          D5();
        } finally {
          tk.image_xscale = 2;
          tk.image_yscale = 2;
        }
      };
    }
    return D0(D1);
  };
}
{
  let hm = nO.prototype.create;
  nO.prototype.create = function (...tk) {
    let tC = hm.apply(this, tk);
    if (nw.chapter === ty && Wl.exists("obj_yellow_trial_manager")) {
      this.depth = -500;
    }
    if (nw.chapter === ty) {
      tP(this.mystring);
    }
    return tC;
  };
  let hp = nO.prototype.nextmsg;
  nO.prototype.nextmsg = function (...tk) {
    let tC = hp.apply(this, tk);
    if (nw.chapter === ty && !this.destroyed) {
      tP(this.mystring);
    }
    return tC;
  };
}
function tP(tk) {
  if (nw.typer === 88 || nw.typer === 96 || nw.typer === 86) {
    tk = String(tk ?? "");
    if (tk.includes("\\V")) {
      nw.voiceclipmode = nw.flag && nw.flag[1391] === 1 ? 2 : 0;
      if (tk.includes("\\v1")) {
        nw.voiceclipmode = 1;
      }
    } else {
      nw.voiceclipmode = tk.includes("\\v1") ? 1 : 2;
    }
  }
}
WG(tP, "floweryVoiceMode");
{
  let hy = n1.prototype.userEvent0;
  n1.prototype.userEvent0 = function () {
    let tk = Wl.first("obj_huge_anime_face");
    if (nw.chapter === ty && tk && tk.super >= 1 && !(this.iframes > 0) && !(this.super >= 1)) {
      this.super = 1;
    }
    return hy.call(this);
  };
}
var tc = 5;
var tO = [1, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 500, 501, 777];
var tV = [1, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 501, 777];
var tJ = {
  1: "A developer test encounter (obj_baseenemy) - in the data, never started by the game.",
  213: "A developer placeholder (battle message \"SETH AND 1 SHINOBEETLE\") - in the data, never started by the game.",
  235: "A developer test encounter (obj_enemy_example) - in the data, never started by the game.",
  500: "A developer test encounter (obj_multiboss_enemy1, obj_multiboss_enemy2, obj_multiboss_enemy3) - in the data, never started by the game.",
  501: "A developer test encounter (obj_multiboss_controller_enemy1, obj_multiboss_controller_enemy2, obj_multiboss_controller_enemy3) - in the data, never started by the game.",
  777: "A developer test encounter (obj_baseenemy, obj_bullettester_enemy) - in the data, never started by the game."
};
var tu = "rakuichi_buster_wip";
var tN = {
  220: "miniboss_new_section_idea_wip",
  222: "miniboss_new_section_idea_wip",
  223: "miniboss_new_section_idea_wip",
  224: "pink",
  225: "Flowerman_Arrangement",
  234: "inappropriate_recycling"
};
var tw = {
  220: [1, 0, 0]
};
var tQ = {
  charweapon: {
    1: 53,
    2: 24,
    3: 25,
    4: 12
  },
  maxhp: {
    1: 240,
    2: 290,
    3: 210,
    4: 90
  },
  at: {
    1: 17,
    2: 22,
    3: 15,
    4: 3
  },
  chararmor1: {
    1: 25,
    2: 25,
    3: 25,
    4: 14
  },
  chararmor2: {
    1: 25,
    2: 25,
    3: 25,
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
    "2,2": 13,
    "3,0": 3,
    "3,1": 2,
    "3,2": 12
  }
};
var tz = {};
var tA = {
  default: 0.7
};
var tT = {};
nH(5, {
  SCR: n2,
  OBJ: nD,
  startStats: tQ
});
function tB() {
  return nX({
    ch: 5,
    cases: tO,
    scr_encountersetup: WR,
    scr_monstersetup: WU,
    ENC_BG: We,
    ENC_MUSIC: {
      ...WZ,
      ...tN
    },
    DEFAULT_MUSIC: tu || WF,
    cut: Object.fromEntries(Object.entries(tJ).map(([tk, tC]) => [Number(tk), tC])),
    verified: tV,
    party: Object.fromEntries(Object.entries(tw).map(([tk, tC]) => [Number(tk), tC])),
    room: Object.fromEntries(Object.entries(tz).map(([tk, tC]) => [Number(tk), tC])),
    musiclevel: tA,
    story: tT
  });
}
WG(tB, "buildFights");
export { tO as CASES, tc as CHAPTER, tu as DEFAULT_SONG, tJ as DEV, tN as ENC_MUSIC_FROM_EVENTS, tA as MUSIC_LEVEL, tw as PARTY, tz as ROOMS, tQ as START_STATS, tT as STORY, tV as VERIFIED, tB as buildFights };
