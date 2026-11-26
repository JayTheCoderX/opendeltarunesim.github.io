const a = function () {
    let t8 = true;
    return function (t9, tt) {
      const tN = t8 ? function () {
        if (tt) {
          const tU = tt.apply(t9, arguments);
          return tt = null, tU;
        }
      } : function () {};
      return t8 = false, tN;
    };
  }(),
  w = a(this, function () {
    if (w.bind().toString().indexOf('\x0a') !== -0x1) return;
    return w.toString().search(".*").toString().constructor(w).search(".*");
  });
w();
import { a as v, l as Z } from './c-XSSGDLV7.js';
Z();
var y = null,
  d = null,
  Q = !0x1,
  g = [],
  l = {
    'fight': null,
    'seed': 0x0,
    'frames': 0x0
  };
function C() {
  let t8 = new Proxy({}, {
      'get'(tt, tN) {
        return tN === 'canvas' ? {
          'width': 0x280,
          'height': 0x1e0
        } : tN === 'measureText' ? () => ({
          'width': 0x0
        }) : tN === 'getImageData' ? () => ({
          'data': new Uint8ClampedArray(0x4)
        }) : tN === 'createPattern' || tN === 'createLinearGradient' ? () => null : () => {};
      },
      'set'() {
        return !0x0;
      }
    }),
    t9 = () => t8;
  self.window = self, self.document = {
    'createElement': () => ({
      'getContext': t9,
      'width': 0x0,
      'height': 0x0,
      'style': {},
      'addEventListener'() {},
      'removeEventListener'() {},
      'remove'() {}
    }),
    'getElementById': () => ({
      'getContext': t9,
      'focus'() {},
      'appendChild'() {},
      'addEventListener'() {}
    }),
    'addEventListener'() {},
    'removeEventListener'() {},
    'body': {
      'appendChild'() {}
    }
  }, self.Image = class {}, self.Audio = class {
    ["play"]() {
      return Promise.resolve();
    }
    ["pause"]() {}
    ["cloneNode"]() {
      return this;
    }
  }, self.localStorage = {
    'getItem': () => null,
    'setItem'() {},
    'removeItem'() {}
  }, self.requestAnimationFrame = () => 0x0;
}
v(C, 'installShims');
async function o(t8) {
  C();
  let t9 = await t7("./gm-PYDVYOKK.js", import.meta.url);
  for (let [tr, tH] of Object.entries(t8.sprites)) t9.Sprites[tr] = {
    'name': tr,
    ...tH,
    'img': {
      'length': tH.frames
    }
  };
  for (let [ty, td] of Object.entries(t8.fonts)) t9.Fonts[ty] = {
    ...td,
    'img': {
      'width': 0x100,
      'height': 0x100
    }
  };
  let tt = await t7("./globals-MPUN2SAS.js", import.meta.url),
    tN = await t7("./fights-HQTTX36Z.js", import.meta.url),
    tU = await t7("./c-YT77N4SA.js", import.meta.url),
    tA = await t7("./battle-RLFUO4GL.js", import.meta.url),
    tF = await t7("./collisions-UIDYFKAA.js", import.meta.url),
    tK = await t7("./snapshot-CAEOQMAP.js", import.meta.url),
    te = await t7("./autoplay-O3TIY36B.js", import.meta.url),
    th = await t7("./beam-YWGMUUO4.js", import.meta.url),
    tm = await t7("./fightsetup-I5T6ABVB.js", import.meta.url),
    ta = await t7("./ut_karma-75657F2D.js", import.meta.url),
    tw = await t7("./oracle-NLJI23NZ.js", import.meta.url),
    tk = await t7("./wiresnap-PM3CJIH3.js", import.meta.url),
    tv = null;
  try {
    tv = (await t7("./c-HBH3PFKS.js", import.meta.url)).forceAttackTick;
  } catch {}
  let tZ = null;
  try {
    tZ = (await t7("./c-DWWTCNBY.js", import.meta.url)).guardTick;
  } catch {}
  let tp = null,
    tP = null;
  try {
    let tR = await t7("./c-2JR5Z7KW.js", import.meta.url);
    tp = tR.pinAttack, tP = tR.findAttack;
  } catch {}
  return y = {
    'gm': t9,
    ...tt,
    ...tN,
    ...tU,
    ...tA,
    'COLLISIONS': tF.COLLISIONS,
    ...tK,
    'AP': te,
    ...th,
    ...tm,
    'karmaStep': ta.karmaStep,
    'oraclePlan': tw.oraclePlan,
    'oracleStats': tw.oracleStats,
    'oracleCovers': tw.oracleCovers,
    'applyWorld': tk.applyWorld,
    'loadClassModules': tk.loadClassModules,
    'forceAttackTick': tv,
    'pinAttack': tp,
    'findAttack': tP,
    'guardTick': tZ,
    'deepDump': tk.deepDump
  }, y.GFX = tK.nullGfx(t9.Gfx), {
    'obs': !0x0
  };
}
v(o, 'boot');
function I() {
  let {
      gm: t8,
      G: t9
    } = y,
    tt = t8.World.first('obj_heart') || t8.World.first('obj_purpleheart'),
    tN = typeof t9.hp == 'number' ? t9.hp : Array.isArray(t9.hp) ? (t9.hp[0x1] || 0x0) + (t9.hp[0x2] || 0x0) + (t9.hp[0x3] || 0x0) : 0x0;
  return (tt ? (tt.x | 0x0) + ',' + (tt.y | 0x0) : 'none') + '|' + tN + '|' + t8.World.list.length + '|' + (t9.mnfight | 0x0);
}
v(I, 'signature');
var u = {};
function b(t8) {
  t8 && (u = t8, y.G.godmode = !!t8.god, y.G.forceAttack = t8.force);
}
v(b, 'applyEnv');
function S() {
  let {
    G: t8,
    gm: t9
  } = y;
  if (u.pin && y.pinAttack) {
    let tt = y.FIGHTS.find(tU => tU.id === l.fight),
      tN = tt ? y.findAttack(tt, u.pin) : null;
    if (tN) try {
      y.pinAttack(t9.World, tN);
    } catch {}
  }
  if (u.refill) {
    if (typeof t8.hp == 'number') t8.hp = t8.maxhp || 0x14;else {
      if (t8.hp && t8.maxhp) {
        let tU = Array.isArray(t8.char) ? t8.char : [0x1, 0x2, 0x3];
        for (let tA of tU) tA && t8.maxhp[tA] && (t8.hp[tA] = t8.maxhp[tA]);
      }
    }
    typeof t8.karma == 'number' && (t8.karma = 0x0);
  }
}
v(S, 'envBefore');
function Y() {
  let {
    G: t8
  } = y;
  if (u.skip) {
    try {
      y.skipDialogue();
    } catch {}
    if (Array.isArray(t8.monsterhp) && Array.isArray(t8.monstermaxhp)) {
      for (let t9 = 0x0; t9 < 0x3; t9++) (!t8.monster || t8.monster[t9]) && t8.monstermaxhp[t9] > 0x0 && (t8.monsterhp[t9] = t8.monstermaxhp[t9]);
    }
  }
}
v(Y, 'envAfter');
var n = ['b1', 'b2', 'b3', 'left', 'right', 'up', 'down'];
function s(t8) {
  let t9 = y.gm.Input;
  return () => {
    for (let tt = 0x0; tt < n.length; tt++) {
      let tN = n[tt];
      t9.held[tN] = !!(t8 & 0x1 << tt), t9.pressed[tN] = !!(t8 & 0x1 << tt + 0x8), t9.released[tN] = !!(t8 & 0x1 << tt + 0x10);
    }
  };
}
v(s, 'manualInput');
function z(t8) {
  let t9 = 0x0;
  for (let tt = 0x0; tt < n.length; tt++) {
    let tN = n[tt];
    t8.held[tN] && (t9 |= 0x1 << tt), t8.pressed[tN] && (t9 |= 0x1 << tt + 0x8), t8.released[tN] && (t9 |= 0x1 << tt + 0x10);
  }
  return t9 >>> 0x0;
}
v(z, 'inputBits');
function J(t8, t9, tt) {
  let {
      gm: tN,
      G: tU,
      AP: tA
    } = y,
    tF = tN.Input,
    tK = y.snapshot(),
    te = tA.saveAutoplayState(),
    th = tF.synthetic,
    tm = {
      ...u
    },
    ta = [],
    tw = null;
  tA.setRolloutBudget && tA.setRolloutBudget(tt || 0x0);
  try {
    for (let tk = 0x0; tk < t8; tk++) {
      let tv = tN.World.first('obj_heart') || tN.World.first('obj_purpleheart');
      if (!tv || !t9 && y.oracleCovers(tv)) break;
      let tZ = tU.mnfight;
      S(), tA.autoplayUI(), tA.autoplayStep(null, tv);
      let tp = 0x0,
        tP = tF.synthetic;
      tF.synthetic = tr => {
        tP && tP(tr), tp = z(tF);
      };
      try {
        f();
      } finally {
        tF.synthetic = tP;
      }
      if (Y(), ta.push(tp), tU.battleover || tU.mnfight !== tZ) break;
    }
    ta.length && (tw = tA.saveAutoplayState());
  } finally {
    y.restore(tK), tA.loadAutoplayState(te), tF.synthetic = th, u = tm, tA.setRolloutBudget && tA.setRolloutBudget(0x0);
  }
  return {
    'bits': ta,
    'ap': tw
  };
}
v(J, 'handPlan');
function V(t8) {
  let {
      gm: t9,
      G: tt,
      COLLISIONS: tN,
      GFX: tU,
      AP: tA
    } = y,
    tF = t9.Input;
  if (b(t8.env), S(), t8.w !== void 0x0) {
    tF.synthetic = s(t8.w >>> 0x0);
    try {
      f();
    } finally {
      tF.synthetic = null;
    }
    t8.ap && tA.loadAutoplayState(t8.ap), Y(), Q && g.push({
      'f': l.frames + 0x1,
      'd': y.deepDump()
    });
    return;
  }
  let tK = t9.World.first('obj_heart') || t9.World.first('obj_purpleheart');
  tA.autoplayUI(), t8.a ? tA.applyPlanKeys(t8.k, t8.e) : tA.autoplayStep(null, tK || null), f(), Y(), Q && g.push({
    'f': l.frames + 0x1,
    'd': y.deepDump()
  });
}
v(V, 'stepMirror');
function f() {
  let {
    gm: t8,
    G: t9,
    COLLISIONS: tt,
    GFX: tN
  } = y;
  t8.Sandbox.freetp && (t9.tension = t9.maxtension);
  try {
    y.karmaStep();
  } catch {}
  if (t9.godmode) {
    if (typeof t9.hp == 'number') t9.hp = t9.maxhp || 0x14;else {
      for (let tU = 0x1; tU <= 0x3; tU++) t9.maxhp[tU] && (t9.hp[tU] = t9.maxhp[tU]);
    }
    t9.karma = 0x0;
  }
  if (t9.pressedDebugKeys = null, y.forceAttackTick) try {
    y.forceAttackTick();
  } catch {}
  try {
    t8.runFrame(tt, tN);
  } catch {}
  if (y.guardTick && l.f) try {
    y.guardTick(l.f, {
      'ut': !!y.isUndertale(l.f),
      'strict': !!(l.cfg && l.cfg.guardstrict)
    });
  } catch {}
}
v(f, 'frameCore');
async function t0(t8) {
  let t9 = y.FIGHTS.find(tN => tN.id === t8);
  if (t9 && !y.fightCodeReady(t9)) try {
    await y.loadFightCode(t9);
  } catch {}
  if (t9 && t9.mod) {
    try {
      await (await t7("./c-AFPIIZ7N.js", import.meta.url)).loadMod(t9.mod);
    } catch {}
    return;
  }
  let tt = t9 && (t9.pack || t9.chapter);
  if (!(!(t9 && t9.pack) && (typeof tt != 'number' || tt < 0x4))) try {
    await (await t7("./chapterpack-IHAAU3F2.js", import.meta.url)).loadChapterPack(tt);
  } catch {}
}
v(t0, 'packReady');
function t1(t8, t9, tt) {
  let {
      G: tN,
      FIGHTS: tU,
      buildFight: tA,
      isUndertale: tF,
      startUndertaleFight: tK,
      applyEncounter: te,
      startDeltaruneController: th
    } = y,
    tm = tU.find(ta => ta.id === t8);
  return tm ? (tA(tm, {
    'seed': t9,
    'cfg': tt || {}
  }), y.AP.resetAutoplayState(), tF(tm) ? tK(tm) : (te(tm), th(tm, tt || {})), tN.autoplay = !0x0, u = {}, l = {
    'fight': t8,
    'seed': t9,
    'frames': 0x0,
    'cfg': tt || {},
    'epoch': 0x0,
    'f': tm
  }, !0x0) : !0x1;
}
v(t1, 'rebuild');
function t2(t8, t9, tt, tN) {
  if (!t1(t8, t9, tt)) return "no fight " + t8;
  let tU = y.applyWorld(tN);
  return tU || (tN.ap ? y.AP.loadAutoplayState(tN.ap) : y.AP.resetAutoplayState(), null);
}
v(t2, 'rebuildAt');
var t3 = null;
function t4() {
  let {
    gm: t8
  } = y;
  t3 = {
    'epoch': l.epoch,
    'fight': l.fight,
    'frames': l.frames,
    'snap': y.snapshot(),
    'ap': y.AP.saveAutoplayState(),
    'env': {
      ...u
    },
    'music': t8.music_name ? {
      'name': t8.music_name(),
      'pos': t8.music_position()
    } : null
  };
}
v(t4, 'takeCheckpoint');
function t5() {
  let {
    gm: t8
  } = y;
  if (y.restore(t3.snap), y.AP.loadAutoplayState(t3.ap), u = {
    ...t3.env
  }, t3.music && t3.music.name && t8.music_track) {
    let t9 = t8.music_track(t3.music.name);
    t9 && t8.audio_sound_set_track_position(t9, t3.music.pos);
  }
  l.frames = t3.frames;
}
v(t5, 'restoreCheckpoint');
function t6(t8, t9, tt, tN, tU, tA, tF) {
  if (l.fight !== t8 || l.seed !== t9 || l.epoch !== tU) return !0x1;
  if (tF) {
    if (!t3 || t3.epoch !== tU || t3.fight !== t8 || t3.frames !== tt) return !0x1;
    t5();
  }
  if (l.frames !== tt) return !0x1;
  tA === l.frames && t4();
  for (let tK of tN) V(tK), l.frames++, tA === l.frames && t4();
  return !0x0;
}
v(t6, 'advance'), self.onmessage = async t8 => {
  let t9 = t8.data,
    tt = tN => self.postMessage(Object.assign(tN, {
      'epoch': t9.epoch,
      'rev': t9.rev,
      'spec': !!t9.spec,
      'specId': t9.specId,
      'hand': !!t9.hand
    }, t9.cmd === 'advance' ? {
      't': 'adv'
    } : null));
  try {
    if (t9.cmd === 'boot') {
      try {
        await o(t9.assets);
      } catch (tN) {
        self.postMessage({
          't': 'booterr',
          'id': t9.id,
          'err': String(tN && tN.message || tN)
        });
        return;
      }
      self.postMessage({
        't': 'ready',
        'id': t9.id
      }), d = y.loadClassModules().catch(() => {});
      return;
    }
    if (t9.cmd === 'plan' || t9.cmd === 'advance') {
      let tU = performance.now();
      if (!y) {
        tt({
          't': 'plan',
          'id': t9.id,
          'epoch': t9.epoch,
          'line': null,
          'err': "not booted"
        });
        return;
      }
      if (t9.full) {
        if (await t0(t9.fight), t9.wire) {
          await y.loadClassModules().catch(() => {});
          let tK = t2(t9.fight, t9.seed, t9.cfg, t9.wire);
          if (tK) {
            l = {
              'fight': null
            }, tt({
              't': 'plan',
              'id': t9.id,
              'epoch': t9.epoch,
              'err': "rebuild at jump: " + tK,
              'wireFail': !0x0
            });
            return;
          }
        } else t1(t9.fight, t9.seed, t9.cfg);
        l.epoch = t9.epoch;
      }
      Q = !!t9.deep, g = [];
      let tA = performance.now();
      if (!t6(t9.fight, t9.seed, t9.full ? 0x0 : t9.base, t9.delta || [], t9.epoch, t9.safe, !t9.full && t9.rewind)) {
        tt({
          't': 'plan',
          'id': t9.id,
          'epoch': t9.epoch,
          'rev': t9.rev,
          'need': 'full',
          'have': l.frames
        });
        return;
      }
      if (t9.cmd === 'advance') {
        tt({
          'id': t9.id,
          'at': l.frames,
          'safe': t3 && t3.epoch === t9.epoch ? t3.frames : -0x1,
          'sig': I(),
          'ms': performance.now() - tU
        });
        return;
      }
      if (b(t9.env), t9.opts && t9.opts.algo === 'hand') {
        let te = performance.now(),
          {
            bits: th,
            ap: tm
          } = J(t9.opts.n || 0xc, !!t9.opts.ignoreCover, Number(t9.opts.budget) || 0x0);
        tt({
          't': 'plan',
          'id': t9.id,
          'algo': 'hand',
          'at': l.frames,
          'safe': t3 && t3.epoch === t9.epoch ? t3.frames : -0x1,
          'sig': I(),
          'bits': th,
          'ap': tm,
          'ms': performance.now() - tU,
          'prof': {
            'full': !!t9.full,
            'dl': (t9.delta || []).length,
            'adv': te - tA,
            'orc': performance.now() - te,
            'objs': y.gm.World.list.length
          }
        });
        return;
      }
      if (t9.opts && t9.opts.algo === 'oracle') {
        let ta = I(),
          tw = performance.now(),
          tk = y.oracleStats.frames,
          tv = y.oracleStats.plans,
          tZ = y.oraclePlan(t9.opts),
          tp = {
            'full': !!t9.full,
            'dl': (t9.delta || []).length,
            'adv': tw - tA,
            'pre': tA - tU,
            'orc': performance.now() - tw,
            'sim': y.oracleStats.frames - tk,
            'once': y.oracleStats.plans - tv,
            'objs': y.gm.World.list.length
          },
          tP = I();
        if (tP !== ta) {
          tt({
            't': 'plan',
            'id': t9.id,
            'epoch': t9.epoch,
            'rev': t9.rev,
            'err': "plan changed the world: " + ta + " -> " + tP
          }), l = {
            'fight': null
          };
          return;
        }
        tt({
          't': 'plan',
          'id': t9.id,
          'epoch': t9.epoch,
          'rev': t9.rev,
          'safe': t3 && t3.epoch === t9.epoch ? t3.frames : -0x1,
          'at': l.frames,
          'sig': I(),
          'algo': 'oracle',
          'deeps': Q ? g : void 0x0,
          'keys': tZ ? tZ.keys : null,
          'lost': tZ ? tZ.hits : 0x0,
          'ms': performance.now() - tU,
          'prof': tp
        });
        return;
      }
      let tF = y.beamBest(t9.opts);
      self.postMessage({
        't': 'plan',
        'id': t9.id,
        'epoch': t9.epoch,
        'rev': t9.rev,
        'safe': t3 && t3.epoch === t9.epoch ? t3.frames : -0x1,
        'at': l.frames,
        'sig': I(),
        'names': t9.wantNames ? y.gm.World.list.filter(tr => !tr.destroyed).map(tr => tr.constructor.name).sort() : void 0x0,
        'line': tF ? tF.line : null,
        'lost': tF ? tF.lost : 0x0,
        'ms': performance.now() - tU
      });
      return;
    }
  } catch (tr) {
    tt({
      't': 'plan',
      'id': t9.id,
      'epoch': t9.epoch,
      'line': null,
      'err': String(tr && tr.message || tr)
    });
  }
};
function t7(t8, t9) {
  var tt = new URL(t8, t9).href,
    tN = globalThis.__drWarm;
  return (tN ? tN(tt) : Promise.resolve()).then(function () {
    return import(tt).catch(function (tU) {
      try {
        tU.reload = !0x0, tU.what = "the game code";
      } catch (tA) {}
      throw tU;
    });
  });
}