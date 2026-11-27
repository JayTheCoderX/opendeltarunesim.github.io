import { B as a, D as g, b as o, c as F, d as l, e as P, f as O, g as J, h as y, i as m, j as K, k as B, l as d, p as X, z as V } from './c-J7PU4477.js';
import { f as T } from './c-WSZI3RLB.js';
import { a as A, b as t } from './c-GI6IDYOV.js';
import { g as N } from './c-ZQQWH6UG.js';
import { Fa as b, Ga as h, Ha as U, Ja as i, N as E, Oc as Q, U as s, X as Z, ac as u, xb as W } from './c-PBMEVLU6.js';
import { a as G, l as p } from './c-XSSGDLV7.js';
p();
var r = Math.PI / 0xb4;
function L(nJ) {
  let ny = nJ.mask_index;
  return typeof ny == 'number' && ny < 0x0 ? nJ.sprite_index : ny || nJ.sprite_index;
}
G(L, 'collName');
var j = null,
  c = G(() => j || (j = d()), 'gfx'),
  R = {
    'plans': 0x0,
    'ms': 0x0,
    'lastMs': 0x0,
    'frames': 0x0,
    'states': 0x0,
    'lastHits': 0x0,
    'mode': ''
  },
  C = new Int32Array(0x100),
  Y = class nd {
    constructor(nJ, ny, nm, nK, nB, nX) {
      this.x0 = nJ, this.y0 = ny, this.w = nm, this.h = nK, this.cs = nB, this.frames = nX, this.stride = (nm + 0x1) * (nK + 0x1), this.sat = new Int32Array(this.stride * nX), this.occ = new Uint8Array(nm * nK), this.lo = 0x0, this.hi = nK;
    }
    ["clearOcc"]() {
      this.occ.fill(0x0, 0x0, this.w * this.h), this.dirty = false, this.lo = this.h, this.hi = 0x0;
    }
    ["rows"](nJ, ny) {
      nJ < this.lo && (this.lo = nJ), ny > this.hi && (this.hi = ny);
    }
    ["paint"](nJ) {
      let ny = L(nJ);
      if (!ny) return;
      let nm = E[ny];
      if (!nm || !nm.bb) return;
      let nK = nJ.image_xscale || 0x0,
        nB = nJ.image_yscale || 0x0;
      if (!nK || !nB) return;
      let nX = (nJ.image_angle || 0x0) * r,
        nV = Math.cos(nX),
        nT = Math.sin(nX),
        nA = nm.bb,
        nt = [(nA[0x0] - nm.ox) * nK, (nA[0x2] + 0x1 - nm.ox) * nK],
        nN = [(nA[0x1] - nm.oy) * nB, (nA[0x3] + 0x1 - nm.oy) * nB],
        nb = 0x3b9aca00,
        nh = 0x3b9aca00,
        nU = -0x3b9aca00,
        ni = -0x3b9aca00;
      for (let nC of nt) for (let nY of nN) {
        let nf = nJ.x + nC * nV + nY * nT,
          nI = nJ.y - nC * nT + nY * nV;
        nf < nb && (nb = nf), nf > nU && (nU = nf), nI < nh && (nh = nI), nI > ni && (ni = nI);
      }
      let nE = this.cs,
        nQ = Math.floor((nb - this.x0) / nE),
        nS = Math.ceil((nU - this.x0) / nE),
        nZ = Math.floor((nh - this.y0) / nE),
        nu = Math.ceil((ni - this.y0) / nE);
      if (nS < 0x0 || nu < 0x0 || nQ >= this.w || nZ >= this.h) return;
      nQ < 0x0 && (nQ = 0x0), nZ < 0x0 && (nZ = 0x0), nS > this.w && (nS = this.w), nu > this.h && (nu = this.h);
      let nW = nm.precise && nm.masks ? nm.masks.length : 0x1,
        nG = (Math.floor(nJ.image_index || 0x0) % Math.max(0x1, nm.frames) + nm.frames) % Math.max(0x1, nm.frames),
        np = n1(nm, Math.min(nG, nW - 0x1));
      this.dirty = true, this.rows(nZ, nu);
      let nr = nm.w,
        nL = nm.h,
        nj = this.occ,
        nc = this.w,
        nR = !nm.precise && !nX;
      if (!nR && !nX && Number.isFinite(nJ.x) && Number.isFinite(nJ.y)) {
        let nw = nS - nQ;
        C.length < nw && (C = new Int32Array(nw + 0x100));
        for (let nk = nQ; nk < nS; nk++) {
          let nD = Math.floor((this.x0 + (nk + 0.5) * nE - nJ.x) / nK + nm.ox);
          C[nk - nQ] = nD >= 0x0 && nD < nr ? nD : -0x1;
        }
        for (let nz = nZ; nz < nu; nz++) {
          let M0 = Math.floor((this.y0 + (nz + 0.5) * nE - nJ.y) / nB + nm.oy);
          if (!(M0 >= 0x0 && M0 < nL)) continue;
          let M1 = M0 * nr;
          for (let M2 = nQ; M2 < nS; M2++) {
            let M3 = C[M2 - nQ];
            M3 >= 0x0 && np[M1 + M3] && (nj[nz * nc + M2] = 0x1);
          }
        }
        return;
      }
      for (let M4 = nZ; M4 < nu; M4++) {
        let M5 = this.y0 + (M4 + 0.5) * nE;
        for (let M6 = nQ; M6 < nS; M6++) {
          let M7 = this.x0 + (M6 + 0.5) * nE;
          if (nR) {
            M7 >= nb && M7 < nU && M5 >= nh && M5 < ni && (nj[M4 * nc + M6] = 0x1);
            continue;
          }
          let M8 = M7 - nJ.x,
            M9 = M5 - nJ.y,
            Mn = M8 * nV - M9 * nT,
            MM = M8 * nT + M9 * nV,
            Me = Math.floor(Mn / nK + nm.ox),
            Mv = Math.floor(MM / nB + nm.oy);
          Me < 0x0 || Mv < 0x0 || Me >= nr || Mv >= nL || np[Mv * nr + Me] && (nj[M4 * nc + M6] = 0x1);
        }
      }
    }
    ["paintRect"](nJ, ny, nm, nK) {
      let nB = this.cs,
        nX = Math.floor((nJ - this.x0) / nB),
        nV = Math.ceil((nm - this.x0) / nB),
        nT = Math.floor((ny - this.y0) / nB),
        nA = Math.ceil((nK - this.y0) / nB);
      nX < 0x0 && (nX = 0x0), nT < 0x0 && (nT = 0x0), nV > this.w && (nV = this.w), nA > this.h && (nA = this.h);
      let nt = this.w,
        nN = this.occ;
      nV > nX && nA > nT && (this.dirty = true, this.rows(nT, nA));
      for (let nb = nT; nb < nA; nb++) nN.fill(0x1, nb * nt + nX, nb * nt + Math.max(nX, nV));
    }
    ["paintLine"](nJ, ny, nm, nK, nB) {
      let nX = this.cs,
        nV = this.w,
        nT = this.occ;
      this.dirty = true, this.rows(0x0, this.h);
      let nA = Math.abs(nK) > 1e-9;
      for (let nt = 0x0; nt < this.h; nt++) {
        let nN = this.y0 + (nt + 0.5) * nX - ny,
          nb = 0x0,
          nh = nV;
        if (nA) {
          let nU = (nN * nm - nB) / nK,
            ni = (nN * nm + nB) / nK;
          nb = Math.max(0x0, Math.floor((Math.min(nU, ni) - 0x2 + nJ - this.x0) / nX) - 0x1), nh = Math.min(nV, Math.ceil((Math.max(nU, ni) + 0x2 + nJ - this.x0) / nX) + 0x1);
        }
        for (let nE = nb; nE < nh; nE++) {
          let nQ = this.x0 + (nE + 0.5) * nX - nJ,
            nS = nQ * nm + nN * nK;
          if (nS < 0x0 || nS > 0x3e8) continue;
          Math.abs(nQ * nK - nN * nm) <= nB && (nT[nt * nV + nE] = 0x1);
        }
      }
    }
    ["paintSeg"](nJ, ny, nm, nK) {
      let nB = Math.min(nJ, nm) - 0x2,
        nX = Math.max(nJ, nm) + 0x2,
        nV = Math.min(ny, nK) - 0x2,
        nT = Math.max(ny, nK) + 0x2,
        nA = this.cs,
        nt = this.w,
        nN = this.occ,
        nb = nm - nJ,
        nh = nK - ny,
        nU = nb * nb + nh * nh || 0x1,
        ni = Math.max(0x0, Math.floor((nB - this.x0) / nA)),
        nE = Math.min(nt, Math.ceil((nX - this.x0) / nA)),
        nQ = Math.max(0x0, Math.floor((nV - this.y0) / nA)),
        nS = Math.min(this.h, Math.ceil((nT - this.y0) / nA));
      this.rows(nQ, nS);
      let nZ = Math.abs(nh) > 1e-9;
      for (let nu = nQ; nu < nS; nu++) {
        let nW = ni,
          nG = nE;
        if (nZ) {
          let np = this.y0 + (nu + 0.5) * nA,
            nr = Math.min(0x1, Math.max(0x0, (np - 0x3 - ny) / nh)),
            nL = Math.min(0x1, Math.max(0x0, (np + 0x3 - ny) / nh)),
            nj = nJ + nb * Math.min(nr, nL),
            nc = nJ + nb * Math.max(nr, nL);
          nW = Math.max(ni, Math.floor((Math.min(nj, nc) - 0x3 - this.x0) / nA) - 0x1), nG = Math.min(nE, Math.ceil((Math.max(nj, nc) + 0x3 - this.x0) / nA) + 0x1);
        }
        for (let nR = nW; nR < nG; nR++) {
          let nC = this.x0 + (nR + 0.5) * nA - nJ,
            nY = this.y0 + (nu + 0.5) * nA - ny,
            nf = Math.max(0x0, Math.min(0x1, (nC * nb + nY * nh) / nU)),
            nI = nC - nb * nf,
            nw = nY - nh * nf;
          nI * nI + nw * nw <= 2.25 && (nN[nu * nt + nR] = 0x1, this.dirty = true);
        }
      }
    }
    ["paintCircle"](nJ, ny, nm) {
      let nK = this.cs,
        nB = this.w,
        nX = this.occ,
        nV = (nm + 0x1) * (nm + 0x1),
        nT = Math.max(0x0, Math.floor((nJ - nm - 0x1 - this.x0) / nK)),
        nA = Math.min(nB, Math.ceil((nJ + nm + 0x1 - this.x0) / nK)),
        nt = Math.max(0x0, Math.floor((ny - nm - 0x1 - this.y0) / nK)),
        nN = Math.min(this.h, Math.ceil((ny + nm + 0x1 - this.y0) / nK));
      this.rows(nt, nN);
      for (let nb = nt; nb < nN; nb++) for (let nh = nT; nh < nA; nh++) {
        let nU = this.x0 + (nh + 0.5) * nK - nJ,
          ni = this.y0 + (nb + 0.5) * nK - ny;
        nU * nU + ni * ni <= nV && (nX[nb * nB + nh] = 0x1, this.dirty = true);
      }
    }
    ["commit"](nJ) {
      if ((!this.empty || this.empty.length < this.frames) && (this.empty = new Uint8Array(Math.max(this.frames, 0x40))), this.empty[nJ] = this.dirty ? 0x0 : 0x1, !this.dirty) return;
      let ny = this.w,
        nm = this.h,
        nK = nJ * this.stride,
        nB = this.sat,
        nX = this.occ,
        nV = ny + 0x1,
        nT = Math.max(0x0, Math.min(nm, this.lo)),
        nA = Math.max(nT, Math.min(nm, this.hi));
      nB.fill(0x0, nK, nK + (nT + 0x1) * nV);
      for (let nt = nT + 0x1; nt <= nA; nt++) {
        let nN = 0x0;
        nB[nK + nt * nV] = 0x0;
        for (let nb = 0x1; nb <= ny; nb++) nN += nX[(nt - 0x1) * ny + nb - 0x1], nB[nK + nt * nV + nb] = nB[nK + (nt - 0x1) * nV + nb] + nN;
      }
      for (let nh = nA + 0x1; nh <= nm; nh++) nB.copyWithin(nK + nh * nV, nK + nA * nV, nK + nA * nV + nV);
    }
    ["any"](nJ, ny, nm, nK, nB) {
      if (this.empty[nJ]) return false;
      let nX = this.cs,
        nV = Math.floor((ny - this.x0) / nX),
        nT = Math.ceil((nK - this.x0) / nX),
        nA = Math.floor((nm - this.y0) / nX),
        nt = Math.ceil((nB - this.y0) / nX);
      if (nV < 0x0 && (nV = 0x0), nA < 0x0 && (nA = 0x0), nT > this.w && (nT = this.w), nt > this.h && (nt = this.h), nT <= nV || nt <= nA) return false;
      let nN = this.w + 0x1,
        nb = nJ * this.stride,
        nh = this.sat;
      return nh[nb + nt * nN + nT] - nh[nb + nA * nN + nT] - nh[nb + nt * nN + nV] + nh[nb + nA * nN + nV] > 0x0;
    }
  };
