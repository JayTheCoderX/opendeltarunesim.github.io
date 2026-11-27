import { d } from './c-BERKZCGM.js';
import { C as L, s as q } from './c-QFDZPUX2.js';
import { b as y, c as z } from './c-DTW63MWW.js';
import { F as R } from './c-J7PU4477.js';
import { a as Z } from './c-HUDNK55W.js';
import { i as W } from './c-3ELH3LBH.js';
import { f as o, n as i } from './c-MYK6C3LF.js';
import { g as b } from './c-ZQQWH6UG.js';
import { Ib as r, Lb as M, N as s, Ra as h, Ta as C, h as E, na as B, pb as f, qb as l, ta as g, ua as O, xb as T } from './c-PBMEVLU6.js';
import { a as X, e as Q, g as x, l as c } from './c-XSSGDLV7.js';
c(), c(), c();
var v = null,
  V = "idle";
async function F(t = "assets/silhouette.beats.json") {
  const tg = {
    'JLdPb': function (tX, tp) {
      return tX === tp;
    },
    'cjWJZ': "loading",
    'YzNZX': "ready",
    'fZSjk': function (tX, tp) {
      return tX !== tp;
    },
    'ohVuU': "LjOxh",
    'OJhWd': function (tX, tp, tS) {
      return tX(tp, tS);
    },
    'XvSRX': "no-store",
    'Wittr': function (tX, tp) {
      return tX(tp);
    },
    'lRVGN': "no beats",
    'IDxfj': function (tX, tp) {
      return tX / tp;
    },
    'curSR': function (tX, tp) {
      return tX === tp;
    },
    'tuuxE': "gCNHJ",
    'TbnPf': "IaXpy",
    'jRCUU': "none"
  };
  if (V === "loading" || V === "ready") return v;
  V = "loading";
  try {
    let tQ = await fetch(t, {
      'cache': "no-store"
    });
    if (!tQ.ok) throw new Error(String(tQ.status));
    let tx = await tQ.json();
    if (!tx || !Array.isArray(tx.beats) || !tx.beats.length) throw new Error("no beats");
    v = tx, v.period = 60 / (tx.bpm || 138), V = "ready";
  } catch {
    V = "none", v = null;
  }
  return v;
}
X(F, "loadBeats");
function I() {
  return V;
}
X(I, "beatsState");
function J(t, Y = 1.1) {
  const tT = {
    'SsnGj': function (tQ, tx, tc) {
      return tQ(tx, tc);
    },
    'FmUOb': "cirno_baka",
    'OqyZr': "SND_TXT1",
    'yQrDM': function (tQ, tx, tc, tv) {
      return tQ(tx, tc, tv);
    },
    'OsISV': function (tQ, tx) {
      return tQ + tx;
    },
    'NPXHe': function (tQ, tx) {
      return tQ - tx;
    },
    'PMWmp': function (tQ, tx) {
      return tQ !== tx;
    },
    'SddcN': "ready",
    'zvPDH': function (tQ, tx) {
      return tQ < tx;
    },
    'uoNHJ': function (tQ, tx) {
      return tQ === tx;
    },
    'yTrWy': "RUDLK",
    'Qgmxi': function (tQ, tx) {
      return tQ > tx;
    },
    'YeZrC': function (tQ, tx) {
      return tQ < tx;
    },
    'EcRFu': function (tQ, tx) {
      return tQ >= tx;
    },
    'cBNvp': function (tQ, tx) {
      return tQ / tx;
    }
  };
  if (V !== "ready" || !v.drops.length) return 0;
  let tp = -1;
  for (let tQ = 0; tQ < v.drops.length; tQ++) {
    let tx = v.drops[tQ];
    if (tx > t) break;
    tp = tx;
  }
  if (tp < 0) return 0;
  let tS = t - tp;
  return tS >= Y ? 0 : 1 - tS / Y;
}
X(J, "dropPulse");
function N(tg, tO) {
  tg = tg - 384;
  const tT = tU();
  let tX = tT[tg];
  if (N.sNsgBv === undefined) {
    var tp = function (tc) {
      const tv = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let tV = '',
        tF = '';
      for (let tu = 0, tI, tJ, tN = 0; tJ = tc.charAt(tN++); ~tJ && (tI = tu % 4 ? tI * 64 + tJ : tJ, tu++ % 4) ? tV += String.fromCharCode(255 & tI >> (-2 * tu & 6)) : 0) {
        tJ = tv.indexOf(tJ);
      }
      for (let tD = 0, U0 = tV.length; tD < U0; tD++) {
        tF += '%' + ('00' + tV.charCodeAt(tD).toString(16)).slice(-2);
      }
      return decodeURIComponent(tF);
    };
    const tx = function (tc, tv) {
      let tV = [],
        tF = 0,
        tu,
        tI = '';
      tc = tp(tc);
      let tJ;
      for (tJ = 0; tJ < 256; tJ++) {
        tV[tJ] = tJ;
      }
      for (tJ = 0; tJ < 256; tJ++) {
        tF = (tF + tV[tJ] + tv.charCodeAt(tJ % tv.length)) % 256, tu = tV[tJ], tV[tJ] = tV[tF], tV[tF] = tu;
      }
      tJ = 0, tF = 0;
      for (let tN = 0; tN < tc.length; tN++) {
        tJ = (tJ + 1) % 256, tF = (tF + tV[tJ]) % 256, tu = tV[tJ], tV[tJ] = tV[tF], tV[tF] = tu, tI += String.fromCharCode(tc.charCodeAt(tN) ^ tV[(tV[tJ] + tV[tF]) % 256]);
      }
      return tI;
    };
    N.LbKdOn = tx, N.aYoApT = {}, N.sNsgBv = true;
  }
  const tS = tT[0];
  N.kMXhnG !== tS && (N.aYoApT = {}, N.kMXhnG = tS);
  const tQ = N.aYoApT[tg];
  return tQ === undefined ? (N.VyNFZp === undefined && (N.VyNFZp = true), tX = N.LbKdOn(tX, tO), N.aYoApT[tg] = tX) : tX = tQ, tX;
}
var D = 0xf0,
  t0 = 0xb4;
function t1() {
  return typeof HTMLCanvasElement < 'u' && typeof HTMLVideoElement < 'u' && typeof document < 'u' && typeof document.createElement == 'function';
}
X(t1, 'canDecodeVideo');
function t2(Y, tg) {
  let tO = tg / 0x3c,
    tT = D * (0.5 + 0.42 * Math.sin(tO * 0.9)),
    tX = t0 * (0.5 + 0.34 * Math.cos(tO * 1.3)),
    tp = t0 * (0.3 + 0.1 * Math.sin(tO * 2.1)),
    tS = D * (0.5 + 0.4 * Math.sin(tO * 1.7 + 2.1)),
    tQ = t0 * (0.5 + 0.3 * Math.sin(tO * 0.7 + 0x1)),
    tx = t0 * (0.22 + 0.08 * Math.cos(tO * 1.1)),
    tc = t0 * (0.5 + 0.45 * Math.sin(tO * 0.55)),
    tv = t0 * 0.1;
  for (let tV = 0x0; tV < t0; tV++) for (let tF = 0x0; tF < D; tF++) {
    let tu = Math.hypot(tF - tT, tV - tX),
      tI = Math.hypot(tF - tS, tV - tQ),
      tJ = tu < tp || tI < tx || Math.abs(tV - tc) < tv;
    tu < tp * 0.45 && (tJ = false), Y[tV * D + tF] = tJ ? 0x1 : 0x0;
  }
}
X(t2, 'proceduralGrid');
function t3(tg, tO, tT) {
  return N(tg - 0x394, tT);
}
var t4 = null;
function t5() {
  return t4 && t4.v && t4.ok && t4.v.readyState >= 0x2 ? t4.v : null;
}
X(t5, 'maskFieldVideo');
var t6 = class Yx {
  constructor(Y) {
    this.ok = false, this.url = Y;
    try {
      let tg = document.createElement('video');
      tg.src = Y, tg.loop = true, tg.muted = false, tg.playsInline = true, tg.preload = 'auto', tg.addEventListener('error', () => {
        this.ok = false;
      }), tg.style.cssText = "position:fixed;left:-10px;top:-10px;width:1px;height:1px;opacity:0.01;pointer-events:none;";
      try {
        document.body.appendChild(tg), this.attached = true;
      } catch {}
      this.v = tg, this.cv = document.createElement('canvas'), this.cv.width = D, this.cv.height = t0, this.cx = this.cv.getContext('2d', {
        'willReadFrequently': true
      }), this.ok = true, t4 = this;
    } catch {
      this.ok = false;
    }
  }
  ["start"]() {
    this.v && (this.v.muted = false, this.v.play().catch(() => {
      this.v.muted = true, this.v.play().catch(() => {
        this.ok = false;
      });
    }));
  }
  ["stop"]() {
    if (this.v) {
      try {
        this.v.pause();
      } catch {}
      if (this.attached) {
        try {
          this.v.remove();
        } catch {}
        this.attached = false;
      }
      t4 === this && (t4 = null);
    }
  }
  ["read"](Y, tg) {
    if (!this.ok || !this.v || this.v.readyState < 0x2) return false;
    try {
      this.cx.drawImage(this.v, 0x0, 0x0, D, t0);
      let tO = this.cx.getImageData(0x0, 0x0, D, t0).data;
      for (let tT = 0x0, tX = 0x0; tT < Y.length; tT++, tX += 0x4) {
        let tp = (tO[tX] * 0x12b + tO[tX + 0x1] * 0x24b + tO[tX + 0x2] * 0x72) / 0x3e8;
        Y[tT] = tp >= tg ? 0x1 : 0x0;
      }
      return true;
    } catch {
      return this.ok = false, false;
    }
  }
};
X(t6, 'VideoMask');
var t7 = t6,
  t8 = class Yc extends z {
    ["create"]() {
      this.grid = new Uint8Array(D * t0), this.frame = 0x0, this.damage = this.damage || 0x5, this.target = this.target === void 0x0 ? 0x0 : this.target, this.threshold = this.threshold === void 0x0 ? 0x80 : this.threshold, this.hazardIsLit = this.hazardIsLit === void 0x0 ? true : !!this.hazardIsLit, this.adaptivePolarity = this.adaptivePolarity === void 0x0 ? true : !!this.adaptivePolarity, this.prev = new Uint8Array(D * t0), this.litEma = 0.25, this.sceneWait = 0x0, this.hazRun = 0x0, this.lastFlip = -0x3e7, this.cuts = 0x0, this.decided = false, this.flipGrace = 0x0, this.flips = 0x0, this.active = 0x1, this.video = null, this.usingVideo = false, this.maskVideo && t1() && (this.video = new t7(this.maskVideo), this.video.ok && this.video.start()), t1() && (this.out = document.createElement('canvas'), this.out.width = D, this.out.height = t0, this.outcx = this.out.getContext('2d'), this.img = this.outcx.createImageData(D, t0), this.hi = document.createElement('canvas'), this.hi.width = 0x1e0, this.hi.height = 0x168, this.hicx = this.hi.getContext('2d'), this.hiOk = typeof this.hicx.filter == 'string'), typeof window < 'u' && (window.DR_maskFieldSource = 'procedural');
    }
    ["decidePolarity"](Y) {
      let tg = Y < 0.5;
      this.decided = true, tg !== this.hazardIsLit && (this.hazardIsLit = tg, this.flips++, this.lastFlip = this.frame, this.flipGrace = 0x18);
    }
    ["box"]() {
      let Y = T.first('obj_growtangle');
      if (!Y || Y.destroyed) return null;
      let [tg, tO, tT, tX] = M(Y);
      return !Number.isFinite(tg) || tT - tg < 0x8 || tX - tO < 0x8 ? null : [tg, tO, tT, tX];
    }
    ["step"]() {
      this.frame++, d("maskfield:" + this.frame);
      let tg = false;
      this.video && this.video.ok && (tg = this.video.read(this.grid, this.threshold)), tg || t2(this.grid, this.frame), this.usingVideo = tg, typeof window < 'u' && (window.DR_maskFieldSource = tg ? 'video' : 'procedural');
      let tO = 0x0,
        tT = 0x0,
        tX = this.grid,
        tp = this.prev;
      for (let U5 = 0x0; U5 < tX.length; U5++) tO += tX[U5], tX[U5] !== tp[U5] && tT++;
      tp.set(tX);
      let tS = tO / tX.length;
      this.litEma = tS;
      let tQ = 0.2,
        tx = 0x5,
        tc = 0.62,
        tv = 0xa,
        tV = 0x14;
      this.adaptivePolarity && (this.sceneWait > 0x0 ? (this.sceneWait--, this.sceneWait === 0x0 && (this.decidePolarity(tS), this.hazRun = 0x0)) : tT / tX.length > tQ ? (this.sceneWait = tx, this.cuts++) : !this.decided && tg && this.decidePolarity(tS), (this.hazardIsLit ? tS : 0x1 - tS) > tc ? this.hazRun++ : this.hazRun = 0x0, this.hazRun >= tv && this.frame - this.lastFlip > tV && (this.hazRun = 0x0, this.decidePolarity(tS))), this.flipGrace > 0x0 && this.flipGrace--;
      let tF = this.video && this.video.v ? this.video.v.currentTime : -0x1;
      if (tF >= 0x0 && I() === 'ready') {
        let U6 = J(tF, 0.5);
        if (U6 > 0.01) {
          let U7 = U6 * U6 * 0x6;
          b.shakex = (b.shakex || 0x0) * 0.6 + (Math.random() * 0x2 - 0x1) * U7, b.shakey = (b.shakey || 0x0) * 0.6 + (Math.random() * 0x2 - 0x1) * U7;
        }
      }
      if (b.autoplay) {
        let U8 = this.box();
        U8 && R(this, T.first('obj_heart'), U8, D, t0);
      }
      if (this.active !== 0x1 || this.flipGrace > 0x0) return;
      let tu = this.box();
      if (!tu) return;
      let tI = T.first('obj_heart');
      if (!tI || tI.destroyed) return;
      let [tJ, tN, tD, U0] = tu,
        U1 = tI.x + 0x8,
        U2 = tI.y + 0x8,
        U3 = Math.floor((U1 - tJ) / (tD - tJ) * D),
        U4 = Math.floor((U2 - tN) / (U0 - tN) * t0);
      if (U3 < 0x0 || U4 < 0x0 || U3 >= D || U4 >= t0) return;
      this.grid[U4 * D + U3] === 0x1 === this.hazardIsLit && y(this, this.target === 0x3);
    }
    ["draw"](Y) {
      let tg = this.box();
      if (!tg) return;
      let [tO, tT, tX, tp] = tg,
        tS = Y.ctx;
      tS.save(), tS.fillStyle = "#000000", tS.fillRect(tO, tT, tX - tO, tp - tT), tS.restore();
      let tQ = this.video && this.video.ok && this.video.v && this.video.v.readyState >= 0x2 ? this.video.v : null;
      if (tQ && this.hi && this.hiOk) {
        let tv = 127.5 / Math.max(0x1, this.threshold),
          tV = this.hicx;
        tV.clearRect(0x0, 0x0, this.hi.width, this.hi.height), tV.filter = "blur(1px) grayscale(1) brightness(" + tv.toFixed(0x3) + ") contrast(2000%)" + (this.hazardIsLit ? '' : " invert(1)");
        try {
          tV.drawImage(tQ, 0x0, 0x0, this.hi.width, this.hi.height);
        } catch {}
        tV.filter = 'none', tS.save(), tS.globalCompositeOperation = 'lighter', tS.imageSmoothingEnabled = true, tS.imageSmoothingQuality = 'high', tS.drawImage(this.hi, tO, tT, tX - tO, tp - tT), tS.restore(), this.drawFlip(tS, tO, tT, tX, tp);
        return;
      }
      if (this.out && this.img) {
        let tF = this.img.data;
        for (let tI = 0x0, tJ = 0x0; tI < this.grid.length; tI++, tJ += 0x4) {
          let tN = this.grid[tI] === 0x1 === this.hazardIsLit;
          tF[tJ] = tF[tJ + 0x1] = tF[tJ + 0x2] = tN ? 0xff : 0x0, tF[tJ + 0x3] = tN ? 0xff : 0x0;
        }
        this.outcx.putImageData(this.img, 0x0, 0x0);
        let tu = tS.imageSmoothingEnabled;
        tS.imageSmoothingEnabled = false, tS.drawImage(this.out, tO, tT, tX - tO, tp - tT), tS.imageSmoothingEnabled = tu, this.drawFlip(tS, tO, tT, tX, tp);
        return;
      }
      let tx = (tX - tO) / D,
        tc = (tp - tT) / t0;
      tS.fillStyle = "#ffffff";
      for (let tD = 0x0; tD < t0; tD++) for (let U0 = 0x0; U0 < D; U0++) this.grid[tD * D + U0] === 0x1 === this.hazardIsLit && tS.fillRect(tO + U0 * tx, tT + tD * tc, tx + 0x1, tc + 0x1);
      this.drawFlip(tS, tO, tT, tX, tp);
    }
    ["drawFlip"](Y, tg, tO, tT, tX) {
      if (this.flipGrace <= 0x0) return;
      let tp = this.flipGrace / 0x18;
      Y.save(), Y.globalAlpha = 0.25 + 0.55 * tp, Y.strokeStyle = "#ffff00", Y.lineWidth = 0x4, Y.strokeRect(tg + 0x2, tO + 0x2, tT - tg - 0x4, tX - tO - 0x4), Y.restore();
    }
    ["cleanUp"]() {
      this.video && this.video.stop();
    }
  };
