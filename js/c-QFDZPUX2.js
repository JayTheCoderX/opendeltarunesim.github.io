import { b as f, g as a, h as N } from './c-VWTE3AY2.js';
import { L as F, k as p, ub as y } from './c-PWNRTD7X.js';
import { A as D, B as Z, C as b, D as m, E as K, F as P, G as q, H as c, J as z, K as l, L as s, M as O, a as k, b as d, e as j, f as T, g as u, h as Q, i as h, j as V, k as M, l as B, o as i, r as x, s as U, t as r, u as v, v as e, x as Y, y as S, z as C } from './c-HUDNK55W.js';
import { f as t, g as o } from './c-3ELH3LBH.js';
import { b as X, f as I0, n as I1, o as I2, q as I3 } from './c-MYK6C3LF.js';
import { B as I4, E as I5, F as I6, G as I7, H as I8, M as I9, N as II, O as IA, P as In, U as IL, V as Iw, a as IH, d as IW, g as Ig, l as IR, m as IG, o as IE, q as If, r as Ia, v as IN, y as IJ } from './c-ZQQWH6UG.js';
import { A as IF, B as Ip, C as Iy, Ca as ID, Ib as IZ, N as Ib, Ra as Im, h as IK, hb as IP, l as Iq, m as Ic, na as Iz, nc as Il, o as Is, oa as IO, pa as Ik, pb as Id, qb as Ij, r as IT, ta as Iu, tc as IQ, u as Ih, ua as IV, uc as IM, v as IB, va as Ii, w as Ix, wa as IU, x as Ir, xb as Iv, xc as Ie, y as IY, z as IS } from './c-PBMEVLU6.js';
import { a as IC, e as Io, g as IX, l as A0 } from './c-XSSGDLV7.js';
A0(), A0();
function A1(A) {
  if (!A) return 0x0;
  let n = Ig.charhero && Ig.charhero[A],
    nv = n && k[n];
  return nv && nv.equipchar ? nv.equipchar : IR(A);
}
IC(A1, 'gameChar');
var A2 = 0xd;
function A3(A) {
  return !!A && Ig.charweapon && Ig.charweapon[A] === A2 && A1(A) === 0x4;
}
IC(A3, 'wearsThornRing');
function A4(A, n) {
  if (Ig.chapter < 0x4) return A;
  let nv = Ig.char[n];
  if (!nv) return A;
  let ne = 0x0;
  for (let nY of [Ig.chararmor1[nv], Ig.chararmor2[nv]]) (nY === 0x1a || nY === 0x1e) && (ne += Math.ceil(A / 0x8));
  return A + ne;
}
IC(A4, 'healModify');
function A5(A) {
  if (A.bych) {
    let n = A.bych[Ig.chapter] ?? A.bych[Math.min(0x5, Math.max(0x1, Ig.chapter | 0x0))];
    if (n !== void 0x0) return n;
  }
  return A.heal || 0x0;
}
IC(A5, 'chapterHeal');
function A6(A, nv, ne, nY) {
  if (!A) return false;
  let nS = Ig.char[nv],
    nC = A1(nS);
  if (A.revive) {
    let no = A.revive === 'full' ? Math.ceil(A4(Ig.maxhp[nS], ne)) + Math.abs(Ig.hp[nS]) : Math.ceil(Ig.maxhp[nS] / 0x2);
    return A.revive === 'mint' && Ig.hp[nS] <= 0x0 && (no = Math.ceil(Ig.maxhp[nS]) + Math.abs(Ig.hp[nS])), nY.healOne(nv, no), true;
  }
  if (A.reviveall) {
    let nX = A.reviveall;
    for (let L0 = 0x0; L0 < If(); L0++) {
      let L1 = Ig.char[L0];
      if (!(L1 > 0x0)) continue;
      let L2 = nX.heal;
      Ig.hp[L1] <= 0x0 && (L2 = nX.deadheal ?? Math.ceil(Ig.maxhp[L1] / nX.deaddiv) + Math.abs(Ig.hp[L1])), nY.healOne(L0, A4(L2, ne));
    }
    return true;
  }
  if (A.poison) {
    let L3 = In.charinstance && In.charinstance(nv);
    return L3 && (L3.poisonamount = A.poison, L3.poisontimer = 0x0), nY.healOne(nv, A4(A.heal, ne), 'fuchsia'), true;
  }
  if (A.perchar && !(A.ch2only && Ig.chapter !== 0x2)) {
    let L4 = A.perchar[nC] ?? A.dflt ?? 0x0;
    return A.ch2only && Iv.exists('o_boxingcontroller') && (L4 = 0x64), nY.healOne(nv, A4(L4, ne)), A.noellebonus && nC === 0x4 && nY.healOne(0x0, A4(A.noellebonus, ne)), true;
  }
  return A.all ? (nY.healAll(A4(A5(A), ne)), true) : A.heal !== void 0x0 || A.bych ? (nY.healOne(nv, A4(A5(A), ne)), true) : false;
}
IC(A6, 'applyItemEffect');
function A7(A) {
  return !A || A.tp === void 0x0 ? null : A.tp === 'max' ? Math.ceil(Ig.maxtension) : A.tp === 'half' ? Math.ceil(Ig.maxtension / 0x2) : A.tp;
}
IC(A7, 'itemPickTension');
function A8(A) {
  return !A || !A.tpselect ? null : Math.ceil(Ig.maxtension * A.tpselect);
}
IC(A8, 'itemTargetTension'), A0();
const A9 = {};
A9.A = [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"], A9.B = ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "#######.", "#######.", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######."], A9.C = [".######.", "########", "##....##", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##....##", "########", ".######."], A9.D = ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######."], A9.E = ["########", "########", "##......", "##......", "##......", "##......", "#######.", "#######.", "##......", "##......", "##......", "##......", "##......", "########", "########"], A9.F = ["########", "########", "##......", "##......", "##......", "##......", "#######.", "#######.", "##......", "##......", "##......", "##......", "##......", "##......", "##......"], A9.G = [".######.", "########", "##....##", "##......", "##......", "##......", "##......", "##..####", "##..####", "##....##", "##....##", "##....##", "##....##", "########", ".######."], A9.H = ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"], A9.I = ["########", "########", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "########", "########"], A9.J = ["..######", "..######", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "##....##", "########", ".######."], A9.K = ["##.....##", "##.....##", "##....###", "##...###.", "##..###..", "##.###...", "#####....", "####.....", "#####....", "##.###...", "##..###..", "##...###.", "##....###", "##.....##", "##.....##"], A9.L = ["##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "########", "########"], A9.M = ["##....##", "###..###", "########", "##.##.##", "##.##.##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"], A9.N = ["##....##", "##....##", "###...##", "###...##", "####..##", "##.#..##", "##.##.##", "##..#.##", "##..####", "##...###", "##...###", "##....##", "##....##", "##....##", "##....##"], A9.O = [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."], A9.P = ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######.", "##......", "##......", "##......", "##......", "##......", "##......"], A9.Q = [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##.##.##", "##..####", "########", ".#######"], A9.R = ["########.", "#########", "##....###", "##.....##", "##.....##", "##.....##", "##....###", "########.", "########.", "##....###", "##.....##", "##.....##", "##.....##", "##.....##", "##.....##"], A9.S = [".######.", "########", "##....##", "##......", "##......", "##......", "#######.", ".#######", "......##", "......##", "......##", "......##", "##....##", "########", ".######."], A9.T = ["########", "########", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."], A9.U = ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."], A9.V = ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "..####..", "...##..."], A9.W = ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##.##.##", "##.##.##", "########", "###..###", "##....##"];
A9.X = ["##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "...##...", "...##...", "..####..", ".##..##.", ".##..##.", "##....##", "##....##", "##....##", "##....##"], A9.Y = ["##....##", "##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."], A9.Z = ["########", "########", "......##", ".....##.", ".....##.", "....##..", "....##..", "...##...", "...##...", "..##....", "..##....", ".##.....", "##......", "########", "########"], A9['0'] = [".######.", "########", "##....##", "##....##", "##...###", "##..####", "##.##.##", "##.##.##", "####..##", "###...##", "##....##", "##....##", "##....##", "########", ".######."], A9['1'] = ["...##...", "..###...", ".####...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "########", "########"], A9['2'] = [".######.", "########", "##....##", "......##", "......##", ".....###", "..#####.", ".#####..", "###.....", "##......", "##......", "##......", "##......", "########", "########"], A9['3'] = [".######.", "########", "##....##", "......##", "......##", "......##", "..#####.", "..######", "......##", "......##", "......##", "......##", "##....##", "########", ".######."], A9['4'] = ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "......##", "......##", "......##", "......##", "......##", "......##"], A9['5'] = ["########", "########", "##......", "##......", "##......", "##......", "#######.", "########", "......##", "......##", "......##", "......##", "##....##", "########", ".######."], A9['6'] = [".######.", "########", "##....##", "##......", "##......", "##......", "#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."], A9['7'] = ["########", "########", "......##", "......##", ".....##.", ".....##.", "....##..", "....##..", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."], A9['8'] = [".######.", "########", "##....##", "##....##", "##....##", "##....##", ".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."], A9['9'] = [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".#######", "......##", "......##", "......##", "##....##", "########", ".######."], A9['-'] = ["......", "......", "......", "......", "......", "......", "######", "######", "......", "......", "......", "......", "......", "......", "......"], A9['.'] = ['..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '##', '##'], A9['!'] = ['##', '##', '##', '##', '##', '##', '##', '##', '##', '##', '##', '..', '..', '##', '##'], A9['\x27'] = ['##', '##', '##', '##', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..'], A9['?'] = [".######.", "########", "##....##", "......##", "......##", ".....###", "...####.", "...###..", "...##...", "...##...", "...##...", "........", "........", "...##...", "...##..."], A9['\x20'] = ["....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "...."];
var AA = A9,
  An = 15,
  AL = 58,
  Aw = {};
function AH(A) {
  const n = {};
  n.zNfho = function (L0, L1) {
    return L0 < L1;
  };
  n.NZEuM = function (L0, L1) {
    return L0 < L1;
  }, n.qADVv = function (L0, L1) {
    return L0 - L1;
  }, n.XGlWJ = function (L0, L1) {
    return L0 === L1;
  };
  const ne = n;
  let nY = A[0].length;
  if (ne.zNfho(nY, 6)) return A;
  let nC = -1,
    no = 99;
  for (let L0 = 2; ne.NZEuM(L0, ne.qADVv(nY, 2)); L0++) {
    let L1 = 0;
    for (let L2 of A) ne.XGlWJ(L2[L0], '#') && L1++;
    ne.zNfho(L1, no) && (no = L1, nC = L0);
  }
  return A.map(L3 => L3.slice(0, nC) + L3.slice(nC + 1));
}
IC(AH, "narrow");
var AW = {};
function Ag(A, n) {
  const ne = {
    'tQYup': function (L0, L1) {
      return L0 === L1;
    },
    'UDgeI': function (L0, L1) {
      return L0(L1);
    },
    'nalqG': function (L0, L1) {
      return L0(L1);
    },
    'wsbfr': function (L0, L1) {
      return L0(L1);
    },
    'qtyKX': function (L0, L1) {
      return L0(L1);
    },
    'airYM': function (L0, L1) {
      return L0 + L1;
    },
    'PiJSw': function (L0, L1) {
      return L0 * L1;
    },
    'rZRdl': function (L0, L1) {
      return L0 - L1;
    }
  };
  let nY = [...String(A).toUpperCase()].map(L0 => {
      let L1 = AA[L0] || AA['\x20'];
      return n ? n === 2 ? AW[L0] || (AW[L0] = L0 === '\x20' ? L1.map(L5 => L5.slice(0, 2)) : AH(Aw[L0] || (Aw[L0] = AH(L1)))) : Aw[L0] || (Aw[L0] = AH(L1)) : L1;
    }),
    nS = nY.reduce((L0, L1) => L0 + L1[0].length, 0) + 1 * Math.max(0, nY.length - 1);
  const nC = {};
  nC.glyphs = nY;
  return nC.w = nS, nC;
}
IC(Ag, "layout");
function AR(A) {
  const ne = {
    'rcMDI': function (nY, nS, nC) {
      return nY(nS, nC);
    }
  };
  return {
    'w': Ag(A, false).w,
    'narrow': Ag(A, true).w
  };
}
IC(AR, "plateWidth");
function AG(A, n = AL) {
  const nv = {
    'vlZoA': function (L3, L4) {
      return L3 + L4;
    },
    'PqnPT': function (L3, L4) {
      return L3 + L4;
    },
    'ivWuV': function (L3, L4) {
      return L3 + L4;
    },
    'VjLWB': "spr_bname@",
    'XeqfX': function (L3, L4) {
      return L3(L4);
    },
    'kYvpH': function (L3, L4) {
      return L3 > L4;
    },
    'yFjvd': function (L3, L4, L5) {
      return L3(L4, L5);
    },
    'WRbZg': function (L3, L4, L5) {
      return L3(L4, L5);
    },
    'pHokY': "canvas",
    'eivFG': "#ffffff",
    'dVAqG': function (L3, L4) {
      return L3 < L4;
    },
    'rLdtm': function (L3, L4) {
      return L3 === L4;
    },
    'RAbFX': function (L3, L4) {
      return L3 + L4;
    },
    'fRHxq': function (L3, L4) {
      return L3 - L4;
    },
    'ZIQXV': function (L3, L4) {
      return L3 - L4;
    }
  };
  let ne = "spr_bname@" + String(A).toUpperCase() + '@' + n;
  if (Ib[ne]) return ne;
  if (typeof document > 'u') return null;
  let nS = Ag(A, false);
  nS.w > n && (nS = Ag(A, true)), nS.w > n && (nS = Ag(A, 2));
  let nC = 1,
    no = document.createElement("canvas");
  no.width = Math.max(1, nS.w), no.height = An;
  let L1 = no.getContext('2d');
  if (!L1) return null;
  L1.fillStyle = "#ffffff";
  let L2 = 0;
  for (let L3 of nS.glyphs) {
    for (let L4 = 0; L4 < An; L4++) {
      let L5 = L3[L4];
      for (let L6 = 0; L6 < L5.length; L6++) L5[L6] === '#' && L1.fillRect(L2 + L6, L4, 1, 1);
    }
    L2 += L3[0].length + nC;
  }
  return Ib[ne] = {
    'name': ne,
    'img': [no],
    'w': no.width,
    'h': An,
    'ox': 0x0,
    'oy': 0x0,
    'frames': 0x1,
    'bb': [0, 0, no.width - 1, An - 1],
    'precise': false,
    'masks': null
  }, ne;
}
IC(AG, "namePlate");
var AE = class Lm extends Id {
  ["create"]() {
    this.spec = 0x0, this.delaytimer = 0x0, this.delay = 0x2, this.active = 0x0, this.damage = 0x0, this.bounces = 0x0, this.type = -0x1, this.stretch = 0.2, this.stretchgo = 0x1, this.lightf = Iq(IK.purple, IK.white, 0.6), this.lightb = Iq(IK.aqua, IK.white, 0.5), this.lightg = Iq(IK.lime, IK.white, 0.5), this.lighty = Iq(IK.yellow, IK.white, 0.3), this.aqcolor = Iq(IK.aqua, IK.blue, 0.3), this.dkgreen = Iq(IK.green, IK.black, 0.05), this.kill = 0x0, this.killtimer = 0x0, this.killactive = 0x0, Iv.with('obj_dmgwriter', A => {
      A.type !== 0x3 && (A.killtimer = 0x0);
    }), this.specialmessage = 0x0, this.stayincamera = Ig.chapter === 0x1 ? 0x0 : 0x1, this.xx = F();
  }
  ["draw"](A) {
    if (this.delaytimer < this.delay && Iv.with('obj_dmgwriter', n => {
      n.killtimer = 0x0;
    }), this.delaytimer++, this.delaytimer === this.delay && (this.vspeed = -0x5 - Is(0x2), this.hspeed = 0xa, this.vstart = this.vspeed, this.flip = 0x5a), this.delaytimer >= this.delay) {
      let n = IK.white;
      this.type === 0x0 && (n = this.lightb), this.type === 0x1 && (n = this.lightf), this.type === 1.5 && (n = this.dkgreen), this.type === 0x2 && (n = this.lightg), this.type === 0x3 && (n = IK.lime), this.type === 0x4 && (n = IK.red), this.type === 0x5 && this.damage < 0x0 && (n = IK.ltgray), this.type === 0x6 && (n = this.lighty);
      let nv = this.specialmessage;
      if (this.damage === 0x0 && (nv = 0x1), this.type === 0x4 && (nv = 0x2), this.type === 0x5 && this.damage === 0x64 && (nv = 0x5), this.type === 0xc && (nv = 0xa), this.type === 0xd && (nv = 0xd, n = this.aqcolor), this.hspeed > 0x0 && (this.hspeed -= 0x1), this.hspeed < 0x0 && (this.hspeed += 0x1), IF(this.hspeed) < 0x1 && (this.hspeed = 0x0), nv === 0x0) {
        this.damagemessage === void 0x0 && (this.damagemessage = this.type === 0x5 ? (this.damage < 0x0 ? '' : '+') + String(this.damage) + '%' : String(this.damage));
        let ne = this.type === 0x5 ? 'spr_numbersfontbig_gold' : 'spr_numbersfontbig',
          nY = this.type === 0x5 ? "0123456789+-%" : "0123456789";
        A.draw_set_halign('right');
        let nS = this.spec === 0x1 ? 0x5a : 0x0;
        A.draw_spritefont(ne, nY, this.damagemessage, this.x + 0x1e, this.y, 0x2 - this.stretch, this.stretch + this.kill, n, Math.max(0x0, 0x1 - this.kill), 0x0, true, nS), A.draw_set_halign('left');
      } else {
        let nC = {
            0x1: 0x0,
            0x2: 0x1,
            0x3: 0x2,
            0x4: 0x3,
            0x5: 0x5,
            0x6: 0x8,
            0x7: 0x9,
            0x8: 0xa,
            0x9: 0xb,
            0xa: 0xd,
            0xd: 0xe
          },
          no = nC[nv] === void 0x0 ? 0x3 : nC[nv],
          nX = nv === 0x2 || nv === 0xa ? IK.red : nv === 0x3 || nv === 0x4 || nv === 0x5 ? IK.lime : nv >= 0x6 && nv <= 0x9 ? IK.white : nv === 0xd ? this.aqcolor : n;
        A.draw_sprite_ext('spr_battlemsg', no, this.x + 0x1e, this.y, 0x2 - this.stretch, this.stretch + this.kill, 0x0, nX, Math.max(0x0, 0x1 - this.kill));
      }
      this.bounces < 0x2 && (this.vspeed += 0x1), this.y > this.ystart && this.bounces < 0x2 && this.killactive === 0x0 && (this.y = this.ystart, this.vspeed = this.vstart / 0x2, this.bounces++), this.bounces >= 0x2 && this.killactive === 0x0 && (this.vspeed = 0x0, this.y = this.ystart), this.stretchgo === 0x1 && (this.stretch += 0.4), this.stretch >= 1.2 && (this.stretch = 0x1, this.stretchgo = 0x0), this.killtimer++, this.killtimer > 0x23 && (this.killactive = 0x1), this.killactive === 0x1 && (this.kill += 0.08, this.y -= 0x4), this.kill > 0x1 && this.instance_destroy();
    }
    Ig.fighting === 0x1 && this.stayincamera === 0x1 && this.x >= this.xx + 0x258 && (this.x = this.xx + 0x258);
  }
};
IC(AE, 'obj_dmgwriter'), Io(AE, 'kinds', Ij('obj_dmgwriter', Id)), Io(AE, 'defaultDepth', 0x0);
var Af = AE,
  Aa = class LK extends Id {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.damage = 0x64, this.image_speed = 0.334;
      let A = Iv.first('obj_battlecontroller');
      A && (A.damagenoise = 0x1), this.maxindex = 0x3, this.critical = 0x0;
    }
    ["step"]() {
      this.critical === 0x1 && (this.image_xscale += 0.1, this.image_yscale += 0.1), this.image_index >= this.maxindex && this.instance_destroy();
    }
  };
IC(Aa, 'obj_basicattack'), Io(Aa, 'kinds', Ij('obj_basicattack', Id)), Io(Aa, 'defaultDepth', -0x64), Io(Aa, 'defaultSprite', 'spr_attack_mash1');
var AN = Aa,
  AJ = class LP extends Id {
    ["create"]() {
      this.mag = 0.1, this.t = 0x0;
    }
    ["step"]() {
      this.t++, this.image_xscale += this.mag * 0x4, this.image_yscale += this.mag, this.image_alpha -= 0.1, this.image_alpha <= 0x0 && this.instance_destroy();
    }
    ["draw"](A) {
      A.draw_sprite_ext(this.sprite_index, 0x0, this.x - (this.image_xscale - 0x1) * 0x5, this.y - (this.image_yscale - 0x1) * 0x13, this.image_xscale, this.image_yscale, 0x0, this.image_blend, this.image_alpha);
    }
  };
IC(AJ, 'obj_burstbolt'), Io(AJ, 'kinds', Ij('obj_burstbolt', Id)), Io(AJ, 'defaultDepth', 0x0), Io(AJ, 'defaultSprite', 'spr_attackspot');
var AF = AJ,
  Ap = class Lq extends Id {
    ["create"]() {
      this.t = 0x0, this.target = null, this.visible = false, this.stars = [], this.particlecolor = IK.lime;
    }
    ["step"]() {
      this.t++;
      let A = this.target;
      if (!A || A.destroyed) {
        this.instance_destroy();
        return;
      }
      if (this.t === 0x1 && (this.x = A.x, this.y = A.y, this.sw = A.mywidth || A.sprite_width, this.sh = A.myheight || A.sprite_height, A.flash = 0x1, A.becomeflash = 0x1, A.fsiner = 0x0), this.t >= 0x1 && this.t <= 0x5) for (let n = 0x0; n < 0x2; n++) {
        let nv = IZ(this.x + Is(this.sw), this.y + Is(this.sh), X);
        nv.sprite_index = 'spr_sparestar_anim', nv.image_angle = Is(0x168), nv.depth = -0xa, nv.image_xscale = 0x2, nv.image_yscale = 0x2, nv.image_alpha = 0x2, nv.image_speed = 0.25, nv.hspeed = 0x2 - Is(0x2), nv.vspeed = -0x3 - Is(0x2), nv.image_blend = this.particlecolor, nv.fadespeed = 0.08;
      }
      this.t > 0x1e && this.instance_destroy();
    }
  };
IC(Ap, 'obj_healanim'), Io(Ap, 'kinds', Ij('obj_healanim', Id)), Io(Ap, 'defaultDepth', 0x0);
var Ay = Ap,
  AD = class Lc extends Id {
    ["create"]() {
      this.tsiner = 0x0, Ig.tensionselect = 0x0, this.apparent = Ig.tension, this.current = Ig.tension, this.changetimer = 0xf, this.y = 0x28, this.x = -0x28, this.hspeed = 0xd, this.friction = 0x1, this.flashsiner = 0x0, this.image_speed = 0x0, Ig.chapter >= 0x4 && In.tpCreate && In.tpCreate(this);
    }
    ["alarmEvent"](A) {
      A === 0x5 && (this.hspeed = -0xd, this.friction = -0.4);
    }
    ["draw"](A) {
      if (n0()) return;
      if (Ig.chapter === 0x2 && Iv.exists('obj_gigaqueen_enemy')) {
        let L5 = Iv.first('obj_battlecontroller');
        if (L5 && L5.gigaqueencon !== 0x0) return;
      }
      Ig.chapter >= 0x2 && (this.y = (Iv.view.y || 0x0) + 0x28);
      let nv = this.sprite_height,
        ne = this.sprite_width,
        nY = this.x,
        nS = this.y,
        nC = Ig.chapter >= 0x4 && !!(In.tpBlueBar && In.tpBlueBar(this)),
        no = Ig.chapter >= 0x4 && !!(In.tpCustom && In.tpCustom(this));
      A.draw_sprite('spr_tplogo', 0x0, nY - 0x1e, nS + 0x1e), no || A.draw_sprite('spr_tensionbar', nC ? 0x2 : 0x1, nY, nS), A.draw_set_font('fnt_mainbig'), this.flashsiner++;
      let nX = IS(this.apparent / Ig.maxtension * 0x64),
        L0 = 0x0;
      if (nX < 0x64 ? (A.draw_text(nY - 0x1e, nS + 0x46, String(nX), IK.white), no && In.tpCustomText && In.tpCustomText(this, A) || A.draw_text(nY - 0x19, nS + 0x5f, '%', IK.white)) : (L0 = 0x1, A.draw_text(nY - 0x1c, nS + 0x46, 'M', IK.yellow), A.draw_text(nY - 0x18, nS + 0x5a, 'A', IK.yellow), A.draw_text(nY - 0x14, nS + 0x6e, 'X', IK.yellow)), IF(this.apparent - Ig.tension) < 0x14 && (this.apparent = Ig.tension), this.apparent < Ig.tension && (this.apparent += 0x14), this.apparent > Ig.tension && (this.apparent -= 0x14), this.apparent !== this.current) {
        if (this.changetimer++, this.changetimer > 0xf) {
          let L6 = this.apparent - this.current;
          L6 > 0x0 && (this.current += 0x2), L6 > 0xa && (this.current += 0x2), L6 > 0x19 && (this.current += 0x3), L6 > 0x32 && (this.current += 0x4), L6 > 0x64 && (this.current += 0x5), L6 < 0x0 && (this.current -= 0x2), L6 < -0xa && (this.current -= 0x2), L6 < -0x19 && (this.current -= 0x3), L6 < -0x32 && (this.current -= 0x4), L6 < -0x64 && (this.current -= 0x5), IF(this.apparent - this.current) < 0x3 && (this.current = this.apparent);
        }
      } else this.changetimer = 0x0;
      if (no) {
        In.tpCustomDraw(this, A, L0);
        return;
      }
      let L1 = "#008080",
        L2 = Iq(IK.blue, L1, 0.5),
        L3 = nC ? L0 ? Iq(L1, L2, 0.5) : L2 : L0 ? Iq(IK.yellow, IK.orange, 0.5) : IK.orange,
        L4 = (L7, L8) => {
          A.draw_set_color(L7), A.draw_rectangle(nY + 0x3, nS + nv - 0x1, nY + ne - 0x1, nS + nv - L8 / Ig.maxtension * nv, false);
        };
      if ((this.current > 0x0 || this.apparent > 0x0) && (this.apparent < this.current && (L4(nC ? IK.blue : IK.red, this.current), L4(nC ? L2 : IK.orange, this.apparent)), this.apparent > this.current && (L4(IK.white, this.apparent), L4(L3, this.current)), this.apparent === this.current && L4(L3, this.current)), Ig.tensionselect > 0x0) {
        this.tsiner++, A.draw_set_color(IK.white), A.draw_set_alpha(IF(Ip(this.tsiner / 0x8) * 0.5) + 0.2);
        let L7 = nS + nv - this.current / Ig.maxtension * nv,
          L8 = L7 + Ig.tensionselect / Ig.maxtension * nv;
        L8 > nS + nv - 0x1 && (L8 = nS + nv - 0x1, A.draw_set_color(IK.dkgray), A.draw_set_alpha(0.7)), A.draw_rectangle(nY + 0x3, L8, nY + ne - 0x1, L7, false), A.draw_set_alpha(0x1);
      }
      this.apparent > 0x14 && this.apparent < Ig.maxtension && A.draw_sprite('spr_tensionmarker', 0x0, nY + 0x3, nS + nv - this.current / Ig.maxtension * nv), A.draw_sprite('spr_tensionbar', 0x0, nY, nS);
    }
  };
IC(AD, 'obj_tensionbar'), Io(AD, 'kinds', Ij('obj_tensionbar', Id)), Io(AD, 'defaultDepth', 0x1), Io(AD, 'defaultSprite', 'spr_tensionbar');
var AZ = AD,
  Ab = class Lz extends Id {
    ["create"]() {
      Object.assign(this, {
        'char': 0x0,
        'myself': 0x0,
        'points': 0x0,
        'becomeflash': 0x0,
        'state': 0x0,
        'flash': 0x0,
        'siner': 0x0,
        'fsiner': 0x0,
        'attacktimer': 0x0,
        'attacked': 0x0,
        'combatdarken': 0x1,
        'darkentimer': 0x0,
        'darkify': 0x0,
        'image_xscale': 0x2,
        'image_yscale': 0x2,
        'myheight': 0x25,
        'mywidth': 0x22,
        'index': 0x0,
        'specdraw': 0x0,
        'is_auto_susie': 0x0,
        'hurt': 0x0,
        'hurttimer': 0x0,
        'hurtindex': 0x0,
        'acttimer': 0x0,
        'defendtimer': 0x0,
        'itemed': 0x0,
        'tu': 0x0,
        'victoryanim': 0x0,
        'cancelattack': 0x0,
        'healnum': 0x0
      }), this.setup(), Ig.chapter >= 0x4 && In.heroSetup && In.heroSetup(this);
    }
    ["setup"]() {}
    ["draw"](A) {
      return Ig.chapter >= 0x4 && In.heroDraw ? In.heroDraw(this, A, () => this.drawBody(A)) : this.drawBody(A);
    }
    ["drawBody"](A) {
      return T(this, A, () => this.drawBodyRaw(A));
    }
    ["drawBodyRaw"](A) {
      let nv = Ig.char[this.myself],
        ne = this.idlesprite,
        nY = 0x0;
      if (Ig.hp[nv] > 0x0) {
        if (Ig.myfight === 0x3 && Ig.faceaction[this.myself] === 0x6 && (this.state = 0x6), this.state === 0x0 && this.hurt === 0x0) {
          this.acttimer = 0x0, ne = this.idlesprite;
          let nS = Ig.faceaction[this.myself];
          nS === 0x1 && (ne = this.attackreadysprite), nS === 0x3 && (ne = this.itemreadysprite), nS === 0x2 && (ne = this.spellreadysprite), nS === 0x6 && (ne = this.actreadysprite), Ig.charcond[this.myself] === 0x5 && (ne = this.defeatsprite, Ig.faceaction[this.myself] = 0x9), nS === 0x4 ? (ne = this.defendsprite, nY = this.defendtimer, this.defendtimer < this.defendframes && (this.defendtimer += 0.5)) : (this.defendtimer = 0x0, nY = this.idlespeed ? this.siner * this.idlespeed : this.siner / 0x5), this.siner++;
        }
        if (this.state === 0x1 && this.hurt === 0x0) {
          if (this.siner++, this.attacked === 0x0) {
            let nC = this.is('obj_heroralsei') ? 1.15 : this.is('obj_herosusie') ? 0.9 : 0x1;
            if (Im('snd_laz_c', {
              'pitch': nC
            }), Ig.chapter >= 0x4 && In.heroAttackStart && In.heroAttackStart(this), this.points === 0x96) {
              Im('snd_criticalswing');
              for (let no = 0x0; no < 0x3; no++) {
                let nX = IZ(this.x + this.mywidth + Is(0x32), this.y + 0x1e + Is(0x1e), X);
                nX.sprite_index = 'spr_lightfairy', nX.image_speed = 0.25, nX.depth = -0x14, nX.image_xscale = 0x2, nX.image_yscale = 0x2, nX.hspeed = 0x2 + Is(0x4), nX.friction = -0.25, nX.fadespeed = 0.05;
              }
            }
            this.attacked = 0x1, this.alarm[0x1] = 0xa;
          }
          nY = this.attacktimer < this.attackframes ? this.attacktimer : this.attackframes, ne = this.attacksprite, this.attacktimer += this.attackspeed;
        }
        this.state === 0x2 && this.hurt === 0x0 && (this.siner++, this.itemed === 0x0 && (this.itemed = 0x1, this.alarm[0x4] = 0xf), nY = this.attacktimer < this.spellframes ? this.attacktimer : this.spellframes, I8() === 0x0 && (this.attacktimer = 0x0), ne = this.spellsprite, this.attacktimer += this.spellspeed || 0.5, Ig.chapter >= 0x4 && In.heroSpellTick && In.heroSpellTick(this, ne)), this.state === 0x4 && this.hurt === 0x0 && (this.siner++, this.itemed === 0x0 && (this.itemed = 0x1, this.alarm[0x4] = 0xf), nY = this.attacktimer < this.itemframes ? this.attacktimer : this.itemframes, I8() === 0x0 && (this.attacktimer = 0x0), ne = this.itemsprite, this.attacktimer += 0.5, Ig.chapter >= 0x4 && In.heroItemTick && In.heroItemTick(this)), this.state === 0x6 && (Ig.myfight === 0x3 ? this.acttimer < this.actframes && (this.acttimer += 0.5) : this.acttimer += 0.5, ne = this.actsprite, nY = this.acttimer, this.acttimer >= this.actreturnframes && (this.acttimer = 0x0, this.state = 0x0, Ig.faceaction[this.myself] = 0x0)), this.state === 0x7 && (this.hurt = 0x0, this.hurttimer = 0x0, this.victoryanim < this.victoryframes ? (ne = this.victorysprite, nY = this.victoryanim, this.victoryanim += 0.334) : (ne = this.normalsprite, nY = 0x0)), Ig.chapter >= 0x4 && this.state === 0x8 && In.heroPoseEnd && In.heroPoseEnd(this) && (ne = this.idlesprite, nY = 0x0), this.hurt === 0x1 && this.state !== 0x8 && (this.hurtindex = this.hurttimer / 0x2, this.hurtindex > 0x2 && (this.hurtindex = 0x2), Ig.charcond[this.myself] === 0x5 && (Ig.faceaction[this.myself] = 0x5, Ig.charmove[this.myself] = 0x1, Ig.charcond[this.myself] = 0x0), Ig.faceaction[this.myself] === 0x0 && (Ig.faceaction[this.myself] = 0x5), Ig.faceaction[this.myself] !== 0x4 ? (this.specdraw = 0x1, A.draw_sprite_ext(this.hurtsprite, this.hurtindex, this.x - 0x14 + this.hurtindex * 0xa, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, this.image_alpha)) : (this.specdraw = 0x1, ne = this.defendsprite, nY = this.defendtimer, A.draw_sprite_ext(this.defendsprite, this.defendtimer, this.x - 0x14 + this.hurtindex * 0xa, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, this.image_alpha)), this.hurttimer > 0xf && (this.hurttimer = 0x0, this.hurt = 0x0, Ig.faceaction[this.myself] === 0x5 && (Ig.faceaction[this.myself] = 0x0)), this.hurttimer++);
      } else Ig.charcond[this.myself] = 0x0, this.hurttimer = 0x0, this.hurt = 0x0, ne = this.defeatsprite, nY = 0x0, this.siner++;
      if (this.thissprite = ne, this.index = nY, this.specdraw === 0x0 && this.state !== 0x8) {
        this.sprite_index = ne, this.image_index = nY, this.image_speed = 0x0;
        let L0 = this.image_xscale,
          L1 = this.image_yscale;
        A.draw_sprite_ext(ne, nY, this.x, this.y, L0, L1, 0x0, this.image_blend, this.image_alpha), this.flash === 0x1 && (this.fsiner++, A.draw_sprite_white(ne, nY, this.x, this.y, L0, L1, 0x0, (-Iy(this.fsiner / 0x5) * 0.4 + 0.6) * this.image_alpha));
      }
      this.state === 0x8 && A.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.specdraw = 0x0, this.becomeflash === 0x0 && (this.flash = 0x0), Ig.targeted[this.myself] === 0x1 ? Ig.mnfight === 0x1 && A.draw_sprite_ext('spr_chartarget', this.siner / 0xa, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, IK.white, 0x1) : this.combatdarken === 0x1 && Iv.exists('obj_darkener') && this.darkify === 0x1 && (this.darkentimer < 0xf && this.darkentimer++, this.image_blend = Iq(IK.white, IK.black, this.darkentimer / 0x1e)), this.darkify === 0x0 && (this.darkentimer > 0x0 && (this.darkentimer -= 0x3), this.darkentimer < 0x0 && (this.darkentimer = 0x0), this.image_blend = Iq(IK.white, IK.black, this.depthShade ? Math.max(this.darkentimer / 0x1e, this.depthShade) : this.darkentimer / 0x1e)), this.becomeflash = 0x0;
    }
    ["alarmEvent"](A) {
      if (A === 0x1 && this.attackHit(), A === 0x4 && this.actcast) {
        this.actcast = 0x0, I8() > 0x0 && nc(Ig.charspecial[this.myself], this.myself);
        return;
      }
      A === 0x4 && (Ig.faceaction[this.myself] = 0x0, I8() > 0x0 && nc(Ig.charspecial[this.myself], this.myself), this.state = 0x0, this.attacktimer = 0x0);
    }
    ["attackHit"]() {
      if (Ig.faceaction[this.myself] = 0x0, nH(this.myself), this.cancelattack === 0x0) {
        Ig.chapter >= 0x4 && In.heroAttackRetarget && In.heroAttackRetarget(this);
        let A = Ig.chartarget[this.myself],
          nv = IZ(Ig.monsterx[A], Ig.monstery[A] - Ig.hittarget[A] * 0x14 + 0x14, Af);
        nv.type = IL(this.char), nv.delay = 0x8, this.is('obj_herosusie') && Ig.charweapon[this.char] === 0x36 && nP(this.myself, Iv.exists('obj_sound_of_justice_enemy') || Iv.exists('obj_hammer_of_justice_enemy') ? 0x2 : IY(Ig.maxhp[this.char] * 0.1));
        let ne = Ir(Ig.battleat[this.myself] * this.points / 0x14 - Ig.monsterdf[A] * 0x3),
          nY = 0x0,
          nS = Ig.chapter === 0x3 ? Iv.first('obj_knight_enemy') : null;
        nS && (nS.blocking === 0x1 && nS.damagereduction < 0.1 && (nY = 0x1), ne = IY(ne * nS.damagereduction), this.is('obj_herokris') && (Ig.hp[0x2] < 0x0 && Ig.hp[0x3] < 0x0 ? ne *= 0x2 : Ig.hp[0x2] < 0x0 || Ig.hp[0x3] < 0x0 || (ne = Ir(ne * 0.5)))), Ig.monstertype[A] === 0x13 && (ne = IY(ne * 0.3)), Ig.chapter >= 0x4 && In.heroDamage && (ne = In.heroDamage(this, ne, A)), ne < 0x0 && (ne = 0x0);
        let nC = In.monsterinstance(A);
        ne === 0x0 && (nv.delay = 0x2, nC && nC.hurttimer <= 0xf && nC.candodge === 0x1 && (nC.dodgetimer = 0x0, nC.state = 0x4)), nv.damage = ne, Ig.hittarget[A] += 0x1;
        let no = Iv.first('obj_queen_enemy'),
          nX = 0x0;
        if (no ? Iv.first('obj_queenshield_enemy') ? (no.shieldhp -= ne, nX = 0x1) : (Ig.monsterhp[A] -= ne, ne !== 0x0 && (no.shieldbrokecon = 0x1)) : Ig.monsterhp[A] -= ne, Ig.chapter >= 0x4 && In.heroAttackLanded && In.heroAttackLanded(this, A, ne, nv, nC), this.is_auto_susie === 0x1 && Ig.monsterhp[A] <= 0x0 && nC && (Ig.flag[0x33 + nC.myself] = 0x5), ne > 0x0) {
          Ig.chapter >= 0x4 && In.heroHitTP ? I7(In.heroHitTP(this)) : Ig.monstertype[0x0] !== 0x14 ? I7(Ir(this.points / 0xa)) : I7(Ir(this.points / 0xf)), nY === 0x1 && (nS.blockanim = 0x1);
          let L1 = IZ(Ig.monsterx[A] + Is(0x6), Ig.monstery[A] + Is(0x6), AN);
          if (nY === 0x1 && L1.instance_destroy(), nY !== 0x1) {
            if (!(Ig.chapter >= 0x4 && In.heroAttackSprite && In.heroAttackSprite(this, L1))) {
              if (this.is('obj_herosusie')) L1.sprite_index = 'spr_attack_mash2', L1.image_speed = 0.5, L1.maxindex = 0x4, Im('snd_impact'), IZ(0x0, 0x0, I3);else {
                if (this.member && this.member.attack) {
                  let L2 = this.member.attack;
                  L2.slash && (L1.sprite_index = L2.slash), L2.sound && Im(L2.sound, {
                    'pitch': L2.pitch || 0x1
                  });
                }
              }
            }
          }
          if (this.is('obj_heroralsei') && (L1.sprite_index = 'spr_attack_slap1', L1.maxindex = 0x4, L1.image_speed = 0.5), this.points === 0x96 && (L1.image_xscale = 2.5, L1.image_yscale = 2.5), nX === 0x1) {
            let L3 = Iv.first('obj_queenshield_enemy');
            L3 && (L1.x = L3.x + 0x22, ne !== 0x0 && L3.event_user(0x0));
          } else no && (L1.x = no.x + 0x3e), nC && (nC.shakex = 0x9, nC.state = 0x3, nC.hurttimer = 0x1e);
          nC && (nC.hurtamt = ne);
        }
        if (nX === 0x1) {
          let L4 = Iv.first('obj_queenshield_enemy');
          L4 && (nv.x = L4.x, nv.depth -= 0x64);
        }
        Ig.chapter === 0x2 && Iv.first('obj_sweet_enemy') && Ig.monsterhp[A] <= 0x0 && (Ig.monsterhp[A] = 0x1);
        let L0 = no ? 0x1 : Iv.first('obj_spamton_neo_enemy') ? 0x2 : Iv.first('obj_berdlyb_enemy') ? 0x3 : 0x0;
        Ig.monsterhp[A] <= 0x0 && L0 === 0x0 && nC && nC.scr_monsterdefeat(), Ig.monsterhp[A] <= 0x0 && L0 === 0x3 && nC && (nC.endcon = 0x1);
      }
    }
  };
IC(Ab, 'obj_heroparent'), Io(Ab, 'kinds', Ij('obj_heroparent', Id)), Io(Ab, 'defaultDepth', 0x64);
var Am = Ab;
function AK(A, n) {
  let nv = j(n, Ib);
  Object.assign(A, nv.sprites, nv.frames, nv.size), A.herokey = nv.id, A.borrowedFrom = nv.borrowed || null;
}
IC(AK, 'applyHeroSet');
function AP(A) {
  if (A.herokey !== 'noelle' || A.borrowedFrom || Ig.charweapon[A.char] !== 0xd && Ig.charweapon[A.char] !== 0x16) return;
  let n = {
    'attackreadysprite': 'spr_noelleb_idle',
    'attacksprite': 'spr_noelleb_spell',
    'victorysprite': 'spr_noelleb_pray',
    'defendsprite': 'spr_noelleb_defend_sideb',
    'hurtsprite': 'spr_noelleb_hurt_sideb',
    'idlesprite': 'spr_noelleb_idle_sideb'
  };
  for (let [nv, ne] of Object.entries(n)) Ib[ne] && (A[nv] = ne);
  Ib.spr_noelleb_spell && (A.attackframes = 0x6), Ib.spr_noelleb_pray && (A.victoryframes = 0xa), Ib.spr_noelleb_defend_sideb && (A.defendframes = 0x5);
}
IC(AP, 'noelleSideB');
var Aq = class Ll extends Am {
  ["setup"]() {
    AK(this, this.herokey || 'kris');
  }
};
IC(Aq, 'obj_herokris'), Io(Aq, 'kinds', Ij('obj_herokris', Am));
var Ac = Aq,
  Az = class Ls extends Am {
    ["setup"]() {
      AK(this, this.herokey || 'susie');
    }
  };
IC(Az, 'obj_herosusie'), Io(Az, 'kinds', Ij('obj_herosusie', Am));
var Al = Az,
  AO = class LO extends Am {
    ["setup"]() {
      AK(this, this.herokey || 'ralsei'), this.herokey === 'ralsei' && Ig.chapter >= 0x2 && Ig.chapter <= 0x4 && Object.assign(this, {
        'attackframes': 0x6,
        'itemframes': 0x6,
        'defendframes': 0x7,
        'actframes': Ig.chapter === 0x2 ? 0x8 : 0x7,
        'actreturnframes': Ig.chapter === 0x2 ? 0xc : 0xa,
        'attackspeed': 0.5,
        'normalsprite': 'spr_ralsei_walk_right',
        'idlesprite': 'spr_ralsei_idle',
        'defendsprite': 'spr_ralsei_defend',
        'hurtsprite': 'spr_ralsei_hurt_fixed',
        'attackreadysprite': 'spr_ralsei_attackready',
        'attacksprite': 'spr_ralsei_attack',
        'itemsprite': 'spr_ralsei_item',
        'itemreadysprite': 'spr_ralsei_itemready',
        'spellreadysprite': 'spr_ralsei_spellready',
        'spellsprite': 'spr_ralsei_spell',
        'defeatsprite': 'spr_ralsei_defeat',
        'victorysprite': 'spr_ralsei_victory',
        'actreadysprite': 'spr_ralsei_actready',
        'actsprite': 'spr_ralsei_act',
        'victoryframes': 0x15,
        'mywidth': 0x34,
        'myheight': 0x56
      });
    }
  };
IC(AO, 'obj_heroralsei'), Io(AO, 'kinds', Ij('obj_heroralsei', Am));
var Ak = AO,
  Ad = class Lk extends Am {
    ["setup"]() {
      AK(this, this.herokey || 'noelle');
    }
  };
IC(Ad, 'obj_heronoelle'), Io(Ad, 'kinds', Ij('obj_heronoelle', Am));
var Aj = Ad,
  AT = IC((A, n) => {
    let nv = Ij(A, n);
    return nv.delete(n.name), nv;
  }, 'extraKinds'),
  Au = class Ld extends Ac {
    ['is'](A) {
      return A === 'obj_herokris' || super.is(A);
    }
  };
IC(Au, 'obj_herokris_extra'), Io(Au, 'kinds', AT('obj_herokris_extra', Ac));
var AQ = Au,
  Ah = class Lj extends Al {
    ['is'](A) {
      return A === 'obj_herosusie' || super.is(A);
    }
  };
IC(Ah, 'obj_herosusie_extra'), Io(Ah, 'kinds', AT('obj_herosusie_extra', Al));
var AV = Ah,
  AM = class LT extends Ak {
    ['is'](A) {
      return A === 'obj_heroralsei' || super.is(A);
    }
  };
IC(AM, 'obj_heroralsei_extra'), Io(AM, 'kinds', AT('obj_heroralsei_extra', Ak));
var AB = AM,
  Ai = class Lu extends Aj {
    ['is'](A) {
      return A === 'obj_heronoelle' || super.is(A);
    }
  };
IC(Ai, 'obj_heronoelle_extra'), Io(Ai, 'kinds', AT('obj_heronoelle_extra', Aj));
var AU = Ai,
  Ar = new Map([[Ac, AQ], [Al, AV], [Ak, AB], [Aj, AU]]),
  Av = class Li extends Am {
    ["setup"]() {
      AK(this, this.herokey || 'kris'), this.member = (k[this.herokey] || {}).member || null;
      let A = i(this);
      this.image_xscale = A, this.image_yscale = A, this.mywidth = Ir(this.mywidth * A / 0x2), this.myheight = Ir(this.myheight * A / 0x2);
    }
    ["drawBody"](A) {
      return B(this, A, () => super.drawBody(A));
    }
  };
IC(Av, 'obj_herocustom'), Io(Av, 'kinds', Ij('obj_herocustom', Am));
var AY = Av,
  AS = class Le extends Id {
    constructor() {
      super(), Object.assign(this, {
        'myself': 0x0,
        'state': 0x0,
        'hurttimer': 0x0,
        'hurtamt': 0x0,
        'shakex': 0x0,
        'candodge': 0x0,
        'dodgetimer': 0x0,
        'acting': 0x0,
        'actcon': 0x0,
        'talked': 0x0,
        'attacked': 0x0,
        'flash': 0x0,
        'fsiner': 0x0,
        'becomeflash': 0x0,
        'mytarget': 0x3,
        'image_xscale': 0x2,
        'image_yscale': 0x2
      });
    }
    ["userEvent"](A) {
      A === 0xc && (Ig.monsterx[this.myself] = this.x + 0x14, Ig.monstery[this.myself] = this.y), A === 0xa && this.spared();
    }
    ["spared"]() {
      In.scr_spareanim && In.scr_spareanim.call(this), In.scr_recruit && In.scr_recruit.call(this), this.scr_monsterdefeat(), this.instance_destroy();
    }
    ["scr_monsterdefeat"]() {
      let A = this.myself;
      Ig.monster[A] === 0x1 && (Ig.monstergold[0x3] += Ig.monstergold[A], Ig.monsterexp[0x3] += Ig.monsterexp[A], Ig.monster[A] = 0x0, Ig.flag[0x33 + A] === 0x0 && (Ig.flag[0x33 + A] = 0x2, Ig.monsterhp[A] <= 0x0 && (Ig.flag[0x33 + A] = 0x1)), Ig.flag[0x33 + A] === 0x6 && (Ig.flag[0x2d] = (Ig.flag[0x2d] | 0x0) + 0x1, Ig.monstergold[0x3] += 0x18), this.userEvent(0xb));
    }
  };
IC(AS, 'obj_monsterparent'), Io(AS, 'kinds', Ij('obj_monsterparent', Id)), Io(AS, 'defaultDepth', 0x5a);
var AC = AS,
  At = IC(() => {
    if (Ig.chapter !== 0x3) return false;
    let A = Iv.first('obj_knight_enemy');
    return !!(A && !A.destroyed && A.end_cutscene_version > 0x0);
  }, 'knightEndCutscene'),
  Ao = IC(A => {
    let n = Iv.first(A);
    return n && !n.destroyed ? n : null;
  }, 'ex'),
  AX = IC(() => {
    if (Ig.chapter !== 0x3) return false;
    if (Ig.minigameStage) return true;
    let A = Ao('obj_actor_tenna');
    if (A && A.threepartmode === 0x1 && Ao('obj_lightemup_controller')) return false;
    let n = Ao('obj_tenna_zoom');
    if (n && n.minigameinsanityintro) return false;
    if (Ao('obj_susiezilla_gamecontroller') || Ao('obj_chefs_game') || Ao('obj_rhythmgame')) return true;
    let nv = Ao('obj_tenna_minigame_ui');
    if (nv && nv.enabled === true || Ao('obj_shootout_controller') && Ao('obj_tenna_enemy') || n && n.con === 0x0 && n.screenshot) return true;
    let ne = Ao('obj_shadowman_sharpshoot_cursor');
    return !!(ne && ne.disablesbattleui === true);
  }, 'minigameHidesUI'),
  n0 = IC(() => Ig.chapter !== 0x3 ? false : Ig.minigameStage || Ao('obj_susiezilla_gamecontroller') || Ao('obj_chefs_game') || Ao('obj_rhythmgame') || Ao('obj_shootout_controller') || Ao('obj_gameover_board') || Ao('obj_gameover_minigame') ? true : At(), 'tensionbarHidden'),
  n1 = IC(() => At() || AX(), 'battleUIHidden'),
  n2 = IC(() => {
    if (Ig.chapter !== 0x3) return false;
    if (Ig.minigameStage) return true;
    let A = Ao('obj_rouxls_ch3_enemy');
    if (A && A.intro < 0x2) return true;
    let n = Ao('obj_tenna_board4_enemy');
    if (n && n.intro < 0x2) return true;
    let nv = Ao('obj_elnina_lanino_controller');
    if (nv && nv.intro < 0x4) return true;
    let ne = Ao('obj_tennabattleconvo_controller');
    return !!(ne && ne.introcon < 0x2 || Ao('obj_susiezilla_gamecontroller') || Ao('obj_chefs_game') || Ao('obj_rhythmgame') || Ao('obj_shootout_controller') && Ao('obj_tenna_enemy'));
  }, 'ch3StepHeld'),
  n3 = IC(() => AX(), 'minigameOnScreen'),
  n4 = IC(() => At() || n2(), 'controllerHeld'),
  n5 = class Lt extends Id {
    ["create"]() {
      let A = If(),
        nv = () => new Array(A).fill(0x0);
      this.active = 0x0, this.fastmode = 0x1, this.fastmode === 0x1 && (this.active = 0x1), this.goahead = 0x0, this.spelluse = 0x0, this.spelldelay = new Array(A).fill(0xa), this.maxdelay = 0x0, this.maxdelaytimer = 0x0, this.havechar = nv(), this.charitem = nv(), this.charspell = nv();
      for (let nX = 0x0; nX < If(); nX++) Ig.charaction[nX] === 0x1 && (this.havechar[nX] = 0x1), (Ig.charaction[nX] === 0x4 || Ig.charaction[nX] === 0x2) && (this.maxdelay === 0x0 && (this.maxdelay = 0x19), this.maxdelay += 0xf, this.spelluse = 0x1, Ig.charaction[nX] === 0x4 ? this.charitem[nX] = 0x1 : this.charspell[nX] = 0x1);
      this.spelluse = 0x0, this.fade = 0x0, this.fadeamt = 0x0, this.fakefade = 0x0, this.bcolor = IK.navy;
      let ne = [Ic(0xffff00), Ic(0xff00ff), Ic(0xff00)],
        nY = [Iq(IK.aqua, IK.white, 0.5), Iq(IK.fuchsia, IK.white, 0.5), Iq(IK.lime, IK.white, 0.5)];
      this.charcolor = [], this.boltcolor = [];
      for (let L0 = 0x0; L0 < A; L0++) {
        let L1 = IR(Ig.char[L0]) - 0x1;
        this.charcolor[L0] = ne[L1] ?? ne[0x0], this.boltcolor[L0] = nY[L1] ?? nY[0x0];
        let L2 = V(Ig.char[L0]);
        L2 && (this.charcolor[L0] = L2, this.boltcolor[L0] = Iq(L2, IK.white, 0.5));
      }
      this.target = 0x0;
      for (let L3 = 0x0; L3 < A; L3++) Ig.hittarget[L3] = Ig.chartarget[L3];
      this.imagetimer = 0x0, this.posttimer = 0x0, this.timermax = 0x32, this.havechar.some(L4 => L4 === 0x1) || (this.timermax = 0x3), this.boltspeed = 0x8, this.boltx = 0x0, this.points = nv(), this.pressbuffer = new Array(Math.max(0x4, Ig.charbase ? Ig.charbase.length : 0x4)).fill(0x0), this.charbolt = new Array(A).fill(0x1);
      for (let L4 = 0x0; L4 < A; L4++) this.havechar[L4] === 0x0 && (this.charbolt[L4] = 0x0);
      this.attacked = nv(), this.bolttotal = this.charbolt.reduce((L5, L6) => L5 + L6, 0x0), this.boltuse = nv(), this.boltchar = [], this.boltframe = [], this.boltalive = [], this.boltred = [];
      let nS = -0x1,
        nC = 0x0,
        no = 0xa;
      Ig.flag[0xd] === 0x0 && (no += 0x2), A > 0x6 && (no = Math.max(0x4, Math.round(no * 0x6 / Math.min(A, 0x12))));
      for (let L5 = 0x0; L5 < this.bolttotal; L5++) {
        this.boltalive[L5] = 0x1;
        let L6 = [];
        for (let LI = 0x0; LI < If(); LI++) this.havechar[LI] === 0x1 && L6.push(LI);
        let L7 = L6.filter(LA => this.boltuse[LA] < this.charbolt[LA]),
          L8 = L7.length ? L7 : L6;
        if (!L8.length) {
          this.boltalive[L5] = 0x0;
          continue;
        }
        let L9 = L8[Math.min(L8.length - 0x1, Math.floor(Is(L8.length)))];
        this.boltchar[L5] = L9, this.boltuse[L9]++;
      }
      for (let LA = 0x0; LA < this.bolttotal; LA++) this.boltred[LA] = 0x0, nC += nS, this.boltframe[LA] = 0x1e + nC, LA < this.bolttotal - 0x1 ? nS !== 0x0 && this.boltchar[LA] !== this.boltchar[LA + 0x1] ? (nS = IT(0x0, no, no * 1.5), this.boltred[LA] = 0x1) : nS = IT(no, no * 1.5) : nS = IT(no, no * 1.5);
      this.haveauto = 0x0, this.autoed = 0x0;
      let Ln = IG(0x2),
        LL = Ln >= 0x0 ? Ig.char[Ln] : 0x0;
      Ln >= 0x0 && Ig.charauto[LL] === 0x1 && (this.sus = Ln, Ig.hp[LL] >= 0x0 && Ig.charmove[Ln] === 0x1 && (this.haveauto = 0x1, this.timermax === 0x3 && (this.timermax = 0x32)));
    }
    ["boltcheckOne"]() {
      let A = -0x1,
        nv = -0x1;
      this.pressbuffer = [0x5, 0x5, 0x5, 0x5];
      let ne = -0x1,
        nY = 0x3e7;
      for (let nC = 0x0; nC < this.bolttotal; nC++) if (this.boltalive[nC] === 0x1) {
        let no = this.boltframe[nC] - this.boltx;
        no < 0xf && no > -0x5 && (no === nY && (A = 0x1, nv = nC), no < nY && (nY = no, ne = nC));
      }
      let nS = nX => {
        let L0 = this.boltchar[nX],
          L1 = IF(nY),
          L2 = IZ(this.x + 0x50 + this.boltframe[nX] * this.boltspeed - this.boltx * this.boltspeed, this.y + (this.rowh ?? 0x26) * (this.rowOf ? this.rowOf(L0) : L0), AF);
        ID.nomiss && (L1 = 0x0), L1 === 0x0 && (this.points[L0] += 0x96, L2.image_blend = IK.yellow, L2.mag = 0.2), L1 === 0x1 && (this.points[L0] += 0x78), L1 === 0x2 && (this.points[L0] += 0x6e), L1 >= 0x3 && (this.points[L0] += 0x64 - IF(nY) * 0x2, L2.image_blend = this.boltcolor[L0]), L1 >= 0xf && (L2.image_blend = this.charcolor[L0]), this.boltalive[nX] = 0x0;
      };
      ne !== -0x1 && (nS(ne), A === 0x1 && nS(nv));
    }
    ["boltcheck"](A) {
      this.pressbuffer[Ig.char[A]] = 0x5;
      let n = -0x1,
        nv = 0x63;
      for (let ne = 0x0; ne < this.bolttotal; ne++) if (this.boltchar[ne] === A && this.boltalive[ne] === 0x1) {
        let nY = this.boltframe[ne] - this.boltx;
        nY < 0xf && nY > -0x5 && nY < nv && (nv = nY, n = ne);
      }
      if (n !== -0x1) {
        let nS = IF(nv),
          nC = IZ(this.x + 0x50 + this.boltframe[n] * this.boltspeed - this.boltx * this.boltspeed, (this.barY ?? this.y) + (this.rowh ?? 0x26) * A, AF);
        nS === 0x0 && (this.points[A] += 0x96, nC.image_blend = IK.yellow, nC.mag = 0.2), nS === 0x1 && (this.points[A] += 0x78), nS === 0x2 && (this.points[A] += 0x6e), nS >= 0x3 && (this.points[A] += 0x64 - IF(nv) * 0x2, nC.image_blend = this.boltcolor[A]), nS >= 0xf && (nC.image_blend = this.charcolor[A]), this.boltalive[n] = 0x0;
      }
    }
    ["userEvent"](A) {
      if (A === 0x1 && I8() > 0x0) {
        Ig.chapter >= 0x4 && In.attackpressHit && In.attackpressHit(this);
        let n = Ig.chapter === 0x2 && Iv.first('o_boxingcontroller');
        if (n) {
          let nY = this.points[0x0];
          n.punchcon = 0x1, n.damageoverride = Ir(Ig.battleat[0x0] * nY / 0xa), n.acttoenemytalktransition = 0x1, (nY === 0x96 || nY === 0x12c) && (n.tpoverride = 0x5), nY === 0x0 && (n.damageoverride = 0x1);
          return;
        }
        let nv = this.target,
          ne = In.charinstance(nv);
        ne && (ne.points = this.points[nv], ne.state = 0x1, ne.attacktimer = 0x0);
      }
    }
    ["draw"](nv) {
      if (n1() || (this.maxdelaytimer++, this.maxdelaytimer >= this.maxdelay && (this.active = 0x1), this.active !== 0x1)) return;
      let ne = If(),
        nY = 0x26,
        nS = 0x1,
        nC = ne > 0x3,
        no = L3 => nC ? L3 % 0x3 : L3,
        nX = this.x,
        L0 = this.y;
      this.rowh = nY, this.barY = L0, this.rowOf = no;
      let L1 = [];
      if (nC) for (let L3 = 0x0; L3 < 0x3; L3++) {
        let L4 = -0x1,
          L5 = 0x3b9aca00;
        for (let L6 = 0x0; L6 < this.bolttotal; L6++) {
          let L7 = this.boltchar[L6];
          this.boltalive[L6] === 0x1 && L7 % 0x3 === L3 && this.boltframe[L6] < L5 && (L5 = this.boltframe[L6], L4 = L7);
        }
        if (L4 < 0x0) {
          for (let L8 = L3; L8 < ne; L8 += 0x3) if (this.havechar[L8] === 0x1 && Ig.charauto[Ig.char[L8]] === 0x0) {
            L4 = L8;
            break;
          }
        }
        L1.push([L4 < 0x0 ? L3 : L4, L3]);
      } else {
        for (let L9 = 0x0; L9 < ne; L9++) L1.push([L9, L9]);
      }
      for (let [LI, LA] of L1) if (nv.draw_set_color(this.bcolor), Ig.chapter >= 0x4 ? (LA === 0x1 || LA === 0x2) && this.havechar.some(Ln => Ln === 0x1) && nv.draw_rectangle(nX + 0x4d, L0 + nY * LA, nX + 0x12c, L0 + nY * LA + 0x1, false) : LA >= 0x1 && nv.draw_rectangle(nX, L0 + nY * LA, nX + 0x12c, L0 + nY * LA + 0x2, false), Ig.char[LI] !== 0x0 && Ig.charauto[Ig.char[LI]] === 0x0 && this.havechar[LI] === 0x1) {
        let Ln = IR(Ig.char[LI]),
          LL = Ln === 0x1 ? IK.blue : Ln === 0x2 ? IK.purple : IK.green,
          Lw = M(Ig.char[LI]);
        Lw && (LL = Lw), this.pressbuffer[Ig.char[LI]] > 0x0 && (LL = Iq(LL, IK.white, this.pressbuffer[Ig.char[LI]] / 0x5)), nv.draw_set_color(LL);
        let LH = Ig.chapter >= 0x4 ? 0x1 : 0x0;
        nv.draw_rectangle(nX + 0x4e, L0 + nY * LA + LH, nX + 0x50 + 0xf * this.boltspeed, L0 + nY * LA + nY - 0x2, true), nv.draw_rectangle(nX + 0x4f, L0 + nY * LA + 0x1 + LH, nX + 0x50 + 0xf * this.boltspeed - 0x1, L0 + nY * LA + nY - 0x3, true);
        let LW = Math.min(0x3, Math.max(0x1, Ln)),
          Lg = V(Ig.char[LI]) ? Iq(V(Ig.char[LI]), IK.white, 0.35) : IK.white,
          LR = k[Ig.charhero && Ig.charhero[Ig.char[LI]] || d[LW - 0x1]],
          LG = LR && LR.head && Ib[LR.head];
        if (LG && (LR.custom || LR.head !== k[d[LW - 0x1]].head)) {
          let LE = Ib[LR.head];
          nv.draw_sprite_part_ext(LR.head, 0x0, 0x0, 0x0, LE.w, Math.min(LE.h, 0x24), nX + 0x2, L0 + nY * LA + Math.max(0x1, 0x24 - Math.min(LE.h, 0x24) >> 0x1), 0x1, 0x1, IK.white, 0x1);
        } else nv.draw_sprite_ext('spr_pressfront', LW - 0x1, nX, L0 + nY * LA, 0x1, nS, 0x0, Lg, 0x1), LG && Ib[LR.head].w <= 0x28 && LR.head !== k[d[LW - 0x1]].head && nv.draw_sprite_ext(LR.head, 0x0, nX + 0x2, L0 + nY * LA + 0x7 * nS, nS, nS, 0x0, IK.white, 0x1);
        nv.draw_sprite_ext('spr_pressfront_b', Ig.flag[0xd] === 0x0 ? 0x0 : Math.min(0x2, LA), nX, L0 + nY * LA, 0x1, nS, 0x0, IK.white, 0x1), nv.draw_sprite_ext('spr_pressspot', LW - 0x1, nX + 0x50, L0 + nY * LA, 0x1, nS, 0x0, Lg, 0x1);
      }
      let L2 = new Array(ne).fill(0x0);
      for (let Lf = 0x0; Lf < this.bolttotal; Lf++) {
        let La = this.boltchar[Lf];
        this.boltframe[Lf] - this.boltx < -0x5 && (this.boltalive[Lf] = 0x0);
        let LN = 0x1;
        if (this.boltframe[Lf] - this.boltx < 0x0) LN = 0x1 + (this.boltframe[Lf] - this.boltx) / 0x3;else {
          if (this.imagetimer === 0x0 && this.boltalive[Lf] === 0x1) {
            let LJ = IZ(nX + 0x50 + this.boltframe[Lf] * this.boltspeed - this.boltx * this.boltspeed, L0 + nY * no(La), X);
            LJ.sprite_index = 'spr_attackspot', LJ.image_alpha = 0.4, LJ.depth = -0x77, nC && (LJ.image_blend = this.boltcolor[La]);
          }
        }
        this.boltalive[Lf] === 0x1 && (nv.draw_sprite_ext('spr_attackspot', 0x0, nX + 0x50 + this.boltframe[Lf] * this.boltspeed - this.boltx * this.boltspeed, L0 + nY * no(La), 0x1, 0x1, 0x0, nC ? this.boltcolor[La] : IK.white, LN), L2[this.boltchar[Lf]]++);
      }
      for (let LF = 0x0; LF < If(); LF++) L2[LF] === 0x0 && this.havechar[LF] === 0x1 && this.attacked[LF] === 0x0 && (this.attacked[LF] = 0x1, this.target = LF, this.userEvent(0x1));
      I8() > 0x0 ? Ig.flag[0xd] === 0x1 && ne <= 0x3 ? (Iz() && this.havechar[0x0] === 0x1 && this.boltcheck(0x0), IO() && this.havechar[0x1] === 0x1 && this.boltcheck(0x1), Ik() && this.havechar[0x2] === 0x1 && this.boltcheck(0x2)) : Iz() && this.boltcheckOne() : (this.fakefade = 0x1, this.posttimer < this.timermax - 0x23 && (this.posttimer = this.timermax - 0x22)), this.imagetimer++, this.boltx++;
      for (let Lp = 0x0; Lp < this.pressbuffer.length; Lp++) this.pressbuffer[Lp]--;
      this.imagetimer > 0x1 && (this.imagetimer = 0x0), this.goahead = 0x0, this.goahead = 0x1;
      for (let Ly = 0x0; Ly < ne; Ly++) this.attacked[Ly] !== 0x1 && this.havechar[Ly] === 0x1 && (this.goahead = 0x0);
      if (I8() === 0x0 && (this.goahead = 0x1), this.goahead === 0x1) {
        if (this.posttimer++, this.posttimer > this.timermax - 0x23 && this.haveauto === 0x1 && this.autoed === 0x0 && I8() > 0x0) {
          let LD = In.charinstance(this.sus);
          LD && (LD.points = 0xa0, Ig.automiss && Ig.automiss[Ig.chartarget[this.sus]] === 0x1 && (LD.points = 0x0), LD.state = 0x1, LD.attacktimer = 0x0, LD.is_auto_susie = 0x1), this.posttimer -= 0x19, this.autoed = 0x1;
        }
        this.posttimer > this.timermax && (this.fade = 0x1, Iv.with('obj_heroparent', LZ => {
          LZ.state === 0x1 && (LZ.state = 0x0), LZ.attacked = 0x0, LZ.itemed = 0x0;
        }), I8() === 0x0 ? nJ() : (Ig.chapter < 0x3 || Ig.mnfight !== 1.5 && Ig.mnfight !== 0x2) && (Ig.mnfight = 0x1, Ig.myfight = -0x1));
      }
      (this.fade === 0x1 || this.fakefade === 0x1) && (this.fadeamt += 0.08, nv.draw_set_color(IK.black), nv.draw_set_alpha(Math.min(0x1, this.fadeamt)), nv.draw_rectangle(nX - 0x1, Ig.chapter >= 0x4 ? L0 : L0 - 0x1, nX + 0x280, L0 + 0x12c, false), nv.draw_set_alpha(0x1), this.fade === 0x1 && this.fadeamt > 0x1 && this.instance_destroy());
    }
  };
IC(n5, 'obj_attackpress'), Io(n5, 'kinds', Ij('obj_attackpress', Id)), Io(n5, 'defaultDepth', 0x1);
var n6 = n5,
  n7 = class wi extends Id {
    ["create"]() {
      let A = this.slots = Math.max(0x3, If());
      this.spelltimer = 0x0, this.spelltotal = 0x0, this.char = 0x0, this.castyet = 0x0, this.re_castyet = 0x0, this.active = 0x0, this.alarm[0x0] = 0x5, this.spellwriter = null, this.using = new Array(A).fill(0x0), this.gotspell = new Array(A).fill(0x0), this.gotitem = new Array(A).fill(0x0), this.visible = false;
    }
    ["writer"](A) {
      return m(A) || o();
    }
    ["pose"](A, n) {
      if (A) {
        if (Ig.charaction[n] === 0x2 && P(Ig.charspecial[n])) {
          c(A, Ig.charspecial[n]), A.state = 0x6, A.acttimer = 0x0, A.actcast = 0x1, A.alarm[0x4] = 0xf;
          return;
        }
        Ig.charaction[n] === 0x2 && q(A, Ig.charspecial[n]), A.state = Ig.charaction[n] === 0x2 ? 0x2 : 0x4, A.attacktimer = 0x0;
      }
    }
    ["alarmEvent"](A) {
      if (A === 0x0) {
        for (let n = 0x0; n < If(); n++) if ((Ig.charaction[n] === 0x2 || Ig.charaction[n] === 0x4) && (this.spelltotal++, this.using[n] = 0x1, Ig.charaction[n] === 0x2 ? this.gotspell[n] = 0x1 : this.gotitem[n] = 0x1, this.castyet === 0x0)) {
          let nv = In.charinstance(n);
          this.pose(nv, n), this.castyet = 0x1, this.char = n + 0x1, nb(Ig.charspecial[n], n), this.spellwriter = this.writer(Ig.charspecial[n]);
        }
        this.active = 0x1, Ig.spelldelay = 0x5a;
      }
    }
    ["step"]() {
      if (this.active === 0x1 && (this.spelltimer++, this.spelltimer >= Ig.spelldelay && !Iv.exists(this.spellwriter))) {
        let A = () => {
          na(), Iv.exists(this.spellwriter) && this.spellwriter.instance_destroy(), this.instance_destroy();
        };
        if (this.char >= this.slots || this.spelltotal === 0x1) {
          A();
          return;
        }
        if (I8() > 0x0) {
          let n = this.char;
          if (this.gotitem[n] === 0x1 || this.gotspell[n] === 0x1) {
            this.re_castyet = 0x1;
            let nv = In.charinstance(n);
            nv && IW(Ig.charspecial[n]) && this.gotspell[n] === 0x1 ? this.pose(nv, n) : nv && (nv.state = this.gotitem[n] === 0x1 ? 0x4 : 0x2), Iv.exists(this.spellwriter) && this.spellwriter.instance_destroy(), nb(Ig.charspecial[n], n), this.spellwriter = this.writer(Ig.charspecial[n]);
          }
          Ig.spelldelay = 0x5a, this.re_castyet === 0x0 && (Ig.spelldelay = 0x1), this.char++;
          for (let ne = 0x0; ne < this.slots - 0x1; ne++) this.char < this.slots && this.using[this.char] === 0x0 && this.char++;
          this.spelltimer = 0x0, this.re_castyet = 0x0;
        } else A();
      }
    }
  };
IC(n7, 'obj_spellphase'), Io(n7, 'kinds', Ij('obj_spellphase', Id)), Io(n7, 'defaultDepth', 0x0);
var n8 = n7,
  n9 = class wt extends Id {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.target = null, this.image_xscale = 0x2, this.image_yscale = 0x2, this.damage = 0x1, this.caster = 0x0, this.star = 0x0;
      let A = Iv.first('obj_herosusie');
      A && (this.depth = A.depth, A.visible = false), this.red = 0x0;
    }
    ["step"]() {
      if (this.image_index = this.t / 0x2, this.t >= 0x1c) {
        let A = Iv.first('obj_herosusie');
        A && (A.visible = true), this.instance_destroy();
        return;
      }
      if (Iv.exists(this.target) && this.t === 0xa) {
        Im('snd_rudebuster_swing');
        let n = IZ(this.x + 0x28, this.y + 0x1e, nn);
        n.caster = this.caster, n.target = this.target, n.damage = this.damage, n.star = this.star, this.red === 0x1 && (n.red = 0x1);
      }
      this.t++;
    }
    ["destroy"]() {
      let A = Iv.first('obj_herosusie');
      A && (A.visible = true);
    }
  };
