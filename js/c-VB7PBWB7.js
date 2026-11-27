import { A as B, B as D, U as O, f as z, ja as v } from './c-AXDRFE3U.js';
import { v as y, w as H } from './c-J7PU4477.js';
import { a as W, g as S } from './c-ZQQWH6UG.js';
import { G as u, H as C, Ra as b, X as j, h as X, lc as w, na as m, oa as i, ta as J, ua as V, va as P, wa as t, xb as a } from './c-PBMEVLU6.js';
import { a as R, l as F } from './c-XSSGDLV7.js';
function n(Q, Z, QG) {
  return Qz(QG - -0x1f8, Q);
}
F(), F();
var N = R(() => typeof performance < 'u' ? performance.now() : Date.now(), 'now'),
  e = typeof document < 'u' && !!document.createElement && typeof window < 'u',
  r = class Zp {
    constructor(Q = null) {
      if (this.cv = e ? document.createElement('canvas') : null, this.ctx = this.cv && this.cv.getContext ? this.cv.getContext('2d') : null, this.g = null, this.sig = null, this.w = 0x0, this.h = 0x0, this.k = 0x0, this.paints = 0x0, this.dom = !!Q, this.cv && Q) {
        let Z = this.cv.style;
        Z.position = 'fixed', Z.left = "0px", Z.top = "0px", Z.display = 'none', Z.zIndex = '5', Z.imageRendering = 'pixelated', Z.pointerEvents = Q.clicks ? 'auto' : 'none', Z.background = 'transparent', document.body.appendChild(this.cv);
      }
    }
    ["paint"](Q, Z, QG, QV, QP, Qt) {
      if (!this.ctx || (Z = Math.max(0x1, Math.ceil(Z)), QG = Math.max(0x1, Math.ceil(QG)), QP === this.sig && Z === this.w && QG === this.h && QV === this.k)) return false;
      this.g || (this.g = new w(this.ctx)), Q && Q.fonts && (this.g.fonts = Q.fonts);
      let Qa = Math.max(0x1, Math.round(Z * QV)),
        QR = Math.max(0x1, Math.round(QG * QV));
      (this.cv.width !== Qa || this.cv.height !== QR) && (this.cv.width = Qa, this.cv.height = QR);
      let QF = this.ctx;
      QF.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0), QF.globalAlpha = 0x1, QF.clearRect(0x0, 0x0, Qa, QR), QF.setTransform(QV, 0x0, 0x0, QV, 0x0, 0x0), QF.imageSmoothingEnabled = false, this.w = Z, this.h = QG, this.k = QV, this.sig = QP, this.paints++;
      try {
        Qt(this.g, Z, QG);
      } catch (Qn) {
        throw this.sig = null, Qn;
      }
      return true;
    }
    ["blit"](Q, Z, QG) {
      !this.ctx || !this.w || Q.ctx.drawImage(this.cv, 0x0, 0x0, this.cv.width, this.cv.height, Z, QG, this.w, this.h);
    }
    ["invalidate"]() {
      this.sig = null;
    }
    ["show"](Q, Z, QG, QV, QP = 0x0) {
      if (!this.dom || !this.cv) return;
      let Qt = this.cv.style,
        Qa = QP ? QF => +(Math.round(QF * QP) / QP).toFixed(0x4) + 'px' : QF => Math.round(QF) + 'px',
        QR = Q + ',' + Z + ',' + QG + ',' + QV;
      this._pos === QR && Qt.display !== 'none' || (this._pos = QR, Qt.left = Qa(Q), Qt.top = Qa(Z), Qt.width = Qa(QG), Qt.height = Qa(QV), Qt.display = '');
    }
    ["hide"]() {
      this.dom && this.cv && this.cv.style.display !== 'none' && (this.cv.style.display = 'none', this._pos = null);
    }
  };
R(r, 'Layer');
var l = r,
  U = {
    't': -0x3b9aca00,
    'rect': null,
    'W': 0x0,
    'H': 0x0,
    'dpr': 0x1
  },
  h = null;
function c() {
  if (!e) return null;
  let Q = N();
  if (U.rect && Q - U.t < 0xfa) return U;
  U.t = Q;
  let Z = document.getElementById('game');
  if (!Z || !Z.getBoundingClientRect) return U.rect = null, U;
  let QG = Z.getBoundingClientRect();
  U.rect = {
    'left': QG.left,
    'top': QG.top,
    'right': QG.right,
    'bottom': QG.bottom,
    'width': QG.width,
    'height': QG.height
  };
  let QV = document.getElementById('info'),
    QP = QG.bottom;
  if (QV && QV.getBoundingClientRect && QV.style.display !== 'none' && QV.style.position !== 'fixed') {
    let Qt = QV.getBoundingClientRect();
    Qt.height > 0x0 && (QP = Math.max(QP, Qt.bottom));
  }
  return U.below = QP, U.W = window.innerWidth, U.H = window.innerHeight, U.dpr = window.devicePixelRatio || 0x1, U;
}
R(c, 'measure'), e && window.addEventListener && window.addEventListener('resize', () => {
  U.t = -0x3b9aca00;
});
var L = 0.95,
  Y = 0x6,
  A = true;
function Q0(Q) {
  A = !!Q, U.t = -0x3b9aca00;
}
R(Q0, 'setEnabled');
function Q1(Q, Z = 0x88) {
  if (!A || e && document.body && document.body.classList && document.body.classList.contains("shell-framed")) return null;
  if (Q === 'bottom') return Q3(Z);
  if (e && document.body && document.body.classList && document.body.classList.contains("shell-touch")) return null;
  let QG = c();
  if (!QG || !QG.rect || !QG.rect.width) return null;
  let QV = QG.rect,
    QP = (h ? h[Q] : Q === 'left' ? QV.left : QG.W - QV.right) - Y * 0x2,
    Qt = QV.width / 0x280,
    Qa = Math.min(Qt, QP / Z);
  if (!(Qa >= L)) return null;
  let QR = Math.floor(QP),
    QF = Math.floor(QR / Qa),
    Qn = Q === 'left' ? Math.max(Y, QV.left - Y - QR) : QV.right + Y;
  return {
    'side': Q,
    'x': Qn,
    'y': QV.top,
    'cssW': QR,
    'cssH': QV.height,
    'scale': Qa,
    'w': QF,
    'h': Math.floor(QV.height / Qa),
    'k': Qa * QG.dpr
  };
}
R(Q1, 'column');
var Q2 = 0x78;
function Q3(Q) {
  if (e && document.body && document.body.classList && document.body.classList.contains("shell-touch")) return null;
  let Z = c();
  if (!Z || !Z.rect || !Z.rect.width) return null;
  let QG = (Z.below || Z.rect.bottom) + Y,
    QV = Z.H - QG - Y;
  if (QV < Q2) return null;
  let QP = Math.min(0x1, (Z.W - Y * 0x2) / Q);
  if (!(QP >= 0.75)) return null;
  let Qt = Math.floor(Q * QP);
  return {
    'side': 'bottom',
    'x': Y,
    'y': QG,
    'cssW': Qt,
    'cssH': QV,
    'scale': QP,
    'w': Q,
    'h': Math.floor(QV / QP),
    'k': QP * Z.dpr,
    'pageW': Z.W - Y * 0x2
  };
}
R(Q3, 'bottomArea');
var Q4 = new Map(),
  Q5 = 0x6;
