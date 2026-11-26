const o = function () {
    let Q1 = true;
    return function (Q2, Q3) {
      const Q4 = Q1 ? function () {
        if (Q3) {
          const Q5 = Q3.apply(Q2, arguments);
          return Q3 = null, Q5;
        }
      } : function () {};
      return Q1 = false, Q4;
    };
  }(),
  h = o(this, function () {
    if (h.bind().toString().indexOf('\x0a') !== -0x1) return;
    return h.toString().search(".*").toString().constructor(h).search(".*");
  });
h();
import { c as b, d as p, e, f as i } from './c-KUB754KJ.js';
import { a as s } from './c-UP7LE7CI.js';
import { Y as r, z as n } from './c-YY3TNHWF.js';
import './c-RNLQZIER.js';
import './c-CCL3XGEJ.js';
import { a as S0 } from './c-B36JSU6C.js';
import './c-BKTN6CPB.js';
import './c-XTWZZNZA.js';
import './c-BERKZCGM.js';
import './c-VB7PBWB7.js';
import { X as S1, f as S2, l as S3, ya as S4 } from './c-AXDRFE3U.js';
import { H as S5, I as S6, ba as S7 } from './c-VGC6FILU.js';
import './c-H5LU7UHS.js';
import './c-AYDQ2WI5.js';
import './c-SHU6ROUQ.js';
import './c-F3KC5JBP.js';
import './c-QVGXLNTR.js';
import './c-S573BZHI.js';
import './c-SRPTC2P4.js';
import './c-4VFR2NSV.js';
import './c-7BWKVCRS.js';
import './c-EJF6JQ2U.js';
import './c-E3FAV6Z4.js';
import './c-TW2FVSA5.js';
import './c-H2HTZPEL.js';
import './c-V7HIBOZL.js';
import './c-S6HGHCFD.js';
import './c-HQHPDIVM.js';
import './c-PNL2T3BD.js';
import './c-GABAATJZ.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-3KRFGFG4.js';
import './c-VG5U7RS4.js';
import './c-YJAH7XEB.js';
import './c-PGO4VU5H.js';
import './c-KLECZKO5.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import './c-PWNRTD7X.js';
import './c-DTW63MWW.js';
import './c-J7PU4477.js';
import './c-HUDNK55W.js';
import './c-IKEEXWRQ.js';
import './c-SUMRYW3E.js';
import './c-3ELH3LBH.js';
import './c-WSZI3RLB.js';
import './c-NNTXHBME.js';
import './c-OYFOJ3BV.js';
import './c-MYK6C3LF.js';
import './c-GI6IDYOV.js';
import './c-E7FVSW52.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import { a as S8, l as S9 } from './c-XSSGDLV7.js';
S9();
var {
    k01: SS,
    outCubic: SQ,
    inCubic: SP,
    outBack: Sx
  } = b,
  SW = 33.333333333333336,
  Sy = Math.round,
  SO = S8((Q1, Q2, Q3, Q4, Q5, Q6) => {
    Q1.fillStyle = Q2, Q1.fillRect(Sy(Q3), Sy(Q4), Sy(Q5), Sy(Q6));
  }, 'fill'),
  Sa = S8((Q1, Q2) => {
    Q2 <= 0x0 || (Q1.globalAlpha = Math.min(0x1, Q2), Q1.fillStyle = "#000", Q1.fillRect(0x0, 0x0, 0x280, 0x1e0), Q1.globalAlpha = 0x1);
  }, 'black'),
  SL = S8(Q1 => Q1 ? "rgba(255,255,0,0.4)" : "#ffffff", 'flashCol');
