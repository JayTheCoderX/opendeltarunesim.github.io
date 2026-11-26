const s = function () {
    let Wr = true;
    return function (WN, WF) {
      const WC = Wr ? function () {
        if (WF) {
          const Wy = WF.apply(WN, arguments);
          return WF = null, Wy;
        }
      } : function () {};
      return Wr = false, WC;
    };
  }(),
  l = s(this, function () {
    if (l.bind().toString().indexOf('\x0a') !== -0x1) return;
    return l.toString().search(".*").toString().constructor(l).search(".*");
  });
l();
import { f as w, k as g } from './c-KLECZKO5.js';
import { Xg as Y, Yg as M, bd as a } from './c-PWNRTD7X.js';
import { G as x } from './c-J7PU4477.js';
import { b as o } from './c-GI6IDYOV.js';
import { g as e } from './c-ZQQWH6UG.js';
import { Fb as b, N as j, X as f, _c as u, cb as m, db as i, hc as t, jb as r, kb as y, n as W0, nb as W1, pb as W2, qd as W3, sb as W4, xb as W5, yb as W6 } from './c-PBMEVLU6.js';
import { a as W7, l as W8 } from './c-XSSGDLV7.js';
W8();
var W9 = u().constructor,
  WW = null;
try {
  WW = a(0x1, 0x1).constructor;
} catch {}
var Wp = W7(Wr => Wr instanceof W9, 'isPath'),
  WX = W7(() => {}, 'NOOP'),
  WJ = ['CanvasPattern', 'CanvasGradient', 'CanvasRenderingContext2D', 'OffscreenCanvasRenderingContext2D', 'HTMLCanvasElement', 'OffscreenCanvas', 'ImageBitmap', 'HTMLImageElement', 'HTMLVideoElement', 'HTMLAudioElement', 'Path2D', 'AudioBuffer', 'AudioNode'].map(Wr => globalThis[Wr]).filter(Wr => typeof Wr == 'function'),
  Wd = W7(Wr => {
    let WN = Wr && Wr.constructor;
    return !!WN && WN.name === 'SfxVoice' && typeof Wr._halt == 'function' && 'entry' in Wr;
  }, 'isSfxVoice'),
  Wc = W7(Wr => {
    for (let WN of WJ) if (Wr instanceof WN) return !0x0;
    return Wd(Wr);
  }, 'isHostRender'),
  Wn = ["./gm.js", "./globals.js", "./generated/runtime.js", "./battle.js", "./bullets.js", "./heart.js", "./text.js", "./backgrounds.js", "./jevil.js", "./ut_runtime.js", "./ch2spells.js"],
  Ws = new Map(),
  Wz = new Map(),
  WP = W7(Wr => ["./generated/ch" + Wr + "_objects.js", "./generated/ch" + Wr + "_scripts.js", "./generated/ch" + Wr + "_shims.js", "./generated/ch" + Wr + "_stubs.js"], 'chapterModules');
function WU(Wr = e.chapter) {
  let WN = Wn.concat(typeof Wr == 'number' && Wr >= 0x2 ? WP(Wr) : []);
  return Promise.all(WN.map(WF => Ws.has(WF) ? null : Wt(WF).then(WC => {
    Ws.set(WF, WC), Wz.delete(Wr);
  }, () => {})));
}
W7(WU, 'prepareWire');
function WO(Wr) {
  let WN = Wz.get(Wr);
  if (WN) return WN;
  let WF = p8 => Ws.get(p8),
    WC = WF("./generated/ch" + Wr + "_objects.js"),
    Wy = WF("./generated/ch" + Wr + "_scripts.js"),
    WA = WF("./generated/ch" + Wr + "_shims.js"),
    WH = WF("./generated/ch" + Wr + "_stubs.js"),
    p0 = WF("./generated/runtime.js");
  if (!WC || !Wy || !p0) return null;
  WN = Object.create(null);
  let p1 = p8 => {
    for (let p9 of Object.keys(p8)) Object.defineProperty(WN, p9, {
      'get': () => p8[p9],
      'configurable': !0x0,
      'enumerable': !0x0
    });
  };
  for (let p8 of Wn) {
    let p9 = WF(p8);
    p9 && p1(p9);
  }
  WH && p1(WH), p1(WC);
  let p2 = () => {},
    p3 = pW => Wy[pW] || WA && WA[pW] || p0[pW] || p2,
    p4 = new Proxy({}, {
      'get': (pW, pp) => WC[pp] || WH && WH[pp]
    }),
    p5 = (pW, pp) => {
      if (typeof pW == 'number' && (pW = p0.objectByIndex(pW)), typeof pW == 'function' || typeof pW == 'string') return W5.with(pW, pp);
      pW && typeof pW == 'object' && !pW.destroyed && pp(pW);
    },
    p6 = WF("./gm.js"),
    p7 = {
      'SCRIPT': p3,
      'OBJ': p4,
      'withInst': p5,
      'instance_destroy': p2,
      'S': WA,
      'SCR': Wy,
      'RT': p0,
      '__SELF': Wy,
      '__SHIM': WA,
      '__OBJ_ALL': WC,
      '__OBJ_STUB': WH,
      'scr_monsterdefeat_of': p0.scr_monsterdefeat_of,
      'trigger_event': p0.trigger_event
    };
  for (let pW of Object.keys(p7)) Object.defineProperty(WN, pW, {
    'value': p7[pW],
    'configurable': !0x0,
    'enumerable': !0x0
  });
  return p6 && Object.defineProperty(WN, 'g', {
    'get': () => p6.curG,
    'configurable': !0x0,
    'enumerable': !0x0
  }), Wz.set(Wr, WN), WN;
}
W7(WO, 'chapterScope');
var WR = new Set("break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield async await of true false null undefined NaN Infinity arguments get set static".split('\x20')),
  Wl = new Map();
