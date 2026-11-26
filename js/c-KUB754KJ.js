const e = function () {
    let pl = true;
    return function (pa, pR) {
      const pO = pl ? function () {
        if (pR) {
          const pZ = pR.apply(pa, arguments);
          return pR = null, pZ;
        }
      } : function () {};
      return pl = false, pO;
    };
  }(),
  u = e(this, function () {
    if (u.bind().toString().indexOf('\x0a') !== -0x1) return;
    return u.toString().search(".*").toString().constructor(u).search(".*");
  });
u();
import { Y as B, z as k } from './c-YY3TNHWF.js';
import { a as o } from './c-B36JSU6C.js';
import { G as s, H, I as n, ba as d, ca as K } from './c-VGC6FILU.js';
import { a as y, l as m } from './c-XSSGDLV7.js';
m();
var l = 0x80,
  a = 0x60,
  O = y(pl => pl <= 0x0 ? 0x0 : pl >= 0x1 ? 0x1 : pl, 'k01'),
  c = y(pl => 0x1 - Math.pow(0x1 - O(pl), 0x3), 'outCubic'),
  h = y(pl => Math.pow(O(pl), 0x3), 'inCubic'),
  i = y((pl, pa = 1.70158) => (pl = O(pl) - 0x1, pl * pl * ((pa + 0x1) * pl + pa) + 0x1), 'outBack'),
  b = {
    'k01': O,
    'outCubic': c,
    'inCubic': h,
    'outBack': i
  };
function t(pl) {
  return () => {
    pl |= 0x0, pl = pl + 0x6d2b79f5 | 0x0;
    let pa = Math.imul(pl ^ pl >>> 0xf, 0x1 | pl);
    return pa = pa + Math.imul(pa ^ pa >>> 0x7, 0x3d | pa) ^ pa, ((pa ^ pa >>> 0xe) >>> 0x0) / 0x100000000;
  };
}
y(t, 'mulberry32');
var p1 = Math.round,
  p2 = y((pl, pa, pR, pO, pZ, pc) => {
    pl.fillStyle = pa, pl.fillRect(p1(pR), p1(pO), pZ, pc);
  }, 'fill'),
  p3 = y((pl, pa) => {
    let pR = document.createElement('canvas');
    return pR.width = pl, pR.height = pa, pR;
  }, 'mkCanvas');
function p4(pl, pa) {
  let pR = parseInt(pl.slice(0x1), 0x10),
    pO = pR >> 0x10,
    pZ = pR >> 0x8 & 0xff,
    pc = pR & 0xff,
    ph = pi => Math.max(0x0, Math.min(0xff, Math.round(pa >= 0x0 ? pi + (0xff - pi) * pa : pi * (0x1 + pa))));
  return '#' + [ph(pO), ph(pZ), ph(pc)].map(pi => pi.toString(0x10).padStart(0x2, '0')).join('');
}
y(p4, 'shade');
var p5 = new Map();
function p6(pl, pa) {
  let pR = pl + pa,
    pO = p5.get(pR);
  if (pO) return pO;
  pO = p3(pa, pa);
  let pZ = pO.getContext('2d'),
    pc = Math.max(0x1, Math.round(pa / 0x8));
  return pZ.fillStyle = pl, pZ.fillRect(0x0, 0x0, pa, pa), pZ.fillStyle = p4(pl, 0.3), pZ.fillRect(0x0, 0x0, pa, pc), pZ.fillRect(0x0, 0x0, pc, pa), pZ.fillStyle = p4(pl, -0.3), pZ.fillRect(0x0, pa - pc, pa, pc), pZ.fillRect(pa - pc, 0x0, pc, pa), p5.set(pR, pO), pO;
}
y(p6, 'bevelCell');
var p7 = {
    'rank': 'A',
    'suit': 'socks'
  },
  p8 = {
    'rank': '10',
    'suit': 'buttons'
  },
  p9 = [0x1, 0x5, 0x19, 0x64, 0x5, 0x19],
  pp = s.coin;