function SB(Q1, Q2, Q3, Q4) {
  Q1.fillStyle = "#000", Q1.beginPath(), Q1.rect(0x0, 0x0, 0x280, 0x1e0), Q4 > 0x0 && (Q1.moveTo(Q2 + Q4, Q3), Q1.arc(Q2, Q3, Q4, 0x0, Math.PI * 0x2, !0x0)), Q1.fill('evenodd');
}
S8(SB, 'holeBlack');
function Su(Q1, Q2, Q3, Q4, Q5, Q6 = 0x2) {
  Q4 <= 0x0 || (Q1.strokeStyle = Q5, Q1.lineWidth = Q6, Q1.beginPath(), Q1.arc(Q2, Q3, Q4, 0x0, Math.PI * 0x2), Q1.stroke());
}
S8(Su, 'ring');
var SR = (() => {
  let Q1 = [];
  for (let Q2 = 0x0; Q2 < 0x5; Q2++) for (let Q3 = 0x0; Q3 < 0x9; Q3++) Q1.push({
    'x': 0x1 + Q3 * 0x46,
    'y': -0x13 + Q2 * 0x66,
    'd': Q3 + Q2
  });
  return Q1.sort((Q4, Q5) => Q4.d - Q5.d || Q4.x - Q5.x), Q1.forEach((Q4, Q5) => {
    Q4.i = Q5;
  }), Q1;
})();
function Sc(Q1, Q2, Q3, Q4) {
  let Q5 = {
    'faceDown': !0x0,
    'scale': 0x2,
    'back': '51',
    'shadow': !0x1
  };
  if (Q4 != null && (Q5.flip = Q4, Q5.faceDown = !0x1), S7(Q1, null, Q2, Q3, Q5)) return;
  let Q6 = Q4 != null ? Sy(S5 * Math.abs(Math.cos(Math.PI * Q4))) * 0x2 : S5 * 0x2;
  if (Q6 < 0x2) return;
  let Q7 = Sy(Q2 + (S5 * 0x2 - Q6) / 0x2);
  SO(Q1, "#ffffff", Q7, Q3, Q6, S6 * 0x2), SO(Q1, "#5a1020", Q7 + 0x2, Q3 + 0x2, Q6 - 0x4, S6 * 0x2 - 0x4);
}
S8(Sc, 'backCard');
var Sl = {
    'coverT': 0xd,
    'revealT': 0x9,
    'sfx': [[0x0, 'snd_smallswing', 0.14, 1.55], [0x4, 'snd_smallswing', 0.14, 1.55], [0x8, 'snd_smallswing', 0.14, 1.55], [0xc, 'snd_bump', 0.1, 1.75]],
    'cover'(Q1, Q2, Q3) {
      let Q4 = Q1.ctx;
      Sa(Q4, Q2 / 0x8);
      for (let Q5 of SR) {
        let Q6 = Q5.i * 0.15,
          Q7 = (Q2 - Q6) / 0x6;
        if (Q7 <= 0x0) continue;
        let Q8 = Q5.x,
          Q9 = Q5.y,
          QS = Q3.x - S5,
          QQ = Q3.y - S6,
          QP = SQ(Q7),
          Qx = QS + (Q8 - QS) * QP,
          QW = QQ + (Q9 - QQ) * QP;
        Q7 >= 0x1 && Q7 < 1.1666666666666667 && (QW -= 0x2), Sc(Q4, Sy(Qx), Sy(QW), null);
      }
    },
    'reveal'(Q1, Q2) {
      let Q3 = Q1.ctx;
      for (let Q4 of SR) {
        let Q5 = Q4.i / SR.length * 0x5,
          Q6 = (Q2 - Q5) / 0x4;
        Q6 >= 0x1 || Sc(Q3, Q4.x, Q4.y, Q6 <= 0x0 ? null : Q6 * 0.5);
      }
    }
  },
  SN = {
    'coverT': 0xc,
    'revealT': 0x9,
    'sfx': [[0x6, 'snd_graze', 0.25, 0x1]],
    'revealSfx': ['snd_spellcast', 0.2, 0x1],
    'cover'(Q1, Q2) {
      let Q3 = Q1.ctx;
      Sa(Q3, Q2 / 0xa);
      let Q4 = SS(Q2 / 0xc);
      for (let Q5 = 0x0; Q5 < 0x3; Q5++) {
        let Q6 = [0x14a, 0x106, 0xc4][Q5] * Math.pow(0x1 - Q4, 1.6),
          Q7 = Math.PI / 0x2 * Q4 + Q5 * 0.13,
          Q8 = r[Q5 % r.length];
        for (let Q9 = 0x0; Q9 < 0x18; Q9++) {
          let QS = Q7 + Q9 / 0x18 * Math.PI * 0x2,
            QQ = Sy(0x140 + Math.cos(QS) * Q6),
            QP = Sy(0xf0 + Math.sin(QS) * Q6);
          QQ < -0x6 || QP < -0x6 || QQ > 0x286 || QP > 0x1e6 || (SO(Q3, Q8, QQ - 0x3, QP - 0x1, 0x6, 0x2), SO(Q3, Q8, QQ - 0x1, QP - 0x3, 0x2, 0x6), SO(Q3, Q8, QQ - 0x2, QP - 0x2, 0x4, 0x4), SO(Q3, "#ffffff", QQ - 0x1, QP - 0x1, 0x2, 0x2));
        }
      }
      Q2 >= 0x2 && Q1.draw_sprite_ext('spr_heart', 0x0, 0x128, 0xd8, 0x3, 0x3, 0x0, "#ffffff", 0x1);
    },
    'reveal'(Q1, Q2, Q3) {
      let Q4 = Q1.ctx,
        Q5 = SQ(Q2 / 0x9) * 0x1a4;
      SB(Q4, 0x140, 0xf0, Q5), Su(Q4, 0x140, 0xf0, Q5, Q3.calm ? "rgba(255,255,0,0.4)" : "#ffffff", 0x2);
      let Q6 = 0x1 - SS(Q2 / 0x4);
      if (Q6 > 0x0) {
        let Q7 = Q2 < 0x1 ? 0x4 : 0x3;
        Q1.draw_sprite_ext('spr_heart', 0x0, 0x140 - 0x8 * Q7, 0xf0 - 0x8 * Q7, Q7, Q7, 0x0, "#ffffff", Q6);
      }
    }
  },
  Sq = (() => {
    let Q1 = p(0x5a4a3),
      Q2 = [];
    for (let Q3 = 0x0; Q3 < 0xb4; Q3++) {
      let Q4 = Q3 % 0x4,
        Q5 = Q1(),
        Q6 = Q4 === 0x0 ? Q5 * 0x280 : Q4 === 0x1 ? 0x294 : Q4 === 0x2 ? Q5 * 0x280 : -0x14,
        Q7 = Q4 === 0x0 ? -0x14 : Q4 === 0x1 ? Q5 * 0x1e0 : Q4 === 0x2 ? 0x1f4 : Q5 * 0x1e0;
      Q2.push({
        'sx': Q6,
        'sy': Q7,
        'tx': 0x8 + Q1() * 0x270,
        'ty': 0x8 + Q1() * 0x1d0,
        'curve': (Q1() - 0.5) * 0xa0,
        'delay': Q1() * 0x4
      });
    }
    return Q2;
  })();
