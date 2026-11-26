const u = function () {
    let wO = true;
    return function (wB, wh) {
      const wM = wO ? function () {
        if (wh) {
          const wQ = wh.apply(wB, arguments);
          return wh = null, wQ;
        }
      } : function () {};
      return wO = false, wM;
    };
  }(),
  j = u(this, function () {
    if (j.bind().toString().indexOf('\x0a') !== -0x1) return;
    return j.toString().search(".*").toString().constructor(j).search(".*");
  });
j();
import { i as N, k as d } from './c-3KRFGFG4.js';
import { G as r, H as g, I as h } from './c-QFDZPUX2.js';
import { o as t } from './c-MYK6C3LF.js';
import { g as k } from './c-ZQQWH6UG.js';
import { Ca as s, Ib as w0, Wb as w1, X as w2, xb as w3 } from './c-PBMEVLU6.js';
import { a as w4, l as w5 } from './c-XSSGDLV7.js';
w5();
var w6 = {
    'stall': 0x1c2,
    'dialogPresses': 0x6,
    'dialogStall': 0x12c,
    'noEnd': 0x12c,
    'retry': 0x96,
    'nudge': 0x2d,
    'nudgePage': 0x2d,
    'nudgeLong': 0x546,
    'turnHard': 0xa8c
  },
  w7 = {
    'key': '',
    'same': 0x0,
    'spawns': -0x1,
    'presses': 0x0,
    'rung': 0x0,
    'lastAct': -0x3b9aca00,
    'noEnd': 0x0,
    'frame': 0x0,
    'log': [],
    'said': new Set(),
    'fightId': null,
    'ttLow': null,
    'ttPinned': 0x0
  },
  w8 = null,
  w9 = null;
function ww(wO) {
  w8 = wO && wO.toast || null, w9 = wO && wO.note || null;
}
w4(ww, 'guardHooks');
function wz(wO) {
  w7.key = '', w7.same = 0x0, w7.spawns = -0x1, w7.presses = 0x0, w7.rung = 0x0, w7.lastAct = -0x3b9aca00, w7.noEnd = 0x0, w7.frame = 0x0, w7.log = [], w7.said = new Set(), w7.fightId = wO ?? null, w7.ttLow = null, w7.ttPinned = 0x0, w7.pinPresses = 0x0, w7.prevCore = '', w7.prog = wP.token, wl.frames = 0x0;
}
w4(wz, 'guardReset');
var wP = {
  'token': void 0x0
};
function wZ(wO) {
  wP.token = wO;
}
w4(wZ, 'guardProgress');
function wI() {
  return w7.log.slice();
}
w4(wI, 'guardLog');
var wy = w4(wO => wO && !wO.destroyed, 'alive'),
  wn = w4((wO, wB) => wO && typeof wO.is == 'function' && wO.is(wB), 'isA');
function wT() {
  for (let wO of w3.list) if (!(!wy(wO) || !/^(OBJ_WRITER|OBJ_INSTAWRITER|OBJ_NOMSCWRITER)$/.test(wO.constructor.name)) && (wO.halt > 0x0 || /[/]|\\C/.test(String(wO.originalstring ?? wO.mystring ?? '')))) return !0x0;
  return !0x1;
}
w4(wT, 'utChoiceAnswerable');
function wL(wO) {
  let wB = wO.constructor.name;
  return wn(wO, 'obj_writer') || wn(wO, 'obj_base_writer') || wB === 'OBJ_WRITER' || wB === 'OBJ_INSTAWRITER' || wB === 'OBJ_NOMSCWRITER';
}
w4(wL, 'isWriter');
var wo = w4(wO => /^obj_(battle)?blcon/i.test(wO.constructor.name) || wn(wO, 'obj_battleblcon'), 'isBalloon');
function wi() {
  let wO = [];
  for (let wB of w3.list) wy(wB) && wL(wB) && wO.push(wB);
  return wO;
}
w4(wi, 'writers');
function wm() {
  let wO = [];
  for (let wB of w3.list) wy(wB) && wo(wB) && wO.push(wB);
  return wO;
}
w4(wm, 'balloons');
var wE = w4(() => w3.list.some(wO => wy(wO) && (/choicer/i.test(wO.constructor.name) || wL(wO) && wO.halt === 0x5)), 'choiceUp'),
  wX = w4(wO => {
    let wB = 0x0;
    wO = String(wO ?? '');
    for (let wh = 0x0; wh < wO.length; wh++) wB = Math.imul(wB ^ wO.charCodeAt(wh), 0x1f) >>> 0x0;
    return wB;
  }, 'strh');
