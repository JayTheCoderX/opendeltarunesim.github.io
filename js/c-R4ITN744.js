import { a as X, b as D, c as P, d as w, f as H } from './c-HGFXMMIS.js';
import { Kb as i, Ma as y, Qm as r, ae as G, hb as b, ma as s, w as R } from './c-LTPP2PPV.js';
import './c-YJAH7XEB.js';
import { G as M, I as l, s as C } from './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import './c-PWNRTD7X.js';
import './c-HUDNK55W.js';
import './c-IKEEXWRQ.js';
import './c-SUMRYW3E.js';
import { i as L } from './c-3ELH3LBH.js';
import './c-OYFOJ3BV.js';
import { f as u, n as A } from './c-MYK6C3LF.js';
import { a as v, wa as t } from './c-E7FVSW52.js';
import { g as c } from './c-ZQQWH6UG.js';
import { Ib as x, Wb as a, Xb as d, pb as N, qb as W0, xb as W1 } from './c-PBMEVLU6.js';
import { a as W2, e as W3, l as W4 } from './c-XSSGDLV7.js';
W4(), W4();
var W5 = false;
function W6() {
  if (!W5) {
    for (let W of v) Array.isArray(c[W]) || (c[W] = []);
    c.language = 'en', y.call({}), W5 = true;
  }
}
W2(W6, 'ensureText');
var W7 = null;
function W8() {
  if (W7) return W7;
  let W = new Map(Object.entries(c));
  for (let Wl of v) c[Wl] = [];
  let I = [];
  try {
    R.call({}), I = Array.isArray(c.flag) ? c.flag.slice() : [];
  } catch (WC) {
    console.warn("undertale flag snapshot failed; ACT lists that branch on a flag will read DELTARUNE state", WC && WC.message);
  }
  for (let WL of Object.keys(c)) W.has(WL) || delete c[WL];
  for (let [Wu, WA] of W) c[Wu] = WA;
  return W7 = I, W7;
}
W2(W8, 'ensureUtFlags');
function W9(W) {
  W6();
  let I = c.msg,
    Wl = c.choices,
    WC = c.flag;
  c.flag = W8().slice(), c.msg = new Array(0x14).fill('\x20'), c.choices = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
  let WL = '',
    Wu = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    WA = null;
  try {
    s.call({}, 0x3e8 + W), WL = typeof c.msg[0x0] == 'string' ? c.msg[0x0] : '', Wu = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5].map(WQ => c.choices[WQ] ? 0x1 : 0x0);
  } catch (WQ) {
    WA = String(WQ && WQ.message).slice(0x0, 0x64);
  }
  c.msg = I, c.choices = Wl, c.flag = WC;
  let Wv = new Array(0x6).fill(null);
  return WL.split('&').forEach((Wt, Wc) => {
    Wc > 0x2 || Wt.split('*').slice(0x1).forEach((WS, Wx) => {
      Wx < 0x2 && (Wv[Wx * 0x3 + Wc] = WS.trim());
    });
  }), {
    'canact': Wu,
    'name': Wv,
    'raw': WL,
    'threw': WA,
    'mapped': Wu.some(Wt => Wt)
  };
}
W2(W9, 'utActTable');
var WW = new Map();
function Wz(W) {
  var I;
  if (WW.has(W)) return WW.get(W);
  let Wl = r[W];
  if (!Wl) return WW.set(W, null), null;
  let WC = (I = class extends Wl {
    constructor() {
      super(), Object.assign(this, {
        'myself': 0x0,
        'state': 0x0,
        'hurttimer': 0x0,
        'hurtamt': 0x0,
        'shakex': 0x0,
        'candodge': 0x0,
        'dodgetimer': 0x0,
        'acting': 0x0,
        'actcon': 0x0,
        'actingsus': 0x0,
        'actingral': 0x0,
        'actingnoe': 0x0,
        'talked': 0x0,
        'attacked': 0x0,
        'flash': 0x0,
        'fsiner': 0x0,
        'becomeflash': 0x0,
        'mytarget': 0x3,
        'endcon': 0x0,
        'sparecon': 0x0,
        'pacifycon': 0x0,
        '_utact': -0x1,
        '_utactcon': 0x0,
        '_utboxmade': 0x0,
        '_utsaid': null
      });
    }
    ["create"]() {
      let WL = Array.isArray(c.monster) ? c.monster.slice() : [0x0, 0x0, 0x0];
      c.monster = [0x0, 0x0, 0x0];
      for (let Wu = 0x0; Wu < 0x3; Wu++) c.monsterinstance && c.monsterinstance[Wu] && (c.monster[Wu] = 0x1);
      try {
        super.create();
      } finally {
        let WA = this.myself;
        c.monster = WL.slice(), WA >= 0x0 && WA < 0x3 && (c.monster[WA] = 0x1);
      }
    }
    ["userEvent"](WL) {
      if (WL === 0xc) {
        c.monsterx[this.myself] = this.x + (this.sprite_width || 0x28) / 0x2, c.monstery[this.myself] = this.y + (this.sprite_height || 0x28) / 0x2;
        return;
      }
      if (WL === 0xa) {
        this.spared();
        return;
      }
      typeof super.userEvent == 'function' && super.userEvent(WL);
    }
    ["spared"]() {
      C.prototype.spared.call(this);
    }
    ["scr_monsterdefeat"]() {
      C.prototype.scr_monsterdefeat.call(this);
    }
    ["step"]() {
      WI(this, () => {
        typeof super.step == 'function' && super.step();
      });
    }
  }, I, W3(I, 'kinds', new Set([...Wl.kinds, ...C.kinds, 'ut_dr_adapter'])), W3(I, 'kindName', W), W3(I, 'defaultDepth', Wl.defaultDepth), I);
  try {
    Object.defineProperty(WC, 'name', {
      'value': W,
      'configurable': true
    });
  } catch {}
  return WW.set(W, WC), WC;
}
W2(Wz, 'utAdapter');
function WI(W, I) {
  let Wl = W.myself;
  if (Wl === Wm() && (Wy(), WY(), WG()), c.monster[Wl] !== 0x1) {
    I();
    return;
  }
  let WC = false;
  if (W.acting > 0x0 && W._utact !== W.acting && c.myfight === 0x3) {
    W._utact = W.acting;
    let Wc = c.utActSlot && c.utActSlot[Wl];
    W.whatiheard = Wc && Wc[W.acting - 0x1] !== void 0x0 ? Wc[W.acting - 0x1] : W.acting - 0x1, c.heard = 0x0, WC = true;
  }
  let WL = c.myfight,
    Wu = c.mnfight,
    WA = c.msg,
    Wv = 0x40;
  c.msg = new Array(Wv).fill("%%%"), WC && (c.myfight = 0x2), I();
  let WQ = [];
  for (let WS = 0x0; WS < Wv; WS++) {
    let Wx = c.msg[WS];
    if (typeof Wx != 'string' || Wx === "%%%" || Wx === '\x20' || Wx === '') break;
    WQ.push(Wx);
  }
  c.myfight = WL, c.msg = WA, WC && (c.mnfight = Wu);
  let Wt = WQ.join('\x01');
  WQ.length && Wt !== W._utsaid && (W._utsaid = Wt, W1.with('OBJ_WRITER', Wa => {
    Wa.placeholder || Wa.instance_destroy();
  }), W1.with('OBJ_INSTAWRITER', Wa => {
    Wa.placeholder || Wa.instance_destroy();
  }), !W1.exists('obj_battleblcon') && !W1.exists('obj_writer') && (c.typer = 0x32, c.msg = new Array(0x64).fill('\x20'), WQ.forEach((Wa, Wg) => {
    c.msg[Wg] = Ws(Wa);
  }), L(W.x - 0xa0, W.y, 0x3))), WQ.length || (W._utsaid = null), WC && (W._utactcon = 0x1), W._utactcon === 0x1 && !W1.exists('obj_writer') && !W1.exists('obj_battleblcon') && (W._utactcon = 0x0, W.acting = 0x0, W._utact = -0x1, c.acting = [0x0, 0x0, 0x0], M()), c.mnfight === 0x2 && W._utboxmade === 0x0 && (W._utboxmade = 0x1, W1.with('obj_battleblcon', Wa => Wa.instance_destroy()), W1.with('obj_writer', Wa => {
    Wa.placeholder || Wa.instance_destroy();
  }), !W1.exists('obj_moveheart') && !Wh() && A(), W1.exists('obj_growtangle') || x(0x140, 0xaa, u)), c.mnfight !== 0x2 && (W._utboxmade = 0x0);
}
W2(WI, 'utStepBridge');
var WB = new Map();
function Wf(W) {
  var I;
  return WB.has(W) || WB.set(W, (I = class extends N {
    ["create"]() {
      this.visible = false, this.sprite_index = null, this.mask_index = null, this.movement = 0x0, this.halt = 0x0, this.placeholder = true;
    }
  }, W3(I, 'kinds', W0(W, N)), W3(I, 'kindName', 'ut_dr_placeholder_' + W), W3(I, 'defaultDepth', 0x3e8), I)), WB.get(W);
}
W2(Wf, 'placeholderClass');
function Wh() {
  return W1.all('obj_heart').some(W => !W.destroyed && !W.placeholder);
}
W2(Wh, 'hasRealHeart');
function WJ(W, I = []) {
  let Wl = W1.all(W),
    WC = Wl.filter(Wu => !Wu.placeholder),
    WL = Wl.filter(Wu => Wu.placeholder);
  if (WC.length || I.some(Wu => W1.exists(Wu))) {
    for (let Wu of WL) Wu.instance_destroy();
    return;
  }
  if (WL.length) {
    for (let WA = 0x1; WA < WL.length; WA++) WL[WA].instance_destroy();
  } else {
    let Wv = x(-0xc8, -0xc8, Wf(W));
    Wv && (Wv.visible = false);
  }
}
W2(WJ, 'standIn');
function WY() {
  WJ('obj_heart', ['obj_moveheart']), WJ('OBJ_WRITER'), WJ('OBJ_INSTAWRITER');
}
W2(WY, 'utSoulBridge');
var Wm = W2(() => c.monster[0x0] === 0x1 ? 0x0 : c.monster[0x1] === 0x1 ? 0x1 : 0x2, 'firstLiveSlot'),
  WE = ['obj_lborder', 'obj_rborder', 'obj_uborder', 'obj_dborder'],
  We = false;