function pH(pl, pa, pR, pO) {
  pa = p1(pa), pR = p1(pR);
  let pZ = pa + p1((H - pO) / 0x2);
  if (p2(pl, "#ffffff", pZ, pR, pO, n), !(pO <= 0x2)) {
    p2(pl, "#5a1020", pZ + 0x1, pR + 0x1, pO - 0x2, n - 0x2), pl.fillStyle = "#8a2a3a";
    for (let pc = 0x3; pc < n - 0x3; pc += 0x4) for (let ph = 0x3 + (pc >> 0x2 & 0x1) * 0x2; ph < pO - 0x3; ph += 0x4) pl.fillRect(pZ + ph, pR + pc, 0x1, 0x1);
  }
}
y(pH, 'plainBack');
function pj(pl, pa, pR, pO, pZ, pc) {
  let ph = {
    'scale': 0x1,
    'flip': pZ ?? void 0x0,
    'faceDown': pZ == null,
    'back': '51',
    'lift': pc
  };
  if (d(pl, pa, pR, pO, ph)) return;
  let pi = pZ != null && pZ < 0x1 ? p1(H * Math.abs(Math.cos(Math.PI * pZ))) : H;
  pH(pl, pR, pO, pi);
}
y(pj, 'card');
var pP = {
    'loop': 0x60,
    'still': 0x3c,
    'hover': ['snd_smallswing', 0.1, 0x2],
    'draw'(pl, pa, pR) {
      p2(pl, pp[0x1], 0x0, 0x0, l, a), pl.fillStyle = pp[0x2];
      for (let pb = 0x4; pb < l - 0x4; pb++) {
        let pt = (pb - 0x40) / 0x46,
          pw = p1(0x68 - 0x24 * Math.sqrt(Math.max(0x0, 0x1 - pt * pt)));
        pl.fillRect(pb, pw, 0x1, 0x1);
      }
      let pO = pa >= 0x50 ? -p1(0xaa * h((pa - 0x50) / 0x10)) : 0x0,
        pZ = pa < 0x8 ? p1(0x1e + 0x6e * (0x1 - c(pa / 0x8))) : 0x1e,
        pc = 0x12 + (pa >= 0x8 && pa < 0xb ? p1(-0x1 * Math.sin((pa - 0x8) / 0x3 * Math.PI)) : 0x0),
        ph = pa < 0xe ? null : pa < 0x16 ? (pa - 0xe) / 0x8 : 0x1;
      if (pj(pl, p7, pZ + pO, pc, ph ?? null, pa < 0x8 ? 0x2 : 0x0), pa >= 0x18) {
        let pE = pa < 0x1e ? p1(0x32 + 0x5a * (0x1 - c((pa - 0x18) / 0x6))) : 0x32,
          H0 = pa < 0x1e ? null : pa < 0x26 ? (pa - 0x1e) / 0x8 : 0x1;
        pj(pl, p8, pE + pO, 0x18, H0 ?? null, pa < 0x1e ? 0x2 : 0x0);
      }
      if (pa >= 0x28 && pa < 0x58) {
        let H1 = pa < 0x2a ? -0x2 : pa < 0x2d ? p1(-0x2 + 0x2 * c((pa - 0x2a) / 0x3)) : 0x0;
        pR.text(pl, 0x3c + pO, 0x6 + H1, '21', "#ffff00", 'fnt_main', 'center');
      }
      let pi = pa < 0x1e ? 0x0 : Math.min(p9.length, 0x1 + Math.floor((pa - 0x1e) / 0x8)),
        px = 0x64 + pO,
        pX = 0x50;
      for (let H2 = 0x0; H2 < pi; H2++) {
        let H3 = 0x1e + H2 * 0x8,
          H4 = pa - H3,
          H5 = 0x0;
        H4 < 0x3 ? H5 = -p1(0x6 * (0x1 - H4 / 0x3)) : H4 < 0x5 && (H5 = H4 === 0x3 ? 0x1 : 0x0);
        let H6 = H2 === pi - 0x1;
        K(pl, p9[H2], px, pX - H2 * 0x3 + H5, {
          'edge': !0x0,
          'turned': !!(H2 & 0x1),
          'scale': 0x1
        }), H6 && K(pl, p9[H2], px, pX - H2 * 0x3 + H5 - 0x4, {
          'cap': !0x0,
          'scale': 0x1
        });
      }
    }
  },
  pz = {
    'ex': 0x40,
    'ey': 0x16,
    'every': 0x4,
    'arms': 0x5,
    'step': 0xc,
    'speed': 1.6,
    'life': 0x40
  };