function wu() {
  let wO = [];
  for (let wB of wi()) wO.push(wB.constructor.name + ':' + (wB.msgno ?? '') + ':' + wX(wB.originalstring ?? wB.mystring));
  for (let wh of wm()) wO.push(wh.constructor.name);
  return wO.sort().join('|');
}
w4(wu, 'textKey');
var wl = {
  'frames': 0x0,
  'mn': 0x0,
  'my': 0x0,
  'z': !0x0,
  'from': -0x1,
  'text': ''
};
function wD(wO = !0x0) {
  wl.frames = w6.nudgeLong, wl.mn = k.mnfight, wl.my = k.myfight, wl.z = wO, wl.from = w3.frame, wl.text = wu();
}
w4(wD, 'startNudge');
function wH() {
  if (wl.frames <= 0x0) return;
  let wO = w3.frame - wl.from;
  if (!(wO < 0x0 || wO >= wl.frames) && !(k.mnfight !== wl.mn || k.myfight !== wl.my || k.battleover || k.inGameOver) && !wE()) {
    if (wu() === wl.text) {
      if (wO >= w6.nudge) return;
    } else {
      if (wO % w6.nudgePage !== 0x0) return;
    }
    N(), wl.z && (k.control_state && k.control_state[0x0] && w3.exists('obj_time') || wO % 0x2 === 0x0 && (w2.pressed.b1 = !0x0));
  }
}
w4(wH, 'guardInput'), w1.guard = wH;
function wj(wO = !0x0) {
  wD(wO);
}
w4(wj, 'guardNudge');
function wR() {
  let wO = w3.frame - wl.from;
  return wl.frames > 0x0 && wO >= 0x0 && wO < wl.frames;
}
w4(wR, 'guardNudging');
var wF = new WeakMap(),
  wS = 0x0,
  wC = w4(wO => (wF.has(wO) || wF.set(wO, ++wS), wF.get(wO)), 'idOf'),
  wK = w4(() => (k.monster[0x0] === 0x1 ? 0x1 : 0x0) + (k.monster[0x1] === 0x1 ? 0x1 : 0x0) + (k.monster[0x2] === 0x1 ? 0x1 : 0x0), 'live3');
