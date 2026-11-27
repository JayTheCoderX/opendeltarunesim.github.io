import { N as f, Pb as R, h as u } from './c-PBMEVLU6.js';
import { a as v, l as c } from './c-XSSGDLV7.js';
c(), c();
var a = ['MAX', "300", "200", "100", '50', 'MISS'],
  n = [0x131, 0x12c, 0xc8, 0x64, 0x32, 0x0],
  p = [0x12c, 0x12c, 0xc8, 0x64, 0x32, 0x0],
  L = [0x140, 0x12c, 0xc8, 0x64, 0x32, 0x0],
  o = ["#ffff00", "#ffffff", "#7ad17a", "#ffa040", "#808080", "#ff4040"],
  A = {
    'SS': "#ffff00",
    'S': "#e0c060",
    'A': "#7ad17a",
    'B': "#ffffff",
    'C': "#ffa040",
    'D': "#ff4040",
    'F': "#ff4040"
  },
  t = {
    'EZ': {
      'name': 'Easy',
      'kind': 'reduce',
      'mult': 0.5,
      'desc': "Wider hit windows, less HP drain.",
      'off': ['HR']
    },
    'NF': {
      'name': "No Fail",
      'kind': 'reduce',
      'mult': 0.5,
      'desc': "You cannot fail.",
      'off': []
    },
    'HT': {
      'name': "Half Time",
      'kind': 'reduce',
      'mult': 0.5,
      'rate': 0.75,
      'pitch': false,
      'desc': "0.75x speed, pitch kept.",
      'off': ['DT', 'NC', 'DC']
    },
    'DC': {
      'name': 'Daycore',
      'kind': 'reduce',
      'mult': 0.5,
      'rate': 0.75,
      'pitch': true,
      'desc': "0.75x speed, pitch lowered.",
      'off': ['DT', 'NC', 'HT']
    },
    'HR': {
      'name': "Hard Rock",
      'kind': 'raise',
      'mult': 0x1,
      'desc': "Tighter hit windows, more HP drain.",
      'off': ['EZ']
    },
    'DT': {
      'name': "Double Time",
      'kind': 'raise',
      'mult': 0x1,
      'rate': 1.5,
      'pitch': false,
      'desc': "1.5x speed, pitch kept.",
      'off': ['HT', 'DC', 'NC']
    },
    'NC': {
      'name': 'Nightcore',
      'kind': 'raise',
      'mult': 0x1,
      'rate': 1.5,
      'pitch': true,
      'desc': "1.5x speed, pitch raised.",
      'off': ['HT', 'DC', 'DT']
    },
    'HD': {
      'name': 'Hidden',
      'kind': 'raise',
      'mult': 0x1,
      'desc': "Notes fade out before they reach the keys.",
      'off': ['FI']
    },
    'FI': {
      'name': "Fade In",
      'kind': 'raise',
      'mult': 0x1,
      'desc': "Notes appear late, near the keys.",
      'off': ['HD']
    },
    'MR': {
      'name': 'Mirror',
      'kind': 'conv',
      'mult': 0x1,
      'desc': "The chart flipped left to right.",
      'off': []
    },
    'CS': {
      'name': "Constant Speed",
      'kind': 'conv',
      'mult': 0x1,
      'desc': "Ignore scroll speed changes (SV).",
      'off': []
    },
    'AT': {
      'name': 'Autoplay',
      'kind': 'auto',
      'mult': 0x1,
      'desc': "Watch a perfect play. Not scored.",
      'off': []
    }
  },
  T = ['EZ', 'NF', 'HT', 'DC', 'HR', 'DT', 'NC', 'HD', 'FI', 'MR', 'CS', 'AT'];
function m(jr) {
  let jg = [];
  if (!Array.isArray(jr)) return jg;
  for (let jz of T) jr.includes(jz) && !jg.some(jQ => t[jQ].off.includes(jz)) && jg.push(jz);
  return jg;
}
v(m, 'cleanMods');
function x(jr) {
  let jg = m(jr),
    jz = 0x1,
    jQ = false,
    jH = 0x1;
  for (let l0 of jg) {
    let l1 = t[l0];
    jH *= l1.mult, l1.rate && (jz = l1.rate, jQ = !!l1.pitch);
  }
  return {
    'mods': jg,
    'rate': jz,
    'pitch': jQ,
    'mult': jH,
    'winMul': jg.includes('HR') ? 0.7142857142857143 : jg.includes('EZ') ? 1.4 : 0x1,
    'hpMul': jg.includes('HR') ? 1.4 : jg.includes('EZ') ? 0.5 : 0x1,
    'noFail': jg.includes('NF'),
    'mirror': jg.includes('MR'),
    'constant': jg.includes('CS'),
    'auto': jg.includes('AT'),
    'hidden': jg.includes('HD'),
    'fadeIn': jg.includes('FI')
  };
}
v(x, 'modInfo');
var E = v(jr => {
  let jg = m(jr);
  return jg.length ? jg.join('') : 'NM';
}, 'modsLabel');
function G(jr, jg = 0x1, jz = 0x1) {
  let jQ = Math.max(0x0, Math.min(0xa, Number(jr) || 0x0)),
    jH = jg * jz;
  return [0x10 * jH, (0x40 - 0x3 * jQ) * jH, (0x61 - 0x3 * jQ) * jH, (0x7f - 0x3 * jQ) * jH, (0x97 - 0x3 * jQ) * jH, (0xbc - 0x3 * jQ) * jH];
}
v(G, 'windows');
function y(jr, jg) {
  return jg ? 'F' : jr >= 0x1 ? 'SS' : jr >= 0.95 ? 'S' : jr >= 0.9 ? 'A' : jr >= 0.8 ? 'B' : jr >= 0.7 ? 'C' : 'D';
}
v(y, 'gradeOf');
var i = Math.log(0x4),
  s = Math.log(0x190) / i,
  S = v(jr => Math.min(Math.max(0.5, Math.log(jr) / i), s), 'comboMul');
function d(jr, jg, jz, jQ, jH) {
  let l0 = new Int32Array(jH).fill(-0x1),
    l1 = 0x0;
  for (let l2 = 0x0; l2 < jQ; l2++) {
    let l3 = jz[l2],
      l4 = l0[l3];
    if (l4 >= 0x0 && jg[l4] > 0x0 && jg[l4] > jr[l2] - 0x14) {
      let l5 = jr[l2] - jr[l4],
        l6 = jr[l2] - Math.min(0x3c, Math.max(0xa, l5 / 0x2));
      jg[l4] = l6 - jr[l4] >= 0x14 ? Math.round(l6) : 0x0, l1++;
    }
    l0[l3] = l2;
  }
  return l1;
}
v(d, 'fixOverlaps');
var h = {
    0x1: ['Space'],
    0x2: ['KeyF', 'KeyJ'],
    0x3: ['KeyF', 'Space', 'KeyJ'],
    0x4: ['KeyD', 'KeyF', 'KeyJ', 'KeyK'],
    0x5: ['KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK'],
    0x6: ['KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'KeyL'],
    0x7: ['KeyS', 'KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK', 'KeyL'],
    0x8: ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon'],
    0x9: ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'Space', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon'],
    0xa: ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyV', 'KeyN', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon']
  },
  k = {
    0x1: [[0x0, 0x1, 0x2, 0x3, 0x4, 0x5]],
    0x2: [[0xe, 0x4, 0x6], [0x1, 0x5, 0x7]],
    0x3: [[0xe, 0x4], [0xd, 0x0, 0x6, 0x7], [0x1, 0x5]],
    0x4: [[0xe, 0x4], [0xd, 0x6], [0x2, 0x7], [0x1, 0x5]],
    0x5: [[0xe, 0x4], [0xd], [0x6, 0x7, 0x0], [0x2], [0x1, 0x5]],
    0x6: [[0x4], [0xe], [0xd], [0x2], [0x1], [0x5]],
    0x7: [[0x4], [0xe], [0xd], [0x6, 0x7, 0x0], [0x2], [0x1], [0x5]]
  },
  r = class l7 {
    constructor(jr, jg = {}) {
      let jz = jg.mods ? x(jg.mods) : {
          ...x([]),
          ...jg
        },
        jQ = this.keys = Math.max(0x1, Math.min(0xa, jr.keys || 0x4)),
        jH = jr.count;
      this.chart = jr, this.n = jH, this.mi = jz, this.time = jr.time, this.lane = new Uint8Array(jH);
      for (let l5 = 0x0; l5 < jH; l5++) this.lane[l5] = jz.mirror ? jQ - 0x1 - jr.lane[l5] : jr.lane[l5];
      this.end = Int32Array.from(jr.end), this.overlapsCut = d(this.time, this.end, this.lane, jH, jQ), this.rate = jz.rate || 0x1, this.od = jg.od ?? jr.od, this.win = G(this.od, jz.winMul || 0x1, this.rate), this.twin = this.win.map(l6 => l6 * 1.5), this.hpDrain = Math.max(0x0, Math.min(0xa, (jg.hp ?? jr.hp ?? 0x5) * (jz.hpMul || 0x1))), this.noFail = !!jz.noFail, this.mult = jz.mult || 0x1;
      let l0 = this.hpDrain;
      this.hpDelta = [0.012, 0.01, 0.004, 0x0, -(0.01 + 0.002 * l0), -(0.04 + 0.006 * l0)], this.head = new Int8Array(jH).fill(-0x1), this.tail = new Int8Array(jH).fill(-0x1), this.state = new Uint8Array(jH), this.capped = new Uint8Array(jH);
      let l1 = new Int32Array(jQ),
        l2 = 0x0;
      for (let l6 = 0x0; l6 < jH; l6++) l1[this.lane[l6]]++, this.end[l6] > 0x0 && l2++;
      this.laneNotes = [];
      let l3 = new Int32Array(jQ);
      for (let l8 = 0x0; l8 < jQ; l8++) this.laneNotes.push(new Int32Array(l1[l8]));
      for (let l9 = 0x0; l9 < jH; l9++) {
        let lP = this.lane[l9];
        this.laneNotes[lP][l3[lP]++] = l9;
      }
      this.laneNext = new Int32Array(jQ), this.holding = new Int32Array(jQ).fill(-0x1), this.broken = new Int32Array(jQ).fill(-0x1), this.down = new Uint8Array(jQ), this.presses = new Int32Array(jQ), this.holds = l2, this.total = jH + l2, this.counts = new Int32Array(0x6), this.judged = 0x0, this.worth = 0x0, this.worthV1 = 0x0, this.worthPP = 0x0, this.comboPortion = 0x0;
      let l4 = 0x0;
      for (let lw = 0x1; lw <= this.total; lw++) l4 += 0x131 * S(lw);
      this.maxComboPortion = Math.max(0x1, l4), this.combo = 0x0, this.maxCombo = 0x0, this.breaks = 0x0, this.hp = 0x1, this.failed = false, this.failAt = -0x1, this.wouldFail = false, this.errN = 0x0, this.errMs = new Float32Array(this.total), this.errAt = new Float32Array(this.total), this.errJ = new Uint8Array(this.total), this.errLane = new Uint8Array(this.total), this.lastJ = -0x1, this.lastJAt = -0x3b9aca00, this.lastErr = 0x0, this.laneHitAt = new Float64Array(jQ).fill(-0x3b9aca00), this.laneHitJ = new Int8Array(jQ).fill(-0x1), this.laneDownAt = new Float64Array(jQ).fill(-0x3b9aca00), this.missAt = -0x3b9aca00, this.comboAt = -0x3b9aca00, this.onJudge = null, this.lastT = -0x3b9aca00, this.maxErr = this.win[0x4];
    }
    get ["accuracy"]() {
      return this.judged ? this.worth / (0x131 * this.judged) : 0x1;
    }
    get ["accuracyV1"]() {
      return this.judged ? this.worthV1 / (0x12c * this.judged) : 0x1;
    }
    get ["score"]() {
      let jr = this.accuracy,
        jg = 0x2710 * this.comboPortion / this.maxComboPortion + 0xf1b30 * Math.pow(jr, 0x2 + 0x2 * jr) * (this.judged / Math.max(0x1, this.total));
      return Math.round(jg * this.mult);
    }
    get ["grade"]() {
      return y(this.accuracy, this.failed);
    }
    get ["complete"]() {
      return this.judged >= this.total;
    }
    get ["fullCombo"]() {
      return this.complete && this.counts[0x5] === 0x0 && this.breaks === 0x0;
    }
    ["classify"](jr, jg = false) {
      let jz = jg ? this.twin : this.win;
      for (let jQ = 0x0; jQ < 0x5; jQ++) if (jr <= jz[jQ]) return jQ;
      return -0x1;
    }
    ["nextIn"](jr) {
      let jg = this.laneNotes[jr],
        jz = this.laneNext[jr];
      for (; jz < jg.length && this.head[jg[jz]] >= 0x0;) jz++;
      return this.laneNext[jr] = jz, jz < jg.length ? jg[jz] : -0x1;
    }
    ["judge"](jr, jg, jz, jQ, jH) {
      let l0 = this.lane[jr];
      if (this.counts[jg]++, this.judged++, this.worth += n[jg], this.worthV1 += p[jg], this.worthPP += L[jg], jg === 0x5 ? (this.combo = 0x0, this.missAt = jH) : (this.combo++, this.combo > this.maxCombo && (this.maxCombo = this.combo), this.comboPortion += n[jg] * S(this.combo), this.comboAt = jH), this.errN < this.errMs.length) {
        let l1 = this.errN++;
        this.errMs[l1] = jg === 0x5 ? NaN : jz, this.errAt[l1] = jQ ? this.end[jr] : this.time[jr], this.errJ[l1] = jg, this.errLane[l1] = l0;
      }
      this.hp = Math.min(0x1, this.hp + this.hpDelta[jg]), this.hp <= 0x0 && (this.hp = 0x0, this.noFail ? this.wouldFail = true : this.failed || (this.failed = true, this.failAt = jH)), this.lastJ = jg, this.lastJAt = jH, this.lastErr = jz, jg !== 0x5 && (this.laneHitAt[l0] = jH, this.laneHitJ[l0] = jg), this.onJudge && this.onJudge(jg, l0, jz, jQ, jH);
    }
    ["missNote"](jr, jg) {
      this.head[jr] = 0x5, this.judge(jr, 0x5, 0x0, false, jg), this.end[jr] > 0x0 && (this.tail[jr] = 0x5, this.judge(jr, 0x5, 0x0, true, jg)), this.state[jr] = 0x3;
    }
    ["update"](jr) {
      if (this.failed) return;
      this.lastT = jr;
      let jg = this.win[0x4];
      for (let jz = 0x0; jz < this.keys; jz++) {
        let jQ = this.holding[jz];
        if (jQ >= 0x0 && jr >= this.end[jQ]) {
          this.holding[jz] = -0x1;
          let l0 = this.capped[jQ] ? 0x4 : 0x0;
          if (this.tail[jQ] = l0, this.state[jQ] = 0x2, this.judge(jQ, l0, 0x0, true, this.end[jQ]), this.failed) return;
        }
        let jH = this.broken[jz];
        if (jH >= 0x0 && jr > this.end[jH] + this.twin[0x4] && (this.broken[jz] = -0x1, this.tail[jH] = 0x5, this.state[jH] = 0x3, this.judge(jH, 0x5, 0x0, true, this.end[jH] + this.twin[0x4]), this.failed)) return;
        for (;;) {
          let l1 = this.nextIn(jz);
          if (l1 < 0x0 || jr - this.time[l1] <= jg) break;
          if (this.missNote(l1, this.time[l1] + jg), this.failed) return;
        }
      }
    }
    ["press"](jr, jg) {
      if (jr < 0x0 || jr >= this.keys || this.failed || (this.update(jg), this.down[jr])) return -0x1;
      this.down[jr] = 0x1, this.laneDownAt[jr] = jg, this.presses[jr]++;
      let jz = this.broken[jr];
      if (jz >= 0x0 && jg < this.end[jz]) return this.broken[jr] = -0x1, this.holding[jr] = jz, this.state[jz] = 0x1, this.capped[jz] = 0x1, -0x1;
      let jQ = this.nextIn(jr);
      if (jQ < 0x0) return -0x1;
      let jH = jg - this.time[jQ];
      if (jH < -this.win[0x5]) return -0x1;
      if (jH < -this.win[0x4]) return this.missNote(jQ, jg), 0x5;
      let l0 = this.classify(Math.abs(jH));
      return l0 < 0x0 ? -0x1 : (this.head[jQ] = l0, this.judge(jQ, l0, jH, false, jg), this.end[jQ] > 0x0 ? (this.state[jQ] = 0x1, this.holding[jr] = jQ) : this.state[jQ] = 0x2, l0);
    }
    ["release"](jr, jg) {
      if (jr < 0x0 || jr >= this.keys) return -0x1;
      this.update(jg), this.down[jr] = 0x0;
      let jz = this.holding[jr];
      if (jz < 0x0 || this.failed) return -0x1;
      this.holding[jr] = -0x1;
      let jQ = jg - this.end[jz];
      if (jQ < -this.twin[0x4]) return this.state[jz] = 0x4, this.broken[jr] = jz, this.breaks++, this.combo = 0x0, this.missAt = jg, -0x2;
      let jH = Math.max(0x0, this.classify(Math.abs(jQ), true));
      return this.capped[jz] && (jH = Math.max(jH, 0x4)), this.tail[jz] = jH, this.state[jz] = 0x2, this.judge(jz, jH, jQ, true, jg), jH;
    }
    ["stats"]() {
      let jr = 0x0,
        jg = 0x0,
        jz = 0x0,
        jQ = 0x0,
        jH = 0x0;
      for (let l2 = 0x0; l2 < this.errN; l2++) {
        let l3 = this.errMs[l2] / this.rate;
        l3 === l3 && (jr++, jg += l3, jz += l3 * l3, l3 < 0x0 ? jQ++ : l3 > 0x0 && jH++);
      }
      let l0 = jr ? jg / jr : 0x0,
        l1 = jr > 0x1 ? Math.sqrt(Math.max(0x0, jz / jr - l0 * l0)) : 0x0;
      return {
        'hits': jr,
        'mean': l0,
        'ur': l1 * 0xa,
        'early': jQ,
        'late': jH
      };
    }
    ["result"]() {
      let jr = this.stats(),
        jg = this.judged ? this.worthPP / (0x140 * this.judged) : 0x1;
      return {
        'score': this.score,
        'accuracy': this.accuracy,
        'accuracyV1': this.accuracyV1,
        'grade': this.grade,
        'maxCombo': this.maxCombo,
        'counts': Array.from(this.counts),
        'total': this.total,
        'judged': this.judged,
        'failed': this.failed,
        'breaks': this.breaks,
        'wouldFail': this.wouldFail,
        'fullCombo': this.fullCombo,
        'perfect': this.complete && this.accuracy >= 0x1,
        'mean': jr.mean,
        'ur': jr.ur,
        'early': jr.early,
        'late': jr.late,
        'acc320': jg,
        'mods': this.mi.mods || []
      };
    }
  };
v(r, 'ManiaPlay');
var P0 = r;
function P1(jr, jg = null, jz = null) {
  let jQ = jr.keys || 0x4,
    jH = jz ? jz.lane : jr.lane,
    l0 = jz ? jz.end : jr.end,
    l1 = [],
    l2 = new Float64Array(jQ).fill(-0x3b9aca00),
    l3 = new Float64Array(jr.count).fill(0x1 / 0x0),
    l4 = new Float64Array(jQ).fill(0x1 / 0x0);
  for (let l5 = jr.count - 0x1; l5 >= 0x0; l5--) {
    let l6 = jH[l5];
    l3[l5] = l4[l6], l4[l6] = jr.time[l5];
  }
  for (let l8 = 0x0; l8 < jr.count; l8++) {
    let l9 = jH[l8],
      lP = jg ? jg(l8) : 0x0;
    if (lP === null) continue;
    let lw = Math.max(jr.time[l8] + lP, l2[l9] + 0x1),
      lj = l0[l8] > 0x0 ? l0[l8] : Math.min(lw + 0x28, (lw + l3[l8]) / 0x2);
    l1.push([lw, l9, 0x1], [Math.max(lw + 0x1, lj), l9, 0x0]), l2[l9] = Math.max(lw + 0x1, lj);
  }
  return l1.sort((ll, lD) => ll[0x0] - lD[0x0] || ll[0x2] - lD[0x2]), l1;
}
v(P1, 'autoEvents');
var P2 = class lM {
  constructor(jr, jg = false) {
    let jz = [],
      jQ = [],
      jH = jg ? [] : jr.timing || [],
      l0 = jH.filter(l5 => l5.uninherited && l5.beatLength > 0x0),
      l1 = jr.bpm && jr.bpm.main > 0x0 ? 0xea60 / jr.bpm.main : l0.length ? l0[0x0].beatLength : 0x1f4,
      l2 = l0.length ? l0[0x0].beatLength : l1,
      l3 = 0x1;
    for (let l5 = 0x0; l5 < jH.length; l5++) {
      let l6 = jH[l5];
      l6.uninherited && l6.beatLength > 0x0 ? (l2 = l6.beatLength, l3 = 0x1) : l6.beatLength < 0x0 && (l3 = Math.max(0.01, Math.min(0xa, -0x64 / l6.beatLength)));
      let l8 = l1 / l2 * l3;
      jz.length && jz[jz.length - 0x1] === l6.t ? jQ[jQ.length - 0x1] = l8 : (!jQ.length || jQ[jQ.length - 0x1] !== l8) && (jz.push(l6.t), jQ.push(l8));
    }
    jz.length || (jz.push(0x0), jQ.push(0x1));
    let l4 = jz.length;
    this.t0 = Float64Array.from(jz), this.sp = Float64Array.from(jQ), this.p0 = new Float64Array(l4);
    for (let l9 = 0x1; l9 < l4; l9++) this.p0[l9] = this.p0[l9 - 0x1] + (this.t0[l9] - this.t0[l9 - 0x1]) * this.sp[l9 - 0x1];
    this.n = l4, this.i = 0x0, this.constant = jg || l4 === 0x1 && jQ[0x0] === 0x1;
  }
  ["pos"](jr) {
    let jg = this.t0,
      jz = this.i;
    if (jr < jg[jz]) {
      for (; jz > 0x0 && jr < jg[jz];) jz--;
    } else {
      for (; jz + 0x1 < this.n && jr >= jg[jz + 0x1];) jz++;
    }
    return this.i = jz, this.p0[jz] + (jr - jg[jz]) * this.sp[jz];
  }
  ["posAt"](jr) {
    let jg = 0x0,
      jz = this.n - 0x1;
    for (; jg < jz;) {
      let jQ = jg + jz + 0x1 >> 0x1;
      this.t0[jQ] <= jr ? jg = jQ : jz = jQ - 0x1;
    }
    return this.p0[jg] + (jr - this.t0[jg]) * this.sp[jg];
  }
  ["speedAt"](jr) {
    let jg = 0x0,
      jz = this.n - 0x1;
    for (; jg < jz;) {
      let jQ = jg + jz + 0x1 >> 0x1;
      this.t0[jQ] <= jr ? jg = jQ : jz = jQ - 0x1;
    }
    return this.sp[jg];
  }
  ["notePositions"](jr) {
    let jg = jr.n,
      jz = new Float64Array(jg),
      jQ = new Float64Array(jg);
    for (let jH = 0x0; jH < jg; jH++) jz[jH] = this.posAt(jr.time[jH]), jQ[jH] = jr.end[jH] > 0x0 ? this.posAt(jr.end[jH]) : jz[jH];
    return {
      'head': jz,
      'tail': jQ
    };
  }
};
v(P2, 'ScrollMap');
var P3 = P2;
function P4(jr, jg, jz, jQ) {
  let jH = jr.timing,
    l0 = 0x0;
  if (!jH || !jH.length) return 0x0;
  let l1 = jr._red || (jr._red = jH.filter(l2 => l2.uninherited && l2.beatLength > 0x0));
  for (let l2 = 0x0; l2 < l1.length && l0 < jQ.length; l2++) {
    let l3 = l1[l2],
      l4 = l2 + 0x1 < l1.length ? l1[l2 + 0x1].t : 0x1 / 0x0;
    if (l4 < jg || l3.t > jz) continue;
    let l5 = l3.beatLength;
    for (; l5 < 0x96;) l5 *= 0x2;
    for (; l5 > 0x7d0;) l5 /= 0x4;
    let l6 = Math.max(l3.t, jg),
      l8 = Math.ceil((l6 - l3.t) / l5),
      l9 = Math.max(0x1, Math.round((l3.meter || 0x4) * l3.beatLength / l5));
    for (let lP = l8;; lP++) {
      let lw = l3.t + lP * l5;
      if (lw >= l4 || lw > jz || l0 >= jQ.length) break;
      jQ[l0++] = lP % l9 === 0x0 ? -lw - 0.001 : lw;
    }
  }
  return l0;
}
v(P4, 'beatLines');
function P5(jr, jg = 0x1) {
  let jz = jr.count,
    jQ = jr.keys || 0x4;
  if (jz < 0x2) return 0x0;
  let jH = jr.time,
    l0 = jr.end,
    l1 = jr.lane,
    l2 = 0x190,
    l3 = new Float64Array(jQ),
    l4 = new Float64Array(jQ),
    l5 = new Float64Array(jQ),
    l6 = 0x1,
    l8 = 0x0,
    l9 = 0x0,
    lP = [],
    lw = 0x0,
    lj = 0x0,
    ll = (lf, lR, lu) => lf * Math.pow(lu, lR / 0x3e8);
  for (let lf = 0x1; lf < jz; lf++) {
    let lR = jH[lf] / jg,
      lu = (l0[lf] > 0x0 ? l0[lf] : jH[lf]) / jg,
      lv = l1[lf],
      lc = (jH[lf] - jH[lf - 0x1]) / jg;
    for (lf === 0x1 && (lw = Math.ceil(lR / l2) * l2); lR > lw;) lP.push(lj), lj = l9, lw += l2;
    let lZ = false,
      la = Math.abs(lu - lR),
      lY = 0x1,
      ln = 0x0;
    for (let lp = 0x0; lp < jQ; lp++) lZ = lZ || l4[lp] > lR + 0x1 && lu > l4[lp] + 0x1, l4[lp] > lu + 0x1 && (lY = 1.25), la = Math.min(la, Math.abs(lu - l4[lp]));
    lZ && (ln = 0x1 / (0x1 + Math.exp(0.5 * (0x1e - la)))), l5[lv] = ll(l5[lv], lR - l3[lv], 0.125) + 0x2 * lY, l8 = lc <= 0x1 ? Math.max(l8, l5[lv]) : l5[lv], l6 = ll(l6, lc, 0.3) + (0x1 + ln) * lY, l3[lv] = lR, l4[lv] = lu, l9 = l8 + l6, l9 > lj && (lj = l9);
  }
  lP.push(lj), lP.sort((lK, lU) => lU - lK);
  let lD = 0x0,
    lO = 0x1;
  for (let lK of lP) {
    if (lK <= 0x0) break;
    lD += lK * lO, lO *= 0.9;
  }
  return lD * 0.018;
}
v(P5, 'starRating');
function P6(jr) {
  return jr < 0x2 ? "#ffffff" : jr < 3.3 ? "#7ad17a" : jr < 4.5 ? "#ffff00" : jr < 5.6 ? "#ffa040" : jr < 0x7 ? "#ff4040" : "#ff00ff";
}
v(P6, 'starColor');
function P7(jr, jg, jz, jQ = []) {
  let jH = 0x8 * Math.pow(Math.max(jr - 0.15, 0.05), 2.2) * Math.max(0x0, 0x5 * jg - 0x4) * (0x1 + 0.1 * Math.min(0x1, jz / 0x5dc));
  return jQ.includes('NF') && (jH *= 0.75), jQ.includes('EZ') && (jH *= 0.5), jH;
}
v(P7, 'ppEstimate');
async function P8(jr, jg, jz, jQ = {}) {
  let jH = jr[0x0].length,
    l0 = jr.length,
    l1 = Math.round(jz * 0.015) * 0x2,
    l2 = l1 >> 0x1,
    l3 = l2 * jg,
    l4 = Math.round(jz * 0.005),
    l5 = l1 / 0x2 * (jg - 0x1),
    l6 = Math.max(0x1, Math.floor(jH / jg)),
    l8 = [];
  for (let lR = 0x0; lR < l0; lR++) l8.push(new Float32Array(l6 + l1));
  let l9 = new Float32Array(l1);
  for (let lu = 0x0; lu < l1; lu++) l9[lu] = 0.5 - 0.5 * Math.cos(0x2 * Math.PI * lu / l1);
  let lP = jr[0x0],
    lw = l0 > 0x1 ? jr[0x1] : null,
    lj = l2,
    ll = 0x0,
    lD = Math.ceil(l6 / l2) + 0x1,
    lO = jQ.slice || 0x190,
    lf = (lv, lc, lZ) => {
      let la = 0x0,
        lY = 0x0,
        ln = 0x0;
      for (let lp = 0x0; lp < lj; lp += lZ) {
        let lK = lv + lp,
          lU = lc + lp,
          lL = lK < jH && lK >= 0x0 ? lw ? lP[lK] + lw[lK] : lP[lK] : 0x0,
          lo = lU < jH && lU >= 0x0 ? lw ? lP[lU] + lw[lU] : lP[lU] : 0x0;
        la += lL * lo, lY += lL * lL, ln += lo * lo;
      }
      return la / Math.sqrt(lY * ln + 1e-9);
    };
  for (let lv = 0x0; lv < lD; lv++) {
    let lc = Math.round(lv * l3 + l5),
      lZ = lc;
    if (lv > 0x0) {
      let lY = ll + l2,
        ln = 0x0,
        lp = -0x2;
      for (let lU = -l4; lU <= l4; lU += 0x8) {
        let lL = lf(lc + lU, lY, 0x8);
        lL > lp && (lp = lL, ln = lU);
      }
      let lK = ln;
      for (let lo = lK - 0x7; lo <= lK + 0x7; lo++) {
        if (lo < -l4 || lo > l4) continue;
        let lA = lf(lc + lo, lY, 0x2);
        lA > lp && (lp = lA, ln = lo);
      }
      lZ = lc + ln;
    }
    lZ = Math.max(0x0, Math.min(jH - 0x1, lZ));
    let la = lv * l2;
    for (let lX = 0x0; lX < l0; lX++) {
      let lJ = jr[lX],
        lT = l8[lX],
        lW = Math.min(l1, jH - lZ, lT.length - la);
      for (let lm = 0x0; lm < lW; lm++) lT[la + lm] += lJ[lZ + lm] * l9[lm];
    }
    ll = lZ, jQ.onProgress && lv % 0xc8 === 0x0 && jQ.onProgress(lv / lD), lv % lO === lO - 0x1 && (await new Promise(lx => setTimeout(lx, 0x0)));
  }
  return l8.map(lx => lx.subarray(0x0, l6));
}
v(P8, 'timeStretch');
var P9 = ['DELTARUNE', 'BARS', 'CIRCLE', 'DIAMOND', 'ARROWS'],
  PP = ['DELTARUNE', 'PARTY', 'SOUL', 'MONO'],
  Pw = {
    'DELTARUNE': {
      'O': "#01ea9e",
      'E': "#17eeff",
      'S': "#ffff00"
    },
    'PARTY': {
      'O': "#00ffff",
      'E': "#ff00ff",
      'S': "#ffff00"
    },
    'MONO': {
      'O': "#ffffff",
      'E': "#a0a0a0",
      'S': "#ffff00"
    }
  },
  Pj = ["#ff0000", "#fca600", "#ffff00", "#00c000", "#42fcff", "#3c6cff", "#d535d9"],
  Pl = {
    'white': "#ffffff",
    'gray': "#808080",
    'dk': "#404040",
    'faint': "#303030",
    'yellow': "#ffff00",
    'orange': "#ffa040",
    'maroon': "#800000",
    'purple': "#332033",
    'red': "#ff4040",
    'cyan': "#00ffff",
    'green': "#7ad17a",
    'gold': "#e0c060",
    'light': "#c0c0c0"
  };