G(Y, 'Grid');
var f = Y,
  I = [],
  w = null,
  k = null,
  D = 0x0;
function z(nJ, ny, nm, nK, nB, nX, nV) {
  let nT = I[nJ];
  return (!nT || nT.sat.length < (nK + 0x1) * (nB + 0x1) * nV || nT.occ.length < nK * nB) && (nT = new f(ny, nm, nK, nB, nX, nV), I[nJ] = nT), nT.x0 = ny, nT.y0 = nm, nT.w = nK, nT.h = nB, nT.cs = nX, nT.frames = nV, nT.stride = (nK + 0x1) * (nB + 0x1), nT;
}
G(z, 'grid');
var n0 = new WeakMap();
function n1(nJ, ny) {
  if (nJ._mask && nJ._mask[ny]) return nJ._mask[ny];
  let nm = n0.get(nJ);
  if (nm || n0.set(nJ, nm = []), nm[ny]) return nm[ny];
  let {
      w: nK,
      h: nB,
      bb: nX
    } = nJ,
    nV = new Uint8Array(nK * nB),
    nT = nJ.masks && nJ.masks[Math.min(ny, nJ.masks.length - 0x1)];
  for (let nA = nX[0x1]; nA <= nX[0x3]; nA++) for (let nt = nX[0x0]; nt <= nX[0x2]; nt++) nJ.precise && nT ? s(nT, nt, nA) && (nV[nA * nK + nt] = 0x1) : nV[nA * nK + nt] = 0x1;
  return nm[ny] = nV, nV;
}
G(n1, 'maskOf');
function n2(nJ) {
  if (!nJ || nJ.destroyed || W.first('obj_purpleheart') || W.first('obj_maskfield')) return null;
  let ny = String(L(nJ) || '');
  if (/heartgreen/i.test(ny) || o(nJ)) return null;
  let nK = m(nJ);
  if (nK !== void 0x0) return nK;
  if (nJ.wspeed !== void 0x0) return 'dr';
  if (!W.first('obj_lborder')) return null;
  let nm = nJ.movement;
  return nm === 0x1 ? 'red' : nm === 0x2 || nm === 0xb || nm === 0xc || nm === 0xd ? W.first('obj_plat') ? null : 'grav' : null;
}
G(n2, 'soulKind');
var n3 = {
    0x2: [0x0, 0x1],
    0xc: [0x0, -0x1],
    0xb: [0x1, 0x0],
    0xd: [-0x1, 0x0]
  },
  n4 = [[0x0, 0x0], [-0x1, 0x0], [0x1, 0x0], [0x0, -0x1], [0x0, 0x1], [-0x1, -0x1], [0x1, -0x1], [-0x1, 0x1], [0x1, 0x1]];