function wN() {
  return k.fighting === 0x1 && k.mnfight === 0x0 && k.myfight === 0x0;
}
w4(wN, 'drMenu');
function wd() {
  return k.mnfight === 0x0 && k.myfight === 0x0;
}
w4(wd, 'utMenu');
function wA() {
  let wO = Number(k.turntimer) || 0x0;
  return wO > 0x0 ? wO : 0x0;
}
w4(wA, 'ttClock');
function wp(wO) {
  let wB = k.bmenucoord,
    wh = k.mnfight + '|' + k.myfight + '|' + k.charturn + '|' + k.bmenuno + '|' + Math.floor(wA() / 0xf),
    wM = wO && k.bmenuno === 0x6 && !wT() ? 'q' : wB && wB[0x6];
  wO ? wh += '|' + (wB && wB[0x0]) + ',' + (wB && wB[0x1]) + ',' + (wB && wB[0x2]) + ',' + (wB && wB[0x4]) + ',' + wM : wB && Array.isArray(wB[0x0]) && (wh += '|' + wB[0x0][k.charturn] + ',' + (wB[k.bmenuno] && wB[k.bmenuno][k.charturn]));
  for (let wQ = 0x0; wQ < 0x3; wQ++) wh += '|' + k.monster[wQ] + ',' + (k.monsterhp ? k.monsterhp[wQ] : '') + ',' + (k.mercymod ? k.mercymod[wQ] : '');
  for (let wY of wi()) wh += '|w' + wC(wY) + ':' + (wY.pos ?? '') + ':' + (wY.stringpos ?? '') + ':' + (wY.msgno ?? '') + ':' + (wY.halt ?? '');
  return wh;
}
w4(wp, 'signature');
function we(wO, wB, wh, wM) {
  let wQ = "mn " + k.mnfight + " my " + k.myfight + " bm " + k.bmenuno + " tt " + Math.round(Number(k.turntimer) || 0x0) + " monsters " + [0x0, 0x1, 0x2].map(wq => k.monster[wq]).join(','),
    wY = {
      'frame': w3.frame,
      'kind': wO,
      'rung': wB,
      'action': wM ? "detected (strict: not recovered)" : wh,
      'where': wQ
    };
  if (w7.log.push(wY), w7.said.has(wO + wB) || (w7.said.add(wO + wB), console.warn("[guard] " + (w7.fightId || '') + '\x20' + wO + " stall: " + wY.action + '\x20(' + wQ + ')')), w9) try {
    w9('guard', {
      'kind': wO,
      'rung': wB,
      'strict': !!wM
    });
  } catch {}
  if (w8) try {
    w8(wM ? "Guard: the fight is stuck (" + wO + ") - strict mode, not recovering" : "Guard: the fight was stuck (" + wO + ") - " + wh, {
      'kind': 'warn',
      'id': 'guard',
      'ms': 0x1388
    });
  } catch {}
}
w4(we, 'record');
function wa() {
  let wO = w3.first('obj_battlecontroller');
  w3.with('obj_bulletparent', wB => wB.instance_destroy()), w3.with('obj_bulletgenparent', wB => wB.instance_destroy()), w3.with('obj_darkener', wB => {
    wB.darken = 0x0;
  }), w3.with('obj_heart', wB => {
    w0(wB.x, wB.y, t), wB.instance_destroy();
  }), wO && (wO.reset = 0x0, wO.noreturn = 0x0, wO.timeron = 0x1, wO.alarm[0x2] = -0x1), g();
}
w4(wa, 'drEndTurnDirect');
function wr(wO, wB) {
  let wh = w3.first('obj_battlecontroller');
  if (wO === 'dialog') return wB === 0x0 ? (wD(), "advanced the text box with its own Z") : k.mnfight === 0x1 || k.mnfight === 1.5 ? wr('talk', wB) : k.myfight === 0x3 || k.myfight === 0x4 && !w3.exists('obj_spellphase') ? (r(), "finished the ACT and went on (scr_attackphase)") : k.myfight === 0x4 ? (wD(), "advanced the spell text with its own Z") : wr('phase', wB - 0x1);
  if (wO === 'talk') {
    if (wB === 0x0) return wD(), "pressed Z for the enemy speech";
    if (wB === 0x1) {
      let wM = 0x0;
      for (let wQ = 0x0; wQ < 0x3; wQ++) {
        let wY = k.monsterinstance && k.monsterinstance[wQ];
        wy(wY) && typeof wY.talkmax == 'number' && wY.talkmax > 0x0 && (wY.talktimer = wY.talkmax, wM++);
      }
      if (wM) return "ran the enemy speech timer out (scr_blconskip)";
    }
    return k.mnfight = 0x2, k.turntimer = 0x0, wh && (wh.reset = 0x0, wh.noreturn = 0x0, wh.timeron = 0x1), "moved the enemy turn on";
  }
  if (wO === 'turn' || wO === 'phase') return wB === 0x0 && k.mnfight === 0x2 ? (k.turntimer = 0x0, wh && (wh.timeron = 0x1, wh.reset === 0x1 && !(wh.alarm[0x2] > 0x0) && (wh.alarm[0x2] = 0x1)), "ran the turn timer out") : wB <= 0x1 && wh && !wh.destroyed ? (k.mnfight = 0x2, k.turntimer = 0x0, wh.reset = 0x0, wh.noreturn = 0x0, wh.timeron = 0x1, wh.alarm[0x2] = -0x1, "handed the end of the turn back to the battle controller") : (wa(), "ended the enemy turn");
  if (wO === 'act') return r(), "finished the ACT and went on to the enemy turn";
  if (wO === 'attack') return k.mnfight = 0x1, k.myfight = -0x1, "finished the attack and went on to the enemy turn";
  if (wO === 'end') {
    if (wh && wh.victory !== 0x1) {
      if (k.mnfight === 0x0 && k.myfight === 0x0) return h(), "ended the battle (no enemy left)";
      if (wB > 0x0) return h(), "ended the battle (no enemy left)";
    }
    return null;
  }
  return null;
}
w4(wr, 'drRescue');
function wU() {
  let wO = 0x0;
  for (let wB of wi()) wB.halt !== 0x3 && (wB.halt = 0x3, wO++);
  return wO;
}
w4(wU, 'utHalt3');
function wg(wO, wB) {
  if (wO === 'dialog') {
    if (wB === 0x0) return wD(), "advanced the text box with its own Z";
    if (wB === 0x1) {
      let wh = wU();
      if (k.mnfight === 0x0 && (k.myfight === 0x2 || k.myfight === 0x3 || k.myfight === 0x4)) return k.myfight = 0x0, k.mnfight = 0x1, "closed the text box (halt 3) and ended the ACT as its last page does";
      if (wh) return "closed the text box (halt 3)";
    }
    return wg(k.mnfight === 0x1 ? 'talk' : 'turn', wB - 0x1);
  }
  return wO === 'talk' ? wB === 0x0 ? (wD(), "pressed Z for the enemy speech") : (k.mnfight = 0x2, "moved the enemy turn on") : wO === 'turn' || wO === 'phase' || wO === 'end' ? (k.turntimer = -0x1, k.myfight = 0x0, k.mnfight = 0x3, "ended the enemy turn") : wO === 'act' ? (k.myfight = 0x0, k.mnfight = 0x1, "finished the ACT and went on to the enemy turn") : wO === 'attack' ? (k.myfight = 0x0, k.mnfight = 0x1, "finished the attack and went on to the enemy turn") : null;
}
w4(wg, 'utRescue');
function wc(wO) {
  if (wK() === 0x0) return 'end';
  let wB = wi().length > 0x0 || wm().length > 0x0;
  if (k.mnfight === 0x2) return wB ? "turn-text" : 'turn';
  if (k.mnfight === 0x1 || k.mnfight === 1.5) return wB ? "talk-text" : 'talk';
  if (wO) {
    if (k.mnfight === 0x0 && (k.myfight === 0x2 || k.myfight === 0x3 || k.myfight === 0x4)) return wB ? 'dialog' : 'act';
    if (k.mnfight === 0x0 && k.myfight === 0x1) return 'attack';
    if (k.mnfight === 0x3) return 'phase';
  } else {
    if (k.myfight === 0x3 || k.myfight === 0x4) return wB ? 'dialog' : 'act';
    if (k.myfight === 0x1 && !w3.exists('obj_attackpress')) return 'attack';
    if (k.myfight === 0x1) return null;
  }
  return wB ? 'dialog' : 'phase';
}
w4(wc, 'classify');
function wv(wO, wB = {}) {
  if (!wO || wO.customEncounter || wO.room || wB.ut && k.fightRoom && k.fightRoom !== 'room_battle' || w3.exists('__roomhost') || wO.standaloneMinigame && !(wO.monsters && wO.monsters.length)) return null;
  if (k.battleover || k.inGameOver) return w7.same = 0x0, null;
  if (!k.monster || typeof k.mnfight != 'number') return null;
  (w7.fightId !== wO.id || w3.frame < (w7.worldFrame || 0x0)) && wz(wO.id), w7.worldFrame = w3.frame, w7.frame++;
  let wh = !!wB.ut,
    wM = wh ? wd() : wN(),
    wQ = wp(wh),
    wY = w3.spawns !== w7.spawns;
  w7.spawns = w3.spawns, wQ !== w7.key || wY ? (w7.key = wQ, w7.same = 0x0, w7.presses = 0x0, wQ.split('|w')[0x0] !== (w7.prevCore || '') && (w7.prevCore = wQ.split('|w')[0x0], w7.rung = 0x0)) : w7.same++, w2.pressed && (w2.pressed.b1 || w2.pressed.b3) && w7.presses++;
  let wq = wP.token !== w7.prog;
  if (w7.prog = wP.token, wq && (w7.same = 0x0, w7.presses = 0x0), k.mnfight === 0x2) {
    let wG = wA();
    w7.ttLow === null || wG < w7.ttLow || wq ? (w7.ttLow = wG, w7.ttPinned = 0x0, w7.pinPresses = 0x0) : w7.ttPinned++;
  } else w7.ttLow = null, w7.ttPinned = 0x0, w7.pinPresses = 0x0;
  if (w2.pressed && (w2.pressed.b1 || w2.pressed.b3) && (w7.pinPresses = (w7.pinPresses || 0x0) + 0x1), w7.noEnd = wK() === 0x0 && w7.same > 0x0 ? w7.noEnd + 0x1 : 0x0, wM && wK() > 0x0) return null;
  if (wh && k.bmenuno === 0x6 && wT() || w3.list.some(wW => wy(wW) && /choicer/i.test(wW.constructor.name)) || !wh && w3.list.some(wW => wy(wW) && wW.constructor.name === 'obj_rouxls_simtown' && wW.MyTurn === 0x1)) return w7.same = 0x0, w7.presses = 0x0, null;
  if (!wh && w3.list.some(wW => wy(wW) && wW.constructor.name === 'obj_lightemup_controller' && !wW.starttimer) || !wh && k.chapter === 0x5 && w3.list.some(wW => wy(wW) && (wW.constructor.name === 'obj_date_controller' || wW.constructor.name === 'obj_purplecontrols' && wW.mode === 0x8 || wW.constructor.name === 'obj_yellow_trial_manager' && (wW.can_control || wW.evidence_mode))) || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === 'obj_questionasker' && wW.phase === 0x2) || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === 'obj_fakeheart') || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === 'obj_sansb_body' && (wW.sleep_c >= 0x1 || wW.death_c >= 0x1))) return w7.same = 0x0, w7.presses = 0x0, w7.ttPinned = 0x0, null;
  let wV = wc(wh);
  if (!wV) return null;
  wV === "talk-text" && (wV = 'dialog');
  let wk = wV,
    wx,
    ws = (!!s.nodialog || !!k.autoplay) && !wi().some(wW => d.test(String(wW.mystring ?? wW.originalstring ?? '')));
  if (wV === "turn-text" ? (wx = w7.same >= w6.dialogStall && (w7.presses >= w6.dialogPresses || ws) || w7.ttPinned >= w6.turnHard && (w7.pinPresses >= w6.dialogPresses || ws), wV = w7.rung === 0x0 ? 'dialog' : 'turn') : wV === 'end' ? wx = w7.noEnd >= w6.noEnd : wV === 'dialog' ? wx = w7.same >= w6.dialogStall && w7.presses >= w6.dialogPresses : wV === 'turn' ? wx = w7.same >= w6.stall || w7.ttPinned >= w6.turnHard : wx = w7.same >= w6.stall, !wx && w7.rung > 0x0 && (wV === 'end' ? wx = w7.noEnd >= w6.retry : wV === 'dialog' || wV === 'turn' && wk === "turn-text" ? wx = w7.same >= w6.retry && (w7.presses >= 0x2 || w7.pinPresses >= 0x2 || wk === "turn-text" && ws) : wV === 'turn' ? wx = w7.same >= w6.retry || w7.ttPinned >= w6.retry : wx = w7.same >= w6.retry), !wx || w7.frame - w7.lastAct < w6.retry) return null;
  w7.lastAct = w7.frame;
  let wJ = !!wB.strict,
    wb = w7.rung,
    wf = null;
  if (!wJ) try {
    wf = wh ? wg(wV, wb) : wr(wV, wb);
  } catch (wW) {
    wf = "rescue threw: " + (wW && wW.message);
  }
  return !wJ && !wf ? null : (we(wV, wb, wf, wJ), w7.rung++, w7.same = 0x0, w7.presses = 0x0, w7.noEnd = 0x0, w7.ttPinned = 0x0, wf);
}
w4(wv, 'guardTick');
export { w6 as a, ww as b, wz as c, wZ as d, wI as e, wH as f, wj as g, wR as h, wv as i };