IC(n9, 'obj_rudebuster_anim'), Io(n9, 'kinds', Ij('obj_rudebuster_anim', Id)), Io(n9, 'defaultDepth', 0x0), Io(n9, 'defaultSprite', 'spr_susie_rudebuster');
var nI = n9,
  nA = class HQ extends Id {
    ["create"]() {
      this.target = null, this.damage = 0x1, this.star = 0x0, this.caster = 0x0, this.image_alpha = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_speed = 0x1, this.t = 0x0, this.explode = 0x0, this.bolt_timer = 0x0, this.chosen_bolt = 0x0, this.final_bolt = 0x0, this.red = 0x0, this.aft = [];
    }
    ["step"]() {
      if (this.image_alpha < 0x1 ? this.image_alpha += 0.25 : this.image_alpha = 0x1, this.t === 0x0) {
        let A = this.target,
          n = Iv.first('obj_queenshield_enemy');
        n ? (this.depth = n.depth - 0x1, this.cx = n.x + 0x18, this.cy = n.y + 0x8c) : (this.cx = Ig.monsterx[A.myself], this.cy = Ig.monstery[A.myself]), this.direction = Ih(this.x, this.y, this.cx, this.cy) - 0x14, this.speed = 0x18, this.friction = -1.5, this.image_angle = this.direction, this.red === 0x1 && (this.sprite_index = 'spr_rudebuster_beam_red', this.image_xscale = 2.5, this.image_yscale = 2.5);
      }
      if (this.t >= 0x1 && this.explode === 0x0) {
        this.bolt_timer++, Iz() && this.bolt_timer >= 0x4 && this.chosen_bolt === 0x0 && (this.chosen_bolt = this.bolt_timer);
        let nv = Ih(this.x, this.y, this.cx, this.cy);
        this.direction += Ix(nv, this.direction) / 0x4, this.image_angle = this.direction, IB(this.x, this.y, this.cx, this.cy) <= 0x28 && (this.final_bolt = Ig.chapter >= 0x3 ? this.bolt_timer : this.chosen_bolt, this.visible = false, this.explode = 0x1, this.t = 0x1, this.speed = 0x0, this.friction = 0x0);
      }
      if (this.explode === 0x1) {
        if (this.t === 0x1) {
          if (this.chosen_bolt > 0x0) {
            let nS = this.final_bolt - this.chosen_bolt,
              nC = {
                0x0: 0x1e,
                0x1: 0x1c,
                0x2: 0x16,
                0x3: 0x14,
                0x4: 0xd,
                0x5: 0xb,
                0x6: 0xa
              }[nS];
            nC && (this.damage += nC), IF(nS) <= 0x2 && Im('snd_scytheburst');
          }
          Ig.chapter >= 0x4 && In.rudebusterHit && In.rudebusterHit(this, 'before'), this.red === 0x1 && (this.damage += 0x5a), Ig.hittarget[this.star] = 0x0, Ig.chapter === 0x3 && Iv.exists('obj_knight_enemy') && (this.damage = Ir(this.damage / 0x2));
          let ne = Iv.first('obj_queenshield_enemy'),
            nY = ne && Iv.first('obj_queen_enemy');
          if (nY) nY.shieldhp -= this.damage, ne.con = 0x1, ne.event_user(0x0);else {
            let no = Iw(this.star, this.damage, this.caster);
            no && this.sprite_index === 'spr_rudebuster_beam_green' && (no.type = 1.5, no.ystart -= 0x1e);
          }
          Ig.chapter >= 0x4 && In.rudebusterHit && In.rudebusterHit(this, 'after') || Im('snd_rudebuster_hit');
          for (let nX = 0x0; nX < 0x8; nX++) {
            let L0 = IZ(this.cx, this.cy, X);
            L0.sprite_index = this.sprite_index, L0.image_index = 0x4, L0.image_xscale = 0x2, L0.image_yscale = 0x2, L0.image_angle = 0x2d + nX * 0x5a, L0.direction = L0.image_angle, L0.speed = 0x19, L0.depth = this.depth - 0xa, L0.fadespeed = 0.06, L0.image_speed = 0x0;
          }
        }
        this.t >= 0x12 && this.instance_destroy();
      }
      if (this.explode === 0x0) {
        let L1 = IZ(this.x, this.y, X);
        L1.sprite_index = this.sprite_index, L1.image_yscale = 1.8, L1.image_xscale = 0x2, L1.image_angle = this.image_angle, L1.image_index = 0x4, L1.image_speed = 0x0, L1.image_alpha = this.image_alpha - 0.2, L1.fadespeed = 0.07, L1.depth = this.depth + 0x1;
      }
      this.t++;
    }
  };
