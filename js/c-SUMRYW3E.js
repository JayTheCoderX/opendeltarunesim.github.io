const p = function () {
    let mf = true;
    return function (mP, mT) {
      const mc = mf ? function () {
        if (mT) {
          const mZ = mT.apply(mP, arguments);
          return mT = null, mZ;
        }
      } : function () {};
      return mf = false, mc;
    };
  }(),
  f = p(this, function () {
    if (f.bind().toString().indexOf('\x0a') !== -0x1) return;
    return f.toString().search(".*").toString().constructor(f).search(".*");
  });
f();
import { Ea as T, N as c, T as a, b as s, c as o, d as r, hc as t, kc as K } from './c-PBMEVLU6.js';
import { a as V, l as Q } from './c-XSSGDLV7.js';
Q();
var J = {},
  q = {},
  n = null,
  m0 = new Promise(mf => {
    n = mf;
  });
function m1() {
  n && (n(), n = null);
}
V(m1, 'backgroundDone');
var m2 = V(() => m0, 'whenBackground'),
  m3 = V(() => Promise.resolve().then(() => Promise.all(Object.values(J).map(mf => Promise.resolve(mf).catch(() => 0x0)))), 'packsSettled'),
  m4 = [];
function m5() {
  for (let mf of m4) mf.length = 0x0;
  for (let mP in mI) for (let mT of mI[mP]) mT.miss = !0x1, mT.letGo();
}
V(m5, 'dropPackFrames');
var m6 = {
  'on': !0x1,
  'touching': !0x1
};
function m7(mf, mP) {
  let mT = [];
  m4.push(mT);
  let mc = mZ => {
    let mj = mP.atlas && mP.atlas[String(mZ)],
      mW = document.createElement('canvas');
    mW.width = Math.max(mP.w, mj ? mj[0x3] : 0x0), mW.height = Math.max(mP.h, mj ? mj[0x4] : 0x0);
    let mh = mj && mf[mj[0x0]];
    return mh && mh.isPackPage ? mh.cut(mW, mj) : mh && K(mW, mh, mj[0x1], mj[0x2], mj[0x3], mj[0x4]), mW;
  };
  return new Proxy(mT, {
    'get'(mZ, mj) {
      if (mj === 'length') return mP.frames;
      if (typeof mj == 'string' && /^\d+$/.test(mj)) {
        let mW = Number(mj);
        return mW < 0x0 || mW >= mP.frames ? void 0x0 : mZ[mW] || (mZ[mW] = mc(mW));
      }
      return Reflect.get(mZ, mj);
    },
    'has'(mZ, mj) {
      return typeof mj == 'string' && /^\d+$/.test(mj) ? Number(mj) < mP.frames : Reflect.has(mZ, mj);
    }
  });
}
V(m7, 'lazyFrames');
var m8 = 0x7530,
  m9 = null;
function mm(mf) {
  m9 = mf;
}
V(mm, 'onPackFill');
var mA = class ma {
  constructor(mf, mP) {
    this.url = mf, this.what = mP, this.blob = null, this.img = null, this.dec = null, this.pending = [], this.used = 0x0, this.lets = 0x0, this.miss = !0x1;
  }
  get ["isPackPage"]() {
    return !0x0;
  }
  ["fetch"](mf) {
    return this.blob ? Promise.resolve(this.blob) : s(this.url, {
      'as': 'blob',
      'what': this.what,
      'priority': mf || 'high'
    }).then(mP => this.blob = mP);
  }
  ["decode"]() {
    return this.img ? Promise.resolve(this.img) : (this.dec || (this.dec = this.fetch().then(mf => r(mf)).catch(() => o(this.url, {
      'what': this.what
    })).then(mf => {
      this.dec = null, this.img = mf, this.used = performance.now();
      let mP = this.pending;
      this.pending = [];
      for (let [mT, mc] of mP) {
        try {
          K(mT, mf, mc[0x1], mc[0x2], mc[0x3], mc[0x4]);
        } catch {}
        if (mT.__pend = 0x0, m9) try {
          m9(mT);
        } catch {}
      }
      return mf;
    }, mf => {
      throw this.dec = null, mf;
    })), this.dec);
  }
  ["cut"](mf, mP) {
    if (this.used = performance.now(), m6.on && !m6.touching && (this.miss = !0x0), this.img) {
      K(mf, this.img, mP[0x1], mP[0x2], mP[0x3], mP[0x4]);
      return;
    }
    mf.__pend = 0x1, this.pending.push([mf, mP]), this.decode().catch(() => {});
  }
  ["letGo"]() {
    if (!(!this.img || !this.blob || this.pending.length || this.dec || typeof ImageBitmap > 'u' || !(this.img instanceof ImageBitmap))) {
      try {
        this.img.close();
      } catch {}
      this.img = null, this.lets++;
    }
  }
};
V(mA, 'PackPage');
var mR = mA,
  mI = {},
  mU = 0x0;
