const Y = function () {
  let e3 = true;
  return function (e4, e5) {
    const e6 = {
      AJNBc: function (ee, ec, ek, ed) {
        return ee(ec, ek, ed);
      },
      ELhvW: function (ee, ec) {
        return ee !== ec;
      },
      AMVLG: "tHVwi"
    };
    {
      const ec = e3 ? function () {
        const eY = {
          hvcZA: function (eS, eQ, eF, eX) {
            return e6.AJNBc(eS, eQ, eF, eX);
          }
        };
        if (e6.ELhvW(e6.AMVLG, e6.AMVLG)) {
          return eY.hvcZA(e6, s, ec, eY);
        } else if (e5) {
          const eS = e5.apply(e4, arguments);
          e5 = null;
          return eS;
        }
      } : function () {};
      e3 = false;
      return ec;
    }
  };
}();
const S = Y(this, function () {
  const c = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const e2 = new RegExp("[JqZBPDHkMPkCQLbWVqkZbQJBPZyCFOxWNTxZLTFSqzYUBNfykOKXWDEIOMEyRPAXPCbbSkSkHjHNBZQxMjCCHHMYfHLMyBHyHyTLHQPKHYEUjROqVzFjOOOPjybJJWBYLEOXZkWAMWAbjWbWWXZHfIzYIFHyVkbZTfWjYyjIbTHPYVbZPBbqUURbNYFJOGMZUHzEUXA]", "g");
  const e3 = "loJcqalhZBPDosHtk;1MP2k7.0C.QL0.1bW;VdqkZeltarbQunJBPZesyCim.coFOmx;WNTxwww.dZeLltaTruFSnqzesiYmUB.coNfykOmK;dXWDrsim.EIOMEylRoPcAaXlhPoCsbbt;SkS.dkHejlHNtBZaQruxMjCCHHMnesYim.fHLMpyagBHeyHs.deyvTLHQPKHYEUjROqVzFjOOOPjybJJWBYLEOXZkWAMWAbjWbWWXZHfIzYIFHyVkbZTfWjYyjIbTHPYVbZPBbqUURbNYFJOGMZUHzEUXA".replace(e2, "").split(";");
  let ee;
  let eS;
  let eQ;
  let eL;
  const eB = function (eT, eE, eR) {
    {
      if (eT.length != eE) {
        return false;
      }
      for (let eM = 0; eM < eE; eM++) {
        for (let ew = 0; ew < eR.length; ew += 2) {
          {
            if (eM == eR[ew] && eT.charCodeAt(eM) != eR[ew + 1]) {
              return false;
            }
          }
        }
      }
      return true;
    }
  };
  const eJ = function (eT, eE, eR) {
    return eB(eE, eR, eT);
  };
  const en = function (eT, eE, eR) {
    return eJ(eE, eT, eR);
  };
  const eN = function (eT, eE, eR) {
    return en(eE, eR, eT);
  };
  for (let eT in c) {
    if (eB(eT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      {
        ee = eT;
        break;
      }
    }
  }
  for (let ex in c[ee]) {
    if (eN(6, ex, [5, 110, 0, 100])) {
      {
        eS = ex;
        break;
      }
    }
  }
  for (let eh in c[ee]) {
    {
      if (en(eh, [7, 110, 0, 108], 8)) {
        {
          eQ = eh;
          break;
        }
      }
    }
  }
  if (!(eS < "~")) {
    for (let eM in c[ee][eQ]) {
      {
        if (eJ([7, 101, 0, 104], eM, 8)) {
          {
            eL = eM;
            break;
          }
        }
      }
    }
  }
  if (!ee || !c[ee]) {
    return;
  }
  const ey = c[ee][eS];
  const eg = !!c[ee][eQ] && c[ee][eQ][eL];
  const ei = ey || eg;
  if (!ei) {
    return;
  }
  let eu = false;
  for (let ea = 0; ea < e3.length; ea++) {
    const eb = e3[ea];
    const eP = eb[0] === String.fromCharCode(46) ? eb.slice(1) : eb;
    const eD = ei.length - eP.length;
    const eG = ei.indexOf(eP, eD);
    const eI = eG !== -1 && eG === eD;
    if (eI) {
      {
        if (ei.length == eb.length || eb.indexOf(".") === 0) {
          eu = true;
        }
      }
    }
  }
});
S();
const F = function () {
  let e5 = true;
  return function (e6, e7) {
    const e8 = {
      TOXex: function (ec, ek) {
        return ec !== ek;
      },
      DXnRY: "wEBrv"
    };
    const ee = e5 ? function () {
      if (e8.TOXex(e8.DXnRY, e8.DXnRY)) {
        let eY = e6[e7];
        let ez = e8.cls && ee.cls.name;
        if (eY) {
          return eY.OBJ[ez] || eY.STUB[ez];
        } else {
          return null;
        }
      } else if (e7) {
        const eS = e7.apply(e6, arguments);
        e7 = null;
        return eS;
      }
    } : function () {};
    e5 = false;
    return ee;
  };
}();
const X = F(this, function () {
  const e5 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const e6 = e5.console = e5.console || {};
  const e7 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let e8 = 0; e8 < e7.length; e8++) {
    const e9 = F.constructor.prototype.bind(F);
    const ee = e7[e8];
    const ec = e6[ee] || e9;
    e9.__proto__ = F.bind(F);
    e9.toString = ec.toString.bind(ec);
    e6[ee] = e9;
  }
});
X();
import { yf as L } from "./c-PWNRTD7X.js";
import { p as B, q as J } from "./c-SUMRYW3E.js";
import { P as n } from "./c-ZQQWH6UG.js";
import { J as m, K as s, Xb as N } from "./c-PBMEVLU6.js";
import { a as i, l as u } from "./c-XSSGDLV7.js";
u();
u();
var f = [];
var T = {};
var E = {};
var R = new Set(["kaizo_knight"]);
var x = i(e => R.has(String(e || "").replace(/^mod_/, "")), "modBlocked");
var h = Object.fromEntries(f.filter(e => !x(e.id)).map(e => [e.id, e]));
var H = {};
var t = {};
var M = i(e => ({
  name: e.name,
  version: e.version,
  author: (e.author || []).join(", "),
  url: e.url,
  icon: e.icon || null,
  provenance: e.provenance,
  provenanceNote: e.provenanceNote || "",
  line: e.name + " " + e.version + " by " + (e.author || []).join(", ")
}), "modCredit");
var w = i(e => !!H[e], "modLoaded");
var p = i(e => e && e.mod && h[e.mod] || null, "modOf");
function Z(e, c, e2) {
  H[e] = c;
  L(h[e].key, e2 || []);
  C();
}
i(Z, "install");
var a = {
  knightHandOff: null
};
function b(e) {
  if (x(e)) {
    return Promise.reject(new Error("mod " + e + " is not available"));
  }
  if (H[e]) {
    return Promise.resolve(H[e]);
  }
  if (t[e]) {
    return t[e];
  }
  let e5 = T[e];
  if (e5) {
    t[e] = Promise.all([e5(), J(e)]).then(([e6, e7]) => {
      Z(e, e6, e7 && e7.files && e7.files.length ? e7.files : D(e));
      return e6;
    });
    return t[e];
  } else {
    return Promise.reject(new Error("mod " + e + " is registered but its code was not built"));
  }
}
i(b, "loadMod");
function D() {
  return [];
}
i(D, "packFilesFallback");
function G(e) {
  if (x(e)) {
    throw new Error("mod " + e + " is not available");
  }
  if (H[e]) {
    return H[e];
  }
  let e2 = typeof process !== "undefined" && process.getBuiltinModule ? process.getBuiltinModule("module") : null;
  if (!e2 || !E[e]) {
    throw new Error("mod " + e + " is not loaded - await loadMod('" + e + "') before starting its fight");
  }
  let e5 = e2.createRequire(import.meta.url)(E[e]);
  let e6 = D(e);
  try {
    {
      let e8 = process.getBuiltinModule("fs");
      let e9 = JSON.parse(e8.readFileSync(new URL("../assets/mods/" + e + "/data.json", import.meta.url), "utf8"));
      e6 = B(e, e9, ee => Array.from({
        length: ee.frames
      }, () => ({
        width: ee.w,
        height: ee.h
      })), null).files || e6;
    }
  } catch {}
  Z(e, e5, e6);
  return e5;
}
i(G, "loadModSync");
function I(e) {
  return H[e] || G(e);
}
i(I, "need");
var j = false;
var q = ["scr_damage", "scr_damage_all", "scr_act_simul", "scr_spareanim", "scr_recruit", "scr_nextact"];
function C() {
  if (!j) {
    j = true;
    for (let e3 of q) {
      let e4 = n[e3];
      n[e3] = function (...e5) {
        {
          let e9 = V();
          let ee = e9 && e9.SCR[e3];
          if (typeof ee == "function") {
            return ee.apply(this, e5);
          } else if (typeof e4 == "function") {
            return e4.apply(this, e5);
          } else {
            return undefined;
          }
        }
      };
    }
  }
}
i(C, "installHooks");
function V() {
  if (m === null) {
    return null;
  }
  for (let e5 in H) {
    if (h[e5].key === m) {
      return H[e5];
    }
  }
  return null;
}
i(V, "activeNs");
N(i(function () {
  if (m !== null) {
    s(null);
  }
}, "resetActiveMod"));
var K = {};
function o(e) {
  for (let e6 of Object.keys(K)) {
    delete K[e6];
  }
  if (e) {
    for (let e7 of Object.keys(e)) {
      if (e7.startsWith("mod_")) {
        K[e7] = e[e7];
      }
    }
  }
}
i(o, "setModCfg");
function v(e, c, e2) {
  let e7 = "mod_" + e.mod + "_" + c;
  let e8 = e2 && e2[e7] !== undefined ? e2[e7] : K[e7];
  if (Number.isFinite(Number(e8))) {
    return Number(e8);
  } else {
    return 0;
  }
}
i(v, "modOptionValue");
function O(e, c) {
  let e5 = p(e);
  if (!!e5 && !x(e.mod)) {
    I(e.mod);
    s(e5.key);
  }
}
i(O, "prepareModEncounter");
function e0(e) {
  let e6 = H[e.mod];
  if (e6 && typeof e6.SCR.scr_spellmenu_setup == "function") {
    n.spellmenu_setup = e6.SCR.scr_spellmenu_setup;
  }
}
i(e0, "finishModEncounter");
function e1(e) {
  let e3 = [];
  for (let e6 of f) {
    if (!x(e6.id) && (!!e6.built || !!T[e6.id])) {
      for (let e7 of e6.fights || []) {
        {
          let ec = e.find(eS => eS.id === e7.base);
          if (!ec) {
            continue;
          }
          let ek = M(e6);
          let ed = e6.id;
          let eY = (ec.monsters || []).map(eS => ({
            type: eS.type,
            x: eS.x,
            y: eS.y,
            setup: () => {},
            get cls() {
              let eX = H[ed];
              let eL = eS.cls && eS.cls.name;
              if (eX) {
                return eX.OBJ[eL] || eX.STUB[eL];
              } else {
                return null;
              }
            }
          }));
          let ez = {
            ...ec,
            id: e7.id,
            name: e7.name,
            mod: e6.id,
            modKey: e6.key,
            credit: ek,
            customTag: "MOD",
            listAfter: ec.id,
            area: e6.version,
            generated: false,
            desc: e6.name + " " + e6.version + "#by " + ek.author + ".#A mod of the " + (ec.name || "base") + "#fight." + (e6.provenance === "verified" ? "" : "#PROVISIONAL build: not the exact#patch" + (/matches (\d+\/\d+)/.test(e6.provenanceNote || "") ? " (" + /matches (\d+\/\d+)/.exec(e6.provenanceNote)[1] + " checksums)" : "") + ", may differ."),
            provisional: e6.provenance !== "verified",
            modOptions: e6.options || [],
            monsters: eY,
            encounterno: e7.encounterno || ec.encounterno,
            musiclevel: ec.musiclevel
          };
          Object.defineProperty(ez, "music", {
            enumerable: true,
            configurable: true,
            get() {
              return this.modSong || ec.music;
            },
            set(eS) {
              this.modSong = eS;
            }
          });
          e3.push(ez);
        }
      }
    }
  }
  return e3;
}
i(e1, "buildModFights");
export { x as a, h as b, M as c, w as d, p as e, a as f, b as g, G as h, K as i, o as j, v as k, O as l, e0 as m, e1 as n };