function St(Q1, Q2) {
  let Q3 = Math.pow(SS((Q2 - Q1.delay) / (0xd - Q1.delay)), 0x2),
    Q4 = Q1.tx - Q1.sx,
    Q5 = Q1.ty - Q1.sy,
    Q6 = Math.hypot(Q4, Q5) || 0x1,
    Q7 = Math.sin(Math.PI * Q3) * Q1.curve;
  return {
    'x': Q1.sx + Q4 * Q3 - Q5 / Q6 * Q7,
    'y': Q1.sy + Q5 * Q3 + Q4 / Q6 * Q7
  };
}
S8(St, 'swarmPos');
var SA = S8((Q1, Q2, Q3) => {
    SO(Q1, "#3a2a4a", Q2 - 0x8, Q3 - 0x8, 0x10, 0x10), SO(Q1, "#806080", Q2 - 0x4, Q3 - 0x8, 0x8, 0x4);
  }, 'blob'),
  SV = {
    'coverT': 0xd,
    'revealT': 0x8,
    'sfx': [[0x4, 'snd_bump', 0.15, 0x1], [0x9, 'snd_bump', 0.15, 0x1]],
    'revealSfx': ['snd_sparkle_gem', 0.2, 0x1],
    'cover'(Q1, Q2) {
      let Q3 = Q1.ctx;
      Sa(Q3, Q2 / 0xb);
      for (let Q4 of Sq) {
        if (Q2 < Q4.delay) continue;
        let Q5 = St(Q4, Q2);
        SA(Q3, Sy(Q5.x), Sy(Q5.y));
      }
      SO(Q3, "#000", 0x12c, 0xdc, 0x28, 0x28), Q1.draw_sprite_ext('spr_heart', 0x0, 0x130, 0xe0, 0x2, 0x2, 0x0, "#ffffff", 0x1);
    },
    'reveal'(Q1, Q2, Q3) {
      let Q4 = Q1.ctx,
        Q5 = SQ(Q2 / 0x8) * 0x1a4;
      Q4.save(), Q4.beginPath(), Q4.rect(0x0, 0x0, 0x280, 0x1e0), Q5 > 0x0 && (Q4.moveTo(0x140 + Q5, 0xf0), Q4.arc(0x140, 0xf0, Q5, 0x0, Math.PI * 0x2, !0x0)), Q4.clip('evenodd'), Sa(Q4, 0x1);
      for (let Q7 of Sq) SA(Q4, Sy(Q7.tx), Sy(Q7.ty));
      Q4.restore(), Su(Q4, 0x140, 0xf0, Q5, Q3.calm ? "rgba(255,255,0,0.6)" : "#ffff00", 0x2);
      let Q6 = 0x0;
      for (let Q8 of Sq) {
        if (Q6 >= 0x40) break;
        let Q9 = Math.hypot(Q8.tx - 0x140, Q8.ty - 0xf0);
        if (Q9 > Q5) continue;
        let QS = (0x1 - Math.cbrt(Math.max(0x0, 0x1 - Q9 / 0x1a4))) * 0x8,
          QQ = Q2 - QS;
        if (QQ < 0x0 || QQ >= 0x5) continue;
        Q6++;
        let QP = 0x1 - QQ / 0x5,
          Qx = 0x4 + QQ * 0x5,
          QW = (Q8.tx - 0x140) / (Q9 || 0x1),
          Qy = (Q8.ty - 0xf0) / (Q9 || 0x1);
        Q4.globalAlpha = QP;
        for (let [QO, Qa] of [[QW, Qy], [-Qy, QW], [Qy, -QW], [QW * 0.5 - Qy * 0.5, Qy * 0.5 + QW * 0.5]]) SO(Q4, "#00ffff", Q8.tx + QO * Qx - 0x2, Q8.ty + Qa * Qx - 0x2, 0x4, 0x4);
        Q4.globalAlpha = 0x1;
      }
    }
  },
  SH = 0x28,
  Sg = 0xc,
  Sf = (() => {
    let Q1 = p(0x7e7215),
      Q2 = [],
      Q3 = [[[[0x0, 0x0], [0x0, 0x1], [0x1, 0x0], [0x1, 0x1]], [[0x0, 0x2], [0x0, 0x3], [0x1, 0x2], [0x1, 0x3]]], [[[0x0, 0x0], [0x0, 0x1], [0x0, 0x2], [0x0, 0x3]], [[0x1, 0x0], [0x1, 0x1], [0x1, 0x2], [0x1, 0x3]]], [[[0x0, 0x0], [0x1, 0x0], [0x1, 0x1], [0x1, 0x2]], [[0x0, 0x1], [0x0, 0x2], [0x0, 0x3], [0x1, 0x3]]]];
    for (let Q4 = 0x0; Q4 < 0x6; Q4++) {
      let Q5 = Sg - 0x2 - Q4 * 0x2;
      for (let Q6 = 0x0; Q6 < 0x4; Q6++) Q3[Math.floor(Q1() * 0x3)].forEach((Q7, Q8) => Q2.push({
        'band': Q4,
        'col': 0x1 + Math.floor(Q1() * 0x9),
        'lock': 0x1 + Q4 * 0x2 + (Q6 + Q8) * 0.25,
        'cells': Q7.map(([Q9, QS]) => [Q5 + Q9, Q6 * 0x4 + QS])
      }));
    }
    return Q2;
  })(),
  SX = {
    'coverT': 0xc,
    'revealT': 0x9,
    'sfx': [[0x3, 'snd_bump', 0.18, 0x1], [0x6, 'snd_bump', 0.18, 0x1], [0x9, 'snd_bump', 0.18, 0x1]],
    'revealSfx': ['snd_break1', 0.3, 0x1],
    'cover'(Q1, Q2) {
      let Q3 = Q1.ctx;
      Sa(Q3, (Q2 - 0x6) / 0x6);
      for (let Q4 of Sf) {
        let Q5 = Q4.lock - Q2;
        if (Q5 > 0x2) continue;
        let Q6 = Q5 > 0x0 ? Math.ceil(Q5 * 0x6) : 0x0,
          Q7 = Q5 <= 0x0 && Q5 > -0x1 ? 0x2 : 0x0,
          Q8 = e(S0[Q4.col] || "#808080", SH);
        for (let [Q9, QS] of Q4.cells) {
          let QQ = (Q9 - Q6) * SH + Q7;
          QQ > -SH && Q3.drawImage(Q8, QS * SH, QQ);
        }
      }
    },
    'reveal'(Q1, Q2, Q3) {
      let Q4 = Q1.ctx;
      for (let Q5 = 0x0; Q5 < Sg; Q5++) {
        let Q6 = Q5 * 0.5,
          Q7 = Q2 - Q6;
        if (Q7 >= 0x3) continue;
        let Q8 = SH;
        if (Q7 >= 0x1 && (Q8 = Sy(SH * (0x1 - (Q7 - 0x1) / 0x2))), Q8 <= 0x0) continue;
        let Q9 = Q5 * SH + Sy((SH - Q8) / 0x2);
        for (let QS of Sf) for (let [QQ, QP] of QS.cells) if (QQ === Q5) {
          let Qx = e(S0[QS.col] || "#808080", SH);
          Q4.drawImage(Qx, 0x0, 0x0, SH, Q8, QP * SH, Q9, SH, Q8);
        }
        Q7 >= 0x0 && Q7 < 0x1 && !Q3.calm && (Q4.globalAlpha = 0.3, SO(Q4, "#ffffff", 0x0, Q9, 0x280, Q8), Q4.globalAlpha = 0x1);
      }
    }
  },
  Sv = (() => {
    let Q1;
    try {
      Q1 = n(0x4, 'DELTARUNE');
    } catch {
      Q1 = [0x0, 0x1, 0x2, 0x3].map(() => ({
        'base': "#ffffff",
        'dark': "#404040",
        'light': "#ffffff"
      }));
    }
    let Q2 = [0x0, 0x2, 0x1, 0x3, 0x4, 0x6, 0x5, 0x7];
    return [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7].map(Q3 => ({
      'c': Q1[Q3 % 0x4],
      'delay': Q2.indexOf(Q3) * 0.7
    }));
  })(),
  So = 0x1a4;
