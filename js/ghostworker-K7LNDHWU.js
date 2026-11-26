import "./c-WR4KIKE3.js";
import { a as r, l as n } from "./c-XSSGDLV7.js";
n();
var J = self.onmessage;
var Z = self.postMessage;
var I = r(y => Z.call(self, y), "post");
var z = null;
self.postMessage = y => {
  if (z) {
    z.push(y);
  } else {
    I(y);
  }
};
async function E(y) {
  let X = [];
  z = X;
  try {
    await J.call(self, {
      data: y
    });
  } finally {
    z = null;
  }
  return X;
}
r(E, "forward");
var f = null;
var e = null;
var M = null;
function s() {
  let y = e.World.first("obj_heart") || e.World.first("obj_purpleheart");
  let X = typeof M.hp == "number" ? M.hp : Array.isArray(M.hp) ? (M.hp[1] || 0) + (M.hp[2] || 0) + (M.hp[3] || 0) : 0;
  return (y ? (y.x | 0) + "," + (y.y | 0) : "none") + "|" + X + "|" + e.World.list.length + "|" + (M.mnfight | 0);
}
r(s, "sig");
async function T(X) {
  if (X.cmd === "boot") {
    let Q = X.assets;
    if (!Q) {
      try {
        let w1 = await (await fetch(new URL("../assets/data.json", import.meta.url))).json();
        Q = {
          sprites: w1.sprites,
          fonts: w1.fonts
        };
      } catch (w2) {
        I({
          t: "booterr",
          id: X.id,
          err: "ghost worker: no sprite table (" + (w2 && w2.message || w2) + ")"
        });
        return;
      }
    }
    let w0 = await E({
      cmd: "boot",
      id: X.id,
      assets: Q
    });
    if (w0.some(w3 => w3 && w3.t === "ready")) {
      try {
        f = await B("./oracle-NLJI23NZ.js", import.meta.url);
        e = await B("./gm-PYDVYOKK.js", import.meta.url);
        M = (await B("./globals-MPUN2SAS.js", import.meta.url)).G;
      } catch (w3) {
        I({
          t: "booterr",
          id: X.id,
          err: "ghost worker: " + (w3 && w3.message || w3)
        });
        return;
      }
    }
    for (let w4 of w0) {
      I(w4);
    }
    return;
  }
  if (X.cmd !== "gplan") {
    await J.call(self, {
      data: X
    });
    return;
  }
  let R = performance.now();
  let q = {
    t: "gplan",
    id: X.id,
    epoch: X.epoch,
    rev: X.rev
  };
  if (!f) {
    I(Object.assign(q, {
      err: "not booted"
    }));
    return;
  }
  let G = (await E(Object.assign({}, X, {
    cmd: "advance"
  }))).find(w5 => w5 && (w5.t === "adv" || w5.t === "plan"));
  if (!G || G.need || G.err || G.at === undefined) {
    I(Object.assign(q, {
      need: G && G.need,
      err: G ? G.err : "no answer",
      wireFail: !!G && !!G.wireFail
    }));
    return;
  }
  let V = performance.now();
  let L = G.safe;
  if (X.noPlan) {
    I(Object.assign(q, {
      at: G.at,
      sig: G.sig,
      safe: L,
      ms: V - R
    }));
    return;
  }
  if (X.env) {
    M.godmode = !!X.env.god;
    M.forceAttack = X.env.force;
  }
  let Y = e.World.first("obj_heart");
  let F = s();
  let H = null;
  let S = null;
  try {
    H = f.oraclePlan(X.opts || {});
  } catch (w5) {
    S = String(w5 && w5.message || w5);
  }
  let C = s();
  if (C !== F) {
    I(Object.assign(q, {
      err: "plan changed the world: " + F + " -> " + C,
      need: "full"
    }));
    return;
  }
  I(Object.assign(q, {
    at: G.at,
    sig: G.sig,
    safe: L,
    err: S,
    x0: Y ? Y.x : null,
    y0: Y ? Y.y : null,
    pos: H && H.pos ? H.pos.map(w6 => [w6[0], w6[1], w6[2] | 0]) : null,
    keys: H ? H.keys : null,
    hits: H ? H.hits | 0 : 0,
    horizon: H ? H.horizon | 0 : 0,
    mode: H ? H.mode : null,
    ms: performance.now() - R,
    adv: V - R
  }));
}
r(T, "handle");
var x = Promise.resolve();
self.onmessage = y => {
  let X = y.data;
  x = x.then(() => T(X)).catch(R => I({
    t: "gplan",
    id: X && X.id,
    epoch: X && X.epoch,
    err: String(R && R.message || R)
  }));
};
function B(y, X) {
  var R = new URL(y, X).href;
  var h = globalThis.__drWarm;
  return (h ? h(R) : Promise.resolve()).then(function () {
    return import(R).catch(function (q) {
      try {
        q.reload = true;
        q.what = "the game code";
      } catch (t) {}
      throw q;
    });
  });
}
