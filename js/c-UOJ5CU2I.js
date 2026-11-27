import { F as Z, x as v, y as u } from './c-J7PU4477.js';
import { f as k } from './c-WSZI3RLB.js';
import { a as H, b as X, c as W } from './c-GI6IDYOV.js';
import { g as i } from './c-ZQQWH6UG.js';
import { Ga as h, Ha as f, N as o, X as c, ac as m, lc as F, xb as q } from './c-PBMEVLU6.js';
import { a as R, l as L } from './c-XSSGDLV7.js';
L(), L();
var l = 9,
  S = 17;
function e() {
  const n = {};
  n.acaia = function (rk, rH) {
    return rk === rH;
  }, n.KinlV = function (rk, rH) {
    return rk !== rH;
  };
  const ru = n;
  ru.acaia(i.mnfight, 2) && (ru.KinlV(i._clkTurn, i.turn) || ru.acaia(i._clkFrame, void 0)) && (i._clkTurn = i.turn, i._clkFrame = q.frame);
}
R(e, "clockTick");
const I = {};
I.name = "stay", I.keys = [], I.hold = void 0;
const g = {};
g.name = "left", g.keys = ["left"];
const j = {};
j.name = "right", j.keys = ["right"];
const C = {};
C.name = 'up', C.keys = ['up'];
const K = {};
K.name = "down", K.keys = ["down"];
const s = {};
s.name = "up-left", s.keys = ['up', "left"];
const b = {};
b.name = "up-right", b.keys = ['up', "right"];
const t = {};
t.name = "down-left", t.keys = ["down", "left"];
const T = {};
T.name = "down-right", T.keys = ["down", "right"];
const U = {};
U.name = "hop", U.keys = ['up'];
U.hold = 0x4;
const D = {};
D.name = "hop-left", D.keys = ['up', "left"], D.hold = 0x4;
const E = {};
E.name = "hop-right", E.keys = ['up', "right"], E.hold = 0x4;
var V = 14,
  r0 = (l - 1) / 2,
  r1 = l * l + 4 + 2 + 1 + 4 + 4 + 4 + 2 + 12 + S,
  r2 = [I, g, j, C, K, s, b, t, T, U, D, E],
  r3 = r2.length;