function Q6(Q, Z = {}) {
  let QG = Q4.get(Q);
  return QG || (QG = {
    'id': Q,
    'layer': new l({
      'clicks': !!Z.clicks
    }),
    'side': 'right',
    'order': 0x0,
    'h': 0x0,
    'placed': false,
    'y': 0x0,
    'col': null
  }, Q4.set(Q, QG)), QG;
}
R(Q6, 'slot');
function Q7(Q, Z, QG, QV, QP, Qt, Qa, QR = {}) {
  let QF = Q1(Z, QR.need || 0x88);
  if (!QF) return null;
  let Qn = Q6(Q, QR);
  return Qn.side = Z, Qn.order = QG, Qn.h = Math.min(QP, QF.h), Qn.placed = true, Qn.col = QF, Qn.exact = !!QR.exact, Qn.layer.paint(QV, QF.w, Qn.h, QF.k, Qt + '|' + QF.w, Qa), Qn;
}
R(Q7, 'place');
function Q8() {
  let Q = {
    'left': [],
    'right': [],
    'bottom': []
  };
  for (let Z of Q4.values()) {
    if (!Z.placed || !Z.col) {
      Z.layer.hide();
      continue;
    }
    Q[Z.side].push(Z);
  }
  let QG = Q.bottom.sort((Qa, QR) => Qa.order - QR.order),
    QV = 0x0,
    QP = 0x0,
    Qt = 0x0;
  for (let Qa of QG) {
    let QR = Qa.col,
      QF = QR.cssW,
      Qn = Qa.h * QR.scale;
    if (QV > 0x0 && QV + QF > QR.pageW && (QV = 0x0, QP += Qt + Q5 * QR.scale, Qt = 0x0), QP + Qn > QR.cssH) {
      Qa.layer.hide();
      continue;
    }
    Qa.y = QP / QR.scale, Qa.layer.show(QR.x + QV, QR.y + QP, QF, Qn), QV += QF + Q5 * QR.scale, Qt = Math.max(Qt, Qn);
  }
  for (let QN of ['left', 'right']) {
    let Qe = Q[QN].sort((Qk, Ql) => Qk.order - Ql.order),
      Qr = 0x0;
    for (let Qk of Qe) {
      let Ql = Qk.col;
      if (Qr + Qk.h > Ql.h) {
        Qk.layer.hide();
        continue;
      }
      Qk.y = Qr, Qk.exact && Qk.layer.cv ? Qk.layer.show(Ql.x, Ql.y + Qr * Ql.scale, Qk.layer.cv.width / U.dpr, Qk.layer.cv.height / U.dpr, U.dpr) : Qk.layer.show(Ql.x, Ql.y + Qr * Ql.scale, Ql.cssW, Qk.h * Ql.scale), Qr += Qk.h + Q5;
    }
  }
  for (let QU of Q4.values()) QU.placed = false;
}
R(Q8, 'endFrame');
function Q9() {
  for (let Q of Q4.values()) Q.placed = false, Q.layer.hide();
}
function QQ() {
  const Q = ['WRNcISk3W4pdUmo1WOe', 'mmkmqSoqWQG', 'DLVcVmoesqe', 'B8kVWRq', 'W7xcMCkTW5vj', "WP7dOd/cTCkQiCoO", 'gSoWW5JcTc0', 'fxmN', 'WORdTmoVmSoHtHKpW5SE', 'WRa1rfub', "je1NW5/dKG", "ehe/WPae", 'sWGSjG', 'W7xdUcOfxq', "W7JcUSk/W73dOW", 'WRVcHmk6W4pdMa', 'W7lcMCkR', 'eN8Frq', 'xt4qW4VdJG', "WOFcICkIW4JdHmo/WOrZW6lcNW", 'cmoFavGH', 'W4dcHerKcmoEcwG', 'WOJcHrWNfa', 'fvHmW7pdPq', "W6lcPgO+WOm", 'W5pcG8k0W4vL', 'WQtcUISNhmkin8kItSoI', "Dmk+WQfB", 'W4lcNXtcMsueWOnGEeq', 'W7XZWPOWFa', 'deldHay', 'WR5aW73cOCoh', "W65xWQK+uG", "WO/cUmkfs8os", 'W4VdG8ooW4NcMa', 'j8oQWRGClG', "eN4/wcu", 'WRxdGwSkWPZcJdbubSoo', 'W6pdVZy9ya', 'vqiGW6m5', 'W6NcMYRcOMq', 'nNXY', 'W7hcK1GbWRW', 'WQFcOmkZW4ZdSa', 'WR8Nv1ix', 'duldLs3cLW', 'W4JdLSoM', "W5NdVWK/Dq", 'uCoMWPNcJSkgFmoE', 'WOKTuq', 'W5NdH8oUtCoal8ks', 'dwm6WP4bWQ0', 'WOBdNSoVmL8', "W5hcGG/cP1C", 'WQrAW5dcPCoLea', 'W4LGoSoPWOe', 'CMpcU8o8zq', 'm2XWW67dKa', "wmkuWR/dG2O", 'hgNcLNbGW6tcIrn4dq', "oCotaKy/", 'W5BcUqNcMG', 'W6BdSCofW7FcIa', 'BZfMouu', 'WQFcGmkTW4ldG8o0WPe', 'pCoZW5xcQaS', 'WRRcQ8owt8kLkalcVq', 'WOldLsfJ', 'hCojWRqtlW', 'W63cPvSrW6a', 'W4FcHSkAW55a', 'WORcJCkEnq', 'oxWcWPCe', "W5aJWOJdVGr/WRy", 'W7OEWOLOWRi', 'W6jhWPG', 'WPZcPSkLW4JdVG', "WP/cHmoawCkH", 'W6XhWRmpFa', 'ygRdTK8J', 'jMNdJtlcTXjUyZGc', 'W4lcQeCYhq', 'zIKUWPC', 'aL1kW4pdPG', "gmoOW5RcRWBcISkHzZf/", 'CahcPSoDWR1G', 'WRvyW6FcMmoV', 'd07dGrC', 'smkTWQTIW7m', 'mhDQW4ldJG', "WO/dMIX0FHuiDq", 'yu7cPmomtqq', 'W4FcOHFcGKO', 'FZrwW5xcMxJdOSkwWQ0', 'EG03jae', 'WR7cGCkXW4LfWO7cIxldRCkZ', 'W45Wla', 'W6ddMCoRW53cJW', 'WRNdJ8oVhfu', 'W5BcQ0GKW4e', 'W7VcOgqxWQy', 'EdLFbNWWySo5ACka', "kxbWW4ldTc/cVmknWPFdIa", 'W4PWl8onWPS', 'W7hdPaazBrZdRW', 'W7JcIhqoWOm', 'W7tcOSk4W7VdPW', 'CtXmW4tcHG', 'u8kcWOn0kW', 'WQ9yW5VcL8oJ', 'x8kSb8o9W7e', 'W7VcKLRcSJ4nWQPau8oV', 'W5RcImkYW6Ph', 'W5JcJJtcTLW', 'W6lcHuqwcSoghG', "W6/cISkPW7FdH8oxWOa", 'vWu7W64c', 'W6dcG00oiq', 'p8kxsCoj', 'aMpdSXRcHa', 'tKhcKCoNW5i', 'd23dRtRcTa', 'WRJdOSoQcxm', 'WRBcQsy5mSki', 'BIvoW4JcGq', 'BmkEWPbhja', 'WOBcKdKXjW', 'WOpcLmkxn8ovW5qgeG', 'FXyffbm', 'o18CWPCb', "W5e/WO3dMZr7WQaew8kz", 'e1ZdOINcHq', 'WPlcK8kwW6JdMq', 'tXiK', 'WOVdNX3cGmkzfSoqW57cNIy', 'aexcIKzd', 'pcZcMa', 'cN4FFa4', 'W7PxWOuos04', 'uHSZW74ZW7hcTb1eWQK', 'W6FcSwVcTIy', 'W45iWR0htG', "vs/cSCoqWPG", 'W4BdPCotW57cJa', 'W6ldPSoPW7lcKa', 'AGmIW7NdUmkIW6Xaa8oT', 'WO3cHmklnCoOW4imfCo6W5S', 'EwtcKmozW6nRbmkr', 'W7ZcO8kyW4z7', 'W6FdSXm8xq', 'pKpcOwPJ', 'WOdcHmk5W6VdSa', 'WPRcSSolr8k7', 'W7DNW7FcKmommq', 'xmkLhSoiW48', 'W7nPa8oQWRK', 'WPNcPSkMlCorurHBW7az', "vCknWQj5W7imd8k+nbS", 'qaiSjW', 'h24jxctdN3W7WOq', 'W7DEWPSbxG', 'FNxcOmoRFq', 'CuBcPmojEr5fmmkP', 'WQOYw0aQ', 'eexdGZZcSc1lxqCp', 'WOhdL8oZo38', 'CudcUSogtYTikmkTpW', 'WQhcICk9W5SzW5VdLYZcOmoU', 'W4dcHSkFW7RdKmoAW7hcGSouDa', 'W6BcNx4pWP3cIq5pqCoo', 'WOtdGJFcNSkU', 'dSomW6u', 'g8oOW7tcPIS', 'amkolgHpAdeu', "WR/cG8k/", 'AJ1lW5xcKa', 'W6FcNbpcHv8', 'fhSFrG', 'WR3cKSoTW6ddVSoFWPiFW4tcJa', 'nwCtWR0d', 'WPhcSCkO', 'le94W5ddJq', 'vIXraw0', 'WPbzW7NcTmoL', 'tHm6', 'WRVdOJ5jxW', 'W7KYWP1lWPW', 'g8oSeKW', 'bSoZWRiB', 'WPZcRCkwW70j', 'Dcvr', "nmkxsCooWQ/cTmkilXOo", 'oKeJqIu', 'AGmIW7NdUmkIW6Xaa8oV', 'cmo9W6JcMYi', "Fmk+WOvhka", "W5pcGCkBW4XAW7ddN8o8lmo+", 'W6hcU8kHW6hdLG', 'W6VcJu8NmSoPdghdImon', 'yhJcPmoWAq', 'W5FdIISMua', 'W4lcSbRcHMO0WRz5', 'W6dcICkJW5xdVSo7W5e', 'WQtcGmk3', "WONcP8k/Ba", 'dmoSWRqooq', 'W4BdH8oWva', 'g1yrWRi7WPhdR8k3FeC', 'b8oWW5tcHdO', 'i8knD8o4WRxcMSkFkaOW', 'W7LqWOemxfi', 'jCkRd3js', "h8o3gvi/W6isgbrx", 'kf1WW73dTG', 'CSkxjCoTW5e', 'W5rPoCoqWORcI2a8i8oA', "W4ZdKmo/wa", 'qmkAWRnEW4O', 'x8kGgSoOW7u', 'fxq9WPq', 'WPSwrf0A', 'W50OWOddIa', 'WPlcGCkbW7hdIa', 'CdrA', 'WPVcSCk9ASofWRpcIGVdICoe', 'taSYoGq', 'EdiBec8', 'W6pcICkH', 'WQBdKmo5imo8', "aSo5hK8/", 'r8kUWPZdUW', 'f2Odtsq', 'W7FdUWqarWBdPujn', 'W47cUHhcQ3qUWQ9Ywa', 'eCkgpW', 'WOJdQCoGmq', 'WONdTmoVpa', 'WONdPCovixG', 'W6dcRfqc', 'WRpcVdG5o8kbdSk6DmoY', 'FcbwW47cHxhdRSkoWOpdJq', 'iCocW5ZcIce', 'BwlcICoBW5u', 'W57dGmorAmoT', 'CIS8W6qU', 'W7LMWReFvq', 'WQD3W4BcJmoS', 'e8kWsmowWQW', 'WOFcJmkZhSoLW7KQj8ooW7a', 'WPldUCo9h0ldVCkUWR7dJHq', "WRtdUZ/cQCkg", 'WPxcP8k5W7tdUW', 'W7FcUSkWW7j9', 'W5WdWRXiWRtcPCoHW5BdK8oJ', 'WP7cNSkCW5XfW6BcHa', 'eCo9mfmt', 'W6qfWO3dT8kXrfr2W6rLj8kmlW', 'DXdcJSoiWRK', 'W6dcHsS3pmkf', 'WRFcMCowDmkV', 'mxbZW4ldJG', 'dSoXWRSngJ5YyCoSWRK', 'vCk4WOv1ha', 'rKNdQxKcW6BdVa', 'f8k3AmosWOO', 'W592i8olWPy', 'W7ddOCobW73cIq', 'WPBcMmkx', 'kxPkW47dSq', 'Ch3cH8oWEG', 'W4aqWPXxWPi', 'WRfwW7JcRmot', 'W4iEWQa', 'WRjYW5NcI8oe', 'ybaUW6S', "F2hdQvm+", 'W7FcSvqxla', "W6ZcNe8+ca", 'W7jPlCoZWPy', "t8kSWPxdRu0nWQhcT8o+WPe", 'uCkqb8owW7q', 'jfqCrYtdK2a6WQhcSW', 'phxcQhv5', 'C13cQCosDrLzkmktoG', 'W751jmokWPy', "W6KyWRXcWR/dOSoFW5xdJSoM", "W5ZcQM/cMsO", 'EtbaW5tcKKNdRSkh', 'q23dTZddVwGfAt40', 'c2lcKfPQW4JcIra', 'yX4TW73dK8k0W7TCla', 'FgVcMW', 'kxXWW4ddIci', "W5/dKmo3ta", 'WPFcVCkRwCop', "nCkDsCoAWQ/cUq", "xmk/WOBdTa", 'xmkFWQ5gpW', 'W77cI1VcRW', 'k8kDvW', "mmo+W4dcHXG", 'W4xcVmoIW7xdMmocW7JdQCo1sW', 'EHBcQCoxWQW', 'w8kMm8o0W6u', "WPRcKqi+iq", 'lCoQgfy4', 'pgXyW4JdKq', "WOpdQJ/cOSk3kSo9", 'WONcSSkWf8og', 'WOJdGcXXvrmFB8oIW7q', 'uJvtj3O', 'CZH4W7tcMW', "W7FcK8kIW4RdN8o/WOu", 'vanQuNWWC8o1B8kC', 'WRVcGmkTW4hdNSoY', 'fmoohMOg', 'WRdcGNGGm8oHnW', 'rSkhjCop', 'W7dcLbBcPN0', 'WRTqW6RcQ8oe', 'WQpcISk8W5O', 'WOBcV8kZW5ldMG', 'W47dRCo0W5pcTG', 'W77cQHtcG20', 'iwZdJddcHW', 'jf3dTdxcMa', 'W5tdMGi4tG', 'WR3dG8o1ffNdSmkS', 'dxZdSrhcVa', 'WONcU8kHESojWP3cKa', 'W7KcWQ7dHWe', 'aMZcMv5h', "sqWLiar/", 'WR3cPmoHrSkW', 'WQVdTqFcQmkV', 'WQ7dOtTpEa', 'W7hcLLa', 'W6lcQf8t', 'W7xcH1ZcMcGjWPHQtCow', 'xam1W4FdJa', "W5RdU8o/D8o4", 'vbDwW63cTG', 'v2ddJNiL', 'tCkxjCozW7r0WRhcSG', 'W5f8jCoEWOFcIq', 'dCogW6BcJq', 'qay6', 'WQBdK8oZaMi', 'WONcSCovuW', 'w8ksWOHzja', 'W5NcMwugW5O', 'WQZdK8oVh0ddSSkQWQpdJqu', 'W5BcO8kZW5jk', 'WPRcSmkKW4uf', 'q8kXWPBdQ3q', 'W6tdI8oku8oG', 'dKtdIrdcQs1xxbmq', 'tSkrgSoRW6m', 'fwxdGcdcQq', 'eCkdmx9g', 'WPNcU8kTFmohWRVcKaK', 'W4hdUCo0W6pcTfmvWQG', 'W6JcIum2mG', 'WRrCW5dcSCoMgqa', 'W4tcP2yKW58', 'qSkgWQrtW6yGdCkT', 'W7DupmoOWPW', 'b1fGWRHCWRVcMXTuWRK8xq', 'W67cVf4AW6VdOmo9', 'W58fWRHcWQW', 'r8kWcColW7q', 'W5KOWORdMa', 'W5Xde8odWQO', 'WQFdI1qXf8oFtq', 'EMRcM8og', 'CJTw', 's8kcWR4', 'a8kCrmoZWPu', 'bCoEW7VcLcK', 'W7qPWRZdMr8', 'r8kKh8olW7C', "WP/dGIHQzG", 'W7tcHwubWP0', "W5/cG1ddUW83", 'rJbukL0', 'bSoQWRqFoq', 'zMtcJColra', 'oSoIW77cKWK', 'kg3dHadcNW', 'hwiwraxdHhWYWOu', 'W6lcGKOpWOq', 'gmoSWQ8ulG', 'W5b0WRmVtL4TpLXP', 'n8omW6VcH8oB', 'WORcTCkxW6Wp', 'WQNdICoShG', "WQ/cICk9W5SzW4ZdKchcTCoS", 'qqy7nXC', "mmowW5/cPmoe", 'jmo7oLCQ', 'WPBcSComu8kHirhcT1eV', 'rMNcV8oaW7O', 'W6VcQf8tW53dT8oVsmoj', 'smkZWOL5jq', 'W5RcPmk3W7ZdTa', 'ws5tf0C', 'FYaRaI4', 'WQNcI8kJW5Wu', 'EG3cPmooWQX6', 'W7tcOLCJW6q', 'seFdV2iD', 'WQlcK8k9W7SU', 'ta03W5eD', 'WRtcSmkyW4Cd', "W7BcGSk5W67dUSo0W5/cPW", 'WP7dS8o9lq', 'dK8Dtdq', 'WQdcH8kQW40F', 'W41Somor', 'W5RcMSkHW7NdUG', 'WPyHweinsa', 'pCkkrSokWOtcPCkFiXC', 'a0uvWPOZ', 'kCo5WOSOjq', 'EZflW67cSG', 'WR3cGmk0W4pdHG', 'W6pcMueZoSocchNdV8oH', 'WRzHW4ZcUSoQ', 'sJ5nh2BcHZCVWPRcGg3cMdC', 'WPJcGSkAW5KA', 'WPdcRSk4nSoM', 'vvpdTgi', 'W61xb8oJWPa', 'W4BcHhNcJqi', "EgxcKCo/W7u", 'FmkRa8oXW5G', 'WQVdHtVcJCkx', 'vragW7el', 'W4NcVrFcKa', 'kCkztSotWQ8', 'n8ojixut', 'C13cQCosDrLzkmktpq', "WQJcOt4YoSkEnmk+", 'mK3dQbFcUG', 'WPFcKSkJCCoe', 'W6hcINWUWRe', 'W4CsWQDgWRlcTG', 'hg7cLq', 'WRdcJCkUW6ZdRG', 'W5ruWO8cwa', "W7pcRmkhW4X/", 'W74MWQxdNWW', 'WQNcRCo7tmkz', 'WQvxW6VcPSog', 'WOxdHIHR', 'WP3cHSoQvCkt', 'mxzU', "WO/cJGW", 'W4ZcGKqhWPq', 'CabtW5JcRq', 'W6NdGYeIEW', 'a2lcNeH5W6K', 'gCoBWR0Waa', 'W57dQCotsSoy', 'FHtcKSoWWOC', 'WPBcV8oAsmkL', 'W7xdHmoKW6BcIG', 'WORcU8ortmkT', 'WQNcRYyraq', 'Bd9mW6RcHa', "WRdcHCkwgmo/", 'EdzSc3K', 'W4pcTM7cSdi', 'WOtcPCk4c8oE', 'imkTiK5Y', 'WQldT8oMdSoX', "WPJcQ8kcW4/dMG", 'W6FcICkIW6VdSG', 'WQZdQvmcW6xcTa', 'W53dGCoQDCoN', 'vmkkWQfoW7u', 'WQ9IW5NcOmoJ', 'W41RjmonWPZcLv8dia', 'W4FdI8oWrmos', 'se3dRhSN', "zf/cUSo6rWvooCkTlG", 'afm7WQO7', 'W6vkWPKFuG', 'zftdQMuyW7JcUCkfW6i3', 'lmoLW6dcPGi', 'WO8nqw8j', 'gSoKW4xcHmorCq', 'W4WfWQTaWQ7cP8o7W43dN8oQ', 'W7tcJvRcUciMWPH7vmob', 'wIenaba', "WP9/W7FcLSoN", 'xKhcVSomraLvpSkGoq', 'WQJdMXPmCa', 'W75rdSo4WQFcSG', 'W6RcILGSfq', "hCk/tSoXWRlcP8kGdc8N", 'mgLzW7ddIW', 'W4BdG8oM', 'WQiWCLal', 'WR7dLmoSihe', 'W5OcWPtdOr8', 'WOr9WQVdNq1QWRm9', "W5/cVSk8DmkobdyjW4SqWRu7", 'WOKuxgqB', 'AwZcKmoCW5zG', 'W53cHSkuW41TW7RdICoTfmo6', 'FwZcImobW51R', 'hmo9W7tcIWO', 'xaWLW6Wa', 'WQ7cMmkns8oc', 'qSkNWRjSW40', 'W4SNWPzdWPK', 'pmoqmgmM', 'FJ1dW5pcLNZdOCkdWQVdKq', 'mSkUc3LL', 'mmkwqCos', 'WPhcNmkvomoI', 'W4tdSmoAv8og', 'W5lcJgOUeW', 'bSoTba', 'zxBcISoJEq', 'W4VcNCknW69Q', "me17W4/dUG", 'pf8ECtO', 'W6hcSCktW5bCW7BdImoSfmo6', 'W7ZcNwKl', 'W4BdG8oMsCor', 'B2ZcLCoBW4vDe8kxWPZcRG', 'tSoFDIKwja', "WOnwW6/cOmob", 'W55PimoUWRy', 'b8oIWQi', 'W6RcI3hcJWS', 'WPNcMSkNfmkyE8ofWR7dMxBcVNDu', 'W43cOeqCW6O', 'WOxdOG9suW', 'W6iNWPNdMG8', 'nCogW5VcPSoV', 'oxNdSY3cIa', 'FcvsW43cJa', 'iCkTDConWRO', "W4hdUmoYW5/cVhmiWRldVMy", 'aepdHHhcQt1xrG', 'aMBcIG', 'wqaOW7G0', "W55+WQi9uq", "WP/cSCoAD8ky", 'W5JcH8kaW5RdUG', "jf/cK3HM", 'W6FcGgSoWOC', 'WO7cU8kJ', 'W7FcNCk5W73dRG', "aMBcILTOW6/cLa96da", 'buRdLbFcIs1Dxa', 'bSkWWRzhW7mmaSk5oWO', 'wtzxiu8', 'W5ldQmolvmof', 'W7hcVKWjfW', 'WORdNIjPEa', 'WQnwW43cTG', "qCkZWR/dQL0", 'EaxcPCo9WRG', 'W5lcI8kBW5HAW70', 'xWzuW6JcHW', "W5lcTH/cQ20KWQHYsuC", 'xJjhW7JcVq', 'W4BdU8oPW5VcTW', 'mNf3W5pdMq', 'W5XSp8owWOpcJuCk', 'dg86', 'd8o7WRKFoIz6ymoS', 'WOGDDgmQ', 'zCkBWRbOW5u', 'W4LaWOqEta', 'vXiAncy', 'WQ7cGYmdaq', 'tCkeWRfBmG', "zHaVW6FdGmk/", 'amoDW7tcJH7cTSkxta', 'WORdNdLzzWetDq', "h3KBxWNdG2aQWR/cOq", "vq/cNmozWPG", "WQNdLmo6b2/dQSkUWQldUW", 'lwpdJa3cRW', 'W7TBWOu', 'W6tdKmostSoQ', 'h8o5dW', 'ngWQtba', 't8kSWPxdRu0nWRtcSCoiWO0', 'WRVcSSkMW7GH', 'W6FcJ8k6W4vj', "WO/cT8kOyCou", 'j8oIW4NcGIS', 'fxPlW6pdUq', 'W7dcILmCjW', 'cMO9ude', 'FhJcQmoyW4a', 'cMVcTfTlW5NcOqDKgG', 'FZrwW5xcMxJdQ8kr', 'FutdSNGL', 'geWbWOWr', 'kwL2W4y', 'oSozfxu5', 'EbBcQConWPz7wGv9bq', 'FwtcKSor', 'FWZcQCoi', 'W7hcM20r', 'WPtcMmkIuCoV', 'W6fAWOiDwG', 'Ec9qaxW0C8oMC8ky', 't8kqkSonW59UWRVcQgSs', 'qs0gW64A', 'd2RdJHlcRa', 'W6NcQfqWW6C', 'e17dLaS', 'W7ZcMx4pWORcHbD3tSoN', 'CSkSWPFdGNy', 'WPyTweak', "WRRcH8k/W4ekW5a", 'g3xcK0XO', 'WR7dISoCbN4', 'WPxcNmoPwCk3', 'FJPoW47cHW', 'prnYW7ldLt3cR8k2WP7dTW', 'EK7cSmonwG', 'y0dcR8ocrG8', 'uSkNmSoPW7q', 'f3Sssq', 'W7RcMwKi', 'zILqfwq0', 'FZLlW5u', 'sJ9jhwtcItasWPBcThhcHXe', 'fSo3W4JcMSoPBmkleSozW6W', 'CW41WQKiW6FcSXX8', 'd8koihrt', 'WOOHweeqtGC', 'aCkhow5oyIyf', 'W5hcGSkAW40', 'WOpcKSkjhSoMW5in', 'W5RdTSokumod', 'wWSXW4CH', "W7/dOaSsAW", "W6r+WP0buW", 'DqzGW6NcUa', 'hMuE', 'W5lcGCkGW6vM', 'sSkoiSoDW64', 'WOJcK8kDmSoGW5Kr', 'WPhdUJC', 'l8k5gvnK', 'wmkhjW', 'WOBcR8kVe8o1', 'ne08', 'W6hcGKCSeq', 'WRBcRSoBDmk0', 'WQpcHmk5W7CaW5hdIZhcTCoM', 'fwRcQezy', 'WPFcMCkTdCoX', 'W5VcRSoduSkHpvK', 'Favoefi', "tCkqjmoxW4n1WR/cRNCE", 'DIHFaa', 'WQBdHa92tW', 'W6ddI8oYtCkblCkBWRFcQNK', 'WONcRCk5W70i', 'W4jCWR4ntq', 'F8kRWRbckMD2ea', 'W6JcQrlcSK4', 'WPRcKSozumohlSkbWPy', 'W4NcJ8kgW6DS', 'CGpcPmoiWPO', 'ys0UoGP1WONcU8oyWQa', 'W5GUWQBdIqy', 'W50SWOddHqXM', 'WPKRwKOl', 'l8kvu8o1WPG', 'l8orW4xcGJq', 'W6DMWOKZCq', 'W43dO8oXW4xcKq', "WP42v1iMvaxcQSk+", "AsbqW4/cGxtdOSksWRG", 's8kmWQHvW7umeCk2nHC', 'W7reWPmADG', 'a8k8ehv2', "FdrBh1O+DSoH", 'WQpdIbH3sre4ySoWW5m', 'WQuIx1Ckva', 'tCk8WPldSxm', 'dh81WO0bWQtdJSklxhO', 'WRFcPSoVEmkS', 'ECk4WQvbgxfYemoQCG', 'W5f8lCon', 'ECk1qSopWRJcQa', 'W7NcH2lcJXy', 'WQuBueOlqWxcTSkluq', 'pCkDrCoiWRZcMmkulq', 'emkPov1O', 'smk2WPxdQa', 'W7ZcRfWsW6FdUSoP', 'WRJcRSkrW4NdUq', 'amo9bW', 's8kGWQbHW4C', 'kmoBW7ZcJdNcQW', 'pSobW7pcJmoJ', 'WQxcTmkxW54J', 'd1VdJWi', 'WQNdSSoGkSoM', 'W5b4mW', 'lmo4W7afDZyLjCoEBqbGbG', 'W5hcNSkqW5fQW7ddJ8o9mG', 'W4pdPCoHW4VcKf8DWQhdUG', 'W5qHWOxdIWu', "sCk/WOddRN4BWRZcPmoW", 'W6xcOfhcIW8', 'W6BdKSoNDCoa', 'WOxcRSk4W4yl', 'kCknvmov', 'vmk6WOrGW5i', 'CdPmW5lcGxJdVCkeWR7dGG', 'EqJcO8o0WP4', 'hglcNG', "su/dQw8E", 'W7tcH0KNaa', 'ueVcUG', 'WPiHwKe', 'W7XTp8oyWPdcIGzBbmod', 'WRnJW6BcOmok', 'WQ7dVGfJya', "WPXkW6/cR8oz", 'WOxcHa8vnW', 'WPuQqG', 'WQhdQYz0zq', 'W6pcUfeUfW', 'kSo5evuJ', "W7yfWQ/dJIu", 'WRPwW5dcTW', 'W4ddPCoHW4u', "zauzW7/dOq", 'W7ZcI1WOWPO', 'jrFdSCkqe10ooCkFnSoxW5TM', 'WRBcJmknrmoH', 'a8o9oeGj', 'Eszpggq', 'o8oXW6FcH8o3', "WQ/dJ8oznCoK", "weBcNCoMW4nEiSkNWP/cQW", 'raueW6hdGW', 'W5CMWRxdTG0', 'W6v4WQ8SDq', 'fNCMWQeX', "W5RcI8kxW4PjW5ZdG8o+", 'WPlcUq0wiW', 'FWLroMO', 'WQtdImoVaL8', 'cmk5umoZWPy', 'h8oSW4C', 'cSobW7dcKq', 'W75tWOCaweG', 'pSoFW5dcOHW', 'WOVcUmoZDmkK', 'WO3cV8oosCkYkG', 'W6pdRaStCrZdPW', 'W70cWPT0WQW', 'rmkRWOLNW5yTeSkQdJ4', 'WQJcLmkYW58YW43dLtdcQmo3', 'WOGHrKKyqWu', 'WQddICo1a0tdU8k5', 'eCoJW44', 'bCoXgq', 'z2VdQNm4', 'BrKIW7ZdK8kKW7TA', 'WOVdTmoIjmoh', 'qmkmWQHs', 'EZXoW43cPMNdTSkBWQ8', 'B8khlCoFW65UWRVdVbW1', 'WRrPW7dcRSoe', 'WORdQJ3cQSkXmW', 'W5pcOeSUWQFdJIvzwSon', 'W5ldH8oYtCoooW', 'WPZdHZ5U', 'W73cJgubWPVcMG', 'WQBdLJZcRSkX', 'WO1kW6FcH8oL', 'fCkrq8ojWR8', 'BWmUW6hdLq', 'CftcHCoFW7S', 'W58cWR1j', 'e8kjvConWQm', 'W63cGSkAW4So', 'WRe2x1y', 'W7VdPSomr8oq', 'WOhdKZu', 'yh7dQLi4', 'WOVcUJ0sga', 'fvD3W77dQW', 'E8kJWRzfmG', 'FSkLWQHzna', 'kSkkumoTWPO', 'fIec', 'h8kOD8o0WP8', 'CxFcH8oYzsrUhSk0hW', 'cmoUWR8upZX8', 'W5ZcNSkVW7vG', 'a8osW6FcPmou', 'W5dcM8kyW51lW6C', "W5FcQfGYWR/cQW", 'WQ3cS8krW7xdP8oCWO81W4RcRa', 'BSkrF8ozWO3cGCkG', 'WQBdTrHcFG', 'bqBdK1Pn', 'nNbWW4ddKc8', 'WRhcJmkTW4ldO8o0WPi2W7u', 'CdPmW5lcGxJdVCkEWQtdKa', 'W5rFjSoHWRW', 'oNCeWQaqWOJdT8kSCKa', 'uuNdTW', 'jCk1aKPp', 'BbhcU8os', 'W6jlWQiFtW', 'wWGQ', 'fmo3gvu', 'W4tcKXpcS1O', 'gSoKW6xcTYi', 'x8k3WPNdV2a', 'sSkWWO3cUNKBWQJdPCoKWO4', 'wmkDWPJdJ0C', "W4/dGSovW7/cGq", 'WPRcHYW6da', 'r8kdmSoFW7i', 'gSomW70', 'WQ3cGSk3W60BW5VdIZBcJCoQ', 'Ar4NW6pdImk1W6W', 'W4dcJSkbW5ZdLG', 'lCkkrSotWQJcVCkBlWy', 'W7FcP1JcRYS', 'gmk1s8onWQi', 'WOtcT8kQeCo1', 'aCkhow4', 'dKqvErq', 'd8kZuSo6WQ0', 'q8khj8oE', 'WOVcQ8orsa', 'mMtdRYBcUW', 'weZcUSoZW4m', 'BSkJWQDDeW', 'DMpcL8o5W5H4pCkYWRNcHW', 'yeRcQCovrqq', 'AgxdO201', 'CSkMgCoFW6W', 'BsvLW7lcMW', 'aComW7JcHctcRq', 'yJ4FW68u', 'uHSZW74ZW7hcTb1eWRC', 'sLJcPCo3W7S', 'WRyfyx8s', 'c34jqa', 'W4pdSc8awG', 'b8oIWQO', 'WQhcICk9W5SzW5VdLYRcSq', "W7/cHeCwWRW", 'm2xdKG7cQq', 'WRldQXdcQmkP', 'W5xcPxeEfG', 'pmonW67cR8oB', 'k8k7hvedFwi', 'helcPeLm', 'dwmYWO0', 'W6lcHN4cWQhcMZ8', 'W4GyWQPmWRxcPSoB', "BCknoCozW6u9WR/cQeaq", 'W4e4WP7dGG', 'W4xdJdyDxG', 'iNtcPKLc', 'W5LRkSooWQZcLumlmq', 'dSkgnNLq', 'W7BcONK0WRa', 'iKlcOgXu', 'WO3cQ8k8yq', 'W7aCWRNdNsK', 'yrmPW5hdHCkKW6vyoCo4', 'eCoSdW', 'k8oHW7hcUmox', 'E8kLWQPcnq', 'W5xcUSkCW5Xf', 'nSoYW47cH8oI', 'sW4UpJDJWP7dTa', 'W7BdUXCyAG', 'x8k5WPrLW7m', 'WQJdNmohdmoB', 'W6NcNK0Mamod', 'WOxdNdS', 'owhcHwrV', 'kCkSpNj3', 'WPH1W7G', 'W40BWQDv', 'cgGxWPeuWRxdMCkftsm', 'W4mhWQza', 'WOtcJYSMbG', 'WPmHCwaa', 'WOn2W63cTmoQ', 'W7tdVCo4qmosomkJWR7dSMG', 'W5JcOCk1W6ddPW', 'r8kpWQ9bW68', 'uSkxWP3dOh0', "W4RdUmoUW4/cRvCoWQJdVMG", 'WR7cNh1Gq05limozW4W', 'ECk7rSotW7VcSmkzlW', 'xSkmWPXNW5y', 'FGxcVmooWQvTuHbf', 'WOxcRCkQW4i8', 'jwWvWP8V', 'BJqXiHW', 'zeRcPa', 'WOJcLmkv', 'h8oKW4RcP8od', 'WQxdGrBcNmkT', 'WPWRreyCyrtcPSkRrG', 'oSkZuSoVWPG', 'WQ3dLIr0Aq', 's0NdSa', 'bCoiW6lcLWxcT8kewH9k', 'BvJcMSonW4a', 'hhb9W6BdRa', "WRRcISkTW5xdNSo/WOq", 'WRdcVtK4', 'aSoYW6ZcP8oU', 'umk7WOnYW5K', 'W4dcQsVcM1K', 'sSkGWPzvW5u', 'hColWQO3hq', 'WRJcLmkYW4Si', 'z8kGWPigW60aemkV', 'W5tcPeufWQO', 'CtjFbvCLzmoQFG', 'CgtcN8oq', 'BghcLCowW5q', 'Ab4XW63dGSkqW71apCoV', 'BbGTW6O', 'W5FcJrFcUwW', 'vH5RW5hcLW', "z8kMWR5/W5a", 'xriXoG', "W4/dKmo/vSo+omksWQpdVG", 'zXWK', "qCk/WRZdVfq", 'WR7cLCkW', 'hSoSWOKoodT9Aa', 'lJCtW53cH8oX', 'af4xWQKS', 'mu7dJrlcJW', 'AYfmW7hcNW', 'DXqVW6ldImkM', 'W4P2iSo8WOS', 'W6xcP1ytW7BdM8oO', 'WRBdVmoyk8op', 'W4e0WPZdIq', 'W77dV8oZW4tcRG', 'W73cHCkJ', 'W6lcI8kVW5dcV8kLWPRdUCkRfa', 'B3JcJ8oD', 'W4WyWQjoWQG', 'W6tcHCkGW5tdPq', 'WRtdLCoFdSoj', 'oCoSW4xcGCkwB8kpfmoYW6m', 'W7FdUWqarWhdPu5Mpa', 'WRhcHWCBoG', 'gKz4W4JdJINcSmkoWR7dIa', "W4iyWQbsWQ7cP8omW4ZdM8o/", 'W6xcImkIW6DJW5NdNmoolmoF', 'cmozW6hcJZu', 'seFdVW', 'WR7cJmo1wmkw', 'W7hcNSkGW57dPq', 'A8kRWQHFiwW', "WQ/cPcG3dq", 'WRhcNmk8h8oX', 'W47dO8oLW5e', 'sCkljCoE', 'W57cGgGLaG', "W7qeW5/cPSk4qGq", 'WQ7cVmkizSoH', 'o8knoKTz', 'r8k7WPRdVwyw', 'W5pcJ8kn', 'W7DrWP8', 'W4vJWOKGzq', 'mKecWRuh', "WR/cKSk2W4yiW4W", 'jM1M', 'nxXWW4pdLstcSG', 'eu7dLW', 'fSoQfLyuW7uffGfo', "WR5+W5pdRmoQgIDWW5nQ", "rr0GW6aCW47cUaD+WQW", 'W6hcHNW', 'tX9AW5VcPW', 'gLKiudu', 'WPBcV8oAvmkWkHdcRuOG', 'B1FdQ04u', "khzWW5tdIc/cP8kcWO8", 'omkksSosWQK', 'W6xdOb80xG', 'W5NcI8kb', 'zmkSgCo4W7HEWRZcRxW0', 'nCkit8oC', 'W7JcICkHW5u', 'wXBcQCoyWRW', 't8kSWPxdRvarWRxcVa', 'W53cHSkuW40', "p317W7/dJq", "eCk+oLvM", 'WO4XreSnsq3cT8k4', "WPxcTSk1W6/dMa", "buldIW/cJY1gxa", 'W5JdH8oY', 'W75rWP0brq', 'W5ddOGmasa', 'bSoGW4FcNSoFCmka', "WRtcSmkMW7/dKW", 'W6NdQZ0Mtq', 'W7rOpmoAWPG', 'bCoVWRui', 'W47cM8kgW5C', 'W6qoWPrPWQa', 'qt00nYa', 'WPxcSCovBCkM', 'xbDMaM8', 'W4BcSgFcMHu', "ou/dHc3cKW", 'jg3dOZRcSa', 'smkQWQ5xW5q', 'CsjiW5BcKa', 'w2tcMCoyW5u', 'W5jPlSox', "W7/cPCkDW6XM", 'WRJcK8kG', 'W6BcM1NcIZu', 'W5VdRcWDBG', 'xGGH', 'W67dUSo0D8o5', 'bCoJW4pcRby', 'xGyWW7Gk', "Cqy+W60", 'sSkYWP3dVxW', 'rmkUWPhdTa', 'W7ddPqawAG', 'dqy2ouu', 'WPJdUdXiza', "m2m+WOGN", 'WOOXru0', 'Dx7dNLaA', 'WOiCD00b', 'F8kAWR5XW6CygSkodry', 'wfZcJCoMzq', 'fNfRW7xdUW', 'WOxdHIHRraexFG', "hSoRWQGvpIz/AG", 'WOddPJy', "Fv/cGmotqq", 'c8k4A8ooW696WRNcSffr', 'lxXYW4m', 'W7ZdHH06Ba', "dg/cK11GW67cKqm", 'W5qPWOJdQr1TWQSesmkt', 'W7yXWOTmWQa', 'DIfobN0JAmo8Bq', 'ysyvca4', 'WRH5W4BcP8oi', 'aghdKrtcLG', 'Du7cVmorrG9Dka', 'W6CNWRzzWQa', 'kM4osWe', 'W6BdNbmbyG', "mmoLWO8/oW", 'W7BcOfdcLY0', 'CL3cUSokwa', 'WP7cH8kqW5KI', 'W7ZcICkJW5BdO8o9', 'WQmMzfaW', "BSk+WRzFkgvie8oCFG", 'W6NcUKu3d8oRjKBdSSoI', 'WRjqW7tcLSog', 'WRRcGmkTW5m', 'k8o9W57cHqa', 'k13dRJRcNG', 'WQddG8oPe0NdS8kKWR4', 'WQ7cSmkzW44G', 'WQRdOb9kxq', 'd8o5WPuqaa', 'sNFdPgKU', 'jMldPqNcSa', 'xSkcWODuca', 'aMK6WOObWRFdMmkds30', "WRjzW7/cPSo8", 'W7tdTmoyW7tcSG', 'W6RcJK4X', 'WPCTwa', 'W47cNmkAW4TbW6hdLmo4ma', "WONcVCk/qCoI", 'WQddH8oJgea', "qWC2W6WkW6VcVWX/", 'WP3cVmk5cCot', 'yX4TW73dK8k0W7TApCoH', 'dSkknNTxzq', 'W6BdNqaFxG', 'xW4Y', 'WOFdRJ3cRq', "WQ/cJSkYW5OaW5hdKYC", 'W5hcOtFcGvi', 'dCoyrmovWRRcV8kDpKnE', "WRRcNmkLW4/dJCoYWOi", 'FmkSWQBdKNq', 'W7dcL04', 'WPhdPsVcP8kp', "vK/dOMiK", 'WQZdQxmIWQ4', 'hwuoDZVdKwWW', 'DrdcRCox', 'gmkaySo0WQm', 'WRpcHmo6DSk3', 'f8oQa1G', 'reRdT2im', 'rSkdm8osW7a', 'WRRdVIBcPCk1', 'W5lcVNKglW', 'dMVcGKDS', 'o8onW4lcG8oq', 'WOJdLmoAeKC', "W45WjCoEWP/cHa", 'WP3dOConjfK', "WP0+y0aiuYpdVmkUqa", 's8kmWQHvW7umeq', 'W74dWO7dGIu', 'AGxcPmotWQ5M', 'W5RdQZCFFW', 'W4BcTXFcKa', 'WQnAW5pcP8o7', 'h2NcNKjV', 'WP9sW5FcM8oQ', 'W7RcH3G', 'WOhcIWfWgCkNeW', 'W5lcVrC', 'WOFdRmo3aeq', 'stChW5FdIG', "WRxcG8k/W4qcW4K", 'WOtcKCklm8oM', 'y1JcSCokEq', 'WPxcQCkpW4pdGa', 'W7lcM2CteG', 'WQ3cQti4jq', 'pSoTW7RcIa7cO8kgzYHs', 'FYvjf2q', 'FSkLWQLBj2XZfW', 'B3NcG8okra', 'W6FcGCkNW4Hf', 'WPrGW43cSSoW', 'BWP6j2S', "W4/cNSkIW4BdPa", 'd8ogW7xcOJy', 'CtbmW4BcGxu', 'AWhcQCokWQzM', 'W7BdLGapBa', 'WP7dLZ0', 'WQZcTCkycSoS', 'y8kopmoiW6K', "bSolW7VcHI/cRq", 'WP3cSComva', "WO/cJ8ofv8kI", 'WOldQWHHFa', 'W77dQay9Bq', 'qCoFAcW', 'WQVdHHJcK8kz', 'W5GSWPq', 'pSkkrSoe', 'ECkVWQzdiuDZdCob', 'uYDmhKO', 'W77cQfJcJbm', 'WQbaW4RcSmoSgWjmW5K', 'zI7cJmoVWQO', 'WQJcH8kHW4mpW5hdNq', 'h8oaW6VcOaO', 'W5hcMCk5W57dP8o5W5FcSa', 'AGmIW7NdUmkIW6Xaa8oQ', 't8kSWPxdRu0nWRtcSCoiWOq', 'zsfxhhW', 'WQVdLmo6hvu', 'WOJdQCo8amoFxHq', "zH4HW7/dGq", 'd2mirYldHgK7', 'WQldGSoujmoR', 'WOFdTmoVc8oi', 'W5hdLColW7BcNW', 'nwW8FaW', 'EsvqfxW5', 'EudcVW', 'WQBcICk6W4y', 'W43cINLwW4ldLCom', 'mCkDs8oz', 'kCkSd3Ll', 'WPBdPtpcNSkN', 'W47cLWpcUwO', 'WRhcISkTW5i', 'umkaWOnVpa', 'WRC3yKm2', 'WQJcRsy0', 'wvxcSmoAW5m', 'CG4IW60Q', 'c2CawHC', 'q0NdTwKiW4VdRCktW6W6', 'hM3cSuj0', "W4i+WORdNXK", 'fMiu', 'WPNdGmobf8ol', 'aKmBrc8', 'WRtcKmkcamoLAvRdPeSR', 'B8kFWPpdVha', 'ECk4WQvbgxfYemoQEq', "W7ZcHCkJW5tdN8oWW5/cRSoVua", 'W6RcOfWsW4FdUSoQqCou', 'WR1sW4RcTSoOfG4', 'W7VcP1JcUr0', 'WRqfFLei', "W43cTr/cUKC", 'W6eeWRJdOc4', 'nImoetGYmq', 'lmooW7BdGYJcVmkcsGa', 'W6RcNva4W6m', "WOddOtxcMCkTiCo2W6/cRHu", 'cmo2WRW', 'W7D1W67cKCkPvuvXW79e', "bLa8WPG/", 'v17cSSogW4i', 'dMVcM0HJ', "vGH/ieK", 'ieFdIbdcUa', 'd8kkkN9Ayd8e', 'gLL8WRXzWQS', "W5LRkSooWQZcKKmhgSo/", 'WOJdMIbIEa', 'yX4TW73dK8k0W7ThkmoT', 'yX8LW6FdGmk5W70', 'WP3dGcPoyq', 'W5ZdJYnxmbFdRL9uiW', 'fSo3W47cPmoZ', "mfz/W6BdPa", "W4GBWQfdWRVcRSo/W43dISoV", 'm1jAW4xdIG', 'WO92W4FcJCoi', 'W5JdHCo6Amof', 'uKldKuKN', 'WPVcSCk9tmobWPhcLG', 'j29MW5tdTq', 'uuFdPwyi', "lCknvCotWQ/cUmkxpHe", 'cfqqWO87', 'W73cJCk1W5NdPW', 'nSkwuW', 'fMquwYldLxCZWOhcVW', 'qSopmxjvlq', 'W77cMeuPlG', 'W5hcK3qWpq', 'W5BcUu0UWPK', 'WOGRqvy', 'aCoBW6pcUJ8', 'W7xcPeC0W4a', 'WQJcQ8orsCkW', 'aSoTbeK', "kNDDW4/dNstcSSkp", 'WQRcICk9W5W', 'WQddH8oJ', 'WQtcUISNf8kjnCk0', "ysvqawe+BW", 'WQpcHmotsSkI', 'BCk9WOf8hG', 'WR3cISkCe8oV', 'WPtcSmow', 'tZezW5ai', 'nh45WROn', 'WPhcU8kHBSouWPO', "aue+Ftu", 'W68EWRBdIq8', 'y2ldR3SS', 'r1FcVCoIW5y', 'W43dLSoXW6xcMG', 'WPRdKYfVBq4', "WReTwKLzuahcOmk+xa", 'EdThW4ZcJa', 'o8oCduqk', 'lmkdgKPL', 'xWJcGmoPWQy', "WQtcUISNcSkviCk/DmoI", 'W4NcImkoW4tdNa', 'BZPvW5i', 'W5tdMCoyW6VcTW', 'W5pdOSoZ', 'WOhcMmkil8o1W54Ca8o9', 'q0tcHCo3ta', 'W73cG8kJW4ldO8oWW4tcP8oMsq', 'CCkRWR1tna', 'WQRcUaiMpG', 'W7hcPM0dlq', 'WPJdNr5YEaKuFa', 'W7xcS8kOW4NdOW', 'W4VdJ8oTW5VcOa', 'WRRdLt3cISkR', 'W5tdVSoN', 'W7VcJf4', 'sttcVmo5WQW', 'WRFdIdJcISk3mSoaW53cGtG', "W7/cJuBcQdmcWP5Nrq", 'WOldRXRcKc92WQu', 'fgqBWRa5', 'WRdcHmk0W4hcTW', 'gSo5g0GSW6K', "W4FcTG/cQ3mGWQ15", 'W7hcNSkEW5pdGG', "WO/dNSo4nLy", 'WOpdNdK', 'WQNcImoGqSkK', 'ruFcSSoYW5W', 'zedcUSor', 'rGiSjIK', "h3KBxWNdG2aQWR/cRW", 'WP7cSSkQAmos', 'fh1OW43dNq', 'DcfhW4W', 'W7jxWOKCwa', 'W5tcLXtcPvW', 'r8kOWPW', 'W6xcNh8o', 'qSkQWPhdTW', 'WPRdQCoDmComvbiC', 'W53cGCkBW4XbW7NdIa', 'fCkdceLl', 'BSk5WPpcUNyBWRpcSmoW', 'W6BdPZWDAa', 'fhSFrHldLwCRWOC', 'eCo9gvuUW7u', 'W5tdLmoyW7dcJG', 'WPlcQsyJmmkp', 'vGSvW6ddLG', 'W6xdGIevBG', 'W7LBWPeyzW', 'aNz6WOFdKsxcSCkp', 'dfVdGG0', 'EwpcImoQW5XVdSkl', 'E8k7jCorW44', "W6/dVSoNW4BcSq", 'WOJcSmkwy8oq', 'rKFdT34yW7JdSmkjW6O', 'n0bCW6hdRW', 'WRjDW5RcQ8oNeG', 'W6xcGSkPW5tdSCo8W5JcRmoJ', 'W6pcLSkQW7BdKW', 'k8kxumoo', "W7BcIu/cQsyE", 'WQBcOsyKmmku', 'bxq1WO4QWRBdImkuygq', 'W7n1mSoCWRu', 'W5dcHwOTWPW', "W7/cOxqZW6S", 'f8o9hLek', 'lNurWRO6', 'W50yWRTpWR4', 'WOn4W4RcQCoS', 'WOBcR8kmW6pdKW', 'W7ldM8oIW5hcMG', 'WPhcT8kHBmot', 'vCkhWPjbbW', 'yIHxbM0', 'WRpcQ8koBSoL', 'u8kmWOzcma', "W5m/WO3dGq4", 'B8k4dSoWW6m', "W6/cU10qWPG", 'ECoytCojWQ7cO8kuEW', 'WQdcG8k9W48zW5y', 'W5zpkCo8WOe', 'o8oIW7dcOI8', 'zsvekNO', 'hCo2aW', 'vwlcPCoCFW', 'W7dcJKe0cSoF', 'W5tdSSoS', 'WPNdGCoBn8oX', "W4/cSuCVka", 'WPddPZdcTa', 'AvZdS0eD', 'W6ZcMJpcLMqJWRvvC30', 'W77cRei', 'ah7dGJRcPa', 'WRVdUHrHCW', 'W5pcReVcVIG', 'e8kSDmo6WOlcQmkcdaup', 'W5lcSrJcN0S', 't8kSWPxdRu0nWRtcSCoiWOm', 'CCkVWQPrmMO', 'iwTXW5FdVYVcTSkcWPRdJW', 'amoQW57cNG', 'WPaHquav', 'W7tcNSkSW4BdImoHW5pcSCoZ', 'W6zXWO4ExG', 'W5WMWQXOWP8', 'W6vxWOC', 'WPuDu04a', 'BgldKgmx', 'emoKW53cMCoAESkkaa', 'c3xcK1HsW7lcGHjkfa', 'BSkgWP7dJeO', 'W5rWWPe7BG', 'g8oUWPajcq', 'W7jaWOOEyfuykffe', "WRtcQtPWiCkjCCk+DSo/", 'a8kdkhrc', 's8kBWOPMiW', 'W7ScWRXpW7RcTSoxW4ZdN8o1', 'rYugW4pdTa', 'BIvTW7JcRq', 'E8kEWQn9dq', 'WRbsW5pcPW', 'mmk4dx1Z', 'WPlcH8kxW7ldJG', 'W7dcSeGeWRi', 'WQFcKmkWW44', 'C2tcKSoqW7LRdSkcWP3cQG', 'e0BdOYJcQW', 'W5JdMJmDDq', 'WOFdK8ogWPW', 'ySk5WR7dMum', "WR/cSCkWd8oQ", 'W590lSoxWOBcJ0K', 'qetdSM1e', 'wWGQW6eC', 'W5GIWOldNX9TWRCyDa', 'W5KeWOXYWRq', 'WORdTmoVmSoHtHKpW5Sx', 'WPVcSCkHFq', 'W7hcGmk9W5NdTG', 'CNtcMSoCW5zMeW', 'nLDgW7ddKG', 'zmklh8oiW4e', 'f24utYldMa', 'CGSNW60E', 'wbWrW4eJ', 'W6hcNh8', "W7/cGSk5", 'CWH8g2i', 'tSkcWQPpW6yh', "E8k/WQPvmMT4cG", 'W6lcL1VcSW', 'WPSNFL0Q', "WR/dLt5KzG", "tmk7WOddJMaFWR/cTSoXWOO", "sf/dOwmkW6ldRq", "WOFcH8krW5tdN8owWOWfW5/cUG", 'wCkhWRBdNee', 'o8ouWQ0kdW', 'WOr1W5JcLf89WRqPsSkmomk3', 'iSoFW63cP8oI', 'wqaXW6W', 'gmkceLTR', 'W5iIWOJdGqrSWQa', 'WQpcVdi', 'uSomhLmUW6m', 'FXdcSa', 'g2lcNfXKW67cIq', 'smkFWP10da', 'W6NcGSkRW5VdJq', 'WR7dOsLCwq', 'khbW', 'W6hcHfiNamoWgxNdGCoJ', 'WPBdRmoyimop', 'q8k3WOddUh0gWRtcTG', 'W63cHMSlmq', 'WPFcSCof', 'BCktWOrxW7i', 'sSoUWR8up3i', 'pCkkcSoAWQVcPmkipHaB', 'WQNcOCkvW5Ob', 'WOJdTJLmrG', 'wrK3W6C', 'WOJcUCkvaCon', 'WOhdLHpcGmkn', 'FSkRWQPaj3e', 'aKFdJGtcSW', 'W4q2WRP5WRm', 'WPVdK8o4m8oe', 'rSkdmW', 'lCkDsCooWRlcVSku', 'WOBcLCkAkq', 'WP7dRIK', 'W5ZdQCokuCoR', "iwT/W5ddOZNcSmkEWQddIG", 'W7dcJK8Eaa', 'W7PtWPWorW', 'WQBdIInbqq', "zh/cOSoKsa", 'nf3dPIlcJq', 'W6lcMhevbG', 'WOJcV8kciCoL', "n8k/d2X3", 'W4yOWOa', 'W5GOWP7dJXjLWQOu', 'W53dS8oVz8opWOdcKX7dHa', 'W4FcIMutW6y', 'AJ82W4tdLW', 'W5VdL8oTsq', 'lJa3W7RdHSkYW6i', 'mK8atrC', 'WRRcHmk7', 'vaGMW70aW6FcSb0', 'WPJcTSoduSk7jq7cOq', 'W43cI8kz', 'WRtdISoIlmot', 'W5RcNmkuW4HXW6hdImoWiq', "EsxcUSo+WO0", 'k8oRWPeloW', 'nCkkowXmy3acg1q', 'WQNcPI41lCkPnW', 'W73cVSk0W7De', 'W4xcI0alWRi', 'WQzsW5ZcRCozlabnW4uQ', 'CIvhW48', 'W7fHlmoOWPG', 'bmknpNDc', 'ySkUbCoJW5e', 'WP1NW7FcOmon', 'DXuKnIK', 'W5HYo8otWRK', "W5/dKCo0W5VcIG", 'e8o0hKyL', 'jSoQW5dcMYK', "W6/cVuO", 'e2ibWP06', 'WQddJ8o1', 'qXiSasy', 'AftcS8osW7K', 'sqiKoWTJWQ3dSSkzWOm', "FY/cVCoOWOO", 'W5dcO3KJha', 'W4JdVSoJW5K', 'WOZcSaCila', 'WQJcLmkYW58YW43dGdBcNSoI', 'W6ddQ8oPBSoo', 'WRbwW4O', 'W7NcH0BcRWS', 'WP7cTSkUEW', 'W7NcUKOMW4O', 'iSo0fK8LW6isvrPz', 'b07dHrBcUGflxG', 'CNtcNCobW4vVbmkoWPBcTG', 'DvRcRG', 'W6JcU1mbW5hdOmoRxmoy', 'ahTkW7pdMa', 'gCoXg00', 'WRvMW63cICoO', 'WQ7cQ8okCSkX', 'W5GJWORdHqXGWRe', 'gmoSWQ0', 'WOxdNcLJCI8C', 'W7tcICkRW5JdUCoWW6BcU8oOva', 'WQDxW7pcLCob', 'hcKwgfCXWRRdKSoyW4m', 'ggqwrYq', 'rmkUWPhdTfyBWRpcSmoW', 'WPNdSmo3bSoq', 'mSomWRqzjW', 'WORdIZ5Crq', 'W5TcWPi9xG', 'mmoHWQaObq', 'xGiU', 'WPNdP8o9hCo8', 'W77cNMmkka', 'fmknFSo8WR8', 'DdSqW4VdSmkhW5nGcSoy', 'WPFcT8ourCkriqhcSui', 'W4hdUmoUW4G', "W7/cPvSvW6S", 'cgGWWPWnWORdIW', 'W7NcGgidWRVcIZHFqmoE', 'cCoRWRSipIDHyq', 'WQddICo1a0tdU8k5WQNdUWe', 'WPBcGCk3W7O5', 'wSkjWQjIpLjBiSoYsa', 'W5xcVCkBW6xdJW', 'ggOuxJFdGW', 'rGWOW5eE', 'vWuIW6en', 'EtDubw0', 'vKFcV8ohta', 'Ch3cMCoBW7vRbCkqWPi', 'W5pcTwVcRJm', 'W5xcR8kQW4FdRW', 'W4ZcUqpcNg4', 'y0BcPCoawa', 'E8kJWQHAfxzUcmoq', 'W4BdUCo5WPZcSLCfW6BdRg4', 'W7BcO8kJW4HV', 'A2lcJa', 'W7VcKuhcIae', 'g8oXW4ZcGa', 'WOpdPCoeimot', 'WPiIugqv', 'kgJdPGBcKq', 'WOzkW4FcI8oE', 'd8oXWRyBmW', 'WQpcN8k9W5a1', 'vqe3W6GyW5dcVH5O', 'WQhdG8o9ba', "WRNcMCogAmk+", 'W6RcSrFcMg0', 'WOFcMIawaCkJhCketCoC', "mhxcNvH+", 'bmoiW6K', 'WP3dRqlcV8kP', 'E8kCWOldIee', 'bCkknMXcFZuoaa', 'WRatvfe6', 'W6BcKxNcNX0', "W7/cG1dcSZC", 'W4ydWQTm', 'WQrwW5i', 'BsbrW4K', 'W7VcLK3cTG', 'vCk0WO9LW5K', 'FcilW5NdGa', 'W6pcH1VcTZ8', "nmkxsCooWQ/cTmkimXm", 'WOFdGZxcImkN', 'bSozW7tcJq', 'ytKHW4y5', "WQ/cSSonDSk2eblcHuqf", 'bSoMWRqDpJO', 'W5RcNmkuW4HXW6BdImo8cSoM', 'z1RcU8on', 'cSobW7dcKtJcRmksuq', 'e8oqWRWnoG', 'eCoUWONdJG', 'WP0HqG', 'W4yhWQFdTrm', 'W6hcQeOEW74', 'CmkSWRjbfW', 'i8oOpwm8', 'gwOoxdRdLwe4', 'yXa7', 'mNvoW7ldLa', 'W7JcHMivWOFcIYnqwa', 'uaa8W60LW6ZcTqXJ', 'AMddGq', 'lCoIWRCFAJz2BCo3WRS', 'FxJcMG', 'WQtcJ8kRtSol', 'eCoTW4ZcJmoctCkbeCo1', 'W5LXbSo1WOu', "rCklWQDuW4igb8k+fHS", 'W4ZdUWOaAW', 'CJ1oW7VcUa', 'Ec5yg285Dq', 'WQCkW59rcXmmbubtW6W3', 'qvtdPN0YW7NdVmktW5iX', 'E0RcPSocxGi', "WPBcSComu8kHirhcSfW+", "bv/cUebR", 'smkela', 'W7VcV0S1W6a', 'WOFdQmoLcCoxsYySW4GV', 'wZvvcg4', 'W5pdIZtcOmk7kSoPW68', 'W5dcQWlcJuS', 'W79gWO4e', 'lSoHW5ZcLYe', 'W5VcKxyCW60', 'WRVdVSojaLy', 'hmkrvCo4WPK', "W4/cVXFcHK0", 'hvxcL05PW67cKHi', 'W69Hm8oyWP0', 'W6BcH1aSba', 'WRtcM8k0l8oG', 'CYCxW4qLW4FcGG', 'rqa1', 'xHmWoWTHWQldT8kFWPC', 'hei1rq8', 'WQhcT8kqm8ol', 'WRNcJCouACkN', 'W73cJCk1W4xdSSo7W4xcOmoOsG', 'BtfKW7JcUW', 'ECkRWQLXnW', 'WOldUsrvxG', "s8kgWRrfW7Gedmk/", 'W4FdH8oWrSovja', 'cg4w', 'jhv3W4ddKG', 'kSkmqSotWR7cOW', 'bgeZWOO', 'W4lcSbRcHG', 'W6ldJCo0Dmoi', 'waawW4JdQG', 'b8oSWRqjpJDHz8oY', 'BSk6WQHFmG', 'lxlcGuP7', 'W6pcGmkKW5ldSG', 'WQ3cOYeHhW', 'WQxcHdKjgG', 'a8o3WR8x', 'xq1gi3G', 'W5pdM8oKW7lcOa', 'WPxdPmowage', 'imknn1br', "WRddJmk+W53dUmoHW4xdQq", 'dMGG', 'ggmFssldOMOPWPm', 'dh8YWPasWQ3dMq', 'WO5yW7BcO8oU', 'W53dUSoBDCo5', 'DwlcLCoB', 'mMO7WO1v', 'WRhdTmoHmSon', 'WQBcP8kOn8oH', 'W57dRCoXCmoJ', 'h1HtW4ddJG', 'jehcKuXp', 'WOpdUbtcJmkg', 'pSomW4BcScq', 'eCoWfLmMW6Gwea', 'qSkBeCoyW5u', 'WQ3cLCkhW63dUW', 'g8kanK5s', 'rmkpWPC', 'WQlcRmkGFSot', 'WRKEzuKF', "W6/cRfSA", 'bSkkoMLesdqjaa', 'WQNcNSkWW40DW4RdJc3cRW', 'qLtdPNm', "f8kWymo/WRy", 'l8kQfKK', 'WOHSW5JcO8o6atfDW4LK', 'WQtcS8kgW6S1', 'qmk3WPJdTMe', 'WPxcImkimW', 'wIuUW43dQa', 'WOpdP8o2', 'g8oxWRGGba', 'WPFdGSo4pN4', 'aCo0WRuajW', 'W6JdTmoWu8oI', 'WOFcRbKjda', 'W73cVfKLWQS', 'gSohW7xcVchcVmkosGPQ', 'qSkDWRpdLvC', 'tc9Sbwm', 'W4tdUmoSW5pcQW', 'c8oyW7ZdMa7cVCk5Cr1p', 'bmkakN9gtcqufvK', 'hCoiW6hdGZJcTSoataXS', 'W4tcKhuVWQq', 'EKdcPSowxG9omCkTja', 'gCoZW6xcSau', 'W6pcUvCyW4RdSCoSuCol', 'jCoUW5NcMZS', 'dfVdGG3cMs1hxq0', 'hhOordq', 'WRRdJbxcLSk2', 'amoAW7JcSaO', 'W6hcGKWWamod', "vaFcO8o+WR0", 'lK1mW6VdJa', "W6dcMCk+W5K", 'WQpdR8obhxe', 'WP3cJCofW5WEW7BcNq', 'vCkrWRf2W4a', 'k3HZW4i', 'nNv3W4tdMq', 'W5PxWOKKtW', 'hNlcL1X5W6JcIaG', 'fmkTe1zL', 'xG4L', 'WQhcJ8k9', 'WORdO8oSmmozAa8EW7y', 'W43cH1etW6e', 'EsDdW5BcQM7dQSkdWPxdIW', 'buxcPwrD', 'bCopW5dcKY8', 'nCkzrq', 'W57dKWCBvbpdJwH9hq', 'lCodW5xcQcO', 'C2ZcHCoqW4m', 'WQVdVHVcJCkQ', 'amobnwCy', 'WO7cVmoTACkz', 'eM8Z', 'mSk0ySoWWRW', 'BJXmW5tcUG', 'WRTwW5dcPCo9hq', 'WRlcHmkMW6ZdVa', 'WQtdLYXQkHaBACojW7S', 'WOBcPmk0W6JdPW', 'uCkOd8oVW6m', 'pSoXW5xcIs8', 'WPHXW6VcO8oO', 'hSoGW4FcISocDW', 'h8k7qCoRWP0', "W5KwWQjuWR/cSq", "WPT/W6RcSSoZ", 'W5tcPMSuWOC', 'W6eBWRDeWPW', 'fwZcIgvp', 'DN7cUmoqW5n7amkQWOxcUW', 'W5ZcI0xcMte', 'tr7cRSo9WPK', 'kSoaW5dcOSo3', 'W7VcVLOuWPi', "WP/cQ8kP", 'WOBcVr0Yia', 'WPddPZdcTmk9jCo0W77cRbm', 'vr0Q', 'W4JdJCoWr8oik8kcWQNdQ34', 'W6VcRuqtW4W', 'FglcKmoAW4m', 'f3uwWQOB', 'W57dGCopW77cMW', 'W4FcTbtcM2W', 'W5aJWPG', 'WORcS8kxpSoU', 'iMldKHhcKW', 'W7BcNh45WPNcIYzDra', 'WPRcSCkRzmopWPBcMW', 'WRPvW4JcTCoy', 'W5n4jSoC', 'W4BcS0qHcCofdfVdMSoY', "Eh/cNCom", 'WOJcKCkUsmo4', 'afldSXVcUG', 'xSknWRFdT3m', 'o33dQs7cNG', "W6/cOvmeW6pdU8o4qq", 'fwmZWR4B', 'z8kNWP5FeW', 'Bqu7', 'WOBcTCkMW44J', 'WPWRwfe', 'WQRcICk9W5WE', "qGa/W6WE", 'pmovW7RcPmop', 'WR7cHmkcW4JdOq', 'sNxcKCo2W4K', 'WRJcICkJ', 'WOtcKCkspmoP', 'WQtcRmkSuCoe', 'WQddH8oR', 'rexdS28j', 'aMCKWO0aWRFdHmkowa', 'W4BcQHRcJq', 'qIDnW5BcHG', 'WQ7cH8kNW5WbW5VdHdy', 'pCkhWQvozKPh', 'WQxcISk2W4JdJG', "W6/cLZtcM08", 'WP3dJCollCoq', 'W55XkSol', 'E2JcNSoaW5y', 'AYnfW6tcSG', 'oCo3W57cR8o7', 'sSkAjCoqW7i', 'qWVdRZpdVq', 'BcWigsy', 'uCkgWPbgpa', "WOhcVmkXW4qHW5/dQbdcHCoe", 'n24yzsy', 'ztLgWOFdNYBcUSkzWPO', 'wXGeW4FdJW', 'W7pcJKhcVcK', 'WPCRwfynrrlcUSk6', "W7xdRSo3W5/cQG", 'W7hcRCkAW5nM', 'W73cKK3cTq', 'W4pcSrxcKa', 'W6RcRvS5W4K', 'W7hcTmkoW6hdJG', 'WRBcICkQW4hdHa', 'uZLBW4tcSW', "vK/dVw8", 'W6lcV8kfW6BdSa', 'WQBdKaXxzq', 'vaa8W60', 'WOBdMZtcRSky', 'WOddGIvN', 'W7ZcKfyeWQy', 'wepcL8ouW6C', 'ueJdO28lW6pdT8kcW6K', 'pmoxoe4A', 'W6pcHCkJW5BdU8oW', 'WRPwW4ZcOCoWgaPC', 'WOdcRmklW63dSG', 'WQJdVGhcN8k7cCoaW4BcGdm', 'WOZdS8oO', 'FLVcRCoi', 'rr0GW6aCW5BcPbT1', 'W43cV2KMiq', 'WP7cTSkUE8ouWOFcJbe', "W7BcUmkVW7/dUG", 'yILAbMa', 'W6XChSouWRG', "zwT7W5FdMsVcOCodW5/cNa", 'CqxcSmosWRK', 'lvddU8kpW7SXcJ1uamkZW5dcJq', 'W43dI8oYtCoZkCkuWQ8', 'W4VdSSoUW5VcRvO', 'W7FcNLmS', 'cgRcN3z8', 'bSoXgKq5', 'yJqaW5FdQW', 'cmkVumonWP4', 'WRhcK8ovCCk6', 'yqiQW7O1', 'W6RcVfWvW7RdVCoHsG', "B2/cK8oeW5G", 'kutdKGlcPa', 'WQtcM8kC', 'DCkVWQHs', "x8kUbmo/W4O", 'WO7cRCkFlCo3', 'WR9sW40', 'W6dcJHOdDCogCCkHCSoX', "p1pcQCoEW7G/xG", 'gSo2WQKs', "WQpdLX/dRhDqW55+t8oLW67dI3u", 'WPlcImkRW5tdUa', 'WQNcU8khFmoN', 'WPxcICo0uSk0', 'WQZdISoYf14', 'WRdcKCkuW6hdUW', "iwT/W5ddOZNcSmkEWQddMG", 'WOhdKZvUEG', 'b2BcNKzQW68', 'WPZcQmk2W7tdVG', 'bmoiW6NcIZW', 'W6xcU2RcSHu', 'xWVcP8oEWR0', 'WP7cSmohtCkSza', 'WPtcSImhia', 'W7tdKmoXvSos', 'W54OWQBdUdO', 'egJdJbBcRG', 'W6ydWPrYWPm', "W5lcRG/cNvK", 'iSobW7VcI8oh', 'imo9W5tcRMZcQCor', 'W7JcHuaOWRy', 'W4WyWQbsWRxcRSoB', 'WQ7dImo1gMa', "Ec9qaxW0C8o/A8kq", 'WO3cN8kGW7aK', 'W5VcQSkxW57dOa', 'WPFcU8oQu8ku', "WQRdICo/hv/dUSkU", 'W6VcJK4JeCoz', 'rSkXWPRdQwyBWQpcTSoJWOq', 'd34irG', "cglcHNT/W6dcIrvZdq", "W4flWQe/tq", "qaG+W6alW6W", 'W6JcRchcP1C', 'W7ZdMSoPDCoh', 'emoPW4dcMq', 'WQddPmoIcLi', 'zbbBW7lcGq', "W4/cHLODeG", 'aSoaW73cJW', 'W4tcOMCqWQu', "c8oaW7/cHW", "W6/cVu8Zfa", 'e8ovWQanda', 'WRBcKa8edq', 'WQZcUmkaFCoh', 'W6hcKvSFW7q', 'CcdcOmoWWOS', 'WO3cLmkpoCoOW4Kafq', 'WOVdNIjKAWW7D8onW6O', 'sWGWmqbhWONdTmkxWPa', 'bNpcL0i', 'x8kRWOBdTgyxWRZcOmoL', 'e8oPW4dcISoy', 'W73cG8kJW4ldO8oWW4tcUSoZrq', "WRnbW5/cTCowbGbmW65M", "eCo1W5/cOmor", 'WPCRwfynrri', 'dCoSWR4xjtz2', 'wSkVWQBdSgG', 'yZWlW4SM', "WPL/W5BcRCoL", 'WRRdKsLPtW', 'bxq1WO4QWRBdImkuyhq', 'pMyswGq', 'WPZdOZ7cTa', 'kSkjumo0WPq', 'WQxdSSoGfSoU', 'W7VdQaKEFXW', "le/cS31mWQhcQZa1", 'W7DrpmoRWPC', 'WOFdVtdcQmkTkmo7W77cQa', 'W5dcI8kyW5zlW6y', 'WP4suvao', 'vWDYkh4', 'CqxcSa', 'bCkDowu', 'dSksuSolWR8', 'hCoNW53cPd0', 'CdrAW4NcHq', 'zLJcPSomW6zkdmkoWRFcPa', 'fgKqttxdHa', 'h2OxBYC', 'pfTCW4ddHa', 'W6lcOvdcOru', 'WOpdP8o2lCoo', 'WQlcICkmW4tdMW', 'W6xcVb3cNLe', 'W6dcRfWrW7RdVa', 'W6tcG0e2', 'smkwmW', 'ig7cPL1m', 'aCkonMPcFG', 'WPBcQCk1W4i0', 'gCo0WOG0ga', "W7/cLSkWW7zw", "WO/dH8oVbfZdU8kpWR/dRru", 'WRBcGCkMW4a', 'pmoHW4FcICoq', 'W4RdTmokW5NcTa', 'W7pcHMisWOa', 'ytvmhhW4Bmo3Ea', 'WRNdRmo7m8oA', 'bglcI31IW7BcLa', 'WOj2W7BcP8oV', 'hSkYDmosWQS', 'CuFdGe4B', 'FGqWW6y', "W7/cPmkSW5vD", 'WQlcQt4KoCkdnCkR', 'WORdO8oSmmoz', 'teJdOwu', 'pCkDrCoiWRW', 'WQ3cNmksaSoK', 'DLRcVmokwGzDjq', 'xsqWW5JdSG', 'W7qeWPNdNIu', 'WQbaW5JcSCo7', 'nmkDsCoi', 'W4RcI8kBW4XhW7RdGW', 'W7xcRCktW5f6', 'jSoVW5C', 'W5OiC2mTdZlcM8knBq', "W4BdGSoVW6/cLW", 'W6NcHSkAW4XlWRxdMCo9j8oG', 'W5OJWPG', 'W4iwWRzjWQO', 'W6lcHCkQW5NdOW', 'WPRcRmkRW4hdMG', 'FdCfiXa', 't0NdRMq', 'WOxcTCkQxmok', "AGmIW7NdPCk+W61n", 'W6BdL8o3WPxcM8kUW4qsW6BcNSonjdy', 'j8kxlKzv', 's8kmWQHvW7umeCkZjW', 'WOJcHSofASkF', 'W4hcJ2GuW4S', 'W6RcGeS1lW', 'WPZdUtBcH8kP', "WR/cKmkNW4eQ", 'o1pdIq3cNG', 'EXWHW4SK', 'W4NdJSo3vq', 'WRRcQG00aq', 'W7rLWR8kEa', 'smk1W5tcUq', 'WO3cJIq1jSkppmoJzmoW', 'DZGkW6RdLq', 'zahcISoTWQq', "hSo9guy/W68", 'fSkaka', 'W6VcILKHfW', 'vfFdNLS3W6JdGCk6', "rw/cHSoNW74", 'nhldIcRcNG', 'xGKMdqHJWPpdTCkBWPW', 'W5pcVc7cKfe', "WPZcSSk/yCob", 'WR7dJColemoA', 'yxRcVSoetG', 'p2VcOeTd', 'W57dLSoes8op', 'b2lcNKS', 'WRRdSCo3jxm', 'W7pcHmkSW4pdUCo0W5VcRa', 'eCkIleHn', 'ruhcKmoCW5W', 'u8k3WQnoW4C', "h3KBxWNdG2aQWR/cPG", 'WPddOd3cQCkS', 'W4NcQfOxW5C', 'supdQw0zW6i', 'W4tcGeyZnq', 'rCkjWQldQhm', 'BXtcUSoLWQfTxGnw', 'wtytW4BdJG', 'tZK3W6qw', 'W5xcO23cVqu', 'd8kanM9xAcinfui', 'WRNcHmkCW6eH', 'WOVcR8kkyCo5', 'BZH0W7lcKG', 'nSoPW5ZcNmoY', 'W4pcM0Sxaa', 'W7NdPGWz', 'AYjVW6FcSW', "WPdcV8k/", 'W5JdLmoQsmoM', 'WQxdH8o3gvFdSa', "WP3dMZ/cGCkt", "EN/cImom", "W6u+WOrUWR8", 'EtbweW', 'W4fDWQi9Aa', 'WR5IW7NcQ8oy', 'Fdn6f2OKzSoDESkn', 'WRtcJCkIW5q', 'WPldNSoBWOOBWRW', 'xGW7W64eW7y', 'WOxcJmkDW7eb', 'WQtcKSklW44P', 'WQBcVsqZiCkppSkJ', "seNdQxKzW6/dQ8kjW6W0", 'oglcK19IW68', 'WRZcP8k8uCoP', 'WRPsW4y', 'W4r8j8ovWPZcLG', 'WOK2qxu4', 'W5tdO8oYW5xcT1uJWRhdTMe', 'WPlcNCoOr8k5', 'W6epWOhdU0vlWRuruCk1', 'smkkkSoiW61YWQJcUq', 'dmoSWQGzlXnNE8oJWR8', 'W5pcI8khW5XxW7JdGSoS', 'lmkwq8oyWQNcPCkBnWy', 'oSkzv8ojWQ7cO8ktnqq', 'Fb0Kftu', 'W7FcTSktW6FdUmoF', 'm0WSWOmN', 'q23dLMqf', 'W74eWPVdOWq', 'jL3dSI3cRG', 'fCkhnhLr', 'chS1Cq4', 'zepcOCogtW', 'CCkJWRDc', "WRrBW5/cSmoKgHnD", 'BaJcSSoiWOG', 'ztvngG', 'imonWO4WdqbbAColWPi', 'W4NcH8kfW5ddSa', 'W40vWQ3dHbm', 'W7ldICowqmog', 'fSo9fvqSW44oaW', 'W5dcP8kVW5jV', 'qSkpla', 'W63cNmkVW6vA', 'imoYWQGkmG', 'c3xcK1HsW7lcGHjkba', 'hCoIWQKIca', 'Fr3cG8oOWRm', 'h8oKW5e', 'WQlcI8kAW4ZdMG', "chyMWPamWQ/dQ8kVwv8", 'W4dcUwldS8oMDCkRW4tcMbtcMYhcJa', 'W7hcM20rWQZcNtrmD8oc', 'FWXBW7pcJa', 'wJLKh1S', 'W7jwjCoZWOy', 'WRBdOanQrW', 'W6VcRey1W6hdUSo6qCouqa', 'WPKWtG', "mKG+Ed4", "ESk/WPNdI34", 'W7ddQaSbEqe', 'W5tcMNZcUJ8', 'WQhcImk1W4ekW5BdKq', 'WOhdVZdcTmk7kSoU', 'W4pdPCoHW4VcHKezWRldGgm', 'W6BcJga', 'v23dS10O', 'afCgWO8H', 'W6ldUmoYBCou', "c8o/W5VcHqe", "W5i/WO3dLq", 'tZ0GW6BdIq', 'W43cVrxcK2OP', 'W4JcMCkXW5ze', 'o0tdIbhcMq', 'pY3cNCobW5OU', 'W7ldVsqgDG', 'W6JcNmkXW7XA', "g3y/WOey", 'W4pdPCoHW4VcHKyzWR7dQW', 'WPFcMSokASkx', 'WR3cKCk2W5tdHa', 'W5pdL8oZq8o1', "sh/cRSo9W5C", "W4FcTG/cQ3mGWQ15sfO", 'W7fEa8obWOq', 'WRxcTSk2W4ux', 'evWsWQaf', 'w00QE3BcKcuxWQ7cKW', 'WQ3cQti', 'a8oAdMW9W5yNnHn7', 'W6dcOfutW6e', 'chiXWPrAWQJdImksxgS', 'W4BcPNVcIWq', 'WRFdJJBcOmk8', 'W4JcRwWrma', 'WONcNmkil8ooW58ba8oHW7S', 'qeJdOMCuWRa', 'W7ldSCoVrmoG', 'dwOwqthdNG', 'nCkrsCoyWPpcTmktpaSk', "cL/dGG7cJYDswW", 'c8ktWPxdOJi2WOe', 'de1BW6RcNd7cTmkyWPJdMq', 'WOldO8oGiSokvq', 'WO8kzM8k', "W5/dISoStSovomkBWR4", 'DYCmW4ZdPq', 'iLKrtWe', 'pCktqmopWRRcQa', 'seNcOCoxwr4', 'qa4S', 'e07dIqFcTczc', 'BJjgW6JcKq', 'A2lcR8obW4nNcCkc', 'za9ZowC', 'emkioN0lpxXqwaO', 'W49EWPepxG', 'supdOx4', 'W47cP24Dna', 'u8k1WRneW5i', 'iCkOmh9b', 'W53cLSkF', 'W6lcUIlcNfa', "W5/cGNKpW6m", 'aSoYW43cHmoS', 'petcVmopWRTMhW', 'CmksWOjZW6S', 'duKXyHa', 'W6ZcPeCUfq', 'u8kMWR1taa', 'r8kDWQtdQuy', 'g8ogW6tcJsG', 'w8k4p8oPW4K', 'W4tdJSoXuW', 'WOtcJriZbW', 'DSkPWPzmW5mIjmkuoXS', 'EsDdW5BcQM7dQSkdWPxdGG', 'W5BcRMqfWPe', 'WORdGcXRBW', 'W6xdJCoVDSo3', 'b3m6WPObWQZdGSko', 'W6lcHKS6W5S', 'bwCLWQmg', 'W6FcJg0fWOC', 'W77dKSot', 'WQJcQsy5mSki', 'xGnmW5pcTG', 'WPdcSCkHESouWPFcJbFdMa', 'WPJdHZ9OFGKxFSop', 'vKpdQW', "px7cHuX+", 'DmkeWOrbW5a', 'W5dcOMGppq', "WP9+W6JcTCoi", "WQ/cHdKHiCoDf8k0tmoC", 'BJbw', 'fSkooNbg', 'WR7cVSk1W5Wx', 'WOWLwKWEtG', 'p8okWQSWaW', 'WQVdJ8o3bfxdRa', 'EtbaW5tcKLtdOCkb', 'W5HRWQegxa', 'WQhcH8kRW4aD', 'amkwtCoWWPO', 'WRxcKSkaW67dIq', 'yYubW4FdGG', 'WQ3cJCkfxSoO', 'bhlcML1F', 'vmkgWRzkW6akbG', 'uWG3W4m6', 'W5rKWP0ntq', 'tMhcN8o4W4a', 'nSkiqSot', 'W7tcK2FcQqi', 'h8oGi2mL', 'WPhcV8kT', 'WPmpBNWj', "cL/dGG4", "dgJcNKb/", "r0/dQw4", 'W7xdPqOyAG', 'FqC3W6FdOa', "W7/dTmoYDCo2", 'W4RdRSoHW4JcRvmFWQ3dVg0', 'W4BdG8oU', 'W7JcIhq', 'gh8c', 'EbBcQConWPz7wGv9fq', "lhO+WPtcJgxcPSokW5/cNa", 'W6xcNtNcOvK', 'jetcLefz', 'WRtdSCoQfxq', 'sSktWQ5h', 'FsT4m1W', "W5pdLSk+qmovomkwWRJdOta", 'tIDrW4JcShdcOCkGWPZdUq', 'ECk4WQvbgxzYhmob', 'WPCQueWEsbq', 'eCooW5ZcV8o1', 'f8o2aKWUW7ubfXLk', 'nwbxhhSLiq', 'W7pcQtZcSMG', 'W6BcGSkAW5jh', 'tSkflmoj', 'W7BcTmksW5rJ', 'W43cI0KlWRG', 'W75BWP4oDa', 'bLRdPcBcIW', 'WQ9CW6tcG8oE', 't8kKWQddVv0', 'W7NcVuitWRi', 'v2JcMh5GW4ZcKq', 'WO3dSSo2', 'WOJdOSovkgm', 'W7HVhSo3WOa', 'dKRcU1PR', 'fxFcMvDG', 'mmkmqSoq', "Ef/cRCol", 'W77dQb0', "W6/cPL4zW7W", 'WPBdOcTssa', 'xehcLSoTW6y', 'WQFdPCoGlCo8', 'FrqV', 'rWGWW6y8W5VcTbXVW6u', 'ybn9h2K', 'W4FcOq7cJfu', 'W6jhWPKhs08qoxW', 'W7iRWQhdVrG', 'W53cS8kQE8odWOVdNG', 'o8kurSoEWRa', 'W63dTSo1W6ZcNa', 'b1NdHHtcGJXaub4', 'eNSDtrC', "Fsfsg28/", 'W77dPGSeBbFdSLjj', 'W4xcQvOwna', 'W7ZcHutcQrq', 'W5u9WOP0WRK', "W4/cU0ikWR4", 'buxdKZZcScLmrG', 'WRdcMmo4t8kI', 'f8o0W6RcQmoG', 'h8o9gvq', "rqW+", 'eCkBpwW', 'WRVcHSk8Amos', "bmomW7/cLG", 'W6xcIguiWOC', 'W6xcJSkcW7JdMW', 'DcXogMK', 'WOpcLmkxn8ouW4uCcSo8', "W7/dObyd", 'W5hcGgKlWPC', 'W7NcMmkOW5W', "iSowW6pcUSo+", 'g8oXW4ZcGmof', "W5f/cSojWPa", 'W5LRkSooWRRcJeCuia', 'ybSWW7W7', 'W5W5WONdGq', "s0hdQ3G+", 'DIfqbgKI', 'bfj2W7tdTa', 'W5RcNmkuW4HXW6BdImo8cSo4', 'qflcJmohW556cmk6WQO', 'WPRdQH90Ba', 'fwBdQItcLq'];
  return QQ = function () {
    return Q;
  }, QQ();
}
R(Q9, 'hideAll');
function QZ(Q, Z) {
  for (let QG of Q4.values()) {
    let QV = QG.layer.cv;
    if (!QV || QV.style.display === 'none' || !QG.col) continue;
    let QP = QV.getBoundingClientRect();
    if (Q >= QP.left && Q < QP.right && Z >= QP.top && Z < QP.bottom) return {
      'id': QG.id,
      'x': (Q - QP.left) / QG.col.scale,
      'y': (Z - QP.top) / QG.col.scale
    };
  }
  return null;
}
R(QZ, 'hitSlot');
var Qf = R(() => [...Q4.values()].map(Q => ({
    'id': Q.id,
    'side': Q.side,
    'shown': Q.layer.cv ? Q.layer.cv.style.display !== 'none' : false,
    'paints': Q.layer.paints,
    'h': Q.h
  })), 'stats'),
  Qx = R(() => typeof performance < 'u' ? performance.now() : Date.now(), "nowMs");
