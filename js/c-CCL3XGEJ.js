const S = function () {
  let Bb = true;
  return function (BO, Bj) {
    {
      const BC = Bb ? function () {
        if (Bj) {
          {
            const BG = Bj.apply(BO, arguments);
            Bj = null;
            return BG;
          }
        }
      } : function () {};
      Bb = false;
      return BC;
    }
  };
}();
const U = S(this, function () {
  const Bb = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Bd = new RegExp("[bDCLCFNHSzARKNETRWfOJLLRQqPROQRxbLGqLzBbjAUIVKLPPXXCjyZFfHqDkqZLxxBxkjQRRLxVOKKbPxVZCCGSxDzjXMzMjOjBYKzUzAZBVDfCxDCyOJTfMDFSRzMxAFzLTAfRNzTIjCAbRTzJCFRQHPVFZDTAODCOYxCNjEFBVRYAPIqNVVfzELBDPXLbUxJCKz]", "g");
  const BO = "bloDcCaLlhosCFNHSt;z127AR.0.0.1;dKNeETltRWafrOJuneLsLimRQ.cqomPROQ;wwRxbw.LdelGqtLazBbjrAUIuVnesKim.cLoPPm;drsXiXCmj.yZFfHqloDkqZLcaxxBlxhostk;.djQRRLxeltVOarunesimKK.pbaPgxeVsZCC.GdevSxDzjXMzMjOjBYKzUzAZBVDfCxDCyOJTfMDFSRzMxAFzLTAfRNzTIjCAbRTzJCFRQHPVFZDTAODCOYxCNjEFBVRYAPIqNVVfzELBDPXLbUxJCKz".replace(Bd, "").split(";");
  let Bj;
  let Bm;
  let Br;
  let BA;
  const Be = function (Bn, Bh, Bv) {
    {
      if (Bn.length != Bh) {
        return false;
      }
      for (let U8 = 0; U8 < Bh; U8++) {
        for (let U9 = 0; U9 < Bv.length; U9 += 2) {
          {
            if (U8 == Bv[U9] && Bn.charCodeAt(U8) != Bv[U9 + 1]) {
              return false;
            }
          }
        }
      }
      return true;
    }
  };
  const BC = function (Bn, Bh, Bv) {
    return Be(Bh, Bv, Bn);
  };
  const Bq = function (Bn, Bh, Bv) {
    return BC(Bh, Bn, Bv);
  };
  const BZ = function (Bn, Bh, Bv) {
    return Bq(Bh, Bv, Bn);
  };
  for (let Bn in Bb) {
    if (Be(Bn, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Bj = Bn;
      break;
    }
  }
  for (let Bh in Bb[Bj]) {
    {
      if (BZ(6, Bh, [5, 110, 0, 100])) {
        {
          Bm = Bh;
          break;
        }
      }
    }
  }
  for (let U0 in Bb[Bj]) {
    if (Bq(U0, [7, 110, 0, 108], 8)) {
      Br = U0;
      break;
    }
  }
  if (!(Bm < "~")) {
    for (let U1 in Bb[Bj][Br]) {
      {
        if (BC([7, 101, 0, 104], U1, 8)) {
          BA = U1;
          break;
        }
      }
    }
  }
  if (!Bj || !Bb[Bj]) {
    return;
  }
  const Bz = Bb[Bj][Bm];
  const BG = !!Bb[Bj][Br] && Bb[Bj][Br][BA];
  const Ba = Bz || BG;
  if (!Ba) {
    return;
  }
  let BH = false;
  for (let UU = 0; UU < BO.length; UU++) {
    {
      const UI = BO[UU];
      const Uk = UI[0] === String.fromCharCode(46) ? UI.slice(1) : UI;
      const UF = Ba.length - Uk.length;
      const Ux = Ba.indexOf(Uk, UF);
      const UJ = Ux !== -1 && Ux === UF;
      if (UJ) {
        {
          if (Ba.length == UI.length || UI.indexOf(".") === 0) {
            BH = true;
          }
        }
      }
    }
  }
  if (!BH) {}
});
U();
const F = function () {
  let Bm = true;
  return function (Br, BA) {
    const Bq = {
      iLPkX: function (Bz, BG) {
        return Bz === BG;
      },
      LDxfk: "drdnk"
    };
    const Bz = Bm ? function () {
      if (BA) {
        if (Bq.iLPkX(Bq.LDxfk, Bq.LDxfk)) {
          const BH = BA.apply(Br, arguments);
          BA = null;
          return BH;
        } else if (Bz) {
          if (t || w.value !== b) {
            d();
          }
          try {
            m.focus({
              preventScroll: true
            });
          } catch {
            A.focus();
          }
        }
      }
    } : function () {};
    Bm = false;
    return Bz;
  };
}();
const x = F(this, function () {
  const BO = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Bj = BO.console = BO.console || {};
  const Bm = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Br = 0; Br < Bm.length; Br++) {
    const BA = F.constructor.prototype.bind(F);
    const Be = Bm[Br];
    const BC = Bj[Be] || BA;
    BA.__proto__ = F.bind(F);
    BA.toString = BC.toString.bind(BC);
    Bj[Be] = BA;
  }
});
x();
import { k as J, l as M } from "./c-VB7PBWB7.js";
import { $ as E, D as R, Ga as Q, Ka as D, S as K, T, U as L, W as Y, X as y, da as N, ja as c, ka as t, la as i, ma as w, pa as b } from "./c-AXDRFE3U.js";
import { P as d, g as s, l as O, q as j, y as m } from "./c-ZQQWH6UG.js";
import { Ba as r, G as A, Pa as e, X as C, ea as q, hc as Z, xb as o } from "./c-PBMEVLU6.js";
import { a as G, i as f, l as a } from "./c-XSSGDLV7.js";
a();
var H = {
  geom: null,
  deckActive: false,
  menuDeck: false,
  topChips: false,
  pinTop: false,
  framed: false,
  _frozen: null,
  _ekey: ""
};
var n = null;
function h() {
  if (!n) {
    n = document.createElement("div");
    n.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)";
    document.body.appendChild(n);
  }
  let X = getComputedStyle(n);
  return {
    t: parseFloat(X.paddingTop) || 0,
    r: parseFloat(X.paddingRight) || 0,
    b: parseFloat(X.paddingBottom) || 0,
    l: parseFloat(X.paddingLeft) || 0
  };
}
G(h, "safeInsets");
var v;
function X0(X) {
  let P = X && X.touchpad || "AUTO";
  if (P === "ON") {
    return true;
  } else if (P === "OFF") {
    return false;
  } else {
    if (v === undefined) {
      v = window.matchMedia && window.matchMedia("(pointer: coarse)") || null;
    }
    return !!v && !!v.matches;
  }
}
G(X0, "isCoarse");
function X1(X) {
  if (!X) {
    H._frozen = null;
    return;
  }
  H._frozen = {
    W: window.innerWidth,
    H: window.innerHeight,
    portrait: window.innerHeight >= window.innerWidth,
    fs: X2()
  };
}
G(X1, "freezeGeometry");
var X2 = G(() => !!document.fullscreenElement || !!document.webkitFullscreenElement, "inFullscreen");
function X3() {
  let X = window.innerWidth;
  let P = window.innerHeight;
  let Bb = H._frozen;
  if (Bb && Bb.fs !== X2()) {
    H._frozen = {
      W: X,
      H: P,
      portrait: P >= X,
      fs: X2()
    };
  } else if (Bb && P >= X === Bb.portrait && Math.abs(X - Bb.W) < 4 && Math.abs(P - Bb.H) < 140) {
    X = Bb.W;
    P = Bb.H;
  }
  return {
    W: X,
    H: P
  };
}
G(X3, "viewport");
var X4 = G(X => Math.round(X) + "px", "px");
function X5(X, P, Bb) {
  let {
    W: Bd,
    H: BW
  } = X3();
  let BO = X0(Bb);
  let Bj = BW >= Bd;
  let Bm = BO ? h() : {
    t: 0,
    r: 0,
    b: 0,
    l: 0
  };
  let Br = BO ? Bj ? XX(Bd, BW, Bm) : XP(Bd, BW, Bm) : X6(Bd, BW, !Bb || Bb.showfps !== false, H.framed);
  H.geom = Br;
  X.style.width = X4(Br.canvas.w);
  X.style.height = X4(Br.canvas.h);
  if (Br.mode === "desktop") {
    X.style.position = "";
    X.style.left = "";
    X.style.top = "";
    X.style.marginTop = X4(Br.canvas.y);
    X.style.marginBottom = Br.framed ? X4(Math.floor(Br.scale * 30)) : "";
    document.body.classList.remove("shell-touch");
    if (P) {
      P.style.position = "";
      P.style.left = "";
      P.style.top = "";
      if (P.width !== 640 || P.height !== 48) {
        P.width = 640;
        P.height = 48;
      }
      P.style.display = Br.strip ? "" : "none";
      P.style.width = X4(Br.scale * 640);
      P.style.height = X4(Br.scale * 48);
    }
  } else {
    document.body.classList.add("shell-touch");
    X.style.position = "fixed";
    X.style.marginTop = "0";
    X.style.marginBottom = "";
    X.style.left = X4(Br.canvas.x);
    X.style.top = X4(Br.canvas.y);
    if (P) {
      if (!Bb || Bb.showfps !== false) {
        let BA = Math.min(380, Math.max(100, Br.info.w));
        let Be = Math.max(56, Math.min(96, Math.round(Br.info.h || 72)));
        P.style.display = "";
        P.style.position = "fixed";
        P.style.width = X4(BA);
        P.style.height = X4(Be);
        if (P.width !== BA || P.height !== Be) {
          P.width = BA;
          P.height = Be;
        }
        P.style.left = X4(Br.info.x);
        P.style.top = X4(Br.info.y);
      } else {
        P.style.display = "none";
      }
    }
  }
  return Br;
}
G(X5, "layout");
function X6(X, P, Bb = true, Bd = false) {
  if (Bd) {
    return X7(X, P, Bb);
  }
  let BW = 56;
  let BO = (X - 8) / 640;
  let Bj = (P - BW) / (480 + (Bb ? 48 : 0));
  let Bm = Math.max(0.2, Math.min(BO, Bj, 3));
  let Br = Math.round(Bm * 640);
  let BA = Math.round(Bm * 480);
  return {
    mode: "desktop",
    W: X,
    H: P,
    safe: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    scale: Bm,
    canvas: {
      x: Math.round((X - Br) / 2),
      y: 8,
      w: Br,
      h: BA
    },
    deck: null,
    pillarL: null,
    pillarR: null,
    strip: Bb,
    info: {
      x: 0,
      y: 0,
      w: Br,
      h: Math.round(Bm * 48)
    }
  };
}
G(X6, "desktopGeom");
function X7(X, P, Bb) {
  let Bd = Math.max(0.2, Math.min(X / 960, P / (540 + (Bb ? 48 : 0)), 3));
  let BW = Math.round(Bd * 640);
  let BO = Math.round(Bd * 480);
  let Bj = Math.round(Bd * 30);
  let Bm = Math.max(0, Math.floor((P - Bd * (540 + (Bb ? 48 : 0))) / 2));
  return {
    mode: "desktop",
    W: X,
    H: P,
    safe: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    scale: Bd,
    framed: true,
    canvas: {
      x: Math.round((X - BW) / 2),
      y: Bj + Bm,
      w: BW,
      h: BO
    },
    deck: null,
    pillarL: null,
    pillarR: null,
    strip: Bb,
    info: {
      x: 0,
      y: 0,
      w: BW,
      h: Math.round(Bd * 48)
    }
  };
}
G(X7, "framedGeom");
var X8 = 300;
var X9 = 44;
function XX(X, P, Bb) {
  let Bd = X - Bb.l - Bb.r;
  let BW = H.menuDeck || H.pinTop;
  let BO = Bb.t + (H.deckActive || BW && H.topChips ? X9 : BW ? 8 : 24);
  let Bj = Bd / 640;
  let Bm = (P - BO - Bb.b - X8) / 480;
  let Br = Math.max(0.2, Math.min(Bj, Bm, 3));
  let BA = Math.round(Br * 640);
  let Be = Math.round(Br * 480);
  let BC = Bb.l + Math.round((Bd - BA) / 2);
  let Bq = P - BO - Bb.b - Be;
  let BZ = H.deckActive || BW ? BO : BO + Math.max(0, Math.round(Bq / 2));
  let Bz = BZ + Be;
  return {
    mode: "portrait",
    W: X,
    H: P,
    safe: Bb,
    scale: Br,
    canvas: {
      x: BC,
      y: BZ,
      w: BA,
      h: Be
    },
    deck: {
      x: Bb.l,
      y: Bz,
      w: Bd,
      h: Math.max(0, P - Bb.b - Bz)
    },
    pillarL: null,
    pillarR: null,
    info: {
      x: Bb.l + 4,
      y: Bz + 2,
      w: Bd - 8,
      h: 0
    }
  };
}
G(XX, "portraitGeom");
var XV = 104;
function XP(X, P, Bb) {
  let Bd = X - Bb.l - Bb.r;
  let BW = P - Bb.t - Bb.b;
  let BO = Math.max(0.2, Math.min(BW / 480, (Bd - XV * 2) / 640, 3));
  let Bj = Math.round(BO * 640);
  let Bm = Math.round(BO * 480);
  let Br = Math.max(0, Math.floor((Bd - Bj) / 2));
  let BA = Bb.l + Br;
  let Be = Bb.t + Math.round((BW - Bm) / 2);
  return {
    mode: "landscape",
    W: X,
    H: P,
    safe: Bb,
    scale: BO,
    canvas: {
      x: BA,
      y: Be,
      w: Bj,
      h: Bm
    },
    deck: null,
    pillarL: {
      x: Bb.l,
      y: Bb.t,
      w: Br,
      h: BW
    },
    pillarR: {
      x: BA + Bj,
      y: Bb.t,
      w: Math.max(0, X - Bb.r - (BA + Bj)),
      h: BW
    },
    info: {
      x: Bb.l + 4,
      y: Bb.t + 4 + (H.menuDeck ? 36 : 76) + 8,
      w: Br - 8,
      h: 0
    }
  };
}
G(XP, "landscapeGeom");
function Xp(X, P, Bb) {
  let {
    W: Bd,
    H: BW
  } = X3();
  let BO = (X0(Bb) ? BW >= Bd ? "p" : "l" : "d") + ":" + Bd + "x" + BW + ":" + (!Bb || Bb.showfps !== false ? 1 : 0) + (H.framed ? "b" : "") + ":" + (H.deckActive ? 1 : 0) + (H.menuDeck ? "m" : "") + (H.pinTop ? "p" : "") + (H.topChips ? "c" : "") + (X2() ? "F" : "");
  if (BO === H._ekey && H.geom) {
    return H.geom;
  } else {
    H._ekey = BO;
    return X5(X, P, Bb);
  }
}
G(Xp, "ensure");
H.layout = X5;
H.ensure = Xp;
H.freeze = X1;
H.isCoarse = X0;
a();
a();
a();
var Xl = {
  bg: "#000000",
  fg: "#ffffff",
  sel: "#ffff00",
  dim: "#808080",
  box: "#1a1426",
  warn: "#ff8000"
};
var XS = {
  willReadFrequently: true
};
var Xu = new Map();
var XB = 0;
var XU = new WeakMap();
var XI = new Map();
function Xk(X, P) {
  let Bb = XF(X) + ":" + P;
  let Bd = XI.get(Bb);
  if (Bd) {
    return Bd;
  }
  Bd = document.createElement("canvas");
  Bd.width = X.img.width;
  Bd.height = X.img.height;
  let BW = Bd.getContext("2d", XS);
  BW.drawImage(X.img, 0, 0);
  BW.globalCompositeOperation = "source-in";
  BW.fillStyle = P;
  BW.fillRect(0, 0, Bd.width, Bd.height);
  if (XI.size >= 32) {
    XI.delete(XI.keys().next().value);
  }
  XI.set(Bb, Bd);
  return Bd;
}
G(Xk, "tintOf");
var XF = G(X => {
  if (!X || typeof X != "object") {
    return 0;
  }
  let P = XU.get(X);
  if (!P) {
    P = ++XB;
    XU.set(X, P);
  }
  return P;
}, "fontId");
var Xx = G((X, P, Bb, Bd, BW) => X + ":" + (typeof P == "string" ? P : "") + "#" + XF(Bb) + ":" + Bd + ":" + BW, "keyOf");
function XJ(X, P, Bb, Bd) {
  let BW = typeof P == "string" ? Z[P] : P;
  return Xu.has(Xx(X, P, BW, Bb, Bd));
}
G(XJ, "textMade");
function XM(X, Bb = "fnt_mainbig", Bd = 3, BW = "#ffffff") {
  let BO = typeof Bb == "string";
  let Bj = BO ? Z[Bb] : Bb;
  let Bm = Xx(X, Bb, Bj, Bd, BW);
  let Br = Xu.get(Bm);
  if (Br !== undefined) {
    return Br;
  }
  if (!Bj || !Bj.img || !Bj.img.width) {
    return null;
  }
  let BA = Ba => Bj.glyphs[Ba.charCodeAt(0)] || Bj.glyphs[63];
  let Be = 0;
  let BC = 0;
  for (let Ba of X) {
    let BH = BA(Ba);
    if (BH) {
      Be += BH[4];
      if (BH[3] > BC) {
        BC = BH[3];
      }
    }
  }
  if (!Be || !BC) {
    Xu.set(Bm, null);
    return null;
  }
  let Bq = Xk(Bj, BW);
  let BZ = document.createElement("canvas");
  BZ.width = Be * Bd;
  BZ.height = BC * Bd;
  let Bz = BZ.getContext("2d", XS);
  Bz.imageSmoothingEnabled = false;
  let BG = 0;
  for (let Bn of X) {
    let Bh = BA(Bn);
    if (!Bh) {
      continue;
    }
    let [Bv, Bg, U0, U1, U2, U3] = Bh;
    if (U0 > 0 && U1 > 0) {
      Bz.drawImage(Bq, Bv, Bg, U0, U1, Math.round((BG + U3) * Bd), 0, U0 * Bd, U1 * Bd);
    }
    BG += U2;
  }
  let Bf = {
    u: BZ.toDataURL(),
    w: BZ.width,
    h: BZ.height
  };
  Xu.set(Bm, Bf);
  return Bf;
}
G(XM, "textInfo");
var XE = false;
function XR() {
  if (XE) {
    return;
  }
  XE = true;
  let X = document.createElement("style");
  X.id = "dr-shell-style";
  X.textContent = "\n:root {\n  --dr-bg:" + Xl.bg + "; --dr-fg:" + Xl.fg + "; --dr-sel:" + Xl.sel + "; --dr-dim:" + Xl.dim + ";\n  --dr-box:" + Xl.box + "; --dr-warn:" + Xl.warn + ";\n  --dr-body: -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif;\n  --ui-face:hsl(272,40%,8%); --ui-plate:hsl(272,38%,13%); --ui-dim:hsl(272,28%,26%); --ui-soft:hsl(272,26%,64%); --ui-lit:hsl(272,46%,60%);\n}\n/* The canvas leaves the flex column in touch mode and is placed by Shell. */\nbody.shell-touch { display:block; padding:0; min-height:100dvh; }\nbody.shell-touch #loading { display:none; }\n\n#dr-deck { position:fixed; left:0; top:0; width:100%; height:100%; z-index:10;\n           pointer-events:none; font-family:var(--dr-body); -webkit-user-select:none; user-select:none;\n           -webkit-tap-highlight-color:transparent; -webkit-touch-callout:none; }\n#dr-deck * { box-sizing:border-box; }\n#dr-deck .w { position:absolute; z-index:2; pointer-events:auto; touch-action:none; display:none;\n              align-items:center; justify-content:center;\n              background-color:var(--ui-plate); background-repeat:no-repeat; image-rendering:pixelated; color:#f4f4f4;\n              clip-path:var(--st4); font-family:var(--dr-body); font-size:15px; line-height:1.15; }\n#dr-deck .w.on { display:flex; }\n#dr-deck .w.hit { filter:brightness(1.35); }\n#dr-deck .w.sel { background-color:var(--ui-dim); }\n#dr-deck .w.off { opacity:.45; }\n/* the lit row carries the SOUL, as every menu does */\n#dr-deck .cmd.sel::before, #dr-deck .cell.sel::before { content:''; position:absolute; left:8px; top:50%; width:16px; height:16px; margin-top:-8px;\n              background:var(--ui-heart) center/16px 16px no-repeat; image-rendering:pixelated; }\n\n/* a drawer behind a list of rows */\n#dr-deck .panel { z-index:1; pointer-events:none; background:#000; clip-path:var(--st8); isolation:isolate; }\n#dr-deck .panel::before, #dr-deck .panel::after { content:''; position:absolute; z-index:-1; }\n#dr-deck .panel::before { inset:2px; background:var(--ui-dim); clip-path:var(--st6); }\n#dr-deck .panel::after { inset:6px; background:var(--ui-face); clip-path:var(--st4); }\n\n/* grid cells and target rows: label left, meta right */\n#dr-deck .cell { justify-content:space-between; padding:0 8px 0 28px; text-align:left; }\n#dr-deck .cell .lb, #dr-deck .cell .mt { display:block; flex:none; overflow:hidden; white-space:nowrap; }\n\n/* the spell/ACT description. At 0.5969 the port draws this starting past the right edge of a 390px\n   screen, so on a phone it is literally unreadable. Same string, shown where a thumb can read it -\n   the ported draw is not moved. */\n#dr-deck .desc { background:transparent; clip-path:none; display:none; align-items:flex-start; justify-content:flex-start; flex-direction:column; padding:0 8px; }\n#dr-deck .desc.on { display:flex; }\n\n/* attack-bar press strips: the one moment the port asks for a few-pixel timing window */\n#dr-deck .press { background-color:var(--ui-dim); clip-path:var(--st6); }\n\n/* the floating stick: a capture zone with no plate, and its base drawn where the thumb landed */\n#dr-deck .zone { background:transparent; clip-path:none; }\n#dr-deck .util.recede { opacity:.2; pointer-events:none; }\n#dr-deck .ring, #dr-deck .ghost { position:absolute; z-index:1; pointer-events:none; display:none; clip-path:none; background-color:transparent; }\n#dr-deck .ring.on { display:block; }\n#dr-deck .ghost { opacity:.18; }\n#dr-deck .ghost.on { display:block; }\n#dr-deck .nub { position:absolute; z-index:1; pointer-events:none; clip-path:none; background-color:transparent; width:26px; height:26px; display:none; }\n#dr-deck .nub.on { display:block; }\n#dr-deck .rnd { clip-path:none; background-color:transparent; }\n#dr-deck .rnd.recede { opacity:.25; pointer-events:none; }\n";
  document.head.appendChild(X);
}
G(XR, "mountStyle");
a();
var XQ = "#f4f4f4";
var XD = "#cfcfcf";
var XK = "#a8a8a8";
var XT = "#e6c65c";
var XL = "#8f8f8f";
var Xy = {
  face: "hsl(272,40%,8%)",
  plate: "hsl(272,38%,13%)",
  dim: "hsl(272,28%,26%)",
  soft: "hsl(272,26%,64%)",
  lit: "hsl(272,46%,60%)"
};
var XN = 20;
var Xc = G(() => Q && Q.kit || null, "kit");
function Xi() {
  let Bd = Xc();
  if (!Bd) {
    return Xy;
  }
  try {
    {
      let Be = Bd.state();
      return Bd.pal(Math.round(Be.h), Be.s);
    }
  } catch {
    return Xy;
  }
}
G(Xi, "palette");
function Xw(X) {
  let Bd = Xc();
  if (Bd) {
    return Bd.natural(X);
  } else {
    return String(X);
  }
}
G(Xw, "natural");
function Xb(X) {
  let BW = [[0, X]];
  for (let Br = 2; Br <= X; Br += 2) {
    BW.push([Br, X - Br + 2], [Br, X - Br]);
  }
  let Bj = (BA, Be) => Be ? "calc(100% - " + BA + "px)" : BA + "px";
  let Bm = (BA, Be) => ([BC, Bq]) => Bj(BC, BA) + " " + Bj(Bq, Be);
  return "polygon(" + [...BW.map(Bm(false, false)), ...[...BW].reverse().map(Bm(true, false)), ...BW.map(Bm(true, true)), ...[...BW].reverse().map(Bm(false, true))].join(",") + ")";
}
G(Xb, "stairClip");
var Xd = G(X => X + " { background:#000; clip-path:var(--st8); isolation:isolate; }\n" + X + "::before, " + X + "::after { content:''; position:absolute; z-index:-1; pointer-events:none; }\n" + X + "::before { inset:2px; background:var(--ui-dim); clip-path:var(--st6); }\n" + X + "::after { inset:6px; background:var(--ui-face); clip-path:var(--st4); }", "PANEL");
var XW = "";
var Xs = "";
var XO = 0;
var Xj = false;
function Xm(X = false) {
  if (typeof document === "undefined") {
    return;
  }
  let Bd = performance.now();
  if (!X && Bd - XO < 200) {
    return;
  }
  XO = Bd;
  let BO = document.documentElement.style;
  if (!Xj) {
    Xj = true;
    for (let BA of [2, 4, 6, 8]) {
      BO.setProperty("--st" + BA, Xb(BA));
    }
    BO.setProperty("--ui-heart", "url(assets/spr_heart_0.png)");
  }
  let Bm = Xi();
  let Br = Bm.face + Bm.plate + Bm.dim + Bm.soft + Bm.lit;
  if (Br !== XW) {
    if (!X && XW && Br !== Xs) {
      Xs = Br;
      return;
    }
    XW = Xs = Br;
    BO.setProperty("--ui-face", Bm.face);
    BO.setProperty("--ui-plate", Bm.plate);
    BO.setProperty("--ui-dim", Bm.dim);
    BO.setProperty("--ui-soft", Bm.soft);
    BO.setProperty("--ui-lit", Bm.lit);
  }
}
G(Xm, "syncSkin");
var XA = G(() => XW, "skinKey");
var XC = G(() => window.devicePixelRatio || 1, "dpr");
var Xq = null;
function XZ() {
  let BO = Z.fnt_main;
  if (BO && BO.img && BO.img.width && (!Xq || A === 1)) {
    Xq = BO;
  }
  return Xq || BO;
}
G(XZ, "menuFace");
var Xz = G(() => Math.max(1, Math.round(XC())), "inkK");
var XG = Xz;
function Xf(X, P = XQ, Bb = Xz()) {
  let Bj = XM(X, XZ(), 1, P);
  if (Bj) {
    return {
      u: Bj.u,
      w: Bj.w * Bb / XC(),
      h: Bj.h * Bb / XC()
    };
  } else {
    return null;
  }
}
G(Xf, "ink");
var Xa = Infinity;
var XH = false;
function Xn(X) {
  Xa = performance.now() + X;
  XH = false;
}
G(Xn, "inkBudget");
function Xh() {
  Xa = Infinity;
  return XH;
}
G(Xh, "inkDone");
function Xv(X, P) {
  if (Xa === Infinity || XJ(X, XZ(), 1, P) || performance.now() < Xa) {
    return false;
  } else {
    XH = true;
    return true;
  }
}
G(Xv, "late");
function Xg(X, P = Xz()) {
  let Bj = XZ();
  if (!Bj || !Bj.glyphs) {
    return null;
  }
  let Bm = 0;
  for (let Br of String(X)) {
    {
      let BA = Bj.glyphs[Br.charCodeAt(0)] || Bj.glyphs[63];
      if (BA) {
        Bm += BA[4];
      }
    }
  }
  return Bm * P / XC();
}
G(Xg, "inkW");
function V0(X, P, Bb = Xz()) {
  X = String(X);
  let Bj = Xg(X, Bb);
  if (Bj == null || !P || Bj <= P) {
    return X;
  }
  let Br = X.length;
  while (Br > 1 && Xg(X.slice(0, Br).trimEnd() + "..", Bb) > P) {
    Br--;
  }
  return X.slice(0, Br).trimEnd() + "..";
}
G(V0, "inkFit");
var V2 = new Map();
function V3(X, P = XD) {
  let Bd = X + P;
  let BW = V2.get(Bd);
  if (BW !== undefined) {
    return BW;
  }
  try {
    let Br = document.createElement("canvas");
    Br.width = Br.height = XN;
    D({
      ctx: Br.getContext("2d", {
        willReadFrequently: true
      })
    }, X, 2, 2, 2, P);
    BW = Br.toDataURL();
  } catch {
    BW = "";
  }
  V2.set(Bd, BW);
  return BW;
}
G(V3, "iconURL");
function V4(X, P) {
  let BW = P.word == null ? "" : String(P.word);
  let BO = P.col || XQ;
  let Bj = P.iconCol || BO;
  let Bm = BW + "|" + (P.icon || "") + "|" + BO + "|" + Bj + "|" + (P.left ?? "") + "|" + Xz() + "|" + (P.max || 0);
  let Br = XZ();
  if (X._lk === Bm && X._lf === Br) {
    return;
  }
  let BA = null;
  if (BW) {
    {
      if (Xv(BW, BO)) {
        return;
      }
      BA = Xf(BW, BO);
      if (!BA) {
        {
          X.textContent = BW;
          X.style.color = BO;
          X._lk = "";
          return;
        }
      }
      if (P.max && BA.w > P.max) {
        BA = Xf(BW, BO, XG()) || BA;
      }
    }
  }
  X._lk = Bm;
  X._lf = Br;
  X.textContent = "";
  let BC = P.icon ? V3(P.icon, Bj) : "";
  let Bq = [];
  let BZ = [];
  let Bz = [];
  let BG = BC && BA ? XN + 4 : 0;
  if (BA) {
    Bq.push("url(" + BA.u + ")");
    Bz.push(BA.w + "px " + BA.h + "px");
    BZ.push(P.left != null ? P.left + BG + "px center" : "calc(50% + " + BG / 2 + "px) center");
  }
  if (BC) {
    Bq.push("url(" + BC + ")");
    Bz.push(XN + "px " + XN + "px");
    BZ.push(P.left != null ? P.left + "px center" : "calc(50% - " + (BA ? (BA.w + 4) / 2 : 0) + "px) center");
  }
  X.style.backgroundImage = Bq.join(",");
  X.style.backgroundPosition = BZ.join(",");
  X.style.backgroundSize = Bz.join(",");
  X.style.backgroundRepeat = "no-repeat";
  X.style.imageRendering = "pixelated";
}
G(V4, "label");
var V5 = G((X, P) => Math.max(44, Math.ceil((X ? Xg(X) ?? String(X).length * 8 : 0) + (P ? XN + (X ? 4 : 0) : 0) + 20)), "chipW");
function V6(X, P, Bb = XQ, Bd = 0, BW = Xz()) {
  P = String(P ?? "");
  let BA = P + "|" + Bb + "|" + Bd + "|" + BW;
  let Be = XZ();
  if (X._lk === BA && X._lf === Be) {
    return;
  }
  if (!P) {
    {
      X._lk = BA;
      X.textContent = "";
      X.style.backgroundImage = "";
      X.style.width = "0px";
      X.style.height = "0px";
      return;
    }
  }
  let BC = V0(P, Bd, BW);
  if (Xv(BC, Bb)) {
    {
      if (X._lk) {
        X._lk = "";
        X.style.backgroundImage = "";
        X.style.width = (Xg(BC, BW) || 0) + "px";
      }
      return;
    }
  }
  let Bq = Xf(BC, Bb, BW);
  if (!Bq) {
    X._lk = "";
    X.textContent = BC;
    X.style.color = Bb;
    X.style.backgroundImage = "";
    X.style.width = "";
    X.style.height = "";
    X.style.fontSize = "14px";
    return;
  }
  X._lk = BA;
  X._lf = Be;
  X.textContent = "";
  X.style.backgroundImage = "url(" + Bq.u + ")";
  X.style.backgroundSize = Bq.w + "px " + Bq.h + "px";
  X.style.backgroundRepeat = "no-repeat";
  X.style.imageRendering = "pixelated";
  X.style.width = Bq.w + "px";
  X.style.height = Bq.h + "px";
}
G(V6, "inkSpan");
function V7(X, P, Bb = Xz()) {
  let BO = [];
  for (let Br of String(X).split("\n")) {
    {
      let Be = "";
      for (let BC of Br.split(" ")) {
        let Bq = Be ? Be + " " + BC : BC;
        if (Be && (Xg(Bq, Bb) ?? 0) > P) {
          BO.push(Be);
          Be = BC;
        } else {
          Be = Bq;
        }
      }
      BO.push(Be);
    }
  }
  return BO;
}
G(V7, "wrapLines");
function V8(X, P, Bb = XD, Bd = 300, BW = Xz()) {
  const Bj = {
    hBlXV: function (BC, Bq) {
      return BC(Bq);
    },
    uzQSr: function (BC, Bq) {
      return BC ?? Bq;
    },
    VcFMN: function (BC, Bq) {
      return BC + Bq;
    },
    wnWLR: function (BC, Bq) {
      return BC + Bq;
    },
    Xrkdp: function (BC) {
      return BC();
    },
    QzhGI: function (BC, Bq) {
      return BC === Bq;
    },
    NxLoj: function (BC, Bq) {
      return BC !== Bq;
    },
    ynfDi: "nrruy",
    UbnTv: "BukeN",
    dOIrZ: function (BC, Bq, BZ, Bz) {
      return BC(Bq, BZ, Bz);
    },
    Gvqjt: "rERLp",
    sykAo: "NnYHF",
    wAqid: function (BC, Bq) {
      return BC !== Bq;
    },
    mZETv: "hgKVw",
    LKIcE: "div",
    YILkH: "8px",
    jABwu: "img",
    ViMcI: "display:block;image-rendering:pixelated;margin:0 0 2px;max-width:none;"
  };
  P = Bj.hBlXV(String, Bj.uzQSr(P, ""));
  let BA = Bj.VcFMN(Bj.VcFMN(Bj.wnWLR(Bj.wnWLR(Bj.VcFMN(Bj.VcFMN(P, "|"), Bb), "|"), Bd), "|"), BW);
  let Be = Bj.Xrkdp(XZ);
  if (!Bj.QzhGI(X._bk, BA) || !Bj.QzhGI(X._lf, Be)) {
    if (Bj.NxLoj(Bj.ynfDi, Bj.ynfDi)) {
      BW[0][Bj] = BA;
      Be("b1");
    } else {
      if (!Be || !Be.img || !Be.img.width) {
        if (Bj.NxLoj(Bj.UbnTv, Bj.UbnTv)) {
          let BC = Y.target;
          if ((!BC || BC.tagName !== "INPUT" && BC.tagName !== "TEXTAREA" || BC === y) && (BC !== N || !Be(X) || !!w.ctrlKey || !!b.metaKey)) {
            if (d(BA)) {
              O.preventDefault();
            }
          }
        } else {
          X._bk = "";
          X.textContent = P;
          X.style.color = Bb;
          return;
        }
      }
      X._bk = BA;
      X._lf = Be;
      X.textContent = "";
      for (let Bq of Bj.dOIrZ(V7, P, Bd, BW)) {
        if (Bj.QzhGI(Bj.Gvqjt, Bj.sykAo)) {
          if (Bb()) {
            Bd.preventDefault();
          }
        } else {
          let BZ = Bq ? Bj.dOIrZ(Xf, Bq, Bb, BW) : null;
          if (!BZ) {
            if (Bj.wAqid(Bj.mZETv, Bj.mZETv)) {
              P = false;
            } else {
              let BG = document.createElement(Bj.LKIcE);
              BG.style.height = Bj.YILkH;
              X.appendChild(BG);
              continue;
            }
          }
          let Bz = document.createElement(Bj.jABwu);
          Bz.alt = Bq;
          Bz.src = BZ.u;
          Bz.width = BZ.w;
          Bz.height = BZ.h;
          Bz.style.cssText = Bj.ViMcI;
          X.appendChild(Bz);
        }
      }
    }
  }
}
G(V8, "block");
a();
var VX = "touch";
var VV = {
  tick: 6,
  select: 10,
  back: 8,
  press: 12,
  stick: 4,
  graze: 4,
  hurt: 28,
  heavy: [18, 30, 18],
  win: [12, 40, 12]
};
var VP = null;
var Vp = G(() => {
  if (VP === null) {
    VP = typeof navigator !== "undefined" && typeof navigator.vibrate == "function";
  }
  return VP;
}, "canVibrate");
var Vl = G(() => {
  try {
    return L();
  } catch {
    return false;
  }
}, "coarse");
var VS = G(() => t(VX, "haptics", true) !== false, "hapticsOn");
var Vu = 0;
var VB = "";
var VU = G(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
function VI(X = "tick") {
  if (!Vp() || !VS() || !Vl()) {
    return;
  }
  let BO = VV[X] ?? VV.tick;
  let Bj = VU();
  if (X === "hurt" || X !== VB || !(Bj - Vu < 50)) {
    {
      Vu = Bj;
      VB = X;
      try {
        navigator.vibrate(BO);
      } catch {}
    }
  }
}
G(VI, "haptic");
var VF = {
  snd_hurt1: "hurt",
  snd_menumove: "tick",
  snd_squeak: "tick",
  snd_select: "select",
  snd_graze: "graze",
  snd_criticalswing: "heavy",
  snd_damage: "select"
};
var Vx = false;
function VJ() {
  if (!Vx) {
    Vx = true;
    if (Array.isArray(e)) {
      e.push(BW => {
        {
          let Br = VF[BW];
          if (Br) {
            VI(Br);
          }
        }
      });
    }
    N({
      id: "touch.haptics",
      section: "TOUCH",
      label: "Vibration",
      owner: "touch",
      values: [true, false],
      get: () => VS(),
      set: BW => {
        i(VX, "haptics", !!BW);
        if (BW) {
          VI("select");
        }
      },
      desc: "Short vibrations on menu moves, confirms and taking damage (Android; iPhones have no vibration API)."
    });
  }
}
G(VJ, "installHaptics");
a();
a();
var VM = Math.PI / 180;
var VE = {
  battle: {
    on: 0.2,
    onPx: 0.024,
    off: 0.6,
    sectors: 8,
    hyst: VM * 10,
    settle: 0.05,
    drift: 0.08
  },
  menu: {
    on: 0.55,
    onPx: 0.06,
    off: 0.55,
    sectors: 4,
    hyst: VM * 10,
    settle: 0.09,
    drift: 0.12
  }
};
var VR = Math.tan(VM * 25);
var VQ = Math.tan(VM * 55);
var VD = 0.000001;
var VK = [["right"], ["right", "down"], ["down"], ["down", "left"], ["left"], ["left", "up"], ["up"], ["up", "right"]];
var VT = [["right"], ["down"], ["left"], ["up"]];
var VL = [5, 10, 15, 20, 25, 30, 35, 40];
var VY = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var Vy = 20;
var VN = 100;
var Vc = G((X, P) => Math.max(1, X * 100 / Math.max(10, P || VN)), "travelFor");
function Vi() {
  const BW = {
    on: false,
    mode: "battle",
    floating: true,
    travel: 1,
    dead: null,
    scale: 1,
    ax: 0,
    ay: 0,
    tx: 0,
    ty: 0,
    dx: 0,
    dy: 0,
    sector: -1,
    axis: null,
    landed: 0,
    clock: 0,
    settled: false,
    held: {
      left: false,
      right: false,
      up: false,
      down: false
    }
  };
  return BW;
}
G(Vi, "makeStick");
var Vw = G((X, P) => {
  let Bj = ((X - P) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  if (Bj > Math.PI) {
    return Math.PI * 2 - Bj;
  } else {
    return Bj;
  }
}, "angleDiff");
function Vb(X, P, Bb, Bd, BW) {
  let BA = Math.atan2(P, X);
  let Be = Math.PI * 2 / Bb;
  if (Bd >= 0 && Vw(BA, Bd * Be) <= Be / 2 + BW) {
    return Bd;
  } else {
    return (Math.floor(BA / Be + 0.5) % Bb + Bb) % Bb;
  }
}
G(Vb, "sectorOf");
function Vd(X) {
  let Bj = VE[X.mode];
  let Bm = Bj.on;
  if (X.dead != null) {
    Bm = X.mode === "battle" ? X.dead : Math.max(Bj.on, X.dead);
  }
  let Br = Math.max(Bm * X.travel, Bj.onPx * X.scale);
  return [Br, Br * Bj.off];
}
G(Vd, "limits");
function VW(X, P, Bb) {
  let Br = X.dx;
  let BA = X.dy;
  if (Math.hypot(Br, BA) < Bb) {
    X.axis = null;
    return -1;
  }
  let Be = Math.abs(Br);
  let BC = Math.abs(BA);
  let Bq = X.sector;
  if (Bq >= 0 && Bq < 4) {
    let Ba = Bq === 0 || Bq === 2;
    let BH = Ba ? Be : BC;
    let Bn = Ba ? BC : Be;
    if ((Ba ? Br : BA) * (Bq === 0 || Bq === 1 ? 1 : -1) > 0 && BH >= Bb && Bn <= BH * VQ) {
      return Bq;
    }
  }
  let BZ = Be >= BC;
  let Bz = BZ ? Be : BC;
  let BG = BZ ? BC : Be;
  let Bf = BZ ? "h" : "v";
  if (Bz < P || BG > Bz * VR || X.axis !== null && X.axis !== Bf) {
    return -1;
  } else {
    X.axis = Bf;
    if (BZ) {
      if (Br > 0) {
        return 0;
      } else {
        return 2;
      }
    } else if (BA > 0) {
      return 1;
    } else {
      return 3;
    }
  }
}
G(VW, "menuSector");
function VO(X) {
  let Bb = VE[X.mode];
  let [Bd, BW] = Vd(X);
  if (!X.on || !X.settled) {
    X.sector = -1;
    X.axis = null;
  } else if (X.mode === "menu") {
    X.sector = VW(X, Bd, BW);
  } else {
    let Be = Math.hypot(X.dx, X.dy);
    if (X.sector >= 0 ? Be >= BW : Be >= Bd) {
      X.sector = Vb(X.dx, X.dy, Bb.sectors, X.sector < Bb.sectors ? X.sector : -1, Bb.hyst);
    } else {
      X.sector = -1;
    }
  }
  let BA = {
    left: false,
    right: false,
    up: false,
    down: false
  };
  if (X.sector >= 0) {
    for (let BC of (X.mode === "battle" ? VK : VT)[X.sector]) {
      BA[BC] = true;
    }
  }
  X.held = BA;
}
G(VO, "evaluate");
function Vj(X, P, Bb) {
  X.tx = P;
  X.ty = Bb;
  if (X.floating && !X.settled) {
    X.ax = P;
    X.ay = Bb;
  }
  let Bm = P - X.ax;
  let Br = Bb - X.ay;
  let BA = Math.hypot(Bm, Br);
  if (X.floating && BA > X.travel) {
    let Be = (BA - X.travel) / BA;
    X.ax += Bm * Be;
    X.ay += Br * Be;
    Bm = P - X.ax;
    Br = Bb - X.ay;
  }
  X.dx = Bm;
  X.dy = Br;
  VO(X);
}
G(Vj, "track");
function Vm(X, P, Bb, Bd, BW) {
  X.on = true;
  X.mode = Bd.mode === "menu" ? "menu" : "battle";
  X.floating = !!Bd.floating;
  if (X.floating) {
    X.ax = P;
    X.ay = Bb;
  } else {
    X.ax = Bd.cx;
    X.ay = Bd.cy;
  }
  X.travel = Math.max(1, Bd.travel);
  X.dead = Bd.dead == null ? null : Bd.dead;
  X.scale = Math.max(1, Bd.scale);
  X.sector = -1;
  X.axis = null;
  X.landed = BW;
  X.clock = BW;
  X.settled = false;
  Vj(X, P, Bb);
}
G(Vm, "stickBegin");
function VA(X, P, Bb, Bd) {
  if (X.on) {
    VC(X, Bd);
    Vj(X, P, Bb);
  }
}
G(VA, "stickMove");
function Ve(X) {
  X.on = false;
  X.dx = X.dy = 0;
  X.sector = -1;
  X.axis = null;
  X.settled = false;
  VO(X);
}
G(Ve, "stickEnd");
function VC(X, P) {
  let BW = Math.max(0, P - X.clock);
  X.clock = P;
  if (!X.on) {
    return;
  }
  let Bm = VE[X.mode];
  if (!X.settled) {
    {
      if (P - X.landed >= Bm.settle - VD) {
        X.settled = true;
        X.dx = X.tx - X.ax;
        X.dy = X.ty - X.ay;
        VO(X);
      }
      return;
    }
  }
  if (X.floating && X.sector < 0) {
    {
      let BA = X.tx - X.ax;
      let Be = X.ty - X.ay;
      let BC = Math.hypot(BA, Be);
      if (BC > 0) {
        let Bq = Math.min(1, Bm.drift * X.scale * BW / BC);
        X.ax += BA * Bq;
        X.ay += Be * Bq;
        Vj(X, X.tx, X.ty);
      }
    }
  }
}
G(VC, "stickStep");
function Vq(X) {
  let BA = X.dx;
  let Be = X.dy;
  let BC = Math.hypot(BA, Be);
  if (BC > X.travel) {
    BA = BA / BC * X.travel;
    Be = Be / BC * X.travel;
  }
  return {
    x: X.ax,
    y: X.ay,
    dx: BA,
    dy: Be
  };
}
G(Vq, "stickKnob");
var VZ = XT;
function Vz(X, P) {
  let Br = document.createElement("canvas");
  Br.width = Br.height = X;
  P(Br.getContext("2d", {
    willReadFrequently: true
  }));
  return Br.toDataURL();
}
G(Vz, "paint");
function VG(X, P, Bb, Bd) {
  X.fillStyle = Bd;
  for (let Br = Math.floor(P - Bb); Br < P + Bb; Br++) {
    {
      let Be = Br + 0.5 - P;
      let BZ = Math.sqrt(Math.max(0, Bb * Bb - Be * Be));
      let Bz = Math.round(P - BZ);
      let BG = Math.round(P + BZ);
      if (BG > Bz) {
        X.fillRect(Bz, Br, BG - Bz, 1);
      }
    }
  }
}
G(VG, "disc");
var Vf = G(() => window.devicePixelRatio || 1, "dpi");
function Va(X, P) {
  let Bj = Xi();
  return Vz(P, Bm => {
    {
      let Bq = P / 2;
      VG(Bm, Bq, Bq, "#000");
      VG(Bm, Bq, Bq - 1, X ? Bj.lit : Bj.dim);
      VG(Bm, Bq, Bq - 2.5, X ? Bj.dim : Bj.plate);
    }
  });
}
G(Va, "paintButton");
function VH(X) {
  let Bd = Xi();
  let BW = Math.max(1, Math.round(X / 60));
  return Vz(X, Bm => {
    {
      let BC = X / 2;
      VG(Bm, BC, BC, "#000");
      VG(Bm, BC, BC - 1, Bd.dim);
      VG(Bm, BC, BC - 2.5, Bd.face);
      Bm.fillStyle = Bd.dim;
      let Bq = Math.round(BC - BW * 7);
      for (let BZ = 0; BZ < 3; BZ++) {
        let Bz = (BZ * 2 + 1) * BW;
        let BG = BW;
        let Bf = (3 - BZ) * BW;
        Bm.fillRect(Math.round(BC - Bz / 2), Math.round(BC - Bq - Bf), Bz, BG);
        Bm.fillRect(Math.round(BC - Bz / 2), Math.round(BC + Bq + Bf - BG), Bz, BG);
        Bm.fillRect(Math.round(BC - Bq - Bf), Math.round(BC - Bz / 2), BG, Bz);
        Bm.fillRect(Math.round(BC + Bq + Bf - BG), Math.round(BC - Bz / 2), BG, Bz);
      }
    }
  });
}
G(VH, "paintBase");
function Vh(X) {
  let BO = Xi();
  return Vz(X, Bj => {
    let BA = X / 2;
    VG(Bj, BA, BA, "#000");
    VG(Bj, BA, BA - 1, BO.dim);
    VG(Bj, BA, BA - 2.5, BO.plate);
  });
}
G(Vh, "paintKnob");
function Vv(X) {
  const P = {
    CyPlU: function (BW, BO) {
      return BW < BO;
    },
    QTiuP: function (BW, BO) {
      return BW === BO;
    },
    tLdhc: "GhoBR",
    nPegx: function (BW, BO) {
      return BW - BO;
    },
    uFobc: function (BW, BO) {
      return BW + BO;
    },
    FCPtk: function (BW, BO) {
      return BW - BO;
    },
    rHKPs: function (BW, BO) {
      return BW <= BO;
    },
    CRkUU: function (BW, BO) {
      return BW > BO;
    },
    RMnRY: function (BW, BO) {
      return BW === BO;
    },
    hAqPa: function (BW, BO) {
      return BW % BO;
    },
    MXjEM: function (BW, BO) {
      return BW * BO;
    },
    fYIIF: function (BW, BO) {
      return BW / BO;
    },
    cJNBd: function (BW, BO, Bj) {
      return BW(BO, Bj);
    }
  };
  return P.cJNBd(Vz, 64, BW => {
    BW.fillStyle = X;
    for (let Br = 0; P.CyPlU(Br, 64); Br++) {
      for (let BA = 0; P.CyPlU(BA, 64); BA++) {
        if (P.QTiuP(P.tLdhc, P.tLdhc)) {
          let Be = P.nPegx(P.uFobc(BA, 0.5), 32);
          let BC = P.FCPtk(P.uFobc(Br, 0.5), 32);
          let Bq = Math.hypot(Be, BC);
          if (P.rHKPs(Bq, P.nPegx(32, 0.5)) && P.CRkUU(Bq, P.nPegx(32, 2.7)) && P.RMnRY(P.hAqPa(Math.floor(P.MXjEM(P.fYIIF(P.uFobc(Math.atan2(BC, Be), Math.PI), P.MXjEM(2, Math.PI)), 24)), 2), 0)) {
            BW.fillRect(BA, Br, 1, 1);
          }
        } else {
          P = null;
        }
      }
    }
  });
}
G(Vv, "paintDash");
var P1 = new Map();
var P2 = G((X, P) => {
  let BW = P1.get(X);
  if (BW === undefined) {
    BW = P();
    P1.set(X, BW);
  }
  return BW;
}, "memo");
var P3 = G(X => X >= 150 ? 3 : 2, "pxOf");
var P4 = G(X => Math.max(14, Math.round(X / P3(X))), "artN");
var P5 = {
  U: "up",
  D: "down",
  L: "left",
  R: "right"
};
var P6 = {
  U: "next",
  D: "next",
  L: "back",
  R: "next"
};
function P7(X, P, Bb, Bd = "") {
  let BO = P4(Bb);
  let Bj = XA();
  let Bm = P + "|" + BO + "|" + Bj + "|" + Bd + "|" + Bb;
  if (X._art === Bm && X._artF === Z.fnt_main) {
    return;
  }
  let Be = Math.max(1, Math.round((Bb >= 56 ? 2 : 1.5) * Vf()));
  let BC = Xf(P, XQ, Be);
  let Bq = Xf(P, VZ, Be);
  if (!BC || !Bq) {
    {
      X.style.setProperty("--up", "url(" + P2("b" + BO + Bj, () => Va(false, BO)) + ")");
      X.style.setProperty("--dn", "url(" + P2("B" + BO + Bj, () => Va(true, BO)) + ")");
      X.style.setProperty("--lab", "none");
      X.style.setProperty("--labd", "none");
      return;
    }
  }
  while (BC.h > Bb * 0.42 && Be > 1) {
    Be--;
    BC = Xf(P, XQ, Be);
    Bq = Xf(P, VZ, Be);
  }
  X._art = Bm;
  X._artF = Z.fnt_main;
  X.textContent = "";
  let Bz = Bd ? Xf(Bd, XD, XG()) : null;
  let BG = Bz && Bz.w <= Bb - 12;
  let Bf = BG ? -Math.round((Bz.h + 2) / 2) : 0;
  let Ba = BG ? Math.round((BC.h + 2) / 2) : 0;
  X.style.setProperty("--up", "url(" + P2("b" + BO + Bj, () => Va(false, BO)) + ")");
  X.style.setProperty("--dn", "url(" + P2("B" + BO + Bj, () => Va(true, BO)) + ")");
  X.style.setProperty("--lab", "url(" + BC.u + ")" + (BG ? ",url(" + Bz.u + ")" : ""));
  X.style.setProperty("--labd", "url(" + Bq.u + ")" + (BG ? ",url(" + Bz.u + ")" : ""));
  let BH = BO * P3(Bb) + "px " + BO * P3(Bb) + "px";
  X.style.backgroundSize = BC.w + "px " + BC.h + "px," + (BG ? Bz.w + "px " + Bz.h + "px," : "") + BH;
  X.style.backgroundPosition = "center calc(50% + " + Bf + "px)," + (BG ? "center calc(50% + " + Ba + "px)," : "") + "center";
  X.style.backgroundRepeat = "no-repeat";
}
G(P7, "paintBtn");
function P8(X, P, Bb) {
  let BW = P4(Bb);
  let BO = XA();
  let Bj = P + "|" + BW + "|" + BO;
  if (X._art === Bj) {
    return;
  }
  X._art = Bj;
  let BA = V3(P6[P] || "next", XQ);
  X.style.setProperty("--up", "url(" + P2("b" + BW + BO, () => Va(false, BW)) + ")");
  X.style.setProperty("--dn", "url(" + P2("B" + BW + BO, () => Va(true, BW)) + ")");
  X.style.setProperty("--lab", "url(" + BA + ")");
  X.style.setProperty("--labd", "url(" + BA + ")");
  X.style.backgroundSize = XN + "px " + XN + "px," + BW * P3(Bb) + "px " + BW * P3(Bb) + "px";
  X.style.backgroundPosition = "center,center";
  X.style.backgroundRepeat = "no-repeat";
  X.style.transform = P === "U" ? "rotate(-90deg)" : P === "D" ? "rotate(90deg)" : "";
  X.dataset.arrow = P5[P] || "";
}
G(P8, "paintArrow");
function P9(X, P) {
  let BO = P4(P);
  let Bj = XA();
  let Bm = "S" + BO + Bj;
  if (X._art !== Bm) {
    X._art = Bm;
    X.style.backgroundImage = "url(" + P2(Bm, () => VH(BO)) + ")";
    X.style.backgroundSize = "100% 100%";
  }
}
G(P9, "paintBase_");
function PX(X, P) {
  let Bd = Math.max(10, Math.round(P / P3(P)));
  let BW = XA();
  let BO = "K" + Bd + BW;
  if (X._art === BO) {
    return;
  }
  X._art = BO;
  let BA = P >= 60 ? 32 : 16;
  X.style.backgroundImage = "var(--ui-heart),url(" + P2(BO, () => Vh(Bd)) + ")";
  X.style.backgroundSize = BA + "px " + BA + "px,100% 100%";
  X.style.backgroundPosition = "center,center";
  X.style.backgroundRepeat = "no-repeat";
}
G(PX, "paintKnob_");
var PP = ["stick", "b1", "b2", "b3"];
var Pp = ["b1", "b2", "b3", "off"];
var Pl = {
  b1: "Z",
  b2: "X",
  b3: "C"
};
var PS = 0.6;
var Pu = 1.6;
var PB = w("touchctl");
var PU = null;
function PI() {
  if (PU) {
    return PU;
  }
  let Bd = PB.get({}) || {};
  PU = {
    land: {},
    port: {},
    map: {
      b1: "b1",
      b2: "b2",
      b3: "b3"
    }
  };
  for (let Br of ["land", "port"]) {
    for (let BA of PP) {
      let Be = Bd[Br] && Bd[Br][BA];
      if (Be && Number.isFinite(Be.x) && Number.isFinite(Be.y)) {
        PU[Br][BA] = {
          x: Math.min(1, Math.max(0, +Be.x)),
          y: Math.min(1, Math.max(0, +Be.y)),
          s: Math.min(Pu, Math.max(PS, Number.isFinite(+Be.s) ? +Be.s : 1))
        };
      } else if (Be && Number.isFinite(+Be.s)) {
        PU[Br][BA] = {
          s: Math.min(Pu, Math.max(PS, +Be.s))
        };
      }
    }
  }
  for (let Bq of ["b1", "b2", "b3"]) {
    if (Bd.map && Pp.includes(Bd.map[Bq])) {
      PU.map[Bq] = Bd.map[Bq];
    }
  }
  return PU;
}
G(PI, "load");
var PF = G(() => {
  if (PU) {
    PB.set(PU);
  }
}, "save");
var Px = G(X => X && X.mode === "landscape" ? "land" : "port", "orient");
var PJ = {
  at(X, P, Bb) {
    let BO = PI()[Px(P)][X];
    if (!BO) {
      return Bb;
    }
    let Br = window.innerWidth;
    let BA = window.innerHeight;
    let Be = Bb.r * (BO.s || 1);
    let BC = BO.x === undefined ? Bb.x : Math.min(Br - Be, Math.max(Be, BO.x * Br));
    let Bq = BO.y === undefined ? Bb.y : Math.min(BA - Be, Math.max(Be, BO.y * BA));
    const BZ = {
      x: BC,
      y: Bq,
      r: Be
    };
    return BZ;
  },
  key(X) {
    let Bb = PI().map[X];
    if (Bb === "off") {
      return null;
    } else {
      return Bb;
    }
  },
  letter(X) {
    let BW = PI().map[X];
    return Pl[BW] || "";
  },
  edited() {
    let BW = PI();
    return PP.some(BO => BW.land[BO] || BW.port[BO]) || PP.slice(1).some(BO => BW.map[BO] !== BO);
  },
  editing: G(() => !!Pr, "editing"),
  edit: G((...X) => pt(...X), "edit"),
  defaults: null
};
var PM = "touchctl";
var Pr = null;
var Pe = "\n#dr-ctled { position:fixed; left:0; top:0; width:100%; height:100%; z-index:20; touch-action:none; background:#000000b0;\n  -webkit-user-select:none; user-select:none; -webkit-tap-highlight-color:transparent; font-family:var(--dr-body, system-ui, sans-serif); }\n#dr-ctled .c { position:absolute; background-repeat:no-repeat; background-position:center; image-rendering:pixelated; touch-action:none; }\n#dr-ctled .c.b { background-image:var(--lab),var(--up); }\n#dr-ctled .c.off { opacity:.35; }\n#dr-ctled .h { position:absolute; pointer-events:none; background-size:100% 100%; image-rendering:pixelated; }\n#dr-ctled .pan { position:absolute; left:50%; transform:translateX(-50%); box-sizing:border-box; padding:10px; display:flex; flex-direction:column; gap:4px; }\n" + Xd("#dr-ctled .pan") + "\n#dr-ctled .row { display:flex; gap:4px; }\n#dr-ctled .pan .k { flex:1; min-width:0; height:44px; background-color:var(--ui-plate); clip-path:var(--st4); touch-action:none; }\n#dr-ctled .pan .k.on { background-color:var(--ui-dim); }\n#dr-ctled .pan .k.dis { opacity:.45; }\n#dr-ctled .pan .k:active { filter:brightness(1.35); }\n#dr-ctled .t { height:22px; background-repeat:no-repeat; background-position:left center; image-rendering:pixelated; }\n";
function Po(X, P, Bb) {
  V4(X, {
    word: P,
    col: Bb,
    left: X.classList.contains("t") ? 2 : undefined
  });
}
G(Po, "txt");
function pt() {
  const X = {
    TvkST: function (Up) {
      return Up();
    },
    evAtU: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    eqyti: "touch",
    uZbsv: "dead",
    FyJSn: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    mbsUQ: "sens",
    SFGFJ: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    EKgAu: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    pxrHD: function (Up, Ul) {
      return Up > Ul;
    },
    KLUmf: function (Up, Ul) {
      return Up !== Ul;
    },
    XgCiM: "wUAEO",
    LShIy: "div",
    RoUGr: function (Up, Ul) {
      return Up + Ul;
    },
    ucVsh: function (Up, Ul) {
      return Up === Ul;
    },
    wDhYn: "stick",
    upEfc: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    HzpxP: "rSFWK",
    yqnRC: "FlJAC",
    cFSmF: function (Up, Ul) {
      return Up(Ul);
    },
    CysIU: function (Up, Ul) {
      return Up * Ul;
    },
    uXoEt: function (Up, Ul) {
      return Up + Ul;
    },
    ErnfF: function (Up, Ul) {
      return Up - Ul;
    },
    crPdM: function (Up, Ul) {
      return Up / Ul;
    },
    LevJV: function (Up, Ul) {
      return Up + Ul;
    },
    BidjP: function (Up, Ul) {
      return Up / Ul;
    },
    wKWeP: function (Up, Ul) {
      return Up === Ul;
    },
    NbeQW: function (Up, Ul) {
      return Up === Ul;
    },
    FfhVA: "UmPbK",
    HLPlI: "dEsDy",
    zhPSV: "ZpltP",
    RyDJT: "QSHmO",
    RIHPF: "c k",
    KBhMd: function (Up, Ul) {
      return Up / Ul;
    },
    CEwJM: function (Up, Ul) {
      return Up - Ul;
    },
    SNjKQ: function (Up, Ul) {
      return Up + Ul;
    },
    CrAbO: function (Up, Ul) {
      return Up + Ul;
    },
    sKQFV: function (Up, Ul) {
      return Up + Ul;
    },
    AUTfQ: "none",
    lEPwy: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    zmmua: "off",
    KaLwG: function (Up, Ul) {
      return Up + Ul;
    },
    BWpWh: function (Up, Ul) {
      return Up - Ul;
    },
    IQYfO: function (Up, Ul) {
      return Up / Ul;
    },
    KJSGP: function (Up, Ul) {
      return Up + Ul;
    },
    LcRTF: function (Up, Ul) {
      return Up + Ul;
    },
    vCLYk: "url(",
    wJblc: "DdaMT",
    NBHcI: "yYLdL",
    TBSbf: function (Up, Ul) {
      return Up - Ul;
    },
    aCEmF: function (Up) {
      return Up();
    },
    uLzKA: function (Up, Ul) {
      return Up !== Ul;
    },
    MqvkJ: "twhHU",
    TUsZC: function (Up) {
      return Up();
    },
    IpHwf: function (Up) {
      return Up();
    },
    iNNae: function (Up, Ul) {
      return Up - Ul;
    },
    IJKDq: function (Up, Ul) {
      return Up / Ul;
    },
    qsBYR: function (Up, Ul) {
      return Up - Ul;
    },
    MgMhc: function (Up, Ul) {
      return Up === Ul;
    },
    DEZSn: "pointerdown",
    kSRtZ: "pointermove",
    naONb: "pointerup",
    aThLy: "pointercancel",
    lAfda: "dis",
    BNrPV: function (Up) {
      return Up();
    },
    OKcmz: "lORRN",
    uoVtx: function (Up) {
      return Up();
    },
    tXtKr: function (Up, Ul) {
      return Up / Ul;
    },
    owLDt: function (Up, Ul) {
      return Up + Ul;
    },
    IeXMj: function (Up, Ul) {
      return Up(Ul);
    },
    wSEzJ: function (Up, Ul) {
      return Up === Ul;
    },
    bwMRW: "EoxFX",
    iEblZ: function (Up, Ul) {
      return Up === Ul;
    },
    zYxYj: function (Up, Ul) {
      return Up % Ul;
    },
    osWpE: function (Up) {
      return Up();
    },
    izcZd: "igEGo",
    nWFcu: function (Up, Ul) {
      return Up === Ul;
    },
    vOtVu: function (Up, Ul) {
      return Up(Ul);
    },
    xMiNO: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    iECmQ: function (Up, Ul) {
      return Up % Ul;
    },
    QIGXv: function (Up) {
      return Up();
    },
    wppAJ: "tuBZO",
    PCaSm: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    zxWnh: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    SffgI: function (Up) {
      return Up();
    },
    yxPfd: function (Up, Ul) {
      return Up !== Ul;
    },
    NNmrv: "IUdZb",
    IGAvp: "fGKHt",
    YEbgN: function (Up) {
      return Up();
    },
    FvyDi: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    ivQhG: function (Up, Ul) {
      return Up + Ul;
    },
    LFjrc: "Touch controls, ",
    pmEIH: "sideways",
    OGvdu: "upright",
    XXEct: function (Up, Ul) {
      return Up + Ul;
    },
    cfxsq: function (Up, Ul) {
      return Up + Ul;
    },
    EhqIt: function (Up, Ul) {
      return Up + Ul;
    },
    CfURs: "Stick",
    ShoDr: function (Up, Ul) {
      return Up === Ul;
    },
    iYmox: "Button off",
    mOmKm: function (Up, Ul) {
      return Up + Ul;
    },
    mdMbw: " button",
    zNpal: "%. Drag to move.",
    dEipP: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    cvhtB: "Smaller",
    reuak: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    WJorl: "Bigger",
    OLKqn: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    jAAqB: "Moves",
    bOnRb: function (Up, Ul) {
      return Up === Ul;
    },
    apzYY: "Key off",
    fqurz: "Key ",
    UIHes: function (Up, Ul) {
      return Up === Ul;
    },
    Ztzlk: function (Up, Ul) {
      return Up + Ul;
    },
    Xmpwj: "Dead zone ",
    UfXhI: function (Up, Ul) {
      return Up(Ul);
    },
    bCfCi: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    iiXsq: function (Up, Ul) {
      return Up + Ul;
    },
    oWPGN: "Sensitivity ",
    qTEBA: function (Up, Ul) {
      return Up(Ul);
    },
    yPKkz: "Reset",
    xtKuQ: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    GqmzG: "Cancel",
    yDfvT: function (Up, Ul, US, Uu) {
      return Up(Ul, US, Uu);
    },
    nAsro: "Done",
    kTYGV: "adAyk",
    QLDnJ: function (Up, Ul) {
      return Up === Ul;
    },
    yyLBZ: "XdZJi",
    gRwqr: "xaFhQ",
    ZUSdx: function (Up, Ul) {
      return Up !== Ul;
    },
    FXcXS: "BNAbz",
    UHCxc: function (Up, Ul) {
      return Up === Ul;
    },
    QxDQa: "desktop",
    ntfdi: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    AUZSi: "Touch controls need a touch screen",
    rgXZP: function (Up) {
      return Up();
    },
    JLscX: "dr-ctled-style",
    Iqgin: "tvUto",
    Chawi: "txWNr",
    yPNjx: "style",
    rOwUh: "dr-ctled",
    PeoEl: "landscape",
    fSdbG: function (Up, Ul) {
      return Up(Ul);
    },
    EJwxF: function (Up) {
      return Up();
    },
    toOCf: function (Up, Ul) {
      return Up(Ul);
    },
    OIGuu: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    fKyOI: "dash0",
    OYLMj: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    ExtBo: "dash1",
    zsPNh: "pan",
    ADhqL: "row",
    vkMvM: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    YeROm: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    gsTbe: function (Up, Ul, US) {
      return Up(Ul, US);
    },
    PJNlK: function (Up, Ul) {
      return Up + Ul;
    },
    VYSDc: function (Up, Ul) {
      return Up(Ul);
    },
    sVnOk: "touchctl"
  };
  if (Pr) {
    return;
  }
  let P = H.geom;
  if (!P || X.UHCxc(P.mode, X.QxDQa) || !PJ.defaults) {
    X.ntfdi(b, X.AUZSi, {
      ms: 2500
    });
    return;
  }
  X.rgXZP(XR);
  X.cFSmF(Xm, true);
  if (!document.getElementById(X.JLscX)) {
    if (X.nWFcu(X.Iqgin, X.Chawi)) {
      U5 = P.parse(Bz);
      X.TvkST(U6);
      X.evAtU(Bm, X.eqyti, X.uZbsv, P.dead);
      X.FyJSn(Bb, X.eqyti, X.mbsUQ, b.sens);
      X.TvkST(BA);
    } else {
      let Ul = document.createElement(X.yPNjx);
      Ul.id = X.JLscX;
      Ul.textContent = Pe;
      document.head.appendChild(Ul);
    }
  }
  let Bb = document.createElement(X.LShIy);
  Bb.id = X.rOwUh;
  document.body.appendChild(Bb);
  Pr = {
    root: Bb,
    sel: "b1",
    geom: P,
    els: {},
    panel: null,
    rebuild: null
  };
  let Bd = X.NbeQW(P.mode, X.PeoEl);
  let BW = X.fSdbG(Px, P);
  let BO = JSON.stringify(X.EJwxF(PI));
  let Bj = {
    dead: X.toOCf(pe, X.uZbsv),
    sens: X.UfXhI(pe, X.mbsUQ)
  };
  let Bm = () => PJ.defaults(H.geom || P);
  let Br = US => PJ.at(US, H.geom || P, Bm()[US]);
  let BA = X.OIGuu(P2, X.fKyOI, () => Vv(XQ));
  let Be = X.OYLMj(P2, X.ExtBo, () => Vv(XT));
  let BC = document.createElement(X.LShIy);
  BC.className = "h";
  Bb.appendChild(BC);
  let BZ = () => {
    const US = {
      WRyUX: function (UI, Uk) {
        return X.KLUmf(UI, Uk);
      },
      QSAdl: X.XgCiM,
      JkfRz: X.LShIy,
      PqLjt: function (UI, Uk) {
        return X.RoUGr(UI, Uk);
      },
      IKmuD: function (UI, Uk) {
        return X.ucVsh(UI, Uk);
      },
      zYgsQ: X.wDhYn,
      KqkJq: function (UI, Uk, UF) {
        return X.upEfc(UI, Uk, UF);
      }
    };
    if (X.ucVsh(X.HzpxP, X.HzpxP)) {
      for (let UF of PP) {
        if (X.ucVsh(X.yqnRC, X.yqnRC)) {
          let Ux = Pr.els[UF] || (() => {
            if (US.WRyUX(US.QSAdl, US.QSAdl)) {
              BZ = true;
              try {
                XZ({
                  id: "touch.size",
                  section: "TOUCH",
                  label: "Control size",
                  owner: "touch",
                  values: Xz.keys(XG),
                  get: () => VK(VT, "size", "M"),
                  set: UD => VK(VT, "size", UD),
                  desc: "Size of Z / X, the stick and the arrow pad on a touch screen."
                });
                Xv({
                  id: "touch.opacity",
                  section: "TOUCH",
                  label: "Control opacity",
                  owner: "touch",
                  values: Xg.keys(V0),
                  get: () => VK(VT, "opacity", "100%"),
                  set: UD => VK(VT, "opacity", UD),
                  desc: "How solid Z / X, the stick and the arrow pad are drawn."
                });
                V5({
                  id: "touch.lefty",
                  section: "TOUCH",
                  label: "Left-handed controls",
                  owner: "touch",
                  values: [false, true],
                  get: () => VK(VT, "lefty", false) === true,
                  set: UD => VK(VT, "lefty", !!UD),
                  desc: "Z / X on the left, the stick on the right."
                });
                VX({
                  id: "touch.dodge",
                  section: "TOUCH",
                  label: "Dodge control",
                  owner: "touch",
                  values: ["STICK", "DPAD"],
                  get: () => VK(VT, "dodge", "STICK"),
                  set: UD => VK(VT, "dodge", UD),
                  desc: "STICK floats wherever your thumb lands; DPAD is a fixed cross in the corner."
                });
                VS({
                  id: "touch.dead",
                  section: "TOUCH",
                  label: "Stick dead zone",
                  owner: "touch",
                  values: Vu.map(UD => UD + "%"),
                  get: () => VK("dead") + "%",
                  set: UD => VK(VT, "dead", VL(UD, 10)),
                  desc: "How far the stick must be pushed before the SOUL moves. Higher ignores more of a resting or wobbling thumb."
                });
                VF({
                  id: "touch.sens",
                  section: "TOUCH",
                  label: "Stick sensitivity",
                  owner: "touch",
                  values: Vx.map(UD => UD + "%"),
                  get: () => VK("sens") + "%",
                  set: UD => VK(VT, "sens", VL(UD, 10)),
                  desc: "Higher: a shorter push is a full one. Lower: the stick and the menus want a longer push."
                });
                VQ();
                VD();
              } catch {
                VT = false;
              }
            } else {
              let UD = document.createElement(US.JkfRz);
              UD.className = US.PqLjt("c", US.IKmuD(UF, US.zYgsQ) ? "" : " b");
              UD.dataset.n = UF;
              Bb.appendChild(UD);
              Pr.els[UF] = UD;
              US.KqkJq(Bz, UD, UF);
              return UD;
            }
          })();
          let UJ = X.cFSmF(Br, UF);
          let UM = Math.round(X.CysIU(UJ.r, 2));
          Ux.style.left = X.uXoEt(Math.round(X.ErnfF(UJ.x, X.crPdM(UM, 2))), "px");
          Ux.style.top = X.LevJV(Math.round(X.ErnfF(UJ.y, X.BidjP(UM, 2))), "px");
          Ux.style.width = Ux.style.height = X.RoUGr(UM, "px");
          if (X.wKWeP(UF, X.wDhYn)) {
            if (X.NbeQW(X.FfhVA, X.HLPlI)) {
              UP(U1, Q, {
                c: true
              });
              return;
            } else {
              X.EKgAu(P9, Ux, UM);
              if (!Ux._knob) {
                if (X.NbeQW(X.zhPSV, X.RyDJT)) {
                  if (ytaWgU.SFGFJ(A, e, Ux)) {
                    return;
                  }
                  o = ytaWgU.EKgAu(f, a, H);
                  if (!n) {
                    BH.textContent = Bn;
                    Bh.style.color = Bg;
                    U0._lk = "";
                    return;
                  }
                  if (Bm.max && ytaWgU.pxrHD(Br.w, BA.max)) {
                    Be = ytaWgU.evAtU(BC, BZ, Bz, ytaWgU.TvkST(Bf)) || Ba;
                  }
                } else {
                  let UR = document.createElement(X.LShIy);
                  UR.className = X.RIHPF;
                  Ux._knob = UR;
                  Ux.appendChild(UR);
                }
              }
              let UE = Math.round(X.CysIU(UM, 0.6));
              Object.assign(Ux._knob.style, {
                left: X.LevJV(Math.round(X.KBhMd(X.CEwJM(UM, UE), 2)), "px"),
                top: X.SNjKQ(Math.round(X.crPdM(X.CEwJM(UM, UE), 2)), "px"),
                width: X.CrAbO(UE, "px"),
                height: X.sKQFV(UE, "px"),
                pointerEvents: X.AUTfQ
              });
              X.lEPwy(PX, Ux._knob, UE);
            }
          } else {
            let UQ = X.TvkST(PI).map[UF];
            X.FyJSn(P7, Ux, Pl[UQ] || "", UM);
            Ux.classList.toggle(X.zmmua, X.ucVsh(UQ, X.zmmua));
          }
        } else if (BH.hidden) {
          UP();
        }
      }
      let UI = X.cFSmF(Br, Pr.sel);
      let Uk = Math.round(X.SNjKQ(X.CysIU(UI.r, 2), 22));
      BC.style.left = X.KaLwG(Math.round(X.ErnfF(UI.x, X.BidjP(Uk, 2))), "px");
      BC.style.top = X.CrAbO(Math.round(X.BWpWh(UI.y, X.IQYfO(Uk, 2))), "px");
      BC.style.width = BC.style.height = X.KJSGP(Uk, "px");
      BC.style.backgroundImage = X.LcRTF(X.LcRTF(X.vCLYk, Pr.drag ? Be : BA), ")");
      if (Pr.panelUp) {
        Pr.panelUp();
      }
    } else {
      U7.focus();
    }
  };
  function Bz(US, Uu) {
    const UU = {
      Lctjd: function (UD, UK) {
        return X.ucVsh(UD, UK);
      },
      SuXqu: X.wJblc,
      YEind: X.NBHcI,
      MVEtM: function (UD, UK) {
        return X.cFSmF(UD, UK);
      },
      gHAQs: function (UD, UK) {
        return X.ErnfF(UD, UK);
      },
      GePSG: function (UD, UK) {
        return X.TBSbf(UD, UK);
      },
      sYMsE: function (UD) {
        return X.aCEmF(UD);
      },
      IoDeX: function (UD, UK) {
        return X.uLzKA(UD, UK);
      },
      obPoE: X.MqvkJ,
      RIpXv: function (UD) {
        return X.TUsZC(UD);
      },
      BCKRW: function (UD, UK) {
        return X.CysIU(UD, UK);
      },
      UlQZx: function (UD) {
        return X.IpHwf(UD);
      },
      VDWIR: function (UD, UK) {
        return X.BidjP(UD, UK);
      },
      NzHsJ: function (UD, UK) {
        return X.iNNae(UD, UK);
      },
      cAvOx: function (UD, UK) {
        return X.IJKDq(UD, UK);
      },
      BkBMp: function (UD, UK) {
        return X.qsBYR(UD, UK);
      },
      VKFwA: function (UD, UK) {
        return X.MgMhc(UD, UK);
      },
      OupNX: function (UD) {
        return X.aCEmF(UD);
      }
    };
    let UI = -1;
    let Uk = 0;
    let UF = 0;
    let Ux = 0;
    let UJ = 0;
    US.addEventListener(X.DEZSn, UD => {
      if (UU.Lctjd(UU.SuXqu, UU.SuXqu)) {
        UD.preventDefault();
        UD.stopPropagation();
        try {
          if (UU.Lctjd(UU.YEind, UU.YEind)) {
            US.setPointerCapture(UD.pointerId);
          } else {
            Ux.preventDefault();
            Bz.stopPropagation();
            try {
              BZ.setPointerCapture(BO.pointerId);
            } catch {}
            P = Uu.pointerId;
            US.classList.add("hit");
            BA("tick");
            Bj("keydown", U3);
          }
        } catch {}
        UI = UD.pointerId;
        Pr.sel = Uu;
        Pr.drag = true;
        let UY = UU.MVEtM(Br, Uu);
        Uk = UU.gHAQs(UD.clientX, UY.x);
        UF = UU.GePSG(UD.clientY, UY.y);
        Ux = UD.clientX;
        UJ = UD.clientY;
        UU.sYMsE(BZ);
      } else {
        let Uy = t(Uu) + ":" + US;
        let UN = d.get(Uy);
        if (UN) {
          return UN;
        }
        UN = s.createElement("canvas");
        UN.width = O.img.width;
        UN.height = m.img.height;
        let Uc = UN.getContext("2d", Uc);
        Uc.drawImage(A.img, 0, 0);
        Uc.globalCompositeOperation = "source-in";
        Uc.fillStyle = e;
        Uc.fillRect(0, 0, UN.width, UN.height);
        if (Bd.size >= 32) {
          UN.delete(f.keys().next().value);
        }
        a.set(Uy, UN);
        return UN;
      }
    }, {
      passive: false
    });
    US.addEventListener(X.kSRtZ, UD => {
      if (UU.IoDeX(UU.obPoE, UU.obPoE)) {
        let UY = UY.getElementById("dr-rows");
        return !!UY && !!UY.classList.contains("on");
      } else {
        if (UU.IoDeX(UD.pointerId, UI)) {
          return;
        }
        UD.preventDefault();
        let Uy = window.innerWidth;
        let UN = window.innerHeight;
        let Uc = UU.RIpXv(PI)[BW];
        let Ut = Uc[Uu] ||= {};
        let Ui = UU.BCKRW(UU.UlQZx(Bm)[Uu].r, Ut.s || 1);
        Ut.x = Math.min(1, Math.max(0, UU.VDWIR(Math.min(UU.gHAQs(Uy, Ui), Math.max(Ui, UU.NzHsJ(UD.clientX, Uk))), Uy)));
        Ut.y = Math.min(1, Math.max(0, UU.cAvOx(Math.min(UU.BkBMp(UN, Ui), Math.max(Ui, UU.BkBMp(UD.clientY, UF))), UN)));
        Ut.s ||= 1;
        UU.sYMsE(BZ);
      }
    }, {
      passive: false
    });
    let UQ = UD => {
      if (UU.VKFwA(UD.pointerId, UI)) {
        UI = -1;
        Pr.drag = false;
        UU.OupNX(PF);
        UU.sYMsE(BZ);
      }
    };
    US.addEventListener(X.naONb, UQ);
    US.addEventListener(X.aThLy, UQ);
  }
  Bz;
  let Bf = document.createElement(X.LShIy);
  Bf.className = X.zsPNh;
  Bb.appendChild(Bf);
  let Ba = document.createElement(X.LShIy);
  Ba.className = "t";
  Bf.appendChild(Ba);
  let BH = document.createElement(X.LShIy);
  BH.className = "t";
  Bf.appendChild(BH);
  let Bn = document.createElement(X.LShIy);
  Bn.className = X.ADhqL;
  Bf.appendChild(Bn);
  let Bh = document.createElement(X.LShIy);
  Bh.className = X.ADhqL;
  Bf.appendChild(Bh);
  let Bg = document.createElement(X.LShIy);
  Bg.className = X.ADhqL;
  Bf.appendChild(Bg);
  let U0 = (US, Uu) => {
    const UU = {
      LLVZR: X.lAfda,
      WCTUB: function (Ux) {
        return X.BNrPV(Ux);
      }
    };
    let Uk = document.createElement(X.LShIy);
    Uk.className = "k";
    US.appendChild(Uk);
    Uk.addEventListener(X.DEZSn, Ux => {
      Ux.preventDefault();
      Ux.stopPropagation();
      if (!Uk.classList.contains(UU.LLVZR)) {
        UU.WCTUB(Uu);
      }
    }, {
      passive: false
    });
    return Uk;
  };
  let U1 = US => {
    if (X.KLUmf(X.OKcmz, X.OKcmz)) {
      if (X && U8.editor) {
        U5.editor.cycleTab(P);
      } else if (Bz) {
        U6.cycleFightTab(Bm);
      }
    } else {
      let UI = X.uoVtx(PI)[BW][Pr.sel] ||= {};
      let Uk = X.tXtKr(Math.round(X.CysIU(Math.min(Pu, Math.max(PS, X.owLDt(UI.s || 1, US))), 100)), 100);
      let UF = X.IeXMj(Br, Pr.sel);
      UI.s = Uk;
      if (X.wKWeP(UI.x, undefined)) {
        UI.x = X.KBhMd(UF.x, window.innerWidth);
        UI.y = X.crPdM(UF.y, window.innerHeight);
      }
      X.TvkST(PF);
      X.TUsZC(BZ);
    }
  };
  let U2 = X.lEPwy(U0, Bn, () => U1(-0.1));
  let U3 = X.ntfdi(U0, Bn, () => U1(0.1));
  let U4 = X.vkMvM(U0, Bn, () => {
    if (X.wSEzJ(X.bwMRW, X.bwMRW)) {
      if (X.iEblZ(Pr.sel, X.wDhYn)) {
        return;
      }
      let UU = X.TUsZC(PI);
      let UI = Pp.indexOf(UU.map[Pr.sel]);
      UU.map[Pr.sel] = Pp[X.zYxYj(X.uXoEt(UI, 1), Pp.length)];
      X.uoVtx(PF);
      X.osWpE(BZ);
    } else {
      let Uk = Br.deck || {
        x: 0,
        y: 0,
        w: UX.innerWidth,
        h: Bd.innerHeight
      };
      let UF = UJ.min(U0, BW.floor((Uk.w - BO * 2) / 5.2));
      let Ux = UF * 3.1;
      let UJ = UF * 2.1;
      let UM = Bj.lefty ? Uk.x + Bm : Uk.x + Uk.w - Br - Ux;
      BA.forEach(([UR, UQ], UD) => {
        U6["b" + (UD + 1)] = {
          x: U7.round(UM + (U8.lefty ? 1 - UR : UR) * Ux),
          y: U9.round(Uk.y + Uk.h - UX - UJ + UQ * UJ),
          r: UF / 2
        };
      });
      let UE = Ba.max(30, BH.min(Bn, Bh.floor((Uk.w - Ux - Bg * 2 - 20) / 2), U0.floor((Uk.h - 38) / 2)));
      U1.stick = {
        x: U2.lefty ? Uk.x + Uk.w - U3 - 12 - UE : Uk.x + U4 + 12 + UE,
        y: Uk.y + Uk.h - U5 - 12 - UE,
        r: UE
      };
    }
  });
  let U5 = US => {
    if (X.KLUmf(X.izcZd, X.izcZd)) {
      if (UV || X.value !== U8) {
        U5();
      }
      try {
        U6.focus({
          preventScroll: true
        });
      } catch {
        P.focus();
      }
    } else {
      let UI = X.nWFcu(US, X.uZbsv) ? VL : VY;
      let Uk = UI.indexOf(X.vOtVu(pe, US));
      X.xMiNO(i, X.eqyti, US, UI[X.iECmQ(X.KaLwG(Uk, 1), UI.length)]);
      X.osWpE(BZ);
    }
  };
  let U6 = X.YeROm(U0, Bh, () => U5("dead"));
  let U7 = X.gsTbe(U0, Bh, () => U5("sens"));
  let U8 = X.gsTbe(U0, Bg, () => {
    let UB = X.QIGXv(PI);
    UB.land = {};
    UB.port = {};
    UB.map = {
      b1: "b1",
      b2: "b2",
      b3: "b3"
    };
    X.aCEmF(PF);
    X.FyJSn(i, X.eqyti, X.uZbsv, Vy);
    X.evAtU(i, X.eqyti, X.mbsUQ, VN);
    Pr.sel = "b1";
    X.aCEmF(BZ);
  });
  let U9 = X.vkMvM(U0, Bg, () => {
    if (X.KLUmf(X.wppAJ, X.wppAJ)) {
      let UU = U8.innerWidth;
      let UI = U5.innerHeight;
      let Uk = P.L.stick;
      let UF = Uk.x < UU / 2;
      let Ux = UF ? 0 : Bz.round(UU / 2);
      let UJ = U6.round(UI * 0.22);
      UF(Ux, UJ, UF ? P.round(UU / 2) : UU - Ux, UI - UJ, Bb, Uk);
    } else {
      PU = JSON.parse(BO);
      X.IpHwf(PF);
      X.PCaSm(i, X.eqyti, X.uZbsv, Bj.dead);
      X.zxWnh(i, X.eqyti, X.mbsUQ, Bj.sens);
      X.SffgI(UV);
    }
  });
  let UX = X.ntfdi(U0, Bg, () => UV());
  Pr.panelUp = () => {
    if (X.yxPfd(X.NNmrv, X.IGAvp)) {
      let UU = X.YEbgN(PI);
      let UI = Pr.sel;
      let Uk = UU[BW][UI];
      let UF = Math.round(X.CysIU(Uk && Uk.s || 1, 100));
      X.FvyDi(Po, Ba, X.ivQhG(X.LFjrc, Bd ? X.pmEIH : X.OGvdu), XQ);
      let Ux = UU.map[UI];
      X.evAtU(Po, BH, X.XXEct(X.cfxsq(X.EhqIt(X.wSEzJ(UI, X.wDhYn) ? X.CfURs : X.ShoDr(Ux, X.zmmua) ? X.iYmox : X.mOmKm(Pl[Ux], X.mdMbw), ", "), UF), X.zNpal), XL);
      X.dEipP(Po, U2, X.cvhtB, XD);
      X.reuak(Po, U3, X.WJorl, XD);
      X.OLKqn(Po, U4, X.ucVsh(UI, X.wDhYn) ? X.jAAqB : X.bOnRb(Ux, X.zmmua) ? X.apzYY : X.CrAbO(X.fqurz, Pl[Ux]), XD);
      U4.classList.toggle(X.lAfda, X.UIHes(UI, X.wDhYn));
      X.reuak(Po, U6, X.Ztzlk(X.mOmKm(X.Xmpwj, X.UfXhI(pe, X.uZbsv)), "%"), XD);
      X.bCfCi(Po, U7, X.uXoEt(X.iiXsq(X.oWPGN, X.qTEBA(pe, X.mbsUQ)), "%"), XD);
      X.PCaSm(Po, U8, X.yPKkz, XD);
      X.xtKuQ(Po, U9, X.GqmzG, XD);
      X.yDfvT(Po, UX, X.nAsro, XQ);
      UX.classList.add("on");
    } else if (U8) {
      b.value = BA;
      Bj = U3;
      try {
        Bb.setSelectionRange(Bd.length, BW.length);
      } catch {}
    }
  };
  let UV = () => {
    if (X.NbeQW(X.kTYGV, X.kTYGV)) {
      if (!Pr) {
        return;
      }
      let UU = Pr;
      Pr = null;
      try {
        if (X.QLDnJ(X.yyLBZ, X.yyLBZ)) {
          UU.root.remove();
        } else {
          if (Bb.pointerId !== UU || (BA = -1, Bj.classList.remove("hit"), U3.type !== "pointerup") || BZ.abs(BO.clientX - Bh) > Bb || Bd.abs(BW.clientY - Ba) > UI) {
            return;
          }
          let UI = UX._get && Bd._get();
          if (!!UI && !!UI.act && !UI.off) {
            UI.act();
          }
        }
      } catch {}
      X.IeXMj(T, PM);
    } else {
      U1[2][Q] = UV;
      X("b1");
    }
  };
  Pr.close = UV;
  let UP = window.innerWidth;
  Bf.style.width = X.RoUGr(Math.min(380, X.BWpWh(UP, 16)), "px");
  Bf.style.top = X.cfxsq(Math.max(6, X.PJNlK(P.safe ? P.safe.t : 0, 6)), "px");
  X.aCEmF(BZ);
  X.VYSDc(K, {
    id: PM,
    owner: X.sVnOk,
    draw: () => {},
    step: () => {},
    onKey: (US, Uu) => Uu === "Escape" ? (UV(), true) : false,
    onClose: () => {
      if (X.NbeQW(X.gRwqr, X.gRwqr)) {
        if (Pr) {
          if (X.ZUSdx(X.FXcXS, X.FXcXS)) {
            if (!Q.activeElement || UV.activeElement === X.body) {
              U8();
            }
            U5();
          } else {
            let UU = Pr;
            Pr = null;
            try {
              UU.root.remove();
            } catch {}
          }
        }
      } else if (UV === X) {
        U8[0][U5] = P;
        Bz("b1");
      }
    }
  });
}
G(pt, "openEditor");
function pe(X) {
  let Bb = X === "dead" ? VL : VY;
  let Bd = X === "dead" ? Vy : VN;
  let BW = Number(t("touch", X, Bd));
  if (Bb.includes(BW)) {
    return BW;
  } else {
    return Bd;
  }
}
G(pe, "stickPref");
var po = false;
function pn() {
  if (!po) {
    {
      po = true;
      try {
        N({
          id: "touch.layout",
          section: "TOUCH",
          label: "Edit touch controls",
          owner: "touch",
          values: ["EDIT"],
          get: () => "",
          set: () => {
            PJ.edit();
          },
          desc: "Drag the stick and the buttons where your thumbs want them, make them bigger or smaller, and choose what each button does."
        });
        R({
          id: "touchctl",
          name: "TOUCH CONTROLS",
          group: "access",
          states: ["menu", "battle"],
          icon: "gear",
          palette: false,
          available: () => L(),
          keywords: "touch controls buttons stick layout move resize remap phone",
          desc: "Move, resize and remap the stick and the buttons.",
          onUse: () => {
            if (y("hub:toolbox")) {
              T("hub:toolbox");
            }
            PJ.edit();
          }
        });
      } catch {
        po = false;
      }
    }
  }
}
G(pn, "registerCtl");
function lt() {
  return BD();
}
G(lt, "regions");
var le = 24;
var lo = null;
var ln = null;
var SV = null;
var SP = new Map();
function Sp(X, P) {
  let Bb = SP.get(X);
  if (Bb) {
    if (Bb._cls !== P) {
      Bb.className = "w " + P;
    }
  } else {
    Bb = document.createElement("div");
    Bb.className = "w " + P;
    Bb.dataset.k = X;
    SP.set(X, Bb);
    lo.appendChild(Bb);
  }
  Bb._cls = P;
  return Bb;
}
G(Sp, "el");
function Sl(X, P, Bb, Bd, BW) {
  let BO = Math.round(P) + "," + Math.round(Bb) + "," + Math.round(Bd) + "," + Math.round(BW);
  if (X._pl !== BO) {
    X._pl = BO;
    X.style.left = Math.round(P) + "px";
    X.style.top = Math.round(Bb) + "px";
    X.style.width = Math.round(Bd) + "px";
    X.style.height = Math.round(BW) + "px";
  }
}
G(Sl, "place");
function SS(X, P, Bb) {
  Bb = !!Bb;
  if (X.classList.contains(P) !== Bb) {
    X.classList.toggle(P, Bb);
  }
}
G(SS, "tg");
function Su(X) {
  SS(X, "on", true);
  X._live = true;
}
G(Su, "show");
function SB(X, P) {
  P = String(P);
  if (X._lab !== P) {
    X._lab = P;
    X.setAttribute("aria-label", P);
  }
}
G(SB, "lab");
var SU = G((X, P, Bb, Bd) => V4(X, {
  word: Xw(P),
  icon: Bd,
  col: XQ,
  iconCol: XD,
  max: Bb ? Bb - 8 : 0
}), "say");
var SI = "touch";
var Sk = {
  S: 0.85,
  M: 1,
  L: 1.2,
  XL: 1.4
};
var SF = {
  "100%": 1,
  "75%": 0.75,
  "50%": 0.5,
  "30%": 0.3
};
var Sx = false;
function SJ() {
  if (!Sx) {
    Sx = true;
    try {
      N({
        id: "touch.size",
        section: "TOUCH",
        label: "Control size",
        owner: "touch",
        values: Object.keys(Sk),
        get: () => t(SI, "size", "M"),
        set: X => i(SI, "size", X),
        desc: "Size of Z / X, the stick and the arrow pad on a touch screen."
      });
      N({
        id: "touch.opacity",
        section: "TOUCH",
        label: "Control opacity",
        owner: "touch",
        values: Object.keys(SF),
        get: () => t(SI, "opacity", "100%"),
        set: X => i(SI, "opacity", X),
        desc: "How solid Z / X, the stick and the arrow pad are drawn."
      });
      N({
        id: "touch.lefty",
        section: "TOUCH",
        label: "Left-handed controls",
        owner: "touch",
        values: [false, true],
        get: () => t(SI, "lefty", false) === true,
        set: X => i(SI, "lefty", !!X),
        desc: "Z / X on the left, the stick on the right."
      });
      N({
        id: "touch.dodge",
        section: "TOUCH",
        label: "Dodge control",
        owner: "touch",
        values: ["STICK", "DPAD"],
        get: () => t(SI, "dodge", "STICK"),
        set: X => i(SI, "dodge", X),
        desc: "STICK floats wherever your thumb lands; DPAD is a fixed cross in the corner."
      });
      N({
        id: "touch.dead",
        section: "TOUCH",
        label: "Stick dead zone",
        owner: "touch",
        values: VL.map(X => X + "%"),
        get: () => pe("dead") + "%",
        set: X => i(SI, "dead", parseInt(X, 10)),
        desc: "How far the stick must be pushed before the SOUL moves. Higher ignores more of a resting or wobbling thumb."
      });
      N({
        id: "touch.sens",
        section: "TOUCH",
        label: "Stick sensitivity",
        owner: "touch",
        values: VY.map(X => X + "%"),
        get: () => pe("sens") + "%",
        set: X => i(SI, "sens", parseInt(X, 10)),
        desc: "Higher: a shorter push is a full one. Lower: the stick and the menus want a longer push."
      });
      pn();
      VJ();
    } catch {
      Sx = false;
    }
  }
}
G(SJ, "ensureSettings");
function SM() {
  let X = 1;
  try {
    let P = Number(t("a11y", "touchScale", 1));
    if (P === 1.25 || P === 1.5) {
      X = P;
    }
  } catch {}
  return {
    k: Math.max(Sk[t(SI, "size", "M")] || 1, X),
    op: SF[t(SI, "opacity", "100%")] ?? 1,
    lefty: t(SI, "lefty", false) === true,
    dpad: t(SI, "dodge", "STICK") === "DPAD"
  };
}
G(SM, "opts");
function SE(X, P) {
  X._get = P;
  if (X._bound) {
    return;
  }
  X._bound = true;
  let Bb = -1;
  let Bd = 0;
  let BW = 0;
  X.addEventListener("pointerdown", Bj => {
    Bj.preventDefault();
    Bj.stopPropagation();
    try {
      X.setPointerCapture(Bj.pointerId);
    } catch {}
    Bb = Bj.pointerId;
    Bd = Bj.clientX;
    BW = Bj.clientY;
    X.classList.add("hit");
    VI("tick");
  }, {
    passive: false
  });
  let BO = Bj => {
    if (Bj.pointerId !== Bb || (Bb = -1, X.classList.remove("hit"), Bj.type !== "pointerup") || Math.abs(Bj.clientX - Bd) > le || Math.abs(Bj.clientY - BW) > le) {
      return;
    }
    let Bm = X._get && X._get();
    if (!!Bm && !!Bm.act && !Bm.off) {
      Bm.act();
    }
  };
  X.addEventListener("pointerup", BO);
  X.addEventListener("pointercancel", BO);
}
G(SE, "bindTap");
var SR = G(() => {
  let X = o.first("obj_attackpress");
  if (X && X.active === 1) {
    return true;
  } else {
    return By() && s.myfight === 1 && !!o.first("obj_target");
  }
}, "pressLive");
function SQ(X, P) {
  X._get = P;
  if (X._bound) {
    return;
  }
  X._bound = true;
  X.addEventListener("pointerdown", Bd => {
    Bd.preventDefault();
    Bd.stopPropagation();
    try {
      X.setPointerCapture(Bd.pointerId);
    } catch {}
    if (!SR()) {
      return;
    }
    let BW = X._get && X._get();
    if (!!BW && !!BW.act) {
      X.classList.add("hit");
      VI("press");
      BW.act();
    }
  }, {
    passive: false
  });
  let Bb = () => X.classList.remove("hit");
  X.addEventListener("pointerup", Bb);
  X.addEventListener("pointercancel", Bb);
}
G(SQ, "bindPress");
function SD(X, P) {
  X._key = P;
  if (X._bound) {
    return;
  }
  X._bound = true;
  let Bb = -1;
  X.addEventListener("pointerdown", BW => {
    BW.preventDefault();
    BW.stopPropagation();
    try {
      X.setPointerCapture(BW.pointerId);
    } catch {}
    Bb = BW.pointerId;
    X.classList.add("hit");
    VI(X._key === "b2" ? "back" : "tick");
    q(X._key, true);
  }, {
    passive: false
  });
  let Bd = BW => {
    if (BW.pointerId === Bb) {
      Bb = -1;
      X.classList.remove("hit");
      q(X._key, false);
    }
  };
  X.addEventListener("pointerup", Bd);
  X.addEventListener("pointercancel", Bd);
  X.addEventListener("lostpointercapture", Bd);
  window.addEventListener("pointerup", Bd);
  window.addEventListener("pointercancel", Bd);
  X._release = () => {
    if (Bb !== -1) {
      Bb = -1;
      X.classList.remove("hit");
      q(X._key, false);
    }
  };
}
G(SD, "bindHold");
var SK = G((X, P) => window.dispatchEvent(new KeyboardEvent(X, {
  key: P,
  code: P.length === 1 ? "Key" + P.toUpperCase() : P,
  bubbles: true
})), "sendKey");
function ST(X, P) {
  if (X._tap === P) {
    return;
  }
  X._tap = P;
  X.addEventListener("pointerdown", Bd => {
    Bd.preventDefault();
    Bd.stopPropagation();
    X.classList.add("hit");
    VI("tick");
    SK("keydown", X._tap);
    SK("keyup", X._tap);
  }, {
    passive: false
  });
  let Bb = () => X.classList.remove("hit");
  X.addEventListener("pointerup", Bb);
  X.addEventListener("pointercancel", Bb);
  X.addEventListener("pointerleave", Bb);
}
G(ST, "bindKeyTap");
var SL = 600;
function SY(X) {
  if (X._escB) {
    return;
  }
  X._escB = true;
  let P = -1;
  let Bb = 0;
  let Bd = () => {
    SK("keydown", "Escape");
    SK("keyup", "Escape");
  };
  X.addEventListener("pointerdown", BO => {
    BO.preventDefault();
    BO.stopPropagation();
    try {
      X.setPointerCapture(BO.pointerId);
    } catch {}
    P = BO.pointerId;
    X.classList.add("hit");
    VI("tick");
    if (!X._holdMode) {
      Bd();
      return;
    }
    X.classList.add("arming");
    Bb = setTimeout(() => {
      Bb = 0;
      X.classList.remove("arming");
      VI("heavy");
      Bd();
      if (f.__DR && f.__DR.state === "battle") {
        Bd();
      }
    }, SL);
  }, {
    passive: false
  });
  let BW = BO => {
    if (BO.pointerId === P) {
      P = -1;
      X.classList.remove("hit", "arming");
      if (Bb) {
        clearTimeout(Bb);
        Bb = 0;
      }
    }
  };
  X.addEventListener("pointerup", BW);
  X.addEventListener("pointercancel", BW);
  X.addEventListener("lostpointercapture", BW);
}
G(SY, "bindEsc");
function Sy(X, P) {
  if (X._khold === P) {
    return;
  }
  X._khold = P;
  let Bb = -1;
  X.addEventListener("pointerdown", BW => {
    BW.preventDefault();
    BW.stopPropagation();
    try {
      X.setPointerCapture(BW.pointerId);
    } catch {}
    Bb = BW.pointerId;
    X.classList.add("hit");
    VI("tick");
    SK("keydown", P);
  }, {
    passive: false
  });
  let Bd = BW => {
    if (BW.pointerId === Bb) {
      Bb = -1;
      X.classList.remove("hit");
      SK("keyup", P);
    }
  };
  X.addEventListener("pointerup", Bd);
  X.addEventListener("pointercancel", Bd);
  X.addEventListener("lostpointercapture", Bd);
}
G(Sy, "bindKeyHold");
var SN = Vi();
var Sc = -1;
var Si = false;
var Sw = null;
var Sb = null;
var Sd = null;
var SW = 112;
var SO = 44;
var Sj = 26;
var Sm = null;
var Sr = false;
var SA = G(() => performance.now() / 1000, "nowS");
function SC() {
  let X = SN.held;
  let P = false;
  for (let Bb of ["left", "right", "up", "down"]) {
    if (C.held[Bb] && !X[Bb]) {
      q(Bb, false);
    }
  }
  for (let Bd of ["left", "right", "up", "down"]) {
    if (X[Bd] && !C.held[Bd]) {
      q(Bd, true);
      P = true;
    }
  }
  if (P) {
    VI("stick");
  }
}
G(SC, "sendHeld");
function Sq() {
  if (Sc === -1 || !Sb) {
    return;
  }
  let X = Vq(SN);
  Sb.style.left = Math.round(X.x - SW / 2) + "px";
  Sb.style.top = Math.round(X.y - SW / 2) + "px";
  Sb.style.width = Sb.style.height = SW + "px";
  Sd.style.left = Math.round(X.x + X.dx - Sj / 2) + "px";
  Sd.style.top = Math.round(X.y + X.dy - Sj / 2) + "px";
  Sd.style.width = Sd.style.height = Sj + "px";
}
G(Sq, "drawStick");
var SZ = G(() => ({
  mode: Sr ? "menu" : "battle",
  floating: !Sw,
  cx: Sw ? Sw.x : 0,
  cy: Sw ? Sw.y : 0,
  travel: Vc(SO, pe("sens")),
  dead: pe("dead") / 100,
  scale: Math.min(window.innerWidth, window.innerHeight)
}), "stickLayout");
function So() {
  if (Sc !== -1) {
    Sc = -1;
    Ve(SN);
    SC();
  }
}
G(So, "endStick");
function Sz(X, P, Bb, Bd) {
  if (X._bound) {
    return;
  }
  X._bound = true;
  X.addEventListener("pointerdown", Bm => {
    Bm.preventDefault();
    {
      let Br = c("tags");
      if (Br && Br.tap(Bm)) {
        return;
      }
    }
    if (Sc !== -1) {
      let BA = false;
      try {
        BA = X.hasPointerCapture(Sc);
      } catch {}
      if (BA) {
        return;
      }
      So();
    }
    try {
      X.setPointerCapture(Bm.pointerId);
    } catch {}
    Sc = Bm.pointerId;
    Si = true;
    Sb = P;
    Sd = Bb;
    Vm(SN, Bm.clientX, Bm.clientY, SZ(), SA());
    P.classList.add("on");
    Bd.classList.remove("on");
    Bb.classList.add("on");
    Sq();
    SC();
  }, {
    passive: false
  });
  X.addEventListener("pointermove", Bm => {
    if (Bm.pointerId === Sc) {
      Bm.preventDefault();
      VA(SN, Bm.clientX, Bm.clientY, SA());
      Sq();
      SC();
    }
  }, {
    passive: false
  });
  let BW = Bm => {
    if (Bm.pointerId === Sc) {
      So();
      P.classList.remove("on");
      Bb.classList.remove("on");
      BO();
    }
  };
  let BO = () => {
    if (Sm) {
      Bd.style.left = Math.round(Sm.x - SW / 2) + "px";
      Bd.style.top = Math.round(Sm.y - SW / 2) + "px";
      Bd.style.width = SW + "px";
      Bd.style.height = SW + "px";
      Bd.classList.add("on");
    }
  };
  X._rest = BO;
  X.addEventListener("pointerup", BW);
  X.addEventListener("pointercancel", BW);
  X.addEventListener("lostpointercapture", BW);
  window.addEventListener("pointerup", BW);
  window.addEventListener("pointercancel", BW);
  let Bj = () => {
    if (Sc !== -1) {
      BW({
        pointerId: Sc
      });
    }
  };
  window.addEventListener("blur", Bj);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      Bj();
    }
  });
}
G(Sz, "bindStick");
function SG(X, P, Bb, Bd, BW, BO, Bj) {
  if (!Bj && (Bd < 60 || Bb < 60)) {
    return;
  }
  SW = Math.round(BO.r * 2);
  SO = Math.round(BO.r * 0.66);
  Sj = Math.round(SW * 0.6);
  Sw = null;
  Sr = !!Bj;
  Sm = BW.dpad && !Bj ? null : {
    x: BO.x,
    y: BO.y
  };
  let Bm = {
    x: BO.x,
    y: BO.y,
    r: BO.r
  };
  if (Bj) {
    Sw = {
      x: Bm.x,
      y: Bm.y
    };
    let Bq = BO.r + 14;
    X = Bm.x - Bq;
    P = Bm.y - Bq;
    Bb = Bd = Bq * 2;
  } else if (BW.dpad) {
    let BZ = Math.max(30, Math.round(Bm.r));
    Sw = {
      x: Bm.x,
      y: Bm.y
    };
    X = Bm.x - BZ - 12;
    P = Bm.y - BZ - 12;
    Bb = Bd = BZ * 2 + 24;
    let Bz = Math.round(BZ * 0.62);
    let BG = Sp("dph", "dpx");
    Sl(BG, Bm.x - BZ, Bm.y - Bz / 2, BZ * 2, Bz);
    Su(BG);
    let Bf = Sp("dpv", "dpx");
    Sl(Bf, Bm.x - Bz / 2, Bm.y - BZ, Bz, BZ * 2);
    Su(Bf);
  }
  let Br = Bj ? Sp("mzone", "mstick") : Sp("zone", "zone");
  Sl(Br, X, P, Bb, Bd);
  SB(Br, "move");
  Su(Br);
  let BA = Sp("ring", "ring");
  let Be = Sp("nub", "nub");
  let BC = Sp("ghost", "ghost");
  BA._live = Be._live = BC._live = true;
  P9(BA, SW);
  P9(BC, SW);
  PX(Be, Sj);
  Sz(Br, BA, Be, BC);
  if (Sc === -1) {
    if (Sm) {
      Br._rest();
    } else {
      BC.classList.remove("on");
    }
  }
}
G(SG, "stickZone");
function Sf() {
  for (let X of SP.values()) {
    if (X._release) {
      X._release();
    }
  }
  for (let P of ["left", "right", "up", "down", "b1", "b2", "b3"]) {
    if (C.held[P]) {
      q(P, false);
    }
  }
}
G(Sf, "releaseAll");
function Sa() {
  let X = document.createElement("style");
  X.id = "dr-touch-style";
  X.textContent = "\nbody.shell-touch { touch-action:none; -webkit-user-select:none; user-select:none; -webkit-touch-callout:none; }\n#dr-deck { --ctl-op:1; }\n#dr-deck .zone { z-index:1; }\n#dr-deck .mstick { z-index:1; background:transparent; clip-path:none; }\n#dr-deck .rnd, #dr-deck .nav, #dr-deck .ring, #dr-deck .nub, #dr-deck .dpx { opacity:var(--ctl-op); }\n#dr-deck .ghost { opacity:calc(var(--ctl-op) * .85); }\n#dr-deck .ring, #dr-deck .ghost, #dr-deck .nub { background-repeat:no-repeat; image-rendering:pixelated; }\n#dr-deck .rnd, #dr-deck .nav { clip-path:none; background-color:transparent; background-image:var(--lab),var(--up); background-repeat:no-repeat; image-rendering:pixelated; }\n#dr-deck .rnd.hit, #dr-deck .nav.hit { filter:none; background-image:var(--labd),var(--dn); }\n#dr-deck .dpx { position:absolute; z-index:0; pointer-events:none; display:none; background:var(--ui-plate); clip-path:var(--st4); }\n#dr-deck .dpx.on { display:block; }\n#dr-deck .util.hold { opacity:.5; }\n#dr-deck .util.hold.arming { opacity:1; background-color:#6e2630; transition:background-color .6s linear; }\n";
  document.head.appendChild(X);
  let P = () => document.body.classList.contains("shell-touch");
  document.addEventListener("gesturestart", Bb => {
    if (P()) {
      Bb.preventDefault();
    }
  }, {
    passive: false
  });
  document.addEventListener("touchmove", Bb => {
    if (P() && Bb.touches && Bb.touches.length > 1) {
      Bb.preventDefault();
    }
  }, {
    passive: false
  });
  document.addEventListener("dblclick", Bb => {
    if (P()) {
      Bb.preventDefault();
    }
  }, {
    passive: false
  });
}
G(Sa, "mountGuards");
var SH = null;
var Sh = false;
var u1 = false;
var u2 = {
  tick(X, P) {
    if (!Sh) {
      XR();
      Sa();
      ln = document.getElementById("game");
      SV = document.getElementById("info");
      lo = document.createElement("div");
      lo.id = "dr-deck";
      document.body.appendChild(lo);
      Sh = true;
    }
    let Bb = H.isCoarse(P);
    if (Bb) {
      SJ();
      Xm();
    }
    let Bd = X === "battle";
    if (X !== SH) {
      H.freeze(Bd && Bb);
      SH = X;
    }
    let BW = Bb && Bd;
    H.deckActive = BW;
    H.menuDeck = Bb && X === "menu";
    H.pinTop = Bb && (X === "lab" || X === "spellcard" || X === "survivors");
    let BO = H.ensure(ln, SV, P);
    for (let BA of SP.values()) {
      BA._live = false;
    }
    if (Bb && BO.mode !== "desktop" && !PJ.editing()) {
      let Be = SM();
      if (lo._op !== Be.op) {
        lo._op = Be.op;
        lo.style.setProperty("--ctl-op", String(Be.op));
      }
      if (BW) {
        up(BO, Be);
      } else if (X === "menu") {
        if (uQ()) {
          uR(BO, Be, true);
        } else if (y()) {
          uJ(BO, Be, {
            c: true
          });
        } else {
          uL(BO, Be);
        }
      } else if (X === "title") {
        uJ(BO, Be, {
          c: false
        });
      } else if (X === "lab") {
        uE(BO, Be);
      } else if (uM(X)) {
        uB(BO, Be, {
          c: true
        });
      }
    }
    let Bj = false;
    for (let BC of SP.values()) {
      if (BC._live) {
        Bj = true;
      } else {
        SS(BC, "on", false);
        if (BC._release) {
          BC._release();
        }
      }
      if (BC._vis !== BC._live) {
        BC._vis = BC._live;
        BC.style.display = BC._live ? "" : "none";
      }
    }
    let Bm = SP.get("zone");
    let Br = SP.get("mzone");
    if (Sc !== -1 && (!Bm || !Bm._live) && (!Br || !Br._live)) {
      So();
    }
    if (Sc !== -1) {
      VC(SN, SA());
      Sq();
      SC();
    }
    if (!Bj && u1 && Sc === -1) {
      Sf();
    }
    u1 = Bj;
  }
};
function u3(X) {
  if (X) {
    if (s.myfight === 1 && o.first("obj_target")) {
      return "press";
    } else if (s.myfight === 0 && s.mnfight === 0) {
      if (s.bmenuno === 0) {
        return "cmd";
      } else {
        return "grid";
      }
    } else if (s.mnfight === 2) {
      return "wave";
    } else {
      return "talk";
    }
  }
  if (s.minigameStage) {
    return "wave";
  }
  let P = o.first("obj_attackpress");
  if (P && P.active === 1) {
    return "press";
  } else if (s.myfight !== 0) {
    if (o.first("obj_heart")) {
      return "wave";
    } else {
      return "talk";
    }
  } else if (s.bmenuno === 0) {
    return "cmd";
  } else {
    return "grid";
  }
}
G(u3, "phaseOf");
var u4 = [[-0.45, 0.5], [0.45, 1.15], [-0.45, 1.8]];
var u5 = [[0.17, 0.74], [0.5, 0.5], [0.83, 0.26]];
function u6(X, P, Bb = 0, Bd = false) {
  let BW = X.mode === "landscape";
  let BO = 18;
  let Bj = Bd && !BW ? 0.8 : 1;
  let Bm = Math.round(P.k * 64 * Bj);
  let Br = Math.round(P.k * 66 * Bj);
  let BA = {};
  if (BW) {
    let Be = P.lefty ? X.pillarR : X.pillarL;
    let BC = P.lefty ? X.pillarL : X.pillarR;
    let Bq = (Be === X.pillarL && Bb ? Bb : Be.y) + 8;
    let BZ = Math.max(30, Math.min(Br, Math.floor(Be.w / 2) - 12, Math.floor((Be.y + Be.h - 24 - Bq) / 2)));
    BA.stick = {
      x: Be.x + Math.round(Be.w / 2),
      y: Be.y + Be.h - 24 - BZ,
      r: BZ
    };
    let Bz = Math.max(36, Math.min(Bm, Math.floor((BC.w - 8) / 1.9), Math.floor((BC.h - BO * 2) / 2.4)));
    let BG = BC.x + Math.round(BC.w / 2);
    let Bf = BC.y + BC.h - BO;
    u4.forEach(([Ba, BH], Bn) => {
      BA["b" + (Bn + 1)] = {
        x: BG + Math.round(Ba * Bz * (P.lefty ? -1 : 1)),
        y: Bf - Math.round(BH * Bz),
        r: Bz / 2
      };
    });
  } else {
    let Ba = X.deck || {
      x: 0,
      y: 0,
      w: window.innerWidth,
      h: window.innerHeight
    };
    let BH = Math.min(Bm, Math.floor((Ba.w - BO * 2) / 5.2));
    let Bn = BH * 3.1;
    let Bh = BH * 2.1;
    let Bv = P.lefty ? Ba.x + BO : Ba.x + Ba.w - BO - Bn;
    u5.forEach(([U0, U1], U2) => {
      BA["b" + (U2 + 1)] = {
        x: Math.round(Bv + (P.lefty ? 1 - U0 : U0) * Bn),
        y: Math.round(Ba.y + Ba.h - BO - Bh + U1 * Bh),
        r: BH / 2
      };
    });
    let Bg = Math.max(30, Math.min(Br, Math.floor((Ba.w - Bn - BO * 2 - 20) / 2), Math.floor((Ba.h - 38) / 2)));
    BA.stick = {
      x: P.lefty ? Ba.x + Ba.w - BO - 12 - Bg : Ba.x + BO + 12 + Bg,
      y: Ba.y + Ba.h - BO - 12 - Bg,
      r: Bg
    };
  }
  return BA;
}
G(u6, "spots");
function u7(X, P, Bb, Bd) {
  let BW = u6(X, P, Bb, Bd);
  let BO = {};
  for (let Bj of ["stick", "b1", "b2", "b3"]) {
    BO[Bj] = PJ.at(Bj, X, BW[Bj]);
  }
  return BO;
}
G(u7, "laid");
PJ.defaults = X => u6(X, SM(), 56);
function u8(X, P, Bb) {
  let Bd = u7(X, P, Bb);
  let BW = [Bd.b1, Bd.b2, Bd.b3];
  return {
    zx: Bd.b1.x,
    zy: Bd.b1.y,
    zr: Bd.b1.r,
    xx: Bd.b2.x,
    xy: Bd.b2.y,
    xr: Bd.b2.r,
    cx: Bd.b3.x,
    cy: Bd.b3.y,
    cr: Bd.b3.r,
    L: Bd,
    x0: Math.min(...BW.map(BO => BO.x - BO.r)) - 16,
    x1: Math.max(...BW.map(BO => BO.x + BO.r)) + 16,
    top: Math.min(...BW.map(BO => BO.y - BO.r)) - 12
  };
}
G(u8, "zxColumn");
var uX = {
  b1: "confirm",
  b2: "cancel",
  b3: "menu"
};
function uV(X, P, Bb, Bd = "") {
  let BW = PJ.key(P);
  if (!BW) {
    return false;
  }
  let BO = Sp(X, "rnd");
  Sl(BO, Bb.x - Bb.r, Bb.y - Bb.r, Bb.r * 2, Bb.r * 2);
  P7(BO, PJ.letter(P), Bb.r * 2, Bd);
  SB(BO, uX[BW]);
  SD(BO, BW);
  Su(BO);
  return true;
}
G(uV, "rndBtn");
function uP(X, P) {
  let Bb = X.L;
  for (let [Bd, BW] of [["bz", "b1"], ["bx", "b2"], ["bc", "b3"]]) {
    if (!P || PJ.key(BW) === "b1") {
      uV(Bd, BW, Bb[BW]);
    }
  }
}
G(uP, "zxButtons");
function up(Bb, Bd) {
  let BW = Bb.mode === "landscape";
  let BO = Bb.pillarL;
  let Bj = Bb.pillarR;
  let Bm = Bb.deck;
  let Br = By();
  let BA = y();
  let Be = BA ? null : u3(Br);
  uS.phase = Be;
  let BC = uS(Bb, Bd, BA ? "modal" : null);
  if (BA) {
    uB(Bb, Bd, {
      c: true
    });
    return;
  }
  if (uu()) {
    uB(Bb, Bd);
    return;
  }
  let Bq = lt();
  let BZ = s.charturn;
  let Bz = Bq.filter(U3 => U3.id.startsWith("bt") && (Br || U3.slot === BZ));
  let BG = Bq.filter(U3 => U3.id.startsWith("cell") && String(U3.label || "").trim());
  let Bf = Bq.filter(U3 => U3.id.startsWith("tgt"));
  let Ba = Bq.filter(U3 => /^press\d/.test(U3.id));
  let BH = Bq.find(U3 => U3.id === "pressany");
  let Bn = u8(Bb, Bd, BC.bottom);
  let Bh = BW ? Bd.lefty ? Bj : BO : null;
  let Bv = BW ? Bd.lefty ? BO : Bj : null;
  let Bg = BW ? Bh === BO ? Math.max(Bh.y + 8, BC.bottom + 8) : Bh.y + 8 : 0;
  let U0 = BW ? 0 : Bn.top;
  let U1 = U3 => Math.max(Bm.y + 8, U0 - U3);
  let U2 = true;
  if (Be === "press") {
    U2 = false;
    let U3 = Ba.length ? Ba : BH ? [BH] : [];
    let U4 = BW ? Bv : Bm;
    let U5 = U4.w - 16;
    let U6 = Math.max(48, Math.min(72, Math.floor((U4.h * 0.6 - (U3.length - 1) * 8) / Math.max(1, U3.length))));
    let U7 = U6 * U3.length + (U3.length - 1) * 8;
    let U8 = U4.y + U4.h - 18 - U7;
    U3.forEach((U9, UX) => {
      let UV = Sp("press" + UX, "press");
      Sl(UV, U4.x + 8, U8 + UX * (U6 + 8), U5, U6);
      SU(UV, String(U9.label || "PRESS"), U5);
      SB(UV, U9.label || "press");
      SQ(UV, () => lt().find(UP => UP.id === U9.id) || U9);
      Su(UV);
    });
  } else if (Be === "cmd" && Bz.length) {
    let U9 = Bz.length;
    if (BW && !Br) {
      U2 = false;
      let UX = Math.max(32, Math.min(46, Math.floor((Bv.h - 28) / U9)));
      let UV = U9 * UX + 16;
      uN(Bz, Bv.x + 2, Bv.y + Bv.h - 12 - UV, Bv.w - 4, UX);
      let UP = Bn.xr;
      let Up = Bh.x + Math.round(Bh.w / 2);
      let Ul = Bh.y + Bh.h - 18 - UP;
      let US = UP;
      uV("bx", "b2", PJ.at("b2", Bb, {
        x: Up,
        y: Ul,
        r: UP
      }));
      uV("bc", "b3", PJ.at("b3", Bb, {
        x: Up,
        y: Ul - UP - 12 - US,
        r: US
      }));
    } else if (BW) {
      let Uu = U9 * 46 + 16;
      uN(Bz, Bh.x + 2, Math.max(Bg, Bh.y + Bh.h - 12 - Uu), Bh.w - 4, 46);
    } else {
      let UB = U9 * 46 + 16;
      uN(Bz, Bm.x + 8, U1(UB + 8), Bm.w - 16, 46);
    }
  } else if (Be === "grid" && (BG.length || Bf.length)) {
    let UU = Bf.length ? Bf : BG;
    let UI = 2;
    if (BW) {
      let Uk = UU.length;
      let UF = Uk > 6;
      let Ux = Bh.x + 2;
      let UJ = Bh.w - 4;
      let UM = UJ - 16;
      let UE = Bh.y + Bh.h - 12 - Bg - 16;
      let UR = Math.max(UF ? 28 : 36, Math.min(44, Math.floor((UE - (Uk - 1) * UI) / Uk)));
      let UQ = Uk * UR + (Uk - 1) * UI;
      let UD = Math.max(Bg + 8, Bh.y + Bh.h - 12 - 8 - UQ);
      uY("gridp", Ux, UD - 8, UJ, UQ + 16);
      UU.forEach((UK, UT) => ui(UK, UT, Ux + 8, UD + UT * (UR + UI), UM, UR, false));
    } else if (Bf.length) {
      let UK = Bf.length * 44 + (Bf.length - 1) * UI;
      let UT = Bm.x + 8;
      let UL = Bm.w - 16;
      let UY = U1(UK + 24) + 8;
      uY("gridp", UT, UY - 8, UL, UK + 16);
      Bf.forEach((Uy, UN) => ui(Uy, UN, UT + 8, UY + UN * (44 + UI), UL - 16, 44, true));
    } else {
      let Uy = Bm.x + 8;
      let UN = Bm.w - 16;
      let Uc = Math.floor((UN - 16 - UI) / 2);
      let Ut = Math.ceil(BG.length / 2);
      let Ui = UU.find(UO => UO.sel) || UU[0];
      let Uw = Ui ? String(Ui.desc || "").trim() : "";
      let Ub = Ui ? String(Ui.meta || "").trim() : "";
      let Ud = Uw || Ub ? 72 : 0;
      let UW = Ut * 44 + (Ut - 1) * UI;
      let Us = U1(UW + Ud + 24) + 8;
      uY("gridp", Uy, Us - 8, UN, UW + Ud + 16);
      BG.forEach((UO, Uj) => ui(UO, Uj, Uy + 8 + Uj % 2 * (Uc + UI), Us + (Uj / 2 | 0) * (44 + UI), Uc, 44, true));
      if (Ud) {
        let UO = Sp("desc", "desc");
        Sl(UO, Uy + 8, Us + UW + 8, UN - 16, Ud - 8);
        V8(UO, Uw + (Ub ? (Uw ? "\n" : "") + Ub : ""), XD, UN - 32);
        SS(UO, "on", true);
        UO._live = true;
      }
    }
  } else {
    ul(Bb, Bd, Bn);
  }
  if (U2) {
    uP(Bn);
  }
}
G(up, "render");
function ul(X, P, Bb) {
  let Bd = window.innerWidth;
  let BW = window.innerHeight;
  let BO = Bb.L.stick;
  let Bj = BO.x < Bd / 2;
  let Bm = Bj ? 0 : Math.round(Bd / 2);
  let Br = Math.round(BW * 0.22);
  SG(Bm, Br, Bj ? Math.round(Bd / 2) : Bd - Bm, BW - Br, P, BO);
}
G(ul, "waveStick");
function uS(X, Bb, Bd) {
  let BW = X.mode === "landscape";
  let BO = BW ? X.pillarL : null;
  let Bj = 44;
  let Bm = 6;
  let Br = X.canvas ? X.canvas.y : 50;
  let BA = BW ? BO.x + 6 : 6 + (X.safe ? X.safe.l : 0);
  let Be = BW ? BO.y + 6 : Math.max((X.safe ? X.safe.t : 0) + 2, Br - Bj - 2);
  let BC = uS.phase === "wave";
  let Bq = BA;
  let BZ = Be;
  let Bz = U0 => {
    if (BW && Bq + U0 > BO.x + BO.w - 4) {
      Bq = BA;
      BZ += Bj + Bm;
    }
    let U1 = {
      x: Bq,
      y: BZ
    };
    Bq += U0 + Bm;
    return U1;
  };
  let BG = Bd === "modal" ? "Close" : "Leave";
  let Bf = V5(BG, "back");
  let Ba = Sp("esc", "util");
  let BH = Bz(Bf);
  Sl(Ba, BH.x, BH.y, Bf, Bj);
  SU(Ba, BG, Bf, "back");
  let Bn = BC && Bd !== "modal";
  SB(Ba, Bn ? "hold to leave the fight" : "leave the fight");
  SY(Ba);
  Ba._holdMode = Bn;
  SS(Ba, "hold", Bn);
  Su(Ba);
  let Bh = () => {
    if (Bd === "modal" || !c || !c("timeline")) {
      return;
    }
    let U0 = Sp("rew", "util");
    BH = Bz(44);
    Sl(U0, BH.x, BH.y, 44, Bj);
    SU(U0, "", 44, "rewind");
    SB(U0, "hold to rewind");
    Sy(U0, "r");
    Su(U0);
  };
  if (BW) {
    Bh();
  }
  let Bv = V5("Tools", "wrench");
  let Bg = Sp("tools", "util");
  BH = Bz(Bv);
  Sl(Bg, BH.x, BH.y, Bv, Bj);
  SU(Bg, "Tools", Bv, "wrench");
  SB(Bg, "toolbox");
  ST(Bg, "Tab");
  SS(Bg, "recede", false);
  Su(Bg);
  if (!BW) {
    Bh();
  }
  if (uu()) {
    let U0 = Sp("dbg", "util");
    BH = Bz(52);
    Sl(U0, BH.x, BH.y, 52, Bj);
    SU(U0, "F1", 52);
    SB(U0, "debug overlay");
    ST(U0, "F1");
    Su(U0);
  }
  return {
    bottom: BZ + Bj
  };
}
G(uS, "chips");
uS.phase = null;
function uu() {
  try {
    let X = f.__DR && f.__DR.app;
    let P = X && X.getHost && X.getHost();
    return !!P && !!P.isDebugOpen && !!P.isDebugOpen();
  } catch {
    return false;
  }
}
G(uu, "debugOpen");
function uB(X, P, {
  c: Bb = false,
  extra: Bd = null
} = {}) {
  let BW = u7(X, P, 0, true);
  let BO = uI();
  SG(0, 0, 0, 0, P, BW.stick, true);
  let Bj = Bm => Xw(BO[PJ.letter(Bm)] || "");
  uV("nkz", "b1", BW.b1, Bj("b1"));
  uV("nkx", "b2", BW.b2, Bj("b2"));
  if (Bb) {
    uV("nkc", "b3", BW.b3, Bj("b3"));
  }
  uF(X, BW, Bd);
}
G(uB, "navPad");
function uU() {
  let X = Q && Q.kit;
  if (!X) {
    return null;
  }
  let P = X.state().hintNow;
  if (P && performance.now() - P.at < 300) {
    return P.items;
  } else {
    return null;
  }
}
G(uU, "hintsNow");
function uI() {
  let X = {};
  for (let P of uU() || []) {
    X[P.key] = P.word;
  }
  return X;
}
G(uI, "saidNow");
var uk = {
  TAB: "wrench",
  Q: "list",
  "/": "search",
  F: "star",
  R: "dice",
  "[ ]": "grid",
  "CTRL+K": "search",
  U: "party",
  P: "party",
  V: "film",
  L: "heart",
  ESC: "back",
  ENTER: "play"
};
function uF(X, Bb, Bd = null) {
  let BW = Q && Q.kit;
  if (!BW || (Q.deckHints = performance.now(), performance.now() - (BW.state().homeAt ?? -1000000000) < 300)) {
    return;
  }
  let BO = (uU() || []).filter(BG => BG.act && !/^[ZXC]$/.test(BG.key));
  if (Bd && !BO.some(BG => BG.key === Bd.key)) {
    BO.unshift(Bd);
  }
  if (!BO.length) {
    return;
  }
  let Bj = 40;
  let Bm = 6;
  let Br = X.mode === "landscape";
  let BA = BO.map(BG => {
    let Bf = Xw(BG.word);
    let Ba = uk[BG.key];
    return {
      it: BG,
      word: Bf,
      icon: Ba,
      w: V5(Bf, Ba)
    };
  });
  let Be = [[]];
  if (Br) {
    let BG = X.pillarL;
    let Bf = BG.x + 6;
    let Ba = BG.w - 12;
    let BH = Bb ? Math.min(...["stick", "b1", "b2", "b3"].map(Bg => Bb[Bg]).filter(Bg => Bg.x < BG.x + BG.w).map(Bg => Bg.y - Bg.r), BG.y + BG.h) - 6 : BG.y + BG.h;
    let Bn = Bf;
    let Bh = BG.y + 6;
    let Bv = Ba - 50;
    for (let Bg of BA) {
      if (Bn > Bf && Bn + Bg.w > Bf + Bv) {
        Bn = Bf;
        Bh += Bj + Bm;
        Bv = Ba;
      }
      if (Bh + Bj > BH) {
        break;
      }
      ux(Bg, Bn, Bh, Bg.w, Bj);
      Bn += Bg.w + Bm;
    }
    return;
  }
  let BC = X.deck;
  if (!BC) {
    return;
  }
  let Bq = BC.w - 16;
  let BZ = Bb ? Math.min(...["stick", "b1", "b2", "b3"].map(U0 => Bb[U0].y - Bb[U0].r)) : BC.y + BC.h;
  let Bz = 0;
  for (let U0 of BA) {
    if (Bz && Bz + Bm + U0.w > Bq) {
      Be.push([]);
      Bz = 0;
    }
    Be[Be.length - 1].push(U0);
    Bz += (Bz ? Bm : 0) + U0.w;
  }
  Be.forEach((U1, U2) => {
    let U3 = U1.reduce((U6, U7) => U6 + U7.w, 0) + Bm * (U1.length - 1);
    let U4 = BC.x + Math.round((BC.w - U3) / 2);
    let U5 = BZ - 10 - (Be.length - U2) * Bj - (Be.length - U2 - 1) * Bm;
    if (!(U5 < BC.y + 2)) {
      for (let U6 of U1) {
        ux(U6, U4, U5, U6.w, Bj);
        U4 += U6.w + Bm;
      }
    }
  });
}
G(uF, "mirrorHints");
function ux(X, P, Bb, Bd, BW) {
  let BO = Sp("mh" + X.it.key, "util");
  Sl(BO, P, Bb, Bd, BW);
  SU(BO, X.word, Bd, X.icon);
  SB(BO, X.word.toLowerCase());
  BO._act = X.it.act;
  SE(BO, () => ({
    act: BO._act
  }));
  Su(BO);
}
G(ux, "hintChip");
function uJ(X, P, Bb) {
  uB(X, P, Bb);
}
G(uJ, "renderNav");
function uM(X) {
  try {
    let P = c(X);
    return !!P && !!P.navDeck && !!P.navDeck();
  } catch {
    return false;
  }
}
G(uM, "modeMenu");
function uE(X, P) {
  if (!o.first("obj_heart") || y()) {
    uB(X, P, {
      c: true
    });
    return;
  }
  uR(X, P);
}
G(uE, "renderLab");
function uR(X, P, Bb = false) {
  let Bd = document.querySelector("#dr-fs.on");
  let BW = u8(X, P, Bd ? Bd.getBoundingClientRect().bottom : 0);
  ul(X, P, BW);
  uP(BW, Bb);
}
G(uR, "waveDeck");
var uQ = G(() => {
  try {
    let X = c && c("tutorial");
    return !!X && !!X.dodging && !!X.dodging();
  } catch {
    return false;
  }
}, "tutDodging");
function uD(X) {
  q(X, true);
  q(X, false);
}
G(uD, "tapKey");
function uK(X) {
  let P = c("runs");
  if (!P || !P.openRun || !X || X.menuno !== 0 || X.listMode || X.page || typeof X.cOptions != "function") {
    return false;
  }
  let Bb = null;
  try {
    Bb = X.fightList()[X.fightsel];
  } catch {
    Bb = null;
  }
  return !!Bb && !Bb.mode;
}
G(uK, "runsOffered");
function uT(X, P) {
  uB(X, P, {
    c: true,
    extra: {
      key: "TAB",
      word: "Tools",
      act: () => window.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true
      }))
    }
  });
}
G(uT, "renderGameMenu");
function uL(X, Bb) {
  if (Q && Q.kit) {
    uT(X, Bb);
    return;
  }
  let Bd = f.DR;
  let BW = Bd && Bd.menu;
  if (!BW) {
    return;
  }
  let BO = X.mode === "landscape";
  let Bj = BW.menuno === 0;
  let Bm = BW.menuno === 6;
  let Br = (U4, U5, U6, U7, U8, U9, UX, UV = "util", UP = [2, 1]) => {
    let Up = Sp(U4, UV);
    Sl(Up, U6, U7, U8, U9);
    SU(Up, U5, U8);
    SB(Up, U5.toLowerCase());
    SE(Up, () => ({
      act: UX
    }));
    Su(Up);
    return Up;
  };
  let BA = U4 => {
    if (Bm && BW.editor) {
      BW.editor.cycleTab(U4);
    } else if (Bj) {
      BW.cycleFightTab(U4);
    }
  };
  let Be = () => {
    if (Bm && BW.editor) {
      BW.editor.searching = true;
      BW.editor.zone = "list";
    } else {
      BW.zone = "list";
      BW.searching = true;
    }
    C.textFocus = true;
    B5();
  };
  let BC = () => {
    if (Bj) {
      BW.zone = "list";
      if (BW.searching) {
        BW.searching = false;
        C.textFocus = false;
      }
    }
    uD("b1");
  };
  let Bq = () => window.dispatchEvent(new KeyboardEvent("keydown", {
    key: "Tab",
    bubbles: true
  }));
  let BZ = Bj ? BW.page && !BW.listMode ? "OPEN" : "START" : Bm ? "ADD" : "OK";
  let Bz = 48;
  let BG = 8;
  let Bf = (() => {
    let U4 = document.getElementById("dr-rows");
    return !!U4 && !!U4.classList.contains("on");
  })();
  let Ba = Bf && (Bj || Bm);
  let BH = BW.menuno === 1 || BW.menuno === 2 || BW.menuno === 3;
  let Bn = (U4, U5, U6, U7, U8) => {
    let U9 = Sp("ma" + U4[0], "nav");
    Sl(U9, U5, U6, U7, U8);
    P8(U9, U4[0].toUpperCase(), Math.min(U7, U8));
    SB(U9, U4);
    SD(U9, U4);
    Su(U9);
  };
  if (BO) {
    let U4 = Bb.lefty ? X.pillarR : X.pillarL;
    let U5 = Bb.lefty ? X.pillarL : X.pillarR;
    Br("mtools", "TOOLS", U4.x + 6, U4.y + 6, Math.min(96, U4.w - 12), 44, Bq);
    let U6 = U5.w - 12;
    let U7 = U5.x + 6;
    let U8 = U5.y + U5.h - 18;
    Br("mstart", BZ, U7, U8 - 56, U6, 56, BC, "press");
    if (Bf && Bj) {
      if (uK(BW)) {
        Br("mopts", "OPTIONS", U7, U8 - 56 - BG - Bz, U6, Bz, () => BW.cOptions(BW.fightList(), BW.fightsel));
      }
    } else {
      Br("mback", "BACK", U7, U8 - 56 - BG - Bz, U6, Bz, () => uD("b2"));
    }
    if ((Bj || Bm) && !Ba) {
      let U9 = U4.w - 12;
      let UX = U4.x + 6;
      let UV = Math.floor((U9 - BG) / 2);
      let UP = U4.y + U4.h - 18;
      Br("msearch", "SEARCH", UX, UP - Bz, U9, Bz, Be);
      Br("mtabl", "<", UX, UP - Bz - BG - Bz, UV, Bz, () => BA(-1));
      Br("mtabr", ">", UX + UV + BG, UP - Bz - BG - Bz, UV, Bz, () => BA(1));
    }
    if (BH) {
      let Up = Math.max(40, Math.min(50, Math.floor((U4.w - 12 - BG * 2) / 3)));
      let Ul = U4.x + Math.round(U4.w / 2);
      let US = U4.y + U4.h - 18 - Up;
      Bn("left", Ul - Up / 2 - BG - Up, US, Up, Up);
      Bn("down", Ul - Up / 2, US, Up, Up);
      Bn("right", Ul + Up / 2 + BG, US, Up, Up);
      Bn("up", Ul - Up / 2, US - BG - Up, Up, Up);
    }
    return;
  }
  let Bh = X.deck;
  if (!Bh) {
    return;
  }
  let Bv = Bh.x + 8;
  let Bg = Bh.w - 16;
  let U0 = Bh.y + Bh.h - 18;
  let U1 = Bb.lefty ? Bv : Bv + Bg - 120;
  let U2 = Bb.lefty ? Bv + Bg - 96 : Bv;
  Br("mstart", BZ, U1, U0 - 56, 120, 56, BC, "press");
  if (!Bf || !Bj) {
    Br("mback", "BACK", U2, U0 - Bz, 96, Bz, () => uD("b2"));
  }
  let U3 = Ba && Bj ? U0 - Bz : U0 - 56 - BG - Bz;
  if ((Bj || Bm) && !Ba) {
    Br("mtabl", "<", Bv, U3, 48, Bz, () => BA(-1));
    Br("mtabr", ">", Bv + 48 + BG, U3, 48, Bz, () => BA(1));
    Br("msearch", "SEARCH", Bv + (48 + BG) * 2, U3, Bg - (48 + BG) * 2 - 96 - BG, Bz, Be);
  }
  if (BH) {
    let Uu = Math.max(40, Math.min(52, Math.floor((Bg - 96 - BG * 4) / 4)));
    let UB = Bb.lefty ? Bv + Bg - Uu * 4 - BG * 3 : Bv;
    ["left", "up", "down", "right"].forEach((UU, UI) => Bn(UU, UB + UI * (Uu + BG), U3 + Bz - Uu, Uu, Uu));
  }
  if (Ba && Bj && uK(BW)) {
    let UU = [["mtools", "TOOLS", Bq], ["mopts", "OPTIONS", () => BW.cOptions(BW.fightList(), BW.fightsel)]];
    let UI = Math.max(44, Math.min(96, Math.floor((Bg - 120 - BG - (UU.length - 1) * BG) / UU.length)));
    UU.forEach(([Uk, UF, Ux], UJ) => Br(Uk, UF, Bb.lefty ? Bv + Bg - UI - UJ * (UI + BG) : Bv + UJ * (UI + BG), U0 - Bz, UI, Bz, Ux, "util", [1]));
    return;
  }
  Br("mtools", "TOOLS", Ba && Bj ? Bb.lefty ? Bv + Bg - 96 : Bv : BH && Bb.lefty ? Bv : Bv + Bg - 96, U3, 96, Bz, Bq);
}
G(uL, "renderMenu");
function uY(X, P, Bb, Bd, BW) {
  let BO = Sp(X, "panel");
  Sl(BO, P, Bb, Bd, BW);
  Su(BO);
}
G(uY, "drawer");
var uy = {
  FIGHT: "sword",
  ACT: "hand",
  MAGIC: "star",
  ITEM: "bag",
  SPARE: "close",
  MERCY: "close",
  DEFEND: "shield"
};
function uN(X, P, Bb, Bd, BW) {
  uY("cmdp", P, Bb, Bd, X.length * BW + 16);
  X.forEach((BO, Bj) => uc(BO, Bj, P + 8, Bb + 8 + Bj * BW + 1, Bd - 16, BW - 2));
}
G(uN, "cmdDrawer");
function uc(X, P, Bb, Bd, BW, BO) {
  let Bj = Sp("cmd" + P, "cmd");
  let Bm = !!X.sel;
  let Br = String(X.label || X.id);
  Sl(Bj, Bb, Bd, BW, BO);
  V4(Bj, {
    word: Xw(Br),
    icon: uy[Br.toUpperCase()],
    col: X.off ? XL : Bm ? XQ : XD,
    iconCol: X.off ? XL : Bm ? XT : XD,
    left: 28
  });
  SS(Bj, "sel", Bm);
  SS(Bj, "off", !!X.off);
  SB(Bj, Br);
  if (Bj._role !== 1) {
    Bj._role = 1;
    Bj.setAttribute("role", "button");
  }
  SE(Bj, () => lt().find(BA => BA.id === X.id) || X);
  Su(Bj);
}
G(uc, "cmdCell");
function ui(X, P, Bb, Bd, BW, BO, Bj) {
  let Bm = Sp("cell" + P, "cell");
  Sl(Bm, Bb, Bd, BW, BO);
  if (!Bm._lb) {
    Bm._lb = document.createElement("span");
    Bm._lb.className = "lb";
    Bm._mt = document.createElement("span");
    Bm._mt.className = "mt";
    Bm.appendChild(Bm._lb);
    Bm.appendChild(Bm._mt);
  }
  let Br = Bj ? String(X.meta || "") : "";
  let BA = Br ? Math.round(BW * 0.38) : 0;
  V6(Bm._lb, X.label || "", X.off ? XL : X.sel ? XQ : XD, Math.max(24, BW - 36 - (BA ? BA + 6 : 0)));
  V6(Bm._mt, Br, X.metaDim ? XL : XT, BA);
  SS(Bm, "sel", !!X.sel);
  SS(Bm, "off", !!X.off);
  SB(Bm, (X.label || "") + (X.meta ? " " + X.meta : ""));
  SE(Bm, () => lt().find(Be => Be.id === X.id) || X);
  Su(Bm);
}
G(ui, "gridCell");
function uw(X, P) {
  let Bb = X.getBoundingClientRect();
  if (!Bb.width || !Bb.height) {
    return null;
  }
  let Bd = X.width / r;
  let BW = X.height / r;
  let BO = (P.clientX - Bb.left) * (Bd / Bb.width);
  let Bj = (P.clientY - Bb.top) * (BW / Bb.height);
  if (s.roomScale === 2) {
    BO /= 2;
    Bj /= 2;
  }
  return {
    x: BO,
    y: Bj,
    inside: BO >= 0 && Bj >= 0 && BO < Bd * (s.roomScale === 2 ? 0.5 : 1) && Bj < BW
  };
}
G(uw, "toGame");
var ub = {
  cur: [],
  prev: [],
  mark: 0,
  prevMark: 0,
  marked: false,
  begin() {
    this.prev = this.cur;
    this.prevMark = this.mark;
    this.cur = [];
    this.mark = 0;
    this.marked = false;
  },
  rect(X, P, Bb, Bd, BW, BO) {
    this.cur.push({
      id: X,
      x: P,
      y: Bb,
      w: Bd,
      h: BW,
      on: BO
    });
  },
  markTop() {
    if (this.marked) {
      this.cur.length = this.mark;
    } else {
      this.mark = this.cur.length;
    }
    this.marked = true;
  },
  at(X, P, Bb = false) {
    let Bd = Bb ? this.prevMark : 0;
    for (let BW = this.prev.length - 1; BW >= Bd; BW--) {
      let BO = this.prev[BW];
      if (X >= BO.x && P >= BO.y && X < BO.x + BO.w && P < BO.y + BO.h) {
        return BO;
      }
    }
    return null;
  },
  near(X, P, Bb, Bd) {
    let BW = Bb ? this.prevMark : 0;
    let BO = 14;
    let Bj = null;
    let Bm = null;
    let Br = 9;
    for (let BA = this.prev.length - 1; BA >= BW; BA--) {
      let Be = this.prev[BA];
      if (X >= Be.x && P >= Be.y && X < Be.x + Be.w && P < Be.y + Be.h && !Bj && (Bj = Be, Be.w < Bd || Be.h < Bd)) {
        return Be;
      }
      if (!Be.on || Be.w >= Bd && Be.h >= Bd) {
        continue;
      }
      let BC = Math.min(BO, Math.max(0, (Bd - Be.w) / 2));
      let Bq = Math.min(BO, Math.max(0, (Bd - Be.h) / 2));
      let BZ = Math.abs(X - (Be.x + Be.w / 2)) - Be.w / 2;
      let Bz = Math.abs(P - (Be.y + Be.h / 2)) - Be.h / 2;
      if (BZ >= BC || Bz >= Bq) {
        continue;
      }
      let BG = Math.max(BZ / (BC + 1), Bz / (Bq + 1)) + (Math.abs(X - (Be.x + Be.w / 2)) + Math.abs(P - (Be.y + Be.h / 2))) / 4000;
      if (BG < Br) {
        Br = BG;
        Bm = Be;
      }
    }
    return Bm || Bj;
  },
  hover(X) {
    return ud.kind === "mouse" && ud.inside && !!(this.at(ud.x, ud.y) || {}).id && this.at(ud.x, ud.y).id === X;
  }
};
var ud = {
  x: 0,
  y: 0,
  inside: false,
  down: false,
  kind: "mouse",
  id: -1,
  downX: 0,
  downY: 0,
  moved: false,
  wheel: 0,
  dragY: 0,
  fling: 0
};
var uW = 0.9;
var uO = 2;
var uj = [];
var um = G(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "nowMs");
var uA = [];
var ue = null;
var uC = G(X => {
  q(X, true);
  q(X, false);
}, "tap");
var uq = 10;
function uZ(X, P) {
  let Bb = (BW, BO) => X.addEventListener(BW, BO, {
    passive: false
  });
  Bb("pointerdown", BW => {
    let BO = uw(X, BW);
    if (BO) {
      BW.preventDefault();
      try {
        X.setPointerCapture(BW.pointerId);
      } catch {}
      ud.x = BO.x;
      ud.y = BO.y;
      ud.inside = BO.inside;
      ud.kind = BW.pointerType || "mouse";
      ud.down = true;
      ud.id = BW.pointerId;
      ud.downX = BO.x;
      ud.downY = BO.y;
      ud.moved = false;
      ud._lastY = BO.y;
      ud.dragY = 0;
      ud.fling = 0;
      uj = [{
        t: um(),
        y: BO.y
      }];
      if (BW.button === 2) {
        uC("b2");
        return;
      }
      if (B1()) {
        if (document.activeElement !== ue) {
          B5(false);
        }
        return;
      }
      try {
        X.focus({
          preventScroll: true
        });
      } catch {
        X.focus();
      }
    }
  });
  Bb("pointermove", BW => {
    let BO = uw(X, BW);
    if (BO) {
      ud.x = BO.x;
      ud.y = BO.y;
      ud.inside = BO.inside;
      if (BW.pointerType) {
        ud.kind = BW.pointerType;
      }
      if (ud.down && BW.pointerId === ud.id && (Math.abs(BO.x - ud.downX) > uq || Math.abs(BO.y - ud.downY) > uq)) {
        ud.moved = true;
      }
      if (ud.down && BW.pointerId === ud.id) {
        ud.dragY += BO.y - (ud._lastY === undefined ? BO.y : ud._lastY);
        let Bj = um();
        for (uj.push({
          t: Bj,
          y: BO.y
        }); uj.length > 2 && Bj - uj[0].t > 100;) {
          uj.shift();
        }
      }
      ud._lastY = BO.y;
    }
  });
  Bb("pointerup", BW => {
    let BO = uw(X, BW);
    if (BO && (BW.preventDefault(), ud.down && BW.pointerId === ud.id)) {
      ud.down = false;
      if (!ud.moved && BW.button !== 2) {
        uA.push({
          x: BO.x,
          y: BO.y,
          button: BW.button || 0,
          kind: BW.pointerType || "mouse"
        });
      }
      if (ud.moved && BW.pointerType !== "mouse" && uj.length > 1) {
        let Bj = uj[0];
        let Bm = uj[uj.length - 1];
        let Br = Bm.t - Bj.t;
        if (Br > 0 && um() - Bm.t < 100) {
          let BA = (Bm.y - Bj.y) / Br * 33.333333333333336;
          if (Math.abs(BA) >= uO) {
            ud.fling = Math.max(-120, Math.min(120, BA));
          }
        }
      }
      uj = [];
    }
  });
  let Bd = () => {
    ud.down = false;
    ud.moved = false;
    ud.fling = 0;
    uj = [];
    B7();
  };
  Bb("pointercancel", Bd);
  X.addEventListener("pointerleave", BW => {
    if (BW.pointerType === "mouse") {
      ud.inside = false;
    }
  });
  X.addEventListener("contextmenu", BW => BW.preventDefault());
  window.addEventListener("blur", Bd);
  Bb("wheel", BW => {
    BW.preventDefault();
    BV(BW);
  });
  ue = document.getElementById("textin");
  if (ue) {
    let BW = () => {
      let BO = ue.value;
      let Bj = B3;
      let Bm = 0;
      while (Bm < BO.length && Bm < Bj.length && BO[Bm] === Bj[Bm]) {
        Bm++;
      }
      if (Bj.length > Bm) {
        C.backspaceCount = (C.backspaceCount || 0) + (Bj.length - Bm);
      }
      for (let Br of BO.slice(Bm)) {
        if (/[ -~]/.test(Br)) {
          C.typedQueue.push(Br.toLowerCase());
        }
      }
      B3 = BO;
    };
    ue.addEventListener("input", BO => {
      BW();
      if (!BO.isComposing) {
        B4();
      }
    });
    ue.addEventListener("compositionend", () => {
      BW();
      B4();
    });
    ue.addEventListener("keydown", BO => {
      if (BO.key === "Enter" || BO.key === "Escape") {
        BO.preventDefault();
        B6();
      }
    });
    ue.addEventListener("blur", () => {
      if (!B1()) {
        C.textFocus &&= false;
      }
    });
  }
  Bi(X);
  uh(X);
}
G(uZ, "initPointer");
var uo = new Set(["r", "w", "t", "n", "l", "tab", "-", "=", "+", "0", "c", "v", "x", "pageup", "pagedown", ..."123456789"]);
var uz = new Set(["t", "i", "j", "c", "r", "n", "w", "delete"]);
var uG = new Set(["Tab", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", "Backspace", "/", "'", "F1", "F2", "F3", "F4", "F7", "F8", "F9", "F10", "Alt", "ContextMenu"]);
function uf(X) {
  let P = X.key || "";
  if (X.ctrlKey || X.metaKey) {
    let Bb = P.toLowerCase();
    if (Bb === "control" || Bb === "meta" || Bb === "shift" || Bb === "alt") {
      return false;
    } else if (X.shiftKey) {
      return !uz.has(Bb);
    } else {
      return !uo.has(Bb);
    }
  }
  if (X.altKey) {
    return P === "Alt" || P === "F10";
  } else {
    return uG.has(P) || X.shiftKey && P === "F10";
  }
}
G(uf, "appOwnsKey");
var ua = null;
var uH = null;
function un() {
  if (uH) {
    if (B1() && ue) {
      if (document.activeElement !== ue) {
        B5(false);
      }
      return;
    }
    if (document.activeElement !== ue || !C.textFocus) {
      try {
        uH.focus({
          preventScroll: true
        });
      } catch {
        uH.focus();
      }
    }
  }
}
G(un, "focusApp");
function uh(X) {
  if (typeof document !== "undefined" && !!document.addEventListener) {
    uH = X;
    window.addEventListener("keydown", P => {
      let Bb = P.target;
      if ((!Bb || Bb.tagName !== "INPUT" && Bb.tagName !== "TEXTAREA" || Bb === ue) && (Bb !== ue || !ug(P) || !!P.ctrlKey || !!P.metaKey)) {
        if (uf(P)) {
          P.preventDefault();
        }
      }
    }, true);
    window.addEventListener("keyup", P => {
      if (P.key === "Alt" || P.key === "F10") {
        P.preventDefault();
      }
    }, true);
    document.addEventListener("pointerdown", P => {
      let Bb = P.target;
      if (Bb !== X && Bb !== ue && (!Bb || Bb.tagName !== "INPUT" && Bb.tagName !== "TEXTAREA" && Bb.tagName !== "BUTTON" && Bb.tagName !== "A") && (!ua || Bb !== ua && !ua.contains(Bb))) {
        setTimeout(un, 0);
      }
    });
    document.addEventListener("focusout", () => setTimeout(() => {
      if (document.hasFocus() && (!document.activeElement || document.activeElement === document.body)) {
        un();
      }
      B0();
    }, 0));
    window.addEventListener("focus", () => {
      setTimeout(() => {
        if (!document.activeElement || document.activeElement === document.body) {
          un();
        }
        B0();
      }, 0);
    });
    window.addEventListener("blur", () => setTimeout(B0, 0));
    ua = document.getElementById("focushint");
    if (ua) {
      let P = Bb => {
        Bb.preventDefault();
        Bb.stopPropagation();
        un();
        B0(true);
      };
      ua.addEventListener("pointerdown", P);
      ua.addEventListener("click", Bb => {
        Bb.preventDefault();
        Bb.stopPropagation();
      });
    }
    un();
    setTimeout(() => {
      un();
      B0();
    }, 0);
    setInterval(B0, 500);
  }
}
G(uh, "initFocus");
var ug = G(X => typeof X.key == "string" && X.key.length === 1, "key1");
function B0(X = false) {
  if (!ua) {
    return;
  }
  let P = !X && typeof document.hasFocus == "function" && !document.hasFocus();
  if (document.visibilityState === "hidden") {
    P = false;
  }
  if (P) {
    let Bb = uH && uH.getBoundingClientRect();
    if (Bb && Bb.width) {
      ua.style.left = Math.round(Bb.left + Bb.width / 2) + "px";
      ua.style.top = Math.round(Bb.top + Math.max(8, Bb.height * 0.02)) + "px";
    }
  }
  ua.hidden = !P;
}
G(B0, "syncHint");
var B1 = G(() => {
  let X = Y && Y();
  return !!X && !!X.text;
}, "textModalUp");
var B2 = "  ";
var B3 = B2;
function B4() {
  if (ue) {
    ue.value = B2;
    B3 = B2;
    try {
      ue.setSelectionRange(B2.length, B2.length);
    } catch {}
  }
}
G(B4, "resetText");
function B5(X = true) {
  if (ue) {
    if (X || ue.value !== B2) {
      B4();
    }
    try {
      ue.focus({
        preventScroll: true
      });
    } catch {
      ue.focus();
    }
  }
}
G(B5, "focusText");
function B6() {
  if (ue) {
    ue.blur();
  }
}
G(B6, "blurText");
function B7() {
  for (let X of ["left", "right", "up", "down", "b1", "b2", "b3"]) {
    if (C.held[X]) {
      q(X, false);
    }
  }
}
G(B7, "releaseAll");
function B8(X) {
  if (ud.fling) {
    ud.dragY += ud.fling;
    ud.fling *= uW;
    if (Math.abs(ud.fling) < 0.5) {
      ud.fling = 0;
    }
  }
  BF(X);
  BS(X);
  let P = uA.splice(0, uA.length);
  for (let Bb of P) {
    if (E(Bb)) {
      continue;
    }
    let Bd = y();
    if (X === "battle" && !Bd) {
      if (!M(Bb)) {
        Bt(Bb);
      }
      continue;
    }
    let BW = Bb.kind !== "mouse" && uH ? ub.near(Bb.x, Bb.y, Bd, B9()) : ub.at(Bb.x, Bb.y, Bd);
    if (BW && BW.on) {
      BW.on(Bb);
    }
  }
  ub.begin();
}
G(B8, "pointerTick");
function B9() {
  let X = uH.getBoundingClientRect().width || 640;
  return Math.min(70, 44 / Math.max(0.3, X / 640));
}
G(B9, "touchNeed");
var BX = {
  steps: 0,
  part: 0,
  at: 0,
  read: 0
};
function BV(X) {
  let P = (Math.abs(X.deltaX) > Math.abs(X.deltaY) ? X.deltaX : X.deltaY) * (X.deltaMode === 1 ? 33 : X.deltaMode === 2 ? 400 : 1);
  let Bb = um();
  let Bd = Math.abs(P);
  let BW = Bb - BX.at < 28;
  if (!P) {
    return;
  }
  if (Bb - BX.at > 240 || P * BX.part < 0) {
    BX.part = 0;
  }
  BX.at = Bb;
  BX.lock = true;
  BX.lx = ud.x;
  BX.ly = ud.y;
  if (Bd >= 50 && !BW) {
    BX.steps += Math.sign(P) * Math.max(1, Math.round(Bd / 120));
    return;
  }
  BX.part += P;
  let BO = Math.trunc(BX.part / 90);
  if (BO) {
    BX.steps += BO;
    BX.part -= BO * 90;
  }
}
G(BV, "noteWheel");
var BP = G(() => {
  BX.read = um();
  ud.wheel = 0;
  let X = um() - BX.at > 1500 ? 0 : BX.steps;
  BX.steps = 0;
  return Math.max(-5, Math.min(5, X));
}, "takeWheelSteps");
var Bp = G(() => t("a11y", "hover", true) === false ? false : BX.lock ? Math.abs(ud.x - BX.lx) + Math.abs(ud.y - BX.ly) <= 12 ? false : (BX.lock = false, true) : true, "hoverFree");
var Bl = G(() => BP() * 100, "takeWheel");
function BS(X) {
  if (!BX.steps || um() - BX.read < 600 || C.textFocus) {
    return;
  }
  if (um() - BX.at > 1500) {
    BX.steps = 0;
    return;
  }
  if (X !== "menu" && (!y || !y())) {
    return;
  }
  let P = BX.steps > 0 ? "down" : "up";
  BX.steps -= Math.sign(BX.steps);
  if (!C.held[P]) {
    uC(P);
  }
}
G(BS, "wheelToKeys");
var Bu = G(() => {
  BI = true;
  let X = ud.dragY;
  ud.dragY = 0;
  return X;
}, "takeDrag");
var BB = 26;
var BU = G(() => {
  let X = J();
  return !!X && !!X.open;
}, "debugUp");
var BI = false;
var Bk = 0;
function BF(X) {
  let P = BI;
  BI = false;
  if (P || ud.kind === "mouse" || C.textFocus) {
    Bk = 0;
    return;
  }
  let Bb = y && y();
  if (X === "battle" && !Bb && !BU()) {
    Bk = 0;
    return;
  }
  if (X !== "menu" && X !== "battle" && X !== "lab" && X !== "title") {
    Bk = 0;
    return;
  }
  Bk += ud.dragY;
  ud.dragY = 0;
  if (Math.abs(Bk) < BB) {
    return;
  }
  let Bd = Bk < 0 ? "down" : "up";
  Bk += Bk < 0 ? BB : -BB;
  if (Math.abs(Bk) > BB * 3) {
    Bk = Math.sign(Bk) * BB * 3;
  }
  if (!C.held[Bd]) {
    uC(Bd);
  }
}
G(BF, "dragFallback");
var Bx = 31;
var BJ = 32;
var BM = 35;
var BE = 15;
var BR = 375;
var BQ = 30;
function BD() {
  let X = o.first("obj_battlecontroller");
  if (!X) {
    return [];
  }
  if (!X.havechar) {
    return Bc(X);
  }
  let P = [];
  let Bb = o.first("obj_attackpress");
  if (Bb && Bb.active === 1) {
    let Bj = j();
    let Bm = Bb.rowh ?? 38;
    let Br = Bb.barY ?? Bb.y;
    if (s.flag[13] === 1 && Bj <= 3) {
      for (let BA = 0; BA < Bj; BA++) {
        P.push({
          id: "press" + BA,
          x: Bb.x,
          y: Br + Bm * BA,
          w: 300,
          h: Bm,
          label: String(s.charname[s.char[BA]] || "").toUpperCase(),
          act: () => uC(["b1", "b2", "b3"][BA])
        });
      }
    }
    P.push({
      id: "pressany",
      x: 0,
      y: 0,
      w: 640,
      h: 480,
      label: "PRESS",
      act: () => uC("b1")
    });
    return P;
  }
  if (s.myfight !== 0 || !X.havechar || !s.bmenucoord) {
    return P;
  }
  let Bd = s.charturn;
  let BW = s.bmenucoord;
  let BO = X.bp;
  if (s.bmenuno === 0 && j() > 3) {
    if (X.boxBtnX == null || !(Bd >= 0) || !(Bd < j())) {
      return P;
    }
    let Be = O(s.char[Bd]);
    let BC = ["spr_btfight", Be === 1 ? "spr_btact" : "spr_bttech", "spr_btitem", "spr_btspare", "spr_btdefend"];
    let Bq = ["FIGHT", Be === 1 ? "ACT" : "MAGIC", "ITEM", "SPARE", "DEFEND"];
    for (let BZ = 0; BZ < 5; BZ++) {
      P.push({
        id: "bt" + Bd + BZ,
        x: X.boxBtnX + BM * BZ,
        y: 485 - BO,
        w: Bx,
        h: BJ,
        spr: BC[BZ],
        label: Bq[BZ],
        slot: Bd,
        sel: BW[0][Bd] === BZ,
        act: () => {
          BW[0][Bd] = BZ;
          uC("b1");
        }
      });
    }
    return P;
  }
  if (s.bmenuno === 0) {
    let Bz = X.chartotal;
    for (let BG = 0; BG < j(); BG++) {
      if (X.havechar[BG] !== 1) {
        continue;
      }
      let Bf = Bz === 3 ? [0, 212, 424][BG] : Bz === 2 ? [106, 326][BG] : 212;
      let Ba = O(s.char[BG]);
      let BH = ["spr_btfight", Ba === 1 ? "spr_btact" : "spr_bttech", "spr_btitem", "spr_btspare", "spr_btdefend"];
      let Bn = ["FIGHT", Ba === 1 ? "ACT" : "MAGIC", "ITEM", "SPARE", "DEFEND"];
      for (let Bh = 0; Bh < 5; Bh++) {
        P.push({
          id: "bt" + BG + Bh,
          x: Bf + BE + BM * Bh,
          y: 485 - BO,
          w: Bx,
          h: BJ,
          spr: BH[Bh],
          label: Bn[Bh],
          slot: BG,
          sel: BG === Bd && BW[0][Bd] === Bh,
          act: () => {
            if (BG === Bd) {
              BW[0][Bd] = Bh;
              uC("b1");
            }
          }
        });
      }
    }
    return P;
  }
  if ([1, 3, 11, 12].includes(s.bmenuno) || [7, 8].includes(s.bmenuno)) {
    let Bv = s.bmenuno === 7 || s.bmenuno === 8;
    let Bg = Bv && j() > 3;
    let U0 = Bg ? Math.floor((BW[s.bmenuno][Bd] | 0) / 6) * 6 : 0;
    for (let U1 = U0; U1 < (Bg ? Math.min(j(), U0 + 6) : 3); U1++) {
      if (Bv ? s.char[U1] > 0 : s.monster[U1] === 1) {
        P.push({
          id: "tgt" + U1,
          x: Bg ? 50 + (U1 - U0 < 3 ? 0 : 280) : 40,
          y: BR + (Bg ? (U1 - U0) % 3 : U1) * BQ,
          w: Bg ? 270 : 560,
          h: BQ,
          label: String(Bv ? s.charname[s.char[U1]] || "" : s.monstername[U1] || ""),
          meta: Bv ? s.hp[s.char[U1]] + "/" + s.maxhp[s.char[U1]] : String(s.monstercomment[U1] || ""),
          metaDim: true,
          sel: BW[s.bmenuno][Bd] === U1,
          act: () => {
            BW[s.bmenuno][Bd] = U1;
            uC("b1");
          }
        });
      }
    }
    return P;
  }
  if (s.bmenuno === 2 && s.flag[34] === 0 && s.chapter !== 1 && Array.isArray(s.battlespell)) {
    return BK(X);
  }
  if (s.bmenuno === 2 || s.bmenuno === 4 || s.bmenuno === 9) {
    let U2 = BW[s.bmenuno][Bd] > 5 ? 1 : 0;
    let U3 = U7 => s.bmenuno === 2 ? (s.spell[s.char[Bd]] || [])[U7] !== 0 : s.bmenuno === 4 ? (X.tempitem[U7] ? X.tempitem[U7][Bd] : 0) !== 0 : U7 < 6 && !!(s.actname[BW[11][Bd]] || [])[U7];
    let U4 = s.char[Bd];
    let U5 = BW[11][Bd];
    let U6 = U7 => {
      if (s.bmenuno === 2) {
        let U9 = (s.spellcost[U4] || [])[U7] || 0;
        return {
          label: String((s.spellnameb[U4] || [])[U7] || ""),
          meta: Math.round(U9 / s.maxtension * 100) + "% TP",
          desc: String((s.spelldescb[U4] || [])[U7] || "").split("#").join("\n"),
          off: s.tension < U9
        };
      }
      if (s.bmenuno === 4) {
        let UX = X.tempitem[U7] ? X.tempitem[U7][Bd] : 0;
        let UV = UX && m[UX];
        return {
          label: String(UV ? UV[1] : ""),
          meta: "",
          desc: String(UV ? UV[3] : ""),
          off: false
        };
      }
      let U8 = (s.actcost[U5] || [])[U7] || 0;
      return {
        label: String((s.actname[U5] || [])[U7] || ""),
        meta: s.tensionselect > 0 ? Math.round(U8 / s.maxtension * 100) + "% TP" : "",
        desc: String((s.actdesc[U5] || [])[U7] || "").split("#").join("\n"),
        off: s.tension < U8
      };
    };
    for (let U7 of s.bmenuno === 4 || s.bmenuno === 2 ? [0, 1] : [U2]) {
      for (let U8 = 0; U8 < 3; U8++) {
        for (let U9 = 0; U9 < 2; U9++) {
          let UX = U7 * 6 + U8 * 2 + U9;
          if (!U3(UX)) {
            continue;
          }
          let UV = U7 === U2;
          P.push({
            id: "cell" + UX,
            x: UV ? U9 === 0 ? 20 : 250 : -999,
            w: UV ? 220 : 0,
            y: UV ? BR + U8 * BQ : -999,
            h: UV ? BQ : 0,
            ...U6(UX),
            sel: BW[s.bmenuno][Bd] === UX,
            act: () => {
              BW[s.bmenuno][Bd] = UX;
              uC("b1");
            }
          });
        }
      }
    }
    if (s.bmenuno === 4 && (U2 === 1 || s.item[6] !== 0)) {
      P.push({
        id: "more",
        x: 470,
        y: U2 ? 370 : 436,
        w: 36,
        h: 34,
        label: U2 ? "PAGE 1" : "PAGE 2",
        act: () => {
          BW[4][Bd] = U2 ? 0 : 6;
        }
      });
    }
    return P;
  }
  return P;
}
G(BD, "battleRegions");
function BK(X) {
  let P = s.charturn;
  let Bb = s.bmenucoord;
  let Bd = s.battlespell[P] || [];
  let BW = (s.battlespellname || [])[P] || [];
  let BO = (s.battlespellcost || [])[P] || [];
  let Bj = (s.battlespelldesc || [])[P] || [];
  let Bm = Bb[2][P] > 5 ? 1 : 0;
  let Br = [];
  for (let BA of [0, 1]) {
    for (let Be = 0; Be < 3; Be++) {
      for (let BC = 0; BC < 2; BC++) {
        let Bq = BA * 6 + Be * 2 + BC;
        let BZ = BA === Bm;
        if (!Bd[Bq] || BW[Bq] === undefined || !String(BW[Bq]).trim()) {
          continue;
        }
        let Bz = BO[Bq] || 0;
        let BG = false;
        try {
          BG = !!X.techUnlocked && !X.techUnlocked(P, Bq) || !!(s.chapter >= 4) && !!d.techBlocked && !!d.techBlocked(X, P, Bq);
        } catch {
          BG = false;
        }
        Br.push({
          id: "cell" + Bq,
          x: BZ ? BC === 0 ? 20 : 250 : -999,
          y: BZ ? BR + Be * BQ : -999,
          w: BZ ? 220 : 0,
          h: BZ ? BQ : 0,
          label: String(BW[Bq]),
          meta: Bz > 0 ? Math.floor(Bz / s.maxtension * 100) + "% TP" : "",
          desc: String(Bj[Bq] || "").split("#").join("\n"),
          off: s.tension < Bz || BG,
          sel: Bb[2][P] === Bq,
          act: () => {
            Bb[2][P] = Bq;
            uC("b1");
          }
        });
      }
    }
  }
  return Br;
}
G(BK, "techCells");
var BT = ["obj_fightbt", "obj_talkbt", "obj_itembt", "obj_sparebt"];
var BL = ["FIGHT", "ACT", "ITEM", "MERCY"];
var BY = G(X => String(X ?? "").replace(/\\[A-Za-z0-9]/g, "").replace(/\^\d/g, "").replace(/[/%]/g, "").trim(), "utClean");
var By = G(() => {
  let X = o.first("obj_battlecontroller");
  return !!X && !X.havechar;
}, "isUTBattle");
function BN() {
  let X = typeof (s.msg && s.msg[0]) == "string" ? s.msg[0] : "";
  let P = new Array(6).fill("");
  X.split("&").forEach((Bb, Bd) => {
    if (!(Bd > 2)) {
      Bb.split("*").slice(1).forEach((BW, BO) => {
        if (BO < 2) {
          P[BO * 3 + Bd] = BY(BW);
        }
      });
    }
  });
  return P;
}
G(BN, "utActNames");
function Bc(X) {
  let P = [];
  let Bb = s.bmenucoord;
  if (!Bb) {
    return P;
  }
  if (s.myfight === 1 && o.first("obj_target")) {
    P.push({
      id: "pressany",
      x: 0,
      y: 0,
      w: 640,
      h: 480,
      label: "PRESS",
      act: () => uC("b1")
    });
    return P;
  }
  if (s.myfight !== 0 || s.mnfight !== 0 || X.active !== 1) {
    return P;
  }
  let Bd = s.idealborder || [32, 602, 250, 385];
  let BW = Bd[0];
  let BO = Bd[2];
  let Bj = Bm => BO + 28 + Bm * 32;
  if (s.bmenuno === 0) {
    BT.forEach((Bm, Br) => {
      let BA = o.first(Bm);
      if (!BA) {
        return;
      }
      let Be = s.mercy === 2 && Br === 3 || s.mercy === 3 && Br !== 1;
      P.push({
        id: "bt0" + Br,
        x: BA.x,
        y: BA.y,
        w: 110,
        h: 42,
        spr: BA.sprite_index,
        frame: Bb[0] === Br ? 1 : 0,
        label: BL[Br],
        slot: 0,
        sel: Bb[0] === Br,
        off: Be,
        ut: true,
        act: () => {
          if (!Be) {
            Bb[0] = Br;
            uC("b1");
          }
        }
      });
    });
    return P;
  }
  if (s.bmenuno === 1 || s.bmenuno === 2 || s.bmenuno === 11) {
    for (let Bm = 0; Bm < 3; Bm++) {
      if (s.monster[Bm] === 1) {
        P.push({
          id: "tgt" + Bm,
          x: BW + 8,
          y: Bj(Bm) - 10,
          w: 560,
          h: 32,
          label: BY((s.monstername || [])[Bm]) || "Enemy",
          meta: "",
          sel: Bb[1] === Bm,
          act: () => {
            Bb[1] = Bm;
            uC("b1");
          }
        });
      }
    }
    return P;
  }
  if (s.bmenuno === 10) {
    let Br = BN();
    let BA = s.choices || [];
    for (let Be = 0; Be < 6; Be++) {
      if (!BA[Be]) {
        continue;
      }
      let BC = Be / 3 | 0;
      let Bq = Be % 3;
      P.push({
        id: "cell" + Be,
        x: BC ? BW + 280 : BW + 20,
        y: Bj(Bq) - 10,
        w: 250,
        h: 32,
        label: Br[Be] || "ACT " + (Be + 1),
        meta: "",
        desc: "",
        sel: Bb[2] === Be,
        act: () => {
          Bb[2] = Be;
          uC("b1");
        }
      });
    }
    return P;
  }
  if (s.bmenuno >= 3 && s.bmenuno < 4) {
    let BZ = s.bmenuno === 3.5 ? 1 : 0;
    let Bz = s.item || [];
    let BG = s.itemnameb || [];
    for (let Bf = 0; Bf < 8; Bf++) {
      if (!Bz[Bf]) {
        continue;
      }
      let Ba = Bf - BZ * 4;
      let BH = Ba >= 0 && Ba < 4;
      P.push({
        id: "cell" + Bf,
        x: BH ? Ba & 1 ? BW + 268 : BW + 20 : -999,
        y: BH ? (Ba >> 1 ? BO + 60 : BO + 28) - 10 : -999,
        w: BH ? 240 : 0,
        h: BH ? 32 : 0,
        label: BY(BG[Bf]) || "ITEM " + (Bf + 1),
        meta: "",
        desc: "",
        sel: BH && Bb[3] === Ba,
        act: () => {
          s.bmenuno = Bf >= 4 ? 3.5 : 3;
          Bb[3] = Bf % 4;
          uC("b1");
        }
      });
    }
    if (Bz[4]) {
      P.push({
        id: "more",
        x: BW + 300,
        y: Bj(2) - 10,
        w: 240,
        h: 32,
        label: BZ ? "PAGE 1" : "PAGE 2",
        act: () => {
          Bb[3] = BZ ? 0 : 1;
          uC(BZ ? "left" : "right");
        }
      });
    }
    return P;
  }
  if (s.bmenuno === 4) {
    (s.mercy < 1 ? ["Spare", "Flee"] : ["Spare"]).forEach((Bn, Bh) => P.push({
      id: "tgt" + Bh,
      x: BW + 8,
      y: Bj(Bh) - 10,
      w: 300,
      h: 32,
      label: Bn,
      meta: "",
      sel: Bb[4] === Bh,
      act: () => {
        Bb[4] = Bh;
        uC("b1");
      }
    }));
  }
  return P;
}
G(Bc, "utRegions");
function Bt(X) {
  let P = BD();
  for (let Bb = 0; Bb < P.length; Bb++) {
    let Bd = P[Bb];
    if (X.x >= Bd.x && X.y >= Bd.y && X.x < Bd.x + Bd.w && X.y < Bd.y + Bd.h) {
      Bd.act();
      return true;
    }
  }
  return false;
}
G(Bt, "battleClick");
function Bi() {
  let X = document.getElementById("touchpad");
  if (X) {
    X.remove();
  }
}
G(Bi, "initTouchPad");
function Bw(X, P) {
  u2.tick(X, P);
}
G(Bw, "updateTouchPad");
export { H as a, X5 as b, Xl as c, XM as d, XR as e, XQ as f, XD as g, XK as h, XT as i, XL as j, Xw as k, Xd as l, Xm as m, Xf as n, Xn as o, Xh as p, Xg as q, V3 as r, V6 as s, V8 as t, VI as u, uw as v, ub as w, ud as x, uZ as y, B5 as z, B6 as A, B8 as B, BP as C, Bp as D, Bl as E, Bu as F, Bw as G };