X(t8, 'obj_maskfield'), Q(t8, 'kinds', l('obj_maskfield', z)), Q(t8, 'defaultDepth', 0x4);
var t9 = t8;
c();
const tt = {};
function tU() {
  const t = ['W4ZdUd8Qaq', 'WQjIsSoJpG', 'emomW5CA', 'jmo4WORdOcbg', 'Dmo0lmocW6C', 'WPjSACoOkq', 'FGabW7pdSq', 'WQ1Ghmo8', 'WPLHW5JdM8oQW5FdMrRcTq', 'vSoYoSoYW6e', 'grKIdhenWOZcJSk6', 'WOatW57cVJO', 'hdCxgve', 'WOvefJ7cTa', 'uYeYW6tdIW', "WPDPWR/cQ08", 'W4ddUdaenW', 'jfSKdq', 'idKnpei', 'cmkZW5uedG', 'W5ldMcOllG', 'D8oBWPpdNhilWPe', 'exRcGSoObW', 'bSoeW5eEW6C', 'WQFdUComWOPZW5BdNq', 'fCo3ta', 'WRlcJSozfSoo', 'WRBdVCosWQ90W6JdMCk6WRi', 'W6ZdQqS0fa', 'bHO3g18', 'cMRcICoUaCoW', 'emkQidGOW41Lqunb', 'WQBdM0ldGG4', 'fCoSnvKSuvu', "W6C/fCkZFCk1WPW5BwddGmoK", "l8oXWQ/dQYe", 'WQJcK3ZdLN7dHYK', 'WOPyprFcTmkO', 'WOvjW7KvW659WR4Tq8k4', 'uXa4W5ldJq', 'W5FdUtWt', 'lSkhW47cVSot', 'W5XrWPNcMSk4', 'WP7cT8k7k18', "xt7cN8kiWQZdNWjdy8o/", 'tSk8WRHuWOi', 'W65xW409W4xdQIbCgSoq', 'BCkyWQfsWRu', "WRbRzCoIW6K/lG", 'WOJdKSog', 'pColbmo0CSkrq8o1W6e', "bCo8imoIW4/dMCoT", 'wqrBW4hdKG', 'WQdcOupdI2W', "WQJcTY/cNmojWQJdGSk+jq", 'WR3dTSogWRj7W5BdM8kRWOxcMq', "WP0/qSo1W4GuoulcKCkI", 'hCoEWRTYia', "WRddUxJdPcK/pMa", "W5beW6/cKCokW7/dGNinW4m", 'WOZdTSo5WOb7', 'u8k0oaq9fLe', "bmowWPf/cG", 'y8kBu8kPhmooqmohW6rTW67dPW', 'dCogWR1Hg2xcNSkMWQ8R', 'WOSugtOuw8o1amoHWOC', "WPddV8o7WQH/", 'W67cHSo5W5JdNa', 'fdBcJCkjWQhdHufsu8o0', 'WQrpW74XWOu', "WQrWWQ/cM8oQA8kS", 'jmktnaGW', 'W5BdTLpcH1fUba', 'c17cPCoDea', 'W5uOW7ldNSoxW4BcJLBcHmko', 'hSkxW4pcSSouo0pdGCkNW64', "WRD+s8oY", 'W7uOW6hdIJnUWR4', 'WP98vSofhG', 'W4tcSCorW5NdLG', 'ESo3W4pdHmkNW43dTv9hW44', 'yHitdCo4E8kzWQRcImoX', 'WQjdW7q1WPC', 'WOdcNSoIlSoD', 'pCohbmo2uCkq', 'WPDaCSoQomomWPyNAuK', 'WPHjiaW', 'WQvLq8ozjmo1WQiloq', 'cSo7tHXIW4VdSsm', 'W4uNr8o6WQS', 'pmkgW5NdNmolW5S', 'fSoFW50m', 'rYtcNSktWQBdLa', 'WOPenCoFda', 'c8oxW4OJW78', 'W5xdNJCQkW', 'W4ldONlcOeK', 'WRXla8o7fG', 'WOifW4FcGX04cHBdRq4', "WR/cHxJdIhddNq", 'WRhdLgZdRqq', 'W4PuW6lcGmoC', 'CCozWPFdKfib', 'W6edsCoAWQpcHW', 'WRldL8ocWQ5z', 'qXHb', 'laFdQmktW6e', 'rmofW6SlW5hcSdO', 'umkasd44W4BdMSkDW7r6', "WQqvWPK+W4pdUI1erq", 'bSkAW4FcSSkDm1NdM8kHW5K', 'WPJcNxtdG1pdJJ0yDCo1', "WONcT8o/iSo8", 'eNRdJmkOWOxdUdigvCoO', 'W5mtpJaJsSomkCosWQG', "WOPhW67dOSo+", 'nCo2k8owCW', 'kCoYWPddRbvcW6G', 'WP8ycZKT', 'WOnvWOJcQ1O', 'aWZdOSk3W7rEw8oiesO', 'fSo7qXjnW4a', 'nmkYW7NcKmkIW4pdVXPq', 'pSkqW6GMbW', 'fCo8rczfW4hdTJJcJ2K', 'D8oZgSoIW54', "eX/dJ8ktW6q", 'W6RcMSoSW6tdQG', "WO3cNSo/amodW58", 'WOn9W7GsWPG', 'WQzFsmokba', 'E8olwqDiW6Hey2r4', "h8knW5hcV8osm1JdHSo+W4S", 'qcfIW6ldOW', "wSkLWPz+WQi", 'WRjQB8o4W6G0BsldTmkd', 'WRZcJYRcNSoC', 'WR92WQlcJMiWW63dPx7dHa', "W6WvuComWP/cKu04", 'W4K3ac5IECovj8oFWPK', 'eCoqWRHokxBcLCk3WR48', 'uCk2WRTpWQG', 'vWjCW7ddK8kuWOO', 'W4OGzCoGWQK', 'mCoYWPpdRcq', 'WOaqW5NcKHyU', 'W6yctSoYWP0', 'W6XVWPeZWQTiWPPiySks', 'tHNcTSksWO8', 'WP1HW5RdKW', 'W6acuSoyWR8', 'gSonkN4e', 'W5xdTtKKm8oJWQmocae', 'rM7cHCoTbmoIgq', 'WODfa8kyjrKYbwa', 'W6WXCSoyWOC', 'WPTTW4FdG8olW4ZdMrpcTa', 'WQrjWRJcLeu', 'vdVdKmk6vmk1seFdO1tdP8kfAa', 'eCoWlSoQW4NdHq', 'amoYnKqZvKNcVwi', 'W5BcVCouW6BdNcCCW5K7hG', "WQ/cRca", 'p8ksdXGx', 'WQ5DW6aOWOzdWPS4C8ot', 'wqHyW5BdN8kyWPVcGq', 'WRNcN8kgoMi', 'W4tdTc8ikSoI', 'WQjJvCoPo8oU', 'DCkRWOJdVM1lW71Xo8ok', "WQv/qSoOkCoY", 'WPrlamk0lJe4', "jmk+W6FcGCkI", 'WObzbSkzodWPaMyy', 'WPrKWOxcPmok', 'hSortJzb', 'eComW5inW7tcLW', 'DCkiWQOPW74Aia', 'vJakWRVdSCkoWRDG', 'bmo4rtXC', 'ASkmWR0cW6mC', 'wCklxJSoW4hdMSkB', 'uSoNpCoVW7m', 'WQPNW50T', 'W5HqW7pcMmoa', 'W7jnW5yhW5xcRJvgtCks', 'WOeAW5pcNW', 'pmkQkbCJ', 'WOdcImoIaSodW4tcT3bHWOa', 'W6W3mCkSWQRdHmonqbS', "nbq7kNq+WQtcG8kaga", 'jSk5kbKF', "WQv/smo2hmoYWR8pAwK", 'qCkCtsWbW5ZdKCkmW48', 'WOtcMmkYWPmc', "W5VdSZC+j8oNWQKBnbG", 'jmo4WOJdGsykWO3cGCkwoa', 'aSkBW4Cmlmk1eW', 'WOjCfCkIkY0Tb2ae', 'WOlcNSkHWRKogCo8', 'qqnzW4hdOSkd', 'WPBcMSoLbmoFW7hdT3fnWOS', 'WQZcN2JdN3ddOcm8qa', 'W53dI8o3W4rDqCkHWOTVWOS', "bmo+W78pW74", "ag/cHmocbSoOgG", 'WRSJir4h', 'WQRcTSoPfSoM', 'qJypW7ddJ8ks', 'WQDtaHtcQG', 'CSk3n8oiW54jaeOUbG', 'WO0ddISDFSohnSoUWOS', 'WPT7xSoOpa', 'CmocWOZdKhq', 'rWvkW4RdK8kE', 'W7nmW6tcK8os', 'uspcMmkoWQldIa', 'hLfNW6hdR8ocW5JdMx4i', 'WPVdUfRdJXC', "mSkYW63cJCk+W7ZdPWTC", 'WQBdOhFdVGK3oMSZWOC', 'WQfABCoScG', "W4FdHw/cVMi", 'WPHHBCoIW68ajIBcJCkH', 'WRdcGCkTWP0q', 'W5BdUdmf', 'W7HPWQhcGSki', 'WOBcJSkFihW', 'vtHKW6JdNW', 'jd7dJCkuW4vZDCohpq8', 'jColb8o0vW', 'WOavaZKXFCoqk8ofWOG', "Cmo+mSoDW54", 'jSoMm8oYW7i', 'C8kBWQuaW4mB', 'W4tdVtWynSopWQmwlqy', 'o0yVbSo8yq', 'aIldMmkeW4u', 'rdayW6hdVG', "d8ohWRn1oxBcHCk/WQ0p", 'WPxcH3xdOg0', 'WQzJeCktmW', 'WPxcKSo8aSof', 'gSoNimoYW4m', "WRm+WR4KW4G", 'smkcWOfmWRu', 'WQTSaCo7', 'WOvfy8ozgmoyWOro', 'WR3cQIBcGa', 'W5BdJCo0W4vBqmovW748W5hdPIC', 'aSknW5tcS8oYnq', 'WRFdImoDW7NdLHWCW50Wzq', 'nIpdJCkcW7r9zColhZG', 'bMFcJCo4fSo2cMJdJ2W', 'WPz0jJpcUq', 'e8oGvHX8W4S', 'WRHSWR3cM8ogsW', 'W7OQmG', 'WO0DWRGqW7q', 'WOzFWRxcMeK', 'WPVcLmkBhNH8', 'WPDHW5ddV8oCW5hdJW', 'hmkhW44', 'WRzBBSoPW7i', 'u8oWWRdcVSko', 'WRuPWRCnW4i', 'mcZdI8kO', 'WOFcMCkffvX9WQpdUW', 'BmkhWQfpWQi', 'o8kxaWq', 'jIRdLCk8W558za', 'W7RcSmoHW5RdGq', 'E8ksWRPoWPDCWRddQGtcKG', 'WOBcICk2WPWt', 'WQv6hCo2', 'qXaoW6FdIG', 'bCo6qqTbW4RdQZNcG2G', 'jmk6W6VcPmoi', 'WPqNW7dcRaK', 'oSkXjt4g', 'rWvoW5ddKW', 'xInSW7tdVa', 'ASkwWQi', 'WO0dacWX', 'Emk0xWac', 'WPddGmo3WQD3', 'jSolhSo5', 'WQnSW5SEWQXiWOiCFCky', 'eSord8o2yq', 'W5BdO0VcV10', 'WRn6WPVcTeq', 'WPeqW5BcGGO', 'WQNcMMxdMxO', 'WQbRW58MWRPb', 'yCkfWRWhW7yybatdImkU', 'W7PXWPu', 'WPtcL8kIWQ8zemo1W506W4S', 'W7rsW47cJmo3', 'WPDbjq7cKG', 'a8oWkW', 'WRL4A8oYD8kXW6iWpYa', 'WOnjxmo8W7y', 'WRlcLmoMmCos', 'mSoYWORdOq', 'W7PQW7FcO8o7W6tdIhOaW5q', "fmo6WOv/iW", 'WOpcLCkhfa', 'WOWcgY4TDa', 'hmknW5FcUG', "WO/cH27dKNi", "WOdcJHVcUmo/", 'WQZcL8kbnwu', 'W7hdIrmwnW', 'gSo8nmoQ', 'dSo9gSoJsSkmsmoEW5y', 'WPz3AmoWW7y2', 'WQihbcWa', 'WRldGSoMWQXX', "ySoUWO/cPCk0", 'WPtcICk0WPKEemoQ', 'a8o0oeq5', 'WQ3cN2i', "oCk6W4/cH8kf", "lue+gSo2AG", 'WQbhrCoYW78', 'WOuuatS2zq', 'WQrUrSoInq', 'W6XLW4lcUSo8', 'fCoZvHW', 'WRFcMxRdN0VdIW', "f2/cGCoQsSk0uZVcLZm", 'BSoJkSoxW4ef', 'WPXblq', 'bhJcKmoOja', 'hColkxeu', 'kmoaW70lW40iW6JdKdNcT8oKWOa7', 'ur9lW4hdKG', 'pmobWQP0mG', 'i8ora8osW7pdHSoEBxxcTq', 'kSoDWORdQHS', 'WRxdO3JdTdi6na', 'WOyYWRigW6C', 'WRXMyCooW6SYogpcSSk4', 'WOVcLSkH', 'WRebiH4exSo0m8ojWOS', "WO1bibdcRmk+ketdV8kr", 'WRvQF8ooW6SYiMBcTSk4', 'W780jCkKWQ8', 'cSkomdm2', 'lvuTmq', 'WOBcV8k0WQGz', 'WR9IcmouhG', 'amknW68sba', 'DGKvW5hdVW', 'WQrotmoona', 'WRBcK2ddNNK', "h8k0W5/cH8kF", 'WRXtoIpcQG', "nmkLW6VcK8kpW5/dOWTRW5i", 'WRPQB8o0W74Clq', 'W6eivmoBWRJcJq', "WQ1+jSoteW", 'DCkHWPH9WRu', 'fmoeW44iW6e', 'rZxcGa', 'yGS3W4hdQG', 'WO0VWOqYW6C', 'WR7cGmkcWPKN', 'gSo2lq', 'WR9GeCoZhH0', 'WRxcLgBdN3ZdKa', 'WR53Ba', 'WR96W4GTWQS', 'hCoYi8oQW4m', "n8kLW6/cHCkKWOZdTHbDW5q", 'WOeycXqNF8on', "wd/cJ8kDWQhdOcnJCCoZ", 'WQZcM8kGWPiy', 'zSohWOddLM0', "mcZdI8k5W5n+za", 'WOHFW73dU8oW', 'FCozWOhcJSkQWP0', 'ASkbWQ0', 'WR3cQJhcN8oXWRNdQmkMoru', 'WRXpiZlcPq', 'WQLtoHdcOq', 'bmo3rXbgW7tdUtNcIG', 'WONcJKldQMBdSaChASo2', 'WPLjmahcRW', 'iIldMmky', 'eCo0mf8Y', 'WP0yaJKW', 'W6FdN1RcU1a', 'WQNcGM3dJNO', 'oGa0b0K', 'dmkXW6GNoW', 'fmoyW5iyW6hcJsXl', 'WOSqgYGUAmonnmouWP8', 'WOVcRSkqjKO', 'pCoujmoiFa', 'W4nrlr0jtmkdzmkBW40', 'WRddJmo0WOfm', 'W595WRRcGmkaW7Tcw8kijW', 'W4ddPf7cUvD5', 'WQr3WQtcLgC', 'W5CPASoVWORcQvOYuKC', 'W7nMWPRcRmkbW4fKDa', 'FSoLpCozW54f', 'WQFdVCoz', 'r8kAtgKtW5tdLmkmW5GY', 'W6agpSknWRa', 'fJldQ8kKW61Bv8oPeaS', 'tmkBsWiJ', 'ASoXp8o7W6q', 'xmkBtqecW4FdKa', 'W60EtSoCWQ3cKfSXw3u', 'r8krwYWcW5VcKCog', "WQldGh/dTcKZp2SU", 'WRVcRdxcLCooWRm', 'mmoKgmojvG', 'lM3cGmo4gG', 'WRVcHg8', 'W4PfW68', 'WPmjWOWKW7G', 'iIRdNSkE', 'WPXfoa', 'W6CyxmoAWQtcM0O7', 'zZ5TW4hdNG', 'WQZcVYJcKq', 'WOnpdJlcSG', 'dw3cJ8oVmCoRcMC', "m8oCBbb/", 'ACklWRK6W6aglbZdNCk0', 'WR5zg8o7pq', 'bmoPnfuU', 'W7ddMexcVx8', 'W6HnWRJcH8k0W5Ldtmkl', "W7ZcM8oOW5xdRc5/W7yblG", 'WOixW4q', 'WR7cT8kMnee', 'WOeuaZGrySoxlG', 'dSoyDtPh', 'bueEWPtcHSoEWRVcTWywW6nf', 'WPvQW4xdRCoF', 'WOJcQSoYjmow', 'ur1dW43dHSkFWPS', 'bSkoW4m', 'WQHMWQlcJCoMvW', 'WOTFW6mpWRO', 'WOFdQ8oBWOfW', 'eSkYW7NcLmkL', "WQL7WQ3cN8oNsmk+WONcKhS", 'lmojW71lWRK9zqVdKmkP', "WRO+iHKwrCoRdmo2W40", 'DSkDWRO', 'kLCTaCo3q8owW77cTa', 'wG4tW5NdUa', 'mCoqCbnNW63dGqJcR0i', 'DmkkWRLiWPjnWRRdRG', 'hCkxW6GxdW', 'BmooWOJdKM4A', 'iCkOW4mMgW', 'c8o9WOHeda', 'W7yQCmkGWRZdICoyrW', 'qgqqW6hcU8kuWQSUg8kA', 'W6xcI8o0W5ZdTY8', "W7ZcRs/cPCocWONdSW", "fmk+W5eMjq", 'W656W7pcMSkQqmoY', 'zmoFWPRcJSkm', 'Dmo5k8omW4Sodeecta', 'FqHMW7ZdVSkwWQFcVHyw', "W59jW6/cMa", 'WPWlcq0j', 'aCozW50pW7a', 'rmktxdOc', 'WQxdUgtdQdyZaNOLWP0', 'WQfXWQW', "W7nQWPlcGmk3W5X+", 'W4VdUf7cO1fUbSoFcCoX', 'v8kAsdS', 'qSkXWPeeW7O', 'jGuSk34', 'W7ulpSkjWRa', 'WO7cVKNcML7dTbWEya', 'W5pdVK7cRLDtcSkyx8kR', 'BSo2iCo0W4mocG', 'WRLGaCoXgrxdKW', 'qmkUWP0GW4C', "gSkwW43cO8o/", 'W4BdVIGpiq', 'WR3cQJhcN8oXWRK', 'W7NcNComW6hdLW', 'cSkmW5y', 'i2GPcCoB', 'WOveWOdcMmoz', 'WPhcKmk1WPKigCo8', 'D8oiWOddMwm', 'ACokWRBdOMi', 'WPXcjZlcQW', 'DCooWPtcJSkoWOBdRxJdSW', 'WORcSwJdMfu', 'WOJcL8kY', 'EmkFWQDDWPu', 'kCkHW6VcPmoT', 'zmozWQtcN8kmWPVdQNa', 'WQnPW6KfWR4', 'W6hdUKtcJ2W', 'WRRcRclcNSoPWRddMSkMjq', 'WQuWWRa8W6u', 'WRvnFmo7W60', 'lLSMbmokz8ooW6BcUq', 'WO1hqSocl8owWOe4A0S', 'leaRh8ogz8osW7lcQa', 'amoNtHPCW43dTYm', 'bMdcGSo5iCoRg27dUNC', 'D8kbErWY', 'WRJcK2VdK3hdTc0Mtq', 'vGNcM8krWQC', 'f8kDW5u2lq', 'W7hdV0hcOx4', 'EZH2W6hdU8kOWRtcSrWf', 'WQ0aWPKiW4K', 'WR7cTmkvWQiA', 'omksda', "nSo+WR3dGca", 'cCoMAHzl', 'eSkiW48Weq', 'taHbW6ddHa', 'W63dRNpdGmkQW6ZcIW', 'W6TkW5xcKmoH', 'i2lcTCo5bq', 'WRBcRNVdO2G', 'WQacW5yiW63dHruAdW', 'WQDAdsNcImkCjxFdISkb', 'omkpaWKa', 'rsO4W6BdUG', 'WR5Us8oIh8oVWQut', 'WPDSW5hdJSoy', 'W4JdUfZcRMXV', 'WPJcLCkDgq', 'W7OPmCkHWRi', 'WOLjoaJcK8kVpL7dVW', 'WO8qW5VcGHu', 'vHbeW4u', 'W4PiW6BdLmoqW6hdG3ikW5i', "cCo/DZT6", 'WORcISkH', 'wqji', 'nCoVWPNdMG8', 'dCo2cSo3W7y', 'WP4yaq', 'WRNcNM3dIhBdIJ8Mrmoo', "WOf+W4GVWR4", 'WR5CW63dSSoK', 'BCopWO3dKa', 'WR5QWQRcISo3', 'wSkvb2W', 'W6W8imkNWQS', 'ESktqt4H', 'e2hcH8oUdCoxfgldI3m', 'W4ddU04', 'fZldNmkEW73dK1e', 'WOLjoaG', 'WRGxWQqlW4u', 'lrSteLi', 'wSkDrYW', 'W59hW4ZcLSo9', 'vseEW7ZdTCkTWRL6fa', "WPi/W7dcPra", 'nCkBW5dcHtzCWQFcSSkGuCk9yG', 'pcJdMmkkW7O', 'g8ovWRX1pq', 'W47cP8ozW5xdSa', "WOm+iqua", 'WRCoWOqKW4pdKtzvs8ka', 'WQ1oW6BdU8oV', 'pmoqBJHs', 'WQCGaJO4i8o0iCoAWOi', 'pmonhmo0CCkx', 'Ea4rW4ldVW', 'fSoOWPhdIHS', 'ASkyWPTnWQi', 'j8ocjmo2W4q', 'F8ojWQaaW7qBkWZdI8oO', "WR/dQhRdOG", 'usJcJ8kzWR3dHqHjuG', 'qciEW5BdLq', 'CtLHW77dSq', 'lLS4g8oT', 'WPnHW5RdKSoUW4RdHalcUa', 'kCkTW7ZcVmk6', 'gmoLnvqptuxcOq', 'WRLHAmoLWQS1iNZdRSkY', 'WO9HWPxcK04', 'yqjxW6ZdUq', 'o0yRhmo8', 'W55JW43cVmoZ', 'lghcGmo5ba', 'lLSMba', 'WRnGxSoaoq', 'WOboiaxcQCk1FfddU8ka', 'hWFdImkGW5u', 'W5JdSd8ekq', 'fmksW4qAjCk8gaqPWQe', 'W7a3F8oPWQ4', 'n8oatq5Q', 'W50ubWFcL8kEawm', 'Frb3W5tdJW', 'W6ajcCkjWP8', 'W4G1vSolWPS', 'hCkkW7abaa', 'W7VcP8oSW5JdMW', "WQ/cVda", 'tmk9WPTmWRO', 'n8oEW58AW6xcGq', 'WRCLWRG8W5W', 'DCoYnmoCW7KpgKG', 'mCoRf8otW7C', "WQFdRmouWRj/", 'W5ldUden', 'WORcP0BdLhG', 'WR96W5a1WQS', 'qculW7S', 'p8kpW5iHpq', 'kmoWfhiACwBcVh8L', 'W6ZcNLVdILVdSdu', 'zCopWOxdShalWOZcGSk0FW', 'WO3cRmkrnufJWQ7dHmkPlG', 'dmkzW5KHj8kUga', "nSoVWP/dVtm", 'WOiCkb8Y', 'WR5RW5WUWRHmWRmEDmkt', 'a8ojW5CmW68', "f8okW5S/W7RcIIy", 'W5PmW6BcLCoxW5RdGa', 'ybRcJCkWWRW', 'WQbyW6mZWPK', 'W5FdVJmskSoQWQG', 'WOiyW4BcPcy', 'WRXShG', 'WQ97WQZcL8o8DmkRWRNcNq', "W4ddPti+nCoNWRKikWq", 'pSowgCoZAa', 'kSoOWPVcQtHmW6W4kmon', 'WQNcQCk7c0G', 'smozdCooW6S', 'WOpcMCkhfNT6', 'nmoxpCoMCa', 'W5ZdJmoDrdONW6tdOmkGgqD8Ea', 'gSo9jCozW5xdKSoMCLZcMa', 'W4pdVKBcPW', 'W7O3i8kyWOG', 'WOpcI8kPWOaz', 'WQejWPiVW4RdPZPrra', 'WQpdUCozWQ1oW5C', 'qbHcW4hdHa', 'W5PTWRtcHSkK', 'WRFcTgtdGhS', 'taNcOCkDWR8', 'yCkmWQCMW7GAmq3dGmkY', 'WRpdTmoAWQr7W5tdUCkIWQRcLq', 'WP5vnqdcSSk6m1VdUCkG', 'pSkbbcWU', "yb/cVSk0WRq", 'WPFcLCkNWOK', 'fmoFW5mwW5BcJcjxsmoM', 'WQ9XWQK', "WOLecmk5osLMrwe+", 'qCkDWOHoWQddKxfssCoyqCkMWQq', 'WPOqgtK', 'WRbLF8oYW64', 'c8oqk8o3W4q', 'fCkgW6hcUmoN', 'WRJcRSoebSo9', 'WQXpWP7cI3a', 'W5FdPsu', 'WRavWPC9W7pdVsrgsCkv', 'kCk1W6yMoW', 'WR5XWPxcILC', 'tmkdWOqwW6a', 'kmknW5e9aa', 'Dmo7WRBdSvC', 'WPlcJ8oWe8os', 'WR1UtCo8W6O', "vdVdL8k+vmk0mu7dTuBdU8k4", 'ms7dN8keW4v9EmoloG', 'nCkwW7yHea', 'WOXrbmobna', 'WPNcRSk7e0i', 'aSkXW4ZcPmon', 'WQVcVYVdNSk6WOxdLmkNBLy', 'fG3dQ8kLW4C', 'WOCdWPiPW6i', 'oSolbmo1vG', 'zrTdW6BdVa', 'W78CgmkSWR0', 'mdJdMmkcW5HR', 'jI7dGa', 'WPxcNmkRWP8Cea', 'WRJcHMe', 'WQvLq8ozlSoYWRuEyZ8', "xd/cMCkzWRNdHqqixSo+", 'hLfMWOtdNSknWPRdKZ9X', "WQfRFSo/W6i", 'cSoBWR90oq', 'WQtdN1ZdQry', 'WQr9WQlcJMWSW6S', 'b8oWn8oZW6C', "W6q6e8k+F8ofWPCox0BdUa", 'WQxcVmksWQqVjW', 'WPLgFCo8W4i', 'qSoMWO7dMhC', 'hfOHaSoF', 'zCkfWRWwW7iKjbZdKa', 'W4LWW5tcSmoO', 'uanoW5pdQCkyWPVcIYO', 'W4XYW7RcKCos', 'W750W5xcSCoQW7FdVKSaW7i', 'WRPdzColpG', 'W4WdA8oyWQy', 'WQqysmoAWRJdKbC', "WRC/W5BcQGi", 'aCkvW4WP', 'zCounSo3W4m', "j8k/W6pcKmk1", 'WP0JWQaoW48', 'WRtcLxRdJ14', 'WQXMhmoRfbxdKW', 'WRbZtmotW6K', 'WOeIlq4B', 'oCk5W7NcKmkXW4ldPrPRW54', 'WQDzW7hdUSoT', 'WQv7vCozlCoWWQatBve', 'a8o4mhKK', 'WRhcPMFdJfO', 'fmkWW4WZkW', 'WRHYWPFcL28', 'W6hdNHm1na', 'aKFcISotdW', 'y8otWRtcOSki', "WPtcJ8o+eSoU", 'WOjUz8otW4W', 'W7qSpSkNWO7dGCoiqby', 'W61QWPlcRCk9', 'WO8qW5NcGqC0', 'W4m5DCo8WR0', 'FbLRW6NdSW', "WRr9WRBcK20oW6/dTeK", 'sSkdWPWDW78', 'WRtdOhxdQdm', 'bmobCtfcW7tdUG7cOwW', 'eau3gLWr', "yCkmwSk/y8ojhmoLW6XA", 'kCokWRL8mq', 'WR9Lf8olfaZdMG', 'vCk9qWij', 'WQ3cJ8krfhy', "WQ/cKIhcN8o/WQNdV8kXnc8", 'aSoznCoEW7u', 'WRX9e8oSdGO', 'emo7uXbkW4JdVq', 'C8khWRCaW7eDkW3dNa', "pmk+W6tcGCkhW4xdOGTC", 'F8kAWQjwWQHnWQBdSaq', 'vIaDW5ddRCkyWRz6mmkC', 'W7CEwCo3WQlcKveNyq', 'fmkDW5K', 'A8kqWQqxW74aibO', 'pCozWRPviq', 'oCkDnGCW', 'W7izwConWQm', 'W7hcJCo9W4q', 'WPLfa8k1lY8Y', "zSoCWO/cQSk5", 'kSkxcXOl', 'a8oJofW5', 'WPnHW5RdKG', 'D8o7WOldNuG', 'WRdcVSkNWPCpbSoFWPyoW5S', 'WQajbcKZ', 'WONcNSo9a8oKW5JdRw8', 'WRpdJSkXWPddJZW5W6uajq', 'W7vOe8oLEmoJW6q', 'WOdcI8oIbmoX', 'WQjXWRZcN3e', 'WQZcNa7cV8oV', "vdm+W5FdTa", 'WRpcKCoha8oV', 'cmo3dL8cWOtdGslcL3q', 'W4JcVCoiW7FdLq', 'e8oSnKm5CLhcUw8', 'WO3cMCkoggfcWRFdO8kk', 'WOJcSSkTcwi', 'qbLDW4VdGCkc', 'WQXMhmoRdWVdG8koWP06', 'ewhcJSoUea', 'W5nsWRhcOSkZ', 'W4HRm8kxWPVdG8oLwYJcPa', 'iCoaDXjm', "W7lcISoXW6/dRY85W6umoq", 'dCohamobW7a', 'eCorzXbC', 'WOaFhcGJy8obj8oUWOK', 'WPXdyCoXhG', 'sCoBWPJdM3y', 'j8kEdbOrW6K', 'bmkVW6RcTmov', 'WOX8W5xdG8oC', 'mSkbW6BcVmkg', 'j8oiW5SvW5q', 'WOOyhtiTuSoai8oAWOW', 'qY0uW7ddQq', 'gYafpKe', 'W4FdVKtcRW', 'FcpcUSkmWQC', "xmo/pCoSW48", 'W7LMWPhcOCk8W75WBmkr', 'W6NcVmoSW4ldIq', 'pI7dLq', 'eaBdQ8k3W4a', 'pLSUdCo2qmoCW6pcRmoP', 'bSoXk8ozW47dKSoRzuS', 'uYekW6hdQCksWQfRga', "WRHBfSk+ga", 'WOqEgtKwyG', 'W5hdVKFcRKO', 'WRrUrSoYpW', 'WPFcStBdKmo7WR7dImk9laW', 'g3e7eSoAASoWW57cHSoq', 'WQLIW50OWR5AWPm', 'WOewWQiWW6BdLW1nyCkG', 'kN7cLmoKga', 'tSosWONdUui', 'WPFcSmkHnhvhWRZdLmkOhW', 'ACozWPtcHmkW', 'WOjyfCksitGoh3W3', 'WOVcMCkAeG', 'v8k7WR4sW5u', 'oIldGSkeW5jGoG', "Fmk+WPWuW6q", 'F8kAWQjw', 'p8onbmo0', 'WOTzf8kShq', 'W5roW5tcKWeVjGZcVHi', 'WRn9cSkEca', 'hSobbSomW5W', 'FCkNWO99WQ0', "ASk/WQjmWPG", 'cSoUW5i0W7W', 'pCkgW6lcRmk0', 'rX7cOSkZWQVdHJnYtSog', 'nmoWWQr8dW', 'WRDTWR3cJG', 'aHCVa2Ch', 'e8kqW4GNaW', 'fmoZwdTJ', 'W6e8rCoaWRK', 'WRrUqmoViSoqWRelya', 'WOldON3dJWq', 'j8o0WPW', 'xJC4W6FdQCkCWQe', 'WRrkWRNcQCoR', 'vmoHtcXWW7hdKa', 'W6xdNdmjmG', 'WQT3WQFcKSoaqCkPWRK', 'WQ93WQxcMG', 'dd4apfK', 's8kKWRWwW6q', 'pmo8WPhdIZm', 'W6BdM3dcRxDMimkLDSkE', 'CmoUo8oxW4yphq', 'WRejWOi', 'WRlcN2JdSNRdLIm', 'u8kkWPKcW7W', 'zSkBsGyn', 'WPRcSmkhfgvHWQFdVSkpaG', 'rseEW7ZdQmkjWR18pCkf', 'omobhSoRAa', 'BSoNkG', 'WOXvjJFcKG', 'pmksfHu', 'WQBdNfxdJHu', "WPe/WRG9W54", 'sCkzWObOWOG', 'wCkbtG', 'hmkwW4pcOSod', 'iYldImkvW5HwBSoaoW', 'nY7dJCkeW4rbDCopkIK', 'B8oYnCoxW5Wf', 'WR1Uemo5u0NcMSoDW4vL', 'aSo0m8oPW5pdMCoUlrZdNa', "W5/cJComW4pdVa", 'W5BdSKy', 'WPBcKSo1e8oF', 'WRVdTwhdTtqInhW', 'jt7dMCk1W5m', 'EmoFWPpcO8kBWOddQW', 'dXOObvW', 'wmkwWQjsWO4', 'WRnSqmoE', 'arCtbuC', 'WO96W5hdGCoCW43dLdlcTCkF', 'WQ9KW6ylWPq', 'WOqhoXS7', 'WQaZW7dcSWm', 'W6eVwmk4naZdGSonWOyZ', 'ACo4c8omW5Gjaum', "D8kIWOe/W4C", "c8o/imoLW40", "dCkGW6/cMCot", "WQBcTZddKmoTWRtdLmk+jvK", 'bd3dVmksW7q', 'WOX8W4BdMmosW4y', 'nX3dGmkOW6e', 'qclcJCksWR7dNqbswq', 'jsldJ8kBW5j2', 'DCopWORdGNW', 'v8oyWO3cHCkQ', 'WRa7W7pcUsCehu8', 'zmkmWRirW6q', "WQC9W5/cVHu", 'cSoHjmoNW5ldKSopE1RcGq', 'W6SXmCk2WRW', 'W5hdUhNcV0PPd8kw', 'WQhdRxRdRaK5', 'WOyhcI5Ska', 'j8ksdbGVW65dAq', 'WOnpjWe', 'ren2wMCJWRNcKCklbW', 'WPKIW7JcLWa', "WQD2ASo/W7u/kNZcSq", 'f8okW5SI', 'zCoekSoIW4G', 'vmksWPSXkhJcHmk6WQPS', 'W7HMv8kY', 'bGiIhfy', "mSolgmo/sG", 'gr8Tdq', 'luCDh8om', 'e8oQW709W4a', 'xCkCwJ0gW5VdNmkmW7r2', 'q8kXWOb7WOe', 'y8ocWPlcHCkBWOa', 'WOFcLCknowPGWRK', 'WP3cRSkjWOez', 'i8oohw8iEMtdVa', "WRT3WQ/cM8o9", "peC/emoC", 'WO8fW6xcPXO', 'WQvTB8o0W6KxjgBcSq', 'imkRkX4F', 'wZOllvCsWRJcN8kJla', 'tCkMWQKkW5u', 'WR97WRJcISo9vSkV', "W7ZcNmoYW5/dTG", 'WPFdI2hdQqO', 'Bmk7WPaWW4i', 'W4NdTKJcRLq', 'gCoiW4u', 'WQldPxVdOI8', 'WQb0Eq', 'WRddQSoAWRzkW43dLmk9WR8', 'WQyiWOmKW4G', 'WQFcV8kGegK', 'W4FdScq', 'W7f6W4JcKSoY', 'i8oYWPldPq', "WRn/WRBcS2CYW6S", 'l0mfp8ov', 'WQFdSCorWQm', 'W6ntWP7cQSkD', 'WPzNwCoxW7m', 'E8o9o8oVW7i', 'WPCuW5xcIHy', 'aCo1ofqUq0tcPgqa', 'WRfRAq', 'W4PuW7hcM8osW6RdO28aW4O', "g8kzW6ZcKmk/", 'WRTOW5ycWOa', 'WP99W5OSWOm', 'iIRdGmkBW6n9', 'WQHRW4i1WRXgWO8nDq', 'W5pdPWWBiG', 'WRJcKHdcSCoT', 'WRJcSHhcVSoU', 'rZlcN8kQWQy', 'WOPOpSoreG', 'gMaekSoC', 'yCozWPpdMNq', 'WRpdOhi', 'WO97WRJcJSoN', 'dCo2mSoL', 'WPtcPLtdSNO', 'qSoBW4ZcNmkMWOxdJ2ddPmoQ', 'WQycWOyMW43dRte', 'WQpdVMddOGK5', 'WRzfdHBcGW', 'WRdcO8kza2bMWRNdImk9', 'a8khW4ZcSCosmG', 'ySozWOlcHCkA', 'WP5FWP3cQ00', "uHrIW4/dOG", 'W7iztSobWQ7cKL0', 'pSoQW78OW5C', 'B8oXWOldLeq', 'W5jQW7FcRmoQ', 'WQbGWQBcU04', 'WP1jomkyltO', 'umoRmf44tfxcVNrT', 'ouCRdmoRCSodW6pcV8oA', 'lCksdHe2W7vtA2q', 'W746W6iIWPLSWRa5', 'WOSAW5dcPd8', "bSoPpvuZzL/cO2i", 'WQbvjHdcLa', 'EmotWPVcJ8kTWP3dSxS', 'h8oFWQnthG', 'jCk4W4tcRmkA', 'WOjziXBcQCkViKa', 'e8kSW60dhq', 'lLGPp8ob', 'WQxdUhFdSZG', 'g8odW48pW7tcIIbavmoT', 'lN7cGCoilG', 'WPeKW4lcRr05arxdTWS', 'qGLyW6xdUW', 'WQFdQmohWPLXW4RdKCk9WRJcOG', 'WROiW5S5W5JdOszr', 'W5SmsCotzhT3s0mU', 'WQLGhSo0', 'WO3cNCkDbwn3WRNdOCkhoG', 'W5q6u8oXWRy', 'WOxcNmkHWPKejCo4W4WX', 'ebeKma', 'xW4SW5BdTa', 'WRLlW73dHCoY', 'daBdV8kIW4C', 'W4NcISo1W6ddVG', "W5ffW6/cKmoQW6ddHxC", 'amk1W67cRSkt', 'WOLAW77dH8oi', 'gXRdISkkW6f5u8o2ftu', 'WPPsiGhcLmk0', "WQCIiCkXW6C9lYJcUSk+", "fCo+vaPe", 'WOvhnSo2dq', 'WRP5k8k7eHOmie0W', 'tCkJwW0Q', 'omoFWODEkq', 'tmkdW6yPEflcTSkNWPKeW74', 'wSkWWQrwWPrBWRZdJadcJa', 'lCo7rdfr', 'WP5cpCoDnq', 'WQD8WRRcPmo0', 'DCoeWOxcHmkm', 'eCogWPWcW7RcKw0a', 'W7ufxmomWR7cN0W9z1i', 'W6HnWQlcUCke', "wSoSWO/cMmk8", 'qs0DW7ddTa', 'W7qcwmoEWQNcKeWqyxC', 'W5PsW6BcLConW6RdTxCCW4S', 'fZumbLa', 'yCkryY4m', 'WRvJrSo0jmoLWQiq', "ng/cJSoZcW", 'WRddPxRdQW', "W4BdGh/cS0O", 'oSkSW7FcOmoN', 'WRBdTmouWQvX', 'W7ldUZOJkq', 'WRfbw8oZW4Slg1lcNmkl', 'p8omWRhdUcu', "W7/dQ3BdGSooWPFdR8k5aJ4", 'cSolWQj0oq', 'WRVdSmoJWRnp', 'c8o2jSoVW4JdP8oRy1C', 'gCoUkKq9tfpcQfGN', 'wCk8rWio', 'W73dQtyuna', 'kSoWWPvCcq', 'mmoBW7aXW5i', 'BqvdW4hdMW', 'WO5FW6axWP0', 'cmoDWR5KjNi', 'omksbHG', 'W5FdPHOJkG', 'pCkfW4WOkW', 'oSkoaXKxW6bEBMjd', 'vmkRWP5GWRnJWPJdIdFcPq', "WOv+B8o3nq", "mr7dGmk/W6y", 'WOrlW4q0WP0', 'WPtcNmkQ', 'vCojWOtdTKK', 'wtNcGG', "vCo+WRNcSCk5", 'emkvW5qT', "WRygWOi+W4ddQZTcrCkt", 'fSoMrYPX', 'WPWdgtKwyG', 'W5ldVL7cOW', 'rXbw', 'd8kVW6ixeq', "WR3cRI/cMCoU", 'WR3cPwhdLK8', "jJ/dJCkeW5i", 'W6W8e8kTgKZdLW', 'i8k2W7ZcGq', 'cMRcICoud8oLdgddNwO', 'hwqXW7tdTCkzW7HNcmov', 'nCkBW47cU8of', 'dCoCWRb5dW', 'aCoxWQtdRrO', 'WPXunrdcPq', 'W6RcGmoYW4tdVq', 'u8k9qbek', 'WOGChH4x', 'FmkAWPirW70', 'WPDyn8ovlW', 'WOqTWPGtW5y', 'tmktBbS3', "W73dHM/cHMW", 'W7uhgSkMWQm', 'qmkBrcWv', 'fCoRomo9sq', 'WOT6W5xdLmoC', 'xdxcGmkyWP7dNHrk', 'WRRcSrdcHmoOWRxdLCk1', 'W7RcP8oYW6JdTq', 'j8oGW6uQW4W', 'hmo5qXzQ', 'W6RdOLJcV2W', "WRFcJ2/dLxpdIZ4", 'xWKFW4ZdLW', 'iSode8oDtmkwqG', 'r8oHo8o9W6q', 'WPbia8k4pdGZh0KY', 'hSoiW5iCW6hcJa', "WQ5pW7/dPmo6", 'rHrCW5ddMCkEWPS', 'W63dKgBcMNy', "lLW+n8o0CSoEW6q", 'ih4KlCos', 'WPHcaCks', 'W61rWQtcQSkF', 'WOjybSkjlW', 'W5OUgCkuWPFdOCoICZtcJa', 'CJXaW4NdHW', 'oSoBc8oICq', 'WR94eqRcJa', 'W7ZdRMVcINLIgCkZAmkn', 'bCo9tG1AW4VdTd4', 'F8k4WR9oWRq', 'WRJcQSkebfO', 'W6OQjCkSWR0', 'WObcpGhcO8kV', "WRLTWRBcKND+W73dRW/cHG", 'WRDwbZBcMa', 'cwhcJCoUiCoLdW', 'nmofdCovsSkwqG', 'WR5sWOtcUwW', 'W6exu8omWRO', 'y8kAWQCxW7Gn', 'zhJcMmofWOeIt8oReaLkgG', 'WRZcHgNdN2xdGwP4bCou', 'W5rGWQpcQ8kD', 'WQbtWP7cRfO', "h8o6jCoJW4NdPmoHFK/cNa", 'WQ7cVSkOWPCm', 'WQzQtSoOoa', 'hwqGW7RdRSoDWRXNgmov', 'WPvfW4FdUCoH', 'ECocw0vCWRDnqwX1W713', 'xmkRWObnWOK', 'gSkBW67cTmkY', 'WOrznrFcLa', 'bmk6AabSvfJdTMGH', 'c8kqW4pcOCo5kvldNmkBW4S', "imk2W7/cL8k1", 'WO3cMSoZaSoB', 'WPZcNCkqpwz8WRm', 'qXHvW4ddNq', 'x8k3yWyw', 'c8o3WORdUc5cW4TQkCom', 'mCoZWOZdPIfn', 'DSoeWPtdM2i', 'WRTHamo3dbC', 'bSkEW5m'];
  return tU = function () {
    return t;
  }, tU();
}
tt.t = "* HEY.&* Yeah. You./";
const tY = {};
tY.t = "* I was standing&* RIGHT THERE.&* Waiting./";
const tP = {};
tP.t = "* You did nothing.&* For twenty seconds./";
const tA = {};
tA.t = "* BAKA!&* You absolute BAKA./", tA.baka = 0x1;
const te = {};
te.t = "* I could freeze&* this whole screen./";
const tk = {};
tk.t = "* ...I choose not to.&* Out of kindness./";
const ta = {};
ta.t = "* I had a great point&* and now it is gone.&* Your fault too./";
const tn = {};
tn.t = "* Fine. Two options.&* My arms hurt./";
const tj = {};
tj.t = "* Yeah. Thought so.&* Hand it over.%";
const tw = {};
tw.t = "* FINALLY. Sit down.&* THIS is a real song.%";
const tm = {};
function tG(t, Y, tg) {
  return N(t - -0x221, tg);
}
tm['0'] = tj, tm['1'] = tw;
const td = {};
td.t = "* ...&* Fuck you.%";
const tL = {};
function tq(t, Y, tg) {
  return N(tg - -0x2fe, Y);
}
tL.label = "THE APPLE", tL.desc = "she takes it";
const ty = {};
ty.label = "SOMETHING BETTER", ty.desc = "she insists";
var tz = 600,
  tR = "cirno",
  tH = [tt, tY, tP, tA, te, tk, ta, tn],
  tK = tm,
  tZ = td,
  tW = [tL, ty];