function PD(jr, jg, jz, jQ, jH = Pl.white, l0 = 'fnt_main', l1 = 'left') {
  jr.draw_set_font(l0), jr.draw_set_halign(l1), jr.draw_text(Math.round(jg), Math.round(jz), jQ, jH), jr.draw_set_halign('left');
}
v(PD, 'txt');
var PM = new Map();
function PO(jr, jg, jz, jQ = 'fnt_main') {
  jg = String(jg);
  let jH = jQ + '|' + jz + '|' + jg,
    l0 = PM.get(jH);
  if (l0 !== void 0x0) return l0;
  if (jr.string_width(jg, jQ) <= jz) l0 = jg;else {
    let l1 = 0x0,
      l2 = jg.length;
    for (; l1 < l2;) {
      let l3 = l1 + l2 + 0x1 >> 0x1;
      jr.string_width(jg.slice(0x0, l3) + "...", jQ) <= jz ? l1 = l3 : l2 = l3 - 0x1;
    }
    l0 = jg.slice(0x0, l1) + "...";
  }
  return PM.size > 0xbb8 && PM.clear(), PM.set(jH, l0), l0;
}
v(PO, 'fit');
function Pf(jr, jg, jz, jQ, jH, l0 = 0x0, l1 = 0x1) {
  let l2 = jr.ctx;
  l2.globalAlpha = l1, l2.fillStyle = "#000000", l2.fillRect(jg + 0x6, jz + 0x6, jQ - jg - 0xc, jH - jz - 0xc), l2.globalAlpha = 0x1;
  let l3 = Math.max(0x0, jQ - jg - 0x3f),
    l4 = Math.max(0x0, jH - jz - 0x3f),
    l5 = "#ffffff";
  l3 > 0x0 && (jr.draw_sprite_ext('spr_textbox_top', 0x0, jg + 0x20, jz, l3, 0x2, 0x0, l5, 0x1), jr.draw_sprite_ext('spr_textbox_top', 0x0, jg + 0x20, jH + 0x1, l3, -0x2, 0x0, l5, 0x1)), l4 > 0x0 && (jr.draw_sprite_ext('spr_textbox_left', 0x0, jQ + 0x1, jz + 0x20, -0x2, l4, 0x0, l5, 0x1), jr.draw_sprite_ext('spr_textbox_left', 0x0, jg, jz + 0x20, 0x2, l4, 0x0, l5, 0x1));
  let l6 = Math.floor(l0 / 0x64) % 0x8;
  jr.draw_sprite_ext('spr_textbox_topleft', l6, jg, jz, 0x2, 0x2, 0x0, l5, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l6, jQ + 0x1, jz, -0x2, 0x2, 0x0, l5, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l6, jg, jH + 0x1, 0x2, -0x2, 0x0, l5, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l6, jQ + 0x1, jH + 0x1, -0x2, -0x2, 0x0, l5, 0x1);
}
v(Pf, 'darkbox');
function PR(jr, jg, jz, jQ, jH, l0 = Pl.dk, l1 = "#000000", l2 = 0x1) {
  jg = Math.round(jg), jz = Math.round(jz), jQ = Math.round(jQ), jH = Math.round(jH), l1 && (jr.globalAlpha = l2, jr.fillStyle = l1, jr.fillRect(jg, jz, jQ, jH), jr.globalAlpha = 0x1), l0 && (jr.fillStyle = l0, jr.fillRect(jg, jz, jQ, 0x1), jr.fillRect(jg, jz + jH - 0x1, jQ, 0x1), jr.fillRect(jg, jz, 0x1, jH), jr.fillRect(jg + jQ - 0x1, jz, 0x1, jH));
}
v(PR, 'plainBox');
function Pu(jr, jg, jz) {
  jr.draw_sprite_ext('spr_heart', 0x0, Math.round(jg), Math.round(jz), 0x1, 0x1, 0x0, "#ffffff", 0x1);
}
v(Pu, 'soul');
function Pv(jr, jg, jz, jQ, jH, l0, l1, l2 = Pl.maroon) {
  jg = Math.round(jg), jz = Math.round(jz), jr.fillStyle = l2, jr.fillRect(jg, jz, jQ, jH);
  let l3 = Math.round(jQ * Math.max(0x0, Math.min(0x1, l0)));
  l3 > 0x0 && (jr.fillStyle = l1, jr.fillRect(jg, jz, l3, jH));
}
v(Pv, 'hudBar');
function Pc(jr, jg) {
  return jg % 0x2 === 0x1 && jr === (jg - 0x1) / 0x2 ? 'S' : Math.min(jr, jg - 0x1 - jr) % 0x2 === 0x0 ? 'O' : 'E';
}
v(Pc, 'laneType');
function PZ(jr, jg) {
  let jz = parseInt(jr.slice(0x1), 0x10),
    jQ = jz >> 0x10,
    jH = jz >> 0x8 & 0xff,
    l0 = jz & 0xff,
    l1 = l2 => Math.round(jg >= 0x0 ? l2 + (0xff - l2) * jg : l2 * (0x1 + jg));
  return '#' + [l1(jQ), l1(jH), l1(l0)].map(l2 => l2.toString(0x10).padStart(0x2, '0')).join('');
}
v(PZ, 'shade');
var Pe = v((jr, jg) => {
  let jz = parseInt(jr.slice(0x1), 0x10);
  return "rgba(" + (jz >> 0x10) + ',' + (jz >> 0x8 & 0xff) + ',' + (jz & 0xff) + ',' + jg + ')';
}, 'rgba');
function Pa(jr, jg = 'DELTARUNE') {
  let jz = [];
  for (let jQ = 0x0; jQ < jr; jQ++) {
    let jH;
    jg === 'SOUL' ? jH = Pj[(jr <= 0x7 ? Math.round(jQ * 0x6 / Math.max(0x1, jr - 0x1)) : jQ) % Pj.length] : jH = (Pw[jg] || Pw.DELTARUNE)[Pc(jQ, jr)], jz.push({
      'base': jH,
      'light': PZ(jH, 0.5),
      'dark': PZ(jH, -0.5),
      'deep': PZ(jH, -0.8),
      'type': Pc(jQ, jr)
    });
  }
  return jz;
}
v(Pa, 'laneColors');
function PY(jr, jg = {}, jz = 0x1) {
  let jQ = jr,
    jH = Math.round(Math.min(0x38, Math.max(0x1a, 0x17c / jQ))),
    l0 = jg.colW > 0x0 ? Math.max(0x14, Math.min(0x50, jg.colW)) : jH,
    l1 = Math.min(0x26c, l0 * jQ),
    l2 = l1 / jQ,
    l3 = Math.round(0x140 - l1 / 0x2),
    l4 = jg.scrollDir === 'UP',
    l5 = Math.max(0x14, Math.min(0xf0, jg.hitPos ?? 0x46)),
    l6 = l4 ? l5 : 0x1e0 - l5,
    l8 = l4 ? 0x1e0 : 0x0,
    l9 = jg.speedMode === 'MS' ? Math.max(0x96, Math.min(0x1770, jg.scrollMs || 0x384)) : 0x2cdd / Math.max(0x1, Math.min(0x28, jg.speed || 0x16)),
    lP = l9 * jz,
    lw = Math.abs(l6 - l8),
    lj = {
      'keys': jQ,
      'colW': l2,
      'x0': l3,
      'x1': l3 + l1,
      'width': l1,
      'cx': 0x140,
      'up': l4,
      'dir': l4 ? 0x1 : -0x1,
      'hitY': l6,
      'far': l8,
      'top': 0x0,
      'bottom': 0x1e0,
      'span': lw,
      'visMs': lP,
      'visReal': l9,
      'pxPerMs': lw / lP,
      'noteSize': Math.max(0.4, Math.min(0x2, jg.noteSize || 0x1)),
      'laneX': new Float32Array(jQ),
      'judgeY': l4 ? l6 + (jg.judgePos ?? 0x78) : l6 - (jg.judgePos ?? 0x78),
      'sudden': Math.max(0x0, Math.min(0.9, (jg.sudden || 0x0) / 0x64)),
      'hidden': Math.max(0x0, Math.min(0.9, (jg.hidden || 0x0) / 0x64))
    };
  for (let ll = 0x0; ll < jQ; ll++) lj.laneX[ll] = l3 + l2 * (ll + 0.5);
  return lj;
}
v(PY, 'computeLayout');
function Pn(jr, jg, jz, jQ, jH, l0 = 0x0) {
  if (l0 <= 0x0 || !jr.arcTo) {
    jr.beginPath(), jr.moveTo(jg, jz - jH / 0x2), jr.lineTo(jg + jQ / 0x2, jz), jr.lineTo(jg, jz + jH / 0x2), jr.lineTo(jg - jQ / 0x2, jz), jr.closePath();
    return;
  }
  let l1 = jg,
    l2 = jz - jH / 0x2,
    l3 = jg + jQ / 0x2,
    l4 = jz,
    l5 = jg,
    l6 = jz + jH / 0x2,
    l8 = jg - jQ / 0x2,
    l9 = jz;
  jr.beginPath(), jr.moveTo((l8 + l1) / 0x2, (l9 + l2) / 0x2), jr.arcTo(l1, l2, l3, l4, l0), jr.arcTo(l3, l4, l5, l6, l0), jr.arcTo(l5, l6, l8, l9, l0), jr.arcTo(l8, l9, l1, l2, l0), jr.closePath();
}
v(Pn, 'diamond');
var Pp = [[0x0, 0x1], [0x1, 0.02], [0.42, 0.02], [0.42, -0x1], [-0.42, -0x1], [-0.42, 0.02], [-0x1, 0.02]];
function PK(jr, jg, jz, jQ, jH) {
  let l0 = Math.cos(jH),
    l1 = Math.sin(jH),
    l2 = jQ / 0x2;
  jr.beginPath();
  for (let l3 = 0x0; l3 < Pp.length; l3++) {
    let l4 = Pp[l3][0x0] * l2,
      l5 = Pp[l3][0x1] * l2,
      l6 = jg + l4 * l0 - l5 * l1,
      l8 = jz + l4 * l1 + l5 * l0;
    l3 ? jr.lineTo(l6, l8) : jr.moveTo(l6, l8);
  }
  jr.closePath();
}
v(PK, 'arrow');
var PU = [Math.PI / 0x2, 0x0, Math.PI, -Math.PI / 0x2],
  PL = v((jr, jg) => PU[jg === 0x4 ? jr : jr % 0x4], 'arrowRot');
function Po(jr, jg, jz, jQ, jH, l0) {
  if (l0 = Math.max(0x0, Math.min(l0, jQ / 0x2, jH / 0x2)), jr.beginPath(), l0 <= 0x0 || !jr.arcTo) {
    jr.rect(jg, jz, jQ, jH);
    return;
  }
  jr.moveTo(jg + l0, jz), jr.arcTo(jg + jQ, jz, jg + jQ, jz + jH, l0), jr.arcTo(jg + jQ, jz + jH, jg, jz + jH, l0), jr.arcTo(jg, jz + jH, jg, jz, l0), jr.arcTo(jg, jz, jg + jQ, jz, l0), jr.closePath();
}
v(Po, 'roundBar');
var PA = v(jr => {
  let jg = 0x1 - Math.max(0x0, Math.min(0x1, jr));
  return 0x1 - jg * jg * jg;
}, 'easeOut3');
function PX(jr, jg) {
  let jz = jg.colW,
    jQ = jg.noteSize,
    jH = Math.max(0x6, jz - 0x2);
  switch (jr) {
    case 'CIRCLE':
      {
        let l0 = Math.min(jH, Math.min(jz - 0x4, 0x22) * jQ);
        return [l0, l0];
      }
    case 'DIAMOND':
      {
        let l1 = Math.min(jH, Math.min(jz - 0x4, 0x2c) * jQ);
        return [l1, l1 * 0.62];
      }
    case 'ARROWS':
      {
        let l2 = Math.min(jH, Math.min(jz - 0x4, 0x26) * jQ);
        return [l2, l2];
      }
    case 'DELTARUNE':
      return [Math.min(jz - 0x4, 0x22) * jQ, 0xa * jQ];
    default:
      return [jz - 0x4, Math.max(0x6, 0xc * jQ)];
  }
}
v(PX, 'noteBox');
var PJ = {
    'base': "#6a6a6a",
    'light': "#9a9a9a",
    'dark': "#383838",
    'deep': "#202020"
  },
  Pt = {
    'base': "#606060",
    'light': "#909090",
    'dark': "#303030",
    'deep': "#202020"
  },
  PT = "rgba(0,0,0,0.6)";
function PW(jr, jg, jz, jQ) {
  if (!jr.createLinearGradient) return jg.base;
  let jH = jr.createLinearGradient(0x0, jz - jQ / 0x2, 0x0, jz + jQ / 0x2);
  return jH.addColorStop(0x0, jg.light), jH.addColorStop(0.45, jg.base), jH.addColorStop(0x1, PZ(jg.base, -0.28)), jH;
}
v(PW, 'bodyFill');
function Pm(jr, jg, jz, jQ, jH, l0, l1, l2, l3 = 0x0) {
  jg === 'CIRCLE' ? (jr.beginPath(), jr.arc(jz, jQ, Math.max(0.5, jH / 0x2 - l3), 0x0, Math.PI * 0x2)) : jg === 'DIAMOND' ? Pn(jr, jz, jQ, Math.max(0x1, jH - l3 * 0x2), Math.max(0x1, l0 - l3 * 0x2 * (l0 / jH)), Math.max(0.5, l0 * 0.14)) : PK(jr, jz, jQ, Math.max(0x1, jH - l3 * 0x2), PL(l1, l2));
}
v(Pm, 'headPath');
function Px(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4) {
  let l5 = l4 ? jg === 'BARS' ? Pt : PJ : l1;
  if (jg === 'BARS') {
    let l6 = Math.round(jz - jH / 0x2),
      l8 = Math.round(jQ - l0 / 0x2),
      l9 = Math.round(jH),
      lP = Math.round(l0);
    jr.fillStyle = "#000000", jr.fillRect(l6 - 0x1, l8 - 0x1, l9 + 0x2, lP + 0x2), jr.fillStyle = l5.base, jr.fillRect(l6, l8, l9, lP), jr.fillStyle = l5.light, jr.fillRect(l6, l8, l9, 0x2), jr.fillStyle = l5.dark, jr.fillRect(l6, l8 + lP - 0x2, l9, 0x2);
    return;
  }
  jr.lineJoin = 'round', jr.lineCap = 'round', Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0x0), jr.lineWidth = 2.5, jr.strokeStyle = PT, jr.stroke(), Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25), jr.fillStyle = PW(jr, l5, jQ, l0), jr.fill(), jr.lineWidth = 1.5, jr.strokeStyle = l4 ? "#a0a0a0" : "#ffffff", jr.stroke(), jg === 'CIRCLE' && jH >= 0x10 && (jr.beginPath(), jr.arc(jz, jQ, jH * 0.26, 0x0, Math.PI * 0x2), jr.lineWidth = 0x1, jr.strokeStyle = "rgba(255,255,255,0.32)", jr.stroke());
}
v(Px, 'paintNote');
function PI(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4, l5) {
  let l6 = l4 ? "#707070" : l1.light;
  if (jg === 'BARS') {
    jr.fillStyle = l6, jr.fillRect(Math.round(jz - jH * 0.42), Math.round(jQ - l0 * 0.25), Math.round(jH * 0.84), Math.max(0x3, Math.round(l0 * 0.5)));
    return;
  }
  let l8 = Math.max(0x2, l5 / 0x2 + 1.5);
  jr.beginPath(), jr.arc(jz, jQ, l8, 0x0, Math.PI * 0x2), jr.fillStyle = l4 ? "#505050" : l1.base, jr.fill(), jr.lineWidth = 1.5, jr.strokeStyle = l6, jr.stroke();
}
v(PI, 'paintTail');
function Pb(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4, l5) {
  if (jg === 'BARS') {
    let l6 = l4 ? "#ffffff" : "#808080",
      l8 = Math.round(jz - l5 / 0x2 + 0x2),
      l9 = Math.round(l5 - 0x4);
    jr.fillStyle = l4 ? l1.dark : "#101010", jr.fillRect(l8, jQ + 0x4, l9, 0x1c), jr.fillStyle = l6, jr.fillRect(l8, jQ + 0x4, l9, 0x1), jr.fillRect(l8, jQ + 0x1f, l9, 0x1), jr.fillRect(l8, jQ + 0x4, 0x1, 0x1c), jr.fillRect(l8 + l9 - 0x1, jQ + 0x4, 0x1, 0x1c), l4 && (jr.fillStyle = l1.base, jr.fillRect(l8 + 0x3, jQ + 0x7, l9 - 0x6, 0x3));
    return;
  }
  if (jr.lineJoin = 'round', l4) {
    if (Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25), jr.createLinearGradient) {
      let lP = jr.createLinearGradient(0x0, jQ - l0 / 0x2, 0x0, jQ + l0 / 0x2);
      lP.addColorStop(0x0, l1.base), lP.addColorStop(0x1, l1.dark), jr.fillStyle = lP;
    } else jr.fillStyle = l1.dark;
    jr.globalAlpha = 0.85, jr.fill(), jr.globalAlpha = 0x1, jr.lineWidth = 0x2, jr.strokeStyle = "#ffffff", jr.stroke();
  } else Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0x0), jr.lineWidth = 2.5, jr.strokeStyle = PT, jr.stroke(), Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 1.25), jr.fillStyle = "rgba(255,255,255,0.05)", jr.fill(), jr.lineWidth = 1.5, jr.strokeStyle = "#8a8a8a", jr.stroke(), jH >= 0xe && (Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0x4), jr.lineWidth = 0x1, jr.strokeStyle = PZ(l1.base, -0.35), jr.stroke());
}
v(Pb, 'paintReceptor');
function PE(jr, jg, jz, jQ, jH, l0, l1, l2, l3, l4) {
  if (jg === 'BARS') {
    jr.lineWidth = 0x2, jr.strokeStyle = l1.light, jr.strokeRect(Math.round(jz - l4 / 0x2 + 0x3) + 0.5, Math.round(jQ - l0 / 0x2) + 0.5, Math.round(l4 - 0x6) - 0x1, Math.round(l0) - 0x1);
    return;
  }
  jr.lineJoin = 'round', Pm(jr, jg, jz, jQ, jH, l0, l2, l3, 0x1), jr.fillStyle = Pe(l1.light, 0.18), jr.fill(), jr.lineWidth = 0x2, jr.strokeStyle = l1.light, jr.stroke();
}
v(PE, 'paintBurst');
var PN = 0x2,
  PG = new Map(),
  Py = 0x4b0,
  Pq = v(jr => Math.max(0x1, Math.min(0x4, Math.round((jr > 0x0 && jr < 0x64 ? jr : PN) * 0x4) / 0x4)), 'quantScale');
function PS(jr) {
  try {
    if (jr && jr.getTransform) {
      let jg = jr.getTransform(),
        jz = Math.max(Math.hypot(jg.a, jg.b), Math.hypot(jg.c, jg.d));
      if (jz > 0x0 && jz < 0x64) return jz;
    }
  } catch {}
  return PN;
}
v(PS, 'deviceScale');
var PF = class lI {
  constructor(jr, jg, jz, jQ, jH = '', l0 = false) {
    this.doc = jr, this.w = jg, this.h = jz, this.paint = jQ, this.key = jH, this.crisp = l0, this.q = 0x0, this.cv = null;
  }
  ["canvasAt"](jr) {
    let jg = this.crisp ? PN : Pq(jr);
    if (jg === this.q) return this.cv;
    this.q = jg;
    let jz = this.key ? this.key + '@' + jg : '',
      jQ = jz ? PG.get(jz) : void 0x0;
    if (jQ === void 0x0) {
      jQ = null;
      try {
        let jH = this.doc,
          l0 = jH && jH.createElement ? jH.createElement('canvas') : null;
        if (l0 && l0.getContext) {
          l0.width = Math.max(0x1, Math.ceil(this.w * jg)), l0.height = Math.max(0x1, Math.ceil(this.h * jg));
          let l1 = l0.getContext('2d');
          l1 && (l1.scale(jg, jg), this.paint(l1, this.w / 0x2, this.h / 0x2), jQ = l0);
        }
      } catch {
        jQ = null;
      }
      if (jz) {
        for (PG.set(jz, jQ); PG.size > Py;) PG.delete(PG.keys().next().value);
      }
    }
    return this.cv = jQ, jQ;
  }
  ["draw"](jr, jg, jz, jQ = 0x1, jH = 0x1, l0 = PN) {
    let l1 = this.canvasAt(l0),
      l2 = this.w * jQ,
      l3 = this.h * jH,
      l4 = jg - l2 / 0x2,
      l5 = jz - l3 / 0x2;
    if (l1) {
      let l6 = jQ !== 0x1 || jH !== 0x1 || Math.abs(this.q - l0) > 0.01;
      !this.crisp && !l6 && (l4 = Math.round(l4 * l0) / l0, l5 = Math.round(l5 * l0) / l0), l6 && !this.crisp ? (jr.imageSmoothingEnabled = true, jr.drawImage(l1, l4, l5, l2, l3), jr.imageSmoothingEnabled = false) : jr.drawImage(l1, l4, l5, l2, l3);
    } else jr.save(), jr.translate(l4, l5), jr.scale(jQ, jH), this.paint(jr, this.w / 0x2, this.h / 0x2), jr.restore();
  }
};
v(PF, 'Sprite');
var Pd = PF,
  PB = new Map();
function Ph(jr) {
  let jg = PB.get(jr);
  return jg === void 0x0 && (PB.size > 0x1770 && PB.clear(), jg = String(jr), PB.set(jr, jg)), jg;
}
v(Ph, 'numText');
var Pk = -0x1,
  PV = '';
function PC(jr) {
  return jr !== Pk && (Pk = jr, PV = String(jr).padStart(0x7, '0')), PV;
}
v(PC, 'pad7');
var Pr = new Map();
function Pg(jr) {
  let jg = Math.round(jr * 0x2710),
    jz = Pr.get(jg);
  return jz || (jz = (jg / 0x64).toFixed(0x2) + '%', Pr.size > 0xfa0 && Pr.clear(), Pr.set(jg, jz)), jz;
}
v(Pg, 'pct');
var Pz = [],
  PQ = v(jr => Pz[jr] || (Pz[jr] = String(jr).padStart(0x3, '\x20') + "/ 100"), 'hpText'),
  PH = new Float32Array(0x4);