function Qg(Q, Z, QG) {
  return Qz(QG - 0x154, Z);
}
function Qq(Q) {
  const QG = {
    'fzlvT': function (Qt, Qa) {
      return Qt - Qa;
    },
    'Dbudr': function (Qt, Qa) {
      return Qt + Qa;
    },
    'oQccC': function (Qt, Qa) {
      return Qt(Qa);
    },
    'EXmXU': "eggs",
    'sEVfA': function (Qt) {
      return Qt();
    },
    'eeipA': "Egg debug",
    'iZhNW': "Close",
    'GZZVl': function (Qt, Qa) {
      return Qt === Qa;
    },
    'BGdHk': "Lidtd",
    'BxcFf': "AdAnw",
    'QPGqu': function (Qt, Qa) {
      return Qt / Qa;
    },
    'BGLZv': function (Qt, Qa) {
      return Qt * Qa;
    },
    'JGUDt': function (Qt, Qa) {
      return Qt === Qa;
    },
    'DgpdF': "ayKRz",
    'ZSZed': "EQUqB"
  };
  try {
    let Qa = Q.ctx.getTransform();
    return Math.max(1, Math.round(Qa.a * 100) / 100);
  } catch {
    return 1;
  }
}
R(Qq, "gameScale");
function QE(Q) {
  const QG = {
    'mkkqJ': function (Qa, QR) {
      return Qa !== QR;
    },
    'MJGYz': "undefined",
    'hUUCX': function (Qa, QR) {
      return Qa === QR;
    },
    'ZLlim': "object",
    'TeQbH': "function",
    'ohlZM': "log",
    'cJvwK': "warn",
    'KtnSP': "info",
    'lJROZ': "error",
    'xURpa': "exception",
    'mUqyX': "table",
    'yuFom': "trace",
    'KRBMA': function (Qa, QR) {
      return Qa < QR;
    },
    'yIIdr': function (Qa, QR) {
      return Qa + QR;
    },
    'fHBij': function (Qa, QR) {
      return Qa | QR;
    },
    'XxnnC': function (Qa, QR) {
      return Qa * QR;
    },
    'QAwNM': function (Qa, QR) {
      return Qa(QR);
    },
    'AdPut': "jtqyH",
    'ckrjU': "bWTcG",
    'yXKYd': function (Qa) {
      return Qa();
    },
    'vwMFF': "JvBpE",
    'ogRvH': "XZqjw",
    'iaAnK': function (Qa, QR) {
      return Qa !== QR;
    }
  };
  let QP = u;
  QP !== 1 && C(1);
  try {
    return Q();
  } finally {
    QP !== 1 && C(QP);
  }
}
function Qp(Q, Z, QG) {
  return Qz(QG - 0x149, Q);
}
R(QE, "inChapter1");
var Qs = new Map(),
  QB = null;