function r4(r) {
  const rv = {
    'bIUQl': function (rH, rX) {
      return rH(rX);
    }
  };
  if (!r) return false;
  let rk = String(r.mask_index || r.sprite_index || '');
  return !/heartgreen|heartpurple/i.test(rk);
}
R(r4, "isFreeFlight");
var r5 = 20;
function r6(r) {
  const rZ = {
    'qZAOU': function (rH, rX) {
      return rH(rX);
    },
    'FZqFE': function (rH, rX) {
      return rH || rX;
    }
  };
  let rk = String(r || '').replace(/^spr_/, '');
  return /heartblue/.test(rk) ? 1 : /heartgreen/.test(rk) ? 2 : /heartpurple/.test(rk) ? 3 : 0;
}
R(r6, "modeIndex");
function r7(r, n, ri, rh, rf) {
  const ro = {
    'uiIfC': function (nz, ny) {
      return nz < ny;
    },
    'JkeCE': function (nz, ny) {
      return nz == ny;
    },
    'OHRpd': function (nz, ny) {
      return nz != ny;
    },
    'KgKYl': function (nz, ny) {
      return nz + ny;
    },
    'VOYzt': function (nz, ny) {
      return nz / ny;
    },
    'OHDKr': function (nz, ny) {
      return nz + ny;
    },
    'Mcfwq': function (nz, ny) {
      return nz - ny;
    },
    'iALoM': function (nz, ny) {
      return nz / ny;
    },
    'aWDJB': function (nz, ny) {
      return nz + ny;
    },
    'lAgFR': function (nz, ny) {
      return nz === ny;
    },
    'BsOUn': "qPQJm",
    'rkEJe': "zLJfP",
    'KQxlt': function (nz, ny) {
      return nz * ny;
    },
    'ldmKM': function (nz, ny) {
      return nz - ny;
    },
    'gglxF': function (nz, ny) {
      return nz * ny;
    },
    'GBjeS': function (nz, ny) {
      return nz + ny;
    },
    'jLRvd': "vtDXb",
    'dRNSf': function (nz, ny) {
      return nz <= ny;
    },
    'acIHd': "ajgwS",
    'eZEFb': function (nz, ny) {
      return nz !== ny;
    },
    'fsyGO': function (nz, ny) {
      return nz < ny;
    },
    'Dsnmr': function (nz, ny) {
      return nz !== ny;
    },
    'Cuyis': function (nz, ny) {
      return nz > ny;
    },
    'vgDwg': function (nz, ny) {
      return nz + ny;
    },
    'NjAHs': function (nz, ny) {
      return nz + ny;
    },
    'bWoDB': function (nz, ny) {
      return nz * ny;
    },
    'TeVJJ': function (nz, ny) {
      return nz * ny;
    },
    'LOmHr': function (nz, ny) {
      return nz * ny;
    },
    'eUsXf': function (nz, ny) {
      return nz * ny;
    },
    'PkQwn': function (nz, ny) {
      return nz < ny;
    },
    'UCYyy': function (nz, ny) {
      return nz + ny;
    },
    'HpaJX': function (nz, ny) {
      return nz < ny;
    },
    'tuJAw': function (nz, ny) {
      return nz + ny;
    },
    'hCbla': function (nz, ny) {
      return nz / ny;
    },
    'ckFrI': function (nz, ny) {
      return nz + ny;
    },
    'lcpXm': function (nz, ny) {
      return nz * ny;
    },
    'klfEc': function (nz, ny) {
      return nz > ny;
    },
    'LXMRu': function (nz, ny) {
      return nz - ny;
    },
    'eRNRT': function (nz, ny) {
      return nz / ny;
    },
    'WlCAA': function (nz, ny) {
      return nz(ny);
    },
    'IzKCS': function (nz, ny) {
      return nz / ny;
    },
    'ltRwi': function (nz, ny) {
      return nz === ny;
    },
    'YJmzT': function (nz, ny) {
      return nz - ny;
    },
    'kggcz': function (nz, ny) {
      return nz / ny;
    },
    'idxVP': function (nz, ny) {
      return nz / ny;
    },
    'fgccw': function (nz, ny) {
      return nz - ny;
    },
    'nSfdz': function (nz, ny) {
      return nz && ny;
    },
    'gMeOP': function (nz, ny) {
      return nz >= ny;
    },
    'KJQnN': function (nz, ny) {
      return nz / ny;
    },
    'JIJMQ': function (nz, ny) {
      return nz / ny;
    },
    'LHnys': function (nz, ny) {
      return nz - ny;
    },
    'TMLLj': function (nz, ny) {
      return nz / ny;
    },
    'bdatJ': function (nz, ny) {
      return nz / ny;
    },
    'CnpnS': function (nz, ny) {
      return nz - ny;
    },
    'reYKb': function (nz, ny) {
      return nz - ny;
    },
    'TdmwL': function (nz, ny) {
      return nz < ny;
    },
    'AZkzO': function (nz, ny) {
      return nz / ny;
    },
    'VkCVp': function (nz, ny) {
      return nz / ny;
    },
    'otLKi': function (nz, ny) {
      return nz / ny;
    },
    'PGtsc': function (nz) {
      return nz();
    },
    'uMqdt': function (nz, ny) {
      return nz | ny;
    },
    'wciDp': function (nz, ny) {
      return nz + ny;
    },
    'DTHZP': function (nz, ny) {
      return nz / ny;
    },
    'CTmBO': function (nz, ny) {
      return nz !== ny;
    },
    'AMFtZ': function (nz, ny) {
      return nz / ny;
    },
    'xRULA': function (nz, ny) {
      return nz / ny;
    }
  };
  let rF = rh || new Float32Array(r1);
  if (rF.fill(0), !r) return rF;
  let rq = o[r.mask_index] || o[r.sprite_index],
    rw = rq && rq.bb ? (rq.bb[2] - rq.bb[0] + 1) / 2 : 8,
    rR = rq && rq.bb ? (rq.bb[3] - rq.bb[1] + 1) / 2 : 8,
    rL = r.x + rw,
    rz = r.y + rR,
    rt = n ? n.length : 0;
  for (let nz = 0; nz < l; nz++) for (let ny = 0; ny < l; ny++) {
    let nS = rL + (ny - r0) * V,
      ne = rz + (nz - r0) * V,
      nI = r5 + 1;
    for (let nP = 0; nP < rt; nP++) {
      let ng = n[nP];
      for (let nA = 0; nA <= r5; nA += 4) {
        if (ng.t0 !== void 0 && nA < ng.t0 || ng.ttl !== void 0 && nA > ng.ttl) continue;
        let nj, nJ;
        if (ng.path) {
          let nC = ng.path(nA);
          nj = nC[0], nJ = nC[1];
        } else nj = ng.x + ng.vx * nA + 0.5 * (ng.ax || 0) * nA * nA, nJ = ng.y + ng.vy * nA + 0.5 * (ng.ay || 0) * nA * nA;
        if (Math.abs(nS - nj) < V / 2 + ng.hw && Math.abs(ne - nJ) < V / 2 + ng.hh) {
          nA < nI && (nI = nA);
          break;
        }
      }
    }
    rF[nz * l + ny] = nI > r5 ? 0 : 1 - nI / r5;
  }
  let nH = l * l;
  rF[nH + r6(r.mask_index || r.sprite_index)] = 1, nH += 4, rF[nH++] = Math.max(-1, Math.min(1, (r.hspeed || 0) / 6)), rF[nH++] = Math.max(-1, Math.min(1, (r.vspeed || 0) / 8)), rF[nH++] = r.jumpstage === 1 ? 1 : 0, ri ? (rF[nH++] = Math.max(0, Math.min(1, (rL - ri[0]) / 160)), rF[nH++] = Math.max(0, Math.min(1, (ri[2] - rL) / 160)), rF[nH++] = Math.max(0, Math.min(1, (rz - ri[1]) / 160)), rF[nH++] = Math.max(0, Math.min(1, (ri[3] - rz) / 160))) : nH += 4;
  let nX = i.idealborder;
  ri && nX && nX.length >= 4 ? (rF[nH++] = Math.max(-1, Math.min(1, (nX[0] - ri[0]) / 40)), rF[nH++] = Math.max(-1, Math.min(1, (nX[1] - ri[2]) / 40)), rF[nH++] = Math.max(-1, Math.min(1, (nX[2] - ri[1]) / 40)), rF[nH++] = Math.max(-1, Math.min(1, (nX[3] - ri[3]) / 40))) : nH += 4;
  let nc = 1000000000,
    nm = 0,
    nF = 0,
    nq = 0,
    nw = 0;
  for (let nG = 0; nG < rt; nG++) {
    let nD = n[nG],
      nE = nD.x - rL,
      nV = nD.y - rz,
      d0 = Math.hypot(nE, nV);
    d0 < nc && (nc = d0, nm = nE, nF = nV, nq = nD.vx, nw = nD.vy);
  }
  nc < 100000000 ? (rF[nH++] = Math.max(-1, Math.min(1, nm / 120)), rF[nH++] = Math.max(-1, Math.min(1, nF / 120)), rF[nH++] = Math.max(-1, Math.min(1, nq / 10)), rF[nH++] = Math.max(-1, Math.min(1, nw / 10))) : nH += 4, rF[nH++] = Math.min(1, rt / 40), rF[nH++] = 1, rf != null && rf >= 0 && rf < 12 && (rF[nH + rf] = 1), nH += 12, e();
  let nR = Math.max(0, i.turn | 0);
  return rF[nH + Math.min(11, nR)] = 1, nH += 12, rF[nH++] = Math.min(1, nR / 24), rF[nH++] = i.turntimer > 0 ? Math.min(1, i.turntimer / 300) : 0, rF[nH++] = i._clkFrame !== void 0 ? Math.min(1, (q.frame - i._clkFrame) / 400) : 0, ri ? (rF[nH++] = Math.max(0, Math.min(1, (rL - ri[0]) / Math.max(1, ri[2] - ri[0]))), rF[nH++] = Math.max(0, Math.min(1, (rz - ri[1]) / Math.max(1, ri[3] - ri[1])))) : nH += 2, rF;
}
R(r7, "encode");
var r8 = null,
  r9 = null,
  rr = R(() => r8 || (r8 = W(F)), 'getGfx'),
  rn = {
    'searches': 0x0,
    'frames': 0x0,
    'ms': 0x0,
    'nodes': 0x0
  };