function w0(jr) {
  let jg = 0x0,
    jz = 0x1,
    jQ = 0x1,
    jH = 0x1;
  if (jr < 0x104) {
    let l0 = jr / 0x104;
    jg = -0x40 * l0 * (0x1 - l0);
  } else {
    if (jr < 0x17c) {
      let l1 = (jr - 0x104) / 0x78;
      jg = -0x10 * l1 * (0x1 - l1);
    }
  }
  if (jr > 0x230) {
    let l2 = Math.min(0x1, (jr - 0x230) / 0xb4);
    jQ = 0x1 + 1.6 * l2, jz = 0x1 - 0.55 * l2, jH = 0x1 - l2;
  }
  return PH[0x0] = jg, PH[0x1] = jz, PH[0x2] = jQ, PH[0x3] = jH, PH;
}
v(w0, 'dmgMotion');
var w1 = ['', "300", "200", "100", '50', ''];
function w2(jr, jg, jz, jQ, jH = 0x1, l0 = 0x1, l1 = 0x1) {
  if (jg === 0x0 || jg === 0x5) {
    jr.draw_sprite_ext('spr_battlemsg', jg === 0x0 ? 0x2 : 0x0, Math.round(jz + 0x25 * jH), Math.round(jQ - 0x14 * l0), jH, l0, 0x0, jg === 0x0 ? "#ffff00" : "#c0c0c0", l1);
    return;
  }
  let l2 = w1[jg],
    l3 = jr.alpha;
  jr.draw_set_alpha(l1), jr.draw_set_font('fnt_dmg'), jr.draw_set_halign('center'), jr.draw_set_color(o[jg]), jr.draw_text_transformed(Math.round(jz), Math.round(jQ - 0x1c * l0), l2, jH, l0, 0x0), jr.draw_set_halign('left'), jr.draw_set_alpha(l3);
}
v(w2, 'drawJudgeWord');
var w3 = class lb {
  constructor(jr = globalThis.document) {
    this.doc = jr, this.key = '', this.beatBuf = new Float64Array(0x100), this.heN = 0x30, this.heErr = new Float32Array(0x30), this.heAt = new Float64Array(0x30), this.heJ = new Uint8Array(0x30), this.heW = 0x0, this.heMean = 0x0, this.laneUpAt = null, this.jAt = -0x3b9aca00, this.jSeen = -0x3b9aca00, this.jj = -0x1;
  }
  ["warm"](jr, jg, jz = 0x1) {
    this.buildSprites(jr, jg, PY(jr, jg, jz));
  }
  ["setup"](jr, jg, jz, jQ = {}) {
    let jH = jr.keys,
      l0 = PY(jH, jz, jr.rate);
    this.play = jr, this.view = jg, this.cfg = jz, this.L = l0, this.buildSprites(jH, jz, l0), this.gradL = null, this.laneUpAt = new Float64Array(jH).fill(-0x3b9aca00), this.prevDown = new Uint8Array(jH), this.pressK = new Float32Array(jH), this.lastTr = -0x1, this.heW = 0x0, this.heMean = 0x0, this.heAt.fill(-0x3b9aca00), this.jAt = -0x3b9aca00, this.jSeen = -0x3b9aca00, this.jj = -0x1;
  }
  ["buildSprites"](jr, jg, jz) {
    let jQ = P9.includes(jg.skin) ? jg.skin : 'DELTARUNE',
      jH = PP.includes(jg.scheme) ? jg.scheme : 'DELTARUNE';
    this.skin = jQ, this.scheme = jH, this.cols = Pa(jr, jH);
    let l0 = [jr, jQ, jH, jz.colW, jz.noteSize].join('|');
    if (l0 !== this.key) {
      this.key = l0;
      let [l1, l2] = PX(jQ, jz);
      this.nw = l1, this.nh = l2;
      let l3 = this.doc;
      if (this.notes = [], this.deadNotes = [], this.tails = [], this.deadTails = [], this.rec = [], this.recLit = [], this.burst = [], this.bodyW = jQ === 'DELTARUNE' ? 0x8 : jQ === 'BARS' ? Math.round(jz.colW - 0xa) : Math.max(0x4, Math.round(jQ === 'CIRCLE' ? l1 * 0.56 : jQ === 'DIAMOND' ? l1 * 0.42 : l1 * 0.46)), jQ !== 'DELTARUNE') {
        let l4 = jQ === 'BARS',
          l5 = this.bodyW;
        for (let l6 = 0x0; l6 < jr; l6++) {
          let l8 = this.cols[l6],
            l9 = [jQ, l6 % 0x4, jr === 0x4 ? 0x4 : 0x0, l8.base, l1.toFixed(0x2), l2.toFixed(0x2), jz.colW.toFixed(0x2)].join('|');
          this.notes.push(new Pd(l3, l1 + 0x4, l2 + 0x4, (lD, lO, lf) => Px(lD, jQ, lO, lf, l1, l2, l8, l6, jr, false), l9 + "|note", l4)), this.deadNotes.push(new Pd(l3, l1 + 0x4, l2 + 0x4, (lD, lO, lf) => Px(lD, jQ, lO, lf, l1, l2, l8, l6, jr, true), l9 + "|dead", l4)), this.tails.push(new Pd(l3, l1 + 0x4, l2 + 0x4, (lD, lO, lf) => PI(lD, jQ, lO, lf, l1, l2, l8, l6, jr, false, l5), l9 + "|tail", l4)), this.deadTails.push(new Pd(l3, l1 + 0x4, l2 + 0x4, (lD, lO, lf) => PI(lD, jQ, lO, lf, l1, l2, l8, l6, jr, true, l5), l9 + "|deadtail", l4));
          let lP = jQ === 'BARS' ? jz.colW : l1,
            lw = jQ === 'BARS' ? 0x28 : l2,
            lj = jQ === 'BARS' ? -0x14 : 0x0;
          this.rec.push(new Pd(l3, lP + 0x4, lw + 0x4, (lD, lO, lf) => Pb(lD, jQ, lO, lf + lj, l1, l2, l8, l6, jr, false, jz.colW), l9 + "|rec", l4)), this.recLit.push(new Pd(l3, lP + 0x4, lw + 0x4, (lD, lO, lf) => Pb(lD, jQ, lO, lf + lj, l1, l2, l8, l6, jr, true, jz.colW), l9 + "|reclit", l4));
          let ll = jQ === 'BARS' ? Math.max(0xe, l2 + 0x6) : l2;
          this.burst.push(new Pd(l3, lP + 0x6, ll + 0x6, (lD, lO, lf) => PE(lD, jQ, lO, lf, l1, ll, l8, l6, jr, jz.colW), l9 + "|burst", l4));
        }
        for (let lD of [this.notes, this.deadNotes, this.tails, this.deadTails, this.rec, this.recLit, this.burst]) for (let lO of lD) lO.canvasAt(PN);
      }
    }
  }
  ["grads"](jr) {
    let jg = this.L;
    if (this.gradL === jg && this.gradCtx === jr) return;
    this.gradL = jg, this.gradCtx = jr;
    let jz = jg.hitY,
      jQ = jg.hitY + jg.dir * 0x78;
    this.laneLight = this.cols.map(jH => {
      let l0 = jr.createLinearGradient(0x0, jz, 0x0, jQ);
      return l0.addColorStop(0x0, Pe(jH.base, 0.32)), l0.addColorStop(0x1, Pe(jH.base, 0x0)), l0;
    });
  }
  ["yOf"](jr, jg) {
    let jz = this.L;
    return jz.hitY + jz.dir * (jr - jg) * jz.pxPerMs;
  }
  ["draw"](jr, jg, jz) {
    let jQ = jr.ctx,
      jH = this.L,
      l0 = this.play,
      l1 = this.view,
      l2 = l0.keys,
      l3 = this.skin,
      l4 = this.cfg,
      l5 = l3 === 'DELTARUNE';
    this.grads(jQ);
    let l6 = l1.scroll.pos(jg),
      l8 = jH.x0,
      l9 = jH.width;
    jQ.globalAlpha = l4.stageAlpha ?? 0.86, jQ.fillStyle = "#000000", jQ.fillRect(l8, 0x0, l9, 0x1e0), jQ.globalAlpha = 0x1, jQ.fillStyle = l5 ? "#202020" : "#1c1c1c";
    for (let lu = 0x1; lu < l2; lu++) jQ.fillRect(Math.round(l8 + jH.colW * lu), 0x0, 0x1, 0x1e0);
    if (l4.barlines !== false) {
      let lv = jH.span / jH.pxPerMs,
        lc = P4(l0.chart, jg - 0x190, jg + lv * 0x4 + 0x190, this.beatBuf);
      for (let lZ = 0x0; lZ < lc; lZ++) {
        let la = this.beatBuf[lZ] < 0x0,
          lY = la ? -this.beatBuf[lZ] : this.beatBuf[lZ],
          ln = Math.round(this.yOf(l1.scroll.posAt(lY), l6));
        (jH.up ? ln < jH.hitY || ln > 0x1e0 : ln > jH.hitY || ln < 0x0) || (jQ.fillStyle = la ? "#404040" : "#1c1c1c", jQ.fillRect(l8, ln, l9, 0x1));
      }
    }
    jz.flash > 0x0 && !l4.lowSpec && (jQ.globalAlpha = 0.16 * jz.flash, jQ.fillStyle = "#ff0000", jQ.fillRect(l8, 0x0, l9, 0x1e0), jQ.globalAlpha = 0x1);
    let lP = jz.tReal,
      lw = this.lastTr < 0x0 ? 0x10 : Math.max(0x0, Math.min(0x64, lP - this.lastTr));
    this.lastTr = lP;
    let lj = 0x1 - Math.exp(-lw / 0x16),
      ll = 0x1 - Math.exp(-lw / 0x37);
    for (let lp = 0x0; lp < l2; lp++) {
      let lK = l0.down[lp] ? 0x1 : 0x0,
        lU = this.pressK[lp];
      this.pressK[lp] = lU + (lK - lU) * (lK > lU ? lj : ll), this.pressK[lp] < 0.002 && (this.pressK[lp] = 0x0);
    }
    let lD = l5 || l3 === 'BARS',
      lO = lD ? PN : PS(jQ);
    this.dev = lO;
    for (let lL = 0x0; lL < l2; lL++) {
      let lo = l0.down[lL];
      this.prevDown[lL] && !lo && (this.laneUpAt[lL] = lP), this.prevDown[lL] = lo;
      let lA;
      if (lD) lA = lo ? 0x1 : Math.max(0x0, 0x1 - (lP - this.laneUpAt[lL]) / 0x78);else {
        let lJ = lo ? 0x0 : Math.min(0x1, (lP - this.laneUpAt[lL]) / 0xaa);
        lA = lo ? Math.max(0.35, this.pressK[lL]) : (0x1 - lJ) * (0x1 - lJ);
      }
      if (lA <= 0x0) continue;
      jQ.globalAlpha = lA, jQ.fillStyle = this.laneLight[lL];
      let lX = Math.round(l8 + jH.colW * lL);
      jH.up ? jQ.fillRect(lX, jH.hitY, Math.round(jH.colW), 0x78) : jQ.fillRect(lX, jH.hitY - 0x78, Math.round(jH.colW), 0x78);
    }
    if (jQ.globalAlpha = 0x1, l5) for (let lT = 0x0; lT < l2; lT++) {
      let lW = jH.laneX[lT],
        lm = jH.colW / 0x28;
      jr.draw_sprite_ext('spr_rhythmgame_button', Pc(lT, l2) === 'O' ? 0x0 : 0x1, lW, jH.hitY, lm, 0x1, 0x0, "#ffffff", 0x1), l0.down[lT] && jr.draw_sprite_ext('spr_rhythmgame_button', 0x3, lW, jH.hitY, lm, 0x1, 0x0, "#ffffff", 0.85);
    } else {
      if (jQ.fillStyle = "#ffffff", jQ.fillRect(l8, jH.hitY - 0x1, l9, 0x1), l3 === 'BARS') {
        for (let lx = 0x0; lx < l2; lx++) (l0.down[lx] ? this.recLit[lx] : this.rec[lx]).draw(jQ, jH.laneX[lx], jH.hitY + (jH.up ? -0x14 : 0x14), 0x1, jH.up ? -0x1 : 0x1, lO);
      } else for (let lE = 0x0; lE < l2; lE++) {
        let lN = this.pressK[lE],
          lG = 0x1 - 0.07 * lN;
        lN < 0.98 && this.rec[lE].draw(jQ, jH.laneX[lE], jH.hitY, lG, lG, lO), lN > 0.02 && (jQ.globalAlpha = lN, this.recLit[lE].draw(jQ, jH.laneX[lE], jH.hitY, lG, lG, lO), jQ.globalAlpha = 0x1);
      }
    }
    jQ.save(), jQ.beginPath(), jQ.rect(l8, 0x0, l9, 0x1e0), jQ.clip(), this.drawNotes(jr, jQ, jg, l6), jQ.restore();
    let lf = Math.min(0.9, jH.sudden + (l0.mi.fadeIn ? 0.45 : 0x0)),
      lR = Math.min(0.9, jH.hidden + (l0.mi.hidden ? 0.45 : 0x0));
    if ((lf > 0x0 || lR > 0x0) && this.drawCover(jQ, lf, lR), l4.hitLight !== false) {
      let ly = !lD;
      ly && (jQ.save(), jQ.beginPath(), jQ.rect(l8, 0x0, l9, 0x1e0), jQ.clip());
      for (let lq = 0x0; lq < l2; lq++) {
        let lS = l0.holding[lq] >= 0x0,
          lF = jg - l0.laneHitAt[lq],
          ld = 0x0,
          lB = 0x1;
        if (lD) {
          if (lS) ld = 0.7, lB = 1.05;else {
            if (lF >= 0x0 && lF < 0xa0 * l0.rate) {
              let lh = 0x1 - lF / (0xa0 * l0.rate);
              ld = lh, lB = 0x1 + 0.35 * (0x1 - lh), l0.laneHitJ[lq] > 0x1 && (ld *= 0.6);
            }
          }
        } else {
          if (lS) {
            let lk = lP % 0x384 / 0x384;
            ld = 0.55 + 0.15 * Math.sin(lk * Math.PI * 0x2), lB = 1.04 + 0.02 * Math.sin(lk * Math.PI * 0x2);
          } else {
            let lV = 0xdc * l0.rate;
            if (lF >= 0x0 && lF < lV) {
              let lC = lF / lV;
              ld = (0x1 - lC) * (0x1 - lC), lB = 0x1 + 0.45 * PA(lC), l0.laneHitJ[lq] > 0x1 && (ld *= 0.6);
            }
          }
        }
        ld <= 0x0 || (l5 ? jr.draw_sprite_ext('spr_whitegradientdown_rhythm', l0.laneHitJ[lq] <= 0x1 ? 0x1 : 0x0, jH.laneX[lq], jH.hitY, ld * jH.colW / 0x28, 0x1, 0x0, "#ffffff", Math.min(0x1, ld)) : (jQ.globalAlpha = Math.min(0x1, ld), this.burst[lq].draw(jQ, jH.laneX[lq], jH.hitY, lB, lB, lO), jQ.globalAlpha = 0x1));
      }
      ly && jQ.restore();
    }
    if (jQ.fillStyle = jz.flash > 0.05 ? "#ff4040" : l5 ? "#17eeff" : "#808080", jQ.fillRect(l8 - 0x1, 0x0, 0x1, 0x1e0), jQ.fillRect(l8 + l9, 0x0, 0x1, 0x1e0), l5 && (jQ.fillRect(l8 - 0x2, 0x0, 0x1, 0x1e0), jQ.fillRect(l8 + l9 + 0x1, 0x0, 0x1, 0x1e0)), jz.hideHud || this.drawJudgement(jr, jg, lP), jz.showSoul !== false && l3 !== 'BARS') {
      let lr = jz.soulX ?? jH.cx,
        lg = jH.up ? jH.hitY - 0x1e : jH.hitY + 0x1e;
      !(jz.soulHurt > 0x0 && Math.floor(jz.soulHurt / 0x3c) % 0x2 === 0x0) && lg > 0x0 && lg < 0x1d6 && jr.draw_sprite_ext(jz.broken ? 'spr_heartbreak' : 'spr_heart', 0x0, Math.round(lr - (jz.broken ? 0xa : 0x8)), lg - 0x8, 0x1, 0x1, 0x0, "#ffffff", 0x1);
    }
  }
  ["drawCover"](jr, jg, jz) {
    let jQ = this.L,
      jH = jQ.x0,
      l0 = jQ.width;
    jr.fillStyle = "#000000";
    let l1 = 0x18;
    if (jg > 0x0) {
      let l2 = jQ.span * jg;
      if (jQ.up) {
        jr.fillRect(jH, 0x1e0 - l2 + l1, l0, Math.max(0x0, l2 - l1));
        for (let l3 = 0x0; l3 < l1; l3 += 0x4) jr.globalAlpha = 0x1 - l3 / l1, jr.fillRect(jH, 0x1e0 - l2 + l1 - l3 - 0x4, l0, 0x4);
      } else {
        jr.fillRect(jH, 0x0, l0, Math.max(0x0, l2 - l1));
        for (let l4 = 0x0; l4 < l1; l4 += 0x4) jr.globalAlpha = 0x1 - l4 / l1, jr.fillRect(jH, l2 - l1 + l4, l0, 0x4);
      }
      jr.globalAlpha = 0x1;
    }
    if (jz > 0x0) {
      let l5 = jQ.span * jz,
        l6 = this.skin === 'BARS' || this.skin === 'DELTARUNE' ? 0x4 : this.nh / 0x2 + 0x3;
      if (jQ.up) {
        let l8 = jQ.hitY + l6;
        jr.fillRect(jH, l8, l0, Math.max(0x0, l5 - l1));
        for (let l9 = 0x0; l9 < l1; l9 += 0x4) jr.globalAlpha = 0x1 - l9 / l1, jr.fillRect(jH, l8 + l5 - l1 + l9, l0, 0x4);
      } else {
        let lP = jQ.hitY - l6;
        jr.fillRect(jH, lP - l5 + l1, l0, Math.max(0x0, l5 - l1));
        for (let lw = 0x0; lw < l1; lw += 0x4) jr.globalAlpha = 0x1 - lw / l1, jr.fillRect(jH, lP - l5 + l1 - lw - 0x4, l0, 0x4);
      }
      jr.globalAlpha = 0x1;
    }
  }
  ["drawNotes"](jr, jg, jz, jQ) {
    let jH = this.L,
      l0 = this.play,
      l1 = this.view,
      l2 = l0.keys,
      l3 = this.skin,
      l4 = l1.head,
      l5 = l1.tail,
      l6 = jQ + jH.span / jH.pxPerMs + 0x3c,
      l8 = l3 === 'DELTARUNE';
    for (let l9 = 0x0; l9 < l2; l9++) {
      let lP = jH.laneX[l9],
        lw = l0.laneNotes[l9],
        lj = this.cols[l9],
        ll = Math.max(0x0, l0.laneNext[l9] - 0x8),
        lD = this.bodyW,
        lO = this.dev || PN;
      for (; ll < lw.length; ll++) {
        let lf = lw[ll];
        if (l4[lf] > l6) break;
        let lR = l0.state[lf],
          lu = l0.end[lf] > 0x0;
        if (lR === 0x2) continue;
        let lv = this.yOf(l4[lf], jQ),
          lc = lR === 0x3;
        if (lu) {
          let lZ = this.yOf(l5[lf], jQ),
            la = lR === 0x1,
            lY = lR === 0x4;
          if (la && (lv = jH.hitY), jH.up ? lZ < -0x14 : lZ > 0x1f4) continue;
          let ln = Math.min(lv, lZ),
            lp = Math.max(lv, lZ),
            lK = lc || lY;
          if (lp - ln > 0x0) {
            if (l8) jg.fillStyle = la ? "#ffa040" : lK ? "#808080" : lj.base, jg.globalAlpha = lK ? 0.5 : 0x1, jg.fillRect(Math.round(lP - 0x4), ln, 0x8, lp - ln);else {
              if (l3 === 'BARS') {
                let lU = Math.round(lP - lD / 0x2);
                jg.fillStyle = lK ? "#303030" : la ? lj.base : lj.dark, jg.fillRect(lU, ln, lD, lp - ln), jg.fillStyle = lK ? "#606060" : la ? "#ffffff" : lj.base, jg.fillRect(lU, ln, 0x2, lp - ln), jg.fillRect(lU + lD - 0x2, ln, 0x2, lp - ln);
              } else {
                let lL = Math.max(-0x28, ln),
                  lo = Math.min(0x208, lp);
                if (lo > lL) {
                  let lA = lP - lD / 0x2;
                  Po(jg, lA, lL, lD, lo - lL, lD / 0x2), jg.fillStyle = lK ? "#2e2e2e" : la ? lj.dark : lj.deep, jg.globalAlpha = lK ? 0.8 : 0.92, jg.fill(), jg.globalAlpha = 0x1, jg.lineWidth = 1.5, jg.strokeStyle = lK ? "#5a5a5a" : la ? "#ffffff" : lj.base, jg.stroke(), !lK && lD >= 0x8 && (jg.fillStyle = la ? lj.base : lj.dark, jg.globalAlpha = la ? 0.55 : 0.8, Po(jg, lP - lD * 0.18, lL + 0x2, lD * 0.36, Math.max(0x0, lo - lL - 0x4), lD * 0.18), jg.fill(), jg.globalAlpha = 0x1);
                }
              }
            }
            jg.globalAlpha = 0x1, l8 ? jr.draw_sprite_ext('spr_rhythmgame_heldnote', 0x0, lP, lZ, 0x1, 0x1, 0x0, lK ? "#808080" : la ? "#ffa040" : lj.base, lK ? 0.5 : 0x1) : (lK ? this.deadTails[l9] : this.tails[l9]).draw(jg, lP, lZ, 0x1, 0x1, lO);
          }
          if (jH.up ? lv < -0x14 : lv > 0x1f4) continue;
          l8 ? jr.draw_sprite_ext('spr_rhythmgame_note', 0x0, lP, lv, jH.colW / 0x28, 0x1, 0x0, lK ? "#808080" : la ? "#ffff00" : lj.base, lK ? 0.5 : 0x1) : (lK ? this.deadNotes[l9] : this.notes[l9]).draw(jg, lP, lv, 0x1, 0x1, lO);
        } else {
          if (jH.up ? lv < -0x14 : lv > 0x1f4) continue;
          l8 ? jr.draw_sprite_ext('spr_rhythmgame_note', 0x0, lP, lv, jH.colW / 0x28, 0x1, 0x0, lc ? "#808080" : lj.base, lc ? 0.5 : 0x1) : (lc && (jg.globalAlpha = 0.6), (lc ? this.deadNotes[l9] : this.notes[l9]).draw(jg, lP, lv, 0x1, 0x1, lO), jg.globalAlpha = 0x1);
        }
      }
    }
  }
  ["drawJudgement"](jr, jg, jz) {
    let jQ = this.play,
      jH = this.L;
    if (jQ.lastJ < 0x0) return;
    jQ.lastJAt !== this.jSeen && (this.jSeen = jQ.lastJAt, this.jAt = jz, this.jj = jQ.lastJ);
    let l0 = this.jj;
    if (this.cfg.judgeHide300 && l0 <= 0x1) return;
    let l1 = jz - this.jAt;
    if (l1 < 0x0 || l1 > 0x2e4) return;
    let l2 = w0(l1);
    w2(jr, l0, jH.cx, jH.judgeY + l2[0x0], l2[0x1], l2[0x2], l2[0x3]);
  }
  ["drawHud"](jr, jg, jz) {
    let jQ = jr.ctx,
      jH = this.play,
      l0 = this.L,
      l1 = this.cfg;
    if (l1.showCombo !== false) {
      let l9 = Math.max(0x28, l0.x0 - 0x22),
        lP = 0x82,
        lw = 0xc4,
        lj = jH.judged > 0x0 && jH.counts[0x5] === 0x0 && jH.combo >= jH.judged,
        ll = jH.judged ? Math.min(0x1, jH.combo / jH.judged) : 0x0;
      jQ.fillStyle = Pl.maroon, jQ.fillRect(l9, lP, 0x14, lw);
      let lD = Math.round(lw * ll);
      lD > 0x0 && (jQ.fillStyle = lj ? Pl.yellow : Pl.orange, jQ.fillRect(l9, lP + lw - lD, 0x14, lD)), jQ.fillStyle = "#ffffff", jQ.fillRect(l9, lP + lw - lD, 0x14, lD > 0x0 ? 0x1 : 0x0), jr.draw_sprite_ext('spr_tplogo', 0x0, l9 - 0x1a, lP + 0x14, 0x1, 0x1, 0x0, "#ffffff", 0x1), jH.combo > 0x0 && (PD(jr, l9 - 0x4, lP + 0x46, Ph(jH.combo), "#ffffff", 'fnt_mainbig', 'right'), lj && jH.combo >= 0xa && PD(jr, l9 - 0x4, lP + 0x64, 'MAX', Pl.yellow, 'fnt_main', 'right'));
    }
    let lO = l0.x1 + 0xc + 0x70 <= 0x27c ? l0.x1 + 0xc : Math.max(0x4, l0.x0 - 0x7c),
      lf = 0x1b6,
      lR = Math.max(0x0, Math.min(0x1, jH.hp)),
      lu = Math.round(lR * 0x64),
      lv = lR < 0.25;
    jr.draw_sprite_ext('spr_hpname', 0x0, lO, lf + 0x4, 0x1, 0x1, 0x0, "#ffffff", 0x1);
    let lc = lR <= 0x0 ? Pl.red : lv ? Pl.yellow : "#ffffff";
    PD(jr, lO + 0x70, lf - 0xc, PQ(lu), lc, 'fnt_main', 'right'), Pv(jQ, lO + 0x16, lf + 0x5, 0x5a, 0x9, lR, lv && Math.floor(jz.tReal / 0xb4) % 0x2 === 0x0 ? Pl.red : Pl.cyan);
    let l2 = PC(jH.score);
    PD(jr, 0x278, 0x4, l2, "#ffffff", 'fnt_mainbig', 'right');
    let l3 = Pg(jH.accuracy);
    PD(jr, 0x278, 0x24, l3, jH.accuracy >= 0.95 ? Pl.yellow : "#ffffff", 'fnt_main', 'right');
    let l4 = jH.chart,
      l5 = l4.first,
      l6 = Math.max(l5 + 0x1, l4.last),
      l8 = jg < l5 ? 0x0 : Math.max(0x0, Math.min(0x1, (jg - l5) / (l6 - l5)));
    jQ.fillStyle = Pl.dk, jQ.fillRect(0x216, 0x38, 0x62, 0x2), jQ.fillStyle = "#ffffff", jQ.fillRect(0x216, 0x38, Math.round(0x62 * l8), 0x2), l1.hitError !== 'OFF' && this.drawHitError(jQ, jg, jz.tReal), l1.keyOverlay && this.drawKeyOverlay(jr, jz.keyLabels);
  }
  ["noteHit"](jr, jg, jz) {
    let jQ = this.heW;
    this.heW = (this.heW + 0x1) % this.heN, this.heErr[jQ] = jr, this.heAt[jQ] = jz, this.heJ[jQ] = jg, this.heMean = this.heMean * 0.85 + jr * 0.15;
  }
  ["drawHitError"](jr, jg, jz) {
    let jQ = this.play,
      jH = this.L,
      l0 = jQ.win,
      l1 = jQ.rate,
      l2 = l0[0x4] / l1,
      l3 = Math.min(0x6e, jH.width / 0x2 + 0x1e),
      l4 = l3 / l2,
      l5 = jH.cx,
      l6 = jH.up ? Math.max(0x8, jH.hitY - 0x34) : Math.min(0x1d8, jH.hitY + 0x38);
    for (let lw = 0x4; lw >= 0x0; lw--) {
      let lj = Math.round(Math.min(l3, l0[lw] / l1 * l4));
      jr.fillStyle = w5[lw], jr.fillRect(l5 - lj, l6 - 0x1, lj * 0x2, 0x3);
    }
    jr.fillStyle = "#ffffff", jr.fillRect(l5, l6 - 0x6, 0x1, 0xd);
    let l8 = this.cfg.hitError === 'DOTS';
    for (let ll = 0x0; ll < this.heN; ll++) {
      let lD = jz - this.heAt[ll];
      if (lD < 0x0 || lD > 0xdac) continue;
      let lO = Math.max(-l2, Math.min(l2, this.heErr[ll] / l1));
      jr.globalAlpha = 0x1 - lD / 0xdac, jr.fillStyle = o[this.heJ[ll]], l8 ? jr.fillRect(Math.round(l5 + lO * l4) - 0x1, l6 - 0x9, 0x2, 0x2) : jr.fillRect(Math.round(l5 + lO * l4), l6 - 0x7, 0x1, 0xf);
    }
    jr.globalAlpha = 0x1;
    let l9 = Math.max(-l2, Math.min(l2, this.heMean / l1)),
      lP = Math.round(l5 + l9 * l4);
    jr.fillStyle = Pl.yellow, jr.fillRect(lP - 0x3, l6 - 0xd, 0x7, 0x2), jr.fillRect(lP - 0x2, l6 - 0xb, 0x5, 0x2), jr.fillRect(lP - 0x1, l6 - 0x9, 0x3, 0x1);
  }
  ["drawKeyOverlay"](jr, jg) {
    let jz = jr.ctx,
      jQ = this.play,
      jH = jQ.keys,
      l0 = 0x28,
      l1 = 0x14,
      l2 = 0x280 - l0 - 0x6,
      l3 = 0xf0 - jH * (l1 + 0x2) / 0x2;
    for (let l4 = 0x0; l4 < jH; l4++) {
      let l5 = Math.round(l3 + l4 * (l1 + 0x2)),
        l6 = jQ.down[l4];
      PR(jz, l2, l5, l0, l1, l6 ? "#ffffff" : Pl.dk, l6 ? this.cols[l4].dark : "#000000", 0.9), PD(jr, l2 + 0x4, l5 + 0x2, jg ? jg[l4] : '', l6 ? Pl.yellow : "#ffffff"), PD(jr, l2 + l0 - 0x3, l5 + 0x2, Ph(jQ.presses[l4] % 0x3e8), Pl.gray, 'fnt_main', 'right');
    }
  }
};
v(w3, 'ManiaRenderer');
var w4 = w3,
  w5 = ["#ffff00", "#606060", "#4a7a4a", "#7a5020", "#404040"];
function w6(jr, jg, jz, jQ, jH, l0) {
  let l1 = jr.ctx,
    l2 = jg.win,
    l3 = l2[0x4] / jg.rate,
    l4 = jQ + l0 / 0x2,
    l5 = (l0 / 0x2 - 0x3) / l3;
  l1.save(), l1.fillStyle = "#000000", l1.fillRect(jz, jQ, jH, l0);
  let l6 = [[l2[0x4], "#101010"], [l2[0x3], "#161616"], [l2[0x2], "#1c1c1c"], [l2[0x1], "#242424"], [l2[0x0], "#2c2c10"]];
  for (let [lP, lw] of l6) {
    let lj = Math.round(Math.min(l0 / 0x2, lP / jg.rate * l5));
    l1.fillStyle = lw, l1.fillRect(jz, Math.round(l4) - lj, jH, lj * 0x2);
  }
  l1.fillStyle = Pl.gray, l1.fillRect(jz, Math.round(l4), jH, 0x1);
  let l8 = jg.chart.first,
    l9 = Math.max(l8 + 0x1, jg.chart.last);
  for (let ll = 0x0; ll < jg.errN; ll++) {
    let lD = jz + (jg.errAt[ll] - l8) / (l9 - l8) * (jH - 0x4) + 0x2,
      lO = jg.errMs[ll] / jg.rate,
      lf = jg.errJ[ll];
    if (lO !== lO) {
      l1.fillStyle = "rgba(255,64,64,0.5)", l1.fillRect(Math.round(lD), jQ + 0x2, 0x1, l0 - 0x4);
      continue;
    }
    let lR = l4 + Math.max(-l3, Math.min(l3, lO)) * l5;
    l1.fillStyle = o[lf], l1.fillRect(Math.round(lD) - 0x1, Math.round(lR) - 0x1, 0x2, 0x2);
  }
  l1.restore(), PD(jr, jz + 0x4, jQ + 0x1, 'EARLY', Pl.gray), PD(jr, jz + 0x4, jQ + l0 - 0x11, 'LATE', Pl.gray);
}
v(w6, 'drawHitGraph');
function w7(jr, jg, jz, jQ, jH, l0) {
  let l1 = jr.ctx,
    l2 = jg.win[0x4] / jg.rate,
    l3 = 0x29,
    l4 = new Int32Array(l3),
    l5 = 0x1;
  for (let l8 = 0x0; l8 < jg.errN; l8++) {
    let l9 = jg.errMs[l8] / jg.rate;
    if (l9 !== l9) continue;
    let lP = Math.max(0x0, Math.min(l3 - 0x1, Math.round(l9 / l2 * (l3 - 0x1) / 0x2 + (l3 - 0x1) / 0x2)));
    ++l4[lP] > l5 && (l5 = l4[lP]);
  }
  l1.save(), l1.fillStyle = "#000000", l1.fillRect(jz, jQ, jH, l0);
  let l6 = jH / l3;
  for (let lw = 0x0; lw < l3; lw++) {
    let lj = Math.abs((lw - (l3 - 0x1) / 0x2) / ((l3 - 0x1) / 0x2) * l2),
      ll = 0x4;
    for (let lO = 0x0; lO < 0x5; lO++) if (lj <= jg.win[lO] / jg.rate) {
      ll = lO;
      break;
    }
    let lD = Math.round(l4[lw] / l5 * (l0 - 0x14));
    l1.fillStyle = o[ll], l1.fillRect(Math.round(jz + lw * l6 + 0x1), jQ + l0 - 0x2 - lD, Math.max(0x1, Math.round(l6 - 0x2)), lD);
  }
  l1.fillStyle = Pl.gray, l1.fillRect(Math.round(jz + jH / 0x2), jQ + 0x2, 0x1, l0 - 0x4), l1.restore(), PD(jr, jz + 0x4, jQ + 0x1, 'EARLY', Pl.gray), PD(jr, jz + jH - 0x4, jQ + 0x1, 'LATE', Pl.gray, 'fnt_main', 'right');
}
v(w7, 'drawHistogram'), c(), c();
var w8 = {
    'x': 0x20,
    'y': 0x10,
    'w': 0x180,
    'h': 0x1c0,
    'x2': 0x1a0,
    'y2': 0x1d0,
    'cx': 0xe0
  },
  w9 = w8.y + 0x70,
  wP = 0x1e,
  ww = ['EASY', 'NORMAL', 'HARD', 'LUNATIC'],
  wj = [0.5, 0x1, 1.2, 1.5],
  wl = ['susie', 'ralsei', 'noelle', 'kris', 'lancer', 'berdly'],
  wD = {
    'SOUL': 0x0,
    'AXE': 0x2,
    'AXEBEAM': 0x3,
    'YARN': 0x4,
    'STAR': 0x5,
    'NEEDLE': 0x6,
    'LANCE': 0x7,
    'CUT': 0x8,
    'THRUST': 0x9,
    'SPADE': 0xa,
    'SPADEBOMB': 0xb,
    'FEATHER': 0xc,
    'QUILL': 0xd,
    'SHARD': 0xe
  },
  wM = [0x989680, 0x17d7840, 0x2faf080, 0x4c4b400],
  wO = 0xe,
  wf = {
    'susie': 0x3c,
    'noelle': 0x54,
    'ralsei': 0x48,
    'kris': 0x5a,
    'lancer': 0x4e,
    'berdly': 0x50
  },
  wR = [0x0, 0x0, 0x8, 0x2, 0x2, 0x0, 0x0, 0x2, 0xe, 0x2, 0x4, 0x6, 0x0, 0x0, 0x0],
  wu = {
    'susie': [0x8, 0x1],
    'ralsei': [0x4, 0x8],
    'noelle': [0x3, 0x5],
    'kris': [0x5, 0x1],
    'lancer': [0x7, 0x4],
    'berdly': [0x6, 0x2]
  },
  wv = {
    'W': 0x0,
    'RED': 0x1,
    'ORANGE': 0x2,
    'YELLOW': 0x3,
    'GREEN': 0x4,
    'CYAN': 0x5,
    'BLUE': 0x6,
    'PURPLE': 0x7,
    'PINK': 0x8
  },
  wc = ["#ffffff", "#ff5050", "#ffa040", "#ffff48", "#58ff78", "#48ffff", "#6a94ff", "#c878ff", "#ff78d8"],
  wZ = [];
function wa(jr) {
  let jg = Object.assign({
    'frame': 0x0,
    'frames': 0x1,
    'anim': 0x4,
    'scale': 0x1,
    'r': 0x3,
    'orient': 0x0,
    'spin': 0x6,
    'rot0': 0x0,
    'halo': 0x0,
    'face': 0x0,
    'center': false
  }, jr);
  return jg.id = wZ.length, wZ.push(jg), jg.id;
}
v(wa, 'defType');
var wY = Math.PI / 0xb4,
  wn = Math.PI * 0x2,
  wp = 0x1000,
  wK = 0x100,
  wU = 0x600,
  wL = 0x800,
  wo = 0x28,
  wA = 0x1,
  wX = 0x4,
  wJ = 0x8,
  wT = {
    'AIM': 0x1,
    'TURN': 0x2,
    'BURST': 0x3,
    'STOP': 0x4,
    'CALL': 0x5,
    'SPEED': 0x6,
    'AIMBURST': 0x7
  },
  wW = {
    'POWER': 0x0,
    'POINT': 0x1,
    'STAR': 0x2,
    'BIGPOWER': 0x3,
    'FULL': 0x4
  },
  wm = {
    'SPARK': 0x0,
    'SQUARE': 0x1,
    'RING': 0x2,
    'SHARD': 0x3,
    'SPRITE': 0x4,
    'TEXT': 0x5,
    'FLAKE': 0x6,
    'GLINT': 0x7,
    'SLASH': 0x8
  };
