import { f, j as p } from "./c-IZXKHYOP.js";
import { l as Z } from "./c-RNLQZIER.js";
import { n as z } from "./c-VB7PBWB7.js";
import { e as H, f as o, g as V } from "./c-3KRFGFG4.js";
import { d as B } from "./c-PGO4VU5H.js";
import { n as r } from "./c-KLECZKO5.js";
import { f as e } from "./c-WSZI3RLB.js";
import { c as Q } from "./c-GI6IDYOV.js";
import { g as X } from "./c-ZQQWH6UG.js";
import { Ca as L, Tb as P, Ub as J, X as a, ac as Y, lc as d, mc as k0, xb as k1 } from "./c-PBMEVLU6.js";
import { a as k2, l as k3 } from "./c-XSSGDLV7.js";
k3();
var k4 = 30;
var k5 = ["b1", "b2", "b3", "left", "right", "up", "down"];
var k6 = k2(q => {
  if (!q) {
    return {};
  }
  let K = q.partystats !== undefined ? q : {
    partystats: "CUSTOM",
    ...q
  };
  return {
    utItems: [],
    utParty: null,
    utName: "",
    ...(K.startitems !== undefined ? K : {
      ...K,
      startitems: "OFF"
    })
  };
}, "setupOf");
var k7 = ["font", "color", "alpha", "halign", "valign", "fog"];
function k8() {
  let q = k1.first("obj_heart") || k1.first("obj_purpleheart");
  let K = typeof X.hp == "number" ? X.hp : Array.isArray(X.hp) ? (X.hp[1] || 0) + (X.hp[2] || 0) + (X.hp[3] || 0) : 0;
  return (q ? (q.x | 0) + "," + (q.y | 0) : "none") + "|" + K + "|" + k1.list.length + "|" + (X.mnfight | 0);
}
k2(k8, "sigString");
function k9(kf) {
  let kZ = 2166136261;
  for (let kz = 0; kz < kf.length; kz++) {
    kZ ^= kf.charCodeAt(kz);
    kZ = Math.imul(kZ, 16777619) >>> 0;
  }
  return kZ >>> 0;
}
k2(k9, "fnv");
var kk = k2(() => k9(k8()) || 1, "sigNow");
function kq() {
  let q = Q(d);
  let K = q.ctx;
  try {
    Object.defineProperty(q, "ctx", {
      get: () => K,
      set: () => {},
      configurable: true
    });
  } catch {}
  return q;
}
k2(kq, "makeNullG");
function kK(q) {
  for (let K = 0; K < k5.length; K++) {
    let kf = k5[K];
    a.held[kf] = !!(q & 1 << K);
    a.pressed[kf] = !!(q & 1 << K + 8);
    a.released[kf] = !!(q & 1 << K + 16);
  }
}
k2(kK, "writeBits");
function kb(q) {
  if (q.k === "godmode") {
    X.godmode = !!q.v;
  } else if (q.k === "forceAttack") {
    X.forceAttack = q.v;
  } else if (q.k === "kill") {
    if (typeof X.hp == "number") {
      X.hp = 0;
    } else if (Array.isArray(X.char)) {
      for (let K = 0; K < X.char.length; K++) {
        let kf = X.char[K];
        if (kf) {
          X.hp[kf] = 0;
        }
      }
    }
  }
}
k2(kb, "applyNote");
function ki(q, K) {
  let kf = new Map();
  for (let kZ of Array.isArray(q.notes) ? q.notes : []) {
    if (!!kZ && !!Number.isInteger(kZ.f)) {
      if (!kf.has(kZ.f)) {
        kf.set(kZ.f, []);
      }
      kf.get(kZ.f).push(kZ);
    }
  }
  let kw = new Map();
  for (let kz of Array.isArray(q.checks) ? q.checks : []) {
    if (Array.isArray(kz) && Number.isInteger(kz[0]) && typeof kz[1] == "string") {
      kw.set(kz[0], parseInt(kz[1], 16) >>> 0 || 1);
    }
  }
  let kp = K ? Object.assign(Object.create(Object.getPrototypeOf(K)), K) : null;
  if (kp) {
    delete kp._guestsIn;
    delete kp._guestWait;
    delete kp._guestCount;
  }
  return {
    notes: kf,
    checks: kw,
    fx: kp
  };
}
k2(ki, "prepare");
function kv(q, K, kf) {
  let kw = kq();
  J(kw);
  o(q, {
    seed: K.seed | 0,
    cfg: kf
  });
  if (H(q)) {
    r(q);
  } else {
    Z(q);
    V(q, kf);
  }
  X.autoplay = false;
  X.godmode = !!K.godmode0;
  a.synthetic = null;
  return kw;
}
k2(kv, "stage");
function kT(q, K, kf, kw) {
  let kp = q.notes.get(kf - 1);
  if (kp) {
    for (let ko of kp) {
      kb(ko);
    }
  }
  let kZ = K[kf - 1] >>> 0;
  a.synthetic = () => kK(kZ);
  if (L.freetp) {
    X.tension = X.maxtension;
  }
  X.autoplay = false;
  B();
  if (X.godmode) {
    if (typeof X.hp == "number") {
      X.hp = X.maxhp || 20;
    } else if (X.maxhp) {
      for (let kV = 1; kV <= 3; kV++) {
        if (X.maxhp[kV]) {
          X.hp[kV] = X.maxhp[kV];
        }
      }
    }
    X.karma = 0;
    if (X.fightRoom === "room_floweyx" && X.my_inv >= 19 && X.my_hp > 1 && X.my_hp < 50) {
      X.my_hp = 50;
    }
  }
  X.pressedDebugKeys = null;
  z();
  Y(e, kw);
  let kz = q.fx;
  if (kz.customEncounter && !kz._guestsIn) {
    kz._guestWait = (kz._guestWait || 0) + 1;
    if (kz._guestWait >= 3) {
      kz._guestsIn = true;
      kz._guestCount = p(kz);
    }
  }
  if (kz.customEncounter) {
    f(kz);
  }
  let kH = q.checks.get(kf);
  if (kH) {
    if (kk() === kH) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
k2(kT, "stepFrame");
function ks(q) {
  let K = new d(q);
  for (let kf of k7) {
    if (P && kf in P) {
      K[kf] = P[kf];
    }
  }
  J(K);
  return K;
}
k2(ks, "takeOver");
function kt(q) {
  if (!X.inGameOver && X.battleover) {
    q.fade = Math.min(1, (q.fade || 0) + 0.04);
  }
}
k2(kt, "fadeStep");
function kA(q, K, kf, kw) {
  q.setTransform(kf, 0, 0, kf, 0, 0);
  q.globalAlpha = 1;
  q.globalCompositeOperation = "source-over";
  q.imageSmoothingEnabled = false;
  q.fillStyle = "#000";
  q.fillRect(0, 0, 640, 480);
  q.save();
  if (X.roomScale === 2) {
    q.scale(2, 2);
  }
  q.translate(Math.round((X.shakex || 0) * (L.shake ?? 1)), Math.round((X.shakey || 0) * (L.shake ?? 1)));
  try {
    k0(K, 1);
  } catch {}
  q.restore();
  if (!X.inGameOver && X.battleover) {
    kt(kw);
    q.fillStyle = "rgba(0,0,0," + kw.fade + ")";
    q.fillRect(0, 0, 640, 480);
  }
}
k2(kA, "present");
export { k4 as a, k5 as b, k6 as c, k8 as d, kk as e, kq as f, kK as g, kb as h, ki as i, kv as j, kT as k, ks as l, kt as m, kA as n };