function rd() {
  if (typeof i.hp == 'number') return i.hp;
  if (Array.isArray(i.hp)) {
    let r = 0x0;
    for (let n = 0x1; n <= 0x3; n++) r += Number(i.hp[n]) || 0x0;
    return r;
  }
  return 0x0;
}
R(rd, 'hpTotal');
function rQ() {
  let r = q.first('obj_heart') || q.first('obj_purpleheart');
  if (!r) return 0x0;
  let n = 0x3b9aca00;
  for (let rZ of q.list) {
    if (rZ.destroyed || rZ === r) continue;
    let rv = rZ.constructor.name;
    if (!/bul|bone|spear|blast|arrow|flame|slash|knife|bullet/i.test(rv)) continue;
    let ru = Math.hypot((rZ.x || 0x0) - r.x, (rZ.y || 0x0) - r.y);
    ru < n && (n = ru);
  }
  return n === 0x3b9aca00 ? 0xc8 : Math.min(0xc8, n);
}
R(rQ, 'clearance');
function rM(r) {
  let rZ = q.first('obj_heart') || q.first('obj_purpleheart'),
    rv = String(rZ && (rZ.mask_index || rZ.sprite_index) || ''),
    ru = /heartblue/i.test(rv),
    rk = (r || 0x0) >= 0x2,
    rH = [];
  for (let rX = 0x0; rX < r2.length; rX++) {
    let rW = r2[rX];
    rk && rW.keys.length > 0x1 && rW.hold === void 0x0 || !ru && rW.hold !== void 0x0 || rH.push(rX);
  }
  return rH;
}
R(rM, 'actionsFor');
function rN() {
  let r = q.first('obj_heart') || q.first('obj_purpleheart');
  return r ? (r.x | 0x0) + ',' + (r.y | 0x0) + ',' + Math.round((r.vspeed || 0x0) * 0x2) + ',' + (r.jumpstage || 0x0) : 'none';
}
R(rN, 'soulKey');
function rY(r, rZ, rv) {
  let ru = 0x0,
    rk = false,
    rH = 0x0;
  for (let rX = 0x0; rX < rZ; rX++) {
    for (let ri of ['left', 'right', 'up', 'down']) c.held[ri] = false;
    for (let rh of r.keys) rh === 'up' && r.hold !== void 0x0 && rX >= r.hold || (c.held[rh] = true);
    c.pressed.up = rX === 0x0 && r.keys.indexOf('up') >= 0x0;
    try {
      m(k, rr());
    } catch {
      ru += 0x63, rk = true;
      break;
    }
    rH++, rn.frames++;
    let rW = rd();
    if (rW < rv - ru && (ru = rv - rW), rW <= 0x0 || i.battleover) {
      rk = true;
      break;
    }
  }
  return {
    'lost': ru,
    'dead': rk,
    'ran': rH
  };
}
R(rY, 'playMacro');
function rO(rZ) {
  let rv = rZ || {},
    ru = rv.width || 0x6,
    rk = rv.depth || 0xa,
    rH = rv.near || 0x2,
    rX = rv.far || rv.macro || 0x6;
  if (!q.list.length || !(q.first('obj_heart') || q.first('obj_purpleheart'))) return null;
  let rW = typeof performance < 'u' && performance.now ? performance.now() : 0x0,
    ri = H(),
    rh = rd();
  h();
  let rf = rv.budgetMs || 0x0,
    ro = rf ? (typeof performance < 'u' ? performance.now() : Date.now()) + rf : 0x0,
    rc = () => ro && (typeof performance < 'u' ? performance.now() : Date.now()) > ro,
    rm = (rR, rL) => {
      let rz = [{
        'snap': ri,
        'lost': 0x0,
        'clear': rQ(),
        'first': -0x1,
        'dead': false,
        'line': []
      }];
      for (let rt = 0x0; rt < rL && !(rt > 0x0 && rc()); rt++) {
        let nk = rt === 0x0 ? rH : rX,
          nH = [],
          nX = new Map();
        for (let nh = 0x0; nh < rz.length; nh++) {
          let nf = rz[nh];
          if (nf.dead) {
            nH.push({
              'keep': nf
            });
            continue;
          }
          X(nf.snap);
          let no = rM(rt);
          if (rt === 0x0 && rv.rootOnly && rv.rootOnly.length && (no = no.filter(nc => rv.rootOnly.indexOf(nc) >= 0x0), !no.length)) return null;
          if (rv.guide && rv.topK && no.length > rv.topK) {
            let nc = q.first('obj_heart') || q.first('obj_purpleheart');
            if (nc) {
              let nm = [];
              try {
                nm = u();
              } catch {}
              r9 = r9 || new Float32Array(r1);
              let nF = nf.line.length ? nf.line[nf.line.length - 0x1] : rv.prev ?? -0x1;
              r7(nc, nm, v(), r9, nF);
              let nq = rv.guide.forward(r9);
              no = no.slice().sort((nw, nR) => nq[nR] - nq[nw]).slice(0x0, rv.topK);
            }
          }
          for (let nw of no) {
            X(nf.snap);
            let nR = rY(r2[nw], nk, rh);
            rn.nodes++;
            let nL = {
                'parent': nf,
                'action': nw,
                'frames': nk,
                'key': rN(),
                'lost': Math.max(nf.lost, nR.lost),
                'clear': nR.dead ? 0x0 : rQ(),
                'first': nf.first < 0x0 ? nw : nf.first,
                'dead': nR.dead
              },
              nz = nX.get(nL.key);
            if (!(nz && !(nL.lost < nz.lost || nL.lost === nz.lost && nL.clear > nz.clear))) {
              if (nz) {
                let ny = nH.indexOf(nz);
                ny >= 0x0 && nH.splice(ny, 0x1);
              }
              nX.set(nL.key, nL), nH.push(nL);
            }
          }
        }
        if (!nH.length) break;
        nH.sort((nl, nS) => {
          let ne = nl.keep ? nl.keep.lost : nl.lost,
            nI = nS.keep ? nS.keep.lost : nS.lost,
            nP = (nl.keep ? nl.keep.dead : nl.dead) ? 0x1 : 0x0,
            ng = (nS.keep ? nS.keep.dead : nS.dead) ? 0x1 : 0x0,
            nA = nl.keep ? nl.keep.clear : nl.clear,
            nj = nS.keep ? nS.keep.clear : nS.clear;
          return ne - nI || nP - ng || nj - nA;
        });
        let nW = nH.slice(0x0, rR),
          ni = [];
        for (let nl of nW) {
          if (nl.keep) {
            ni.push(nl.keep);
            continue;
          }
          X(nl.parent.snap), rY(r2[nl.action], nl.frames, rh), ni.push({
            'snap': H(),
            'lost': nl.lost,
            'clear': nl.clear,
            'first': nl.first,
            'dead': nl.dead,
            'line': nl.parent.line.concat(nl.action)
          });
        }
        if (rz = ni, rz.every(nS => nS.lost === 0x0) && rt >= 0x2 && rz[0x0].clear > 0x5a) break;
      }
      return rq(rz)[0x0];
    },
    rF = rv.tail === void 0x0 ? 0x2d : rv.tail,
    rq = rR => {
      if (!rF) return rR;
      for (let rL of rR) {
        if (rL.dead) {
          rL.tailLost = 0x63;
          continue;
        }
        X(rL.snap);
        let rz = rd(),
          rt = 0x0;
        for (let nk = 0x0; nk < rF; nk++) {
          let nH = q.first('obj_heart') || q.first('obj_purpleheart');
          if (nH) try {
            Z(null, nH);
          } catch {}
          try {
            m(k, rr());
          } catch {
            rt += 0x63;
            break;
          }
          rn.frames++;
          let nX = rd();
          if (rz - nX > rt && (rt = rz - nX), nX <= 0x0 || i.battleover) {
            rt += 0x32;
            break;
          }
        }
        rL.tailLost = rt;
      }
      return rR.sort((nW, ni) => nW.lost + (nW.tailLost || 0x0) - (ni.lost + (ni.tailLost || 0x0)) || nW.lost - ni.lost || ni.clear - nW.clear), rR;
    },
    rw;
  try {
    if (rw = rm(ru, rk), rw && (rw.lost > 0x0 || rw.tailLost > 0x0) && rv.escalate !== false && !rc()) {
      let rR = rm(ru * 0x2, Math.min(rk + 0x6, 0x14));
      rR && rR.lost + (rR.tailLost || 0x0) < rw.lost + (rw.tailLost || 0x0) && (rw = rR);
    }
  } finally {
    f();
  }
  return X(ri), rn.searches++, rW && (rn.ms += performance.now() - rW), !rw || rw.first < 0x0 ? null : {
    'act': r2[rw.first],
    'index': rw.first,
    'lost': rw.lost,
    'clear': rw.clear,
    'line': rw.line
  };
}
R(rO, 'beamBest');
var rp = class d4 {
  constructor(r) {
    this.opts = r || {}, this.near = this.opts.near || 0x2, this.far = this.opts.far || this.opts.macro || 0x8, this.queue = [], this.lastLost = 0x0, this.searches = 0x0, this.replanAt = this.opts.replan || 0x0;
  }
  ["flatten"](r) {
    let rZ = [];
    for (let rv = 0x0; rv < r.length; rv++) {
      let ru = r2[r[rv]],
        rk = rv === 0x0 ? this.near : this.far;
      for (let rH = 0x0; rH < rk; rH++) {
        let rX = [];
        for (let rW of ru.keys) rW === 'up' && ru.hold !== void 0x0 && rH >= ru.hold || rX.push(rW);
        rZ.push({
          'keys': rX,
          'edge': rH === 0x0 && ru.keys.indexOf('up') >= 0x0,
          'index': r[rv]
        });
      }
    }
    return rZ;
  }
  ["step"]() {
    if (!this.queue.length) {
      let n = rO(this.opts);
      if (this.searches++, !n || !n.line || !n.line.length) return -0x1;
      this.lastLost = n.lost, this.queue = this.flatten(n.line), n.lost > 0x0 ? this.queue = this.queue.slice(0x0, this.near) : this.replanAt > 0x0 && (this.queue = this.queue.slice(0x0, this.replanAt));
    }
    let r = this.queue.shift();
    if (!r) return -0x1;
    for (let rZ of ['left', 'right', 'up', 'down']) c.held[rZ] = false;
    for (let rv of r.keys) c.held[rv] = true;
    return c.pressed.up = r.edge, r.index;
  }
};
R(rp, 'BeamPlan');
var ra = rp,
  rx = class d5 {
    constructor(r) {
      this.opts = r || {}, this.macro = this.opts.near || this.opts.macro || 0x6, this.planAhead = Math.max(0x1, this.opts.planAhead || 0x1), this.queue = [], this.index = -0x1, this.lastLost = 0x0;
    }
    ["flatten"](r) {
      let rZ = [],
        rv = Math.max(0x1, Math.min(this.planAhead, Math.ceil(r.length / 0x2)));
      for (let ru = 0x0; ru < rv; ru++) {
        let rk = r2[r[ru]];
        for (let rH = 0x0; rH < this.macro; rH++) {
          let rX = [];
          for (let rW of rk.keys) rW === 'up' && rk.hold !== void 0x0 && rH >= rk.hold || rX.push(rW);
          rZ.push({
            'keys': rX,
            'edge': rH === 0x0 && rk.keys.indexOf('up') >= 0x0,
            'index': r[ru]
          });
        }
      }
      return rZ;
    }
    ["step"]() {
      if (!this.queue.length) {
        let n = rO(this.opts);
        if (!n || (this.lastLost = n.lost, this.queue = n.line && n.line.length ? this.flatten(n.line) : [], !this.queue.length)) return -0x1;
        n.lost > 0x0 && (this.queue = this.queue.slice(0x0, this.macro));
      }
      let r = this.queue.shift();
      if (!r) return -0x1;
      for (let rZ of ['left', 'right', 'up', 'down']) c.held[rZ] = false;
      for (let rv of r.keys) c.held[rv] = true;
      return c.pressed.up = r.edge, this.index = r.index, r.index;
    }
  };
R(rx, 'BeamDriver');
var rB = rx;
export { e as a, r1 as b, r2 as c, r3 as d, r4 as e, r7 as f, rn as g, rO as h, ra as i, rB as j };