const L = function () {
  let RE = true;
  return function (RB, Ra) {
    const Rq = {
      Gtjpl: function (Rz) {
        return Rz();
      },
      jxetO: function (Rz, RS) {
        return Rz(RS);
      },
      fTvyc: function (Rz, RS) {
        return Rz !== RS;
      },
      cKYwS: "oexfh",
      EGWxX: "KhYxi",
      gduHy: function (Rz, RS, Rt) {
        return Rz(RS, Rt);
      },
      vBOoL: function (Rz, RS) {
        return Rz > RS;
      },
      FHYBA: function (Rz, RS) {
        return Rz === RS;
      },
      THfKh: function (Rz, RS) {
        return Rz(RS);
      },
      dhBWp: "full",
      TAZSx: function (Rz, RS) {
        return Rz <= RS;
      },
      JWrCz: function (Rz, RS) {
        return Rz / RS;
      },
      aNdLX: function (Rz, RS) {
        return Rz / RS;
      },
      PWLEu: function (Rz, RS) {
        return Rz * RS;
      },
      bcljt: function (Rz, RS) {
        return Rz * RS;
      },
      zOnXp: function (Rz, RS) {
        return Rz(RS);
      }
    };
    {
      const Rz = RE ? function () {
        if (Ra) {
          if (Rq.fTvyc(Rq.cKYwS, Rq.EGWxX)) {
            const Ry = Ra.apply(RB, arguments);
            Ra = null;
            return Ry;
          } else {
            Rq.Gtjpl(Rq);
            Rq.jxetO(Rz, m);
            r--;
          }
        }
      } : function () {};
      RE = false;
      return Rz;
    }
  };
}();
const V = L(this, function () {
  const RO = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Rn = RO.console = RO.console || {};
  const Ra = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let RT = 0; RT < Ra.length; RT++) {
    {
      const Re = L.constructor.prototype.bind(L);
      const Rq = Ra[RT];
      const Rg = Rn[Rq] || Re;
      Re.__proto__ = L.bind(L);
      Re.toString = Rg.toString.bind(Rg);
      Rn[Rq] = Re;
    }
  }
});
V();
import { f as Z, g as d, j as M, k as b, l as x } from "./c-P6GBAWX5.js";
import { h as W, l as C } from "./c-RNLQZIER.js";
import "./c-CCL3XGEJ.js";
import "./c-B36JSU6C.js";
import "./c-BKTN6CPB.js";
import "./c-XTWZZNZA.js";
import "./c-BERKZCGM.js";
import "./c-VB7PBWB7.js";
import "./c-AXDRFE3U.js";
import "./c-VGC6FILU.js";
import "./c-H5LU7UHS.js";
import "./c-AYDQ2WI5.js";
import "./c-SHU6ROUQ.js";
import "./c-F3KC5JBP.js";
import "./c-QVGXLNTR.js";
import "./c-S573BZHI.js";
import "./c-SRPTC2P4.js";
import "./c-4VFR2NSV.js";
import "./c-7BWKVCRS.js";
import "./c-EJF6JQ2U.js";
import "./c-E3FAV6Z4.js";
import "./c-TW2FVSA5.js";
import "./c-H2HTZPEL.js";
import "./c-V7HIBOZL.js";
import "./c-S6HGHCFD.js";
import "./c-HQHPDIVM.js";
import "./c-PNL2T3BD.js";
import "./c-GABAATJZ.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import { e as A, f as o, g as D } from "./c-3KRFGFG4.js";
import "./c-VG5U7RS4.js";
import "./c-YJAH7XEB.js";
import "./c-PGO4VU5H.js";
import { n as N } from "./c-KLECZKO5.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { ie as l } from "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import { A as m, J as c, a as v } from "./c-J7PU4477.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import "./c-3ELH3LBH.js";
import { a as P, f as r } from "./c-WSZI3RLB.js";
import "./c-NNTXHBME.js";
import "./c-OYFOJ3BV.js";
import "./c-MYK6C3LF.js";
import { a as h, b as f, c as J } from "./c-GI6IDYOV.js";
import "./c-E7FVSW52.js";
import { g as I } from "./c-ZQQWH6UG.js";
import { Ca as j, Fa as p, G as X, Ga as U, H, Ha as O, Ja as n, Lb as E, Sb as B, Tb as a, Ub as T, X as e, ac as q, lc as g, n as z, pb as S, qd as t, wd as Q, xb as y } from "./c-PBMEVLU6.js";
import { a as R0, l as R1 } from "./c-XSSGDLV7.js";
R1();
var R2 = {
  bullets: new Set(["bullet"]),
  soulbox: new Set(["bullet", "soul", "box"]),
  scene: new Set(["bullet", "soul", "box", "bg"]),
  all: null
};
var R3 = /^obj_(heart|purpleheart|yheart|yellowheart|heartshot|grazebox|soul)/i;
var R4 = /growtangle|^obj_[udlr]border$|battlebox|^obj_board_box/i;
var R5 = /battlebg|battleback|background|darkener|_bg\b|_bg_|^obj_bg|fountain|backdrop/i;
var R6 = new Set(["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder", "obj_border"]);
var R7 = (() => {
  let RO = new Set(["obj_collidebullet"]);
  try {
    {
      for (let [RB, Ra] of P) {
        if (RB === "obj_heart" && !R6.has(Ra)) {
          RO.add(Ra);
        } else if (Ra === "obj_heart" && !R6.has(RB)) {
          RO.add(RB);
        }
      }
    }
  } catch {}
  for (let RT of v) {
    RO.add(RT);
  }
  return RO;
})();
var R8 = new WeakMap();
function R9(R) {
  let RE = R && R.constructor;
  if (!RE) {
    return false;
  }
  let RT = R8.get(RE);
  if (RT === undefined) {
    let Re = RE.name;
    RT = Re !== "obj_boneplat" && R7.has(Re);
    if (!RT && Re !== "obj_boneplat" && typeof R.is == "function") {
      for (let Rq of R7) {
        if (R.is(Rq)) {
          RT = true;
          break;
        }
      }
    }
    R8.set(RE, RT);
  }
  return RT || RE.name !== "obj_boneplat" && typeof R.dmg == "number" && R.dmg > 0;
}
R0(R9, "isThreat");
var RR = R0(R => R && R.constructor && (R.constructor.kindName || R.constructor.name) || "", "nameOf");
function RF(R, F) {
  if (!R || typeof R.is != "function" || F && F.has(R)) {
    return "other";
  }
  let RB = RR(R);
  if (R.is("obj_heart") || R.is("obj_purpleheart") || R3.test(RB) && !/enemy/i.test(RB)) {
    return "soul";
  }
  if (R4.test(RB)) {
    return "box";
  }
  let Ra = false;
  try {
    Ra = R9(R);
  } catch {
    Ra = false;
  }
  if (Ra) {
    return "bullet";
  } else if (R5.test(RB)) {
    return "bg";
  } else {
    return "other";
  }
}
R0(RF, "layerOf");
function RH() {
  if (y.first("obj_purpleheart")) {
    return "PURPLE";
  }
  let RO = y.first("obj_heart");
  if (!RO) {
    return null;
  }
  let RE = String(RO.sprite_index || "");
  if (RO.shot === 1 || /yellow|yheart/i.test(RE)) {
    return "YELLOW";
  }
  let Ra = RO.movement;
  if (Ra === 2 || Ra === 11 || Ra === 12 || Ra === 13 || /blue/i.test(RE)) {
    return "BLUE";
  } else if (Ra === 3 || /green/i.test(RE) || y.first("obj_spearblocker")) {
    return "GREEN";
  } else if (/purple/i.test(RE)) {
    return "PURPLE";
  } else if (/orange/i.test(RE)) {
    return "ORANGE";
  } else {
    return "RED";
  }
}
R0(RH, "soulMode");
var RG = new Proxy({}, {
  get(R, F) {
    if (F === "canvas") {
      return {
        width: 640,
        height: 480
      };
    } else if (F === "measureText") {
      return () => ({
        width: 0
      });
    } else if (F === "getImageData") {
      return () => ({
        data: new Uint8ClampedArray(4)
      });
    } else if (F === "createPattern" || F === "createLinearGradient" || F === "createRadialGradient") {
      return () => null;
    } else {
      return () => {};
    }
  },
  set() {
    return true;
  }
});
function RY(R, F, RO = new g(R)) {
  let RB = R;
  let Ra = null;
  let RT = R;
  Object.defineProperty(RO, "ctx", {
    configurable: true,
    enumerable: true,
    get() {
      let Rg = y.self;
      if (Rg !== Ra) {
        Ra = Rg;
        RT = RB;
      }
      if (Rg) {
        if (F(Rg)) {
          return RG;
        } else {
          return RB;
        }
      } else if (F(null)) {
        return RG;
      } else {
        return RB;
      }
    },
    set(Rg) {
      RB = Rg === RG ? RT : Rg;
    }
  });
  return RO;
}
R0(RY, "layeredGfx");
var Ru = R0(() => RY(RG, () => true, J(g)), "blindGfx");
function RK() {
  const Rn = {
    ...j
  };
  const RE = {
    ...y.view
  };
  const Ra = {
    ...y.room
  };
  return {
    snap: h(),
    ch: X,
    sandbox: Rn,
    audio: n(),
    view: RE,
    room: Ra,
    rec: Q.mode,
    record: y.record,
    synthetic: e.synthetic,
    textFocus: e.textFocus,
    released: {
      ...e.released
    },
    curG: a,
    instId: S._id
  };
}
R0(RK, "saveReal");
function RL(R, F = false) {
  if (!F) {
    try {
      b(y);
    } catch {}
  }
  y.list.length = 0;
  y.pending.length = 0;
  f(R.snap);
  Object.assign(y.view, R.view);
  Object.assign(y.room, R.room);
  for (let Ra of Object.keys(j)) {
    if (!(Ra in R.sandbox)) {
      delete j[Ra];
    }
  }
  Object.assign(j, R.sandbox);
  Q.mode = R.rec;
  y.record = R.record;
  e.synthetic = R.synthetic;
  e.textFocus = R.textFocus;
  for (let RT of Object.keys(e.released)) {
    delete e.released[RT];
  }
  Object.assign(e.released, R.released);
  if (!F) {
    try {
      l();
    } catch {}
  }
  if (X !== R.ch) {
    H(R.ch);
  }
  T(R.curG);
  S._id = R.instId;
  p(R.audio);
}
R0(RL, "restoreReal");
var RV = 0;
var Rs = R0(() => !y.list.some(R => R && !R.destroyed), "worldIsEmpty");
function RZ(R, F = false) {
  if (RV) {
    throw new Error("darkdle sandbox is already open");
  }
  if (!F && !Rs()) {
    throw new Error("a fight is live - clips are only made on the menu");
  }
  RV++;
  let Rn = RK();
  p(false);
  U();
  Q.mode = "off";
  try {
    return R();
  } finally {
    O();
    RL(Rn);
    RV--;
  }
}
R0(RZ, "inSandbox");
var Rd = R0(R => W.find(F => F && F.id === R) || null, "fightById");
var Rk = R0((R, F) => R && F && Z(R).find(RO => d(RO) === F) || null, "attackOf");
var Rw = 0;
function RM(R, F) {
  S._id = Rw;
  o(R, {
    seed: F | 0,
    cfg: {
      nodialog: true
    }
  });
  c();
  if (A(R)) {
    N(R);
  } else {
    C(R);
    D(R);
  }
}
R0(RM, "stageFight");
function Rb() {
  if (typeof I.hp == "number") {
    I.hp = I.maxhp || 20;
  } else if (I.hp && I.maxhp) {
    for (let RB = 1; RB <= 3; RB++) {
      if (I.maxhp[RB]) {
        I.hp[RB] = I.maxhp[RB];
      }
    }
  }
  I.karma = 0;
  if (Array.isArray(I.monsterhp) && Array.isArray(I.monstermaxhp)) {
    for (let Ra = 0; Ra < 3; Ra++) {
      if (I.monstermaxhp[Ra] > 0) {
        I.monsterhp[Ra] = I.monstermaxhp[Ra];
      }
    }
  }
}
R0(Rb, "keepAlive");
function Rx() {
  if (!!Array.isArray(I.monsterhp) && !!Array.isArray(I.monstermaxhp)) {
    for (let RB = 0; RB < 3; RB++) {
      if (I.monstermaxhp[RB] > 0) {
        I.monsterhp[RB] = I.monstermaxhp[RB] * 100 + 9999;
        if (Array.isArray(I.mercymod) && I.mercymod[RB] > 0) {
          I.mercymod[RB] = 0;
        }
      }
    }
  }
}
R0(Rx, "guardEnemies");
function RW(R, F) {
  if (R && R.forcible) {
    M(y, R);
  }
  if (I.mnfight !== 2) {
    Rx();
  }
  if (I.mnfight !== 2) {
    let Ra = I.autoplay;
    I.autoplay = true;
    try {
      m();
    } finally {
      I.autoplay = Ra;
    }
  } else {
    e.synthetic = null;
  }
  try {
    q(r, F);
  } catch {}
  Rb();
}
R0(RW, "tick");
var RC = R0(() => {
  let Rn = 0;
  for (let RB of y.list) {
    {
      if (RB.destroyed) {
        continue;
      }
      let RT = false;
      try {
        RT = R9(RB);
      } catch {}
      if (RT) {
        Rn++;
      }
    }
  }
  return Rn;
}, "bullets");
function RA(R) {
  for (let RB of y.list) {
    {
      if (RB.destroyed) {
        continue;
      }
      let Ra = false;
      try {
        Ra = R9(RB);
      } catch {}
      if (!Ra) {
        continue;
      }
      let RT;
      try {
        RT = E(RB);
      } catch {
        continue;
      }
      if (RT && RT[2] >= R.x && RT[0] <= R.x + R.w && RT[3] >= R.y && RT[1] <= R.y + R.h) {
        return true;
      }
    }
  }
  return false;
}
R0(RA, "bulletIn");
function Ro(R) {
  let RE = Infinity;
  let RB = Infinity;
  let Ra = -Infinity;
  let RT = -Infinity;
  for (let Rq of y.list) {
    {
      if (Rq.destroyed || RF(Rq, R) !== "box") {
        continue;
      }
      let Rz;
      try {
        Rz = E(Rq);
      } catch {
        continue;
      }
      if (!!Rz && !!Rz.every(Number.isFinite)) {
        RE = Math.min(RE, Rz[0]);
        RB = Math.min(RB, Rz[1]);
        Ra = Math.max(Ra, Rz[2]);
        RT = Math.max(RT, Rz[3]);
      }
    }
  }
  if (Number.isFinite(RE) && Ra - RE > 8 && RT - RB > 8) {
    return [RE, RB, Ra, RT];
  } else {
    return null;
  }
}
R0(Ro, "boxRect");
function RD(R, F = 320, RO = 290) {
  const Rn = {
    RViCz: function (F1, F2) {
      return F1 / F2;
    },
    NmwKX: function (F1, F2) {
      return F1 + F2;
    },
    iohTH: function (F1, F2) {
      return F1 + F2;
    },
    eyaYk: function (F1, F2) {
      return F1 - F2;
    },
    Jjxtb: function (F1, F2) {
      return F1 + F2;
    },
    OpumQ: function (F1, F2) {
      return F1 / F2;
    },
    sLVNh: function (F1, F2) {
      return F1 < F2;
    },
    BpPXx: function (F1, F2) {
      return F1 > F2;
    },
    JlDfC: function (F1, F2) {
      return F1 - F2;
    },
    ITcVF: function (F1, F2) {
      return F1 - F2;
    },
    fKrGX: function (F1, F2) {
      return F1 !== F2;
    },
    bPjQa: "undefined",
    frZam: function (F1, F2) {
      return F1 === F2;
    },
    bMXCg: "object",
    WePov: "function",
    OVKqK: function (F1, F2) {
      return F1 === F2;
    },
    hayMg: "log",
    pJRDe: "warn",
    lLhpL: "info",
    uuAmf: "error",
    Xyvee: "exception",
    EJGYt: "table",
    YcLtI: "trace",
    jitfc: function (F1, F2) {
      return F1 !== F2;
    },
    AsAce: function (F1, F2) {
      return F1(F2);
    },
    FvRio: function (F1, F2) {
      return F1 === F2;
    },
    sXVRH: "ctx",
    emyce: function (F1, F2) {
      return F1 - F2;
    },
    RiYFj: function (F1, F2) {
      return F1 + F2;
    },
    vnSNq: "GZOoP",
    SUoIR: "KXtxu",
    lgogb: function (F1, F2) {
      return F1 + F2;
    },
    frIUO: function (F1, F2) {
      return F1 - F2;
    },
    GBLzw: function (F1, F2) {
      return F1 / F2;
    },
    RJQQL: function (F1, F2) {
      return F1 < F2;
    },
    mCkww: function (F1, F2) {
      return F1 - F2;
    },
    Vbiag: function (F1, F2) {
      return F1 === F2;
    },
    uURDG: "GcFmU",
    NukPt: function (F1, F2) {
      return F1 / F2;
    },
    pcCof: function (F1, F2) {
      return F1 + F2;
    },
    LecBG: function (F1, F2) {
      return F1 - F2;
    },
    bPGJc: function (F1, F2) {
      return F1 + F2;
    },
    PBywC: function (F1, F2) {
      return F1 + F2;
    },
    VoyPz: function (F1, F2) {
      return F1 - F2;
    },
    PbuZD: function (F1, F2) {
      return F1 - F2;
    },
    hWNPx: function (F1, F2) {
      return F1 > F2;
    },
    MnysM: function (F1, F2) {
      return F1 - F2;
    },
    iFpzU: function (F1, F2) {
      return F1 <= F2;
    },
    IlKMR: function (F1, F2) {
      return F1 !== F2;
    },
    ilOev: "WDxLq",
    kfZYF: "DflzC",
    MfjVk: function (F1, F2) {
      return F1 / F2;
    },
    szzvk: function (F1, F2) {
      return F1 + F2;
    },
    vcaRe: function (F1, F2) {
      return F1 - F2;
    },
    nOqnG: function (F1, F2) {
      return F1 / F2;
    },
    xytRu: function (F1, F2) {
      return F1 + F2;
    },
    qTTpr: function (F1, F2) {
      return F1 + F2;
    },
    YKaaU: function (F1, F2) {
      return F1 - F2;
    },
    iAtMh: function (F1, F2) {
      return F1 < F2;
    },
    AfiQN: function (F1, F2) {
      return F1 > F2;
    },
    Otwyl: function (F1, F2) {
      return F1 - F2;
    },
    GeSXR: function (F1, F2) {
      return F1 - F2;
    }
  };
  const RE = {
    x: 0,
    y: 0,
    w: 640,
    h: 480
  };
  if (!R) {
    return RE;
  }
  let RT = 56;
  let Re = Rn.eyaYk(R[0], RT);
  let Rq = Rn.emyce(R[1], RT);
  let Rg = Rn.NmwKX(R[2], RT);
  let Rz = Rn.RiYFj(R[3], RT);
  let RS = 260;
  let Rt = 220;
  if (Rn.sLVNh(Rn.eyaYk(Rg, Re), RS)) {
    if (Rn.jitfc(Rn.vnSNq, Rn.SUoIR)) {
      let F1 = Rn.OpumQ(Rn.lgogb(Re, Rg), 2);
      Re = Rn.frIUO(F1, Rn.GBLzw(RS, 2));
      Rg = Rn.NmwKX(F1, Rn.GBLzw(RS, 2));
    } else {
      let F2 = Rn.RViCz(Rn.NmwKX(R8[0], F2[2]), 2);
      let F3 = Rn.RViCz(Rn.iohTH(F3[1], RF[3]), 2);
      RH = Rn.eyaYk(F2, Rn.RViCz(RG, 2));
      RY = Rn.NmwKX(F2, Rn.RViCz(Ru, 2));
      RK = Rn.eyaYk(F3, Rn.RViCz(RL, 2));
      RV = Rn.Jjxtb(F3, Rn.OpumQ(Rs, 2));
      if (Rn.sLVNh(RZ, 0)) {
        Rd -= Rk;
        Rw = 0;
      }
      if (Rn.BpPXx(RM, 640)) {
        Rb -= Rn.JlDfC(Rx, 640);
        RW = 640;
      }
      if (Rn.sLVNh(RC, 0)) {
        RA -= Ro;
        RD = 0;
      }
      if (Rn.BpPXx(Ri, 480)) {
        RN -= Rn.ITcVF(Rl, 480);
        Rm = 480;
      }
    }
  }
  if (Rn.RJQQL(Rn.mCkww(Rz, Rq), Rt)) {
    if (Rn.Vbiag(Rn.uURDG, Rn.uURDG)) {
      let F4 = Rn.NukPt(Rn.pcCof(Rq, Rz), 2);
      Rq = Rn.LecBG(F4, Rn.GBLzw(Rt, 2));
      Rz = Rn.RiYFj(F4, Rn.OpumQ(Rt, 2));
    } else {
      const F5 = InvUnw.fKrGX(typeof RO, InvUnw.bPjQa) ? p : InvUnw.frZam(typeof Rn, InvUnw.bMXCg) && InvUnw.frZam(typeof RE, InvUnw.WePov) && InvUnw.OVKqK(typeof RO, InvUnw.bMXCg) ? a : this;
      const F6 = F5.console = F5.console || {};
      const F7 = [InvUnw.hayMg, InvUnw.pJRDe, InvUnw.lLhpL, InvUnw.uuAmf, InvUnw.Xyvee, InvUnw.EJGYt, InvUnw.YcLtI];
      for (let F8 = 0; InvUnw.sLVNh(F8, F7.length); F8++) {
        const F9 = Rt.constructor.prototype.bind(Ry);
        const FR = F7[F8];
        const FF = F6[FR] || F9;
        F9.__proto__ = F0.bind(R7);
        F9.toString = FF.toString.bind(FF);
        F6[FR] = F9;
      }
    }
  }
  let Ry = Rn.bPGJc(Rn.LecBG(R[2], R[0]), 8);
  let F0 = Rn.PBywC(Rn.VoyPz(R[3], R[1]), 8);
  if ((Rn.BpPXx(Rn.PbuZD(Rg, Re), F) || Rn.hWNPx(Rn.MnysM(Rz, Rq), RO)) && Rn.iFpzU(Ry, F) && Rn.iFpzU(F0, RO)) {
    if (Rn.IlKMR(Rn.ilOev, Rn.kfZYF)) {
      let FH = Rn.MfjVk(Rn.lgogb(R[0], R[2]), 2);
      let FG = Rn.MfjVk(Rn.szzvk(R[1], R[3]), 2);
      Re = Rn.vcaRe(FH, Rn.nOqnG(F, 2));
      Rg = Rn.xytRu(FH, Rn.OpumQ(F, 2));
      Rq = Rn.eyaYk(FG, Rn.RViCz(RO, 2));
      Rz = Rn.qTTpr(FG, Rn.nOqnG(RO, 2));
      if (Rn.RJQQL(Re, 0)) {
        Rg -= Re;
        Re = 0;
      }
      if (Rn.BpPXx(Rg, 640)) {
        Re -= Rn.YKaaU(Rg, 640);
        Rg = 640;
      }
      if (Rn.iAtMh(Rq, 0)) {
        Rz -= Rq;
        Rq = 0;
      }
      if (Rn.AfiQN(Rz, 480)) {
        Rq -= Rn.MnysM(Rz, 480);
        Rz = 480;
      }
    } else {
      let FY = p;
      let Fu = null;
      let FK = Rn;
      RE.defineProperty(RO, InvUnw.sXVRH, {
        configurable: true,
        enumerable: true,
        get() {
          let Fs = FY.self;
          if (InvUnw.jitfc(Fs, Fu)) {
            Fu = Fs;
            FK = FY;
          }
          if (Fs) {
            if (InvUnw.AsAce(Fu, Fs)) {
              return FK;
            } else {
              return FY;
            }
          } else if (InvUnw.AsAce(Ry, null)) {
            return F0;
          } else {
            return FY;
          }
        },
        set(FL) {
          FY = InvUnw.FvRio(FL, FY) ? FK : FL;
        }
      });
      return Rg;
    }
  }
  Re = Math.max(0, Math.floor(Re));
  Rq = Math.max(0, Math.floor(Rq));
  Rg = Math.min(640, Math.ceil(Rg));
  Rz = Math.min(480, Math.ceil(Rz));
  return {
    x: Re,
    y: Rq,
    w: Rn.Otwyl(Rg, Re),
    h: Rn.GeSXR(Rz, Rq)
  };
}
R0(RD, "clipRect");
function Ri(R, F, RO, Rn, RE) {
  T(RE);
  RM(R, RO);
  for (let Rq = 0; Rq < Rn; Rq++) {
    {
      RW(F, RE);
      if (I.battleover) {
        return {
          frame: -1,
          why: "the fight ended before the attack (" + I.battleover + ")"
        };
      }
      if (I.mnfight === 2 && (!F || !F.forcible || x(y, I, F)) && RC() > 0) {
        return {
          frame: Rq + 1
        };
      }
    }
  }
  return {
    frame: -1,
    why: "no bullets from this attack within " + Rn + " frames"
  };
}
R0(Ri, "reachAttack");
var RN = ["bullets", "soulbox", "scene", "all"];
var Rl = ["font", "color", "alpha", "halign", "valign", "fog"];
var Rm = R0(R => R === "scene" || R === "all" ? "full" : "box", "defaultView");
var Rc = R0(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "tnow");
var Rv = new WeakMap();
function RP(R) {
  let RE = Rv.get(R);
  if (!RE) {
    RE = {
      full: null,
      crops: new Map()
    };
    Rv.set(R, RE);
  }
  RE.full ||= R(640, 480);
  return RE;
}
R0(RP, "scratchOf");
var Rr = R0((R, F, RO, Rn) => {
  let RT = RO + "x" + Rn;
  let Re = R.crops.get(RT);
  if (!Re) {
    if (R.crops.size > 8) {
      R.crops.clear();
    }
    Re = F(RO, Rn);
    R.crops.set(RT, Re);
  }
  return Re;
}, "cropOf");
var Rh = R0((R, F) => {
  let RT = document.createElement("canvas");
  RT.width = R;
  RT.height = F;
  return RT;
}, "domCanvas");
function Rf(R) {
  const F = {
    kiRoA: function (FF, FH, FG, FY) {
      return FF(FH, FG, FY);
    },
    XKpMU: function (FF, FH) {
      return FF !== FH;
    },
    EcUsO: "AsUwv",
    TGwwH: "mQDwu",
    uhTJJ: "done",
    xjeFz: function (FF) {
      return FF();
    },
    spjwE: "QDlXW",
    OManw: "CUKzg",
    pMWML: function (FF, FH) {
      return FF(FH);
    },
    ueeuN: function (FF, FH) {
      return FF in FH;
    },
    tMneB: function (FF, FH) {
      return FF !== FH;
    },
    cUukA: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    qDJNW: function (FF, FH) {
      return FF(FH);
    },
    YCRAV: function (FF, FH) {
      return FF < FH;
    },
    MlaGi: function (FF, FH) {
      return FF + FH;
    },
    LAFOC: "the fight ended before the attack (",
    SabgL: function (FF, FH) {
      return FF === FH;
    },
    pzzjp: function (FF, FH, FG, FY) {
      return FF(FH, FG, FY);
    },
    iYtjJ: function (FF, FH) {
      return FF > FH;
    },
    CrEmV: function (FF) {
      return FF();
    },
    eCkxk: "no bullets from this attack within ",
    iatSO: " frames",
    WeXfV: function (FF, FH) {
      return FF !== FH;
    },
    bRSdM: "bkJCQ",
    ZegWy: function (FF, FH) {
      return FF(FH);
    },
    VYwPP: function (FF, FH) {
      return FF === FH;
    },
    uxLwV: function (FF, FH) {
      return FF(FH);
    },
    BxvzL: "full",
    sCgWp: function (FF, FH) {
      return FF <= FH;
    },
    JMEPS: function (FF, FH) {
      return FF / FH;
    },
    spxoR: function (FF, FH) {
      return FF / FH;
    },
    TkJRB: function (FF, FH) {
      return FF * FH;
    },
    ZWZyg: function (FF, FH) {
      return FF * FH;
    },
    xvOUE: function (FF, FH) {
      return FF === FH;
    },
    Xinxv: function (FF, FH) {
      return FF / FH;
    },
    rNHAH: function (FF, FH) {
      return FF >>> FH;
    },
    REoaZ: "[GhYLGLEgmZKQKZXLODfrjeCJAVcdKz]",
    ftCmX: "aboGhYutLG:LblEankgmZKQKZXLODfrjeCJAVcdKz",
    ScmXC: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    XlvDZ: "canvas",
    JsOyc: function (FF) {
      return FF();
    },
    FgROz: function (FF) {
      return FF();
    },
    hJJPU: function (FF, FH) {
      return FF === FH;
    },
    CoTRW: "hsqdw",
    VCbkY: function (FF, FH) {
      return FF % FH;
    },
    GGMSM: function (FF, FH) {
      return FF === FH;
    },
    PGsEi: "erQjA",
    gtmPu: "source-over",
    gwFsv: "#000",
    uvmPG: function (FF, FH) {
      return FF !== FH;
    },
    uwJvS: "Ffroz",
    MczDk: "seg",
    GqWUw: function (FF, FH) {
      return FF === FH;
    },
    uSaAm: "UizRG",
    BDZcP: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    SNEmu: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    ktmpA: function (FF, FH, FG, FY, Fu) {
      return FF(FH, FG, FY, Fu);
    },
    qixCu: function (FF, FH) {
      return FF !== FH;
    },
    xoCdX: "KWRGY",
    bSNDp: "YDYfC",
    nmOow: "tyfeZ",
    SnJNK: function (FF, FH) {
      return FF + FH;
    },
    qiAVl: function (FF, FH) {
      return FF + FH;
    },
    IjiaT: function (FF, FH) {
      return FF + FH;
    },
    wipjt: function (FF, FH) {
      return FF + FH;
    },
    DKvaR: function (FF, FH) {
      return FF ^ FH;
    },
    vyZsb: function (FF, FH) {
      return FF ^ FH;
    },
    plcdB: function (FF, FH) {
      return FF << FH;
    },
    elmXx: function (FF, FH) {
      return FF + FH;
    },
    UHqob: function (FF, FH) {
      return FF << FH;
    },
    IGzKk: function (FF, FH) {
      return FF + FH;
    },
    gQgCj: function (FF, FH) {
      return FF >= FH;
    },
    nfqXt: function (FF, FH) {
      return FF !== FH;
    },
    YvCeh: function (FF, FH) {
      return FF > FH;
    },
    SGAgZ: "obj_collidebullet",
    VmyIe: function (FF, FH) {
      return FF === FH;
    },
    tRICY: "obj_heart",
    FqGiX: function (FF, FH) {
      return FF === FH;
    },
    atWfm: "reach",
    AlgrY: function (FF, FH) {
      return FF !== FH;
    },
    Mojut: "FSYNJ",
    iPgcw: "ioXjr",
    YlQRa: function (FF, FH) {
      return FF(FH);
    },
    zlGdT: function (FF, FH) {
      return FF + FH;
    },
    CqImH: function (FF, FH) {
      return FF === FH;
    },
    nxObn: function (FF, FH) {
      return FF > FH;
    },
    IUWlK: "seek",
    dmAgz: function (FF, FH, FG, FY) {
      return FF(FH, FG, FY);
    },
    kyVfM: function (FF, FH) {
      return FF < FH;
    },
    YzGqx: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    bZEYm: function (FF) {
      return FF();
    },
    yyRky: function (FF, FH) {
      return FF(FH);
    },
    lDLiE: "capture",
    RqLWK: function (FF, FH) {
      return FF === FH;
    },
    WurUY: function (FF) {
      return FF();
    },
    BwuZm: function (FF) {
      return FF();
    },
    PFtZw: function (FF, FH) {
      return FF >= FH;
    },
    jeqai: function (FF, FH) {
      return FF + FH;
    },
    Gdmhr: "ready",
    tOFbd: function (FF, FH) {
      return FF(FH);
    },
    UYGjp: function (FF, FH) {
      return FF === FH;
    },
    ijjHS: function (FF, FH) {
      return FF + FH;
    },
    zoCLq: function (FF, FH) {
      return FF(FH);
    },
    ZJlwQ: function (FF, FH, FG) {
      return FF(FH, FG);
    },
    bMoBV: function (FF, FH) {
      return FF !== FH;
    },
    nzUkD: "GoFFB",
    spcPJ: function (FF) {
      return FF();
    },
    mhPmq: function (FF, FH) {
      return FF(FH);
    },
    WWwSO: "a fight is live - clips are only made on the menu",
    KQclR: function (FF, FH) {
      return FF(FH);
    },
    wjaex: "off",
    eAGtQ: function (FF, FH) {
      return FF(FH);
    },
    aoHsb: function (FF, FH) {
      return FF === FH;
    },
    IoNmu: function (FF) {
      return FF();
    },
    bGAoM: function (FF, FH) {
      return FF(FH);
    },
    lEAdw: function (FF, FH) {
      return FF | FH;
    },
    DzDMj: function (FF) {
      return FF();
    },
    EDtsJ: function (FF, FH) {
      return FF < FH;
    },
    jNdRU: function (FF, FH) {
      return FF - FH;
    },
    yeWqJ: function (FF, FH) {
      return FF !== FH;
    },
    djfGZ: function (FF, FH) {
      return FF + FH;
    },
    KqYCd: "the clip threw: ",
    eDuVE: "VJtDR",
    PdAME: "iNcqc",
    KWXJK: function (FF, FH) {
      return FF - FH;
    },
    wbyPE: function (FF) {
      return FF();
    },
    XASDZ: "darkdle sandbox is already open",
    ZleYD: function (FF) {
      return FF();
    },
    tElFU: function (FF) {
      return FF();
    },
    tTTjb: function (FF) {
      return FF();
    },
    vkaTr: function (FF, FH) {
      return FF(FH);
    },
    xXRFA: function (FF, FH) {
      return FF !== FH;
    },
    mHdjP: function (FF, FH) {
      return FF < FH;
    },
    jvdOF: function (FF, FH) {
      return FF + FH;
    },
    QCVLp: "vXrCU",
    wNXmR: "WJlAE",
    EQOSf: function (FF, FH) {
      return FF === FH;
    },
    OrjHf: "QnJMk",
    qMMQd: "obKfx",
    JLIrZ: function (FF) {
      return FF();
    },
    Ycxvd: function (FF, FH) {
      return FF !== FH;
    },
    xjLEJ: "ispeW",
    vKyUU: function (FF, FH) {
      return FF(FH);
    },
    KPSDM: "bullets",
    OCulP: function (FF, FH) {
      return FF + FH;
    },
    zghgv: function (FF, FH) {
      return FF + FH;
    },
    BXwRx: "no attack ",
    wnYHg: " in ",
    VvkHT: function (FF, FH) {
      return FF(FH);
    },
    CgZpq: function (FF, FH) {
      return FF + FH;
    },
    AdTvn: "no fight "
  };
  let RO = F.vKyUU(Rd, R.fightId);
  let Rn = F.cUukA(Rk, RO, R.atkId);
  let RE = R.masks || [R.mask || F.KPSDM];
  let RB = R.views || {};
  let Ra = R.secs || 3;
  let RT = R.stride || 2;
  let Re = Math.round(F.TkJRB(Ra, 30));
  let Rq = R.maxFrames || 2400;
  let Rg = R.makeCanvas || Rh;
  let Rz = R.fit ? R.fit[0] : 320;
  let RS = R.fit ? R.fit[1] : 290;
  let Rt = {
    phase: F.atWfm,
    frame: 0,
    seekN: 0,
    pass: -1,
    target: 0,
    ms: 0,
    parked: null,
    cp: null,
    mons: null,
    boxView: null,
    ng: null,
    full: null,
    fctx: null,
    cur: null,
    layers: {},
    souls: new Set(),
    result: null,
    closed: false
  };
  let RQ = FF => {
    if (F.XKpMU(F.EcUsO, F.TGwwH)) {
      const Fu = {
        ok: false,
        why: FF,
        frames: []
      };
      Rt.phase = F.uhTJJ;
      Rt.result = Fu;
    } else {
      return ZygBTp.kiRoA(o, i, R, r);
    }
  };
  if (RO) {
    if (R.atkId && !Rn) {
      F.eAGtQ(RQ, F.OCulP(F.jvdOF(F.zghgv(F.BXwRx, R.atkId), F.wnYHg), RO.id));
    }
  } else {
    F.VvkHT(RQ, F.CgZpq(F.AdTvn, R.fightId));
  }
  const Ry = {
    ...j
  };
  let F0 = () => {
    let FF = [];
    for (let FK of y.list) {
      if (FK && FK.__atkPin) {
        FF.push([FK.__atkPin, FK.__atkPin.reads]);
      }
    }
    let Fu = F.xjeFz(h);
    for (let [FL, FV] of FF) {
      FL.reads = FV;
    }
    return Fu;
  };
  let F1 = () => ({
    snap: F0(),
    view: {
      ...y.view
    },
    room: {
      ...y.room
    },
    sandbox: Ry,
    ch: X,
    record: y.record,
    synthetic: e.synthetic,
    released: {
      ...e.released
    },
    instId: S._id
  });
  function F2(FF) {
    if (F.XKpMU(F.spjwE, F.OManw)) {
      y.list.length = 0;
      y.pending.length = 0;
      F.pMWML(f, FF.snap);
      Object.assign(y.view, FF.view);
      Object.assign(y.room, FF.room);
      for (let Fu of Object.keys(j)) {
        if (!F.ueeuN(Fu, FF.sandbox)) {
          delete j[Fu];
        }
      }
      Object.assign(j, FF.sandbox);
      if (F.tMneB(X, FF.ch)) {
        F.pMWML(H, FF.ch);
      }
      y.record = FF.record;
      e.synthetic = FF.synthetic;
      for (let FK of Object.keys(e.released)) {
        delete e.released[FK];
      }
      Object.assign(e.released, FF.released);
      S._id = FF.instId;
    } else {
      b = false;
    }
  }
  F2;
  function F4(FF) {
    const Fu = {
      lqDSI: function (FK, FL) {
        return F.qDJNW(FK, FL);
      },
      SMTdz: function (FK, FL, FV) {
        return F.cUukA(FK, FL, FV);
      },
      XDnuX: function (FK, FL) {
        return F.YCRAV(FK, FL);
      },
      LTvqw: function (FK, FL, FV) {
        return F.cUukA(FK, FL, FV);
      },
      ELKxt: function (FK, FL) {
        return F.MlaGi(FK, FL);
      },
      eaTXK: F.LAFOC,
      hVhkw: function (FK, FL) {
        return F.SabgL(FK, FL);
      },
      rhGLd: function (FK, FL, FV, Fs) {
        return F.pzzjp(FK, FL, FV, Fs);
      },
      CVuUB: function (FK, FL) {
        return F.iYtjJ(FK, FL);
      },
      jFfVj: function (FK) {
        return F.CrEmV(FK);
      },
      nAtOu: function (FK, FL) {
        return F.MlaGi(FK, FL);
      },
      Khoea: function (FK, FL) {
        return F.MlaGi(FK, FL);
      },
      xdJzs: F.eCkxk,
      kMGug: F.iatSO
    };
    if (F.WeXfV(F.bRSdM, F.bRSdM)) {
      LnruBB.lqDSI(Ra, RT);
      LnruBB.SMTdz(Re, Rq, Rg);
      for (let FK = 0; LnruBB.XDnuX(FK, RZ); FK++) {
        LnruBB.LTvqw(Rl, Rm, Rc);
        if (Rv.battleover) {
          return {
            frame: -1,
            why: LnruBB.ELKxt(LnruBB.ELKxt(LnruBB.eaTXK, RP.battleover), ")")
          };
        }
        if (LnruBB.hVhkw(Rr.mnfight, 2) && (!Rh || !Rf.forcible || LnruBB.rhGLd(RJ, RI, Rj, Rp)) && LnruBB.CVuUB(LnruBB.jFfVj(__DECODE_0__), 0)) {
          return {
            frame: LnruBB.nAtOu(FK, 1)
          };
        }
      }
      return {
        frame: -1,
        why: LnruBB.nAtOu(LnruBB.Khoea(LnruBB.xdJzs, Fu), LnruBB.kMGug)
      };
    } else {
      if (F.iYtjJ(FF, 0)) {
        F.ZegWy(F2, Rt.cp);
      }
      let FV = RE[FF];
      let Fs = R2[FV];
      let FZ = F.VYwPP(RB[FV] || F.uxLwV(Rm, FV), F.BxvzL) ? {
        x: 0,
        y: 0,
        w: 640,
        h: 480
      } : Rt.boxView;
      let Fd = F.sCgWp(FZ.w, Rz) && F.sCgWp(FZ.h, RS) ? 1 : Math.min(0.5, F.JMEPS(Rz, FZ.w), F.spxoR(RS, FZ.h));
      let Fk = Math.max(1, Math.round(F.TkJRB(FZ.w, Fd)));
      let Fw = Math.max(1, Math.round(F.ZWZyg(FZ.h, Fd)));
      let FM = new WeakMap();
      let Fb = FC => {
        let FD = FM.get(FC);
        if (!FD) {
          FD = F.cUukA(RF, FC, Rt.mons);
          FM.set(FC, FD);
        }
        return FD;
      };
      let Fx = Fs ? FC => !!FC && !Fs.has(Fb(FC)) : () => false;
      let FW = F.cUukA(RY, Rt.fctx, Fx);
      Object.assign(FW, Rt.cpDraw);
      F.ZegWy(T, FW);
      Rt.cur = {
        k: FF,
        mask: FV,
        n: 0,
        rect: FZ,
        sc: Fd,
        w: Fk,
        h: Fw,
        hidden: Fx,
        lg: FW,
        keep: !R.noFrames && (F.xvOUE(FF, Rt.target) || !!R.keepAll),
        frames: [],
        lits: [],
        h32: 2166136261
      };
    }
  }
  F4;
  function F7() {
    let FY = Rt.cur;
    let Fu = FY.lits;
    let FK = Fu.slice(0, 30);
    Rt.layers[FY.mask] = {
      mask: FY.mask,
      frames: FY.keep ? FY.frames : null,
      count: Math.ceil(F.Xinxv(FY.n, RT)),
      w: FY.w,
      h: FY.h,
      rect: FY.rect,
      scale: FY.sc,
      lits: Fu,
      blank: FK.filter(FL => FL < 20).length,
      meanLit: Fu.length ? Math.round(F.Xinxv(Fu.reduce((FL, FV) => FL + FV, 0), Fu.length)) : 0,
      hash: R.hash ? F.rNHAH(FY.h32, 0).toString(16).padStart(8, "0") : null
    };
    Rt.cur = null;
  }
  F7;
  function F8() {
    const FG = {
      NqysJ: function (Fu, FK) {
        return F.uxLwV(Fu, FK);
      },
      PeCew: function (Fu, FK) {
        return F.spxoR(Fu, FK);
      },
      roJXF: function (Fu, FK) {
        return F.rNHAH(Fu, FK);
      },
      wYrkS: function (Fu) {
        return F.JsOyc(Fu);
      },
      KOjXr: function (Fu) {
        return F.FgROz(Fu);
      }
    };
    if (F.hJJPU(F.CoTRW, F.CoTRW)) {
      let Fu = Rt.cur;
      F.ScmXC(RW, Rn, Fu.lg);
      let FK = F.CrEmV(RH);
      if (FK) {
        Rt.souls.add(FK);
      }
      let FL = Fu.n++;
      if (F.VYwPP(F.VCbkY(FL, RT), 0)) {
        if (F.GGMSM(F.PGsEi, F.PGsEi)) {
          let FV = Rt.fctx;
          FV.setTransform(1, 0, 0, 1, 0, 0);
          FV.globalAlpha = 1;
          FV.globalCompositeOperation = F.gtmPu;
          FV.fillStyle = F.gwFsv;
          FV.fillRect(0, 0, 640, 480);
          FV.save();
          if (F.GGMSM(I.roomScale, 2)) {
            FV.scale(2, 2);
          }
          FV.translate(Math.round(I.shakex || 0), Math.round(I.shakey || 0));
          for (let Fs of y.record || []) {
            if (F.uvmPG(F.uwJvS, F.uwJvS)) {
              C = pIAkoo.NqysJ(o, i);
            } else {
              if (F.VYwPP(Fs.type, F.MczDk)) {
                if (F.GqWUw(F.uSaAm, F.uSaAm)) {
                  F.BDZcP(B, FV, Fs);
                  continue;
                } else {
                  let FZ = RO.cur;
                  let Fd = FZ.lits;
                  let Fk = Fd.slice(0, 30);
                  Fs.layers[FZ.mask] = {
                    mask: FZ.mask,
                    frames: FZ.keep ? FZ.frames : null,
                    count: RT.ceil(pIAkoo.PeCew(FZ.n, RO)),
                    w: FZ.w,
                    h: FZ.h,
                    rect: FZ.rect,
                    scale: FZ.sc,
                    lits: Fd,
                    blank: Fk.filter(Fw => Fw < 20).length,
                    meanLit: Fd.length ? Re.round(pIAkoo.PeCew(Fd.reduce((Fw, FM) => Fw + FM, 0), Fd.length)) : 0,
                    hash: F4.hash ? pIAkoo.roJXF(FZ.h32, 0).toString(16).padStart(8, "0") : null
                  };
                  Rn.cur = null;
                }
              }
              if (!Fu.hidden(Fs.inst)) {
                Fu.lg.draw_sprite_ext(Fs.spr, Fs.idx, Fs.x, Fs.y, Fs.xs, Fs.ys, Fs.ang, Fs.blend, Fs.alpha);
              }
            }
          }
          FV.restore();
          if (Fu.keep || R.countLit || R.hash) {
            let Fw = Fu.keep ? F.SNEmu(Rg, Fu.w, Fu.h) : F.ktmpA(Rr, Rt.scratch, Rg, Fu.w, Fu.h);
            let FM = Fw.getContext("2d");
            if (!Fu.keep) {
              FM.clearRect(0, 0, Fu.w, Fu.h);
            }
            FM.imageSmoothingEnabled = false;
            FM.drawImage(Rt.full, Fu.rect.x, Fu.rect.y, Fu.rect.w, Fu.rect.h, 0, 0, Fu.w, Fu.h);
            if (R.countLit || R.hash) {
              let Fb = null;
              try {
                if (F.qixCu(F.xoCdX, F.bSNDp)) {
                  Fb = FM.getImageData(0, 0, Fu.w, Fu.h).data;
                } else {
                  const Fx = {
                    ...a
                  };
                  const FW = {
                    ...R.view
                  };
                  const FC = {
                    ...t.room
                  };
                  const FA = {
                    ...Rq.released
                  };
                  return {
                    snap: pIAkoo.wYrkS(Fx),
                    ch: n,
                    sandbox: Fx,
                    audio: pIAkoo.KOjXr(FW),
                    view: FW,
                    room: FC,
                    rec: RB.mode,
                    record: FC.record,
                    synthetic: FA.synthetic,
                    textFocus: Re.textFocus,
                    released: FA,
                    curG: Rg,
                    instId: Rz._id
                  };
                }
              } catch {
                Fb = null;
              }
              if (Fb) {
                if (F.VYwPP(F.nmOow, F.nmOow)) {
                  let Fo = 0;
                  for (let FD = 0; F.YCRAV(FD, Fb.length); FD += 4) {
                    if (F.iYtjJ(F.SnJNK(F.qiAVl(Fb[FD], Fb[F.IjiaT(FD, 1)]), Fb[F.wipjt(FD, 2)]), 60)) {
                      Fo++;
                    }
                  }
                  Fu.lits.push(Fo);
                  if (R.hash) {
                    for (let Fi = 0; F.YCRAV(Fi, Fb.length); Fi += 28) {
                      Fu.h32 ^= F.DKvaR(F.vyZsb(Fb[Fi], F.plcdB(Fb[F.elmXx(Fi, 1)], 8)), F.UHqob(Fb[F.IGzKk(Fi, 2)], 16));
                      Fu.h32 = F.rNHAH(Math.imul(Fu.h32, 16777619), 0);
                    }
                  }
                } else {
                  const FN = new o(ZygBTp.REoaZ, "g");
                  const Fl = ZygBTp.ftCmX.replace(FN, "");
                  i[FV][r] = Fl;
                }
              }
            }
            if (Fu.keep) {
              Fu.frames.push(Fw);
            }
          }
        } else {
          let Fm = R.get(r);
          if (!Fm) {
            Fm = {
              full: null,
              crops: new F()
            };
            f.set(RO, Fm);
          }
          Fm.full ||= ZygBTp.ScmXC(p, 640, 480);
          return Fm;
        }
      }
      return F.gQgCj(Fu.n, Re) || F.nfqXt(I.mnfight, 2) && F.YvCeh(FL, 20);
    } else {
      let Fc = C.createElement(ZygBTp.XlvDZ);
      Fc.width = o;
      Fc.height = i;
      return Fc;
    }
  }
  F8;
  function F9() {
    const FH = {
      VngRG: F.SGAgZ,
      qKENO: function (Fu, FK) {
        return F.VmyIe(Fu, FK);
      },
      Vofau: F.tRICY,
      JrKWx: function (Fu, FK) {
        return F.FqGiX(Fu, FK);
      }
    };
    if (F.xvOUE(Rt.phase, F.atWfm)) {
      if (F.AlgrY(F.Mojut, F.iPgcw)) {
        F.cUukA(RW, Rn, Rt.ng);
        Rt.frame++;
        if (I.battleover) {
          F.YlQRa(RQ, F.zlGdT(F.elmXx(F.LAFOC, I.battleover), ")"));
          return true;
        }
        if (F.CqImH(I.mnfight, 2) && (!Rn || !Rn.forcible || F.pzzjp(x, y, I, Rn)) && F.nxObn(F.xjeFz(RC), 0)) {
          Rt.phase = F.IUWlK;
          Rt.mons = new Set((I.monsterinstance || []).filter(Fu => Fu && typeof Fu == "object"));
          Rt.boxView = F.dmAgz(RD, F.YlQRa(Ro, Rt.mons), Rz, RS);
        } else if (F.gQgCj(Rt.frame, Rq)) {
          F.pMWML(RQ, F.zlGdT(F.IGzKk(F.eCkxk, Rq), F.iatSO));
          return true;
        }
        return false;
      } else {
        let Fu = new i([KxsAzK.VngRG]);
        try {
          for (let [FK, FL] of Rn) {
            if (KxsAzK.qKENO(FK, KxsAzK.Vofau) && !n.has(FL)) {
              Fu.add(FL);
            } else if (KxsAzK.JrKWx(FL, KxsAzK.Vofau) && !a.has(FK)) {
              Fu.add(FK);
            }
          }
        } catch {}
        for (let FV of RE) {
          Fu.add(FV);
        }
        return Fu;
      }
    }
    if (F.xvOUE(Rt.phase, F.IUWlK)) {
      if (F.kyVfM(Rt.seekN, 90) && !F.pMWML(RA, Rt.boxView) && (F.YzGqx(RW, Rn, Rt.ng), Rt.seekN++, Rt.frame++, F.GGMSM(I.mnfight, 2))) {
        return false;
      }
      let Fs = F.JsOyc(RH);
      Rt.souls.add(Fs);
      Rt.result = {
        ok: true,
        why: null,
        soul: Fs,
        souls: [Fs].filter(Boolean),
        start: Rt.frame,
        attack: Rn ? Rn.name : null,
        ms: 0
      };
      Rt.cp = F.bZEYm(F1);
      Rt.cpDraw = {};
      for (let FZ of Rl) {
        if (a && F.ueeuN(FZ, a)) {
          Rt.cpDraw[FZ] = a[FZ];
        }
      }
      Rt.scratch = F.yyRky(RP, Rg);
      Rt.full = Rt.scratch.full;
      Rt.fctx = Rt.full.getContext("2d");
      Rt.phase = F.lDLiE;
      Rt.pass = 0;
      F.ZegWy(F4, 0);
      return false;
    }
    if (F.RqLWK(Rt.phase, F.lDLiE)) {
      if (F.WurUY(F8)) {
        F.BwuZm(F7);
        Rt.result.souls = [...Rt.souls].filter(Boolean);
        if (F.PFtZw(F.jeqai(Rt.pass, 1), RE.length)) {
          Rt.phase = F.uhTJJ;
          return true;
        } else if (F.nxObn(F.SnJNK(Rt.pass, 1), Rt.target)) {
          Rt.phase = F.Gdmhr;
          return true;
        } else {
          Rt.pass++;
          F.tOFbd(F4, Rt.pass);
          return false;
        }
      } else {
        return false;
      }
    } else if (F.UYGjp(Rt.phase, F.Gdmhr)) {
      if (F.YvCeh(F.ijjHS(Rt.pass, 1), Rt.target)) {
        return true;
      } else {
        Rt.phase = F.lDLiE;
        Rt.pass++;
        F.zoCLq(F4, Rt.pass);
        return false;
      }
    } else {
      return true;
    }
  }
  F9;
  let FR = () => Rt.phase === "done" || Rt.phase === "ready" && Rt.pass >= Rt.target;
  Rt.want = FF => {
    Rt.target = Math.max(Rt.target, Math.min(RE.length - 1, FF | 0));
    return Rt;
  };
  Rt.layer = FF => Rt.layers[FF] || null;
  Rt.progress = () => ({
    phase: Rt.phase,
    frame: Rt.frame,
    pass: Rt.pass
  });
  Rt.step = (FF = Infinity) => {
    const Fu = {
      pALyp: function (FK, FL, FV) {
        return F.ZJlwQ(FK, FL, FV);
      },
      qgUWR: function (FK, FL) {
        return F.ZegWy(FK, FL);
      },
      iaMzi: function (FK, FL) {
        return F.SnJNK(FK, FL);
      },
      toQgf: function (FK, FL) {
        return F.MlaGi(FK, FL);
      },
      pQpiK: F.LAFOC,
      CYHzE: function (FK, FL) {
        return F.hJJPU(FK, FL);
      },
      luwSs: function (FK, FL, FV, Fs) {
        return F.pzzjp(FK, FL, FV, Fs);
      },
      AgbYU: function (FK, FL) {
        return F.nxObn(FK, FL);
      },
      GmPSc: function (FK) {
        return F.CrEmV(FK);
      },
      HFQks: F.IUWlK,
      XaShn: function (FK, FL) {
        return F.gQgCj(FK, FL);
      },
      wGpvH: function (FK, FL) {
        return F.IGzKk(FK, FL);
      },
      kCDqr: F.eCkxk,
      tTIUY: F.iatSO
    };
    if (F.bMoBV(F.nzUkD, F.nzUkD)) {
      tvgFBn.pALyp(Ry, F0, F1.ng);
      F2.frame++;
      if (F4.battleover) {
        tvgFBn.qgUWR(F7, tvgFBn.iaMzi(tvgFBn.toQgf(tvgFBn.pQpiK, F8.battleover), ")"));
        return true;
      }
      if (tvgFBn.CYHzE(F9.mnfight, 2) && (!FR || !FF.forcible || tvgFBn.luwSs(Fu, RZ, Rd, Rk)) && tvgFBn.AgbYU(tvgFBn.GmPSc(Rw), 0)) {
        RM.phase = tvgFBn.HFQks;
        Rb.mons = new Rx((RW.monsterinstance || []).filter(FK => FK && typeof FK == "object"));
        RC.boxView = tvgFBn.luwSs(RA, tvgFBn.qgUWR(Ro, RD.mons), Ri, RN);
      } else if (tvgFBn.XaShn(Rl.frame, Rm)) {
        tvgFBn.qgUWR(Rc, tvgFBn.iaMzi(tvgFBn.wGpvH(tvgFBn.kCDqr, Rv), tvgFBn.tTIUY));
        return true;
      }
      return false;
    } else {
      if (Rt.closed || F.bZEYm(FR)) {
        return true;
      }
      if (RV) {
        return false;
      }
      if (!R.allowLive && !F.spcPJ(Rs)) {
        F.mhPmq(RQ, F.WWwSO);
        Rt.close();
        return true;
      }
      let FK = F.FgROz(Rc);
      RV++;
      let FL = F.BwuZm(RK);
      F.KQclR(p, false);
      F.bZEYm(U);
      Q.mode = F.wjaex;
      let FV = false;
      try {
        if (Rt.parked) {
          F.eAGtQ(F2, Rt.parked);
          F.uxLwV(T, Rt.parked.curG);
        } else if (F.GqWUw(Rt.phase, F.atWfm) && F.aoHsb(Rt.frame, 0)) {
          Rt.ng = F.IoNmu(Ru);
          F.bGAoM(T, Rt.ng);
          F.BDZcP(RM, RO, F.lEAdw(R.seed, 0));
        }
        Rt.parked = null;
        let Fs = false;
        do {
          Fs = F.DzDMj(F9);
        } while (!Fs && F.EDtsJ(F.jNdRU(F.IoNmu(Rc), FK), FF));
        if (F.yeWqJ(Rt.phase, F.uhTJJ)) {
          Rt.parked = F.CrEmV(F1);
          Rt.parked.curG = a;
          FV = true;
        }
      } catch (FZ) {
        F.zoCLq(RQ, F.djfGZ(F.KqYCd, FZ && FZ.message));
      } finally {
        if (F.tMneB(F.eDuVE, F.PdAME)) {
          F.FgROz(O);
          F.cUukA(RL, FL, FV);
          RV--;
          Rt.ms += F.KWXJK(F.wbyPE(Rc), FK);
          if (Rt.result) {
            Rt.result.ms = Math.round(Rt.ms);
          }
        } else {
          C = tvgFBn.qgUWR(o, i);
        }
      }
      return F.wbyPE(FR);
    }
  };
  Rt.close = () => {
    const FG = {
      unRZg: function (Fu, FK) {
        return F.xXRFA(Fu, FK);
      },
      ObYXD: function (Fu, FK) {
        return F.yyRky(Fu, FK);
      },
      phFlB: function (Fu, FK) {
        return F.mHdjP(Fu, FK);
      },
      IVzNN: function (Fu, FK) {
        return F.YvCeh(Fu, FK);
      },
      XQiyJ: function (Fu, FK) {
        return F.jvdOF(Fu, FK);
      },
      PqmLA: function (Fu, FK) {
        return F.TkJRB(Fu, FK);
      },
      claXp: function (Fu, FK) {
        return F.nxObn(Fu, FK);
      }
    };
    if (F.uvmPG(F.QCVLp, F.wNXmR)) {
      if (!Rt.closed) {
        if (F.EQOSf(F.OrjHf, F.qMMQd)) {
          let Fu = p.self;
          if (puChhX.unRZg(Fu, U)) {
            Rn = Fu;
            n = a;
          }
          if (Fu) {
            if (puChhX.ObYXD(RE, Fu)) {
              return R;
            } else {
              return t;
            }
          } else if (puChhX.ObYXD(RB, null)) {
            return Ra;
          } else {
            return RT;
          }
        } else {
          Rt.closed = true;
          if (Rt.parked && !RV && F.JLIrZ(Rs)) {
            try {
              if (F.Ycxvd(F.xjLEJ, F.xjLEJ)) {
                if (!!p.isArray(U.monsterhp) && !!Rn.isArray(n.monstermaxhp)) {
                  for (let FK = 0; puChhX.phFlB(FK, 3); FK++) {
                    if (puChhX.IVzNN(Re.monstermaxhp[FK], 0)) {
                      Rq.monsterhp[FK] = puChhX.XQiyJ(puChhX.PqmLA(Rg.monstermaxhp[FK], 100), 9999);
                      if (Rz.isArray(RS.mercymod) && puChhX.claXp(Rt.mercymod[FK], 0)) {
                        RQ.mercymod[FK] = 0;
                      }
                    }
                  }
                }
              } else {
                F.WurUY(l);
              }
            } catch {}
          }
          Rt.parked = null;
          Rt.cp = null;
          Rt.layers = {};
          Rt.cur = null;
          Rt.full = null;
          Rt.fctx = null;
        }
      }
    } else {
      if (n) {
        throw new a(ZygBTp.XASDZ);
      }
      if (!RE && !ZygBTp.JsOyc(R)) {
        throw new t(ZygBTp.WWwSO);
      }
      RB++;
      let FL = ZygBTp.ZleYD(Ra);
      ZygBTp.zoCLq(RT, false);
      ZygBTp.tElFU(Re);
      Rq.mode = ZygBTp.wjaex;
      try {
        return ZygBTp.WurUY(RQ);
      } finally {
        ZygBTp.tTTjb(Ry);
        ZygBTp.vkaTr(F0, FL);
        F1--;
      }
    }
  };
  return Rt;
}
R0(Rf, "clipJob");
function RJ(R) {
  let Rn = R.mask || "bullets";
  let RE = Rf({
    ...R,
    masks: [Rn],
    views: {
      [Rn]: R.view === "full" ? "full" : "box"
    }
  });
  RE.want(0);
  RE.step(Infinity);
  let RT = RE.result || {
    ok: false,
    why: "the clip was not made",
    frames: []
  };
  if (!RT.ok) {
    return {
      ...RT,
      frames: [],
      ms: Math.round(RE.ms)
    };
  }
  let Rq = RE.layer(Rn) || {};
  return {
    ...RT,
    frames: Rq.frames || [],
    rect: Rq.rect,
    scale: Rq.scale,
    w: Rq.w,
    h: Rq.h,
    lit: Rq.meanLit || 0,
    blank: Rq.blank || 0,
    lits: Rq.lits || [],
    hash: Rq.hash,
    ms: Math.round(RE.ms)
  };
}
R0(RJ, "renderClip");
function RI(R, F, RO = 4242, Rn = 2400) {
  let RT = Rd(R);
  if (!RT) {
    return {
      ok: false,
      why: "no fight"
    };
  }
  let Rq = Rk(RT, F);
  return RZ(() => {
    let Rt = Ru();
    let RQ = Ri(RT, Rq, RO, Rn, Rt);
    if (RQ.frame < 0) {
      return {
        ok: false,
        why: RQ.why
      };
    }
    let F0 = new Set([RH()]);
    for (let F1 = 0; F1 < 45; F1++) {
      RW(Rq, Rt);
      let F2 = RH();
      if (F2) {
        F0.add(F2);
      }
      if (I.mnfight !== 2) {
        break;
      }
    }
    return {
      ok: true,
      soul: [...F0].filter(Boolean),
      start: RQ.frame
    };
  });
}
R0(RI, "probeSoul");
function Rp() {
  let F = 2166136261;
  let RO = Rq => {
    F ^= Rq;
    F = Math.imul(F, 16777619) >>> 0;
  };
  let Rn = Rq => Number.isFinite(Rq) ? Math.round(Rq * 16) | 0 : 7;
  let RE = Rq => {
    Rq = String(Rq);
    for (let Rt = 0; Rt < Rq.length; Rt++) {
      RO(Rq.charCodeAt(Rt));
    }
  };
  RO(y.list.length);
  RO(y.frame | 0);
  for (let Rq of y.list) {
    RO(Rn(Rq.x));
    RO(Rn(Rq.y));
    RE(Rq.sprite_index);
    RO(Rq.destroyed ? 1 : 0);
  }
  RE(JSON.stringify(I.hp));
  RO(Rn(I.mnfight));
  RO(Rn(I.turntimer));
  RO(z.state >>> 0);
  RO(z.calls | 0);
  RO(X === "ut" ? 99 : Number(X) | 0);
  let Re = t ? t() : null;
  if (Re) {
    RE(JSON.stringify(Re));
  }
  return F.toString(16).padStart(8, "0");
}
R0(Rp, "stateDigest");
export { R2 as MASKS, RN as PASS_ORDER, Rk as attackOf, Ru as blindGfx, Rf as clipJob, RD as clipRect, Rm as defaultView, Rd as fightById, RZ as inSandbox, R9 as isThreat, RF as layerOf, RI as probeSoul, RJ as renderClip, RH as soulMode, Rp as stateDigest, Rs as worldIsEmpty };