function ST(Q1, Q2, Q3, Q4) {
  let Q5 = Sv[Q2],
    Q6 = Q2 * 0x50;
  Q4 - Q3 <= 0x0 || (SO(Q1, Q5.c.dark, Q6 + 0x6, Q3, 0x44, Q4 - Q3), SO(Q1, Q5.c.base, Q6 + 0x6, Q3, 0x4, Q4 - Q3), SO(Q1, Q5.c.base, Q6 + 0x46, Q3, 0x4, Q4 - Q3), SO(Q1, Q5.c.light || "#ffffff", Q6 + 0x6, Q4 - 0x8, 0x44, 0x8));
}
S8(ST, 'laneBody');
var SZ = {
    'coverT': 0xb,
    'revealT': 0x8,
    'sfx': [[0xa, 'snd_select', 0.2, 0x1]],
    'cover'(Q1, Q2) {
      let Q3 = Q1.ctx;
      Sa(Q3, Q2 / 0xb);
      for (let Q4 = 0x0; Q4 < 0x8; Q4++) {
        let Q5 = SQ((Q2 - Sv[Q4].delay) / 0x6);
        ST(Q3, Q4, 0x0, Sy(So * Q5)), Q3.strokeStyle = Sv[Q4].c.base, Q3.lineWidth = 0x2, Q3.strokeRect(Q4 * 0x50 + 0x5, So + 0x1, 0x46, 0xe);
      }
    },
    'reveal'(Q1, Q2, Q3) {
      let Q4 = Q1.ctx,
        Q5 = 0x1 - SS((Q2 - 0x6) / 0x2);
      Q5 > 0x0 && (Q4.globalAlpha = Q5, SO(Q4, "#000", 0x0, So - 0x2, 0x280, 0x1e0 - So + 0x2), Q4.globalAlpha = 0x1);
      for (let Q6 = 0x0; Q6 < 0x8; Q6++) {
        let Q7 = SP(Q2 / 0x6),
          Q8 = Sy(So * Q7);
        Q7 < 0x1 ? ST(Q4, Q6, Q8, So) : Q2 < 0x7 && (SO(Q4, "#ffffff", Q6 * 0x50 + 0x1e, So - 0x18, 0x14, 0x4), SO(Q4, "#ffffff", Q6 * 0x50 + 0x26, So - 0x20, 0x4, 0x14)), Q5 > 0x0 && (Q4.globalAlpha = Q5, Q2 < 0x1 ? SO(Q4, SL(Q3.calm), Q6 * 0x50 + 0x5, So + 0x1, 0x46, 0xe) : (Q4.strokeStyle = Sv[Q6].c.base, Q4.lineWidth = 0x2, Q4.strokeRect(Q6 * 0x50 + 0x5, So + 0x1, 0x46, 0xe)), Q4.globalAlpha = 0x1);
      }
    }
  },
  SU = [["#000000", "#404040", "#808080"], ["#33300a", "#ffff00", "#ffff00"], ["#16301a", "#7ad17a", "#7ad17a"]],
  SC = String(s || 'DARKDLE').toUpperCase().replace(/[^A-Z0-9]/g, '') || 'DARKDLE';