IC(nA, 'obj_rudebuster_bolt'), Io(nA, 'kinds', Ij('obj_rudebuster_bolt', Id)), Io(nA, 'defaultDepth', -0xa), Io(nA, 'defaultSprite', 'spr_rudebuster_beam');
var nn = nA,
  nL = class Hh extends Id {
    ["create"]() {
      this.con = 0x5, this.target = null, this.fail = 0x1, this.flashcolor = IK.blue, this.visible = false, this.t = 0x0;
    }
    ["step"]() {
      let A = this.target;
      if (!Iv.exists(A)) {
        this.instance_destroy();
        return;
      }
      this.t++, this.t <= 0x8 ? A.image_blend = Iq(A.image_blend, this.flashcolor, 0.12) : this.t <= 0x10 ? A.image_blend = Iq(A.image_blend, IK.white, 0.16) : (A.image_blend = IK.white, this.instance_destroy());
    }
  };
IC(nL, 'obj_pacifyspell'), Io(nL, 'kinds', Ij('obj_pacifyspell', Id)), Io(nL, 'defaultDepth', 0x0);
var nw = nL;
function nH(A) {
  let n = Ig.chartarget[A],
    nv = 0x0;
  n === 0x0 && Ig.monster[0x0] === 0x0 && (n = 0x1), n === 0x1 && Ig.monster[0x1] === 0x0 && (n = 0x2), n === 0x2 && (Ig.monster[0x2] === 0x0 && (n = 0x3), n === 0x3 && Ig.monster[0x0] === 0x1 && (n = 0x0), n === 0x3 && Ig.monster[0x1] === 0x1 && (n = 0x1), n === 0x3 && (nv = 0x1)), Ig.chartarget[A] = n;
  let ne = In.charinstance(A);
  return ne && (ne.cancelattack = nv), nv;
}
IC(nH, 'scr_retarget');
function nW(A) {
  let n = 0x0;
  return A === 0x0 && Ig.monster[0x0] === 0x0 && (A = 0x1), A === 0x1 && Ig.monster[0x1] === 0x0 && (A = 0x2), A === 0x2 && (Ig.monster[0x2] === 0x0 && (A = 0x3), A === 0x3 && Ig.monster[0x0] === 0x1 && (A = 0x0), A === 0x3 && Ig.monster[0x1] === 0x1 && (A = 0x1), A === 0x3 && (n = 0x1)), [A, n];
}
IC(nW, 'retargetStar');
function ng(A) {
  let n = 0x1;
  return Ig.hp[Ig.char[A]] <= 0x0 && (n = 0x0), Ig.acting[A] === 0x1 && (n = 0x0), Ig.char[A] === 0x0 && (n = 0x0), Ig.charmove[A] === 0x0 && (n = 0x0), Ig.charauto[Ig.char[A]] === 0x1 && (n = 0x0), n;
}
IC(ng, 'scr_charcan');
var nR = IC(() => If(), 'DONE_TURN');
function nG() {
  let A = nz(),
    n = Ig.charturn;
  if (Ig.chapter >= 0x4 && If() <= 0x3 && In.chapterNexthero && In.chapterNexthero(A)) return;
  if (Ig.chapter >= 0x4 && Ig.charturn === 0x0 && In.nextheroSkip && In.nextheroSkip(A)) {
    Ig.charturn = nR(), nf();
    return;
  }
  let nv = -0x1;
  for (let ne = Ig.charturn + 0x1; ne < If(); ne++) if (Ig.charmove[ne] === 0x1 && ng(ne) && Ig.acting[ne] === 0x0 && !Y(ne)) {
    nv = ne;
    break;
  }
  if (nv === -0x1) {
    nf();
    return;
  }
  if (Ig.charturn = nv, Ig.bmenuno = 0x0, A) {
    Ig.temptension[Ig.charturn] = Ig.tension;
    for (let nY = 0x0; nY < 0xc; nY++) A.tempitem[nY][Ig.charturn] = A.tempitem[nY][n];
  }
  Ig.chapter >= 0x4 && A && A.disablesusieralseiattack === 0x1 && (Ig.charturn === 0x1 || Ig.charturn === 0x2) && (Ig.bmenucoord[0x0][Ig.charturn] = 0x1);
}
IC(nG, 'scr_nexthero');
function nE() {
  let A = nz(),
    n = 0x0,
    nv = ne => Ig.charmove[ne] === 0x1 && Ig.charauto[Ig.char[ne]] !== 0x1;
  if (Ig.charturn === 0x1 && nv(0x0) && (Ig.charturn = 0x0, n = 0x1), Ig.charturn >= 0x2) {
    n = 0x1;
    let ne = -0x1;
    for (let nY = Ig.charturn - 0x1; nY >= 0x1; nY--) if (nv(nY) && Ig.acting[nY] === 0x0 && !Y(nY)) {
      ne = nY;
      break;
    }
    ne !== -0x1 ? Ig.charturn = ne : nv(0x0) && (Ig.charturn = 0x0);
  }
  if (n === 0x1) {
    if (Ig.bmenuno = 0x0, Ig.chapter >= 0x2) {
      let nS = IR(Ig.char[Ig.charturn]);
      nS === 0x4 && Iv.with('obj_monsterparent', nC => {
        nC.actingnoe = 0x0;
      }), nS === 0x3 && Iv.with('obj_monsterparent', nC => {
        nC.actingral = 0x0;
      }), nS === 0x2 && Iv.with('obj_monsterparent', nC => {
        nC.actingsus = 0x0;
      }), Ig.actingsingle && (Ig.actingsingle[Ig.charturn] = 0x0), Ig.actingsimul && (Ig.actingsimul[Ig.charturn] = 0x0);
    }
    Ig.faceaction[Ig.charturn] = 0x0, Ig.chartarget[Ig.charturn] = 0x0, Ig.charaction[Ig.charturn] = 0x0, Ig.charspecial[Ig.charturn] = 0x0, D(Ig.charturn), A && (A.movenoise = 0x1);
  }
  if (Ig.charturn === 0x0) {
    Iv.with('obj_monsterparent', nC => {
      nC.acting = 0x0;
    });
    for (let nC = 0x0; nC < If(); nC++) Ig.acting[nC] = 0x0;
    if (Ig.tension = Ig.temptension[0x0], A) {
      for (let no = 0x0; no < 0xc; no++) A.tempitem[no][0x0] = Ig.item[no];
    }
  } else {
    if (Ig.tension = Ig.temptension[Ig.charturn], A) {
      for (let nX = 0x0; nX < 0xc; nX++) A.tempitem[nX][Ig.charturn] = A.tempitem[nX][Ig.charturn - 0x1];
    }
  }
}
IC(nE, 'scr_prevhero');
function nf() {
  Ig.monster && Ig.monster.__customBoard && In.customEndturn && In.customEndturn();
  let A = nz();
  if (Ig.chapter >= 0x4 && A && In.chapterEndturn && In.chapterEndturn(A)) {
    if (If() > 0x3 && Ig.myfight === 0x1) {
      let ne = false;
      for (let nY = 0x3; nY < If(); nY++) (Ig.charaction[nY] === 0x2 || Ig.charaction[nY] === 0x4) && (ne = true);
      ne && (Iv.with('obj_attackpress', nS => nS.instance_destroy()), Ig.myfight = 0x4, IZ(0x0, 0x0, n8));
    }
    return;
  }
  if (A) {
    for (let nS = 0x0; nS < 0xc; nS++) Ig.item[nS] = A.tempitem[nS][Ig.charturn];
    for (let nC = 0x0; nC < 0xc; nC++) for (let no = 0x0; no < If(); no++) A.tempitem[nC][no] = Ig.item[nC];
  }
  Iv.with('obj_writer', nX => nX.instance_destroy()), Iv.with('obj_face', nX => nX.instance_destroy()), Ig.attacking = 0x0;
  for (let nX = 0x0; nX < If(); nX++) Ig.charauto[Ig.char[nX]] === 0x1 && Ig.hp[Ig.char[nX]] > 0x0 && (Ig.monster[0x2] === 0x1 && (Ig.chartarget[nX] = 0x2), Ig.monster[0x1] === 0x1 && (Ig.chartarget[nX] = 0x1), Ig.monster[0x0] === 0x1 && (Ig.chartarget[nX] = 0x0)), Ig.charaction[nX] === 0x1 && (Ig.attacking = 0x1);
  A && (A.messagepriority = -0x1, A.attackpriority = -0x1), Ig.chapter === 0x3 && A && (A.idefendedthisturn = 0x0);
  let n = (Ig.chapter === 0x2 || Ig.chapter === 0x3) && In.scr_nextact && Ig.actingsingle && Ig.actingsingle.slice(0x0, Ia()).includes(0x1),
    nv = IE();
  Ig.acting[nv] === 0x0 && !n ? na() : (Ig.charturn = nR(), Ig.myfight = 0x3, Ig.currentactingchar = 0x0, n && Ig.acting[nv] === 0x0 && In.scr_nextact.call({}), Ig.chapter === 0x2 && Iv.exists('obj_sweet_enemy') && [0x0, 0x1, 0x2].every(L0 => Ig.actingsingle[L0] === 0x1 == (L0 === nv)) && (Iv.first('obj_sweet_enemy').simultotal_funny = 0x1), Ig.chapter >= 0x2 && In.scr_act_simul && Ig.acting[nv] === 0x1 && Ig.actingsimul[nv] === 0x1 && In.scr_act_simul.call({}));
}
IC(nf, 'scr_endturn');
function na() {
  let A = nz();
  if (!A || Ig.chapter >= 0x4 && In.chapterAttackphase && If() <= 0x3 && In.chapterAttackphase(A)) return;
  if (Ig.chapter >= 0x5 && If() > 0x3 && Ig.hittarget) {
    for (let nv = 0x0; nv < 0x3; nv++) Ig.hittarget[nv] = 0x0;
  }
  let n = 0x0;
  if (I8() === 0x0 && (n = 0x1), n === 0x0) {
    let ne = 0x1;
    Ig.charturn = nR();
    for (let nY = 0x0; nY < If(); nY++) (Ig.charaction[nY] === 0x4 || Ig.charaction[nY] === 0x2) && (ne = 0x0);
    Ig.myfight === 0x4 && (ne = 0x1), ne === 0x1 ? (Ig.myfight = 0x1, IZ(0x2, 0x16d, n6)) : (Ig.myfight = 0x4, IZ(0x0, 0x0, n8));
  } else nJ();
}
IC(na, 'scr_attackphase');
function nN() {
  let A = nz();
  if (!A) return;
  l(), Z();
  let nv = 0x0;
  if (I8() === 0x0 && (nv = 0x1), Ig.chapter >= 0x2 && Ig.flag && Ig.flag[0x27] === 0x1 && (nv = 0x1), nv === 0x0) {
    if (A.messagepriority = -0x1, A.attackpriority = -0x1, Ig.flag[0xe] === 0x0) {
      for (let nY = 0x0; nY < 0x14; nY++) for (let nS = 0x0; nS < 0x14; nS++) Ig.bmenucoord[nY][nS] = 0x0;
    }
    Ig.chapter === 0x3 && Iv.exists('obj_rouxls_ch3_enemy') && (Ig.bmenucoord[0x0][0x0] = 0x2, Ig.bmenucoord[0x0][0x1] = 0x2, Ig.bmenucoord[0x0][0x2] = 0x2, A.rouxlsgridenabled && (A.rouxlsbuttoncount_y = 0x4)), Ig.chapter === 0x3 && Iv.with('obj_gameshow_battlemanager', nC => {
      nC.turns++;
    }), Ig.mnfight = 0x0, Ig.myfight = 0x0, Ig.bmenuno = 0x0, Ig.charturn = 0x0;
    let ne = 0x0;
    Ig.chapter >= 0x5 && In.chapterMnendturn && In.chapterMnendturn(A);
    for (let nC = 0x0; nC < If(); nC++) {
      let no = In.charinstance(nC);
      no && (no.tu = 0x0);
      let nX = Ig.char[nC];
      if (Ig.char[nC] !== 0x0 && Ig.hp[nX] <= 0x0 && !(Ig.chapter === 0x3 && Iv.exists('obj_knight_enemy'))) {
        let L0 = IY(Ig.maxhp[nX] / 0x8),
          L1 = IZ(no.x, no.y + no.myheight - 0x18, Af);
        L1.delay = 0x1, L1.type = 0x3, L1.damage = II(nC, L0), Ig.hp[nX] >= 0x1 && (L1.specialmessage = 0x4);
      }
    }
    for (Ig.charturn = 0x0; Ig.charturn < If() && (Ig.charmove[Ig.charturn] === 0x0 || Ig.charauto[Ig.char[Ig.charturn]] === 0x1);) Ig.charturn++;
    Ig.charturn >= If() && (Ig.charturn = nR(), ne = 0x1);
    for (let L2 = 0x0; L2 < If(); L2++) Ig.acting[L2] = 0x0, Ig.temptension[L2] = Ig.tension, Ig.charspecial[L2] = 0x0, Ig.targeted[L2] = 0x0, Ig.charaction[L2] = 0x0, Ig.faceaction[L2] = 0x0, Ig.actingsingle && (Ig.actingsingle[L2] = 0x0), Ig.actingsimul && (Ig.actingsimul[L2] = 0x0), Ig.actingtarget && (Ig.actingtarget[L2] = 0x0), Ig.monsterattackname && (Ig.monsterattackname[L2] = '\x20');
    Ig.currentactingchar = 0x0, Iv.with('obj_monsterparent', L3 => {
      L3.attacked = 0x0, L3.talked = 0x0, L3.acting = 0x0, L3.actingsus = 0x0, L3.actingral = 0x0, L3.actingnoe = 0x0;
    }), ne === 0x1 && (IG(0x2) === 0x0 && Ig.charauto[Ig.char[0x0]] === 0x1 && (Ig.acting[0x0] = 0x1, Ig.myfight = 0x3), nf());
    for (let L3 = 0x0; L3 < 0xc; L3++) for (let L4 = 0x0; L4 < If(); L4++) A.tempitem[L3][L4] = Ig.item[L3];
  } else nJ();
}
IC(nN, 'scr_mnendturn');
function nJ() {
  Ig.myfight = 0x7, Ig.mnfight = -0x1;
  let A = nz();
  A && (A.victory = 0x1);
  for (let n = 0x0; n < 0x3; n++) if (Ig.monster[n] === 0x1) {
    let nv = In.monsterinstance(n);
    nv && !nv.destroyed && nv.scr_monsterdefeat();
  }
}
IC(nJ, 'scr_wincombat');
function nF() {
  if (Ig.monster && Ig.monster.__customBoard && In.customEndcombat && In.customEndcombat()) return;
  Ig.fighting = 0x0, Iv.with('obj_monsterparent', n => n.instance_destroy()), Iv.with('obj_bulletparent', n => n.instance_destroy()), Iv.with('obj_heroparent', n => n.instance_destroy());
  let A = nz();
  A && A.instance_destroy(), !(In.roomEndcombat && In.roomEndcombat()) && (Ig.battleover = Ig.battleover || 'win', IP());
}
IC(nF, 'scr_endcombat');
function np(A, n = 0x0) {
  Ig.tension -= A, Ig.faceaction[Ig.charturn] = 0x2, Ig.charaction[Ig.charturn] = 0x2;
  let nv = Ig.bmenucoord[0x2][Ig.charturn];
  Ig.chapter !== 0x1 && Ig.flag[0x22] === 0x0 ? Ig.charspecial[Ig.charturn] = (Ig.battlespell[Ig.charturn] || [])[nv] : Ig.charspecial[Ig.charturn] = Ig.spell[Ig.char[Ig.charturn]][nv], Ig.tensionselect = 0x0;
  let ne = Ig.chapter >= 0x2 && Ig.charinstance ? Ig.charinstance[Ig.charturn] : null;
  ne && n === 0x1 ? (ne.spellanimed || (ne.remspellsprite = ne.spellsprite, ne.remspellframes = ne.spellframes, ne.spellanimed = 0x1), ne.spellframes = 0x0, ne.spellsprite = ne.spellreadysprite) : ne && ne.spellanimed && (ne.spellframes = ne.remspellframes, ne.spellsprite = ne.remspellsprite, ne.spellanimed = 0x0), C(Ig.charspecial[Ig.charturn], Ig.charturn), P(Ig.charspecial[Ig.charturn]) && (Ig.faceaction[Ig.charturn] = 0x6), nG();
}
IC(np, 'scr_spellconsumeb');
function ny(A, n, nv) {
  let ne = 0x0;
  for (let nC = 0x0; nC < 0xc; nC++) A(nC) !== 0x0 && (ne = nC);
  let nY = n % 0x2;
  if (nv > 0x0) return nY === 0x1 && n + 0x1 <= ne ? n + 0x1 : nY <= ne ? nY : 0x0;
  let nS = (ne >> 0x1) * 0x2;
  return nS + nY <= ne ? nS + nY : nS;
}
IC(ny, 'itemWrap');
function nD(A) {
  let n = Im('snd_cardrive');
  try {
    Il(n, 1.4), Ie(n, 0.8, 0x0);
  } catch {}
  let nv = Ig.charinstance && Ig.charinstance[A];
  if (nv) {
    let ne = IZ(nv.x, nv.y, Ay);
    ne.target = nv, ne.particlecolor = IK.orange;
  }
}
IC(nD, 'tpItemFx');
function nZ(A, n) {
  let nv = nz();
  Ig.faceaction[Ig.charturn] = 0x3, Ig.charaction[Ig.charturn] = 0x4, Ig.charspecial[Ig.charturn] = A;
  let ne = A >= 0xc8 ? I4(A) : null;
  if (nv && ne && ne.replace) {
    nv.tempitem[n][Ig.charturn] = 0xc8 + ne.replace, nG();
    return;
  }
  if (nv) {
    let nY = Ig.charturn;
    for (let nS = n; nS < 0xc; nS++) nv.tempitem[nS][nY] = nv.tempitem[nS + 0x1] ? nv.tempitem[nS + 0x1][nY] : 0x0;
  }
  nG();
}
IC(nZ, 'scr_itemconsumeb');
function nb(A, nv) {
  if (b(A, nv)) return;
  let ne = Ig.charname[Ig.char[nv]],
    nY = Ig.chartarget[nv],
    nS = {
      0x8: '*\x20' + ne + " cast SLEEP MIST!/%",
      0x9: '*\x20' + ne + " cast ICE SHOCK!/%",
      0xa: '*\x20' + ne + " cast SNOWGRAVE!/%",
      0x1: '*\x20' + ne + " cast RUDE BUSTER!/%",
      0x2: '*\x20' + ne + " cast HEAL PRAYER!/%",
      0x4: '*\x20' + ne + " used RUDE BUSTER!/%",
      0x5: '*\x20' + ne + " used RED BUSTER!/%",
      0x6: '*\x20' + ne + " cast DUAL HEAL!/%",
      0xc9: '*\x20' + ne + " used the DARK CANDY!/%",
      0xca: '*\x20' + ne + " used the REVIVE MINT!/%",
      0xcd: '*\x20' + ne + " used the BROKEN CAKE!/%",
      0xce: '*\x20' + ne + " used the TOPCAKE!/%",
      0xcf: '*\x20' + ne + " used the SPINCAKE!/%",
      0xd0: '*\x20' + ne + " used the DARKBURGER!/%",
      0xd1: '*\x20' + ne + " used the LANCERCOOKIE!/%",
      0xd2: '*\x20' + ne + " used the GIGASALAD!/%",
      0xd3: '*\x20' + ne + " used the CLUBS SANDWICH!/%",
      0xd4: '*\x20' + ne + " used the HEARTS DONUT!/%",
      0xd5: '*\x20' + ne + " used the CHOCO DIAMOND!/%",
      0xd6: '*\x20' + ne + " used the FAV SANDWICH!/%",
      0xd7: '*\x20' + ne + " used the ROULXS ROUX!/%"
    };
  Ig.msg = new Array(0x64).fill('\x20');
  let nC = A >= 0xc8 && IJ[A] ? '*\x20' + ne + " used the " + IJ[A][0x0].toUpperCase() + "!/%" : '*\x20' + ne + " cast " + String(I5(A).spellname || "a spell").toUpperCase() + "!/%";
  if (Ig.msg[0x0] = nS[A] || nC, A === 0x3 && (Ig.msg[0x0] = '*\x20' + ne + " cast PACIFY!/%", [nY] = nW(nY), Ig.monster[nY] === 0x1 && Ig.monsterstatus[nY] !== 0x1 && (Ig.msg[0x0] = '*\x20' + ne + " cast PACIFY^1!&* But the enemy wasn't \\cBTIRED\\cW.../%", Ig.mercymod[nY] >= 0x64 && (Ig.msg[0x0] = '*\x20' + ne + " cast PACIFY^1!&* But the foe wasn't \\cBTIRED\\cW... try \\cYSPARING\\cW!/%"))), A === 0x64) {
    let no;
    [nY, no] = nW(nY);
    let nX = Ig.monstername[nY] || '';
    Ig.msg[0x0] = '*\x20' + ne + " spared " + nX + "!/%", Ig.mercymod[nY] >= 0x64 || (Ig.msg[0x0] = '*\x20' + ne + " spared " + nX + "^2!&* But its name wasn't \\cYYELLOW\\cW.../%", Ig.monsterstatus[nY] === 0x1 && (Ig.msg[0x0] = '*\x20' + ne + " spared " + nX + "^2!&* But its name wasn't \\cYYELLOW\\cW.../", Ig.msg[0x1] = "* (Try using Ralsei's \\cBPACIFY\\cW!)/%")), no === 0x1 && (Ig.msg[0x0] = '*\x20' + ne + " spared!/%");
  }
  if (A === 0xcc) {
    Ig.msg[0x0] = '*\x20' + ne + " read the MANUAL!/", Ig.msg[0x1] = "* But nothing happened.../%";
    let L0 = [0x0, 0x0, 0x0];
    for (let L1 = 0x0; L1 < 0x3; L1++) {
      if (Ig.monster[L1] !== 0x1) continue;
      let L2 = Ig.monstertype[L1];
      if (L2 === 0x5 && (L0[L1] = 0x1, Ig.monsterstatus[L1] = 0x1, Ig.monstercomment[L1] = "(Tired)"), L2 === 0x6 && (L0[L1] = 0x2), L2 === 0x7 || L2 === 0x10) {
        L0[L1] = 0x3;
        let L3 = Ig.monsterinstance[L1];
        L3 && !L3.destroyed && (L3.battlecancel = 0x1, L3.manual === 0x0 && (L3.manual = 0x1, I9(L3.myself ?? L1, 0x32)));
      }
    }
    L0.some(L4 => L4 > 0x0) && (Ig.msg[0x1] = L0.map((L4, L5) => L4 === 0x1 ? '*\x20' + Ig.monstername[L5] + " was \\cBbored to tears\\cW!&" : L4 === 0x2 ? '*\x20' + Ig.monstername[L5] + " listened politely!&" : L4 === 0x3 ? '*\x20' + Ig.monstername[L5] + " became sentimental!&" : '').join('') + '/%');
  }
  if (A === 0xcb && (Ig.msg[0x0] = '*\x20' + ne + " used the GLOWSHARD!/", Ig.msg[0x1] = "* But nothing happened.../%", Ig.chapter <= 0x2)) {
    let L4 = [];
    for (let L5 = 0x0; L5 < 0x3; L5++) Ig.monster[L5] === 0x1 && Ig.monstertype[L5] === 0x5 && (Ig.mercymod[L5] = 0xc8, L4.push(L5));
    L4.length && (Ig.msg[0x1] = L4.map(L6 => '*\x20' + Ig.monstername[L6] + " became enraptured!&").join('') + '/', Ig.msg[0x2] = "* The GLOWSHARD disappeared!/%");
  }
}
IC(nb, 'scr_spelltext');
function nm(A, n) {
  let nv = In.charinstance(A);
  if (!nv) return;
  let ne = IZ(nv.x, nv.y, Ay);
  ne.target = nv;
  let nY = IZ(nv.x, nv.y + nv.myheight - 0x18 - nv.tu * 0x14, Af);
  nY.delay = 0x8, nY.type = 0x3, nY.damage = n, Ig.hp[Ig.char[A]] >= Ig.maxhp[Ig.char[A]] && (nY.specialmessage = 0x3), nv.tu++;
}
IC(nm, 'healFx');
function nP(A, n) {
  II(A, n), nm(A, n), Ig.spelldelay = 0xf;
}
IC(nP, 'scr_healitemspell');
function nq(A) {
  IA(A);
  for (let n = 0x0; n < If(); n++) Ig.char[n] !== 0x0 && nm(n, A);
  Ig.spelldelay = 0x14;
}
IC(nq, 'scr_healallitemspell');
function nc(A, nv) {
  let ne = Ig.chartarget[nv];
  Ig.spelldelay = 0xa;
  let nY = 0x0;
  if (!K(A, nv) && !(Ig.chapter >= 0x4 && In.chapterSpell && In.chapterSpell(A, nv))) switch (A) {
    case 0x2:
      {
        let nS = Ig.battlemag[nv] * 0x5;
        II(ne, nS), nm(ne, nS), Ig.spelldelay = 0xf;
        break;
      }
    case 0x3:
      {
        if (Ig.monster[ne] === 0x0 && ([ne, nY] = nW(ne)), Ig.monster[ne] === 0x1) {
          let nC = In.monsterinstance(ne);
          if (Ig.monsterstatus[ne] === 0x1) Ig.monstertype[ne] !== 0x13 && Ig.monstertype[ne] !== 0x3 ? (Ig.flag[0x33 + ne] = 0x3, nC.userEvent(0xa), nC.scr_monsterdefeat()) : (nC.pacifycon = 0x1, Ig.spelldelay = 0x3e7);else {
            let no = IZ(0x0, 0x0, nw);
            no.target = nC, no.fail = 0x1;
          }
        }
        Ig.spelldelay = 0x14;
        break;
      }
    case 0x4:
    case 0x5:
      {
        if (Ig.spelldelay = 0x1e, Ig.monster[ne] === 0x0 && ([ne, nY] = nW(ne)), nY === 0x0) {
          Ig.spelldelay = 0x46;
          let nX = A === 0x4 ? IY(Ig.battlemag[nv] * 0x5 + Ig.battleat[nv] * 0xb - Ig.monsterdf[ne] * 0x3) : IY(Ig.battlemag[nv] * 0x6 + Ig.battleat[nv] * 0xd - Ig.monsterdf[ne] * 0x6);
          if (A === 0x4 && Ig.chapter === 0x3) {
            let L2 = Iv.first('obj_knight_enemy');
            L2 && (nX = IY(nX * (L2.damagereduction + 0.65)));
          }
          let L0 = Iv.first('obj_herosusie'),
            L1 = IZ(L0 ? L0.x : 0x5a, L0 ? L0.y : 0x96, nI);
          L1.damage = nX, L1.star = ne, L1.caster = nv, L1.target = In.monsterinstance(ne), A === 0x5 && (L1.red = 0x1);
        }
        break;
      }
    case 0x6:
      {
        let L3 = Ig.battlemag[nv] * 0x4;
        for (let L4 = 0x0; L4 < If(); L4++) II(L4, L3), nm(L4, L3);
        Ig.spelldelay = 0xf;
        break;
      }
    case 0x8:
      {
        let L5 = 0x0;
        for (let L6 = 0x0; L6 < 0x3; L6++) {
          if (Ig.monster[L6] !== 0x1) continue;
          let L7 = IZ(Ig.monsterx[L6], Ig.monstery[L6], N);
          L7.target = In.monsterinstance(L6), L7.myself = L6, L7.initdelay = L5 * 0xa, L5++;
        }
        Ig.spelldelay = 0x14 + L5 * 0xa;
        break;
      }
    case 0x9:
      {
        if (Ig.spelldelay = 0x1e, Ig.monster[ne] === 0x0 && ([ne, nY] = nW(ne)), nY === 0x0 && Ig.monster[ne] === 0x1) {
          Ig.spelldelay = 0x28;
          let L8 = Math.max(0x1, Math.min(0x3e7, Ig.battlemag[nv] - 0xa)),
            L9 = IY(L8 * 0x1e + 0x5a + Is(0xa)),
            LI = IZ(Ig.monsterx[ne], Ig.monstery[ne], f);
          LI.damage = L9, LI.star = ne, LI.caster = nv, LI.target = In.monsterinstance(ne);
        }
        break;
      }
    case 0xa:
      {
        if (Ig.spelldelay = 0x1e, I8() > 0x0) {
          let LA = IY(Ig.battlemag[nv] * 0x28 + 0x258),
            Ln = Iv.exists('obj_berdlyb2_enemy') ? Ig.charinstance && Ig.charinstance[nv] : null,
            LL = IZ(Ln ? Ln.x : 0x0, Ln ? Ln.y : 0x0, a);
          LL.caster = nv, LL.damage = LA, Ig.spelldelay = 0x8c, Iv.exists('obj_berdlyb2_enemy') && (Ig.spelldelay = 0xf423f, LL.textwait = 0x1);
        }
        break;
      }
    case 0x64:
      {
        if (Ig.monster[ne] === 0x0 && ([ne, nY] = nW(ne)), Ig.monster[ne] === 0x1) {
          let Lw = In.monsterinstance(ne),
            LH = Ig.monstertype[ne] === 0x3 || Ig.chapter >= 0x2 && Ig.monstertype[ne] === 0x34;
          if (Ig.mercymod[ne] >= 0x64) LH ? Lw.sparecon = 0x1 : (Ig.flag[0x33 + ne] = 0x2, Lw.userEvent(0xa), Lw.scr_monsterdefeat());else {
            I9(ne, Ig.sparepoint[ne]);
            let LW = IZ(0x0, 0x0, nw);
            LW.target = Lw, LW.fail = 0x1, LW.flashcolor = IK.yellow;
          }
        }
        Ig.spelldelay = 0x0;
        break;
      }
    default:
      A >= 0xc8 && A6(I4(A), ne, nv, {
        'healOne': (Lg, LR, LG) => {
          if (II(Lg, LR), nm(Lg, LR), LG) {
            let LE = Iv.all('obj_healanim').pop();
            LE && (LE.particlecolor = IK[LG]);
          }
          Ig.spelldelay = 0xf;
        },
        'healAll': Lg => nq(Lg)
      });
  }
}
IC(nc, 'scr_spell');
function nz() {
  return Iv.first('obj_battlecontroller');
}
IC(nz, 'BC');
var nO = new Set(['obj_aqua_enemy', 'obj_ball_enemy', 'obj_balthizard_enemy', 'obj_baseenemy', 'obj_bell_enemy', 'obj_bibliox_enemy', 'obj_blue_enemy', 'obj_elnina_lanino_controller', 'obj_enemy_example', 'obj_floradinn_enemy', 'obj_flowery_enemy', 'obj_guei_enemy', 'obj_halo_enemy', 'obj_hammer_of_justice_enemy', 'obj_holywatercooler_enemy', 'obj_jackenstein_enemy', 'obj_kawkaw_enemy', 'obj_knight_enemy', 'obj_leafling_enemy', 'obj_mizzle_enemy', 'obj_multiboss_controller', 'obj_multiboss_enemy1', 'obj_netskie_enemy', 'obj_nubert_enemy', 'obj_orange_green_controller', 'obj_organ_enemy', 'obj_pink_enemy', 'obj_pippins_enemy', 'obj_purple_enemy', 'obj_ribbick_enemy', 'obj_rouxls_ch3_enemy', 'obj_scarecrow_enemy', 'obj_shadowman_enemy', 'obj_sheary_enemy', 'obj_shinobeetle_enemy', 'obj_shutta_enemy', 'obj_sound_of_justice_enemy', 'obj_tenna_board4_enemy', 'obj_tenna_enemy', 'obj_terracota_enemy', 'obj_titan_enemy', 'obj_titan_spawn_enemy', 'obj_trashy_trio', 'obj_watercooler_enemy', 'obj_yellow_enemy', 'obj_zapper_enemy']),
  nk = new Map();
