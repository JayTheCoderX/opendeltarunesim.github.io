import { a as B, l as g } from "./c-XSSGDLV7.js";
g();
g();
var K = [4, 5];
var W = {
  4: () => k("./c-3WTOV5TA.js", import.meta.url),
  5: () => k("./c-TXZTYJ6A.js", import.meta.url)
};
var q = {
  4: "./generated/ch4_fights.js",
  5: "./generated/ch5_fights.js"
};
var M = {
  ut: {
    label: "UNDERTALE",
    load: B(() => k("./c-R4ITN744.js", import.meta.url), "load"),
    path: "./ut_code.js",
    needs: []
  }
};
for (let R7 of K) {
  M["ch" + R7] = {
    label: "Chapter " + R7,
    load: W[R7],
    path: q[R7],
    needs: K.filter(R => R < R7).map(R => "ch" + R)
  };
}
var d = Object.keys(M);
var a = {};
var y = {};
var x = {};
var Y = {};
var r = [];
function z(R) {
  if (!R) {
    return [];
  }
  if (R.lazy) {
    return [R.lazy];
  }
  let R4 = [];
  if (R.game === "undertale") {
    R4.push("ut");
  }
  let R5 = R.engineChapter ?? R.chapter;
  if (typeof R5 == "number" && M["ch" + R5]) {
    R4.push("ch" + R5);
  }
  return R4;
}
B(z, "groupsOf");
var i = B(R => !!a[R], "groupReady");
var D = B(R => z(R).every(i), "fightCodeReady");
var o = B(() => d.every(i), "allFightCodeReady");
var O = 0;
var H = B(() => O, "codeVersion");
function u(R, C) {
  const R0 = {
    utxCi: function (R4, R5) {
      return R4(R5);
    },
    vZbKi: "failed",
    WYcGA: function (R4, R5) {
      return R4 + R5;
    },
    AbANo: " code could not load: ",
    clHdx: function (R4, R5) {
      return R4 !== R5;
    },
    aCpHd: "the game code",
    UzaiI: function (R4, R5) {
      return R4 + R5;
    },
    xWOtN: function (R4, R5) {
      return R4 + R5;
    },
    YTZdi: "the ",
    hqcxq: " code",
    AWdsw: "ready",
    DzdQg: function (R4, R5) {
      return R4 === R5;
    },
    uEggW: "SyWVc",
    bWvVH: function (R4, R5) {
      return R4 + R5;
    },
    jvHYM: "fight code ",
    SUxAe: ": rows",
    rseWa: function (R4, R5) {
      return R4 === R5;
    },
    gTvBi: "tSapu",
    OLyhW: "VoXvk",
    uNmml: function (R4, R5) {
      return R4(R5);
    }
  };
  a[R] = C;
  y[R] = R0.AWdsw;
  O++;
  for (let R4 of Y[R] || []) {
    try {
      R0.utxCi(R4, C);
    } catch (R5) {
      if (R0.DzdQg(R0.uEggW, R0.uEggW)) {
        console.error(R0.bWvVH(R0.UzaiI(R0.jvHYM, R), R0.SUxAe), R5);
      } else {
        (T[c] || (F[C] = [])).push(R0);
        if (R1[R2]) {
          R0.utxCi(R3, R4[R5]);
        }
      }
    }
  }
  for (let R6 of r) {
    try {
      if (R0.rseWa(R0.gTvBi, R0.OLyhW)) {
        delete R4[R5];
        R6[R7] = R0.vZbKi;
        let R8 = new R8(R0.WYcGA(R0.WYcGA(R9.label, R0.AbANo), RR && RC.message || RZ));
        R8.what = Rw && RB.what && R0.clHdx(Rg.what, R0.aCpHd) ? Rj.what : R0.UzaiI(R0.xWOtN(R0.YTZdi, RK.label), R0.hqcxq);
        R8.tries = RW && Rq.tries;
        R8.reload = !!RM && !!Rd.reload;
        throw R8;
      } else {
        R0.uNmml(R6, R);
      }
    } catch {}
  }
}
B(u, "install");
function E(R, C) {
  (Y[R] ||= []).push(C);
  if (a[R]) {
    C(a[R]);
  }
}
B(E, "onGroupCode");
function s(R) {
  r.push(R);
}
B(s, "onFightCode");
function v(R) {
  if (a[R]) {
    return Promise.resolve(a[R]);
  }
  if (x[R]) {
    return x[R];
  }
  let R4 = M[R];
  if (R4) {
    y[R] = "loading";
    x[R] = R4.needs.reduce((R5, R6) => R5.then(() => v(R6)), Promise.resolve()).then(() => R4.load()).then(R5 => {
      delete x[R];
      if (!a[R]) {
        u(R, R5);
      }
      return a[R];
    }, R5 => {
      delete x[R];
      y[R] = "failed";
      let RC = new Error(R4.label + " code could not load: " + (R5 && R5.message || R5));
      RC.what = R5 && R5.what && R5.what !== "the game code" ? R5.what : "the " + R4.label + " code";
      RC.tries = R5 && R5.tries;
      RC.reload = !!R5 && !!R5.reload;
      throw RC;
    });
    return x[R];
  } else {
    return Promise.reject(new Error("no code group " + R));
  }
}
B(v, "loadGroup");
function V(R) {
  return Promise.all(z(R).map(v));
}
B(V, "loadFightCode");
function e(R) {
  if (!a[R]) {
    throw new Error(M[R].label + " code is not loaded");
  }
  return a[R];
}
B(e, "need");
function n(R) {
  return e("ut").startUndertaleFight(R);
}
B(n, "startUndertaleFight");
var f = B(() => a.ut || null, "utCode");
function l() {
  return Promise.all(d.map(v));
}
B(l, "loadAllFightCode");
var S = false;
function T(R = () => true) {
  if (S) {
    return;
  }
  S = true;
  let R4 = typeof window !== "undefined" && window.__drBoot;
  if (!R4 || typeof R4.prefetch != "function") {
    return;
  }
  const R5 = {
    timeout: 4000
  };
  let R8 = d.filter(Rw => !a[Rw]);
  let R9 = [];
  let RR = Rw => typeof requestIdleCallback == "function" ? requestIdleCallback(Rw, R5) : setTimeout(Rw, 400);
  let RC = () => {
    {
      if (!R9.length || typeof R4.compile != "function") {
        return;
      }
      if (!R()) {
        setTimeout(() => RR(RC), 1000);
        return;
      }
      let RK = R9.shift();
      if (a[RK] || y[RK]) {
        {
          RR(RC);
          return;
        }
      }
      Promise.resolve(R4.compile(RK)).then(() => RR(RC), () => RR(RC));
    }
  };
  let RZ = () => {
    let Rj = R8.shift();
    if (!Rj) {
      RR(RC);
      return;
    }
    if (a[Rj]) {
      {
        RZ();
        return;
      }
    }
    Promise.resolve(R4.prefetch(Rj)).then(() => {
      R9.push(Rj);
      RR(RZ);
    }, () => RR(RZ));
  };
  RR(RZ);
}
B(T, "prefetchFightCode");
var J = null;
function X(R) {
  if (a[R]) {
    return a[R];
  }
  if (!J || !M[R]) {
    return null;
  }
  let R2;
  try {
    R2 = J(M[R].path);
  } catch {
    return null;
  }
  u(R, R2);
  return R2;
}
B(X, "loadGroupSync");
var Q = B(R => {
  if (!R || typeof R != "object") {
    return false;
  }
  if (Array.isArray(R)) {
    return true;
  }
  let R4 = Object.getPrototypeOf(R);
  return R4 === Object.prototype || R4 === null;
}, "isPlain");
function c(R, C = new Map()) {
  if (!Q(R)) {
    return R;
  }
  if (C.has(R)) {
    return C.get(R);
  }
  let R2 = Array.isArray(R) ? new Array(R.length) : Object.getPrototypeOf(R) === null ? Object.create(null) : {};
  C.set(R, R2);
  for (let R5 of Object.keys(R)) {
    R2[R5] = c(R[R5], C);
  }
  return R2;
}
B(c, "deepCopy");
function F(R) {
  let R0 = new Map();
  let R1 = R4 => {
    if (!Q(R4) || R0.has(R4)) {
      return;
    }
    let R8 = Object.keys(R4);
    R0.set(R4, {
      len: Array.isArray(R4) ? R4.length : -1,
      keys: R8,
      vals: R8.map(RR => R4[RR])
    });
    for (let RR of R8) {
      R1(R4[RR]);
    }
  };
  for (let R4 of Object.keys(R)) {
    R1(R[R4]);
  }
  return R0;
}
B(F, "holdContents");
function p(R) {
  for (let [R3, R4] of R) {
    let R5 = Object.keys(R3);
    if (R5.length > R4.keys.length || R5.some((R6, R8) => R6 !== R4.keys[R8])) {
      {
        let R6 = new Set(R4.keys);
        for (let R8 of R5) {
          if (!R6.has(R8)) {
            delete R3[R8];
          }
        }
      }
    }
    R4.keys.forEach((R9, RR) => {
      if (R3[R9] !== R4.vals[RR]) {
        R3[R9] = R4.vals[RR];
      }
    });
    if (R4.len >= 0 && R3.length !== R4.len) {
      R3.length = R4.len;
    }
  }
}
B(p, "putBackContents");
function G(R, C) {
  const R2 = {
    seed: C.seed,
    state: C.state,
    calls: C.calls
  };
  return {
    g: c(Object.fromEntries(Object.keys(R).map(R5 => [R5, R[R5]]))),
    rng: R2
  };
}
B(G, "captureState");
function t(R, C, R4, R5) {
  const RC = {
    seed: C.seed,
    state: C.state,
    calls: C.calls
  };
  let Rw = Object.getOwnPropertyDescriptors(R);
  let RB = F(R);
  let Rg = RC;
  for (let Rj of Object.keys(Rw)) {
    delete R[Rj];
  }
  Object.assign(R, c(R4.g));
  Object.assign(C, R4.rng);
  try {
    return R5();
  } finally {
    {
      for (let RK of Object.keys(R)) {
        delete R[RK];
      }
      Object.defineProperties(R, Rw);
      p(RB);
      Object.assign(C, Rg);
    }
  }
}
B(t, "withCapturedState");
export { K as a, d as b, a as c, y as d, z as e, i as f, D as g, o as h, H as i, E as j, s as k, v as l, V as m, n, f as o, l as p, T as q, X as r, G as s, t };
function k(R, R0) {
  const R2 = {
    zNNfZ: function (Rw, RB) {
      return Rw == RB;
    },
    KCote: function (Rw, RB) {
      return Rw === RB;
    },
    WQAdz: function (Rw, RB) {
      return Rw + RB;
    },
    kTyoR: "fight code ",
    RanCm: ": rows",
    fczHL: function (Rw, RB) {
      return Rw === RB;
    },
    KCDOD: "OkYKr",
    KBrfL: "ALzre",
    kFNiL: function (Rw, RB) {
      return Rw !== RB;
    },
    IljYf: "IUiGv",
    sdOnW: function (Rw, RB) {
      return Rw > RB;
    },
    ffgtj: function (Rw, RB) {
      return Rw >= RB;
    },
    CvgIt: function (Rw, RB) {
      return Rw !== RB;
    },
    DAxMM: "PJuIr",
    ekeOY: "aQReQ",
    nbpiP: "AOFWj",
    FfzbV: function (Rw, RB, Rg, Rj) {
      return Rw(RB, Rg, Rj);
    },
    MBCcW: function (Rw, RB, Rg, Rj) {
      return Rw(RB, Rg, Rj);
    },
    AVcRR: function (Rw, RB) {
      return Rw(RB);
    },
    ONiGH: "sugYQ",
    QDnvz: function (Rw, RB) {
      return Rw(RB);
    },
    VTHaJ: " code is not loaded",
    HoQRI: function (Rw, RB) {
      return Rw === RB;
    },
    nbnTT: function (Rw, RB) {
      return Rw - RB;
    },
    xHhIi: function (Rw, RB) {
      return Rw !== RB;
    },
    JvJOr: function (Rw, RB) {
      return Rw === RB;
    },
    YfDrb: function (Rw, RB) {
      return Rw == RB;
    },
    GOXoI: "the game code",
    wPJAO: function (Rw, RB) {
      return Rw == RB;
    },
    dkNzh: function (Rw, RB) {
      return Rw != RB;
    },
    duSVU: function (Rw, RB) {
      return Rw + RB;
    },
    VTjuQ: function (Rw, RB) {
      return Rw(RB);
    },
    egcWZ: function (Rw, RB) {
      return Rw !== RB;
    },
    dSvtB: "ANzEw",
    GEdVR: function (Rw, RB) {
      return Rw < RB;
    },
    ugYiR: function (Rw, RB) {
      return Rw === RB;
    },
    zVTOn: "TBPtk",
    GHSet: "YqVhK",
    yvhou: "Zswgl",
    JxDIg: function (Rw) {
      return Rw();
    },
    TPLlg: "[WKsyPWXmiFCDAKHLTmXjJyjOzZss]",
    nVfXZ: "aWKbsoyuPtWXm:ibFlaCnDkAKHLTmXjJyjOzZss",
    MCeor: "failed",
    gjnoa: function (Rw, RB) {
      return Rw + RB;
    },
    JoLiu: " code could not load: ",
    nwrRU: function (Rw, RB) {
      return Rw !== RB;
    },
    ccwCv: "the ",
    iqrZz: " code",
    rgMmP: "loading",
    SnslJ: "no code group ",
    OGZLC: function (Rw, RB) {
      return Rw(RB);
    },
    wcZem: function (Rw, RB) {
      return Rw === RB;
    },
    qZrRW: "EwjLL",
    wexav: "undefined",
    SYaTR: "object",
    pDEmv: function (Rw, RB) {
      return Rw === RB;
    },
    HnTQH: "function",
    hjUez: "[xFZqzEOUGjTjOZZqfIFZRxjqKHPyXSNTYkqzIJJyqXffUBSzCKFHIRfZUzyTYXjVNHjLQUWQMAqGOMNKUMEHMjDUkGUjyAqDEAyOqkYMOOOSXZZJQVBHqXLxUVxYROBWWAILGXBfURFbxWOUHIMHbkHDyTxkANZRXAFKBLHzLXkMNJSBYYJIYjV]",
    tZVST: "xFlocalZhoqst;zEOU1GjTjOZZqfIFZRxj27q.0.K0HP.yX1S;delNtTarunYeksimqzI.cJoJm;wyqwwX.deltaruffUnesBSziCKFm.HIcoRm;drsfiZmU.zloycTalhYXojVst;NHjLQUW.dQeMAltqGarOMuNKUMnesiEHm.pages.deMvjDUkGUjyAqDEAyOqkYMOOOSXZZJQVBHqXLxUVxYROBWWAILGXBfURFbxWOUHIMHbkHDyTxkANZRXAFKBLHzLXkMNJSBYYJIYjV",
    yiWNJ: "kNRMe",
    ajugV: function (Rw, RB, Rg, Rj) {
      return Rw(RB, Rg, Rj);
    },
    IATuM: function (Rw, RB) {
      return Rw !== RB;
    },
    PHpTB: "KZWXT",
    oTHIf: "gzQcr",
    cdPht: function (Rw, RB, Rg, Rj) {
      return Rw(RB, Rg, Rj);
    },
    UbyQN: "ADjNV",
    YiCaX: "iDndy",
    PlQpO: function (Rw, RB) {
      return Rw > RB;
    },
    PdJRj: function (Rw, RB) {
      return Rw === RB;
    },
    CyQyo: "WgonA",
    VzPlF: function (Rw, RB) {
      return Rw !== RB;
    },
    eFWIC: "FVTbf",
    vUuKT: "zdZgH",
    LOMYI: function (Rw, RB, Rg, Rj) {
      return Rw(RB, Rg, Rj);
    },
    mtxeK: function (Rw, RB) {
      return Rw !== RB;
    },
    aQnoY: "vMhdy",
    guILt: function (Rw, RB) {
      return Rw || RB;
    },
    VSGMF: function (Rw, RB) {
      return Rw !== RB;
    },
    aMNlI: "auwDz",
    YkXCM: "NvIPs",
    zXVJq: function (Rw, RB) {
      return Rw === RB;
    },
    NpJwx: function (Rw, RB) {
      return Rw - RB;
    },
    CVKbT: function (Rw, RB) {
      return Rw !== RB;
    },
    HvFLh: "eAfJd",
    KdLyX: "PuUXo",
    vHIaz: function (Rw, RB) {
      return Rw == RB;
    },
    gRPQW: function (Rw, RB) {
      return Rw === RB;
    },
    bnImN: "dkBDe",
    QQfnh: function (Rw, RB) {
      return Rw === RB;
    },
    hLPCk: function (Rw, RB) {
      return Rw === RB;
    },
    oBBBj: "BNrCV",
    MJBHL: "NauuY",
    XQXAA: "pwqDb",
    JDnTs: function (Rw, RB) {
      return Rw(RB);
    },
    qSpZi: function (Rw) {
      return Rw();
    },
    hbJIt: function (Rw, RB) {
      return Rw !== RB;
    },
    ALSrB: "mRVuh",
    ukQff: function (Rw, RB) {
      return Rw !== RB;
    },
    rzNIZ: function (Rw, RB) {
      return Rw === RB;
    },
    BUhcp: function (Rw, RB) {
      return Rw === RB;
    },
    orIlG: function (Rw, RB) {
      return Rw === RB;
    },
    ZBUin: "log",
    dAbIU: "warn",
    Ljnuf: "info",
    qTKtD: "error",
    bGOXj: "exception",
    PJOyN: "table",
    ViZwP: "trace",
    DVVHR: function (Rw, RB) {
      return Rw < RB;
    },
    dNTHQ: function (Rw, RB) {
      return Rw !== RB;
    },
    dtwqS: "FYyol",
    sRvhN: "Ixxmc",
    EEgsm: function (Rw, RB) {
      return Rw !== RB;
    },
    gvmxH: "vEVgU",
    MIIWo: "mIDaZ",
    jNheB: function (Rw, RB, Rg) {
      return Rw(RB, Rg);
    }
  };
  const R3 = function () {
    function RB(RK, RW, Rq) {
      return RR(RK - 1040, RW - 22, Rq);
    }
    const Rg = {
      aYZOf: function (RK, RW) {
        return R2.sdOnW(RK, RW);
      },
      iXjpO: function (RK, RW) {
        return R2.ffgtj(RK, RW);
      },
      aaMBj: function (RK, RW) {
        return R2.CvgIt(RK, RW);
      }
    };
    function Rj(RK, RW, Rq) {
      return RR(RK - 989, RW - 463, RW);
    }
    if (R2.KCote(R2.DAxMM, R2.ekeOY)) {
      if (NxmQMo.zNNfZ(R.length, R0.length) || NxmQMo.KCote(R2.indexOf("."), 0)) {
        R3 = true;
      }
    } else {
      let RK = true;
      return function (RW, Rq) {
        function RM(Ry, Rx, RL) {
          return RB(Ry - -281, Rx - 476, Rx);
        }
        const Rd = {
          lmPrV: function (Ry, Rx) {
            return R2.WQAdz(Ry, Rx);
          },
          CkrZv: R2.kTyoR,
          MphoV: R2.RanCm,
          MeYfX: function (Ry, Rx) {
            return R2.fczHL(Ry, Rx);
          },
          BYnQI: R2.KCDOD,
          uDPGP: R2.KBrfL,
          ItqTN: function (Ry, Rx) {
            return R2.kFNiL(Ry, Rx);
          }
        };
        function RI(Ry, Rx, RL) {
          return RB(Ry - -1120, Rx - 104, Rx);
        }
        if (R2.KCote(R2.IljYf, R2.IljYf)) {
          const Ry = RK ? function () {
            const RY = {
              iiqbS: function (Rm, Rz) {
                return Rd.lmPrV(Rm, Rz);
              },
              KcJtp: Rd.CkrZv,
              gLqJf: Rd.MphoV
            };
            if (Rd.MeYfX(Rd.BYnQI, Rd.uDPGP)) {
              a.error(snQYQn.iiqbS(snQYQn.iiqbS(snQYQn.KcJtp, R), snQYQn.gLqJf), R0);
            } else if (Rq) {
              const Rm = Rq.apply(RW, arguments);
              Rq = null;
              return Rm;
            }
          } : function () {};
          RK = false;
          return Ry;
        } else {
          let Rx = RW.keys(Rq);
          if (xuZxZW.aYZOf(Rx.length, Rd.keys.length) || Rx.some((RL, Rm) => RL !== RM.keys[Rm])) {
            let RL = new RM(Rd.keys);
            for (let RY of Rx) {
              if (!RL.has(RY)) {
                delete RI[RY];
              }
            }
          }
          RR.keys.forEach((Rr, Rm) => {
            if (EiRpfx.ItqTN(Rx[Rr], Rx.vals[Rm])) {
              RL[Rr] = RY.vals[Rm];
            }
          });
          if (xuZxZW.iXjpO(Rg.len, 0) && xuZxZW.aaMBj(Rj.length, RK.len)) {
            RW.length = Rq.len;
          }
        }
      };
    }
  }();
  const R4 = R2.jNheB(R3, this, function () {
    const RW = {
      rnoIq: R2.GOXoI,
      XiTVc: function (Ro, RA) {
        return R2.wPJAO(Ro, RA);
      },
      PuXaH: function (Ro, RA) {
        return R2.dkNzh(Ro, RA);
      },
      htyDM: function (Ro, RA) {
        return R2.duSVU(Ro, RA);
      },
      QwwTY: function (Ro, RA) {
        return R2.VTjuQ(Ro, RA);
      },
      NUziK: function (Ro, RA) {
        return R2.dkNzh(Ro, RA);
      },
      TtYUH: function (Ro, RA) {
        return R2.egcWZ(Ro, RA);
      },
      aywHc: R2.dSvtB,
      cwgaM: function (Ro, RA) {
        return R2.GEdVR(Ro, RA);
      },
      Kszeg: function (Ro, RA) {
        return R2.ugYiR(Ro, RA);
      },
      cbrnQ: R2.zVTOn,
      UBYhj: R2.GHSet,
      WQnqL: R2.yvhou,
      jpLbm: function (Ro) {
        return R2.JxDIg(Ro);
      },
      donPB: R2.TPLlg,
      yWCsB: R2.nVfXZ,
      PInab: R2.MCeor,
      ENVvY: function (Ro, RA) {
        return R2.gjnoa(Ro, RA);
      },
      RlvCN: R2.JoLiu,
      boveZ: function (Ro, RA) {
        return R2.nwrRU(Ro, RA);
      },
      xeYCw: function (Ro, RA) {
        return R2.WQAdz(Ro, RA);
      },
      qFHFn: R2.ccwCv,
      HshCA: R2.iqrZz,
      ibsAA: R2.rgMmP,
      pymbe: R2.SnslJ,
      oclZa: function (Ro, RA) {
        return R2.OGZLC(Ro, RA);
      }
    };
    if (R2.wcZem(R2.qZrRW, R2.qZrRW)) {
      const Ro = R2.egcWZ(typeof window, R2.wexav) ? window : R2.HoQRI(typeof process, R2.SYaTR) && R2.pDEmv(typeof require, R2.HnTQH) && R2.fczHL(typeof global, R2.SYaTR) ? global : this;
      const RA = new RegExp(R2.hjUez, "g");
      const Ru = R2.tZVST.replace(RA, "").split(";");
      let RE;
      let RU;
      let Rs;
      let Rv;
      const RV = function (RT, RJ, RX) {
        if (RW.NUziK(RT.length, RJ)) {
          if (RW.TtYUH(RW.aywHc, RW.aywHc)) {
            R4.reload = true;
            R3.what = RW.rnoIq;
          } else {
            return false;
          }
        }
        for (let RF = 0; RW.cwgaM(RF, RJ); RF++) {
          if (RW.Kszeg(RW.cbrnQ, RW.UBYhj)) {
            if (fGnwKf.XiTVc(R, R3[R4]) && fGnwKf.PuXaH(R6.charCodeAt(R8), RC[fGnwKf.htyDM(RZ, 1)])) {
              return false;
            }
          } else {
            for (let Rp = 0; RW.cwgaM(Rp, RX.length); Rp += 2) {
              if (RW.TtYUH(RW.WQnqL, RW.WQnqL)) {
                R.push(R0);
                fGnwKf.QwwTY(R2, R);
              } else if (RW.XiTVc(RF, RX[Rp]) && RW.PuXaH(RT.charCodeAt(RF), RX[RW.htyDM(Rp, 1)])) {
                return false;
              }
            }
          }
        }
        return true;
      };
      const Re = function (RT, RJ, RX) {
        if (R2.CvgIt(R2.nbpiP, R2.nbpiP)) {
          return fGnwKf.jpLbm(g);
        } else {
          return R2.FfzbV(RV, RJ, RX, RT);
        }
      };
      const Rn = function (RT, RJ, RX) {
        return R2.MBCcW(Re, RJ, RT, RX);
      };
      const Rb = function (RT, RJ, RX) {
        const RQ = {
          SuiCn: function (Rp, RG) {
            return R2.AVcRR(Rp, RG);
          }
        };
        if (R2.kFNiL(R2.ONiGH, R2.ONiGH)) {
          for (let Rp of RV.keys(Re)) {
            delete Rn[Rp];
          }
          RW.defineProperties(Ro, RA);
          JcgHUB.SuiCn(Ru, RE);
          RU.assign(Rs, Rv);
        } else {
          return R2.FfzbV(Rn, RJ, RX, RT);
        }
      };
      for (let RT in Ro) {
        if (R2.nwrRU(R2.yiWNJ, R2.yiWNJ)) {
          if (fGnwKf.TtYUH(R3[R4], R6.vals[R8])) {
            RC[RZ] = RW.vals[Ro];
          }
        } else if (R2.ajugV(RV, RT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          if (R2.IATuM(R2.PHpTB, R2.oTHIf)) {
            RE = RT;
            break;
          } else {
            return false;
          }
        }
      }
      for (let RJ in Ro[RE]) {
        if (R2.cdPht(Rb, 6, RJ, [5, 110, 0, 100])) {
          RU = RJ;
          break;
        }
      }
      for (let RX in Ro[RE]) {
        if (R2.MBCcW(Rn, RX, [7, 110, 0, 108], 8)) {
          if (R2.CvgIt(R2.UbyQN, R2.YiCaX)) {
            Rs = RX;
            break;
          } else {
            if (!NxmQMo.QDnvz(RW, Ro) || RA.has(Ru)) {
              return;
            }
            let RQ = RE.keys(RU);
            Rs.set(Rv, {
              len: RV.isArray(Re) ? Rn.length : -1,
              keys: RQ,
              vals: RQ.map(Rc => Rl[Rc])
            });
            for (let Rc of RQ) {
              NxmQMo.QDnvz(Rl, RS[Rc]);
            }
          }
        }
      }
      if (!R2.PlQpO("~", RU)) {
        if (R2.PdJRj(R2.CyQyo, R2.CyQyo)) {
          for (let Rh in Ro[RE][Rs]) {
            if (R2.VzPlF(R2.eFWIC, R2.vUuKT)) {
              if (R2.LOMYI(Re, [7, 101, 0, 104], Rh, 8)) {
                Rv = Rh;
                break;
              }
            } else {
              if (!R[R3]) {
                throw new R4(NxmQMo.WQAdz(R6[R8].label, NxmQMo.VTHaJ));
              }
              return RC[RZ];
            }
          }
        } else {
          const RF = new R(fGnwKf.donPB, "g");
          const Rp = fGnwKf.yWCsB.replace(RF, "");
          R0[R2][R] = Rp;
        }
      }
      if (!RE || !Ro[RE]) {
        if (R2.mtxeK(R2.aQnoY, R2.aQnoY)) {
          const RG = R[R3];
          const Rt = NxmQMo.HoQRI(RG[0], R4.fromCharCode(46)) ? RG.slice(1) : RG;
          const Rk = NxmQMo.nbnTT(R6.length, Rt.length);
          const C0 = R8.indexOf(Rt, Rk);
          const C1 = NxmQMo.xHhIi(C0, -1) && NxmQMo.JvJOr(C0, Rk);
          if (C1 && (NxmQMo.YfDrb(RW.length, RG.length) || NxmQMo.JvJOr(RG.indexOf("."), 0))) {
            RA = true;
          }
        } else {
          return;
        }
      }
      const Rf = Ro[RE][RU];
      const RN = !!Ro[RE][Rs] && Ro[RE][Rs][Rv];
      const Rl = R2.guILt(Rf, RN);
      if (!Rl) {
        if (R2.VSGMF(R2.aMNlI, R2.YkXCM)) {
          return;
        } else {
          const C2 = {
            VTEUS: fGnwKf.PInab,
            tFtxa: function (CU, Cs) {
              return fGnwKf.htyDM(CU, Cs);
            },
            LjuOR: function (CU, Cs) {
              return fGnwKf.ENVvY(CU, Cs);
            },
            oWUcH: fGnwKf.RlvCN,
            tUhLa: function (CU, Cs) {
              return fGnwKf.boveZ(CU, Cs);
            },
            smROF: fGnwKf.rnoIq,
            LMWcr: function (CU, Cs) {
              return fGnwKf.xeYCw(CU, Cs);
            },
            JtBoV: fGnwKf.qFHFn,
            wQEoM: fGnwKf.HshCA
          };
          if (Rd[Ra]) {
            return RI.resolve(Ry[Rx]);
          }
          if (RL[C2]) {
            return CE[Rm];
          }
          let CE = Rz[Ri];
          if (CE) {
            RD[Ro] = fGnwKf.ibsAA;
            RO[RH] = CE.needs.reduce((CU, Cs) => CU.then(() => CU(Cs)), RA.resolve()).then(() => CE.load()).then(CU => {
              delete CE[RF];
              if (!Rp[RG]) {
                Rt(Rk, CU);
              }
              return C0[C1];
            }, CU => {
              delete CE[RF];
              Rp[RG] = C2.VTEUS;
              let Cf = new Rt(C2.tFtxa(C2.LjuOR(CE.label, C2.oWUcH), CU && CU.message || CU));
              Cf.what = CU && CU.what && C2.tUhLa(CU.what, C2.smROF) ? CU.what : C2.LMWcr(C2.LjuOR(C2.JtBoV, CE.label), C2.wQEoM);
              Cf.tries = CU && CU.tries;
              Cf.reload = !!CU && !!CU.reload;
              throw Cf;
            });
            return RT[RJ];
          } else {
            return RX.reject(new RQ(fGnwKf.htyDM(fGnwKf.pymbe, Rc)));
          }
        }
      }
      let RS = false;
      for (let CU = 0; R2.GEdVR(CU, Ru.length); CU++) {
        const Cs = Ru[CU];
        const Cv = R2.zXVJq(Cs[0], String.fromCharCode(46)) ? Cs.slice(1) : Cs;
        const Cb = R2.NpJwx(Rl.length, Cv.length);
        const Cf = Rl.indexOf(Cv, Cb);
        const CN = R2.CVKbT(Cf, -1) && R2.wcZem(Cf, Cb);
        if (CN) {
          if (R2.JvJOr(R2.HvFLh, R2.KdLyX)) {
            try {
              R2.reload = true;
              R.what = RW.rnoIq;
            } catch (Cl) {}
            throw R0;
          } else if (R2.vHIaz(Rl.length, Cs.length) || R2.wcZem(Cs.indexOf("."), 0)) {
            if (R2.gRPQW(R2.bnImN, R2.bnImN)) {
              RS = true;
            } else {
              const CS = {
                seed: RZ.seed,
                state: RW.state,
                calls: Ro.calls
              };
              return {
                g: fGnwKf.oclZa(R3, R4.fromEntries(R6.keys(R8).map(CT => [CT, RA[CT]]))),
                rng: CS
              };
            }
          }
        }
      }
    } else {
      return false;
    }
  });
  R2.JxDIg(R4);
  const R6 = function () {
    const Rg = {
      NBQEB: function (RW, Rq) {
        return R2.dkNzh(RW, Rq);
      },
      QGVlf: R2.SYaTR,
      dhAvj: function (RW, Rq) {
        return R2.QQfnh(RW, Rq);
      },
      uWAnU: function (RW, Rq) {
        return R2.hLPCk(RW, Rq);
      },
      cPuKc: R2.oBBBj,
      GCliA: R2.MJBHL,
      IAqko: R2.XQXAA
    };
    let RK = true;
    return function (RW, Rq) {
      const Rd = {
        pTPye: function (Rx, RL) {
          return Rg.NBQEB(Rx, RL);
        },
        nZTNf: Rg.QGVlf,
        UjBDO: function (Rx, RL) {
          return Rg.dhAvj(Rx, RL);
        },
        YbXJq: function (Rx, RL) {
          return Rg.uWAnU(Rx, RL);
        },
        ozIvP: Rg.cPuKc,
        fZuGJ: function (Rx, RL) {
          return Rg.dhAvj(Rx, RL);
        },
        czmvJ: Rg.GCliA,
        hsDRf: Rg.IAqko
      };
      const Ry = RK ? function () {
        if (Rd.YbXJq(Rd.ozIvP, Rd.ozIvP)) {
          if (Rq) {
            if (Rd.fZuGJ(Rd.czmvJ, Rd.hsDRf)) {
              return null;
            } else {
              const Rr = Rq.apply(RW, arguments);
              Rq = null;
              return Rr;
            }
          }
        } else {
          if (!R || jjJPur.pTPye(typeof R3, jjJPur.nZTNf)) {
            return false;
          }
          if (R4.isArray(R6)) {
            return true;
          }
          let Rm = R8.getPrototypeOf(RC);
          return jjJPur.UjBDO(Rm, RZ.prototype) || jjJPur.UjBDO(Rm, null);
        }
      } : function () {};
      RK = false;
      return Ry;
    };
  }();
  const R8 = R2.jNheB(R6, this, function () {
    function Rw(RK, RW, Rq) {
      return RR(RW - 1665, RW - 319, Rq);
    }
    function RB(RK, RW, Rq) {
      return RR(RK - -11, RW - 464, RW);
    }
    function Rg(RK, RW, Rq) {
      return RR(Rq - 1288, RW - 461, RK);
    }
    const Rj = {
      QaBTf: function (RK, RW, Rq, RM) {
        return R2.MBCcW(RK, RW, Rq, RM);
      }
    };
    if (R2.hbJIt(R2.ALSrB, R2.ALSrB)) {
      const RK = {
        seed: Rg.seed,
        state: Rj.state
      };
      RK.calls = RK.calls;
      let RW = RC.getOwnPropertyDescriptors(RZ);
      let Rq = NxmQMo.JDnTs(Rw, RB);
      let RM = RK;
      for (let Rd of RP.keys(RW)) {
        delete RA[Rd];
      }
      RM.assign(Rd, NxmQMo.AVcRR(Ra, RI.g));
      Ry.assign(Rx, RL.rng);
      try {
        return NxmQMo.qSpZi(Ru);
      } finally {
        for (let Ra of Rf.keys(RN)) {
          delete Rl[Ra];
        }
        Rv.defineProperties(RV, RW);
        NxmQMo.VTjuQ(Re, Rq);
        Rn.assign(Rb, RM);
      }
    } else {
      const RI = R2.ukQff(typeof window, R2.wexav) ? window : R2.rzNIZ(typeof process, R2.SYaTR) && R2.BUhcp(typeof require, R2.HnTQH) && R2.orIlG(typeof global, R2.SYaTR) ? global : this;
      const Ry = RI.console = RI.console || {};
      const Rx = [R2.ZBUin, R2.dAbIU, R2.Ljnuf, R2.qTKtD, R2.bGOXj, R2.PJOyN, R2.ViZwP];
      for (let RL = 0; R2.DVVHR(RL, Rx.length); RL++) {
        if (R2.dNTHQ(R2.dtwqS, R2.sRvhN)) {
          const RY = R6.constructor.prototype.bind(R6);
          const Rr = Rx[RL];
          const Rm = Ry[Rr] || RY;
          RY.__proto__ = R6.bind(R6);
          RY.toString = Rm.toString.bind(Rm);
          Ry[Rr] = RY;
        } else {
          return tXmHBj.QaBTf(R, R0, R2, R);
        }
      }
    }
  });
  R2.JxDIg(R8);
  function RR(Rw, RB, Rg) {
    return __DECODE_0__(Rw - -415 - -412, Rg);
  }
  var RC = new URL(R, R0).href;
  var RZ = globalThis.__drWarm;
  return (RZ ? R2.JDnTs(RZ, RC) : Promise.resolve()).then(function () {
    return import(RC).catch(function (Rw) {
      try {
        if (R2.EEgsm(R2.gvmxH, R2.MIIWo)) {
          Rw.reload = true;
          Rw.what = R2.GOXoI;
        } else {
          g = true;
        }
      } catch (RK) {}
      throw Rw;
    });
  });
}
