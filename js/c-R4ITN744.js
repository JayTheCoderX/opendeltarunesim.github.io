const Y = function () {
  const Wl = {
    kTyOm: function (WQ, Wt) {
      return WQ === Wt;
    },
    nbvVF: function (WQ, Wt) {
      return WQ - Wt;
    },
    uCRJH: function (WQ, Wt) {
      return WQ !== Wt;
    },
    kyJBL: function (WQ, Wt) {
      return WQ == Wt;
    },
    NpQUW: function (WQ, Wt) {
      return WQ === Wt;
    },
    zQnYC: function (WQ, Wt) {
      return WQ === Wt;
    },
    FnQUl: "LnYxA",
    RgVWr: "GRAmr",
    aZVvn: "YbbYs"
  };
  const WA = Wl;
  let Wv = true;
  return function (WQ, Wt) {
    const Wx = {
      ZWauZ: function (Wg, Wd) {
        return WA.zQnYC(Wg, Wd);
      },
      EKdCZ: WA.FnQUl,
      aanBO: function (Wg, Wd) {
        return WA.NpQUW(Wg, Wd);
      },
      OTWZO: WA.RgVWr
    };
    if (WA.uCRJH(WA.aZVvn, WA.aZVvn)) {
      const Wg = W1[Wg];
      const Wd = WA.kTyOm(Wg[0], Wd.fromCharCode(46)) ? Wg.slice(1) : Wg;
      const WO = WA.nbvVF(WO.length, Wd.length);
      const WF = WF.indexOf(Wd, WO);
      const WN = WA.uCRJH(WF, -1) && WA.kTyOm(WF, WO);
      if (WN && (WA.kyJBL(W8.length, Wg.length) || WA.NpQUW(Wg.indexOf("."), 0))) {
        WW = true;
      }
    } else {
      const z0 = Wv ? function () {
        if (Wx.ZWauZ(Wx.EKdCZ, Wx.EKdCZ)) {
          if (Wt) {
            if (Wx.aanBO(Wx.OTWZO, Wx.OTWZO)) {
              const z4 = Wt.apply(WQ, arguments);
              Wt = null;
              return z4;
            } else {
              WQ = Wt(Wx && W1.message).slice(0, 100);
            }
          }
        } else {
          Wl();
          return;
        }
      } : function () {};
      Wv = false;
      return z0;
    }
  };
}();
const m = Y(this, function () {
  const I = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Wl = new RegExp("[DzRMHCfGMVHTYVjkJQYCOMYUZJWLYJIRXzPDDyJGABIbABZLJNWkPTFDYJMLVFRPKCAABkIRyxHXWXMjUPYyyXSPUMIDGTxRNGYXCURZxYHASTZCLMEqKFQFLUbJxRHRVOTENbRjjCSAWfyAGEzTSVTKzIZYJZCCkkQZBbFHALQVNfqKkTfbRMSZKVKfWOJMZQXSZOOAV]", "g");
  const WC = "DlozRMcaHCfGlhost;MVH1T2YVj7k.0.J0.Q1YCO;deMYltUaruZJWLnYJesiImR.Xcom;zwPDwDwy.deltJGarAuBIbABnZesLim.JcoNWm;dkrsPTiFm.lDYJoMLVcaFlRPKhost;C.dAeAltaBrkIRuyxneHXWXsimMj.UpPYyyaXSPUMgIeDGTxs.dRNGYXeCvURZxYHASTZCLMEqKFQFLUbJxRHRVOTENbRjjCSAWfyAGEzTSVTKzIZYJZCCkkQZBbFHALQVNfqKkTfbRMSZKVKfWOJMZQXSZOOAV".replace(Wl, "").split(";");
  let WL;
  let Wv;
  let WQ;
  let Wt;
  const Wc = function (z0, z1, z2) {
    if (z0.length != z1) {
      return false;
    }
    for (let z6 = 0; z6 < z1; z6++) {
      for (let z7 = 0; z7 < z2.length; z7 += 2) {
        {
          if (z6 == z2[z7] && z0.charCodeAt(z6) != z2[z7 + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const WS = function (z0, z1, z2) {
    return Wc(z1, z2, z0);
  };
  const Wx = function (z0, z1, z2) {
    return WS(z1, z0, z2);
  };
  const Wa = function (z0, z1, z2) {
    return Wx(z1, z2, z0);
  };
  for (let z0 in I) {
    {
      if (Wc(z0, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          WL = z0;
          break;
        }
      }
    }
  }
  for (let z2 in I[WL]) {
    {
      if (Wa(6, z2, [5, 110, 0, 100])) {
        {
          Wv = z2;
          break;
        }
      }
    }
  }
  for (let zW in I[WL]) {
    if (Wx(zW, [7, 110, 0, 108], 8)) {
      WQ = zW;
      break;
    }
  }
  if (!(Wv < "~")) {
    for (let zz in I[WL][WQ]) {
      if (WS([7, 101, 0, 104], zz, 8)) {
        Wt = zz;
        break;
      }
    }
  }
  if (!WL || !I[WL]) {
    return;
  }
  const Wd = I[WL][Wv];
  const WO = !!I[WL][WQ] && I[WL][WQ][Wt];
  const WF = Wd || WO;
  if (!WF) {
    return;
  }
  let WN = false;
  for (let zB = 0; zB < WC.length; zB++) {
    const zf = WC[zB];
    const zh = zf[0] === String.fromCharCode(46) ? zf.slice(1) : zf;
    const zJ = WF.length - zh.length;
    const zY = WF.indexOf(zh, zJ);
    const zm = zY !== -1 && zY === zJ;
    if (zm && (WF.length == zf.length || zf.indexOf(".") === 0)) {
      WN = true;
    }
  }
  if (!WN) {
    {}
  }
});
m();
const e = function () {
  const I = {
    DlbZK: function (WA, Wv) {
      return WA !== Wv;
    },
    Ymgtn: "oBMOO",
    PLqAv: function (WA, Wv) {
      return WA === Wv;
    },
    jMQci: "yfnbo",
    shXSm: "zOyoo"
  };
  const WC = I;
  let WL = true;
  return function (WA, Wv) {
    if (WC.PLqAv(WC.jMQci, WC.shXSm)) {
      I.prototype.spared.call(this);
    } else {
      const WS = WL ? function () {
        if (Wv) {
          if (WC.DlbZK(WC.Ymgtn, WC.Ymgtn)) {
            for (let Wd of ["hp", "maxhp", "df", "adef", "inv", "invc", "mnfight", "msg"]) {
              let WO = __DECODE_0__.getOwnPropertyDescriptor(WU, Wd);
              if (WO && WO.get) {
                let WF = WV[Wd];
                delete WP[Wd];
                if (WF !== undefined) {
                  WT[Wd] = WF;
                }
              }
            }
            WW = false;
            Wz = false;
            WI = false;
            WB.invc = 0;
            Wf.inv = 20;
            Wh = false;
          } else {
            const WN = Wv.apply(WA, arguments);
            Wv = null;
            return WN;
          }
        }
      } : function () {};
      WL = false;
      return WS;
    }
  };
}();
const n = e(this, function () {
  const Wu = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const WA = Wu.console = Wu.console || {};
  const Wv = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let WQ = 0; WQ < Wv.length; WQ++) {
    const Wt = e.constructor.prototype.bind(e);
    const Wc = Wv[WQ];
    const WS = WA[Wc] || Wt;
    Wt.__proto__ = e.bind(e);
    Wt.toString = WS.toString.bind(WS);
    WA[Wc] = Wt;
  }
});
n();
import { a as X, b as D, c as P, d as w, f as H } from "./c-HGFXMMIS.js";
import { Kb as i, Ma as y, Qm as r, ae as G, hb as b, ma as s, w as R } from "./c-LTPP2PPV.js";
import "./c-YJAH7XEB.js";
import { G as M, I as l, s as C } from "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import "./c-PWNRTD7X.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import { i as L } from "./c-3ELH3LBH.js";
import "./c-OYFOJ3BV.js";
import { f as u, n as A } from "./c-MYK6C3LF.js";
import { a as v, wa as t } from "./c-E7FVSW52.js";
import { g as c } from "./c-ZQQWH6UG.js";
import { Ib as x, Wb as a, Xb as d, pb as N, qb as W0, xb as W1 } from "./c-PBMEVLU6.js";
import { a as W2, e as W3, l as W4 } from "./c-XSSGDLV7.js";
W4();
W4();
var W5 = false;
function W6() {
  if (!W5) {
    for (let W of v) {
      if (!Array.isArray(c[W])) {
        c[W] = [];
      }
    }
    c.language = "en";
    y.call({});
    W5 = true;
  }
}
W2(W6, "ensureText");
var W7 = null;
function W8() {
  if (W7) {
    return W7;
  }
  let W = new Map(Object.entries(c));
  for (let Wl of v) {
    c[Wl] = [];
  }
  let I = [];
  try {
    R.call({});
    I = Array.isArray(c.flag) ? c.flag.slice() : [];
  } catch (WC) {
    console.warn("undertale flag snapshot failed; ACT lists that branch on a flag will read DELTARUNE state", WC && WC.message);
  }
  for (let WL of Object.keys(c)) {
    if (!W.has(WL)) {
      delete c[WL];
    }
  }
  for (let [Wu, WA] of W) {
    c[Wu] = WA;
  }
  W7 = I;
  return W7;
}
W2(W8, "ensureUtFlags");
function W9(W) {
  W6();
  let I = c.msg;
  let Wl = c.choices;
  let WC = c.flag;
  c.flag = W8().slice();
  c.msg = new Array(20).fill(" ");
  c.choices = [0, 0, 0, 0, 0, 0];
  let WL = "";
  let Wu = [0, 0, 0, 0, 0, 0];
  let WA = null;
  try {
    s.call({}, 1000 + W);
    WL = typeof c.msg[0] == "string" ? c.msg[0] : "";
    Wu = [0, 1, 2, 3, 4, 5].map(WQ => c.choices[WQ] ? 1 : 0);
  } catch (WQ) {
    WA = String(WQ && WQ.message).slice(0, 100);
  }
  c.msg = I;
  c.choices = Wl;
  c.flag = WC;
  let Wv = new Array(6).fill(null);
  WL.split("&").forEach((Wt, Wc) => {
    if (!(Wc > 2)) {
      Wt.split("*").slice(1).forEach((WS, Wx) => {
        if (Wx < 2) {
          Wv[Wx * 3 + Wc] = WS.trim();
        }
      });
    }
  });
  return {
    canact: Wu,
    name: Wv,
    raw: WL,
    threw: WA,
    mapped: Wu.some(Wt => Wt)
  };
}
W2(W9, "utActTable");
var WW = new Map();
function Wz(W) {
  var I;
  if (WW.has(W)) {
    return WW.get(W);
  }
  let Wl = r[W];
  if (!Wl) {
    WW.set(W, null);
    return null;
  }
  I = class extends Wl {
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
        actingsus: 0,
        actingral: 0,
        actingnoe: 0,
        talked: 0,
        attacked: 0,
        flash: 0,
        fsiner: 0,
        becomeflash: 0,
        mytarget: 3,
        endcon: 0,
        sparecon: 0,
        pacifycon: 0,
        _utact: -1,
        _utactcon: 0,
        _utboxmade: 0,
        _utsaid: null
      });
    }
    create() {
      let WL = Array.isArray(c.monster) ? c.monster.slice() : [0, 0, 0];
      c.monster = [0, 0, 0];
      for (let Wu = 0; Wu < 3; Wu++) {
        if (c.monsterinstance && c.monsterinstance[Wu]) {
          c.monster[Wu] = 1;
        }
      }
      try {
        super.create();
      } finally {
        let WA = this.myself;
        c.monster = WL.slice();
        if (WA >= 0 && WA < 3) {
          c.monster[WA] = 1;
        }
      }
    }
    userEvent(WL) {
      if (WL === 12) {
        c.monsterx[this.myself] = this.x + (this.sprite_width || 40) / 2;
        c.monstery[this.myself] = this.y + (this.sprite_height || 40) / 2;
        return;
      }
      if (WL === 10) {
        this.spared();
        return;
      }
      if (typeof super.userEvent == "function") {
        super.userEvent(WL);
      }
    }
    spared() {
      C.prototype.spared.call(this);
    }
    scr_monsterdefeat() {
      C.prototype.scr_monsterdefeat.call(this);
    }
    step() {
      WI(this, () => {
        if (typeof super.step == "function") {
          super.step();
        }
      });
    }
  };
  I;
  W3(I, "kinds", new Set([...Wl.kinds, ...C.kinds, "ut_dr_adapter"]));
  W3(I, "kindName", W);
  W3(I, "defaultDepth", Wl.defaultDepth);
  let WC = I;
  try {
    Object.defineProperty(WC, "name", {
      value: W,
      configurable: true
    });
  } catch {}
  WW.set(W, WC);
  return WC;
}
W2(Wz, "utAdapter");
function WI(W, I) {
  let Wl = W.myself;
  if (Wl === Wm()) {
    Wy();
    WY();
    WG();
  }
  if (c.monster[Wl] !== 1) {
    I();
    return;
  }
  let WC = false;
  if (W.acting > 0 && W._utact !== W.acting && c.myfight === 3) {
    W._utact = W.acting;
    let Wc = c.utActSlot && c.utActSlot[Wl];
    W.whatiheard = Wc && Wc[W.acting - 1] !== undefined ? Wc[W.acting - 1] : W.acting - 1;
    c.heard = 0;
    WC = true;
  }
  let WL = c.myfight;
  let Wu = c.mnfight;
  let WA = c.msg;
  let Wv = 64;
  c.msg = new Array(Wv).fill("%%%");
  if (WC) {
    c.myfight = 2;
  }
  I();
  let WQ = [];
  for (let WS = 0; WS < Wv; WS++) {
    let Wx = c.msg[WS];
    if (typeof Wx != "string" || Wx === "%%%" || Wx === " " || Wx === "") {
      break;
    }
    WQ.push(Wx);
  }
  c.myfight = WL;
  c.msg = WA;
  if (WC) {
    c.mnfight = Wu;
  }
  let Wt = WQ.join("");
  if (WQ.length && Wt !== W._utsaid) {
    W._utsaid = Wt;
    W1.with("OBJ_WRITER", Wa => {
      if (!Wa.placeholder) {
        Wa.instance_destroy();
      }
    });
    W1.with("OBJ_INSTAWRITER", Wa => {
      if (!Wa.placeholder) {
        Wa.instance_destroy();
      }
    });
    if (!W1.exists("obj_battleblcon") && !W1.exists("obj_writer")) {
      c.typer = 50;
      c.msg = new Array(100).fill(" ");
      WQ.forEach((Wa, Wg) => {
        c.msg[Wg] = Ws(Wa);
      });
      L(W.x - 160, W.y, 3);
    }
  }
  if (!WQ.length) {
    W._utsaid = null;
  }
  if (WC) {
    W._utactcon = 1;
  }
  if (W._utactcon === 1 && !W1.exists("obj_writer") && !W1.exists("obj_battleblcon")) {
    W._utactcon = 0;
    W.acting = 0;
    W._utact = -1;
    c.acting = [0, 0, 0];
    M();
  }
  if (c.mnfight === 2 && W._utboxmade === 0) {
    W._utboxmade = 1;
    W1.with("obj_battleblcon", Wa => Wa.instance_destroy());
    W1.with("obj_writer", Wa => {
      if (!Wa.placeholder) {
        Wa.instance_destroy();
      }
    });
    if (!W1.exists("obj_moveheart") && !Wh()) {
      A();
    }
    if (!W1.exists("obj_growtangle")) {
      x(320, 170, u);
    }
  }
  if (c.mnfight !== 2) {
    W._utboxmade = 0;
  }
}
W2(WI, "utStepBridge");
var WB = new Map();
function Wf(W) {
  var I;
  if (!WB.has(W)) {
    WB.set(W, (I = class extends N {
      create() {
        this.visible = false;
        this.sprite_index = null;
        this.mask_index = null;
        this.movement = 0;
        this.halt = 0;
        this.placeholder = true;
      }
    }, W3(I, "kinds", W0(W, N)), W3(I, "kindName", "ut_dr_placeholder_" + W), W3(I, "defaultDepth", 1000), I));
  }
  return WB.get(W);
}
W2(Wf, "placeholderClass");
function Wh() {
  return W1.all("obj_heart").some(W => !W.destroyed && !W.placeholder);
}
W2(Wh, "hasRealHeart");
function WJ(W, I = []) {
  let Wl = W1.all(W);
  let WC = Wl.filter(Wu => !Wu.placeholder);
  let WL = Wl.filter(Wu => Wu.placeholder);
  if (WC.length || I.some(Wu => W1.exists(Wu))) {
    for (let Wu of WL) {
      Wu.instance_destroy();
    }
    return;
  }
  if (WL.length) {
    for (let WA = 1; WA < WL.length; WA++) {
      WL[WA].instance_destroy();
    }
  } else {
    let Wv = x(-200, -200, Wf(W));
    if (Wv) {
      Wv.visible = false;
    }
  }
}
W2(WJ, "standIn");
function WY() {
  WJ("obj_heart", ["obj_moveheart"]);
  WJ("OBJ_WRITER");
  WJ("OBJ_INSTAWRITER");
}
W2(WY, "utSoulBridge");
var Wm = W2(() => c.monster[0] === 1 ? 0 : c.monster[1] === 1 ? 1 : 2, "firstLiveSlot");
var WE = ["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder"];
var We = false;
function WU() {
  if (!We) {
    We = true;
    for (let W of Object.values(r)) {
      if (typeof W == "function" && W.prototype) {
        try {
          W.__ut = true;
        } catch {}
      }
    }
  }
}
W2(WU, "tagUtClasses");
var WZ = W2(() => {
  let W = W1.self;
  return !!W && !!W.constructor && !!W.constructor.__ut;
}, "inUtCode");
var WD = false;
var WV = {
  invc: 0,
  inv: 20
};
function WP() {
  if (WD) {
    return;
  }
  WU();
  let W = c.invc;
  let I = c.inv;
  let Wl = c.hp;
  let WC = c.df;
  let WL = c.adef;
  let Wu = c.maxhp;
  let WA = () => {
    for (let Wv = 0; Wv < 3; Wv++) {
      let WQ = c.char[Wv];
      if (WQ && Array.isArray(Wl) && Wl[WQ] > 0) {
        return WQ;
      }
    }
    return c.char[0] || 1;
  };
  try {
    Object.defineProperty(c, "invc", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          return WV.invc;
        } else {
          return W;
        }
      },
      set(Wv) {
        if (WZ() && W1.first("ut_dr_adapter")) {
          WV.invc = Wv;
        } else {
          W = Wv;
        }
      }
    });
    Object.defineProperty(c, "inv", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          return WV.inv;
        } else {
          return I;
        }
      },
      set(Wv) {
        if (WZ() && W1.first("ut_dr_adapter")) {
          WV.inv = Wv;
        } else {
          I = Wv;
        }
      }
    });
    Object.defineProperty(c, "df", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          let Wv = Array.isArray(WC) ? WC[WA()] : WC;
          if (Number.isFinite(Wv)) {
            return Wv;
          } else {
            return 0;
          }
        }
        return WC;
      },
      set(Wv) {
        if (!WZ() || !W1.first("ut_dr_adapter")) {
          WC = Wv;
        }
      }
    });
    Object.defineProperty(c, "adef", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          return 0;
        } else {
          return WL;
        }
      },
      set(Wv) {
        if (!WZ() || !W1.first("ut_dr_adapter")) {
          WL = Wv;
        }
      }
    });
    Object.defineProperty(c, "maxhp", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          let Wv = Array.isArray(Wu) ? Wu[WA()] : Wu;
          if (Number.isFinite(Wv)) {
            return Wv;
          } else {
            return 0;
          }
        }
        return Wu;
      },
      set(Wv) {
        if (!WZ() || !W1.first("ut_dr_adapter")) {
          Wu = Wv;
        }
      }
    });
    Object.defineProperty(c, "hp", {
      configurable: true,
      get() {
        if (WZ() && W1.first("ut_dr_adapter")) {
          let Wv = WA();
          if (Array.isArray(Wl)) {
            return Wl[Wv];
          } else {
            return Wl;
          }
        }
        return Wl;
      },
      set(Wv) {
        if (WZ() && W1.first("ut_dr_adapter") && typeof Wv == "number" && Array.isArray(Wl)) {
          let WQ = WA();
          let Wt = Wl[WQ];
          if (typeof Wt == "number" && Number.isFinite(Wv)) {
            let Wc = Array.isArray(Wu) && Number.isFinite(Wu[WQ]) ? Wu[WQ] : Wt;
            Wl[WQ] = Math.max(0, Math.min(Wc, Wv));
          }
          return;
        }
        Wl = Wv;
      }
    });
    WD = true;
  } catch {}
}
W2(WP, "bridgeDamage");
function WT() {
  if (W1.first("obj_time")) {
    return;
  }
  let W = undefined || t;
  if (W) {
    x(0, 0, W);
  }
}
W2(WT, "utTimeBridge");
function Wp() {
  if (WV.invc > 0) {
    WV.invc--;
  }
}
W2(Wp, "utTickInvc");
function Ww() {
  for (let W of ["hp", "maxhp", "df", "adef", "inv", "invc", "mnfight", "msg"]) {
    let I = Object.getOwnPropertyDescriptor(c, W);
    if (I && I.get) {
      let Wl = c[W];
      delete c[W];
      if (Wl !== undefined) {
        c[W] = Wl;
      }
    }
  }
  WD = false;
  WH = false;
  Wj = false;
  WV.invc = 0;
  WV.inv = 20;
  W5 = false;
}
W2(Ww, "resetUtDrForFight");
d(Ww);
var WH = false;
function Wk() {
  if (WH) {
    return;
  }
  let W = c.mnfight;
  try {
    Object.defineProperty(c, "mnfight", {
      configurable: true,
      get() {
        return W;
      },
      set(I) {
        if (I === 3 && W1.first("ut_dr_adapter")) {
          if (!(c.turntimer <= 0)) {
            c.turntimer = -1;
          }
          W = 2;
          return;
        }
        W = I;
      }
    });
    WH = true;
  } catch {}
}
W2(Wk, "bridgeTurnState");
var Wj = false;
function Wo() {
  if (Wj) {
    return;
  }
  let W = Array.isArray(c.msg) ? c.msg : new Array(100).fill(" ");
  let I = null;
  let Wl = null;
  let WC = new WeakMap();
  let WL = Wu => {
    let WA = new Proxy(Wu, {
      get(Wv, WQ) {
        let Wt = Wv[WQ];
        if (typeof WQ == "string" && /^\d+$/.test(WQ) && W1.first("ut_dr_adapter") && (Wt === undefined || Wt === " ")) {
          return "%%%";
        } else {
          return Wt;
        }
      }
    });
    WC.set(WA, Wu);
    return WA;
  };
  try {
    Object.defineProperty(c, "msg", {
      configurable: true,
      get() {
        if (Wl !== W) {
          I = WL(W);
          Wl = W;
        }
        return I;
      },
      set(Wu) {
        W = Wu && typeof Wu == "object" && WC.get(Wu) || Wu;
        Wl = null;
      }
    });
    Wj = true;
  } catch {}
}
W2(Wo, "bridgeMsgArray");
var Wi = false;
function Wy() {
  if (!Wi) {
    Wi = true;
    a.pre = () => {
      if (W1.first("ut_dr_adapter")) {
        WT();
        Wp();
        WY();
        WG();
        Wr();
      }
    };
  }
}
W2(Wy, "armBridges");
function Wr() {
  if (c.mnfight !== 1 && c.mnfight !== 1.5 || !Array.isArray(c.monster) || c.monster[0] === 1 || c.monster[1] === 1 || c.monster[2] === 1) {
    return;
  }
  let W = W1.first("obj_battlecontroller");
  if (!!W && !W.destroyed && W.victory !== 1 && c.myfight !== 7) {
    l();
  }
}
W2(Wr, "utWonBridge");
function WG() {
  let W = W1.first("obj_growtangle");
  if (!W || W.destroyed) {
    if (!W1.first("ut_dr_adapter")) {
      W1.with("obj_borderparent", Wu => Wu.instance_destroy());
      for (let Wu of WE) {
        W1.with(Wu, WA => WA.instance_destroy());
      }
      return;
    }
    if (!c.idealborder || !Number.isFinite(c.idealborder[0]) || !(c.idealborder[1] > c.idealborder[0])) {
      c.idealborder = [245, 395, 95, 245];
    }
    Wb();
    return;
  }
  let I = W.bbox_left;
  let Wl = W.bbox_right;
  let WC = W.bbox_top;
  let WL = W.bbox_bottom;
  if (!isFinite(I) || !isFinite(Wl) || !(Wl > I)) {
    I = W.x - 75;
    Wl = W.x + 75;
    WC = W.y - 75;
    WL = W.y + 75;
  }
  c.idealborder[0] = Math.round(I);
  c.idealborder[1] = Math.round(Wl);
  c.idealborder[2] = Math.round(WC);
  c.idealborder[3] = Math.round(WL);
  Wb();
}
W2(WG, "utBorderBridge");
function Wb() {
  for (let W of WE) {
    if (W1.exists(W)) {
      continue;
    }
    let I = r[W];
    if (!I) {
      continue;
    }
    let Wl = x(c.idealborder[0], c.idealborder[2], I);
    if (Wl) {
      Wl.instaborder = 1;
      Wl.instant = 1;
      Wl.visible = false;
      Wl.depth = 100;
    }
  }
}
W2(Wb, "makeBorders");
function Ws(W) {
  return String(W).replace(/\\[RXYWpZ]/g, "").replace(/\\M[0-9A-Z]/g, "").replace(/\\z[0-9]/g, "").replace(/\s+$/, "");
}
W2(Ws, "utTextToDeltarune");
var WR = [160, 240, 320];
function WM() {
  let W = G;
  if (W && !W1.exists("obj_battlebg")) {
    let I = x(0, 0, W);
    if (I) {
      I.visible = false;
      I.depth = 2000;
    }
  }
  WY();
}
W2(WM, "utBackground");
function WK() {
  let W = [];
  for (let [I, Wl] of Object.entries(D.encounters)) {
    let WC = Number(I);
    let WL = (Wl.objs || []).filter(Boolean);
    let Wu = [];
    for (let Wt = 0; Wt < Math.min(3, WL.length); Wt++) {
      let Wc = Wz(WL[Wt]);
      if (!Wc) {
        continue;
      }
      let WS = (Wl.types || [])[Wt] || 0;
      Wu.push({
        cls: Wc,
        type: WS,
        x: 540,
        y: WR[Wu.length],
        setup: Wq(WS)
      });
    }
    if (!Wu.length) {
      continue;
    }
    let WA = (Wl.names || []).filter(Boolean);
    let Wv = [];
    for (let Wx of WA) {
      let Wa = Wv[Wv.length - 1];
      if (Wa && Wa.name === Wx) {
        Wa.n++;
      } else {
        Wv.push({
          name: Wx,
          n: 1
        });
      }
    }
    let WQ = Wv.map(Wg => Wg.n > 1 ? Wg.name + " x" + Wg.n : Wg.name).join(" & ");
    WQ ||= WL.join(" & ").replace(/obj_/g, "") || "Encounter " + WC;
    W.push({
      id: "utdr" + WC,
      name: WQ,
      game: "undertale",
      engine: "deltarune",
      chapter: "utdr",
      engineChapter: 1,
      area: "UNDERTALE (DELTARUNE engine)",
      desc: "Undertale battlegroup " + WC + ", fought with DELTARUNE's engine.#" + WL.join(", "),
      hidden: true,
      battlegroup: WC,
      encounterno: 0,
      music: Wl.music || null,
      monsters: Wu,
      party: [1, 2, 3],
      heromakex: [80, 90, 100],
      heromakey: [100, 150, 210],
      background: WM,
      battlemsg: "* " + WQ + " draws near!",
      utEngineTwin: "ut" + WC
    });
  }
  W.sort((Wg, Wd) => Wg.battlegroup - Wd.battlegroup);
  return W;
}
W2(WK, "buildUndertaleDeltaruneFights");
function Wq(W) {
  return function (I) {
    Wy();
    Wo();
    Wk();
    WP();
    c.monsterat[I] = Number(c.monsteratk[I]) || 0;
    c.monsterdf[I] = Number(c.monsterdef[I]) || 0;
    c.monsterexp[I] = Number(c.xpreward[I]) || 0;
    c.monstergold[I] = Number(c.goldreward[I]) || 0;
    c.monstername[I] ||= (D.monsters[W] || {}).name || "Monster";
    c.mercymod[I] = 0;
    c.mercymax[I] = 100;
    c.sparepoint[I] = 0;
    let Wl = W9(W);
    let WC = [0, 3, 1, 4, 2, 5].filter(WL => Wl.canact[WL] && Wl.name[WL]);
    c.utActSlot ||= [];
    c.utActSlot[I] = WC.slice();
    for (let WL = 0; WL < 6; WL++) {
      let Wu = WC[WL];
      c.canact[I][WL] = Wu !== undefined ? 1 : 0;
      c.actname[I][WL] = Wu !== undefined ? Wl.name[Wu] : " ";
      c.actactor[I][WL] = 1;
      c.actdesc[I][WL] = " ";
      c.actcost[I][WL] = 0;
    }
  };
}
W2(Wq, "makeSetup");
export { r as UTOBJ, i as UTSCR, P as UT_DATA, X as buildUT10Fights, WK as buildUndertaleDeltaruneFights, w as buildUndertaleFights, b as scr_battlegroup, H as startUndertaleFight };
