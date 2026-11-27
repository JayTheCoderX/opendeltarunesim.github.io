import { Y as B, z as k } from "./c-YY3TNHWF.js";
import { a as o } from "./c-B36JSU6C.js";
import { G as s, H, I as n, ba as d, ca as K } from "./c-VGC6FILU.js";
import { a as y, l as m } from "./c-XSSGDLV7.js";
m();
var l = 128;
var a = 96;
var O = y(pl => pl <= 0 ? 0 : pl >= 1 ? 1 : pl, "k01");
var c = y(pl => 1 - Math.pow(1 - O(pl), 3), "outCubic");
var h = y(pl => Math.pow(O(pl), 3), "inCubic");
var i = y((pl, pa = 1.70158) => {
  pl = O(pl) - 1;
  return pl * pl * ((pa + 1) * pl + pa) + 1;
}, "outBack");
var b = {
  k01: O,
  outCubic: c,
  inCubic: h,
  outBack: i
};
function t(pl) {
  return () => {
    pl |= 0;
    pl = pl + 1831565813 | 0;
    let pa = Math.imul(pl ^ pl >>> 15, pl | 1);
    pa = pa + Math.imul(pa ^ pa >>> 7, pa | 61) ^ pa;
    return ((pa ^ pa >>> 14) >>> 0) / 4294967296;
  };
}
y(t, "mulberry32");
var p1 = Math.round;
var p2 = y((pl, pa, pR, pO, pZ, pc) => {
  pl.fillStyle = pa;
  pl.fillRect(p1(pR), p1(pO), pZ, pc);
}, "fill");
var p3 = y((pl, pa) => {
  let pR = document.createElement("canvas");
  pR.width = pl;
  pR.height = pa;
  return pR;
}, "mkCanvas");
function p4(pl, pa) {
  let pR = parseInt(pl.slice(1), 16);
  let pO = pR >> 16;
  let pZ = pR >> 8 & 255;
  let pc = pR & 255;
  let ph = pi => Math.max(0, Math.min(255, Math.round(pa >= 0 ? pi + (255 - pi) * pa : pi * (1 + pa))));
  return "#" + [ph(pO), ph(pZ), ph(pc)].map(pi => pi.toString(16).padStart(2, "0")).join("");
}
y(p4, "shade");
var p5 = new Map();
function p6(pl, pa) {
  let pR = pl + pa;
  let pO = p5.get(pR);
  if (pO) {
    return pO;
  }
  pO = p3(pa, pa);
  let pZ = pO.getContext("2d");
  let pc = Math.max(1, Math.round(pa / 8));
  pZ.fillStyle = pl;
  pZ.fillRect(0, 0, pa, pa);
  pZ.fillStyle = p4(pl, 0.3);
  pZ.fillRect(0, 0, pa, pc);
  pZ.fillRect(0, 0, pc, pa);
  pZ.fillStyle = p4(pl, -0.3);
  pZ.fillRect(0, pa - pc, pa, pc);
  pZ.fillRect(pa - pc, 0, pc, pa);
  p5.set(pR, pO);
  return pO;
}
y(p6, "bevelCell");
var p7 = {
  rank: "A",
  suit: "socks"
};
var p8 = {
  rank: "10",
  suit: "buttons"
};
var p9 = [1, 5, 25, 100, 5, 25];
var pp = s.coin;
function pH(pl, pa, pR, pO) {
  pa = p1(pa);
  pR = p1(pR);
  let pZ = pa + p1((H - pO) / 2);
  p2(pl, "#ffffff", pZ, pR, pO, n);
  if (!(pO <= 2)) {
    p2(pl, "#5a1020", pZ + 1, pR + 1, pO - 2, n - 2);
    pl.fillStyle = "#8a2a3a";
    for (let pc = 3; pc < n - 3; pc += 4) {
      for (let ph = 3 + (pc >> 2 & 1) * 2; ph < pO - 3; ph += 4) {
        pl.fillRect(pZ + ph, pR + pc, 1, 1);
      }
    }
  }
}
y(pH, "plainBack");
function pj(pl, pa, pR, pO, pZ, pc) {
  let ph = {
    scale: 1,
    flip: pZ ?? undefined,
    faceDown: pZ == null,
    back: "51",
    lift: pc
  };
  if (d(pl, pa, pR, pO, ph)) {
    return;
  }
  let pi = pZ != null && pZ < 1 ? p1(H * Math.abs(Math.cos(Math.PI * pZ))) : H;
  pH(pl, pR, pO, pi);
}
y(pj, "card");
var pP = {
  loop: 96,
  still: 60,
  hover: ["snd_smallswing", 0.1, 2],
  draw(pl, pa, pR) {
    p2(pl, pp[1], 0, 0, l, a);
    pl.fillStyle = pp[2];
    for (let pb = 4; pb < l - 4; pb++) {
      let pt = (pb - 64) / 70;
      let pw = p1(104 - Math.sqrt(Math.max(0, 1 - pt * pt)) * 36);
      pl.fillRect(pb, pw, 1, 1);
    }
    let pO = pa >= 80 ? -p1(h((pa - 80) / 16) * 170) : 0;
    let pZ = pa < 8 ? p1(30 + (1 - c(pa / 8)) * 110) : 30;
    let pc = 18 + (pa >= 8 && pa < 11 ? p1(Math.sin((pa - 8) / 3 * Math.PI) * -1) : 0);
    let ph = pa < 14 ? null : pa < 22 ? (pa - 14) / 8 : 1;
    pj(pl, p7, pZ + pO, pc, ph ?? null, pa < 8 ? 2 : 0);
    if (pa >= 24) {
      let pE = pa < 30 ? p1(50 + (1 - c((pa - 24) / 6)) * 90) : 50;
      let H0 = pa < 30 ? null : pa < 38 ? (pa - 30) / 8 : 1;
      pj(pl, p8, pE + pO, 24, H0 ?? null, pa < 30 ? 2 : 0);
    }
    if (pa >= 40 && pa < 88) {
      let H1 = pa < 42 ? -2 : pa < 45 ? p1(-2 + c((pa - 42) / 3) * 2) : 0;
      pR.text(pl, 60 + pO, 6 + H1, "21", "#ffff00", "fnt_main", "center");
    }
    let pi = pa < 30 ? 0 : Math.min(p9.length, 1 + Math.floor((pa - 30) / 8));
    let px = 100 + pO;
    let pX = 80;
    for (let H2 = 0; H2 < pi; H2++) {
      let H3 = 30 + H2 * 8;
      let H4 = pa - H3;
      let H5 = 0;
      if (H4 < 3) {
        H5 = -p1((1 - H4 / 3) * 6);
      } else if (H4 < 5) {
        H5 = H4 === 3 ? 1 : 0;
      }
      let H6 = H2 === pi - 1;
      K(pl, p9[H2], px, pX - H2 * 3 + H5, {
        edge: true,
        turned: !!(H2 & 1),
        scale: 1
      });
      if (H6) {
        K(pl, p9[H2], px, pX - H2 * 3 + H5 - 4, {
          cap: true,
          scale: 1
        });
      }
    }
  }
};
var pz = {
  ex: 64,
  ey: 22,
  every: 4,
  arms: 5,
  step: 12,
  speed: 1.6,
  life: 64
};
function pV(pl) {
  let pa = (pl - Math.max(0, Math.min(pl, 80) - 40) * 0.35) * 1.1320754716981132;
  let pR = Math.PI * 2 * pa / 120;
  return {
    x: 60 + Math.sin(pR) * 34 + Math.sin(pR * 3) * 8,
    y: 76 + Math.sin(pR * 2) * 4
  };
}
y(pV, "soulPath");
var pS = {
  loop: 120,
  still: 70,
  hover: ["snd_graze", 0.14, 1],
  draw(pl, pa, pR) {
    p2(pl, "#000000", 0, 0, l, a);
    pl.strokeStyle = "#332033";
    pl.lineWidth = 1;
    pl.strokeRect(0.5, 0.5, l - 1, a - 1);
    let pO = pV(pa);
    let pZ = p1(pO.x);
    let pc = p1(pO.y);
    let ph = 120;
    let pi = 0;
    for (let px = 0; px < 64; px++) {
      let pX = pa - px;
      if ((pX % 4 + 4) % 4) {
        continue;
      }
      let pb = (pX % ph + ph) % ph / 4 * 12 * Math.PI / 180;
      let pt = px * 1.6;
      for (let pw = 0; pw < 5; pw++) {
        let pE = pb + pw * (Math.PI * 2 / 5);
        let H0 = p1(64 + Math.cos(pE) * pt);
        let H1 = p1(22 + Math.sin(pE) * pt);
        if (H0 < -2 || H1 < -2 || H0 > l + 1 || H1 > a + 1) {
          continue;
        }
        let H2 = H0 - (pZ + 4);
        let H3 = H1 - (pc + 4);
        let H4 = H2 * H2 + H3 * H3;
        if (H4 < 9) {
          continue;
        }
        let H5 = B[pw % B.length];
        p2(pl, H5, H0 - 1, H1, 3, 1);
        p2(pl, H5, H0, H1 - 1, 1, 3);
        p2(pl, "#ffffff", H0, H1, 1, 1);
        if (H4 < 49 && pi < 3) {
          pi++;
          let H6 = p1((H0 + pZ + 4) / 2);
          let H7 = p1((H1 + pc + 4) / 2);
          p2(pl, "#ffffff", H6 - 1, H7, 3, 1);
          p2(pl, "#ffffff", H6, H7 - 1, 1, 3);
          pR.text(pl, H6 + 3, H7 - 9, "+", "#ffffff", "fnt_small");
        }
      }
    }
    pl.strokeStyle = "#ffffff";
    pl.strokeRect(61.5, 19.5, 5, 5);
    p2(pl, "#ffffff", 63, 21, 3, 3);
    pR.heart(pl, pZ, pc);
    if (pa >= 40 && pa < 80) {
      p2(pl, "#ffffff", pZ + 4, pc + 4, 1, 1);
    }
  }
};
var pW = (() => {
  let pl = t(6221057);
  let pa = [];
  for (let pR = 0; pR < 40; pR++) {
    let pO = pl() * Math.PI * 2;
    pa.push({
      a0: pO,
      curl: (pl() - 0.5) * 1.6,
      r0: 92 + pl() * 30,
      rEnd: 12 + pl() * 22,
      s: Math.floor(pl() * 40)
    });
  }
  return pa;
})();
var pg = 112;
function pf(pl, pa) {
  let pR = O((pa - pl.s) / (pg - pl.s));
  let pO = pl.r0 + (pl.rEnd - pl.r0) * h(pR * 0.55 + pR * pR * 0.45);
  let pZ = pl.a0 + pl.curl * pR;
  return {
    x: 64 + Math.cos(pZ) * pO * 1.25,
    y: 48 + Math.sin(pZ) * pO,
    r: pO
  };
}
y(pf, "blobAt");
var pr = {
  loop: 150,
  still: 118,
  hover: ["snd_sparkle_gem", 0.1, 1],
  draw(pl, pa, pR) {
    p2(pl, "#0d0d18", 0, 0, l, a);
    let pO = Math.floor(pa * 32 / 150) % 16;
    pl.fillStyle = "#1a1a2a";
    for (let px = pO - 16; px < a; px += 16) {
      pl.fillRect(0, px, l, 1);
    }
    for (let pX = 8; pX < l; pX += 16) {
      pl.fillRect(pX, 0, 1, a);
    }
    let pZ = pa >= pg ? c((pa - pg) / 8) * 60 + 4 : -1;
    let pc = 0;
    for (let pb of pW) {
      let pt = pf(pb, Math.min(pa, pg));
      if (!(pZ >= 0) || !(pZ >= pt.r)) {
        if (pa < pb.s) {
          continue;
        }
        p2(pl, "#3a2a4a", pt.x - 2, pt.y - 2, 4, 4);
        p2(pl, "#806080", pt.x - 1, pt.y - 2, 2, 1);
        continue;
      }
      pc++;
      let pw = pg + Math.max(0, (pt.r - 4) / 60) * 8;
      let pE = pa - pw;
      if (pE < 3) {
        let H1 = 2 + pE * 2;
        for (let [H2, H3] of [[H1, 0], [-H1, 0], [0, H1], [0, -H1]]) {
          p2(pl, "#c0a0e0", pt.x + H2, pt.y + H3, 1, 1);
        }
      }
      let H0 = pa < 124 ? 0 : h((pa - 124) / 22);
      if (H0 < 1) {
        p2(pl, "#00ffff", pt.x + (64 - pt.x) * H0 - 1, pt.y + (48 - pt.y) * H0 - 1, 2, 2);
      }
    }
    if (pZ >= 0 && pa < pg + 8) {
      pl.strokeStyle = "#ffff00";
      pl.lineWidth = 1;
      pl.beginPath();
      pl.arc(64, 48, pZ, 0, Math.PI * 2);
      pl.stroke();
    }
    pR.heart(pl, 60, 44);
    let ph = pa < 124 ? 0 : O((pa - 124) / 22);
    p2(pl, "#003040", 0, 0, l, 2);
    if (pa < 146) {
      p2(pl, "#00ffff", 0, 0, p1(l * ph), 2);
    } else if (pa < 149) {
      p2(pl, pR.calm ? "#ffff00" : "#ffffff", 0, 0, l, 2);
    }
    let pi = 59 - Math.floor(pa / 30);
    pR.text(pl, l - 3, 4, "9:" + String(pi).padStart(2, "0"), "#808080", "fnt_small", "right");
  }
};
var pQ = {
  cols: 9,
  rows: 11,
  cell: 8,
  x: 20,
  y: 4,
  gap: 8
};
var pT = [1, 3, 8, 5, 7, 2, 6, 4];
var pe = [[6, [[7, 0], [8, 0], [8, 1], [8, 2]]], [7, [[7, 1], [7, 2], [7, 3], [8, 3]]], [2, [[7, 4], [7, 5], [8, 4], [8, 5]]], [4, [[7, 6], [7, 7], [8, 6], [8, 7]]], [1, [[7, 8], [8, 8], [9, 8], [10, 8]]]];
var pu = (() => {
  let pl = [];
  let pa = 4;
  for (let [pR, pO] of pe) {
    let pZ = Math.min(...pO.map(pc => pc[0])) + 3;
    pl.push({
      col: pR,
      cells: pO,
      spawn: pa,
      land: pa + pZ * 2
    });
    pa += pZ * 2 + 4;
  }
  return pl;
})();
var pJ = pu[pu.length - 1].land + 2;
var pB = 150;
function pM(pl, pa, pR, pO, pZ, pc = pZ) {
  let ph = p6(o[pa] || "#808080", pZ);
  if (pc >= pZ) {
    pl.drawImage(ph, p1(pR), p1(pO));
  } else if (pc > 0) {
    pl.drawImage(ph, 0, 0, pZ, pc, p1(pR), p1(pO + (pZ - pc) / 2), pZ, pc);
  }
}
y(pM, "drawCellAt");
var pk = {
  loop: 180,
  still: 96,
  hover: ["snd_bump", 0.14, 1],
  draw(pl, pa, pR) {
    p2(pl, "#000000", 0, 0, l, a);
    let {
      cols: pO,
      rows: pZ,
      cell: pc,
      x: ph,
      y: pi
    } = pQ;
    pl.strokeStyle = "#404040";
    pl.lineWidth = 1;
    pl.strokeRect(ph - 0.5, pi - 0.5, pO * pc + 1, pZ * pc + 1);
    let px = pa >= pJ + 5;
    let pX = pa >= pB ? Math.min(2, Math.floor((pa - pB) / 5)) : 0;
    let pb = pa >= pJ && !px;
    let pt = pb ? pa < pJ + 2 ? pc : p1(pc * (1 - (pa - pJ - 2) / 3)) : pc;
    let pw = pb && pa < pJ + 2;
    let pE = (H1, H2) => {
      for (let H3 = 0; H3 < pO; H3++) {
        if (H3 !== pQ.gap) {
          pM(pl, pT[H3 % pT.length], ph + H3 * pc, pi + H1 * pc + H2, pc);
        }
      }
    };
    if (px) {
      if (pX > 0) {
        for (let H1 = 0; H1 < pX; H1++) {
          pE(10 - (pX - 1 - H1), 0);
        }
      }
    } else {
      for (let H2 of [9, 10]) {
        if (pw) {
          p2(pl, pR.calm ? "rgba(255,255,0,0.5)" : "#ffffff", ph, pi + H2 * pc, pO * pc, pc);
          continue;
        }
        if (pb) {
          for (let H3 = 0; H3 < pO; H3++) {
            if (H3 !== pQ.gap) {
              pM(pl, pT[H3 % pT.length], ph + H3 * pc, pi + H2 * pc, pc, pt);
            }
          }
        } else {
          pE(H2, 0);
        }
      }
    }
    for (let H4 of pu) {
      if (pa < H4.spawn || px) {
        continue;
      }
      let H5 = pa >= H4.land ? 0 : Math.ceil((H4.land - pa) / 2);
      let H6 = pa >= H4.land && pa < H4.land + 1 ? 1 : 0;
      for (let [H7, H8] of H4.cells) {
        let H9 = H7 - H5;
        if (!(H9 < 0)) {
          if (pw && H7 >= 7) {
            p2(pl, pR.calm ? "rgba(255,255,0,0.5)" : "#ffffff", ph + H8 * pc, pi + H9 * pc, pc, pc);
            continue;
          }
          pM(pl, H4.col, ph + H8 * pc, pi + H9 * pc + H6, pc, pb ? pt : pc);
        }
      }
    }
    p2(pl, "#000000", 98, 4, 28, 60);
    pl.strokeStyle = "#404040";
    pl.strokeRect(97.5, 3.5, 29, 61);
    pR.text(pl, 112, 6, "NEXT", "#808080", "fnt_small", "center");
    let H0 = 0;
    for (let Hp = 0; Hp < pu.length && H0 < 3; Hp++) {
      let HH = pu[Hp];
      if (HH.spawn <= pa) {
        continue;
      }
      let Hj = Math.min(...HH.cells.map(HV => HV[0]));
      let HP = Math.min(...HH.cells.map(HV => HV[1]));
      for (let [HV, HS] of HH.cells) {
        pM(pl, HH.col, 104 + (HS - HP) * 4, 18 + H0 * 16 + (HV - Hj) * 4, 4);
      }
      H0++;
    }
    if (pa >= pJ && pa < pJ + 30) {
      pR.text(pl, ph + pO * pc / 2, 30, "TETRIS", "#ffff00", "fnt_small", "center");
    }
  }
};
var pY = {
  lanes: 4,
  lw: 16,
  x: 32,
  recY: 78,
  speed: 2,
  chart: [[0, 0], [15, 2], [30, 1], [45, 3], [60, 0, 20], [75, 2], [90, 3], [105, 1]]
};
var pA = (() => {
  try {
    return k(4, "DELTARUNE");
  } catch {
    return [0, 1, 2, 3].map(() => ({
      base: "#ffffff",
      dark: "#404040"
    }));
  }
})();
var pU = {
  loop: 120,
  still: 62,
  hover: ["snd_select", 0.1, 1.5],
  draw(pl, pa, pR) {
    p2(pl, "#000000", 0, 0, l, a);
    let {
      lw: pO,
      x: pZ,
      recY: pc
    } = pY;
    pl.fillStyle = "#1a1a1a";
    for (let px = 0; px <= 4; px++) {
      pl.fillRect(pZ + px * pO, 0, 1, a);
    }
    let ph = 0;
    let pi = -99;
    for (let [pX] of pY.chart) {
      if (pX <= pa) {
        ph++;
        pi = pX;
      }
    }
    for (let pb = 0; pb < 4; pb++) {
      let pt = pA[pb].base;
      let pw = -1;
      for (let [H0, H1, H2] of pY.chart) {
        if (H1 === pb) {
          let H3 = H0 + (H2 ? H2 / pY.speed : 0);
          let H4 = ((pa - H3) % 120 + 120) % 120;
          let H5 = ((pa - H0) % 120 + 120) % 120;
          if (H2 && H5 < H2 / pY.speed) {
            pw = 3;
          } else if (H4 < 4 && (pw < 0 || H4 < pw)) {
            pw = H4;
          }
        }
      }
      let pE = pZ + pb * pO + 1;
      if (pw >= 0 && pw < 2) {
        p2(pl, pR.calm ? "#ffff00" : "#ffffff", pE, pc, 14, 6);
      } else if (pw >= 2 && pw < 4) {
        p2(pl, pt, pE, pc, 14, 6);
      } else {
        pl.strokeStyle = pt;
        pl.lineWidth = 1;
        pl.strokeRect(pE + 0.5, pc + 0.5, 13, 5);
      }
      if (pw >= 0 && pw < 1) {
        p2(pl, "#ffffff", pE + 4, pc - 8, 5, 1);
        p2(pl, "#ffffff", pE + 6, pc - 10, 1, 5);
      }
    }
    for (let [H6, H7, H8] of pY.chart) {
      let H9 = pA[H7].base;
      let Hp = pZ + H7 * pO + 1;
      let HH = ((H6 - pa) % 120 + 120) % 120;
      let Hj = H8 || 0;
      let HP = ((pa - H6) % 120 + 120) % 120;
      if (Hj && HP < Hj / pY.speed) {
        let HS = Hj - HP * pY.speed;
        p2(pl, pA[H7].dark, Hp + 2, pc - HS, 10, HS);
        continue;
      }
      if (HH > 44) {
        continue;
      }
      let HV = pc - HH * pY.speed;
      if (Hj) {
        p2(pl, pA[H7].dark, Hp + 2, HV - Hj, 10, Hj);
      }
      p2(pl, H9, Hp, HV, 14, 4);
      p2(pl, "#ffffff", Hp, HV, 14, 1);
    }
    if (ph > 0) {
      let HW = pa - pi < 2 ? -1 : 0;
      pR.text(pl, 64, 6 + HW, String(ph), "#ffffff", "fnt_small", "center");
    }
  }
};
var po = {
  w: 18,
  gap: 2,
  x: 15,
  y1: 26,
  y2: 50
};
var ps = {
  hit: ["#16301a", "#7ad17a"],
  near: ["#33300a", "#ffff00"],
  miss: ["#000000", "#404040"]
};
var pG = [["S", "miss"], ["P", "near"], ["A", "miss"], ["R", "hit"], ["E", "near"]];
var pq = [["F", "hit"], ["I", "hit"], ["G", "hit"], ["H", "hit"], ["T", "hit"]];
function pL(pl, pa, pR, pO, pZ, pc, ph, pi) {
  let px = Math.max(0, p1(Math.abs(Math.cos(Math.PI * ph)) * 18));
  let pX = ph >= 0.5 ? pc : null;
  pO += pi;
  if ((ph <= 0 || px >= 18) && !pX) {
    pl.strokeStyle = "#404040";
    pl.lineWidth = 1;
    pl.strokeRect(pR + 0.5, pO + 0.5, 17, 17);
    return;
  }
  if (px < 1) {
    return;
  }
  let pb = pO + p1((18 - px) / 2);
  if (!pX) {
    pl.strokeStyle = "#404040";
    pl.lineWidth = 1;
    pl.strokeRect(pR + 0.5, pb + 0.5, 17, Math.max(1, px - 1));
    return;
  }
  let [pt, pw] = ps[pX];
  p2(pl, pt, pR, pb, 18, px);
  pl.strokeStyle = pw;
  pl.lineWidth = 1;
  pl.strokeRect(pR + 0.5, pb + 0.5, 17, Math.max(1, px - 1));
  if (px >= 16) {
    pa.text(pl, pR + 9, pO + 3, pZ, pX === "miss" ? "#808080" : pw, "fnt_main", "center");
  }
}
y(pL, "dTile");
var pn = {
  loop: 150,
  still: 120,
  hover: ["snd_menumove", 0.16, 1.3],
  draw(pl, pa, pR) {
    p2(pl, "#000000", 0, 0, l, a);
    let pO = pa >= 130 ? 1 : 0;
    let pZ = (ph, pi, px, pX) => ph.forEach(([pb, pt], pw) => {
      let pE = 15 + pw * 20;
      let H0 = O((pa - px - pw * 4) / 6);
      if (pO > 0) {
        H0 = Math.min(H0, 1 - O((pa - 130 - pw * 3) / 6));
      }
      let H1 = 0;
      if (pX && pa >= 92 && pa < 116) {
        let H2 = pa - 92 - pw * 4;
        if (H2 >= 0 && H2 < 4) {
          H1 = H2 < 2 ? -1 : 0;
        }
      }
      pL(pl, pR, pE, pi, pb, pt, H0, H1);
    });
    pZ(pG, 26, 6, false);
    pZ(pq, 50, 60, true);
    let pc = pa < 30 ? 0 : pa < 84 ? 1 : 2;
    if (pc && pa < 130) {
      pR.text(pl, l - 4, 80, pc + "/6", "#808080", "fnt_small", "right");
    }
  }
};
var pN = {
  w: 64,
  h: 48
};
var pI = null;
var pd = null;
var pF = null;
var pK = new Uint8Array(3072);
function pD(pl, pa) {
  if (pl < -0.97 || pl > 0.97 || pa < -1.05 || pa > 0.88) {
    return false;
  }
  let pR = (pZ, pc, ph) => (pl - pZ) * (pl - pZ) + (pa - pc) * (pa - pc) < ph * ph;
  let pO = (pR(-0.34, -0.08, 0.62) || pR(0.34, -0.08, 0.62) || pR(0, 0.22, 0.66)) && !pR(0, -0.8, 0.22) && (!(pa > 0.83) || !(pl > -0.1) || !(pl < 0.1));
  if (!pO && pa > -1.04 && pa < -0.56) {
    let pZ = 0.02 + (-0.56 - pa) * 0.3;
    pO = pl > pZ - 0.07 && pl < pZ + 0.07;
  }
  if (!pO) {
    let pc = pl - 0.33;
    let ph = pa + 0.86;
    let pi = pc * 0.9 + ph * 0.44;
    let px = -pc * 0.44 + ph * 0.9;
    pO = pi * pi / 0.07 + px * px / 0.013 < 1;
  }
  return pO;
}
y(pD, "appleIn");
function py(pl, pa, pR = pK, pO = 1) {
  let pZ = Math.PI * 2 * pl / 180;
  let pc = 15;
  let ph = Math.sin(pZ) * 0.1;
  let pi = Math.cos(ph);
  let px = Math.sin(ph);
  let pX = 32 + Math.sin(pZ) * 2;
  let pb = 38;
  let pt = pl >= 120 ? Math.cos(Math.PI * 2 * (pl - 120) / 60) : 1;
  let pw = Math.abs(pt) < 0.08 ? 0.08 : pt;
  let pE = pl >= 90;
  let H0 = pa && pl >= 90 && pl < 96 ? (pl - 90) / 6 * 64 : -1;
  let H1 = 0;
  for (let H2 = 0; H2 < 48; H2 += pO) {
    let H3 = pl < 60 ? -4 + pl / 60 * 72 + Math.round(Math.sin(H2 * 0.9 + pl * 0.7) * 2 + Math.sin(H2 * 2.3 - pl * 1.3) * 1.5) : 999;
    let H4 = H2 + 0.5 - pb;
    for (let H5 = 0; H5 < 64; H5 += pO) {
      let H6 = false;
      if (H5 < H3) {
        let H8 = H5 + 0.5 - pX;
        H6 = pD((H8 * pi + H4 * px) / (pc * pw), (-H8 * px + H4 * pi) / pc + 0.88);
      }
      let H7 = (H0 >= 0 ? H5 < H0 : pE) ? !H6 : H6;
      pR[H2 * 64 + H5] = H7 ? 1 : 0;
      if (H7) {
        H1++;
      }
    }
  }
  return H1;
}
y(py, "baFrame");
function pC(pl) {
  let pa = [];
  let pR = new Uint8Array(3072);
  for (let pO = 0; pO < 180; pO++) {
    let pZ = py(pO, pl, pR, 2) > 384;
    let pc = 32 + Math.sin(Math.PI * 2 * pO / 180) * 24;
    let ph = 40;
    let pi = null;
    let px = 1000000000;
    for (let pX = 8; pX < 44; pX += 4) {
      for (let pb = 4; pb < 60; pb += 4) {
        if (pR[pX * 64 + pb] === 1 !== pZ) {
          continue;
        }
        let pt = (pb - pc) * (pb - pc) + (pX - ph) * (pX - ph);
        if (pt < px) {
          px = pt;
          pi = [pb, pX];
        }
      }
    }
    pa.push(pi || [Math.round(pc), ph]);
  }
  return pa;
}
y(pC, "baSoulTable");
var pm = {
  loop: 180,
  still: 104,
  draw(pl, pa, pR) {
    if (!pI) {
      pI = p3(64, 48);
      pd = pI.getContext("2d").createImageData(64, 48);
    }
    let pO = !!pR.calm;
    if (!pF || pF.calm !== pO) {
      pF = {
        calm: pO,
        pos: pC(pO)
      };
    }
    let pZ = pa - (pa & 1);
    let pc = pZ + (pO ? "c" : "");
    if (pI._key !== pc) {
      pI._key = pc;
      py(pZ, pO);
      let pw = pd.data;
      for (let pE = 0, H0 = 0; pE < pK.length; pE++, H0 += 4) {
        let H1 = pK[pE] ? 0 : 255;
        pw[H0] = pw[H0 + 1] = pw[H0 + 2] = H1;
        pw[H0 + 3] = 255;
      }
      pI.getContext("2d").putImageData(pd, 0, 0);
    }
    pl.imageSmoothingEnabled = false;
    pl.drawImage(pI, 0, 0, l, a);
    let ph = pF.pos;
    let pi = ph[pa];
    let px = 1;
    for (let H2 = 1; H2 <= 3; H2++) {
      let H3 = ph[(pa - H2 + 180) % 180];
      let H4 = ph[(pa - H2 + 1 + 180) % 180];
      if (H3[0] !== H4[0] || H3[1] !== H4[1]) {
        pi = H3;
        px = i(H2 / 3, 1.2);
        break;
      }
    }
    let pX = ph[pa];
    let pb = pi[0] + (pX[0] - pi[0]) * px;
    let pt = pi[1] + (pX[1] - pi[1]) * px;
    pR.heart(pl, p1(pb * 2) - 4, p1(pt * 2) - 4);
  }
};
var pv = {
  blackjack: pP,
  spellcard: pS,
  survivors: pr,
  tetris: pk,
  mania: pU,
  darkdle: pn,
  badapple: pm
};
export { l as a, a as b, b as c, t as d, p6 as e, pD as f, pv as g };
