import { N as f, Pb as R, h as u } from "./c-PBMEVLU6.js";
import { a as v, l as c } from "./c-XSSGDLV7.js";
c();
c();
var a = ["MAX", "300", "200", "100", "50", "MISS"];
var n = [305, 300, 200, 100, 50, 0];
var p = [300, 300, 200, 100, 50, 0];
var L = [320, 300, 200, 100, 50, 0];
var o = ["#ffff00", "#ffffff", "#7ad17a", "#ffa040", "#808080", "#ff4040"];
var A = {
  SS: "#ffff00",
  S: "#e0c060",
  A: "#7ad17a",
  B: "#ffffff",
  C: "#ffa040",
  D: "#ff4040",
  F: "#ff4040"
};
var t = {
  EZ: {
    name: "Easy",
    kind: "reduce",
    mult: 0.5,
    desc: "Wider hit windows, less HP drain.",
    off: ["HR"]
  },
  NF: {
    name: "No Fail",
    kind: "reduce",
    mult: 0.5,
    desc: "You cannot fail.",
    off: []
  },
  HT: {
    name: "Half Time",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: false,
    desc: "0.75x speed, pitch kept.",
    off: ["DT", "NC", "DC"]
  },
  DC: {
    name: "Daycore",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: true,
    desc: "0.75x speed, pitch lowered.",
    off: ["DT", "NC", "HT"]
  },
  HR: {
    name: "Hard Rock",
    kind: "raise",
    mult: 1,
    desc: "Tighter hit windows, more HP drain.",
    off: ["EZ"]
  },
  DT: {
    name: "Double Time",
    kind: "raise",
    mult: 1,
    rate: 1.5,
    pitch: false,
    desc: "1.5x speed, pitch kept.",
    off: ["HT", "DC", "NC"]
  },
  NC: {
    name: "Nightcore",
    kind: "raise",
    mult: 1,
    rate: 1.5,
    pitch: true,
    desc: "1.5x speed, pitch raised.",
    off: ["HT", "DC", "DT"]
  },
  HD: {
    name: "Hidden",
    kind: "raise",
    mult: 1,
    desc: "Notes fade out before they reach the keys.",
    off: ["FI"]
  },
  FI: {
    name: "Fade In",
    kind: "raise",
    mult: 1,
    desc: "Notes appear late, near the keys.",
    off: ["HD"]
  },
  MR: {
    name: "Mirror",
    kind: "conv",
    mult: 1,
    desc: "The chart flipped left to right.",
    off: []
  },
  CS: {
    name: "Constant Speed",
    kind: "conv",
    mult: 1,
    desc: "Ignore scroll speed changes (SV).",
    off: []
  },
  AT: {
    name: "Autoplay",
    kind: "auto",
    mult: 1,
    desc: "Watch a perfect play. Not scored.",
    off: []
  }
};
var T = ["EZ", "NF", "HT", "DC", "HR", "DT", "NC", "HD", "FI", "MR", "CS", "AT"];
function m(jr) {
  let jg = [];
  if (!Array.isArray(jr)) {
    return jg;
  }
  for (let jz of T) {
    if (jr.includes(jz) && !jg.some(jQ => t[jQ].off.includes(jz))) {
      jg.push(jz);
    }
  }
  return jg;
}
v(m, "cleanMods");
function x(jr) {
  let jg = m(jr);
  let jz = 1;
  let jQ = false;
  let jH = 1;
  for (let l0 of jg) {
    let l1 = t[l0];
    jH *= l1.mult;
    if (l1.rate) {
      jz = l1.rate;
      jQ = !!l1.pitch;
    }
  }
  return {
    mods: jg,
    rate: jz,
    pitch: jQ,
    mult: jH,
    winMul: jg.includes("HR") ? 0.7142857142857143 : jg.includes("EZ") ? 1.4 : 1,
    hpMul: jg.includes("HR") ? 1.4 : jg.includes("EZ") ? 0.5 : 1,
    noFail: jg.includes("NF"),
    mirror: jg.includes("MR"),
    constant: jg.includes("CS"),
    auto: jg.includes("AT"),
    hidden: jg.includes("HD"),
    fadeIn: jg.includes("FI")
  };
}
v(x, "modInfo");
var E = v(jr => {
  let jg = m(jr);
  if (jg.length) {
    return jg.join("");
  } else {
    return "NM";
  }
}, "modsLabel");
function G(jr, jg = 1, jz = 1) {
  let jQ = Math.max(0, Math.min(10, Number(jr) || 0));
  let jH = jg * jz;
  return [jH * 16, (64 - jQ * 3) * jH, (97 - jQ * 3) * jH, (127 - jQ * 3) * jH, (151 - jQ * 3) * jH, (188 - jQ * 3) * jH];
}
v(G, "windows");
function y(jr, jg) {
  if (jg) {
    return "F";
  } else if (jr >= 1) {
    return "SS";
  } else if (jr >= 0.95) {
    return "S";
  } else if (jr >= 0.9) {
    return "A";
  } else if (jr >= 0.8) {
    return "B";
  } else if (jr >= 0.7) {
    return "C";
  } else {
    return "D";
  }
}
v(y, "gradeOf");
var i = Math.log(4);
var s = Math.log(400) / i;
var S = v(jr => Math.min(Math.max(0.5, Math.log(jr) / i), s), "comboMul");
function d(jr, jg, jz, jQ, jH) {
  let l0 = new Int32Array(jH).fill(-1);
  let l1 = 0;
  for (let l2 = 0; l2 < jQ; l2++) {
    let l3 = jz[l2];
    let l4 = l0[l3];
    if (l4 >= 0 && jg[l4] > 0 && jg[l4] > jr[l2] - 20) {
      let l5 = jr[l2] - jr[l4];
      let l6 = jr[l2] - Math.min(60, Math.max(10, l5 / 2));
      jg[l4] = l6 - jr[l4] >= 20 ? Math.round(l6) : 0;
      l1++;
    }
    l0[l3] = l2;
  }
  return l1;
}
v(d, "fixOverlaps");
var h = {
  1: ["Space"],
  2: ["KeyF", "KeyJ"],
  3: ["KeyF", "Space", "KeyJ"],
  4: ["KeyD", "KeyF", "KeyJ", "KeyK"],
  5: ["KeyD", "KeyF", "Space", "KeyJ", "KeyK"],
  6: ["KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL"],
  7: ["KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL"],
  8: ["KeyA", "KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  9: ["KeyA", "KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  10: ["KeyA", "KeyS", "KeyD", "KeyF", "KeyV", "KeyN", "KeyJ", "KeyK", "KeyL", "Semicolon"]
};
var k = {
  1: [[0, 1, 2, 3, 4, 5]],
  2: [[14, 4, 6], [1, 5, 7]],
  3: [[14, 4], [13, 0, 6, 7], [1, 5]],
  4: [[14, 4], [13, 6], [2, 7], [1, 5]],
  5: [[14, 4], [13], [6, 7, 0], [2], [1, 5]],
  6: [[4], [14], [13], [2], [1], [5]],
  7: [[4], [14], [13], [6, 7, 0], [2], [1], [5]]
};
var r = class l7 {
  constructor(jr, jg = {}) {
    let jz = jg.mods ? x(jg.mods) : {
      ...x([]),
      ...jg
    };
    let jQ = this.keys = Math.max(1, Math.min(10, jr.keys || 4));
    let jH = jr.count;
    this.chart = jr;
    this.n = jH;
    this.mi = jz;
    this.time = jr.time;
    this.lane = new Uint8Array(jH);
    for (let l5 = 0; l5 < jH; l5++) {
      this.lane[l5] = jz.mirror ? jQ - 1 - jr.lane[l5] : jr.lane[l5];
    }
    this.end = Int32Array.from(jr.end);
    this.overlapsCut = d(this.time, this.end, this.lane, jH, jQ);
    this.rate = jz.rate || 1;
    this.od = jg.od ?? jr.od;
    this.win = G(this.od, jz.winMul || 1, this.rate);
    this.twin = this.win.map(l6 => l6 * 1.5);
    this.hpDrain = Math.max(0, Math.min(10, (jg.hp ?? jr.hp ?? 5) * (jz.hpMul || 1)));
    this.noFail = !!jz.noFail;
    this.mult = jz.mult || 1;
    let l0 = this.hpDrain;
    this.hpDelta = [0.012, 0.01, 0.004, 0, -(0.01 + l0 * 0.002), -(0.04 + l0 * 0.006)];
    this.head = new Int8Array(jH).fill(-1);
    this.tail = new Int8Array(jH).fill(-1);
    this.state = new Uint8Array(jH);
    this.capped = new Uint8Array(jH);
    let l1 = new Int32Array(jQ);
    let l2 = 0;
    for (let l6 = 0; l6 < jH; l6++) {
      l1[this.lane[l6]]++;
      if (this.end[l6] > 0) {
        l2++;
      }
    }
    this.laneNotes = [];
    let l3 = new Int32Array(jQ);
    for (let l8 = 0; l8 < jQ; l8++) {
      this.laneNotes.push(new Int32Array(l1[l8]));
    }
    for (let l9 = 0; l9 < jH; l9++) {
      let lP = this.lane[l9];
      this.laneNotes[lP][l3[lP]++] = l9;
    }
    this.laneNext = new Int32Array(jQ);
    this.holding = new Int32Array(jQ).fill(-1);
    this.broken = new Int32Array(jQ).fill(-1);
    this.down = new Uint8Array(jQ);
    this.presses = new Int32Array(jQ);
    this.holds = l2;
    this.total = jH + l2;
    this.counts = new Int32Array(6);
    this.judged = 0;
    this.worth = 0;
    this.worthV1 = 0;
    this.worthPP = 0;
    this.comboPortion = 0;
    let l4 = 0;
    for (let lw = 1; lw <= this.total; lw++) {
      l4 += S(lw) * 305;
    }
    this.maxComboPortion = Math.max(1, l4);
    this.combo = 0;
    this.maxCombo = 0;
    this.breaks = 0;
    this.hp = 1;
    this.failed = false;
    this.failAt = -1;
    this.wouldFail = false;
    this.errN = 0;
    this.errMs = new Float32Array(this.total);
    this.errAt = new Float32Array(this.total);
    this.errJ = new Uint8Array(this.total);
    this.errLane = new Uint8Array(this.total);
    this.lastJ = -1;
    this.lastJAt = -1000000000;
    this.lastErr = 0;
    this.laneHitAt = new Float64Array(jQ).fill(-1000000000);
    this.laneHitJ = new Int8Array(jQ).fill(-1);
    this.laneDownAt = new Float64Array(jQ).fill(-1000000000);
    this.missAt = -1000000000;
    this.comboAt = -1000000000;
    this.onJudge = null;
    this.lastT = -1000000000;
    this.maxErr = this.win[4];
  }
  get accuracy() {
    if (this.judged) {
      return this.worth / (this.judged * 305);
    } else {
      return 1;
    }
  }
  get accuracyV1() {
    if (this.judged) {
      return this.worthV1 / (this.judged * 300);
    } else {
      return 1;
    }
  }
  get score() {
    let jr = this.accuracy;
    let jg = this.comboPortion * 10000 / this.maxComboPortion + Math.pow(jr, 2 + jr * 2) * 990000 * (this.judged / Math.max(1, this.total));
    return Math.round(jg * this.mult);
  }
  get grade() {
    return y(this.accuracy, this.failed);
  }
  get complete() {
    return this.judged >= this.total;
  }
  get fullCombo() {
    return this.complete && this.counts[5] === 0 && this.breaks === 0;
  }
  classify(jr, jg = false) {
    let jz = jg ? this.twin : this.win;
    for (let jQ = 0; jQ < 5; jQ++) {
      if (jr <= jz[jQ]) {
        return jQ;
      }
    }
    return -1;
  }
  nextIn(jr) {
    let jg = this.laneNotes[jr];
    let jz = this.laneNext[jr];
    while (jz < jg.length && this.head[jg[jz]] >= 0) {
      jz++;
    }
    this.laneNext[jr] = jz;
    if (jz < jg.length) {
      return jg[jz];
    } else {
      return -1;
    }
  }
  judge(jr, jg, jz, jQ, jH) {
    let l0 = this.lane[jr];
    this.counts[jg]++;
    this.judged++;
    this.worth += n[jg];
    this.worthV1 += p[jg];
    this.worthPP += L[jg];
    if (jg === 5) {
      this.combo = 0;
      this.missAt = jH;
    } else {
      this.combo++;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }
      this.comboPortion += n[jg] * S(this.combo);
      this.comboAt = jH;
    }
    if (this.errN < this.errMs.length) {
      let l1 = this.errN++;
      this.errMs[l1] = jg === 5 ? NaN : jz;
      this.errAt[l1] = jQ ? this.end[jr] : this.time[jr];
      this.errJ[l1] = jg;
      this.errLane[l1] = l0;
    }
    this.hp = Math.min(1, this.hp + this.hpDelta[jg]);
    if (this.hp <= 0) {
      this.hp = 0;
      if (this.noFail) {
        this.wouldFail = true;
      } else if (!this.failed) {
        this.failed = true;
        this.failAt = jH;
      }
    }
    this.lastJ = jg;
    this.lastJAt = jH;
    this.lastErr = jz;
    if (jg !== 5) {
      this.laneHitAt[l0] = jH;
      this.laneHitJ[l0] = jg;
    }
    if (this.onJudge) {
      this.onJudge(jg, l0, jz, jQ, jH);
    }
  }
  missNote(jr, jg) {
    this.head[jr] = 5;
    this.judge(jr, 5, 0, false, jg);
    if (this.end[jr] > 0) {
      this.tail[jr] = 5;
      this.judge(jr, 5, 0, true, jg);
    }
    this.state[jr] = 3;
  }
  update(jr) {
    if (this.failed) {
      return;
    }
    this.lastT = jr;
    let jg = this.win[4];
    for (let jz = 0; jz < this.keys; jz++) {
      let jQ = this.holding[jz];
      if (jQ >= 0 && jr >= this.end[jQ]) {
        this.holding[jz] = -1;
        let l0 = this.capped[jQ] ? 4 : 0;
        this.tail[jQ] = l0;
        this.state[jQ] = 2;
        this.judge(jQ, l0, 0, true, this.end[jQ]);
        if (this.failed) {
          return;
        }
      }
      let jH = this.broken[jz];
      if (jH >= 0 && jr > this.end[jH] + this.twin[4] && (this.broken[jz] = -1, this.tail[jH] = 5, this.state[jH] = 3, this.judge(jH, 5, 0, true, this.end[jH] + this.twin[4]), this.failed)) {
        return;
      }
      while (true) {
        let l1 = this.nextIn(jz);
        if (l1 < 0 || jr - this.time[l1] <= jg) {
          break;
        }
        this.missNote(l1, this.time[l1] + jg);
        if (this.failed) {
          return;
        }
      }
    }
  }
  press(jr, jg) {
    if (jr < 0 || jr >= this.keys || this.failed || (this.update(jg), this.down[jr])) {
      return -1;
    }
    this.down[jr] = 1;
    this.laneDownAt[jr] = jg;
    this.presses[jr]++;
    let jz = this.broken[jr];
    if (jz >= 0 && jg < this.end[jz]) {
      this.broken[jr] = -1;
      this.holding[jr] = jz;
      this.state[jz] = 1;
      this.capped[jz] = 1;
      return -1;
    }
    let jQ = this.nextIn(jr);
    if (jQ < 0) {
      return -1;
    }
    let jH = jg - this.time[jQ];
    if (jH < -this.win[5]) {
      return -1;
    }
    if (jH < -this.win[4]) {
      this.missNote(jQ, jg);
      return 5;
    }
    let l0 = this.classify(Math.abs(jH));
    if (l0 < 0) {
      return -1;
    } else {
      this.head[jQ] = l0;
      this.judge(jQ, l0, jH, false, jg);
      if (this.end[jQ] > 0) {
        this.state[jQ] = 1;
        this.holding[jr] = jQ;
      } else {
        this.state[jQ] = 2;
      }
      return l0;
    }
  }
  release(jr, jg) {
    if (jr < 0 || jr >= this.keys) {
      return -1;
    }
    this.update(jg);
    this.down[jr] = 0;
    let jz = this.holding[jr];
    if (jz < 0 || this.failed) {
      return -1;
    }
    this.holding[jr] = -1;
    let jQ = jg - this.end[jz];
    if (jQ < -this.twin[4]) {
      this.state[jz] = 4;
      this.broken[jr] = jz;
      this.breaks++;
      this.combo = 0;
      this.missAt = jg;
      return -2;
    }
    let jH = Math.max(0, this.classify(Math.abs(jQ), true));
    if (this.capped[jz]) {
      jH = Math.max(jH, 4);
    }
    this.tail[jz] = jH;
    this.state[jz] = 2;
    this.judge(jz, jH, jQ, true, jg);
    return jH;
  }
  stats() {
    let jr = 0;
    let jg = 0;
    let jz = 0;
    let jQ = 0;
    let jH = 0;
    for (let l2 = 0; l2 < this.errN; l2++) {
      let l3 = this.errMs[l2] / this.rate;
      if (l3 === l3) {
        jr++;
        jg += l3;
        jz += l3 * l3;
        if (l3 < 0) {
          jQ++;
        } else if (l3 > 0) {
          jH++;
        }
      }
    }
    let l0 = jr ? jg / jr : 0;
    let l1 = jr > 1 ? Math.sqrt(Math.max(0, jz / jr - l0 * l0)) : 0;
    return {
      hits: jr,
      mean: l0,
      ur: l1 * 10,
      early: jQ,
      late: jH
    };
  }
  result() {
    let jr = this.stats();
    let jg = this.judged ? this.worthPP / (this.judged * 320) : 1;
    return {
      score: this.score,
      accuracy: this.accuracy,
      accuracyV1: this.accuracyV1,
      grade: this.grade,
      maxCombo: this.maxCombo,
      counts: Array.from(this.counts),
      total: this.total,
      judged: this.judged,
      failed: this.failed,
      breaks: this.breaks,
      wouldFail: this.wouldFail,
      fullCombo: this.fullCombo,
      perfect: this.complete && this.accuracy >= 1,
      mean: jr.mean,
      ur: jr.ur,
      early: jr.early,
      late: jr.late,
      acc320: jg,
      mods: this.mi.mods || []
    };
  }
};
v(r, "ManiaPlay");
var P0 = r;
function P1(jr, jg = null, jz = null) {
  let jQ = jr.keys || 4;
  let jH = jz ? jz.lane : jr.lane;
  let l0 = jz ? jz.end : jr.end;
  let l1 = [];
  let l2 = new Float64Array(jQ).fill(-1000000000);
  let l3 = new Float64Array(jr.count).fill(Infinity);
  let l4 = new Float64Array(jQ).fill(Infinity);
  for (let l5 = jr.count - 1; l5 >= 0; l5--) {
    let l6 = jH[l5];
    l3[l5] = l4[l6];
    l4[l6] = jr.time[l5];
  }
  for (let l8 = 0; l8 < jr.count; l8++) {
    let l9 = jH[l8];
    let lP = jg ? jg(l8) : 0;
    if (lP === null) {
      continue;
    }
    let lw = Math.max(jr.time[l8] + lP, l2[l9] + 1);
    let lj = l0[l8] > 0 ? l0[l8] : Math.min(lw + 40, (lw + l3[l8]) / 2);
    l1.push([lw, l9, 1], [Math.max(lw + 1, lj), l9, 0]);
    l2[l9] = Math.max(lw + 1, lj);
  }
  l1.sort((ll, lD) => ll[0] - lD[0] || ll[2] - lD[2]);
  return l1;
}
v(P1, "autoEvents");
var P2 = class lM {
  constructor(jr, jg = false) {
    let jz = [];
    let jQ = [];
    let jH = jg ? [] : jr.timing || [];
    let l0 = jH.filter(l5 => l5.uninherited && l5.beatLength > 0);
    let l1 = jr.bpm && jr.bpm.main > 0 ? 60000 / jr.bpm.main : l0.length ? l0[0].beatLength : 500;
    let l2 = l0.length ? l0[0].beatLength : l1;
    let l3 = 1;
    for (let l5 = 0; l5 < jH.length; l5++) {
      let l6 = jH[l5];
      if (l6.uninherited && l6.beatLength > 0) {
        l2 = l6.beatLength;
        l3 = 1;
      } else if (l6.beatLength < 0) {
        l3 = Math.max(0.01, Math.min(10, -100 / l6.beatLength));
      }
      let l8 = l1 / l2 * l3;
      if (jz.length && jz[jz.length - 1] === l6.t) {
        jQ[jQ.length - 1] = l8;
      } else if (!jQ.length || jQ[jQ.length - 1] !== l8) {
        jz.push(l6.t);
        jQ.push(l8);
      }
    }
    if (!jz.length) {
      jz.push(0);
      jQ.push(1);
    }
    let l4 = jz.length;
    this.t0 = Float64Array.from(jz);
    this.sp = Float64Array.from(jQ);
    this.p0 = new Float64Array(l4);
    for (let l9 = 1; l9 < l4; l9++) {
      this.p0[l9] = this.p0[l9 - 1] + (this.t0[l9] - this.t0[l9 - 1]) * this.sp[l9 - 1];
    }
    this.n = l4;
    this.i = 0;
    this.constant = jg || l4 === 1 && jQ[0] === 1;
  }
  pos(jr) {
    let jg = this.t0;
    let jz = this.i;
    if (jr < jg[jz]) {
      while (jz > 0 && jr < jg[jz]) {
        jz--;
      }
    } else {
      while (jz + 1 < this.n && jr >= jg[jz + 1]) {
        jz++;
      }
    }
    this.i = jz;
    return this.p0[jz] + (jr - jg[jz]) * this.sp[jz];
  }
  posAt(jr) {
    let jg = 0;
    let jz = this.n - 1;
    while (jg < jz) {
      let jQ = jg + jz + 1 >> 1;
      if (this.t0[jQ] <= jr) {
        jg = jQ;
      } else {
        jz = jQ - 1;
      }
    }
    return this.p0[jg] + (jr - this.t0[jg]) * this.sp[jg];
  }
  speedAt(jr) {
    let jg = 0;
    let jz = this.n - 1;
    while (jg < jz) {
      let jQ = jg + jz + 1 >> 1;
      if (this.t0[jQ] <= jr) {
        jg = jQ;
      } else {
        jz = jQ - 1;
      }
    }
    return this.sp[jg];
  }
  notePositions(jr) {
    let jg = jr.n;
    let jz = new Float64Array(jg);
    let jQ = new Float64Array(jg);
    for (let jH = 0; jH < jg; jH++) {
      jz[jH] = this.posAt(jr.time[jH]);
      jQ[jH] = jr.end[jH] > 0 ? this.posAt(jr.end[jH]) : jz[jH];
    }
    return {
      head: jz,
      tail: jQ
    };
  }
};
v(P2, "ScrollMap");
var P3 = P2;
function P4(jr, jg, jz, jQ) {
  let jH = jr.timing;
  let l0 = 0;
  if (!jH || !jH.length) {
    return 0;
  }
  let l1 = jr._red ||= jH.filter(l2 => l2.uninherited && l2.beatLength > 0);
  for (let l2 = 0; l2 < l1.length && l0 < jQ.length; l2++) {
    let l3 = l1[l2];
    let l4 = l2 + 1 < l1.length ? l1[l2 + 1].t : Infinity;
    if (l4 < jg || l3.t > jz) {
      continue;
    }
    let l5 = l3.beatLength;
    while (l5 < 150) {
      l5 *= 2;
    }
    while (l5 > 2000) {
      l5 /= 4;
    }
    let l6 = Math.max(l3.t, jg);
    let l8 = Math.ceil((l6 - l3.t) / l5);
    let l9 = Math.max(1, Math.round((l3.meter || 4) * l3.beatLength / l5));
    for (let lP = l8;; lP++) {
      let lw = l3.t + lP * l5;
      if (lw >= l4 || lw > jz || l0 >= jQ.length) {
        break;
      }
      jQ[l0++] = lP % l9 === 0 ? -lw - 0.001 : lw;
    }
  }
  return l0;
}
v(P4, "beatLines");
function P5(jr, jg = 1) {
  let jz = jr.count;
  let jQ = jr.keys || 4;
  if (jz < 2) {
    return 0;
  }
  let jH = jr.time;
  let l0 = jr.end;
  let l1 = jr.lane;
  let l2 = 400;
  let l3 = new Float64Array(jQ);
  let l4 = new Float64Array(jQ);
  let l5 = new Float64Array(jQ);
  let l6 = 1;
  let l8 = 0;
  let l9 = 0;
  let lP = [];
  let lw = 0;
  let lj = 0;
  let ll = (lf, lR, lu) => lf * Math.pow(lu, lR / 1000);
  for (let lf = 1; lf < jz; lf++) {
    let lR = jH[lf] / jg;
    let lu = (l0[lf] > 0 ? l0[lf] : jH[lf]) / jg;
    let lv = l1[lf];
    let lc = (jH[lf] - jH[lf - 1]) / jg;
    for (lf === 1 && (lw = Math.ceil(lR / l2) * l2); lR > lw;) {
      lP.push(lj);
      lj = l9;
      lw += l2;
    }
    let lZ = false;
    let la = Math.abs(lu - lR);
    let lY = 1;
    let ln = 0;
    for (let lp = 0; lp < jQ; lp++) {
      lZ = lZ || l4[lp] > lR + 1 && lu > l4[lp] + 1;
      if (l4[lp] > lu + 1) {
        lY = 1.25;
      }
      la = Math.min(la, Math.abs(lu - l4[lp]));
    }
    if (lZ) {
      ln = 1 / (1 + Math.exp((30 - la) * 0.5));
    }
    l5[lv] = ll(l5[lv], lR - l3[lv], 0.125) + lY * 2;
    l8 = lc <= 1 ? Math.max(l8, l5[lv]) : l5[lv];
    l6 = ll(l6, lc, 0.3) + (1 + ln) * lY;
    l3[lv] = lR;
    l4[lv] = lu;
    l9 = l8 + l6;
    if (l9 > lj) {
      lj = l9;
    }
  }
  lP.push(lj);
  lP.sort((lK, lU) => lU - lK);
  let lD = 0;
  let lO = 1;
  for (let lK of lP) {
    if (lK <= 0) {
      break;
    }
    lD += lK * lO;
    lO *= 0.9;
  }
  return lD * 0.018;
}
v(P5, "starRating");
function P6(jr) {
  if (jr < 2) {
    return "#ffffff";
  } else if (jr < 3.3) {
    return "#7ad17a";
  } else if (jr < 4.5) {
    return "#ffff00";
  } else if (jr < 5.6) {
    return "#ffa040";
  } else if (jr < 7) {
    return "#ff4040";
  } else {
    return "#ff00ff";
  }
}
v(P6, "starColor");
function P7(jr, jg, jz, jQ = []) {
  let jH = Math.pow(Math.max(jr - 0.15, 0.05), 2.2) * 8 * Math.max(0, jg * 5 - 4) * (1 + Math.min(1, jz / 1500) * 0.1);
  if (jQ.includes("NF")) {
    jH *= 0.75;
  }
  if (jQ.includes("EZ")) {
    jH *= 0.5;
  }
  return jH;
}
v(P7, "ppEstimate");
async function P8(jr, jg, jz, jQ = {}) {
  let jH = jr[0].length;
  let l0 = jr.length;
  let l1 = Math.round(jz * 0.015) * 2;
  let l2 = l1 >> 1;
  let l3 = l2 * jg;
  let l4 = Math.round(jz * 0.005);
  let l5 = l1 / 2 * (jg - 1);
  let l6 = Math.max(1, Math.floor(jH / jg));
  let l8 = [];
  for (let lR = 0; lR < l0; lR++) {
    l8.push(new Float32Array(l6 + l1));
  }
  let l9 = new Float32Array(l1);
  for (let lu = 0; lu < l1; lu++) {
    l9[lu] = 0.5 - Math.cos(Math.PI * 2 * lu / l1) * 0.5;
  }
  let lP = jr[0];
  let lw = l0 > 1 ? jr[1] : null;
  let lj = l2;
  let ll = 0;
  let lD = Math.ceil(l6 / l2) + 1;
  let lO = jQ.slice || 400;
  let lf = (lv, lc, lZ) => {
    let la = 0;
    let lY = 0;
    let ln = 0;
    for (let lp = 0; lp < lj; lp += lZ) {
      let lK = lv + lp;
      let lU = lc + lp;
      let lL = lK < jH && lK >= 0 ? lw ? lP[lK] + lw[lK] : lP[lK] : 0;
      let lo = lU < jH && lU >= 0 ? lw ? lP[lU] + lw[lU] : lP[lU] : 0;
      la += lL * lo;
      lY += lL * lL;
      ln += lo * lo;
    }
    return la / Math.sqrt(lY * ln + 1e-9);
  };
  for (let lv = 0; lv < lD; lv++) {
    let lc = Math.round(lv * l3 + l5);
    let lZ = lc;
    if (lv > 0) {
      let lY = ll + l2;
      let ln = 0;
      let lp = -2;
      for (let lU = -l4; lU <= l4; lU += 8) {
        let lL = lf(lc + lU, lY, 8);
        if (lL > lp) {
          lp = lL;
          ln = lU;
        }
      }
      let lK = ln;
      for (let lo = lK - 7; lo <= lK + 7; lo++) {
        if (lo < -l4 || lo > l4) {
          continue;
        }
        let lA = lf(lc + lo, lY, 2);
        if (lA > lp) {
          lp = lA;
          ln = lo;
        }
      }
      lZ = lc + ln;
    }
    lZ = Math.max(0, Math.min(jH - 1, lZ));
    let la = lv * l2;
    for (let lX = 0; lX < l0; lX++) {
      let lJ = jr[lX];
      let lT = l8[lX];
      let lW = Math.min(l1, jH - lZ, lT.length - la);
      for (let lm = 0; lm < lW; lm++) {
        lT[la + lm] += lJ[lZ + lm] * l9[lm];
      }
    }
    ll = lZ;
    if (jQ.onProgress && lv % 200 === 0) {
      jQ.onProgress(lv / lD);
    }
    if (lv % lO === lO - 1) {
      await new Promise(lx => setTimeout(lx, 0));
    }
  }
  return l8.map(lx => lx.subarray(0, l6));
}
v(P8, "timeStretch");
var P9 = ["DELTARUNE", "BARS", "CIRCLE", "DIAMOND", "ARROWS"];
var PP = ["DELTARUNE", "PARTY", "SOUL", "MONO"];
var Pw = {
  DELTARUNE: {
    O: "#01ea9e",
    E: "#17eeff",
    S: "#ffff00"
  },
  PARTY: {
    O: "#00ffff",
    E: "#ff00ff",
    S: "#ffff00"
  },
  MONO: {
    O: "#ffffff",
    E: "#a0a0a0",
    S: "#ffff00"
  }
};
var Pj = ["#ff0000", "#fca600", "#ffff00", "#00c000", "#42fcff", "#3c6cff", "#d535d9"];
var Pl = {
  white: "#ffffff",
  gray: "#808080",
  dk: "#404040",
  faint: "#303030",
  yellow: "#ffff00",
  orange: "#ffa040",
  maroon: "#800000",
  purple: "#332033",
  red: "#ff4040",
  cyan: "#00ffff",
  green: "#7ad17a",
  gold: "#e0c060",
  light: "#c0c0c0"
};
function PD(jr, jg, jz, jQ, jH = Pl.white, l0 = "fnt_main", l1 = "left") {
  jr.draw_set_font(l0);
  jr.draw_set_halign(l1);
  jr.draw_text(Math.round(jg), Math.round(jz), jQ, jH);
  jr.draw_set_halign("left");
}
v(PD, "txt");
var PM = new Map();
function PO(jr, jg, jz, jQ = "fnt_main") {
  jg = String(jg);
  let jH = jQ + "|" + jz + "|" + jg;
  let l0 = PM.get(jH);
  if (l0 !== undefined) {
    return l0;
  }
  if (jr.string_width(jg, jQ) <= jz) {
    l0 = jg;
  } else {
    let l1 = 0;
    let l2 = jg.length;
    while (l1 < l2) {
      let l3 = l1 + l2 + 1 >> 1;
      if (jr.string_width(jg.slice(0, l3) + "...", jQ) <= jz) {
        l1 = l3;
      } else {
        l2 = l3 - 1;
      }
    }
    l0 = jg.slice(0, l1) + "...";
  }
  if (PM.size > 3000) {
    PM.clear();
  }
  PM.set(jH, l0);
  return l0;
}
v(PO, "fit");
function Pf(jr, jg, jz, jQ, jH, l0 = 0, l1 = 1) {
  let l2 = jr.ctx;
  l2.globalAlpha = l1;
  l2.fillStyle = "#000000";
  l2.fillRect(jg + 6, jz + 6, jQ - jg - 12, jH - jz - 12);
  l2.globalAlpha = 1;
  let l3 = Math.max(0, jQ - jg - 63);
  let l4 = Math.max(0, jH - jz - 63);
  let l5 = "#ffffff";
  if (l3 > 0) {
    jr.draw_sprite_ext("spr_textbox_top", 0, jg + 32, jz, l3, 2, 0, l5, 1);
    jr.draw_sprite_ext("spr_textbox_top", 0, jg + 32, jH + 1, l3, -2, 0, l5, 1);
  }
  if (l4 > 0) {
    jr.draw_sprite_ext("spr_textbox_left", 0, jQ + 1, jz + 32, -2, l4, 0, l5, 1);
    jr.draw_sprite_ext("spr_textbox_left", 0, jg, jz + 32, 2, l4, 0, l5, 1);
  }
  let l6 = Math.floor(l0 / 100) % 8;
  jr.draw_sprite_ext("spr_textbox_topleft", l6, jg, jz, 2, 2, 0, l5, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l6, jQ + 1, jz, -2, 2, 0, l5, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l6, jg, jH + 1, 2, -2, 0, l5, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l6, jQ + 1, jH + 1, -2, -2, 0, l5, 1);
}
v(Pf, "darkbox");
function PR(jr, jg, jz, jQ, jH, l0 = Pl.dk, l1 = "#000000", l2 = 1) {
  jg = Math.round(jg);
  jz = Math.round(jz);
  jQ = Math.round(jQ);
  jH = Math.round(jH);
  if (l1) {
    jr.globalAlpha = l2;
    jr.fillStyle = l1;
    jr.fillRect(jg, jz, jQ, jH);
    jr.globalAlpha = 1;
  }
  if (l0) {
    jr.fillStyle = l0;
    jr.fillRect(jg, jz, jQ, 1);
    jr.fillRect(jg, jz + jH - 1, jQ, 1);
    jr.fillRect(jg, jz, 1, jH);
    jr.fillRect(jg + jQ - 1, jz, 1, jH);
  }
}
v(PR, "plainBox");
function Pu(jr, jg, jz) {
  jr.draw_sprite_ext("spr_heart", 0, Math.round(jg), Math.round(jz), 1, 1, 0, "#ffffff", 1);
}
v(Pu, "soul");
function Pv(jr, jg, jz, jQ, jH, l0, l1, l2 = Pl.maroon) {
  jg = Math.round(jg);
  jz = Math.round(jz);
  jr.fillStyle = l2;
  jr.fillRect(jg, jz, jQ, jH);
  let l3 = Math.round(jQ * Math.max(0, Math.min(1, l0)));
  if (l3 > 0) {
    jr.fillStyle = l1;
    jr.fillRect(jg, jz, l3, jH);
  }
}
v(Pv, "hudBar");
function Pc(jr, jg) {
  if (jg % 2 === 1 && jr === (jg - 1) / 2) {
    return "S";
  } else if (Math.min(jr, jg - 1 - jr) % 2 === 0) {
    return "O";
  } else {
    return "E";
  }
}
v(Pc, "laneType");
function PZ(jr, jg) {
  let jz = parseInt(jr.slice(1), 16);
  let jQ = jz >> 16;
  let jH = jz >> 8 & 255;
  let l0 = jz & 255;
  let l1 = l2 => Math.round(jg >= 0 ? l2 + (255 - l2) * jg : l2 * (1 + jg));
  return "#" + [l1(jQ), l1(jH), l1(l0)].map(l2 => l2.toString(16).padStart(2, "0")).join("");
}
v(PZ, "shade");
var Pe = v((jr, jg) => {
  let jz = parseInt(jr.slice(1), 16);
  return "rgba(" + (jz >> 16) + "," + (jz >> 8 & 255) + "," + (jz & 255) + "," + jg + ")";
}, "rgba");
function Pa(jr, jg = "DELTARUNE") {
  let jz = [];
  for (let jQ = 0; jQ < jr; jQ++) {
    let jH;
    if (jg === "SOUL") {
      jH = Pj[(jr <= 7 ? Math.round(jQ * 6 / Math.max(1, jr - 1)) : jQ) % Pj.length];
    } else {
      jH = (Pw[jg] || Pw.DELTARUNE)[Pc(jQ, jr)];
    }
    jz.push({
      base: jH,
      light: PZ(jH, 0.5),
      dark: PZ(jH, -0.5),
      deep: PZ(jH, -0.8),
      type: Pc(jQ, jr)
    });
  }
  return jz;
}
v(Pa, "laneColors");
function PY(jr, jg = {}, jz = 1) {
  let jQ = jr;
  let jH = Math.round(Math.min(56, Math.max(26, 380 / jQ)));
  let l0 = jg.colW > 0 ? Math.max(20, Math.min(80, jg.colW)) : jH;
  let l1 = Math.min(620, l0 * jQ);
  let l2 = l1 / jQ;
  let l3 = Math.round(320 - l1 / 2);
  let l4 = jg.scrollDir === "UP";
  let l5 = Math.max(20, Math.min(240, jg.hitPos ?? 70));
  let l6 = l4 ? l5 : 480 - l5;
  let l8 = l4 ? 480 : 0;
  let l9 = jg.speedMode === "MS" ? Math.max(150, Math.min(6000, jg.scrollMs || 900)) : 11485 / Math.max(1, Math.min(40, jg.speed || 22));
  let lP = l9 * jz;
  let lw = Math.abs(l6 - l8);
  let lj = {
    keys: jQ,
    colW: l2,
    x0: l3,
    x1: l3 + l1,
    width: l1,
    cx: 320,
    up: l4,
    dir: l4 ? 1 : -1,
    hitY: l6,
    far: l8,
    top: 0,
    bottom: 480,
    span: lw,
    visMs: lP,
    visReal: l9,
    pxPerMs: lw / lP,
    noteSize: Math.max(0.4, Math.min(2, jg.noteSize || 1)),
    laneX: new Float32Array(jQ),
    judgeY: l4 ? l6 + (jg.judgePos ?? 120) : l6 - (jg.judgePos ?? 120),
    sudden: Math.max(0, Math.min(0.9, (jg.sudden || 0) / 100)),
    hidden: Math.max(0, Math.min(0.9, (jg.hidden || 0) / 100))
  };
  for (let ll = 0; ll < jQ; ll++) {
    lj.laneX[ll] = l3 + l2 * (ll + 0.5);
  }
  return lj;
}
v(PY, "computeLayout");
function Pn(jr, jg, jz, jQ, jH, l0 = 0) {
  if (l0 <= 0 || !jr.arcTo) {
    jr.beginPath();
    jr.moveTo(jg, jz - jH / 2);
    jr.lineTo(jg + jQ / 2, jz);
    jr.lineTo(jg, jz + jH / 2);
    jr.lineTo(jg - jQ / 2, jz);
    jr.closePath();
    return;
  }
  let l1 = jg;
  let l2 = jz - jH / 2;
  let l3 = jg + jQ / 2;
  let l4 = jz;
  let l5 = jg;
  let l6 = jz + jH / 2;
  let l8 = jg - jQ / 2;
  let l9 = jz;
  jr.beginPath();
  jr.moveTo((l8 + l1) / 2, (l9 + l2) / 2);
  jr.arcTo(l1, l2, l3, l4, l0);
  jr.arcTo(l3, l4, l5, l6, l0);
  jr.arcTo(l5, l6, l8, l9, l0);
  jr.arcTo(l8, l9, l1, l2, l0);
  jr.closePath();
}
v(Pn, "diamond");
var Pp = [[0, 1], [1, 0.02], [0.42, 0.02], [0.42, -1], [-0.42, -1], [-0.42, 0.02], [-1, 0.02]];
function PK(jr, jg, jz, jQ, jH) {
  let l0 = Math.cos(jH);
  let l1 = Math.sin(jH);
  let l2 = jQ / 2;
  jr.beginPath();
  for (let l3 = 0; l3 < Pp.length; l3++) {
    let l4 = Pp[l3][0] * l2;
    let l5 = Pp[l3][1] * l2;
    let l6 = jg + l4 * l0 - l5 * l1;
    let l8 = jz + l4 * l1 + l5 * l0;
    if (l3) {
      jr.lineTo(l6, l8);
    } else {
      jr.moveTo(l6, l8);
    }
  }
  jr.closePath();
}
v(PK, "arrow");
var PU = [Math.PI / 2, 0, Math.PI, -Math.PI / 2];
var PL = v((jr, jg) => PU[jg === 4 ? jr : jr % 4], "arrowRot");
function Po(jr, jg, jz, jQ, jH, l0) {
  l0 = Math.max(0, Math.min(l0, jQ / 2, jH / 2));
  jr.beginPath();
  if (l0 <= 0 || !jr.arcTo) {
    jr.rect(jg, jz, jQ, jH);
    return;
  }
  jr.moveTo(jg + l0, jz);
  jr.arcTo(jg + jQ, jz, jg + jQ, jz + jH, l0);
  jr.arcTo(jg + jQ, jz + jH, jg, jz + jH, l0);
  jr.arcTo(jg, jz + jH, jg, jz, l0);
  jr.arcTo(jg, jz, jg + jQ, jz, l0);
  jr.closePath();
}
v(Po, "roundBar");
var PA = v(jr => {
  let jg = 1 - Math.max(0, Math.min(1, jr));
  return 1 - jg * jg * jg;
}, "easeOut3");
function PX(jr, jg) {
  let jz = jg.colW;
  let jQ = jg.noteSize;
  let jH = Math.max(6, jz - 2);
  switch (jr) {
    case "CIRCLE":
      {
        let l0 = Math.min(jH, Math.min(jz - 4, 34) * jQ);
        return [l0, l0];
      }
    case "DIAMOND":
      {
        let l1 = Math.min(jH, Math.min(jz - 4, 44) * jQ);
        return [l1, l1 * 0.62];
      }
    case "ARROWS":
      {
        let l2 = Math.min(jH, Math.min(jz - 4, 38) * jQ);
        return [l2, l2];
      }
    case "DELTARUNE":
      return [Math.min(jz - 4, 34) * jQ, jQ * 10];
    default:
      return [jz - 4, Math.max(6, jQ * 12)];
  }
}
v(PX, "noteBox");
var PJ = {
  base: "#6a6a6a",
  light: "#9a9a9a",
  dark: "#383838",
  deep: "#202020"
};
var Pt = {
  base: "#606060",
  light: "#909090",
  dark: "#303030",
  deep: "#202020"
};
var PT = "rgba(0,0,0,0.6)";
function PW(jr, jg, jz, jQ) {
  if (!jr.createLinearGradient) {
    return jg.base;
  }
  let jH = jr.createLinearGradient(0, jz - jQ / 2, 0, jz + jQ / 2);
  jH.addColorStop(0, jg.light);
  jH.addColorStop(0.45, jg.base);
  jH.addColorStop(1, PZ(jg.base, -0.28));
  return jH;
}
v(PW, "bodyFill");
function Pm(jr, jg, jz, jQ, jH, l0, l1, l2, l3 = 0) {
  if (jg === "CIRCLE") {
    jr.beginPath();
    jr.arc(jz, jQ, Math.max(0.5, jH / 2 - l3), 0, Math.PI * 2);
  } else if (jg === "DIAMOND") {
    Pn(jr, jz, jQ, Math.max(1, jH - l3 * 2), Math.max(1, l0 - l3 * 2 * (l0 / jH)), Math.max(0.5, l0 * 0.14));
  } else {
    PK(jr, jz, jQ, Math.max(1, jH - l3 * 2), PL(l1, l2));
  }
}
v(Pm, "headPath");
function Px(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4) {
  let l5 = l4 ? jg === "BARS" ? Pt : PJ : l1;
  if (jg === "BARS") {
    let l6 = Math.round(jz - jH / 2);
    let l8 = Math.round(jQ - l0 / 2);
    let l9 = Math.round(jH);
    let lP = Math.round(l0);
    jr.fillStyle = "#000000";
    jr.fillRect(l6 - 1, l8 - 1, l9 + 2, lP + 2);
    jr.fillStyle = l5.base;
    jr.fillRect(l6, l8, l9, lP);
    jr.fillStyle = l5.light;
    jr.fillRect(l6, l8, l9, 2);
    jr.fillStyle = l5.dark;
    jr.fillRect(l6, l8 + lP - 2, l9, 2);
    return;
  }
  jr.lineJoin = "round";
  jr.lineCap = "round";
  Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0);
  jr.lineWidth = 2.5;
  jr.strokeStyle = PT;
  jr.stroke();
  Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25);
  jr.fillStyle = PW(jr, l5, jQ, l0);
  jr.fill();
  jr.lineWidth = 1.5;
  jr.strokeStyle = l4 ? "#a0a0a0" : "#ffffff";
  jr.stroke();
  if (jg === "CIRCLE" && jH >= 16) {
    jr.beginPath();
    jr.arc(jz, jQ, jH * 0.26, 0, Math.PI * 2);
    jr.lineWidth = 1;
    jr.strokeStyle = "rgba(255,255,255,0.32)";
    jr.stroke();
  }
}
v(Px, "paintNote");
function PI(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4, l5) {
  let l6 = l4 ? "#707070" : l1.light;
  if (jg === "BARS") {
    jr.fillStyle = l6;
    jr.fillRect(Math.round(jz - jH * 0.42), Math.round(jQ - l0 * 0.25), Math.round(jH * 0.84), Math.max(3, Math.round(l0 * 0.5)));
    return;
  }
  let l8 = Math.max(2, l5 / 2 + 1.5);
  jr.beginPath();
  jr.arc(jz, jQ, l8, 0, Math.PI * 2);
  jr.fillStyle = l4 ? "#505050" : l1.base;
  jr.fill();
  jr.lineWidth = 1.5;
  jr.strokeStyle = l6;
  jr.stroke();
}
v(PI, "paintTail");
function Pb(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4, l5) {
  if (jg === "BARS") {
    let l6 = l4 ? "#ffffff" : "#808080";
    let l8 = Math.round(jz - l5 / 2 + 2);
    let l9 = Math.round(l5 - 4);
    jr.fillStyle = l4 ? l1.dark : "#101010";
    jr.fillRect(l8, jQ + 4, l9, 28);
    jr.fillStyle = l6;
    jr.fillRect(l8, jQ + 4, l9, 1);
    jr.fillRect(l8, jQ + 31, l9, 1);
    jr.fillRect(l8, jQ + 4, 1, 28);
    jr.fillRect(l8 + l9 - 1, jQ + 4, 1, 28);
    if (l4) {
      jr.fillStyle = l1.base;
      jr.fillRect(l8 + 3, jQ + 7, l9 - 6, 3);
    }
    return;
  }
  jr.lineJoin = "round";
  if (l4) {
    Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25);
    if (jr.createLinearGradient) {
      let lP = jr.createLinearGradient(0, jQ - l0 / 2, 0, jQ + l0 / 2);
      lP.addColorStop(0, l1.base);
      lP.addColorStop(1, l1.dark);
      jr.fillStyle = lP;
    } else {
      jr.fillStyle = l1.dark;
    }
    jr.globalAlpha = 0.85;
    jr.fill();
    jr.globalAlpha = 1;
    jr.lineWidth = 2;
    jr.strokeStyle = "#ffffff";
    jr.stroke();
  } else {
    Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0);
    jr.lineWidth = 2.5;
    jr.strokeStyle = PT;
    jr.stroke();
    Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25);
    jr.fillStyle = "rgba(255,255,255,0.05)";
    jr.fill();
    jr.lineWidth = 1.5;
    jr.strokeStyle = "#8a8a8a";
    jr.stroke();
    if (jH >= 14) {
      Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 4);
      jr.lineWidth = 1;
      jr.strokeStyle = PZ(l1.base, -0.35);
      jr.stroke();
    }
  }
}
v(Pb, "paintReceptor");
function PE(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4) {
  if (jg === "BARS") {
    jr.lineWidth = 2;
    jr.strokeStyle = l1.light;
    jr.strokeRect(Math.round(jz - l4 / 2 + 3) + 0.5, Math.round(jQ - l0 / 2) + 0.5, Math.round(l4 - 6) - 1, Math.round(l0) - 1);
    return;
  }
  jr.lineJoin = "round";
  Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1);
  jr.fillStyle = Pe(l1.light, 0.18);
  jr.fill();
  jr.lineWidth = 2;
  jr.strokeStyle = l1.light;
  jr.stroke();
}
v(PE, "paintBurst");
var PN = 2;
var PG = new Map();
var Py = 1200;
var Pq = v(jr => Math.max(1, Math.min(4, Math.round((jr > 0 && jr < 100 ? jr : PN) * 4) / 4)), "quantScale");
function PS(jr) {
  try {
    if (jr && jr.getTransform) {
      let jg = jr.getTransform();
      let jz = Math.max(Math.hypot(jg.a, jg.b), Math.hypot(jg.c, jg.d));
      if (jz > 0 && jz < 100) {
        return jz;
      }
    }
  } catch {}
  return PN;
}
v(PS, "deviceScale");
var PF = class lI {
  constructor(jr, jg, jz, jQ, jH = "", l0 = false) {
    this.doc = jr;
    this.w = jg;
    this.h = jz;
    this.paint = jQ;
    this.key = jH;
    this.crisp = l0;
    this.q = 0;
    this.cv = null;
  }
  canvasAt(jr) {
    let jg = this.crisp ? PN : Pq(jr);
    if (jg === this.q) {
      return this.cv;
    }
    this.q = jg;
    let jz = this.key ? this.key + "@" + jg : "";
    let jQ = jz ? PG.get(jz) : undefined;
    if (jQ === undefined) {
      jQ = null;
      try {
        let jH = this.doc;
        let l0 = jH && jH.createElement ? jH.createElement("canvas") : null;
        if (l0 && l0.getContext) {
          l0.width = Math.max(1, Math.ceil(this.w * jg));
          l0.height = Math.max(1, Math.ceil(this.h * jg));
          let l1 = l0.getContext("2d");
          if (l1) {
            l1.scale(jg, jg);
            this.paint(l1, this.w / 2, this.h / 2);
            jQ = l0;
          }
        }
      } catch {
        jQ = null;
      }
      if (jz) {
        for (PG.set(jz, jQ); PG.size > Py;) {
          PG.delete(PG.keys().next().value);
        }
      }
    }
    this.cv = jQ;
    return jQ;
  }
  draw(jr, jg, jz, jQ = 1, jH = 1, l0 = PN) {
    let l1 = this.canvasAt(l0);
    let l2 = this.w * jQ;
    let l3 = this.h * jH;
    let l4 = jg - l2 / 2;
    let l5 = jz - l3 / 2;
    if (l1) {
      let l6 = jQ !== 1 || jH !== 1 || Math.abs(this.q - l0) > 0.01;
      if (!this.crisp && !l6) {
        l4 = Math.round(l4 * l0) / l0;
        l5 = Math.round(l5 * l0) / l0;
      }
      if (l6 && !this.crisp) {
        jr.imageSmoothingEnabled = true;
        jr.drawImage(l1, l4, l5, l2, l3);
        jr.imageSmoothingEnabled = false;
      } else {
        jr.drawImage(l1, l4, l5, l2, l3);
      }
    } else {
      jr.save();
      jr.translate(l4, l5);
      jr.scale(jQ, jH);
      this.paint(jr, this.w / 2, this.h / 2);
      jr.restore();
    }
  }
};
v(PF, "Sprite");
var Pd = PF;
var PB = new Map();
function Ph(jr) {
  let jg = PB.get(jr);
  if (jg === undefined) {
    if (PB.size > 6000) {
      PB.clear();
    }
    jg = String(jr);
    PB.set(jr, jg);
  }
  return jg;
}
v(Ph, "numText");
var Pk = -1;
var PV = "";
function PC(jr) {
  if (jr !== Pk) {
    Pk = jr;
    PV = String(jr).padStart(7, "0");
  }
  return PV;
}
v(PC, "pad7");
var Pr = new Map();
function Pg(jr) {
  let jg = Math.round(jr * 10000);
  let jz = Pr.get(jg);
  if (!jz) {
    jz = (jg / 100).toFixed(2) + "%";
    if (Pr.size > 4000) {
      Pr.clear();
    }
    Pr.set(jg, jz);
  }
  return jz;
}
v(Pg, "pct");
var Pz = [];
var PQ = v(jr => Pz[jr] ||= String(jr).padStart(3, " ") + "/ 100", "hpText");
var PH = new Float32Array(4);
function w0(jr) {
  let jg = 0;
  let jz = 1;
  let jQ = 1;
  let jH = 1;
  if (jr < 260) {
    let l0 = jr / 260;
    jg = l0 * -64 * (1 - l0);
  } else if (jr < 380) {
    let l1 = (jr - 260) / 120;
    jg = l1 * -16 * (1 - l1);
  }
  if (jr > 560) {
    let l2 = Math.min(1, (jr - 560) / 180);
    jQ = 1 + l2 * 1.6;
    jz = 1 - l2 * 0.55;
    jH = 1 - l2;
  }
  PH[0] = jg;
  PH[1] = jz;
  PH[2] = jQ;
  PH[3] = jH;
  return PH;
}
v(w0, "dmgMotion");
var w1 = ["", "300", "200", "100", "50", ""];
function w2(jr, jg, jz, jQ, jH = 1, l0 = 1, l1 = 1) {
  if (jg === 0 || jg === 5) {
    jr.draw_sprite_ext("spr_battlemsg", jg === 0 ? 2 : 0, Math.round(jz + jH * 37), Math.round(jQ - l0 * 20), jH, l0, 0, jg === 0 ? "#ffff00" : "#c0c0c0", l1);
    return;
  }
  let l2 = w1[jg];
  let l3 = jr.alpha;
  jr.draw_set_alpha(l1);
  jr.draw_set_font("fnt_dmg");
  jr.draw_set_halign("center");
  jr.draw_set_color(o[jg]);
  jr.draw_text_transformed(Math.round(jz), Math.round(jQ - l0 * 28), l2, jH, l0, 0);
  jr.draw_set_halign("left");
  jr.draw_set_alpha(l3);
}
v(w2, "drawJudgeWord");
var w3 = class lb {
  constructor(jr = globalThis.document) {
    this.doc = jr;
    this.key = "";
    this.beatBuf = new Float64Array(256);
    this.heN = 48;
    this.heErr = new Float32Array(48);
    this.heAt = new Float64Array(48);
    this.heJ = new Uint8Array(48);
    this.heW = 0;
    this.heMean = 0;
    this.laneUpAt = null;
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  warm(jr, jg, jz = 1) {
    this.buildSprites(jr, jg, PY(jr, jg, jz));
  }
  setup(jr, jg, jz, jQ = {}) {
    let jH = jr.keys;
    let l0 = PY(jH, jz, jr.rate);
    this.play = jr;
    this.view = jg;
    this.cfg = jz;
    this.L = l0;
    this.buildSprites(jH, jz, l0);
    this.gradL = null;
    this.laneUpAt = new Float64Array(jH).fill(-1000000000);
    this.prevDown = new Uint8Array(jH);
    this.pressK = new Float32Array(jH);
    this.lastTr = -1;
    this.heW = 0;
    this.heMean = 0;
    this.heAt.fill(-1000000000);
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  buildSprites(jr, jg, jz) {
    let jQ = P9.includes(jg.skin) ? jg.skin : "DELTARUNE";
    let jH = PP.includes(jg.scheme) ? jg.scheme : "DELTARUNE";
    this.skin = jQ;
    this.scheme = jH;
    this.cols = Pa(jr, jH);
    let l0 = [jr, jQ, jH, jz.colW, jz.noteSize].join("|");
    if (l0 !== this.key) {
      this.key = l0;
      let [l1, l2] = PX(jQ, jz);
      this.nw = l1;
      this.nh = l2;
      let l3 = this.doc;
      this.notes = [];
      this.deadNotes = [];
      this.tails = [];
      this.deadTails = [];
      this.rec = [];
      this.recLit = [];
      this.burst = [];
      this.bodyW = jQ === "DELTARUNE" ? 8 : jQ === "BARS" ? Math.round(jz.colW - 10) : Math.max(4, Math.round(jQ === "CIRCLE" ? l1 * 0.56 : jQ === "DIAMOND" ? l1 * 0.42 : l1 * 0.46));
      if (jQ !== "DELTARUNE") {
        let l4 = jQ === "BARS";
        let l5 = this.bodyW;
        for (let l6 = 0; l6 < jr; l6++) {
          let l8 = this.cols[l6];
          let l9 = [jQ, l6 % 4, jr === 4 ? 4 : 0, l8.base, l1.toFixed(2), l2.toFixed(2), jz.colW.toFixed(2)].join("|");
          this.notes.push(new Pd(l3, l1 + 4, l2 + 4, (lD, lO, lf) => Px(lD, jQ, lO, lf, l1, l2, l8, l6, jr, false), l9 + "|note", l4));
          this.deadNotes.push(new Pd(l3, l1 + 4, l2 + 4, (lD, lO, lf) => Px(lD, jQ, lO, lf, l1, l2, l8, l6, jr, true), l9 + "|dead", l4));
          this.tails.push(new Pd(l3, l1 + 4, l2 + 4, (lD, lO, lf) => PI(lD, jQ, lO, lf, l1, l2, l8, l6, jr, false, l5), l9 + "|tail", l4));
          this.deadTails.push(new Pd(l3, l1 + 4, l2 + 4, (lD, lO, lf) => PI(lD, jQ, lO, lf, l1, l2, l8, l6, jr, true, l5), l9 + "|deadtail", l4));
          let lP = jQ === "BARS" ? jz.colW : l1;
          let lw = jQ === "BARS" ? 40 : l2;
          let lj = jQ === "BARS" ? -20 : 0;
          this.rec.push(new Pd(l3, lP + 4, lw + 4, (lD, lO, lf) => Pb(lD, jQ, lO, lf + lj, l1, l2, l8, l6, jr, false, jz.colW), l9 + "|rec", l4));
          this.recLit.push(new Pd(l3, lP + 4, lw + 4, (lD, lO, lf) => Pb(lD, jQ, lO, lf + lj, l1, l2, l8, l6, jr, true, jz.colW), l9 + "|reclit", l4));
          let ll = jQ === "BARS" ? Math.max(14, l2 + 6) : l2;
          this.burst.push(new Pd(l3, lP + 6, ll + 6, (lD, lO, lf) => PE(lD, jQ, lO, lf, l1, ll, l8, l6, jr, jz.colW), l9 + "|burst", l4));
        }
        for (let lD of [this.notes, this.deadNotes, this.tails, this.deadTails, this.rec, this.recLit, this.burst]) {
          for (let lO of lD) {
            lO.canvasAt(PN);
          }
        }
      }
    }
  }
  grads(jr) {
    let jg = this.L;
    if (this.gradL === jg && this.gradCtx === jr) {
      return;
    }
    this.gradL = jg;
    this.gradCtx = jr;
    let jz = jg.hitY;
    let jQ = jg.hitY + jg.dir * 120;
    this.laneLight = this.cols.map(jH => {
      let l0 = jr.createLinearGradient(0, jz, 0, jQ);
      l0.addColorStop(0, Pe(jH.base, 0.32));
      l0.addColorStop(1, Pe(jH.base, 0));
      return l0;
    });
  }
  yOf(jr, jg) {
    let jz = this.L;
    return jz.hitY + jz.dir * (jr - jg) * jz.pxPerMs;
  }
  draw(jr, jg, jz) {
    let jQ = jr.ctx;
    let jH = this.L;
    let l0 = this.play;
    let l1 = this.view;
    let l2 = l0.keys;
    let l3 = this.skin;
    let l4 = this.cfg;
    let l5 = l3 === "DELTARUNE";
    this.grads(jQ);
    let l6 = l1.scroll.pos(jg);
    let l8 = jH.x0;
    let l9 = jH.width;
    jQ.globalAlpha = l4.stageAlpha ?? 0.86;
    jQ.fillStyle = "#000000";
    jQ.fillRect(l8, 0, l9, 480);
    jQ.globalAlpha = 1;
    jQ.fillStyle = l5 ? "#202020" : "#1c1c1c";
    for (let lu = 1; lu < l2; lu++) {
      jQ.fillRect(Math.round(l8 + jH.colW * lu), 0, 1, 480);
    }
    if (l4.barlines !== false) {
      let lv = jH.span / jH.pxPerMs;
      let lc = P4(l0.chart, jg - 400, jg + lv * 4 + 400, this.beatBuf);
      for (let lZ = 0; lZ < lc; lZ++) {
        let la = this.beatBuf[lZ] < 0;
        let lY = la ? -this.beatBuf[lZ] : this.beatBuf[lZ];
        let ln = Math.round(this.yOf(l1.scroll.posAt(lY), l6));
        if (!(jH.up ? ln < jH.hitY || ln > 480 : ln > jH.hitY || ln < 0)) {
          jQ.fillStyle = la ? "#404040" : "#1c1c1c";
          jQ.fillRect(l8, ln, l9, 1);
        }
      }
    }
    if (jz.flash > 0 && !l4.lowSpec) {
      jQ.globalAlpha = jz.flash * 0.16;
      jQ.fillStyle = "#ff0000";
      jQ.fillRect(l8, 0, l9, 480);
      jQ.globalAlpha = 1;
    }
    let lP = jz.tReal;
    let lw = this.lastTr < 0 ? 16 : Math.max(0, Math.min(100, lP - this.lastTr));
    this.lastTr = lP;
    let lj = 1 - Math.exp(-lw / 22);
    let ll = 1 - Math.exp(-lw / 55);
    for (let lp = 0; lp < l2; lp++) {
      let lK = l0.down[lp] ? 1 : 0;
      let lU = this.pressK[lp];
      this.pressK[lp] = lU + (lK - lU) * (lK > lU ? lj : ll);
      if (this.pressK[lp] < 0.002) {
        this.pressK[lp] = 0;
      }
    }
    let lD = l5 || l3 === "BARS";
    let lO = lD ? PN : PS(jQ);
    this.dev = lO;
    for (let lL = 0; lL < l2; lL++) {
      let lo = l0.down[lL];
      if (this.prevDown[lL] && !lo) {
        this.laneUpAt[lL] = lP;
      }
      this.prevDown[lL] = lo;
      let lA;
      if (lD) {
        lA = lo ? 1 : Math.max(0, 1 - (lP - this.laneUpAt[lL]) / 120);
      } else {
        let lJ = lo ? 0 : Math.min(1, (lP - this.laneUpAt[lL]) / 170);
        lA = lo ? Math.max(0.35, this.pressK[lL]) : (1 - lJ) * (1 - lJ);
      }
      if (lA <= 0) {
        continue;
      }
      jQ.globalAlpha = lA;
      jQ.fillStyle = this.laneLight[lL];
      let lX = Math.round(l8 + jH.colW * lL);
      if (jH.up) {
        jQ.fillRect(lX, jH.hitY, Math.round(jH.colW), 120);
      } else {
        jQ.fillRect(lX, jH.hitY - 120, Math.round(jH.colW), 120);
      }
    }
    jQ.globalAlpha = 1;
    if (l5) {
      for (let lT = 0; lT < l2; lT++) {
        let lW = jH.laneX[lT];
        let lm = jH.colW / 40;
        jr.draw_sprite_ext("spr_rhythmgame_button", Pc(lT, l2) === "O" ? 0 : 1, lW, jH.hitY, lm, 1, 0, "#ffffff", 1);
        if (l0.down[lT]) {
          jr.draw_sprite_ext("spr_rhythmgame_button", 3, lW, jH.hitY, lm, 1, 0, "#ffffff", 0.85);
        }
      }
    } else {
      jQ.fillStyle = "#ffffff";
      jQ.fillRect(l8, jH.hitY - 1, l9, 1);
      if (l3 === "BARS") {
        for (let lx = 0; lx < l2; lx++) {
          (l0.down[lx] ? this.recLit[lx] : this.rec[lx]).draw(jQ, jH.laneX[lx], jH.hitY + (jH.up ? -20 : 20), 1, jH.up ? -1 : 1, lO);
        }
      } else {
        for (let lE = 0; lE < l2; lE++) {
          let lN = this.pressK[lE];
          let lG = 1 - lN * 0.07;
          if (lN < 0.98) {
            this.rec[lE].draw(jQ, jH.laneX[lE], jH.hitY, lG, lG, lO);
          }
          if (lN > 0.02) {
            jQ.globalAlpha = lN;
            this.recLit[lE].draw(jQ, jH.laneX[lE], jH.hitY, lG, lG, lO);
            jQ.globalAlpha = 1;
          }
        }
      }
    }
    jQ.save();
    jQ.beginPath();
    jQ.rect(l8, 0, l9, 480);
    jQ.clip();
    this.drawNotes(jr, jQ, jg, l6);
    jQ.restore();
    let lf = Math.min(0.9, jH.sudden + (l0.mi.fadeIn ? 0.45 : 0));
    let lR = Math.min(0.9, jH.hidden + (l0.mi.hidden ? 0.45 : 0));
    if (lf > 0 || lR > 0) {
      this.drawCover(jQ, lf, lR);
    }
    if (l4.hitLight !== false) {
      let ly = !lD;
      if (ly) {
        jQ.save();
        jQ.beginPath();
        jQ.rect(l8, 0, l9, 480);
        jQ.clip();
      }
      for (let lq = 0; lq < l2; lq++) {
        let lS = l0.holding[lq] >= 0;
        let lF = jg - l0.laneHitAt[lq];
        let ld = 0;
        let lB = 1;
        if (lD) {
          if (lS) {
            ld = 0.7;
            lB = 1.05;
          } else if (lF >= 0 && lF < l0.rate * 160) {
            let lh = 1 - lF / (l0.rate * 160);
            ld = lh;
            lB = 1 + (1 - lh) * 0.35;
            if (l0.laneHitJ[lq] > 1) {
              ld *= 0.6;
            }
          }
        } else if (lS) {
          let lk = lP % 900 / 900;
          ld = 0.55 + Math.sin(lk * Math.PI * 2) * 0.15;
          lB = 1.04 + Math.sin(lk * Math.PI * 2) * 0.02;
        } else {
          let lV = l0.rate * 220;
          if (lF >= 0 && lF < lV) {
            let lC = lF / lV;
            ld = (1 - lC) * (1 - lC);
            lB = 1 + PA(lC) * 0.45;
            if (l0.laneHitJ[lq] > 1) {
              ld *= 0.6;
            }
          }
        }
        if (!(ld <= 0)) {
          if (l5) {
            jr.draw_sprite_ext("spr_whitegradientdown_rhythm", l0.laneHitJ[lq] <= 1 ? 1 : 0, jH.laneX[lq], jH.hitY, ld * jH.colW / 40, 1, 0, "#ffffff", Math.min(1, ld));
          } else {
            jQ.globalAlpha = Math.min(1, ld);
            this.burst[lq].draw(jQ, jH.laneX[lq], jH.hitY, lB, lB, lO);
            jQ.globalAlpha = 1;
          }
        }
      }
      if (ly) {
        jQ.restore();
      }
    }
    jQ.fillStyle = jz.flash > 0.05 ? "#ff4040" : l5 ? "#17eeff" : "#808080";
    jQ.fillRect(l8 - 1, 0, 1, 480);
    jQ.fillRect(l8 + l9, 0, 1, 480);
    if (l5) {
      jQ.fillRect(l8 - 2, 0, 1, 480);
      jQ.fillRect(l8 + l9 + 1, 0, 1, 480);
    }
    if (!jz.hideHud) {
      this.drawJudgement(jr, jg, lP);
    }
    if (jz.showSoul !== false && l3 !== "BARS") {
      let lr = jz.soulX ?? jH.cx;
      let lg = jH.up ? jH.hitY - 30 : jH.hitY + 30;
      if ((!(jz.soulHurt > 0) || Math.floor(jz.soulHurt / 60) % 2 !== 0) && lg > 0 && lg < 470) {
        jr.draw_sprite_ext(jz.broken ? "spr_heartbreak" : "spr_heart", 0, Math.round(lr - (jz.broken ? 10 : 8)), lg - 8, 1, 1, 0, "#ffffff", 1);
      }
    }
  }
  drawCover(jr, jg, jz) {
    let jQ = this.L;
    let jH = jQ.x0;
    let l0 = jQ.width;
    jr.fillStyle = "#000000";
    let l1 = 24;
    if (jg > 0) {
      let l2 = jQ.span * jg;
      if (jQ.up) {
        jr.fillRect(jH, 480 - l2 + l1, l0, Math.max(0, l2 - l1));
        for (let l3 = 0; l3 < l1; l3 += 4) {
          jr.globalAlpha = 1 - l3 / l1;
          jr.fillRect(jH, 480 - l2 + l1 - l3 - 4, l0, 4);
        }
      } else {
        jr.fillRect(jH, 0, l0, Math.max(0, l2 - l1));
        for (let l4 = 0; l4 < l1; l4 += 4) {
          jr.globalAlpha = 1 - l4 / l1;
          jr.fillRect(jH, l2 - l1 + l4, l0, 4);
        }
      }
      jr.globalAlpha = 1;
    }
    if (jz > 0) {
      let l5 = jQ.span * jz;
      let l6 = this.skin === "BARS" || this.skin === "DELTARUNE" ? 4 : this.nh / 2 + 3;
      if (jQ.up) {
        let l8 = jQ.hitY + l6;
        jr.fillRect(jH, l8, l0, Math.max(0, l5 - l1));
        for (let l9 = 0; l9 < l1; l9 += 4) {
          jr.globalAlpha = 1 - l9 / l1;
          jr.fillRect(jH, l8 + l5 - l1 + l9, l0, 4);
        }
      } else {
        let lP = jQ.hitY - l6;
        jr.fillRect(jH, lP - l5 + l1, l0, Math.max(0, l5 - l1));
        for (let lw = 0; lw < l1; lw += 4) {
          jr.globalAlpha = 1 - lw / l1;
          jr.fillRect(jH, lP - l5 + l1 - lw - 4, l0, 4);
        }
      }
      jr.globalAlpha = 1;
    }
  }
  drawNotes(jr, jg, jz, jQ) {
    let jH = this.L;
    let l0 = this.play;
    let l1 = this.view;
    let l2 = l0.keys;
    let l3 = this.skin;
    let l4 = l1.head;
    let l5 = l1.tail;
    let l6 = jQ + jH.span / jH.pxPerMs + 60;
    let l8 = l3 === "DELTARUNE";
    for (let l9 = 0; l9 < l2; l9++) {
      let lP = jH.laneX[l9];
      let lw = l0.laneNotes[l9];
      let lj = this.cols[l9];
      let ll = Math.max(0, l0.laneNext[l9] - 8);
      let lD = this.bodyW;
      let lO = this.dev || PN;
      for (; ll < lw.length; ll++) {
        let lf = lw[ll];
        if (l4[lf] > l6) {
          break;
        }
        let lR = l0.state[lf];
        let lu = l0.end[lf] > 0;
        if (lR === 2) {
          continue;
        }
        let lv = this.yOf(l4[lf], jQ);
        let lc = lR === 3;
        if (lu) {
          let lZ = this.yOf(l5[lf], jQ);
          let la = lR === 1;
          let lY = lR === 4;
          if (la) {
            lv = jH.hitY;
          }
          if (jH.up ? lZ < -20 : lZ > 500) {
            continue;
          }
          let ln = Math.min(lv, lZ);
          let lp = Math.max(lv, lZ);
          let lK = lc || lY;
          if (lp - ln > 0) {
            if (l8) {
              jg.fillStyle = la ? "#ffa040" : lK ? "#808080" : lj.base;
              jg.globalAlpha = lK ? 0.5 : 1;
              jg.fillRect(Math.round(lP - 4), ln, 8, lp - ln);
            } else if (l3 === "BARS") {
              let lU = Math.round(lP - lD / 2);
              jg.fillStyle = lK ? "#303030" : la ? lj.base : lj.dark;
              jg.fillRect(lU, ln, lD, lp - ln);
              jg.fillStyle = lK ? "#606060" : la ? "#ffffff" : lj.base;
              jg.fillRect(lU, ln, 2, lp - ln);
              jg.fillRect(lU + lD - 2, ln, 2, lp - ln);
            } else {
              let lL = Math.max(-40, ln);
              let lo = Math.min(520, lp);
              if (lo > lL) {
                let lA = lP - lD / 2;
                Po(jg, lA, lL, lD, lo - lL, lD / 2);
                jg.fillStyle = lK ? "#2e2e2e" : la ? lj.dark : lj.deep;
                jg.globalAlpha = lK ? 0.8 : 0.92;
                jg.fill();
                jg.globalAlpha = 1;
                jg.lineWidth = 1.5;
                jg.strokeStyle = lK ? "#5a5a5a" : la ? "#ffffff" : lj.base;
                jg.stroke();
                if (!lK && lD >= 8) {
                  jg.fillStyle = la ? lj.base : lj.dark;
                  jg.globalAlpha = la ? 0.55 : 0.8;
                  Po(jg, lP - lD * 0.18, lL + 2, lD * 0.36, Math.max(0, lo - lL - 4), lD * 0.18);
                  jg.fill();
                  jg.globalAlpha = 1;
                }
              }
            }
            jg.globalAlpha = 1;
            if (l8) {
              jr.draw_sprite_ext("spr_rhythmgame_heldnote", 0, lP, lZ, 1, 1, 0, lK ? "#808080" : la ? "#ffa040" : lj.base, lK ? 0.5 : 1);
            } else {
              (lK ? this.deadTails[l9] : this.tails[l9]).draw(jg, lP, lZ, 1, 1, lO);
            }
          }
          if (jH.up ? lv < -20 : lv > 500) {
            continue;
          }
          if (l8) {
            jr.draw_sprite_ext("spr_rhythmgame_note", 0, lP, lv, jH.colW / 40, 1, 0, lK ? "#808080" : la ? "#ffff00" : lj.base, lK ? 0.5 : 1);
          } else {
            (lK ? this.deadNotes[l9] : this.notes[l9]).draw(jg, lP, lv, 1, 1, lO);
          }
        } else {
          if (jH.up ? lv < -20 : lv > 500) {
            continue;
          }
          if (l8) {
            jr.draw_sprite_ext("spr_rhythmgame_note", 0, lP, lv, jH.colW / 40, 1, 0, lc ? "#808080" : lj.base, lc ? 0.5 : 1);
          } else {
            if (lc) {
              jg.globalAlpha = 0.6;
            }
            (lc ? this.deadNotes[l9] : this.notes[l9]).draw(jg, lP, lv, 1, 1, lO);
            jg.globalAlpha = 1;
          }
        }
      }
    }
  }
  drawJudgement(jr, jg, jz) {
    let jQ = this.play;
    let jH = this.L;
    if (jQ.lastJ < 0) {
      return;
    }
    if (jQ.lastJAt !== this.jSeen) {
      this.jSeen = jQ.lastJAt;
      this.jAt = jz;
      this.jj = jQ.lastJ;
    }
    let l0 = this.jj;
    if (this.cfg.judgeHide300 && l0 <= 1) {
      return;
    }
    let l1 = jz - this.jAt;
    if (l1 < 0 || l1 > 740) {
      return;
    }
    let l2 = w0(l1);
    w2(jr, l0, jH.cx, jH.judgeY + l2[0], l2[1], l2[2], l2[3]);
  }
  drawHud(jr, jg, jz) {
    let jQ = jr.ctx;
    let jH = this.play;
    let l0 = this.L;
    let l1 = this.cfg;
    if (l1.showCombo !== false) {
      let l9 = Math.max(40, l0.x0 - 34);
      let lP = 130;
      let lw = 196;
      let lj = jH.judged > 0 && jH.counts[5] === 0 && jH.combo >= jH.judged;
      let ll = jH.judged ? Math.min(1, jH.combo / jH.judged) : 0;
      jQ.fillStyle = Pl.maroon;
      jQ.fillRect(l9, lP, 20, lw);
      let lD = Math.round(lw * ll);
      if (lD > 0) {
        jQ.fillStyle = lj ? Pl.yellow : Pl.orange;
        jQ.fillRect(l9, lP + lw - lD, 20, lD);
      }
      jQ.fillStyle = "#ffffff";
      jQ.fillRect(l9, lP + lw - lD, 20, lD > 0 ? 1 : 0);
      jr.draw_sprite_ext("spr_tplogo", 0, l9 - 26, lP + 20, 1, 1, 0, "#ffffff", 1);
      if (jH.combo > 0) {
        PD(jr, l9 - 4, lP + 70, Ph(jH.combo), "#ffffff", "fnt_mainbig", "right");
        if (lj && jH.combo >= 10) {
          PD(jr, l9 - 4, lP + 100, "MAX", Pl.yellow, "fnt_main", "right");
        }
      }
    }
    {
      let lO = l0.x1 + 12 + 112 <= 636 ? l0.x1 + 12 : Math.max(4, l0.x0 - 124);
      let lf = 438;
      let lR = Math.max(0, Math.min(1, jH.hp));
      let lu = Math.round(lR * 100);
      let lv = lR < 0.25;
      jr.draw_sprite_ext("spr_hpname", 0, lO, lf + 4, 1, 1, 0, "#ffffff", 1);
      let lc = lR <= 0 ? Pl.red : lv ? Pl.yellow : "#ffffff";
      PD(jr, lO + 112, lf - 12, PQ(lu), lc, "fnt_main", "right");
      Pv(jQ, lO + 22, lf + 5, 90, 9, lR, lv && Math.floor(jz.tReal / 180) % 2 === 0 ? Pl.red : Pl.cyan);
    }
    let l2 = PC(jH.score);
    PD(jr, 632, 4, l2, "#ffffff", "fnt_mainbig", "right");
    let l3 = Pg(jH.accuracy);
    PD(jr, 632, 36, l3, jH.accuracy >= 0.95 ? Pl.yellow : "#ffffff", "fnt_main", "right");
    let l4 = jH.chart;
    let l5 = l4.first;
    let l6 = Math.max(l5 + 1, l4.last);
    let l8 = jg < l5 ? 0 : Math.max(0, Math.min(1, (jg - l5) / (l6 - l5)));
    jQ.fillStyle = Pl.dk;
    jQ.fillRect(534, 56, 98, 2);
    jQ.fillStyle = "#ffffff";
    jQ.fillRect(534, 56, Math.round(l8 * 98), 2);
    if (l1.hitError !== "OFF") {
      this.drawHitError(jQ, jg, jz.tReal);
    }
    if (l1.keyOverlay) {
      this.drawKeyOverlay(jr, jz.keyLabels);
    }
  }
  noteHit(jr, jg, jz) {
    let jQ = this.heW;
    this.heW = (this.heW + 1) % this.heN;
    this.heErr[jQ] = jr;
    this.heAt[jQ] = jz;
    this.heJ[jQ] = jg;
    this.heMean = this.heMean * 0.85 + jr * 0.15;
  }
  drawHitError(jr, jg, jz) {
    let jQ = this.play;
    let jH = this.L;
    let l0 = jQ.win;
    let l1 = jQ.rate;
    let l2 = l0[4] / l1;
    let l3 = Math.min(110, jH.width / 2 + 30);
    let l4 = l3 / l2;
    let l5 = jH.cx;
    let l6 = jH.up ? Math.max(8, jH.hitY - 52) : Math.min(472, jH.hitY + 56);
    for (let lw = 4; lw >= 0; lw--) {
      let lj = Math.round(Math.min(l3, l0[lw] / l1 * l4));
      jr.fillStyle = w5[lw];
      jr.fillRect(l5 - lj, l6 - 1, lj * 2, 3);
    }
    jr.fillStyle = "#ffffff";
    jr.fillRect(l5, l6 - 6, 1, 13);
    let l8 = this.cfg.hitError === "DOTS";
    for (let ll = 0; ll < this.heN; ll++) {
      let lD = jz - this.heAt[ll];
      if (lD < 0 || lD > 3500) {
        continue;
      }
      let lO = Math.max(-l2, Math.min(l2, this.heErr[ll] / l1));
      jr.globalAlpha = 1 - lD / 3500;
      jr.fillStyle = o[this.heJ[ll]];
      if (l8) {
        jr.fillRect(Math.round(l5 + lO * l4) - 1, l6 - 9, 2, 2);
      } else {
        jr.fillRect(Math.round(l5 + lO * l4), l6 - 7, 1, 15);
      }
    }
    jr.globalAlpha = 1;
    let l9 = Math.max(-l2, Math.min(l2, this.heMean / l1));
    let lP = Math.round(l5 + l9 * l4);
    jr.fillStyle = Pl.yellow;
    jr.fillRect(lP - 3, l6 - 13, 7, 2);
    jr.fillRect(lP - 2, l6 - 11, 5, 2);
    jr.fillRect(lP - 1, l6 - 9, 3, 1);
  }
  drawKeyOverlay(jr, jg) {
    let jz = jr.ctx;
    let jQ = this.play;
    let jH = jQ.keys;
    let l0 = 40;
    let l1 = 20;
    let l2 = 640 - l0 - 6;
    let l3 = 240 - jH * (l1 + 2) / 2;
    for (let l4 = 0; l4 < jH; l4++) {
      let l5 = Math.round(l3 + l4 * (l1 + 2));
      let l6 = jQ.down[l4];
      PR(jz, l2, l5, l0, l1, l6 ? "#ffffff" : Pl.dk, l6 ? this.cols[l4].dark : "#000000", 0.9);
      PD(jr, l2 + 4, l5 + 2, jg ? jg[l4] : "", l6 ? Pl.yellow : "#ffffff");
      PD(jr, l2 + l0 - 3, l5 + 2, Ph(jQ.presses[l4] % 1000), Pl.gray, "fnt_main", "right");
    }
  }
};
v(w3, "ManiaRenderer");
var w4 = w3;
var w5 = ["#ffff00", "#606060", "#4a7a4a", "#7a5020", "#404040"];
function w6(jr, jg, jz, jQ, jH, l0) {
  let l1 = jr.ctx;
  let l2 = jg.win;
  let l3 = l2[4] / jg.rate;
  let l4 = jQ + l0 / 2;
  let l5 = (l0 / 2 - 3) / l3;
  l1.save();
  l1.fillStyle = "#000000";
  l1.fillRect(jz, jQ, jH, l0);
  let l6 = [[l2[4], "#101010"], [l2[3], "#161616"], [l2[2], "#1c1c1c"], [l2[1], "#242424"], [l2[0], "#2c2c10"]];
  for (let [lP, lw] of l6) {
    let lj = Math.round(Math.min(l0 / 2, lP / jg.rate * l5));
    l1.fillStyle = lw;
    l1.fillRect(jz, Math.round(l4) - lj, jH, lj * 2);
  }
  l1.fillStyle = Pl.gray;
  l1.fillRect(jz, Math.round(l4), jH, 1);
  let l8 = jg.chart.first;
  let l9 = Math.max(l8 + 1, jg.chart.last);
  for (let ll = 0; ll < jg.errN; ll++) {
    let lD = jz + (jg.errAt[ll] - l8) / (l9 - l8) * (jH - 4) + 2;
    let lO = jg.errMs[ll] / jg.rate;
    let lf = jg.errJ[ll];
    if (lO !== lO) {
      l1.fillStyle = "rgba(255,64,64,0.5)";
      l1.fillRect(Math.round(lD), jQ + 2, 1, l0 - 4);
      continue;
    }
    let lR = l4 + Math.max(-l3, Math.min(l3, lO)) * l5;
    l1.fillStyle = o[lf];
    l1.fillRect(Math.round(lD) - 1, Math.round(lR) - 1, 2, 2);
  }
  l1.restore();
  PD(jr, jz + 4, jQ + 1, "EARLY", Pl.gray);
  PD(jr, jz + 4, jQ + l0 - 17, "LATE", Pl.gray);
}
v(w6, "drawHitGraph");
function w7(jr, jg, jz, jQ, jH, l0) {
  let l1 = jr.ctx;
  let l2 = jg.win[4] / jg.rate;
  let l3 = 41;
  let l4 = new Int32Array(l3);
  let l5 = 1;
  for (let l8 = 0; l8 < jg.errN; l8++) {
    let l9 = jg.errMs[l8] / jg.rate;
    if (l9 !== l9) {
      continue;
    }
    let lP = Math.max(0, Math.min(l3 - 1, Math.round(l9 / l2 * (l3 - 1) / 2 + (l3 - 1) / 2)));
    if (++l4[lP] > l5) {
      l5 = l4[lP];
    }
  }
  l1.save();
  l1.fillStyle = "#000000";
  l1.fillRect(jz, jQ, jH, l0);
  let l6 = jH / l3;
  for (let lw = 0; lw < l3; lw++) {
    let lj = Math.abs((lw - (l3 - 1) / 2) / ((l3 - 1) / 2) * l2);
    let ll = 4;
    for (let lO = 0; lO < 5; lO++) {
      if (lj <= jg.win[lO] / jg.rate) {
        ll = lO;
        break;
      }
    }
    let lD = Math.round(l4[lw] / l5 * (l0 - 20));
    l1.fillStyle = o[ll];
    l1.fillRect(Math.round(jz + lw * l6 + 1), jQ + l0 - 2 - lD, Math.max(1, Math.round(l6 - 2)), lD);
  }
  l1.fillStyle = Pl.gray;
  l1.fillRect(Math.round(jz + jH / 2), jQ + 2, 1, l0 - 4);
  l1.restore();
  PD(jr, jz + 4, jQ + 1, "EARLY", Pl.gray);
  PD(jr, jz + jH - 4, jQ + 1, "LATE", Pl.gray, "fnt_main", "right");
}
v(w7, "drawHistogram");
c();
c();
var w8 = {
  x: 32,
  y: 16,
  w: 384,
  h: 448,
  x2: 416,
  y2: 464,
  cx: 224
};
var w9 = w8.y + 112;
var wP = 30;
var ww = ["EASY", "NORMAL", "HARD", "LUNATIC"];
var wj = [0.5, 1, 1.2, 1.5];
var wl = ["susie", "ralsei", "noelle", "kris", "lancer", "berdly"];
var wD = {
  SOUL: 0,
  AXE: 2,
  AXEBEAM: 3,
  YARN: 4,
  STAR: 5,
  NEEDLE: 6,
  LANCE: 7,
  CUT: 8,
  THRUST: 9,
  SPADE: 10,
  SPADEBOMB: 11,
  FEATHER: 12,
  QUILL: 13,
  SHARD: 14
};
var wM = [10000000, 25000000, 50000000, 80000000];
var wO = 14;
var wf = {
  susie: 60,
  noelle: 84,
  ralsei: 72,
  kris: 90,
  lancer: 78,
  berdly: 80
};
var wR = [0, 0, 8, 2, 2, 0, 0, 2, 14, 2, 4, 6, 0, 0, 0];
var wu = {
  susie: [8, 1],
  ralsei: [4, 8],
  noelle: [3, 5],
  kris: [5, 1],
  lancer: [7, 4],
  berdly: [6, 2]
};
var wv = {
  W: 0,
  RED: 1,
  ORANGE: 2,
  YELLOW: 3,
  GREEN: 4,
  CYAN: 5,
  BLUE: 6,
  PURPLE: 7,
  PINK: 8
};
var wc = ["#ffffff", "#ff5050", "#ffa040", "#ffff48", "#58ff78", "#48ffff", "#6a94ff", "#c878ff", "#ff78d8"];
var wZ = [];
function wa(jr) {
  let jg = Object.assign({
    frame: 0,
    frames: 1,
    anim: 4,
    scale: 1,
    r: 3,
    orient: 0,
    spin: 6,
    rot0: 0,
    halo: 0,
    face: 0,
    center: false
  }, jr);
  jg.id = wZ.length;
  wZ.push(jg);
  return jg.id;
}
v(wa, "defType");
var wY = Math.PI / 180;
var wn = Math.PI * 2;
var wp = 4096;
var wK = 256;
var wU = 1536;
var wL = 2048;
var wo = 40;
var wA = 1;
var wX = 4;
var wJ = 8;
var wT = {
  AIM: 1,
  TURN: 2,
  BURST: 3,
  STOP: 4,
  CALL: 5,
  SPEED: 6,
  AIMBURST: 7
};
var wW = {
  POWER: 0,
  POINT: 1,
  STAR: 2,
  BIGPOWER: 3,
  FULL: 4
};
var wm = {
  SPARK: 0,
  SQUARE: 1,
  RING: 2,
  SHARD: 3,
  SPRITE: 4,
  TEXT: 5,
  FLAKE: 6,
  GLINT: 7,
  SLASH: 8
};
function wx(jr) {
  let jg = jr >>> 0 || 2654435769;
  return () => {
    jg ^= jg << 13;
    jg >>>= 0;
    jg ^= jg >>> 17;
    jg ^= jg << 5;
    jg >>>= 0;
    return jg / 4294967296;
  };
}
v(wx, "xorshift");
var wI = class lz {
  constructor() {
    this.bx = new Float32Array(wp);
    this.by = new Float32Array(wp);
    this.bpx = new Float32Array(wp);
    this.bpy = new Float32Array(wp);
    this.bvx = new Float32Array(wp);
    this.bvy = new Float32Array(wp);
    this.bdir = new Float32Array(wp);
    this.bspd = new Float32Array(wp);
    this.bacc = new Float32Array(wp);
    this.blim = new Float32Array(wp);
    this.bw = new Float32Array(wp);
    this.bgrav = new Float32Array(wp);
    this.bage = new Int32Array(wp);
    this.btype = new Uint16Array(wp);
    this.bcol = new Uint8Array(wp);
    this.bflag = new Uint8Array(wp);
    this.bbnc = new Uint8Array(wp);
    this.bdelay = new Uint8Array(wp);
    this.brot = new Float32Array(wp);
    this.bprot = new Float32Array(wp);
    this.bevT = new Int32Array(wp);
    this.bevK = new Uint8Array(wp);
    this.bevA = new Float32Array(wp);
    this.bevB = new Float32Array(wp);
    this.bevC = new Float32Array(wp);
    this.bevD = new Float32Array(wp);
    this.btag = new Int32Array(wp);
    this.blive = new Int32Array(wp);
    this.bpos = new Int32Array(wp);
    this.bn = 0;
    this.bfree = new Int32Array(wp);
    this.bfn = 0;
    this.sx = new Float32Array(wK);
    this.sy = new Float32Array(wK);
    this.spx = new Float32Array(wK);
    this.spy = new Float32Array(wK);
    this.svx = new Float32Array(wK);
    this.svy = new Float32Array(wK);
    this.sdmg = new Float32Array(wK);
    this.skind = new Uint8Array(wK);
    this.shome = new Float32Array(wK);
    this.slife = new Int16Array(wK);
    this.sbnc = new Uint8Array(wK);
    this.spass = new Uint8Array(wK);
    this.sage = new Int16Array(wK);
    this.slive = new Int32Array(wK);
    this.spos = new Int32Array(wK);
    this.sn = 0;
    this.sfree = new Int32Array(wK);
    this.sfn = 0;
    this.ix = new Float32Array(wU);
    this.iy = new Float32Array(wU);
    this.ipx = new Float32Array(wU);
    this.ipy = new Float32Array(wU);
    this.ivx = new Float32Array(wU);
    this.ivy = new Float32Array(wU);
    this.ikind = new Uint8Array(wU);
    this.ihome = new Uint8Array(wU);
    this.iage = new Int32Array(wU);
    this.ilive = new Int32Array(wU);
    this.ipos = new Int32Array(wU);
    this.inn = 0;
    this.ifree = new Int32Array(wU);
    this.ifn = 0;
    this.qx = new Float32Array(wL);
    this.qy = new Float32Array(wL);
    this.qpx = new Float32Array(wL);
    this.qpy = new Float32Array(wL);
    this.qvx = new Float32Array(wL);
    this.qvy = new Float32Array(wL);
    this.qlife = new Int32Array(wL);
    this.qmax = new Int32Array(wL);
    this.qkind = new Uint8Array(wL);
    this.qcol = new Uint8Array(wL);
    this.qsize = new Float32Array(wL);
    this.qrot = new Float32Array(wL);
    this.qvr = new Float32Array(wL);
    this.qdrag = new Float32Array(wL);
    this.qspr = new Int32Array(wL);
    this.qlive = new Int32Array(wL);
    this.qpos = new Int32Array(wL);
    this.qn = 0;
    this.qfree = new Int32Array(wL);
    this.qfn = 0;
    this.lasers = [];
    for (let jr = 0; jr < wo; jr++) {
      this.lasers.push({
        on: false,
        x: 0,
        y: 0,
        ang: 0,
        pang: 0,
        w: 0,
        len: 0,
        width: 0,
        warn: 0,
        life: 0,
        t: 0,
        col: 0,
        grazeT: 0,
        follow: null,
        fx: 0,
        fy: 0,
        fade: 6
      });
    }
    this.markers = [];
    for (let jg = 0; jg < 32; jg++) {
      this.markers.push({
        on: false,
        kind: "",
        x: 0,
        y: 0,
        t: 0,
        life: 0,
        a: 0,
        b: 0
      });
    }
    this.sndAt = Object.create(null);
    this.hooks = {
      snd: null,
      shake: null,
      event: null
    };
    this.inputZero = {
      l: 0,
      r: 0,
      u: 0,
      d: 0,
      shoot: 0,
      focus: 0,
      bomb: 0,
      tdx: 0,
      tdy: 0,
      touch: 0
    };
    this.reset();
  }
  reset() {
    this.bn = 0;
    this.bfn = 0;
    for (let jr = wp - 1; jr >= 0; jr--) {
      this.bfree[this.bfn++] = jr;
    }
    this.sn = 0;
    this.sfn = 0;
    for (let jg = wK - 1; jg >= 0; jg--) {
      this.sfree[this.sfn++] = jg;
    }
    this.inn = 0;
    this.ifn = 0;
    for (let jz = wU - 1; jz >= 0; jz--) {
      this.ifree[this.ifn++] = jz;
    }
    this.qn = 0;
    this.qfn = 0;
    for (let jQ = wL - 1; jQ >= 0; jQ--) {
      this.qfree[this.qfn++] = jQ;
    }
    for (let jH of this.lasers) {
      jH.on = false;
    }
    for (let l0 of this.markers) {
      l0.on = false;
    }
    this.t = 0;
    this.state = "idle";
    this.flashT = 0;
    this.flashMax = 1;
    this.flashCol = 0;
    this.shakeAmp = 0;
    this.shakeT = 0;
    this.banner = null;
    this.popups = [];
    this.peakBullets = 0;
  }
  start(jr) {
    this.reset();
    this.opts = jr;
    this.mode = jr.mode || "rush";
    this.diff = Math.max(0, Math.min(3, jr.diff | 0));
    this.partner = wl.includes(jr.partner) ? jr.partner : "susie";
    this.bosses = jr.bosses;
    this.rand = wx(jr.seed || 12345);
    let jg = this.mode === "practice";
    this.bombBase = 3 + Math.max(0, Math.min(2, jr.bombs | 0));
    this.pal = jr.pal | 0;
    this.P = {
      x: w8.cx,
      y: w8.y2 - 48,
      px: w8.cx,
      py: w8.y2 - 48,
      focus: 0,
      alive: 1,
      invuln: 60,
      deadT: 0,
      hitT: 0,
      power: jg ? 4 : Math.max(2, Math.min(4, +jr.power || 2)),
      lives: jg ? 9 : (this.diff === 0 ? 4 : 3) + Math.max(0, Math.min(2, jr.lives | 0)),
      bombs: this.bombBase,
      tp: 0,
      graze: 0,
      score: 0,
      shotT: 0,
      shotT2: 0,
      optAng: 0,
      deaths: 0,
      bombsUsed: 0,
      focusT: 0,
      tilt: 0,
      lean: 0
    };
    this.freezeT = 0;
    this.bike = {
      x: 0,
      y: 0,
      px: 0,
      py: 0,
      vy: 0,
      on: 0
    };
    this.storm = [];
    for (let jz = 0; jz < 3; jz++) {
      this.storm.push({
        x: 0,
        y: 0,
        px: 0,
        py: 0,
        on: 0
      });
    }
    this.extendIdx = 0;
    this.stats = {
      captured: 0,
      cards: 0,
      bosses: 0,
      maxBullets: 0,
      capturedIds: []
    };
    this.hiScoreSeen = 0;
    this.bombT = 0;
    this.bombMax = 1;
    this.bombKind = null;
    this.bombX = 0;
    this.bombY = 0;
    this.boss = {
      x: w8.cx,
      y: w8.y - 80,
      px: w8.cx,
      py: w8.y - 80,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0,
      mt: 0,
      md: 0,
      hp: 1,
      hpMax: 1,
      show: 0,
      flashT: 0,
      def: null,
      spr: null,
      sprFrame: 0,
      anim: 0,
      hitR: 26,
      invuln: 0,
      dmgT: 0,
      trail: 0,
      face: 1,
      lastDmgT: -99,
      scale: 2,
      alpha: 1
    };
    this.bi = -1;
    this.pi = -1;
    this.phase = null;
    this.S = null;
    this.pt = 0;
    this.declT = 0;
    this.gapT = 0;
    this.cardFailed = false;
    this.cardBonus = 0;
    this.cardBonusMax = 0;
    this.timer = 0;
    this.timerMax = 0;
    this.itemsHomeT = 0;
    this.endT = 0;
    this.result = null;
    this.state = "play";
    if (jg && jr.card) {
      this.enterBoss(jr.card.boss, true);
      this.beginPhase(jr.card.phase);
    } else {
      this.enterBoss(jr.startBoss | 0, false);
    }
  }
  lv(jr, jg, jz, jQ) {
    let jH = this.diff;
    if (jH === 0) {
      return jr;
    } else if (jH === 1) {
      return jg;
    } else if (jH === 2 || jQ === undefined) {
      return jz;
    } else {
      return jQ;
    }
  }
  rr(jr, jg) {
    return jr + (jg - jr) * this.rand();
  }
  aim(jr, jg) {
    return Math.atan2(this.P.y - jg, this.P.x - jr);
  }
  snd(jr, jg = 1, jz = 2, jQ = 1) {
    let jH = this.sndAt[jr];
    if (jH === undefined || !(this.t - jH < jz)) {
      this.sndAt[jr] = this.t;
      if (this.hooks.snd) {
        this.hooks.snd(jr, jg, jQ);
      }
    }
  }
  shake(jr, jg) {
    if (jr >= this.shakeAmp || this.shakeT <= 0) {
      this.shakeAmp = jr;
      this.shakeT = jg;
      this.shakeMax = jg;
    }
  }
  flash(jr, jg) {
    this.flashCol = jr;
    this.flashT = jg;
    this.flashMax = jg;
  }
  emit(jr, jg, jz) {
    if (this.hooks.event) {
      this.hooks.event(jr, jg, jz);
    }
  }
  shot(jr, jg, jz, jQ, jH, l0 = 0) {
    if (this.bfn === 0 || jr - jr !== 0 || jg - jg !== 0 || jz - jz !== 0 || jQ - jQ !== 0) {
      return -1;
    }
    let l1 = this.bfree[--this.bfn];
    this.bpos[l1] = this.bn;
    this.blive[this.bn++] = l1;
    this.bx[l1] = jr;
    this.by[l1] = jg;
    this.bpx[l1] = jr;
    this.bpy[l1] = jg;
    this.bdir[l1] = jz;
    this.bspd[l1] = jQ;
    this.bvx[l1] = Math.cos(jz) * jQ;
    this.bvy[l1] = Math.sin(jz) * jQ;
    this.bacc[l1] = 0;
    this.blim[l1] = 0;
    this.bw[l1] = 0;
    this.bgrav[l1] = 0;
    this.bage[l1] = 0;
    this.btype[l1] = jH;
    this.bcol[l1] = l0;
    this.bflag[l1] = 0;
    this.bbnc[l1] = 0;
    this.bdelay[l1] = 0;
    let l2 = wZ[jH];
    this.brot[l1] = l2.orient === 1 ? jz : l2.rot0 * wY;
    this.bprot[l1] = this.brot[l1];
    this.bevT[l1] = -1;
    this.bevK[l1] = 0;
    this.btag[l1] = 0;
    return l1;
  }
  bAcc(jr, jg, jz) {
    if (jr >= 0) {
      this.bacc[jr] = jg;
      this.blim[jr] = jz;
    }
    return jr;
  }
  bCurve(jr, jg) {
    if (jr >= 0) {
      this.bw[jr] = jg * wY;
    }
    return jr;
  }
  bGrav(jr, jg) {
    if (jr >= 0) {
      this.bgrav[jr] = jg;
    }
    return jr;
  }
  bBounce(jr, jg) {
    if (jr >= 0) {
      this.bbnc[jr] = jg;
    }
    return jr;
  }
  bDelay(jr, jg) {
    if (jr >= 0) {
      this.bdelay[jr] = jg;
      this.bflag[jr] |= wX;
    }
    return jr;
  }
  bKeep(jr) {
    if (jr >= 0) {
      this.bflag[jr] |= wJ;
    }
    return jr;
  }
  bTag(jr, jg) {
    if (jr >= 0) {
      this.btag[jr] = jg;
    }
    return jr;
  }
  bEv(jr, jg, jz, jQ = 0, jH = 0, l0 = 0, l1 = 0) {
    if (jr >= 0) {
      this.bevT[jr] = jg;
      this.bevK[jr] = jz;
      this.bevA[jr] = jQ;
      this.bevB[jr] = jH;
      this.bevC[jr] = l0;
      this.bevD[jr] = l1;
    }
    return jr;
  }
  bSetDir(jr, jg, jz) {
    this.bdir[jr] = jg;
    if (jz !== undefined) {
      this.bspd[jr] = jz;
    }
    this.bvx[jr] = Math.cos(jg) * this.bspd[jr];
    this.bvy[jr] = Math.sin(jg) * this.bspd[jr];
    if (wZ[this.btype[jr]].orient === 1) {
      this.brot[jr] = jg;
    }
  }
  ring(jr, jg, jz, jQ, jH, l0, l1 = 0) {
    let l2 = wn / jz;
    let l3 = -1;
    for (let l4 = 0; l4 < jz; l4++) {
      let l5 = this.shot(jr, jg, jQ + l4 * l2, jH, l0, l1);
      if (l4 === 0) {
        l3 = l5;
      }
    }
    return l3;
  }
  fan(jr, jg, jz, jQ, jH, l0, l1, l2 = 0) {
    if (jz <= 1) {
      return this.shot(jr, jg, jQ, l0, l1, l2);
    }
    let l3 = -1;
    for (let l4 = 0; l4 < jz; l4++) {
      let l5 = this.shot(jr, jg, jQ - jH / 2 + jH * l4 / (jz - 1), l0, l1, l2);
      if (l4 === 0) {
        l3 = l5;
      }
    }
    return l3;
  }
  lastN(jr, jg) {
    for (let jz = this.bn - jr; jz < this.bn; jz++) {
      if (jz >= 0) {
        jg(this.blive[jz]);
      }
    }
  }
  killBullet(jr) {
    let jg = this.bpos[jr];
    let jz = this.blive[--this.bn];
    this.blive[jg] = jz;
    this.bpos[jz] = jg;
    this.bfree[this.bfn++] = jr;
  }
  clearBullets(jr, jg = true, jz = 0, jQ = 0, jH = 0) {
    let l0 = jH * jH;
    for (let l1 = this.bn - 1; l1 >= 0; l1--) {
      let l2 = this.blive[l1];
      if (!jg) {
        let l3 = this.bx[l2] - jz;
        let l4 = this.by[l2] - jQ;
        if (l3 * l3 + l4 * l4 > l0) {
          continue;
        }
      }
      if (jr && this.bx[l2] > w8.x && this.bx[l2] < w8.x2 && this.by[l2] > w8.y && this.by[l2] < w8.y2) {
        let l5 = this.item(this.bx[l2], this.by[l2], 2);
        if (l5 >= 0) {
          this.ivx[l5] = 0;
          this.ivy[l5] = -1;
          this.ihome[l5] = 1;
        }
      } else if ((l1 & 3) === 0) {
        this.part(wm.GLINT, this.bx[l2], this.by[l2], 0, -0.5, 10, this.bcol[l2], 1);
      }
      this.killBullet(l2);
    }
  }
  laser(jr, jg, jz, jQ, jH, l0, l1, l2 = 0, l3 = 0, l4 = null) {
    for (let l5 of this.lasers) {
      if (!l5.on) {
        l5.on = true;
        l5.x = jr;
        l5.y = jg;
        l5.ang = jz;
        l5.pang = jz;
        l5.w = l3 * wY;
        l5.len = jQ;
        l5.width = jH;
        l5.warn = l0;
        l5.life = l1;
        l5.t = 0;
        l5.col = l2;
        l5.grazeT = 0;
        l5.follow = l4;
        l5.fx = l4 ? jr - l4.x : 0;
        l5.fy = l4 ? jg - l4.y : 0;
        l5.fade = 6;
        return l5;
      }
    }
    return null;
  }
  mark(jr, jg, jz, jQ, jH = 0, l0 = 0) {
    for (let l1 of this.markers) {
      if (!l1.on) {
        l1.on = true;
        l1.kind = jr;
        l1.x = jg;
        l1.y = jz;
        l1.t = 0;
        l1.life = jQ;
        l1.a = jH;
        l1.b = l0;
        return l1;
      }
    }
    return null;
  }
  bAlive(jr, jg) {
    return jr >= 0 && this.bpos[jr] < this.bn && this.blive[this.bpos[jr]] === jr && this.btag[jr] === jg;
  }
  item(jr, jg, jz) {
    if (this.ifn === 0) {
      return -1;
    }
    let jQ = this.ifree[--this.ifn];
    this.ipos[jQ] = this.inn;
    this.ilive[this.inn++] = jQ;
    this.ix[jQ] = jr;
    this.iy[jQ] = jg;
    this.ipx[jQ] = jr;
    this.ipy[jQ] = jg;
    this.ivx[jQ] = (this.rand() - 0.5) * 2;
    this.ivy[jQ] = -3.5 - this.rand() * 1.5;
    this.ikind[jQ] = jz;
    this.ihome[jQ] = 0;
    this.iage[jQ] = 0;
    return jQ;
  }
  killItem(jr) {
    let jg = this.ipos[jr];
    let jz = this.ilive[--this.inn];
    this.ilive[jg] = jz;
    this.ipos[jz] = jg;
    this.ifree[this.ifn++] = jr;
  }
  drop(jr, jg, jz, jQ, jH = 0) {
    for (let l0 = 0; l0 < jz; l0++) {
      let l1 = this.item(jr + this.rr(-40, 40), jg + this.rr(-30, 20), 0);
      if (l1 >= 0) {
        this.ivy[l1] -= this.rand() * 2;
      }
    }
    for (let l2 = 0; l2 < jQ; l2++) {
      let l3 = this.item(jr + this.rr(-48, 48), jg + this.rr(-30, 20), 1);
      if (l3 >= 0) {
        this.ivy[l3] -= this.rand() * 2;
      }
    }
    for (let l4 = 0; l4 < jH; l4++) {
      let l5 = this.item(jr + this.rr(-30, 30), jg + this.rr(-20, 10), 3);
      if (l5 >= 0) {
        this.ivy[l5] -= 1;
      }
    }
  }
  part(jr, jg, jz, jQ, jH, l0, l1 = 0, l2 = 1, l3 = -1) {
    if (this.qfn === 0) {
      return -1;
    }
    let l4 = this.qfree[--this.qfn];
    this.qpos[l4] = this.qn;
    this.qlive[this.qn++] = l4;
    this.qx[l4] = jg;
    this.qy[l4] = jz;
    this.qpx[l4] = jg;
    this.qpy[l4] = jz;
    this.qvx[l4] = jQ;
    this.qvy[l4] = jH;
    this.qlife[l4] = l0;
    this.qmax[l4] = l0;
    this.qkind[l4] = jr;
    this.qcol[l4] = l1;
    this.qsize[l4] = l2;
    this.qrot[l4] = this.rand() * wn;
    this.qvr[l4] = 0;
    this.qdrag[l4] = 0.9;
    this.qspr[l4] = l3;
    return l4;
  }
  burst(jr, jg, jz, jQ, jH, l0, l1 = wm.SPARK, l2 = 1) {
    for (let l3 = 0; l3 < jz; l3++) {
      let l4 = this.rand() * wn;
      let l5 = jQ * (0.3 + this.rand() * 0.7);
      this.part(l1, jr, jg, Math.cos(l4) * l5, Math.sin(l4) * l5, jH + (this.rand() * jH * 0.5 | 0), l0, l2);
    }
  }
  popup(jr, jg, jz, jQ = 0, jH = 0) {
    if (this.popups.length > 24) {
      this.popups.shift();
    }
    for (let l0 = this.popups.length - 1; l0 >= 0; l0--) {
      let l1 = this.popups[l0];
      if (l1.t < 6 && Math.abs(l1.x - jr) < 36 && Math.abs(l1.y - jg) < 10) {
        jg = l1.y - 10;
      }
    }
    this.popups.push({
      x: jr,
      y: jg,
      text: jz,
      col: jQ,
      t: 0,
      big: jH
    });
  }
  bossMove(jr, jg, jz) {
    let jQ = this.boss;
    jQ.sx = jQ.x;
    jQ.sy = jQ.y;
    jQ.tx = Math.max(w8.x + 40, Math.min(w8.x2 - 40, jr));
    jQ.ty = Math.max(w8.y + 40, Math.min(w8.y + 200, jg));
    jQ.mt = 0;
    jQ.md = Math.max(1, jz);
    if (Math.abs(jQ.tx - jQ.sx) > 4) {
      jQ.face = jQ.tx > jQ.sx ? 1 : -1;
    }
  }
  bossWander(jr, jg = 70, jz = 70, jQ = 130) {
    let jH = this.boss;
    let l0 = jH.x + this.rr(-jg, jg) + (this.P.x - jH.x) * 0.25;
    l0 = Math.max(w8.x + 70, Math.min(w8.x2 - 70, l0));
    this.bossMove(l0, w8.y + this.rr(jz, jQ), jr);
  }
  bossMoving() {
    return this.boss.mt < this.boss.md;
  }
  bossForm(jr) {
    let jg = this.boss;
    jg.form = jr || null;
    jg.scale = jr && jr.scale || jg.def && jg.def.scale || 2;
  }
  damageBoss(jr) {
    let jg = this.boss;
    if (!this.phase || jg.invuln > 0 || this.declT > 0 || this.gapT > 0 || this.phase.survival || jg.hp <= 0) {
      return false;
    }
    let jz = this.bossDmgMult();
    jg.hp -= jr * jz;
    this.P.score += Math.round(jr * 10) * 10 * wj[this.diff] / 1;
    jg.dmgT = 2;
    jg.lastDmgT = this.t;
    return true;
  }
  bossDmgMult() {
    if (this.pt < 30) {
      return 0.25;
    } else {
      return 1;
    }
  }
  enterBoss(jr, jg) {
    this.bi = jr;
    let jz = this.bosses[jr];
    let jQ = this.boss;
    jQ.def = jz;
    jQ.spr = jz.spr;
    jQ.form = null;
    jQ.scale = jz.scale || 2;
    jQ.hitR = jz.hitR || 26;
    jQ.x = w8.cx;
    jQ.y = jg ? w8.y + 100 : w8.y - 90;
    jQ.px = jQ.x;
    jQ.py = jQ.y;
    jQ.show = 1;
    jQ.alpha = 1;
    jQ.dying = 0;
    jQ.mt = jQ.md = 1;
    if (!jg) {
      this.bossMove(w8.cx, w8.y + 100, 50);
    }
    this.pi = -1;
    this.phase = null;
    this.gapT = jg ? 22 : 6;
    this.introT = jg ? 0 : jz.line ? 100 : 64;
    if (jg) {
      this.emit("boss", jr);
    } else {
      this.banner = {
        kind: "boss",
        text: jz.name,
        sub: jz.title,
        t: 0,
        line: jz.line || null,
        chars: 0
      };
      this.emit("boss", jr);
    }
  }
  beginPhase(jr) {
    let jg = this.boss.def;
    this.pi = jr;
    let jz = jg.phases[jr];
    this.phase = jz;
    let jQ = this.boss;
    let jH = this.diff === 0 ? 0.8 : 1;
    jQ.hpMax = Math.max(1, jz.hp * jH);
    jQ.hp = jQ.hpMax;
    jQ.invuln = 0;
    this.gapT = 0;
    this.S = {};
    this.pt = 0;
    this.timerMax = jz.time * wP;
    this.timer = this.timerMax;
    this.cardFailed = false;
    this.declT = jz.spell ? 48 : 16;
    let l0 = (this.bi + 1) * 1000000 * wj[this.diff];
    this.cardBonusMax = jz.spell ? l0 : 0;
    this.cardBonus = this.cardBonusMax;
    if (jz.spell) {
      this.stats.cards++;
      this.banner = {
        kind: "spell",
        text: jz.name,
        sub: "",
        t: 0
      };
      this.snd("snd_spellcast", 0.8, 1);
      if (jg.voice) {
        this.snd(jg.voice, 0.7, 1);
      }
      this.flash(0, 8);
      for (let l1 = 0; l1 < 28; l1++) {
        let l2 = this.rand() * wn;
        let l3 = 90 + this.rand() * 60;
        let l4 = this.part(wm.SPARK, jQ.x + Math.cos(l2) * l3, jQ.y + Math.sin(l2) * l3, -Math.cos(l2) * l3 / 16, -Math.sin(l2) * l3 / 16, 16, jg.col || 0, 1.4);
        if (l4 >= 0) {
          this.qdrag[l4] = 1;
        }
      }
    }
    this.emit("phase", this.bi, jr);
    if (jz.init) {
      jz.init(this, this.S);
    }
  }
  endPhase(jr) {
    let jg = this.phase;
    let jz = this.boss;
    let jQ = jg.spell && !this.cardFailed && (!jr || jg.survival);
    this.clearBullets(true);
    for (let l2 of this.lasers) {
      if (l2.on && l2.t < l2.warn + l2.life) {
        l2.t = Math.max(l2.t, l2.warn + l2.life);
      }
    }
    this.itemsHomeT = 45;
    let jH = 0;
    if (jg.spell) {
      if (jQ) {
        jH = Math.round(this.cardBonus / 10) * 10;
        this.P.score += jH;
        this.stats.captured++;
        this.stats.capturedIds.push(this.cardId(this.bi, this.pi));
        this.banner = {
          kind: "capture",
          text: "SPELL CARD BONUS!!",
          sub: String(jH),
          t: 0
        };
        this.snd("snd_great_shine", 0.9, 1);
      } else {
        this.banner = {
          kind: "failed",
          text: "BONUS FAILED...",
          sub: "",
          t: 0
        };
      }
      this.emit("card", this.cardId(this.bi, this.pi), jQ);
    }
    let l0 = this.pi >= jz.def.phases.length - 1;
    let l1 = this.mode === "practice";
    if (!l1) {
      if (!jr || jg.spell) {
        this.drop(jz.x, jz.y, l0 ? 10 : 6, l0 ? 14 : 8, jg.spell ? 1 : 0);
      } else {
        this.drop(jz.x, jz.y, 4, 3, 0);
      }
    }
    this.snd(l0 ? "snd_badexplosion" : "snd_bomb", l0 ? 1 : 0.6, 1);
    this.burst(jz.x, jz.y, l0 ? 40 : 18, l0 ? 9 : 6, 16, jz.def.col || 0, wm.SPARK, 1.6);
    this.part(wm.RING, jz.x, jz.y, 0, 0, l0 ? 24 : 14, 0, l0 ? 6 : 3);
    this.shake(l0 ? 7 : 3, l0 ? 24 : 8);
    if (l0) {
      this.flash(0, 16);
    }
    this.phase = null;
    if (l1) {
      this.finish("practice", jQ);
      return;
    }
    if (l0) {
      this.stats.bosses++;
      let l3 = (this.bi + 1) * 500000 * wj[this.diff];
      this.P.score += l3;
      this.popup(jz.x, jz.y + 40, String(l3), 3, 1);
      jz.dying = 50;
      this.emit("bossDown", this.bi);
    } else {
      this.gapT = 40;
    }
  }
  finish(jr, jg) {
    this.state = "ending";
    this.endT = jr === "over" ? 50 : 70;
    if (jr === "clear") {
      let jz = this.P;
      let jQ = (Math.max(0, jz.lives) * 3000000 + jz.bombs * 1000000) * wj[this.diff];
      jz.score += jQ;
    }
    this.result = {
      kind: jr,
      captured: !!jg
    };
  }
  cardId(jr, jg) {
    return this.bosses[jr].id + ":" + jg;
  }
  typeLine(jr) {
    if (jr.t - wO <= 0) {
      return;
    }
    let jg = 0;
    for (let jQ = 0; jQ < jr.line.length; jQ++) {
      jg += jr.line[jQ].length;
    }
    if (jr.chars >= jg) {
      return;
    }
    jr.chars++;
    let jz = this.boss.def;
    if (jz && jz.txt && jr.chars & 1) {
      this.snd(jz.txt, 0.5, 2);
    }
  }
  bomb() {
    let jr = this.P;
    if (this.bombT > 0 || jr.bombs <= 0 || !jr.alive || this.state !== "play") {
      return false;
    }
    jr.bombs--;
    jr.bombsUsed++;
    let jg = this.partner;
    this.bombKind = jg;
    this.bombMax = wf[jg] || 72;
    this.bombT = this.bombMax;
    this.bombX = jr.x;
    this.bombY = jr.y;
    jr.invuln = Math.max(jr.invuln, this.bombMax + (jg === "ralsei" ? 45 : 25));
    if (this.phase && this.phase.spell) {
      this.cardFailed = true;
    }
    if (jg === "kris") {
      this.freezeT = this.bombMax;
    } else {
      this.clearBullets(jg === "ralsei" || jg === "noelle", true);
    }
    for (let jz of this.lasers) {
      if (jz.on) {
        jz.t = Math.max(jz.t, jz.warn + jz.life);
      }
    }
    this.itemsHomeT = Math.max(this.itemsHomeT, this.bombMax);
    if (jg === "susie") {
      this.snd("snd_rudebuster_swing", 1, 1);
      this.shake(3, 10);
    } else if (jg === "noelle") {
      this.snd("snd_snowgrave", 0.9, 1);
      this.flash(5, 20);
    } else if (jg === "kris") {
      this.snd("snd_bell", 0.8, 1);
      this.snd("snd_weirdeffect", 0.7, 1);
      this.flash(6, 10);
    } else if (jg === "lancer") {
      let jQ = this.bike;
      jQ.on = 1;
      jQ.x = jQ.px = jr.x;
      jQ.y = jQ.py = jr.y + 10;
      jQ.vy = -2;
      this.snd("snd_motor_upper_2", 0.9, 1);
      this.snd("snd_lancerlaugh", 0.7, 1);
      this.shake(3, 8);
    } else if (jg === "berdly") {
      for (let jH = 0; jH < 3; jH++) {
        let l0 = this.storm[jH];
        l0.on = 1;
        l0.x = l0.px = Math.max(w8.x + 40, Math.min(w8.x2 - 40, jr.x + (jH - 1) * 96));
        l0.y = l0.py = w8.y2 + 30 + jH % 2 * 30;
      }
      this.snd("snd_rocket_long", 0.6, 1);
      this.snd("snd_wing", 0.9, 1);
      this.flash(5, 8);
    } else {
      this.snd("snd_spell_pacify", 1, 1);
      this.flash(3, 12);
    }
    this.emit("bomb", jg);
    return true;
  }
  kill() {
    let jr = this.P;
    jr.alive = 0;
    jr.deadT = 34;
    jr.deaths++;
    jr.hitT = 0;
    this.cardFailed = true;
    this.snd("snd_break2", 1, 1);
    this.shake(5, 14);
    this.flash(1, 6);
    for (let jg = 0; jg < 6; jg++) {
      let jz = -Math.PI / 2 + (jg - 2.5) * 0.5;
      this.part(wm.SHARD, jr.x, jr.y, Math.cos(jz) * 3.2, Math.sin(jz) * 3.2 - 1, 40, 1, 1);
    }
    this.burst(jr.x, jr.y, 16, 7, 14, 1, wm.SPARK, 1.3);
    this.part(wm.RING, jr.x, jr.y, 0, 0, 18, 1, 4);
    this.clearBullets(false, true);
    for (let jQ of this.lasers) {
      if (jQ.on) {
        jQ.t = Math.max(jQ.t, jQ.warn + jQ.life);
      }
    }
    if (this.mode !== "practice") {
      let jH = Math.min(1, jr.power);
      jr.power = Math.max(0, jr.power - 1);
      let l0 = Math.round(jH / 0.25);
      for (let l1 = 0; l1 < l0; l1++) {
        let l2 = this.item(jr.x + this.rr(-24, 24), jr.y - 10, 3);
        if (l2 >= 0) {
          this.ivy[l2] = -5 - l1 * 0.6;
          this.ivx[l2] = (l1 - (l0 - 1) / 2) * 1.2;
        }
      }
      jr.lives--;
    }
    this.emit("death");
  }
  respawn() {
    let jr = this.P;
    jr.alive = 1;
    jr.x = w8.cx;
    jr.y = w8.y2 + 20;
    jr.px = jr.x;
    jr.py = jr.y;
    jr.invuln = 100;
    jr.entering = 16;
    jr.bombs = Math.max(jr.bombs, this.bombBase);
  }
  addPower(jr) {
    let jg = this.P;
    let jz = Math.floor(jg.power);
    if (jg.power >= 4) {
      jg.score += 2000;
      return;
    }
    jg.power = Math.min(4, jg.power + jr);
    if (Math.floor(jg.power) > jz) {
      this.popup(jg.x, jg.y - 24, jg.power >= 4 ? "MAX" : "POWER UP", 2);
      this.snd("snd_power", 0.6, 4);
    }
  }
  addTP(jr) {
    let jg = this.P;
    jg.tp += jr;
    if (jg.tp >= 100) {
      jg.tp -= 100;
      if (jg.bombs < 8) {
        jg.bombs++;
        this.popup(jg.x, jg.y - 28, "+1 SPELL", 5);
        this.snd("snd_boost", 0.7, 2);
      } else {
        jg.score += 100000;
      }
    }
  }
  pointValue() {
    return 10000 + this.P.graze * 20;
  }
  tick(jr) {
    jr ||= this.inputZero;
    this.t++;
    if (this.state === "idle" || this.state === "done") {
      return;
    }
    let jg = this.P;
    if (this.flashT > 0) {
      this.flashT--;
    }
    if (this.shakeT > 0) {
      this.shakeT--;
    }
    if (this.banner) {
      let jz = this.banner;
      jz.t++;
      if (jz.t > (jz.kind === "spell" ? 1000000000 : jz.kind === "boss" ? jz.line ? 108 : 76 : 90)) {
        this.banner = null;
      } else if (jz.line) {
        this.typeLine(jz);
      }
    }
    for (let jQ = this.popups.length - 1; jQ >= 0; jQ--) {
      let jH = this.popups[jQ];
      jH.t++;
      jH.y -= jH.big ? 0.4 : 0.8;
      if (jH.t > (jH.big ? 70 : 40)) {
        this.popups.splice(jQ, 1);
      }
    }
    this.tickPlayer(jr);
    this.tickBoss();
    this.tickPhase();
    this.tickBullets();
    this.tickLasers();
    this.tickShots();
    this.tickItems();
    this.tickParticles();
    this.tickBomb();
    for (let l0 of this.markers) {
      if (l0.on && ++l0.t >= l0.life) {
        l0.on = false;
      }
    }
    if (this.mode !== "practice" && this.extendIdx < wM.length && jg.score >= wM[this.extendIdx] * wj[this.diff]) {
      this.extendIdx++;
      jg.lives++;
      this.popup(jg.x, jg.y - 34, "SOUL UP!", 1, 1);
      this.snd("snd_power", 1, 1);
      this.flash(1, 6);
    }
    if (this.bn > this.stats.maxBullets) {
      this.stats.maxBullets = this.bn;
    }
    if (this.state === "ending" && --this.endT <= 0) {
      this.state = "done";
      this.emit("done", this.result.kind);
    }
  }
  tickPlayer(jr) {
    let jg = this.P;
    jg.px = jg.x;
    jg.py = jg.y;
    if (jg.invuln > 0) {
      jg.invuln--;
    }
    jg.optAng += 0.12;
    if (!jg.alive) {
      if (this.state === "play" && --jg.deadT <= 0) {
        if (jg.lives < 0 || this.mode === "practice") {
          this.finish("over");
        } else {
          this.respawn();
        }
      }
      return;
    }
    if (jg.hitT > 0) {
      if (jr.bomb && jg.bombs > 0 && this.bombT <= 0) {
        jg.hitT = 0;
        this.bomb();
      } else if (--jg.hitT <= 0) {
        this.kill();
        return;
      }
    }
    if (jg.entering > 0) {
      jg.entering--;
      jg.y -= 4.2;
      jg.py = jg.y + 4.2;
      return;
    }
    let jz = jr.focus ? 1 : 0;
    jg.focus = jz;
    jg.focusT = jz ? Math.min(8, jg.focusT + 1) : Math.max(0, jg.focusT - 1);
    let jQ = jz ? 3.6 : 8;
    let jH = (jr.r ? 1 : 0) - (jr.l ? 1 : 0);
    let l0 = (jr.d ? 1 : 0) - (jr.u ? 1 : 0);
    if (jH && l0) {
      jH *= 0.7071;
      l0 *= 0.7071;
    }
    let l1 = jH * jQ;
    let l2 = l0 * jQ;
    if (jr.tdx || jr.tdy) {
      let l3 = Math.hypot(jr.tdx, jr.tdy);
      let l4 = l3 > 20 ? 20 / l3 : 1;
      l1 += jr.tdx * l4;
      l2 += jr.tdy * l4;
    }
    jg.x = Math.max(w8.x + 10, Math.min(w8.x2 - 10, jg.x + l1));
    jg.y = Math.max(w8.y + 16, Math.min(w8.y2 - 14, jg.y + l2));
    jg.lean += ((l1 > 0.5 ? 1 : l1 < -0.5 ? -1 : 0) - jg.lean) * 0.35;
    if (this.bombT > 0 && this.bombKind === "lancer") {
      jg.x = Math.max(w8.x + 10, Math.min(w8.x2 - 10, jg.x + l1 * 0.5));
      jg.y = Math.max(w8.y + 16, Math.min(w8.y2 - 14, jg.y + l2 * 0.5));
    }
    if (jr.bomb) {
      this.bomb();
    }
    if ((jr.shoot || jr.touch) && this.state === "play") {
      if (jg.shotT <= 0) {
        this.fire(jz);
        jg.shotT = 2;
      }
      if (jg.shotT2 <= 0) {
        jg.shotT2 = this.firePartner(jz);
      }
    }
    if (jg.shotT > 0) {
      jg.shotT--;
    }
    if (jg.shotT2 > 0) {
      jg.shotT2--;
    }
  }
  optionPos(jr, jg, jz, jQ) {
    let jH = this.P;
    let l0 = jH.focusT / 8;
    let l1 = jr & 1 ? 1 : -1;
    let l2 = (jr >> 1) + 1;
    let l3 = l1 * (18 + (l2 - 1) * 16);
    let l4 = 6 - (l2 - 1) * 10;
    let l5 = l1 * (10 + (l2 - 1) * 8);
    let l6 = -14 - (l2 - 1) * 8;
    let l8 = Math.sin(jH.optAng + jr) * 1.5;
    jQ.x = jH.x + l3 + (l5 - l3) * l0;
    jQ.y = jH.y + l4 + (l6 - l4) * l0 + l8;
    return jQ;
  }
  fire() {
    let jr = this.P;
    this.pshot(jr.x - 5, jr.y - 8, 0, -22, 1.6, 0);
    this.pshot(jr.x + 5, jr.y - 8, 0, -22, 1.6, 0);
    this.snd("snd_heartshot_dr_b", 0.16, 4);
  }
  firePartner(jr) {
    let jg = this.P;
    let jz = Math.min(4, Math.floor(jg.power));
    let jQ = jz || 1;
    let jH = jz ? 1 : 0.5;
    let l0 = Math.max(0.5, jz);
    let l1 = this._opt ||= {
      x: 0,
      y: 0
    };
    let l2 = l5 => {
      if (jz) {
        this.optionPos(l5, jz, jr, l1);
      } else {
        l1.x = jg.x;
        l1.y = jg.y - 6;
      }
      return l1;
    };
    let l3 = l5 => jz ? (l5 & 1 ? 1 : -1) * (1 + (l5 >> 1)) : 0;
    let l4 = (l5, l6, l8, l9, lP, lw) => this.pshot(l5, l6, Math.sin(l8) * l9, -Math.cos(l8) * l9, lP, lw);
    switch (this.partner) {
      case "susie":
        if (jr) {
          l4(jg.x, jg.y - 22, 0, 24, l0 * 1.3, 3);
          return 2;
        }
        for (let l5 = 0; l5 < jQ; l5++) {
          l2(l5);
          let l6 = l3(l5);
          l4(l1.x, l1.y - 6, l6 * 0.13 + Math.sign(l6) * 0.05, 9, jH * 2.6, 2);
        }
        this.snd("snd_smallswing", 0.18, 6);
        return 6;
      case "ralsei":
        if (jr) {
          for (let l8 = 0; l8 < jQ; l8++) {
            l2(l8);
            l4(l1.x, l1.y - 6, 0, 18, jH * 1.25, 5);
          }
          return 2;
        }
        for (let l9 = 0; l9 < jQ; l9++) {
          l2(l9);
          let lP = l3(l9);
          let lw = l4(l1.x, l1.y - 6, lP * 0.22 + Math.sign(lP) * 0.12, 8, jH * 1.6, 4);
          if (lw >= 0) {
            this.shome[lw] = 0.13;
            this.slife[lw] = 80;
          }
        }
        return 5;
      case "noelle":
        if (jr) {
          for (let lj = 0; lj < jQ; lj++) {
            l2(lj);
            l4(l1.x, l1.y - 10, 0, 22, jH * 2.4, 7);
          }
          this.snd("snd_icespell", 0.1, 8, 1.6);
          return 4;
        }
        for (let ll = 0; ll < jQ; ll++) {
          l2(ll);
          let lD = l3(ll);
          l4(l1.x, l1.y - 6, lD * 0.07 + Math.sign(lD) * 0.03, 26, jH * 0.95, 6);
        }
        return 2;
      case "kris":
        {
          if (jr) {
            l4(jg.x, jg.y - 26, 0, 30, l0 * 1.8, 9);
            this.snd("snd_laz", 0.12, 6, 1.3);
            return 3;
          }
          let lO = l4(jg.x + (this.t >> 2 & 1 ? 10 : -10), jg.y - 30, 0, 14, l0 * 3, 8);
          if (lO >= 0) {
            this.slife[lO] = 7;
          }
          this.snd("snd_laz", 0.2, 4);
          return 4;
        }
      case "lancer":
        if (jr) {
          l4(jg.x, jg.y - 20, 0, 11, l0 * 3.6, 11);
          this.snd("snd_spearappear", 0.18, 10);
          return 10;
        }
        for (let lf = 0; lf < jQ; lf++) {
          l2(lf);
          let lR = l3(lf);
          let lu = l4(l1.x, l1.y - 6, lR * 0.09, 10, jH * 2, 10);
          if (lu >= 0) {
            this.sbnc[lu] = 2;
            this.slife[lu] = 150;
          }
        }
        return 6;
      case "berdly":
        if (jr) {
          for (let lv = 0; lv < jQ; lv++) {
            l2(lv);
            l4(l1.x, l1.y - 6, 0, 32, jH * 1.2, 13);
          }
          return 2;
        }
        {
          let lc = jz + 2;
          let lZ = 0.25 + jz * 0.08;
          for (let la = 0; la < lc; la++) {
            l4(jg.x, jg.y - 12, -lZ + lZ * 2 * la / (lc - 1), 16, 0.6, 12);
          }
        }
        this.snd("snd_wing", 0.12, 6, 1.4);
        return 3;
    }
    return 4;
  }
  pshot(jr, jg, jz, jQ, jH, l0) {
    if (this.sfn === 0) {
      return -1;
    }
    let l1 = this.sfree[--this.sfn];
    this.spos[l1] = this.sn;
    this.slive[this.sn++] = l1;
    this.sx[l1] = jr;
    this.sy[l1] = jg;
    this.spx[l1] = jr;
    this.spy[l1] = jg;
    this.svx[l1] = jz;
    this.svy[l1] = jQ;
    this.sdmg[l1] = jH;
    this.skind[l1] = l0;
    this.shome[l1] = 0;
    this.slife[l1] = -1;
    this.sbnc[l1] = 0;
    this.spass[l1] = 0;
    this.sage[l1] = 0;
    return l1;
  }
  killShot(jr) {
    let jg = this.spos[jr];
    let jz = this.slive[--this.sn];
    this.slive[jg] = jz;
    this.spos[jz] = jg;
    this.sfree[this.sfn++] = jr;
  }
  tickShots() {
    let jr = this.boss;
    let jg = jr.show && this.phase && jr.hp > 0;
    let jz = wu[this.partner][this.pal & 1];
    for (let jQ = this.sn - 1; jQ >= 0; jQ--) {
      let jH = this.slive[jQ];
      let l0 = this.skind[jH];
      this.spx[jH] = this.sx[jH];
      this.spy[jH] = this.sy[jH];
      this.sage[jH]++;
      if (this.slife[jH] >= 0 && --this.slife[jH] < 0) {
        if (l0 === 8) {
          this.part(wm.GLINT, this.sx[jH], this.sy[jH], 0, -1, 6, jz, 1);
        }
        this.killShot(jH);
        continue;
      }
      if (this.shome[jH] > 0 && jg) {
        let lj = Math.atan2(this.svy[jH], this.svx[jH]);
        let ll = Math.atan2(jr.y - this.sy[jH], jr.x - this.sx[jH]) - lj;
        while (ll > Math.PI) {
          ll -= wn;
        }
        while (ll < -Math.PI) {
          ll += wn;
        }
        let lD = Math.max(-this.shome[jH], Math.min(this.shome[jH], ll));
        let lO = Math.min(13, Math.hypot(this.svx[jH], this.svy[jH]) + 0.25);
        this.svx[jH] = Math.cos(lj + lD) * lO;
        this.svy[jH] = Math.sin(lj + lD) * lO;
      }
      this.sx[jH] += this.svx[jH];
      this.sy[jH] += this.svy[jH];
      if (this.sbnc[jH] > 0) {
        if (this.sx[jH] < w8.x + 6 && this.svx[jH] < 0 || this.sx[jH] > w8.x2 - 6 && this.svx[jH] > 0) {
          this.svx[jH] = -this.svx[jH];
          this.sbnc[jH]--;
        } else if (this.sy[jH] < w8.y + 6 && this.svy[jH] < 0) {
          this.svy[jH] = -this.svy[jH] * 0.8;
          this.sbnc[jH]--;
        }
      }
      if (this.sy[jH] < w8.y - 20 || this.sy[jH] > w8.y2 + 20 || this.sx[jH] < w8.x - 20 || this.sx[jH] > w8.x2 + 20) {
        this.killShot(jH);
        continue;
      }
      if (!jg) {
        continue;
      }
      let l1 = jr.hitR + 6 + wR[l0];
      let l2 = this.spx[jH] - jr.x;
      let l3 = this.spy[jH] - jr.y;
      let l4 = this.sx[jH] - this.spx[jH];
      let l5 = this.sy[jH] - this.spy[jH];
      let l6 = l4 * l4 + l5 * l5;
      let l8 = l6 > 0 ? -(l2 * l4 + l3 * l5) / l6 : 1;
      if (l8 < 0) {
        l8 = 0;
      } else if (l8 > 1) {
        l8 = 1;
      }
      let l9 = l2 + l4 * l8;
      let lP = l3 + l5 * l8;
      if (l9 * l9 + lP * lP >= l1 * l1) {
        continue;
      }
      let lw = l0 === 6 || l0 === 7;
      if (!lw || !this.spass[jH]) {
        if (this.damageBoss(this.sdmg[jH])) {
          if (l0 === 0) {
            if ((jQ & 1) === 0) {
              let lf = this.part(wm.SPRITE, this.sx[jH], Math.max(this.sy[jH], jr.y + 4), 0, -1, 10, 0, 1, 0);
              if (lf >= 0) {
                this.qrot[lf] = -Math.PI / 2;
              }
            }
          } else if ((jQ & 1) === 0 || l0 === 8 || l0 === 11) {
            this.burst(jr.x + l9, jr.y + lP, l0 === 8 ? 6 : 2, 4, 7, jz, wm.SPARK, 1.2);
          }
          if (l0 === 11) {
            for (let lR = 0; lR < 6; lR++) {
              let lu = lR * wn / 6 + this.t * 0.3;
              let lv = this.pshot(jr.x + l9, jr.y + lP, Math.cos(lu) * 5, Math.sin(lu) * 5, this.sdmg[jH] * 0.3 / 3, 14);
              if (lv >= 0) {
                this.slife[lv] = 9;
              }
            }
            this.part(wm.RING, jr.x + l9, jr.y + lP, 0, 0, 10, jz, 1.4);
            this.snd("snd_bomb", 0.25, 8, 1.4);
          }
          this.snd("snd_damage", 0.22, 5);
        } else if ((jQ & 3) === 0) {
          this.part(wm.GLINT, this.sx[jH], this.sy[jH], 0, -1, 6, 3, 1);
        }
        if (lw) {
          this.spass[jH] = 1;
          continue;
        }
        this.killShot(jH);
      }
    }
  }
  tickBoss() {
    let jr = this.boss;
    jr.px = jr.x;
    jr.py = jr.y;
    jr.anim++;
    if (jr.dmgT > 0) {
      jr.dmgT--;
    }
    if (jr.invuln > 0) {
      jr.invuln--;
    }
    if (jr.mt < jr.md) {
      jr.mt++;
      let jg = jr.mt / jr.md;
      let jz = 1 - (1 - jg) * (1 - jg);
      jr.x = jr.sx + (jr.tx - jr.sx) * jz;
      jr.y = jr.sy + (jr.ty - jr.sy) * jz;
      if (Math.abs(jr.tx - jr.sx) + Math.abs(jr.ty - jr.sy) > 40 && jr.mt & 1) {
        jr.trail = 6;
      }
    }
    if (jr.trail > 0) {
      jr.trail--;
    }
    if (jr.dying > 0) {
      jr.dying--;
      if (jr.dying % 6 === 0) {
        this.burst(jr.x + this.rr(-30, 30), jr.y + this.rr(-30, 30), 10, 6, 14, jr.def.col || 0, wm.SPARK, 1.4);
        this.snd("snd_bomb", 0.5, 5);
        this.shake(3, 5);
      }
      jr.alpha = Math.max(0, jr.dying / 50);
      if (jr.dying === 0) {
        jr.show = 0;
        this.part(wm.RING, jr.x, jr.y, 0, 0, 30, 0, 9);
        this.flash(0, 14);
        this.shake(8, 20);
        this.snd("snd_badexplosion", 1, 1);
        if (this.bi + 1 >= (this.opts.rushEnd || this.bosses.length) || this.bosses[this.bi + 1].extra || this.mode === "boss") {
          this.finish("clear");
        } else {
          this.nextBossT = 70;
        }
      }
    }
    if (this.nextBossT > 0 && --this.nextBossT === 0) {
      this.enterBoss(this.bi + 1, false);
    }
  }
  tickPhase() {
    if (this.state !== "play") {
      return;
    }
    let jr = this.boss;
    if (!jr.def || jr.dying > 0 || !jr.show) {
      return;
    }
    if (this.introT > 0) {
      this.introT--;
      return;
    }
    if (!this.phase) {
      if (this.gapT > 0) {
        this.gapT--;
        if (this.gapT === 20 && this.pi + 1 < jr.def.phases.length) {
          this.bossMove(w8.cx, w8.y + 100, 20);
        }
        return;
      }
      if (this.pi + 1 < jr.def.phases.length) {
        this.beginPhase(this.pi + 1);
      }
      return;
    }
    if (this.declT > 0) {
      this.declT--;
      if (this.declT === 0 && this.banner && this.banner.kind === "spell") {
        this.banner.settled = 1;
      }
      return;
    }
    let jg = this.phase;
    this.pt++;
    this.timer--;
    if (jg.spell && !this.cardFailed && !jg.survival) {
      this.cardBonus = this.cardBonusMax * (0.4 + Math.max(0, this.timer) * 0.6 / this.timerMax);
    }
    if (this.timer <= wP * 10 && this.timer > 0 && this.timer % wP === 0) {
      this.snd(this.timer <= wP * 5 ? "snd_bell" : "snd_menumove", this.timer <= wP * 5 ? 0.35 : 0.5, 1);
    }
    if (jg.tick) {
      jg.tick(this, this.S, this.pt);
    }
    if (jr.hp <= 0) {
      this.endPhase(false);
      return;
    }
    if (this.timer <= 0) {
      this.endPhase(true);
      return;
    }
  }
  tickBullets() {
    let jr = this.P;
    let jg = jr.x;
    let jz = jr.y;
    let jQ = jr.px;
    let jH = jr.py;
    let l0 = jr.alive && jr.invuln <= 0 && jr.hitT <= 0 && this.state === "play" && !(jr.entering > 0);
    let l1 = jr.alive && this.state === "play";
    let l2 = 2.5;
    let l3 = this.partner === "ralsei" && jr.focus ? 24 : 18;
    let l4 = 0;
    if (this.freezeT > 0) {
      for (let l5 = 0; l5 < this.bn; l5++) {
        let l6 = this.blive[l5];
        this.bpx[l6] = this.bx[l6];
        this.bpy[l6] = this.by[l6];
        this.bprot[l6] = this.brot[l6];
      }
      if (this.bn > this.peakBullets) {
        this.peakBullets = this.bn;
      }
      return;
    }
    for (let l8 = this.bn - 1; l8 >= 0; l8--) {
      let l9 = this.blive[l8];
      this.bpx[l9] = this.bx[l9];
      this.bpy[l9] = this.by[l9];
      this.bprot[l9] = this.brot[l9];
      let lP = ++this.bage[l9];
      let lw = wZ[this.btype[l9]];
      if (this.bdelay[l9] > 0 && --this.bdelay[l9] === 0) {
        this.bflag[l9] &= ~wX;
      }
      if (this.bevT[l9] === lP && this.bulletEvent(l9)) {
        continue;
      }
      let lj = this.bacc[l9];
      let ll = this.bw[l9];
      let lD = this.bgrav[l9];
      if (lj !== 0 || ll !== 0) {
        let lZ = this.bspd[l9] + lj;
        if (lj > 0 && lZ > this.blim[l9]) {
          lZ = this.blim[l9];
        } else if (lj < 0 && lZ < this.blim[l9]) {
          lZ = this.blim[l9];
        }
        this.bspd[l9] = lZ;
        let la = this.bdir[l9] + ll;
        this.bdir[l9] = la;
        this.bvx[l9] = Math.cos(la) * lZ;
        this.bvy[l9] = Math.sin(la) * lZ;
        if (lw.orient === 1) {
          this.brot[l9] = la;
        }
      }
      if (lD !== 0) {
        this.bvy[l9] += lD;
        if (this.bvy[l9] > 7) {
          this.bvy[l9] = 7;
        }
        if (lw.orient === 1) {
          this.brot[l9] = Math.atan2(this.bvy[l9], this.bvx[l9]);
        }
      }
      let lO = this.bx[l9] + this.bvx[l9];
      let lf = this.by[l9] + this.bvy[l9];
      if (lw.orient === 2) {
        this.brot[l9] += lw.spin * wY;
      }
      if (this.bbnc[l9] > 0) {
        let lY = false;
        if (lO < w8.x + 6 && this.bvx[l9] < 0) {
          this.bvx[l9] = -this.bvx[l9];
          lY = true;
        } else if (lO > w8.x2 - 6 && this.bvx[l9] > 0) {
          this.bvx[l9] = -this.bvx[l9];
          lY = true;
        }
        if (lf < w8.y + 6 && this.bvy[l9] < 0) {
          this.bvy[l9] = -this.bvy[l9];
          lY = true;
        }
        if (lY) {
          this.bbnc[l9]--;
          this.bdir[l9] = Math.atan2(this.bvy[l9], this.bvx[l9]);
          if (lw.orient === 1) {
            this.brot[l9] = this.bdir[l9];
          }
        }
      }
      this.bx[l9] = lO;
      this.by[l9] = lf;
      let lR = 24 + lw.r * 2;
      if ((lO < w8.x - lR || lO > w8.x2 + lR || lf < w8.y - lR - (lP < 90 ? 120 : 0) || lf > w8.y2 + lR) && (!(this.bflag[l9] & wJ) || !(lP < 400))) {
        this.killBullet(l9);
        continue;
      }
      let lu = lO - jg;
      let lv = lf - jz;
      if (lu > 24 + lw.r || lu < -24 - lw.r || lv > 24 + lw.r || lv < -24 - lw.r || this.bflag[l9] & wX) {
        continue;
      }
      let lc = lw.r + l2;
      if (l0) {
        let ln = this.bpx[l9] - jQ;
        let lp = this.bpy[l9] - jH;
        let lK = lu - ln;
        let lU = lv - lp;
        let lL = lK * lK + lU * lU;
        let lo = lL > 0 ? -(ln * lK + lp * lU) / lL : 1;
        if (lo < 0) {
          lo = 0;
        } else if (lo > 1) {
          lo = 1;
        }
        let lA = ln + lK * lo;
        let lX = lp + lU * lo;
        if (lA * lA + lX * lX < lc * lc) {
          jr.hitT = 4;
          this.snd("snd_hurt1", 0.9, 1);
          this.flash(1, 3);
          this.killBullet(l9);
          continue;
        }
      }
      if (l1 && !(this.bflag[l9] & wA)) {
        let lJ = l3 + lw.r;
        if (lu * lu + lv * lv < lJ * lJ) {
          this.bflag[l9] |= wA;
          l4++;
        }
      }
    }
    if (l4) {
      this.grazeN(l4);
    }
    if (this.bn > this.peakBullets) {
      this.peakBullets = this.bn;
    }
  }
  grazeN(jr) {
    let jg = this.P;
    jg.graze += jr;
    jg.score += jr * (200 + Math.floor(jg.graze / 10) * 10);
    this.addTP(jr * (this.partner === "ralsei" && jg.focus ? 4 : 2.5));
    for (let jz = 0; jz < Math.min(jr, 3); jz++) {
      let jQ = this.rand() * wn;
      this.part(wm.SQUARE, jg.x, jg.y, Math.cos(jQ) * 3, Math.sin(jQ) * 3, 9, 0, 1);
    }
    this.P.grazeFlash = 6;
    this.snd("snd_graze", 0.45, 3);
  }
  bulletEvent(jr) {
    let jg = this.bevK[jr];
    this.bevT[jr] = -1;
    let jz = this.bevA[jr];
    let jQ = this.bevB[jr];
    let jH = this.bevC[jr];
    let l0 = this.bevD[jr];
    switch (jg) {
      case wT.AIM:
        this.bacc[jr] = 0;
        this.bw[jr] = 0;
        this.bSetDir(jr, this.aim(this.bx[jr], this.by[jr]) + jz, jQ);
        return false;
      case wT.TURN:
        this.bSetDir(jr, this.bdir[jr] + jz, jQ >= 0 ? jQ : this.bspd[jr]);
        return false;
      case wT.SPEED:
        this.bspd[jr] = jz;
        this.bacc[jr] = jQ;
        this.blim[jr] = jH;
        this.bSetDir(jr, this.bdir[jr]);
        return false;
      case wT.STOP:
        this.bacc[jr] = 0;
        this.bw[jr] = 0;
        this.bgrav[jr] = 0;
        this.bSetDir(jr, this.bdir[jr], 0);
        return false;
      case wT.BURST:
      case wT.AIMBURST:
        {
          let l1 = this.bx[jr];
          let l2 = this.by[jr];
          let l3 = jz | 0;
          let l4 = jg === wT.AIMBURST ? this.aim(l1, l2) : this.rand() * wn;
          this.killBullet(jr);
          this.ring(l1, l2, l3, l4, jQ, jH | 0, l0 | 0);
          this.part(wm.RING, l1, l2, 0, 0, 10, l0 | 0, 1.2);
          return true;
        }
      case wT.CALL:
        {
          let l5 = this.phase && this.phase.ev;
          if (l5) {
            return l5(this, this.S, jr, jz, jQ) === true;
          } else {
            return false;
          }
        }
    }
    return false;
  }
  tickLasers() {
    let jr = this.P;
    let jg = jr.alive && jr.invuln <= 0 && jr.hitT <= 0 && this.state === "play" && !(jr.entering > 0);
    for (let jz of this.lasers) {
      if (!jz.on) {
        continue;
      }
      jz.t++;
      jz.pang = jz.ang;
      jz.ang += jz.w;
      if (jz.follow) {
        jz.x = jz.follow.x + jz.fx;
        jz.y = jz.follow.y + jz.fy;
      }
      let jQ = jz.warn + jz.life + jz.fade;
      if (jz.t >= jQ) {
        jz.on = false;
        continue;
      }
      if (jz.t <= jz.warn + 2 || jz.t > jz.warn + jz.life) {
        continue;
      }
      let jH = Math.cos(jz.ang);
      let l0 = Math.sin(jz.ang);
      let l1 = jr.x - jz.x;
      let l2 = jr.y - jz.y;
      let l3 = l1 * jH + l2 * l0;
      if (l3 < 0 || l3 > jz.len) {
        continue;
      }
      let l4 = Math.abs(-l1 * l0 + l2 * jH);
      let l5 = jz.width * 0.5 * 0.72;
      if (jg && l4 < l5 + 1.5) {
        jr.hitT = 4;
        this.snd("snd_hurt1", 0.9, 1);
        this.flash(1, 3);
        continue;
      }
      if (jr.alive && l4 < l5 + 20 && jz.grazeT <= 0) {
        jz.grazeT = 6;
        this.grazeN(1);
      }
      if (jz.grazeT > 0) {
        jz.grazeT--;
      }
    }
  }
  tickItems() {
    let jr = this.P;
    let jg = jr.alive && (jr.y < w9 || this.itemsHomeT > 0 || this.bombT > 0);
    if (this.itemsHomeT > 0) {
      this.itemsHomeT--;
    }
    for (let jz = this.inn - 1; jz >= 0; jz--) {
      let jQ = this.ilive[jz];
      this.ipx[jQ] = this.ix[jQ];
      this.ipy[jQ] = this.iy[jQ];
      this.iage[jQ]++;
      let jH = this.ikind[jQ];
      if (jr.alive && (this.ihome[jQ] || jg)) {
        this.ihome[jQ] ||= 2;
        let l3 = jr.x - this.ix[jQ];
        let l4 = jr.y - this.iy[jQ];
        let l5 = Math.hypot(l3, l4) || 1;
        let l6 = jH === 2 ? Math.min(14, 3 + this.iage[jQ] * 0.6) : 13;
        this.ix[jQ] += l3 / l5 * Math.min(l6, l5);
        this.iy[jQ] += l4 / l5 * Math.min(l6, l5);
      } else {
        if (jH === 2) {
          this.iy[jQ] += this.ivy[jQ];
          this.ivy[jQ] = Math.min(this.ivy[jQ] + 0.1, 2);
        } else {
          this.ivx[jQ] *= 0.92;
          this.ivy[jQ] = Math.min(this.ivy[jQ] + 0.2, 2.8);
          this.ix[jQ] += this.ivx[jQ];
          this.iy[jQ] += this.ivy[jQ];
        }
        if (this.iy[jQ] > w8.y2 + 16) {
          this.killItem(jQ);
          continue;
        }
      }
      let l0 = this.ix[jQ] - jr.x;
      let l1 = this.iy[jQ] - jr.y;
      let l2 = l0 * l0 + l1 * l1;
      if (jr.alive && l2 < 1600 && !this.ihome[jQ]) {
        this.ihome[jQ] = 1;
      }
      if (jr.alive && l2 < 400) {
        this.collect(jQ, jH);
        this.killItem(jQ);
      }
    }
  }
  collect(jr, jg) {
    let jz = this.P;
    if (jg === 0) {
      this.addPower(0.05);
      jz.score += 100;
      this.snd("snd_coin", 0.14, 3, 1.3);
    } else if (jg === 3) {
      this.addPower(0.25);
      jz.score += 500;
      this.snd("snd_coin", 0.2, 3, 1.1);
    } else if (jg === 1) {
      let jQ = this.ihome[jr] === 2 || this.iy[jr] < w9;
      let jH = jQ ? this.pointValue() : Math.round(this.pointValue() * Math.max(0.2, 1 - (this.iy[jr] - w9) / (w8.y2 - w9)) / 10) * 10;
      jz.score += jH;
      if (jQ || jH > 4000) {
        this.popup(this.ix[jr], this.iy[jr] - 8, String(jH), jQ ? 3 : 0);
      }
      this.snd("snd_coin", 0.14, 3, 1.5);
    } else if (jg === 2) {
      jz.score += 100 + Math.floor(jz.graze / 20) * 10;
    }
  }
  tickParticles() {
    for (let jr = this.qn - 1; jr >= 0; jr--) {
      let jg = this.qlive[jr];
      this.qpx[jg] = this.qx[jg];
      this.qpy[jg] = this.qy[jg];
      if (--this.qlife[jg] <= 0) {
        let jQ = this.qpos[jg];
        let jH = this.qlive[--this.qn];
        this.qlive[jQ] = jH;
        this.qpos[jH] = jQ;
        this.qfree[this.qfn++] = jg;
        continue;
      }
      this.qx[jg] += this.qvx[jg];
      this.qy[jg] += this.qvy[jg];
      let jz = this.qdrag[jg];
      this.qvx[jg] *= jz;
      this.qvy[jg] *= jz;
      if (this.qkind[jg] === wm.SHARD) {
        this.qvy[jg] += 0.25;
      }
      if (this.qkind[jg] === wm.FLAKE) {
        this.qvy[jg] += 0.03;
        this.qx[jg] += Math.sin((this.t + jg) * 0.1) * 0.6;
      }
      this.qrot[jg] += this.qvr[jg];
    }
  }
  tickBomb() {
    if (this.bombT <= 0) {
      return;
    }
    let jr = this.bombKind;
    let jg = this.P;
    let jz = this.boss;
    let jQ = this.bombMax - this.bombT;
    this.bombT--;
    let jH = jz.show && this.phase && jz.hp > 0;
    if (jr === "susie") {
      let l0 = jg.y - jQ * 12;
      this.bombY = l0;
      this.bombX = jg.x;
      this.clearBullets(false, false, jg.x, l0, 90);
      if (jQ % 3 === 0) {
        this.part(wm.SPRITE, jg.x + this.rr(-30, 30), l0 + this.rr(-10, 30), this.rr(-1, 1), -2, 12, 0, 1, 1);
      }
      if (jH && Math.abs(jz.x - jg.x) < 110 && l0 < jz.y + 60 && l0 > jz.y - 120 && this.damageBossBomb(3.2) && jQ % 4 === 0) {
        this.snd("snd_rudebuster_hit", 0.8, 6);
        this.shake(4, 6);
        this.burst(jz.x, jz.y, 6, 8, 10, 7, wm.SPARK, 1.4);
      }
      if (this.bombT === 0) {
        this.bombY = 0;
      }
      if (l0 < w8.y - 60 && jQ % 10 === 0) {
        this.clearBullets(false, true);
      }
    } else if (jr === "noelle") {
      if (jQ % 2 === 0) {
        let l1 = this.part(wm.FLAKE, this.rr(w8.x, w8.x2), w8.y - 10, this.rr(-1, 1), this.rr(2, 5), 60, 5, this.rr(0.6, 1.4));
        if (l1 >= 0) {
          this.qvr[l1] = 0.05;
        }
      }
      if (jQ % 6 === 0) {
        this.clearBullets(true, true);
      }
      if (jH && jQ > 20) {
        this.damageBossBomb(1.8);
      }
      if (jQ === 24) {
        this.snd("snd_icespell", 0.8, 1);
        this.shake(3, 16);
      }
    } else if (jr === "kris") {
      this.freezeT = this.bombT;
      if (jH && jQ > 18 && jQ < 84 && (this.damageBossBomb(1.2), jQ % 8 === 2)) {
        let l2 = this.part(wm.SPRITE, jz.x + this.rr(-26, 26), jz.y + this.rr(-20, 20), 0, 0, 10, 0, 1, 3);
        if (l2 >= 0) {
          this.qdrag[l2] = 1;
        }
        this.snd("snd_laz", 0.5, 4);
        this.shake(2, 4);
      }
      if (this.bombT === 0) {
        this.clearBullets(true, true);
        this.snd("snd_glassbreak", 0.5, 1);
        this.flash(6, 8);
      }
    } else if (jr === "lancer") {
      let l3 = this.bike;
      l3.px = l3.x;
      l3.py = l3.y;
      let l4 = jQ < 26 || jQ >= 46 && jQ < 66;
      l3.vy = l4 ? Math.max(-15, l3.vy - 1.6) : Math.min(15, l3.vy + 1.6);
      l3.y = Math.max(w8.y + 30, Math.min(w8.y2 + 20, l3.y + l3.vy));
      let l5 = jH ? jz.x : jg.x;
      l3.x += Math.max(-6, Math.min(6, (l5 - l3.x) * 0.12));
      this.clearBullets(true, false, l3.x, l3.y, 52);
      if (jQ % 3 === 0) {
        this.part(wm.SPARK, l3.x + this.rr(-12, 12), l3.y + 26, this.rr(-1, 1), 3, 10, 7, 1.2);
      }
      if (jH && Math.abs(jz.x - l3.x) < 64 && Math.abs(jz.y - l3.y) < 64 && this.damageBossBomb(2.6) && jQ % 4 === 0) {
        this.snd("snd_hitcar", 0.6, 6);
        this.shake(4, 6);
        this.burst(jz.x, jz.y, 6, 8, 10, 7, wm.SPARK, 1.4);
      }
      if (jQ === 40) {
        this.snd("snd_carhonk", 0.6, 1);
      }
      if (this.bombT === 0) {
        l3.on = 0;
      }
    } else if (jr === "berdly") {
      for (let l6 = 0; l6 < 3; l6++) {
        let l8 = this.storm[l6];
        if (!l8.on || (l8.px = l8.x, l8.py = l8.y, jQ < l6 * 6)) {
          continue;
        }
        l8.y -= 6;
        let l9 = jH ? jz.x + (l6 - 1) * 30 : l8.x;
        l8.x += Math.max(-3, Math.min(3, (l9 - l8.x) * 0.06)) + Math.sin((jQ + l6 * 9) * 0.3) * 2;
        this.clearBullets(true, false, l8.x, l8.y, 48);
        if (jQ % 4 === l6) {
          let lP = this.part(wm.SPRITE, l8.x + this.rr(-30, 30), l8.y + this.rr(-20, 30), this.rr(-2, 2), this.rr(-3, -1), 18, 0, 1, 4);
          if (lP >= 0) {
            this.qvr[lP] = 0.2;
          }
        }
        if (jH && Math.abs(jz.x - l8.x) < 60 && Math.abs(jz.y - l8.y) < 64) {
          this.damageBossBomb(1.2);
        }
        if (l8.y < w8.y - 60) {
          l8.y = w8.y2 + 40;
        }
      }
      if (this.bombT === 0) {
        for (let lw of this.storm) {
          lw.on = 0;
        }
      }
    } else {
      if (jQ % 4 === 0) {
        this.clearBullets(true, true);
      }
      if (jQ % 5 === 0) {
        let lj = this.part(wm.SPRITE, jg.x + this.rr(-120, 120), jg.y + this.rr(-160, 20), 0, -1.2, 24, 0, 1, 2);
        if (lj >= 0) {
          this.qdrag[lj] = 1;
        }
      }
      if (jH && jQ > 12) {
        this.damageBossBomb(0.9);
      }
    }
  }
  damageBossBomb(jr) {
    let jg = this.boss;
    if (!this.phase || this.declT > 0 || this.phase.survival || jg.hp <= 0) {
      return false;
    } else {
      jg.hp -= jr * this.bossDmgMult();
      jg.dmgT = 2;
      this.P.score += Math.round(jr * 10) * 10;
      return true;
    }
  }
  counts() {
    return {
      bullets: this.bn,
      shots: this.sn,
      items: this.inn,
      parts: this.qn,
      lasers: this.lasers.filter(jr => jr.on).length
    };
  }
};
v(wI, "Sim");
var wb = wI;
var wE = Math.PI * 2;
var wN = Math.PI / 180;
var wG = 2;
var wy = "#00c000";
var wq = new Map();
function wS(jr, jg) {
  if (typeof document === "undefined") {
    return new OffscreenCanvas(jr, jg);
  }
  let jz = document.createElement("canvas");
  jz.width = jr;
  jz.height = jg;
  return jz;
}
v(wS, "mk");
var wF = 1024;
var wd = 12;
var wB = [];
var wh = 0;
var wk = 0;
var wV = 0;
function wC(jr) {
  let jg = jr.width;
  let jz = jr.height;
  if (jg > wF || jz > wF) {
    return false;
  }
  if (!wB.length || wh + jg + 2 > wF) {
    wh = 0;
    wk += wV + 2;
    wV = 0;
  }
  if (!wB.length || wk + jz + 2 > wF) {
    if (wB.length >= wd) {
      return false;
    }
    wB.push(wS(wF, wF));
    wh = 0;
    wk = 0;
    wV = 0;
  }
  let jQ = wB[wB.length - 1];
  let jH = jQ.getContext("2d");
  jH.imageSmoothingEnabled = false;
  jH.drawImage(jr, wh, wk);
  let l0 = {
    pg: jQ,
    sx: wh,
    sy: wk,
    sw: jg,
    sh: jz
  };
  wh += jg + 2;
  if (jz > wV) {
    wV = jz;
  }
  return l0;
}
v(wC, "pack");
function wr(jr, jg) {
  let jz = wC(jg);
  if (jz) {
    jr.pg = jz.pg;
    jr.sx = jz.sx;
    jr.sy = jz.sy;
    jr.sw = jz.sw;
    jr.sh = jz.sh;
  } else {
    jr.pg = jg;
    jr.sx = 0;
    jr.sy = 0;
    jr.sw = jg.width;
    jr.sh = jg.height;
  }
  return jr;
}
v(wr, "packInto");
var wg = new Map();
if (R.scBlank === undefined) {
  R.scBlank = true;
}
if (R.scGridFill === undefined) {
  R.scGridFill = true;
}
var wz = [];
function wQ(jr, jg, jz, jQ, jH, l0) {
  let l1 = wq.get(l0);
  if (l1 !== undefined) {
    return l1;
  }
  let l2 = f[jr];
  let l3 = l2 ? Math.max(1, l2.frames) : 1;
  let l4 = l2 && l2.img && l2.img[(jg % l3 + l3) % l3];
  if (!l4 || !l4.width) {
    return null;
  }
  let l5 = null;
  if (!l4.__scOk) {
    if (R.scBlank) {
      if (l4.__pend) {
        l5 = {
          img: l4,
          kids: 0
        };
      } else {
        l4.__scOk = 1;
      }
    } else {
      let lP = wg.get(l0);
      if (lP !== undefined && jP() < lP) {
        return null;
      }
      if (j2(l4)) {
        wg.set(l0, jP() + 250);
        return null;
      }
      wg.delete(l0);
      l4.__scOk = 1;
    }
  }
  let l6 = Math.max(1, Math.ceil(l2.w * jz * wG));
  let l8 = Math.max(1, Math.ceil(l2.h * jz * wG));
  let l9 = wS(l6, l8);
  l1 = {
    cv: l9,
    w: l6 / wG,
    h: l8 / wG,
    ox: (jH ? l2.w / 2 : l2.ox) * jz,
    oy: (jH ? l2.h / 2 : l2.oy) * jz,
    pg: null,
    sx: 0,
    sy: 0,
    sw: l6,
    sh: l8,
    unv: l5
  };
  if (l5) {
    l5.key = l0;
    l5.dw = l2.w * jz * wG;
    l5.dh = l2.h * jz * wG;
    l5.col = jQ;
  }
  wH(l1, l4, l2.w * jz * wG, l2.h * jz * wG, jQ);
  if (l0.charCodeAt(0) === 98) {
    wr(l1, l9);
  } else {
    l1.pg = l9;
  }
  if (l5) {
    wz.push(l1);
  }
  wq.set(l0, l1);
  return l1;
}
v(wQ, "vis");
function wH(jr, jg, jz, jQ, jH) {
  let l0 = jr.cv.getContext("2d");
  let l1 = jr.cv.width;
  let l2 = jr.cv.height;
  l0.imageSmoothingEnabled = false;
  l0.drawImage(jg, 0, 0, jz, jQ);
  if (jH >= 100) {
    l0.globalCompositeOperation = "source-in";
    l0.fillStyle = wc[jH - 100];
    l0.fillRect(0, 0, l1, l2);
  } else if (jH) {
    l0.globalCompositeOperation = "multiply";
    l0.fillStyle = wc[jH];
    l0.fillRect(0, 0, l1, l2);
    l0.globalCompositeOperation = "destination-in";
    l0.drawImage(jg, 0, 0, jz, jQ);
  }
}
v(wH, "paint");
function j0(jr) {
  let jg = jr.unv;
  jr.unv = null;
  jg.img.__scOk = 1;
  let jz = jr.cv.getContext("2d");
  jz.clearRect(0, 0, jr.cv.width, jr.cv.height);
  jz.globalCompositeOperation = "source-over";
  wH(jr, jg.img, jg.dw, jg.dh, jg.col);
  if (jr.pg !== jr.cv) {
    let jQ = jr.pg.getContext("2d");
    jQ.clearRect(jr.sx, jr.sy, jr.sw, jr.sh);
    jQ.drawImage(jr.cv, jr.sx, jr.sy);
  }
  if (jg.kids) {
    j8.length = 0;
  }
}
v(j0, "heal");
function j1() {
  if (wz.length) {
    for (let jr = 0; jr < wz.length; jr++) {
      let jg = wz[jr];
      if (!jg.unv.img.__pend) {
        j0(jg);
        wz.splice(jr, 1);
        jr--;
      }
    }
  }
}
v(j1, "pump");
function j2(jr) {
  try {
    let jg = jr.getContext && jr.getContext("2d");
    if (!jg) {
      return false;
    }
    let jz = jg.getImageData(0, 0, jr.width, jr.height).data;
    for (let jQ = 3; jQ < jz.length; jQ += 4) {
      if (jz[jQ]) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
}
v(j2, "blank");
var j3 = [];
function j4(jr, jg, jz) {
  let jQ = j3[jr];
  jQ ||= j3[jr] = [];
  let jH = jQ[jg];
  jH ||= jQ[jg] = [];
  let l0 = jH[jz];
  if (l0 == null) {
    let l1 = wZ[jr];
    l0 = wQ(l1.spr, l1.frame + jz, l1.scale, jg, l1.center, "b" + jr + ":" + jg + ":" + jz);
    jH[jz] = l0;
  }
  return l0;
}
v(j4, "tv");
var j5 = 48;
var j6 = wE / j5;
var j7 = 2.5;
var j8 = [];
var j9 = 0;
var jP = v(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "clock");
function jw(jr, jg, jz, jQ) {
  if (jQ - jQ !== 0) {
    return null;
  }
  let jH = Math.round(jQ / j6) % j5;
  if (jH < 0) {
    jH += j5;
  }
  let l0 = ((jr * 16 + jg) * 16 + jz) * j5 + jH;
  let l1 = j8[l0];
  if (l1 !== undefined) {
    return l1;
  }
  if (jP() > j9) {
    return null;
  }
  let l2 = j4(jr, jg, jz);
  if (!l2) {
    return null;
  }
  if (l2.unv) {
    l2.unv.kids++;
  }
  let l3 = jH * j6;
  let l4 = Math.abs(Math.cos(l3));
  let l5 = Math.abs(Math.sin(l3));
  let l6 = Math.max(l2.ox, l2.w - l2.ox);
  let l8 = Math.max(l2.oy, l2.h - l2.oy);
  let l9 = Math.ceil(l6 * l4 + l8 * l5 > l6 * l5 + l8 * l4 ? l6 * l4 + l8 * l5 : l6 * l5 + l8 * l4) + 1;
  let lP = l9 * 2 * wG;
  let lw = wS(lP, lP);
  let lj = lw.getContext("2d");
  lj.imageSmoothingEnabled = false;
  lj.translate(lP / 2, lP / 2);
  lj.rotate(l3);
  lj.drawImage(l2.cv, -l2.ox * wG, -l2.oy * wG, l2.w * wG, l2.h * wG);
  l1 = wr({
    cv: null,
    w: l9 * 2,
    h: l9 * 2,
    ox: l9,
    oy: l9,
    pg: null,
    sx: 0,
    sy: 0,
    sw: lP,
    sh: lP,
    unv: null
  }, lw);
  j8[l0] = l1;
  return l1;
}
v(jw, "tvr");
var jj = new Map();
function jl(jr, jg, jz, jQ = 0, jH = true) {
  let l0 = jj.get(jr);
  if (l0 === undefined) {
    l0 = new Map();
    jj.set(jr, l0);
  }
  let l1 = ((jg * 256 + jQ) * 2 + (jH ? 1 : 0)) * 8192 + Math.round(jz * 100);
  let l2 = l0.get(l1);
  if (l2 === undefined) {
    l2 = wQ(jr, jg, jz, jQ, jH, jr + ":" + jg + ":" + jz + ":" + jQ + ":" + (jH ? 1 : 0));
    if (l2) {
      l0.set(l1, l2);
    }
  }
  return l2;
}
v(jl, "sv");
var jD = null;
function jM() {
  if (jD) {
    return jD;
  }
  let jr = 64;
  jD = wS(jr, jr);
  let jg = jD.getContext("2d");
  let jz = jg.createRadialGradient(jr / 2, jr / 2, 0, jr / 2, jr / 2, jr / 2);
  jz.addColorStop(0, "rgba(255,255,255,0.55)");
  jz.addColorStop(0.5, "rgba(255,255,255,0.18)");
  jz.addColorStop(1, "rgba(255,255,255,0)");
  jg.fillStyle = jz;
  jg.fillRect(0, 0, jr, jr);
  return jD;
}
v(jM, "halo");
function jO(jr, jg, jz, jQ, jH = "#ffffff", l0 = "fnt_main", l1 = "left", l2 = 1, l3 = false) {
  jr.draw_set_font(l0);
  jr.draw_set_halign(l1);
  jr.draw_set_alpha(l2);
  if (l3) {
    jr.draw_text(jg + 1, jz + 1, jQ, "#000000");
  }
  jr.draw_text(jg, jz, jQ, jH);
  jr.draw_set_halign("left");
  jr.draw_set_alpha(1);
}
v(jO, "text");
function jf(jr, jg, jz = "fnt_main") {
  return jr.string_width(jg, jz);
}
v(jf, "tw");
function jR(jr, jg, jz, jQ, jH, l0 = 0) {
  let l1 = Math.max(0, jQ - jg - 63);
  let l2 = Math.max(0, jH - jz - 63);
  let l3 = u.white;
  if (l1 > 0) {
    jr.draw_sprite_ext("spr_textbox_top", 0, jg + 32, jz, l1, 2, 0, l3, 1);
    jr.draw_sprite_ext("spr_textbox_top", 0, jg + 32, jH + 1, l1, -2, 0, l3, 1);
  }
  if (l2 > 0) {
    jr.draw_sprite_ext("spr_textbox_left", 0, jQ + 1, jz + 32, -2, l2, 0, l3, 1);
    jr.draw_sprite_ext("spr_textbox_left", 0, jg, jz + 32, 2, l2, 0, l3, 1);
  }
  jr.draw_sprite_ext("spr_textbox_topleft", l0, jg, jz, 2, 2, 0, l3, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l0, jQ + 1, jz, -2, 2, 0, l3, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l0, jg, jH + 1, 2, -2, 0, l3, 1);
  jr.draw_sprite_ext("spr_textbox_topleft", l0, jQ + 1, jH + 1, -2, -2, 0, l3, 1);
}
v(jR, "darkbox");
var ju = {
  jevil: {
    a: "#3b0f5c",
    b: "#1c0930",
    motif: "spr_bomb_spade",
    mcol: 7
  },
  queen: {
    a: "#0c3d58",
    b: "#07202f",
    motif: "spr_queen_winebubble",
    mcol: 5
  },
  sneo: {
    a: "#524000",
    b: "#3a0a2c",
    motif: "spr_sneo_heart",
    mcol: 0
  },
  tenna: {
    a: "#56101c",
    b: "#2c0810",
    motif: "spr_tenna_allstars_star",
    mcol: 3
  },
  knight: {
    a: "#2a2a2a",
    b: "#101010",
    motif: "spr_knight_bullet_star",
    mcol: 0
  },
  gerson: {
    a: "#1d4a2a",
    b: "#0c2414",
    motif: "spr_gerson_red_hammer@ch4",
    mcol: 0
  },
  titan: {
    a: "#24243e",
    b: "#0a0a16",
    motif: "spr_titan_star_centered@ch4",
    mcol: 0
  },
  aqua: {
    a: "#0c4a50",
    b: "#062428",
    motif: "spr_attack_knifechain_spin@ch5",
    mcol: 5
  },
  pink: {
    a: "#5a1848",
    b: "#2c0a24",
    motif: "spr_pinkstar@ch5",
    mcol: 0
  },
  flowery: {
    a: "#5a3a08",
    b: "#2c1a04",
    motif: "spr_flowery_circle@ch5",
    mcol: 0
  },
  knight_ex: {
    a: "#3a0c0c",
    b: "#140404",
    motif: "spr_knight_bullet_star_hard_a",
    mcol: 1
  }
};
function jv(jr, jg, jz, jQ) {
  let jH = jz.boss.def;
  let l0 = ju[jH && jH.bg || "jevil"];
  jr.fillStyle = "#000000";
  jr.fillRect(w8.x, w8.y, w8.w, w8.h);
  let l1 = jz.phase && jz.phase.spell;
  let l2 = jQ.time;
  jr.lineWidth = 2;
  let l3 = jr.fillStyle;
  for (let l4 = 0; l4 < 2; l4++) {
    let l5 = l2 * (l4 ? 0.5 : 0.9) % 50;
    jr.strokeStyle = l4 ? l0.b : l0.a;
    jr.globalAlpha = l1 ? 0.45 : 0.8;
    jr.beginPath();
    if (R.scGridFill) {
      jr.fillStyle = l4 ? l0.b : l0.a;
      for (let l6 = w8.x - 50 + l5 + l4 * 25; l6 < w8.x2 + 50; l6 += 50) {
        jr.rect(l6 - 1, w8.y, 2, w8.y2 - w8.y);
      }
      for (let l8 = w8.y - 50 + l5 + l4 * 25; l8 < w8.y2 + 50; l8 += 50) {
        jr.rect(w8.x, l8 - 1, w8.x2 - w8.x, 2);
      }
      jr.fill();
      continue;
    }
    for (let l9 = w8.x - 50 + l5 + l4 * 25; l9 < w8.x2 + 50; l9 += 50) {
      jr.moveTo(l9, w8.y);
      jr.lineTo(l9, w8.y2);
    }
    for (let lP = w8.y - 50 + l5 + l4 * 25; lP < w8.y2 + 50; lP += 50) {
      jr.moveTo(w8.x, lP);
      jr.lineTo(w8.x2, lP);
    }
    jr.stroke();
  }
  jr.fillStyle = l3;
  jr.globalAlpha = 1;
  if (l1 && jz.declT < 44) {
    let lw = Math.min(1, (48 - jz.declT) / 20);
    let lj = jl(l0.motif, 0, 6, l0.mcol);
    if (lj) {
      let ll = jQ.M;
      let lD = l2 * 0.004;
      jr.globalAlpha = lw * 0.06;
      jr.globalCompositeOperation = "lighter";
      jr.setTransform(ll.a * Math.cos(lD), ll.a * Math.sin(lD), -ll.a * Math.sin(lD), ll.a * Math.cos(lD), ll.e + ll.a * w8.cx, ll.f + ll.a * (w8.y + 190));
      jr.drawImage(lj.cv, -lj.w / 2, -lj.h / 2, lj.w, lj.h);
      jr.setTransform(ll);
      jr.globalAlpha = 1;
      jr.globalCompositeOperation = "source-over";
    }
  }
}
v(jv, "drawBackground");
function jc(jr, jg, jz, jQ) {
  let jH = jQ.M;
  let l0 = jH.a;
  let l1 = jM();
  let l2 = false;
  let l3 = jg.bn;
  let l4 = jg.blive;
  let l5 = jg.freezeT > 0 ? 0.5 : 1;
  for (let l6 = 0; l6 < l3; l6++) {
    let l8 = l4[l6];
    let l9 = wZ[jg.btype[l8]];
    let lP = jg.bage[l8];
    let lw = l9.frames > 1 ? (lP / l9.anim | 0) % l9.frames : 0;
    let lj = j4(jg.btype[l8], jg.bcol[l8], lw);
    if (!lj) {
      continue;
    }
    let ll = jg.bpx[l8] + (jg.bx[l8] - jg.bpx[l8]) * jz;
    let lD = jg.bpy[l8] + (jg.by[l8] - jg.bpy[l8]) * jz;
    if (ll < w8.x - 60 || ll > w8.x2 + 60 || lD < w8.y - 60 || lD > w8.y2 + 60) {
      continue;
    }
    let lO = 1;
    let lf = 1;
    if (jg.bflag[l8] & 4) {
      lO = lP & 2 ? 0.35 : 0.6;
    } else if (lP < 9) {
      lO = 0.22 + lP * 0.087;
      if (lP < 4) {
        lf = 1.6 - lP * 0.15;
      }
    }
    lO *= l5;
    if (l9.halo) {
      if (l2) {
        jr.setTransform(jH);
        l2 = false;
      }
      jr.globalAlpha = lO * 0.9;
      let lu = l9.r * 3.2 * lf;
      jr.drawImage(l1, ll - lu, lD - lu, lu * 2, lu * 2);
    }
    jr.globalAlpha = lO;
    let lR = lj;
    if (lf === 1 && l9.orient) {
      let lv = jg.brot[l8] - jg.bprot[l8];
      if (lv > Math.PI || lv < -Math.PI) {
        lv = 0;
      }
      lR = jw(jg.btype[l8], jg.bcol[l8], lw, jg.bprot[l8] + lv * jz + l9.face * wN);
    }
    if (lf === 1 && lR) {
      if (l2) {
        jr.setTransform(jH);
        l2 = false;
      }
      jr.drawImage(lR.pg, lR.sx, lR.sy, lR.sw, lR.sh, Math.round((ll - lR.ox) * wG) / wG, Math.round((lD - lR.oy) * wG) / wG, lR.w, lR.h);
    } else {
      let lc = l9.orient ? jg.bprot[l8] + (jg.brot[l8] - jg.bprot[l8]) * jz + l9.face * wN : 0;
      let lZ = Math.cos(lc) * l0 * lf;
      let la = Math.sin(lc) * l0 * lf;
      jr.setTransform(lZ, la, -la, lZ, jH.e + l0 * ll, jH.f + l0 * lD);
      l2 = true;
      jr.drawImage(lj.cv, -lj.ox, -lj.oy, lj.w, lj.h);
    }
  }
  if (l2) {
    jr.setTransform(jH);
  }
  jr.globalAlpha = 1;
}
v(jc, "drawBullets");
var jZ = [6, 6];
var je = [];
function ja(jr, jg, jz) {
  let jQ = jz.M;
  for (let jH of jg.lasers) {
    if (!jH.on) {
      continue;
    }
    let l0 = wc[jH.col];
    let l1 = jH.ang;
    let l2 = jH.x + Math.cos(l1) * jH.len;
    let l3 = jH.y + Math.sin(l1) * jH.len;
    jr.lineCap = "butt";
    if (jH.t < jH.warn) {
      let l4 = jH.t / jH.warn;
      jr.globalAlpha = 0.25 + l4 * 0.5 * (jH.t >> 1 & 1 ? 1 : 0.7);
      jr.strokeStyle = l0;
      jr.lineWidth = 1 + (1 - l4) * 2;
      jr.beginPath();
      jr.moveTo(jH.x, jH.y);
      jr.lineTo(l2, l3);
      jr.stroke();
      if (jH.w !== 0) {
        let l5 = l1 + jH.w * (jH.warn - jH.t + jH.life);
        jr.globalAlpha *= 0.45;
        jr.setLineDash(jZ);
        jr.beginPath();
        jr.moveTo(jH.x, jH.y);
        jr.lineTo(jH.x + Math.cos(l5) * jH.len, jH.y + Math.sin(l5) * jH.len);
        jr.stroke();
        jr.setLineDash(je);
      }
    } else {
      let l6 = jH.t - jH.warn;
      let l8 = jH.width;
      if (l6 < 3) {
        l8 *= (l6 + 1) / 4;
      } else if (l6 > jH.life) {
        l8 *= Math.max(0, 1 - (l6 - jH.life) / jH.fade);
      }
      let l9 = 1 + Math.sin(jz.time * 0.9 + jH.x) * 0.08;
      jr.globalAlpha = 0.35;
      jr.strokeStyle = l0;
      jr.lineWidth = l8 * 1.4 * l9;
      jr.beginPath();
      jr.moveTo(jH.x, jH.y);
      jr.lineTo(l2, l3);
      jr.stroke();
      jr.globalAlpha = 0.9;
      jr.lineWidth = l8 * 0.8;
      jr.beginPath();
      jr.moveTo(jH.x, jH.y);
      jr.lineTo(l2, l3);
      jr.stroke();
      jr.globalAlpha = 1;
      jr.strokeStyle = "#ffffff";
      jr.lineWidth = Math.max(1, l8 * 0.35);
      jr.beginPath();
      jr.moveTo(jH.x, jH.y);
      jr.lineTo(l2, l3);
      jr.stroke();
      jr.fillStyle = "#ffffff";
      jr.beginPath();
      jr.arc(jH.x, jH.y, l8 * 0.6, 0, wE);
      jr.fill();
    }
  }
  jr.globalAlpha = 1;
  jr.setTransform(jQ);
}
v(ja, "drawLasers");
function jY(jr, jg, jz) {
  for (let jQ = 0; jQ < jg.inn; jQ++) {
    let jH = jg.ilive[jQ];
    let l0 = jg.ikind[jH];
    let l1 = jg.ipx[jH] + (jg.ix[jH] - jg.ipx[jH]) * jz;
    let l2 = jg.ipy[jH] + (jg.iy[jH] - jg.ipy[jH]) * jz;
    let l3;
    if (l0 === 0) {
      l3 = jl("spr_board_candy", 0, 0.8, 1);
    } else if (l0 === 3) {
      l3 = jl("spr_board_candy", 0, 1.35, 1);
    } else if (l0 === 1) {
      l3 = jl("spr_sparestar", 0, 0.8, 0);
    } else {
      l3 = jl("spr_stardrop", 0, 0.55, 3);
    }
    if (l3) {
      if (l2 < w8.y - 4) {
        jr.globalAlpha = 0.7;
        jr.drawImage(l3.cv, l1 - l3.ox * 0.7, w8.y + 2, l3.w * 0.7, l3.h * 0.7);
        jr.globalAlpha = 1;
        continue;
      }
      if (l0 === 2) {
        jr.globalAlpha = 0.8;
      }
      jr.drawImage(l3.cv, l1 - l3.ox, l2 - l3.oy, l3.w, l3.h);
      jr.globalAlpha = 1;
    }
  }
}
v(jY, "drawItems");
function jn(jr, jg, jz, jQ, jH) {
  let l0 = jH.M;
  let l1 = l0.a;
  for (let l2 = 0; l2 < jz.qn; l2++) {
    let l3 = jz.qlive[l2];
    let l4 = jz.qpx[l3] + (jz.qx[l3] - jz.qpx[l3]) * jQ;
    let l5 = jz.qpy[l3] + (jz.qy[l3] - jz.qpy[l3]) * jQ;
    let l6 = jz.qlife[l3];
    let l8 = jz.qmax[l3];
    let l9 = l6 / l8;
    let lP = jz.qkind[l3];
    let lw = wc[jz.qcol[l3]];
    let lj = jz.qsize[l3];
    if (lP === wm.SPARK) {
      jr.globalAlpha = Math.min(1, l9 * 1.6);
      jr.fillStyle = lw;
      let ll = lj * 2;
      jr.fillRect(l4 - ll / 2, l5 - ll / 2, ll, ll);
    } else if (lP === wm.SQUARE) {
      jr.globalAlpha = l9;
      jr.fillStyle = "#ffffff";
      jr.fillRect(l4 - 1.5, l5 - 1.5, 3, 3);
    } else if (lP === wm.RING) {
      jr.globalAlpha = l9 * 0.9;
      jr.strokeStyle = lw;
      jr.lineWidth = 2 + l9 * 2;
      jr.beginPath();
      jr.arc(l4, l5, (1 - l9) * 30 * lj + 4, 0, wE);
      jr.stroke();
    } else if (lP === wm.GLINT) {
      let lD = jl("spr_tinysparkle", 0, 0.7, jz.qcol[l3]);
      if (lD) {
        jr.globalAlpha = l9;
        jr.drawImage(lD.cv, l4 - lD.ox, l5 - lD.oy, lD.w, lD.h);
      }
    } else if (lP === wm.SHARD) {
      let lO = jl("spr_heartshards", l3 & 3, 1, 3, true);
      if (lO) {
        jr.globalAlpha = Math.min(1, l9 * 2);
        jr.drawImage(lO.cv, l4 - lO.ox, l5 - lO.oy, lO.w, lO.h);
      }
    } else if (lP === wm.FLAKE) {
      let lf = jl("spr_icespell_snowflake", 0, 0.35, 0);
      if (lf) {
        let lR = jz.qrot[l3];
        let lu = Math.cos(lR) * l1 * lj;
        let lv = Math.sin(lR) * l1 * lj;
        jr.globalAlpha = Math.min(1, l9 * 2);
        jr.setTransform(lu, lv, -lv, lu, l0.e + l1 * l4, l0.f + l1 * l5);
        jr.drawImage(lf.cv, -lf.ox, -lf.oy, lf.w, lf.h);
        jr.setTransform(l0);
      }
    } else if (lP === wm.SLASH) {
      let lc = jl("spr_knight_slash_mark", 0, 1.2, 0);
      if (lc) {
        let lZ = jz.qrot[l3];
        let la = 1 + (1 - l9) * 2;
        let lY = Math.cos(lZ) * l1;
        let ln = Math.sin(lZ) * l1;
        jr.globalAlpha = l9;
        jr.setTransform(lY * la, ln * la, -ln * l9, lY * l9, l0.e + l1 * l4, l0.f + l1 * l5);
        jr.drawImage(lc.cv, -lc.ox, -lc.oy, lc.w, lc.h);
        jr.setTransform(l0);
      }
    } else if (lP === wm.SPRITE) {
      let lp = jz.qspr[l3];
      if (lp === 0) {
        let lK = jl("spr_yheart_shot_hit", Math.min(4, (1 - l9) * 5 | 0), 0.8, 0);
        if (lK) {
          jr.globalAlpha = 1;
          jr.drawImage(lK.cv, l4 - lK.ox, l5 - lK.oy, lK.w, lK.h);
        }
      } else if (lp === 1) {
        let lU = jl("spr_rudebuster_beam", (l8 - l6) % 7, 1, 0);
        if (lU) {
          jr.globalAlpha = l9 * 0.7;
          jr.setTransform(0, -l1, l1, 0, l0.e + l1 * l4, l0.f + l1 * l5);
          jr.drawImage(lU.cv, -lU.ox, -lU.oy, lU.w, lU.h);
          jr.setTransform(l0);
        }
      } else if (lp === 3) {
        let lL = jl("spr_attack_cut1", Math.min(4, (1 - l9) * 5 | 0), 1.6, 0, true);
        if (lL) {
          jr.globalAlpha = 1;
          jr.drawImage(lL.cv, l4 - lL.ox, l5 - lL.oy, lL.w, lL.h);
        }
      } else if (lp === 4) {
        let lo = jl("spr_berdly_coaster_feather", l3 >> 1 & 1, 1.6, 0, true);
        if (lo) {
          let lA = jz.qrot[l3];
          let lX = Math.cos(lA) * l1;
          let lJ = Math.sin(lA) * l1;
          jr.globalAlpha = Math.min(1, l9 * 2);
          jr.setTransform(lX, lJ, -lJ, lX, l0.e + l1 * l4, l0.f + l1 * l5);
          jr.drawImage(lo.cv, -lo.ox, -lo.oy, lo.w, lo.h);
          jr.setTransform(l0);
        }
      } else {
        let lT = jl("spr_spare_z", 0, 1, 0);
        let lW = 0.6 + (1 - l9) * 0.4;
        if (lT) {
          jr.globalAlpha = Math.min(1, l9 * 2);
          jr.drawImage(lT.cv, l4 - lT.ox * lW, l5 - lT.oy * lW, lT.w * lW, lT.h * lW);
        }
      }
    }
  }
  jr.globalAlpha = 1;
}
v(jn, "drawParticles");
function jp(jr, jg, jz) {
  for (let jQ of jz.markers) {
    if (!jQ.on) {
      continue;
    }
    let jH = jQ.t / jQ.life;
    if (jQ.kind === "window") {
      let l0 = Math.min(1, jQ.t / 8);
      let l1 = jQ.t > jQ.life - 8 ? (jQ.life - jQ.t) / 8 : 1;
      let l2 = jl("spr_queen_search_window", 0, 0.55, 0);
      if (l2) {
        jr.globalAlpha = (jQ.t < 22 && jQ.t >> 1 & 1 ? 0.5 : 0.9) * l1;
        jr.drawImage(l2.cv, jQ.x - l2.w / 2 * l0, jQ.y - l2.h / 2, l2.w * l0, l2.h);
      }
    } else if (jQ.kind === "dice") {
      jr.globalAlpha = 1;
      jO(jg, jQ.x, jQ.y - 30 - jH * 10, String(jQ.a), jH < 0.7 ? "#ffff00" : "#ffffff", "fnt_mainbig", "center", 1 - jH * 0.6, true);
    } else if (jQ.kind === "charge") {
      jr.globalAlpha = 0.8;
      jr.strokeStyle = "#ffff40";
      jr.lineWidth = 2;
      jr.beginPath();
      jr.arc(jQ.x, jQ.y, (1 - jH) * 70 + 6, 0, wE);
      jr.stroke();
    } else if (jQ.kind === "light") {
      jr.globalAlpha = 0.1;
      jr.fillStyle = "#fff8c0";
      jr.beginPath();
      jr.arc(jQ.x, jQ.y, jQ.a, 0, wE);
      jr.fill();
      jr.globalAlpha = 0.4;
      jr.strokeStyle = "#fff8c0";
      jr.lineWidth = 1.5;
      jr.stroke();
    } else if (jQ.kind === "spr" && jQ.spr) {
      jg.draw_sprite_ext(jQ.spr, jQ.fr | 0, jQ.x, jQ.y, jQ.a || 1, jQ.a || 1, jQ.b || 0, u.white, jQ.c === undefined ? 1 : jQ.c);
    }
  }
  jr.globalAlpha = 1;
}
v(jp, "drawMarkers");
function jK(jr, jg, jz, jQ, jH) {
  let l0 = jz.boss;
  let l1 = l0.def;
  if (!l1 || !l0.show) {
    return;
  }
  let l2 = l0.px + (l0.x - l0.px) * jQ;
  let l3 = l0.py + (l0.y - l0.py) * jQ;
  let l4 = l0.form || l1;
  let l5 = f[l4.spr];
  if (!l5) {
    return;
  }
  let l6 = l4.frames > 1 ? (jH.time / ((l4.anim || 4) * 2) | 0) % l4.frames : 0;
  let l8 = l0.scale;
  let l9 = l4.ofx !== undefined ? l4.ofx : l5.ox;
  let lP = l4.ofy !== undefined ? l4.ofy : l5.oy;
  let lw = Math.sin(jH.time * 0.05) * 3;
  let lj = l2 - (l9 - l5.ox) * l8;
  let ll = l3 - (lP - l5.oy) * l8 + lw;
  if (l0.dying > 0) {
    lj += (Math.random() - 0.5) * 6;
    ll += (Math.random() - 0.5) * 6;
  }
  let lD = jH.trail;
  lD.at = (lD.at + 2) % 12;
  lD.v[lD.at] = lj;
  lD.v[lD.at + 1] = ll;
  if (lD.n < 6) {
    lD.n++;
  }
  if (l0.trail > 0) {
    for (let lO = lD.n - 1; lO >= 1; lO--) {
      let lf = (lD.at - lO * 2 + 24) % 12;
      jg.draw_sprite_ext(l4.spr, l6, lD.v[lf], lD.v[lf + 1], l8, l8, 0, u.white, 0.12 + (5 - lO) * 0.04);
    }
  }
  if (jz.phase && jz.phase.spell && jz.declT === 0) {
    jr.strokeStyle = wc[l1.col || 0];
    jr.lineWidth = 1.5;
    for (let lR = 0; lR < 2; lR++) {
      let lu = 46 + lR * 12 + Math.sin(jH.time * 0.07 + lR) * 3;
      let lv = jH.time * (lR ? -0.03 : 0.02);
      jr.globalAlpha = 0.35;
      jr.beginPath();
      for (let lc = 0; lc < 12; lc++) {
        let lZ = lv + lc * wE / 12;
        jr.moveTo(l2 + Math.cos(lZ) * lu, l3 + Math.sin(lZ) * lu);
        jr.arc(l2, l3, lu, lZ, lZ + wE / 24);
      }
      jr.stroke();
    }
    jr.globalAlpha = 1;
  }
  jg.draw_sprite_ext(l4.spr, l6, lj, ll, l8, l8, 0, u.white, l0.alpha);
  if (l0.dmgT > 0 && jH.frame & 1) {
    jg.draw_sprite_flash(l4.spr, l6, lj, ll, l8, l8, 0, "#ffffff", l0.alpha * 0.35);
  }
}
v(jK, "drawBoss");
var jU = {
  susie: {
    name: "SUSIE",
    head: ["spr_headsusie", 0, 1],
    plate: "spr_bnamesusie",
    idle: ["spr_susieb_idle", 4, 2],
    icon: ["spr_headsusie", 2, 0.5],
    spell: "RUDE BUSTER",
    shot: ["AXES", "AXE BEAM"],
    pal: [{
      opt: 8,
      shot: 0,
      name: "PURPLE"
    }, {
      opt: 1,
      shot: 1,
      name: "RED BUSTER"
    }]
  },
  ralsei: {
    name: "RALSEI",
    head: ["spr_headralsei", 0, 1],
    plate: "spr_bnameralsei",
    idle: ["spr_ralseib_idle", 5, 2],
    icon: ["spr_headralsei", 2, 0.5],
    spell: "PACIFY",
    shot: ["HOMING YARN", "STAR STREAM"],
    pal: [{
      opt: 4,
      shot: 4,
      name: "GREEN"
    }, {
      opt: 8,
      shot: 8,
      name: "PINK SCARF"
    }]
  },
  noelle: {
    name: "NOELLE",
    head: ["spr_headnoelle", 0, 1],
    plate: "spr_bnamenoelle",
    idle: ["spr_noelleb_idle", 5, 2],
    icon: ["spr_headnoelle", 2, 0.5],
    spell: "SNOWGRAVE",
    shot: ["ICE NEEDLES", "FROST LANCE"],
    pal: [{
      opt: 3,
      shot: 5,
      name: "YELLOW"
    }, {
      opt: 5,
      shot: 7,
      name: "DEEP FROST"
    }]
  },
  kris: {
    name: "KRIS",
    head: ["spr_headkris", 0, 1],
    plate: "spr_bnamekris",
    idle: ["spr_krisb_idle", 6, 2],
    icon: ["spr_btact", 0, 0.5],
    spell: "ACT",
    shot: ["SWORD", "THRUST"],
    pal: [{
      opt: 5,
      shot: 5,
      name: "CYAN"
    }, {
      opt: 1,
      shot: 1,
      name: "RED SOUL"
    }]
  },
  lancer: {
    name: "LANCER",
    head: ["spr_lancer_dt", 0, 0.75],
    plate: null,
    idle: ["spr_lancer_battle", 3, 2],
    icon: ["spr_spadebullet", 0, 0.42],
    spell: "BIKE",
    shot: ["SPADES", "SPADE BOMB"],
    pal: [{
      opt: 7,
      shot: 0,
      name: "SPADE"
    }, {
      opt: 4,
      shot: 4,
      name: "CACTUS"
    }]
  },
  berdly: {
    name: "BERDLY",
    head: ["spr_berdly_d", 0, 0.62],
    plate: null,
    idle: ["spr_berdlyb_idle", 5, 2],
    icon: ["spr_berdly_coaster_feather", 0, 1.6],
    spell: "SMART STORM",
    shot: ["FEATHERS", "QUILLS"],
    pal: [{
      opt: 6,
      shot: 0,
      name: "BLUE"
    }, {
      opt: 2,
      shot: 2,
      name: "GOLD"
    }]
  }
};
var jL = v(jr => jU[jr.partner].pal[jr.pal & 1], "pal");
var jo = [];
jo[0] = ["spr_yheart_shot", 0, 0.9, "vel", 0, 0.8];
jo[2] = ["spr_axebullet_b", 0, 0.8, "spin", 0, 1];
jo[3] = ["spr_rudebuster_beam", 7, 0.42, "vel", 0, 0.85];
jo[4] = ["spr_yarnbullet", 4, 0.32, "vel", 0, 1];
jo[5] = ["spr_sparestar_anim", 6, 1, "none", 0, 0.9];
jo[6] = ["spr_iciclebullet", 0, 0.55, "vel", -Math.PI / 2, 0.95];
jo[7] = ["spr_iciclebullet", 2, 0.8, "vel", -Math.PI / 2, 0.95];
jo[8] = ["spr_attack_cut1", 5, 1.3, "none", 0, 1];
jo[9] = ["spr_attack_cut1", 0, 0.9, "none", 0, 0.9];
jo[10] = ["spr_spadebullet", 0, 0.4, "vel", 0, 1];
jo[11] = ["spr_spadebullet_chunk", 0, 0.42, "spin", 0, 1];
jo[12] = ["spr_berdly_coaster_feather", 2, 2.2, "vel", Math.PI * 0.75, 1];
jo[13] = ["spr_board_blue_bird_feather", 0, 1.8, "vel", Math.PI * 0.75, 1];
jo[14] = ["spr_spadebullet", 0, 0.22, "vel", 0, 1];
function jA(jr, jg, jz, jQ) {
  let jH = jQ.M;
  let l0 = jH.a;
  let l1 = jL(jg);
  let l2 = jg.partner === "susie" && jg.pal & 1;
  for (let l3 = 0; l3 < jg.sn; l3++) {
    let l4 = jg.slive[l3];
    let l5 = jg.skind[l4];
    let l6 = jo[l5];
    if (!l6) {
      continue;
    }
    let l8 = l6[1];
    let l9 = jg.sage[l4];
    let lP = l5 === 8 ? Math.min(4, l9 >> 1) : l5 === 7 ? 1 : l8 ? (l9 >> 1) % l8 : 0;
    let lw = l5 === 3 && l2;
    let lj = jl(lw ? "spr_rudebuster_beam_red" : l6[0], lP, l6[2], l5 === 0 || lw ? 0 : l1.shot, true);
    if (!lj) {
      continue;
    }
    let ll = jg.spx[l4] + (jg.sx[l4] - jg.spx[l4]) * jz;
    let lD = jg.spy[l4] + (jg.sy[l4] - jg.spy[l4]) * jz;
    let lO = 0;
    if (l6[3] === "vel") {
      lO = Math.atan2(jg.svy[l4], jg.svx[l4]) + l6[4];
    } else if (l6[3] === "spin") {
      lO = (l9 + jz) * 0.45;
    }
    let lf = Math.cos(lO) * l0;
    let lR = Math.sin(lO) * l0;
    jr.globalAlpha = l6[5] * (jg.slife[l4] >= 0 && jg.slife[l4] < 3 && l5 !== 8 ? (jg.slife[l4] + 1) / 4 : 1);
    if (l5 === 9) {
      jr.setTransform(l0 * 0.42425999999999997, l0 * 1.20207, l0 * -0.42425999999999997, l0 * 1.20207, jH.e + l0 * ll, jH.f + l0 * lD);
    } else {
      jr.setTransform(lf, lR, -lR, lf, jH.e + l0 * ll, jH.f + l0 * lD);
    }
    jr.globalCompositeOperation = l5 === 0 ? "lighter" : "source-over";
    jr.drawImage(lj.cv, -lj.ox, -lj.oy, lj.w, lj.h);
  }
  jr.setTransform(jH);
  jr.globalAlpha = 1;
  jr.globalCompositeOperation = "source-over";
}
v(jA, "drawShots");
function jX(jr, jg, jz, jQ, jH) {
  let l0 = jz.P;
  let l1 = jH.M;
  let l2 = l1.a;
  if (!l0.alive) {
    return;
  }
  let l3 = l0.px + (l0.x - l0.px) * jQ;
  let l4 = l0.py + (l0.y - l0.py) * jQ;
  let l5 = l0.invuln > 0 && jH.frame >> 2 & 1;
  let l6 = Math.min(4, Math.floor(l0.power));
  let l8 = jl("spr_heartsmall", 0, 1.3, 100 + jL(jz).opt, true);
  let l9 = jH.opt;
  if (l8) {
    for (let lj = 0; lj < l6; lj++) {
      jz.optionPos(lj, l6, l0.focus, l9);
      let ll = l9.x + (l3 - l0.x);
      let lD = l9.y + (l4 - l0.y);
      jr.globalAlpha = l5 ? 0.35 : 0.85;
      jr.drawImage(l8.cv, ll - l8.ox, lD - l8.oy, l8.w, l8.h);
    }
  }
  jr.globalAlpha = 1;
  if (l0.grazeFlash > 0) {
    jr.globalAlpha = l0.grazeFlash / 6 * 0.7;
    jr.strokeStyle = "#ffffff";
    jr.lineWidth = 1;
    jr.beginPath();
    jr.arc(l3, l4, 18, 0, wE);
    jr.stroke();
    jr.globalAlpha = 1;
    if (jH.ticked) {
      l0.grazeFlash--;
    }
  }
  if (jz.bombT > 0 && jz.bombKind === "lancer") {
    let lO = jl("spr_lancerbike", (jH.frame >> 2) % 6, 0.7, 0, true);
    if (lO) {
      jr.globalAlpha = 0.9;
      jr.drawImage(lO.cv, l3 - lO.ox, l4 - lO.oy + 6, lO.w, lO.h);
      jr.globalAlpha = 1;
    }
  }
  let lP = jl("spr_yellowheart", 0, 1, 0, true);
  if (lP) {
    let lf = -Math.PI / 2 + l0.lean * 0.18;
    let lR = Math.cos(lf) * l2;
    let lu = Math.sin(lf) * l2;
    jr.globalAlpha = l5 ? 0.35 : 1;
    jr.setTransform(lR, lu, -lu, lR, l1.e + l2 * l3, l1.f + l2 * l4);
    jr.drawImage(lP.cv, -lP.ox, -lP.oy, lP.w, lP.h);
    jr.setTransform(l1);
    jr.globalAlpha = 1;
  }
  let lw = l0.focusT / 8;
  if (lw > 0) {
    jr.globalAlpha = lw * 0.5;
    jr.strokeStyle = "#ffff60";
    jr.lineWidth = 1;
    let lv = jH.time * 0.05;
    jr.beginPath();
    for (let lc = 0; lc < 8; lc++) {
      let lZ = lv + lc * wE / 8;
      jr.moveTo(l3 + Math.cos(lZ) * 22, l4 + Math.sin(lZ) * 22);
      jr.arc(l3, l4, 22, lZ, lZ + wE / 16);
    }
    jr.stroke();
    jr.globalAlpha = lw;
    jr.fillStyle = "#ff2020";
    jr.beginPath();
    jr.arc(l3, l4, 3.6, 0, wE);
    jr.fill();
    jr.fillStyle = "#ffffff";
    jr.beginPath();
    jr.arc(l3, l4, 2.4, 0, wE);
    jr.fill();
    jr.globalAlpha = 1;
  }
}
v(jX, "drawPlayer");
function jJ(jr, jg, jz, jQ, jH) {
  if (jz.bombT <= 0) {
    return;
  }
  let l0 = jz.bombKind;
  let l1 = jz.bombT / jz.bombMax;
  let l2 = jz.bombMax - jz.bombT;
  let l3 = jH.M;
  let l4 = l3.a;
  if (l0 === "susie") {
    let l5 = jl("spr_rudebuster_beam", (l2 >> 1) % 7, 3.2, 0);
    jr.globalAlpha = l1 * 0.25;
    jr.fillStyle = "#b040ff";
    jr.fillRect(w8.x, w8.y, w8.w, w8.h);
    if (l5) {
      for (let l6 = 0; l6 < 4; l6++) {
        let l8 = jz.bombY + l6 * 34;
        jr.globalAlpha = (1 - l6 * 0.22) * Math.min(1, l1 * 3);
        jr.setTransform(0, -l4, l4, 0, l3.e + l4 * jz.bombX, l3.f + l4 * l8);
        jr.drawImage(l5.cv, -l5.ox, -l5.oy, l5.w, l5.h);
      }
    }
    jr.setTransform(l3);
  } else if (l0 === "noelle") {
    jr.globalAlpha = Math.min(1, l1 * 2) * 0.45 * (l2 < 6 ? l2 / 6 : 1);
    jr.fillStyle = "#c8e8ff";
    jr.fillRect(w8.x, w8.y, w8.w, w8.h);
    let l9 = jl("spr_icespell_snowflake", 0, 2.4, 0);
    if (l9) {
      let lP = l2 * 0.03;
      let lw = Math.min(1, l2 / 16);
      let lj = Math.cos(lP) * l4 * lw;
      let ll = Math.sin(lP) * l4 * lw;
      jr.globalAlpha = Math.min(1, l1 * 2.5) * 0.6;
      jr.setTransform(lj, ll, -ll, lj, l3.e + l4 * w8.cx, l3.f + l4 * (w8.y + w8.h / 2));
      jr.drawImage(l9.cv, -l9.ox, -l9.oy, l9.w, l9.h);
      jr.setTransform(l3);
    }
  } else if (l0 === "kris") {
    jr.globalAlpha = Math.min(1, l1 * 4) * 0.16;
    jr.fillStyle = "#a0b4ff";
    jr.fillRect(w8.x, w8.y, w8.w, w8.h);
    let lD = jz.P;
    let lO = lD.px + (lD.x - lD.px) * jQ;
    let lf = lD.py + (lD.y - lD.py) * jQ;
    jr.globalAlpha = Math.min(1, l1 * 4) * 0.7;
    jr.strokeStyle = "#ffffff";
    jr.lineWidth = 2;
    jr.beginPath();
    jr.arc(lO, lf, 30, -Math.PI / 2, -Math.PI / 2 + wE * l1);
    jr.stroke();
    if (l2 < 34) {
      let lR = jl("spr_btact", l2 >> 2 & 1, 2, 0, true);
      if (lR) {
        let lu = l2 < 6 ? 0.5 + l2 / 12 : 1;
        jr.globalAlpha = l2 > 24 ? (34 - l2) / 10 : 1;
        jr.drawImage(lR.cv, lO - lR.ox * lu, lf - 56 - lR.oy * lu, lR.w * lu, lR.h * lu);
      }
    }
  } else if (l0 === "lancer") {
    let lv = jz.bike;
    let lc = lv.px + (lv.x - lv.px) * jQ;
    let lZ = lv.py + (lv.y - lv.py) * jQ;
    let la = jl("spr_lancerbike", (l2 >> 1) % 6, 2, 0, true);
    if (la && lv.on) {
      let lY = jz.boss.x < lc ? -1 : 1;
      for (let ln = 3; ln >= 0; ln--) {
        jr.globalAlpha = ln ? 0.3 / ln : 1;
        jr.setTransform(l4 * lY, 0, 0, l4, l3.e + l4 * lc, l3.f + l4 * (lZ - lv.vy * ln * 1.4));
        jr.drawImage(la.cv, -la.ox, -la.oy, la.w, la.h);
      }
      jr.setTransform(l3);
    }
  } else if (l0 === "berdly") {
    jr.globalAlpha = Math.min(1, l1 * 3) * 0.12;
    jr.fillStyle = "#a0e0ff";
    jr.fillRect(w8.x, w8.y, w8.w, w8.h);
    let lp = jl("spr_tornado_bullet", 0, 1.7, 0, true);
    let lK = jl("spr_berdlyb_tornado", 0, 1.4, 0, true);
    for (let lU = 0; lU < 3; lU++) {
      let lL = jz.storm[lU];
      if (!lL.on || lL.y > w8.y2 + 30) {
        continue;
      }
      let lo = lL.px + (lL.x - lL.px) * jQ;
      let lA = lL.py + (lL.y - lL.py) * jQ;
      let lX = l2 + lU * 2 >> 1 & 1 ? -1 : 1;
      if (lp) {
        jr.globalAlpha = Math.min(1, l1 * 3) * 0.5;
        jr.globalCompositeOperation = "lighter";
        jr.setTransform(l4 * lX, 0, 0, l4, l3.e + l4 * lo, l3.f + l4 * lA);
        jr.drawImage(lp.cv, -lp.ox, -lp.oy, lp.w, lp.h);
        jr.globalCompositeOperation = "source-over";
      }
      if (lU === 1 && lK) {
        jr.globalAlpha = Math.min(1, l1 * 3);
        jr.setTransform(l4 * lX, 0, 0, l4, l3.e + l4 * lo, l3.f + l4 * (lA - 6));
        jr.drawImage(lK.cv, -lK.ox, -lK.oy, lK.w, lK.h);
      }
    }
    jr.setTransform(l3);
  } else {
    jr.globalAlpha = Math.min(1, l1 * 2) * 0.22;
    jr.fillStyle = "#ffd0f0";
    jr.fillRect(w8.x, w8.y, w8.w, w8.h);
  }
  jr.globalAlpha = 1;
}
v(jJ, "drawBomb");
function jT(jr, jg, jz, jQ) {
  let jH = jz.boss;
  let l0 = jH.def;
  if (!l0 || !jH.show || jH.dying > 0) {
    return;
  }
  let l1 = jz.phase;
  jO(jg, w8.x + 6, w8.y + 3, l0.name, "#ffffff", "fnt_small", "left", 1, true);
  let l2 = 0;
  for (let lP = Math.max(0, jz.pi + 1); lP < l0.phases.length; lP++) {
    if (l0.phases[lP].spell) {
      l2++;
    }
  }
  let l3 = jl("spr_sparestar", 0, 0.55, 0, false);
  let l4 = jf(jg, l0.name, "fnt_small") + 10;
  if (l3) {
    for (let lw = 0; lw < l2; lw++) {
      jr.drawImage(l3.cv, w8.x + 6 + l4 + lw * 10, w8.y + 4, l3.w, l3.h);
    }
  }
  let l5 = w8.x + 6;
  let l6 = w8.x2 - 50;
  let l8 = w8.y + 17;
  if (l1 && !l1.survival) {
    let lj = Math.max(0, jH.hp / jH.hpMax);
    jr.fillStyle = "#800000";
    jr.fillRect(l5, l8, l6 - l5, 4);
    jr.fillStyle = l1.spell ? "#ffff00" : "#ffa040";
    jr.fillRect(l5, l8, (l6 - l5) * lj, 4);
  } else if (l1 && l1.survival) {
    jr.fillStyle = "#404040";
    jr.fillRect(l5, l8, l6 - l5, 4);
  }
  if (l1 && jz.declT === 0 && !l1.hideTimer) {
    let ll = Math.max(0, Math.ceil(jz.timer / 30));
    jO(jg, w8.x2 - 6, w8.y + 2, (ll < 10 ? "0" : "") + ll, ll <= 10 ? "#ff4040" : "#ffffff", "fnt_mainbig", "right", 1, true);
  }
  let l9 = jH.x;
  jr.fillStyle = "#ff3030";
  jr.beginPath();
  jr.moveTo(l9 - 5, w8.y2 + 9);
  jr.lineTo(l9 + 5, w8.y2 + 9);
  jr.lineTo(l9, w8.y2 + 3);
  jr.fill();
}
v(jT, "drawBossHud");
var jW = new Map();
function jm(jr, jg, jz) {
  let jQ = jW.get(jg);
  if (jQ === undefined) {
    let jH = 0;
    for (let l0 of jg) {
      jH = Math.max(jH, jf(jr, l0, "fnt_mainbig"));
    }
    jQ = jH <= jz ? "fnt_mainbig" : "fnt_main";
    jW.set(jg, jQ);
  }
  return jQ;
}
v(jm, "fontFor");
function jx(jr, jg, jz, jQ) {
  let jH = jz.banner;
  if (jH) {
    if (jH.kind === "spell") {
      let l0 = jH.t;
      let l1 = w8.y2 - 64;
      let l2 = w8.y + 40;
      let l3 = l0 < 22 ? 0 : Math.min(1, (l0 - 22) / 16);
      let l4 = 1 - (1 - l3) * (1 - l3);
      let l5 = l1 + (l2 - l1) * l4;
      let l6 = l0 < 10 ? (10 - l0) * 24 : 0;
      let l8 = w8.x2 - 8 + l6;
      let l9 = jf(jg, jH.text, "fnt_main");
      let lP = wc[jz.boss.def && jz.boss.def.col || 0];
      if (l0 < 38) {
        let lw = Math.min(1, l0 / 8) * (l0 > 30 ? (38 - l0) / 8 : 1);
        let lj = Math.min(1, l0 / 12) * w8.w / 2;
        jr.globalAlpha = lw * 0.6;
        jr.fillStyle = "#000000";
        jr.fillRect(w8.cx - lj, l5 - 22, lj * 2, 46);
        jr.globalAlpha = lw;
        jr.fillStyle = lP;
        jr.fillRect(w8.cx - lj, l5 - 22, lj * 2, 2);
        jr.fillRect(w8.cx - lj, l5 + 22, lj * 2, 2);
        jr.globalAlpha = 1;
        jO(jg, l8, l5 - 18, jH.num ? "SPELL CARD No." + String(jH.num).padStart(2, "0") : "SPELL CARD", lP, "fnt_small", "right", lw, true);
      }
      jr.globalAlpha = 0.75;
      jr.fillStyle = "#000000";
      jr.fillRect(l8 - l9 - 10, l5 - 2, l9 + 14, 20);
      jr.fillStyle = lP;
      jr.fillRect(l8 - l9 - 10, l5 + 17, l9 + 14, 2);
      jr.globalAlpha = 1;
      jO(jg, l8, l5, jH.text, "#ffffff", "fnt_main", "right", 1, true);
      if (l3 >= 1 || l0 > 38) {
        let ll = jz.cardFailed;
        let lD = jz.phase && jz.phase.survival ? "SURVIVE" : ll ? "BONUS FAILED" : "BONUS " + Math.round(jz.cardBonus / 10) * 10;
        let lO = "";
        if (jQ.history) {
          lO = "  " + jQ.history.cap + "/" + jQ.history.att;
        }
        jO(jg, l8, l5 + 22, lD + lO, ll ? "#808080" : "#c0c0c0", "fnt_main", "right", 1, true);
      }
      if (!jz.phase) {
        jz.banner = null;
      }
    } else if (jH.kind === "boss") {
      let lf = jH.t < 16 ? jH.t / 16 : jH.t > 56 ? Math.max(0, (76 - jH.t) / 20) : 1;
      let lR = jH.line ? jH.t > 92 ? Math.max(0, (108 - jH.t) / 16) : 1 : lf;
      jO(jg, w8.cx, w8.y + 170, jH.text, "#ffffff", "fnt_mainbig", "center", jH.line ? lR : lf, true);
      jO(jg, w8.cx, w8.y + 202, jH.sub, "#c0c0c0", "fnt_main", "center", jH.line ? lR : lf, true);
      if (jH.line && jH.t > wO - 6) {
        let lu = w8.x + 12;
        let lv = w8.y2 - 108;
        let lc = w8.x2 - 12;
        let lZ = w8.y2 - 12;
        jr.globalAlpha = lR;
        jr.fillStyle = "#000000";
        jr.fillRect(lu + 6, lv + 6, lc - lu - 12, lZ - lv - 12);
        jr.globalAlpha = 1;
        if (lR > 0.5) {
          jR(jg, lu, lv, lc, lZ);
        }
        let la = jH.chars;
        let lY = jm(jg, jH.line, lc - lu - 40);
        let ln = lY === "fnt_mainbig" ? 30 : 22;
        for (let lp = 0; lp < jH.line.length && la > 0; lp++) {
          let lK = jH.line[lp];
          let lU = Math.min(la, lK.length);
          la -= lU;
          jO(jg, lu + 22, lv + 22 + lp * ln, lU < lK.length ? lK.slice(0, lU) : lK, "#ffffff", lY, "left", lR);
        }
      }
    } else if (jH.kind === "capture" || jH.kind === "failed") {
      let lL = jH.t > 70 ? Math.max(0, (90 - jH.t) / 20) : 1;
      let lo = jH.kind === "capture";
      let lA = w8.y + 120;
      let lX = lo ? Math.max(0, 8 - jH.t) * 3 : 0;
      jO(jg, w8.cx, lA - lX, jH.text, lo ? jH.t >> 2 & 1 ? "#ffff00" : "#ffffff" : "#a0a0a0", "fnt_mainbig", "center", lL, true);
      if (jH.sub) {
        let lJ = lo ? Math.round(+jH.sub * Math.min(1, jH.t / 18) / 10) * 10 : jH.sub;
        jO(jg, w8.cx, lA + 30, String(lJ), "#ffff00", "fnt_mainbig", "center", lL, true);
      }
      if (lo && !jQ.calm) {
        let lT = f.spr_shine;
        let lW = lT ? Math.max(1, lT.frames | 0) : 1;
        if (lT) {
          for (let lm = 0; lm < 4; lm++) {
            let lx = jH.t * 0.08 + lm / 4;
            let lE = Math.floor(lx);
            let lN = Math.floor((lx - lE) * lW) % lW;
            jg.draw_sprite_ext("spr_shine", lN, w8.cx - 130 + (lm * 0.37 + lE * 0.61) % 1 * 260, lA - 6 + (lm * 0.53 + lE * 0.29) % 1 * 64, 1, 1, 0, u.white, lL);
          }
        }
      }
      if (lo && jH.pts && jH.t > 18) {
        let lG = jl("spr_sparestar", 0, 1, 0, true);
        let ly = jf(jg, "+" + jH.pts + " POINTS", "fnt_main");
        if (lG) {
          jr.globalAlpha = lL;
          jr.drawImage(lG.cv, w8.cx - ly / 2 - 18, lA + 70 - lG.oy + 8, lG.w, lG.h);
          jr.globalAlpha = 1;
        }
        jO(jg, w8.cx + 4, lA + 68, "+" + jH.pts + " POINTS", "#ffffff", "fnt_main", "center", lL, true);
      }
    }
  }
  if (jz.phase && jz.phase.spell && jz.declT > 0) {
    let lq = jz.boss.def;
    let lS = 1 - jz.declT / 48;
    let lF = w8.x2 + 60 - lS * (w8.w + 60);
    let ld = w8.y + 250 - lS * 60;
    jg.draw_sprite_ext(lq.portrait || lq.spr, 0, lF, ld, 3.2, 3.2, 0, u.white, Math.sin(lS * Math.PI) * 0.28);
  }
  for (let lB of jz.popups) {
    let lh = lB.t > (lB.big ? 50 : 26) ? 1 - (lB.t - (lB.big ? 50 : 26)) / 20 : 1;
    jO(jg, lB.x, lB.y, lB.text, wc[lB.col] || "#ffffff", lB.big ? "fnt_main" : "fnt_small", "center", Math.max(0, lh), true);
  }
}
v(jx, "drawBanners");
var jI = {};
for (let lQ of Object.keys(jU)) {
  jI[lQ] = jU[lQ].spell;
}
var jb = ["#80ff80", "#80c0ff", "#ffc040", "#ff60ff"];
function jE(jr, jg) {
  let jz = String(Math.floor(jr));
  while (jz.length < jg) {
    jz = "0" + jz;
  }
  return jz;
}
v(jE, "pad");
var jN = {
  x: 436,
  touch: {
    focus: {
      x: 440,
      y: 306,
      w: 96,
      h: 164
    },
    spell: {
      x: 542,
      y: 306,
      w: 94,
      h: 164
    },
    pause: {
      x: 580,
      y: 6,
      w: 54,
      h: 38
    },
    pauseZone: {
      x: 436,
      y: 30,
      w: 204,
      h: 64
    }
  }
};
function jG(jr, jg, jz, jQ, jH, l0, l1 = 1, l2 = 0) {
  let l3 = jl(jg, jz, l0, l2, true);
  if (l3) {
    jr.ctx.globalAlpha = l1;
    jr.ctx.drawImage(l3.cv, Math.round(jQ - l3.ox), Math.round(jH - l3.oy), l3.w, l3.h);
    jr.ctx.globalAlpha = 1;
    return l3;
  } else {
    return null;
  }
}
v(jG, "spriteIn");
function jy(jr, jg, jz, jQ, jH = 1, l0 = 1) {
  let l1 = jU[jg] || jU.susie;
  return jG(jr, l1.icon[0], l1.icon[1], jz, jQ, l1.icon[2] * jH, l0);
}
v(jy, "spellIcon");
function jq(jr, jg, jz, jQ, jH = 1, l0 = 1) {
  let l1 = jU[jg] || jU.susie;
  return jG(jr, l1.head[0], l1.head[1], jz, jQ, l1.head[2] * jH, l0);
}
v(jq, "partnerHead");
var jS = ["focus", "spell"];
var jF = ["FOCUS", "SPELL"];
function jd(jr, jg, jz, jQ) {
  let jH = jz.P;
  let l0 = 444;
  let l1 = 628;
  let l2 = jU[jz.partner] || jU.susie;
  let l3 = wc[jL(jz).opt];
  jr.fillStyle = "#000000";
  jr.fillRect(0, 0, 640, w8.y);
  jr.fillRect(0, w8.y2, 640, 480 - w8.y2);
  jr.fillRect(0, 0, w8.x, 480);
  jr.fillRect(w8.x2, 0, 640 - w8.x2, 480);
  jr.strokeStyle = wy;
  jr.lineWidth = 3;
  jr.strokeRect(w8.x - 1.5, w8.y - 1.5, w8.w + 3, w8.h + 3);
  let l4 = jz.mode === "practice";
  jO(jg, l0, 12, ww[jz.diff], jb[jz.diff], "fnt_main");
  if (!jQ.touch) {
    jO(jg, l1, 12, l4 ? "PRACTICE" : jQ.stageTag || "", "#808080", "fnt_main", "right");
  }
  let l5 = (la, lY, ln, lp = "#ffffff") => {
    jO(jg, l0, la, lY, "#808080", "fnt_main");
    if (ln !== null) {
      jO(jg, l1, la, ln, lp, "fnt_main", "right");
    }
  };
  l5(38, "HISCORE", jE(Math.max(jQ.hiscore || 0, jH.score), 10), "#c0c0c0");
  l5(58, "SCORE", jE(jH.score, 10));
  l5(84, "SOULS", l4 ? "PRACTICE" : null, "#808080");
  if (!l4) {
    let la = jl("spr_heartsmall", 0, 1.2, 0, false);
    let lY = Math.max(0, jH.lives);
    if (la && lY <= 7) {
      for (let ln = 0; ln < lY; ln++) {
        jr.drawImage(la.cv, l1 - 12 - ln * 14, 86, la.w, la.h);
      }
    } else if (la) {
      jr.drawImage(la.cv, l1 - 40, 86, la.w, la.h);
      jO(jg, l1, 84, "x" + lY, "#ffffff", "fnt_main", "right");
    }
  }
  l5(106, "SPELLS", null);
  let l6 = Math.max(0, jH.bombs);
  if (l6 <= 7) {
    for (let lp = 0; lp < l6; lp++) {
      jy(jg, jz.partner, l1 - 7 - lp * 15, 114, 1);
    }
  } else {
    jy(jg, jz.partner, l1 - 34, 114, 1);
    jO(jg, l1, 106, "x" + l6, "#ffffff", "fnt_main", "right");
  }
  l5(128, "GRAZE", String(jH.graze));
  jO(jg, l0, 150, "TP", "#ffa040", "fnt_main");
  let l8 = l0 + 28;
  let l9 = 154;
  let lP = l1 - 40 - l8;
  let lw = 9;
  jr.fillStyle = "#800000";
  jr.fillRect(l8, l9, lP, lw);
  jr.fillStyle = jH.tp >= 100 ? "#ffff00" : "#ffa040";
  jr.fillRect(l8, l9, lP * Math.min(1, jH.tp / 100), lw);
  jr.strokeStyle = "#ffffff";
  jr.lineWidth = 1;
  jr.strokeRect(l8 - 0.5, l9 - 0.5, lP + 1, lw + 1);
  jO(jg, l1, 150, Math.floor(jH.tp) + "%", "#ffa040", "fnt_main", "right");
  let lj = 436;
  let ll = 174;
  let lD = 636;
  let lO = 300;
  let lf = l0 + 14;
  let lR = l1 - 12;
  jr.fillStyle = "#000000";
  jr.fillRect(lj + 6, ll + 6, lD - lj - 12, lO - ll - 12);
  jR(jg, lj, ll, lD, lO);
  jq(jg, jz.partner, lf + 12, ll + 30, 1);
  if (l2.plate) {
    jg.draw_sprite_ext(l2.plate, 0, lf + 34, ll + 24, 1, 1, 0, l3, 1);
  } else {
    jO(jg, lf + 34, ll + 22, l2.name, l3, "fnt_main");
  }
  let lu = jH.focusT >= 4 ? 1 : 0;
  jO(jg, lf, ll + 46, "SHOT", "#808080", "fnt_main");
  jO(jg, lR, ll + 46, l2.shot[lu], lu ? "#ffff00" : "#ffffff", "fnt_main", "right");
  jO(jg, lf, ll + 68, "POWER", "#808080", "fnt_main");
  let lv = lf + 52;
  let lc = lR - 40 - lv;
  let lZ = ll + 72;
  jr.fillStyle = "#800000";
  jr.fillRect(lv, lZ, lc, 9);
  jr.fillStyle = jH.power >= 4 ? "#ffff00" : l3;
  jr.fillRect(lv, lZ, Math.round(lc * Math.min(1, jH.power / 4)), 9);
  for (let lK = 1; lK < 4; lK++) {
    jr.fillStyle = "#000000";
    jr.fillRect(lv + Math.round(lc * lK / 4), lZ, 1, 9);
  }
  jO(jg, lR, ll + 68, jH.power >= 4 ? "MAX" : jH.power.toFixed(2), jH.power >= 4 ? "#ffff00" : "#ffffff", "fnt_main", "right");
  jy(jg, jz.partner, lf + 6, ll + 98, 1);
  jO(jg, lf + 20, ll + 90, l2.spell, "#c0c0c0", "fnt_main");
  if (jQ.touch) {
    let lU = jN.touch;
    for (let lo = 0; lo < 2; lo++) {
      let lA = jS[lo];
      let lX = jF[lo];
      let lJ = lU[lA];
      let lT = !!jQ.touchHeld && !!jQ.touchHeld[lA];
      let lW = lJ.x + 2;
      let lm = lJ.y + 2;
      let lx = lJ.x + lJ.w - 2;
      let lE = lJ.y + lJ.h - 2;
      let lN = (lW + lx) / 2;
      let lG = lm + (lE - lm) * 0.42 - (lT ? 3 : 0);
      jr.fillStyle = "#000000";
      jr.fillRect(lW + 6, lm + 6, lx - lW - 12, lE - lm - 12);
      jR(jg, lW, lm, lx, lE);
      if (lA === "focus") {
        let ly = jl("spr_yellowheart", 0, 1.6, 0, true);
        if (ly) {
          jr.save();
          jr.globalAlpha = lT ? 1 : 0.8;
          jr.translate(lN, lG);
          jr.rotate(-Math.PI / 2);
          jr.drawImage(ly.cv, -ly.ox, -ly.oy, ly.w, ly.h);
          jr.restore();
        }
        jr.fillStyle = "#ff2020";
        jr.beginPath();
        jr.arc(lN, lG, 4.5, 0, wE);
        jr.fill();
        jr.fillStyle = "#ffffff";
        jr.beginPath();
        jr.arc(lN, lG, 3, 0, wE);
        jr.fill();
      } else {
        jy(jg, jz.partner, lN, lG, 2.4, lT ? 1 : jH.bombs > 0 ? 0.85 : 0.35);
        jO(jg, lN, lG + 24, "x" + jH.bombs, jH.bombs > 0 ? "#ffffff" : "#606060", "fnt_main", "center");
      }
      jO(jg, lN, lE - 44, lX, lT ? "#ffff00" : "#ffffff", "fnt_main", "center");
    }
    let lL = lU.pause;
    jr.fillStyle = "#000000";
    jr.fillRect(lL.x + lL.w / 2 - 10, lL.y + 8, 22, lL.h - 14);
    jr.fillStyle = "#ffffff";
    jr.fillRect(lL.x + lL.w / 2 - 8, lL.y + 10, 5, lL.h - 20);
    jr.fillRect(lL.x + lL.w / 2 + 3, lL.y + 10, 5, lL.h - 20);
  } else {
    let lq = l2.idle;
    jg.draw_sprite_ext(lq[0], (jQ.time / 10 | 0) % lq[1], l0 + 50, 330, lq[2], lq[2], 0, u.white, 1);
    if (jQ.points !== undefined && jQ.points !== null) {
      jG(jg, "spr_sparestar", 0, l0 + 8, 456, 0.8);
      jO(jg, l0 + 20, 448, "POINTS", "#808080", "fnt_main");
      jO(jg, l1, 448, String(jQ.points), "#ffff00", "fnt_main", "right");
    }
  }
}
v(jd, "drawPanel");
function jB(jr, jg, jz, jQ) {
  let jH = jr.ctx;
  jQ.M = jH.getTransform();
  let l0 = 0;
  let l1 = 0;
  if (jg.shakeT > 0) {
    let l4 = jg.shakeAmp * (jg.shakeT / (jg.shakeMax || 1));
    l0 = (Math.random() * 2 - 1) * l4;
    l1 = (Math.random() * 2 - 1) * l4;
  }
  j9 = jP() + j7;
  j1();
  let l2 = jQ.M;
  jH.save();
  try {
    jH.beginPath();
    jH.rect(w8.x, w8.y, w8.w, w8.h);
    jH.clip();
    if (l0 || l1) {
      jH.translate(l0, l1);
      jQ.M = jH.getTransform();
    }
    jv(jH, jr, jg, jQ);
    jY(jH, jg, jz);
    jK(jH, jr, jg, jz, jQ);
    jJ(jH, jr, jg, jz, jQ);
    jA(jH, jg, jz, jQ);
    ja(jH, jg, jQ);
    jc(jH, jg, jz, jQ);
    jn(jH, jr, jg, jz, jQ);
    jp(jH, jr, jg);
    jX(jH, jr, jg, jz, jQ);
    if (jg.flashT > 0) {
      jH.globalAlpha = jg.flashT * 0.55 / jg.flashMax;
      jH.fillStyle = wc[jg.flashCol] || "#ffffff";
      jH.fillRect(w8.x - 10, w8.y - 10, w8.w + 20, w8.h + 20);
      jH.globalAlpha = 1;
    }
    if (jg.P.alive && jg.P.y < w9 + 30 && jg.P.y > w9 - 30) {
      jH.globalAlpha = 0.2;
      jH.fillStyle = "#ffffff";
      jH.fillRect(w8.x, w9, w8.w, 1);
      jH.globalAlpha = 1;
    }
    if (!jQ.preview) {
      jx(jH, jr, jg, jQ);
      jT(jH, jr, jg, jQ);
    }
  } finally {
    jH.setLineDash(je);
    jH.globalAlpha = 1;
    jH.restore();
    jQ.M = l2;
  }
  if (jQ.preview) {
    if (jr.resetDrawState) {
      jr.resetDrawState();
    }
    return;
  }
  jd(jH, jr, jg, jQ);
  let l3 = jg.boss;
  if (l3.def && l3.show && !(l3.dying > 0)) {
    jH.fillStyle = "#ff3030";
    jH.beginPath();
    jH.moveTo(l3.x - 6, w8.y2 + 12);
    jH.lineTo(l3.x + 6, w8.y2 + 12);
    jH.lineTo(l3.x, w8.y2 + 4);
    jH.fill();
  }
  if (jr.resetDrawState) {
    jr.resetDrawState();
  }
}
v(jB, "drawSim");
var jh = 4;
function jk(jr, jg, jz) {
  let jQ;
  if (jg.note) {
    jO(jr, w8.cx, jh, jg.note, "#ffff00", "fnt_small", "center");
    return;
  }
  if (jg.auto) {
    let l2 = (jz.time / 20 | 0) & 1;
    jO(jr, w8.x + 2, jh, jg.watch ? "WATCHING" : "AUTOPLAY", l2 ? "#ffff00" : "#c0c0c0", "fnt_small");
    jQ = jg.mode === "touch" ? [["II", "then TAKE OVER"]] : jg.mode === "pad" ? [[jg.pad && jg.pad.pause || "START", "then TAKE OVER"]] : [["P", "take over"], ["ESC", "pause"]];
    jV(jr, jQ);
    return;
  }
  let jH = jg.tut ? "skip" : "pause";
  if (jg.mode === "touch") {
    jQ = [["DRAG", "move"], ["FINGER DOWN", "shoot"], ["2ND FINGER", "focus"], ["II", jH]];
  } else if (jg.mode === "pad") {
    let l3 = jg.pad || {};
    jQ = [["STICK", "move"], [l3.shoot || "A", "shoot"], [l3.focus || "B", "focus"], [l3.spell || "Y", "spell"], [l3.pause || "START", jH]];
  } else {
    jQ = [["ARROWS", "move"], ["Z", "shoot"], ["SHIFT", "focus"], ["C", "spell"], ["ESC", jH]];
    if (!jg.tut) {
      jQ.push(["P", "auto"]);
    }
  }
  let l0 = 0;
  for (let [l4, l5] of jQ) {
    l0 += jf(jr, l4, "fnt_small") + 4 + jf(jr, l5, "fnt_small") + 12;
  }
  let l1 = w8.cx - (l0 - 12) / 2;
  for (let [l6, l8] of jQ) {
    jO(jr, l1, jh, l6, "#ffff00", "fnt_small");
    l1 += jf(jr, l6, "fnt_small") + 4;
    jO(jr, l1, jh, l8, "#808080", "fnt_small");
    l1 += jf(jr, l8, "fnt_small") + 12;
  }
}
v(jk, "drawKeyStrip");
function jV(jr, jg) {
  let jz = w8.x2 - 2;
  for (let jQ = jg.length - 1; jQ >= 0; jQ--) {
    let [jH, l0] = jg[jQ];
    jO(jr, jz, jh, l0, "#808080", "fnt_small", "right");
    jz -= jf(jr, l0, "fnt_small") + 4;
    jO(jr, jz, jh, jH, "#ffff00", "fnt_small", "right");
    jz -= jf(jr, jH, "fnt_small") + 12;
  }
}
v(jV, "stripRight");
function jC(jr, jg, jz, jQ) {
  let jH = jr.ctx;
  let l0 = jz.P;
  if (!l0.alive) {
    return;
  }
  let l1 = jg.px.length - 1;
  let l2 = jg.px[0];
  let l3 = jg.py[0];
  let l4 = jg.px[l1];
  let l5 = jg.py[l1];
  jH.save();
  jH.beginPath();
  jH.rect(w8.x, w8.y, w8.w, w8.h);
  jH.clip();
  jH.lineCap = "round";
  jH.lineJoin = "round";
  if (Math.hypot(l4 - l2, l5 - l3) < 6) {
    let l8 = l0.px + (l0.x - l0.px) * jQ.a;
    let l9 = l0.py + (l0.y - l0.py) * jQ.a;
    for (let lP = 0; lP < 2; lP++) {
      jH.globalAlpha = lP ? 0.8 : 0.5;
      jH.strokeStyle = lP ? "#ffffff" : "#000000";
      jH.lineWidth = lP ? 1.5 : 4;
      jH.beginPath();
      jH.arc(l8, l9, 15, 0, wE);
      jH.stroke();
    }
    jH.restore();
    return;
  }
  let l6 = 1;
  while (l6 < l1 && Math.hypot(jg.px[l6] - l2, jg.py[l6] - l3) < 11) {
    l6++;
  }
  for (let lw = 0; lw < 2; lw++) {
    jH.globalAlpha = lw ? 0.85 : 0.55;
    jH.strokeStyle = lw ? "#ffffff" : "#000000";
    jH.lineWidth = lw ? 1.5 : 4.5;
    jH.beginPath();
    jH.moveTo(jg.px[l6], jg.py[l6]);
    for (let ll = l6 + 1; ll <= l1; ll++) {
      jH.lineTo(jg.px[ll], jg.py[ll]);
    }
    jH.stroke();
    let lj = lw ? 4 : 5.5;
    jH.beginPath();
    jH.moveTo(l4, l5 - lj);
    jH.lineTo(l4 + lj, l5);
    jH.lineTo(l4, l5 + lj);
    jH.lineTo(l4 - lj, l5);
    jH.closePath();
    jH.stroke();
  }
  jH.restore();
}
v(jC, "drawBotPath");
export { a, o as b, A as c, t as d, m as e, x as f, E as g, h, k as i, P0 as j, P1 as k, P3 as l, P5 as m, P6 as n, P7 as o, P8 as p, P9 as q, PP as r, Pl as s, PD as t, PO as u, Pf as v, PR as w, Pu as x, Pv as y, Pa as z, PC as A, Pg as B, w0 as C, w4 as D, w6 as E, w7 as F, w8 as G, ww as H, wl as I, wv as J, wc as K, wZ as L, wa as M, wT as N, wm as O, wb as P, wy as Q, wQ as R, jO as S, jf as T, jR as U, ju as V, jU as W, jI as X, jb as Y, jN as Z, jG as _, jq as $, jB as aa, jk as ba, jC as ca };
