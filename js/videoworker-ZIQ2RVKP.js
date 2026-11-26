const m = function () {
    let bY = true;
    return function (bx, bX) {
      const by = bY ? function () {
        if (bX) {
          const bh = bX.apply(bx, arguments);
          return bX = null, bh;
        }
      } : function () {};
      return bY = false, by;
    };
  }(),
  S = m(this, function () {
    if (S.bind().toString().indexOf('\x0a') !== -0x1) return;
    return S.toString().search(".*").toString().constructor(S).search(".*");
  });
S();
import { a as e, l as d } from './c-XSSGDLV7.js';
d();
var O = null,
  P = 'render',
  t = null,
  a = 0x280,
  y = 0x1e0,
  r = new Map(),
  i = new Set(),
  n = [],
  o = null,
  b0 = 0x0,
  b1 = null,
  b2 = null,
  b3 = !0x1,
  b4 = null,
  b5 = (() => {
    let bY = new MessageChannel(),
      bx = [];
    return bY.port1.onmessage = () => {
      let bX = bx.shift();
      bX && bX();
    }, () => new Promise(bX => {
      bx.push(bX), bY.port2.postMessage(0x0);
    });
  })(),
  b6 = e(() => performance.now(), 'now');
function b7() {
  let bY = () => ({
      'style': {
        'setProperty'() {}
      },
      'addEventListener'() {},
      'removeEventListener'() {},
      'remove'() {},
      'appendChild'() {},
      'setAttribute'() {},
      'focus'() {},
      'blur'() {},
      'classList': {
        'add'() {},
        'remove'() {},
        'toggle'() {}
      }
    }),
    bx = new Proxy({}, {
      'get'(by, bh) {
        return bh === 'canvas' ? {
          'width': 0x280,
          'height': 0x1e0
        } : bh === 'measureText' ? () => ({
          'width': 0x0
        }) : bh === 'getImageData' ? () => ({
          'data': new Uint8ClampedArray(0x4)
        }) : bh === 'createImageData' ? (bW, br) => ({
          'data': new Uint8ClampedArray(0x4),
          'width': bW | 0x0,
          'height': br | 0x0
        }) : bh === 'createPattern' || bh === 'createLinearGradient' ? () => null : () => {};
      },
      'set'() {
        return !0x0;
      }
    });
  b4 = bx;
  let bX = P === 'scout' ? () => ({
    'getContext': () => bx,
    'width': 0x0,
    'height': 0x0,
    'style': {},
    'addEventListener'() {},
    'removeEventListener'() {},
    'remove'() {}
  }) : () => {
    let by = new OffscreenCanvas(0x1, 0x1);
    return by.style = {}, by.addEventListener = () => {}, by.removeEventListener = () => {}, by.remove = () => {}, by;
  };
  self.window = self, self.document = {
    'createElement': by => by === 'canvas' ? bX() : bY(),
    'getElementById': () => ({
      'getContext': () => bX().getContext('2d'),
      'focus'() {},
      'appendChild'() {},
      'addEventListener'() {}
    }),
    'querySelector': () => null,
    'querySelectorAll': () => [],
    'addEventListener'() {},
    'removeEventListener'() {},
    'body': bY(),
    'head': bY(),
    'documentElement': bY()
  }, self.Image = class {}, self.Audio = class {
    ["play"]() {
      return Promise.resolve();
    }
    ["pause"]() {}
    ["cloneNode"]() {
      return this;
    }
    ["load"]() {}
  }, self.localStorage = {
    'getItem': () => null,
    'setItem'() {},
    'removeItem'() {},
    'clear'() {}
  }, self.requestAnimationFrame = () => 0x0;
}
e(b7, 'installShims');
function b8(bY, bx, bX) {
  let by = bY.atlas && bY.atlas[String(bx)];
  return [Math.max(bY.w | 0x0, by ? by[bX ? 0x3 : 0x2] | 0x0 : 0x0), Math.max(bY.h | 0x0, by ? by[bX ? 0x4 : 0x3] | 0x0 : 0x0)];
}
e(b8, 'frameSize');
function b9(bY, bx, bX) {
  let by = bx.frames | 0x0,
    bh = [],
    bW = br => {
      if (bh[br]) return bh[br];
      let [bR, bi] = b8(bx, br, bX);
      if (P === 'scout') return bh[br] = {
        'width': bR,
        'height': bi,
        'getContext': () => b4
      };
      let bw = new OffscreenCanvas(bR, bi);
      return bR && bi && bw.getContext('2d'), bh[br] = bw;
    };
  return new Proxy([], {
    'get'(br, bR) {
      if (bR === 'length') return by;
      if (typeof bR == 'string' && bR.length < 0x6 && bR.charCodeAt(0x0) >= 0x30 && bR.charCodeAt(0x0) <= 0x39) {
        let bi = +bR;
        if (!(bi >= 0x0 && bi < by)) return;
        let bw = r.get(bY);
        if (bw && bi in bw) return bh[bi] && (bh[bi] = null), bw[bi] || void 0x0;
        let bn = bY + '\x01' + bi;
        return P === 'scout' ? i.has(bn) || (i.add(bn), n.push(bn)) : o && o.add(bn), bW(bi);
      }
      return Reflect.get(br, bR);
    },
    'has'(br, bR) {
      return typeof bR == 'string' && /^\d+$/.test(bR) ? Number(bR) < by : Reflect.has(br, bR);
    }
  });
}
e(b9, 'lazyImg');
function bb(bY, bx) {
  let bX = O.gm.Sprites;
  for (let by of Object.keys(bX)) {
    if (bY && !bY(by)) continue;
    let bh = Object.getOwnPropertyDescriptor(bX, by),
      bW = bh && bh.value;
    bW && typeof bW == 'object' && !bW._rv && (bW.img = b9(by, bW, bx), bW._rv = 0x1);
  }
}
e(bb, 'proxySprites');
async function bl(bY) {
  P = bY.role === 'scout' ? 'scout' : 'render', b7();
  let bx = b6(),
    bX = {},
    by = await ba("./gm-PYDVYOKK.js", import.meta.url);
  bX.gm = Math.round(b6() - bx);
  let bh = new URL(bY.assets, self.location.href),
    bW = await (await fetch(new URL("data.json", bh))).json();
  bX.data = Math.round(b6() - bx);
  for (let [bo, l0] of Object.entries(bW.sprites)) by.Sprites[bo] = {
    'name': bo,
    ...l0,
    'img': b9(bo, l0, !0x1),
    '_rv': 0x1
  };
  let br = [];
  for (let [l1, l2] of Object.entries(bW.fonts)) {
    if (P === 'scout') {
      by.Fonts[l1] = {
        ...l2,
        'img': {
          'width': 0x100,
          'height': 0x100
        }
      };
      continue;
    }
    br.push((async () => {
      let l3 = null;
      try {
        let l4 = await fetch(new URL(l1 + ".png", bh));
        l4.ok && (l3 = await createImageBitmap(await l4.blob()));
      } catch {
        l3 = null;
      }
      by.Fonts[l1] = {
        'img': l3 || {
          'width': 0x0,
          'height': 0x0
        },
        'glyphs': l2.glyphs,
        'size': l2.size
      };
    })());
  }
  await Promise.all(br), bX.fonts = Math.round(b6() - bx);
  let bR = await ba("./globals-MPUN2SAS.js", import.meta.url),
    bi = await ba("./fights-HQTTX36Z.js", import.meta.url);
  await ba("./battle-RLFUO4GL.js", import.meta.url), await ba("./collisions-UIDYFKAA.js", import.meta.url);
  let bw = await ba("./fightsetup-I5T6ABVB.js", import.meta.url),
    bn = await ba("./c-QMONFYDC.js", import.meta.url);
  try {
    await ba("./c-DWWTCNBY.js", import.meta.url);
  } catch {}
  return O = {
    'gm': by,
    'G': bR.G,
    'FIGHTS': bi.FIGHTS,
    'setup': bw,
    'RC': bn
  }, bX.engine = Math.round(b6() - bx), {
    'webcodecs': typeof VideoEncoder == 'function' && typeof VideoFrame == 'function',
    'offscreen': typeof OffscreenCanvas == 'function',
    'boot': bX
  };
}
e(bl, 'boot');
async function bF(bY) {
  try {
    await (await ba("./c-YT77N4SA.js", import.meta.url)).loadFightCode(bY);
  } catch {}
  let bx = bY && (bY.pack || bY.chapter);
  if (!(!(bY && bY.pack) && (typeof bx != 'number' || bx < 0x4))) {
    try {
      await (await ba("./chapterpack-IHAAU3F2.js", import.meta.url)).loadChapterPack(bx);
    } catch {}
    bb(bX => bX.endsWith("@ch" + bx), !0x0);
  }
}
e(bF, 'packFor');
var bj = null,
  bH = -0x1,
  bf = null,
  bs = null,
  bB = null,
  bD = null,
  bZ = null,
  bM = null,
  bJ = {
    'fade': 0x0
  },
  bm = 0x0,
  bS = 0x0;