function pV(pl) {
  let pa = (pl - 0.35 * Math.max(0x0, Math.min(pl, 0x50) - 0x28)) * 1.1320754716981132,
    pR = 0x2 * Math.PI * pa / 0x78;
  return {
    'x': 0x3c + 0x22 * Math.sin(pR) + 0x8 * Math.sin(0x3 * pR),
    'y': 0x4c + 0x4 * Math.sin(0x2 * pR)
  };
}
y(pV, 'soulPath');
var pS = {
    'loop': 0x78,
    'still': 0x46,
    'hover': ['snd_graze', 0.14, 0x1],
    'draw'(pl, pa, pR) {
      p2(pl, "#000000", 0x0, 0x0, l, a), pl.strokeStyle = "#332033", pl.lineWidth = 0x1, pl.strokeRect(0.5, 0.5, l - 0x1, a - 0x1);
      let pO = pV(pa),
        pZ = p1(pO.x),
        pc = p1(pO.y),
        ph = 0x78,
        pi = 0x0;
      for (let px = 0x0; px < 0x40; px++) {
        let pX = pa - px;
        if ((pX % 0x4 + 0x4) % 0x4) continue;
        let pb = (pX % ph + ph) % ph / 0x4 * 0xc * Math.PI / 0xb4,
          pt = px * 1.6;
        for (let pw = 0x0; pw < 0x5; pw++) {
          let pE = pb + pw * (0x2 * Math.PI / 0x5),
            H0 = p1(0x40 + Math.cos(pE) * pt),
            H1 = p1(0x16 + Math.sin(pE) * pt);
          if (H0 < -0x2 || H1 < -0x2 || H0 > l + 0x1 || H1 > a + 0x1) continue;
          let H2 = H0 - (pZ + 0x4),
            H3 = H1 - (pc + 0x4),
            H4 = H2 * H2 + H3 * H3;
          if (H4 < 0x9) continue;
          let H5 = B[pw % B.length];
          if (p2(pl, H5, H0 - 0x1, H1, 0x3, 0x1), p2(pl, H5, H0, H1 - 0x1, 0x1, 0x3), p2(pl, "#ffffff", H0, H1, 0x1, 0x1), H4 < 0x31 && pi < 0x3) {
            pi++;
            let H6 = p1((H0 + pZ + 0x4) / 0x2),
              H7 = p1((H1 + pc + 0x4) / 0x2);
            p2(pl, "#ffffff", H6 - 0x1, H7, 0x3, 0x1), p2(pl, "#ffffff", H6, H7 - 0x1, 0x1, 0x3), pR.text(pl, H6 + 0x3, H7 - 0x9, '+', "#ffffff", 'fnt_small');
          }
        }
      }
      pl.strokeStyle = "#ffffff", pl.strokeRect(61.5, 19.5, 0x5, 0x5), p2(pl, "#ffffff", 63, 21, 0x3, 0x3), pR.heart(pl, pZ, pc), pa >= 0x28 && pa < 0x50 && p2(pl, "#ffffff", pZ + 0x4, pc + 0x4, 0x1, 0x1);
    }
  },
  pW = (() => {
    let pl = t(0x5eed01),
      pa = [];
    for (let pR = 0x0; pR < 0x28; pR++) {
      let pO = pl() * Math.PI * 0x2;
      pa.push({
        'a0': pO,
        'curl': (pl() - 0.5) * 1.6,
        'r0': 0x5c + pl() * 0x1e,
        'rEnd': 0xc + pl() * 0x16,
        's': Math.floor(pl() * 0x28)
      });
    }
    return pa;
  })(),
  pg = 0x70;
