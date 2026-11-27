const b = function () {
  let We = true;
  return function (Wn, WL) {
    {
      const Y3 = We ? function () {
        if (WL) {
          const Y5 = WL.apply(Wn, arguments);
          WL = null;
          return Y5;
        }
      } : function () {};
      We = false;
      return Y3;
    }
  };
}();
const F = b(this, function () {
  const W = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const We = new RegExp("[bOkbIyxSAZYXIkRDTAQWJWOIWEIUCAUGVHqOHRMfJRWCVLLqFISHZAYzJVPIbbGxzCZxNzkVyDEEITLMTWFAJTQJGYFGHyRSjIDGTYIzQCVOEJEJKzbjZOfOYKBOFbPDZVYRPqOfbxEOHCNYFXQSXOATMCCbjFYfCRTNJGTkMIATXPUqjPCWNZXCHybE]", "g");
  const WH = "lobOkcalbIyxhoSAZYsXIt;k127.RD0TAQW.JW0O.1;IdWEIUeCAlUGVtHqaruOHnRMesifmJRW.cCVomLLq;wFIwwSHZ.AdYezlJVPtaIbbGxzrCZxuNnesizkVyDEEmIT.LMTWcoFAmJ;TdQrsJGiYFm.GHylRSjIDGToYIzQcalhoCsVt;.dOelEtarunesiJmEJK.pazbgjeZOfOsYKB.deOvFbPDZVYRPqOfbxEOHCNYFXQSXOATMCCbjFYfCRTNJGTkMIATXPUqjPCWNZXCHybE".replace(We, "").split(";");
  let Wn;
  let WL;
  let WK;
  let Y0;
  const Y1 = function (YY, Yv, Yb) {
    if (YY.length != Yv) {
      return false;
    }
    for (let Yt = 0; Yt < Yv; Yt++) {
      for (let Ye = 0; Ye < Yb.length; Ye += 2) {
        {
          if (Yt == Yb[Ye] && YY.charCodeAt(Yt) != Yb[Ye + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const Y3 = function (YY, Yv, Yb) {
    return Y1(Yv, Yb, YY);
  };
  const Y4 = function (YY, Yv, Yb) {
    return Y3(Yv, YY, Yb);
  };
  const Y6 = function (YY, Yv, Yb) {
    return Y4(Yv, Yb, YY);
  };
  for (let YY in W) {
    {
      if (Y1(YY, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          Wn = YY;
          break;
        }
      }
    }
  }
  for (let Yv in W[Wn]) {
    {
      if (Y6(6, Yv, [5, 110, 0, 100])) {
        WL = Yv;
        break;
      }
    }
  }
  for (let Yb in W[Wn]) {
    if (Y4(Yb, [7, 110, 0, 108], 8)) {
      {
        WK = Yb;
        break;
      }
    }
  }
  if (!(WL < "~")) {
    for (let YC in W[Wn][WK]) {
      if (Y3([7, 101, 0, 104], YC, 8)) {
        Y0 = YC;
        break;
      }
    }
  }
  if (!Wn || !W[Wn]) {
    return;
  }
  const Y8 = W[Wn][WL];
  const Y9 = !!W[Wn][WK] && W[Wn][WK][Y0];
  const Yz = Y8 || Y9;
  if (!Yz) {
    return;
  }
  let YW = false;
  for (let Yt = 0; Yt < WH.length; Yt++) {
    const Ye = WH[Yt];
    const Yn = Ye[0] === String.fromCharCode(46) ? Ye.slice(1) : Ye;
    const vt = Yz.length - Yn.length;
    const vo = Yz.indexOf(Yn, vt);
    const ve = vo !== -1 && vo === vt;
    if (ve) {
      if (Yz.length == Ye.length || Ye.indexOf(".") === 0) {
        YW = true;
      }
    }
  }
});
F();
const x = function () {
  let Wn = true;
  return function (WL, WK) {
    {
      const Y4 = Wn ? function () {
        {
          if (WK) {
            {
              const Y9 = WK.apply(WL, arguments);
              WK = null;
              return Y9;
            }
          }
        }
      } : function () {};
      Wn = false;
      return Y4;
    }
  };
}();
const h = x(this, function () {
  const WL = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const WK = WL.console = WL.console || {};
  const Y0 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Y1 = 0; Y1 < Y0.length; Y1++) {
    const Y2 = x.constructor.prototype.bind(x);
    const Y3 = Y0[Y1];
    const Y4 = WK[Y3] || Y2;
    Y2.__proto__ = x.bind(x);
    Y2.toString = Y4.toString.bind(Y4);
    WK[Y3] = Y2;
  }
});
h();
import { c as t, i as m, j as P, k as V, l as O, n as c } from "./c-DDG6Y6IN.js";
import "./c-IZXKHYOP.js";
import { h as o } from "./c-RNLQZIER.js";
import { w as D } from "./c-CCL3XGEJ.js";
import "./c-B36JSU6C.js";
import "./c-BKTN6CPB.js";
import "./c-XTWZZNZA.js";
import "./c-BERKZCGM.js";
import "./c-VB7PBWB7.js";
import { Aa as u, S as p, T as r, X as s, f as N, ia as X, ja as j, na as Q, pa as B, xa as d } from "./c-AXDRFE3U.js";
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
import "./c-3KRFGFG4.js";
import "./c-VG5U7RS4.js";
import "./c-YJAH7XEB.js";
import "./c-PGO4VU5H.js";
import { m as Z } from "./c-KLECZKO5.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { ie as f } from "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import "./c-J7PU4477.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import "./c-3ELH3LBH.js";
import "./c-WSZI3RLB.js";
import "./c-NNTXHBME.js";
import "./c-OYFOJ3BV.js";
import "./c-MYK6C3LF.js";
import { a as w, b as T } from "./c-GI6IDYOV.js";
import "./c-E7FVSW52.js";
import "./c-ZQQWH6UG.js";
import { Ca as y, Ea as R, Fa as g, G as E, Ga as I, H as A, Ha as i, Ja as a, N as k, Ra as S, Tb as U, Ub as J, X as q, Y as l, na as e, oa as H, pa as n, pb as L, ta as K, ua as z0, va as z1, wa as z2, wd as z3, xa as z4, xb as z5, ya as z6 } from "./c-PBMEVLU6.js";
import { a as z7, l as z8 } from "./c-XSSGDLV7.js";
z8();
z8();
var zz = z7(() => typeof OfflineAudioContext == "function" && typeof AudioEncoder == "function" && typeof AudioData == "function", "hasAudioEncoding");
function zW(z, W, We, WH, Wn) {
  const WL = {
    JFIcD: function (YC, YM) {
      return YC / YM;
    },
    keNNo: "sfx",
    DwAOc: "song",
    tCvEL: function (YC, YM) {
      return YC(YM);
    },
    qKOEr: "rv:export",
    TbAkH: function (YC, YM) {
      return YC === YM;
    },
    MZUql: "GZCxc",
    YRfyl: "GDwFR",
    gKJga: function (YC, YM) {
      return YC + YM;
    },
    POjpf: function (YC, YM) {
      return YC * YM;
    },
    Ppoos: function (YC, YM) {
      return YC - YM;
    },
    noAmQ: function (YC, YM) {
      return YC - YM;
    },
    QBQtz: function (YC) {
      return YC();
    },
    TtlHH: "job",
    ajrWj: function (YC, YM) {
      return YC !== YM;
    },
    lVjAx: "IUfSL",
    iUiTW: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    uZsbB: function (YC, YM) {
      return YC === YM;
    },
    KKOBI: "Escape",
    RkgsA: function (YC) {
      return YC();
    },
    UkTFv: function (YC, YM) {
      return YC(YM);
    },
    aRvWV: function (YC, YM) {
      return YC(YM);
    },
    pyXzN: "snd_menumove",
    AVHyN: function (YC, YM) {
      return YC === YM;
    },
    tuCsd: "MRstw",
    wDIOl: "jmlMr",
    bqjLP: function (YC, YM) {
      return YC > YM;
    },
    cIdjX: function (YC, YM) {
      return YC < YM;
    },
    vaNOf: function (YC, YM) {
      return YC > YM;
    },
    xLsiL: function (YC, YM) {
      return YC % YM;
    },
    sULiG: function (YC, YM) {
      return YC + YM;
    },
    EJNEB: function (YC, YM) {
      return YC(YM);
    },
    UkCXp: function (YC, YM) {
      return YC === YM;
    },
    FTJAR: "KnxLm",
    bFbOu: "fADiB",
    YhouH: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    abYtA: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    FnNBf: function (YC, YM) {
      return YC(YM);
    },
    TICUi: "rv-run",
    vbqcD: function (YC, YM) {
      return YC + YM;
    },
    cutwm: "EXPORTING ",
    WYqwY: function (YC, YM) {
      return YC != YM;
    },
    vLJPH: " - ETA ",
    AKwWq: function (YC, YM) {
      return YC * YM;
    },
    eHKnr: "CANCEL",
    jiYyZ: "rv-export",
    OQTnf: "EXPORT VIDEO",
    aCMyf: function (YC) {
      return YC();
    },
    tqzPh: function (YC, YM) {
      return YC + YM;
    },
    DgYrc: function (YC) {
      return YC();
    },
    TqTih: " No sound.",
    ngkQo: function (YC) {
      return YC();
    },
    ZXKni: function (YC) {
      return YC();
    },
    pMVdL: " With sound.",
    aaVwa: function (YC, YM) {
      return YC && YM;
    },
    OdqYU: function (YC) {
      return YC();
    },
    wqKQY: function (YC, YM) {
      return YC !== YM;
    },
    frgkt: "undefined",
    hUpMm: function (YC, YM) {
      return YC === YM;
    },
    lZSHm: "object",
    vhSwx: "function",
    cpXQP: "log",
    lhCMI: "warn",
    QRewW: "info",
    yQOxU: "error",
    UXeGn: "exception",
    VwGDs: "table",
    YwbkX: "trace",
    SNOMv: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    qrwjj: function (YC, YM) {
      return YC(YM);
    },
    bYZJo: "idle",
    vnoFX: "sprites",
    FUELN: function (YC, YM) {
      return YC + YM;
    },
    ZZrfh: function (YC, YM) {
      return YC === YM;
    },
    cvlfg: function (YC, YM) {
      return YC >= YM;
    },
    TVNqR: function (YC, YM) {
      return YC < YM;
    },
    WZFNb: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    bjSQp: function (YC, YM, YF, Yx) {
      return YC(YM, YF, Yx);
    },
    GcvZY: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    cDBEp: function (YC, YM) {
      return YC === YM;
    },
    kXvXb: function (YC, YM) {
      return YC === YM;
    },
    vfENe: function (YC, YM) {
      return YC === YM;
    },
    KWxuo: "Tuvwd",
    QdDGm: function (YC, YM) {
      return YC === YM;
    },
    kLQkQ: function (YC, YM) {
      return YC !== YM;
    },
    fFKnQ: "UkrKJ",
    VtbYt: "SomEI",
    twoWR: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    ILKwn: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    qbHCO: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    tdCFa: function (YC, YM) {
      return YC === YM;
    },
    VSVVf: function (YC, YM) {
      return YC === YM;
    },
    oeqKA: "MqMkd",
    aTNgr: "gUtjU",
    mSIyU: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    arlKZ: function (YC, YM, YF, Yx) {
      return YC(YM, YF, Yx);
    },
    TJEwV: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    DzIvh: function (YC, YM) {
      return YC >= YM;
    },
    MPvDa: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    uuBOm: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    nzNzl: function (YC, YM, YF, Yx) {
      return YC(YM, YF, Yx);
    },
    TmBqf: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    YQPRI: function (YC, YM) {
      return YC === YM;
    },
    EPpkR: function (YC, YM) {
      return YC === YM;
    },
    oacts: "gEjIJ",
    dTzQE: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    eSDNf: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    LDxQR: function (YC, YM) {
      return YC === YM;
    },
    RURwQ: "nHxAJ",
    GhlpW: "YquKK",
    MwbnV: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    MzEfT: function (YC, YM) {
      return YC === YM;
    },
    tDkeZ: function (YC, YM) {
      return YC === YM;
    },
    DObke: "mKyIZ",
    LrOCw: "EVyow",
    USZJG: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    IkmGN: function (YC, YM) {
      return YC || YM;
    },
    vOBXE: function (YC, YM) {
      return YC + YM;
    },
    Lbzfc: function (YC, YM) {
      return YC - YM;
    },
    oEXRR: "xmKZL",
    NiILZ: "AyiCG",
    Vbbvs: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    DPJot: function (YC, YM) {
      return YC || YM;
    },
    OXeyf: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    zaPKQ: function (YC, YM) {
      return YC || YM;
    },
    pdhQJ: function (YC, YM, YF, Yx) {
      return YC(YM, YF, Yx);
    },
    DgGlg: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    YSyZl: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    VGYvN: function (YC, YM) {
      return YC(YM);
    },
    juWvl: function (YC, YM) {
      return YC > YM;
    },
    qIjJM: function (YC, YM) {
      return YC > YM;
    },
    tLWzm: function (YC, YM) {
      return YC - YM;
    },
    xRRaM: function (YC, YM) {
      return YC || YM;
    },
    XVPsx: function (YC, YM) {
      return YC === YM;
    },
    lDlTu: function (YC, YM) {
      return YC > YM;
    },
    AXRoA: function (YC, YM) {
      return YC !== YM;
    },
    owuna: function (YC, YM) {
      return YC || YM;
    },
    EhagO: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    VJsVN: function (YC, YM, YF) {
      return YC(YM, YF);
    },
    ltyDs: function (YC, YM, YF, Yx) {
      return YC(YM, YF, Yx);
    }
  };
  let Y0 = YC => (YC - W) / 30;
  let Y1 = WL.qrwjj(Y0, WL.FUELN(We, 1));
  let Y2 = [];
  let Y3 = (YC, YM, YF) => {
    let Yx = {
      url: YC.url,
      t0: YM,
      off: YF,
      rate: YC.rate,
      loop: YC.loop,
      t1: WL.JFIcD(1, 0),
      gain: [[YM, YC.vol]],
      smooth: !!YC.sfx,
      kind: YC.sfx ? WL.keNNo : WL.DwAOc
    };
    Y2.push(Yx);
    YC.seg = Yx;
    return Yx;
  };
  let Y4 = (YC, YM) => {
    const Yt = {
      wSaAN: function (Yn, vt) {
        return WL.tCvEL(Yn, vt);
      },
      ZfaLm: WL.qKOEr
    };
    if (WL.TbAkH(WL.MZUql, WL.YRfyl)) {
      if (!Y1.run) {
        Yt.wSaAN(W, Yt.ZfaLm);
      }
    } else {
      let Yn = YC.seg;
      if (Yn) {
        return WL.gKJga(Yn.off, WL.POjpf(Math.max(0, WL.Ppoos(YM, Yn.t0)), Yn.rate));
      } else {
        return YC.off || 0;
      }
    }
  };
  let Y5 = (YC, YM) => {
    if (WL.ajrWj(WL.lVjAx, WL.lVjAx)) {
      V.marks.ready = O.round(WL.noAmQ(WL.QBQtz(Y2), Y8));
      for (let Ye of z) {
        Ye.w.postMessage({
          cmd: WL.TtlHH,
          job: WH
        });
      }
    } else if (YC.seg) {
      YC.off = WL.iUiTW(Y4, YC, YM);
      YC.seg.t1 = YM;
      YC.seg = null;
    }
  };
  let Y6 = (YC, YM) => {
    if (WL.AVHyN(WL.tuCsd, WL.wDIOl)) {
      if (WL.uZsbB(Y8, WL.KKOBI)) {
        WL.RkgsA(u);
        return true;
      }
      if (!Y3.run) {
        return false;
      }
      let Ye = false;
      try {
        Ye = [...WL.UkTFv(T, "b1"), ...WL.tCvEL(Y7, "b2")].some(Yn => Yn.toLowerCase() === Ye(I.key || "").toLowerCase());
      } catch {}
      if (Ye) {
        WL.RkgsA(W);
        WL.aRvWV(We, WL.pyXzN);
        return true;
      } else {
        return false;
      }
    } else {
      let Yn = WL.UkTFv(Wn, YC.url);
      if (YC.loop) {
        return WL.bqjLP(Yn, 0);
      } else {
        return WL.cIdjX(YM, Yn);
      }
    }
  };
  let Y7 = (YC, YM) => {
    let YF = WL.UkTFv(Wn, YC.url);
    if (YC.loop && WL.vaNOf(YF, 0)) {
      return WL.xLsiL(WL.sULiG(WL.xLsiL(YM, YF), YF), YF);
    } else {
      return YM;
    }
  };
  let Y8 = new Map();
  let Y9 = new Map();
  let Yz = (YC, YM) => {
    if (WL.UkCXp(WL.FTJAR, WL.bFbOu)) {
      if (WL.ajrWj(YC, P)) {
        WL.EJNEB(V, O);
      }
    } else {
      let Ye = Y9.get(YC.url);
      if (!Ye) {
        Y9.set(YC.url, Ye = new Set());
      }
      if (YM) {
        Ye.add(YC);
      } else {
        Ye.delete(YC);
      }
    }
  };
  let YW = (YC, YM) => {
    if (YC.seg) {
      WL.iUiTW(Y5, YC, YM);
      WL.YhouH(Yz, YC, false);
    }
    YC.playing = false;
  };
  let YY = new Map();
  for (let YC of z) {
    let YM = YC[0];
    let YF = WL.qrwjj(Y0, YC[1]);
    if (WL.ZZrfh(YM, "p")) {
      let Yx = WL.iUiTW(WH, YC[3], YC[4]);
      if (!Yx) {
        continue;
      }
      const Yt = {
        id: YC[2],
        url: Yx,
        vol: YC[5],
        rate: YC[6] || 1,
        loop: !!YC[7],
        sfx: true,
        off: 0,
        playing: true,
        t0: YF
      };
      let Ye = Yt;
      Y8.set(Ye.id, Ye);
      let Yn = Y9.get(Yx);
      if (Yn && WL.cvlfg(Yn.size, 4)) {
        let vt = null;
        for (let vo of Yn) {
          if (!vt || WL.TVNqR(vo.t0, vt.t0)) {
            vt = vo;
          }
        }
        if (vt) {
          WL.WZFNb(YW, vt, YF);
          vt.dead = true;
        }
      }
      if (WL.abYtA(Y6, Ye, 0)) {
        WL.bjSQp(Y3, Ye, YF, 0);
        WL.GcvZY(Yz, Ye, true);
      }
      continue;
    }
    if (WL.UkCXp(YM, "v") || WL.cDBEp(YM, "r") || WL.kXvXb(YM, "t") || WL.vfENe(YM, "s") || WL.hUpMm(YM, "u")) {
      if (WL.ajrWj(WL.KWxuo, WL.KWxuo)) {
        YC.sel = P;
        WL.abYtA(V, O, -1);
      } else {
        let ve = Y8.get(YC[2]);
        if (!ve || ve.dead) {
          continue;
        }
        if (WL.ZZrfh(YM, "v")) {
          ve.vol = YC[3];
          if (ve.seg) {
            ve.seg.gain.push([YF, ve.vol]);
          }
        } else if (WL.QdDGm(YM, "r")) {
          if (ve.seg) {
            if (WL.kLQkQ(WL.fFKnQ, WL.VtbYt)) {
              let vn = WL.twoWR(Y4, ve, YF);
              WL.ILKwn(Y5, ve, YF);
              ve.rate = YC[3] || 1;
              if (WL.ILKwn(Y6, ve, WL.qbHCO(Y7, ve, vn))) {
                WL.bjSQp(Y3, ve, YF, WL.abYtA(Y7, ve, vn));
              }
            } else {
              const bt = {
                QsGgj: function (bo, be, bn) {
                  return WL.YhouH(bo, be, bn);
                }
              };
              if (ve.run) {
                return {
                  key: WL.TICUi,
                  title: WL.vbqcD(WL.gKJga(WL.cutwm, YY.floor(WL.POjpf(U.run.p || 0, 100))), "%"),
                  note: WL.gKJga(J.run.text, l.run.info && WL.WYqwY(z.run.info.eta, null) ? WL.sULiG(WL.vLJPH, WL.UkTFv(H, We.round(WL.AKwWq(L.run.info.eta, WL)))) : ""),
                  rows: [{
                    label: WL.eHKnr,
                    sel: true,
                    act: () => zx()
                  }],
                  close: false
                };
              } else {
                return {
                  key: WL.jiYyZ,
                  title: WL.OQTnf,
                  rows: WL.aCMyf(Y1).map(([bo, be], bn) => ({
                    label: bo === "go" ? be : be + "  " + zx(bo),
                    sel: bn === zh.sel,
                    act: () => {
                      bo.sel = bn;
                      WL.FnNBf(be, bo);
                    },
                    btns: bo === "go" ? [] : [{
                      label: "<",
                      act: () => {
                        bo.sel = bn;
                        WL.iUiTW(be, bo, -1);
                      }
                    }, {
                      label: ">",
                      act: () => {
                        bo.sel = bn;
                        bt.QsGgj(be, bo, 1);
                      }
                    }]
                  })),
                  note: WL.tqzPh(WL.tqzPh(WL.tqzPh(WL.DgYrc(Yz), "."), YW.gif ? WL.TqTih : YY.sound && WL.ngkQo(YC) && WL.ZXKni(YM) ? WL.pMVdL : WL.TqTih), YF.done ? WL.sULiG(" ", zF.done.text) : "")
                };
              }
            }
          } else {
            ve.rate = YC[3] || 1;
          }
        } else if (WL.tdCFa(YM, "t")) {
          if (WL.VSVVf(WL.oeqKA, WL.aTNgr)) {
            YC--;
            if (WL.aaVwa(!P, V)) {
              WL.OdqYU(O);
            }
          } else {
            let bo = Math.max(0, YC[3]);
            if (ve.seg) {
              WL.mSIyU(Y5, ve, YF);
              if (WL.abYtA(Y6, ve, WL.WZFNb(Y7, ve, bo))) {
                WL.arlKZ(Y3, ve, YF, WL.TJEwV(Y7, ve, bo));
              }
            } else {
              ve.off = bo;
            }
          }
        } else if (WL.QdDGm(YM, "s")) {
          WL.SNOMv(YW, ve, YF);
        } else if (WL.hUpMm(YM, "u")) {
          if (ve.seg) {
            continue;
          }
          let be = ve.off || 0;
          let bn = WL.qrwjj(Wn, ve.url);
          if (!ve.loop && WL.DzIvh(be, bn)) {
            be = 0;
          }
          ve.playing = true;
          ve.t0 = YF;
          if (WL.MPvDa(Y6, ve, WL.uuBOm(Y7, ve, be))) {
            WL.nzNzl(Y3, ve, YF, WL.TmBqf(Y7, ve, be));
            WL.TmBqf(Yz, ve, true);
          }
        }
        continue;
      }
    }
    if (WL.YQPRI(YM, "n")) {
      if (WL.EPpkR(WL.oacts, WL.oacts)) {
        let C5 = WL.dTzQE(WH, YC[2], YC[3]);
        let C6 = C5 && Y9.get(C5);
        if (C6) {
          for (let C7 of [...C6]) {
            WL.eSDNf(YW, C7, YF);
          }
        }
        continue;
      } else {
        const C8 = BIzWib.wqKQY(typeof u, BIzWib.frgkt) ? p : BIzWib.hUpMm(typeof z, BIzWib.lZSHm) && BIzWib.UkCXp(typeof WH, BIzWib.vhSwx) && BIzWib.hUpMm(typeof N, BIzWib.lZSHm) ? B : this;
        const C9 = C8.console = C8.console || {};
        const Cz = [BIzWib.cpXQP, BIzWib.lhCMI, BIzWib.QRewW, BIzWib.yQOxU, BIzWib.UXeGn, BIzWib.VwGDs, BIzWib.YwbkX];
        for (let CW = 0; BIzWib.cIdjX(CW, Cz.length); CW++) {
          const CY = A.constructor.prototype.bind(i);
          const Cv = Cz[CW];
          const Cb = C9[Cv] || CY;
          CY.__proto__ = Wn.bind(k);
          CY.toString = Cb.toString.bind(Cb);
          C9[Cv] = CY;
        }
      }
    }
    if (WL.LDxQR(YM, "a")) {
      if (WL.wqKQY(WL.RURwQ, WL.GhlpW)) {
        for (let CC of Y9.values()) {
          for (let CM of [...CC]) {
            WL.MwbnV(YW, CM, YF);
          }
        }
        continue;
      } else {
        if (Y8.length) {
          WL.SNOMv(T, Y7, WH.shift());
          return;
        }
        if (!WL.qrwjj(WH, N)) {
          Yz.phase = WL.bYZJo;
          W.workers[We.i].phase = WL.bYZJo;
        }
      }
    }
    if (WL.MzEfT(YM, "m")) {
      if (WL.tDkeZ(WL.DObke, WL.LrOCw)) {
        const CF = {
          cmd: WL.vnoFX,
          list: V[O]
        };
        P.w.postMessage(CF, Y2[Y8]);
      } else {
        let [,, Cx, Ch, Ct, Cm, CP, CV, CO, Cc] = YC;
        let Co = YY.get(Cx);
        if (!Co) {
          let CQ = WL.USZJG(WH, Ch, Ct);
          Co = {
            url: CQ,
            loop: !!Cc,
            clock: Cm,
            clockT: YF,
            vol: CP,
            rate: WL.IkmGN(CV, 1),
            paused: true,
            seg: null
          };
          YY.set(Cx, Co);
          if (!CQ) {
            continue;
          }
        }
        if (!Co.url) {
          continue;
        }
        let CD = Co.paused ? Co.clock : WL.vOBXE(Co.clock, WL.Lbzfc(YF, Co.clockT));
        Co.clock = Cm;
        Co.clockT = YF;
        if (WL.wqKQY(CP, Co.vol)) {
          Co.vol = CP;
          if (Co.seg) {
            Co.seg.gain.push([YF, CP]);
          }
        }
        if (CO) {
          if (WL.QdDGm(WL.oEXRR, WL.NiILZ)) {
            Y1.set(W, null);
          } else {
            if (Co.seg) {
              WL.Vbbvs(Y5, Co, YF);
            }
            Co.paused = true;
            Co.rate = WL.DPJot(CV, 1);
            continue;
          }
        }
        let Cu = WL.OXeyf(Y7, Co, Cm);
        if (!Co.seg) {
          Co.paused = false;
          Co.rate = WL.zaPKQ(CV, 1);
          if (WL.twoWR(Y6, Co, Cu)) {
            WL.pdhQJ(Y3, Co, YF, Cu);
          }
          continue;
        }
        let Cp = WL.DgGlg(Y7, Co, WL.YSyZl(Y4, Co, YF));
        let Cr = WL.VGYvN(Wn, Co.url);
        let Cs = Math.abs(WL.Lbzfc(Cp, Cu));
        if (Co.loop && WL.juWvl(Cr, 0)) {
          Cs = Math.min(Cs, WL.noAmQ(Cr, Cs));
        }
        let CN = WL.qIjJM(Math.abs(WL.tLWzm(Cm, CD)), 0.000001);
        let CX = WL.xRRaM(CV, 1);
        let Cj = WL.XVPsx(CX, 1) && WL.lDlTu(Cs, 0.35);
        if (WL.AXRoA(CX, Co.rate) || CN || Cj) {
          let CB = WL.owuna(CN, Cj) ? Cu : Cp;
          WL.EhagO(Y5, Co, YF);
          Co.rate = CX;
          if (WL.VJsVN(Y6, Co, CB)) {
            WL.ltyDs(Y3, Co, YF, CB);
          }
        }
        continue;
      }
    }
    if (WL.UkCXp(YM, "x")) {
      let Cd = YY.get(YC[2]);
      if (Cd) {
        if (Cd.seg) {
          WL.abYtA(Y5, Cd, YF);
        }
        YY.delete(YC[2]);
      }
      continue;
    }
  }
  return Y2.filter(CZ => CZ.t1 > CZ.t0 && CZ.t0 < Y1);
}
z7(zW, "planSoundtrack");
var zY = class Cw {
  constructor(z = 48000, {
    ceiling: W = 0.89,
    lookMs: We = 5,
    releaseMs: WH = 60
  } = {}) {
    let Y1 = this.L = Math.max(1, Math.round(z * We / 1000));
    this.ceil = W;
    this.rel = 1 - Math.exp(-1 / (z * WH / 1000));
    this.dl = new Float32Array(Y1);
    this.dr = new Float32Array(Y1);
    this.box = new Float64Array(Y1).fill(1);
    this.sum = Y1;
    let Y3 = Y1 + 2;
    this.qi = new Float64Array(Y3);
    this.qv = new Float64Array(Y3);
    this.qh = 0;
    this.qn = 0;
    this.cap = Y3;
    this.n = 0;
    this.r = 1;
    this.skip = Y1;
    this.peakIn = 0;
    this.limited = 0;
  }
  _step(z, W, We, WH) {
    let Y1 = this.L;
    let Y2 = Math.max(Math.abs(z), Math.abs(W));
    if (Y2 > this.peakIn) {
      this.peakIn = Y2;
    }
    let Y3 = Y2 > this.ceil ? this.ceil / Y2 : 1;
    let Y4 = this.n++;
    let Y5 = this.cap;
    let Y6 = this.qi;
    let Y7 = this.qv;
    while (this.qn && Y7[(this.qh + this.qn - 1) % Y5] >= Y3) {
      this.qn--;
    }
    let Y8 = (this.qh + this.qn) % Y5;
    Y6[Y8] = Y4;
    Y7[Y8] = Y3;
    this.qn++;
    while (Y6[this.qh] <= Y4 - Y1 - 1) {
      this.qh = (this.qh + 1) % Y5;
      this.qn--;
    }
    let Y9 = Y7[this.qh];
    this.r = Math.min(Y9, this.r + (1 - this.r) * this.rel);
    let Yz = Y4 % Y1;
    this.sum += this.r - this.box[Yz];
    this.box[Yz] = this.r;
    let YW = Math.min(1, this.sum / Y1);
    let YY = this.dl[Yz];
    let Yv = this.dr[Yz];
    this.dl[Yz] = z;
    this.dr[Yz] = W;
    if (YW < 0.9999) {
      this.limited++;
    }
    if (this.skip > 0) {
      this.skip--;
      return WH;
    } else {
      We[0][WH] = YY * YW;
      We[1][WH] = Yv * YW;
      return WH + 1;
    }
  }
  process(z, W) {
    let WK = z.length;
    let Y0 = [new Float32Array(WK), new Float32Array(WK)];
    let Y1 = 0;
    for (let Y3 = 0; Y3 < WK; Y3++) {
      Y1 = this._step(z[Y3], W[Y3], Y0, Y1);
    }
    if (Y1 === WK) {
      return Y0;
    } else {
      return [Y0[0].subarray(0, Y1), Y0[1].subarray(0, Y1)];
    }
  }
  flush() {
    let Wn = [new Float32Array(this.L), new Float32Array(this.L)];
    let WL = 0;
    for (let Y0 = 0; Y0 < this.L; Y0++) {
      WL = this._step(0, 0, Wn, WL);
    }
    return [Wn[0].subarray(0, WL), Wn[1].subarray(0, WL)];
  }
};
z7(zY, "Limiter");
var zv = zY;
function zb(z, W) {
  let Wn = new Uint8Array(19);
  let WL = new DataView(Wn.buffer);
  Wn.set([79, 112, 117, 115, 72, 101, 97, 100]);
  Wn[8] = 1;
  Wn[9] = z;
  WL.setUint16(10, W, true);
  WL.setUint32(12, 48000, true);
  WL.setInt16(16, 0, true);
  Wn[18] = 0;
  return Wn;
}
z7(zb, "opusHead");
async function zC(z, W, We) {
  let WK = new OfflineAudioContext(2, 1, 48000);
  let Y0 = new Map();
  let Y1 = [...z];
  let Y2 = 0;
  let Y3 = async () => {
    while (Y2 < Y1.length && !We()) {
      let Y9 = Y1[Y2++];
      try {
        {
          let Yz = await fetch(Y9);
          if (!Yz.ok) {
            Y0.set(Y9, null);
            continue;
          }
          Y0.set(Y9, await WK.decodeAudioData(await Yz.arrayBuffer()));
        }
      } catch {
        Y0.set(Y9, null);
      }
      if (W) {
        W();
      }
    }
  };
  await Promise.all([Y3(), Y3(), Y3()]);
  return Y0;
}
z7(zC, "decodeAll");
async function zM({
  events: z,
  from: W,
  to: We,
  urlOf: WH,
  onProgress: Wn,
  cancelled: WL = () => false,
  bitrate: WK = 128000
}) {
  if (!zz()) {
    return {
      none: "this browser cannot encode audio (no WebCodecs AudioEncoder)"
    };
  }
  const Y1 = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    bitrate: WK
  };
  let Y2 = Y1;
  try {
    {
      let vn = await AudioEncoder.isConfigSupported(Y2);
      if (!vn || !vn.supported) {
        return {
          none: "this browser cannot encode Opus"
        };
      }
    }
  } catch {
    return {
      none: "this browser cannot encode Opus"
    };
  }
  let Y3 = new Map();
  let Y4 = (be, bn) => {
    let C9 = be + "" + bn;
    if (!Y3.has(C9)) {
      let CW = null;
      try {
        CW = WH(be, bn);
      } catch {
        CW = null;
      }
      Y3.set(C9, CW);
    }
    return Y3.get(C9);
  };
  let Y5 = new Set();
  for (let be of z) {
    if (be[0] === "p") {
      {
        let bn = Y4(be[3], be[4]);
        if (bn) {
          Y5.add(bn);
        }
      }
    } else if (be[0] === "m") {
      {
        let C5 = Y4(be[3], be[4]);
        if (C5) {
          Y5.add(C5);
        }
      }
    }
  }
  let Y6 = 0;
  let Y7 = await zC(Y5, () => {
    Y6++;
    if (Wn) {
      Wn(Y6 * 0.3 / Math.max(1, Y5.size));
    }
  }, WL);
  if (WL()) {
    return {
      none: "cancelled"
    };
  }
  let Y8 = zW(z, W, We, Y4, C6 => {
    let C7 = Y7.get(C6);
    if (C7) {
      return C7.duration;
    } else {
      return 0;
    }
  }).filter(C6 => Y7.get(C6.url));
  let Y9 = (We - W + 1) / 30;
  let Yz = [];
  let YW = null;
  let YY = null;
  let Yv = new AudioEncoder({
    output: (C6, C7) => {
      {
        let Cb = new Uint8Array(C6.byteLength);
        C6.copyTo(Cb);
        Yz.push({
          data: Cb,
          ts: C6.timestamp,
          dur: C6.duration || 0
        });
        if (!YW && C7 && C7.decoderConfig && C7.decoderConfig.description) {
          {
            let CC = C7.decoderConfig.description;
            YW = new Uint8Array(CC.buffer ? CC.buffer.slice(CC.byteOffset || 0, (CC.byteOffset || 0) + CC.byteLength) : CC);
          }
        }
      }
    },
    error: C6 => {
      YY = C6 && C6.message || String(C6);
    }
  });
  Yv.configure(Y2);
  let Yb = new zv(48000);
  let YC = 0;
  let YM = ([C6, C7]) => {
    if (!C6.length || YY) {
      return;
    }
    let C9 = new Float32Array(C6.length * 2);
    C9.set(C6, 0);
    C9.set(C7, C6.length);
    let CY = new AudioData({
      format: "f32-planar",
      sampleRate: 48000,
      numberOfFrames: C6.length,
      numberOfChannels: 2,
      timestamp: Math.round(YC * 1000000 / 48000),
      data: C9
    });
    YC += C6.length;
    Yv.encode(CY);
    CY.close();
  };
  let YF = (C6, C7) => {
    {
      let CM = C6.gain[0][1];
      for (let [CF, Cx] of C6.gain) {
        if (CF <= C7) {
          CM = Cx;
        } else {
          break;
        }
      }
      return CM;
    }
  };
  for (let C6 = 0; C6 < Y9 && !WL(); C6 += 10) {
    {
      let C7 = Math.min(Y9, C6 + 10);
      let C8 = Math.max(1, Math.round((C7 - C6) * 48000));
      let C9 = new OfflineAudioContext(2, C8, 48000);
      for (let CW of Y8) {
        if (CW.t1 <= C6 || CW.t0 >= C7) {
          continue;
        }
        let CY = Y7.get(CW.url);
        let Cv = CY.duration;
        let Cb = Math.max(CW.t0, C6);
        let CC = CW.off + (Cb - CW.t0) * CW.rate;
        if (CW.loop) {
          CC = (CC % Cv + Cv) % Cv;
        } else if (CC >= Cv) {
          continue;
        }
        let CM = C9.createBufferSource();
        CM.buffer = CY;
        CM.loop = CW.loop;
        CM.playbackRate.value = CW.rate;
        let CF = C9.createGain();
        let Cx = YF(CW, Cb);
        CF.gain.setValueAtTime(Cx, 0);
        for (let [Ch, Ct] of CW.gain) {
          if (!(Ch <= Cb) && !(Ch >= C7)) {
            if (CW.smooth) {
              CF.gain.setTargetAtTime(Ct, Ch - C6, 0.004);
            } else {
              CF.gain.setValueAtTime(Ct, Ch - C6);
            }
          }
        }
        CM.connect(CF);
        CF.connect(C9.destination);
        CM.start(Cb - C6, CC);
        if (CW.t1 < C7) {
          CM.stop(CW.t1 - C6);
        }
      }
      let Cz = await C9.startRendering();
      YM(Yb.process(Cz.getChannelData(0), Cz.getChannelData(1)));
      if (C7 >= Y9) {
        YM(Yb.flush());
      }
      if (YY) {
        break;
      }
      while (Yv.encodeQueueSize > 2 && !YY) {
        await new Promise(Cm => setTimeout(Cm, 5));
      }
      if (Wn) {
        Wn(0.3 + C7 * 0.7 / Y9);
      }
    }
  }
  await Yv.flush().catch(Cm => {
    YY = YY || String(Cm && Cm.message || Cm);
  });
  try {
    Yv.close();
  } catch {}
  if (WL()) {
    return {
      none: "cancelled"
    };
  }
  if (YY) {
    return {
      none: "the audio encoder failed: " + YY
    };
  }
  let Yt = 312;
  if (YW && YW.length >= 12 && String.fromCharCode(...YW.subarray(0, 8)) === "OpusHead") {
    Yt = YW[10] | YW[11] << 8;
  } else {
    YW = zb(2, Yt);
  }
  let Ye = 0;
  for (let Cm of Yz) {
    Ye += Cm.dur > 0 ? Math.round(Cm.dur * 48000 / 1000000) : 960;
  }
  let vt = Ye - Yt - YC;
  let vo = vt > 0 && Yz.length ? Math.round(vt * 1000000000 / 48000) : 0;
  return {
    chunks: Yz,
    priv: YW,
    preskip: Yt,
    rate: 48000,
    channels: 2,
    sources: Y5.size,
    voices: Y8.length,
    samples: YC,
    discardNs: vo,
    peakIn: +Yb.peakIn.toFixed(3),
    limited: Yb.limited
  };
}
z7(zM, "renderSoundtrack");
var zF = "replayvideo";
var zx = 30;
var zh = 600;
var zt = 15;
var zm = 419430400;
var zP = 1800;
var zV = 320;
var zO = 240;
var zc = d;
var zo = z7(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
var zD = z7(() => N() || {}, "host");
var zu = z7(z => (zD().fights || o || []).find(W => W && W.id === z) || null, "fightById");
var zp = t;
var zr = z7((z, W, We) => Math.max(W, Math.min(We, Math.floor(Number.isFinite(+z) ? +z : W))), "clampInt");
var zs = 0;
var zN = z7(() => !z5.list.some(z => z && !z.destroyed), "worldIsEmpty");
function zX() {
  const WH = {
    ...y
  };
  const Wn = {
    ...z5.view
  };
  const WL = {
    ...z5.room
  };
  return {
    snap: w(),
    ch: E,
    sandbox: WH,
    audio: a(),
    view: Wn,
    room: WL,
    rec: z3.mode,
    record: z5.record,
    synthetic: q.synthetic,
    textFocus: q.textFocus,
    released: {
      ...q.released
    },
    curG: U,
    instId: L._id
  };
}
z7(zX, "saveReal");
function zj(z) {
  z5.list.length = 0;
  z5.pending.length = 0;
  T(z.snap);
  Object.assign(z5.view, z.view);
  Object.assign(z5.room, z.room);
  for (let WL of Object.keys(y)) {
    if (!(WL in z.sandbox)) {
      delete y[WL];
    }
  }
  Object.assign(y, z.sandbox);
  if (E !== z.ch) {
    A(z.ch);
  }
  z5.record = z.record;
  q.synthetic = z.synthetic;
  for (let WK of Object.keys(q.released)) {
    delete q.released[WK];
  }
  Object.assign(q.released, z.released);
  L._id = z.instId;
}
z7(zj, "putBackCommon");
function zQ(z, W) {
  zj(z);
  z3.mode = z.rec;
  q.textFocus = z.textFocus;
  if (!W) {
    try {
      f();
    } catch {}
  }
  J(z.curG);
  g(z.audio);
}
z7(zQ, "restoreReal");
function zd(z) {
  let WL = [];
  try {
    {
      let WK = globalThis.localStorage;
      if (WK) {
        {
          let Y0 = typeof Storage !== "undefined" && WK instanceof Storage ? Storage.prototype : WK;
          for (let Y1 of ["setItem", "removeItem", "clear"]) {
            {
              if (typeof Y0[Y1] != "function") {
                continue;
              }
              let Y2 = Object.prototype.hasOwnProperty.call(Y0, Y1);
              let Y3 = Y0[Y1];
              Y0[Y1] = function () {
                z.blocked++;
              };
              WL.push(() => {
                if (Y2) {
                  Y0[Y1] = Y3;
                } else {
                  delete Y0[Y1];
                }
              });
            }
          }
        }
      }
    }
  } catch {}
  return () => {
    for (let Y8 of WL.reverse()) {
      try {
        Y8();
      } catch {}
    }
  };
}
z7(zd, "blockStorage");
function zZ(z) {
  let WH = j("timeline");
  if (!WH || typeof WH.decodeReplay != "function") {
    throw new Error("Replays need the timeline module");
  }
  return WH.decodeReplay(z);
}
z7(zZ, "decodeOf");
function zf(z, W = {}) {
  if (!z || typeof z != "object") {
    z = {};
  }
  let WK = {
    phase: "seek",
    frame: 0,
    captured: 0,
    drift: 0,
    driftAt: 0,
    checks: 0,
    blocked: 0,
    parked: null,
    done: false,
    result: null,
    ms: 0
  };
  let Y0 = be => {
    const C6 = {
      ok: false,
      why: be
    };
    WK.phase = "done";
    WK.done = true;
    WK.result = C6;
  };
  let Y1 = null;
  let Y2 = null;
  try {
    Y1 = zZ(z);
  } catch (bn) {
    Y0(bn && bn.message || "Not a replay");
  }
  if (!WK.done) {
    Y2 = zu(z.fight);
    if (Y2) {
      if (Y2.mode) {
        Y0("Only fights can be exported");
      } else if (!Number.isFinite(z.seed)) {
        Y0("This replay has no numeric seed");
      }
    } else {
      Y0("This build has no fight " + String(z.fight).slice(0, 40));
    }
  }
  let Y5 = Y1 ? Y1.length : 0;
  let Y6 = zr(W.from ?? 1, 1, Math.max(1, Y5));
  let Y7 = zr(W.to ?? Y5, Y6, Math.max(1, Y5));
  let Y8 = zr(W.stride ?? 1, 1, 8);
  let Y9 = W.scale === 2 ? 2 : 1;
  let Yz = Y9 * 640;
  let YW = Y9 * 480;
  let YY = W.makeCanvas || ((C5, C6) => {
    {
      let Cz = document.createElement("canvas");
      Cz.width = C5;
      Cz.height = C6;
      return Cz;
    }
  });
  let Yv = Y2 ? m(z, Y2) : null;
  let Yb = Yv ? Yv.fx : null;
  let YC = null;
  let YM = null;
  let YF = null;
  let Yx = null;
  let Yt = {
    fade: 0
  };
  function Ye() {
    let C5 = {
      ...(zD().cfg || {}),
      ...zp(z.setup && typeof z.setup == "object" ? z.setup : null)
    };
    Yx = P(Yb, z, C5);
  }
  Ye;
  let Yn = (C5, C6) => {
    {
      let CW = V(Yv, Y1, C5, C6);
      if (CW) {
        WK.checks++;
        if (CW < 0 && !WK.drift) {
          WK.drift = C5;
        }
      }
    }
  };
  function vt() {
    {
      let C8 = WK.frame + 1;
      if (C8 > Y7) {
        WK.phase = "done";
        return true;
      } else if (C8 < Y6) {
        Yn(C8, Yx);
        WK.frame = C8;
        return false;
      } else {
        if (WK.phase === "seek") {
          WK.phase = "capture";
          YC = YY(Yz, YW);
          YM = YC.getContext("2d");
          YF = O(YM);
        }
        Yn(C8, YF);
        WK.frame = C8;
        if ((C8 - Y6) % Y8 === 0) {
          c(YM, YF, Y9, Yt);
          if (W.onFrame) {
            W.onFrame(YC, WK.captured, C8);
          }
          WK.captured++;
        }
        if (C8 >= Y7) {
          WK.phase = "done";
          return true;
        } else {
          return false;
        }
      }
    }
  }
  vt;
  const vo = {
    ...z5.view
  };
  const ve = {
    ...z5.room
  };
  const vn = {
    ...y
  };
  let bt = () => ({
    snap: w(),
    view: vo,
    room: ve,
    sandbox: vn,
    ch: E,
    record: z5.record,
    synthetic: q.synthetic,
    released: {
      ...q.released
    },
    instId: L._id,
    curG: U
  });
  function bo() {
    WK.done = true;
    WK.result ||= {
      ok: true,
      why: null
    };
    Object.assign(WK.result, {
      frames: WK.captured,
      from: Y6,
      to: Y7,
      drift: WK.drift,
      checks: WK.checks,
      blocked: WK.blocked,
      ms: Math.round(WK.ms),
      wallclock: !!z.wallclock
    });
    if (WK.parked && !zs && zN()) {
      try {
        f();
      } catch {}
    }
    WK.parked = null;
    YC = null;
    YM = null;
    YF = null;
  }
  bo;
  WK.step = (C5 = Infinity) => {
    {
      if (WK.done) {
        return true;
      }
      if (zs) {
        return false;
      }
      if (!W.allowLive && !zN()) {
        Y0("A fight started - video export runs from the menu");
        bo();
        return true;
      }
      let Cz = zo();
      zs++;
      let CY = zX();
      let Cv = {
        blocked: 0
      };
      let Cb = zd(Cv);
      g(false);
      I();
      z3.mode = "off";
      let CC = false;
      try {
        {
          if (WK.parked) {
            zj(WK.parked);
            J(WK.parked.curG);
          } else {
            Ye();
          }
          WK.parked = null;
          let CM = false;
          do {
            CM = vt();
          } while (!CM && zo() - Cz < C5 && (!W.busy || !W.busy()));
          if (WK.phase !== "done") {
            WK.parked = bt();
            CC = true;
          }
        }
      } catch (Cm) {
        Y0(Cm && Cm.user ? Cm.message : "The replay could not be played: " + (Cm && Cm.message || Cm));
      } finally {
        i();
        zQ(CY, CC);
        Cb();
        zs--;
        WK.blocked += Cv.blocked;
        WK.ms += zo() - Cz;
      }
      if (WK.phase === "done") {
        bo();
        return true;
      } else {
        return false;
      }
    }
  };
  WK.cancel = () => {
    {
      if (!WK.done) {
        WK.result = {
          ok: false,
          why: "cancelled",
          cancelled: true
        };
        WK.phase = "done";
        bo();
      }
    }
  };
  WK.progress = () => ({
    phase: WK.phase,
    frame: WK.frame,
    from: Y6,
    to: Y7,
    captured: WK.captured,
    n: Y5
  });
  WK.size = {
    W: Yz,
    H: YW,
    from: Y6,
    to: Y7,
    n: Y5,
    stride: Y8
  };
  if (WK.done) {
    bo();
  }
  return WK;
}
z7(zf, "renderJob");
var zG = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
var zw = z7(z => zG ? zG.encode(z) : Uint8Array.from(String(z), W => W.charCodeAt(0) & 255), "strBytes");
function zT(z) {
  let WL = [];
  let WK = z;
  while (WK > 0) {
    WL.unshift(WK & 255);
    WK = Math.floor(WK / 256);
  }
  return WL;
}
z7(zT, "idBytes");
function zy(z) {
  let WL = [1, 0, 0, 0, 0, 0, 0, 0];
  for (let Y0 = 7; Y0 >= 1; Y0--) {
    WL[Y0] = z % 256;
    z = Math.floor(z / 256);
  }
  return WL;
}
z7(zy, "size8");
function zR(z, W = 0) {
  let WK = [];
  do {
    WK.unshift(z % 256);
    z = Math.floor(z / 256);
  } while (z > 0);
  while (W && WK.length < W) {
    WK.unshift(0);
  }
  return WK;
}
z7(zR, "uintBytes");
var zg = z7((...z) => {
  let We = z.reduce((Y0, Y1) => Y0 + Y1.length, 0);
  let WH = new Uint8Array(We);
  let Wn = 0;
  for (let Y0 of z) {
    WH.set(Y0, Wn);
    Wn += Y0.length;
  }
  return WH;
}, "cat");
var zE = z7((z, W) => zg(zT(z), zy(W.length), W), "el");
var zI = z7((z, W, We) => zE(z, Uint8Array.from(zR(W, We))), "uel");
var zA = z7((z, W) => zE(z, zw(W)), "sel");
function zi(z, W) {
  let Wn = new Uint8Array(8);
  new DataView(Wn.buffer).setFloat64(0, W);
  return zE(z, Wn);
}
z7(zi, "fel");
function zU({
  codec: z = "V_VP9",
  width: W,
  height: We,
  fps: WH = zx,
  chunks: Wn,
  audio: WL = null
}) {
  let Y1 = zE(440786851, zg(zI(17030, 1), zI(17143, 1), zI(17138, 4), zI(17139, 8), zA(17026, "webm"), zI(17031, 4), zI(17029, 2)));
  let Y2 = Wn.length ? Wn[Wn.length - 1].ts : 0;
  let Y3 = Wn.length ? Y2 / 1000 + 1000 / WH : 0;
  let Y4 = zE(357149030, zg(zI(2807729, 1000000), zA(19840, "drsim"), zA(22337, "DELTARUNE fight sim"), zi(17545, Y3)));
  let Y5 = zE(174, zg(zI(215, 1), zI(29637, 1), zI(131, 1), zA(134, z), zI(156, 0), zE(224, zg(zI(176, W), zI(186, We)))));
  let Y6 = !!WL && !!WL.chunks && !!WL.chunks.length;
  let Y7 = Y6 ? zE(174, zg(zI(215, 2), zI(29637, 2), zI(131, 2), zA(134, WL.codec || "A_OPUS"), zI(156, 0), WL.priv ? zE(25506, WL.priv) : new Uint8Array(0), zI(22186, Math.max(0, Math.round(WL.delayNs || 0))), zI(22203, 80000000), zE(225, zg(zi(181, WL.rate || 48000), zI(159, WL.channels || 2))))) : new Uint8Array(0);
  let Y8 = zE(374648427, zg(Y5, Y7));
  let Y9 = Wn.map(ve => ({
    t: 1,
    ms: Math.round(ve.ts / 1000),
    key: !!ve.key,
    data: ve.data
  }));
  if (Y6) {
    let ve = WL.chunks.map(be => ({
      t: 2,
      ms: Math.max(0, Math.round(be.ts / 1000)),
      key: true,
      data: be.data
    }));
    if (ve.length && WL.discardNs > 0) {
      ve[ve.length - 1].discard = Math.round(WL.discardNs);
    }
    let vn = [];
    let bt = 0;
    let bo = 0;
    while (bt < Y9.length || bo < ve.length) {
      if (bo >= ve.length || bt < Y9.length && Y9[bt].ms <= ve[bo].ms) {
        vn.push(Y9[bt++]);
      } else {
        vn.push(ve[bo++]);
      }
    }
    Y9.length = 0;
    Y9.push(...vn);
  }
  let Yz = [];
  let YW = null;
  for (let be of Y9) {
    if (!YW || be.t === 1 && be.key || be.ms - YW.tc > 30000) {
      YW = {
        tc: be.ms,
        blocks: [],
        cue: be.t === 1 && be.key
      };
      Yz.push(YW);
    }
    let C5 = be.ms - YW.tc;
    if (be.discard) {
      let C8 = zI(30114, be.discard);
      let C9 = Uint8Array.from([be.t | 128, C5 >> 8 & 255, C5 & 255, 0]);
      let Cz = zg(zT(161), zy(4 + be.data.length));
      YW.blocks.push(zg(zT(160), zy(Cz.length + 4 + be.data.length + C8.length)), Cz, C9, be.data, C8);
      continue;
    }
    let C6 = Uint8Array.from([be.t | 128, C5 >> 8 & 255, C5 & 255, be.key ? 128 : 0]);
    YW.blocks.push(zg(zT(163), zy(4 + be.data.length)), C6, be.data);
  }
  let YY = (CW, CY) => zE(19899, zg(zE(21419, Uint8Array.from(zT(CW))), zI(21420, CY, 8)));
  let Yv = zE(290298740, zg(YY(357149030, 0), YY(374648427, 0), YY(475249515, 0))).length;
  let Yb = Yv + Y4.length;
  let YC = Yb + Y8.length;
  let YM = [];
  let YF = [];
  for (let CW of Yz) {
    let CY = zI(231, CW.tc);
    let Cv = CY.length + CW.blocks.reduce((CC, CM) => CC + CM.length, 0);
    if (CW.cue) {
      YF.push(zE(187, zg(zI(179, CW.tc), zE(183, zg(zI(247, 1), zI(241, YC, 8))))));
    }
    let Cb = zg(zT(524531317), zy(Cv), CY);
    YM.push(Cb, ...CW.blocks);
    YC += Cb.length + Cv - CY.length;
  }
  let Ye = YC;
  let Yn = zE(475249515, zg(...YF));
  let vt = zE(290298740, zg(YY(357149030, Yv), YY(374648427, Yb), YY(475249515, Ye)));
  let vo = vt.length + Y4.length + Y8.length + YM.reduce((CC, CM) => CC + CM.length, 0) + Yn.length;
  return [Y1, zg(zT(408125543), zy(vo)), vt, Y4, Y8, ...YM, Yn];
}
z7(zU, "muxWebM");
var zJ = new Set([440786851, 408125543, 290298740, 19899, 357149030, 374648427, 174, 224, 225, 524531317, 160, 475249515, 187, 183]);
function zq(z, W = 0, We = z.length) {
  let WK = [];
  let Y0 = W;
  let Y1 = Y3 => {
    let Y5 = z[Y0];
    let Y6 = 1;
    let Y7 = 128;
    while (Y6 <= 8 && !(Y5 & Y7)) {
      Y6++;
      Y7 >>= 1;
    }
    if (Y6 > 8) {
      throw new Error("bad vint at " + Y0);
    }
    let Y9 = Y3 ? Y5 : Y5 & Y7 - 1;
    for (let YW = 1; YW < Y6; YW++) {
      Y9 = Y9 * 256 + z[Y0 + YW];
    }
    Y0 += Y6;
    return Y9;
  };
  while (Y0 < We) {
    let Y3 = Y0;
    let Y4 = Y1(true);
    let Y5 = Y1(false);
    let Y6 = Y0;
    if (Y6 + Y5 > We) {
      throw new Error("element 0x" + Y4.toString(16) + " at " + Y3 + " overruns its parent");
    }
    const Y7 = {
      id: Y4,
      size: Y5,
      start: Y6,
      at: Y3
    };
    let Y8 = Y7;
    if (zJ.has(Y4)) {
      Y8.children = zq(z, Y6, Y6 + Y5);
    }
    WK.push(Y8);
    Y0 = Y6 + Y5;
  }
  return WK;
}
z7(zq, "parseEBML");
var zl = z7(() => typeof VideoEncoder == "function" && typeof VideoFrame == "function", "hasWebCodecs");
var ze = z7(() => typeof MediaRecorder == "function" && typeof HTMLCanvasElement !== "undefined" && !!HTMLCanvasElement.prototype.captureStream, "hasRecorder");
async function zH(z, W, We = "quality", WH = null) {
  const Wn = {
    joqKg: function (Y3, Y4) {
      return Y3 == Y4;
    },
    KNrbJ: function (Y3, Y4) {
      return Y3 != Y4;
    },
    ozQwl: function (Y3, Y4) {
      return Y3 + Y4;
    },
    OPtkw: function (Y3, Y4) {
      return Y3 >= Y4;
    },
    YWLFB: "vp09.00.10.08",
    UWuuK: "V_VP9",
    DdBNf: "vp8",
    KGPIq: "V_VP8",
    wKSlH: function (Y3, Y4) {
      return Y3 !== Y4;
    },
    JizIN: "lnwiN",
    riXou: "pHcsU"
  };
  const WK = Wn;
  let Y1 = WK.OPtkw(z, 1280) ? 6000000 : 2500000;
  for (let [Y3, Y4] of WH || [[WK.YWLFB, WK.UWuuK], [WK.DdBNf, WK.KGPIq]]) {
    if (WK.wKSlH(WK.JizIN, WK.riXou)) {
      const Y5 = {
        codec: Y3,
        width: z,
        height: W,
        bitrate: Y1,
        framerate: zx,
        latencyMode: We
      };
      let Y6 = Y5;
      try {
        let Y7 = await VideoEncoder.isConfigSupported(Y6);
        const Y8 = {
          cfg: Y6,
          id: Y4
        };
        if (Y7 && Y7.supported) {
          return Y8;
        }
      } catch {}
    } else if (PZEgLC.joqKg(We, c[WH]) && PZEgLC.KNrbJ(Wn.charCodeAt(p), WK[PZEgLC.ozQwl(WH, 1)])) {
      return false;
    }
  }
  return null;
}
z7(zH, "pickCodec");
async function zn(z, W) {
  const We = {
    DPjfp: function (Y4, Y5) {
      return Y4 === Y5;
    },
    nCsob: "key",
    iKEDz: function (Y4, Y5) {
      return Y4(Y5);
    },
    uJYUe: function (Y4, Y5) {
      return Y4 + Y5;
    },
    gJKJg: function (Y4, Y5) {
      return Y4 * Y5;
    },
    jKhXn: function (Y4, Y5) {
      return Y4 - Y5;
    },
    sxBOy: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    csCGy: "Not a replay",
    YdjKP: "error",
    GQQzo: "MPfKz",
    wLJNV: "GwwUZ",
    qPKFZ: function (Y4, Y5) {
      return Y4 / Y5;
    },
    eJeGZ: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    vowIJ: "NUmDo",
    zFgCc: function (Y4, Y5) {
      return Y4 === Y5;
    },
    KOhTw: function (Y4, Y5) {
      return Y4 % Y5;
    },
    LdUqL: function (Y4, Y5) {
      return Y4 * Y5;
    },
    ymLAA: function (Y4, Y5) {
      return Y4(Y5);
    },
    XIrcg: "video/webm",
    MlIYD: "webcodecs"
  };
  let WH = await We.sxBOy(zH, z, W);
  if (!WH) {
    return null;
  }
  let WK = [];
  let Y0 = 0;
  let Y1 = null;
  let Y2 = new VideoEncoder({
    output: Y4 => {
      let Y8 = new Uint8Array(Y4.byteLength);
      Y4.copyTo(Y8);
      WK.push({
        data: Y8,
        ts: Y4.timestamp,
        key: We.DPjfp(Y4.type, We.nCsob)
      });
      Y0 += Y8.length;
    },
    error: Y4 => {
      Y1 = Y4 && Y4.message || We.iKEDz(String, Y4);
    }
  });
  Y2.configure(WH.cfg);
  return {
    kind: We.MlIYD,
    codec: WH.id,
    busy: () => Y2.encodeQueueSize > 6,
    frame(Y4, Y5) {
      if (We.DPjfp(We.GQQzo, We.wLJNV)) {
        let Y9 = We.seg;
        if (Y9) {
          return iKBlJe.uJYUe(Y9.off, iKBlJe.gJKJg(WH.max(0, iKBlJe.jKhXn(WK, Y9.t0)), Y9.rate));
        } else {
          return Y0.off || 0;
        }
      } else {
        if (Y1) {
          throw new Error(Y1);
        }
        let Yz = new VideoFrame(Y4, {
          timestamp: Math.round(We.qPKFZ(We.gJKJg(Y5, 1000000), zx)),
          duration: Math.round(We.qPKFZ(1000000, zx))
        });
        try {
          if (We.eJeGZ(We.vowIJ, We.vowIJ)) {
            We.sxBOy(W, We && WH.message || We.csCGy, {
              kind: We.YdjKP
            });
            return false;
          } else {
            Y2.encode(Yz, {
              keyFrame: We.zFgCc(We.KOhTw(Y5, We.LdUqL(zx, 2)), 0)
            });
          }
        } finally {
          Yz.close();
        }
      }
    },
    bytes: () => Y0,
    error: () => Y1,
    async finish() {
      await Y2.flush();
      try {
        Y2.close();
      } catch {}
      if (Y1) {
        throw new Error(Y1);
      }
      const Y6 = {
        codec: WH.id,
        width: z,
        height: W,
        chunks: WK
      };
      return new Blob(We.ymLAA(zU, Y6), {
        type: We.XIrcg
      });
    },
    abort() {
      try {
        Y2.close();
      } catch {}
      WK.length = 0;
    }
  };
}
z7(zn, "webcodecsSink");
function zL(z) {
  let WH = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"].find(Y4 => {
    try {
      return MediaRecorder.isTypeSupported(Y4);
    } catch {
      return false;
    }
  });
  if (!WH) {
    return null;
  }
  let Wn = z.captureStream(0);
  let WL = Wn.getVideoTracks()[0];
  let WK = new MediaRecorder(Wn, {
    mimeType: WH,
    videoBitsPerSecond: z.width >= 1280 ? 6000000 : 2500000
  });
  let Y0 = [];
  let Y1 = 0;
  WK.ondataavailable = Y4 => {
    if (Y4.data && Y4.data.size) {
      Y0.push(Y4.data);
      Y1 += Y4.data.size;
    }
  };
  WK.start(1000);
  return {
    kind: "recorder",
    realtime: true,
    busy: () => false,
    frame() {
      if (WL && WL.requestFrame) {
        WL.requestFrame();
      }
    },
    bytes: () => Y1,
    error: () => null,
    finish: () => new Promise(Y4 => {
      WK.onstop = () => {
        try {
          WL.stop();
        } catch {}
        Y4(new Blob(Y0, {
          type: "video/webm"
        }));
      };
      WK.stop();
    }),
    abort() {
      {
        try {
          WK.stop();
          WL.stop();
        } catch {}
        Y0.length = 0;
      }
    }
  };
}
z7(zL, "recorderSink");
function zK(z, W) {
  let Wn = z.map((Y0, Y1) => Y1 % 2 ? 7 : 6);
  return new Promise((Y0, Y1) => {
    const Y3 = {
      crtAE: "encode",
      FhgFc: function (Y6, Y7) {
        return Y6 !== Y7;
      },
      dPsNf: "uFnFB",
      EZjGh: "ZzutM",
      hfCrk: function (Y6, Y7) {
        return Y6(Y7);
      },
      ikDrq: "image/gif",
      zQWjS: function (Y6, Y7) {
        return Y6 === Y7;
      },
      EXIOf: "progress",
      MegdB: "done",
      NpKKF: "error",
      aZvrd: function (Y6, Y7) {
        return Y6(Y7);
      },
      xRAZn: "GIF encoder error",
      eVELN: function (Y6, Y7) {
        return Y6 !== Y7;
      },
      vVNYT: function (Y6, Y7) {
        return Y6 <= Y7;
      },
      wwYsH: function (Y6, Y7, Y8) {
        return Y6(Y7, Y8);
      },
      WrKSi: function (Y6, Y7) {
        return Y6 !== Y7;
      },
      iUksZ: "eSWRc",
      ZyyJe: "QzruV",
      ETTaz: "the GIF worker could not start",
      wBRyk: function (Y6, Y7) {
        return Y6 || Y7;
      },
      iYuAn: function (Y6, Y7) {
        return Y6 < Y7;
      },
      wYFUH: function (Y6) {
        return Y6();
      }
    };
    {
      let Y6 = null;
      try {
        Y6 = new Worker(new URL("./capture_gifworker-TULL5RUB.js", import.meta.url), {
          type: "module"
        });
      } catch {
        Y6 = null;
      }
      let Y7 = Y9 => {
        const Yz = {
          nTwJy: Y3.crtAE
        };
        const YY = Yz;
        if (Y3.FhgFc(Y3.dPsNf, Y3.EZjGh)) {
          z.length = 0;
          Y3.hfCrk(Y0, new Blob([Y9], {
            type: Y3.ikDrq
          }));
        } else {
          const YC = {
            type: YY.nTwJy,
            w: Y3,
            h: Y9,
            frames: Y6,
            delays: Y7
          };
          Y1.postMessage(YC, p);
        }
      };
      if (Y6) {
        {
          Y6.onmessage = Y9 => {
            let YW = Y9.data || {};
            if (Y3.zQWjS(YW.type, Y3.EXIOf)) {
              if (W) {
                Y3.hfCrk(W, YW.p);
              }
            } else if (Y3.zQWjS(YW.type, Y3.MegdB)) {
              Y6.terminate();
              Y3.hfCrk(Y7, YW.bytes);
            } else if (Y3.zQWjS(YW.type, Y3.NpKKF)) {
              Y6.terminate();
              Y3.aZvrd(Y1, new Error(YW.message || Y3.xRAZn));
            }
          };
          Y6.onerror = Y9 => {
            if (Y3.WrKSi(Y3.iUksZ, Y3.ZyyJe)) {
              try {
                Y6.terminate();
              } catch {}
              Y3.aZvrd(Y1, new Error(Y9 && Y9.message || Y3.ETTaz));
            } else {
              let Yv = Y6.shrinking;
              if (!Yv) {
                return;
              }
              Y7.shrinking = null;
              let Yb = Yv.thief;
              Yb.busy = false;
              if (Y3.eVELN(p, null) && Y3.vVNYT(r, Yv.oldB)) {
                Y0.steals++;
                Y3.wwYsH(Y9, Yb, {
                  id: B++,
                  a: Yv,
                  b: Yv.oldB
                });
              } else {
                Y3.aZvrd(Yb, Yb);
              }
            }
          };
          try {
            {
              const Y9 = {
                type: "encode",
                w: zV,
                h: zO,
                frames: z,
                delays: Wn
              };
              Y6.postMessage(Y9, z);
            }
          } catch (Yb) {
            Y6.terminate();
            Y1(Yb);
          }
        }
      } else {
        Wl("./capture_gifworker-TULL5RUB.js", import.meta.url).then(YC => Y7(YC.encodeGif(z.map(YM => new Uint8Array(YM)), zV, zO, Wn, null)), Y1);
      }
    }
  });
}
z7(zK, "encodeGifFrames");
function W0(z) {
  let Wn = z(zV, zO);
  let WL = Wn.getContext("2d", {
    willReadFrequently: true
  }) || Wn.getContext("2d");
  let WK = [];
  return {
    kind: "gif",
    busy: () => false,
    frame(Y2) {
      WL.imageSmoothingEnabled = false;
      WL.drawImage(Y2, 0, 0, Y2.width, Y2.height, 0, 0, zV, zO);
      WK.push(WL.getImageData(0, 0, zV, zO).data.buffer.slice(0));
    },
    bytes: () => WK.length * zV * zO * 4,
    error: () => null,
    finish: Y2 => zK(WK, Y2),
    abort() {
      WK.length = 0;
    }
  };
}
z7(W0, "gifSink");
var W1 = z7(z => String(z || "fight").replace(/[^A-Za-z0-9_-]+/g, "_").slice(0, 40), "safeId");
function W2(z) {
  let WH = new Date(Number.isFinite(z) ? z : Date.now());
  let Wn = Y0 => String(Y0).padStart(2, "0");
  return WH.getFullYear() + Wn(WH.getMonth() + 1) + Wn(WH.getDate()) + "-" + Wn(WH.getHours()) + Wn(WH.getMinutes());
}
z7(W2, "stampOf");
var W3 = z7((z, W) => "drsim_" + W1(z.fight) + "_" + W2(z.recordedAt) + (W ? ".gif" : ".webm"), "videoName");
function W4(z, W, We) {
  let Wn = (We ? zt : zh) * zx;
  let WL = 1;
  let WK = z;
  if (W && W.kind === "last") {
    WL = Math.max(1, z - zr(W.secs, 1, 3600) * zx + 1);
  } else if (W && W.kind === "range") {
    WL = zr(W.from * zx + 1, 1, z);
    WK = zr(W.to * zx, WL, z);
  }
  let Y3 = false;
  if (WK - WL + 1 > Wn) {
    WL = WK - Wn + 1;
    Y3 = true;
  }
  return {
    from: WL,
    to: WK,
    capped: Y3,
    tooFar: WL - 1 > zP * zx
  };
}
z7(W4, "rangeOf");
var W5 = z7(() => typeof Worker == "function" && typeof OffscreenCanvas == "function" && typeof createImageBitmap == "function" && typeof document !== "undefined", "canParallel");
var W6 = 6;
var W7 = 2;
var W8 = 0.06;
function W9(z, W, We, WH = W8) {
  let WK = Y5 => {
    let Y6 = [];
    let Y7 = z;
    for (let YY = 0; YY < We && Y7 <= W; YY++) {
      let Yv = Math.floor(Y5 - (Y7 - 1) * WH);
      if (Yv < 1) {
        break;
      }
      let Yb = Math.min(W, Y7 + Yv - 1);
      Y6.push([Y7, Yb]);
      Y7 = Yb + 1;
    }
    const Y8 = {
      segs: Y6,
      s: Y7
    };
    return Y8;
  };
  let Y0 = 0;
  let Y1 = W - z + 1 + W * WH + 2;
  for (let Y5 = 0; Y5 < 60; Y5++) {
    let Y6 = (Y0 + Y1) / 2;
    if (WK(Y6).s > W) {
      Y1 = Y6;
    } else {
      Y0 = Y6;
    }
  }
  let {
    segs: Y4
  } = WK(Y1);
  if (Y4.length) {
    Y4[Y4.length - 1][1] = W;
    Y4.T = Y1;
    return Y4;
  } else {
    return [[z, W]];
  }
}
z7(W9, "splitRange");
function Wz(z, W, We, WH = W8) {
  let Y0 = [];
  for (let Y3 = 1; Y3 <= We; Y3++) {
    Y0.push(W9(z, W, Y3, WH).T || Infinity);
  }
  let Y1 = Math.min(...Y0);
  for (let Y4 = 1; Y4 <= We; Y4++) {
    if (Y0[Y4 - 1] <= Y1 * 1.1) {
      return Y4;
    }
  }
  return We;
}
z7(Wz, "workersFor");
var WW = z7(z => {
  let WH = Object.getOwnPropertyDescriptor(k, z);
  return WH && WH.value;
}, "spriteEntry");
function WY(z, W) {
  let WK = E;
  try {
    {
      if (W !== WK) {
        A(W);
      }
      let Y1 = R[z];
      if (Y1 && typeof Y1.src == "string" && Y1.src) {
        return Y1.src;
      } else {
        return null;
      }
    }
  } catch {
    return null;
  } finally {
    if (E !== WK) {
      A(WK);
    }
  }
}
z7(WY, "soundUrl");
var Wv = z7(() => new URL("assets/", document.baseURI).href, "assetsUrl");
function Wb() {
  try {
    return new Worker(new URL("./videoworker-ZIQ2RVKP.js", import.meta.url), {
      type: "module"
    });
  } catch {
    return null;
  }
}
z7(Wb, "spawnWorker");
var WC = 90000;
var WM = null;
function WF() {
  if (WM || WV || !W5() || !zl()) {
    return false;
  }
  let We = typeof navigator !== "undefined" && navigator.hardwareConcurrency || 4;
  let WH = Math.max(1, Math.min(W7, We - 1));
  let Wn = Y1 => {
    {
      let Y7 = Wb();
      if (!Y7) {
        return null;
      }
      const Y8 = {
        w: Y7,
        role: Y1,
        ready: false,
        caps: null,
        dead: false
      };
      let Y9 = Y8;
      Y7.onmessage = Yz => {
        {
          let YM = Yz.data || {};
          if (YM.t === "ready") {
            Y9.ready = true;
            Y9.caps = YM.caps;
          }
        }
      };
      Y7.onerror = () => {
        Y9.dead = true;
      };
      Y7.postMessage({
        cmd: "boot",
        role: Y1,
        assets: Wv()
      });
      return Y9;
    }
  };
  let WL = {
    scout: [Wn("scout")].filter(Boolean),
    render: Array.from({
      length: WH
    }, () => Wn("render")).filter(Boolean)
  };
  WL.timer = setTimeout(() => {
    if (WM === WL) {
      Wh();
    }
  }, WC);
  WM = WL;
  return true;
}
z7(WF, "prewarm");
function Wh() {
  let We = WM;
  WM = null;
  if (We) {
    {
      clearTimeout(We.timer);
      for (let WK of [...We.scout, ...We.render]) {
        try {
          WK.w.terminate();
        } catch {}
      }
    }
  }
}
z7(Wh, "coolDown");
function Wt() {
  let Wn = WM;
  WM = null;
  if (!Wn) {
    return null;
  }
  clearTimeout(Wn.timer);
  let WL = WK => {
    if (WK.dead) {
      try {
        WK.w.terminate();
      } catch {}
      return false;
    }
    return true;
  };
  return {
    scout: Wn.scout.filter(WL),
    render: Wn.render.filter(WL)
  };
}
z7(Wt, "takeWarm");
async function Wm(z, W, We, WH, Wn) {
  const WL = {
    KONsx: function (Ye, Yn) {
      return Ye * Yn;
    },
    agvey: "f32-planar",
    Uckif: function (Ye, Yn) {
      return Ye / Yn;
    },
    JDLoM: function (Ye) {
      return Ye();
    },
    BkBVe: function (Ye) {
      return Ye();
    },
    dtYUa: function (Ye, Yn) {
      return Ye(Yn);
    },
    HAMfw: "rv:export",
    RzplZ: function (Ye, Yn, vt, vo, ve) {
      return Ye(Yn, vt, vo, ve);
    },
    TgrYI: function (Ye, Yn) {
      return Ye < Yn;
    },
    JrPai: function (Ye, Yn) {
      return Ye(Yn);
    },
    wxekA: function (Ye) {
      return Ye();
    },
    XQSIU: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    dolTn: function (Ye, Yn) {
      return Ye + Yn;
    },
    bMmbV: "export: ",
    wBKkq: function (Ye, Yn) {
      return Ye - Yn;
    },
    zyejB: function (Ye, Yn) {
      return Ye > Yn;
    },
    RimlM: function (Ye, Yn) {
      return Ye !== Yn;
    },
    isruZ: "jeYUK",
    wTgbj: "kVCxF",
    HoKTZ: function (Ye, Yn) {
      return Ye || Yn;
    },
    dAeEo: function (Ye) {
      return Ye();
    },
    hNNBO: function (Ye, Yn) {
      return Ye(Yn);
    },
    lBmGy: function (Ye, Yn) {
      return Ye * Yn;
    },
    knSNk: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    KhDKF: "render",
    NMwvR: function (Ye) {
      return Ye();
    },
    xPhbY: function (Ye, Yn) {
      return Ye - Yn;
    },
    aRCLN: function (Ye, Yn) {
      return Ye !== Yn;
    },
    zcWks: "done",
    fweqt: "RxOdq",
    dbAxo: "MDNcl",
    rkdtm: function (Ye, Yn) {
      return Ye !== Yn;
    },
    OpKZV: "RXXeG",
    usipf: "wzCPs",
    KgmiZ: function (Ye, Yn) {
      return Ye !== Yn;
    },
    FWahc: "THUfU",
    zELWA: function (Ye, Yn) {
      return Ye === Yn;
    },
    LrNFh: "error",
    yuvdF: function (Ye, Yn) {
      return Ye(Yn);
    },
    irbmz: "a video worker stopped: ",
    avNTs: "ready",
    QdBSh: function (Ye, Yn) {
      return Ye !== Yn;
    },
    ibgxm: "SBkyU",
    MEiYs: function (Ye) {
      return Ye();
    },
    ewJin: function (Ye, Yn) {
      return Ye(Yn);
    },
    jauMx: "the workers have no video encoder",
    EhPLb: function (Ye, Yn) {
      return Ye === Yn;
    },
    IWXgo: "the workers have no OffscreenCanvas",
    XNBfA: function (Ye, Yn) {
      return Ye === Yn;
    },
    drmAd: "job",
    vLMNt: "nofight",
    aHdKZ: function (Ye, Yn) {
      return Ye(Yn);
    },
    pdIrP: "the workers do not have this fight",
    OczKn: function (Ye, Yn) {
      return Ye === Yn;
    },
    gRHSx: "nocodec",
    iNidU: function (Ye, Yn) {
      return Ye(Yn);
    },
    HSPKG: "the workers cannot encode ",
    ycoaV: "video",
    BWjaA: "jobok",
    NJFQo: "HXjtY",
    irXgx: "HuqZZ",
    hafQI: function (Ye, Yn) {
      return Ye === Yn;
    },
    owbUi: "rfNNa",
    chEnc: "gpveT",
    FDLjN: function (Ye, Yn) {
      return Ye - Yn;
    },
    riXlA: function (Ye) {
      return Ye();
    },
    RPHNE: "scout",
    WzDEd: function (Ye, Yn) {
      return Ye | Yn;
    },
    mivaT: function (Ye, Yn) {
      return Ye > Yn;
    },
    vZNGZ: function (Ye, Yn) {
      return Ye - Yn;
    },
    lHBsB: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    IRbgb: function (Ye, Yn) {
      return Ye === Yn;
    },
    LmnKc: "prog",
    SPmHS: function (Ye, Yn) {
      return Ye === Yn;
    },
    yqaBx: "XoTUG",
    bjHWV: "hBbFE",
    bBHNK: function (Ye, Yn) {
      return Ye === Yn;
    },
    Njwcn: "probe",
    zOohn: function (Ye, Yn) {
      return Ye === Yn;
    },
    xqnRX: "gif",
    doTId: function (Ye, Yn) {
      return Ye >= Yn;
    },
    AKLyf: function (Ye, Yn) {
      return Ye < Yn;
    },
    ZHIWr: function (Ye, Yn) {
      return Ye === Yn;
    },
    zuDTY: "hole",
    MZymO: function (Ye, Yn) {
      return Ye !== Yn;
    },
    XBoae: "NERoQ",
    lFjkw: "yYusE",
    ILtSR: function (Ye, Yn) {
      return Ye < Yn;
    },
    LxLIu: function (Ye, Yn) {
      return Ye + Yn;
    },
    KTFRE: function (Ye, Yn) {
      return Ye !== Yn;
    },
    eHflP: "uFTjK",
    EHgjD: "WUgYj",
    MpJeW: function (Ye, Yn) {
      return Ye | Yn;
    },
    HNwPb: function (Ye, Yn) {
      return Ye > Yn;
    },
    pOoLO: function (Ye, Yn) {
      return Ye <= Yn;
    },
    uxfwp: function (Ye, Yn) {
      return Ye + Yn;
    },
    JxDFc: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    aTQWh: "shrunk",
    HGVsw: function (Ye, Yn) {
      return Ye === Yn;
    },
    uzILD: "vehQM",
    Ouipv: "OXjGL",
    PqDaW: "chunks",
    pNYBu: "ARsqT",
    hLcfz: "HBiQN",
    KDTXV: function (Ye, Yn) {
      return Ye / Yn;
    },
    GyMLC: function (Ye, Yn) {
      return Ye - Yn;
    },
    qnAwR: function (Ye, Yn) {
      return Ye < Yn;
    },
    sPWUj: "CyxGe",
    SfZNf: function (Ye, Yn) {
      return Ye + Yn;
    },
    QbIqD: function (Ye, Yn) {
      return Ye + Yn;
    },
    sugpQ: "The video passed ",
    lwazr: function (Ye, Yn) {
      return Ye / Yn;
    },
    YdkCO: " MB - pick a shorter range",
    pjpTl: function (Ye, Yn) {
      return Ye > Yn;
    },
    WnNzT: function (Ye, Yn) {
      return Ye | Yn;
    },
    zfEFQ: function (Ye, Yn) {
      return Ye + Yn;
    },
    HcrnZ: function (Ye, Yn) {
      return Ye / Yn;
    },
    dNZRn: function (Ye, Yn) {
      return Ye + Yn;
    },
    TYzOT: function (Ye, Yn) {
      return Ye + Yn;
    },
    tiDbe: "idle",
    YjMxY: function (Ye) {
      return Ye();
    },
    LZXSZ: "snd_menumove",
    wEjqk: function (Ye, Yn) {
      return Ye || Yn;
    },
    hrJZP: function (Ye) {
      return Ye();
    },
    hHmpL: "off",
    eFqve: function (Ye, Yn) {
      return Ye - Yn;
    },
    DgCAW: function (Ye) {
      return Ye();
    },
    OAxkp: "audio",
    yRbdD: function (Ye, Yn) {
      return Ye - Yn;
    },
    GWzXs: "no audio",
    PNksg: function (Ye, Yn) {
      return Ye === Yn;
    },
    RiBgX: "AUqXM",
    YIaEL: "cancelled",
    vyyGV: "encode",
    vfrng: function (Ye, Yn) {
      return Ye !== Yn;
    },
    jHWmi: "HayZi",
    OPIfz: "jKxpE",
    OaduB: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    pLBxe: "wqyov",
    JwzKL: "yaJEU",
    tuDFP: function (Ye, Yn) {
      return Ye(Yn);
    },
    aYRfK: "GIF encoder error",
    hJLZg: function (Ye, Yn) {
      return Ye < Yn;
    },
    DwQlS: "kKWyn",
    sAdPm: function (Ye, Yn) {
      return Ye(Yn);
    },
    VlyTK: function (Ye, Yn) {
      return Ye + Yn;
    },
    eDnYh: "frame ",
    JgTBi: function (Ye, Yn) {
      return Ye + Yn;
    },
    UHvds: " is missing",
    gDBEo: "A_OPUS",
    xmtkA: function (Ye, Yn) {
      return Ye / Yn;
    },
    RdigO: function (Ye, Yn) {
      return Ye * Yn;
    },
    jdlUJ: "video/webm",
    DmhhK: function (Ye, Yn) {
      return Ye(Yn);
    },
    qXlub: function (Ye, Yn) {
      return Ye && Yn;
    },
    NIXzl: function (Ye, Yn) {
      return Ye || Yn;
    },
    PIVQT: "workers",
    EACjo: function (Ye) {
      return Ye();
    },
    vYZRt: function (Ye, Yn) {
      return Ye - Yn;
    },
    ucAdr: function (Ye, Yn) {
      return Ye(Yn);
    },
    awwGQ: "snd_select",
    puUFc: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    UtiOT: function (Ye, Yn) {
      return Ye(Yn);
    },
    pmunj: "vsxRf",
    tGQZF: "EaOwR",
    FgXnv: "HdNTT",
    wyIpp: "CGbVT",
    bJJLd: "PFSQm",
    fCxJF: "cancel",
    xDxkm: "gdPvk",
    XMlpA: "zaNhT",
    seJRa: "OWRTk",
    tuRTb: "cLhYt",
    vspdU: "boot",
    tKUCw: function (Ye, Yn) {
      return Ye && Yn;
    },
    xlvGF: "uIkIs",
    QCCPe: function (Ye) {
      return Ye();
    },
    olJvt: "cMXbr",
    FPWAR: "hCwuV",
    NJzfS: function (Ye, Yn) {
      return Ye === Yn;
    },
    XdLVw: "qpiIG",
    ekfdK: function (Ye, Yn) {
      return Ye - Yn;
    },
    eTSTB: function (Ye, Yn) {
      return Ye == Yn;
    },
    IdjJz: "string",
    caAhe: "gqYZi",
    bXShI: "DAoEb",
    BNVgM: "HDiLP",
    cpOTz: function (Ye) {
      return Ye();
    },
    jQbMx: function (Ye, Yn) {
      return Ye !== Yn;
    },
    SfTIr: "kIwHA",
    ooCCf: "ZmjKF",
    XSshw: function (Ye, Yn) {
      return Ye + Yn;
    },
    whiUo: "a video worker failed: ",
    DpilQ: function (Ye, Yn) {
      return Ye + Yn;
    },
    WuTXy: "a video worker could not start: ",
    ImZNe: function (Ye, Yn) {
      return Ye(Yn);
    },
    niQqS: "jZlgA",
    DpOTu: "mMfnx",
    RcLFb: "the game code",
    iCtxZ: "Not a replay",
    dqsEC: "xlESY",
    EojEF: "bHvRw",
    hapye: "sprites",
    cvUmM: "spr_heart",
    dAGpz: function (Ye, Yn) {
      return Ye + Yn;
    },
    GbdhL: "DdDzO",
    nvRti: function (Ye, Yn) {
      return Ye <= Yn;
    },
    ASzCQ: function (Ye, Yn) {
      return Ye & Yn;
    },
    LGkIW: "bad vint at ",
    Ebupc: function (Ye, Yn) {
      return Ye - Yn;
    },
    YhhdC: function (Ye, Yn) {
      return Ye * Yn;
    },
    MGGrT: "DdOPI",
    LVSNt: "Qoahu",
    mNLnK: function (Ye) {
      return Ye();
    },
    VGnis: "IDLBh",
    suUzw: "pVZPX",
    AvjtC: function (Ye, Yn) {
      return Ye > Yn;
    },
    djjyo: function (Ye, Yn) {
      return Ye > Yn;
    },
    PDCix: function (Ye) {
      return Ye();
    },
    MXFgk: function (Ye) {
      return Ye();
    },
    hjCZi: "ZqUYG",
    eaUMf: function (Ye, Yn) {
      return Ye - Yn;
    },
    ccWZc: function (Ye) {
      return Ye();
    },
    MZXNq: "sprites: ",
    Ompoc: "seek",
    cFyYc: "task",
    EnEDO: "emJif",
    pummI: "hMwxX",
    EFlNa: "FGlJF",
    Sxbey: "JeNts",
    TCYRD: "draw",
    xzUCH: function (Ye, Yn) {
      return Ye / Yn;
    },
    CpDMd: function (Ye, Yn) {
      return Ye - Yn;
    },
    EqAJC: function (Ye, Yn) {
      return Ye < Yn;
    },
    qMSsM: function (Ye, Yn) {
      return Ye <= Yn;
    },
    eBetM: "wait",
    ApQiX: "shrink",
    qPPgK: "the GIF worker could not start",
    bghNw: function (Ye, Yn) {
      return Ye < Yn;
    },
    fyTWL: "Fzdms",
    jmXwt: "ygbFd",
    CdKgZ: function (Ye, Yn) {
      return Ye !== Yn;
    },
    fuxcH: "UeKvF",
    pKfAa: "mqZOK",
    ocuqB: "mQZBW",
    sJAwa: "gaZED",
    bsJhI: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    UAICg: "Zcevp",
    TzcOR: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    NlIeV: function (Ye, Yn, vt, vo) {
      return Ye(Yn, vt, vo);
    },
    YxwMv: "zLrrg",
    KuMtA: "ttbti",
    JkvYa: function (Ye, Yn) {
      return Ye !== Yn;
    },
    yPkgR: "jshkS",
    FywSQ: "UYZgU",
    jMSrC: "frontier",
    eFlKK: "this browser cannot encode Opus",
    hFeZN: "last",
    VGcLG: "range",
    qaZUp: function (Ye, Yn, vt, vo) {
      return Ye(Yn, vt, vo);
    },
    vdUIE: function (Ye, Yn) {
      return Ye > Yn;
    },
    zJJKw: function (Ye, Yn) {
      return Ye - Yn;
    },
    ylkdC: function (Ye, Yn) {
      return Ye / Yn;
    },
    Hjphf: function (Ye, Yn) {
      return Ye + Yn;
    },
    xJtHl: function (Ye, Yn) {
      return Ye > Yn;
    },
    BIkYa: function (Ye, Yn) {
      return Ye(Yn);
    },
    ebGFA: "./capture_gifworker-TULL5RUB.js",
    eOltQ: "module",
    EtrFg: "wnKyE",
    baInM: "wOWrU",
    VYYKD: "dYiEu",
    arjoP: "ZJJEn",
    vYnvD: "rendering",
    oKTri: function (Ye, Yn) {
      return Ye - Yn;
    },
    dKXEW: function (Ye) {
      return Ye();
    },
    DsZUd: "SwtWO",
    nmsaN: function (Ye, Yn) {
      return Ye === Yn;
    },
    mvWKZ: "progress",
    oJGmo: function (Ye, Yn) {
      return Ye(Yn);
    },
    xkLUZ: function (Ye, Yn) {
      return Ye(Yn);
    },
    JcDPn: "rv:row",
    WAaOm: function (Ye, Yn) {
      return Ye + Yn;
    },
    HvOZL: function (Ye, Yn, vt, vo, ve, vn) {
      return Ye(Yn, vt, vo, ve, vn);
    },
    iDZwV: function (Ye, Yn) {
      return Ye !== Yn;
    },
    xEIGW: function (Ye, Yn) {
      return Ye !== Yn;
    },
    KHpGL: "fvOxq",
    GhdBq: "vyTgg",
    TNWjL: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    Lelho: function (Ye, Yn) {
      return Ye < Yn;
    },
    QqUMg: function (Ye, Yn) {
      return Ye === Yn;
    },
    IYVVR: "goEVp",
    TwuDc: "uLWOn",
    kCMuX: function (Ye, Yn) {
      return Ye === Yn;
    },
    SSOdw: "gaZgn",
    hQaEN: function (Ye, Yn) {
      return Ye === Yn;
    },
    VUkTu: "ErpVO",
    rUmiT: function (Ye, Yn) {
      return Ye(Yn);
    },
    mpeUx: "workers are not available",
    HFvNi: function (Ye) {
      return Ye();
    },
    xeaHB: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    gdlmZ: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    RGQga: function (Ye, Yn) {
      return Ye === Yn;
    },
    RAWRS: function (Ye, Yn) {
      return Ye * Yn;
    },
    slSPe: function (Ye, Yn) {
      return Ye - Yn;
    },
    OAEfl: function (Ye, Yn) {
      return Ye / Yn;
    },
    RVEAN: function (Ye, Yn, vt, vo, ve) {
      return Ye(Yn, vt, vo, ve);
    },
    AwaUm: "quality",
    FqgrM: "no VP9/VP8 encoder",
    cEjuI: function (Ye, Yn) {
      return Ye(Yn);
    },
    GaieP: function (Ye, Yn) {
      return Ye == Yn;
    },
    gzpMC: "number",
    WGhfz: function (Ye, Yn, vt) {
      return Ye(Yn, vt);
    },
    XEfFn: "./chapterpack-IHAAU3F2.js",
    KLSvq: "nqLSD",
    ffxox: "LddlG",
    gKbOl: function (Ye) {
      return Ye();
    },
    WTCmp: function (Ye, Yn) {
      return Ye == Yn;
    },
    yDSvi: "object",
    fljLV: function (Ye, Yn) {
      return Ye !== Yn;
    },
    AMkMp: "HSYDV",
    EVZiy: "YZAPO",
    VvCQm: function (Ye, Yn) {
      return Ye(Yn);
    },
    rejrh: function (Ye, Yn) {
      return Ye !== Yn;
    },
    oGERI: function (Ye) {
      return Ye();
    },
    qyGdz: "waiting"
  };
  let {
    from: WK,
    to: Y0
  } = We;
  let Y1 = !!WH.gif;
  let Y2 = Y1 ? 2 : 1;
  let Y3 = Y1 ? 1 : WL.RGQga(WH.scale, 2) ? 2 : 1;
  let Y4 = WL.RAWRS(640, Y3);
  let Y5 = WL.YhhdC(480, Y3);
  let Y6 = WL.dolTn(Math.floor(WL.xmtkA(WL.slSPe(Y0, WK), Y2)), 1);
  let Y7 = WL.TgrYI(typeof navigator, "u") && navigator.hardwareConcurrency || 4;
  let Y8 = Math.max(1, Math.min(WH.workers ? Math.min(W6, WH.workers) : W7, WL.CpDMd(Y7, 1)));
  Y8 = Math.max(1, Math.min(Y8, Math.ceil(WL.OAEfl(WL.QbIqD(WL.FDLjN(Y0, WK), 1), 90))));
  if (!WH.workers) {
    Y8 = WL.NlIeV(Wz, WK, Y0, Y8);
  }
  let Yz = null;
  if (!Y1 && (Yz = await WL.RVEAN(zH, Y4, Y5, WH.latency || WL.AwaUm, WH.codecs || null), !Yz)) {
    return {
      fallback: WL.FqgrM
    };
  }
  let YW = WL.cEjuI(zu, z.fight);
  let YY = YW && (YW.pack || (WL.GaieP(typeof YW.chapter, WL.gzpMC) && WL.doTId(YW.chapter, 4) ? YW.chapter : 0));
  if (YY) {
    try {
      await (await WL.WGhfz(Wl, WL.XEfFn, import.meta.url)).loadChapterPack(YY);
    } catch {}
  }
  let Yv = {};
  try {
    if (WL.NJzfS(WL.KLSvq, WL.ffxox)) {
      if (!WL.length || B) {
        return;
      }
      let Ye = new WK(strqBR.KONsx(Y0.length, 2));
      Ye.set(Y1, 0);
      Ye.set(y, Y2.length);
      let Yn = new Y3({
        format: strqBR.agvey,
        sampleRate: 48000,
        numberOfFrames: Y4.length,
        numberOfChannels: 2,
        timestamp: Y5.round(strqBR.Uckif(strqBR.KONsx(A, 1000000), 48000)),
        data: Ye
      });
      i += Wn.length;
      k.encode(Yn);
      Yn.close();
    } else {
      Yv = JSON.parse(JSON.stringify({
        ...(WL.gKbOl(zD).cfg || {}),
        ...WL.hNNBO(zp, z.setup && WL.WTCmp(typeof z.setup, WL.yDSvi) ? z.setup : null)
      }));
    }
  } catch {
    if (WL.fljLV(WL.AMkMp, WL.EVZiy)) {
      Yv = {
        ...WL.VvCQm(zp, z.setup)
      };
    } else {
      for (let vt of h.reverse()) {
        try {
          strqBR.JDLoM(vt);
        } catch {}
      }
    }
  }
  let Yb = {
    d: {
      fight: z.fight,
      seed: z.seed,
      godmode0: !!z.godmode0,
      notes: Array.isArray(z.notes) ? z.notes : [],
      checks: Array.isArray(z.checks) ? z.checks : []
    },
    bits: W,
    cfg: Yv,
    sandbox: JSON.parse(JSON.stringify(y)),
    from: WK,
    to: Y0,
    scale: Y3,
    stride: Y2,
    gif: Y1,
    codec: Yz ? Yz.cfg : null,
    probe: WH.probe || null
  };
  let YC = !Y1 && WL.rejrh(WH.audio, false);
  let YM = WL.oGERI(zo);
  let YF = {
    workers: [],
    prof: [],
    marks: {},
    frames: 0,
    total: Y6,
    bytes: 0,
    audio: YC ? WL.qyGdz : WL.hHmpL,
    audioP: 0,
    scout: 0,
    holes: 0,
    steals: 0,
    K: Y8,
    t0: YM,
    from: WK,
    to: Y0,
    codec: Yz ? Yz.id : WL.xqnRX,
    gif: Y1
  };
  Wn.stats = YF;
  return new Promise(vo => {
    const ve = {
      QIwVc: function (CI, CA) {
        return WL.PNksg(CI, CA);
      },
      VnrLG: function (CI, CA) {
        return WL.ucAdr(CI, CA);
      },
      IxBfp: WL.awwGQ,
      cGmmv: function (CI) {
        return WL.riXlA(CI);
      },
      xXaeX: function (CI, CA, Ci) {
        return WL.puUFc(CI, CA, Ci);
      },
      YunHs: WL.LZXSZ,
      ZCgoG: function (CI, CA) {
        return WL.UtiOT(CI, CA);
      },
      bUmNG: WL.IWXgo,
      NABUv: function (CI, CA) {
        return WL.vfrng(CI, CA);
      },
      GLqdN: WL.pmunj,
      YdLiz: WL.tGQZF,
      iFquM: WL.FgXnv,
      uXWwQ: function (CI, CA) {
        return WL.QdBSh(CI, CA);
      },
      WVBBu: WL.wyIpp,
      mCfse: WL.bJJLd,
      CTnRy: WL.fCxJF,
      cxvts: WL.xDxkm,
      arOBc: WL.XMlpA,
      UkqOD: function (CI, CA) {
        return WL.hJLZg(CI, CA);
      },
      XlLfs: function (CI, CA) {
        return WL.rkdtm(CI, CA);
      },
      qNYXq: WL.seJRa,
      swYvr: WL.tuRTb,
      DvIfA: function (CI) {
        return WL.BkBVe(CI);
      },
      DZRGs: WL.vspdU,
      zbHZM: function (CI, CA) {
        return WL.JrPai(CI, CA);
      },
      suMsn: function (CI, CA) {
        return WL.tKUCw(CI, CA);
      },
      lXnMC: function (CI, CA, Ci) {
        return WL.OaduB(CI, CA, Ci);
      },
      Mpwhm: function (CI, CA) {
        return WL.EhPLb(CI, CA);
      },
      FYuoe: WL.xlvGF,
      cHSQi: function (CI, CA) {
        return WL.EhPLb(CI, CA);
      },
      oPURj: function (CI) {
        return WL.QCCPe(CI);
      },
      QTMfy: function (CI, CA) {
        return WL.ZHIWr(CI, CA);
      },
      IQHFP: WL.olJvt,
      FWWUZ: WL.FPWAR,
      kXnUA: function (CI, CA) {
        return WL.NJzfS(CI, CA);
      },
      ayZoD: WL.XdLVw,
      JNxdC: function (CI, CA) {
        return WL.dolTn(CI, CA);
      },
      IKfdY: WL.bMmbV,
      ZOPxU: function (CI, CA) {
        return WL.ekfdK(CI, CA);
      },
      taTcr: function (CI, CA) {
        return WL.HNwPb(CI, CA);
      },
      oxDKd: function (CI, CA) {
        return WL.eTSTB(CI, CA);
      },
      gTncD: WL.IdjJz,
      ufZgQ: function (CI, CA) {
        return WL.MZymO(CI, CA);
      },
      ydhBf: WL.caAhe,
      pznvj: WL.bXShI,
      TUDLO: WL.BNVgM,
      FtIop: function (CI) {
        return WL.cpOTz(CI);
      },
      PkOUQ: function (CI, CA) {
        return WL.jQbMx(CI, CA);
      },
      SnumZ: WL.SfTIr,
      aUJlx: WL.ooCCf,
      wsNoy: function (CI, CA) {
        return WL.XSshw(CI, CA);
      },
      FChuu: WL.whiUo,
      fAjjk: function (CI, CA) {
        return WL.ewJin(CI, CA);
      },
      KVjxD: function (CI, CA) {
        return WL.DpilQ(CI, CA);
      },
      IGyLv: WL.WuTXy,
      DEjEM: function (CI, CA) {
        return WL.ImZNe(CI, CA);
      },
      UxzGy: WL.niQqS,
      piYYd: WL.DpOTu,
      MWZzU: WL.RcLFb,
      tNzUA: WL.iCtxZ,
      qFkZX: function (CI, CA) {
        return WL.HGVsw(CI, CA);
      },
      HfhuS: WL.dqsEC,
      ilODI: function (CI, CA) {
        return WL.vfrng(CI, CA);
      },
      hEnuZ: WL.EojEF,
      Dxnmd: WL.hapye,
      WpgCg: WL.cvUmM,
      JQXrA: function (CI, CA) {
        return WL.dAGpz(CI, CA);
      },
      lFHhj: WL.GbdhL,
      bspmO: WL.jdlUJ,
      DhfYM: function (CI, CA) {
        return WL.nvRti(CI, CA);
      },
      qpMUs: function (CI, CA) {
        return WL.ASzCQ(CI, CA);
      },
      QLyVI: WL.LGkIW,
      nSqyR: function (CI, CA) {
        return WL.ASzCQ(CI, CA);
      },
      arrtg: function (CI, CA) {
        return WL.Ebupc(CI, CA);
      },
      CnQCe: function (CI, CA) {
        return WL.YhhdC(CI, CA);
      },
      OtTwk: WL.MGGrT,
      OSCHj: WL.LVSNt,
      nwdzI: function (CI) {
        return WL.mNLnK(CI);
      },
      YTZlZ: WL.VGnis,
      HThQx: WL.suUzw,
      syPwz: function (CI, CA) {
        return WL.AvjtC(CI, CA);
      },
      IQtqP: function (CI, CA) {
        return WL.djjyo(CI, CA);
      },
      NcxYE: function (CI, CA) {
        return WL.WzDEd(CI, CA);
      },
      hnyiu: function (CI) {
        return WL.PDCix(CI);
      },
      wZkon: function (CI) {
        return WL.NMwvR(CI);
      },
      PqJEl: function (CI) {
        return WL.MXFgk(CI);
      },
      xFEOO: WL.hjCZi,
      naeqY: function (CI, CA) {
        return WL.eaUMf(CI, CA);
      },
      PgWoQ: function (CI, CA) {
        return WL.QbIqD(CI, CA);
      },
      XONXV: function (CI, CA) {
        return WL.tKUCw(CI, CA);
      },
      PMzBK: function (CI) {
        return WL.ccWZc(CI);
      },
      sadiW: function (CI, CA) {
        return WL.dolTn(CI, CA);
      },
      jzHpz: WL.MZXNq,
      PXOiQ: WL.Ompoc,
      BCasF: function (CI, CA) {
        return WL.yRbdD(CI, CA);
      },
      aNSyn: function (CI, CA) {
        return WL.doTId(CI, CA);
      },
      qHiqg: function (CI, CA) {
        return WL.GyMLC(CI, CA);
      },
      dtoGX: WL.cFyYc,
      IiSix: function (CI, CA) {
        return WL.iNidU(CI, CA);
      },
      nCUvB: WL.aYRfK,
      zivBR: WL.EnEDO,
      iYtEC: WL.pummI,
      mJmvB: WL.EFlNa,
      vxknN: WL.Sxbey,
      nAGsB: function (CI, CA) {
        return WL.KTFRE(CI, CA);
      },
      ROMbT: WL.TCYRD,
      LSYPx: function (CI, CA) {
        return WL.AvjtC(CI, CA);
      },
      pwsVV: function (CI) {
        return WL.YjMxY(CI);
      },
      foEzS: function (CI, CA) {
        return WL.xzUCH(CI, CA);
      },
      wIPQX: function (CI, CA) {
        return WL.XSshw(CI, CA);
      },
      eZGIB: function (CI, CA) {
        return WL.CpDMd(CI, CA);
      },
      HyGir: function (CI, CA) {
        return WL.EqAJC(CI, CA);
      },
      MBfFY: function (CI, CA) {
        return WL.eFqve(CI, CA);
      },
      HLkFP: function (CI, CA) {
        return WL.qMSsM(CI, CA);
      },
      JYBSd: WL.eBetM,
      dUKLD: WL.ApQiX,
      fYanY: function (CI, CA) {
        return WL.vYZRt(CI, CA);
      },
      hHVns: function (CI, CA) {
        return WL.yuvdF(CI, CA);
      },
      lfoLi: WL.qPPgK,
      sIzDR: function (CI, CA) {
        return WL.bghNw(CI, CA);
      },
      fzBlx: function (CI, CA) {
        return WL.HNwPb(CI, CA);
      },
      ZuGpt: WL.fyTWL,
      ziDVB: WL.jmXwt,
      AXLSx: function (CI, CA) {
        return WL.CdKgZ(CI, CA);
      },
      qFuSH: WL.fuxcH,
      vhmYi: WL.pKfAa,
      Ekftc: WL.ocuqB,
      jETJV: WL.sJAwa,
      leKBp: function (CI, CA, Ci) {
        return WL.bsJhI(CI, CA, Ci);
      },
      GetEy: function (CI, CA) {
        return WL.ImZNe(CI, CA);
      },
      RdfxX: WL.tiDbe,
      EYarw: function (CI, CA, Ci) {
        return WL.JxDFc(CI, CA, Ci);
      },
      rKtZC: WL.UAICg,
      hjVkg: function (CI, CA, Ci) {
        return WL.TzcOR(CI, CA, Ci);
      },
      uEjNy: function (CI, CA) {
        return WL.aHdKZ(CI, CA);
      },
      gJqRi: function (CI, CA, Ci, Ca) {
        return WL.NlIeV(CI, CA, Ci, Ca);
      },
      qZMqt: function (CI, CA) {
        return WL.IRbgb(CI, CA);
      },
      wJput: WL.YxwMv,
      uAkvf: WL.KuMtA,
      fVsaM: function (CI, CA) {
        return WL.JkvYa(CI, CA);
      },
      wVbZr: WL.yPkgR,
      rEZhU: WL.FywSQ,
      PNJGE: WL.jMSrC,
      QlfAr: WL.eFlKK,
      FUegr: function (CI, CA) {
        return WL.KONsx(CI, CA);
      },
      tEpBy: WL.hFeZN,
      eINfJ: WL.VGcLG,
      SgCIQ: function (CI, CA) {
        return WL.JgTBi(CI, CA);
      },
      OdfzZ: function (CI, CA) {
        return WL.lBmGy(CI, CA);
      },
      vEtyV: function (CI, CA, Ci, Ca) {
        return WL.qaZUp(CI, CA, Ci, Ca);
      },
      XEeMk: function (CI, CA) {
        return WL.vdUIE(CI, CA);
      },
      ONJez: function (CI, CA) {
        return WL.zJJKw(CI, CA);
      },
      hUQcP: function (CI, CA) {
        return WL.DpilQ(CI, CA);
      },
      lSNVJ: function (CI, CA) {
        return WL.RdigO(CI, CA);
      },
      NVuLz: function (CI, CA) {
        return WL.ylkdC(CI, CA);
      },
      mAURa: function (CI, CA) {
        return WL.Hjphf(CI, CA);
      },
      HRoLX: function (CI, CA) {
        return WL.xJtHl(CI, CA);
      },
      nTxDg: function (CI, CA) {
        return WL.BIkYa(CI, CA);
      },
      ROFsI: WL.ebGFA,
      ERDHh: WL.eOltQ,
      wMNmO: function (CI, CA) {
        return WL.RimlM(CI, CA);
      },
      Setgr: WL.EtrFg,
      CsVQn: WL.baInM,
      TNfOb: function (CI) {
        return WL.MXFgk(CI);
      },
      nNoOb: function (CI, CA) {
        return WL.jQbMx(CI, CA);
      },
      qabfo: WL.VYYKD,
      fVOVs: WL.arjoP,
      ahqic: function (CI, CA) {
        return WL.HoKTZ(CI, CA);
      },
      VmjmO: WL.vYnvD,
      yaMcO: function (CI, CA) {
        return WL.oKTri(CI, CA);
      },
      JidCJ: function (CI) {
        return WL.dKXEW(CI);
      },
      ewNQY: function (CI, CA) {
        return WL.UtiOT(CI, CA);
      },
      dsfDQ: WL.HAMfw,
      CCSkI: function (CI, CA) {
        return WL.BIkYa(CI, CA);
      },
      ObeWA: WL.DsZUd,
      Mqryd: function (CI, CA) {
        return WL.nmsaN(CI, CA);
      },
      xLiEp: WL.mvWKZ,
      tYYVM: function (CI, CA) {
        return WL.oJGmo(CI, CA);
      },
      wsVLt: WL.zcWks,
      zGoak: WL.LrNFh,
      ZGOwN: function (CI, CA) {
        return WL.xkLUZ(CI, CA);
      },
      iXvNY: function (CI, CA) {
        return WL.JgTBi(CI, CA);
      },
      ejALU: function (CI, CA) {
        return WL.dNZRn(CI, CA);
      },
      cAwHs: function (CI, CA) {
        return WL.KONsx(CI, CA);
      },
      wzwpP: function (CI, CA) {
        return WL.SfZNf(CI, CA);
      },
      fAfxy: WL.JcDPn,
      NKIwR: function (CI, CA) {
        return WL.CpDMd(CI, CA);
      },
      sLKBR: function (CI, CA) {
        return WL.ekfdK(CI, CA);
      },
      pPmXL: function (CI, CA) {
        return WL.WAaOm(CI, CA);
      },
      mKvFc: function (CI, CA, Ci, Ca, Ck, CS) {
        return WL.HvOZL(CI, CA, Ci, Ca, Ck, CS);
      },
      jklFM: function (CI, CA) {
        return WL.QbIqD(CI, CA);
      },
      cPNPR: function (CI, CA) {
        return WL.iNidU(CI, CA);
      },
      KBANk: function (CI, CA, Ci, Ca, Ck, CS) {
        return WL.HvOZL(CI, CA, Ci, Ca, Ck, CS);
      },
      QPbed: function (CI, CA) {
        return WL.iDZwV(CI, CA);
      },
      GTjEg: function (CI, CA) {
        return WL.xEIGW(CI, CA);
      },
      lgKtq: function (CI, CA) {
        return WL.yuvdF(CI, CA);
      },
      JHubp: WL.KHpGL,
      pZzrB: WL.GhdBq,
      IleyX: WL.YIaEL
    };
    let vn = false;
    let bt = [];
    let bo = null;
    let be = CI => {
      const Ck = {
        QnMmU: function (CS, CU) {
          return ve.QIwVc(CS, CU);
        },
        HJsVj: function (CS, CU) {
          return ve.VnrLG(CS, CU);
        },
        VGKie: ve.IxBfp,
        ealQt: function (CS) {
          return ve.cGmmv(CS);
        },
        bIlnd: function (CS, CU, CJ) {
          return ve.xXaeX(CS, CU, CJ);
        },
        GhiyT: function (CS, CU) {
          return ve.VnrLG(CS, CU);
        },
        hxpaA: ve.YunHs,
        aETBC: function (CS, CU) {
          return ve.ZCgoG(CS, CU);
        },
        GEQgh: ve.bUmNG
      };
      if (ve.NABUv(ve.GLqdN, ve.GLqdN)) {
        if (Ck.QnMmU(W, "go")) {
          Ck.HJsVj(Wn, Ck.VGKie);
          Ck.ealQt(WH);
          return;
        }
        if (Ck.bIlnd(Y7, bn, 1)) {
          Ck.GhiyT(Y2, Ck.hxpaA);
        }
      } else if (!vn) {
        if (ve.NABUv(ve.YdLiz, ve.iFquM)) {
          vn = true;
          if (bo) {
            ve.ZCgoG(clearInterval, bo);
          }
          for (let CS of bt) {
            if (ve.uXWwQ(ve.WVBBu, ve.mCfse)) {
              try {
                const CU = {
                  cmd: ve.CTnRy
                };
                CS.w.postMessage(CU);
              } catch {}
              try {
                if (ve.uXWwQ(ve.cxvts, ve.arOBc)) {
                  CS.w.terminate();
                } else {
                  let CJ = Ck.GhiyT(Yv, bo);
                  W = CJ && CJ.img ? CJ.img[bt] : null;
                }
              } catch {}
            } else {
              h.stop();
              W.stop();
            }
          }
          ve.VnrLG(vo, CI);
        } else {
          Ck.aETBC(Y8, {
            fallback: Ck.GEQgh
          });
          return;
        }
      }
    };
    let bn = CI => be({
      ok: false,
      why: CI
    });
    let C5 = Y1 ? null : new Array(Y6);
    let C6 = Y1 ? new Array(Y6) : null;
    let C7 = [];
    let C8 = [];
    let C9 = 1;
    let Cz = 0;
    let CW = 0;
    let CY = false;
    let Cv = false;
    let Cb = 0;
    let CC = 0;
    let CM = 0;
    let CF = 0;
    let Cx = 0;
    let Ch = [];
    let Ct = [];
    let Cm = Promise.resolve();
    let CP = new Set();
    let CV = 0;
    let CO = WL.DgCAW(Wt);
    let Cc = (CI, CA) => {
      const Ck = {
        sLONg: function (CU, CJ) {
          return ve.UkqOD(CU, CJ);
        },
        qiYqz: function (CU, CJ, Cq) {
          return ve.xXaeX(CU, CJ, Cq);
        }
      };
      if (ve.XlLfs(ve.qNYXq, ve.swYvr)) {
        let CU = CO && CO[CI].shift();
        let CJ = CU ? CU.w : ve.DvIfA(Wb);
        if (!CJ) {
          return null;
        }
        const Cq = {
          w: CJ,
          role: CI,
          i: CA,
          ready: false,
          busy: false,
          task: null,
          at: -1,
          phase: ve.DZRGs,
          f: 0,
          shrinking: null,
          pre: CU,
          retry: 0
        };
        let Cl = Cq;
        ve.xXaeX(CD, Cl, CJ);
        bt.push(Cl);
        return Cl;
      } else {
        let Cn = null;
        for (let CK of W) {
          if (!Cn || xltFzt.sLONg(CK.t0, Cn.t0)) {
            Cn = CK;
          }
        }
        if (Cn) {
          xltFzt.qiYqz(m, Cn, z);
          Cn.dead = true;
        }
      }
    };
    let Co = CI => (CI && CI.message || CI && CI.type || "error") + (CI && CI.filename ? " (" + String(CI.filename).split("/").pop() + ":" + CI.lineno + ")" : "");
    function CD(CI, CA) {
      const CS = {
        HTvem: function (CU, CJ) {
          return ve.zbHZM(CU, CJ);
        },
        sIuJm: function (CU, CJ) {
          return ve.suMsn(CU, CJ);
        },
        poISM: function (CU, CJ, Cq) {
          return ve.lXnMC(CU, CJ, Cq);
        },
        tFSiX: function (CU, CJ) {
          return ve.Mpwhm(CU, CJ);
        },
        Iwlgr: ve.FYuoe,
        Jfikn: function (CU, CJ) {
          return ve.cHSQi(CU, CJ);
        },
        FNIXr: function (CU) {
          return ve.oPURj(CU);
        },
        aZadj: function (CU, CJ) {
          return ve.QTMfy(CU, CJ);
        },
        yvhJE: ve.IQHFP,
        phvLW: ve.FWWUZ,
        WKIVy: function (CU, CJ, Cq) {
          return ve.xXaeX(CU, CJ, Cq);
        },
        hUABI: function (CU, CJ) {
          return ve.kXnUA(CU, CJ);
        },
        BXgik: ve.ayZoD,
        wVfqX: function (CU, CJ) {
          return ve.ZCgoG(CU, CJ);
        },
        GeCDK: function (CU, CJ) {
          return ve.JNxdC(CU, CJ);
        },
        QIMIK: ve.IKfdY,
        QZbgt: function (CU, CJ) {
          return ve.ZOPxU(CU, CJ);
        },
        cAyNn: function (CU) {
          return ve.cGmmv(CU);
        },
        aaAyM: function (CU, CJ) {
          return ve.taTcr(CU, CJ);
        },
        RYfvD: function (CU, CJ) {
          return ve.NABUv(CU, CJ);
        },
        esNJV: function (CU, CJ) {
          return ve.oxDKd(CU, CJ);
        },
        ZTZiZ: ve.gTncD,
        zEFLt: function (CU, CJ) {
          return ve.ufZgQ(CU, CJ);
        },
        tVDbM: ve.ydhBf,
        gwhnp: function (CU, CJ) {
          return ve.ufZgQ(CU, CJ);
        },
        NMhwW: function (CU, CJ) {
          return ve.UkqOD(CU, CJ);
        },
        JhkMy: function (CU, CJ) {
          return ve.QIwVc(CU, CJ);
        },
        zSPVC: ve.pznvj,
        SPyPO: ve.TUDLO,
        Axbwa: function (CU) {
          return ve.FtIop(CU);
        },
        hohqw: function (CU, CJ) {
          return ve.PkOUQ(CU, CJ);
        },
        NWIvL: ve.SnumZ,
        JqJEG: ve.aUJlx,
        WYdPk: ve.DZRGs,
        Yfnvr: function (CU, CJ) {
          return ve.ZCgoG(CU, CJ);
        },
        vcrGc: function (CU, CJ) {
          return ve.wsNoy(CU, CJ);
        },
        efxPk: ve.FChuu,
        VhRCp: function (CU, CJ) {
          return ve.zbHZM(CU, CJ);
        },
        EgGeN: function (CU, CJ) {
          return ve.fAjjk(CU, CJ);
        },
        HyJsw: function (CU, CJ) {
          return ve.KVjxD(CU, CJ);
        },
        ireTZ: ve.IGyLv,
        fgAzZ: function (CU, CJ) {
          return ve.zbHZM(CU, CJ);
        }
      };
      CI.w = CA;
      CA.onmessage = CU => {
        const Cn = {
          ujWQI: function (CK, M0) {
            return CS.sIuJm(CK, M0);
          },
          IdSQc: function (CK, M0, M1) {
            return CS.poISM(CK, M0, M1);
          }
        };
        if (CS.tFSiX(CS.Iwlgr, CS.Iwlgr)) {
          if (!vn && CS.Jfikn(CI.w, CA)) {
            let CK = CS.FNIXr(zo);
            try {
              if (CS.aZadj(CS.yvhJE, CS.phvLW)) {
                let M1 = Y2 ? CA[WH] : C6;
                Yz[Cr].push([CI, vn, M1]);
                if (Cn.ujWQI(Y6, M1)) {
                  M0[C5].push(M1);
                }
              } else {
                CS.WKIVy(CT, CI, CU.data || {});
              }
            } catch (M2) {
              if (CS.hUABI(CS.BXgik, CS.BXgik)) {
                CS.wVfqX(bn, CS.GeCDK(CS.QIMIK, M2 && M2.message || M2));
              } else {
                let M3 = new z(8);
                new M2(M3.buffer).setFloat64(0, We);
                return DLquie.IdSQc(c, D, M3);
              }
            }
            let M0 = CS.QZbgt(CS.cAyNn(zo), CK);
            if (CS.aaAyM(M0, YF.maxMsg ? YF.maxMsg.ms : 0)) {
              YF.maxMsg = {
                t: (CU.data || {}).t,
                ms: Math.round(M0)
              };
            }
          }
        } else {
          HOhsMy.HTvem(m, z.timer);
          for (let M4 of [...c.scout, ...D.render]) {
            try {
              M4.w.terminate();
            } catch {}
          }
        }
      };
      CA.onerror = CU => {
        if (CS.zEFLt(CS.tVDbM, CS.tVDbM)) {
          x.terminate();
        } else if (!vn && !CS.gwhnp(CI.w, CA)) {
          if (!CI.ready && CS.NMhwW(CI.retry, 2)) {
            if (CS.JhkMy(CS.zSPVC, CS.SPyPO)) {
              if (HOhsMy.RYfvD(W, We)) {
                HOhsMy.wVfqX(c, D);
              }
              let Cn = WH[p];
              if (Cn && HOhsMy.esNJV(typeof Cn.src, HOhsMy.ZTZiZ) && Cn.src) {
                return Cn.src;
              } else {
                return null;
              }
            } else {
              let CK = CS.Axbwa(Wb);
              if (CK) {
                if (CS.hohqw(CS.NWIvL, CS.JqJEG)) {
                  CI.retry++;
                  YF.bootRetries = CS.GeCDK(YF.bootRetries || 0, 1);
                  (YF.bootErrors ||= []).push(CS.wVfqX(Co, CU));
                  try {
                    CA.terminate();
                  } catch {}
                  CI.pre = null;
                  CS.WKIVy(CD, CI, CK);
                  CK.postMessage({
                    cmd: CS.WYdPk,
                    role: CI.role,
                    assets: CS.Axbwa(Wv)
                  });
                  return;
                } else {
                  Y8.w.terminate();
                }
              }
            }
          }
          if (CI.ready) {
            CS.Yfnvr(bn, CS.vcrGc(CS.efxPk, CS.VhRCp(Co, CU)));
          } else {
            CS.EgGeN(be, {
              fallback: CS.HyJsw(CS.ireTZ, CS.fgAzZ(Co, CU))
            });
          }
        }
      };
    }
    CD;
    let Cp = WL.TNWjL(Cc, WL.RPHNE, 0);
    let Cr = [];
    for (let CI = 0; WL.Lelho(CI, Y8); CI++) {
      if (WL.QqUMg(WL.IYVVR, WL.TwuDc)) {
        if (W.run) {
          WL.BkBVe(W);
          return;
        }
        WL.dtYUa(bo, WL.HAMfw);
      } else {
        let CA = WL.TzcOR(Cc, WL.KhDKF, CI);
        if (CA) {
          Cr.push(CA);
        }
      }
    }
    if (CO) {
      for (let Ci of [...CO.scout, ...CO.render]) {
        try {
          if (WL.kCMuX(WL.SSOdw, WL.SSOdw)) {
            Ci.w.terminate();
          } else {
            let Ca = strqBR.RzplZ(D, WH, p, Wn, WH);
            if (Ca) {
              WL.checks++;
              if (strqBR.TgrYI(Ca, 0) && !B.drift) {
                WK.drift = Ci;
              }
            }
          }
        } catch {}
      }
    }
    if (!Cp || !Cr.length) {
      if (WL.hQaEN(WL.VUkTu, WL.VUkTu)) {
        WL.rUmiT(be, {
          fallback: WL.mpeUx
        });
        return;
      } else {
        let Ck = WL.JrPai(W, Yv);
        bo.onProgress(Ck.p, Ck.text, Ck);
      }
    }
    YF.workers = Cr.map(() => ({
      phase: "boot",
      a: 0,
      b: 0,
      f: 0,
      seek: 0
    }));
    for (let CS of bt) {
      if (!CS.pre) {
        CS.w.postMessage({
          cmd: WL.vspdU,
          role: CS.role,
          assets: WL.HFvNi(Wv)
        });
      }
    }
    for (let CU of bt) {
      if (CU.pre && CU.pre.ready) {
        WL.xeaHB(CT, CU, {
          t: WL.avNTs,
          caps: CU.pre.caps
        });
      }
    }
    async function Cs(CJ) {
      const CK = {
        FSoaA: function (M0, M1) {
          return ve.XlLfs(M0, M1);
        },
        qyDWa: ve.lFHhj,
        wpzXv: function (M0, M1) {
          return ve.suMsn(M0, M1);
        },
        CtKBz: function (M0, M1) {
          return ve.VnrLG(M0, M1);
        },
        SPKtS: ve.bspmO,
        FNQEW: function (M0, M1) {
          return ve.DhfYM(M0, M1);
        },
        STxCo: function (M0, M1) {
          return ve.qpMUs(M0, M1);
        },
        AbJmA: function (M0, M1) {
          return ve.taTcr(M0, M1);
        },
        sBOiX: function (M0, M1) {
          return ve.JNxdC(M0, M1);
        },
        NUxKq: ve.QLyVI,
        GOhQt: function (M0, M1) {
          return ve.nSqyR(M0, M1);
        },
        lRXFk: function (M0, M1) {
          return ve.arrtg(M0, M1);
        },
        KYIga: function (M0, M1) {
          return ve.UkqOD(M0, M1);
        },
        FeWMP: function (M0, M1) {
          return ve.CnQCe(M0, M1);
        }
      };
      if (ve.PkOUQ(ve.OtTwk, ve.OSCHj)) {
        let M0 = Cr.map(() => []);
        let M1 = Cr.map(() => []);
        let M2 = [];
        let M3 = ve.nwdzI(zo);
        let M4 = async () => {
          const M8 = {
            nwiEs: function (MW, MY) {
              return ve.DEjEM(MW, MY);
            }
          };
          if (ve.kXnUA(ve.UxzGy, ve.piYYd)) {
            x.close();
          } else {
            let MW = await Promise.all(M2);
            M2 = [];
            for (let [MY, Mv, Mb, MC] of MW) {
              Cr.forEach((MM, MF) => {
                if (CK.FSoaA(CK.qyDWa, CK.qyDWa)) {
                  W = {
                    ...XaDuWM.nwiEs(Yv, z.setup)
                  };
                } else {
                  let Mm = Mb ? Mb[MF] : MC;
                  M0[MF].push([MY, Mv, Mm]);
                  if (CK.wpzXv(Mb, Mm)) {
                    M1[MF].push(Mm);
                  }
                }
              });
            }
          }
        };
        for (let M7 of CJ) {
          if (vn) {
            break;
          }
          if (CP.has(M7)) {
            continue;
          }
          CP.add(M7);
          let M8 = M7.indexOf("");
          let M9 = M7.slice(0, M8);
          let Mz = +M7.slice(ve.wsNoy(M8, 1));
          let MW = null;
          try {
            if (ve.QIwVc(ve.YTZlZ, ve.HThQx)) {
              M4.onstop = () => {
                try {
                  WK.stop();
                } catch {}
                AEdgrt.CtKBz(WH, new WL(B, {
                  type: AEdgrt.SPKtS
                }));
              };
              p.stop();
            } else {
              let MY = ve.ZCgoG(WW, M9);
              MW = MY && MY.img ? MY.img[Mz] : null;
            }
          } catch {
            MW = null;
          }
          if (MW && ve.syPwz(MW.width, 0) && ve.IQtqP(MW.height, 0)) {
            M2.push(Promise.all(Cr.map(() => createImageBitmap(MW))).then(Mv => [M9, Mz, Mv, null], () => [M9, Mz, null, null]));
          } else {
            M2.push(Promise.resolve([M9, Mz, null, MW ? {
              w: ve.NcxYE(MW.width, 0),
              h: ve.NcxYE(MW.height, 0)
            } : null]));
          }
          if (ve.IQtqP(ve.ZOPxU(ve.DvIfA(zo), M3), 8)) {
            await ve.hnyiu(M4);
            await new Promise(Mv => setTimeout(Mv, 0));
            M3 = ve.wZkon(zo);
          }
        }
        await ve.PqJEl(M4);
        if (vn) {
          for (let Mv of M1) {
            for (let Mb of Mv) {
              try {
                if (ve.ufZgQ(ve.xFEOO, ve.xFEOO)) {
                  Y0.reload = true;
                  W.what = ve.MWZzU;
                } else {
                  Mb.close();
                }
              } catch {}
            }
          }
          return;
        }
        let M5 = ve.hnyiu(zo);
        Cr.forEach((MC, MM) => {
          const Mx = {
            XYdqm: ve.tNzUA
          };
          const Mh = Mx;
          if (ve.qFkZX(ve.HfhuS, ve.HfhuS)) {
            if (M0[MM].length) {
              try {
                if (ve.ilODI(ve.hEnuZ, ve.hEnuZ)) {
                  let MP = c[D];
                  let MV = 1;
                  let MO = 128;
                  while (AEdgrt.FNQEW(MV, 8) && !AEdgrt.STxCo(MP, MO)) {
                    MV++;
                    MO >>= 1;
                  }
                  if (AEdgrt.AbJmA(MV, 8)) {
                    throw new WH(AEdgrt.sBOiX(AEdgrt.NUxKq, p));
                  }
                  let Mc = M0 ? MP : AEdgrt.GOhQt(MP, AEdgrt.lRXFk(MO, 1));
                  for (let Mo = 1; AEdgrt.KYIga(Mo, MV); Mo++) {
                    Mc = AEdgrt.sBOiX(AEdgrt.FeWMP(Mc, 256), WK[AEdgrt.sBOiX(Y0, Mo)]);
                  }
                  B += MV;
                  return Mc;
                } else {
                  const MD = {
                    cmd: ve.Dxnmd,
                    list: M0[MM]
                  };
                  MC.w.postMessage(MD, M1[MM]);
                }
              } catch {}
            }
          } else {
            const Mu = {
              ok: false,
              why: Y0 && W.message || Mh.XYdqm
            };
            return Mu;
          }
        });
        let M6 = ve.naeqY(ve.FtIop(zo), M5);
        YF.postMs = ve.PgWoQ(YF.postMs || 0, M6);
        if (ve.syPwz(M6, YF.postMax || 0)) {
          YF.postMax = Math.round(M6);
          YF.postN = M0[0].length;
        }
      } else {
        W.draw_sprite(ve.WpgCg, 0, ve.JNxdC(Yv, 26), ve.JQXrA(bo, 2));
      }
    }
    Cs;
    let CX = (CJ, Cq) => {
      const M0 = {
        tkFPj: function (M1, M2) {
          return ve.VnrLG(M1, M2);
        },
        gnQgs: function (M1, M2) {
          return ve.sadiW(M1, M2);
        },
        QfCiV: ve.jzHpz
      };
      CV++;
      Cm = Cm.then(() => CJ && CJ.length ? Cs(CJ) : null).then(() => {
        CV--;
        if (ve.XONXV(!vn, Cq)) {
          ve.PMzBK(Cq);
        }
      }, M1 => {
        CV--;
        M0.tkFPj(bn, M0.gnQgs(M0.QfCiV, M1 && M1.message || M1));
      });
    };
    let Cj = (CJ, Cq) => {
      CJ.busy = true;
      CJ.task = Cq;
      CJ.phase = ve.PXOiQ;
      CJ.f = ve.arrtg(Cq.a, 1);
      Object.assign(YF.workers[CJ.i], {
        phase: ve.PXOiQ,
        a: Cq.a,
        b: Cq.b,
        f: Math.max(0, CJ.at),
        seek: Math.max(0, ve.BCasF(ve.BCasF(Cq.a, 1), ve.aNSyn(CJ.at, 0) && ve.DhfYM(CJ.at, ve.qHiqg(Cq.a, 1)) ? CJ.at : 0))
      });
      CJ.w.postMessage({
        cmd: ve.dtoGX,
        task: {
          id: Cq.id,
          a: Cq.a,
          b: Cq.b
        }
      });
    };
    let CQ = () => CM > 0 && CF > 0 ? Math.min(0.95, CM / CF) : W8;
    function CB(CJ) {
      if (ve.uXWwQ(ve.zivBR, ve.iYtEC)) {
        let CK = null;
        let M0 = 0;
        for (let M6 of Cr) {
          if (ve.uXWwQ(ve.mJmvB, ve.vxknN)) {
            if (ve.Mpwhm(M6, CJ) || !M6.busy || !M6.task || M6.shrinking || ve.nAGsB(M6.phase, ve.ROMbT)) {
              continue;
            }
            let M7 = ve.naeqY(M6.task.b, M6.f);
            if (ve.LSYPx(M7, M0)) {
              CK = M6;
              M0 = M7;
            }
          } else {
            ve.IiSix(W, Yv && bo.message || ve.nCUvB);
            return;
          }
        }
        if (!CK || ve.UkqOD(M0, 60)) {
          return false;
        }
        let M1 = ve.pwsVV(CQ);
        let M2 = CK.f;
        let M3 = CK.task.b;
        let M4 = ve.aNSyn(CJ.at, 0) ? CJ.at : 0;
        let M5 = Math.floor(ve.foEzS(ve.qHiqg(ve.wIPQX(M3, M2), ve.CnQCe(M4, M1)), ve.eZGIB(2, M1)));
        if (ve.HyGir(ve.MBfFY(M3, M5), 30) || ve.HLkFP(M5, ve.JNxdC(M2, 15))) {
          return false;
        } else {
          CK.shrinking = {
            thief: CJ,
            oldB: M3
          };
          CJ.busy = true;
          YF.workers[CJ.i].phase = ve.JYBSd;
          CK.w.postMessage({
            cmd: ve.dUKLD,
            id: CK.task.id,
            b: ve.fYanY(M5, 1)
          });
          return true;
        }
      } else {
        try {
          W.reload = true;
          bt.what = ve.MWZzU;
        } catch (M8) {}
        throw bo;
      }
    }
    CB;
    function Cd(CJ) {
      const Cq = {
        GkoMg: function (M0, M1) {
          return ve.sIzDR(M0, M1);
        },
        NCKfz: function (M0, M1) {
          return ve.fzBlx(M0, M1);
        },
        AbyDr: function (M0, M1) {
          return ve.hHVns(M0, M1);
        }
      };
      if (ve.PkOUQ(ve.ZuGpt, ve.ziDVB)) {
        if (!vn && !CJ.busy) {
          if (ve.AXLSx(ve.qFuSH, ve.vhmYi)) {
            if (C8.length) {
              if (ve.ilODI(ve.Ekftc, ve.jETJV)) {
                ve.leKBp(Cj, CJ, C8.shift());
                return;
              } else {
                try {
                  WH.terminate();
                } catch {}
                EwLiiO.hHVns(W, new We(c && D.message || EwLiiO.lfoLi));
              }
            }
            if (!ve.GetEy(CB, CJ)) {
              CJ.phase = ve.RdfxX;
              YF.workers[CJ.i].phase = ve.RdfxX;
            }
          } else {
            let M0 = [new h(this.L), new W(this.L)];
            let M1 = 0;
            for (let M2 = 0; aumcww.GkoMg(M2, this.L); M2++) {
              M1 = this._step(0, 0, M0, M1);
            }
            return [M0[0].subarray(0, M1), M0[1].subarray(0, M1)];
          }
        }
      } else {
        let M3 = Wn.length;
        while (Cq.NCKfz(M3, 1) && Cq.NCKfz(Cq.AbyDr(WH, C6.slice(0, M3)), Yz)) {
          M3--;
        }
        if (Cr) {
          CJ.push(vn);
          Y6 = "";
        }
        Y2.push(C5.slice(0, M3));
        Y4 = C7.slice(M3);
      }
    }
    Cd;
    let CZ = (CJ, Cq) => {
      const Cl = {
        ZNxeC: function (M1, M2, M3) {
          return ve.lXnMC(M1, M2, M3);
        },
        pRmnc: function (M1, M2, M3) {
          return ve.EYarw(M1, M2, M3);
        }
      };
      if (ve.ufZgQ(ve.rKtZC, ve.rKtZC)) {
        if (We.seg) {
          BUUXJm.ZNxeC(c, D, WH);
          BUUXJm.pRmnc(p, Wn, false);
        }
        WH.playing = false;
      } else {
        let M1 = CJ.shrinking;
        if (!M1) {
          return;
        }
        CJ.shrinking = null;
        let M2 = M1.thief;
        M2.busy = false;
        if (ve.PkOUQ(Cq, null) && ve.HLkFP(Cq, M1.oldB)) {
          YF.steals++;
          ve.hjVkg(Cj, M2, {
            id: C9++,
            a: Cq,
            b: M1.oldB
          });
        } else {
          ve.uEjNy(Cd, M2);
        }
      }
    };
    function Cf() {
      const Cl = {
        molWy: function (CK) {
          return WL.wxekA(CK);
        },
        mbdOQ: function (CK, M0, M1) {
          return WL.XQSIU(CK, M0, M1);
        },
        cdtLX: function (CK, M0) {
          return WL.dtYUa(CK, M0);
        },
        GWdNR: function (CK, M0) {
          return WL.dolTn(CK, M0);
        },
        SnpQQ: WL.bMmbV,
        HYwzX: function (CK, M0) {
          return WL.wBKkq(CK, M0);
        },
        FGIbF: function (CK, M0) {
          return WL.zyejB(CK, M0);
        }
      };
      if (WL.RimlM(WL.isruZ, WL.wTgbj)) {
        if (!WL.HoKTZ(vn, !CY) && !WL.TgrYI(YF.frames, Y6) && !!Cv && !CV && !C8.length && !Cr.some(CK => CK.busy)) {
          WL.dAeEo(CE);
        }
      } else {
        let CK = uOKfgY.molWy(Y2);
        try {
          uOKfgY.mbdOQ(Y4, C7, Y4.data || {});
        } catch (M1) {
          uOKfgY.cdtLX(Wn, uOKfgY.GWdNR(uOKfgY.SnpQQ, M1 && M1.message || M1));
        }
        let M0 = uOKfgY.HYwzX(uOKfgY.molWy(Cr), CK);
        if (uOKfgY.FGIbF(M0, Y0.maxMsg ? vn.maxMsg.ms : 0)) {
          Y6.maxMsg = {
            t: (Y2.data || {}).t,
            ms: C5.round(M0)
          };
        }
      }
    }
    Cf;
    function CT(CJ, Cq) {
      const CK = {
        GXqPB: function (M1, M2) {
          return WL.hNNBO(M1, M2);
        },
        sRLBB: function (M1, M2) {
          return WL.Uckif(M1, M2);
        },
        AKfiv: function (M1, M2) {
          return WL.lBmGy(M1, M2);
        },
        NQhfT: function (M1, M2, M3) {
          return WL.XQSIU(M1, M2, M3);
        },
        CsyMM: function (M1, M2, M3) {
          return WL.knSNk(M1, M2, M3);
        },
        YrjSf: WL.KhDKF,
        Xduhf: function (M1, M2) {
          return WL.dtYUa(M1, M2);
        },
        ogIQo: function (M1) {
          return WL.NMwvR(M1);
        },
        DKjvY: function (M1, M2) {
          return WL.TgrYI(M1, M2);
        },
        PcqNg: function (M1, M2) {
          return WL.xPhbY(M1, M2);
        },
        HeIvx: function (M1, M2) {
          return WL.aRCLN(M1, M2);
        },
        GACwQ: WL.zcWks,
        MtdkU: function (M1) {
          return WL.JDLoM(M1);
        },
        HWnGT: WL.fweqt,
        BGAtD: WL.dbAxo
      };
      if (WL.rkdtm(WL.OpKZV, WL.usipf)) {
        if (!Wn.cancelled) {
          if (WL.KgmiZ(WL.FWahc, WL.FWahc)) {
            return EwLiiO.gJqRi(m, z, W, We);
          } else {
            if (WL.zELWA(Cq.t, WL.LrNFh)) {
              WL.yuvdF(bn, WL.dolTn(WL.irbmz, Cq.err));
              return;
            }
            if (WL.zELWA(Cq.t, WL.avNTs)) {
              if (WL.QdBSh(WL.ibgxm, WL.ibgxm)) {
                W++;
                if (We) {
                  ChqhaF.GXqPB(c, ChqhaF.sRLBB(ChqhaF.AKfiv(0.3, D), WH.max(1, p.size)));
                }
              } else {
                CJ.ready = true;
                Cz++;
                YF.bootMs = Math.max(YF.bootMs || 0, Math.round(WL.xPhbY(WL.MEiYs(zo), YM)));
                if (Cq.caps && Cq.caps.boot) {
                  (YF.boot ||= []).push(Cq.caps.boot);
                }
                if (WL.zELWA(CJ.role, WL.KhDKF) && !Y1 && (!Cq.caps || !Cq.caps.webcodecs)) {
                  WL.ewJin(be, {
                    fallback: WL.jauMx
                  });
                  return;
                }
                if (WL.EhPLb(CJ.role, WL.KhDKF) && (!Cq.caps || !Cq.caps.offscreen)) {
                  WL.dtYUa(be, {
                    fallback: WL.IWXgo
                  });
                  return;
                }
                if (WL.XNBfA(Cz, bt.length)) {
                  YF.marks.ready = Math.round(WL.xPhbY(WL.BkBVe(zo), YM));
                  for (let M1 of bt) {
                    M1.w.postMessage({
                      cmd: WL.drmAd,
                      job: Yb
                    });
                  }
                }
                return;
              }
            }
            if (WL.EhPLb(Cq.t, WL.vLMNt)) {
              WL.aHdKZ(be, {
                fallback: WL.pdIrP
              });
              return;
            }
            if (WL.OczKn(Cq.t, WL.gRHSx)) {
              WL.iNidU(be, {
                fallback: WL.dolTn(WL.HSPKG, Yz ? Yz.id : WL.ycoaV)
              });
              return;
            }
            if (WL.OczKn(Cq.t, WL.BWjaA)) {
              if (WL.aRCLN(WL.NJFQo, WL.irXgx)) {
                if (WL.hafQI(++CW, bt.length)) {
                  if (WL.EhPLb(WL.owbUi, WL.chEnc)) {
                    return;
                  } else {
                    CY = true;
                    YF.marks.started = Math.round(WL.FDLjN(WL.riXlA(zo), YM));
                    let M2 = WL.RzplZ(W9, WK, Y0, Cr.length, W8);
                    M2.forEach(([M3, M4], M5) => Cj(Cr[M5], {
                      id: C9++,
                      a: M3,
                      b: M4
                    }));
                    for (let M3 = M2.length; WL.TgrYI(M3, Cr.length); M3++) {
                      WL.ewJin(Cd, Cr[M3]);
                    }
                  }
                }
                return;
              } else {
                m = ChqhaF.NQhfT(z, W, We);
              }
            }
            if (WL.hafQI(Cq.t, WL.RPHNE)) {
              YF.marks.scout1 ||= Math.round(WL.wBKkq(WL.wxekA(zo), YM));
              if (Cq.au && Cq.au.length) {
                for (let M5 of Cq.au) {
                  Ct.push(M5);
                }
              }
              Cb = WL.WzDEd(Cq.drift, 0);
              CC = WL.WzDEd(Cq.checks, 0);
              YF.scout = Cq.upto;
              if (WL.mivaT(Cq.upto, 0)) {
                CM = WL.Uckif(Cq.ms, Cq.upto);
              }
              let M4 = Cq.upto;
              WL.XQSIU(CX, Cq.keys, () => {
                if (ve.qZMqt(ve.wJput, ve.uAkvf)) {
                  let M9 = W.reduce((MY, Mv) => MY + Mv.length, 0);
                  let Mz = new m(M9);
                  let MW = 0;
                  for (let MY of W) {
                    Mz.set(MY, MW);
                    MW += MY.length;
                  }
                  return Mz;
                } else {
                  for (let Mv of Cr) {
                    try {
                      if (ve.fVsaM(ve.wVbZr, ve.rEZhU)) {
                        Mv.w.postMessage({
                          cmd: ve.PNJGE,
                          f: M4
                        });
                      } else {
                        x.close();
                      }
                    } catch {}
                  }
                }
              });
              if (Cq.final) {
                Cv = true;
                YF.scoutMs = Math.round(WL.vZNGZ(WL.riXlA(zo), YM));
                WL.MEiYs(CR);
                WL.lHBsB(CX, null, Cf);
              }
              return;
            }
            if (WL.IRbgb(Cq.t, WL.LmnKc)) {
              if (WL.SPmHS(WL.yqaBx, WL.bjHWV)) {
                const M6 = {
                  none: EwLiiO.QlfAr
                };
                return M6;
              } else {
                CJ.phase = Cq.phase;
                CJ.f = Cq.f;
                let M7 = YF.workers[CJ.i];
                M7.phase = Cq.phase;
                M7.f = Cq.f;
                return;
              }
            }
            if (WL.bBHNK(Cq.t, WL.Njwcn)) {
              const M8 = {
                f: Cq.f,
                w: Cq.w,
                h: Cq.h,
                px: Cq.px
              };
              C7.push(M8);
              return;
            }
            if (WL.zOohn(Cq.t, WL.xqnRX)) {
              let M9 = WL.Uckif(WL.wBKkq(Cq.f, WK), Y2);
              if (WL.doTId(M9, 0) && WL.AKLyf(M9, Y6)) {
                if (!C6[M9]) {
                  YF.frames++;
                }
                C6[M9] = Cq.px;
              }
              return;
            }
            if (WL.ZHIWr(Cq.t, WL.zuDTY)) {
              if (WL.MZymO(WL.XBoae, WL.lFjkw)) {
                YF.holes++;
                YF.holeKeys ||= [];
                if (WL.ILtSR(YF.holeKeys.length, 12)) {
                  YF.holeKeys.push(WL.LxLIu(WL.dolTn(Cq.f, ":"), Cq.keys.slice(0, 4).map(MY => MY.replace("", "#") + (CP.has(MY) ? "(sent)" : "")).join(",")));
                }
                let Mz = {
                  id: C9++,
                  a: Cq.f,
                  b: Math.max(Cq.f, WL.WzDEd(Cq.rest, 0)),
                  hole: true
                };
                let MW = [];
                for (let MY of Cq.keys) {
                  if (WL.KTFRE(WL.eHflP, WL.EHgjD)) {
                    let Mv = MY.slice(0, MY.indexOf(""));
                    let Mb = WL.JrPai(WW, Mv);
                    let MC = Mb ? WL.MpJeW(Mb.frames, 0) : 0;
                    if (WL.HNwPb(MC, 1) && WL.pOoLO(MC, 64)) {
                      for (let MM = 0; WL.ILtSR(MM, MC); MM++) {
                        MW.push(WL.LxLIu(WL.uxfwp(Mv, ""), MM));
                      }
                    } else {
                      MW.push(MY);
                    }
                  } else {
                    let MF = ChqhaF.CsyMM(W, ChqhaF.YrjSf, Yv);
                    if (MF) {
                      bo.push(MF);
                    }
                  }
                }
                WL.JxDFc(CX, MW, () => {
                  C8.unshift(Mz);
                  for (let Mm of Cr) {
                    if (!Mm.busy) {
                      if (CK.HeIvx(CK.HWnGT, CK.BGAtD)) {
                        CK.Xduhf(Cd, Mm);
                        break;
                      } else {
                        if (Y0.parked) {
                          ChqhaF.GXqPB(Y1, y.parked);
                          ChqhaF.Xduhf(Mm, Y3.parked.curG);
                        } else {
                          ChqhaF.ogIQo(Mz);
                        }
                        Y5.parked = null;
                        let MP = false;
                        do {
                          MP = ChqhaF.ogIQo(A);
                        } while (!MP && ChqhaF.DKjvY(ChqhaF.PcqNg(ChqhaF.ogIQo(i), Wn), k) && (!S.busy || !Y6.busy()));
                        if (ChqhaF.HeIvx(Y7.phase, ChqhaF.GACwQ)) {
                          l.parked = ChqhaF.MtdkU(z);
                          vo = true;
                        }
                      }
                    }
                  }
                });
                return;
              } else {
                x.w.terminate();
              }
            }
            if (WL.IRbgb(Cq.t, WL.aTQWh)) {
              if (WL.HGVsw(WL.uzILD, WL.Ouipv)) {
                let Mx = EwLiiO.FUegr(A ? i : Wn, k);
                let Mh = 1;
                let Mt = S;
                if (Y6 && EwLiiO.qFkZX(Y7.kind, EwLiiO.tEpBy)) {
                  Mh = l.max(1, EwLiiO.PgWoQ(EwLiiO.arrtg(z, EwLiiO.CnQCe(EwLiiO.gJqRi(vo, We.secs, 1, 3600), Yz)), 1));
                } else if (YW && EwLiiO.qFkZX(YY.kind, EwLiiO.eINfJ)) {
                  Mh = EwLiiO.gJqRi(Yv, EwLiiO.SgCIQ(EwLiiO.OdfzZ(Yb.from, YC), 1), 1, YM);
                  Mt = EwLiiO.vEtyV(YF, EwLiiO.FUegr(z7.to, z8), Mh, vo);
                }
                let Mm = false;
                if (EwLiiO.XEeMk(EwLiiO.JNxdC(EwLiiO.ONJez(Mt, Mh), 1), Mx)) {
                  Mh = EwLiiO.hUQcP(EwLiiO.eZGIB(Mt, Mx), 1);
                  Mm = true;
                }
                return {
                  from: Mh,
                  to: Mt,
                  capped: Mm,
                  tooFar: EwLiiO.XEeMk(EwLiiO.fYanY(Mh, 1), EwLiiO.lSNVJ(ve, vn))
                };
              } else {
                if (CJ.task && WL.HGVsw(CJ.task.id, Cq.id)) {
                  CJ.task.b = Cq.b;
                  YF.workers[CJ.i].b = Cq.b;
                }
                WL.XQSIU(CZ, CJ, WL.uxfwp(Cq.b, 1));
                return;
              }
            }
            if (WL.IRbgb(Cq.t, WL.PqDaW)) {
              if (WL.EhPLb(WL.pNYBu, WL.hLcfz)) {
                let MP = EwLiiO.hjVkg(m, z[3], W[4]);
                if (MP) {
                  We.add(MP);
                }
              } else {
                for (let [MV, MO, Mc] of Cq.chunks) {
                  let Mo = WL.KDTXV(WL.GyMLC(MV, WK), Y2);
                  if (WL.doTId(Mo, 0) && WL.qnAwR(Mo, Y6)) {
                    if (C5[Mo]) {
                      YF.bytes -= C5[Mo].data.length;
                    } else {
                      YF.frames++;
                    }
                    C5[Mo] = {
                      data: Mc,
                      key: !!MO,
                      ts: Math.round(WL.Uckif(WL.lBmGy(Mo, 1000000), zx))
                    };
                    YF.bytes += Mc.length;
                  }
                }
                if (WL.zyejB(YF.bytes, zm)) {
                  if (WL.QdBSh(WL.sPWUj, WL.sPWUj)) {
                    CK.ogIQo(Y8);
                    return;
                  } else {
                    WL.hNNBO(bn, WL.SfZNf(WL.QbIqD(WL.sugpQ, Math.round(WL.lwazr(zm, 1048576))), WL.YdkCO));
                    return;
                  }
                }
                if (Cq.done) {
                  if (WL.pjpTl(Cq.drift, 0) && (!Cx || WL.qnAwR(Cq.drift, Cx))) {
                    Cx = Cq.drift;
                  }
                  Ch[CJ.i] = WL.WnNzT(Cq.checks, 0);
                  if (WL.HNwPb(Cq.drawn, 8) && WL.mivaT(Cq.msDraw, 0)) {
                    CF = CF ? WL.zfEFQ(WL.lBmGy(CF, 0.5), WL.KONsx(0.5, WL.HcrnZ(Cq.msDraw, Cq.drawn))) : WL.Uckif(Cq.msDraw, Cq.drawn);
                  }
                  if (Cq.prof) {
                    YF.prof[CJ.i] = {
                      ...Cq.prof,
                      drawn: WL.zfEFQ(YF.prof[CJ.i] ? YF.prof[CJ.i].drawn : 0, Cq.drawn),
                      seekMs: WL.dNZRn(YF.prof[CJ.i] ? YF.prof[CJ.i].seekMs : 0, Cq.msSeek),
                      seekN: WL.TYzOT(YF.prof[CJ.i] ? YF.prof[CJ.i].seekN : 0, Cq.seekN)
                    };
                  }
                  CJ.at = Number.isInteger(Cq.at) ? Cq.at : Cq.b;
                  CJ.busy = false;
                  CJ.task = null;
                  CJ.phase = WL.tiDbe;
                  YF.workers[CJ.i].phase = WL.tiDbe;
                  if (CJ.shrinking) {
                    WL.lHBsB(CZ, CJ, null);
                  }
                  WL.dtYUa(Cd, CJ);
                  WL.YjMxY(Cf);
                }
              }
            }
          }
        }
      } else {
        let MD = EwLiiO.NVuLz(EwLiiO.mAURa(W, We), 2);
        if (EwLiiO.HRoLX(EwLiiO.nTxDg(c, MD).s, D)) {
          WH = MD;
        } else {
          p = MD;
        }
      }
    }
    CT;
    let Cy = null;
    function CR() {
      const Cq = {
        ATjTy: ve.ROFsI,
        EBmZE: ve.ERDHh,
        qdQTW: function (CK, M0) {
          return ve.wMNmO(CK, M0);
        },
        zPxve: ve.Setgr,
        cHYsL: ve.CsVQn,
        zYZdo: function (CK) {
          return ve.TNfOb(CK);
        }
      };
      if (ve.nNoOb(ve.qabfo, ve.fVOVs)) {
        if (!ve.ahqic(!YC, Cy)) {
          YF.audio = ve.VmjmO;
          YF.marks.audioStart = Math.round(ve.yaMcO(ve.JidCJ(zo), YM));
          Cy = ve.ewNQY(zM, {
            events: Ct,
            from: WK,
            to: Y0,
            urlOf: WY,
            cancelled: () => vn || Wn.cancelled,
            onProgress: CK => {
              if (Cq.qdQTW(Cq.zPxve, Cq.cHYsL)) {
                YF.audioP = CK;
              } else {
                W = new m(new z(WsgTuu.ATjTy, import.meta.url), {
                  type: WsgTuu.EBmZE
                });
              }
            }
          }).then(CK => {
            YF.audio = CK && !CK.none ? "done" : "none";
            return CK;
          }, CK => {
            YF.audio = "none";
            return {
              none: String(CK && CK.message || CK)
            };
          });
        }
      } else {
        WsgTuu.zYZdo(x);
      }
    }
    CR;
    let Cg = false;
    async function CE() {
      const CJ = {
        geYYj: function (M3, M4) {
          return WL.zOohn(M3, M4);
        },
        yuOUj: function (M3, M4) {
          return WL.SPmHS(M3, M4);
        },
        JLeYE: function (M3, M4) {
          return WL.JrPai(M3, M4);
        },
        CsnEy: WL.LZXSZ
      };
      if (WL.wEjqk(vn, Cg)) {
        return;
      }
      Cg = true;
      let Cq = WL.hrJZP(zo);
      for (let M3 of bt) {
        try {
          M3.w.terminate();
        } catch {}
      }
      let Cn = null;
      let CK = YC ? null : WL.hHmpL;
      YF.marks.videoDone = Math.round(WL.eFqve(WL.DgCAW(zo), YM));
      if (Cy) {
        Wn.phase = WL.OAxkp;
        let M4 = await Cy;
        YF.marks.audioDone = Math.round(WL.yRbdD(WL.riXlA(zo), YM));
        if (M4 && !M4.none) {
          Cn = M4;
        } else {
          CK = M4 && M4.none || WL.GWzXs;
        }
      }
      if (vn) {
        return;
      }
      if (Wn.cancelled) {
        if (WL.PNksg(WL.RiBgX, WL.RiBgX)) {
          WL.hNNBO(be, {
            ok: false,
            why: WL.YIaEL,
            cancelled: true
          });
          return;
        } else {
          ve.IiSix(Y0, ve.dsfDQ);
          ve.CCSkI(W, ve.YunHs);
          return;
        }
      }
      let M2;
      if (Y1) {
        Wn.phase = WL.vyyGV;
        try {
          if (WL.vfrng(WL.jHWmi, WL.OPIfz)) {
            M2 = await WL.OaduB(zK, C6.slice(), M5 => {
              if (ve.uXWwQ(ve.ObeWA, ve.ObeWA)) {
                x.w.terminate();
              } else {
                YF.gifP = M5;
              }
            });
          } else {
            ve.hjVkg(W, Yv, bo.data || {});
          }
        } catch (M5) {
          if (WL.vfrng(WL.pLBxe, WL.JwzKL)) {
            WL.tuDFP(bn, M5 && M5.message || WL.aYRfK);
            return;
          } else {
            let M6 = c.data || {};
            if (EwLiiO.Mqryd(M6.type, EwLiiO.xLiEp)) {
              if (D) {
                EwLiiO.tYYVM(WH, M6.p);
              }
            } else if (EwLiiO.Mqryd(M6.type, EwLiiO.wsVLt)) {
              p.terminate();
              EwLiiO.VnrLG(Wn, M6.bytes);
            } else if (EwLiiO.kXnUA(M6.type, EwLiiO.zGoak)) {
              WH.terminate();
              EwLiiO.ZGOwN(WL, new B(M6.message || EwLiiO.nCUvB));
            }
          }
        }
      } else {
        for (let M9 = 0; WL.hJLZg(M9, Y6); M9++) {
          if (!C5[M9]) {
            if (WL.HGVsw(WL.DwQlS, WL.DwQlS)) {
              WL.sAdPm(bn, WL.VlyTK(WL.TYzOT(WL.eDnYh, WL.JgTBi(WK, M9)), WL.UHvds));
              return;
            } else {
              let [Mz, MW] = YF[z];
              let MY = ve.iXvNY(ve.ejALU(vo, 62), ve.cAwHs(We, 26));
              let Mv = ve.Mqryd(C8, M8.sel);
              YY.rect(ve.wzwpP(ve.fAfxy, Yv), ve.wIPQX(Yb, 20), ve.NKIwR(MY, 3), ve.sLKBR(ve.fYanY(YC, YM), 40), 24, ((MC, MM) => () => {
                if (CJ.geYYj(Mv.sel, MC) || CJ.yuOUj(MM, "go")) {
                  Mb.sel = MC;
                  CJ.JLeYE(MC, MM);
                } else {
                  MM.sel = MC;
                  CJ.JLeYE(CO, CJ.CsnEy);
                }
              })(vn, Mz));
              if (Mv && bt.draw_sprite) {
                try {
                  CC.draw_sprite(ve.WpgCg, 0, ve.pPmXL(CM, 26), ve.wIPQX(MY, 2));
                } catch {}
              }
              ve.mKvFc(bn, C5, ve.jklFM(C6, 50), MY, MW, Mv ? C7.select : C8.text);
              let Mb = ve.cPNPR(C9, Mz);
              if (Mb) {
                ve.KBANk(Cz, CW, ve.mAURa(CY, 170), MY, ve.jklFM(ve.wIPQX(Mv && ve.QPbed(Mz, "go") ? "< " : "", Mb), Mv && ve.GTjEg(Mz, "go") ? " >" : ""), Mv ? Cv.select : Cb.dim);
              }
            }
          }
        }
        let M7 = Cn ? {
          codec: WL.gDBEo,
          rate: Cn.rate,
          channels: Cn.channels,
          priv: Cn.priv,
          delayNs: Math.round(WL.xmtkA(WL.RdigO(Cn.preskip, 1000000000), Cn.rate)),
          discardNs: Cn.discardNs || 0,
          chunks: Cn.chunks
        } : null;
        const M8 = {
          codec: Yz.id,
          width: Y4,
          height: Y5,
          chunks: C5,
          audio: M7
        };
        M2 = new Blob(WL.hNNBO(zU, M8), {
          type: WL.jdlUJ
        });
      }
      WL.DmhhK(be, {
        ok: true,
        blob: M2,
        frames: Y6,
        drift: WL.qXlub(Cb, Cx) ? Math.min(Cb, Cx) : WL.NIXzl(Cb, Cx),
        checks: CC,
        scoutDrift: Cb,
        renderDrift: Cx,
        renderChecks: Ch.reduce((MC, MM) => MC + (MM || 0), 0),
        codec: Y1 ? WL.xqnRX : Yz.id,
        path: WL.PIVQT,
        workers: Cr.length,
        audio: !!Cn,
        audioWhy: CK,
        audioVoices: Cn ? Cn.voices : 0,
        audioPeak: Cn ? Cn.peakIn : null,
        bootRetries: YF.bootRetries || 0,
        bootErrors: YF.bootErrors,
        audioLimited: Cn ? Cn.limited : 0,
        boot: YF.boot,
        holes: YF.holes,
        holeKeys: YF.holeKeys,
        bootMs: YF.bootMs,
        scoutMs: YF.scoutMs,
        prof: YF.prof,
        maxMsg: YF.maxMsg,
        maxCut: YF.maxCut,
        marks: YF.marks,
        postMs: Math.round(YF.postMs || 0),
        postMax: YF.postMax,
        postN: YF.postN,
        spritesSent: CP.size,
        steals: YF.steals,
        ms: Math.round(WL.yRbdD(WL.EACjo(zo), YM)),
        msMux: Math.round(WL.vYZRt(WL.NMwvR(zo), Cq)),
        probes: C7,
        scale: Y3,
        beta: CM,
        delta: CF
      });
    }
    CE;
    bo = WL.gdlmZ(setInterval, () => {
      if (ve.wMNmO(ve.JHubp, ve.pZzrB)) {
        if (!vn) {
          if (Wn.cancelled) {
            ve.DEjEM(be, {
              ok: false,
              why: ve.IleyX,
              cancelled: true
            });
            return;
          }
          if (WH.onTick) {
            WH.onTick(YF);
          }
        }
      } else {
        bo--;
        ve.lgKtq(W, ve.SgCIQ(ve.jzHpz, bt && Y1.message || Y7));
      }
    }, 100);
  });
}
z7(Wm, "exportParallel");
function WP(z) {
  let WH = Math.max(0.001, (zo() - z.t0) / 1000);
  let Wn = 0;
  let WL = 0;
  for (let YW of z.workers) {
    {
      if (!YW.b) {
        continue;
      }
      let Yb = YW.a - 1 - YW.seek;
      let YC = YW.phase === "seek" ? Math.max(0, Math.min(YW.seek, YW.f - Yb)) : YW.seek;
      Wn += YC * W8;
      WL += YW.seek * W8;
    }
  }
  let Y1 = (z.frames + Wn) / Math.max(1, z.total + WL);
  let Y2 = z.audio === "off" ? 0 : 0.12;
  let Y3 = Math.min(0.99, Y1 * (1 - Y2) + (z.audio === "done" || z.audio === "none" ? Y2 : Y2 * (z.audioP || 0)));
  let Y4 = z.frames * (z.gif ? 2 : 1) / zx;
  let Y5 = Y4 / WH;
  let Y6 = Y3 > 0.03 ? WH * (1 - Y3) / Y3 : null;
  let Y7 = (z.to - z.from + 1) / zx;
  let Y8 = z.gif ? null : z.frames > 15 ? z.bytes / z.frames * z.total : null;
  let Y9 = Y8 === null ? null : (Y8 + (z.audio === "off" ? 0 : Y7 * 16000)) / 1048576;
  let Yz;
  if (z.frames < z.total) {
    Yz = "Rendering " + WD(Math.round(Y4 * zx)) + " / " + WD(Math.round(Y7 * zx)) + " on " + z.K + " workers";
  } else if (z.audio === "rendering") {
    Yz = "Mixing the sound " + Math.floor((z.audioP || 0) * 100) + "%";
  } else {
    Yz = z.gif ? "Making GIF..." : "Finishing video...";
  }
  return {
    p: Y3,
    text: Yz,
    speed: Y5,
    eta: Y6,
    mb: Y9,
    workers: z.workers,
    K: z.K,
    holes: z.holes,
    audio: z.audio
  };
}
z7(WP, "parallelProgress");
var WV = null;
var WO = z7(() => !!WV, "busy");
function Wc() {
  if (WV) {
    WV.cancel();
  }
}
z7(Wc, "cancelExport");
async function Wo(z, W = {}) {
  const We = {
    CfTgg: function (Yb, YC, YM, YF) {
      return Yb(YC, YM, YF);
    },
    fwDuU: function (Yb, YC) {
      return Yb | YC;
    },
    Zrumb: function (Yb) {
      return Yb();
    },
    hVsRz: function (Yb, YC) {
      return Yb / YC;
    },
    WMxFf: function (Yb, YC) {
      return Yb + YC;
    },
    ttCeq: function (Yb, YC) {
      return Yb - YC;
    },
    Txodm: function (Yb, YC) {
      return Yb + YC;
    },
    FXoBa: function (Yb, YC) {
      return Yb + YC;
    },
    EwOyu: function (Yb, YC) {
      return Yb + YC;
    },
    ShMtl: function (Yb, YC) {
      return Yb(YC);
    },
    ptfTf: function (Yb, YC) {
      return Yb - YC;
    },
    AqCOL: " to ",
    HRWvZ: function (Yb, YC) {
      return Yb < YC;
    },
    ekKQd: " s)",
    DoeFO: " - capped at ",
    LnXIr: function (Yb, YC) {
      return Yb + YC;
    },
    FTaHU: " s for a GIF",
    fuUDv: " min",
    aQFjV: function (Yb, YC) {
      return Yb + YC;
    },
    iCJqK: "starts past ",
    jmgzV: function (Yb, YC) {
      return Yb / YC;
    },
    UZiaZ: " min - too far in to export",
    IfieL: " - ",
    mejhn: function (Yb) {
      return Yb();
    },
    DZeKA: "canvas",
    ygmWH: function (Yb, YC) {
      return Yb(YC);
    },
    gILvX: function (Yb, YC, YM) {
      return Yb(YC, YM);
    },
    dAwNh: "./videoworker-ZIQ2RVKP.js",
    ASuyD: "module",
    VDHIF: function (Yb, YC) {
      return Yb !== YC;
    },
    aFuSs: "pFZYL",
    MfWQi: function (Yb, YC) {
      return Yb && YC;
    },
    wNxZa: function (Yb, YC) {
      return Yb(YC);
    },
    xZraQ: "This browser cannot record WebM here - try GIF",
    caNjg: function (Yb, YC) {
      return Yb > YC;
    },
    WNVJm: function (Yb, YC) {
      return Yb + YC;
    },
    JqMxL: function (Yb, YC) {
      return Yb + YC;
    },
    YRfCR: "The video passed ",
    pDKlc: function (Yb, YC) {
      return Yb / YC;
    },
    tkkLm: " MB - pick a shorter range",
    xbZag: function (Yb, YC) {
      return Yb > YC;
    },
    SELMC: function (Yb, YC) {
      return Yb(YC);
    },
    SLntQ: function (Yb, YC) {
      return Yb(YC);
    },
    xagek: function (Yb, YC) {
      return Yb + YC;
    },
    oJJBd: function (Yb, YC) {
      return Yb(YC);
    },
    yKpqC: function (Yb, YC) {
      return Yb === YC;
    },
    QHDls: "xtXaS",
    pCqDU: function (Yb, YC) {
      return Yb * YC;
    },
    doOKv: "seek",
    HdZcq: function (Yb, YC) {
      return Yb + YC;
    },
    Fszfq: "Finding ",
    CDhgh: function (Yb, YC) {
      return Yb + YC;
    },
    cDJww: "Rendering ",
    MrGCG: function (Yb, YC) {
      return Yb(YC);
    },
    krYPv: " / ",
    kkUve: function (Yb, YC) {
      return Yb(YC);
    },
    JDetG: function (Yb, YC) {
      return Yb !== YC;
    },
    KBpcc: function (Yb, YC) {
      return Yb == YC;
    },
    zDKQc: "string",
    FJWAk: function (Yb, YC) {
      return Yb !== YC;
    },
    FZKYP: function (Yb, YC) {
      return Yb(YC);
    },
    GjdaQ: "Another export is running",
    nORYT: "mdOwa",
    dPkWN: "QVEEa",
    sGzHy: "Not a replay",
    fAwgf: "Video export runs from the menu - leave the fight first",
    yZyWI: function (Yb, YC, YM, YF) {
      return Yb(YC, YM, YF);
    },
    SJsyK: function (Yb, YC) {
      return Yb + YC;
    },
    wfMOe: "That part starts more than ",
    AxQxE: " min into the replay - export something in the first ",
    wDmzR: function (Yb, YC) {
      return Yb / YC;
    },
    uTIko: function (Yb, YC) {
      return Yb === YC;
    },
    RCQkI: function (Yb, YC) {
      return Yb * YC;
    },
    mSmPI: function (Yb, YC) {
      return Yb * YC;
    },
    ssulY: "prepare",
    rQOXa: function (Yb, YC) {
      return Yb !== YC;
    },
    zhlBR: function (Yb) {
      return Yb();
    },
    VdmFg: function (Yb) {
      return Yb();
    },
    coJab: function (Yb, YC) {
      return Yb !== YC;
    },
    GSjOk: "AbpxD",
    hUqAo: "CBySk",
    AvAwM: "workers",
    IlXWw: function (Yb, YC, YM, YF, Yx, Yt) {
      return Yb(YC, YM, YF, Yx, Yt);
    },
    puRws: function (Yb, YC, YM) {
      return Yb(YC, YM);
    },
    NsWzy: "cancelled",
    GbKkV: function (Yb, YC) {
      return Yb(YC);
    },
    QVEtO: function (Yb) {
      return Yb();
    },
    BlbhX: function (Yb, YC) {
      return Yb && YC;
    },
    qvTFm: function (Yb) {
      return Yb();
    },
    AyIOk: "This browser cannot record video (no WebCodecs or MediaRecorder) - try GIF",
    QpftE: "capture",
    AztYf: function (Yb, YC) {
      return Yb === YC;
    },
    BHlZm: "jDLeP",
    zFaIw: "the export stopped",
    HrOIW: "No frames were rendered",
    mSgHq: "encode",
    LQvwx: "Making GIF...",
    BjcQb: "Finishing video...",
    zcvXu: "realtime",
    oDHkS: "main",
    nBnfO: "GILlg"
  };
  const Wn = {
    ok: false,
    why: We.GjdaQ
  };
  if (WV) {
    return Wn;
  }
  let WL = !!W.gif;
  let WK = 0;
  try {
    if (We.JDetG(We.nORYT, We.nORYT)) {
      let Yb = We.CfTgg(r, We.fwDuU(WK.d.n, 0), We.Zrumb(N), Yv.gif);
      let YC = We.hVsRz(We.WMxFf(We.ttCeq(Yb.to, Yb.from), 1), Z);
      let YM = We.Txodm(We.WMxFf(We.Txodm(We.FXoBa(We.EwOyu(We.ShMtl(z, We.ptfTf(Yb.from, 1)), We.AqCOL), We.ShMtl(T, Yb.to)), " ("), YC.toFixed(We.HRWvZ(YC, 10) ? 1 : 0)), We.ekKQd);
      if (Yb.capped) {
        YM += We.WMxFf(We.DoeFO, Yz.gif ? We.LnXIr(W, We.FTaHU) : We.Txodm(We.hVsRz(We, 60), We.fuUDv));
      }
      if (Yb.tooFar) {
        YM = We.aQFjV(We.Txodm(We.iCJqK, We.jmgzV(Wn, 60)), We.UZiaZ);
      } else {
        YM += We.EwOyu(We.IfieL, We.ShMtl(WL, YC));
      }
      return YM;
    } else {
      WK = We.ygmWH(zZ, z).length;
    }
  } catch (YF) {
    if (We.FJWAk(We.dPkWN, We.dPkWN)) {
      We.Zrumb(Y4);
      We.mejhn(W);
    } else {
      const Yx = {
        ok: false,
        why: YF && YF.message || We.sGzHy
      };
      return Yx;
    }
  }
  if (!We.mejhn(zN) && !W.allowLive) {
    return {
      ok: false,
      why: We.fAwgf
    };
  }
  let {
    from: Y2,
    to: Y3,
    capped: Y4,
    tooFar: Y5
  } = We.yZyWI(W4, WK, W.range, WL);
  if (Y5) {
    return {
      ok: false,
      why: We.EwOyu(We.SJsyK(We.WNVJm(We.LnXIr(We.wfMOe, We.pDKlc(zP, 60)), We.AxQxE), We.wDmzR(zP, 60)), We.fuUDv)
    };
  }
  let Y6 = WL ? 1 : We.uTIko(W.scale, 2) ? 2 : 1;
  let Y7 = We.RCQkI(640, Y6);
  let Y8 = We.mSmPI(480, Y6);
  let Y9 = W.makeCanvas || ((Yt, Ye) => {
    let Yn = document.createElement(We.DZeKA);
    Yn.width = Yt;
    Yn.height = Ye;
    return Yn;
  });
  let Yz = null;
  let YW = false;
  let YY = WV = {
    cancelled: false,
    phase: We.ssulY,
    cancel() {
      this.cancelled = true;
    }
  };
  let Yv = null;
  try {
    let Yt = We.kkUve(zu, z.fight);
    if (Yt) {
      await We.MrGCG(Z, Yt);
    }
    if (!W.sink && We.rQOXa(W.parallel, false) && We.zhlBR(W5) && (WL || We.VdmFg(zl)) && Yt && !Yt.mode && Number.isFinite(z.seed)) {
      if (We.coJab(We.GSjOk, We.hUqAo)) {
        YY.phase = We.AvAwM;
        const C5 = {
          from: Y2,
          to: Y3
        };
        let C6 = await We.IlXWw(Wm, z, We.kkUve(zZ, z), C5, {
          gif: WL,
          scale: Y6,
          audio: W.audio,
          workers: W.workers,
          probe: W.probe,
          latency: W.latency,
          codecs: W.codecs,
          onTick: C8 => {
            if (W.onProgress) {
              let CY = We.ygmWH(WP, C8);
              W.onProgress(CY.p, CY.text, CY);
            }
          }
        }, YY);
        if (!C6.fallback) {
          if (C6.ok) {
            return {
              ...C6,
              name: We.puRws(W3, z, WL),
              from: Y2,
              to: Y3,
              capped: Y4,
              wallclock: !!z.wallclock
            };
          } else {
            return {
              ...C6,
              frames: YY.stats ? YY.stats.frames : 0
            };
          }
        }
        const C7 = {
          ok: false,
          why: We.NsWzy,
          cancelled: true
        };
        Yv = C6.fallback;
        YY.stats = null;
        if (YY.cancelled) {
          return C7;
        }
      } else {
        Yn.sel = Wn;
        We.gILvX(V, O, 1);
      }
    }
    if (W.sink) {
      Yz = W.sink;
    } else if (WL) {
      Yz = We.GbKkV(W0, Y9);
    } else if (We.QVEtO(zl)) {
      Yz = await We.gILvX(zn, Y7, Y8);
    }
    if (We.BlbhX(!Yz, !WL) && We.qvTFm(ze)) {
      YW = true;
    }
    if (We.MfWQi(!Yz, !YW)) {
      return {
        ok: false,
        why: We.AyIOk
      };
    }
    let Ye = null;
    let Yn = We.puRws(zf, z, {
      from: Y2,
      to: Y3,
      scale: Y6,
      stride: WL ? 2 : 1,
      makeCanvas: Y9,
      allowLive: W.allowLive,
      busy: () => !!Yz && !!Yz.busy(),
      onFrame: (C8, C9) => {
        const Cz = {
          cHVrs: We.dAwNh,
          rhCOM: We.ASuyD
        };
        if (We.VDHIF(We.aFuSs, We.aFuSs)) {
          return new h(new W(KPYHzB.cHVrs, import.meta.url), {
            type: KPYHzB.rhCOM
          });
        } else {
          if (We.MfWQi(YW, !Yz) && (Ye = C8, Yz = We.wNxZa(zL, C8), !Yz)) {
            throw Object.assign(new Error(We.xZraQ), {
              user: true
            });
          }
          Yz.frame(C8, C9);
          if (We.caNjg(Yz.bytes(), zm)) {
            throw Object.assign(new Error(We.WNVJm(We.JqMxL(We.YRfCR, Math.round(We.pDKlc(zm, 1048576))), We.tkkLm)), {
              user: true
            });
          }
        }
      }
    });
    YY.job = Yn;
    let vt = Math.max(1, Y3);
    let vo = C8 => {
      if (We.yKpqC(We.QHDls, We.QHDls)) {
        let CY = Yn.progress();
        if (W.onProgress) {
          W.onProgress(We.pCqDU(Math.min(1, We.hVsRz(CY.frame, vt)), WL ? 0.7 : 0.97), C8 || (We.yKpqC(CY.phase, We.doOKv) ? We.HdZcq(We.Fszfq, We.ygmWH(WD, Y2)) : We.FXoBa(We.xagek(We.CDhgh(We.cDJww, We.MrGCG(WD, CY.frame)), We.krYPv), We.kkUve(WD, Y3))));
        }
      } else {
        while (We.xbZag(We.SELMC(Ye, WK), Y2) && We.xbZag(bt.length, 1)) {
          let Cb = vn.length;
          while (We.caNjg(Cb, 1) && We.xbZag(We.SLntQ(bt, bo.slice(0, Cb)), be)) {
            Cb--;
          }
          if (bn) {
            zo.push(zD);
            zu = "";
          }
          zp.push(C8.slice(0, Cb));
          zs = zN.slice(Cb);
        }
        let Cv = YY ? We.xagek(We.EwOyu(Yv, " "), zz) : zW;
        if (zY && We.caNjg(We.oJJBd(zv, Cv), Yt)) {
          Ye.push(Yn);
          vt = vo;
        } else {
          ve = Cv;
        }
      }
    };
    let ve = () => new Promise(C8 => setTimeout(C8, 0));
    while (!Yn.done) {
      if (YY.cancelled) {
        Yn.cancel();
        break;
      }
      let C8 = YW && We.yKpqC(Yn.progress().phase, We.QpftE) ? 0 : 25;
      Yn.step(C8);
      We.Zrumb(vo);
      if (Yz && Yz.error && Yz.error()) {
        if (We.AztYf(We.BHlZm, We.BHlZm)) {
          Yn.cancel();
          Yn.result = {
            ok: false,
            why: Yz.error()
          };
          break;
        } else {
          let C9 = c;
          try {
            if (hycQcN.JDetG(bn, C9)) {
              hycQcN.wNxZa(z, C8);
            }
            let Cz = y[W];
            if (Cz && hycQcN.KBpcc(typeof Cz.src, hycQcN.zDKQc) && Cz.src) {
              return Cz.src;
            } else {
              return null;
            }
          } catch {
            return null;
          } finally {
            if (hycQcN.FJWAk(We, C9)) {
              hycQcN.FZKYP(Wn, C9);
            }
          }
        }
      }
      if (YW && We.uTIko(Yn.progress().phase, We.QpftE)) {
        await new Promise(CW => setTimeout(CW, 1000 / zx));
      } else if (Yz && Yz.busy()) {
        await new Promise(CW => setTimeout(CW, 4));
      } else {
        await We.mejhn(ve);
      }
    }
    const vn = {
      ok: false,
      why: We.zFaIw
    };
    let bt = Yn.result || vn;
    if (!bt.ok) {
      if (Yz) {
        Yz.abort();
      }
      return {
        ...bt,
        frames: Yn.progress().captured
      };
    }
    const bo = {
      ok: false,
      why: We.HrOIW
    };
    if (!Yz || !bt.frames) {
      return bo;
    }
    YY.phase = We.mSgHq;
    if (W.onProgress) {
      W.onProgress(WL ? 0.7 : 0.98, WL ? We.LQvwx : We.BjcQb);
    }
    let be = await Yz.finish(CW => W.onProgress && W.onProgress(0.7 + CW * 0.3, "Making GIF... " + Math.floor(CW * 100) + "%"));
    const bn = {
      ok: false,
      why: We.NsWzy,
      cancelled: true
    };
    if (YY.cancelled) {
      return bn;
    } else {
      return {
        ok: true,
        why: null,
        blob: be,
        name: We.gILvX(W3, z, WL),
        frames: bt.frames,
        from: Y2,
        to: Y3,
        capped: Y4,
        drift: bt.drift,
        checks: bt.checks,
        blocked: bt.blocked,
        codec: Yz.codec || Yz.kind,
        wallclock: bt.wallclock,
        ms: bt.ms,
        scale: Y6,
        path: YW ? We.zcvXu : We.oDHkS,
        fellBack: Yv,
        audio: false
      };
    }
  } catch (CW) {
    if (Yz) {
      Yz.abort();
    }
    if (YY.job && !YY.job.done) {
      YY.job.cancel();
    }
    return {
      ok: false,
      why: CW && CW.message || We.GbKkV(String, CW)
    };
  } finally {
    if (We.AztYf(We.nBnfO, We.nBnfO)) {
      WV = null;
    } else {
      hycQcN.mejhn(x);
    }
  }
}
z7(Wo, "exportReplayVideo");
function WD(z) {
  let Wn = Math.max(0, Math.floor(z / zx));
  return Math.floor(Wn / 60) + ":" + String(Wn % 60).padStart(2, "0");
}
z7(WD, "mmss");
var Wp = ["whole", "last", "range"];
var Wr = [5, 10, 15, 30, 60];
var Ws = {
  d: null,
  sel: 0,
  range: "whole",
  last: 1,
  from: 0,
  to: 0,
  gif: false,
  scale: 1,
  sound: true,
  run: null,
  done: null,
  buf: 0
};
var WN = z7(z => Math.max(1, Math.ceil((z.n | 0) / zx)), "secsOf");
function WX() {
  let WL = [["range", "RANGE"], ["format", "FORMAT"]];
  if (!Ws.gif) {
    WL.push(["size", "SIZE"], ["sound", "SOUND"]);
  }
  if (Ws.range === "range") {
    WL.push(["from", "FROM"], ["to", "TO"]);
  }
  WL.push(["go", Ws.gif ? "MAKE GIF" : "EXPORT VIDEO"]);
  return WL;
}
z7(WX, "uiRows");
function Wj(z) {
  if (z === "range") {
    if (Ws.range === "whole") {
      return "WHOLE REPLAY  " + WD(Ws.d.n);
    } else if (Ws.range === "last") {
      return "LAST " + Wr[Ws.last] + " s";
    } else {
      return "A RANGE";
    }
  } else if (z === "format") {
    if (Ws.gif) {
      return "GIF (320x240, 15 fps)";
    } else {
      return "VIDEO (WEBM)";
    }
  } else if (z === "size") {
    if (Ws.scale === 2) {
      return "2x  1280x960";
    } else {
      return "1x  640x480";
    }
  } else if (z === "sound") {
    if (Ws.sound) {
      return "ON";
    } else {
      return "OFF";
    }
  } else if (z === "from") {
    return WD(Ws.from * zx);
  } else if (z === "to") {
    return WD(Ws.to * zx);
  } else {
    return "";
  }
}
z7(Wj, "uiValue");
function WQ() {
  if (Ws.range === "last") {
    return {
      kind: "last",
      secs: Wr[Ws.last]
    };
  } else if (Ws.range === "range") {
    return {
      kind: "range",
      from: Ws.from,
      to: Ws.to
    };
  } else {
    return {
      kind: "whole"
    };
  }
}
z7(WQ, "uiChoice");
function WB(z, W) {
  let Wn = WN(Ws.d);
  if (z === "range") {
    Ws.range = Wp[(Wp.indexOf(Ws.range) + W + 3) % 3];
    if (Ws.range === "range" && Ws.to <= Ws.from) {
      Ws.from = 0;
      Ws.to = Wn;
    }
  } else if (z === "format") {
    Ws.gif = !Ws.gif;
  } else if (z === "size") {
    Ws.scale = Ws.scale === 2 ? 1 : 2;
  } else if (z === "sound") {
    Ws.sound = !Ws.sound;
  } else if (z === "from") {
    Ws.from = Math.max(0, Math.min(Ws.to - 1, Ws.from + W));
  } else if (z === "to") {
    Ws.to = Math.max(Ws.from + 1, Math.min(Wn, Ws.to + W));
  } else {
    return false;
  }
  return true;
}
z7(WB, "uiChange");
function Wd(z) {
  if (Ws.gif) {
    return "about " + Math.max(1, Math.round(z * 15 * 0.02)) + " MB";
  }
  let WL = ((Ws.scale === 2 ? 6000000 : 2500000) + (Ws.sound ? 128000 : 0)) * z / 8 / 1048576;
  return "up to " + (WL < 10 ? WL.toFixed(1) : Math.round(WL)) + " MB";
}
z7(Wd, "sizeGuess");
function WZ() {
  let WH = W4(Ws.d.n | 0, WQ(), Ws.gif);
  let Wn = (WH.to - WH.from + 1) / zx;
  let WL = WD(WH.from - 1) + " to " + WD(WH.to) + " (" + Wn.toFixed(Wn < 10 ? 1 : 0) + " s)";
  if (WH.capped) {
    WL += " - capped at " + (Ws.gif ? zt + " s for a GIF" : zh / 60 + " min");
  }
  if (WH.tooFar) {
    WL = "starts past " + zP / 60 + " min - too far in to export";
  } else {
    WL += " - " + Wd(Wn);
  }
  return WL;
}
z7(WZ, "uiSummary");
var Wf = z7(z => {
  try {
    S(z);
  } catch {}
}, "sfx");
function WG() {
  if (Ws.run) {
    return;
  }
  let Wn = Ws.d;
  Ws.done = null;
  Ws.run = {
    p: 0,
    text: "Starting...",
    t0: zo()
  };
  Wo(Wn, {
    range: WQ(),
    gif: Ws.gif,
    scale: Ws.scale,
    audio: Ws.sound,
    onProgress: (WL, WK, Y0) => {
      if (Ws.run) {
        Ws.run.p = WL;
        Ws.run.text = WK;
        Ws.run.info = Y0 || null;
      }
    }
  }).then(WL => {
    {
      Ws.run = null;
      if (s && s("rv:export")) {
        WF();
      }
      if (!WL.ok) {
        {
          const Y8 = {
            ok: false,
            text: WL.cancelled ? "Cancelled." : WL.why
          };
          Ws.done = Y8;
          if (!WL.cancelled) {
            B("Export failed: " + WL.why, {
              kind: "error"
            });
          }
          return;
        }
      }
      let Y2 = Q(WL.name, WL.blob, WL.blob.type);
      let Y3 = (WL.blob.size / 1048576).toFixed(1) + " MB";
      let Y4 = (Y2 ? "Saved " : "Could not save ") + WL.name + " - " + Y3;
      let Y5 = (WL.ms || 0) / 1000;
      let Y6 = (WL.to - WL.from + 1) / zx;
      if (WL.path === "workers" && Y5 > 0) {
        Y4 += ", " + (Y6 / Y5).toFixed(1) + "x real time";
      }
      if (WL.fellBack) {
        Y4 += ". On one thread: " + WL.fellBack;
      }
      if (!Ws.gif && Ws.sound && !WL.audio) {
        Y4 += ". No sound" + (WL.audioWhy ? ": " + WL.audioWhy : WL.path === "workers" ? "" : " on one thread");
      }
      if (WL.drift) {
        Y4 += ". It drifts from the recorded run from " + WD(WL.drift) + (WL.wallclock ? " (this fight follows the video clock)." : " (a different build?).");
      }
      Ws.done = {
        ok: Y2,
        text: Y4,
        drift: WL.drift
      };
      if (Y2) {
        B((Ws.gif ? "GIF" : "Video") + " saved - " + Y3, {
          kind: WL.drift ? "warn" : "ok"
        });
      }
    }
  });
}
z7(WG, "start");
var Ww = Wc;
function WT() {
  if (Ws.run) {
    {
      Ww();
      return;
    }
  }
  r("rv:export");
}
z7(WT, "close");
function Wy(z, W) {
  if (W === "Escape") {
    WT();
    return true;
  }
  if (!Ws.run) {
    return false;
  }
  let WK = false;
  try {
    WK = [...l("b1"), ...l("b2")].some(Y0 => Y0.toLowerCase() === String(z.key || "").toLowerCase());
  } catch {}
  if (WK) {
    Ww();
    Wf("snd_menumove");
    return true;
  } else {
    return false;
  }
}
z7(Wy, "onKey");
function WR(z) {
  if (z === "go") {
    Wf("snd_select");
    WG();
    return;
  }
  if (WB(z, 1)) {
    Wf("snd_menumove");
  }
}
z7(WR, "act");
function Wg() {
  if (Ws.buf > 0) {
    Ws.buf--;
    return;
  }
  if (Ws.run) {
    {
      if (e() || H()) {
        Ww();
        Wf("snd_menumove");
      }
      return;
    }
  }
  let WH = WX();
  let Wn = WH.length;
  if (H()) {
    {
      r("rv:export");
      Wf("snd_menumove");
      return;
    }
  }
  if (z1()) {
    Ws.sel = (Ws.sel + Wn - 1) % Wn;
    Wf("snd_menumove");
  }
  if (z2()) {
    Ws.sel = (Ws.sel + 1) % Wn;
    Wf("snd_menumove");
  }
  Ws.sel = Math.min(Ws.sel, Wn - 1);
  let WK = WH[Ws.sel][0];
  if (K() || z0()) {
    if (WB(WK, z0() ? 1 : -1)) {
      Wf("snd_menumove");
    }
  } else if ((WK === "from" || WK === "to") && (z4() || z6())) {
    Ws.hold = (Ws.hold || 0) + 1;
    if (Ws.hold > 8 && Ws.hold % 2 === 0) {
      WB(WK, z6() ? 1 : -1);
    }
  } else {
    Ws.hold = 0;
  }
  if (e()) {
    WR(WK);
  }
}
z7(Wg, "step");
var WE = 110;
var WI = 90;
var WA = 530;
var Wi = 420;
function Wa(z, W, We, WH, Wn = zc.text, WL = "fnt_main") {
  z.draw_set_font(WL);
  z.draw_text(W, We, String(WH), Wn);
}
z7(Wa, "text");
function Wk(z) {
  const We = {
    tmEQk: function (Y4, Y5) {
      return Y4(Y5);
    },
    gTZll: function (Y4, Y5) {
      return Y4 === Y5;
    },
    jbJWs: "eOEBX",
    lHLbZ: "PjXiU",
    NBkyb: "rv:export",
    upFIo: "cancelled",
    RTvvg: "done",
    KHNkD: function (Y4) {
      return Y4();
    },
    uedjc: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    ECkOW: function (Y4, Y5) {
      return Y4 + Y5;
    },
    Paumw: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    pXFnp: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    sFDjf: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    jUHni: function (Y4, Y5, Y6, Y7) {
      return Y4(Y5, Y6, Y7);
    },
    vwYNn: function (Y4, Y5) {
      return Y4(Y5);
    },
    gdMWP: function (Y4, Y5) {
      return Y4 - Y5;
    },
    Gyusm: function (Y4, Y5) {
      return Y4(Y5);
    },
    UbZau: "snd_menumove",
    nsSzf: "canvas",
    TMACk: function (Y4, Y5, Y6, Y7) {
      return Y4(Y5, Y6, Y7);
    },
    QEjSa: function (Y4, Y5, Y6, Y7, Y8, Y9) {
      return Y4(Y5, Y6, Y7, Y8, Y9);
    },
    GSxJZ: function (Y4, Y5) {
      return Y4 + Y5;
    },
    rkLwm: function (Y4, Y5) {
      return Y4 <= Y5;
    },
    zOLoV: function (Y4, Y5, Y6, Y7, Y8) {
      return Y4(Y5, Y6, Y7, Y8);
    },
    wxRjF: function (Y4, Y5) {
      return Y4 / Y5;
    },
    DXgKn: function (Y4, Y5) {
      return Y4 <= Y5;
    },
    VTgfj: function (Y4, Y5) {
      return Y4 * Y5;
    },
    ZuInp: "rv:bg",
    fHnUD: "rv:frame",
    oqzIS: function (Y4, Y5) {
      return Y4 - Y5;
    },
    CxSfz: function (Y4, Y5, Y6, Y7, Y8, Y9, Yz) {
      return Y4(Y5, Y6, Y7, Y8, Y9, Yz);
    },
    eFTVz: function (Y4, Y5) {
      return Y4 + Y5;
    },
    GzOHe: "REPLAY",
    UolpO: "fnt_mainbig",
    tiKwn: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    RsgWc: "usVDt",
    CfTwO: "QeCMa",
    dcoIK: function (Y4, Y5) {
      return Y4 + Y5;
    },
    JvrUL: function (Y4, Y5) {
      return Y4 + Y5;
    },
    WGHRB: function (Y4, Y5) {
      return Y4 + Y5;
    },
    exiJR: function (Y4, Y5) {
      return Y4 - Y5;
    },
    UUUVI: function (Y4, Y5) {
      return Y4 * Y5;
    },
    SlPTE: function (Y4, Y5) {
      return Y4 > Y5;
    },
    iHYQw: function (Y4, Y5) {
      return Y4 + Y5;
    },
    ETSSo: function (Y4, Y5) {
      return Y4 + Y5;
    },
    wuIst: "   ",
    DMNVZ: "x real time",
    FYlfU: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    ZFWcp: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    encuW: "   ETA ",
    tywSi: function (Y4, Y5) {
      return Y4(Y5);
    },
    vkXdC: function (Y4, Y5) {
      return Y4 * Y5;
    },
    Fvroz: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    wpDBG: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    eqCqQ: function (Y4, Y5) {
      return Y4 + Y5;
    },
    pNdGR: "   ~",
    DbKZR: " MB",
    DqIZw: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    pkMse: "OBPhY",
    LOyAU: "nLLCL",
    RAMiO: function (Y4, Y5) {
      return Y4 < Y5;
    },
    IriGJ: function (Y4, Y5) {
      return Y4 - Y5;
    },
    TCVoM: function (Y4, Y5) {
      return Y4 - Y5;
    },
    MmAIi: "seek",
    qLzSr: function (Y4, Y5) {
      return Y4 - Y5;
    },
    qMHHw: function (Y4, Y5) {
      return Y4 === Y5;
    },
    YnZUJ: "idle",
    VjSbx: function (Y4, Y5) {
      return Y4 - Y5;
    },
    oYoxB: function (Y4, Y5) {
      return Y4 + Y5;
    },
    ompaY: function (Y4, Y5) {
      return Y4 - Y5;
    },
    GdDSE: function (Y4, Y5) {
      return Y4 * Y5;
    },
    LPkDe: function (Y4, Y5) {
      return Y4 * Y5;
    },
    CpqET: function (Y4, Y5) {
      return Y4 - Y5;
    },
    IUJLY: "rv:cancel",
    vYTBZ: "UIeMF",
    HRjJX: "rObrP",
    EsDRg: "spr_heart",
    jTgpg: function (Y4, Y5, Y6, Y7, Y8, Y9) {
      return Y4(Y5, Y6, Y7, Y8, Y9);
    },
    OFuou: "CANCEL",
    umcHG: function (Y4) {
      return Y4();
    },
    ODBey: "lDZcH",
    wUrSb: function (Y4, Y5) {
      return Y4 + Y5;
    },
    pBvNX: function (Y4, Y5) {
      return Y4 === Y5;
    },
    LoRrE: "rv:row",
    XNhXn: function (Y4, Y5) {
      return Y4 - Y5;
    },
    xdAzF: function (Y4, Y5) {
      return Y4 - Y5;
    },
    rTkuE: function (Y4, Y5) {
      return Y4 + Y5;
    },
    dnfzu: function (Y4, Y5) {
      return Y4 + Y5;
    },
    PKptM: function (Y4, Y5, Y6, Y7, Y8, Y9) {
      return Y4(Y5, Y6, Y7, Y8, Y9);
    },
    ZtjWR: function (Y4, Y5) {
      return Y4 + Y5;
    },
    Xrtau: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    fWwmE: function (Y4, Y5) {
      return Y4 !== Y5;
    },
    LTQAq: function (Y4, Y5) {
      return Y4 - Y5;
    },
    hDpdo: function (Y4, Y5, Y6, Y7) {
      return Y4(Y5, Y6, Y7);
    },
    YPowo: "fJuQg",
    IKDHm: "dDlPU",
    AzESc: function (Y4, Y5, Y6, Y7) {
      return Y4(Y5, Y6, Y7);
    },
    cGoou: function (Y4, Y5) {
      return Y4(Y5);
    },
    IuRUy: function (Y4) {
      return Y4();
    },
    BTtBk: function (Y4, Y5, Y6) {
      return Y4(Y5, Y6);
    },
    HSsIV: "Renders in the background, faster than real time. A GIF has no sound.",
    Snhld: function (Y4, Y5) {
      return Y4 + Y5;
    },
    FOSkl: "Renders in the background, faster than real time",
    RWcdN: ", with sound.",
    OUgiO: function (Y4) {
      return Y4();
    },
    HmvOf: "No sound: it renders off-screen, faster than real time.",
    JQfhP: "No sound. This browser records at real speed."
  };
  D.rect(We.ZuInp, 0, 0, 640, 480, () => {
    if (We.gTZll(We.jbJWs, We.lHLbZ)) {
      c.draw_set_font(D);
      WK.draw_text(p, Y0, mEusWF.tmEQk(s, Y1), B);
    } else if (!Ws.run) {
      We.tmEQk(r, We.NBkyb);
    }
  });
  let Wn = We.KHNkD(zD);
  z.ctx.fillStyle = zc.solid;
  z.ctx.fillRect(WE, WI, We.gdMWP(WA, WE), We.gdMWP(Wi, WI));
  if (Wn.darkbox) {
    Wn.darkbox(z, WE, WI, WA, Wi);
  } else {
    We.QEjSa(u, z, WE, WI, WA, Wi);
  }
  D.rect(We.fHnUD, WE, WI, We.oqzIS(WA, WE), We.oqzIS(Wi, WI), () => {});
  let WK = Ws.d || {};
  We.CxSfz(Wa, z, We.eFTVz(WE, 30), We.GSxJZ(WI, 22), We.vwYNn(String, WK.name || WK.fight || We.GzOHe).slice(0, 30).toUpperCase(), zc.select, We.UolpO);
  if (Ws.run) {
    if (We.tiKwn(We.RsgWc, We.CfTwO)) {
      let Y4 = Math.max(0, Math.min(1, Ws.run.p || 0));
      We.QEjSa(Wa, z, We.dcoIK(WE, 30), We.JvrUL(WI, 76), Ws.run.text, zc.text);
      let Y5 = We.WGHRB(WE, 30);
      let Y6 = We.eFTVz(WI, 104);
      let Y7 = We.gdMWP(We.exiJR(WA, WE), 60);
      z.ctx.fillStyle = zc.faint;
      z.ctx.fillRect(Y5, Y6, Y7, 12);
      z.ctx.fillStyle = zc.select;
      z.ctx.fillRect(Y5, Y6, Math.round(We.UUUVI(Y7, Y4)), 12);
      let Y8 = Ws.run.info;
      let Y9 = We.GSxJZ(Math.floor(We.UUUVI(Y4, 100)), "%");
      if (Y8) {
        if (We.SlPTE(Y8.speed, 0.05)) {
          Y9 += We.iHYQw(We.ETSSo(We.wuIst, Y8.speed.toFixed(1)), We.DMNVZ);
        }
        if (We.FYlfU(Y8.eta, null) && We.ZFWcp(Y8.eta, undefined)) {
          Y9 += We.GSxJZ(We.encuW, We.tywSi(WD, Math.round(We.vkXdC(Y8.eta, zx))));
        }
        if (We.Fvroz(Y8.mb, null) && We.wpDBG(Y8.mb, undefined)) {
          Y9 += We.eqCqQ(We.dcoIK(We.pNdGR, Y8.mb.toFixed(1)), We.DbKZR);
        }
      }
      We.QEjSa(Wa, z, We.dcoIK(WE, 30), We.dcoIK(WI, 126), Y9, zc.dim);
      if (Y8 && Y8.workers && Y8.workers.length) {
        if (We.DqIZw(We.pkMse, We.LOyAU)) {
          let Yz = Y8.workers.length;
          let YW = We.eqCqQ(WI, 150);
          let YY = Math.min(12, Math.floor(We.wxRjF(70, Yz)));
          for (let Yv = 0; We.RAMiO(Yv, Yz); Yv++) {
            let Yb = Y8.workers[Yv];
            let YC = We.GSxJZ(YW, We.vkXdC(Yv, YY));
            z.ctx.fillStyle = zc.faint;
            z.ctx.fillRect(Y5, YC, Y7, We.IriGJ(YY, 3));
            if (!Yb.b) {
              continue;
            }
            let YM = We.IriGJ(We.TCVoM(Yb.a, 1), Yb.seek);
            let YF = Yb.seek && We.gTZll(Yb.phase, We.MmAIi) ? Math.max(0, Math.min(1, We.wxRjF(We.qLzSr(Yb.f, YM), Yb.seek))) : 1;
            let Yx = We.gTZll(Yb.phase, We.MmAIi) ? 0 : Math.max(0, Math.min(1, We.qMHHw(Yb.phase, We.YnZUJ) ? 1 : We.wxRjF(We.JvrUL(We.VjSbx(Yb.f, Yb.a), 1), Math.max(1, We.oYoxB(We.ompaY(Yb.b, Yb.a), 1)))));
            z.ctx.fillStyle = zc.dim;
            z.ctx.fillRect(Y5, YC, Math.round(We.GdDSE(We.VTgfj(Y7, 0.25), YF)), We.ompaY(YY, 3));
            z.ctx.fillStyle = zc.select;
            z.ctx.fillRect(We.GSxJZ(Y5, Math.round(We.vkXdC(Y7, 0.25))), YC, Math.round(We.LPkDe(We.UUUVI(Y7, 0.75), Yx)), We.CpqET(YY, 3));
          }
        } else {
          const Yt = {
            ok: false,
            why: mEusWF.upFIo,
            cancelled: true
          };
          if (!m.done) {
            Yt.result = Yt;
            We.phase = mEusWF.RTvvg;
            mEusWF.KHNkD(Wn);
          }
        }
      }
      D.rect(We.IUJLY, We.eFTVz(WE, 26), We.VjSbx(Wi, 60), 120, 26, () => Ww());
      if (z.draw_sprite) {
        try {
          if (We.qMHHw(We.vYTBZ, We.HRjJX)) {
            let Ye = mEusWF.uedjc(k, S.Timecode, Y9.tc);
            let Yn = mEusWF.ECkOW(Ye.length, J.blocks.reduce((vo, ve) => vo + ve.length, 0));
            if (l.cue) {
              z.push(mEusWF.Paumw(H, n.CuePoint, mEusWF.uedjc(L, mEusWF.uedjc(z0, z1.CueTime, z2.tc), mEusWF.uedjc(z3, z4.CueTrackPositions, mEusWF.pXFnp(z5, mEusWF.sFDjf(z6, Ye.CueTrack, 1), mEusWF.jUHni(Yn, vt.CueClusterPosition, zz, 8))))));
            }
            let vt = mEusWF.jUHni(zW, mEusWF.vwYNn(zY, zv.Cluster), mEusWF.tmEQk(zb, Yn), Ye);
            zC.push(vt, ...zM.blocks);
            zF += mEusWF.gdMWP(mEusWF.ECkOW(vt.length, Yn), Ye.length);
          } else {
            z.draw_sprite(We.EsDRg, 0, We.eqCqQ(WE, 30), We.oqzIS(Wi, 54));
          }
        } catch {}
      }
      We.jTgpg(Wa, z, We.JvrUL(WE, 52), We.TCVoM(Wi, 56), We.OFuou, zc.select);
      return;
    } else {
      h.audioP = t;
    }
  }
  let Y0 = We.umcHG(WX);
  for (let vo = 0; We.RAMiO(vo, Y0.length); vo++) {
    if (We.qMHHw(We.ODBey, We.ODBey)) {
      let [ve, vn] = Y0[vo];
      let bt = We.wUrSb(We.eFTVz(WI, 62), We.LPkDe(vo, 26));
      let bo = We.pBvNX(vo, Ws.sel);
      D.rect(We.WGHRB(We.LoRrE, vo), We.WGHRB(WE, 20), We.oqzIS(bt, 3), We.XNhXn(We.xdAzF(WA, WE), 40), 24, ((bn, C5) => () => {
        if (We.gTZll(Ws.sel, bn) || We.gTZll(C5, "go")) {
          Ws.sel = bn;
          We.Gyusm(WR, C5);
        } else {
          Ws.sel = bn;
          We.Gyusm(Wf, We.UbZau);
        }
      })(vo, ve));
      if (bo && z.draw_sprite) {
        try {
          z.draw_sprite(We.EsDRg, 0, We.eFTVz(WE, 26), We.rTkuE(bt, 2));
        } catch {}
      }
      We.QEjSa(Wa, z, We.dnfzu(WE, 50), bt, vn, bo ? zc.select : zc.text);
      let be = We.vwYNn(Wj, ve);
      if (be) {
        We.PKptM(Wa, z, We.GSxJZ(WE, 170), bt, We.rTkuE(We.ZtjWR(bo && We.Xrtau(ve, "go") ? "< " : "", be), bo && We.fWwmE(ve, "go") ? " >" : ""), bo ? zc.select : zc.dim);
      }
    } else {
      let bn = t.createElement(mEusWF.nsSzf);
      bn.width = m;
      bn.height = z;
      return bn;
    }
  }
  let Y1 = We.oYoxB(We.eqCqQ(We.ZtjWR(WI, 62), We.vkXdC(Y0.length, 26)), 6);
  let Y2 = We.qLzSr(We.LTQAq(WA, WE), 60);
  let Y3 = (C5, C6, C7 = 3) => {
    for (let CW of We.TMACk(WS, z, C5, Y2).slice(0, C7)) {
      We.QEjSa(Wa, z, We.GSxJZ(WE, 30), Y1, CW, C6);
      Y1 += 17;
    }
  };
  We.hDpdo(Y3, We.KHNkD(WZ), zc.dim, 2);
  if (Ws.done) {
    if (We.wpDBG(We.YPowo, We.IKDHm)) {
      let C5 = Ws.done.ok ? Ws.done.drift ? zc.warn : zc.ok : zc.error;
      We.AzESc(Y3, We.cGoou(String, Ws.done.text), C5, 4);
    } else {
      let C6 = [];
      for (let C8 = 1; mEusWF.rkLwm(C8, Y2); C8++) {
        C6.push(mEusWF.zOLoV(Y3, T, y, C8, R).T || mEusWF.wxRjF(1, 0));
      }
      let C7 = s.min(...C6);
      for (let C9 = 1; mEusWF.DXgKn(C9, g); C9++) {
        if (mEusWF.rkLwm(C6[mEusWF.gdMWP(C9, 1)], mEusWF.VTgfj(C7, 1.1))) {
          return C9;
        }
      }
      return B;
    }
  } else if (We.IuRUy(W5) && We.IuRUy(zl)) {
    We.BTtBk(Y3, Ws.gif ? We.HSsIV : We.Snhld(We.FOSkl, Ws.sound ? We.RWcdN : "."), zc.dim);
  } else if (Ws.gif || We.OUgiO(zl)) {
    We.BTtBk(Y3, We.HmvOf, zc.dim);
  } else {
    We.Paumw(Y3, We.JQfhP, zc.warn);
  }
}
z7(Wk, "draw");
function WS(z, W, We, WH = "fnt_main") {
  let WL = Y4 => z && typeof z.string_width == "function" ? z.string_width(Y4, WH) : Y4.length * 8;
  let WK = [];
  let Y0 = "";
  for (let Y4 of String(W).split(" ")) {
    {
      while (WL(Y4) > We && Y4.length > 1) {
        {
          let Yz = Y4.length;
          while (Yz > 1 && WL(Y4.slice(0, Yz)) > We) {
            Yz--;
          }
          if (Y0) {
            WK.push(Y0);
            Y0 = "";
          }
          WK.push(Y4.slice(0, Yz));
          Y4 = Y4.slice(Yz);
        }
      }
      let Y5 = Y0 ? Y0 + " " + Y4 : Y4;
      if (Y0 && WL(Y5) > We) {
        WK.push(Y0);
        Y0 = Y4;
      } else {
        Y0 = Y5;
      }
    }
  }
  if (Y0) {
    WK.push(Y0);
  }
  return WK;
}
z7(WS, "wrapText");
function WU() {
  if (Ws.run) {
    return {
      key: "rv-run",
      title: "EXPORTING " + Math.floor((Ws.run.p || 0) * 100) + "%",
      note: Ws.run.text + (Ws.run.info && Ws.run.info.eta != null ? " - ETA " + WD(Math.round(Ws.run.info.eta * zx)) : ""),
      rows: [{
        label: "CANCEL",
        sel: true,
        act: () => Ww()
      }],
      close: false
    };
  } else {
    return {
      key: "rv-export",
      title: "EXPORT VIDEO",
      rows: WX().map(([Wn, WL], WK) => ({
        label: Wn === "go" ? WL : WL + "  " + Wj(Wn),
        sel: WK === Ws.sel,
        act: () => {
          Ws.sel = WK;
          WR(Wn);
        },
        btns: Wn === "go" ? [] : [{
          label: "<",
          act: () => {
            Ws.sel = WK;
            WB(Wn, -1);
          }
        }, {
          label: ">",
          act: () => {
            Ws.sel = WK;
            WB(Wn, 1);
          }
        }]
      })),
      note: WZ() + "." + (Ws.gif ? " No sound." : Ws.sound && W5() && zl() ? " With sound." : " No sound.") + (Ws.done ? " " + Ws.done.text : "")
    };
  }
}
z7(WU, "touchRows");
function WJ(z) {
  let We = j("timeline");
  let WH = typeof z == "object" && z ? z : We && We.replays ? We.replays().find(Y0 => Y0.id === z) : null;
  if (!WH) {
    B("That replay is gone", {
      kind: "error"
    });
    return false;
  }
  try {
    zZ(WH);
  } catch (Y1) {
    B(Y1 && Y1.message || "Not a replay", {
      kind: "error"
    });
    return false;
  }
  if (zN()) {
    Object.assign(Ws, {
      d: WH,
      sel: 0,
      range: "whole",
      last: 1,
      from: 0,
      to: WN(WH),
      gif: false,
      scale: 1,
      sound: true,
      run: null,
      done: null,
      buf: 1,
      hold: 0
    });
    p({
      id: "rv:export",
      owner: zF,
      draw: Wk,
      step: Wg,
      touchRows: WU,
      onKey: Wy,
      onClose: () => {
        Ww();
        Wh();
      }
    });
    WF();
    return true;
  } else {
    B("Video export runs from the menu - leave the fight first", {
      kind: "warn"
    });
    return false;
  }
}
z7(WJ, "openExport");
const Wq = {
  openExport: WJ,
  exportReplayVideo: Wo,
  renderJob: zf,
  muxWebM: zU,
  parseEBML: zq,
  rangeOf: W4,
  busy: WO,
  hasWebCodecs: zl,
  canParallel: W5,
  splitRange: W9,
  workersFor: Wz,
  prewarm: WF,
  coolDown: Wh
};
X("replayvideo", Wq);
export { W7 as DEFAULT_RENDERERS, zm as MAX_BYTES, zt as MAX_GIF_S, zP as MAX_SEEK_S, zh as MAX_VIDEO_S, W6 as MAX_WORKERS, WO as busy, W5 as canParallel, Wc as cancelExport, Wh as coolDown, Wo as exportReplayVideo, zl as hasWebCodecs, zU as muxWebM, WJ as openExport, WP as parallelProgress, zq as parseEBML, WF as prewarm, W4 as rangeOf, zf as renderJob, W9 as splitRange, W3 as videoName, Wz as workersFor, zN as worldIsEmpty, WS as wrapText };
function Wl(z, W) {
  var Wn = new URL(z, W).href;
  var WL = globalThis.__drWarm;
  return (WL ? WL(Wn) : Promise.resolve()).then(function () {
    return import(Wn).catch(function (Y8) {
      {
        try {
          Y8.reload = true;
          Y8.what = "the game code";
        } catch (YC) {}
        throw Y8;
      }
    });
  });
}