function n5(nJ) {
  let ny = L(nJ),
    nm = ny && E[ny],
    nK = nJ.image_xscale || 0x1,
    nB = nJ.image_yscale || 0x1;
  return !nm || !nm.bb ? {
    'l': 0x0,
    't': 0x0,
    'r': 0x10,
    'b': 0x10
  } : {
    'l': (nm.bb[0x0] - nm.ox) * nK,
    't': (nm.bb[0x1] - nm.oy) * nB,
    'r': (nm.bb[0x2] + 0x1 - nm.ox) * nK,
    'b': (nm.bb[0x3] + 0x1 - nm.oy) * nB
  };
}
G(n5, 'soulRect');
var n6 = {
    'ms': 0x46,
    'escalated': 0xdc,
    'min': 0x12
  },
  n7 = G((nJ, ny) => Math.min(nJ.budget ?? (ny > 0x3c ? n6.escalated : n6.ms), nJ.deadline !== void 0x0 ? Math.max(0x0, nJ.deadline - performance.now()) : 0x1 / 0x0), 'recordBudget');
function n8(nJ, ny, nm, nK, nB = 0x3b9aca00) {
  let nX = performance.now(),
    nV = A(),
    nT = Z.synthetic,
    nA = i();
  b(false), h(), Z.synthetic = null;
  let nt = !!ny && typeof ny == 'object',
    nN = ny !== 'dr' && !nt,
    nb = nN || P(nJ) ? 0x1 : 0x2,
    nh = nt ? ny.reach || 0xc8 : (nN ? N.sp || 0x4 : nJ.wspeed || 0x4) * nm + 0x28,
    nU = nJ.x - nh,
    ni = nJ.y - nh,
    nE = nJ.x + nh,
    nQ = nJ.y + nh;
  if (nN) {
    let M9 = W.first('obj_lborder'),
      Mn = W.first('obj_rborder'),
      MM = W.first('obj_uborder'),
      Me = W.first('obj_dborder');
    M9 && Mn && MM && Me && (nU = Math.max(nU, M9.x + (Math.abs(M9.sprite_width) || 0x0) - 0x18), nE = Math.min(nE, Mn.x + 0x18), ni = Math.max(ni, MM.y + (Math.abs(MM.sprite_height) || 0x0) - 0x18), nQ = Math.min(nQ, Me.y + 0x18));
  }
  let nS = Math.max(0x0, Math.floor(nU)),
    nZ = Math.max(0x0, Math.floor(ni)),
    nu = Math.min(0x280, Math.ceil(nE)),
    nW = Math.min(0x1e0, Math.ceil(nQ)),
    nG = Math.max(0x1, Math.ceil((nu - nS) / nb)),
    np = Math.max(0x1, Math.ceil((nW - nZ) / nb)),
    nr = z(0x0, nS, nZ, nG, np, nb, nm + 0x1),
    nL = z(0x1, nS, nZ, nG, np, nb, nm + 0x1),
    nj = ny === 'dr' && !P(nJ) || nt ? z(0x2, nS, nZ, nG, np, nb, nm + 0x1) : null,
    nc = [],
    nR = [],
    nC = [],
    nY = [],
    nf = [[nJ.x, nJ.y]],
    nI = [],
    nw = () => {
      let Ma = y();
      if (Ma !== void 0x0) return Ma;
      let Mv = W.first('obj_nonsolid_growtangle');
      if (!Mv) {
        let Mg = W.first('obj_growtangle');
        Mg && Mg.keep === 0x1 && (Mg.path_speed !== 0x0 && Mg.path_speed !== void 0x0 || Mg.speed !== 0x0 && Mg.speed !== void 0x0 || Mg.megakeep === 0x1) && (Mv = Mg);
      }
      if (!Mv) return null;
      let MH = (Math.abs(Mv.sprite_width) || 0x0) / 0x2,
        Mx = (Math.abs(Mv.sprite_height) || 0x0) / 0x2;
      return [Mv.x - MH + 0x5, Mv.x + MH - 0x16, Mv.y - Mx + 0x5, Mv.y + Mx - 0x16];
    };
  nI[0x0] = nw();
  let nk = nJ,
    nD = 0x0,
    nz = [],
    M0 = [],
    M1 = [],
    M2 = Mv => {
      Mv > 0x0 && (nf[Mv] = nk.destroyed ? nf[Mv - 0x1] : [nk.x, nk.y], nI[Mv] = nw()), nr.clearOcc(), nL.clearOcc(), nj && nj.clearOcc();
      let MH = [];
      for (let Mx of nz) {
        if (!Mx.destroyed) continue;
        Mx.destroyed = false;
        let Ma = null;
        try {
          Ma = V(Mx);
        } finally {
          Mx.destroyed = true;
        }
        if (Ma) for (let Mg of Ma) {
          let Mq = Mg.blue ? nL : nr;
          Mg.mask ? Mq.paint(Mx) : Mg.rect ? Mq.paintRect(Mg.rect[0x0] - 0x1, Mg.rect[0x1] - 0x1, Mg.rect[0x2] + 0x2, Mg.rect[0x3] + 0x2) : Mg.line && Mq.paintLine(Mg.line[0x0], Mg.line[0x1], Mg.line[0x2], Mg.line[0x3], Mg.line[0x4]);
        }
      }
      for (let Mo of W.list) {
        if (Mo.destroyed || Mo === nk) continue;
        if (nj && Mo.is('obj_battlesolid')) {
          nj.paint(Mo);
          continue;
        }
        let MF = V(Mo);
        if (MF) {
          MH.push(Mo);
          for (let Ml of MF) {
            let MP = Ml.blue ? nL : nr;
            Ml.mask ? MP.paint(Mo) : Ml.rect ? MP.paintRect(Ml.rect[0x0] - 0x1, Ml.rect[0x1] - 0x1, Ml.rect[0x2] + 0x2, Ml.rect[0x3] + 0x2) : Ml.line && MP.paintLine(Ml.line[0x0], Ml.line[0x1], Ml.line[0x2], Ml.line[0x3], Ml.line[0x4]);
          }
        }
      }
      for (let MO of M0) {
        let MJ = MO.self;
        if (!MJ || MJ === nk || !MJ.is || MJ.is('obj_boneplat') || !X(MJ)) continue;
        let My = MJ.blue === 0x1 || MJ.is('blt_bluesword') || MJ.is('obj_sans_bonebul') && MJ.type === 0x1 ? nL : nr;
        MO.rect ? My.paintRect(MO.rect[0x0] - 0x1, MO.rect[0x1] - 0x1, MO.rect[0x2] + 0x2, MO.rect[0x3] + 0x2) : MO.seg ? My.paintSeg(MO.seg[0x0], MO.seg[0x1], MO.seg[0x2], MO.seg[0x3]) : MO.circle && My.paintCircle(MO.circle[0x0], MO.circle[0x1], MO.circle[0x2]);
      }
      if (M0 = [], nz = MH, nr.commit(Mv), nL.commit(Mv), nj && nj.commit(Mv), M1[Mv] = J(), nN) {
        nC[Mv] = nk.destroyed ? nC[Mv - 0x1] : nk.movement, nY[Mv] = nk.destroyed ? nY[Mv - 0x1] : {
          'vs': nk.vspeed || 0x0,
          'hs': nk.hspeed || 0x0,
          'js': nk.jumpstage | 0x0
        };
        let Mm = [];
        for (let MV of W.list) {
          if (MV.destroyed || !MV.is('obj_boneplat')) continue;
          let MT = MV.len || 0x32;
          Mm.push({
            'id': MV,
            'l': MV.x - MT + 0x2,
            'r': MV.x + MT - 0x2,
            'top': MV.y - 0x4,
            'bot': MV.y + 0x2,
            'y': MV.y,
            'hs': MV.hspeed || 0x0,
            'vs': MV.vspeed || 0x0
          });
        }
        nR[Mv] = Mm;
        let MK = W.first('obj_lborder'),
          MB = W.first('obj_rborder'),
          Md = W.first('obj_uborder'),
          MX = W.first('obj_dborder');
        nc[Mv] = MK && MB && Md && MX ? [MK.x + (Math.abs(MK.sprite_width) || 0x0), MB.x - (Math.abs(nJ.sprite_width) || 0x10), Md.y + (Math.abs(Md.sprite_height) || 0x0), MX.y - (Math.abs(nJ.sprite_height) || 0x10)] : nc[Mv - 0x1] || [0x0, 0x270, 0x0, 0x1d0];
      }
    },
    M3 = nN ? N.invc | 0x0 : N.inv | 0x0,
    M4 = nJ.shot === 0x1 || /yellow/i.test(String(nJ.sprite_index || '')),
    M5 = N.mnfight,
    M6 = 0x0,
    M7 = nt && Z.held.b1 ? ['z'] : [],
    M8 = false;
  try {
    for (let Mv of ['left', 'right', 'up', 'down']) Z.held[Mv] = false;
    M2(0x0);
    for (let MH = 0x1; MH <= nm; MH++) {
      for (let Mg of ['left', 'right', 'up', 'down']) Z.held[Mg] = false;
      let Mx = nK && nK[MH - 0x1];
      if (Mx) {
        for (let Mq of Mx) (Mq === 'left' || Mq === 'right' || Mq === 'up' || Mq === 'down') && (Z.held[Mq] = true);
      }
      let Ma = g(Mx || [], MH > 0x1 ? nK && nK[MH - 0x2] || [] : M7);
      if ((Ma || M8) && (Z.synthetic = Ma, M8 = !!Ma), nN ? N.invc = 0x63 : N.inv = 0x63, M4) {
        let Mo = MH % 0x4 === 0x1;
        Z.synthetic = () => {
          Z.pressed.b1 = Mo, Z.held.b1 = Mo, Ma && Ma();
        };
      }
      Q.on = true, Q.shapes.length = 0x0;
      try {
        u(T, c());
      } finally {
        Q.on = false, M0 = Q.shapes.slice(), Q.shapes.length = 0x0;
      }
      if (R.frames++, nD = MH, M2(MH), N.battleover || nk.destroyed || N.mnfight !== M5 && ++M6 >= 0x3) break;
      if (MH >= n6.min && performance.now() - nX > nB) {
        R.cut = (R.cut | 0x0) + 0x1;
        break;
      }
    }
  } catch {} finally {
    t(nV), U(), Z.synthetic = nT, b(nA);
  }
  return {
    'hz': nr,
    'blue': nL,
    'solid': nj,
    'walls': nc,
    'plats': nR,
    'modes': nC,
    'vel': nY,
    'soulAt': nf,
    'clampBox': nI,
    'n': nD,
    'inv0': M3,
    'goals5': M1
  };
}
G(n8, 'record');
function n9(nJ, ny, nm, nK, nB, nX) {
  let nV = nm * nB,
    nT = nK * nB,
    nA = nm < 0x0,
    nt = nm > 0x0,
    nN = nK < 0x0,
    nb = nK > 0x0;
  if (nX(nJ + nV, ny)) {
    for (let nU = nB; nU > 0x0; nU--) {
      if (!nb && !nX(nJ + nV, ny - nU)) {
        ny -= nU, nT = 0x0;
        break;
      }
      if (!nN && !nX(nJ + nV, ny + nU)) {
        ny += nU, nT = 0x0;
        break;
      }
    }
    let nh = 0x0;
    if (nV > 0x0) {
      for (let ni = nV; ni >= 0x0; ni--) if (!nX(nJ + ni, ny)) {
        nV = ni, nh = 0x1;
        break;
      }
    }
    if (nV < 0x0) {
      for (let nE = nV; nE <= 0x0; nE++) if (!nX(nJ + nE, ny)) {
        nV = nE, nh = 0x1;
        break;
      }
    }
    nh || (nV = 0x0);
  }
  if (nX(nJ, ny + nT)) {
    for (let nS = nB; nS > 0x0; nS--) {
      if (!nt && !nX(nJ - nS, ny + nT)) {
        nJ -= nS, nV = 0x0;
        break;
      }
      if (!nA && !nX(nJ + nS, ny + nT)) {
        nJ += nS, nV = 0x0;
        break;
      }
    }
    let nQ = 0x0;
    if (nT > 0x0) {
      for (let nZ = nT; nZ >= 0x0; nZ--) if (!nX(nJ, ny + nZ)) {
        nT = nZ, nQ = 0x1;
        break;
      }
    }
    if (nT < 0x0) {
      for (let nu = nT; nu <= 0x0; nu++) if (!nX(nJ, ny + nu)) {
        nT = nu, nQ = 0x1;
        break;
      }
    }
    nQ || (nT = 0x0);
  }
  if (nX(nJ + nV, ny + nT)) {
    let nW = 0x0,
      nG = nV,
      np = nT;
    for (; np !== 0x0 || nG !== 0x0;) {
      if (!nX(nJ + nG, ny + np)) {
        nV = nG, nT = np, nW = 0x1;
        break;
      }
      Math.abs(np) >= 0x1 ? np > 0x0 ? np-- : np++ : np = 0x0, Math.abs(nG) >= 0x1 ? nG > 0x0 ? nG-- : nG++ : nG = 0x0;
    }
    nW || (nV = 0x0, nT = 0x0);
  }
  return [nJ + nV, ny + nT];
}
G(n9, 'drMove');
function nn(nJ) {
  return B(nJ) || K() ? false : !!n2(nJ);
}
G(nn, 'oracleCovers');
function nM(nJ = {}) {
  let ny = () => nJ.deadline !== void 0x0 && performance.now() >= nJ.deadline,
    nm = ng(nJ);
  if (nm && nm.priced) return nm;
  if (nm && nm.hits > 0x0 && !nJ.horizon && !nJ.noEscalate && !ny()) {
    let nB = ng(Object.assign({}, nJ, {
      'horizon': 0x64,
      'cap': Math.max(nJ.cap || 0x0, 0x7d0)
    }));
    nB && nB.hits < nm.hits && (nm = nB);
  }
  let nK = W.first('obj_heart');
  if (nm && nm.hits > 0x0 && !nJ.noEscalate && nK && (nK.shot === 0x1 || /yellow/i.test(String(nK.sprite_index || '')))) for (let nX of ['up', 'down', 'left', 'right']) {
    for (let nV of [0x8, 0x10, 0x1c]) {
      if (ny()) break;
      let nT = [];
      for (let nt = 0x0; nt < nV; nt++) nT.push([nX]);
      let nA = ng(Object.assign({}, nJ, {
        'guide': nT
      }));
      if (nA && nA.hits < nm.hits && (nm = nA), nm.hits === 0x0) break;
    }
    if (nm.hits === 0x0 || ny()) break;
  }
  for (let nN = 0x0; nN < 0x2 && nm && nm.hits > 0x0 && !nJ.noEscalate && !ny(); nN++) {
    let nb = ng(Object.assign({}, nJ, {
      'guide': nm.keys,
      'horizon': nm.horizon > 0x2d ? 0x64 : void 0x0
    }));
    if (!nb || nb.hits >= nm.hits) break;
    nm = nb;
  }
  return nm;
}
G(nM, 'oraclePlan');
var ne = {
    'a': null,
    'b': null,
    'idx': null,
    'cap': 0x0,
    'layers': [],
    'hash': new Map()
  },
  nv = G(nJ => ({
    'n': 0x0,
    'X': new Float64Array(nJ),
    'Y': new Float64Array(nJ),
    'U': new Float64Array(nJ),
    'JS': new Int8Array(nJ),
    'LK': new Int16Array(nJ),
    'C': new Float64Array(nJ),
    'HT': new Int16Array(nJ),
    'A': new Int8Array(nJ),
    'P': new Int32Array(nJ)
  }), 'dpFull');