function Sh(Q1, Q2, Q3, Q4) {
  let Q5 = Q1.ctx,
    Q6 = Sy(0x50 * Q4);
  if (Q6 < 0x1) return;
  let [Q7, Q8, Q9] = SU[(Q2 + Q3) % 0x3],
    QS = Q2 * 0x50,
    QQ = Q3 * 0x50 + Sy((0x50 - Q6) / 0x2);
  SO(Q5, "#000", QS, QQ, 0x50, Q6), SO(Q5, Q7, QS + 0x4, QQ + (Q6 > 0x8 ? 0x4 : 0x0), 0x48, Math.max(0x1, Q6 - (Q6 > 0x8 ? 0x8 : 0x0))), Q5.strokeStyle = Q8, Q5.lineWidth = 0x2, Q5.strokeRect(QS + 0x5, QQ + (Q6 > 0xa ? 0x5 : 0x1), 0x46, Math.max(0x1, Q6 - (Q6 > 0xa ? 0xa : 0x2))), Q6 > 0x3c && (Q1.draw_set_font('fnt_mainbig'), Q1.draw_set_halign('center'), Q1.draw_set_color(Q9), Q1.draw_text_transformed(QS + 0x28, QQ + Sy(Q6 / 0x2) - 0x1e, SC[(Q3 * 0x8 + Q2) % SC.length], 0x2, 0x2, 0x0), Q1.draw_set_halign('left'));
}
S8(Sh, 'dTile');
var SG = {
    'coverT': 0xc,
    'revealT': 0x8,
    'sfx': [[0x2, 'snd_menumove', 0.2, 0x1], [0x6, 'snd_menumove', 0.2, 0x1], [0xa, 'snd_menumove', 0.2, 0x1]],
    'cover'(Q1, Q2) {
      Sa(Q1.ctx, Q2 / 0xa);
      for (let Q3 = 0x0; Q3 < 0x6; Q3++) for (let Q4 = 0x0; Q4 < 0x8; Q4++) {
        let Q5 = SS((Q2 - (Q4 + Q3) * 0.45) / 0x6);
        Q5 > 0x0 && Sh(Q1, Q4, Q3, Math.abs(Math.cos(Math.PI / 0x2 * (0x1 - Q5))));
      }
    },
    'reveal'(Q1, Q2) {
      for (let Q3 = 0x0; Q3 < 0x6; Q3++) for (let Q4 = 0x0; Q4 < 0x8; Q4++) {
        let Q5 = SS((Q2 - Q4 * 0.55) / 0x4);
        Q5 < 0x1 && Sh(Q1, Q4, Q3, Math.abs(Math.cos(Math.PI / 0x2 * Q5)));
      }
    }
  },
  Sb = 0x50,
  Sd = 0x3c,
  SI = null,
  SJ = null,
  Sk = S8((Q1, Q2) => i((Q1 + 0.5 - 0x28) / 0x11, (Q2 + 0.5 - 0x1e) / 0x11 + 0.05), 'bShape'),
  Sp = S8((Q1, Q2) => Sy(2.5 * Math.sin(Q1 * 0.7 + Q2 * 2.1) + 1.8 * Math.sin(Q1 * 1.9 - Q2 * 3.3)), 'bNoise'),
  Sz = null;
