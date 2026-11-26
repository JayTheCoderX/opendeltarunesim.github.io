import { a as e, l as d } from "./c-XSSGDLV7.js";
d();
var O = null;
var P = "render";
var t = null;
var a = 640;
var y = 480;
var r = new Map();
var i = new Set();
var n = [];
var o = null;
var b0 = 0;
var b1 = null;
var b2 = null;
var b3 = false;
var b4 = null;
var b5 = (() => {
  let bY = new MessageChannel();
  let bx = [];
  bY.port1.onmessage = () => {
    let bX = bx.shift();
    if (bX) {
      bX();
    }
  };
  return () => new Promise(bX => {
    bx.push(bX);
    bY.port2.postMessage(0);
  });
})();
var b6 = e(() => performance.now(), "now");
function b7() {
  let bY = () => ({
    style: {
      setProperty() {}
    },
    addEventListener() {},
    removeEventListener() {},
    remove() {},
    appendChild() {},
    setAttribute() {},
    focus() {},
    blur() {},
    classList: {
      add() {},
      remove() {},
      toggle() {}
    }
  });
  let bx = new Proxy({}, {
    get(by, bh) {
      if (bh === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (bh === "measureText") {
        return () => ({
          width: 0
        });
      } else if (bh === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (bh === "createImageData") {
        return (bW, br) => ({
          data: new Uint8ClampedArray(4),
          width: bW | 0,
          height: br | 0
        });
      } else if (bh === "createPattern" || bh === "createLinearGradient") {
        return () => null;
      } else {
        return () => {};
      }
    },
    set() {
      return true;
    }
  });
  b4 = bx;
  let bX = P === "scout" ? () => ({
    getContext: () => bx,
    width: 0,
    height: 0,
    style: {},
    addEventListener() {},
    removeEventListener() {},
    remove() {}
  }) : () => {
    let by = new OffscreenCanvas(1, 1);
    by.style = {};
    by.addEventListener = () => {};
    by.removeEventListener = () => {};
    by.remove = () => {};
    return by;
  };
  self.window = self;
  self.document = {
    createElement: by => by === "canvas" ? bX() : bY(),
    getElementById: () => ({
      getContext: () => bX().getContext("2d"),
      focus() {},
      appendChild() {},
      addEventListener() {}
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    removeEventListener() {},
    body: bY(),
    head: bY(),
    documentElement: bY()
  };
  self.Image = class {};
  self.Audio = class {
    play() {
      return Promise.resolve();
    }
    pause() {}
    cloneNode() {
      return this;
    }
    load() {}
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {},
    clear() {}
  };
  self.requestAnimationFrame = () => 0;
}
e(b7, "installShims");
function b8(bY, bx, bX) {
  let by = bY.atlas && bY.atlas[String(bx)];
  return [Math.max(bY.w | 0, by ? by[bX ? 3 : 2] | 0 : 0), Math.max(bY.h | 0, by ? by[bX ? 4 : 3] | 0 : 0)];
}
e(b8, "frameSize");
function b9(bY, bx, bX) {
  let by = bx.frames | 0;
  let bh = [];
  let bW = br => {
    if (bh[br]) {
      return bh[br];
    }
    let [bR, bi] = b8(bx, br, bX);
    if (P === "scout") {
      return bh[br] = {
        width: bR,
        height: bi,
        getContext: () => b4
      };
    }
    let bw = new OffscreenCanvas(bR, bi);
    if (bR && bi) {
      bw.getContext("2d");
    }
    return bh[br] = bw;
  };
  return new Proxy([], {
    get(br, bR) {
      if (bR === "length") {
        return by;
      }
      if (typeof bR == "string" && bR.length < 6 && bR.charCodeAt(0) >= 48 && bR.charCodeAt(0) <= 57) {
        let bi = +bR;
        if (!(bi >= 0) || !(bi < by)) {
          return;
        }
        let bw = r.get(bY);
        if (bw && bi in bw) {
          bh[bi] &&= null;
          return bw[bi] || undefined;
        }
        let bn = bY + "" + bi;
        if (P === "scout") {
          if (!i.has(bn)) {
            i.add(bn);
            n.push(bn);
          }
        } else if (o) {
          o.add(bn);
        }
        return bW(bi);
      }
      return Reflect.get(br, bR);
    },
    has(br, bR) {
      if (typeof bR == "string" && /^\d+$/.test(bR)) {
        return Number(bR) < by;
      } else {
        return Reflect.has(br, bR);
      }
    }
  });
}
e(b9, "lazyImg");
function bb(bY, bx) {
  let bX = O.gm.Sprites;
  for (let by of Object.keys(bX)) {
    if (bY && !bY(by)) {
      continue;
    }
    let bh = Object.getOwnPropertyDescriptor(bX, by);
    let bW = bh && bh.value;
    if (bW && typeof bW == "object" && !bW._rv) {
      bW.img = b9(by, bW, bx);
      bW._rv = 1;
    }
  }
}
e(bb, "proxySprites");
async function bl(bY) {
  P = bY.role === "scout" ? "scout" : "render";
  b7();
  let bx = b6();
  let bX = {};
  let by = await ba("./gm-PYDVYOKK.js", import.meta.url);
  bX.gm = Math.round(b6() - bx);
  let bh = new URL(bY.assets, self.location.href);
  let bW = await (await fetch(new URL("data.json", bh))).json();
  bX.data = Math.round(b6() - bx);
  for (let [bo, l0] of Object.entries(bW.sprites)) {
    by.Sprites[bo] = {
      name: bo,
      ...l0,
      img: b9(bo, l0, false),
      _rv: 1
    };
  }
  let br = [];
  for (let [l1, l2] of Object.entries(bW.fonts)) {
    if (P === "scout") {
      by.Fonts[l1] = {
        ...l2,
        img: {
          width: 256,
          height: 256
        }
      };
      continue;
    }
    br.push((async () => {
      let l3 = null;
      try {
        let l4 = await fetch(new URL(l1 + ".png", bh));
        if (l4.ok) {
          l3 = await createImageBitmap(await l4.blob());
        }
      } catch {
        l3 = null;
      }
      by.Fonts[l1] = {
        img: l3 || {
          width: 0,
          height: 0
        },
        glyphs: l2.glyphs,
        size: l2.size
      };
    })());
  }
  await Promise.all(br);
  bX.fonts = Math.round(b6() - bx);
  let bR = await ba("./globals-MPUN2SAS.js", import.meta.url);
  let bi = await ba("./fights-HQTTX36Z.js", import.meta.url);
  await ba("./battle-RLFUO4GL.js", import.meta.url);
  await ba("./collisions-UIDYFKAA.js", import.meta.url);
  let bw = await ba("./fightsetup-I5T6ABVB.js", import.meta.url);
  let bn = await ba("./c-QMONFYDC.js", import.meta.url);
  try {
    await ba("./c-DWWTCNBY.js", import.meta.url);
  } catch {}
  O = {
    gm: by,
    G: bR.G,
    FIGHTS: bi.FIGHTS,
    setup: bw,
    RC: bn
  };
  bX.engine = Math.round(b6() - bx);
  return {
    webcodecs: typeof VideoEncoder == "function" && typeof VideoFrame == "function",
    offscreen: typeof OffscreenCanvas == "function",
    boot: bX
  };
}
e(bl, "boot");
async function bF(bY) {
  try {
    await (await ba("./c-YT77N4SA.js", import.meta.url)).loadFightCode(bY);
  } catch {}
  let bx = bY && (bY.pack || bY.chapter);
  if (!!bY && !!bY.pack || typeof bx == "number" && !(bx < 4)) {
    try {
      await (await ba("./chapterpack-IHAAU3F2.js", import.meta.url)).loadChapterPack(bx);
    } catch {}
    bb(bX => bX.endsWith("@ch" + bx), true);
  }
}
e(bF, "packFor");
var bj = null;
var bH = -1;
var bf = null;
var bs = null;
var bB = null;
var bD = null;
var bZ = null;
var bM = null;
var bJ = {
  fade: 0
};
var bm = 0;
var bS = 0;
function bV() {
  let {
    gm: bY,
    RC: bx
  } = O;
  Object.assign(bY.Sandbox, t.sandbox || {});
  bY.Input.synthetic = null;
  bf = bx.stage(bj.fx, t.d, t.cfg);
  bD = null;
  bJ.fade = 0;
  bH = 0;
}
e(bV, "rebuild");
function bv(bY, bx) {
  let bX = O.RC.stepFrame(bj, t.bits, bY, bx);
  if (bX) {
    bS++;
    if (bX < 0 && !bm) {
      bm = bY;
    }
  }
  bH = bY;
}
e(bv, "step");
async function bL(bY, bx) {
  let {
    RC: bX
  } = O;
  if (bH < 0 || bH > bY) {
    bV();
  }
  if (bH < bY) {
    O.gm.setCurG(bf);
    bD = null;
  }
  let by = 0;
  while (bH < bY) {
    let bh = bH + 1;
    bv(bh, bf);
    if (bh >= t.from && (bh - t.from) % t.stride === 0) {
      bX.fadeStep(bJ);
    }
    if (++by % 64 === 0 && (bx && bx(bh), await b5(), b3)) {
      return false;
    }
  }
  return true;
}
e(bL, "seekTo");
var bd = [];
var bO = 0;
var bE = 0;
var bk = class l5 {
  constructor(bY, bx, bX) {
    this._id = bY;
    this._vol = bx;
    this._rate = bX;
    this.paused = true;
    this.ended = true;
    this.loop = false;
    this.duration = 0;
  }
  get volume() {
    return this._vol;
  }
  set volume(bY) {
    let bx = Number(bY);
    if (!!Number.isFinite(bx) && bx !== this._vol) {
      this._vol = bx;
      bd.push(["v", bO, this._id, bx]);
    }
  }
  get playbackRate() {
    return this._rate;
  }
  set playbackRate(bY) {
    let bx = Number(bY);
    if (!!Number.isFinite(bx) && bx !== this._rate) {
      this._rate = bx;
      bd.push(["r", bO, this._id, bx]);
    }
  }
  get currentTime() {
    return 0;
  }
  set currentTime(bY) {
    let bx = Number(bY);
    if (Number.isFinite(bx)) {
      bd.push(["t", bO, this._id, bx]);
    }
  }
  pause() {
    bd.push(["s", bO, this._id]);
  }
  play() {
    bd.push(["u", bO, this._id]);
    return Promise.resolve();
  }
};
e(bk, "TapVoice");
var bU = bk;
function bu() {
  let bY = O.gm;
  bY.AudioTap.sfx = (bx, bX) => {
    let by = bX && typeof bX == "object" ? bX : {};
    let bh = Math.max(0, Math.min(1, (by.volume ?? 1) * (bY.Sandbox.sfxvol ?? 1)));
    let bW = ++bE;
    bd.push(["p", bO, bW, String(bx), bY.CurrentChapter, bh, by.pitch || 1, !!by.loop]);
    return new bU(bW, bh, by.pitch || 1);
  };
  bY.AudioTap.stop = bx => {
    if (bx == null) {
      bd.push(["a", bO]);
    } else {
      bd.push(["n", bO, String(bx), bY.CurrentChapter]);
    }
  };
}
e(bu, "tapOn");
var bG = new WeakMap();
var bK = 0;
var bP = new Map();
function bz(bY) {
  let bx = O.gm;
  let bX = new Set();
  for (let by of bx.music_stems()) {
    let bh = bx.music_track(by.name);
    if (!bh) {
      continue;
    }
    let bW = bG.get(bh);
    if (!bW) {
      bW = ++bK;
      bG.set(bh, bW);
    }
    bX.add(bW);
    let br = Number.isFinite(bh._clock) ? bh._clock : bh.currentTime || 0;
    let bR = {
      clock: br,
      vol: bh.volume,
      rate: bh.playbackRate || 1,
      paused: !!bh.paused || !!bh.ended
    };
    let bi = bP.get(bW);
    let bw = bi ? bi.clock + (bi.paused ? 0 : 0.03333333333333333) : null;
    if (!bi || Math.abs(bw - br) > 0.000001 || bi.vol !== bR.vol || bi.rate !== bR.rate || bi.paused !== bR.paused) {
      bd.push(["m", bY, bW, bh.name, bx.CurrentChapter, br, bR.vol, bR.rate, bR.paused, !!bh.loop]);
    }
    bP.set(bW, bR);
  }
  for (let bn of bP.keys()) {
    if (!bX.has(bn)) {
      bd.push(["x", bY, bn]);
      bP.delete(bn);
    }
  }
}
e(bz, "sampleMusic");
async function bq() {
  let {
    gm: bY,
    RC: bx
  } = O;
  bu();
  bV();
  let bX = t.to;
  let by = b6();
  let bh = null;
  let bW = 0;
  let br = 0;
  let bR = (bi, bw) => {
    let bn = n.splice(0);
    let bo = bd;
    bd = [];
    self.postMessage({
      t: "scout",
      upto: bi,
      keys: bn,
      au: bo,
      drift: bm,
      checks: bS,
      ms: b6() - by,
      final: !!bw
    });
  };
  while (bH < bX) {
    let bi = bH + 1;
    bO = bi;
    if (bi >= t.from && !bh) {
      bh = bx.takeOver(b4);
    }
    bv(bi, bh || bf);
    if (bh) {
      try {
        bY.presentFrame(bh, 1);
      } catch {}
    }
    bz(bi);
    br++;
    if (bi < t.from - 1) {
      for (let bw of n) {
        i.delete(bw);
      }
      n.length = 0;
    }
    if (n.length || bi - bW >= 30) {
      bR(bi);
      bW = bi;
    }
    if (br % 32 === 0 && (await b5(), b3)) {
      return;
    }
  }
  bR(bX, true);
}
e(bq, "runScout");
var bQ = null;
var bt = null;
var bI = [];
var bC = [];
var bg = {
  step: 0,
  present: 0,
  frame: 0,
  encode: 0,
  wait: 0
};
function bc() {
  bt = null;
  let bY = new VideoEncoder({
    output: bx => {
      let bX = new Uint8Array(bx.byteLength);
      bx.copyTo(bX);
      bI.push([Math.round(bx.timestamp * 30 / 1000000) + t.from, bx.type === "key" ? 1 : 0, bX]);
      bC.push(bX.buffer);
    },
    error: bx => {
      bt = bx && bx.message || String(bx);
    }
  });
  bY.configure(t.codec);
  return bY;
}
e(bc, "newEncoder");
function bT(bY) {
  if (!bI.length && !bY) {
    return;
  }
  let bx = bI;
  let bX = bC;
  bI = [];
  bC = [];
  self.postMessage(Object.assign({
    t: "chunks",
    chunks: bx
  }, bY || null), bX);
}
e(bT, "flushOut");
async function bA(bY) {
  while (b0 < bY && !b3) {
    await new Promise(bx => {
      b1 = bx;
    });
  }
}
e(bA, "waitFrontier");
async function bp(bY) {
  let {
    gm: bx,
    RC: bX
  } = O;
  let by = bY.a;
  let bh = bY.b;
  if (b2 && b2.id !== bY.id) {
    b2 = null;
  }
  let bW = b6();
  let br = Math.max(0, by - 1 - (bH < 0 || bH > by - 1 ? 0 : bH));
  let bR = (l0, l1) => self.postMessage({
    t: "prog",
    id: bY.id,
    phase: l1,
    f: l0,
    a: by,
    b: bh,
    seekN: br,
    ms: b6() - bW
  });
  if (!(await bL(by - 1, l0 => bR(l0, "seek")))) {
    return;
  }
  let bi = b6();
  if (!bs) {
    bs = new OffscreenCanvas(a, y);
    bB = bs.getContext("2d");
    if (t.gif) {
      bZ = new OffscreenCanvas(320, 240);
      bM = bZ.getContext("2d", {
        willReadFrequently: true
      });
    }
  }
  if (bD) {
    bx.setCurG(bD);
  } else {
    bD = bX.takeOver(bB);
  }
  if (!t.gif && !bQ) {
    bQ = bc();
  }
  let bw = true;
  let bn = 0;
  let bo = [];
  for (let l0 = by; l0 <= bh && (!b2 || b2.id !== bY.id || !(bh = Math.max(l0 - 1, Math.min(bh, b2.b)), self.postMessage({
    t: "shrunk",
    id: bY.id,
    b: bh
  }), b2 = null, l0 > bh)); l0++) {
    await bA(l0);
    if (b3) {
      return;
    }
    o = new Set();
    let l1 = b6();
    bv(l0, bD);
    let l2 = b6();
    let l3 = (l0 - t.from) % t.stride === 0;
    if (l3) {
      bX.present(bB, bD, t.scale, bJ);
    }
    bg.step += l2 - l1;
    bg.present += b6() - l2;
    let l4 = o.size ? [...o] : null;
    o = null;
    if (l3) {
      if (l4) {
        bo.push(l0);
        self.postMessage({
          t: "hole",
          id: bY.id,
          f: l0,
          rest: bh,
          keys: l4
        });
        bh = l0 - 1;
        bH = -1;
        bD = null;
        break;
      }
      if (t.probe && t.probe.includes(l0)) {
        let l6 = bB.getImageData(0, 0, a, y).data;
        self.postMessage({
          t: "probe",
          f: l0,
          w: a,
          h: y,
          px: l6.buffer
        }, [l6.buffer]);
      }
      if (t.gif) {
        bM.imageSmoothingEnabled = false;
        bM.drawImage(bs, 0, 0, a, y, 0, 0, 320, 240);
        let l7 = bM.getImageData(0, 0, 320, 240).data;
        self.postMessage({
          t: "gif",
          f: l0,
          px: l7.buffer
        }, [l7.buffer]);
      } else {
        if (bt) {
          throw new Error(bt);
        }
        let l8 = l0 - t.from;
        let l9 = bw || l0 % 60 === 0;
        let lb = b6();
        let ll = new VideoFrame(bs, {
          timestamp: Math.round(l8 * 1000000 / 30),
          duration: Math.round(33333.333333333336)
        });
        let lF = b6();
        try {
          bQ.encode(ll, {
            keyFrame: l9
          });
        } finally {
          ll.close();
        }
        bw = false;
        let lj = b6();
        while (bQ.encodeQueueSize > 3 && !bt && !b3) {
          await new Promise(lH => {
            let lf = setTimeout(lH, 20);
            bQ.addEventListener("dequeue", () => {
              clearTimeout(lf);
              lH();
            }, {
              once: true
            });
          });
        }
        bg.frame += lF - lb;
        bg.encode += lj - lF;
        bg.wait += b6() - lj;
      }
      bn++;
      if (bn % 8 === 0 && (bT(), bR(l0, "draw"), await b5(), b3)) {
        return;
      }
    }
  }
  if (bQ && (await bQ.flush(), bt)) {
    throw new Error(bt);
  }
  if (bQ) {
    try {
      bQ.close();
    } catch {}
    bQ = null;
  }
  bT({
    done: bY.id,
    a: by,
    b: bh,
    at: bH,
    holes: bo,
    drift: bm,
    checks: bS,
    msSeek: bi - bW,
    msDraw: b6() - bi,
    seekN: br,
    drawn: bn,
    prof: {
      ...bg
    }
  });
}
e(bp, "runTask");
var bN = Promise.resolve();
self.onmessage = bY => {
  let bx = bY.data || {};
  if (bx.cmd === "sprites") {
    for (let [bX, by, bh] of bx.list) {
      let bW = r.get(bX);
      if (!bW) {
        r.set(bX, bW = []);
      }
      bW[by] = bh && typeof bh == "object" && !("close" in bh) && "w" in bh ? new OffscreenCanvas(Math.max(0, bh.w | 0), Math.max(0, bh.h | 0)) : bh || null;
    }
    for (let br of [bD, bf]) {
      if (br) {
        try {
          br.tintCache.clear();
          br.palCache.clear();
          br.palTables.clear();
          if (br.spriteTints) {
            br.spriteTints.clear();
          }
          if (br.tintBySize) {
            br.tintBySize.clear();
          }
        } catch {}
      }
    }
    return;
  }
  if (bx.cmd === "frontier") {
    b0 = Math.max(b0, bx.f | 0);
    let bR = b1;
    b1 = null;
    if (bR) {
      bR();
    }
    return;
  }
  if (bx.cmd === "shrink") {
    b2 = {
      id: bx.id,
      b: bx.b | 0
    };
    return;
  }
  if (bx.cmd === "cancel") {
    b3 = true;
    let bi = b1;
    b1 = null;
    if (bi) {
      bi();
    }
    return;
  }
  bN = bN.then(async () => {
    try {
      if (bx.cmd === "boot") {
        let bw = await bl(bx);
        self.postMessage({
          t: "ready",
          caps: bw,
          role: P
        });
        return;
      }
      if (bx.cmd === "job") {
        t = bx.job;
        let bn = O.FIGHTS.find(bo => bo && bo.id === t.d.fight);
        if (!bn || bn.mode) {
          self.postMessage({
            t: "nofight"
          });
          return;
        }
        await bF(bn);
        if (P === "render" && !t.gif) {
          let bo = false;
          try {
            bo = typeof VideoEncoder == "function" && !!(await VideoEncoder.isConfigSupported(t.codec)).supported;
          } catch {
            bo = false;
          }
          if (!bo) {
            self.postMessage({
              t: "nocodec"
            });
            return;
          }
        }
        bj = O.RC.prepare(t.d, bn);
        bH = -1;
        a = (t.scale === 2 ? 2 : 1) * 640;
        y = (t.scale === 2 ? 2 : 1) * 480;
        self.postMessage({
          t: "jobok"
        });
        if (P === "scout") {
          await bq();
        }
        return;
      }
      if (bx.cmd === "task") {
        await bp(bx.task);
        return;
      }
    } catch (l0) {
      self.postMessage({
        t: "error",
        err: String(l0 && l0.message || l0),
        stack: String(l0 && l0.stack || "").slice(0, 600)
      });
    }
  });
};
function ba(bY, bx) {
  var bX = new URL(bY, bx).href;
  var by = globalThis.__drWarm;
  return (by ? by(bX) : Promise.resolve()).then(function () {
    return import(bX).catch(function (bh) {
      try {
        bh.reload = true;
        bh.what = "the game code";
      } catch (bW) {}
      throw bh;
    });
  });
}
