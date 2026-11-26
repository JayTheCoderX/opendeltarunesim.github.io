const T = function () {
  let WR = true;
  return function (WE, WO) {
    {
      const K1 = WR ? function () {
        if (WO) {
          const K3 = WO.apply(WE, arguments);
          WO = null;
          return K3;
        }
      } : function () {};
      WR = false;
      return K1;
    }
  };
}();
const Q = T(this, function () {
  const K = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const WR = new RegExp("[kzJfYJxBzzCzTqGHBQUSMTOqAxDyzWSBDKBVRLXkKZVZEjGKFzYITjPSqCqbEWRFKXINWRLjEqJjLfAYzQFPxAjkNFTXCbJfDORyDFVIKVCPBjGGGOjWWPBSqZVIbNJWLIBTfRVKOCFISCCqZObMYWBEybQjSSOPRjWzxEyZCOXWkyLKyETWVTYzfjPNqHLWxMzES]", "g");
  const WE = "lokczJfalhosYtJx;BzzC1z27T.q0.0.G1;HdeBlQtUSMaTOrunesqimA.xDyzWSBDKcBVomRL;wXkKwwZ.VZEjdeltGKFarunzesYiImTj.cPoSmq;dCqrbsiEWmR.FlKoXcalINWRLjhostE;q.JjdelLfAtaYruzQnFPexAjsim.pakgeNsF.TdXCbevJfDORyDFVIKVCPBjGGGOjWWPBSqZVIbNJWLIBTfRVKOCFISCCqZObMYWBEybQjSSOPRjWzxEyZCOXWkyLKyETWVTYzfjPNqHLWxMzES".replace(WR, "").split(";");
  let WO;
  let Wl;
  let Wm;
  let Wy;
  const K0 = function (KK, Ks, KT) {
    if (KK.length != Ks) {
      return false;
    }
    for (let Kf = 0; Kf < Ks; Kf++) {
      for (let KJ = 0; KJ < KT.length; KJ += 2) {
        {
          if (Kf == KT[KJ] && KK.charCodeAt(Kf) != KT[KJ + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const K1 = function (KK, Ks, KT) {
    return K0(Ks, KT, KK);
  };
  const K2 = function (KK, Ks, KT) {
    return K1(Ks, KK, KT);
  };
  const K3 = function (KK, Ks, KT) {
    return K2(Ks, KT, KK);
  };
  for (let KK in K) {
    {
      if (K0(KK, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        WO = KK;
        break;
      }
    }
  }
  for (let KT in K[WO]) {
    {
      if (K3(6, KT, [5, 110, 0, 100])) {
        Wl = KT;
        break;
      }
    }
  }
  for (let Kf in K[WO]) {
    {
      if (K2(Kf, [7, 110, 0, 108], 8)) {
        {
          Wm = Kf;
          break;
        }
      }
    }
  }
  if (!(Wl < "~")) {
    for (let Kp in K[WO][Wm]) {
      {
        if (K1([7, 101, 0, 104], Kp, 8)) {
          Wy = Kp;
          break;
        }
      }
    }
  }
  if (!WO || !K[WO]) {
    return;
  }
  const K5 = K[WO][Wl];
  const K6 = !!K[WO][Wm] && K[WO][Wm][Wy];
  const K7 = K5 || K6;
  if (!K7) {
    return;
  }
  let K8 = false;
  for (let Kv = 0; Kv < WE.length; Kv++) {
    {
      const Kg = WE[Kv];
      const KP = Kg[0] === String.fromCharCode(46) ? Kg.slice(1) : Kg;
      const KM = K7.length - KP.length;
      const KS = K7.indexOf(KP, KM);
      const Ka = KS !== -1 && KS === KM;
      if (Ka) {
        if (K7.length == Kg.length || Kg.indexOf(".") === 0) {
          K8 = true;
        }
      }
    }
  }
  if (!K8) {}
});
Q();
const j = function () {
  let WO = true;
  return function (Wl, Wm) {
    const K1 = WO ? function () {
      {
        if (Wm) {
          {
            const K8 = Wm.apply(Wl, arguments);
            Wm = null;
            return K8;
          }
        }
      }
    } : function () {};
    WO = false;
    return K1;
  };
}();
const n = j(this, function () {
  const WO = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Wl = WO.console = WO.console || {};
  const Wm = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let K0 = 0; K0 < Wm.length; K0++) {
    const K1 = j.constructor.prototype.bind(j);
    const K2 = Wm[K0];
    const K3 = Wl[K2] || K1;
    K1.__proto__ = j.bind(j);
    K1.toString = K3.toString.bind(K3);
    Wl[K2] = K1;
  }
});
n();
import { j as f } from "./c-VG5U7RS4.js";
import { a as J } from "./c-YJAH7XEB.js";
import { a as p } from "./c-PGO4VU5H.js";
import { C as d, R as g, u as P } from "./c-QFDZPUX2.js";
import { ie as M } from "./c-PWNRTD7X.js";
import { a, b as I, c as A, w as V } from "./c-HUDNK55W.js";
import { e as N, i as o, j as X, q as F } from "./c-IKEEXWRQ.js";
import { C, F as G, g as q, h as D, i as z, k as t, p as k } from "./c-ZQQWH6UG.js";
import { Ca as i, Ib as c, Lb as h, N as Y, Ob as Z, Ra as U, Wb as b, X as r, Yb as H, ia as B, n as L, xb as R } from "./c-PBMEVLU6.js";
import { a as E, l as O } from "./c-XSSGDLV7.js";
O();
O();
var l = "https://deltarunesim.com/";
var m = new Set(["deltarunesim.com", "www.deltarunesim.com", "drsim.localhost", "localhost", "127.0.0.1"]);
function y(W) {
  if (W) {
    return !!W.endsWith(".local") || W === "deltarunesim.pages.dev" || !!W.endsWith(".deltarunesim.pages.dev") || !!/^127\./.test(W) || W === "::1" || W === "[::1]" || !!/^192\.168\./.test(W) || !!/^10\./.test(W) || !!/^172\.(1[6-9]|2\d|3[01])\./.test(W);
  } else {
    return false;
  }
}
E(y, "shapeAllowed");
function W0() {
  let WE = "";
  try {
    WE = String(location.hostname || "").toLowerCase();
  } catch {
    return false;
  }
  if (WE) {
    return m.has(WE) || y(WE);
  } else {
    return false;
  }
}
E(W0, "hostIsOurs");
function W1() {
  try {
    let WO = JSON.stringify({
      host: location.hostname || "",
      href: String(location.href || "").slice(0, 300),
      ref: String(document.referrer || "").slice(0, 300),
      build: "c40ef46d",
      t: Date.now()
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(l + "api/clone", WO);
    } else {
      fetch(l + "api/clone", {
        method: "POST",
        body: WO,
        keepalive: true,
        mode: "no-cors"
      }).catch(() => {});
    }
  } catch {}
}
E(W1, "beacon");
var W2 = true;
function W3() {
  if (W2 || W0()) {
    return;
  }
  W2 = true;
  W1();
  let WR = "";
  try {
    WR = String(location.hostname || "").toLowerCase();
  } catch {}
  try {
    location.replace(l + "api/clone?h=" + encodeURIComponent(WR));
  } catch {}
  try {
    setTimeout(() => {
      try {
        document.documentElement.innerHTML = "";
      } catch {}
    }, 50);
  } catch {}
}
E(W3, "enforce");
function W4() {
  return W3();
}
E(W4, "assertOrigin");
function W5() {
  return W3();
}
E(W5, "checkHost");
try {
  (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(() => {
    try {
      W3();
    } catch {}
  });
} catch {}
O();
var W6 = [{
  key: "cirno",
  name: "Cirno",
  file: "cirno.png",
  sw: 315,
  sh: 495,
  color: "aqua",
  from: "kris"
}, {
  key: "reimu",
  name: "Reimu",
  file: "reimu.png",
  sw: 266,
  sh: 495,
  color: "fuchsia",
  from: "susie"
}, {
  key: "flandre",
  name: "Flandre",
  file: "flandre.png",
  sw: 495,
  sh: 495,
  color: "lime",
  from: "ralsei"
}];
var W7 = 46;
var W8 = 6;
var W9 = false;
function WW() {
  if (W9) {
    return true;
  }
  if (typeof document === "undefined" || typeof Image === "undefined") {
    return false;
  }
  for (let W of W6) {
    let K = W7;
    let WR = Math.max(1, Math.round(W.sw / W.sh * K));
    let WE = document.createElement("canvas");
    WE.width = WR * W8;
    WE.height = K * W8;
    let WO = new Image();
    WO.onload = () => {
      try {
        let K0 = WE.getContext("2d");
        K0.clearRect(0, 0, WR * W8, K * W8);
        K0.imageSmoothingEnabled = true;
        K0.imageSmoothingQuality = "high";
        K0.drawImage(WO, 0, 0, WR * W8, K * W8);
      } catch {}
    };
    WO.src = "assets/" + W.file;
    let Wl = "spr_" + W.key + "_b";
    Y[Wl] = {
      name: Wl,
      w: WR,
      h: K,
      ox: Math.round(WR / 2) - 15,
      oy: 0,
      frames: 1,
      bb: [0, 0, WR - 1, K - 1],
      precise: false,
      hd: W8,
      img: [WE]
    };
    let Wm = a[W.from];
    let Wy = {};
    for (let K0 of Object.keys(Wm.sprites)) {
      Wy[K0] = Wl;
    }
    a[W.key] = {
      id: W.key,
      name: W.name,
      color: W.color,
      head: null,
      namesprite: null,
      menuicon: Wm.menuicon,
      stats: {
        ...Wm.stats
      },
      spells: [...Wm.spells],
      weapons: Wm.weapons,
      sprites: Wy,
      frames: {
        ...Wm.frames,
        actframes: 1,
        actreturnframes: 1,
        attackframes: 1,
        itemframes: 1,
        defendframes: 1,
        spellframes: 1,
        victoryframes: 1
      },
      size: {
        mywidth: WR * 2,
        myheight: K * 2
      }
    };
  }
  W9 = true;
  return true;
}
E(WW, "registerTouhouParty");
O();
var WK = ["CHAOS", "GRAVITY", "SLIPPERY", "TINYBOX", "CLOSING", "GLASS", "LOWHP", "NOITEMS", "NOTP", "GRAZETAX", "BURN", "PACIFIST", "NOMERCY"];
var Ws = ["SPEED", "DARK", "VANISH", "INVISIBLE", "TINYBOX", "CLOSING", "SLIPPERY", "GRAVITY", "GRAZETAX"];
var WT = ["SPEED", "DARK", "VANISH", "INVISIBLE"];
var WQ = ["SPEED", "DARK", "VANISH", "INVISIBLE"];
function Wj(W, K) {
  delete q.rmx;
  b.around = null;
  let WO = W && typeof W == "object" ? W.rmods : null;
  if (!WO || typeof WO != "object") {
    return;
  }
  let Wl = {};
  for (let K4 of WK) {
    if (WO[K4]) {
      Wl[K4] = 1;
    }
  }
  if (!Object.keys(Wl).length) {
    return;
  }
  let Wm = {};
  for (let K5 of WQ) {
    if (WO[K5]) {
      Wm[K5] = 1;
    }
  }
  let Wy = (K ? WT : Ws).filter(K6 => !Wm[K6] && !Wl[K6] && (K6 !== "SLIPPERY" || !Wl.GRAVITY) && (K6 !== "GRAVITY" || !Wl.SLIPPERY));
  const K0 = {
    on: Wl,
    pool: Wy,
    ut: K ? 1 : 0,
    init: 0,
    prevMn: 0,
    turns: 0,
    pick: null,
    pickT: 0,
    fr: 0,
    tp: null,
    hp: null,
    refused: -1
  };
  q.rmx = K0;
  if (Wl.GRAVITY || Wl.SLIPPERY || Wl.TINYBOX || Wl.CLOSING || Wl.CHAOS) {
    b.around = Wd;
  }
}
E(Wj, "setSimMods");
var Wu = E(W => {
  let Wm = q.rmx;
  return !!Wm && (Wm.on[W] === 1 || Wm.pick === W);
}, "live");
var Wf = E(() => q.rmx ? q.rmx.pick : null, "pickNow");
var WJ = E(() => {
  let Wl = q.hp;
  if (typeof Wl == "number") {
    return [Wl];
  } else if (Array.isArray(Wl)) {
    return Wl.slice();
  } else {
    return [];
  }
}, "partyHp");
function Wp() {
  let K = q.rmx;
  if (!K) {
    return;
  }
  let WE = q.mnfight | 0;
  let WO = K.ut === 1;
  if (!K.init) {
    K.init = 1;
    if (K.on.GLASS || K.on.LOWHP) {
      {
        if (typeof q.hp == "number") {
          {
            let K2 = Number(q.maxhp) > 0 ? Number(q.maxhp) : q.hp;
            if (q.hp > 1) {
              q.hp = K.on.GLASS ? 1 : Math.max(1, Math.min(q.hp, Math.ceil(K2 / 3)));
            }
          }
        } else if (Array.isArray(q.hp)) {
          for (let K3 = 0; K3 < q.hp.length; K3++) {
            let K4 = q.hp[K3];
            let K5 = q.maxhp && q.maxhp[K3];
            if (typeof K4 == "number" && !(K4 <= 1)) {
              if (K.on.GLASS) {
                q.hp[K3] = 1;
              } else if (typeof K5 == "number" && K5 > 0) {
                q.hp[K3] = Math.max(1, Math.min(K4, Math.ceil(K5 / 3)));
              }
            }
          }
        }
      }
    }
    K.prevMn = WE;
    K.tp = typeof q.tension == "number" ? q.tension : null;
    K.hp = WJ();
  }
  K.fr++;
  if (WE === 2 && K.prevMn !== 2) {
    K.turns++;
    if (K.on.CHAOS && K.pool.length) {
      K.pick = K.pool[Math.floor(L.next() * K.pool.length)];
      K.pickT = 0;
    }
  } else if (K.prevMn === 2 && WE !== 2) {
    {
      K.pick = null;
      for (let K7 of R.all("obj_heart")) {
        K7._rmvx = 0;
        K7._rmvy = 0;
        K7._rmrx = 0;
        K7._rmry = 0;
      }
    }
  }
  if (K.pick) {
    K.pickT++;
  }
  K.prevMn = WE;
  if (!WO && typeof q.tension == "number") {
    if (K.on.NOTP) {
      q.tension = 0;
    } else {
      {
        let K8 = q.tension;
        if (Wu("GRAZETAX") && WE === 2 && K.tp != null && K8 > K.tp) {
          K8 = Math.max(0, K.tp - (K8 - K.tp));
        }
        if (K.on.BURN && K.fr % 30 === 0 && q.maxtension > 0) {
          K8 = Math.max(0, K8 - q.maxtension / 100);
        }
        q.tension = K8;
      }
    }
    K.tp = q.tension;
  }
  if (K.on.NOITEMS) {
    if (typeof q.hp == "number") {
      {
        let Ku = K.hp && K.hp[0];
        if (typeof Ku == "number" && Ku > 0 && q.hp > Ku) {
          q.hp = Ku;
        }
      }
    } else if (Array.isArray(q.hp) && K.hp) {
      for (let Kf = 0; Kf < q.hp.length; Kf++) {
        {
          let KJ = q.hp[Kf];
          let Kp = K.hp[Kf];
          if (typeof KJ == "number" && typeof Kp == "number" && Kp > 0 && KJ > Kp) {
            q.hp[Kf] = Kp;
          }
        }
      }
    }
    K.hp = WJ();
  }
  if ((K.on.PACIFIST || K.on.NOMERCY || K.on.NOITEMS) && (r.pressed.b1 || r.held.b1) && Wv(K) && (r.pressed.b1 = false, r.held.b1 = false, K.refused !== R.frame)) {
    {
      K.refused = R.frame;
      try {
        U("snd_error");
      } catch {}
    }
  }
}
E(Wp, "simFrame");
function Wv(W) {
  if ((q.bmenuno | 0) !== 0 || (q.myfight | 0) !== 0 || (q.mnfight | 0) !== 0) {
    return false;
  }
  let Wl = q.bmenucoord && q.bmenucoord[0];
  let Wm = Array.isArray(Wl) ? Wl[q.charturn | 0] : Wl;
  if (Wm === 0) {
    return W.on.PACIFIST === 1;
  } else if (Wm === 1 || Wm === 3) {
    return W.on.NOMERCY === 1;
  } else if (Wm === 2) {
    return W.on.NOITEMS === 1;
  } else {
    return false;
  }
}
E(Wv, "refused");
function Wd(W, K) {
  if (!q.rmx) {
    return null;
  }
  if (K === "endStep") {
    if (W.is("obj_growtangle") && (Wu("TINYBOX") || Wu("CLOSING") || W._rmb)) {
      WG(W);
    }
    return null;
  }
  if (!Wu("GRAVITY") && !Wu("SLIPPERY") || !W.is("obj_heart")) {
    return null;
  }
  if (Wu("GRAVITY")) {
    {
      let K0 = r.held;
      let K1 = K0.up;
      let K2 = K0.down;
      K0.up = false;
      K0.down = false;
      return () => {
        K0.up = K1;
        K0.down = K2;
        WA(W, !!K1);
        q.heartx = W.x + 2;
        q.hearty = W.y + 2;
      };
    }
  }
  let Wm = W.x;
  let Wy = W.y;
  return () => {
    Wx(W, Wm, Wy);
    q.heartx = W.x + 2;
    q.hearty = W.y + 2;
  };
}
E(Wd, "around");
var Wg = E((W, K, WR) => !!Z(W, K, WR, "obj_battlesolid"), "solid");
function WP(W, K, WR) {
  let WO = K === "x" ? "_rmrx" : "_rmry";
  let Wl = WR + (W[WO] || 0);
  let Wm = Math.trunc(Wl);
  W[WO] = Wl - Wm;
  if (Wm === 0) {
    return false;
  }
  let Wy = Wm > 0 ? 1 : -1;
  for (let K3 = 0; K3 < Math.abs(Wm); K3++) {
    {
      let K4 = K === "x" ? W.x + Wy : W.x;
      let K5 = K === "y" ? W.y + Wy : W.y;
      if (K4 < 0 || K5 < 0 || K4 > 640 - W.sprite_width || K5 > 320 - W.sprite_height || Wg(W, K4, K5)) {
        W[WO] = 0;
        return true;
      }
      W.x = K4;
      W.y = K5;
    }
  }
  return false;
}
E(WP, "slide");
var WM = 6.5;
var WS = 0.25;
var Wa = 0.6;
var WI = 7;
function WA(W, K) {
  let Wm = W._rmvy || 0;
  let Wy = Wg(W, W.x, W.y + 1) || W.y + 1 > 320 - W.sprite_height;
  if (Wy && Wm >= 0) {
    Wm = K ? -WM : 0;
  }
  if (!Wy || Wm < 0) {
    Wm = Math.min(WI, Wm + (Wm < 0 && K ? WS : Wa));
  }
  if (Wm !== 0 && WP(W, "y", Wm)) {
    Wm = 0;
  }
  W._rmvy = Wm;
}
E(WA, "fall");
function WV(WR, WE, WO) {
  return __DECODE_0__(WE - 720, WO);
}
var WN = 0.12;
function Wx(W, K, WR) {
  let Wy = W.x - K;
  let K0 = W.y - WR;
  W.x = K;
  W.y = WR;
  let K1 = W._rmvx || 0;
  let K2 = W._rmvy || 0;
  K1 += (Wy - K1) * WN;
  K2 += (K0 - K2) * WN;
  if (Math.abs(K1) < 0.02) {
    K1 = 0;
  }
  if (Math.abs(K2) < 0.02) {
    K2 = 0;
  }
  if (K1 !== 0 && WP(W, "x", K1)) {
    K1 = 0;
  }
  if (K2 !== 0 && WP(W, "y", K2)) {
    K2 = 0;
  }
  W._rmvx = K1;
  W._rmvy = K2;
}
E(Wx, "slip");
var Wo = 0.6;
var WX = 0.001;
var WF = 0.55;
var WC = 0.4;
function WG(W) {
  let WR = Number(W.image_xscale) || 0;
  let WE = Number(W.image_yscale) || 0;
  let WO = W._rmb;
  const Wl = {
    tiny: 1,
    close: 1,
    lx: -1,
    ly: -1,
    bx: WR,
    by: WE
  };
  WO ||= W._rmb = Wl;
  if (WR !== WO.lx) {
    WO.bx = WR;
  }
  if (WE !== WO.ly) {
    WO.by = WE;
  }
  WO.tiny = Wu("TINYBOX") ? Wo : 1;
  if (Wu("CLOSING") && (q.mnfight | 0) === 2 && W.growcon === 2) {
    WO.close = Math.max(WF, WC / WO.tiny, WO.close - WX);
  } else if ((q.mnfight | 0) !== 2) {
    WO.close = 1;
  }
  let K0 = WO.tiny * WO.close;
  W.image_xscale = WO.bx * K0;
  W.image_yscale = WO.by * K0;
  WO.lx = W.image_xscale;
  WO.ly = W.image_yscale;
  if (K0 >= 1 || W.growcon === 3) {
    return;
  }
  let K1;
  let K2;
  let K3;
  let K4;
  if (W.sprite_index === "spr_battlebg_0") {
    {
      let K6 = Math.abs(W.image_xscale);
      let K7 = Math.abs(W.image_yscale);
      K1 = W.x - K6 * 35;
      K2 = W.y - K7 * 35;
      K3 = W.x + K6 * 36;
      K4 = W.y + K7 * 36;
    }
  } else {
    {
      let K9 = h(W);
      K1 = K9[0] + 4;
      K2 = K9[1] + 4;
      K3 = K9[2] - 4;
      K4 = K9[3] - 4;
    }
  }
  if (!(K3 - K1 <= 24) && !(K4 - K2 <= 24)) {
    for (let KW of R.all("obj_heart")) {
      if (KW.destroyed) {
        continue;
      }
      let KK = h(KW);
      let Ks = KK[0] < K1 ? K1 - KK[0] : KK[2] > K3 ? K3 - KK[2] : 0;
      let KT = KK[1] < K2 ? K2 - KK[1] : KK[3] > K4 ? K4 - KK[3] : 0;
      if (Ks !== 0 || KT !== 0) {
        KW.x += Math.round(Ks);
        KW.y += Math.round(KT);
      }
    }
  }
}
E(WG, "boxOne");
function Wq(W) {
  return W.game === "undertale" && (W.engine || "undertale") === "undertale";
}
E(Wq, "isUndertale");
function WD(W, K) {
  let WR = K.cfg || {};
  L.reseed(K.seed | 0);
  f(WR);
  q.fightSeed = K.seed | 0;
  let WE = q.tempflag ? q.tempflag[3] : 0;
  R.clear();
  H();
  D();
  z();
  M();
  B();
  q.battleover = null;
  q.jevilResult = null;
  q.inGameOver = false;
  q.roomScale = 1;
  q.gameoverAction = null;
  q.tempflag[3] = WE || 0;
  q.shakex = 0;
  q.shakey = 0;
  q.bgSpeed = 1;
  q.endfade = 0;
  for (let Wl of ["sus", "ral", "noe"]) {
    for (let Wm of ["canact", "actname", "actdesc", "actcost", "actsimul"]) {
      let Wy = Wm === "actname" || Wm === "actdesc" ? " " : 0;
      q[Wm + Wl] = [0, 1, 2].map(() => new Array(6).fill(Wy));
    }
  }
  N(WR);
  let WO = X(WR);
  for (let [K0, K1] of Object.entries(WO.roster || {})) {
    if (!!K1 && (!!K1.story || !!(WO.slots || []).includes(Number(K0)))) {
      q.charbase[Number(K0)] = K1.base;
      q.charhero[Number(K0)] = K1.hero || I[K1.base - 1] || "kris";
    }
  }
  t(k);
  for (let K2 of new Set([1, 2, 3, ...(WO.slots || [])])) {
    if (K2) {
      Wz(WO, K2);
    }
  }
  if (WR.items) {
    for (q.item = WR.items.filter(K3 => K3 > 0); q.item.length < 13;) {
      q.item.push(0);
    }
  }
  J(q, W, WR, Wq(W));
  C();
  G();
  p();
  Object.assign(i, {
    invuln: !!WR.invuln,
    nomiss: !!WR.nomiss,
    freetp: !!WR.freetp,
    slowbullets: !!WR.slowbullets,
    hpscale: WR.hpscale ?? 1,
    turnscale: WR.turnscale ?? 1,
    shake: WR.shake ?? 1,
    musicvol: WR.musicvol ?? 0.6,
    sfxvol: WR.sfxvol ?? 1,
    nodialog: !!WR.nodialog
  });
  Wc = Wq(W) ? "undertale" : "deltarune";
  Wj(WR, W.game === "undertale");
  return Wc;
}
E(WD, "buildFight");
function Wz(W, K) {
  let WR = q.charbase[K] || K;
  let WE = W.weapon || {};
  let WO = W.armor1 || {};
  let Wl = W.armor2 || {};
  let Wm = W.maxhp || {};
  let Wy = W.stats || {};
  let K0 = (K2, K3) => (K2 && (K2[K] ?? K2[WR])) ?? K3;
  q.charweapon[K] = K0(WE, q.charweapon[K]);
  q.chararmor1[K] = K0(WO, q.chararmor1[K]);
  q.chararmor2[K] = K0(Wl, q.chararmor2[K]);
  q.maxhp[K] = K0(Wm, q.maxhp[K]);
  q.hp[K] = q.maxhp[K];
  q.at[K] = K0(Wy.at, q.at[K]);
  q.df[K] = K0(Wy.df, q.df[K]);
  q.mag[K] = K0(Wy.mag, q.mag[K]);
  q.charname[K] = W.roster && W.roster[K] && W.roster[K].name || q.charname[WR];
  let K1 = a[q.charhero[K] || I[WR - 1]];
  if (K1) {
    for (q.spell[K] = [...K1.spells, ...V(K1.id)].slice(0, 12); q.spell[K].length < 12;) {
      q.spell[K].push(0);
    }
  }
}
E(Wz, "applyMember");
function Wt(W, K) {
  W4();
  let WR = X(K);
  q.customTeam = 0;
  q.partyNotice = null;
  if (WR && typeof WR == "object") {
    let Wl = WR.slots && WR.slots.length === 3 && WR.slots[0] === 1 && WR.slots[1] === 2 && WR.slots[2] === 3 && !WR.slots.some(Wy => WR.roster && WR.roster[Wy] && !WR.roster[Wy].story);
    let Wm = W.storyParty === "always";
    if (Wm && !Wl && WR.slots && WR.slots.some(Wy => Wy)) {
      q.partyNotice = "This fight uses the story party.";
    }
    if (W.storyParty && (Wl || Wm)) {
      let Wy = WR.roster && WR.roster[A];
      if (Wy && Wy.story && q.char.includes(4) && q.charhero && q.charhero[4] === "noelle") {
        let K0 = K1 => WR[K1] && WR[K1][A] != null ? WR[K1][A] : null;
        if (K0("weapon") != null) {
          q.charweapon[4] = K0("weapon");
        }
        if (K0("armor1") != null) {
          q.chararmor1[4] = K0("armor1");
        }
        if (K0("armor2") != null) {
          q.chararmor2[4] = K0("armor2");
        }
      }
    } else if (WR.slots && WR.slots.some(K1 => K1)) {
      let K1 = WR.slots.filter(K2 => K2).slice(0, 50);
      q.char = K1.length > 3 ? K1.slice() : [K1[0] || 0, K1[1] || 0, K1[2] || 0];
      q.customTeam = 1;
      for (let K2 of K1) {
        let K3 = WR.roster && WR.roster[K2];
        if (!!K3 && !K3.story) {
          q.charbase[K2] = K3.base;
          q.charhero[K2] = K3.hero || I[K3.base - 1] || "kris";
          Wz(WR, K2);
        }
      }
      if (K1.length === 1) {
        q.heromakex = [80, 80, 80];
        q.heromakey = [140, 140, 140];
      }
      if (K1.length === 2) {
        q.heromakex = [80, 80, 80];
        q.heromakey = [100, 180, 180];
      }
      if (W.seats && K1.length > W.seats) {
        q.char = K1.slice(0, W.seats);
        let K4 = q.char.map(K5 => q.charname && q.charname[K5] || (a[q.charhero[K5]] || {}).name || "?");
        q.partyNotice = "Only three fit on this ride: " + K4.slice(0, -1).join(", ") + " and " + K4[K4.length - 1] + ".";
      }
    }
    if (W.partyhp) {
      for (let K5 = 0; K5 < q.char.length; K5++) {
        let K6 = q.char[K5];
        if (K6) {
          q.maxhp[K6] = W.partyhp;
          q.hp[K6] = W.partyhp;
        }
      }
    }
    if (W.heroes) {
      WW();
      for (let K7 = 0; K7 < 3; K7++) {
        let K8 = q.char[K7];
        let K9 = W.heroes[K7];
        if (!!K8 && !!K9 && !!a[K9]) {
          q.charhero[K8] = K9;
          q.charname[K8] = a[K9].name;
        }
      }
    }
    C();
    G();
    if (W.background) {
      W.background();
    }
  }
  if (o()) {
    F(W);
  }
  let WE = c(0, 0, g);
  if (W.skipvictory && WE) {
    WE.skipvictory = W.skipvictory;
  }
  (W.monsters || []).forEach((KW, KK) => KW.setup(KK));
  if (W.ambush === 1) {
    R.with("obj_writer", KW => KW.instance_destroy());
    R.with("obj_face", KW => KW.instance_destroy());
    q.charturn = d();
    q.mnfight = 1;
    q.myfight = -1;
    R.with("obj_monsterparent", KW => {
      KW.ambushed = 1;
    });
  }
  if (WR && typeof WR == "object" && (i.hpscale ?? 1) !== 1) {
    for (let KW = 0; KW < 3; KW++) {
      if (q.monster[KW] === 1) {
        q.monstermaxhp[KW] = Math.max(1, Math.round(q.monstermaxhp[KW] * i.hpscale));
        q.monsterhp[KW] = q.monstermaxhp[KW];
      }
    }
  }
  let WO = K && typeof K == "object" && K.tpstart > 0 ? K : null;
  if (WO) {
    q.tension = Math.min(q.maxtension, Math.round(q.maxtension * Math.min(1, Number(WO.tpstart))));
  }
  if (K && typeof K == "object" && K.runhp && typeof K.runhp == "object") {
    Wi(K.runhp);
  }
}
E(Wt, "startDeltaruneController");
var Wk = E(W => {
  let K = Number(W);
  if (Number.isFinite(K)) {
    return Math.max(0, Math.min(1, K));
  } else {
    return 1;
  }
}, "shareOf");
function Wi(W) {
  if (!W || typeof W != "object") {
    return false;
  }
  let K = Math.max(1, Math.min(1.44, Number.isFinite(Number(W.s)) ? Number(W.s) : 1));
  if (typeof q.hp == "number") {
    let WE = Number(q.maxhp) > 0 ? Number(q.maxhp) : 20;
    let WO = Math.min(WE + 15, Math.round(WE * K));
    q.hp = Math.max(1, Math.min(WO, Math.round(WE * K * Wk(W.u))));
    return true;
  }
  if (!Array.isArray(q.char) || !q.maxhp || !q.hp) {
    return false;
  }
  let WR = W.h && typeof W.h == "object" ? W.h : {};
  for (let Wl = 0; Wl < q.char.length; Wl++) {
    let Wm = q.char[Wl];
    if (!Wm || !(q.maxhp[Wm] > 0)) {
      continue;
    }
    let Wy = Math.round(q.maxhp[Wm] * K);
    let K0 = Object.prototype.hasOwnProperty.call(WR, String(Wm)) ? Wk(WR[String(Wm)]) : 1;
    q.maxhp[Wm] = Wy;
    q.hp[Wm] = Math.max(1, Math.min(Wy, Math.round(Wy * K0)));
  }
  return true;
}
E(Wi, "applyRunHp");
var Wc = "deltarune";
var Wh = E(() => q.mnfight === 0 && !q.myfight, "atCommandMenu");
function WY() {
  let W = Wh() && (Wc !== "deltarune" || !Wr());
  let K = WR => String(WR.mystring ?? WR.originalstring ?? "").includes("/") || WR.halt !== 0;
  for (let WR of R.all("obj_base_writer")) {
    if (!WR.destroyed && (!W || !!K(WR))) {
      if (WR.halt === 0) {
        let WE = String(WR.originalstring ?? "").length;
        if ((WR.stringpos | 0) < WE) {
          WR.stringpos = WE;
        }
      } else if (WR.halt === 1 || WR.halt === 2 || WR.halt === 4) {
        WR.event_user(0);
      }
    }
  }
  for (let WO of R.all("obj_writer")) {
    if (WO.destroyed || W && !K(WO)) {
      continue;
    }
    let Wl = typeof WO.nextmsg == "function";
    if (WO.halt === 0) {
      if (WO.skippable === 1) {
        WO.skipme = 1;
      }
    } else if ((WO.halt === 1 || WO.halt === 2) && WO.siner > 0) {
      if (Wl) {
        if (WO.disablebutton1) {
          continue;
        }
        if (WO.halt === 1) {
          WO.nextmsg();
        } else {
          WO.instance_destroy();
        }
      } else {
        WO.forcebutton1 = 1;
      }
    }
  }
}
E(WY, "fastForwardDialogue");
function WZ() {
  WY();
}
E(WZ, "skipDialogue");
var WU = /press|\[z\]|\[c\]|~\d|repeatedly|rapidly|timing|time it|direction|\baim\b|choose|select|hold|photo|take a|as many|catch|shoot|mash/i;
function Wb() {
  let W = R.all("obj_writer").filter(K => !K.destroyed);
  return W.length > 0 && W.every(K => K.reachedend === 1 && K.halt === 0 && K.siner > 1 && !WU.test(String(K.mystring ?? "")));
}
E(Wb, "typedOutWaiting");
function Wr() {
  try {
    return !!P();
  } catch {
    return false;
  }
}
E(Wr, "heldSafe");
function Ww() {
  let W = false;
  for (let WR = 0; WR < 3 && !W; WR++) {
    let WE = q.monsterinstance && q.monsterinstance[WR];
    if (WE && !WE.destroyed && (WE.actcon === 20 || WE.actconsus === 20 || WE.actconral === 20 || WE.actconnoe === 20)) {
      W = true;
    }
  }
  if (!W) {
    return false;
  }
  let K = R.all("obj_writer").filter(WO => !WO.destroyed);
  return K.length > 0 && K.every(WO => WO.reachedend === 1 && WO.halt === 0);
}
E(Ww, "simulActWaiting");
b.input = () => {
  if (q.rmx) {
    Wp();
  }
  if (i.nodialog) {
    WY();
    if ((!q.control_state || !q.control_state[0] || !R.exists("obj_time")) && WL()) {
      r.pressed.b1 = true;
    }
  }
};
function WL() {
  if (q.minigameStage) {
    return false;
  }
  if (Wc === "deltarune") {
    if (R.exists("obj_choicer_neo") || R.all("obj_writer").some(K => !K.destroyed && K.halt === 5)) {
      return false;
    }
    let W = R.first("obj_yellow_trial_manager");
    if (W && !W.destroyed && W.can_control) {
      return false;
    } else if (q.mnfight === 1) {
      return true;
    } else if (q.myfight === 3) {
      return Ww() || Wb();
    } else if (q.myfight === 0 && q.mnfight === 0) {
      return Wr() && Wb();
    } else {
      return false;
    }
  }
  return q.mnfight === 1 && !R.all("obj_base_writer").some(K => !K.destroyed && K.halt === 5);
}
E(WL, "nodialogWantsZ");
export { W3 as a, W5 as b, WK as c, Wf as d, Wq as e, WD as f, Wt as g, Wi as h, WY as i, WZ as j, WU as k };