function mS() {
  mU || typeof setInterval != 'function' || (mU = setInterval(mL, 0xbb8));
}
V(mS, 'armIdle');
function mO() {
  let mf = 0x0;
  for (let mP in mI) for (let mT of mI[mP]) mT.dec && (mf += mT.pending.length);
  return mf;
}
V(mO, 'packPending');
var mH = 0x7d0;
function mL() {
  let mf = performance.now();
  for (let mP in mI) for (let mT of mI[mP]) mT.img && mf - mT.used > (m6.on && !mT.miss ? mH : m8) && mT.letGo();
}
V(mL, 'trimPackPages');
var mX = V((mf, mP) => (mI[mf] || []).filter((mT, mc) => !mP || mP.has(mc)), 'pagesOf');
function mC(mf, mP) {
  return Promise.resolve(J[mf]).then(() => Promise.all(mX(mf, mP).map(mT => mT.decode())));
}
V(mC, 'decodeChapterPack');
var mu = V((mf, mP) => !mI[mf] || mX(mf, mP).every(mT => !!mT.img), 'chapterPackDecoded'),
  me = V(() => Object.fromEntries(Object.entries(mI).map(([mf, mP]) => [mf, {
    'pages': mP.length,
    'decoded': mP.filter(mT => mT.img).length,
    'lets': mP.reduce((mT, mc) => mT + mc.lets, 0x0)
  }])), 'packPageStats');