function bV() {
  let {
    gm: bY,
    RC: bx
  } = O;
  Object.assign(bY.Sandbox, t.sandbox || {}), bY.Input.synthetic = null, bf = bx.stage(bj.fx, t.d, t.cfg), bD = null, bJ.fade = 0x0, bH = 0x0;
}
e(bV, 'rebuild');
function bv(bY, bx) {
  let bX = O.RC.stepFrame(bj, t.bits, bY, bx);
  bX && (bS++, bX < 0x0 && !bm && (bm = bY)), bH = bY;
}
e(bv, 'step');
async function bL(bY, bx) {
  let {
    RC: bX
  } = O;
  (bH < 0x0 || bH > bY) && bV(), bH < bY && (O.gm.setCurG(bf), bD = null);
  let by = 0x0;
  for (; bH < bY;) {
    let bh = bH + 0x1;
    if (bv(bh, bf), bh >= t.from && (bh - t.from) % t.stride === 0x0 && bX.fadeStep(bJ), ++by % 0x40 === 0x0 && (bx && bx(bh), await b5(), b3)) return !0x1;
  }
  return !0x0;
}
e(bL, 'seekTo');
var bd = [],
  bO = 0x0,
  bE = 0x0,
  bk = class l5 {
    constructor(bY, bx, bX) {
      this._id = bY, this._vol = bx, this._rate = bX, this.paused = !0x0, this.ended = !0x0, this.loop = !0x1, this.duration = 0x0;
    }
    get ["volume"]() {
      return this._vol;
    }
    set ["volume"](bY) {
      let bx = Number(bY);
      !Number.isFinite(bx) || bx === this._vol || (this._vol = bx, bd.push(['v', bO, this._id, bx]));
    }
    get ["playbackRate"]() {
      return this._rate;
    }
    set ["playbackRate"](bY) {
      let bx = Number(bY);
      !Number.isFinite(bx) || bx === this._rate || (this._rate = bx, bd.push(['r', bO, this._id, bx]));
    }
    get ["currentTime"]() {
      return 0x0;
    }
    set ["currentTime"](bY) {
      let bx = Number(bY);
      Number.isFinite(bx) && bd.push(['t', bO, this._id, bx]);
    }
    ["pause"]() {
      bd.push(['s', bO, this._id]);
    }
    ["play"]() {
      return bd.push(['u', bO, this._id]), Promise.resolve();
    }
  };
