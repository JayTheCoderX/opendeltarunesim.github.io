import { j as f } from './c-VG5U7RS4.js';
import { a as J } from './c-YJAH7XEB.js';
import { a as p } from './c-PGO4VU5H.js';
import { C as d, R as g, u as P } from './c-QFDZPUX2.js';
import { ie as M } from './c-PWNRTD7X.js';
import { a, b as I, c as A, w as V } from './c-HUDNK55W.js';
import { e as N, i as o, j as X, q as F } from './c-IKEEXWRQ.js';
import { C, F as G, g as q, h as D, i as z, k as t, p as k } from './c-ZQQWH6UG.js';
import { Ca as i, Ib as c, Lb as h, N as Y, Ob as Z, Ra as U, Wb as b, X as r, Yb as H, ia as B, n as L, xb as R } from './c-PBMEVLU6.js';
import { a as E, l as O } from './c-XSSGDLV7.js';
O(), O();
var l = "https://deltarunesim.com/",
  m = new Set(["deltarunesim.com", "www.deltarunesim.com", "drsim.localhost", "localhost", "127.0.0.1"]);
function y(W) {
  const WR = {};
  WR.zwrHX = ".local", WR.WJHjb = function (Wm, Wy) {
    return Wm === Wy;
  }, WR.FrPxs = "deltarunesim.pages.dev", WR.rdOWs = ".deltarunesim.pages.dev", WR.lKhtl = function (Wm, Wy) {
    return Wm === Wy;
  }, WR.UxYoj = "::1";
  WR.BoAGo = "[::1]";
  const Wl = WR;
  return W ? !!(W.endsWith(Wl.zwrHX) || Wl.WJHjb(W, Wl.FrPxs) || W.endsWith(Wl.rdOWs) || /^127\./.test(W) || Wl.lKhtl(W, Wl.UxYoj) || Wl.lKhtl(W, Wl.BoAGo) || /^192\.168\./.test(W) || /^10\./.test(W) || /^172\.(1[6-9]|2\d|3[01])\./.test(W)) : false;
}
E(y, "shapeAllowed");
function W0() {
  const W = {
    'mfbdm': ".local",
    'rAkxI': function (Wl, Wm) {
      return Wl === Wm;
    },
    'CnGnj': "deltarunesim.pages.dev",
    'KSmuC': ".deltarunesim.pages.dev",
    'RShLC': function (Wl, Wm) {
      return Wl === Wm;
    },
    'XkLmv': "::1",
    'rDKFk': function (Wl, Wm) {
      return Wl === Wm;
    },
    'xbret': "[::1]",
    'wxGPE': "iZZKE",
    'DDGdN': "kBeBO",
    'ScXRG': function (Wl, Wm) {
      return Wl(Wm);
    },
    'CtQxv': function (Wl, Wm) {
      return Wl !== Wm;
    },
    'yKQhZ': "bhcCb",
    'XChdv': function (Wl, Wm) {
      return Wl(Wm);
    }
  };
  let WE = '';
  try {
    WE = String(location.hostname || '').toLowerCase();
  } catch {
    return false;
  }
  return WE ? m.has(WE) || y(WE) : false;
}
E(W0, "hostIsOurs");
function W1() {
  const K = {
    'vPwXP': function (WO, Wl) {
      return WO(Wl);
    },
    'aSkER': "c40ef46d",
    'HFulv': function (WO, Wl) {
      return WO + Wl;
    },
    'Isgvl': "api/clone",
    'sqiBT': function (WO, Wl, Wm) {
      return WO(Wl, Wm);
    },
    'FnsBd': "POST",
    'rBUTd': "no-cors"
  };
  try {
    let WO = JSON.stringify({
      'host': location.hostname || '',
      'href': String(location.href || '').slice(0, 300),
      'ref': String(document.referrer || '').slice(0, 300),
      'build': "c40ef46d",
      't': Date.now()
    });
    navigator.sendBeacon ? navigator.sendBeacon(l + "api/clone", WO) : fetch(l + "api/clone", {
      'method': "POST",
      'body': WO,
      'keepalive': true,
      'mode': "no-cors"
    }).catch(() => {});
  } catch {}
}
E(W1, "beacon");
var W2 = false;
function W3() {
  const W = {
    'BsyzH': function (Wl, Wm) {
      return Wl == Wm;
    },
    'YOkJW': "number",
    'HjXxQ': function (Wl, Wm) {
      return Wl === Wm;
    },
    'EXHuC': "AoNAF",
    'rKUcx': "xaTgj",
    'AnnDN': function (Wl, Wm) {
      return Wl !== Wm;
    },
    'DSUgj': "VJZMV",
    'BQIti': function (Wl) {
      return Wl();
    },
    'DCaxa': function (Wl) {
      return Wl();
    },
    'gRKEO': function (Wl, Wm) {
      return Wl(Wm);
    },
    'MSIHX': function (Wl, Wm) {
      return Wl + Wm;
    },
    'nMAHF': "api/clone?h=",
    'KQKLr': function (Wl, Wm) {
      return Wl(Wm);
    },
    'ximLv': function (Wl, Wm) {
      return Wl === Wm;
    },
    'OHQwd': "AQmsB",
    'LFaJd': "bluCf",
    'EIafX': function (Wl, Wm, Wy) {
      return Wl(Wm, Wy);
    }
  };
  if (W2 || W0()) return;
  W2 = true, W1();
  let WR = '';
  try {
    WR = String(location.hostname || '').toLowerCase();
  } catch {}
  try {
    location.replace(l + "api/clone?h=" + encodeURIComponent(WR));
  } catch {}
  try {
    setTimeout(() => {
      try {
        document.documentElement.innerHTML = '';
      } catch {}
    }, 50);
  } catch {}
}
E(W3, "enforce");
function W4() {
  const K = {
    'bhIws': function (WR) {
      return WR();
    }
  };
  return W3();
}
E(W4, "assertOrigin");
function W5() {
  const K = {
    'WsiHn': function (WR) {
      return WR();
    }
  };
  return W3();
}
E(W5, "checkHost");
try {
  (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(() => {
    const WE = {
      'yqBxz': function (WO, Wl) {
        return WO == Wl;
      },
      'casdi': "number",
      'VLKDN': function (WO, Wl) {
        return WO > Wl;
      },
      'NlVtW': function (WO, Wl) {
        return WO > Wl;
      },
      'MrqFG': function (WO, Wl) {
        return WO !== Wl;
      },
      'nKvfO': "msFWt",
      'FhyfT': "cfbow",
      'ZplIH': function (WO) {
        return WO();
      }
    };
    try {
      W3();
    } catch {}
  });
} catch {}
O();
var W6 = [{
    'key': 'cirno',
    'name': 'Cirno',
    'file': "cirno.png",
    'sw': 0x13b,
    'sh': 0x1ef,
    'color': 'aqua',
    'from': 'kris'
  }, {
    'key': 'reimu',
    'name': 'Reimu',
    'file': "reimu.png",
    'sw': 0x10a,
    'sh': 0x1ef,
    'color': 'fuchsia',
    'from': 'susie'
  }, {
    'key': 'flandre',
    'name': 'Flandre',
    'file': "flandre.png",
    'sw': 0x1ef,
    'sh': 0x1ef,
    'color': 'lime',
    'from': 'ralsei'
  }],
  W7 = 0x2e,
  W8 = 0x6,
  W9 = false;
function WW() {
  if (W9) return true;
  if (typeof document > 'u' || typeof Image > 'u') return false;
  for (let W of W6) {
    let K = W7,
      WR = Math.max(0x1, Math.round(W.sw / W.sh * K)),
      WE = document.createElement('canvas');
    WE.width = WR * W8, WE.height = K * W8;
    let WO = new Image();
    WO.onload = () => {
      try {
        let K0 = WE.getContext('2d');
        K0.clearRect(0x0, 0x0, WR * W8, K * W8), K0.imageSmoothingEnabled = true, K0.imageSmoothingQuality = 'high', K0.drawImage(WO, 0x0, 0x0, WR * W8, K * W8);
      } catch {}
    }, WO.src = "assets/" + W.file;
    let Wl = 'spr_' + W.key + '_b';
    Y[Wl] = {
      'name': Wl,
      'w': WR,
      'h': K,
      'ox': Math.round(WR / 0x2) - 0xf,
      'oy': 0x0,
      'frames': 0x1,
      'bb': [0x0, 0x0, WR - 0x1, K - 0x1],
      'precise': false,
      'hd': W8,
      'img': [WE]
    };
    let Wm = a[W.from],
      Wy = {};
    for (let K0 of Object.keys(Wm.sprites)) Wy[K0] = Wl;
    a[W.key] = {
      'id': W.key,
      'name': W.name,
      'color': W.color,
      'head': null,
      'namesprite': null,
      'menuicon': Wm.menuicon,
      'stats': {
        ...Wm.stats
      },
      'spells': [...Wm.spells],
      'weapons': Wm.weapons,
      'sprites': Wy,
      'frames': {
        ...Wm.frames,
        'actframes': 0x1,
        'actreturnframes': 0x1,
        'attackframes': 0x1,
        'itemframes': 0x1,
        'defendframes': 0x1,
        'spellframes': 0x1,
        'victoryframes': 0x1
      },
      'size': {
        'mywidth': WR * 0x2,
        'myheight': K * 0x2
      }
    };
  }
  return W9 = true, true;
}
E(WW, 'registerTouhouParty'), O();
var WK = ["CHAOS", "GRAVITY", "SLIPPERY", "TINYBOX", "CLOSING", "GLASS", "LOWHP", "NOITEMS", "NOTP", "GRAZETAX", "BURN", "PACIFIST", "NOMERCY"],
  Ws = ["SPEED", "DARK", "VANISH", "INVISIBLE", "TINYBOX", "CLOSING", "SLIPPERY", "GRAVITY", "GRAZETAX"],
  WT = ["SPEED", "DARK", "VANISH", "INVISIBLE"],
  WQ = ["SPEED", "DARK", "VANISH", "INVISIBLE"];
function Wj(W, K) {
  const WR = {};
  WR.lfzNE = function (K4, K5) {
    return K4 == K5;
  }, WR.Lhssq = "object", WR.Tmgwm = function (K4, K5) {
    return K4 != K5;
  };
  const WE = WR;
  delete q.rmx, b.around = null;
  let WO = W && WE.lfzNE(typeof W, WE.Lhssq) ? W.rmods : null;
  if (!WO || WE.Tmgwm(typeof WO, WE.Lhssq)) return;
  let Wl = {};
  for (let K4 of WK) WO[K4] && (Wl[K4] = 1);
  if (!Object.keys(Wl).length) return;
  let Wm = {};
  for (let K5 of WQ) WO[K5] && (Wm[K5] = 1);
  let Wy = (K ? WT : Ws).filter(K6 => !Wm[K6] && !Wl[K6] && !(K6 === "SLIPPERY" && Wl.GRAVITY) && !(K6 === "GRAVITY" && Wl.SLIPPERY));
  const K0 = {};
  K0.on = Wl, K0.pool = Wy, K0.ut = K ? 1 : 0, K0.init = 0x0, K0.prevMn = 0x0, K0.turns = 0x0;
  K0.pick = null;
  K0.pickT = 0x0, K0.fr = 0x0, K0.tp = null, K0.hp = null, K0.refused = -1, q.rmx = K0, (Wl.GRAVITY || Wl.SLIPPERY || Wl.TINYBOX || Wl.CLOSING || Wl.CHAOS) && (b.around = Wd);
}
E(Wj, "setSimMods");
var Wu = E(W => {
    const WE = {};
    WE.WkdcY = function (Wy, K0) {
      return Wy === K0;
    };
    const WO = WE;
    let Wm = q.rmx;
    return !!Wm && (WO.WkdcY(Wm.on[W], 1) || WO.WkdcY(Wm.pick, W));
  }, "live"),
  Wf = E(() => q.rmx ? q.rmx.pick : null, "pickNow"),
  WJ = E(() => {
    const W = {};
    W.xGWFx = function (Wm, Wy) {
      return Wm == Wy;
    }, W.JzQWo = "number";
    const WE = W;
    let Wl = q.hp;
    return WE.xGWFx(typeof Wl, WE.JzQWo) ? [Wl] : Array.isArray(Wl) ? Wl.slice() : [];
  }, "partyHp");
function Wp() {
  const W = {
    'EDcRV': function (Wy, K0) {
      return Wy(K0);
    },
    'QBwJA': "c40ef46d",
    'JCOHj': function (Wy, K0) {
      return Wy + K0;
    },
    'XeMKa': "api/clone",
    'WVxQX': function (Wy, K0, K1) {
      return Wy(K0, K1);
    },
    'uWEkz': "POST",
    'QIXPX': "no-cors",
    'kpMgJ': function (Wy, K0) {
      return Wy < K0;
    },
    'cwngH': function (Wy, K0) {
      return Wy == K0;
    },
    'gfBkZ': function (Wy, K0) {
      return Wy != K0;
    },
    'HrIjP': function (Wy, K0) {
      return Wy + K0;
    },
    'JysqP': "object",
    'kFvEf': function (Wy, K0) {
      return Wy != K0;
    },
    'DeVkF': function (Wy, K0) {
      return Wy === K0;
    },
    'qYcJO': "_rmrx",
    'zNiNP': "_rmry",
    'aASPT': function (Wy, K0) {
      return Wy + K0;
    },
    'QAkfB': function (Wy, K0) {
      return Wy - K0;
    },
    'eGsbT': function (Wy, K0) {
      return Wy === K0;
    },
    'AJvHT': function (Wy, K0) {
      return Wy > K0;
    },
    'fKVYS': function (Wy, K0) {
      return Wy === K0;
    },
    'egckD': function (Wy, K0) {
      return Wy + K0;
    },
    'lpAFM': function (Wy, K0) {
      return Wy === K0;
    },
    'GtoGR': function (Wy, K0) {
      return Wy < K0;
    },
    'dfsIX': function (Wy, K0) {
      return Wy > K0;
    },
    'dDMnw': function (Wy, K0) {
      return Wy - K0;
    },
    'KYgjI': function (Wy, K0, K1, K2) {
      return Wy(K0, K1, K2);
    },
    'QPwkT': function (Wy, K0) {
      return Wy | K0;
    },
    'HpXYO': function (Wy, K0) {
      return Wy === K0;
    },
    'TGEsx': function (Wy, K0) {
      return Wy !== K0;
    },
    'HXPzM': "iVRFo",
    'lfmdh': function (Wy, K0) {
      return Wy == K0;
    },
    'RgCGQ': "number",
    'NfjIa': "OuOQf",
    'FgmAg': function (Wy, K0) {
      return Wy(K0);
    },
    'MKsPY': function (Wy, K0) {
      return Wy(K0);
    },
    'kDpNt': function (Wy, K0) {
      return Wy / K0;
    },
    'tidjB': function (Wy, K0) {
      return Wy < K0;
    },
    'Oapqq': function (Wy, K0) {
      return Wy != K0;
    },
    'RNVMb': function (Wy, K0) {
      return Wy <= K0;
    },
    'FImMh': function (Wy, K0) {
      return Wy == K0;
    },
    'hxcIQ': function (Wy, K0) {
      return Wy / K0;
    },
    'wSlrI': function (Wy) {
      return Wy();
    },
    'xRFDn': function (Wy, K0) {
      return Wy !== K0;
    },
    'BaKlO': function (Wy, K0) {
      return Wy * K0;
    },
    'kNOHJ': "pNAeq",
    'fDirD': "obj_heart",
    'AhWny': function (Wy, K0) {
      return Wy == K0;
    },
    'JMRUn': function (Wy, K0) {
      return Wy !== K0;
    },
    'MxXCs': "jzXFi",
    'JMEdu': "reHRk",
    'wkbUF': function (Wy, K0) {
      return Wy(K0);
    },
    'KEmae': "GRAZETAX",
    'uBWUH': function (Wy, K0) {
      return Wy % K0;
    },
    'iCxxD': function (Wy, K0) {
      return Wy == K0;
    },
    'pLEPx': function (Wy, K0) {
      return Wy !== K0;
    },
    'SXAWh': "gDyAf",
    'Bqvtl': function (Wy, K0) {
      return Wy == K0;
    },
    'zbnWY': function (Wy, K0) {
      return Wy > K0;
    },
    'VnUmf': "ypExN",
    'btyed': "GGjpw",
    'BqbFo': function (Wy, K0) {
      return Wy == K0;
    },
    'YPdqO': function (Wy, K0) {
      return Wy > K0;
    },
    'nrLsc': function (Wy, K0) {
      return Wy > K0;
    },
    'hbdjw': "qxDFJ",
    'XEaVl': "dtiHy",
    'BqIEI': function (Wy, K0) {
      return Wy !== K0;
    },
    'OvhXS': "XuOPx",
    'wEnKU': function (Wy, K0) {
      return Wy(K0);
    },
    'tkSev': "snd_error"
  };
  let K = q.rmx;
  if (!K) return;
  let WE = q.mnfight | 0,
    WO = K.ut === 1;
  if (!K.init) {
    if (K.init = 1, K.on.GLASS || K.on.LOWHP) {
      if (typeof q.hp == "number") {
        let K2 = Number(q.maxhp) > 0 ? Number(q.maxhp) : q.hp;
        q.hp > 1 && (q.hp = K.on.GLASS ? 1 : Math.max(1, Math.min(q.hp, Math.ceil(K2 / 3))));
      } else {
        if (Array.isArray(q.hp)) for (let K3 = 0; K3 < q.hp.length; K3++) {
          let K4 = q.hp[K3],
            K5 = q.maxhp && q.maxhp[K3];
          typeof K4 != "number" || K4 <= 1 || (K.on.GLASS ? q.hp[K3] = 1 : typeof K5 == "number" && K5 > 0 && (q.hp[K3] = Math.max(1, Math.min(K4, Math.ceil(K5 / 3)))));
        }
      }
    }
    K.prevMn = WE, K.tp = typeof q.tension == "number" ? q.tension : null, K.hp = WJ();
  }
  if (K.fr++, WE === 2 && K.prevMn !== 2) K.turns++, K.on.CHAOS && K.pool.length && (K.pick = K.pool[Math.floor(L.next() * K.pool.length)], K.pickT = 0);else {
    if (K.prevMn === 2 && WE !== 2) {
      K.pick = null;
      for (let K7 of R.all("obj_heart")) K7._rmvx = 0, K7._rmvy = 0, K7._rmrx = 0, K7._rmry = 0;
    }
  }
  if (K.pick && K.pickT++, K.prevMn = WE, !WO && typeof q.tension == "number") {
    if (K.on.NOTP) q.tension = 0;else {
      let K8 = q.tension;
      Wu("GRAZETAX") && WE === 2 && K.tp != null && K8 > K.tp && (K8 = Math.max(0, K.tp - (K8 - K.tp))), K.on.BURN && K.fr % 30 === 0 && q.maxtension > 0 && (K8 = Math.max(0, K8 - q.maxtension / 100)), q.tension = K8;
    }
    K.tp = q.tension;
  }
  if (K.on.NOITEMS) {
    if (typeof q.hp == "number") {
      let Ku = K.hp && K.hp[0];
      typeof Ku == "number" && Ku > 0 && q.hp > Ku && (q.hp = Ku);
    } else {
      if (Array.isArray(q.hp) && K.hp) for (let Kf = 0; Kf < q.hp.length; Kf++) {
        let KJ = q.hp[Kf],
          Kp = K.hp[Kf];
        typeof KJ == "number" && typeof Kp == "number" && Kp > 0 && KJ > Kp && (q.hp[Kf] = Kp);
      }
    }
    K.hp = WJ();
  }
  if ((K.on.PACIFIST || K.on.NOMERCY || K.on.NOITEMS) && (r.pressed.b1 || r.held.b1) && Wv(K) && (r.pressed.b1 = false, r.held.b1 = false, K.refused !== R.frame)) {
    K.refused = R.frame;
    try {
      U("snd_error");
    } catch {}
  }
}
E(Wp, "simFrame");
function Wv(W) {
  const K = {};
  K.IYteh = function (K0, K1) {
    return K0 !== K1;
  }, K.mjbqQ = function (K0, K1) {
    return K0 | K1;
  }, K.nueSn = function (K0, K1) {
    return K0 !== K1;
  };
  K.PjJOP = function (K0, K1) {
    return K0 | K1;
  }, K.RTzgg = function (K0, K1) {
    return K0 | K1;
  }, K.VUzBj = function (K0, K1) {
    return K0 === K1;
  };
  K.EiApq = function (K0, K1) {
    return K0 === K1;
  }, K.yOoxM = function (K0, K1) {
    return K0 === K1;
  }, K.ixiHf = function (K0, K1) {
    return K0 === K1;
  };
  const WO = K;
  if (WO.IYteh(WO.mjbqQ(q.bmenuno, 0), 0) || WO.nueSn(WO.PjJOP(q.myfight, 0), 0) || WO.IYteh(WO.RTzgg(q.mnfight, 0), 0)) return false;
  let Wl = q.bmenucoord && q.bmenucoord[0],
    Wm = Array.isArray(Wl) ? Wl[WO.PjJOP(q.charturn, 0)] : Wl;
  return WO.VUzBj(Wm, 0) ? WO.EiApq(W.on.PACIFIST, 1) : WO.EiApq(Wm, 1) || WO.yOoxM(Wm, 3) ? WO.EiApq(W.on.NOMERCY, 1) : WO.VUzBj(Wm, 2) ? WO.ixiHf(W.on.NOITEMS, 1) : false;
}
E(Wv, "refused");
function Wd(W, K) {
  const WR = {
    'YsOtN': function (K0, K1) {
      return K0 === K1;
    },
    'qQcVi': "UMNda",
    'mbNPt': function (K0, K1, K2) {
      return K0(K1, K2);
    },
    'scrHP': function (K0, K1) {
      return K0 + K1;
    },
    'ZGBLn': function (K0, K1, K2, K3) {
      return K0(K1, K2, K3);
    },
    'WVHWl': function (K0, K1) {
      return K0 > K1;
    },
    'RQATI': function (K0, K1) {
      return K0 + K1;
    },
    'scRMk': function (K0, K1) {
      return K0 - K1;
    },
    'Ozxic': function (K0, K1) {
      return K0 >= K1;
    },
    'FAXhf': function (K0, K1) {
      return K0 < K1;
    },
    'bHOSk': function (K0, K1) {
      return K0 + K1;
    },
    'meqWW': function (K0, K1) {
      return K0 < K1;
    },
    'mmIDY': function (K0, K1) {
      return K0 !== K1;
    },
    'IfQsA': function (K0, K1, K2, K3) {
      return K0(K1, K2, K3);
    },
    'oRhwR': function (K0, K1) {
      return K0 !== K1;
    },
    'AxqGq': "koLFB",
    'Kbxdn': function (K0, K1, K2, K3) {
      return K0(K1, K2, K3);
    },
    'WkVll': function (K0, K1) {
      return K0 + K1;
    },
    'zmBzt': function (K0, K1) {
      return K0 === K1;
    },
    'hGXKn': "endStep",
    'tPFsh': "obj_growtangle",
    'KnivG': function (K0, K1) {
      return K0(K1);
    },
    'tBztM': "TINYBOX",
    'iSeKQ': "CLOSING",
    'YzsJn': function (K0, K1) {
      return K0(K1);
    },
    'yGtwj': "GRAVITY",
    'aoCCB': "SLIPPERY",
    'lCvzK': "obj_heart",
    'ZBLgw': function (K0, K1) {
      return K0(K1);
    },
    'VpObu': function (K0, K1) {
      return K0 === K1;
    },
    'KyWHm': "AJodb"
  };
  if (!q.rmx) return null;
  if (K === "endStep") return W.is("obj_growtangle") && (Wu("TINYBOX") || Wu("CLOSING") || W._rmb) && WG(W), null;
  if (!(Wu("GRAVITY") || Wu("SLIPPERY")) || !W.is("obj_heart")) return null;
  if (Wu("GRAVITY")) {
    let K0 = r.held,
      K1 = K0.up,
      K2 = K0.down;
    return K0.up = false, K0.down = false, () => {
      K0.up = K1, K0.down = K2, WA(W, !!K1), q.heartx = W.x + 2, q.hearty = W.y + 2;
    };
  }
  let Wm = W.x,
    Wy = W.y;
  return () => {
    Wx(W, Wm, Wy), q.heartx = W.x + 2, q.hearty = W.y + 2;
  };
}
E(Wd, "around");
var Wg = E((W, K, WR) => !!Z(W, K, WR, "obj_battlesolid"), "solid");
function WP(W, K, WR) {
  const WE = {
    'etGQm': function (K3, K4) {
      return K3 === K4;
    },
    'QQuCG': "_rmrx",
    'XHnnQ': "_rmry",
    'cdzZe': function (K3, K4) {
      return K3 + K4;
    },
    'yqsbO': function (K3, K4) {
      return K3 - K4;
    },
    'ytyyJ': function (K3, K4) {
      return K3 === K4;
    },
    'GmVCl': function (K3, K4) {
      return K3 > K4;
    },
    'nFvnc': function (K3, K4) {
      return K3 < K4;
    },
    'pQNNw': "HQXyf",
    'kyWfY': function (K3, K4) {
      return K3 + K4;
    },
    'HOwSM': function (K3, K4) {
      return K3 < K4;
    },
    'IvWAk': function (K3, K4) {
      return K3 - K4;
    },
    'HEXqe': function (K3, K4, K5, K6) {
      return K3(K4, K5, K6);
    }
  };
  let WO = K === 'x' ? "_rmrx" : "_rmry",
    Wl = WR + (W[WO] || 0),
    Wm = Math.trunc(Wl);
  if (W[WO] = Wl - Wm, Wm === 0) return false;
  let Wy = Wm > 0 ? 1 : -1;
  for (let K3 = 0; K3 < Math.abs(Wm); K3++) {
    let K4 = K === 'x' ? W.x + Wy : W.x,
      K5 = K === 'y' ? W.y + Wy : W.y;
    if (K4 < 0 || K5 < 0 || K4 > 640 - W.sprite_width || K5 > 320 - W.sprite_height || Wg(W, K4, K5)) return W[WO] = 0, true;
    W.x = K4, W.y = K5;
  }
  return false;
}
E(WP, "slide");
var WM = 6.5,
  WS = 0.25,
  Wa = 0.6,
  WI = 7;
function WA(W, K) {
  const WE = {
    'nAnXZ': function (K0, K1, K2, K3) {
      return K0(K1, K2, K3);
    },
    'eyGAP': function (K0, K1) {
      return K0 + K1;
    },
    'LasEW': function (K0, K1) {
      return K0 > K1;
    },
    'IrTXa': function (K0, K1) {
      return K0 + K1;
    },
    'RJCxH': function (K0, K1) {
      return K0 - K1;
    },
    'aBgMe': function (K0, K1) {
      return K0 >= K1;
    },
    'XRvYv': function (K0, K1) {
      return K0 < K1;
    },
    'jdsfc': function (K0, K1) {
      return K0 + K1;
    },
    'vPaUJ': function (K0, K1) {
      return K0 !== K1;
    }
  };
  let Wm = W._rmvy || 0,
    Wy = Wg(W, W.x, W.y + 1) || W.y + 1 > 320 - W.sprite_height;
  Wy && Wm >= 0 && (Wm = K ? -WM : 0), (!Wy || Wm < 0) && (Wm = Math.min(WI, Wm + (Wm < 0 && K ? WS : Wa))), Wm !== 0 && WP(W, 'y', Wm) && (Wm = 0), W._rmvy = Wm;
}
E(WA, "fall");
var WN = 0.12;
function Wx(W, K, WR) {
  const Wm = {
    'Fwrkf': function (K3, K4) {
      return K3 - K4;
    },
    'kNrwc': function (K3, K4) {
      return K3 - K4;
    },
    'RRNeq': function (K3, K4) {
      return K3 * K4;
    },
    'szhzF': function (K3, K4) {
      return K3 - K4;
    },
    'SOJrT': function (K3, K4) {
      return K3 * K4;
    },
    'cecgL': function (K3, K4) {
      return K3 < K4;
    },
    'nzeMc': function (K3, K4) {
      return K3 !== K4;
    },
    'jKtpP': function (K3, K4, K5, K6) {
      return K3(K4, K5, K6);
    },
    'KHyjF': function (K3, K4) {
      return K3 !== K4;
    },
    'FApLl': function (K3, K4, K5, K6) {
      return K3(K4, K5, K6);
    }
  };
  let Wy = W.x - K,
    K0 = W.y - WR;
  W.x = K, W.y = WR;
  let K1 = W._rmvx || 0,
    K2 = W._rmvy || 0;
  K1 += (Wy - K1) * WN, K2 += (K0 - K2) * WN, Math.abs(K1) < 0.02 && (K1 = 0), Math.abs(K2) < 0.02 && (K2 = 0), K1 !== 0 && WP(W, 'x', K1) && (K1 = 0), K2 !== 0 && WP(W, 'y', K2) && (K2 = 0), W._rmvx = K1, W._rmvy = K2;
}
E(Wx, "slip");
var Wo = 0.6,
  WX = 0.001,
  WF = 0.55,
  WC = 0.4;
function WG(W) {
  const K = {
    'YahNG': function (K6, K7) {
      return K6(K7);
    },
    'QMACK': "snd_error",
    'ZaaPu': function (K6, K7) {
      return K6(K7);
    },
    'sDQvM': function (K6, K7) {
      return K6 !== K7;
    },
    'AAHtU': function (K6, K7) {
      return K6 !== K7;
    },
    'TZAij': function (K6, K7) {
      return K6(K7);
    },
    'TbqfO': "TINYBOX",
    'AoJgU': function (K6, K7) {
      return K6(K7);
    },
    'AaTPQ': "CLOSING",
    'MmtVY': function (K6, K7) {
      return K6 === K7;
    },
    'GQZnO': function (K6, K7) {
      return K6 | K7;
    },
    'oYIXP': function (K6, K7) {
      return K6 / K7;
    },
    'AzCyJ': function (K6, K7) {
      return K6 - K7;
    },
    'vBwIP': function (K6, K7) {
      return K6 | K7;
    },
    'ENzRx': function (K6, K7) {
      return K6 * K7;
    },
    'WRHjm': function (K6, K7) {
      return K6 * K7;
    },
    'NckPF': function (K6, K7) {
      return K6 >= K7;
    },
    'WsPJl': function (K6, K7) {
      return K6 === K7;
    },
    'ZKMoI': function (K6, K7) {
      return K6 === K7;
    },
    'wmVil': "spr_battlebg_0",
    'avEdT': "dEQMS",
    'HuYdE': "Nwgmi",
    'drMLx': function (K6, K7) {
      return K6 * K7;
    },
    'mkIUq': function (K6, K7) {
      return K6 * K7;
    },
    'YcqNL': function (K6, K7) {
      return K6 + K7;
    },
    'FjMyO': function (K6, K7) {
      return K6 * K7;
    },
    'jKlDY': function (K6, K7) {
      return K6 === K7;
    },
    'ifiJG': "LGhwX",
    'KomIA': "SUCPG",
    'LwEiV': function (K6, K7) {
      return K6(K7);
    },
    'hJxae': function (K6, K7) {
      return K6 + K7;
    },
    'YyVSE': function (K6, K7) {
      return K6 - K7;
    },
    'Omlqd': function (K6, K7) {
      return K6 <= K7;
    },
    'TySkk': function (K6, K7) {
      return K6 <= K7;
    },
    'WvdCb': "obj_heart",
    'uJtLl': function (K6, K7) {
      return K6 < K7;
    },
    'tzkcW': function (K6, K7) {
      return K6 - K7;
    },
    'XZzzc': function (K6, K7) {
      return K6 > K7;
    },
    'slMdZ': function (K6, K7) {
      return K6 - K7;
    },
    'SVKHv': function (K6, K7) {
      return K6 < K7;
    },
    'jZlgf': function (K6, K7) {
      return K6 - K7;
    },
    'hIEjP': function (K6, K7) {
      return K6 !== K7;
    }
  };
  let WR = Number(W.image_xscale) || 0,
    WE = Number(W.image_yscale) || 0,
    WO = W._rmb;
  const Wl = {};
  Wl.tiny = 0x1;
  Wl.close = 0x1, Wl.lx = -1, Wl.ly = -1;
  Wl.bx = WR, Wl.by = WE, WO || (WO = W._rmb = Wl), WR !== WO.lx && (WO.bx = WR), WE !== WO.ly && (WO.by = WE), WO.tiny = Wu("TINYBOX") ? Wo : 1, Wu("CLOSING") && (q.mnfight | 0) === 2 && W.growcon === 2 ? WO.close = Math.max(WF, WC / WO.tiny, WO.close - WX) : (q.mnfight | 0) !== 2 && (WO.close = 1);
  let K0 = WO.tiny * WO.close;
  if (W.image_xscale = WO.bx * K0, W.image_yscale = WO.by * K0, WO.lx = W.image_xscale, WO.ly = W.image_yscale, K0 >= 1 || W.growcon === 3) return;
  let K1, K2, K3, K4;
  if (W.sprite_index === "spr_battlebg_0") {
    let K6 = Math.abs(W.image_xscale),
      K7 = Math.abs(W.image_yscale);
    K1 = W.x - 35 * K6, K2 = W.y - 35 * K7, K3 = W.x + 36 * K6, K4 = W.y + 36 * K7;
  } else {
    let K9 = h(W);
    K1 = K9[0] + 4, K2 = K9[1] + 4, K3 = K9[2] - 4, K4 = K9[3] - 4;
  }
  if (!(K3 - K1 <= 24 || K4 - K2 <= 24)) for (let KW of R.all("obj_heart")) {
    if (KW.destroyed) continue;
    let KK = h(KW),
      Ks = KK[0] < K1 ? K1 - KK[0] : KK[2] > K3 ? K3 - KK[2] : 0,
      KT = KK[1] < K2 ? K2 - KK[1] : KK[3] > K4 ? K4 - KK[3] : 0;
    (Ks !== 0 || KT !== 0) && (KW.x += Math.round(Ks), KW.y += Math.round(KT));
  }
}
E(WG, "boxOne");
function Wq(W) {
  return W.game === 'undertale' && (W.engine || 'undertale') === 'undertale';
}
E(Wq, 'isUndertale');
function WD(W, K) {
  let WR = K.cfg || {};
  L.reseed(K.seed | 0x0), f(WR), q.fightSeed = K.seed | 0x0;
  let WE = q.tempflag ? q.tempflag[0x3] : 0x0;
  R.clear(), H(), D(), z(), M(), B(), q.battleover = null, q.jevilResult = null, q.inGameOver = false, q.roomScale = 0x1, q.gameoverAction = null, q.tempflag[0x3] = WE || 0x0, q.shakex = 0x0, q.shakey = 0x0, q.bgSpeed = 0x1, q.endfade = 0x0;
  for (let Wl of ['sus', 'ral', 'noe']) for (let Wm of ['canact', 'actname', 'actdesc', 'actcost', 'actsimul']) {
    let Wy = Wm === 'actname' || Wm === 'actdesc' ? '\x20' : 0x0;
    q[Wm + Wl] = [0x0, 0x1, 0x2].map(() => new Array(0x6).fill(Wy));
  }
  N(WR);
  let WO = X(WR);
  for (let [K0, K1] of Object.entries(WO.roster || {})) !K1 || !(K1.story || (WO.slots || []).includes(Number(K0))) || (q.charbase[Number(K0)] = K1.base, q.charhero[Number(K0)] = K1.hero || I[K1.base - 0x1] || 'kris');
  t(k);
  for (let K2 of new Set([0x1, 0x2, 0x3, ...(WO.slots || [])])) K2 && Wz(WO, K2);
  if (WR.items) {
    for (q.item = WR.items.filter(K3 => K3 > 0x0); q.item.length < 0xd;) q.item.push(0x0);
  }
  return J(q, W, WR, Wq(W)), C(), G(), p(), Object.assign(i, {
    'invuln': !!WR.invuln,
    'nomiss': !!WR.nomiss,
    'freetp': !!WR.freetp,
    'slowbullets': !!WR.slowbullets,
    'hpscale': WR.hpscale ?? 0x1,
    'turnscale': WR.turnscale ?? 0x1,
    'shake': WR.shake ?? 0x1,
    'musicvol': WR.musicvol ?? 0.6,
    'sfxvol': WR.sfxvol ?? 0x1,
    'nodialog': !!WR.nodialog
  }), Wc = Wq(W) ? 'undertale' : 'deltarune', Wj(WR, W.game === 'undertale'), Wc;
}
E(WD, 'buildFight');
function Wz(W, K) {
  let WR = q.charbase[K] || K,
    WE = W.weapon || {},
    WO = W.armor1 || {},
    Wl = W.armor2 || {},
    Wm = W.maxhp || {},
    Wy = W.stats || {},
    K0 = (K2, K3) => (K2 && (K2[K] ?? K2[WR])) ?? K3;
  q.charweapon[K] = K0(WE, q.charweapon[K]), q.chararmor1[K] = K0(WO, q.chararmor1[K]), q.chararmor2[K] = K0(Wl, q.chararmor2[K]), q.maxhp[K] = K0(Wm, q.maxhp[K]), q.hp[K] = q.maxhp[K], q.at[K] = K0(Wy.at, q.at[K]), q.df[K] = K0(Wy.df, q.df[K]), q.mag[K] = K0(Wy.mag, q.mag[K]), q.charname[K] = W.roster && W.roster[K] && W.roster[K].name || q.charname[WR];
  let K1 = a[q.charhero[K] || I[WR - 0x1]];
  if (K1) {
    for (q.spell[K] = [...K1.spells, ...V(K1.id)].slice(0x0, 0xc); q.spell[K].length < 0xc;) q.spell[K].push(0x0);
  }
}
E(Wz, 'applyMember');
function Wt(W, K) {
  W4();
  let WR = X(K);
  if (q.customTeam = 0x0, q.partyNotice = null, WR && typeof WR == 'object') {
    let Wl = WR.slots && WR.slots.length === 0x3 && WR.slots[0x0] === 0x1 && WR.slots[0x1] === 0x2 && WR.slots[0x2] === 0x3 && !WR.slots.some(Wy => WR.roster && WR.roster[Wy] && !WR.roster[Wy].story),
      Wm = W.storyParty === 'always';
    if (Wm && !Wl && WR.slots && WR.slots.some(Wy => Wy) && (q.partyNotice = "This fight uses the story party."), W.storyParty && (Wl || Wm)) {
      let Wy = WR.roster && WR.roster[A];
      if (Wy && Wy.story && q.char.includes(0x4) && q.charhero && q.charhero[0x4] === 'noelle') {
        let K0 = K1 => WR[K1] && WR[K1][A] != null ? WR[K1][A] : null;
        K0('weapon') != null && (q.charweapon[0x4] = K0('weapon')), K0('armor1') != null && (q.chararmor1[0x4] = K0('armor1')), K0('armor2') != null && (q.chararmor2[0x4] = K0('armor2'));
      }
    } else {
      if (WR.slots && WR.slots.some(K1 => K1)) {
        let K1 = WR.slots.filter(K2 => K2).slice(0x0, 0x32);
        q.char = K1.length > 0x3 ? K1.slice() : [K1[0x0] || 0x0, K1[0x1] || 0x0, K1[0x2] || 0x0], q.customTeam = 0x1;
        for (let K2 of K1) {
          let K3 = WR.roster && WR.roster[K2];
          !K3 || K3.story || (q.charbase[K2] = K3.base, q.charhero[K2] = K3.hero || I[K3.base - 0x1] || 'kris', Wz(WR, K2));
        }
        if (K1.length === 0x1 && (q.heromakex = [0x50, 0x50, 0x50], q.heromakey = [0x8c, 0x8c, 0x8c]), K1.length === 0x2 && (q.heromakex = [0x50, 0x50, 0x50], q.heromakey = [0x64, 0xb4, 0xb4]), W.seats && K1.length > W.seats) {
          q.char = K1.slice(0x0, W.seats);
          let K4 = q.char.map(K5 => q.charname && q.charname[K5] || (a[q.charhero[K5]] || {}).name || '?');
          q.partyNotice = "Only three fit on this ride: " + K4.slice(0x0, -0x1).join(',\x20') + " and " + K4[K4.length - 0x1] + '.';
        }
      }
    }
    if (W.partyhp) for (let K5 = 0x0; K5 < q.char.length; K5++) {
      let K6 = q.char[K5];
      K6 && (q.maxhp[K6] = W.partyhp, q.hp[K6] = W.partyhp);
    }
    if (W.heroes) {
      WW();
      for (let K7 = 0x0; K7 < 0x3; K7++) {
        let K8 = q.char[K7],
          K9 = W.heroes[K7];
        !K8 || !K9 || !a[K9] || (q.charhero[K8] = K9, q.charname[K8] = a[K9].name);
      }
    }
    C(), G(), W.background && W.background();
  }
  o() && F(W);
  let WE = c(0x0, 0x0, g);
  if (W.skipvictory && WE && (WE.skipvictory = W.skipvictory), (W.monsters || []).forEach((KW, KK) => KW.setup(KK)), W.ambush === 0x1 && (R.with('obj_writer', KW => KW.instance_destroy()), R.with('obj_face', KW => KW.instance_destroy()), q.charturn = d(), q.mnfight = 0x1, q.myfight = -0x1, R.with('obj_monsterparent', KW => {
    KW.ambushed = 0x1;
  })), WR && typeof WR == 'object' && (i.hpscale ?? 0x1) !== 0x1) {
    for (let KW = 0x0; KW < 0x3; KW++) q.monster[KW] === 0x1 && (q.monstermaxhp[KW] = Math.max(0x1, Math.round(q.monstermaxhp[KW] * i.hpscale)), q.monsterhp[KW] = q.monstermaxhp[KW]);
  }
  let WO = K && typeof K == 'object' && K.tpstart > 0x0 ? K : null;
  WO && (q.tension = Math.min(q.maxtension, Math.round(q.maxtension * Math.min(0x1, Number(WO.tpstart))))), K && typeof K == 'object' && K.runhp && typeof K.runhp == 'object' && Wi(K.runhp);
}
E(Wt, 'startDeltaruneController');
var Wk = E(W => {
  let K = Number(W);
  return Number.isFinite(K) ? Math.max(0x0, Math.min(0x1, K)) : 0x1;
}, 'shareOf');
function Wi(W) {
  if (!W || typeof W != 'object') return false;
  let K = Math.max(0x1, Math.min(1.44, Number.isFinite(Number(W.s)) ? Number(W.s) : 0x1));
  if (typeof q.hp == 'number') {
    let WE = Number(q.maxhp) > 0x0 ? Number(q.maxhp) : 0x14,
      WO = Math.min(WE + 0xf, Math.round(WE * K));
    return q.hp = Math.max(0x1, Math.min(WO, Math.round(WE * K * Wk(W.u)))), true;
  }
  if (!Array.isArray(q.char) || !q.maxhp || !q.hp) return false;
  let WR = W.h && typeof W.h == 'object' ? W.h : {};
  for (let Wl = 0x0; Wl < q.char.length; Wl++) {
    let Wm = q.char[Wl];
    if (!Wm || !(q.maxhp[Wm] > 0x0)) continue;
    let Wy = Math.round(q.maxhp[Wm] * K),
      K0 = Object.prototype.hasOwnProperty.call(WR, String(Wm)) ? Wk(WR[String(Wm)]) : 0x1;
    q.maxhp[Wm] = Wy, q.hp[Wm] = Math.max(0x1, Math.min(Wy, Math.round(Wy * K0)));
  }
  return true;
}
E(Wi, 'applyRunHp');
var Wc = 'deltarune',
  Wh = E(() => q.mnfight === 0x0 && !q.myfight, 'atCommandMenu');
function WY() {
  let W = Wh() && !(Wc === 'deltarune' && Wr()),
    K = WR => String(WR.mystring ?? WR.originalstring ?? '').includes('/') || WR.halt !== 0x0;
  for (let WR of R.all('obj_base_writer')) if (!(WR.destroyed || W && !K(WR))) {
    if (WR.halt === 0x0) {
      let WE = String(WR.originalstring ?? '').length;
      (WR.stringpos | 0x0) < WE && (WR.stringpos = WE);
    } else (WR.halt === 0x1 || WR.halt === 0x2 || WR.halt === 0x4) && WR.event_user(0x0);
  }
  for (let WO of R.all('obj_writer')) {
    if (WO.destroyed || W && !K(WO)) continue;
    let Wl = typeof WO.nextmsg == 'function';
    if (WO.halt === 0x0) WO.skippable === 0x1 && (WO.skipme = 0x1);else {
      if ((WO.halt === 0x1 || WO.halt === 0x2) && WO.siner > 0x0) {
        if (Wl) {
          if (WO.disablebutton1) continue;
          WO.halt === 0x1 ? WO.nextmsg() : WO.instance_destroy();
        } else WO.forcebutton1 = 0x1;
      }
    }
  }
}
E(WY, 'fastForwardDialogue');
function WZ() {
  WY();
}
E(WZ, 'skipDialogue');
var WU = /press|\[z\]|\[c\]|~\d|repeatedly|rapidly|timing|time it|direction|\baim\b|choose|select|hold|photo|take a|as many|catch|shoot|mash/i;
function Wb() {
  let W = R.all('obj_writer').filter(K => !K.destroyed);
  return W.length > 0x0 && W.every(K => K.reachedend === 0x1 && K.halt === 0x0 && K.siner > 0x1 && !WU.test(String(K.mystring ?? '')));
}
E(Wb, 'typedOutWaiting');
function Wr() {
  try {
    return !!P();
  } catch {
    return false;
  }
}
E(Wr, 'heldSafe');
function Ww() {
  let W = false;
  for (let WR = 0x0; WR < 0x3 && !W; WR++) {
    let WE = q.monsterinstance && q.monsterinstance[WR];
    WE && !WE.destroyed && (WE.actcon === 0x14 || WE.actconsus === 0x14 || WE.actconral === 0x14 || WE.actconnoe === 0x14) && (W = true);
  }
  if (!W) return false;
  let K = R.all('obj_writer').filter(WO => !WO.destroyed);
  return K.length > 0x0 && K.every(WO => WO.reachedend === 0x1 && WO.halt === 0x0);
}
E(Ww, 'simulActWaiting');
b.input = () => {
  q.rmx && Wp(), i.nodialog && (WY(), !(q.control_state && q.control_state[0x0] && R.exists('obj_time')) && WL() && (r.pressed.b1 = true));
};
function WL() {
  if (q.minigameStage) return false;
  if (Wc === 'deltarune') {
    if (R.exists('obj_choicer_neo') || R.all('obj_writer').some(K => !K.destroyed && K.halt === 0x5)) return false;
    let W = R.first('obj_yellow_trial_manager');
    return W && !W.destroyed && W.can_control ? false : q.mnfight === 0x1 ? true : q.myfight === 0x3 ? Ww() || Wb() : q.myfight === 0x0 && q.mnfight === 0x0 ? Wr() && Wb() : false;
  }
  return q.mnfight === 0x1 && !R.all('obj_base_writer').some(K => !K.destroyed && K.halt === 0x5);
}
E(WL, 'nodialogWantsZ');
export { W3 as a, W5 as b, WK as c, Wf as d, Wq as e, WD as f, Wt as g, Wi as h, WY as i, WZ as j, WU as k };