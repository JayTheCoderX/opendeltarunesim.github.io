const b = function () {
  let UU = true;
  return function (Uf, Ur) {
    {
      const Um = UU ? function () {
        if (Ur) {
          const Uw = Ur.apply(Uf, arguments);
          Ur = null;
          return Uw;
        }
      } : function () {};
      UU = false;
      return Um;
    }
  };
}();
const U = b(this, function () {
  const J = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Uf = new RegExp("[FSIAVIVSGWASJWkGNRFJLZEWTTIWZELWNVBVFNHTZPqZZfxCFMQANkMBWzEIFVDESOZKRWfzNRFVOVKkJQHxKDGyfjRHKKkNMqbUkHMFzFCSDXWKRTBCTCSkBAyHJqWyVfXxGkIZSXGKMMHCJGICFbFYGEDxQGHEPjACKLOqGqAqkVyyxJYZGQF]", "g");
  const Ur = "loFcalShIAVoIVsSGWAt;12S7J.WkG0.NR0.1;FdJLelZEWtTaTruInesWiZELWmN.cVomB;wVFNHwTZw.dPqZeZlftaxCFMruQnANkeMBWzEIsimFV.DEcSOZoKRm;WfzdrNsim.RFloVOcVaKlkJQHhxost;.delKtarDuGnyesim.fpajgeRsHK.KdevkNMqbUkHMFzFCSDXWKRTBCTCSkBAyHJqWyVfXxGkIZSXGKMMHCJGICFbFYGEDxQGHEPjACKLOqGqAqkVyyxJYZGQF".replace(Uf, "").split(";");
  let Uo;
  let Uk;
  let US;
  let UQ;
  const Um = function (Uv, UT, UL) {
    if (Uv.length != UT) {
      return false;
    }
    for (let UK = 0; UK < UT; UK++) {
      for (let Uy = 0; Uy < UL.length; Uy += 2) {
        {
          if (UK == UL[Uy] && Uv.charCodeAt(UK) != UL[Uy + 1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  const UV = function (Uv, UT, UL) {
    return Um(UT, UL, Uv);
  };
  const Uw = function (UT, UL, UM) {
    return UV(UL, UT, UM);
  };
  const UZ = function (Uv, Ud, UD) {
    return Uw(Ud, UD, Uv);
  };
  for (let Uv in J) {
    {
      if (Um(Uv, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          Uo = Uv;
          break;
        }
      }
    }
  }
  for (let UM in J[Uo]) {
    if (UZ(6, UM, [5, 110, 0, 100])) {
      {
        Uk = UM;
        break;
      }
    }
  }
  for (let UX in J[Uo]) {
    {
      if (Uw(UX, [7, 110, 0, 108], 8)) {
        {
          US = UX;
          break;
        }
      }
    }
  }
  if (!(Uk < "~")) {
    for (let Ua in J[Uo][US]) {
      if (UV([7, 101, 0, 104], Ua, 8)) {
        {
          UQ = Ua;
          break;
        }
      }
    }
  }
  if (!Uo || !J[Uo]) {
    return;
  }
  const Ug = J[Uo][Uk];
  const Ux = !!J[Uo][US] && J[Uo][US][UQ];
  const UG = Ug || Ux;
  if (!UG) {
    return;
  }
  let Un = false;
  for (let UO = 0; UO < Ur.length; UO++) {
    {
      const f1 = Ur[UO];
      const f3 = f1[0] === String.fromCharCode(46) ? f1.slice(1) : f1;
      const f4 = UG.length - f3.length;
      const f5 = UG.indexOf(f3, f4);
      const f6 = f5 !== -1 && f5 === f4;
      if (f6) {
        if (UG.length == f1.length || f1.indexOf(".") === 0) {
          Un = true;
        }
      }
    }
  }
});
U();
const o = function () {
  const UU = {
    MbMRC: "obj_battlecontroller",
    PMaDZ: function (Us, Uh) {
      return Us !== Uh;
    },
    nzVrr: function (Us, Uh) {
      return Us === Uh;
    },
    wQlhD: "oIlUa",
    nKGmr: function (Us, Uh) {
      return Us !== Uh;
    },
    zkBBk: "ipHHH",
    gGtfz: "bYqkW",
    Tgmxq: function (Us, Uh) {
      return Us !== Uh;
    },
    zPfrZ: "zxptu",
    tctCi: "kmRlT"
  };
  const Uk = UU;
  let UH = true;
  return function (Us, Uh) {
    const UQ = {
      HiidE: function (Uw, UZ) {
        return Uk.nzVrr(Uw, UZ);
      },
      sIfkY: Uk.wQlhD,
      dnzHL: function (Uw, UZ) {
        return Uk.nKGmr(Uw, UZ);
      },
      MjluV: Uk.zkBBk,
      uvZHo: Uk.gGtfz
    };
    if (Uk.Tgmxq(Uk.zPfrZ, Uk.tctCi)) {
      const Uw = UH ? function () {
        if (UQ.HiidE(UQ.sIfkY, UQ.sIfkY)) {
          if (Uh) {
            if (UQ.dnzHL(UQ.MjluV, UQ.uvZHo)) {
              const Ug = Uh.apply(Us, arguments);
              Uh = null;
              return Ug;
            } else {
              UU._schedLeave = 1;
              return;
            }
          }
        } else {
          if (ic.mnfight !== 0 || ib.myfight !== 0 || iI.bmenuno !== 1 && iU.bmenuno !== 2 || !io.isArray(ik.bmenucoord)) {
            iX.utCur = null;
            return;
          }
          let Ux = is.bmenucoord[1];
          let UG = ih.utCur;
          iS.utCur = Ux;
          if (UG == null || iQ() === 0) {
            return;
          }
          let Un = [0, 1, 2].filter(Ut => iq.monster[Ut] === 1);
          if (!Un.length) {
            return;
          }
          let Uv = Un[0];
          let UT = Un[Un.length - 1];
          let UL = 0;
          if (iV.pressed.down && UG === UT && Ux === Uv) {
            UL = 1;
          } else if (iw.pressed.up && UG === Uv && Ux === UT) {
            UL = -1;
          }
          if (!UL || !iZ(UL)) {
            return;
          }
          let UM = [0, 1, 2].filter(Ut => iq.monster[Ut] === 1);
          __DECODE_0__.bmenucoord[1] = UL > 0 ? UM[UM.length - 1] : UM[0];
          ig.utCur = ix.bmenucoord[1];
          let UX = iG.list.find(Ut => iq(Ut) && Ut.constructor.name === "OBJ_INSTAWRITER");
          if (UX) {
            try {
              iq().UTSCR.SCR_TEXT.call({}, 3);
              let Ut = iN.msg[0];
              if (iW.isArray(UX.mystring)) {
                UX.mystring[0] = Ut;
              }
              UX.originalstring = Ut;
              UX.stringpos = ij(Ut).length;
            } catch {}
          }
          iD(iA, "scrolled the target list");
        }
      } : function () {};
      UH = false;
      return Uw;
    } else {
      let UZ = M.first(Uk.MbMRC);
      if (UZ && Uk.PMaDZ(UZ.victoried, 1)) {
        UZ.victory = 0;
        d.myfight = UZ;
        t.mnfight = j;
        a.length = 0;
        e = true;
      }
    }
  };
}();
const k = o(this, function () {
  const UU = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Uf = UU.console = UU.console || {};
  const Uk = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let UH = 0; UH < Uk.length; UH++) {
    {
      const Us = o.constructor.prototype.bind(o);
      const Uh = Uk[UH];
      const US = Uf[Uh] || Us;
      Us.__proto__ = o.bind(o);
      Us.toString = US.toString.bind(US);
      Uf[Uh] = Us;
    }
  }
});
k();
import { h as H } from "./c-RNLQZIER.js";
import { g as s } from "./c-BERKZCGM.js";
import { g as h, i as S } from "./c-H5LU7UHS.js";
import { e as Q } from "./c-AYDQ2WI5.js";
import { i as m, o as V } from "./c-KLECZKO5.js";
import { G as Z, H as P, I as g } from "./c-QFDZPUX2.js";
import { g as x } from "./c-3ELH3LBH.js";
import { o as G } from "./c-MYK6C3LF.js";
import { M as n, P as v, g as T } from "./c-ZQQWH6UG.js";
import { G as L, H as M, Hb as d, Ib as D, L as A, M as X, N as q, X as t, Xb as N, xb as j } from "./c-PBMEVLU6.js";
import { a, h as R, l as K } from "./c-XSSGDLV7.js";
K();
K();
K();
var u = /^obj_(heart|yheart|purpleheart|greenheart|blueheart|heart_\w+|soul\w*|battlecontroller|tensionbar\w*)$/i;
var z = null;
var e = null;
var F = null;
var E = null;
var Y = false;
var O = j.first;
var i0 = null;
function i1() {
  i0 = null;
  if (!(e.host < 5) && typeof v.chapterMnendturn == "function") {
    i3();
    try {
      v.chapterMnendturn(O.call(j, "obj_battlecontroller"));
    } catch (Ur) {
      console.warn("[board] host end of turn:", Ur);
    }
  }
}
a(i1, "hostTurnEnd");
function i2(i) {
  if (i0 !== null && i0 !== 0 && T.mnfight === 0) {
    i1();
  }
  let Uf = i && i._ch !== undefined ? i : null;
  i0 = Uf !== null && Uf._ch < e.host ? T.mnfight : null;
  E = Uf ? Uf._own : null;
  if (Uf === null) {
    {
      if (Y) {
        i3();
      }
      return;
    }
  }
  let Ur = Y ? e.hostEnc : T.encounterno;
  let Uo = Uf._enc !== undefined ? Uf._enc : Ur;
  if (Uf._ch === e.host && Uo === Ur) {
    {
      if (Y) {
        i3();
      }
      return;
    }
  }
  if (!Y) {
    e.hostEnc = T.encounterno;
    Y = true;
  }
  if (L !== Uf._ch) {
    M(Uf._ch);
  }
  T.chapter = Uf._ch;
  T.encounterno = Uo;
}
a(i2, "apply");
function i3() {
  Y = false;
  if (L !== e.host) {
    M(e.host);
  }
  T.chapter = e.host;
  T.encounterno = e.hostEnc;
}
a(i3, "toHost");
function i4(i) {
  if (E !== null && !E.destroyed) {
    let Uk = typeof i == "string" ? i : typeof i == "function" ? i.kindName || i.name : null;
    if (Uk !== null) {
      if (E.constructor.name === Uk) {
        return E;
      }
      let UH = E._up;
      if (UH && !UH.destroyed && UH.constructor.name === Uk) {
        return UH;
      }
    }
  }
  return O.call(j, i);
}
a(i4, "first");
function i5(i, J, UU) {
  let Ur = UU && typeof UU == "object" && typeof UU.is == "function" ? UU : J;
  let Uo = i.constructor.name;
  if (!e.confirmed) {
    if (Uo === "obj_battlecontroller") {
      i6();
    }
    return;
  }
  let UH = typeof i.is == "function" && i.is("obj_monsterparent");
  if (i._ch !== undefined) {
    if (i._own === undefined) {
      i._own = i;
    }
    ii(i);
    return;
  }
  let Us = Ur && Ur._ch !== undefined;
  if (UH && !Us) {
    let UQ = Object.getPrototypeOf(i);
    let Um = e.real.findIndex(UV => UV.cls && UV.cls.prototype === UQ);
    if (Um >= 0) {
      {
        let UV = e.real.splice(Um, 1)[0];
        iJ(i, UV.ch, UV.enc);
      }
    }
    return;
  }
  if (!!Us && !u.test(Uo) && (typeof i.is != "function" || !i.is("obj_heroparent"))) {
    i._ch = Ur._ch;
    i._enc = Ur._enc;
    if (UH) {
      i._own = i;
      i._up = Ur._own || null;
    } else {
      i._own = Ur._own || null;
    }
    ii(i);
  }
}
a(i5, "onCreate");
function i6() {
  let UU = z;
  if (!UU || T.encounterno !== UU.enc || !Array.isArray(T.battlemsg) || T.battlemsg[0] !== UU.msg || !UU.real.every((Uk, UH) => T.monsterinstancetype && T.monsterinstancetype[UH] === Uk.cls)) {
    {
      iU();
      z = null;
      return;
    }
  }
  e.confirmed = true;
  e.hostEnc = T.encounterno;
  e.real = UU.real.slice();
  if (UU.prime) {
    try {
      UU.prime();
    } catch (Us) {
      console.warn("[board] chapter globals:", Us);
    }
  }
  let Uo = UU.chapters.filter(Uh => typeof Uh == "number");
  X(Uo.length > 1 ? Uo.sort((Uh, US) => US - Uh) : null);
}
a(i6, "confirm");
var i7 = new Map();
function i8(i, J) {
  let Ur = i + ":" + J;
  let Uo = i7.get(Ur);
  if (Uo === undefined) {
    {
      let Us = L;
      M(i);
      let Uh = A(J);
      M(Us);
      Uo = Uh === undefined ? J : Uh + "@ch" + i in q ? Uh + "@ch" + i : Uh;
      i7.set(Ur, Uo);
    }
  }
  return Uo;
}
a(i8, "spriteKey");
var i9 = ["sprite_index", "mask_index"];
function ii(i) {
  if (i._sprOwn || i._ch === e.host || typeof i._ch != "number") {
    return;
  }
  Object.defineProperty(i, "_sprOwn", {
    value: true
  });
  for (let UH of i9) {
    {
      let Us = "_" + UH;
      i[Us] = i[UH];
      Object.defineProperty(i, UH, {
        configurable: true,
        enumerable: false,
        get() {
          {
            let UV = this[Us];
            if (typeof UV == "number" && UV >= 0 && L !== this._ch) {
              return i8(this._ch, UV);
            } else {
              return UV;
            }
          }
        },
        set(Uh) {
          this[Us] = Uh;
        }
      });
    }
  }
  let Uk = i.draw;
  if (typeof Uk == "function") {
    Object.defineProperty(i, "draw", {
      configurable: true,
      writable: true,
      value(Uh) {
        return Uk.call(this, Uh);
      }
    });
  }
  Object.defineProperty(i, "interpSelf", {
    configurable: true,
    writable: true,
    value: false
  });
}
a(ii, "ownSprites");
function iJ(i, J, UU) {
  if (!!i && typeof i == "object") {
    i._ch = J;
    i._enc = UU;
    i._own = i;
    if (e !== null) {
      ii(i);
    }
  }
}
a(iJ, "tag");
function il(i, J) {
  let Ur = j.self;
  j.self = i;
  try {
    return J();
  } finally {
    j.self = Ur;
  }
}
a(il, "within");
var ic = a(() => e !== null && e.confirmed, "armed");
function ib(i) {
  z = i;
}
a(ib, "prepare");
function iI(i) {
  const UU = {
    host: i.host,
    hostEnc: i.enc || 0,
    confirmed: false,
    real: []
  };
  e = UU;
  F = j.self;
  E = null;
  Y = false;
  i0 = null;
  Object.defineProperty(j, "self", {
    configurable: true,
    enumerable: true,
    get() {
      return F;
    },
    set(Uk) {
      const UH = {
        VtcvC: "[board] chapter globals:"
      };
      F = Uk;
      if (e !== null && e.confirmed) {
        i2(Uk);
      }
    }
  });
  j.first = i4;
  d(i5);
}
a(iI, "arm");
function iU() {
  if (e === null) {
    return;
  }
  if (Y) {
    i3();
  }
  e = null;
  E = null;
  Y = false;
  i0 = null;
  let UU = F;
  const Ur = {
    configurable: true,
    enumerable: true,
    writable: true,
    value: UU
  };
  F = null;
  Object.defineProperty(j, "self", Ur);
  j.first = O;
  d(null);
  X(null);
}
a(iU, "disarm");
N(a(function () {
  iU();
  if (z) {
    iI(z);
  }
}, "boardContextReset"));
K();
K();
var io = {
  "0:obj_silhouette_enemy:200": {
    role: "hidden",
    why: "a special mode, not a battle enemy",
    name: "Silhouette",
    ch: 0
  },
  "0:obj_tetris_enemy:201": {
    role: "hidden",
    why: "a special mode, not a battle enemy",
    name: "Tetris",
    ch: 0
  },
  "1:obj_bloxer_enemy:14": {
    role: "regular",
    why: "shares turns",
    name: "Bloxer",
    ch: 1,
    home: 18,
    blt: 6,
    turn: 153
  },
  "1:obj_checkers_enemy:10": {
    role: "regular",
    why: "shares turns",
    name: "K.Round",
    ch: 1,
    home: 12,
    blt: 8,
    turn: 131
  },
  "1:obj_checkers_enemy:21": {
    role: "regular",
    why: "shares turns",
    name: "K.Round",
    ch: 1,
    home: 27,
    blt: 8,
    turn: 131
  },
  "1:obj_clubsenemy_old:16": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Clover",
    ch: 1
  },
  "1:obj_clubsenemy:16": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 1,
    home: 8,
    blt: 13,
    turn: 130
  },
  "1:obj_clubsenemy:7": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 1,
    home: 15,
    blt: 20,
    turn: 135
  },
  "1:obj_cutenemy:17": {
    role: "regular",
    why: "shares turns",
    name: "DoomTank",
    ch: 1,
    home: 0,
    blt: 0,
    turn: 135
  },
  "1:obj_cutenemy:8": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 1,
    home: 0,
    blt: 0,
    turn: 135
  },
  "1:obj_diamondenemy:5": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn",
    ch: 1,
    home: 4,
    blt: 7,
    turn: 153
  },
  "1:obj_dummyenemy:3": {
    role: "owner",
    why: "makes its own SOUL",
    name: "Dummy",
    ch: 1,
    home: 3,
    blt: 2,
    turn: 115,
    soulx: 1
  },
  "1:obj_headhathy:23": {
    role: "regular",
    why: "shares turns",
    name: "Head Hathy",
    ch: 1,
    home: 29,
    blt: 1,
    turn: 108
  },
  "1:obj_heartenemy:6": {
    role: "regular",
    why: "shares turns",
    name: "Hathy",
    ch: 1,
    home: 6,
    blt: 1,
    turn: 115,
    keyed: 1,
    partner: "obj_event_manager"
  },
  "1:obj_jigsawryenemy:15": {
    role: "regular",
    why: "shares turns",
    name: "Jigsawry",
    ch: 1,
    home: 21,
    blt: 3,
    turn: 126
  },
  "1:obj_joker:20": {
    role: "regular",
    why: "shares turns",
    name: "Joker",
    ch: 1,
    home: 25,
    blt: 25,
    turn: 195
  },
  "1:obj_king_boss:25": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "King",
    ch: 1,
    home: 40,
    blt: 19,
    turn: 173,
    box: 1,
    soulx: 1
  },
  "1:obj_lancerboss:2": {
    role: "owner",
    why: "has long attacks",
    name: "Lancer",
    ch: 1,
    home: 2,
    blt: 3,
    turn: 213,
    keyed: 1
  },
  "1:obj_lancerboss2:12": {
    role: "regular",
    why: "shares turns",
    name: "Lancer",
    ch: 1,
    home: 20,
    blt: 5,
    turn: 146
  },
  "1:obj_lancerboss3:18": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Lancer",
    ch: 1,
    home: 31,
    blt: 4,
    turn: 139,
    phase: "mn99",
    defeats: 1,
    partner: "obj_susieandlancer_event"
  },
  "1:obj_ponman_enemy:11": {
    role: "regular",
    why: "shares turns",
    name: "Ponman",
    ch: 1,
    home: 13,
    blt: 12,
    turn: 129
  },
  "1:obj_rabbick_enemy:13": {
    role: "regular",
    why: "shares turns",
    name: "Rabbick",
    ch: 1,
    home: 16,
    blt: 3,
    turn: 149
  },
  "1:obj_ralseienemy:4": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Ralsei",
    ch: 1,
    home: 0,
    blt: 2,
    turn: 504,
    box: 1,
    soulx: 1
  },
  "1:obj_rudinnranger:22": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn Ranger",
    ch: 1,
    home: 28,
    blt: 5,
    turn: 196
  },
  "1:obj_smallcheckers_enemy:9": {
    role: "regular",
    why: "shares turns",
    name: "C.Round",
    ch: 1,
    home: 7,
    blt: 0,
    turn: 16,
    partner: "obj_event_manager"
  },
  "1:obj_susieenemy:19": {
    role: "regular",
    why: "shares turns",
    name: "Susie",
    ch: 1,
    home: 31,
    blt: 5,
    turn: 197,
    partner: "obj_susieandlancer_event"
  },
  "2:obj_baseenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy",
    ch: 2
  },
  "2:obj_baseenemy:31": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Poppup",
    ch: 2
  },
  "2:obj_berdlyb_enemy:43": {
    role: "regular",
    why: "shares turns",
    name: "Berdly",
    ch: 2,
    home: 58,
    blt: 39,
    bltmax: 73,
    turn: 216,
    the: 1
  },
  "2:obj_berdlyb2_enemy:46": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Berdly",
    ch: 2,
    home: 82,
    blt: 44,
    bltmax: 74,
    turn: 263,
    box: 1,
    soulx: 1
  },
  "2:obj_clubsenemy:47": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 2,
    home: 71,
    blt: 30,
    turn: 194
  },
  "2:obj_cutenemy2:36": {
    role: "hidden",
    why: "a debug enemy",
    name: "Swatchling",
    ch: 2
  },
  "2:obj_cutenemy2:41": {
    role: "hidden",
    why: "a debug enemy",
    name: "GrazeTest",
    ch: 2
  },
  "2:obj_dojo_spareenemy:52": {
    role: "regular",
    why: "shares turns",
    name: "Jigsaw Joe",
    ch: 2,
    home: 100,
    blt: 0,
    turn: 0
  },
  "2:obj_dojograzeenemy:42": {
    role: "regular",
    why: "shares turns",
    name: "Tasque Manager",
    ch: 2,
    home: 72,
    blt: 3,
    turn: 59,
    turnmax: 680
  },
  "2:obj_gigaqueen_enemy:51": {
    role: "alone",
    why: "turns the battle into a boxing match",
    name: "GIGA Queen",
    ch: 2,
    home: 84,
    blt: 0,
    turn: 244,
    partner: "obj_event_manager"
  },
  "2:obj_hatguy_enemy:37": {
    role: "owner",
    why: "has long attacks",
    name: "Cap'n",
    ch: 2,
    home: 62,
    blt: 1,
    turn: 324,
    the: 1,
    partner: "obj_musical_controller"
  },
  "2:obj_kk_enemy:38": {
    role: "owner",
    why: "has long attacks",
    name: "K_K",
    ch: 2,
    home: 62,
    blt: 1,
    turn: 324,
    the: 1,
    partner: "obj_musical_controller"
  },
  "2:obj_maus_enemy:34": {
    role: "regular",
    why: "shares turns",
    name: "Maus",
    ch: 2,
    home: 54,
    blt: 7,
    turn: 134
  },
  "2:obj_mauswheel_enemy:44": {
    role: "regular",
    why: "shares turns",
    name: "Mauswheel",
    ch: 2,
    home: 83,
    blt: 11,
    turn: 177
  },
  "2:obj_omawaroid_enemy:30": {
    role: "regular",
    why: "shares turns",
    name: "Ambyu-Lance",
    ch: 2,
    home: 50,
    blt: 8,
    turn: 166
  },
  "2:obj_pipis_enemy:53": {
    role: "regular",
    why: "shares turns",
    name: "Pipis",
    ch: 2,
    home: 102,
    blt: 18,
    turn: 144
  },
  "2:obj_placeholderenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy",
    ch: 2
  },
  "2:obj_poppup_enemy:31": {
    role: "regular",
    why: "shares turns",
    name: "Poppup",
    ch: 2,
    home: 51,
    blt: 5,
    turn: 133
  },
  "2:obj_poppup_enemy:36": {
    role: "regular",
    why: "shares turns",
    name: "Swatchling",
    ch: 2,
    home: 78,
    blt: 5,
    turn: 133
  },
  "2:obj_queen_enemy:48": {
    role: "owner",
    why: "makes its own box",
    name: "Queen",
    ch: 2,
    home: 59,
    blt: 5,
    turn: 187,
    box: 1,
    the: 1,
    partner: "obj_queen_throw_controller"
  },
  "2:obj_ralseienemy:4": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Ralsei",
    ch: 2,
    home: 0,
    blt: 2,
    turn: 504,
    box: 1,
    soulx: 1
  },
  "2:obj_rouxls_enemy_old_copy:45": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Rouxls",
    ch: 2
  },
  "2:obj_rouxls_enemy:45": {
    role: "regular",
    why: "shares turns",
    name: "Rouxls",
    ch: 2,
    home: 63,
    blt: 7,
    turn: 223,
    the: 1
  },
  "2:obj_rudy_enemy:205": {
    role: "regular",
    why: "shares turns",
    name: "Rudy",
    ch: 2,
    home: 0,
    blt: 0,
    turn: 0
  },
  "2:obj_spamton_enemy:49": {
    role: "regular",
    why: "shares turns",
    name: "Spamton",
    ch: 2,
    home: 60,
    blt: 13,
    turn: 220
  },
  "2:obj_spamton_neo_enemy:50": {
    role: "owner",
    why: "changes the SOUL for its attacks",
    name: "Spamton NEO",
    ch: 2,
    home: 61,
    blt: 36,
    bltmax: 97,
    turn: 201,
    soul: "yellow",
    the: 1,
    partner: "obj_sneo_throwkris_vine_controller"
  },
  "2:obj_swatchling_enemy:36": {
    role: "regular",
    why: "shares turns",
    name: "Swatchling",
    ch: 2,
    home: 56,
    blt: 5,
    turn: 206,
    the: 1
  },
  "2:obj_sweet_enemy:39": {
    role: "regular",
    why: "shares turns",
    name: "Sweet",
    ch: 2,
    home: 62,
    blt: 37,
    bltmax: 81,
    turn: 192,
    the: 1
  },
  "2:obj_tasque_enemy:32": {
    role: "regular",
    why: "shares turns",
    name: "Tasque",
    ch: 2,
    home: 52,
    blt: 7,
    turn: 131,
    partner: "obj_tasque_manager"
  },
  "2:obj_tasque_manager_enemy:42": {
    role: "regular",
    why: "shares turns",
    name: "Tasque Manager",
    ch: 2,
    home: 57,
    blt: 3,
    turn: 169,
    the: 1,
    keyed: 1,
    partner: "obj_tasque_manager"
  },
  "2:obj_virovirokun_enemy:35": {
    role: "regular",
    why: "shares turns",
    name: "Virovirokun",
    ch: 2,
    home: 55,
    blt: 10,
    turn: 133,
    keyed: 1
  },
  "2:obj_werewerewire_enemy:40": {
    role: "regular",
    why: "shares turns",
    name: "Werewerewire",
    ch: 2,
    home: 65,
    blt: 52,
    bltmax: 119,
    turn: 197
  },
  "2:obj_werewire_enemy:33": {
    role: "regular",
    why: "shares turns",
    name: "Werewire",
    ch: 2,
    home: 53,
    blt: 23,
    turn: 196
  },
  "3:obj_elnina_enemy:60": {
    role: "alone",
    pair: "3:obj_lanino_enemy:61",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 3,
    home: 113,
    blt: 11,
    turn: 184
  },
  "3:obj_elnina_rematch_enemy:106": {
    role: "alone",
    pair: "3:obj_lanino_rematch_enemy:107",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 3,
    home: 141,
    blt: 19,
    turn: 267
  },
  "3:obj_knight_enemy:104": {
    role: "owner",
    why: "makes its own box",
    name: "Knight",
    ch: 3,
    home: 115,
    blt: 38,
    bltmax: 112,
    turn: 235,
    box: 1
  },
  "3:obj_lanino_enemy:61": {
    role: "alone",
    pair: "3:obj_elnina_enemy:60",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 3,
    home: 113,
    blt: 11,
    turn: 184
  },
  "3:obj_lanino_rematch_enemy:107": {
    role: "alone",
    pair: "3:obj_elnina_rematch_enemy:106",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 3,
    home: 141,
    blt: 19,
    turn: 267
  },
  "3:obj_pippins_enemy:59": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 3,
    home: 122,
    blt: 29,
    turn: 113,
    keyed: 1
  },
  "3:obj_ribbick_enemy:57": {
    role: "regular",
    why: "shares turns",
    name: "Ribbick",
    ch: 3,
    home: 125,
    blt: 2,
    turn: 159,
    keyed: 1
  },
  "3:obj_rouxls_ch3_enemy:102": {
    role: "alone",
    why: "turns the bullet box into a puzzle grid",
    name: "Rouxls",
    ch: 3,
    home: 114,
    blt: 5,
    turn: 134,
    the: 1
  },
  "3:obj_shadowman_enemy:54": {
    role: "regular",
    why: "shares turns",
    name: "Shadowguy",
    ch: 3,
    home: 110,
    blt: 27,
    turn: 218,
    the: 1,
    keyed: 1
  },
  "3:obj_shutta_enemy:55": {
    role: "regular",
    why: "shares turns",
    name: "Shuttah",
    ch: 3,
    home: 111,
    blt: 65,
    bltmax: 112,
    turn: 247,
    the: 1,
    keyed: 1
  },
  "3:obj_tenna_board4_enemy:105": {
    role: "alone",
    why: "turns the battle into TV game shows",
    name: "Tenna",
    ch: 3,
    home: 133,
    blt: 0,
    turn: 0,
    keyed: 1
  },
  "3:obj_tenna_enemy:103": {
    role: "alone",
    why: "turns the battle into TV game shows",
    name: "Tenna",
    ch: 3,
    home: 121,
    blt: 12,
    turn: 166,
    the: 1
  },
  "3:obj_watercooler_enemy:58": {
    role: "regular",
    why: "shares turns",
    name: "Watercooler",
    ch: 3,
    home: 139,
    blt: 13,
    turn: 304,
    keyed: 1
  },
  "3:obj_zapper_enemy:56": {
    role: "regular",
    why: "shares turns",
    name: "Zapper",
    ch: 3,
    home: 112,
    blt: 24,
    turn: 166,
    defeats: 1
  },
  "4:obj_balthizard_enemy:63": {
    role: "regular",
    why: "shares turns",
    name: "Balthizard",
    ch: 4,
    home: 151,
    blt: 31,
    turn: 161,
    intro: {
      gersonintro: 2
    },
    the: 1,
    keyed: 1
  },
  "4:obj_bell_enemy:66": {
    role: "regular",
    why: "shares turns",
    name: "Wicabel",
    ch: 4,
    home: 154,
    blt: 17,
    turn: 180
  },
  "4:obj_bibliox_enemy:64": {
    role: "regular",
    why: "shares turns",
    name: "Bibliox",
    ch: 4,
    home: 152,
    blt: 13,
    turn: 166,
    partner: "obj_proofread_controller"
  },
  "4:obj_elnina_rematch_enemy:110": {
    role: "alone",
    pair: "4:obj_lanino_rematch_enemy:111",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 4,
    home: 178,
    blt: 20,
    turn: 274
  },
  "4:obj_guei_enemy:62": {
    role: "regular",
    why: "shares turns",
    name: "Guei",
    ch: 4,
    home: 150,
    blt: 15,
    turn: 165,
    the: 1
  },
  "4:obj_guei_enemy:65": {
    role: "regular",
    why: "shares turns",
    name: "Mizzle",
    ch: 4,
    home: 164,
    blt: 15,
    turn: 165,
    the: 1
  },
  "4:obj_halo_enemy:67": {
    role: "regular",
    why: "shares turns",
    name: "Winglade",
    ch: 4,
    home: 155,
    blt: 11,
    turn: 163,
    defeats: 1
  },
  "4:obj_hammer_of_justice_enemy:105": {
    role: "owner",
    why: "has long attacks",
    name: "Hammer of Justice",
    ch: 4,
    home: 160,
    blt: 0,
    turn: 220,
    the: 1,
    partner: "obj_gerson_hammer_bro_attack_controller"
  },
  "4:obj_holywatercooler_enemy:69": {
    role: "regular",
    why: "shares turns",
    name: "HolywaterCooler",
    ch: 4,
    home: 183,
    blt: 9,
    turn: 204,
    intro: {
      introcon: 0
    }
  },
  "4:obj_jackenstein_enemy:107": {
    role: "owner",
    why: "makes its own box",
    name: "Jackenstein",
    ch: 4,
    home: 174,
    blt: 0,
    turn: 0,
    turnmax: 930,
    box: 1
  },
  "4:obj_lanino_rematch_enemy:111": {
    role: "alone",
    pair: "4:obj_elnina_rematch_enemy:110",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 4,
    home: 178,
    blt: 20,
    turn: 274
  },
  "4:obj_mizzle_enemy:65": {
    role: "regular",
    why: "shares turns",
    name: "Mizzle",
    ch: 4,
    home: 153,
    blt: 73,
    bltmax: 104,
    turn: 180,
    the: 1
  },
  "4:obj_multiboss_controller_enemy1:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy1",
    ch: 4
  },
  "4:obj_multiboss_controller_enemy2:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy2",
    ch: 4
  },
  "4:obj_multiboss_controller_enemy3:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy3",
    ch: 4
  },
  "4:obj_multiboss_enemy1:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy1",
    ch: 4
  },
  "4:obj_multiboss_enemy2:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy2",
    ch: 4
  },
  "4:obj_multiboss_enemy3:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy3",
    ch: 4
  },
  "4:obj_organ_enemy:68": {
    role: "regular",
    why: "shares turns",
    name: "Organikk",
    ch: 4,
    home: 156,
    blt: 39,
    bltmax: 73,
    turn: 178
  },
  "4:obj_pippins_enemy:59": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 4,
    home: 179,
    blt: 36,
    turn: 112,
    keyed: 1
  },
  "4:obj_ribbick_enemy:57": {
    role: "regular",
    why: "shares turns",
    name: "Ribbick",
    ch: 4,
    home: 181,
    blt: 6,
    turn: 199,
    the: 1,
    keyed: 1
  },
  "4:obj_rudinnranger:5": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn",
    ch: 4,
    home: 179,
    blt: 1,
    turn: 16
  },
  "4:obj_sound_of_justice_enemy:106": {
    role: "alone",
    why: "is a scripted story battle with its own turns",
    name: "Sound Of Justice",
    ch: 4,
    home: 176,
    blt: 0,
    turn: 314,
    gate: 281,
    intro: {
      init: 1,
      introcon: 0
    },
    the: 1,
    keyed: 1,
    partner: "obj_gerson_hammer_bro_attack_controller"
  },
  "4:obj_swatchling_enemy:36": {
    role: "hidden",
    why: "an empty class in chapter 4",
    name: "Swatchling",
    ch: 4
  },
  "4:obj_titan_enemy:108": {
    role: "owner",
    why: "has long attacks",
    name: "Titan",
    ch: 4,
    home: 175,
    blt: 12,
    turn: 296
  },
  "4:obj_titan_spawn_enemy:109": {
    role: "regular",
    why: "shares turns",
    name: "Titan Spawn",
    ch: 4,
    home: 177,
    blt: 7,
    turn: 256,
    partner: "obj_purify_event"
  },
  "4:obj_zapper_enemy:56": {
    role: "hidden",
    why: "no visible home fight",
    name: "Zapper",
    ch: 4
  },
  "5:obj_aqua_enemy:112": {
    role: "owner",
    why: "keeps the turn open for a partner",
    name: "Aqua",
    ch: 5,
    home: 220,
    blt: 58,
    bltmax: 107,
    turn: 277,
    turnmax: 790,
    keyed: 1
  },
  "5:obj_baseenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Base",
    ch: 5
  },
  "5:obj_blue_enemy:115": {
    role: "alone",
    pair: "5:obj_yellow_enemy:116",
    why: "fights as a pair with Yellow",
    name: "Blue",
    ch: 5,
    home: 222,
    blt: 27,
    turn: 305,
    intro: {
      done_intro: true
    }
  },
  "5:obj_bullettester_enemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Bullettester",
    ch: 5
  },
  "5:obj_enemy_example:123": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy Example",
    ch: 5
  },
  "5:obj_floradinn_enemy:70": {
    role: "regular",
    why: "shares turns",
    name: "Floradinn",
    ch: 5,
    home: 200,
    blt: 28,
    turn: 167,
    keyed: 1
  },
  "5:obj_flowery_enemy:119": {
    role: "alone",
    why: "carries the battle into its own climbing room",
    name: "Flowery",
    ch: 5,
    home: 225,
    blt: 8,
    turn: 243,
    soul: "orange",
    intro: {
      introcon: 2
    }
  },
  "5:obj_green_enemy:114": {
    role: "alone",
    pair: "5:obj_orange_enemy:113",
    why: "fights beside Orange",
    name: "Green",
    ch: 5,
    home: 221,
    blt: 12,
    turn: 258,
    the: 1
  },
  "5:obj_kawkaw_enemy:74": {
    role: "regular",
    why: "shares turns",
    name: "KawKaw",
    ch: 5,
    home: 202,
    blt: 102,
    bltmax: 102,
    turn: 257,
    the: 1
  },
  "5:obj_leafling_enemy:71": {
    role: "regular",
    why: "shares turns",
    name: "Leafling",
    ch: 5,
    home: 201,
    blt: 30,
    bltmax: 77,
    turn: 194
  },
  "5:obj_multiboss_controller_enemy1:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy1",
    ch: 5
  },
  "5:obj_multiboss_controller_enemy2:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy2",
    ch: 5
  },
  "5:obj_multiboss_controller_enemy3:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy3",
    ch: 5
  },
  "5:obj_multiboss_enemy1:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy1",
    ch: 5
  },
  "5:obj_multiboss_enemy2:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy2",
    ch: 5
  },
  "5:obj_multiboss_enemy3:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy3",
    ch: 5
  },
  "5:obj_netskie_enemy:76": {
    role: "regular",
    why: "shares turns",
    name: "Netskie",
    ch: 5,
    home: 206,
    blt: 37,
    turn: 195,
    the: 1,
    keyed: 1
  },
  "5:obj_orange_enemy:113": {
    role: "owner",
    why: "has long attacks",
    name: "Orange",
    ch: 5,
    home: 221,
    blt: 18,
    turn: 386,
    the: 1
  },
  "5:obj_pink_enemy:118": {
    role: "alone",
    why: "holds the battle until its own intro has played",
    name: "Pink",
    ch: 5,
    home: 224,
    blt: 12,
    turn: 527,
    intro: {
      introcon: 3
    },
    partner: "obj_date_controller"
  },
  "5:obj_purple_enemy:117": {
    role: "alone",
    pair: "5:obj_aqua_enemy:112",
    why: "fights beside Aqua",
    name: "Seth",
    ch: 5,
    home: 223,
    blt: 54,
    turn: 278,
    the: 1
  },
  "5:obj_scarecrow_enemy:72": {
    role: "regular",
    why: "shares turns",
    name: "Shi",
    ch: 5,
    home: 202,
    blt: 7,
    turn: 206,
    keyed: 1,
    partner: "obj_seth_shi_controller"
  },
  "5:obj_sheary_enemy:75": {
    role: "regular",
    why: "shares turns",
    name: "Sheary",
    ch: 5,
    home: 205,
    blt: 8,
    turn: 211,
    partner: "obj_scissors_act_controller"
  },
  "5:obj_shinobeetle_enemy:73": {
    role: "regular",
    why: "shares turns",
    name: "Shinobeetle",
    ch: 5,
    home: 203,
    blt: 1,
    turn: 109,
    the: 1,
    keyed: 1,
    partner: "obj_seth_shinobeetle_controller"
  },
  "5:obj_terracota_enemy:77": {
    role: "regular",
    why: "shares turns",
    name: "Terakota",
    ch: 5,
    home: 207,
    blt: 10,
    turn: 188
  },
  "5:obj_trashy_trio:121": {
    role: "regular",
    why: "shares turns",
    name: "Trashy Trio",
    ch: 5,
    home: 234,
    blt: 26,
    turn: 241,
    the: 1
  },
  "5:obj_yellow_enemy:116": {
    role: "alone",
    pair: "5:obj_blue_enemy:115",
    why: "fights beside Blue",
    name: "Yellow",
    ch: 5,
    home: 222,
    blt: 27,
    turn: 305,
    the: 1
  },
  "ut:obj_aaron": {
    role: "regular",
    why: "shares turns",
    name: "Aaron",
    ch: "ut",
    home: 40,
    blt: 10,
    turn: 160
  },
  "ut:obj_asgore_finalintro": {
    role: "alone",
    why: "is the opening of a story battle",
    name: "Asgore Finalintro",
    ch: "ut",
    home: 100,
    blt: 138,
    bltmax: 256,
    turn: 135,
    phase: "mn999 my999 my-999"
  },
  "ut:obj_asgoreb": {
    role: "regular",
    why: "shares turns",
    name: "Asgore",
    ch: "ut",
    home: 101,
    blt: 76,
    bltmax: 256,
    turn: 154
  },
  "ut:obj_asrielb": {
    role: "regular",
    why: "shares turns",
    name: "Asriel Dreemurr",
    ch: "ut",
    home: 255,
    blt: 20,
    turn: 114
  },
  "ut:obj_asrielfinal": {
    role: "regular",
    why: "shares turns",
    name: "Asriel",
    ch: "ut",
    home: 256,
    blt: 20,
    turn: 130
  },
  "ut:obj_astigmatism": {
    role: "regular",
    why: "shares turns",
    name: "Astigmatism",
    ch: "ut",
    home: 62,
    blt: 13,
    turn: 150
  },
  "ut:obj_bara01": {
    role: "regular",
    why: "shares turns",
    name: "RG 01",
    ch: "ut",
    home: 49,
    blt: 7,
    turn: 180
  },
  "ut:obj_bara02": {
    role: "regular",
    why: "shares turns",
    name: "RG 02",
    ch: "ut",
    home: 49,
    blt: 7,
    turn: 180
  },
  "ut:obj_bara03": {
    role: "regular",
    why: "shares turns",
    name: "RG 03",
    ch: "ut",
    home: 76,
    blt: 10,
    turn: 144
  },
  "ut:obj_bara04": {
    role: "regular",
    why: "shares turns",
    name: "RG 04",
    ch: "ut",
    home: 76,
    blt: 10,
    turn: 144
  },
  "ut:obj_battlebomb": {
    role: "regular",
    why: "shares turns",
    name: "Bomb",
    ch: "ut",
    home: 69,
    blt: 0,
    turn: 0
  },
  "ut:obj_chilldrake": {
    role: "regular",
    why: "shares turns",
    name: "Snowdrake",
    ch: "ut",
    home: 30,
    blt: 12,
    turn: 100
  },
  "ut:obj_dummymonster": {
    role: "regular",
    why: "shares turns",
    name: "Dummy",
    ch: "ut",
    home: 2,
    blt: 0,
    turn: 62
  },
  "ut:obj_endogeny": {
    role: "regular",
    why: "shares turns",
    name: "Amalgamate",
    ch: "ut",
    home: 86,
    blt: 5,
    turn: 160
  },
  "ut:obj_fakefroggit": {
    role: "regular",
    why: "shares turns",
    name: "Froggit",
    ch: "ut",
    home: 3,
    blt: 0,
    turn: 0
  },
  "ut:obj_finalfroggit": {
    role: "regular",
    why: "shares turns",
    name: "Final Froggit",
    ch: "ut",
    home: 61,
    blt: 5,
    turn: 150
  },
  "ut:obj_finalknight": {
    role: "regular",
    why: "shares turns",
    name: "Knight Knight",
    ch: "ut",
    home: 60,
    blt: 24,
    bltmax: 85,
    turn: 125
  },
  "ut:obj_froggit": {
    role: "regular",
    why: "shares turns",
    name: "Froggit",
    ch: "ut",
    home: 4,
    blt: 3,
    turn: 71
  },
  "ut:obj_gladdummy": {
    role: "regular",
    why: "shares turns",
    name: "Glad Dummy",
    ch: "ut",
    home: 93,
    blt: 0,
    turn: 62
  },
  "ut:obj_glydeb": {
    role: "regular",
    why: "shares turns",
    name: "Glyde",
    ch: "ut",
    home: 135,
    blt: 32,
    turn: 143
  },
  "ut:obj_greatdog": {
    role: "regular",
    why: "shares turns",
    name: "Greater Dog",
    ch: "ut",
    home: 26,
    blt: 1,
    turn: 110,
    keyed: 1
  },
  "ut:obj_gyftrot": {
    role: "regular",
    why: "shares turns",
    name: "Gyftrot",
    ch: "ut",
    home: 28,
    blt: 9,
    turn: 100
  },
  "ut:obj_icecap": {
    role: "regular",
    why: "shares turns",
    name: "Ice Cap",
    ch: "ut",
    home: 32,
    blt: 5,
    turn: 100
  },
  "ut:obj_jerry": {
    role: "regular",
    why: "shares turns",
    name: "Jerry",
    ch: "ut",
    home: 34,
    blt: 0,
    turn: 0
  },
  "ut:obj_lemonbread": {
    role: "regular",
    why: "shares turns",
    name: "Lemon Bread",
    ch: "ut",
    home: 82,
    blt: 15,
    turn: 136
  },
  "ut:obj_lesserdoge": {
    role: "regular",
    why: "shares turns",
    name: "Lesser Dog",
    ch: "ut",
    home: 24,
    blt: 2,
    turn: 110
  },
  "ut:obj_loox": {
    role: "regular",
    why: "shares turns",
    name: "Loox",
    ch: "ut",
    home: 13,
    blt: 7,
    turn: 110
  },
  "ut:obj_maddummy": {
    role: "regular",
    why: "shares turns",
    name: "Mad Dummy",
    ch: "ut",
    home: 45,
    blt: 16,
    turn: 196
  },
  "ut:obj_mandog": {
    role: "regular",
    why: "shares turns",
    name: "Dogamy",
    ch: "ut",
    home: 25,
    blt: 4,
    turn: 143,
    keyed: 1
  },
  "ut:obj_memoryhead": {
    role: "regular",
    why: "shares turns",
    name: "Memoryhead",
    ch: "ut",
    home: 85,
    blt: 11,
    turn: 160
  },
  "ut:obj_mettaton_neo": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton NEO",
    ch: "ut",
    home: 94,
    blt: 0,
    turn: 0
  },
  "ut:obj_mettatonb_quiz": {
    role: "alone",
    why: "turns the battle into a quiz show",
    name: "Mettaton",
    ch: "ut",
    home: 48,
    blt: 12,
    turn: 89
  },
  "ut:obj_mettatonb_second": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton",
    ch: "ut",
    home: 57,
    blt: 0,
    turn: 60
  },
  "ut:obj_mettatonb_third": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton",
    ch: "ut",
    home: 80,
    blt: 8,
    turn: 259
  },
  "ut:obj_mettatonex": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton EX",
    ch: "ut",
    home: 81,
    blt: 9,
    turn: 151
  },
  "ut:obj_migosp": {
    role: "regular",
    why: "shares turns",
    name: "Migosp",
    ch: "ut",
    home: 11,
    blt: 15,
    turn: 110
  },
  "ut:obj_migospel": {
    role: "regular",
    why: "shares turns",
    name: "Migospel",
    ch: "ut",
    home: 121,
    blt: 37,
    turn: 150
  },
  "ut:obj_mkid_battle": {
    role: "alone",
    why: "is a story scene, not a fight",
    name: "Monster Kid",
    ch: "ut",
    home: 91,
    blt: 0,
    turn: 0,
    phase: "mn99"
  },
  "ut:obj_moldessa": {
    role: "regular",
    why: "shares turns",
    name: "Moldessa",
    ch: "ut",
    home: 123,
    blt: 32,
    turn: 150
  },
  "ut:obj_moldsmal": {
    role: "regular",
    why: "shares turns",
    name: "Moldsmal",
    ch: "ut",
    home: 7,
    blt: 6,
    turn: 100
  },
  "ut:obj_moldsmalx": {
    role: "regular",
    why: "shares turns",
    name: "Moldsmal",
    ch: "ut",
    home: 42,
    blt: 9,
    turn: 100
  },
  "ut:obj_movedoge": {
    role: "regular",
    why: "shares turns",
    name: "Doggo",
    ch: "ut",
    home: 23,
    blt: 1,
    turn: 82,
    keyed: 1
  },
  "ut:obj_napstablook": {
    role: "regular",
    why: "shares turns",
    name: "Napstablook",
    ch: "ut",
    home: 20,
    blt: 17,
    turn: 127,
    the: 1,
    keyed: 1
  },
  "ut:obj_papyrusboss": {
    role: "owner",
    why: "has long attacks",
    name: "Papyrus",
    ch: "ut",
    home: 27,
    blt: 3,
    turn: 258,
    keyed: 1
  },
  "ut:obj_parsnik": {
    role: "regular",
    why: "shares turns",
    name: "Parsnik",
    ch: "ut",
    home: 122,
    blt: 12,
    turn: 150
  },
  "ut:obj_pyrope": {
    role: "regular",
    why: "shares turns",
    name: "Pyrope",
    ch: "ut",
    home: 52,
    blt: 10,
    turn: 180
  },
  "ut:obj_reaperbird": {
    role: "regular",
    why: "shares turns",
    name: "Reaperbird",
    ch: "ut",
    home: 83,
    blt: 39,
    bltmax: 71,
    turn: 170
  },
  "ut:obj_ripoff_alphys": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 89,
    blt: 10,
    turn: 144
  },
  "ut:obj_ripoff_asgore": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 90,
    blt: 58,
    bltmax: 72,
    turn: 144
  },
  "ut:obj_ripoff_papyrus": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 88,
    blt: 8,
    turn: 150
  },
  "ut:obj_ripoff_sans": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 88,
    blt: 8,
    turn: 150
  },
  "ut:obj_ripoff_toriel": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 90,
    blt: 58,
    bltmax: 72,
    turn: 144
  },
  "ut:obj_ripoff_undyne": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 87,
    blt: 0,
    turn: 141
  },
  "ut:obj_sansb": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Sans",
    ch: "ut",
    home: 95,
    blt: 14,
    turn: 142,
    phase: "mn99 my99",
    keyed: 1
  },
  "ut:obj_shyren": {
    role: "regular",
    why: "shares turns",
    name: "Shyren",
    ch: "ut",
    home: 44,
    blt: 2,
    turn: 103
  },
  "ut:obj_snowdrake": {
    role: "regular",
    why: "shares turns",
    name: "Snowdrake",
    ch: "ut",
    home: 30,
    blt: 12,
    turn: 100
  },
  "ut:obj_snowdrakemom": {
    role: "regular",
    why: "shares turns",
    name: "Amalgamate",
    ch: "ut",
    home: 84,
    blt: 3,
    turn: 100
  },
  "ut:obj_sosorry": {
    role: "regular",
    why: "shares turns",
    name: "So Sorry",
    ch: "ut",
    home: 140,
    blt: 0,
    turn: 130
  },
  "ut:obj_spiderb": {
    role: "owner",
    why: "changes the SOUL for its attacks",
    name: "Muffet",
    ch: "ut",
    home: 56,
    blt: 5,
    turn: 160,
    soul: "purple"
  },
  "ut:obj_tembattle": {
    role: "regular",
    why: "shares turns",
    name: "Temmie",
    ch: "ut",
    home: 41,
    blt: 0,
    turn: 145
  },
  "ut:obj_testmonster": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "TestFroggit",
    ch: "ut"
  },
  "ut:obj_torielboss": {
    role: "regular",
    why: "shares turns",
    name: "Toriel",
    ch: "ut",
    home: 22,
    blt: 30,
    bltmax: 69,
    turn: 103,
    keyed: 1
  },
  "ut:obj_tsunderplane": {
    role: "regular",
    why: "shares turns",
    name: "Tsunderplane",
    ch: "ut",
    home: 50,
    blt: 18,
    turn: 133
  },
  "ut:obj_undyne_ex": {
    role: "regular",
    why: "shares turns",
    name: "Undyne the Undying",
    ch: "ut",
    home: 92,
    blt: 0,
    turn: 177,
    keyed: 1
  },
  "ut:obj_undynebattle2": {
    role: "alone",
    why: "is a story scene, not a fight",
    name: "Undyne",
    ch: "ut",
    home: 58,
    blt: 0,
    turn: 0,
    phase: "mn99"
  },
  "ut:obj_undyneboss": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Undyne",
    ch: "ut",
    home: 47,
    blt: 0,
    turn: 123,
    phase: "mn99",
    keyed: 1
  },
  "ut:obj_vegetoid": {
    role: "regular",
    why: "shares turns",
    name: "Vegetoid",
    ch: "ut",
    home: 18,
    blt: 8,
    turn: 110
  },
  "ut:obj_vulkin": {
    role: "regular",
    why: "shares turns",
    name: "Vulkin",
    ch: "ut",
    home: 51,
    blt: 28,
    turn: 133
  },
  "ut:obj_whimsalot": {
    role: "regular",
    why: "shares turns",
    name: "Whimsalot",
    ch: "ut",
    home: 63,
    blt: 17,
    turn: 150
  },
  "ut:obj_whimsun": {
    role: "regular",
    why: "shares turns",
    name: "Whimsun",
    ch: "ut",
    home: 5,
    blt: 10,
    turn: 97
  },
  "ut:obj_wizard": {
    role: "regular",
    why: "shares turns",
    name: "Madjick",
    ch: "ut",
    home: 59,
    blt: 9,
    turn: 160
  },
  "ut:obj_womandog": {
    role: "regular",
    why: "shares turns",
    name: "Dogaressa",
    ch: "ut",
    home: 25,
    blt: 4,
    turn: 143
  },
  "ut:obj_woshua": {
    role: "regular",
    why: "shares turns",
    name: "Woshua",
    ch: "ut",
    home: 43,
    blt: 11,
    turn: 155
  }
};
var ik = [["5:obj_aqua_enemy:112", "5:obj_netskie_enemy:76", "Aqua's knife fan needs the Netskie of her own fight, so Aqua and Netskie cannot share a board."]];
var iH = "Undertale enemies fight on their own board.";
function is(i) {
  let Uk = typeof i == "string" ? i : i && i.key;
  return Uk && io[Uk] || null;
}
a(is, "traitOf");
function ih(i) {
  let Ur = is(i);
  if (Ur) {
    return Ur.role;
  } else {
    return "regular";
  }
}
a(ih, "roleOf");
var iS = a(i => !!i && (i.engine === "ut" || typeof i.key == "string" && i.key.startsWith("ut:")), "isUT");
var iQ = a(i => iS(i) ? null : i && typeof i.chapter == "number" ? i.chapter : parseInt(i && i.key, 10) || null, "chapterOf");
var im = a((i, J) => J || i && i.name || is(i) && is(i).name || i && i.label || "That enemy", "nameOf");
var iV = a(i => Array.isArray(i) ? i.filter(J => J && J.entry && J.n > 0) : [], "rows");
var iw = a((i, J) => i.endsWith(":") ? J.startsWith(i) : J === i, "matches");
function iZ(i) {
  let Ur = 0;
  for (let Uk of iV(i)) {
    {
      let UH = iQ(Uk.entry);
      if (UH && UH > Ur) {
        Ur = UH;
      }
    }
  }
  return Ur || null;
}
a(iZ, "hostChapter");
function iC(i, J) {
  if (!J) {
    return {
      ok: false,
      msg: "That enemy cannot be put on a board."
    };
  }
  let Uk = im(J);
  let UH = is(J);
  let Us = UH ? UH.role : "regular";
  if (Us === "hidden") {
    return {
      ok: false,
      msg: Uk + " cannot be put on a board."
    };
  }
  let Uh = iV(i);
  if (!Uh.length) {
    return {
      ok: true
    };
  }
  const Um = {
    ok: false,
    msg: iH
  };
  if (Uh.some(UZ => iS(UZ.entry) !== iS(J))) {
    return Um;
  }
  let UV = Uh.find(UZ => ih(UZ.entry) === "alone");
  if (UV) {
    {
      if (ix(UV.entry) !== J.key || UV.n !== 1 || Uh.length !== 1) {
        return {
          ok: false,
          msg: ig(UV.entry, UV.name)
        };
      }
    }
  } else if (Us === "alone") {
    {
      let UZ = ix(J);
      if (!UZ || Uh.length !== 1 || Uh[0].entry.key !== UZ || Uh[0].n !== 1) {
        return {
          ok: false,
          msg: ig(J, J.name)
        };
      }
    }
  }
  if (UH && UH.lead && Uh[0].entry.key !== J.key) {
    return {
      ok: false,
      msg: Uk + " can only lead a board" + (UH.why ? ": it " + UH.why : "") + "."
    };
  }
  for (let [Ug, Ux, UG] of ik) {
    for (let Un of Uh) {
      if (iw(Ug, J.key) && iw(Ux, Un.entry.key) || iw(Ux, J.key) && iw(Ug, Un.entry.key)) {
        return {
          ok: false,
          msg: UG
        };
      }
    }
  }
  return {
    ok: true
  };
}
a(iC, "checkAdd");
function ig(i, J) {
  let Uf = is(i);
  let Ur = im(i, J);
  if (Uf && Uf.pair) {
    return Ur + " " + Uf.why + ", on a board of their own.";
  } else if (Uf && Uf.why) {
    return Ur + " fights alone: it " + Uf.why + ".";
  } else {
    return Ur + " fights alone.";
  }
}
a(ig, "aloneSentence");
function ix(i) {
  let Uf = is(i);
  return Uf && Uf.pair || null;
}
a(ix, "pairOf");
function iG(i) {
  return i.length === 2 && i[0] !== i[1] && (ix(i[0]) === i[1] || ix(i[1]) === i[0]);
}
a(iG, "isPairBoard");
var iv = a(i => i.length < 2 ? i.join("") : i.slice(0, -1).join(", ") + " and " + i[i.length - 1], "list");
function iT(i) {
  let Ur = iV(i);
  let Uo = [];
  if (!Ur.length) {
    return Uo;
  }
  let UH = iZ(i);
  let Us = Ur.reduce((US, UQ) => US + UQ.n, 0);
  for (let US of Ur) {
    let UQ = is(US.entry);
    if (UQ && UQ.soul && UH && iQ(US.entry) !== UH) {
      Uo.push({
        level: "warn",
        text: im(US.entry, US.name) + "'s " + UQ.soul + " SOUL attacks use CH" + UH + "'s SOUL."
      });
    }
  }
  let Uh = [...new Set(Ur.map(Um => iQ(Um.entry)).filter(Boolean))].sort((Um, UV) => Um - UV);
  if (Uh.length > 1) {
    Uo.push({
      level: "info",
      text: "Chapters " + iv(Uh.map(String)) + ": each enemy keeps its own chapter's rules."
    });
  }
  if (Us > 1) {
    let Um = Ur.filter(UV => ih(UV.entry) === "owner");
    if (Um.length === 1) {
      let UV = is(Um[0].entry);
      Uo.push({
        level: "info",
        text: im(Um[0].entry, Um[0].name) + (UV && UV.why ? " " + UV.why : " takes the whole turn") + ": it attacks on turns of its own."
      });
    } else if (Um.length > 1) {
      let Uw = Um.slice(0, 3).map(UZ => im(UZ.entry, UZ.name));
      if (Um.length > 3) {
        Uw[2] = Um.length - 2 + " more";
      }
      Uo.push({
        level: "info",
        text: iv(Uw) + " take the whole turn: each attacks on turns of its own."
      });
    }
  }
  return Uo;
}
a(iT, "boardNotes");
var iL = a(i => String(i).replace(/^obj_/, "").replace(/_?(enemy|monster|boss)$/, "").replace(/_/g, " ").replace(/\b\w/g, J => J.toUpperCase()).trim() || i, "pretty");
var iM = a(i => i.game === "undertale" && (i.engine || "undertale") === "undertale", "isUT");
var id = null;
var iD = null;
var iA = -1;
function iX() {
  if (id && iA === m()) {
    return id;
  }
  let Ur = new Map();
  for (let Uo of H) {
    if (Uo.game === "undertale" || !Uo.monsters || !Uo.monsters.length || Uo.mode || Uo.secret) {
      continue;
    }
    let Uk = Uo.engineChapter ?? Uo.chapter;
    if (typeof Uk == "number") {
      for (let UH of Uo.monsters) {
        {
          if (!UH.cls) {
            continue;
          }
          let UQ = typeof UH.cls == "function" ? UH.cls.name : String(UH.cls);
          let Um = Uk + ":" + UQ + ":" + UH.type;
          if (!Ur.has(Um)) {
            Ur.set(Um, {
              key: Um,
              engine: "dr",
              chapter: Uk,
              cls: UH.cls,
              clsName: UQ,
              type: UH.type,
              label: iL(UQ),
              from: Uo.id,
              fromName: Uo.name
            });
          }
        }
      }
    }
  }
  id = [...Ur.values()].sort((UV, Uw) => UV.chapter - Uw.chapter || UV.label.localeCompare(Uw.label));
  iA = m();
  return id;
}
a(iX, "rosterDR");
var iq = new Map();
function iN(i) {
  if (!i || i.engine !== "dr") {
    return null;
  } else {
    if (!iq.has(i.from)) {
      iq.set(i.from, H.find(Uk => Uk.id === i.from) || null);
    }
    return iq.get(i.from);
  }
}
a(iN, "homeFight");
var iW = a(i => {
  let Uf = iN(i);
  return Uf && Uf.encounterno || 0;
}, "homeEnc");
function ij(i) {
  let Uf = iN(i);
  return Uf && Uf.monsters && Uf.monsters.find(Uk => Uk.type === i.type && (typeof Uk.cls == "function" ? Uk.cls.name : String(Uk.cls)) === i.clsName) || null;
}
a(ij, "homeRow");
function ia(i) {
  let Ur = ij(i);
  if (Ur && typeof Ur.setup == "function") {
    return Ur.setup;
  } else {
    return null;
  }
}
a(ia, "homeSetup");
var iR = ["music", "musiclevel", "background", "encounterno", "party", "heromakex", "heromakey", "storyParty", "plot", "flags", "rank", "room", "lyrics", "beats"];
var iK = ["party", "heromakex", "heromakey", "storyParty"];
function iy() {
  if (iD) {
    return iD;
  }
  let J = V();
  if (!J) {
    return [];
  }
  let {
    scr_battlegroup: Uf,
    UTOBJ: Ur
  } = J;
  let Uo = "      case 1: {\r\n        (G.monstertype ??= [])[0] = 1;\r\n        (G.monstertype ??= [])[1] = 1;\r\n        (G.monstertype ??= [])[2] = 1;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[2] = instance_create(14, 136, OBJ.obj_testmonster);\r\n      case 2: {\r\n        (G.monstertype ??= [])[0] = 2;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_dummymonster);\r\n      case 3: {\r\n        (G.monstertype ??= [])[0] = 3;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_fakefroggit);\r\n      case 4: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n      case 5: {\r\n        (G.monstertype ??= [])[0] = 5;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 16, OBJ.obj_whimsun);\r\n      case 6: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 5;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(317, 16, OBJ.obj_whimsun);\r\n      case 7: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 156, OBJ.obj_moldsmal);\r\n      case 8: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 6;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 156, OBJ.obj_moldsmal);\r\n      case 9: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 4;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_froggit);\r\n      case 10: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 156, OBJ.obj_moldsmal);\r\n      case 11: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 7;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_migosp);\r\n      case 12: {\r\n        (G.monstertype ??= [])[0] = 7;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_migosp);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 13: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 14: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 15: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 7;\r\n        (G.monsterinstance ??= [])[0] = instance_create(14, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[2] = instance_create(422, 136, OBJ.obj_migosp);\r\n      case 16: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 17: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 9;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 124, OBJ.obj_loox);\r\n      case 18: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n      case 19: {\r\n        (G.monstertype ??= [])[0] = 0;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n      case 20: {\r\n        (G.monstertype ??= [])[0] = 11;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 106, OBJ.obj_napstablook);\r\n      case 21: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 22: {\r\n        (G.monstertype ??= [])[0] = 10;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_torielboss);\r\n      case 23: {\r\n        (G.monstertype ??= [])[0] = 13;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(196, 28, OBJ.obj_movedoge);\r\n      case 24: {\r\n        (G.monstertype ??= [])[0] = 14;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_lesserdoge);\r\n      case 25: {\r\n        (G.monstertype ??= [])[0] = 15;\r\n        (G.monstertype ??= [])[1] = 16;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_mandog);\r\n        (G.monsterinstance ??= [])[1] = instance_create(208, 38, OBJ.obj_womandog);\r\n      case 26: {\r\n        (G.monstertype ??= [])[0] = 17;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_greatdog);\r\n      case 27: {\r\n        (G.monstertype ??= [])[0] = 25;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_papyrusboss);\r\n      case 28: {\r\n        (G.monstertype ??= [])[0] = 22;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_gyftrot);\r\n      case 30: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_snowdrake);\r\n      case 31: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_chilldrake);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n      case 32: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_icecap);\r\n      case 33: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_snowdrake);\r\n      case 34: {\r\n        (G.monstertype ??= [])[0] = 21;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 35: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 36: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 18;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_snowdrake);\r\n      case 40: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_aaron);\r\n      case 41: {\r\n        (G.monstertype ??= [])[0] = 24;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_tembattle);\r\n      case 42: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 156, OBJ.obj_moldsmalx);\r\n      case 43: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 136, OBJ.obj_woshua);\r\n      case 44: {\r\n        (G.monstertype ??= [])[0] = 29;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 36, OBJ.obj_shyren);\r\n      case 45: {\r\n        (G.monstertype ??= [])[0] = 31;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 80, OBJ.obj_maddummy);\r\n      case 46: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 28;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_aaron);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 136, OBJ.obj_woshua);\r\n      case 47: {\r\n        (G.monstertype ??= [])[0] = 32;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyneboss);\r\n      case 48: {\r\n        (G.monstertype ??= [])[0] = 33;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_quiz);\r\n        instance_create(412, 126, OBJ.obj_questionasker);\r\n      case 49: {\r\n        (G.monstertype ??= [])[0] = 34;\r\n        (G.monstertype ??= [])[1] = 35;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 34, OBJ.obj_bara01);\r\n        (G.monsterinstance ??= [])[1] = instance_create(432, 34, OBJ.obj_bara02);\r\n      case 50: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n      case 51: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n      case 52: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 7, OBJ.obj_pyrope);\r\n      case 53: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 12;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 156, OBJ.obj_moldsmal);\r\n      case 54: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 23;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_aaron);\r\n      case 55: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 156, OBJ.obj_moldsmalx);\r\n      case 56: {\r\n        (G.monstertype ??= [])[0] = 39;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 37, OBJ.obj_spiderb);\r\n      case 57: {\r\n        (G.monstertype ??= [])[0] = 40;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_second);\r\n      case 58: {\r\n        (G.monstertype ??= [])[0] = 41;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 75, OBJ.obj_undynebattle2);\r\n      case 59: {\r\n        (G.monstertype ??= [])[0] = 42;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(244, 50, OBJ.obj_wizard);\r\n      case 60: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(56, 40, OBJ.obj_finalknight);\r\n      case 61: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_finalfroggit);\r\n      case 62: {\r\n        (G.monstertype ??= [])[0] = 45;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n      case 63: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_whimsalot);\r\n      case 64: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 44;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_finalfroggit);\r\n      case 65: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 66: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 67: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 46;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[2] = instance_create(420, 110, OBJ.obj_whimsalot);\r\n      case 68: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 42;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 50, OBJ.obj_finalknight);\r\n        (G.monsterinstance ??= [])[1] = instance_create(366, 50, OBJ.obj_wizard);\r\n      case 69: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 120, OBJ.obj_battlebomb);\r\n      case 70: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 71: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 72: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 73: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 80, OBJ.obj_battlebomb);\r\n      case 74: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 100, OBJ.obj_battlebomb);\r\n      case 75: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 76: {\r\n        (G.monstertype ??= [])[0] = 49;\r\n        (G.monstertype ??= [])[1] = 48;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 66, OBJ.obj_bara04);\r\n        (G.monsterinstance ??= [])[1] = instance_create(460, 66, OBJ.obj_bara03);\r\n      case 77: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 78: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 38;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 10, OBJ.obj_pyrope);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 10, OBJ.obj_pyrope);\r\n      case 79: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 80: {\r\n        (G.monstertype ??= [])[0] = 50;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(300, 190, OBJ.obj_mettatonb_third);\r\n      case 81: {\r\n        (G.monstertype ??= [])[0] = 51;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 60, OBJ.obj_mettatonex);\r\n      case 82: {\r\n        (G.monstertype ??= [])[0] = 53;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(280, 20, OBJ.obj_lemonbread);\r\n      case 83: {\r\n        (G.monstertype ??= [])[0] = 54;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_reaperbird);\r\n      case 84: {\r\n        (G.monstertype ??= [])[0] = 55;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_snowdrakemom);\r\n      case 85: {\r\n        (G.monstertype ??= [])[0] = 56;\r\n        (G.monstertype ??= [])[1] = 56;\r\n        (G.monstertype ??= [])[2] = 56;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 146, OBJ.obj_memoryhead);\r\n      case 86: {\r\n        (G.monstertype ??= [])[0] = 57;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(180, 90, OBJ.obj_endogeny);\r\n      case 87: {\r\n        (G.monstertype ??= [])[0] = 58;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(296, 70, OBJ.obj_ripoff_undyne);\r\n      case 88: {\r\n        (G.monstertype ??= [])[0] = 60;\r\n        (G.monstertype ??= [])[1] = 61;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(76, 35, OBJ.obj_ripoff_papyrus);\r\n        (G.monsterinstance ??= [])[1] = instance_create(456, 148, OBJ.obj_ripoff_sans);\r\n      case 89: {\r\n        (G.monstertype ??= [])[0] = 59;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 100, OBJ.obj_ripoff_alphys);\r\n      case 90: {\r\n        (G.monstertype ??= [])[0] = 62;\r\n        (G.monstertype ??= [])[1] = 63;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(26, 94, OBJ.obj_ripoff_toriel);\r\n        (G.monsterinstance ??= [])[1] = instance_create(356, 62, OBJ.obj_ripoff_asgore);\r\n      case 91: {\r\n        (G.monstertype ??= [])[0] = 64;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(260, 110, OBJ.obj_mkid_battle);\r\n      case 92: {\r\n        (G.monstertype ??= [])[0] = 65;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyne_ex);\r\n      case 93: {\r\n        (G.monstertype ??= [])[0] = 66;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_gladdummy);\r\n      case 94: {\r\n        (G.monstertype ??= [])[0] = 67;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 0, OBJ.obj_mettaton_neo);\r\n      case 95: {\r\n        (G.monstertype ??= [])[0] = 68;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 110, OBJ.obj_sansb);\r\n      case 100: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 16, OBJ.obj_asgore_finalintro);\r\n      case 101: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 8, OBJ.obj_asgoreb);\r\n        instance_create(0, 0, OBJ.obj_purplegradienter);\r\n        instance_create(0, 0, OBJ.obj_orangeparticlegen);\r\n      case 120: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 121: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(426, 130, OBJ.obj_migospel);\r\n      case 122: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n      case 123: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(118, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 127, OBJ.obj_moldessa);\r\n      case 124: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 125: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 72;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 120, OBJ.obj_whimsalot);\r\n      case 126: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 110, OBJ.obj_finalfroggit);\r\n      case 127: {\r\n        (G.monstertype ??= [])[0] = 72;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(110, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 120, OBJ.obj_parsnik);\r\n      case 128: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 129: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 130: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 120, OBJ.obj_parsnik);\r\n      case 131: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(314, 110, OBJ.obj_astigmatism);\r\n      case 132: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(312, 110, OBJ.obj_astigmatism);\r\n      case 133: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(8, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(213, 130, OBJ.obj_migospel);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 134: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 135: {\r\n        (G.monstertype ??= [])[0] = 76;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(188, 16, OBJ.obj_glydeb);\r\n      case 140: {\r\n        (G.monstertype ??= [])[0] = 80;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 78, OBJ.obj_sosorry);\r\n      case 255: {\r\n        (G.monstertype ??= [])[0] = 99;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(258, 8, OBJ.obj_asrielb);\r\n      case 256: {\r\n        (G.monstertype ??= [])[0] = 100;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(320, 48, OBJ.obj_asrielfinal);\r";
  let Uk = new Map();
  for (let US of Uo.split(/case (\d+): \{/).slice(1)) {
    {
      let UQ = {};
      for (let Um of US.matchAll(/monstertype \?\?= \[\]\)\[(\d)\] = (\d+);/g)) {
        UQ[Um[1]] = Number(Um[2]);
      }
      for (let UV of US.matchAll(/monsterinstance \?\?= \[\]\)\[(\d)\] = instance_create\([^,]+,[^,]+, OBJ\.(obj_[a-z0-9_]+)\)/g)) {
        let Uw = UV[2];
        if (!Uk.has(Uw) && !!Ur[Uw]) {
          Uk.set(Uw, {
            key: "ut:" + Uw,
            engine: "ut",
            cls: Ur[Uw],
            clsName: Uw,
            type: UQ[UV[1]] || 0,
            label: iL(Uw)
          });
        }
      }
    }
  }
  let Uh = Uo.split(/case (\d+): \{/);
  for (let UZ = 1; UZ < Uh.length; UZ += 2) {
    {
      let UC = Number(Uh[UZ]);
      let UP = [...Uh[UZ + 1].matchAll(/OBJ\.(obj_[a-z0-9_]+)\)/g)].map(Ug => Ug[1]);
      for (let Ug of UP) {
        {
          let Ux = Uk.get(Ug);
          if (Ux && (Ux.battlegroup === undefined || UP.length < Ux.groupSize)) {
            Ux.battlegroup = UC;
            Ux.groupSize = UP.length;
          }
        }
      }
    }
  }
  iD = [...Uk.values()].sort((Uv, UT) => Uv.label.localeCompare(UT.label));
  return iD;
}
a(iy, "rosterUT");
var iu = /^(monster(?!attackname)|mercy|sparepoint|canact|act(name|actor|desc|cost|simul)|xpreward|goldreward|hurtanim|automiss|hittarget$|monsteratk|monsterdef|mnpwr|bulletpwr)/;
var iB = /^(char|hero|control_|input_|acting|temptension|targeted|battle(at|df|mag|spell|actcount)|faceaction|hittarget2|item|spell|msg|flag|tempflag|bmenucoord|menucoord|asc_def|hp$|maxhp|at$|df$|mag$|weapon|armor|choicemsg|othername|cinstance|smxx|smyy|guts|keyitem|litem|phone|pocketitem|currentsong|monsterattackname|idealborder|areapop|attacker|bulletvariable|menuchoice)/;
var iz = new Set();
function ip() {
  let i = [];
  for (let Ur of Object.keys(T)) {
    if (!!Array.isArray(T[Ur]) && !iB.test(Ur)) {
      if (iu.test(Ur) || iz.has(Ur)) {
        i.push(Ur);
      }
    }
  }
  return i;
}
a(ip, "perSlotArrays");
function ie() {
  let Ur = [];
  for (let Uk of Object.keys(T)) {
    if (Array.isArray(T[Uk]) && T[Uk].length >= 3 && T[Uk].length <= 400 && !iB.test(Uk)) {
      Ur.push(Uk);
    }
  }
  return Ur;
}
a(ie, "diffArrays");
function iF(i) {
  if (Array.isArray(i)) {
    return i.map(Ur => typeof Ur == "number" ? 0 : typeof Ur == "string" ? "" : Ur === null ? null : iF(Ur));
  } else {
    return i;
  }
}
a(iF, "cloneShape");
function iE(i) {
  for (let Uo of ip()) {
    let Uk = T[Uo];
    if (Uk[i] === undefined) {
      Uk[i] = Array.isArray(Uk[0]) ? iF(Uk[0]) : typeof Uk[0] == "number" ? 0 : typeof Uk[0] == "string" ? "" : Uk[0] ?? 0;
    }
  }
}
a(iE, "ensureSlot");
function iY(i, J, UU, Uf) {
  const Ur = {
    qgjTy: function (Uw, UZ) {
      return Uw === UZ;
    },
    eKpuE: function (Uw, UZ) {
      return Uw(UZ);
    },
    ErQsi: function (Uw) {
      return Uw();
    },
    tCkQO: function (Uw, UZ) {
      return Uw !== UZ;
    },
    YEKGB: function (Uw, UZ) {
      return Uw !== UZ;
    },
    erNtL: "PhxkQ",
    hrYTO: "volNJ",
    aItSq: function (Uw, UZ) {
      return Uw(UZ);
    },
    uUdHT: function (Uw, UZ) {
      return Uw === UZ;
    },
    kwaXk: function (Uw, UZ) {
      return Uw === UZ;
    },
    RbFTh: "jesKF",
    GSnqA: function (Uw, UZ, UC, UP, Ug) {
      return Uw(UZ, UC, UP, Ug);
    },
    jCJnl: function (Uw, UZ) {
      return Uw(UZ);
    },
    ifaUq: function (Uw, UZ) {
      return Uw === UZ;
    },
    AyxEt: function (Uw, UZ, UC) {
      return Uw(UZ, UC);
    },
    CcieZ: "bLsgA",
    uhFOY: "FVCaA",
    zaYIQ: function (Uw, UZ) {
      return Uw !== UZ;
    },
    Wtgvd: function (Uw, UZ) {
      return Uw !== UZ;
    },
    qYTVr: "ItPch",
    NSsXI: function (Uw, UZ) {
      return Uw !== UZ;
    },
    bDiqe: function (Uw, UZ) {
      return Uw === UZ;
    }
  };
  Ur.eKpuE(iE, J);
  let Uk = 2;
  let UH = Ur.ErQsi(ie);
  let Us = {};
  for (let Uw of UH) {
    Us[Uw] = T[Uw][Uk];
  }
  let US = T.monster.slice(0, 3);
  if (Ur.tCkQO(J, Uk)) {
    for (let UZ of UH) {
      if (Ur.YEKGB(Ur.erNtL, Ur.hrYTO)) {
        let UC = T[UZ];
        if (Array.isArray(UC)) {
          UC[Uk] = Array.isArray(Us[UZ]) ? Ur.aItSq(iF, Us[UZ]) : undefined;
        }
      } else {
        if (pPtnEN.qgjTy(UU.constructor.name, Uf)) {
          return Ur;
        }
        let UP = Uk._up;
        if (UP && !UP.destroyed && pPtnEN.qgjTy(UP.constructor.name, UH)) {
          return UP;
        }
      }
    }
  }
  T.monstertype[Uk] = i.type;
  if (Ur.uUdHT(i.engine, "dr")) {
    T.monsterinstancetype[Uk] = i.cls;
    T.monstermakex[Uk] = UU;
    T.monstermakey[Uk] = Uf;
  }
  T.monster[0] = 1;
  T.monster[1] = 1;
  T.monster[2] = 0;
  let UQ = Ur.kwaXk(i.engine, "dr") && Ur.ErQsi(ic);
  let Um = null;
  try {
    if (Ur.kwaXk(Ur.RbFTh, Ur.RbFTh)) {
      Um = Ur.GSnqA(D, UU, Uf, i.cls, UQ ? {
        _ch: i.chapter,
        _enc: Ur.jCJnl(iW, i)
      } : undefined);
      Um.myself = Uk;
      if (Ur.ifaUq(i.engine, "dr") && Um.userEvent) {
        if (UQ) {
          Ur.AyxEt(il, Um, () => Um.userEvent(12));
        } else {
          Um.userEvent(12);
        }
        let Ug = Ur.aItSq(ia, i);
        if (Ug) {
          Ur.jCJnl(Ug, Uk);
        }
      }
    } else {
      Uk.instance_destroy();
    }
  } catch {
    if (Ur.ifaUq(Ur.CcieZ, Ur.uhFOY)) {
      let Ux = Uk.monsterinstance[UH];
      if (Ur.eKpuE(J, Ux)) {
        Us.set(Us, {
          inst: Ux,
          bm: i
        });
      } else {
        US.delete(UQ);
      }
    } else {
      Um = null;
    }
  }
  if (Ur.zaYIQ(J, Uk)) {
    for (let UG of UH) {
      if (Ur.Wtgvd(Ur.qYTVr, Ur.qYTVr)) {
        Uk.halt = 3;
      } else {
        let Un = T[UG];
        if (!Array.isArray(Un)) {
          continue;
        }
        let Uv = Un[Uk];
        if (Array.isArray(Us[UG])) {
          if (Array.isArray(Uv)) {
            Un[J] = Uv;
          }
        } else if (Ur.NSsXI(Uv, undefined)) {
          Un[J] = Uv;
          iz.add(UG);
        }
        Un[Uk] = Us[UG];
      }
    }
  }
  T.monster[0] = US[0];
  T.monster[1] = US[1];
  T.monster[2] = US[2];
  if (Um) {
    Um.myself = J;
    T.monster[J] = 1;
    T.monstertype[J] = i.type;
    T.monsterinstance[J] = Um;
    if (Ur.bDiqe(i.engine, "dr")) {
      T.monsterinstancetype[J] = i.cls;
      T.monstermakex[J] = UU;
      T.monstermakey[J] = Uf;
    }
    Um._customGuest = 1;
    return Um;
  } else {
    return null;
  }
}
a(iY, "spawnGuest");
function iO(i, J, UU = i + 1) {
  const Uf = {
    yVgAW: function (UV, Uw, UZ, UC, UP) {
      return UV(Uw, UZ, UC, UP);
    },
    wiPEJ: function (UV, Uw) {
      return UV === Uw;
    },
    dCwqY: "yefHi",
    LlBls: function (UV, Uw) {
      return UV / Uw;
    },
    olZik: function (UV, Uw) {
      return UV === Uw;
    },
    pQHxW: function (UV, Uw) {
      return UV % Uw;
    },
    wXakS: function (UV, Uw) {
      return UV + Uw;
    },
    piCgN: function (UV, Uw) {
      return UV - Uw;
    },
    FanbH: function (UV, Uw) {
      return UV > Uw;
    },
    OIGar: function (UV, Uw) {
      return UV / Uw;
    },
    nfBEg: function (UV, Uw) {
      return UV + Uw;
    },
    hywhr: function (UV, Uw) {
      return UV * Uw;
    },
    sfYMm: function (UV, Uw) {
      return UV % Uw;
    },
    VPLxe: function (UV, Uw) {
      return UV <= Uw;
    },
    TXrgW: function (UV, Uw) {
      return UV <= Uw;
    },
    KiZHZ: function (UV, Uw) {
      return UV / Uw;
    },
    BQkjI: function (UV, Uw) {
      return UV / Uw;
    },
    aACTx: function (UV, Uw) {
      return UV - Uw;
    },
    ajfeS: function (UV, Uw) {
      return UV - Uw;
    },
    Bxmqc: function (UV, Uw) {
      return UV * Uw;
    },
    ThMpt: function (UV, Uw) {
      return UV + Uw;
    },
    BkzQC: function (UV, Uw) {
      return UV / Uw;
    }
  };
  if (Uf.wiPEJ(J, "ut")) {
    if (Uf.wiPEJ(Uf.dCwqY, Uf.dCwqY)) {
      let UV = Math.min(Math.max(UU, 1), 8);
      let Uw = Math.ceil(Uf.LlBls(UU, UV));
      if (Uf.olZik(UV, 1)) {
        return {
          x: 260,
          y: 0
        };
      }
      let UC = Uf.pQHxW(i, UV);
      let UP = Math.floor(Uf.LlBls(i, UV));
      let Ug = Uf.LlBls(470, Math.max(1, Uf.wXakS(Uf.piCgN(UV, 1), Uf.FanbH(Uw, 1) ? 0.5 : 0)));
      let Ux = Uf.FanbH(Uw, 1) ? Math.min(60, Uf.OIGar(120, Uf.piCgN(Uw, 1))) : 0;
      return {
        x: Math.round(Uf.wXakS(Uf.nfBEg(10, Uf.hywhr(UC, Ug)), Uf.hywhr(Uf.sfYMm(UP, 2), Uf.LlBls(Ug, 2)))),
        y: Math.round(Uf.hywhr(UP, Ux))
      };
    } else {
      M = Uf.yVgAW(Uf, A[J], UH, US.x, i.y);
    }
  }
  let UH = Uf.VPLxe(UU, 4) ? 2 : Uf.TXrgW(UU, 12) ? 3 : 4;
  let Us = Math.ceil(Uf.LlBls(UU, UH));
  let Uh = Uf.sfYMm(i, UH);
  let US = Math.floor(Uf.KiZHZ(i, UH));
  let UQ = Math.min(80, Uf.BQkjI(220, Us));
  let Um = Uf.wXakS(20, Math.max(0, Uf.OIGar(Uf.aACTx(220, Uf.hywhr(Us, UQ)), 2)));
  return {
    x: Uf.ajfeS(400, Uf.Bxmqc(Uh, 58)),
    y: Math.round(Uf.nfBEg(Uf.ThMpt(Um, Uf.hywhr(US, UQ)), Uf.Bxmqc(Uf.sfYMm(Uh, 2), Uf.BkzQC(UQ, 2))))
  };
}
a(iO, "guestPosition");
function J0(i, J) {
  let Uo = new Map();
  for (let Uw of i) {
    if (Uw && Uw !== " ") {
      Uo.set(Uw, (Uo.get(Uw) || 0) + 1);
    }
  }
  let Uk = [...Uo.entries()].map(([UZ, UC]) => UC > 1 ? UC + " " + UZ + (/s$/.test(UZ) ? "" : "s") : UZ);
  let UH = i.length;
  let Us;
  if (Uk.length) {
    if (UH === 1) {
      Us = Uk[0] + " blocks the way!";
    } else if (Uk.length === 1) {
      Us = Uk[0] + " block the way!";
    } else if (Uk.length === 2) {
      Us = Uk[0] + " and " + Uk[1] + " block the way!";
    } else if (Uk.length === 3) {
      Us = Uk[0] + ", " + Uk[1] + " and " + Uk[2] + " block the way!";
    } else {
      Us = "A crowd of " + UH + " enemies blocks the way!";
    }
  } else {
    Us = "Enemies block the way!";
  }
  if (J === "dr") {
    return "* " + Us;
  }
  let UQ = Us.split(" ");
  let Um = [];
  let UV = "*";
  for (let UZ of UQ) {
    if ((UV + " " + UZ).length > 27 && UV.trim() !== "*") {
      Um.push(UV);
      UV = "  " + UZ;
    } else {
      UV += " " + UZ;
    }
  }
  Um.push(UV);
  return Um.join("&");
}
a(J0, "openingLine");
function J1(i, J) {
  let Uk = [];
  for (let Uh = 0; Uh < T.monster.length; Uh++) {
    if (T.monster[Uh] === 1 && T.monstername) {
      Uk.push(T.monstername[Uh]);
    }
  }
  let UH = J0(Uk, J);
  i.battlemsg = UH;
  if (J === "dr") {
    let US = Array.isArray(T.battlemsg) ? T.battlemsg[0] : undefined;
    if (Array.isArray(T.battlemsg)) {
      T.battlemsg[0] = UH;
    } else {
      T.battlemsg = [UH];
    }
    let UQ = j.first("obj_battlecontroller");
    if (US !== UH && UQ && UQ.battlewriter && j.exists(UQ.battlewriter) && T.myfight === 0 && T.mnfight === 0) {
      UQ.battlewriter.instance_destroy();
    }
    return;
  }
  let Us = j.first("OBJ_WRITER");
  if (!!Us && T.myfight === 0 && T.mnfight === 0) {
    if (Array.isArray(Us.mystring)) {
      Us.mystring[0] = UH;
    }
    Us.originalstring = UH;
    Us.stringpos = 0;
    Us.halt = 0;
    if (Array.isArray(T.msg)) {
      T.msg[0] = UH;
    }
  }
}
a(J1, "setOpeningLine");
function J2(i, J) {
  const UU = {
    nGKjJ: "obj_battlecontroller",
    RBQOq: function (UH, Us) {
      return UH !== Us;
    },
    VHDvb: function (UH, Us) {
      return UH === Us;
    },
    JXGth: function (UH, Us) {
      return UH === Us;
    },
    zvNoT: function (UH, Us) {
      return UH < Us;
    },
    xCzdm: function (UH, Us) {
      return UH / Us;
    },
    odOTc: function (UH, Us) {
      return UH % Us;
    },
    zGMPk: function (UH, Us) {
      return UH / Us;
    },
    cjvVG: function (UH, Us) {
      return UH / Us;
    },
    JHLCQ: function (UH, Us) {
      return UH + Us;
    },
    sPlPx: function (UH, Us) {
      return UH - Us;
    },
    flwQc: function (UH, Us) {
      return UH > Us;
    },
    zyWwG: function (UH, Us) {
      return UH > Us;
    },
    evXlD: function (UH, Us) {
      return UH / Us;
    },
    ZMNOM: function (UH, Us) {
      return UH + Us;
    },
    esJly: function (UH, Us) {
      return UH + Us;
    },
    cXlzY: function (UH, Us) {
      return UH * Us;
    },
    kGjNC: function (UH, Us) {
      return UH % Us;
    },
    waZYr: function (UH, Us) {
      return UH / Us;
    },
    Fweic: function (UH, Us) {
      return UH * Us;
    },
    xurle: function (UH, Us) {
      return UH !== Us;
    },
    lUuvR: "rNiQo",
    eRDyg: "AEYPu",
    kSfsI: function (UH, Us) {
      return UH(Us);
    },
    DjtLF: function (UH, Us) {
      return UH !== Us;
    },
    xlqbk: function (UH) {
      return UH();
    },
    ufuqB: function (UH, Us) {
      return UH === Us;
    },
    ayduB: function (UH) {
      return UH();
    },
    iArRq: "eYfyJ",
    lZOpC: function (UH, Us) {
      return UH(Us);
    },
    Bgfgr: function (UH) {
      return UH();
    },
    vmHWj: function (UH, Us) {
      return UH === Us;
    },
    maCPb: "BFwtj",
    YAFAi: "wRveb",
    ImpEj: function (UH, Us) {
      return UH(Us);
    },
    zOuhh: function (UH, Us) {
      return UH(Us);
    },
    RDPJi: "rdjDf",
    nJlbS: function (UH, Us) {
      return UH + Us;
    },
    dBJvz: "@ch",
    pVGdA: function (UH, Us) {
      return UH - Us;
    },
    vnQYs: function (UH, Us) {
      return UH - Us;
    },
    YaXXN: function (UH, Us) {
      return UH - Us;
    },
    qmGKk: function (UH, Us) {
      return UH - Us;
    },
    LACvp: function (UH, Us) {
      return UH < Us;
    },
    YRvbn: function (UH, Us) {
      return UH - Us;
    },
    PenmH: function (UH, Us) {
      return UH - Us;
    },
    pBEMJ: function (UH, Us) {
      return UH + Us;
    },
    nCtrA: function (UH, Us) {
      return UH * Us;
    },
    mkPtz: function (UH, Us) {
      return UH + Us;
    },
    ZCtJs: "custom",
    rDZhr: function (UH, Us) {
      return UH + Us;
    },
    SZWCS: "Custom (",
    iqHsX: " enemies)",
    REvUK: function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    vjHOG: function (UH, Us) {
      return UH(Us);
    },
    KHiAN: function (UH, Us) {
      return UH(Us);
    },
    RaPYd: function (UH, Us) {
      return UH + Us;
    },
    rdDme: function (UH, Us) {
      return UH + Us;
    }
  };
  if (!J.length) {
    return null;
  }
  if (UU.JXGth(i, "dr")) {
    if (UU.RBQOq(UU.iArRq, UU.iArRq)) {
      if (j.since === a.actWriters) {
        i();
        i(J, "advanced the text of an ACT/spell phase that did not end");
      }
      if (UU.since >= Uo.actForce) {
        i4();
        i5.since = 0;
        i6(i7, "left a stuck ACT/spell phase");
      }
      return;
    } else {
      for (let Ux of J.slice()) {
        let UG = UU.lZOpC(ix, Ux);
        if (UG && !J.some(Un => Un.key === UG)) {
          let Un = UU.Bgfgr(iX).find(Uv => Uv.key === UG);
          if (Un) {
            J = [...J, Un];
          }
        }
      }
      if (UU.lZOpC(iG, J.map(Uv => Uv.key))) {
        if (UU.vmHWj(UU.maCPb, UU.YAFAi)) {
          let Uv = i.isArray(J.battlemsg) ? UU.battlemsg[0] : undefined;
          if (Uo.isArray(i4.battlemsg)) {
            UH.battlemsg[0] = Us;
          } else {
            Uh.battlemsg = [US];
          }
          let UT = UQ.first(aBwEQJ.nGKjJ);
          if (aBwEQJ.RBQOq(Uv, Um) && UT && UT.battlewriter && UV.exists(UT.battlewriter) && aBwEQJ.VHDvb(Uw.myfight, 0) && aBwEQJ.JXGth(UZ.mnfight, 0)) {
            UT.battlewriter.instance_destroy();
          }
          return;
        } else {
          let UL = UU.ImpEj(iN, J.find(Ud => ix(Ud)) || J[0]);
          let UM = Ud => {
            let UD = UL && UL.monsters ? UL.monsters.findIndex(Ut => Ut.type === Ud.type && (typeof Ut.cls == "function" ? Ut.cls.name : String(Ut.cls)) === Ud.clsName) : -1;
            if (UU.zvNoT(UD, 0)) {
              return 99;
            } else {
              return UD;
            }
          };
          J = J.slice().sort((Ud, UD) => UM(Ud) - UM(UD));
        }
      }
      let UH = J[0];
      let Us = UU.zOuhh(iN, UH) || {};
      let Uh = [...new Set(J.map(Ud => Ud.chapter))];
      let US = Math.max(...Uh);
      let UQ = J.slice(0, 3);
      let Um = [20, 120, 220];
      let UV = [480, 500, 460];
      let Uw = [];
      for (let Ud = 0; UU.zvNoT(Ud, UQ.length); Ud++) {
        if (UU.RBQOq(UU.RDPJi, UU.RDPJi)) {
          if (UZ.frame - (UC.forcedAt || -999) < 45) {
            return;
          }
          let UD = UP();
          Ug();
          if (io.forceCount > 0) {
            ik.with("obj_bulletparent", UA => UA.instance_destroy());
            iH.with("obj_bulletgenparent", UA => UA.instance_destroy());
            is.with("obj_darkener", UA => {
              UA.darken = 0;
            });
            ih.with("obj_heart", UA => {
              iX(UA.x, UA.y, iq);
              UA.instance_destroy();
            });
            if (UD) {
              UD.reset = 0;
              UD.noreturn = 0;
              UD.timeron = 1;
              UD.alarm[2] = -1;
            }
            im();
            iV(iw, "ended a stuck enemy turn (directly)", iZ);
          } else {
            iC.mnfight = 2;
            __DECODE_0__.turntimer = 0;
            if (UD) {
              UD.reset = 0;
              UD.noreturn = 0;
              UD.timeron = 1;
            }
            ig(ix, "ended a stuck enemy turn", iG);
          }
          iv.forcedAt = iT.frame;
          iL.forceCount = (iM.forceCount || 0) + 1;
          id.pinned = 0;
          iD.resetFrames = 0;
          iA.nrIdle = 0;
        } else {
          let UA = UQ[Ud];
          let UX = UA.cls && UA.cls.defaultSprite;
          let Uq = UX ? q[UU.esJly(UU.nJlbS(UX, UU.dBJvz), UA.chapter)] || q[UX] : null;
          let Ut = Uq ? UU.cXlzY(Uq.w, 2) : 80;
          let UN = Uq ? UU.cXlzY(Uq.h, 2) : 80;
          let UW = Math.max(Ud ? UU.JHLCQ(Uw[UU.pVGdA(Ud, 1)].top, 40) : 0, Math.min(Um[Ud], UU.vnQYs(300, UN)));
          let Uj = Math.max(380, Math.min(UV[Ud], UU.YaXXN(636, Ut)));
          let Ua = Uw[UU.qmGKk(Ud, 1)];
          if (Ua && UU.LACvp(UW, UU.YRvbn(Ua.bottom, 24)) && UU.LACvp(Uj, UU.PenmH(UU.ZMNOM(Ua.left, Ua.w), 16))) {
            Uj = Math.max(260, UU.pVGdA(UU.YRvbn(Ua.left, Ut), 8));
          }
          Uw.push({
            top: UW,
            bottom: UU.pBEMJ(UW, UN),
            left: Uj,
            w: Ut,
            oy: Uq ? UU.nCtrA(Uq.oy, 2) : 0,
            x: UU.mkPtz(Uj, Uq ? UU.nCtrA(Uq.ox || 0, 2) : 0)
          });
        }
      }
      let UZ = UU.VHDvb(J.length, 1) || UU.ImpEj(iG, J.map(UR => UR.key)) && J.every(UR => ij(UR) && iN(UR) === Us);
      let UC = (UR, UK) => {
        if (UU.xurle(UU.lUuvR, UU.eRDyg)) {
          let Up = UZ ? UU.kSfsI(ij, UR) : null;
          if (Up) {
            return {
              x: Up.x,
              y: Up.y
            };
          } else {
            return {
              x: Uw[UK].x,
              y: UU.JHLCQ(Uw[UK].top, Uw[UK].oy)
            };
          }
        } else {
          let Ue = Uh.min(i.max(UE, 1), 8);
          let UF = J.ceil(aBwEQJ.xCzdm(UU, Ue));
          const UE = {
            x: 260,
            y: 0
          };
          if (aBwEQJ.JXGth(Ue, 1)) {
            return UE;
          }
          let UO = aBwEQJ.odOTc(Uo, Ue);
          let f0 = i4.floor(aBwEQJ.zGMPk(UH, Ue));
          let f1 = aBwEQJ.cjvVG(470, Us.max(1, aBwEQJ.JHLCQ(aBwEQJ.sPlPx(Ue, 1), aBwEQJ.flwQc(UF, 1) ? 0.5 : 0)));
          let f3 = aBwEQJ.zyWwG(UF, 1) ? Uh.min(60, aBwEQJ.evXlD(120, aBwEQJ.sPlPx(UF, 1))) : 0;
          return {
            x: US.round(aBwEQJ.ZMNOM(aBwEQJ.esJly(10, aBwEQJ.cXlzY(UO, f1)), aBwEQJ.cXlzY(aBwEQJ.kGjNC(f0, 2), aBwEQJ.waZYr(f1, 2)))),
            y: UQ.round(aBwEQJ.Fweic(f0, f3))
          };
        }
      };
      let UP = J.every(UR => UR.key === J[0].key);
      let Ug = {
        ...(UZ ? {
          ...Us
        } : Object.fromEntries(iR.filter(UR => Us[UR] !== undefined && (UP || !iK.includes(UR))).map(UR => [UR, Us[UR]]))),
        id: UU.ZCtJs,
        name: UU.ZMNOM(UU.rDZhr(UU.SZWCS, J.length), UU.iqHsX),
        customEncounter: true,
        chapter: US,
        engineChapter: US,
        encounterno: Us.encounterno || 0,
        monsters: UQ.map((UR, UK) => ({
          cls: UR.cls,
          type: UR.type,
          ...UC(UR, UK),
          setup: ia(UR) || (() => {})
        })),
        guests: J.slice(3),
        customEngine: "dr",
        battlemsg: UU.REvUK(J0, J.map(UR => UR.label), "dr")
      };
      UU.vjHOG(ib, {
        host: US,
        enc: Ug.encounterno,
        msg: Ug.battlemsg,
        chapters: Uh,
        real: UQ.map(UR => ({
          cls: UR.cls,
          ch: UR.chapter,
          enc: iW(UR)
        })),
        prime: () => {
          for (let Uu of Uh) {
            if (UU.DjtLF(Uu, US)) {
              if (UU.VHDvb(Uu, 2)) {
                UU.xlqbk(Q);
              }
              if (UU.ufuqB(Uu, 3)) {
                UU.ayduB(h);
              }
              if (S[Uu]) {
                S[Uu].ensureGlobals();
              }
            }
          }
        }
      });
      return Ug;
    }
  }
  UU.KHiAN(ib, null);
  let Uo = J[0];
  return {
    ...(H.find(UR => iM(UR) && UR.battlegroup === Uo.battlegroup) || H.find(UR => iM(UR) && UR.battlegroup)),
    id: UU.ZCtJs,
    name: UU.RaPYd(UU.rdDme(UU.SZWCS, J.length), UU.iqHsX),
    customEncounter: true,
    battlegroup: Uo.battlegroup,
    guests: J.slice(1),
    customEngine: "ut"
  };
}
a(J2, "makeCustomFight");
function J3(i) {
  if (!i || !i.customEncounter || !i.guests) {
    return 0;
  }
  let Ur = 4;
  let Uo = 0;
  let Uk = i.customEngine;
  let UH = i.guests.slice();
  if (Uk === "ut") {
    for (let US = 0; US < 3 && UH.length; US++) {
      {
        if (T.monster[US] === 1) {
          continue;
        }
        const UQ = {
          x: [216, 418, 14][US],
          y: 136
        };
        let Um = UH.shift();
        let UV = UQ;
        let Uw = null;
        try {
          Uw = iY(Um, US, UV.x, UV.y);
        } catch (UZ) {
          console.warn("[custom] could not add " + Um.label + ":", UZ);
        }
        if (Uw) {
          Uo++;
          delete Uw._customGuest;
        }
      }
    }
  }
  let Uh = Math.max(...[0, 1, 2].map(UP => {
    let Un = T.monsterinstance[UP];
    if (Un && !Un.destroyed && typeof Un.depth == "number") {
      return Un.depth;
    } else {
      return -Infinity;
    }
  }));
  for (let UP = 0; UP < UH.length; UP++) {
    {
      let Ug = iO(UP, Uk, UH.length);
      let Ux = null;
      try {
        Ux = iY(UH[UP], Ur, Ug.x, Ug.y);
      } catch (Un) {
        console.warn("[custom] could not add " + UH[UP].label + ":", Un);
      }
      if (!Ux) {
        continue;
      }
      Uo++;
      Ur++;
      if (Number.isFinite(Uh) && typeof Ux.depth == "number" && Ux.depth <= Uh) {
        Ux.depth = Uh + 1;
      }
      let UG = Ux.sprite_index && q[Ux.sprite_index];
      if (UG && UG.w && UG.h && (UG.w * Math.abs(Ux.image_xscale || 1) > 180 || UG.h * Math.abs(Ux.image_yscale || 1) > 180)) {
        Ux.depth = (Ux.depth || 0) + 50;
      }
    }
  }
  try {
    J1(i, Uk);
  } catch {}
  J6(Uk);
  return Uo;
}
a(J3, "spawnGuests");
function J4() {
  return !!T.monster && !!T.monster.__customBoard;
}
a(J4, "isCustomBoard");
function J5() {
  const i = {
    vHWlv: function (UH, Us) {
      return UH < Us;
    },
    pWxUj: function (UH, Us) {
      return UH !== Us;
    },
    qBXHn: "jGyoj",
    QCvec: "JjQYN",
    ykIWp: function (UH, Us) {
      return UH !== Us;
    },
    zEUkT: function (UH, Us) {
      return UH === Us;
    },
    hczMZ: function (UH, Us) {
      return UH == Us;
    },
    GMXgf: "object",
    lxMoB: function (UH, Us) {
      return UH !== Us;
    },
    qDeql: "function",
    ffpnj: "obj_monsterparent",
    kCsoP: function (UH, Us) {
      return UH === Us;
    },
    JRavM: "swTCu",
    qxeRt: "FrpNN",
    bOwCR: "win"
  };
  const Ur = i;
  let Uo = j.self;
  let Uk = [];
  for (let UH = 0; Ur.vHWlv(UH, T.monster.length); UH++) {
    if (Ur.pWxUj(Ur.qBXHn, Ur.QCvec)) {
      let Us = T.monsterinstance[UH];
      if (Ur.ykIWp(UH, 3) && Ur.zEUkT(T.monster[UH], 1) && Us && Ur.hczMZ(typeof Us, Ur.GMXgf) && !Us.destroyed && Ur.lxMoB(Us, Uo)) {
        Uk.push(Us);
      }
    } else {
      i.darken = 0;
    }
  }
  if (!Uk.length) {
    return false;
  }
  if (Uo && Ur.hczMZ(typeof Uo.is, Ur.qDeql) && Uo.is(Ur.ffpnj)) {
    try {
      if (Ur.kCsoP(Ur.JRavM, Ur.qxeRt)) {
        i.mywriter.instance_destroy();
      } else if (Uo.scr_monsterdefeat) {
        Uo.scr_monsterdefeat();
      }
    } catch {}
    if (!Uo.destroyed) {
      Uo.instance_destroy();
    }
  }
  if (Ur.kCsoP(T.battleover, Ur.bOwCR)) {
    T.battleover = null;
  }
  return true;
}
a(J5, "customEndcombat");
function J6(i) {
  v.customEndcombat = J5;
  v.customScroll = Jb;
  v.customTargetPicked = JI;
  v.customEndturn = JU;
  v.customHidden = Jl;
  J7 = [];
  for (let UH = 0; UH < T.monster.length; UH++) {
    {
      let UV = T.monsterinstance[UH];
      if (UV && typeof UV == "object" && !UV.destroyed && UH !== 3) {
        J7.push(UV);
      }
    }
  }
  J8.clear();
  let Uo = T.monster;
  if (!Uo || Uo.__customBoard) {
    return;
  }
  let Uk = Uw => Uw && typeof Uw.is == "function" && Uw.is("obj_monsterparent");
  T.monster = new Proxy(Uo, {
    get(Uw, UZ) {
      if (UZ === "__customBoard") {
        return true;
      } else if (UZ === "__raw") {
        return Uw;
      } else {
        return Reflect.get(Uw, UZ);
      }
    },
    set(Uw, UZ, UC) {
      if (UC === 0 && typeof UZ == "string" && /^\d+$/.test(UZ) && Uw[UZ] === 1) {
        let Un = Number(UZ);
        let Uv = T.monsterinstance[Un];
        let UT = j.self;
        let UL = Uv && typeof Uv == "object" && !Uv.destroyed && T.monsterhp[Un] > 0 && !(T.mercymod[Un] >= (T.mercymax[Un] || 100));
        let UM = () => {
          {
            for (let Ut = 0; Ut < Uw.length; Ut++) {
              {
                if (Ut === 3 || Ut === Un || Uw[Ut] !== 1) {
                  continue;
                }
                let UR = T.monsterinstance[Ut];
                if (UR && typeof UR == "object" && !UR.destroyed) {
                  return true;
                }
              }
            }
            return false;
          }
        };
        if (UL && UT !== Uv && (Uk(UT) || T.myfight === 7 && T.mnfight === -1 && UM())) {
          Jr.push({
            slot: Un,
            by: UT && UT.constructor ? UT.constructor.name : "?",
            frame: j.frame
          });
          return true;
        }
      }
      return Reflect.set(Uw, UZ, UC);
    }
  });
}
a(J6, "armBoard");
var J7 = [];
var J8 = new Map();
var J9 = a(i => i && typeof i == "object" && !i.destroyed && typeof i.myself == "number" && T.monster[i.myself] === 1 && T.monsterinstance[i.myself] === i, "aliveEnemy");
function Ji(i, J) {
  if (i === J) {
    return;
  }
  let Ur = T.monsterinstance[i];
  let Uo = T.monsterinstance[J];
  let Uk = [];
  for (let Uh of j.list) {
    if (!Uh.destroyed && typeof Uh.myself == "number" && (Uh === Ur || Uh === Uo || typeof Uh.is == "function" && !!Uh.is("obj_monsterparent"))) {
      if (Uh.myself === i) {
        Uk.push([Uh, J]);
      } else if (Uh.myself === J) {
        Uk.push([Uh, i]);
      }
    }
  }
  for (let US of ip()) {
    let UQ = US === "monster" ? Jf() : T[US];
    if (!Array.isArray(UQ)) {
      continue;
    }
    let Um = UQ[i];
    UQ[i] = UQ[J];
    UQ[J] = Um;
  }
  for (let [UV, Uw] of Uk) {
    UV.myself = Uw;
  }
}
a(Ji, "swapSlots");
function JJ() {
  for (let Ur = 0; Ur < T.monster.length; Ur++) {
    let Uo = T.monsterinstance[Ur];
    if (J9(Uo) && !J7.includes(Uo)) {
      J7.push(Uo);
    }
  }
  return J7.filter(J9);
}
a(JJ, "livingOnBoard");
function Jl() {
  if (!J4()) {
    return 0;
  }
  let Ur = [0, 1, 2].filter(Uo => T.monster[Uo] === 1).length;
  return Math.max(0, JJ().length - Ur);
}
a(Jl, "hiddenEnemies");
function Jc(i) {
  let UU = JJ();
  let Uf = [0, 1, 2].filter(Um => T.monster[Um] === 1);
  if (!Uf.length || UU.length <= Uf.length) {
    return false;
  }
  let Uo = Uf.map(Um => T.monsterinstance[Um]);
  let Uk = UU.length;
  let UH = UU.indexOf(i > 0 ? Uo[Uo.length - 1] : Uo[0]);
  let Us = null;
  for (let Um = 1; Um <= Uk && !Us; Um++) {
    {
      let UV = UU[((UH + i * Um) % Uk + Uk) % Uk];
      if (!Uo.includes(UV)) {
        Us = UV;
      }
    }
  }
  if (!Us) {
    return false;
  }
  let Uh = i > 0 ? [...Uo.slice(1), Us] : [Us, ...Uo.slice(0, -1)];
  for (let Uw = 0; Uw < Uf.length; Uw++) {
    if (T.monsterinstance[Uf[Uw]] !== Uh[Uw]) {
      Ji(Uf[Uw], Uh[Uw].myself);
    }
  }
  return true;
}
a(Jc, "scrollBoard");
function Jb(i, J, UU) {
  let Uo = T.bmenucoord;
  let Uk = [0, 1, 2].filter(UQ => T.monster[UQ] === 1);
  if (!Uk.length || !Uo[i]) {
    return false;
  }
  let UH = Uo[i][J];
  if (UU > 0 && Uk.some(UQ => UQ > UH) || UU < 0 && Uk.some(UQ => UQ < UH) || !Jc(UU)) {
    return false;
  }
  let Uh = [0, 1, 2].filter(UQ => T.monster[UQ] === 1);
  Uo[i][J] = UU > 0 ? Uh[Uh.length - 1] : Uh[0];
  return true;
}
a(Jb, "customScroll");
function JI(i, J, UU) {
  let UH = T.monsterinstance[UU];
  if (J9(UH)) {
    J8.set(J, {
      inst: UH,
      bm: i
    });
  } else {
    J8.delete(J);
  }
}
a(JI, "customTargetPicked");
function JU() {
  let J = [...J8.entries()].filter(([, Uk]) => J9(Uk.inst));
  let UU = new Set(J.map(([, Uk]) => Uk.inst));
  for (let [Uk, UH] of J) {
    let Us = UH.inst.myself;
    if (Us > 2) {
      let Uh = [0, 1, 2].find(US => !UU.has(T.monsterinstance[US]));
      if (Uh === undefined) {
        continue;
      }
      Ji(Uh, Us);
      Us = Uh;
    }
    if (UH.bm === 11 || UH.bm === 13) {
      if (Array.isArray(T.actingtarget)) {
        T.actingtarget[Uk] = Us;
      }
    } else {
      T.chartarget[Uk] = Us;
    }
  }
  J8.clear();
}
a(JU, "customEndturn");
function Jf() {
  return T.monster && T.monster.__raw || T.monster;
}
a(Jf, "rawMonster");
var Jr = [];
K();
var JP = 0.25;
var Jg = {
  obj_hatguy_enemy: {
    partner: "obj_musical_controller"
  },
  obj_pink_enemy: {
    intro: {
      introcon: 3,
      phase4introcon: 0
    }
  },
  obj_blue_enemy: {
    intro: {
      done_intro: true
    }
  },
  obj_holywatercooler_enemy: {
    intro: {
      introcon: 0
    }
  },
  obj_balthizard_enemy: {
    intro: {
      gersonintro: 2
    }
  }
};
var Jx = /^obj_(heart|yheart|purpleheart|greenheart|blueheart)$/;
var JG = a(i => i && typeof i == "object" && !i.destroyed, "alive");
var Jn = a((i, J) => i && typeof i.is == "function" && i.is(J), "isA");
var Jv = a(i => Jn(i, "obj_writer") || Jn(i, "obj_base_writer") || /^OBJ_(INSTA|NOMSC)?WRITER$/.test(i.constructor.name), "isWriter");
var JT = a(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || Jn(i, "obj_battleblcon"), "isBalloon");
var JL = new WeakMap();
function JM(i) {
  let Uf = i.constructor;
  if (JL.has(Uf)) {
    return JL.get(Uf);
  }
  let Uo = null;
  try {
    {
      let Us = T.monstertype && T.monstertype[i.myself];
      let Uh = i._ch ?? T.chapter;
      let US = iX().filter(UV => UV.cls === Uf || UV.clsName === Uf.name);
      let UQ = US.filter(UV => UV.cls === Uf || UV.chapter === Uh);
      let Um = UQ.length ? UQ : US;
      Uo = Um.find(UV => UV.type === Us) || Um[0] || iy().find(UV => UV.cls === Uf || UV.clsName === Uf.name) || null;
    }
  } catch {
    Uo = null;
  }
  JL.set(Uf, Uo);
  return Uo;
}
a(JM, "entryOf");
function Jd(i) {
  let Uo = JM(i);
  let Uk = Uo && is(Uo) || null;
  let UH = Jg[i.constructor.name];
  if (Uk && UH) {
    return {
      ...UH,
      ...Uk
    };
  } else {
    return Uk || UH || null;
  }
}
a(Jd, "rowOf");
var JD = new WeakMap();
function JA(i) {
  let Uo = JM(i);
  let Uk = Uo ? ih(Uo) : null;
  if (!Uk || Uk === "regular") {
    Uk = JD.get(i.constructor) || Uk || "regular";
  }
  if (Uk === "alone" || Uk === "owner") {
    return "owner";
  } else {
    return "regular";
  }
}
a(JA, "roleOf");
function JX() {
  let UU = T.__boardSched;
  let Uf = [];
  for (let Uk = 0; Uk < T.monster.length; Uk++) {
    if (Uk === 3 || T.monster[Uk] !== 1) {
      continue;
    }
    let UH = T.monsterinstance[Uk];
    if (!!JG(UH) && UH.myself === Uk && !UH._quarantined) {
      if (UH._schedSeq === undefined) {
        UH._schedSeq = UU.seq++;
      }
      Uf.push(UH);
    }
  }
  return Uf.sort((Us, Uh) => Us._schedSeq - Uh._schedSeq);
}
a(JX, "boardEnemies");
var Jq = -1;
var Jt = null;
var JN = false;
function JW() {
  if (Jq !== j.frame || Jt !== T.__boardSched) {
    Jq = j.frame;
    Jt = T.__boardSched;
    JN = JX().some(Ur => Ur._schedAtk === 1);
  }
  return JN;
}
a(JW, "attackerStanding");
function Jj(i) {
  for (let Uo = 0; Uo < T.monster.length; Uo++) {
    {
      if (Uo === 3 || T.monster[Uo] !== 1) {
        continue;
      }
      let UH = T.monsterinstance[Uo];
      if (JG(UH) && UH !== i && UH._schedHelperOf !== i) {
        return true;
      }
    }
  }
  return false;
}
a(Jj, "othersStanding");
var Ja = a(i => i ? T.mnfight === 1 || T.mnfight === 2 : T.mnfight >= 1 && T.mnfight <= 2, "inEnemyPhase");
function JR(i) {
  i.live = 1;
  i.turn++;
  i.bullets = 0;
  i.planFrame = j.frame;
  let Ur = i.ut === 1;
  let Uo = JX();
  let Uk = Uo.filter(US => JA(US) === "owner");
  let UH = Uo.filter(US => JA(US) !== "owner");
  let Us = [];
  if (iG(Uo.map(US => (JM(US) || {}).key))) {
    Us = Uo;
    i.ownerTurn = 0;
  } else if (Uk.length && (!UH.length || i.turn % 2 === 1)) {
    Us = [Uk[i.owner % Uk.length]];
    i.owner++;
    i.ownerTurn = 1;
  } else if (UH.length) {
    let US = i.cap > 0 ? i.cap : UH.length;
    for (let UQ = 0; UQ < UH.length && Us.length < US; UQ++) {
      Us.push(UH[(i.reg + UQ) % UH.length]);
    }
    i.reg = (i.reg + Us.length) % UH.length;
    i.ownerTurn = 0;
  }
  i.attackers = Us.length;
  for (let Um of Uo) {
    let UV = Us.includes(Um);
    Um._schedAtk = UV ? 1 : 0;
    Um._schedRest = UV ? 0 : 1;
    if (UV) {
      if (!Ur && Um.talked === 0) {
        Um.rtimer = 0;
      }
      continue;
    }
    JK(Um, Ur);
  }
}
a(JR, "plan");
function JK(i, J) {
  if (i.attacked === 0 || i.attacked === undefined) {
    i.attacked = 1;
    i._schedSetA = 1;
  }
  if (!J && (i.talked === 0 || i.talked === undefined)) {
    i.talked = JP;
    i._schedSetT = JP;
  }
}
a(JK, "rest");
function Jy(i) {
  if (i.live) {
    i.live = 0;
    i.attackers = 0;
    for (let Uk of j.list) {
      if (!Uk.destroyed) {
        if (Uk._schedSetA) {
          if (Uk.attacked === 1) {
            Uk.attacked = 0;
          }
          Uk._schedSetA = undefined;
        }
        if (Uk._schedSetT) {
          if (Uk.talked === Uk._schedSetT) {
            Uk.talked = 0;
          }
          Uk._schedSetT = undefined;
        }
        if (Uk._schedAtk !== undefined) {
          Uk._schedAtk = undefined;
          Uk._schedRest = undefined;
        }
      }
    }
  }
}
a(Jy, "endPlan");
function Ju(i, J) {
  if (!(i.attackers < 2) && typeof J == "number" && typeof T.turntimer == "number" && !!(T.turntimer < J) && !(J >= 900)) {
    T.turntimer = J;
    i.merged = (i.merged || 0) + 1;
  }
}
a(Ju, "mergeTimer");
var Jz = Symbol("boardStep");
var Jp = {
  by: null,
  ending: false
};
function Je(i) {
  let UU = i && i.prototype;
  if (!UU || Object.prototype.hasOwnProperty.call(UU, Jz) || typeof UU.step != "function") {
    return;
  }
  let Uo = UU.step;
  UU[Jz] = 1;
  let Uk = UU.alarmEvent;
  if (typeof Uk == "function") {
    UU.alarmEvent = function (...Us) {
      {
        let UG = T.__boardSched;
        if (!UG || !J4()) {
          return Uk.apply(this, Us);
        }
        let Un = j.spawns;
        let Uv = T.battleover;
        let UT = T.fighting;
        if (JF(UG, this, Us[0])) {
          {
            this.alarm[5] = 1;
            return;
          }
        }
        let UL = Jp.by;
        let UM = Jp.ending;
        Jp.by = this;
        Jp.ending = false;
        try {
          return Uk.apply(this, Us);
        } finally {
          {
            let UD = Jp.ending;
            Jp.by = UL;
            Jp.ending = UM;
            if (UG.ut !== 1 && UD && Jj(this)) {
              l4(this, Uv, UT);
            }
            if (j.spawns > Un) {
              {
                let UA = this._schedHelperOf && JG(this._schedHelperOf) ? this._schedHelperOf : this;
                if (UG.ut === 1 && UG.live && UA._schedRest === 1) {
                  JY(j.spawns - Un);
                }
                for (let UX of j.list.slice(-(j.spawns - Un))) {
                  if (UX !== this && UX._schedBy === undefined) {
                    UX._schedBy = UA;
                    UX._schedBorn = j.frame;
                  }
                }
              }
            }
          }
        }
      }
    };
  }
  UU.step = function (...Us) {
    {
      let Uw = T.__boardSched;
      if (!Uw || !J4()) {
        return Uo.apply(this, Us);
      }
      let UZ = Uw.ut === 1;
      let UC = Ja(UZ);
      if (UC && !Uw.live) {
        JR(Uw);
      }
      let UP = this._schedHelperOf && JG(this._schedHelperOf) ? this._schedHelperOf : this;
      if (!UZ) {
        l8();
      }
      if (UC && Uw.live && UP._schedAtk !== 1) {
        if (UP._schedRest === undefined && UP === this) {
          UP._schedRest = 1;
        }
        JK(this, UZ);
      }
      let Ug = T.turntimer;
      let Ux = T.mnfight;
      let UG = T.myfight;
      let Un = j.spawns;
      let Uv = T.battleover;
      let UT = T.fighting;
      let UL = Jp.by;
      let UM = Jp.ending;
      Jp.by = this;
      Jp.ending = false;
      let Ud = false;
      try {
        return Uo.apply(this, Us);
      } finally {
        {
          Ud = Jp.ending;
          Jp.by = UL;
          Jp.ending = UM;
          if (Uw.live && T.mnfight === 2 && UP === this && this._schedAtk === 1) {
            Ju(Uw, Ug);
          }
          if (!UZ && Uw.live && (Ux === 1 || Ux === 1.5) && T.mnfight === 2) {
            JE(UP, Uw);
          }
          if (UZ && Uw.live && Ux === 2 && T.mnfight === 3 && Ug > 1 && UP._schedRest === 1 && JW()) {
            T.mnfight = 2;
            T.turntimer = Ug;
            if (Uw.keptTurn !== Uw.turn) {
              Uw.keptTurn = Uw.turn;
              Uw.kept = (Uw.kept || 0) + 1;
            }
          }
          if (!UZ && Uw.live && Ux === 2 && T.mnfight === 2 && UP._schedRest === 1 && typeof Ug == "number" && T.turntimer !== Ug && JW()) {
            T.turntimer = Ug;
          }
          if (j.spawns > Un) {
            if (UZ && Uw.live && UP._schedRest === 1) {
              JY(j.spawns - Un);
            }
            JO(this, j.spawns - Un);
          }
          if (UZ && !Uv && T.battleover === "ut-win") {
            UP._schedLeave = 1;
          }
          if (!UZ && T.myfight === 7 && T.mnfight === -1 && (UG !== 7 || Ux !== -1) && Jj(this)) {
            let UX = j.first("obj_battlecontroller");
            if (UX && UX.victoried !== 1) {
              UX.victory = 0;
              T.myfight = UG;
              T.mnfight = Ux;
              Jr.length = 0;
              Ud = true;
            }
          }
          if (!UZ && (Ud || this._schedLeave === 1 || !Uv && T.battleover && !/lose/i.test(String(T.battleover))) && Jj(this)) {
            l4(this, Uv, UT);
          }
        }
      }
    }
  };
}
a(Je, "wrapClass");
function JF(i, J, UU) {
  if (UU !== 5 || i.ut !== 1 || !i.live || T.mnfight !== 1) {
    return false;
  } else {
    return JX().some(UH => UH !== J && UH._schedAtk === 1 && UH.alarm && UH.alarm[6] > 0);
  }
}
a(JF, "talkWaits");
function JE(i, J) {
  for (let Uk of j.list.slice()) {
    {
      if (!JG(Uk) || !JT(Uk) || !Uk._schedBy || Uk._schedBy === i || !Jn(Uk._schedBy, "obj_monsterparent")) {
        continue;
      }
      let UH = JG(Uk.mywriter) ? Uk.mywriter : null;
      if (UH) {
        UH.instance_destroy();
      }
      Uk.instance_destroy();
      J.closed = (J.closed || 0) + 1;
    }
  }
}
a(JE, "closeTalk");
function JY(i) {
  let Uo = j.list.slice(-i).filter(JG);
  if (Uo.some(JT)) {
    for (let Uk of Uo) {
      if (JT(Uk) || Jv(Uk)) {
        Uk.instance_destroy();
      }
    }
  }
}
a(JY, "hush");
function JO(i, J) {
  let Uk = j.list;
  let UH = Math.max(0, Uk.length - J);
  let Us = false;
  for (let Uh = UH; Uh < Uk.length; Uh++) {
    {
      let US = Uk[Uh];
      if (!!JG(US) && US !== i) {
        if (US._schedBy === undefined) {
          US._schedBy = i;
          US._schedBorn = j.frame;
        }
        if (Jn(US, "obj_growtangle") || Jn(US, "obj_moveheart")) {
          Us = true;
        }
        if (!!Jn(US, "obj_monsterparent") && !US._schedHelperOf && US._schedSeq === undefined) {
          if (typeof US.myself != "number" || T.monsterinstance[US.myself] !== US) {
            US._schedHelperOf = i;
            if (typeof i.myself == "number") {
              US.myself = i.myself;
            }
            Je(US.constructor);
            l1(US.constructor);
          }
        }
      }
    }
  }
  if (Us && !JD.has(i.constructor) && (j.number("obj_growtangle") > 1 || j.number("obj_moveheart") > 1)) {
    JD.set(i.constructor, "owner");
  }
}
a(JO, "adoptSpawns");
var l0 = Symbol("boardDestroy");
function l1(i) {
  let Ur = i && i.prototype;
  if (!Ur || Object.prototype.hasOwnProperty.call(Ur, l0) || typeof Ur.instance_destroy != "function") {
    return;
  }
  let Uk = Ur.instance_destroy;
  Ur[l0] = 1;
  Ur.instance_destroy = function (...UH) {
    {
      let Uw = T.__boardSched;
      if (!Uw || UH.length > 0 || !J4()) {
        return Uk.apply(this, UH);
      }
      let UZ = Jp.by;
      let UC = Uw.ut === 1;
      if (UZ && UZ !== this && l3(this, UZ, UC)) {
        return;
      }
      if (!UC || !Jn(this, "obj_monsterparent")) {
        return Uk.apply(this, UH);
      }
      let UP = j.first("obj_battlecontroller");
      let Ug = UP && UP.visible;
      let Ux = Jp.by;
      Jp.by = this;
      try {
        return Uk.apply(this, UH);
      } finally {
        Jp.by = Ux;
        if (UP && Ug && !UP.visible && Jj(this)) {
          UP.visible = Ug;
        }
      }
    }
  };
}
a(l1, "guardDestroy");
var l2 = ["obj_hpname", "obj_battlebg", "obj_btparent", "obj_borderparent", "obj_heart"];
function l3(i, J, UU) {
  if (UU) {
    return l2.some(UH => Jn(i, UH)) && Jj(J);
  } else if (Jn(i, "obj_battlecontroller")) {
    if (Jj(J)) {
      Jp.ending = true;
      return true;
    } else {
      return false;
    }
  } else if (Jp.ending) {
    if (Jn(i, "obj_heroparent") || Jn(i, "obj_tensionbar")) {
      return true;
    } else {
      return Jn(i, "obj_monsterparent") && typeof i.myself == "number" && T.monster[i.myself] === 1 && T.monsterinstance[i.myself] === i;
    }
  } else {
    return false;
  }
}
a(l3, "refuseDestroy");
function l4(i, J, UU) {
  let Ur = T.__boardSched;
  T.battleover = J;
  T.fighting = UU;
  for (let Uh of Object.keys(i)) {
    {
      let Um = i[Uh];
      if (JG(Um) && Um !== i && typeof Um.depth == "number" && Um.depth <= -1000 && !Jn(Um, "obj_monsterparent")) {
        Um.instance_destroy();
      }
    }
  }
  let UH = i.myself;
  if (!i.destroyed) {
    try {
      if (typeof i.scr_monsterdefeat == "function") {
        i.scr_monsterdefeat();
      }
    } catch {}
    if (!i.destroyed) {
      i.instance_destroy();
    }
  }
  if (typeof UH == "number" && T.monsterinstance[UH] === i && T.monster[UH] === 1) {
    Jf()[UH] = 0;
  }
  i._schedLeave = undefined;
  Ur.exits = (Ur.exits || 0) + 1;
  Ur.exitFrame = j.frame;
}
a(l4, "localExit");
var l5 = 0;
function l6() {
  return l5;
}
a(l6, "winGet");
function l7(i) {
  if (i === 1 && l5 !== 1 && J4() && T.__boardSched && T.__boardSched.ut !== 1) {
    let Uo = l9(j.self);
    if (Uo && Jj(Uo)) {
      {
        Uo._schedLeave = 1;
        return;
      }
    }
  }
  l5 = i;
}
a(l7, "winSet");
function l8() {
  let UU = T.flag;
  if (!Array.isArray(UU) || UU.length <= 39) {
    return;
  }
  let Ur = Object.getOwnPropertyDescriptor(UU, 39);
  if (!Ur || Ur.set !== l7) {
    l5 = UU[39];
    Object.defineProperty(UU, 39, {
      configurable: true,
      enumerable: true,
      get: l6,
      set: l7
    });
  }
}
a(l8, "armWinFlag");
function l9(i) {
  for (let Uo = 0; i && Uo < 4; Uo++) {
    {
      if (JG(i._schedHelperOf)) {
        return i._schedHelperOf;
      }
      if (Jn(i, "obj_monsterparent") && typeof i.myself == "number" && T.monsterinstance[i.myself] === i) {
        return i;
      }
      i = JG(i._schedBy) ? i._schedBy : null;
    }
  }
  return null;
}
a(l9, "ownerOf");
function li(i, J) {
  let Uf = J === "ut";
  if (!i._sched) {
    i._sched = {
      stats: {
        turns: 0,
        ownerTurns: 0,
        maxAttackers: 0,
        merged: 0,
        released: 0,
        passed: 0,
        kept: 0,
        nudged: 0,
        folded: 0,
        exits: 0,
        helpers: 0
      },
      lastTurn: 0
    };
    T.__boardSched = {
      ut: Uf ? 1 : 0,
      seq: 0,
      turn: 0,
      owner: 0,
      reg: 0,
      live: 0,
      attackers: 0,
      ownerTurn: 0,
      merged: 0,
      exits: 0,
      cap: Math.max(0, i.atkCap | 0)
    };
    lS = -1;
    lQ();
  }
  let UH = T.__boardSched;
  let Us = i._sched.stats;
  if (!UH) {
    return;
  }
  let US = j.first("obj_battlecontroller");
  if (US) {
    l1(US.constructor);
  }
  for (let UV of JX()) {
    Je(UV.constructor);
    l1(UV.constructor);
  }
  if (!Uf) {
    j.with("obj_heroparent", Uw => l1(Uw.constructor));
    j.with("obj_tensionbar", Uw => l1(Uw.constructor));
  } else {
    for (let Uw of l2) {
      j.with(Uw, UZ => l1(UZ.constructor));
    }
  }
  if (T.mnfight === 0) {
    Jy(UH);
  }
  if (!Uf) {
    l8();
    for (let UZ of JX()) {
      if (UZ._schedLeave === 1) {
        if (Jj(UZ)) {
          l4(UZ, T.battleover, T.fighting);
        } else {
          UZ._schedLeave = undefined;
          l5 = 1;
        }
      }
    }
  }
  if (UH.turn !== i._sched.lastTurn && UH.live) {
    i._sched.lastTurn = UH.turn;
    Us.turns++;
    if (UH.ownerTurn) {
      Us.ownerTurns++;
    }
    Us.maxAttackers = Math.max(Us.maxAttackers, UH.attackers);
  }
  Us.merged = UH.merged;
  Us.exits = UH.exits;
  Us.kept = UH.kept || 0;
  Us.closed = UH.closed || 0;
  if (!Uf && UH.exitFrame === j.frame && T.myfight === 3) {
    Z();
  }
  lr(Us);
  lU(Us);
  if (Uf && T.mnfight === 1 && j.exists("obj_purpleheart")) {
    j.with("obj_heart", UC => {
      if (UC.x > -100) {
        UC.x = -200;
        UC.movement = -1;
      }
    });
  }
  if (UH.live && Ja(Uf)) {
    lI("obj_growtangle", Us);
    lI("obj_moveheart", Us);
    if (!Uf && T.mnfight === 2) {
      lh(US, Us);
    }
    if (T.mnfight === 2) {
      lJ(UH, Us, Uf);
    }
    if (Uf && T.mnfight === 2) {
      lb(UH, Us);
    }
  }
  let Um = 0;
  for (let UC of j.list) {
    if (!UC.destroyed && UC._schedHelperOf) {
      Um++;
    }
  }
  Us.helpers = Math.max(Us.helpers, Um);
}
a(li, "boardSchedule");
function lJ(i, J, UU) {
  i.bullets = (i.bullets || 0) + 1;
  if (i.bullets % 30 !== 0 || i.bullets > 150) {
    return;
  }
  let Uk = JX();
  let UH = Uk.filter(US => US._schedAtk === 1 && US.attacked === 0);
  let Us = Uk.filter(US => US._schedRest === 1 && US._schedSetA === 1 && US.attacked === 1);
  for (let US of UH) {
    {
      let UQ = Us.shift();
      if (!UQ) {
        break;
      }
      US._schedAtk = 0;
      US._schedRest = 1;
      JK(US, UU);
      UQ._schedAtk = 1;
      UQ._schedRest = 0;
      UQ.attacked = 0;
      UQ._schedSetA = undefined;
      J.passed++;
    }
  }
}
a(lJ, "passTurn");
var ll = new WeakMap();
function lc(i) {
  let Uk = i.constructor;
  if (!ll.has(Uk)) {
    let UH = "";
    for (let Us = Uk.prototype; Us && Us !== Object.prototype && !/^(Inst|obj_monsterparent)$/.test(Us.constructor.name); Us = Object.getPrototypeOf(Us)) {
      for (let Uh of Object.getOwnPropertyNames(Us)) {
        let US = Object.getOwnPropertyDescriptor(Us, Uh);
        if (US && typeof US.value == "function") {
          UH += US.value.toString();
        }
      }
    }
    ll.set(Uk, /G\.(turntimer|mnfight)/.test(UH));
  }
  return ll.get(Uk);
}
a(lc, "canEndTurn");
function lb(i, J) {
  i.outFrames = T.turntimer < 1 ? (i.outFrames || 0) + 1 : 0;
  if (!(i.outFrames < 10) && !j.list.some(UH => JG(UH) && UH._schedBy && UH._schedBy._schedAtk === 1 && UH._schedBorn >= i.planFrame && !Jn(UH, "obj_monsterparent") && lc(UH))) {
    T.turntimer = -1;
    T.mnfight = 3;
    i.outFrames = 0;
    J.turnsOver = (J.turnsOver || 0) + 1;
  }
}
a(lb, "utTurnOver");
function lI(i, J) {
  const UU = {
    LZiAI: function (UH) {
      return UH();
    },
    JEDtu: function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    voorX: function (UH, Us) {
      return UH === Us;
    },
    FJObr: "uaAGR",
    jEnbd: function (UH, Us) {
      return UH !== Us;
    },
    WrgFJ: "IFLev",
    YpmrD: "vCrim"
  };
  let Uk = null;
  for (let UH of j.list.slice()) {
    if (!UH.destroyed && !!UU.JEDtu(Jn, UH, i)) {
      if (UU.voorX(UU.FJObr, UU.FJObr)) {
        if (!Uk) {
          if (UU.jEnbd(UU.WrgFJ, UU.YpmrD)) {
            Uk = UH;
            continue;
          } else {
            d().UTSCR.SCR_TEXT.call({}, 3);
            let Us = A.msg[0];
            if (J.isArray(j.mystring)) {
              a.mystring[0] = Us;
            }
            i.originalstring = Us;
            i0.stringpos = i1(Us).length;
          }
        }
        UU.JEDtu(lf, UH, Uk);
        UH.destroyed = true;
        j.remove(UH);
        J.folded++;
      } else {
        phoVaX.LZiAI(UU);
        Uk = null;
        return;
      }
    }
  }
}
a(lI, "fold");
function lU(i) {
  const J = {
    CtKHB: function (Uk) {
      return Uk();
    },
    aqUUn: "obj_battlecontroller",
    RZLII: "[board] host end of turn:",
    OsTvl: function (Uk, UH) {
      return Uk === UH;
    },
    OAePX: "TyYjr",
    WTKWP: function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    sacrV: "obj_heart",
    DNSaI: "locZQ",
    nyfFv: "VFrva",
    BzWpm: function (Uk, UH, Us) {
      return Uk(UH, Us);
    }
  };
  let Ur = new Map();
  for (let Uk of j.list.slice()) {
    if (J.OsTvl(J.OAePX, J.OAePX)) {
      if (Uk.destroyed || !J.WTKWP(Jn, Uk, J.sacrV) && !Jx.test(Uk.constructor.name)) {
        continue;
      }
      let UH = Uk.constructor.name;
      let Us = Ur.get(UH);
      if (!Us) {
        if (J.OsTvl(J.DNSaI, J.nyfFv)) {
          J.y = Ur.idealborder[2];
        } else {
          Ur.set(UH, Uk);
          continue;
        }
      }
      J.BzWpm(lf, Uk, Us);
      Uk.destroyed = true;
      j.remove(Uk);
      i.folded++;
    } else {
      XjLUuR.CtKHB(Uk);
      try {
        t.chapterMnendturn(j.call(a, XjLUuR.aqUUn));
      } catch (Uh) {
        i0.warn(XjLUuR.RZLII, Uh);
      }
    }
  }
}
a(lU, "foldHearts");
function lf(i, J) {
  for (let Uk of j.list) {
    if (!Uk.destroyed && (!!Jn(Uk, "obj_monsterparent") || !!Jn(Uk, "obj_bulletgenparent"))) {
      for (let UH of Object.keys(Uk)) {
        if (Uk[UH] === i) {
          Uk[UH] = J;
        }
      }
    }
  }
}
a(lf, "repoint");
function lr(i) {
  let Ur = [];
  let Uo = [];
  for (let Uh of j.list) {
    if (!Uh.destroyed && JT(Uh) && !lo(Uh)) {
      (Uh._schedPlaced ? Ur : Uo).push(Uh);
    }
  }
  if (!Uo.length) {
    return;
  }
  let UH = (US, UQ) => US.x < UQ.x + UQ.w && UQ.x < US.x + US.w && US.y < UQ.y + UQ.h && UQ.y < US.y + US.h;
  let Us = Ur.map(lk);
  for (let US of Uo) {
    {
      US._schedPlaced = 1;
      let UQ = lk(US);
      let Um = (UZ, UC) => UQ.x + UZ >= 0 && UQ.x + UZ + UQ.w <= 640 && UQ.y + UC >= 4 && UQ.y + UC + UQ.h <= 476 && !Us.some(UP => UH({
        ...UQ,
        x: UQ.x + UZ,
        y: UQ.y + UC
      }, UP));
      let UV = null;
      if (!Um(0, 0)) {
        for (let UZ of [0, -(UQ.w + 8)]) {
          {
            for (let UC = 1, UP = UQ.h + 4; UC <= 12 && !UV; UC++) {
              let Ug = (UC % 2 ? 1 : -1) * Math.ceil(UC / 2) * UP;
              if (Um(UZ, Ug)) {
                UV = [UZ, Ug];
              }
            }
            if (!UV && UZ && Um(UZ, 0)) {
              UV = [UZ, 0];
            }
            if (UV) {
              break;
            }
          }
        }
      }
      let Uw = lH(US);
      if (UV && Uw) {
        ls(US, Uw, UV[0], UV[1]);
        i.nudged++;
        UQ.x += UV[0];
        UQ.y += UV[1];
      }
      Us.push(UQ);
    }
  }
}
a(lr, "nudgeBalloons");
var lo = a(i => /^obj_blconwideslave$/.test(i.constructor.name), "isPart");
function lk(i) {
  if (i.auto_length === 1) {
    let Uh = i.balloonwidth > 0 ? i.balloonwidth + 20 : 240;
    let US = i.balloonheight > 0 ? i.balloonheight : 60;
    return {
      x: i.x - Uh,
      y: i.y - US / 2,
      w: Uh,
      h: US
    };
  }
  let Uk = i.sprite_index && q[i.sprite_index];
  let UH = Uk && Uk.w ? Uk.w * Math.abs(i.image_xscale || 1) : 100;
  let Us = Uk && Uk.h ? Uk.h * Math.abs(i.image_yscale || 1) : 50;
  return {
    x: i.x - (Uk && Uk.xoff ? Uk.xoff : 0),
    y: i.y - (Uk && Uk.yoff ? Uk.yoff : 0),
    w: Math.max(40, UH),
    h: Math.max(30, Us)
  };
}
a(lk, "balloonBox");
function lH(i) {
  if (JG(i.mywriter) && Jv(i.mywriter)) {
    return i.mywriter;
  }
  for (let Uo of j.list) {
    if (!Uo.destroyed && (Uo.myblcon === i || Uo.blcon === i)) {
      {
        let Uk = JG(Uo.blconwd) ? Uo.blconwd : Uo.mywriter;
        if (JG(Uk) && Jv(Uk)) {
          return Uk;
        } else {
          return null;
        }
      }
    }
  }
  return null;
}
a(lH, "writerOf");
function ls(i, J, UU, Uf) {
  i.x += UU;
  i.y += Uf;
  if (typeof i.remx == "number") {
    i.remx += UU;
  }
  if (typeof i.remy == "number") {
    i.remy += Uf;
  }
  if (typeof i.initwritingx == "number" && i.initwritingx >= 0) {
    i.initwritingx += UU;
  }
  if (typeof i.initwritingy == "number" && i.initwritingy >= 0) {
    i.initwritingy += Uf;
  }
  J.x += UU;
  J.y += Uf;
  if (typeof J.writingx == "number") {
    J.writingx += UU;
  }
  if (typeof J.writingy == "number") {
    J.writingy += Uf;
  }
}
a(ls, "moveBalloon");
function lh(i, J) {
  if (!!i && i.noreturn === 1 && i.reset === 1 && !!(T.turntimer <= 1) && !j.list.some(Uk => !Uk.destroyed && Jv(Uk)) && !!JX().some(Uk => {
    {
      let US = Jd(Uk);
      return US && US.partner && !j.exists(US.partner);
    }
  })) {
    i.noreturn = 0;
    if (!(i.alarm[2] > 0)) {
      i.alarm[2] = 1;
    }
    J.released++;
  }
}
a(lh, "releasePartners");
var lS = -1;
function lQ() {
  let J = v.bcStepGate;
  if (typeof J != "function" || J.__board) {
    return;
  }
  let Ur = function (Uk) {
    {
      let UQ = J(Uk);
      if (UQ && J4()) {
        lS = j.frame;
      }
      return UQ;
    }
  };
  Ur.__board = 1;
  v.bcStepGate = Ur;
}
a(lQ, "armGate");
function lm() {
  return lS >= 0 && j.frame >= lS && j.frame - lS <= 1;
}
a(lm, "controllerGated");
function lV() {
  let Uf = [];
  for (let Uo of JX()) {
    let Uk = Jd(Uo);
    if (Uk && (Uk.intro || Uk.gate)) {
      Uf.push({
        m: Uo,
        done: Uk.intro || null
      });
    }
  }
  return Uf;
}
a(lV, "gatingEnemies");
function lZ(i) {
  i._guard ||= {
    frame: 0,
    key: "",
    since: 0,
    lastTT: null,
    pinned: 0,
    ttOut: 0,
    resetFrames: 0,
    nrIdle: 0,
    emptyFrames: 0,
    prevKey: "",
    counts: {},
    guestAlive: new Map(),
    flagSnap: new Map(),
    said: new Set()
  };
  return i._guard;
}
a(lZ, "state");
function lC(i, J, UU) {
  i.counts[J] = (i.counts[J] || 0) + 1;
  if (!i.said.has(J)) {
    i.said.add(J);
    console.warn("[custom guard] " + J + (UU ? ": " + UU : ""));
  }
}
a(lC, "note");
var lP = a(i => i && !i.destroyed, "alive");
var lg = a((i, J) => typeof i.is == "function" && i.is(J), "isA");
function lx() {
  return j.list.filter(i => lP(i) && lg(i, "obj_monsterparent"));
}
a(lx, "monsters");
function lG() {
  return (T.monster[0] === 1 ? 1 : 0) + (T.monster[1] === 1 ? 1 : 0) + (T.monster[2] === 1 ? 1 : 0);
}
a(lG, "realPop");
function lv(i) {
  for (let J of j.list.slice()) {
    if (lP(J) && i(J)) {
      try {
        J.instance_destroy();
      } catch {
        lT(J);
      }
    }
  }
}
a(lv, "destroyAll");
function lT(i) {
  if (!!i && !i.destroyed) {
    i.destroyed = true;
    j.remove(i);
  }
}
a(lT, "silentRemove");
var lL = a(i => lg(i, "obj_writer") || lg(i, "obj_base_writer"), "isWriter");
var lM = a(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || lg(i, "obj_battleblcon"), "isBalloon");
function ld() {
  lv(i => lL(i) || lM(i));
}
a(ld, "clearText");
var lD = {
  dr: {
    mn: new Set([0, 1, 1.25, 1.5, 2, -1]),
    my: new Set([0, -1, 1, 2, 3, 4, 5, 7])
  },
  ut: {
    mn: new Set([0, 1, 2, 3]),
    my: new Set([0, 1, 2, 3, 4])
  }
};
var lA = new WeakMap();
function lX(i) {
  if (lA.has(i)) {
    return lA.get(i);
  }
  let J = "";
  for (let UU = i && i.prototype; UU && UU !== Object.prototype; UU = Object.getPrototypeOf(UU)) {
    for (let Uf of Object.getOwnPropertyNames(UU)) {
      let Ur = Object.getOwnPropertyDescriptor(UU, Uf);
      if (Uf === "constructor" && Ur && typeof Ur.value == "function") {
        J += R(Ur.value);
      }
    }
  }
  lA.set(i, J);
  return J;
}
a(lX, "classSource");
var lq = a(i => i < 0 ? "-(" + -i + ")" : String(i), "literal");
function lt(i) {
  let J = [];
  if (!lD[i].mn.has(T.mnfight)) {
    J.push("G.mnfight = " + lq(T.mnfight) + ";");
  }
  if (!lD[i].my.has(T.myfight)) {
    J.push("G.myfight = " + lq(T.myfight) + ";");
  }
  if (!J.length) {
    return [];
  }
  let UU = new Set(lx());
  for (let Uf = 0; Uf < T.monster.length; Uf++) {
    let Ur = T.monsterinstance[Uf];
    if (lP(Ur) && typeof Ur == "object") {
      UU.add(Ur);
    }
  }
  return [...UU].filter(Uo => {
    let Uk = lX(Uo.constructor);
    return J.some(UH => Uk.includes(UH));
  });
}
a(lt, "phaseOwners");
function lW(i, J, UU, Uf = "retired an enemy that kept the battle in its own state") {
  let Ur = J.myself;
  if (typeof Ur == "number" && T.monster[Ur] === 1) {
    Jf()[Ur] = 0;
  }
  J._quarantined = 1;
  try {
    J.instance_destroy();
  } catch {
    lT(J);
  }
  lC(i, Uf, J.constructor.name + " (" + UU + ")");
}
a(lW, "retire");
function lj(J, UU) {
  let Uf = !J.unknownResets && J.since >= 300 && J.frame - J.since < 300 && lt(UU).length < lx().filter(Uk => T.monster[Uk.myself] === 1).length;
  let Ur = J.unknownResets ? 300 : Uf ? 300 : 1200;
  if (J.since < Ur) {
    return false;
  }
  let Uo = T.mnfight + "/" + T.myfight + " for " + J.since + " frames";
  if (J.unknownResets) {
    for (let Uk of lt(UU)) {
      lW(J, Uk, Uo);
    }
  }
  J.unknownResets = (J.unknownResets || 0) + 1;
  return true;
}
a(lj, "unknownPhase");
var la = ["beginStep", "step", "endStep", "alarmEvent"];
function lR(i) {
  if (!i._guardWrapped || !la.some(J => Object.prototype.hasOwnProperty.call(i, J))) {
    if (!i._guardWrapped) {
      i._guardFailFrames = 0;
      i._guardLastFail = -1;
    }
    i._guardWrapped = 1;
    for (let J of la) {
      let UU = i[J];
      if (typeof UU != "function") {
        continue;
      }
      let Uf = Object.prototype.hasOwnProperty.call(i, J);
      let Ur = Object.getPrototypeOf(i);
      i[J] = function (...Uo) {
        try {
          return (Uf ? UU : Ur[J]).apply(this, Uo);
        } catch (Uk) {
          if (i._guardLastFail !== j.frame) {
            i._guardLastFail = j.frame;
            i._guardFailFrames++;
          }
          throw Uk;
        }
      };
    }
  }
}
a(lR, "watchGuest");
function lK(i) {
  for (let J of j.list) {
    if (!lP(J) || !J._customGuest || (lR(J), J._guardFailFrames < 30)) {
      continue;
    }
    let UU = J.myself;
    if (typeof UU == "number" && UU >= 4 && T.monster[UU] === 1) {
      Jf()[UU] = 0;
    }
    J._quarantined = 1;
    try {
      J.instance_destroy();
    } catch {
      lT(J);
    }
    lC(i, "quarantined a guest", J.constructor.name + " threw on " + J._guardFailFrames + " frames");
  }
}
a(lK, "quarantine");
function ly(i) {
  i.ghost = i.ghost || [0, 0, 0];
  for (let J = 0; J < 3; J++) {
    let UU = T.monsterinstance && T.monsterinstance[J];
    let Uf = T.monster[J] === 1 && UU && typeof UU == "object" && UU.destroyed;
    i.ghost[J] = Uf ? i.ghost[J] + 1 : 0;
    if (i.ghost[J] >= 30) {
      Jf()[J] = 0;
      i.ghost[J] = 0;
      lC(i, "freed a slot whose enemy is gone", "slot " + J + " " + UU.constructor.name);
    }
  }
}
a(ly, "ghostSlots");
function lu() {
  for (let i = 4; i < T.monster.length; i++) {
    if (T.monster[i] !== 1) {
      continue;
    }
    let J = T.monsterinstance[i];
    if (lP(J) && J.myself === i && !J._quarantined) {
      return i;
    }
  }
  return -1;
}
a(lu, "nextGuest");
function lB(i, J) {
  Ji(i, J);
  let UU = T.monsterinstance[i];
  delete UU._customGuest;
  UU._promotedFrom = J;
  Jf()[J] = 0;
  return UU;
}
a(lB, "swapIntoSlot");
function lz(J, UU) {
  let Uf = 0;
  for (let Ur = 0; Ur < 3; Ur++) {
    if (T.monster[Ur] === 1) {
      continue;
    }
    let Uo = lu();
    if (Uo < 0) {
      break;
    }
    let Uk = lB(Ur, Uo);
    Uf++;
    lC(J, "promoted a guest into a real slot", Uk.constructor.name + " " + Uo + " -> " + Ur + (UU ? " (after the win was declared)" : ""));
  }
  return Uf;
}
a(lz, "promote");
function lp(i) {
  if (Array.isArray(T.flag)) {
    for (let J = 4; J < T.monster.length; J++) {
      let UU = i.guestAlive.get(J);
      let Uf = T.monster[J] === 1;
      if (Uf && !i.flagSnap.has(J)) {
        i.flagSnap.set(J, T.flag[51 + J]);
      }
      if (UU && !Uf && i.flagSnap.has(J)) {
        T.flag[51 + J] = i.flagSnap.get(J);
      }
      i.guestAlive.set(J, Uf);
    }
  }
}
a(lp, "guestFlags");
function le(i) {
  let J = i.x - 320;
  let UU = i.y - 240;
  if (Math.abs(J) < 448 && Math.abs(UU) < 368) {
    return false;
  }
  let Uf = i.gravity ? Math.cos(i.gravity_direction * Math.PI / 180) * i.gravity : 0;
  let Ur = i.gravity ? -Math.sin(i.gravity_direction * Math.PI / 180) * i.gravity : 0;
  return i.hspeed * J + i.vspeed * UU > 0 && Uf * J + Ur * UU >= 0;
}
a(le, "leaving");
function lF(J, UU) {
  let Uf = UU === "ut" ? "blt_parent" : "obj_bulletparent";
  let Ur = [];
  for (let Uk of j.list) {
    if (!Uk.destroyed && lg(Uk, Uf)) {
      if (Uk._capSeen === undefined) {
        Uk._capSeen = J.frame;
      }
      Ur.push(Uk);
    }
  }
  if (Ur.length <= 400) {
    return;
  }
  let Uo = 0;
  for (let UH of Ur) {
    if (Ur.length - Uo <= 400) {
      break;
    }
    if (le(UH)) {
      lT(UH);
      Uo++;
    }
  }
  if (Ur.length - Uo > 1500) {
    let Us = j.first("obj_heart");
    let Uh = Us ? Us.x + 8 : 320;
    let US = Us ? Us.y + 8 : 240;
    let UQ = Ur.filter(Um => !Um.destroyed && J.frame - Um._capSeen >= 30).map(Um => [Um, Math.hypot(Um.x - Uh, Um.y - US)]).filter(Um => Um[1] > 160).sort((Um, UV) => UV[1] - Um[1]);
    for (let [Um] of UQ) {
      if (Ur.length - Uo <= 1500) {
        break;
      }
      lT(Um);
      Uo++;
    }
  }
  if (Uo) {
    lC(J, "capped bullets", Ur.length + " alive, " + Uo + " removed");
  }
}
a(lF, "capBullets");
function lE() {
  return j.first("obj_battlecontroller");
}
a(lE, "BC");
function lY() {
  let i = T.mnfight === 0 && T.myfight === 0;
  for (let J of j.list) {
    if (!!lP(J) && J.attacked === 0 && !!lg(J, "obj_monsterparent")) {
      if (J.rtimer === undefined || typeof J.rtimer == "number" && Number.isNaN(J.rtimer) || i && J.talked === 0 && typeof J.rtimer == "number" && J.rtimer !== 0) {
        J.rtimer = 0;
      }
    }
  }
}
a(lY, "drRtimer");
function ce(i, J) {
  if (i.frame - (i.forcedAt || -999) < 45) {
    return;
  }
  let UU = lE();
  ld();
  if (i.forceCount > 0) {
    j.with("obj_bulletparent", Uf => Uf.instance_destroy());
    j.with("obj_bulletgenparent", Uf => Uf.instance_destroy());
    j.with("obj_darkener", Uf => {
      Uf.darken = 0;
    });
    j.with("obj_heart", Uf => {
      D(Uf.x, Uf.y, G);
      Uf.instance_destroy();
    });
    if (UU) {
      UU.reset = 0;
      UU.noreturn = 0;
      UU.timeron = 1;
      UU.alarm[2] = -1;
    }
    P();
    lC(i, "ended a stuck enemy turn (directly)", J);
  } else {
    T.mnfight = 2;
    T.turntimer = 0;
    if (UU) {
      UU.reset = 0;
      UU.noreturn = 0;
      UU.timeron = 1;
    }
    lC(i, "ended a stuck enemy turn", J);
  }
  i.forcedAt = i.frame;
  i.forceCount = (i.forceCount || 0) + 1;
  i.pinned = 0;
  i.resetFrames = 0;
  i.nrIdle = 0;
}
a(ce, "drEndEnemyTurn");
var bn = 30;
function bt(i) {
  let J = T.turntimer;
  if (i.lastTT === null || !(J >= i.lastTT) || J >= i.lastTT + bn) {
    i.lastTT = J;
    i.pinned = 0;
  } else {
    i.pinned++;
  }
}
a(bt, "trackTimer");
function In(i, J) {
  bt(i);
  if (i.pinned === 150) {
    let UU = [];
    for (let Uf of lx()) {
      if (Uf.attacked === 0 && T.monster[Uf.myself] === 1) {
        Uf.attacked = 1;
        UU.push(Uf.constructor.name);
      }
    }
    if (UU.length) {
      lC(i, "enemies that never attacked gave up their attack", UU.join(", ") + " at turntimer " + T.turntimer);
    }
  }
  if (i.pinned >= 600) {
    ce(i, "turntimer held at " + T.turntimer + " for " + i.pinned + " frames");
    return;
  }
  if (J) {
    if (J.reset === 1) {
      i.resetFrames++;
      if (J.noreturn === 1) {
        let Ur = j.list.some(Uo => lP(Uo) && lL(Uo));
        i.nrIdle = Ur ? 0 : i.nrIdle + 1;
        if (i.nrIdle >= 240 || i.resetFrames >= 900) {
          if (i.resetFrames >= 900) {
            ld();
          }
          J.noreturn = 0;
          J.alarm[2] = 1;
          i.nrIdle = 0;
          i.resetFrames = 0;
          lC(i, "released an orphaned noreturn", "nobody left to hand the turn back");
        }
      } else if (!(J.alarm[2] > 0) && i.resetFrames >= 60) {
        J.alarm[2] = 1;
        i.resetFrames = 0;
        lC(i, "re-armed the end-of-turn alarm");
      }
    } else {
      i.resetFrames = 0;
      i.nrIdle = 0;
    }
    if (i.since >= 2700) {
      ce(i, "bullet phase " + i.since + " frames");
    }
  }
}
a(In, "drBulletPhase");
function It(i) {
  let J = 0;
  for (let Uf of j.list.slice()) {
    if (!!lP(Uf) && (!!lg(Uf, "obj_bulletparent") || !!lg(Uf, "obj_bulletgenparent"))) {
      try {
        Uf.instance_destroy();
      } catch {
        lT(Uf);
      }
      J++;
    }
  }
  let UU = i.prevMn === 1 || i.prevMn === 1.5 || i.prevMn === 2;
  if (i.since === 0 && UU) {
    for (let Ur of j.list.slice()) {
      if (!!lP(Ur) && !!lg(Ur, "obj_battleblcon")) {
        if (lP(Ur.mywriter)) {
          try {
            Ur.mywriter.instance_destroy();
          } catch {
            lT(Ur.mywriter);
          }
        }
        try {
          Ur.instance_destroy();
        } catch {
          lT(Ur);
        }
        J++;
      }
    }
  }
  if (i.since === 0 && UU) {
    j.with("obj_darkener", Uo => {
      Uo.darken = 0;
    });
    j.with("obj_heart", Uo => {
      D(Uo.x, Uo.y, G);
      Uo.instance_destroy();
    });
  }
  if (J) {
    lC(i, "cleared an enemy turn left on the menu", J + " bullets/generators/balloons");
  }
}
a(It, "drMenuCleanup");
function Ie(i) {
  if (!lm()) {
    i.gated = 0;
    i.gatedQuiet = 0;
    return;
  }
  i.gated = (i.gated || 0) + 1;
  let J = lE();
  if (i.gated === 15 && J && lP(J.battlewriter) && T.myfight === 0) {
    J.battlewriter.instance_destroy();
    lC(i, "made way for an intro");
  }
  i.gatedQuiet = j.list.some(UU => lP(UU) && lL(UU)) ? 0 : (i.gatedQuiet || 0) + 1;
  if (i.gatedQuiet === 150) {
    let UU = [];
    for (let Uf of lV()) {
      if (Uf.done) {
        Object.assign(Uf.m, Uf.done);
        UU.push(Uf.m.constructor.name);
      }
    }
    if (UU.length && T.mnfight === 0 && T.myfight === 0 && Array.isArray(T.char) && !(T.charturn < T.char.length)) {
      T.charturn = 0;
    }
    lC(i, "ended an intro the battle controller was waiting for", UU.join(", ") || "no known intro");
  }
  if (i.gatedQuiet >= 300) {
    for (let Ur of lV()) {
      lW(i, Ur.m, "the controller waited " + i.gated + " frames for its intro");
    }
    i.gated = 0;
    i.gatedQuiet = 0;
  }
}
a(Ie, "drFrozenMenu");
function U7(J) {
  let UU = lE();
  lY();
  let Uf = T.mnfight;
  let Ur = T.myfight;
  if (UU && UU.victory === 1 && UU.victoried === 0 && (lG() > 0 || lu() >= 0)) {
    lz(J, true);
    if (Jr.length) {
      lC(J, "refused a win that would have defeated enemies at full health", Jr.map(Uo => "slot " + Uo.slot + " by " + Uo.by).join(", "));
      Jr.length = 0;
    }
    if (lG() > 0) {
      UU.victory = 0;
      if (J.prevMn === 2) {
        P();
      } else {
        T.mnfight = 1;
        T.myfight = -1;
      }
      lC(J, "cancelled a win with guests still standing");
    }
    return;
  }
  if (Uf !== -1 || Ur !== 7) {
    Ie(J);
    if (Uf === 0 && Ur === 0) {
      It(J);
      if (lG() === 0 && lu() < 0) {
        if (++J.emptyFrames >= 30) {
          J.emptyFrames = 0;
          g();
          lC(J, "won a board with no enemy left");
        }
      } else {
        J.emptyFrames = 0;
      }
      return;
    }
    J.emptyFrames = 0;
    if (Uf === 2) {
      In(J, UU);
      return;
    }
    J.pinned = 0;
    J.lastTT = null;
    if (Uf === 1 || Uf === 1.25 || Uf === 1.5) {
      if (J.since <= 1) {
        J.quietTalk = 0;
      }
      J.quietTalk = j.list.some(Uo => lP(Uo) && /writer|blcon|balloon|choicer|^obj_face/i.test(Uo.constructor.name)) ? 0 : (J.quietTalk || 0) + 1;
      if (Uf === 1 && J.quietTalk >= 240) {
        J.quietTalk = 0;
        T.mnfight = 2;
        lC(J, "moved on a talk phase with nothing to read");
        return;
      }
      if (J.since === 600) {
        s();
        lC(J, "pressed Z at a talk phase that did not end");
      }
      if (J.since >= 900) {
        ce(J, "talk phase " + J.since + " frames");
      }
      return;
    }
    if (Ur === 3) {
      U9();
    }
    if (Ur === 3 && J.since >= 150 && J.since % 30 === 0) {
      let Uo = lx().filter(UH => UH.acting > 0 || UH.actingsus > 0 || UH.actingral > 0 || UH.actingnoe > 0).some(UH => (UH.actcon || 0) !== 0 || (UH.actconsus || 0) !== 0 || (UH.actconral || 0) !== 0 || (UH.actconnoe || 0) !== 0);
      let Uk = j.list.some(UH => lP(UH) && (lL(UH) || lM(UH)));
      if (!Uo && !Uk) {
        Z();
        lC(J, "skipped an ACT that never started");
        return;
      }
    }
    if (Ur === 3 || Ur === 4) {
      if (J.since === 600) {
        s();
        lC(J, "advanced the text of an ACT/spell phase that did not end");
      }
      if (J.since >= 750) {
        Z();
        J.since = 0;
        lC(J, "left a stuck ACT/spell phase");
      }
      return;
    }
    if (Ur === 1 && !j.exists("obj_attackpress")) {
      if (J.since >= 600) {
        T.mnfight = 1;
        T.myfight = -1;
        lC(J, "left a stuck attack phase");
      }
      return;
    }
    if (lj(J, "dr")) {
      J.forcedAt = -999;
      ce(J, "phase " + Uf + "/" + Ur + " for " + J.since + " frames");
      J.since = 0;
    }
  }
}
a(U7, "drWatch");
var U8 = [["sus", "Susie"], ["ral", "Ralsei"], ["noe", "Noelle"]];
function U9() {
  if (v.scr_nextact) {
    for (let i of lx()) {
      if (!(i._ch < 2)) {
        continue;
      }
      if (i._memberAct) {
        if (!j.list.some(UU => lP(UU) && lL(UU))) {
          i._memberAct = 0;
          v.scr_nextact.call({});
        }
        continue;
      }
      let J = U8.find(([UU]) => i["acting" + UU] === 1 && i["actcon" + UU] === 1);
      if (J) {
        i["actcon" + J[0]] = 0;
        i._memberAct = 1;
        n(i.myself, 50);
        T.msg[0] = "* " + J[1] + " tried to help!/%";
        x();
      }
    }
  }
}
a(U9, "drMemberActs");
function Ui(i) {
  let J = T.mnfight;
  let UU = T.myfight;
  let Uf = j.first("obj_battlecontroller");
  if (Uf && Uf.won === 1 && !i.utWonSeen && lG() === 0 && lu() >= 0 && (lz(i, true), lG() > 0)) {
    Uf.won = 0;
    T.xp -= T.xpreward[3] || 0;
    T.gold -= T.goldreward[3] || 0;
    lv(lL);
    T.myfight = 0;
    T.mnfight = 1;
    lC(i, "cancelled a win with guests still standing");
    return;
  }
  if (Uf && Uf.won === 1) {
    i.utWonSeen = true;
    return;
  }
  if (J !== 0 || UU !== 0) {
    if (J === 1) {
      if (i.since === 600) {
        s();
        lC(i, "pressed Z at a talk phase that did not end");
      }
      if (i.since >= 900) {
        lv(lM);
        i.since = 0;
        if ((i.talkForces = (i.talkForces || 0) + 1) === 1) {
          T.mnfight = 2;
          lC(i, "moved a stuck talk phase on");
        } else {
          T.turntimer = -1;
          T.mnfight = 3;
          lC(i, "ended a talk phase that kept coming back");
        }
      }
      return;
    }
    if (J === 2) {
      i.ttOut = T.turntimer < 1 ? i.ttOut + 1 : 0;
      bt(i);
      if (i.ttOut >= 90 || i.pinned >= 600 || i.since >= 2700) {
        let Ur = i.ttOut >= 90 ? "turntimer out, no generator ended it" : i.pinned >= 600 ? "turntimer held at " + T.turntimer : "bullet phase " + i.since + " frames";
        T.turntimer = -1;
        T.mnfight = 3;
        i.ttOut = 0;
        i.pinned = 0;
        lC(i, "ended a stuck enemy turn", Ur);
      }
      return;
    }
    i.pinned = 0;
    i.lastTT = null;
    i.ttOut = 0;
    if (J === 3) {
      if (i.since === 300) {
        j.with("obj_lborder", Uo => {
          Uo.x = T.idealborder[0];
        });
        j.with("obj_rborder", Uo => {
          Uo.x = T.idealborder[1];
        });
        j.with("obj_uborder", Uo => {
          Uo.y = T.idealborder[2];
        });
        j.with("obj_dborder", Uo => {
          Uo.y = T.idealborder[3];
        });
        lC(i, "snapped the box back to the menu");
      }
      if (i.since >= 600) {
        T.bmenuno = 0;
        T.myfight = 0;
        T.mnfight = 0;
        T.turn = (T.turn || 0) + 1;
        T.mercyuse = -1;
        lC(i, "returned to the menu");
      }
      return;
    }
    if (J === 0 && UU >= 1 && UU <= 4) {
      if (i.since === 600) {
        s();
        lC(i, "advanced the text of an ACT/FIGHT phase that did not end");
      }
      if (i.since >= 750) {
        j.with("obj_base_writer", Uo => {
          Uo.halt = 3;
        });
        T.myfight = 0;
        T.mnfight = 1;
        lC(i, "left a stuck ACT/FIGHT phase");
      }
      return;
    }
    if (lj(i, "ut")) {
      lv(Uo => lL(Uo) || lM(Uo));
      T.turntimer = -1;
      T.myfight = 0;
      T.mnfight = 3;
      i.since = 0;
      lC(i, "reset a phase nobody left", J + "/" + UU + " for " + i.since + " frames");
    }
  }
}
a(Ui, "utWatch");
function UJ(J) {
  let UU = j.first("obj_battlecontroller");
  if (!UU || UU.won === 1 || UU.runaway === 1 || J.utWonSeen || (J.exitUndos || 0) >= T.monster.length) {
    return;
  }
  let Uf = /^(obj_battlecontroller|obj_heart|obj_battler|OBJ_|obj_base_writer|blt_)/;
  let Ur = [...Array(T.monster.length).keys()].filter(Uk => T.monster[Uk] === 1 && lP(T.monsterinstance[Uk])).map(Uk => T.monsterinstance[Uk]).filter(Uk => Uk._schedLeave === 1);
  for (let Uk of j.list) {
    if (Uk._schedLeave === 1) {
      Uk._schedLeave = undefined;
    }
  }
  if (!Ur.length) {
    for (let UH = 0; UH < T.monster.length; UH++) {
      let Us = T.monsterinstance[UH];
      if (T.monster[UH] === 1 && lP(Us) && typeof Us == "object" && T.monsterhp[UH] <= 0) {
        Ur.push(Us);
      }
    }
  }
  if (!Ur.length) {
    let Uh = new Set([...Array(T.monster.length).keys()].filter(UQ => T.monster[UQ] === 1).map(UQ => T.monsterinstance[UQ]));
    let US = j.list.find(UQ => lP(UQ) && Uh.has(UQ) && !Uf.test(UQ.constructor.name) && /room_goto(_next)?\(/.test(lX(UQ.constructor)));
    if (US) {
      Ur = [US];
    }
  }
  let Uo = Ur.length ? [] : j.list.filter(UQ => lP(UQ) && UQ._schedBy && !lP(UQ._schedBy) && /room_goto(_next)?\(/.test(lX(UQ.constructor)));
  if (!![...Array(T.monster.length).keys()].some(UQ => T.monster[UQ] === 1 && lP(T.monsterinstance[UQ]) && !Ur.includes(T.monsterinstance[UQ])) && (!!Ur.length || !!Uo.length)) {
    J.exitUndos = (J.exitUndos || 0) + 1;
    for (let UQ of Uo) {
      let Um = j.list.slice(j.list.indexOf(UQ) + 1);
      for (let UV of Um) {
        if (lP(UV) && typeof UV.depth == "number" && UV.depth <= -1000 && !lg(UV, "obj_monsterparent") && !lL(UV)) {
          lT(UV);
        }
      }
      lT(UQ);
    }
    for (let Uw of Ur) {
      lW(J, Uw, "it ended the battle with enemies still standing", "let one enemy leave by its own exit");
    }
    T.battleover = null;
    lv(UZ => lL(UZ) || lM(UZ));
    T.turntimer = -1;
    T.myfight = 0;
    T.mnfight = 3;
    lz(J, true);
    lC(J, "let one enemy leave by its own exit", "the others stay");
  }
}
a(UJ, "utEarlyExit");
function Ul(J) {
  if (T.mnfight !== 0 || T.myfight !== 0 || T.bmenuno !== 1 && T.bmenuno !== 2 || !Array.isArray(T.bmenucoord)) {
    J.utCur = null;
    return;
  }
  let UU = T.bmenucoord[1];
  let Uf = J.utCur;
  J.utCur = UU;
  if (Uf == null || Jl() === 0) {
    return;
  }
  let Ur = [0, 1, 2].filter(US => T.monster[US] === 1);
  if (!Ur.length) {
    return;
  }
  let Uo = Ur[0];
  let Uk = Ur[Ur.length - 1];
  let UH = 0;
  if (t.pressed.down && Uf === Uk && UU === Uo) {
    UH = 1;
  } else if (t.pressed.up && Uf === Uo && UU === Uk) {
    UH = -1;
  }
  if (!UH || !Jc(UH)) {
    return;
  }
  let Us = [0, 1, 2].filter(US => T.monster[US] === 1);
  T.bmenucoord[1] = UH > 0 ? Us[Us.length - 1] : Us[0];
  J.utCur = T.bmenucoord[1];
  let Uh = j.list.find(US => lP(US) && US.constructor.name === "OBJ_INSTAWRITER");
  if (Uh) {
    try {
      V().UTSCR.SCR_TEXT.call({}, 3);
      let US = T.msg[0];
      if (Array.isArray(Uh.mystring)) {
        Uh.mystring[0] = US;
      }
      Uh.originalstring = US;
      Uh.stringpos = String(US).length;
    } catch {}
  }
  lC(J, "scrolled the target list");
}
a(Ul, "utMenuScroll");
var Uc = /^OBJ_(WRITER|INSTAWRITER|NOMSCWRITER)$/;
function Ub() {
  let i = null;
  for (let UU of j.list) {
    if (!UU.destroyed && !!Uc.test(UU.constructor.name) && !(Math.abs(UU.x - 32) > 12) && !(Math.abs(UU.y - 250) > 12) && (!!UU.visible || !!UU._boxParked)) {
      (i ||= []).push(UU);
    }
  }
  if (!i) {
    return;
  }
  let J = i[0];
  for (let Uf of i) {
    if ((Uf._ord || 0) > (J._ord || 0)) {
      J = Uf;
    }
  }
  for (let Ur of i) {
    if (Ur === J) {
      if (Ur._boxParked) {
        Ur._boxParked = 0;
        Ur.visible = true;
      }
    } else if (!Ur._boxParked) {
      Ur._boxParked = 1;
      Ur.visible = false;
    }
  }
}
a(Ub, "utBoxWriters");
function UI(i) {
  if (!i || !i.customEncounter || (T.battleover === "ut-win" && i.customEngine === "ut" && !T.inGameOver && UJ(lZ(i)), T.battleover || T.inGameOver) || !Array.isArray(T.monster) && typeof T.monster != "object") {
    return;
  }
  let J = lZ(i);
  J.frame++;
  let UU = i.customEngine === "ut" ? "ut" : "dr";
  let Uf = T.mnfight + "/" + T.myfight;
  if (Uf !== J.key) {
    J.prevMn = J.curMn;
    J.key = Uf;
    J.since = 0;
  } else {
    J.since++;
  }
  if (Uf === "0/0") {
    J.forceCount = 0;
    J.talkForces = 0;
  }
  J.curMn = T.mnfight;
  lK(J);
  ly(J);
  if (UU === "dr") {
    lp(J);
  }
  if (UU === "dr") {
    let Ur = lE();
    if (!Ur || Ur.victory !== 1 && Ur.victoried !== 1) {
      lz(J, false);
    }
  } else {
    let Uo = j.first("obj_battlecontroller");
    if (!Uo || Uo.won !== 1) {
      lz(J, false);
    }
  }
  li(i, UU);
  if (T.mnfight === 2) {
    lF(J, UU);
  }
  if (UU === "ut") {
    Ul(J);
    Ub();
  }
  if (UU === "dr") {
    U7(J);
  } else {
    Ui(J);
  }
  if (Jr.length) {
    lC(J, "refused a collateral defeat", Jr.map(Uk => "slot " + Uk.slot + " by " + Uk.by).join(", "));
    Jr.length = 0;
  }
}
a(UI, "customWatchdog");
export { ih as a, iZ as b, iC as c, ix as d, iT as e, UI as f, iX as g, iy as h, J2 as i, J3 as j };