function nd(A) {
  let n = A.constructor;
  if (nk.has(n)) return nk.get(n);
  let nv = false;
  for (let ne = n.prototype; ne && ne !== Id.prototype && ne !== Object.prototype && !nv; ne = Object.getPrototypeOf(ne)) ne.constructor && nO.has(ne.constructor.name) && (nv = true);
  return nk.set(n, nv), nv;
}
IC(nd, 'handlesTalkEnd');
function nj() {
  let A = Ig.battlespell,
    n = Ig.battlespellcost;
  if (Array.isArray(A) && Array.isArray(n)) for (let nv = 0x0; nv < 0x3; nv++) {
    let ne = A[nv],
      nY = n[nv];
    if (ne && nY) {
      for (let nS = 0x0; nS < ne.length; nS++) ne[nS] === 0xa && (nY[nS] = Ig.maxtension);
    }
  }
  if (Array.isArray(Ig.spell) && Array.isArray(Ig.spellcost)) for (let nC = 0x0; nC < Ig.spell.length; nC++) {
    let no = Ig.spell[nC],
      nX = Ig.spellcost[nC];
    if (Array.isArray(no) && Array.isArray(nX)) {
      for (let L0 = 0x0; L0 < no.length; L0++) no[L0] === 0xa && (nX[L0] = Ig.maxtension);
    }
  }
  if (Ig.charweapon && Ig.charweapon[0x4] !== 0xd) {
    let L1 = (L2, L3, L4) => {
      if (!(!L2 || L2 === 0x4 || Ig.charweapon[L2] !== 0xd || !Array.isArray(L3) || !Array.isArray(L4))) {
        for (let L5 = 0x0; L5 < L3.length; L5++) if (L3[L5] === 0x9) {
          let L6 = I5(0x9, L2).cost;
          L6 > 0x0 && L6 < L4[L5] && (L4[L5] = L6);
        }
      }
    };
    if (Array.isArray(Ig.spell) && Array.isArray(Ig.spellcost)) {
      for (let L2 = 0x5; L2 < Ig.spell.length; L2++) L1(L2, Ig.spell[L2], Ig.spellcost[L2]);
    }
    if (Array.isArray(A) && Array.isArray(n)) {
      for (let L3 = 0x0; L3 < Math.min(0x3, If()); L3++) L1(Ig.char[L3], A[L3], n[L3]);
    }
  }
}
IC(nj, 'snowgrave100');
function nT(A, n, nv, ne, nY) {
  let nS = AG(n, AL);
  if (!nS) {
    A.draw_set_font('fnt_main'), A.draw_text(nv, ne + 0x4, n, IK.white), A.draw_set_font('fnt_mainbig');
    return;
  }
  let nC = Ib[nS].w;
  A.draw_sprite_ext(nS, 0x0, nv + 0x5, ne + 0x1, nC > AL ? AL / nC : 0x1, 0x1, 0x0, IK.white, 0x1);
}
IC(nT, 'fitName');
function nu(A, n, nv, ne, nY) {
  let nS = Ib[n];
  nS && nS.h > 0x1e ? A.draw_sprite_part(n, nv, 0x0, 0x0, nS.w, 0x24, ne - 0x4, nY - 0xa) : A.draw_sprite(n, nv, ne, nY);
}
IC(nu, 'headDraw');
var nQ = new Set([0x0, 0x1, 0x2, 0x3, 0x4, 0x7, 0x8, 0xb, 0xc, 0xd]),
  nh = IC(A => {
    if (Array.isArray(A)) return A.map(nh);
    if (A && typeof A == 'object' && Object.getPrototypeOf(A) === Object.prototype) {
      let n = {};
      for (let nv of Object.keys(A)) n[nv] = nh(A[nv]);
      return n;
    }
    return A;
  }, 'copied');