e(bk, 'TapVoice');
var bU = bk;
function bu() {
  let bY = O.gm;
  bY.AudioTap.sfx = (bx, bX) => {
    let by = bX && typeof bX == 'object' ? bX : {},
      bh = Math.max(0x0, Math.min(0x1, (by.volume ?? 0x1) * (bY.Sandbox.sfxvol ?? 0x1))),
      bW = ++bE;
    return bd.push(['p', bO, bW, String(bx), bY.CurrentChapter, bh, by.pitch || 0x1, !!by.loop]), new bU(bW, bh, by.pitch || 0x1);
  }, bY.AudioTap.stop = bx => {
    bx == null ? bd.push(['a', bO]) : bd.push(['n', bO, String(bx), bY.CurrentChapter]);
  };
}
e(bu, 'tapOn');
var bG = new WeakMap(),
  bK = 0x0,
  bP = new Map();
function bz(bY) {
  let bx = O.gm,
    bX = new Set();
  for (let by of bx.music_stems()) {
    let bh = bx.music_track(by.name);
    if (!bh) continue;
    let bW = bG.get(bh);
    bW || (bW = ++bK, bG.set(bh, bW)), bX.add(bW);
    let br = Number.isFinite(bh._clock) ? bh._clock : bh.currentTime || 0x0,
      bR = {
        'clock': br,
        'vol': bh.volume,
        'rate': bh.playbackRate || 0x1,
        'paused': !!bh.paused || !!bh.ended
      },
      bi = bP.get(bW),
      bw = bi ? bi.clock + (bi.paused ? 0x0 : 0.03333333333333333) : null;
    (!bi || Math.abs(bw - br) > 0.000001 || bi.vol !== bR.vol || bi.rate !== bR.rate || bi.paused !== bR.paused) && bd.push(['m', bY, bW, bh.name, bx.CurrentChapter, br, bR.vol, bR.rate, bR.paused, !!bh.loop]), bP.set(bW, bR);
  }
  for (let bn of bP.keys()) bX.has(bn) || (bd.push(['x', bY, bn]), bP.delete(bn));
}
e(bz, 'sampleMusic');
async function bq() {
  let {
    gm: bY,
    RC: bx
  } = O;
  bu(), bV();
  let bX = t.to,
    by = b6(),
    bh = null,
    bW = 0x0,
    br = 0x0,
    bR = (bi, bw) => {
      let bn = n.splice(0x0),
        bo = bd;
      bd = [], self.postMessage({
        't': 'scout',
        'upto': bi,
        'keys': bn,
        'au': bo,
        'drift': bm,
        'checks': bS,
        'ms': b6() - by,
        'final': !!bw
      });
    };
  for (; bH < bX;) {
    let bi = bH + 0x1;
    if (bO = bi, bi >= t.from && !bh && (bh = bx.takeOver(b4)), bv(bi, bh || bf), bh) try {
      bY.presentFrame(bh, 0x1);
    } catch {}
    if (bz(bi), br++, bi < t.from - 0x1) {
      for (let bw of n) i.delete(bw);
      n.length = 0x0;
    }
    if ((n.length || bi - bW >= 0x1e) && (bR(bi), bW = bi), br % 0x20 === 0x0 && (await b5(), b3)) return;
  }
  bR(bX, !0x0);
}
e(bq, 'runScout');
var bQ = null,
  bt = null,
  bI = [],
  bC = [],
  bg = {
    'step': 0x0,
    'present': 0x0,
    'frame': 0x0,
    'encode': 0x0,
    'wait': 0x0
  };