function wx(jr) {
  let jg = jr >>> 0x0 || 0x9e3779b9;
  return () => (jg ^= jg << 0xd, jg >>>= 0x0, jg ^= jg >>> 0x11, jg ^= jg << 0x5, jg >>>= 0x0, jg / 0x100000000);
}
v(wx, 'xorshift');
var wI = class lz {
  constructor() {
    this.bx = new Float32Array(wp), this.by = new Float32Array(wp), this.bpx = new Float32Array(wp), this.bpy = new Float32Array(wp), this.bvx = new Float32Array(wp), this.bvy = new Float32Array(wp), this.bdir = new Float32Array(wp), this.bspd = new Float32Array(wp), this.bacc = new Float32Array(wp), this.blim = new Float32Array(wp), this.bw = new Float32Array(wp), this.bgrav = new Float32Array(wp), this.bage = new Int32Array(wp), this.btype = new Uint16Array(wp), this.bcol = new Uint8Array(wp), this.bflag = new Uint8Array(wp), this.bbnc = new Uint8Array(wp), this.bdelay = new Uint8Array(wp), this.brot = new Float32Array(wp), this.bprot = new Float32Array(wp), this.bevT = new Int32Array(wp), this.bevK = new Uint8Array(wp), this.bevA = new Float32Array(wp), this.bevB = new Float32Array(wp), this.bevC = new Float32Array(wp), this.bevD = new Float32Array(wp), this.btag = new Int32Array(wp), this.blive = new Int32Array(wp), this.bpos = new Int32Array(wp), this.bn = 0x0, this.bfree = new Int32Array(wp), this.bfn = 0x0, this.sx = new Float32Array(wK), this.sy = new Float32Array(wK), this.spx = new Float32Array(wK), this.spy = new Float32Array(wK), this.svx = new Float32Array(wK), this.svy = new Float32Array(wK), this.sdmg = new Float32Array(wK), this.skind = new Uint8Array(wK), this.shome = new Float32Array(wK), this.slife = new Int16Array(wK), this.sbnc = new Uint8Array(wK), this.spass = new Uint8Array(wK), this.sage = new Int16Array(wK), this.slive = new Int32Array(wK), this.spos = new Int32Array(wK), this.sn = 0x0, this.sfree = new Int32Array(wK), this.sfn = 0x0, this.ix = new Float32Array(wU), this.iy = new Float32Array(wU), this.ipx = new Float32Array(wU), this.ipy = new Float32Array(wU), this.ivx = new Float32Array(wU), this.ivy = new Float32Array(wU), this.ikind = new Uint8Array(wU), this.ihome = new Uint8Array(wU), this.iage = new Int32Array(wU), this.ilive = new Int32Array(wU), this.ipos = new Int32Array(wU), this.inn = 0x0, this.ifree = new Int32Array(wU), this.ifn = 0x0, this.qx = new Float32Array(wL), this.qy = new Float32Array(wL), this.qpx = new Float32Array(wL), this.qpy = new Float32Array(wL), this.qvx = new Float32Array(wL), this.qvy = new Float32Array(wL), this.qlife = new Int32Array(wL), this.qmax = new Int32Array(wL), this.qkind = new Uint8Array(wL), this.qcol = new Uint8Array(wL), this.qsize = new Float32Array(wL), this.qrot = new Float32Array(wL), this.qvr = new Float32Array(wL), this.qdrag = new Float32Array(wL), this.qspr = new Int32Array(wL), this.qlive = new Int32Array(wL), this.qpos = new Int32Array(wL), this.qn = 0x0, this.qfree = new Int32Array(wL), this.qfn = 0x0, this.lasers = [];
    for (let jr = 0x0; jr < wo; jr++) this.lasers.push({
      'on': false,
      'x': 0x0,
      'y': 0x0,
      'ang': 0x0,
      'pang': 0x0,
      'w': 0x0,
      'len': 0x0,
      'width': 0x0,
      'warn': 0x0,
      'life': 0x0,
      't': 0x0,
      'col': 0x0,
      'grazeT': 0x0,
      'follow': null,
      'fx': 0x0,
      'fy': 0x0,
      'fade': 0x6
    });
    this.markers = [];
    for (let jg = 0x0; jg < 0x20; jg++) this.markers.push({
      'on': false,
      'kind': '',
      'x': 0x0,
      'y': 0x0,
      't': 0x0,
      'life': 0x0,
      'a': 0x0,
      'b': 0x0
    });
    this.sndAt = Object.create(null), this.hooks = {
      'snd': null,
      'shake': null,
      'event': null
    }, this.inputZero = {
      'l': 0x0,
      'r': 0x0,
      'u': 0x0,
      'd': 0x0,
      'shoot': 0x0,
      'focus': 0x0,
      'bomb': 0x0,
      'tdx': 0x0,
      'tdy': 0x0,
      'touch': 0x0
    }, this.reset();
  }
  ["reset"]() {
    this.bn = 0x0, this.bfn = 0x0;
    for (let jr = wp - 0x1; jr >= 0x0; jr--) this.bfree[this.bfn++] = jr;
    this.sn = 0x0, this.sfn = 0x0;
    for (let jg = wK - 0x1; jg >= 0x0; jg--) this.sfree[this.sfn++] = jg;
    this.inn = 0x0, this.ifn = 0x0;
    for (let jz = wU - 0x1; jz >= 0x0; jz--) this.ifree[this.ifn++] = jz;
    this.qn = 0x0, this.qfn = 0x0;
    for (let jQ = wL - 0x1; jQ >= 0x0; jQ--) this.qfree[this.qfn++] = jQ;
    for (let jH of this.lasers) jH.on = false;
    for (let l0 of this.markers) l0.on = false;
    this.t = 0x0, this.state = 'idle', this.flashT = 0x0, this.flashMax = 0x1, this.flashCol = 0x0, this.shakeAmp = 0x0, this.shakeT = 0x0, this.banner = null, this.popups = [], this.peakBullets = 0x0;
  }
  ["start"](jr) {
    this.reset(), this.opts = jr, this.mode = jr.mode || 'rush', this.diff = Math.max(0x0, Math.min(0x3, jr.diff | 0x0)), this.partner = wl.includes(jr.partner) ? jr.partner : 'susie', this.bosses = jr.bosses, this.rand = wx(jr.seed || 0x3039);
    let jg = this.mode === 'practice';
    this.bombBase = 0x3 + Math.max(0x0, Math.min(0x2, jr.bombs | 0x0)), this.pal = jr.pal | 0x0, this.P = {
      'x': w8.cx,
      'y': w8.y2 - 0x30,
      'px': w8.cx,
      'py': w8.y2 - 0x30,
      'focus': 0x0,
      'alive': 0x1,
      'invuln': 0x3c,
      'deadT': 0x0,
      'hitT': 0x0,
      'power': jg ? 0x4 : Math.max(0x2, Math.min(0x4, +jr.power || 0x2)),
      'lives': jg ? 0x9 : (this.diff === 0x0 ? 0x4 : 0x3) + Math.max(0x0, Math.min(0x2, jr.lives | 0x0)),
      'bombs': this.bombBase,
      'tp': 0x0,
      'graze': 0x0,
      'score': 0x0,
      'shotT': 0x0,
      'shotT2': 0x0,
      'optAng': 0x0,
      'deaths': 0x0,
      'bombsUsed': 0x0,
      'focusT': 0x0,
      'tilt': 0x0,
      'lean': 0x0
    }, this.freezeT = 0x0, this.bike = {
      'x': 0x0,
      'y': 0x0,
      'px': 0x0,
      'py': 0x0,
      'vy': 0x0,
      'on': 0x0
    }, this.storm = [];
    for (let jz = 0x0; jz < 0x3; jz++) this.storm.push({
      'x': 0x0,
      'y': 0x0,
      'px': 0x0,
      'py': 0x0,
      'on': 0x0
    });
    this.extendIdx = 0x0, this.stats = {
      'captured': 0x0,
      'cards': 0x0,
      'bosses': 0x0,
      'maxBullets': 0x0,
      'capturedIds': []
    }, this.hiScoreSeen = 0x0, this.bombT = 0x0, this.bombMax = 0x1, this.bombKind = null, this.bombX = 0x0, this.bombY = 0x0, this.boss = {
      'x': w8.cx,
      'y': w8.y - 0x50,
      'px': w8.cx,
      'py': w8.y - 0x50,
      'sx': 0x0,
      'sy': 0x0,
      'tx': 0x0,
      'ty': 0x0,
      'mt': 0x0,
      'md': 0x0,
      'hp': 0x1,
      'hpMax': 0x1,
      'show': 0x0,
      'flashT': 0x0,
      'def': null,
      'spr': null,
      'sprFrame': 0x0,
      'anim': 0x0,
      'hitR': 0x1a,
      'invuln': 0x0,
      'dmgT': 0x0,
      'trail': 0x0,
      'face': 0x1,
      'lastDmgT': -0x63,
      'scale': 0x2,
      'alpha': 0x1
    }, this.bi = -0x1, this.pi = -0x1, this.phase = null, this.S = null, this.pt = 0x0, this.declT = 0x0, this.gapT = 0x0, this.cardFailed = false, this.cardBonus = 0x0, this.cardBonusMax = 0x0, this.timer = 0x0, this.timerMax = 0x0, this.itemsHomeT = 0x0, this.endT = 0x0, this.result = null, this.state = 'play', jg && jr.card ? (this.enterBoss(jr.card.boss, true), this.beginPhase(jr.card.phase)) : this.enterBoss(jr.startBoss | 0x0, false);
  }
  ['lv'](jr, jg, jz, jQ) {
    let jH = this.diff;
    return jH === 0x0 ? jr : jH === 0x1 ? jg : jH === 0x2 || jQ === void 0x0 ? jz : jQ;
  }
  ['rr'](jr, jg) {
    return jr + (jg - jr) * this.rand();
  }
  ["aim"](jr, jg) {
    return Math.atan2(this.P.y - jg, this.P.x - jr);
  }
  ["snd"](jr, jg = 0x1, jz = 0x2, jQ = 0x1) {
    let jH = this.sndAt[jr];
    jH !== void 0x0 && this.t - jH < jz || (this.sndAt[jr] = this.t, this.hooks.snd && this.hooks.snd(jr, jg, jQ));
  }
  ["shake"](jr, jg) {
    (jr >= this.shakeAmp || this.shakeT <= 0x0) && (this.shakeAmp = jr, this.shakeT = jg, this.shakeMax = jg);
  }
  ["flash"](jr, jg) {
    this.flashCol = jr, this.flashT = jg, this.flashMax = jg;
  }
  ["emit"](jr, jg, jz) {
    this.hooks.event && this.hooks.event(jr, jg, jz);
  }
  ["shot"](jr, jg, jz, jQ, jH, l0 = 0x0) {
    if (this.bfn === 0x0 || jr - jr !== 0x0 || jg - jg !== 0x0 || jz - jz !== 0x0 || jQ - jQ !== 0x0) return -0x1;
    let l1 = this.bfree[--this.bfn];
    this.bpos[l1] = this.bn, this.blive[this.bn++] = l1, this.bx[l1] = jr, this.by[l1] = jg, this.bpx[l1] = jr, this.bpy[l1] = jg, this.bdir[l1] = jz, this.bspd[l1] = jQ, this.bvx[l1] = Math.cos(jz) * jQ, this.bvy[l1] = Math.sin(jz) * jQ, this.bacc[l1] = 0x0, this.blim[l1] = 0x0, this.bw[l1] = 0x0, this.bgrav[l1] = 0x0, this.bage[l1] = 0x0, this.btype[l1] = jH, this.bcol[l1] = l0, this.bflag[l1] = 0x0, this.bbnc[l1] = 0x0, this.bdelay[l1] = 0x0;
    let l2 = wZ[jH];
    return this.brot[l1] = l2.orient === 0x1 ? jz : l2.rot0 * wY, this.bprot[l1] = this.brot[l1], this.bevT[l1] = -0x1, this.bevK[l1] = 0x0, this.btag[l1] = 0x0, l1;
  }
  ["bAcc"](jr, jg, jz) {
    return jr >= 0x0 && (this.bacc[jr] = jg, this.blim[jr] = jz), jr;
  }
  ["bCurve"](jr, jg) {
    return jr >= 0x0 && (this.bw[jr] = jg * wY), jr;
  }
  ["bGrav"](jr, jg) {
    return jr >= 0x0 && (this.bgrav[jr] = jg), jr;
  }
  ["bBounce"](jr, jg) {
    return jr >= 0x0 && (this.bbnc[jr] = jg), jr;
  }
  ["bDelay"](jr, jg) {
    return jr >= 0x0 && (this.bdelay[jr] = jg, this.bflag[jr] |= wX), jr;
  }
  ["bKeep"](jr) {
    return jr >= 0x0 && (this.bflag[jr] |= wJ), jr;
  }
  ["bTag"](jr, jg) {
    return jr >= 0x0 && (this.btag[jr] = jg), jr;
  }
  ["bEv"](jr, jg, jz, jQ = 0x0, jH = 0x0, l0 = 0x0, l1 = 0x0) {
    return jr >= 0x0 && (this.bevT[jr] = jg, this.bevK[jr] = jz, this.bevA[jr] = jQ, this.bevB[jr] = jH, this.bevC[jr] = l0, this.bevD[jr] = l1), jr;
  }
  ["bSetDir"](jr, jg, jz) {
    this.bdir[jr] = jg, jz !== void 0x0 && (this.bspd[jr] = jz), this.bvx[jr] = Math.cos(jg) * this.bspd[jr], this.bvy[jr] = Math.sin(jg) * this.bspd[jr], wZ[this.btype[jr]].orient === 0x1 && (this.brot[jr] = jg);
  }
  ["ring"](jr, jg, jz, jQ, jH, l0, l1 = 0x0) {
    let l2 = wn / jz,
      l3 = -0x1;
    for (let l4 = 0x0; l4 < jz; l4++) {
      let l5 = this.shot(jr, jg, jQ + l4 * l2, jH, l0, l1);
      l4 === 0x0 && (l3 = l5);
    }
    return l3;
  }
  ["fan"](jr, jg, jz, jQ, jH, l0, l1, l2 = 0x0) {
    if (jz <= 0x1) return this.shot(jr, jg, jQ, l0, l1, l2);
    let l3 = -0x1;
    for (let l4 = 0x0; l4 < jz; l4++) {
      let l5 = this.shot(jr, jg, jQ - jH / 0x2 + jH * l4 / (jz - 0x1), l0, l1, l2);
      l4 === 0x0 && (l3 = l5);
    }
    return l3;
  }
  ["lastN"](jr, jg) {
    for (let jz = this.bn - jr; jz < this.bn; jz++) jz >= 0x0 && jg(this.blive[jz]);
  }
  ["killBullet"](jr) {
    let jg = this.bpos[jr],
      jz = this.blive[--this.bn];
    this.blive[jg] = jz, this.bpos[jz] = jg, this.bfree[this.bfn++] = jr;
  }
  ["clearBullets"](jr, jg = true, jz = 0x0, jQ = 0x0, jH = 0x0) {
    let l0 = jH * jH;
    for (let l1 = this.bn - 0x1; l1 >= 0x0; l1--) {
      let l2 = this.blive[l1];
      if (!jg) {
        let l3 = this.bx[l2] - jz,
          l4 = this.by[l2] - jQ;
        if (l3 * l3 + l4 * l4 > l0) continue;
      }
      if (jr && this.bx[l2] > w8.x && this.bx[l2] < w8.x2 && this.by[l2] > w8.y && this.by[l2] < w8.y2) {
        let l5 = this.item(this.bx[l2], this.by[l2], 0x2);
        l5 >= 0x0 && (this.ivx[l5] = 0x0, this.ivy[l5] = -0x1, this.ihome[l5] = 0x1);
      } else (l1 & 0x3) === 0x0 && this.part(wm.GLINT, this.bx[l2], this.by[l2], 0x0, -0.5, 0xa, this.bcol[l2], 0x1);
      this.killBullet(l2);
    }
  }
  ["laser"](jr, jg, jz, jQ, jH, l0, l1, l2 = 0x0, l3 = 0x0, l4 = null) {
    for (let l5 of this.lasers) if (!l5.on) return l5.on = true, l5.x = jr, l5.y = jg, l5.ang = jz, l5.pang = jz, l5.w = l3 * wY, l5.len = jQ, l5.width = jH, l5.warn = l0, l5.life = l1, l5.t = 0x0, l5.col = l2, l5.grazeT = 0x0, l5.follow = l4, l5.fx = l4 ? jr - l4.x : 0x0, l5.fy = l4 ? jg - l4.y : 0x0, l5.fade = 0x6, l5;
    return null;
  }
  ["mark"](jr, jg, jz, jQ, jH = 0x0, l0 = 0x0) {
    for (let l1 of this.markers) if (!l1.on) return l1.on = true, l1.kind = jr, l1.x = jg, l1.y = jz, l1.t = 0x0, l1.life = jQ, l1.a = jH, l1.b = l0, l1;
    return null;
  }
  ["bAlive"](jr, jg) {
    return jr >= 0x0 && this.bpos[jr] < this.bn && this.blive[this.bpos[jr]] === jr && this.btag[jr] === jg;
  }
  ["item"](jr, jg, jz) {
    if (this.ifn === 0x0) return -0x1;
    let jQ = this.ifree[--this.ifn];
    return this.ipos[jQ] = this.inn, this.ilive[this.inn++] = jQ, this.ix[jQ] = jr, this.iy[jQ] = jg, this.ipx[jQ] = jr, this.ipy[jQ] = jg, this.ivx[jQ] = (this.rand() - 0.5) * 0x2, this.ivy[jQ] = -3.5 - this.rand() * 1.5, this.ikind[jQ] = jz, this.ihome[jQ] = 0x0, this.iage[jQ] = 0x0, jQ;
  }
  ["killItem"](jr) {
    let jg = this.ipos[jr],
      jz = this.ilive[--this.inn];
    this.ilive[jg] = jz, this.ipos[jz] = jg, this.ifree[this.ifn++] = jr;
  }
  ["drop"](jr, jg, jz, jQ, jH = 0x0) {
    for (let l0 = 0x0; l0 < jz; l0++) {
      let l1 = this.item(jr + this.rr(-0x28, 0x28), jg + this.rr(-0x1e, 0x14), 0x0);
      l1 >= 0x0 && (this.ivy[l1] -= this.rand() * 0x2);
    }
    for (let l2 = 0x0; l2 < jQ; l2++) {
      let l3 = this.item(jr + this.rr(-0x30, 0x30), jg + this.rr(-0x1e, 0x14), 0x1);
      l3 >= 0x0 && (this.ivy[l3] -= this.rand() * 0x2);
    }
    for (let l4 = 0x0; l4 < jH; l4++) {
      let l5 = this.item(jr + this.rr(-0x1e, 0x1e), jg + this.rr(-0x14, 0xa), 0x3);
      l5 >= 0x0 && (this.ivy[l5] -= 0x1);
    }
  }
  ["part"](jr, jg, jz, jQ, jH, l0, l1 = 0x0, l2 = 0x1, l3 = -0x1) {
    if (this.qfn === 0x0) return -0x1;
    let l4 = this.qfree[--this.qfn];
    return this.qpos[l4] = this.qn, this.qlive[this.qn++] = l4, this.qx[l4] = jg, this.qy[l4] = jz, this.qpx[l4] = jg, this.qpy[l4] = jz, this.qvx[l4] = jQ, this.qvy[l4] = jH, this.qlife[l4] = l0, this.qmax[l4] = l0, this.qkind[l4] = jr, this.qcol[l4] = l1, this.qsize[l4] = l2, this.qrot[l4] = this.rand() * wn, this.qvr[l4] = 0x0, this.qdrag[l4] = 0.9, this.qspr[l4] = l3, l4;
  }
  ["burst"](jr, jg, jz, jQ, jH, l0, l1 = wm.SPARK, l2 = 0x1) {
    for (let l3 = 0x0; l3 < jz; l3++) {
      let l4 = this.rand() * wn,
        l5 = jQ * (0.3 + this.rand() * 0.7);
      this.part(l1, jr, jg, Math.cos(l4) * l5, Math.sin(l4) * l5, jH + (this.rand() * jH * 0.5 | 0x0), l0, l2);
    }
  }
  ["popup"](jr, jg, jz, jQ = 0x0, jH = 0x0) {
    this.popups.length > 0x18 && this.popups.shift();
    for (let l0 = this.popups.length - 0x1; l0 >= 0x0; l0--) {
      let l1 = this.popups[l0];
      l1.t < 0x6 && Math.abs(l1.x - jr) < 0x24 && Math.abs(l1.y - jg) < 0xa && (jg = l1.y - 0xa);
    }
    this.popups.push({
      'x': jr,
      'y': jg,
      'text': jz,
      'col': jQ,
      't': 0x0,
      'big': jH
    });
  }
  ["bossMove"](jr, jg, jz) {
    let jQ = this.boss;
    jQ.sx = jQ.x, jQ.sy = jQ.y, jQ.tx = Math.max(w8.x + 0x28, Math.min(w8.x2 - 0x28, jr)), jQ.ty = Math.max(w8.y + 0x28, Math.min(w8.y + 0xc8, jg)), jQ.mt = 0x0, jQ.md = Math.max(0x1, jz), Math.abs(jQ.tx - jQ.sx) > 0x4 && (jQ.face = jQ.tx > jQ.sx ? 0x1 : -0x1);
  }
  ["bossWander"](jr, jg = 0x46, jz = 0x46, jQ = 0x82) {
    let jH = this.boss,
      l0 = jH.x + this.rr(-jg, jg) + (this.P.x - jH.x) * 0.25;
    l0 = Math.max(w8.x + 0x46, Math.min(w8.x2 - 0x46, l0)), this.bossMove(l0, w8.y + this.rr(jz, jQ), jr);
  }
  ["bossMoving"]() {
    return this.boss.mt < this.boss.md;
  }
  ["bossForm"](jr) {
    let jg = this.boss;
    jg.form = jr || null, jg.scale = jr && jr.scale || jg.def && jg.def.scale || 0x2;
  }
  ["damageBoss"](jr) {
    let jg = this.boss;
    if (!this.phase || jg.invuln > 0x0 || this.declT > 0x0 || this.gapT > 0x0 || this.phase.survival || jg.hp <= 0x0) return false;
    let jz = this.bossDmgMult();
    return jg.hp -= jr * jz, this.P.score += Math.round(jr * 0xa) * 0xa * wj[this.diff] / 0x1, jg.dmgT = 0x2, jg.lastDmgT = this.t, true;
  }
  ["bossDmgMult"]() {
    return this.pt < 0x1e ? 0.25 : 0x1;
  }
  ["enterBoss"](jr, jg) {
    this.bi = jr;
    let jz = this.bosses[jr],
      jQ = this.boss;
    jQ.def = jz, jQ.spr = jz.spr, jQ.form = null, jQ.scale = jz.scale || 0x2, jQ.hitR = jz.hitR || 0x1a, jQ.x = w8.cx, jQ.y = jg ? w8.y + 0x64 : w8.y - 0x5a, jQ.px = jQ.x, jQ.py = jQ.y, jQ.show = 0x1, jQ.alpha = 0x1, jQ.dying = 0x0, jQ.mt = jQ.md = 0x1, jg || this.bossMove(w8.cx, w8.y + 0x64, 0x32), this.pi = -0x1, this.phase = null, this.gapT = jg ? 0x16 : 0x6, this.introT = jg ? 0x0 : jz.line ? 0x64 : 0x40, jg ? this.emit('boss', jr) : (this.banner = {
      'kind': 'boss',
      'text': jz.name,
      'sub': jz.title,
      't': 0x0,
      'line': jz.line || null,
      'chars': 0x0
    }, this.emit('boss', jr));
  }
  ["beginPhase"](jr) {
    let jg = this.boss.def;
    this.pi = jr;
    let jz = jg.phases[jr];
    this.phase = jz;
    let jQ = this.boss,
      jH = this.diff === 0x0 ? 0.8 : 0x1;
    jQ.hpMax = Math.max(0x1, jz.hp * jH), jQ.hp = jQ.hpMax, jQ.invuln = 0x0, this.gapT = 0x0, this.S = {}, this.pt = 0x0, this.timerMax = jz.time * wP, this.timer = this.timerMax, this.cardFailed = false, this.declT = jz.spell ? 0x30 : 0x10;
    let l0 = 0xf4240 * (this.bi + 0x1) * wj[this.diff];
    if (this.cardBonusMax = jz.spell ? l0 : 0x0, this.cardBonus = this.cardBonusMax, jz.spell) {
      this.stats.cards++, this.banner = {
        'kind': 'spell',
        'text': jz.name,
        'sub': '',
        't': 0x0
      }, this.snd('snd_spellcast', 0.8, 0x1), jg.voice && this.snd(jg.voice, 0.7, 0x1), this.flash(0x0, 0x8);
      for (let l1 = 0x0; l1 < 0x1c; l1++) {
        let l2 = this.rand() * wn,
          l3 = 0x5a + this.rand() * 0x3c,
          l4 = this.part(wm.SPARK, jQ.x + Math.cos(l2) * l3, jQ.y + Math.sin(l2) * l3, -Math.cos(l2) * l3 / 0x10, -Math.sin(l2) * l3 / 0x10, 0x10, jg.col || 0x0, 1.4);
        l4 >= 0x0 && (this.qdrag[l4] = 0x1);
      }
    }
    this.emit('phase', this.bi, jr), jz.init && jz.init(this, this.S);
  }
  ["endPhase"](jr) {
    let jg = this.phase,
      jz = this.boss,
      jQ = jg.spell && !this.cardFailed && (!jr || jg.survival);
    this.clearBullets(true);
    for (let l2 of this.lasers) l2.on && l2.t < l2.warn + l2.life && (l2.t = Math.max(l2.t, l2.warn + l2.life));
    this.itemsHomeT = 0x2d;
    let jH = 0x0;
    jg.spell && (jQ ? (jH = Math.round(this.cardBonus / 0xa) * 0xa, this.P.score += jH, this.stats.captured++, this.stats.capturedIds.push(this.cardId(this.bi, this.pi)), this.banner = {
      'kind': 'capture',
      'text': "SPELL CARD BONUS!!",
      'sub': String(jH),
      't': 0x0
    }, this.snd('snd_great_shine', 0.9, 0x1)) : this.banner = {
      'kind': 'failed',
      'text': "BONUS FAILED...",
      'sub': '',
      't': 0x0
    }, this.emit('card', this.cardId(this.bi, this.pi), jQ));
    let l0 = this.pi >= jz.def.phases.length - 0x1,
      l1 = this.mode === 'practice';
    if (l1 || (!jr || jg.spell ? this.drop(jz.x, jz.y, l0 ? 0xa : 0x6, l0 ? 0xe : 0x8, jg.spell ? 0x1 : 0x0) : this.drop(jz.x, jz.y, 0x4, 0x3, 0x0)), this.snd(l0 ? 'snd_badexplosion' : 'snd_bomb', l0 ? 0x1 : 0.6, 0x1), this.burst(jz.x, jz.y, l0 ? 0x28 : 0x12, l0 ? 0x9 : 0x6, 0x10, jz.def.col || 0x0, wm.SPARK, 1.6), this.part(wm.RING, jz.x, jz.y, 0x0, 0x0, l0 ? 0x18 : 0xe, 0x0, l0 ? 0x6 : 0x3), this.shake(l0 ? 0x7 : 0x3, l0 ? 0x18 : 0x8), l0 && this.flash(0x0, 0x10), this.phase = null, l1) {
      this.finish('practice', jQ);
      return;
    }
    if (l0) {
      this.stats.bosses++;
      let l3 = 0x7a120 * (this.bi + 0x1) * wj[this.diff];
      this.P.score += l3, this.popup(jz.x, jz.y + 0x28, String(l3), 0x3, 0x1), jz.dying = 0x32, this.emit('bossDown', this.bi);
    } else this.gapT = 0x28;
  }
  ["finish"](jr, jg) {
    if (this.state = 'ending', this.endT = jr === 'over' ? 0x32 : 0x46, jr === 'clear') {
      let jz = this.P,
        jQ = (0x2dc6c0 * Math.max(0x0, jz.lives) + 0xf4240 * jz.bombs) * wj[this.diff];
      jz.score += jQ;
    }
    this.result = {
      'kind': jr,
      'captured': !!jg
    };
  }
  ["cardId"](jr, jg) {
    return this.bosses[jr].id + ':' + jg;
  }
  ["typeLine"](jr) {
    if (jr.t - wO <= 0x0) return;
    let jg = 0x0;
    for (let jQ = 0x0; jQ < jr.line.length; jQ++) jg += jr.line[jQ].length;
    if (jr.chars >= jg) return;
    jr.chars++;
    let jz = this.boss.def;
    jz && jz.txt && jr.chars & 0x1 && this.snd(jz.txt, 0.5, 0x2);
  }
  ["bomb"]() {
    let jr = this.P;
    if (this.bombT > 0x0 || jr.bombs <= 0x0 || !jr.alive || this.state !== 'play') return false;
    jr.bombs--, jr.bombsUsed++;
    let jg = this.partner;
    this.bombKind = jg, this.bombMax = wf[jg] || 0x48, this.bombT = this.bombMax, this.bombX = jr.x, this.bombY = jr.y, jr.invuln = Math.max(jr.invuln, this.bombMax + (jg === 'ralsei' ? 0x2d : 0x19)), this.phase && this.phase.spell && (this.cardFailed = true), jg === 'kris' ? this.freezeT = this.bombMax : this.clearBullets(jg === 'ralsei' || jg === 'noelle', true);
    for (let jz of this.lasers) jz.on && (jz.t = Math.max(jz.t, jz.warn + jz.life));
    if (this.itemsHomeT = Math.max(this.itemsHomeT, this.bombMax), jg === 'susie') this.snd('snd_rudebuster_swing', 0x1, 0x1), this.shake(0x3, 0xa);else {
      if (jg === 'noelle') this.snd('snd_snowgrave', 0.9, 0x1), this.flash(0x5, 0x14);else {
        if (jg === 'kris') this.snd('snd_bell', 0.8, 0x1), this.snd('snd_weirdeffect', 0.7, 0x1), this.flash(0x6, 0xa);else {
          if (jg === 'lancer') {
            let jQ = this.bike;
            jQ.on = 0x1, jQ.x = jQ.px = jr.x, jQ.y = jQ.py = jr.y + 0xa, jQ.vy = -0x2, this.snd('snd_motor_upper_2', 0.9, 0x1), this.snd('snd_lancerlaugh', 0.7, 0x1), this.shake(0x3, 0x8);
          } else {
            if (jg === 'berdly') {
              for (let jH = 0x0; jH < 0x3; jH++) {
                let l0 = this.storm[jH];
                l0.on = 0x1, l0.x = l0.px = Math.max(w8.x + 0x28, Math.min(w8.x2 - 0x28, jr.x + (jH - 0x1) * 0x60)), l0.y = l0.py = w8.y2 + 0x1e + jH % 0x2 * 0x1e;
              }
              this.snd('snd_rocket_long', 0.6, 0x1), this.snd('snd_wing', 0.9, 0x1), this.flash(0x5, 0x8);
            } else this.snd('snd_spell_pacify', 0x1, 0x1), this.flash(0x3, 0xc);
          }
        }
      }
    }
    return this.emit('bomb', jg), true;
  }
  ["kill"]() {
    let jr = this.P;
    jr.alive = 0x0, jr.deadT = 0x22, jr.deaths++, jr.hitT = 0x0, this.cardFailed = true, this.snd('snd_break2', 0x1, 0x1), this.shake(0x5, 0xe), this.flash(0x1, 0x6);
    for (let jg = 0x0; jg < 0x6; jg++) {
      let jz = -Math.PI / 0x2 + (jg - 2.5) * 0.5;
      this.part(wm.SHARD, jr.x, jr.y, Math.cos(jz) * 3.2, Math.sin(jz) * 3.2 - 0x1, 0x28, 0x1, 0x1);
    }
    this.burst(jr.x, jr.y, 0x10, 0x7, 0xe, 0x1, wm.SPARK, 1.3), this.part(wm.RING, jr.x, jr.y, 0x0, 0x0, 0x12, 0x1, 0x4), this.clearBullets(false, true);
    for (let jQ of this.lasers) jQ.on && (jQ.t = Math.max(jQ.t, jQ.warn + jQ.life));
    if (this.mode !== 'practice') {
      let jH = Math.min(0x1, jr.power);
      jr.power = Math.max(0x0, jr.power - 0x1);
      let l0 = Math.round(jH / 0.25);
      for (let l1 = 0x0; l1 < l0; l1++) {
        let l2 = this.item(jr.x + this.rr(-0x18, 0x18), jr.y - 0xa, 0x3);
        l2 >= 0x0 && (this.ivy[l2] = -0x5 - l1 * 0.6, this.ivx[l2] = (l1 - (l0 - 0x1) / 0x2) * 1.2);
      }
      jr.lives--;
    }
    this.emit('death');
  }
  ["respawn"]() {
    let jr = this.P;
    jr.alive = 0x1, jr.x = w8.cx, jr.y = w8.y2 + 0x14, jr.px = jr.x, jr.py = jr.y, jr.invuln = 0x64, jr.entering = 0x10, jr.bombs = Math.max(jr.bombs, this.bombBase);
  }
  ["addPower"](jr) {
    let jg = this.P,
      jz = Math.floor(jg.power);
    if (jg.power >= 0x4) {
      jg.score += 0x7d0;
      return;
    }
    jg.power = Math.min(0x4, jg.power + jr), Math.floor(jg.power) > jz && (this.popup(jg.x, jg.y - 0x18, jg.power >= 0x4 ? 'MAX' : "POWER UP", 0x2), this.snd('snd_power', 0.6, 0x4));
  }
  ["addTP"](jr) {
    let jg = this.P;
    jg.tp += jr, jg.tp >= 0x64 && (jg.tp -= 0x64, jg.bombs < 0x8 ? (jg.bombs++, this.popup(jg.x, jg.y - 0x1c, "+1 SPELL", 0x5), this.snd('snd_boost', 0.7, 0x2)) : jg.score += 0x186a0);
  }
  ["pointValue"]() {
    return 0x2710 + 0x14 * this.P.graze;
  }
  ["tick"](jr) {
    if (jr || (jr = this.inputZero), this.t++, this.state === 'idle' || this.state === 'done') return;
    let jg = this.P;
    if (this.flashT > 0x0 && this.flashT--, this.shakeT > 0x0 && this.shakeT--, this.banner) {
      let jz = this.banner;
      jz.t++, jz.t > (jz.kind === 'spell' ? 0x3b9aca00 : jz.kind === 'boss' ? jz.line ? 0x6c : 0x4c : 0x5a) ? this.banner = null : jz.line && this.typeLine(jz);
    }
    for (let jQ = this.popups.length - 0x1; jQ >= 0x0; jQ--) {
      let jH = this.popups[jQ];
      jH.t++, jH.y -= jH.big ? 0.4 : 0.8, jH.t > (jH.big ? 0x46 : 0x28) && this.popups.splice(jQ, 0x1);
    }
    this.tickPlayer(jr), this.tickBoss(), this.tickPhase(), this.tickBullets(), this.tickLasers(), this.tickShots(), this.tickItems(), this.tickParticles(), this.tickBomb();
    for (let l0 of this.markers) l0.on && ++l0.t >= l0.life && (l0.on = false);
    this.mode !== 'practice' && this.extendIdx < wM.length && jg.score >= wM[this.extendIdx] * wj[this.diff] && (this.extendIdx++, jg.lives++, this.popup(jg.x, jg.y - 0x22, "SOUL UP!", 0x1, 0x1), this.snd('snd_power', 0x1, 0x1), this.flash(0x1, 0x6)), this.bn > this.stats.maxBullets && (this.stats.maxBullets = this.bn), this.state === 'ending' && --this.endT <= 0x0 && (this.state = 'done', this.emit('done', this.result.kind));
  }
  ["tickPlayer"](jr) {
    let jg = this.P;
    if (jg.px = jg.x, jg.py = jg.y, jg.invuln > 0x0 && jg.invuln--, jg.optAng += 0.12, !jg.alive) {
      this.state === 'play' && --jg.deadT <= 0x0 && (jg.lives < 0x0 || this.mode === 'practice' ? this.finish('over') : this.respawn());
      return;
    }
    if (jg.hitT > 0x0) {
      if (jr.bomb && jg.bombs > 0x0 && this.bombT <= 0x0) jg.hitT = 0x0, this.bomb();else {
        if (--jg.hitT <= 0x0) {
          this.kill();
          return;
        }
      }
    }
    if (jg.entering > 0x0) {
      jg.entering--, jg.y -= 4.2, jg.py = jg.y + 4.2;
      return;
    }
    let jz = jr.focus ? 0x1 : 0x0;
    jg.focus = jz, jg.focusT = jz ? Math.min(0x8, jg.focusT + 0x1) : Math.max(0x0, jg.focusT - 0x1);
    let jQ = jz ? 3.6 : 0x8,
      jH = (jr.r ? 0x1 : 0x0) - (jr.l ? 0x1 : 0x0),
      l0 = (jr.d ? 0x1 : 0x0) - (jr.u ? 0x1 : 0x0);
    jH && l0 && (jH *= 0.7071, l0 *= 0.7071);
    let l1 = jH * jQ,
      l2 = l0 * jQ;
    if (jr.tdx || jr.tdy) {
      let l3 = Math.hypot(jr.tdx, jr.tdy),
        l4 = l3 > 0x14 ? 0x14 / l3 : 0x1;
      l1 += jr.tdx * l4, l2 += jr.tdy * l4;
    }
    jg.x = Math.max(w8.x + 0xa, Math.min(w8.x2 - 0xa, jg.x + l1)), jg.y = Math.max(w8.y + 0x10, Math.min(w8.y2 - 0xe, jg.y + l2)), jg.lean += ((l1 > 0.5 ? 0x1 : l1 < -0.5 ? -0x1 : 0x0) - jg.lean) * 0.35, this.bombT > 0x0 && this.bombKind === 'lancer' && (jg.x = Math.max(w8.x + 0xa, Math.min(w8.x2 - 0xa, jg.x + l1 * 0.5)), jg.y = Math.max(w8.y + 0x10, Math.min(w8.y2 - 0xe, jg.y + l2 * 0.5))), jr.bomb && this.bomb(), (jr.shoot || jr.touch) && this.state === 'play' && (jg.shotT <= 0x0 && (this.fire(jz), jg.shotT = 0x2), jg.shotT2 <= 0x0 && (jg.shotT2 = this.firePartner(jz))), jg.shotT > 0x0 && jg.shotT--, jg.shotT2 > 0x0 && jg.shotT2--;
  }
  ["optionPos"](jr, jg, jz, jQ) {
    let jH = this.P,
      l0 = jH.focusT / 0x8,
      l1 = jr & 0x1 ? 0x1 : -0x1,
      l2 = (jr >> 0x1) + 0x1,
      l3 = l1 * (0x12 + (l2 - 0x1) * 0x10),
      l4 = 0x6 - (l2 - 0x1) * 0xa,
      l5 = l1 * (0xa + (l2 - 0x1) * 0x8),
      l6 = -0xe - (l2 - 0x1) * 0x8,
      l8 = Math.sin(jH.optAng + jr) * 1.5;
    return jQ.x = jH.x + l3 + (l5 - l3) * l0, jQ.y = jH.y + l4 + (l6 - l4) * l0 + l8, jQ;
  }
  ["fire"]() {
    let jr = this.P;
    this.pshot(jr.x - 0x5, jr.y - 0x8, 0x0, -0x16, 1.6, 0x0), this.pshot(jr.x + 0x5, jr.y - 0x8, 0x0, -0x16, 1.6, 0x0), this.snd('snd_heartshot_dr_b', 0.16, 0x4);
  }
  ["firePartner"](jr) {
    let jg = this.P,
      jz = Math.min(0x4, Math.floor(jg.power)),
      jQ = jz || 0x1,
      jH = jz ? 0x1 : 0.5,
      l0 = Math.max(0.5, jz),
      l1 = this._opt || (this._opt = {
        'x': 0x0,
        'y': 0x0
      }),
      l2 = l5 => (jz ? this.optionPos(l5, jz, jr, l1) : (l1.x = jg.x, l1.y = jg.y - 0x6), l1),
      l3 = l5 => jz ? (l5 & 0x1 ? 0x1 : -0x1) * (0x1 + (l5 >> 0x1)) : 0x0,
      l4 = (l5, l6, l8, l9, lP, lw) => this.pshot(l5, l6, Math.sin(l8) * l9, -Math.cos(l8) * l9, lP, lw);
    switch (this.partner) {
      case 'susie':
        if (jr) return l4(jg.x, jg.y - 0x16, 0x0, 0x18, 1.3 * l0, 0x3), 0x2;
        for (let l5 = 0x0; l5 < jQ; l5++) {
          l2(l5);
          let l6 = l3(l5);
          l4(l1.x, l1.y - 0x6, l6 * 0.13 + Math.sign(l6) * 0.05, 0x9, 2.6 * jH, 0x2);
        }
        return this.snd('snd_smallswing', 0.18, 0x6), 0x6;
      case 'ralsei':
        if (jr) {
          for (let l8 = 0x0; l8 < jQ; l8++) l2(l8), l4(l1.x, l1.y - 0x6, 0x0, 0x12, 1.25 * jH, 0x5);
          return 0x2;
        }
        for (let l9 = 0x0; l9 < jQ; l9++) {
          l2(l9);
          let lP = l3(l9),
            lw = l4(l1.x, l1.y - 0x6, lP * 0.22 + Math.sign(lP) * 0.12, 0x8, 1.6 * jH, 0x4);
          lw >= 0x0 && (this.shome[lw] = 0.13, this.slife[lw] = 0x50);
        }
        return 0x5;
      case 'noelle':
        if (jr) {
          for (let lj = 0x0; lj < jQ; lj++) l2(lj), l4(l1.x, l1.y - 0xa, 0x0, 0x16, 2.4 * jH, 0x7);
          return this.snd('snd_icespell', 0.1, 0x8, 1.6), 0x4;
        }
        for (let ll = 0x0; ll < jQ; ll++) {
          l2(ll);
          let lD = l3(ll);
          l4(l1.x, l1.y - 0x6, lD * 0.07 + Math.sign(lD) * 0.03, 0x1a, 0.95 * jH, 0x6);
        }
        return 0x2;
      case 'kris':
        {
          if (jr) return l4(jg.x, jg.y - 0x1a, 0x0, 0x1e, 1.8 * l0, 0x9), this.snd('snd_laz', 0.12, 0x6, 1.3), 0x3;
          let lO = l4(jg.x + (this.t >> 0x2 & 0x1 ? 0xa : -0xa), jg.y - 0x1e, 0x0, 0xe, 0x3 * l0, 0x8);
          return lO >= 0x0 && (this.slife[lO] = 0x7), this.snd('snd_laz', 0.2, 0x4), 0x4;
        }
      case 'lancer':
        if (jr) return l4(jg.x, jg.y - 0x14, 0x0, 0xb, 3.6 * l0, 0xb), this.snd('snd_spearappear', 0.18, 0xa), 0xa;
        for (let lf = 0x0; lf < jQ; lf++) {
          l2(lf);
          let lR = l3(lf),
            lu = l4(l1.x, l1.y - 0x6, lR * 0.09, 0xa, 0x2 * jH, 0xa);
          lu >= 0x0 && (this.sbnc[lu] = 0x2, this.slife[lu] = 0x96);
        }
        return 0x6;
      case 'berdly':
        if (jr) {
          for (let lv = 0x0; lv < jQ; lv++) l2(lv), l4(l1.x, l1.y - 0x6, 0x0, 0x20, 1.2 * jH, 0xd);
          return 0x2;
        }
        {
          let lc = jz + 0x2,
            lZ = 0.25 + 0.08 * jz;
          for (let la = 0x0; la < lc; la++) l4(jg.x, jg.y - 0xc, -lZ + 0x2 * lZ * la / (lc - 0x1), 0x10, 0.6, 0xc);
        }
        return this.snd('snd_wing', 0.12, 0x6, 1.4), 0x3;
    }
    return 0x4;
  }
  ["pshot"](jr, jg, jz, jQ, jH, l0) {
    if (this.sfn === 0x0) return -0x1;
    let l1 = this.sfree[--this.sfn];
    return this.spos[l1] = this.sn, this.slive[this.sn++] = l1, this.sx[l1] = jr, this.sy[l1] = jg, this.spx[l1] = jr, this.spy[l1] = jg, this.svx[l1] = jz, this.svy[l1] = jQ, this.sdmg[l1] = jH, this.skind[l1] = l0, this.shome[l1] = 0x0, this.slife[l1] = -0x1, this.sbnc[l1] = 0x0, this.spass[l1] = 0x0, this.sage[l1] = 0x0, l1;
  }
  ["killShot"](jr) {
    let jg = this.spos[jr],
      jz = this.slive[--this.sn];
    this.slive[jg] = jz, this.spos[jz] = jg, this.sfree[this.sfn++] = jr;
  }
  ["tickShots"]() {
    let jr = this.boss,
      jg = jr.show && this.phase && jr.hp > 0x0,
      jz = wu[this.partner][this.pal & 0x1];
    for (let jQ = this.sn - 0x1; jQ >= 0x0; jQ--) {
      let jH = this.slive[jQ],
        l0 = this.skind[jH];
      if (this.spx[jH] = this.sx[jH], this.spy[jH] = this.sy[jH], this.sage[jH]++, this.slife[jH] >= 0x0 && --this.slife[jH] < 0x0) {
        l0 === 0x8 && this.part(wm.GLINT, this.sx[jH], this.sy[jH], 0x0, -0x1, 0x6, jz, 0x1), this.killShot(jH);
        continue;
      }
      if (this.shome[jH] > 0x0 && jg) {
        let lj = Math.atan2(this.svy[jH], this.svx[jH]),
          ll = Math.atan2(jr.y - this.sy[jH], jr.x - this.sx[jH]) - lj;
        for (; ll > Math.PI;) ll -= wn;
        for (; ll < -Math.PI;) ll += wn;
        let lD = Math.max(-this.shome[jH], Math.min(this.shome[jH], ll)),
          lO = Math.min(0xd, Math.hypot(this.svx[jH], this.svy[jH]) + 0.25);
        this.svx[jH] = Math.cos(lj + lD) * lO, this.svy[jH] = Math.sin(lj + lD) * lO;
      }
      if (this.sx[jH] += this.svx[jH], this.sy[jH] += this.svy[jH], this.sbnc[jH] > 0x0 && (this.sx[jH] < w8.x + 0x6 && this.svx[jH] < 0x0 || this.sx[jH] > w8.x2 - 0x6 && this.svx[jH] > 0x0 ? (this.svx[jH] = -this.svx[jH], this.sbnc[jH]--) : this.sy[jH] < w8.y + 0x6 && this.svy[jH] < 0x0 && (this.svy[jH] = -this.svy[jH] * 0.8, this.sbnc[jH]--)), this.sy[jH] < w8.y - 0x14 || this.sy[jH] > w8.y2 + 0x14 || this.sx[jH] < w8.x - 0x14 || this.sx[jH] > w8.x2 + 0x14) {
        this.killShot(jH);
        continue;
      }
      if (!jg) continue;
      let l1 = jr.hitR + 0x6 + wR[l0],
        l2 = this.spx[jH] - jr.x,
        l3 = this.spy[jH] - jr.y,
        l4 = this.sx[jH] - this.spx[jH],
        l5 = this.sy[jH] - this.spy[jH],
        l6 = l4 * l4 + l5 * l5,
        l8 = l6 > 0x0 ? -(l2 * l4 + l3 * l5) / l6 : 0x1;
      l8 < 0x0 ? l8 = 0x0 : l8 > 0x1 && (l8 = 0x1);
      let l9 = l2 + l4 * l8,
        lP = l3 + l5 * l8;
      if (l9 * l9 + lP * lP >= l1 * l1) continue;
      let lw = l0 === 0x6 || l0 === 0x7;
      if (!(lw && this.spass[jH])) {
        if (this.damageBoss(this.sdmg[jH])) {
          if (l0 === 0x0) {
            if ((jQ & 0x1) === 0x0) {
              let lf = this.part(wm.SPRITE, this.sx[jH], Math.max(this.sy[jH], jr.y + 0x4), 0x0, -0x1, 0xa, 0x0, 0x1, 0x0);
              lf >= 0x0 && (this.qrot[lf] = -Math.PI / 0x2);
            }
          } else ((jQ & 0x1) === 0x0 || l0 === 0x8 || l0 === 0xb) && this.burst(jr.x + l9, jr.y + lP, l0 === 0x8 ? 0x6 : 0x2, 0x4, 0x7, jz, wm.SPARK, 1.2);
          if (l0 === 0xb) {
            for (let lR = 0x0; lR < 0x6; lR++) {
              let lu = lR * wn / 0x6 + this.t * 0.3,
                lv = this.pshot(jr.x + l9, jr.y + lP, Math.cos(lu) * 0x5, Math.sin(lu) * 0x5, 0.3 * this.sdmg[jH] / 0x3, 0xe);
              lv >= 0x0 && (this.slife[lv] = 0x9);
            }
            this.part(wm.RING, jr.x + l9, jr.y + lP, 0x0, 0x0, 0xa, jz, 1.4), this.snd('snd_bomb', 0.25, 0x8, 1.4);
          }
          this.snd('snd_damage', 0.22, 0x5);
        } else (jQ & 0x3) === 0x0 && this.part(wm.GLINT, this.sx[jH], this.sy[jH], 0x0, -0x1, 0x6, 0x3, 0x1);
        if (lw) {
          this.spass[jH] = 0x1;
          continue;
        }
        this.killShot(jH);
      }
    }
  }
  ["tickBoss"]() {
    let jr = this.boss;
    if (jr.px = jr.x, jr.py = jr.y, jr.anim++, jr.dmgT > 0x0 && jr.dmgT--, jr.invuln > 0x0 && jr.invuln--, jr.mt < jr.md) {
      jr.mt++;
      let jg = jr.mt / jr.md,
        jz = 0x1 - (0x1 - jg) * (0x1 - jg);
      jr.x = jr.sx + (jr.tx - jr.sx) * jz, jr.y = jr.sy + (jr.ty - jr.sy) * jz, Math.abs(jr.tx - jr.sx) + Math.abs(jr.ty - jr.sy) > 0x28 && jr.mt & 0x1 && (jr.trail = 0x6);
    }
    jr.trail > 0x0 && jr.trail--, jr.dying > 0x0 && (jr.dying--, jr.dying % 0x6 === 0x0 && (this.burst(jr.x + this.rr(-0x1e, 0x1e), jr.y + this.rr(-0x1e, 0x1e), 0xa, 0x6, 0xe, jr.def.col || 0x0, wm.SPARK, 1.4), this.snd('snd_bomb', 0.5, 0x5), this.shake(0x3, 0x5)), jr.alpha = Math.max(0x0, jr.dying / 0x32), jr.dying === 0x0 && (jr.show = 0x0, this.part(wm.RING, jr.x, jr.y, 0x0, 0x0, 0x1e, 0x0, 0x9), this.flash(0x0, 0xe), this.shake(0x8, 0x14), this.snd('snd_badexplosion', 0x1, 0x1), this.bi + 0x1 >= (this.opts.rushEnd || this.bosses.length) || this.bosses[this.bi + 0x1].extra || this.mode === 'boss' ? this.finish('clear') : this.nextBossT = 0x46)), this.nextBossT > 0x0 && --this.nextBossT === 0x0 && this.enterBoss(this.bi + 0x1, false);
  }
  ["tickPhase"]() {
    if (this.state !== 'play') return;
    let jr = this.boss;
    if (!jr.def || jr.dying > 0x0 || !jr.show) return;
    if (this.introT > 0x0) {
      this.introT--;
      return;
    }
    if (!this.phase) {
      if (this.gapT > 0x0) {
        this.gapT--, this.gapT === 0x14 && this.pi + 0x1 < jr.def.phases.length && this.bossMove(w8.cx, w8.y + 0x64, 0x14);
        return;
      }
      this.pi + 0x1 < jr.def.phases.length && this.beginPhase(this.pi + 0x1);
      return;
    }
    if (this.declT > 0x0) {
      this.declT--, this.declT === 0x0 && this.banner && this.banner.kind === 'spell' && (this.banner.settled = 0x1);
      return;
    }
    let jg = this.phase;
    if (this.pt++, this.timer--, jg.spell && !this.cardFailed && !jg.survival && (this.cardBonus = this.cardBonusMax * (0.4 + 0.6 * Math.max(0x0, this.timer) / this.timerMax)), this.timer <= 0xa * wP && this.timer > 0x0 && this.timer % wP === 0x0 && this.snd(this.timer <= 0x5 * wP ? 'snd_bell' : 'snd_menumove', this.timer <= 0x5 * wP ? 0.35 : 0.5, 0x1), jg.tick && jg.tick(this, this.S, this.pt), jr.hp <= 0x0) {
      this.endPhase(false);
      return;
    }
    if (this.timer <= 0x0) {
      this.endPhase(true);
      return;
    }
  }
  ["tickBullets"]() {
    let jr = this.P,
      jg = jr.x,
      jz = jr.y,
      jQ = jr.px,
      jH = jr.py,
      l0 = jr.alive && jr.invuln <= 0x0 && jr.hitT <= 0x0 && this.state === 'play' && !(jr.entering > 0x0),
      l1 = jr.alive && this.state === 'play',
      l2 = 2.5,
      l3 = this.partner === 'ralsei' && jr.focus ? 0x18 : 0x12,
      l4 = 0x0;
    if (this.freezeT > 0x0) {
      for (let l5 = 0x0; l5 < this.bn; l5++) {
        let l6 = this.blive[l5];
        this.bpx[l6] = this.bx[l6], this.bpy[l6] = this.by[l6], this.bprot[l6] = this.brot[l6];
      }
      this.bn > this.peakBullets && (this.peakBullets = this.bn);
      return;
    }
    for (let l8 = this.bn - 0x1; l8 >= 0x0; l8--) {
      let l9 = this.blive[l8];
      this.bpx[l9] = this.bx[l9], this.bpy[l9] = this.by[l9], this.bprot[l9] = this.brot[l9];
      let lP = ++this.bage[l9],
        lw = wZ[this.btype[l9]];
      if (this.bdelay[l9] > 0x0 && --this.bdelay[l9] === 0x0 && (this.bflag[l9] &= ~wX), this.bevT[l9] === lP && this.bulletEvent(l9)) continue;
      let lj = this.bacc[l9],
        ll = this.bw[l9],
        lD = this.bgrav[l9];
      if (lj !== 0x0 || ll !== 0x0) {
        let lZ = this.bspd[l9] + lj;
        lj > 0x0 && lZ > this.blim[l9] ? lZ = this.blim[l9] : lj < 0x0 && lZ < this.blim[l9] && (lZ = this.blim[l9]), this.bspd[l9] = lZ;
        let la = this.bdir[l9] + ll;
        this.bdir[l9] = la, this.bvx[l9] = Math.cos(la) * lZ, this.bvy[l9] = Math.sin(la) * lZ, lw.orient === 0x1 && (this.brot[l9] = la);
      }
      lD !== 0x0 && (this.bvy[l9] += lD, this.bvy[l9] > 0x7 && (this.bvy[l9] = 0x7), lw.orient === 0x1 && (this.brot[l9] = Math.atan2(this.bvy[l9], this.bvx[l9])));
      let lO = this.bx[l9] + this.bvx[l9],
        lf = this.by[l9] + this.bvy[l9];
      if (lw.orient === 0x2 && (this.brot[l9] += lw.spin * wY), this.bbnc[l9] > 0x0) {
        let lY = false;
        lO < w8.x + 0x6 && this.bvx[l9] < 0x0 ? (this.bvx[l9] = -this.bvx[l9], lY = true) : lO > w8.x2 - 0x6 && this.bvx[l9] > 0x0 && (this.bvx[l9] = -this.bvx[l9], lY = true), lf < w8.y + 0x6 && this.bvy[l9] < 0x0 && (this.bvy[l9] = -this.bvy[l9], lY = true), lY && (this.bbnc[l9]--, this.bdir[l9] = Math.atan2(this.bvy[l9], this.bvx[l9]), lw.orient === 0x1 && (this.brot[l9] = this.bdir[l9]));
      }
      this.bx[l9] = lO, this.by[l9] = lf;
      let lR = 0x18 + lw.r * 0x2;
      if ((lO < w8.x - lR || lO > w8.x2 + lR || lf < w8.y - lR - (lP < 0x5a ? 0x78 : 0x0) || lf > w8.y2 + lR) && !(this.bflag[l9] & wJ && lP < 0x190)) {
        this.killBullet(l9);
        continue;
      }
      let lu = lO - jg,
        lv = lf - jz;
      if (lu > 0x18 + lw.r || lu < -0x18 - lw.r || lv > 0x18 + lw.r || lv < -0x18 - lw.r || this.bflag[l9] & wX) continue;
      let lc = lw.r + l2;
      if (l0) {
        let ln = this.bpx[l9] - jQ,
          lp = this.bpy[l9] - jH,
          lK = lu - ln,
          lU = lv - lp,
          lL = lK * lK + lU * lU,
          lo = lL > 0x0 ? -(ln * lK + lp * lU) / lL : 0x1;
        lo < 0x0 ? lo = 0x0 : lo > 0x1 && (lo = 0x1);
        let lA = ln + lK * lo,
          lX = lp + lU * lo;
        if (lA * lA + lX * lX < lc * lc) {
          jr.hitT = 0x4, this.snd('snd_hurt1', 0.9, 0x1), this.flash(0x1, 0x3), this.killBullet(l9);
          continue;
        }
      }
      if (l1 && !(this.bflag[l9] & wA)) {
        let lJ = l3 + lw.r;
        lu * lu + lv * lv < lJ * lJ && (this.bflag[l9] |= wA, l4++);
      }
    }
    l4 && this.grazeN(l4), this.bn > this.peakBullets && (this.peakBullets = this.bn);
  }
  ["grazeN"](jr) {
    let jg = this.P;
    jg.graze += jr, jg.score += jr * (0xc8 + 0xa * Math.floor(jg.graze / 0xa)), this.addTP(jr * (this.partner === 'ralsei' && jg.focus ? 0x4 : 2.5));
    for (let jz = 0x0; jz < Math.min(jr, 0x3); jz++) {
      let jQ = this.rand() * wn;
      this.part(wm.SQUARE, jg.x, jg.y, Math.cos(jQ) * 0x3, Math.sin(jQ) * 0x3, 0x9, 0x0, 0x1);
    }
    this.P.grazeFlash = 0x6, this.snd('snd_graze', 0.45, 0x3);
  }
  ["bulletEvent"](jr) {
    let jg = this.bevK[jr];
    this.bevT[jr] = -0x1;
    let jz = this.bevA[jr],
      jQ = this.bevB[jr],
      jH = this.bevC[jr],
      l0 = this.bevD[jr];
    switch (jg) {
      case wT.AIM:
        return this.bacc[jr] = 0x0, this.bw[jr] = 0x0, this.bSetDir(jr, this.aim(this.bx[jr], this.by[jr]) + jz, jQ), false;
      case wT.TURN:
        return this.bSetDir(jr, this.bdir[jr] + jz, jQ >= 0x0 ? jQ : this.bspd[jr]), false;
      case wT.SPEED:
        return this.bspd[jr] = jz, this.bacc[jr] = jQ, this.blim[jr] = jH, this.bSetDir(jr, this.bdir[jr]), false;
      case wT.STOP:
        return this.bacc[jr] = 0x0, this.bw[jr] = 0x0, this.bgrav[jr] = 0x0, this.bSetDir(jr, this.bdir[jr], 0x0), false;
      case wT.BURST:
      case wT.AIMBURST:
        {
          let l1 = this.bx[jr],
            l2 = this.by[jr],
            l3 = jz | 0x0,
            l4 = jg === wT.AIMBURST ? this.aim(l1, l2) : this.rand() * wn;
          return this.killBullet(jr), this.ring(l1, l2, l3, l4, jQ, jH | 0x0, l0 | 0x0), this.part(wm.RING, l1, l2, 0x0, 0x0, 0xa, l0 | 0x0, 1.2), true;
        }
      case wT.CALL:
        {
          let l5 = this.phase && this.phase.ev;
          return l5 ? l5(this, this.S, jr, jz, jQ) === true : false;
        }
    }
    return false;
  }
  ["tickLasers"]() {
    let jr = this.P,
      jg = jr.alive && jr.invuln <= 0x0 && jr.hitT <= 0x0 && this.state === 'play' && !(jr.entering > 0x0);
    for (let jz of this.lasers) {
      if (!jz.on) continue;
      jz.t++, jz.pang = jz.ang, jz.ang += jz.w, jz.follow && (jz.x = jz.follow.x + jz.fx, jz.y = jz.follow.y + jz.fy);
      let jQ = jz.warn + jz.life + jz.fade;
      if (jz.t >= jQ) {
        jz.on = false;
        continue;
      }
      if (jz.t <= jz.warn + 0x2 || jz.t > jz.warn + jz.life) continue;
      let jH = Math.cos(jz.ang),
        l0 = Math.sin(jz.ang),
        l1 = jr.x - jz.x,
        l2 = jr.y - jz.y,
        l3 = l1 * jH + l2 * l0;
      if (l3 < 0x0 || l3 > jz.len) continue;
      let l4 = Math.abs(-l1 * l0 + l2 * jH),
        l5 = jz.width * 0.5 * 0.72;
      if (jg && l4 < l5 + 1.5) {
        jr.hitT = 0x4, this.snd('snd_hurt1', 0.9, 0x1), this.flash(0x1, 0x3);
        continue;
      }
      jr.alive && l4 < l5 + 0x14 && jz.grazeT <= 0x0 && (jz.grazeT = 0x6, this.grazeN(0x1)), jz.grazeT > 0x0 && jz.grazeT--;
    }
  }
  ["tickItems"]() {
    let jr = this.P,
      jg = jr.alive && (jr.y < w9 || this.itemsHomeT > 0x0 || this.bombT > 0x0);
    this.itemsHomeT > 0x0 && this.itemsHomeT--;
    for (let jz = this.inn - 0x1; jz >= 0x0; jz--) {
      let jQ = this.ilive[jz];
      this.ipx[jQ] = this.ix[jQ], this.ipy[jQ] = this.iy[jQ], this.iage[jQ]++;
      let jH = this.ikind[jQ];
      if (jr.alive && (this.ihome[jQ] || jg)) {
        this.ihome[jQ] || (this.ihome[jQ] = 0x2);
        let l3 = jr.x - this.ix[jQ],
          l4 = jr.y - this.iy[jQ],
          l5 = Math.hypot(l3, l4) || 0x1,
          l6 = jH === 0x2 ? Math.min(0xe, 0x3 + this.iage[jQ] * 0.6) : 0xd;
        this.ix[jQ] += l3 / l5 * Math.min(l6, l5), this.iy[jQ] += l4 / l5 * Math.min(l6, l5);
      } else {
        if (jH === 0x2 ? (this.iy[jQ] += this.ivy[jQ], this.ivy[jQ] = Math.min(this.ivy[jQ] + 0.1, 0x2)) : (this.ivx[jQ] *= 0.92, this.ivy[jQ] = Math.min(this.ivy[jQ] + 0.2, 2.8), this.ix[jQ] += this.ivx[jQ], this.iy[jQ] += this.ivy[jQ]), this.iy[jQ] > w8.y2 + 0x10) {
          this.killItem(jQ);
          continue;
        }
      }
      let l0 = this.ix[jQ] - jr.x,
        l1 = this.iy[jQ] - jr.y,
        l2 = l0 * l0 + l1 * l1;
      jr.alive && l2 < 0x640 && !this.ihome[jQ] && (this.ihome[jQ] = 0x1), jr.alive && l2 < 0x190 && (this.collect(jQ, jH), this.killItem(jQ));
    }
  }
  ["collect"](jr, jg) {
    let jz = this.P;
    if (jg === 0x0) this.addPower(0.05), jz.score += 0x64, this.snd('snd_coin', 0.14, 0x3, 1.3);else {
      if (jg === 0x3) this.addPower(0.25), jz.score += 0x1f4, this.snd('snd_coin', 0.2, 0x3, 1.1);else {
        if (jg === 0x1) {
          let jQ = this.ihome[jr] === 0x2 || this.iy[jr] < w9,
            jH = jQ ? this.pointValue() : Math.round(this.pointValue() * Math.max(0.2, 0x1 - (this.iy[jr] - w9) / (w8.y2 - w9)) / 0xa) * 0xa;
          jz.score += jH, (jQ || jH > 0xfa0) && this.popup(this.ix[jr], this.iy[jr] - 0x8, String(jH), jQ ? 0x3 : 0x0), this.snd('snd_coin', 0.14, 0x3, 1.5);
        } else jg === 0x2 && (jz.score += 0x64 + 0xa * Math.floor(jz.graze / 0x14));
      }
    }
  }
  ["tickParticles"]() {
    for (let jr = this.qn - 0x1; jr >= 0x0; jr--) {
      let jg = this.qlive[jr];
      if (this.qpx[jg] = this.qx[jg], this.qpy[jg] = this.qy[jg], --this.qlife[jg] <= 0x0) {
        let jQ = this.qpos[jg],
          jH = this.qlive[--this.qn];
        this.qlive[jQ] = jH, this.qpos[jH] = jQ, this.qfree[this.qfn++] = jg;
        continue;
      }
      this.qx[jg] += this.qvx[jg], this.qy[jg] += this.qvy[jg];
      let jz = this.qdrag[jg];
      this.qvx[jg] *= jz, this.qvy[jg] *= jz, this.qkind[jg] === wm.SHARD && (this.qvy[jg] += 0.25), this.qkind[jg] === wm.FLAKE && (this.qvy[jg] += 0.03, this.qx[jg] += Math.sin((this.t + jg) * 0.1) * 0.6), this.qrot[jg] += this.qvr[jg];
    }
  }
  ["tickBomb"]() {
    if (this.bombT <= 0x0) return;
    let jr = this.bombKind,
      jg = this.P,
      jz = this.boss,
      jQ = this.bombMax - this.bombT;
    this.bombT--;
    let jH = jz.show && this.phase && jz.hp > 0x0;
    if (jr === 'susie') {
      let l0 = jg.y - jQ * 0xc;
      this.bombY = l0, this.bombX = jg.x, this.clearBullets(false, false, jg.x, l0, 0x5a), jQ % 0x3 === 0x0 && this.part(wm.SPRITE, jg.x + this.rr(-0x1e, 0x1e), l0 + this.rr(-0xa, 0x1e), this.rr(-0x1, 0x1), -0x2, 0xc, 0x0, 0x1, 0x1), jH && Math.abs(jz.x - jg.x) < 0x6e && l0 < jz.y + 0x3c && l0 > jz.y - 0x78 && this.damageBossBomb(3.2) && jQ % 0x4 === 0x0 && (this.snd('snd_rudebuster_hit', 0.8, 0x6), this.shake(0x4, 0x6), this.burst(jz.x, jz.y, 0x6, 0x8, 0xa, 0x7, wm.SPARK, 1.4)), this.bombT === 0x0 && (this.bombY = 0x0), l0 < w8.y - 0x3c && jQ % 0xa === 0x0 && this.clearBullets(false, true);
    } else {
      if (jr === 'noelle') {
        if (jQ % 0x2 === 0x0) {
          let l1 = this.part(wm.FLAKE, this.rr(w8.x, w8.x2), w8.y - 0xa, this.rr(-0x1, 0x1), this.rr(0x2, 0x5), 0x3c, 0x5, this.rr(0.6, 1.4));
          l1 >= 0x0 && (this.qvr[l1] = 0.05);
        }
        jQ % 0x6 === 0x0 && this.clearBullets(true, true), jH && jQ > 0x14 && this.damageBossBomb(1.8), jQ === 0x18 && (this.snd('snd_icespell', 0.8, 0x1), this.shake(0x3, 0x10));
      } else {
        if (jr === 'kris') {
          if (this.freezeT = this.bombT, jH && jQ > 0x12 && jQ < 0x54 && (this.damageBossBomb(1.2), jQ % 0x8 === 0x2)) {
            let l2 = this.part(wm.SPRITE, jz.x + this.rr(-0x1a, 0x1a), jz.y + this.rr(-0x14, 0x14), 0x0, 0x0, 0xa, 0x0, 0x1, 0x3);
            l2 >= 0x0 && (this.qdrag[l2] = 0x1), this.snd('snd_laz', 0.5, 0x4), this.shake(0x2, 0x4);
          }
          this.bombT === 0x0 && (this.clearBullets(true, true), this.snd('snd_glassbreak', 0.5, 0x1), this.flash(0x6, 0x8));
        } else {
          if (jr === 'lancer') {
            let l3 = this.bike;
            l3.px = l3.x, l3.py = l3.y;
            let l4 = jQ < 0x1a || jQ >= 0x2e && jQ < 0x42;
            l3.vy = l4 ? Math.max(-0xf, l3.vy - 1.6) : Math.min(0xf, l3.vy + 1.6), l3.y = Math.max(w8.y + 0x1e, Math.min(w8.y2 + 0x14, l3.y + l3.vy));
            let l5 = jH ? jz.x : jg.x;
            l3.x += Math.max(-0x6, Math.min(0x6, (l5 - l3.x) * 0.12)), this.clearBullets(true, false, l3.x, l3.y, 0x34), jQ % 0x3 === 0x0 && this.part(wm.SPARK, l3.x + this.rr(-0xc, 0xc), l3.y + 0x1a, this.rr(-0x1, 0x1), 0x3, 0xa, 0x7, 1.2), jH && Math.abs(jz.x - l3.x) < 0x40 && Math.abs(jz.y - l3.y) < 0x40 && this.damageBossBomb(2.6) && jQ % 0x4 === 0x0 && (this.snd('snd_hitcar', 0.6, 0x6), this.shake(0x4, 0x6), this.burst(jz.x, jz.y, 0x6, 0x8, 0xa, 0x7, wm.SPARK, 1.4)), jQ === 0x28 && this.snd('snd_carhonk', 0.6, 0x1), this.bombT === 0x0 && (l3.on = 0x0);
          } else {
            if (jr === 'berdly') {
              for (let l6 = 0x0; l6 < 0x3; l6++) {
                let l8 = this.storm[l6];
                if (!l8.on || (l8.px = l8.x, l8.py = l8.y, jQ < l6 * 0x6)) continue;
                l8.y -= 0x6;
                let l9 = jH ? jz.x + (l6 - 0x1) * 0x1e : l8.x;
                if (l8.x += Math.max(-0x3, Math.min(0x3, (l9 - l8.x) * 0.06)) + Math.sin((jQ + l6 * 0x9) * 0.3) * 0x2, this.clearBullets(true, false, l8.x, l8.y, 0x30), jQ % 0x4 === l6) {
                  let lP = this.part(wm.SPRITE, l8.x + this.rr(-0x1e, 0x1e), l8.y + this.rr(-0x14, 0x1e), this.rr(-0x2, 0x2), this.rr(-0x3, -0x1), 0x12, 0x0, 0x1, 0x4);
                  lP >= 0x0 && (this.qvr[lP] = 0.2);
                }
                jH && Math.abs(jz.x - l8.x) < 0x3c && Math.abs(jz.y - l8.y) < 0x40 && this.damageBossBomb(1.2), l8.y < w8.y - 0x3c && (l8.y = w8.y2 + 0x28);
              }
              if (this.bombT === 0x0) {
                for (let lw of this.storm) lw.on = 0x0;
              }
            } else {
              if (jQ % 0x4 === 0x0 && this.clearBullets(true, true), jQ % 0x5 === 0x0) {
                let lj = this.part(wm.SPRITE, jg.x + this.rr(-0x78, 0x78), jg.y + this.rr(-0xa0, 0x14), 0x0, -1.2, 0x18, 0x0, 0x1, 0x2);
                lj >= 0x0 && (this.qdrag[lj] = 0x1);
              }
              jH && jQ > 0xc && this.damageBossBomb(0.9);
            }
          }
        }
      }
    }
  }
  ["damageBossBomb"](jr) {
    let jg = this.boss;
    return !this.phase || this.declT > 0x0 || this.phase.survival || jg.hp <= 0x0 ? false : (jg.hp -= jr * this.bossDmgMult(), jg.dmgT = 0x2, this.P.score += Math.round(jr * 0xa) * 0xa, true);
  }
  ["counts"]() {
    return {
      'bullets': this.bn,
      'shots': this.sn,
      'items': this.inn,
      'parts': this.qn,
      'lasers': this.lasers.filter(jr => jr.on).length
    };
  }
};
v(wI, 'Sim');
var wb = wI,
  wE = Math.PI * 0x2,
  wN = Math.PI / 0xb4,
  wG = 0x2,
  wy = "#00c000",
  wq = new Map();