function nV() {
  let A = [];
  return Iv.with('obj_bulletgenparent', n => {
    let nv = {};
    for (let ne of Object.keys(n)) ne !== 'id' && typeof n[ne] != 'function' && (nv[ne] = nh(n[ne]));
    A.push([n.constructor, nv]);
  }), A;
}
IC(nV, 'attackAsItBegan');
var nM = IC(() => {}, 'NO_CREATE');
function nB(A) {
  let n = Math.min(A.base, A.left);
  if (A.left -= n, Ig.turntimer = n, !!A.gens.length) {
    Iv.with('obj_bulletgenparent', nv => nv.instance_destroy());
    for (let [nv, ne] of A.gens) {
      let nY = IZ(ne.x, ne.y, nv, {
        ...nh(ne),
        'create': nM,
        'preCreate': nM
      });
      nY && (delete nY.create, delete nY.preCreate);
    }
  }
}
IC(nB, 'runAttackAgain');
var nx = class HV extends Id {
  ["cleanUp"]() {
    Ig.fighting = 0x0, !Iv.exists('__roomhost') && (Ig.battleover || (Ig.battleover = 'win', IP()));
  }
  ["create"]() {
    Object.assign(this, {
      'victory': 0x0,
      'victoried': 0x0,
      'skipvictory': 0x0,
      'battlewriter': null,
      'lbuffer': 0x0,
      'rbuffer': 0x0,
      'onebuffer': 0x0,
      'twobuffer': 0x0,
      'cantspare': [0x0, 0x0, 0x0],
      'hidemercy': 0x0,
      'gigaqueencon': 0x0,
      'gigaqueentimer': 0x0,
      'gigaqueeny': 0x0,
      'attackpriority': -0x1,
      'messagepriority': -0x1
    }), Object.assign(this, {
      'disablesusieact': 0x0,
      'mercytotal': 0x0,
      'idefendedthisturn': 0x0,
      'ypostenna': 0x0,
      'oopsallacts': 0x0,
      'spadebuttonenabled': false,
      'spadebuttoncount': 0x0,
      'spadebuttontimer': 0x0,
      'heartbuttoncount': 0x0,
      'heartbuttontimer': 0x0,
      'heartbuttondirection': 0x10e,
      'heartsuccesstimer': 0x0,
      'heartsuccesscon': 0x0,
      'recentlyhighlightingheart': 0x0,
      'recentlyhighlightingheartvalue': 0x0,
      'rouxlsbuttontimer': 0x0,
      'rouxlsbuttoncount': -0x6,
      'rouxlsbuttoncount2': -0x6,
      'rouxlsbuttoncount_y': 0x0,
      'rouxlsgridenabled': false,
      'recentlyhighlightingspade': 0x0,
      'recentlyhighlightingspadevalue': 0x0,
      'gridchangedirections': true,
      'spadebuttondirection': 0x0,
      'rouxlsbuttondirection': 0x10e,
      'rouxlsbuttondirection2': 0x10e,
      'rouxlserrorcon': 0x0,
      'rouxlserrortimer': 0x0,
      'rouxlstelegraphtimer': 0x0,
      'rouxlstelegraphcon': 0x0,
      'spadetelegraphtimer': 0x0,
      'spadetelegraphcon': 0x0,
      'spadesuccesstimer': 0x0,
      'spadesuccesscon': 0x0,
      'rouxlsbuttonendcon': 0x0,
      'buttonorder': 0x0,
      'spadefail': false,
      'buttonspeed': 0x0,
      'norouxlsbutton': false,
      'dogtimer': 0x0,
      'dogcon': 0x0,
      'dogselectedcount': 0x0
    }), Ig.chapter >= 0x4 && In.bcCreate && In.bcCreate(this), Ig.battleend = 0x0, Ig.darkzone = 0x1, Ig.fighting = 0x1, Ig.fe = 0x0, Ig.fc = 0x0, Ig.typer = 0x4, Ig.battletyper = 0x4, Ig.myfight = 0x0, Ig.mnfight = 0x0, Ig.bmenuno = 0x0, Ig.attacking = 0x0, Ig.acting = [0x0, 0x0, 0x0], Ig.tension = 0x0, Ig.spelldelay = 0xa, I6(), Ig.tensionselect = 0x0, Ig.temptension = [Ig.tension, Ig.tension, Ig.tension], this.tempitem = [];
    for (let nv = 0x0; nv < 0xd; nv++) this.tempitem[nv] = [Ig.item[nv], Ig.item[nv], Ig.item[nv]];
    Ig.charcond = [0x0, 0x0, 0x0], Ig.automiss = [0x0, 0x0, 0x0], IN(Math.max(0x3, If()));
    for (let ne = 0x0; ne < Math.max(0x3, If()); ne++) Ig.char[ne] ? (Ig.charmove[ne] = 0x1, Ig.charcantarget[ne] = 0x1, Ig.chardead[ne] = 0x0) : (Ig.charmove[ne] = 0x0, Ig.charcantarget[ne] = 0x0, Ig.chardead[ne] = 0x0);
    Ig.flag[0x32] = 0x0, Ig.flag[0x33] = 0x0, Ig.flag[0x34] = 0x0, Ig.flag[0x35] = 0x0, Ig.monster = [0x0, 0x0, 0x0], Ig.monsterx = [0x0, 0x0, 0x0], Ig.monstery = [0x0, 0x0, 0x0], Ig.monstername = ['\x20', '\x20', '\x20'], Ig.monsterat = [0x0, 0x0, 0x0], Ig.monsterdf = [0x0, 0x0, 0x0], Ig.monsterhp = [0x0, 0x0, 0x0], Ig.monstermaxhp = [0x0, 0x0, 0x0], Ig.monsterinstance = [null, null, null], Ig.monstergold = [0x0, 0x0, 0x0, 0x0], Ig.monsterexp = [0x0, 0x0, 0x0, 0x0], Ig.sparepoint = [0x0, 0x0, 0x0], Ig.hittarget = [0x0, 0x0, 0x0], Ig.mercymod = [0x0, 0x0, 0x0], Ig.mercymax = [0x0, 0x0, 0x0], Ig.monstercomment = ['\x20', '\x20', '\x20'], Ig.monsterstatus = [0x0, 0x0, 0x0], Ig.canact = [[], [], []], Ig.actname = [[], [], []], Ig.actactor = [[], [], []], Ig.actdesc = [[], [], []], Ig.actcost = [[], [], []];
    for (let nY = 0x0; nY < 0x3; nY++) for (let nS = 0x0; nS < 0x6; nS++) Ig.canact[nY][nS] = 0x0, Ig.actname[nY][nS] = '\x20', Ig.actactor[nY][nS] = 0x1, Ig.actdesc[nY][nS] = '\x20', Ig.actcost[nY][nS] = 0x0;
    if (Object.assign(this, {
      'intro': 0x1,
      'chartotal': 0x0,
      'charpos': new Array(If()).fill(-0x1),
      'havechar': new Array(If()).fill(0x0),
      'mmy': new Array(If()).fill(0x0)
    }), Ig.charinstance = new Array(If()).fill(null), If() > 0x3) {
      let [nC, no] = x(If());
      Ig.heromakex = nC, Ig.heromakey = no;
    }
    let A = new Set();
    for (let nX = 0x0; nX < If(); nX++) {
      Ig.char[nX] !== 0x0 && this.chartotal++;
      let L0 = Ig.char[nX];
      if (L0 >= 0x1) {
        let L1 = IR(L0),
          L2 = Ig.charhero && Ig.charhero[L0] || d[L1 - 0x1] || 'kris',
          L3 = j(L2, Ib).id === L2 && k[L2] && k[L2].fallback || L2,
          L4 = Math.max(0x0, d.indexOf(k[L3] ? L3 : 'kris')),
          L5 = L2 === 'noelle' && Ig.chapter === 0x2 ? Aj : k[L2] && k[L2].custom ? AY : [Ac, Al, Ak][Math.min(0x2, L4)],
          L6 = A.has(L5) && Ar.has(L5) ? Ar.get(L5) : L5;
        A.add(L5);
        let L7 = IZ(Ig.heromakex[nX], Ig.heromakey[nX], L6);
        L7.herokey = L2, L7.setup(), L7.myself = nX, L7.char = L0, L7.base = L1, L7.depth = If() > 0x6 ? r(nX, If()) : 0xc8 - nX * 0x14, Ig.chapter >= 0x5 && In.heroSetup && In.heroSetup(L7), AP(L7);
        let L8 = U(If());
        L8 !== 0x1 && (L7.image_xscale *= L8, L7.image_yscale *= L8, L7.mywidth = Ir(L7.mywidth * L8), L7.myheight = Ir(L7.myheight * L8));
        this.havechar[nX] = 0x1, this.charpos[nX] = nX, Ig.charinstance[nX] = L7;
      }
    }
    for (let L9 = 0x0; L9 < 0x3; L9++) if (Ig.monstertype[L9] > 0x0) {
      Ig.monster[L9] = 0x1;
      let LI = IZ(Ig.monstermakex[L9], Ig.monstermakey[L9], Ig.monsterinstancetype[L9]);
      LI.myself = L9, Ig.monsterinstance[L9] = LI, LI.userEvent(0xc);
    }
    Ig.chapter === 0x2 && Iv.exists('obj_gigaqueen_enemy') && (this.gigaqueencon = 0x3, Iv.view.live = true);
    for (let LA of Ig.bystanders || []) {
      let Ln = IZ(LA.x, LA.y, LA.cls);
      Ln.myself = -0x1, Ln.visible = false, Ln.thrash && (Ln.thrash.visible = false);
    }
    Ig.battleactcount = [0x0, 0x0, 0x0], Ig.battlespell = [[], [], []], Ig.battlespellname = [[], [], []], Ig.battlespelldesc = [[], [], []], Ig.battlespellcost = [[], [], []], Ig.battlespelltarget = [[], [], []], Ig.battlespellspecial = [[], [], []];
    for (let LL = 0x0; LL < 0x3; LL++) for (let Lw = 0x0; Lw < 0x12; Lw++) Ig.battlespell[LL][Lw] = 0x0, Ig.battlespellname[LL][Lw] = '\x20', Ig.battlespelldesc[LL][Lw] = '\x20', Ig.battlespellcost[LL][Lw] = 0x0, Ig.battlespelltarget[LL][Lw] = 0x2, Ig.battlespellspecial[LL][Lw] = 0x0;
    In.spellmenu_setup && In.spellmenu_setup.call(this), e(), nj(), Ig.charturn = 0x0;
    let LH = 0x0;
    for (; LH < If() && Ig.char[LH] && Ig.charauto[Ig.char[LH]] === 0x1;) LH++;
    LH > 0x0 && LH < If() && Ig.char[LH] && (Ig.charturn = LH);
    Ig.currentactingchar = 0x0;
    for (let LW of ['acting', 'actingsingle', 'actingsimul', 'actingtarget', 'actingchoice']) if (Array.isArray(Ig[LW])) {
      for (let Lg = 0x0; Lg < Ia(); Lg++) Ig[LW][Lg] = 0x0;
    }
    Ig.charaction = [0x0, 0x0, 0x0], Ig.charspecial = [0x0, 0x0, 0x0], Ig.chartarget = [0x0, 0x0, 0x0], Ig.faceaction = [0x0, 0x0, 0x0], Ig.targeted = [0x0, 0x0, 0x0], IN(Math.max(0x3, If())), Ig.battleat = [], Ig.battledf = [], Ig.battlemag = [];
    for (let LR = 0x0; LR < If(); LR++) {
      let LG = Ig.char[LR];
      Ig.battleat[LR] = Ig.at[LG] + Ig.itemat[LG][0x0] + Ig.itemat[LG][0x1] + Ig.itemat[LG][0x2], Ig.battledf[LR] = Ig.df[LG] + Ig.itemdf[LG][0x0] + Ig.itemdf[LG][0x1] + Ig.itemdf[LG][0x2], Ig.battlemag[LR] = Ig.mag[LG] + Ig.itemmag[LG][0x0] + Ig.itemmag[LG][0x1] + Ig.itemmag[LG][0x2];
    }
    Ig.chapter >= 0x5 && In.bcBattleStats && In.bcBattleStats(this);
    for (let LE = 0x0; LE < 0x14; LE++) for (let Lf = 0x0; Lf < 0x14; Lf++) Ig.bmenucoord[LE][Lf] = 0x0;
    Object.assign(this, {
      'movenoise': 0x0,
      'selnoise': 0x0,
      'laznoise': 0x0,
      'damagenoise': 0x0,
      'grazenoise': 0x0,
      'tp': 0x0,
      'tpy': 0x32,
      'bp': 0x0,
      'bpy': 0x98,
      's_siner': 0x0,
      'reset': 0x0,
      'timeron': 0x1,
      'noreturn': 0x0,
      'shakeReq': 0x0,
      'victortimer': 0x0
    }), this.bcolor = Iq(Iq(IK.purple, IK.black, 0.7), IK.dkgray, 0.5), IZ(0x0, 0x0, AZ), this.hpcolor = [IK.aqua, IK.fuchsia, IK.lime, IK.yellow], this.hpcolorsoft = this.hpcolor.map(La => Iq(La, IK.white, 0.5)), In.charinstance = La => Ig.charinstance[La], In.monsterinstance = La => Ig.monsterinstance[La], In.dmgwriter = (La, LN) => IZ(La, LN, Af), In.shake = () => {
      Iv.exists('obj_shake') || IZ(0x0, 0x0, I3);
    }, In.gameover = () => {
      Ig.battleover = 'lose', IM(), Im('snd_hurt1'), IQ();
    };
  }
  ["alarmEvent"](A) {
    A === 0x2 && (this.reset = 0x0, nN());
  }
  ["step"]() {
    if (nj(), e(), O(), z(this), Ig.chapter === 0x3 && Ig.mnfight === 0x2 && !this.boardend && (p === 'room_board_1' || p === 'room_board_2' || p === 'room_board_3') && Ig.char.every(n => !n || Ig.hp[n] < 0x1) && (this.boardend = 0x1, In.gameover && In.gameover()), this.t_siner = (this.t_siner || 0x0) + 0x1, Ig.chapter === 0x2) {
      if (this.gigaqueencon !== 0x0) return;
      let n = Iv.first('o_boxingcontroller');
      if (n && n.dead === 0x1 && Ig.turntimer < 0x0 || Iv.exists('obj_boxing_loss_controller') || Iv.exists('o_bq_whitefade_persistent')) return;
    }
    if (Ig.chapter >= 0x2 && (this.t_siner - 0x1) % 0x6 === 0x0) for (let nv = 0x0; nv < If(); nv++) {
      let ne = Ig.char[nv];
      A3(ne) && Ig.hp[ne] > Ir(Ig.maxhp[ne] / 0x3) && Ig.hp[ne]--;
    }
    for (let nY = 0x0; nY < If(); nY++) {
      let nS = Ig.charinstance[nY];
      if (!(!nS || !(nS.poisonamount > 0x0)) && (nS.poisontimer = (nS.poisontimer || 0x0) + 0x1, nS.poisontimer >= 0xa)) {
        let nC = Ig.char[nY];
        Ig.hp[nC] > 0x1 ? (Ig.hp[nC]--, nS.poisonamount--) : nS.poisonamount = 0x0, nS.poisontimer = 0x0;
      }
    }
    if (At() || n2()) return;
    if (Ig.chapter === 0x3 && this.victory === 0x1 && this.victoried === 0x0) {
      let no = Ao('obj_shutta_enemy');
      no && no.amiabossfight && (Ig.battletyper = 0x4);
    }
    if (Ig.chapter >= 0x4 && In.bcStepGate && In.bcStepGate(this)) return;
    if (this.shakeReq && (this.shakeReq = 0x0, Iv.exists('obj_shake') || IZ(0x0, 0x0, I3)), this.victory === 0x1 && this.victoried === 0x0) {
      Ig.faceaction = [0x0, 0x0, 0x0], Ig.battleend = 0x1, Ig.mnfight = -0x1, Ig.myfight = 0x7;
      for (let L0 = 0x3; L0 < If(); L0++) Ig.faceaction[L0] = 0x0;
      Iv.exists(this.battlewriter) && this.battlewriter.instance_destroy(), Iv.with('obj_face', L1 => L1.instance_destroy());
      for (let L1 = 0x0; L1 < 0x4; L1++) Ig.hp[L1] < 0x1 && (Ig.hp[L1] = Ir(Ig.maxhp[L1] / 0x8));
      if (this.lastbattlewriter = null, this.skipvictory === 0x0) {
        if (Ig.monstergold[0x3] += IS(Ig.tension / 0xa) * (Ig.chapter >= 0x2 ? Ig.chapter : 0x1), Ig.charweapon[0x1] === 0x8 && (Ig.monstergold[0x3] += IS(Ig.monstergold[0x3] / 0x14)), Ig.chapter >= 0x5 && In.bcVictoryGold && In.bcVictoryGold(this), Ig.msg = new Array(0x64).fill('\x20'), Ig.msg[0x0] = "* You won^1!&* Got " + Ig.monsterexp[0x3] + " EXP and " + Ig.monstergold[0x3] + " D$./%", Ig.typer = Ig.battletyper, Ig.fc = 0x0, Ig.chapter >= 0x2 && Ig.flag[0x25] === 0x1 && (Ig.msg[0x0] = "* You won the battle!/%"), Ig.chapter >= 0x2 && Ig.flag[0x3f] === 0x1) {
          Ig.msg[0x0] = "* You won^1!&* Got " + Ig.monstergold[0x3] + " D$^1.&* " + (Ig.char.some(L3 => L3 && (Ig.charhero && Ig.charhero[L3] ? Ig.charhero[L3] === 'noelle' : L3 === 0x4)) ? 'Noelle' : 'You') + " became stronger./%";
          let L2 = Im('snd_dtrans_lw');
          try {
            Il(L2, 0x2), Ie(L2, 0.7, 0x0);
          } catch {}
        }
        Ig.chapter >= 0x4 && In.bcVictoryMsg && In.bcVictoryMsg(this), this.lastbattlewriter = t(), Ig.chapter >= 0x2 && Ig.flag[0x26] === 0x1 && this.lastbattlewriter && this.lastbattlewriter.instance_destroy();
        for (let L3 = 0x0; L3 < If(); L3++) {
          let L4 = Ig.charinstance[L3];
          L4 && (L4.state = 0x7, L4.hurt = 0x0, L4.hurttimer = 0x0);
        }
      }
      this.victoried = 0x1, this.victortimer = 0x0, this.skipvictory === 0x1 && (this.victortimer = -0x14), Ig.chapter >= 0x5 && this.skipvictory === 0x2 && (this.victortimer = 0x9);
      let nX = Iv.first('obj_tensionbar');
      nX && (nX.alarm[0x5] = 0xf, nX.hspeed = -0xa, nX.friction = -0.4);
    }
    this.victoried === 0x1 && (this.victortimer++, !Iv.exists(this.lastbattlewriter) && this.victortimer >= 0xa && !(Ig.chapter >= 0x4 && In.bcVictoryHold && In.bcVictoryHold(this)) && (this.intro = 0x2, this.bp <= 0x0 && nF())), this.talkNobodyEnds(), Ig.myfight === 0x0 && !(Ig.chapter >= 0x4 && In.bcSkipMenu && In.bcSkipMenu(this)) && this.menuStep(), this.movenoise === 0x1 && (Im('snd_menumove'), this.movenoise = 0x0), this.grazenoise === 0x1 && (Im('snd_graze'), this.grazenoise = 0x0), this.selnoise === 0x1 && (Im('snd_select'), this.selnoise = 0x0), this.damagenoise === 0x1 && (Ig.chapter >= 0x4 && In.bcDamageNoise && In.bcDamageNoise(this) || Im('snd_damage'), this.damagenoise = 0x0), this.onebuffer--, this.twobuffer--, this.lbuffer--, this.rbuffer--;
    let A = Ig.mnfight === 0x2 && this.timeron === 0x1 || Ig.chapter >= 0x4 && In.bcTurnTimer && In.bcTurnTimer(this);
    if (A || (this._turnScaled = 0x0), A) {
      if (this._turnScaled !== 0x1) {
        this._turnScaled = 0x1, this._stretch = null;
        let L5 = ID.turnscale ?? 0x1;
        L5 !== 0x1 && Ig.turntimer > 0x0 && Ig.turntimer < 0x7d0 && (L5 < 0x1 ? Ig.turntimer = Math.max(0x1, Math.round(Ig.turntimer * L5)) : this._stretch = {
          'base': Ig.turntimer,
          'left': Math.round(Ig.turntimer * (L5 - 0x1)),
          'gens': nV()
        });
      }
      this._stretch && !this._stretch.gens.length && (this._stretch.gens = nV()), Ig.turntimer -= 0x1, Ig.turntimer <= 0x0 && this.reset === 0x0 && this._stretch && this._stretch.left > 0x0 && nB(this._stretch), Ig.turntimer <= 0x0 && this.reset === 0x0 && (Iv.with('obj_bulletparent', L6 => L6.instance_destroy()), Iv.with('obj_bulletgenparent', L6 => L6.instance_destroy()), Iv.with('obj_darkener', L6 => {
        L6.darken = 0x0;
      }), Iv.with('obj_heart', L6 => {
        IZ(L6.x, L6.y, I2), L6.instance_destroy();
      }), this.reset = 0x1, Ig.chapter >= 0x4 && In.bcNoReturn && In.bcNoReturn(this) || this.noreturn === 0x0 && (this.alarm[0x2] = 0xf));
    }
    Ig.chapter >= 0x2 && Ig.myfight === 0x3 && I8() === 0x0 && !Iv.exists('obj_writer') && (nJ(), Ig.myfight === 0x3 && nf()), Ig.time++;
  }
  ["talkNobodyEnds"]() {
    if (Ig.chapter < 0x3 || Ig.mnfight !== 1.5 || Ig.myfight === 0x0) {
      this._mn15 = 0x0;
      return;
    }
    if (++this._mn15 < 0x3) return;
    let A = n => !(n instanceof AC) || typeof n.myself == 'number' && Ig.monsterinstance[n.myself] === n && Ig.monster[n.myself] === 0x1;
    Iv.list.some(n => n !== this && !n.destroyed && nd(n) && A(n)) || (Iv.exists('obj_growtangle') || IZ(F(0x0) + 0x140, 0xaa, I0), Iv.exists('obj_moveheart') || I1(), Ig.mnfight = 0x2, this._mn15 = 0x0);
  }
  ["actselect"](A, nv) {
    let ne = Ig.monsterinstance[A],
      nY = IR(Ig.char[Ig.charturn]),
      nS = this.actinfo(A);
    if (ne && !ne.destroyed && (nY === 0x1 ? ne.acting = nv + 0x1 : nY === 0x2 ? ne.actingsus = nv + 0x1 : nY === 0x3 ? ne.actingral = nv + 0x1 : nY === 0x4 && (ne.actingnoe = nv + 0x1)), nY === 0x1) {
      let nC = IE();
      Ig.actingsimul[nC] = nS.simul.get(nv), Ig.acting[nC] = 0x1, Ig.actingsingle[nC] = 0x1, Ig.actingtarget[Ig.charturn] = A;
      let no = (Ig.actactor[A] || [])[nv],
        nX = L0 => IG(L0);
      no === 0x2 && nX(0x2) >= 0x0 && (Ig.acting[nX(0x2)] = 0x1), no === 0x3 && nX(0x3) >= 0x0 && (Ig.acting[nX(0x3)] = 0x1), no === 0x4 && (Ig.char[0x2] && (Ig.acting[0x2] = 0x1), Ig.char[0x1] && (Ig.acting[0x1] = 0x1)), no === 0x5 && nX(0x4) >= 0x0 && (Ig.acting[nX(0x4)] = 0x1);
      for (let L0 = 0x0; L0 < Ia(); L0++) Ig.acting[L0] === 0x1 && (Ig.faceaction[L0] = 0x6, Ig.charaction[L0] = 0x9);
    } else {
      Ig.actingtarget[Ig.charturn] = A, Ig.actingsingle[Ig.charturn] = 0x1;
      let L1 = Ig.customTeam === 0x1 && Ig.char.some((L2, L3) => L3 !== Ig.charturn && Ig.actingsingle[L3] === 0x1 && L2 && IR(L2) === nY);
      Ig.actingsimul[Ig.charturn] = L1 ? 0x0 : nS.simul.get(nv), Ig.faceaction[Ig.charturn] = 0x6, Ig.charaction[Ig.charturn] = 0x9;
    }
  }
  ["techUnlocked"](A, nv) {
    if (Ig.chapter !== 0x3) return true;
    let ne = (Ig.battlespellname[A] || [])[nv];
    if (ne === void 0x0 || ne === '\x20') return true;
    let nY = true;
    Iv.with('obj_pippins_enemy', nX => {
      ne === (Ig.actname[nX.myself] || [])[0x3] && (Ig.flag[0x414] || 0x0) < 0x96 && (nY = false);
    });
    let nS = [0x1, 0x2, 0x3].some(nX => Ig.chararmor1[nX] === 0x7 || Ig.chararmor2[nX] === 0x7),
      nC = Iv.first('obj_tenna_enemy_bg'),
      no = Iv.first('obj_tenna_enemy');
    return nC && no && ne === (Ig.actnamesus[no.myself] || [])[0x1] && nC.myscore < (nS ? 0x1e : 0x14) && (nY = false), nY;
  }
  ["actinfo"](A) {
    let n = Ig.chapter === 0x1 ? '' : {
        0x1: '',
        0x2: 'sus',
        0x3: 'ral',
        0x4: 'noe'
      }[IR(Ig.char[Ig.charturn])] ?? '',
      nv = (ne, nY) => {
        let nS = Ig[ne + n],
          nC = nS && nS[A] || [];
        return {
          'get': no => nC[no] === void 0x0 ? nY : nC[no]
        };
      };
    return {
      'canact': nv('canact', 0x0),
      'cost': nv('actcost', 0x0),
      'simul': nv('actsimul', 0x0),
      'name': nv('actname', '\x20'),
      'desc': nv('actdesc', '\x20')
    };
  }
  ["charAlive"](A) {
    let n = IG(A);
    return n < 0x0 ? false : this.havechar[n] === 0x1 && Ig.hp[Ig.char[n]] > 0x0;
  }
  ["partnerReady"](A) {
    return this.charAlive(A) || Ig.customTeam === 0x1 && IG(A) < 0x0;
  }
  ["rouxlsButtonStep"]() {
    let A = Ig.chapter === 0x3 ? Iv.first('obj_rouxls_ch3_enemy') : null;
    if (!(A && A.intro >= 0x2 && this.spadebuttonenabled && Ig.bmenuno === 0x0 && Ig.myfight === 0x0)) {
      this.rouxlserrortimer = 0x0, this.rouxlstelegraphcon = 0x0;
      return;
    }
    let nv = Ig.bmenucoord,
      ne = () => nv[0x0][Ig.charturn] + this.rouxlsbuttoncount_y * 0x5,
      nY = (L0, L1) => {
        for (let L2 = 0x1; L2 <= 0x5; L2++) {
          if (L0 !== L2) continue;
          let L3 = false;
          for (let L4 = 0x0; L4 < 0x6; L4++) L1 === L2 + L4 * 0x5 && (L3 = true);
          L3 && (L0 = L2 === 0x5 ? 0x1 : L2 + 0x1);
        }
        return L0;
      },
      nS = () => {
        this.rouxlsbuttoncount = nY(this.rouxlsbuttoncount, this.heartbuttoncount), this.rouxlsbuttoncount = nY(this.rouxlsbuttoncount, this.spadebuttoncount);
      },
      nC = L0 => {
        this.rouxlsgridenabled && (this.rouxlsbuttoncount_y = 0x4, this.buttonorder = 0x0, this.rouxlsbuttoncount = IT(0x0, -0x1, -0x3, -0x4), L0 && (this.spadebuttoncount = -0x6));
      },
      no = () => Im('snd_menumove', {
        'pitch': 0.6 + Is(0.8)
      }),
      nX = false;
    for (let L0 = 0x1; L0 <= 0x3; L0++) Ig.hp[L0] < Ig.maxhp[L0] / 0x3 && (nX = true);
    if (Ig.hp[0x1] + Ig.hp[0x2] + Ig.hp[0x3] < (Ig.maxhp[0x1] + Ig.maxhp[0x2] + Ig.maxhp[0x3]) / 0x2 && (nX = true), this.rouxlserrorcon === 0x0 && this.rouxlstelegraphcon === 0x0 && this.rouxlsbuttoncount > 0x0 && this.rouxlsbuttoncount - 0x1 === ne() && (this.rouxlserrorcon = 0x1, Im('snd_error')), this.rouxlserrorcon === 0x0 && this.rouxlstelegraphcon === 0x0 && this.rouxlsbuttoncount2 > 0x0 && this.rouxlsbuttoncount2 - 0x1 === ne() && (this.rouxlserrorcon = 0x1, Im('snd_error')), this.rouxlserrorcon === 0x1 && (this.rouxlserrortimer++, this.rouxlserrortimer >= 0xa && (this.spadesuccesscon = 0x0, this.spadebuttontimer = 0x0, this.rouxlserrortimer = 0x0, this.rouxlserrorcon = 0x0, Ig.bmenuno = 0x0, nG(), nv[0x0][0x0] = 0x2, nv[0x0][0x1] = 0x2, nv[0x0][0x2] = 0x2, nC(false), A.phase > 0x1 && (this.rouxlsbuttondirection = 0x10e, this.rouxlsbuttoncount = this.rouxlsbuttoncount === IT(0x0, -0x1, -0x3, -0x4) ? 0x1 : 0x0)), nS()), this.rouxlserrorcon === 0x0 && (this.spadebuttontimer++, A.phase > 0x1 && this.rouxlsbuttontimer++), nX ? nX === true && A.phase > 0x1 && this.heartbuttontimer++ : this.heartbuttoncount = -0x6, this.spadebuttontimer >= 0xa && this.spadetelegraphcon === 0x1) this.spadetelegraphcon = 0x0, this.spadebuttontimer = 0x0;else {
      if (this.spadebuttontimer >= 0xa && this.spadesuccesscon === 0x1) this.norouxlsbutton = false, this.rouxlserrortimer = 0x0, this.rouxlserrorcon = 0x0, this.spadesuccesscon = 0x0, this.spadesuccesstimer = 0x0, nv[0x0][0x0] = 0x2, nv[0x0][0x1] = 0x2, nv[0x0][0x2] = 0x2, nC(true), this.spadefail = false, this.rouxlsbuttonendcon === 0x0 ? nG() : (Ig.charturn = 0x0, Ig.bmenuno = 0x0);else {
        if ((this.spadebuttontimer >= 0x7 && this.buttonspeed === 0x0 || this.spadebuttontimer >= 0x5 && this.buttonspeed === 0x1 || this.spadebuttontimer >= 0x3 && this.buttonspeed === 0x2) && this.spadetelegraphcon === 0x0 && this.spadesuccesscon === 0x0) {
          this.spadebuttontimer = 0x0, this.dogcon !== 0x2 && this.spadebuttoncount !== -0x6 && no(), this.spadebuttondirection === 0x0 && this.spadebuttoncount++, this.spadebuttondirection === 0x5a && (this.spadebuttoncount -= 0x5), this.spadebuttondirection === 0xb4 && this.spadebuttoncount--, this.spadebuttondirection === 0x10e && this.spadebuttoncount !== -0x6 && (this.spadebuttoncount += 0x5);
          let L1 = this.spadebuttoncount;
          !this.rouxlsgridenabled && L1 > 0x5 ? this.spadebuttoncount = 0x1 : (this.spadebuttondirection === 0x0 && [0x6, 0xb, 0x10, 0x15, 0x1a].includes(L1) || this.spadebuttondirection === 0x5a && [-0x4, -0x3, -0x2, -0x1, 0x0].includes(L1) || this.spadebuttondirection === 0xb4 && [0x0, 0x5, 0xa, 0xf, 0x14].includes(L1) || this.spadebuttondirection === 0x10e && [0x1a, 0x1b, 0x1c, 0x1d, 0x1e].includes(L1)) && (this.buttonorder = 0x0, this.spadebuttoncount = -0x6, this.rouxlsbuttondirection = 0x10e, this.rouxlsbuttoncount = IT(0x1, 0x2, 0x3, 0x4, 0x5), this.rouxlsbuttontimer = 0x0), nS();
        }
      }
    }
    if (this.heartbuttontimer >= 0xa && this.heartsuccesscon === 0x1) {
      this.caster = 0x1;
      for (let L2 = 0x0; L2 < If(); L2++) {
        if (!In.charinstance(L2)) continue;
        let L3 = Ir(Ig.maxhp[Ig.char[L2]] / 0x2);
        II(L2, L3), nm(L2, L3);
      }
      this.heartsuccesscon = 0x0, this.buttonorder = 0x0, this.spadebuttoncount = -0x6, this.rouxlsbuttondirection = 0x10e, this.rouxlsbuttoncount = IT(0x1, 0x2, 0x3, 0x4, 0x5), nS(), this.heartsuccesstimer = 0x0, nv[0x0][0x0] = 0x2, nv[0x0][0x1] = 0x2, nv[0x0][0x2] = 0x2, nC(true);
    } else {
      if (this.heartbuttontimer >= 0x7 && this.spadetelegraphcon === 0x0 && this.spadesuccesscon === 0x0) {
        this.heartbuttontimer = 0x0, this.dogcon !== 0x2 && this.heartbuttoncount !== -0x6 && no(), this.heartbuttondirection === 0x0 && this.heartbuttoncount++, this.heartbuttondirection === 0x5a && (this.heartbuttoncount -= 0x5), this.heartbuttondirection === 0xb4 && this.heartbuttoncount--, this.heartbuttondirection === 0x10e && (this.heartbuttoncount += 0x5);
        let L4 = this.heartbuttoncount;
        !this.rouxlsgridenabled && L4 > 0x5 ? this.heartbuttoncount = 0x1 : (this.heartbuttondirection === 0x0 && [0x6, 0xb, 0x10, 0x15, 0x1a].includes(L4) || this.heartbuttondirection === 0x5a && [-0x4, -0x3, -0x2, -0x1, 0x0].includes(L4) || this.heartbuttondirection === 0xb4 && [0x0, 0x5, 0xa, 0xf, 0x14].includes(L4) || this.heartbuttondirection === 0x10e && [0x1a, 0x1b, 0x1c, 0x1d, 0x1e].includes(L4)) && (this.heartbuttoncount = -0x6, this.heartbuttondirection = 0x10e, this.heartbuttoncount = IT(0x1, 0x2, 0x3, 0x4, 0x5)), this.heartbuttoncount = nY(this.heartbuttoncount, this.rouxlsbuttoncount), this.heartbuttoncount = nY(this.heartbuttoncount, this.spadebuttoncount), (this.heartbuttoncount === this.rouxlsbuttoncount || this.heartbuttoncount === this.spadebuttoncount) && this.heartbuttoncount++, this.heartbuttoncount > 0x1e && (this.heartbuttoncount = 0x1a);
      }
    }
    this.rouxlsbuttontimer >= 0x14 && this.rouxlstelegraphcon === 0x1 ? (this.rouxlstelegraphcon = 0x0, this.rouxlsbuttontimer = 0x0) : (this.rouxlsbuttontimer >= 0x7 && this.buttonspeed === 0x0 || this.rouxlsbuttontimer >= 0x5 && this.buttonspeed === 0x1 || this.rouxlsbuttontimer >= 0x3 && this.buttonspeed === 0x2) && this.rouxlstelegraphcon === 0x0 && this.spadesuccesscon === 0x0 && (this.rouxlsbuttontimer = 0x0, this.rouxlsbuttoncount !== -0x6 && no(), this.rouxlsbuttondirection === 0x0 && this.rouxlsbuttoncount++, this.rouxlsbuttondirection === 0x5a && (this.rouxlsbuttoncount -= 0x5), this.rouxlsbuttondirection === 0xb4 && this.rouxlsbuttoncount--, this.rouxlsbuttondirection === 0x10e && this.rouxlsbuttoncount !== -0x6 && (this.rouxlsbuttoncount += 0x5), this.rouxlsbuttondirection === 0x10e && [0x1a, 0x1b, 0x1c, 0x1d, 0x1e].includes(this.rouxlsbuttoncount) && (this.buttonorder++, this.buttonorder < 0x2 && A.phase === 0x2 || this.buttonorder < 0x4 && A.phase === 0x3 ? (this.rouxlsbuttondirection = 0x10e, this.rouxlsbuttoncount = IT(0x1, 0x2, 0x3, 0x4, 0x5)) : (this.rouxlsbuttoncount = -0x6, this.spadebuttontimer = 0x0, this.spadebuttondirection = 0x10e, this.spadebuttoncount = IT(0x1, 0x2, 0x3, 0x4, 0x5))), nS(), this.spadebuttoncount = nY(this.spadebuttoncount, this.heartbuttoncount), this.spadebuttoncount = nY(this.spadebuttoncount, this.rouxlsbuttoncount));
  }
  ["rouxlsConfirm"]() {
    let A = Iv.first('obj_rouxls_ch3_enemy'),
      n = Ig.bmenucoord,
      nv = () => n[0x0][Ig.charturn] + this.rouxlsbuttoncount_y * 0x5,
      ne = () => {
        this.rouxlsgridenabled && (this.rouxlsbuttoncount_y = 0x4, this.buttonorder = 0x0, this.rouxlsbuttoncount = IT(0x0, -0x1, -0x3, -0x4));
      };
    if (this.norouxlsbutton = true, !this.spadebuttonenabled) return Ig.faceaction[Ig.charturn] = 0x6, n[0x0][0x0] = 0x2, n[0x0][0x1] = 0x2, n[0x0][0x2] = 0x2, this.rouxlsgridenabled && (this.rouxlsbuttoncount_y = 0x4, this.rouxlserrorcon = 0x0, this.rouxlstelegraphtimer = 0x0), Iv.exists('obj_tenna_board4_enemy') ? (this.onebuffer = 0x1, Ig.bmenuno = 0xb) : nG(), true;
    this.spadesuccesscon = 0x1;
    let nY = false,
      nS = Iv.first('obj_heroralsei');
    return Ig.charturn === 0x2 && nS && (nS.sprite_index === 'spr_ralseib_yarn_1' || nS.sprite_index === 'spr_ralseib_yarn_2') && A && A.yarnendturn === 0x0 ? (this.selnoise = 0x0, Ig.bmenuno = 0x0, A.yarnendturn = 0x1, this.dogcon < 0x1 && (this.rouxlsbuttonendcon = 0x0, this.spadebuttoncount - 0x1 === nv() || this.recentlyhighlightingspade > 0x0 ? (Im('snd_coin'), Ig.faceaction[Ig.charturn] = 0x6, this.spadesuccesscon = 0x1, this.recentlyhighlightingspade > 0x0 && this.spadebuttoncount - 0x1 !== nv() && (this.spadebuttoncount = this.recentlyhighlightingspadevalue)) : (Im('snd_error'), this.spadesuccesscon = 0x1, this.spadefail = true)), this.dogcon > 0x0 && (Im('snd_pombark'), this.dogselectedcount++, this.spadesuccesscon = 0x0, Ig.charturn === 0x2 && this.dogselectedcount < 0x9 ? (Ig.charturn = 0x0, Ig.bmenuno = 0x0) : (nG(), n[0x0][0x0] = 0x2, n[0x0][0x1] = 0x2, n[0x0][0x2] = 0x2, ne(), Ig.charturn === 0x2 && this.dogselectedcount >= 0x9 && (A.dogtrigger = 0x1))), true) : (this.spadebuttonenabled && nY === false && (this.selnoise = 0x0, this.dogcon > 0x0 ? this.spadebuttoncount - 0x1 === nv() || this.recentlyhighlightingspade > 0x0 || this.dogcon === 0x2 ? (this.buttonspeed++, Im('snd_pombark'), this.dogselectedcount++, this.dogcon === 0x1 && (this.dogcon = 0x2), this.recentlyhighlightingspade > 0x0 && this.spadebuttoncount - 0x1 !== nv() && (this.spadebuttoncount = this.recentlyhighlightingspadevalue)) : (Im('snd_error'), this.dogcon = -0x1, this.spadefail = true) : this.spadebuttoncount - 0x1 === nv() || this.recentlyhighlightingspade > 0x0 ? (this.buttonspeed++, A && A.spadepower++, Im('snd_coin'), Ig.faceaction[Ig.charturn] = 0x6, this.spadesuccesscon = 0x1, this.recentlyhighlightingspade > 0x0 && this.spadebuttoncount - 0x1 !== nv() && (this.spadebuttoncount = this.recentlyhighlightingspadevalue)) : this.heartbuttoncount - 0x1 === nv() ? (this.buttonspeed++, Im('snd_coin'), this.heartsuccesscon = 0x1, this.spadebuttontimer = 0x0) : (Im('snd_error'), this.spadesuccesscon = 0x1, this.spadefail = true)), this.rouxlsbuttonendcon = 0x0, this.dogcon > 0x0 && (this.dogselectedcount++, Ig.charturn === 0x2 && this.dogselectedcount < 0x9 ? this.rouxlsbuttonendcon = 0x1 : Ig.charturn === 0x2 && this.dogselectedcount >= 0x9 ? (this.rouxlsbuttonendcon = 0x0, A && (A.dogtrigger = 0x1)) : this.rouxlsbuttonendcon = 0x0), true);
  }
  ["menuStep"]() {
    if (Ig.standaloneMinigame && Ig.myfight === 0x0 && Ig.mnfight === 0x0 && (Iv.exists('obj_rhythmgame') || Ig.minigameStage)) return;
    if (Ig.minigameOnly && Ig.myfight === 0x0 && Ig.mnfight === 0x0) {
      let nC = Ig.monsterinstance && Ig.monsterinstance[0x0];
      nC && !nC.destroyed && typeof nC.minigameRearm == 'function' && nC.minigameRearm(), Ig.charturn = nR();
      for (let no = 0x0; no < If(); no++) Ig.acting[no] = 0x0, Ig.charaction[no] = 0x0, Ig.faceaction[no] = 0x0;
      nf();
      return;
    }
    let A = Ig.charturn,
      nv = Ig.bmenucoord,
      ne = Ig.bmenuno === 0x0 ? -0x64 : 0xa;
    nQ.has(Ig.bmenuno) && (this.battlewriter && !this.battlewriter.destroyed && (this.battlewriter.depth = ne), Iv.with('obj_face', nX => {
      nX.depth = ne - 0x1;
    }));
    let nY = () => {
      this.battlewriter && !this.battlewriter.destroyed && (this.battlewriter.depth = 0xa), Iv.with('obj_face', nX => {
        nX.depth = 0x9;
      });
    };
    if (Ig.bmenuno === 0x0) {
      let nX = true,
        L0 = true;
      Iv.exists('obj_board_battleintroduction') && (nX = false), Iv.with('obj_knight_enemy', L2 => {
        L2.practicemode && (nX = false);
      }), (this.spadesuccesscon === 0x1 || this.rouxlserrorcon === 0x1) && (nX = false);
      let L1 = Ig.chapter === 0x3 ? Iv.first('obj_rouxls_ch3_enemy') : null;
      if (L1 && (L1.dancecon = 0x1, L1.intro === 0x2 && (nX = false), L0 = false, L1.intro === 0x3 && (L0 = true), this.oopsallacts === 0x1 && this.spadebuttonenabled && L1.phase !== 0x3 && Ig.charturn === 0x0 && this.dogcon === 0x0 ? this.dogtimer++ : this.dogtimer = 0x0, this.dogtimer === 0x3e8 && (this.dogcon = 0x1)), !Iv.exists(this.battlewriter) && L0 && !(Ig.chapter === 0x5 && Ig.battlemsg[0x0] === '')) {
        if (Ig.msg[0x0] = Ig.battlemsg[0x0], Ig.typer = Ig.battletyper, Ig.chapter === 0x3) {
          let L2 = Iv.first('obj_tenna_enemy');
          (L2 && L2.turn === 0x0 || Iv.exists('obj_tennabattleconvo_controller')) && (Ig.fe = 0x0, Ig.fc = 0x16, Ig.typer = 0x50);
          let L3 = Ig.encounterno === 0x7b ? Iv.first('obj_pippins_enemy') : null;
          L3 && (L3.turns === 0x0 || L3.turns === 0x2 || L3.turns === 0x4) && (Ig.fe = 0x0, Ig.fc = 0x2, Ig.typer = 0x2d), L3 && (L3.turns === 0x1 || L3.turns === 0x3) && (Ig.fe = 0x0, Ig.fc = 0x1, Ig.typer = 0x2f);
        }
        this.battlewriter = t();
      }
      if (Iu() && this.lbuffer < 0x0 && nX && (nv[0x0][A] = nv[0x0][A] === 0x0 ? 0x4 : nv[0x0][A] - 0x1, this.movenoise = 0x1, this.rbuffer = 0x1, this.disablesusieact === 0x1 && Ig.charturn === 0x1 && nv[0x0][A] === 0x1 && (nv[0x0][A] = 0x0), Ig.chapter >= 0x4 && this.disablesusieralseiattack === 0x1 && (Ig.charturn === 0x1 || Ig.charturn === 0x2) && nv[0x0][A] === 0x0 && (nv[0x0][A] = 0x4)), IV() && this.rbuffer < 0x0 && nX && (nv[0x0][A] = nv[0x0][A] === 0x4 ? 0x0 : nv[0x0][A] + 0x1, this.movenoise = 0x1, this.lbuffer = 0x1, this.disablesusieact === 0x1 && Ig.charturn === 0x1 && nv[0x0][A] === 0x1 && (nv[0x0][A] = 0x2), Ig.chapter >= 0x4 && this.disablesusieralseiattack === 0x1 && (Ig.charturn === 0x1 || Ig.charturn === 0x2) && nv[0x0][A] === 0x0 && (nv[0x0][A] = 0x1)), !(Iz() && this.rouxlserrorcon === 0x1 && this.dogcon < 0x1)) {
        if (Iz() && this.twobuffer < 0x0 && nX) {
          this.onebuffer = 0x1, this.selnoise = 0x1;
          let L4 = nv[0x0][A];
          if (this.oopsallacts === 0x1 && this.rouxlsConfirm()) return;
          if (L4 === 0x0 && (Ig.bmenuno = 0x1), L4 === 0x1 && IR(Ig.char[A]) !== 0x1 && (Ig.bmenuno = 0x2), L4 === 0x1 && IR(Ig.char[A]) === 0x1 && (Ig.bmenuno = 0xb), L4 === 0x2 && this.tempitem[0x0][A] !== 0x0) {
            Ig.bmenuno = 0x4;
            for (let L5 = 0x0; L5 < 0xc; L5++) this.tempitem[nv[0x4][A]][A] === 0x0 && nv[0x4][A] > 0x0 && nv[0x4][A]--;
          }
          L4 === 0x3 && (Ig.bmenuno = 0xc), L4 === 0x4 && (I7(Ig.chapter >= 0x4 && In.bcDefendTP ? In.bcDefendTP(this) : 0x28), Ig.chapter === 0x3 && this.idefendedthisturn++, Ig.faceaction[A] = 0x4, Ig.charaction[A] = 0xa, nG(), Ig.chapter === 0x2 && Iv.with('o_boxingcontroller', L6 => {
            L6.defend = 0x1, L6.specialcon = 0x8;
          }));
        }
      }
      if (IO() && this.onebuffer < 0x0 && Ig.charturn > 0x0 && !L1 && (this.twobuffer = 0x1, this.movenoise = 0x1, nE()), If() > 0x3 && Ik() && this.onebuffer < 0x0 && nX && !L1) {
        let L6 = 0x0;
        for (; L6 < 0x2 && Ig.monster[L6] !== 0x1;) L6++;
        this.selnoise = 0x1, this.onebuffer = 0x2;
        for (let L7 = 0x0; L7 < If() && Ig.charturn < If() && Ig.myfight === 0x0; L7++) {
          let L8 = Ig.charturn;
          if (Ig.chartarget[L8] = L6, Ig.faceaction[L8] = 0x1, Ig.charaction[L8] = 0x1, nG(), Ig.charturn === L8) break;
        }
        return;
      }
    }
    if (Ig.bmenuno === 0x2 && Ig.flag[0x22] === 0x0 && Ig.chapter !== 0x1) {
      this.battlewriter && (this.battlewriter.skipme = 0x1), nY();
      let L9 = A,
        LI = Ig.battlespell[L9] || [];
      if (IV() || Iu()) {
        let Ln = 0x1,
          LL = nv[0x2][A];
        LL < 0xb ? LI[LL + 0x1] === 0x0 && (Ln = 0x0, LL % 0x2 === 0x1 && LL > 0x0 && nv[0x2][A]--) : (nv[0x2][A]--, Ln = 0x0), Ln === 0x1 && (LL % 0x2 === 0x0 ? nv[0x2][A]++ : nv[0x2][A]--);
      }
      if (IU()) {
        let Lw = nv[0x2][A],
          LH = 0x1;
        Lw >= 0xa ? LH = 0x0 : (LI[Lw + 0x2] === 0x0 && (LH = 0x0), Lw === 0x5 && LI[0x6] !== 0x0 && LI[0x7] === 0x0 && (LH = 0x2)), LH === 0x1 && (nv[0x2][A] += 0x2), LH === 0x2 && (nv[0x2][A] = 0x6);
      }
      Ii() && nv[0x2][A] > 0x1 && (nv[0x2][A] -= 0x2), Ig.tensionselect = (Ig.battlespellcost[L9] || [])[nv[0x2][A]] || 0x0;
      let LA = this.techUnlocked(L9, nv[0x2][A]) && !(Ig.chapter >= 0x4 && In.techBlocked && In.techBlocked(this, L9, nv[0x2][A])) && S(LI[nv[0x2][A]], L9);
      if (Iz() && LI[nv[0x2][A]] !== 0x0 && this.onebuffer < 0x0 && LA && ((Ig.battlespellcost[L9] || [])[nv[0x2][A]] || 0x0) <= Ig.tension) {
        if (Ig.chapter >= 0x4 && In.techConfirm && In.techConfirm(this, L9, nv[0x2][A], 'before') || (this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1, Ig.chapter >= 0x4 && In.techConfirm && In.techConfirm(this, L9, nv[0x2][A], 'after'))) return;
        if (LI[nv[0x2][A]] !== -0x1) {
          let LW = Ig.chapter >= 0x4 && In.chapterSpellinfo && !IW(LI[nv[0x2][A]]) ? In.chapterSpellinfo(LI[nv[0x2][A]]) : I5(LI[nv[0x2][A]]);
          this.cost = LW.cost, LW.spelltarget === 0x0 && np(LW.cost, LW.spellanim), LW.spelltarget === 0x1 && (Ig.bmenuno = 0x8), LW.spelltarget === 0x2 && (Ig.bmenuno = 0x3), LW.spelltarget === 0x3 && (Ig.bmenuno = 0x63);
        } else Ig.chapter >= 0x4 && In.techActDirect && In.techActDirect(this, L9, nv[0x2][A]) || (Ig.bmenuno = 0xd);
      }
      IO() && this.onebuffer < 0x0 && (Ig.tensionselect = 0x0, this.twobuffer = 0x1, Ig.bmenuno = 0x0, this.movenoise = 0x1);
    } else {
      if (Ig.bmenuno === 0x2) {
        this.battlewriter && (this.battlewriter.skipme = 0x1), nY();
        let Lg = Ig.char[A],
          LR = Ig.spell[Lg];
        if (IV()) {
          let LG = 0x1,
            LE = nv[0x2][A];
          LE < 0xb ? LR[LE + 0x1] === 0x0 && (LG = 0x0, LE % 0x2 === 0x1 && LE > 0x0 && nv[0x2][A]--) : (nv[0x2][A]--, LG = 0x0), LG === 0x1 && (LE % 0x2 === 0x0 ? nv[0x2][A]++ : nv[0x2][A]--);
        }
        if (Iu()) {
          let Lf = nv[0x2][A];
          LR[0x1] !== 0x0 && (Lf % 0x2 === 0x0 ? nv[0x2][A]++ : nv[0x2][A]--);
        }
        if (IU()) {
          let La = nv[0x2][A],
            LN = 0x1;
          La >= 0xa ? LN = 0x0 : (LR[La + 0x2] === 0x0 && (LN = 0x0), La === 0x5 && LR[0x6] !== 0x0 && LR[0x7] === 0x0 && (LN = 0x2)), LN === 0x1 && (nv[0x2][A] += 0x2), LN === 0x2 && (nv[0x2][A] = 0x6);
        }
        if (Ii() && nv[0x2][A] > 0x1 && (nv[0x2][A] -= 0x2), Ig.tensionselect = Ig.spellcost[Lg][nv[0x2][A]], Iz() && LR[nv[0x2][A]] !== 0x0 && this.onebuffer < 0x0 && S(LR[nv[0x2][A]], A) && Ig.spellcost[Lg][nv[0x2][A]] <= Ig.tension) {
          this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1;
          let LJ = I5(LR[nv[0x2][A]]);
          this.cost = LJ.cost, LJ.spelltarget === 0x0 && np(LJ.cost, LJ.spellanim), LJ.spelltarget === 0x1 && (Ig.bmenuno = 0x8), LJ.spelltarget === 0x2 && (Ig.bmenuno = 0x3), LJ.spelltarget === 0x3 && (Ig.bmenuno = 0x63);
        }
        IO() && this.onebuffer < 0x0 && (Ig.tensionselect = 0x0, this.twobuffer = 0x1, Ig.bmenuno = 0x0, this.movenoise = 0x1);
      }
    }
    if (Ig.bmenuno === 0x4) {
      this.battlewriter && (this.battlewriter.skipme = 0x1), nY();
      let LF = Lp => this.tempitem[Lp] ? this.tempitem[Lp][A] : 0x0;
      if (LF(nv[0x4][A]) === 0x0 && nv[0x4][A] > 0x0 && nv[0x4][A]--, IV()) {
        let Lp = 0x1,
          Ly = nv[0x4][A];
        Ly < 0xb ? LF(Ly + 0x1) === 0x0 && (Lp = 0x0, Ly % 0x2 === 0x1 && Ly > 0x0 && nv[0x4][A]--) : (nv[0x4][A]--, Lp = 0x0), Lp === 0x1 && (Ly % 0x2 === 0x0 ? nv[0x4][A]++ : nv[0x4][A]--);
      }
      if (Iu()) {
        let LD = nv[0x4][A];
        LF(0x1) !== 0x0 && (LD % 0x2 === 0x0 ? nv[0x4][A]++ : nv[0x4][A]--);
      }
      if (IU()) {
        let LZ = nv[0x4][A],
          Lb = 0x1;
        LZ >= 0xa ? Lb = 0x0 : (LF(LZ + 0x2) === 0x0 && (Lb = 0x0), LZ === 0x5 && LF(0x6) !== 0x0 && LF(0x7) === 0x0 && (Lb = 0x2)), Lb === 0x1 && (nv[0x4][A] += 0x2), Lb === 0x2 && (nv[0x4][A] = 0x6), Lb === 0x0 && (nv[0x4][A] = ny(LF, LZ, 0x1));
      }
      if (Ii() && (nv[0x4][A] > 0x1 ? nv[0x4][A] -= 0x2 : nv[0x4][A] = ny(LF, nv[0x4][A], -0x1)), LF(nv[0x4][A]) === 0x0 && nv[0x4][A] > 0x0 && nv[0x4][A]--, Iz() && LF(nv[0x4][A]) !== 0x0 && this.onebuffer < 0x0) {
        this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1;
        let HM = LF(nv[0x4][A]),
          HB = IJ[HM];
        if (this.itemsel = {
          'id': HM,
          'idx': nv[0x4][A]
        }, Ig.chapter >= 0x4 && In.itemMenuPick && In.itemMenuPick(this, HM, nv[0x4][A])) return;
        let Hi = !HB || HB[0x2] === 0x0 || HB[0x2] === 0x2 ? A7(I4(HM)) : null;
        if (Hi !== null) {
          I7(Hi), nD(A);
          let Hx = A;
          for (let HU = nv[0x4][A]; HU < 0xc; HU++) this.tempitem[HU][Hx] = this.tempitem[HU + 0x1] ? this.tempitem[HU + 0x1][Hx] : 0x0;
          nG();
        } else !HB || HB[0x2] === 0x0 || HB[0x2] === 0x2 ? nZ(HM, nv[0x4][A]) : Ig.bmenuno = 0x7;
      }
      IO() && this.onebuffer < 0x0 && (this.twobuffer = 0x1, Ig.bmenuno = 0x0, this.movenoise = 0x1, Ig.chapter >= 0x4 && In.itemMenuCancel && In.itemMenuCancel(this));
    }
    if (Ig.bmenuno === 0x9) {
      let Hr = nv[0xb][A],
        Hv = this.actinfo(Hr);
      if (IV()) {
        let HC = 0x1,
          Ho = nv[0x9][A];
        Ho < 0x5 ? Hv.canact.get(Ho + 0x1) === 0x0 && (HC = 0x0, Ho % 0x2 === 0x1 && Ho > 0x0 && nv[0x9][A]--) : (nv[0x9][A]--, HC = 0x0), HC === 0x1 && (Ho % 0x2 === 0x0 ? nv[0x9][A]++ : nv[0x9][A]--);
      }
      if (Iu()) {
        let HX = nv[0x9][A];
        HX % 0x2 === 0x0 ? Hv.canact.get(HX + 0x1) !== 0x0 && nv[0x9][A]++ : nv[0x9][A]--;
      }
      if (IU()) {
        let W0 = nv[0x9][A],
          W1 = 0x1;
        (W0 >= 0x4 || Hv.canact.get(W0 + 0x2) === 0x0) && (W1 = 0x0), W1 === 0x1 && (nv[0x9][A] += 0x2);
      }
      Ii() && nv[0x9][A] > 0x1 && (nv[0x9][A] -= 0x2), Ig.tensionselect = Hv.cost.get(nv[0x9][A]);
      let He = 0x1,
        HY = Ig.chapter === 0x1 || IR(Ig.char[A]) === 0x1 ? Ig.actactor[Hr][nv[0x9][A]] : 0x0;
      (HY === 0x2 || HY === 0x4) && (this.partnerReady(0x2) || (He = 0x0)), (HY === 0x3 || HY === 0x4) && (this.partnerReady(0x3) || (He = 0x0)), HY === 0x5 && Ig.chapter !== 0x1 && (this.partnerReady(0x4) || (He = 0x0));
      let HS = true;
      if (Ig.chapter === 0x3) {
        let W2 = (Ig.actname[Hr] || [])[nv[0x9][A]],
          W3 = Iv.first('obj_pippins_enemy');
        (Ig.flag[0x414] || 0x0) < 0x96 && W3 && W2 === (Ig.actname[W3.myself] || [])[0x3] && (HS = false);
        let W4 = [0x1, 0x2, 0x3].some(W7 => Ig.chararmor1[W7] === 0x7 || Ig.chararmor2[W7] === 0x7),
          W5 = Iv.first('obj_tenna_enemy_bg'),
          W6 = Iv.first('obj_tenna_enemy');
        W5 && W6 && W5.myscore < (W4 ? 0x1e : 0x14) && W2 === (Ig.actnamesus[W6.myself] || [])[0x1] && (HS = false);
      }
      if ((Ig.chapter === 0x2 || Ig.chapter === 0x3) && He === 0x1 && HS && Iz() && (Ig.canact[Hr] || [])[nv[0x9][A]] === 0x1 && Ig.tension >= Ig.tensionselect && this.onebuffer < 0x0) {
        this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1;
        let W7 = nv[0x9][A];
        Ig.actingchoice[A] = W7, Ig.tension -= Hv.cost.get(W7), Ig.tensionselect = 0x0, this.actselect(Hr, W7), nv[0x9][A] = 0x0, nG();
      } else {
        if (!(Ig.chapter === 0x2 || Ig.chapter === 0x3) && He === 0x1 && Iz() && (Ig.canact[Hr] || [])[nv[0x9][A]] === 0x1 && Ig.tension >= Ig.tensionselect && this.onebuffer < 0x0) {
          this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1, Ig.tension -= Hv.cost.get(nv[0x9][A]), Ig.tensionselect = 0x0;
          let W8 = Ig.monsterinstance[Hr];
          W8 && !W8.destroyed && (W8.acting = nv[0x9][A] + 0x1), Ig.chapter >= 0x2 && (Ig.actingchoice[A] = nv[0x9][A], Ig.actingsimul[IE()] = Hv.simul.get(nv[0x9][A]), Ig.actingsingle[IE()] = 0x1, Ig.actingtarget[A] = Hr), Ig.acting[IE()] = 0x1, HY === 0x2 && IG(0x2) >= 0x0 && (Ig.acting[IG(0x2)] = 0x1), HY === 0x3 && IG(0x3) >= 0x0 && (Ig.acting[IG(0x3)] = 0x1), HY === 0x4 && (Ig.char[0x2] && (Ig.acting[0x2] = 0x1), Ig.char[0x1] && (Ig.acting[0x1] = 0x1));
          for (let W9 = 0x0; W9 < If(); W9++) Ig.acting[W9] === 0x1 && (Ig.faceaction[W9] = 0x6, Ig.charaction[W9] = 0x9);
          nG();
        }
      }
      IO() && this.onebuffer < 0x0 && ((Ig.chapter === 0x2 || Ig.chapter === 0x3) && (nv[0x9][A] = 0x0), Ig.tensionselect = 0x0, this.twobuffer = 0x1, Ig.bmenuno = 0xb, this.movenoise = 0x1);
    }
    let nS = Ig.chapter === 0x1 ? [0x7, 0x1, 0x8, 0x3, 0xb, 0xc] : [0x7, 0x1, 0x8, 0x3, 0xb, 0xc, 0xd];
    if (nS.includes(Ig.bmenuno) && (this.battlewriter && (this.battlewriter.skipme = 0x1), nY(), IO() && this.onebuffer < 0x0 && (this.twobuffer = 0x1, [0x1, 0xb, 0xc].includes(Ig.bmenuno) ? Ig.bmenuno = 0x0 : Ig.bmenuno === 0x7 ? Ig.bmenuno = 0x4 : (Ig.bmenuno === 0x8 || Ig.bmenuno === 0x3 || Ig.bmenuno === 0xd) && (Ig.bmenuno = 0x2), this.movenoise = 0x1), nS.includes(Ig.bmenuno))) {
      let WI = Ig.bmenuno,
        WA = [0x0, 0x0, 0x0];
      if (WI === 0x7 || WI === 0x8) {
        for (let WH = 0x0; WH < If(); WH++) Ig.char[WH] > 0x0 && (WA[WH] = 0x1);
      } else {
        for (let WW = 0x0; WW < 0x3; WW++) WA[WW] = Ig.monster[WW];
      }
      let Wn = (WI === 0x7 || WI === 0x8) && If() > 0x3;
      if (Wn) {
        let Wg = If(),
          WR = Wf => Wf >= 0x0 && Wf < Wg && Ig.char[Wf] > 0x0,
          WG = nv[WI][A];
        if (!WR(WG)) {
          for (WG = 0x0; WG < Wg - 0x1 && !WR(WG);) WG++;
        }
        let WE = Wf => {
          let Wa = WG;
          for (let WN = 0x0; WN < Wg; WN++) if (Wa = (Wa + Wf + Wg) % Wg, WR(Wa)) return Wa;
          return WG;
        };
        IU() && (WG = WE(0x1), this.movenoise = 0x1), Ii() && (WG = WE(-0x1), this.movenoise = 0x1);
        let Wf = Math.floor(WG / 0x6) * 0x6,
          Wa = WG - Wf < 0x3 ? WG + 0x3 : WG - 0x3;
        (IV() || Iu()) && WR(Wa) && (WG = Wa, this.movenoise = 0x1);
        nv[WI][A] = WG;
      }
      Wn || (nv[WI][A] === 0x2 && WA[0x2] === 0x0 && (nv[WI][A] = 0x0), nv[WI][A] === 0x0 && WA[0x0] === 0x0 && (nv[WI][A] = 0x1), nv[WI][A] === 0x1 && WA[0x1] === 0x0 && (nv[WI][A] = 0x0), nv[WI][A] === 0x0 && WA[0x0] === 0x0 && (nv[WI][A] = 0x2));
      let WL = IU() ? 0x1 : Ii() ? -0x1 : 0x0;
      if (WL !== 0x0 && WI !== 0x7 && WI !== 0x8 && Ig.monster.__customBoard && In.customScroll && In.customScroll(WI, A, WL)) this.movenoise = 0x1;else {
        if (!Wn) {
          if (IU()) {
            let WN = nv[WI][A],
              WJ = WN === 0x0 ? [0x1, 0x2] : WN === 0x1 ? [0x2, 0x0] : [0x0, 0x1];
            for (let WD of WJ) if (WA[WD] === 0x1) {
              this.movenoise = 0x1, nv[WI][A] = WD;
              break;
            }
          }
          if (Ii()) {
            let WZ = nv[WI][A],
              Wb = WZ === 0x0 ? [0x2, 0x1] : WZ === 0x1 ? [0x0, 0x2] : [0x1, 0x0];
            for (let Wm of Wb) if (WA[Wm] === 0x1) {
              this.movenoise = 0x1, nv[WI][A] = Wm;
              break;
            }
          }
        }
      }
      let Ww = Ig.chapter >= 0x4 && this.skipmonsterselection ? (this.skipmonsterselection = 0x0, true) : false;
      if (Iz() && this.onebuffer < 0x0 || Ww) {
        if (WI !== 0x7 && WI !== 0x8 && Ig.monster.__customBoard && In.customTargetPicked && In.customTargetPicked(WI, A, nv[WI][A]), this.onebuffer = 0x1, this.selnoise = 0x1, WI === 0x1 && (Ig.chartarget[A] = nv[WI][A], Ig.faceaction[A] = 0x1, Ig.charaction[A] = 0x1, nG()), WI === 0x7) {
          Ig.chartarget[A] = nv[WI][A];
          let WK = this.itemsel && A8(I4(this.itemsel.id));
          WK && (I7(WK), nD(A));
          Ig.chapter >= 0x4 && In.itemTargetSkip && In.itemTargetSkip(this) ? nG() : (nZ(this.itemsel.id, this.itemsel.idx), Ig.chapter === 0x2 && Iv.with('o_boxingcontroller', WP => {
            WP.specialcon = 0x7;
          }));
        }
        if ((WI === 0x8 || WI === 0x3) && (Ig.chartarget[A] = nv[WI][A], np(this.cost)), WI === 0xb) {
          Ig.bmenuno = 0x9;
          let WP = nv[0x9][A],
            Wq = nv[0xb][A],
            Wc = this.actinfo(Wq);
          for (let Wz = 0x0; Wz < 0x6; Wz++) Wc.canact.get(WP) === 0x0 && WP > 0x0 && (nv[0x9][A]--, WP--);
          this.onebuffer = 0x1;
        }
        if (WI === 0xc && (Ig.faceaction[A] = 0xa, Ig.chartarget[A] = nv[WI][A], Ig.charaction[A] = 0x2, Ig.charspecial[A] = 0x64, nG()), WI === 0xd) {
          this.onebuffer = 0x2, Ig.bmenuno = 0x0, this.selnoise = 0x1;
          let Wl = nv[0x2][A],
            Ws = nv[0xd][A];
          if (Ig.actingchoice[A] = Wl, Ig.tension -= (Ig.battlespellcost[A] || [])[Wl] || 0x0, Ig.tensionselect = 0x0, this.actselect(Ws, Wl), Ig.chapter >= 0x4 && In.techActPicked && In.techActPicked(this)) return;
          nG();
        }
      }
    }
  }
  ["draw"](nv) {
    if (nj(), n1()) return;
    let ne = 0x0,
      nY = 0x0;
    Ig.chapter === 0x2 && Iv.exists('obj_gigaqueen_enemy') && (this.gigaqueencon === 0x1 && (this.gigaqueentimer++, this.gigaqueeny = y(0x0, 0x64, this.gigaqueentimer / 0xa), this.gigaqueentimer === 0xa && (this.gigaqueencon = 0x0)), this.gigaqueencon === 0x2 && (this.gigaqueentimer++, this.gigaqueeny = y(0x64, 0x0, this.gigaqueentimer / 0xa), this.gigaqueentimer === 0xa && (this.gigaqueencon = 0x0)), this.gigaqueencon === 0x3 && (this.gigaqueeny = 0xc8), this.gigaqueencon === 0x4 && (this.gigaqueentimer++, this.gigaqueeny = y(0xc8, 0x0, this.gigaqueentimer / 0xa), this.gigaqueentimer === 0xa && (this.gigaqueencon = 0x0)), this.gigaqueencon === 0x5 && (this.gigaqueentimer++, this.gigaqueeny = y(0x0, 0xc8, this.gigaqueentimer / 0xa), this.gigaqueentimer === 0xa && (this.gigaqueencon = 0x0)), nY = this.gigaqueeny);
    let nS = -this.bp + this.bpy + nY;
    this.intro === 0x1 && (this.bp < this.bpy - 0x1 ? this.bpy - this.bp < 0x28 ? this.bp += Ir((this.bpy - this.bp) / 2.5) : this.bp += 0x1e : this.bp = this.bpy, this.bp === this.bpy && (this.intro = 0x0)), this.intro === 0x2 && (this.bp > 0x0 ? Ir((this.bpy - this.bp) / 0x5) > 0xf ? this.bp -= Ir((this.bpy - this.bp) / 2.5) : this.bp -= 0x1e : this.bp = 0x0), Ig.chapter >= 0x4 && In.bcBp && In.bcBp(this);
    let nC = this.bp;
    Ig.chapter >= 0x4 && In.bcDrawTop && In.bcDrawTop(this, nv), this.rouxlsButtonStep();
    let no = Ig.chapter === 0x1;
    nv.draw_set_color(IK.black), nv.draw_rectangle(ne - 0xa, 0x1e1 + nY, ne + 0x2bc, no ? 0x1e0 - nC + nY : 0x1e0 - nC + nY - 0x4, false), nv.draw_set_color(this.bcolor), no ? nv.draw_rectangle(ne - 0xa, 0x1e0 - nC - 0x2 + nY, ne + 0x2bc, 0x1e0 - nC + nY, false) : nv.draw_rectangle(ne - 0xa, 0x1e0 - nC - 0x3 + nY, ne + 0x2bc, 0x1e0 - nC - 0x2 + nY, false), nv.draw_rectangle(ne - 0xa, 0x1e0 - nC + 0x22 + nY, ne + 0x2bc, 0x1e0 - nC + 0x24 + nY, false), this.charbox(nv, nS, nY), nv.draw_set_font('fnt_mainbig');
    let nX = Ig.charturn,
      L0 = Ig.bmenucoord;
    if (([0x1, 0x3, 0xb, 0xc].includes(Ig.bmenuno) || Ig.bmenuno === 0xd && Ig.chapter !== 0x1) && Ig.myfight === 0x0) {
      nv.draw_sprite('spr_heart', 0x0, ne + 0x37, nY + 0x181 + L0[Ig.bmenuno][nX] * 0x1e);
      let L1 = 0x0;
      for (let L3 = 0x0; L3 < 0x3; L3++) {
        let L4 = nv.string_width(Ig.monstername[L3]);
        L4 > L1 && (L1 = L4);
      }
      let L2 = Ig.monsterinstance[L0[Ig.bmenuno][nX]];
      L2 && !L2.destroyed && (L2.flash === 0x0 && (L2.fsiner = 0x0), L2.flash = 0x1, L2.becomeflash = 0x1), Ig.monster.__customBoard && In.customHidden && In.customHidden() > 0x0 && (nv.draw_sprite_ext('spr_morearrow', 0x0, ne + 0x28, nY + 0x17e - Ip(this.s_siner / 0xa) * 0x2, 0x1, -0x1, 0x0, IK.white, 0x1), nv.draw_sprite('spr_morearrow', 0x0, ne + 0x28, nY + 0x1be + Ip(this.s_siner / 0xa) * 0x2));
      for (let L5 = 0x0; L5 < 0x3; L5++) if (Ig.monster[L5] === 0x1) {
        let L6 = IK.white,
          L7 = IK.white,
          L8 = Iq(IK.aqua, IK.blue, 0.3);
        Ig.chapter === 0x3 && Ig.charturn === 0x2 && (L8 = Iq(L8, IK.white, 0.5 + Ip((this.t_siner || 0x0) / 0x4) * 0.5));
        let L9 = Ig.monsterstatus[L5] === 0x1,
          LI = Ig.mercymod[L5] >= Ig.mercymax[L5],
          LA = nv.string_width(Ig.monstername[L5]);
        L9 && (Ig.encounterno !== 0x1f && (L6 = L8, L7 = L8), nv.draw_sprite('spr_tiredmark', 0x0, ne + 0x50 + LA + 0x28, nY + 0x181 + L5 * 0x1e));
        let Ln = Ig.chapter !== 0x1 && this.hidemercy === 0x1,
          LL = Ig.chapter >= 0x4 && this.hidestar === 0x1;
        LI && LL || LI && (L6 = IK.yellow, L9 || (L7 = IK.yellow), Ln || nv.draw_sprite('spr_sparestar', 0x0, ne + 0x50 + LA + 0x14, nY + 0x181 + L5 * 0x1e)), nv.draw_text_colour(ne + 0x50, nY + 0x177 + L5 * 0x1e, Ig.monstername[L5], L6, L7, L7, L6, 0x1);
        let Lw = Ig.bmenuno === 0xd && Ig.chapter !== 0x1;
        if (Lw) {
          let LH = IR(Ig.char[nX]),
            LW = L0[0x2][nX],
            Lg = LH === 0x2 ? Ig.actnamesus : LH === 0x3 ? Ig.actnameral : LH === 0x4 ? Ig.actnamenoe : null,
            LR = 'Standard';
          Lg && Lg[L5] && Lg[L5][LW] !== void 0x0 && (LR = Lg[L5][LW]), (LR === "S-Action" || LR === "R-Action" || LR === "N-Action") && (LR = 'Standard'), nv.draw_set_color((this.hpcolorsoft || [])[Q(Ig.char[nX]) === 'noelle' ? 0x3 : LH - 0x1] || IK.white);
          let LG = 0x202 - (0x50 + L1 + 0x3c),
            LE = nv.string_width(String(LR));
          nv.draw_text_transformed(ne + 0x50 + L1 + 0x3c, nY + 0x177 + L5 * 0x1e, String(LR), LE >= LG ? LG / LE : 0x1, 0x1, 0x0);
        }
        if (!Lw) {
          nv.draw_text(ne + 0x50 + LA + 0x3c, nY + 0x177 + L5 * 0x1e, Ig.monstercomment[L5], IK.gray);
          let Lf = Ig.chapter === 0x1 ? 0x1fe : 0x1a4,
            La = Ig.chapter === 0x1 ? 0x24e : 0x1f4,
            LN = Math.max(0x0, Ig.monsterhp[L5] / Ig.monstermaxhp[L5]);
          if (nv.draw_set_color(IK.maroon), nv.draw_rectangle(ne + Lf, nY + 0x17c + L5 * 0x1e, ne + La, nY + 0x17c + L5 * 0x1e + 0xf, false), nv.draw_set_color(IK.lime), nv.draw_rectangle(ne + Lf, nY + 0x17c + L5 * 0x1e, ne + Lf + LN * 0x50, nY + 0x17c + L5 * 0x1e + 0xf, false), Ig.chapter !== 0x1) {
            nv.draw_set_color(IK.white), nv.draw_text_transformed(ne + 0x1a8, nY + 0x16c, 'HP', 0x1, 0.5, 0x0);
            let LJ = Ig.chapter === 0x3 && Iv.exists('obj_knight_enemy') ? "???" : Math.ceil(LN * 0x64) + '%';
            nv.draw_text_transformed(ne + 0x1a8, nY + 0x17c + L5 * 0x1e, LJ, 0x1, 0.5, 0x0);
          }
        }
        if (Ig.chapter !== 0x1 && !Ln) {
          let LF = Math.ceil(Ig.mercymod[L5] / Ig.mercymax[L5] * 0x64);
          LF > 0x64 && (LF = 0x64);
          let Lp = (this.cantspare || [])[L5] === 0x1,
            Ly = Ig.chapter >= 0x4 && (this.questionmercy || [])[L5] === 0x1;
          Ig.chapter >= 0x4 && (LF = Math.round(Ig.mercymod[L5] / Ig.mercymax[L5] * 0x64), LF > 0x64 && (LF = 0x64)), nv.draw_set_color(Iq(IK.orange, IK.red, 0.5)), nv.draw_rectangle(ne + 0x208, nY + 0x17c + L5 * 0x1e, ne + 0x258, nY + 0x17c + L5 * 0x1e + 0xf, false), nv.draw_set_color(IK.yellow), Ig.mercymod[L5] > 0x0 && !Lp && !Ly && nv.draw_rectangle(ne + 0x208, nY + 0x17c + L5 * 0x1e, ne + 0x208 + LF * 0.8, nY + 0x17c + L5 * 0x1e + 0xf, false), nv.draw_set_color(IK.white), nv.draw_text_transformed(ne + 0x20c, nY + 0x16c, 'MERCY', 0x1, 0.5, 0x0), nv.draw_set_color(IK.maroon), !Lp && !Ly ? nv.draw_text_transformed(ne + 0x20c, nY + 0x17c + L5 * 0x1e, LF + '%', 0x1, 0.5, 0x0) : Ly && !Lp ? (nv.draw_set_color(IK.white), nv.draw_text_transformed(ne + 0x20c, nY + 0x16c + 0xf, "???", 0x1, 0.5, 0x0)) : (nv.draw_line_width_color(ne + 0x208 - 0x1, nY + 0x17c + L5 * 0x1e, ne + 0x258, nY + 0x17c + L5 * 0x1e + 0xf, 0x2, IK.maroon, IK.maroon), nv.draw_line_width_color(ne + 0x208 - 0x1, nY + 0x17c + L5 * 0x1e + 0xf, ne + 0x258, nY + 0x17c + L5 * 0x1e, 0x2, IK.maroon, IK.maroon));
        }
      }
    }
    if (Ig.bmenuno === 0x2 && Ig.myfight === 0x0 && Ig.flag[0x22] === 0x0 && Ig.chapter !== 0x1) {
      let LD = nX,
        LZ = L0[0x2][nX],
        Lb = 0x0;
      LZ > 0x5 && (Lb = 0x1, LZ -= 0x6);
      let HM = 0xa,
        HB = 0x181;
      LZ % 0x2 === 0x1 && (HM = 0xe6), LZ > 0x1 && LZ < 0x4 && (HB = 0x19f), LZ > 0x3 && (HB = 0x1bd), nv.draw_sprite('spr_heart', 0x0, ne + HM, nY + HB);
      let Hi = Ig.battlespellname[LD] || [],
        Hx = Ig.battlespellcost[LD] || [],
        HU = Ig.battlespellspecial[LD] || [],
        Hr = Ig.battlespell[LD] || [];
      for (let Hv = 0x0; Hv < 0x3; Hv++) for (let He = 0x0; He < 0x2; He++) {
        let HY = Lb * 0x6 + Hv * 0x2 + He,
          HS = IK.white;
        (HU[HY] || 0x0) >= 0x1 && (HS = (this.hpcolorsoft || [])[IR(Ig.char[LD]) - 0x1] || (V(Ig.char[LD]) ? Iq(V(Ig.char[LD]), IK.white, 0.5) : IK.white));
        let HC = !this.techUnlocked(LD, HY),
          Ho = Ig.chapter >= 0x4 && In.techMenuColor ? In.techMenuColor(this, LD, HY, HS) : null;
        if (Ho != null && Ho !== false) HS = Ho;else {
          if (Ig.tension < (Hx[HY] || 0x0) || HC || !S(Hr[HY], LD)) HS = IK.gray;else {
            if (Hr[HY] === 0x3 || Hr[HY] === 0x8) {
              let HX = 0x0;
              for (let W0 = 0x0; W0 < 0x3; W0++) Ig.monster[W0] === 0x1 && Ig.monsterstatus[W0] === 0x1 && Ig.encounterno !== 0x1f && (HX = 0x1);
              if (HX) {
                let W1 = Iq(IK.aqua, IK.blue, 0.3);
                HS = Iq(W1, IK.white, 0.5 + Ip((this.t_siner || 0x0) / 0x4) * 0.5);
              }
            }
          }
        }
        nv.draw_text(ne + 0x1e + He * 0xe6, nY + 0x177 + Hv * 0x1e, Hi[HY] === void 0x0 ? '\x20' : Hi[HY], HS);
      }
      if (!(Ig.chapter >= 0x4 && In.techMenuInfoHide && In.techMenuInfoHide(this, LD, Lb * 0x6 + LZ))) {
        let W2 = String((Ig.battlespelldesc[LD] || [])[Lb * 0x6 + LZ] || '\x20').split('#'),
          W3 = IW((Ig.battlespell[LD] || [])[Lb * 0x6 + LZ]);
        for (let W5 = 0x0; W5 < W2.length; W5++) {
          let W6 = W3 ? nv.string_width(W2[W5]) : 0x0;
          W6 > 0x88 ? (nv.draw_set_color(IK.gray), nv.draw_text_transformed(ne + 0x1f4, nY + 0x177 + W5 * 0x1c, W2[W5], 0x88 / W6, 0x1, 0x0)) : nv.draw_text(ne + 0x1f4, nY + 0x177 + W5 * 0x1c, W2[W5], IK.gray);
        }
        let W4 = IS((Hx[Lb * 0x6 + LZ] || 0x0) / Ig.maxtension * 0x64);
        W4 > 0x0 && nv.draw_text(ne + 0x1f4, nY + 0x1b8, W4 + "% TP", IK.orange);
      }
    } else {
      if (Ig.bmenuno === 0x2 && Ig.myfight === 0x0) {
        let W7 = Ig.char[nX],
          W8 = L0[0x2][nX],
          W9 = 0x0;
        W8 > 0x5 && (W9 = 0x1, W8 -= 0x6);
        let WI = 0xa,
          WA = 0x181;
        W8 % 0x2 === 0x1 && (WI = 0xe6), W8 > 0x1 && W8 < 0x4 && (WA = 0x19f), W8 > 0x3 && (WA = 0x1bd), nv.draw_sprite('spr_heart', 0x0, ne + WI, nY + WA);
        for (let WH = 0x0; WH < 0x3; WH++) {
          let WW = W9 * 0x6 + WH * 0x2,
            Wg = IK.white;
          if (Ig.tension < Ig.spellcost[W7][WW] || !S(Ig.spell[W7][WW], nX)) Wg = IK.gray;else {
            if (Ig.spell[W7][WW] === 0x3) {
              let WR = 0x0;
              for (let WG = 0x0; WG < 0x3; WG++) Ig.monster[WG] === 0x1 && Ig.monsterstatus[WG] === 0x1 && Ig.encounterno !== 0x1f && (WR = 0x1);
              WR && (Wg = Iq(IK.aqua, IK.blue, 0.3));
            }
          }
          nv.draw_text(ne + 0x1e, nY + 0x177 + WH * 0x1e, Ig.spellnameb[W7][WW], Wg), nv.draw_text(ne + 0x104, nY + 0x177 + WH * 0x1e, Ig.spellnameb[W7][WW + 0x1], Ig.tension < Ig.spellcost[W7][WW + 0x1] || !S(Ig.spell[W7][WW + 0x1], nX) ? IK.gray : IK.white);
        }
        let Wn = (Ig.spelldescb[W7][W9 * 0x6 + W8] || '').split('#'),
          WL = IW(Ig.spell[W7][W9 * 0x6 + W8]);
        for (let WE = 0x0; WE < Wn.length; WE++) {
          let Wf = WL ? nv.string_width(Wn[WE]) : 0x0;
          Wf > 0x88 ? (nv.draw_set_color(IK.gray), nv.draw_text_transformed(ne + 0x1f4, nY + 0x177 + WE * 0x1c, Wn[WE], 0x88 / Wf, 0x1, 0x0)) : nv.draw_text(ne + 0x1f4, nY + 0x177 + WE * 0x1c, Wn[WE], IK.gray);
        }
        let Ww = Ir(Ig.spellcost[W7][W9 * 0x6 + W8] / Ig.maxtension * 0x64);
        nv.draw_text(ne + 0x1f4, nY + 0x1b8, Ww + "% TP", IK.orange);
      }
    }
    if (Ig.bmenuno === 0x4 && Ig.myfight === 0x0) {
      let Wa = L0[0x4][nX],
        WN = 0x0;
      Wa > 0x5 && (WN = 0x1, Wa -= 0x6);
      let WJ = 0xa,
        WD = 0x181;
      Wa % 0x2 === 0x1 && (WJ = 0xe6), Wa > 0x1 && Wa < 0x4 && (WD = 0x19f), Wa > 0x3 && (WD = 0x1bd), nv.draw_sprite('spr_heart', 0x0, ne + WJ, nY + WD);
      let WZ = WK => {
        let WP = this.tempitem[WK] ? this.tempitem[WK][nX] : 0x0;
        return WP && IJ[WP] ? IJ[WP][0x1] : '\x20';
      };
      for (let WK = 0x0; WK < 0x3; WK++) nv.draw_text(ne + 0x1e, nY + 0x177 + WK * 0x1e, WZ(WN * 0x6 + WK * 0x2), IK.white), nv.draw_text(ne + 0x104, nY + 0x177 + WK * 0x1e, WZ(WN * 0x6 + WK * 0x2 + 0x1), IK.white);
      WN === 0x0 && Ig.item[0x6] !== 0x0 && nv.draw_sprite('spr_morearrow', 0x0, ne + 0x1d6, nY + 0x1bd + Ip(this.s_siner / 0xa) * 0x2), WN === 0x1 && nv.draw_sprite_ext('spr_morearrow', 0x0, ne + 0x1d6, nY + 0x18b - Ip(this.s_siner / 0xa) * 0x2, 0x1, -0x1, 0x0, IK.white, 0x1);
      let Wb = this.tempitem[WN * 0x6 + Wa] ? this.tempitem[WN * 0x6 + Wa][nX] : 0x0,
        Wm = Wb ? IH.items[Wb - 0xc8] : null;
      nv.draw_text(ne + 0x1f4, nY + 0x177, Wm ? Wm.desc.replace(/#/g, '\x0a') : Wb && IJ[Wb] ? IJ[Wb][0x3] : '\x20', IK.gray);
    }
    if (Ig.bmenuno === 0x9 && Ig.myfight === 0x0) {
      let WP = L0[0x9][nX],
        Wq = L0[0xb][nX],
        Wc = 0xa,
        Wz = 0x181;
      WP % 0x2 === 0x1 && (Wc = 0xf0), WP > 0x1 && WP < 0x4 && (Wz = 0x19f), WP > 0x3 && (Wz = 0x1bd), nv.draw_sprite('spr_heart', 0x0, ne + Wc, nY + Wz);
      let Wl = this.actinfo(Wq),
        Ws = Ig.chapter === 0x1;
      for (let Wd = 0x0; Wd < 0x6; Wd++) {
        let Wj = 0x0,
          WT = Ws || IR(Ig.char[nX]) === 0x1 ? Ig.actactor[Wq][Wd] : 0x0,
          Wu = 0x0,
          WQ = Wd % 0x2 === 0x1 ? 0xe6 : 0x0,
          Wh = Wd >= 0x4 ? 0x3c : Wd >= 0x2 ? 0x1e : 0x0,
          WV = Ws ? 0x24 : 0x1e,
          WM = IK.white,
          WB = IK.white,
          Wi = IK.white;
        (WT === 0x2 || WT === 0x4) && (this.partnerReady(0x2) || (WM = IK.gray, Wj = 0x1), Wu = WV), (WT === 0x3 || WT === 0x4) && (this.partnerReady(0x3) || (WB = IK.gray, Wj = 0x1), Wu = WV), WT === 0x5 && !Ws && (this.partnerReady(0x4) || (Wi = IK.gray, Wj = 0x1), Wu = WV), Ig.tension < Wl.cost.get(Wd) && (Wj = 0x1), WT === 0x4 && (Wu = Ws ? Ir(Wu * 1.8) : Wu * 0x2), WT === 0x2 && nv.draw_sprite_ext('spr_headsusie', 0x0, ne + 0x1e + WQ, nY + 0x177 + Wh, 0x1, 0x1, 0x0, WM, 0x1), WT === 0x3 && nv.draw_sprite_ext('spr_headralsei', 0x0, ne + 0x1e + WQ, nY + 0x177 + Wh, 0x1, 0x1, 0x0, WM, 0x1), WT === 0x4 && (nv.draw_sprite_ext('spr_headsusie', 0x0, ne + 0x1e + WQ, nY + 0x177 + Wh, 0x1, 0x1, 0x0, WM, 0x1), nv.draw_sprite_ext('spr_headralsei', 0x0, ne + 0x3c + WQ, nY + 0x177 + Wh, 0x1, 0x1, 0x0, WM, 0x1)), WT === 0x5 && !Ws && nv.draw_sprite_ext('spr_headnoelle', 0x0, ne + 0x1e + WQ, nY + 0x177 + Wh, 0x1, 0x1, 0x0, Wi, 0x1), Ig.chapter === 0x2 && Iv.with('obj_spamton_neo_enemy', Wr => {
          let Wv = Wr.savemeactcon || 0x0;
          if (Wv <= 0x0) return;
          let We = Wv <= 0x2 ? 'spr_headralsei' : Wv <= 0x4 ? 'spr_headsusie' : 'spr_headnoelle';
          nv.draw_sprite_ext(We, 0x0, ne + 0x1e, nY + 0x17c, 0x1, 0x1, 0x0, Wi, 0x1);
        });
        let Wx = String(Wl.name.get(Wd)),
          WU = Wj ? IK.gray : IK.white;
        if (Ig.chapter >= 0x4 && In.actNameColor && (WU = In.actNameColor(Wd, Wj, WU)), Ws) nv.draw_text(ne + 0x1e + Wu + WQ, nY + 0x177 + Wh, Wx, WU);else {
          let Wr = Math.max(0x1, nv.string_width(Wx)),
            Wv = Math.min(0x1, Math.max(0.5, (0xce - Wu) / Wr));
          nv.draw_set_color(WU), nv.draw_text_transformed(ne + 0x1e + Wu + WQ, nY + 0x177 + Wh, Wx, Wv, 0x1, 0x0);
        }
      }
      let WO = Ig.chapter >= 0x4 && In.actInfoHide ? In.actInfoHide(this, WP) || {} : {};
      if (!WO.desc) {
        let We = String(Wl.desc.get(WP) || '\x20').split('#');
        for (let WY = 0x0; WY < We.length; WY++) nv.draw_text(ne + 0x1f4, nY + 0x177 + WY * 0x1c, We[WY], IK.gray);
      }
      if (Ig.tensionselect > 0x0 && !WO.tp) {
        let WS = Ir(Wl.cost.get(WP) / Ig.maxtension * 0x64);
        nv.draw_text(ne + 0x1f4, nY + 0x1b8, WS + "% TP", IK.orange);
      }
      let Wk = Ig.monsterinstance[Wq];
      Wk && !Wk.destroyed && (Wk.flash === 0x0 && (Wk.fsiner = 0x0), Wk.flash = 0x1, Wk.becomeflash = 0x1);
    }
    if ((Ig.bmenuno === 0x7 || Ig.bmenuno === 0x8) && Ig.myfight === 0x0 && If() > 0x3) {
      let WC = Math.floor(L0[Ig.bmenuno][nX] / 0x6) * 0x6,
        Wt = Math.min(If(), WC + 0x6),
        Wo = g2 => [ne + 0x50 + (g2 - WC < 0x3 ? 0x0 : 0x118), nY + 0x177 + (g2 - WC) % 0x3 * 0x1e],
        [WX, g0] = Wo(L0[Ig.bmenuno][nX]);
      nv.draw_sprite('spr_heart', 0x0, WX - 0x19, g0 + 0xa);
      let g1 = Ig.charinstance[L0[Ig.bmenuno][nX]];
      g1 && (g1.flash === 0x0 && (g1.fsiner = 0x0), g1.flash = 0x1, g1.becomeflash = 0x1), If() > 0x6 && (nv.draw_set_font('fnt_main'), nv.draw_set_halign('right'), nv.draw_text(ne + 0x278, nY + 0x1c8, WC + 0x1 + '-' + Wt + '/' + If(), IK.gray), nv.draw_set_halign('left'), nv.draw_set_font('fnt_mainbig'));
      for (let g2 = WC; g2 < Wt; g2++) if (Ig.char[g2] !== 0x0) {
        let [g3, g4] = Wo(g2),
          g5 = Ig.char[g2];
        nv.draw_text(g3, g4, Ig.charname[g5], IK.white), nv.draw_set_color(IK.maroon), nv.draw_rectangle(g3 + 0x96, g4 + 0x5, g3 + 0xe6, g4 + 0x14, false), nv.draw_set_color(IK.lime), nv.draw_rectangle(g3 + 0x96, g4 + 0x5, g3 + 0x96 + Math.max(0x0, Ig.hp[g5] / Ig.maxhp[g5]) * 0x50, g4 + 0x14, false);
      }
    } else {
      if ((Ig.bmenuno === 0x7 || Ig.bmenuno === 0x8) && Ig.myfight === 0x0) {
        nv.draw_sprite('spr_heart', 0x0, ne + 0x37, nY + 0x181 + L0[Ig.bmenuno][nX] * 0x1e);
        let g6 = Ig.charinstance[L0[Ig.bmenuno][nX]];
        g6 && (g6.flash === 0x0 && (g6.fsiner = 0x0), g6.flash = 0x1, g6.becomeflash = 0x1);
        for (let g7 = 0x0; g7 < If(); g7++) Ig.char[g7] !== 0x0 && (nv.draw_text(ne + 0x50, nY + 0x177 + g7 * 0x1e, Ig.charname[Ig.char[g7]], IK.white), nv.draw_set_color(IK.maroon), nv.draw_rectangle(ne + 0x190, nY + 0x17c + g7 * 0x1e, ne + 0x1f4, nY + 0x17c + g7 * 0x1e + 0xf, false), nv.draw_set_color(IK.lime), nv.draw_rectangle(ne + 0x190, nY + 0x17c + g7 * 0x1e, ne + 0x190 + Math.max(0x0, Ig.hp[Ig.char[g7]] / Ig.maxhp[Ig.char[g7]]) * 0x64, nY + 0x17c + g7 * 0x1e + 0xf, false));
      }
    }
    Ig.chapter >= 0x4 && In.bcDrawEnd && In.bcDrawEnd(this, nv);
  }
  ["charbox"](nv, ne, nY) {
    let nS = v(this, If());
    if (nS) {
      this.charboxCompact(nv, ne, nY || 0x0, nS);
      return;
    }
    let nC = 0x0,
      no = nY || 0x0,
      nX = this.bp;
    for (let L0 = 0x0; L0 < If(); L0++) {
      if (this.havechar[L0] !== 0x1) continue;
      let L1 = Ig.char[L0],
        L2 = IR(L1),
        L3 = V(L1) || (Q(L1) === 'noelle' ? IK.yellow : this.hpcolor[L2 - 0x1]),
        L4 = Ig.charturn,
        L5 = 0x0,
        L6 = L0,
        L7 = this.chartotal,
        L8 = 0xd4,
        L9 = Ig.chapter === 0x1;
      L7 === 0x3 ? L5 = (L9 ? [0x0, 0xd4, 0x1a8] : [0x0, 0xd5, 0x1aa])[L6] : L7 === 0x2 ? L5 = (L9 ? [0x6a, 0x146] : [0x6c, 0x142])[L6] : L5 = L9 ? 0xd4 : 0xd5;
      let LI = !!this.rouxlsgridenabled;
      if (L4 === L6 ? LI ? (this.mmy[L0] > -0xaa && (this.mmy[L0] -= 0x2), this.mmy[L0] > -0xa0 && (this.mmy[L0] -= 0x4), this.mmy[L0] > -0x96 && (this.mmy[L0] -= 0x6), this.mmy[L0] > -0x8c && (this.mmy[L0] -= 0xc), this.mmy[L0] > -0x20 && (this.mmy[L0] -= 0x20)) : (this.mmy[L0] > -0x20 && (this.mmy[L0] -= 0x2), this.mmy[L0] > -0x18 && (this.mmy[L0] -= 0x4), this.mmy[L0] > -0x10 && (this.mmy[L0] -= 0x6), this.mmy[L0] > -0x8 && (this.mmy[L0] -= 0x8), this.mmy[L0] < -0x20 && (this.mmy[L0] = -0x40)) : LI ? (this.mmy[L0] < -0xe && (this.mmy[L0] += 0x20), this.mmy[L0] > -0xe && (this.mmy[L0] = 0x0)) : this.mmy[L0] < -0xe ? this.mmy[L0] += 0xf : this.mmy[L0] = 0x0, LI && this.mmy[L0] !== 0x0 && (nv.draw_set_color(IK.black), nv.draw_rectangle(nC + L5 + 0x2, 0x1e0 - nX - 0x1 + no + this.mmy[L0], nC + L5 + 0xd2, 0x1e0 - nX + no + 0x21, false)), L4 === L6 && Ig.myfight === 0x0) {
        if (!LI) this.selectionmatrix(nv, nC + L5, 0x1e0 - nX + no, L3);else {
          let La = this.mmy[L0],
            LN = nC + L5,
            LJ = 0x1e0 - nX + no;
          nv.draw_rectangle(LN, 0x1e0 - nX - 0x3 + no + La, LN + 0xd4, 0x1e0 - nX, false), nv.draw_set_color(IK.black), nv.draw_rectangle(LN + 0x2, 0x1e0 - nX - 0x1 + no + La, LN + 0xd2, 0x1e0 - nX, false), this.s_siner += 0x2, nv.draw_set_color(L3), nv.draw_rectangle(LN, 0x1e0 - nX + 0x28 + no + La, LN + 0xd4, 0x1e0 - nX + 0x2b + no + La, false);
          for (let LF = 0x0; LF < 0xc; LF++) {
            let Lp = this.s_siner + LF * (0xa * Math.PI);
            nv.draw_set_alpha(Math.max(0x0, Ip(Lp / 0x3c))), nv.draw_line_width(LN, LJ - 0x3 + La * 0.75, LN, LJ + 0x21, 0x2), nv.draw_line_width(LN + 0xd3, LJ - 0x3 + La * 0.75, LN + 0xd3, LJ + 0x21, 0x2), La < -0x8c && Iy(Lp / 0x3c) < 0x0 && (nv.draw_set_alpha(Math.max(0x0, y(0x0, Ip(Lp / 0x3c), (IF(La) - 0x8c) / 0x1e))), nv.draw_line_width(LN - Ip(Lp / 0x3c) * 0x1e + 0x1e, LJ + La * 0.75, LN - Ip(Lp / 0x3c) * 0x1e + 0x1e, LJ + 0x21, 0x2), nv.draw_line_width(LN + 0xd2 + Ip(Lp / 0x3c) * 0x1e - 0x1e, LJ + La * 0.75, LN + 0xd2 + Ip(Lp / 0x3c) * 0x1e - 0x1e, LJ + 0x21, 0x2));
          }
          nv.draw_set_alpha(0x1);
        }
      }
      let LA = this.mmy[L0],
        Ln = new Array(Iv.exists('obj_rouxls_ch3_enemy') ? 0x19 : 0x5).fill(0x0);
      if (L4 === L6 && (Ln[Ig.bmenucoord[0x0][Ig.charturn] + this.rouxlsbuttoncount_y * 0x5] = 0x1), Ig.fighting === 0x1) {
        let Ly = 0x0;
        for (let Lb = 0x0; Lb < 0x3; Lb++) Ig.monster[Lb] === 0x1 && Ig.mercymod[Lb] >= 0x64 && (Ly = 0x1);
        let LD = 0x0;
        if (L2 === 0x3) {
          for (let HM = 0x0; HM < 0x3; HM++) Ig.monster[HM] === 0x1 && Ig.monsterstatus[HM] === 0x1 && Ig.tension >= 0x28 && (LD = 0x1), Ig.encounterno === 0x1f && (LD = 0x0);
        }
        let LZ = L9 ? 0x0 : 0x5;
        if (this.oopsallacts === 0x1 && (Iv.exists('obj_rouxls_ch3_enemy') || Iv.exists('obj_tenna_board4_enemy'))) this.rouxlsCharbox(nv, nC + L5, LZ, nX, no, LA, L4 === L6, Ln);else {
          let HB = Ig.chapter >= 0x4 && this.disablesusieralseiattack === 0x1 && (Ig.charturn === 0x1 || Ig.charturn === 0x2);
          nv.draw_sprite('spr_btfight', HB ? 0x2 : Ln[0x0], nC + L5 + 0xf + LZ, 0x1e5 - nX + no), L2 === 0x1 ? nv.draw_sprite('spr_btact', Ln[0x1], nC + L5 + 0x32 + LZ, 0x1e5 - nX + no) : this.disablesusieact === 0x1 && L2 === 0x2 ? nv.draw_sprite('spr_ja_bttech_grey', Ln[0x1], nC + L5 + 0x32 + LZ, 0x1e5 - nX + no) : nv.draw_sprite('spr_bttech', Ln[0x1], nC + L5 + 0x32 + LZ, 0x1e5 - nX + no), nv.draw_sprite('spr_btitem', Ln[0x2], nC + L5 + 0x55 + LZ, 0x1e5 - nX + no), nv.draw_sprite('spr_btspare', Ln[0x3], nC + L5 + 0x78 + LZ, 0x1e5 - nX + no), nv.draw_sprite('spr_btdefend', Ln[0x4], nC + L5 + 0x9b + LZ, 0x1e5 - nX + no), Ly === 0x1 && L4 === L6 && nv.draw_sprite_ext('spr_btspare', 0x2, nC + L5 + 0x78 + LZ, 0x1e5 - nX + no, 0x1, 0x1, 0x0, IK.white, 0.4 + Ip(Ig.time / 0x6) * 0.4), LD === 0x1 && L4 === L6 && nv.draw_sprite_ext('spr_bttech', 0x2, nC + L5 + 0x32 + LZ, 0x1e5 - nX + no, 0x1, 0x1, 0x0, IK.white, 0.4 + Ip(Ig.time / 0x6) * 0.4);
        }
      }
      let LL = L4 === L6 ? L3 : this.bcolor;
      (Ig.charselect === L6 || Ig.charselect === 0x3) && (LL = L3);
      let Lw = 0x1e0;
      Ig.fighting === 0x0 && (Lw = 0x1ae), Ig.fighting === 0x1 && (Lw = 0x150), nv.draw_set_color(LL), L9 ? (nv.draw_rectangle(nC + L5, 0x1e0 - nX - 0x2 + no + LA, nC + L5 + L8, 0x1e0 - nX + no, false), nv.draw_set_color(IK.black), nv.draw_rectangle(nC + L5 + 0x2, 0x1e0 - nX + no + LA, nC + L5 + L8 - 0x2, 0x1e0 - nX + no + LA + 0x21, false)) : this.rouxlsgridenabled ? (nv.draw_rectangle(nC + L5, 0x1e0 - nX - 0x3 + no + LA, nC + L5 + L8, 0x1e0 - nX - 0x2 + no + LA, false), LA < -0x20 && (nv.draw_rectangle(nC + L5, 0x1e0 - nX - 0x3 + no + LA, nC + L5 + 0x1, ne + Lw + 0x27 + LA, false), nv.draw_rectangle(nC + L5 + L8 - 0x1, 0x1e0 - nX - 0x3 + no + LA, nC + L5 + L8, ne + Lw + 0x27 + LA, false)), nv.draw_set_color(IK.black), L4 !== L6 && LA !== 0x0 ? nv.draw_rectangle(nC + L5 + 0x2, 0x1e0 - nX - 0x1 + no + LA, nC + L5 + L8 - 0x2, 0x1e0 - nX + no + 0x21, false) : nv.draw_rectangle(nC + L5 + 0x2, 0x1e0 - nX - 0x1 + no + LA, nC + L5 + L8 - 0x2, 0x1e0 - nX + no + LA + 0x21, false)) : (nv.draw_rectangle(nC + L5, 0x1e0 - nX - 0x3 + no + LA, nC + L5 + L8, 0x1e0 - nX + no - 0x2, false), nv.draw_set_color(IK.black), nv.draw_rectangle(nC + L5 + 0x2, 0x1e0 - nX - 0x1 + no + LA, nC + L5 + L8 - 0x2, 0x1e0 - nX + no + LA + 0x21, false));
      let LH = Ig.charhero && Ig.charhero[L1] || d[L2 - 0x1] || 'kris',
        LW = k[LH] || k.kris,
        Lg = LW.head && Ib[LW.head] ? LW.head : LW.head === null ? null : ['spr_headkris', 'spr_headsusie', 'spr_headralsei'][L2 - 0x1],
        LR = LW.namesprite && Ib[LW.namesprite] ? LW.namesprite : LW.namesprite === null ? null : ['spr_bnamekris', 'spr_bnamesusie', 'spr_bnameralsei'][L2 - 0x1],
        LG = {
          'spr_bhero_head_a': [0x1, 0x29, 0x2],
          'spr_bhero_head_b': [0x3, 0x2b, 0x2],
          'spr_bhero_head_c': [0x2, 0x2b, 0x2],
          'spr_bhero_head_d': [0x0, 0x24, 1.6]
        },
        LE = null;
      L0 === 0x0 && Ig.chapter === 0x2 && Iv.with('o_boxingcontroller', Hi => {
        LE = LG[Hi.headsprite] || null;
      }), LE && (nv.draw_sprite_ext('spr_headthrash', LE[0x0], nC + LE[0x1] + L5, ne + 0x8 + Lw + LA, LE[0x2], LE[0x2], 0x0, IK.white, 0x1), Ib.spr_bnamethrash ? nv.draw_sprite('spr_bnamethrash', 0x0, nC + 0x33 + L5, ne + Lw + 0x3 + LA) : (nv.draw_set_font('fnt_mainbig'), nv.draw_text(nC + 0x2e + L5, ne + Lw + 0x2 + LA, String(Ig.charname[L1] || '\x20').toUpperCase(), IK.white))), !LE && !LR && nT(nv, String(Ig.charname[L1] || LW.name).toUpperCase(), nC + 0x2e + L5, ne + Lw + 0x2 + LA, 0x3c), !LE && Lg && nu(nv, Lg, Ig.faceaction[L6], nC + 0xd + L5, ne + Lw + LA), !LE && LR && nv.draw_sprite(LR, 0x0, nC + 0x33 + L5, ne + Lw + 0x3 + LA), nv.draw_sprite('spr_hpname', 0x0, nC + 0x6d + L5, ne + Lw + 0xb + LA);
      let Lf = IK.white;
      Ig.hp[L1] / Ig.maxhp[L1] <= 0.25 && (Lf = IK.yellow), Ig.hp[L1] <= 0x0 && (Lf = IK.red), nv.draw_set_halign('right'), nv.draw_spritefont('spr_numbersfontsmall', "0123456789-+", String(Ig.hp[L1]), nC + 0xa0 + L5, ne + Lw - 0x2 + LA, 0x1, 0x1, Lf, 0x1, 0x2), nv.draw_sprite('spr_hpslash', 0x0, nC + 0x9f + L5, ne + Lw - 0x4 + LA), nv.draw_spritefont('spr_numbersfontsmall', "0123456789-+", String(Ig.maxhp[L1]), nC + 0xcd + L5, ne + Lw - 0x2 + LA, 0x1, 0x1, Lf, 0x1, 0x2), nv.draw_set_halign('left'), nv.draw_set_color(IK.maroon), nv.draw_rectangle(nC + 0x80 + L5, ne + Lw + 0xb + LA, nC + 0xcb + L5, ne + Lw + 0x13 + LA, false), Ig.hp[L1] > 0x0 && Ig.maxhp[L1] > 0x0 && (nv.draw_set_color(L3), nv.draw_rectangle(nC + 0x80 + L5, ne + Lw + 0xb + LA, nC + L5 + 0x80 + IY(Ig.hp[L1] / Ig.maxhp[L1] * 0x4b), ne + Lw + 0x13 + LA, false));
    }
  }
  ["rouxlsCharbox"](nv, ne, nY, nS, nC, no, nX, L0) {
    let L1 = Iv.first('obj_rouxls_ch3_enemy'),
      L2 = Iv.first('obj_tenna_board4_enemy'),
      L3 = 0x1e5 - nS + nC,
      L4 = Ln => ne + 0xf + Ln * 0x23 + nY,
      L5 = 'spr_btrouxls',
      L6 = 'spr_btspade',
      L7 = 'spr_btheart',
      L8 = 'spr_btact';
    if (this.dogcon === 0x1 && (L6 = 'spr_btdog'), this.dogcon === 0x2 && (L6 = 'spr_btdog', L7 = 'spr_btdog', L8 = 'spr_btdog'), this.rouxlserrorcon === 0x1 && this.dogcon < 0x1 && (this.rouxlstelegraphtimer++, this.rouxlstelegraphtimer >= 0x1 && this.rouxlstelegraphtimer <= 0x4 && (L5 = 'spr_btrouxls_select1'), this.rouxlstelegraphtimer >= 0x5 && this.rouxlstelegraphtimer <= 0x8 && (L5 = 'spr_btrouxls_select2'), this.rouxlstelegraphtimer === 0x8 && (this.rouxlstelegraphtimer = 0x0)), this.rouxlstelegraphcon === 0x1 && this.dogcon < 0x1 && (this.rouxlstelegraphtimer === 0x0 && Im('snd_bombfall'), this.rouxlstelegraphtimer++, this.rouxlstelegraphtimer >= 0x1 && this.rouxlstelegraphtimer <= 0x4 && (L5 = 'spr_btexclamation1'), this.rouxlstelegraphtimer >= 0x5 && this.rouxlstelegraphtimer <= 0x8 && (L5 = 'spr_btexclamation2'), this.rouxlstelegraphtimer === 0x8 && (this.rouxlstelegraphtimer = 0x0)), this.spadetelegraphcon === 0x1 && this.dogcon < 0x1 && (this.spadetelegraphtimer++, this.spadetelegraphtimer >= 0x1 && this.spadetelegraphtimer <= 0x4 && (L6 = 'spr_btexclamation1_spade'), this.spadetelegraphtimer >= 0x5 && this.spadetelegraphtimer <= 0x8 && (L6 = 'spr_btexclamation2'), this.spadetelegraphtimer === 0x8 && (this.spadetelegraphtimer = 0x0)), this.spadesuccesscon === 0x1 && this.heartsuccesscon === 0x0) {
      this.spadetelegraphtimer++;
      let Ln = this.spadetelegraphtimer >= 0x5 ? 0x2 : 0x1;
      this.spadetelegraphtimer >= 0x1 && this.spadetelegraphtimer <= 0x8 && (this.spadefail ? L8 = Ln === 0x1 ? 'spr_btact_fail1' : 'spr_btact_fail2' : (L6 = Ln === 0x1 ? 'spr_btspade_success' : 'spr_btspade_success2', (this.dogcon === 0x1 || this.dogcon === 0x2) && (L6 = Ln === 0x1 ? 'spr_btdog_success' : 'spr_btdog_success2', L8 = L6))), this.spadetelegraphtimer === 0x8 && (this.spadetelegraphtimer = 0x0);
    }
    this.heartsuccesscon === 0x1 && (this.heartsuccesstimer++, this.heartsuccesstimer >= 0x1 && this.heartsuccesstimer <= 0x4 && (L7 = 'spr_btheart_success1'), this.heartsuccesstimer >= 0x5 && this.heartsuccesstimer <= 0x8 && (L7 = 'spr_btheart_success2'), this.heartsuccesstimer === 0x8 && (this.heartsuccesstimer = 0x0));
    let L9 = (LL, Lw, LH) => {
      LL.introtimer = (LL.introtimer || 0x0) + 0x1, LL.introtimer === 0x1 && Im('snd_petrify');
      let LW;
      if (LL.introtimer < 0x1e) nv.draw_sprite('spr_btfight', 0x0, L4(0x0), L3), nv.draw_sprite('spr_btact', 0x0, L4(0x1), L3), nv.draw_sprite('spr_bttech', 0x0, L4(0x2), L3), nv.draw_sprite('spr_btitem', 0x0, L4(0x3), L3), nv.draw_sprite('spr_btspare', 0x0, L4(0x4), L3), LW = y(0x0, 1.2, LL.introtimer / 0x1d);else {
        for (let Lg = 0x0; Lg < 0x5; Lg++) nv.draw_sprite('spr_btact', 0x0, L4(Lg), L3);
        LW = y(0x1, 0x0, (LL.introtimer - 0x1e) / 0x1e), LH && (Ig.bmenucoord[0x0][0x0] = 0x2, Ig.bmenucoord[0x0][0x1] = 0x2, Ig.bmenucoord[0x0][0x2] = 0x2);
      }
      for (let LR = 0x0; LR < 0x5; LR++) nv.draw_sprite_ext('spr_btact_rouxls_white', 0x0, L4(LR), L3, 0x1, 0x1, 0x0, IK.white, LW);
      Lw && LL.introtimer === 0x3c && (LL.intro = 0x3);
    };
    if (L1 && L1.intro === 0x2) {
      L9(L1, true, false);
      return;
    }
    if (L2 && L2.intro === 0x1) {
      L9(L2, false, true);
      return;
    }
    let LI = 0x0,
      LA = 0x1;
    if (this.rouxlsgridenabled && (LA = 0x5), !!nX) for (let LL = 0x0; LL < LA; LL++) {
      let Lw = y(0x8c, 0x0, IF(no / 0xaa)),
        LH = LI * 0x20 + no * 0.75 + Lw;
      LA === 0x1 && (LH += 0x20), LH > 0x0 && (LH = 0x0);
      let LW = L8;
      LI !== 0x4 && this.rouxlsgridenabled && (LW = 'spr_btact_ex');
      for (let Lg = 0x0; Lg < 0x5; Lg++) {
        let LR = Lg + 0x1 + LI * 0x5,
          LG = L0[Lg + LI * 0x5] || 0x0,
          LE = LW;
        this.rouxlsbuttoncount === LR || this.rouxlsbuttoncount2 === LR ? LE = L5 : this.spadebuttoncount === LR ? LE = L6 : this.heartbuttoncount === LR && (LE = L7), nv.draw_sprite(LE, LG, L4(Lg), L3 + LH);
      }
      LI++;
    }
  }
  ["selectionmatrix"](A, nv, ne, nY, nS = 0xd2) {
    this.s_siner += 0x2, A.draw_set_color(nY), A.draw_rectangle(nv, ne, nv + nS, ne + 0x3, false);
    for (let nC = 0x0; nC < 0xc; nC++) {
      let no = this.s_siner + nC * (0xa * Math.PI);
      A.draw_set_alpha(Math.max(0x0, Ip(no / 0x3c))), A.draw_line_width(nv, ne, nv, ne + 0x21, 0x2), A.draw_line_width(nv + nS, ne, nv + nS, ne + 0x21, 0x2), Iy(no / 0x3c) < 0x0 && (A.draw_line_width(nv - Ip(no / 0x3c) * 0x1e + 0x1e, ne, nv - Ip(no / 0x3c) * 0x1e + 0x1e, ne + 0x21, 0x2), A.draw_line_width(nv + nS + Ip(no / 0x3c) * 0x1e - 0x1e, ne, nv + nS + Ip(no / 0x3c) * 0x1e - 0x1e, ne + 0x21, 0x2));
    }
    A.draw_set_alpha(0x1);
  }
  ["groupBox"](nv, ne, nY, nS, nC) {
    let no = this.bp,
      nX = Ig.chapter === 0x1,
      {
        x: L0,
        w: L1
      } = nC,
      L2 = nC.group.map(LG => Ig.char[s(LG)]).filter(Boolean);
    if (!L2.length) return;
    let L3 = L2[0x0],
      L4 = IR(L3),
      L5 = h(L3),
      L6 = V(L3) || (Q(L3) === 'noelle' ? IK.yellow : this.hpcolor[L4 - 0x1]) || IK.white;
    nv.draw_set_color(this.bcolor), nX ? (nv.draw_rectangle(L0, 0x1e0 - no - 0x2 + nY, L0 + L1, 0x1e0 - no + nY, false), nv.draw_set_color(IK.black), nv.draw_rectangle(L0 + 0x2, 0x1e0 - no + nY, L0 + L1 - 0x2, 0x1e0 - no + nY + 0x21, false)) : (nv.draw_rectangle(L0, 0x1e0 - no - 0x3 + nY, L0 + L1, 0x1e0 - no + nY - 0x2, false), nv.draw_set_color(IK.black), nv.draw_rectangle(L0 + 0x2, 0x1e0 - no - 0x1 + nY, L0 + L1 - 0x2, 0x1e0 - no + nY + 0x21, false));
    let L7 = ne + nS,
      L8 = L0 + L1 - 0x6,
      L9 = L5.head && Ib[L5.head] ? L5.head : L5.head === null ? null : ['spr_headkris', 'spr_headsusie', 'spr_headralsei'][L4 - 0x1],
      LI = String(L5.name || Ig.charname[L3]).toUpperCase() + (L2.length > 0x1 ? '\x20X' + L2.length : ''),
      LA = !!L9 && L1 - 0x30 >= AR(LI).narrow,
      Ln = LA ? L0 + 0x2a : L0 + 0x6;
    LA && nu(nv, L9, 0x0, L0 + 0x5, L7);
    let LL = 0x0,
      Lw = 0x0,
      LH = 0x0;
    for (let LG of L2) LL += Math.max(0x0, Ig.hp[LG]), Lw += Ig.maxhp[LG], Ig.hp[LG] > 0x0 && LH++;
    let LW = AG(LI, L8 - Ln);
    LW && (Ib[LW].w <= L8 - Ln ? nv.draw_sprite(LW, 0x0, Ln, L7 - 0x5) : nv.draw_sprite_part(LW, 0x0, 0x0, 0x0, L8 - Ln, 0xf, Ln, L7 - 0x5));
    let Lg = Ln,
      LR = L8 - 0x1;
    nv.draw_set_color(IK.maroon), nv.draw_rectangle(Lg, L7 + 0xb, LR, L7 + 0x13, false), LL > 0x0 && Lw > 0x0 && (nv.draw_set_color(LH < L2.length ? Iq(L6, IK.yellow, 0.3) : L6), nv.draw_rectangle(Lg, L7 + 0xb, Lg + IY(LL / Lw * (LR - Lg)), L7 + 0x13, false));
  }
  ["charboxCompact"](nv, ne, nY, nS) {
    let nC = this.bp,
      no = Ig.chapter === 0x1,
      nX = Ig.charturn,
      L0 = 0x1e0;
    if (Ig.fighting === 0x0 && (L0 = 0x1ae), Ig.fighting === 0x1 && (L0 = 0x150), this.boxLay = nS, nS.crowd) {
      let L1 = (nS.turn >= 0x0 ? "TURN " + (nS.turn + 0x1) + " OF " + nS.total + "  C ALL FIGHT" : "PARTY OF " + nS.total) + (nS.pages > 0x1 ? "  PAGE " + (nS.page + 0x1) + " OF " + nS.pages : ''),
        L2 = AG(L1, 0x190);
      L2 && nv.draw_sprite(L2, 0x0, 0x27c - Ib[L2].w, 0x1e0 - this.bp + nY - 0x36);
    }
    for (let L3 = 0x0; L3 < nS.length; L3++) {
      if (nS[L3].group) {
        this.groupBox(nv, ne, nY, L0, nS[L3]);
        continue;
      }
      let L4 = nS[L3].slot;
      if (this.havechar[L4] !== 0x1) continue;
      let L5 = s(L4),
        L6 = Ig.char[L5],
        L7 = IR(L6),
        L8 = V(L6) || (Q(L6) === 'noelle' ? IK.yellow : this.hpcolor[L7 - 0x1]) || IK.white,
        {
          x: L9,
          w: LI
        } = nS[L3],
        LA = nX === L4 && Ig.myfight === 0x0;
      nX === L4 ? (this.mmy[L4] > -0x20 && (this.mmy[L4] -= 0x2), this.mmy[L4] > -0x18 && (this.mmy[L4] -= 0x4), this.mmy[L4] > -0x10 && (this.mmy[L4] -= 0x6), this.mmy[L4] > -0x8 && (this.mmy[L4] -= 0x8), this.mmy[L4] < -0x20 && (this.mmy[L4] = -0x40)) : this.mmy[L4] < -0xe ? this.mmy[L4] += 0xf : this.mmy[L4] = 0x0;
      let Ln = this.mmy[L4];
      if (LA && this.selectionmatrix(nv, L9, 0x1e0 - nC + nY, L8, LI - 0x2), Ig.fighting === 0x1 && nX === L4) {
        let Lp = [0x0, 0x0, 0x0, 0x0, 0x0];
        Lp[Ig.bmenucoord[0x0][nX]] = 0x1;
        let Ly = 0x0;
        for (let Lb = 0x0; Lb < 0x3; Lb++) Ig.monster[Lb] === 0x1 && Ig.mercymod[Lb] >= 0x64 && (Ly = 0x1);
        let LD = L9 + Math.max(0x4, Math.floor((LI - 0xab) / 0x2)),
          LZ = 0x1e5 - nC + nY;
        if (this.oopsallacts === 0x1 && (Iv.exists('obj_rouxls_ch3_enemy') || Iv.exists('obj_tenna_board4_enemy'))) {
          let HM = new Array(0x19).fill(0x0);
          HM[Ig.bmenucoord[0x0][nX] + this.rouxlsbuttoncount_y * 0x5] = 0x1, this.rouxlsCharbox(nv, LD - 0x14, 0x5, nC, nY, Ln, true, HM), this.boxBtnX = LD;
        } else nv.draw_sprite('spr_btfight', Lp[0x0], LD, LZ), nv.draw_sprite(L7 === 0x1 ? 'spr_btact' : 'spr_bttech', Lp[0x1], LD + 0x23, LZ), nv.draw_sprite('spr_btitem', Lp[0x2], LD + 0x46, LZ), nv.draw_sprite('spr_btspare', Lp[0x3], LD + 0x69, LZ), nv.draw_sprite('spr_btdefend', Lp[0x4], LD + 0x8c, LZ), Ly === 0x1 && nv.draw_sprite_ext('spr_btspare', 0x2, LD + 0x69, LZ, 0x1, 0x1, 0x0, IK.white, 0.4 + Ip(Ig.time / 0x6) * 0.4), this.boxBtnX = LD;
      }
      nv.draw_set_color(nX === L4 ? L8 : this.bcolor), no ? (nv.draw_rectangle(L9, 0x1e0 - nC - 0x2 + nY + Ln, L9 + LI, 0x1e0 - nC + nY, false), nv.draw_set_color(IK.black), nv.draw_rectangle(L9 + 0x2, 0x1e0 - nC + nY + Ln, L9 + LI - 0x2, 0x1e0 - nC + nY + Ln + 0x21, false)) : (nv.draw_rectangle(L9, 0x1e0 - nC - 0x3 + nY + Ln, L9 + LI, 0x1e0 - nC + nY - 0x2, false), nv.draw_set_color(IK.black), nv.draw_rectangle(L9 + 0x2, 0x1e0 - nC - 0x1 + nY + Ln, L9 + LI - 0x2, 0x1e0 - nC + nY + Ln + 0x21, false));
      let LL = h(L6),
        Lw = ne + L0 + Ln,
        LH = LL.head && Ib[LL.head] ? LL.head : LL.head === null ? null : ['spr_headkris', 'spr_headsusie', 'spr_headralsei'][L7 - 0x1],
        LW = !!LH && LI >= 0x82,
        Lg = LW ? L9 + 0x2a : L9 + 0x6,
        LR = L9 + LI - 0x6;
      LW && nu(nv, LH, Ig.faceaction[L5], L9 + 0x5, Lw);
      let LG = String(Ig.charname[L6] || LL.name).toUpperCase(),
        LE = String(Ig.hp[L6]).length * 0x8,
        Lf = LR - Lg >= AR(LG).narrow + 0x8 + 0x30 + LE,
        La = Lf ? 0x30 + LE : LE,
        LN = IK.white;
      Ig.hp[L6] / Ig.maxhp[L6] <= 0.25 && (LN = IK.yellow), Ig.hp[L6] <= 0x0 && (LN = IK.red), nv.draw_set_halign('right'), Lf ? (nv.draw_spritefont('spr_numbersfontsmall', "0123456789-+", String(Ig.hp[L6]), LR - 0x2e, Lw - 0x2, 0x1, 0x1, LN, 0x1, 0x2), nv.draw_sprite('spr_hpslash', 0x0, LR - 0x2f, Lw - 0x4), nv.draw_spritefont('spr_numbersfontsmall', "0123456789-+", String(Ig.maxhp[L6]), LR + 0x1, Lw - 0x2, 0x1, 0x1, LN, 0x1, 0x2)) : nv.draw_spritefont('spr_numbersfontsmall', "0123456789-+", String(Ig.hp[L6]), LR, Lw - 0x2, 0x1, 0x1, LN, 0x1, 0x2), nv.draw_set_halign('left');
      let HB = String(Ig.charname[L6] || LL.name).toUpperCase(),
        Hi = Math.max(0x10, LR - Lg - La - 0x8),
        Hx = AG(HB, Hi);
      if (Hx) {
        let HU = Ib[Hx].w;
        nv.draw_sprite_ext(Hx, 0x0, Lg, Lw - 0x5, HU > Hi ? Hi / HU : 0x1, 0x1, 0x0, IK.white, 0x1);
      } else nv.draw_set_font('fnt_main'), nv.draw_text(Lg, Lw - 0x5, HB, IK.white), nv.draw_set_font('fnt_mainbig');
      let LJ = Lg,
        LF = LR - 0x1;
      nv.draw_set_color(IK.maroon), nv.draw_rectangle(LJ, Lw + 0xb, LF, Lw + 0x13, false), Ig.hp[L6] > 0x0 && Ig.maxhp[L6] > 0x0 && (nv.draw_set_color(L8), nv.draw_rectangle(LJ, Lw + 0xb, LJ + IY(Ig.hp[L6] / Ig.maxhp[L6] * (LF - LJ)), Lw + 0x13, false));
    }
  }
};
IC(nx, 'obj_battlecontroller'), Io(nx, 'kinds', Ij('obj_battlecontroller', Id)), Io(nx, 'defaultDepth', 0x5), Io(nx, 'screenSpace', true);
var nU = nx;
u({
  'healFx': nm,
  'obj_dmgwriter': Af
}), IX(n6, "G.mnfight = 1;"), IX(nU, "G.myfight = 0;G.mnfight = 0;G.myfight = 7;G.mnfight = 2;");
export { AL as a, AR as b, AG as c, Af as d, AN as e, AF as f, Ay as g, AZ as h, Am as i, Ac as j, Al as k, Ak as l, Aj as m, AQ as n, AV as o, AB as p, AU as q, AY as r, AC as s, n3 as t, n4 as u, n6 as v, n8 as w, nI as x, nn as y, nw as z, nH as A, ng as B, nR as C, nG as D, nE as E, nf as F, na as G, nN as H, nJ as I, nF as J, np as K, nZ as L, nb as M, nP as N, nq as O, nc as P, nj as Q, nU as R };