function pf(pl, pa) {
  let pR = O((pa - pl.s) / (pg - pl.s)),
    pO = pl.r0 + (pl.rEnd - pl.r0) * h(pR * 0.55 + pR * pR * 0.45),
    pZ = pl.a0 + pl.curl * pR;
  return {
    'x': 0x40 + Math.cos(pZ) * pO * 1.25,
    'y': 0x30 + Math.sin(pZ) * pO,
    'r': pO
  };
}
y(pf, 'blobAt');
var pr = {
    'loop': 0x96,
    'still': 0x76,
    'hover': ['snd_sparkle_gem', 0.1, 0x1],
    'draw'(pl, pa, pR) {
      p2(pl, "#0d0d18", 0x0, 0x0, l, a);
      let pO = Math.floor(pa * 0x20 / 0x96) % 0x10;
      pl.fillStyle = "#1a1a2a";
      for (let px = pO - 0x10; px < a; px += 0x10) pl.fillRect(0x0, px, l, 0x1);
      for (let pX = 0x8; pX < l; pX += 0x10) pl.fillRect(pX, 0x0, 0x1, a);
      let pZ = pa >= pg ? c((pa - pg) / 0x8) * 0x3c + 0x4 : -0x1,
        pc = 0x0;
      for (let pb of pW) {
        let pt = pf(pb, Math.min(pa, pg));
        if (!(pZ >= 0x0 && pZ >= pt.r)) {
          if (pa < pb.s) continue;
          p2(pl, "#3a2a4a", pt.x - 0x2, pt.y - 0x2, 0x4, 0x4), p2(pl, "#806080", pt.x - 0x1, pt.y - 0x2, 0x2, 0x1);
          continue;
        }
        pc++;
        let pw = pg + Math.max(0x0, (pt.r - 0x4) / 0x3c) * 0x8,
          pE = pa - pw;
        if (pE < 0x3) {
          let H1 = 0x2 + pE * 0x2;
          for (let [H2, H3] of [[H1, 0x0], [-H1, 0x0], [0x0, H1], [0x0, -H1]]) p2(pl, "#c0a0e0", pt.x + H2, pt.y + H3, 0x1, 0x1);
        }
        let H0 = pa < 0x7c ? 0x0 : h((pa - 0x7c) / 0x16);
        H0 < 0x1 && p2(pl, "#00ffff", pt.x + (0x40 - pt.x) * H0 - 0x1, pt.y + (0x30 - pt.y) * H0 - 0x1, 0x2, 0x2);
      }
      pZ >= 0x0 && pa < pg + 0x8 && (pl.strokeStyle = "#ffff00", pl.lineWidth = 0x1, pl.beginPath(), pl.arc(0x40, 0x30, pZ, 0x0, Math.PI * 0x2), pl.stroke()), pR.heart(pl, 0x3c, 0x2c);
      let ph = pa < 0x7c ? 0x0 : O((pa - 0x7c) / 0x16);
      p2(pl, "#003040", 0x0, 0x0, l, 0x2), pa < 0x92 ? p2(pl, "#00ffff", 0x0, 0x0, p1(l * ph), 0x2) : pa < 0x95 && p2(pl, pR.calm ? "#ffff00" : "#ffffff", 0x0, 0x0, l, 0x2);
      let pi = 0x3b - Math.floor(pa / 0x1e);
      pR.text(pl, l - 0x3, 0x4, '9:' + String(pi).padStart(0x2, '0'), "#808080", 'fnt_small', 'right');
    }
  },
  pQ = {
    'cols': 0x9,
    'rows': 0xb,
    'cell': 0x8,
    'x': 0x14,
    'y': 0x4,
    'gap': 0x8
  },
  pT = [0x1, 0x3, 0x8, 0x5, 0x7, 0x2, 0x6, 0x4],
  pe = [[0x6, [[0x7, 0x0], [0x8, 0x0], [0x8, 0x1], [0x8, 0x2]]], [0x7, [[0x7, 0x1], [0x7, 0x2], [0x7, 0x3], [0x8, 0x3]]], [0x2, [[0x7, 0x4], [0x7, 0x5], [0x8, 0x4], [0x8, 0x5]]], [0x4, [[0x7, 0x6], [0x7, 0x7], [0x8, 0x6], [0x8, 0x7]]], [0x1, [[0x7, 0x8], [0x8, 0x8], [0x9, 0x8], [0xa, 0x8]]]],
  pu = (() => {
    let pl = [],
      pa = 0x4;
    for (let [pR, pO] of pe) {
      let pZ = Math.min(...pO.map(pc => pc[0x0])) + 0x3;
      pl.push({
        'col': pR,
        'cells': pO,
        'spawn': pa,
        'land': pa + pZ * 0x2
      }), pa += pZ * 0x2 + 0x4;
    }
    return pl;
  })(),
  pJ = pu[pu.length - 0x1].land + 0x2,
  pB = 0x96;