function wS(jr, jg) {
  if (typeof document > 'u') return new OffscreenCanvas(jr, jg);
  let jz = document.createElement('canvas');
  return jz.width = jr, jz.height = jg, jz;
}
v(wS, 'mk');
var wF = 0x400,
  wd = 0xc,
  wB = [],
  wh = 0x0,
  wk = 0x0,
  wV = 0x0;
function wC(jr) {
  let jg = jr.width,
    jz = jr.height;
  if (jg > wF || jz > wF) return false;
  if ((!wB.length || wh + jg + 0x2 > wF) && (wh = 0x0, wk += wV + 0x2, wV = 0x0), !wB.length || wk + jz + 0x2 > wF) {
    if (wB.length >= wd) return false;
    wB.push(wS(wF, wF)), wh = 0x0, wk = 0x0, wV = 0x0;
  }
  let jQ = wB[wB.length - 0x1],
    jH = jQ.getContext('2d');
  jH.imageSmoothingEnabled = false, jH.drawImage(jr, wh, wk);
  let l0 = {
    'pg': jQ,
    'sx': wh,
    'sy': wk,
    'sw': jg,
    'sh': jz
  };
  return wh += jg + 0x2, jz > wV && (wV = jz), l0;
}
v(wC, 'pack');
function wr(jr, jg) {
  let jz = wC(jg);
  return jz ? (jr.pg = jz.pg, jr.sx = jz.sx, jr.sy = jz.sy, jr.sw = jz.sw, jr.sh = jz.sh) : (jr.pg = jg, jr.sx = 0x0, jr.sy = 0x0, jr.sw = jg.width, jr.sh = jg.height), jr;
}
v(wr, 'packInto');
var wg = new Map();
R.scBlank === void 0x0 && (R.scBlank = true), R.scGridFill === void 0x0 && (R.scGridFill = true);
var wz = [];
function wQ(jr, jg, jz, jQ, jH, l0) {
  let l1 = wq.get(l0);
  if (l1 !== void 0x0) return l1;
  let l2 = f[jr],
    l3 = l2 ? Math.max(0x1, l2.frames) : 0x1,
    l4 = l2 && l2.img && l2.img[(jg % l3 + l3) % l3];
  if (!l4 || !l4.width) return null;
  let l5 = null;
  if (!l4.__scOk) {
    if (R.scBlank) l4.__pend ? l5 = {
      'img': l4,
      'kids': 0x0
    } : l4.__scOk = 0x1;else {
      let lP = wg.get(l0);
      if (lP !== void 0x0 && jP() < lP) return null;
      if (j2(l4)) return wg.set(l0, jP() + 0xfa), null;
      wg.delete(l0), l4.__scOk = 0x1;
    }
  }
  let l6 = Math.max(0x1, Math.ceil(l2.w * jz * wG)),
    l8 = Math.max(0x1, Math.ceil(l2.h * jz * wG)),
    l9 = wS(l6, l8);
  return l1 = {
    'cv': l9,
    'w': l6 / wG,
    'h': l8 / wG,
    'ox': (jH ? l2.w / 0x2 : l2.ox) * jz,
    'oy': (jH ? l2.h / 0x2 : l2.oy) * jz,
    'pg': null,
    'sx': 0x0,
    'sy': 0x0,
    'sw': l6,
    'sh': l8,
    'unv': l5
  }, l5 && (l5.key = l0, l5.dw = l2.w * jz * wG, l5.dh = l2.h * jz * wG, l5.col = jQ), wH(l1, l4, l2.w * jz * wG, l2.h * jz * wG, jQ), l0.charCodeAt(0x0) === 0x62 ? wr(l1, l9) : l1.pg = l9, l5 && wz.push(l1), wq.set(l0, l1), l1;
}
v(wQ, 'vis');
function wH(jr, jg, jz, jQ, jH) {
  let l0 = jr.cv.getContext('2d'),
    l1 = jr.cv.width,
    l2 = jr.cv.height;
  l0.imageSmoothingEnabled = false, l0.drawImage(jg, 0x0, 0x0, jz, jQ), jH >= 0x64 ? (l0.globalCompositeOperation = "source-in", l0.fillStyle = wc[jH - 0x64], l0.fillRect(0x0, 0x0, l1, l2)) : jH && (l0.globalCompositeOperation = 'multiply', l0.fillStyle = wc[jH], l0.fillRect(0x0, 0x0, l1, l2), l0.globalCompositeOperation = "destination-in", l0.drawImage(jg, 0x0, 0x0, jz, jQ));
}
v(wH, 'paint');
function j0(jr) {
  let jg = jr.unv;
  jr.unv = null, jg.img.__scOk = 0x1;
  let jz = jr.cv.getContext('2d');
  if (jz.clearRect(0x0, 0x0, jr.cv.width, jr.cv.height), jz.globalCompositeOperation = "source-over", wH(jr, jg.img, jg.dw, jg.dh, jg.col), jr.pg !== jr.cv) {
    let jQ = jr.pg.getContext('2d');
    jQ.clearRect(jr.sx, jr.sy, jr.sw, jr.sh), jQ.drawImage(jr.cv, jr.sx, jr.sy);
  }
  jg.kids && (j8.length = 0x0);
}
v(j0, 'heal');
function j1() {
  if (wz.length) for (let jr = 0x0; jr < wz.length; jr++) {
    let jg = wz[jr];
    jg.unv.img.__pend || (j0(jg), wz.splice(jr, 0x1), jr--);
  }
}
v(j1, 'pump');
function j2(jr) {
  try {
    let jg = jr.getContext && jr.getContext('2d');
    if (!jg) return false;
    let jz = jg.getImageData(0x0, 0x0, jr.width, jr.height).data;
    for (let jQ = 0x3; jQ < jz.length; jQ += 0x4) if (jz[jQ]) return false;
    return true;
  } catch {
    return false;
  }
}
v(j2, 'blank');
var j3 = [];
function j4(jr, jg, jz) {
  let jQ = j3[jr];
  jQ || (jQ = j3[jr] = []);
  let jH = jQ[jg];
  jH || (jH = jQ[jg] = []);
  let l0 = jH[jz];
  if (l0 == null) {
    let l1 = wZ[jr];
    l0 = wQ(l1.spr, l1.frame + jz, l1.scale, jg, l1.center, 'b' + jr + ':' + jg + ':' + jz), jH[jz] = l0;
  }
  return l0;
}
v(j4, 'tv');
var j5 = 0x30,
  j6 = wE / j5,
  j7 = 2.5,
  j8 = [],
  j9 = 0x0,
  jP = v(() => typeof performance < 'u' ? performance.now() : Date.now(), 'clock');