function to(t) {
  const tg = {
    'ictzM': function (tp, tS) {
      return tp > tS;
    },
    'gqOWL': "obj_writer",
    'Jlggk': "win",
    'wfgCN': function (tp, tS) {
      return tp !== tS;
    },
    'AqnQL': "lVRrW",
    'ogXDp': "qPicF",
    'NIFcs': "Uqbhm",
    'OqqxH': "KvkpB",
    'hJUCo': function (tp, tS) {
      return tp === tS;
    },
    'apscF': "MrMxN",
    'rQinF': "keydown",
    'kMHbs': function (tp, tS) {
      return tp(tS);
    },
    'brsZQ': function (tp, tS) {
      return tp * tS;
    },
    'eLxhu': function (tp, tS) {
      return tp * tS;
    },
    'Aelhu': "round",
    'LFvIe': function (tp, tS) {
      return tp === tS;
    },
    'mNnKi': "tkohN",
    'BQmcB': "Escape",
    'SskmM': function (tp, tS) {
      return tp === tS;
    },
    'mKpAH': "irvQs",
    'rnAsa': "dRyWE",
    'njFml': function (tp, tS) {
      return tp !== tS;
    },
    'PbdJC': "undefined",
    'SsoCM': "object",
    'TnkHY': function (tp, tS) {
      return tp === tS;
    },
    'jjQbw': "function",
    'KMxqQ': function (tp, tS) {
      return tp === tS;
    },
    'mvTGy': "log",
    'BQQVS': "warn",
    'imEcU': "info",
    'FMomq': "error",
    'DLZdL': "exception",
    'DmnDT': "table",
    'lHBMr': "trace",
    'AWzRg': function (tp, tS) {
      return tp < tS;
    },
    'vxwAM': "RicOj",
    'BvLJG': function (tp) {
      return tp();
    },
    'dUlOQ': function (tp, tS) {
      return tp === tS;
    },
    'zkcoB': "UOovG",
    'XnLFa': "JNDnv",
    'CXvYO': "video",
    'Xsrdu': "assets/ghetto_patrol.mp4",
    'xaERP': "position:fixed;inset:0;width:100vw;height:100vh;object-fit:contain;background:#000;z-index:2147483647;cursor:pointer;",
    'guXkq': "ended",
    'yHCTj': "click",
    'leldf': "loZVr",
    'otsbM': function (tp) {
      return tp();
    }
  };
  if (tg.ictzM(typeof document, 'u')) {
    if (tg.wfgCN(tg.vxwAM, tg.vxwAM)) {
      this.state = 8, this.timer = 0, this.sayLine(tg);
      return;
    } else {
      tg.BvLJG(t);
      return;
    }
  }
  function tO(tp, tS, tQ) {
    return t3(tS - -0x418, tS - 0x58, tp);
  }
  let tT;
  function tX(tp, tS, tQ) {
    return t3(tp - -0x3f9, tS - 0x13d, tS);
  }
  try {
    if (tg.dUlOQ(tg.zkcoB, tg.XnLFa)) {
      (tg.ictzM(this.timer, 12) && !W.exists(tg.gqOWL) || tg.ictzM(this.timer, 150)) && (o.with(tg.gqOWL, tp => tp.instance_destroy()), i.battleover = tg.Jlggk, this.instance_destroy());
      return;
    } else {
      tT = document.createElement(tg.CXvYO), tT.src = tg.Xsrdu, tT.style.cssText = tg.xaERP, tT.playsInline = true, tT.controls = false;
      let tp = false,
        tS = tx => {
          if (tg.wfgCN(tg.AqnQL, tg.ogXDp)) {
            if (!tp) {
              tp = true;
              try {
                tg.wfgCN(tg.NIFcs, tg.OqqxH) ? tT.pause() : tg.pause();
              } catch {}
              try {
                if (tg.hJUCo(tg.apscF, tg.apscF)) tT.remove();else {
                  let tF = tS(tQ, 0.5);
                  if (tF > 0.01) {
                    let tu = tF * tF * 0x6;
                    D.shakex = (t0.shakex || 0x0) * 0.6 + (t1.random() * 0x2 - 0x1) * tu, t2.shakey = (t3.shakey || 0x0) * 0.6 + (t4.random() * 0x2 - 0x1) * tu;
                  }
                }
              } catch {}
              document.removeEventListener(tg.rQinF, tQ, true), tg.kMHbs(t, !!tx);
            }
          } else {
            if (W.video && tx.video.v) try {
              tp.video.v.pause();
            } catch {}
          }
        },
        tQ = tx => {
          tg.LFvIe(tg.mNnKi, tg.mNnKi) ? tg.hJUCo(tx.key, tg.BQmcB) && (tx.preventDefault(), tx.stopPropagation(), tg.kMHbs(tS, true)) : (tn.save(), tj.translate(10, 11), tw.scale(tm, tG), td.translate(-10, -11), tL.beginPath(), tq.arc(7.2, 12, 5.7, 0, tg.brsZQ(ty.PI, 2)), tz.fill(), tR.beginPath(), tH.arc(12.8, 12, 5.7, 0, tg.eLxhu(tK.PI, 2)), tZ.fill(), tW.beginPath(), to.moveTo(3, 10), ti.quadraticCurveTo(10, 7, 17, 10), tb.quadraticCurveTo(17.5, 18.5, 10, 19.5), tr.quadraticCurveTo(2.5, 18.5, 3, 10), tM.closePath(), ts.fill(), th.lineCap = tg.Aelhu, tC.lineJoin = tg.Aelhu, tE.lineWidth = 2, tB.strokeStyle = tf.fillStyle, tl.beginPath(), tg.moveTo(10, 8.5), tO.quadraticCurveTo(11, 4.5, 13.2, 2.8), tT.stroke(), tX.beginPath(), tp.ellipse(6.3, 6, 3.6, 2.1, -0.5, 0, tg.brsZQ(tS.PI, 2)), tQ.fill(), tx.restore());
        };
      tT.addEventListener(tg.guXkq, () => tS(false)), tT.addEventListener(tg.yHCTj, () => tS(true)), tT.addEventListener(tg.FMomq, () => tS(false)), document.addEventListener(tg.rQinF, tQ, true), document.body.appendChild(tT), tT.play().catch(() => {
        tg.SskmM(tg.mKpAH, tg.rnAsa) ? this.hidHero && !this.hidHero.destroyed && (this.hidHero.visible = true) : (tT.muted = true, tT.play().catch(() => tS(false)));
      });
    }
  } catch {
    if (tg.njFml(tg.leldf, tg.leldf)) {
      const tx = nGlEcr.njFml(typeof g, nGlEcr.PbdJC) ? tx : nGlEcr.hJUCo(typeof tc, nGlEcr.SsoCM) && nGlEcr.TnkHY(typeof tv, nGlEcr.jjQbw) && nGlEcr.KMxqQ(typeof V, nGlEcr.SsoCM) ? F : this,
        tc = tx.console = tx.console || {},
        tv = [nGlEcr.mvTGy, nGlEcr.BQQVS, nGlEcr.imEcU, nGlEcr.FMomq, nGlEcr.DLZdL, nGlEcr.DmnDT, nGlEcr.lHBMr];
      for (let tV = 0; nGlEcr.AWzRg(tV, tv.length); tV++) {
        const tF = t7.constructor.prototype.bind(t8),
          tu = tv[tV],
          tI = tc[tu] || tF;
        tF.__proto__ = t9.bind(tt), tF.toString = tI.toString.bind(tI), tc[tu] = tF;
      }
    } else tg.otsbM(t);
  }
}
X(to, "playTakeover");
var ti = class Yv extends f {
  ["create"]() {
    const Y = {};
    Y.EXNwr = function (tS, tQ) {
      return tS === tQ;
    };
    Y.vRRbM = "gNDxm", Y.gYHnd = "MMoss";
    Y.HZKfK = "obj_maskfield", Y.FTccS = function (tS, tQ) {
      return tS < tQ;
    }, Y.amqBU = "taPmt", Y.pPWDQ = function (tS, tQ) {
      return tS !== tQ;
    }, Y.HGLQN = "spr_krisb_idle";
    const tX = Y;
    T.with(tX.HZKfK, tS => {
      tX.EXNwr(tX.vRRbM, tX.gYHnd) ? this.v.pause() : tS.active = 0;
    }), this.hidHero = null;
    for (let tS = 0; tX.FTccS(tS, 3); tS++) {
      if (tX.EXNwr(tX.amqBU, tX.amqBU)) {
        let tQ = b.char[tS];
        if (!tQ || tX.pPWDQ(b.charhero && b.charhero[tQ], tR)) continue;
        let tx = b.charinstance ? b.charinstance[tS] : null;
        tx && !tx.destroyed && (this.hidHero = tx, tx.visible = false);
        break;
      } else {
        let tc = tp.first('obj_growtangle');
        if (!tc || tc.destroyed) return null;
        let [tv, tV, tF, tu] = tu(tc);
        return !tV.isFinite(tv) || tF - tv < 0x8 || tu - tV < 0x8 ? null : [tv, tV, tF, tu];
      }
    }
    let tp = Z[tR];
    this.spr = tp && tp.sprites && s[tp.sprites.idlesprite] ? tp.sprites.idlesprite : tX.HGLQN, this.visible = true, this.state = 0, this.timer = 0, this.line = 0, this.sel = 0, this.x = -50, this.y = 250, this.walkTo = 150, this.bob = 0, this.heldSoul = null, this.thrown = 0, this.videoDone = 0;
  }
  ["cleanUp"]() {
    this.hidHero && !this.hidHero.destroyed && (this.hidHero.visible = true);
  }
  ["step"]() {
    const t = {
      'pToLH': "none",
      'JBvmD': function (tX, tp) {
        return tX === tp;
      },
      'xYMar': "iQcCa",
      'AMlDd': "lvNYY",
      'UUSGM': function (tX, tp) {
        return tX * tp;
      },
      'UegnA': function (tX, tp) {
        return tX > tp;
      },
      'QRmwB': function (tX, tp) {
        return tX(tp);
      },
      'hSBRY': "snd_hurt1",
      'pWTES': function (tX, tp) {
        return tX(tp);
      },
      'bBMOu': "snd_break1",
      'IGngf': function (tX, tp) {
        return tX == tp;
      },
      'tGBAb': function (tX, tp) {
        return tX != tp;
      },
      'hAOpK': function (tX, tp) {
        return tX + tp;
      },
      'kPkvE': "obj_heart",
      'xCnOi': function (tX, tp) {
        return tX === tp;
      },
      'dTAGV': function (tX, tp) {
        return tX === tp;
      },
      'ekyFu': "VcoKm",
      'xaqjR': "YUUaJ",
      'sbsVk': function (tX, tp) {
        return tX >= tp;
      },
      'utouY': function (tX, tp) {
        return tX > tp;
      },
      'zWOqs': "obj_writer",
      'QKOEN': function (tX, tp) {
        return tX > tp;
      },
      'oOuAF': "xPhbO",
      'lXwYw': "NQepb",
      'FjVrg': function (tX) {
        return tX();
      },
      'RjVdX': function (tX, tp) {
        return tX !== tp;
      },
      'fjcWX': function (tX, tp) {
        return tX(tp);
      },
      'jbqZf': "snd_menumove",
      'KidHy': function (tX) {
        return tX();
      },
      'SOBeh': function (tX, tp) {
        return tX(tp);
      },
      'TBGMB': function (tX) {
        return tX();
      },
      'raxBK': "snd_select",
      'wRGJz': "YYJiN",
      'Iicrf': function (tX, tp) {
        return tX > tp;
      },
      'XmPza': function (tX, tp) {
        return tX <= tp;
      },
      'UsxHO': function (tX, tp) {
        return tX === tp;
      },
      'ZvcEN': "SND_TXT1",
      'Fsnta': function (tX, tp) {
        return tX === tp;
      },
      'QqOvN': "BHpph",
      'hiDpT': "bREuZ",
      'rEkHx': function (tX, tp) {
        return tX * tp;
      },
      'yocoN': function (tX, tp) {
        return tX - tp;
      },
      'UcJgk': function (tX, tp) {
        return tX * tp;
      },
      'qJGCc': function (tX, tp) {
        return tX - tp;
      },
      'vSCtk': function (tX, tp, tS) {
        return tX(tp, tS);
      },
      'BeWsd': "snd_noise",
      'Kecsx': function (tX, tp) {
        return tX(tp);
      },
      'vjxAG': function (tX, tp) {
        return tX(tp);
      },
      'aIKLi': function (tX, tp) {
        return tX !== tp;
      },
      'qWFvI': "UEANE",
      'EHNZG': "PXEnL",
      'xibKD': "win",
      'kmGCp': function (tX, tp) {
        return tX > tp;
      },
      'xSrZb': function (tX, tp) {
        return tX === tp;
      },
      'KOzoB': function (tX, tp) {
        return tX === tp;
      },
      'vLSAw': "obj_battleblcon",
      'AuRNS': function (tX, tp) {
        return tX < tp;
      },
      'QGKSC': "PQJng",
      'otJoc': "sPchN",
      'feMkT': "lose"
    };
    this.timer++;
    let Y = T.first(t.kPkvE);
    if (t.xCnOi(this.state, 0)) {
      if (t.dTAGV(t.ekyFu, t.xaqjR)) this.videoDone = 1, this.videoSkipped = t;else {
        this.bob += 0.25, this.x += 3.2, t.sbsVk(this.x, this.walkTo) && (this.x = this.walkTo, this.state = 1, this.timer = 0, this.say());
        return;
      }
    }
    if (t.xCnOi(this.state, 1)) {
      (t.utouY(this.timer, 12) && !T.exists(t.zWOqs) || t.QKOEN(this.timer, 120)) && (T.with(t.zWOqs, tX => tX.instance_destroy()), this.line++, t.sbsVk(this.line, tH.length) ? (this.state = 2, this.timer = 0) : (this.timer = 0, this.say()));
      return;
    }
    if (t.JBvmD(this.state, 2)) {
      if (t.xCnOi(t.oOuAF, t.lXwYw)) {
        let tX = this.img.data;
        for (let tS = 0x0, tQ = 0x0; tS < this.grid.length; tS++, tQ += 0x4) {
          let tx = this.grid[tS] === 0x1 === this.hazardIsLit;
          tX[tQ] = tX[tQ + 0x1] = tX[tQ + 0x2] = tx ? 0xff : 0x0, tX[tQ + 0x3] = tx ? 0xff : 0x0;
        }
        this.outcx.putImageData(this.img, 0x0, 0x0);
        let tp = F.imageSmoothingEnabled;
        D.imageSmoothingEnabled = false, t0.drawImage(this.out, t1, t2, t3 - t4, t5 - t6), t7.imageSmoothingEnabled = tp, this.drawFlip(t8, t9, tt, tU, tY);
        return;
      } else {
        t.FjVrg(g) && t.RjVdX(this.sel, 0) && (this.sel = 0, t.fjcWX(h, t.jbqZf)), t.KidHy(O) && t.RjVdX(this.sel, 1) && (this.sel = 1, t.SOBeh(h, t.jbqZf)), t.QKOEN(this.timer, 20) && t.TBGMB(B) && (t.SOBeh(h, t.raxBK), this.picked = this.sel, this.state = 7, this.timer = 0, this.sayLine(tK[this.sel]));
        return;
      }
    }
    if (t.dTAGV(this.state, 7)) {
      if (t.RjVdX(t.wRGJz, t.wRGJz)) return false;else {
        if (!(t.Iicrf(this.timer, 12) && !T.exists(t.zWOqs)) && t.XmPza(this.timer, 150)) return;
        if (T.with(t.zWOqs, tc => tc.instance_destroy()), this.timer = 0, t.UsxHO(this.picked, 0)) {
          this.state = 3;
          return;
        }
        this.state = 5;
        try {
          t.QRmwB(C, t.ZvcEN);
        } catch {}
        t.fjcWX(to, tc => {
          const tv = {};
          tv.ZBNAz = t.pToLH;
          t.JBvmD(t.xYMar, t.AMlDd) ? (Y = uzmQrp.ZBNAz, W = null) : (this.videoDone = 1, this.videoSkipped = tc);
        });
        return;
      }
    }
    if (t.xCnOi(this.state, 3)) {
      if (t.Fsnta(t.QqOvN, t.hiDpT)) {
        this.heldSoul && !this.heldSoul.destroyed ? (this.thrown += 1, this.heldSoul.x += 6, this.heldSoul.y += t.UUSGM(this.thrown, 2.2), t.UegnA(this.heldSoul.y, 300) && (this.heldSoul.y = 300, this.state = 6, this.timer = 0, t.QRmwB(Y, t.hSBRY), t.pWTES(W, t.bBMOu))) : (this.state = 6, this.timer = 0);
        return;
      } else {
        const tc = {};
        tc.volume = 0.5, Y && (this.heldSoul = Y, Y.x += t.rEkHx(t.yocoN(t.hAOpK(this.x, 30), Y.x), 0.25), Y.y += t.UcJgk(t.qJGCc(t.qJGCc(this.y, 20), Y.y), 0.25)), t.utouY(this.timer, 24) && (this.state = 4, this.timer = 0, t.vSCtk(h, t.BeWsd, tc));
        return;
      }
    }
    if (t.dTAGV(this.state, 4)) {
      this.heldSoul && !this.heldSoul.destroyed ? (this.thrown += 1, this.heldSoul.x += 6, this.heldSoul.y += t.UcJgk(this.thrown, 2.2), t.utouY(this.heldSoul.y, 300) && (this.heldSoul.y = 300, this.state = 6, this.timer = 0, t.Kecsx(h, t.hSBRY), t.vjxAG(h, t.bBMOu))) : (this.state = 6, this.timer = 0);
      return;
    }
    if (t.dTAGV(this.state, 5)) {
      if (t.aIKLi(t.qWFvI, t.qWFvI)) this.grid = new t0(t1 * t2), this.frame = 0x0, this.damage = this.damage || 0x5, this.target = this.target === void 0x0 ? 0x0 : this.target, this.threshold = this.threshold === void 0x0 ? 0x80 : this.threshold, this.hazardIsLit = this.hazardIsLit === void 0x0 ? true : !!this.hazardIsLit, this.adaptivePolarity = this.adaptivePolarity === void 0x0 ? true : !!this.adaptivePolarity, this.prev = new t3(t4 * t5), this.litEma = 0.25, this.sceneWait = 0x0, this.hazRun = 0x0, this.lastFlip = -0x3e7, this.cuts = 0x0, this.decided = false, this.flipGrace = 0x0, this.flips = 0x0, this.active = 0x1, this.video = null, this.usingVideo = false, this.maskVideo && t6() && (this.video = new t7(this.maskVideo), this.video.ok && this.video.start()), t8() && (this.out = t9.createElement('canvas'), this.out.width = tt, this.out.height = tU, this.outcx = this.out.getContext('2d'), this.img = this.outcx.createImageData(tY, tP), this.hi = tA.createElement('canvas'), this.hi.width = 0x1e0, this.hi.height = 0x168, this.hicx = this.hi.getContext('2d'), this.hiOk = typeof this.hicx.filter == 'string'), typeof te < 'u' && (tk.DR_maskFieldSource = 'procedural');else {
        if (!this.videoDone) return;
        if (this.videoSkipped) {
          if (t.dTAGV(t.EHNZG, t.EHNZG)) {
            this.state = 8, this.timer = 0, this.sayLine(tZ);
            return;
          } else {
            if (gVMqEl.IGngf(s, h[f]) && gVMqEl.tGBAb(g.charCodeAt(O), T[gVMqEl.hAOpK(c, 1)])) return false;
          }
        }
        b.battleover = t.xibKD, this.instance_destroy();
        return;
      }
    }
    if (t.xCnOi(this.state, 8)) {
      (t.utouY(this.timer, 12) && !T.exists(t.zWOqs) || t.kmGCp(this.timer, 150)) && (T.with(t.zWOqs, tv => tv.instance_destroy()), b.battleover = t.xibKD, this.instance_destroy());
      return;
    }
    if (t.xSrZb(this.state, 6) && t.KOzoB(this.timer, 20)) {
      T.with(t.zWOqs, tv => tv.instance_destroy()), T.with(t.vLSAw, tv => tv.instance_destroy());
      for (let tv = 0; t.AuRNS(tv, 3); tv++) {
        if (t.aIKLi(t.QGKSC, t.otJoc)) {
          let tV = b.char[tv];
          tV && (b.hp[tV] = 0);
        } else {
          let tF = this.box();
          tF && o(this, i.first('obj_heart'), tF, M, s);
        }
      }
      b.battleover = t.feMkT, this.instance_destroy();
    }
  }
  ["say"]() {
    this.sayLine(tH[this.line]);
  }
  ["sayLine"](t) {
    const tg = {
      'zlkmo': function (tp, tS, tQ) {
        return tp(tS, tQ);
      },
      'vlRNt': "cirno_baka",
      'kPIcz': function (tp, tS, tQ) {
        return tp(tS, tQ);
      },
      'wCGit': "SND_TXT1",
      'NahwF': function (tp, tS, tQ, tx) {
        return tp(tS, tQ, tx);
      },
      'OpeWY': function (tp, tS) {
        return tp + tS;
      },
      'mijet': function (tp, tS) {
        return tp - tS;
      }
    };
    if (!t) return;
    b.msg = new Array(100).fill('\x20'), b.msg[0] = t.t, b.typer = 1, b.fc = 0, t.baka ? h("cirno_baka", {
      'volume': 0.9
    }) : h("SND_TXT1", {
      'volume': 0.7
    });
    let tX = W(Math.round(this.x) + 26, Math.round(this.y) - 26, 10);
    return tX && (tX.side = -1, tX.mywriter && (tX.mywriter.mycolor = E.black, tX.mywriter.xcolor = E.black)), tX;
  }
  ["draw"](Y) {
    const tg = {};
    tg.XQEMT = function (tx, tc) {
      return tx === tc;
    }, tg.OurtT = function (tx, tc) {
      return tx !== tc;
    }, tg.hLnEK = "DIRll", tg.kyasT = "GQRNt", tg.HsVpj = function (tx, tc) {
      return tx * tc;
    }, tg.Bespu = function (tx, tc) {
      return tx - tc;
    };
    tg.nVFVr = function (tx, tc) {
      return tx / tc;
    }, tg.ptgSY = "#000000", tg.sLlvc = "center", tg.jdBZt = function (tx, tc) {
      return tx < tc;
    };
    tg.RRNBE = function (tx, tc) {
      return tx === tc;
    }, tg.zIZnB = function (tx, tc) {
      return tx === tc;
    };
    tg.Wxkmz = "fnt_mainbig", tg.jMsNX = "#5a5a5a", tg.deKqP = "fnt_main", tg.qKRZP = "#b0b0b0", tg.tTwrQ = "#4a4a4a", tg.YMSRp = "left";
    const tp = tg;
    if (tp.XQEMT(this.state, 5)) return;
    if (s[this.spr]) {
      if (tp.OurtT(tp.hLnEK, tp.kyasT)) {
        let tx = tp.XQEMT(this.state, 0) ? tp.HsVpj(Math.abs(Math.sin(this.bob)), 3) : 0;
        Y.draw_sprite_ext(this.spr, 0, Math.round(this.x), Math.round(tp.Bespu(this.y, tx)), 2, 2, 0, E.white, 1);
      } else {
        let tc = s.createElement('video');
        tc.src = h, tc.loop = true, tc.muted = false, tc.playsInline = true, tc.preload = 'auto', tc.addEventListener('error', () => {
          this.ok = false;
        }), tc.style.cssText = "position:fixed;left:-10px;top:-10px;width:1px;height:1px;opacity:0.01;pointer-events:none;";
        try {
          V.body.appendChild(tc), this.attached = true;
        } catch {}
        this.v = tc, this.cv = g.createElement('canvas'), this.cv.width = O, this.cv.height = T, this.cx = this.cv.getContext('2d', {
          'willReadFrequently': true
        }), this.ok = true, c = this;
      }
    }
    if (tp.OurtT(this.state, 2)) return;
    let tS = Y.ctx,
      tQ = Math.min(1, tp.nVFVr(this.timer, 14));
    tS.save(), tS.globalAlpha = tp.HsVpj(tQ, 0.62), tS.fillStyle = tp.ptgSY, tS.fillRect(0, 0, 640, 480), tS.globalAlpha = tQ, Y.draw_set_halign(tp.sLlvc);
    for (let tv = 0; tp.jdBZt(tv, 2); tv++) {
      let tV = tp.RRNBE(this.sel, tv),
        tF = tp.zIZnB(tv, 0) ? 200 : 440;
      Y.draw_set_font(tp.Wxkmz), Y.draw_text(tF, 196, tW[tv].label, tV ? E.white : tp.jMsNX), Y.draw_set_font(tp.deKqP), Y.draw_text(tF, 228, tW[tv].desc, tV ? tp.qKRZP : tp.tTwrQ);
    }
    Y.draw_set_halign(tp.YMSRp), tS.restore();
  }
};
X(ti, "obj_badapple_egg"), Q(ti, "kinds", l("obj_badapple_egg", f)), Q(ti, "defaultDepth", -500);
var tb = ti;
function tr(t) {
  const Y = {
    'mSnrk': function (tS) {
      return tS();
    },
    'xLYKF': function (tS, tQ) {
      return tS !== tQ;
    },
    'DgNne': "omWBR",
    'rSJnK': "obj_heart",
    'rXxNJ': function (tS, tQ) {
      return tS === tQ;
    },
    'xynDr': function (tS, tQ) {
      return tS > tQ;
    },
    'gvQzg': function (tS, tQ) {
      return tS - tQ;
    },
    'bCOnc': function (tS, tQ) {
      return tS > tQ;
    },
    'mQhHd': function (tS, tQ) {
      return tS - tQ;
    },
    'jONYB': function (tS, tQ) {
      return tS + tQ;
    },
    'wrwTr': function (tS, tQ) {
      return tS < tQ;
    },
    'oFtcM': "obj_maskfield",
    'KebJK': function (tS, tQ, tx, tc) {
      return tS(tQ, tx, tc);
    }
  };
  if (t.eggDone) return;
  let tg = T.first(Y.rSJnK);
  if (!tg) {
    t.eggIdle = 0;
    return;
  }
  let tO = Y.rXxNJ(t.eggX, void 0) || Y.xynDr(Math.abs(Y.gvQzg(tg.x, t.eggX)), 0.5) || Y.bCOnc(Math.abs(Y.mQhHd(tg.y, t.eggY)), 0.5);
  if (t.eggX = tg.x, t.eggY = tg.y, tO) {
    t.eggIdle = 0;
    return;
  }
  t.eggIdle = Y.jONYB(t.eggIdle || 0, 1), !Y.wrwTr(t.eggIdle, tz) && (t.eggDone = 1, t.eggIdle = 0, T.with(Y.oFtcM, tS => {
    if (Y.xLYKF(Y.DgNne, Y.DgNne)) {
      uhCDmh.mSnrk(Y);
      return;
    } else {
      if (tS.video && tS.video.v) try {
        tS.video.v.pause();
      } catch {}
    }
  }), Y.KebJK(r, -50, 250, tb));
}
X(tr, "watchForEgg"), c();
var tM = 20,
  ts = 20;