function pM(pl, pa, pR, pO, pZ, pc = pZ) {
  let ph = p6(o[pa] || "#808080", pZ);
  pc >= pZ ? pl.drawImage(ph, p1(pR), p1(pO)) : pc > 0x0 && pl.drawImage(ph, 0x0, 0x0, pZ, pc, p1(pR), p1(pO + (pZ - pc) / 0x2), pZ, pc);
}
y(pM, 'drawCellAt');
var pk = {
    'loop': 0xb4,
    'still': 0x60,
    'hover': ['snd_bump', 0.14, 0x1],
    'draw'(pl, pa, pR) {
      p2(pl, "#000000", 0x0, 0x0, l, a);
      let {
        cols: pO,
        rows: pZ,
        cell: pc,
        x: ph,
        y: pi
      } = pQ;
      pl.strokeStyle = "#404040", pl.lineWidth = 0x1, pl.strokeRect(ph - 0.5, pi - 0.5, pO * pc + 0x1, pZ * pc + 0x1);
      let px = pa >= pJ + 0x5,
        pX = pa >= pB ? Math.min(0x2, Math.floor((pa - pB) / 0x5)) : 0x0,
        pb = pa >= pJ && !px,
        pt = pb ? pa < pJ + 0x2 ? pc : p1(pc * (0x1 - (pa - pJ - 0x2) / 0x3)) : pc,
        pw = pb && pa < pJ + 0x2,
        pE = (H1, H2) => {
          for (let H3 = 0x0; H3 < pO; H3++) H3 !== pQ.gap && pM(pl, pT[H3 % pT.length], ph + H3 * pc, pi + H1 * pc + H2, pc);
        };
      if (px) {
        if (pX > 0x0) {
          for (let H1 = 0x0; H1 < pX; H1++) pE(0xa - (pX - 0x1 - H1), 0x0);
        }
      } else for (let H2 of [0x9, 0xa]) {
        if (pw) {
          p2(pl, pR.calm ? "rgba(255,255,0,0.5)" : "#ffffff", ph, pi + H2 * pc, pO * pc, pc);
          continue;
        }
        if (pb) {
          for (let H3 = 0x0; H3 < pO; H3++) H3 !== pQ.gap && pM(pl, pT[H3 % pT.length], ph + H3 * pc, pi + H2 * pc, pc, pt);
        } else pE(H2, 0x0);
      }
      for (let H4 of pu) {
        if (pa < H4.spawn || px) continue;
        let H5 = pa >= H4.land ? 0x0 : Math.ceil((H4.land - pa) / 0x2),
          H6 = pa >= H4.land && pa < H4.land + 0x1 ? 0x1 : 0x0;
        for (let [H7, H8] of H4.cells) {
          let H9 = H7 - H5;
          if (!(H9 < 0x0)) {
            if (pw && H7 >= 0x7) {
              p2(pl, pR.calm ? "rgba(255,255,0,0.5)" : "#ffffff", ph + H8 * pc, pi + H9 * pc, pc, pc);
              continue;
            }
            pM(pl, H4.col, ph + H8 * pc, pi + H9 * pc + H6, pc, pb ? pt : pc);
          }
        }
      }
      p2(pl, "#000000", 0x62, 0x4, 0x1c, 0x3c), pl.strokeStyle = "#404040", pl.strokeRect(97.5, 3.5, 0x1d, 0x3d), pR.text(pl, 0x70, 0x6, 'NEXT', "#808080", 'fnt_small', 'center');
      let H0 = 0x0;
      for (let Hp = 0x0; Hp < pu.length && H0 < 0x3; Hp++) {
        let HH = pu[Hp];
        if (HH.spawn <= pa) continue;
        let Hj = Math.min(...HH.cells.map(HV => HV[0x0])),
          HP = Math.min(...HH.cells.map(HV => HV[0x1]));
        for (let [HV, HS] of HH.cells) pM(pl, HH.col, 0x68 + (HS - HP) * 0x4, 0x12 + H0 * 0x10 + (HV - Hj) * 0x4, 0x4);
        H0++;
      }
      pa >= pJ && pa < pJ + 0x1e && pR.text(pl, ph + pO * pc / 0x2, 0x1e, 'TETRIS', "#ffff00", 'fnt_small', 'center');
    }
  },
  pY = {
    'lanes': 0x4,
    'lw': 0x10,
    'x': 0x20,
    'recY': 0x4e,
    'speed': 0x2,
    'chart': [[0x0, 0x0], [0xf, 0x2], [0x1e, 0x1], [0x2d, 0x3], [0x3c, 0x0, 0x14], [0x4b, 0x2], [0x5a, 0x3], [0x69, 0x1]]
  },
  pA = (() => {
    try {
      return k(0x4, 'DELTARUNE');
    } catch {
      return [0x0, 0x1, 0x2, 0x3].map(() => ({
        'base': "#ffffff",
        'dark': "#404040"
      }));
    }
  })(),
  pU = {
    'loop': 0x78,
    'still': 0x3e,
    'hover': ['snd_select', 0.1, 1.5],
    'draw'(pl, pa, pR) {
      p2(pl, "#000000", 0x0, 0x0, l, a);
      let {
        lw: pO,
        x: pZ,
        recY: pc
      } = pY;
      pl.fillStyle = "#1a1a1a";
      for (let px = 0x0; px <= 0x4; px++) pl.fillRect(pZ + px * pO, 0x0, 0x1, a);
      let ph = 0x0,
        pi = -0x63;
      for (let [pX] of pY.chart) pX <= pa && (ph++, pi = pX);
      for (let pb = 0x0; pb < 0x4; pb++) {
        let pt = pA[pb].base,
          pw = -0x1;
        for (let [H0, H1, H2] of pY.chart) if (H1 === pb) {
          let H3 = H0 + (H2 ? H2 / pY.speed : 0x0),
            H4 = ((pa - H3) % 0x78 + 0x78) % 0x78,
            H5 = ((pa - H0) % 0x78 + 0x78) % 0x78;
          H2 && H5 < H2 / pY.speed ? pw = 0x3 : H4 < 0x4 && (pw < 0x0 || H4 < pw) && (pw = H4);
        }
        let pE = pZ + pb * pO + 0x1;
        pw >= 0x0 && pw < 0x2 ? p2(pl, pR.calm ? "#ffff00" : "#ffffff", pE, pc, 0xe, 0x6) : pw >= 0x2 && pw < 0x4 ? p2(pl, pt, pE, pc, 0xe, 0x6) : (pl.strokeStyle = pt, pl.lineWidth = 0x1, pl.strokeRect(pE + 0.5, pc + 0.5, 0xd, 0x5)), pw >= 0x0 && pw < 0x1 && (p2(pl, "#ffffff", pE + 0x4, pc - 0x8, 0x5, 0x1), p2(pl, "#ffffff", pE + 0x6, pc - 0xa, 0x1, 0x5));
      }
      for (let [H6, H7, H8] of pY.chart) {
        let H9 = pA[H7].base,
          Hp = pZ + H7 * pO + 0x1,
          HH = ((H6 - pa) % 0x78 + 0x78) % 0x78,
          Hj = H8 || 0x0,
          HP = ((pa - H6) % 0x78 + 0x78) % 0x78;
        if (Hj && HP < Hj / pY.speed) {
          let HS = Hj - HP * pY.speed;
          p2(pl, pA[H7].dark, Hp + 0x2, pc - HS, 0xa, HS);
          continue;
        }
        if (HH > 0x2c) continue;
        let HV = pc - HH * pY.speed;
        Hj && p2(pl, pA[H7].dark, Hp + 0x2, HV - Hj, 0xa, Hj), p2(pl, H9, Hp, HV, 0xe, 0x4), p2(pl, "#ffffff", Hp, HV, 0xe, 0x1);
      }
      if (ph > 0x0) {
        let HW = pa - pi < 0x2 ? -0x1 : 0x0;
        pR.text(pl, 0x40, 0x6 + HW, String(ph), "#ffffff", 'fnt_small', 'center');
      }
    }
  },
  po = {
    'w': 0x12,
    'gap': 0x2,
    'x': 0xf,
    'y1': 0x1a,
    'y2': 0x32
  },
  ps = {
    'hit': ["#16301a", "#7ad17a"],
    'near': ["#33300a", "#ffff00"],
    'miss': ["#000000", "#404040"]
  },
  pG = [['S', 'miss'], ['P', 'near'], ['A', 'miss'], ['R', 'hit'], ['E', 'near']],
  pq = [['F', 'hit'], ['I', 'hit'], ['G', 'hit'], ['H', 'hit'], ['T', 'hit']];
