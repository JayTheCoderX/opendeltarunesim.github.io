import { Ea as Y } from './c-PBMEVLU6.js';
import { a, i as n, l as u } from './c-XSSGDLV7.js';
u();
var N = a(() => {
    try {
      return n.DR && n.DR.cfg || {};
    } catch {
      return {};
    }
  }, 'cfg'),
  q = a(() => N().audio !== false, 'audioAllowed'),
  l = a(() => Math.max(0x0, Math.min(0x1, N().sfxvol ?? 0x1)), 'sfxVol'),
  o = a(() => Math.max(0x0, Math.min(0x1, N().musicvol ?? 0.6)), 'musicVol'),
  t = null,
  i = null;
function Z() {
  if (t) return t;
  try {
    let cc = window.AudioContext || window.webkitAudioContext;
    if (!cc) return null;
    t = new cc({
      'latencyHint': 'interactive'
    }), i = t.createGain(), i.connect(t.destination);
  } catch {
    t = null;
  }
  return t;
}
a(Z, 'ctx');
function Q() {
  let cc = Z();
  if (cc && cc.state === 'suspended') try {
    cc.resume();
  } catch {}
}
a(Q, 'unlock'), typeof window < 'u' && window.addEventListener && (window.addEventListener('keydown', Q, true), window.addEventListener('pointerdown', Q, true));
var e = a(() => {
    try {
      return navigator.userActivation ? navigator.userActivation.hasBeenActive : true;
    } catch {
      return true;
    }
  }, 'gestured'),
  H = null;
function F(cc) {
  H = cc;
}
a(F, 'setIntroTable');
function X(cc) {
  if (cc.startsWith("assets/")) return cc;
  if (/\.(ogg|wav)$/.test(cc) && !cc.includes('/')) return "assets/" + cc;
  if (cc.includes('/')) {
    let cB = H && H.sounds && H.sounds[cc];
    return cB ? "assets/intro/" + cB : null;
  }
  let cf = Y[cc];
  return cf && cf.src ? cf.src : null;
}
a(X, 'urlFor');
var z = new Map();
function G(cc) {
  let cf = X(cc);
  if (!cf) return Promise.resolve(null);
  let cB = z.get(cf);
  if (cB !== void 0x0) return cB instanceof Promise ? cB : Promise.resolve(cB);
  let cs = Z();
  if (!cs) return Promise.resolve(null);
  let cD = fetch(cf).then(cd => cd.ok ? cd.arrayBuffer() : null).then(cd => cd ? new Promise(cP => cs.decodeAudioData(cd, cP, () => cP(null))) : null).then(cd => (z.set(cf, cd), cd)).catch(() => (z.set(cf, null), null));
  return z.set(cf, cD), cD;
}
a(G, 'load');
function I(cc) {
  for (let cf of cc) G(cf);
}
a(I, 'preload');
var c0 = {
    'stop'() {},
    'fade'() {},
    get 'playing'() {
      return false;
    },
    'setRate'() {}
  },
  c1 = new Set();