function WU() {
  if (!We) {
    We = true;
    for (let W of Object.values(r)) if (typeof W == 'function' && W.prototype) try {
      W.__ut = true;
    } catch {}
  }
}
W2(WU, 'tagUtClasses');
var WZ = W2(() => {
    let W = W1.self;
    return !!(W && W.constructor && W.constructor.__ut);
  }, 'inUtCode'),
  WD = false,
  WV = {
    'invc': 0x0,
    'inv': 0x14
  };
function WP() {
  if (WD) return;
  WU();
  let W = c.invc,
    I = c.inv,
    Wl = c.hp,
    WC = c.df,
    WL = c.adef,
    Wu = c.maxhp,
    WA = () => {
      for (let Wv = 0x0; Wv < 0x3; Wv++) {
        let WQ = c.char[Wv];
        if (WQ && Array.isArray(Wl) && Wl[WQ] > 0x0) return WQ;
      }
      return c.char[0x0] || 0x1;
    };
  try {
    Object.defineProperty(c, 'invc', {
      'configurable': true,
      'get'() {
        return WZ() && W1.first('ut_dr_adapter') ? WV.invc : W;
      },
      'set'(Wv) {
        WZ() && W1.first('ut_dr_adapter') ? WV.invc = Wv : W = Wv;
      }
    }), Object.defineProperty(c, 'inv', {
      'configurable': true,
      'get'() {
        return WZ() && W1.first('ut_dr_adapter') ? WV.inv : I;
      },
      'set'(Wv) {
        WZ() && W1.first('ut_dr_adapter') ? WV.inv = Wv : I = Wv;
      }
    }), Object.defineProperty(c, 'df', {
      'configurable': true,
      'get'() {
        if (WZ() && W1.first('ut_dr_adapter')) {
          let Wv = Array.isArray(WC) ? WC[WA()] : WC;
          return Number.isFinite(Wv) ? Wv : 0x0;
        }
        return WC;
      },
      'set'(Wv) {
        WZ() && W1.first('ut_dr_adapter') || (WC = Wv);
      }
    }), Object.defineProperty(c, 'adef', {
      'configurable': true,
      'get'() {
        return WZ() && W1.first('ut_dr_adapter') ? 0x0 : WL;
      },
      'set'(Wv) {
        WZ() && W1.first('ut_dr_adapter') || (WL = Wv);
      }
    }), Object.defineProperty(c, 'maxhp', {
      'configurable': true,
      'get'() {
        if (WZ() && W1.first('ut_dr_adapter')) {
          let Wv = Array.isArray(Wu) ? Wu[WA()] : Wu;
          return Number.isFinite(Wv) ? Wv : 0x0;
        }
        return Wu;
      },
      'set'(Wv) {
        WZ() && W1.first('ut_dr_adapter') || (Wu = Wv);
      }
    }), Object.defineProperty(c, 'hp', {
      'configurable': true,
      'get'() {
        if (WZ() && W1.first('ut_dr_adapter')) {
          let Wv = WA();
          return Array.isArray(Wl) ? Wl[Wv] : Wl;
        }
        return Wl;
      },
      'set'(Wv) {
        if (WZ() && W1.first('ut_dr_adapter') && typeof Wv == 'number' && Array.isArray(Wl)) {
          let WQ = WA(),
            Wt = Wl[WQ];
          if (typeof Wt == 'number' && Number.isFinite(Wv)) {
            let Wc = Array.isArray(Wu) && Number.isFinite(Wu[WQ]) ? Wu[WQ] : Wt;
            Wl[WQ] = Math.max(0x0, Math.min(Wc, Wv));
          }
          return;
        }
        Wl = Wv;
      }
    }), WD = true;
  } catch {}
}
W2(WP, 'bridgeDamage');
function WT() {
  if (W1.first('obj_time')) return;
  let W = void 0x0 || t;
  W && x(0x0, 0x0, W);
}
W2(WT, 'utTimeBridge');
function Wp() {
  WV.invc > 0x0 && WV.invc--;
}
W2(Wp, 'utTickInvc');
function Ww() {
  for (let W of ['hp', 'maxhp', 'df', 'adef', 'inv', 'invc', 'mnfight', 'msg']) {
    let I = Object.getOwnPropertyDescriptor(c, W);
    if (I && I.get) {
      let Wl = c[W];
      delete c[W], Wl !== void 0x0 && (c[W] = Wl);
    }
  }
  WD = false, WH = false, Wj = false, WV.invc = 0x0, WV.inv = 0x14, W5 = false;
}
W2(Ww, 'resetUtDrForFight'), d(Ww);
var WH = false;
function Wk() {
  if (WH) return;
  let W = c.mnfight;
  try {
    Object.defineProperty(c, 'mnfight', {
      'configurable': true,
      'get'() {
        return W;
      },
      'set'(I) {
        if (I === 0x3 && W1.first('ut_dr_adapter')) {
          c.turntimer <= 0x0 || (c.turntimer = -0x1), W = 0x2;
          return;
        }
        W = I;
      }
    }), WH = true;
  } catch {}
}
W2(Wk, 'bridgeTurnState');
var Wj = false;
function Wo() {
  if (Wj) return;
  let W = Array.isArray(c.msg) ? c.msg : new Array(0x64).fill('\x20'),
    I = null,
    Wl = null,
    WC = new WeakMap(),
    WL = Wu => {
      let WA = new Proxy(Wu, {
        'get'(Wv, WQ) {
          let Wt = Wv[WQ];
          return typeof WQ == 'string' && /^\d+$/.test(WQ) && W1.first('ut_dr_adapter') && (Wt === void 0x0 || Wt === '\x20') ? "%%%" : Wt;
        }
      });
      return WC.set(WA, Wu), WA;
    };
  try {
    Object.defineProperty(c, 'msg', {
      'configurable': true,
      'get'() {
        return Wl !== W && (I = WL(W), Wl = W), I;
      },
      'set'(Wu) {
        W = Wu && typeof Wu == 'object' && WC.get(Wu) || Wu, Wl = null;
      }
    }), Wj = true;
  } catch {}
}
W2(Wo, 'bridgeMsgArray');
var Wi = false;
function Wy() {
  Wi || (Wi = true, a.pre = () => {
    W1.first('ut_dr_adapter') && (WT(), Wp(), WY(), WG(), Wr());
  });
}
W2(Wy, 'armBridges');
function Wr() {
  if (c.mnfight !== 0x1 && c.mnfight !== 1.5 || !Array.isArray(c.monster) || c.monster[0x0] === 0x1 || c.monster[0x1] === 0x1 || c.monster[0x2] === 0x1) return;
  let W = W1.first('obj_battlecontroller');
  !W || W.destroyed || W.victory === 0x1 || c.myfight === 0x7 || l();
}
W2(Wr, 'utWonBridge');
function WG() {
  let W = W1.first('obj_growtangle');
  if (!W || W.destroyed) {
    if (!W1.first('ut_dr_adapter')) {
      W1.with('obj_borderparent', Wu => Wu.instance_destroy());
      for (let Wu of WE) W1.with(Wu, WA => WA.instance_destroy());
      return;
    }
    c.idealborder && Number.isFinite(c.idealborder[0x0]) && c.idealborder[0x1] > c.idealborder[0x0] || (c.idealborder = [0xf5, 0x18b, 0x5f, 0xf5]), Wb();
    return;
  }
  let I = W.bbox_left,
    Wl = W.bbox_right,
    WC = W.bbox_top,
    WL = W.bbox_bottom;
  isFinite(I) && isFinite(Wl) && Wl > I || (I = W.x - 0x4b, Wl = W.x + 0x4b, WC = W.y - 0x4b, WL = W.y + 0x4b), c.idealborder[0x0] = Math.round(I), c.idealborder[0x1] = Math.round(Wl), c.idealborder[0x2] = Math.round(WC), c.idealborder[0x3] = Math.round(WL), Wb();
}
W2(WG, 'utBorderBridge');
function Wb() {
  for (let W of WE) {
    if (W1.exists(W)) continue;
    let I = r[W];
    if (!I) continue;
    let Wl = x(c.idealborder[0x0], c.idealborder[0x2], I);
    Wl && (Wl.instaborder = 0x1, Wl.instant = 0x1, Wl.visible = false, Wl.depth = 0x64);
  }
}
W2(Wb, 'makeBorders');
function Ws(W) {
  return String(W).replace(/\\[RXYWpZ]/g, '').replace(/\\M[0-9A-Z]/g, '').replace(/\\z[0-9]/g, '').replace(/\s+$/, '');
}
W2(Ws, 'utTextToDeltarune');
var WR = [0xa0, 0xf0, 0x140];
function WM() {
  let W = G;
  if (W && !W1.exists('obj_battlebg')) {
    let I = x(0x0, 0x0, W);
    I && (I.visible = false, I.depth = 0x7d0);
  }
  WY();
}
W2(WM, 'utBackground');
function WK() {
  let W = [];
  for (let [I, Wl] of Object.entries(D.encounters)) {
    let WC = Number(I),
      WL = (Wl.objs || []).filter(Boolean),
      Wu = [];
    for (let Wt = 0x0; Wt < Math.min(0x3, WL.length); Wt++) {
      let Wc = Wz(WL[Wt]);
      if (!Wc) continue;
      let WS = (Wl.types || [])[Wt] || 0x0;
      Wu.push({
        'cls': Wc,
        'type': WS,
        'x': 0x21c,
        'y': WR[Wu.length],
        'setup': Wq(WS)
      });
    }
    if (!Wu.length) continue;
    let WA = (Wl.names || []).filter(Boolean),
      Wv = [];
    for (let Wx of WA) {
      let Wa = Wv[Wv.length - 0x1];
      Wa && Wa.name === Wx ? Wa.n++ : Wv.push({
        'name': Wx,
        'n': 0x1
      });
    }
    let WQ = Wv.map(Wg => Wg.n > 0x1 ? Wg.name + '\x20x' + Wg.n : Wg.name).join(" & ");
    WQ || (WQ = WL.join(" & ").replace(/obj_/g, '') || "Encounter " + WC), W.push({
      'id': 'utdr' + WC,
      'name': WQ,
      'game': 'undertale',
      'engine': 'deltarune',
      'chapter': 'utdr',
      'engineChapter': 0x1,
      'area': "UNDERTALE (DELTARUNE engine)",
      'desc': "Undertale battlegroup " + WC + ", fought with DELTARUNE's engine.#" + WL.join(',\x20'),
      'hidden': true,
      'battlegroup': WC,
      'encounterno': 0x0,
      'music': Wl.music || null,
      'monsters': Wu,
      'party': [0x1, 0x2, 0x3],
      'heromakex': [0x50, 0x5a, 0x64],
      'heromakey': [0x64, 0x96, 0xd2],
      'background': WM,
      'battlemsg': '*\x20' + WQ + " draws near!",
      'utEngineTwin': 'ut' + WC
    });
  }
  return W.sort((Wg, Wd) => Wg.battlegroup - Wd.battlegroup), W;
}
W2(WK, 'buildUndertaleDeltaruneFights');
function Wq(W) {
  return function (I) {
    Wy(), Wo(), Wk(), WP(), c.monsterat[I] = Number(c.monsteratk[I]) || 0x0, c.monsterdf[I] = Number(c.monsterdef[I]) || 0x0, c.monsterexp[I] = Number(c.xpreward[I]) || 0x0, c.monstergold[I] = Number(c.goldreward[I]) || 0x0, c.monstername[I] || (c.monstername[I] = (D.monsters[W] || {}).name || 'Monster'), c.mercymod[I] = 0x0, c.mercymax[I] = 0x64, c.sparepoint[I] = 0x0;
    let Wl = W9(W),
      WC = [0x0, 0x3, 0x1, 0x4, 0x2, 0x5].filter(WL => Wl.canact[WL] && Wl.name[WL]);
    c.utActSlot || (c.utActSlot = []), c.utActSlot[I] = WC.slice();
    for (let WL = 0x0; WL < 0x6; WL++) {
      let Wu = WC[WL];
      c.canact[I][WL] = Wu !== void 0x0 ? 0x1 : 0x0, c.actname[I][WL] = Wu !== void 0x0 ? Wl.name[Wu] : '\x20', c.actactor[I][WL] = 0x1, c.actdesc[I][WL] = '\x20', c.actcost[I][WL] = 0x0;
    }
  };
}
W2(Wq, 'makeSetup');
export { r as UTOBJ, i as UTSCR, P as UT_DATA, X as buildUT10Fights, WK as buildUndertaleDeltaruneFights, w as buildUndertaleFights, b as scr_battlegroup, H as startUndertaleFight };