function SK(Q1, Q2) {
  if (SI || (SI = document.createElement('canvas'), SI.width = Sb, SI.height = Sd, SJ = SI.getContext('2d').createImageData(Sb, Sd)), !Sz) {
    Sz = new Uint8Array(Sb * Sd);
    for (let Q4 = 0x0; Q4 < Sd; Q4++) for (let Q5 = 0x0; Q5 < Sb; Q5++) Sz[Q4 * Sb + Q5] = Sk(Q5, Q4) ? 0x1 : 0x0;
  }
  let Q3 = SJ.data;
  for (let Q6 = 0x0; Q6 < Sd; Q6++) for (let Q7 = 0x0; Q7 < Sb; Q7++) {
    let Q8 = Q2(Q7, Q6, Sz[Q6 * Sb + Q7]),
      Q9 = (Q6 * Sb + Q7) * 0x4;
    if (Q8 < 0x0) {
      Q3[Q9 + 0x3] = 0x0;
      continue;
    }
    Q3[Q9] = Q3[Q9 + 0x1] = Q3[Q9 + 0x2] = Q8, Q3[Q9 + 0x3] = 0xff;
  }
  SI.getContext('2d').putImageData(SJ, 0x0, 0x0), Q1.imageSmoothingEnabled = !0x1, Q1.drawImage(SI, 0x0, 0x0, 0x280, 0x1e0);
}
S8(SK, 'bField');
var Se = {
    'coverT': 0xb,
    'revealT': 0x8,
    'sfx': [],
    'cover'(Q1, Q2, Q3) {
      let Q4 = Math.min(0x1, Q2 / 0x9) * (Sb + 0x8) - 0x4,
        Q5 = Q3.calm ? 0xa0 : 0xff;
      SK(Q1.ctx, (Q6, Q7, Q8) => Q6 < Q4 + Sp(Q7, Q2) ? Q8 ? Q5 : 0x0 : -0x1);
    },
    'reveal'(Q1, Q2, Q3) {
      let Q4 = (0x1 - Q2 / 0x8) * (Sb + 0x8) - 0x4,
        Q5 = Q3.calm ? 0xa0 : 0xff;
      SK(Q1.ctx, (Q6, Q7, Q8) => Q6 < Q4 + Sp(Q7, Q2 + 0xb) ? Q8 ? Q5 : 0x0 : -0x1);
    }
  },
  Sj = {
    'blackjack': Sl,
    'spellcard': SN,
    'survivors': SV,
    'tetris': SX,
    'mania': SZ,
    'darkdle': SG,
    'badapple': Se
  },
  SF = {
    'reveal': null
  },
  Sw = null,
  Si = S8(() => Sw ? Sw() : typeof performance < 'u' ? performance.now() : Date.now(), 'now');
