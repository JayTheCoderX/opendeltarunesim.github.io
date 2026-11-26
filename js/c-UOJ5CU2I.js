const p = function () {
  const n = {
    EiTIP: function (rH, rX) {
      return rH === rX;
    },
    bnUea: "LSMzr",
    OlugT: "nPYxi",
    KPRVj: function (rH, rX) {
      return rH !== rX;
    },
    Sjgom: "JIzbR"
  };
  const ru = n;
  let rk = true;
  return function (rH, rX) {
    if (ru.KPRVj(ru.Sjgom, ru.Sjgom)) {
      if (!this.queue.length) {
        let ro = m(this.opts);
        this.searches++;
        if (!ro || !ro.line || !ro.line.length) {
          return -1;
        }
        this.lastLost = ro.lost;
        this.queue = this.flatten(ro.line);
        if (ro.lost > 0) {
          this.queue = this.queue.slice(0, this.near);
        } else if (this.replanAt > 0) {
          this.queue = this.queue.slice(0, this.replanAt);
        }
      }
      let rf = this.queue.shift();
      if (!rf) {
        return -1;
      }
      for (let rc of ["left", "right", "up", "down"]) {
        q.held[rc] = false;
      }
      for (let rm of rf.keys) {
        __STRING_ARRAY__.held[rm] = true;
      }
      o.pressed.up = rf.edge;
      return rf.index;
    } else {
      const rF = rk ? function () {
        if (rX) {
          if (ru.EiTIP(ru.bnUea, ru.OlugT)) {
            let rL = C.first("obj_heart") || K.first("obj_purpleheart");
            if (rL) {
              let rz = [];
              try {
                rz = __DECODE_0__(undefined - 740 - -435, undefined);
              } catch {}
              rd = rQ || new rM(rN);
              let rt = rY.line.length ? rO.line[rp.line.length - 1] : ra.prev ?? -1;
              rx(rL, rz, rB(), rZ, rt);
              let nk = rv.guide.forward(ru);
              rk = rH.slice().sort((nH, nX) => nk[nX] - nk[nH]).slice(0, rX.topK);
            }
          } else {
            const nH = rX.apply(rH, arguments);
            rX = null;
            return nH;
          }
        }
      } : function () {};
      rk = false;
      return rF;
    }
  };
}();
const x = p(this, function () {
  const rH = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const rX = rH.console = rH.console || {};
  const rW = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ri = 0; ri < rW.length; ri++) {
    const rh = p.constructor.prototype.bind(p);
    const rf = rW[ri];
    const ro = rX[rf] || rh;
    rh.__proto__ = p.bind(p);
    rh.toString = ro.toString.bind(ro);
    rX[rf] = rh;
  }
});
x();
import { F as Z, x as v, y as u } from "./c-J7PU4477.js";
import { f as k } from "./c-WSZI3RLB.js";
import { a as H, b as X, c as W } from "./c-GI6IDYOV.js";
import { g as i } from "./c-ZQQWH6UG.js";
import { Ga as h, Ha as f, N as o, X as c, ac as m, lc as F, xb as q } from "./c-PBMEVLU6.js";
import { a as R, l as L } from "./c-XSSGDLV7.js";
L();
L();
var l = 9;
var S = 17;
function e() {
  if (i.mnfight === 2 && (i._clkTurn !== i.turn || i._clkFrame === undefined)) {
    i._clkTurn = i.turn;
    i._clkFrame = q.frame;
  }
}
R(e, "clockTick");
const I = {
  name: "stay",
  keys: [],
  hold: undefined
};
const C = {
  name: "up",
  keys: ["up"]
};
const K = {
  name: "down",
  keys: ["down"]
};
var V = 14;
var r0 = (l - 1) / 2;
var r1 = l * l + 4 + 2 + 1 + 4 + 4 + 4 + 2 + 12 + S;
var r2 = [I, {
  name: "left",
  keys: ["left"]
}, {
  name: "right",
  keys: ["right"]
}, C, K, {
  name: "up-left",
  keys: ["up", "left"]
}, {
  name: "up-right",
  keys: ["up", "right"]
}, {
  name: "down-left",
  keys: ["down", "left"]
}, {
  name: "down-right",
  keys: ["down", "right"]
}, {
  name: "hop",
  keys: ["up"],
  hold: 4
}, {
  name: "hop-left",
  keys: ["up", "left"],
  hold: 4
}, {
  name: "hop-right",
  keys: ["up", "right"],
  hold: 4
}];
var r3 = r2.length;
function r4(r) {
  if (!r) {
    return false;
  }
  let rk = String(r.mask_index || r.sprite_index || "");
  return !/heartgreen|heartpurple/i.test(rk);
}
R(r4, "isFreeFlight");
var r5 = 20;
function r6(r) {
  let rk = String(r || "").replace(/^spr_/, "");
  if (/heartblue/.test(rk)) {
    return 1;
  } else if (/heartgreen/.test(rk)) {
    return 2;
  } else if (/heartpurple/.test(rk)) {
    return 3;
  } else {
    return 0;
  }
}
R(r6, "modeIndex");
function r7(r, n, ri, rh, rf) {
  let rF = rh || new Float32Array(r1);
  rF.fill(0);
  if (!r) {
    return rF;
  }
  let rq = o[r.mask_index] || o[r.sprite_index];
  let rw = rq && rq.bb ? (rq.bb[2] - rq.bb[0] + 1) / 2 : 8;
  let rR = rq && rq.bb ? (rq.bb[3] - rq.bb[1] + 1) / 2 : 8;
  let rL = r.x + rw;
  let rz = r.y + rR;
  let rt = n ? n.length : 0;
  for (let nz = 0; nz < l; nz++) {
    for (let ny = 0; ny < l; ny++) {
      {
        let nS = rL + (ny - r0) * V;
        let ne = rz + (nz - r0) * V;
        let nI = r5 + 1;
        for (let nP = 0; nP < rt; nP++) {
          {
            let ng = n[nP];
            for (let nA = 0; nA <= r5; nA += 4) {
              {
                if (ng.t0 !== undefined && nA < ng.t0 || ng.ttl !== undefined && nA > ng.ttl) {
                  continue;
                }
                let nj;
                let nJ;
                if (ng.path) {
                  let nC = ng.path(nA);
                  nj = nC[0];
                  nJ = nC[1];
                } else {
                  nj = ng.x + ng.vx * nA + (ng.ax || 0) * 0.5 * nA * nA;
                  nJ = ng.y + ng.vy * nA + (ng.ay || 0) * 0.5 * nA * nA;
                }
                if (Math.abs(nS - nj) < V / 2 + ng.hw && Math.abs(ne - nJ) < V / 2 + ng.hh) {
                  if (nA < nI) {
                    nI = nA;
                  }
                  break;
                }
              }
            }
          }
        }
        rF[nz * l + ny] = nI > r5 ? 0 : 1 - nI / r5;
      }
    }
  }
  let nH = l * l;
  rF[nH + r6(r.mask_index || r.sprite_index)] = 1;
  nH += 4;
  rF[nH++] = Math.max(-1, Math.min(1, (r.hspeed || 0) / 6));
  rF[nH++] = Math.max(-1, Math.min(1, (r.vspeed || 0) / 8));
  rF[nH++] = r.jumpstage === 1 ? 1 : 0;
  if (ri) {
    rF[nH++] = Math.max(0, Math.min(1, (rL - ri[0]) / 160));
    rF[nH++] = Math.max(0, Math.min(1, (ri[2] - rL) / 160));
    rF[nH++] = Math.max(0, Math.min(1, (rz - ri[1]) / 160));
    rF[nH++] = Math.max(0, Math.min(1, (ri[3] - rz) / 160));
  } else {
    nH += 4;
  }
  let nX = i.idealborder;
  if (ri && nX && nX.length >= 4) {
    rF[nH++] = Math.max(-1, Math.min(1, (nX[0] - ri[0]) / 40));
    rF[nH++] = Math.max(-1, Math.min(1, (nX[1] - ri[2]) / 40));
    rF[nH++] = Math.max(-1, Math.min(1, (nX[2] - ri[1]) / 40));
    rF[nH++] = Math.max(-1, Math.min(1, (nX[3] - ri[3]) / 40));
  } else {
    nH += 4;
  }
  let nc = 1000000000;
  let nm = 0;
  let nF = 0;
  let nq = 0;
  let nw = 0;
  for (let nG = 0; nG < rt; nG++) {
    let nD = n[nG];
    let nE = nD.x - rL;
    let nV = nD.y - rz;
    let d0 = Math.hypot(nE, nV);
    if (d0 < nc) {
      nc = d0;
      nm = nE;
      nF = nV;
      nq = nD.vx;
      nw = nD.vy;
    }
  }
  if (nc < 100000000) {
    rF[nH++] = Math.max(-1, Math.min(1, nm / 120));
    rF[nH++] = Math.max(-1, Math.min(1, nF / 120));
    rF[nH++] = Math.max(-1, Math.min(1, nq / 10));
    rF[nH++] = Math.max(-1, Math.min(1, nw / 10));
  } else {
    nH += 4;
  }
  rF[nH++] = Math.min(1, rt / 40);
  rF[nH++] = 1;
  if (rf != null && rf >= 0 && rf < 12) {
    rF[nH + rf] = 1;
  }
  nH += 12;
  e();
  let nR = Math.max(0, i.turn | 0);
  rF[nH + Math.min(11, nR)] = 1;
  nH += 12;
  rF[nH++] = Math.min(1, nR / 24);
  rF[nH++] = i.turntimer > 0 ? Math.min(1, i.turntimer / 300) : 0;
  rF[nH++] = i._clkFrame !== undefined ? Math.min(1, (q.frame - i._clkFrame) / 400) : 0;
  if (ri) {
    rF[nH++] = Math.max(0, Math.min(1, (rL - ri[0]) / Math.max(1, ri[2] - ri[0])));
    rF[nH++] = Math.max(0, Math.min(1, (rz - ri[1]) / Math.max(1, ri[3] - ri[1])));
  } else {
    nH += 2;
  }
  return rF;
}
R(r7, "encode");
var r8 = null;
var r9 = null;
var rr = R(() => r8 ||= W(F), "getGfx");
var rn = {
  searches: 0,
  frames: 0,
  ms: 0,
  nodes: 0
};
function rd() {
  if (typeof i.hp == "number") {
    return i.hp;
  }
  if (Array.isArray(i.hp)) {
    let r = 0;
    for (let n = 1; n <= 3; n++) {
      r += Number(i.hp[n]) || 0;
    }
    return r;
  }
  return 0;
}
R(rd, "hpTotal");
function rQ() {
  let r = q.first("obj_heart") || q.first("obj_purpleheart");
  if (!r) {
    return 0;
  }
  let n = 1000000000;
  for (let rZ of q.list) {
    if (rZ.destroyed || rZ === r) {
      continue;
    }
    let rv = rZ.constructor.name;
    if (!/bul|bone|spear|blast|arrow|flame|slash|knife|bullet/i.test(rv)) {
      continue;
    }
    let ru = Math.hypot((rZ.x || 0) - r.x, (rZ.y || 0) - r.y);
    if (ru < n) {
      n = ru;
    }
  }
  if (n === 1000000000) {
    return 200;
  } else {
    return Math.min(200, n);
  }
}
R(rQ, "clearance");
function rM(r) {
  let rZ = q.first("obj_heart") || q.first("obj_purpleheart");
  let rv = String(rZ && (rZ.mask_index || rZ.sprite_index) || "");
  let ru = /heartblue/i.test(rv);
  let rk = (r || 0) >= 2;
  let rH = [];
  for (let rX = 0; rX < r2.length; rX++) {
    let rW = r2[rX];
    if ((!rk || !(rW.keys.length > 1) || rW.hold !== undefined) && (!!ru || rW.hold === undefined)) {
      rH.push(rX);
    }
  }
  return rH;
}
R(rM, "actionsFor");
function rN() {
  let r = q.first("obj_heart") || q.first("obj_purpleheart");
  if (r) {
    return (r.x | 0) + "," + (r.y | 0) + "," + Math.round((r.vspeed || 0) * 2) + "," + (r.jumpstage || 0);
  } else {
    return "none";
  }
}
R(rN, "soulKey");
function rY(r, rZ, rv) {
  let ru = 0;
  let rk = false;
  let rH = 0;
  for (let rX = 0; rX < rZ; rX++) {
    for (let ri of ["left", "right", "up", "down"]) {
      c.held[ri] = false;
    }
    for (let rh of r.keys) {
      if (rh !== "up" || r.hold === undefined || !(rX >= r.hold)) {
        c.held[rh] = true;
      }
    }
    c.pressed.up = rX === 0 && r.keys.indexOf("up") >= 0;
    try {
      m(k, rr());
    } catch {
      ru += 99;
      rk = true;
      break;
    }
    rH++;
    rn.frames++;
    let rW = rd();
    if (rW < rv - ru) {
      ru = rv - rW;
    }
    if (rW <= 0 || i.battleover) {
      rk = true;
      break;
    }
  }
  return {
    lost: ru,
    dead: rk,
    ran: rH
  };
}
R(rY, "playMacro");
function rO(rZ) {
  let rv = rZ || {};
  let ru = rv.width || 6;
  let rk = rv.depth || 10;
  let rH = rv.near || 2;
  let rX = rv.far || rv.macro || 6;
  if (!q.list.length || !q.first("obj_heart") && !q.first("obj_purpleheart")) {
    return null;
  }
  let rW = typeof performance !== "undefined" && performance.now ? performance.now() : 0;
  let ri = H();
  let rh = rd();
  h();
  let rf = rv.budgetMs || 0;
  let ro = rf ? (typeof performance !== "undefined" ? performance.now() : Date.now()) + rf : 0;
  let rc = () => ro && (typeof performance !== "undefined" ? performance.now() : Date.now()) > ro;
  let rm = (rR, rL) => {
    let rz = [{
      snap: ri,
      lost: 0,
      clear: rQ(),
      first: -1,
      dead: false,
      line: []
    }];
    for (let rt = 0; rt < rL && (!(rt > 0) || !rc()); rt++) {
      let nk = rt === 0 ? rH : rX;
      let nH = [];
      let nX = new Map();
      for (let nh = 0; nh < rz.length; nh++) {
        let nf = rz[nh];
        if (nf.dead) {
          nH.push({
            keep: nf
          });
          continue;
        }
        X(nf.snap);
        let no = rM(rt);
        if (rt === 0 && rv.rootOnly && rv.rootOnly.length && (no = no.filter(nc => rv.rootOnly.indexOf(nc) >= 0), !no.length)) {
          return null;
        }
        if (rv.guide && rv.topK && no.length > rv.topK) {
          let nc = q.first("obj_heart") || q.first("obj_purpleheart");
          if (nc) {
            let nm = [];
            try {
              nm = u();
            } catch {}
            r9 = r9 || new Float32Array(r1);
            let nF = nf.line.length ? nf.line[nf.line.length - 1] : rv.prev ?? -1;
            r7(nc, nm, v(), r9, nF);
            let nq = rv.guide.forward(r9);
            no = no.slice().sort((nw, nR) => nq[nR] - nq[nw]).slice(0, rv.topK);
          }
        }
        for (let nw of no) {
          X(nf.snap);
          let nR = rY(r2[nw], nk, rh);
          rn.nodes++;
          let nL = {
            parent: nf,
            action: nw,
            frames: nk,
            key: rN(),
            lost: Math.max(nf.lost, nR.lost),
            clear: nR.dead ? 0 : rQ(),
            first: nf.first < 0 ? nw : nf.first,
            dead: nR.dead
          };
          let nz = nX.get(nL.key);
          if (!nz || !!(nL.lost < nz.lost) || nL.lost === nz.lost && !!(nL.clear > nz.clear)) {
            if (nz) {
              let ny = nH.indexOf(nz);
              if (ny >= 0) {
                nH.splice(ny, 1);
              }
            }
            nX.set(nL.key, nL);
            nH.push(nL);
          }
        }
      }
      if (!nH.length) {
        break;
      }
      nH.sort((nl, nS) => {
        let ne = nl.keep ? nl.keep.lost : nl.lost;
        let nI = nS.keep ? nS.keep.lost : nS.lost;
        let nP = (nl.keep ? nl.keep.dead : nl.dead) ? 1 : 0;
        let ng = (nS.keep ? nS.keep.dead : nS.dead) ? 1 : 0;
        let nA = nl.keep ? nl.keep.clear : nl.clear;
        let nj = nS.keep ? nS.keep.clear : nS.clear;
        return ne - nI || nP - ng || nj - nA;
      });
      let nW = nH.slice(0, rR);
      let ni = [];
      for (let nl of nW) {
        if (nl.keep) {
          ni.push(nl.keep);
          continue;
        }
        X(nl.parent.snap);
        rY(r2[nl.action], nl.frames, rh);
        ni.push({
          snap: H(),
          lost: nl.lost,
          clear: nl.clear,
          first: nl.first,
          dead: nl.dead,
          line: nl.parent.line.concat(nl.action)
        });
      }
      rz = ni;
      if (rz.every(nS => nS.lost === 0) && rt >= 2 && rz[0].clear > 90) {
        break;
      }
    }
    return rq(rz)[0];
  };
  let rF = rv.tail === undefined ? 45 : rv.tail;
  let rq = rR => {
    if (!rF) {
      return rR;
    }
    for (let rL of rR) {
      if (rL.dead) {
        rL.tailLost = 99;
        continue;
      }
      X(rL.snap);
      let rz = rd();
      let rt = 0;
      for (let nk = 0; nk < rF; nk++) {
        let nH = q.first("obj_heart") || q.first("obj_purpleheart");
        if (nH) {
          try {
            Z(null, nH);
          } catch {}
        }
        try {
          m(k, rr());
        } catch {
          rt += 99;
          break;
        }
        rn.frames++;
        let nX = rd();
        if (rz - nX > rt) {
          rt = rz - nX;
        }
        if (nX <= 0 || i.battleover) {
          rt += 50;
          break;
        }
      }
      rL.tailLost = rt;
    }
    rR.sort((nW, ni) => nW.lost + (nW.tailLost || 0) - (ni.lost + (ni.tailLost || 0)) || nW.lost - ni.lost || ni.clear - nW.clear);
    return rR;
  };
  let rw;
  try {
    rw = rm(ru, rk);
    if (rw && (rw.lost > 0 || rw.tailLost > 0) && rv.escalate !== false && !rc()) {
      let rR = rm(ru * 2, Math.min(rk + 6, 20));
      if (rR && rR.lost + (rR.tailLost || 0) < rw.lost + (rw.tailLost || 0)) {
        rw = rR;
      }
    }
  } finally {
    f();
  }
  X(ri);
  rn.searches++;
  if (rW) {
    rn.ms += performance.now() - rW;
  }
  if (!rw || rw.first < 0) {
    return null;
  } else {
    return {
      act: r2[rw.first],
      index: rw.first,
      lost: rw.lost,
      clear: rw.clear,
      line: rw.line
    };
  }
}
R(rO, "beamBest");
var rp = class d4 {
  constructor(r) {
    this.opts = r || {};
    this.near = this.opts.near || 2;
    this.far = this.opts.far || this.opts.macro || 8;
    this.queue = [];
    this.lastLost = 0;
    this.searches = 0;
    this.replanAt = this.opts.replan || 0;
  }
  flatten(r) {
    let rZ = [];
    for (let rv = 0; rv < r.length; rv++) {
      let ru = r2[r[rv]];
      let rk = rv === 0 ? this.near : this.far;
      for (let rH = 0; rH < rk; rH++) {
        let rX = [];
        for (let rW of ru.keys) {
          if (rW !== "up" || ru.hold === undefined || !(rH >= ru.hold)) {
            rX.push(rW);
          }
        }
        rZ.push({
          keys: rX,
          edge: rH === 0 && ru.keys.indexOf("up") >= 0,
          index: r[rv]
        });
      }
    }
    return rZ;
  }
  step() {
    if (!this.queue.length) {
      let n = rO(this.opts);
      this.searches++;
      if (!n || !n.line || !n.line.length) {
        return -1;
      }
      this.lastLost = n.lost;
      this.queue = this.flatten(n.line);
      if (n.lost > 0) {
        this.queue = this.queue.slice(0, this.near);
      } else if (this.replanAt > 0) {
        this.queue = this.queue.slice(0, this.replanAt);
      }
    }
    let r = this.queue.shift();
    if (!r) {
      return -1;
    }
    for (let rZ of ["left", "right", "up", "down"]) {
      c.held[rZ] = false;
    }
    for (let rv of r.keys) {
      c.held[rv] = true;
    }
    c.pressed.up = r.edge;
    return r.index;
  }
};
R(rp, "BeamPlan");
var ra = rp;
var rx = class d5 {
  constructor(r) {
    this.opts = r || {};
    this.macro = this.opts.near || this.opts.macro || 6;
    this.planAhead = Math.max(1, this.opts.planAhead || 1);
    this.queue = [];
    this.index = -1;
    this.lastLost = 0;
  }
  flatten(r) {
    let rZ = [];
    let rv = Math.max(1, Math.min(this.planAhead, Math.ceil(r.length / 2)));
    for (let ru = 0; ru < rv; ru++) {
      let rk = r2[r[ru]];
      for (let rH = 0; rH < this.macro; rH++) {
        let rX = [];
        for (let rW of rk.keys) {
          if (rW !== "up" || rk.hold === undefined || !(rH >= rk.hold)) {
            rX.push(rW);
          }
        }
        rZ.push({
          keys: rX,
          edge: rH === 0 && rk.keys.indexOf("up") >= 0,
          index: r[ru]
        });
      }
    }
    return rZ;
  }
  step() {
    if (!this.queue.length) {
      let n = rO(this.opts);
      if (!n || (this.lastLost = n.lost, this.queue = n.line && n.line.length ? this.flatten(n.line) : [], !this.queue.length)) {
        return -1;
      }
      if (n.lost > 0) {
        this.queue = this.queue.slice(0, this.macro);
      }
    }
    let r = this.queue.shift();
    if (!r) {
      return -1;
    }
    for (let rZ of ["left", "right", "up", "down"]) {
      c.held[rZ] = false;
    }
    for (let rv of r.keys) {
      c.held[rv] = true;
    }
    c.pressed.up = r.edge;
    this.index = r.index;
    return r.index;
  }
};
R(rx, "BeamDriver");
var rB = rx;
export { e as a, r1 as b, r2 as c, r3 as d, r4 as e, r7 as f, rn as g, rO as h, ra as i, rB as j };