typeof window < 'u' && window.addEventListener && window.addEventListener("dr-gpureset", () => {
  Qs.clear(), QB && QB.dropCaches();
});
function QD(Q, Z, QG, QV) {
  const QP = {
    'damGq': function (Qk, Ql) {
      return Qk(Ql);
    },
    'hiugK': "rgba(0,0,0,0.55)",
    'eArDD': "fnt_main",
    'LDZaU': "left",
    'bvxsI': "top",
    'RejqR': function (Qk) {
      return Qk();
    },
    'ynfjZ': function (Qk, Ql) {
      return Qk >= Ql;
    },
    'xFtgS': function (Qk, Ql) {
      return Qk - Ql;
    },
    'unYjp': function (Qk, Ql) {
      return Qk !== Ql;
    },
    'UUYBJ': function (Qk, Ql) {
      return Qk + Ql;
    },
    'siehI': function (Qk, Ql) {
      return Qk * Ql;
    },
    'LOBkj': function (Qk, Ql) {
      return Qk - Ql;
    },
    'rSHWg': function (Qk, Ql) {
      return Qk + Ql;
    },
    'MpyTa': function (Qk, Ql) {
      return Qk + Ql;
    },
    'arSbU': function (Qk, Ql) {
      return Qk > Ql;
    },
    'PDRfq': function (Qk, Ql) {
      return Qk > Ql;
    },
    'LGtTz': function (Qk, Ql) {
      return Qk < Ql;
    },
    'KKIpb': "YaOzg",
    'ErAbw': "XtDur",
    'SrZZt': "nNmDr",
    'Yhsxw': "canvas"
  };
  let Qt = QP.UUYBJ(QP.rSHWg(QP.MpyTa(QP.rSHWg(QP.UUYBJ(QP.MpyTa(u, '|'), Z), '|'), QG), '|'), QV),
    Qa = Qs.get(Qt);
  if (Qa) return Qa;
  function QR(Qk, Ql, QU) {
    return Qg(Qk - 0xd5, Ql, Qk - 0x153);
  }
  QP.arSbU(Qs.size, 3000) && Qs.clear();
  let QF = Q.string_width(QV, Z),
    Qn = Q.lineHeight(Z);
  function QN(Qk, Ql, QU) {
    return Qg(Qk - 0x96, QU, Qk - -0x274);
  }
  const Qe = {};
  function Qr(Qk, Ql, QU) {
    return Qg(Qk - 0xa1, Ql, Qk - -0x537);
  }
  Qe.w = QF, Qe.cv = null;
  if (Qa = Qe, QP.PDRfq(QF, 0) && QP.PDRfq(Qn, 0) && QP.LGtTz(typeof document, 'u')) {
    if (QP.unYjp(QP.KKIpb, QP.ErAbw)) {
      let Qk = Q.fonts && Q.fonts[Z];
      if (Qk && Qk.img && QP.arSbU(Qk.img.width, 0)) {
        if (QP.unYjp(QP.SrZZt, QP.SrZZt)) {
          if (Qn && Qe.body && Qk.body.classList && Q9.body.classList.contains("shell-touch")) return null;
          let Ql = QQ();
          if (!Ql || !Ql.rect || !Ql.rect.width) return null;
          let QU = (Ql.below || Ql.rect.bottom) + QZ,
            Qh = Ql.H - QU - Qf;
          if (Qh < Qx) return null;
          let Qc = Qg.min(0x1, (Ql.W - Qq * 0x2) / QE);
          if (!(Qc >= 0.75)) return null;
          let QK = Qp.floor(Qs * Qc);
          return {
            'side': 'bottom',
            'x': QB,
            'y': QU,
            'cssW': QK,
            'cssH': Qh,
            'scale': Qc,
            'w': QD,
            'h': QO.floor(Qh / Qc),
            'k': Qc * Ql.dpr,
            'pageW': Ql.W - Qz * 0x2
          };
        } else {
          let QL = document.createElement(QP.Yhsxw);
          QL.width = QP.MpyTa(Math.ceil(QF), 8), QL.height = QP.UUYBJ(Qn, 2), QB || (QB = new w(QL.getContext('2d'))), QB.ctx = QL.getContext('2d'), QB.fonts = Q.fonts, QB.draw_set_font(Z), QB.draw_set_alpha(1), QB.draw_set_halign(QP.LDZaU), QB.draw_set_valign && QB.draw_set_valign(QP.bvxsI), QB.draw_text(4, 0, QV, QG), Qa.cv = QL;
        }
      } else return Qa;
    } else {
      const QY = {
        'WxwTf': function (Z5, Z6) {
          return QP.damGq(Z5, Z6);
        },
        'acHxS': QP.hiugK,
        'VQNPe': QP.eArDD,
        'uKMky': QP.LDZaU,
        'CgeYH': QP.bvxsI
      };
      let QA = QP.RejqR(QW);
      (!QS.lines || QP.ynfjZ(QP.xFtgS(QA, Qu.t), 100) || Qo && QP.unYjp(QC, QT.frame)) && (Qb.lines = QP.RejqR(QM) || [], Qj.t = QA, QX.frame = Qw, Qm.sig = Qi.lines.join('\x0a'));
      let Z0 = QJ.lines;
      QG.lh || (QV.lh = QP.UUYBJ(QP.damGq(QP, () => Z6.lineHeight("fnt_main")), 2));
      const Z1 = {};
      Z1.font = QF.font, Z1.color = Qn.color, Z1.alpha = QN.alpha, Z1.halign = Qe.halign, Z1.valign = Qr.valign;
      let Z2 = QR.lh,
        Z3 = QP.UUYBJ(QP.siehI(Z0.length, Z2), 4),
        Z4 = Z1;
      try {
        Z6.layer.paint(Z7, 640, Z3, QP.damGq(Z8, Z9), ZQ.sig, Z5 => ZE(() => {
          QY.WxwTf(Zs, Z5), Z5.ctx.fillStyle = QY.acHxS, Z5.ctx.fillRect(0, 0, 640, Z3), Z5.draw_set_font(QY.VQNPe), Z5.draw_set_halign(QY.uKMky), Z5.draw_set_valign(QY.CgeYH), Z5.draw_set_alpha(1), Z0.forEach((Z9, ZQ) => Z5.draw_text(6, 2 + ZQ * Z2, Z9, ZQ === 0 ? "#7ad17a" : "#c0c0c0"));
        })), Zx.layer.blit(Zg, 0, QP.LOBkj(Zq, 2));
      } finally {
        ZE.draw_set_font(Z4.font), Zp.draw_set_color(Z4.color), Zs.draw_set_alpha(Z4.alpha), ZB.draw_set_halign(Z4.halign), ZD.draw_set_valign(Z4.valign);
      }
    }
  }
  return Qs.set(Qt, Qa), Qa;
}
R(QD, "wordRun");
function QO(Q) {
  const QV = {
    'HVweB': function (Qa, QR) {
      return Qa == QR;
    },
    'jIoHb': "number",
    'YdCuK': function (Qa, QR) {
      return Qa < QR;
    },
    'ibPNi': function (Qa, QR) {
      return Qa(QR);
    },
    'dBxLj': function (Qa, QR) {
      return Qa >= QR;
    },
    'eaeJV': function (Qa, QR) {
      return Qa !== QR;
    },
    'KCAeL': "top",
    'EIBjm': "AWCut",
    'HPxxz': function (Qa, QR, QF, Qn, QN) {
      return Qa(QR, QF, Qn, QN);
    },
    'sJDEJ': function (Qa, QR) {
      return Qa < QR;
    },
    'IKyjQ': function (Qa, QR) {
      return Qa + QR;
    },
    'ECgvx': function (Qa, QR) {
      return Qa - QR;
    },
    'gROUP': function (Qa, QR) {
      return Qa === QR;
    },
    'LviSG': "right",
    'KCWeh': function (Qa, QR) {
      return Qa - QR;
    },
    'iglAT': function (Qa, QR) {
      return Qa === QR;
    },
    'TdIqw': "center",
    'gdveB': function (Qa, QR) {
      return Qa / QR;
    },
    'vNgCt': function (Qa, QR) {
      return Qa < QR;
    },
    'FZIIe': function (Qa, QR) {
      return Qa !== QR;
    },
    'JauPE': "hkFAT",
    'SUsVU': "pdMWH",
    'dSqjr': function (Qa, QR) {
      return Qa > QR;
    }
  };
  if (!Q || Q.__fastText || typeof document > 'u') return Q;
  let QP = Q.draw_text.bind(Q);
  return Q.draw_text = function (Qa, QR, QF, Qn = this.color) {
    if (QF = String(QF), !QF) return;
    if (QF.indexOf('\x0a') >= 0 || this.valign && this.valign !== "top") {
      QP(Qa, QR, QF, Qn);
      return;
    }
    let QN = this.font,
      Qe = this.string_width('\x20', QN),
      Qr = QF.split('\x20'),
      Qk = 0,
      Ql = Qr.map(Z5 => Z5 ? QD(this, QN, Qn, Z5) : null);
    for (let Z5 = 0; Z5 < Qr.length; Z5++) Qk += (Ql[Z5] ? Ql[Z5].w : 0) + (Z5 < Qr.length - 1 ? Qe : 0);
    let Qc = Qa;
    this.halign === "right" ? Qc = Qa - Qk : this.halign === "center" && (Qc = Qa - Qk / 2);
    let QK = this.ctx,
      QL = Math.max(0, Math.min(1, this.alpha));
    QK.globalAlpha = QL;
    for (let Z6 = 0; Z6 < Qr.length; Z6++) {
      let Z7 = Ql[Z6];
      Z7 && Z7.cv && QK.drawImage(Z7.cv, Math.round(Qc) - 4, Math.round(QR)), Qc += (Z7 ? Z7.w : 0) + Qe;
    }
    QK.globalAlpha = 1;
  }, Q.__fastText = true, Q;
}
function Qz(QG, QV) {
  QG = QG - 314;
  const QP = QQ();
  let Qt = QP[QG];
  if (Qz.cOkWCl === undefined) {
    var Qa = function (QN) {
      const Qe = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let Qr = '',
        Qk = '';
      for (let Ql = 0, QU, Qh, Qc = 0; Qh = QN.charAt(Qc++); ~Qh && (QU = Ql % 4 ? QU * 64 + Qh : Qh, Ql++ % 4) ? Qr += String.fromCharCode(255 & QU >> (-2 * Ql & 6)) : 0) {
        Qh = Qe.indexOf(Qh);
      }
      for (let QK = 0, QL = Qr.length; QK < QL; QK++) {
        Qk += '%' + ('00' + Qr.charCodeAt(QK).toString(16)).slice(-2);
      }
      return decodeURIComponent(Qk);
    };
    const Qn = function (QN, Qe) {
      let Qr = [],
        Qk = 0,
        Ql,
        QU = '';
      QN = Qa(QN);
      let Qh;
      for (Qh = 0; Qh < 256; Qh++) {
        Qr[Qh] = Qh;
      }
      for (Qh = 0; Qh < 256; Qh++) {
        Qk = (Qk + Qr[Qh] + Qe.charCodeAt(Qh % Qe.length)) % 256, Ql = Qr[Qh], Qr[Qh] = Qr[Qk], Qr[Qk] = Ql;
      }
      Qh = 0, Qk = 0;
      for (let Qc = 0; Qc < QN.length; Qc++) {
        Qh = (Qh + 1) % 256, Qk = (Qk + Qr[Qh]) % 256, Ql = Qr[Qh], Qr[Qh] = Qr[Qk], Qr[Qk] = Ql, QU += String.fromCharCode(QN.charCodeAt(Qc) ^ Qr[(Qr[Qh] + Qr[Qk]) % 256]);
      }
      return QU;
    };
    Qz.UAhmfx = Qn, Qz.SkDOGj = {}, Qz.cOkWCl = true;
  }
  const QR = QP[0];
  Qz.jUBhHV !== QR && (Qz.SkDOGj = {}, Qz.jUBhHV = QR);
  const QF = Qz.SkDOGj[QG];
  return QF === undefined ? (Qz.BtKXqz === undefined && (Qz.BtKXqz = true), Qt = Qz.UAhmfx(Qt, QV), Qz.SkDOGj[QG] = Qt) : Qt = QF, Qt;
}
R(QO, "fastText");
var Qv = new Set(["Planner overlay", "Egg debug", "Close"]);
function Qy(Q, Z) {
  const QG = {
    'srwPA': function (QF, Qn) {
      return QF === Qn;
    },
    'Ylzfa': "Autoplay",
    'iFmXO': function (QF, Qn, QN) {
      return QF(Qn, QN);
    },
    'OFLUU': "autoplay",
    'XBMpQ': function (QF) {
      return QF();
    },
    'Xlomi': "God mode",
    'TVlTW': "godmode",
    'WyJVr': "Force attack #",
    'eKhGD': function (QF, Qn, QN) {
      return QF(Qn, QN);
    },
    'doxWM': "forceAttack",
    'SKKym': "Kill party",
    'aQRvT': function (QF, Qn) {
      return QF(Qn);
    },
    'OyZmS': "kill",
    'XVNMC': function (QF, Qn, QN) {
      return QF(Qn, QN);
    },
    'pfQTq': "debugEdit"
  };
  let QP = Q[Z];
  if (!QP) return;
  let Qa = QP[0];
  Qa === "Autoplay" ? B("autoplay", y()) : Qa === "God mode" ? B("godmode", !!S.godmode) : Qa === "Force attack #" ? B("forceAttack", S.forceAttack) : Qa === "Kill party" ? B("kill") : Qv.has(Qa) || B("debugEdit", Qa);
}
R(Qy, "noteRow");
var QI = Object.values(W.items).filter(Q => Q && Q.name && !/^scr_text/.test(Q.name)).sort((Q, Z) => Q.id - Z.id),
  Qd = R(Q => {
    const Z = {};
    Z.HaiYc = function (QR, QF) {
      return QR + QF;
    };
    Z.lfApc = "empty";
    const QV = Z;
    let Qa = W.items[Q];
    return Qa ? Qa.name : Q ? QV.HaiYc('#', Q) : QV.lfApc;
  }, "itemName"),
  QH = ['\x20', "Kris", "Susie", "Ralsei"],
  QW = null,
  QS = R(() => QW, "liveDebug");
