const q = function () {
  const QG = {
    sPjAb: function (QF, Qn) {
      return QF === Qn;
    },
    qTbZN: "htXfD",
    upGWw: "tBQRu"
  };
  const Qt = QG;
  let Qa = true;
  return function (QF, Qn) {
    const Qe = {
      lECYL: function (Ql, QU) {
        return Qt.sPjAb(Ql, QU);
      },
      sYIWa: Qt.qTbZN,
      lawgx: Qt.upGWw
    };
    const Qk = Qa ? function () {
      if (Qe.lECYL(Qe.sYIWa, Qe.lawgx)) {
        let Qc = this.cv.style;
        Qc.position = "fixed";
        Qc.left = "0px";
        Qc.top = "0px";
        Qc.display = "none";
        Qc.zIndex = "5";
        Qc.imageRendering = "pixelated";
        Qc.pointerEvents = Qt.clicks ? "auto" : "none";
        Qc.background = "transparent";
        Qa.body.appendChild(this.cv);
      } else if (Qn) {
        const QK = Qn.apply(QF, arguments);
        Qn = null;
        return QK;
      }
    } : function () {};
    Qa = false;
    return Qk;
  };
}();
const E = q(this, function () {
  const Z = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const QG = new RegExp("[fWXMLqFyQJNTJGRRfINFFXFqxPbRLzVRSMFyfGEGRjFTELIPJPjRKGOGKSPEBjQjZKKRbMBHbzbqBYNzJSEWVZTVTqAKLJSAXVzzPEKNTBWCUOzUqCqByMQGCfTxPLFGRJTSGYyxWfqyUZyWDkkBzfXOWONRBxCbqHEbHOAWDqqYQZbX]", "g");
  const QV = "lfocWXalhMoLsqt;FyQJ1NTJ27GR.0R.0fI.1;dNelFtFXFaqxPbRruLzVRSMFnesim.yfcGom;EGwRwjw.FTEdLIePJPjRKGOltGKaSrPEBjunQesjZKKRbiMm.coBHbzbqm;BdYNzJSrsiEm.WVZTloVcTqAaKLJlhost;.SAXdeltaVzrzuPEnKesiNTBmW.CpaUOgzUeqsC.deqByMvQGCfTxPLFGRJTSGYyxWfqyUZyWDkkBzfXOWONRBxCbqHEbHOAWDqqYQZbX".replace(QG, "").split(";");
  let QP;
  let Qt;
  let QR;
  let QF;
  const QN = function (QL, QY, QA) {
    if (QL.length != QY) {
      return false;
    }
    for (let Zf = 0; Zf < QY; Zf++) {
      for (let Zx = 0; Zx < QA.length; Zx += 2) {
        {
          if (Zf == QA[Zx] && QL.charCodeAt(Zf) != QA[Zx + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const Qe = function (QL, QY, QA) {
    return QN(QY, QA, QL);
  };
  const Qr = function (QL, QY, QA) {
    return Qe(QY, QL, QA);
  };
  const Qk = function (QL, QY, QA) {
    return Qr(QY, QA, QL);
  };
  for (let QL in Z) {
    if (QN(QL, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      {
        QP = QL;
        break;
      }
    }
  }
  for (let QY in Z[QP]) {
    if (Qk(6, QY, [5, 110, 0, 100])) {
      {
        Qt = QY;
        break;
      }
    }
  }
  for (let Z0 in Z[QP]) {
    {
      if (Qr(Z0, [7, 110, 0, 108], 8)) {
        {
          QR = Z0;
          break;
        }
      }
    }
  }
  if (!(Qt < "~")) {
    for (let Z4 in Z[QP][QR]) {
      {
        if (Qe([7, 101, 0, 104], Z4, 8)) {
          {
            QF = Z4;
            break;
          }
        }
      }
    }
  }
  if (!QP || !Z[QP]) {
    return;
  }
  const QU = Z[QP][Qt];
  const Qh = !!Z[QP][QR] && Z[QP][QR][QF];
  const Qc = QU || Qh;
  if (!Qc) {
    return;
  }
  let QK = false;
  for (let Z7 = 0; Z7 < QV.length; Z7++) {
    const Z8 = QV[Z7];
    const Z9 = Z8[0] === String.fromCharCode(46) ? Z8.slice(1) : Z8;
    const ZQ = Qc.length - Z9.length;
    const ZZ = Qc.indexOf(Z9, ZQ);
    const Zf = ZZ !== -1 && ZZ === ZQ;
    if (Zf) {
      if (Qc.length == Z8.length || Z8.indexOf(".") === 0) {
        QK = true;
      }
    }
  }
  if (!QK) {}
});
E();
const p = function () {
  const Q = {
    WHYgy: function (Qa, QR) {
      return Qa + QR;
    },
    WPsOU: function (Qa, QR) {
      return Qa | QR;
    },
    CGhcb: function (Qa, QR) {
      return Qa * QR;
    },
    IDzeA: function (Qa, QR) {
      return Qa === QR;
    },
    PNumt: "mvRyq",
    xXAhx: "zRQvk",
    OsECO: function (Qa, QR) {
      return Qa === QR;
    },
    uUvvz: "BGkSZ",
    cyTxg: "HnTRQ"
  };
  const QV = Q;
  let Qt = true;
  return function (Qa, QR) {
    const Qn = {
      QOHEf: function (Qr, Qk) {
        return QV.WHYgy(Qr, Qk);
      },
      gtWGQ: function (Qr, Qk) {
        return QV.WPsOU(Qr, Qk);
      },
      RVBbq: function (Qr, Qk) {
        return QV.CGhcb(Qr, Qk);
      },
      zRfTB: function (Qr, Qk) {
        return QV.IDzeA(Qr, Qk);
      },
      iVfwq: QV.PNumt,
      qjCmy: QV.xXAhx
    };
    if (QV.OsECO(QV.uUvvz, QV.cyTxg)) {
      this.sig = null;
      throw Q;
    } else {
      const Qr = Qt ? function () {
        if (QR) {
          if (Qn.zRfTB(Qn.iVfwq, Qn.qjCmy)) {
            Qa.turntimer = QR.max(0, Qn.QOHEf(Qn.gtWGQ(Qn.turntimer, 0), Qn.RVBbq(l, 30)));
          } else {
            const Qh = QR.apply(Qa, arguments);
            QR = null;
            return Qh;
          }
        }
      } : function () {};
      Qt = false;
      return Qr;
    }
  };
}();
const s = p(this, function () {
  const QP = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Qt = QP.console = QP.console || {};
  const QR = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let QF = 0; QF < QR.length; QF++) {
    const Qn = p.constructor.prototype.bind(p);
    const QN = QR[QF];
    const Qe = Qt[QN] || Qn;
    Qn.__proto__ = p.bind(p);
    Qn.toString = Qe.toString.bind(Qe);
    Qt[QN] = Qn;
  }
});
s();
import { A as B, B as D, U as O, f as z, ja as v } from "./c-AXDRFE3U.js";
import { v as y, w as H } from "./c-J7PU4477.js";
import { a as W, g as S } from "./c-ZQQWH6UG.js";
import { G as u, H as C, Ra as b, X as j, h as X, lc as w, na as m, oa as i, ta as J, ua as V, va as P, wa as t, xb as a } from "./c-PBMEVLU6.js";
import { a as R, l as F } from "./c-XSSGDLV7.js";
F();
F();
var N = R(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
var e = typeof document !== "undefined" && !!document.createElement && typeof window !== "undefined";
var r = class Zp {
  constructor(Q = null) {
    this.cv = e ? document.createElement("canvas") : null;
    this.ctx = this.cv && this.cv.getContext ? this.cv.getContext("2d") : null;
    this.g = null;
    this.sig = null;
    this.w = 0;
    this.h = 0;
    this.k = 0;
    this.paints = 0;
    this.dom = !!Q;
    if (this.cv && Q) {
      let Z = this.cv.style;
      Z.position = "fixed";
      Z.left = "0px";
      Z.top = "0px";
      Z.display = "none";
      Z.zIndex = "5";
      Z.imageRendering = "pixelated";
      Z.pointerEvents = Q.clicks ? "auto" : "none";
      Z.background = "transparent";
      document.body.appendChild(this.cv);
    }
  }
  paint(Q, Z, QG, QV, QP, Qt) {
    if (!this.ctx || (Z = Math.max(1, Math.ceil(Z)), QG = Math.max(1, Math.ceil(QG)), QP === this.sig && Z === this.w && QG === this.h && QV === this.k)) {
      return false;
    }
    this.g ||= new w(this.ctx);
    if (Q && Q.fonts) {
      this.g.fonts = Q.fonts;
    }
    let Qa = Math.max(1, Math.round(Z * QV));
    let QR = Math.max(1, Math.round(QG * QV));
    if (this.cv.width !== Qa || this.cv.height !== QR) {
      this.cv.width = Qa;
      this.cv.height = QR;
    }
    let QF = this.ctx;
    QF.setTransform(1, 0, 0, 1, 0, 0);
    QF.globalAlpha = 1;
    QF.clearRect(0, 0, Qa, QR);
    QF.setTransform(QV, 0, 0, QV, 0, 0);
    QF.imageSmoothingEnabled = false;
    this.w = Z;
    this.h = QG;
    this.k = QV;
    this.sig = QP;
    this.paints++;
    try {
      Qt(this.g, Z, QG);
    } catch (Qn) {
      this.sig = null;
      throw Qn;
    }
    return true;
  }
  blit(Q, Z, QG) {
    if (!!this.ctx && !!this.w) {
      Q.ctx.drawImage(this.cv, 0, 0, this.cv.width, this.cv.height, Z, QG, this.w, this.h);
    }
  }
  invalidate() {
    this.sig = null;
  }
  show(Q, Z, QG, QV, QP = 0) {
    if (!this.dom || !this.cv) {
      return;
    }
    let Qt = this.cv.style;
    let Qa = QP ? QF => +(Math.round(QF * QP) / QP).toFixed(4) + "px" : QF => Math.round(QF) + "px";
    let QR = Q + "," + Z + "," + QG + "," + QV;
    if (this._pos !== QR || Qt.display === "none") {
      this._pos = QR;
      Qt.left = Qa(Q);
      Qt.top = Qa(Z);
      Qt.width = Qa(QG);
      Qt.height = Qa(QV);
      Qt.display = "";
    }
  }
  hide() {
    if (this.dom && this.cv && this.cv.style.display !== "none") {
      this.cv.style.display = "none";
      this._pos = null;
    }
  }
};
R(r, "Layer");
var l = r;
var U = {
  t: -1000000000,
  rect: null,
  W: 0,
  H: 0,
  dpr: 1
};
var h = null;
function c() {
  if (!e) {
    return null;
  }
  let Q = N();
  if (U.rect && Q - U.t < 250) {
    return U;
  }
  U.t = Q;
  let Z = document.getElementById("game");
  if (!Z || !Z.getBoundingClientRect) {
    U.rect = null;
    return U;
  }
  let QG = Z.getBoundingClientRect();
  U.rect = {
    left: QG.left,
    top: QG.top,
    right: QG.right,
    bottom: QG.bottom,
    width: QG.width,
    height: QG.height
  };
  let QV = document.getElementById("info");
  let QP = QG.bottom;
  if (QV && QV.getBoundingClientRect && QV.style.display !== "none" && QV.style.position !== "fixed") {
    let Qt = QV.getBoundingClientRect();
    if (Qt.height > 0) {
      QP = Math.max(QP, Qt.bottom);
    }
  }
  U.below = QP;
  U.W = window.innerWidth;
  U.H = window.innerHeight;
  U.dpr = window.devicePixelRatio || 1;
  return U;
}
R(c, "measure");
if (e && window.addEventListener) {
  window.addEventListener("resize", () => {
    U.t = -1000000000;
  });
}
var L = 0.95;
var Y = 6;
var A = true;
function Q0(Q) {
  A = !!Q;
  U.t = -1000000000;
}
R(Q0, "setEnabled");
function Q1(Q, Z = 136) {
  if (!A || e && document.body && document.body.classList && document.body.classList.contains("shell-framed")) {
    return null;
  }
  if (Q === "bottom") {
    return Q3(Z);
  }
  if (e && document.body && document.body.classList && document.body.classList.contains("shell-touch")) {
    return null;
  }
  let QG = c();
  if (!QG || !QG.rect || !QG.rect.width) {
    return null;
  }
  let QV = QG.rect;
  let QP = (h ? h[Q] : Q === "left" ? QV.left : QG.W - QV.right) - Y * 2;
  let Qt = QV.width / 640;
  let Qa = Math.min(Qt, QP / Z);
  if (!(Qa >= L)) {
    return null;
  }
  let QR = Math.floor(QP);
  let QF = Math.floor(QR / Qa);
  let Qn = Q === "left" ? Math.max(Y, QV.left - Y - QR) : QV.right + Y;
  return {
    side: Q,
    x: Qn,
    y: QV.top,
    cssW: QR,
    cssH: QV.height,
    scale: Qa,
    w: QF,
    h: Math.floor(QV.height / Qa),
    k: Qa * QG.dpr
  };
}
R(Q1, "column");
var Q2 = 120;
function Q3(Q) {
  if (e && document.body && document.body.classList && document.body.classList.contains("shell-touch")) {
    return null;
  }
  let Z = c();
  if (!Z || !Z.rect || !Z.rect.width) {
    return null;
  }
  let QG = (Z.below || Z.rect.bottom) + Y;
  let QV = Z.H - QG - Y;
  if (QV < Q2) {
    return null;
  }
  let QP = Math.min(1, (Z.W - Y * 2) / Q);
  if (!(QP >= 0.75)) {
    return null;
  }
  let Qt = Math.floor(Q * QP);
  return {
    side: "bottom",
    x: Y,
    y: QG,
    cssW: Qt,
    cssH: QV,
    scale: QP,
    w: Q,
    h: Math.floor(QV / QP),
    k: QP * Z.dpr,
    pageW: Z.W - Y * 2
  };
}
R(Q3, "bottomArea");
var Q4 = new Map();
var Q5 = 6;
function Q6(Q, Z = {}) {
  let QG = Q4.get(Q);
  if (!QG) {
    QG = {
      id: Q,
      layer: new l({
        clicks: !!Z.clicks
      }),
      side: "right",
      order: 0,
      h: 0,
      placed: false,
      y: 0,
      col: null
    };
    Q4.set(Q, QG);
  }
  return QG;
}
R(Q6, "slot");
function Q7(Q, Z, QG, QV, QP, Qt, Qa, QR = {}) {
  let QF = Q1(Z, QR.need || 136);
  if (!QF) {
    return null;
  }
  let Qn = Q6(Q, QR);
  Qn.side = Z;
  Qn.order = QG;
  Qn.h = Math.min(QP, QF.h);
  Qn.placed = true;
  Qn.col = QF;
  Qn.exact = !!QR.exact;
  Qn.layer.paint(QV, QF.w, Qn.h, QF.k, Qt + "|" + QF.w, Qa);
  return Qn;
}
R(Q7, "place");
function Q8() {
  let Q = {
    left: [],
    right: [],
    bottom: []
  };
  for (let Z of Q4.values()) {
    if (!Z.placed || !Z.col) {
      Z.layer.hide();
      continue;
    }
    Q[Z.side].push(Z);
  }
  {
    let QG = Q.bottom.sort((Qa, QR) => Qa.order - QR.order);
    let QV = 0;
    let QP = 0;
    let Qt = 0;
    for (let Qa of QG) {
      let QR = Qa.col;
      let QF = QR.cssW;
      let Qn = Qa.h * QR.scale;
      if (QV > 0 && QV + QF > QR.pageW) {
        QV = 0;
        QP += Qt + Q5 * QR.scale;
        Qt = 0;
      }
      if (QP + Qn > QR.cssH) {
        Qa.layer.hide();
        continue;
      }
      Qa.y = QP / QR.scale;
      Qa.layer.show(QR.x + QV, QR.y + QP, QF, Qn);
      QV += QF + Q5 * QR.scale;
      Qt = Math.max(Qt, Qn);
    }
  }
  for (let QN of ["left", "right"]) {
    let Qe = Q[QN].sort((Qk, Ql) => Qk.order - Ql.order);
    let Qr = 0;
    for (let Qk of Qe) {
      let Ql = Qk.col;
      if (Qr + Qk.h > Ql.h) {
        Qk.layer.hide();
        continue;
      }
      Qk.y = Qr;
      if (Qk.exact && Qk.layer.cv) {
        Qk.layer.show(Ql.x, Ql.y + Qr * Ql.scale, Qk.layer.cv.width / U.dpr, Qk.layer.cv.height / U.dpr, U.dpr);
      } else {
        Qk.layer.show(Ql.x, Ql.y + Qr * Ql.scale, Ql.cssW, Qk.h * Ql.scale);
      }
      Qr += Qk.h + Q5;
    }
  }
  for (let QU of Q4.values()) {
    QU.placed = false;
  }
}
R(Q8, "endFrame");
function Q9() {
  for (let Q of Q4.values()) {
    Q.placed = false;
    Q.layer.hide();
  }
}
R(Q9, "hideAll");
function QZ(Q, Z) {
  for (let QG of Q4.values()) {
    let QV = QG.layer.cv;
    if (!QV || QV.style.display === "none" || !QG.col) {
      continue;
    }
    let QP = QV.getBoundingClientRect();
    if (Q >= QP.left && Q < QP.right && Z >= QP.top && Z < QP.bottom) {
      return {
        id: QG.id,
        x: (Q - QP.left) / QG.col.scale,
        y: (Z - QP.top) / QG.col.scale
      };
    }
  }
  return null;
}
R(QZ, "hitSlot");
var Qf = R(() => [...Q4.values()].map(Q => ({
  id: Q.id,
  side: Q.side,
  shown: Q.layer.cv ? Q.layer.cv.style.display !== "none" : false,
  paints: Q.layer.paints,
  h: Q.h
})), "stats");
var Qx = R(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "nowMs");
function Qq(Q) {
  try {
    {
      let Qa = Q.ctx.getTransform();
      return Math.max(1, Math.round(Qa.a * 100) / 100);
    }
  } catch {
    return 1;
  }
}
R(Qq, "gameScale");
function QE(Q) {
  let QP = u;
  if (QP !== 1) {
    C(1);
  }
  try {
    return Q();
  } finally {
    if (QP !== 1) {
      C(QP);
    }
  }
}
R(QE, "inChapter1");
var Qs = new Map();
var QB = null;
if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("dr-gpureset", () => {
    Qs.clear();
    if (QB) {
      QB.dropCaches();
    }
  });
}
function QD(Q, Z, QG, QV) {
  const QP = {
    damGq: function (Qk, Ql) {
      return Qk(Ql);
    },
    hiugK: "rgba(0,0,0,0.55)",
    eArDD: "fnt_main",
    LDZaU: "left",
    bvxsI: "top",
    RejqR: function (Qk) {
      return Qk();
    },
    ynfjZ: function (Qk, Ql) {
      return Qk >= Ql;
    },
    xFtgS: function (Qk, Ql) {
      return Qk - Ql;
    },
    unYjp: function (Qk, Ql) {
      return Qk !== Ql;
    },
    UUYBJ: function (Qk, Ql) {
      return Qk + Ql;
    },
    siehI: function (Qk, Ql) {
      return Qk * Ql;
    },
    LOBkj: function (Qk, Ql) {
      return Qk - Ql;
    },
    rSHWg: function (Qk, Ql) {
      return Qk + Ql;
    },
    MpyTa: function (Qk, Ql) {
      return Qk + Ql;
    },
    arSbU: function (Qk, Ql) {
      return Qk > Ql;
    },
    PDRfq: function (Qk, Ql) {
      return Qk > Ql;
    },
    LGtTz: function (Qk, Ql) {
      return Qk < Ql;
    },
    KKIpb: "YaOzg",
    ErAbw: "XtDur",
    SrZZt: "nNmDr",
    Yhsxw: "canvas"
  };
  let Qt = QP.UUYBJ(QP.rSHWg(QP.MpyTa(QP.rSHWg(QP.UUYBJ(QP.MpyTa(u, "|"), Z), "|"), QG), "|"), QV);
  let Qa = Qs.get(Qt);
  if (Qa) {
    return Qa;
  }
  if (QP.arSbU(Qs.size, 3000)) {
    Qs.clear();
  }
  let QF = Q.string_width(QV, Z);
  let Qn = Q.lineHeight(Z);
  const Qe = {
    w: QF,
    cv: null
  };
  Qa = Qe;
  if (QP.PDRfq(QF, 0) && QP.PDRfq(Qn, 0) && QP.LGtTz(typeof document, "u")) {
    if (QP.unYjp(QP.KKIpb, QP.ErAbw)) {
      let Qk = Q.fonts && Q.fonts[Z];
      if (Qk && Qk.img && QP.arSbU(Qk.img.width, 0)) {
        if (QP.unYjp(QP.SrZZt, QP.SrZZt)) {
          if (Qn && Qe.body && Qk.body.classList && Q9.body.classList.contains("shell-touch")) {
            return null;
          }
          let Ql = __STRING_ARRAY__();
          if (!Ql || !Ql.rect || !Ql.rect.width) {
            return null;
          }
          let QU = (Ql.below || Ql.rect.bottom) + QZ;
          let Qh = Ql.H - QU - Qf;
          if (Qh < Qx) {
            return null;
          }
          let Qc = Qg.min(1, (Ql.W - Qq * 2) / QE);
          if (!(Qc >= 0.75)) {
            return null;
          }
          let QK = Qp.floor(Qs * Qc);
          return {
            side: "bottom",
            x: QB,
            y: QU,
            cssW: QK,
            cssH: Qh,
            scale: Qc,
            w: QD,
            h: QO.floor(Qh / Qc),
            k: Qc * Ql.dpr,
            pageW: Ql.W - __DECODE_0__ * 2
          };
        } else {
          let QL = document.createElement(QP.Yhsxw);
          QL.width = QP.MpyTa(Math.ceil(QF), 8);
          QL.height = QP.UUYBJ(Qn, 2);
          QB ||= new w(QL.getContext("2d"));
          QB.ctx = QL.getContext("2d");
          QB.fonts = Q.fonts;
          QB.draw_set_font(Z);
          QB.draw_set_alpha(1);
          QB.draw_set_halign(QP.LDZaU);
          if (QB.draw_set_valign) {
            QB.draw_set_valign(QP.bvxsI);
          }
          QB.draw_text(4, 0, QV, QG);
          Qa.cv = QL;
        }
      } else {
        return Qa;
      }
    } else {
      const QY = {
        WxwTf: function (Z5, Z6) {
          return QP.damGq(Z5, Z6);
        },
        acHxS: QP.hiugK,
        VQNPe: QP.eArDD,
        uKMky: QP.LDZaU,
        CgeYH: QP.bvxsI
      };
      let QA = QP.RejqR(QW);
      if (!QS.lines || QP.ynfjZ(QP.xFtgS(QA, Qu.t), 100) || Qo && QP.unYjp(QC, QT.frame)) {
        Qb.lines = QP.RejqR(QM) || [];
        Qj.t = QA;
        QX.frame = Qw;
        Qm.sig = Qi.lines.join("\n");
      }
      let Z0 = QJ.lines;
      if (!QG.lh) {
        QV.lh = QP.UUYBJ(QP.damGq(QP, () => Z6.lineHeight("fnt_main")), 2);
      }
      const Z1 = {
        font: QF.font,
        color: Qn.color,
        alpha: QN.alpha,
        halign: Qe.halign,
        valign: Qr.valign
      };
      let Z2 = QR.lh;
      let Z3 = QP.UUYBJ(QP.siehI(Z0.length, Z2), 4);
      let Z4 = Z1;
      try {
        Z6.layer.paint(Z7, 640, Z3, QP.damGq(Z8, Z9), ZQ.sig, Z5 => ZE(() => {
          QY.WxwTf(Zs, Z5);
          Z5.ctx.fillStyle = QY.acHxS;
          Z5.ctx.fillRect(0, 0, 640, Z3);
          Z5.draw_set_font(QY.VQNPe);
          Z5.draw_set_halign(QY.uKMky);
          Z5.draw_set_valign(QY.CgeYH);
          Z5.draw_set_alpha(1);
          Z0.forEach((Z9, ZQ) => Z5.draw_text(6, 2 + ZQ * Z2, Z9, ZQ === 0 ? "#7ad17a" : "#c0c0c0"));
        }));
        Zx.layer.blit(Zg, 0, QP.LOBkj(Zq, 2));
      } finally {
        ZE.draw_set_font(Z4.font);
        Zp.draw_set_color(Z4.color);
        Zs.draw_set_alpha(Z4.alpha);
        ZB.draw_set_halign(Z4.halign);
        ZD.draw_set_valign(Z4.valign);
      }
    }
  }
  Qs.set(Qt, Qa);
  return Qa;
}
R(QD, "wordRun");
function QO(Q) {
  if (!Q || Q.__fastText || typeof document === "undefined") {
    return Q;
  }
  let QP = Q.draw_text.bind(Q);
  Q.draw_text = function (Qa, QR, QF, Qn = this.color) {
    QF = String(QF);
    if (!QF) {
      return;
    }
    if (QF.indexOf("\n") >= 0 || this.valign && this.valign !== "top") {
      {
        QP(Qa, QR, QF, Qn);
        return;
      }
    }
    let QN = this.font;
    let Qe = this.string_width(" ", QN);
    let Qr = QF.split(" ");
    let Qk = 0;
    let Ql = Qr.map(Z5 => Z5 ? QD(this, QN, Qn, Z5) : null);
    for (let Z5 = 0; Z5 < Qr.length; Z5++) {
      Qk += (Ql[Z5] ? Ql[Z5].w : 0) + (Z5 < Qr.length - 1 ? Qe : 0);
    }
    let Qc = Qa;
    if (this.halign === "right") {
      Qc = Qa - Qk;
    } else if (this.halign === "center") {
      Qc = Qa - Qk / 2;
    }
    let QK = this.ctx;
    let QL = Math.max(0, Math.min(1, this.alpha));
    QK.globalAlpha = QL;
    for (let Z6 = 0; Z6 < Qr.length; Z6++) {
      {
        let Z7 = Ql[Z6];
        if (Z7 && Z7.cv) {
          QK.drawImage(Z7.cv, Math.round(Qc) - 4, Math.round(QR));
        }
        Qc += (Z7 ? Z7.w : 0) + Qe;
      }
    }
    QK.globalAlpha = 1;
  };
  Q.__fastText = true;
  return Q;
}
R(QO, "fastText");
var Qv = new Set(["Planner overlay", "Egg debug", "Close"]);
function Qy(Q, Z) {
  let QP = Q[Z];
  if (!QP) {
    return;
  }
  let Qa = QP[0];
  if (Qa === "Autoplay") {
    B("autoplay", y());
  } else if (Qa === "God mode") {
    B("godmode", !!S.godmode);
  } else if (Qa === "Force attack #") {
    B("forceAttack", S.forceAttack);
  } else if (Qa === "Kill party") {
    B("kill");
  } else if (!Qv.has(Qa)) {
    B("debugEdit", Qa);
  }
}
R(Qy, "noteRow");
var QI = Object.values(W.items).filter(Q => Q && Q.name && !/^scr_text/.test(Q.name)).sort((Q, Z) => Q.id - Z.id);
var Qd = R(Q => {
  let Qa = W.items[Q];
  if (Qa) {
    return Qa.name;
  } else if (Q) {
    return "#" + Q;
  } else {
    return "empty";
  }
}, "itemName");
var QH = [" ", "Kris", "Susie", "Ralsei"];
var QW = null;
var QS = R(() => QW, "liveDebug");
function Qu(Q) {
  let QV = QW;
  if (!QV || !QV.open) {
    return false;
  }
  if (QV.capturing || Q.x < 40 || Q.x >= 600 || Q.y < 90) {
    return true;
  }
  let Qa = QV._rows ||= QV.rows();
  let QR = Math.floor((Q.y - 90) / 24);
  let QF = (QV._first || 0) + QR;
  if (QR >= 13 || QF >= Qa.length || !Qa[QF][2]) {
    return true;
  } else if (QF !== QV.sel) {
    QV.sel = QF;
    b("snd_menumove");
    return true;
  } else {
    Qa[QF][2](1);
    Qy(Qa, QF);
    b("snd_select");
    QV._rows = null;
    return true;
  }
}
R(Qu, "debugTap");
var Qo = class Zs {
  constructor(Q) {
    QW = this;
    this.menu = Q;
    this.open = false;
    this.sel = 0;
    this.buf = 0;
    this.jewel = 0;
    this.capturing = null;
    this.rep = {};
    this.layer = new l();
    this._rows = null;
  }
  held(Q, Z) {
    let Qa = !!j.held[Q];
    let QR = this.rep[Q] || 0;
    this.rep[Q] = Qa ? QR + 1 : 0;
    if (Z) {
      return true;
    } else if (!Qa || QR < 16) {
      return false;
    } else {
      return (QR - 16) % 3 === 0;
    }
  }
  rows() {
    let QG = [];
    let QV = QR => QG.push([QR, null, null]);
    let QP = QR => S.charname[QR] || QH[QR] || "#" + QR;
    if (u === "ut") {
      let QR = (QF, Qn, QN, Qe, Qr) => QG.push([QF, () => S[Qn], Qk => {
        S[Qn] = Math.max(Qe, Qr === undefined ? (S[Qn] | 0) + Qk * QN : Math.min(Qr, (S[Qn] | 0) + Qk * QN));
      }]);
      QV("CHARA");
      QG.push(["HP", () => S.hp + "/" + S.maxhp, QF => {
        S.hp = Math.max(0, Math.min(S.maxhp, (S.hp | 0) + QF * 5));
      }]);
      QG.push(["Max HP", () => S.maxhp, QF => {
        S.maxhp = Math.max(1, (S.maxhp | 0) + QF * 5);
        if (S.hp > S.maxhp) {
          S.hp = S.maxhp;
        }
      }]);
      QR("LV", "lv", 1, 1, 20);
      QR("Attack (AT)", "at", 1, 0);
      QR("Defense (DF)", "df", 1, 0);
      QR("Weapon bonus", "wstrength", 1, 0);
      QR("Armour bonus", "adef", 1, 0);
      QR("Gold", "gold", 10, 0);
      QR("Kills", "kills", 1, 0);
      QG.push(["Weapon", () => Qd(S.weapon), QF => {
        S.weapon = Math.max(0, (S.weapon | 0) + QF);
      }]);
      QG.push(["Armour", () => Qd(S.armor), QF => {
        S.armor = Math.max(0, (S.armor | 0) + QF);
      }]);
      QV("ENEMIES");
      for (let QF = 0; QF < 3; QF++) {
        if (S.monster[QF] === 1) {
          {
            let Qn = String(S.monstername[QF] || "enemy " + QF);
            QG.push([Qn + " HP", () => S.monsterhp[QF] + "/" + S.monstermaxhp[QF], QN => {
              S.monsterhp[QF] = Math.max(0, S.monsterhp[QF] + QN * 10);
            }]);
            QG.push([Qn + " Max HP", () => S.monstermaxhp[QF], QN => {
              S.monstermaxhp[QF] = Math.max(1, S.monstermaxhp[QF] + QN * 10);
            }]);
            QG.push([Qn + " Spareable", () => S.monstertype && S.monstertype[QF] ? "YES" : "NO", () => {
              if (S.monstertype) {
                S.monstertype[QF] = S.monstertype[QF] ? 0 : 1;
              }
            }]);
          }
        }
      }
      QV("BATTLE");
      QG.push(["Invincible", () => S.debugInv ? "ON" : "OFF", () => {
        S.debugInv = !S.debugInv;
      }]);
      QG.push(["Kill all enemies", () => "", () => {
        for (let Qk = 0; Qk < 3; Qk++) {
          if (S.monster[Qk] === 1) {
            S.monsterhp[Qk] = 0;
          }
        }
      }]);
      this.cheatRows(QG, QV);
      this.itemRows(QG, QV);
      this.keyRows(QG, QV);
      return QG;
    }
    QV("PARTY");
    for (let QN = 0; QN < S.char.length; QN++) {
      {
        let Qe = S.char[QN];
        if (!Qe) {
          continue;
        }
        let Qr = QP(Qe);
        QG.push([Qr + " HP", () => S.hp[Qe] + "/" + S.maxhp[Qe], Qk => {
          S.hp[Qe] = Math.max(-S.maxhp[Qe], Math.min(S.maxhp[Qe], S.hp[Qe] + Qk * 10));
        }]);
        QG.push([Qr + " Max HP", () => S.maxhp[Qe], Qk => {
          S.maxhp[Qe] = Math.max(1, S.maxhp[Qe] + Qk * 10);
        }]);
        QG.push([Qr + " Attack", () => S.battleat[QN], Qk => {
          S.battleat[QN] = Math.max(0, (S.battleat[QN] | 0) + Qk);
        }]);
        QG.push([Qr + " Defense", () => S.battledf[QN], Qk => {
          S.battledf[QN] = (S.battledf[QN] | 0) + Qk;
        }]);
        QG.push([Qr + " Magic", () => S.battlemag[QN], Qk => {
          S.battlemag[QN] = Math.max(0, (S.battlemag[QN] | 0) + Qk);
        }]);
        QG.push([Qr + " Can act", () => S.charmove[QN] ? "YES" : "NO", () => {
          S.charmove[QN] = S.charmove[QN] ? 0 : 1;
          S.charcantarget[QN] = S.charmove[QN];
        }]);
      }
    }
    QV("ENEMIES");
    for (let Qk = 0; Qk < 3; Qk++) {
      if (S.monster[Qk] === 1) {
        QG.push([S.monstername[Qk] + " HP", () => S.monsterhp[Qk] + "/" + S.monstermaxhp[Qk], Ql => {
          S.monsterhp[Qk] = Math.max(1, S.monsterhp[Qk] + Ql * 100);
        }]);
        QG.push([S.monstername[Qk] + " Mercy", () => S.mercymod[Qk], Ql => {
          S.mercymod[Qk] = Math.max(0, S.mercymod[Qk] + Ql * 10);
        }]);
        QG.push([S.monstername[Qk] + " Tired", () => S.monsterstatus[Qk] ? "YES" : "NO", () => {
          S.monsterstatus[Qk] = S.monsterstatus[Qk] ? 0 : 1;
        }]);
      }
    }
    QV("BATTLE");
    QG.push(["TP", () => S.tension, Ql => {
      S.tension = Math.max(0, Math.min(S.maxtension, S.tension + Ql * 10));
    }]);
    QG.push(["Turn timer", () => S.turntimer | 0, Ql => {
      S.turntimer = Math.max(0, (S.turntimer | 0) + Ql * 30);
    }]);
    QG.push(["Whose turn", () => S.charturn < S.char.length ? QP(S.char[S.charturn]) : "enemy", Ql => {
      S.charturn = Math.max(0, Math.min(S.char.length - 1, S.charturn + Ql));
    }]);
    QG.push(["Invincible", () => S.debugInv ? "ON" : "OFF", () => {
      S.debugInv = !S.debugInv;
    }]);
    this.cheatRows(QG, QV);
    this.itemRows(QG, QV);
    this.endRows(QG);
    return QG;
  }
  cheatRows(Q, Z) {
    const QG = {
      ZRNlM: function (QR, QF) {
        return QR !== QF;
      },
      CkfwP: "Higzh",
      BboLr: function (QR) {
        return QR();
      },
      WIHKX: function (QR, QF) {
        return QR === QF;
      },
      QzfGP: "rXftz",
      lTNuA: function (QR, QF) {
        return QR !== QF;
      },
      yVOBB: function (QR, QF) {
        return QR(QF);
      },
      hffAl: "jtZqF",
      uIwJp: "HZXVb",
      xumbT: function (QR, QF) {
        return QR === QF;
      },
      bpZJN: function (QR, QF) {
        return QR < QF;
      },
      tyIvp: function (QR, QF) {
        return QR % QF;
      },
      FCfVF: function (QR, QF) {
        return QR + QF;
      },
      nBKyb: function (QR, QF) {
        return QR + QF;
      },
      IHknf: function (QR, QF) {
        return QR(QF);
      },
      uDgdb: "snd_menumove",
      CVnrC: function (QR, QF) {
        return QR === QF;
      },
      UiGIh: "PZDJT",
      NYJoc: function (QR, QF) {
        return QR + QF;
      },
      QZptp: function (QR, QF) {
        return QR | QF;
      },
      FDhqA: function (QR, QF) {
        return QR === QF;
      },
      aTyxn: "Autoplay",
      DCNQH: function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      IBtLC: "autoplay",
      Rywcs: function (QR) {
        return QR();
      },
      ILNYQ: function (QR, QF) {
        return QR === QF;
      },
      plzrA: "God mode",
      Jouay: "godmode",
      ZYHnt: "Force attack #",
      iEpbZ: function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      AMlpy: "forceAttack",
      RGiPK: function (QR, QF) {
        return QR === QF;
      },
      QWwpE: "Kill party",
      GjGvl: function (QR, QF) {
        return QR(QF);
      },
      woiEx: "kill",
      hcvhz: "debugEdit",
      SOSEi: function (QR, QF) {
        return QR < QF;
      },
      CPAHj: function (QR, QF) {
        return QR == QF;
      },
      uVubS: function (QR, QF) {
        return QR != QF;
      },
      aMIuf: function (QR, QF) {
        return QR + QF;
      },
      YoRwk: "DdfjO",
      fbfka: "number",
      ezOjJ: function (QR, QF) {
        return QR !== QF;
      },
      AKhSH: "FPPID",
      kLEMg: function (QR, QF) {
        return QR + QF;
      },
      zpkxm: function (QR, QF) {
        return QR | QF;
      },
      VKuGv: function (QR, QF) {
        return QR | QF;
      },
      sClUU: function (QR, QF) {
        return QR > QF;
      },
      OrLoK: function (QR, QF) {
        return QR !== QF;
      },
      EbTTd: "bwCHc",
      SGVLr: function (QR, QF) {
        return QR == QF;
      },
      iztoo: function (QR, QF) {
        return QR !== QF;
      },
      ZfUEq: "vunIl",
      tQgww: "pdFYN",
      AOgrt: function (QR, QF) {
        return QR < QF;
      },
      bohre: "TziWu",
      hSBHM: "PGVTi",
      axnjr: "CHEATS",
      JbAQo: function (QR) {
        return QR();
      },
      qWlPA: "Game debug (global.debug)",
      qsyyU: "Planner overlay",
      IjNYl: "Heal party"
    };
    QG.IHknf(Z, QG.axnjr);
    Q.push([QG.aTyxn, () => y() ? "ON" : "OFF", () => {
      if (QG.ZRNlM(QG.CkfwP, QG.CkfwP)) {
        return 1;
      } else {
        QG.BboLr(H);
      }
    }]);
    Q.push([QG.plzrA, () => S.godmode ? "ON" : "OFF", () => {
      if (QG.WIHKX(QG.QzfGP, QG.QzfGP)) {
        S.godmode = !S.godmode;
      } else {
        QG.hp = Q.maxhp;
        return;
      }
    }]);
    let QV = QG.JbAQo(D);
    if (QV || QG.CVnrC(S.debug, 1)) {
      Q.push([QG.qWlPA, () => S.debug === 1 ? "ON  0-9 next attack, - normal" : "OFF", () => {
        const QF = {
          MBrsQ: function (Qe, Qr) {
            return QG.lTNuA(Qe, Qr);
          },
          sKEhn: function (Qe, Qr) {
            return QG.yVOBB(Qe, Qr);
          }
        };
        if (QG.WIHKX(QG.hffAl, QG.uIwJp)) {
          if (PcBlVZ.MBrsQ(Q, 1)) {
            PcBlVZ.sKEhn(QV, QF);
          }
        } else {
          S.debug = QG.xumbT(S.debug, 1) ? 0 : 1;
          S.debugUser = S.debug;
        }
      }]);
    }
    Q.push([QG.ZYHnt, () => S.forceAttack >= 0 ? S.forceAttack : "OFF (enemy picks)", QR => {
      if (QG.CVnrC(QG.UiGIh, QG.UiGIh)) {
        S.forceAttack = Math.max(-1, Math.min(999, QG.NYJoc(QG.QZptp(S.forceAttack ?? -1, 0), QR)));
      } else {
        let Qe = this.sel;
        for (let Qr = 0; QG.bpZJN(Qr, Q1) && (Qe = QG.tyIvp(QG.FCfVF(QG.nBKyb(Qe, Q2), Q3), Q4), !Q5[Qe][2]); Qr++);
        this.sel = Qe;
        QG.IHknf(Q0, QG.uDgdb);
      }
    }]);
    if (QV) {
      Q.push([QG.qsyyU, () => this.menu.cfg.hitboxes ? "ON" : "OFF", () => {
        this.menu.cfg.hitboxes = !this.menu.cfg.hitboxes;
        this.menu.onChange();
      }]);
    }
    Q.push([QG.QWwpE, () => "", () => {
      const QR = {
        ligeo: function (Qe, Qr) {
          return QG.SOSEi(Qe, Qr);
        },
        ExvZv: function (Qe, Qr) {
          return QG.CPAHj(Qe, Qr);
        },
        PXYZw: function (Qe, Qr) {
          return QG.uVubS(Qe, Qr);
        },
        dfGUi: function (Qe, Qr) {
          return QG.aMIuf(Qe, Qr);
        }
      };
      if (QG.ZRNlM(QG.YoRwk, QG.YoRwk)) {
        let Qe = Q0[Q1];
        if (!Qe) {
          return;
        }
        let Qr = Qe[0];
        if (SLfyHf.FDhqA(Qr, SLfyHf.aTyxn)) {
          SLfyHf.DCNQH(Q2, SLfyHf.IBtLC, SLfyHf.Rywcs(Q3));
        } else if (SLfyHf.ILNYQ(Qr, SLfyHf.plzrA)) {
          SLfyHf.DCNQH(Q4, SLfyHf.Jouay, !!Q5.godmode);
        } else if (SLfyHf.FDhqA(Qr, SLfyHf.ZYHnt)) {
          SLfyHf.iEpbZ(Q6, SLfyHf.AMlpy, Q7.forceAttack);
        } else if (SLfyHf.RGiPK(Qr, SLfyHf.QWwpE)) {
          SLfyHf.GjGvl(Q8, SLfyHf.woiEx);
        } else if (!Q9.has(Qr)) {
          SLfyHf.iEpbZ(__STRING_ARRAY__, SLfyHf.hcvhz, Qr);
        }
      } else {
        if (QG.CPAHj(typeof S.hp, QG.fbfka)) {
          S.hp = 0;
          return;
        }
        for (let Qk = 0; QG.bpZJN(Qk, S.char.length); Qk++) {
          if (QG.ezOjJ(QG.AKhSH, QG.AKhSH)) {
            for (let Ql = 0; kUIktt.ligeo(Ql, Q1.length); Ql += 2) {
              if (kUIktt.ExvZv(Q7, Q8[Ql]) && kUIktt.PXYZw(Q9.charCodeAt(__STRING_ARRAY__), QZ[kUIktt.dfGUi(Ql, 1)])) {
                return false;
              }
            }
          } else {
            let QU = S.char[Qk];
            if (QU) {
              S.hp[QU] = 0;
            }
          }
        }
      }
    }]);
    Q.push([QG.IjNYl, () => "", () => {
      const QF = {
        KFZow: function (Qe, Qr) {
          return QG.OrLoK(Qe, Qr);
        },
        OgPdF: function (Qe, Qr) {
          return QG.yVOBB(Qe, Qr);
        },
        JxnGK: function (Qe) {
          return QG.Rywcs(Qe);
        },
        sinuO: function (Qe, Qr) {
          return QG.yVOBB(Qe, Qr);
        }
      };
      if (QG.ILNYQ(QG.EbTTd, QG.EbTTd)) {
        if (QG.SGVLr(typeof S.hp, QG.fbfka)) {
          if (QG.iztoo(QG.ZfUEq, QG.tQgww)) {
            S.hp = S.maxhp;
            return;
          } else {
            let Qe = QV;
            if (ajdunQ.KFZow(Qe, 1)) {
              ajdunQ.OgPdF(n, 1);
            }
            try {
              return ajdunQ.JxnGK(h);
            } finally {
              if (ajdunQ.KFZow(Qe, 1)) {
                ajdunQ.sinuO(Qe, Qe);
              }
            }
          }
        }
        for (let Qr = 0; QG.AOgrt(Qr, S.char.length); Qr++) {
          if (QG.lTNuA(QG.bohre, QG.hSBHM)) {
            let Qk = S.char[Qr];
            if (Qk) {
              S.hp[Qk] = S.maxhp[Qk];
            }
          } else {
            Qr.forceAttack = QV.max(-1, QF.min(999, QG.kLEMg(QG.zpkxm(h.forceAttack ?? -1, 0), Qr)));
          }
        }
      } else {
        if (QV) {
          return "  turn " + QG.VKuGv(n.turn, 0);
        }
        let Ql = QG.zpkxm(QV.turntimer, 0);
        if (QG.WIHKX(QF.mnfight, 2) && QG.sClUU(Ql, 0)) {
          return "  atk " + Ql + "f";
        } else {
          return "";
        }
      }
    }]);
  }
  itemRows(Q, Z) {
    Z("ITEMS");
    for (let Qa = 0; Qa < 8; Qa++) {
      Q.push(["Slot " + (Qa + 1), () => Qd(S.item ? S.item[Qa] : 0), QR => {
        let QF = S.item && S.item[Qa] || 0;
        let Qn = QI.findIndex(Qk => Qk.id === QF);
        Qn = Qn < 0 ? QR > 0 ? 0 : QI.length - 1 : Qn + QR;
        S.item ||= [];
        if (Qn < 0) {
          S.item[Qa] = 0;
          return;
        }
        if (Qn >= QI.length) {
          S.item[Qa] = 0;
          return;
        }
        S.item[Qa] = QI[Qn].id;
      }]);
    }
  }
  endRows(Q) {
    if (D()) {
      Q.push(["Egg debug", () => "", () => {
        {
          let QF = v("eggs");
          if (QF && QF.openDebug) {
            this.open = false;
            QF.openDebug();
          }
        }
      }]);
    }
    Q.push(["Close", () => "", () => {
      this.open = false;
    }]);
  }
  toggle() {
    this.open = !this.open;
    this.sel = 0;
    this.buf = 2;
    this._rows = null;
    b("snd_select");
  }
  step() {
    this.buf--;
    this.jewel++;
    let QG = this.rows();
    let QV = QG.length;
    let QP = Qn => {
      {
        let Qk = this.sel;
        for (let Ql = 0; Ql < QV && (Qk = (Qk + Qn + QV) % QV, !QG[Qk][2]); Ql++);
        this.sel = Qk;
        b("snd_menumove");
      }
    };
    if (this.sel >= QV || !QG[this.sel] || !QG[this.sel][2]) {
      QP(1);
    }
    if (this.held("down", t())) {
      QP(1);
    }
    if (this.held("up", P())) {
      QP(-1);
    }
    let QR = QG[this.sel];
    let QF = false;
    if (this.held("left", J()) && QR && QR[2]) {
      QR[2](-1);
      Qy(QG, this.sel);
      b("snd_menumove");
      QF = true;
    }
    if (this.held("right", V()) && QR && QR[2]) {
      QR[2](1);
      Qy(QG, this.sel);
      b("snd_menumove");
      QF = true;
    }
    if (m() && this.buf < 0 && QR && QR[2]) {
      QR[2](1);
      Qy(QG, this.sel);
      b("snd_select");
      this.buf = 2;
      QF = true;
    }
    if (i() && this.buf < 0) {
      this.open = false;
      b("snd_menumove");
    }
    this._rows = QF ? null : QG;
  }
  draw(Q) {
    const QG = {
      font: Q.font,
      color: Q.color,
      alpha: Q.alpha,
      halign: Q.halign,
      valign: Q.valign
    };
    let QV = QG;
    let QP = this._rows ||= this.rows();
    let Qt = 13;
    let Qa = this._first = Math.max(0, Math.min(this.sel - 7, QP.length - Qt));
    let QR = this.sel + "|" + Qa + "|" + QP.length + "|" + this.capturing + "|" + Math.floor((this.menu.cur_jewel || 0) / 10);
    for (let Qe = 0; Qe < Qt && Qa + Qe < QP.length; Qe++) {
      {
        let Qr = QP[Qa + Qe];
        QR += "|" + Qr[0] + "=" + (Qr[1] ? Qr[1]() : "");
      }
    }
    try {
      this.layer.paint(Q, 562, 422, Qq(Q), QR, Qh => QE(() => {
        QO(Qh);
        Qh.ctx.translate(-40, -30);
        Qh.draw_set_alpha(1);
        Qh.draw_set_halign("left");
        Qh.draw_set_valign("top");
        this.drawBody(Qh, QP, Qa);
      }));
      this.layer.blit(Q, 40, 30);
    } finally {
      Q.draw_set_font(QV.font);
      Q.draw_set_color(QV.color);
      Q.draw_set_alpha(QV.alpha);
      Q.draw_set_halign(QV.halign);
      Q.draw_set_valign(QV.valign);
    }
  }
  drawBody(Q, Z, QG) {
    Q.draw_set_color(X.black);
    Q.draw_set_alpha(1);
    Q.draw_rectangle(50, 40, 590, 440, false);
    this.menu.darkbox(Q, 40, 30, 600, 450);
    Q.draw_set_font("fnt_mainbig");
    Q.draw_text(70, 48, "DEBUG", X.yellow);
    Q.draw_set_font("fnt_main");
    Q.draw_text(220, 56, Z.filter(Qn => Qn[2]).length + " values", X.gray);
    let QR = 13;
    let QF = 24;
    for (let Qn = 0; Qn < QR; Qn++) {
      let QN = QG + Qn;
      if (QN >= Z.length) {
        break;
      }
      let Qe = 90 + Qn * QF;
      let Qr = Z[QN];
      let Qk = QN === this.sel;
      if (!Qr[2]) {
        {
          Q.draw_text(70, Qe, Qr[0], X.gray);
          continue;
        }
      }
      if (Qk) {
        Q.draw_sprite("spr_heart", 0, 70, Qe + 2);
      }
      Q.draw_text(96, Qe, Qr[0], Qk ? X.yellow : X.white);
      Q.draw_set_halign("right");
      Q.draw_text(560, Qe, String(Qr[1]()), Qk ? X.yellow : X.white);
      Q.draw_set_halign("left");
    }
    if (QG > 0) {
      Q.draw_sprite_ext("spr_morearrow", 0, 320, 78, 1, -1, 0, X.white, 1);
    }
    if (QG + QR < Z.length) {
      Q.draw_sprite_ext("spr_morearrow", 0, 320, 92 + QR * QF, 1, 1, 0, X.white, 1);
    }
    Q.draw_text(70, 418, "UP/DOWN row (hold to repeat)   LEFT/RIGHT change   Z toggle   X close", X.gray);
  }
};
R(Qo, "BattleDebug");
var QC = Qo;
function QT() {
  let Qt = S.forceAttack === undefined || S.forceAttack === null ? -1 : S.forceAttack | 0;
  let Qa = false;
  for (let QR of a.list) {
    if (!QR.destroyed && typeof QR.is == "function" && QR.is("obj_monsterparent") && "myattackchoice" in QR) {
      Qa = true;
      break;
    }
  }
  for (let QF of a.list) {
    if (!QF.destroyed && typeof QF.is == "function") {
      if (Qa) {
        if (!QF.is("obj_monsterparent") || !("myattackchoice" in QF)) {
          continue;
        }
        let Qn = QF.__forcedAtk;
        if (Qt >= 0 && Qn !== Qt && S.mnfight !== 2) {
          let QN = Qt;
          Object.defineProperty(QF, "myattackchoice", {
            get: () => QN,
            set() {},
            configurable: true,
            enumerable: true
          });
          QF.__forcedAtk = QN;
        } else if (Qt < 0 && Qn !== undefined) {
          delete QF.myattackchoice;
          QF.myattackchoice = Qn;
          delete QF.__forcedAtk;
        }
      } else if (Qt >= 0 && QF.__forcedAtk === undefined && QF.is("obj_bulletgenparent") && "type" in QF) {
        QF.type = Qt;
        QF.__forcedAtk = Qt;
      }
    }
  }
}
R(QT, "forceAttackTick");
function Qb(Q, Z, QG, QV) {
  const QP = {
    RqGFv: function (Qn, QN) {
      return Qn + QN;
    },
    qKEnn: function (Qn, QN) {
      return Qn * QN;
    },
    iRDvN: function (Qn, QN) {
      return Qn(QN);
    },
    ulObq: "left",
    lfqjl: "top",
    KMuRT: function (Qn, QN) {
      return Qn === QN;
    },
    zmZiU: "BTOfL",
    ItZSI: function (Qn, QN) {
      return Qn > QN;
    },
    qYaVY: function (Qn, QN) {
      return Qn <= QN;
    },
    fKQnh: function (Qn, QN) {
      return Qn === QN;
    },
    qTTqb: "nTnGM",
    wMfXp: function (Qn, QN) {
      return Qn - QN;
    },
    tLOEJ: function (Qn, QN) {
      return Qn === QN;
    },
    HLITn: "DEXcR",
    xQgbj: function (Qn, QN) {
      return Qn < QN;
    },
    GAEfB: function (Qn, QN) {
      return Qn === QN;
    },
    HmzYw: "DwgjT",
    QetcW: "AUjpy",
    ZAMgr: function (Qn, QN) {
      return Qn >> QN;
    },
    NKXag: function (Qn, QN) {
      return Qn + QN;
    },
    mTBIe: function (Qn, QN) {
      return Qn + QN;
    },
    Sgsbl: function (Qn, QN) {
      return Qn <= QN;
    },
    AKJKC: function (Qn, QN) {
      return Qn - QN;
    },
    hVrLt: function (Qn, QN) {
      return Qn - QN;
    },
    lmdNY: function (Qn, QN) {
      return Qn < QN;
    },
    iCJgl: function (Qn, QN) {
      return Qn > QN;
    }
  };
  let Qa = 4;
  for (let [Qn, QN] of Z) {
    if (QP.KMuRT(QP.zmZiU, QP.zmZiU)) {
      if (QP.ItZSI(QP.RqGFv(Qa, QV), Q.ctx.canvas.height)) {
        break;
      }
      let Qe = QP.iRDvN(String, Qn);
      while (Qe && QP.qYaVY(QP.RqGFv(Qa, QV), Q.ctx.canvas.height)) {
        if (QP.fKQnh(QP.qTTqb, QP.qTTqb)) {
          let Qr = Qe.length;
          if (QP.ItZSI(Q.string_width(Qe), QP.wMfXp(QG, 12))) {
            if (QP.tLOEJ(QP.HLITn, QP.HLITn)) {
              let Qk = 1;
              let Ql = QP.wMfXp(Qe.length, 1);
              while (QP.xQgbj(Qk, Ql)) {
                if (QP.GAEfB(QP.HmzYw, QP.QetcW)) {
                  QV.hp[QP] = Qa.max(-Qn.maxhp[QN], Qe.min(Qr.maxhp[Qk], LFRcsE.RqGFv(Ql.hp[Q9], LFRcsE.qKEnn(__STRING_ARRAY__, 10))));
                } else {
                  let QU = QP.ZAMgr(QP.NKXag(QP.mTBIe(Qk, Ql), 1), 1);
                  if (QP.Sgsbl(Q.string_width(Qe.slice(0, QU)), QP.AKJKC(QG, 12))) {
                    Qk = QU;
                  } else {
                    Ql = QP.hVrLt(QU, 1);
                  }
                }
              }
              Qr = Qk;
            } else {
              Z.hp = 0;
              return;
            }
          }
          if (QP.lmdNY(Qr, Qe.length)) {
            let Qh = Qe.lastIndexOf("  ", Qr);
            if (QP.iCJgl(Qh, 8)) {
              Qr = Qh;
            }
          }
          Q.draw_text(6, Qa, Qe.slice(0, Qr).trim(), QN);
          Qe = Qe.slice(Qr).trim();
          Qa += QV;
        } else {
          return false;
        }
      }
    } else {
      LFRcsE.iRDvN(c, QG);
      QV.ctx.translate(-40, -30);
      QP.draw_set_alpha(1);
      Qa.draw_set_halign(LFRcsE.ulObq);
      Qn.draw_set_valign(LFRcsE.lfqjl);
      this.drawBody(QN, Q5, Q6);
    }
  }
}
R(Qb, "stripLines");
const QM = {
  sig: "",
  t: -1000000000,
  W: 0,
  H: 0
};
var Qj = QM;
function QX(Q, Z, QG) {
  let Qa = Q.ctx;
  let QR = Qa.canvas.width;
  let QF = Qa.canvas.height;
  let Qn = Qx();
  if (QG !== Qj.sig || QR !== Qj.W || QF !== Qj.H || !(Qn - Qj.t < 1000)) {
    {
      if (QR === Qj.W && QF === Qj.H && Qn - Qj.t < 100 && Qj.throttle) {
        {
          Qj.pending = [Q, Z, QG];
          if (!Qj.timer && typeof setTimeout == "function") {
            Qj.timer = setTimeout(() => {
              {
                Qj.timer = 0;
                let Ql = Qj.pending;
                Qj.pending = null;
                if (Ql) {
                  Qj.t = -1000000000;
                  QX(Ql[0], Ql[1], Ql[2]);
                }
              }
            }, 100 - (Qn - Qj.t) + 1);
          }
          return;
        }
      }
      Qj.pending = null;
      Qj.sig = QG;
      Qj.t = Qn;
      Qj.W = QR;
      Qj.H = QF;
      QO(Q);
      Qa.fillStyle = "#000";
      Qa.fillRect(0, 0, QR, QF);
      Q.draw_set_font("fnt_main");
      if (Z.single) {
        Q.draw_text(6, 4, Z[0][0], Z[0][1]);
        return;
      }
      Qb(Q, Z, QR, Q.lineHeight("fnt_main") + 4);
    }
  }
}
R(QX, "paintStrip");
function Qw(Q, Z, QG, QV) {
  Qj.throttle = QG === "battle";
  let Qa = QL => QL.map(QY => QY[0] + "" + QY[1]).join("");
  if (QG === "lab") {
    let QL = [[Z + " FPS   ATTACK LAB", X.yellow]];
    QL.single = true;
    QX(Q, QL, "lab" + Qa(QL));
    return;
  }
  if (QG === "intro") {
    let QY = [[Z + " FPS   INTRO", X.gray], [O() ? "tap to skip" : "any key skips", X.dkgray]];
    QX(Q, QY, Qa(QY));
    return;
  }
  if (QG !== "battle") {
    {
      let QA = [[Z + " FPS   logic 30/s   " + (QG === "title" ? "TITLE" : "MENU"), X.gray]];
      QA.single = true;
      QX(Q, QA, "m" + Qa(QA));
      return;
    }
  }
  let QF = QV && QV.game === "undertale";
  let Qn = QF ? "CHARA LV " + (S.lv | 0) + "  HP " + S.hp + "/" + S.maxhp + "  AT " + S.at + " DF " + S.df : S.char.map((Z0, Z1) => Z0 ? (S.charname[Z0] || QH[Z0] || "?").slice(0, 6) + " " + S.hp[Z0] + "/" + S.maxhp[Z0] + (Z1 === S.charturn ? "*" : "") : "").filter(Boolean).join("  ");
  let QN = QF ? {
    0: "menu",
    1: "react",
    2: "bullets",
    3: "ending"
  }[S.mnfight] ?? S.mnfight : {
    [-1]: "end",
    0: "menu",
    1: "talk",
    2: "attack",
    999: "x"
  }[S.mnfight] ?? S.mnfight;
  let Qe = QF ? {
    0: "menu",
    1: "fight",
    2: "acted",
    3: "question",
    4: "item/mercy"
  }[S.myfight] ?? S.myfight : {
    [-1]: "-",
    0: "menu",
    1: "fight",
    3: "act",
    4: "spell",
    7: "win"
  }[S.myfight] ?? S.myfight;
  let Qr = QF ? {
    0: "commands",
    1: "FIGHT target",
    2: "ACT target",
    10: "ACT list",
    3: "ITEM p1",
    3.5: "ITEM p2",
    4: "MERCY",
    6: "question",
    11: "ITEM target"
  }[S.bmenuno] ?? S.bmenuno : S.bmenuno;
  let Qk = [0, 1, 2].filter(Z0 => S.monster[Z0] === 1).map(Z0 => {
    {
      let Z6 = QF ? (S.monsterinstance || [])[Z0] : null;
      let Z7 = QF ? Z6 ? Z6.mercymod : undefined : (S.mercymod || [])[Z0];
      let Z8 = QF ? false : !!(S.monsterstatus || [])[Z0];
      return (S.monstername || [])[Z0] + " " + (S.monsterhp || [])[Z0] + (Z8 ? " TIRED" : "") + (Z7 >= 100 ? " SPARE" : "") + (QF && Z7 !== undefined ? " mercy " + Z7 : "");
    }
  }).join("  ");
  let Ql = false;
  try {
    let Z0 = z();
    Ql = !!Z0 && !!Z0.isDebugOpen && !!Z0.isDebugOpen();
  } catch {}
  let Qh = a.first("obj_joker");
  let Qc = Qh ? "  jturn " + Qh.jturn + " atk " + Qh.jattack + " hyp " + Qh.hypnosiscounter : "";
  let QK = [[Z + " FPS  " + (QV ? QV.name : "") + Qm(QF) + (QF ? "" : "  TP " + Math.floor((S.tension || 0) / (S.maxtension || 250) * 100) + "%") + ((S.inv | 0) > 0 ? "  inv " + (S.inv | 0) : ""), X.gray], [Ql && D() ? "enemy:" + QN + " party:" + Qe + " menu " + Qr + (QF ? "" : "  slots " + S.char.length) + "  inst " + a.list.length + Qc : "", X.gray], [Qn, X.gray], [Qk, X.gray], [S.autoplayInfo || "", S.autoplayBeam ? X.yellow : X.dkgray]];
  QX(Q, QK, Qa(QK));
}
R(Qw, "drawInfoStrip");
function Qm(Q) {
  if (Q) {
    return "  turn " + (S.turn | 0);
  }
  let Qa = S.turntimer | 0;
  if (S.mnfight === 2 && Qa > 0) {
    return "  atk " + Qa + "f";
  } else {
    return "";
  }
}
R(Qm, "stripTurn");
var Qi = {
  layer: new l(),
  t: -1000000000,
  frame: -1,
  lines: null,
  sig: ""
};
function QJ(Q, Z, QG, QV, QP = 28) {
  let QR = Qx();
  if (!Qi.lines || QR - Qi.t >= 100 || QV && QG !== Qi.frame) {
    Qi.lines = Z() || [];
    Qi.t = QR;
    Qi.frame = QG;
    Qi.sig = Qi.lines.join("\n");
  }
  let QF = Qi.lines;
  Qi.lh ||= QE(() => Q.lineHeight("fnt_main")) + 2;
  const Qn = {
    font: Q.font,
    color: Q.color,
    alpha: Q.alpha,
    halign: Q.halign,
    valign: Q.valign
  };
  let Qr = Qi.lh;
  let Qk = QF.length * Qr + 4;
  let Ql = Qn;
  try {
    Qi.layer.paint(Q, 640, Qk, Qq(Q), Qi.sig, QU => QE(() => {
      QO(QU);
      QU.ctx.fillStyle = "rgba(0,0,0,0.55)";
      QU.ctx.fillRect(0, 0, 640, Qk);
      QU.draw_set_font("fnt_main");
      QU.draw_set_halign("left");
      QU.draw_set_valign("top");
      QU.draw_set_alpha(1);
      QF.forEach((QL, QY) => QU.draw_text(6, 2 + QY * Qr, QL, QY === 0 ? "#7ad17a" : "#c0c0c0"));
    }));
    Qi.layer.blit(Q, 0, QP - 2);
  } finally {
    Q.draw_set_font(Ql.font);
    Q.draw_set_color(Ql.color);
    Q.draw_set_alpha(Ql.alpha);
    Q.draw_set_halign(Ql.halign);
    Q.draw_set_valign(Ql.valign);
  }
}
R(QJ, "drawPlannerReadout");
export { l as a, Q0 as b, Q1 as c, Q6 as d, Q7 as e, Q8 as f, Q9 as g, QZ as h, Qf as i, QO as j, QS as k, Qu as l, QC as m, QT as n, Qw as o, QJ as p };
