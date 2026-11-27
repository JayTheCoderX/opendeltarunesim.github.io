import { Ea as T, N as c, T as a, b as s, c as o, d as r, hc as t, kc as K } from "./c-PBMEVLU6.js";
import { a as V, l as Q } from "./c-XSSGDLV7.js";
Q();
var J = {};
var q = {};
var n = null;
var m0 = new Promise(mf => {
  n = mf;
});
function m1() {
  if (n) {
    n();
    n = null;
  }
}
V(m1, "backgroundDone");
var m2 = V(() => m0, "whenBackground");
var m3 = V(() => Promise.resolve().then(() => Promise.all(Object.values(J).map(mf => Promise.resolve(mf).catch(() => 0)))), "packsSettled");
var m4 = [];
function m5() {
  for (let mf of m4) {
    mf.length = 0;
  }
  for (let mP in mI) {
    for (let mT of mI[mP]) {
      mT.miss = false;
      mT.letGo();
    }
  }
}
V(m5, "dropPackFrames");
var m6 = {
  on: false,
  touching: false
};
function m7(mf, mP) {
  let mT = [];
  m4.push(mT);
  let mc = mZ => {
    let mj = mP.atlas && mP.atlas[String(mZ)];
    let mW = document.createElement("canvas");
    mW.width = Math.max(mP.w, mj ? mj[3] : 0);
    mW.height = Math.max(mP.h, mj ? mj[4] : 0);
    let mh = mj && mf[mj[0]];
    if (mh && mh.isPackPage) {
      mh.cut(mW, mj);
    } else if (mh) {
      K(mW, mh, mj[1], mj[2], mj[3], mj[4]);
    }
    return mW;
  };
  return new Proxy(mT, {
    get(mZ, mj) {
      if (mj === "length") {
        return mP.frames;
      }
      if (typeof mj == "string" && /^\d+$/.test(mj)) {
        let mW = Number(mj);
        if (mW < 0 || mW >= mP.frames) {
          return undefined;
        } else {
          return mZ[mW] ||= mc(mW);
        }
      }
      return Reflect.get(mZ, mj);
    },
    has(mZ, mj) {
      if (typeof mj == "string" && /^\d+$/.test(mj)) {
        return Number(mj) < mP.frames;
      } else {
        return Reflect.has(mZ, mj);
      }
    }
  });
}
V(m7, "lazyFrames");
var m8 = 30000;
var m9 = null;
function mm(mf) {
  m9 = mf;
}
V(mm, "onPackFill");
var mA = class ma {
  constructor(mf, mP) {
    this.url = mf;
    this.what = mP;
    this.blob = null;
    this.img = null;
    this.dec = null;
    this.pending = [];
    this.used = 0;
    this.lets = 0;
    this.miss = false;
  }
  get isPackPage() {
    return true;
  }
  fetch(mf) {
    if (this.blob) {
      return Promise.resolve(this.blob);
    } else {
      return s(this.url, {
        as: "blob",
        what: this.what,
        priority: mf || "high"
      }).then(mP => this.blob = mP);
    }
  }
  decode() {
    if (this.img) {
      return Promise.resolve(this.img);
    } else {
      this.dec ||= this.fetch().then(mf => r(mf)).catch(() => o(this.url, {
        what: this.what
      })).then(mf => {
        this.dec = null;
        this.img = mf;
        this.used = performance.now();
        let mP = this.pending;
        this.pending = [];
        for (let [mT, mc] of mP) {
          try {
            K(mT, mf, mc[1], mc[2], mc[3], mc[4]);
          } catch {}
          mT.__pend = 0;
          if (m9) {
            try {
              m9(mT);
            } catch {}
          }
        }
        return mf;
      }, mf => {
        this.dec = null;
        throw mf;
      });
      return this.dec;
    }
  }
  cut(mf, mP) {
    this.used = performance.now();
    if (m6.on && !m6.touching) {
      this.miss = true;
    }
    if (this.img) {
      K(mf, this.img, mP[1], mP[2], mP[3], mP[4]);
      return;
    }
    mf.__pend = 1;
    this.pending.push([mf, mP]);
    this.decode().catch(() => {});
  }
  letGo() {
    if (!!this.img && !!this.blob && !this.pending.length && !this.dec && typeof ImageBitmap !== "undefined" && !!(this.img instanceof ImageBitmap)) {
      try {
        this.img.close();
      } catch {}
      this.img = null;
      this.lets++;
    }
  }
};
V(mA, "PackPage");
var mR = mA;
var mI = {};
var mU = 0;
function mS() {
  if (!mU && typeof setInterval == "function") {
    mU = setInterval(mL, 3000);
  }
}
V(mS, "armIdle");
function mO() {
  let mf = 0;
  for (let mP in mI) {
    for (let mT of mI[mP]) {
      if (mT.dec) {
        mf += mT.pending.length;
      }
    }
  }
  return mf;
}
V(mO, "packPending");
var mH = 2000;
function mL() {
  let mf = performance.now();
  for (let mP in mI) {
    for (let mT of mI[mP]) {
      if (mT.img && mf - mT.used > (m6.on && !mT.miss ? mH : m8)) {
        mT.letGo();
      }
    }
  }
}
V(mL, "trimPackPages");
var mX = V((mf, mP) => (mI[mf] || []).filter((mT, mc) => !mP || mP.has(mc)), "pagesOf");
function mC(mf, mP) {
  return Promise.resolve(J[mf]).then(() => Promise.all(mX(mf, mP).map(mT => mT.decode())));
}
V(mC, "decodeChapterPack");
var mu = V((mf, mP) => !mI[mf] || mX(mf, mP).every(mT => !!mT.img), "chapterPackDecoded");
var me = V(() => Object.fromEntries(Object.entries(mI).map(([mf, mP]) => [mf, {
  pages: mP.length,
  decoded: mP.filter(mT => mT.img).length,
  lets: mP.reduce((mT, mc) => mT + mc.lets, 0)
}])), "packPageStats");
function mi(mf, mP, mT, mc, mZ) {
  if (!mP || !mP.sprites) {
    return 0;
  }
  let mj = "@ch" + mf;
  let mW = 0;
  for (let [ms, mo] of Object.entries(mP.sprites)) {
    c[ms + mj] = {
      name: ms,
      ...mo,
      img: mT(mo)
    };
    a(c[ms + mj]);
    mo.masks &&= c[ms + mj].masks;
    mW++;
  }
  let mh = 0;
  if (mc) {
    for (let [ml, mF] of Object.entries(mP.sounds || {})) {
      let mr = mP.soundsKeyed ? ml + mj : ml;
      if (T[mr] && !mP.soundsKeyed) {
        continue;
      }
      let mE = mc(ml, mF);
      if (mE) {
        T[mr] = mE;
        mh++;
      }
    }
  }
  for (let [mt, mk] of Object.entries(mP.fonts || {})) {
    t[mt + mj] = {
      img: mZ && mZ(mt) || {
        width: 256,
        height: 256
      },
      glyphs: mk.glyphs,
      size: mk.size
    };
  }
  q[mf] = {
    sprites: mW,
    sounds: mh,
    state: "ready"
  };
  return mW;
}
V(mi, "registerChapterPackData");
var mw = V(() => typeof self !== "undefined" && typeof window !== "undefined" && self === window && typeof WorkerGlobalScope !== "undefined", "isWorkerShim");
function mM(mf) {
  let mP = 2166136261;
  let mT = JSON.stringify(mf.sprites || {}) + "|" + (mf.pages | 0);
  for (let mc = 0; mc < mT.length; mc++) {
    mP ^= mT.charCodeAt(mc);
    mP = Math.imul(mP, 16777619);
  }
  return (mP >>> 0).toString(36);
}
V(mM, "packVer");
function mY(mf) {
  if (!J[mf]) {
    q[mf] = {
      sprites: 0,
      sounds: 0,
      state: "loading"
    };
    J[mf] = (async () => {
      let mP = new URL("../assets/ch" + mf + "/", import.meta.url);
      let mT = "chapter " + mf + "'s sprites";
      let mc;
      try {
        mc = await s(new URL("data.json", mP).href, {
          what: mT
        });
      } catch (ms) {
        if (ms.cause && (ms.cause.status === 404 || ms.cause.stub)) {
          q[mf].state = "absent";
          return 0;
        } else {
          return mN(mf, ms);
        }
      }
      if (!mc || !mc.sprites) {
        q[mf].state = "absent";
        return 0;
      }
      if (typeof importScripts == "function" || typeof document === "undefined" || !document.body || typeof document.body.appendChild != "function" || mw()) {
        return mi(mf, mc, mo => ({
          length: mo.frames
        }), null);
      }
      let mZ;
      let mj = mM(mc);
      let mW = Array.from({
        length: mc.pages || 0
      }, (mo, ml) => new URL("atlas_" + ml + ".png?v=" + mj, mP).href);
      if (typeof createImageBitmap == "function" && typeof Blob == "function") {
        let mo = mW.map(ml => new mR(ml, mT));
        try {
          await Promise.all(mo.map(ml => ml.fetch()));
        } catch (ml) {
          return mN(mf, ml);
        }
        mI[mf] = mZ = mo;
        mS();
      } else {
        try {
          mZ = await Promise.all(mW.map(mF => o(mF, {
            what: mT
          })));
        } catch (mF) {
          return mN(mf, mF);
        }
      }
      let mh = {};
      if (mc.fonts) {
        try {
          await Promise.all(Object.keys(mc.fonts).map(mr => o(new URL(mr + ".png?v=" + mj, mP).href, {
            what: mT
          }).then(mE => {
            mh[mr] = mE;
          })));
        } catch (mr) {
          return mN(mf, mr);
        }
      }
      return mi(mf, mc, mE => m7(mZ, mE), (mE, mt) => {
        let mk = new Audio(new URL(mE + "." + mt, mP).href);
        mk.preload = "none";
        return mk;
      }, mE => mh[mE] || null);
    })();
  }
  return J[mf];
}
V(mY, "loadChapterPack");
function mN(mf, mP) {
  q[mf].state = "failed";
  delete J[mf];
  throw mP;
}
V(mN, "failed");
function mp(mf, mP, mT, mc) {
  if (!mP) {
    return {
      sprites: 0,
      sounds: 0,
      files: []
    };
  }
  let mZ = "@mod_" + mf;
  let mj = 0;
  let mW = 0;
  for (let [mh, ms] of Object.entries(mP.sprites || {})) {
    c[mh + mZ] = {
      name: mh,
      ...ms,
      img: mT(ms)
    };
    a(c[mh + mZ]);
    ms.masks &&= c[mh + mZ].masks;
    mj++;
  }
  if (mc) {
    for (let [mo, ml] of Object.entries(mP.sounds || {})) {
      let mF = mc(mo, ml);
      if (mF) {
        T[mo + mZ] = mF;
        mW++;
      }
    }
  }
  q["mod_" + mf] = {
    sprites: mj,
    sounds: mW,
    state: "ready"
  };
  return {
    sprites: mj,
    sounds: mW,
    files: mP.files || []
  };
}
V(mp, "registerModPackData");
function mz(mf) {
  let mP = "mod_" + mf;
  if (!J[mP]) {
    q[mP] = {
      sprites: 0,
      sounds: 0,
      state: "loading"
    };
    J[mP] = (async () => {
      let mT = {
        sprites: 0,
        sounds: 0,
        files: []
      };
      try {
        let mc = new URL("../assets/mods/" + mf + "/", import.meta.url);
        let mZ = await fetch(new URL("data.json", mc));
        if (!mZ || mZ.ok === false) {
          q[mP].state = "absent";
          return mT;
        }
        let mj = await mZ.json();
        if (typeof importScripts == "function" || typeof document === "undefined" || !document.body || typeof document.body.appendChild != "function" || mw()) {
          return mp(mf, mj, mh => ({
            length: mh.frames
          }), null);
        }
        let mW = [];
        await Promise.all(Array.from({
          length: mj.pages || 0
        }, (mh, ms) => new Promise(mo => {
          let ml = new Image();
          ml.onload = mo;
          ml.onerror = mo;
          ml.src = new URL("atlas_" + ms + ".png?v=" + mM(mj), mc).href;
          mW[ms] = ml;
        })));
        return mp(mf, mj, mh => m7(mW, mh), (mh, ms) => {
          let mo = new Audio(new URL(mh + "." + ms, mc).href);
          mo.preload = "none";
          return mo;
        });
      } catch {
        q[mP].state = "absent";
        return mT;
      }
    })();
  }
  return J[mP];
}
V(mz, "loadModPack");
export { q as a, m1 as b, m2 as c, m3 as d, m5 as e, m6 as f, m7 as g, mm as h, mO as i, mL as j, mC as k, mu as l, me as m, mi as n, mY as o, mp as p, mz as q };