function pL(pl, pa, pR, pO, pZ, pc, ph, pi) {
  let px = Math.max(0x0, p1(0x12 * Math.abs(Math.cos(Math.PI * ph)))),
    pX = ph >= 0.5 ? pc : null;
  if (pO += pi, (ph <= 0x0 || px >= 0x12) && !pX) {
    pl.strokeStyle = "#404040", pl.lineWidth = 0x1, pl.strokeRect(pR + 0.5, pO + 0.5, 17, 17);
    return;
  }
  if (px < 0x1) return;
  let pb = pO + p1((0x12 - px) / 0x2);
  if (!pX) {
    pl.strokeStyle = "#404040", pl.lineWidth = 0x1, pl.strokeRect(pR + 0.5, pb + 0.5, 17, Math.max(0x1, px - 0x1));
    return;
  }
  let [pt, pw] = ps[pX];
  p2(pl, pt, pR, pb, 0x12, px), pl.strokeStyle = pw, pl.lineWidth = 0x1, pl.strokeRect(pR + 0.5, pb + 0.5, 17, Math.max(0x1, px - 0x1)), px >= 16 && pa.text(pl, pR + 9, pO + 0x3, pZ, pX === 'miss' ? "#808080" : pw, 'fnt_main', 'center');
}
y(pL, 'dTile');
var pn = {
    'loop': 0x96,
    'still': 0x78,
    'hover': ['snd_menumove', 0.16, 1.3],
    'draw'(pl, pa, pR) {
      p2(pl, "#000000", 0x0, 0x0, l, a);
      let pO = pa >= 0x82 ? 0x1 : 0x0,
        pZ = (ph, pi, px, pX) => ph.forEach(([pb, pt], pw) => {
          let pE = 0xf + pw * 20,
            H0 = O((pa - px - pw * 0x4) / 0x6);
          pO > 0x0 && (H0 = Math.min(H0, 0x1 - O((pa - 0x82 - pw * 0x3) / 0x6)));
          let H1 = 0x0;
          if (pX && pa >= 0x5c && pa < 0x74) {
            let H2 = pa - 0x5c - pw * 0x4;
            H2 >= 0x0 && H2 < 0x4 && (H1 = H2 < 0x2 ? -0x1 : 0x0);
          }
          pL(pl, pR, pE, pi, pb, pt, H0, H1);
        });
      pZ(pG, 0x1a, 0x6, !0x1), pZ(pq, 0x32, 0x3c, !0x0);
      let pc = pa < 0x1e ? 0x0 : pa < 0x54 ? 0x1 : 0x2;
      pc && pa < 0x82 && pR.text(pl, l - 0x4, 0x50, pc + '/6', "#808080", 'fnt_small', 'right');
    }
  },
  pN = {
    'w': 0x40,
    'h': 0x30
  },
  pI = null,
  pd = null,
  pF = null,
  pK = new Uint8Array(3072);
