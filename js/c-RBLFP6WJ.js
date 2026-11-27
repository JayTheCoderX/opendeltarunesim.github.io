import { B as a, D as g, b as o, c as F, d as l, e as P, f as O, g as J, h as y, i as m, j as K, k as B, l as d, p as X, z as V } from "./c-J7PU4477.js";
import { f as T } from "./c-WSZI3RLB.js";
import { a as A, b as t } from "./c-GI6IDYOV.js";
import { g as N } from "./c-ZQQWH6UG.js";
import { Fa as b, Ga as h, Ha as U, Ja as i, N as E, Oc as Q, U as s, X as Z, ac as u, xb as W } from "./c-PBMEVLU6.js";
import { a as G, l as p } from "./c-XSSGDLV7.js";
p();
var r = Math.PI / 180;
function L(nJ) {
  let ny = nJ.mask_index;
  if (typeof ny == "number" && ny < 0) {
    return nJ.sprite_index;
  } else {
    return ny || nJ.sprite_index;
  }
}
G(L, "collName");
var j = null;
var c = G(() => j ||= d(), "gfx");
var R = {
  plans: 0,
  ms: 0,
  lastMs: 0,
  frames: 0,
  states: 0,
  lastHits: 0,
  mode: ""
};
var C = new Int32Array(256);
var Y = class nd {
  constructor(nJ, ny, nm, nK, nB, nX) {
    this.x0 = nJ;
    this.y0 = ny;
    this.w = nm;
    this.h = nK;
    this.cs = nB;
    this.frames = nX;
    this.stride = (nm + 1) * (nK + 1);
    this.sat = new Int32Array(this.stride * nX);
    this.occ = new Uint8Array(nm * nK);
    this.lo = 0;
    this.hi = nK;
  }
  clearOcc() {
    this.occ.fill(0, 0, this.w * this.h);
    this.dirty = false;
    this.lo = this.h;
    this.hi = 0;
  }
  rows(nJ, ny) {
    if (nJ < this.lo) {
      this.lo = nJ;
    }
    if (ny > this.hi) {
      this.hi = ny;
    }
  }
  paint(nJ) {
    let ny = L(nJ);
    if (!ny) {
      return;
    }
    let nm = E[ny];
    if (!nm || !nm.bb) {
      return;
    }
    let nK = nJ.image_xscale || 0;
    let nB = nJ.image_yscale || 0;
    if (!nK || !nB) {
      return;
    }
    let nX = (nJ.image_angle || 0) * r;
    let nV = Math.cos(nX);
    let nT = Math.sin(nX);
    let nA = nm.bb;
    let nt = [(nA[0] - nm.ox) * nK, (nA[2] + 1 - nm.ox) * nK];
    let nN = [(nA[1] - nm.oy) * nB, (nA[3] + 1 - nm.oy) * nB];
    let nb = 1000000000;
    let nh = 1000000000;
    let nU = -1000000000;
    let ni = -1000000000;
    for (let nC of nt) {
      for (let nY of nN) {
        let nf = nJ.x + nC * nV + nY * nT;
        let nI = nJ.y - nC * nT + nY * nV;
        if (nf < nb) {
          nb = nf;
        }
        if (nf > nU) {
          nU = nf;
        }
        if (nI < nh) {
          nh = nI;
        }
        if (nI > ni) {
          ni = nI;
        }
      }
    }
    let nE = this.cs;
    let nQ = Math.floor((nb - this.x0) / nE);
    let nS = Math.ceil((nU - this.x0) / nE);
    let nZ = Math.floor((nh - this.y0) / nE);
    let nu = Math.ceil((ni - this.y0) / nE);
    if (nS < 0 || nu < 0 || nQ >= this.w || nZ >= this.h) {
      return;
    }
    if (nQ < 0) {
      nQ = 0;
    }
    if (nZ < 0) {
      nZ = 0;
    }
    if (nS > this.w) {
      nS = this.w;
    }
    if (nu > this.h) {
      nu = this.h;
    }
    let nW = nm.precise && nm.masks ? nm.masks.length : 1;
    let nG = (Math.floor(nJ.image_index || 0) % Math.max(1, nm.frames) + nm.frames) % Math.max(1, nm.frames);
    let np = n1(nm, Math.min(nG, nW - 1));
    this.dirty = true;
    this.rows(nZ, nu);
    let nr = nm.w;
    let nL = nm.h;
    let nj = this.occ;
    let nc = this.w;
    let nR = !nm.precise && !nX;
    if (!nR && !nX && Number.isFinite(nJ.x) && Number.isFinite(nJ.y)) {
      let nw = nS - nQ;
      if (C.length < nw) {
        C = new Int32Array(nw + 256);
      }
      for (let nk = nQ; nk < nS; nk++) {
        let nD = Math.floor((this.x0 + (nk + 0.5) * nE - nJ.x) / nK + nm.ox);
        C[nk - nQ] = nD >= 0 && nD < nr ? nD : -1;
      }
      for (let nz = nZ; nz < nu; nz++) {
        let M0 = Math.floor((this.y0 + (nz + 0.5) * nE - nJ.y) / nB + nm.oy);
        if (!(M0 >= 0) || !(M0 < nL)) {
          continue;
        }
        let M1 = M0 * nr;
        for (let M2 = nQ; M2 < nS; M2++) {
          let M3 = C[M2 - nQ];
          if (M3 >= 0 && np[M1 + M3]) {
            nj[nz * nc + M2] = 1;
          }
        }
      }
      return;
    }
    for (let M4 = nZ; M4 < nu; M4++) {
      let M5 = this.y0 + (M4 + 0.5) * nE;
      for (let M6 = nQ; M6 < nS; M6++) {
        let M7 = this.x0 + (M6 + 0.5) * nE;
        if (nR) {
          if (M7 >= nb && M7 < nU && M5 >= nh && M5 < ni) {
            nj[M4 * nc + M6] = 1;
          }
          continue;
        }
        let M8 = M7 - nJ.x;
        let M9 = M5 - nJ.y;
        let Mn = M8 * nV - M9 * nT;
        let MM = M8 * nT + M9 * nV;
        let Me = Math.floor(Mn / nK + nm.ox);
        let Mv = Math.floor(MM / nB + nm.oy);
        if (!(Me < 0) && !(Mv < 0) && !(Me >= nr) && !(Mv >= nL)) {
          if (np[Mv * nr + Me]) {
            nj[M4 * nc + M6] = 1;
          }
        }
      }
    }
  }
  paintRect(nJ, ny, nm, nK) {
    let nB = this.cs;
    let nX = Math.floor((nJ - this.x0) / nB);
    let nV = Math.ceil((nm - this.x0) / nB);
    let nT = Math.floor((ny - this.y0) / nB);
    let nA = Math.ceil((nK - this.y0) / nB);
    if (nX < 0) {
      nX = 0;
    }
    if (nT < 0) {
      nT = 0;
    }
    if (nV > this.w) {
      nV = this.w;
    }
    if (nA > this.h) {
      nA = this.h;
    }
    let nt = this.w;
    let nN = this.occ;
    if (nV > nX && nA > nT) {
      this.dirty = true;
      this.rows(nT, nA);
    }
    for (let nb = nT; nb < nA; nb++) {
      nN.fill(1, nb * nt + nX, nb * nt + Math.max(nX, nV));
    }
  }
  paintLine(nJ, ny, nm, nK, nB) {
    let nX = this.cs;
    let nV = this.w;
    let nT = this.occ;
    this.dirty = true;
    this.rows(0, this.h);
    let nA = Math.abs(nK) > 1e-9;
    for (let nt = 0; nt < this.h; nt++) {
      let nN = this.y0 + (nt + 0.5) * nX - ny;
      let nb = 0;
      let nh = nV;
      if (nA) {
        let nU = (nN * nm - nB) / nK;
        let ni = (nN * nm + nB) / nK;
        nb = Math.max(0, Math.floor((Math.min(nU, ni) - 2 + nJ - this.x0) / nX) - 1);
        nh = Math.min(nV, Math.ceil((Math.max(nU, ni) + 2 + nJ - this.x0) / nX) + 1);
      }
      for (let nE = nb; nE < nh; nE++) {
        let nQ = this.x0 + (nE + 0.5) * nX - nJ;
        let nS = nQ * nm + nN * nK;
        if (nS < 0 || nS > 1000) {
          continue;
        }
        if (Math.abs(nQ * nK - nN * nm) <= nB) {
          nT[nt * nV + nE] = 1;
        }
      }
    }
  }
  paintSeg(nJ, ny, nm, nK) {
    let nB = Math.min(nJ, nm) - 2;
    let nX = Math.max(nJ, nm) + 2;
    let nV = Math.min(ny, nK) - 2;
    let nT = Math.max(ny, nK) + 2;
    let nA = this.cs;
    let nt = this.w;
    let nN = this.occ;
    let nb = nm - nJ;
    let nh = nK - ny;
    let nU = nb * nb + nh * nh || 1;
    let ni = Math.max(0, Math.floor((nB - this.x0) / nA));
    let nE = Math.min(nt, Math.ceil((nX - this.x0) / nA));
    let nQ = Math.max(0, Math.floor((nV - this.y0) / nA));
    let nS = Math.min(this.h, Math.ceil((nT - this.y0) / nA));
    this.rows(nQ, nS);
    let nZ = Math.abs(nh) > 1e-9;
    for (let nu = nQ; nu < nS; nu++) {
      let nW = ni;
      let nG = nE;
      if (nZ) {
        let np = this.y0 + (nu + 0.5) * nA;
        let nr = Math.min(1, Math.max(0, (np - 3 - ny) / nh));
        let nL = Math.min(1, Math.max(0, (np + 3 - ny) / nh));
        let nj = nJ + nb * Math.min(nr, nL);
        let nc = nJ + nb * Math.max(nr, nL);
        nW = Math.max(ni, Math.floor((Math.min(nj, nc) - 3 - this.x0) / nA) - 1);
        nG = Math.min(nE, Math.ceil((Math.max(nj, nc) + 3 - this.x0) / nA) + 1);
      }
      for (let nR = nW; nR < nG; nR++) {
        let nC = this.x0 + (nR + 0.5) * nA - nJ;
        let nY = this.y0 + (nu + 0.5) * nA - ny;
        let nf = Math.max(0, Math.min(1, (nC * nb + nY * nh) / nU));
        let nI = nC - nb * nf;
        let nw = nY - nh * nf;
        if (nI * nI + nw * nw <= 2.25) {
          nN[nu * nt + nR] = 1;
          this.dirty = true;
        }
      }
    }
  }
  paintCircle(nJ, ny, nm) {
    let nK = this.cs;
    let nB = this.w;
    let nX = this.occ;
    let nV = (nm + 1) * (nm + 1);
    let nT = Math.max(0, Math.floor((nJ - nm - 1 - this.x0) / nK));
    let nA = Math.min(nB, Math.ceil((nJ + nm + 1 - this.x0) / nK));
    let nt = Math.max(0, Math.floor((ny - nm - 1 - this.y0) / nK));
    let nN = Math.min(this.h, Math.ceil((ny + nm + 1 - this.y0) / nK));
    this.rows(nt, nN);
    for (let nb = nt; nb < nN; nb++) {
      for (let nh = nT; nh < nA; nh++) {
        let nU = this.x0 + (nh + 0.5) * nK - nJ;
        let ni = this.y0 + (nb + 0.5) * nK - ny;
        if (nU * nU + ni * ni <= nV) {
          nX[nb * nB + nh] = 1;
          this.dirty = true;
        }
      }
    }
  }
  commit(nJ) {
    if (!this.empty || this.empty.length < this.frames) {
      this.empty = new Uint8Array(Math.max(this.frames, 64));
    }
    this.empty[nJ] = this.dirty ? 0 : 1;
    if (!this.dirty) {
      return;
    }
    let ny = this.w;
    let nm = this.h;
    let nK = nJ * this.stride;
    let nB = this.sat;
    let nX = this.occ;
    let nV = ny + 1;
    let nT = Math.max(0, Math.min(nm, this.lo));
    let nA = Math.max(nT, Math.min(nm, this.hi));
    nB.fill(0, nK, nK + (nT + 1) * nV);
    for (let nt = nT + 1; nt <= nA; nt++) {
      let nN = 0;
      nB[nK + nt * nV] = 0;
      for (let nb = 1; nb <= ny; nb++) {
        nN += nX[(nt - 1) * ny + nb - 1];
        nB[nK + nt * nV + nb] = nB[nK + (nt - 1) * nV + nb] + nN;
      }
    }
    for (let nh = nA + 1; nh <= nm; nh++) {
      nB.copyWithin(nK + nh * nV, nK + nA * nV, nK + nA * nV + nV);
    }
  }
  any(nJ, ny, nm, nK, nB) {
    if (this.empty[nJ]) {
      return false;
    }
    let nX = this.cs;
    let nV = Math.floor((ny - this.x0) / nX);
    let nT = Math.ceil((nK - this.x0) / nX);
    let nA = Math.floor((nm - this.y0) / nX);
    let nt = Math.ceil((nB - this.y0) / nX);
    if (nV < 0) {
      nV = 0;
    }
    if (nA < 0) {
      nA = 0;
    }
    if (nT > this.w) {
      nT = this.w;
    }
    if (nt > this.h) {
      nt = this.h;
    }
    if (nT <= nV || nt <= nA) {
      return false;
    }
    let nN = this.w + 1;
    let nb = nJ * this.stride;
    let nh = this.sat;
    return nh[nb + nt * nN + nT] - nh[nb + nA * nN + nT] - nh[nb + nt * nN + nV] + nh[nb + nA * nN + nV] > 0;
  }
};
G(Y, "Grid");
var f = Y;
var I = [];
var w = null;
var k = null;
var D = 0;
function z(nJ, ny, nm, nK, nB, nX, nV) {
  let nT = I[nJ];
  if (!nT || nT.sat.length < (nK + 1) * (nB + 1) * nV || nT.occ.length < nK * nB) {
    nT = new f(ny, nm, nK, nB, nX, nV);
    I[nJ] = nT;
  }
  nT.x0 = ny;
  nT.y0 = nm;
  nT.w = nK;
  nT.h = nB;
  nT.cs = nX;
  nT.frames = nV;
  nT.stride = (nK + 1) * (nB + 1);
  return nT;
}
G(z, "grid");
var n0 = new WeakMap();
function n1(nJ, ny) {
  if (nJ._mask && nJ._mask[ny]) {
    return nJ._mask[ny];
  }
  let nm = n0.get(nJ);
  if (!nm) {
    n0.set(nJ, nm = []);
  }
  if (nm[ny]) {
    return nm[ny];
  }
  let {
    w: nK,
    h: nB,
    bb: nX
  } = nJ;
  let nV = new Uint8Array(nK * nB);
  let nT = nJ.masks && nJ.masks[Math.min(ny, nJ.masks.length - 1)];
  for (let nA = nX[1]; nA <= nX[3]; nA++) {
    for (let nt = nX[0]; nt <= nX[2]; nt++) {
      if (nJ.precise && nT) {
        if (s(nT, nt, nA)) {
          nV[nA * nK + nt] = 1;
        }
      } else {
        nV[nA * nK + nt] = 1;
      }
    }
  }
  nm[ny] = nV;
  return nV;
}
G(n1, "maskOf");
function n2(nJ) {
  if (!nJ || nJ.destroyed || W.first("obj_purpleheart") || W.first("obj_maskfield")) {
    return null;
  }
  let ny = String(L(nJ) || "");
  if (/heartgreen/i.test(ny) || o(nJ)) {
    return null;
  }
  {
    let nK = m(nJ);
    if (nK !== undefined) {
      return nK;
    }
  }
  if (nJ.wspeed !== undefined) {
    return "dr";
  }
  if (!W.first("obj_lborder")) {
    return null;
  }
  let nm = nJ.movement;
  if (nm === 1) {
    return "red";
  } else if (nm === 2 || nm === 11 || nm === 12 || nm === 13) {
    if (W.first("obj_plat")) {
      return null;
    } else {
      return "grav";
    }
  } else {
    return null;
  }
}
G(n2, "soulKind");
var n3 = {
  2: [0, 1],
  12: [0, -1],
  11: [1, 0],
  13: [-1, 0]
};
var n4 = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
function n5(nJ) {
  let ny = L(nJ);
  let nm = ny && E[ny];
  let nK = nJ.image_xscale || 1;
  let nB = nJ.image_yscale || 1;
  if (!nm || !nm.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  } else {
    return {
      l: (nm.bb[0] - nm.ox) * nK,
      t: (nm.bb[1] - nm.oy) * nB,
      r: (nm.bb[2] + 1 - nm.ox) * nK,
      b: (nm.bb[3] + 1 - nm.oy) * nB
    };
  }
}
G(n5, "soulRect");
var n6 = {
  ms: 70,
  escalated: 220,
  min: 18
};
var n7 = G((nJ, ny) => Math.min(nJ.budget ?? (ny > 60 ? n6.escalated : n6.ms), nJ.deadline !== undefined ? Math.max(0, nJ.deadline - performance.now()) : Infinity), "recordBudget");
function n8(nJ, ny, nm, nK, nB = 1000000000) {
  let nX = performance.now();
  let nV = A();
  let nT = Z.synthetic;
  let nA = i();
  b(false);
  h();
  Z.synthetic = null;
  let nt = !!ny && typeof ny == "object";
  let nN = ny !== "dr" && !nt;
  let nb = nN || P(nJ) ? 1 : 2;
  let nh = nt ? ny.reach || 200 : (nN ? N.sp || 4 : nJ.wspeed || 4) * nm + 40;
  let nU = nJ.x - nh;
  let ni = nJ.y - nh;
  let nE = nJ.x + nh;
  let nQ = nJ.y + nh;
  if (nN) {
    let M9 = W.first("obj_lborder");
    let Mn = W.first("obj_rborder");
    let MM = W.first("obj_uborder");
    let Me = W.first("obj_dborder");
    if (M9 && Mn && MM && Me) {
      nU = Math.max(nU, M9.x + (Math.abs(M9.sprite_width) || 0) - 24);
      nE = Math.min(nE, Mn.x + 24);
      ni = Math.max(ni, MM.y + (Math.abs(MM.sprite_height) || 0) - 24);
      nQ = Math.min(nQ, Me.y + 24);
    }
  }
  let nS = Math.max(0, Math.floor(nU));
  let nZ = Math.max(0, Math.floor(ni));
  let nu = Math.min(640, Math.ceil(nE));
  let nW = Math.min(480, Math.ceil(nQ));
  let nG = Math.max(1, Math.ceil((nu - nS) / nb));
  let np = Math.max(1, Math.ceil((nW - nZ) / nb));
  let nr = z(0, nS, nZ, nG, np, nb, nm + 1);
  let nL = z(1, nS, nZ, nG, np, nb, nm + 1);
  let nj = ny === "dr" && !P(nJ) || nt ? z(2, nS, nZ, nG, np, nb, nm + 1) : null;
  let nc = [];
  let nR = [];
  let nC = [];
  let nY = [];
  let nf = [[nJ.x, nJ.y]];
  let nI = [];
  let nw = () => {
    {
      let Ma = y();
      if (Ma !== undefined) {
        return Ma;
      }
    }
    let Mv = W.first("obj_nonsolid_growtangle");
    if (!Mv) {
      let Mg = W.first("obj_growtangle");
      if (Mg && Mg.keep === 1 && (Mg.path_speed !== 0 && Mg.path_speed !== undefined || Mg.speed !== 0 && Mg.speed !== undefined || Mg.megakeep === 1)) {
        Mv = Mg;
      }
    }
    if (!Mv) {
      return null;
    }
    let MH = (Math.abs(Mv.sprite_width) || 0) / 2;
    let Mx = (Math.abs(Mv.sprite_height) || 0) / 2;
    return [Mv.x - MH + 5, Mv.x + MH - 22, Mv.y - Mx + 5, Mv.y + Mx - 22];
  };
  nI[0] = nw();
  let nk = nJ;
  let nD = 0;
  let nz = [];
  let M0 = [];
  let M1 = [];
  let M2 = Mv => {
    if (Mv > 0) {
      nf[Mv] = nk.destroyed ? nf[Mv - 1] : [nk.x, nk.y];
      nI[Mv] = nw();
    }
    nr.clearOcc();
    nL.clearOcc();
    if (nj) {
      nj.clearOcc();
    }
    let MH = [];
    for (let Mx of nz) {
      if (!Mx.destroyed) {
        continue;
      }
      Mx.destroyed = false;
      let Ma = null;
      try {
        Ma = V(Mx);
      } finally {
        Mx.destroyed = true;
      }
      if (Ma) {
        for (let Mg of Ma) {
          let Mq = Mg.blue ? nL : nr;
          if (Mg.mask) {
            Mq.paint(Mx);
          } else if (Mg.rect) {
            Mq.paintRect(Mg.rect[0] - 1, Mg.rect[1] - 1, Mg.rect[2] + 2, Mg.rect[3] + 2);
          } else if (Mg.line) {
            Mq.paintLine(Mg.line[0], Mg.line[1], Mg.line[2], Mg.line[3], Mg.line[4]);
          }
        }
      }
    }
    for (let Mo of W.list) {
      if (Mo.destroyed || Mo === nk) {
        continue;
      }
      if (nj && Mo.is("obj_battlesolid")) {
        nj.paint(Mo);
        continue;
      }
      let MF = V(Mo);
      if (MF) {
        MH.push(Mo);
        for (let Ml of MF) {
          let MP = Ml.blue ? nL : nr;
          if (Ml.mask) {
            MP.paint(Mo);
          } else if (Ml.rect) {
            MP.paintRect(Ml.rect[0] - 1, Ml.rect[1] - 1, Ml.rect[2] + 2, Ml.rect[3] + 2);
          } else if (Ml.line) {
            MP.paintLine(Ml.line[0], Ml.line[1], Ml.line[2], Ml.line[3], Ml.line[4]);
          }
        }
      }
    }
    for (let MO of M0) {
      let MJ = MO.self;
      if (!MJ || MJ === nk || !MJ.is || MJ.is("obj_boneplat") || !X(MJ)) {
        continue;
      }
      let My = MJ.blue === 1 || MJ.is("blt_bluesword") || MJ.is("obj_sans_bonebul") && MJ.type === 1 ? nL : nr;
      if (MO.rect) {
        My.paintRect(MO.rect[0] - 1, MO.rect[1] - 1, MO.rect[2] + 2, MO.rect[3] + 2);
      } else if (MO.seg) {
        My.paintSeg(MO.seg[0], MO.seg[1], MO.seg[2], MO.seg[3]);
      } else if (MO.circle) {
        My.paintCircle(MO.circle[0], MO.circle[1], MO.circle[2]);
      }
    }
    M0 = [];
    nz = MH;
    nr.commit(Mv);
    nL.commit(Mv);
    if (nj) {
      nj.commit(Mv);
    }
    M1[Mv] = J();
    if (nN) {
      nC[Mv] = nk.destroyed ? nC[Mv - 1] : nk.movement;
      nY[Mv] = nk.destroyed ? nY[Mv - 1] : {
        vs: nk.vspeed || 0,
        hs: nk.hspeed || 0,
        js: nk.jumpstage | 0
      };
      let Mm = [];
      for (let MV of W.list) {
        if (MV.destroyed || !MV.is("obj_boneplat")) {
          continue;
        }
        let MT = MV.len || 50;
        Mm.push({
          id: MV,
          l: MV.x - MT + 2,
          r: MV.x + MT - 2,
          top: MV.y - 4,
          bot: MV.y + 2,
          y: MV.y,
          hs: MV.hspeed || 0,
          vs: MV.vspeed || 0
        });
      }
      nR[Mv] = Mm;
      let MK = W.first("obj_lborder");
      let MB = W.first("obj_rborder");
      let Md = W.first("obj_uborder");
      let MX = W.first("obj_dborder");
      nc[Mv] = MK && MB && Md && MX ? [MK.x + (Math.abs(MK.sprite_width) || 0), MB.x - (Math.abs(nJ.sprite_width) || 16), Md.y + (Math.abs(Md.sprite_height) || 0), MX.y - (Math.abs(nJ.sprite_height) || 16)] : nc[Mv - 1] || [0, 624, 0, 464];
    }
  };
  let M3 = nN ? N.invc | 0 : N.inv | 0;
  let M4 = nJ.shot === 1 || /yellow/i.test(String(nJ.sprite_index || ""));
  let M5 = N.mnfight;
  let M6 = 0;
  let M7 = nt && Z.held.b1 ? ["z"] : [];
  let M8 = false;
  try {
    for (let Mv of ["left", "right", "up", "down"]) {
      Z.held[Mv] = false;
    }
    M2(0);
    for (let MH = 1; MH <= nm; MH++) {
      for (let Mg of ["left", "right", "up", "down"]) {
        Z.held[Mg] = false;
      }
      let Mx = nK && nK[MH - 1];
      if (Mx) {
        for (let Mq of Mx) {
          if (Mq === "left" || Mq === "right" || Mq === "up" || Mq === "down") {
            Z.held[Mq] = true;
          }
        }
      }
      let Ma = g(Mx || [], MH > 1 ? nK && nK[MH - 2] || [] : M7);
      if (Ma || M8) {
        Z.synthetic = Ma;
        M8 = !!Ma;
      }
      if (nN) {
        N.invc = 99;
      } else {
        N.inv = 99;
      }
      if (M4) {
        let Mo = MH % 4 === 1;
        Z.synthetic = () => {
          Z.pressed.b1 = Mo;
          Z.held.b1 = Mo;
          if (Ma) {
            Ma();
          }
        };
      }
      Q.on = true;
      Q.shapes.length = 0;
      try {
        u(T, c());
      } finally {
        Q.on = false;
        M0 = Q.shapes.slice();
        Q.shapes.length = 0;
      }
      R.frames++;
      nD = MH;
      M2(MH);
      if (N.battleover || nk.destroyed || N.mnfight !== M5 && ++M6 >= 3) {
        break;
      }
      if (MH >= n6.min && performance.now() - nX > nB) {
        R.cut = (R.cut | 0) + 1;
        break;
      }
    }
  } catch {} finally {
    t(nV);
    U();
    Z.synthetic = nT;
    b(nA);
  }
  return {
    hz: nr,
    blue: nL,
    solid: nj,
    walls: nc,
    plats: nR,
    modes: nC,
    vel: nY,
    soulAt: nf,
    clampBox: nI,
    n: nD,
    inv0: M3,
    goals5: M1
  };
}
G(n8, "record");
function n9(nJ, ny, nm, nK, nB, nX) {
  let nV = nm * nB;
  let nT = nK * nB;
  let nA = nm < 0;
  let nt = nm > 0;
  let nN = nK < 0;
  let nb = nK > 0;
  if (nX(nJ + nV, ny)) {
    for (let nU = nB; nU > 0; nU--) {
      if (!nb && !nX(nJ + nV, ny - nU)) {
        ny -= nU;
        nT = 0;
        break;
      }
      if (!nN && !nX(nJ + nV, ny + nU)) {
        ny += nU;
        nT = 0;
        break;
      }
    }
    let nh = 0;
    if (nV > 0) {
      for (let ni = nV; ni >= 0; ni--) {
        if (!nX(nJ + ni, ny)) {
          nV = ni;
          nh = 1;
          break;
        }
      }
    }
    if (nV < 0) {
      for (let nE = nV; nE <= 0; nE++) {
        if (!nX(nJ + nE, ny)) {
          nV = nE;
          nh = 1;
          break;
        }
      }
    }
    if (!nh) {
      nV = 0;
    }
  }
  if (nX(nJ, ny + nT)) {
    for (let nS = nB; nS > 0; nS--) {
      if (!nt && !nX(nJ - nS, ny + nT)) {
        nJ -= nS;
        nV = 0;
        break;
      }
      if (!nA && !nX(nJ + nS, ny + nT)) {
        nJ += nS;
        nV = 0;
        break;
      }
    }
    let nQ = 0;
    if (nT > 0) {
      for (let nZ = nT; nZ >= 0; nZ--) {
        if (!nX(nJ, ny + nZ)) {
          nT = nZ;
          nQ = 1;
          break;
        }
      }
    }
    if (nT < 0) {
      for (let nu = nT; nu <= 0; nu++) {
        if (!nX(nJ, ny + nu)) {
          nT = nu;
          nQ = 1;
          break;
        }
      }
    }
    if (!nQ) {
      nT = 0;
    }
  }
  if (nX(nJ + nV, ny + nT)) {
    let nW = 0;
    let nG = nV;
    let np = nT;
    while (np !== 0 || nG !== 0) {
      if (!nX(nJ + nG, ny + np)) {
        nV = nG;
        nT = np;
        nW = 1;
        break;
      }
      if (Math.abs(np) >= 1) {
        if (np > 0) {
          np--;
        } else {
          np++;
        }
      } else {
        np = 0;
      }
      if (Math.abs(nG) >= 1) {
        if (nG > 0) {
          nG--;
        } else {
          nG++;
        }
      } else {
        nG = 0;
      }
    }
    if (!nW) {
      nV = 0;
      nT = 0;
    }
  }
  return [nJ + nV, ny + nT];
}
G(n9, "drMove");
function nn(nJ) {
  if (B(nJ) || K()) {
    return false;
  } else {
    return !!n2(nJ);
  }
}
G(nn, "oracleCovers");
function nM(nJ = {}) {
  let ny = () => nJ.deadline !== undefined && performance.now() >= nJ.deadline;
  let nm = ng(nJ);
  if (nm && nm.priced) {
    return nm;
  }
  if (nm && nm.hits > 0 && !nJ.horizon && !nJ.noEscalate && !ny()) {
    let nB = ng(Object.assign({}, nJ, {
      horizon: 100,
      cap: Math.max(nJ.cap || 0, 2000)
    }));
    if (nB && nB.hits < nm.hits) {
      nm = nB;
    }
  }
  let nK = W.first("obj_heart");
  if (nm && nm.hits > 0 && !nJ.noEscalate && nK && (nK.shot === 1 || /yellow/i.test(String(nK.sprite_index || "")))) {
    for (let nX of ["up", "down", "left", "right"]) {
      for (let nV of [8, 16, 28]) {
        if (ny()) {
          break;
        }
        let nT = [];
        for (let nt = 0; nt < nV; nt++) {
          nT.push([nX]);
        }
        let nA = ng(Object.assign({}, nJ, {
          guide: nT
        }));
        if (nA && nA.hits < nm.hits) {
          nm = nA;
        }
        if (nm.hits === 0) {
          break;
        }
      }
      if (nm.hits === 0 || ny()) {
        break;
      }
    }
  }
  for (let nN = 0; nN < 2 && nm && nm.hits > 0 && !nJ.noEscalate && !ny(); nN++) {
    let nb = ng(Object.assign({}, nJ, {
      guide: nm.keys,
      horizon: nm.horizon > 45 ? 100 : undefined
    }));
    if (!nb || nb.hits >= nm.hits) {
      break;
    }
    nm = nb;
  }
  return nm;
}
G(nM, "oraclePlan");
var ne = {
  a: null,
  b: null,
  idx: null,
  cap: 0,
  layers: [],
  hash: new Map()
};
var nv = G(nJ => ({
  n: 0,
  X: new Float64Array(nJ),
  Y: new Float64Array(nJ),
  U: new Float64Array(nJ),
  JS: new Int8Array(nJ),
  LK: new Int16Array(nJ),
  C: new Float64Array(nJ),
  HT: new Int16Array(nJ),
  A: new Int8Array(nJ),
  P: new Int32Array(nJ)
}), "dpFull");
function nH(nJ) {
  if (ne.cap < nJ) {
    ne.a = nv(nJ);
    ne.b = nv(nJ);
    ne.idx = new Int32Array(nJ);
    ne.cap = nJ;
  }
  return ne;
}
G(nH, "dpScratch");
function nx(nJ, ny) {
  let nm = ny.n;
  let nK = Math.max(nm, 1200);
  let nB = ne.layers[nJ];
  if (!nB || nB.X.length < nm) {
    nB = ne.layers[nJ] = {
      n: 0,
      X: new Float64Array(nK),
      Y: new Float64Array(nK),
      HT: new Int16Array(nK),
      A: new Int8Array(nK),
      P: new Int32Array(nK)
    };
  }
  nB.n = nm;
  nB.X.set(ny.X.subarray(0, nm));
  nB.Y.set(ny.Y.subarray(0, nm));
  nB.HT.set(ny.HT.subarray(0, nm));
  nB.A.set(ny.A.subarray(0, nm));
  nB.P.set(ny.P.subarray(0, nm));
  return nB;
}
G(nx, "dpLayer");
function na(nJ) {
  let ny = ne.hash.get(nJ);
  if (!ny) {
    ny = {
      hk: new Float64Array(nJ),
      hv: new Int32Array(nJ),
      hs: new Int32Array(nJ),
      stamp: 0
    };
    ne.hash.set(nJ, ny);
  }
  if (ny.stamp > 1073741823) {
    ny.hs.fill(0);
    ny.stamp = 0;
  }
  return ny;
}
G(na, "dpHash");
function ng(nJ = {}) {
  let ny = W.first("obj_heart");
  let nm = n2(ny);
  if (!nm) {
    return null;
  }
  if (typeof nm == "object") {
    return nq(nm, nJ, ny);
  }
  let nK = performance.now();
  let nB = nJ.horizon || (nm === "dr" ? 36 : 45);
  let nX = performance.now();
  let nV = n8(ny, nm, nB, nJ.guide || null, n7(nJ, nB));
  R.rec = (R.rec || 0) + (performance.now() - nX);
  let nT = nV.n;
  if (nT < 2) {
    return null;
  }
  let nA = n5(ny);
  let nN = nm !== "dr";
  let nb = 0;
  let nh = nN ? 4 : 6;
  let nU = (MX, MV, MT, MA) => nV.hz.any(MX, MV + nA.l + nb, MT + nA.t + nb, MV + nA.r - nb, MT + nA.b - nb) || MA && nV.blue.any(MX, MV + nA.l + nb, MT + nA.t + nb, MV + nA.r - nb, MT + nA.b - nb);
  let ni = (MX, MV, MT) => nV.hz.any(MX, MV + nA.l - nh, MT + nA.t - nh, MV + nA.r + nh, MT + nA.b + nh);
  let nE = nm === "dr" ? O(ny) : null;
  let nQ = nE ? () => nE : nV.solid ? MX => (MV, MT) => nV.solid.any(MX, MV + nA.l, MT + nA.t, MV + nA.r, MT + nA.b) : null;
  let nS = nN ? N.sp || 4 : ny.wspeed || 4;
  let nZ = ny.movement;
  let nu = nm === "dr" ? F(ny) : null;
  let nW = nm === "dr" && l(ny) || 1000;
  nV.modes[0] = nZ;
  let nG = n3[nZ];
  let np = (MX, MV, MT) => MX[1] ? MV * MX[1] : MT * MX[0];
  let nr = nG ? np(nG, ny.vspeed || 0, ny.hspeed || 0) : 0;
  let nL = ny.jumpstage | 0;
  let nj = nV.walls[0] ? (nV.walls[0][0] + nV.walls[0][1]) / 2 : ny.x;
  let nc = nV.walls[0] ? (nV.walls[0][2] + nV.walls[0][3]) / 2 : ny.y;
  let nR = new Float64Array(nT + 1);
  let nC = new Float64Array(nT + 1);
  if (nm === "dr" || nm === "red") {
    let MX = nJ.guide || [];
    for (let MV = 1; MV <= nT; MV++) {
      let MT = nV.soulAt[MV - 1];
      let MA = nV.soulAt[MV];
      if (!MT || !MA) {
        continue;
      }
      let MN = MX[MV - 1] || [];
      let Mb = (MN.includes("right") ? 1 : 0) - (MN.includes("left") ? 1 : 0);
      let Mh = (MN.includes("down") ? 1 : 0) - (MN.includes("up") ? 1 : 0);
      let MU = MT[0];
      let Mi = MT[1];
      if (nm === "dr") {
        let MS = n9(MU, Mi, Mb, Mh, nS, nQ ? nQ(MV) : () => false);
        MU = MS[0];
        Mi = MS[1];
        let MZ = nV.clampBox[MV];
        if (MZ) {
          MU = Math.min(Math.max(MU, MZ[0]), MZ[1]);
          Mi = Math.min(Math.max(Mi, MZ[2]), MZ[3]);
        }
      } else {
        let Mu = nV.walls[MV] || nV.walls[MV - 1];
        if ((nV.modes[MV] ?? nV.modes[MV - 1]) === 1) {
          MU += Mb * nS;
          Mi += Mh * nS;
        }
        if (Mu) {
          MU = Math.min(Math.max(MU, Mu[0]), Mu[1]);
          Mi = Math.min(Math.max(Mi, Mu[2]), Mu[3]);
        }
      }
      let ME = MA[0] - MU;
      let MQ = MA[1] - Mi;
      if (Math.abs(ME) > 0.05 && Math.abs(ME) < 40) {
        nR[MV] = ME;
      }
      if (Math.abs(MQ) > 0.05 && Math.abs(MQ) < 40) {
        nC[MV] = MQ;
      }
    }
  }
  let nY = n4;
  let nf = null;
  for (let MW of W.list) {
    if (!MW.destroyed && MW.is("obj_boneplat") && MW.lock === 1) {
      nf = MW;
    }
  }
  let nI = nJ.cap || 1200;
  let nw = nJ.near || 12;
  let nk = nI * nY.length + 16;
  let nD = new Map();
  let nz = 0;
  let M0 = MG => {
    if (!MG) {
      return 0;
    }
    let Mp = nD.get(MG);
    if (!Mp) {
      Mp = ++nz;
      nD.set(MG, Mp);
    }
    return Mp;
  };
  let M1 = nH(nk);
  let M2 = M1.a;
  let M3 = M1.b;
  M2.n = 1;
  M2.X[0] = ny.x;
  M2.Y[0] = ny.y;
  M2.U[0] = nr;
  M2.JS[0] = nL;
  M2.LK[0] = M0(nf);
  M2.C[0] = 0;
  M2.HT[0] = 0;
  M2.A[0] = -1;
  M2.P[0] = -1;
  let M4 = [nx(0, M2)];
  let M5 = [];
  for (let [MG, Mp] of nD) {
    M5[Mp] = MG;
  }
  let M6 = 0;
  let M7 = 1 << Math.ceil(Math.log2(nk * 2 + 64));
  let M8 = na(M7);
  let M9 = M8.hk;
  let Mn = M8.hv;
  let MM = M8.hs;
  let Me = M8.stamp;
  let Mv = Mr => {
    let ML = (Math.imul(Mr | 0, 2654435761) ^ Math.imul(Mr / 4294967296 | 0, 2246822507)) & M7 - 1;
    while (MM[ML] === Me && M9[ML] !== Mr) {
      ML = ML + 1 & M7 - 1;
    }
    return ML;
  };
  let MH = nV.hz.w * nV.hz.cs + 4;
  let Mx = nV.hz.h * nV.hz.cs + 4;
  let Ma = nV.hz.x0 - 2;
  let Mg = nV.hz.y0 - 2;
  if (!w || w.length < MH * Mx * 2) {
    w = new Int8Array(MH * Mx * 2);
    k = new Int32Array(MH * Mx * 2);
    D = 0;
  }
  if (D > 1073741823) {
    k.fill(0);
    D = 0;
  }
  let Mq = w;
  let Mo = k;
  let MF = D;
  D += nT + 2;
  for (let Mr = 1; Mr <= nT; Mr++) {
    let ML = M3;
    let Mj = Math.min(nk, M2.n * nY.length);
    ML.n = 0;
    Me = ++M8.stamp;
    let Mc = nV.walls[Mr] || nV.walls[Mr - 1];
    let MR = nQ ? nQ(Mr) : null;
    let MC = Mr <= nV.inv0;
    let MY = nm === "dr" ? -1 : nV.modes[Mr] ?? nV.modes[Mr - 1];
    let Mf = n3[MY] || null;
    let MI = nm !== "dr" && Mr > 1 && MY !== nV.modes[Mr - 1];
    let Mw = nV.vel[Mr];
    let Mk = Mf && MY === 2 ? nV.plats[Mr] : null;
    if (Mk) {
      for (let Mz of Mk) {
        let e0 = M0(Mz.id);
        Mz.pid = e0;
        M5[e0] = Mz.id;
      }
    }
    let MD = Mr <= nw || (Mr - nw) % 3 === 1;
    for (let e1 = 0; e1 < M2.n; e1++) {
      let e2 = M2.X[e1];
      let e3 = M2.Y[e1];
      let e4 = M2.A[e1];
      let e5 = M2.C[e1];
      let e6 = M2.HT[e1];
      for (let e7 = 0; e7 < nY.length; e7++) {
        if (!MD && e4 >= 0 && e7 !== e4) {
          continue;
        }
        let e8 = nY[e7];
        let e9 = e2;
        let en = e3;
        let eM = M2.U[e1];
        let ev = M2.JS[e1];
        let eH = M2.LK[e1];
        if (MI && Mf && Mw) {
          eM = np(Mf, Mw.vs, Mw.hs);
          ev = Mw.js;
          eH = 0;
        }
        if (nm === "dr") {
          let eB = n9(e9, en, e8[0], e8[1], nS, MR);
          e9 = eB[0] + nR[Mr];
          en = eB[1] + nC[Mr];
          let ed = nV.clampBox[Mr];
          if (ed) {
            if (e9 < ed[0]) {
              e9 = ed[0];
            }
            if (e9 > ed[1]) {
              e9 = ed[1];
            }
            if (en < ed[2]) {
              en = ed[2];
            }
            if (en > ed[3]) {
              en = ed[3];
            }
          }
          if (e9 < 0) {
            e9 = 0;
          }
          if (e9 > 624) {
            e9 = 624;
          }
          if (en < 0) {
            en = 0;
          }
        } else if (MY === 1 || !Mf) {
          if (MY === 1) {
            e9 += e8[0] * nS;
            en += e8[1] * nS;
          }
          if (Mc) {
            if (e9 < Mc[0]) {
              e9 = Mc[0];
            }
            if (e9 > Mc[1]) {
              e9 = Mc[1];
            }
            if (en < Mc[2]) {
              en = Mc[2];
            }
            if (en > Mc[3]) {
              en = Mc[3];
            }
          }
          e9 += nR[Mr];
          en += nC[Mr];
        } else {
          let eX = Mf[1] ? e8[0] : e8[1];
          let eV = e8[0] * Mf[0] + e8[1] * Mf[1] < 0;
          if (Mf[1]) {
            e9 += eX * nS;
          } else {
            en += eX * nS;
          }
          if (eV && ev === 1 && eM === 0) {
            ev = 2;
            eM = -6;
          }
          if (ev === 2) {
            if (!eV && eM <= -1) {
              eM = -1;
            }
            if (eM > 0.5 && eM < 8) {
              eM += 0.6;
            } else if (eM > -1 && eM <= 0.5) {
              eM += 0.2;
            } else if (eM > -4 && eM <= -1) {
              eM += 0.5;
            } else if (eM <= -4) {
              eM += 0.2;
            }
          }
          e9 += Mf[0] * eM;
          en += Mf[1] * eM;
          if (Mc) {
            let eT = Mf[1] ? Mc[2] : Mc[0];
            let eA = Mf[1] ? Mc[3] : Mc[1];
            let eN = Mf[1] ? en : e9;
            let eb = Mf[0] + Mf[1] > 0;
            if (eb ? eN >= eA : eN <= eT) {
              eN = eb ? eA : eT;
              ev = 1;
              eM = 0;
            }
            if (eb ? eN < eT : eN > eA) {
              eN = eb ? eT : eA;
              if (eM < 0) {
                eM = 0;
              }
            }
            if (Mf[1]) {
              en = eN;
            } else {
              e9 = eN;
            }
            if (Mf[1]) {
              if (e9 < Mc[0]) {
                e9 = Mc[0];
              }
              if (e9 > Mc[1]) {
                e9 = Mc[1];
              }
            } else {
              if (en < Mc[2]) {
                en = Mc[2];
              }
              if (en > Mc[3]) {
                en = Mc[3];
              }
            }
          }
          if (Mk && Mk.length) {
            let eh = 0;
            let eU = null;
            for (let ei of Mk) {
              let eE = e9 + nA.l <= ei.r + 1 && e9 + nA.r >= ei.l && en + nA.t <= ei.bot + 1 && en + nA.b >= ei.top;
              if (eE && eM >= 0 && en <= ei.y - 11) {
                en = ei.y - 16;
                eM = 0;
                ev = 1;
                eh = ei.pid;
                eU = ei;
              } else if (!eE && eH === ei.pid && ev === 1) {
                ev = 2;
                eM = 0;
              }
              if (eE && eH === ei.pid && !eh && eM === 0 && ev === 1) {
                eh = ei.pid;
                eU = ei;
              }
            }
            eH = eh;
            if (eU) {
              e9 += eU.hs;
              en += eU.vs;
            }
          } else if (eH) {
            if (ev === 1) {
              ev = 2;
              eM = 0;
            }
            eH = 0;
          }
        }
        let ex = Math.abs(e9 - e2) > 0.01 || Math.abs(en - e3) > 0.01;
        let ea = e5;
        let eg = e6;
        let eq;
        let eo = Math.floor(e9);
        let eF = Math.floor(en);
        let el = (nN || e9 === eo && en === eF) && eo - Ma >= 0 && eF - Mg >= 0 && eo - Ma < MH && eF - Mg < Mx ? ((eF - Mg) * MH + (eo - Ma)) * 2 + (e9 !== eo || en !== eF ? 1 : 0) : -1;
        if (el >= 0 && Mo[el] === MF + Mr) {
          eq = Mq[el];
        } else {
          eq = nU(Mr, e9, en, false) ? 1 : nU(Mr, e9, en, true) ? 2 : ni(Mr, e9, en) ? 3 : 0;
          if (el >= 0) {
            Mo[el] = MF + Mr;
            Mq[el] = eq;
          }
        }
        let eP = nW !== 1000 && nm === "dr" && eM > 0 && Mr - eM < 30;
        if (!MC && !eP && (eq === 1 || eq === 2 && ex)) {
          ea += nW;
          eg++;
          if (nW !== 1000 && nm === "dr") {
            eM = Mr;
          }
        } else if (eq === 3) {
          ea += 2;
        }
        if (e7 !== e4 && e4 >= 0) {
          ea += 0.15;
        }
        if (e7 !== 0) {
          ea += 0.02;
        }
        if (nu) {
          ea += nu(e9, en);
        }
        {
          let eQ = nV.goals5 && nV.goals5[Mr];
          if (eQ) {
            for (let eS of eQ) {
              if (e9 >= eS.rect[0] && e9 <= eS.rect[2] && en >= eS.rect[1] && en <= eS.rect[3]) {
                ea -= eS.w;
              }
            }
          }
        }
        let eO = Math.round(e9 / (nN ? 1 : 2));
        let eJ = Math.round(en / (nN ? 1 : 2));
        let ey = Mf ? (((eO * 512 + eJ) * 128 + (Math.round(eM * 5) + 64)) * 3 + ev) * 64 + eH : eO * 512 + eJ;
        let em = Mv(ey);
        let eK;
        if (MM[em] !== Me) {
          if (ML.n >= Mj) {
            continue;
          }
          eK = ML.n++;
          MM[em] = Me;
          M9[em] = ey;
          Mn[em] = eK;
        } else if (ea < ML.C[Mn[em]]) {
          eK = Mn[em];
        } else {
          M6++;
          continue;
        }
        ML.X[eK] = e9;
        ML.Y[eK] = en;
        ML.U[eK] = eM;
        ML.JS[eK] = ev;
        ML.LK[eK] = eH;
        ML.C[eK] = ea;
        ML.HT[eK] = eg;
        ML.A[eK] = e7;
        ML.P[eK] = e1;
        M6++;
      }
    }
    if (ML.n > nI) {
      let eZ = M1.idx.subarray(0, ML.n);
      for (let eG = 0; eG < ML.n; eG++) {
        eZ[eG] = eG;
      }
      let eu = ML.C;
      eZ.sort((ep, er) => eu[ep] - eu[er]);
      let eW = M2;
      for (let ep = 0; ep < nI; ep++) {
        let er = eZ[ep];
        eW.X[ep] = ML.X[er];
        eW.Y[ep] = ML.Y[er];
        eW.U[ep] = ML.U[er];
        eW.JS[ep] = ML.JS[er];
        eW.LK[ep] = ML.LK[er];
        eW.C[ep] = ML.C[er];
        eW.HT[ep] = ML.HT[er];
        eW.A[ep] = ML.A[er];
        eW.P[ep] = ML.P[er];
      }
      eW.n = nI;
      M3 = ML;
      M2 = eW;
    } else {
      M3 = M2;
      M2 = ML;
    }
    M4.push(nx(M4.length, M2));
    if (!M2.n) {
      break;
    }
  }
  let Ml = M2;
  let MP = M4.length - 1;
  let MO = -1;
  let MJ = Infinity;
  for (let eL = 0; eL < Ml.n; eL++) {
    let ej = Ml.C[eL];
    let ec = Ml.X[eL];
    let eR = Ml.Y[eL];
    if (nV.hz.any(MP, ec + nA.l - 16, eR + nA.t - 16, ec + nA.r + 16, eR + nA.b + 16)) {
      ej += 3;
    }
    if (!nu) {
      ej += (Math.abs(ec - nj) + Math.abs(eR - nc)) * 0.01;
    }
    if (ej < MJ) {
      MJ = ej;
      MO = eL;
    }
  }
  if (MO < 0) {
    return null;
  }
  let My = [];
  let Mm = [];
  for (let eC = MP, eY = MO; eC > 0; eC--) {
    let ef = M4[eC];
    My.push(ef.A[eY]);
    Mm.push([ef.X[eY], ef.Y[eY], ef.HT[eY]]);
    eY = ef.P[eY];
  }
  My.reverse();
  Mm.reverse();
  let MK = {
    hits: Ml.HT[MO]
  };
  let MB = My.map(eI => {
    let ew = nY[eI];
    let ek = [];
    if (ew[0] < 0) {
      ek.push("left");
    }
    if (ew[0] > 0) {
      ek.push("right");
    }
    if (ew[1] < 0) {
      ek.push("up");
    }
    if (ew[1] > 0) {
      ek.push("down");
    }
    return ek;
  });
  let Md = performance.now() - nK;
  R.plans++;
  R.ms += Md;
  R.lastMs = Md;
  R.states = M6;
  R.lastHits = MK.hits;
  R.mode = nm;
  return {
    keys: MB,
    pos: Mm,
    hits: MK.hits,
    mode: nm,
    horizon: nT,
    ms: Md,
    rec: nV,
    priced: nW !== 1000
  };
}
G(ng, "planOnce");
function nq(nJ, ny, nm) {
  let nK = nJ.inst && !nJ.inst.destroyed ? nJ.inst : nm;
  if (!nK || !Array.isArray(nJ.acts) || !nJ.acts.length || typeof nJ.step != "function" || typeof nJ.init != "function") {
    return null;
  }
  let nB = performance.now();
  let nX = ny.horizon || nJ.horizon || 36;
  let nV = performance.now();
  let nT = n8(nK, nJ, nX, ny.guide || null, n7(ny, nX));
  R.rec = (R.rec || 0) + (performance.now() - nV);
  let nA = nT.n;
  if (nA < 2) {
    return null;
  }
  let nt = nJ.rect || n5(nK);
  let nN = 6;
  let nb = (M8, M9, Mn, MM) => nT.hz.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b) || MM && nT.blue.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b);
  let nh = (M8, M9, Mn) => nT.hz.any(M8, M9 + nt.l - nN, Mn + nt.t - nN, M9 + nt.r + nN, Mn + nt.b + nN);
  let nU = M8 => nT.solid ? (M9, Mn) => nT.solid.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b) : () => false;
  let ni = F(nK);
  let nE = nJ.acts;
  let nQ = ny.cap || nJ.cap || 1200;
  let nS = ny.near || nJ.near || 12;
  let nZ = nQ * nE.length + 16;
  let nu = 6;
  let nW = M8 => ({
    n: 0,
    S: new Float64Array(M8 * nu),
    C: new Float64Array(M8),
    HT: new Int16Array(M8),
    A: new Int16Array(M8),
    P: new Int32Array(M8)
  });
  let nG = nW(1);
  let np = nJ.init(nK) || [nK.x, nK.y];
  for (let M8 = 0; M8 < nu; M8++) {
    nG.S[M8] = Number(np[M8]) || 0;
  }
  nG.n = 1;
  nG.C[0] = 0;
  nG.HT[0] = 0;
  nG.A[0] = -1;
  nG.P[0] = -1;
  let nr = [nG];
  let nL = 1 << Math.ceil(Math.log2(nZ * 2 + 64));
  let nj = new Float64Array(nL);
  let nc = new Int32Array(nL);
  let nR = new Int32Array(nL);
  let nC = 0;
  let nY = 0;
  let nf = M9 => {
    let Mn = (Math.imul(M9 | 0, 2654435761) ^ Math.imul(M9 / 4294967296 | 0, 2246822507)) & nL - 1;
    while (nR[Mn] === nC && nj[Mn] !== M9) {
      Mn = Mn + 1 & nL - 1;
    }
    return Mn;
  };
  let nI = typeof nJ.key == "function" ? nJ.key : M9 => {
    let Mn = 0;
    for (let MM = 2; MM < nu; MM++) {
      Mn = Math.imul(Mn, 31) + Math.round(M9[MM] * 4) | 0;
    }
    return (Math.round(M9[0] / 2) * 512 + Math.round(M9[1] / 2)) * 65536 + (Mn & 65535);
  };
  let nw = typeof nJ.vulnerable == "function" ? nJ.vulnerable : null;
  let nk = new Float64Array(nu);
  for (let M9 = 1; M9 <= nA; M9++) {
    let Mn = nW(Math.min(nZ, nG.n * nE.length));
    nC++;
    let MM = M9 <= nT.inv0;
    let Me = M9 <= nS || (M9 - nS) % 3 === 1;
    let Mv = {
      pm: nU(M9),
      clamp: nT.clampBox[M9] || null,
      soulAt: nT.soulAt,
      t: M9
    };
    let MH = nT.goals5 && nT.goals5[M9];
    for (let Mx = 0; Mx < nG.n; Mx++) {
      let Ma = nG.A[Mx];
      let Mg = nG.C[Mx];
      let Mq = nG.HT[Mx];
      let Mo = Mx * nu;
      for (let MF = 0; MF < nE.length; MF++) {
        if (!Me && Ma >= 0 && MF !== Ma) {
          continue;
        }
        for (let MX = 0; MX < nu; MX++) {
          nk[MX] = nG.S[Mo + MX];
        }
        try {
          nJ.step(nk, MF, M9, Mv);
        } catch {
          continue;
        }
        let Ml = nk[0];
        let MP = nk[1];
        if (!Number.isFinite(Ml) || !Number.isFinite(MP)) {
          continue;
        }
        let MO = Math.abs(Ml - nG.S[Mo]) > 0.01 || Math.abs(MP - nG.S[Mo + 1]) > 0.01;
        let MJ = Mg;
        let My = Mq;
        let Mm = nb(M9, Ml, MP, false) ? 1 : nb(M9, Ml, MP, true) ? 2 : nh(M9, Ml, MP) ? 3 : 0;
        if (!MM && (!nw || nw(nk)) && (Mm === 1 || Mm === 2 && MO)) {
          MJ += 1000;
          My++;
        } else if (Mm === 3) {
          MJ += 2;
        }
        if (MF !== Ma && Ma >= 0) {
          MJ += 0.15;
        }
        if (nE[MF].length) {
          MJ += 0.02;
        }
        if (ni) {
          MJ += ni(Ml, MP);
        }
        if (MH) {
          for (let MV of MH) {
            if (Ml >= MV.rect[0] && Ml <= MV.rect[2] && MP >= MV.rect[1] && MP <= MV.rect[3]) {
              MJ -= MV.w;
            }
          }
        }
        let MK = nI(nk);
        let MB = nf(MK);
        let Md;
        if (nR[MB] !== nC) {
          if (Mn.n >= Mn.C.length) {
            continue;
          }
          Md = Mn.n++;
          nR[MB] = nC;
          nj[MB] = MK;
          nc[MB] = Md;
        } else if (MJ < Mn.C[nc[MB]]) {
          Md = nc[MB];
        } else {
          nY++;
          continue;
        }
        for (let MT = 0; MT < nu; MT++) {
          Mn.S[Md * nu + MT] = nk[MT];
        }
        Mn.C[Md] = MJ;
        Mn.HT[Md] = My;
        Mn.A[Md] = MF;
        Mn.P[Md] = Mx;
        nY++;
      }
    }
    if (Mn.n > nQ) {
      let MA = new Int32Array(Mn.n);
      for (let Mh = 0; Mh < Mn.n; Mh++) {
        MA[Mh] = Mh;
      }
      let MN = Mn.C;
      MA.sort((MU, Mi) => MN[MU] - MN[Mi]);
      let Mb = nW(nQ);
      for (let MU = 0; MU < nQ; MU++) {
        let Mi = MA[MU];
        for (let ME = 0; ME < nu; ME++) {
          Mb.S[MU * nu + ME] = Mn.S[Mi * nu + ME];
        }
        Mb.C[MU] = Mn.C[Mi];
        Mb.HT[MU] = Mn.HT[Mi];
        Mb.A[MU] = Mn.A[Mi];
        Mb.P[MU] = Mn.P[Mi];
      }
      Mb.n = nQ;
      nG = Mb;
    } else {
      nG = Mn;
    }
    nr.push(nG);
    if (!nG.n) {
      break;
    }
  }
  let nD = nr[nr.length - 1];
  let nz = nr.length - 1;
  let M0 = nK.x;
  let M1 = nK.y;
  let M2 = -1;
  let M3 = Infinity;
  for (let MQ = 0; MQ < nD.n; MQ++) {
    let Ms = nD.C[MQ];
    let MS = nD.S[MQ * nu];
    let MZ = nD.S[MQ * nu + 1];
    if (nT.hz.any(nz, MS + nt.l - 16, MZ + nt.t - 16, MS + nt.r + 16, MZ + nt.b + 16)) {
      Ms += 3;
    }
    if (!ni) {
      Ms += (Math.abs(MS - M0) + Math.abs(MZ - M1)) * 0.002;
    }
    if (Ms < M3) {
      M3 = Ms;
      M2 = MQ;
    }
  }
  if (M2 < 0) {
    return null;
  }
  let M4 = [];
  let M5 = [];
  for (let Mu = nz, MW = M2; Mu > 0; Mu--) {
    let MG = nr[Mu];
    M4.push(MG.A[MW]);
    M5.push([MG.S[MW * nu], MG.S[MW * nu + 1], MG.HT[MW]]);
    MW = MG.P[MW];
  }
  M4.reverse();
  M5.reverse();
  let M6 = M4.map(Mp => nE[Mp].slice());
  let M7 = performance.now() - nB;
  R.plans++;
  R.ms += M7;
  R.lastMs = M7;
  R.states = nY;
  R.lastHits = nD.HT[M2];
  R.mode = nJ.name || "custom";
  return {
    keys: M6,
    pos: M5,
    hits: nD.HT[M2],
    mode: nJ.name || "custom",
    horizon: nA,
    ms: M7,
    rec: nT
  };
}
G(nq, "planCustom");
function no(nJ, ny = {}) {
  return nq(nJ, ny, W.first("obj_heart"));
}
G(no, "oraclePlanKind");
var nF = typeof HTMLCanvasElement !== "undefined";
var nl = 45;
var nP = class eD {
  constructor(nJ = {}) {
    this.opts = nJ;
    this.plan = null;
    this.pos = 0;
    this.every = nJ.every || 3;
    this.lastFrame = -9;
  }
  reset() {
    this.plan = null;
    this.pos = 0;
  }
  step() {
    if (W.frame !== this.lastFrame + 1) {
      this.plan = null;
    }
    this.lastFrame = W.frame;
    if (!this.plan || this.pos >= this.every || this.pos >= this.plan.keys.length) {
      let ny = this.plan ? this.plan.keys.slice(this.pos) : null;
      let nm = Object.assign({}, this.opts, {
        guide: ny
      });
      if (nF && this.opts.budget === undefined && this.opts.deadline === undefined) {
        nm.deadline = performance.now() + nl;
      }
      this.plan = nM(nm);
      this.pos = 0;
      if (!this.plan) {
        return false;
      }
    }
    let nJ = this.plan.keys[this.pos++] || [];
    a(nJ.join("+"), 0);
    return true;
  }
};
G(nP, "OracleDriver");
var nO = nP;
export { L as a, R as b, n6 as c, nn as d, nM as e, no as f, nl as g, nO as h };