function th(t) {
  const tO = {
    'YHrxK': function (tc, tv) {
      return tc !== tv;
    },
    'kJtXS': "PjNRs",
    'jHWnh': function (tc, tv) {
      return tc * tv;
    },
    'mBhzd': function (tc, tv) {
      return tc * tv;
    },
    'CkhDj': "round",
    'KXIrn': function (tc, tv) {
      return tc * tv;
    },
    'pPCIH': "canvas",
    'sCNcy': "#ffffff",
    'cfiXI': "#d8d8d8",
    'GRWkd': "#c4c4c4",
    'MtLHJ': "#000000",
    'JHFwR': function (tc, tv) {
      return tc(tv);
    },
    'JjWsw': function (tc, tv) {
      return tc(tv);
    },
    'LGCSB': function (tc, tv) {
      return tc * tv;
    },
    'jRCPJ': "rgba(0,0,0,0.5)",
    'AGwnW': "rgba(0,0,0,0.75)"
  };
  let tT = document.createElement("canvas");
  tT.width = tM, tT.height = ts;
  let tp = tT.getContext('2d'),
    tS = "#ffffff",
    tQ = t ? "#d8d8d8" : "#c4c4c4",
    tx = tc => {
      tp.save(), tp.translate(10, 11), tp.scale(tc, tc), tp.translate(-10, -11), tp.beginPath(), tp.arc(7.2, 12, 5.7, 0, Math.PI * 2), tp.fill(), tp.beginPath(), tp.arc(12.8, 12, 5.7, 0, Math.PI * 2), tp.fill(), tp.beginPath(), tp.moveTo(3, 10), tp.quadraticCurveTo(10, 7, 17, 10), tp.quadraticCurveTo(17.5, 18.5, 10, 19.5), tp.quadraticCurveTo(2.5, 18.5, 3, 10), tp.closePath(), tp.fill(), tp.lineCap = "round", tp.lineJoin = "round", tp.lineWidth = 2, tp.strokeStyle = tp.fillStyle, tp.beginPath(), tp.moveTo(10, 8.5), tp.quadraticCurveTo(11, 4.5, 13.2, 2.8), tp.stroke(), tp.beginPath(), tp.ellipse(6.3, 6, 3.6, 2.1, -0.5, 0, Math.PI * 2), tp.fill(), tp.restore();
    };
  return tp.fillStyle = "#000000", tx(1.22), tp.fillStyle = tS, tx(1), t || (tp.fillStyle = tQ, tp.beginPath(), tp.ellipse(13.1, 14, 1.9, 3, 0.3, 0, Math.PI * 2), tp.fill(), tp.strokeStyle = "rgba(0,0,0,0.5)", tp.lineWidth = 1, tp.beginPath(), tp.moveTo(6.4, 10.8), tp.quadraticCurveTo(5.4, 13.8, 6.6, 16.6), tp.stroke()), tp.strokeStyle = "rgba(0,0,0,0.75)", tp.lineWidth = 1, tp.beginPath(), tp.moveTo(3.6, 6.9), tp.quadraticCurveTo(6.4, 5.4, 9, 5.1), tp.stroke(), tT;
}
X(th, "paint");
var tC = false;
function tE() {
  const t = {
    'iATqb': function (tT, tX, tp, tS) {
      return tT(tX, tp, tS);
    },
    'gOiXm': "spr_apple_soul",
    'gXzjY': function (tT, tX) {
      return tT > tX;
    },
    'aesIj': function (tT, tX) {
      return tT !== tX;
    },
    'vRJpq': "bwTKh",
    'Kbfbr': "bCjqb",
    'qdkwz': function (tT, tX) {
      return tT - tX;
    },
    'QMnhw': function (tT, tX) {
      return tT(tX);
    },
    'zsAtj': function (tT, tX) {
      return tT(tX);
    }
  };
  if (tC) return "spr_apple_soul";
  if (typeof document > 'u' || typeof HTMLCanvasElement > 'u') return null;
  try {
    return s.spr_apple_soul = {
      'name': "spr_apple_soul",
      'w': tM,
      'h': ts,
      'ox': 0x0,
      'oy': 0x0,
      'frames': 0x2,
      'bb': [2, 2, tM - 3, ts - 3],
      'precise': false,
      'img': [th(false), th(true)]
    }, tC = true, "spr_apple_soul";
  } catch {
    return null;
  }
}
X(tE, "registerAppleSoul");
function tB(t) {
  b.monstername[t] = "Bad Apple", b.monstermaxhp[t] = 0x4b0, b.monsterhp[t] = 0x4b0, b.monsterat[t] = 0xc, b.monsterdf[t] = 0x0, b.monsterexp[t] = 0x0, b.monstergold[t] = 0x0, b.sparepoint[t] = 0x0, b.mercymod[t] = 0x0, b.mercymax[t] = 0x64, b.canact[t][0x0] = 0x1, b.actname[t][0x0] = 'Check', b.actdesc[t][0x0] = "A film.#Stand in whichever#colour there is more of.", b.canact[t][0x1] = 0x1, b.actname[t][0x1] = 'Squint', b.actdesc[t][0x1] = "Read the#shapes.", b.canact[t][0x2] = 0x1, b.actname[t][0x2] = 'Applaud', b.actdesc[t][0x2] = "For the#performance.", b.battlemsg[0x0] = "* The film begins.";
}
X(tB, 'setupSilhouetteStats');
var tf = class YV extends q {
  ["create"]() {
    Object.assign(this, {
      'turns': 0x0,
      'talked': 0x0,
      'talktimer': 0x0,
      'talkmax': 0x3c,
      'attacked': 0x0,
      'state': 0x0,
      'flash': 0x0,
      'siner': 0x0,
      'fsiner': 0x0,
      'hurt': 0x0,
      'hurttimer': 0x0,
      'acting': 0x0,
      'actcon': 0x0,
      'con': 0x0,
      'mercymod': 0x0,
      'mytarget': 0x0,
      'field': null
    }), this.image_xscale = 0x2, this.image_yscale = 0x2, this.spriteOk() || (this.sprite_index = 'spr_dummymonster');
  }
  ["spriteOk"]() {
    return !!s[this.sprite_index];
  }
  ["draw"](Y) {
    let tg = t5();
    if (!tg) return super.draw ? super.draw(Y) : void 0x0;
    let tO = 0x64,
      tT = 0x4b,
      tX = Math.round(this.x - tO / 0x2),
      tp = Math.round(this.y - tT / 0x2),
      tS = Y.ctx;
    tS.save(), tS.fillStyle = "#000000", tS.fillRect(tX - 0x4, tp - 0x4, tO + 0x8, tT + 0x8), tS.imageSmoothingEnabled = true, tS.imageSmoothingQuality = 'high', tS.globalAlpha = this.hurt > 0x0 && this.hurttimer % 0x4 < 0x2 ? 0.45 : 0x1;
    try {
      tS.drawImage(tg, tX, tp, tO, tT);
    } catch {}
    tS.globalAlpha = 0x1, tS.strokeStyle = "#ffffff", tS.lineWidth = 0x2, tS.strokeRect(tX - 0x3, tp - 0x3, tO + 0x6, tT + 0x6), tS.restore();
  }
  ["userEvent"](t) {
    t === 0xc && (b.monsterx[this.myself] = this.x, b.monstery[this.myself] = this.y);
  }
  ["step"]() {
    let Y = this.myself;
    if (b.monster[Y] === 0x1) {
      if (b.mnfight !== 0x2 && (b.mnfight = 0x2, b.myfight = -0x1, b.charturn = L()), !T.exists('obj_moveheart') && !T.exists('obj_heart') && !this.soulSent && (this.soulSent = 0x1, i()), !T.exists('obj_growtangle')) {
        let tg = r(0x140, 0xa5, o);
        tg && (tg.maxxscale = 4.8, tg.maxyscale = 3.6, tg.noborder = true);
      }
      if (this.attacked === 0x0 && T.exists('obj_growtangle')) {
        let tO = b.badAppleMode || 'auto';
        this.field = r(0x140, 0xaa, t9, {
          'maskVideo': "assets/silhouette.mp4",
          'damage': 0x1,
          'target': 0x0,
          'hazardIsLit': tO !== 'black',
          'adaptivePolarity': tO === 'auto'
        }), this.attacked = 0x1;
        let tT = tE();
        tT && T.with('obj_heart', tX => {
          tX.sprite_index = tT;
        });
      }
      if (b.turntimer < 0x12c && (b.turntimer = 0x258), tr(this), this.attacked === 0x1 && this.applecheck !== 0x1) {
        let tX = tE();
        tX && T.with('obj_heart', tp => {
          tp.sprite_index !== tX && (tp.sprite_index = tX);
        }), T.exists('obj_heart') && (this.applecheck = 0x1);
      }
    }
  }
};
X(tf, 'obj_silhouette_enemy'), Q(tf, 'kinds', l('obj_silhouette_enemy', q)), Q(tf, 'defaultDepth', 0x5a), Q(tf, 'defaultSprite', 'spr_tvhead');
var tl = tf;
x(tl, "G.mnfight = 2;");
export { F as a, t5 as b, tE as c, tB as d, tl as e };