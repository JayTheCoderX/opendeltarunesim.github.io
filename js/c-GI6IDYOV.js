import { Nd as i, Qd as r } from "./c-E7FVSW52.js";
import { g as Q } from "./c-ZQQWH6UG.js";
import { X as G, n as F, qd as X, rd as C, xb as R } from "./c-PBMEVLU6.js";
import { a as o, l as Y } from "./c-XSSGDLV7.js";
Y();
function W(L) {
  return L && typeof L == "object" && Array.isArray(L.points) && typeof L.poly == "function";
}
o(W, "isPath");
function U(L, E, z = 0) {
  if (L === null || typeof L != "object") {
    return L;
  }
  if (Array.isArray(L)) {
    let O = new Array(L.length);
    for (let Z = 0; Z < L.length; Z++) {
      let N = L[Z];
      O[Z] = z > 6 || N === null || typeof N != "object" ? N : U(N, E, z + 1);
    }
    return O;
  }
  if (L instanceof Map) {
    let K = new Map();
    for (let [V, m0] of L) {
      K.set(V, U(m0, E, z + 1));
    }
    return K;
  }
  if (L instanceof Set) {
    return new Set(L);
  }
  if (W(L)) {
    if (E && !E.has(L)) {
      E.set(L, {
        points: L.points.map(m1 => ({
          ...m1
        })),
        kind: L.kind,
        closed: L.closed,
        precision: L.precision
      });
    }
    return L;
  }
  let v = Object.getPrototypeOf(L);
  if (v !== Object.prototype && v !== null || z > 6) {
    return L;
  }
  let P = {};
  for (let m1 of Object.keys(L)) {
    let m2 = L[m1];
    P[m1] = m2 === null || typeof m2 != "object" ? m2 : U(m2, E, z + 1);
  }
  return P;
}
o(U, "deep");
var c = null;
function H(L) {
  let E = {};
  for (let z of Object.keys(L)) {
    let v = L[z];
    if (typeof v == "function") {
      E[z] = v;
      continue;
    }
    E[z] = U(v, c);
  }
  return E;
}
o(H, "snapInst");
function B() {
  let L = {};
  for (let E of Object.keys(Q)) {
    let z = Q[E];
    if (typeof z == "function") {
      L[E] = z;
      continue;
    }
    L[E] = U(z, c);
  }
  return L;
}
o(B, "snapGlobals");
function I() {
  let L = R.list.slice();
  c = new Map();
  let E = L.map(H);
  let z = B();
  let v = c;
  c = null;
  return {
    counters: X(),
    paths: v,
    list: L,
    insts: E,
    pending: R.pending.slice(),
    frame: R.frame,
    spawns: R.spawns,
    view: {
      x: R.view.x,
      y: R.view.y,
      live: R.view.live
    },
    self: R.self,
    g: z,
    rng: {
      seed: F.seed,
      state: F.state,
      calls: F.calls
    },
    held: {
      ...G.held
    },
    pressed: {
      ...G.pressed
    },
    ut: i()
  };
}
o(I, "snapshot");
function t(L) {
  R.list.length = 0;
  for (let E = 0; E < L.list.length; E++) {
    let z = L.list[E];
    let v = L.insts[E];
    for (let P of Object.keys(z)) {
      if (!(P in v)) {
        delete z[P];
      }
    }
    for (let O of Object.keys(v)) {
      let Z = v[O];
      z[O] = U(Z, null);
    }
    R.list.push(z);
  }
  R.reindex();
  R.pending.length = 0;
  for (let N of L.pending) {
    R.pending.push(N);
  }
  R.frame = L.frame;
  R.spawns = L.spawns;
  if (L.view) {
    R.view.x = L.view.x;
    R.view.y = L.view.y;
    R.view.live = L.view.live;
  }
  R.self = L.self;
  for (let K of Object.keys(Q)) {
    if (!(K in L.g)) {
      delete Q[K];
    }
  }
  for (let V of Object.keys(L.g)) {
    let m0 = L.g[V];
    let m1 = Q[V];
    if (Array.isArray(m0) && m1 && m1.__raw && Array.isArray(m1.__raw)) {
      let m2 = m1.__raw;
      m2.length = 0;
      for (let m3 = 0; m3 < m0.length; m3++) {
        m2[m3] = m0[m3];
      }
      continue;
    }
    Q[V] = U(m0, null);
  }
  if (L.counters) {
    C(L.counters);
  }
  if (L.paths) {
    for (let [m4, m5] of L.paths) {
      m4.points = m5.points.map(m6 => ({
        ...m6
      }));
      m4.kind = m5.kind;
      m4.closed = m5.closed;
      m4.precision = m5.precision;
      m4._poly = null;
    }
  }
  F.seed = L.rng.seed;
  F.state = L.rng.state;
  F.calls = L.rng.calls;
  for (let m6 of Object.keys(G.held)) {
    delete G.held[m6];
  }
  Object.assign(G.held, L.held);
  for (let m7 of Object.keys(G.pressed)) {
    delete G.pressed[m7];
  }
  Object.assign(G.pressed, L.pressed);
  r(L.ut);
}
o(t, "restore");
function l(L) {
  let E = () => {};
  let z = new Proxy({}, {
    get(O, Z) {
      if (Z === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (Z === "measureText") {
        return () => ({
          width: 0
        });
      } else if (Z === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (Z === "createPattern" || Z === "createLinearGradient") {
        return () => null;
      } else {
        return E;
      }
    },
    set() {
      return true;
    }
  });
  let v = new L(z);
  let P = {
    width: 1,
    height: 1,
    getContext: () => z
  };
  v.headless = true;
  v.tinted = () => P;
  v.fontTinted = () => P;
  v.draw_char = function (O, Z) {
    if (!this.fonts[O]) {
      return 0;
    }
    let N = this.glyph(O, Z);
    if (N) {
      return N[4];
    } else {
      return 0;
    }
  };
  return v;
}
o(l, "nullGfx");
export { I as a, t as b, l as c };
