import { a as v, l as Z } from "./c-XSSGDLV7.js";
Z();
var y = null;
var d = null;
var Q = false;
var g = [];
var l = {
  fight: null,
  seed: 0,
  frames: 0
};
function C() {
  let t8 = new Proxy({}, {
    get(tt, tN) {
      if (tN === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (tN === "measureText") {
        return () => ({
          width: 0
        });
      } else if (tN === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (tN === "createPattern" || tN === "createLinearGradient") {
        return () => null;
      } else {
        return () => {};
      }
    },
    set() {
      return true;
    }
  });
  let t9 = () => t8;
  self.window = self;
  self.document = {
    createElement: () => ({
      getContext: t9,
      width: 0,
      height: 0,
      style: {},
      addEventListener() {},
      removeEventListener() {},
      remove() {}
    }),
    getElementById: () => ({
      getContext: t9,
      focus() {},
      appendChild() {},
      addEventListener() {}
    }),
    addEventListener() {},
    removeEventListener() {},
    body: {
      appendChild() {}
    }
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
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {}
  };
  self.requestAnimationFrame = () => 0;
}
v(C, "installShims");
async function o(t8) {
  C();
  let t9 = await t7("./gm-PYDVYOKK.js", import.meta.url);
  for (let [tr, tH] of Object.entries(t8.sprites)) {
    t9.Sprites[tr] = {
      name: tr,
      ...tH,
      img: {
        length: tH.frames
      }
    };
  }
  for (let [ty, td] of Object.entries(t8.fonts)) {
    t9.Fonts[ty] = {
      ...td,
      img: {
        width: 256,
        height: 256
      }
    };
  }
  let tt = await t7("./globals-MPUN2SAS.js", import.meta.url);
  let tN = await t7("./fights-HQTTX36Z.js", import.meta.url);
  let tU = await t7("./c-YT77N4SA.js", import.meta.url);
  let tA = await t7("./battle-RLFUO4GL.js", import.meta.url);
  let tF = await t7("./collisions-UIDYFKAA.js", import.meta.url);
  let tK = await t7("./snapshot-CAEOQMAP.js", import.meta.url);
  let te = await t7("./autoplay-O3TIY36B.js", import.meta.url);
  let th = await t7("./beam-YWGMUUO4.js", import.meta.url);
  let tm = await t7("./fightsetup-I5T6ABVB.js", import.meta.url);
  let ta = await t7("./ut_karma-75657F2D.js", import.meta.url);
  let tw = await t7("./oracle-NLJI23NZ.js", import.meta.url);
  let tk = await t7("./wiresnap-PM3CJIH3.js", import.meta.url);
  let tv = null;
  try {
    tv = (await t7("./c-HBH3PFKS.js", import.meta.url)).forceAttackTick;
  } catch {}
  let tZ = null;
  try {
    tZ = (await t7("./c-DWWTCNBY.js", import.meta.url)).guardTick;
  } catch {}
  let tp = null;
  let tP = null;
  try {
    let tR = await t7("./c-2JR5Z7KW.js", import.meta.url);
    tp = tR.pinAttack;
    tP = tR.findAttack;
  } catch {}
  y = {
    gm: t9,
    ...tt,
    ...tN,
    ...tU,
    ...tA,
    COLLISIONS: tF.COLLISIONS,
    ...tK,
    AP: te,
    ...th,
    ...tm,
    karmaStep: ta.karmaStep,
    oraclePlan: tw.oraclePlan,
    oracleStats: tw.oracleStats,
    oracleCovers: tw.oracleCovers,
    applyWorld: tk.applyWorld,
    loadClassModules: tk.loadClassModules,
    forceAttackTick: tv,
    pinAttack: tp,
    findAttack: tP,
    guardTick: tZ,
    deepDump: tk.deepDump
  };
  y.GFX = tK.nullGfx(t9.Gfx);
  return {
    obs: true
  };
}
v(o, "boot");
function I() {
  let {
    gm: t8,
    G: t9
  } = y;
  let tt = t8.World.first("obj_heart") || t8.World.first("obj_purpleheart");
  let tN = typeof t9.hp == "number" ? t9.hp : Array.isArray(t9.hp) ? (t9.hp[1] || 0) + (t9.hp[2] || 0) + (t9.hp[3] || 0) : 0;
  return (tt ? (tt.x | 0) + "," + (tt.y | 0) : "none") + "|" + tN + "|" + t8.World.list.length + "|" + (t9.mnfight | 0);
}
v(I, "signature");
var u = {};
function b(t8) {
  if (t8) {
    u = t8;
    y.G.godmode = !!t8.god;
    y.G.forceAttack = t8.force;
  }
}
v(b, "applyEnv");
function S() {
  let {
    G: t8,
    gm: t9
  } = y;
  if (u.pin && y.pinAttack) {
    let tt = y.FIGHTS.find(tU => tU.id === l.fight);
    let tN = tt ? y.findAttack(tt, u.pin) : null;
    if (tN) {
      try {
        y.pinAttack(t9.World, tN);
      } catch {}
    }
  }
  if (u.refill) {
    if (typeof t8.hp == "number") {
      t8.hp = t8.maxhp || 20;
    } else if (t8.hp && t8.maxhp) {
      let tU = Array.isArray(t8.char) ? t8.char : [1, 2, 3];
      for (let tA of tU) {
        if (tA && t8.maxhp[tA]) {
          t8.hp[tA] = t8.maxhp[tA];
        }
      }
    }
    if (typeof t8.karma == "number") {
      t8.karma = 0;
    }
  }
}
v(S, "envBefore");
function Y() {
  let {
    G: t8
  } = y;
  if (u.skip) {
    try {
      y.skipDialogue();
    } catch {}
    if (Array.isArray(t8.monsterhp) && Array.isArray(t8.monstermaxhp)) {
      for (let t9 = 0; t9 < 3; t9++) {
        if ((!t8.monster || t8.monster[t9]) && t8.monstermaxhp[t9] > 0) {
          t8.monsterhp[t9] = t8.monstermaxhp[t9];
        }
      }
    }
  }
}
v(Y, "envAfter");
var n = ["b1", "b2", "b3", "left", "right", "up", "down"];
function s(t8) {
  let t9 = y.gm.Input;
  return () => {
    for (let tt = 0; tt < n.length; tt++) {
      let tN = n[tt];
      t9.held[tN] = !!(t8 & 1 << tt);
      t9.pressed[tN] = !!(t8 & 1 << tt + 8);
      t9.released[tN] = !!(t8 & 1 << tt + 16);
    }
  };
}
v(s, "manualInput");
function z(t8) {
  let t9 = 0;
  for (let tt = 0; tt < n.length; tt++) {
    let tN = n[tt];
    if (t8.held[tN]) {
      t9 |= 1 << tt;
    }
    if (t8.pressed[tN]) {
      t9 |= 1 << tt + 8;
    }
    if (t8.released[tN]) {
      t9 |= 1 << tt + 16;
    }
  }
  return t9 >>> 0;
}
v(z, "inputBits");
function J(t8, t9, tt) {
  let {
    gm: tN,
    G: tU,
    AP: tA
  } = y;
  let tF = tN.Input;
  let tK = y.snapshot();
  let te = tA.saveAutoplayState();
  let th = tF.synthetic;
  let tm = {
    ...u
  };
  let ta = [];
  let tw = null;
  if (tA.setRolloutBudget) {
    tA.setRolloutBudget(tt || 0);
  }
  try {
    for (let tk = 0; tk < t8; tk++) {
      let tv = tN.World.first("obj_heart") || tN.World.first("obj_purpleheart");
      if (!tv || !t9 && y.oracleCovers(tv)) {
        break;
      }
      let tZ = tU.mnfight;
      S();
      tA.autoplayUI();
      tA.autoplayStep(null, tv);
      let tp = 0;
      let tP = tF.synthetic;
      tF.synthetic = tr => {
        if (tP) {
          tP(tr);
        }
        tp = z(tF);
      };
      try {
        f();
      } finally {
        tF.synthetic = tP;
      }
      Y();
      ta.push(tp);
      if (tU.battleover || tU.mnfight !== tZ) {
        break;
      }
    }
    if (ta.length) {
      tw = tA.saveAutoplayState();
    }
  } finally {
    y.restore(tK);
    tA.loadAutoplayState(te);
    tF.synthetic = th;
    u = tm;
    if (tA.setRolloutBudget) {
      tA.setRolloutBudget(0);
    }
  }
  return {
    bits: ta,
    ap: tw
  };
}
v(J, "handPlan");
function V(t8) {
  let {
    gm: t9,
    G: tt,
    COLLISIONS: tN,
    GFX: tU,
    AP: tA
  } = y;
  let tF = t9.Input;
  b(t8.env);
  S();
  if (t8.w !== undefined) {
    tF.synthetic = s(t8.w >>> 0);
    try {
      f();
    } finally {
      tF.synthetic = null;
    }
    if (t8.ap) {
      tA.loadAutoplayState(t8.ap);
    }
    Y();
    if (Q) {
      g.push({
        f: l.frames + 1,
        d: y.deepDump()
      });
    }
    return;
  }
  let tK = t9.World.first("obj_heart") || t9.World.first("obj_purpleheart");
  tA.autoplayUI();
  if (t8.a) {
    tA.applyPlanKeys(t8.k, t8.e);
  } else {
    tA.autoplayStep(null, tK || null);
  }
  f();
  Y();
  if (Q) {
    g.push({
      f: l.frames + 1,
      d: y.deepDump()
    });
  }
}
v(V, "stepMirror");
function f() {
  let {
    gm: t8,
    G: t9,
    COLLISIONS: tt,
    GFX: tN
  } = y;
  if (t8.Sandbox.freetp) {
    t9.tension = t9.maxtension;
  }
  try {
    y.karmaStep();
  } catch {}
  if (t9.godmode) {
    if (typeof t9.hp == "number") {
      t9.hp = t9.maxhp || 20;
    } else {
      for (let tU = 1; tU <= 3; tU++) {
        if (t9.maxhp[tU]) {
          t9.hp[tU] = t9.maxhp[tU];
        }
      }
    }
    t9.karma = 0;
  }
  t9.pressedDebugKeys = null;
  if (y.forceAttackTick) {
    try {
      y.forceAttackTick();
    } catch {}
  }
  try {
    t8.runFrame(tt, tN);
  } catch {}
  if (y.guardTick && l.f) {
    try {
      y.guardTick(l.f, {
        ut: !!y.isUndertale(l.f),
        strict: !!l.cfg && !!l.cfg.guardstrict
      });
    } catch {}
  }
}
v(f, "frameCore");
async function t0(t8) {
  let t9 = y.FIGHTS.find(tN => tN.id === t8);
  if (t9 && !y.fightCodeReady(t9)) {
    try {
      await y.loadFightCode(t9);
    } catch {}
  }
  if (t9 && t9.mod) {
    try {
      await (await t7("./c-AFPIIZ7N.js", import.meta.url)).loadMod(t9.mod);
    } catch {}
    return;
  }
  let tt = t9 && (t9.pack || t9.chapter);
  if (!!t9 && !!t9.pack || typeof tt == "number" && !(tt < 4)) {
    try {
      await (await t7("./chapterpack-IHAAU3F2.js", import.meta.url)).loadChapterPack(tt);
    } catch {}
  }
}
v(t0, "packReady");
function t1(t8, t9, tt) {
  let {
    G: tN,
    FIGHTS: tU,
    buildFight: tA,
    isUndertale: tF,
    startUndertaleFight: tK,
    applyEncounter: te,
    startDeltaruneController: th
  } = y;
  let tm = tU.find(ta => ta.id === t8);
  if (tm) {
    tA(tm, {
      seed: t9,
      cfg: tt || {}
    });
    y.AP.resetAutoplayState();
    if (tF(tm)) {
      tK(tm);
    } else {
      te(tm);
      th(tm, tt || {});
    }
    tN.autoplay = true;
    u = {};
    l = {
      fight: t8,
      seed: t9,
      frames: 0,
      cfg: tt || {},
      epoch: 0,
      f: tm
    };
    return true;
  } else {
    return false;
  }
}
v(t1, "rebuild");
function t2(t8, t9, tt, tN) {
  if (!t1(t8, t9, tt)) {
    return "no fight " + t8;
  }
  let tU = y.applyWorld(tN);
  return tU || (tN.ap ? y.AP.loadAutoplayState(tN.ap) : y.AP.resetAutoplayState(), null);
}
v(t2, "rebuildAt");
var t3 = null;
function t4() {
  let {
    gm: t8
  } = y;
  t3 = {
    epoch: l.epoch,
    fight: l.fight,
    frames: l.frames,
    snap: y.snapshot(),
    ap: y.AP.saveAutoplayState(),
    env: {
      ...u
    },
    music: t8.music_name ? {
      name: t8.music_name(),
      pos: t8.music_position()
    } : null
  };
}
v(t4, "takeCheckpoint");
function t5() {
  let {
    gm: t8
  } = y;
  y.restore(t3.snap);
  y.AP.loadAutoplayState(t3.ap);
  u = {
    ...t3.env
  };
  if (t3.music && t3.music.name && t8.music_track) {
    let t9 = t8.music_track(t3.music.name);
    if (t9) {
      t8.audio_sound_set_track_position(t9, t3.music.pos);
    }
  }
  l.frames = t3.frames;
}
v(t5, "restoreCheckpoint");
function t6(t8, t9, tt, tN, tU, tA, tF) {
  if (l.fight !== t8 || l.seed !== t9 || l.epoch !== tU) {
    return false;
  }
  if (tF) {
    if (!t3 || t3.epoch !== tU || t3.fight !== t8 || t3.frames !== tt) {
      return false;
    }
    t5();
  }
  if (l.frames !== tt) {
    return false;
  }
  if (tA === l.frames) {
    t4();
  }
  for (let tK of tN) {
    V(tK);
    l.frames++;
    if (tA === l.frames) {
      t4();
    }
  }
  return true;
}
v(t6, "advance");
self.onmessage = async t8 => {
  let t9 = t8.data;
  let tt = tN => self.postMessage(Object.assign(tN, {
    epoch: t9.epoch,
    rev: t9.rev,
    spec: !!t9.spec,
    specId: t9.specId,
    hand: !!t9.hand
  }, t9.cmd === "advance" ? {
    t: "adv"
  } : null));
  try {
    if (t9.cmd === "boot") {
      try {
        await o(t9.assets);
      } catch (tN) {
        self.postMessage({
          t: "booterr",
          id: t9.id,
          err: String(tN && tN.message || tN)
        });
        return;
      }
      self.postMessage({
        t: "ready",
        id: t9.id
      });
      d = y.loadClassModules().catch(() => {});
      return;
    }
    if (t9.cmd === "plan" || t9.cmd === "advance") {
      let tU = performance.now();
      if (!y) {
        tt({
          t: "plan",
          id: t9.id,
          epoch: t9.epoch,
          line: null,
          err: "not booted"
        });
        return;
      }
      if (t9.full) {
        await t0(t9.fight);
        if (t9.wire) {
          await y.loadClassModules().catch(() => {});
          let tK = t2(t9.fight, t9.seed, t9.cfg, t9.wire);
          if (tK) {
            l = {
              fight: null
            };
            tt({
              t: "plan",
              id: t9.id,
              epoch: t9.epoch,
              err: "rebuild at jump: " + tK,
              wireFail: true
            });
            return;
          }
        } else {
          t1(t9.fight, t9.seed, t9.cfg);
        }
        l.epoch = t9.epoch;
      }
      Q = !!t9.deep;
      g = [];
      let tA = performance.now();
      if (!t6(t9.fight, t9.seed, t9.full ? 0 : t9.base, t9.delta || [], t9.epoch, t9.safe, !t9.full && t9.rewind)) {
        tt({
          t: "plan",
          id: t9.id,
          epoch: t9.epoch,
          rev: t9.rev,
          need: "full",
          have: l.frames
        });
        return;
      }
      if (t9.cmd === "advance") {
        tt({
          id: t9.id,
          at: l.frames,
          safe: t3 && t3.epoch === t9.epoch ? t3.frames : -1,
          sig: I(),
          ms: performance.now() - tU
        });
        return;
      }
      b(t9.env);
      if (t9.opts && t9.opts.algo === "hand") {
        let te = performance.now();
        let {
          bits: th,
          ap: tm
        } = J(t9.opts.n || 12, !!t9.opts.ignoreCover, Number(t9.opts.budget) || 0);
        tt({
          t: "plan",
          id: t9.id,
          algo: "hand",
          at: l.frames,
          safe: t3 && t3.epoch === t9.epoch ? t3.frames : -1,
          sig: I(),
          bits: th,
          ap: tm,
          ms: performance.now() - tU,
          prof: {
            full: !!t9.full,
            dl: (t9.delta || []).length,
            adv: te - tA,
            orc: performance.now() - te,
            objs: y.gm.World.list.length
          }
        });
        return;
      }
      if (t9.opts && t9.opts.algo === "oracle") {
        let ta = I();
        let tw = performance.now();
        let tk = y.oracleStats.frames;
        let tv = y.oracleStats.plans;
        let tZ = y.oraclePlan(t9.opts);
        let tp = {
          full: !!t9.full,
          dl: (t9.delta || []).length,
          adv: tw - tA,
          pre: tA - tU,
          orc: performance.now() - tw,
          sim: y.oracleStats.frames - tk,
          once: y.oracleStats.plans - tv,
          objs: y.gm.World.list.length
        };
        let tP = I();
        if (tP !== ta) {
          tt({
            t: "plan",
            id: t9.id,
            epoch: t9.epoch,
            rev: t9.rev,
            err: "plan changed the world: " + ta + " -> " + tP
          });
          l = {
            fight: null
          };
          return;
        }
        tt({
          t: "plan",
          id: t9.id,
          epoch: t9.epoch,
          rev: t9.rev,
          safe: t3 && t3.epoch === t9.epoch ? t3.frames : -1,
          at: l.frames,
          sig: I(),
          algo: "oracle",
          deeps: Q ? g : undefined,
          keys: tZ ? tZ.keys : null,
          lost: tZ ? tZ.hits : 0,
          ms: performance.now() - tU,
          prof: tp
        });
        return;
      }
      let tF = y.beamBest(t9.opts);
      self.postMessage({
        t: "plan",
        id: t9.id,
        epoch: t9.epoch,
        rev: t9.rev,
        safe: t3 && t3.epoch === t9.epoch ? t3.frames : -1,
        at: l.frames,
        sig: I(),
        names: t9.wantNames ? y.gm.World.list.filter(tr => !tr.destroyed).map(tr => tr.constructor.name).sort() : undefined,
        line: tF ? tF.line : null,
        lost: tF ? tF.lost : 0,
        ms: performance.now() - tU
      });
      return;
    }
  } catch (tr) {
    tt({
      t: "plan",
      id: t9.id,
      epoch: t9.epoch,
      line: null,
      err: String(tr && tr.message || tr)
    });
  }
};
function t7(t8, t9) {
  var tt = new URL(t8, t9).href;
  var tN = globalThis.__drWarm;
  return (tN ? tN(tt) : Promise.resolve()).then(function () {
    return import(tt).catch(function (tU) {
      try {
        tU.reload = true;
        tU.what = "the game code";
      } catch (tA) {}
      throw tU;
    });
  });
}