function jw(jr, jg, jz, jQ) {
  if (jQ - jQ !== 0x0) return null;
  let jH = Math.round(jQ / j6) % j5;
  jH < 0x0 && (jH += j5);
  let l0 = ((jr * 0x10 + jg) * 0x10 + jz) * j5 + jH,
    l1 = j8[l0];
  if (l1 !== void 0x0) return l1;
  if (jP() > j9) return null;
  let l2 = j4(jr, jg, jz);
  if (!l2) return null;
  l2.unv && l2.unv.kids++;
  let l3 = jH * j6,
    l4 = Math.abs(Math.cos(l3)),
    l5 = Math.abs(Math.sin(l3)),
    l6 = Math.max(l2.ox, l2.w - l2.ox),
    l8 = Math.max(l2.oy, l2.h - l2.oy),
    l9 = Math.ceil(l6 * l4 + l8 * l5 > l6 * l5 + l8 * l4 ? l6 * l4 + l8 * l5 : l6 * l5 + l8 * l4) + 0x1,
    lP = l9 * 0x2 * wG,
    lw = wS(lP, lP),
    lj = lw.getContext('2d');
  return lj.imageSmoothingEnabled = false, lj.translate(lP / 0x2, lP / 0x2), lj.rotate(l3), lj.drawImage(l2.cv, -l2.ox * wG, -l2.oy * wG, l2.w * wG, l2.h * wG), l1 = wr({
    'cv': null,
    'w': l9 * 0x2,
    'h': l9 * 0x2,
    'ox': l9,
    'oy': l9,
    'pg': null,
    'sx': 0x0,
    'sy': 0x0,
    'sw': lP,
    'sh': lP,
    'unv': null
  }, lw), j8[l0] = l1, l1;
}
v(jw, 'tvr');
var jj = new Map();
function jl(jr, jg, jz, jQ = 0x0, jH = true) {
  let l0 = jj.get(jr);
  l0 === void 0x0 && (l0 = new Map(), jj.set(jr, l0));
  let l1 = ((jg * 0x100 + jQ) * 0x2 + (jH ? 0x1 : 0x0)) * 0x2000 + Math.round(jz * 0x64),
    l2 = l0.get(l1);
  return l2 !== void 0x0 || (l2 = wQ(jr, jg, jz, jQ, jH, jr + ':' + jg + ':' + jz + ':' + jQ + ':' + (jH ? 0x1 : 0x0)), l2 && l0.set(l1, l2)), l2;
}
v(jl, 'sv');
var jD = null;
function jM() {
  if (jD) return jD;
  let jr = 0x40;
  jD = wS(jr, jr);
  let jg = jD.getContext('2d'),
    jz = jg.createRadialGradient(jr / 0x2, jr / 0x2, 0x0, jr / 0x2, jr / 0x2, jr / 0x2);
  return jz.addColorStop(0x0, "rgba(255,255,255,0.55)"), jz.addColorStop(0.5, "rgba(255,255,255,0.18)"), jz.addColorStop(0x1, "rgba(255,255,255,0)"), jg.fillStyle = jz, jg.fillRect(0x0, 0x0, jr, jr), jD;
}
v(jM, 'halo');
function jO(jr, jg, jz, jQ, jH = "#ffffff", l0 = 'fnt_main', l1 = 'left', l2 = 0x1, l3 = false) {
  jr.draw_set_font(l0), jr.draw_set_halign(l1), jr.draw_set_alpha(l2), l3 && jr.draw_text(jg + 0x1, jz + 0x1, jQ, "#000000"), jr.draw_text(jg, jz, jQ, jH), jr.draw_set_halign('left'), jr.draw_set_alpha(0x1);
}
v(jO, 'text');
function jf(jr, jg, jz = 'fnt_main') {
  return jr.string_width(jg, jz);
}
v(jf, 'tw');
function jR(jr, jg, jz, jQ, jH, l0 = 0x0) {
  let l1 = Math.max(0x0, jQ - jg - 0x3f),
    l2 = Math.max(0x0, jH - jz - 0x3f),
    l3 = u.white;
  l1 > 0x0 && (jr.draw_sprite_ext('spr_textbox_top', 0x0, jg + 0x20, jz, l1, 0x2, 0x0, l3, 0x1), jr.draw_sprite_ext('spr_textbox_top', 0x0, jg + 0x20, jH + 0x1, l1, -0x2, 0x0, l3, 0x1)), l2 > 0x0 && (jr.draw_sprite_ext('spr_textbox_left', 0x0, jQ + 0x1, jz + 0x20, -0x2, l2, 0x0, l3, 0x1), jr.draw_sprite_ext('spr_textbox_left', 0x0, jg, jz + 0x20, 0x2, l2, 0x0, l3, 0x1)), jr.draw_sprite_ext('spr_textbox_topleft', l0, jg, jz, 0x2, 0x2, 0x0, l3, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l0, jQ + 0x1, jz, -0x2, 0x2, 0x0, l3, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l0, jg, jH + 0x1, 0x2, -0x2, 0x0, l3, 0x1), jr.draw_sprite_ext('spr_textbox_topleft', l0, jQ + 0x1, jH + 0x1, -0x2, -0x2, 0x0, l3, 0x1);
}
v(jR, 'darkbox');
var ju = {
  'jevil': {
    'a': "#3b0f5c",
    'b': "#1c0930",
    'motif': 'spr_bomb_spade',
    'mcol': 0x7
  },
  'queen': {
    'a': "#0c3d58",
    'b': "#07202f",
    'motif': 'spr_queen_winebubble',
    'mcol': 0x5
  },
  'sneo': {
    'a': "#524000",
    'b': "#3a0a2c",
    'motif': 'spr_sneo_heart',
    'mcol': 0x0
  },
  'tenna': {
    'a': "#56101c",
    'b': "#2c0810",
    'motif': 'spr_tenna_allstars_star',
    'mcol': 0x3
  },
  'knight': {
    'a': "#2a2a2a",
    'b': "#101010",
    'motif': 'spr_knight_bullet_star',
    'mcol': 0x0
  },
  'gerson': {
    'a': "#1d4a2a",
    'b': "#0c2414",
    'motif': "spr_gerson_red_hammer@ch4",
    'mcol': 0x0
  },
  'titan': {
    'a': "#24243e",
    'b': "#0a0a16",
    'motif': "spr_titan_star_centered@ch4",
    'mcol': 0x0
  },
  'aqua': {
    'a': "#0c4a50",
    'b': "#062428",
    'motif': "spr_attack_knifechain_spin@ch5",
    'mcol': 0x5
  },
  'pink': {
    'a': "#5a1848",
    'b': "#2c0a24",
    'motif': "spr_pinkstar@ch5",
    'mcol': 0x0
  },
  'flowery': {
    'a': "#5a3a08",
    'b': "#2c1a04",
    'motif': "spr_flowery_circle@ch5",
    'mcol': 0x0
  },
  'knight_ex': {
    'a': "#3a0c0c",
    'b': "#140404",
    'motif': 'spr_knight_bullet_star_hard_a',
    'mcol': 0x1
  }
};
function jv(jr, jg, jz, jQ) {
  let jH = jz.boss.def,
    l0 = ju[jH && jH.bg || 'jevil'];
  jr.fillStyle = "#000000", jr.fillRect(w8.x, w8.y, w8.w, w8.h);
  let l1 = jz.phase && jz.phase.spell,
    l2 = jQ.time;
  jr.lineWidth = 0x2;
  let l3 = jr.fillStyle;
  for (let l4 = 0x0; l4 < 0x2; l4++) {
    let l5 = l2 * (l4 ? 0.5 : 0.9) % 0x32;
    if (jr.strokeStyle = l4 ? l0.b : l0.a, jr.globalAlpha = l1 ? 0.45 : 0.8, jr.beginPath(), R.scGridFill) {
      jr.fillStyle = l4 ? l0.b : l0.a;
      for (let l6 = w8.x - 0x32 + l5 + l4 * 0x19; l6 < w8.x2 + 0x32; l6 += 0x32) jr.rect(l6 - 0x1, w8.y, 0x2, w8.y2 - w8.y);
      for (let l8 = w8.y - 0x32 + l5 + l4 * 0x19; l8 < w8.y2 + 0x32; l8 += 0x32) jr.rect(w8.x, l8 - 0x1, w8.x2 - w8.x, 0x2);
      jr.fill();
      continue;
    }
    for (let l9 = w8.x - 0x32 + l5 + l4 * 0x19; l9 < w8.x2 + 0x32; l9 += 0x32) jr.moveTo(l9, w8.y), jr.lineTo(l9, w8.y2);
    for (let lP = w8.y - 0x32 + l5 + l4 * 0x19; lP < w8.y2 + 0x32; lP += 0x32) jr.moveTo(w8.x, lP), jr.lineTo(w8.x2, lP);
    jr.stroke();
  }
  if (jr.fillStyle = l3, jr.globalAlpha = 0x1, l1 && jz.declT < 0x2c) {
    let lw = Math.min(0x1, (0x30 - jz.declT) / 0x14),
      lj = jl(l0.motif, 0x0, 0x6, l0.mcol);
    if (lj) {
      let ll = jQ.M,
        lD = l2 * 0.004;
      jr.globalAlpha = 0.06 * lw, jr.globalCompositeOperation = 'lighter', jr.setTransform(ll.a * Math.cos(lD), ll.a * Math.sin(lD), -ll.a * Math.sin(lD), ll.a * Math.cos(lD), ll.e + ll.a * w8.cx, ll.f + ll.a * (w8.y + 0xbe)), jr.drawImage(lj.cv, -lj.w / 0x2, -lj.h / 0x2, lj.w, lj.h), jr.setTransform(ll), jr.globalAlpha = 0x1, jr.globalCompositeOperation = "source-over";
    }
  }
}
v(jv, 'drawBackground');
function jc(jr, jg, jz, jQ) {
  let jH = jQ.M,
    l0 = jH.a,
    l1 = jM(),
    l2 = false,
    l3 = jg.bn,
    l4 = jg.blive,
    l5 = jg.freezeT > 0x0 ? 0.5 : 0x1;
  for (let l6 = 0x0; l6 < l3; l6++) {
    let l8 = l4[l6],
      l9 = wZ[jg.btype[l8]],
      lP = jg.bage[l8],
      lw = l9.frames > 0x1 ? (lP / l9.anim | 0x0) % l9.frames : 0x0,
      lj = j4(jg.btype[l8], jg.bcol[l8], lw);
    if (!lj) continue;
    let ll = jg.bpx[l8] + (jg.bx[l8] - jg.bpx[l8]) * jz,
      lD = jg.bpy[l8] + (jg.by[l8] - jg.bpy[l8]) * jz;
    if (ll < w8.x - 0x3c || ll > w8.x2 + 0x3c || lD < w8.y - 0x3c || lD > w8.y2 + 0x3c) continue;
    let lO = 0x1,
      lf = 0x1;
    if (jg.bflag[l8] & 0x4 ? lO = lP & 0x2 ? 0.35 : 0.6 : lP < 0x9 && (lO = 0.22 + lP * 0.087, lP < 0x4 && (lf = 1.6 - lP * 0.15)), lO *= l5, l9.halo) {
      l2 && (jr.setTransform(jH), l2 = false), jr.globalAlpha = 0.9 * lO;
      let lu = l9.r * 3.2 * lf;
      jr.drawImage(l1, ll - lu, lD - lu, lu * 0x2, lu * 0x2);
    }
    jr.globalAlpha = lO;
    let lR = lj;
    if (lf === 0x1 && l9.orient) {
      let lv = jg.brot[l8] - jg.bprot[l8];
      (lv > Math.PI || lv < -Math.PI) && (lv = 0x0), lR = jw(jg.btype[l8], jg.bcol[l8], lw, jg.bprot[l8] + lv * jz + l9.face * wN);
    }
    if (lf === 0x1 && lR) l2 && (jr.setTransform(jH), l2 = false), jr.drawImage(lR.pg, lR.sx, lR.sy, lR.sw, lR.sh, Math.round((ll - lR.ox) * wG) / wG, Math.round((lD - lR.oy) * wG) / wG, lR.w, lR.h);else {
      let lc = l9.orient ? jg.bprot[l8] + (jg.brot[l8] - jg.bprot[l8]) * jz + l9.face * wN : 0x0,
        lZ = Math.cos(lc) * l0 * lf,
        la = Math.sin(lc) * l0 * lf;
      jr.setTransform(lZ, la, -la, lZ, jH.e + l0 * ll, jH.f + l0 * lD), l2 = true, jr.drawImage(lj.cv, -lj.ox, -lj.oy, lj.w, lj.h);
    }
  }
  l2 && jr.setTransform(jH), jr.globalAlpha = 0x1;
}
v(jc, 'drawBullets');
var jZ = [0x6, 0x6],
  je = [];