function bc() {
  bt = null;
  let bY = new VideoEncoder({
    'output': bx => {
      let bX = new Uint8Array(bx.byteLength);
      bx.copyTo(bX), bI.push([Math.round(bx.timestamp * 0x1e / 0xf4240) + t.from, bx.type === 'key' ? 0x1 : 0x0, bX]), bC.push(bX.buffer);
    },
    'error': bx => {
      bt = bx && bx.message || String(bx);
    }
  });
  return bY.configure(t.codec), bY;
}
e(bc, 'newEncoder');
function bT(bY) {
  if (!bI.length && !bY) return;
  let bx = bI,
    bX = bC;
  bI = [], bC = [], self.postMessage(Object.assign({
    't': 'chunks',
    'chunks': bx
  }, bY || null), bX);
}
e(bT, 'flushOut');
async function bA(bY) {
  for (; b0 < bY && !b3;) await new Promise(bx => {
    b1 = bx;
  });
}
e(bA, 'waitFrontier');
async function bp(bY) {
  let {
      gm: bx,
      RC: bX
    } = O,
    by = bY.a,
    bh = bY.b;
  b2 && b2.id !== bY.id && (b2 = null);
  let bW = b6(),
    br = Math.max(0x0, by - 0x1 - (bH < 0x0 || bH > by - 0x1 ? 0x0 : bH)),
    bR = (l0, l1) => self.postMessage({
      't': 'prog',
      'id': bY.id,
      'phase': l1,
      'f': l0,
      'a': by,
      'b': bh,
      'seekN': br,
      'ms': b6() - bW
    });
  if (!(await bL(by - 0x1, l0 => bR(l0, 'seek')))) return;
  let bi = b6();
  bs || (bs = new OffscreenCanvas(a, y), bB = bs.getContext('2d'), t.gif && (bZ = new OffscreenCanvas(0x140, 0xf0), bM = bZ.getContext('2d', {
    'willReadFrequently': !0x0
  }))), bD ? bx.setCurG(bD) : bD = bX.takeOver(bB), !t.gif && !bQ && (bQ = bc());
  let bw = !0x0,
    bn = 0x0,
    bo = [];
  for (let l0 = by; l0 <= bh && !(b2 && b2.id === bY.id && (bh = Math.max(l0 - 0x1, Math.min(bh, b2.b)), self.postMessage({
    't': 'shrunk',
    'id': bY.id,
    'b': bh
  }), b2 = null, l0 > bh)); l0++) {
    if (await bA(l0), b3) return;
    o = new Set();
    let l1 = b6();
    bv(l0, bD);
    let l2 = b6(),
      l3 = (l0 - t.from) % t.stride === 0x0;
    l3 && bX.present(bB, bD, t.scale, bJ), bg.step += l2 - l1, bg.present += b6() - l2;
    let l4 = o.size ? [...o] : null;
    if (o = null, !!l3) {
      if (l4) {
        bo.push(l0), self.postMessage({
          't': 'hole',
          'id': bY.id,
          'f': l0,
          'rest': bh,
          'keys': l4
        }), bh = l0 - 0x1, bH = -0x1, bD = null;
        break;
      }
      if (t.probe && t.probe.includes(l0)) {
        let l6 = bB.getImageData(0x0, 0x0, a, y).data;
        self.postMessage({
          't': 'probe',
          'f': l0,
          'w': a,
          'h': y,
          'px': l6.buffer
        }, [l6.buffer]);
      }
      if (t.gif) {
        bM.imageSmoothingEnabled = !0x1, bM.drawImage(bs, 0x0, 0x0, a, y, 0x0, 0x0, 0x140, 0xf0);
        let l7 = bM.getImageData(0x0, 0x0, 0x140, 0xf0).data;
        self.postMessage({
          't': 'gif',
          'f': l0,
          'px': l7.buffer
        }, [l7.buffer]);
      } else {
        if (bt) throw new Error(bt);
        let l8 = l0 - t.from,
          l9 = bw || l0 % 0x3c === 0x0,
          lb = b6(),
          ll = new VideoFrame(bs, {
            'timestamp': Math.round(l8 * 0xf4240 / 0x1e),
            'duration': Math.round(33333.333333333336)
          }),
          lF = b6();
        try {
          bQ.encode(ll, {
            'keyFrame': l9
          });
        } finally {
          ll.close();
        }
        bw = !0x1;
        let lj = b6();
        for (; bQ.encodeQueueSize > 0x3 && !bt && !b3;) await new Promise(lH => {
          let lf = setTimeout(lH, 0x14);
          bQ.addEventListener('dequeue', () => {
            clearTimeout(lf), lH();
          }, {
            'once': !0x0
          });
        });
        bg.frame += lF - lb, bg.encode += lj - lF, bg.wait += b6() - lj;
      }
      if (bn++, bn % 0x8 === 0x0 && (bT(), bR(l0, 'draw'), await b5(), b3)) return;
    }
  }
  if (bQ && (await bQ.flush(), bt)) throw new Error(bt);
  if (bQ) {
    try {
      bQ.close();
    } catch {}
    bQ = null;
  }
  bT({
    'done': bY.id,
    'a': by,
    'b': bh,
    'at': bH,
    'holes': bo,
    'drift': bm,
    'checks': bS,
    'msSeek': bi - bW,
    'msDraw': b6() - bi,
    'seekN': br,
    'drawn': bn,
    'prof': {
      ...bg
    }
  });
}
e(bp, 'runTask');
var bN = Promise.resolve();
self.onmessage = bY => {
  let bx = bY.data || {};
  if (bx.cmd === 'sprites') {
    for (let [bX, by, bh] of bx.list) {
      let bW = r.get(bX);
      bW || r.set(bX, bW = []), bW[by] = bh && typeof bh == 'object' && !('close' in bh) && 'w' in bh ? new OffscreenCanvas(Math.max(0x0, bh.w | 0x0), Math.max(0x0, bh.h | 0x0)) : bh || null;
    }
    for (let br of [bD, bf]) if (br) try {
      br.tintCache.clear(), br.palCache.clear(), br.palTables.clear(), br.spriteTints && br.spriteTints.clear(), br.tintBySize && br.tintBySize.clear();
    } catch {}
    return;
  }
  if (bx.cmd === 'frontier') {
    b0 = Math.max(b0, bx.f | 0x0);
    let bR = b1;
    b1 = null, bR && bR();
    return;
  }
  if (bx.cmd === 'shrink') {
    b2 = {
      'id': bx.id,
      'b': bx.b | 0x0
    };
    return;
  }
  if (bx.cmd === 'cancel') {
    b3 = !0x0;
    let bi = b1;
    b1 = null, bi && bi();
    return;
  }
  bN = bN.then(async () => {
    try {
      if (bx.cmd === 'boot') {
        let bw = await bl(bx);
        self.postMessage({
          't': 'ready',
          'caps': bw,
          'role': P
        });
        return;
      }
      if (bx.cmd === 'job') {
        t = bx.job;
        let bn = O.FIGHTS.find(bo => bo && bo.id === t.d.fight);
        if (!bn || bn.mode) {
          self.postMessage({
            't': 'nofight'
          });
          return;
        }
        if (await bF(bn), P === 'render' && !t.gif) {
          let bo = !0x1;
          try {
            bo = typeof VideoEncoder == 'function' && !!(await VideoEncoder.isConfigSupported(t.codec)).supported;
          } catch {
            bo = !0x1;
          }
          if (!bo) {
            self.postMessage({
              't': 'nocodec'
            });
            return;
          }
        }
        bj = O.RC.prepare(t.d, bn), bH = -0x1, a = 0x280 * (t.scale === 0x2 ? 0x2 : 0x1), y = 0x1e0 * (t.scale === 0x2 ? 0x2 : 0x1), self.postMessage({
          't': 'jobok'
        }), P === 'scout' && (await bq());
        return;
      }
      if (bx.cmd === 'task') {
        await bp(bx.task);
        return;
      }
    } catch (l0) {
      self.postMessage({
        't': 'error',
        'err': String(l0 && l0.message || l0),
        'stack': String(l0 && l0.stack || '').slice(0x0, 0x258)
      });
    }
  });
};
function ba(bY, bx) {
  var bX = new URL(bY, bx).href,
    by = globalThis.__drWarm;
  return (by ? by(bX) : Promise.resolve()).then(function () {
    return import(bX).catch(function (bh) {
      try {
        bh.reload = !0x0, bh.what = "the game code";
      } catch (bW) {}
      throw bh;
    });
  });
}