function Wq(Wr) {
  let WN = Wl.get(Wr);
  if (WN) return WN;
  let WF = Wr.replace(/\/\*[\s\S]*?\*\//g, '\x20').replace(/\/\/[^\n]*/g, '\x20').replace(/'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g, '\x22\x22'),
    WC = new Set();
  for (let p0 of WF.matchAll(/\b(?:let|const|var)\s+([A-Za-z_$][\w$]*)/g)) WC.add(p0[0x1]);
  for (let p1 of WF.matchAll(/\b(?:let|const|var)\s*[[{]([^\]}]*)[\]}]/g)) for (let p2 of p1[0x1].split(',')) {
    let p3 = p2.trim().split(/[\s:=]/)[0x0];
    p3 && WC.add(p3);
  }
  for (let p4 of WF.matchAll(/\(([^()]*)\)\s*=>/g)) for (let p5 of p4[0x1].split(',')) {
    let p6 = p5.trim().split(/[\s=]/)[0x0];
    /^[A-Za-z_$][\w$]*$/.test(p6) && WC.add(p6);
  }
  for (let p7 of WF.matchAll(/([A-Za-z_$][\w$]*)\s*=>/g)) WC.add(p7[0x1]);
  for (let p8 of WF.matchAll(/\bfunction\s*[A-Za-z_$]?[\w$]*\s*\(([^()]*)\)/g)) for (let p9 of p8[0x1].split(',')) {
    let pW = p9.trim().split(/[\s=]/)[0x0];
    pW && WC.add(pW);
  }
  for (let pp of WF.matchAll(/\bcatch\s*\(\s*([A-Za-z_$][\w$]*)/g)) WC.add(pp[0x1]);
  let Wy = new Set(),
    WA = /[A-Za-z_$][\w$]*/g,
    WH;
  for (; WH = WA.exec(WF);) {
    let pX = WH[0x0],
      pJ = WH.index - 0x1;
    for (; pJ >= 0x0 && (WF[pJ] === '\x20' || WF[pJ] === '\x0a' || WF[pJ] === '\x09' || WF[pJ] === '\x0d');) pJ--;
    if (pJ >= 0x0 && (WF[pJ] === '.' || /[0-9]/.test(WF[pJ]))) continue;
    let pd = WA.lastIndex;
    for (; pd < WF.length && (WF[pd] === '\x20' || WF[pd] === '\x0a' || WF[pd] === '\x09' || WF[pd] === '\x0d');) pd++;
    WF[pd] === ':' && pJ >= 0x0 && (WF[pJ] === '{' || WF[pJ] === ',') || WR.has(pX) || WC.has(pX) || Wy.add(pX);
  }
  return WN = {
    'free': Wy,
    'usesThis': /\bthis\b/.test(WF)
  }, Wl.set(Wr, WN), WN;
}
W7(Wq, 'freeNames');
var Ww = new Map();
function Wg(Wr, WN) {
  let WF = Ww.get(Wr);
  if (WF) return WF;
  let WC = null,
    Wy = new Set();
  for (let WA of WN) {
    for (let WH = WA && WA.constructor; WH && WH !== W2 && WH !== Object && !Wy.has(WH); WH = Object.getPrototypeOf(WH)) {
      Wy.add(WH);
      let p0 = '';
      try {
        p0 = Function.prototype.toString.call(WH);
      } catch {}
      if (p0.includes(Wr)) {
        WC = WH;
        break;
      }
    }
    if (WC) break;
  }
  return WC && Ww.set(Wr, WC), WC;
}
W7(Wg, 'homeClass');
function WY(Wr, WN, WF, WC, Wy) {
  if (Wr !== null) return "no source in the production build";
  let WA = WO(e.chapter);
  if (!WA) return "no chapter scope";
  let {
      free: WH,
      usesThis: p0
    } = Wq(Wr),
    p1 = null,
    p2;
  for (let p4 of WH) {
    if (/^_w\d+$/.test(p4)) {
      if (p1 && p1 !== p4) return "binds " + p4;
      if (p1 = p4, !WN) {
        let p5 = WM(Wr, p4, WF);
        if (typeof p5 == 'string') return "binds " + p4 + '\x20(' + p5 + ')';
        p2 = p5;
      }
      continue;
    }
    if (!(p4 in WA || p4 in globalThis)) return "captures " + p4;
  }
  let p3 = null;
  if (p0 && WC) p3 = WC;else {
    if (p0) {
      let p6 = Wg(Wr, WF);
      if (!p6) return "this: no home class";
      if (WN && WN instanceof p6) p3 = WN;else {
        if (Wy && Wy.filter(p7 => p7 instanceof p6).length === 0x1) p3 = Wy.find(p7 => p7 instanceof p6);else {
          for (let p7 of WF) if (p7 && !p7.destroyed && p7.constructor === p6) {
            if (p3) return "this: two " + p6.name;
            p3 = p7;
          }
          if (!p3) return "this: no " + p6.name;
        }
      }
    }
  }
  return {
    'wn': p1,
    'wv': p2,
    'self': p3,
    'sc': WA
  };
}
W7(WY, 'methodPlan');
var WV = new Map();
function WM(Wr, WN, WF) {
  let WC = WV.get(Wr + '|' + WN);
  if (WC === void 0x0) {
    WC = null;
    let WA = Wg(Wr, WF),
      WH = '';
    try {
      WH = WA ? Function.prototype.toString.call(WA) : '';
    } catch {}
    let p0 = WH.indexOf(Wr);
    if (p0 >= 0x0) {
      let p1 = WH.slice(0x0, p0),
        p2 = new RegExp("World\\.with\\('([A-Za-z_]\\w*)',\\s*\\(" + WN + "\\)\\s*=>", 'g'),
        p3,
        p4 = null;
      for (; p3 = p2.exec(p1);) p4 = p3;
      p4 && p1.indexOf('(' + WN + ") =>", p4.index + p4[0x0].length) < 0x0 && (WC = p4[0x1]);
    }
    WV.set(Wr + '|' + WN, WC);
  }
  if (!WC) return "no with";
  let Wy = null;
  for (let p5 of WF) if (p5 && !p5.destroyed && typeof p5.is == 'function' && p5.is(WC)) {
    if (Wy) return "two " + WC;
    Wy = p5;
  }
  return Wy || "no " + WC;
}
W7(WM, 'withTarget');
var Wa = new Map();
function WK(Wr, WN, WF) {
  let WC = Wa.get(Wr);
  WC || (WC = new Function('__scope', "return function () { with (__scope) { return (" + Wr + "\n); } };"), Wa.set(Wr, WC));
  let Wy = WN.wn ? {
      [WN.wn]: WN.wv !== void 0x0 ? WN.wv : WF
    } : null,
    WA = WN.sc,
    WH = new Proxy(WA, {
      'has': (p0, p1) => Wy !== null && p1 in Wy || p1 in WA,
      'get': (p0, p1) => p1 === Symbol.unscopables ? void 0x0 : Wy !== null && p1 in Wy ? Wy[p1] : WA[p1]
    });
  return WC(WH).call(WN.self);
}
W7(WK, 'remake');
var Wx = new Map();
function Wv(Wr, WN) {
  let WF = Wx.get(Wr);
  WF || Wx.set(Wr, WF = new Map());
  let WC = WF.get(WN);
  if (WC === void 0x0) {
    WC = !0x1;
    for (let Wy = Wr; Wy && Wy !== W2 && Wy !== Object; Wy = Object.getPrototypeOf(Wy)) {
      let WA = '';
      try {
        WA = Function.prototype.toString.call(Wy);
      } catch {}
      if (WA.includes(WN)) {
        WC = !0x0;
        break;
      }
    }
    WF.set(WN, WC);
  }
  return WC;
}
W7(Wv, 'ownSource');
var WB = /^(\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/;
function WG(Wr, WN, WF) {
  let WC = '';
  try {
    WC = Function.prototype.toString.call(Wr);
  } catch {
    return "no source";
  }
  if (!WB.test(WC)) return "not an arrow";
  let Wy = WY(WC, WN, WF);
  return typeof Wy == 'string' ? Wy : null;
}
W7(WG, 'methodWhy');
function Wo(Wr, WN, WF, WC, Wy) {
  if (typeof Wr != 'string' || !WB.test(Wr)) return "no source" + (typeof Wr == 'string' ? ':\x20' + Wr.slice(0x0, 0x28) : '');
  let WA = WY(Wr, WN, WF, WC, Wy);
  if (typeof WA == 'string') return WA;
  let WH = null;
  try {
    WH = WK(Wr, WA, WN);
  } catch (p0) {
    return "remake: " + (p0 && p0.message || p0);
  }
  return typeof WH == 'function' ? WH : "remake: not a function";
}
W7(Wo, 'remakeMethod');
var We = new WeakMap();
function Wb(Wr) {
  let WN = 0x811c9dc5;
  for (let WF = 0x0; WF < Wr.length; WF++) WN ^= Wr.charCodeAt(WF), WN = Math.imul(WN, 0x1000193) >>> 0x0;
  return WN >>> 0x0;
}
W7(Wb, 'fnv');
function Wj(Wr) {
  let WN = We.get(Wr);
  if (!WN) {
    let WF = '';
    try {
      WF = Function.prototype.toString.call(Wr);
    } catch {}
    WN = Wr.name + '#' + Wb(WF).toString(0x24), We.set(Wr, WN);
  }
  return WN;
}
W7(Wj, 'classKey');
function WD() {
  typeof e.chapter == 'number' && e.chapter >= 0x2 && !WO(e.chapter) && WU(e.chapter);
  let Wr = [],
    WN = new Map(),
    WF = new Map(),
    WC = [],
    Wy = null,
    WA = null,
    WH = p4 => {
      let p5 = WN.get(p4);
      return p5 === void 0x0 && (p5 = Wr.length, WN.set(p4, p5), Wr.push(null), WC.push(p4)), {
        '$i': p5
      };
    },
    p0 = (p4, p5, p6) => {
      if (p4 === null || typeof p4 != 'object') {
        if (typeof p4 == 'function' && p4.prototype instanceof W2 && p4.prototype.constructor !== p4) return {
          '$or': Wj(p4.prototype.constructor)
        };
        if (typeof p4 == 'function' && (p4 === W2 || p4.prototype instanceof W2)) return {
          '$c': Wj(p4)
        };
        if (typeof p4 == 'function' && /^\(\)\s*=>\s*\{\s*\}$/.test(Function.prototype.toString.call(p4))) return {
          '$noop': 0x1
        };
        if (typeof p4 == 'function' && p4.name && W2.prototype[p4.name] === p4) return {
          '$im': p4.name
        };
        if (typeof p4 == 'function' && p4.name && !/^bound /.test(p4.name)) return {
          '$fn': Wj(p4)
        };
        if (typeof p4 == 'function' && /\.__atkPin\b/.test(p5)) return null;
        if (typeof p4 == 'function' && Y.has(p4)) {
          let [pX, pJ] = Y.get(p4);
          if (typeof pX == 'function' && pJ instanceof W2) {
            if (pX.name && !/^bound /.test(pX.name) && W2.prototype[pX.name] !== pX && !(pX.prototype instanceof W2)) return {
              '$bind': {
                '$fn': Wj(pX)
              },
              'c': WH(pJ)
            };
            let pd = Function.prototype.toString.call(pX),
              pc = "not an arrow";
            if (WB.test(pd)) {
              let pn = WY(pd, p6 ? WA : null, W5.list, pJ);
              pc = typeof pn == 'string' ? pn : null;
            }
            return pc === null ? Object.assign({
              '$meth': Wb(pd),
              'src': pd,
              '$free': 0x1,
              '$self': WH(pJ)
            }, p6 && WA ? {
              '$own': WH(WA)
            } : null) : (Wy || (Wy = "method " + p5 + " (bound: " + pc + ')'), null);
          }
        }
        if (typeof p4 == 'function' && p6) {
          let ps = Function.prototype.toString.call(p4);
          if (WA && !Wv(WA.constructor, ps)) {
            let pz = Object.values(WA).filter(pU => pU instanceof W2),
              pP = WB.test(ps) ? WY(ps, WA, W5.list, void 0x0, pz) : "not an arrow";
            if (typeof pP == 'string') return Wy || (Wy = "method " + p5 + '\x20(' + pP + ')'), null;
          }
          return {
            '$meth': Wb(ps),
            'src': ps
          };
        }
        if (typeof p4 == 'function') {
          let pU = WG(p4, null, W5.list);
          if (pU === null) {
            let pO = Function.prototype.toString.call(p4);
            return {
              '$meth': Wb(pO),
              'src': pO,
              '$free': 0x1
            };
          }
          return Wy || (Wy = "method " + p5 + '\x20(' + pU + ')'), null;
        }
        return typeof p4 == 'symbol' || typeof p4 == 'bigint' ? (Wy || (Wy = typeof p4 + '\x20' + p5), null) : p4;
      }
      if (p4 instanceof W2) return WH(p4);
      let p7 = WF.get(p4);
      if (p7) return p7;
      if (Wc(p4)) return null;
      if (Array.isArray(p4)) {
        let pR = new Array(p4.length);
        WF.set(p4, pR);
        for (let pl = 0x0; pl < p4.length; pl++) pR[pl] = p0(p4[pl], p5);
        return pR;
      }
      if (ArrayBuffer.isView(p4)) {
        let pq = p4.slice();
        return WF.set(p4, pq), pq;
      }
      if (p4 instanceof Map) {
        let pw = new Map();
        WF.set(p4, pw);
        for (let [pg, pY] of p4) pw.set(p0(pg, p5), p0(pY, p5));
        return pw;
      }
      if (p4 instanceof Set) {
        let pV = new Set();
        WF.set(p4, pV);
        for (let pM of p4) pV.add(p0(pM, p5));
        return pV;
      }
      if (Object.getPrototypeOf(p4) === i) {
        let pa = {
          '$m': {
            'name': p4.name,
            'level': p4.level,
            'paused': p4.paused,
            'ended': p4.ended,
            'clock': p4._clock,
            'rate': p4._rate,
            'vol': p4._vol
          }
        };
        return WF.set(p4, pa), pa;
      }
      if (WW && p4 instanceof WW) {
        let pK = {
          '$surf': [p4.canvas ? p4.canvas.width : 0x1, p4.canvas ? p4.canvas.height : 0x1, !!p4.ctx]
        };
        return WF.set(p4, pK), pK;
      }
      if (Wp(p4)) {
        let px = {},
          pv = {
            '$p': px
          };
        WF.set(p4, pv);
        for (let pB of Object.keys(p4)) px[pB] = p0(p4[pB], p5 + ".path");
        return pv;
      }
      let p8 = Object.getPrototypeOf(p4),
        p9 = p8 && p8.constructor,
        pW = p8 && p8 !== Object.prototype && typeof p9 == 'function' && p9.prototype === p8 && !(p8 instanceof W2) && p9.name ? Function.prototype.toString.call(p9) : '';
      if (pW.startsWith('function') && !pW.includes("[native code]")) {
        let pG = {},
          po = {
            '$new': Wj(p9),
            'f': pG
          };
        WF.set(p4, po);
        for (let pe of Object.keys(p4)) {
          let pb = p4[pe];
          if (typeof pb == 'function') {
            if (pW.includes(Function.prototype.toString.call(pb))) continue;
            return Wy || (Wy = "method " + p5 + '.' + pe + " (not made by " + p9.name + ')'), null;
          }
          pG[pe] = p0(pb, p5 + '.' + pe);
        }
        return po;
      }
      if (p8 !== Object.prototype && p8 !== null) return Wy || (Wy = "object " + (p4.constructor && p4.constructor.name || '?') + " at " + p5), null;
      if (typeof p4.name == 'string' && j[p4.name] === p4) return {
        '$s': p4.name
      };
      if (typeof p4.name == 'string' && t[p4.name] === p4) return {
        '$f': p4.name
      };
      let pp = {};
      WF.set(p4, pp);
      for (let pj of Object.keys(p4)) pp[pj] = p0(p4[pj], p5 + '.' + pj);
      return pp;
    },
    p1 = W5.list.map(p4 => WH(p4).$i),
    p2 = W5.pending.map(p4 => p4 instanceof W2 ? WH(p4).$i : -0x1),
    p3 = {};
  for (let p4 of Object.keys(e)) typeof e[p4] != 'function' && (p3[p4] = p0(e[p4], 'G.' + p4));
  for (let p5 = 0x0; p5 < WC.length; p5++) {
    let p6 = WC[p5],
      p7 = WN.get(p6),
      p8 = p6.constructor && p6.constructor.name || '?',
      p9 = {};
    WA = p6;
    for (let pW of Object.keys(p6)) p9[pW] = p0(p6[pW], p8 + '.' + pW, !0x0);
    if (WA = null, Wr[p7] = {
      'c': Wj(p6.constructor),
      'f': p9
    }, Wy) break;
  }
  return Wy ? {
    'ok': !0x1,
    'why': Wy
  } : {
    'ok': !0x0,
    'data': {
      'insts': Wr,
      'list': p1,
      'pending': p2,
      'g': p3,
      'frame': W5.frame,
      'spawns': W5.spawns,
      'self': W5.self instanceof W2 ? WH(W5.self) : null,
      'rng': {
        'seed': W0.seed,
        'state': W0.state,
        'calls': W0.calls
      },
      'held': {
        ...f.held
      },
      'pressed': {
        ...f.pressed
      },
      'counters': W3(),
      'instId': W2._id,
      'music': {
        'name': r(),
        'pos': y()
      }
    }
  };
}
W7(WD, 'encodeWorld');
function Wk() {
  let Wr = WF => Number.isFinite(WF) ? Math.round(WF * 0x64) / 0x64 : String(WF),
    WN = [x(), "rng " + W0.calls + " hp " + JSON.stringify(e.hp) + " mn " + e.mnfight + " my " + e.myfight + " tt " + Wr(e.turntimer)];
  for (let WF of W5.list) WF.destroyed || WN.push(WF.constructor.name + '\x20' + Wr(WF.x) + ',' + Wr(WF.y) + '\x20v' + Wr(WF._hs) + ',' + Wr(WF._vs) + '\x20' + WF.sprite_index + '\x20' + Wr(WF.image_index) + '\x20a' + (WF.alarm ? WF.alarm.filter(WC => WC >= 0x0).join('/') : ''));
  return WN.join('\x0a');
}
W7(Wk, 'deepDump');
var Wf = new Map(),
  WS = new Map();
function WZ(Wr) {
  for (let WN of Wr) if (WN) for (let WF of Object.values(WN)) {
    if (Array.isArray(WF) && WF.length && WF.every(WA => WA && typeof WA == 'object')) {
      WZ(WF);
      continue;
    }
    if (typeof WF != 'function') continue;
    let WC = WF.prototype instanceof W2 ? Wf : WS,
      Wy = WC.get(WF.name) || [];
    Wy.includes(WF) || Wy.push(WF), WC.set(WF.name, Wy);
  }
}
W7(WZ, 'registerClassModules');
var Wu = ["./battle.js", "./bullets.js", "./ch2spells.js", "./ch3_rhythm.js", "./controller.js", "./dummy.js", "./gameover.js", "./heart.js", "./jevil.js", "./text.js", "./ut_runtime.js", "./backgrounds.js", "./silhouette.js", "./enemies/index.js", "./generated/ch1_objects.js", "./generated/ch2_objects.js", "./generated/ch2_cut.js", "./generated/ch2_stubs.js", "./generated/ch3_objects.js", "./generated/ch3_stubs.js", "./generated/ch4_objects.js", "./generated/ch4_stubs.js", "./generated/ch5_objects.js", "./generated/ch5_stubs.js", "./generated/cut.js", "./generated/stubs.js", "./generated/ut_objects.js", "./generated/ch1_scripts.js", "./generated/ch2_scripts.js", "./generated/ch3_scripts.js", "./generated/ch4_scripts.js", "./generated/ch5_scripts.js", "./generated/ut_scripts.js", "./generated/runtime.js"],
  Wm = W7(Wr => {
    if (/\/ut_(objects|scripts)\.js$/.test(Wr)) return 'ut';
    let WN = /\/ch(\d+)_/.exec(Wr);
    return WN && Number(WN[0x1]) >= 0x4 ? 'ch' + WN[0x1] : null;
  }, 'groupOfModule'),
  WT = null;
async function Wi(Wr) {
  let WN = [];
  for (let WF of Wu) if (!(!Wr(WF) || Ws.has(WF))) try {
    let WC = await Wt(WF);
    WN.push(WC), Ws.set(WF, WC);
  } catch {}
  for (let Wy of Wn.concat(WP(0x2), WP(0x3), WP(0x4), WP(0x5))) if (!(!Wr(Wy) || Ws.has(Wy))) try {
    Ws.set(Wy, await Wt(Wy));
  } catch {}
  WZ(WN);
}
W7(Wi, 'takeUp');
function WE() {
  return WT || (WT = Wi(Wr => {
    let WN = Wm(Wr);
    return !WN || w(WN);
  }), g(Wr => {
    WT = WT.then(() => Wi(WN => Wm(WN) === Wr));
  }), WT);
}
W7(WE, 'loadClassModules');
function Wh(Wr) {
  let WN = Wr.slice(0x0, Wr.lastIndexOf('#'));
  for (let WF of WS.get(WN) || []) if (Wj(WF) === Wr) return WF;
  return null;
}
W7(Wh, 'findFn');
function WQ() {
  let Wr = new Map(),
    WN = WF => {
      typeof WF == 'function' && (WF === W2 || WF.prototype instanceof W2) && Wr.set(Wj(WF), WF);
    };
  WN(W2);
  for (let WF of W5.list) for (let WC = WF && WF.constructor; WC && WC !== W2 && WC !== Object; WC = Object.getPrototypeOf(WC)) WN(WC);
  return Wy => {
    let WA = Wr.get(Wy);
    if (WA) return WA;
    let WH = Wy.slice(0x0, Wy.lastIndexOf('#'));
    WN(b(WH));
    for (let p0 of Object.values(W6)) p0 && p0.name === WH && WN(p0);
    for (let p1 of Wf.get(WH) || []) WN(p1);
    for (let p2 of WS.get(WH) || []) WN(p2);
    return WA = Wr.get(Wy), WA || null;
  };
}
W7(WQ, 'resolver');
function WI(Wr, WN = {}) {
  let WF = WQ(),
    WC = null,
    Wy = new Array(Wr.insts.length),
    WA = new Map();
  if (!WN.fresh) {
    for (let p7 of W5.list) p7 instanceof W2 && Number.isFinite(p7._ord) && WA.set(p7._ord, p7);
  }
  if (!WN.fresh) {
    for (let p8 of W5.pending) p8 instanceof W2 && Number.isFinite(p8._ord) && WA.set(p8._ord, p8);
  }
  for (let p9 = 0x0; p9 < Wr.insts.length; p9++) {
    let pW = WF(Wr.insts[p9].c);
    if (!pW) return "unknown class " + Wr.insts[p9].c;
    let pp = WA.get(Wr.insts[p9].f._ord);
    Wy[p9] = pp && pp.constructor === pW ? pp : Object.create(pW.prototype), Wy[p9] === pp && WA.delete(Wr.insts[p9].f._ord);
  }
  let WH = W9.prototype,
    p0 = new Map(),
    p1 = Wr.list.filter(pX => !(Wr.insts[pX] && Wr.insts[pX].f && Wr.insts[pX].f.destroyed)).map(pX => Wy[pX]),
    p2 = pX => {
      if (pX === null || typeof pX != 'object') return pX;
      let pJ = p0.get(pX);
      if (pJ) return pJ;
      if (Array.isArray(pX)) {
        let pc = new Array(pX.length);
        p0.set(pX, pc);
        for (let pn = 0x0; pn < pX.length; pn++) pc[pn] = p2(pX[pn]);
        return pc;
      }
      if (ArrayBuffer.isView(pX)) return pX;
      if (pX instanceof Map) {
        let ps = new Map();
        p0.set(pX, ps);
        for (let [pz, pP] of pX) ps.set(p2(pz), p2(pP));
        return ps;
      }
      if (pX instanceof Set) {
        let pU = new Set();
        p0.set(pX, pU);
        for (let pO of pX) pU.add(p2(pO));
        return pU;
      }
      if (pX.$i !== void 0x0 && Object.keys(pX).length === 0x1) return Wy[pX.$i];
      if (pX.$c !== void 0x0 && Object.keys(pX).length === 0x1) {
        let pR = WF(pX.$c);
        return !pR && !WC && (WC = pX.$c), pR;
      }
      if (pX.$or !== void 0x0 && Object.keys(pX).length === 0x1) {
        let pl = WF(pX.$or);
        return !pl && !WC && (WC = pX.$or), pl ? W4(pl) : null;
      }
      if (pX.$meth !== void 0x0 && typeof pX.$meth == 'number') {
        if (!pX.$free) return null;
        let pq = pX.$self ? Wy[pX.$self.$i] : void 0x0,
          pw = pX.$own ? Wy[pX.$own.$i] : null,
          pg = Wo(pX.src, pw, p1, pq);
        return typeof pg == 'string' ? (WC || (WC = "method (" + pg + ')'), null) : (pq && (pg = M(pq, pg)), p0.set(pX, pg), pg);
      }
      if (pX.$bind !== void 0x0 && pX.c !== void 0x0) {
        let pY = pX.$bind && pX.$bind.$fn ? Wh(pX.$bind.$fn) : null;
        if (!pY) return WC || (WC = "function " + (pX.$bind && pX.$bind.$fn)), null;
        let pV = M(Wy[pX.c.$i], pY);
        return p0.set(pX, pV), pV;
      }
      if (pX.$new !== void 0x0 && pX.f && Object.keys(pX).length === 0x2) {
        let pM = Wh(pX.$new);
        if (!pM) return WC || (WC = "constructor " + pX.$new), null;
        let pa;
        try {
          pa = new pM();
        } catch {
          pa = Object.create(pM.prototype);
        }
        p0.set(pX, pa);
        for (let pK of Object.keys(pX.f)) pa[pK] = p2(pX.f[pK]);
        return pa;
      }
      if (pX.$noop !== void 0x0 && Object.keys(pX).length === 0x1) return WX;
      if (pX.$im !== void 0x0 && Object.keys(pX).length === 0x1) return typeof W2.prototype[pX.$im] == 'function' ? W2.prototype[pX.$im] : null;
      if (pX.$fn !== void 0x0 && Object.keys(pX).length === 0x1) {
        let px = Wh(pX.$fn);
        return !px && !WC && (WC = "function " + pX.$fn), px;
      }
      if (pX.$surf !== void 0x0 && Object.keys(pX).length === 0x1) {
        let pv = a(pX.$surf[0x0], pX.$surf[0x1]);
        return pX.$surf[0x2] || (pv.ctx = null), p0.set(pX, pv), pv;
      }
      if (pX.$s !== void 0x0 && Object.keys(pX).length === 0x1) return j[pX.$s] || null;
      if (pX.$f !== void 0x0 && Object.keys(pX).length === 0x1) return t[pX.$f] || null;
      if (pX.$m !== void 0x0 && Object.keys(pX).length === 0x1) {
        let pB = pX.$m,
          pG = m(pB.name) || Object.create(i);
        return Object.assign(pG, {
          'name': pB.name,
          'level': pB.level,
          'paused': pB.paused,
          'ended': pB.ended,
          '_clock': pB.clock,
          '_rate': pB.rate,
          '_vol': pB.vol
        }), 'el' in pG || (pG.el = null), p0.set(pX, pG), pG;
      }
      if (pX.$p !== void 0x0 && Object.keys(pX).length === 0x1) {
        let po = Object.create(WH);
        p0.set(pX, po);
        for (let pe of Object.keys(pX.$p)) po[pe] = p2(pX.$p[pe]);
        return po;
      }
      let pd = {};
      p0.set(pX, pd);
      for (let pb of Object.keys(pX)) pd[pb] = p2(pX[pb]);
      return pd;
    },
    p3 = Wr.insts.map(pX => {
      let pJ = {};
      for (let pd of Object.keys(pX.f)) pJ[pd] = p2(pX.f[pd]);
      return pJ;
    }),
    p4 = new Map();
  for (let pX = 0x0; pX < Wr.insts.length; pX++) {
    let pJ = Object.keys(Wr.insts[pX].f).filter(pP => {
      let pU = Wr.insts[pX].f[pP];
      return pU && typeof pU == 'object' && pU.$meth !== void 0x0 && !pU.$free;
    });
    if (!pJ.length) continue;
    let pd = Wy[pX],
      pc = {},
      pn = () => {
        let pP = new Map();
        for (let pU of Object.keys(pd)) {
          let pO = pd[pU];
          if (typeof pO == 'function') {
            let pR = Wb(Function.prototype.toString.call(pO));
            pP.has(pR) || pP.set(pR, pO);
          }
        }
        for (let pl of pJ) if (!pc[pl]) {
          let pq = pP.get(Wr.insts[pX].f[pl].$meth);
          pq && (pc[pl] = pq);
        }
      };
    if (pn(), pJ.every(pP => pc[pP])) {
      p4.set(pd, pc);
      continue;
    }
    try {
      pd.create();
    } catch {}
    if (pn(), pJ.some(pP => !pc[pP])) {
      let pP = new Map(p0);
      p0.clear();
      for (let pU of Object.keys(Wr.insts[pX].f)) pd[pU] = p2(Wr.insts[pX].f[pU]);
      p0.clear();
      for (let [pO, pR] of pP) p0.set(pO, pR);
      try {
        pd.create();
      } catch {}
      pn();
    }
    let ps = Object.values(Wr.insts[pX].f).filter(pl => pl && typeof pl == 'object' && pl.$i !== void 0x0 && Object.keys(pl).length === 0x1).map(pl => Wy[pl.$i]);
    for (let pl of pJ) if (!pc[pl]) {
      let pq = Wo(Wr.insts[pX].f[pl].src, pd, p1, void 0x0, ps);
      typeof pq == 'function' ? pc[pl] = pq : pc['?' + pl] = pq;
    }
    let pz = pJ.find(pw => !pc[pw]);
    if (pz) return "method " + (pd.constructor && pd.constructor.name || '?') + '.' + pz + " not made again" + (pc['?' + pz] ? '\x20(' + pc['?' + pz] + ')' : '');
    for (let pw of Object.keys(pc)) pw.charCodeAt(0x0) === 0x3f && delete pc[pw];
    p4.set(pd, pc);
  }
  let p5 = {};
  for (let pg of Object.keys(Wr.g)) p5[pg] = p2(Wr.g[pg]);
  if (WC) return "unknown " + WC;
  for (let pY of Object.keys(e)) typeof e[pY] == 'function' && !(pY in p5) && (p5[pY] = e[pY]);
  o({
    'list': Wr.list.map(pV => Wy[pV]),
    'insts': Wr.list.map(pV => p3[pV]),
    'pending': Wr.pending.filter(pV => pV >= 0x0).map(pV => Wy[pV]),
    'frame': Wr.frame,
    'spawns': Wr.spawns,
    'self': Wr.self ? Wy[Wr.self.$i] : null,
    'g': p5,
    'rng': Wr.rng,
    'held': Wr.held,
    'pressed': Wr.pressed,
    'counters': Wr.counters,
    'paths': null
  });
  let p6 = new Set(Wr.list);
  for (let pV = 0x0; pV < Wy.length; pV++) p6.has(pV) || Object.assign(Wy[pV], p3[pV]);
  for (let [pM, pa] of p4) Object.assign(pM, pa);
  for (let pK of Wy) if (pK.__forcedAtk !== void 0x0 && 'myattackchoice' in pK) {
    let px = pK.__forcedAtk;
    Object.defineProperty(pK, 'myattackchoice', {
      'get': () => px,
      'set'() {},
      'configurable': !0x0,
      'enumerable': !0x0
    });
  }
  if (Number.isFinite(Wr.instId) && (W2._id = Wr.instId), Wr.music && Wr.music.name && Wr.music.name === r()) {
    let pv = m(Wr.music.name);
    pv && W1(pv, Wr.music.pos);
  }
  return null;
}
W7(WI, 'applyWorld');
function Wt(Wr) {
  switch (Wr) {
    case "./autoplay.js":
      return WL("./autoplay-O3TIY36B.js", import.meta.url);
    case "./backgrounds.js":
      return WL("./c-B2OVIB6A.js", import.meta.url);
    case "./battle.js":
      return WL("./battle-RLFUO4GL.js", import.meta.url);
    case "./bullets.js":
      return WL("./bullets-5Y5YBCNE.js", import.meta.url);
    case "./ch2spells.js":
      return WL("./c-WP7QHPQL.js", import.meta.url);
    case "./ch3_rhythm.js":
      return WL("./c-WSVD7E7S.js", import.meta.url);
    case "./controller.js":
      return WL("./c-ARQXD3PJ.js", import.meta.url);
    case "./dummy.js":
      return WL("./c-RFYOGRV2.js", import.meta.url);
    case "./enemies/index.js":
      return WL("./c-IX3LDHOK.js", import.meta.url);
    case "./fightcode.js":
      return WL("./c-YT77N4SA.js", import.meta.url);
    case "./gameover.js":
      return WL("./c-UTK7DAFY.js", import.meta.url);
    case "./generated/ch1_objects.js":
      return WL("./c-KR6P5SRC.js", import.meta.url);
    case "./generated/ch1_scripts.js":
      return WL("./c-U5JGKLEZ.js", import.meta.url);
    case "./generated/ch2_cut.js":
      return WL("./c-4XNNJ5D2.js", import.meta.url);
    case "./generated/ch2_objects.js":
      return WL("./c-AWKJNYN7.js", import.meta.url);
    case "./generated/ch2_scripts.js":
      return WL("./c-LEON7H3O.js", import.meta.url);
    case "./generated/ch2_shims.js":
      return WL("./c-VWXRERRK.js", import.meta.url);
    case "./generated/ch2_stubs.js":
      return WL("./c-TN5AH3Q6.js", import.meta.url);
    case "./generated/ch3_objects.js":
      return WL("./c-AYRBH6S4.js", import.meta.url);
    case "./generated/ch3_scripts.js":
      return WL("./c-LNBNHSMO.js", import.meta.url);
    case "./generated/ch3_shims.js":
      return WL("./c-3D2ES7EP.js", import.meta.url);
    case "./generated/ch3_stubs.js":
      return WL("./c-VKCT75GG.js", import.meta.url);
    case "./generated/ch4_objects.js":
      return WL("./c-DQOYOBOD.js", import.meta.url);
    case "./generated/ch4_scripts.js":
      return WL("./c-WW22CS44.js", import.meta.url);
    case "./generated/ch4_shims.js":
      return WL("./c-KU2Z2LTM.js", import.meta.url);
    case "./generated/ch4_stubs.js":
      return WL("./c-AC2XSGN2.js", import.meta.url);
    case "./generated/ch5_objects.js":
      return WL("./c-DDUYUGWJ.js", import.meta.url);
    case "./generated/ch5_scripts.js":
      return WL("./c-TIPB77DR.js", import.meta.url);
    case "./generated/ch5_shims.js":
      return WL("./c-UP65V4HJ.js", import.meta.url);
    case "./generated/ch5_stubs.js":
      return WL("./c-64AMCJS2.js", import.meta.url);
    case "./generated/cut.js":
      return WL("./c-6J3QTBZH.js", import.meta.url);
    case "./generated/runtime.js":
      return WL("./c-CBSUGPK3.js", import.meta.url);
    case "./generated/stubs.js":
      return WL("./c-WJGKGT5K.js", import.meta.url);
    case "./generated/ut_objects.js":
      return WL("./c-SC7VCXJ2.js", import.meta.url);
    case "./generated/ut_scripts.js":
      return WL("./c-PWIYYPHT.js", import.meta.url);
    case "./globals.js":
      return WL("./globals-MPUN2SAS.js", import.meta.url);
    case "./gm.js":
      return WL("./gm-PYDVYOKK.js", import.meta.url);
    case "./heart.js":
      return WL("./heart-TMDJKKP3.js", import.meta.url);
    case "./jevil.js":
      return WL("./c-TE322HXC.js", import.meta.url);
    case "./silhouette.js":
      return WL("./c-4746HWJF.js", import.meta.url);
    case "./snapshot.js":
      return WL("./snapshot-CAEOQMAP.js", import.meta.url);
    case "./text.js":
      return WL("./c-H7TTANKZ.js", import.meta.url);
    case "./ut_runtime.js":
      return WL("./ut_runtime-W7VFOCK3.js", import.meta.url);
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
W7(Wt, '__dr_imp');
export { WU as a, Wj as b, WD as c, Wk as d, WZ as e, WE as f, WI as g };
function WL(Wr, WN) {
  var WF = new URL(Wr, WN).href,
    WC = globalThis.__drWarm;
  return (WC ? WC(WF) : Promise.resolve()).then(function () {
    return import(WF).catch(function (Wy) {
      try {
        Wy.reload = !0x0, Wy.what = "the game code";
      } catch (WA) {}
      throw Wy;
    });
  });
}