function mi(mf, mP, mT, mc, mZ) {
  if (!mP || !mP.sprites) return 0x0;
  let mj = "@ch" + mf,
    mW = 0x0;
  for (let [ms, mo] of Object.entries(mP.sprites)) c[ms + mj] = {
    'name': ms,
    ...mo,
    'img': mT(mo)
  }, a(c[ms + mj]), mo.masks && (mo.masks = c[ms + mj].masks), mW++;
  let mh = 0x0;
  if (mc) for (let [ml, mF] of Object.entries(mP.sounds || {})) {
    let mr = mP.soundsKeyed ? ml + mj : ml;
    if (T[mr] && !mP.soundsKeyed) continue;
    let mE = mc(ml, mF);
    mE && (T[mr] = mE, mh++);
  }
  for (let [mt, mk] of Object.entries(mP.fonts || {})) t[mt + mj] = {
    'img': mZ && mZ(mt) || {
      'width': 0x100,
      'height': 0x100
    },
    'glyphs': mk.glyphs,
    'size': mk.size
  };
  return q[mf] = {
    'sprites': mW,
    'sounds': mh,
    'state': 'ready'
  }, mW;
}
V(mi, 'registerChapterPackData');
var mw = V(() => typeof self < 'u' && typeof window < 'u' && self === window && typeof WorkerGlobalScope < 'u', 'isWorkerShim');
function mM(mf) {
  let mP = 0x811c9dc5,
    mT = JSON.stringify(mf.sprites || {}) + '|' + (mf.pages | 0x0);
  for (let mc = 0x0; mc < mT.length; mc++) mP ^= mT.charCodeAt(mc), mP = Math.imul(mP, 0x1000193);
  return (mP >>> 0x0).toString(0x24);
}
V(mM, 'packVer');
function mY(mf) {
  return J[mf] || (q[mf] = {
    'sprites': 0x0,
    'sounds': 0x0,
    'state': 'loading'
  }, J[mf] = (async () => {
    let mP = new URL("../assets/ch" + mf + '/', import.meta.url),
      mT = "chapter " + mf + "'s sprites",
      mc;
    try {
      mc = await s(new URL("data.json", mP).href, {
        'what': mT
      });
    } catch (ms) {
      return ms.cause && (ms.cause.status === 0x194 || ms.cause.stub) ? (q[mf].state = 'absent', 0x0) : mN(mf, ms);
    }
    if (!mc || !mc.sprites) return q[mf].state = 'absent', 0x0;
    if (typeof importScripts == 'function' || typeof document > 'u' || !document.body || typeof document.body.appendChild != 'function' || mw()) return mi(mf, mc, mo => ({
      'length': mo.frames
    }), null);
    let mZ,
      mj = mM(mc),
      mW = Array.from({
        'length': mc.pages || 0x0
      }, (mo, ml) => new URL("atlas_" + ml + ".png?v=" + mj, mP).href);
    if (typeof createImageBitmap == 'function' && typeof Blob == 'function') {
      let mo = mW.map(ml => new mR(ml, mT));
      try {
        await Promise.all(mo.map(ml => ml.fetch()));
      } catch (ml) {
        return mN(mf, ml);
      }
      mI[mf] = mZ = mo, mS();
    } else try {
      mZ = await Promise.all(mW.map(mF => o(mF, {
        'what': mT
      })));
    } catch (mF) {
      return mN(mf, mF);
    }
    let mh = {};
    if (mc.fonts) try {
      await Promise.all(Object.keys(mc.fonts).map(mr => o(new URL(mr + ".png?v=" + mj, mP).href, {
        'what': mT
      }).then(mE => {
        mh[mr] = mE;
      })));
    } catch (mr) {
      return mN(mf, mr);
    }
    return mi(mf, mc, mE => m7(mZ, mE), (mE, mt) => {
      let mk = new Audio(new URL(mE + '.' + mt, mP).href);
      return mk.preload = 'none', mk;
    }, mE => mh[mE] || null);
  })()), J[mf];
}
V(mY, 'loadChapterPack');
function mN(mf, mP) {
  throw q[mf].state = 'failed', delete J[mf], mP;
}
V(mN, 'failed');
function mp(mf, mP, mT, mc) {
  if (!mP) return {
    'sprites': 0x0,
    'sounds': 0x0,
    'files': []
  };
  let mZ = "@mod_" + mf,
    mj = 0x0,
    mW = 0x0;
  for (let [mh, ms] of Object.entries(mP.sprites || {})) c[mh + mZ] = {
    'name': mh,
    ...ms,
    'img': mT(ms)
  }, a(c[mh + mZ]), ms.masks && (ms.masks = c[mh + mZ].masks), mj++;
  if (mc) for (let [mo, ml] of Object.entries(mP.sounds || {})) {
    let mF = mc(mo, ml);
    mF && (T[mo + mZ] = mF, mW++);
  }
  return q['mod_' + mf] = {
    'sprites': mj,
    'sounds': mW,
    'state': 'ready'
  }, {
    'sprites': mj,
    'sounds': mW,
    'files': mP.files || []
  };
}
V(mp, 'registerModPackData');
function mz(mf) {
  let mP = 'mod_' + mf;
  return J[mP] || (q[mP] = {
    'sprites': 0x0,
    'sounds': 0x0,
    'state': 'loading'
  }, J[mP] = (async () => {
    let mT = {
      'sprites': 0x0,
      'sounds': 0x0,
      'files': []
    };
    try {
      let mc = new URL("../assets/mods/" + mf + '/', import.meta.url),
        mZ = await fetch(new URL("data.json", mc));
      if (!mZ || mZ.ok === !0x1) return q[mP].state = 'absent', mT;
      let mj = await mZ.json();
      if (typeof importScripts == 'function' || typeof document > 'u' || !document.body || typeof document.body.appendChild != 'function' || mw()) return mp(mf, mj, mh => ({
        'length': mh.frames
      }), null);
      let mW = [];
      return await Promise.all(Array.from({
        'length': mj.pages || 0x0
      }, (mh, ms) => new Promise(mo => {
        let ml = new Image();
        ml.onload = mo, ml.onerror = mo, ml.src = new URL("atlas_" + ms + ".png?v=" + mM(mj), mc).href, mW[ms] = ml;
      }))), mp(mf, mj, mh => m7(mW, mh), (mh, ms) => {
        let mo = new Audio(new URL(mh + '.' + ms, mc).href);
        return mo.preload = 'none', mo;
      });
    } catch {
      return q[mP].state = 'absent', mT;
    }
  })()), J[mP];
}
V(mz, 'loadModPack');
export { q as a, m1 as b, m2 as c, m3 as d, m5 as e, m6 as f, m7 as g, mm as h, mO as i, mL as j, mC as k, mu as l, me as m, mi as n, mY as o, mp as p, mz as q };