function Qu(Q) {
  const Z = {
    'QLmRc': function (Qn, QN) {
      return Qn < QN;
    },
    'tegGn': function (Qn, QN) {
      return Qn >= QN;
    },
    'dhMLv': function (Qn, QN) {
      return Qn / QN;
    },
    'kTRLp': function (Qn, QN) {
      return Qn - QN;
    },
    'lXmgy': function (Qn, QN) {
      return Qn + QN;
    },
    'KIwOo': function (Qn, QN) {
      return Qn >= QN;
    },
    'GDTdZ': function (Qn, QN) {
      return Qn !== QN;
    },
    'zqXKM': function (Qn, QN) {
      return Qn(QN);
    },
    'hrrYs': "snd_menumove",
    'HAbTr': function (Qn, QN, Qe) {
      return Qn(QN, Qe);
    },
    'kPdvp': function (Qn, QN) {
      return Qn(QN);
    },
    'yuCNM': "snd_select"
  };
  let QV = QW;
  if (!QV || !QV.open) return false;
  if (QV.capturing || Q.x < 40 || Q.x >= 600 || Q.y < 90) return true;
  let Qa = QV._rows || (QV._rows = QV.rows()),
    QR = Math.floor((Q.y - 90) / 24),
    QF = (QV._first || 0) + QR;
  return QR >= 13 || QF >= Qa.length || !Qa[QF][2] ? true : QF !== QV.sel ? (QV.sel = QF, b("snd_menumove"), true) : (Qa[QF][2](1), Qy(Qa, QF), b("snd_select"), QV._rows = null, true);
}
R(Qu, "debugTap");
var Qo = class Zs {
  constructor(Q) {
    QW = this, this.menu = Q, this.open = false, this.sel = 0, this.buf = 0, this.jewel = 0, this.capturing = null, this.rep = {}, this.layer = new l(), this._rows = null;
  }
  ["held"](Q, Z) {
    const QV = {};
    QV.HMxQp = function (Qn, QN) {
      return Qn + QN;
    }, QV.yJUud = function (Qn, QN) {
      return Qn < QN;
    }, QV.tcpHB = function (Qn, QN) {
      return Qn === QN;
    }, QV.vKDbv = function (Qn, QN) {
      return Qn % QN;
    }, QV.dDtJL = function (Qn, QN) {
      return Qn - QN;
    };
    const QP = QV;
    let Qa = !!j.held[Q],
      QR = this.rep[Q] || 0;
    return this.rep[Q] = Qa ? QP.HMxQp(QR, 1) : 0, Z ? true : !Qa || QP.yJUud(QR, 16) ? false : QP.tcpHB(QP.vKDbv(QP.dDtJL(QR, 16), 3), 0);
  }
  ["rows"]() {
    const Q = {
      'wasXB': function (QR, QF) {
        return QR !== QF;
      },
      'wDTgv': "QamQl",
      'zGvyj': "qwkiq",
      'ecJTO': function (QR, QF) {
        return QR === QF;
      },
      'NHGBm': function (QR, QF) {
        return QR + QF;
      },
      'nglrS': function (QR, QF) {
        return QR | QF;
      },
      'oOxMt': function (QR, QF) {
        return QR * QF;
      },
      'nIhqU': function (QR, QF) {
        return QR * QF;
      },
      'oYeky': function (QR, QF) {
        return QR + QF;
      },
      'BMmyU': function (QR, QF) {
        return QR | QF;
      },
      'xeBWm': "gIOmY",
      'XzVnq': function (QR, QF) {
        return QR * QF;
      },
      'aUoSN': function (QR, QF) {
        return QR > QF;
      },
      'SpjXU': function (QR, QF) {
        return QR >= QF;
      },
      'ubOIL': function (QR, QF) {
        return QR(QF);
      },
      'ZJNGm': "down",
      'vBKJF': function (QR) {
        return QR();
      },
      'NuAgE': function (QR, QF) {
        return QR(QF);
      },
      'lZveE': "left",
      'cnnjP': function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      'svtiG': "snd_menumove",
      'WGPHi': "right",
      'ELqEN': function (QR) {
        return QR();
      },
      'LqhKO': function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      'PNiYW': function (QR, QF) {
        return QR(QF);
      },
      'fyuxK': function (QR, QF) {
        return QR < QF;
      },
      'olbgX': "snd_select",
      'ZRTNU': function (QR) {
        return QR();
      },
      'XOncm': function (QR, QF) {
        return QR < QF;
      },
      'NOOoQ': function (QR, QF) {
        return QR(QF);
      },
      'AxEIx': function (QR, QF) {
        return QR < QF;
      },
      'ElfKo': function (QR, QF) {
        return QR % QF;
      },
      'EQVTX': function (QR, QF) {
        return QR(QF);
      },
      'rmVSg': function (QR, QF) {
        return QR !== QF;
      },
      'mbcNM': "LztKp",
      'tsQDZ': "Grabu",
      'mDnZJ': function (QR, QF) {
        return QR + QF;
      },
      'JtGod': function (QR, QF) {
        return QR > QF;
      },
      'lFJYi': "FSDDb",
      'Ecawn': "BVvdr",
      'dVguw': function (QR, QF) {
        return QR * QF;
      },
      'QfOtg': function (QR, QF) {
        return QR + QF;
      },
      'PSJWH': function (QR, QF, Qn, QN) {
        return QR(QF, Qn, QN);
      },
      'xjVeq': function (QR, QF) {
        return QR !== QF;
      },
      'GAFFr': "XwgHh",
      'LxgQk': "sWICX",
      'ejAdu': function (QR, QF) {
        return QR < QF;
      },
      'GSgOV': function (QR, QF) {
        return QR === QF;
      },
      'pyLuL': function (QR, QF) {
        return QR * QF;
      },
      'YkHag': function (QR, QF) {
        return QR + QF;
      },
      'WrRHf': function (QR, QF) {
        return QR - QF;
      },
      'ymuBN': function (QR, QF) {
        return QR >= QF;
      },
      'iyZbU': function (QR, QF) {
        return QR !== QF;
      },
      'ClHSo': "pvSJx",
      'qWNIb': "dhmdr",
      'GumUr': function (QR, QF) {
        return QR + QF;
      },
      'MCdgX': function (QR, QF) {
        return QR | QF;
      },
      'xoZAW': "Rxxan",
      'slGvN': function (QR, QF) {
        return QR + QF;
      },
      'iPBTY': function (QR, QF) {
        return QR | QF;
      },
      'oRDvg': function (QR, QF) {
        return QR * QF;
      },
      'whler': "YSqeA",
      'XZAWg': "iraNv",
      'hVowq': function (QR, QF) {
        return QR === QF;
      },
      'QyyIW': "wHpMW",
      'eLsYO': function (QR, QF) {
        return QR + QF;
      },
      'rAeEg': function (QR, QF) {
        return QR * QF;
      },
      'JvlHm': function (QR, QF) {
        return QR === QF;
      },
      'PYnkN': function (QR, QF) {
        return QR | QF;
      },
      'YnjMA': function (QR, QF) {
        return QR + QF;
      },
      'xABRT': function (QR, QF) {
        return QR === QF;
      },
      'nIZmA': "VqUFM",
      'drgIE': function (QR, QF) {
        return QR + QF;
      },
      'NlyeF': function (QR, QF) {
        return QR === QF;
      },
      'eqCEV': "aqPoG",
      'PlRdN': function (QR, QF) {
        return QR + QF;
      },
      'Ahwbf': function (QR, QF) {
        return QR | QF;
      },
      'oJxeA': function (QR) {
        return QR();
      },
      'ysemK': "tap to skip",
      'AfEKQ': "any key skips",
      'WeWSh': "RWUaP",
      'VNGZs': "TWMfx",
      'HSNss': function (QR, QF) {
        return QR === QF;
      },
      'LnmeO': "CHARA",
      'PvmeS': "Max HP",
      'IHcQk': function (QR, QF, Qn, QN, Qe, Qr) {
        return QR(QF, Qn, QN, Qe, Qr);
      },
      'Jqrpx': function (QR, QF, Qn, QN, Qe) {
        return QR(QF, Qn, QN, Qe);
      },
      'XoorD': "Attack (AT)",
      'eAgIM': "Defense (DF)",
      'wvyCn': function (QR, QF, Qn, QN, Qe) {
        return QR(QF, Qn, QN, Qe);
      },
      'TROAR': "Weapon bonus",
      'rLvhl': "wstrength",
      'vvgEG': "Armour bonus",
      'gqtlb': "adef",
      'sxrvm': function (QR, QF, Qn, QN, Qe) {
        return QR(QF, Qn, QN, Qe);
      },
      'sqwIO': "Gold",
      'pmDKv': "gold",
      'sCkus': "Kills",
      'QpJBw': "kills",
      'cpkWE': "Weapon",
      'swRNR': "Armour",
      'yPemz': function (QR, QF) {
        return QR(QF);
      },
      'dNuJp': "ENEMIES",
      'wYBiR': function (QR, QF) {
        return QR < QF;
      },
      'usxPD': "VqDUj",
      'GDWnq': function (QR, QF) {
        return QR + QF;
      },
      'TTmCO': "enemy ",
      'esQQc': "BATTLE",
      'GtnoX': "Invincible",
      'fViKM': "Kill all enemies",
      'QDSEn': function (QR, QF) {
        return QR(QF);
      },
      'eafFi': "PARTY",
      'twyoS': function (QR, QF) {
        return QR < QF;
      },
      'IbRhg': function (QR, QF) {
        return QR !== QF;
      },
      'LebMp': "ekpjJ",
      'qjnKq': function (QR, QF) {
        return QR(QF);
      },
      'fXHuF': function (QR, QF) {
        return QR(QF);
      },
      'pwdiZ': "Turn timer",
      'Bfdkg': "Whose turn"
    };
    let QG = [],
      QV = QR => QG.push([QR, null, null]),
      QP = QR => S.charname[QR] || QH[QR] || '#' + QR;
    if (u === 'ut') {
      let QR = (QF, Qn, QN, Qe, Qr) => QG.push([QF, () => S[Qn], Qk => {
        S[Qn] = Math.max(Qe, Qr === void 0 ? (S[Qn] | 0) + Qk * QN : Math.min(Qr, (S[Qn] | 0) + Qk * QN));
      }]);
      QV("CHARA"), QG.push(['HP', () => S.hp + '/' + S.maxhp, QF => {
        S.hp = Math.max(0, Math.min(S.maxhp, (S.hp | 0) + QF * 5));
      }]), QG.push(["Max HP", () => S.maxhp, QF => {
        S.maxhp = Math.max(1, (S.maxhp | 0) + QF * 5), S.hp > S.maxhp && (S.hp = S.maxhp);
      }]), QR('LV', 'lv', 1, 1, 20), QR("Attack (AT)", 'at', 1, 0), QR("Defense (DF)", 'df', 1, 0), QR("Weapon bonus", "wstrength", 1, 0), QR("Armour bonus", "adef", 1, 0), QR("Gold", "gold", 10, 0), QR("Kills", "kills", 1, 0), QG.push(["Weapon", () => Qd(S.weapon), QF => {
        const Qn = {
          'ipgeA': function (Qk, Ql) {
            return Qk < Ql;
          },
          'DBnmB': function (Qk, Ql) {
            return Qk % Ql;
          },
          'AJYjs': function (Qk, Ql) {
            return Qk + Ql;
          },
          'lAiqq': function (Qk, Ql) {
            return Qk(Ql);
          },
          'oKRoS': "snd_menumove"
        };
        S.weapon = Math.max(0, (S.weapon | 0) + QF);
      }]), QG.push(["Armour", () => Qd(S.armor), QF => {
        S.armor = Math.max(0, (S.armor | 0) + QF);
      }]), QV("ENEMIES");
      for (let QF = 0; QF < 3; QF++) if (S.monster[QF] === 1) {
        let Qn = String(S.monstername[QF] || "enemy " + QF);
        QG.push([Qn + " HP", () => S.monsterhp[QF] + '/' + S.monstermaxhp[QF], QN => {
          S.monsterhp[QF] = Math.max(0, S.monsterhp[QF] + QN * 10);
        }]), QG.push([Qn + " Max HP", () => S.monstermaxhp[QF], QN => {
          S.monstermaxhp[QF] = Math.max(1, S.monstermaxhp[QF] + QN * 10);
        }]), QG.push([Qn + " Spareable", () => S.monstertype && S.monstertype[QF] ? "YES" : 'NO', () => {
          const QN = {
            'Mibfd': function (Ql, QU, Qh, Qc) {
              return Ql(QU, Qh, Qc);
            }
          };
          S.monstertype && (S.monstertype[QF] = S.monstertype[QF] ? 0 : 1);
        }]);
      }
      return QV("BATTLE"), QG.push(["Invincible", () => S.debugInv ? 'ON' : "OFF", () => {
        S.debugInv = !S.debugInv;
      }]), QG.push(["Kill all enemies", () => '', () => {
        for (let Qk = 0; Qk < 3; Qk++) S.monster[Qk] === 1 && (S.monsterhp[Qk] = 0);
      }]), this.cheatRows(QG, QV), this.itemRows(QG, QV), this.keyRows(QG, QV), QG;
    }
    QV("PARTY");
    for (let QN = 0; QN < S.char.length; QN++) {
      let Qe = S.char[QN];
      if (!Qe) continue;
      let Qr = QP(Qe);
      QG.push([Qr + " HP", () => S.hp[Qe] + '/' + S.maxhp[Qe], Qk => {
        S.hp[Qe] = Math.max(-S.maxhp[Qe], Math.min(S.maxhp[Qe], S.hp[Qe] + Qk * 10));
      }]), QG.push([Qr + " Max HP", () => S.maxhp[Qe], Qk => {
        S.maxhp[Qe] = Math.max(1, S.maxhp[Qe] + Qk * 10);
      }]), QG.push([Qr + " Attack", () => S.battleat[QN], Qk => {
        const Ql = {
          'bkYZf': function (QK, QL) {
            return QK < QL;
          },
          'GdSYY': function (QK, QL) {
            return QK > QL;
          },
          'GJSop': function (QK, QL) {
            return QK - QL;
          },
          'Busev': function (QK, QL) {
            return QK + QL;
          },
          'DGavS': function (QK, QL) {
            return QK >= QL;
          }
        };
        S.battleat[QN] = Math.max(0, (S.battleat[QN] | 0) + Qk);
      }]), QG.push([Qr + " Defense", () => S.battledf[QN], Qk => {
        S.battledf[QN] = (S.battledf[QN] | 0) + Qk;
      }]), QG.push([Qr + " Magic", () => S.battlemag[QN], Qk => {
        S.battlemag[QN] = Math.max(0, (S.battlemag[QN] | 0) + Qk);
      }]), QG.push([Qr + " Can act", () => S.charmove[QN] ? "YES" : 'NO', () => {
        S.charmove[QN] = S.charmove[QN] ? 0 : 1, S.charcantarget[QN] = S.charmove[QN];
      }]);
    }
    QV("ENEMIES");
    for (let Qk = 0; Qk < 3; Qk++) S.monster[Qk] === 1 && (QG.push([S.monstername[Qk] + " HP", () => S.monsterhp[Qk] + '/' + S.monstermaxhp[Qk], Ql => {
      S.monsterhp[Qk] = Math.max(1, S.monsterhp[Qk] + Ql * 100);
    }]), QG.push([S.monstername[Qk] + " Mercy", () => S.mercymod[Qk], Ql => {
      S.mercymod[Qk] = Math.max(0, S.mercymod[Qk] + Ql * 10);
    }]), QG.push([S.monstername[Qk] + " Tired", () => S.monsterstatus[Qk] ? "YES" : 'NO', () => {
      S.monsterstatus[Qk] = S.monsterstatus[Qk] ? 0 : 1;
    }]));
    return QV("BATTLE"), QG.push(['TP', () => S.tension, Ql => {
      const QU = {
        'ySfwp': function (QL, QY) {
          return QL === QY;
        },
        'TfQVE': function (QL, QY) {
          return QL + QY;
        },
        'pDxNe': function (QL, QY) {
          return QL | QY;
        },
        'jXJof': function (QL, QY) {
          return QL * QY;
        },
        'KXaWk': function (QL, QY) {
          return QL + QY;
        }
      };
      S.tension = Math.max(0, Math.min(S.maxtension, S.tension + Ql * 10));
    }]), QG.push(["Turn timer", () => S.turntimer | 0, Ql => {
      S.turntimer = Math.max(0, (S.turntimer | 0) + Ql * 30);
    }]), QG.push(["Whose turn", () => S.charturn < S.char.length ? QP(S.char[S.charturn]) : "enemy", Ql => {
      const QU = {
        'JWbtC': function (QL) {
          return QL();
        },
        'Aivjd': "tap to skip",
        'leHsA': "any key skips",
        'QJOEy': function (QL, QY, QA, Z0) {
          return QL(QY, QA, Z0);
        },
        'NlBVF': function (QL, QY) {
          return QL(QY);
        }
      };
      S.charturn = Math.max(0, Math.min(S.char.length - 1, S.charturn + Ql));
    }]), QG.push(["Invincible", () => S.debugInv ? 'ON' : "OFF", () => {
      S.debugInv = !S.debugInv;
    }]), this.cheatRows(QG, QV), this.itemRows(QG, QV), this.endRows(QG), QG;
  }
  ["cheatRows"](Q, Z) {
    const QG = {
      'ZRNlM': function (QR, QF) {
        return QR !== QF;
      },
      'CkfwP': "Higzh",
      'BboLr': function (QR) {
        return QR();
      },
      'WIHKX': function (QR, QF) {
        return QR === QF;
      },
      'QzfGP': "rXftz",
      'lTNuA': function (QR, QF) {
        return QR !== QF;
      },
      'yVOBB': function (QR, QF) {
        return QR(QF);
      },
      'hffAl': "jtZqF",
      'uIwJp': "HZXVb",
      'xumbT': function (QR, QF) {
        return QR === QF;
      },
      'bpZJN': function (QR, QF) {
        return QR < QF;
      },
      'tyIvp': function (QR, QF) {
        return QR % QF;
      },
      'FCfVF': function (QR, QF) {
        return QR + QF;
      },
      'nBKyb': function (QR, QF) {
        return QR + QF;
      },
      'IHknf': function (QR, QF) {
        return QR(QF);
      },
      'uDgdb': "snd_menumove",
      'CVnrC': function (QR, QF) {
        return QR === QF;
      },
      'UiGIh': "PZDJT",
      'NYJoc': function (QR, QF) {
        return QR + QF;
      },
      'QZptp': function (QR, QF) {
        return QR | QF;
      },
      'FDhqA': function (QR, QF) {
        return QR === QF;
      },
      'aTyxn': "Autoplay",
      'DCNQH': function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      'IBtLC': "autoplay",
      'Rywcs': function (QR) {
        return QR();
      },
      'ILNYQ': function (QR, QF) {
        return QR === QF;
      },
      'plzrA': "God mode",
      'Jouay': "godmode",
      'ZYHnt': "Force attack #",
      'iEpbZ': function (QR, QF, Qn) {
        return QR(QF, Qn);
      },
      'AMlpy': "forceAttack",
      'RGiPK': function (QR, QF) {
        return QR === QF;
      },
      'QWwpE': "Kill party",
      'GjGvl': function (QR, QF) {
        return QR(QF);
      },
      'woiEx': "kill",
      'hcvhz': "debugEdit",
      'SOSEi': function (QR, QF) {
        return QR < QF;
      },
      'CPAHj': function (QR, QF) {
        return QR == QF;
      },
      'uVubS': function (QR, QF) {
        return QR != QF;
      },
      'aMIuf': function (QR, QF) {
        return QR + QF;
      },
      'YoRwk': "DdfjO",
      'fbfka': "number",
      'ezOjJ': function (QR, QF) {
        return QR !== QF;
      },
      'AKhSH': "FPPID",
      'kLEMg': function (QR, QF) {
        return QR + QF;
      },
      'zpkxm': function (QR, QF) {
        return QR | QF;
      },
      'VKuGv': function (QR, QF) {
        return QR | QF;
      },
      'sClUU': function (QR, QF) {
        return QR > QF;
      },
      'OrLoK': function (QR, QF) {
        return QR !== QF;
      },
      'EbTTd': "bwCHc",
      'SGVLr': function (QR, QF) {
        return QR == QF;
      },
      'iztoo': function (QR, QF) {
        return QR !== QF;
      },
      'ZfUEq': "vunIl",
      'tQgww': "pdFYN",
      'AOgrt': function (QR, QF) {
        return QR < QF;
      },
      'bohre': "TziWu",
      'hSBHM': "PGVTi",
      'axnjr': "CHEATS",
      'JbAQo': function (QR) {
        return QR();
      },
      'qWlPA': "Game debug (global.debug)",
      'qsyyU': "Planner overlay",
      'IjNYl': "Heal party"
    };
    QG.IHknf(Z, QG.axnjr), Q.push([QG.aTyxn, () => y() ? 'ON' : "OFF", () => {
      if (QG.ZRNlM(QG.CkfwP, QG.CkfwP)) return 1;else QG.BboLr(H);
    }]), Q.push([QG.plzrA, () => S.godmode ? 'ON' : "OFF", () => {
      if (QG.WIHKX(QG.QzfGP, QG.QzfGP)) S.godmode = !S.godmode;else {
        QG.hp = Q.maxhp;
        return;
      }
    }]);
    let QV = QG.JbAQo(D);
    (QV || QG.CVnrC(S.debug, 1)) && Q.push([QG.qWlPA, () => S.debug === 1 ? "ON  0-9 next attack, - normal" : "OFF", () => {
      const QF = {
        'MBrsQ': function (Qe, Qr) {
          return QG.lTNuA(Qe, Qr);
        },
        'sKEhn': function (Qe, Qr) {
          return QG.yVOBB(Qe, Qr);
        }
      };
      QG.WIHKX(QG.hffAl, QG.uIwJp) ? PcBlVZ.MBrsQ(Q, 1) && PcBlVZ.sKEhn(QV, QF) : (S.debug = QG.xumbT(S.debug, 1) ? 0 : 1, S.debugUser = S.debug);
    }]), Q.push([QG.ZYHnt, () => S.forceAttack >= 0 ? S.forceAttack : "OFF (enemy picks)", QR => {
      if (QG.CVnrC(QG.UiGIh, QG.UiGIh)) S.forceAttack = Math.max(-1, Math.min(999, QG.NYJoc(QG.QZptp(S.forceAttack ?? -1, 0), QR)));else {
        let Qe = this.sel;
        for (let Qr = 0; QG.bpZJN(Qr, Q1) && (Qe = QG.tyIvp(QG.FCfVF(QG.nBKyb(Qe, Q2), Q3), Q4), !Q5[Qe][2]); Qr++);
        this.sel = Qe, QG.IHknf(Q0, QG.uDgdb);
      }
    }]), QV && Q.push([QG.qsyyU, () => this.menu.cfg.hitboxes ? 'ON' : "OFF", () => {
      this.menu.cfg.hitboxes = !this.menu.cfg.hitboxes, this.menu.onChange();
    }]), Q.push([QG.QWwpE, () => '', () => {
      const QR = {
        'ligeo': function (Qe, Qr) {
          return QG.SOSEi(Qe, Qr);
        },
        'ExvZv': function (Qe, Qr) {
          return QG.CPAHj(Qe, Qr);
        },
        'PXYZw': function (Qe, Qr) {
          return QG.uVubS(Qe, Qr);
        },
        'dfGUi': function (Qe, Qr) {
          return QG.aMIuf(Qe, Qr);
        }
      };
      if (QG.ZRNlM(QG.YoRwk, QG.YoRwk)) {
        let Qe = Q0[Q1];
        if (!Qe) return;
        let Qr = Qe[0];
        SLfyHf.FDhqA(Qr, SLfyHf.aTyxn) ? SLfyHf.DCNQH(Q2, SLfyHf.IBtLC, SLfyHf.Rywcs(Q3)) : SLfyHf.ILNYQ(Qr, SLfyHf.plzrA) ? SLfyHf.DCNQH(Q4, SLfyHf.Jouay, !!Q5.godmode) : SLfyHf.FDhqA(Qr, SLfyHf.ZYHnt) ? SLfyHf.iEpbZ(Q6, SLfyHf.AMlpy, Q7.forceAttack) : SLfyHf.RGiPK(Qr, SLfyHf.QWwpE) ? SLfyHf.GjGvl(Q8, SLfyHf.woiEx) : Q9.has(Qr) || SLfyHf.iEpbZ(QQ, SLfyHf.hcvhz, Qr);
      } else {
        if (QG.CPAHj(typeof S.hp, QG.fbfka)) {
          S.hp = 0;
          return;
        }
        for (let Qk = 0; QG.bpZJN(Qk, S.char.length); Qk++) {
          if (QG.ezOjJ(QG.AKhSH, QG.AKhSH)) for (let Ql = 0; kUIktt.ligeo(Ql, Q1.length); Ql += 2) {
            if (kUIktt.ExvZv(Q7, Q8[Ql]) && kUIktt.PXYZw(Q9.charCodeAt(QQ), QZ[kUIktt.dfGUi(Ql, 1)])) return false;
          } else {
            let QU = S.char[Qk];
            QU && (S.hp[QU] = 0);
          }
        }
      }
    }]), Q.push([QG.IjNYl, () => '', () => {
      const QF = {
        'KFZow': function (Qe, Qr) {
          return QG.OrLoK(Qe, Qr);
        },
        'OgPdF': function (Qe, Qr) {
          return QG.yVOBB(Qe, Qr);
        },
        'JxnGK': function (Qe) {
          return QG.Rywcs(Qe);
        },
        'sinuO': function (Qe, Qr) {
          return QG.yVOBB(Qe, Qr);
        }
      };
      if (QG.ILNYQ(QG.EbTTd, QG.EbTTd)) {
        if (QG.SGVLr(typeof S.hp, QG.fbfka)) {
          if (QG.iztoo(QG.ZfUEq, QG.tQgww)) {
            S.hp = S.maxhp;
            return;
          } else {
            let Qe = QV;
            ajdunQ.KFZow(Qe, 1) && ajdunQ.OgPdF(n, 1);
            try {
              return ajdunQ.JxnGK(h);
            } finally {
              ajdunQ.KFZow(Qe, 1) && ajdunQ.sinuO(Qe, Qe);
            }
          }
        }
        for (let Qr = 0; QG.AOgrt(Qr, S.char.length); Qr++) {
          if (QG.lTNuA(QG.bohre, QG.hSBHM)) {
            let Qk = S.char[Qr];
            Qk && (S.hp[Qk] = S.maxhp[Qk]);
          } else Qr.forceAttack = QV.max(-1, QF.min(999, QG.kLEMg(QG.zpkxm(h.forceAttack ?? -1, 0), Qr)));
        }
      } else {
        if (QV) return "  turn " + QG.VKuGv(n.turn, 0);
        let Ql = QG.zpkxm(QV.turntimer, 0);
        return QG.WIHKX(QF.mnfight, 2) && QG.sClUU(Ql, 0) ? "  atk " + Ql + 'f' : '';
      }
    }]);
  }
  ["itemRows"](Q, Z) {
    const QG = {
      'lcTiM': function (Qa, QR) {
        return Qa < QR;
      },
      'prvcv': function (Qa, QR) {
        return Qa > QR;
      },
      'aHTyY': function (Qa, QR) {
        return Qa - QR;
      },
      'XEyOA': function (Qa, QR) {
        return Qa + QR;
      },
      'jBWKP': function (Qa, QR) {
        return Qa >= QR;
      },
      'MFZbE': function (Qa, QR) {
        return Qa(QR);
      },
      'JHwRd': "ITEMS",
      'ShuRG': function (Qa, QR) {
        return Qa < QR;
      }
    };
    Z("ITEMS");
    for (let Qa = 0; Qa < 8; Qa++) Q.push(["Slot " + (Qa + 1), () => Qd(S.item ? S.item[Qa] : 0), QR => {
      let QF = S.item && S.item[Qa] || 0,
        Qn = QI.findIndex(Qk => Qk.id === QF);
      if (Qn = Qn < 0 ? QR > 0 ? 0 : QI.length - 1 : Qn + QR, S.item || (S.item = []), Qn < 0) {
        S.item[Qa] = 0;
        return;
      }
      if (Qn >= QI.length) {
        S.item[Qa] = 0;
        return;
      }
      S.item[Qa] = QI[Qn].id;
    }]);
  }
  ["endRows"](Q) {
    const Z = {
      'vizCF': function (Qt, Qa) {
        return Qt === Qa;
      },
      'Ndndf': "vctTF",
      'FuWbu': "DZEJc",
      'DpkSe': function (Qt, Qa) {
        return Qt(Qa);
      },
      'isCcN': "eggs",
      'EKjUe': function (Qt, Qa) {
        return Qt + Qa;
      },
      'NPSIy': function (Qt, Qa) {
        return Qt * Qa;
      },
      'ZrfdL': "ceGrX",
      'vwDij': "IgJCQ",
      'RrvIk': function (Qt) {
        return Qt();
      },
      'bCAcF': "Egg debug",
      'ZGnYS': "Close"
    };
    D() && Q.push(["Egg debug", () => '', () => {
      let QF = v("eggs");
      QF && QF.openDebug && (this.open = false, QF.openDebug());
    }]), Q.push(["Close", () => '', () => {
      this.open = false;
    }]);
  }
  ["toggle"]() {
    const QG = {
      'YFEmz': function (QP, Qt) {
        return QP(Qt);
      },
      'wTuPL': "snd_select"
    };
    this.open = !this.open, this.sel = 0, this.buf = 2, this._rows = null, b("snd_select");
  }
  ["step"]() {
    const Z = {
      'lJpWT': function (Qn, QN) {
        return Qn !== QN;
      },
      'AysXI': "qrgHk",
      'QKkvV': function (Qn, QN) {
        return Qn < QN;
      },
      'VxTtX': function (Qn, QN) {
        return Qn % QN;
      },
      'spOYX': function (Qn, QN) {
        return Qn + QN;
      },
      'lDhJB': function (Qn, QN) {
        return Qn(QN);
      },
      'HMVwA': "snd_menumove",
      'JHzMc': function (Qn, QN) {
        return Qn >= QN;
      },
      'wsfsr': function (Qn, QN) {
        return Qn(QN);
      },
      'IkTcQ': "down",
      'EvUNs': function (Qn) {
        return Qn();
      },
      'YbbWz': function (Qn, QN) {
        return Qn(QN);
      },
      'JJlpt': "left",
      'TKtke': function (Qn) {
        return Qn();
      },
      'kOgjp': function (Qn, QN, Qe) {
        return Qn(QN, Qe);
      },
      'UgJjv': "right",
      'wYOgH': function (Qn, QN, Qe) {
        return Qn(QN, Qe);
      },
      'XJjKI': function (Qn, QN) {
        return Qn(QN);
      },
      'KrwBM': function (Qn) {
        return Qn();
      },
      'rfJBr': function (Qn, QN) {
        return Qn < QN;
      },
      'ELEEb': function (Qn, QN, Qe) {
        return Qn(QN, Qe);
      },
      'MuYAd': function (Qn, QN) {
        return Qn(QN);
      },
      'SQbIZ': "snd_select",
      'OOnJu': function (Qn, QN) {
        return Qn < QN;
      },
      'YdXUa': function (Qn, QN) {
        return Qn(QN);
      }
    };
    this.buf--, this.jewel++;
    let QG = this.rows(),
      QV = QG.length,
      QP = Qn => {
        let Qk = this.sel;
        for (let Ql = 0; Ql < QV && (Qk = (Qk + Qn + QV) % QV, !QG[Qk][2]); Ql++);
        this.sel = Qk, b("snd_menumove");
      };
    (this.sel >= QV || !QG[this.sel] || !QG[this.sel][2]) && QP(1), this.held("down", t()) && QP(1), this.held('up', P()) && QP(-1);
    let QR = QG[this.sel],
      QF = false;
    this.held("left", J()) && QR && QR[2] && (QR[2](-1), Qy(QG, this.sel), b("snd_menumove"), QF = true), this.held("right", V()) && QR && QR[2] && (QR[2](1), Qy(QG, this.sel), b("snd_menumove"), QF = true), m() && this.buf < 0 && QR && QR[2] && (QR[2](1), Qy(QG, this.sel), b("snd_select"), this.buf = 2, QF = true), i() && this.buf < 0 && (this.open = false, b("snd_menumove")), this._rows = QF ? null : QG;
  }
  ["draw"](Q) {
    const Z = {
        'zbGdT': function (Qe, Qr, Qk, Ql) {
          return Qe(Qr, Qk, Ql);
        },
        'wByPH': "[qPYeMZLMRDGiLivZWLYipriyjFOfMd]",
        'pCewa': "qaboPYeut:MZblLaMRDGinkLivZWLYipriyjFOfMd",
        'LAWZk': function (Qe, Qr) {
          return Qe !== Qr;
        },
        'nirNJ': "nmZUn",
        'oBxiN': "szgGD",
        'aZXzY': function (Qe, Qr) {
          return Qe(Qr);
        },
        'yBBgx': "left",
        'ZgdRT': "top",
        'nYEgv': function (Qe, Qr) {
          return Qe - Qr;
        },
        'BBzRQ': function (Qe, Qr) {
          return Qe + Qr;
        },
        'uOoQB': function (Qe, Qr) {
          return Qe + Qr;
        },
        'tLdNy': function (Qe, Qr) {
          return Qe + Qr;
        },
        'tyqPr': function (Qe, Qr) {
          return Qe + Qr;
        },
        'KNbnN': function (Qe, Qr) {
          return Qe / Qr;
        },
        'UPWpT': function (Qe, Qr) {
          return Qe < Qr;
        },
        'vUlMr': function (Qe, Qr) {
          return Qe + Qr;
        },
        'VrbuW': "XIIUG",
        'wKTpJ': "oynxX",
        'EdBWb': function (Qe, Qr) {
          return Qe !== Qr;
        },
        'ANceo': "HeIjv",
        'IqiFP': function (Qe, Qr) {
          return Qe(Qr);
        },
        'pboqi': function (Qe, Qr) {
          return Qe === Qr;
        },
        'bVJfM': "NLhol"
      },
      QG = {};
    QG.font = Q.font, QG.color = Q.color, QG.alpha = Q.alpha, QG.halign = Q.halign, QG.valign = Q.valign;
    let QV = QG,
      QP = this._rows || (this._rows = this.rows()),
      Qt = 13,
      Qa = this._first = Math.max(0, Math.min(this.sel - 7, QP.length - Qt)),
      QR = this.sel + '|' + Qa + '|' + QP.length + '|' + this.capturing + '|' + Math.floor((this.menu.cur_jewel || 0) / 10);
    for (let Qe = 0; Qe < Qt && Qa + Qe < QP.length; Qe++) {
      let Qr = QP[Qa + Qe];
      QR += '|' + Qr[0] + '=' + (Qr[1] ? Qr[1]() : '');
    }
    try {
      this.layer.paint(Q, 562, 422, Qq(Q), QR, Qh => QE(() => {
        QO(Qh), Qh.ctx.translate(-40, -30), Qh.draw_set_alpha(1), Qh.draw_set_halign("left"), Qh.draw_set_valign("top"), this.drawBody(Qh, QP, Qa);
      })), this.layer.blit(Q, 40, 30);
    } finally {
      Q.draw_set_font(QV.font), Q.draw_set_color(QV.color), Q.draw_set_alpha(QV.alpha), Q.draw_set_halign(QV.halign), Q.draw_set_valign(QV.valign);
    }
  }
  ["drawBody"](Q, Z, QG) {
    const QV = {
      'NHknr': function (Qn, QN) {
        return Qn - QN;
      },
      'EqiNI': function (Qn, QN) {
        return Qn < QN;
      },
      'bjzaQ': function (Qn, QN) {
        return Qn >> QN;
      },
      'uTehF': function (Qn, QN) {
        return Qn + QN;
      },
      'NgFTZ': function (Qn, QN) {
        return Qn <= QN;
      },
      'DluqD': function (Qn, QN) {
        return Qn - QN;
      },
      'QEUmK': function (Qn, QN) {
        return Qn - QN;
      },
      'ERWxC': "fnt_mainbig",
      'KkIsg': "DEBUG",
      'QlcMq': "fnt_main",
      'shFEe': function (Qn, QN) {
        return Qn < QN;
      },
      'DiWJz': function (Qn, QN) {
        return Qn >= QN;
      },
      'DjDKf': function (Qn, QN) {
        return Qn * QN;
      },
      'yIizo': function (Qn, QN) {
        return Qn === QN;
      },
      'RsYlL': function (Qn, QN) {
        return Qn !== QN;
      },
      'sJKYx': "Coodt",
      'uDqyC': "spr_heart",
      'GfMQs': "right",
      'YicAP': function (Qn, QN) {
        return Qn(QN);
      },
      'YWQdT': "left",
      'XbEmK': function (Qn, QN) {
        return Qn > QN;
      },
      'RSdZS': "spr_morearrow",
      'PNLZc': function (Qn, QN) {
        return Qn / QN;
      },
      'ovgAw': function (Qn, QN) {
        return Qn < QN;
      },
      'qeOiB': function (Qn, QN) {
        return Qn + QN;
      },
      'FzCfe': function (Qn, QN) {
        return Qn + QN;
      },
      'elkNW': function (Qn, QN) {
        return Qn * QN;
      },
      'iCGOE': "UP/DOWN row (hold to repeat)   LEFT/RIGHT change   Z toggle   X close"
    };
    Q.draw_set_color(X.black), Q.draw_set_alpha(1), Q.draw_rectangle(50, 40, 590, 440, false), this.menu.darkbox(Q, 40, 30, 600, 450), Q.draw_set_font("fnt_mainbig"), Q.draw_text(70, 48, "DEBUG", X.yellow), Q.draw_set_font("fnt_main"), Q.draw_text(220, 56, Z.filter(Qn => Qn[2]).length + " values", X.gray);
    let QR = 13,
      QF = 24;
    for (let Qn = 0; Qn < QR; Qn++) {
      let QN = QG + Qn;
      if (QN >= Z.length) break;
      let Qe = 90 + Qn * QF,
        Qr = Z[QN],
        Qk = QN === this.sel;
      if (!Qr[2]) {
        Q.draw_text(70, Qe, Qr[0], X.gray);
        continue;
      }
      Qk && Q.draw_sprite("spr_heart", 0, 70, Qe + 2), Q.draw_text(96, Qe, Qr[0], Qk ? X.yellow : X.white), Q.draw_set_halign("right"), Q.draw_text(560, Qe, String(Qr[1]()), Qk ? X.yellow : X.white), Q.draw_set_halign("left");
    }
    QG > 0 && Q.draw_sprite_ext("spr_morearrow", 0, 320, 78, 1, -1, 0, X.white, 1), QG + QR < Z.length && Q.draw_sprite_ext("spr_morearrow", 0, 320, 92 + QR * QF, 1, 1, 0, X.white, 1), Q.draw_text(70, 418, "UP/DOWN row (hold to repeat)   LEFT/RIGHT change   Z toggle   X close", X.gray);
  }
};
R(Qo, "BattleDebug");
var QC = Qo;
function QT() {
  const Q = {};
  Q.PbLmA = function (QR, QF) {
    return QR >> QF;
  }, Q.hobqf = function (QR, QF) {
    return QR + QF;
  }, Q.kuhrR = function (QR, QF) {
    return QR <= QF;
  }, Q.xVKon = function (QR, QF) {
    return QR - QF;
  }, Q.sNXWn = function (QR, QF) {
    return QR - QF;
  }, Q.vXETX = function (QR, QF) {
    return QR === QF;
  }, Q.LGHxw = function (QR, QF) {
    return QR === QF;
  }, Q.isiSF = function (QR, QF) {
    return QR | QF;
  };
  Q.fqOrE = function (QR, QF) {
    return QR == QF;
  }, Q.rdUdO = "function", Q.mcJem = "obj_monsterparent", Q.atAqn = function (QR, QF) {
    return QR in QF;
  }, Q.nWVra = "myattackchoice", Q.sgdId = function (QR, QF) {
    return QR != QF;
  }, Q.aXCPY = "RaCqO";
  Q.OiTrA = function (QR, QF) {
    return QR in QF;
  }, Q.xkeUj = function (QR, QF) {
    return QR >= QF;
  }, Q.aRrxc = function (QR, QF) {
    return QR !== QF;
  }, Q.WXDjc = function (QR, QF) {
    return QR !== QF;
  }, Q.EmhrR = function (QR, QF) {
    return QR < QF;
  };
  Q.wFORu = function (QR, QF) {
    return QR === QF;
  }, Q.fTbNm = "obj_bulletgenparent", Q.PKEUd = "type";
  const QP = Q;
  let Qt = QP.vXETX(S.forceAttack, void 0) || QP.LGHxw(S.forceAttack, null) ? -1 : QP.isiSF(S.forceAttack, 0),
    Qa = false;
  for (let QR of a.list) if (!QR.destroyed && QP.fqOrE(typeof QR.is, QP.rdUdO) && QR.is(QP.mcJem) && QP.atAqn(QP.nWVra, QR)) {
    Qa = true;
    break;
  }
  for (let QF of a.list) if (!(QF.destroyed || QP.sgdId(typeof QF.is, QP.rdUdO))) {
    if (Qa) {
      if (QP.vXETX(QP.aXCPY, QP.aXCPY)) {
        if (!QF.is(QP.mcJem) || !QP.OiTrA(QP.nWVra, QF)) continue;
        let Qn = QF.__forcedAtk;
        if (QP.xkeUj(Qt, 0) && QP.aRrxc(Qn, Qt) && QP.WXDjc(S.mnfight, 2)) {
          let QN = Qt;
          Object.defineProperty(QF, QP.nWVra, {
            'get': () => QN,
            'set'() {},
            'configurable': true,
            'enumerable': true
          }), QF.__forcedAtk = QN;
        } else QP.EmhrR(Qt, 0) && QP.aRrxc(Qn, void 0) && (delete QF.myattackchoice, QF.myattackchoice = Qn, delete QF.__forcedAtk);
      } else {
        let Qe = QP.PbLmA(QP.hobqf(QP.hobqf(Qt, Qa), 1), 1);
        QP.kuhrR(c.string_width(QF.slice(0, Qe)), QP.xVKon(Q0, 12)) ? Q1 = Qe : Q2 = QP.sNXWn(Qe, 1);
      }
    } else QP.xkeUj(Qt, 0) && QP.wFORu(QF.__forcedAtk, void 0) && QF.is(QP.fTbNm) && QP.OiTrA(QP.PKEUd, QF) && (QF.type = Qt, QF.__forcedAtk = Qt);
  }
}
R(QT, "forceAttackTick");
function Qb(Q, Z, QG, QV) {
  const QP = {
    'RqGFv': function (Qn, QN) {
      return Qn + QN;
    },
    'qKEnn': function (Qn, QN) {
      return Qn * QN;
    },
    'iRDvN': function (Qn, QN) {
      return Qn(QN);
    },
    'ulObq': "left",
    'lfqjl': "top",
    'KMuRT': function (Qn, QN) {
      return Qn === QN;
    },
    'zmZiU': "BTOfL",
    'ItZSI': function (Qn, QN) {
      return Qn > QN;
    },
    'qYaVY': function (Qn, QN) {
      return Qn <= QN;
    },
    'fKQnh': function (Qn, QN) {
      return Qn === QN;
    },
    'qTTqb': "nTnGM",
    'wMfXp': function (Qn, QN) {
      return Qn - QN;
    },
    'tLOEJ': function (Qn, QN) {
      return Qn === QN;
    },
    'HLITn': "DEXcR",
    'xQgbj': function (Qn, QN) {
      return Qn < QN;
    },
    'GAEfB': function (Qn, QN) {
      return Qn === QN;
    },
    'HmzYw': "DwgjT",
    'QetcW': "AUjpy",
    'ZAMgr': function (Qn, QN) {
      return Qn >> QN;
    },
    'NKXag': function (Qn, QN) {
      return Qn + QN;
    },
    'mTBIe': function (Qn, QN) {
      return Qn + QN;
    },
    'Sgsbl': function (Qn, QN) {
      return Qn <= QN;
    },
    'AKJKC': function (Qn, QN) {
      return Qn - QN;
    },
    'hVrLt': function (Qn, QN) {
      return Qn - QN;
    },
    'lmdNY': function (Qn, QN) {
      return Qn < QN;
    },
    'iCJgl': function (Qn, QN) {
      return Qn > QN;
    }
  };
  let Qa = 4;
  for (let [Qn, QN] of Z) {
    if (QP.KMuRT(QP.zmZiU, QP.zmZiU)) {
      if (QP.ItZSI(QP.RqGFv(Qa, QV), Q.ctx.canvas.height)) break;
      let Qe = QP.iRDvN(String, Qn);
      for (; Qe && QP.qYaVY(QP.RqGFv(Qa, QV), Q.ctx.canvas.height);) {
        if (QP.fKQnh(QP.qTTqb, QP.qTTqb)) {
          let Qr = Qe.length;
          if (QP.ItZSI(Q.string_width(Qe), QP.wMfXp(QG, 12))) {
            if (QP.tLOEJ(QP.HLITn, QP.HLITn)) {
              let Qk = 1,
                Ql = QP.wMfXp(Qe.length, 1);
              for (; QP.xQgbj(Qk, Ql);) {
                if (QP.GAEfB(QP.HmzYw, QP.QetcW)) QV.hp[QP] = Qa.max(-Qn.maxhp[QN], Qe.min(Qr.maxhp[Qk], LFRcsE.RqGFv(Ql.hp[Q9], LFRcsE.qKEnn(QQ, 10))));else {
                  let QU = QP.ZAMgr(QP.NKXag(QP.mTBIe(Qk, Ql), 1), 1);
                  QP.Sgsbl(Q.string_width(Qe.slice(0, QU)), QP.AKJKC(QG, 12)) ? Qk = QU : Ql = QP.hVrLt(QU, 1);
                }
              }
              Qr = Qk;
            } else {
              Z.hp = 0;
              return;
            }
          }
          if (QP.lmdNY(Qr, Qe.length)) {
            let Qh = Qe.lastIndexOf('\x20\x20', Qr);
            QP.iCJgl(Qh, 8) && (Qr = Qh);
          }
          Q.draw_text(6, Qa, Qe.slice(0, Qr).trim(), QN), Qe = Qe.slice(Qr).trim(), Qa += QV;
        } else return false;
      }
    } else LFRcsE.iRDvN(c, QG), QV.ctx.translate(-40, -30), QP.draw_set_alpha(1), Qa.draw_set_halign(LFRcsE.ulObq), Qn.draw_set_valign(LFRcsE.lfqjl), this.drawBody(QN, Q5, Q6);
  }
}
R(Qb, "stripLines");
const QM = {};
QM.sig = '', QM.t = -1000000000, QM.W = 0x0, QM.H = 0x0;
var Qj = QM;
function QX(Q, Z, QG) {
  const Qt = {
    'DJkhL': function (Qe, Qr) {
      return Qe + Qr;
    },
    'gqtLy': function (Qe, Qr) {
      return Qe * Qr;
    },
    'sXgJJ': function (Qe, Qr) {
      return Qe !== Qr;
    },
    'SKopE': "GTdYl",
    'EirEB': "fTgKK",
    'IDWiz': function (Qe, Qr, Qk, Ql) {
      return Qe(Qr, Qk, Ql);
    },
    'yWqeD': function (Qe, Qr) {
      return Qe(Qr);
    },
    'VVwmh': "eggs",
    'VcdoE': function (Qe) {
      return Qe();
    },
    'ghmJD': function (Qe, Qr) {
      return Qe === Qr;
    },
    'FgrlB': function (Qe, Qr) {
      return Qe < Qr;
    },
    'fysZO': function (Qe, Qr) {
      return Qe - Qr;
    },
    'Iqwck': function (Qe, Qr) {
      return Qe === Qr;
    },
    'LxMXy': "VcMva",
    'aJQJr': function (Qe, Qr) {
      return Qe === Qr;
    },
    'YDRel': function (Qe, Qr) {
      return Qe < Qr;
    },
    'zpDKQ': function (Qe, Qr) {
      return Qe - Qr;
    },
    'kwozm': "YQdGk",
    'oNlei': function (Qe, Qr) {
      return Qe == Qr;
    },
    'queTX': "function",
    'UYmho': function (Qe, Qr, Qk) {
      return Qe(Qr, Qk);
    },
    'eGFrl': function (Qe, Qr) {
      return Qe + Qr;
    },
    'sQbIE': function (Qe, Qr) {
      return Qe - Qr;
    },
    'GvSVE': function (Qe, Qr) {
      return Qe(Qr);
    },
    'JqlDy': "#000",
    'wGUrO': "fnt_main",
    'IcnhB': function (Qe, Qr, Qk, Ql, QU) {
      return Qe(Qr, Qk, Ql, QU);
    },
    'OBUaa': function (Qe, Qr) {
      return Qe + Qr;
    }
  };
  let Qa = Q.ctx,
    QR = Qa.canvas.width,
    QF = Qa.canvas.height,
    Qn = Qx();
  if (!(QG === Qj.sig && QR === Qj.W && QF === Qj.H && Qn - Qj.t < 1000)) {
    if (QR === Qj.W && QF === Qj.H && Qn - Qj.t < 100 && Qj.throttle) {
      Qj.pending = [Q, Z, QG], !Qj.timer && typeof setTimeout == "function" && (Qj.timer = setTimeout(() => {
        Qj.timer = 0;
        let Ql = Qj.pending;
        Qj.pending = null, Ql && (Qj.t = -1000000000, QX(Ql[0], Ql[1], Ql[2]));
      }, 100 - (Qn - Qj.t) + 1));
      return;
    }
    if (Qj.pending = null, Qj.sig = QG, Qj.t = Qn, Qj.W = QR, Qj.H = QF, QO(Q), Qa.fillStyle = "#000", Qa.fillRect(0, 0, QR, QF), Q.draw_set_font("fnt_main"), Z.single) {
      Q.draw_text(6, 4, Z[0][0], Z[0][1]);
      return;
    }
    Qb(Q, Z, QR, Q.lineHeight("fnt_main") + 4);
  }
}
R(QX, "paintStrip");
function Qw(Q, Z, QG, QV) {
  const QP = {
    'FxTax': function (QL, QY) {
      return QL / QY;
    },
    'jAqYC': function (QL, QY) {
      return QL * QY;
    },
    'qOMKo': function (QL, QY) {
      return QL !== QY;
    },
    'vXRrf': "ktFrp",
    'lOKLA': " TIRED",
    'UEHef': function (QL, QY) {
      return QL >= QY;
    },
    'eEptl': " SPARE",
    'cRTHr': function (QL, QY) {
      return QL !== QY;
    },
    'ZSQKw': function (QL, QY) {
      return QL === QY;
    },
    'dzTgO': "battle",
    'uOaAX': function (QL, QY) {
      return QL === QY;
    },
    'CSspy': "lab",
    'rKtWE': function (QL, QY, QA, Z0) {
      return QL(QY, QA, Z0);
    },
    'OpfJe': function (QL, QY) {
      return QL + QY;
    },
    'KCfnT': function (QL, QY) {
      return QL(QY);
    },
    'HCQVz': "intro",
    'YbRuI': function (QL) {
      return QL();
    },
    'WazMZ': "tap to skip",
    'wkFiw': "any key skips",
    'lwjwe': function (QL, QY, QA, Z0) {
      return QL(QY, QA, Z0);
    },
    'BLLej': function (QL, QY) {
      return QL === QY;
    },
    'JTIbD': "qaGxg",
    'TnUdr': "title",
    'IojUi': "TITLE",
    'kAtXi': "MENU",
    'Qdvja': function (QL, QY) {
      return QL + QY;
    },
    'yonRq': function (QL, QY) {
      return QL === QY;
    },
    'Xafth': "undertale",
    'cUeYy': function (QL, QY) {
      return QL | QY;
    },
    'uSCma': "menu",
    'IWXpg': "react",
    'kVbEr': "bullets",
    'mCfGF': "ending",
    'EDNXS': "end",
    'UIqJI': "talk",
    'EahaY': "attack",
    'nKiST': "fight",
    'CzQRo': "acted",
    'dPXbC': "question",
    'MIhgp': "item/mercy",
    'bUSKa': "act",
    'mXiiz': "spell",
    'AExYQ': "win",
    'PASeF': "commands",
    'tzvKE': "FIGHT target",
    'ejbXy': "ACT target",
    'TeHuG': "ACT list",
    'YRkgW': "ITEM p1",
    'KpBqs': "ITEM p2",
    'TDSPC': "MERCY",
    'RNQZs': "ITEM target",
    'yEySt': function (QL) {
      return QL();
    },
    'vtnPj': "obj_joker",
    'ScXHk': function (QL, QY) {
      return QL(QY);
    },
    'rFaAK': function (QL, QY) {
      return QL > QY;
    },
    'AhKqq': function (QL, QY) {
      return QL | QY;
    }
  };
  Qj.throttle = QG === "battle";
  let Qa = QL => QL.map(QY => QY[0] + '\x01' + QY[1]).join('\x02');
  if (QG === "lab") {
    let QL = [[Z + " FPS   ATTACK LAB", X.yellow]];
    QL.single = true, QX(Q, QL, "lab" + Qa(QL));
    return;
  }
  if (QG === "intro") {
    let QY = [[Z + " FPS   INTRO", X.gray], [O() ? "tap to skip" : "any key skips", X.dkgray]];
    QX(Q, QY, Qa(QY));
    return;
  }
  if (QG !== "battle") {
    let QA = [[Z + " FPS   logic 30/s   " + (QG === "title" ? "TITLE" : "MENU"), X.gray]];
    QA.single = true, QX(Q, QA, 'm' + Qa(QA));
    return;
  }
  let QF = QV && QV.game === "undertale",
    Qn = QF ? "CHARA LV " + (S.lv | 0) + "  HP " + S.hp + '/' + S.maxhp + "  AT " + S.at + " DF " + S.df : S.char.map((Z0, Z1) => Z0 ? (S.charname[Z0] || QH[Z0] || '?').slice(0, 6) + '\x20' + S.hp[Z0] + '/' + S.maxhp[Z0] + (Z1 === S.charturn ? '*' : '') : '').filter(Boolean).join('\x20\x20'),
    QN = QF ? {
      0x0: "menu",
      0x1: "react",
      0x2: "bullets",
      0x3: "ending"
    }[S.mnfight] ?? S.mnfight : {
      [-1]: "end",
      0x0: "menu",
      0x1: "talk",
      0x2: "attack",
      0x3e7: 'x'
    }[S.mnfight] ?? S.mnfight,
    Qe = QF ? {
      0x0: "menu",
      0x1: "fight",
      0x2: "acted",
      0x3: "question",
      0x4: "item/mercy"
    }[S.myfight] ?? S.myfight : {
      [-1]: '-',
      0x0: "menu",
      0x1: "fight",
      0x3: "act",
      0x4: "spell",
      0x7: "win"
    }[S.myfight] ?? S.myfight,
    Qr = QF ? {
      0x0: "commands",
      0x1: "FIGHT target",
      0x2: "ACT target",
      0xa: "ACT list",
      0x3: "ITEM p1",
      3.5: "ITEM p2",
      0x4: "MERCY",
      0x6: "question",
      0xb: "ITEM target"
    }[S.bmenuno] ?? S.bmenuno : S.bmenuno,
    Qk = [0, 1, 2].filter(Z0 => S.monster[Z0] === 1).map(Z0 => {
      const Z2 = {
        'zbXQU': function (Z5, Z6) {
          return Z5 / Z6;
        },
        'rFIxH': function (Z5, Z6) {
          return Z5 * Z6;
        }
      };
      let Z6 = QF ? (S.monsterinstance || [])[Z0] : null,
        Z7 = QF ? Z6 ? Z6.mercymod : void 0 : (S.mercymod || [])[Z0],
        Z8 = QF ? false : !!(S.monsterstatus || [])[Z0];
      return (S.monstername || [])[Z0] + '\x20' + (S.monsterhp || [])[Z0] + (Z8 ? " TIRED" : '') + (Z7 >= 100 ? " SPARE" : '') + (QF && Z7 !== void 0 ? " mercy " + Z7 : '');
    }).join('\x20\x20'),
    Ql = false;
  try {
    let Z0 = z();
    Ql = !!(Z0 && Z0.isDebugOpen && Z0.isDebugOpen());
  } catch {}
  let Qh = a.first("obj_joker"),
    Qc = Qh ? "  jturn " + Qh.jturn + " atk " + Qh.jattack + " hyp " + Qh.hypnosiscounter : '',
    QK = [[Z + " FPS  " + (QV ? QV.name : '') + Qm(QF) + (QF ? '' : "  TP " + Math.floor((S.tension || 0) / (S.maxtension || 250) * 100) + '%') + ((S.inv | 0) > 0 ? "  inv " + (S.inv | 0) : ''), X.gray], [Ql && D() ? "enemy:" + QN + " party:" + Qe + " menu " + Qr + (QF ? '' : "  slots " + S.char.length) + "  inst " + a.list.length + Qc : '', X.gray], [Qn, X.gray], [Qk, X.gray], [S.autoplayInfo || '', S.autoplayBeam ? X.yellow : X.dkgray]];
  QX(Q, QK, Qa(QK));
}
R(Qw, "drawInfoStrip");
function Qm(Q) {
  const QV = {};
  QV.RJxzR = function (QR, QF) {
    return QR | QF;
  };
  QV.vsBSn = function (QR, QF) {
    return QR | QF;
  }, QV.ICDPh = function (QR, QF) {
    return QR === QF;
  }, QV.YrcXd = function (QR, QF) {
    return QR > QF;
  };
  const Qt = QV;
  if (Q) return "  turn " + Qt.RJxzR(S.turn, 0);
  let Qa = Qt.vsBSn(S.turntimer, 0);
  return Qt.ICDPh(S.mnfight, 2) && Qt.YrcXd(Qa, 0) ? "  atk " + Qa + 'f' : '';
}
R(Qm, "stripTurn");
var Qi = {
  'layer': new l(),
  't': -1000000000,
  'frame': -1,
  'lines': null,
  'sig': ''
};
function QJ(Q, Z, QG, QV, QP = 28) {
  const Qt = {
    'UxmCx': function (QU, Qh) {
      return QU + Qh;
    },
    'EXjVX': function (QU, Qh) {
      return QU * Qh;
    },
    'CbYhN': function (QU, Qh) {
      return QU !== Qh;
    },
    'wdVCJ': "ppGSn",
    'HvIYC': "HrACZ",
    'wWlUC': function (QU, Qh) {
      return QU(Qh);
    },
    'qqRjz': "rgba(0,0,0,0.55)",
    'mmAzK': "fnt_main",
    'pEpjZ': "left",
    'ZyYEl': "top",
    'GHMtm': function (QU) {
      return QU();
    },
    'KxtBo': function (QU, Qh) {
      return QU >= Qh;
    },
    'uNPJs': function (QU, Qh) {
      return QU - Qh;
    },
    'WYoIC': function (QU, Qh) {
      return QU !== Qh;
    },
    'yZRCr': function (QU) {
      return QU();
    },
    'ZLKTm': function (QU, Qh) {
      return QU(Qh);
    },
    'VESjF': function (QU, Qh) {
      return QU === Qh;
    },
    'UPtCe': "utZjn",
    'QTFku': "MVAOG",
    'yhoan': function (QU, Qh) {
      return QU - Qh;
    },
    'NimBv': "zmJGH",
    'tJqNn': "SbGoA"
  };
  let QR = Qx();
  (!Qi.lines || QR - Qi.t >= 100 || QV && QG !== Qi.frame) && (Qi.lines = Z() || [], Qi.t = QR, Qi.frame = QG, Qi.sig = Qi.lines.join('\x0a'));
  let QF = Qi.lines;
  Qi.lh || (Qi.lh = QE(() => Q.lineHeight("fnt_main")) + 2);
  const Qn = {};
  Qn.font = Q.font, Qn.color = Q.color, Qn.alpha = Q.alpha, Qn.halign = Q.halign, Qn.valign = Q.valign;
  let Qr = Qi.lh,
    Qk = QF.length * Qr + 4,
    Ql = Qn;
  try {
    Qi.layer.paint(Q, 640, Qk, Qq(Q), Qi.sig, QU => QE(() => {
      QO(QU), QU.ctx.fillStyle = "rgba(0,0,0,0.55)", QU.ctx.fillRect(0, 0, 640, Qk), QU.draw_set_font("fnt_main"), QU.draw_set_halign("left"), QU.draw_set_valign("top"), QU.draw_set_alpha(1), QF.forEach((QL, QY) => QU.draw_text(6, 2 + QY * Qr, QL, QY === 0 ? "#7ad17a" : "#c0c0c0"));
    })), Qi.layer.blit(Q, 0, QP - 2);
  } finally {
    Q.draw_set_font(Ql.font), Q.draw_set_color(Ql.color), Q.draw_set_alpha(Ql.alpha), Q.draw_set_halign(Ql.halign), Q.draw_set_valign(Ql.valign);
  }
}
R(QJ, "drawPlannerReadout");
export { l as a, Q0 as b, Q1 as c, Q6 as d, Q7 as e, Q8 as f, Q9 as g, QZ as h, Qf as i, QO as j, QS as k, Qu as l, QC as m, QT as n, Qw as o, QJ as p };