import { c as b, d as p, e, f as i } from "./c-KUB754KJ.js";
import { a as s } from "./c-UP7LE7CI.js";
import { Y as r, z as n } from "./c-YY3TNHWF.js";
import "./c-RNLQZIER.js";
import "./c-CCL3XGEJ.js";
import { a as S0 } from "./c-B36JSU6C.js";
import "./c-BKTN6CPB.js";
import "./c-XTWZZNZA.js";
import "./c-BERKZCGM.js";
import "./c-VB7PBWB7.js";
import { X as S1, f as S2, l as S3, ya as S4 } from "./c-AXDRFE3U.js";
import { H as S5, I as S6, ba as S7 } from "./c-VGC6FILU.js";
import "./c-H5LU7UHS.js";
import "./c-AYDQ2WI5.js";
import "./c-SHU6ROUQ.js";
import "./c-F3KC5JBP.js";
import "./c-QVGXLNTR.js";
import "./c-S573BZHI.js";
import "./c-SRPTC2P4.js";
import "./c-4VFR2NSV.js";
import "./c-7BWKVCRS.js";
import "./c-EJF6JQ2U.js";
import "./c-E3FAV6Z4.js";
import "./c-TW2FVSA5.js";
import "./c-H2HTZPEL.js";
import "./c-V7HIBOZL.js";
import "./c-S6HGHCFD.js";
import "./c-HQHPDIVM.js";
import "./c-PNL2T3BD.js";
import "./c-GABAATJZ.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import "./c-3KRFGFG4.js";
import "./c-VG5U7RS4.js";
import "./c-YJAH7XEB.js";
import "./c-PGO4VU5H.js";
import "./c-KLECZKO5.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import "./c-J7PU4477.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import "./c-3ELH3LBH.js";
import "./c-WSZI3RLB.js";
import "./c-NNTXHBME.js";
import "./c-OYFOJ3BV.js";
import "./c-MYK6C3LF.js";
import "./c-GI6IDYOV.js";
import "./c-E7FVSW52.js";
import "./c-ZQQWH6UG.js";
import "./c-PBMEVLU6.js";
import { a as S8, l as S9 } from "./c-XSSGDLV7.js";
S9();
var {
  k01: SS,
  outCubic: SQ,
  inCubic: SP,
  outBack: Sx
} = b;
var SW = 33.333333333333336;
var Sy = Math.round;
var SO = S8((Q1, Q2, Q3, Q4, Q5, Q6) => {
  Q1.fillStyle = Q2;
  Q1.fillRect(Sy(Q3), Sy(Q4), Sy(Q5), Sy(Q6));
}, "fill");
var Sa = S8((Q1, Q2) => {
  if (!(Q2 <= 0)) {
    Q1.globalAlpha = Math.min(1, Q2);
    Q1.fillStyle = "#000";
    Q1.fillRect(0, 0, 640, 480);
    Q1.globalAlpha = 1;
  }
}, "black");
var SL = S8(Q1 => Q1 ? "rgba(255,255,0,0.4)" : "#ffffff", "flashCol");
function SB(Q1, Q2, Q3, Q4) {
  Q1.fillStyle = "#000";
  Q1.beginPath();
  Q1.rect(0, 0, 640, 480);
  if (Q4 > 0) {
    Q1.moveTo(Q2 + Q4, Q3);
    Q1.arc(Q2, Q3, Q4, 0, Math.PI * 2, true);
  }
  Q1.fill("evenodd");
}
S8(SB, "holeBlack");
function Su(Q1, Q2, Q3, Q4, Q5, Q6 = 2) {
  if (!(Q4 <= 0)) {
    Q1.strokeStyle = Q5;
    Q1.lineWidth = Q6;
    Q1.beginPath();
    Q1.arc(Q2, Q3, Q4, 0, Math.PI * 2);
    Q1.stroke();
  }
}
S8(Su, "ring");
var SR = (() => {
  let Q1 = [];
  for (let Q2 = 0; Q2 < 5; Q2++) {
    for (let Q3 = 0; Q3 < 9; Q3++) {
      Q1.push({
        x: 1 + Q3 * 70,
        y: -19 + Q2 * 102,
        d: Q3 + Q2
      });
    }
  }
  Q1.sort((Q4, Q5) => Q4.d - Q5.d || Q4.x - Q5.x);
  Q1.forEach((Q4, Q5) => {
    Q4.i = Q5;
  });
  return Q1;
})();
function Sc(Q1, Q2, Q3, Q4) {
  let Q5 = {
    faceDown: true,
    scale: 2,
    back: "51",
    shadow: false
  };
  if (Q4 != null) {
    Q5.flip = Q4;
    Q5.faceDown = false;
  }
  if (S7(Q1, null, Q2, Q3, Q5)) {
    return;
  }
  let Q6 = Q4 != null ? Sy(S5 * Math.abs(Math.cos(Math.PI * Q4))) * 2 : S5 * 2;
  if (Q6 < 2) {
    return;
  }
  let Q7 = Sy(Q2 + (S5 * 2 - Q6) / 2);
  SO(Q1, "#ffffff", Q7, Q3, Q6, S6 * 2);
  SO(Q1, "#5a1020", Q7 + 2, Q3 + 2, Q6 - 4, S6 * 2 - 4);
}
S8(Sc, "backCard");
var Sl = {
  coverT: 13,
  revealT: 9,
  sfx: [[0, "snd_smallswing", 0.14, 1.55], [4, "snd_smallswing", 0.14, 1.55], [8, "snd_smallswing", 0.14, 1.55], [12, "snd_bump", 0.1, 1.75]],
  cover(Q1, Q2, Q3) {
    let Q4 = Q1.ctx;
    Sa(Q4, Q2 / 8);
    for (let Q5 of SR) {
      let Q6 = Q5.i * 0.15;
      let Q7 = (Q2 - Q6) / 6;
      if (Q7 <= 0) {
        continue;
      }
      let Q8 = Q5.x;
      let Q9 = Q5.y;
      let QS = Q3.x - S5;
      let QQ = Q3.y - S6;
      let QP = SQ(Q7);
      let Qx = QS + (Q8 - QS) * QP;
      let QW = QQ + (Q9 - QQ) * QP;
      if (Q7 >= 1 && Q7 < 1.1666666666666667) {
        QW -= 2;
      }
      Sc(Q4, Sy(Qx), Sy(QW), null);
    }
  },
  reveal(Q1, Q2) {
    let Q3 = Q1.ctx;
    for (let Q4 of SR) {
      let Q5 = Q4.i / SR.length * 5;
      let Q6 = (Q2 - Q5) / 4;
      if (!(Q6 >= 1)) {
        Sc(Q3, Q4.x, Q4.y, Q6 <= 0 ? null : Q6 * 0.5);
      }
    }
  }
};
var SN = {
  coverT: 12,
  revealT: 9,
  sfx: [[6, "snd_graze", 0.25, 1]],
  revealSfx: ["snd_spellcast", 0.2, 1],
  cover(Q1, Q2) {
    let Q3 = Q1.ctx;
    Sa(Q3, Q2 / 10);
    let Q4 = SS(Q2 / 12);
    for (let Q5 = 0; Q5 < 3; Q5++) {
      let Q6 = [330, 262, 196][Q5] * Math.pow(1 - Q4, 1.6);
      let Q7 = Math.PI / 2 * Q4 + Q5 * 0.13;
      let Q8 = r[Q5 % r.length];
      for (let Q9 = 0; Q9 < 24; Q9++) {
        let QS = Q7 + Q9 / 24 * Math.PI * 2;
        let QQ = Sy(320 + Math.cos(QS) * Q6);
        let QP = Sy(240 + Math.sin(QS) * Q6);
        if (!(QQ < -6) && !(QP < -6) && !(QQ > 646) && !(QP > 486)) {
          SO(Q3, Q8, QQ - 3, QP - 1, 6, 2);
          SO(Q3, Q8, QQ - 1, QP - 3, 2, 6);
          SO(Q3, Q8, QQ - 2, QP - 2, 4, 4);
          SO(Q3, "#ffffff", QQ - 1, QP - 1, 2, 2);
        }
      }
    }
    if (Q2 >= 2) {
      Q1.draw_sprite_ext("spr_heart", 0, 296, 216, 3, 3, 0, "#ffffff", 1);
    }
  },
  reveal(Q1, Q2, Q3) {
    let Q4 = Q1.ctx;
    let Q5 = SQ(Q2 / 9) * 420;
    SB(Q4, 320, 240, Q5);
    Su(Q4, 320, 240, Q5, Q3.calm ? "rgba(255,255,0,0.4)" : "#ffffff", 2);
    let Q6 = 1 - SS(Q2 / 4);
    if (Q6 > 0) {
      let Q7 = Q2 < 1 ? 4 : 3;
      Q1.draw_sprite_ext("spr_heart", 0, 320 - Q7 * 8, 240 - Q7 * 8, Q7, Q7, 0, "#ffffff", Q6);
    }
  }
};
var Sq = (() => {
  let Q1 = p(369827);
  let Q2 = [];
  for (let Q3 = 0; Q3 < 180; Q3++) {
    let Q4 = Q3 % 4;
    let Q5 = Q1();
    let Q6 = Q4 === 0 ? Q5 * 640 : Q4 === 1 ? 660 : Q4 === 2 ? Q5 * 640 : -20;
    let Q7 = Q4 === 0 ? -20 : Q4 === 1 ? Q5 * 480 : Q4 === 2 ? 500 : Q5 * 480;
    Q2.push({
      sx: Q6,
      sy: Q7,
      tx: 8 + Q1() * 624,
      ty: 8 + Q1() * 464,
      curve: (Q1() - 0.5) * 160,
      delay: Q1() * 4
    });
  }
  return Q2;
})();
function St(Q1, Q2) {
  let Q3 = Math.pow(SS((Q2 - Q1.delay) / (13 - Q1.delay)), 2);
  let Q4 = Q1.tx - Q1.sx;
  let Q5 = Q1.ty - Q1.sy;
  let Q6 = Math.hypot(Q4, Q5) || 1;
  let Q7 = Math.sin(Math.PI * Q3) * Q1.curve;
  return {
    x: Q1.sx + Q4 * Q3 - Q5 / Q6 * Q7,
    y: Q1.sy + Q5 * Q3 + Q4 / Q6 * Q7
  };
}
S8(St, "swarmPos");
var SA = S8((Q1, Q2, Q3) => {
  SO(Q1, "#3a2a4a", Q2 - 8, Q3 - 8, 16, 16);
  SO(Q1, "#806080", Q2 - 4, Q3 - 8, 8, 4);
}, "blob");
var SV = {
  coverT: 13,
  revealT: 8,
  sfx: [[4, "snd_bump", 0.15, 1], [9, "snd_bump", 0.15, 1]],
  revealSfx: ["snd_sparkle_gem", 0.2, 1],
  cover(Q1, Q2) {
    let Q3 = Q1.ctx;
    Sa(Q3, Q2 / 11);
    for (let Q4 of Sq) {
      if (Q2 < Q4.delay) {
        continue;
      }
      let Q5 = St(Q4, Q2);
      SA(Q3, Sy(Q5.x), Sy(Q5.y));
    }
    SO(Q3, "#000", 300, 220, 40, 40);
    Q1.draw_sprite_ext("spr_heart", 0, 304, 224, 2, 2, 0, "#ffffff", 1);
  },
  reveal(Q1, Q2, Q3) {
    let Q4 = Q1.ctx;
    let Q5 = SQ(Q2 / 8) * 420;
    Q4.save();
    Q4.beginPath();
    Q4.rect(0, 0, 640, 480);
    if (Q5 > 0) {
      Q4.moveTo(320 + Q5, 240);
      Q4.arc(320, 240, Q5, 0, Math.PI * 2, true);
    }
    Q4.clip("evenodd");
    Sa(Q4, 1);
    for (let Q7 of Sq) {
      SA(Q4, Sy(Q7.tx), Sy(Q7.ty));
    }
    Q4.restore();
    Su(Q4, 320, 240, Q5, Q3.calm ? "rgba(255,255,0,0.6)" : "#ffff00", 2);
    let Q6 = 0;
    for (let Q8 of Sq) {
      if (Q6 >= 64) {
        break;
      }
      let Q9 = Math.hypot(Q8.tx - 320, Q8.ty - 240);
      if (Q9 > Q5) {
        continue;
      }
      let QS = (1 - Math.cbrt(Math.max(0, 1 - Q9 / 420))) * 8;
      let QQ = Q2 - QS;
      if (QQ < 0 || QQ >= 5) {
        continue;
      }
      Q6++;
      let QP = 1 - QQ / 5;
      let Qx = 4 + QQ * 5;
      let QW = (Q8.tx - 320) / (Q9 || 1);
      let Qy = (Q8.ty - 240) / (Q9 || 1);
      Q4.globalAlpha = QP;
      for (let [QO, Qa] of [[QW, Qy], [-Qy, QW], [Qy, -QW], [QW * 0.5 - Qy * 0.5, Qy * 0.5 + QW * 0.5]]) {
        SO(Q4, "#00ffff", Q8.tx + QO * Qx - 2, Q8.ty + Qa * Qx - 2, 4, 4);
      }
      Q4.globalAlpha = 1;
    }
  }
};
var SH = 40;
var Sg = 12;
var Sf = (() => {
  let Q1 = p(8286741);
  let Q2 = [];
  let Q3 = [[[[0, 0], [0, 1], [1, 0], [1, 1]], [[0, 2], [0, 3], [1, 2], [1, 3]]], [[[0, 0], [0, 1], [0, 2], [0, 3]], [[1, 0], [1, 1], [1, 2], [1, 3]]], [[[0, 0], [1, 0], [1, 1], [1, 2]], [[0, 1], [0, 2], [0, 3], [1, 3]]]];
  for (let Q4 = 0; Q4 < 6; Q4++) {
    let Q5 = Sg - 2 - Q4 * 2;
    for (let Q6 = 0; Q6 < 4; Q6++) {
      Q3[Math.floor(Q1() * 3)].forEach((Q7, Q8) => Q2.push({
        band: Q4,
        col: 1 + Math.floor(Q1() * 9),
        lock: 1 + Q4 * 2 + (Q6 + Q8) * 0.25,
        cells: Q7.map(([Q9, QS]) => [Q5 + Q9, Q6 * 4 + QS])
      }));
    }
  }
  return Q2;
})();
var SX = {
  coverT: 12,
  revealT: 9,
  sfx: [[3, "snd_bump", 0.18, 1], [6, "snd_bump", 0.18, 1], [9, "snd_bump", 0.18, 1]],
  revealSfx: ["snd_break1", 0.3, 1],
  cover(Q1, Q2) {
    let Q3 = Q1.ctx;
    Sa(Q3, (Q2 - 6) / 6);
    for (let Q4 of Sf) {
      let Q5 = Q4.lock - Q2;
      if (Q5 > 2) {
        continue;
      }
      let Q6 = Q5 > 0 ? Math.ceil(Q5 * 6) : 0;
      let Q7 = Q5 <= 0 && Q5 > -1 ? 2 : 0;
      let Q8 = e(S0[Q4.col] || "#808080", SH);
      for (let [Q9, QS] of Q4.cells) {
        let QQ = (Q9 - Q6) * SH + Q7;
        if (QQ > -SH) {
          Q3.drawImage(Q8, QS * SH, QQ);
        }
      }
    }
  },
  reveal(Q1, Q2, Q3) {
    let Q4 = Q1.ctx;
    for (let Q5 = 0; Q5 < Sg; Q5++) {
      let Q6 = Q5 * 0.5;
      let Q7 = Q2 - Q6;
      if (Q7 >= 3) {
        continue;
      }
      let Q8 = SH;
      if (Q7 >= 1) {
        Q8 = Sy(SH * (1 - (Q7 - 1) / 2));
      }
      if (Q8 <= 0) {
        continue;
      }
      let Q9 = Q5 * SH + Sy((SH - Q8) / 2);
      for (let QS of Sf) {
        for (let [QQ, QP] of QS.cells) {
          if (QQ === Q5) {
            let Qx = e(S0[QS.col] || "#808080", SH);
            Q4.drawImage(Qx, 0, 0, SH, Q8, QP * SH, Q9, SH, Q8);
          }
        }
      }
      if (Q7 >= 0 && Q7 < 1 && !Q3.calm) {
        Q4.globalAlpha = 0.3;
        SO(Q4, "#ffffff", 0, Q9, 640, Q8);
        Q4.globalAlpha = 1;
      }
    }
  }
};
var Sv = (() => {
  let Q1;
  try {
    Q1 = n(4, "DELTARUNE");
  } catch {
    Q1 = [0, 1, 2, 3].map(() => ({
      base: "#ffffff",
      dark: "#404040",
      light: "#ffffff"
    }));
  }
  let Q2 = [0, 2, 1, 3, 4, 6, 5, 7];
  return [0, 1, 2, 3, 4, 5, 6, 7].map(Q3 => ({
    c: Q1[Q3 % 4],
    delay: Q2.indexOf(Q3) * 0.7
  }));
})();
var So = 420;
function ST(Q1, Q2, Q3, Q4) {
  let Q5 = Sv[Q2];
  let Q6 = Q2 * 80;
  if (!(Q4 - Q3 <= 0)) {
    SO(Q1, Q5.c.dark, Q6 + 6, Q3, 68, Q4 - Q3);
    SO(Q1, Q5.c.base, Q6 + 6, Q3, 4, Q4 - Q3);
    SO(Q1, Q5.c.base, Q6 + 70, Q3, 4, Q4 - Q3);
    SO(Q1, Q5.c.light || "#ffffff", Q6 + 6, Q4 - 8, 68, 8);
  }
}
S8(ST, "laneBody");
var SZ = {
  coverT: 11,
  revealT: 8,
  sfx: [[10, "snd_select", 0.2, 1]],
  cover(Q1, Q2) {
    let Q3 = Q1.ctx;
    Sa(Q3, Q2 / 11);
    for (let Q4 = 0; Q4 < 8; Q4++) {
      let Q5 = SQ((Q2 - Sv[Q4].delay) / 6);
      ST(Q3, Q4, 0, Sy(So * Q5));
      Q3.strokeStyle = Sv[Q4].c.base;
      Q3.lineWidth = 2;
      Q3.strokeRect(Q4 * 80 + 5, So + 1, 70, 14);
    }
  },
  reveal(Q1, Q2, Q3) {
    let Q4 = Q1.ctx;
    let Q5 = 1 - SS((Q2 - 6) / 2);
    if (Q5 > 0) {
      Q4.globalAlpha = Q5;
      SO(Q4, "#000", 0, So - 2, 640, 480 - So + 2);
      Q4.globalAlpha = 1;
    }
    for (let Q6 = 0; Q6 < 8; Q6++) {
      let Q7 = SP(Q2 / 6);
      let Q8 = Sy(So * Q7);
      if (Q7 < 1) {
        ST(Q4, Q6, Q8, So);
      } else if (Q2 < 7) {
        SO(Q4, "#ffffff", Q6 * 80 + 30, So - 24, 20, 4);
        SO(Q4, "#ffffff", Q6 * 80 + 38, So - 32, 4, 20);
      }
      if (Q5 > 0) {
        Q4.globalAlpha = Q5;
        if (Q2 < 1) {
          SO(Q4, SL(Q3.calm), Q6 * 80 + 5, So + 1, 70, 14);
        } else {
          Q4.strokeStyle = Sv[Q6].c.base;
          Q4.lineWidth = 2;
          Q4.strokeRect(Q6 * 80 + 5, So + 1, 70, 14);
        }
        Q4.globalAlpha = 1;
      }
    }
  }
};
var SU = [["#000000", "#404040", "#808080"], ["#33300a", "#ffff00", "#ffff00"], ["#16301a", "#7ad17a", "#7ad17a"]];
var SC = String(s || "DARKDLE").toUpperCase().replace(/[^A-Z0-9]/g, "") || "DARKDLE";
function Sh(Q1, Q2, Q3, Q4) {
  let Q5 = Q1.ctx;
  let Q6 = Sy(Q4 * 80);
  if (Q6 < 1) {
    return;
  }
  let [Q7, Q8, Q9] = SU[(Q2 + Q3) % 3];
  let QS = Q2 * 80;
  let QQ = Q3 * 80 + Sy((80 - Q6) / 2);
  SO(Q5, "#000", QS, QQ, 80, Q6);
  SO(Q5, Q7, QS + 4, QQ + (Q6 > 8 ? 4 : 0), 72, Math.max(1, Q6 - (Q6 > 8 ? 8 : 0)));
  Q5.strokeStyle = Q8;
  Q5.lineWidth = 2;
  Q5.strokeRect(QS + 5, QQ + (Q6 > 10 ? 5 : 1), 70, Math.max(1, Q6 - (Q6 > 10 ? 10 : 2)));
  if (Q6 > 60) {
    Q1.draw_set_font("fnt_mainbig");
    Q1.draw_set_halign("center");
    Q1.draw_set_color(Q9);
    Q1.draw_text_transformed(QS + 40, QQ + Sy(Q6 / 2) - 30, SC[(Q3 * 8 + Q2) % SC.length], 2, 2, 0);
    Q1.draw_set_halign("left");
  }
}
S8(Sh, "dTile");
var SG = {
  coverT: 12,
  revealT: 8,
  sfx: [[2, "snd_menumove", 0.2, 1], [6, "snd_menumove", 0.2, 1], [10, "snd_menumove", 0.2, 1]],
  cover(Q1, Q2) {
    Sa(Q1.ctx, Q2 / 10);
    for (let Q3 = 0; Q3 < 6; Q3++) {
      for (let Q4 = 0; Q4 < 8; Q4++) {
        let Q5 = SS((Q2 - (Q4 + Q3) * 0.45) / 6);
        if (Q5 > 0) {
          Sh(Q1, Q4, Q3, Math.abs(Math.cos(Math.PI / 2 * (1 - Q5))));
        }
      }
    }
  },
  reveal(Q1, Q2) {
    for (let Q3 = 0; Q3 < 6; Q3++) {
      for (let Q4 = 0; Q4 < 8; Q4++) {
        let Q5 = SS((Q2 - Q4 * 0.55) / 4);
        if (Q5 < 1) {
          Sh(Q1, Q4, Q3, Math.abs(Math.cos(Math.PI / 2 * Q5)));
        }
      }
    }
  }
};
var Sb = 80;
var Sd = 60;
var SI = null;
var SJ = null;
var Sk = S8((Q1, Q2) => i((Q1 + 0.5 - 40) / 17, (Q2 + 0.5 - 30) / 17 + 0.05), "bShape");
var Sp = S8((Q1, Q2) => Sy(Math.sin(Q1 * 0.7 + Q2 * 2.1) * 2.5 + Math.sin(Q1 * 1.9 - Q2 * 3.3) * 1.8), "bNoise");
var Sz = null;
function SK(Q1, Q2) {
  if (!SI) {
    SI = document.createElement("canvas");
    SI.width = Sb;
    SI.height = Sd;
    SJ = SI.getContext("2d").createImageData(Sb, Sd);
  }
  if (!Sz) {
    Sz = new Uint8Array(Sb * Sd);
    for (let Q4 = 0; Q4 < Sd; Q4++) {
      for (let Q5 = 0; Q5 < Sb; Q5++) {
        Sz[Q4 * Sb + Q5] = Sk(Q5, Q4) ? 1 : 0;
      }
    }
  }
  let Q3 = SJ.data;
  for (let Q6 = 0; Q6 < Sd; Q6++) {
    for (let Q7 = 0; Q7 < Sb; Q7++) {
      let Q8 = Q2(Q7, Q6, Sz[Q6 * Sb + Q7]);
      let Q9 = (Q6 * Sb + Q7) * 4;
      if (Q8 < 0) {
        Q3[Q9 + 3] = 0;
        continue;
      }
      Q3[Q9] = Q3[Q9 + 1] = Q3[Q9 + 2] = Q8;
      Q3[Q9 + 3] = 255;
    }
  }
  SI.getContext("2d").putImageData(SJ, 0, 0);
  Q1.imageSmoothingEnabled = false;
  Q1.drawImage(SI, 0, 0, 640, 480);
}
S8(SK, "bField");
var Se = {
  coverT: 11,
  revealT: 8,
  sfx: [],
  cover(Q1, Q2, Q3) {
    let Q4 = Math.min(1, Q2 / 9) * (Sb + 8) - 4;
    let Q5 = Q3.calm ? 160 : 255;
    SK(Q1.ctx, (Q6, Q7, Q8) => Q6 < Q4 + Sp(Q7, Q2) ? Q8 ? Q5 : 0 : -1);
  },
  reveal(Q1, Q2, Q3) {
    let Q4 = (1 - Q2 / 8) * (Sb + 8) - 4;
    let Q5 = Q3.calm ? 160 : 255;
    SK(Q1.ctx, (Q6, Q7, Q8) => Q6 < Q4 + Sp(Q7, Q2 + 11) ? Q8 ? Q5 : 0 : -1);
  }
};
var Sj = {
  blackjack: Sl,
  spellcard: SN,
  survivors: SV,
  tetris: SX,
  mania: SZ,
  darkdle: SG,
  badapple: Se
};
var SF = {
  reveal: null
};
var Sw = null;
var Si = S8(() => Sw ? Sw() : typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
function Ss(Q1) {
  Sw = typeof Q1 == "function" ? Q1 : null;
}
S8(Ss, "setClock");
var SD = null;
function SM(Q1) {
  SD = Q1;
}
S8(SM, "setSfx");
function SY(Q1, Q2 = {}) {
  if (Sj[Q1]) {
    SF.reveal = {
      id: Q1,
      start: Si(),
      t: 0,
      last: null,
      heard: false,
      O: {
        x: 320,
        y: 240,
        calm: false,
        ...Q2
      }
    };
  }
}
S8(SY, "startReveal");
var Sr = S8(() => !!SF.reveal, "revealActive");
var Sn = S8(() => {
  let Q1 = S2();
  return !!Q1 && !!Q1.getState && Q1.getState() === "menu" && !!S1("games");
}, "pageUp");
function Sm(Q1) {
  let Q2 = Si();
  if (Sn()) {
    if (!Sw && Q2 - Q1.start > 3000) {
      SF.reveal = null;
    }
    return false;
  }
  if (!Q1.heard) {
    Q1.heard = true;
    let Q3 = Sj[Q1.id];
    if (Q3.revealSfx && SD) {
      SD(...Q3.revealSfx);
    }
  }
  if (Sw) {
    Q1.t = (Q2 - Q1.start) / SW;
    return true;
  } else if (Q1.last == null) {
    Q1.last = Q2;
    Q1.t = 0;
    return true;
  } else {
    Q1.t += Math.max(0, Math.min(1.5, (Q2 - Q1.last) / SW));
    Q1.last = Q2;
    return true;
  }
}
S8(Sm, "advance");
var SE = S8(() => SF.reveal ? {
  id: SF.reveal.id,
  t: SF.reveal.t
} : null, "revealInfo");
function Q0() {
  SF.reveal = null;
}
S8(Q0, "endReveal");
S3("overlay", Q1 => {
  let Q2 = SF.reveal;
  if (!Q2) {
    return;
  }
  let Q3 = Sj[Q2.id];
  if (!Q3) {
    SF.reveal = null;
    return;
  }
  if (!Sm(Q2)) {
    return;
  }
  let Q4 = Q2.t;
  if (Q4 >= Q3.revealT) {
    SF.reveal = null;
    return;
  }
  S4(Q1, () => Q3.reveal(Q1, Math.max(0, Q4), Q2.O));
}, {
  owner: "games"
});
if (typeof window !== "undefined" && window.addEventListener) {
  let QL = S8(Q1 => {
    if (SF.reveal) {
      if (!Q1 || Q1.type !== "keydown" || !/^(Shift|Control|Alt|Meta|CapsLock)$/.test(Q1.key || "")) {
        SF.reveal = null;
      }
    }
  }, "end");
  window.addEventListener("keydown", QL, {
    capture: true,
    passive: true
  });
  window.addEventListener("pointerdown", QL, {
    capture: true,
    passive: true
  });
}
export { Sj as TRANS, Q0 as endReveal, Si as now, Sx as outBack, Sr as revealActive, SE as revealInfo, Ss as setClock, SM as setSfx, SY as startReveal };