function ja(jr, jg, jz) {
  let jQ = jz.M;
  for (let jH of jg.lasers) {
    if (!jH.on) continue;
    let l0 = wc[jH.col],
      l1 = jH.ang,
      l2 = jH.x + Math.cos(l1) * jH.len,
      l3 = jH.y + Math.sin(l1) * jH.len;
    if (jr.lineCap = 'butt', jH.t < jH.warn) {
      let l4 = jH.t / jH.warn;
      if (jr.globalAlpha = 0.25 + 0.5 * l4 * (jH.t >> 0x1 & 0x1 ? 0x1 : 0.7), jr.strokeStyle = l0, jr.lineWidth = 0x1 + (0x1 - l4) * 0x2, jr.beginPath(), jr.moveTo(jH.x, jH.y), jr.lineTo(l2, l3), jr.stroke(), jH.w !== 0x0) {
        let l5 = l1 + jH.w * (jH.warn - jH.t + jH.life);
        jr.globalAlpha *= 0.45, jr.setLineDash(jZ), jr.beginPath(), jr.moveTo(jH.x, jH.y), jr.lineTo(jH.x + Math.cos(l5) * jH.len, jH.y + Math.sin(l5) * jH.len), jr.stroke(), jr.setLineDash(je);
      }
    } else {
      let l6 = jH.t - jH.warn,
        l8 = jH.width;
      l6 < 0x3 ? l8 *= (l6 + 0x1) / 0x4 : l6 > jH.life && (l8 *= Math.max(0x0, 0x1 - (l6 - jH.life) / jH.fade));
      let l9 = 0x1 + 0.08 * Math.sin(jz.time * 0.9 + jH.x);
      jr.globalAlpha = 0.35, jr.strokeStyle = l0, jr.lineWidth = l8 * 1.4 * l9, jr.beginPath(), jr.moveTo(jH.x, jH.y), jr.lineTo(l2, l3), jr.stroke(), jr.globalAlpha = 0.9, jr.lineWidth = l8 * 0.8, jr.beginPath(), jr.moveTo(jH.x, jH.y), jr.lineTo(l2, l3), jr.stroke(), jr.globalAlpha = 0x1, jr.strokeStyle = "#ffffff", jr.lineWidth = Math.max(0x1, l8 * 0.35), jr.beginPath(), jr.moveTo(jH.x, jH.y), jr.lineTo(l2, l3), jr.stroke(), jr.fillStyle = "#ffffff", jr.beginPath(), jr.arc(jH.x, jH.y, l8 * 0.6, 0x0, wE), jr.fill();
    }
  }
  jr.globalAlpha = 0x1, jr.setTransform(jQ);
}
v(ja, 'drawLasers');
function jY(jr, jg, jz) {
  for (let jQ = 0x0; jQ < jg.inn; jQ++) {
    let jH = jg.ilive[jQ],
      l0 = jg.ikind[jH],
      l1 = jg.ipx[jH] + (jg.ix[jH] - jg.ipx[jH]) * jz,
      l2 = jg.ipy[jH] + (jg.iy[jH] - jg.ipy[jH]) * jz,
      l3;
    if (l0 === 0x0 ? l3 = jl('spr_board_candy', 0x0, 0.8, 0x1) : l0 === 0x3 ? l3 = jl('spr_board_candy', 0x0, 1.35, 0x1) : l0 === 0x1 ? l3 = jl('spr_sparestar', 0x0, 0.8, 0x0) : l3 = jl('spr_stardrop', 0x0, 0.55, 0x3), !!l3) {
      if (l2 < w8.y - 0x4) {
        jr.globalAlpha = 0.7, jr.drawImage(l3.cv, l1 - l3.ox * 0.7, w8.y + 0x2, l3.w * 0.7, l3.h * 0.7), jr.globalAlpha = 0x1;
        continue;
      }
      l0 === 0x2 && (jr.globalAlpha = 0.8), jr.drawImage(l3.cv, l1 - l3.ox, l2 - l3.oy, l3.w, l3.h), jr.globalAlpha = 0x1;
    }
  }
}
v(jY, 'drawItems');
function jn(jr, jg, jz, jQ, jH) {
  let l0 = jH.M,
    l1 = l0.a;
  for (let l2 = 0x0; l2 < jz.qn; l2++) {
    let l3 = jz.qlive[l2],
      l4 = jz.qpx[l3] + (jz.qx[l3] - jz.qpx[l3]) * jQ,
      l5 = jz.qpy[l3] + (jz.qy[l3] - jz.qpy[l3]) * jQ,
      l6 = jz.qlife[l3],
      l8 = jz.qmax[l3],
      l9 = l6 / l8,
      lP = jz.qkind[l3],
      lw = wc[jz.qcol[l3]],
      lj = jz.qsize[l3];
    if (lP === wm.SPARK) {
      jr.globalAlpha = Math.min(0x1, l9 * 1.6), jr.fillStyle = lw;
      let ll = 0x2 * lj;
      jr.fillRect(l4 - ll / 0x2, l5 - ll / 0x2, ll, ll);
    } else {
      if (lP === wm.SQUARE) jr.globalAlpha = l9, jr.fillStyle = "#ffffff", jr.fillRect(l4 - 1.5, l5 - 1.5, 0x3, 0x3);else {
        if (lP === wm.RING) jr.globalAlpha = l9 * 0.9, jr.strokeStyle = lw, jr.lineWidth = 0x2 + 0x2 * l9, jr.beginPath(), jr.arc(l4, l5, (0x1 - l9) * 0x1e * lj + 0x4, 0x0, wE), jr.stroke();else {
          if (lP === wm.GLINT) {
            let lD = jl('spr_tinysparkle', 0x0, 0.7, jz.qcol[l3]);
            lD && (jr.globalAlpha = l9, jr.drawImage(lD.cv, l4 - lD.ox, l5 - lD.oy, lD.w, lD.h));
          } else {
            if (lP === wm.SHARD) {
              let lO = jl('spr_heartshards', l3 & 0x3, 0x1, 0x3, true);
              lO && (jr.globalAlpha = Math.min(0x1, l9 * 0x2), jr.drawImage(lO.cv, l4 - lO.ox, l5 - lO.oy, lO.w, lO.h));
            } else {
              if (lP === wm.FLAKE) {
                let lf = jl('spr_icespell_snowflake', 0x0, 0.35, 0x0);
                if (lf) {
                  let lR = jz.qrot[l3],
                    lu = Math.cos(lR) * l1 * lj,
                    lv = Math.sin(lR) * l1 * lj;
                  jr.globalAlpha = Math.min(0x1, l9 * 0x2), jr.setTransform(lu, lv, -lv, lu, l0.e + l1 * l4, l0.f + l1 * l5), jr.drawImage(lf.cv, -lf.ox, -lf.oy, lf.w, lf.h), jr.setTransform(l0);
                }
              } else {
                if (lP === wm.SLASH) {
                  let lc = jl('spr_knight_slash_mark', 0x0, 1.2, 0x0);
                  if (lc) {
                    let lZ = jz.qrot[l3],
                      la = 0x1 + (0x1 - l9) * 0x2,
                      lY = Math.cos(lZ) * l1,
                      ln = Math.sin(lZ) * l1;
                    jr.globalAlpha = l9, jr.setTransform(lY * la, ln * la, -ln * l9, lY * l9, l0.e + l1 * l4, l0.f + l1 * l5), jr.drawImage(lc.cv, -lc.ox, -lc.oy, lc.w, lc.h), jr.setTransform(l0);
                  }
                } else {
                  if (lP === wm.SPRITE) {
                    let lp = jz.qspr[l3];
                    if (lp === 0x0) {
                      let lK = jl('spr_yheart_shot_hit', Math.min(0x4, (0x1 - l9) * 0x5 | 0x0), 0.8, 0x0);
                      lK && (jr.globalAlpha = 0x1, jr.drawImage(lK.cv, l4 - lK.ox, l5 - lK.oy, lK.w, lK.h));
                    } else {
                      if (lp === 0x1) {
                        let lU = jl('spr_rudebuster_beam', (l8 - l6) % 0x7, 0x1, 0x0);
                        lU && (jr.globalAlpha = l9 * 0.7, jr.setTransform(0x0, -l1, l1, 0x0, l0.e + l1 * l4, l0.f + l1 * l5), jr.drawImage(lU.cv, -lU.ox, -lU.oy, lU.w, lU.h), jr.setTransform(l0));
                      } else {
                        if (lp === 0x3) {
                          let lL = jl('spr_attack_cut1', Math.min(0x4, (0x1 - l9) * 0x5 | 0x0), 1.6, 0x0, true);
                          lL && (jr.globalAlpha = 0x1, jr.drawImage(lL.cv, l4 - lL.ox, l5 - lL.oy, lL.w, lL.h));
                        } else {
                          if (lp === 0x4) {
                            let lo = jl('spr_berdly_coaster_feather', l3 >> 0x1 & 0x1, 1.6, 0x0, true);
                            if (lo) {
                              let lA = jz.qrot[l3],
                                lX = Math.cos(lA) * l1,
                                lJ = Math.sin(lA) * l1;
                              jr.globalAlpha = Math.min(0x1, l9 * 0x2), jr.setTransform(lX, lJ, -lJ, lX, l0.e + l1 * l4, l0.f + l1 * l5), jr.drawImage(lo.cv, -lo.ox, -lo.oy, lo.w, lo.h), jr.setTransform(l0);
                            }
                          } else {
                            let lT = jl('spr_spare_z', 0x0, 0x1, 0x0),
                              lW = 0.6 + 0.4 * (0x1 - l9);
                            lT && (jr.globalAlpha = Math.min(0x1, l9 * 0x2), jr.drawImage(lT.cv, l4 - lT.ox * lW, l5 - lT.oy * lW, lT.w * lW, lT.h * lW));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  jr.globalAlpha = 0x1;
}
v(jn, 'drawParticles');
function jp(jr, jg, jz) {
  for (let jQ of jz.markers) {
    if (!jQ.on) continue;
    let jH = jQ.t / jQ.life;
    if (jQ.kind === 'window') {
      let l0 = Math.min(0x1, jQ.t / 0x8),
        l1 = jQ.t > jQ.life - 0x8 ? (jQ.life - jQ.t) / 0x8 : 0x1,
        l2 = jl('spr_queen_search_window', 0x0, 0.55, 0x0);
      l2 && (jr.globalAlpha = (jQ.t < 0x16 && jQ.t >> 0x1 & 0x1 ? 0.5 : 0.9) * l1, jr.drawImage(l2.cv, jQ.x - l2.w / 0x2 * l0, jQ.y - l2.h / 0x2, l2.w * l0, l2.h));
    } else jQ.kind === 'dice' ? (jr.globalAlpha = 0x1, jO(jg, jQ.x, jQ.y - 0x1e - jH * 0xa, String(jQ.a), jH < 0.7 ? "#ffff00" : "#ffffff", 'fnt_mainbig', 'center', 0x1 - jH * 0.6, true)) : jQ.kind === 'charge' ? (jr.globalAlpha = 0.8, jr.strokeStyle = "#ffff40", jr.lineWidth = 0x2, jr.beginPath(), jr.arc(jQ.x, jQ.y, 0x46 * (0x1 - jH) + 0x6, 0x0, wE), jr.stroke()) : jQ.kind === 'light' ? (jr.globalAlpha = 0.1, jr.fillStyle = "#fff8c0", jr.beginPath(), jr.arc(jQ.x, jQ.y, jQ.a, 0x0, wE), jr.fill(), jr.globalAlpha = 0.4, jr.strokeStyle = "#fff8c0", jr.lineWidth = 1.5, jr.stroke()) : jQ.kind === 'spr' && jQ.spr && jg.draw_sprite_ext(jQ.spr, jQ.fr | 0x0, jQ.x, jQ.y, jQ.a || 0x1, jQ.a || 0x1, jQ.b || 0x0, u.white, jQ.c === void 0x0 ? 0x1 : jQ.c);
  }
  jr.globalAlpha = 0x1;
}
v(jp, 'drawMarkers');
function jK(jr, jg, jz, jQ, jH) {
  let l0 = jz.boss,
    l1 = l0.def;
  if (!l1 || !l0.show) return;
  let l2 = l0.px + (l0.x - l0.px) * jQ,
    l3 = l0.py + (l0.y - l0.py) * jQ,
    l4 = l0.form || l1,
    l5 = f[l4.spr];
  if (!l5) return;
  let l6 = l4.frames > 0x1 ? (jH.time / ((l4.anim || 0x4) * 0x2) | 0x0) % l4.frames : 0x0,
    l8 = l0.scale,
    l9 = l4.ofx !== void 0x0 ? l4.ofx : l5.ox,
    lP = l4.ofy !== void 0x0 ? l4.ofy : l5.oy,
    lw = Math.sin(jH.time * 0.05) * 0x3,
    lj = l2 - (l9 - l5.ox) * l8,
    ll = l3 - (lP - l5.oy) * l8 + lw;
  l0.dying > 0x0 && (lj += (Math.random() - 0.5) * 0x6, ll += (Math.random() - 0.5) * 0x6);
  let lD = jH.trail;
  if (lD.at = (lD.at + 0x2) % 0xc, lD.v[lD.at] = lj, lD.v[lD.at + 0x1] = ll, lD.n < 0x6 && lD.n++, l0.trail > 0x0) for (let lO = lD.n - 0x1; lO >= 0x1; lO--) {
    let lf = (lD.at - lO * 0x2 + 0x18) % 0xc;
    jg.draw_sprite_ext(l4.spr, l6, lD.v[lf], lD.v[lf + 0x1], l8, l8, 0x0, u.white, 0.12 + (0x5 - lO) * 0.04);
  }
  if (jz.phase && jz.phase.spell && jz.declT === 0x0) {
    jr.strokeStyle = wc[l1.col || 0x0], jr.lineWidth = 1.5;
    for (let lR = 0x0; lR < 0x2; lR++) {
      let lu = 0x2e + lR * 0xc + Math.sin(jH.time * 0.07 + lR) * 0x3,
        lv = jH.time * (lR ? -0.03 : 0.02);
      jr.globalAlpha = 0.35, jr.beginPath();
      for (let lc = 0x0; lc < 0xc; lc++) {
        let lZ = lv + lc * wE / 0xc;
        jr.moveTo(l2 + Math.cos(lZ) * lu, l3 + Math.sin(lZ) * lu), jr.arc(l2, l3, lu, lZ, lZ + wE / 0x18);
      }
      jr.stroke();
    }
    jr.globalAlpha = 0x1;
  }
  jg.draw_sprite_ext(l4.spr, l6, lj, ll, l8, l8, 0x0, u.white, l0.alpha), l0.dmgT > 0x0 && jH.frame & 0x1 && jg.draw_sprite_flash(l4.spr, l6, lj, ll, l8, l8, 0x0, "#ffffff", 0.35 * l0.alpha);
}
v(jK, 'drawBoss');
var jU = {
    'susie': {
      'name': 'SUSIE',
      'head': ['spr_headsusie', 0x0, 0x1],
      'plate': 'spr_bnamesusie',
      'idle': ['spr_susieb_idle', 0x4, 0x2],
      'icon': ['spr_headsusie', 0x2, 0.5],
      'spell': "RUDE BUSTER",
      'shot': ['AXES', "AXE BEAM"],
      'pal': [{
        'opt': 0x8,
        'shot': 0x0,
        'name': 'PURPLE'
      }, {
        'opt': 0x1,
        'shot': 0x1,
        'name': "RED BUSTER"
      }]
    },
    'ralsei': {
      'name': 'RALSEI',
      'head': ['spr_headralsei', 0x0, 0x1],
      'plate': 'spr_bnameralsei',
      'idle': ['spr_ralseib_idle', 0x5, 0x2],
      'icon': ['spr_headralsei', 0x2, 0.5],
      'spell': 'PACIFY',
      'shot': ["HOMING YARN", "STAR STREAM"],
      'pal': [{
        'opt': 0x4,
        'shot': 0x4,
        'name': 'GREEN'
      }, {
        'opt': 0x8,
        'shot': 0x8,
        'name': "PINK SCARF"
      }]
    },
    'noelle': {
      'name': 'NOELLE',
      'head': ['spr_headnoelle', 0x0, 0x1],
      'plate': 'spr_bnamenoelle',
      'idle': ['spr_noelleb_idle', 0x5, 0x2],
      'icon': ['spr_headnoelle', 0x2, 0.5],
      'spell': 'SNOWGRAVE',
      'shot': ["ICE NEEDLES", "FROST LANCE"],
      'pal': [{
        'opt': 0x3,
        'shot': 0x5,
        'name': 'YELLOW'
      }, {
        'opt': 0x5,
        'shot': 0x7,
        'name': "DEEP FROST"
      }]
    },
    'kris': {
      'name': 'KRIS',
      'head': ['spr_headkris', 0x0, 0x1],
      'plate': 'spr_bnamekris',
      'idle': ['spr_krisb_idle', 0x6, 0x2],
      'icon': ['spr_btact', 0x0, 0.5],
      'spell': 'ACT',
      'shot': ['SWORD', 'THRUST'],
      'pal': [{
        'opt': 0x5,
        'shot': 0x5,
        'name': 'CYAN'
      }, {
        'opt': 0x1,
        'shot': 0x1,
        'name': "RED SOUL"
      }]
    },
    'lancer': {
      'name': 'LANCER',
      'head': ['spr_lancer_dt', 0x0, 0.75],
      'plate': null,
      'idle': ['spr_lancer_battle', 0x3, 0x2],
      'icon': ['spr_spadebullet', 0x0, 0.42],
      'spell': 'BIKE',
      'shot': ['SPADES', "SPADE BOMB"],
      'pal': [{
        'opt': 0x7,
        'shot': 0x0,
        'name': 'SPADE'
      }, {
        'opt': 0x4,
        'shot': 0x4,
        'name': 'CACTUS'
      }]
    },
    'berdly': {
      'name': 'BERDLY',
      'head': ['spr_berdly_d', 0x0, 0.62],
      'plate': null,
      'idle': ['spr_berdlyb_idle', 0x5, 0x2],
      'icon': ['spr_berdly_coaster_feather', 0x0, 1.6],
      'spell': "SMART STORM",
      'shot': ['FEATHERS', 'QUILLS'],
      'pal': [{
        'opt': 0x6,
        'shot': 0x0,
        'name': 'BLUE'
      }, {
        'opt': 0x2,
        'shot': 0x2,
        'name': 'GOLD'
      }]
    }
  },
  jL = v(jr => jU[jr.partner].pal[jr.pal & 0x1], 'pal'),
  jo = [];
jo[0x0] = ['spr_yheart_shot', 0x0, 0.9, 'vel', 0x0, 0.8], jo[0x2] = ['spr_axebullet_b', 0x0, 0.8, 'spin', 0x0, 0x1], jo[0x3] = ['spr_rudebuster_beam', 0x7, 0.42, 'vel', 0x0, 0.85], jo[0x4] = ['spr_yarnbullet', 0x4, 0.32, 'vel', 0x0, 0x1], jo[0x5] = ['spr_sparestar_anim', 0x6, 0x1, 'none', 0x0, 0.9], jo[0x6] = ['spr_iciclebullet', 0x0, 0.55, 'vel', -Math.PI / 0x2, 0.95], jo[0x7] = ['spr_iciclebullet', 0x2, 0.8, 'vel', -Math.PI / 0x2, 0.95], jo[0x8] = ['spr_attack_cut1', 0x5, 1.3, 'none', 0x0, 0x1], jo[0x9] = ['spr_attack_cut1', 0x0, 0.9, 'none', 0x0, 0.9], jo[0xa] = ['spr_spadebullet', 0x0, 0.4, 'vel', 0x0, 0x1], jo[0xb] = ['spr_spadebullet_chunk', 0x0, 0.42, 'spin', 0x0, 0x1], jo[0xc] = ['spr_berdly_coaster_feather', 0x2, 2.2, 'vel', Math.PI * 0.75, 0x1], jo[0xd] = ['spr_board_blue_bird_feather', 0x0, 1.8, 'vel', Math.PI * 0.75, 0x1], jo[0xe] = ['spr_spadebullet', 0x0, 0.22, 'vel', 0x0, 0x1];
function jA(jr, jg, jz, jQ) {
  let jH = jQ.M,
    l0 = jH.a,
    l1 = jL(jg),
    l2 = jg.partner === 'susie' && jg.pal & 0x1;
  for (let l3 = 0x0; l3 < jg.sn; l3++) {
    let l4 = jg.slive[l3],
      l5 = jg.skind[l4],
      l6 = jo[l5];
    if (!l6) continue;
    let l8 = l6[0x1],
      l9 = jg.sage[l4],
      lP = l5 === 0x8 ? Math.min(0x4, l9 >> 0x1) : l5 === 0x7 ? 0x1 : l8 ? (l9 >> 0x1) % l8 : 0x0,
      lw = l5 === 0x3 && l2,
      lj = jl(lw ? 'spr_rudebuster_beam_red' : l6[0x0], lP, l6[0x2], l5 === 0x0 || lw ? 0x0 : l1.shot, true);
    if (!lj) continue;
    let ll = jg.spx[l4] + (jg.sx[l4] - jg.spx[l4]) * jz,
      lD = jg.spy[l4] + (jg.sy[l4] - jg.spy[l4]) * jz,
      lO = 0x0;
    l6[0x3] === 'vel' ? lO = Math.atan2(jg.svy[l4], jg.svx[l4]) + l6[0x4] : l6[0x3] === 'spin' && (lO = (l9 + jz) * 0.45);
    let lf = Math.cos(lO) * l0,
      lR = Math.sin(lO) * l0;
    jr.globalAlpha = l6[0x5] * (jg.slife[l4] >= 0x0 && jg.slife[l4] < 0x3 && l5 !== 0x8 ? (jg.slife[l4] + 0x1) / 0x4 : 0x1), l5 === 0x9 ? jr.setTransform(0.42425999999999997 * l0, 1.20207 * l0, -0.42425999999999997 * l0, 1.20207 * l0, jH.e + l0 * ll, jH.f + l0 * lD) : jr.setTransform(lf, lR, -lR, lf, jH.e + l0 * ll, jH.f + l0 * lD), jr.globalCompositeOperation = l5 === 0x0 ? 'lighter' : "source-over", jr.drawImage(lj.cv, -lj.ox, -lj.oy, lj.w, lj.h);
  }
  jr.setTransform(jH), jr.globalAlpha = 0x1, jr.globalCompositeOperation = "source-over";
}
v(jA, 'drawShots');
function jX(jr, jg, jz, jQ, jH) {
  let l0 = jz.P,
    l1 = jH.M,
    l2 = l1.a;
  if (!l0.alive) return;
  let l3 = l0.px + (l0.x - l0.px) * jQ,
    l4 = l0.py + (l0.y - l0.py) * jQ,
    l5 = l0.invuln > 0x0 && jH.frame >> 0x2 & 0x1,
    l6 = Math.min(0x4, Math.floor(l0.power)),
    l8 = jl('spr_heartsmall', 0x0, 1.3, 0x64 + jL(jz).opt, true),
    l9 = jH.opt;
  if (l8) for (let lj = 0x0; lj < l6; lj++) {
    jz.optionPos(lj, l6, l0.focus, l9);
    let ll = l9.x + (l3 - l0.x),
      lD = l9.y + (l4 - l0.y);
    jr.globalAlpha = l5 ? 0.35 : 0.85, jr.drawImage(l8.cv, ll - l8.ox, lD - l8.oy, l8.w, l8.h);
  }
  if (jr.globalAlpha = 0x1, l0.grazeFlash > 0x0 && (jr.globalAlpha = l0.grazeFlash / 0x6 * 0.7, jr.strokeStyle = "#ffffff", jr.lineWidth = 0x1, jr.beginPath(), jr.arc(l3, l4, 0x12, 0x0, wE), jr.stroke(), jr.globalAlpha = 0x1, jH.ticked && l0.grazeFlash--), jz.bombT > 0x0 && jz.bombKind === 'lancer') {
    let lO = jl('spr_lancerbike', (jH.frame >> 0x2) % 0x6, 0.7, 0x0, true);
    lO && (jr.globalAlpha = 0.9, jr.drawImage(lO.cv, l3 - lO.ox, l4 - lO.oy + 0x6, lO.w, lO.h), jr.globalAlpha = 0x1);
  }
  let lP = jl('spr_yellowheart', 0x0, 0x1, 0x0, true);
  if (lP) {
    let lf = -Math.PI / 0x2 + l0.lean * 0.18,
      lR = Math.cos(lf) * l2,
      lu = Math.sin(lf) * l2;
    jr.globalAlpha = l5 ? 0.35 : 0x1, jr.setTransform(lR, lu, -lu, lR, l1.e + l2 * l3, l1.f + l2 * l4), jr.drawImage(lP.cv, -lP.ox, -lP.oy, lP.w, lP.h), jr.setTransform(l1), jr.globalAlpha = 0x1;
  }
  let lw = l0.focusT / 0x8;
  if (lw > 0x0) {
    jr.globalAlpha = lw * 0.5, jr.strokeStyle = "#ffff60", jr.lineWidth = 0x1;
    let lv = jH.time * 0.05;
    jr.beginPath();
    for (let lc = 0x0; lc < 0x8; lc++) {
      let lZ = lv + lc * wE / 0x8;
      jr.moveTo(l3 + Math.cos(lZ) * 0x16, l4 + Math.sin(lZ) * 0x16), jr.arc(l3, l4, 0x16, lZ, lZ + wE / 0x10);
    }
    jr.stroke(), jr.globalAlpha = lw, jr.fillStyle = "#ff2020", jr.beginPath(), jr.arc(l3, l4, 3.6, 0x0, wE), jr.fill(), jr.fillStyle = "#ffffff", jr.beginPath(), jr.arc(l3, l4, 2.4, 0x0, wE), jr.fill(), jr.globalAlpha = 0x1;
  }
}
v(jX, 'drawPlayer');
function jJ(jr, jg, jz, jQ, jH) {
  if (jz.bombT <= 0x0) return;
  let l0 = jz.bombKind,
    l1 = jz.bombT / jz.bombMax,
    l2 = jz.bombMax - jz.bombT,
    l3 = jH.M,
    l4 = l3.a;
  if (l0 === 'susie') {
    let l5 = jl('spr_rudebuster_beam', (l2 >> 0x1) % 0x7, 3.2, 0x0);
    if (jr.globalAlpha = 0.25 * l1, jr.fillStyle = "#b040ff", jr.fillRect(w8.x, w8.y, w8.w, w8.h), l5) for (let l6 = 0x0; l6 < 0x4; l6++) {
      let l8 = jz.bombY + l6 * 0x22;
      jr.globalAlpha = (0x1 - l6 * 0.22) * Math.min(0x1, l1 * 0x3), jr.setTransform(0x0, -l4, l4, 0x0, l3.e + l4 * jz.bombX, l3.f + l4 * l8), jr.drawImage(l5.cv, -l5.ox, -l5.oy, l5.w, l5.h);
    }
    jr.setTransform(l3);
  } else {
    if (l0 === 'noelle') {
      jr.globalAlpha = 0.45 * Math.min(0x1, l1 * 0x2) * (l2 < 0x6 ? l2 / 0x6 : 0x1), jr.fillStyle = "#c8e8ff", jr.fillRect(w8.x, w8.y, w8.w, w8.h);
      let l9 = jl('spr_icespell_snowflake', 0x0, 2.4, 0x0);
      if (l9) {
        let lP = l2 * 0.03,
          lw = Math.min(0x1, l2 / 0x10),
          lj = Math.cos(lP) * l4 * lw,
          ll = Math.sin(lP) * l4 * lw;
        jr.globalAlpha = 0.6 * Math.min(0x1, l1 * 2.5), jr.setTransform(lj, ll, -ll, lj, l3.e + l4 * w8.cx, l3.f + l4 * (w8.y + w8.h / 0x2)), jr.drawImage(l9.cv, -l9.ox, -l9.oy, l9.w, l9.h), jr.setTransform(l3);
      }
    } else {
      if (l0 === 'kris') {
        jr.globalAlpha = 0.16 * Math.min(0x1, l1 * 0x4), jr.fillStyle = "#a0b4ff", jr.fillRect(w8.x, w8.y, w8.w, w8.h);
        let lD = jz.P,
          lO = lD.px + (lD.x - lD.px) * jQ,
          lf = lD.py + (lD.y - lD.py) * jQ;
        if (jr.globalAlpha = 0.7 * Math.min(0x1, l1 * 0x4), jr.strokeStyle = "#ffffff", jr.lineWidth = 0x2, jr.beginPath(), jr.arc(lO, lf, 0x1e, -Math.PI / 0x2, -Math.PI / 0x2 + wE * l1), jr.stroke(), l2 < 0x22) {
          let lR = jl('spr_btact', l2 >> 0x2 & 0x1, 0x2, 0x0, true);
          if (lR) {
            let lu = l2 < 0x6 ? 0.5 + l2 / 0xc : 0x1;
            jr.globalAlpha = l2 > 0x18 ? (0x22 - l2) / 0xa : 0x1, jr.drawImage(lR.cv, lO - lR.ox * lu, lf - 0x38 - lR.oy * lu, lR.w * lu, lR.h * lu);
          }
        }
      } else {
        if (l0 === 'lancer') {
          let lv = jz.bike,
            lc = lv.px + (lv.x - lv.px) * jQ,
            lZ = lv.py + (lv.y - lv.py) * jQ,
            la = jl('spr_lancerbike', (l2 >> 0x1) % 0x6, 0x2, 0x0, true);
          if (la && lv.on) {
            let lY = jz.boss.x < lc ? -0x1 : 0x1;
            for (let ln = 0x3; ln >= 0x0; ln--) jr.globalAlpha = ln ? 0.3 / ln : 0x1, jr.setTransform(l4 * lY, 0x0, 0x0, l4, l3.e + l4 * lc, l3.f + l4 * (lZ - lv.vy * ln * 1.4)), jr.drawImage(la.cv, -la.ox, -la.oy, la.w, la.h);
            jr.setTransform(l3);
          }
        } else {
          if (l0 === 'berdly') {
            jr.globalAlpha = 0.12 * Math.min(0x1, l1 * 0x3), jr.fillStyle = "#a0e0ff", jr.fillRect(w8.x, w8.y, w8.w, w8.h);
            let lp = jl('spr_tornado_bullet', 0x0, 1.7, 0x0, true),
              lK = jl('spr_berdlyb_tornado', 0x0, 1.4, 0x0, true);
            for (let lU = 0x0; lU < 0x3; lU++) {
              let lL = jz.storm[lU];
              if (!lL.on || lL.y > w8.y2 + 0x1e) continue;
              let lo = lL.px + (lL.x - lL.px) * jQ,
                lA = lL.py + (lL.y - lL.py) * jQ,
                lX = l2 + lU * 0x2 >> 0x1 & 0x1 ? -0x1 : 0x1;
              lp && (jr.globalAlpha = 0.5 * Math.min(0x1, l1 * 0x3), jr.globalCompositeOperation = 'lighter', jr.setTransform(l4 * lX, 0x0, 0x0, l4, l3.e + l4 * lo, l3.f + l4 * lA), jr.drawImage(lp.cv, -lp.ox, -lp.oy, lp.w, lp.h), jr.globalCompositeOperation = "source-over"), lU === 0x1 && lK && (jr.globalAlpha = Math.min(0x1, l1 * 0x3), jr.setTransform(l4 * lX, 0x0, 0x0, l4, l3.e + l4 * lo, l3.f + l4 * (lA - 0x6)), jr.drawImage(lK.cv, -lK.ox, -lK.oy, lK.w, lK.h));
            }
            jr.setTransform(l3);
          } else jr.globalAlpha = 0.22 * Math.min(0x1, l1 * 0x2), jr.fillStyle = "#ffd0f0", jr.fillRect(w8.x, w8.y, w8.w, w8.h);
        }
      }
    }
  }
  jr.globalAlpha = 0x1;
}
v(jJ, 'drawBomb');
function jT(jr, jg, jz, jQ) {
  let jH = jz.boss,
    l0 = jH.def;
  if (!l0 || !jH.show || jH.dying > 0x0) return;
  let l1 = jz.phase;
  jO(jg, w8.x + 0x6, w8.y + 0x3, l0.name, "#ffffff", 'fnt_small', 'left', 0x1, true);
  let l2 = 0x0;
  for (let lP = Math.max(0x0, jz.pi + 0x1); lP < l0.phases.length; lP++) l0.phases[lP].spell && l2++;
  let l3 = jl('spr_sparestar', 0x0, 0.55, 0x0, false),
    l4 = jf(jg, l0.name, 'fnt_small') + 0xa;
  if (l3) {
    for (let lw = 0x0; lw < l2; lw++) jr.drawImage(l3.cv, w8.x + 0x6 + l4 + lw * 0xa, w8.y + 0x4, l3.w, l3.h);
  }
  let l5 = w8.x + 0x6,
    l6 = w8.x2 - 0x32,
    l8 = w8.y + 0x11;
  if (l1 && !l1.survival) {
    let lj = Math.max(0x0, jH.hp / jH.hpMax);
    jr.fillStyle = "#800000", jr.fillRect(l5, l8, l6 - l5, 0x4), jr.fillStyle = l1.spell ? "#ffff00" : "#ffa040", jr.fillRect(l5, l8, (l6 - l5) * lj, 0x4);
  } else l1 && l1.survival && (jr.fillStyle = "#404040", jr.fillRect(l5, l8, l6 - l5, 0x4));
  if (l1 && jz.declT === 0x0 && !l1.hideTimer) {
    let ll = Math.max(0x0, Math.ceil(jz.timer / 0x1e));
    jO(jg, w8.x2 - 0x6, w8.y + 0x2, (ll < 0xa ? '0' : '') + ll, ll <= 0xa ? "#ff4040" : "#ffffff", 'fnt_mainbig', 'right', 0x1, true);
  }
  let l9 = jH.x;
  jr.fillStyle = "#ff3030", jr.beginPath(), jr.moveTo(l9 - 0x5, w8.y2 + 0x9), jr.lineTo(l9 + 0x5, w8.y2 + 0x9), jr.lineTo(l9, w8.y2 + 0x3), jr.fill();
}
v(jT, 'drawBossHud');
var jW = new Map();
function jm(jr, jg, jz) {
  let jQ = jW.get(jg);
  if (jQ === void 0x0) {
    let jH = 0x0;
    for (let l0 of jg) jH = Math.max(jH, jf(jr, l0, 'fnt_mainbig'));
    jQ = jH <= jz ? 'fnt_mainbig' : 'fnt_main', jW.set(jg, jQ);
  }
  return jQ;
}
v(jm, 'fontFor');
function jx(jr, jg, jz, jQ) {
  let jH = jz.banner;
  if (jH) {
    if (jH.kind === 'spell') {
      let l0 = jH.t,
        l1 = w8.y2 - 0x40,
        l2 = w8.y + 0x28,
        l3 = l0 < 0x16 ? 0x0 : Math.min(0x1, (l0 - 0x16) / 0x10),
        l4 = 0x1 - (0x1 - l3) * (0x1 - l3),
        l5 = l1 + (l2 - l1) * l4,
        l6 = l0 < 0xa ? (0xa - l0) * 0x18 : 0x0,
        l8 = w8.x2 - 0x8 + l6,
        l9 = jf(jg, jH.text, 'fnt_main'),
        lP = wc[jz.boss.def && jz.boss.def.col || 0x0];
      if (l0 < 0x26) {
        let lw = Math.min(0x1, l0 / 0x8) * (l0 > 0x1e ? (0x26 - l0) / 0x8 : 0x1),
          lj = Math.min(0x1, l0 / 0xc) * w8.w / 0x2;
        jr.globalAlpha = 0.6 * lw, jr.fillStyle = "#000000", jr.fillRect(w8.cx - lj, l5 - 0x16, lj * 0x2, 0x2e), jr.globalAlpha = lw, jr.fillStyle = lP, jr.fillRect(w8.cx - lj, l5 - 0x16, lj * 0x2, 0x2), jr.fillRect(w8.cx - lj, l5 + 0x16, lj * 0x2, 0x2), jr.globalAlpha = 0x1, jO(jg, l8, l5 - 0x12, jH.num ? "SPELL CARD No." + String(jH.num).padStart(0x2, '0') : "SPELL CARD", lP, 'fnt_small', 'right', lw, true);
      }
      if (jr.globalAlpha = 0.75, jr.fillStyle = "#000000", jr.fillRect(l8 - l9 - 0xa, l5 - 0x2, l9 + 0xe, 0x14), jr.fillStyle = lP, jr.fillRect(l8 - l9 - 0xa, l5 + 0x11, l9 + 0xe, 0x2), jr.globalAlpha = 0x1, jO(jg, l8, l5, jH.text, "#ffffff", 'fnt_main', 'right', 0x1, true), l3 >= 0x1 || l0 > 0x26) {
        let ll = jz.cardFailed,
          lD = jz.phase && jz.phase.survival ? 'SURVIVE' : ll ? "BONUS FAILED" : "BONUS " + Math.round(jz.cardBonus / 0xa) * 0xa,
          lO = '';
        jQ.history && (lO = '\x20\x20' + jQ.history.cap + '/' + jQ.history.att), jO(jg, l8, l5 + 0x16, lD + lO, ll ? "#808080" : "#c0c0c0", 'fnt_main', 'right', 0x1, true);
      }
      jz.phase || (jz.banner = null);
    } else {
      if (jH.kind === 'boss') {
        let lf = jH.t < 0x10 ? jH.t / 0x10 : jH.t > 0x38 ? Math.max(0x0, (0x4c - jH.t) / 0x14) : 0x1,
          lR = jH.line ? jH.t > 0x5c ? Math.max(0x0, (0x6c - jH.t) / 0x10) : 0x1 : lf;
        if (jO(jg, w8.cx, w8.y + 0xaa, jH.text, "#ffffff", 'fnt_mainbig', 'center', jH.line ? lR : lf, true), jO(jg, w8.cx, w8.y + 0xca, jH.sub, "#c0c0c0", 'fnt_main', 'center', jH.line ? lR : lf, true), jH.line && jH.t > wO - 0x6) {
          let lu = w8.x + 0xc,
            lv = w8.y2 - 0x6c,
            lc = w8.x2 - 0xc,
            lZ = w8.y2 - 0xc;
          jr.globalAlpha = lR, jr.fillStyle = "#000000", jr.fillRect(lu + 0x6, lv + 0x6, lc - lu - 0xc, lZ - lv - 0xc), jr.globalAlpha = 0x1, lR > 0.5 && jR(jg, lu, lv, lc, lZ);
          let la = jH.chars,
            lY = jm(jg, jH.line, lc - lu - 0x28),
            ln = lY === 'fnt_mainbig' ? 0x1e : 0x16;
          for (let lp = 0x0; lp < jH.line.length && la > 0x0; lp++) {
            let lK = jH.line[lp],
              lU = Math.min(la, lK.length);
            la -= lU, jO(jg, lu + 0x16, lv + 0x16 + lp * ln, lU < lK.length ? lK.slice(0x0, lU) : lK, "#ffffff", lY, 'left', lR);
          }
        }
      } else {
        if (jH.kind === 'capture' || jH.kind === 'failed') {
          let lL = jH.t > 0x46 ? Math.max(0x0, (0x5a - jH.t) / 0x14) : 0x1,
            lo = jH.kind === 'capture',
            lA = w8.y + 0x78,
            lX = lo ? Math.max(0x0, 0x8 - jH.t) * 0x3 : 0x0;
          if (jO(jg, w8.cx, lA - lX, jH.text, lo ? jH.t >> 0x2 & 0x1 ? "#ffff00" : "#ffffff" : "#a0a0a0", 'fnt_mainbig', 'center', lL, true), jH.sub) {
            let lJ = lo ? Math.round(+jH.sub * Math.min(0x1, jH.t / 0x12) / 0xa) * 0xa : jH.sub;
            jO(jg, w8.cx, lA + 0x1e, String(lJ), "#ffff00", 'fnt_mainbig', 'center', lL, true);
          }
          if (lo && !jQ.calm) {
            let lT = f.spr_shine,
              lW = lT ? Math.max(0x1, lT.frames | 0x0) : 0x1;
            if (lT) for (let lm = 0x0; lm < 0x4; lm++) {
              let lx = jH.t * 0.08 + lm / 0x4,
                lE = Math.floor(lx),
                lN = Math.floor((lx - lE) * lW) % lW;
              jg.draw_sprite_ext('spr_shine', lN, w8.cx - 0x82 + (lm * 0.37 + lE * 0.61) % 0x1 * 0x104, lA - 0x6 + (lm * 0.53 + lE * 0.29) % 0x1 * 0x40, 0x1, 0x1, 0x0, u.white, lL);
            }
          }
          if (lo && jH.pts && jH.t > 0x12) {
            let lG = jl('spr_sparestar', 0x0, 0x1, 0x0, true),
              ly = jf(jg, '+' + jH.pts + " POINTS", 'fnt_main');
            lG && (jr.globalAlpha = lL, jr.drawImage(lG.cv, w8.cx - ly / 0x2 - 0x12, lA + 0x46 - lG.oy + 0x8, lG.w, lG.h), jr.globalAlpha = 0x1), jO(jg, w8.cx + 0x4, lA + 0x44, '+' + jH.pts + " POINTS", "#ffffff", 'fnt_main', 'center', lL, true);
          }
        }
      }
    }
  }
  if (jz.phase && jz.phase.spell && jz.declT > 0x0) {
    let lq = jz.boss.def,
      lS = 0x1 - jz.declT / 0x30,
      lF = w8.x2 + 0x3c - lS * (w8.w + 0x3c),
      ld = w8.y + 0xfa - lS * 0x3c;
    jg.draw_sprite_ext(lq.portrait || lq.spr, 0x0, lF, ld, 3.2, 3.2, 0x0, u.white, 0.28 * Math.sin(lS * Math.PI));
  }
  for (let lB of jz.popups) {
    let lh = lB.t > (lB.big ? 0x32 : 0x1a) ? 0x1 - (lB.t - (lB.big ? 0x32 : 0x1a)) / 0x14 : 0x1;
    jO(jg, lB.x, lB.y, lB.text, wc[lB.col] || "#ffffff", lB.big ? 'fnt_main' : 'fnt_small', 'center', Math.max(0x0, lh), true);
  }
}
v(jx, 'drawBanners');
var jI = {};
for (let lQ of Object.keys(jU)) jI[lQ] = jU[lQ].spell;
var jb = ["#80ff80", "#80c0ff", "#ffc040", "#ff60ff"];
function jE(jr, jg) {
  let jz = String(Math.floor(jr));
  for (; jz.length < jg;) jz = '0' + jz;
  return jz;
}
v(jE, 'pad');
var jN = {
  'x': 0x1b4,
  'touch': {
    'focus': {
      'x': 0x1b8,
      'y': 0x132,
      'w': 0x60,
      'h': 0xa4
    },
    'spell': {
      'x': 0x21e,
      'y': 0x132,
      'w': 0x5e,
      'h': 0xa4
    },
    'pause': {
      'x': 0x244,
      'y': 0x6,
      'w': 0x36,
      'h': 0x26
    },
    'pauseZone': {
      'x': 0x1b4,
      'y': 0x1e,
      'w': 0xcc,
      'h': 0x40
    }
  }
};
function jG(jr, jg, jz, jQ, jH, l0, l1 = 0x1, l2 = 0x0) {
  let l3 = jl(jg, jz, l0, l2, true);
  return l3 ? (jr.ctx.globalAlpha = l1, jr.ctx.drawImage(l3.cv, Math.round(jQ - l3.ox), Math.round(jH - l3.oy), l3.w, l3.h), jr.ctx.globalAlpha = 0x1, l3) : null;
}
v(jG, 'spriteIn');
function jy(jr, jg, jz, jQ, jH = 0x1, l0 = 0x1) {
  let l1 = jU[jg] || jU.susie;
  return jG(jr, l1.icon[0x0], l1.icon[0x1], jz, jQ, l1.icon[0x2] * jH, l0);
}
v(jy, 'spellIcon');
function jq(jr, jg, jz, jQ, jH = 0x1, l0 = 0x1) {
  let l1 = jU[jg] || jU.susie;
  return jG(jr, l1.head[0x0], l1.head[0x1], jz, jQ, l1.head[0x2] * jH, l0);
}
v(jq, 'partnerHead');
var jS = ['focus', 'spell'],
  jF = ['FOCUS', 'SPELL'];
function jd(jr, jg, jz, jQ) {
  let jH = jz.P,
    l0 = 0x1bc,
    l1 = 0x274,
    l2 = jU[jz.partner] || jU.susie,
    l3 = wc[jL(jz).opt];
  jr.fillStyle = "#000000", jr.fillRect(0x0, 0x0, 0x280, w8.y), jr.fillRect(0x0, w8.y2, 0x280, 0x1e0 - w8.y2), jr.fillRect(0x0, 0x0, w8.x, 0x1e0), jr.fillRect(w8.x2, 0x0, 0x280 - w8.x2, 0x1e0), jr.strokeStyle = wy, jr.lineWidth = 0x3, jr.strokeRect(w8.x - 1.5, w8.y - 1.5, w8.w + 0x3, w8.h + 0x3);
  let l4 = jz.mode === 'practice';
  jO(jg, l0, 0xc, ww[jz.diff], jb[jz.diff], 'fnt_main'), jQ.touch || jO(jg, l1, 0xc, l4 ? 'PRACTICE' : jQ.stageTag || '', "#808080", 'fnt_main', 'right');
  let l5 = (la, lY, ln, lp = "#ffffff") => {
    jO(jg, l0, la, lY, "#808080", 'fnt_main'), ln !== null && jO(jg, l1, la, ln, lp, 'fnt_main', 'right');
  };
  if (l5(0x26, 'HISCORE', jE(Math.max(jQ.hiscore || 0x0, jH.score), 0xa), "#c0c0c0"), l5(0x3a, 'SCORE', jE(jH.score, 0xa)), l5(0x54, 'SOULS', l4 ? 'PRACTICE' : null, "#808080"), !l4) {
    let la = jl('spr_heartsmall', 0x0, 1.2, 0x0, false),
      lY = Math.max(0x0, jH.lives);
    if (la && lY <= 0x7) {
      for (let ln = 0x0; ln < lY; ln++) jr.drawImage(la.cv, l1 - 0xc - ln * 0xe, 0x56, la.w, la.h);
    } else la && (jr.drawImage(la.cv, l1 - 0x28, 0x56, la.w, la.h), jO(jg, l1, 0x54, 'x' + lY, "#ffffff", 'fnt_main', 'right'));
  }
  l5(0x6a, 'SPELLS', null);
  let l6 = Math.max(0x0, jH.bombs);
  if (l6 <= 0x7) {
    for (let lp = 0x0; lp < l6; lp++) jy(jg, jz.partner, l1 - 0x7 - lp * 0xf, 0x72, 0x1);
  } else jy(jg, jz.partner, l1 - 0x22, 0x72, 0x1), jO(jg, l1, 0x6a, 'x' + l6, "#ffffff", 'fnt_main', 'right');
  l5(0x80, 'GRAZE', String(jH.graze)), jO(jg, l0, 0x96, 'TP', "#ffa040", 'fnt_main');
  let l8 = l0 + 0x1c,
    l9 = 0x9a,
    lP = l1 - 0x28 - l8,
    lw = 0x9;
  jr.fillStyle = "#800000", jr.fillRect(l8, l9, lP, lw), jr.fillStyle = jH.tp >= 0x64 ? "#ffff00" : "#ffa040", jr.fillRect(l8, l9, lP * Math.min(0x1, jH.tp / 0x64), lw), jr.strokeStyle = "#ffffff", jr.lineWidth = 0x1, jr.strokeRect(l8 - 0.5, l9 - 0.5, lP + 0x1, lw + 0x1), jO(jg, l1, 0x96, Math.floor(jH.tp) + '%', "#ffa040", 'fnt_main', 'right');
  let lj = 0x1b4,
    ll = 0xae,
    lD = 0x27c,
    lO = 0x12c,
    lf = l0 + 0xe,
    lR = l1 - 0xc;
  jr.fillStyle = "#000000", jr.fillRect(lj + 0x6, ll + 0x6, lD - lj - 0xc, lO - ll - 0xc), jR(jg, lj, ll, lD, lO), jq(jg, jz.partner, lf + 0xc, ll + 0x1e, 0x1), l2.plate ? jg.draw_sprite_ext(l2.plate, 0x0, lf + 0x22, ll + 0x18, 0x1, 0x1, 0x0, l3, 0x1) : jO(jg, lf + 0x22, ll + 0x16, l2.name, l3, 'fnt_main');
  let lu = jH.focusT >= 0x4 ? 0x1 : 0x0;
  jO(jg, lf, ll + 0x2e, 'SHOT', "#808080", 'fnt_main'), jO(jg, lR, ll + 0x2e, l2.shot[lu], lu ? "#ffff00" : "#ffffff", 'fnt_main', 'right'), jO(jg, lf, ll + 0x44, 'POWER', "#808080", 'fnt_main');
  let lv = lf + 0x34,
    lc = lR - 0x28 - lv,
    lZ = ll + 0x48;
  jr.fillStyle = "#800000", jr.fillRect(lv, lZ, lc, 0x9), jr.fillStyle = jH.power >= 0x4 ? "#ffff00" : l3, jr.fillRect(lv, lZ, Math.round(lc * Math.min(0x1, jH.power / 0x4)), 0x9);
  for (let lK = 0x1; lK < 0x4; lK++) jr.fillStyle = "#000000", jr.fillRect(lv + Math.round(lc * lK / 0x4), lZ, 0x1, 0x9);
  if (jO(jg, lR, ll + 0x44, jH.power >= 0x4 ? 'MAX' : jH.power.toFixed(0x2), jH.power >= 0x4 ? "#ffff00" : "#ffffff", 'fnt_main', 'right'), jy(jg, jz.partner, lf + 0x6, ll + 0x62, 0x1), jO(jg, lf + 0x14, ll + 0x5a, l2.spell, "#c0c0c0", 'fnt_main'), jQ.touch) {
    let lU = jN.touch;
    for (let lo = 0x0; lo < 0x2; lo++) {
      let lA = jS[lo],
        lX = jF[lo],
        lJ = lU[lA],
        lT = !!(jQ.touchHeld && jQ.touchHeld[lA]),
        lW = lJ.x + 0x2,
        lm = lJ.y + 0x2,
        lx = lJ.x + lJ.w - 0x2,
        lE = lJ.y + lJ.h - 0x2,
        lN = (lW + lx) / 0x2,
        lG = lm + (lE - lm) * 0.42 - (lT ? 0x3 : 0x0);
      if (jr.fillStyle = "#000000", jr.fillRect(lW + 0x6, lm + 0x6, lx - lW - 0xc, lE - lm - 0xc), jR(jg, lW, lm, lx, lE), lA === 'focus') {
        let ly = jl('spr_yellowheart', 0x0, 1.6, 0x0, true);
        ly && (jr.save(), jr.globalAlpha = lT ? 0x1 : 0.8, jr.translate(lN, lG), jr.rotate(-Math.PI / 0x2), jr.drawImage(ly.cv, -ly.ox, -ly.oy, ly.w, ly.h), jr.restore()), jr.fillStyle = "#ff2020", jr.beginPath(), jr.arc(lN, lG, 4.5, 0x0, wE), jr.fill(), jr.fillStyle = "#ffffff", jr.beginPath(), jr.arc(lN, lG, 0x3, 0x0, wE), jr.fill();
      } else jy(jg, jz.partner, lN, lG, 2.4, lT ? 0x1 : jH.bombs > 0x0 ? 0.85 : 0.35), jO(jg, lN, lG + 0x18, 'x' + jH.bombs, jH.bombs > 0x0 ? "#ffffff" : "#606060", 'fnt_main', 'center');
      jO(jg, lN, lE - 0x2c, lX, lT ? "#ffff00" : "#ffffff", 'fnt_main', 'center');
    }
    let lL = lU.pause;
    jr.fillStyle = "#000000", jr.fillRect(lL.x + lL.w / 0x2 - 0xa, lL.y + 0x8, 0x16, lL.h - 0xe), jr.fillStyle = "#ffffff", jr.fillRect(lL.x + lL.w / 0x2 - 0x8, lL.y + 0xa, 0x5, lL.h - 0x14), jr.fillRect(lL.x + lL.w / 0x2 + 0x3, lL.y + 0xa, 0x5, lL.h - 0x14);
  } else {
    let lq = l2.idle;
    jg.draw_sprite_ext(lq[0x0], (jQ.time / 0xa | 0x0) % lq[0x1], l0 + 0x32, 0x14a, lq[0x2], lq[0x2], 0x0, u.white, 0x1), jQ.points !== void 0x0 && jQ.points !== null && (jG(jg, 'spr_sparestar', 0x0, l0 + 0x8, 0x1c8, 0.8), jO(jg, l0 + 0x14, 0x1c0, 'POINTS', "#808080", 'fnt_main'), jO(jg, l1, 0x1c0, String(jQ.points), "#ffff00", 'fnt_main', 'right'));
  }
}
v(jd, 'drawPanel');
function jB(jr, jg, jz, jQ) {
  let jH = jr.ctx;
  jQ.M = jH.getTransform();
  let l0 = 0x0,
    l1 = 0x0;
  if (jg.shakeT > 0x0) {
    let l4 = jg.shakeAmp * (jg.shakeT / (jg.shakeMax || 0x1));
    l0 = (Math.random() * 0x2 - 0x1) * l4, l1 = (Math.random() * 0x2 - 0x1) * l4;
  }
  j9 = jP() + j7, j1();
  let l2 = jQ.M;
  jH.save();
  try {
    jH.beginPath(), jH.rect(w8.x, w8.y, w8.w, w8.h), jH.clip(), (l0 || l1) && (jH.translate(l0, l1), jQ.M = jH.getTransform()), jv(jH, jr, jg, jQ), jY(jH, jg, jz), jK(jH, jr, jg, jz, jQ), jJ(jH, jr, jg, jz, jQ), jA(jH, jg, jz, jQ), ja(jH, jg, jQ), jc(jH, jg, jz, jQ), jn(jH, jr, jg, jz, jQ), jp(jH, jr, jg), jX(jH, jr, jg, jz, jQ), jg.flashT > 0x0 && (jH.globalAlpha = 0.55 * jg.flashT / jg.flashMax, jH.fillStyle = wc[jg.flashCol] || "#ffffff", jH.fillRect(w8.x - 0xa, w8.y - 0xa, w8.w + 0x14, w8.h + 0x14), jH.globalAlpha = 0x1), jg.P.alive && jg.P.y < w9 + 0x1e && jg.P.y > w9 - 0x1e && (jH.globalAlpha = 0.2, jH.fillStyle = "#ffffff", jH.fillRect(w8.x, w9, w8.w, 0x1), jH.globalAlpha = 0x1), jQ.preview || (jx(jH, jr, jg, jQ), jT(jH, jr, jg, jQ));
  } finally {
    jH.setLineDash(je), jH.globalAlpha = 0x1, jH.restore(), jQ.M = l2;
  }
  if (jQ.preview) {
    jr.resetDrawState && jr.resetDrawState();
    return;
  }
  jd(jH, jr, jg, jQ);
  let l3 = jg.boss;
  l3.def && l3.show && !(l3.dying > 0x0) && (jH.fillStyle = "#ff3030", jH.beginPath(), jH.moveTo(l3.x - 0x6, w8.y2 + 0xc), jH.lineTo(l3.x + 0x6, w8.y2 + 0xc), jH.lineTo(l3.x, w8.y2 + 0x4), jH.fill()), jr.resetDrawState && jr.resetDrawState();
}
v(jB, 'drawSim');
var jh = 0x4;
function jk(jr, jg, jz) {
  let jQ;
  if (jg.note) {
    jO(jr, w8.cx, jh, jg.note, "#ffff00", 'fnt_small', 'center');
    return;
  }
  if (jg.auto) {
    let l2 = (jz.time / 0x14 | 0x0) & 0x1;
    jO(jr, w8.x + 0x2, jh, jg.watch ? 'WATCHING' : 'AUTOPLAY', l2 ? "#ffff00" : "#c0c0c0", 'fnt_small'), jQ = jg.mode === 'touch' ? [['II', "then TAKE OVER"]] : jg.mode === 'pad' ? [[jg.pad && jg.pad.pause || 'START', "then TAKE OVER"]] : [['P', "take over"], ['ESC', 'pause']], jV(jr, jQ);
    return;
  }
  let jH = jg.tut ? 'skip' : 'pause';
  if (jg.mode === 'touch') jQ = [['DRAG', 'move'], ["FINGER DOWN", 'shoot'], ["2ND FINGER", 'focus'], ['II', jH]];else {
    if (jg.mode === 'pad') {
      let l3 = jg.pad || {};
      jQ = [['STICK', 'move'], [l3.shoot || 'A', 'shoot'], [l3.focus || 'B', 'focus'], [l3.spell || 'Y', 'spell'], [l3.pause || 'START', jH]];
    } else jQ = [['ARROWS', 'move'], ['Z', 'shoot'], ['SHIFT', 'focus'], ['C', 'spell'], ['ESC', jH]], jg.tut || jQ.push(['P', 'auto']);
  }
  let l0 = 0x0;
  for (let [l4, l5] of jQ) l0 += jf(jr, l4, 'fnt_small') + 0x4 + jf(jr, l5, 'fnt_small') + 0xc;
  let l1 = w8.cx - (l0 - 0xc) / 0x2;
  for (let [l6, l8] of jQ) jO(jr, l1, jh, l6, "#ffff00", 'fnt_small'), l1 += jf(jr, l6, 'fnt_small') + 0x4, jO(jr, l1, jh, l8, "#808080", 'fnt_small'), l1 += jf(jr, l8, 'fnt_small') + 0xc;
}
v(jk, 'drawKeyStrip');
function jV(jr, jg) {
  let jz = w8.x2 - 0x2;
  for (let jQ = jg.length - 0x1; jQ >= 0x0; jQ--) {
    let [jH, l0] = jg[jQ];
    jO(jr, jz, jh, l0, "#808080", 'fnt_small', 'right'), jz -= jf(jr, l0, 'fnt_small') + 0x4, jO(jr, jz, jh, jH, "#ffff00", 'fnt_small', 'right'), jz -= jf(jr, jH, 'fnt_small') + 0xc;
  }
}
v(jV, 'stripRight');
function jC(jr, jg, jz, jQ) {
  let jH = jr.ctx,
    l0 = jz.P;
  if (!l0.alive) return;
  let l1 = jg.px.length - 0x1,
    l2 = jg.px[0x0],
    l3 = jg.py[0x0],
    l4 = jg.px[l1],
    l5 = jg.py[l1];
  if (jH.save(), jH.beginPath(), jH.rect(w8.x, w8.y, w8.w, w8.h), jH.clip(), jH.lineCap = 'round', jH.lineJoin = 'round', Math.hypot(l4 - l2, l5 - l3) < 0x6) {
    let l8 = l0.px + (l0.x - l0.px) * jQ.a,
      l9 = l0.py + (l0.y - l0.py) * jQ.a;
    for (let lP = 0x0; lP < 0x2; lP++) jH.globalAlpha = lP ? 0.8 : 0.5, jH.strokeStyle = lP ? "#ffffff" : "#000000", jH.lineWidth = lP ? 1.5 : 0x4, jH.beginPath(), jH.arc(l8, l9, 0xf, 0x0, wE), jH.stroke();
    jH.restore();
    return;
  }
  let l6 = 0x1;
  for (; l6 < l1 && Math.hypot(jg.px[l6] - l2, jg.py[l6] - l3) < 0xb;) l6++;
  for (let lw = 0x0; lw < 0x2; lw++) {
    jH.globalAlpha = lw ? 0.85 : 0.55, jH.strokeStyle = lw ? "#ffffff" : "#000000", jH.lineWidth = lw ? 1.5 : 4.5, jH.beginPath(), jH.moveTo(jg.px[l6], jg.py[l6]);
    for (let ll = l6 + 0x1; ll <= l1; ll++) jH.lineTo(jg.px[ll], jg.py[ll]);
    jH.stroke();
    let lj = lw ? 0x4 : 5.5;
    jH.beginPath(), jH.moveTo(l4, l5 - lj), jH.lineTo(l4 + lj, l5), jH.lineTo(l4, l5 + lj), jH.lineTo(l4 - lj, l5), jH.closePath(), jH.stroke();
  }
  jH.restore();
}
v(jC, 'drawBotPath');
export { a, o as b, A as c, t as d, m as e, x as f, E as g, h, k as i, P0 as j, P1 as k, P3 as l, P5 as m, P6 as n, P7 as o, P8 as p, P9 as q, PP as r, Pl as s, PD as t, PO as u, Pf as v, PR as w, Pu as x, Pv as y, Pa as z, PC as A, Pg as B, w0 as C, w4 as D, w6 as E, w7 as F, w8 as G, ww as H, wl as I, wv as J, wc as K, wZ as L, wa as M, wT as N, wm as O, wb as P, wy as Q, wQ as R, jO as S, jf as T, jR as U, ju as V, jU as W, jI as X, jb as Y, jN as Z, jG as _, jq as $, jB as aa, jk as ba, jC as ca };