function c2(cc, cf = {}) {
  if (!q()) return c0;
  let cB = Z();
  if (!cB) return c0;
  let cs = X(cc);
  if (!cs) return c0;
  let cD = z.get(cs),
    cd = {
      'src': null,
      'gain': null,
      'stopped': false,
      'ended': false,
      'stop'() {
        this.stopped = true, c1.delete(this);
        try {
          this.src && this.src.stop();
        } catch {}
      },
      'fade'(cU, cV) {
        if (!this.gain) return;
        let cv = cB.currentTime;
        try {
          this.gain.gain.cancelScheduledValues(cv), this.gain.gain.setValueAtTime(this.gain.gain.value, cv), this.gain.gain.linearRampToValueAtTime(Math.max(0x0, cU), cv + Math.max(0x1, cV) / 0x1e);
        } catch {}
      },
      'setRate'(cU) {
        try {
          this.src && (this.src.playbackRate.value = cU);
        } catch {}
      },
      get 'playing'() {
        return !!this.src && !this.stopped && !this.ended;
      }
    },
    cP = cU => {
      if (!(!cU || cd.stopped)) try {
        let cV = cB.createBufferSource();
        cV.buffer = cU, cV.loop = !!cf.loop, cV.playbackRate.value = cf.pitch || 0x1;
        let cv = cB.createGain();
        cv.gain.value = (cf.vol ?? 0x1) * (cf.music ? o() : l()), cV.connect(cv), cv.connect(i), cV.onended = () => {
          cd.ended = true, c1.delete(cd);
        }, cV.start(cB.currentTime + Math.max(0x0, (cf.delay || 0x0) / 0x1e)), cd.src = cV, cd.gain = cv, c1.add(cd);
      } catch {}
    };
  if (cD && !(cD instanceof Promise)) cP(cD);else {
    let cU = performance.now();
    G(cc).then(cV => {
      performance.now() - cU < (cf.lateOk ?? 0x190) && cP(cV);
    });
  }
  return cd;
}
a(c2, 'sfx');
var c3 = new Map();
function c4(cc) {
  return cc.startsWith("assets/") || cc.includes('/') ? X(cc) : "assets/" + cc + (cc.endsWith(".ogg") || cc.endsWith(".wav") ? '' : ".ogg");
}
a(c4, 'musicUrl');
function c5(cc) {
  let cf = c4(cc);
  if (!(!cf || c3.has(cf))) try {
    let cB = new Audio(cf);
    cB.preload = 'auto', cB.load(), c3.set(cf, cB);
  } catch {}
}
a(c5, 'warmMusic');
function c6(cc, {
  loop: cf = true,
  pitch: cB = 0x1
} = {}) {
  let cs = c4(cc);
  if (!cs) return null;
  let cD = c3.get(cs);
  cD && !cD.paused && (cD = null);
  try {
    cD || (cD = new Audio(cs), c3.set(cs, cD)), cD.loop = cf, cD.volume = 0x0;
    try {
      cD.preservesPitch = false;
    } catch {}
    return cD.playbackRate = cB, cD.currentTime = 0x0, cD;
  } catch {
    return null;
  }
}
a(c6, 'musicElement');
var c7 = null,
  c8 = class cW {
    constructor(cc = 0xa) {
      this.tracks = new Map(), this.want = null, this.ticks = cc, this.muted = false;
    }
    ["set"](cc, cf = 0x1, cB = {}) {
      this.want = cc ? {
        'name': cc,
        'level': cf,
        'loop': cB.loop !== false,
        'pitch': cB.pitch || 0x1,
        'from': cB.from || 0x0
      } : null;
    }
    ["step"]() {
      let cc = q() && (e() || c7 !== false) && !this.muted ? this.want : null;
      if (cc && !this.tracks.has(cc.name)) {
        let cB = c6(cc.name, {
          'loop': cc.loop,
          'pitch': cc.pitch
        });
        if (cB) {
          try {
            cc.from && (cB.currentTime = cc.from);
          } catch {}
          let cs = !e(),
            cD = cc.name,
            cd = cB.play();
          cd && cd.then && cd.then(() => {
            cs && (c7 = true);
          }, cP => {
            cs && cP && cP.name === 'NotAllowedError' && (c7 = false, this.tracks.get(cD) === cB && this.tracks.delete(cD));
          }), this.tracks.set(cD, cB);
        }
      }
      let cf = o();
      for (let [cP, cU] of this.tracks) {
        let cV = cc && cP === cc.name ? cc.level * cf : 0x0,
          cv = Math.max(0.02, (cc ? cc.level : 0x1) * cf / this.ticks),
          cL = cU.volume < cV ? Math.min(cV, cU.volume + cv) : Math.max(cV, cU.volume - cv);
        try {
          cU.volume = Math.max(0x0, Math.min(0x1, cL));
        } catch {}
        if (cV === 0x0 && cL <= 0x0) {
          try {
            cU.pause();
          } catch {}
          this.tracks.delete(cP);
        }
      }
    }
    ["current"]() {
      return this.want && this.tracks.get(this.want.name) || null;
    }
    ["stop"]() {
      for (let cc of this.tracks.values()) try {
        cc.pause();
      } catch {}
      this.tracks.clear(), this.want = null;
    }
  };
a(c8, 'MusicMixer');
var c9 = c8;
export { q as a, o as b, e as c, F as d, I as e, c2 as f, c5 as g, c6 as h, c9 as i };