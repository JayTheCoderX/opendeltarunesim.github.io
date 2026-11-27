import { i as N, k as d } from "./c-3KRFGFG4.js";
import { G as r, H as g, I as h } from "./c-QFDZPUX2.js";
import { o as t } from "./c-MYK6C3LF.js";
import { g as k } from "./c-ZQQWH6UG.js";
import { Ca as s, Ib as w0, Wb as w1, X as w2, xb as w3 } from "./c-PBMEVLU6.js";
import { a as w4, l as w5 } from "./c-XSSGDLV7.js";
w5();
var w6 = {
  stall: 450,
  dialogPresses: 6,
  dialogStall: 300,
  noEnd: 300,
  retry: 150,
  nudge: 45,
  nudgePage: 45,
  nudgeLong: 1350,
  turnHard: 2700
};
var w7 = {
  key: "",
  same: 0,
  spawns: -1,
  presses: 0,
  rung: 0,
  lastAct: -1000000000,
  noEnd: 0,
  frame: 0,
  log: [],
  said: new Set(),
  fightId: null,
  ttLow: null,
  ttPinned: 0
};
var w8 = null;
var w9 = null;
function ww(wO) {
  w8 = wO && wO.toast || null;
  w9 = wO && wO.note || null;
}
w4(ww, "guardHooks");
function wz(wO) {
  w7.key = "";
  w7.same = 0;
  w7.spawns = -1;
  w7.presses = 0;
  w7.rung = 0;
  w7.lastAct = -1000000000;
  w7.noEnd = 0;
  w7.frame = 0;
  w7.log = [];
  w7.said = new Set();
  w7.fightId = wO ?? null;
  w7.ttLow = null;
  w7.ttPinned = 0;
  w7.pinPresses = 0;
  w7.prevCore = "";
  w7.prog = wP.token;
  wl.frames = 0;
}
w4(wz, "guardReset");
var wP = {
  token: undefined
};
function wZ(wO) {
  wP.token = wO;
}
w4(wZ, "guardProgress");
function wI() {
  return w7.log.slice();
}
w4(wI, "guardLog");
var wy = w4(wO => wO && !wO.destroyed, "alive");
var wn = w4((wO, wB) => wO && typeof wO.is == "function" && wO.is(wB), "isA");
function wT() {
  for (let wO of w3.list) {
    if (!!wy(wO) && !!/^(OBJ_WRITER|OBJ_INSTAWRITER|OBJ_NOMSCWRITER)$/.test(wO.constructor.name) && (wO.halt > 0 || /[/]|\\C/.test(String(wO.originalstring ?? wO.mystring ?? "")))) {
      return true;
    }
  }
  return false;
}
w4(wT, "utChoiceAnswerable");
function wL(wO) {
  let wB = wO.constructor.name;
  return wn(wO, "obj_writer") || wn(wO, "obj_base_writer") || wB === "OBJ_WRITER" || wB === "OBJ_INSTAWRITER" || wB === "OBJ_NOMSCWRITER";
}
w4(wL, "isWriter");
var wo = w4(wO => /^obj_(battle)?blcon/i.test(wO.constructor.name) || wn(wO, "obj_battleblcon"), "isBalloon");
function wi() {
  let wO = [];
  for (let wB of w3.list) {
    if (wy(wB) && wL(wB)) {
      wO.push(wB);
    }
  }
  return wO;
}
w4(wi, "writers");
function wm() {
  let wO = [];
  for (let wB of w3.list) {
    if (wy(wB) && wo(wB)) {
      wO.push(wB);
    }
  }
  return wO;
}
w4(wm, "balloons");
var wE = w4(() => w3.list.some(wO => wy(wO) && (/choicer/i.test(wO.constructor.name) || wL(wO) && wO.halt === 5)), "choiceUp");
var wX = w4(wO => {
  let wB = 0;
  wO = String(wO ?? "");
  for (let wh = 0; wh < wO.length; wh++) {
    wB = Math.imul(wB ^ wO.charCodeAt(wh), 31) >>> 0;
  }
  return wB;
}, "strh");
function wu() {
  let wO = [];
  for (let wB of wi()) {
    wO.push(wB.constructor.name + ":" + (wB.msgno ?? "") + ":" + wX(wB.originalstring ?? wB.mystring));
  }
  for (let wh of wm()) {
    wO.push(wh.constructor.name);
  }
  return wO.sort().join("|");
}
w4(wu, "textKey");
var wl = {
  frames: 0,
  mn: 0,
  my: 0,
  z: true,
  from: -1,
  text: ""
};
function wD(wO = true) {
  wl.frames = w6.nudgeLong;
  wl.mn = k.mnfight;
  wl.my = k.myfight;
  wl.z = wO;
  wl.from = w3.frame;
  wl.text = wu();
}
w4(wD, "startNudge");
function wH() {
  if (wl.frames <= 0) {
    return;
  }
  let wO = w3.frame - wl.from;
  if (!(wO < 0) && !(wO >= wl.frames) && k.mnfight === wl.mn && k.myfight === wl.my && !k.battleover && !k.inGameOver && !wE()) {
    if (wu() === wl.text) {
      if (wO >= w6.nudge) {
        return;
      }
    } else if (wO % w6.nudgePage !== 0) {
      return;
    }
    N();
    if (wl.z) {
      if (!k.control_state || !k.control_state[0] || !w3.exists("obj_time")) {
        if (wO % 2 === 0) {
          w2.pressed.b1 = true;
        }
      }
    }
  }
}
w4(wH, "guardInput");
w1.guard = wH;
function wj(wO = true) {
  wD(wO);
}
w4(wj, "guardNudge");
function wR() {
  let wO = w3.frame - wl.from;
  return wl.frames > 0 && wO >= 0 && wO < wl.frames;
}
w4(wR, "guardNudging");
var wF = new WeakMap();
var wS = 0;
var wC = w4(wO => {
  if (!wF.has(wO)) {
    wF.set(wO, ++wS);
  }
  return wF.get(wO);
}, "idOf");
var wK = w4(() => (k.monster[0] === 1 ? 1 : 0) + (k.monster[1] === 1 ? 1 : 0) + (k.monster[2] === 1 ? 1 : 0), "live3");
function wN() {
  return k.fighting === 1 && k.mnfight === 0 && k.myfight === 0;
}
w4(wN, "drMenu");
function wd() {
  return k.mnfight === 0 && k.myfight === 0;
}
w4(wd, "utMenu");
function wA() {
  let wO = Number(k.turntimer) || 0;
  if (wO > 0) {
    return wO;
  } else {
    return 0;
  }
}
w4(wA, "ttClock");
function wp(wO) {
  let wB = k.bmenucoord;
  let wh = k.mnfight + "|" + k.myfight + "|" + k.charturn + "|" + k.bmenuno + "|" + Math.floor(wA() / 15);
  let wM = wO && k.bmenuno === 6 && !wT() ? "q" : wB && wB[6];
  if (wO) {
    wh += "|" + (wB && wB[0]) + "," + (wB && wB[1]) + "," + (wB && wB[2]) + "," + (wB && wB[4]) + "," + wM;
  } else if (wB && Array.isArray(wB[0])) {
    wh += "|" + wB[0][k.charturn] + "," + (wB[k.bmenuno] && wB[k.bmenuno][k.charturn]);
  }
  for (let wQ = 0; wQ < 3; wQ++) {
    wh += "|" + k.monster[wQ] + "," + (k.monsterhp ? k.monsterhp[wQ] : "") + "," + (k.mercymod ? k.mercymod[wQ] : "");
  }
  for (let wY of wi()) {
    wh += "|w" + wC(wY) + ":" + (wY.pos ?? "") + ":" + (wY.stringpos ?? "") + ":" + (wY.msgno ?? "") + ":" + (wY.halt ?? "");
  }
  return wh;
}
w4(wp, "signature");
function we(wO, wB, wh, wM) {
  let wQ = "mn " + k.mnfight + " my " + k.myfight + " bm " + k.bmenuno + " tt " + Math.round(Number(k.turntimer) || 0) + " monsters " + [0, 1, 2].map(wq => k.monster[wq]).join(",");
  let wY = {
    frame: w3.frame,
    kind: wO,
    rung: wB,
    action: wM ? "detected (strict: not recovered)" : wh,
    where: wQ
  };
  w7.log.push(wY);
  if (!w7.said.has(wO + wB)) {
    w7.said.add(wO + wB);
    console.warn("[guard] " + (w7.fightId || "") + " " + wO + " stall: " + wY.action + " (" + wQ + ")");
  }
  if (w9) {
    try {
      w9("guard", {
        kind: wO,
        rung: wB,
        strict: !!wM
      });
    } catch {}
  }
  if (w8) {
    try {
      w8(wM ? "Guard: the fight is stuck (" + wO + ") - strict mode, not recovering" : "Guard: the fight was stuck (" + wO + ") - " + wh, {
        kind: "warn",
        id: "guard",
        ms: 5000
      });
    } catch {}
  }
}
w4(we, "record");
function wa() {
  let wO = w3.first("obj_battlecontroller");
  w3.with("obj_bulletparent", wB => wB.instance_destroy());
  w3.with("obj_bulletgenparent", wB => wB.instance_destroy());
  w3.with("obj_darkener", wB => {
    wB.darken = 0;
  });
  w3.with("obj_heart", wB => {
    w0(wB.x, wB.y, t);
    wB.instance_destroy();
  });
  if (wO) {
    wO.reset = 0;
    wO.noreturn = 0;
    wO.timeron = 1;
    wO.alarm[2] = -1;
  }
  g();
}
w4(wa, "drEndTurnDirect");
function wr(wO, wB) {
  let wh = w3.first("obj_battlecontroller");
  if (wO === "dialog") {
    if (wB === 0) {
      wD();
      return "advanced the text box with its own Z";
    } else if (k.mnfight === 1 || k.mnfight === 1.5) {
      return wr("talk", wB);
    } else if (k.myfight === 3 || k.myfight === 4 && !w3.exists("obj_spellphase")) {
      r();
      return "finished the ACT and went on (scr_attackphase)";
    } else if (k.myfight === 4) {
      wD();
      return "advanced the spell text with its own Z";
    } else {
      return wr("phase", wB - 1);
    }
  }
  if (wO === "talk") {
    if (wB === 0) {
      wD();
      return "pressed Z for the enemy speech";
    }
    if (wB === 1) {
      let wM = 0;
      for (let wQ = 0; wQ < 3; wQ++) {
        let wY = k.monsterinstance && k.monsterinstance[wQ];
        if (wy(wY) && typeof wY.talkmax == "number" && wY.talkmax > 0) {
          wY.talktimer = wY.talkmax;
          wM++;
        }
      }
      if (wM) {
        return "ran the enemy speech timer out (scr_blconskip)";
      }
    }
    k.mnfight = 2;
    k.turntimer = 0;
    if (wh) {
      wh.reset = 0;
      wh.noreturn = 0;
      wh.timeron = 1;
    }
    return "moved the enemy turn on";
  }
  if (wO === "turn" || wO === "phase") {
    if (wB === 0 && k.mnfight === 2) {
      k.turntimer = 0;
      if (wh) {
        wh.timeron = 1;
        if (wh.reset === 1 && !(wh.alarm[2] > 0)) {
          wh.alarm[2] = 1;
        }
      }
      return "ran the turn timer out";
    } else if (wB <= 1 && wh && !wh.destroyed) {
      k.mnfight = 2;
      k.turntimer = 0;
      wh.reset = 0;
      wh.noreturn = 0;
      wh.timeron = 1;
      wh.alarm[2] = -1;
      return "handed the end of the turn back to the battle controller";
    } else {
      wa();
      return "ended the enemy turn";
    }
  }
  if (wO === "act") {
    r();
    return "finished the ACT and went on to the enemy turn";
  }
  if (wO === "attack") {
    k.mnfight = 1;
    k.myfight = -1;
    return "finished the attack and went on to the enemy turn";
  }
  if (wO === "end") {
    if (wh && wh.victory !== 1) {
      if (k.mnfight === 0 && k.myfight === 0) {
        h();
        return "ended the battle (no enemy left)";
      }
      if (wB > 0) {
        h();
        return "ended the battle (no enemy left)";
      }
    }
    return null;
  }
  return null;
}
w4(wr, "drRescue");
function wU() {
  let wO = 0;
  for (let wB of wi()) {
    if (wB.halt !== 3) {
      wB.halt = 3;
      wO++;
    }
  }
  return wO;
}
w4(wU, "utHalt3");
function wg(wO, wB) {
  if (wO === "dialog") {
    if (wB === 0) {
      wD();
      return "advanced the text box with its own Z";
    }
    if (wB === 1) {
      let wh = wU();
      if (k.mnfight === 0 && (k.myfight === 2 || k.myfight === 3 || k.myfight === 4)) {
        k.myfight = 0;
        k.mnfight = 1;
        return "closed the text box (halt 3) and ended the ACT as its last page does";
      }
      if (wh) {
        return "closed the text box (halt 3)";
      }
    }
    return wg(k.mnfight === 1 ? "talk" : "turn", wB - 1);
  }
  if (wO === "talk") {
    if (wB === 0) {
      wD();
      return "pressed Z for the enemy speech";
    } else {
      k.mnfight = 2;
      return "moved the enemy turn on";
    }
  } else if (wO === "turn" || wO === "phase" || wO === "end") {
    k.turntimer = -1;
    k.myfight = 0;
    k.mnfight = 3;
    return "ended the enemy turn";
  } else if (wO === "act") {
    k.myfight = 0;
    k.mnfight = 1;
    return "finished the ACT and went on to the enemy turn";
  } else if (wO === "attack") {
    k.myfight = 0;
    k.mnfight = 1;
    return "finished the attack and went on to the enemy turn";
  } else {
    return null;
  }
}
w4(wg, "utRescue");
function wc(wO) {
  if (wK() === 0) {
    return "end";
  }
  let wB = wi().length > 0 || wm().length > 0;
  if (k.mnfight === 2) {
    if (wB) {
      return "turn-text";
    } else {
      return "turn";
    }
  }
  if (k.mnfight === 1 || k.mnfight === 1.5) {
    if (wB) {
      return "talk-text";
    } else {
      return "talk";
    }
  }
  if (wO) {
    if (k.mnfight === 0 && (k.myfight === 2 || k.myfight === 3 || k.myfight === 4)) {
      if (wB) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (k.mnfight === 0 && k.myfight === 1) {
      return "attack";
    }
    if (k.mnfight === 3) {
      return "phase";
    }
  } else {
    if (k.myfight === 3 || k.myfight === 4) {
      if (wB) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (k.myfight === 1 && !w3.exists("obj_attackpress")) {
      return "attack";
    }
    if (k.myfight === 1) {
      return null;
    }
  }
  if (wB) {
    return "dialog";
  } else {
    return "phase";
  }
}
w4(wc, "classify");
function wv(wO, wB = {}) {
  if (!wO || wO.customEncounter || wO.room || wB.ut && k.fightRoom && k.fightRoom !== "room_battle" || w3.exists("__roomhost") || wO.standaloneMinigame && (!wO.monsters || !wO.monsters.length)) {
    return null;
  }
  if (k.battleover || k.inGameOver) {
    w7.same = 0;
    return null;
  }
  if (!k.monster || typeof k.mnfight != "number") {
    return null;
  }
  if (w7.fightId !== wO.id || w3.frame < (w7.worldFrame || 0)) {
    wz(wO.id);
  }
  w7.worldFrame = w3.frame;
  w7.frame++;
  let wh = !!wB.ut;
  let wM = wh ? wd() : wN();
  let wQ = wp(wh);
  let wY = w3.spawns !== w7.spawns;
  w7.spawns = w3.spawns;
  if (wQ !== w7.key || wY) {
    w7.key = wQ;
    w7.same = 0;
    w7.presses = 0;
    if (wQ.split("|w")[0] !== (w7.prevCore || "")) {
      w7.prevCore = wQ.split("|w")[0];
      w7.rung = 0;
    }
  } else {
    w7.same++;
  }
  if (w2.pressed && (w2.pressed.b1 || w2.pressed.b3)) {
    w7.presses++;
  }
  let wq = wP.token !== w7.prog;
  w7.prog = wP.token;
  if (wq) {
    w7.same = 0;
    w7.presses = 0;
  }
  if (k.mnfight === 2) {
    let wG = wA();
    if (w7.ttLow === null || wG < w7.ttLow || wq) {
      w7.ttLow = wG;
      w7.ttPinned = 0;
      w7.pinPresses = 0;
    } else {
      w7.ttPinned++;
    }
  } else {
    w7.ttLow = null;
    w7.ttPinned = 0;
    w7.pinPresses = 0;
  }
  if (w2.pressed && (w2.pressed.b1 || w2.pressed.b3)) {
    w7.pinPresses = (w7.pinPresses || 0) + 1;
  }
  w7.noEnd = wK() === 0 && w7.same > 0 ? w7.noEnd + 1 : 0;
  if (wM && wK() > 0) {
    return null;
  }
  if (wh && k.bmenuno === 6 && wT() || w3.list.some(wW => wy(wW) && /choicer/i.test(wW.constructor.name)) || !wh && w3.list.some(wW => wy(wW) && wW.constructor.name === "obj_rouxls_simtown" && wW.MyTurn === 1)) {
    w7.same = 0;
    w7.presses = 0;
    return null;
  }
  if (!wh && w3.list.some(wW => wy(wW) && wW.constructor.name === "obj_lightemup_controller" && !wW.starttimer) || !wh && k.chapter === 5 && w3.list.some(wW => wy(wW) && (wW.constructor.name === "obj_date_controller" || wW.constructor.name === "obj_purplecontrols" && wW.mode === 8 || wW.constructor.name === "obj_yellow_trial_manager" && (wW.can_control || wW.evidence_mode))) || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === "obj_questionasker" && wW.phase === 2) || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === "obj_fakeheart") || wh && w3.list.some(wW => wy(wW) && wW.constructor.name === "obj_sansb_body" && (wW.sleep_c >= 1 || wW.death_c >= 1))) {
    w7.same = 0;
    w7.presses = 0;
    w7.ttPinned = 0;
    return null;
  }
  let wV = wc(wh);
  if (!wV) {
    return null;
  }
  if (wV === "talk-text") {
    wV = "dialog";
  }
  let wk = wV;
  let wx;
  let ws = (!!s.nodialog || !!k.autoplay) && !wi().some(wW => d.test(String(wW.mystring ?? wW.originalstring ?? "")));
  if (wV === "turn-text") {
    wx = w7.same >= w6.dialogStall && (w7.presses >= w6.dialogPresses || ws) || w7.ttPinned >= w6.turnHard && (w7.pinPresses >= w6.dialogPresses || ws);
    wV = w7.rung === 0 ? "dialog" : "turn";
  } else if (wV === "end") {
    wx = w7.noEnd >= w6.noEnd;
  } else if (wV === "dialog") {
    wx = w7.same >= w6.dialogStall && w7.presses >= w6.dialogPresses;
  } else if (wV === "turn") {
    wx = w7.same >= w6.stall || w7.ttPinned >= w6.turnHard;
  } else {
    wx = w7.same >= w6.stall;
  }
  if (!wx && w7.rung > 0) {
    if (wV === "end") {
      wx = w7.noEnd >= w6.retry;
    } else if (wV === "dialog" || wV === "turn" && wk === "turn-text") {
      wx = w7.same >= w6.retry && (w7.presses >= 2 || w7.pinPresses >= 2 || wk === "turn-text" && ws);
    } else if (wV === "turn") {
      wx = w7.same >= w6.retry || w7.ttPinned >= w6.retry;
    } else {
      wx = w7.same >= w6.retry;
    }
  }
  if (!wx || w7.frame - w7.lastAct < w6.retry) {
    return null;
  }
  w7.lastAct = w7.frame;
  let wJ = !!wB.strict;
  let wb = w7.rung;
  let wf = null;
  if (!wJ) {
    try {
      wf = wh ? wg(wV, wb) : wr(wV, wb);
    } catch (wW) {
      wf = "rescue threw: " + (wW && wW.message);
    }
  }
  if (!wJ && !wf) {
    return null;
  } else {
    we(wV, wb, wf, wJ);
    w7.rung++;
    w7.same = 0;
    w7.presses = 0;
    w7.noEnd = 0;
    w7.ttPinned = 0;
    return wf;
  }
}
w4(wv, "guardTick");
export { w6 as a, ww as b, wz as c, wZ as d, wI as e, wH as f, wj as g, wR as h, wv as i };
