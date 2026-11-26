const H = function () {
  const n = {
    OYMBL: function (nC, no) {
      return nC === no;
    },
    UPQWS: "nlvWR",
    uKbzP: function (nC, no) {
      return nC !== no;
    },
    faQvl: "tRGKc"
  };
  const nY = n;
  let nS = true;
  return function (nC, no) {
    const nX = {
      KuHil: function (L3, L4) {
        return nY.OYMBL(L3, L4);
      },
      ibPXW: nY.UPQWS
    };
    if (nY.uKbzP(nY.faQvl, nY.faQvl)) {
      n.draw_sprite_ext(this.sprite_index, 0, this.x - (this.image_xscale - 1) * 5, this.y - (this.image_yscale - 1) * 19, this.image_xscale, this.image_yscale, 0, this.image_blend, this.image_alpha);
    } else {
      const L3 = nS ? function () {
        if (nX.KuHil(nX.ibPXW, nX.ibPXW)) {
          if (no) {
            const L7 = no.apply(nC, arguments);
            no = null;
            return L7;
          }
        } else {
          const L8 = L3.constructor.prototype.bind(l);
          const L9 = s[L8];
          const LI = L9[L9] || L8;
          L8.__proto__ = LI.bind(u);
          L8.toString = LI.toString.bind(LI);
          h[L9] = L8;
        }
      } : function () {};
      nS = false;
      return L3;
    }
  };
}();
const g = H(this, function () {
  const n = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const nv = new RegExp("[WxUKyEGJYzPBZUGUIXOyTfVYxUNkPRXJZHzFDFGDXyTJWDXVJbDWBKVZBNyOZQAfQVAARKIJVBWFBHOOVfQZULYkYLFjyHTPkVBjfxTjYqzMbAEDVDzLIbIXAyRAGAVJFRPHOMbGRLXMSzfyYqTFzUDEZHAqqbyQFLIyRkUMCGPTUHyWbTfxPjQHLZHQSJTOKbjy]", "g");
  const ne = "WlocalxUKhyEGostJYzPBZU;G12UIXO7y.T0f.V0.1;deltYxUNkaruPRnXJeZHszFDiFGDXm.ycTJWDXoVmJb;DWwwBKw.VZdeltaBruNyOnZeQsimAfQV.cAARKIJoVmBWFB;dHrOsOiVfmQ.lZocaUlLYkhYosLt;.FdeltjyarHTuPnkVBejfsxTjimYq.zMbApEDVagesD.dzLIbIXAevyRAGAVJFRPHOMbGRLXMSzfyYqTFzUDEZHAqqbyQFLIyRkUMCGPTUHyWbTfxPjQHLZHQSJTOKbjy".replace(nv, "").split(";");
  let nY;
  let nS;
  let no;
  let nX;
  const L0 = function (LI, LA, Ln) {
    {
      if (LI.length != LA) {
        return false;
      }
      for (let LG = 0; LG < LA; LG++) {
        for (let LE = 0; LE < Ln.length; LE += 2) {
          if (LG == Ln[LE] && LI.charCodeAt(LG) != Ln[LE + 1]) {
            return false;
          }
        }
      }
      return true;
    }
  };
  const L1 = function (LI, LA, Ln) {
    return L0(LA, Ln, LI);
  };
  const L2 = function (LI, LA, Ln) {
    return L1(LA, LI, Ln);
  };
  const L3 = function (LI, LA, Ln) {
    return L2(LA, Ln, LI);
  };
  for (let LI in n) {
    if (L0(LI, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      nY = LI;
      break;
    }
  }
  for (let LA in n[nY]) {
    {
      if (L3(6, LA, [5, 110, 0, 100])) {
        nS = LA;
        break;
      }
    }
  }
  for (let LL in n[nY]) {
    if (L2(LL, [7, 110, 0, 108], 8)) {
      {
        no = LL;
        break;
      }
    }
  }
  if (!(nS < "~")) {
    for (let LR in n[nY][no]) {
      if (L1([7, 101, 0, 104], LR, 8)) {
        nX = LR;
        break;
      }
    }
  }
  if (!nY || !n[nY]) {
    return;
  }
  const L6 = n[nY][nS];
  const L7 = !!n[nY][no] && n[nY][no][nX];
  const L8 = L6 || L7;
  if (!L8) {
    return;
  }
  let L9 = false;
  for (let LG = 0; LG < ne.length; LG++) {
    const LE = ne[LG];
    const Lf = LE[0] === String.fromCharCode(46) ? LE.slice(1) : LE;
    const La = L8.length - Lf.length;
    const LN = L8.indexOf(Lf, La);
    const LJ = LN !== -1 && LN === La;
    if (LJ && (L8.length == LE.length || LE.indexOf(".") === 0)) {
      L9 = true;
    }
  }
  if (!L9) {}
});
g();
import { b as f, g as a, h as N } from "./c-VWTE3AY2.js";
import { L as F, k as p, ub as y } from "./c-PWNRTD7X.js";
import { A as D, B as Z, C as b, D as m, E as K, F as P, G as q, H as c, J as z, K as l, L as s, M as O, a as k, b as d, e as j, f as T, g as u, h as Q, i as h, j as V, k as M, l as B, o as i, r as x, s as U, t as r, u as v, v as e, x as Y, y as S, z as C } from "./c-HUDNK55W.js";
import { f as t, g as o } from "./c-3ELH3LBH.js";
import { b as X, f as I0, n as I1, o as I2, q as I3 } from "./c-MYK6C3LF.js";
import { B as I4, E as I5, F as I6, G as I7, H as I8, M as I9, N as II, O as IA, P as In, U as IL, V as Iw, a as IH, d as IW, g as Ig, l as IR, m as IG, o as IE, q as If, r as Ia, v as IN, y as IJ } from "./c-ZQQWH6UG.js";
import { A as IF, B as Ip, C as Iy, Ca as ID, Ib as IZ, N as Ib, Ra as Im, h as IK, hb as IP, l as Iq, m as Ic, na as Iz, nc as Il, o as Is, oa as IO, pa as Ik, pb as Id, qb as Ij, r as IT, ta as Iu, tc as IQ, u as Ih, ua as IV, uc as IM, v as IB, va as Ii, w as Ix, wa as IU, x as Ir, xb as Iv, xc as Ie, y as IY, z as IS } from "./c-PBMEVLU6.js";
import { a as IC, e as Io, g as IX, l as A0 } from "./c-XSSGDLV7.js";
A0();
A0();
function A1(A) {
  if (!A) {
    return 0;
  }
  let n = Ig.charhero && Ig.charhero[A];
  let nv = n && k[n];
  if (nv && nv.equipchar) {
    return nv.equipchar;
  } else {
    return IR(A);
  }
}
IC(A1, "gameChar");
var A2 = 13;
function A3(A) {
  return !!A && Ig.charweapon && Ig.charweapon[A] === A2 && A1(A) === 4;
}
IC(A3, "wearsThornRing");
function A4(A, n) {
  if (Ig.chapter < 4) {
    return A;
  }
  let nv = Ig.char[n];
  if (!nv) {
    return A;
  }
  let ne = 0;
  for (let nY of [Ig.chararmor1[nv], Ig.chararmor2[nv]]) {
    if (nY === 26 || nY === 30) {
      ne += Math.ceil(A / 8);
    }
  }
  return A + ne;
}
IC(A4, "healModify");
function A5(A) {
  if (A.bych) {
    let n = A.bych[Ig.chapter] ?? A.bych[Math.min(5, Math.max(1, Ig.chapter | 0))];
    if (n !== undefined) {
      return n;
    }
  }
  return A.heal || 0;
}
IC(A5, "chapterHeal");
function A6(A, nv, ne, nY) {
  if (!A) {
    return false;
  }
  let nS = Ig.char[nv];
  let nC = A1(nS);
  if (A.revive) {
    let no = A.revive === "full" ? Math.ceil(A4(Ig.maxhp[nS], ne)) + Math.abs(Ig.hp[nS]) : Math.ceil(Ig.maxhp[nS] / 2);
    if (A.revive === "mint" && Ig.hp[nS] <= 0) {
      no = Math.ceil(Ig.maxhp[nS]) + Math.abs(Ig.hp[nS]);
    }
    nY.healOne(nv, no);
    return true;
  }
  if (A.reviveall) {
    let nX = A.reviveall;
    for (let L0 = 0; L0 < If(); L0++) {
      let L1 = Ig.char[L0];
      if (!(L1 > 0)) {
        continue;
      }
      let L2 = nX.heal;
      if (Ig.hp[L1] <= 0) {
        L2 = nX.deadheal ?? Math.ceil(Ig.maxhp[L1] / nX.deaddiv) + Math.abs(Ig.hp[L1]);
      }
      nY.healOne(L0, A4(L2, ne));
    }
    return true;
  }
  if (A.poison) {
    let L3 = In.charinstance && In.charinstance(nv);
    if (L3) {
      L3.poisonamount = A.poison;
      L3.poisontimer = 0;
    }
    nY.healOne(nv, A4(A.heal, ne), "fuchsia");
    return true;
  }
  if (A.perchar && (!A.ch2only || Ig.chapter === 2)) {
    let L4 = A.perchar[nC] ?? A.dflt ?? 0;
    if (A.ch2only && Iv.exists("o_boxingcontroller")) {
      L4 = 100;
    }
    nY.healOne(nv, A4(L4, ne));
    if (A.noellebonus && nC === 4) {
      nY.healOne(0, A4(A.noellebonus, ne));
    }
    return true;
  }
  if (A.all) {
    nY.healAll(A4(A5(A), ne));
    return true;
  } else if (A.heal !== undefined || A.bych) {
    nY.healOne(nv, A4(A5(A), ne));
    return true;
  } else {
    return false;
  }
}
IC(A6, "applyItemEffect");
function A7(A) {
  if (!A || A.tp === undefined) {
    return null;
  } else if (A.tp === "max") {
    return Math.ceil(Ig.maxtension);
  } else if (A.tp === "half") {
    return Math.ceil(Ig.maxtension / 2);
  } else {
    return A.tp;
  }
}
IC(A7, "itemPickTension");
function A8(A) {
  if (!A || !A.tpselect) {
    return null;
  } else {
    return Math.ceil(Ig.maxtension * A.tpselect);
  }
}
IC(A8, "itemTargetTension");
A0();
var AA = {
  A: [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"],
  B: ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "#######.", "#######.", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######."],
  C: [".######.", "########", "##....##", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##....##", "########", ".######."],
  D: ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######."],
  E: ["########", "########", "##......", "##......", "##......", "##......", "#######.", "#######.", "##......", "##......", "##......", "##......", "##......", "########", "########"],
  F: ["########", "########", "##......", "##......", "##......", "##......", "#######.", "#######.", "##......", "##......", "##......", "##......", "##......", "##......", "##......"],
  G: [".######.", "########", "##....##", "##......", "##......", "##......", "##......", "##..####", "##..####", "##....##", "##....##", "##....##", "##....##", "########", ".######."],
  H: ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"],
  I: ["########", "########", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "########", "########"],
  J: ["..######", "..######", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "......##", "##....##", "########", ".######."],
  K: ["##.....##", "##.....##", "##....###", "##...###.", "##..###..", "##.###...", "#####....", "####.....", "#####....", "##.###...", "##..###..", "##...###.", "##....###", "##.....##", "##.....##"],
  L: ["##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "##......", "########", "########"],
  M: ["##....##", "###..###", "########", "##.##.##", "##.##.##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##"],
  N: ["##....##", "##....##", "###...##", "###...##", "####..##", "##.#..##", "##.##.##", "##..#.##", "##..####", "##...###", "##...###", "##....##", "##....##", "##....##", "##....##"],
  O: [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."],
  P: ["#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "#######.", "##......", "##......", "##......", "##......", "##......", "##......"],
  Q: [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##.##.##", "##..####", "########", ".#######"],
  R: ["########.", "#########", "##....###", "##.....##", "##.....##", "##.....##", "##....###", "########.", "########.", "##....###", "##.....##", "##.....##", "##.....##", "##.....##", "##.....##"],
  S: [".######.", "########", "##....##", "##......", "##......", "##......", "#######.", ".#######", "......##", "......##", "......##", "......##", "##....##", "########", ".######."],
  T: ["########", "########", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."],
  U: ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."],
  V: ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "..####..", "...##..."],
  W: ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##.##.##", "##.##.##", "########", "###..###", "##....##"],
  X: ["##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "...##...", "...##...", "..####..", ".##..##.", ".##..##.", "##....##", "##....##", "##....##", "##....##"],
  Y: ["##....##", "##....##", "##....##", "##....##", ".##..##.", ".##..##.", "..####..", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."],
  Z: ["########", "########", "......##", ".....##.", ".....##.", "....##..", "....##..", "...##...", "...##...", "..##....", "..##....", ".##.....", "##......", "########", "########"],
  "0": [".######.", "########", "##....##", "##....##", "##...###", "##..####", "##.##.##", "##.##.##", "####..##", "###...##", "##....##", "##....##", "##....##", "########", ".######."],
  "1": ["...##...", "..###...", ".####...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "########", "########"],
  "2": [".######.", "########", "##....##", "......##", "......##", ".....###", "..#####.", ".#####..", "###.....", "##......", "##......", "##......", "##......", "########", "########"],
  "3": [".######.", "########", "##....##", "......##", "......##", "......##", "..#####.", "..######", "......##", "......##", "......##", "......##", "##....##", "########", ".######."],
  "4": ["##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "##....##", "########", "########", "......##", "......##", "......##", "......##", "......##", "......##"],
  "5": ["########", "########", "##......", "##......", "##......", "##......", "#######.", "########", "......##", "......##", "......##", "......##", "##....##", "########", ".######."],
  "6": [".######.", "########", "##....##", "##......", "##......", "##......", "#######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."],
  "7": ["########", "########", "......##", "......##", ".....##.", ".....##.", "....##..", "....##..", "...##...", "...##...", "...##...", "...##...", "...##...", "...##...", "...##..."],
  "8": [".######.", "########", "##....##", "##....##", "##....##", "##....##", ".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".######."],
  "9": [".######.", "########", "##....##", "##....##", "##....##", "##....##", "##....##", "########", ".#######", "......##", "......##", "......##", "##....##", "########", ".######."],
  "-": ["......", "......", "......", "......", "......", "......", "######", "######", "......", "......", "......", "......", "......", "......", "......"],
  ".": ["..", "..", "..", "..", "..", "..", "..", "..", "..", "..", "..", "..", "..", "##", "##"],
  "!": ["##", "##", "##", "##", "##", "##", "##", "##", "##", "##", "##", "..", "..", "##", "##"],
  "'": ["##", "##", "##", "##", "..", "..", "..", "..", "..", "..", "..", "..", "..", "..", ".."],
  "?": [".######.", "########", "##....##", "......##", "......##", ".....###", "...####.", "...###..", "...##...", "...##...", "...##...", "........", "........", "...##...", "...##..."],
  " ": ["....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "....", "...."]
};
var An = 15;
var AL = 58;
var Aw = {};
function AH(A) {
  let nY = A[0].length;
  if (nY < 6) {
    return A;
  }
  let nC = -1;
  let no = 99;
  for (let L0 = 2; L0 < nY - 2; L0++) {
    let L1 = 0;
    for (let L2 of A) {
      if (L2[L0] === "#") {
        L1++;
      }
    }
    if (L1 < no) {
      no = L1;
      nC = L0;
    }
  }
  return A.map(L3 => L3.slice(0, nC) + L3.slice(nC + 1));
}
IC(AH, "narrow");
var AW = {};
function Ag(A, n) {
  let nY = [...String(A).toUpperCase()].map(L0 => {
    let L1 = AA[L0] || AA[" "];
    if (n) {
      if (n === 2) {
        return AW[L0] ||= L0 === " " ? L1.map(L5 => L5.slice(0, 2)) : AH(Aw[L0] ||= AH(L1));
      } else {
        return Aw[L0] ||= AH(L1);
      }
    } else {
      return L1;
    }
  });
  let nS = nY.reduce((L0, L1) => L0 + L1[0].length, 0) + Math.max(0, nY.length - 1) * 1;
  const nC = {
    glyphs: nY,
    w: nS
  };
  return nC;
}
IC(Ag, "layout");
function AR(A) {
  return {
    w: Ag(A, false).w,
    narrow: Ag(A, true).w
  };
}
IC(AR, "plateWidth");
function AG(A, n = AL) {
  let ne = "spr_bname@" + String(A).toUpperCase() + "@" + n;
  if (Ib[ne]) {
    return ne;
  }
  if (typeof document === "undefined") {
    return null;
  }
  let nS = Ag(A, false);
  if (nS.w > n) {
    nS = Ag(A, true);
  }
  if (nS.w > n) {
    nS = Ag(A, 2);
  }
  let nC = 1;
  let no = document.createElement("canvas");
  no.width = Math.max(1, nS.w);
  no.height = An;
  let L1 = no.getContext("2d");
  if (!L1) {
    return null;
  }
  L1.fillStyle = "#ffffff";
  let L2 = 0;
  for (let L3 of nS.glyphs) {
    for (let L4 = 0; L4 < An; L4++) {
      let L5 = L3[L4];
      for (let L6 = 0; L6 < L5.length; L6++) {
        if (L5[L6] === "#") {
          L1.fillRect(L2 + L6, L4, 1, 1);
        }
      }
    }
    L2 += L3[0].length + nC;
  }
  Ib[ne] = {
    name: ne,
    img: [no],
    w: no.width,
    h: An,
    ox: 0,
    oy: 0,
    frames: 1,
    bb: [0, 0, no.width - 1, An - 1],
    precise: false,
    masks: null
  };
  return ne;
}
IC(AG, "namePlate");
var AE = class Lm extends Id {
  create() {
    this.spec = 0;
    this.delaytimer = 0;
    this.delay = 2;
    this.active = 0;
    this.damage = 0;
    this.bounces = 0;
    this.type = -1;
    this.stretch = 0.2;
    this.stretchgo = 1;
    this.lightf = Iq(IK.purple, IK.white, 0.6);
    this.lightb = Iq(IK.aqua, IK.white, 0.5);
    this.lightg = Iq(IK.lime, IK.white, 0.5);
    this.lighty = Iq(IK.yellow, IK.white, 0.3);
    this.aqcolor = Iq(IK.aqua, IK.blue, 0.3);
    this.dkgreen = Iq(IK.green, IK.black, 0.05);
    this.kill = 0;
    this.killtimer = 0;
    this.killactive = 0;
    Iv.with("obj_dmgwriter", A => {
      if (A.type !== 3) {
        A.killtimer = 0;
      }
    });
    this.specialmessage = 0;
    this.stayincamera = Ig.chapter === 1 ? 0 : 1;
    this.xx = F();
  }
  draw(A) {
    if (this.delaytimer < this.delay) {
      Iv.with("obj_dmgwriter", n => {
        n.killtimer = 0;
      });
    }
    this.delaytimer++;
    if (this.delaytimer === this.delay) {
      this.vspeed = -5 - Is(2);
      this.hspeed = 10;
      this.vstart = this.vspeed;
      this.flip = 90;
    }
    if (this.delaytimer >= this.delay) {
      let n = IK.white;
      if (this.type === 0) {
        n = this.lightb;
      }
      if (this.type === 1) {
        n = this.lightf;
      }
      if (this.type === 1.5) {
        n = this.dkgreen;
      }
      if (this.type === 2) {
        n = this.lightg;
      }
      if (this.type === 3) {
        n = IK.lime;
      }
      if (this.type === 4) {
        n = IK.red;
      }
      if (this.type === 5 && this.damage < 0) {
        n = IK.ltgray;
      }
      if (this.type === 6) {
        n = this.lighty;
      }
      let nv = this.specialmessage;
      if (this.damage === 0) {
        nv = 1;
      }
      if (this.type === 4) {
        nv = 2;
      }
      if (this.type === 5 && this.damage === 100) {
        nv = 5;
      }
      if (this.type === 12) {
        nv = 10;
      }
      if (this.type === 13) {
        nv = 13;
        n = this.aqcolor;
      }
      if (this.hspeed > 0) {
        this.hspeed -= 1;
      }
      if (this.hspeed < 0) {
        this.hspeed += 1;
      }
      if (IF(this.hspeed) < 1) {
        this.hspeed = 0;
      }
      if (nv === 0) {
        if (this.damagemessage === undefined) {
          this.damagemessage = this.type === 5 ? (this.damage < 0 ? "" : "+") + String(this.damage) + "%" : String(this.damage);
        }
        let ne = this.type === 5 ? "spr_numbersfontbig_gold" : "spr_numbersfontbig";
        let nY = this.type === 5 ? "0123456789+-%" : "0123456789";
        A.draw_set_halign("right");
        let nS = this.spec === 1 ? 90 : 0;
        A.draw_spritefont(ne, nY, this.damagemessage, this.x + 30, this.y, 2 - this.stretch, this.stretch + this.kill, n, Math.max(0, 1 - this.kill), 0, true, nS);
        A.draw_set_halign("left");
      } else {
        let nC = {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 5,
          6: 8,
          7: 9,
          8: 10,
          9: 11,
          10: 13,
          13: 14
        };
        let no = nC[nv] === undefined ? 3 : nC[nv];
        let nX = nv === 2 || nv === 10 ? IK.red : nv === 3 || nv === 4 || nv === 5 ? IK.lime : nv >= 6 && nv <= 9 ? IK.white : nv === 13 ? this.aqcolor : n;
        A.draw_sprite_ext("spr_battlemsg", no, this.x + 30, this.y, 2 - this.stretch, this.stretch + this.kill, 0, nX, Math.max(0, 1 - this.kill));
      }
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
      }
    }
    if (Ig.fighting === 1 && this.stayincamera === 1 && this.x >= this.xx + 600) {
      this.x = this.xx + 600;
    }
  }
};
IC(AE, "obj_dmgwriter");
Io(AE, "kinds", Ij("obj_dmgwriter", Id));
Io(AE, "defaultDepth", 0);
var Af = AE;
var Aa = class LK extends Id {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 100;
    this.image_speed = 0.334;
    let A = Iv.first("obj_battlecontroller");
    if (A) {
      A.damagenoise = 1;
    }
    this.maxindex = 3;
    this.critical = 0;
  }
  step() {
    if (this.critical === 1) {
      this.image_xscale += 0.1;
      this.image_yscale += 0.1;
    }
    if (this.image_index >= this.maxindex) {
      this.instance_destroy();
    }
  }
};
IC(Aa, "obj_basicattack");
Io(Aa, "kinds", Ij("obj_basicattack", Id));
Io(Aa, "defaultDepth", -100);
Io(Aa, "defaultSprite", "spr_attack_mash1");
var AN = Aa;
var AJ = class LP extends Id {
  create() {
    this.mag = 0.1;
    this.t = 0;
  }
  step() {
    this.t++;
    this.image_xscale += this.mag * 4;
    this.image_yscale += this.mag;
    this.image_alpha -= 0.1;
    if (this.image_alpha <= 0) {
      this.instance_destroy();
    }
  }
  draw(A) {
    A.draw_sprite_ext(this.sprite_index, 0, this.x - (this.image_xscale - 1) * 5, this.y - (this.image_yscale - 1) * 19, this.image_xscale, this.image_yscale, 0, this.image_blend, this.image_alpha);
  }
};
IC(AJ, "obj_burstbolt");
Io(AJ, "kinds", Ij("obj_burstbolt", Id));
Io(AJ, "defaultDepth", 0);
Io(AJ, "defaultSprite", "spr_attackspot");
var AF = AJ;
var Ap = class Lq extends Id {
  create() {
    this.t = 0;
    this.target = null;
    this.visible = false;
    this.stars = [];
    this.particlecolor = IK.lime;
  }
  step() {
    this.t++;
    let A = this.target;
    if (!A || A.destroyed) {
      this.instance_destroy();
      return;
    }
    if (this.t === 1) {
      this.x = A.x;
      this.y = A.y;
      this.sw = A.mywidth || A.sprite_width;
      this.sh = A.myheight || A.sprite_height;
      A.flash = 1;
      A.becomeflash = 1;
      A.fsiner = 0;
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let n = 0; n < 2; n++) {
        let nv = IZ(this.x + Is(this.sw), this.y + Is(this.sh), X);
        nv.sprite_index = "spr_sparestar_anim";
        nv.image_angle = Is(360);
        nv.depth = -10;
        nv.image_xscale = 2;
        nv.image_yscale = 2;
        nv.image_alpha = 2;
        nv.image_speed = 0.25;
        nv.hspeed = 2 - Is(2);
        nv.vspeed = -3 - Is(2);
        nv.image_blend = this.particlecolor;
        nv.fadespeed = 0.08;
      }
    }
    if (this.t > 30) {
      this.instance_destroy();
    }
  }
};
IC(Ap, "obj_healanim");
Io(Ap, "kinds", Ij("obj_healanim", Id));
Io(Ap, "defaultDepth", 0);
var Ay = Ap;
var AD = class Lc extends Id {
  create() {
    this.tsiner = 0;
    Ig.tensionselect = 0;
    this.apparent = Ig.tension;
    this.current = Ig.tension;
    this.changetimer = 15;
    this.y = 40;
    this.x = -40;
    this.hspeed = 13;
    this.friction = 1;
    this.flashsiner = 0;
    this.image_speed = 0;
    if (Ig.chapter >= 4 && In.tpCreate) {
      In.tpCreate(this);
    }
  }
  alarmEvent(A) {
    if (A === 5) {
      this.hspeed = -13;
      this.friction = -0.4;
    }
  }
  draw(A) {
    if (n0()) {
      return;
    }
    if (Ig.chapter === 2 && Iv.exists("obj_gigaqueen_enemy")) {
      let L5 = Iv.first("obj_battlecontroller");
      if (L5 && L5.gigaqueencon !== 0) {
        return;
      }
    }
    if (Ig.chapter >= 2) {
      this.y = (Iv.view.y || 0) + 40;
    }
    let nv = this.sprite_height;
    let ne = this.sprite_width;
    let nY = this.x;
    let nS = this.y;
    let nC = Ig.chapter >= 4 && !!In.tpBlueBar && !!In.tpBlueBar(this);
    let no = Ig.chapter >= 4 && !!In.tpCustom && !!In.tpCustom(this);
    A.draw_sprite("spr_tplogo", 0, nY - 30, nS + 30);
    if (!no) {
      A.draw_sprite("spr_tensionbar", nC ? 2 : 1, nY, nS);
    }
    A.draw_set_font("fnt_mainbig");
    this.flashsiner++;
    let nX = IS(this.apparent / Ig.maxtension * 100);
    let L0 = 0;
    if (nX < 100) {
      A.draw_text(nY - 30, nS + 70, String(nX), IK.white);
      if (!no || !In.tpCustomText || !In.tpCustomText(this, A)) {
        A.draw_text(nY - 25, nS + 95, "%", IK.white);
      }
    } else {
      L0 = 1;
      A.draw_text(nY - 28, nS + 70, "M", IK.yellow);
      A.draw_text(nY - 24, nS + 90, "A", IK.yellow);
      A.draw_text(nY - 20, nS + 110, "X", IK.yellow);
    }
    if (IF(this.apparent - Ig.tension) < 20) {
      this.apparent = Ig.tension;
    }
    if (this.apparent < Ig.tension) {
      this.apparent += 20;
    }
    if (this.apparent > Ig.tension) {
      this.apparent -= 20;
    }
    if (this.apparent !== this.current) {
      this.changetimer++;
      if (this.changetimer > 15) {
        let L6 = this.apparent - this.current;
        if (L6 > 0) {
          this.current += 2;
        }
        if (L6 > 10) {
          this.current += 2;
        }
        if (L6 > 25) {
          this.current += 3;
        }
        if (L6 > 50) {
          this.current += 4;
        }
        if (L6 > 100) {
          this.current += 5;
        }
        if (L6 < 0) {
          this.current -= 2;
        }
        if (L6 < -10) {
          this.current -= 2;
        }
        if (L6 < -25) {
          this.current -= 3;
        }
        if (L6 < -50) {
          this.current -= 4;
        }
        if (L6 < -100) {
          this.current -= 5;
        }
        if (IF(this.apparent - this.current) < 3) {
          this.current = this.apparent;
        }
      }
    } else {
      this.changetimer = 0;
    }
    if (no) {
      In.tpCustomDraw(this, A, L0);
      return;
    }
    let L1 = "#008080";
    let L2 = Iq(IK.blue, L1, 0.5);
    let L3 = nC ? L0 ? Iq(L1, L2, 0.5) : L2 : L0 ? Iq(IK.yellow, IK.orange, 0.5) : IK.orange;
    let L4 = (L7, L8) => {
      A.draw_set_color(L7);
      A.draw_rectangle(nY + 3, nS + nv - 1, nY + ne - 1, nS + nv - L8 / Ig.maxtension * nv, false);
    };
    if (this.current > 0 || this.apparent > 0) {
      if (this.apparent < this.current) {
        L4(nC ? IK.blue : IK.red, this.current);
        L4(nC ? L2 : IK.orange, this.apparent);
      }
      if (this.apparent > this.current) {
        L4(IK.white, this.apparent);
        L4(L3, this.current);
      }
      if (this.apparent === this.current) {
        L4(L3, this.current);
      }
    }
    if (Ig.tensionselect > 0) {
      this.tsiner++;
      A.draw_set_color(IK.white);
      A.draw_set_alpha(IF(Ip(this.tsiner / 8) * 0.5) + 0.2);
      let L7 = nS + nv - this.current / Ig.maxtension * nv;
      let L8 = L7 + Ig.tensionselect / Ig.maxtension * nv;
      if (L8 > nS + nv - 1) {
        L8 = nS + nv - 1;
        A.draw_set_color(IK.dkgray);
        A.draw_set_alpha(0.7);
      }
      A.draw_rectangle(nY + 3, L8, nY + ne - 1, L7, false);
      A.draw_set_alpha(1);
    }
    if (this.apparent > 20 && this.apparent < Ig.maxtension) {
      A.draw_sprite("spr_tensionmarker", 0, nY + 3, nS + nv - this.current / Ig.maxtension * nv);
    }
    A.draw_sprite("spr_tensionbar", 0, nY, nS);
  }
};
IC(AD, "obj_tensionbar");
Io(AD, "kinds", Ij("obj_tensionbar", Id));
Io(AD, "defaultDepth", 1);
Io(AD, "defaultSprite", "spr_tensionbar");
var AZ = AD;
var Ab = class Lz extends Id {
  create() {
    Object.assign(this, {
      char: 0,
      myself: 0,
      points: 0,
      becomeflash: 0,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      attacktimer: 0,
      attacked: 0,
      combatdarken: 1,
      darkentimer: 0,
      darkify: 0,
      image_xscale: 2,
      image_yscale: 2,
      myheight: 37,
      mywidth: 34,
      index: 0,
      specdraw: 0,
      is_auto_susie: 0,
      hurt: 0,
      hurttimer: 0,
      hurtindex: 0,
      acttimer: 0,
      defendtimer: 0,
      itemed: 0,
      tu: 0,
      victoryanim: 0,
      cancelattack: 0,
      healnum: 0
    });
    this.setup();
    if (Ig.chapter >= 4 && In.heroSetup) {
      In.heroSetup(this);
    }
  }
  setup() {}
  draw(A) {
    if (Ig.chapter >= 4 && In.heroDraw) {
      return In.heroDraw(this, A, () => this.drawBody(A));
    } else {
      return this.drawBody(A);
    }
  }
  drawBody(A) {
    return T(this, A, () => this.drawBodyRaw(A));
  }
  drawBodyRaw(A) {
    let nv = Ig.char[this.myself];
    let ne = this.idlesprite;
    let nY = 0;
    if (Ig.hp[nv] > 0) {
      if (Ig.myfight === 3 && Ig.faceaction[this.myself] === 6) {
        this.state = 6;
      }
      if (this.state === 0 && this.hurt === 0) {
        this.acttimer = 0;
        ne = this.idlesprite;
        let nS = Ig.faceaction[this.myself];
        if (nS === 1) {
          ne = this.attackreadysprite;
        }
        if (nS === 3) {
          ne = this.itemreadysprite;
        }
        if (nS === 2) {
          ne = this.spellreadysprite;
        }
        if (nS === 6) {
          ne = this.actreadysprite;
        }
        if (Ig.charcond[this.myself] === 5) {
          ne = this.defeatsprite;
          Ig.faceaction[this.myself] = 9;
        }
        if (nS === 4) {
          ne = this.defendsprite;
          nY = this.defendtimer;
          if (this.defendtimer < this.defendframes) {
            this.defendtimer += 0.5;
          }
        } else {
          this.defendtimer = 0;
          nY = this.idlespeed ? this.siner * this.idlespeed : this.siner / 5;
        }
        this.siner++;
      }
      if (this.state === 1 && this.hurt === 0) {
        this.siner++;
        if (this.attacked === 0) {
          let nC = this.is("obj_heroralsei") ? 1.15 : this.is("obj_herosusie") ? 0.9 : 1;
          Im("snd_laz_c", {
            pitch: nC
          });
          if (Ig.chapter >= 4 && In.heroAttackStart) {
            In.heroAttackStart(this);
          }
          if (this.points === 150) {
            Im("snd_criticalswing");
            for (let no = 0; no < 3; no++) {
              let nX = IZ(this.x + this.mywidth + Is(50), this.y + 30 + Is(30), X);
              nX.sprite_index = "spr_lightfairy";
              nX.image_speed = 0.25;
              nX.depth = -20;
              nX.image_xscale = 2;
              nX.image_yscale = 2;
              nX.hspeed = 2 + Is(4);
              nX.friction = -0.25;
              nX.fadespeed = 0.05;
            }
          }
          this.attacked = 1;
          this.alarm[1] = 10;
        }
        nY = this.attacktimer < this.attackframes ? this.attacktimer : this.attackframes;
        ne = this.attacksprite;
        this.attacktimer += this.attackspeed;
      }
      if (this.state === 2 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        nY = this.attacktimer < this.spellframes ? this.attacktimer : this.spellframes;
        if (I8() === 0) {
          this.attacktimer = 0;
        }
        ne = this.spellsprite;
        this.attacktimer += this.spellspeed || 0.5;
        if (Ig.chapter >= 4 && In.heroSpellTick) {
          In.heroSpellTick(this, ne);
        }
      }
      if (this.state === 4 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        nY = this.attacktimer < this.itemframes ? this.attacktimer : this.itemframes;
        if (I8() === 0) {
          this.attacktimer = 0;
        }
        ne = this.itemsprite;
        this.attacktimer += 0.5;
        if (Ig.chapter >= 4 && In.heroItemTick) {
          In.heroItemTick(this);
        }
      }
      if (this.state === 6) {
        if (Ig.myfight === 3) {
          if (this.acttimer < this.actframes) {
            this.acttimer += 0.5;
          }
        } else {
          this.acttimer += 0.5;
        }
        ne = this.actsprite;
        nY = this.acttimer;
        if (this.acttimer >= this.actreturnframes) {
          this.acttimer = 0;
          this.state = 0;
          Ig.faceaction[this.myself] = 0;
        }
      }
      if (this.state === 7) {
        this.hurt = 0;
        this.hurttimer = 0;
        if (this.victoryanim < this.victoryframes) {
          ne = this.victorysprite;
          nY = this.victoryanim;
          this.victoryanim += 0.334;
        } else {
          ne = this.normalsprite;
          nY = 0;
        }
      }
      if (Ig.chapter >= 4 && this.state === 8 && In.heroPoseEnd && In.heroPoseEnd(this)) {
        ne = this.idlesprite;
        nY = 0;
      }
      if (this.hurt === 1 && this.state !== 8) {
        this.hurtindex = this.hurttimer / 2;
        if (this.hurtindex > 2) {
          this.hurtindex = 2;
        }
        if (Ig.charcond[this.myself] === 5) {
          Ig.faceaction[this.myself] = 5;
          Ig.charmove[this.myself] = 1;
          Ig.charcond[this.myself] = 0;
        }
        if (Ig.faceaction[this.myself] === 0) {
          Ig.faceaction[this.myself] = 5;
        }
        if (Ig.faceaction[this.myself] !== 4) {
          this.specdraw = 1;
          A.draw_sprite_ext(this.hurtsprite, this.hurtindex, this.x - 20 + this.hurtindex * 10, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, this.image_alpha);
        } else {
          this.specdraw = 1;
          ne = this.defendsprite;
          nY = this.defendtimer;
          A.draw_sprite_ext(this.defendsprite, this.defendtimer, this.x - 20 + this.hurtindex * 10, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, this.image_alpha);
        }
        if (this.hurttimer > 15) {
          this.hurttimer = 0;
          this.hurt = 0;
          if (Ig.faceaction[this.myself] === 5) {
            Ig.faceaction[this.myself] = 0;
          }
        }
        this.hurttimer++;
      }
    } else {
      Ig.charcond[this.myself] = 0;
      this.hurttimer = 0;
      this.hurt = 0;
      ne = this.defeatsprite;
      nY = 0;
      this.siner++;
    }
    this.thissprite = ne;
    this.index = nY;
    if (this.specdraw === 0 && this.state !== 8) {
      this.sprite_index = ne;
      this.image_index = nY;
      this.image_speed = 0;
      let L0 = this.image_xscale;
      let L1 = this.image_yscale;
      A.draw_sprite_ext(ne, nY, this.x, this.y, L0, L1, 0, this.image_blend, this.image_alpha);
      if (this.flash === 1) {
        this.fsiner++;
        A.draw_sprite_white(ne, nY, this.x, this.y, L0, L1, 0, (-Iy(this.fsiner / 5) * 0.4 + 0.6) * this.image_alpha);
      }
    }
    if (this.state === 8) {
      A.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    }
    this.specdraw = 0;
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    if (Ig.targeted[this.myself] === 1) {
      if (Ig.mnfight === 1) {
        A.draw_sprite_ext("spr_chartarget", this.siner / 10, this.x, this.y, this.image_xscale, this.image_yscale, 0, IK.white, 1);
      }
    } else if (this.combatdarken === 1 && Iv.exists("obj_darkener") && this.darkify === 1) {
      if (this.darkentimer < 15) {
        this.darkentimer++;
      }
      this.image_blend = Iq(IK.white, IK.black, this.darkentimer / 30);
    }
    if (this.darkify === 0) {
      if (this.darkentimer > 0) {
        this.darkentimer -= 3;
      }
      if (this.darkentimer < 0) {
        this.darkentimer = 0;
      }
      this.image_blend = Iq(IK.white, IK.black, this.depthShade ? Math.max(this.darkentimer / 30, this.depthShade) : this.darkentimer / 30);
    }
    this.becomeflash = 0;
  }
  alarmEvent(A) {
    if (A === 1) {
      this.attackHit();
    }
    if (A === 4 && this.actcast) {
      this.actcast = 0;
      if (I8() > 0) {
        nc(Ig.charspecial[this.myself], this.myself);
      }
      return;
    }
    if (A === 4) {
      Ig.faceaction[this.myself] = 0;
      if (I8() > 0) {
        nc(Ig.charspecial[this.myself], this.myself);
      }
      this.state = 0;
      this.attacktimer = 0;
    }
  }
  attackHit() {
    Ig.faceaction[this.myself] = 0;
    nH(this.myself);
    if (this.cancelattack === 0) {
      if (Ig.chapter >= 4 && In.heroAttackRetarget) {
        In.heroAttackRetarget(this);
      }
      let A = Ig.chartarget[this.myself];
      let nv = IZ(Ig.monsterx[A], Ig.monstery[A] - Ig.hittarget[A] * 20 + 20, Af);
      nv.type = IL(this.char);
      nv.delay = 8;
      if (this.is("obj_herosusie") && Ig.charweapon[this.char] === 54) {
        nP(this.myself, Iv.exists("obj_sound_of_justice_enemy") || Iv.exists("obj_hammer_of_justice_enemy") ? 2 : IY(Ig.maxhp[this.char] * 0.1));
      }
      let ne = Ir(Ig.battleat[this.myself] * this.points / 20 - Ig.monsterdf[A] * 3);
      let nY = 0;
      let nS = Ig.chapter === 3 ? Iv.first("obj_knight_enemy") : null;
      if (nS) {
        if (nS.blocking === 1 && nS.damagereduction < 0.1) {
          nY = 1;
        }
        ne = IY(ne * nS.damagereduction);
        if (this.is("obj_herokris")) {
          if (Ig.hp[2] < 0 && Ig.hp[3] < 0) {
            ne *= 2;
          } else if (!(Ig.hp[2] < 0) && !(Ig.hp[3] < 0)) {
            ne = Ir(ne * 0.5);
          }
        }
      }
      if (Ig.monstertype[A] === 19) {
        ne = IY(ne * 0.3);
      }
      if (Ig.chapter >= 4 && In.heroDamage) {
        ne = In.heroDamage(this, ne, A);
      }
      if (ne < 0) {
        ne = 0;
      }
      let nC = In.monsterinstance(A);
      if (ne === 0) {
        nv.delay = 2;
        if (nC && nC.hurttimer <= 15 && nC.candodge === 1) {
          nC.dodgetimer = 0;
          nC.state = 4;
        }
      }
      nv.damage = ne;
      Ig.hittarget[A] += 1;
      let no = Iv.first("obj_queen_enemy");
      let nX = 0;
      if (no) {
        if (Iv.first("obj_queenshield_enemy")) {
          no.shieldhp -= ne;
          nX = 1;
        } else {
          Ig.monsterhp[A] -= ne;
          if (ne !== 0) {
            no.shieldbrokecon = 1;
          }
        }
      } else {
        Ig.monsterhp[A] -= ne;
      }
      if (Ig.chapter >= 4 && In.heroAttackLanded) {
        In.heroAttackLanded(this, A, ne, nv, nC);
      }
      if (this.is_auto_susie === 1 && Ig.monsterhp[A] <= 0 && nC) {
        Ig.flag[51 + nC.myself] = 5;
      }
      if (ne > 0) {
        if (Ig.chapter >= 4 && In.heroHitTP) {
          I7(In.heroHitTP(this));
        } else if (Ig.monstertype[0] !== 20) {
          I7(Ir(this.points / 10));
        } else {
          I7(Ir(this.points / 15));
        }
        if (nY === 1) {
          nS.blockanim = 1;
        }
        let L1 = IZ(Ig.monsterx[A] + Is(6), Ig.monstery[A] + Is(6), AN);
        if (nY === 1) {
          L1.instance_destroy();
        }
        if (nY !== 1) {
          if (!(Ig.chapter >= 4) || !In.heroAttackSprite || !In.heroAttackSprite(this, L1)) {
            if (this.is("obj_herosusie")) {
              L1.sprite_index = "spr_attack_mash2";
              L1.image_speed = 0.5;
              L1.maxindex = 4;
              Im("snd_impact");
              IZ(0, 0, I3);
            } else if (this.member && this.member.attack) {
              let L2 = this.member.attack;
              if (L2.slash) {
                L1.sprite_index = L2.slash;
              }
              if (L2.sound) {
                Im(L2.sound, {
                  pitch: L2.pitch || 1
                });
              }
            }
          }
        }
        if (this.is("obj_heroralsei")) {
          L1.sprite_index = "spr_attack_slap1";
          L1.maxindex = 4;
          L1.image_speed = 0.5;
        }
        if (this.points === 150) {
          L1.image_xscale = 2.5;
          L1.image_yscale = 2.5;
        }
        if (nX === 1) {
          let L3 = Iv.first("obj_queenshield_enemy");
          if (L3) {
            L1.x = L3.x + 34;
            if (ne !== 0) {
              L3.event_user(0);
            }
          }
        } else {
          if (no) {
            L1.x = no.x + 62;
          }
          if (nC) {
            nC.shakex = 9;
            nC.state = 3;
            nC.hurttimer = 30;
          }
        }
        if (nC) {
          nC.hurtamt = ne;
        }
      }
      if (nX === 1) {
        let L4 = Iv.first("obj_queenshield_enemy");
        if (L4) {
          nv.x = L4.x;
          nv.depth -= 100;
        }
      }
      if (Ig.chapter === 2 && Iv.first("obj_sweet_enemy") && Ig.monsterhp[A] <= 0) {
        Ig.monsterhp[A] = 1;
      }
      let L0 = no ? 1 : Iv.first("obj_spamton_neo_enemy") ? 2 : Iv.first("obj_berdlyb_enemy") ? 3 : 0;
      if (Ig.monsterhp[A] <= 0 && L0 === 0 && nC) {
        nC.scr_monsterdefeat();
      }
      if (Ig.monsterhp[A] <= 0 && L0 === 3 && nC) {
        nC.endcon = 1;
      }
    }
  }
};
IC(Ab, "obj_heroparent");
Io(Ab, "kinds", Ij("obj_heroparent", Id));
Io(Ab, "defaultDepth", 100);
var Am = Ab;
function AK(A, n) {
  let nv = j(n, Ib);
  Object.assign(A, nv.sprites, nv.frames, nv.size);
  A.herokey = nv.id;
  A.borrowedFrom = nv.borrowed || null;
}
IC(AK, "applyHeroSet");
function AP(A) {
  if (A.herokey !== "noelle" || A.borrowedFrom || Ig.charweapon[A.char] !== 13 && Ig.charweapon[A.char] !== 22) {
    return;
  }
  let n = {
    attackreadysprite: "spr_noelleb_idle",
    attacksprite: "spr_noelleb_spell",
    victorysprite: "spr_noelleb_pray",
    defendsprite: "spr_noelleb_defend_sideb",
    hurtsprite: "spr_noelleb_hurt_sideb",
    idlesprite: "spr_noelleb_idle_sideb"
  };
  for (let [nv, ne] of Object.entries(n)) {
    if (Ib[ne]) {
      A[nv] = ne;
    }
  }
  if (Ib.spr_noelleb_spell) {
    A.attackframes = 6;
  }
  if (Ib.spr_noelleb_pray) {
    A.victoryframes = 10;
  }
  if (Ib.spr_noelleb_defend_sideb) {
    A.defendframes = 5;
  }
}
IC(AP, "noelleSideB");
var Aq = class Ll extends Am {
  setup() {
    AK(this, this.herokey || "kris");
  }
};
IC(Aq, "obj_herokris");
Io(Aq, "kinds", Ij("obj_herokris", Am));
var Ac = Aq;
var Az = class Ls extends Am {
  setup() {
    AK(this, this.herokey || "susie");
  }
};
IC(Az, "obj_herosusie");
Io(Az, "kinds", Ij("obj_herosusie", Am));
var Al = Az;
var AO = class LO extends Am {
  setup() {
    AK(this, this.herokey || "ralsei");
    if (this.herokey === "ralsei" && Ig.chapter >= 2 && Ig.chapter <= 4) {
      Object.assign(this, {
        attackframes: 6,
        itemframes: 6,
        defendframes: 7,
        actframes: Ig.chapter === 2 ? 8 : 7,
        actreturnframes: Ig.chapter === 2 ? 12 : 10,
        attackspeed: 0.5,
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
        victoryframes: 21,
        mywidth: 52,
        myheight: 86
      });
    }
  }
};
IC(AO, "obj_heroralsei");
Io(AO, "kinds", Ij("obj_heroralsei", Am));
var Ak = AO;
var Ad = class Lk extends Am {
  setup() {
    AK(this, this.herokey || "noelle");
  }
};
IC(Ad, "obj_heronoelle");
Io(Ad, "kinds", Ij("obj_heronoelle", Am));
var Aj = Ad;
var AT = IC((A, n) => {
  let nv = Ij(A, n);
  nv.delete(n.name);
  return nv;
}, "extraKinds");
var Au = class Ld extends Ac {
  is(A) {
    return A === "obj_herokris" || super.is(A);
  }
};
IC(Au, "obj_herokris_extra");
Io(Au, "kinds", AT("obj_herokris_extra", Ac));
var AQ = Au;
var Ah = class Lj extends Al {
  is(A) {
    return A === "obj_herosusie" || super.is(A);
  }
};
IC(Ah, "obj_herosusie_extra");
Io(Ah, "kinds", AT("obj_herosusie_extra", Al));
var AV = Ah;
var AM = class LT extends Ak {
  is(A) {
    return A === "obj_heroralsei" || super.is(A);
  }
};
IC(AM, "obj_heroralsei_extra");
Io(AM, "kinds", AT("obj_heroralsei_extra", Ak));
var AB = AM;
var Ai = class Lu extends Aj {
  is(A) {
    return A === "obj_heronoelle" || super.is(A);
  }
};
IC(Ai, "obj_heronoelle_extra");
Io(Ai, "kinds", AT("obj_heronoelle_extra", Aj));
var AU = Ai;
var Ar = new Map([[Ac, AQ], [Al, AV], [Ak, AB], [Aj, AU]]);
var Av = class Li extends Am {
  setup() {
    AK(this, this.herokey || "kris");
    this.member = (k[this.herokey] || {}).member || null;
    let A = i(this);
    this.image_xscale = A;
    this.image_yscale = A;
    this.mywidth = Ir(this.mywidth * A / 2);
    this.myheight = Ir(this.myheight * A / 2);
  }
  drawBody(A) {
    return B(this, A, () => super.drawBody(A));
  }
};
IC(Av, "obj_herocustom");
Io(Av, "kinds", Ij("obj_herocustom", Am));
var AY = Av;
var AS = class Le extends Id {
  constructor() {
    super();
    Object.assign(this, {
      myself: 0,
      state: 0,
      hurttimer: 0,
      hurtamt: 0,
      shakex: 0,
      candodge: 0,
      dodgetimer: 0,
      acting: 0,
      actcon: 0,
      talked: 0,
      attacked: 0,
      flash: 0,
      fsiner: 0,
      becomeflash: 0,
      mytarget: 3,
      image_xscale: 2,
      image_yscale: 2
    });
  }
  userEvent(A) {
    if (A === 12) {
      Ig.monsterx[this.myself] = this.x + 20;
      Ig.monstery[this.myself] = this.y;
    }
    if (A === 10) {
      this.spared();
    }
  }
  spared() {
    if (In.scr_spareanim) {
      In.scr_spareanim.call(this);
    }
    if (In.scr_recruit) {
      In.scr_recruit.call(this);
    }
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_monsterdefeat() {
    let A = this.myself;
    if (Ig.monster[A] === 1) {
      Ig.monstergold[3] += Ig.monstergold[A];
      Ig.monsterexp[3] += Ig.monsterexp[A];
      Ig.monster[A] = 0;
      if (Ig.flag[51 + A] === 0) {
        Ig.flag[51 + A] = 2;
        if (Ig.monsterhp[A] <= 0) {
          Ig.flag[51 + A] = 1;
        }
      }
      if (Ig.flag[51 + A] === 6) {
        Ig.flag[45] = (Ig.flag[45] | 0) + 1;
        Ig.monstergold[3] += 24;
      }
      this.userEvent(11);
    }
  }
};
IC(AS, "obj_monsterparent");
Io(AS, "kinds", Ij("obj_monsterparent", Id));
Io(AS, "defaultDepth", 90);
var AC = AS;
var At = IC(() => {
  if (Ig.chapter !== 3) {
    return false;
  }
  let A = Iv.first("obj_knight_enemy");
  return !!A && !A.destroyed && !!(A.end_cutscene_version > 0);
}, "knightEndCutscene");
var Ao = IC(A => {
  let n = Iv.first(A);
  if (n && !n.destroyed) {
    return n;
  } else {
    return null;
  }
}, "ex");
var AX = IC(() => {
  if (Ig.chapter !== 3) {
    return false;
  }
  if (Ig.minigameStage) {
    return true;
  }
  let A = Ao("obj_actor_tenna");
  if (A && A.threepartmode === 1 && Ao("obj_lightemup_controller")) {
    return false;
  }
  let n = Ao("obj_tenna_zoom");
  if (n && n.minigameinsanityintro) {
    return false;
  }
  if (Ao("obj_susiezilla_gamecontroller") || Ao("obj_chefs_game") || Ao("obj_rhythmgame")) {
    return true;
  }
  let nv = Ao("obj_tenna_minigame_ui");
  if (nv && nv.enabled === true || Ao("obj_shootout_controller") && Ao("obj_tenna_enemy") || n && n.con === 0 && n.screenshot) {
    return true;
  }
  let ne = Ao("obj_shadowman_sharpshoot_cursor");
  return !!ne && ne.disablesbattleui === true;
}, "minigameHidesUI");
var n0 = IC(() => Ig.chapter !== 3 ? false : Ig.minigameStage || Ao("obj_susiezilla_gamecontroller") || Ao("obj_chefs_game") || Ao("obj_rhythmgame") || Ao("obj_shootout_controller") || Ao("obj_gameover_board") || Ao("obj_gameover_minigame") ? true : At(), "tensionbarHidden");
var n1 = IC(() => At() || AX(), "battleUIHidden");
var n2 = IC(() => {
  if (Ig.chapter !== 3) {
    return false;
  }
  if (Ig.minigameStage) {
    return true;
  }
  let A = Ao("obj_rouxls_ch3_enemy");
  if (A && A.intro < 2) {
    return true;
  }
  let n = Ao("obj_tenna_board4_enemy");
  if (n && n.intro < 2) {
    return true;
  }
  let nv = Ao("obj_elnina_lanino_controller");
  if (nv && nv.intro < 4) {
    return true;
  }
  let ne = Ao("obj_tennabattleconvo_controller");
  return !!ne && !!(ne.introcon < 2) || !!Ao("obj_susiezilla_gamecontroller") || !!Ao("obj_chefs_game") || !!Ao("obj_rhythmgame") || !!Ao("obj_shootout_controller") && !!Ao("obj_tenna_enemy");
}, "ch3StepHeld");
var n3 = IC(() => AX(), "minigameOnScreen");
var n4 = IC(() => At() || n2(), "controllerHeld");
var n5 = class Lt extends Id {
  create() {
    let A = If();
    let nv = () => new Array(A).fill(0);
    this.active = 0;
    this.fastmode = 1;
    if (this.fastmode === 1) {
      this.active = 1;
    }
    this.goahead = 0;
    this.spelluse = 0;
    this.spelldelay = new Array(A).fill(10);
    this.maxdelay = 0;
    this.maxdelaytimer = 0;
    this.havechar = nv();
    this.charitem = nv();
    this.charspell = nv();
    for (let nX = 0; nX < If(); nX++) {
      if (Ig.charaction[nX] === 1) {
        this.havechar[nX] = 1;
      }
      if (Ig.charaction[nX] === 4 || Ig.charaction[nX] === 2) {
        if (this.maxdelay === 0) {
          this.maxdelay = 25;
        }
        this.maxdelay += 15;
        this.spelluse = 1;
        if (Ig.charaction[nX] === 4) {
          this.charitem[nX] = 1;
        } else {
          this.charspell[nX] = 1;
        }
      }
    }
    this.spelluse = 0;
    this.fade = 0;
    this.fadeamt = 0;
    this.fakefade = 0;
    this.bcolor = IK.navy;
    let ne = [Ic(16776960), Ic(16711935), Ic(65280)];
    let nY = [Iq(IK.aqua, IK.white, 0.5), Iq(IK.fuchsia, IK.white, 0.5), Iq(IK.lime, IK.white, 0.5)];
    this.charcolor = [];
    this.boltcolor = [];
    for (let L0 = 0; L0 < A; L0++) {
      let L1 = IR(Ig.char[L0]) - 1;
      this.charcolor[L0] = ne[L1] ?? ne[0];
      this.boltcolor[L0] = nY[L1] ?? nY[0];
      let L2 = V(Ig.char[L0]);
      if (L2) {
        this.charcolor[L0] = L2;
        this.boltcolor[L0] = Iq(L2, IK.white, 0.5);
      }
    }
    this.target = 0;
    for (let L3 = 0; L3 < A; L3++) {
      Ig.hittarget[L3] = Ig.chartarget[L3];
    }
    this.imagetimer = 0;
    this.posttimer = 0;
    this.timermax = 50;
    if (!this.havechar.some(L4 => L4 === 1)) {
      this.timermax = 3;
    }
    this.boltspeed = 8;
    this.boltx = 0;
    this.points = nv();
    this.pressbuffer = new Array(Math.max(4, Ig.charbase ? Ig.charbase.length : 4)).fill(0);
    this.charbolt = new Array(A).fill(1);
    for (let L4 = 0; L4 < A; L4++) {
      if (this.havechar[L4] === 0) {
        this.charbolt[L4] = 0;
      }
    }
    this.attacked = nv();
    this.bolttotal = this.charbolt.reduce((L5, L6) => L5 + L6, 0);
    this.boltuse = nv();
    this.boltchar = [];
    this.boltframe = [];
    this.boltalive = [];
    this.boltred = [];
    let nS = -1;
    let nC = 0;
    let no = 10;
    if (Ig.flag[13] === 0) {
      no += 2;
    }
    if (A > 6) {
      no = Math.max(4, Math.round(no * 6 / Math.min(A, 18)));
    }
    for (let L5 = 0; L5 < this.bolttotal; L5++) {
      this.boltalive[L5] = 1;
      let L6 = [];
      for (let LI = 0; LI < If(); LI++) {
        if (this.havechar[LI] === 1) {
          L6.push(LI);
        }
      }
      let L7 = L6.filter(LA => this.boltuse[LA] < this.charbolt[LA]);
      let L8 = L7.length ? L7 : L6;
      if (!L8.length) {
        this.boltalive[L5] = 0;
        continue;
      }
      let L9 = L8[Math.min(L8.length - 1, Math.floor(Is(L8.length)))];
      this.boltchar[L5] = L9;
      this.boltuse[L9]++;
    }
    for (let LA = 0; LA < this.bolttotal; LA++) {
      this.boltred[LA] = 0;
      nC += nS;
      this.boltframe[LA] = 30 + nC;
      if (LA < this.bolttotal - 1) {
        if (nS !== 0 && this.boltchar[LA] !== this.boltchar[LA + 1]) {
          nS = IT(0, no, no * 1.5);
          this.boltred[LA] = 1;
        } else {
          nS = IT(no, no * 1.5);
        }
      } else {
        nS = IT(no, no * 1.5);
      }
    }
    this.haveauto = 0;
    this.autoed = 0;
    {
      let Ln = IG(2);
      let LL = Ln >= 0 ? Ig.char[Ln] : 0;
      if (Ln >= 0 && Ig.charauto[LL] === 1) {
        this.sus = Ln;
        if (Ig.hp[LL] >= 0 && Ig.charmove[Ln] === 1) {
          this.haveauto = 1;
          if (this.timermax === 3) {
            this.timermax = 50;
          }
        }
      }
    }
  }
  boltcheckOne() {
    let A = -1;
    let nv = -1;
    this.pressbuffer = [5, 5, 5, 5];
    let ne = -1;
    let nY = 999;
    for (let nC = 0; nC < this.bolttotal; nC++) {
      if (this.boltalive[nC] === 1) {
        let no = this.boltframe[nC] - this.boltx;
        if (no < 15 && no > -5) {
          if (no === nY) {
            A = 1;
            nv = nC;
          }
          if (no < nY) {
            nY = no;
            ne = nC;
          }
        }
      }
    }
    let nS = nX => {
      let L0 = this.boltchar[nX];
      let L1 = IF(nY);
      let L2 = IZ(this.x + 80 + this.boltframe[nX] * this.boltspeed - this.boltx * this.boltspeed, this.y + (this.rowh ?? 38) * (this.rowOf ? this.rowOf(L0) : L0), AF);
      if (ID.nomiss) {
        L1 = 0;
      }
      if (L1 === 0) {
        this.points[L0] += 150;
        L2.image_blend = IK.yellow;
        L2.mag = 0.2;
      }
      if (L1 === 1) {
        this.points[L0] += 120;
      }
      if (L1 === 2) {
        this.points[L0] += 110;
      }
      if (L1 >= 3) {
        this.points[L0] += 100 - IF(nY) * 2;
        L2.image_blend = this.boltcolor[L0];
      }
      if (L1 >= 15) {
        L2.image_blend = this.charcolor[L0];
      }
      this.boltalive[nX] = 0;
    };
    if (ne !== -1) {
      nS(ne);
      if (A === 1) {
        nS(nv);
      }
    }
  }
  boltcheck(A) {
    this.pressbuffer[Ig.char[A]] = 5;
    let n = -1;
    let nv = 99;
    for (let ne = 0; ne < this.bolttotal; ne++) {
      if (this.boltchar[ne] === A && this.boltalive[ne] === 1) {
        let nY = this.boltframe[ne] - this.boltx;
        if (nY < 15 && nY > -5 && nY < nv) {
          nv = nY;
          n = ne;
        }
      }
    }
    if (n !== -1) {
      let nS = IF(nv);
      let nC = IZ(this.x + 80 + this.boltframe[n] * this.boltspeed - this.boltx * this.boltspeed, (this.barY ?? this.y) + (this.rowh ?? 38) * A, AF);
      if (nS === 0) {
        this.points[A] += 150;
        nC.image_blend = IK.yellow;
        nC.mag = 0.2;
      }
      if (nS === 1) {
        this.points[A] += 120;
      }
      if (nS === 2) {
        this.points[A] += 110;
      }
      if (nS >= 3) {
        this.points[A] += 100 - IF(nv) * 2;
        nC.image_blend = this.boltcolor[A];
      }
      if (nS >= 15) {
        nC.image_blend = this.charcolor[A];
      }
      this.boltalive[n] = 0;
    }
  }
  userEvent(A) {
    if (A === 1 && I8() > 0) {
      if (Ig.chapter >= 4 && In.attackpressHit) {
        In.attackpressHit(this);
      }
      let n = Ig.chapter === 2 && Iv.first("o_boxingcontroller");
      if (n) {
        let nY = this.points[0];
        n.punchcon = 1;
        n.damageoverride = Ir(Ig.battleat[0] * nY / 10);
        n.acttoenemytalktransition = 1;
        if (nY === 150 || nY === 300) {
          n.tpoverride = 5;
        }
        if (nY === 0) {
          n.damageoverride = 1;
        }
        return;
      }
      let nv = this.target;
      let ne = In.charinstance(nv);
      if (ne) {
        ne.points = this.points[nv];
        ne.state = 1;
        ne.attacktimer = 0;
      }
    }
  }
  draw(nv) {
    if (n1() || (this.maxdelaytimer++, this.maxdelaytimer >= this.maxdelay && (this.active = 1), this.active !== 1)) {
      return;
    }
    let ne = If();
    let nY = 38;
    let nS = 1;
    let nC = ne > 3;
    let no = L3 => nC ? L3 % 3 : L3;
    let nX = this.x;
    let L0 = this.y;
    this.rowh = nY;
    this.barY = L0;
    this.rowOf = no;
    let L1 = [];
    if (nC) {
      for (let L3 = 0; L3 < 3; L3++) {
        let L4 = -1;
        let L5 = 1000000000;
        for (let L6 = 0; L6 < this.bolttotal; L6++) {
          let L7 = this.boltchar[L6];
          if (this.boltalive[L6] === 1 && L7 % 3 === L3 && this.boltframe[L6] < L5) {
            L5 = this.boltframe[L6];
            L4 = L7;
          }
        }
        if (L4 < 0) {
          for (let L8 = L3; L8 < ne; L8 += 3) {
            if (this.havechar[L8] === 1 && Ig.charauto[Ig.char[L8]] === 0) {
              L4 = L8;
              break;
            }
          }
        }
        L1.push([L4 < 0 ? L3 : L4, L3]);
      }
    } else {
      for (let L9 = 0; L9 < ne; L9++) {
        L1.push([L9, L9]);
      }
    }
    for (let [LI, LA] of L1) {
      nv.draw_set_color(this.bcolor);
      if (Ig.chapter >= 4) {
        if ((LA === 1 || LA === 2) && this.havechar.some(Ln => Ln === 1)) {
          nv.draw_rectangle(nX + 77, L0 + nY * LA, nX + 300, L0 + nY * LA + 1, false);
        }
      } else if (LA >= 1) {
        nv.draw_rectangle(nX, L0 + nY * LA, nX + 300, L0 + nY * LA + 2, false);
      }
      if (Ig.char[LI] !== 0 && Ig.charauto[Ig.char[LI]] === 0 && this.havechar[LI] === 1) {
        let Ln = IR(Ig.char[LI]);
        let LL = Ln === 1 ? IK.blue : Ln === 2 ? IK.purple : IK.green;
        let Lw = M(Ig.char[LI]);
        if (Lw) {
          LL = Lw;
        }
        if (this.pressbuffer[Ig.char[LI]] > 0) {
          LL = Iq(LL, IK.white, this.pressbuffer[Ig.char[LI]] / 5);
        }
        nv.draw_set_color(LL);
        let LH = Ig.chapter >= 4 ? 1 : 0;
        nv.draw_rectangle(nX + 78, L0 + nY * LA + LH, nX + 80 + this.boltspeed * 15, L0 + nY * LA + nY - 2, true);
        nv.draw_rectangle(nX + 79, L0 + nY * LA + 1 + LH, nX + 80 + this.boltspeed * 15 - 1, L0 + nY * LA + nY - 3, true);
        let LW = Math.min(3, Math.max(1, Ln));
        let Lg = V(Ig.char[LI]) ? Iq(V(Ig.char[LI]), IK.white, 0.35) : IK.white;
        let LR = k[Ig.charhero && Ig.charhero[Ig.char[LI]] || d[LW - 1]];
        let LG = LR && LR.head && Ib[LR.head];
        if (LG && (LR.custom || LR.head !== k[d[LW - 1]].head)) {
          let LE = Ib[LR.head];
          nv.draw_sprite_part_ext(LR.head, 0, 0, 0, LE.w, Math.min(LE.h, 36), nX + 2, L0 + nY * LA + Math.max(1, 36 - Math.min(LE.h, 36) >> 1), 1, 1, IK.white, 1);
        } else {
          nv.draw_sprite_ext("spr_pressfront", LW - 1, nX, L0 + nY * LA, 1, nS, 0, Lg, 1);
          if (LG && Ib[LR.head].w <= 40 && LR.head !== k[d[LW - 1]].head) {
            nv.draw_sprite_ext(LR.head, 0, nX + 2, L0 + nY * LA + nS * 7, nS, nS, 0, IK.white, 1);
          }
        }
        nv.draw_sprite_ext("spr_pressfront_b", Ig.flag[13] === 0 ? 0 : Math.min(2, LA), nX, L0 + nY * LA, 1, nS, 0, IK.white, 1);
        nv.draw_sprite_ext("spr_pressspot", LW - 1, nX + 80, L0 + nY * LA, 1, nS, 0, Lg, 1);
      }
    }
    let L2 = new Array(ne).fill(0);
    for (let Lf = 0; Lf < this.bolttotal; Lf++) {
      let La = this.boltchar[Lf];
      if (this.boltframe[Lf] - this.boltx < -5) {
        this.boltalive[Lf] = 0;
      }
      let LN = 1;
      if (this.boltframe[Lf] - this.boltx < 0) {
        LN = 1 + (this.boltframe[Lf] - this.boltx) / 3;
      } else if (this.imagetimer === 0 && this.boltalive[Lf] === 1) {
        let LJ = IZ(nX + 80 + this.boltframe[Lf] * this.boltspeed - this.boltx * this.boltspeed, L0 + nY * no(La), X);
        LJ.sprite_index = "spr_attackspot";
        LJ.image_alpha = 0.4;
        LJ.depth = -119;
        if (nC) {
          LJ.image_blend = this.boltcolor[La];
        }
      }
      if (this.boltalive[Lf] === 1) {
        nv.draw_sprite_ext("spr_attackspot", 0, nX + 80 + this.boltframe[Lf] * this.boltspeed - this.boltx * this.boltspeed, L0 + nY * no(La), 1, 1, 0, nC ? this.boltcolor[La] : IK.white, LN);
        L2[this.boltchar[Lf]]++;
      }
    }
    for (let LF = 0; LF < If(); LF++) {
      if (L2[LF] === 0 && this.havechar[LF] === 1 && this.attacked[LF] === 0) {
        this.attacked[LF] = 1;
        this.target = LF;
        this.userEvent(1);
      }
    }
    if (I8() > 0) {
      if (Ig.flag[13] === 1 && ne <= 3) {
        if (Iz() && this.havechar[0] === 1) {
          this.boltcheck(0);
        }
        if (IO() && this.havechar[1] === 1) {
          this.boltcheck(1);
        }
        if (Ik() && this.havechar[2] === 1) {
          this.boltcheck(2);
        }
      } else if (Iz()) {
        this.boltcheckOne();
      }
    } else {
      this.fakefade = 1;
      if (this.posttimer < this.timermax - 35) {
        this.posttimer = this.timermax - 34;
      }
    }
    this.imagetimer++;
    this.boltx++;
    for (let Lp = 0; Lp < this.pressbuffer.length; Lp++) {
      this.pressbuffer[Lp]--;
    }
    if (this.imagetimer > 1) {
      this.imagetimer = 0;
    }
    this.goahead = 0;
    this.goahead = 1;
    for (let Ly = 0; Ly < ne; Ly++) {
      if (this.attacked[Ly] !== 1 && this.havechar[Ly] === 1) {
        this.goahead = 0;
      }
    }
    if (I8() === 0) {
      this.goahead = 1;
    }
    if (this.goahead === 1) {
      this.posttimer++;
      if (this.posttimer > this.timermax - 35 && this.haveauto === 1 && this.autoed === 0 && I8() > 0) {
        let LD = In.charinstance(this.sus);
        if (LD) {
          LD.points = 160;
          if (Ig.automiss && Ig.automiss[Ig.chartarget[this.sus]] === 1) {
            LD.points = 0;
          }
          LD.state = 1;
          LD.attacktimer = 0;
          LD.is_auto_susie = 1;
        }
        this.posttimer -= 25;
        this.autoed = 1;
      }
      if (this.posttimer > this.timermax) {
        this.fade = 1;
        Iv.with("obj_heroparent", LZ => {
          if (LZ.state === 1) {
            LZ.state = 0;
          }
          LZ.attacked = 0;
          LZ.itemed = 0;
        });
        if (I8() === 0) {
          nJ();
        } else if (Ig.chapter < 3 || Ig.mnfight !== 1.5 && Ig.mnfight !== 2) {
          Ig.mnfight = 1;
          Ig.myfight = -1;
        }
      }
    }
    if (this.fade === 1 || this.fakefade === 1) {
      this.fadeamt += 0.08;
      nv.draw_set_color(IK.black);
      nv.draw_set_alpha(Math.min(1, this.fadeamt));
      nv.draw_rectangle(nX - 1, Ig.chapter >= 4 ? L0 : L0 - 1, nX + 640, L0 + 300, false);
      nv.draw_set_alpha(1);
      if (this.fade === 1 && this.fadeamt > 1) {
        this.instance_destroy();
      }
    }
  }
};
IC(n5, "obj_attackpress");
Io(n5, "kinds", Ij("obj_attackpress", Id));
Io(n5, "defaultDepth", 1);
var n6 = n5;
var n7 = class wi extends Id {
  create() {
    let A = this.slots = Math.max(3, If());
    this.spelltimer = 0;
    this.spelltotal = 0;
    this.char = 0;
    this.castyet = 0;
    this.re_castyet = 0;
    this.active = 0;
    this.alarm[0] = 5;
    this.spellwriter = null;
    this.using = new Array(A).fill(0);
    this.gotspell = new Array(A).fill(0);
    this.gotitem = new Array(A).fill(0);
    this.visible = false;
  }
  writer(A) {
    return m(A) || o();
  }
  pose(A, n) {
    if (A) {
      if (Ig.charaction[n] === 2 && P(Ig.charspecial[n])) {
        c(A, Ig.charspecial[n]);
        A.state = 6;
        A.acttimer = 0;
        A.actcast = 1;
        A.alarm[4] = 15;
        return;
      }
      if (Ig.charaction[n] === 2) {
        q(A, Ig.charspecial[n]);
      }
      A.state = Ig.charaction[n] === 2 ? 2 : 4;
      A.attacktimer = 0;
    }
  }
  alarmEvent(A) {
    if (A === 0) {
      for (let n = 0; n < If(); n++) {
        if ((Ig.charaction[n] === 2 || Ig.charaction[n] === 4) && (this.spelltotal++, this.using[n] = 1, Ig.charaction[n] === 2 ? this.gotspell[n] = 1 : this.gotitem[n] = 1, this.castyet === 0)) {
          let nv = In.charinstance(n);
          this.pose(nv, n);
          this.castyet = 1;
          this.char = n + 1;
          nb(Ig.charspecial[n], n);
          this.spellwriter = this.writer(Ig.charspecial[n]);
        }
      }
      this.active = 1;
      Ig.spelldelay = 90;
    }
  }
  step() {
    if (this.active === 1 && (this.spelltimer++, this.spelltimer >= Ig.spelldelay && !Iv.exists(this.spellwriter))) {
      let A = () => {
        na();
        if (Iv.exists(this.spellwriter)) {
          this.spellwriter.instance_destroy();
        }
        this.instance_destroy();
      };
      if (this.char >= this.slots || this.spelltotal === 1) {
        A();
        return;
      }
      if (I8() > 0) {
        let n = this.char;
        if (this.gotitem[n] === 1 || this.gotspell[n] === 1) {
          this.re_castyet = 1;
          let nv = In.charinstance(n);
          if (nv && IW(Ig.charspecial[n]) && this.gotspell[n] === 1) {
            this.pose(nv, n);
          } else if (nv) {
            nv.state = this.gotitem[n] === 1 ? 4 : 2;
          }
          if (Iv.exists(this.spellwriter)) {
            this.spellwriter.instance_destroy();
          }
          nb(Ig.charspecial[n], n);
          this.spellwriter = this.writer(Ig.charspecial[n]);
        }
        Ig.spelldelay = 90;
        if (this.re_castyet === 0) {
          Ig.spelldelay = 1;
        }
        this.char++;
        for (let ne = 0; ne < this.slots - 1; ne++) {
          if (this.char < this.slots && this.using[this.char] === 0) {
            this.char++;
          }
        }
        this.spelltimer = 0;
        this.re_castyet = 0;
      } else {
        A();
      }
    }
  }
};
IC(n7, "obj_spellphase");
Io(n7, "kinds", Ij("obj_spellphase", Id));
Io(n7, "defaultDepth", 0);
var n8 = n7;
var n9 = class wt extends Id {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.target = null;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 1;
    this.caster = 0;
    this.star = 0;
    let A = Iv.first("obj_herosusie");
    if (A) {
      this.depth = A.depth;
      A.visible = false;
    }
    this.red = 0;
  }
  step() {
    this.image_index = this.t / 2;
    if (this.t >= 28) {
      let A = Iv.first("obj_herosusie");
      if (A) {
        A.visible = true;
      }
      this.instance_destroy();
      return;
    }
    if (Iv.exists(this.target) && this.t === 10) {
      Im("snd_rudebuster_swing");
      let n = IZ(this.x + 40, this.y + 30, nn);
      n.caster = this.caster;
      n.target = this.target;
      n.damage = this.damage;
      n.star = this.star;
      if (this.red === 1) {
        n.red = 1;
      }
    }
    this.t++;
  }
  destroy() {
    let A = Iv.first("obj_herosusie");
    if (A) {
      A.visible = true;
    }
  }
};
IC(n9, "obj_rudebuster_anim");
Io(n9, "kinds", Ij("obj_rudebuster_anim", Id));
Io(n9, "defaultDepth", 0);
Io(n9, "defaultSprite", "spr_susie_rudebuster");
var nI = n9;
var nA = class HQ extends Id {
  create() {
    this.target = null;
    this.damage = 1;
    this.star = 0;
    this.caster = 0;
    this.image_alpha = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 1;
    this.t = 0;
    this.explode = 0;
    this.bolt_timer = 0;
    this.chosen_bolt = 0;
    this.final_bolt = 0;
    this.red = 0;
    this.aft = [];
  }
  step() {
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let A = this.target;
      let n = Iv.first("obj_queenshield_enemy");
      if (n) {
        this.depth = n.depth - 1;
        this.cx = n.x + 24;
        this.cy = n.y + 140;
      } else {
        this.cx = Ig.monsterx[A.myself];
        this.cy = Ig.monstery[A.myself];
      }
      this.direction = Ih(this.x, this.y, this.cx, this.cy) - 20;
      this.speed = 24;
      this.friction = -1.5;
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (Iz() && this.bolt_timer >= 4 && this.chosen_bolt === 0) {
        this.chosen_bolt = this.bolt_timer;
      }
      let nv = Ih(this.x, this.y, this.cx, this.cy);
      this.direction += Ix(nv, this.direction) / 4;
      this.image_angle = this.direction;
      if (IB(this.x, this.y, this.cx, this.cy) <= 40) {
        this.final_bolt = Ig.chapter >= 3 ? this.bolt_timer : this.chosen_bolt;
        this.visible = false;
        this.explode = 1;
        this.t = 1;
        this.speed = 0;
        this.friction = 0;
      }
    }
    if (this.explode === 1) {
      if (this.t === 1) {
        if (this.chosen_bolt > 0) {
          let nS = this.final_bolt - this.chosen_bolt;
          let nC = {
            0: 30,
            1: 28,
            2: 22,
            3: 20,
            4: 13,
            5: 11,
            6: 10
          }[nS];
          if (nC) {
            this.damage += nC;
          }
          if (IF(nS) <= 2) {
            Im("snd_scytheburst");
          }
        }
        if (Ig.chapter >= 4 && In.rudebusterHit) {
          In.rudebusterHit(this, "before");
        }
        if (this.red === 1) {
          this.damage += 90;
        }
        Ig.hittarget[this.star] = 0;
        if (Ig.chapter === 3 && Iv.exists("obj_knight_enemy")) {
          this.damage = Ir(this.damage / 2);
        }
        let ne = Iv.first("obj_queenshield_enemy");
        let nY = ne && Iv.first("obj_queen_enemy");
        if (nY) {
          nY.shieldhp -= this.damage;
          ne.con = 1;
          ne.event_user(0);
        } else {
          let no = Iw(this.star, this.damage, this.caster);
          if (no && this.sprite_index === "spr_rudebuster_beam_green") {
            no.type = 1.5;
            no.ystart -= 30;
          }
        }
        if (!(Ig.chapter >= 4) || !In.rudebusterHit || !In.rudebusterHit(this, "after")) {
          Im("snd_rudebuster_hit");
        }
        for (let nX = 0; nX < 8; nX++) {
          let L0 = IZ(this.cx, this.cy, X);
          L0.sprite_index = this.sprite_index;
          L0.image_index = 4;
          L0.image_xscale = 2;
          L0.image_yscale = 2;
          L0.image_angle = 45 + nX * 90;
          L0.direction = L0.image_angle;
          L0.speed = 25;
          L0.depth = this.depth - 10;
          L0.fadespeed = 0.06;
          L0.image_speed = 0;
        }
      }
      if (this.t >= 18) {
        this.instance_destroy();
      }
    }
    if (this.explode === 0) {
      let L1 = IZ(this.x, this.y, X);
      L1.sprite_index = this.sprite_index;
      L1.image_yscale = 1.8;
      L1.image_xscale = 2;
      L1.image_angle = this.image_angle;
      L1.image_index = 4;
      L1.image_speed = 0;
      L1.image_alpha = this.image_alpha - 0.2;
      L1.fadespeed = 0.07;
      L1.depth = this.depth + 1;
    }
    this.t++;
  }
};
IC(nA, "obj_rudebuster_bolt");
Io(nA, "kinds", Ij("obj_rudebuster_bolt", Id));
Io(nA, "defaultDepth", -10);
Io(nA, "defaultSprite", "spr_rudebuster_beam");
var nn = nA;
var nL = class Hh extends Id {
  create() {
    this.con = 5;
    this.target = null;
    this.fail = 1;
    this.flashcolor = IK.blue;
    this.visible = false;
    this.t = 0;
  }
  step() {
    let A = this.target;
    if (!Iv.exists(A)) {
      this.instance_destroy();
      return;
    }
    this.t++;
    if (this.t <= 8) {
      A.image_blend = Iq(A.image_blend, this.flashcolor, 0.12);
    } else if (this.t <= 16) {
      A.image_blend = Iq(A.image_blend, IK.white, 0.16);
    } else {
      A.image_blend = IK.white;
      this.instance_destroy();
    }
  }
};
IC(nL, "obj_pacifyspell");
Io(nL, "kinds", Ij("obj_pacifyspell", Id));
Io(nL, "defaultDepth", 0);
var nw = nL;
function nH(A) {
  let n = Ig.chartarget[A];
  let nv = 0;
  if (n === 0 && Ig.monster[0] === 0) {
    n = 1;
  }
  if (n === 1 && Ig.monster[1] === 0) {
    n = 2;
  }
  if (n === 2) {
    if (Ig.monster[2] === 0) {
      n = 3;
    }
    if (n === 3 && Ig.monster[0] === 1) {
      n = 0;
    }
    if (n === 3 && Ig.monster[1] === 1) {
      n = 1;
    }
    if (n === 3) {
      nv = 1;
    }
  }
  Ig.chartarget[A] = n;
  let ne = In.charinstance(A);
  if (ne) {
    ne.cancelattack = nv;
  }
  return nv;
}
IC(nH, "scr_retarget");
function nW(A) {
  let n = 0;
  if (A === 0 && Ig.monster[0] === 0) {
    A = 1;
  }
  if (A === 1 && Ig.monster[1] === 0) {
    A = 2;
  }
  if (A === 2) {
    if (Ig.monster[2] === 0) {
      A = 3;
    }
    if (A === 3 && Ig.monster[0] === 1) {
      A = 0;
    }
    if (A === 3 && Ig.monster[1] === 1) {
      A = 1;
    }
    if (A === 3) {
      n = 1;
    }
  }
  return [A, n];
}
IC(nW, "retargetStar");
function ng(A) {
  let n = 1;
  if (Ig.hp[Ig.char[A]] <= 0) {
    n = 0;
  }
  if (Ig.acting[A] === 1) {
    n = 0;
  }
  if (Ig.char[A] === 0) {
    n = 0;
  }
  if (Ig.charmove[A] === 0) {
    n = 0;
  }
  if (Ig.charauto[Ig.char[A]] === 1) {
    n = 0;
  }
  return n;
}
IC(ng, "scr_charcan");
var nR = IC(() => If(), "DONE_TURN");
function nG() {
  let A = nz();
  let n = Ig.charturn;
  if (Ig.chapter >= 4 && If() <= 3 && In.chapterNexthero && In.chapterNexthero(A)) {
    return;
  }
  if (Ig.chapter >= 4 && Ig.charturn === 0 && In.nextheroSkip && In.nextheroSkip(A)) {
    Ig.charturn = nR();
    nf();
    return;
  }
  let nv = -1;
  for (let ne = Ig.charturn + 1; ne < If(); ne++) {
    if (Ig.charmove[ne] === 1 && ng(ne) && Ig.acting[ne] === 0 && !Y(ne)) {
      nv = ne;
      break;
    }
  }
  if (nv === -1) {
    nf();
    return;
  }
  Ig.charturn = nv;
  Ig.bmenuno = 0;
  if (A) {
    Ig.temptension[Ig.charturn] = Ig.tension;
    for (let nY = 0; nY < 12; nY++) {
      A.tempitem[nY][Ig.charturn] = A.tempitem[nY][n];
    }
  }
  if (Ig.chapter >= 4 && A && A.disablesusieralseiattack === 1 && (Ig.charturn === 1 || Ig.charturn === 2)) {
    Ig.bmenucoord[0][Ig.charturn] = 1;
  }
}
IC(nG, "scr_nexthero");
function nE() {
  let A = nz();
  let n = 0;
  let nv = ne => Ig.charmove[ne] === 1 && Ig.charauto[Ig.char[ne]] !== 1;
  if (Ig.charturn === 1 && nv(0)) {
    Ig.charturn = 0;
    n = 1;
  }
  if (Ig.charturn >= 2) {
    n = 1;
    let ne = -1;
    for (let nY = Ig.charturn - 1; nY >= 1; nY--) {
      if (nv(nY) && Ig.acting[nY] === 0 && !Y(nY)) {
        ne = nY;
        break;
      }
    }
    if (ne !== -1) {
      Ig.charturn = ne;
    } else if (nv(0)) {
      Ig.charturn = 0;
    }
  }
  if (n === 1) {
    Ig.bmenuno = 0;
    if (Ig.chapter >= 2) {
      let nS = IR(Ig.char[Ig.charturn]);
      if (nS === 4) {
        Iv.with("obj_monsterparent", nC => {
          nC.actingnoe = 0;
        });
      }
      if (nS === 3) {
        Iv.with("obj_monsterparent", nC => {
          nC.actingral = 0;
        });
      }
      if (nS === 2) {
        Iv.with("obj_monsterparent", nC => {
          nC.actingsus = 0;
        });
      }
      if (Ig.actingsingle) {
        Ig.actingsingle[Ig.charturn] = 0;
      }
      if (Ig.actingsimul) {
        Ig.actingsimul[Ig.charturn] = 0;
      }
    }
    Ig.faceaction[Ig.charturn] = 0;
    Ig.chartarget[Ig.charturn] = 0;
    Ig.charaction[Ig.charturn] = 0;
    Ig.charspecial[Ig.charturn] = 0;
    D(Ig.charturn);
    if (A) {
      A.movenoise = 1;
    }
  }
  if (Ig.charturn === 0) {
    Iv.with("obj_monsterparent", nC => {
      nC.acting = 0;
    });
    for (let nC = 0; nC < If(); nC++) {
      Ig.acting[nC] = 0;
    }
    Ig.tension = Ig.temptension[0];
    if (A) {
      for (let no = 0; no < 12; no++) {
        A.tempitem[no][0] = Ig.item[no];
      }
    }
  } else {
    Ig.tension = Ig.temptension[Ig.charturn];
    if (A) {
      for (let nX = 0; nX < 12; nX++) {
        A.tempitem[nX][Ig.charturn] = A.tempitem[nX][Ig.charturn - 1];
      }
    }
  }
}
IC(nE, "scr_prevhero");
function nf() {
  if (Ig.monster && Ig.monster.__customBoard && In.customEndturn) {
    In.customEndturn();
  }
  let A = nz();
  if (Ig.chapter >= 4 && A && In.chapterEndturn && In.chapterEndturn(A)) {
    if (If() > 3 && Ig.myfight === 1) {
      let ne = false;
      for (let nY = 3; nY < If(); nY++) {
        if (Ig.charaction[nY] === 2 || Ig.charaction[nY] === 4) {
          ne = true;
        }
      }
      if (ne) {
        Iv.with("obj_attackpress", nS => nS.instance_destroy());
        Ig.myfight = 4;
        IZ(0, 0, n8);
      }
    }
    return;
  }
  if (A) {
    for (let nS = 0; nS < 12; nS++) {
      Ig.item[nS] = A.tempitem[nS][Ig.charturn];
    }
    for (let nC = 0; nC < 12; nC++) {
      for (let no = 0; no < If(); no++) {
        A.tempitem[nC][no] = Ig.item[nC];
      }
    }
  }
  Iv.with("obj_writer", nX => nX.instance_destroy());
  Iv.with("obj_face", nX => nX.instance_destroy());
  Ig.attacking = 0;
  for (let nX = 0; nX < If(); nX++) {
    if (Ig.charauto[Ig.char[nX]] === 1 && Ig.hp[Ig.char[nX]] > 0) {
      if (Ig.monster[2] === 1) {
        Ig.chartarget[nX] = 2;
      }
      if (Ig.monster[1] === 1) {
        Ig.chartarget[nX] = 1;
      }
      if (Ig.monster[0] === 1) {
        Ig.chartarget[nX] = 0;
      }
    }
    if (Ig.charaction[nX] === 1) {
      Ig.attacking = 1;
    }
  }
  if (A) {
    A.messagepriority = -1;
    A.attackpriority = -1;
  }
  if (Ig.chapter === 3 && A) {
    A.idefendedthisturn = 0;
  }
  let n = (Ig.chapter === 2 || Ig.chapter === 3) && In.scr_nextact && Ig.actingsingle && Ig.actingsingle.slice(0, Ia()).includes(1);
  let nv = IE();
  if (Ig.acting[nv] === 0 && !n) {
    na();
  } else {
    Ig.charturn = nR();
    Ig.myfight = 3;
    Ig.currentactingchar = 0;
    if (n && Ig.acting[nv] === 0) {
      In.scr_nextact.call({});
    }
    if (Ig.chapter === 2 && Iv.exists("obj_sweet_enemy") && [0, 1, 2].every(L0 => Ig.actingsingle[L0] === 1 == (L0 === nv))) {
      Iv.first("obj_sweet_enemy").simultotal_funny = 1;
    }
    if (Ig.chapter >= 2 && In.scr_act_simul && Ig.acting[nv] === 1 && Ig.actingsimul[nv] === 1) {
      In.scr_act_simul.call({});
    }
  }
}
IC(nf, "scr_endturn");
function na() {
  let A = nz();
  if (!A || Ig.chapter >= 4 && In.chapterAttackphase && If() <= 3 && In.chapterAttackphase(A)) {
    return;
  }
  if (Ig.chapter >= 5 && If() > 3 && Ig.hittarget) {
    for (let nv = 0; nv < 3; nv++) {
      Ig.hittarget[nv] = 0;
    }
  }
  let n = 0;
  if (I8() === 0) {
    n = 1;
  }
  if (n === 0) {
    let ne = 1;
    Ig.charturn = nR();
    for (let nY = 0; nY < If(); nY++) {
      if (Ig.charaction[nY] === 4 || Ig.charaction[nY] === 2) {
        ne = 0;
      }
    }
    if (Ig.myfight === 4) {
      ne = 1;
    }
    if (ne === 1) {
      Ig.myfight = 1;
      IZ(2, 365, n6);
    } else {
      Ig.myfight = 4;
      IZ(0, 0, n8);
    }
  } else {
    nJ();
  }
}
IC(na, "scr_attackphase");
function nN() {
  let A = nz();
  if (!A) {
    return;
  }
  l();
  Z();
  let nv = 0;
  if (I8() === 0) {
    nv = 1;
  }
  if (Ig.chapter >= 2 && Ig.flag && Ig.flag[39] === 1) {
    nv = 1;
  }
  if (nv === 0) {
    A.messagepriority = -1;
    A.attackpriority = -1;
    if (Ig.flag[14] === 0) {
      for (let nY = 0; nY < 20; nY++) {
        for (let nS = 0; nS < 20; nS++) {
          Ig.bmenucoord[nY][nS] = 0;
        }
      }
    }
    if (Ig.chapter === 3 && Iv.exists("obj_rouxls_ch3_enemy")) {
      Ig.bmenucoord[0][0] = 2;
      Ig.bmenucoord[0][1] = 2;
      Ig.bmenucoord[0][2] = 2;
      if (A.rouxlsgridenabled) {
        A.rouxlsbuttoncount_y = 4;
      }
    }
    if (Ig.chapter === 3) {
      Iv.with("obj_gameshow_battlemanager", nC => {
        nC.turns++;
      });
    }
    Ig.mnfight = 0;
    Ig.myfight = 0;
    Ig.bmenuno = 0;
    Ig.charturn = 0;
    let ne = 0;
    if (Ig.chapter >= 5 && In.chapterMnendturn) {
      In.chapterMnendturn(A);
    }
    for (let nC = 0; nC < If(); nC++) {
      let no = In.charinstance(nC);
      if (no) {
        no.tu = 0;
      }
      let nX = Ig.char[nC];
      if (Ig.char[nC] !== 0 && Ig.hp[nX] <= 0 && (Ig.chapter !== 3 || !Iv.exists("obj_knight_enemy"))) {
        let L0 = IY(Ig.maxhp[nX] / 8);
        let L1 = IZ(no.x, no.y + no.myheight - 24, Af);
        L1.delay = 1;
        L1.type = 3;
        L1.damage = II(nC, L0);
        if (Ig.hp[nX] >= 1) {
          L1.specialmessage = 4;
        }
      }
    }
    for (Ig.charturn = 0; Ig.charturn < If() && (Ig.charmove[Ig.charturn] === 0 || Ig.charauto[Ig.char[Ig.charturn]] === 1);) {
      Ig.charturn++;
    }
    if (Ig.charturn >= If()) {
      Ig.charturn = nR();
      ne = 1;
    }
    for (let L2 = 0; L2 < If(); L2++) {
      Ig.acting[L2] = 0;
      Ig.temptension[L2] = Ig.tension;
      Ig.charspecial[L2] = 0;
      Ig.targeted[L2] = 0;
      Ig.charaction[L2] = 0;
      Ig.faceaction[L2] = 0;
      if (Ig.actingsingle) {
        Ig.actingsingle[L2] = 0;
      }
      if (Ig.actingsimul) {
        Ig.actingsimul[L2] = 0;
      }
      if (Ig.actingtarget) {
        Ig.actingtarget[L2] = 0;
      }
      if (Ig.monsterattackname) {
        Ig.monsterattackname[L2] = " ";
      }
    }
    Ig.currentactingchar = 0;
    Iv.with("obj_monsterparent", L3 => {
      L3.attacked = 0;
      L3.talked = 0;
      L3.acting = 0;
      L3.actingsus = 0;
      L3.actingral = 0;
      L3.actingnoe = 0;
    });
    if (ne === 1) {
      if (IG(2) === 0 && Ig.charauto[Ig.char[0]] === 1) {
        Ig.acting[0] = 1;
        Ig.myfight = 3;
      }
      nf();
    }
    for (let L3 = 0; L3 < 12; L3++) {
      for (let L4 = 0; L4 < If(); L4++) {
        A.tempitem[L3][L4] = Ig.item[L3];
      }
    }
  } else {
    nJ();
  }
}
IC(nN, "scr_mnendturn");
function nJ() {
  Ig.myfight = 7;
  Ig.mnfight = -1;
  let A = nz();
  if (A) {
    A.victory = 1;
  }
  for (let n = 0; n < 3; n++) {
    if (Ig.monster[n] === 1) {
      let nv = In.monsterinstance(n);
      if (nv && !nv.destroyed) {
        nv.scr_monsterdefeat();
      }
    }
  }
}
IC(nJ, "scr_wincombat");
function nF() {
  if (Ig.monster && Ig.monster.__customBoard && In.customEndcombat && In.customEndcombat()) {
    return;
  }
  Ig.fighting = 0;
  Iv.with("obj_monsterparent", n => n.instance_destroy());
  Iv.with("obj_bulletparent", n => n.instance_destroy());
  Iv.with("obj_heroparent", n => n.instance_destroy());
  let A = nz();
  if (A) {
    A.instance_destroy();
  }
  if (!In.roomEndcombat || !In.roomEndcombat()) {
    Ig.battleover = Ig.battleover || "win";
    IP();
  }
}
IC(nF, "scr_endcombat");
function np(A, n = 0) {
  Ig.tension -= A;
  Ig.faceaction[Ig.charturn] = 2;
  Ig.charaction[Ig.charturn] = 2;
  let nv = Ig.bmenucoord[2][Ig.charturn];
  if (Ig.chapter !== 1 && Ig.flag[34] === 0) {
    Ig.charspecial[Ig.charturn] = (Ig.battlespell[Ig.charturn] || [])[nv];
  } else {
    Ig.charspecial[Ig.charturn] = Ig.spell[Ig.char[Ig.charturn]][nv];
  }
  Ig.tensionselect = 0;
  let ne = Ig.chapter >= 2 && Ig.charinstance ? Ig.charinstance[Ig.charturn] : null;
  if (ne && n === 1) {
    if (!ne.spellanimed) {
      ne.remspellsprite = ne.spellsprite;
      ne.remspellframes = ne.spellframes;
      ne.spellanimed = 1;
    }
    ne.spellframes = 0;
    ne.spellsprite = ne.spellreadysprite;
  } else if (ne && ne.spellanimed) {
    ne.spellframes = ne.remspellframes;
    ne.spellsprite = ne.remspellsprite;
    ne.spellanimed = 0;
  }
  C(Ig.charspecial[Ig.charturn], Ig.charturn);
  if (P(Ig.charspecial[Ig.charturn])) {
    Ig.faceaction[Ig.charturn] = 6;
  }
  nG();
}
IC(np, "scr_spellconsumeb");
function ny(A, n, nv) {
  let ne = 0;
  for (let nC = 0; nC < 12; nC++) {
    if (A(nC) !== 0) {
      ne = nC;
    }
  }
  let nY = n % 2;
  if (nv > 0) {
    if (nY === 1 && n + 1 <= ne) {
      return n + 1;
    } else if (nY <= ne) {
      return nY;
    } else {
      return 0;
    }
  }
  let nS = (ne >> 1) * 2;
  if (nS + nY <= ne) {
    return nS + nY;
  } else {
    return nS;
  }
}
IC(ny, "itemWrap");
function nD(A) {
  let n = Im("snd_cardrive");
  try {
    Il(n, 1.4);
    Ie(n, 0.8, 0);
  } catch {}
  let nv = Ig.charinstance && Ig.charinstance[A];
  if (nv) {
    let ne = IZ(nv.x, nv.y, Ay);
    ne.target = nv;
    ne.particlecolor = IK.orange;
  }
}
IC(nD, "tpItemFx");
function nZ(A, n) {
  let nv = nz();
  Ig.faceaction[Ig.charturn] = 3;
  Ig.charaction[Ig.charturn] = 4;
  Ig.charspecial[Ig.charturn] = A;
  let ne = A >= 200 ? I4(A) : null;
  if (nv && ne && ne.replace) {
    nv.tempitem[n][Ig.charturn] = 200 + ne.replace;
    nG();
    return;
  }
  if (nv) {
    let nY = Ig.charturn;
    for (let nS = n; nS < 12; nS++) {
      nv.tempitem[nS][nY] = nv.tempitem[nS + 1] ? nv.tempitem[nS + 1][nY] : 0;
    }
  }
  nG();
}
IC(nZ, "scr_itemconsumeb");
function nb(A, nv) {
  if (b(A, nv)) {
    return;
  }
  let ne = Ig.charname[Ig.char[nv]];
  let nY = Ig.chartarget[nv];
  let nS = {
    8: "* " + ne + " cast SLEEP MIST!/%",
    9: "* " + ne + " cast ICE SHOCK!/%",
    10: "* " + ne + " cast SNOWGRAVE!/%",
    1: "* " + ne + " cast RUDE BUSTER!/%",
    2: "* " + ne + " cast HEAL PRAYER!/%",
    4: "* " + ne + " used RUDE BUSTER!/%",
    5: "* " + ne + " used RED BUSTER!/%",
    6: "* " + ne + " cast DUAL HEAL!/%",
    201: "* " + ne + " used the DARK CANDY!/%",
    202: "* " + ne + " used the REVIVE MINT!/%",
    205: "* " + ne + " used the BROKEN CAKE!/%",
    206: "* " + ne + " used the TOPCAKE!/%",
    207: "* " + ne + " used the SPINCAKE!/%",
    208: "* " + ne + " used the DARKBURGER!/%",
    209: "* " + ne + " used the LANCERCOOKIE!/%",
    210: "* " + ne + " used the GIGASALAD!/%",
    211: "* " + ne + " used the CLUBS SANDWICH!/%",
    212: "* " + ne + " used the HEARTS DONUT!/%",
    213: "* " + ne + " used the CHOCO DIAMOND!/%",
    214: "* " + ne + " used the FAV SANDWICH!/%",
    215: "* " + ne + " used the ROULXS ROUX!/%"
  };
  Ig.msg = new Array(100).fill(" ");
  let nC = A >= 200 && IJ[A] ? "* " + ne + " used the " + IJ[A][0].toUpperCase() + "!/%" : "* " + ne + " cast " + String(I5(A).spellname || "a spell").toUpperCase() + "!/%";
  Ig.msg[0] = nS[A] || nC;
  if (A === 3) {
    Ig.msg[0] = "* " + ne + " cast PACIFY!/%";
    [nY] = nW(nY);
    if (Ig.monster[nY] === 1 && Ig.monsterstatus[nY] !== 1) {
      Ig.msg[0] = "* " + ne + " cast PACIFY^1!&* But the enemy wasn't \\cBTIRED\\cW.../%";
      if (Ig.mercymod[nY] >= 100) {
        Ig.msg[0] = "* " + ne + " cast PACIFY^1!&* But the foe wasn't \\cBTIRED\\cW... try \\cYSPARING\\cW!/%";
      }
    }
  }
  if (A === 100) {
    let no;
    [nY, no] = nW(nY);
    let nX = Ig.monstername[nY] || "";
    Ig.msg[0] = "* " + ne + " spared " + nX + "!/%";
    if (!(Ig.mercymod[nY] >= 100)) {
      Ig.msg[0] = "* " + ne + " spared " + nX + "^2!&* But its name wasn't \\cYYELLOW\\cW.../%";
      if (Ig.monsterstatus[nY] === 1) {
        Ig.msg[0] = "* " + ne + " spared " + nX + "^2!&* But its name wasn't \\cYYELLOW\\cW.../";
        Ig.msg[1] = "* (Try using Ralsei's \\cBPACIFY\\cW!)/%";
      }
    }
    if (no === 1) {
      Ig.msg[0] = "* " + ne + " spared!/%";
    }
  }
  if (A === 204) {
    Ig.msg[0] = "* " + ne + " read the MANUAL!/";
    Ig.msg[1] = "* But nothing happened.../%";
    let L0 = [0, 0, 0];
    for (let L1 = 0; L1 < 3; L1++) {
      if (Ig.monster[L1] !== 1) {
        continue;
      }
      let L2 = Ig.monstertype[L1];
      if (L2 === 5) {
        L0[L1] = 1;
        Ig.monsterstatus[L1] = 1;
        Ig.monstercomment[L1] = "(Tired)";
      }
      if (L2 === 6) {
        L0[L1] = 2;
      }
      if (L2 === 7 || L2 === 16) {
        L0[L1] = 3;
        let L3 = Ig.monsterinstance[L1];
        if (L3 && !L3.destroyed) {
          L3.battlecancel = 1;
          if (L3.manual === 0) {
            L3.manual = 1;
            I9(L3.myself ?? L1, 50);
          }
        }
      }
    }
    if (L0.some(L4 => L4 > 0)) {
      Ig.msg[1] = L0.map((L4, L5) => L4 === 1 ? "* " + Ig.monstername[L5] + " was \\cBbored to tears\\cW!&" : L4 === 2 ? "* " + Ig.monstername[L5] + " listened politely!&" : L4 === 3 ? "* " + Ig.monstername[L5] + " became sentimental!&" : "").join("") + "/%";
    }
  }
  if (A === 203 && (Ig.msg[0] = "* " + ne + " used the GLOWSHARD!/", Ig.msg[1] = "* But nothing happened.../%", Ig.chapter <= 2)) {
    let L4 = [];
    for (let L5 = 0; L5 < 3; L5++) {
      if (Ig.monster[L5] === 1 && Ig.monstertype[L5] === 5) {
        Ig.mercymod[L5] = 200;
        L4.push(L5);
      }
    }
    if (L4.length) {
      Ig.msg[1] = L4.map(L6 => "* " + Ig.monstername[L6] + " became enraptured!&").join("") + "/";
      Ig.msg[2] = "* The GLOWSHARD disappeared!/%";
    }
  }
}
IC(nb, "scr_spelltext");
function nm(A, n) {
  let nv = In.charinstance(A);
  if (!nv) {
    return;
  }
  let ne = IZ(nv.x, nv.y, Ay);
  ne.target = nv;
  let nY = IZ(nv.x, nv.y + nv.myheight - 24 - nv.tu * 20, Af);
  nY.delay = 8;
  nY.type = 3;
  nY.damage = n;
  if (Ig.hp[Ig.char[A]] >= Ig.maxhp[Ig.char[A]]) {
    nY.specialmessage = 3;
  }
  nv.tu++;
}
IC(nm, "healFx");
function nP(A, n) {
  II(A, n);
  nm(A, n);
  Ig.spelldelay = 15;
}
IC(nP, "scr_healitemspell");
function nq(A) {
  IA(A);
  for (let n = 0; n < If(); n++) {
    if (Ig.char[n] !== 0) {
      nm(n, A);
    }
  }
  Ig.spelldelay = 20;
}
IC(nq, "scr_healallitemspell");
function nc(A, nv) {
  let ne = Ig.chartarget[nv];
  Ig.spelldelay = 10;
  let nY = 0;
  if (!K(A, nv) && (!(Ig.chapter >= 4) || !In.chapterSpell || !In.chapterSpell(A, nv))) {
    switch (A) {
      case 2:
        {
          let nS = Ig.battlemag[nv] * 5;
          II(ne, nS);
          nm(ne, nS);
          Ig.spelldelay = 15;
          break;
        }
      case 3:
        {
          if (Ig.monster[ne] === 0) {
            [ne, nY] = nW(ne);
          }
          if (Ig.monster[ne] === 1) {
            let nC = In.monsterinstance(ne);
            if (Ig.monsterstatus[ne] === 1) {
              if (Ig.monstertype[ne] !== 19 && Ig.monstertype[ne] !== 3) {
                Ig.flag[51 + ne] = 3;
                nC.userEvent(10);
                nC.scr_monsterdefeat();
              } else {
                nC.pacifycon = 1;
                Ig.spelldelay = 999;
              }
            } else {
              let no = IZ(0, 0, nw);
              no.target = nC;
              no.fail = 1;
            }
          }
          Ig.spelldelay = 20;
          break;
        }
      case 4:
      case 5:
        {
          Ig.spelldelay = 30;
          if (Ig.monster[ne] === 0) {
            [ne, nY] = nW(ne);
          }
          if (nY === 0) {
            Ig.spelldelay = 70;
            let nX = A === 4 ? IY(Ig.battlemag[nv] * 5 + Ig.battleat[nv] * 11 - Ig.monsterdf[ne] * 3) : IY(Ig.battlemag[nv] * 6 + Ig.battleat[nv] * 13 - Ig.monsterdf[ne] * 6);
            if (A === 4 && Ig.chapter === 3) {
              let L2 = Iv.first("obj_knight_enemy");
              if (L2) {
                nX = IY(nX * (L2.damagereduction + 0.65));
              }
            }
            let L0 = Iv.first("obj_herosusie");
            let L1 = IZ(L0 ? L0.x : 90, L0 ? L0.y : 150, nI);
            L1.damage = nX;
            L1.star = ne;
            L1.caster = nv;
            L1.target = In.monsterinstance(ne);
            if (A === 5) {
              L1.red = 1;
            }
          }
          break;
        }
      case 6:
        {
          let L3 = Ig.battlemag[nv] * 4;
          for (let L4 = 0; L4 < If(); L4++) {
            II(L4, L3);
            nm(L4, L3);
          }
          Ig.spelldelay = 15;
          break;
        }
      case 8:
        {
          let L5 = 0;
          for (let L6 = 0; L6 < 3; L6++) {
            if (Ig.monster[L6] !== 1) {
              continue;
            }
            let L7 = IZ(Ig.monsterx[L6], Ig.monstery[L6], N);
            L7.target = In.monsterinstance(L6);
            L7.myself = L6;
            L7.initdelay = L5 * 10;
            L5++;
          }
          Ig.spelldelay = 20 + L5 * 10;
          break;
        }
      case 9:
        {
          Ig.spelldelay = 30;
          if (Ig.monster[ne] === 0) {
            [ne, nY] = nW(ne);
          }
          if (nY === 0 && Ig.monster[ne] === 1) {
            Ig.spelldelay = 40;
            let L8 = Math.max(1, Math.min(999, Ig.battlemag[nv] - 10));
            let L9 = IY(L8 * 30 + 90 + Is(10));
            let LI = IZ(Ig.monsterx[ne], Ig.monstery[ne], f);
            LI.damage = L9;
            LI.star = ne;
            LI.caster = nv;
            LI.target = In.monsterinstance(ne);
          }
          break;
        }
      case 10:
        {
          Ig.spelldelay = 30;
          if (I8() > 0) {
            let LA = IY(Ig.battlemag[nv] * 40 + 600);
            let Ln = Iv.exists("obj_berdlyb2_enemy") ? Ig.charinstance && Ig.charinstance[nv] : null;
            let LL = IZ(Ln ? Ln.x : 0, Ln ? Ln.y : 0, a);
            LL.caster = nv;
            LL.damage = LA;
            Ig.spelldelay = 140;
            if (Iv.exists("obj_berdlyb2_enemy")) {
              Ig.spelldelay = 999999;
              LL.textwait = 1;
            }
          }
          break;
        }
      case 100:
        {
          if (Ig.monster[ne] === 0) {
            [ne, nY] = nW(ne);
          }
          if (Ig.monster[ne] === 1) {
            let Lw = In.monsterinstance(ne);
            let LH = Ig.monstertype[ne] === 3 || Ig.chapter >= 2 && Ig.monstertype[ne] === 52;
            if (Ig.mercymod[ne] >= 100) {
              if (LH) {
                Lw.sparecon = 1;
              } else {
                Ig.flag[51 + ne] = 2;
                Lw.userEvent(10);
                Lw.scr_monsterdefeat();
              }
            } else {
              I9(ne, Ig.sparepoint[ne]);
              let LW = IZ(0, 0, nw);
              LW.target = Lw;
              LW.fail = 1;
              LW.flashcolor = IK.yellow;
            }
          }
          Ig.spelldelay = 0;
          break;
        }
      default:
        if (A >= 200) {
          A6(I4(A), ne, nv, {
            healOne: (Lg, LR, LG) => {
              II(Lg, LR);
              nm(Lg, LR);
              if (LG) {
                let LE = Iv.all("obj_healanim").pop();
                if (LE) {
                  LE.particlecolor = IK[LG];
                }
              }
              Ig.spelldelay = 15;
            },
            healAll: Lg => nq(Lg)
          });
        }
    }
  }
}
IC(nc, "scr_spell");
function nz() {
  return Iv.first("obj_battlecontroller");
}
IC(nz, "BC");
var nO = new Set(["obj_aqua_enemy", "obj_ball_enemy", "obj_balthizard_enemy", "obj_baseenemy", "obj_bell_enemy", "obj_bibliox_enemy", "obj_blue_enemy", "obj_elnina_lanino_controller", "obj_enemy_example", "obj_floradinn_enemy", "obj_flowery_enemy", "obj_guei_enemy", "obj_halo_enemy", "obj_hammer_of_justice_enemy", "obj_holywatercooler_enemy", "obj_jackenstein_enemy", "obj_kawkaw_enemy", "obj_knight_enemy", "obj_leafling_enemy", "obj_mizzle_enemy", "obj_multiboss_controller", "obj_multiboss_enemy1", "obj_netskie_enemy", "obj_nubert_enemy", "obj_orange_green_controller", "obj_organ_enemy", "obj_pink_enemy", "obj_pippins_enemy", "obj_purple_enemy", "obj_ribbick_enemy", "obj_rouxls_ch3_enemy", "obj_scarecrow_enemy", "obj_shadowman_enemy", "obj_sheary_enemy", "obj_shinobeetle_enemy", "obj_shutta_enemy", "obj_sound_of_justice_enemy", "obj_tenna_board4_enemy", "obj_tenna_enemy", "obj_terracota_enemy", "obj_titan_enemy", "obj_titan_spawn_enemy", "obj_trashy_trio", "obj_watercooler_enemy", "obj_yellow_enemy", "obj_zapper_enemy"]);
var nk = new Map();
function nd(A) {
  let n = A.constructor;
  if (nk.has(n)) {
    return nk.get(n);
  }
  let nv = false;
  for (let ne = n.prototype; ne && ne !== Id.prototype && ne !== Object.prototype && !nv; ne = Object.getPrototypeOf(ne)) {
    if (ne.constructor && nO.has(ne.constructor.name)) {
      nv = true;
    }
  }
  nk.set(n, nv);
  return nv;
}
IC(nd, "handlesTalkEnd");
function nj() {
  let A = Ig.battlespell;
  let n = Ig.battlespellcost;
  if (Array.isArray(A) && Array.isArray(n)) {
    for (let nv = 0; nv < 3; nv++) {
      let ne = A[nv];
      let nY = n[nv];
      if (ne && nY) {
        for (let nS = 0; nS < ne.length; nS++) {
          if (ne[nS] === 10) {
            nY[nS] = Ig.maxtension;
          }
        }
      }
    }
  }
  if (Array.isArray(Ig.spell) && Array.isArray(Ig.spellcost)) {
    for (let nC = 0; nC < Ig.spell.length; nC++) {
      let no = Ig.spell[nC];
      let nX = Ig.spellcost[nC];
      if (Array.isArray(no) && Array.isArray(nX)) {
        for (let L0 = 0; L0 < no.length; L0++) {
          if (no[L0] === 10) {
            nX[L0] = Ig.maxtension;
          }
        }
      }
    }
  }
  if (Ig.charweapon && Ig.charweapon[4] !== 13) {
    let L1 = (L2, L3, L4) => {
      if (!!L2 && L2 !== 4 && Ig.charweapon[L2] === 13 && !!Array.isArray(L3) && !!Array.isArray(L4)) {
        for (let L5 = 0; L5 < L3.length; L5++) {
          if (L3[L5] === 9) {
            let L6 = I5(9, L2).cost;
            if (L6 > 0 && L6 < L4[L5]) {
              L4[L5] = L6;
            }
          }
        }
      }
    };
    if (Array.isArray(Ig.spell) && Array.isArray(Ig.spellcost)) {
      for (let L2 = 5; L2 < Ig.spell.length; L2++) {
        L1(L2, Ig.spell[L2], Ig.spellcost[L2]);
      }
    }
    if (Array.isArray(A) && Array.isArray(n)) {
      for (let L3 = 0; L3 < Math.min(3, If()); L3++) {
        L1(Ig.char[L3], A[L3], n[L3]);
      }
    }
  }
}
IC(nj, "snowgrave100");
function nT(A, n, nv, ne, nY) {
  let nS = AG(n, AL);
  if (!nS) {
    A.draw_set_font("fnt_main");
    A.draw_text(nv, ne + 4, n, IK.white);
    A.draw_set_font("fnt_mainbig");
    return;
  }
  let nC = Ib[nS].w;
  A.draw_sprite_ext(nS, 0, nv + 5, ne + 1, nC > AL ? AL / nC : 1, 1, 0, IK.white, 1);
}
IC(nT, "fitName");
function nu(A, n, nv, ne, nY) {
  let nS = Ib[n];
  if (nS && nS.h > 30) {
    A.draw_sprite_part(n, nv, 0, 0, nS.w, 36, ne - 4, nY - 10);
  } else {
    A.draw_sprite(n, nv, ne, nY);
  }
}
IC(nu, "headDraw");
var nQ = new Set([0, 1, 2, 3, 4, 7, 8, 11, 12, 13]);
var nh = IC(A => {
  if (Array.isArray(A)) {
    return A.map(nh);
  }
  if (A && typeof A == "object" && Object.getPrototypeOf(A) === Object.prototype) {
    let n = {};
    for (let nv of Object.keys(A)) {
      n[nv] = nh(A[nv]);
    }
    return n;
  }
  return A;
}, "copied");
function nV() {
  let A = [];
  Iv.with("obj_bulletgenparent", n => {
    let nv = {};
    for (let ne of Object.keys(n)) {
      if (ne !== "id" && typeof n[ne] != "function") {
        nv[ne] = nh(n[ne]);
      }
    }
    A.push([n.constructor, nv]);
  });
  return A;
}
IC(nV, "attackAsItBegan");
var nM = IC(() => {}, "NO_CREATE");
function nB(A) {
  let n = Math.min(A.base, A.left);
  A.left -= n;
  Ig.turntimer = n;
  if (A.gens.length) {
    Iv.with("obj_bulletgenparent", nv => nv.instance_destroy());
    for (let [nv, ne] of A.gens) {
      let nY = IZ(ne.x, ne.y, nv, {
        ...nh(ne),
        create: nM,
        preCreate: nM
      });
      if (nY) {
        delete nY.create;
        delete nY.preCreate;
      }
    }
  }
}
IC(nB, "runAttackAgain");
var nx = class HV extends Id {
  cleanUp() {
    Ig.fighting = 0;
    if (!Iv.exists("__roomhost")) {
      if (!Ig.battleover) {
        Ig.battleover = "win";
        IP();
      }
    }
  }
  create() {
    Object.assign(this, {
      victory: 0,
      victoried: 0,
      skipvictory: 0,
      battlewriter: null,
      lbuffer: 0,
      rbuffer: 0,
      onebuffer: 0,
      twobuffer: 0,
      cantspare: [0, 0, 0],
      hidemercy: 0,
      gigaqueencon: 0,
      gigaqueentimer: 0,
      gigaqueeny: 0,
      attackpriority: -1,
      messagepriority: -1
    });
    Object.assign(this, {
      disablesusieact: 0,
      mercytotal: 0,
      idefendedthisturn: 0,
      ypostenna: 0,
      oopsallacts: 0,
      spadebuttonenabled: false,
      spadebuttoncount: 0,
      spadebuttontimer: 0,
      heartbuttoncount: 0,
      heartbuttontimer: 0,
      heartbuttondirection: 270,
      heartsuccesstimer: 0,
      heartsuccesscon: 0,
      recentlyhighlightingheart: 0,
      recentlyhighlightingheartvalue: 0,
      rouxlsbuttontimer: 0,
      rouxlsbuttoncount: -6,
      rouxlsbuttoncount2: -6,
      rouxlsbuttoncount_y: 0,
      rouxlsgridenabled: false,
      recentlyhighlightingspade: 0,
      recentlyhighlightingspadevalue: 0,
      gridchangedirections: true,
      spadebuttondirection: 0,
      rouxlsbuttondirection: 270,
      rouxlsbuttondirection2: 270,
      rouxlserrorcon: 0,
      rouxlserrortimer: 0,
      rouxlstelegraphtimer: 0,
      rouxlstelegraphcon: 0,
      spadetelegraphtimer: 0,
      spadetelegraphcon: 0,
      spadesuccesstimer: 0,
      spadesuccesscon: 0,
      rouxlsbuttonendcon: 0,
      buttonorder: 0,
      spadefail: false,
      buttonspeed: 0,
      norouxlsbutton: false,
      dogtimer: 0,
      dogcon: 0,
      dogselectedcount: 0
    });
    if (Ig.chapter >= 4 && In.bcCreate) {
      In.bcCreate(this);
    }
    Ig.battleend = 0;
    Ig.darkzone = 1;
    Ig.fighting = 1;
    Ig.fe = 0;
    Ig.fc = 0;
    Ig.typer = 4;
    Ig.battletyper = 4;
    Ig.myfight = 0;
    Ig.mnfight = 0;
    Ig.bmenuno = 0;
    Ig.attacking = 0;
    Ig.acting = [0, 0, 0];
    Ig.tension = 0;
    Ig.spelldelay = 10;
    I6();
    Ig.tensionselect = 0;
    Ig.temptension = [Ig.tension, Ig.tension, Ig.tension];
    this.tempitem = [];
    for (let nv = 0; nv < 13; nv++) {
      this.tempitem[nv] = [Ig.item[nv], Ig.item[nv], Ig.item[nv]];
    }
    Ig.charcond = [0, 0, 0];
    Ig.automiss = [0, 0, 0];
    IN(Math.max(3, If()));
    for (let ne = 0; ne < Math.max(3, If()); ne++) {
      if (Ig.char[ne]) {
        Ig.charmove[ne] = 1;
        Ig.charcantarget[ne] = 1;
        Ig.chardead[ne] = 0;
      } else {
        Ig.charmove[ne] = 0;
        Ig.charcantarget[ne] = 0;
        Ig.chardead[ne] = 0;
      }
    }
    Ig.flag[50] = 0;
    Ig.flag[51] = 0;
    Ig.flag[52] = 0;
    Ig.flag[53] = 0;
    Ig.monster = [0, 0, 0];
    Ig.monsterx = [0, 0, 0];
    Ig.monstery = [0, 0, 0];
    Ig.monstername = [" ", " ", " "];
    Ig.monsterat = [0, 0, 0];
    Ig.monsterdf = [0, 0, 0];
    Ig.monsterhp = [0, 0, 0];
    Ig.monstermaxhp = [0, 0, 0];
    Ig.monsterinstance = [null, null, null];
    Ig.monstergold = [0, 0, 0, 0];
    Ig.monsterexp = [0, 0, 0, 0];
    Ig.sparepoint = [0, 0, 0];
    Ig.hittarget = [0, 0, 0];
    Ig.mercymod = [0, 0, 0];
    Ig.mercymax = [0, 0, 0];
    Ig.monstercomment = [" ", " ", " "];
    Ig.monsterstatus = [0, 0, 0];
    Ig.canact = [[], [], []];
    Ig.actname = [[], [], []];
    Ig.actactor = [[], [], []];
    Ig.actdesc = [[], [], []];
    Ig.actcost = [[], [], []];
    for (let nY = 0; nY < 3; nY++) {
      for (let nS = 0; nS < 6; nS++) {
        Ig.canact[nY][nS] = 0;
        Ig.actname[nY][nS] = " ";
        Ig.actactor[nY][nS] = 1;
        Ig.actdesc[nY][nS] = " ";
        Ig.actcost[nY][nS] = 0;
      }
    }
    Object.assign(this, {
      intro: 1,
      chartotal: 0,
      charpos: new Array(If()).fill(-1),
      havechar: new Array(If()).fill(0),
      mmy: new Array(If()).fill(0)
    });
    Ig.charinstance = new Array(If()).fill(null);
    if (If() > 3) {
      let [nC, no] = x(If());
      Ig.heromakex = nC;
      Ig.heromakey = no;
    }
    let A = new Set();
    for (let nX = 0; nX < If(); nX++) {
      if (Ig.char[nX] !== 0) {
        this.chartotal++;
      }
      let L0 = Ig.char[nX];
      if (L0 >= 1) {
        let L1 = IR(L0);
        let L2 = Ig.charhero && Ig.charhero[L0] || d[L1 - 1] || "kris";
        let L3 = j(L2, Ib).id === L2 && k[L2] && k[L2].fallback || L2;
        let L4 = Math.max(0, d.indexOf(k[L3] ? L3 : "kris"));
        let L5 = L2 === "noelle" && Ig.chapter === 2 ? Aj : k[L2] && k[L2].custom ? AY : [Ac, Al, Ak][Math.min(2, L4)];
        let L6 = A.has(L5) && Ar.has(L5) ? Ar.get(L5) : L5;
        A.add(L5);
        let L7 = IZ(Ig.heromakex[nX], Ig.heromakey[nX], L6);
        L7.herokey = L2;
        L7.setup();
        L7.myself = nX;
        L7.char = L0;
        L7.base = L1;
        L7.depth = If() > 6 ? r(nX, If()) : 200 - nX * 20;
        if (Ig.chapter >= 5 && In.heroSetup) {
          In.heroSetup(L7);
        }
        AP(L7);
        {
          let L8 = U(If());
          if (L8 !== 1) {
            L7.image_xscale *= L8;
            L7.image_yscale *= L8;
            L7.mywidth = Ir(L7.mywidth * L8);
            L7.myheight = Ir(L7.myheight * L8);
          }
        }
        this.havechar[nX] = 1;
        this.charpos[nX] = nX;
        Ig.charinstance[nX] = L7;
      }
    }
    for (let L9 = 0; L9 < 3; L9++) {
      if (Ig.monstertype[L9] > 0) {
        Ig.monster[L9] = 1;
        let LI = IZ(Ig.monstermakex[L9], Ig.monstermakey[L9], Ig.monsterinstancetype[L9]);
        LI.myself = L9;
        Ig.monsterinstance[L9] = LI;
        LI.userEvent(12);
      }
    }
    if (Ig.chapter === 2 && Iv.exists("obj_gigaqueen_enemy")) {
      this.gigaqueencon = 3;
      Iv.view.live = true;
    }
    for (let LA of Ig.bystanders || []) {
      let Ln = IZ(LA.x, LA.y, LA.cls);
      Ln.myself = -1;
      Ln.visible = false;
      if (Ln.thrash) {
        Ln.thrash.visible = false;
      }
    }
    Ig.battleactcount = [0, 0, 0];
    Ig.battlespell = [[], [], []];
    Ig.battlespellname = [[], [], []];
    Ig.battlespelldesc = [[], [], []];
    Ig.battlespellcost = [[], [], []];
    Ig.battlespelltarget = [[], [], []];
    Ig.battlespellspecial = [[], [], []];
    for (let LL = 0; LL < 3; LL++) {
      for (let Lw = 0; Lw < 18; Lw++) {
        Ig.battlespell[LL][Lw] = 0;
        Ig.battlespellname[LL][Lw] = " ";
        Ig.battlespelldesc[LL][Lw] = " ";
        Ig.battlespellcost[LL][Lw] = 0;
        Ig.battlespelltarget[LL][Lw] = 2;
        Ig.battlespellspecial[LL][Lw] = 0;
      }
    }
    if (In.spellmenu_setup) {
      In.spellmenu_setup.call(this);
    }
    e();
    nj();
    Ig.charturn = 0;
    {
      let LH = 0;
      while (LH < If() && Ig.char[LH] && Ig.charauto[Ig.char[LH]] === 1) {
        LH++;
      }
      if (LH > 0 && LH < If() && Ig.char[LH]) {
        Ig.charturn = LH;
      }
    }
    Ig.currentactingchar = 0;
    for (let LW of ["acting", "actingsingle", "actingsimul", "actingtarget", "actingchoice"]) {
      if (Array.isArray(Ig[LW])) {
        for (let Lg = 0; Lg < Ia(); Lg++) {
          Ig[LW][Lg] = 0;
        }
      }
    }
    Ig.charaction = [0, 0, 0];
    Ig.charspecial = [0, 0, 0];
    Ig.chartarget = [0, 0, 0];
    Ig.faceaction = [0, 0, 0];
    Ig.targeted = [0, 0, 0];
    IN(Math.max(3, If()));
    Ig.battleat = [];
    Ig.battledf = [];
    Ig.battlemag = [];
    for (let LR = 0; LR < If(); LR++) {
      let LG = Ig.char[LR];
      Ig.battleat[LR] = Ig.at[LG] + Ig.itemat[LG][0] + Ig.itemat[LG][1] + Ig.itemat[LG][2];
      Ig.battledf[LR] = Ig.df[LG] + Ig.itemdf[LG][0] + Ig.itemdf[LG][1] + Ig.itemdf[LG][2];
      Ig.battlemag[LR] = Ig.mag[LG] + Ig.itemmag[LG][0] + Ig.itemmag[LG][1] + Ig.itemmag[LG][2];
    }
    if (Ig.chapter >= 5 && In.bcBattleStats) {
      In.bcBattleStats(this);
    }
    for (let LE = 0; LE < 20; LE++) {
      for (let Lf = 0; Lf < 20; Lf++) {
        Ig.bmenucoord[LE][Lf] = 0;
      }
    }
    Object.assign(this, {
      movenoise: 0,
      selnoise: 0,
      laznoise: 0,
      damagenoise: 0,
      grazenoise: 0,
      tp: 0,
      tpy: 50,
      bp: 0,
      bpy: 152,
      s_siner: 0,
      reset: 0,
      timeron: 1,
      noreturn: 0,
      shakeReq: 0,
      victortimer: 0
    });
    this.bcolor = Iq(Iq(IK.purple, IK.black, 0.7), IK.dkgray, 0.5);
    IZ(0, 0, AZ);
    this.hpcolor = [IK.aqua, IK.fuchsia, IK.lime, IK.yellow];
    this.hpcolorsoft = this.hpcolor.map(La => Iq(La, IK.white, 0.5));
    In.charinstance = La => Ig.charinstance[La];
    In.monsterinstance = La => Ig.monsterinstance[La];
    In.dmgwriter = (La, LN) => IZ(La, LN, Af);
    In.shake = () => {
      if (!Iv.exists("obj_shake")) {
        IZ(0, 0, I3);
      }
    };
    In.gameover = () => {
      Ig.battleover = "lose";
      IM();
      Im("snd_hurt1");
      IQ();
    };
  }
  alarmEvent(A) {
    if (A === 2) {
      this.reset = 0;
      nN();
    }
  }
  step() {
    nj();
    e();
    O();
    z(this);
    if (Ig.chapter === 3 && Ig.mnfight === 2 && !this.boardend && (p === "room_board_1" || p === "room_board_2" || p === "room_board_3") && Ig.char.every(n => !n || Ig.hp[n] < 1)) {
      this.boardend = 1;
      if (In.gameover) {
        In.gameover();
      }
    }
    this.t_siner = (this.t_siner || 0) + 1;
    if (Ig.chapter === 2) {
      if (this.gigaqueencon !== 0) {
        return;
      }
      let n = Iv.first("o_boxingcontroller");
      if (n && n.dead === 1 && Ig.turntimer < 0 || Iv.exists("obj_boxing_loss_controller") || Iv.exists("o_bq_whitefade_persistent")) {
        return;
      }
    }
    if (Ig.chapter >= 2 && (this.t_siner - 1) % 6 === 0) {
      for (let nv = 0; nv < If(); nv++) {
        let ne = Ig.char[nv];
        if (A3(ne) && Ig.hp[ne] > Ir(Ig.maxhp[ne] / 3)) {
          Ig.hp[ne]--;
        }
      }
    }
    for (let nY = 0; nY < If(); nY++) {
      let nS = Ig.charinstance[nY];
      if (!!nS && !!(nS.poisonamount > 0) && (nS.poisontimer = (nS.poisontimer || 0) + 1, nS.poisontimer >= 10)) {
        let nC = Ig.char[nY];
        if (Ig.hp[nC] > 1) {
          Ig.hp[nC]--;
          nS.poisonamount--;
        } else {
          nS.poisonamount = 0;
        }
        nS.poisontimer = 0;
      }
    }
    if (At() || n2()) {
      return;
    }
    if (Ig.chapter === 3 && this.victory === 1 && this.victoried === 0) {
      let no = Ao("obj_shutta_enemy");
      if (no && no.amiabossfight) {
        Ig.battletyper = 4;
      }
    }
    if (Ig.chapter >= 4 && In.bcStepGate && In.bcStepGate(this)) {
      return;
    }
    if (this.shakeReq) {
      this.shakeReq = 0;
      if (!Iv.exists("obj_shake")) {
        IZ(0, 0, I3);
      }
    }
    if (this.victory === 1 && this.victoried === 0) {
      Ig.faceaction = [0, 0, 0];
      Ig.battleend = 1;
      Ig.mnfight = -1;
      Ig.myfight = 7;
      for (let L0 = 3; L0 < If(); L0++) {
        Ig.faceaction[L0] = 0;
      }
      if (Iv.exists(this.battlewriter)) {
        this.battlewriter.instance_destroy();
      }
      Iv.with("obj_face", L1 => L1.instance_destroy());
      for (let L1 = 0; L1 < 4; L1++) {
        if (Ig.hp[L1] < 1) {
          Ig.hp[L1] = Ir(Ig.maxhp[L1] / 8);
        }
      }
      this.lastbattlewriter = null;
      if (this.skipvictory === 0) {
        Ig.monstergold[3] += IS(Ig.tension / 10) * (Ig.chapter >= 2 ? Ig.chapter : 1);
        if (Ig.charweapon[1] === 8) {
          Ig.monstergold[3] += IS(Ig.monstergold[3] / 20);
        }
        if (Ig.chapter >= 5 && In.bcVictoryGold) {
          In.bcVictoryGold(this);
        }
        Ig.msg = new Array(100).fill(" ");
        Ig.msg[0] = "* You won^1!&* Got " + Ig.monsterexp[3] + " EXP and " + Ig.monstergold[3] + " D$./%";
        Ig.typer = Ig.battletyper;
        Ig.fc = 0;
        if (Ig.chapter >= 2 && Ig.flag[37] === 1) {
          Ig.msg[0] = "* You won the battle!/%";
        }
        if (Ig.chapter >= 2 && Ig.flag[63] === 1) {
          Ig.msg[0] = "* You won^1!&* Got " + Ig.monstergold[3] + " D$^1.&* " + (Ig.char.some(L3 => L3 && (Ig.charhero && Ig.charhero[L3] ? Ig.charhero[L3] === "noelle" : L3 === 4)) ? "Noelle" : "You") + " became stronger./%";
          let L2 = Im("snd_dtrans_lw");
          try {
            Il(L2, 2);
            Ie(L2, 0.7, 0);
          } catch {}
        }
        if (Ig.chapter >= 4 && In.bcVictoryMsg) {
          In.bcVictoryMsg(this);
        }
        this.lastbattlewriter = t();
        if (Ig.chapter >= 2 && Ig.flag[38] === 1 && this.lastbattlewriter) {
          this.lastbattlewriter.instance_destroy();
        }
        for (let L3 = 0; L3 < If(); L3++) {
          let L4 = Ig.charinstance[L3];
          if (L4) {
            L4.state = 7;
            L4.hurt = 0;
            L4.hurttimer = 0;
          }
        }
      }
      this.victoried = 1;
      this.victortimer = 0;
      if (this.skipvictory === 1) {
        this.victortimer = -20;
      }
      if (Ig.chapter >= 5 && this.skipvictory === 2) {
        this.victortimer = 9;
      }
      let nX = Iv.first("obj_tensionbar");
      if (nX) {
        nX.alarm[5] = 15;
        nX.hspeed = -10;
        nX.friction = -0.4;
      }
    }
    if (this.victoried === 1) {
      this.victortimer++;
      if (!Iv.exists(this.lastbattlewriter) && this.victortimer >= 10 && (!(Ig.chapter >= 4) || !In.bcVictoryHold || !In.bcVictoryHold(this))) {
        this.intro = 2;
        if (this.bp <= 0) {
          nF();
        }
      }
    }
    this.talkNobodyEnds();
    if (Ig.myfight === 0 && (!(Ig.chapter >= 4) || !In.bcSkipMenu || !In.bcSkipMenu(this))) {
      this.menuStep();
    }
    if (this.movenoise === 1) {
      Im("snd_menumove");
      this.movenoise = 0;
    }
    if (this.grazenoise === 1) {
      Im("snd_graze");
      this.grazenoise = 0;
    }
    if (this.selnoise === 1) {
      Im("snd_select");
      this.selnoise = 0;
    }
    if (this.damagenoise === 1) {
      if (!(Ig.chapter >= 4) || !In.bcDamageNoise || !In.bcDamageNoise(this)) {
        Im("snd_damage");
      }
      this.damagenoise = 0;
    }
    this.onebuffer--;
    this.twobuffer--;
    this.lbuffer--;
    this.rbuffer--;
    let A = Ig.mnfight === 2 && this.timeron === 1 || Ig.chapter >= 4 && In.bcTurnTimer && In.bcTurnTimer(this);
    if (!A) {
      this._turnScaled = 0;
    }
    if (A) {
      if (this._turnScaled !== 1) {
        this._turnScaled = 1;
        this._stretch = null;
        let L5 = ID.turnscale ?? 1;
        if (L5 !== 1 && Ig.turntimer > 0 && Ig.turntimer < 2000) {
          if (L5 < 1) {
            Ig.turntimer = Math.max(1, Math.round(Ig.turntimer * L5));
          } else {
            this._stretch = {
              base: Ig.turntimer,
              left: Math.round(Ig.turntimer * (L5 - 1)),
              gens: nV()
            };
          }
        }
      }
      if (this._stretch && !this._stretch.gens.length) {
        this._stretch.gens = nV();
      }
      Ig.turntimer -= 1;
      if (Ig.turntimer <= 0 && this.reset === 0 && this._stretch && this._stretch.left > 0) {
        nB(this._stretch);
      }
      if (Ig.turntimer <= 0 && this.reset === 0) {
        Iv.with("obj_bulletparent", L6 => L6.instance_destroy());
        Iv.with("obj_bulletgenparent", L6 => L6.instance_destroy());
        Iv.with("obj_darkener", L6 => {
          L6.darken = 0;
        });
        Iv.with("obj_heart", L6 => {
          IZ(L6.x, L6.y, I2);
          L6.instance_destroy();
        });
        this.reset = 1;
        if (!(Ig.chapter >= 4) || !In.bcNoReturn || !In.bcNoReturn(this)) {
          if (this.noreturn === 0) {
            this.alarm[2] = 15;
          }
        }
      }
    }
    if (Ig.chapter >= 2 && Ig.myfight === 3 && I8() === 0 && !Iv.exists("obj_writer")) {
      nJ();
      if (Ig.myfight === 3) {
        nf();
      }
    }
    Ig.time++;
  }
  talkNobodyEnds() {
    if (Ig.chapter < 3 || Ig.mnfight !== 1.5 || Ig.myfight === 0) {
      this._mn15 = 0;
      return;
    }
    if (++this._mn15 < 3) {
      return;
    }
    let A = n => !(n instanceof AC) || typeof n.myself == "number" && Ig.monsterinstance[n.myself] === n && Ig.monster[n.myself] === 1;
    if (!Iv.list.some(n => n !== this && !n.destroyed && nd(n) && A(n))) {
      if (!Iv.exists("obj_growtangle")) {
        IZ(F(0) + 320, 170, I0);
      }
      if (!Iv.exists("obj_moveheart")) {
        I1();
      }
      Ig.mnfight = 2;
      this._mn15 = 0;
    }
  }
  actselect(A, nv) {
    let ne = Ig.monsterinstance[A];
    let nY = IR(Ig.char[Ig.charturn]);
    let nS = this.actinfo(A);
    if (ne && !ne.destroyed) {
      if (nY === 1) {
        ne.acting = nv + 1;
      } else if (nY === 2) {
        ne.actingsus = nv + 1;
      } else if (nY === 3) {
        ne.actingral = nv + 1;
      } else if (nY === 4) {
        ne.actingnoe = nv + 1;
      }
    }
    if (nY === 1) {
      let nC = IE();
      Ig.actingsimul[nC] = nS.simul.get(nv);
      Ig.acting[nC] = 1;
      Ig.actingsingle[nC] = 1;
      Ig.actingtarget[Ig.charturn] = A;
      let no = (Ig.actactor[A] || [])[nv];
      let nX = L0 => IG(L0);
      if (no === 2 && nX(2) >= 0) {
        Ig.acting[nX(2)] = 1;
      }
      if (no === 3 && nX(3) >= 0) {
        Ig.acting[nX(3)] = 1;
      }
      if (no === 4) {
        if (Ig.char[2]) {
          Ig.acting[2] = 1;
        }
        if (Ig.char[1]) {
          Ig.acting[1] = 1;
        }
      }
      if (no === 5 && nX(4) >= 0) {
        Ig.acting[nX(4)] = 1;
      }
      for (let L0 = 0; L0 < Ia(); L0++) {
        if (Ig.acting[L0] === 1) {
          Ig.faceaction[L0] = 6;
          Ig.charaction[L0] = 9;
        }
      }
    } else {
      Ig.actingtarget[Ig.charturn] = A;
      Ig.actingsingle[Ig.charturn] = 1;
      let L1 = Ig.customTeam === 1 && Ig.char.some((L2, L3) => L3 !== Ig.charturn && Ig.actingsingle[L3] === 1 && L2 && IR(L2) === nY);
      Ig.actingsimul[Ig.charturn] = L1 ? 0 : nS.simul.get(nv);
      Ig.faceaction[Ig.charturn] = 6;
      Ig.charaction[Ig.charturn] = 9;
    }
  }
  techUnlocked(A, nv) {
    if (Ig.chapter !== 3) {
      return true;
    }
    let ne = (Ig.battlespellname[A] || [])[nv];
    if (ne === undefined || ne === " ") {
      return true;
    }
    let nY = true;
    Iv.with("obj_pippins_enemy", nX => {
      if (ne === (Ig.actname[nX.myself] || [])[3] && (Ig.flag[1044] || 0) < 150) {
        nY = false;
      }
    });
    let nS = [1, 2, 3].some(nX => Ig.chararmor1[nX] === 7 || Ig.chararmor2[nX] === 7);
    let nC = Iv.first("obj_tenna_enemy_bg");
    let no = Iv.first("obj_tenna_enemy");
    if (nC && no && ne === (Ig.actnamesus[no.myself] || [])[1] && nC.myscore < (nS ? 30 : 20)) {
      nY = false;
    }
    return nY;
  }
  actinfo(A) {
    let n = Ig.chapter === 1 ? "" : {
      1: "",
      2: "sus",
      3: "ral",
      4: "noe"
    }[IR(Ig.char[Ig.charturn])] ?? "";
    let nv = (ne, nY) => {
      let nS = Ig[ne + n];
      let nC = nS && nS[A] || [];
      return {
        get: no => nC[no] === undefined ? nY : nC[no]
      };
    };
    return {
      canact: nv("canact", 0),
      cost: nv("actcost", 0),
      simul: nv("actsimul", 0),
      name: nv("actname", " "),
      desc: nv("actdesc", " ")
    };
  }
  charAlive(A) {
    let n = IG(A);
    if (n < 0) {
      return false;
    } else {
      return this.havechar[n] === 1 && Ig.hp[Ig.char[n]] > 0;
    }
  }
  partnerReady(A) {
    return this.charAlive(A) || Ig.customTeam === 1 && IG(A) < 0;
  }
  rouxlsButtonStep() {
    let A = Ig.chapter === 3 ? Iv.first("obj_rouxls_ch3_enemy") : null;
    if (!A || !(A.intro >= 2) || !this.spadebuttonenabled || Ig.bmenuno !== 0 || Ig.myfight !== 0) {
      this.rouxlserrortimer = 0;
      this.rouxlstelegraphcon = 0;
      return;
    }
    let nv = Ig.bmenucoord;
    let ne = () => nv[0][Ig.charturn] + this.rouxlsbuttoncount_y * 5;
    let nY = (L0, L1) => {
      for (let L2 = 1; L2 <= 5; L2++) {
        if (L0 !== L2) {
          continue;
        }
        let L3 = false;
        for (let L4 = 0; L4 < 6; L4++) {
          if (L1 === L2 + L4 * 5) {
            L3 = true;
          }
        }
        if (L3) {
          L0 = L2 === 5 ? 1 : L2 + 1;
        }
      }
      return L0;
    };
    let nS = () => {
      this.rouxlsbuttoncount = nY(this.rouxlsbuttoncount, this.heartbuttoncount);
      this.rouxlsbuttoncount = nY(this.rouxlsbuttoncount, this.spadebuttoncount);
    };
    let nC = L0 => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = IT(0, -1, -3, -4);
        if (L0) {
          this.spadebuttoncount = -6;
        }
      }
    };
    let no = () => Im("snd_menumove", {
      pitch: 0.6 + Is(0.8)
    });
    let nX = false;
    for (let L0 = 1; L0 <= 3; L0++) {
      if (Ig.hp[L0] < Ig.maxhp[L0] / 3) {
        nX = true;
      }
    }
    if (Ig.hp[1] + Ig.hp[2] + Ig.hp[3] < (Ig.maxhp[1] + Ig.maxhp[2] + Ig.maxhp[3]) / 2) {
      nX = true;
    }
    if (this.rouxlserrorcon === 0 && this.rouxlstelegraphcon === 0 && this.rouxlsbuttoncount > 0 && this.rouxlsbuttoncount - 1 === ne()) {
      this.rouxlserrorcon = 1;
      Im("snd_error");
    }
    if (this.rouxlserrorcon === 0 && this.rouxlstelegraphcon === 0 && this.rouxlsbuttoncount2 > 0 && this.rouxlsbuttoncount2 - 1 === ne()) {
      this.rouxlserrorcon = 1;
      Im("snd_error");
    }
    if (this.rouxlserrorcon === 1) {
      this.rouxlserrortimer++;
      if (this.rouxlserrortimer >= 10) {
        this.spadesuccesscon = 0;
        this.spadebuttontimer = 0;
        this.rouxlserrortimer = 0;
        this.rouxlserrorcon = 0;
        Ig.bmenuno = 0;
        nG();
        nv[0][0] = 2;
        nv[0][1] = 2;
        nv[0][2] = 2;
        nC(false);
        if (A.phase > 1) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = this.rouxlsbuttoncount === IT(0, -1, -3, -4) ? 1 : 0;
        }
      }
      nS();
    }
    if (this.rouxlserrorcon === 0) {
      this.spadebuttontimer++;
      if (A.phase > 1) {
        this.rouxlsbuttontimer++;
      }
    }
    if (nX) {
      if (nX === true && A.phase > 1) {
        this.heartbuttontimer++;
      }
    } else {
      this.heartbuttoncount = -6;
    }
    if (this.spadebuttontimer >= 10 && this.spadetelegraphcon === 1) {
      this.spadetelegraphcon = 0;
      this.spadebuttontimer = 0;
    } else if (this.spadebuttontimer >= 10 && this.spadesuccesscon === 1) {
      this.norouxlsbutton = false;
      this.rouxlserrortimer = 0;
      this.rouxlserrorcon = 0;
      this.spadesuccesscon = 0;
      this.spadesuccesstimer = 0;
      nv[0][0] = 2;
      nv[0][1] = 2;
      nv[0][2] = 2;
      nC(true);
      this.spadefail = false;
      if (this.rouxlsbuttonendcon === 0) {
        nG();
      } else {
        Ig.charturn = 0;
        Ig.bmenuno = 0;
      }
    } else if ((this.spadebuttontimer >= 7 && this.buttonspeed === 0 || this.spadebuttontimer >= 5 && this.buttonspeed === 1 || this.spadebuttontimer >= 3 && this.buttonspeed === 2) && this.spadetelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.spadebuttontimer = 0;
      if (this.dogcon !== 2 && this.spadebuttoncount !== -6) {
        no();
      }
      if (this.spadebuttondirection === 0) {
        this.spadebuttoncount++;
      }
      if (this.spadebuttondirection === 90) {
        this.spadebuttoncount -= 5;
      }
      if (this.spadebuttondirection === 180) {
        this.spadebuttoncount--;
      }
      if (this.spadebuttondirection === 270 && this.spadebuttoncount !== -6) {
        this.spadebuttoncount += 5;
      }
      let L1 = this.spadebuttoncount;
      if (!this.rouxlsgridenabled && L1 > 5) {
        this.spadebuttoncount = 1;
      } else if (this.spadebuttondirection === 0 && [6, 11, 16, 21, 26].includes(L1) || this.spadebuttondirection === 90 && [-4, -3, -2, -1, 0].includes(L1) || this.spadebuttondirection === 180 && [0, 5, 10, 15, 20].includes(L1) || this.spadebuttondirection === 270 && [26, 27, 28, 29, 30].includes(L1)) {
        this.buttonorder = 0;
        this.spadebuttoncount = -6;
        this.rouxlsbuttondirection = 270;
        this.rouxlsbuttoncount = IT(1, 2, 3, 4, 5);
        this.rouxlsbuttontimer = 0;
      }
      nS();
    }
    if (this.heartbuttontimer >= 10 && this.heartsuccesscon === 1) {
      this.caster = 1;
      for (let L2 = 0; L2 < If(); L2++) {
        if (!In.charinstance(L2)) {
          continue;
        }
        let L3 = Ir(Ig.maxhp[Ig.char[L2]] / 2);
        II(L2, L3);
        nm(L2, L3);
      }
      this.heartsuccesscon = 0;
      this.buttonorder = 0;
      this.spadebuttoncount = -6;
      this.rouxlsbuttondirection = 270;
      this.rouxlsbuttoncount = IT(1, 2, 3, 4, 5);
      nS();
      this.heartsuccesstimer = 0;
      nv[0][0] = 2;
      nv[0][1] = 2;
      nv[0][2] = 2;
      nC(true);
    } else if (this.heartbuttontimer >= 7 && this.spadetelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.heartbuttontimer = 0;
      if (this.dogcon !== 2 && this.heartbuttoncount !== -6) {
        no();
      }
      if (this.heartbuttondirection === 0) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttondirection === 90) {
        this.heartbuttoncount -= 5;
      }
      if (this.heartbuttondirection === 180) {
        this.heartbuttoncount--;
      }
      if (this.heartbuttondirection === 270) {
        this.heartbuttoncount += 5;
      }
      let L4 = this.heartbuttoncount;
      if (!this.rouxlsgridenabled && L4 > 5) {
        this.heartbuttoncount = 1;
      } else if (this.heartbuttondirection === 0 && [6, 11, 16, 21, 26].includes(L4) || this.heartbuttondirection === 90 && [-4, -3, -2, -1, 0].includes(L4) || this.heartbuttondirection === 180 && [0, 5, 10, 15, 20].includes(L4) || this.heartbuttondirection === 270 && [26, 27, 28, 29, 30].includes(L4)) {
        this.heartbuttoncount = -6;
        this.heartbuttondirection = 270;
        this.heartbuttoncount = IT(1, 2, 3, 4, 5);
      }
      this.heartbuttoncount = nY(this.heartbuttoncount, this.rouxlsbuttoncount);
      this.heartbuttoncount = nY(this.heartbuttoncount, this.spadebuttoncount);
      if (this.heartbuttoncount === this.rouxlsbuttoncount || this.heartbuttoncount === this.spadebuttoncount) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttoncount > 30) {
        this.heartbuttoncount = 26;
      }
    }
    if (this.rouxlsbuttontimer >= 20 && this.rouxlstelegraphcon === 1) {
      this.rouxlstelegraphcon = 0;
      this.rouxlsbuttontimer = 0;
    } else if ((this.rouxlsbuttontimer >= 7 && this.buttonspeed === 0 || this.rouxlsbuttontimer >= 5 && this.buttonspeed === 1 || this.rouxlsbuttontimer >= 3 && this.buttonspeed === 2) && this.rouxlstelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.rouxlsbuttontimer = 0;
      if (this.rouxlsbuttoncount !== -6) {
        no();
      }
      if (this.rouxlsbuttondirection === 0) {
        this.rouxlsbuttoncount++;
      }
      if (this.rouxlsbuttondirection === 90) {
        this.rouxlsbuttoncount -= 5;
      }
      if (this.rouxlsbuttondirection === 180) {
        this.rouxlsbuttoncount--;
      }
      if (this.rouxlsbuttondirection === 270 && this.rouxlsbuttoncount !== -6) {
        this.rouxlsbuttoncount += 5;
      }
      if (this.rouxlsbuttondirection === 270 && [26, 27, 28, 29, 30].includes(this.rouxlsbuttoncount)) {
        this.buttonorder++;
        if (this.buttonorder < 2 && A.phase === 2 || this.buttonorder < 4 && A.phase === 3) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = IT(1, 2, 3, 4, 5);
        } else {
          this.rouxlsbuttoncount = -6;
          this.spadebuttontimer = 0;
          this.spadebuttondirection = 270;
          this.spadebuttoncount = IT(1, 2, 3, 4, 5);
        }
      }
      nS();
      this.spadebuttoncount = nY(this.spadebuttoncount, this.heartbuttoncount);
      this.spadebuttoncount = nY(this.spadebuttoncount, this.rouxlsbuttoncount);
    }
  }
  rouxlsConfirm() {
    let A = Iv.first("obj_rouxls_ch3_enemy");
    let n = Ig.bmenucoord;
    let nv = () => n[0][Ig.charturn] + this.rouxlsbuttoncount_y * 5;
    let ne = () => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = IT(0, -1, -3, -4);
      }
    };
    this.norouxlsbutton = true;
    if (!this.spadebuttonenabled) {
      Ig.faceaction[Ig.charturn] = 6;
      n[0][0] = 2;
      n[0][1] = 2;
      n[0][2] = 2;
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.rouxlserrorcon = 0;
        this.rouxlstelegraphtimer = 0;
      }
      if (Iv.exists("obj_tenna_board4_enemy")) {
        this.onebuffer = 1;
        Ig.bmenuno = 11;
      } else {
        nG();
      }
      return true;
    }
    this.spadesuccesscon = 1;
    let nY = false;
    let nS = Iv.first("obj_heroralsei");
    if (Ig.charturn === 2 && nS && (nS.sprite_index === "spr_ralseib_yarn_1" || nS.sprite_index === "spr_ralseib_yarn_2") && A && A.yarnendturn === 0) {
      this.selnoise = 0;
      Ig.bmenuno = 0;
      A.yarnendturn = 1;
      if (this.dogcon < 1) {
        this.rouxlsbuttonendcon = 0;
        if (this.spadebuttoncount - 1 === nv() || this.recentlyhighlightingspade > 0) {
          Im("snd_coin");
          Ig.faceaction[Ig.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== nv()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else {
          Im("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      if (this.dogcon > 0) {
        Im("snd_pombark");
        this.dogselectedcount++;
        this.spadesuccesscon = 0;
        if (Ig.charturn === 2 && this.dogselectedcount < 9) {
          Ig.charturn = 0;
          Ig.bmenuno = 0;
        } else {
          nG();
          n[0][0] = 2;
          n[0][1] = 2;
          n[0][2] = 2;
          ne();
          if (Ig.charturn === 2 && this.dogselectedcount >= 9) {
            A.dogtrigger = 1;
          }
        }
      }
      return true;
    } else {
      if (this.spadebuttonenabled && nY === false) {
        this.selnoise = 0;
        if (this.dogcon > 0) {
          if (this.spadebuttoncount - 1 === nv() || this.recentlyhighlightingspade > 0 || this.dogcon === 2) {
            this.buttonspeed++;
            Im("snd_pombark");
            this.dogselectedcount++;
            if (this.dogcon === 1) {
              this.dogcon = 2;
            }
            if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== nv()) {
              this.spadebuttoncount = this.recentlyhighlightingspadevalue;
            }
          } else {
            Im("snd_error");
            this.dogcon = -1;
            this.spadefail = true;
          }
        } else if (this.spadebuttoncount - 1 === nv() || this.recentlyhighlightingspade > 0) {
          this.buttonspeed++;
          if (A) {
            A.spadepower++;
          }
          Im("snd_coin");
          Ig.faceaction[Ig.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== nv()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else if (this.heartbuttoncount - 1 === nv()) {
          this.buttonspeed++;
          Im("snd_coin");
          this.heartsuccesscon = 1;
          this.spadebuttontimer = 0;
        } else {
          Im("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      this.rouxlsbuttonendcon = 0;
      if (this.dogcon > 0) {
        this.dogselectedcount++;
        if (Ig.charturn === 2 && this.dogselectedcount < 9) {
          this.rouxlsbuttonendcon = 1;
        } else if (Ig.charturn === 2 && this.dogselectedcount >= 9) {
          this.rouxlsbuttonendcon = 0;
          if (A) {
            A.dogtrigger = 1;
          }
        } else {
          this.rouxlsbuttonendcon = 0;
        }
      }
      return true;
    }
  }
  menuStep() {
    if (Ig.standaloneMinigame && Ig.myfight === 0 && Ig.mnfight === 0 && (Iv.exists("obj_rhythmgame") || Ig.minigameStage)) {
      return;
    }
    if (Ig.minigameOnly && Ig.myfight === 0 && Ig.mnfight === 0) {
      let nC = Ig.monsterinstance && Ig.monsterinstance[0];
      if (nC && !nC.destroyed && typeof nC.minigameRearm == "function") {
        nC.minigameRearm();
      }
      Ig.charturn = nR();
      for (let no = 0; no < If(); no++) {
        Ig.acting[no] = 0;
        Ig.charaction[no] = 0;
        Ig.faceaction[no] = 0;
      }
      nf();
      return;
    }
    let A = Ig.charturn;
    let nv = Ig.bmenucoord;
    let ne = Ig.bmenuno === 0 ? -100 : 10;
    if (nQ.has(Ig.bmenuno)) {
      if (this.battlewriter && !this.battlewriter.destroyed) {
        this.battlewriter.depth = ne;
      }
      Iv.with("obj_face", nX => {
        nX.depth = ne - 1;
      });
    }
    let nY = () => {
      if (this.battlewriter && !this.battlewriter.destroyed) {
        this.battlewriter.depth = 10;
      }
      Iv.with("obj_face", nX => {
        nX.depth = 9;
      });
    };
    if (Ig.bmenuno === 0) {
      let nX = true;
      let L0 = true;
      if (Iv.exists("obj_board_battleintroduction")) {
        nX = false;
      }
      Iv.with("obj_knight_enemy", L2 => {
        if (L2.practicemode) {
          nX = false;
        }
      });
      if (this.spadesuccesscon === 1 || this.rouxlserrorcon === 1) {
        nX = false;
      }
      let L1 = Ig.chapter === 3 ? Iv.first("obj_rouxls_ch3_enemy") : null;
      if (L1) {
        L1.dancecon = 1;
        if (L1.intro === 2) {
          nX = false;
        }
        L0 = false;
        if (L1.intro === 3) {
          L0 = true;
        }
        if (this.oopsallacts === 1 && this.spadebuttonenabled && L1.phase !== 3 && Ig.charturn === 0 && this.dogcon === 0) {
          this.dogtimer++;
        } else {
          this.dogtimer = 0;
        }
        if (this.dogtimer === 1000) {
          this.dogcon = 1;
        }
      }
      if (!Iv.exists(this.battlewriter) && L0 && (Ig.chapter !== 5 || Ig.battlemsg[0] !== "")) {
        Ig.msg[0] = Ig.battlemsg[0];
        Ig.typer = Ig.battletyper;
        if (Ig.chapter === 3) {
          let L2 = Iv.first("obj_tenna_enemy");
          if (L2 && L2.turn === 0 || Iv.exists("obj_tennabattleconvo_controller")) {
            Ig.fe = 0;
            Ig.fc = 22;
            Ig.typer = 80;
          }
          let L3 = Ig.encounterno === 123 ? Iv.first("obj_pippins_enemy") : null;
          if (L3 && (L3.turns === 0 || L3.turns === 2 || L3.turns === 4)) {
            Ig.fe = 0;
            Ig.fc = 2;
            Ig.typer = 45;
          }
          if (L3 && (L3.turns === 1 || L3.turns === 3)) {
            Ig.fe = 0;
            Ig.fc = 1;
            Ig.typer = 47;
          }
        }
        this.battlewriter = t();
      }
      if (Iu() && this.lbuffer < 0 && nX) {
        nv[0][A] = nv[0][A] === 0 ? 4 : nv[0][A] - 1;
        this.movenoise = 1;
        this.rbuffer = 1;
        if (this.disablesusieact === 1 && Ig.charturn === 1 && nv[0][A] === 1) {
          nv[0][A] = 0;
        }
        if (Ig.chapter >= 4 && this.disablesusieralseiattack === 1 && (Ig.charturn === 1 || Ig.charturn === 2) && nv[0][A] === 0) {
          nv[0][A] = 4;
        }
      }
      if (IV() && this.rbuffer < 0 && nX) {
        nv[0][A] = nv[0][A] === 4 ? 0 : nv[0][A] + 1;
        this.movenoise = 1;
        this.lbuffer = 1;
        if (this.disablesusieact === 1 && Ig.charturn === 1 && nv[0][A] === 1) {
          nv[0][A] = 2;
        }
        if (Ig.chapter >= 4 && this.disablesusieralseiattack === 1 && (Ig.charturn === 1 || Ig.charturn === 2) && nv[0][A] === 0) {
          nv[0][A] = 1;
        }
      }
      if (!Iz() || this.rouxlserrorcon !== 1 || !(this.dogcon < 1)) {
        if (Iz() && this.twobuffer < 0 && nX) {
          this.onebuffer = 1;
          this.selnoise = 1;
          let L4 = nv[0][A];
          if (this.oopsallacts === 1 && this.rouxlsConfirm()) {
            return;
          }
          if (L4 === 0) {
            Ig.bmenuno = 1;
          }
          if (L4 === 1 && IR(Ig.char[A]) !== 1) {
            Ig.bmenuno = 2;
          }
          if (L4 === 1 && IR(Ig.char[A]) === 1) {
            Ig.bmenuno = 11;
          }
          if (L4 === 2 && this.tempitem[0][A] !== 0) {
            Ig.bmenuno = 4;
            for (let L5 = 0; L5 < 12; L5++) {
              if (this.tempitem[nv[4][A]][A] === 0 && nv[4][A] > 0) {
                nv[4][A]--;
              }
            }
          }
          if (L4 === 3) {
            Ig.bmenuno = 12;
          }
          if (L4 === 4) {
            I7(Ig.chapter >= 4 && In.bcDefendTP ? In.bcDefendTP(this) : 40);
            if (Ig.chapter === 3) {
              this.idefendedthisturn++;
            }
            Ig.faceaction[A] = 4;
            Ig.charaction[A] = 10;
            nG();
            if (Ig.chapter === 2) {
              Iv.with("o_boxingcontroller", L6 => {
                L6.defend = 1;
                L6.specialcon = 8;
              });
            }
          }
        }
      }
      if (IO() && this.onebuffer < 0 && Ig.charturn > 0 && !L1) {
        this.twobuffer = 1;
        this.movenoise = 1;
        nE();
      }
      if (If() > 3 && Ik() && this.onebuffer < 0 && nX && !L1) {
        let L6 = 0;
        while (L6 < 2 && Ig.monster[L6] !== 1) {
          L6++;
        }
        this.selnoise = 1;
        this.onebuffer = 2;
        for (let L7 = 0; L7 < If() && Ig.charturn < If() && Ig.myfight === 0; L7++) {
          let L8 = Ig.charturn;
          Ig.chartarget[L8] = L6;
          Ig.faceaction[L8] = 1;
          Ig.charaction[L8] = 1;
          nG();
          if (Ig.charturn === L8) {
            break;
          }
        }
        return;
      }
    }
    if (Ig.bmenuno === 2 && Ig.flag[34] === 0 && Ig.chapter !== 1) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      nY();
      let L9 = A;
      let LI = Ig.battlespell[L9] || [];
      if (IV() || Iu()) {
        let Ln = 1;
        let LL = nv[2][A];
        if (LL < 11) {
          if (LI[LL + 1] === 0) {
            Ln = 0;
            if (LL % 2 === 1 && LL > 0) {
              nv[2][A]--;
            }
          }
        } else {
          nv[2][A]--;
          Ln = 0;
        }
        if (Ln === 1) {
          if (LL % 2 === 0) {
            nv[2][A]++;
          } else {
            nv[2][A]--;
          }
        }
      }
      if (IU()) {
        let Lw = nv[2][A];
        let LH = 1;
        if (Lw >= 10) {
          LH = 0;
        } else {
          if (LI[Lw + 2] === 0) {
            LH = 0;
          }
          if (Lw === 5 && LI[6] !== 0 && LI[7] === 0) {
            LH = 2;
          }
        }
        if (LH === 1) {
          nv[2][A] += 2;
        }
        if (LH === 2) {
          nv[2][A] = 6;
        }
      }
      if (Ii() && nv[2][A] > 1) {
        nv[2][A] -= 2;
      }
      Ig.tensionselect = (Ig.battlespellcost[L9] || [])[nv[2][A]] || 0;
      let LA = this.techUnlocked(L9, nv[2][A]) && (!(Ig.chapter >= 4) || !In.techBlocked || !In.techBlocked(this, L9, nv[2][A])) && S(LI[nv[2][A]], L9);
      if (Iz() && LI[nv[2][A]] !== 0 && this.onebuffer < 0 && LA && ((Ig.battlespellcost[L9] || [])[nv[2][A]] || 0) <= Ig.tension) {
        if (Ig.chapter >= 4 && In.techConfirm && In.techConfirm(this, L9, nv[2][A], "before") || (this.onebuffer = 2, Ig.bmenuno = 0, this.selnoise = 1, Ig.chapter >= 4 && In.techConfirm && In.techConfirm(this, L9, nv[2][A], "after"))) {
          return;
        }
        if (LI[nv[2][A]] !== -1) {
          let LW = Ig.chapter >= 4 && In.chapterSpellinfo && !IW(LI[nv[2][A]]) ? In.chapterSpellinfo(LI[nv[2][A]]) : I5(LI[nv[2][A]]);
          this.cost = LW.cost;
          if (LW.spelltarget === 0) {
            np(LW.cost, LW.spellanim);
          }
          if (LW.spelltarget === 1) {
            Ig.bmenuno = 8;
          }
          if (LW.spelltarget === 2) {
            Ig.bmenuno = 3;
          }
          if (LW.spelltarget === 3) {
            Ig.bmenuno = 99;
          }
        } else if (!(Ig.chapter >= 4) || !In.techActDirect || !In.techActDirect(this, L9, nv[2][A])) {
          Ig.bmenuno = 13;
        }
      }
      if (IO() && this.onebuffer < 0) {
        Ig.tensionselect = 0;
        this.twobuffer = 1;
        Ig.bmenuno = 0;
        this.movenoise = 1;
      }
    } else if (Ig.bmenuno === 2) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      nY();
      let Lg = Ig.char[A];
      let LR = Ig.spell[Lg];
      if (IV()) {
        let LG = 1;
        let LE = nv[2][A];
        if (LE < 11) {
          if (LR[LE + 1] === 0) {
            LG = 0;
            if (LE % 2 === 1 && LE > 0) {
              nv[2][A]--;
            }
          }
        } else {
          nv[2][A]--;
          LG = 0;
        }
        if (LG === 1) {
          if (LE % 2 === 0) {
            nv[2][A]++;
          } else {
            nv[2][A]--;
          }
        }
      }
      if (Iu()) {
        let Lf = nv[2][A];
        if (LR[1] !== 0) {
          if (Lf % 2 === 0) {
            nv[2][A]++;
          } else {
            nv[2][A]--;
          }
        }
      }
      if (IU()) {
        let La = nv[2][A];
        let LN = 1;
        if (La >= 10) {
          LN = 0;
        } else {
          if (LR[La + 2] === 0) {
            LN = 0;
          }
          if (La === 5 && LR[6] !== 0 && LR[7] === 0) {
            LN = 2;
          }
        }
        if (LN === 1) {
          nv[2][A] += 2;
        }
        if (LN === 2) {
          nv[2][A] = 6;
        }
      }
      if (Ii() && nv[2][A] > 1) {
        nv[2][A] -= 2;
      }
      Ig.tensionselect = Ig.spellcost[Lg][nv[2][A]];
      if (Iz() && LR[nv[2][A]] !== 0 && this.onebuffer < 0 && S(LR[nv[2][A]], A) && Ig.spellcost[Lg][nv[2][A]] <= Ig.tension) {
        this.onebuffer = 2;
        Ig.bmenuno = 0;
        this.selnoise = 1;
        let LJ = I5(LR[nv[2][A]]);
        this.cost = LJ.cost;
        if (LJ.spelltarget === 0) {
          np(LJ.cost, LJ.spellanim);
        }
        if (LJ.spelltarget === 1) {
          Ig.bmenuno = 8;
        }
        if (LJ.spelltarget === 2) {
          Ig.bmenuno = 3;
        }
        if (LJ.spelltarget === 3) {
          Ig.bmenuno = 99;
        }
      }
      if (IO() && this.onebuffer < 0) {
        Ig.tensionselect = 0;
        this.twobuffer = 1;
        Ig.bmenuno = 0;
        this.movenoise = 1;
      }
    }
    if (Ig.bmenuno === 4) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      nY();
      let LF = Lp => this.tempitem[Lp] ? this.tempitem[Lp][A] : 0;
      if (LF(nv[4][A]) === 0 && nv[4][A] > 0) {
        nv[4][A]--;
      }
      if (IV()) {
        let Lp = 1;
        let Ly = nv[4][A];
        if (Ly < 11) {
          if (LF(Ly + 1) === 0) {
            Lp = 0;
            if (Ly % 2 === 1 && Ly > 0) {
              nv[4][A]--;
            }
          }
        } else {
          nv[4][A]--;
          Lp = 0;
        }
        if (Lp === 1) {
          if (Ly % 2 === 0) {
            nv[4][A]++;
          } else {
            nv[4][A]--;
          }
        }
      }
      if (Iu()) {
        let LD = nv[4][A];
        if (LF(1) !== 0) {
          if (LD % 2 === 0) {
            nv[4][A]++;
          } else {
            nv[4][A]--;
          }
        }
      }
      if (IU()) {
        let LZ = nv[4][A];
        let Lb = 1;
        if (LZ >= 10) {
          Lb = 0;
        } else {
          if (LF(LZ + 2) === 0) {
            Lb = 0;
          }
          if (LZ === 5 && LF(6) !== 0 && LF(7) === 0) {
            Lb = 2;
          }
        }
        if (Lb === 1) {
          nv[4][A] += 2;
        }
        if (Lb === 2) {
          nv[4][A] = 6;
        }
        if (Lb === 0) {
          nv[4][A] = ny(LF, LZ, 1);
        }
      }
      if (Ii()) {
        if (nv[4][A] > 1) {
          nv[4][A] -= 2;
        } else {
          nv[4][A] = ny(LF, nv[4][A], -1);
        }
      }
      if (LF(nv[4][A]) === 0 && nv[4][A] > 0) {
        nv[4][A]--;
      }
      if (Iz() && LF(nv[4][A]) !== 0 && this.onebuffer < 0) {
        this.onebuffer = 2;
        Ig.bmenuno = 0;
        this.selnoise = 1;
        let HM = LF(nv[4][A]);
        let HB = IJ[HM];
        this.itemsel = {
          id: HM,
          idx: nv[4][A]
        };
        if (Ig.chapter >= 4 && In.itemMenuPick && In.itemMenuPick(this, HM, nv[4][A])) {
          return;
        }
        let Hi = !HB || HB[2] === 0 || HB[2] === 2 ? A7(I4(HM)) : null;
        if (Hi !== null) {
          I7(Hi);
          nD(A);
          let Hx = A;
          for (let HU = nv[4][A]; HU < 12; HU++) {
            this.tempitem[HU][Hx] = this.tempitem[HU + 1] ? this.tempitem[HU + 1][Hx] : 0;
          }
          nG();
        } else if (!HB || HB[2] === 0 || HB[2] === 2) {
          nZ(HM, nv[4][A]);
        } else {
          Ig.bmenuno = 7;
        }
      }
      if (IO() && this.onebuffer < 0) {
        this.twobuffer = 1;
        Ig.bmenuno = 0;
        this.movenoise = 1;
        if (Ig.chapter >= 4 && In.itemMenuCancel) {
          In.itemMenuCancel(this);
        }
      }
    }
    if (Ig.bmenuno === 9) {
      let Hr = nv[11][A];
      let Hv = this.actinfo(Hr);
      if (IV()) {
        let HC = 1;
        let Ho = nv[9][A];
        if (Ho < 5) {
          if (Hv.canact.get(Ho + 1) === 0) {
            HC = 0;
            if (Ho % 2 === 1 && Ho > 0) {
              nv[9][A]--;
            }
          }
        } else {
          nv[9][A]--;
          HC = 0;
        }
        if (HC === 1) {
          if (Ho % 2 === 0) {
            nv[9][A]++;
          } else {
            nv[9][A]--;
          }
        }
      }
      if (Iu()) {
        let HX = nv[9][A];
        if (HX % 2 === 0) {
          if (Hv.canact.get(HX + 1) !== 0) {
            nv[9][A]++;
          }
        } else {
          nv[9][A]--;
        }
      }
      if (IU()) {
        let W0 = nv[9][A];
        let W1 = 1;
        if (W0 >= 4 || Hv.canact.get(W0 + 2) === 0) {
          W1 = 0;
        }
        if (W1 === 1) {
          nv[9][A] += 2;
        }
      }
      if (Ii() && nv[9][A] > 1) {
        nv[9][A] -= 2;
      }
      Ig.tensionselect = Hv.cost.get(nv[9][A]);
      let He = 1;
      let HY = Ig.chapter === 1 || IR(Ig.char[A]) === 1 ? Ig.actactor[Hr][nv[9][A]] : 0;
      if (HY === 2 || HY === 4) {
        if (!this.partnerReady(2)) {
          He = 0;
        }
      }
      if (HY === 3 || HY === 4) {
        if (!this.partnerReady(3)) {
          He = 0;
        }
      }
      if (HY === 5 && Ig.chapter !== 1) {
        if (!this.partnerReady(4)) {
          He = 0;
        }
      }
      let HS = true;
      if (Ig.chapter === 3) {
        let W2 = (Ig.actname[Hr] || [])[nv[9][A]];
        let W3 = Iv.first("obj_pippins_enemy");
        if ((Ig.flag[1044] || 0) < 150 && W3 && W2 === (Ig.actname[W3.myself] || [])[3]) {
          HS = false;
        }
        let W4 = [1, 2, 3].some(W7 => Ig.chararmor1[W7] === 7 || Ig.chararmor2[W7] === 7);
        let W5 = Iv.first("obj_tenna_enemy_bg");
        let W6 = Iv.first("obj_tenna_enemy");
        if (W5 && W6 && W5.myscore < (W4 ? 30 : 20) && W2 === (Ig.actnamesus[W6.myself] || [])[1]) {
          HS = false;
        }
      }
      if ((Ig.chapter === 2 || Ig.chapter === 3) && He === 1 && HS && Iz() && (Ig.canact[Hr] || [])[nv[9][A]] === 1 && Ig.tension >= Ig.tensionselect && this.onebuffer < 0) {
        this.onebuffer = 2;
        Ig.bmenuno = 0;
        this.selnoise = 1;
        let W7 = nv[9][A];
        Ig.actingchoice[A] = W7;
        Ig.tension -= Hv.cost.get(W7);
        Ig.tensionselect = 0;
        this.actselect(Hr, W7);
        nv[9][A] = 0;
        nG();
      } else if (Ig.chapter !== 2 && Ig.chapter !== 3 && He === 1 && Iz() && (Ig.canact[Hr] || [])[nv[9][A]] === 1 && Ig.tension >= Ig.tensionselect && this.onebuffer < 0) {
        this.onebuffer = 2;
        Ig.bmenuno = 0;
        this.selnoise = 1;
        Ig.tension -= Hv.cost.get(nv[9][A]);
        Ig.tensionselect = 0;
        let W8 = Ig.monsterinstance[Hr];
        if (W8 && !W8.destroyed) {
          W8.acting = nv[9][A] + 1;
        }
        if (Ig.chapter >= 2) {
          Ig.actingchoice[A] = nv[9][A];
          Ig.actingsimul[IE()] = Hv.simul.get(nv[9][A]);
          Ig.actingsingle[IE()] = 1;
          Ig.actingtarget[A] = Hr;
        }
        Ig.acting[IE()] = 1;
        if (HY === 2 && IG(2) >= 0) {
          Ig.acting[IG(2)] = 1;
        }
        if (HY === 3 && IG(3) >= 0) {
          Ig.acting[IG(3)] = 1;
        }
        if (HY === 4) {
          if (Ig.char[2]) {
            Ig.acting[2] = 1;
          }
          if (Ig.char[1]) {
            Ig.acting[1] = 1;
          }
        }
        for (let W9 = 0; W9 < If(); W9++) {
          if (Ig.acting[W9] === 1) {
            Ig.faceaction[W9] = 6;
            Ig.charaction[W9] = 9;
          }
        }
        nG();
      }
      if (IO() && this.onebuffer < 0) {
        if (Ig.chapter === 2 || Ig.chapter === 3) {
          nv[9][A] = 0;
        }
        Ig.tensionselect = 0;
        this.twobuffer = 1;
        Ig.bmenuno = 11;
        this.movenoise = 1;
      }
    }
    let nS = Ig.chapter === 1 ? [7, 1, 8, 3, 11, 12] : [7, 1, 8, 3, 11, 12, 13];
    if (nS.includes(Ig.bmenuno) && (this.battlewriter && (this.battlewriter.skipme = 1), nY(), IO() && this.onebuffer < 0 && (this.twobuffer = 1, [1, 11, 12].includes(Ig.bmenuno) ? Ig.bmenuno = 0 : Ig.bmenuno === 7 ? Ig.bmenuno = 4 : (Ig.bmenuno === 8 || Ig.bmenuno === 3 || Ig.bmenuno === 13) && (Ig.bmenuno = 2), this.movenoise = 1), nS.includes(Ig.bmenuno))) {
      let WI = Ig.bmenuno;
      let WA = [0, 0, 0];
      if (WI === 7 || WI === 8) {
        for (let WH = 0; WH < If(); WH++) {
          if (Ig.char[WH] > 0) {
            WA[WH] = 1;
          }
        }
      } else {
        for (let WW = 0; WW < 3; WW++) {
          WA[WW] = Ig.monster[WW];
        }
      }
      let Wn = (WI === 7 || WI === 8) && If() > 3;
      if (Wn) {
        let Wg = If();
        let WR = Wf => Wf >= 0 && Wf < Wg && Ig.char[Wf] > 0;
        let WG = nv[WI][A];
        if (!WR(WG)) {
          for (WG = 0; WG < Wg - 1 && !WR(WG);) {
            WG++;
          }
        }
        let WE = Wf => {
          let Wa = WG;
          for (let WN = 0; WN < Wg; WN++) {
            Wa = (Wa + Wf + Wg) % Wg;
            if (WR(Wa)) {
              return Wa;
            }
          }
          return WG;
        };
        if (IU()) {
          WG = WE(1);
          this.movenoise = 1;
        }
        if (Ii()) {
          WG = WE(-1);
          this.movenoise = 1;
        }
        {
          let Wf = Math.floor(WG / 6) * 6;
          let Wa = WG - Wf < 3 ? WG + 3 : WG - 3;
          if ((IV() || Iu()) && WR(Wa)) {
            WG = Wa;
            this.movenoise = 1;
          }
        }
        nv[WI][A] = WG;
      }
      if (!Wn) {
        if (nv[WI][A] === 2 && WA[2] === 0) {
          nv[WI][A] = 0;
        }
        if (nv[WI][A] === 0 && WA[0] === 0) {
          nv[WI][A] = 1;
        }
        if (nv[WI][A] === 1 && WA[1] === 0) {
          nv[WI][A] = 0;
        }
        if (nv[WI][A] === 0 && WA[0] === 0) {
          nv[WI][A] = 2;
        }
      }
      let WL = IU() ? 1 : Ii() ? -1 : 0;
      if (WL !== 0 && WI !== 7 && WI !== 8 && Ig.monster.__customBoard && In.customScroll && In.customScroll(WI, A, WL)) {
        this.movenoise = 1;
      } else if (!Wn) {
        if (IU()) {
          let WN = nv[WI][A];
          let WJ = WN === 0 ? [1, 2] : WN === 1 ? [2, 0] : [0, 1];
          for (let WD of WJ) {
            if (WA[WD] === 1) {
              this.movenoise = 1;
              nv[WI][A] = WD;
              break;
            }
          }
        }
        if (Ii()) {
          let WZ = nv[WI][A];
          let Wb = WZ === 0 ? [2, 1] : WZ === 1 ? [0, 2] : [1, 0];
          for (let Wm of Wb) {
            if (WA[Wm] === 1) {
              this.movenoise = 1;
              nv[WI][A] = Wm;
              break;
            }
          }
        }
      }
      let Ww = Ig.chapter >= 4 && this.skipmonsterselection ? (this.skipmonsterselection = 0, true) : false;
      if (Iz() && this.onebuffer < 0 || Ww) {
        if (WI !== 7 && WI !== 8 && Ig.monster.__customBoard && In.customTargetPicked) {
          In.customTargetPicked(WI, A, nv[WI][A]);
        }
        this.onebuffer = 1;
        this.selnoise = 1;
        if (WI === 1) {
          Ig.chartarget[A] = nv[WI][A];
          Ig.faceaction[A] = 1;
          Ig.charaction[A] = 1;
          nG();
        }
        if (WI === 7) {
          Ig.chartarget[A] = nv[WI][A];
          {
            let WK = this.itemsel && A8(I4(this.itemsel.id));
            if (WK) {
              I7(WK);
              nD(A);
            }
          }
          if (Ig.chapter >= 4 && In.itemTargetSkip && In.itemTargetSkip(this)) {
            nG();
          } else {
            nZ(this.itemsel.id, this.itemsel.idx);
            if (Ig.chapter === 2) {
              Iv.with("o_boxingcontroller", WP => {
                WP.specialcon = 7;
              });
            }
          }
        }
        if (WI === 8 || WI === 3) {
          Ig.chartarget[A] = nv[WI][A];
          np(this.cost);
        }
        if (WI === 11) {
          Ig.bmenuno = 9;
          let WP = nv[9][A];
          let Wq = nv[11][A];
          let Wc = this.actinfo(Wq);
          for (let Wz = 0; Wz < 6; Wz++) {
            if (Wc.canact.get(WP) === 0 && WP > 0) {
              nv[9][A]--;
              WP--;
            }
          }
          this.onebuffer = 1;
        }
        if (WI === 12) {
          Ig.faceaction[A] = 10;
          Ig.chartarget[A] = nv[WI][A];
          Ig.charaction[A] = 2;
          Ig.charspecial[A] = 100;
          nG();
        }
        if (WI === 13) {
          this.onebuffer = 2;
          Ig.bmenuno = 0;
          this.selnoise = 1;
          let Wl = nv[2][A];
          let Ws = nv[13][A];
          Ig.actingchoice[A] = Wl;
          Ig.tension -= (Ig.battlespellcost[A] || [])[Wl] || 0;
          Ig.tensionselect = 0;
          this.actselect(Ws, Wl);
          if (Ig.chapter >= 4 && In.techActPicked && In.techActPicked(this)) {
            return;
          }
          nG();
        }
      }
    }
  }
  draw(nv) {
    nj();
    if (n1()) {
      return;
    }
    let ne = 0;
    let nY = 0;
    if (Ig.chapter === 2 && Iv.exists("obj_gigaqueen_enemy")) {
      if (this.gigaqueencon === 1) {
        this.gigaqueentimer++;
        this.gigaqueeny = y(0, 100, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 2) {
        this.gigaqueentimer++;
        this.gigaqueeny = y(100, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 3) {
        this.gigaqueeny = 200;
      }
      if (this.gigaqueencon === 4) {
        this.gigaqueentimer++;
        this.gigaqueeny = y(200, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 5) {
        this.gigaqueentimer++;
        this.gigaqueeny = y(0, 200, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      nY = this.gigaqueeny;
    }
    let nS = -this.bp + this.bpy + nY;
    if (this.intro === 1) {
      if (this.bp < this.bpy - 1) {
        if (this.bpy - this.bp < 40) {
          this.bp += Ir((this.bpy - this.bp) / 2.5);
        } else {
          this.bp += 30;
        }
      } else {
        this.bp = this.bpy;
      }
      if (this.bp === this.bpy) {
        this.intro = 0;
      }
    }
    if (this.intro === 2) {
      if (this.bp > 0) {
        if (Ir((this.bpy - this.bp) / 5) > 15) {
          this.bp -= Ir((this.bpy - this.bp) / 2.5);
        } else {
          this.bp -= 30;
        }
      } else {
        this.bp = 0;
      }
    }
    if (Ig.chapter >= 4 && In.bcBp) {
      In.bcBp(this);
    }
    let nC = this.bp;
    if (Ig.chapter >= 4 && In.bcDrawTop) {
      In.bcDrawTop(this, nv);
    }
    this.rouxlsButtonStep();
    let no = Ig.chapter === 1;
    nv.draw_set_color(IK.black);
    nv.draw_rectangle(ne - 10, 481 + nY, ne + 700, no ? 480 - nC + nY : 480 - nC + nY - 4, false);
    nv.draw_set_color(this.bcolor);
    if (no) {
      nv.draw_rectangle(ne - 10, 480 - nC - 2 + nY, ne + 700, 480 - nC + nY, false);
    } else {
      nv.draw_rectangle(ne - 10, 480 - nC - 3 + nY, ne + 700, 480 - nC - 2 + nY, false);
    }
    nv.draw_rectangle(ne - 10, 480 - nC + 34 + nY, ne + 700, 480 - nC + 36 + nY, false);
    this.charbox(nv, nS, nY);
    nv.draw_set_font("fnt_mainbig");
    let nX = Ig.charturn;
    let L0 = Ig.bmenucoord;
    if (([1, 3, 11, 12].includes(Ig.bmenuno) || Ig.bmenuno === 13 && Ig.chapter !== 1) && Ig.myfight === 0) {
      nv.draw_sprite("spr_heart", 0, ne + 55, nY + 385 + L0[Ig.bmenuno][nX] * 30);
      let L1 = 0;
      for (let L3 = 0; L3 < 3; L3++) {
        let L4 = nv.string_width(Ig.monstername[L3]);
        if (L4 > L1) {
          L1 = L4;
        }
      }
      let L2 = Ig.monsterinstance[L0[Ig.bmenuno][nX]];
      if (L2 && !L2.destroyed) {
        if (L2.flash === 0) {
          L2.fsiner = 0;
        }
        L2.flash = 1;
        L2.becomeflash = 1;
      }
      if (Ig.monster.__customBoard && In.customHidden && In.customHidden() > 0) {
        nv.draw_sprite_ext("spr_morearrow", 0, ne + 40, nY + 382 - Ip(this.s_siner / 10) * 2, 1, -1, 0, IK.white, 1);
        nv.draw_sprite("spr_morearrow", 0, ne + 40, nY + 446 + Ip(this.s_siner / 10) * 2);
      }
      for (let L5 = 0; L5 < 3; L5++) {
        if (Ig.monster[L5] === 1) {
          let L6 = IK.white;
          let L7 = IK.white;
          let L8 = Iq(IK.aqua, IK.blue, 0.3);
          if (Ig.chapter === 3 && Ig.charturn === 2) {
            L8 = Iq(L8, IK.white, 0.5 + Ip((this.t_siner || 0) / 4) * 0.5);
          }
          let L9 = Ig.monsterstatus[L5] === 1;
          let LI = Ig.mercymod[L5] >= Ig.mercymax[L5];
          let LA = nv.string_width(Ig.monstername[L5]);
          if (L9) {
            if (Ig.encounterno !== 31) {
              L6 = L8;
              L7 = L8;
            }
            nv.draw_sprite("spr_tiredmark", 0, ne + 80 + LA + 40, nY + 385 + L5 * 30);
          }
          let Ln = Ig.chapter !== 1 && this.hidemercy === 1;
          let LL = Ig.chapter >= 4 && this.hidestar === 1;
          if (!LI || !LL) {
            if (LI) {
              L6 = IK.yellow;
              if (!L9) {
                L7 = IK.yellow;
              }
              if (!Ln) {
                nv.draw_sprite("spr_sparestar", 0, ne + 80 + LA + 20, nY + 385 + L5 * 30);
              }
            }
          }
          nv.draw_text_colour(ne + 80, nY + 375 + L5 * 30, Ig.monstername[L5], L6, L7, L7, L6, 1);
          let Lw = Ig.bmenuno === 13 && Ig.chapter !== 1;
          if (Lw) {
            let LH = IR(Ig.char[nX]);
            let LW = L0[2][nX];
            let Lg = LH === 2 ? Ig.actnamesus : LH === 3 ? Ig.actnameral : LH === 4 ? Ig.actnamenoe : null;
            let LR = "Standard";
            if (Lg && Lg[L5] && Lg[L5][LW] !== undefined) {
              LR = Lg[L5][LW];
            }
            if (LR === "S-Action" || LR === "R-Action" || LR === "N-Action") {
              LR = "Standard";
            }
            nv.draw_set_color((this.hpcolorsoft || [])[Q(Ig.char[nX]) === "noelle" ? 3 : LH - 1] || IK.white);
            let LG = 514 - (80 + L1 + 60);
            let LE = nv.string_width(String(LR));
            nv.draw_text_transformed(ne + 80 + L1 + 60, nY + 375 + L5 * 30, String(LR), LE >= LG ? LG / LE : 1, 1, 0);
          }
          if (!Lw) {
            nv.draw_text(ne + 80 + LA + 60, nY + 375 + L5 * 30, Ig.monstercomment[L5], IK.gray);
            let Lf = Ig.chapter === 1 ? 510 : 420;
            let La = Ig.chapter === 1 ? 590 : 500;
            let LN = Math.max(0, Ig.monsterhp[L5] / Ig.monstermaxhp[L5]);
            nv.draw_set_color(IK.maroon);
            nv.draw_rectangle(ne + Lf, nY + 380 + L5 * 30, ne + La, nY + 380 + L5 * 30 + 15, false);
            nv.draw_set_color(IK.lime);
            nv.draw_rectangle(ne + Lf, nY + 380 + L5 * 30, ne + Lf + LN * 80, nY + 380 + L5 * 30 + 15, false);
            if (Ig.chapter !== 1) {
              nv.draw_set_color(IK.white);
              nv.draw_text_transformed(ne + 424, nY + 364, "HP", 1, 0.5, 0);
              let LJ = Ig.chapter === 3 && Iv.exists("obj_knight_enemy") ? "???" : Math.ceil(LN * 100) + "%";
              nv.draw_text_transformed(ne + 424, nY + 380 + L5 * 30, LJ, 1, 0.5, 0);
            }
          }
          if (Ig.chapter !== 1 && !Ln) {
            let LF = Math.ceil(Ig.mercymod[L5] / Ig.mercymax[L5] * 100);
            if (LF > 100) {
              LF = 100;
            }
            let Lp = (this.cantspare || [])[L5] === 1;
            let Ly = Ig.chapter >= 4 && (this.questionmercy || [])[L5] === 1;
            if (Ig.chapter >= 4) {
              LF = Math.round(Ig.mercymod[L5] / Ig.mercymax[L5] * 100);
              if (LF > 100) {
                LF = 100;
              }
            }
            nv.draw_set_color(Iq(IK.orange, IK.red, 0.5));
            nv.draw_rectangle(ne + 520, nY + 380 + L5 * 30, ne + 600, nY + 380 + L5 * 30 + 15, false);
            nv.draw_set_color(IK.yellow);
            if (Ig.mercymod[L5] > 0 && !Lp && !Ly) {
              nv.draw_rectangle(ne + 520, nY + 380 + L5 * 30, ne + 520 + LF * 0.8, nY + 380 + L5 * 30 + 15, false);
            }
            nv.draw_set_color(IK.white);
            nv.draw_text_transformed(ne + 524, nY + 364, "MERCY", 1, 0.5, 0);
            nv.draw_set_color(IK.maroon);
            if (!Lp && !Ly) {
              nv.draw_text_transformed(ne + 524, nY + 380 + L5 * 30, LF + "%", 1, 0.5, 0);
            } else if (Ly && !Lp) {
              nv.draw_set_color(IK.white);
              nv.draw_text_transformed(ne + 524, nY + 364 + 15, "???", 1, 0.5, 0);
            } else {
              nv.draw_line_width_color(ne + 520 - 1, nY + 380 + L5 * 30, ne + 600, nY + 380 + L5 * 30 + 15, 2, IK.maroon, IK.maroon);
              nv.draw_line_width_color(ne + 520 - 1, nY + 380 + L5 * 30 + 15, ne + 600, nY + 380 + L5 * 30, 2, IK.maroon, IK.maroon);
            }
          }
        }
      }
    }
    if (Ig.bmenuno === 2 && Ig.myfight === 0 && Ig.flag[34] === 0 && Ig.chapter !== 1) {
      let LD = nX;
      let LZ = L0[2][nX];
      let Lb = 0;
      if (LZ > 5) {
        Lb = 1;
        LZ -= 6;
      }
      let HM = 10;
      let HB = 385;
      if (LZ % 2 === 1) {
        HM = 230;
      }
      if (LZ > 1 && LZ < 4) {
        HB = 415;
      }
      if (LZ > 3) {
        HB = 445;
      }
      nv.draw_sprite("spr_heart", 0, ne + HM, nY + HB);
      let Hi = Ig.battlespellname[LD] || [];
      let Hx = Ig.battlespellcost[LD] || [];
      let HU = Ig.battlespellspecial[LD] || [];
      let Hr = Ig.battlespell[LD] || [];
      for (let Hv = 0; Hv < 3; Hv++) {
        for (let He = 0; He < 2; He++) {
          let HY = Lb * 6 + Hv * 2 + He;
          let HS = IK.white;
          if ((HU[HY] || 0) >= 1) {
            HS = (this.hpcolorsoft || [])[IR(Ig.char[LD]) - 1] || (V(Ig.char[LD]) ? Iq(V(Ig.char[LD]), IK.white, 0.5) : IK.white);
          }
          let HC = !this.techUnlocked(LD, HY);
          let Ho = Ig.chapter >= 4 && In.techMenuColor ? In.techMenuColor(this, LD, HY, HS) : null;
          if (Ho != null && Ho !== false) {
            HS = Ho;
          } else if (Ig.tension < (Hx[HY] || 0) || HC || !S(Hr[HY], LD)) {
            HS = IK.gray;
          } else if (Hr[HY] === 3 || Hr[HY] === 8) {
            let HX = 0;
            for (let W0 = 0; W0 < 3; W0++) {
              if (Ig.monster[W0] === 1 && Ig.monsterstatus[W0] === 1 && Ig.encounterno !== 31) {
                HX = 1;
              }
            }
            if (HX) {
              let W1 = Iq(IK.aqua, IK.blue, 0.3);
              HS = Iq(W1, IK.white, 0.5 + Ip((this.t_siner || 0) / 4) * 0.5);
            }
          }
          nv.draw_text(ne + 30 + He * 230, nY + 375 + Hv * 30, Hi[HY] === undefined ? " " : Hi[HY], HS);
        }
      }
      if (!(Ig.chapter >= 4) || !In.techMenuInfoHide || !In.techMenuInfoHide(this, LD, Lb * 6 + LZ)) {
        let W2 = String((Ig.battlespelldesc[LD] || [])[Lb * 6 + LZ] || " ").split("#");
        let W3 = IW((Ig.battlespell[LD] || [])[Lb * 6 + LZ]);
        for (let W5 = 0; W5 < W2.length; W5++) {
          let W6 = W3 ? nv.string_width(W2[W5]) : 0;
          if (W6 > 136) {
            nv.draw_set_color(IK.gray);
            nv.draw_text_transformed(ne + 500, nY + 375 + W5 * 28, W2[W5], 136 / W6, 1, 0);
          } else {
            nv.draw_text(ne + 500, nY + 375 + W5 * 28, W2[W5], IK.gray);
          }
        }
        let W4 = IS((Hx[Lb * 6 + LZ] || 0) / Ig.maxtension * 100);
        if (W4 > 0) {
          nv.draw_text(ne + 500, nY + 440, W4 + "% TP", IK.orange);
        }
      }
    } else if (Ig.bmenuno === 2 && Ig.myfight === 0) {
      let W7 = Ig.char[nX];
      let W8 = L0[2][nX];
      let W9 = 0;
      if (W8 > 5) {
        W9 = 1;
        W8 -= 6;
      }
      let WI = 10;
      let WA = 385;
      if (W8 % 2 === 1) {
        WI = 230;
      }
      if (W8 > 1 && W8 < 4) {
        WA = 415;
      }
      if (W8 > 3) {
        WA = 445;
      }
      nv.draw_sprite("spr_heart", 0, ne + WI, nY + WA);
      for (let WH = 0; WH < 3; WH++) {
        let WW = W9 * 6 + WH * 2;
        let Wg = IK.white;
        if (Ig.tension < Ig.spellcost[W7][WW] || !S(Ig.spell[W7][WW], nX)) {
          Wg = IK.gray;
        } else if (Ig.spell[W7][WW] === 3) {
          let WR = 0;
          for (let WG = 0; WG < 3; WG++) {
            if (Ig.monster[WG] === 1 && Ig.monsterstatus[WG] === 1 && Ig.encounterno !== 31) {
              WR = 1;
            }
          }
          if (WR) {
            Wg = Iq(IK.aqua, IK.blue, 0.3);
          }
        }
        nv.draw_text(ne + 30, nY + 375 + WH * 30, Ig.spellnameb[W7][WW], Wg);
        nv.draw_text(ne + 260, nY + 375 + WH * 30, Ig.spellnameb[W7][WW + 1], Ig.tension < Ig.spellcost[W7][WW + 1] || !S(Ig.spell[W7][WW + 1], nX) ? IK.gray : IK.white);
      }
      let Wn = (Ig.spelldescb[W7][W9 * 6 + W8] || "").split("#");
      let WL = IW(Ig.spell[W7][W9 * 6 + W8]);
      for (let WE = 0; WE < Wn.length; WE++) {
        let Wf = WL ? nv.string_width(Wn[WE]) : 0;
        if (Wf > 136) {
          nv.draw_set_color(IK.gray);
          nv.draw_text_transformed(ne + 500, nY + 375 + WE * 28, Wn[WE], 136 / Wf, 1, 0);
        } else {
          nv.draw_text(ne + 500, nY + 375 + WE * 28, Wn[WE], IK.gray);
        }
      }
      let Ww = Ir(Ig.spellcost[W7][W9 * 6 + W8] / Ig.maxtension * 100);
      nv.draw_text(ne + 500, nY + 440, Ww + "% TP", IK.orange);
    }
    if (Ig.bmenuno === 4 && Ig.myfight === 0) {
      let Wa = L0[4][nX];
      let WN = 0;
      if (Wa > 5) {
        WN = 1;
        Wa -= 6;
      }
      let WJ = 10;
      let WD = 385;
      if (Wa % 2 === 1) {
        WJ = 230;
      }
      if (Wa > 1 && Wa < 4) {
        WD = 415;
      }
      if (Wa > 3) {
        WD = 445;
      }
      nv.draw_sprite("spr_heart", 0, ne + WJ, nY + WD);
      let WZ = WK => {
        let WP = this.tempitem[WK] ? this.tempitem[WK][nX] : 0;
        if (WP && IJ[WP]) {
          return IJ[WP][1];
        } else {
          return " ";
        }
      };
      for (let WK = 0; WK < 3; WK++) {
        nv.draw_text(ne + 30, nY + 375 + WK * 30, WZ(WN * 6 + WK * 2), IK.white);
        nv.draw_text(ne + 260, nY + 375 + WK * 30, WZ(WN * 6 + WK * 2 + 1), IK.white);
      }
      if (WN === 0 && Ig.item[6] !== 0) {
        nv.draw_sprite("spr_morearrow", 0, ne + 470, nY + 445 + Ip(this.s_siner / 10) * 2);
      }
      if (WN === 1) {
        nv.draw_sprite_ext("spr_morearrow", 0, ne + 470, nY + 395 - Ip(this.s_siner / 10) * 2, 1, -1, 0, IK.white, 1);
      }
      let Wb = this.tempitem[WN * 6 + Wa] ? this.tempitem[WN * 6 + Wa][nX] : 0;
      let Wm = Wb ? IH.items[Wb - 200] : null;
      nv.draw_text(ne + 500, nY + 375, Wm ? Wm.desc.replace(/#/g, "\n") : Wb && IJ[Wb] ? IJ[Wb][3] : " ", IK.gray);
    }
    if (Ig.bmenuno === 9 && Ig.myfight === 0) {
      let WP = L0[9][nX];
      let Wq = L0[11][nX];
      let Wc = 10;
      let Wz = 385;
      if (WP % 2 === 1) {
        Wc = 240;
      }
      if (WP > 1 && WP < 4) {
        Wz = 415;
      }
      if (WP > 3) {
        Wz = 445;
      }
      nv.draw_sprite("spr_heart", 0, ne + Wc, nY + Wz);
      let Wl = this.actinfo(Wq);
      let Ws = Ig.chapter === 1;
      for (let Wd = 0; Wd < 6; Wd++) {
        let Wj = 0;
        let WT = Ws || IR(Ig.char[nX]) === 1 ? Ig.actactor[Wq][Wd] : 0;
        let Wu = 0;
        let WQ = Wd % 2 === 1 ? 230 : 0;
        let Wh = Wd >= 4 ? 60 : Wd >= 2 ? 30 : 0;
        let WV = Ws ? 36 : 30;
        let WM = IK.white;
        let WB = IK.white;
        let Wi = IK.white;
        if (WT === 2 || WT === 4) {
          if (!this.partnerReady(2)) {
            WM = IK.gray;
            Wj = 1;
          }
          Wu = WV;
        }
        if (WT === 3 || WT === 4) {
          if (!this.partnerReady(3)) {
            WB = IK.gray;
            Wj = 1;
          }
          Wu = WV;
        }
        if (WT === 5 && !Ws) {
          if (!this.partnerReady(4)) {
            Wi = IK.gray;
            Wj = 1;
          }
          Wu = WV;
        }
        if (Ig.tension < Wl.cost.get(Wd)) {
          Wj = 1;
        }
        if (WT === 4) {
          Wu = Ws ? Ir(Wu * 1.8) : Wu * 2;
        }
        if (WT === 2) {
          nv.draw_sprite_ext("spr_headsusie", 0, ne + 30 + WQ, nY + 375 + Wh, 1, 1, 0, WM, 1);
        }
        if (WT === 3) {
          nv.draw_sprite_ext("spr_headralsei", 0, ne + 30 + WQ, nY + 375 + Wh, 1, 1, 0, WM, 1);
        }
        if (WT === 4) {
          nv.draw_sprite_ext("spr_headsusie", 0, ne + 30 + WQ, nY + 375 + Wh, 1, 1, 0, WM, 1);
          nv.draw_sprite_ext("spr_headralsei", 0, ne + 60 + WQ, nY + 375 + Wh, 1, 1, 0, WM, 1);
        }
        if (WT === 5 && !Ws) {
          nv.draw_sprite_ext("spr_headnoelle", 0, ne + 30 + WQ, nY + 375 + Wh, 1, 1, 0, Wi, 1);
        }
        if (Ig.chapter === 2) {
          Iv.with("obj_spamton_neo_enemy", Wr => {
            let Wv = Wr.savemeactcon || 0;
            if (Wv <= 0) {
              return;
            }
            let We = Wv <= 2 ? "spr_headralsei" : Wv <= 4 ? "spr_headsusie" : "spr_headnoelle";
            nv.draw_sprite_ext(We, 0, ne + 30, nY + 380, 1, 1, 0, Wi, 1);
          });
        }
        let Wx = String(Wl.name.get(Wd));
        let WU = Wj ? IK.gray : IK.white;
        if (Ig.chapter >= 4 && In.actNameColor) {
          WU = In.actNameColor(Wd, Wj, WU);
        }
        if (Ws) {
          nv.draw_text(ne + 30 + Wu + WQ, nY + 375 + Wh, Wx, WU);
        } else {
          let Wr = Math.max(1, nv.string_width(Wx));
          let Wv = Math.min(1, Math.max(0.5, (206 - Wu) / Wr));
          nv.draw_set_color(WU);
          nv.draw_text_transformed(ne + 30 + Wu + WQ, nY + 375 + Wh, Wx, Wv, 1, 0);
        }
      }
      let WO = Ig.chapter >= 4 && In.actInfoHide ? In.actInfoHide(this, WP) || {} : {};
      if (!WO.desc) {
        let We = String(Wl.desc.get(WP) || " ").split("#");
        for (let WY = 0; WY < We.length; WY++) {
          nv.draw_text(ne + 500, nY + 375 + WY * 28, We[WY], IK.gray);
        }
      }
      if (Ig.tensionselect > 0 && !WO.tp) {
        let WS = Ir(Wl.cost.get(WP) / Ig.maxtension * 100);
        nv.draw_text(ne + 500, nY + 440, WS + "% TP", IK.orange);
      }
      let Wk = Ig.monsterinstance[Wq];
      if (Wk && !Wk.destroyed) {
        if (Wk.flash === 0) {
          Wk.fsiner = 0;
        }
        Wk.flash = 1;
        Wk.becomeflash = 1;
      }
    }
    if ((Ig.bmenuno === 7 || Ig.bmenuno === 8) && Ig.myfight === 0 && If() > 3) {
      let WC = Math.floor(L0[Ig.bmenuno][nX] / 6) * 6;
      let Wt = Math.min(If(), WC + 6);
      let Wo = g2 => [ne + 80 + (g2 - WC < 3 ? 0 : 280), nY + 375 + (g2 - WC) % 3 * 30];
      let [WX, g0] = Wo(L0[Ig.bmenuno][nX]);
      nv.draw_sprite("spr_heart", 0, WX - 25, g0 + 10);
      let g1 = Ig.charinstance[L0[Ig.bmenuno][nX]];
      if (g1) {
        if (g1.flash === 0) {
          g1.fsiner = 0;
        }
        g1.flash = 1;
        g1.becomeflash = 1;
      }
      if (If() > 6) {
        nv.draw_set_font("fnt_main");
        nv.draw_set_halign("right");
        nv.draw_text(ne + 632, nY + 456, WC + 1 + "-" + Wt + "/" + If(), IK.gray);
        nv.draw_set_halign("left");
        nv.draw_set_font("fnt_mainbig");
      }
      for (let g2 = WC; g2 < Wt; g2++) {
        if (Ig.char[g2] !== 0) {
          let [g3, g4] = Wo(g2);
          let g5 = Ig.char[g2];
          nv.draw_text(g3, g4, Ig.charname[g5], IK.white);
          nv.draw_set_color(IK.maroon);
          nv.draw_rectangle(g3 + 150, g4 + 5, g3 + 230, g4 + 20, false);
          nv.draw_set_color(IK.lime);
          nv.draw_rectangle(g3 + 150, g4 + 5, g3 + 150 + Math.max(0, Ig.hp[g5] / Ig.maxhp[g5]) * 80, g4 + 20, false);
        }
      }
    } else if ((Ig.bmenuno === 7 || Ig.bmenuno === 8) && Ig.myfight === 0) {
      nv.draw_sprite("spr_heart", 0, ne + 55, nY + 385 + L0[Ig.bmenuno][nX] * 30);
      let g6 = Ig.charinstance[L0[Ig.bmenuno][nX]];
      if (g6) {
        if (g6.flash === 0) {
          g6.fsiner = 0;
        }
        g6.flash = 1;
        g6.becomeflash = 1;
      }
      for (let g7 = 0; g7 < If(); g7++) {
        if (Ig.char[g7] !== 0) {
          nv.draw_text(ne + 80, nY + 375 + g7 * 30, Ig.charname[Ig.char[g7]], IK.white);
          nv.draw_set_color(IK.maroon);
          nv.draw_rectangle(ne + 400, nY + 380 + g7 * 30, ne + 500, nY + 380 + g7 * 30 + 15, false);
          nv.draw_set_color(IK.lime);
          nv.draw_rectangle(ne + 400, nY + 380 + g7 * 30, ne + 400 + Math.max(0, Ig.hp[Ig.char[g7]] / Ig.maxhp[Ig.char[g7]]) * 100, nY + 380 + g7 * 30 + 15, false);
        }
      }
    }
    if (Ig.chapter >= 4 && In.bcDrawEnd) {
      In.bcDrawEnd(this, nv);
    }
  }
  charbox(nv, ne, nY) {
    let nS = v(this, If());
    if (nS) {
      this.charboxCompact(nv, ne, nY || 0, nS);
      return;
    }
    let nC = 0;
    let no = nY || 0;
    let nX = this.bp;
    for (let L0 = 0; L0 < If(); L0++) {
      if (this.havechar[L0] !== 1) {
        continue;
      }
      let L1 = Ig.char[L0];
      let L2 = IR(L1);
      let L3 = V(L1) || (Q(L1) === "noelle" ? IK.yellow : this.hpcolor[L2 - 1]);
      let L4 = Ig.charturn;
      let L5 = 0;
      let L6 = L0;
      let L7 = this.chartotal;
      let L8 = 212;
      let L9 = Ig.chapter === 1;
      if (L7 === 3) {
        L5 = (L9 ? [0, 212, 424] : [0, 213, 426])[L6];
      } else if (L7 === 2) {
        L5 = (L9 ? [106, 326] : [108, 322])[L6];
      } else {
        L5 = L9 ? 212 : 213;
      }
      let LI = !!this.rouxlsgridenabled;
      if (L4 === L6) {
        if (LI) {
          if (this.mmy[L0] > -170) {
            this.mmy[L0] -= 2;
          }
          if (this.mmy[L0] > -160) {
            this.mmy[L0] -= 4;
          }
          if (this.mmy[L0] > -150) {
            this.mmy[L0] -= 6;
          }
          if (this.mmy[L0] > -140) {
            this.mmy[L0] -= 12;
          }
          if (this.mmy[L0] > -32) {
            this.mmy[L0] -= 32;
          }
        } else {
          if (this.mmy[L0] > -32) {
            this.mmy[L0] -= 2;
          }
          if (this.mmy[L0] > -24) {
            this.mmy[L0] -= 4;
          }
          if (this.mmy[L0] > -16) {
            this.mmy[L0] -= 6;
          }
          if (this.mmy[L0] > -8) {
            this.mmy[L0] -= 8;
          }
          if (this.mmy[L0] < -32) {
            this.mmy[L0] = -64;
          }
        }
      } else if (LI) {
        if (this.mmy[L0] < -14) {
          this.mmy[L0] += 32;
        }
        if (this.mmy[L0] > -14) {
          this.mmy[L0] = 0;
        }
      } else if (this.mmy[L0] < -14) {
        this.mmy[L0] += 15;
      } else {
        this.mmy[L0] = 0;
      }
      if (LI && this.mmy[L0] !== 0) {
        nv.draw_set_color(IK.black);
        nv.draw_rectangle(nC + L5 + 2, 480 - nX - 1 + no + this.mmy[L0], nC + L5 + 210, 480 - nX + no + 33, false);
      }
      if (L4 === L6 && Ig.myfight === 0) {
        if (!LI) {
          this.selectionmatrix(nv, nC + L5, 480 - nX + no, L3);
        } else {
          let La = this.mmy[L0];
          let LN = nC + L5;
          let LJ = 480 - nX + no;
          nv.draw_rectangle(LN, 480 - nX - 3 + no + La, LN + 212, 480 - nX, false);
          nv.draw_set_color(IK.black);
          nv.draw_rectangle(LN + 2, 480 - nX - 1 + no + La, LN + 210, 480 - nX, false);
          this.s_siner += 2;
          nv.draw_set_color(L3);
          nv.draw_rectangle(LN, 480 - nX + 40 + no + La, LN + 212, 480 - nX + 43 + no + La, false);
          for (let LF = 0; LF < 12; LF++) {
            let Lp = this.s_siner + LF * (Math.PI * 10);
            nv.draw_set_alpha(Math.max(0, Ip(Lp / 60)));
            nv.draw_line_width(LN, LJ - 3 + La * 0.75, LN, LJ + 33, 2);
            nv.draw_line_width(LN + 211, LJ - 3 + La * 0.75, LN + 211, LJ + 33, 2);
            if (La < -140 && Iy(Lp / 60) < 0) {
              nv.draw_set_alpha(Math.max(0, y(0, Ip(Lp / 60), (IF(La) - 140) / 30)));
              nv.draw_line_width(LN - Ip(Lp / 60) * 30 + 30, LJ + La * 0.75, LN - Ip(Lp / 60) * 30 + 30, LJ + 33, 2);
              nv.draw_line_width(LN + 210 + Ip(Lp / 60) * 30 - 30, LJ + La * 0.75, LN + 210 + Ip(Lp / 60) * 30 - 30, LJ + 33, 2);
            }
          }
          nv.draw_set_alpha(1);
        }
      }
      let LA = this.mmy[L0];
      let Ln = new Array(Iv.exists("obj_rouxls_ch3_enemy") ? 25 : 5).fill(0);
      if (L4 === L6) {
        Ln[Ig.bmenucoord[0][Ig.charturn] + this.rouxlsbuttoncount_y * 5] = 1;
      }
      if (Ig.fighting === 1) {
        let Ly = 0;
        for (let Lb = 0; Lb < 3; Lb++) {
          if (Ig.monster[Lb] === 1 && Ig.mercymod[Lb] >= 100) {
            Ly = 1;
          }
        }
        let LD = 0;
        if (L2 === 3) {
          for (let HM = 0; HM < 3; HM++) {
            if (Ig.monster[HM] === 1 && Ig.monsterstatus[HM] === 1 && Ig.tension >= 40) {
              LD = 1;
            }
            if (Ig.encounterno === 31) {
              LD = 0;
            }
          }
        }
        let LZ = L9 ? 0 : 5;
        if (this.oopsallacts === 1 && (Iv.exists("obj_rouxls_ch3_enemy") || Iv.exists("obj_tenna_board4_enemy"))) {
          this.rouxlsCharbox(nv, nC + L5, LZ, nX, no, LA, L4 === L6, Ln);
        } else {
          let HB = Ig.chapter >= 4 && this.disablesusieralseiattack === 1 && (Ig.charturn === 1 || Ig.charturn === 2);
          nv.draw_sprite("spr_btfight", HB ? 2 : Ln[0], nC + L5 + 15 + LZ, 485 - nX + no);
          if (L2 === 1) {
            nv.draw_sprite("spr_btact", Ln[1], nC + L5 + 50 + LZ, 485 - nX + no);
          } else if (this.disablesusieact === 1 && L2 === 2) {
            nv.draw_sprite("spr_ja_bttech_grey", Ln[1], nC + L5 + 50 + LZ, 485 - nX + no);
          } else {
            nv.draw_sprite("spr_bttech", Ln[1], nC + L5 + 50 + LZ, 485 - nX + no);
          }
          nv.draw_sprite("spr_btitem", Ln[2], nC + L5 + 85 + LZ, 485 - nX + no);
          nv.draw_sprite("spr_btspare", Ln[3], nC + L5 + 120 + LZ, 485 - nX + no);
          nv.draw_sprite("spr_btdefend", Ln[4], nC + L5 + 155 + LZ, 485 - nX + no);
          if (Ly === 1 && L4 === L6) {
            nv.draw_sprite_ext("spr_btspare", 2, nC + L5 + 120 + LZ, 485 - nX + no, 1, 1, 0, IK.white, 0.4 + Ip(Ig.time / 6) * 0.4);
          }
          if (LD === 1 && L4 === L6) {
            nv.draw_sprite_ext("spr_bttech", 2, nC + L5 + 50 + LZ, 485 - nX + no, 1, 1, 0, IK.white, 0.4 + Ip(Ig.time / 6) * 0.4);
          }
        }
      }
      let LL = L4 === L6 ? L3 : this.bcolor;
      if (Ig.charselect === L6 || Ig.charselect === 3) {
        LL = L3;
      }
      let Lw = 480;
      if (Ig.fighting === 0) {
        Lw = 430;
      }
      if (Ig.fighting === 1) {
        Lw = 336;
      }
      nv.draw_set_color(LL);
      if (L9) {
        nv.draw_rectangle(nC + L5, 480 - nX - 2 + no + LA, nC + L5 + L8, 480 - nX + no, false);
        nv.draw_set_color(IK.black);
        nv.draw_rectangle(nC + L5 + 2, 480 - nX + no + LA, nC + L5 + L8 - 2, 480 - nX + no + LA + 33, false);
      } else if (this.rouxlsgridenabled) {
        nv.draw_rectangle(nC + L5, 480 - nX - 3 + no + LA, nC + L5 + L8, 480 - nX - 2 + no + LA, false);
        if (LA < -32) {
          nv.draw_rectangle(nC + L5, 480 - nX - 3 + no + LA, nC + L5 + 1, ne + Lw + 39 + LA, false);
          nv.draw_rectangle(nC + L5 + L8 - 1, 480 - nX - 3 + no + LA, nC + L5 + L8, ne + Lw + 39 + LA, false);
        }
        nv.draw_set_color(IK.black);
        if (L4 !== L6 && LA !== 0) {
          nv.draw_rectangle(nC + L5 + 2, 480 - nX - 1 + no + LA, nC + L5 + L8 - 2, 480 - nX + no + 33, false);
        } else {
          nv.draw_rectangle(nC + L5 + 2, 480 - nX - 1 + no + LA, nC + L5 + L8 - 2, 480 - nX + no + LA + 33, false);
        }
      } else {
        nv.draw_rectangle(nC + L5, 480 - nX - 3 + no + LA, nC + L5 + L8, 480 - nX + no - 2, false);
        nv.draw_set_color(IK.black);
        nv.draw_rectangle(nC + L5 + 2, 480 - nX - 1 + no + LA, nC + L5 + L8 - 2, 480 - nX + no + LA + 33, false);
      }
      let LH = Ig.charhero && Ig.charhero[L1] || d[L2 - 1] || "kris";
      let LW = k[LH] || k.kris;
      let Lg = LW.head && Ib[LW.head] ? LW.head : LW.head === null ? null : ["spr_headkris", "spr_headsusie", "spr_headralsei"][L2 - 1];
      let LR = LW.namesprite && Ib[LW.namesprite] ? LW.namesprite : LW.namesprite === null ? null : ["spr_bnamekris", "spr_bnamesusie", "spr_bnameralsei"][L2 - 1];
      let LG = {
        spr_bhero_head_a: [1, 41, 2],
        spr_bhero_head_b: [3, 43, 2],
        spr_bhero_head_c: [2, 43, 2],
        spr_bhero_head_d: [0, 36, 1.6]
      };
      let LE = null;
      if (L0 === 0 && Ig.chapter === 2) {
        Iv.with("o_boxingcontroller", Hi => {
          LE = LG[Hi.headsprite] || null;
        });
      }
      if (LE) {
        nv.draw_sprite_ext("spr_headthrash", LE[0], nC + LE[1] + L5, ne + 8 + Lw + LA, LE[2], LE[2], 0, IK.white, 1);
        if (Ib.spr_bnamethrash) {
          nv.draw_sprite("spr_bnamethrash", 0, nC + 51 + L5, ne + Lw + 3 + LA);
        } else {
          nv.draw_set_font("fnt_mainbig");
          nv.draw_text(nC + 46 + L5, ne + Lw + 2 + LA, String(Ig.charname[L1] || " ").toUpperCase(), IK.white);
        }
      }
      if (!LE && !LR) {
        nT(nv, String(Ig.charname[L1] || LW.name).toUpperCase(), nC + 46 + L5, ne + Lw + 2 + LA, 60);
      }
      if (!LE && Lg) {
        nu(nv, Lg, Ig.faceaction[L6], nC + 13 + L5, ne + Lw + LA);
      }
      if (!LE && LR) {
        nv.draw_sprite(LR, 0, nC + 51 + L5, ne + Lw + 3 + LA);
      }
      nv.draw_sprite("spr_hpname", 0, nC + 109 + L5, ne + Lw + 11 + LA);
      let Lf = IK.white;
      if (Ig.hp[L1] / Ig.maxhp[L1] <= 0.25) {
        Lf = IK.yellow;
      }
      if (Ig.hp[L1] <= 0) {
        Lf = IK.red;
      }
      nv.draw_set_halign("right");
      nv.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(Ig.hp[L1]), nC + 160 + L5, ne + Lw - 2 + LA, 1, 1, Lf, 1, 2);
      nv.draw_sprite("spr_hpslash", 0, nC + 159 + L5, ne + Lw - 4 + LA);
      nv.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(Ig.maxhp[L1]), nC + 205 + L5, ne + Lw - 2 + LA, 1, 1, Lf, 1, 2);
      nv.draw_set_halign("left");
      nv.draw_set_color(IK.maroon);
      nv.draw_rectangle(nC + 128 + L5, ne + Lw + 11 + LA, nC + 203 + L5, ne + Lw + 19 + LA, false);
      if (Ig.hp[L1] > 0 && Ig.maxhp[L1] > 0) {
        nv.draw_set_color(L3);
        nv.draw_rectangle(nC + 128 + L5, ne + Lw + 11 + LA, nC + L5 + 128 + IY(Ig.hp[L1] / Ig.maxhp[L1] * 75), ne + Lw + 19 + LA, false);
      }
    }
  }
  rouxlsCharbox(nv, ne, nY, nS, nC, no, nX, L0) {
    let L1 = Iv.first("obj_rouxls_ch3_enemy");
    let L2 = Iv.first("obj_tenna_board4_enemy");
    let L3 = 485 - nS + nC;
    let L4 = Ln => ne + 15 + Ln * 35 + nY;
    let L5 = "spr_btrouxls";
    let L6 = "spr_btspade";
    let L7 = "spr_btheart";
    let L8 = "spr_btact";
    if (this.dogcon === 1) {
      L6 = "spr_btdog";
    }
    if (this.dogcon === 2) {
      L6 = "spr_btdog";
      L7 = "spr_btdog";
      L8 = "spr_btdog";
    }
    if (this.rouxlserrorcon === 1 && this.dogcon < 1) {
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        L5 = "spr_btrouxls_select1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        L5 = "spr_btrouxls_select2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.rouxlstelegraphcon === 1 && this.dogcon < 1) {
      if (this.rouxlstelegraphtimer === 0) {
        Im("snd_bombfall");
      }
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        L5 = "spr_btexclamation1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        L5 = "spr_btexclamation2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.spadetelegraphcon === 1 && this.dogcon < 1) {
      this.spadetelegraphtimer++;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 4) {
        L6 = "spr_btexclamation1_spade";
      }
      if (this.spadetelegraphtimer >= 5 && this.spadetelegraphtimer <= 8) {
        L6 = "spr_btexclamation2";
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.spadesuccesscon === 1 && this.heartsuccesscon === 0) {
      this.spadetelegraphtimer++;
      let Ln = this.spadetelegraphtimer >= 5 ? 2 : 1;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 8) {
        if (this.spadefail) {
          L8 = Ln === 1 ? "spr_btact_fail1" : "spr_btact_fail2";
        } else {
          L6 = Ln === 1 ? "spr_btspade_success" : "spr_btspade_success2";
          if (this.dogcon === 1 || this.dogcon === 2) {
            L6 = Ln === 1 ? "spr_btdog_success" : "spr_btdog_success2";
            L8 = L6;
          }
        }
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.heartsuccesscon === 1) {
      this.heartsuccesstimer++;
      if (this.heartsuccesstimer >= 1 && this.heartsuccesstimer <= 4) {
        L7 = "spr_btheart_success1";
      }
      if (this.heartsuccesstimer >= 5 && this.heartsuccesstimer <= 8) {
        L7 = "spr_btheart_success2";
      }
      if (this.heartsuccesstimer === 8) {
        this.heartsuccesstimer = 0;
      }
    }
    let L9 = (LL, Lw, LH) => {
      LL.introtimer = (LL.introtimer || 0) + 1;
      if (LL.introtimer === 1) {
        Im("snd_petrify");
      }
      let LW;
      if (LL.introtimer < 30) {
        nv.draw_sprite("spr_btfight", 0, L4(0), L3);
        nv.draw_sprite("spr_btact", 0, L4(1), L3);
        nv.draw_sprite("spr_bttech", 0, L4(2), L3);
        nv.draw_sprite("spr_btitem", 0, L4(3), L3);
        nv.draw_sprite("spr_btspare", 0, L4(4), L3);
        LW = y(0, 1.2, LL.introtimer / 29);
      } else {
        for (let Lg = 0; Lg < 5; Lg++) {
          nv.draw_sprite("spr_btact", 0, L4(Lg), L3);
        }
        LW = y(1, 0, (LL.introtimer - 30) / 30);
        if (LH) {
          Ig.bmenucoord[0][0] = 2;
          Ig.bmenucoord[0][1] = 2;
          Ig.bmenucoord[0][2] = 2;
        }
      }
      for (let LR = 0; LR < 5; LR++) {
        nv.draw_sprite_ext("spr_btact_rouxls_white", 0, L4(LR), L3, 1, 1, 0, IK.white, LW);
      }
      if (Lw && LL.introtimer === 60) {
        LL.intro = 3;
      }
    };
    if (L1 && L1.intro === 2) {
      L9(L1, true, false);
      return;
    }
    if (L2 && L2.intro === 1) {
      L9(L2, false, true);
      return;
    }
    let LI = 0;
    let LA = 1;
    if (this.rouxlsgridenabled) {
      LA = 5;
    }
    if (nX) {
      for (let LL = 0; LL < LA; LL++) {
        let Lw = y(140, 0, IF(no / 170));
        let LH = LI * 32 + no * 0.75 + Lw;
        if (LA === 1) {
          LH += 32;
        }
        if (LH > 0) {
          LH = 0;
        }
        let LW = L8;
        if (LI !== 4 && this.rouxlsgridenabled) {
          LW = "spr_btact_ex";
        }
        for (let Lg = 0; Lg < 5; Lg++) {
          let LR = Lg + 1 + LI * 5;
          let LG = L0[Lg + LI * 5] || 0;
          let LE = LW;
          if (this.rouxlsbuttoncount === LR || this.rouxlsbuttoncount2 === LR) {
            LE = L5;
          } else if (this.spadebuttoncount === LR) {
            LE = L6;
          } else if (this.heartbuttoncount === LR) {
            LE = L7;
          }
          nv.draw_sprite(LE, LG, L4(Lg), L3 + LH);
        }
        LI++;
      }
    }
  }
  selectionmatrix(A, nv, ne, nY, nS = 210) {
    this.s_siner += 2;
    A.draw_set_color(nY);
    A.draw_rectangle(nv, ne, nv + nS, ne + 3, false);
    for (let nC = 0; nC < 12; nC++) {
      let no = this.s_siner + nC * (Math.PI * 10);
      A.draw_set_alpha(Math.max(0, Ip(no / 60)));
      A.draw_line_width(nv, ne, nv, ne + 33, 2);
      A.draw_line_width(nv + nS, ne, nv + nS, ne + 33, 2);
      if (Iy(no / 60) < 0) {
        A.draw_line_width(nv - Ip(no / 60) * 30 + 30, ne, nv - Ip(no / 60) * 30 + 30, ne + 33, 2);
        A.draw_line_width(nv + nS + Ip(no / 60) * 30 - 30, ne, nv + nS + Ip(no / 60) * 30 - 30, ne + 33, 2);
      }
    }
    A.draw_set_alpha(1);
  }
  groupBox(nv, ne, nY, nS, nC) {
    let no = this.bp;
    let nX = Ig.chapter === 1;
    let {
      x: L0,
      w: L1
    } = nC;
    let L2 = nC.group.map(LG => Ig.char[s(LG)]).filter(Boolean);
    if (!L2.length) {
      return;
    }
    let L3 = L2[0];
    let L4 = IR(L3);
    let L5 = h(L3);
    let L6 = V(L3) || (Q(L3) === "noelle" ? IK.yellow : this.hpcolor[L4 - 1]) || IK.white;
    nv.draw_set_color(this.bcolor);
    if (nX) {
      nv.draw_rectangle(L0, 480 - no - 2 + nY, L0 + L1, 480 - no + nY, false);
      nv.draw_set_color(IK.black);
      nv.draw_rectangle(L0 + 2, 480 - no + nY, L0 + L1 - 2, 480 - no + nY + 33, false);
    } else {
      nv.draw_rectangle(L0, 480 - no - 3 + nY, L0 + L1, 480 - no + nY - 2, false);
      nv.draw_set_color(IK.black);
      nv.draw_rectangle(L0 + 2, 480 - no - 1 + nY, L0 + L1 - 2, 480 - no + nY + 33, false);
    }
    let L7 = ne + nS;
    let L8 = L0 + L1 - 6;
    let L9 = L5.head && Ib[L5.head] ? L5.head : L5.head === null ? null : ["spr_headkris", "spr_headsusie", "spr_headralsei"][L4 - 1];
    let LI = String(L5.name || Ig.charname[L3]).toUpperCase() + (L2.length > 1 ? " X" + L2.length : "");
    let LA = !!L9 && L1 - 48 >= AR(LI).narrow;
    let Ln = LA ? L0 + 42 : L0 + 6;
    if (LA) {
      nu(nv, L9, 0, L0 + 5, L7);
    }
    let LL = 0;
    let Lw = 0;
    let LH = 0;
    for (let LG of L2) {
      LL += Math.max(0, Ig.hp[LG]);
      Lw += Ig.maxhp[LG];
      if (Ig.hp[LG] > 0) {
        LH++;
      }
    }
    let LW = AG(LI, L8 - Ln);
    if (LW) {
      if (Ib[LW].w <= L8 - Ln) {
        nv.draw_sprite(LW, 0, Ln, L7 - 5);
      } else {
        nv.draw_sprite_part(LW, 0, 0, 0, L8 - Ln, 15, Ln, L7 - 5);
      }
    }
    let Lg = Ln;
    let LR = L8 - 1;
    nv.draw_set_color(IK.maroon);
    nv.draw_rectangle(Lg, L7 + 11, LR, L7 + 19, false);
    if (LL > 0 && Lw > 0) {
      nv.draw_set_color(LH < L2.length ? Iq(L6, IK.yellow, 0.3) : L6);
      nv.draw_rectangle(Lg, L7 + 11, Lg + IY(LL / Lw * (LR - Lg)), L7 + 19, false);
    }
  }
  charboxCompact(nv, ne, nY, nS) {
    let nC = this.bp;
    let no = Ig.chapter === 1;
    let nX = Ig.charturn;
    let L0 = 480;
    if (Ig.fighting === 0) {
      L0 = 430;
    }
    if (Ig.fighting === 1) {
      L0 = 336;
    }
    this.boxLay = nS;
    if (nS.crowd) {
      let L1 = (nS.turn >= 0 ? "TURN " + (nS.turn + 1) + " OF " + nS.total + "  C ALL FIGHT" : "PARTY OF " + nS.total) + (nS.pages > 1 ? "  PAGE " + (nS.page + 1) + " OF " + nS.pages : "");
      let L2 = AG(L1, 400);
      if (L2) {
        nv.draw_sprite(L2, 0, 636 - Ib[L2].w, 480 - this.bp + nY - 54);
      }
    }
    for (let L3 = 0; L3 < nS.length; L3++) {
      if (nS[L3].group) {
        this.groupBox(nv, ne, nY, L0, nS[L3]);
        continue;
      }
      let L4 = nS[L3].slot;
      if (this.havechar[L4] !== 1) {
        continue;
      }
      let L5 = s(L4);
      let L6 = Ig.char[L5];
      let L7 = IR(L6);
      let L8 = V(L6) || (Q(L6) === "noelle" ? IK.yellow : this.hpcolor[L7 - 1]) || IK.white;
      let {
        x: L9,
        w: LI
      } = nS[L3];
      let LA = nX === L4 && Ig.myfight === 0;
      if (nX === L4) {
        if (this.mmy[L4] > -32) {
          this.mmy[L4] -= 2;
        }
        if (this.mmy[L4] > -24) {
          this.mmy[L4] -= 4;
        }
        if (this.mmy[L4] > -16) {
          this.mmy[L4] -= 6;
        }
        if (this.mmy[L4] > -8) {
          this.mmy[L4] -= 8;
        }
        if (this.mmy[L4] < -32) {
          this.mmy[L4] = -64;
        }
      } else if (this.mmy[L4] < -14) {
        this.mmy[L4] += 15;
      } else {
        this.mmy[L4] = 0;
      }
      let Ln = this.mmy[L4];
      if (LA) {
        this.selectionmatrix(nv, L9, 480 - nC + nY, L8, LI - 2);
      }
      if (Ig.fighting === 1 && nX === L4) {
        let Lp = [0, 0, 0, 0, 0];
        Lp[Ig.bmenucoord[0][nX]] = 1;
        let Ly = 0;
        for (let Lb = 0; Lb < 3; Lb++) {
          if (Ig.monster[Lb] === 1 && Ig.mercymod[Lb] >= 100) {
            Ly = 1;
          }
        }
        let LD = L9 + Math.max(4, Math.floor((LI - 171) / 2));
        let LZ = 485 - nC + nY;
        if (this.oopsallacts === 1 && (Iv.exists("obj_rouxls_ch3_enemy") || Iv.exists("obj_tenna_board4_enemy"))) {
          let HM = new Array(25).fill(0);
          HM[Ig.bmenucoord[0][nX] + this.rouxlsbuttoncount_y * 5] = 1;
          this.rouxlsCharbox(nv, LD - 20, 5, nC, nY, Ln, true, HM);
          this.boxBtnX = LD;
        } else {
          nv.draw_sprite("spr_btfight", Lp[0], LD, LZ);
          nv.draw_sprite(L7 === 1 ? "spr_btact" : "spr_bttech", Lp[1], LD + 35, LZ);
          nv.draw_sprite("spr_btitem", Lp[2], LD + 70, LZ);
          nv.draw_sprite("spr_btspare", Lp[3], LD + 105, LZ);
          nv.draw_sprite("spr_btdefend", Lp[4], LD + 140, LZ);
          if (Ly === 1) {
            nv.draw_sprite_ext("spr_btspare", 2, LD + 105, LZ, 1, 1, 0, IK.white, 0.4 + Ip(Ig.time / 6) * 0.4);
          }
          this.boxBtnX = LD;
        }
      }
      nv.draw_set_color(nX === L4 ? L8 : this.bcolor);
      if (no) {
        nv.draw_rectangle(L9, 480 - nC - 2 + nY + Ln, L9 + LI, 480 - nC + nY, false);
        nv.draw_set_color(IK.black);
        nv.draw_rectangle(L9 + 2, 480 - nC + nY + Ln, L9 + LI - 2, 480 - nC + nY + Ln + 33, false);
      } else {
        nv.draw_rectangle(L9, 480 - nC - 3 + nY + Ln, L9 + LI, 480 - nC + nY - 2, false);
        nv.draw_set_color(IK.black);
        nv.draw_rectangle(L9 + 2, 480 - nC - 1 + nY + Ln, L9 + LI - 2, 480 - nC + nY + Ln + 33, false);
      }
      let LL = h(L6);
      let Lw = ne + L0 + Ln;
      let LH = LL.head && Ib[LL.head] ? LL.head : LL.head === null ? null : ["spr_headkris", "spr_headsusie", "spr_headralsei"][L7 - 1];
      let LW = !!LH && LI >= 130;
      let Lg = LW ? L9 + 42 : L9 + 6;
      let LR = L9 + LI - 6;
      if (LW) {
        nu(nv, LH, Ig.faceaction[L5], L9 + 5, Lw);
      }
      let LG = String(Ig.charname[L6] || LL.name).toUpperCase();
      let LE = String(Ig.hp[L6]).length * 8;
      let Lf = LR - Lg >= AR(LG).narrow + 8 + 48 + LE;
      let La = Lf ? 48 + LE : LE;
      let LN = IK.white;
      if (Ig.hp[L6] / Ig.maxhp[L6] <= 0.25) {
        LN = IK.yellow;
      }
      if (Ig.hp[L6] <= 0) {
        LN = IK.red;
      }
      nv.draw_set_halign("right");
      if (Lf) {
        nv.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(Ig.hp[L6]), LR - 46, Lw - 2, 1, 1, LN, 1, 2);
        nv.draw_sprite("spr_hpslash", 0, LR - 47, Lw - 4);
        nv.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(Ig.maxhp[L6]), LR + 1, Lw - 2, 1, 1, LN, 1, 2);
      } else {
        nv.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(Ig.hp[L6]), LR, Lw - 2, 1, 1, LN, 1, 2);
      }
      nv.draw_set_halign("left");
      {
        let HB = String(Ig.charname[L6] || LL.name).toUpperCase();
        let Hi = Math.max(16, LR - Lg - La - 8);
        let Hx = AG(HB, Hi);
        if (Hx) {
          let HU = Ib[Hx].w;
          nv.draw_sprite_ext(Hx, 0, Lg, Lw - 5, HU > Hi ? Hi / HU : 1, 1, 0, IK.white, 1);
        } else {
          nv.draw_set_font("fnt_main");
          nv.draw_text(Lg, Lw - 5, HB, IK.white);
          nv.draw_set_font("fnt_mainbig");
        }
      }
      let LJ = Lg;
      let LF = LR - 1;
      nv.draw_set_color(IK.maroon);
      nv.draw_rectangle(LJ, Lw + 11, LF, Lw + 19, false);
      if (Ig.hp[L6] > 0 && Ig.maxhp[L6] > 0) {
        nv.draw_set_color(L8);
        nv.draw_rectangle(LJ, Lw + 11, LJ + IY(Ig.hp[L6] / Ig.maxhp[L6] * (LF - LJ)), Lw + 19, false);
      }
    }
  }
};
IC(nx, "obj_battlecontroller");
Io(nx, "kinds", Ij("obj_battlecontroller", Id));
Io(nx, "defaultDepth", 5);
Io(nx, "screenSpace", true);
var nU = nx;
u({
  healFx: nm,
  obj_dmgwriter: Af
});
IX(n6, "G.mnfight = 1;");
IX(nU, "G.myfight = 0;G.mnfight = 0;G.myfight = 7;G.mnfight = 2;");
export { AL as a, AR as b, AG as c, Af as d, AN as e, AF as f, Ay as g, AZ as h, Am as i, Ac as j, Al as k, Ak as l, Aj as m, AQ as n, AV as o, AB as p, AU as q, AY as r, AC as s, n3 as t, n4 as u, n6 as v, n8 as w, nI as x, nn as y, nw as z, nH as A, ng as B, nR as C, nG as D, nE as E, nf as F, na as G, nN as H, nJ as I, nF as J, np as K, nZ as L, nb as M, nP as N, nq as O, nc as P, nj as Q, nU as R };