function nH(nJ) {
  return ne.cap < nJ && (ne.a = nv(nJ), ne.b = nv(nJ), ne.idx = new Int32Array(nJ), ne.cap = nJ), ne;
}
G(nH, 'dpScratch');
function nx(nJ, ny) {
  let nm = ny.n,
    nK = Math.max(nm, 0x4b0),
    nB = ne.layers[nJ];
  return (!nB || nB.X.length < nm) && (nB = ne.layers[nJ] = {
    'n': 0x0,
    'X': new Float64Array(nK),
    'Y': new Float64Array(nK),
    'HT': new Int16Array(nK),
    'A': new Int8Array(nK),
    'P': new Int32Array(nK)
  }), nB.n = nm, nB.X.set(ny.X.subarray(0x0, nm)), nB.Y.set(ny.Y.subarray(0x0, nm)), nB.HT.set(ny.HT.subarray(0x0, nm)), nB.A.set(ny.A.subarray(0x0, nm)), nB.P.set(ny.P.subarray(0x0, nm)), nB;
}
G(nx, 'dpLayer');
function na(nJ) {
  let ny = ne.hash.get(nJ);
  return ny || (ny = {
    'hk': new Float64Array(nJ),
    'hv': new Int32Array(nJ),
    'hs': new Int32Array(nJ),
    'stamp': 0x0
  }, ne.hash.set(nJ, ny)), ny.stamp > 0x3fffffff && (ny.hs.fill(0x0), ny.stamp = 0x0), ny;
}
G(na, 'dpHash');
function ng(nJ = {}) {
  let ny = W.first('obj_heart'),
    nm = n2(ny);
  if (!nm) return null;
  if (typeof nm == 'object') return nq(nm, nJ, ny);
  let nK = performance.now(),
    nB = nJ.horizon || (nm === 'dr' ? 0x24 : 0x2d),
    nX = performance.now(),
    nV = n8(ny, nm, nB, nJ.guide || null, n7(nJ, nB));
  R.rec = (R.rec || 0x0) + (performance.now() - nX);
  let nT = nV.n;
  if (nT < 0x2) return null;
  let nA = n5(ny),
    nN = nm !== 'dr',
    nb = 0x0,
    nh = nN ? 0x4 : 0x6,
    nU = (MX, MV, MT, MA) => nV.hz.any(MX, MV + nA.l + nb, MT + nA.t + nb, MV + nA.r - nb, MT + nA.b - nb) || MA && nV.blue.any(MX, MV + nA.l + nb, MT + nA.t + nb, MV + nA.r - nb, MT + nA.b - nb),
    ni = (MX, MV, MT) => nV.hz.any(MX, MV + nA.l - nh, MT + nA.t - nh, MV + nA.r + nh, MT + nA.b + nh),
    nE = nm === 'dr' ? O(ny) : null,
    nQ = nE ? () => nE : nV.solid ? MX => (MV, MT) => nV.solid.any(MX, MV + nA.l, MT + nA.t, MV + nA.r, MT + nA.b) : null,
    nS = nN ? N.sp || 0x4 : ny.wspeed || 0x4,
    nZ = ny.movement,
    nu = nm === 'dr' ? F(ny) : null,
    nW = nm === 'dr' && l(ny) || 0x3e8;
  nV.modes[0x0] = nZ;
  let nG = n3[nZ],
    np = (MX, MV, MT) => MX[0x1] ? MV * MX[0x1] : MT * MX[0x0],
    nr = nG ? np(nG, ny.vspeed || 0x0, ny.hspeed || 0x0) : 0x0,
    nL = ny.jumpstage | 0x0,
    nj = nV.walls[0x0] ? (nV.walls[0x0][0x0] + nV.walls[0x0][0x1]) / 0x2 : ny.x,
    nc = nV.walls[0x0] ? (nV.walls[0x0][0x2] + nV.walls[0x0][0x3]) / 0x2 : ny.y,
    nR = new Float64Array(nT + 0x1),
    nC = new Float64Array(nT + 0x1);
  if (nm === 'dr' || nm === 'red') {
    let MX = nJ.guide || [];
    for (let MV = 0x1; MV <= nT; MV++) {
      let MT = nV.soulAt[MV - 0x1],
        MA = nV.soulAt[MV];
      if (!MT || !MA) continue;
      let MN = MX[MV - 0x1] || [],
        Mb = (MN.includes('right') ? 0x1 : 0x0) - (MN.includes('left') ? 0x1 : 0x0),
        Mh = (MN.includes('down') ? 0x1 : 0x0) - (MN.includes('up') ? 0x1 : 0x0),
        MU = MT[0x0],
        Mi = MT[0x1];
      if (nm === 'dr') {
        let MS = n9(MU, Mi, Mb, Mh, nS, nQ ? nQ(MV) : () => false);
        MU = MS[0x0], Mi = MS[0x1];
        let MZ = nV.clampBox[MV];
        MZ && (MU = Math.min(Math.max(MU, MZ[0x0]), MZ[0x1]), Mi = Math.min(Math.max(Mi, MZ[0x2]), MZ[0x3]));
      } else {
        let Mu = nV.walls[MV] || nV.walls[MV - 0x1];
        (nV.modes[MV] ?? nV.modes[MV - 0x1]) === 0x1 && (MU += Mb * nS, Mi += Mh * nS), Mu && (MU = Math.min(Math.max(MU, Mu[0x0]), Mu[0x1]), Mi = Math.min(Math.max(Mi, Mu[0x2]), Mu[0x3]));
      }
      let ME = MA[0x0] - MU,
        MQ = MA[0x1] - Mi;
      Math.abs(ME) > 0.05 && Math.abs(ME) < 0x28 && (nR[MV] = ME), Math.abs(MQ) > 0.05 && Math.abs(MQ) < 0x28 && (nC[MV] = MQ);
    }
  }
  let nY = n4,
    nf = null;
  for (let MW of W.list) !MW.destroyed && MW.is('obj_boneplat') && MW.lock === 0x1 && (nf = MW);
  let nI = nJ.cap || 0x4b0,
    nw = nJ.near || 0xc,
    nk = nI * nY.length + 0x10,
    nD = new Map(),
    nz = 0x0,
    M0 = MG => {
      if (!MG) return 0x0;
      let Mp = nD.get(MG);
      return Mp || (Mp = ++nz, nD.set(MG, Mp)), Mp;
    },
    M1 = nH(nk),
    M2 = M1.a,
    M3 = M1.b;
  M2.n = 0x1, M2.X[0x0] = ny.x, M2.Y[0x0] = ny.y, M2.U[0x0] = nr, M2.JS[0x0] = nL, M2.LK[0x0] = M0(nf), M2.C[0x0] = 0x0, M2.HT[0x0] = 0x0, M2.A[0x0] = -0x1, M2.P[0x0] = -0x1;
  let M4 = [nx(0x0, M2)],
    M5 = [];
  for (let [MG, Mp] of nD) M5[Mp] = MG;
  let M6 = 0x0,
    M7 = 0x1 << Math.ceil(Math.log2(nk * 0x2 + 0x40)),
    M8 = na(M7),
    M9 = M8.hk,
    Mn = M8.hv,
    MM = M8.hs,
    Me = M8.stamp,
    Mv = Mr => {
      let ML = (Math.imul(Mr | 0x0, 0x9e3779b1) ^ Math.imul(Mr / 0x100000000 | 0x0, 0x85ebca6b)) & M7 - 0x1;
      for (; MM[ML] === Me && M9[ML] !== Mr;) ML = ML + 0x1 & M7 - 0x1;
      return ML;
    },
    MH = nV.hz.w * nV.hz.cs + 0x4,
    Mx = nV.hz.h * nV.hz.cs + 0x4,
    Ma = nV.hz.x0 - 0x2,
    Mg = nV.hz.y0 - 0x2;
  (!w || w.length < MH * Mx * 0x2) && (w = new Int8Array(MH * Mx * 0x2), k = new Int32Array(MH * Mx * 0x2), D = 0x0), D > 0x3fffffff && (k.fill(0x0), D = 0x0);
  let Mq = w,
    Mo = k,
    MF = D;
  D += nT + 0x2;
  for (let Mr = 0x1; Mr <= nT; Mr++) {
    let ML = M3,
      Mj = Math.min(nk, M2.n * nY.length);
    ML.n = 0x0, Me = ++M8.stamp;
    let Mc = nV.walls[Mr] || nV.walls[Mr - 0x1],
      MR = nQ ? nQ(Mr) : null,
      MC = Mr <= nV.inv0,
      MY = nm === 'dr' ? -0x1 : nV.modes[Mr] ?? nV.modes[Mr - 0x1],
      Mf = n3[MY] || null,
      MI = nm !== 'dr' && Mr > 0x1 && MY !== nV.modes[Mr - 0x1],
      Mw = nV.vel[Mr],
      Mk = Mf && MY === 0x2 ? nV.plats[Mr] : null;
    if (Mk) for (let Mz of Mk) {
      let e0 = M0(Mz.id);
      Mz.pid = e0, M5[e0] = Mz.id;
    }
    let MD = Mr <= nw || (Mr - nw) % 0x3 === 0x1;
    for (let e1 = 0x0; e1 < M2.n; e1++) {
      let e2 = M2.X[e1],
        e3 = M2.Y[e1],
        e4 = M2.A[e1],
        e5 = M2.C[e1],
        e6 = M2.HT[e1];
      for (let e7 = 0x0; e7 < nY.length; e7++) {
        if (!MD && e4 >= 0x0 && e7 !== e4) continue;
        let e8 = nY[e7],
          e9 = e2,
          en = e3,
          eM = M2.U[e1],
          ev = M2.JS[e1],
          eH = M2.LK[e1];
        if (MI && Mf && Mw && (eM = np(Mf, Mw.vs, Mw.hs), ev = Mw.js, eH = 0x0), nm === 'dr') {
          let eB = n9(e9, en, e8[0x0], e8[0x1], nS, MR);
          e9 = eB[0x0] + nR[Mr], en = eB[0x1] + nC[Mr];
          let ed = nV.clampBox[Mr];
          ed && (e9 < ed[0x0] && (e9 = ed[0x0]), e9 > ed[0x1] && (e9 = ed[0x1]), en < ed[0x2] && (en = ed[0x2]), en > ed[0x3] && (en = ed[0x3])), e9 < 0x0 && (e9 = 0x0), e9 > 0x270 && (e9 = 0x270), en < 0x0 && (en = 0x0);
        } else {
          if (MY === 0x1 || !Mf) MY === 0x1 && (e9 += e8[0x0] * nS, en += e8[0x1] * nS), Mc && (e9 < Mc[0x0] && (e9 = Mc[0x0]), e9 > Mc[0x1] && (e9 = Mc[0x1]), en < Mc[0x2] && (en = Mc[0x2]), en > Mc[0x3] && (en = Mc[0x3])), e9 += nR[Mr], en += nC[Mr];else {
            let eX = Mf[0x1] ? e8[0x0] : e8[0x1],
              eV = e8[0x0] * Mf[0x0] + e8[0x1] * Mf[0x1] < 0x0;
            if (Mf[0x1] ? e9 += eX * nS : en += eX * nS, eV && ev === 0x1 && eM === 0x0 && (ev = 0x2, eM = -0x6), ev === 0x2 && (!eV && eM <= -0x1 && (eM = -0x1), eM > 0.5 && eM < 0x8 ? eM += 0.6 : eM > -0x1 && eM <= 0.5 ? eM += 0.2 : eM > -0x4 && eM <= -0x1 ? eM += 0.5 : eM <= -0x4 && (eM += 0.2)), e9 += Mf[0x0] * eM, en += Mf[0x1] * eM, Mc) {
              let eT = Mf[0x1] ? Mc[0x2] : Mc[0x0],
                eA = Mf[0x1] ? Mc[0x3] : Mc[0x1],
                eN = Mf[0x1] ? en : e9,
                eb = Mf[0x0] + Mf[0x1] > 0x0;
              (eb ? eN >= eA : eN <= eT) && (eN = eb ? eA : eT, ev = 0x1, eM = 0x0), (eb ? eN < eT : eN > eA) && (eN = eb ? eT : eA, eM < 0x0 && (eM = 0x0)), Mf[0x1] ? en = eN : e9 = eN, Mf[0x1] ? (e9 < Mc[0x0] && (e9 = Mc[0x0]), e9 > Mc[0x1] && (e9 = Mc[0x1])) : (en < Mc[0x2] && (en = Mc[0x2]), en > Mc[0x3] && (en = Mc[0x3]));
            }
            if (Mk && Mk.length) {
              let eh = 0x0,
                eU = null;
              for (let ei of Mk) {
                let eE = e9 + nA.l <= ei.r + 0x1 && e9 + nA.r >= ei.l && en + nA.t <= ei.bot + 0x1 && en + nA.b >= ei.top;
                eE && eM >= 0x0 && en <= ei.y - 0xb ? (en = ei.y - 0x10, eM = 0x0, ev = 0x1, eh = ei.pid, eU = ei) : !eE && eH === ei.pid && ev === 0x1 && (ev = 0x2, eM = 0x0), eE && eH === ei.pid && !eh && eM === 0x0 && ev === 0x1 && (eh = ei.pid, eU = ei);
              }
              eH = eh, eU && (e9 += eU.hs, en += eU.vs);
            } else eH && (ev === 0x1 && (ev = 0x2, eM = 0x0), eH = 0x0);
          }
        }
        let ex = Math.abs(e9 - e2) > 0.01 || Math.abs(en - e3) > 0.01,
          ea = e5,
          eg = e6,
          eq,
          eo = Math.floor(e9),
          eF = Math.floor(en),
          el = (nN || e9 === eo && en === eF) && eo - Ma >= 0x0 && eF - Mg >= 0x0 && eo - Ma < MH && eF - Mg < Mx ? ((eF - Mg) * MH + (eo - Ma)) * 0x2 + (e9 !== eo || en !== eF ? 0x1 : 0x0) : -0x1;
        el >= 0x0 && Mo[el] === MF + Mr ? eq = Mq[el] : (eq = nU(Mr, e9, en, false) ? 0x1 : nU(Mr, e9, en, true) ? 0x2 : ni(Mr, e9, en) ? 0x3 : 0x0, el >= 0x0 && (Mo[el] = MF + Mr, Mq[el] = eq));
        let eP = nW !== 0x3e8 && nm === 'dr' && eM > 0x0 && Mr - eM < 0x1e;
        !MC && !eP && (eq === 0x1 || eq === 0x2 && ex) ? (ea += nW, eg++, nW !== 0x3e8 && nm === 'dr' && (eM = Mr)) : eq === 0x3 && (ea += 0x2), e7 !== e4 && e4 >= 0x0 && (ea += 0.15), e7 !== 0x0 && (ea += 0.02), nu && (ea += nu(e9, en));
        let eQ = nV.goals5 && nV.goals5[Mr];
        if (eQ) {
          for (let eS of eQ) e9 >= eS.rect[0x0] && e9 <= eS.rect[0x2] && en >= eS.rect[0x1] && en <= eS.rect[0x3] && (ea -= eS.w);
        }
        let eO = Math.round(e9 / (nN ? 0x1 : 0x2)),
          eJ = Math.round(en / (nN ? 0x1 : 0x2)),
          ey = Mf ? (((eO * 0x200 + eJ) * 0x80 + (Math.round(eM * 0x5) + 0x40)) * 0x3 + ev) * 0x40 + eH : eO * 0x200 + eJ,
          em = Mv(ey),
          eK;
        if (MM[em] !== Me) {
          if (ML.n >= Mj) continue;
          eK = ML.n++, MM[em] = Me, M9[em] = ey, Mn[em] = eK;
        } else {
          if (ea < ML.C[Mn[em]]) eK = Mn[em];else {
            M6++;
            continue;
          }
        }
        ML.X[eK] = e9, ML.Y[eK] = en, ML.U[eK] = eM, ML.JS[eK] = ev, ML.LK[eK] = eH, ML.C[eK] = ea, ML.HT[eK] = eg, ML.A[eK] = e7, ML.P[eK] = e1, M6++;
      }
    }
    if (ML.n > nI) {
      let eZ = M1.idx.subarray(0x0, ML.n);
      for (let eG = 0x0; eG < ML.n; eG++) eZ[eG] = eG;
      let eu = ML.C;
      eZ.sort((ep, er) => eu[ep] - eu[er]);
      let eW = M2;
      for (let ep = 0x0; ep < nI; ep++) {
        let er = eZ[ep];
        eW.X[ep] = ML.X[er], eW.Y[ep] = ML.Y[er], eW.U[ep] = ML.U[er], eW.JS[ep] = ML.JS[er], eW.LK[ep] = ML.LK[er], eW.C[ep] = ML.C[er], eW.HT[ep] = ML.HT[er], eW.A[ep] = ML.A[er], eW.P[ep] = ML.P[er];
      }
      eW.n = nI, M3 = ML, M2 = eW;
    } else M3 = M2, M2 = ML;
    if (M4.push(nx(M4.length, M2)), !M2.n) break;
  }
  let Ml = M2,
    MP = M4.length - 0x1,
    MO = -0x1,
    MJ = 0x1 / 0x0;
  for (let eL = 0x0; eL < Ml.n; eL++) {
    let ej = Ml.C[eL],
      ec = Ml.X[eL],
      eR = Ml.Y[eL];
    nV.hz.any(MP, ec + nA.l - 0x10, eR + nA.t - 0x10, ec + nA.r + 0x10, eR + nA.b + 0x10) && (ej += 0x3), nu || (ej += (Math.abs(ec - nj) + Math.abs(eR - nc)) * 0.01), ej < MJ && (MJ = ej, MO = eL);
  }
  if (MO < 0x0) return null;
  let My = [],
    Mm = [];
  for (let eC = MP, eY = MO; eC > 0x0; eC--) {
    let ef = M4[eC];
    My.push(ef.A[eY]), Mm.push([ef.X[eY], ef.Y[eY], ef.HT[eY]]), eY = ef.P[eY];
  }
  My.reverse(), Mm.reverse();
  let MK = {
      'hits': Ml.HT[MO]
    },
    MB = My.map(eI => {
      let ew = nY[eI],
        ek = [];
      return ew[0x0] < 0x0 && ek.push('left'), ew[0x0] > 0x0 && ek.push('right'), ew[0x1] < 0x0 && ek.push('up'), ew[0x1] > 0x0 && ek.push('down'), ek;
    }),
    Md = performance.now() - nK;
  return R.plans++, R.ms += Md, R.lastMs = Md, R.states = M6, R.lastHits = MK.hits, R.mode = nm, {
    'keys': MB,
    'pos': Mm,
    'hits': MK.hits,
    'mode': nm,
    'horizon': nT,
    'ms': Md,
    'rec': nV,
    'priced': nW !== 0x3e8
  };
}
G(ng, 'planOnce');
function nq(nJ, ny, nm) {
  let nK = nJ.inst && !nJ.inst.destroyed ? nJ.inst : nm;
  if (!nK || !Array.isArray(nJ.acts) || !nJ.acts.length || typeof nJ.step != 'function' || typeof nJ.init != 'function') return null;
  let nB = performance.now(),
    nX = ny.horizon || nJ.horizon || 0x24,
    nV = performance.now(),
    nT = n8(nK, nJ, nX, ny.guide || null, n7(ny, nX));
  R.rec = (R.rec || 0x0) + (performance.now() - nV);
  let nA = nT.n;
  if (nA < 0x2) return null;
  let nt = nJ.rect || n5(nK),
    nN = 0x6,
    nb = (M8, M9, Mn, MM) => nT.hz.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b) || MM && nT.blue.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b),
    nh = (M8, M9, Mn) => nT.hz.any(M8, M9 + nt.l - nN, Mn + nt.t - nN, M9 + nt.r + nN, Mn + nt.b + nN),
    nU = M8 => nT.solid ? (M9, Mn) => nT.solid.any(M8, M9 + nt.l, Mn + nt.t, M9 + nt.r, Mn + nt.b) : () => false,
    ni = F(nK),
    nE = nJ.acts,
    nQ = ny.cap || nJ.cap || 0x4b0,
    nS = ny.near || nJ.near || 0xc,
    nZ = nQ * nE.length + 0x10,
    nu = 0x6,
    nW = M8 => ({
      'n': 0x0,
      'S': new Float64Array(M8 * nu),
      'C': new Float64Array(M8),
      'HT': new Int16Array(M8),
      'A': new Int16Array(M8),
      'P': new Int32Array(M8)
    }),
    nG = nW(0x1),
    np = nJ.init(nK) || [nK.x, nK.y];
  for (let M8 = 0x0; M8 < nu; M8++) nG.S[M8] = Number(np[M8]) || 0x0;
  nG.n = 0x1, nG.C[0x0] = 0x0, nG.HT[0x0] = 0x0, nG.A[0x0] = -0x1, nG.P[0x0] = -0x1;
  let nr = [nG],
    nL = 0x1 << Math.ceil(Math.log2(nZ * 0x2 + 0x40)),
    nj = new Float64Array(nL),
    nc = new Int32Array(nL),
    nR = new Int32Array(nL),
    nC = 0x0,
    nY = 0x0,
    nf = M9 => {
      let Mn = (Math.imul(M9 | 0x0, 0x9e3779b1) ^ Math.imul(M9 / 0x100000000 | 0x0, 0x85ebca6b)) & nL - 0x1;
      for (; nR[Mn] === nC && nj[Mn] !== M9;) Mn = Mn + 0x1 & nL - 0x1;
      return Mn;
    },
    nI = typeof nJ.key == 'function' ? nJ.key : M9 => {
      let Mn = 0x0;
      for (let MM = 0x2; MM < nu; MM++) Mn = Math.imul(Mn, 0x1f) + Math.round(M9[MM] * 0x4) | 0x0;
      return (Math.round(M9[0x0] / 0x2) * 0x200 + Math.round(M9[0x1] / 0x2)) * 0x10000 + (Mn & 0xffff);
    },
    nw = typeof nJ.vulnerable == 'function' ? nJ.vulnerable : null,
    nk = new Float64Array(nu);
  for (let M9 = 0x1; M9 <= nA; M9++) {
    let Mn = nW(Math.min(nZ, nG.n * nE.length));
    nC++;
    let MM = M9 <= nT.inv0,
      Me = M9 <= nS || (M9 - nS) % 0x3 === 0x1,
      Mv = {
        'pm': nU(M9),
        'clamp': nT.clampBox[M9] || null,
        'soulAt': nT.soulAt,
        't': M9
      },
      MH = nT.goals5 && nT.goals5[M9];
    for (let Mx = 0x0; Mx < nG.n; Mx++) {
      let Ma = nG.A[Mx],
        Mg = nG.C[Mx],
        Mq = nG.HT[Mx],
        Mo = Mx * nu;
      for (let MF = 0x0; MF < nE.length; MF++) {
        if (!Me && Ma >= 0x0 && MF !== Ma) continue;
        for (let MX = 0x0; MX < nu; MX++) nk[MX] = nG.S[Mo + MX];
        try {
          nJ.step(nk, MF, M9, Mv);
        } catch {
          continue;
        }
        let Ml = nk[0x0],
          MP = nk[0x1];
        if (!Number.isFinite(Ml) || !Number.isFinite(MP)) continue;
        let MO = Math.abs(Ml - nG.S[Mo]) > 0.01 || Math.abs(MP - nG.S[Mo + 0x1]) > 0.01,
          MJ = Mg,
          My = Mq,
          Mm = nb(M9, Ml, MP, false) ? 0x1 : nb(M9, Ml, MP, true) ? 0x2 : nh(M9, Ml, MP) ? 0x3 : 0x0;
        if (!MM && (!nw || nw(nk)) && (Mm === 0x1 || Mm === 0x2 && MO) ? (MJ += 0x3e8, My++) : Mm === 0x3 && (MJ += 0x2), MF !== Ma && Ma >= 0x0 && (MJ += 0.15), nE[MF].length && (MJ += 0.02), ni && (MJ += ni(Ml, MP)), MH) {
          for (let MV of MH) Ml >= MV.rect[0x0] && Ml <= MV.rect[0x2] && MP >= MV.rect[0x1] && MP <= MV.rect[0x3] && (MJ -= MV.w);
        }
        let MK = nI(nk),
          MB = nf(MK),
          Md;
        if (nR[MB] !== nC) {
          if (Mn.n >= Mn.C.length) continue;
          Md = Mn.n++, nR[MB] = nC, nj[MB] = MK, nc[MB] = Md;
        } else {
          if (MJ < Mn.C[nc[MB]]) Md = nc[MB];else {
            nY++;
            continue;
          }
        }
        for (let MT = 0x0; MT < nu; MT++) Mn.S[Md * nu + MT] = nk[MT];
        Mn.C[Md] = MJ, Mn.HT[Md] = My, Mn.A[Md] = MF, Mn.P[Md] = Mx, nY++;
      }
    }
    if (Mn.n > nQ) {
      let MA = new Int32Array(Mn.n);
      for (let Mh = 0x0; Mh < Mn.n; Mh++) MA[Mh] = Mh;
      let MN = Mn.C;
      MA.sort((MU, Mi) => MN[MU] - MN[Mi]);
      let Mb = nW(nQ);
      for (let MU = 0x0; MU < nQ; MU++) {
        let Mi = MA[MU];
        for (let ME = 0x0; ME < nu; ME++) Mb.S[MU * nu + ME] = Mn.S[Mi * nu + ME];
        Mb.C[MU] = Mn.C[Mi], Mb.HT[MU] = Mn.HT[Mi], Mb.A[MU] = Mn.A[Mi], Mb.P[MU] = Mn.P[Mi];
      }
      Mb.n = nQ, nG = Mb;
    } else nG = Mn;
    if (nr.push(nG), !nG.n) break;
  }
  let nD = nr[nr.length - 0x1],
    nz = nr.length - 0x1,
    M0 = nK.x,
    M1 = nK.y,
    M2 = -0x1,
    M3 = 0x1 / 0x0;
  for (let MQ = 0x0; MQ < nD.n; MQ++) {
    let Ms = nD.C[MQ],
      MS = nD.S[MQ * nu],
      MZ = nD.S[MQ * nu + 0x1];
    nT.hz.any(nz, MS + nt.l - 0x10, MZ + nt.t - 0x10, MS + nt.r + 0x10, MZ + nt.b + 0x10) && (Ms += 0x3), ni || (Ms += (Math.abs(MS - M0) + Math.abs(MZ - M1)) * 0.002), Ms < M3 && (M3 = Ms, M2 = MQ);
  }
  if (M2 < 0x0) return null;
  let M4 = [],
    M5 = [];
  for (let Mu = nz, MW = M2; Mu > 0x0; Mu--) {
    let MG = nr[Mu];
    M4.push(MG.A[MW]), M5.push([MG.S[MW * nu], MG.S[MW * nu + 0x1], MG.HT[MW]]), MW = MG.P[MW];
  }
  M4.reverse(), M5.reverse();
  let M6 = M4.map(Mp => nE[Mp].slice()),
    M7 = performance.now() - nB;
  return R.plans++, R.ms += M7, R.lastMs = M7, R.states = nY, R.lastHits = nD.HT[M2], R.mode = nJ.name || 'custom', {
    'keys': M6,
    'pos': M5,
    'hits': nD.HT[M2],
    'mode': nJ.name || 'custom',
    'horizon': nA,
    'ms': M7,
    'rec': nT
  };
}
G(nq, 'planCustom');
function no(nJ, ny = {}) {
  return nq(nJ, ny, W.first('obj_heart'));
}
G(no, 'oraclePlanKind');
var nF = typeof HTMLCanvasElement < 'u',
  nl = 0x2d,
  nP = class eD {
    constructor(nJ = {}) {
      this.opts = nJ, this.plan = null, this.pos = 0x0, this.every = nJ.every || 0x3, this.lastFrame = -0x9;
    }
    ["reset"]() {
      this.plan = null, this.pos = 0x0;
    }
    ["step"]() {
      if (W.frame !== this.lastFrame + 0x1 && (this.plan = null), this.lastFrame = W.frame, !this.plan || this.pos >= this.every || this.pos >= this.plan.keys.length) {
        let ny = this.plan ? this.plan.keys.slice(this.pos) : null,
          nm = Object.assign({}, this.opts, {
            'guide': ny
          });
        if (nF && this.opts.budget === void 0x0 && this.opts.deadline === void 0x0 && (nm.deadline = performance.now() + nl), this.plan = nM(nm), this.pos = 0x0, !this.plan) return false;
      }
      let nJ = this.plan.keys[this.pos++] || [];
      return a(nJ.join('+'), 0x0), true;
    }
  };
G(nP, 'OracleDriver');
var nO = nP;
export { L as a, R as b, n6 as c, nn as d, nM as e, no as f, nl as g, nO as h };