function Ss(Q1) {
  Sw = typeof Q1 == 'function' ? Q1 : null;
}
S8(Ss, 'setClock');
var SD = null;
function SM(Q1) {
  SD = Q1;
}
S8(SM, 'setSfx');
function SY(Q1, Q2 = {}) {
  Sj[Q1] && (SF.reveal = {
    'id': Q1,
    'start': Si(),
    't': 0x0,
    'last': null,
    'heard': !0x1,
    'O': {
      'x': 0x140,
      'y': 0xf0,
      'calm': !0x1,
      ...Q2
    }
  });
}
S8(SY, 'startReveal');
var Sr = S8(() => !!SF.reveal, 'revealActive'),
  Sn = S8(() => {
    let Q1 = S2();
    return !!(Q1 && Q1.getState && Q1.getState() === 'menu' && S1('games'));
  }, 'pageUp');
function Sm(Q1) {
  let Q2 = Si();
  if (Sn()) return !Sw && Q2 - Q1.start > 0xbb8 && (SF.reveal = null), !0x1;
  if (!Q1.heard) {
    Q1.heard = !0x0;
    let Q3 = Sj[Q1.id];
    Q3.revealSfx && SD && SD(...Q3.revealSfx);
  }
  return Sw ? (Q1.t = (Q2 - Q1.start) / SW, !0x0) : Q1.last == null ? (Q1.last = Q2, Q1.t = 0x0, !0x0) : (Q1.t += Math.max(0x0, Math.min(1.5, (Q2 - Q1.last) / SW)), Q1.last = Q2, !0x0);
}
S8(Sm, 'advance');
var SE = S8(() => SF.reveal ? {
  'id': SF.reveal.id,
  't': SF.reveal.t
} : null, 'revealInfo');
function Q0() {
  SF.reveal = null;
}
S8(Q0, 'endReveal'), S3('overlay', Q1 => {
  let Q2 = SF.reveal;
  if (!Q2) return;
  let Q3 = Sj[Q2.id];
  if (!Q3) {
    SF.reveal = null;
    return;
  }
  if (!Sm(Q2)) return;
  let Q4 = Q2.t;
  if (Q4 >= Q3.revealT) {
    SF.reveal = null;
    return;
  }
  S4(Q1, () => Q3.reveal(Q1, Math.max(0x0, Q4), Q2.O));
}, {
  'owner': 'games'
});
if (typeof window < 'u' && window.addEventListener) {
  let QL = S8(Q1 => {
    SF.reveal && (Q1 && Q1.type === 'keydown' && /^(Shift|Control|Alt|Meta|CapsLock)$/.test(Q1.key || '') || (SF.reveal = null));
  }, 'end');
  window.addEventListener('keydown', QL, {
    'capture': !0x0,
    'passive': !0x0
  }), window.addEventListener('pointerdown', QL, {
    'capture': !0x0,
    'passive': !0x0
  });
}
export { Sj as TRANS, Q0 as endReveal, Si as now, Sx as outBack, Sr as revealActive, SE as revealInfo, Ss as setClock, SM as setSfx, SY as startReveal };