function pD(pl, pa) {
  if (pl < -0.97 || pl > 0.97 || pa < -1.05 || pa > 0.88) return !0x1;
  let pR = (pZ, pc, ph) => (pl - pZ) * (pl - pZ) + (pa - pc) * (pa - pc) < ph * ph,
    pO = (pR(-0.34, -0.08, 0.62) || pR(0.34, -0.08, 0.62) || pR(0x0, 0.22, 0.66)) && !pR(0x0, -0.8, 0.22) && !(pa > 0.83 && pl > -0.1 && pl < 0.1);
  if (!pO && pa > -1.04 && pa < -0.56) {
    let pZ = 0.02 + (-0.56 - pa) * 0.3;
    pO = pl > pZ - 0.07 && pl < pZ + 0.07;
  }
  if (!pO) {
    let pc = pl - 0.33,
      ph = pa + 0.86,
      pi = pc * 0.9 + ph * 0.44,
      px = -pc * 0.44 + ph * 0.9;
    pO = pi * pi / 0.07 + px * px / 0.013 < 0x1;
  }
  return pO;
}
y(pD, 'appleIn');
function py(pl, pa, pR = pK, pO = 0x1) {
  let pZ = 0x2 * Math.PI * pl / 0xb4,
    pc = 0xf,
    ph = 0.1 * Math.sin(pZ),
    pi = Math.cos(ph),
    px = Math.sin(ph),
    pX = 0x20 + 0x2 * Math.sin(pZ),
    pb = 0x26,
    pt = pl >= 0x78 ? Math.cos(Math.PI * 0x2 * (pl - 0x78) / 0x3c) : 0x1,
    pw = Math.abs(pt) < 0.08 ? 0.08 : pt,
    pE = pl >= 0x5a,
    H0 = pa && pl >= 0x5a && pl < 0x60 ? (pl - 0x5a) / 0x6 * 0x40 : -0x1,
    H1 = 0x0;
  for (let H2 = 0x0; H2 < 0x30; H2 += pO) {
    let H3 = pl < 0x3c ? -0x4 + pl / 0x3c * 0x48 + Math.round(0x2 * Math.sin(H2 * 0.9 + pl * 0.7) + 1.5 * Math.sin(H2 * 2.3 - pl * 1.3)) : 0x3e7,
      H4 = H2 + 0.5 - pb;
    for (let H5 = 0x0; H5 < 0x40; H5 += pO) {
      let H6 = !0x1;
      if (H5 < H3) {
        let H8 = H5 + 0.5 - pX;
        H6 = pD((H8 * pi + H4 * px) / (pc * pw), (-H8 * px + H4 * pi) / pc + 0.88);
      }
      let H7 = (H0 >= 0x0 ? H5 < H0 : pE) ? !H6 : H6;
      pR[H2 * 0x40 + H5] = H7 ? 0x1 : 0x0, H7 && H1++;
    }
  }
  return H1;
}
y(py, 'baFrame');
function pC(pl) {
  let pa = [],
    pR = new Uint8Array(3072);
  for (let pO = 0x0; pO < 0xb4; pO++) {
    let pZ = py(pO, pl, pR, 0x2) > 384,
      pc = 0x20 + 0x18 * Math.sin(0x2 * Math.PI * pO / 0xb4),
      ph = 0x28,
      pi = null,
      px = 0x3b9aca00;
    for (let pX = 0x8; pX < 44; pX += 0x4) for (let pb = 0x4; pb < 60; pb += 0x4) {
      if (pR[pX * 0x40 + pb] === 0x1 !== pZ) continue;
      let pt = (pb - pc) * (pb - pc) + (pX - ph) * (pX - ph);
      pt < px && (px = pt, pi = [pb, pX]);
    }
    pa.push(pi || [Math.round(pc), ph]);
  }
  return pa;
}
y(pC, 'baSoulTable');
var pm = {
    'loop': 0xb4,
    'still': 0x68,
    'draw'(pl, pa, pR) {
      pI || (pI = p3(0x40, 0x30), pd = pI.getContext('2d').createImageData(0x40, 0x30));
      let pO = !!pR.calm;
      (!pF || pF.calm !== pO) && (pF = {
        'calm': pO,
        'pos': pC(pO)
      });
      let pZ = pa - (pa & 0x1),
        pc = pZ + (pO ? 'c' : '');
      if (pI._key !== pc) {
        pI._key = pc, py(pZ, pO);
        let pw = pd.data;
        for (let pE = 0x0, H0 = 0x0; pE < pK.length; pE++, H0 += 0x4) {
          let H1 = pK[pE] ? 0x0 : 0xff;
          pw[H0] = pw[H0 + 0x1] = pw[H0 + 0x2] = H1, pw[H0 + 0x3] = 0xff;
        }
        pI.getContext('2d').putImageData(pd, 0x0, 0x0);
      }
      pl.imageSmoothingEnabled = !0x1, pl.drawImage(pI, 0x0, 0x0, l, a);
      let ph = pF.pos,
        pi = ph[pa],
        px = 0x1;
      for (let H2 = 0x1; H2 <= 0x3; H2++) {
        let H3 = ph[(pa - H2 + 0xb4) % 0xb4],
          H4 = ph[(pa - H2 + 0x1 + 0xb4) % 0xb4];
        if (H3[0x0] !== H4[0x0] || H3[0x1] !== H4[0x1]) {
          pi = H3, px = i(H2 / 0x3, 1.2);
          break;
        }
      }
      let pX = ph[pa],
        pb = pi[0x0] + (pX[0x0] - pi[0x0]) * px,
        pt = pi[0x1] + (pX[0x1] - pi[0x1]) * px;
      pR.heart(pl, p1(pb * 0x2) - 0x4, p1(pt * 0x2) - 0x4);
    }
  },
  pv = {
    'blackjack': pP,
    'spellcard': pS,
    'survivors': pr,
    'tetris': pk,
    'mania': pU,
    'darkdle': pn,
    'badapple': pm
  };
export { l as a, a as b, b as c, t as d, p6 as e, pD as f, pv as g };