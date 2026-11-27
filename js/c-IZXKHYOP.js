import { h as H } from './c-RNLQZIER.js';
import { g as s } from './c-BERKZCGM.js';
import { g as h, i as S } from './c-H5LU7UHS.js';
import { e as Q } from './c-AYDQ2WI5.js';
import { i as m, o as V } from './c-KLECZKO5.js';
import { G as Z, H as P, I as g } from './c-QFDZPUX2.js';
import { g as x } from './c-3ELH3LBH.js';
import { o as G } from './c-MYK6C3LF.js';
import { M as n, P as v, g as T } from './c-ZQQWH6UG.js';
import { G as L, H as M, Hb as d, Ib as D, L as A, M as X, N as q, X as t, Xb as N, xb as j } from './c-PBMEVLU6.js';
import { a, h as R, l as K } from './c-XSSGDLV7.js';
K(), K(), K();
var u = /^obj_(heart|yheart|purpleheart|greenheart|blueheart|heart_\w+|soul\w*|battlecontroller|tensionbar\w*)$/i,
  z = null,
  e = null,
  F = null,
  E = null,
  Y = false,
  O = j.first,
  i0 = null;
function i1() {
  const UU = {
    'czlAx': function (Ur, Uo) {
      return Ur < Uo;
    },
    'HdtIz': function (Ur, Uo) {
      return Ur != Uo;
    },
    'OEPTR': "function",
    'wNxgb': function (Ur) {
      return Ur();
    },
    'FyOrS': function (Ur, Uo) {
      return Ur === Uo;
    },
    'hwyiw': "Tntex",
    'MsaAs': "rbkAS",
    'ZTELE': "obj_battlecontroller",
    'Rpjvm': "[board] host end of turn:"
  };
  if (i0 = null, !(e.host < 5 || typeof v.chapterMnendturn != "function")) {
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
  const J = {
    'TNzVY': function (Us, Uh) {
      return Us > Uh;
    },
    'BwMCV': function (Us, Uh) {
      return Us + Uh;
    },
    'lHbbB': function (Us, Uh) {
      return Us > Uh;
    },
    'MtYif': function (Us, Uh) {
      return Us - Uh;
    },
    'dkxVn': function (Us, Uh) {
      return Us / Uh;
    },
    'bxAkB': function (Us, Uh) {
      return Us !== Uh;
    },
    'epIdx': function (Us, Uh) {
      return Us === Uh;
    },
    'WIllJ': function (Us) {
      return Us();
    },
    'SsafQ': function (Us, Uh) {
      return Us !== Uh;
    },
    'YKcNq': function (Us, Uh) {
      return Us < Uh;
    },
    'kngFt': function (Us, Uh) {
      return Us !== Uh;
    },
    'LIQBl': "kfEHF",
    'mdxeX': "mjTPM",
    'cReXB': function (Us) {
      return Us();
    },
    'AMmvw': function (Us, Uh) {
      return Us !== Uh;
    },
    'dShQt': function (Us, Uh) {
      return Us !== Uh;
    },
    'PTWUE': "Yonug",
    'VZmHq': "iJOMr",
    'iscyZ': function (Us) {
      return Us();
    },
    'IamOV': function (Us, Uh) {
      return Us(Uh);
    }
  };
  i0 !== null && i0 !== 0 && T.mnfight === 0 && i1();
  let Uf = i && i._ch !== void 0 ? i : null;
  if (i0 = Uf !== null && Uf._ch < e.host ? T.mnfight : null, E = Uf ? Uf._own : null, Uf === null) {
    Y && i3();
    return;
  }
  let Ur = Y ? e.hostEnc : T.encounterno,
    Uo = Uf._enc !== void 0 ? Uf._enc : Ur;
  if (Uf._ch === e.host && Uo === Ur) {
    Y && i3();
    return;
  }
  Y || (e.hostEnc = T.encounterno, Y = true), L !== Uf._ch && M(Uf._ch), T.chapter = Uf._ch, T.encounterno = Uo;
}
a(i2, "apply");
function i3() {
  const i = {
    'yhYzI': function (Ur, Uo) {
      return Ur !== Uo;
    },
    'JLRSD': function (Ur, Uo) {
      return Ur(Uo);
    }
  };
  Y = false, L !== e.host && M(e.host), T.chapter = e.host, T.encounterno = e.hostEnc;
}
a(i3, "toHost");
function i4(i) {
  const J = {};
  J.gXaou = function (Uk, UH) {
    return Uk !== UH;
  };
  J.yMQrC = function (Uk, UH) {
    return Uk == UH;
  }, J.XgiVS = "string", J.XghNi = function (Uk, UH) {
    return Uk == UH;
  }, J.ZgbYr = "function", J.VAiiC = function (Uk, UH) {
    return Uk === UH;
  };
  const Uo = J;
  if (Uo.gXaou(E, null) && !E.destroyed) {
    let Uk = Uo.yMQrC(typeof i, Uo.XgiVS) ? i : Uo.XghNi(typeof i, Uo.ZgbYr) ? i.kindName || i.name : null;
    if (Uo.gXaou(Uk, null)) {
      if (Uo.VAiiC(E.constructor.name, Uk)) return E;
      let UH = E._up;
      if (UH && !UH.destroyed && Uo.VAiiC(UH.constructor.name, Uk)) return UH;
    }
  }
  return O.call(j, i);
}
a(i4, "first");
function i5(i, J, UU) {
  const Uf = {
    'EnrUg': function (UQ, Um) {
      return UQ + Um;
    },
    'VUJli': function (UQ, Um) {
      return UQ === Um;
    },
    'pCLlc': function (UQ, Um) {
      return UQ(Um);
    },
    'eiFwK': function (UQ, Um) {
      return UQ === Um;
    },
    'Hufps': function (UQ, Um) {
      return UQ in Um;
    },
    'lhyJw': function (UQ, Um) {
      return UQ + Um;
    },
    'tQIiy': "@ch",
    'emaHe': function (UQ, Um) {
      return UQ + Um;
    },
    'HNeeT': function (UQ, Um) {
      return UQ + Um;
    },
    'ghVfh': function (UQ, Um) {
      return UQ == Um;
    },
    'aaasW': "object",
    'vHGdG': "function",
    'LZRYV': "obj_battlecontroller",
    'oMapV': function (UQ) {
      return UQ();
    },
    'BDZlE': function (UQ, Um) {
      return UQ == Um;
    },
    'brTYk': "obj_monsterparent",
    'ydXaJ': function (UQ, Um) {
      return UQ !== Um;
    },
    'RaxcC': function (UQ, Um) {
      return UQ && Um;
    },
    'VVkkl': function (UQ, Um) {
      return UQ >= Um;
    },
    'CcAeJ': "fjXNI",
    'pGcKm': function (UQ, Um, UV, Uw) {
      return UQ(Um, UV, Uw);
    },
    'Yybrt': "obj_heroparent"
  };
  let Ur = UU && typeof UU == "object" && typeof UU.is == "function" ? UU : J,
    Uo = i.constructor.name;
  if (!e.confirmed) {
    Uo === "obj_battlecontroller" && i6();
    return;
  }
  let UH = typeof i.is == "function" && i.is("obj_monsterparent");
  if (i._ch !== void 0) {
    i._own === void 0 && (i._own = i), ii(i);
    return;
  }
  let Us = Ur && Ur._ch !== void 0;
  if (UH && !Us) {
    let UQ = Object.getPrototypeOf(i),
      Um = e.real.findIndex(UV => UV.cls && UV.cls.prototype === UQ);
    if (Um >= 0) {
      let UV = e.real.splice(Um, 1)[0];
      iJ(i, UV.ch, UV.enc);
    }
    return;
  }
  !Us || u.test(Uo) || typeof i.is == "function" && i.is("obj_heroparent") || (i._ch = Ur._ch, i._enc = Ur._enc, UH ? (i._own = i, i._up = Ur._own || null) : i._own = Ur._own || null, ii(i));
}
a(i5, "onCreate");
function i6() {
  const i = {
    'JvkhY': function (Uk, UH) {
      return Uk === UH;
    },
    'lsUGb': function (Uk, UH) {
      return Uk !== UH;
    },
    'XqXSB': "YGKWU",
    'ykGsN': function (Uk) {
      return Uk();
    },
    'TzpVV': "ibkxy",
    'xwcVn': "JAYRE",
    'kaFOr': "[board] chapter globals:",
    'LsAlj': function (Uk, UH) {
      return Uk(UH);
    },
    'wqdIN': function (Uk, UH) {
      return Uk > UH;
    }
  };
  let UU = z;
  if (!(UU && T.encounterno === UU.enc && Array.isArray(T.battlemsg) && T.battlemsg[0] === UU.msg && UU.real.every((Uk, UH) => T.monsterinstancetype && T.monsterinstancetype[UH] === Uk.cls))) {
    iU(), z = null;
    return;
  }
  if (e.confirmed = true, e.hostEnc = T.encounterno, e.real = UU.real.slice(), UU.prime) try {
    UU.prime();
  } catch (Us) {
    console.warn("[board] chapter globals:", Us);
  }
  let Uo = UU.chapters.filter(Uh => typeof Uh == "number");
  X(Uo.length > 1 ? Uo.sort((Uh, US) => US - Uh) : null);
}
a(i6, "confirm");
var i7 = new Map();
function i8(i, J) {
  const UU = {
    'VitLF': function (Us, Uh) {
      return Us + Uh;
    },
    'jTTNB': function (Us, Uh) {
      return Us === Uh;
    },
    'NGHwU': function (Us, Uh) {
      return Us !== Uh;
    },
    'InoUd': "sgmEF",
    'vjYNt': function (Us, Uh) {
      return Us(Uh);
    },
    'FVRdo': function (Us, Uh) {
      return Us(Uh);
    },
    'wCZHo': function (Us, Uh) {
      return Us === Uh;
    },
    'rWeRf': function (Us, Uh) {
      return Us in Uh;
    },
    'pzJgS': function (Us, Uh) {
      return Us + Uh;
    },
    'LHAiw': "@ch",
    'dJEUg': function (Us, Uh) {
      return Us + Uh;
    }
  };
  let Ur = i + ':' + J,
    Uo = i7.get(Ur);
  if (Uo === void 0) {
    let Us = L;
    M(i);
    let Uh = A(J);
    M(Us), Uo = Uh === void 0 ? J : Uh + "@ch" + i in q ? Uh + "@ch" + i : Uh, i7.set(Ur, Uo);
  }
  return Uo;
}
a(i8, "spriteKey");
var i9 = ["sprite_index", "mask_index"];
function ii(i) {
  const J = {
    'CShVa': function (UH, Us) {
      return UH !== Us;
    },
    'vHKHg': function (UH) {
      return UH();
    },
    'lhNLC': function (UH, Us) {
      return UH - Us;
    },
    'lGCcC': function (UH, Us) {
      return UH !== Us;
    },
    'fiBXG': "wUMMI",
    'evWxe': function (UH, Us) {
      return UH == Us;
    },
    'dvJXA': "number",
    'YQOsg': function (UH, Us) {
      return UH >= Us;
    },
    'riAfy': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'CCxiX': function (UH, Us) {
      return UH === Us;
    },
    'SnAVm': function (UH, Us) {
      return UH != Us;
    },
    'WbYFM': "_sprOwn",
    'JSdME': function (UH, Us) {
      return UH !== Us;
    },
    'ecASq': "ssWJt",
    'qeUnY': function (UH, Us) {
      return UH + Us;
    },
    'PzePB': "function",
    'MASPB': "draw",
    'zMRWm': "interpSelf"
  };
  if (i._sprOwn || i._ch === e.host || typeof i._ch != "number") return;
  const UU = {};
  UU.value = true, Object.defineProperty(i, "_sprOwn", UU);
  for (let UH of i9) {
    let Us = '_' + UH;
    i[Us] = i[UH], Object.defineProperty(i, UH, {
      'configurable': true,
      'enumerable': false,
      'get'() {
        let UV = this[Us];
        return typeof UV == "number" && UV >= 0 && L !== this._ch ? i8(this._ch, UV) : UV;
      },
      'set'(Uh) {
        this[Us] = Uh;
      }
    });
  }
  let Uk = i.draw;
  typeof Uk == "function" && Object.defineProperty(i, "draw", {
    'configurable': true,
    'writable': true,
    'value'(Uh) {
      return Uk.call(this, Uh);
    }
  }), Object.defineProperty(i, "interpSelf", {
    'configurable': true,
    'writable': true,
    'value': false
  });
}
a(ii, "ownSprites");
function iJ(i, J, UU) {
  const Uk = {
    'xYAEC': function (UH, Us) {
      return UH != Us;
    },
    'nQmcw': "object",
    'PYMbq': function (UH, Us) {
      return UH !== Us;
    },
    'bQZqe': function (UH, Us) {
      return UH(Us);
    }
  };
  !i || typeof i != "object" || (i._ch = J, i._enc = UU, i._own = i, e !== null && ii(i));
}
a(iJ, "tag");
function il(i, J) {
  const UU = {
    'kLUtO': function (UH, Us) {
      return UH(Us);
    },
    'YQXKb': function (UH, Us) {
      return UH !== Us;
    },
    'xjqji': "AiCBp",
    'dSlQh': "TDyms",
    'HluAs': function (UH) {
      return UH();
    }
  };
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
  const J = {
      'Gbneu': function (Uk, UH) {
        return Uk(UH);
      },
      'MBHBO': function (Uk, UH) {
        return Uk > UH;
      },
      'YcgHm': function (Uk, UH) {
        return Uk || UH;
      },
      'eSqwg': function (Uk, UH) {
        return Uk === UH;
      },
      'QtTku': "DUcdZ",
      'vMpdd': "lfRoe",
      'ZDkWx': "[board] chapter globals:",
      'QQWwQ': function (Uk, UH) {
        return Uk === UH;
      },
      'aIPjw': "SsEQR",
      'ZbjtP': "viyXv",
      'ZfahP': function (Uk, UH) {
        return Uk !== UH;
      },
      'mZfWv': function (Uk, UH) {
        return Uk(UH);
      },
      'BkwOM': "self",
      'Tzdxj': function (Uk, UH) {
        return Uk(UH);
      }
    },
    UU = {};
  UU.host = i.host, UU.hostEnc = i.enc || 0, UU.confirmed = false, UU.real = [], e = UU, F = j.self, E = null, Y = false, i0 = null, Object.defineProperty(j, "self", {
    'configurable': true,
    'enumerable': true,
    'get'() {
      return F;
    },
    'set'(Uk) {
      const UH = {};
      UH.VtcvC = "[board] chapter globals:";
      F = Uk, e !== null && e.confirmed && i2(Uk);
    }
  }), j.first = i4, d(i5);
}
a(iI, "arm");
function iU() {
  const i = {
    'eeMVw': function (Uk, UH) {
      return Uk === UH;
    },
    'jVrXS': function (Uk) {
      return Uk();
    },
    'VkiBZ': "self",
    'czxjz': function (Uk, UH) {
      return Uk(UH);
    },
    'zcGup': function (Uk, UH) {
      return Uk(UH);
    }
  };
  if (e === null) return;
  Y && i3(), e = null, E = null, Y = false, i0 = null;
  let UU = F;
  const Ur = {};
  Ur.configurable = true, Ur.enumerable = true, Ur.writable = true, Ur.value = UU, F = null, Object.defineProperty(j, "self", Ur), j.first = O, d(null), X(null);
}
a(iU, "disarm"), N(a(function () {
  const UU = {
    'ameeF': function (Uf) {
      return Uf();
    },
    'KVXjv': function (Uf, Ur) {
      return Uf(Ur);
    }
  };
  iU(), z && iI(z);
}, "boardContextReset")), K(), K();
var io = {
    '0:obj_silhouette_enemy:200': {
      'role': 'hidden',
      'why': "a special mode, not a battle enemy",
      'name': 'Silhouette',
      'ch': 0x0
    },
    '0:obj_tetris_enemy:201': {
      'role': 'hidden',
      'why': "a special mode, not a battle enemy",
      'name': 'Tetris',
      'ch': 0x0
    },
    '1:obj_bloxer_enemy:14': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Bloxer',
      'ch': 0x1,
      'home': 0x12,
      'blt': 0x6,
      'turn': 0x99
    },
    '1:obj_checkers_enemy:10': {
      'role': 'regular',
      'why': "shares turns",
      'name': "K.Round",
      'ch': 0x1,
      'home': 0xc,
      'blt': 0x8,
      'turn': 0x83
    },
    '1:obj_checkers_enemy:21': {
      'role': 'regular',
      'why': "shares turns",
      'name': "K.Round",
      'ch': 0x1,
      'home': 0x1b,
      'blt': 0x8,
      'turn': 0x83
    },
    '1:obj_clubsenemy_old:16': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Clover',
      'ch': 0x1
    },
    '1:obj_clubsenemy:16': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Clover',
      'ch': 0x1,
      'home': 0x8,
      'blt': 0xd,
      'turn': 0x82
    },
    '1:obj_clubsenemy:7': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Clover',
      'ch': 0x1,
      'home': 0xf,
      'blt': 0x14,
      'turn': 0x87
    },
    '1:obj_cutenemy:17': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'DoomTank',
      'ch': 0x1,
      'home': 0x0,
      'blt': 0x0,
      'turn': 0x87
    },
    '1:obj_cutenemy:8': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Pippins',
      'ch': 0x1,
      'home': 0x0,
      'blt': 0x0,
      'turn': 0x87
    },
    '1:obj_diamondenemy:5': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Rudinn',
      'ch': 0x1,
      'home': 0x4,
      'blt': 0x7,
      'turn': 0x99
    },
    '1:obj_dummyenemy:3': {
      'role': 'owner',
      'why': "makes its own SOUL",
      'name': 'Dummy',
      'ch': 0x1,
      'home': 0x3,
      'blt': 0x2,
      'turn': 0x73,
      'soulx': 0x1
    },
    '1:obj_headhathy:23': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Head Hathy",
      'ch': 0x1,
      'home': 0x1d,
      'blt': 0x1,
      'turn': 0x6c
    },
    '1:obj_heartenemy:6': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Hathy',
      'ch': 0x1,
      'home': 0x6,
      'blt': 0x1,
      'turn': 0x73,
      'keyed': 0x1,
      'partner': 'obj_event_manager'
    },
    '1:obj_jigsawryenemy:15': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Jigsawry',
      'ch': 0x1,
      'home': 0x15,
      'blt': 0x3,
      'turn': 0x7e
    },
    '1:obj_joker:20': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Joker',
      'ch': 0x1,
      'home': 0x19,
      'blt': 0x19,
      'turn': 0xc3
    },
    '1:obj_king_boss:25': {
      'role': 'owner',
      'why': "makes its own box and SOUL",
      'name': 'King',
      'ch': 0x1,
      'home': 0x28,
      'blt': 0x13,
      'turn': 0xad,
      'box': 0x1,
      'soulx': 0x1
    },
    '1:obj_lancerboss:2': {
      'role': 'owner',
      'why': "has long attacks",
      'name': 'Lancer',
      'ch': 0x1,
      'home': 0x2,
      'blt': 0x3,
      'turn': 0xd5,
      'keyed': 0x1
    },
    '1:obj_lancerboss2:12': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Lancer',
      'ch': 0x1,
      'home': 0x14,
      'blt': 0x5,
      'turn': 0x92
    },
    '1:obj_lancerboss3:18': {
      'role': 'owner',
      'why': "holds the battle in a phase of its own",
      'name': 'Lancer',
      'ch': 0x1,
      'home': 0x1f,
      'blt': 0x4,
      'turn': 0x8b,
      'phase': 'mn99',
      'defeats': 0x1,
      'partner': 'obj_susieandlancer_event'
    },
    '1:obj_ponman_enemy:11': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Ponman',
      'ch': 0x1,
      'home': 0xd,
      'blt': 0xc,
      'turn': 0x81
    },
    '1:obj_rabbick_enemy:13': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Rabbick',
      'ch': 0x1,
      'home': 0x10,
      'blt': 0x3,
      'turn': 0x95
    },
    '1:obj_ralseienemy:4': {
      'role': 'owner',
      'why': "makes its own box and SOUL",
      'name': 'Ralsei',
      'ch': 0x1,
      'home': 0x0,
      'blt': 0x2,
      'turn': 0x1f8,
      'box': 0x1,
      'soulx': 0x1
    },
    '1:obj_rudinnranger:22': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Rudinn Ranger",
      'ch': 0x1,
      'home': 0x1c,
      'blt': 0x5,
      'turn': 0xc4
    },
    '1:obj_smallcheckers_enemy:9': {
      'role': 'regular',
      'why': "shares turns",
      'name': "C.Round",
      'ch': 0x1,
      'home': 0x7,
      'blt': 0x0,
      'turn': 0x10,
      'partner': 'obj_event_manager'
    },
    '1:obj_susieenemy:19': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Susie',
      'ch': 0x1,
      'home': 0x1f,
      'blt': 0x5,
      'turn': 0xc5,
      'partner': 'obj_susieandlancer_event'
    },
    '2:obj_baseenemy:1': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Enemy',
      'ch': 0x2
    },
    '2:obj_baseenemy:31': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Poppup',
      'ch': 0x2
    },
    '2:obj_berdlyb_enemy:43': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Berdly',
      'ch': 0x2,
      'home': 0x3a,
      'blt': 0x27,
      'bltmax': 0x49,
      'turn': 0xd8,
      'the': 0x1
    },
    '2:obj_berdlyb2_enemy:46': {
      'role': 'owner',
      'why': "makes its own box and SOUL",
      'name': 'Berdly',
      'ch': 0x2,
      'home': 0x52,
      'blt': 0x2c,
      'bltmax': 0x4a,
      'turn': 0x107,
      'box': 0x1,
      'soulx': 0x1
    },
    '2:obj_clubsenemy:47': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Clover',
      'ch': 0x2,
      'home': 0x47,
      'blt': 0x1e,
      'turn': 0xc2
    },
    '2:obj_cutenemy2:36': {
      'role': 'hidden',
      'why': "a debug enemy",
      'name': 'Swatchling',
      'ch': 0x2
    },
    '2:obj_cutenemy2:41': {
      'role': 'hidden',
      'why': "a debug enemy",
      'name': 'GrazeTest',
      'ch': 0x2
    },
    '2:obj_dojo_spareenemy:52': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Jigsaw Joe",
      'ch': 0x2,
      'home': 0x64,
      'blt': 0x0,
      'turn': 0x0
    },
    '2:obj_dojograzeenemy:42': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Tasque Manager",
      'ch': 0x2,
      'home': 0x48,
      'blt': 0x3,
      'turn': 0x3b,
      'turnmax': 0x2a8
    },
    '2:obj_gigaqueen_enemy:51': {
      'role': 'alone',
      'why': "turns the battle into a boxing match",
      'name': "GIGA Queen",
      'ch': 0x2,
      'home': 0x54,
      'blt': 0x0,
      'turn': 0xf4,
      'partner': 'obj_event_manager'
    },
    '2:obj_hatguy_enemy:37': {
      'role': 'owner',
      'why': "has long attacks",
      'name': "Cap'n",
      'ch': 0x2,
      'home': 0x3e,
      'blt': 0x1,
      'turn': 0x144,
      'the': 0x1,
      'partner': 'obj_musical_controller'
    },
    '2:obj_kk_enemy:38': {
      'role': 'owner',
      'why': "has long attacks",
      'name': 'K_K',
      'ch': 0x2,
      'home': 0x3e,
      'blt': 0x1,
      'turn': 0x144,
      'the': 0x1,
      'partner': 'obj_musical_controller'
    },
    '2:obj_maus_enemy:34': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Maus',
      'ch': 0x2,
      'home': 0x36,
      'blt': 0x7,
      'turn': 0x86
    },
    '2:obj_mauswheel_enemy:44': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Mauswheel',
      'ch': 0x2,
      'home': 0x53,
      'blt': 0xb,
      'turn': 0xb1
    },
    '2:obj_omawaroid_enemy:30': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Ambyu-Lance",
      'ch': 0x2,
      'home': 0x32,
      'blt': 0x8,
      'turn': 0xa6
    },
    '2:obj_pipis_enemy:53': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Pipis',
      'ch': 0x2,
      'home': 0x66,
      'blt': 0x12,
      'turn': 0x90
    },
    '2:obj_placeholderenemy:1': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Enemy',
      'ch': 0x2
    },
    '2:obj_poppup_enemy:31': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Poppup',
      'ch': 0x2,
      'home': 0x33,
      'blt': 0x5,
      'turn': 0x85
    },
    '2:obj_poppup_enemy:36': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Swatchling',
      'ch': 0x2,
      'home': 0x4e,
      'blt': 0x5,
      'turn': 0x85
    },
    '2:obj_queen_enemy:48': {
      'role': 'owner',
      'why': "makes its own box",
      'name': 'Queen',
      'ch': 0x2,
      'home': 0x3b,
      'blt': 0x5,
      'turn': 0xbb,
      'box': 0x1,
      'the': 0x1,
      'partner': 'obj_queen_throw_controller'
    },
    '2:obj_ralseienemy:4': {
      'role': 'owner',
      'why': "makes its own box and SOUL",
      'name': 'Ralsei',
      'ch': 0x2,
      'home': 0x0,
      'blt': 0x2,
      'turn': 0x1f8,
      'box': 0x1,
      'soulx': 0x1
    },
    '2:obj_rouxls_enemy_old_copy:45': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Rouxls',
      'ch': 0x2
    },
    '2:obj_rouxls_enemy:45': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Rouxls',
      'ch': 0x2,
      'home': 0x3f,
      'blt': 0x7,
      'turn': 0xdf,
      'the': 0x1
    },
    '2:obj_rudy_enemy:205': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Rudy',
      'ch': 0x2,
      'home': 0x0,
      'blt': 0x0,
      'turn': 0x0
    },
    '2:obj_spamton_enemy:49': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Spamton',
      'ch': 0x2,
      'home': 0x3c,
      'blt': 0xd,
      'turn': 0xdc
    },
    '2:obj_spamton_neo_enemy:50': {
      'role': 'owner',
      'why': "changes the SOUL for its attacks",
      'name': "Spamton NEO",
      'ch': 0x2,
      'home': 0x3d,
      'blt': 0x24,
      'bltmax': 0x61,
      'turn': 0xc9,
      'soul': 'yellow',
      'the': 0x1,
      'partner': 'obj_sneo_throwkris_vine_controller'
    },
    '2:obj_swatchling_enemy:36': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Swatchling',
      'ch': 0x2,
      'home': 0x38,
      'blt': 0x5,
      'turn': 0xce,
      'the': 0x1
    },
    '2:obj_sweet_enemy:39': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Sweet',
      'ch': 0x2,
      'home': 0x3e,
      'blt': 0x25,
      'bltmax': 0x51,
      'turn': 0xc0,
      'the': 0x1
    },
    '2:obj_tasque_enemy:32': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Tasque',
      'ch': 0x2,
      'home': 0x34,
      'blt': 0x7,
      'turn': 0x83,
      'partner': 'obj_tasque_manager'
    },
    '2:obj_tasque_manager_enemy:42': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Tasque Manager",
      'ch': 0x2,
      'home': 0x39,
      'blt': 0x3,
      'turn': 0xa9,
      'the': 0x1,
      'keyed': 0x1,
      'partner': 'obj_tasque_manager'
    },
    '2:obj_virovirokun_enemy:35': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Virovirokun',
      'ch': 0x2,
      'home': 0x37,
      'blt': 0xa,
      'turn': 0x85,
      'keyed': 0x1
    },
    '2:obj_werewerewire_enemy:40': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Werewerewire',
      'ch': 0x2,
      'home': 0x41,
      'blt': 0x34,
      'bltmax': 0x77,
      'turn': 0xc5
    },
    '2:obj_werewire_enemy:33': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Werewire',
      'ch': 0x2,
      'home': 0x35,
      'blt': 0x17,
      'turn': 0xc4
    },
    '3:obj_elnina_enemy:60': {
      'role': 'alone',
      'pair': "3:obj_lanino_enemy:61",
      'why': "fights as a pair with Lanino",
      'name': 'Elnina',
      'ch': 0x3,
      'home': 0x71,
      'blt': 0xb,
      'turn': 0xb8
    },
    '3:obj_elnina_rematch_enemy:106': {
      'role': 'alone',
      'pair': "3:obj_lanino_rematch_enemy:107",
      'why': "fights as a pair with Lanino",
      'name': 'Elnina',
      'ch': 0x3,
      'home': 0x8d,
      'blt': 0x13,
      'turn': 0x10b
    },
    '3:obj_knight_enemy:104': {
      'role': 'owner',
      'why': "makes its own box",
      'name': 'Knight',
      'ch': 0x3,
      'home': 0x73,
      'blt': 0x26,
      'bltmax': 0x70,
      'turn': 0xeb,
      'box': 0x1
    },
    '3:obj_lanino_enemy:61': {
      'role': 'alone',
      'pair': "3:obj_elnina_enemy:60",
      'why': "fights as a pair with Elnina",
      'name': 'Lanino',
      'ch': 0x3,
      'home': 0x71,
      'blt': 0xb,
      'turn': 0xb8
    },
    '3:obj_lanino_rematch_enemy:107': {
      'role': 'alone',
      'pair': "3:obj_elnina_rematch_enemy:106",
      'why': "fights as a pair with Elnina",
      'name': 'Lanino',
      'ch': 0x3,
      'home': 0x8d,
      'blt': 0x13,
      'turn': 0x10b
    },
    '3:obj_pippins_enemy:59': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Pippins',
      'ch': 0x3,
      'home': 0x7a,
      'blt': 0x1d,
      'turn': 0x71,
      'keyed': 0x1
    },
    '3:obj_ribbick_enemy:57': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Ribbick',
      'ch': 0x3,
      'home': 0x7d,
      'blt': 0x2,
      'turn': 0x9f,
      'keyed': 0x1
    },
    '3:obj_rouxls_ch3_enemy:102': {
      'role': 'alone',
      'why': "turns the bullet box into a puzzle grid",
      'name': 'Rouxls',
      'ch': 0x3,
      'home': 0x72,
      'blt': 0x5,
      'turn': 0x86,
      'the': 0x1
    },
    '3:obj_shadowman_enemy:54': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Shadowguy',
      'ch': 0x3,
      'home': 0x6e,
      'blt': 0x1b,
      'turn': 0xda,
      'the': 0x1,
      'keyed': 0x1
    },
    '3:obj_shutta_enemy:55': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Shuttah',
      'ch': 0x3,
      'home': 0x6f,
      'blt': 0x41,
      'bltmax': 0x70,
      'turn': 0xf7,
      'the': 0x1,
      'keyed': 0x1
    },
    '3:obj_tenna_board4_enemy:105': {
      'role': 'alone',
      'why': "turns the battle into TV game shows",
      'name': 'Tenna',
      'ch': 0x3,
      'home': 0x85,
      'blt': 0x0,
      'turn': 0x0,
      'keyed': 0x1
    },
    '3:obj_tenna_enemy:103': {
      'role': 'alone',
      'why': "turns the battle into TV game shows",
      'name': 'Tenna',
      'ch': 0x3,
      'home': 0x79,
      'blt': 0xc,
      'turn': 0xa6,
      'the': 0x1
    },
    '3:obj_watercooler_enemy:58': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Watercooler',
      'ch': 0x3,
      'home': 0x8b,
      'blt': 0xd,
      'turn': 0x130,
      'keyed': 0x1
    },
    '3:obj_zapper_enemy:56': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Zapper',
      'ch': 0x3,
      'home': 0x70,
      'blt': 0x18,
      'turn': 0xa6,
      'defeats': 0x1
    },
    '4:obj_balthizard_enemy:63': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Balthizard',
      'ch': 0x4,
      'home': 0x97,
      'blt': 0x1f,
      'turn': 0xa1,
      'intro': {
        'gersonintro': 0x2
      },
      'the': 0x1,
      'keyed': 0x1
    },
    '4:obj_bell_enemy:66': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Wicabel',
      'ch': 0x4,
      'home': 0x9a,
      'blt': 0x11,
      'turn': 0xb4
    },
    '4:obj_bibliox_enemy:64': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Bibliox',
      'ch': 0x4,
      'home': 0x98,
      'blt': 0xd,
      'turn': 0xa6,
      'partner': 'obj_proofread_controller'
    },
    '4:obj_elnina_rematch_enemy:110': {
      'role': 'alone',
      'pair': "4:obj_lanino_rematch_enemy:111",
      'why': "fights as a pair with Lanino",
      'name': 'Elnina',
      'ch': 0x4,
      'home': 0xb2,
      'blt': 0x14,
      'turn': 0x112
    },
    '4:obj_guei_enemy:62': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Guei',
      'ch': 0x4,
      'home': 0x96,
      'blt': 0xf,
      'turn': 0xa5,
      'the': 0x1
    },
    '4:obj_guei_enemy:65': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Mizzle',
      'ch': 0x4,
      'home': 0xa4,
      'blt': 0xf,
      'turn': 0xa5,
      'the': 0x1
    },
    '4:obj_halo_enemy:67': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Winglade',
      'ch': 0x4,
      'home': 0x9b,
      'blt': 0xb,
      'turn': 0xa3,
      'defeats': 0x1
    },
    '4:obj_hammer_of_justice_enemy:105': {
      'role': 'owner',
      'why': "has long attacks",
      'name': "Hammer of Justice",
      'ch': 0x4,
      'home': 0xa0,
      'blt': 0x0,
      'turn': 0xdc,
      'the': 0x1,
      'partner': 'obj_gerson_hammer_bro_attack_controller'
    },
    '4:obj_holywatercooler_enemy:69': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'HolywaterCooler',
      'ch': 0x4,
      'home': 0xb7,
      'blt': 0x9,
      'turn': 0xcc,
      'intro': {
        'introcon': 0x0
      }
    },
    '4:obj_jackenstein_enemy:107': {
      'role': 'owner',
      'why': "makes its own box",
      'name': 'Jackenstein',
      'ch': 0x4,
      'home': 0xae,
      'blt': 0x0,
      'turn': 0x0,
      'turnmax': 0x3a2,
      'box': 0x1
    },
    '4:obj_lanino_rematch_enemy:111': {
      'role': 'alone',
      'pair': "4:obj_elnina_rematch_enemy:110",
      'why': "fights as a pair with Elnina",
      'name': 'Lanino',
      'ch': 0x4,
      'home': 0xb2,
      'blt': 0x14,
      'turn': 0x112
    },
    '4:obj_mizzle_enemy:65': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Mizzle',
      'ch': 0x4,
      'home': 0x99,
      'blt': 0x49,
      'bltmax': 0x68,
      'turn': 0xb4,
      'the': 0x1
    },
    '4:obj_multiboss_controller_enemy1:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy1",
      'ch': 0x4
    },
    '4:obj_multiboss_controller_enemy2:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy2",
      'ch': 0x4
    },
    '4:obj_multiboss_controller_enemy3:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy3",
      'ch': 0x4
    },
    '4:obj_multiboss_enemy1:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy1",
      'ch': 0x4
    },
    '4:obj_multiboss_enemy2:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy2",
      'ch': 0x4
    },
    '4:obj_multiboss_enemy3:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy3",
      'ch': 0x4
    },
    '4:obj_organ_enemy:68': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Organikk',
      'ch': 0x4,
      'home': 0x9c,
      'blt': 0x27,
      'bltmax': 0x49,
      'turn': 0xb2
    },
    '4:obj_pippins_enemy:59': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Pippins',
      'ch': 0x4,
      'home': 0xb3,
      'blt': 0x24,
      'turn': 0x70,
      'keyed': 0x1
    },
    '4:obj_ribbick_enemy:57': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Ribbick',
      'ch': 0x4,
      'home': 0xb5,
      'blt': 0x6,
      'turn': 0xc7,
      'the': 0x1,
      'keyed': 0x1
    },
    '4:obj_rudinnranger:5': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Rudinn',
      'ch': 0x4,
      'home': 0xb3,
      'blt': 0x1,
      'turn': 0x10
    },
    '4:obj_sound_of_justice_enemy:106': {
      'role': 'alone',
      'why': "is a scripted story battle with its own turns",
      'name': "Sound Of Justice",
      'ch': 0x4,
      'home': 0xb0,
      'blt': 0x0,
      'turn': 0x13a,
      'gate': 0x119,
      'intro': {
        'init': 0x1,
        'introcon': 0x0
      },
      'the': 0x1,
      'keyed': 0x1,
      'partner': 'obj_gerson_hammer_bro_attack_controller'
    },
    '4:obj_swatchling_enemy:36': {
      'role': 'hidden',
      'why': "an empty class in chapter 4",
      'name': 'Swatchling',
      'ch': 0x4
    },
    '4:obj_titan_enemy:108': {
      'role': 'owner',
      'why': "has long attacks",
      'name': 'Titan',
      'ch': 0x4,
      'home': 0xaf,
      'blt': 0xc,
      'turn': 0x128
    },
    '4:obj_titan_spawn_enemy:109': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Titan Spawn",
      'ch': 0x4,
      'home': 0xb1,
      'blt': 0x7,
      'turn': 0x100,
      'partner': 'obj_purify_event'
    },
    '4:obj_zapper_enemy:56': {
      'role': 'hidden',
      'why': "no visible home fight",
      'name': 'Zapper',
      'ch': 0x4
    },
    '5:obj_aqua_enemy:112': {
      'role': 'owner',
      'why': "keeps the turn open for a partner",
      'name': 'Aqua',
      'ch': 0x5,
      'home': 0xdc,
      'blt': 0x3a,
      'bltmax': 0x6b,
      'turn': 0x115,
      'turnmax': 0x316,
      'keyed': 0x1
    },
    '5:obj_baseenemy:1': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Base',
      'ch': 0x5
    },
    '5:obj_blue_enemy:115': {
      'role': 'alone',
      'pair': "5:obj_yellow_enemy:116",
      'why': "fights as a pair with Yellow",
      'name': 'Blue',
      'ch': 0x5,
      'home': 0xde,
      'blt': 0x1b,
      'turn': 0x131,
      'intro': {
        'done_intro': true
      }
    },
    '5:obj_bullettester_enemy:1': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'Bullettester',
      'ch': 0x5
    },
    '5:obj_enemy_example:123': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Enemy Example",
      'ch': 0x5
    },
    '5:obj_floradinn_enemy:70': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Floradinn',
      'ch': 0x5,
      'home': 0xc8,
      'blt': 0x1c,
      'turn': 0xa7,
      'keyed': 0x1
    },
    '5:obj_flowery_enemy:119': {
      'role': 'alone',
      'why': "carries the battle into its own climbing room",
      'name': 'Flowery',
      'ch': 0x5,
      'home': 0xe1,
      'blt': 0x8,
      'turn': 0xf3,
      'soul': 'orange',
      'intro': {
        'introcon': 0x2
      }
    },
    '5:obj_green_enemy:114': {
      'role': 'alone',
      'pair': "5:obj_orange_enemy:113",
      'why': "fights beside Orange",
      'name': 'Green',
      'ch': 0x5,
      'home': 0xdd,
      'blt': 0xc,
      'turn': 0x102,
      'the': 0x1
    },
    '5:obj_kawkaw_enemy:74': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'KawKaw',
      'ch': 0x5,
      'home': 0xca,
      'blt': 0x66,
      'bltmax': 0x66,
      'turn': 0x101,
      'the': 0x1
    },
    '5:obj_leafling_enemy:71': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Leafling',
      'ch': 0x5,
      'home': 0xc9,
      'blt': 0x1e,
      'bltmax': 0x4d,
      'turn': 0xc2
    },
    '5:obj_multiboss_controller_enemy1:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy1",
      'ch': 0x5
    },
    '5:obj_multiboss_controller_enemy2:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy2",
      'ch': 0x5
    },
    '5:obj_multiboss_controller_enemy3:501': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Controller Enemy3",
      'ch': 0x5
    },
    '5:obj_multiboss_enemy1:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy1",
      'ch': 0x5
    },
    '5:obj_multiboss_enemy2:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy2",
      'ch': 0x5
    },
    '5:obj_multiboss_enemy3:500': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': "Multiboss Enemy3",
      'ch': 0x5
    },
    '5:obj_netskie_enemy:76': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Netskie',
      'ch': 0x5,
      'home': 0xce,
      'blt': 0x25,
      'turn': 0xc3,
      'the': 0x1,
      'keyed': 0x1
    },
    '5:obj_orange_enemy:113': {
      'role': 'owner',
      'why': "has long attacks",
      'name': 'Orange',
      'ch': 0x5,
      'home': 0xdd,
      'blt': 0x12,
      'turn': 0x182,
      'the': 0x1
    },
    '5:obj_pink_enemy:118': {
      'role': 'alone',
      'why': "holds the battle until its own intro has played",
      'name': 'Pink',
      'ch': 0x5,
      'home': 0xe0,
      'blt': 0xc,
      'turn': 0x20f,
      'intro': {
        'introcon': 0x3
      },
      'partner': 'obj_date_controller'
    },
    '5:obj_purple_enemy:117': {
      'role': 'alone',
      'pair': "5:obj_aqua_enemy:112",
      'why': "fights beside Aqua",
      'name': 'Seth',
      'ch': 0x5,
      'home': 0xdf,
      'blt': 0x36,
      'turn': 0x116,
      'the': 0x1
    },
    '5:obj_scarecrow_enemy:72': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Shi',
      'ch': 0x5,
      'home': 0xca,
      'blt': 0x7,
      'turn': 0xce,
      'keyed': 0x1,
      'partner': 'obj_seth_shi_controller'
    },
    '5:obj_sheary_enemy:75': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Sheary',
      'ch': 0x5,
      'home': 0xcd,
      'blt': 0x8,
      'turn': 0xd3,
      'partner': 'obj_scissors_act_controller'
    },
    '5:obj_shinobeetle_enemy:73': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Shinobeetle',
      'ch': 0x5,
      'home': 0xcb,
      'blt': 0x1,
      'turn': 0x6d,
      'the': 0x1,
      'keyed': 0x1,
      'partner': 'obj_seth_shinobeetle_controller'
    },
    '5:obj_terracota_enemy:77': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Terakota',
      'ch': 0x5,
      'home': 0xcf,
      'blt': 0xa,
      'turn': 0xbc
    },
    '5:obj_trashy_trio:121': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Trashy Trio",
      'ch': 0x5,
      'home': 0xea,
      'blt': 0x1a,
      'turn': 0xf1,
      'the': 0x1
    },
    '5:obj_yellow_enemy:116': {
      'role': 'alone',
      'pair': "5:obj_blue_enemy:115",
      'why': "fights beside Blue",
      'name': 'Yellow',
      'ch': 0x5,
      'home': 0xde,
      'blt': 0x1b,
      'turn': 0x131,
      'the': 0x1
    },
    'ut:obj_aaron': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Aaron',
      'ch': 'ut',
      'home': 0x28,
      'blt': 0xa,
      'turn': 0xa0
    },
    'ut:obj_asgore_finalintro': {
      'role': 'alone',
      'why': "is the opening of a story battle",
      'name': "Asgore Finalintro",
      'ch': 'ut',
      'home': 0x64,
      'blt': 0x8a,
      'bltmax': 0x100,
      'turn': 0x87,
      'phase': "mn999 my999 my-999"
    },
    'ut:obj_asgoreb': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Asgore',
      'ch': 'ut',
      'home': 0x65,
      'blt': 0x4c,
      'bltmax': 0x100,
      'turn': 0x9a
    },
    'ut:obj_asrielb': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Asriel Dreemurr",
      'ch': 'ut',
      'home': 0xff,
      'blt': 0x14,
      'turn': 0x72
    },
    'ut:obj_asrielfinal': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Asriel',
      'ch': 'ut',
      'home': 0x100,
      'blt': 0x14,
      'turn': 0x82
    },
    'ut:obj_astigmatism': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Astigmatism',
      'ch': 'ut',
      'home': 0x3e,
      'blt': 0xd,
      'turn': 0x96
    },
    'ut:obj_bara01': {
      'role': 'regular',
      'why': "shares turns",
      'name': "RG 01",
      'ch': 'ut',
      'home': 0x31,
      'blt': 0x7,
      'turn': 0xb4
    },
    'ut:obj_bara02': {
      'role': 'regular',
      'why': "shares turns",
      'name': "RG 02",
      'ch': 'ut',
      'home': 0x31,
      'blt': 0x7,
      'turn': 0xb4
    },
    'ut:obj_bara03': {
      'role': 'regular',
      'why': "shares turns",
      'name': "RG 03",
      'ch': 'ut',
      'home': 0x4c,
      'blt': 0xa,
      'turn': 0x90
    },
    'ut:obj_bara04': {
      'role': 'regular',
      'why': "shares turns",
      'name': "RG 04",
      'ch': 'ut',
      'home': 0x4c,
      'blt': 0xa,
      'turn': 0x90
    },
    'ut:obj_battlebomb': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Bomb',
      'ch': 'ut',
      'home': 0x45,
      'blt': 0x0,
      'turn': 0x0
    },
    'ut:obj_chilldrake': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Snowdrake',
      'ch': 'ut',
      'home': 0x1e,
      'blt': 0xc,
      'turn': 0x64
    },
    'ut:obj_dummymonster': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Dummy',
      'ch': 'ut',
      'home': 0x2,
      'blt': 0x0,
      'turn': 0x3e
    },
    'ut:obj_endogeny': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Amalgamate',
      'ch': 'ut',
      'home': 0x56,
      'blt': 0x5,
      'turn': 0xa0
    },
    'ut:obj_fakefroggit': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Froggit',
      'ch': 'ut',
      'home': 0x3,
      'blt': 0x0,
      'turn': 0x0
    },
    'ut:obj_finalfroggit': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Final Froggit",
      'ch': 'ut',
      'home': 0x3d,
      'blt': 0x5,
      'turn': 0x96
    },
    'ut:obj_finalknight': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Knight Knight",
      'ch': 'ut',
      'home': 0x3c,
      'blt': 0x18,
      'bltmax': 0x55,
      'turn': 0x7d
    },
    'ut:obj_froggit': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Froggit',
      'ch': 'ut',
      'home': 0x4,
      'blt': 0x3,
      'turn': 0x47
    },
    'ut:obj_gladdummy': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Glad Dummy",
      'ch': 'ut',
      'home': 0x5d,
      'blt': 0x0,
      'turn': 0x3e
    },
    'ut:obj_glydeb': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Glyde',
      'ch': 'ut',
      'home': 0x87,
      'blt': 0x20,
      'turn': 0x8f
    },
    'ut:obj_greatdog': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Greater Dog",
      'ch': 'ut',
      'home': 0x1a,
      'blt': 0x1,
      'turn': 0x6e,
      'keyed': 0x1
    },
    'ut:obj_gyftrot': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Gyftrot',
      'ch': 'ut',
      'home': 0x1c,
      'blt': 0x9,
      'turn': 0x64
    },
    'ut:obj_icecap': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Ice Cap",
      'ch': 'ut',
      'home': 0x20,
      'blt': 0x5,
      'turn': 0x64
    },
    'ut:obj_jerry': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Jerry',
      'ch': 'ut',
      'home': 0x22,
      'blt': 0x0,
      'turn': 0x0
    },
    'ut:obj_lemonbread': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lemon Bread",
      'ch': 'ut',
      'home': 0x52,
      'blt': 0xf,
      'turn': 0x88
    },
    'ut:obj_lesserdoge': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lesser Dog",
      'ch': 'ut',
      'home': 0x18,
      'blt': 0x2,
      'turn': 0x6e
    },
    'ut:obj_loox': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Loox',
      'ch': 'ut',
      'home': 0xd,
      'blt': 0x7,
      'turn': 0x6e
    },
    'ut:obj_maddummy': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Mad Dummy",
      'ch': 'ut',
      'home': 0x2d,
      'blt': 0x10,
      'turn': 0xc4
    },
    'ut:obj_mandog': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Dogamy',
      'ch': 'ut',
      'home': 0x19,
      'blt': 0x4,
      'turn': 0x8f,
      'keyed': 0x1
    },
    'ut:obj_memoryhead': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Memoryhead',
      'ch': 'ut',
      'home': 0x55,
      'blt': 0xb,
      'turn': 0xa0
    },
    'ut:obj_mettaton_neo': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Mettaton NEO",
      'ch': 'ut',
      'home': 0x5e,
      'blt': 0x0,
      'turn': 0x0
    },
    'ut:obj_mettatonb_quiz': {
      'role': 'alone',
      'why': "turns the battle into a quiz show",
      'name': 'Mettaton',
      'ch': 'ut',
      'home': 0x30,
      'blt': 0xc,
      'turn': 0x59
    },
    'ut:obj_mettatonb_second': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Mettaton',
      'ch': 'ut',
      'home': 0x39,
      'blt': 0x0,
      'turn': 0x3c
    },
    'ut:obj_mettatonb_third': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Mettaton',
      'ch': 'ut',
      'home': 0x50,
      'blt': 0x8,
      'turn': 0x103
    },
    'ut:obj_mettatonex': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Mettaton EX",
      'ch': 'ut',
      'home': 0x51,
      'blt': 0x9,
      'turn': 0x97
    },
    'ut:obj_migosp': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Migosp',
      'ch': 'ut',
      'home': 0xb,
      'blt': 0xf,
      'turn': 0x6e
    },
    'ut:obj_migospel': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Migospel',
      'ch': 'ut',
      'home': 0x79,
      'blt': 0x25,
      'turn': 0x96
    },
    'ut:obj_mkid_battle': {
      'role': 'alone',
      'why': "is a story scene, not a fight",
      'name': "Monster Kid",
      'ch': 'ut',
      'home': 0x5b,
      'blt': 0x0,
      'turn': 0x0,
      'phase': 'mn99'
    },
    'ut:obj_moldessa': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Moldessa',
      'ch': 'ut',
      'home': 0x7b,
      'blt': 0x20,
      'turn': 0x96
    },
    'ut:obj_moldsmal': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Moldsmal',
      'ch': 'ut',
      'home': 0x7,
      'blt': 0x6,
      'turn': 0x64
    },
    'ut:obj_moldsmalx': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Moldsmal',
      'ch': 'ut',
      'home': 0x2a,
      'blt': 0x9,
      'turn': 0x64
    },
    'ut:obj_movedoge': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Doggo',
      'ch': 'ut',
      'home': 0x17,
      'blt': 0x1,
      'turn': 0x52,
      'keyed': 0x1
    },
    'ut:obj_napstablook': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Napstablook',
      'ch': 'ut',
      'home': 0x14,
      'blt': 0x11,
      'turn': 0x7f,
      'the': 0x1,
      'keyed': 0x1
    },
    'ut:obj_papyrusboss': {
      'role': 'owner',
      'why': "has long attacks",
      'name': 'Papyrus',
      'ch': 'ut',
      'home': 0x1b,
      'blt': 0x3,
      'turn': 0x102,
      'keyed': 0x1
    },
    'ut:obj_parsnik': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Parsnik',
      'ch': 'ut',
      'home': 0x7a,
      'blt': 0xc,
      'turn': 0x96
    },
    'ut:obj_pyrope': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Pyrope',
      'ch': 'ut',
      'home': 0x34,
      'blt': 0xa,
      'turn': 0xb4
    },
    'ut:obj_reaperbird': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Reaperbird',
      'ch': 'ut',
      'home': 0x53,
      'blt': 0x27,
      'bltmax': 0x47,
      'turn': 0xaa
    },
    'ut:obj_ripoff_alphys': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x59,
      'blt': 0xa,
      'turn': 0x90
    },
    'ut:obj_ripoff_asgore': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x5a,
      'blt': 0x3a,
      'bltmax': 0x48,
      'turn': 0x90
    },
    'ut:obj_ripoff_papyrus': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x58,
      'blt': 0x8,
      'turn': 0x96
    },
    'ut:obj_ripoff_sans': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x58,
      'blt': 0x8,
      'turn': 0x96
    },
    'ut:obj_ripoff_toriel': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x5a,
      'blt': 0x3a,
      'bltmax': 0x48,
      'turn': 0x90
    },
    'ut:obj_ripoff_undyne': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Lost Soul",
      'ch': 'ut',
      'home': 0x57,
      'blt': 0x0,
      'turn': 0x8d
    },
    'ut:obj_sansb': {
      'role': 'owner',
      'why': "holds the battle in a phase of its own",
      'name': 'Sans',
      'ch': 'ut',
      'home': 0x5f,
      'blt': 0xe,
      'turn': 0x8e,
      'phase': "mn99 my99",
      'keyed': 0x1
    },
    'ut:obj_shyren': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Shyren',
      'ch': 'ut',
      'home': 0x2c,
      'blt': 0x2,
      'turn': 0x67
    },
    'ut:obj_snowdrake': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Snowdrake',
      'ch': 'ut',
      'home': 0x1e,
      'blt': 0xc,
      'turn': 0x64
    },
    'ut:obj_snowdrakemom': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Amalgamate',
      'ch': 'ut',
      'home': 0x54,
      'blt': 0x3,
      'turn': 0x64
    },
    'ut:obj_sosorry': {
      'role': 'regular',
      'why': "shares turns",
      'name': "So Sorry",
      'ch': 'ut',
      'home': 0x8c,
      'blt': 0x0,
      'turn': 0x82
    },
    'ut:obj_spiderb': {
      'role': 'owner',
      'why': "changes the SOUL for its attacks",
      'name': 'Muffet',
      'ch': 'ut',
      'home': 0x38,
      'blt': 0x5,
      'turn': 0xa0,
      'soul': 'purple'
    },
    'ut:obj_tembattle': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Temmie',
      'ch': 'ut',
      'home': 0x29,
      'blt': 0x0,
      'turn': 0x91
    },
    'ut:obj_testmonster': {
      'role': 'hidden',
      'why': "debug or placeholder class",
      'name': 'TestFroggit',
      'ch': 'ut'
    },
    'ut:obj_torielboss': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Toriel',
      'ch': 'ut',
      'home': 0x16,
      'blt': 0x1e,
      'bltmax': 0x45,
      'turn': 0x67,
      'keyed': 0x1
    },
    'ut:obj_tsunderplane': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Tsunderplane',
      'ch': 'ut',
      'home': 0x32,
      'blt': 0x12,
      'turn': 0x85
    },
    'ut:obj_undyne_ex': {
      'role': 'regular',
      'why': "shares turns",
      'name': "Undyne the Undying",
      'ch': 'ut',
      'home': 0x5c,
      'blt': 0x0,
      'turn': 0xb1,
      'keyed': 0x1
    },
    'ut:obj_undynebattle2': {
      'role': 'alone',
      'why': "is a story scene, not a fight",
      'name': 'Undyne',
      'ch': 'ut',
      'home': 0x3a,
      'blt': 0x0,
      'turn': 0x0,
      'phase': 'mn99'
    },
    'ut:obj_undyneboss': {
      'role': 'owner',
      'why': "holds the battle in a phase of its own",
      'name': 'Undyne',
      'ch': 'ut',
      'home': 0x2f,
      'blt': 0x0,
      'turn': 0x7b,
      'phase': 'mn99',
      'keyed': 0x1
    },
    'ut:obj_vegetoid': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Vegetoid',
      'ch': 'ut',
      'home': 0x12,
      'blt': 0x8,
      'turn': 0x6e
    },
    'ut:obj_vulkin': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Vulkin',
      'ch': 'ut',
      'home': 0x33,
      'blt': 0x1c,
      'turn': 0x85
    },
    'ut:obj_whimsalot': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Whimsalot',
      'ch': 'ut',
      'home': 0x3f,
      'blt': 0x11,
      'turn': 0x96
    },
    'ut:obj_whimsun': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Whimsun',
      'ch': 'ut',
      'home': 0x5,
      'blt': 0xa,
      'turn': 0x61
    },
    'ut:obj_wizard': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Madjick',
      'ch': 'ut',
      'home': 0x3b,
      'blt': 0x9,
      'turn': 0xa0
    },
    'ut:obj_womandog': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Dogaressa',
      'ch': 'ut',
      'home': 0x19,
      'blt': 0x4,
      'turn': 0x8f
    },
    'ut:obj_woshua': {
      'role': 'regular',
      'why': "shares turns",
      'name': 'Woshua',
      'ch': 'ut',
      'home': 0x2b,
      'blt': 0xb,
      'turn': 0x9b
    }
  },
  ik = [["5:obj_aqua_enemy:112", "5:obj_netskie_enemy:76", "Aqua's knife fan needs the Netskie of her own fight, so Aqua and Netskie cannot share a board."]],
  iH = "Undertale enemies fight on their own board.";
function is(i) {
  const UU = {};
  UU.UiDkK = function (UH, Us) {
    return UH == Us;
  }, UU.XhaaM = "string";
  const Uo = UU;
  let Uk = Uo.UiDkK(typeof i, Uo.XhaaM) ? i : i && i.key;
  return Uk && io[Uk] || null;
}
a(is, "traitOf");
function ih(i) {
  const J = {
    'ojzPC': function (Uk, UH) {
      return Uk(UH);
    },
    'LjElq': "regular"
  };
  let Ur = is(i);
  return Ur ? Ur.role : "regular";
}
a(ih, "roleOf");
var iS = a(i => !!i && (i.engine === 'ut' || typeof i.key == "string" && i.key.startsWith("ut:")), "isUT"),
  iQ = a(i => iS(i) ? null : i && typeof i.chapter == "number" ? i.chapter : parseInt(i && i.key, 10) || null, "chapterOf"),
  im = a((i, J) => J || i && i.name || is(i) && is(i).name || i && i.label || "That enemy", "nameOf"),
  iV = a(i => Array.isArray(i) ? i.filter(J => J && J.entry && J.n > 0) : [], "rows"),
  iw = a((i, J) => i.endsWith(':') ? J.startsWith(i) : J === i, "matches");
function iZ(i) {
  const J = {
    'YRPxL': function (Uk, UH) {
      return Uk(UH);
    },
    'nsOSe': function (Uk, UH) {
      return Uk === UH;
    },
    'QOvIa': "katwt",
    'ykKpm': "tvxsM",
    'GBOnK': function (Uk, UH) {
      return Uk(UH);
    },
    'fcvUC': function (Uk, UH) {
      return Uk > UH;
    },
    'SwhjG': function (Uk, UH) {
      return Uk || UH;
    }
  };
  let Ur = 0;
  for (let Uk of iV(i)) {
    let UH = iQ(Uk.entry);
    UH && UH > Ur && (Ur = UH);
  }
  return Ur || null;
}
a(iZ, "hostChapter");
function iC(i, J) {
  const Uf = {
      'WeuAk': function (UZ, UC) {
        return UZ(UC);
      },
      'kyhZT': function (UZ) {
        return UZ();
      },
      'rXoCI': "That enemy cannot be put on a board.",
      'xHtTg': function (UZ, UC) {
        return UZ(UC);
      },
      'SonlU': "regular",
      'MzDKP': function (UZ, UC) {
        return UZ === UC;
      },
      'cyEEq': "hidden",
      'jYtEl': function (UZ, UC) {
        return UZ + UC;
      },
      'ZxdVF': " cannot be put on a board.",
      'PcXqq': function (UZ, UC) {
        return UZ === UC;
      },
      'RetcI': "LDRpP",
      'XKdSA': "luNyi",
      'uDMQE': function (UZ, UC) {
        return UZ(UC);
      },
      'ImvJT': function (UZ, UC) {
        return UZ === UC;
      },
      'hrEKw': function (UZ, UC, UP) {
        return UZ(UC, UP);
      },
      'YjusW': function (UZ, UC) {
        return UZ === UC;
      },
      'FkAbu': "alone",
      'RQRso': function (UZ, UC) {
        return UZ !== UC;
      },
      'Yiluu': "EEztd",
      'ZSKfq': "FJijo",
      'hMulW': function (UZ, UC) {
        return UZ(UC);
      },
      'ewvTY': function (UZ, UC) {
        return UZ === UC;
      },
      'QTKTz': function (UZ, UC, UP) {
        return UZ(UC, UP);
      },
      'aiXiL': function (UZ, UC) {
        return UZ !== UC;
      },
      'LitCp': function (UZ, UC) {
        return UZ + UC;
      },
      'uAznI': " can only lead a board",
      'rzRUd': ": it ",
      'dNBZt': function (UZ, UC, UP) {
        return UZ(UC, UP);
      },
      'arexP': function (UZ, UC, UP) {
        return UZ(UC, UP);
      }
    },
    Ur = {};
  Ur.ok = false;
  Ur.msg = "That enemy cannot be put on a board.";
  if (!J) return Ur;
  let Uk = im(J),
    UH = is(J),
    Us = UH ? UH.role : "regular";
  if (Us === "hidden") return {
    'ok': false,
    'msg': Uk + " cannot be put on a board."
  };
  let Uh = iV(i);
  const US = {};
  US.ok = true;
  if (!Uh.length) return US;
  const Um = {};
  Um.ok = false, Um.msg = iH;
  if (Uh.some(UZ => iS(UZ.entry) !== iS(J))) return Um;
  let UV = Uh.find(UZ => ih(UZ.entry) === "alone");
  if (UV) {
    if (!(ix(UV.entry) === J.key && UV.n === 1 && Uh.length === 1)) return {
      'ok': false,
      'msg': ig(UV.entry, UV.name)
    };
  } else {
    if (Us === "alone") {
      let UZ = ix(J);
      if (!(UZ && Uh.length === 1 && Uh[0].entry.key === UZ && Uh[0].n === 1)) return {
        'ok': false,
        'msg': ig(J, J.name)
      };
    }
  }
  if (UH && UH.lead && Uh[0].entry.key !== J.key) return {
    'ok': false,
    'msg': Uk + " can only lead a board" + (UH.why ? ": it " + UH.why : '') + '.'
  };
  for (let [Ug, Ux, UG] of ik) for (let Un of Uh) if (iw(Ug, J.key) && iw(Ux, Un.entry.key) || iw(Ux, J.key) && iw(Ug, Un.entry.key)) return {
    'ok': false,
    'msg': UG
  };
  const Uw = {};
  return Uw.ok = true, Uw;
}
a(iC, "checkAdd");
function iP(UU, Uf) {
  UU = UU - 137;
  const Ur = lN();
  let Uo = Ur[UU];
  if (iP.RFPlIg === undefined) {
    var Uk = function (US) {
      const UQ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let Um = '',
        UV = '';
      for (let Uw = 0, UZ, UC, UP = 0; UC = US.charAt(UP++); ~UC && (UZ = Uw % 4 ? UZ * 64 + UC : UC, Uw++ % 4) ? Um += String.fromCharCode(255 & UZ >> (-2 * Uw & 6)) : 0) {
        UC = UQ.indexOf(UC);
      }
      for (let Ug = 0, Ux = Um.length; Ug < Ux; Ug++) {
        UV += '%' + ('00' + Um.charCodeAt(Ug).toString(16)).slice(-2);
      }
      return decodeURIComponent(UV);
    };
    const Uh = function (US, UQ) {
      let Um = [],
        UV = 0,
        Uw,
        UZ = '';
      US = Uk(US);
      let UC;
      for (UC = 0; UC < 256; UC++) {
        Um[UC] = UC;
      }
      for (UC = 0; UC < 256; UC++) {
        UV = (UV + Um[UC] + UQ.charCodeAt(UC % UQ.length)) % 256, Uw = Um[UC], Um[UC] = Um[UV], Um[UV] = Uw;
      }
      UC = 0, UV = 0;
      for (let UP = 0; UP < US.length; UP++) {
        UC = (UC + 1) % 256, UV = (UV + Um[UC]) % 256, Uw = Um[UC], Um[UC] = Um[UV], Um[UV] = Uw, UZ += String.fromCharCode(US.charCodeAt(UP) ^ Um[(Um[UC] + Um[UV]) % 256]);
      }
      return UZ;
    };
    iP.KTONdb = Uh, iP.NwIGXe = {}, iP.RFPlIg = true;
  }
  const UH = Ur[0];
  iP.trdotZ !== UH && (iP.NwIGXe = {}, iP.trdotZ = UH);
  const Us = iP.NwIGXe[UU];
  return Us === undefined ? (iP.GKCDnH === undefined && (iP.GKCDnH = true), Uo = iP.KTONdb(Uo, Uf), iP.NwIGXe[UU] = Uo) : Uo = Us, Uo;
}
function ig(i, J) {
  const UU = {
    'QZnfB': function (Us, Uh) {
      return Us(Uh);
    },
    'tHyFJ': function (Us, Uh, US) {
      return Us(Uh, US);
    },
    'NeQtM': function (Us, Uh) {
      return Us + Uh;
    },
    'KHUOf': function (Us, Uh) {
      return Us + Uh;
    },
    'PFbIb': function (Us, Uh) {
      return Us + Uh;
    },
    'tvteB': ", on a board of their own.",
    'nmuhN': function (Us, Uh) {
      return Us + Uh;
    },
    'imaqA': " fights alone: it ",
    'zmswI': function (Us, Uh) {
      return Us + Uh;
    },
    'Lbezu': " fights alone."
  };
  let Uf = is(i),
    Ur = im(i, J);
  return Uf && Uf.pair ? Ur + '\x20' + Uf.why + ", on a board of their own." : Uf && Uf.why ? Ur + " fights alone: it " + Uf.why + '.' : Ur + " fights alone.";
}
a(ig, "aloneSentence");
function ix(i) {
  const UU = {
    'cWPPQ': function (Uo, Uk) {
      return Uo(Uk);
    }
  };
  let Uf = is(i);
  return Uf && Uf.pair || null;
}
a(ix, "pairOf");
function iG(i) {
  const Uf = {
    'vCJll': function (Uo, Uk) {
      return Uo === Uk;
    },
    'CYJkA': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'xAHgl': function (Uo, Uk) {
      return Uo(Uk);
    }
  };
  return i.length === 2 && i[0] !== i[1] && (ix(i[0]) === i[1] || ix(i[1]) === i[0]);
}
a(iG, "isPairBoard");
var iv = a(i => i.length < 2 ? i.join('') : i.slice(0, -1).join(',\x20') + " and " + i[i.length - 1], "list");
function iT(i) {
  const J = {
    'bNtYO': function (US, UQ) {
      return US(UQ);
    },
    'JtODz': function (US, UQ) {
      return US(UQ);
    },
    'rEGZu': function (US, UQ) {
      return US !== UQ;
    },
    'nrhWZ': "warn",
    'mwoek': function (US, UQ) {
      return US + UQ;
    },
    'BsGOA': function (US, UQ) {
      return US + UQ;
    },
    'lIKCK': function (US, UQ, Um) {
      return US(UQ, Um);
    },
    'aCDlO': "'s ",
    'xtJlW': " SOUL attacks use CH",
    'WZYRl': "'s SOUL.",
    'mInPy': function (US, UQ) {
      return US > UQ;
    },
    'ogAHA': "info",
    'SHroY': "Chapters ",
    'aDFCO': ": each enemy keeps its own chapter's rules.",
    'AZjUn': function (US, UQ) {
      return US > UQ;
    },
    'wZYDJ': function (US, UQ) {
      return US === UQ;
    },
    'LmiqH': function (US, UQ) {
      return US + UQ;
    },
    'DtBgs': function (US, UQ) {
      return US + UQ;
    },
    'pTfZA': " takes the whole turn",
    'WjpRj': ": it attacks on turns of its own.",
    'sPnmZ': function (US, UQ) {
      return US > UQ;
    },
    'NFwuO': function (US, UQ) {
      return US + UQ;
    },
    'JdAHX': function (US, UQ) {
      return US - UQ;
    },
    'hNqlF': " more",
    'lUQsz': function (US, UQ) {
      return US(UQ);
    },
    'SuQHK': " take the whole turn: each attacks on turns of its own."
  };
  let Ur = iV(i),
    Uo = [];
  if (!Ur.length) return Uo;
  let UH = iZ(i),
    Us = Ur.reduce((US, UQ) => US + UQ.n, 0);
  for (let US of Ur) {
    let UQ = is(US.entry);
    UQ && UQ.soul && UH && iQ(US.entry) !== UH && Uo.push({
      'level': "warn",
      'text': im(US.entry, US.name) + "'s " + UQ.soul + " SOUL attacks use CH" + UH + "'s SOUL."
    });
  }
  let Uh = [...new Set(Ur.map(Um => iQ(Um.entry)).filter(Boolean))].sort((Um, UV) => Um - UV);
  if (Uh.length > 1 && Uo.push({
    'level': "info",
    'text': "Chapters " + iv(Uh.map(String)) + ": each enemy keeps its own chapter's rules."
  }), Us > 1) {
    let Um = Ur.filter(UV => ih(UV.entry) === "owner");
    if (Um.length === 1) {
      let UV = is(Um[0].entry);
      Uo.push({
        'level': "info",
        'text': im(Um[0].entry, Um[0].name) + (UV && UV.why ? '\x20' + UV.why : " takes the whole turn") + ": it attacks on turns of its own."
      });
    } else {
      if (Um.length > 1) {
        let Uw = Um.slice(0, 3).map(UZ => im(UZ.entry, UZ.name));
        Um.length > 3 && (Uw[2] = Um.length - 2 + " more"), Uo.push({
          'level': "info",
          'text': iv(Uw) + " take the whole turn: each attacks on turns of its own."
        });
      }
    }
  }
  return Uo;
}
a(iT, "boardNotes");
var iL = a(i => String(i).replace(/^obj_/, '').replace(/_?(enemy|monster|boss)$/, '').replace(/_/g, '\x20').replace(/\b\w/g, J => J.toUpperCase()).trim() || i, "pretty"),
  iM = a(i => i.game === "undertale" && (i.engine || "undertale") === "undertale", "isUT"),
  id = null,
  iD = null,
  iA = -1;
function iX() {
  const i = {
    'vPmAa': function (Uo, Uk) {
      return Uo === Uk;
    },
    'qjDPO': function (Uo, Uk) {
      return Uo(Uk);
    },
    'ijVBb': "info",
    'UGjhG': function (Uo, Uk) {
      return Uo + Uk;
    },
    'GhKdO': function (Uo, Uk, UH) {
      return Uo(Uk, UH);
    },
    'fKnsz': " takes the whole turn",
    'ivUcF': ": it attacks on turns of its own.",
    'HiNfV': function (Uo, Uk) {
      return Uo > Uk;
    },
    'fkFKj': function (Uo, Uk) {
      return Uo + Uk;
    },
    'TCxHN': function (Uo, Uk) {
      return Uo - Uk;
    },
    'WTCwe': " more",
    'lkbcX': function (Uo, Uk) {
      return Uo + Uk;
    },
    'yHWzn': function (Uo, Uk) {
      return Uo(Uk);
    },
    'WuxJI': " take the whole turn: each attacks on turns of its own.",
    'BBzte': function (Uo, Uk) {
      return Uo === Uk;
    },
    'vtTGu': function (Uo) {
      return Uo();
    },
    'CIrnX': function (Uo, Uk) {
      return Uo === Uk;
    },
    'dlVKg': "undertale",
    'uWvuj': function (Uo, Uk) {
      return Uo == Uk;
    },
    'OLbBn': "number",
    'frosJ': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'kSkLo': "pkEIy",
    'FOVOj': function (Uo, Uk) {
      return Uo == Uk;
    },
    'oYswk': "function",
    'IWuim': function (Uo, Uk) {
      return Uo + Uk;
    },
    'hdbqp': function (Uo, Uk) {
      return Uo + Uk;
    },
    'yTIHi': function (Uo, Uk) {
      return Uo(Uk);
    },
    'xdDev': function (Uo) {
      return Uo();
    }
  };
  if (id && iA === m()) return id;
  let Ur = new Map();
  for (let Uo of H) {
    if (Uo.game === "undertale" || !Uo.monsters || !Uo.monsters.length || Uo.mode || Uo.secret) continue;
    let Uk = Uo.engineChapter ?? Uo.chapter;
    if (typeof Uk == "number") for (let UH of Uo.monsters) {
      if (!UH.cls) continue;
      let UQ = typeof UH.cls == "function" ? UH.cls.name : String(UH.cls),
        Um = Uk + ':' + UQ + ':' + UH.type;
      Ur.has(Um) || Ur.set(Um, {
        'key': Um,
        'engine': 'dr',
        'chapter': Uk,
        'cls': UH.cls,
        'clsName': UQ,
        'type': UH.type,
        'label': iL(UQ),
        'from': Uo.id,
        'fromName': Uo.name
      });
    }
  }
  return id = [...Ur.values()].sort((UV, Uw) => UV.chapter - Uw.chapter || UV.label.localeCompare(Uw.label)), iA = m(), id;
}
a(iX, "rosterDR");
var iq = new Map();
function iN(i) {
  const Uf = {};
  Uf.EvAHE = function (Uk, UH) {
    return Uk !== UH;
  };
  const Uo = Uf;
  return !i || Uo.EvAHE(i.engine, 'dr') ? null : (iq.has(i.from) || iq.set(i.from, H.find(Uk => Uk.id === i.from) || null), iq.get(i.from));
}
a(iN, "homeFight");
var iW = a(i => {
  const UU = {
    'KmBtF': function (Uo, Uk) {
      return Uo(Uk);
    }
  };
  let Uf = iN(i);
  return Uf && Uf.encounterno || 0;
}, "homeEnc");
function ij(i) {
  const J = {
    'huvCd': function (Uk, UH) {
      return Uk(UH);
    }
  };
  let Uf = iN(i);
  return Uf && Uf.monsters && Uf.monsters.find(Uk => Uk.type === i.type && (typeof Uk.cls == "function" ? Uk.cls.name : String(Uk.cls)) === i.clsName) || null;
}
a(ij, "homeRow");
function ia(i) {
  const Uf = {
    'DZWyW': function (Uk, UH) {
      return Uk(UH);
    },
    'YsFvV': function (Uk, UH) {
      return Uk == UH;
    },
    'WnJJr': "function"
  };
  let Ur = ij(i);
  return Ur && typeof Ur.setup == "function" ? Ur.setup : null;
}
a(ia, "homeSetup");
var iR = ["music", "musiclevel", "background", "encounterno", "party", "heromakex", "heromakey", "storyParty", "plot", "flags", "rank", "room", "lyrics", "beats"],
  iK = ["party", "heromakex", "heromakey", "storyParty"];
function iy() {
  const i = {
    'wcDPq': function (US, UQ) {
      return US === UQ;
    },
    'hqeul': function (US, UQ) {
      return US === UQ;
    },
    'RLjcb': function (US, UQ) {
      return US !== UQ;
    },
    'aySZO': function (US, UQ) {
      return US(UQ);
    },
    'YrTpI': function (US, UQ) {
      return US !== UQ;
    },
    'RPsoe': function (US, UQ) {
      return US(UQ);
    },
    'VIjHY': "warn",
    'QhkCK': function (US, UQ) {
      return US + UQ;
    },
    'bHFau': function (US, UQ) {
      return US + UQ;
    },
    'ABKow': function (US, UQ) {
      return US + UQ;
    },
    'FGbzK': function (US, UQ) {
      return US + UQ;
    },
    'FGokF': function (US, UQ, Um) {
      return US(UQ, Um);
    },
    'XezdD': "'s ",
    'dnGRO': " SOUL attacks use CH",
    'isVYu': "'s SOUL.",
    'KVqtY': function (US) {
      return US();
    },
    'odOFv': "yacIB",
    'nJvkI': "Cmtdi",
    'rEEyD': function (US, UQ) {
      return US(UQ);
    },
    'xOSlf': "ut:",
    'Yuiul': function (US, UQ) {
      return US(UQ);
    },
    'TArpr': function (US, UQ) {
      return US < UQ;
    },
    'cNkNd': function (US, UQ) {
      return US !== UQ;
    },
    'DfeCU': "cqncQ",
    'vtJZO': "brZfh",
    'UFIaE': function (US, UQ) {
      return US !== UQ;
    },
    'WROVQ': "eSCtM",
    'UeSyR': "kSEqC"
  };
  if (iD) return iD;
  let J = V();
  if (!J) return [];
  let {
      scr_battlegroup: Uf,
      UTOBJ: Ur
    } = J,
    Uo = "      case 1: {\r\n        (G.monstertype ??= [])[0] = 1;\r\n        (G.monstertype ??= [])[1] = 1;\r\n        (G.monstertype ??= [])[2] = 1;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[2] = instance_create(14, 136, OBJ.obj_testmonster);\r\n      case 2: {\r\n        (G.monstertype ??= [])[0] = 2;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_dummymonster);\r\n      case 3: {\r\n        (G.monstertype ??= [])[0] = 3;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_fakefroggit);\r\n      case 4: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n      case 5: {\r\n        (G.monstertype ??= [])[0] = 5;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 16, OBJ.obj_whimsun);\r\n      case 6: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 5;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(317, 16, OBJ.obj_whimsun);\r\n      case 7: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 156, OBJ.obj_moldsmal);\r\n      case 8: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 6;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 156, OBJ.obj_moldsmal);\r\n      case 9: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 4;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_froggit);\r\n      case 10: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 156, OBJ.obj_moldsmal);\r\n      case 11: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 7;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_migosp);\r\n      case 12: {\r\n        (G.monstertype ??= [])[0] = 7;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_migosp);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 13: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 14: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 15: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 7;\r\n        (G.monsterinstance ??= [])[0] = instance_create(14, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[2] = instance_create(422, 136, OBJ.obj_migosp);\r\n      case 16: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 17: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 9;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 124, OBJ.obj_loox);\r\n      case 18: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n      case 19: {\r\n        (G.monstertype ??= [])[0] = 0;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n      case 20: {\r\n        (G.monstertype ??= [])[0] = 11;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 106, OBJ.obj_napstablook);\r\n      case 21: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 22: {\r\n        (G.monstertype ??= [])[0] = 10;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_torielboss);\r\n      case 23: {\r\n        (G.monstertype ??= [])[0] = 13;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(196, 28, OBJ.obj_movedoge);\r\n      case 24: {\r\n        (G.monstertype ??= [])[0] = 14;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_lesserdoge);\r\n      case 25: {\r\n        (G.monstertype ??= [])[0] = 15;\r\n        (G.monstertype ??= [])[1] = 16;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_mandog);\r\n        (G.monsterinstance ??= [])[1] = instance_create(208, 38, OBJ.obj_womandog);\r\n      case 26: {\r\n        (G.monstertype ??= [])[0] = 17;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_greatdog);\r\n      case 27: {\r\n        (G.monstertype ??= [])[0] = 25;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_papyrusboss);\r\n      case 28: {\r\n        (G.monstertype ??= [])[0] = 22;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_gyftrot);\r\n      case 30: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_snowdrake);\r\n      case 31: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_chilldrake);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n      case 32: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_icecap);\r\n      case 33: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_snowdrake);\r\n      case 34: {\r\n        (G.monstertype ??= [])[0] = 21;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 35: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 36: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 18;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_snowdrake);\r\n      case 40: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_aaron);\r\n      case 41: {\r\n        (G.monstertype ??= [])[0] = 24;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_tembattle);\r\n      case 42: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 156, OBJ.obj_moldsmalx);\r\n      case 43: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 136, OBJ.obj_woshua);\r\n      case 44: {\r\n        (G.monstertype ??= [])[0] = 29;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 36, OBJ.obj_shyren);\r\n      case 45: {\r\n        (G.monstertype ??= [])[0] = 31;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 80, OBJ.obj_maddummy);\r\n      case 46: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 28;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_aaron);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 136, OBJ.obj_woshua);\r\n      case 47: {\r\n        (G.monstertype ??= [])[0] = 32;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyneboss);\r\n      case 48: {\r\n        (G.monstertype ??= [])[0] = 33;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_quiz);\r\n        instance_create(412, 126, OBJ.obj_questionasker);\r\n      case 49: {\r\n        (G.monstertype ??= [])[0] = 34;\r\n        (G.monstertype ??= [])[1] = 35;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 34, OBJ.obj_bara01);\r\n        (G.monsterinstance ??= [])[1] = instance_create(432, 34, OBJ.obj_bara02);\r\n      case 50: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n      case 51: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n      case 52: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 7, OBJ.obj_pyrope);\r\n      case 53: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 12;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 156, OBJ.obj_moldsmal);\r\n      case 54: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 23;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_aaron);\r\n      case 55: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 156, OBJ.obj_moldsmalx);\r\n      case 56: {\r\n        (G.monstertype ??= [])[0] = 39;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 37, OBJ.obj_spiderb);\r\n      case 57: {\r\n        (G.monstertype ??= [])[0] = 40;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_second);\r\n      case 58: {\r\n        (G.monstertype ??= [])[0] = 41;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 75, OBJ.obj_undynebattle2);\r\n      case 59: {\r\n        (G.monstertype ??= [])[0] = 42;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(244, 50, OBJ.obj_wizard);\r\n      case 60: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(56, 40, OBJ.obj_finalknight);\r\n      case 61: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_finalfroggit);\r\n      case 62: {\r\n        (G.monstertype ??= [])[0] = 45;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n      case 63: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_whimsalot);\r\n      case 64: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 44;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_finalfroggit);\r\n      case 65: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 66: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 67: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 46;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[2] = instance_create(420, 110, OBJ.obj_whimsalot);\r\n      case 68: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 42;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 50, OBJ.obj_finalknight);\r\n        (G.monsterinstance ??= [])[1] = instance_create(366, 50, OBJ.obj_wizard);\r\n      case 69: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 120, OBJ.obj_battlebomb);\r\n      case 70: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 71: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 72: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 73: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 80, OBJ.obj_battlebomb);\r\n      case 74: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 100, OBJ.obj_battlebomb);\r\n      case 75: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 76: {\r\n        (G.monstertype ??= [])[0] = 49;\r\n        (G.monstertype ??= [])[1] = 48;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 66, OBJ.obj_bara04);\r\n        (G.monsterinstance ??= [])[1] = instance_create(460, 66, OBJ.obj_bara03);\r\n      case 77: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 78: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 38;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 10, OBJ.obj_pyrope);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 10, OBJ.obj_pyrope);\r\n      case 79: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 80: {\r\n        (G.monstertype ??= [])[0] = 50;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(300, 190, OBJ.obj_mettatonb_third);\r\n      case 81: {\r\n        (G.monstertype ??= [])[0] = 51;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 60, OBJ.obj_mettatonex);\r\n      case 82: {\r\n        (G.monstertype ??= [])[0] = 53;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(280, 20, OBJ.obj_lemonbread);\r\n      case 83: {\r\n        (G.monstertype ??= [])[0] = 54;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_reaperbird);\r\n      case 84: {\r\n        (G.monstertype ??= [])[0] = 55;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_snowdrakemom);\r\n      case 85: {\r\n        (G.monstertype ??= [])[0] = 56;\r\n        (G.monstertype ??= [])[1] = 56;\r\n        (G.monstertype ??= [])[2] = 56;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 146, OBJ.obj_memoryhead);\r\n      case 86: {\r\n        (G.monstertype ??= [])[0] = 57;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(180, 90, OBJ.obj_endogeny);\r\n      case 87: {\r\n        (G.monstertype ??= [])[0] = 58;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(296, 70, OBJ.obj_ripoff_undyne);\r\n      case 88: {\r\n        (G.monstertype ??= [])[0] = 60;\r\n        (G.monstertype ??= [])[1] = 61;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(76, 35, OBJ.obj_ripoff_papyrus);\r\n        (G.monsterinstance ??= [])[1] = instance_create(456, 148, OBJ.obj_ripoff_sans);\r\n      case 89: {\r\n        (G.monstertype ??= [])[0] = 59;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 100, OBJ.obj_ripoff_alphys);\r\n      case 90: {\r\n        (G.monstertype ??= [])[0] = 62;\r\n        (G.monstertype ??= [])[1] = 63;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(26, 94, OBJ.obj_ripoff_toriel);\r\n        (G.monsterinstance ??= [])[1] = instance_create(356, 62, OBJ.obj_ripoff_asgore);\r\n      case 91: {\r\n        (G.monstertype ??= [])[0] = 64;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(260, 110, OBJ.obj_mkid_battle);\r\n      case 92: {\r\n        (G.monstertype ??= [])[0] = 65;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyne_ex);\r\n      case 93: {\r\n        (G.monstertype ??= [])[0] = 66;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_gladdummy);\r\n      case 94: {\r\n        (G.monstertype ??= [])[0] = 67;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 0, OBJ.obj_mettaton_neo);\r\n      case 95: {\r\n        (G.monstertype ??= [])[0] = 68;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 110, OBJ.obj_sansb);\r\n      case 100: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 16, OBJ.obj_asgore_finalintro);\r\n      case 101: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 8, OBJ.obj_asgoreb);\r\n        instance_create(0, 0, OBJ.obj_purplegradienter);\r\n        instance_create(0, 0, OBJ.obj_orangeparticlegen);\r\n      case 120: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 121: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(426, 130, OBJ.obj_migospel);\r\n      case 122: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n      case 123: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(118, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 127, OBJ.obj_moldessa);\r\n      case 124: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 125: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 72;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 120, OBJ.obj_whimsalot);\r\n      case 126: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 110, OBJ.obj_finalfroggit);\r\n      case 127: {\r\n        (G.monstertype ??= [])[0] = 72;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(110, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 120, OBJ.obj_parsnik);\r\n      case 128: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 129: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 130: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 120, OBJ.obj_parsnik);\r\n      case 131: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(314, 110, OBJ.obj_astigmatism);\r\n      case 132: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(312, 110, OBJ.obj_astigmatism);\r\n      case 133: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(8, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(213, 130, OBJ.obj_migospel);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 134: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 135: {\r\n        (G.monstertype ??= [])[0] = 76;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(188, 16, OBJ.obj_glydeb);\r\n      case 140: {\r\n        (G.monstertype ??= [])[0] = 80;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 78, OBJ.obj_sosorry);\r\n      case 255: {\r\n        (G.monstertype ??= [])[0] = 99;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(258, 8, OBJ.obj_asrielb);\r\n      case 256: {\r\n        (G.monstertype ??= [])[0] = 100;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(320, 48, OBJ.obj_asrielfinal);\r",
    Uk = new Map();
  for (let US of Uo.split(/case (\d+): \{/).slice(1)) {
    let UQ = {};
    for (let Um of US.matchAll(/monstertype \?\?= \[\]\)\[(\d)\] = (\d+);/g)) UQ[Um[1]] = Number(Um[2]);
    for (let UV of US.matchAll(/monsterinstance \?\?= \[\]\)\[(\d)\] = instance_create\([^,]+,[^,]+, OBJ\.(obj_[a-z0-9_]+)\)/g)) {
      let Uw = UV[2];
      Uk.has(Uw) || !Ur[Uw] || Uk.set(Uw, {
        'key': "ut:" + Uw,
        'engine': 'ut',
        'cls': Ur[Uw],
        'clsName': Uw,
        'type': UQ[UV[1]] || 0,
        'label': iL(Uw)
      });
    }
  }
  let Uh = Uo.split(/case (\d+): \{/);
  for (let UZ = 1; UZ < Uh.length; UZ += 2) {
    let UC = Number(Uh[UZ]),
      UP = [...Uh[UZ + 1].matchAll(/OBJ\.(obj_[a-z0-9_]+)\)/g)].map(Ug => Ug[1]);
    for (let Ug of UP) {
      let Ux = Uk.get(Ug);
      Ux && (Ux.battlegroup === void 0 || UP.length < Ux.groupSize) && (Ux.battlegroup = UC, Ux.groupSize = UP.length);
    }
  }
  return iD = [...Uk.values()].sort((Uv, UT) => Uv.label.localeCompare(UT.label)), iD;
}
a(iy, "rosterUT");
var iu = /^(monster(?!attackname)|mercy|sparepoint|canact|act(name|actor|desc|cost|simul)|xpreward|goldreward|hurtanim|automiss|hittarget$|monsteratk|monsterdef|mnpwr|bulletpwr)/,
  iB = /^(char|hero|control_|input_|acting|temptension|targeted|battle(at|df|mag|spell|actcount)|faceaction|hittarget2|item|spell|msg|flag|tempflag|bmenucoord|menucoord|asc_def|hp$|maxhp|at$|df$|mag$|weapon|armor|choicemsg|othername|cinstance|smxx|smyy|guts|keyitem|litem|phone|pocketitem|currentsong|monsterattackname|idealborder|areapop|attacker|bulletvariable|menuchoice)/,
  iz = new Set();
function ip() {
  let i = [];
  for (let Ur of Object.keys(T)) !Array.isArray(T[Ur]) || iB.test(Ur) || (iu.test(Ur) || iz.has(Ur)) && i.push(Ur);
  return i;
}
a(ip, "perSlotArrays");
function ie() {
  const i = {};
  i.Zllqz = function (Uk, UH) {
    return Uk >= UH;
  };
  i.Wfelx = function (Uk, UH) {
    return Uk <= UH;
  };
  const Uf = i;
  let Ur = [];
  for (let Uk of Object.keys(T)) Array.isArray(T[Uk]) && Uf.Zllqz(T[Uk].length, 3) && Uf.Wfelx(T[Uk].length, 400) && !iB.test(Uk) && Ur.push(Uk);
  return Ur;
}
a(ie, "diffArrays");
function iF(i) {
  return Array.isArray(i) ? i.map(Ur => typeof Ur == "number" ? 0 : typeof Ur == "string" ? '' : Ur === null ? null : iF(Ur)) : i;
}
a(iF, "cloneShape");
function iE(i) {
  const Ur = {
    'TVviT': function (Uo) {
      return Uo();
    },
    'nLHMR': function (Uo, Uk) {
      return Uo === Uk;
    },
    'zMzli': function (Uo, Uk) {
      return Uo(Uk);
    },
    'pyuAN': function (Uo, Uk) {
      return Uo == Uk;
    },
    'ZUzkR': "number",
    'jnHUO': function (Uo, Uk) {
      return Uo == Uk;
    },
    'yKxkP': "string"
  };
  for (let Uo of ip()) {
    let Uk = T[Uo];
    Uk[i] === void 0 && (Uk[i] = Array.isArray(Uk[0]) ? iF(Uk[0]) : typeof Uk[0] == "number" ? 0 : typeof Uk[0] == "string" ? '' : Uk[0] ?? 0);
  }
}
a(iE, "ensureSlot");
function iY(i, J, UU, Uf) {
  const Ur = {
    'qgjTy': function (Uw, UZ) {
      return Uw === UZ;
    },
    'eKpuE': function (Uw, UZ) {
      return Uw(UZ);
    },
    'ErQsi': function (Uw) {
      return Uw();
    },
    'tCkQO': function (Uw, UZ) {
      return Uw !== UZ;
    },
    'YEKGB': function (Uw, UZ) {
      return Uw !== UZ;
    },
    'erNtL': "PhxkQ",
    'hrYTO': "volNJ",
    'aItSq': function (Uw, UZ) {
      return Uw(UZ);
    },
    'uUdHT': function (Uw, UZ) {
      return Uw === UZ;
    },
    'kwaXk': function (Uw, UZ) {
      return Uw === UZ;
    },
    'RbFTh': "jesKF",
    'GSnqA': function (Uw, UZ, UC, UP, Ug) {
      return Uw(UZ, UC, UP, Ug);
    },
    'jCJnl': function (Uw, UZ) {
      return Uw(UZ);
    },
    'ifaUq': function (Uw, UZ) {
      return Uw === UZ;
    },
    'AyxEt': function (Uw, UZ, UC) {
      return Uw(UZ, UC);
    },
    'CcieZ': "bLsgA",
    'uhFOY': "FVCaA",
    'zaYIQ': function (Uw, UZ) {
      return Uw !== UZ;
    },
    'Wtgvd': function (Uw, UZ) {
      return Uw !== UZ;
    },
    'qYTVr': "ItPch",
    'NSsXI': function (Uw, UZ) {
      return Uw !== UZ;
    },
    'bDiqe': function (Uw, UZ) {
      return Uw === UZ;
    }
  };
  Ur.eKpuE(iE, J);
  let Uk = 2,
    UH = Ur.ErQsi(ie),
    Us = {};
  for (let Uw of UH) Us[Uw] = T[Uw][Uk];
  let US = T.monster.slice(0, 3);
  if (Ur.tCkQO(J, Uk)) for (let UZ of UH) {
    if (Ur.YEKGB(Ur.erNtL, Ur.hrYTO)) {
      let UC = T[UZ];
      Array.isArray(UC) && (UC[Uk] = Array.isArray(Us[UZ]) ? Ur.aItSq(iF, Us[UZ]) : void 0);
    } else {
      if (pPtnEN.qgjTy(UU.constructor.name, Uf)) return Ur;
      let UP = Uk._up;
      if (UP && !UP.destroyed && pPtnEN.qgjTy(UP.constructor.name, UH)) return UP;
    }
  }
  T.monstertype[Uk] = i.type, Ur.uUdHT(i.engine, 'dr') && (T.monsterinstancetype[Uk] = i.cls, T.monstermakex[Uk] = UU, T.monstermakey[Uk] = Uf), T.monster[0] = 1, T.monster[1] = 1, T.monster[2] = 0;
  let UQ = Ur.kwaXk(i.engine, 'dr') && Ur.ErQsi(ic),
    Um = null;
  try {
    if (Ur.kwaXk(Ur.RbFTh, Ur.RbFTh)) {
      if (Um = Ur.GSnqA(D, UU, Uf, i.cls, UQ ? {
        '_ch': i.chapter,
        '_enc': Ur.jCJnl(iW, i)
      } : void 0), Um.myself = Uk, Ur.ifaUq(i.engine, 'dr') && Um.userEvent) {
        UQ ? Ur.AyxEt(il, Um, () => Um.userEvent(12)) : Um.userEvent(12);
        let Ug = Ur.aItSq(ia, i);
        Ug && Ur.jCJnl(Ug, Uk);
      }
    } else Uk.instance_destroy();
  } catch {
    if (Ur.ifaUq(Ur.CcieZ, Ur.uhFOY)) {
      let Ux = Uk.monsterinstance[UH];
      Ur.eKpuE(J, Ux) ? Us.set(Us, {
        'inst': Ux,
        'bm': i
      }) : US.delete(UQ);
    } else Um = null;
  }
  if (Ur.zaYIQ(J, Uk)) for (let UG of UH) {
    if (Ur.Wtgvd(Ur.qYTVr, Ur.qYTVr)) Uk.halt = 0x3;else {
      let Un = T[UG];
      if (!Array.isArray(Un)) continue;
      let Uv = Un[Uk];
      Array.isArray(Us[UG]) ? Array.isArray(Uv) && (Un[J] = Uv) : Ur.NSsXI(Uv, void 0) && (Un[J] = Uv, iz.add(UG)), Un[Uk] = Us[UG];
    }
  }
  return T.monster[0] = US[0], T.monster[1] = US[1], T.monster[2] = US[2], Um ? (Um.myself = J, T.monster[J] = 1, T.monstertype[J] = i.type, T.monsterinstance[J] = Um, Ur.bDiqe(i.engine, 'dr') && (T.monsterinstancetype[J] = i.cls, T.monstermakex[J] = UU, T.monstermakey[J] = Uf), Um._customGuest = 1, Um) : null;
}
a(iY, "spawnGuest");
function iO(i, J, UU = i + 1) {
  const Uf = {
    'yVgAW': function (UV, Uw, UZ, UC, UP) {
      return UV(Uw, UZ, UC, UP);
    },
    'wiPEJ': function (UV, Uw) {
      return UV === Uw;
    },
    'dCwqY': "yefHi",
    'LlBls': function (UV, Uw) {
      return UV / Uw;
    },
    'olZik': function (UV, Uw) {
      return UV === Uw;
    },
    'pQHxW': function (UV, Uw) {
      return UV % Uw;
    },
    'wXakS': function (UV, Uw) {
      return UV + Uw;
    },
    'piCgN': function (UV, Uw) {
      return UV - Uw;
    },
    'FanbH': function (UV, Uw) {
      return UV > Uw;
    },
    'OIGar': function (UV, Uw) {
      return UV / Uw;
    },
    'nfBEg': function (UV, Uw) {
      return UV + Uw;
    },
    'hywhr': function (UV, Uw) {
      return UV * Uw;
    },
    'sfYMm': function (UV, Uw) {
      return UV % Uw;
    },
    'VPLxe': function (UV, Uw) {
      return UV <= Uw;
    },
    'TXrgW': function (UV, Uw) {
      return UV <= Uw;
    },
    'KiZHZ': function (UV, Uw) {
      return UV / Uw;
    },
    'BQkjI': function (UV, Uw) {
      return UV / Uw;
    },
    'aACTx': function (UV, Uw) {
      return UV - Uw;
    },
    'ajfeS': function (UV, Uw) {
      return UV - Uw;
    },
    'Bxmqc': function (UV, Uw) {
      return UV * Uw;
    },
    'ThMpt': function (UV, Uw) {
      return UV + Uw;
    },
    'BkzQC': function (UV, Uw) {
      return UV / Uw;
    }
  };
  if (Uf.wiPEJ(J, 'ut')) {
    if (Uf.wiPEJ(Uf.dCwqY, Uf.dCwqY)) {
      let UV = Math.min(Math.max(UU, 1), 8),
        Uw = Math.ceil(Uf.LlBls(UU, UV));
      const UZ = {};
      UZ.x = 0x104, UZ.y = 0x0;
      if (Uf.olZik(UV, 1)) return UZ;
      let UC = Uf.pQHxW(i, UV),
        UP = Math.floor(Uf.LlBls(i, UV)),
        Ug = Uf.LlBls(470, Math.max(1, Uf.wXakS(Uf.piCgN(UV, 1), Uf.FanbH(Uw, 1) ? 0.5 : 0))),
        Ux = Uf.FanbH(Uw, 1) ? Math.min(60, Uf.OIGar(120, Uf.piCgN(Uw, 1))) : 0;
      return {
        'x': Math.round(Uf.wXakS(Uf.nfBEg(10, Uf.hywhr(UC, Ug)), Uf.hywhr(Uf.sfYMm(UP, 2), Uf.LlBls(Ug, 2)))),
        'y': Math.round(Uf.hywhr(UP, Ux))
      };
    } else M = Uf.yVgAW(Uf, A[J], UH, US.x, i.y);
  }
  let UH = Uf.VPLxe(UU, 4) ? 2 : Uf.TXrgW(UU, 12) ? 3 : 4,
    Us = Math.ceil(Uf.LlBls(UU, UH)),
    Uh = Uf.sfYMm(i, UH),
    US = Math.floor(Uf.KiZHZ(i, UH)),
    UQ = Math.min(80, Uf.BQkjI(220, Us)),
    Um = Uf.wXakS(20, Math.max(0, Uf.OIGar(Uf.aACTx(220, Uf.hywhr(Us, UQ)), 2)));
  return {
    'x': Uf.ajfeS(400, Uf.Bxmqc(Uh, 58)),
    'y': Math.round(Uf.nfBEg(Uf.ThMpt(Um, Uf.hywhr(US, UQ)), Uf.Bxmqc(Uf.sfYMm(Uh, 2), Uf.BkzQC(UQ, 2))))
  };
}
a(iO, "guestPosition");
function J0(i, J) {
  const UU = {};
  UU.poZTj = function (Uw, UZ) {
    return Uw !== UZ;
  };
  UU.GMeCr = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.znTGe = function (Uw, UZ) {
    return Uw === UZ;
  }, UU.KOKcH = " blocks the way!", UU.LQfJm = function (Uw, UZ) {
    return Uw === UZ;
  }, UU.wqwTR = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.teaFt = " block the way!", UU.apbXQ = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.yQtjM = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.KLzVx = " and ", UU.DYrPs = function (Uw, UZ) {
    return Uw === UZ;
  }, UU.jfCMC = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.YWntS = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.IJszj = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.jVJpZ = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.jYdpK = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.WHDZe = "A crowd of ", UU.jUTVP = " enemies blocks the way!", UU.rgNhy = "Enemies block the way!", UU.hyhkg = function (Uw, UZ) {
    return Uw === UZ;
  }, UU.nOdCa = function (Uw, UZ) {
    return Uw > UZ;
  }, UU.VmMAM = function (Uw, UZ) {
    return Uw + UZ;
  }, UU.XzLvZ = function (Uw, UZ) {
    return Uw !== UZ;
  }, UU.kNpfg = function (Uw, UZ) {
    return Uw + UZ;
  };
  const Ur = UU;
  let Uo = new Map();
  for (let Uw of i) Uw && Ur.poZTj(Uw, '\x20') && Uo.set(Uw, Ur.GMeCr(Uo.get(Uw) || 0, 1));
  let Uk = [...Uo.entries()].map(([UZ, UC]) => UC > 1 ? UC + '\x20' + UZ + (/s$/.test(UZ) ? '' : 's') : UZ),
    UH = i.length,
    Us;
  if (Uk.length ? Ur.znTGe(UH, 1) ? Us = Ur.GMeCr(Uk[0], Ur.KOKcH) : Ur.LQfJm(Uk.length, 1) ? Us = Ur.wqwTR(Uk[0], Ur.teaFt) : Ur.znTGe(Uk.length, 2) ? Us = Ur.GMeCr(Ur.apbXQ(Ur.yQtjM(Uk[0], Ur.KLzVx), Uk[1]), Ur.teaFt) : Ur.DYrPs(Uk.length, 3) ? Us = Ur.yQtjM(Ur.GMeCr(Ur.jfCMC(Ur.YWntS(Ur.IJszj(Uk[0], ',\x20'), Uk[1]), Ur.KLzVx), Uk[2]), Ur.teaFt) : Us = Ur.jVJpZ(Ur.jYdpK(Ur.WHDZe, UH), Ur.jUTVP) : Us = Ur.rgNhy, Ur.hyhkg(J, 'dr')) return Ur.jfCMC('*\x20', Us);
  let UQ = Us.split('\x20'),
    Um = [],
    UV = '*';
  for (let UZ of UQ) Ur.nOdCa(Ur.VmMAM(Ur.YWntS(UV, '\x20'), UZ).length, 27) && Ur.XzLvZ(UV.trim(), '*') ? (Um.push(UV), UV = Ur.jYdpK('\x20\x20', UZ)) : UV += Ur.kNpfg('\x20', UZ);
  return Um.push(UV), Um.join('&');
}
a(J0, "openingLine");
function J1(i, J) {
  const Ur = {
    'enMSr': function (Uh, US) {
      return Uh < US;
    },
    'DhPAn': function (Uh, US) {
      return Uh === US;
    },
    'seoSa': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'fZmIp': "obj_battlecontroller",
    'HdOgv': function (Uh, US) {
      return Uh !== US;
    },
    'PeUmw': function (Uh, US) {
      return Uh === US;
    },
    'qePuT': function (Uh, US) {
      return Uh === US;
    },
    'nfJoq': "OBJ_WRITER"
  };
  let Uk = [];
  for (let Uh = 0; Uh < T.monster.length; Uh++) T.monster[Uh] === 1 && T.monstername && Uk.push(T.monstername[Uh]);
  let UH = J0(Uk, J);
  if (i.battlemsg = UH, J === 'dr') {
    let US = Array.isArray(T.battlemsg) ? T.battlemsg[0] : void 0;
    Array.isArray(T.battlemsg) ? T.battlemsg[0] = UH : T.battlemsg = [UH];
    let UQ = j.first("obj_battlecontroller");
    US !== UH && UQ && UQ.battlewriter && j.exists(UQ.battlewriter) && T.myfight === 0 && T.mnfight === 0 && UQ.battlewriter.instance_destroy();
    return;
  }
  let Us = j.first("OBJ_WRITER");
  !Us || T.myfight !== 0 || T.mnfight !== 0 || (Array.isArray(Us.mystring) && (Us.mystring[0] = UH), Us.originalstring = UH, Us.stringpos = 0, Us.halt = 0, Array.isArray(T.msg) && (T.msg[0] = UH));
}
a(J1, "setOpeningLine");
function J2(i, J) {
  const UU = {
    'nGKjJ': "obj_battlecontroller",
    'RBQOq': function (UH, Us) {
      return UH !== Us;
    },
    'VHDvb': function (UH, Us) {
      return UH === Us;
    },
    'JXGth': function (UH, Us) {
      return UH === Us;
    },
    'zvNoT': function (UH, Us) {
      return UH < Us;
    },
    'xCzdm': function (UH, Us) {
      return UH / Us;
    },
    'odOTc': function (UH, Us) {
      return UH % Us;
    },
    'zGMPk': function (UH, Us) {
      return UH / Us;
    },
    'cjvVG': function (UH, Us) {
      return UH / Us;
    },
    'JHLCQ': function (UH, Us) {
      return UH + Us;
    },
    'sPlPx': function (UH, Us) {
      return UH - Us;
    },
    'flwQc': function (UH, Us) {
      return UH > Us;
    },
    'zyWwG': function (UH, Us) {
      return UH > Us;
    },
    'evXlD': function (UH, Us) {
      return UH / Us;
    },
    'ZMNOM': function (UH, Us) {
      return UH + Us;
    },
    'esJly': function (UH, Us) {
      return UH + Us;
    },
    'cXlzY': function (UH, Us) {
      return UH * Us;
    },
    'kGjNC': function (UH, Us) {
      return UH % Us;
    },
    'waZYr': function (UH, Us) {
      return UH / Us;
    },
    'Fweic': function (UH, Us) {
      return UH * Us;
    },
    'xurle': function (UH, Us) {
      return UH !== Us;
    },
    'lUuvR': "rNiQo",
    'eRDyg': "AEYPu",
    'kSfsI': function (UH, Us) {
      return UH(Us);
    },
    'DjtLF': function (UH, Us) {
      return UH !== Us;
    },
    'xlqbk': function (UH) {
      return UH();
    },
    'ufuqB': function (UH, Us) {
      return UH === Us;
    },
    'ayduB': function (UH) {
      return UH();
    },
    'iArRq': "eYfyJ",
    'lZOpC': function (UH, Us) {
      return UH(Us);
    },
    'Bgfgr': function (UH) {
      return UH();
    },
    'vmHWj': function (UH, Us) {
      return UH === Us;
    },
    'maCPb': "BFwtj",
    'YAFAi': "wRveb",
    'ImpEj': function (UH, Us) {
      return UH(Us);
    },
    'zOuhh': function (UH, Us) {
      return UH(Us);
    },
    'RDPJi': "rdjDf",
    'nJlbS': function (UH, Us) {
      return UH + Us;
    },
    'dBJvz': "@ch",
    'pVGdA': function (UH, Us) {
      return UH - Us;
    },
    'vnQYs': function (UH, Us) {
      return UH - Us;
    },
    'YaXXN': function (UH, Us) {
      return UH - Us;
    },
    'qmGKk': function (UH, Us) {
      return UH - Us;
    },
    'LACvp': function (UH, Us) {
      return UH < Us;
    },
    'YRvbn': function (UH, Us) {
      return UH - Us;
    },
    'PenmH': function (UH, Us) {
      return UH - Us;
    },
    'pBEMJ': function (UH, Us) {
      return UH + Us;
    },
    'nCtrA': function (UH, Us) {
      return UH * Us;
    },
    'mkPtz': function (UH, Us) {
      return UH + Us;
    },
    'ZCtJs': "custom",
    'rDZhr': function (UH, Us) {
      return UH + Us;
    },
    'SZWCS': "Custom (",
    'iqHsX': " enemies)",
    'REvUK': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'vjHOG': function (UH, Us) {
      return UH(Us);
    },
    'KHiAN': function (UH, Us) {
      return UH(Us);
    },
    'RaPYd': function (UH, Us) {
      return UH + Us;
    },
    'rdDme': function (UH, Us) {
      return UH + Us;
    }
  };
  if (!J.length) return null;
  if (UU.JXGth(i, 'dr')) {
    if (UU.RBQOq(UU.iArRq, UU.iArRq)) {
      j.since === a.actWriters && (i(), i(J, "advanced the text of an ACT/spell phase that did not end")), UU.since >= Uo.actForce && (i4(), i5.since = 0x0, i6(i7, "left a stuck ACT/spell phase"));
      return;
    } else {
      for (let Ux of J.slice()) {
        let UG = UU.lZOpC(ix, Ux);
        if (UG && !J.some(Un => Un.key === UG)) {
          let Un = UU.Bgfgr(iX).find(Uv => Uv.key === UG);
          Un && (J = [...J, Un]);
        }
      }
      if (UU.lZOpC(iG, J.map(Uv => Uv.key))) {
        if (UU.vmHWj(UU.maCPb, UU.YAFAi)) {
          let Uv = i.isArray(J.battlemsg) ? UU.battlemsg[0] : void 0;
          Uo.isArray(i4.battlemsg) ? UH.battlemsg[0] = Us : Uh.battlemsg = [US];
          let UT = UQ.first(aBwEQJ.nGKjJ);
          aBwEQJ.RBQOq(Uv, Um) && UT && UT.battlewriter && UV.exists(UT.battlewriter) && aBwEQJ.VHDvb(Uw.myfight, 0) && aBwEQJ.JXGth(UZ.mnfight, 0) && UT.battlewriter.instance_destroy();
          return;
        } else {
          let UL = UU.ImpEj(iN, J.find(Ud => ix(Ud)) || J[0]),
            UM = Ud => {
              let UD = UL && UL.monsters ? UL.monsters.findIndex(Ut => Ut.type === Ud.type && (typeof Ut.cls == "function" ? Ut.cls.name : String(Ut.cls)) === Ud.clsName) : -1;
              return UU.zvNoT(UD, 0) ? 99 : UD;
            };
          J = J.slice().sort((Ud, UD) => UM(Ud) - UM(UD));
        }
      }
      let UH = J[0],
        Us = UU.zOuhh(iN, UH) || {},
        Uh = [...new Set(J.map(Ud => Ud.chapter))],
        US = Math.max(...Uh),
        UQ = J.slice(0, 3),
        Um = [20, 120, 220],
        UV = [480, 500, 460],
        Uw = [];
      for (let Ud = 0; UU.zvNoT(Ud, UQ.length); Ud++) {
        if (UU.RBQOq(UU.RDPJi, UU.RDPJi)) {
          if (UZ.frame - (UC.forcedAt || -0x3e7) < 0x2d) return;
          let UD = UP();
          Ug(), io.forceCount > 0x0 ? (ik.with('obj_bulletparent', UA => UA.instance_destroy()), iH.with('obj_bulletgenparent', UA => UA.instance_destroy()), is.with('obj_darkener', UA => {
            UA.darken = 0x0;
          }), ih.with('obj_heart', UA => {
            iX(UA.x, UA.y, iq), UA.instance_destroy();
          }), UD && (UD.reset = 0x0, UD.noreturn = 0x0, UD.timeron = 0x1, UD.alarm[0x2] = -0x1), im(), iV(iw, "ended a stuck enemy turn (directly)", iZ)) : (iC.mnfight = 0x2, iP.turntimer = 0x0, UD && (UD.reset = 0x0, UD.noreturn = 0x0, UD.timeron = 0x1), ig(ix, "ended a stuck enemy turn", iG)), iv.forcedAt = iT.frame, iL.forceCount = (iM.forceCount || 0x0) + 0x1, id.pinned = 0x0, iD.resetFrames = 0x0, iA.nrIdle = 0x0;
        } else {
          let UA = UQ[Ud],
            UX = UA.cls && UA.cls.defaultSprite,
            Uq = UX ? q[UU.esJly(UU.nJlbS(UX, UU.dBJvz), UA.chapter)] || q[UX] : null,
            Ut = Uq ? UU.cXlzY(Uq.w, 2) : 80,
            UN = Uq ? UU.cXlzY(Uq.h, 2) : 80,
            UW = Math.max(Ud ? UU.JHLCQ(Uw[UU.pVGdA(Ud, 1)].top, 40) : 0, Math.min(Um[Ud], UU.vnQYs(300, UN))),
            Uj = Math.max(380, Math.min(UV[Ud], UU.YaXXN(636, Ut))),
            Ua = Uw[UU.qmGKk(Ud, 1)];
          Ua && UU.LACvp(UW, UU.YRvbn(Ua.bottom, 24)) && UU.LACvp(Uj, UU.PenmH(UU.ZMNOM(Ua.left, Ua.w), 16)) && (Uj = Math.max(260, UU.pVGdA(UU.YRvbn(Ua.left, Ut), 8))), Uw.push({
            'top': UW,
            'bottom': UU.pBEMJ(UW, UN),
            'left': Uj,
            'w': Ut,
            'oy': Uq ? UU.nCtrA(Uq.oy, 2) : 0,
            'x': UU.mkPtz(Uj, Uq ? UU.nCtrA(Uq.ox || 0, 2) : 0)
          });
        }
      }
      let UZ = UU.VHDvb(J.length, 1) || UU.ImpEj(iG, J.map(UR => UR.key)) && J.every(UR => ij(UR) && iN(UR) === Us),
        UC = (UR, UK) => {
          if (UU.xurle(UU.lUuvR, UU.eRDyg)) {
            let Up = UZ ? UU.kSfsI(ij, UR) : null;
            return Up ? {
              'x': Up.x,
              'y': Up.y
            } : {
              'x': Uw[UK].x,
              'y': UU.JHLCQ(Uw[UK].top, Uw[UK].oy)
            };
          } else {
            let Ue = Uh.min(i.max(UE, 1), 8),
              UF = J.ceil(aBwEQJ.xCzdm(UU, Ue));
            const UE = {};
            UE.x = 0x104, UE.y = 0x0;
            if (aBwEQJ.JXGth(Ue, 1)) return UE;
            let UO = aBwEQJ.odOTc(Uo, Ue),
              f0 = i4.floor(aBwEQJ.zGMPk(UH, Ue)),
              f1 = aBwEQJ.cjvVG(470, Us.max(1, aBwEQJ.JHLCQ(aBwEQJ.sPlPx(Ue, 1), aBwEQJ.flwQc(UF, 1) ? 0.5 : 0))),
              f3 = aBwEQJ.zyWwG(UF, 1) ? Uh.min(60, aBwEQJ.evXlD(120, aBwEQJ.sPlPx(UF, 1))) : 0;
            return {
              'x': US.round(aBwEQJ.ZMNOM(aBwEQJ.esJly(10, aBwEQJ.cXlzY(UO, f1)), aBwEQJ.cXlzY(aBwEQJ.kGjNC(f0, 2), aBwEQJ.waZYr(f1, 2)))),
              'y': UQ.round(aBwEQJ.Fweic(f0, f3))
            };
          }
        },
        UP = J.every(UR => UR.key === J[0].key),
        Ug = {
          ...(UZ ? {
            ...Us
          } : Object.fromEntries(iR.filter(UR => Us[UR] !== void 0 && (UP || !iK.includes(UR))).map(UR => [UR, Us[UR]]))),
          'id': UU.ZCtJs,
          'name': UU.ZMNOM(UU.rDZhr(UU.SZWCS, J.length), UU.iqHsX),
          'customEncounter': true,
          'chapter': US,
          'engineChapter': US,
          'encounterno': Us.encounterno || 0,
          'monsters': UQ.map((UR, UK) => ({
            'cls': UR.cls,
            'type': UR.type,
            ...UC(UR, UK),
            'setup': ia(UR) || (() => {})
          })),
          'guests': J.slice(3),
          'customEngine': 'dr',
          'battlemsg': UU.REvUK(J0, J.map(UR => UR.label), 'dr')
        };
      return UU.vjHOG(ib, {
        'host': US,
        'enc': Ug.encounterno,
        'msg': Ug.battlemsg,
        'chapters': Uh,
        'real': UQ.map(UR => ({
          'cls': UR.cls,
          'ch': UR.chapter,
          'enc': iW(UR)
        })),
        'prime': () => {
          for (let Uu of Uh) UU.DjtLF(Uu, US) && (UU.VHDvb(Uu, 2) && UU.xlqbk(Q), UU.ufuqB(Uu, 3) && UU.ayduB(h), S[Uu] && S[Uu].ensureGlobals());
        }
      }), Ug;
    }
  }
  UU.KHiAN(ib, null);
  let Uo = J[0];
  return {
    ...(H.find(UR => iM(UR) && UR.battlegroup === Uo.battlegroup) || H.find(UR => iM(UR) && UR.battlegroup)),
    'id': UU.ZCtJs,
    'name': UU.RaPYd(UU.rdDme(UU.SZWCS, J.length), UU.iqHsX),
    'customEncounter': true,
    'battlegroup': Uo.battlegroup,
    'guests': J.slice(1),
    'customEngine': 'ut'
  };
}
a(J2, "makeCustomFight");
function J3(i) {
  const UU = {
    'LEXDq': function (US, UQ) {
      return US(UQ);
    },
    'jExly': "info",
    'XCzZe': function (US, UQ) {
      return US + UQ;
    },
    'ttKcZ': function (US, UQ, Um) {
      return US(UQ, Um);
    },
    'prpUi': " takes the whole turn",
    'HSRoK': ": it attacks on turns of its own.",
    'BFFuQ': function (US, UQ) {
      return US === UQ;
    },
    'XjCwX': function (US, UQ) {
      return US === UQ;
    },
    'dSaOw': function (US, UQ) {
      return US === UQ;
    },
    'HamgJ': function (US, UQ) {
      return US == UQ;
    },
    'UoZdT': "number",
    'PnUGc': function (US, UQ) {
      return US / UQ;
    },
    'EXPjB': function (US, UQ) {
      return US != UQ;
    },
    'hXDwS': "object",
    'khgNK': function (US, UQ) {
      return US !== UQ;
    },
    'UrQZN': function (US, UQ) {
      return US(UQ);
    },
    'kOvbB': function (US, UQ) {
      return US === UQ;
    },
    'WBmkF': function (US, UQ) {
      return US === UQ;
    },
    'ubxaU': function (US, UQ) {
      return US % UQ;
    },
    'qPzZT': function (US, UQ) {
      return US + UQ;
    },
    'wAxHN': function (US, UQ) {
      return US - UQ;
    },
    'ADNZf': function (US, UQ) {
      return US > UQ;
    },
    'lBATz': function (US, UQ) {
      return US / UQ;
    },
    'ItBxa': function (US, UQ) {
      return US - UQ;
    },
    'zTkVf': function (US, UQ) {
      return US + UQ;
    },
    'foTiC': function (US, UQ) {
      return US * UQ;
    },
    'wJEqc': function (US, UQ) {
      return US % UQ;
    },
    'jehJx': function (US, UQ) {
      return US / UQ;
    },
    'zcUhO': function (US, UQ) {
      return US * UQ;
    },
    'sSuAr': function (US, UQ) {
      return US <= UQ;
    },
    'VQvhP': function (US, UQ) {
      return US <= UQ;
    },
    'XlexY': function (US, UQ) {
      return US % UQ;
    },
    'bcbxF': function (US, UQ) {
      return US / UQ;
    },
    'pwQnM': function (US, UQ) {
      return US / UQ;
    },
    'rmdcO': function (US, UQ) {
      return US / UQ;
    },
    'nAzAv': function (US, UQ) {
      return US - UQ;
    },
    'hMWYK': function (US, UQ) {
      return US * UQ;
    },
    'IXuJC': function (US, UQ) {
      return US + UQ;
    },
    'POCAf': function (US, UQ) {
      return US * UQ;
    },
    'hVZgN': function (US, UQ) {
      return US / UQ;
    },
    'JoPCX': function (US, UQ) {
      return US === UQ;
    },
    'mNdQM': function (US, UQ) {
      return US < UQ;
    },
    'RRSpo': "uVdSZ",
    'rpVVw': function (US, UQ, Um, UV, Uw) {
      return US(UQ, Um, UV, Uw);
    },
    'mxToZ': "xTTBH",
    'cmGDj': function (US, UQ) {
      return US + UQ;
    },
    'WnXUd': "[custom] could not add ",
    'WrbhL': "wavJj",
    'ldHIk': function (US, UQ, Um, UV) {
      return US(UQ, Um, UV);
    },
    'fdBkd': function (US, UQ) {
      return US !== UQ;
    },
    'UIoKd': "DsYeF",
    'nENwd': function (US, UQ) {
      return US !== UQ;
    },
    'eWxLA': "HqEJM",
    'XfZPo': function (US, UQ) {
      return US + UQ;
    },
    'yjHJp': function (US, UQ) {
      return US + UQ;
    },
    'tHZtR': function (US, UQ) {
      return US > UQ;
    },
    'oBPjR': function (US, UQ) {
      return US !== UQ;
    },
    'zFNUh': "YJmrC",
    'Optkq': "HKBDr",
    'IoaMc': function (US, UQ) {
      return US(UQ);
    }
  };
  if (!i || !i.customEncounter || !i.guests) return 0;
  let Ur = 4,
    Uo = 0,
    Uk = i.customEngine,
    UH = i.guests.slice();
  if (Uk === 'ut') for (let US = 0; US < 3 && UH.length; US++) {
    if (T.monster[US] === 1) continue;
    const UQ = {};
    UQ.x = [216, 418, 14][US], UQ.y = 0x88;
    let Um = UH.shift(),
      UV = UQ,
      Uw = null;
    try {
      Uw = iY(Um, US, UV.x, UV.y);
    } catch (UZ) {
      console.warn("[custom] could not add " + Um.label + ':', UZ);
    }
    Uw && (Uo++, delete Uw._customGuest);
  }
  let Uh = Math.max(...[0, 1, 2].map(UP => {
    let Un = T.monsterinstance[UP];
    return Un && !Un.destroyed && typeof Un.depth == "number" ? Un.depth : -1 / 0;
  }));
  for (let UP = 0; UP < UH.length; UP++) {
    let Ug = iO(UP, Uk, UH.length),
      Ux = null;
    try {
      Ux = iY(UH[UP], Ur, Ug.x, Ug.y);
    } catch (Un) {
      console.warn("[custom] could not add " + UH[UP].label + ':', Un);
    }
    if (!Ux) continue;
    Uo++, Ur++, Number.isFinite(Uh) && typeof Ux.depth == "number" && Ux.depth <= Uh && (Ux.depth = Uh + 1);
    let UG = Ux.sprite_index && q[Ux.sprite_index];
    UG && UG.w && UG.h && (UG.w * Math.abs(Ux.image_xscale || 1) > 180 || UG.h * Math.abs(Ux.image_yscale || 1) > 180) && (Ux.depth = (Ux.depth || 0) + 50);
  }
  try {
    J1(i, Uk);
  } catch {}
  return J6(Uk), Uo;
}
a(J3, "spawnGuests");
function J4() {
  return !!(T.monster && T.monster.__customBoard);
}
a(J4, "isCustomBoard");
function J5() {
  const i = {};
  i.vHWlv = function (UH, Us) {
    return UH < Us;
  };
  i.pWxUj = function (UH, Us) {
    return UH !== Us;
  }, i.qBXHn = "jGyoj", i.QCvec = "JjQYN", i.ykIWp = function (UH, Us) {
    return UH !== Us;
  }, i.zEUkT = function (UH, Us) {
    return UH === Us;
  }, i.hczMZ = function (UH, Us) {
    return UH == Us;
  }, i.GMXgf = "object", i.lxMoB = function (UH, Us) {
    return UH !== Us;
  };
  i.qDeql = "function", i.ffpnj = "obj_monsterparent", i.kCsoP = function (UH, Us) {
    return UH === Us;
  }, i.JRavM = "swTCu", i.qxeRt = "FrpNN", i.bOwCR = "win";
  const Ur = i;
  let Uo = j.self,
    Uk = [];
  for (let UH = 0; Ur.vHWlv(UH, T.monster.length); UH++) {
    if (Ur.pWxUj(Ur.qBXHn, Ur.QCvec)) {
      let Us = T.monsterinstance[UH];
      Ur.ykIWp(UH, 3) && Ur.zEUkT(T.monster[UH], 1) && Us && Ur.hczMZ(typeof Us, Ur.GMXgf) && !Us.destroyed && Ur.lxMoB(Us, Uo) && Uk.push(Us);
    } else i.darken = 0x0;
  }
  if (!Uk.length) return false;
  if (Uo && Ur.hczMZ(typeof Uo.is, Ur.qDeql) && Uo.is(Ur.ffpnj)) {
    try {
      Ur.kCsoP(Ur.JRavM, Ur.qxeRt) ? i.mywriter.instance_destroy() : Uo.scr_monsterdefeat && Uo.scr_monsterdefeat();
    } catch {}
    Uo.destroyed || Uo.instance_destroy();
  }
  return Ur.kCsoP(T.battleover, Ur.bOwCR) && (T.battleover = null), true;
}
a(J5, "customEndcombat");
function J6(i) {
  const UU = {
    'KKvlW': function (UH, Us) {
      return UH === Us;
    },
    'JALNO': function (UH, Us) {
      return UH - Us;
    },
    'KLXzw': function (UH, Us) {
      return UH !== Us;
    },
    'iSQlB': function (UH, Us) {
      return UH == Us;
    },
    'nPiAD': function (UH, Us) {
      return UH === Us;
    },
    'DeBDi': "oghom",
    'cciUh': "Ewcix",
    'obNqX': function (UH, Us) {
      return UH === Us;
    },
    'kTABW': "__customBoard",
    'XhwpH': "__raw",
    'GmRCy': function (UH, Us) {
      return UH !== Us;
    },
    'XAves': "qDpbN",
    'hcBwj': function (UH, Us) {
      return UH < Us;
    },
    'lZVxS': function (UH, Us) {
      return UH === Us;
    },
    'Qqwuj': "tQwEq",
    'NQsBG': "sZcBz",
    'nwZFt': function (UH, Us) {
      return UH === Us;
    },
    'RJCpM': function (UH, Us) {
      return UH == Us;
    },
    'VBMpB': "object",
    'szcov': function (UH) {
      return UH();
    },
    'fkrWG': "self",
    'FieUQ': function (UH, Us) {
      return UH(Us);
    },
    'JgmOZ': function (UH, Us) {
      return UH === Us;
    },
    'nsZuh': "string",
    'edDAn': function (UH, Us) {
      return UH(Us);
    },
    'uboOK': function (UH, Us) {
      return UH > Us;
    },
    'vkqlQ': function (UH, Us) {
      return UH >= Us;
    },
    'FvXyM': function (UH, Us) {
      return UH !== Us;
    },
    'nQOHQ': function (UH, Us) {
      return UH(Us);
    },
    'jtLww': function (UH) {
      return UH();
    },
    'QtZsN': function (UH, Us) {
      return UH === Us;
    },
    'VdFZH': "vzAYp",
    'rTXJm': "ivErq",
    'vvwvb': function (UH, Us) {
      return UH == Us;
    },
    'IcKiG': function (UH, Us) {
      return UH !== Us;
    }
  };
  v.customEndcombat = J5, v.customScroll = Jb, v.customTargetPicked = JI, v.customEndturn = JU, v.customHidden = Jl, J7 = [];
  for (let UH = 0; UH < T.monster.length; UH++) {
    let UV = T.monsterinstance[UH];
    UV && typeof UV == "object" && !UV.destroyed && UH !== 3 && J7.push(UV);
  }
  J8.clear();
  let Uo = T.monster;
  if (!Uo || Uo.__customBoard) return;
  let Uk = Uw => Uw && typeof Uw.is == "function" && Uw.is("obj_monsterparent");
  T.monster = new Proxy(Uo, {
    'get'(Uw, UZ) {
      return UZ === "__customBoard" ? true : UZ === "__raw" ? Uw : Reflect.get(Uw, UZ);
    },
    'set'(Uw, UZ, UC) {
      const UP = {
        'eCQit': function (Un, Uv) {
          return Un === Uv;
        },
        'Ltzbz': function (Un) {
          return Un();
        },
        'FXGRu': "self",
        'eCdGX': function (Un, Uv) {
          return Un(Uv);
        }
      };
      if (UC === 0 && typeof UZ == "string" && /^\d+$/.test(UZ) && Uw[UZ] === 1) {
        let Un = Number(UZ),
          Uv = T.monsterinstance[Un],
          UT = j.self,
          UL = Uv && typeof Uv == "object" && !Uv.destroyed && T.monsterhp[Un] > 0 && !(T.mercymod[Un] >= (T.mercymax[Un] || 100)),
          UM = () => {
            for (let Ut = 0; Ut < Uw.length; Ut++) {
              if (Ut === 3 || Ut === Un || Uw[Ut] !== 1) continue;
              let UR = T.monsterinstance[Ut];
              if (UR && typeof UR == "object" && !UR.destroyed) return true;
            }
            return false;
          };
        if (UL && UT !== Uv && (Uk(UT) || T.myfight === 7 && T.mnfight === -1 && UM())) return Jr.push({
          'slot': Un,
          'by': UT && UT.constructor ? UT.constructor.name : '?',
          'frame': j.frame
        }), true;
      }
      return Reflect.set(Uw, UZ, UC);
    }
  });
}
a(J6, "armBoard");
var J7 = [],
  J8 = new Map(),
  J9 = a(i => i && typeof i == "object" && !i.destroyed && typeof i.myself == "number" && T.monster[i.myself] === 1 && T.monsterinstance[i.myself] === i, "aliveEnemy");
function Ji(i, J) {
  const Uf = {
    'mtJws': function (Uh, US) {
      return Uh === US;
    },
    'nIIKi': function (Uh, US) {
      return Uh != US;
    },
    'hhYBY': "number",
    'CoKCO': function (Uh, US) {
      return Uh !== US;
    },
    'kwiKD': function (Uh, US) {
      return Uh !== US;
    },
    'mnVku': function (Uh, US) {
      return Uh == US;
    },
    'rYYDU': "function",
    'AvPhb': "obj_monsterparent",
    'GTiAz': function (Uh, US) {
      return Uh === US;
    },
    'eAFvI': function (Uh) {
      return Uh();
    },
    'vFcDO': "monster",
    'VxJuO': function (Uh) {
      return Uh();
    }
  };
  if (i === J) return;
  let Ur = T.monsterinstance[i],
    Uo = T.monsterinstance[J],
    Uk = [];
  for (let Uh of j.list) Uh.destroyed || typeof Uh.myself != "number" || Uh !== Ur && Uh !== Uo && !(typeof Uh.is == "function" && Uh.is("obj_monsterparent")) || (Uh.myself === i ? Uk.push([Uh, J]) : Uh.myself === J && Uk.push([Uh, i]));
  for (let US of ip()) {
    let UQ = US === "monster" ? Jf() : T[US];
    if (!Array.isArray(UQ)) continue;
    let Um = UQ[i];
    UQ[i] = UQ[J], UQ[J] = Um;
  }
  for (let [UV, Uw] of Uk) UV.myself = Uw;
}
a(Ji, "swapSlots");
function JJ() {
  const J = {
    'tVaRN': function (Ur, Uo) {
      return Ur < Uo;
    },
    'JlZTO': function (Ur, Uo) {
      return Ur(Uo);
    }
  };
  for (let Ur = 0; Ur < T.monster.length; Ur++) {
    let Uo = T.monsterinstance[Ur];
    J9(Uo) && !J7.includes(Uo) && J7.push(Uo);
  }
  return J7.filter(J9);
}
a(JJ, "livingOnBoard");
function Jl() {
  const i = {
    'tArzY': function (Uo) {
      return Uo();
    },
    'RdxSn': function (Uo, Uk) {
      return Uo - Uk;
    },
    'gfWTy': function (Uo) {
      return Uo();
    }
  };
  if (!J4()) return 0;
  let Ur = [0, 1, 2].filter(Uo => T.monster[Uo] === 1).length;
  return Math.max(0, JJ().length - Ur);
}
a(Jl, "hiddenEnemies");
function Jc(i) {
  const J = {
    'CvLZD': function (Um) {
      return Um();
    },
    'SNdaw': function (Um, UV) {
      return Um <= UV;
    },
    'DfyLB': function (Um, UV) {
      return Um > UV;
    },
    'WtEsu': function (Um, UV) {
      return Um - UV;
    },
    'serVU': function (Um, UV) {
      return Um === UV;
    },
    'SdpkS': "DGuDT",
    'SZvfM': "jFfmG",
    'BQLur': function (Um, UV) {
      return Um % UV;
    },
    'BPPdE': function (Um, UV) {
      return Um + UV;
    },
    'BVtPo': function (Um, UV) {
      return Um % UV;
    },
    'kVyia': function (Um, UV) {
      return Um + UV;
    },
    'ikzUf': function (Um, UV) {
      return Um * UV;
    },
    'BPqOb': function (Um, UV) {
      return Um > UV;
    },
    'Fxaub': function (Um, UV) {
      return Um < UV;
    },
    'PXwZM': function (Um, UV) {
      return Um !== UV;
    },
    'ZGEMx': function (Um, UV, Uw) {
      return Um(UV, Uw);
    }
  };
  let UU = JJ(),
    Uf = [0, 1, 2].filter(Um => T.monster[Um] === 1);
  if (!Uf.length || UU.length <= Uf.length) return false;
  let Uo = Uf.map(Um => T.monsterinstance[Um]),
    Uk = UU.length,
    UH = UU.indexOf(i > 0 ? Uo[Uo.length - 1] : Uo[0]),
    Us = null;
  for (let Um = 1; Um <= Uk && !Us; Um++) {
    let UV = UU[((UH + i * Um) % Uk + Uk) % Uk];
    Uo.includes(UV) || (Us = UV);
  }
  if (!Us) return false;
  let Uh = i > 0 ? [...Uo.slice(1), Us] : [Us, ...Uo.slice(0, -1)];
  for (let Uw = 0; Uw < Uf.length; Uw++) T.monsterinstance[Uf[Uw]] !== Uh[Uw] && Ji(Uf[Uw], Uh[Uw].myself);
  return true;
}
a(Jc, "scrollBoard");
function Jb(i, J, UU) {
  const Uf = {
    'ENhmu': function (UQ, Um) {
      return UQ > Um;
    },
    'bklyS': function (UQ, Um) {
      return UQ < Um;
    },
    'eAidA': function (UQ, Um) {
      return UQ(Um);
    },
    'MoXsC': function (UQ, Um) {
      return UQ - Um;
    }
  };
  let Uo = T.bmenucoord,
    Uk = [0, 1, 2].filter(UQ => T.monster[UQ] === 1);
  if (!Uk.length || !Uo[i]) return false;
  let UH = Uo[i][J];
  if (UU > 0 && Uk.some(UQ => UQ > UH) || UU < 0 && Uk.some(UQ => UQ < UH) || !Jc(UU)) return false;
  let Uh = [0, 1, 2].filter(UQ => T.monster[UQ] === 1);
  return Uo[i][J] = UU > 0 ? Uh[Uh.length - 1] : Uh[0], true;
}
a(Jb, "customScroll");
function JI(i, J, UU) {
  const Ur = {
    'LFEym': function (Us, Uh) {
      return Us(Uh);
    }
  };
  let UH = T.monsterinstance[UU];
  J9(UH) ? J8.set(J, {
    'inst': UH,
    'bm': i
  }) : J8.delete(J);
}
a(JI, "customTargetPicked");
function JU() {
  const i = {
    'Nvlwp': function (Uk, UH) {
      return Uk > UH;
    },
    'VaLBq': function (Uk, UH) {
      return Uk === UH;
    },
    'WuWwY': function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    'fPHeC': function (Uk, UH) {
      return Uk === UH;
    },
    'eXjNE': function (Uk, UH) {
      return Uk === UH;
    }
  };
  let J = [...J8.entries()].filter(([, Uk]) => J9(Uk.inst)),
    UU = new Set(J.map(([, Uk]) => Uk.inst));
  for (let [Uk, UH] of J) {
    let Us = UH.inst.myself;
    if (Us > 2) {
      let Uh = [0, 1, 2].find(US => !UU.has(T.monsterinstance[US]));
      if (Uh === void 0) continue;
      Ji(Uh, Us), Us = Uh;
    }
    UH.bm === 11 || UH.bm === 13 ? Array.isArray(T.actingtarget) && (T.actingtarget[Uk] = Us) : T.chartarget[Uk] = Us;
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
const Jk = {};
Jk.partner = "obj_musical_controller";
const JH = {};
JH.introcon = 0x3, JH.phase4introcon = 0x0;
const Js = {};
Js.intro = JH;
const Jh = {};
Jh.done_intro = true;
const JS = {};
JS.intro = Jh;
const JQ = {};
JQ.introcon = 0x0;
const Jm = {};
Jm.intro = JQ;
const JV = {};
JV.gersonintro = 0x2;
const Jw = {};
Jw.intro = JV;
const JC = {};
JC.obj_hatguy_enemy = Jk, JC.obj_pink_enemy = Js, JC.obj_blue_enemy = JS, JC.obj_holywatercooler_enemy = Jm, JC.obj_balthizard_enemy = Jw;
var JP = 0.25,
  Jg = JC,
  Jx = /^obj_(heart|yheart|purpleheart|greenheart|blueheart)$/,
  JG = a(i => i && typeof i == "object" && !i.destroyed, "alive"),
  Jn = a((i, J) => i && typeof i.is == "function" && i.is(J), "isA"),
  Jv = a(i => Jn(i, "obj_writer") || Jn(i, "obj_base_writer") || /^OBJ_(INSTA|NOMSC)?WRITER$/.test(i.constructor.name), "isWriter"),
  JT = a(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || Jn(i, "obj_battleblcon"), "isBalloon"),
  JL = new WeakMap();
function JM(i) {
  const UU = {
    'WVoWY': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'oFlLR': function (UH, Us) {
      return UH(Us);
    },
    'iFjTN': function (UH, Us) {
      return UH(Us);
    },
    'sQScH': function (UH, Us) {
      return UH === Us;
    },
    'SHFLX': "lMTZZ",
    'ZJQwf': "ORDiX",
    'zkdum': function (UH) {
      return UH();
    },
    'pNYZF': function (UH) {
      return UH();
    },
    'syJJo': function (UH, Us) {
      return UH !== Us;
    },
    'tNtbt': "buSKF"
  };
  let Uf = i.constructor;
  if (JL.has(Uf)) return JL.get(Uf);
  let Uo = null;
  try {
    let Us = T.monstertype && T.monstertype[i.myself],
      Uh = i._ch ?? T.chapter,
      US = iX().filter(UV => UV.cls === Uf || UV.clsName === Uf.name),
      UQ = US.filter(UV => UV.cls === Uf || UV.chapter === Uh),
      Um = UQ.length ? UQ : US;
    Uo = Um.find(UV => UV.type === Us) || Um[0] || iy().find(UV => UV.cls === Uf || UV.clsName === Uf.name) || null;
  } catch {
    Uo = null;
  }
  return JL.set(Uf, Uo), Uo;
}
a(JM, "entryOf");
function Jd(i) {
  const UU = {
    'RBcuP': function (Us, Uh) {
      return Us(Uh);
    },
    'xnLNi': function (Us, Uh) {
      return Us && Uh;
    },
    'RGyne': function (Us, Uh) {
      return Us || Uh;
    }
  };
  let Uo = JM(i),
    Uk = Uo && is(Uo) || null,
    UH = Jg[i.constructor.name];
  return Uk && UH ? {
    ...UH,
    ...Uk
  } : Uk || UH || null;
}
a(Jd, "rowOf");
var JD = new WeakMap();
function JA(i) {
  const Ur = {
    'ZBXsC': function (UH, Us) {
      return UH(Us);
    },
    'avEtY': function (UH, Us) {
      return UH === Us;
    },
    'HLLeM': "regular",
    'LKTsj': "alone",
    'KVhxT': "owner"
  };
  let Uo = JM(i),
    Uk = Uo ? ih(Uo) : null;
  return (!Uk || Uk === "regular") && (Uk = JD.get(i.constructor) || Uk || "regular"), Uk === "alone" || Uk === "owner" ? "owner" : "regular";
}
a(JA, "roleOf");
function JX() {
  const J = {
    'uxCCK': function (Uk, UH) {
      return Uk < UH;
    },
    'rKikj': function (Uk, UH) {
      return Uk === UH;
    },
    'vdVlJ': function (Uk, UH) {
      return Uk !== UH;
    },
    'Nwypi': function (Uk, UH) {
      return Uk(UH);
    },
    'BYGQY': function (Uk, UH) {
      return Uk !== UH;
    },
    'xgmep': function (Uk, UH) {
      return Uk === UH;
    }
  };
  let UU = T.__boardSched,
    Uf = [];
  for (let Uk = 0; Uk < T.monster.length; Uk++) {
    if (Uk === 3 || T.monster[Uk] !== 1) continue;
    let UH = T.monsterinstance[Uk];
    !JG(UH) || UH.myself !== Uk || UH._quarantined || (UH._schedSeq === void 0 && (UH._schedSeq = UU.seq++), Uf.push(UH));
  }
  return Uf.sort((Us, Uh) => Us._schedSeq - Uh._schedSeq);
}
a(JX, "boardEnemies");
var Jq = -1,
  Jt = null,
  JN = false;
function JW() {
  const Uf = {
    'YCYHx': function (Ur, Uo) {
      return Ur !== Uo;
    },
    'DEWRk': function (Ur) {
      return Ur();
    }
  };
  return (Jq !== j.frame || Jt !== T.__boardSched) && (Jq = j.frame, Jt = T.__boardSched, JN = JX().some(Ur => Ur._schedAtk === 1)), JN;
}
a(JW, "attackerStanding");
function Jj(i) {
  const J = {
    'SpDTV': function (Uo, Uk) {
      return Uo(Uk);
    },
    'gABbV': function (Uo, Uk) {
      return Uo == Uk;
    },
    'NDlAu': "function",
    'qjAnR': function (Uo, Uk) {
      return Uo < Uk;
    },
    'VjGyx': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'DlQzk': "tZRuO",
    'NKODw': function (Uo, Uk) {
      return Uo === Uk;
    },
    'XTMLE': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'ZGAjd': function (Uo, Uk) {
      return Uo(Uk);
    },
    'HbXhg': function (Uo, Uk) {
      return Uo !== Uk;
    }
  };
  for (let Uo = 0; Uo < T.monster.length; Uo++) {
    if (Uo === 3 || T.monster[Uo] !== 1) continue;
    let UH = T.monsterinstance[Uo];
    if (JG(UH) && UH !== i && UH._schedHelperOf !== i) return true;
  }
  return false;
}
a(Jj, "othersStanding");
var Ja = a(i => i ? T.mnfight === 1 || T.mnfight === 2 : T.mnfight >= 1 && T.mnfight <= 2, "inEnemyPhase");
function JR(i) {
  const J = {
    'HuAyQ': function (US, UQ) {
      return US === UQ;
    },
    'MSxBM': function (US) {
      return US();
    },
    'IjjAX': function (US, UQ) {
      return US(UQ);
    },
    'xkVyc': function (US, UQ) {
      return US % UQ;
    },
    'tHITw': function (US, UQ) {
      return US > UQ;
    },
    'tQXRi': function (US, UQ) {
      return US < UQ;
    },
    'fdwqX': function (US, UQ) {
      return US % UQ;
    },
    'tNCYt': function (US, UQ) {
      return US + UQ;
    },
    'xWnHD': function (US, UQ, Um) {
      return US(UQ, Um);
    }
  };
  i.live = 1, i.turn++, i.bullets = 0, i.planFrame = j.frame;
  let Ur = i.ut === 1,
    Uo = JX(),
    Uk = Uo.filter(US => JA(US) === "owner"),
    UH = Uo.filter(US => JA(US) !== "owner"),
    Us = [];
  if (iG(Uo.map(US => (JM(US) || {}).key))) Us = Uo, i.ownerTurn = 0;else {
    if (Uk.length && (!UH.length || i.turn % 2 === 1)) Us = [Uk[i.owner % Uk.length]], i.owner++, i.ownerTurn = 1;else {
      if (UH.length) {
        let US = i.cap > 0 ? i.cap : UH.length;
        for (let UQ = 0; UQ < UH.length && Us.length < US; UQ++) Us.push(UH[(i.reg + UQ) % UH.length]);
        i.reg = (i.reg + Us.length) % UH.length, i.ownerTurn = 0;
      }
    }
  }
  i.attackers = Us.length;
  for (let Um of Uo) {
    let UV = Us.includes(Um);
    if (Um._schedAtk = UV ? 1 : 0, Um._schedRest = UV ? 0 : 1, UV) {
      !Ur && Um.talked === 0 && (Um.rtimer = 0);
      continue;
    }
    JK(Um, Ur);
  }
}
a(JR, "plan");
function JK(i, J) {
  const Uf = {};
  Uf.HiWBQ = function (UH, Us) {
    return UH === Us;
  }, Uf.zHwQJ = function (UH, Us) {
    return UH === Us;
  };
  const Uo = Uf;
  (Uo.HiWBQ(i.attacked, 0) || Uo.zHwQJ(i.attacked, void 0)) && (i.attacked = 1, i._schedSetA = 1), !J && (Uo.HiWBQ(i.talked, 0) || Uo.HiWBQ(i.talked, void 0)) && (i.talked = JP, i._schedSetT = JP);
}
a(JK, "rest");
function Jy(i) {
  const J = {};
  J.kwIPt = function (Uk, UH) {
    return Uk < UH;
  }, J.mkDId = function (Uk, UH) {
    return Uk + UH;
  };
  J.zoHBu = function (Uk, UH) {
    return Uk + UH;
  }, J.exseH = function (Uk, UH) {
    return Uk !== UH;
  };
  J.gwzSI = "dHnGJ", J.oHInW = "FdYgm", J.CjNdw = function (Uk, UH) {
    return Uk === UH;
  }, J.KybHC = function (Uk, UH) {
    return Uk !== UH;
  };
  const Uo = J;
  if (i.live) {
    if (Uo.exseH(Uo.gwzSI, Uo.oHInW)) {
      i.live = 0, i.attackers = 0;
      for (let Uk of j.list) Uk.destroyed || (Uk._schedSetA && (Uo.CjNdw(Uk.attacked, 1) && (Uk.attacked = 0), Uk._schedSetA = void 0), Uk._schedSetT && (Uo.CjNdw(Uk.talked, Uk._schedSetT) && (Uk.talked = 0), Uk._schedSetT = void 0), Uo.KybHC(Uk._schedAtk, void 0) && (Uk._schedAtk = void 0, Uk._schedRest = void 0));
    } else i0.outFrames = Uo.kwIPt(i1.turntimer, 1) ? Uo.mkDId(i2.outFrames || 0, 1) : 0, !(Uo.kwIPt(i3.outFrames, 10) || i4.list.some(UH => ib(UH) && UH._schedBy && UH._schedBy._schedAtk === 1 && UH._schedBorn >= iI.planFrame && !iU(UH, "obj_monsterparent") && io(UH))) && (i9.turntimer = -1, ii.mnfight = 3, iJ.outFrames = 0, il.turnsOver = Uo.zoHBu(ic.turnsOver || 0, 1));
  }
}
a(Jy, "endPlan");
function Ju(i, J) {
  const UU = {};
  UU.tELgI = function (UH, Us) {
    return UH < Us;
  }, UU.QmSrI = function (UH, Us) {
    return UH != Us;
  };
  UU.gXZrm = "number";
  UU.TtZUH = function (UH, Us) {
    return UH != Us;
  }, UU.CauPu = function (UH, Us) {
    return UH < Us;
  }, UU.AKySb = function (UH, Us) {
    return UH >= Us;
  }, UU.AXnLH = function (UH, Us) {
    return UH + Us;
  };
  const Uk = UU;
  Uk.tELgI(i.attackers, 2) || Uk.QmSrI(typeof J, Uk.gXZrm) || Uk.TtZUH(typeof T.turntimer, Uk.gXZrm) || !Uk.CauPu(T.turntimer, J) || Uk.AKySb(J, 900) || (T.turntimer = J, i.merged = Uk.AXnLH(i.merged || 0, 1));
}
a(Ju, "mergeTimer");
const JB = {};
JB.by = null, JB.ending = false;
var Jz = Symbol("boardStep"),
  Jp = JB;
function Je(i) {
  const J = {
    'EOtwW': function (Us, Uh) {
      return Us === Uh;
    },
    'vApjG': function (Us, Uh) {
      return Us(Uh);
    },
    'HDddN': function (Us, Uh) {
      return Us == Uh;
    },
    'NaEtK': "number",
    'asLtv': function (Us, Uh) {
      return Us == Uh;
    },
    'xWiqQ': "string",
    'vGudq': function (Us, Uh) {
      return Us !== Uh;
    },
    'BcFXl': "undefined",
    'GEClN': "object",
    'lLQFV': "function",
    'YYYrs': function (Us, Uh) {
      return Us === Uh;
    },
    'dOOQM': "log",
    'EwKpc': "warn",
    'JThck': "info",
    'peOYC': "error",
    'XFsth': "exception",
    'VPvbu': "table",
    'DnImQ': "trace",
    'JbxbQ': function (Us, Uh) {
      return Us < Uh;
    },
    'LSrBm': function (Us, Uh) {
      return Us > Uh;
    },
    'XtSaf': function (Us, Uh) {
      return Us < Uh;
    },
    'xxWTw': function (Us, Uh) {
      return Us - Uh;
    },
    'bbGgF': function (Us, Uh) {
      return Us !== Uh;
    },
    'XTjvu': "POmqU",
    'PWFmY': function (Us) {
      return Us();
    },
    'vzRkp': function (Us, Uh, US, UQ) {
      return Us(Uh, US, UQ);
    },
    'EsyKj': "bvcHl",
    'nIqDm': "hrtmO",
    'jKLlr': "DlBxi",
    'lmSgn': function (Us, Uh) {
      return Us !== Uh;
    },
    'ayRAE': "hDCLR",
    'ugoNC': "oHHRi",
    'RNlni': function (Us, Uh) {
      return Us !== Uh;
    },
    'yEBYV': function (Us, Uh) {
      return Us(Uh);
    },
    'lMVoV': function (Us, Uh, US, UQ) {
      return Us(Uh, US, UQ);
    },
    'rMhhC': function (Us, Uh) {
      return Us > Uh;
    },
    'GBivB': "xWtoh",
    'OHFoy': function (Us, Uh) {
      return Us(Uh);
    },
    'kvWhb': function (Us, Uh) {
      return Us === Uh;
    },
    'EqjYi': function (Us, Uh) {
      return Us === Uh;
    },
    'JcQVC': function (Us, Uh) {
      return Us(Uh);
    },
    'qllRa': function (Us, Uh) {
      return Us - Uh;
    },
    'UuPte': function (Us, Uh) {
      return Us - Uh;
    },
    'ftSYR': function (Us, Uh) {
      return Us !== Uh;
    },
    'IGTCS': function (Us, Uh) {
      return Us === Uh;
    },
    'hbONz': function (Us, Uh) {
      return Us == Uh;
    },
    'HyqbS': function (Us, Uh) {
      return Us !== Uh;
    },
    'uOktO': function (Us, Uh) {
      return Us !== Uh;
    },
    'ytfds': function (Us, Uh) {
      return Us === Uh;
    },
    'EbCsB': "rIdKy",
    'pDmEc': "bfVeB",
    'rTNSc': function (Us) {
      return Us();
    },
    'zqlds': function (Us, Uh) {
      return Us(Uh);
    },
    'tjBZz': function (Us, Uh) {
      return Us(Uh);
    },
    'Tlikm': function (Us, Uh) {
      return Us(Uh);
    },
    'faESe': function (Us) {
      return Us();
    },
    'jdASl': function (Us, Uh) {
      return Us !== Uh;
    },
    'VUjRz': function (Us, Uh) {
      return Us === Uh;
    },
    'hlzaX': function (Us, Uh, US) {
      return Us(Uh, US);
    },
    'igZDF': function (Us, Uh) {
      return Us === Uh;
    },
    'USiUy': "hrrVu",
    'zwjpD': "wtvMa",
    'ZWJzc': function (Us, Uh) {
      return Us === Uh;
    },
    'VFEBf': function (Us, Uh) {
      return Us === Uh;
    },
    'IBQpm': function (Us, Uh) {
      return Us === Uh;
    },
    'teyEe': function (Us, Uh) {
      return Us === Uh;
    },
    'sOYcF': function (Us, Uh) {
      return Us === Uh;
    },
    'Pomez': function (Us, Uh, US) {
      return Us(Uh, US);
    },
    'khavY': function (Us, Uh) {
      return Us === Uh;
    },
    'zfCBf': function (Us, Uh) {
      return Us > Uh;
    },
    'iazVT': function (Us, Uh) {
      return Us === Uh;
    },
    'PqzIu': function (Us) {
      return Us();
    },
    'jBNbH': function (Us, Uh) {
      return Us !== Uh;
    },
    'jzZGe': function (Us, Uh) {
      return Us + Uh;
    },
    'aMfqS': function (Us, Uh) {
      return Us === Uh;
    },
    'HmkyH': function (Us, Uh) {
      return Us > Uh;
    },
    'eqbZZ': function (Us, Uh) {
      return Us === Uh;
    },
    'zYydZ': function (Us, Uh) {
      return Us(Uh);
    },
    'xqwlC': function (Us, Uh) {
      return Us - Uh;
    },
    'GbBGH': function (Us, Uh) {
      return Us && Uh;
    },
    'UDnIX': function (Us, Uh) {
      return Us === Uh;
    },
    'sSxPG': "ut-win",
    'wLVKA': function (Us, Uh) {
      return Us === Uh;
    },
    'VPzxI': function (Us, Uh) {
      return Us(Uh);
    },
    'DKQus': "obj_battlecontroller",
    'OhQRz': function (Us, Uh) {
      return Us !== Uh;
    },
    'LfKVG': function (Us, Uh) {
      return Us === Uh;
    },
    'JuWSY': function (Us, Uh) {
      return Us != Uh;
    },
    'CKpdS': function (Us, Uh) {
      return Us == Uh;
    }
  };
  let UU = i && i.prototype;
  if (!UU || Object.prototype.hasOwnProperty.call(UU, Jz) || typeof UU.step != "function") return;
  let Uo = UU.step;
  UU[Jz] = 1;
  let Uk = UU.alarmEvent;
  typeof Uk == "function" && (UU.alarmEvent = function (...Us) {
    const Uh = {
      'HITzR': function (UV, Uw) {
        return UV !== Uw;
      },
      'gkFaX': "undefined",
      'VXMnZ': function (UV, Uw) {
        return UV === Uw;
      },
      'WevzV': "object",
      'iDtiy': "function",
      'GrlXm': function (UV, Uw) {
        return UV === Uw;
      },
      'ziUXh': "log",
      'Cypgz': "warn",
      'IOiVV': "info",
      'HYSEY': "error",
      'hKKLe': "exception",
      'xoTFH': "table",
      'xAYTT': "trace",
      'FeweA': function (UV, Uw) {
        return UV < Uw;
      },
      'UrIxn': function (UV, Uw) {
        return UV > Uw;
      },
      'waLWy': function (UV, Uw) {
        return UV < Uw;
      },
      'iLjli': function (UV, Uw) {
        return UV(Uw);
      },
      'Zmfun': function (UV, Uw) {
        return UV - Uw;
      }
    };
    let UG = T.__boardSched;
    if (!UG || !J4()) return Uk.apply(this, Us);
    let Un = j.spawns,
      Uv = T.battleover,
      UT = T.fighting;
    if (JF(UG, this, Us[0])) {
      this.alarm[5] = 1;
      return;
    }
    let UL = Jp.by,
      UM = Jp.ending;
    Jp.by = this, Jp.ending = false;
    try {
      return Uk.apply(this, Us);
    } finally {
      let UD = Jp.ending;
      if (Jp.by = UL, Jp.ending = UM, UG.ut !== 1 && UD && Jj(this) && l4(this, Uv, UT), j.spawns > Un) {
        let UA = this._schedHelperOf && JG(this._schedHelperOf) ? this._schedHelperOf : this;
        UG.ut === 1 && UG.live && UA._schedRest === 1 && JY(j.spawns - Un);
        for (let UX of j.list.slice(-(j.spawns - Un))) UX !== this && UX._schedBy === void 0 && (UX._schedBy = UA, UX._schedBorn = j.frame);
      }
    }
  }), UU.step = function (...Us) {
    const Um = {
      'jPnDq': function (UV, Uw) {
        return UV !== Uw;
      },
      'RlhvC': function (UV, Uw) {
        return UV == Uw;
      },
      'NxBfz': "string",
      'amVLP': "function",
      'dnkDs': function (UV, Uw) {
        return UV === Uw;
      },
      'OfhTG': function (UV, Uw) {
        return UV === Uw;
      }
    };
    let Uw = T.__boardSched;
    if (!Uw || !J4()) return Uo.apply(this, Us);
    let UZ = Uw.ut === 1,
      UC = Ja(UZ);
    UC && !Uw.live && JR(Uw);
    let UP = this._schedHelperOf && JG(this._schedHelperOf) ? this._schedHelperOf : this;
    UZ || l8(), UC && Uw.live && UP._schedAtk !== 1 && (UP._schedRest === void 0 && UP === this && (UP._schedRest = 1), JK(this, UZ));
    let Ug = T.turntimer,
      Ux = T.mnfight,
      UG = T.myfight,
      Un = j.spawns,
      Uv = T.battleover,
      UT = T.fighting,
      UL = Jp.by,
      UM = Jp.ending;
    Jp.by = this, Jp.ending = false;
    let Ud = false;
    try {
      return Uo.apply(this, Us);
    } finally {
      if (Ud = Jp.ending, Jp.by = UL, Jp.ending = UM, Uw.live && T.mnfight === 2 && UP === this && this._schedAtk === 1 && Ju(Uw, Ug), !UZ && Uw.live && (Ux === 1 || Ux === 1.5) && T.mnfight === 2 && JE(UP, Uw), UZ && Uw.live && Ux === 2 && T.mnfight === 3 && Ug > 1 && UP._schedRest === 1 && JW() && (T.mnfight = 2, T.turntimer = Ug, Uw.keptTurn !== Uw.turn && (Uw.keptTurn = Uw.turn, Uw.kept = (Uw.kept || 0) + 1)), !UZ && Uw.live && Ux === 2 && T.mnfight === 2 && UP._schedRest === 1 && typeof Ug == "number" && T.turntimer !== Ug && JW() && (T.turntimer = Ug), j.spawns > Un && (UZ && Uw.live && UP._schedRest === 1 && JY(j.spawns - Un), JO(this, j.spawns - Un)), UZ && !Uv && T.battleover === "ut-win" && (UP._schedLeave = 1), !UZ && T.myfight === 7 && T.mnfight === -1 && !(UG === 7 && Ux === -1) && Jj(this)) {
        let UX = j.first("obj_battlecontroller");
        UX && UX.victoried !== 1 && (UX.victory = 0, T.myfight = UG, T.mnfight = Ux, Jr.length = 0, Ud = true);
      }
      !UZ && (Ud || this._schedLeave === 1 || !Uv && T.battleover && !/lose/i.test(String(T.battleover))) && Jj(this) && l4(this, Uv, UT);
    }
  };
}
a(Je, "wrapClass");
function JF(i, J, UU) {
  const Ur = {
    'resfd': function (UH, Us) {
      return UH !== Us;
    },
    'mDRqm': function (UH) {
      return UH();
    }
  };
  return UU !== 5 || i.ut !== 1 || !i.live || T.mnfight !== 1 ? false : JX().some(UH => UH !== J && UH._schedAtk === 1 && UH.alarm && UH.alarm[6] > 0);
}
a(JF, "talkWaits");
function JE(i, J) {
  const Ur = {
    'TeNAT': "[board] host end of turn:",
    'tCRbM': function (Uk, UH) {
      return Uk !== UH;
    },
    'juqiV': "hPrIU",
    'AddJb': function (Uk, UH) {
      return Uk(UH);
    },
    'EMOit': function (Uk, UH) {
      return Uk(UH);
    },
    'ERVWT': function (Uk, UH) {
      return Uk === UH;
    },
    'FEctk': function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    'iVMME': "obj_monsterparent",
    'sMaQt': function (Uk, UH) {
      return Uk + UH;
    }
  };
  for (let Uk of j.list.slice()) {
    if (!JG(Uk) || !JT(Uk) || !Uk._schedBy || Uk._schedBy === i || !Jn(Uk._schedBy, "obj_monsterparent")) continue;
    let UH = JG(Uk.mywriter) ? Uk.mywriter : null;
    UH && UH.instance_destroy(), Uk.instance_destroy(), J.closed = (J.closed || 0) + 1;
  }
}
a(JE, "closeTalk");
function JY(i) {
  const Uf = {
    'cldgC': function (Uk, UH) {
      return Uk(UH);
    },
    'xzHKT': function (Uk, UH) {
      return Uk(UH);
    }
  };
  let Uo = j.list.slice(-i).filter(JG);
  if (Uo.some(JT)) {
    for (let Uk of Uo) (JT(Uk) || Jv(Uk)) && Uk.instance_destroy();
  }
}
a(JY, "hush");
function JO(i, J) {
  const Uo = {
    'dIkXG': function (Uh, US) {
      return Uh == US;
    },
    'qdHZd': function (Uh, US) {
      return Uh === US;
    },
    'VavlE': function (Uh, US) {
      return Uh - US;
    },
    'mfcQy': function (Uh, US) {
      return Uh < US;
    },
    'VBRKa': function (Uh, US) {
      return Uh === US;
    },
    'oMVNP': "BpkOb",
    'mCwGR': "AYBMb",
    'Dgaoi': function (Uh, US) {
      return Uh(US);
    },
    'LcPIp': function (Uh, US) {
      return Uh === US;
    },
    'UTqtC': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'JfuBp': "obj_growtangle",
    'rGUzr': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'xzswP': "obj_moveheart",
    'FgULn': "obj_monsterparent",
    'QtiFb': function (Uh, US) {
      return Uh !== US;
    },
    'MaBZs': function (Uh, US) {
      return Uh == US;
    },
    'aetOi': "number",
    'NuaDL': function (Uh, US) {
      return Uh == US;
    },
    'PWSHi': function (Uh, US) {
      return Uh > US;
    },
    'QirDF': "owner"
  };
  let Uk = j.list,
    UH = Math.max(0, Uk.length - J),
    Us = false;
  for (let Uh = UH; Uh < Uk.length; Uh++) {
    let US = Uk[Uh];
    !JG(US) || US === i || (US._schedBy === void 0 && (US._schedBy = i, US._schedBorn = j.frame), (Jn(US, "obj_growtangle") || Jn(US, "obj_moveheart")) && (Us = true), !(!Jn(US, "obj_monsterparent") || US._schedHelperOf || US._schedSeq !== void 0) && (typeof US.myself == "number" && T.monsterinstance[US.myself] === US || (US._schedHelperOf = i, typeof i.myself == "number" && (US.myself = i.myself), Je(US.constructor), l1(US.constructor))));
  }
  Us && !JD.has(i.constructor) && (j.number("obj_growtangle") > 1 || j.number("obj_moveheart") > 1) && JD.set(i.constructor, "owner");
}
a(JO, "adoptSpawns");
var l0 = Symbol("boardDestroy");
function l1(i) {
  const Uf = {
    'crotr': function (UH, Us) {
      return UH(Us);
    },
    'BVbrm': function (UH, Us) {
      return UH === Us;
    },
    'WoasI': function (UH, Us) {
      return UH - Us;
    },
    'pKwuP': function (UH, Us) {
      return UH !== Us;
    },
    'QmrIH': function (UH, Us) {
      return UH === Us;
    },
    'CctPo': "ntJXc",
    'cPsvr': function (UH, Us) {
      return UH > Us;
    },
    'PYVoE': function (UH) {
      return UH();
    },
    'wVQhF': function (UH, Us) {
      return UH === Us;
    },
    'xRzVL': function (UH, Us, Uh, US) {
      return UH(Us, Uh, US);
    },
    'ZtAma': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'cjqfM': "obj_monsterparent",
    'ZNQxl': "obj_battlecontroller",
    'VsKWg': function (UH, Us) {
      return UH !== Us;
    },
    'XpvLU': "ZUrGi",
    'CWrZL': "BTyyM",
    'DTIHn': function (UH, Us) {
      return UH && Us;
    },
    'VskQZ': function (UH, Us) {
      return UH(Us);
    },
    'weCrm': function (UH, Us) {
      return UH != Us;
    },
    'paisG': "function"
  };
  let Ur = i && i.prototype;
  if (!Ur || Object.prototype.hasOwnProperty.call(Ur, l0) || typeof Ur.instance_destroy != "function") return;
  let Uk = Ur.instance_destroy;
  Ur[l0] = 1, Ur.instance_destroy = function (...UH) {
    const Uh = {
      'ApqPo': function (Um, UV) {
        return Um(UV);
      },
      'KDnmy': function (Um, UV) {
        return Um === UV;
      },
      'mPgiU': function (Um, UV) {
        return Um - UV;
      },
      'Gfdhv': function (Um, UV) {
        return Um !== UV;
      },
      'nKUyH': function (Um, UV) {
        return Um === UV;
      }
    };
    let Uw = T.__boardSched;
    if (!Uw || UH.length > 0 || !J4()) return Uk.apply(this, UH);
    let UZ = Jp.by,
      UC = Uw.ut === 1;
    if (UZ && UZ !== this && l3(this, UZ, UC)) return;
    if (!UC || !Jn(this, "obj_monsterparent")) return Uk.apply(this, UH);
    let UP = j.first("obj_battlecontroller"),
      Ug = UP && UP.visible,
      Ux = Jp.by;
    Jp.by = this;
    try {
      return Uk.apply(this, UH);
    } finally {
      Jp.by = Ux, UP && Ug && !UP.visible && Jj(this) && (UP.visible = Ug);
    }
  };
}
a(l1, "guardDestroy");
var l2 = ["obj_hpname", "obj_battlebg", "obj_btparent", "obj_borderparent", "obj_heart"];
function l3(i, J, UU) {
  const Ur = {
    'bNFEH': function (UH, Us) {
      return UH(Us);
    },
    'SWLsH': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'qTNIp': "obj_battlecontroller",
    'qLAMF': function (UH, Us) {
      return UH(Us);
    },
    'jZBEf': "obj_heroparent",
    'wRTFG': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'gRuTH': "obj_tensionbar",
    'OOCXp': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'dDIaC': "obj_monsterparent",
    'JoMud': function (UH, Us) {
      return UH == Us;
    },
    'xdFkH': "number",
    'RvhuQ': function (UH, Us) {
      return UH === Us;
    },
    'bXgWk': function (UH, Us) {
      return UH === Us;
    }
  };
  return UU ? l2.some(UH => Jn(i, UH)) && Jj(J) : Jn(i, "obj_battlecontroller") ? Jj(J) ? (Jp.ending = true, true) : false : Jp.ending ? Jn(i, "obj_heroparent") || Jn(i, "obj_tensionbar") ? true : Jn(i, "obj_monsterparent") && typeof i.myself == "number" && T.monster[i.myself] === 1 && T.monsterinstance[i.myself] === i : false;
}
a(l3, "refuseDestroy");
function l4(i, J, UU) {
  const Uf = {
    'rYAJB': function (Uh, US) {
      return Uh >= US;
    },
    'oFpAn': function (Uh, US) {
      return Uh <= US;
    },
    'VLazI': function (Uh, US) {
      return Uh === US;
    },
    'TysdM': "LruEd",
    'ZRBFe': "foUrf",
    'stlxI': function (Uh, US) {
      return Uh(US);
    },
    'gwxvc': function (Uh, US) {
      return Uh !== US;
    },
    'BUcnI': function (Uh, US) {
      return Uh == US;
    },
    'uSwUm': "number",
    'YhXZJ': function (Uh, US) {
      return Uh <= US;
    },
    'DyMnJ': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'IRDuF': "obj_monsterparent",
    'hKtTJ': function (Uh, US) {
      return Uh == US;
    },
    'XbusO': "function",
    'fewWJ': function (Uh, US) {
      return Uh == US;
    },
    'vTNBO': function (Uh, US) {
      return Uh === US;
    },
    'EcGFg': function (Uh) {
      return Uh();
    },
    'sMClA': function (Uh, US) {
      return Uh + US;
    }
  };
  let Ur = T.__boardSched;
  T.battleover = J, T.fighting = UU;
  for (let Uh of Object.keys(i)) {
    let Um = i[Uh];
    JG(Um) && Um !== i && typeof Um.depth == "number" && Um.depth <= -1000 && !Jn(Um, "obj_monsterparent") && Um.instance_destroy();
  }
  let UH = i.myself;
  if (!i.destroyed) {
    try {
      typeof i.scr_monsterdefeat == "function" && i.scr_monsterdefeat();
    } catch {}
    i.destroyed || i.instance_destroy();
  }
  typeof UH == "number" && T.monsterinstance[UH] === i && T.monster[UH] === 1 && (Jf()[UH] = 0), i._schedLeave = void 0, Ur.exits = (Ur.exits || 0) + 1, Ur.exitFrame = j.frame;
}
a(l4, "localExit");
var l5 = 0;
function l6() {
  return l5;
}
a(l6, "winGet");
function l7(i) {
  const Uf = {
    'FPlfX': function (Uo, Uk) {
      return Uo === Uk;
    },
    'CNBnm': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'PZKqH': function (Uo) {
      return Uo();
    },
    'neTsO': function (Uo, Uk) {
      return Uo !== Uk;
    },
    'CoXfM': function (Uo, Uk) {
      return Uo(Uk);
    },
    'MUCyM': function (Uo, Uk) {
      return Uo === Uk;
    },
    'yRaIG': "fWJSh"
  };
  if (i === 1 && l5 !== 1 && J4() && T.__boardSched && T.__boardSched.ut !== 1) {
    let Uo = l9(j.self);
    if (Uo && Jj(Uo)) {
      Uo._schedLeave = 1;
      return;
    }
  }
  l5 = i;
}
a(l7, "winSet");
function l8() {
  const i = {};
  i.eeyal = function (UH, Us) {
    return UH <= Us;
  }, i.wEYGv = function (UH, Us) {
    return UH === Us;
  };
  const J = i;
  let UU = T.flag;
  if (!Array.isArray(UU) || J.eeyal(UU.length, 39)) return;
  let Ur = Object.getOwnPropertyDescriptor(UU, 39);
  Ur && J.wEYGv(Ur.set, l7) || (l5 = UU[39], Object.defineProperty(UU, 39, {
    'configurable': true,
    'enumerable': true,
    'get': l6,
    'set': l7
  }));
}
a(l8, "armWinFlag");
function l9(i) {
  const J = {
    'WbtZN': function (Uo, Uk) {
      return Uo < Uk;
    },
    'xuELk': function (Uo, Uk) {
      return Uo === Uk;
    },
    'AVuYE': "VlaCA",
    'EaiHS': function (Uo, Uk) {
      return Uo(Uk);
    },
    'tAznN': function (Uo, Uk, UH) {
      return Uo(Uk, UH);
    },
    'mqimi': "obj_monsterparent",
    'FOrsV': function (Uo, Uk) {
      return Uo == Uk;
    },
    'mDfIR': "number",
    'sDJtR': function (Uo, Uk) {
      return Uo === Uk;
    }
  };
  for (let Uo = 0; i && Uo < 4; Uo++) {
    if (JG(i._schedHelperOf)) return i._schedHelperOf;
    if (Jn(i, "obj_monsterparent") && typeof i.myself == "number" && T.monsterinstance[i.myself] === i) return i;
    i = JG(i._schedBy) ? i._schedBy : null;
  }
  return null;
}
a(l9, "ownerOf");
function li(i, J) {
  const UU = {
    'lVCdj': function (UV, Uw) {
      return UV === Uw;
    },
    'UaQdB': "MsMPJ",
    'ybSPE': "pyqNG",
    'NiFUY': function (UV, Uw) {
      return UV > Uw;
    },
    'GwTEC': function (UV, Uw) {
      return UV === Uw;
    },
    'QwHNL': function (UV, Uw) {
      return UV | Uw;
    },
    'bHRYj': function (UV) {
      return UV();
    },
    'PYsXC': "obj_battlecontroller",
    'vXJvd': function (UV, Uw) {
      return UV(Uw);
    },
    'nnkHQ': function (UV) {
      return UV();
    },
    'LFGhf': function (UV, Uw) {
      return UV(Uw);
    },
    'VyZeV': "obj_heroparent",
    'iylbu': "obj_tensionbar",
    'jCgAf': function (UV) {
      return UV();
    },
    'LqqOB': function (UV, Uw) {
      return UV(Uw);
    },
    'SMEUe': function (UV, Uw, UZ, UC) {
      return UV(Uw, UZ, UC);
    },
    'RkbRy': function (UV, Uw) {
      return UV !== Uw;
    },
    'iOSik': function (UV, Uw) {
      return UV === Uw;
    },
    'rLzjN': function (UV) {
      return UV();
    },
    'UeWwL': function (UV, Uw) {
      return UV(Uw);
    },
    'URCED': "obj_purpleheart",
    'UMlzu': "obj_heart",
    'vhtka': function (UV, Uw, UZ) {
      return UV(Uw, UZ);
    },
    'ZDncS': "obj_growtangle",
    'qVmBX': function (UV, Uw, UZ) {
      return UV(Uw, UZ);
    },
    'ILPWD': "obj_moveheart",
    'wauna': function (UV, Uw) {
      return UV === Uw;
    },
    'SNQZe': function (UV, Uw) {
      return UV === Uw;
    },
    'vMAPV': function (UV, Uw, UZ, UC) {
      return UV(Uw, UZ, UC);
    }
  };
  let Uf = J === 'ut';
  const Ur = {};
  Ur.turns = 0x0, Ur.ownerTurns = 0x0, Ur.maxAttackers = 0x0, Ur.merged = 0x0, Ur.released = 0x0, Ur.passed = 0x0, Ur.kept = 0x0, Ur.nudged = 0x0, Ur.folded = 0x0, Ur.exits = 0x0, Ur.helpers = 0x0;
  const Uo = {};
  Uo.stats = Ur, Uo.lastTurn = 0x0;
  i._sched || (i._sched = Uo, T.__boardSched = {
    'ut': Uf ? 1 : 0,
    'seq': 0x0,
    'turn': 0x0,
    'owner': 0x0,
    'reg': 0x0,
    'live': 0x0,
    'attackers': 0x0,
    'ownerTurn': 0x0,
    'merged': 0x0,
    'exits': 0x0,
    'cap': Math.max(0, i.atkCap | 0)
  }, lS = -1, lQ());
  let UH = T.__boardSched,
    Us = i._sched.stats;
  if (!UH) return;
  let US = j.first("obj_battlecontroller");
  US && l1(US.constructor);
  for (let UV of JX()) Je(UV.constructor), l1(UV.constructor);
  if (!Uf) j.with("obj_heroparent", Uw => l1(Uw.constructor)), j.with("obj_tensionbar", Uw => l1(Uw.constructor));else {
    for (let Uw of l2) j.with(Uw, UZ => l1(UZ.constructor));
  }
  if (T.mnfight === 0 && Jy(UH), !Uf) {
    l8();
    for (let UZ of JX()) UZ._schedLeave === 1 && (Jj(UZ) ? l4(UZ, T.battleover, T.fighting) : (UZ._schedLeave = void 0, l5 = 1));
  }
  UH.turn !== i._sched.lastTurn && UH.live && (i._sched.lastTurn = UH.turn, Us.turns++, UH.ownerTurn && Us.ownerTurns++, Us.maxAttackers = Math.max(Us.maxAttackers, UH.attackers)), Us.merged = UH.merged, Us.exits = UH.exits, Us.kept = UH.kept || 0, Us.closed = UH.closed || 0, !Uf && UH.exitFrame === j.frame && T.myfight === 3 && Z(), lr(Us), lU(Us), Uf && T.mnfight === 1 && j.exists("obj_purpleheart") && j.with("obj_heart", UC => {
    UC.x > -100 && (UC.x = -200, UC.movement = -1);
  }), UH.live && Ja(Uf) && (lI("obj_growtangle", Us), lI("obj_moveheart", Us), !Uf && T.mnfight === 2 && lh(US, Us), T.mnfight === 2 && lJ(UH, Us, Uf), Uf && T.mnfight === 2 && lb(UH, Us));
  let Um = 0;
  for (let UC of j.list) !UC.destroyed && UC._schedHelperOf && Um++;
  Us.helpers = Math.max(Us.helpers, Um);
}
a(li, "boardSchedule");
function lJ(i, J, UU) {
  const Uf = {
    'QDRqz': function (US, UQ) {
      return US + UQ;
    },
    'hhQbY': function (US, UQ) {
      return US !== UQ;
    },
    'ApkNq': function (US, UQ) {
      return US % UQ;
    },
    'oUhkF': function (US, UQ) {
      return US > UQ;
    },
    'cIXfX': function (US) {
      return US();
    },
    'ExksA': function (US, UQ) {
      return US === UQ;
    },
    'KxKEN': "FcHtP",
    'YxEEF': function (US, UQ, Um) {
      return US(UQ, Um);
    }
  };
  if (i.bullets = (i.bullets || 0) + 1, i.bullets % 30 !== 0 || i.bullets > 150) return;
  let Uk = JX(),
    UH = Uk.filter(US => US._schedAtk === 1 && US.attacked === 0),
    Us = Uk.filter(US => US._schedRest === 1 && US._schedSetA === 1 && US.attacked === 1);
  for (let US of UH) {
    let UQ = Us.shift();
    if (!UQ) break;
    US._schedAtk = 0, US._schedRest = 1, JK(US, UU), UQ._schedAtk = 1, UQ._schedRest = 0, UQ.attacked = 0, UQ._schedSetA = void 0, J.passed++;
  }
}
a(lJ, "passTurn");
var ll = new WeakMap();
function lc(i) {
  const J = {};
  J.Uchap = function (UH, Us) {
    return UH >= Us;
  }, J.JfzSk = function (UH, Us) {
    return UH <= Us;
  };
  J.vCqhc = function (UH, Us) {
    return UH - Us;
  };
  J.RXChf = function (UH, Us) {
    return UH === Us;
  }, J.KtVBQ = "Aavil";
  J.ojQUg = "BCebk", J.iaqWG = function (UH, Us) {
    return UH !== Us;
  }, J.ViFiK = function (UH, Us) {
    return UH == Us;
  }, J.mmGdX = "function";
  const Uo = J;
  let Uk = i.constructor;
  if (!ll.has(Uk)) {
    if (Uo.RXChf(Uo.KtVBQ, Uo.ojQUg)) return Uo.Uchap(n, 0) && Uo.Uchap(Uk.frame, M) && Uo.JfzSk(Uo.vCqhc(d.frame, A), 1);else {
      let UH = '';
      for (let Us = Uk.prototype; Us && Uo.iaqWG(Us, Object.prototype) && !/^(Inst|obj_monsterparent)$/.test(Us.constructor.name); Us = Object.getPrototypeOf(Us)) for (let Uh of Object.getOwnPropertyNames(Us)) {
        let US = Object.getOwnPropertyDescriptor(Us, Uh);
        US && Uo.ViFiK(typeof US.value, Uo.mmGdX) && (UH += US.value.toString());
      }
      ll.set(Uk, /G\.(turntimer|mnfight)/.test(UH));
    }
  }
  return ll.get(Uk);
}
a(lc, "canEndTurn");
function lb(i, J) {
  const UU = {};
  UU.pZNip = function (UH, Us) {
    return UH < Us;
  }, UU.zgPOY = function (UH, Us) {
    return UH + Us;
  };
  UU.ZHcnA = function (UH, Us) {
    return UH < Us;
  };
  const Uk = UU;
  i.outFrames = Uk.pZNip(T.turntimer, 1) ? Uk.zgPOY(i.outFrames || 0, 1) : 0, !(Uk.ZHcnA(i.outFrames, 10) || j.list.some(UH => JG(UH) && UH._schedBy && UH._schedBy._schedAtk === 1 && UH._schedBorn >= i.planFrame && !Jn(UH, "obj_monsterparent") && lc(UH))) && (T.turntimer = -1, T.mnfight = 3, i.outFrames = 0, J.turnsOver = Uk.zgPOY(J.turnsOver || 0, 1));
}
a(lb, "utTurnOver");
function lI(i, J) {
  const UU = {
    'LZiAI': function (UH) {
      return UH();
    },
    'JEDtu': function (UH, Us, Uh) {
      return UH(Us, Uh);
    },
    'voorX': function (UH, Us) {
      return UH === Us;
    },
    'FJObr': "uaAGR",
    'jEnbd': function (UH, Us) {
      return UH !== Us;
    },
    'WrgFJ': "IFLev",
    'YpmrD': "vCrim"
  };
  let Uk = null;
  for (let UH of j.list.slice()) if (!(UH.destroyed || !UU.JEDtu(Jn, UH, i))) {
    if (UU.voorX(UU.FJObr, UU.FJObr)) {
      if (!Uk) {
        if (UU.jEnbd(UU.WrgFJ, UU.YpmrD)) {
          Uk = UH;
          continue;
        } else {
          d().UTSCR.SCR_TEXT.call({}, 0x3);
          let Us = A.msg[0x0];
          J.isArray(j.mystring) && (a.mystring[0x0] = Us), i.originalstring = Us, i0.stringpos = i1(Us).length;
        }
      }
      UU.JEDtu(lf, UH, Uk), UH.destroyed = true, j.remove(UH), J.folded++;
    } else {
      phoVaX.LZiAI(UU), Uk = null;
      return;
    }
  }
}
a(lI, "fold");
function lU(i) {
  const J = {
    'CtKHB': function (Uk) {
      return Uk();
    },
    'aqUUn': "obj_battlecontroller",
    'RZLII': "[board] host end of turn:",
    'OsTvl': function (Uk, UH) {
      return Uk === UH;
    },
    'OAePX': "TyYjr",
    'WTKWP': function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    'sacrV': "obj_heart",
    'DNSaI': "locZQ",
    'nyfFv': "VFrva",
    'BzWpm': function (Uk, UH, Us) {
      return Uk(UH, Us);
    }
  };
  let Ur = new Map();
  for (let Uk of j.list.slice()) {
    if (J.OsTvl(J.OAePX, J.OAePX)) {
      if (Uk.destroyed || !(J.WTKWP(Jn, Uk, J.sacrV) || Jx.test(Uk.constructor.name))) continue;
      let UH = Uk.constructor.name,
        Us = Ur.get(UH);
      if (!Us) {
        if (J.OsTvl(J.DNSaI, J.nyfFv)) J.y = Ur.idealborder[0x2];else {
          Ur.set(UH, Uk);
          continue;
        }
      }
      J.BzWpm(lf, Uk, Us), Uk.destroyed = true, j.remove(Uk), i.folded++;
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
  const Uf = {
    'fvenq': function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    'OaVQL': "obj_monsterparent",
    'vegOA': function (Uk, UH, Us) {
      return Uk(UH, Us);
    },
    'YHsCQ': "obj_bulletgenparent",
    'Yynhk': function (Uk, UH) {
      return Uk === UH;
    }
  };
  for (let Uk of j.list) if (!(Uk.destroyed || !(Jn(Uk, "obj_monsterparent") || Jn(Uk, "obj_bulletgenparent")))) {
    for (let UH of Object.keys(Uk)) Uk[UH] === i && (Uk[UH] = J);
  }
}
a(lf, "repoint");
function lr(i) {
  const UU = {
    'PQZXf': function (Uh) {
      return Uh();
    },
    'cJIzv': function (Uh, US) {
      return Uh > US;
    },
    'vdqDE': function (Uh, US) {
      return Uh === US;
    },
    'Aeong': function (Uh, US) {
      return Uh | US;
    },
    'RwjAv': "obj_battlecontroller",
    'OEeFb': function (Uh, US) {
      return Uh(US);
    },
    'gsKIc': function (Uh) {
      return Uh();
    },
    'KznQi': function (Uh, US) {
      return Uh(US);
    },
    'VpXdE': "obj_heroparent",
    'FbEfJ': "obj_tensionbar",
    'SQSBo': function (Uh, US) {
      return Uh === US;
    },
    'cXucN': function (Uh) {
      return Uh();
    },
    'HXdIM': function (Uh, US, UQ, Um) {
      return Uh(US, UQ, Um);
    },
    'hLEQA': function (Uh, US) {
      return Uh !== US;
    },
    'DsyHd': function (Uh) {
      return Uh();
    },
    'FdflY': function (Uh, US) {
      return Uh(US);
    },
    'ywwoB': function (Uh, US) {
      return Uh(US);
    },
    'blHoY': "obj_purpleheart",
    'EDiIu': "obj_heart",
    'JGcDa': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'JvjkS': "obj_growtangle",
    'QjKBx': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'ZAfuX': "obj_moveheart",
    'KfwJf': function (Uh, US) {
      return Uh === US;
    },
    'YceUT': function (Uh, US, UQ, Um) {
      return Uh(US, UQ, Um);
    },
    'RefbJ': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'UNsvE': function (Uh, US) {
      return Uh(US);
    },
    'PihNQ': function (Uh, US) {
      return Uh === US;
    },
    'VYpqd': "YMrgN",
    'TrQpM': function (Uh, US) {
      return Uh(US);
    },
    'aPREP': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'kIHhZ': function (Uh, US) {
      return Uh + US;
    },
    'BrxbC': function (Uh, US) {
      return Uh === US;
    },
    'kqjne': "fHwOq",
    'DByfu': function (Uh, US) {
      return Uh + US;
    },
    'PVxjQ': function (Uh, US) {
      return Uh <= US;
    },
    'orklH': function (Uh, US) {
      return Uh * US;
    },
    'GOkOv': function (Uh, US) {
      return Uh * US;
    },
    'vUVaL': function (Uh, US) {
      return Uh % US;
    },
    'QIeeJ': function (Uh, US) {
      return Uh / US;
    },
    'iJgAF': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'BIilh': function (Uh, US) {
      return Uh && US;
    },
    'woTzp': function (Uh, US, UQ) {
      return Uh(US, UQ);
    },
    'Glctn': function (Uh, US) {
      return Uh(US);
    },
    'cMeeW': function (Uh, US, UQ, Um, UV) {
      return Uh(US, UQ, Um, UV);
    }
  };
  let Ur = [],
    Uo = [];
  for (let Uh of j.list) !Uh.destroyed && JT(Uh) && !lo(Uh) && (Uh._schedPlaced ? Ur : Uo).push(Uh);
  if (!Uo.length) return;
  let UH = (US, UQ) => US.x < UQ.x + UQ.w && UQ.x < US.x + US.w && US.y < UQ.y + UQ.h && UQ.y < US.y + US.h,
    Us = Ur.map(lk);
  for (let US of Uo) {
    US._schedPlaced = 1;
    let UQ = lk(US),
      Um = (UZ, UC) => UQ.x + UZ >= 0 && UQ.x + UZ + UQ.w <= 640 && UQ.y + UC >= 4 && UQ.y + UC + UQ.h <= 476 && !Us.some(UP => UH({
        ...UQ,
        'x': UQ.x + UZ,
        'y': UQ.y + UC
      }, UP)),
      UV = null;
    if (!Um(0, 0)) for (let UZ of [0, -(UQ.w + 8)]) {
      for (let UC = 1, UP = UQ.h + 4; UC <= 12 && !UV; UC++) {
        let Ug = (UC % 2 ? 1 : -1) * Math.ceil(UC / 2) * UP;
        Um(UZ, Ug) && (UV = [UZ, Ug]);
      }
      if (!UV && UZ && Um(UZ, 0) && (UV = [UZ, 0]), UV) break;
    }
    let Uw = lH(US);
    UV && Uw && (ls(US, Uw, UV[0], UV[1]), i.nudged++, UQ.x += UV[0], UQ.y += UV[1]), Us.push(UQ);
  }
}
a(lr, "nudgeBalloons");
var lo = a(i => /^obj_blconwideslave$/.test(i.constructor.name), "isPart");
function lk(i) {
  const UU = {};
  UU.yUwsR = function (Uh, US) {
    return Uh === US;
  }, UU.UhlNf = function (Uh, US) {
    return Uh !== US;
  }, UU.dDjrt = "CImnw", UU.ZNClH = "KnvhE", UU.dZdZH = function (Uh, US) {
    return Uh > US;
  }, UU.ndDxj = function (Uh, US) {
    return Uh + US;
  }, UU.jmDOe = function (Uh, US) {
    return Uh > US;
  };
  UU.lHCHD = function (Uh, US) {
    return Uh - US;
  }, UU.LQvlo = function (Uh, US) {
    return Uh / US;
  }, UU.cvgOb = function (Uh, US) {
    return Uh * US;
  }, UU.SVeAg = function (Uh, US) {
    return Uh * US;
  };
  const Ur = UU;
  if (Ur.yUwsR(i.auto_length, 1)) {
    if (Ur.UhlNf(Ur.dDjrt, Ur.ZNClH)) {
      let Uh = Ur.dZdZH(i.balloonwidth, 0) ? Ur.ndDxj(i.balloonwidth, 20) : 240,
        US = Ur.jmDOe(i.balloonheight, 0) ? i.balloonheight : 60;
      return {
        'x': Ur.lHCHD(i.x, Uh),
        'y': Ur.lHCHD(i.y, Ur.LQvlo(US, 2)),
        'w': Uh,
        'h': US
      };
    } else {
      s.utWonSeen = true;
      return;
    }
  }
  let Uk = i.sprite_index && q[i.sprite_index],
    UH = Uk && Uk.w ? Ur.cvgOb(Uk.w, Math.abs(i.image_xscale || 1)) : 100,
    Us = Uk && Uk.h ? Ur.SVeAg(Uk.h, Math.abs(i.image_yscale || 1)) : 50;
  return {
    'x': Ur.lHCHD(i.x, Uk && Uk.xoff ? Uk.xoff : 0),
    'y': Ur.lHCHD(i.y, Uk && Uk.yoff ? Uk.yoff : 0),
    'w': Math.max(40, UH),
    'h': Math.max(30, Us)
  };
}
a(lk, "balloonBox");
function lH(i) {
  const Uf = {
    'tvrfJ': function (Uo, Uk) {
      return Uo(Uk);
    },
    'fvYDg': function (Uo, Uk, UH) {
      return Uo(Uk, UH);
    },
    'JREoa': "obj_battlecontroller",
    'YgBUf': function (Uo, Uk, UH) {
      return Uo(Uk, UH);
    },
    'Tmmgw': "obj_heroparent",
    'uqJHY': function (Uo, Uk, UH) {
      return Uo(Uk, UH);
    },
    'embMW': "obj_tensionbar",
    'okavm': "obj_monsterparent",
    'sLxRp': function (Uo, Uk) {
      return Uo == Uk;
    },
    'eXtgV': "number",
    'zqjnh': function (Uo, Uk) {
      return Uo === Uk;
    },
    'yvuoQ': function (Uo, Uk) {
      return Uo === Uk;
    },
    'pBMZV': function (Uo, Uk) {
      return Uo === Uk;
    },
    'llocM': "nJETQ",
    'BPYmG': "Jxlgh",
    'JKIkL': function (Uo, Uk) {
      return Uo(Uk);
    }
  };
  if (JG(i.mywriter) && Jv(i.mywriter)) return i.mywriter;
  for (let Uo of j.list) if (!Uo.destroyed && (Uo.myblcon === i || Uo.blcon === i)) {
    let Uk = JG(Uo.blconwd) ? Uo.blconwd : Uo.mywriter;
    return JG(Uk) && Jv(Uk) ? Uk : null;
  }
  return null;
}
a(lH, "writerOf");
function ls(i, J, UU, Uf) {
  const Ur = {};
  Ur.hsqvJ = function (Uh, US) {
    return Uh == US;
  }, Ur.clPdn = "number";
  Ur.WHWvs = function (Uh, US) {
    return Uh >= US;
  };
  Ur.rmmWr = function (Uh, US) {
    return Uh >= US;
  };
  const Us = Ur;
  i.x += UU, i.y += Uf, Us.hsqvJ(typeof i.remx, Us.clPdn) && (i.remx += UU), Us.hsqvJ(typeof i.remy, Us.clPdn) && (i.remy += Uf), Us.hsqvJ(typeof i.initwritingx, Us.clPdn) && Us.WHWvs(i.initwritingx, 0) && (i.initwritingx += UU), Us.hsqvJ(typeof i.initwritingy, Us.clPdn) && Us.rmmWr(i.initwritingy, 0) && (i.initwritingy += Uf), J.x += UU, J.y += Uf, Us.hsqvJ(typeof J.writingx, Us.clPdn) && (J.writingx += UU), Us.hsqvJ(typeof J.writingy, Us.clPdn) && (J.writingy += Uf);
}
a(ls, "moveBalloon");
function lh(i, J) {
  const Uf = {
    'XKxQD': function (Uk, UH) {
      return Uk !== UH;
    },
    'qTOts': "CBIYT",
    'WsUrU': function (Uk, UH) {
      return Uk(UH);
    },
    'YTaVR': function (Uk, UH) {
      return Uk !== UH;
    },
    'tTECH': function (Uk, UH) {
      return Uk <= UH;
    },
    'qXfvU': function (Uk) {
      return Uk();
    },
    'Dyuha': function (Uk, UH) {
      return Uk > UH;
    }
  };
  !i || i.noreturn !== 1 || i.reset !== 1 || !(T.turntimer <= 1) || j.list.some(Uk => !Uk.destroyed && Jv(Uk)) || !JX().some(Uk => {
    let US = Jd(Uk);
    return US && US.partner && !j.exists(US.partner);
  }) || (i.noreturn = 0, i.alarm[2] > 0 || (i.alarm[2] = 1), J.released++);
}
a(lh, "releasePartners");
var lS = -1;
function lQ() {
  const i = {
    'fciXQ': function (Uk, UH) {
      return Uk !== UH;
    },
    'Xnpsk': function (Uk, UH) {
      return Uk !== UH;
    },
    'voALH': function (Uk) {
      return Uk();
    },
    'oMwYI': function (Uk, UH) {
      return Uk === UH;
    },
    'wGPFs': "UKImw",
    'FMONU': function (Uk, UH) {
      return Uk(UH);
    },
    'YwJfO': function (Uk) {
      return Uk();
    },
    'RMGOQ': function (Uk, UH) {
      return Uk != UH;
    },
    'ZUYTm': "function"
  };
  let J = v.bcStepGate;
  if (typeof J != "function" || J.__board) return;
  let Ur = function (Uk) {
    const UH = {
      'JAsFr': function (UQ, Um) {
        return UQ !== Um;
      },
      'UvquC': function (UQ, Um) {
        return UQ !== Um;
      },
      'MKTBj': function (UQ) {
        return UQ();
      }
    };
    let UQ = J(Uk);
    return UQ && J4() && (lS = j.frame), UQ;
  };
  Ur.__board = 1, v.bcStepGate = Ur;
}
a(lQ, "armGate");
function lm() {
  const Uf = {};
  Uf.wLoWQ = function (Uo, Uk) {
    return Uo >= Uk;
  }, Uf.SCYEk = function (Uo, Uk) {
    return Uo <= Uk;
  }, Uf.cxucG = function (Uo, Uk) {
    return Uo - Uk;
  };
  const Ur = Uf;
  return Ur.wLoWQ(lS, 0) && Ur.wLoWQ(j.frame, lS) && Ur.SCYEk(Ur.cxucG(j.frame, lS), 1);
}
a(lm, "controllerGated");
function lV() {
  const i = {
    'oclKK': function (Uo) {
      return Uo();
    },
    'GyXuL': function (Uo, Uk) {
      return Uo(Uk);
    }
  };
  let Uf = [];
  for (let Uo of JX()) {
    let Uk = Jd(Uo);
    Uk && (Uk.intro || Uk.gate) && Uf.push({
      'm': Uo,
      'done': Uk.intro || null
    });
  }
  return Uf;
}
a(lV, "gatingEnemies");
var lw = {
  'pinnedForfeit': 0x96,
  'pinnedForce': 0x258,
  'noreturnIdle': 0xf0,
  'noreturnMax': 0x384,
  'alarmLost': 0x3c,
  'talkWriters': 0x258,
  'talkForce': 0x384,
  'talkQuiet': 0xf0,
  'actWriters': 0x258,
  'actForce': 0x2ee,
  'deadAct': 0x96,
  'utTimeout': 0x5a,
  'utBorders': 0x12c,
  'unknownForce': 0x4b0,
  'unknownRepeat': 0x12c,
  'introForce': 0x12c,
  'introWindow': 0x12c,
  'gateMessage': 0xf,
  'gateIntro': 0x96,
  'gateRetire': 0x12c,
  'bulletForce': 0xa8c,
  'quarantineFrames': 0x1e,
  'bulletCap': 0x190,
  'bulletHard': 0x5dc,
  'emptyWin': 0x1e
};
function lZ(i) {
  return i._guard || (i._guard = {
    'frame': 0x0,
    'key': '',
    'since': 0x0,
    'lastTT': null,
    'pinned': 0x0,
    'ttOut': 0x0,
    'resetFrames': 0x0,
    'nrIdle': 0x0,
    'emptyFrames': 0x0,
    'prevKey': '',
    'counts': {},
    'guestAlive': new Map(),
    'flagSnap': new Map(),
    'said': new Set()
  }), i._guard;
}
a(lZ, 'state');
function lC(i, J, UU) {
  i.counts[J] = (i.counts[J] || 0x0) + 0x1, i.said.has(J) || (i.said.add(J), console.warn("[custom guard] " + J + (UU ? ':\x20' + UU : '')));
}
a(lC, 'note');
var lP = a(i => i && !i.destroyed, 'alive'),
  lg = a((i, J) => typeof i.is == 'function' && i.is(J), 'isA');
function lx() {
  return j.list.filter(i => lP(i) && lg(i, 'obj_monsterparent'));
}
a(lx, 'monsters');
function lG() {
  return (T.monster[0x0] === 0x1 ? 0x1 : 0x0) + (T.monster[0x1] === 0x1 ? 0x1 : 0x0) + (T.monster[0x2] === 0x1 ? 0x1 : 0x0);
}
a(lG, 'realPop');
function lv(i) {
  for (let J of j.list.slice()) if (lP(J) && i(J)) try {
    J.instance_destroy();
  } catch {
    lT(J);
  }
}
a(lv, 'destroyAll');
function lT(i) {
  !i || i.destroyed || (i.destroyed = true, j.remove(i));
}
a(lT, 'silentRemove');
var lL = a(i => lg(i, 'obj_writer') || lg(i, 'obj_base_writer'), 'isWriter'),
  lM = a(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || lg(i, 'obj_battleblcon'), 'isBalloon');
function ld() {
  lv(i => lL(i) || lM(i));
}
a(ld, 'clearText');
var lD = {
    'dr': {
      'mn': new Set([0x0, 0x1, 1.25, 1.5, 0x2, -0x1]),
      'my': new Set([0x0, -0x1, 0x1, 0x2, 0x3, 0x4, 0x5, 0x7])
    },
    'ut': {
      'mn': new Set([0x0, 0x1, 0x2, 0x3]),
      'my': new Set([0x0, 0x1, 0x2, 0x3, 0x4])
    }
  },
  lA = new WeakMap();
function lX(i) {
  if (lA.has(i)) return lA.get(i);
  let J = '';
  for (let UU = i && i.prototype; UU && UU !== Object.prototype; UU = Object.getPrototypeOf(UU)) for (let Uf of Object.getOwnPropertyNames(UU)) {
    let Ur = Object.getOwnPropertyDescriptor(UU, Uf);
    Uf === 'constructor' && Ur && typeof Ur.value == 'function' && (J += R(Ur.value));
  }
  return lA.set(i, J), J;
}
a(lX, 'classSource');
var lq = a(i => i < 0x0 ? '-(' + -i + ')' : String(i), 'literal');
function lt(i) {
  let J = [];
  if (lD[i].mn.has(T.mnfight) || J.push("G.mnfight = " + lq(T.mnfight) + ';'), lD[i].my.has(T.myfight) || J.push("G.myfight = " + lq(T.myfight) + ';'), !J.length) return [];
  let UU = new Set(lx());
  for (let Uf = 0x0; Uf < T.monster.length; Uf++) {
    let Ur = T.monsterinstance[Uf];
    lP(Ur) && typeof Ur == 'object' && UU.add(Ur);
  }
  return [...UU].filter(Uo => {
    let Uk = lX(Uo.constructor);
    return J.some(UH => Uk.includes(UH));
  });
}
function lN() {
  const i = ['ECoRANRdUNTlWQRdRCo9', 'W7vBW67dLrBdPSkXzrT3', 'BMtcQZykWOpdUrlcNCoI', "tr/dN8okbG", 'nwVdQG', 'WQDPW6H4W7NdK8oTWQBdRmkB', 'x2ZdTwms', 'WPlcT8kzDxy', 'WPW9dZVcKCkOWP0QWRddMW', 'dMldG8kpxa', "CCo+WOldGhxcH8oghCkUWPW", 'cSoCmSkIASo2WQRdGGdcQq', 'oCkQWPldHdddHSknvSoYW58', 'af3cIM9JW6ZcJa', 'W6BdS8oiW6FdG1RcTbeGfq', 'kw3dPSkIC8ktW63cKZiA', "W7/cGSooW6KVWRC5D8oNW78", 'aSoTkmo0saRdOIm', 'WQuRWOZdNYuHWQ3cICoSWP0', 'WOZdNCkWWQu', 'W6ldMJqNqMeFvXnw', 'WQfqkfil', 'cCkFy8kTWQC', 'qsOu', 'WPVdM8kuWPDA', 'WQVcOCkgWQtcJdldJev5rq', "W4xdMmk+WQD7", "sd/dGmoNb8ovWPpdRfHb", 'WRSoWQpcL1pcTa', 'zmoxqmkBW58cv2CQiW', 'ohtdRCkKhmofW6dcOgTW', 'WO3cIxDV', 'jCoAfmoLWOq', "E8ocWO/dPhC", 'W5b8rmk1jSkkW4NdVSo7Cq', 'W7tdKmowpHdcPwLFW57cTq', 'WP12WOObWPtcT8kzDhxcIa', 'WPfKWOOqWORcU8kyCwtcMW', 'WQ0lsSkbgCojW43cV8ohiW', 'B8oVWPxdL2tdJW', 'mLtcLCoHbapcG8kbWPJcIW', 'cCoVo8ozwq', 'W4X5fwZcPq', 'WQhcJmoCW6aOW43cLJjxW5G', 'W7VcGmkr', 'wSkjsSk1W5Xvs8kjfCkYWOq', 'WQBcIKlcUevrogyRbW', "WO/dGCkRpG3cPxeJW73dKG", 'n3ZcISkFWPGQtCk2j8o0', 'W6ldImk4sSku', 'DIFcUCoLwSoHWQVcKMDS', 'WRqlWR7cMu8', 'iGJdMLb8', 'dmoMWPSNsG', 'fwJdGCkJpW', 'zcddLCo4F8kiW6ZcJIqG', 'zmkkWORdMa13', "WQxdOd/dHaSYWONdIbZdPW", 'ECoxo8oMW5z5rXjnma', "W4ZcUJ4QW4lcN3dcLWL+", 'dSolWPyIWOq', 'qmkdW5vCeN4Dzc1N', 'WPddHCkZWO8xCdHzBmoH', 'W6FcSh7dOKK', 'WPGibIhcSW', 'WQKRWQFcKa', 'k8k5jfldKZDIW67dICkT', "W5FdISkBEmkTb8kavu/dUq", 'rZpdTYBcJHb6F8oRDq', 'aN3cOZ3cJXO', 'W5lcGXjcW4JdMwXeWPyX', "WOT3WOxcMxbFW5pdJmk+W5q", 'WRFcNmkf', 'cc3dRKn7', "WRRcNCooW6SYW4W/a8kvWPq", 'WRNcG8kr', "W6/cG8o6WQO", 'fSk4bSodlq', 'bMdcTcRcVWb8E8oKyG', "w3BdMuaMWR/dMmoIu8oM", 'WOJcJMjMWRKEWOvE', 'evNcTdBcLW', 'dSkZdCoTnSkKW7FcQM7dIW', 'WO7cGMTvWQ4BWPrzW7VdLa', 'BCo5tfDXAmoOWQexjq', 'W4iEcqa', 'jb7dS8ol', 's8kSWQhdSJi', 'wmkrW7DBW5tdTfVcUvBdQW', 'WRP8WROBWOdcH8kSW6JcR8oE', 'aSoukSoJWOC', 'b1VdUSkaCW', "pCkjaCoLi8k+", "WP/dSgnbWOpdMsu", "WQyneI/cUG", "l8kLcvtdLcz/W7FdSSkY", 'A8ojWRJdO8kJ', 'hCoaWRuHWQ4', 'W6xcO3RdSgOgtxuNeq', 'sSoXWOddV8kyWP7cJa', 'FIKIWQNdMG', 'W4CFpqXg', "EmkhmHy/k8kTWQeioG", 'tIpdH8oYlmoyWPu', 'CsayhG', 'WR7dGvCyWP0', 'W4XViKRcJG', 'AIiIjSoN', 'W6FcP1RdPuC', "WP/dRg1JWR3dJJldNKHf", 'a8owf8o3WP1fuW', 'Fmk3dbK9', 'W6xcSgZdTd5sv3eSbW', 'FJ7cNq', 'oLNcRCooWO99BmolW5j3', 'fmoyWQqp', 'WQdcKCkyFvxdMIjQWPxcUq', 'W48GfGnR', 'WPVdJvqn', 'W6GwjGS', 'W5Lsov3cRmkbeuqTW7q', 'm2NcPuDG', 'zYxcKfnOWOtcQmkxxYK', 'wcOkWP7dL8oZDCkaqmoZ', "W6T+pq", 'WOJdP8kmWQWd', 'amk1hMFdSa', 'W4hdNse8W7TbW60NWRFcKq', "W6/cG8o7WR13ySoYW798W4K", 'W7ywsZyxlW3dJcnf', 'CSkPWRZcR8orW5VcL8oGA8oQ', 'WRhcUe1ZisLEb0Ct', 'WRBdNSoEnCoEiZyKWOCp', 'kKlcImkdWOeWi8kfWOeJ', 'W6JcKSoSWQXXy8oTW65VW7G', 'WRVdJKiNWOi', 'WPZdNSkfWOrG', 'W505cWjQ', "WQS/nWpcSq", 'quNdMmkPWPWWmSkrWPOo', "BtpcL0jOWP/cQmkcxG", 'W7eNW6zqW74', 'oqVdHaS6WPNcV8kutMG', 'WOLtefiG', 'zmkfWPNdLeSHASocrgK', 'W7RcMCkSz8k8', 'cqBdHhHH', 'omkcbSo2imkKW7RcJwtdJq', 'W77dTmoiWQZdTv3cNHeGfq', 'ztpcILfUWPG', 'dcGfWPpdNmk8pSkFh8k2', 'nCozWR4IDa', 'W4xcK1BdIeO', 'k8k5jfldKZDIW7pdNSkU', 'W4hdKZKMW6W1WQjNWRNdNG', 'W7FcOg3cIv8yW6pcTGhcUG', 'WRbGWPGgWO0', 'WOTYW5zhW4NdPmoAiIhdIq', 'WOldNaNdHdy', 'e23dKcD3WOpdRhxdMSoH', 'ECkSrSoVWQ1OoHO3pG', 'oXddSSor', 'hedcNNvi', 'W7mNW7jIW6VdICoVWQ3dKmkD', 'u8k9z8kXzYlcUrz4W54', 'ir7dRSomW4XVh8oIFSkK', 'WQFcOmklWRldMgJcGqWGBG', 'WRddTmkDWOfU', 'WQFcHmktBG', "zSo2yMBcIt9/W7tdG8kP", 'lfxcPCogW6nAlCokW4nP', "W5/dQ8kfBCk+", 'WRj1bKmb', 'W6amW5r9W54', 'WP3dJvWBWQW', "aMNcSJVcJWPQn8k+gW", "WQtdMCk0W75dumk3W4e+W4S", 'WPNdHKS', 'W71VW4tdLI8DWPFcHCoSW7i', 'd3xdJCk1oW', 'WRWvWR3cGvFcQmo6rXuL', 'd0pdPmk6rq', 'WQBdOcxcSwvUB2y2bW', 'WRldUmkZwSo8', 'WQhcJmoCW6aOW43cLJO4WRe', 'hvJcN1T0W6pcLCk3gW', "nw/dUmk1bSodW7FcSMzN", 'W77cMmkwymkm', 'a8osWOi9', 'iCozW43cGvGFuCoAsgK', "WOJcJMH+WRSiWOLzW77dNW", 'lu7cMxHNW7BcNCo6wSoA', 'WQ3dGfO', 'ArldI8k2ruldHSozW5VdIG', 'W4JcUZbxW6XhW4beW7NdGG', 'WOldGLSq', 'WRWxWRhcRfG', 'WRlcR8kgWRtcNxFcGq49fq', 'hmkdn8oXfa', 'rwBdPLuF', 'W57cOI4MW4RdQM7dLKzF', 'xSkxWP3dGYXLnq', 'WO9cpNeA', 'W57dMvmVWRNcNr3cMXqr', 'W7PzgCkUemkvW6tdOmoFBq', 'gSoCcSoW', 'W4pcLr5cW5NdGXXgW5Sr', 'WQZcNmkhFfS', "WPz5WO0bWPNcVmkvz0/cNG", 'u8kziSozW4b7emkJvSoQ', 'WOtcNSo4aCo5vCovfHVcTG', 'ECkEpcCs', 'wtmNWR7dUq', 'gSopc8oIWQm', "rsuqWO/dNCkWjCor", 'hupcMgLJW7dcJmkRgmko', 'rqRdPSoHW4r0s8oaW41Z', 'W4hcPmorWQ1B', 'WQtdMcG9CN0Bvrnk', 'W7BcLCoU', 'i8kQW5VcKhpdHSkkr8kZWOq', 'WQFdU8kYWQex', 'zSoijSoMWQ0etMe7qW', 'sqlcSSo2mSohWQldNxbL', 'W55Hp1dcHG', 'W4JcUZbxW6XhW4aBWQBcIG', 'E8kBkaqLlCk6W7voDq', 'tt0HWONdQW', 'ywldMCoPb8ofWOlcQruk', 'c8oeW43cKumYE8oAsge', 'W4BcGSkrWQ9MWP7dGNCnW6S', 'qmktW455x3bqk2m0', 'W7f5WOhcMg1yW4BdH8kVW5G', 'pmkdaCoXi8kZW6hcIG', 'WRNcRgnPWOZdNJtdNLTf', "W6ZdHYy+za", 'xGOBbmo8WOegW6zi', "WR/cUSorvCoEruS/W6qg", 'WPGbWPRcKuK', "BcWye8o/WPm", "WQD/WP8uWRu", 'n8keB8kJWOqThKPVpG', 'WP44gYFcGa', 'WQ3dO8kQWQGN', 'zGpcPxTfW43cOIhdLSo9', 'WOtdUs3dQJi', 'WPHveN4jrLxcIxar', 'aSoAWOa1', 'WRhdMmockbZcPxCUW5ZdUa', 'W47cUfhdT0G', 'WRioWQVcHKlcLSo2uvXU', 'hmkBbg7dQG', 'yrhdJSkZrulcUmkQWQhdIa', 'W6dcUhhdTq', 'uaFcVh14', 'W51qC3pdRSkOxHrpWQS', 'W6lcThNdUhagntr5vW', 'sSobWO3dTCk1', "CSkqWP/dMa11", 'teBdLxeT', 'bMZcLmkMqCoXW5JcOqGq', 'WP3dVSoevSo5smovbGdcMW', 'jZFdIMryW4lcQa', "tCkiWQ/dNra", 'BfhcOmkFWPGQdSo3DmkX', 'WPZdJxLfWRa', 'tmo3WOi', 'ixvlvSk7WRjhW5r4qa', 'AJNcIKvUWOlcPmketMy', 'nmoEW43dIM4yE8oAsgK', 'BCoCWORdVLW', 'WONdO3XO', "WPKtlW/cVG", 'W6BcLmksya', 'WPVcHKjiWQO', "DmoyWQ/dTLC", 'W71uamkfjCkbW6tdOCo0kG', 'WOayWQVcGg4', 'gSoCuCk1W5awdCoErmoV', 'hCkly3RcLW8WWQFcKmoK', 'n3VdHCkCzG', 'lCommCo0Ct3dHZCmW4O', 'WRG4WOtcNxTi', 'kxBdHfv7WOpcTmohdJ8', 'nmkZlq', 'eSovWPyOWPG', "zSo+dq/dIJ1+W6NdHmk4", 'jfBcMCo0ea', 'xmonWRBcGd4YzSoAwhi', 'cCk5W4hcR8omW5VdLSojnSoZ', 'WRpdQmk6WPyy', 'W5HXW67dLrBdPSk5aHu6', 'lN3dKCkojG', "bw/cOZVcJazJBCoI", 'W4DGW5OMW5FcH8kXW6JdPSkq', "W7BcQvFcR193WOhdNa/dTq", 'isRdUgjpW5hcPsZdG8oQ', 'WPveFgVdLmkOWOi1WQ3dMW', 'C8kmlWmxoSkPW6Xs', "is/dQMbh", 'WQBdStFdLJaocIHLuW', 'zaBcG19p', 'xCo8WPldUW', "WROsW5W/W5hcL8orW6JcSSoE", 'j2ddS8kMzSkcW7a', 'WPFdISkZWRqfBaffCmoL', 'W44PfXX4aCkmfmoi', 'vCogWPRdILK', 'W5eZW69hW6m', 'jJhdQJ8rWQ7dM3xcK8kV', 'nSouzL8wzSkLW65zDG', 'WQnSwuW5u8ojwSkCwa', "W70uiWZdTSk/", 'wmo8WRtdOCk1', "rmoGWPBdVCkfWO/cM8o8", 'W4y5dsPReSkeh8op', 'W5RcPCkZEmkU', 'fmouWRep', 'mvBcMIhcUG', "W7/dPSkSW71uW5W5FSkbW68", 'W6xcJSktFa', 'isBdOuLAW4RcVZ7dRmoQ', 'oHJdQ8oTWOe', 'uKVcGNPUW7BcI8oYcCkh', 'oLNcPCkPWOfZySowW4qJ', 'W7BcICoNWQ1SAmoS', 'prtdP0zs', 'WQqMWQnvW4xdSSogor3dSa', 'h8otomoQWRS', 'WQtcLmowamk7WQ7cJCk9n8oR', 'WRSJjJJcMa', 'WPhdOgrzWOddJdtdJ0vu', "kmo+WPq6WPi", 'W6GSW6XV', 'W77cImoTWRD2AG', 'u8kmlqqq', 'W7ncd8oYDCowWRRcRSkVmW', "WP/dTNPNWOhdHIxdIvO", 'gLZcJMHQ', 'WQTdh3eysG', 'hcBdGu5z', 'WQ3dLSkrWPOU', "WQ0Zht/cVW", 'fvlcRCo2ja', "WOtdGda/W7zAWPSGWP3cKq", 'CCoAxCkUD8kzW5hcSYpdJa', 'WRGuWQdcHKlcO8oRvKXQ', 'gWRdUgbV', 'WRbWih4Q', 'WQtcOCkjWQxcNbldKfrTxa', 'W6tcImkpE8kkgqvUWRKD', 'v8kWcc03', 'W4JcSfRdPvu', 'W4rhDeFcVCkFiuqkW7y', "FH/dGCkMmJ/dNSkZW5VcUW", 'WPTuWOKeWQe', 'zYhcVNbU', 'W4yIcHH8aCkafmopba', 'WPRdPmkyvSo5', 'WRVdHSkPW744jCozWRrJW7K', 'WQjRsSoNzmotWQhcTCkxcq', "WRZdMmksWRv/W4vFu8k2W68", 'WQFdSfS3WPe', 'W6H4n0RcUSkh', 'BrJdT8oN', 'wmkrW7DBW5tcV33dPf7cPa', "W7/cPMJdVLW", "BCo5WO/dKx7dHmkCaSkSWOm", 'hmoqf8o3WP1bt8kDe8o3', 'W7VcJSkpE8kkhrLKWRjo', 'W51Xq3NdHmoAW5fgW5VcUSow', 'W583W55vWPVcS8kfzZddJW', 'qahdOLyzWPBdR0GVWO8', 'CComt8kID8o2WRpdMsxdPa', 'W4FdSSkLBmkw', "ixvlvSkZW5vjWPK/Aq", 'BfhcOmkFWPGQtCk2l8kt', 'esVdVhG', 'WPFcGW1DW5xdKxa3W5if', 'oh3cTcFcHqDmzW', 'luNcISoJ', "WQi+WQvfWQxdSSoliNNcLa", 'yHFdICohW4G', 'bLJcMxm', 'jeRdSCkTmq', 'g8oDWRGiWPhcUa', 'AdGkeCo2WQOqW4P0tW', 'WQyEWPhcMxq', 'WRRcOCo2W6aOW43cLJjFW7W', 'nmkZdmoWmSk3W6FcNcxcLW', 'uqlcJKbV', "W6/cG8o6WQP1ySoWW6L6W7m", 'fCoaWOSJxsHykNK', "W6ldG8ksWRn8WP/dG3elW7a", 'W5lcKGnsW4tdKwqOWRfW', 'WPHveN4jrLtcIxCK', "WPRdImkAzCkQaCkqre/dRW", 'pvtdV8k2oW', 'xSk0DSkXduZcOgfPW4W', "W5NdNCkfu8o/W7tdRSouCSku", 'WQddJmkHWQeT', "DI/dNSoRh8ojW6VcJhXN", 'W7jIkG', 'WOtdRfPbWOC', 'gSkuB8kwWPK', 'WQhdSw1UWOFdIq', 'WPSDlGNcOq', 'mCoFW6dcU0mYE8oAsgK', 'W5lcNa1FW4JcQNzdWQbU', 'qmktW45Xoh4vaYmQ', "jxZdT8o+imoxWRRdKxb2", 'WQRdNSkLW74PpmkUWRyUW5K', 'dmohWQ8iWRK', "kSk/peq", 'W7KujaddH8k7WOO8W680', 'dwBdVCkdDG', 'rY7dHW', 'vGNcHLL7WOlcTCk0wwe', 'ycWpa8or', 'W6lcLmktzG', 'jxpdUmkReCodW5RcNhPN', 'W4aOW4nvWQpcJ8oFwslcPW', 'pvNcNtxcGW', 'cx3cOY7cJGbRpSk6kq', 'W6KVW5HBW6C', 'W77cUCoQWQX9BmoQW78MWQC', 'W4eEfqrjD1q', "WRyHEMFcNCk/ueynW7e", 'W7uvkrBdRmk9WOOWW6aZ', 'W49kW55iW5JcU8kyCwtcMW', 'W78tm0ZcO8ovW7j5WQ5G', 'C8kzjdOg', 'gsJcR8o2E8kjW7hcIteR', 'W67cJCoDW7raWQ4UCmotWQ0', 'W7yyeq', 'vYJdHmohW4PDqCoYW5Tg', "W7RcN8kuDg/dQc50WPtcQW", 'WONdLCkzu8oLW7ZdQ8kElmog', 'amokdCoLWODdrmkHfCkL', 'W6XPW5pdUXqmWOFcICoSWP0', 'qsOC', 'oL3dLSk1mq', "W5RdG8k3tSk+", 'WO7dGmkwWQWQ', 'ia3dGL1d', 'o2BdQq', 'WPDdWQe2WQRcH8kSW6JcR8oE', 'WQpdVd3dJbeY', 'WQJdQ1emWQK', 'lHddTmolW5rVgSoKBSkG', 'ivFdSCkKD8kgW7BcMhHX', 'xb7dKmofW48', 'W60oaaPS', 'W5ldJWSLwW', 'vXxdOmoqgW', 'yqddNmkMcGpcHmknW4VdNW', 'kNtcKWtcSa', "qSoVnCo/tWVdTt8GW60", 'W7NcRwFcHsqkWOJcPX7cIa', 'WPpdRgHVWOxdHtq', 'WQxdVIK', 'kK3cRSoQpq', 'obddRSoCW50QuSkPoSo0', 'WRbvWRrBWPFcSmkCxxlcMW', 'W7yxxtzDedFdGcmQ', 'WOmWbs7cMmoU', "iwBdTCk/Fmkc", 'WRfpeMidug7cIwC', 'WOVdTmkUWQ06', 'W4iFpb1A', 'WQSzhaRcT8odW65AW7ZcVa', 'WQpcSSkIr30', "cM/cUZFdIvGdfmkLnG", 'WRKNlH7cKa', 'W5NdISkBEmkTemkhx1xdPq', 'cCoWlSoOtbRcShj2WR4', 'rmkylGes', "kSkuACkzWPS2cuL+EW", 'W77dLcKWzcLbgfOt', 'W6BdVCosW7FcG1RcTbeGfq', 'o8kdWRnXjx5ukN4Z', 'WQ0TWPZcL31hW4ldJq', "ix0Swmo+WPOhW4PJsW", 'eN3cSJ3cPrvRCmoX', 'vZxdMKxdGemUpSkLnG', 'fmokWP40', 'W5NcHmoqlCkbWRxcOmkxn8oR', 'W6VdJ8olpMVdMgHdW4hcHq', 'WPDXiL4f', "WPJdMSkirCouW7BdSSosDSk/", 'WRJdT1ObWOm', 'WQrXwvqmjqFcN8kLW6e', 'FsdcLLbq', 'WQmmWQdcG3u', 'dSoTo8oJwdhdVZKSW7a', 'WPj2C1qmjqFcN8kLW6e', "W4/cPSkQx8kR", 'WQVdUZq', 'WQVdPtxdGbq', 'yuBdOv0', "jr/dS8olW5LKdSoZwmk3", 'BeNdINeX', 'WOhdL1mmWOVcLaTvW4rJ', "WQBdLSk4WOn/", 'iKhcOZJcTW', 'jt7dK8owW5m', 'WQtcVmk8WO7cKW', 'WQRcLwDZisLEdYaD', 'dMdcOZ3cJWbHCa', 'imoWl8ouwa', 'e8ohWPW4DJLnk34', 'wJyEbCoNWPOeW6q3tq', 'W6LVmhFcVCkaeKukW68', 'nCoheCosBa', 'W5pdLJOhW4zAW4anWRFcKq', 'pMPwvSoiWQHaW6iNCW', 'WP3dV8k1W7FdHxFcJGOnpW', "W6WkW7b+W6K", 'WRBcHCkFWQlcQa', 'W7dcHCkJy8kA', 'zmkwWPNdIa', 'iKZcJW', 'hf7cN3H0W7BcGCkIdCol', 'jxpdUmk3bSovW5lcLNXQ', 'W5zmW44OW5JdR8ownsddGq', "ke/cKG", 'WQhdP8kzWOGy', 'W6pdMZqNygCDqJHq', "zSkIESkXhf/cSc4OW7a", 'W7JcISo6', "wHJcTwX/", 'cchdM8oOgSocWPpcVG4q', 'oWddRSotW64', 'c8o1imocDq', 'f3VcPcC', 'WQK8WQxcOgK', 'nSouzLDXAmoOWQeFqG', 'W6iyiqH9', 'W4hdGceQW6XAW4HQWRNdNa', "rY7dT2/dIcqGC8oQEa", 'W6VdJ8olpMVdMgHdW4dcHq', 'uCopWO3dPvS', 'WRldKSkFWQD7WOKwn8osWRW', 'W4pdQSk6WRvz', 'fgDeW4xcNSoZbCo9n8o9', 'W7VcSJpdIWWJW4dcKKZcSa', 'cCodhSoKuq', 'l3FdVmoLtCkzWRJdN1nF', 'WOGVktJcLCoMW5e8WRBdTG', "tmkIESkXhf/cSg1HW4q", 'W4eJn0FcSCkgcKWDW7i', "fmogWPW/BdDqix8", 'gCo0amozuW', 'ECkwlbiYpa', 'W6DPm1XctwxcHLWi', 'bwtcIc7cKXDNECoODW', 'WOBdHKalWOBcGL8lWPu9', 'dCocWOC8Cq', 'uCkIASkQmxxcSg1PWQm', 'W7RcQCkIqmk6', 'tJ06jmoP', 'iMBdT8kMf8kgWRRdGduI', 'zItcJvfZWP7cSmklsx0', 'W71NoSkkda', "WRBcN8kGWQ/cRW", 'WRadWQFcGuu', 'W5dcQSoZWOHG', 't8keW7TBWRVcNLBcUvtdPG', 'WR7cK2jIWQKEWQHiW7VdGq', 'WRNcH8kzE1S', 'C1BdV1W', 'tYClWO7dL8k3', 'W6X5W4JdLJ4mWOFcGCklWPm', "WRBcKCkACL/dQI9VWPNcVa", 'WQyTEGJdT8kYueqaW7u', 'vJJdM8o0', 'WQK3WPZcHgC', 'W63cJmobWPfF', 'nxxdVmkKbSodWQ3dJdK6', 'WQJdISkvWOCd', 'WPddT2nKWOFdNW', 'mhJcIhnp', 'W6BdRSoiW7FdMhFcLNyUwa', 'W6lcMmkrBCoEr1qWW7XM', 'W58scH1oAui', 'WRW1WONcMhSfWPZcPmogWP0', 'WRxdVJpdHHO', 'nWNdMMrP', 'W70HfaTU', 'jWddQSorW50', 'imkKk0ZdGG', 'BZyokCoWWOCmW5HJsW', 'WPNcKxzMWO8', 'W5ldKmkBAmkThmkAwa', 'm2NdVCkShmob', 'isdcOmoNjmolWQldJgnZ', "WRVcJwD/WQi", 'WRqiWQVdLqldSCkJaK4x', 'WOtdIemoWRK', "kx7cOXH3WP/cV8kutMW", "dmoqWRKyWPhcG3/dPv7dPq", 'W4JcLSonWOPo', 'WRe6fspcKCoSW7bWW77cJW', 'vJJcNqZcIbvGxW', 'pfpdVHtdKd4Ui8kLiq', 'W6pcOvBdTwy', 'WQ5SfLCQ', 'dSkpbW', 'iSo6eCoMW5z5rXOQpG', 'W7TCpmkyjG', 'WQbhhhm', 'CbldH8kly0ldL8oiW4VdHG', 'WRVdN8k9W7i4qSoCW5aGW7K', "AZFcIfP1WP/cV8kpx2a", 'kxBdJhe0WP3cVSkjsx0', 'WORdGmkouSoIW7VdS8odDSkL', 'W73dHmkyrmkp', 'cmouW7DeW4VdOtZdJgBcRq', 'EmkqmGiJjG', 'kCkhoCo7na', 'W6dcGSomW7ruWRfnbCkoWPi', 'WQDPWReTWOFcRCkSW6JcR8oE', 'W6m5W6q2WRxcMmkXW6JdLmkJ', 'smkjWPVdUZC', 'WOZcMwDJWQSsWPq', 'CComt8kID8o2W7dcMh7dHG', "hZ/dPmoEW48", 'qcixWOK', 'jaddG8k5velcRmk1W4lcVq', "W7a+mJD8", "x8kls8k+W4LBlmo0vSo3", 'WQRdM8kftmoE', 'cqBdOMbO', 'eWldO8oxW51Up8oZDmkG', 'WQFdL8kJWQGfEIboB8oH', 'p8oaWO05FtP8mgy', 'WPy4WRBcNg4', 'WOVcMSoik8kckmoCBqVdIW', "WQ/dNCkeW5q4lCk+WROUWRy", "WRldNCkeW5q4lCk+WROUWRy", 'W7DPcCkOiCkbW6ldQ8kYmW', "WQzieNnmhtJdKsm+", 'WQzKnfVcQ8kueeOkW4q', 'WPBcS8ktFfS', 'W7NdKgDHntnExgO5', 'ewpcGfnI', 'WRzqEHxdV8ogsbjIWPe', "o8k/sCkFWPW", 'WPhcMxbeWOS', 'wSo2WOZdQG', 'W4mIhqrN', 'iSkjg8onj8kZW73cKgpdHa', 'WPOWbI7dLmk3WP0OWQ3cOa', 'W6xcLCkeESkkarTOW7Wc', 'WQddR8kKWPmH', 'W5ZdGfPxW6uHW5jWWRFcJa', 'WQtdM8kPWOvfjmofWQTtWRy', 'ACkDWPRdMre', 'W5xdHIq7zg02qGTd', 'tCoeg1DSAmo8WRymca', 'WQyWEHZdRCooCYnpWRS', 'AtJcPmoLkCo7WQZcPdHF', 'rLhcOmkFWPGQtCk2j8o8', "W7tcV8k0vb7dQInYWQ/cTq", 'efNcPCkPWOeWi8kfWOeR', 'imomFxPBAmoOWQexjq', 'W4CVhdn6aCkmg8oifq', 'gGhdMmoBW70', 'WPlcLgb4WRGjWRDeW6pdMq', 'W4hdNse5W7D3W6OnWRFcKq', 'nr7dPSoz', 'n8kzCmkoWQC', 'rSopWOhdHhq', 'rCovWRddICk6', "qmkBWQL/Dtftn3KI", 'W5ZdISkgFW', 'WRbBW7hdIGVdPSocFXXb', 'W4hdKZCMW6W1WQjNWRNdNG', 'W6tdLcO2', 'W6XwzXBdT8o4WRKOW7SH', 'hmkTW5BcUSoAW4NcHSozxmooW69a', "W5JcHmoGW6biwuzgBmo/", "FtFcILv/W5ddRSoybYK", "ASo2bwpdRxX/W7JdMSkc", 'WRWRWOhcM3S', 'DCkwWOtdNa', 'fSocWQmEWOBcQgxdP17cPa', 'W48Vedri', 'vYNdPmoZpq', 'e8owWPO', 'aSoCf8oJWP1i', "W5ZcJmobW6a/W5NcJr91WR8", 'AmosWPJdNmko', 'W6xcM1BdQ2G', "pd7cIM/dNunNCmo2yG", 'W6uZob1B', 'W7xdLCkmWQu', "W7rzbSk+", 'WPtcI3b4WQG', 'us3dUmorea', 'EqVdOmoOW5v1k8kxWPq1', 'w8oPWOddVCkjWPxcIG', 'W45MlwtcH8kVlK4DW5e', 'aColnmobrq', 'W7fkcM7cRa', "WPpcHw9+", 'WP8JWONcGv4', 'W6hdKd4', 'bSobWO88Fq', 'W7BdNCkyESk6', 'W6JdJCkgWPzC', 'CCkpdSoXmSo2WQtdItFcGW', 'WOpdSr3dOXG', 'WOBdHHPrW5NdIqDkW4PR', 'WPRcJCo7W41QpKGli8kX', 'WQLhhhm', 'W7hcUgVdUq', 'wCkslImw', 'nHpdV3Lc', 'gCoFWRqEW5tdOYpcQHVdNW', 'hKJcHxPYW6O', 'xmo5WPJdMhxdG8k1r8oYW4O', 'W7bOpwFcNG', 'umkFW44EwHqtk28T', 'WQRcIgDGntjZluCt', 'W6BdNrJdR1e4W4pcLNdcUa', 'CCoJWPxdG2tdHSkxqCo2WPW', "W5C/iIpdUG", 'nSkmbeJdLW', 'kgFdTq', 'jCk3oG', 'WQzGWRqtWRC', 'n23dVSkW', 'lqpdPq', 'oJldISotW5q', 'W6ZdKdaesW', 'C0RdTNWs', 'W6xdGIK2CW', 'ghlcISoKbW', 'bCo2pW', 'cSogWP84tG', 'zdFcNa', "W4dcU8kGWOuQumk+WQCUWQy", 'WRJcMCkfAG', 'cCkRW5hcO8omWRtcVmoenSoX', 'WQpdM3zCWOO0WQHAW4pdQW', 'aCkBeKBdGq', "W5PYdSk+cG", "DSoQWOldP8kjWP/cTSoRDmoU", 'fSk1uCoOWPK7dwvNCq', 'WQhdT8kHW6LtW53dQZjcWR8', "yCoRWO/dHhZdGSkwvmo2W44", 'yc7dSCoGiW', 'W7qtmqa', 'WQhdSw1UWOFdIrpdNL1W', 'WRxcI8oMWRbRECo7W6H6W68', "WQK3WOVcMwTcW5pdJmk+W5m", 'W64rcsJdQCk6WQ0YW4yn', 'ndNdTmoRW58', "WOtcImk+WP/cSG", 's8oUWRtdL2y', 'W5BdHmkbF8k1emkAqf7dPa', 'hCoUnSodxq', 'W6tdHJm2C2aqvbns', 'W6bpW7NdGaddTmoHDxfkW6hcSG', 'W6b5WQFcTfqcW4JdI8kMW6i', 'WOddKmkkWQW3', "WQ/cQ05oWRS", 'WPfGwv0Oq8ofwSoZmG', 'nxJcVZRcSq', 'W5K5cGq', 'W6LJkvZcUSkhcLaFW74', 'WO9QpxmH', 'WOS7WOBcK2S', 'otddVvTl', 'W7FcG8oNWRLSzq', 'rYBcKghcJqXGBCoXCW', 'cMZcHCkZx8kAW5BcGYu0', 'ECkuESk1WPn5xW8WpG', 'WPKuWOtcJgS', "vmk+AbGZiSkxW6jFBa", 'WOVdKmoGWQuoEKHezCkX', 'FJFcLLG', 'WPGMwuKmmrZcSSkpW6e', 'aCodWPO0AN5AkgiL', 'lLFdVSk5FCkFWQVdHL1p', 'W6vEeW', 'WQzAWOWsWRy', 'DeRdO18', 'EJpdHaCOW4ddQ8ohqqq', 'WPFdH8kFrCo5W7ZdRSoey8kQ', 'W47cOCoJWRzF', 'k8opp8ostG', 'W7JcGXjcW4JdKqTkW5T2', 'Aq3dOmo7W5vPC8oaWOe8', 'W43dUIWCDW', 'W6FcVxddV3SWacHIqG', 'bCk3p3hdKG', 'wc5mW4ZcG8oLzSkFtmoM', 'W4hdGcfPWQ0jWOunWQBcGW', 'je7cImo0ea', 'W6CgutzmaIFdHerl', 'CmkgjXO0', 'fL7cHNXQWQVdG8oFySol', "W5JcM8o/W71artucwmkH", 'W6xcO3RdSgOgtxqNeq', 'WO1YWP8bWP3dUSohmIBdLG', 'WO7dJCkZWQKcCG0', 'yrlcP3Pi', 'iflcMa', 'W54SfqhdTW', 'm3BcNZSqW5ddSCohgIK', 'pSkFBW', 'sZNdH8oVcSoAWPpcUGis', 'BmklWOpdGHD3kCktbJO', 'qCoQWPddUCkM', "W5JcHmoGW6bapKGdrmk/", 'W6jemxdcMa', 'yr3dNmoVbXhcG8kjWOxcHq', 'rCkxWRtdLcu', 'W6JcG8oMWO15', 'W6TKna', 'y8koWRldHWz1pSkobYa', "pK/cKq7cIq", 'A8omfmkpxCo2WRpdMs3cGW', "WOaGscKmoaFcJ8k+W4W", 'zeddOuOdWPFdRK4PWPq', 'j1NcSSk9WPODcCkfWOeJ', 'ybWFjCoI', 'W5lcGXjcW4JdKuGlWOG7', 'dgTeW53cMSkuzmoseSk9', 'zZWhaSo2WOC', 'WRSbWONcNu0', 'W5GIW7ThW4K', 'WQxdTCkgWOvf', 'W4mNBJ7cQCkfW5HKWQ5W', 'cSovWRiDWPhcVwG', 'WOBcUgbLWRK', 'W5NcHCoDgSkRW67cJCk9n8oR', 'i8oSW74GW4xcGtZcQHVdRq', "W4nclL/cIa", 'd8oJnSo9', 'C8khdbSO', 'W5iCptBdSW', 'DHZdQ8oUW5v4', 'WRG8WPRcGMDCW4lcICoZWOi', 'W5RdRqSQW6XAW4anWRFcKq', 'WRVdJSooW7b1ySoWW6L6W7m', 'WQhcKCoCW7yZW6dcVdjFWR8', "WRlcVCk7WOm4mmk+WQO1WPS", "j1NdNSouWOHlmSo4WOe+", 'WPxdM8kTq8oQW7NdK8oFxSkk', 'lmk2yCkOWR8', 'WQG3WPlcVLi', 'nCkwAmkYWQiSfvq', 'aSozWRe8CZDzg28M', 'W50PcHG', 'W4uEfXnyBq', 'bJFcUCkmsCkwW5BdReDE', 'WOKHaMVcM8oMWOjHW6xcNG', 'WP7cJCksWO3cNq', "DCkbWP/dMa1Hl8kBbIO", 'W7GBuu0Xc1ZdNf5f', 'WQVdNmkFWRDQW4XByCkbW68', 'lmkrBSk3WRq', "WQNdUSkeWRb+", 'W7VdO8kjWQHG', 'f03cMYpcGW', 'WRldKSkFWQD7WOKwkSofWR8', 'mwldRCkkbCoiW5xcJwDY', "c8owumk/W6qQaCoEvSo3", 'oSoumCo6ua', 'W4WdeabF', "imk/ofldKW", "W4C/dqLRgSkhcCoieq", 'WQVdMmkcWQa', "WONcRJHcW4JdKqTkW5T+", 'nmkyDCk1WOi8fu5ZBG', 'WQBcTmkSDKi', 'W71uamkflmkfW6tdOCoQyG', 'iNRdVCk7', 'WQpdVHhdKr4LW6xcIwJcUW', "tmozb8k4z0/dJw10WQm", 'W4tcLCoQWRz9ACoCW7v8W7G', "zmkzwCkKW4KaaCoEvSo/", 'WP7dN8kTqCot', 'BSkgWOFdLabM', 'k8kdj8oaiG', 'WQK3WOZcN3bl', 'aSogWOi9FsPo', 'W6NdKmkTqXNdNNffW5ddPq', 'DJRcUCkShmovW7hcNMzH', 'BSoOW5lcIX3cRCozaSkZWPW', 'e8kZhvBdQW', 'W4ZdO8kyWOzf', 'WR4iW67cMLJdPSoTv0D0', 'kCk0ietdHcy', 'psJdONvp', 'dSovWQWuFW', 'W7FcH8oRWRT0', 'W5epkXfFyfm', 'yJKy', 'W6rPvMVdLmkOWOi1WQ3dKW', 'WOZcRvHNWPy', "mK/cICoQ", 'DXJdTq', 'W7VcKSkg', 'CSkrnGm5', 'WOFdPhP0WO3dMwNcGcq7', "W7/cGSooW6KVWRC5D8oNW74", 'efBcTItcSW', "kXVdQgrpW4lcPtdcM8k+", 'W7vBW67dLrBcPCo4uva6', "zcJcSSk/FmkuW7BcNd4M", 'WQVdMmkdWQb2WPWbFSkdW7a', 'tCozWOJdQfK', 'WRtdTZVdIq', 'WQhdTh4rWQa', 'W7NdLJumBgyqvbnw', 'tY47WP7dGmk2k8olgmo7', "W7/cJ8khzW", 'WQpdNSkLW74RnCkYWRPbW5q', 'W4tcUCkIymky', 'W6mTzrFdOSovjxrgW4a', 'cSouWRypWPhdTc7cPG3cQa', "jCkrW6PBWP3cSM/dO1RdQG", 'WOC6nZNcHSoPW5S', "WR/dOJ/cHubOWPZdNhtcIa", 'W6XKW4JdHIuHWQ3cICoSWP0', 'WPtcLSonj8o5oSk3FbxdUq', 'W7ZcJSkizG', 'WRBdGCobkmoEweSTW7r6', 'BMtcQZykWOpdSxxcM8oi', 'W77dJdC2', 'W4hdNZ43W6WHWR0eW4ZcGW', 'zdNcIKvUWPxcOW', "W6lcNCoaW6q/W5DPvmkCW68", "gmoNkmoLrq/dTw12WRW", "tSoEWOe/AYPynNK+", 'E8kBkaqLlCk6W6HzDG', 'tIChWPldNmkKlG', 'WPdcTCkHtfS', 'nSouzLDXymkpWQ9AAG', 'sWBcTfjF', 'eeZcN2LQW6FcLCkHdW', 'WOtdOr3dQJ4', 'W63dHmkTu8kx', 'W7VcJ8khyCkzeb8', 'WQTVWOGyWQK', 'hMBcSI7cHeO1e8kpnG', 'ifNdRmo9WOfXD8orW4bG', 'WRtcUSkrWQFcNxFcGq49fq', 'W7WUmrH2', 'ibtdRSoyW4XI', "W6BdQvFcR193WOhdNa/dTq", "e3hdU8k/mW", 'WRiwsSo6zmoaWR7dICk0BG', 'W7rcoCkdfG', 'agxcPCowha', 'W7xdMCkoWQ4Y', 'WPRdVCkXWQS3', 'ECkwlcGZkCk8W7vBya', 'zmk7WO7dGWzZl8kFqh0', 'WOhcJmkbWQhcUG', 'W7tcKCoNWRTQwCoRW6HGW6u', 'W5VdSslcSxCnfJj3sq', "WQ/dP8ktzCoV", 'W7jOkfZcPSkfgWLqWQq', 'sCkdW6jxW5tcK17dNrxdQW', "cN/cKuTk", 'ksBdUmoZW7K', 'WPmAWQdcL34', 'WRNcGmoCWO9kWQFcMh0DW7u', 'W64Adrfi', "WQNdSdddUHi4W4/cJ1VcSa", 'zSoyWOtdN8k0', 'zdJcGL99WPJcPq', 'r8o6WOtcR8otW4tdG8kUq8od', 'aCoTnmoIsbRdOG', 'lCohWRC4FG', 'zdZcOSoTh8oTWQldNxbL', 'WPm6WOa', "ssuqWO/dIW", 'p8knaSoN', 'd8oDWP0LFsXjpx0I', 'm0tdVCkckG', 'zdFcNhDUWOtcSmkeuwW', 'W4aIcHH4hCkkh8kCtW', 'W4mNBJ7cQSkfW5HKWQ5W', 'WP09fYxcL8oTWOiQWRldHG', 'WOddJSksWRXQWOGMjW', 'WPVdM8kyu8kIWQ7cJCk9n8oR', 'W4aCfbvyBftdKSkSW7O', "W7BcN8oVWRD/zCoQ", "W6O8W7j+", 'agJdKmktaCo1W4lcQeL2', 'W4eucGbPA0q', 'W57dN8kFWQHTWONdTgS', 'WQNcKM9cW5xdKuieWOGQ', 'n8oriCoEWQm', 'W7tdKmowFvhdTIq4W4ldOa', 'CZGhWPxdL8k3aSoAeCkJ', "g3VdSCk+D8kdW5hcMce", 'AmockCo2W4DGx35DFWviWRK', 'WQNcRmkcWOJcKdldN0n0', 'wmkmW7CsWPRcR2JdTLxdPW', 'omkbxSkYWQ8', 'gvldN8kVcW', 'WP4EdH7cNG', 'WPldQ3HJ', 'WPb1WPqQWO7cT8krz2tcLq', 'tIe7WO3dK8kHoCorfmk4', 'isBdOuLcW4BcOZRdG8oU', 'amkzhg7dJq', 'WRVdHSkPW757BmoTW78UWQa', 'D8oRWPFdM3xdGW', 'WPVdP8kZW6xcPxFcGXeWdG', 'm0NcKSoH', 'W7RcHmkpB8kkea', 'tCkPBYXHfCoOWRWxBa', 'zCkrmG', 'WPpcTfLaWQe', 'W6bKneZcLSkBgKWx', 'rNSggCo9WOyDW5XLwG', 'WOK4gaD8u8kDeSozua', "W4a+wqnUhCojgmoteq", 'BSkkWP7dHqzGCSobzum', 'nCkcjSoOpG', 'FSkrnbG8kCkJW6rp', 'wMq2vSkUW5vzWOiAja', 'jSknfSkJ', 'kSkKBSkhWOq', 'W590WP8gWP3dSSoboddcGq', "yr/dG8k7stNcQSobWRddLW", 'imk5hKJdPa', 'W6RcJmonWO5x', 'W5RdQSkrsmk4', 'dCkVkgNdPa', 'tmkIESkXhfFdL2mKW6W', 'lCkwDCkLWPmgbeHVFW', 'C8ouEuHSAmktW5WExG', 'WRW4WPVcHxTi', "fHhcLmk7sCkhW4/dT2P0", 'DmksdI88', 'n2NdUSkGlCofW7FcMML2', "uta+g8oK", 'W6VcQhNdUhKleq', 'jCkrW6PBW4ddRsFcMJhcPa', "W6BcT8kMBmk/", 'W4ufmI9s', 'd2VcPsdcJqjLE8o8', 'W4BdJmkBEmkTfmkBvv7cTG', 'bKZcJa', 'xIyihSo2WPeOW418', 'kmoGWO0JWPi', 'nwJdT8k2bSouW7dcNhXT', 'mw1hvSkKW5LjW7zvza', "FHZdTSo9W5n/ESoaW4u", 'W6WFB1tcQmoUW5r5WR9X', "pSkobCoDimk+W7RcLh7dGG", 'CCoVWPRdHhxcJ8ole8kRWPa', 'WRRdOSksWQzQWO0qo8kuW74', 'kMNdV8kZ', "r8oGWO/dVfy", 'lNtcVwrxW5JcUX1MW7y', 'W7BcULRdMgC', 'WQhdLMmQWQm', 'WQiQWPZcK2XyW57dMCkPWP0', 'f8o2WRCwBG', 'W7hcJSksEmkBfei2W5e3', 'nmo3WPC8AW', 'W4FdN8kwzmkV', 'l8kQW4RcHJZcH8k2ymozWPi', 'k2BdOCkID8kvW6VcKYmX', 'W6xcSg8', 'W7mDgbX8', 'tmoQWPxdVCkdWOi', 'vrOqWPFdVW', 'aeNcV8oegq', 'W7ZcSCkptmkp', 'W7dcLmkpA8kkeqrJ', 'W5NdISkBEmkTemkh', "WRVdHSkPW744lCk+WRjjWRG", 'W6PadNlcHq', 'W4pcOLvBW4VdTNhdPGKm', 'sCkeW6vlW4xdPstdK2ZdPwFdMCod', 'A0RdOv4dWO0', "iK/cKSo1hrdcGSklWP/cIq", 'W45PfsRcH8oTWOiHWRFdMW', 'W7hdKmkEWRP8WPGblmovWQe', 'AtOge8owWPSk', 'WOhdK0alWPZcLhqdWPu6', "e2/cUYtcTWjNASo2", 'wI7cJbldItG8q8kLkW', "W5NdI8ktySk+hCkb", 'lXtdN8oCW4PVdmoIySo8', 'W7vjW7ZdJJVdJmk5aHu6', "WRfbsM/cUmo4W5H5WQ5G", "W7f/m1ZcTSkBgva", 'W7iDW55vW5JdSSowiJddMG', 'jSoyzJGtaSoMW65vBW', 'DJBdKCowkW', 'W6rNbuhcVmkqhuGFWRi', 'W57cRCkTBCkZ', 'W7rsiKvXjrRcN8kXW7q', 'd8ozWQ4', "nmk/pKtdLq", 'eMpcPCodaG', 'wMRdHxbPW6ZcI8kMdCkz', 'CY4kWPNdNCk0l8orbmo6', 'WRSyWQVdLqNdUCkKaM5h', 'W6BdOCkLqCkW', 'W7SBnadcUmoQW4HJWQ47', 'CxFdHu8t', 'WQhdJCkSWRuv', 'W6JdI8krWQf8WOtdHx9wWQq', 'iYxdSW', 'WPXMWPawWQK', 'dgBcSahcQW', 'WPCFWRVcV196W67dV8kFW7O', "W6/dJ8kzWP9RWP/dK3mlW7O", 'WPhdOgrzWPBdIc7dIebE', 'WONcHCofmmouF8ovfHVcTG', 'cx3cOYRcKHD3BSoGnG', 'WOitidpcPW', "W7nycCk/zmoFWQNcS8k6wa", 'W63cPCodWRj0', 'rmkvWOFdQaO', 'tI3dHW', "BG3dQCoSW4n/BSohWOG4", 'ig3dOCkIymkiW7VcMdq', 'WQXph3iIq2RcIq', 'W6ZdGcKWDwarsq', 'W73cHmky', 'j8kKjmokma', "qu7dOvS/", 'WPSNeI7cHSo8W4n5W6G', 'WONcHCkUvSoWlSoeAXVcQW', "W7/cG8o6WQPQySoNW79Q", 'W6tdNmowuxldJ293WPlcSG', 'g8oDWQq1WPxcSxK', 'cwtdSq', "W5W/hb5CbCkmfmoi", 'yd7dImozW4O', "W6/dHJmHBNa", 'EI3dTSkMsuldL8oiW4VdHG', 'WOBdLwD3WRm', "W6ldG8ksWQzHWP/dM3CB", 'W7lcTg3dUhaqesD4ra', 'W6aUW5fzW5m', 'WOVcMmovumkexmkUbgBcTG', 'W43dQSk7WQHU', 'W4NcGSktBCkFda4LW6Gi', 'kmkDh1JdRW', 'WP88sSo6zmoaWRBcRSk6iW', 'WQlcVmkjWRZcNx7cHtWkfq', 'WOLerKKmxNRcLSoEW7e', 'WRxcNSkvEXdcUN4LW5dcGW', 'CCort8k1zSoTWP7dSY3cGW', 'CIldGmoJeq', 'l8ojcmouWOy', 'WOVcG8kvDLxdOqnH', 'W7yRcc3dIq', 'WQyTEKVcVSkggWLEWQK', 'WQVdTh9ZWQe', 'W7tcV8o6WQLZ', 'Ae3dPwyvWOtdR1KXWP4', 'W6xcVNhdOMOrecvIsa', 'bMdcTcRdGfWXi8kLtq', "vSoCWRGvWOFcQhNdPu/dVq", 'WPBdHSkssmoUW7tdPmkElmog', 'zmkqldm3', 'lt3dJLnB', 'euhcMa', 'W6i2WORcNefCW57dM8kJW40', 'j23cSSoPlCoAWQlcPG1S', 'WRBdSCk7Dmoz', 'nSouzLDXAmkRW6beya', 'WQhdRNC3WO0', 'WPpdVqddGsS', 'WOLSwurExCkefCosaW', 'o23cHSoQaa', 'DcqHpSok', 'tmk5cdGC', 'W4RcL8oXW7HvBqjaECo6BG', 'WPFdLwuAWO0', 'WO1YWO4AWPhcVmkc', "W4/cTdOYWRJdJWpdI3Xy", 'W5NdHmkf', "xelcIxDzW6/cL8k+dmko", 'W77dKCk6t8kJ', 'pmk1W4BcKeVdUSoqECkJW6e', 'krjfg8o8WPSAW41Yxa', 'WPddUXZdJdq', 'WQddOdVdIbO', 'W5lcGXjcW4JdKqTkW5mz', 'rmofDmo8uXhdOZKSW7e', 'C8kkWP7cKqX0E8kthdO', 'WRGEWRZcKLpcOG', 'W7JdLcm6zgCkqHuA', 'W6WslHFdVmoXW4nuWOrG', 'FrJdSCoGW493rSolW4rU', 'cwRcOZRcKG0', 'aSoGo8oJ', 'BCkbWOpdLHD6', 'WPjGWPeqWPm', 'W7VdRCkZzmkG', 'W5xdLCkfz8kG', 'WQVcHebcWPq', 'iXpdQSoGW5PRhSoZwmkJ', 'W79PWRKLWRdcH8o3W4xcHCoE', 'g8ozWRylWOdcUw4', 'iCowW5RcI0nPvSoWsgK', 'WPOrWQZcGhW', 'cCkKW4hdPSkcWOJcISoVDSo9', 'aCoxcSoWWOXsvCkhbSkY', 'l1xcMmoHday', 'W77dISk4FSk9', "W58emIr+", 'aCoBe8oBWOrpt8knaSkY', 'lWpdPCoEW4XVrCkMk8o0', 'F8oWWPxdG8kQ', 'WO4BWPlcGNS', 'pmk1W4BcKeVdUSoqECkIW6e', 'WReHDJJcUmoLW5HPWRvn', 'bSoaeCoVWO4', 'd8ouWPqjWPK', 'W4CidrvczKlcN8k6W74', 'WPZdMSkFuSoY', 'W4ddKmkhzCkQoSkdu0K', 'W6lcTgZdPwWmhcnY', "W6/dICkOWRnh", 'W708W6dcMfNcQmoQvLbO', 'WPZdNCkTv8oa', 'emkdqSkXWQm', 'wdpcQ8oMW4n6xmodW4HT', 'W75tbmk9mmki', 'sCoSW7DgW5tdRcFcMJhcPa', 'W57dKuftWQ7cJshdJ11q', 'WPX7WPSuWOO', 'bSobWOe8', 'WQdcVmkhWRO', 'WQhcJmouWOCMWOddMxWmW6S', 'trddI0zBWQVcO8oGnCol', 'D8oNCahdNf8AWRRcKmo9', 'Cx3dNmk7svxdGSotW6BdRa', 'rSo3WPldU8kjWONcISo3Amo7', 'WQS4hblcNq', 'WR7dICkfWRvSWOCboG', 'W6PgW67cRMVdR8ocegG6', 'W43dHCksWQu', 'ieZcNCo0ba', 'WRNcHxTUWOG', 'esNdTmkQhmovW7hcMNP2', 'FrZdSq', "WPhdGKehW4JdGbLCW4f+", 'W4FdISkyBG', 'sdpcI1H9', 'BCoRWPBdLq', 'W6RcSHxdPZv5W47cNKxcIG', 'W6ldHmkzWQnJWQZdKNy', 'W6jOkvZcRCkAb0Wl', 'WRBdNmobpCopq2yhW7WD', 'W6hcICky', 'c3vlvSkZW5vjW5P2xq', 'qIlcSNrl', 'WQO7WOFcUuC', "muxdNmk5vL/dL8kZWRBdJW", 'W6FdJdq2Bw8', 'iKZcK8o1day', 'W7RcLCoSW74SomkKWRP1WPS', 'tmk9zCkShctdJwqsWRi', 'W6ZcGSk0ymkX', 'omoNfmoqAa', 'W6xcO3RdSgOgtxCJcW', 'WQRdRSkdWRaT', 'bw7cSvvP', 'W6W0WOFcHhS', 'WOVdH2OdWQi', "bN3cSM/dKva/jmkLBq", 'W4xdGIeGDa', 'WPFdLSkkuG', 'WPFdRgPJWPRdOIy', 'WRyAWR3cKbBdT8kReq86', 'xKJdJwWr', 'WQ5SpLSE', 'BeZcOmowW5z5gCo3ACk3', 'WONdKColh8k0WQJcOmoSsSoI', 'W7JdNcKGDwGqrait', 'WRRdPw9PWOS', 'W7zDeSkmkG', 'emocWQynWR4', 'hCkzW6rkW4ldSdZcPGlcTa', 'WONdKmolpGdcVKWsW5ddUa', 'WPhdJfWwWPRcNKCgWP4S', 'W506cWPt', "jflcImo/gqFdL8oxW5tdMW", 'W7FcO2VcIv9MWPpdJapdTq', 'n1NcHaFcIq', "WP8PWQ/cG3S", 'ESkrkbaLia', 'jComALCEcSkcWQ9yzW', "k2ZcUcyCWO/dSwtcG8kJ", "WO/cK3vRWQizWOunWQJcJG", 'iCo7m8kQWOzcs8kHemkL', 'WOpcSSkBDxy', 'W53dO8kWzSkk', 'mSkLAK7dKdWWW7NdMmk8', 'W5hcHXPZpcLohgO5', 'WOv2WQCBWRy', "W5ldRhaOW4BcNKKaWQq/", 'DCoxk8oQW5ywjxaKCq', 'AclcGr4PW4hdO8olgJG', 'xYldTWdcOIKGCCoNFa', 'cd7dJvv5W6FcIqldUmoD', 'W4hcQmokWRjq', 'iMBdT8kMf8o5W6BcJw1J', 'W6NdLI4gAq', 'CComt8kID8o2WRpdKuRcJq', "mK/cKCoJ", 'lCkoA8kJW5zMwaCQrq', "W4pcLGzrW5/dIrWzWPKvWQlcHKi", 'AvRdOLSsWPC', 'BmkDWP7dLa90', 'qYKoWQldHSk2jmomfmk8', 'tcRdNmkMsuldL8oiWOJcHW', 'WO7cQeLyWQu', 'W7VcGmkz', 'ACohn8oMWRKBlrrLFa', 'W4WjebPFCuBdKCoMWQq', "ir7dRSomW4XVh8o/ACkN", 'bgVcVIm', 'WPtdNJddHH0', 'W7BcH8o6WRvhzmoWW75RW64', 'yuRcR18wWOVcU0m4WP4', 'jqJdRmoDW40', "uH/dMcylWOJdMmoYsmol", "W6ldNmowlWpcS204WR/cMG", "WOddL0SsWO3dKrrvW4z+", 'WRxdOSksWRXMWOaioSooWQ4', 'WPKMwuKmBeNdJmoXWQa', "vJdcHv1/WPBcO8kixw4", 'BSoLWPxdG2tdGSklt8oYW5C', 'AWybWR7dGa', 'W5hcS2VdI1a', 'WOVcO2zlWQO', 'WPfKpgyU', 'zSkHiK7dIZCWW67dHCkV', 'WRddSmkNWPPF', 'WRjgh8kUzmkpW7JcRSo7iW', 'j1lcNCoRda', "A8otW4/dOmkoWPhcOCoJCCo5", 'W69BWRxdUdZdPSk5aHu6', 'oSoPW6FcKumYE8oAsgK', 'i8k3W5VcHIVcQSoZaSkZWPW', 'W6yom0j2eCkdjCoBaG', 'cY7dGSo1l8kgWRJdNZ45', 'C0RdVu0oWPxdVG1IW4q', 'WOhdIfShW4JcNK1kWPm7', 'ngtdVCkI', 'kSksB8kZWOy', 'jvpdNmoYaqFdL8kMWO7cKG', 'dSoaWPOWDJ1yzdj4', "eMVdImk/gq", 'W53dGCoCmmouF8ovfHVcTG', "dq/cRXLxW4xcUW19W5m", 'iSkZleJdItDaW6JdN8kT', "WOFcIw1+WQKi", "rmkZA8kPef/cOx9+WQ8", 'uCknWOxdVZi', 'waOwWOFdQW', 'kSoNlCo0Fq', 'WQ3dUZtdGte2W4ZcMq', 'WRzXbvOV', "W7vtWONdM1VcQCo3uuf/", "WQ/dImkcWRW", 'WOVcLCkyE13dVa', 'ixvlvSkZW5vbW745qW', 'sCkhjr80la', 'WRxcQ8keWRe', "W48+fGe", 'BfhcOmkFWPHPdmoLySo0', 'WQ4HWQNcNvW', "agVcOX/cKGX6CCoXBW", 'W58uvNBdLmk4WPKyWOFdMW', "WQeEWRZcGu/cTSo8aGOL", 'ECkwlcGHpCk6W7fBya', 'WOtcKK5S', 'WROFaclcOa', 'WP3cOWFcHuj3WPFdJXtdMa', 'ce3dISksyW', 'WPhdHM0bWPRcLeOEWP52', 'W6ZcJSoW', 'WOLot08HdWFcN8kLW6e', 'wGHclCkJWQHjWOq3rW', 'vsNcLmkXwmkmW5BcT2P0', "W43cNHi5WRxdMhbBWQz+", 'WQdcOSkjWRa', 'WRG6hrRcRG', 'W5xdQIu8yhSADarB', 'A0BdUvW', 'n8oFC8okdclcShbPWRC', 'CCoAw8k4D8kTWP7dSY3cGW', 'WOHvjwaa', 'BqRcK8oLuSkgWQxdNYGI', 'WPhcGwH4', 'WQVdGCk6vCoxi1TqW7Wa', "fSocaSoToCkLW6FcNh/dLW", 'ECoxo8oMW5z5rXOIwq', "WP/dKCkiWQS6", 'cCoSlSoJrq', 'AHyygCod', 'WOLSwq94amkmwSkjrW', 'nrJcOXK4WQFdKqmYWPK', 'WRRdH30fWP4', 'ASoCWRBdVvu', "WQm+WOdcMxm", "WRWiWPNcH1/cSSo8ua", 'WQpdIxKGWPa', 'Emknba0A', 'ymkqWOJcMviJBCowshG', 'D3K5W53cJ8oZESkeCmoz', 'WQivWQdcU0W', 'W5JcHmoGW6GNmaveBCoI', 'ySkvkHW0la', 'dmoli8oIWOe', 'WQRcR0PPWOq', 'WRFcOSktrNi', 'W5lcI3vmWOxcNKuzWO87', 'u8kAnci2', 'W7BcHSo8W54VW4XeFSkCW68', 'bSkeEmkUWPm9', 'obdcSHKSWRJcSNzSWQy', "WQJcQSkSWQ/cKG", 'WRrdusrDgcFcLW5V', 'W6FdLd8', 'WQBcVSkFt18', 'j33dOCkIFCkkW4FcKZqM', 'm8kng8o2o8kZW77cIMO', 'W77dK8kEy8ka', 'a8k8W51BW5tdVdZcTXVcPa', 'uJxdHmoJsCkjW4NdSuCL', "yHOxWR/dTq", 'W79zbmkPmmkfW6tdP8o0Ca', 'W6CBuszxlW3dJcnf', 'W4VdQColhCkRWQxcU8k6hCoR', 'a8oydCoNWOfHtCks', "fCoqWRWEWRFcQw/dO1tdQq", "W7BcTd/cRIfErr1ldG", "WPm2WP/cMa", 'DJJcPSo4uSo9W5JdLLmW', 'cKNcR3HW', 'W7tcVSolamkRWRxcOmkxn8oR', 'BfhcOmkFWPGQrCorkCk5', 'W4CidrvczKldOmoMWRm', 'm8o1nCoIvaRdSwrYWO4', 'j2FdVmkLzSkvW7FcNIqQ', 'W6eslJz9', 'WRdcTmkCBeq', 'l8oDe8odWO5Xw8ky', 'C8oTWQddOSkn', 'pf7dRCkahG', 'WRldTYJdJbeKW5xcNuhcTG', 'W6HDdSkVkq', 'huhcVSkMsCkwW5BdReCD', "yG/cUW1nW4xdOcbxW5S", 'fCoqWQC', 'cCk5W4hcR8oeWRZdKmoJD8oW', 'pcddRNbpW4lcPq', 'WPpcJ25N', "W6/cLCoAWORdMgRcNGe7oa", 'auZdU8kFzW', "W6G9W7HMW6/cH8kZW7FcSSoE", 'WRP5WROBWOdcH8kSW6JcR8oE', "W6/cQmo9WRXS", 'BG7cVKr3', 'cmovgmoJWPO', 'W7FdJ8k7B8kU', 'W4JdRcyhyG', 'WQ3dISkPWPfAr8kWW7vSW7W', 'h8kOa8odiG', 'W6tcIxJdHNu', 'WPnIWRamWPe', 'W57cVte7W4ldTH3cKNia', 'aSozWReLAYTtigG1', 'WOyCWQZcGMS', 'WPBdRx1Y', 'aCoFWOGJDZLAlxLU', 'eu3cNspcJa', "ku/cJ8oY", 'W50eW5LXW6W', "zdxcSSoIjCoCWO/dT3bL", 'cMFcScdcKXnRCSkSlq', 'WRBdJSkWWQz9WO0D', 'W5NcONZdUxShnInN', "Et/dL8oUdmosWRFcUaW", 'mLVdRHy6W5ddSCohgIK', 'WO7dQ0XQWQK', 'WOJcK0b4WR4BWPK', "W41vgmk/jCkuW7pcPSkUmG", 'tKxdPxGV', 'agVcOW', 'oJhdUxG', 'g2ZdR8oBqmoTW4FcKuDd', 'WO7dPY45W53cKgddOhqy', 'WRPHW4y4W6FdImoIWRVdU8kB', 'DCkDWP3dLemTzmohsbi', 'tmo3WPxdVCkv', 'mKNcKCoap0ZcS8kTWOJcTq', 'W6eflrzl', 'W5Ssobjv', 'W6L4lM7cRCkue0WC', 'W4ddLmouW74LlCo3W7r9W6i', 'dCowf8o3WP1svmkDaSk4', 'tmkIESkXfdJcVIaMW60', 'WQpdOc7dNdSYW5lcN13cVa', 'qahdOLyzWPBdR0GVWPi', 'WQlcQ8kyWQpcKa', 'WOZcJMDJWQSsWPq', 'W4FdImkLWQDL', 'rConWPNdILS', 'swhcTsxcVXrMD8oOzq', 'WQFcHmktBfNdQZjSWPhcTG', 'WOCXWO3cHxS', 'B8khWOJcKvWTzSoAmXq', 'W7FdImknWOrn', 'WRFdGSkhv8o7', 'W5WUaq1m', 'nmkMk1pdGJXK', 'W7ldNmkDWRDMWP4', "W7/cLCk2W7PIWOmklCoiWQO", "W7CMW69LW77dGSo+WRZdTSko", 'WQVdGCorm8oZCKSTW7WD', 'WRxcKSkf', 'W5SPgbH8w8oBs8kexa', 'k8oGWOq5WPS', 'fCoEWRKiWOdcUw7dO0ldTa', 'l3NdUmk4DW', 'mX7cUrvxW5tcQH1XW5S', 'W6tdTmkwWO5n', 'iGBdIKjq', 'W6TAkapcUmkXWOWQWQ4V', 'W5VdKCoCmmouF8ovfHVcTG', 'W5zUaLNcRG', 'W7FcSCkZtCkU', 'CXFdOCoSW5LFzq', "p8oaWO05FtP/pq", 'WRddK8kcWQbQWP4qj8omWQO', 'd8orWOqoCc5tjwaI', 'p8kpcSoDnmkKW7BcMhNdHG', 'W7vBW67dLrBdPSk5cNi0', 'W7jkjfqrju7dKCo2WRu', 'oCkHgSoUaa', 'gCkLkuNdGJzrW67dMW', "WORdHmkzsCo/W7ddN8oEECkV", 'luNcJ8oY', 'WRlcR8kgWRtcNq', 'WQFcOSkjWQxcLq', 'uHxdSmoiW5i', 'dd8fWPBdL8kGASolfCk2', 'dgTeWP7dK8kGl8kFt8oM', 'rqFcGNX3', 'W6TEgmkQmG', 'ssddOt0MWQldMmoYsmol', 'nhBcV2SZWQVdO8k6gJq', 'bIxdMSo1hCoxWPJcRWiH', 'b8okomo2WPTbwa', 'nMhdVmkLzSkgW6ZcNJvL', 'W4NcPmoyWPfP', 'keZcNwhcJWfKqCo1DW', 'FCkrpW', 'W6BcO2NcK1n3W67cVMxdUW', 'WQuAWQFcH3NcOa', 'qcxdMmoYdmoe', 'i8kQW5pdTZ7dISkwtmoGW4G', 'W7rubCkvhq', 'WOmMgdJcGmoTW5a', 'bSoAWOiLFsW', 'WQz2vYldV8ovxGLpWRS', 'wmokW5PXW5tdVdZcTXVcPa', 'W6JcVMJdTwWcdIn7sa', 'WP3dLSkWWQWbCa0comkC', 'WPpcImkHWRBcVq', 'xIyihSo2WPeRW4a', 'W7vkW7ZdGrRdPSowyh80', 'W78OW7vZWQlcLCk6W7JcO8oE', 'hCoYWOysWOa', 'kLJdU8kxvG', 'WOZcPgDdWP4', 'W67dJSkwWP9QWOZdGMytW7O', 'WPXpaZv5rKpdTW', 'chJcIComkG', 'W58pmY5J', 'WQJdLmkFWPnQWPG', 'W6FcO2S', 'BfNdH8krW5vLa8oLC8kX', 'W4pcNuJdVfbnbHb5sG', 'W7irudCPlSojr8kCrW', 'W7atkWNdVmkQWPKYW6TP', 'WRvwegqjthm', 'W4KkW5HtW6e', "WOdcL8ozk8kwn8k/gftdTa", 'WRFcGmoCWO9kWQFcMh0DW7u', 'W7rSreWQrmosD8k2ua', "W6/dN8kiWQv6WOtdMgelW74", 'W7WqmtLQF2hdVmowWOu', 'WOZdKSk0WQuI', 'amk9DSk0WRu', 'W5hdI8kbECkG', 'WQBdQgPOWPS', 'aCoEomomWQG', 'WRTAWRamWPy', 'a8owf8o3WP1fu8kn', 'WPVdHCkSWQW', 'rHquWPZdGSkQomokdSkX', 'WPhcKCkFvMm', 'AsKNWO7dSa', 'W59mWQnCWQpdOSkRiI3dMG', 'WPxdP3D1', "WP3cISkbWOFcTt/dVh1mxq", 'isJcRCoPl8ohW5NcOhKE', 'W7ldOCkwsCk9', "W6FcOw/dVwC", 'nSouzLDXAmoOWQLWkW', 'B0ddVe0YWOVdUa', 'CdtdVSoZjG', 'W7xcPw3dUhae', 'AeVdGh8b', 'bglcHYVcJG', "FL/dQHLiW5RcPG0gWQy", 'W7hcO3BdPxCnaJ8', 'yMZdQ34V', 'p8kFg8oNjCkIW6RcIwJcGW', 'W4SAdqbayeRdJmoI', 'WOyJWQtcVh4', 'WQXdwc1HkcFdJcnf', 'W6ldLdq', 'W4qTaq', "WO3dV8kGWPT+", 'p2NdQSkXe8oiW6BcMLDM', 'W6pcOMVdO3eA', "ymoVW5VcJY/cMSozECooWPu", 'WOLKpKj0hmkhcCoifq', 'WRKuWQ3cLfRcO8oAtvHQ', 'W5TPW6jKW6xdKmoOW6JdOmky', 'bNVdLCkzuW', 'W6tcJmopW7uYW43dJr91WR8', 'WQhdM8kDWRKP', 'W7W8W691W77dJSoJWQy', 'W44LW4LnWR3cOCkMzulcNW', 'pchdUhnE', "e2/cUsZcHumXiCk4nG", "n8kzaCoHi8k/W7ZcLW", "WPhdHSkPW744lCk+WROUWR4", 'jMTeW53cKSoZASkFxCo7', 'jZVcI1HPWOtcTmkvtNa', 'WPBdKCkTWQifBa', 'cMhcUtZcLaz8', 'AmoVWOi', 'WO0SksJcHSoTW4nHW6JdKW', "kr/dS8okW4PVpSo6AmkG", 'W510imo0k8kcW7ZdKCo3Ba', 'urFdS8oHW6q', 'lCksAmkY', 'idFdV3nyW5FcQcxdLSkV', 'WPFcQCk8Dxe', 'y8kAiHi3iCkMW6rt', "vh/cVWDhW5ddRmohcte", 'W4OSutzmaIFdJgae', 'mSkdaCoXomk6W7y', 'WQtdL8onkmkXoIeJWRnF', 'amoAhmkKW5yFhmoElCkk', 'WOVcMSoik8kckmoCBqNdIW', 'yqddNmkMsuRcSmogWOBcIq', 'WOpcIL5SWR4vWODkW77dHq', 'W7mNW7vKW6u', 'euxcIM1YW6FcIG', 'W6eweG1K', 'W649W4P1W5a', 'W6BdSdBdIHW8W5ldNfVcVq', 'WPZdH8kAWQbe', 'lmkvDmkjWR0', 'WPmQWOVcNNTiW6xdKa', 'WR88W4JdGcKwWOFdKSobWRC', 'kmoAWRKtsq', "W6/dUmoCumoOkmovcXVdVW", 'W4aOW4nvWQpcJ8oFwsdcPW', 'W5NdGmkks8oUW6BcOmodF8kU', 'WPpdKSkxWQGc', 'WR3dUCkyWQvQ', 'W6ddMmkzW6G6W5ZcHJ5FWQK', 'W7vOnK4', 'tSkzwCkKW4fNd8ktgCk5', 'WO3dKCkzsCoLW6BdTmowECkO', 'pYhdRmoVW4a', 'WONcGCkfWRVcJq', "WO9/iLm1", 'WRZdIvO4WPfAW50nWQFcIG', 'wcOkWP7dLW', 'WPddH8k7qCo5W6e', 'W6NdJtiWrG', 'W5qqaGNdQq', 'WQZdICkdWR1HWOS', 'iehdUSkbpq', 'WQVdUMSqWPS', 'fmowW4zGkwGrzdXY', 'WOLButmcAeJdKCo2WRu', "CXFdTSo9W4b+ymoaW75N", "g3VdSCk+D8kdW5dcMcmX", 'WRZdMmorW6SWW5febCoHW6y', 'WRxdPJBdNty', 'emowW45Uj2mDh1bU', "aCoEW4/dOSkdWPxcJCo6FCoS", 'vCoZWOldIfRdVSkJzCocW7O', 'W63cJCoDW7raWQ4UCmotWQ0', 'g2ZdR8oBqmoTW4tcKuDd', "Be7cV8kcWPHrmmk/xmoL", 'WRRdNSkxWRan', 'DXznWQBcG8koASkcxCoJ', 'WRZdLCkqWQr7WOKw', 'p8oukSo2WQa', 'xmoMt8kID8o2WRpdMw7dGG', 'eLhdOSkNDG', 'DuddUeO', 'W6xcU27dT1m', 'aNZcOZy', 'FtpcLKjJWOdcTmohbty', 'mCkIz8kXdetcNuDPWQm', 'W7lcHmksFmkmfXjOWRG', 'W7SwWQhcM0xcSSo8uefJ', 'mKxcIa', "oXJdRSoSW51+", "W7WGW6z+W77dJSoIWQ8", 'WPVdImkZWO4bCW0', 'gSoqWQmpWPJcUwVdPvldSa', 'WQbRsSoNzmoxWQ3cG8kqiW', 'WRRdHCkyWQb8', 'W4dcJmkFWRjNWPRdKJiqW7K', 'e8ohWOSJCtbomgWP', 'WRJdOuzYWRi', 'a8o1nmo0tG', 'WRaAWRRcKb7dTmkOfbK6', "w8o8WOddU8kjW5pdJmk/lSkY", 'WO0Lbq', "WOWMaJ/cM8oL", 'y8oxySkiD8o2WRpdMs3cGW', 'yNFdU14H', "WQ/cQ8kB", 'kxBdHby6W5ddSCoheK4', 'luxcKSoHhqO', 'W7ldICki', 'Fr7dRmo9WOGRdSkVWOeJ', 'W5OPfqO', 'WQeYWRJcGMq', 'ahVcSJZcLba', 'W79zbmkPmmkfW6q', 'WPJdQ3X1WPy', 'WPddGCkHWRiu', "CcBcGryLW4/dRmohyvq", 'WQrgwuW5u8ojwSoFeq', "BCo5WO/dLwldK8kauSo2WPW", 'WQJdT8omWP0OW5dcLNSrW6W', 'W5RdKmkrBmk8eq', 'zeddOv8EWPFdTKG5', 'W67cUu7dS0C', 'W4hdGceQWQ8BWPniWRFcGa', 'WP5YWOO6WPe', 'tmongmoBeHddSICwW64', 'zCo4WPRdNxu', 'rY4D', 'lepdPSkcwa', 'jg7dT8k2bSohW6VcNg0I', 'c8kIpSo6oW', 'g8oDWRGvWPhcJ3tdTKVdOq', 'WPpdO34', 'amoNnmo2sbC', 'AMxdVCk4yCktW6FcJZKR', 'a2BcUSoZoa', 'W7VdRSoAW6tdG1RcTbeGfq', "lSoiDmo+xHxdJYW6W7C", "mu/cPSosaW", "wdhdQM/cUZ4NrCk3sW", 'W7pdICksWRq', 'rcBdQ8oXbSofWP7cUqzx', 'pmknhW', 'WPxdPeyeWPi', "c1/dRCoqW5z5gCoZDCkG", 'WRSiWRRcKetcSSoGuLa6', 'oCoTamo1Aa', 'W5ZcLxhdSK0', 'WQb0WPy', "qrZcLwfJWQBcT8k/qK4", 'hSozDSkPWPGQe194DW', 'sZxdH8oJbCoq', "WQyTCM/dSCkyeuCCW68", 'WO3dSM9XWOZdQJxdNLPf', "WRbtW7/dGbRdPSkOfGm2", 'W5NcVMJdVW', "W6XXWQ/dMhndW4NdMSk4W5G", 'W7mNW7jIW6VdICoVWQ3dKmkA', 'W6NcRCoGWRvY', 'WRzEfeqy', 'WRaAWRRcKb7dTCkReHK6', 'W7qVfHBdOG', 'WOhdK8kgrCo7', "W4C/dqLRb8kqcSozua", 'AmkqWOG', 'waifaSoa', 'zLVdU1GuWO7dVKK', "WQBdSt/cSt5drwy+ya", "W7tcImo6WQP9F8oQW6n+W7m", 'W6pdJCkiWRrKWOJdGwawW6S', 'jexcHCoNbq', "xhWWrSooW5vuWPL+qa", 'WPtcK8oobSotvCovfHVcTG', 'buBcHCokkW', 'eWldO8oxW51UiCoZzSkI', 'WReMbcRcMSoVW4DLW6ZcIq', 'WRvscgyjaJJdKZ5f', 'WQxdVJxdLHOZ', 'WQBdUvJcV3mmcZvIqG', 'WQCEWQpcMKdcOW', 'WPhdJ0e', 'W5JdG8kNzmk8', "W7/dPSkSW71uW505FSkbW68", 'W7FdLSkUWQT4', 'Cs3dHmolW7y', 'W6ucW5RcQZ4rWOFcMCo3WRa', 'W64WW7fZWQRcMmkZW7xcR8kL', 'zdNcIKvUWPxcO8ktq3K', 'WOL9s1S1u8kMomo2xG', 'tcxcNx1W', 'W7xcPx7dV30goIvKqG', 'W6RcVNG', 'WQNdICkLWPn6', 'W6WuiHFdQW', 'emowWQe3', 'WQWjWQhcHvpdR8kIlZ86', 'nCkEdSo1', 'WPpdKmkyWQvh', 'DSklAHZcH2aPWQhcVCox', "W7XfhSk/nSkjW7JdVCoUyG", 'B8oRWPNdLxW', 'wmoxW5ldQYhdUSozh8kZWOW', 'WRWTisxdLCovxGLpWRS', 'eNtdOmknfG', 'FKdcT8kOhCoiW7BcI21W', 'WPVdJmkQs8oj', 'CuBdRe0yWPFdSKG5', 'WP3dVSk1W7FdHxFcJaOnpW', 'lepcMGFcOYLjv8ogua', 'Ae3dPwyBWORdTfv0W4a', 'b8kDm3ldHq', 'aCoBe8oBWP9vtCkvh8k5', 'iCkadSoSeCkKW7lcLgG', "W5NcLmodz8kLW7JdR8ozzmk/", "WORdNmkcrSo/", "WOVdNCkfu8o/W7tdRSouCSoR", 'WPqZWQVcGuy', 'Dc7dSSosaq', 'WOZcPSoCW6aOW43cLJjFWR8', 'W448drjw', 'n27dI8kBFW', 'WPpdL1DkW5RdHr9gW5TR', 'WOWJktVcGCo6W5j5W6JcNa', "WP3cHmo/W79DpJn2kSok", 'iSkdhCo2', 'W7pcJ8kfyCkqhW', 'm8kzrmkKWObouSkkf8k5', "W6/dMYmGvMaktW", "rCo8WO/dQmkyWPm", 'W7iSmahdKq', "gxpcICkMmSoRW5/cL1CJ", 'dmoqWRKyWPe', 'yG0hdmok', 'W5hcICkNr8kA', 'zSktWPFdOIO', 'W7pcLmolamkRWRxcOmkxn8oJ', 'W7bAcCk1kG', 'dcGfWO7dL8oZFSknr8oZ', "iCk/WRdcMdGIbSoAvwK", 'W7dcKCoOWOzZ', 'DXznWQBcGmkoASkcxCoJ', 'bspdQCotW4a', 'jMlcUCo6tCkBWQxcPfuR', 'ASoKWOJdHhhdICkAr8kZWOm', 'xZZdKCkMvSkjW4VdRdWJ', 'W5NcONZdUxShjdj9', 'WPNdSdVdLX5NWPddLrtdMa', 'qHBdPHCMWQldMmoYsmol', 'wdiuWPJcKSoSDCkcxCki', 'WOa8gYNcKCo6', "W7/cGSooW6KVWRC5D8oNW70", 'W6PgW67cRMVdR8oceMG6', 'WQa8WOBcKwPe', 'W4yzeYTozfpdI8oPWQq', 'WQBdJMXLWQijWPriW6xdMa', 'W7WREZzmaIFdJcnf', 'W5aEgcvE', "lhhdPCk+ya", 'yrRcOwDB', 'cCkMW57cSSomWQdcO8kNq8kV', 'WPxdP3C', 'WRaifuyDEglcTM8d', "jmkcc8oNmCk/W73cNgK", 'W6ZcH2JdTvC', 'WPrBiIKfxHFdOSkLW7W', "wH/dNISQWQldGmoIrmol", 'W57dQ2b1WPBdJc7dMeXU', "WQRdOq/dOH0", 'WQlcUmkHCKy', 'W4GIgGK5tmowr8kCkW', "W7CMW69LW77dGSo+WRS", 'WOhcO8k6WPtcGq', 'mwRcKrxcQa', "W6H+lKNcSCkwgWLqWQq", 'W6OSW7nfW6BdImo4WONdVCkm', "W7f5W5/dHcuHWQ3cICoSWP0", 'WPbUnuWj', 'W5SanIL7', "W7/cULJdOLa", 'ifpcMCkMx1tdJCoiWPddQW', 'tSoqf8o3WP1bt8kDe8ki', 'cCkLhLFdIW', 'jCkyWOXlWQNdVchcT1ldQG', 'zSoVEXVcHYKDWPdcKmo9', 'FSkBnqm', 'WPxcVCkBAeC', 'W6tdHJmYB2OBb1Gm', 'BmkAeJa0', 'WO7dHSkkumoiW7NdOCoeza', 'AmksWQJdGXi', 'iCozW43dMa1Hl8kBbIO', 'WR7dNSkfWR1HWOSqp8ooWQG', 'hSolfSoWWOzuwmkoeW', 'WRRcVsHrW7WNW4aqWRFdMa', 'hNldV8k1aq', 'WPddKZpdJdW', 'CCknaCoMDW', "lr/dO8oAWPG1uSkRj8kp", 'WR3dNmkfWQbJWOKlkmozWR0', 'WQdcUmkpwhO', 'W4ddHmkBAmk8vCokcqBcTG', "CSoDWO/dVfm", "y8oxFSkNWPuXr1T+AG", 'W4WJW4zVW7i', 'nSkZyXRcQLGWWRRcKmo9', 'wZKhb8oP', 'rdNdMmoQdmocWOu', 'WQRcLwDZisLEb090', 'jJhdVvvo', 'WQHthxjmtgJcMcme', 'WQn3tuxcUmo4W5H5WQ5G', 'W5SPgbH8w8oBs8klxa', "WQRdTZtdGGS/", 'WP55WP0qWQFcSCkez3hcJG', "euJdIYi5WR/dMmkjnCoc", 'WRVdJ8kqWR9QW4vFu8k2W68', 'WPVdUSkFECoe', 'iMldUmkdbG', 'C07dOvOsW4xcPbjGW5S', 'W6fggmkZmmkfW4NdP8o0zW', 'WQ7cLJhdVhenfJjZvq', 'WOFcIxn5WRG', "W6BcOwJcN18SWQZdTG/dTq", 'neVdNSk6Cq', 'WQCsWQdcHKlcP8o3qva6', "WQypWQ/cM1xcO8k5hqON", "d8ovh8o2WOzhrSkxaSo+", 'e8ouWQCp', "W6bFbmkPmmkbW7JdRCo/iW", 'jxBcQ3rqW57cVSkfufy', 'd8k1vSk2WRq', 'hSoEWOijWPi', "WP/dNCkmsmo/W7ZdRSoq", 'W6vFhSkYlCko', 'WQZdMmkDWRi', 'WQxcPSkjWQFcJdldJh5M', 'WOeRhbtcLSoPW5zHW6hcNG', 'W6lcGmkpA8kB', 'l1pcImoJgXBcJSkyWO7dHG', 'jYRdR3nsW6ZcTW', 'BSk3WOZdOmkcWOJcISoRASoQ', 'bfZdHby6W5ddSCohgIK', 'WO7dO3XYWOZdIdi', 'WRFdNmkc', 'W7rec8k3iq', 'WR7cSSk4FhG', "zJJcL0j/WOlcUmkjsx0", 'W6FcPwVdSh0iadrL', 's8oZWR7dUmkeWPlcK8o9ECoY', 'zSkrzKHUDCoOW5PQla', 'WQBdHSosWOmXvSkUW4CUWQS', 'WPZdOv1YWOFdNqFdML1u', "W5L+oudcUSkrluWBW48", 'mSkVoKq', 'amo2hCohWOG', 'lKlcLSozcWpcG8kCWOFcGW', 'WQFcP2nWWOC', 'sCoOW5WmogmDDdzk', 'W7SpnbhdT8k1WQW4W7WN', 'WRyoWR3cGvNcQW', 'W4mAcZrk', 'WPrKW54AWPBdSSkcD2lcLa', 'D8oVWONdHgNdL8kCaSkSWOm', 'W7NdGsy9yMXEgfGo', 'WOJdOmkKvmo4', "cCkKW4hcV8oxW7BdTmkUomk+", 'zgVdS8kLD8ohWRpdJMPL', 'k8ktnq', 'WQRcNqb9Bgyqvbnw', 'uKFdO3Cr', 'WOBcRCka', 'DZJdNCoacW', 'DHtdH8kly0ldL8oiW4VdHG', 'rsNcLmk5vSklW5BcLZPx', 'WOy2WRJcTuy', 'W5NdNmkcECkWaCkqra', 'kqpdTmogW4HVtCkPomoP', 'j8oKlCoBwG', 'zXxcKerB', "CmkSk8kBW5zKrW4+jq", 'rmkwWRZdGGO', 'WPFdJuyqWPe', 'WQjughGFvMBcGMaa', 'eXtdRSoC', 'W7eunbhdUCk2WPS8W5eK', 'W5RcGSkXqCko', 'W6FdJgC4zgWoveDA', 'WP7dKCkF', 'k8k5jfldKZDI', 'AvZdU1WfWPhdOL04W5S', 'qsqkWO7dHSk2omolbmkJ', 'fetcHxK', "EYlcNuz/W5ddRSoybYK", 'W63dKdm', 'W5WsfYtdTG', "g8o+zLDXAmoOWQexjq", 'W6JdJqy4qW', 'v8oeWOhdPKK', 'jmo1k8oxWQ0', 'iwHlrmkIW45KWRm3dG', 'WQr0WOSgWOZcVCkBxZdcMq', 'WQ3cQ8krWQq', 'c8o5WR8zybv5a3qH', 'W5ipedBdGq', 'WQRcLwD7rICtsaLa', 'WPpdU31JWO7dIW', 'WRJcMw9IWQC', 'W7KSW551W7JdGSoTWRZdQSow', 'oK7cVSkeWQSWi8kfWOeJ', 'mMldQSkXamojW7ZcMMW', 'WRKYzWJcHmkOv3jDW4y', 'yWNdOmkPWP4VpSkfW7PE', 'WRbha3G', 'WPtcLmobo8oJvCkooZhcTG', 'hmo1WR0jWOa', 'W7KujadcUmoNW4DKWQ4B', 'W4FdUImvta', 'W5BdHmkbF8k1emkyrvW', "WPFdLmk/WRjz", 'W5RdLSkbBSkRaCkmrL7cTG', 'W4i3W4PaW4pdN8o8iJddMG', 'WQhdHCksWRn8WOZdMheAW4a', 'BCo3WQJdOSk9', 'W6JcISoGWR19', 'WQJdT8onWP0OW5dcLIjeWPi', "zdFcRCoRmSk8W5/dLaT1", 'WQFdLwbYWRe', 'WPJcMCkcxua', 'WRddN8kBWOTNWOKflmoi', 'WQBcMCkyButdPc97WPxdUa', 'W4ejpd9B', 'CZGhWPxdL8k3gCoAcCks', 'W5ONaG3cNCozW4m', 'W5SwfcnE', 'tGhdO8oFiG', 'fSoAWO0LDYXe', 'WOqSWOdcR3e', 'yqddNmkUlKZcMSkhWOxcLq', "WO/cG2rvWQ8iWOvmW6pdLa", 'WRJcG2nPWQS', 'rSo7WOVdKmkoWPRcKSo6Cmo3', 'l8oTaSo3Cq', 'WQv0WQfnW5FcJSoxW7NdKSoE', 'AcxcGryVW4xdQ8ohqqq', 'WPBdH8kLW6bFivulwmom', 'W4euWQHnWRRdUSkSW7xcR8oj', 'yGFcVqHpW4NcUXXVW4S', 'hbBdMgzf', 'cSk8umkaWO8', 'c2VcUsJcLaS', 'wMu2vSkUW5uaW5DKwG', 'mSkVoKtcH20VWQFcKmkg', 'vtJdKCo0amoyWOxcUayq', 'WPZcGmkRWRVcSa', 'W413nhNcTG', 'f3lcIg9JW6pcJmk3qmoy', "W583W55vW5dcLCoyB3/cLa", 'W7yigHXjyxtdMSoXWPu', 'ssddKmo1bmoxWPRdPvXZ', 'WQ95WQSYWPS', 'DmkfWQZdTJe', 'qSkznSogWQmotSkChmki', 'kJBdHwvdW47dVWFdTCoJ', 'WOSAbZZcKW', 'W5FdISkBF8kRgSkzwL7dPa', 'W57dNZWQWPCNW4L2WQxdRa', 'iXpdQSoGW5PRgCoIA8kX', 'W6xcKCkaF8kqcW', 'W61Oi1S', "W4C+nWni", 'aSkQmSkDW4yerWCQDW', 'W5hdQg4im1rEgKCd', 'WPvWz0xcUmo4W5H5WQ5G', 'W5NcLmkiqCo4W7dcOmkbjCoX', 'pSoBW5dcKtHpCSkHwrq', "W5VdUai/W4JdJaTDW4TL", 'W5BcHLNdVeC', "W71ygCkUiCksW7/dOmoPDW", 'yCoVWPRdHgm', "CXFdTSo9W4b+ymoaW75G", 'WOhdVJNdKre', 'W4O5cHH2hSk6gCoohW', 'W7uFnqldVCk8', 'owNdQSkXf8ouW6ZcKxT2', 'WRvdh2i', 'rmkWfJ04', 'W77dHSk2W6eLlCofW4CNW40', "W6BcOMhcQhv3WOhdNa/dTq", 'WRxcGmkgCKK', 'WRG4WOBcLxS', "WPNdISkJWQu/FrPoySoL", 'WPTpvvrJr23cKCoQWQm', 'W4NcJmkozmkAcWzSWRbf', "WQFcUSknW7/dJgBcJb0Gba", 'W7hdKmkEWRP8WPGblmoiWRy', 'juNcMSoGkbdcHCkjWPlcLq', 'WQpcOJmMW5lcLK3cSqKr', 'W4hcPCo9WPrR', 'W4ndmKxcQG', 'WQ8rgaFcVa', 'm8kzrmkKW5GzgSoZFmo3', 'WRxcNmkFAfxdGc99WP3cOq', 'jtpdGKzE', 'cwRdPNLeW5dcPtddGCoM', 'WQdcTNrtWOK', "WPtdM8kfu8o/W7ddSSodBSk7", 'W4FdISkazW', 'rsddKCoNgW', 'WQFcOSkhWRNcNq', 'WQnLbMC1', 'W6nIfG5ZlmkBe8omhW', "W5aUdGD+", "WOT+WPKyWPNcPSkFCx3dKW", "WPVdShP/", 'WPK6WOdcL24', "ig/cIgHw", 'auJdIYW0WRpdGSoYe8oM', "W6dcT2/dV3q", 'W6NdKmkFCepdSsb2WPpcVq', 'iMtdVCk5ya', "nw/dUmk3mCojW6hcMKL2", "W7fzbmkUnSkpW7RdOSo/Cq", 'a3xdKmk9ha', 'WQzwbWhcHmoeiWLsWRS', 'pWxdOCorW5TVmSo1DCkX', 'uHNdMICMW7NdTCoysmol', 'WQtcOCkjWQxcNhK', "WQ7dQCk/WP1/", 'W4VdHmoiW7FdMhFcNHeGfq', 'hCoMfWhcMNj5W7tdG8kP', 'W7xcHCoSW74NmSkJWRPvW4S', "W79Me3/cRW", 'pmk3W5VdQ03cJSkIe8ooWPW', 'W5ZdGdy8W7D3W6OnWRFcKq', "WPZdRw90WOBdRI/dLv1u", 'uJRdHSoGiW', 'WQyTEGJdV8ovxGeOWRu', "WR/dSN9wWO0", 'lr3dR8olWPeXymkCj8o0', 'cgRcJ8o8aW', 'wdpdTXtcVuPvlSoynG', 'nMFdP8k4DG', "WQddQ8kdW744lCk+WROUWRy", 'WOLBwvqmjqFcL8ocW68', 'uSkncXKB', 'W77dKduNEhKBb1Gm', 'W6ZcH8o7WRa', 'WRpcQCkhWPNcUW', 'WO3cHw9TWRGs', 't8oZWRNdGCkL', 'dSoqWOSoEYXyjxKI', 'ee3dLSkNaa', 'WQBcVmobnCoEqfS2W5e3', "yCkiESkXhf/cSg0QW6i", 'ks3dQtW6W5ddSCohgIK', 'W6VdUSkxzmk4b8krzvJdVG', 'wc4wWONdI8kJl8kFqSoS', 'uCkeW5vCeN4Dzc1N', 'tY3dTmo9W6i', 'ogVcUsW', 'W77dMHqNC2aqqa', 'ydKy', 'CSkqWOJdGq', 'W7tdMmkXmf3dQI9RWOtcVq', 'WO7cK3iJW7D3W6OnWRFcKq', 'sc3dMCoJ', "W57dS8kEWQ9PWP/dKKeCW7C", 'm3NdTSkFxa', "iXpdQSoGW4XLh8o/ySk4", 'xSoXWPG', 'WQldTYNdKq04W5JcMuS', 'WQRdJ8kIWPiz', 'wtldICogW5bxCSoKW5bO', 'WReEWR3cGutcQCoGr1e', 'xSkvwCk8W5KmaCkXnmkD', 'W4aUcINdNq', 'WQBcLCkqA0pdOav9WOpcRa', 'wfJdPKmwWPFdVWrMW7y', "WRldQYRdGf9OWP7dGq/cJG", 'iGldTmoEW5zPcmojzmkM', "kSk/ovu", 'oCkHomoBha', 'lCowcCoYuq', 'iLlcMCoNhqFdN8oAW57dLG', 'qSowWPFdRCkU', 'WQhcOSkrWRpcNtxcLWOnpW', "WPlcHxv/WRW", 'W5VcKSkSwmk0', 'tcNdH8onlW', 'WOVcG8kvDLxdOqL9WPZcQa', 'WOndm1if', 'W7vkW73dGXRdPSowyh80', 'W4rxjSkynq', 'WR3dL8kUWQDHWOmtoSooWQ4', 'wMq2vSkUW5uaW5DKwG', "B03cK8oOgHBcKSkAWP/cNW", 'ymoLWPxdG2tdLCkmqCoNW5m', 'WPzerfr3wa7dPmk0WPW', "WQdcLCkeAKNdTsq4W4/dPW", 'W7CyltRdQmkTWOOPW6iL', 'AmoeWOVdLNC', 'W501cqK5tmowr8kCkW', "g8o+zLDXAmoOWQfuza", 'EmkxiYGYoSkTW6bdya', 'DfxcSSoRmSotWRhdHL1p', 'W583W55vW5JdSSoErt7cLW', 'WQ3dUmk2WO56', 'WQzcggldSCkAhemWW6G', "W4qIhWv+g8kD", 'W7NdKcS1', 'EdanpSo6', 'W4tdKCkAEq', 'WP3cNSo4aCo5vCovfHVcTG', 'WQRdJSkuWQzkWPObmmoi', 'i8k3pKtcJ2mOWRBcKmoS', 'WQdcU8kgWRtcJd7dKv8', 'W7CwvCoLECoaW43dK8kZwa', 'W6ztgCkU', 'WQ8XWONcHMPjW5u', 'WQFcL8kBw3y', 'ENhcSbSGWOpdSxxcK8kV', 'WPrYWOC', "DSkfWP/dNW", "WO/cRCoFrqldMgeLW5ddQa", 'WPb0WPvvWOZcUSktiMFcMW', 'WPOOfcFcKq', 'WQFdVWZdQs8', 'WOBdHLmKWPW', 'nZldVNL7', 'W5xcGSkGBCk0', 'laNdH8kly0ldL8oiW4VdHG', 'WRGEWRZcKLpcKSoWt1bO', "e2/cUsZcHq", 'W6BdPSkVW7NcLtJdKej0ua', 'rsyfWPRdL8kmm8omhSkY', 'WOJdGCoGW79Fi0HWxSk4', 'BKRdVa', 'WPBdL8k4qCoJ', 'W7BdVCkqWQHm', 'DIFcUCoTnCkiW6JcKgzX', "W4ldVCk/FCk9", 'dmomuSkIymoNWQJdTaFcGW', 'h0lcHw5YW6FcISk8cCkg', 'xSkYDSkXduZcPMfPW4W', 'zdNcIKvUWPxcO8kovhO', "W5GybCk4lSk/W7hdOSo7zW", 'W6y5m1Pdz03dOmoYWQK', 'imowWR81WP0', 'WQyTEGJdV8ovvM5bW7y', 'WRNcGx1ZEGr0b0Ct', 'W4hdGcLnW6ixWO9dW6tdHq', 'nCkMk1BdIse', 'WRe6fspcKCoSW7fWW7NcUG', 'W5FcL8kXymkC', "vSk+WRtdOW8", 'WQCEWQNcGfRcP8oR', 'WQiQWQFcPxS', 'W6VcVNhdOMOgfW', 'qYldKmoVb8or', 'WQpdSY7dGfDMWPhdIGpdTq', "W75Fhmk/", 'WO3dLCkhs8oUW7e', 'sZxdKSoVdSoEWOi', 'D8kaWPZdTsy', 'amoJomo0ua', 'bMZcNmobr8oBWPNcOHqk', 'gmoTkG', 'b1hdKmkMyW', 'WQNcGwXTWOy', 's37dQxmA', "vhJdG0O/", 'WO7cGMTvWQaFWPnEW7ldGW', 'bMVdLmkoFG', "qZRdO8o+da", 'oCk6nCoLgq', 'kmkLpKtdLszPW6RdLCo9', 'nwBdTCkP', 'DIFcUCoLuSkgWQxdL08S', 'WQOgWP3cMhPvW4NdJmoLWOy', "WOtdOmoyWO8/WRfey8kCW7O", 'nSkZAH7cMg8WW4hdRCo0', "W7/cKSkXACkxcILIWR1p", "vIxcH15/WPtcGSkctKG", 'W6FdMIKGDwWm', 'WQ3cQ8kr', 'nSodpmoKza', 'd8oxWQefEW', 'C8oWWRhdL0m', 'hWldHCoUW6O', 'WPhdT8krWQWI', 'WR7dPxukWO4', 'jqNdH8kly0ldL8oiW4VdHG', 'WPZdSCkMWQ4o', 'WQejWQ7cG24', 'c8oNlSoEsXhdGd8MW7m', 'WQKRnaZcVa', 'WPddO2nJ', 'ELHHvSkZW5vjWPK3dG', 'WPb1WPqQWPVcUSkFBNZcNG', 'W6ndvMVdLmkOWOi1WQ3dMW', 'WRhcGSk5Ea', 'cchdM8oOgSocWPpcVHmh', 'bxJcTaFcJa', 'W583WP0uWOVcT8owmYNdGa', 'WRPPWQe2WQRcH8oVWQNdVmkB', 'rmo4WPK', 'tSkisSkYW4uaBSk8pmo5', 'W6WpnqVdQ8kxWO48W7W', 'WRHAz03dN8o2WPu2W6aZ', 'wSk5W4tdQLnpE8ohsh0', 'kcVdPmoLW7a', 'W6W1erLz', 'W5lcU8k2CCkP', 'WQxcOCkgWQtcJcxdI1j0wG', 'bMtdS8kObmozWPJcVXmB', 'd8ovgmo2WOrLv8kBgmkJ', 'hCongmoQWOPfaCobsCoQ', 'pSkEbmoUhW', 'WRlcU8kAWRNcJd7dK1rY', 'd8olhq', 'gSoyf8oNWOW', 'omodWPGDtq', 'wmkrW788W5RcSxpdUuJdSa', "WRPPWQe2W6NdHSo/WQ3cR8ok", 'FbxdQSoMW5m', 'W5SEcHji', 'DLxcSSoRmSoxWRNdSfPL', 'WPNdL8kRWQusn1mMcCkX', "WQBdRd/cPI1yAeW2bW", 'W6KnW4TIW5G', 'W6ZdG8ksWRn8WOJdHa', 'dSkaW5VcKddcH8ozaSkZWPW', 'WQlcP8kYWOxcIW', 'W77dLcS4zg0', 'vSoCWRGvWOFcQhNdPvldQG', 'W7nMW5xdLKvXWO7dSSo9W6a', 'W5NdLSkht8oOW77cOmodF8kU', 'WO3dP3O', 'xYCnWP7dLW', 'WOBdRxe7WPW', 'WRBcGmkpBmoEnG55WQ9w', 'dSoaWPOWDJ1yg241', 'p2NdQSkXe8oiW6BcMIG9', 'W5LRm0BcVSkzgfSaW7W', "u8k1WR/dGGW", 'kSkZjeBdKZO', "Dq/dOe4zW4S", "W7y/gGr8f8kHh8oqaa", "WRNcPNj+WQq", 'W74SW7jIW7JdImo1WQ3dQW', 'WRDdusLthYFcT15m', 'oG7dRCoMW411i8orW5rX', 'W4DPWRW2WRRcNmkbW4lcR8oE', 'i8k3W5VcGcVcQSoZaSkZWPW', 'WRpdPwxdKeSGaq4', 'W4WJW4rvWOpdN8o8iJddMG', 'WPqFWQRcV1q', 'WQhdOCklWOCI', 'i8o2FbhcNxjRWPFcUSo9', 'WOCwfHPFCuldJCoXWRG', 'WRnpaNTfgqRdPInf', 'uG3dI35NW7hcNCoYwCoy', "WP/cN8kyxx8", 'WQNcNCkkWP7cKa', 'W6vxgmk0', 'WQ4ZWRFcGgTaW4ZdGmkIWPq', 'fwFcUtZcLajGFCoGnG', 'WQpdOcJdIG0', 'ymoVWQtdK2ldGSkyvSo2WPq', 'WOldH8khWRuq', 'WQ88W4JdIserWOFdSSkrWPq', 'WQuQWQNcHgXnW54', 'WR3dJgOZWPe', 'W6VcSgFdKgOxbcv9qG', 'WOhdL1mmWOVcLhqjWOK7', "W6OvkWddL8k+", 'WQ44WOtcMNfdW4NdGCkPW5q', 'W7u0WOZcVXJcQCo7sgPT', 'W6ddGmovW7Sf', 'E8kBkaqLlCk6', 'WP7dHmkjWPf7', 'nhBcV2SZWQVdOmk6gJq', 'cghdPmksxW', 'rmkKWPBdN37dLmknr8oHW5u', 'E8kKir4e', 'yuNcKSo1hqpcMCklWO7cUq', 'mwxcVG3cUG', 'W71uamkfkCkpW7JdVCoUzG', 'jCkJovxdId9vW7tdLmkP', 'DIFcUCoLuSkgWQ3cUczV', 'At7dJSoQW6i', 'WOlcUSkQWRdcIW', 'W6BdRSoiW7FdMhFcNHeOCG', "oG/cUa1mW6JcKq19W5S", 'W7dcImknFmkBcG', 'WRlcJKbCWQe', 'usxdGmoU', "p8oCWPK/", 'WPHfa3mnvMldHdbu', 'qmoQWQddVCkEWPRcHW', 'dmomuSkIz8oTWP7dSY3cGW', 'ibJdTSowW5zTiSo4rCk7', 'WQHGnuBcRmkbg1SBW6i', 'eNZdSCkGuq', 'WQJcRCkn', 'dtFdHmoLt8kgWRtdHJmp', "iw/dTSkPf8kgW7hcINPS", 'W4euWQHnWRJdUSkSW7xcR8oo', 'WQzsbxCpswlcNNa', 'rgtcQZykWOpdStBdKSo8', 'WRJdLCkfW700W6fUFSkCW68', 'dmouWQupWO3cRhNcTWtcUW', 'cSkXrSozzCklWRpdHc3cKW', 'ewhdVCkTba', 'wfZdV0S4WPldTq', 'W4JdV2K8y2mHurjF', 'WQPjh2uyr3xcHw0w', 'xmoeW5dcKvmPvSoWsgK', 'W6pdHIP6oGr0b0Ct', 'yHRcSujv', 'W50TfW98b8kqcSoz', "W5OEwuuFnr3cN8o+W4W", 'nSkzAmkYWPmRe0n6EW', 'yuxcKSoJbaVcKSkBW4VcHa', 'W6xdLY0my2GkuWTw', 'cSkXrSozz8klWRpdHc3cMG', "rmo2WO/dVmkyWP7cJmoJECo1", 'zSo2AGNdOhX9W7xdNSkU', 'W7BdHmkf', 'WPVdJuewWONcN0GpWQq9', "BCoPWP7cKc/cMmoeaSoiW6e", 'W6VcQgJdO3Cxadq', 'FIZcOmkcWPG6vSkBdCo0', 'WOOiWQ3cNvpcOSovr1rS', 'W7OvjHFdVmkCWP0QW7OY', 'W4vecmkYca', 'W5lcGXjcW4dcTGuhWPqW', 'cMhcUtZcLaz8D8oRzq', 'nmkng8oNF8oKWQldJYhcGW', 'WPhdRMPJWPhdNIhcKHi8', 'ECoijmo7W5ycoHnrlG', 'WQ3dKfekWO3cLxGpWO8k', 'kGVdHeDN', 'oh3cTcFcHqDmCCo3Ea', 'zZxcGwL5WOlcTmkgtMW', 'W7pcIc4MW4lcJwdcMWKr', 'WQ7cGCkAEKm', "W64OW619W6/dGW", "W5VcMd9OW4JdKqTkW5T+", 'WRNcN8kAEKpdQcb0W5NdOW', 'W6SvkGa', 'W7RcISoOWQX1', 'W6ZdJCkm', 'W7NcLSkpw8kocGj5WRLo', 'lxvAqSkLW5LjW7zvza', 'CmkgkrOujSk8W7nEya', 'W5JdGmkBBmkThq', "DrddHSkMeM/dVCoiW4VdHG", 'hCoFWRmsWPRcUW', 'WQldVbpdJXy', 'pclcHrLxW4xcUW19W5S', 'W4qufWDyyfxdLSoRWRi', 'qrKiWRRdVq', "WPBdMSkyvmoUW6FdQCozzmk/", 'WRajWRRcJeBcO8k5hqON', 'ddpdHLv8', "W4hcVY5DWR/cHbVcI3qr", 'Bb7dT8orWPy', 'ohldTmkNf8ou', 'WRZdKSkFWQD7WP4rpCoiWQa', 'W7xcGMRdKgW', "W4NcRJHcW4JdKqTkW5T+", 'W48sfqbjDW', 'mfRcLdJcHq', 'umkiW6nBoh4Dzc1N', "g8o/erhdUNiTWRRcG8oK", "g8k+dSo0gG", 'axVcUsZcLaPHCa', 'fwhdOmksva', 'W6ZcP8oXWPzw', "jW/cRXLFWQlcTuaYWPu", "W5WuvNBdLmk/WPyUWOddSq", 'W7tcISoTWQ11BmoYWRm1WPS', 'WQPhcvCyvMBcJ2Ga', 'p8oMkSo6BW', 'W6JcICoKWRS', 'WPf2WPmq', 'zmkZWPxdVsi', 'W6fAa8k5iq', 'n2VdUmk3hW', "W7/cGmkqx8k5", 'WRxcUSknWQxcJc7dJLqGcG', 'nCk6i0ldGG', "kshdV1LDW43cGsFdNmo/", "W6/dIwRdUf9QWOhcLuhcPG", 'W78AW4jIW4C', 'WONdL0nlWQS', 'WPP5WP0AWO3cVmkcz2lcLa', 'WQpdRSoqW67dGNFdHtWkfq', 'FComimoahCo4W7ZcM2FdVa', "DelcPGj6W6/cUW19W5S", 'cSoEWQOEFq', 'W5BcSZSQW4lcNhxcJqur', 'fSoeWROzWPhcRG', 'WOhcK8kEF0a', "vIxcH15/WPtcMCkcvNK", 'W4jNmmkciG', 'W7ThjmkYbG', 'omkzEmkJW5zMwaCQrq', "yHZdR8orW4T+cmoKC8kT", 'lwBdOCkI', 'DJWFhG', 'WP3dT8oFWRTTWOy7p8opWRS', 'W5hdGSkPWODR', 'm8oPWRKssW', "WQ/dVmkVvSoP", 'W4XKsLWPx8ojs8kfqa', 'W7ddJCkLsSk3', "W7RcN8kuDg/dPYbSWOtcTa", 'jKNcQL9o', 'WPhdJfWeWOhcLL4yWPO8', 'aMdcOZ3cMq', "wIqlWO/dQG", 'iMhdOmkLzG', 'WRddPttdKZW', 'W77cImo9WQXH', 'W57cOI4MW4lcJwdcK24F', 'WRNdJ8kqWRLQ', 'WRhcK8k3tue', "WOq/WPZcHeW", 'fmosWOaYFsPengG', 'jxhdGmkxvW', 'cvJdU8kQe8ouW6hcRgTQ', 'WORdP3XYWPVdNsxcMXyo', 'WPVdNw10WOFdJdtdNGed', 'l8oHf8oiWQe', 'WR7dK8ksWReVW5nBy8kCWPq', "xZ8lWO/dI8kdk8oncCkQ", 'W7SwfWhdTG', 'ASoKWOJdHhhdICkAr8omW5G', 'kshdVW', 'stKqWOtdGSk2ASkaqSoU', 'WQeZWRZcPLm', 'dSoDk8oKvqxcUxzeWOK', 'WPP5WOOhWOe', 'W6tcJmodW781W43dRu9wW4q', 'W5eohHldJq', 'cKBcVwrL', "hNJcKLj+", 'FCoBqahcH3iWWRRcKmo9', 'p8oaWO05FtP1iwe3', 'eCkFjK3dRq', 'WRFdQL4PWQC', 'cCk5W4hcR8omW5VdNSkMx8kW', 'WRiwsSo6zmoaWRBcPSoDlq', 'W7PAemk7ha', 'W77cH8o9WRSWpmkQWRyUWQC', 'W5FdICkLB8k3', 'W44ojbpdMW', "WOeNbt/cKCo6W4T7W77cJW", 'tYOuW5tcICoEqmkFxCoZ', 'wrVcHxja', 'W4VdImk6omkJwfyTWRvt', 'a8owf8o3WP1fu8kxgmkK', 'WPNdSsJdGb4JW4tdLb3dPq', 'WPNdKmk0WQedDq1p', 'W7ZcVSkiA8kBgWP9W7ug', 'WRddPZpcSs9tu2O2Aa', 'W7FcK8ke', 'WRPPWQe2WQRcJ8olW6BdOSkr', 'WOmnjdRcMq', 'lNZdNSkHzq', 'W45PvMpcS8kMW496W6pcIa', 'WRhdRSkyWRqV', 'W6JcOMVdTgWxhdzZbW', 'WOxdHsJdVZm', 'vmkrW6zjW4pdSdZdMhNdJG', 'W6HSn00', 'W7BdS8kxECk0', 'WQRcGSk5WPhcRG', 'nSoeFxPBAmoOWQexjq', 'AZFcKej2WPxcTSkvvxW', "W78wW6jKW6/dHSo4WQ3cP8op", 'W6lcLSoSW74NmSkJWRPvW4S', 'WPOylHNcNq', 'lrZdP2XZ', 'WQupWQhcHW', "WPpcHwb+WQLsW5myWQhcNq", 'nSkVg14kECkvWQekjq', "AJNcIKjOWP/cVCklx3S", 'D8oLFa3cHX1sW5dcNSkY', 'WPhdJfWrWPZcG14jWO8X', 'i8kQW5VcKdJdOmoxt8o8W5i', 'W6xcVwW', "W6/cLmoOWR19", 'dmoiWQCEW5tdOYpcQHVdNW', 'wCoWWQldQmkI', 'W6ZdGCkfW6KZW6dcVdjFWR8', "W4/cGWnxW5pdVcfkW5T+", 'WRJcMmkpveC', 'WRzPWRuKWQBcH8odWORdHCoq', 'WPWFWORcV3W', "aM/cRLbm", 'WORdJCkUWRmuFWzizSkX', 'qZ8mWPJdGmkGgColhmk9', 'zghdVmkLzSkgW6ZcNJuA', 't8oWWOBdP8kyWPlcKmoP', 'W6FdMIKGDwWmtGLa', 'W4yIcHH8aCkDa8omfq', 'jb3dV1ng', 'WO9IWO0D', 'lwBdOCkIC8kjW6hcMhb6', "AHZcPCk2WP4Ti8o+W7WQ", 'yGi7jSoc', 'kxBdHby6W5ddSCopFsC', 'nSkvCCkzWPSSffnPFW', 'AKddOuOdWOddQq', 'EIldHfn0WPtdSCkixcK', "gxelWP/dMmkmjmoAcCkG", 'W5xdLJu2yh0Bd1uc', 'WR0AWR0', 'W6VdGceQW6XAW4anWRFcMq', 'WQvAD17cLCosW5H5WQ5G', 'WR3dNmkfWQbJWOKdlmotWRO', 'EH4UWPhdMW', 'WRBdGCobimk5vGzIWRjo', 'WORdM8kEta', "rY7dT2/dGemMwCkREW", 'lSk6meddVW', 'W7nMk1RcUW', 'WRZcJmkNWP0HWRBcH09FWQi', 'BmoKWOJdHhxdLCkqtmoGW4G', 'WQhcNSonW7SfW6FcLJjFWR8', 'vXC5pCoY', 'WRGuWQdcHKlcO8oRs1TP', 'oSk6fSoRnG', "l8k4ovxdHJXZW7/cKmoI", 'WRpcLCkc', "W6zpgSk/zmoFWQNcS8k6wa", 'WOCNaJNcMW', 'WOddJSksWRXQWOGLkSox', 'euBcKcVcPW', "c2/cTsRcJa", 'W4BcGSk5ECkp', 'pSoBW5dcKtHpCSkHwbq', "zc/cL1n2WPy", 'DmkWWRRcVCkXW5VdG8kUkmkL', 'nNJdHmkazq', 'eCk1W4hdGmkUWRhdKmoHESo0', 'c8oxhSoTWODfySkwf8kN', 'gCk1iG', 'W4zSoSkRhSk6W7ddTSozrq', 'BmkkWOVdMar6lW', "oI7dQM/dMfGdfmkLnG", 'W6vGhwZcTq', "W57dJte+ua", 'jwlcUCo0sSkCWQxcHaui', "zCo/WPxdK2tdJSkwta", 'DCk7W7DBW5tdVdZcTXVcPa', 'lsdcUc3cIJXVBCo3FW', 'omkzkrKIpmkTW7ndFa', 'W6btdSkVj8kf', "W6n+eetcPG", 'W4DGW5ONW5FcH8kXW6JcV8of', 'pmoxjmo5W4T5pgCJrq', 'jehcImoIbGxdNSotW6BdRa', 'W5Dyd8k3lCkfW6xcRSo4BW', 'xe3dOfGfWOhdHG01WPq', 'W45PvMVdLmkOWOPsWQpcLG', 'vCk6bbK8', 'xedcHhn1W7BcNCkGaCkf', 'WRZdShzKWQe', 'WQ7dPYNdJq', 'WRvfsSkjc8k1W5RcOa', 'gCk1oetdHIz1WRlcGSoK', 'o27dVSkQaCowW6dcKYe5', 'WQOTAXRdR8ozxMyTW5e', "iYVdPwvEW4BcOYhdISo/", 'W5ulW4S4W6xdHCoMWPFdQCkx', 'BMtcQZykWOVcLNVdNSoG', 'rCkrWOWMW53cHY7dIHVcUq', 'WPRdKCkcta', "WP/dILW", 'W7vgW67cNfJcTCoTq1T5', 'W4OufWDdAui', "W6D/lG", 'E8k9kcCO', "uHddIY09WO/dSSoYsmol", 'W5xdLCkbBSkRvCkswLtdTa', 'qYuxWONdL8kHi8ordSkN', 'rYOIWRldGa', 'ws7cRevW', 'W4OxcG', 'owNdQSkXf8ouW7hcHNHN', 'W43dTmkbyCku', 'WOCHfGjQb8kmcmovhG', 'W57cVY42W5NcOeRcMWKr', 'lrZdVNvK', 'emkLaxBdGa', 'WPJdQ2jYWOFdNW', 'W6rjW77dMrBcICoBAbT1', 'WQe2WOBcHwPjW5xdNCk1W40', 'EW3dOmkHWPaHn8kjWOeW', "WOv+WQSTWPa", 'W4a6cYzD', 'pLZdUCkaDa', 'W5veFgVdLmkOWOi1WQ3dMW', 'CComt8kQemo4W77cLMpdKa', 'WPpdShXdWRS', 'DvVdTKKsW4xcPbjGW5S', 'jXNdP8oXW7m', 'WQlcQ8kBWQpcIJJdH1rK', 'WQvAhdJcSCkdW4OeWQ59', 'W6bgnfVcPq', 'qHhdSSo5W6K', 'WPH0qMetu8ojwSkCua', 'gxhcLmoDnmkFWQ3dVtPE', 'W7JcLSk7tSkk', 'F8kAnqmWjSkRW6qxoG', 'W7tdKmowpHdcPweWWRFdTG', "pmkLx8k/WPe", 'nWZdNgXe', 'W4WkgY52', 'W7hcN2FdTNW', 'W6ucW5NcQZ4rWOFcNCo5WOy', 'WO3dLJtdIay', 'W5jQn1dcRG', 'kehcUIpcLq', 'WRBcUSk8iCkLstyTW6eD', 'xIikWO7dHSkYjmoCgmoZ', 'bHFdQCkVmSkhWQVdRfPE', 'hmonamo0WOWahSobs8o3', "W6pcJNZdO3Scesm+fa", "W5NdNmktySk+hCkb", 'hMdcLmk3w8kbW5RdRcG8', 'WRtdVSkcWRTF', "WPBdRmkPW744lCk+WROUWRy", 'Dr7dJmokW6K', "ku/cHhX0W6BcPCoYc8kd", "mL/dSCkVzq", 'WOJdVCkADmoO', 'BtxdQSoEW7a', 'WRxdSSkSsmoT', 'WQ3dPrpdTqS', 'oWVdHaS6WPNcV8kutMG', 'W4tcMZhdVNWjoJf5va', 'W77cImoQWRfTy8oQW798W7G', 'W77cI8oMWQXHzCo7W7TQWR8', 'mCoeWQyFva', 'n3tdVmoLqmkCWQxcHaui', 'WQeGWORcMN1dW4K', 'W5NdR8k2cCoqWQxdNCkxkSoR', 'WRxcUSkjWRxcLdJdKvOPdG', 'WO84iX7cMG', 'muBcKZNcGG', 'uCkvWPFdUby', 'W48LfrH8aq', 'jgldQCkPe8ofW6a', 'ihNcGWRcOW', 'q2ZcI8k5vmkwWQ3cKu4L', 'zmoxCSkOWOuTbLrPEW', 'W5RcImkvs8ko', 'xwZdU3me', 'WOVdJfqe', 'WRdcTCkFBxe', 'W6rSlLZcS8kqcvSgW68', 'WQPjh2uyr3u', 'WOmObG', 'W583W55vW5JdSSowkLFdLa', 'DaZdQmoRW4rI', "WPtcJCkYjCk0gSkBru/dSW", 'W63cQ8o5WRP8', 'W4NdQColhCkRWQdcTmkmgSob', "WP/dTMSUW5dcNhBcLWKa", 'h3FcJuPW', "xCo4WO/dRmkjWQtcNCo8FCo/", 'WO7dPXVdNc4', 'WRhdLCkgr8ob', 'WPNcRCkAWRlcMspdMXK3aW', 'fMJcQ8oWgG', "WQ/dOrS", 'WQjfmeuD', 'W7ldMmkzWRjHWOpdHwyEW7e', 'WONcIfHiWPu', 'WP3dJLadWPW', 'CwTzW53cGSoOr8k1xCoZ', 'W7DamSk2aa', 'imkFqSk8WR8', "sSo2WO/dVmkyWONcI8oTBmoX", 'WOddOSktWRTUWP4adCoFWQC', 'WPddGCkSWRafBbS', 'WRRcKCkBEW', 'wdiuWPG', 'xCo8WPpdPSkcWOJcISoVDSo9', 'WPNdSgfZWPldVINdGuW', 'WRlcQ8oaW6BdIwhcKHeXbG', 'W7Tcq8oHsCoQWRBcRSk6iW', 'W6avftLl', 'i8kQW5VcKddcH8ozcSouWPi', 'WPfhb3OP', 'W6zdgmk0mmkjW7VdQ8oO', 'W7z4kua', 'BmknWOm', 'WOpcMebHWO4', 'W4lcMmksBmkZ', 'WPldQmkYWQ1c', 'ymkkWO7dLemTzmohsbi', 'CSoeW4JdLmoCWQBdNSkZomo3', 'WOqSWQNcJ08', 'gMDeW4ZcHSoRzSkFmSkr', "W50+ga98", 'WOZdHCkUWQmf', "W7lcGSkGW6uvb8k+WROUWRy", 'WOuIWR3cRxu', "w8k+W6rXoh4Dzc1N", 'W5OpgbPpyaFcGmk6W7W', 'uCoAWOJdN3u', 'zcJcSSo2mSopW4xdKZ0Q', 'W6OopHxdVCo4W4DMWRnG', 'cCk5W4NdImocWPBcKCoGA8oQ', 'e0pcIhHzW6hcISk3cCkF', 'rsuaWPJdISkCla', 'kItcPCk0WOf5BCowW5vI', 'mSkZovu', 'W6BdUCoyW6ZdTv3cNHeGfq', "W6/cL8kOk8oKvCofdtBcNa", "DSoQWOldP8kjWP/cVmoHASoW", 'WQBdH8kismoUW7e', 'W7yjmWddQSkSWOePW6TG', 'W4ZdLdi4vG', 'WQtdM8kPWOvfjmofWQPtWRy', 'c8ofWQusWPRcUW', 'dgTeW53cKSo7dCkremk8', 'gCoDWRGvWPe', 'WP3dNmkJWQuqAGfeBq', 'WPBdG8kfrCo5W5RdPG', 'ySklWOpdGHDGlSkzhcy', "CComt8kID8o+W5tdL2ddJa", 'aCofWReFWOC', 'wI7cVIhcKXDVCmoMCW', 'W6VdLSkwy8k8eCk5u1RdOa', 'rrtdMmo8ma', 'uHVdKbamWQldMmoYsmol', "qZ/dGmo0bSop", 'n3ZdS8k4CCkcWQldGM94', 'W6NcS3xdTh0x', "WQ/dOCkbCSoX", 'AmkxWRVdQby', 'WR7dO8kAWQiO', 'ng3cSSoPlCoAWQlcPG1S', 'f0pcJ3rOW6u', 'WRW8W4JdIserWOFdSSkrWPq', 'jCkGlw7dHq', 'bCktW5fUjx5MgsqC', 'WPVcQJO0W5dcGwdcIHOh', 'aCobWRjBW4VdOYhcT2ddMq', 'W6FcPxRcUs9su2O2fG', 'WQNdM8kgrCoX', 'CKFdIxyU', 'WO3dP3XqWRC', 'WRRcG8kcE0ldStHOWPxdUa', 'WQ3cJenMWR8', 'WO3dJCkBrCkRWQRcV8kkn8kq', 'WQJdVCkorCob', "WO/cGwXV", "WPhdHSkzDSo+", 'W7ySW69XW77dJW', "WOZdSt/cSt5drwy2dW", 'W5OxebDj', 'aJFdINPa', 'W6BdICkiWPb6WOldGN0lW6y', 'gCoaWQG6Aq', 'W4XBrKSrjxZdOSkSWPO', "zmoukqa/AmkUW6HqBq", 'cCk5W4hcR8omW5VdNSkUmmoz', 'xWBcKLrV', 'WQujWQhcGvNcSSoGuLa', "WQldVt3dGfzSWQZdTG/dTq", 'tmoHWOJdVmkyWOG', 'WPZdHSkFwq', 'WQBdQ8kivCo4W6hdR8oAvCkK', 't0BdMhSM', 'WRRdQgDUiwaqvbns', 'WP4Obc7cMSo8', 'wCoSWPldPW', 'W6tdHJmYB2OBEarb', 'iaJdSSowW5T5', 'WOhdPhKbWQS', 'WQJdOs7dGa0JW5JcJeRdTq', 'udxcGwno', "WQpcSM/cLev3W5RdSsxdTq", 'W717c8kQeG', 'WO3dJCkBrq', 'amoyfmoH', "WR0HgG/cJa", 'yqddNmkMsuldN8kVW4xcIW', "D8kNWP/dMa4", 'tYC0WPNdNa', 'W4pcI8kRsSk9', 'W6STdsrd', 'gmoJnmoYwsddSZ8SW6i', 'eedcH3DK', "dgTmWRRcNmk+jCordSkN", 'WOtdGd41W7fAWRTWWR7dQG', 'WQhcK8odW70OWRBdQZSKWQ4', 't8ozWONdSN0', 'lgNdOq', "WQm+WQNcVL8", 'W7xdTmoiWQZdTv3cNHeGfq', 'WPGwsSo6zmoaWRBcRSk6kW', 'i8orWQBcMuVcLCkKaSkUWPW', 'BctcJvHPWOtcSmkjwwW', 'ixRdU8k4yCktW6pcKZmG', 'CmkSkSkBW5zKr1nKBq', 'W4CofbzjDW', 'W6btgCkU', "W7y/gGr8f8kOdSox", "w8kXWP/dTGO", 'CCkbW43cJLWVE8kHnwa', 'sINdMSoHhCoE', "W6xcGSktv8ktfWv+WQHy", 'W4pdJmkB', 'tIOqWONdNSk2jCojgmkH', 'W47dOq4BBW', 'AGVdQSo9W45KESovW4q', 'WRZdNmkDWRG', 'aSoXlSo0tHBdVJ49W6i', 'iSkcbSoPFSoTWP7dSY3cGW', 'd8orWOqoCdfrpxOM', 'WOtcNSkzWPJcMG', 'WQhcNmohW40cW43cLJjFWR8', 'WQ3dGL4sWOdcIfHdW4bt', 'WP7dMsldTdS', 'vJtcHur7W4ddOSooaqq', "AmkLWP/dOXi", 'WOhcMmkAufy', 'W4vAEKxcR8oTW4nuWOrG', "WQNdVcNdKrOLW5xcHv/cSa", 'WOaxste5tSojsCkesW', 'W7JcSmkmA8kj', 'WQTpaMi', 'WR7cMSkgt8oLW6BdTmoszCkI', 'WPGQWOBcHMq', 'zJZcTwn9', 'i23dPG', 'mmoQWQmZAq', 'vxFdJfer', 'oKBcUSk0WOflxSkmW7OZ', 'kZBdQt8rWQ7dM3xcK8kV', 'W5DqW5ayWPFcVmkfDNxcIa', 'ubNdOSoNjq', 'W4WJnuRcTCkQduCaW6W', 'BSoJWPZdN2pdL8oqgCkEWRy', 'pmoRkSo0WOy', 'W58QW55aW4RdQCo7cdddMG', 'mv7dTSkfsa', 'mg7dT8kH', 'mfxcHMXL', 'a8o1nmo0tIVdPt8N', 'WQdcKCkyFvxcPx4NW43dUa', 'dCk0jxBdJa', 'WPS8WP7cJeG', 'W7ldMmkzWRj8WPtdHNDFWQa', "W6/cLx5JoYKfkM0t", 'WO92WOWbWOe', 'zYCebCoz', 'WRVcG3nNw2S9vZjA', 'W53dOelcSsnduNuTkG', "WQ/dOrVdLW02W5G", 'W57dN8kFWQHTWONdUNCEW6K', 'WPxdNCkyva', 'W6vUc8kXfW', 'd17cPqBcTq', 'W7xcTgS', 'WRFcLrWokfjpEKCo', 'W7OBmXhdTmk9WPCVW6SY', 'W4ddKmkhzq', "l8k4ovxdHJXZW7/dR8k5", 'fCoMaSoWDG', "iN/dHSkDAa", 'W583W5yYW5BcV8kzBgpcJG', 'hMxcQfvc', 'WRxcMCkUD3W', "WPVcSMFcHu9SWQZdTG/dTq", 'W71uamkfjCktW7hdOCoOzG', "W43cNHi5WRxdMhbyWQz+", 'WQNdVHS5W5JcRaTxW5S3', 'WOLuWO8DWPS', 'W508bWJdOSovf0CCW68', "FmoOWQRdMCk+", 'maHls8kZW4fDWOiAja', 'g0pcJxi', 'lKBdGmkrjG', 'W6JcIwRdQxG', 'rcqjWPJdOCk2pSokdq', 'iwHlr8kOW7HJWPK3dG', 'ocxdHCo8W7a', 'fmokWP40ogecEs0C', 'ocddT8o6W4K', "lCoLWPNdMK/dISkCt8o8W44", 'W4xcJWqMW4lcJwdcMWLs', 'yMtcUc4gWOpcNHFdUCkH', 'tSkfhIqt', 'tt8qWPZdKCk4l8ondG', 'WRP0WQeLWR3cNmkbW4lcR8oE', 'W57dN8kFWQHTWONdVNCtW68', 'WPhcHse1W7nhW4b2W4RcMa', 'pX3dQCoCW50', 'pCktW5nXkwygsqDN', 'WRRcK8ktqvpdTYr5WOtcVq', "W4W+nGO", 'W7BcG8o7WRL9Aq', 'WORcHxG', 'tdJcGvTZWPxcOSohwgu', 'WQBdMConeZRcPwe4W5ddUa', 'bgBcTJ3cLaj8ECoGyG', 'jgJdRmkRfG', 'Bh7dLqCUW5ZdSCouaIu', 'w8o8WOddU8kjW5pdJmk6kmkY', 'WO4DWRlcMLS', 'e33dQSkCwW', "WP/cN8kNWQtcNW", 'W6ekiKxcP8oNW4v5W5uD', 'kdhdPxvEW4RcVJS', 'gmojWP0Msa', 'pmkgECkCWQW', 'j2tdVCkLD8kZW6pcKtS', 'bIpdISoyW4O', 'zSoRAHtcKgKDWPdcKmo9', 'aCoTnmoIsbRdOJKWW7m', 'lehcJa', "AYFdGSkyw8o9WRFcOIG/", 'bCoaWPOJDYC', "WOC/WP/cVhG", "WQ/dVdNdIqOZW4tcJW", 'CSkqW43dLa12E8kvdMK', 'iCkzhmoQ', 'WQaUWQRcVwi', 'rZNdR2pdGcXmvmkREq', "WQtcLCowiq/cUgfdWQ3dSq", 'WQyOWRBcPxe', 'WPBdLSkbF8oMW7RdRSoey8kU', 'WQu3WPVcGN9cW4tdJmktW5K', 'i8kIWRZcNN3dImkxuCoNW5K', 'rgtcQZykWOpdSxxcK8kN', 'WRVdHSkHWPK2ymoXW7r9W6i', 'ohtcTCooaa', 'bMZcLmkMsCkwW5BdRe85', 'EJpdHa8GW5dcQSoQmcK', 'WQjwohiu', 'nSoCavK8j8kMW7jdya', 'WQdcLCoEkGhcS204W4hdQG', "WOKvWR/cUeHUW7hdR8kcW7u", 'bNZcUIRcHa', 'ErhdPmo5W5v1Cq', "WRGAWRBcTelcSSo4qv5/", 'u8k9z8kXzYlcUrz5W54', 'W4vIewVcKa', 'iMVcIvrK', 'WRBdHfmnWOe', 'D8kgkYa4jSkoW61wyG', 'wd4wWPpdHSk6j8oAdW', 'ex7dGCkWpG', 'tSkrpSkQWOrpt8knaSkY', 'WRhcNSkcBeK', 'oMrzjCkKWR9hW658Aq', "DH/dT8oMW4z3ASorWOG4", 'tmogWOldVCkjWPRcISoRmmkT', 'W452sxBdLmotW788W5BdIq', 'c8obemoWWPO', 'WRZcMCksELxdQW', 'pHVcTrKmW6JcKq19W5S', 'dCoWimolWR8', 'WOZcP8k9tgtdHWjmWRpcIW', 'AComfSomW5z5rXOQpG', "W6/dVCo8pHdcPwe4W5ddUa", 'CCoekmkSoSk5W73cINNdHG', 'W7atsZyxlW3dJcnf', "t8kdW61BWO/dKrBcTXVcPa", 'WPtcHCoDtmo3gmkAweJdOG', 'W6WwWQRcVdbdW4xdG8ktW5a', 'yICeaSoH', 'EcuovSkSW4PuWPLmCW', 'WOZcMxjVWQaC', "W7Kdfd/dLW", 'smo0W4a8DZbomgG1', 'W5FdGmovnmoMsmovBwBcVW', 'hf7cN3H0W6VcLSkHhmkk', 'iYxdUW', 'mCo7WOyPDY1jFYmJ', 'WQbPW6HIWQRdHSo4WRZdRSkD', "WQVdVdZdJbG/W5u", 'WPZcNmozeCk4WRNcOmkgjmo7', 'WRBdK8kyWQb4WP4nkSovWQe', 'WQe4WPG', 'WQpdSY7dGfDKWPddHapdTq', "W4u6W6j+W6/dG8oFWQ3dU8kQ", 'etFdQh5pW4FcKchdMa', 'W5ZcHCkNW7jvW43cIZjpWQq', "WQFcHmkxCfpdOgeNW4/dPq", 'm03dI8krza', 's8o4WPxdU8kaWP7cK8o9FW', 'rCoWWPFdQG', 'EgJdU8kVlCowW6tcJxTS', 'iSo2g8oGWOS', 'WPZdGCobkmoEweSTW7Wv', 'uZyzemoD', 'WQBdRmkfWR5c', 'WPtdJCkyvmo5W7ZdRSoq', 'gmo7kSo0hedcR3bPW5G', 'o8omkCoWWOW', 'tSkzwCkKW4KaaCoExSkq', "WO/dPGpdKIO", "W6Hxgmk+g8kfW7JdQ8o3EG", 'fmk5WRRdKSofWQddJ8otomkJ', 'Bmo9WPxdLwldS8kmumo9W48', 'y8kfWPNdHq93lmkiat0', 'ydJcL0j7WP7cSSkczw0', 'BSoNFG3cH2mJWQZcNmo9', 'vJNdH8oU', 'w8kZWQFdIWa', 'CCkiWOZdNYvGoSkxdq', "WQypWQ/cGuu", 'W4JdUCoGW71aDWzyD8oW', "WQ/dGCktWQ57WPNdK2alW6y", 'hSovgmoQWQ9sqmkteW', 'v1pdT3ldGaPGBCoXDW', "WPPLWOOmWOJcT8owps/dHW", 'WQqRWRtcR2i', 'nCoba8ozra', "zX/cU0SkWP7dSwdcGCk0", "W7/dQCkTCCkU", "WPhcNCk/WO7cVG", "mSk5gvxdLtT+W70", "W6/dMCkrWQjTWP8", 'nw7cV8oFhq', 'ySkbWRldKHf3oSkodwe', 'WRadWQFcGxdcTmo4t1a', 'WR4TWPhcHNSmWPJcLSoXWP0', 'W47cGK3dVLu', 'WPHYWROhWPe', 'WPldTHVdPZC', 'bSoeWROAyG', 'oSkWx8k1WRG', "hSoCwCk7W5yDaCkLk8o+", 'C8kwkrOZyCoZWOW9jq', 'WOaQeXtcL8o6W4D0W7NcNG', 'kvFcHCoVhG', 'iutcVIxcJW', 'WO1YWP8z', 'kshdV0zyW4ZcPtRdH8o2', "W6/dOmorW6KVWOuklCoiWQ4", 'hCodWQmcWOtcUtZcQatcUq', 'WRldNmkj', 'm1JdUSk3f8ohW7hcMIaZ', 'W6BdRSoiW7FdMhFcNHLhgW', 'WRHfEfJcUmkdWQvWW5vW', 'W4xcUx7dOwOgfZu2', 'WPpdRCkpumoa', 'W7mFpG', 'WQpcVmkMWQpcTa', 'iCoeW43cKuTvDCkxbYC', 'ECk4wCkmW5G2bvbvFq', 'W7nJpK3cRCkbh0uk', 'W7qOW6XZ', 'WOLSwq94amkmwSkkqq', 'i0dcNatcHW', 'yqddNmkMsulcLmkjWPJcGW', 'WP18vuXwmCkJvmoteG', 'W5NcLmolamkRWR3dH8kzESkK', 'dCowf8oWWPTptCkse8kL', 'W7veW7hdIbBcNCoec24O', 'WQi6WO3dLIetWPRcICkxW6a', 'W6tdLIjZpJzdbZXU', "zcJcSSo+vCojW6/cKJ42", 'WRVcTSkAuMi', 'icxdPNm', 'puJcV2PO', 'AHibomoq', 'bSoKgCoCFW', 'W7pcK8kvCq', 'WPpdRxHJWOBdGIFdNGak', 'nH7cVXvxWQRdMwDZWPq', 'WPf5W5xdLIOAWPZcPmogWP0', "dvFcSZ/cQW", 'qHSnWRZdTG', 'W7jjjfqrjrFcHmkiW4S', "WQ/dJ8kuWQrUWP4b", 'W4ymfXfE', 'ofhcPZ3cJXDHqCoA', 'xZSwWPtdHSk2fCowe8k3', "W4/cGWnrW5pdVcfkW5T+", 'sJtdUCoPkW', 'c8obcSoHWQe', 'j8kPzKPXEmoZWOW9jq', 'gCofWRjtW4FdRstcUXVcTq', 'DgBdQviU', 'haddGCkMaaZcHmkCWORcIa', 'WOBdLKamWPVcVL0pWOK', 'zSo2AGhcH3PxWRtdNCkY', 'WQqfeYFcRSonW7vHW5NcMG', 'aSk2gCoKgG', 'gxjEW53dICoEqmkFxCoZ', 'phucgmoGWOeiW5D0sW', 'xcFcUCoLuSkgWQxcNgLX', 'W4hdOY8Rvq', 'WRWvWRRcKetcTSokr1L8', 'WOldLCkSWQqt', 'W54uvNBdLmk9WPSUWOddSq', 'W6xcLCkazSkDhtrUWQ5y', 'W70umXFdOCkxWP4', "AYFcQCo+F8kSWQxdNYGI", 'WOddHL8B', 'WRNcN8kyButdOdnXWP7cQW', 'W6KLW6H1W68', "WO/dHCkYWQ4", 'WRpcHwDOWOy', 'C8kglXKIpmkPW69uya', 'e8kqDSkjWQW', 'dmowWOGL', 'WQHrh3mEDNlcNM0', 'W6PfoeRcNq', 'W7CyltRdSmk9WPKRW7O', 'jfpdL8kweq', 'DtazaSoQWOumWPKOeq', 'WPGMwuKmBeNdJmoXWQa', 'W6NcS3xdJMGgaInIsa', 'EJVcHvOZW4VdNmoTgIK', 'W57dKmowpHdcPwe4W5ddSa', 'fSkHcSobjq', 'cmodWRGpWPVcQgxdP14', 'WRDpWPO8WRu', 'W5VdSslcSs5yAeW2bW', 'WRxcQ8oiW6tdI23cNKOnpW', 'WQeUWOFcK3u', 'W6JcG8o4', "WPfKWOOuWPBcSCktiI/dHq", 'iSona8oMWPm', 'WRtdPIpdLrP3WP7dGXldTq', 'W452sxBdLmotW788W5BdIG', 'W6pdISkQWQvk', "WQBdSt/cSt5drw5rcq", 'WQCghX3cOG', 'zSo2AGhcH3iWWRldT8oZ', 'xIqrWPpdLG', 'WPBcRg5DWP0', 'ztayaSoHWPOqW5XZ', 'W6OFkre', 'W58tdr9n', 'W7nydSkZkSkh', "jW/cRXLxW43dNamWWPq", 'ycVcUCkkmmoSWQVcKgPO', 'a3BdHby6W5ddSCohgIe', 'wmkrW7DtWRpdSNhdUfxdTW', 'oKBcUSk0WOflxSkmW7OX', 'ArxdRmoQW4q', 'WPNdOtNdJrOZW7hcKe7cTG', 'WRqKW654W7NdK8oPWRRdU8kh', 'W4FdVmkqWQzq', 'qmkoW444DI1jjwmK', 'FXFdSCo7W5G', "WRNdRIlcSuu+tb0NEG", 's8oDhuymAmo1WQeama', 'W4usdXe', 'kCoQWOiesG', 'W7X9lCk3nG', "W6/cG8oOWPHS", 'kfpcVCo0gWpcJG', 'E8o2EbNcNf8AWRRcKmo9', 'W7aFW4TMW5a', 'WRW9WQtcOxG', 'iCoeW43cKum6hmoubsy', 'WQNdNSoCkmkLjujwW61G', 'l8oyd8oTWOu', "WOLBwvqmjq/dUmkRWQW", 'r8kmW7CGWQNdTuFcPwBcPa', 'WPZdVJBdLau', "WQL/WQ02W4xdPCogW6BdOmkC", "WP9vWQhcL1ZcMCo0tvL+", "W7ldUHq/zW", 'W4bUlSkakq', 'WPmWWOVcK31nW5FcGmo3WRa', 'W7Ogrs1HkcFdJcnf', 'aLhcTd3cHqj6E8kTja', 'W6f4o1RcU8kXg1OBW6K', "Cq/cPxnz", 'oeVcNL92', 'lL7dPCkYwW', 'W41fcCkYiCke', 'jMBdSmk3', 'aCkJaSoZaG', 'aSo5WQaQWR4', 'oJBdONS', 'D8oNEG3cHX1sW5dcNSkY', 'W7hdQSkbFmko', 'gSkNgCoUaa', 'W7WREZzmaIFdJcmg', 'Ae3dPwyaWO3dSKaUWO4', "EZpcHuj/W5JdO8owaIu", 'oLNcPCkPWOLxlCoiW45T', 'W7hdICkZWPLl', 'CCoLWOi', 'o37dQSkGhSoa', "W7X0dv/cMa", "W5VdJ8kKxSk+", 'W7LFd8kfiCkoW7pdO8oJoq', 'o37dV8kSfCooW7e', 'WQdcTCk6ExK', 'W7jSneVcUSkQhvSkW7O', 'WP3cK8obWOZdIqRcNGWGxa', 'zSoKWPJdN2xdICknr8oHW5i', 'WQBdL8kzrCoQW6hdPCkFjCo6', 'a2RdKSoPcWJcQmkeWOtcIq', 'WRxcI8oMWRbRECo7W6HNW7G', 'WQtcHCkfDG', 'Dmk5W5ZcR8kfWPxcJCo6ECoW', "tmk/ESo4uGZdPcWNW6a", 'W65UigxcHq', "yrGCWR/dVW", 'W4WzfHLolbZcSSkpW6e', 'e2VdV37dKvCIpSk2lG', 'W7r9dh7cQa', 'lCkZmW', 'WP86WPFcP3m', 'W4mxes5A', 'Ea3dIZ0MWQldMmoYsmod', 'W6BcSNRcHv93WOhdNaFcKG', 'WRldIvP1WOG', 'rXiXfmoB', 'kSkyDSkJ', 'imkHFmkhWQe', 'WQKRWPZcJ25jWOFcLSoZWOa', 'cCocWQyIqa', 'oMZdU8kMkG', 'WQxdTWxdHG0YW4dcIeRdVq', 'l1VdUCkAFq', 'WRGuWRJcKhtcP8o1tLP1', 'lv7cIhvJW6BcQSk3g8kF', 'bCk5WQ7dJCkMW5xcKCoSCSob', 'pSkQWQddRtNdVmoiF8kZWOe', 'W7pdTmoiWQZdTv3cNHeGfq', "WRlcLmoqW6bhWQ/dVdWqW70", "W7hcHmkvr8kjfJT/WRnn", 'W4NcGSktBCkFda4LW64m', 'CmoMWPldK3u', 'W7q6W7v3W6tdHmoPW6JcSmob', 'WRFcN8kyButdTZr7WOtcTW', 'WQZdImkPWQSn', 'W5KjfGbdCv7dJ8oG', 'WRBdGCobkmoEweSLWPSt', 'W6hcT0JdHwC', 'W505cWjTgSkeh8oo', 'WORdTfWQWQW', 'CIuhh8oN', 'o8oeWPBcVgKYE8oAsgK', 'WQjApgJcKSo4W5H5WQ5G', 'W7NcJ8ks', "ACoFWQ/dPKa", 'W6VcPvxdPM0', 'i8o4WP41sW', 'jSoHc8ohFW', 'W6BcSNldOLe6W47cKLZcOq', 'a8oGmmooxH7dPdKLW6y', 'WPhdISkZWRqbCaToxmoY', "ymkXt8k/D8oMWQJdTaFcGW", 'D8oRWPxdK3xdUmkAumo2W50', 'B8kfWOddLa', 'WQFdKmorjmoEnYLhW7js', 'WQ1sW7xdUdZdPSk5aHu6', "W7/cNCozWPmHWOelmmopWRS", 'kg5MFmkZW5vjWPK3dG', 'WPb1WPqQWPdcT8kxCgq', 'WPL6vuWOqSozvSkCpW', 'i2FcHWlcGqfHDSohyW', "W7CMW69LW77dGSo+", 'WRmoWQdcLKlcR8o2ta', 'mCkEDSk1WPC1ce4Jjq', 'Cu7dO0Ws', 'W5NcSNC', 'kg3dVmkXzSkp', 'W6NcJ8oNWQ1SBmoWW7LRWRy', 'W60IcYrF', 'whddRvywWPFdVW', 'nmkjfSoJoW', 'WRJcJSkdySkHdbH4WRjz', 'us3dRSoFgW', 'fh7cPsBcLazrD8oRCG', 'W6X5W4JdNLKcW4RdHSkIW44', 'W5O8fqv6fG', 'cCkTumk3WR4', "WP/dNCkzu8o/", 'WPGwsSo6zmoaWRBdRCo7Ca', 'lrxdR8opW4XzhCo3Cmk6', 'nWpcRWThW4NcU2iFWRe', 'm3ZcOGBcJGz9sCoSta', 'dmomuSkIBSoTWP7dSY3cGW', "W6lcTg/dPxy", 'zCoJWPFdHhxdLq', 'WPtdQ8kzWQXB', "WO/cQmo/k8o5vCovfHVcTG", 'oh3cTcFcHqDECSoKDq', "wdhdQM/cUZ4NrCk0sW", 'W5uycJFdMW', "CSktWOZdGtb+nmkogW", 'WO7dP0fG', 'W5eSeav9', 'kKpcM25T', "jr/dS8ol", 'WQRcLwDZyMGnqKCf', 'fMSbWPZdKCk7ASoAe8k2', 'y0RdVe0fWORdOKG5', 'dMhdG8kvhq', 'W7NdGtu6B24', 'WQVcR8kq', 'W7u6W7fZW6BcJSk3W4xcHCoE', 'swpcUchcKXDRBmoSEa', 'fgVdT33dKLKUzCkiha', "rmo2WO/dVmkyWP7cJmo6yCoU", 'W6iplZz9', 'WQVdQ0PTWQK', 'iSkmlNVdRW', 'rmo4WPe', 'nMNdMrzbWQ3dUmk8cLq', 'feFcSstcUq', 'WOPLWPa', 'WQ3dRmoRkmoEweSTW7WD', 'hSoLfmo5rq', 'W6VcQgZdThif', 'W7XcimkcjW', 'ib3dR8oCW7u', 'eNBcMCohdG', 'x8oWWOldU8kdWONcHW', 'd8orWOqoDtftn3KI', "W6/dUmoCumoPkmovcXVdVW", 'WPVdLSkLWQeuE0aFnCk9', 'W4OufWDyD1ldNmoXWQ4', 'WQK7ymo6zmoaWRBcRSk6iW', "W7tdKmowpHJdGM91WP/cTG", "WONcGCkRWO/cIa", 'WQNdVmkbWR5i', "W6ucW5JcQZ4rWOFcMSo+WOy", 'WOZdQ2b1WPBdJc7dMeWr', 'WP7dIKew', 'E8o2exZcJGKIW4FcKmoG', 'W6RdICkf', 'W5NdG8kdt8oNW7dcOmodySk5', 'AmkkWP7dHqj8omkFnY0', 'W7RdTa4zBG', 'W6tcHmoiW7eWW4hcLInmWQK', "WQ4FWRhcSvTOW5/dUmklW7u", 'jNldQSkT', "w8oWWO/dVmkyWPRcKmoTFCk+", 'WQ4ZWRFcNhTEW5xdKmoLWOy', "yqaWWR/dMa", 'i8kik8oVmG', 'CCkrmG', 'ifpcSmoYhW', 'juxcJ8oYgW3cJSknWO8', 'W6Tgd8o6E8oFWQVcRSobxG', "WQ0jv8o6h8k9WR/dLCkOxG", "rcFdMmo/oG", 'W5Olfr1y', 'WO7cL29VWR4', 'WPJcHCk6sCktw8kAvfhdIq', 'c8ofWROuWPRcR2JdSKNcRq', "WPVdLCkFvmoNW7ddP8ofEmk+", "WQxdOMeOWR/cMMWKWQKy", 'kq3cUr9bW4hcJmohbYK', 'WOWTEGJdV8ovxGLpWRm', 'W5ddR8oBFCkRWQJcOmkejSoW', 'WRZdSwtcNbrdrwy2bW', 'WRldKSkFWQD7WOKw', 'tSoQnSorWQuaqmkkaSk2', 'WQhcKCoCWQLMWP7dGNmrW7W', 'WRxcSCk1sKG', 'tmkIESkXhbZdSt4SWQm', 'WP3dLSkpWQy', 'nmkcAmkVWPu', 'W5SAeHefpIRcTCkLW6e', "WQFdU8kJWRutAGDgqCo+", 'tmkXBmk9hdddKGDNW6W', 'gIpdPM5B', 'DeRdUW', 'WQpdSY7dGfDKWPddIapdTq', "W6/dJCkrWQu", 'jCobmSobWQC', 'BYyFe8oHWPWhW4PJtW', 'BmkfWPu', 'W6lcLCknBCoxq2yhW7WD', 'W57dG8klWQ4', 'WRxcGSkc', 'qxVcOmkFWPGQtCk2j8o0', 'W6yom0j2eCkdjCorgq', 'W6NdKgDSpJrEFdOA', 'W4yUeWL6bW', 'n23cSSoNiSowWRJdNsTi', "WO8/WQxcOK4", 'WO3dPY4XW5BcL2ddGcq7', 'j8ocWRqtWPhcUf7dUeNdQG', 'W7SpnbhdT8k1WR03W60V', 'W7BcICoNWQ1SAmoSW653W6y', 'q2tcGmk0wmkAW5BdVvji', 'W40PcrHX', 'i8o9WPRdIte', "WQ/dMSoSaSoEweSTW7WD", 'oSkso8o5W4LKr2fxnW', 'WPJcLNrLWP0', 'WO7cKSkCAMa', 'W5RcNmkHW6a1W43cHYjeWPi', 'mLdcNCoXbXe', 'aKhcICowha', 'vtxdMKxdGemUpSkLnG', "ssuqWO/dM8k2oq", 'WORdLmkHWRifCbW', 'W7hdQ8kFWOTL', 'BCk5W45Xoh4Dzc1N', 'W5NdGmkhAmkGgmkAuG', 'omkhW7hcKddcH8ozaSkZWPW', 'amokdCoHWPTjt8knaSk2', 'WPTNWPqDWPi', 'C8kbWP3dNqjXpG', 'iSoOd8oOWOy', 'WP3cOaFcHuj3WPhdHYldNW', 'sg3dHrCyWOFdSxi8WOG', 'DmkEgqu0kCk4W6rfzW', "nf/cM1ni", "gsJcR8o2iSoCWO/dT3bL", 'WRuuxXddHmovWOiOWQ3dIG', "W7FcG8oOWRO4Bmk+W7HHW7C", 'W5VcHCoH', 'AmopWPtdLSkP', 'WQ03WOVcK0fpW5xdJmkTW4K', 'CYOxWPRdNCkHl8oGg8k6', 'cSo3nmoYsbBdVYm', 'WOWOgIFcM8oNW4XxW6lcGW', 'pcFdH8oBW7K', 'pCktW5nXkguWtI1N', 'WQLFf1aA', "W5FdM8kjsSouW7JdOCotC8k+", 'duVcUs3cHa', 'WO7dSgDRWOC', "WP09fYxcL8oTW712W7/cNG", 'ze7dVfXxW5pcQbD9WOa', 'WPFdH8kFrCo5W6hdUCohCSoR', 'j0VcUSonaW', 'qmktW45Xohz6AMaO', 'cCkQW5VcKddcH8ozaSkZWPq', 'WPFcO8kEsfe', 'W6vvlSkknq', 'B8ono8k9W7TtrXOQpG', 'W4Otgaryyfu', 'WOLBgHvFyaFcImkZW7S', 'W583WP0uWOVcT8owmshdGa', 'WPJdQ2bIWQVdGYtdNLe', "WOu6vItcMSkOW5zGW7/cLq", 'nmkrEmkxWO8', 'pCkbuCkEWRC', 'W7q6W7v3W6tdHmoPWPFdRmkm', 'u8osWOZdQL0', 'W67dP8kTEmkA', 'ESoOWQJdOfu', 'FclcHrLxW4xcUW19W5S', 'W6CgutzmcKddGM4k', 'kGtdRSoCW4XJaSo4', 'pmknfW', 'ASkbWPq', "rmo2WO/dVmkyWP7cJmoNDSoT", 'WPG5WOBcT3K', 'cCoaWQ8JAJ9e', 'WOLBwvqmlwdcKCoOWQ4', 'W5O4hb5TcSkzh8kCtW', 'W5ddOb4hBa', 'pmkzFmkVWPG8', "k8onW5xdNx/dICkkvSo2W44", "WQ/dTSkgWQfF", "rtGLWO/dGmkYmW", 'aSoHp8kXa0dcRw0sW54', 'nwldLSkgxq', 'WOtcMgH5WRGj', 'W7j4keBcQ8kCe0WD', 'rCkrWOWMW53cHYZdIHVcUq', 'cCkHhftdTq', 'WOLZrLe5kmk0u8oNqq', "W6NdJ8k+WRDI", 'bSksDCkJWPSGxqS7la', "xapdNw/dGemUpSkLnG", 'u8oxo8oMW5z5r1LRBq', "zfpdJ8o/sCoxW5/dNw1L", 'W6NcKSoWWQ59lCkHWQuZWRy', 'pv3dPCkLqa', "WQ/dLmk7W64VpSowW5DBW6yFua", 'W7RcLmoTW7a', "DmoJWO/dMa", 'W67dVCoAW6FdLhFcJWi2gq', 'aeBdSmkSmq', "Cwi/W4ZdR8oZD8kFfmk9", 'jCobWR8ICq', 'steFp8oP', 'nIddJx1I', 'bSokcmoYWQm', 'WPXVWOSwWR8', 'WPzerfr3wa7dPmk3WPW', 'WOlcLmkQW6vsW4XzFSklW7W', 'u8onWORdMCkk', 'eKZdImkWaq', 'tSkgrSk5W4L7FmoxlCoN', 'W5pdGmkb', 'W4CyhfqtoHRcN8oEWPW', 'mgjhvSkIW4fFWPu3yq', 'W7vlW7xdUdZdPSk5aHu6', 'uJldH8onW5m', 'iSkZleddKJ5KW4NdGmkV', 'ECkAnqm0oSk8W7Hhya', 'WOLSwuW5emkicCozua', 'BKRcR1OwWOVdTuiPW5S', 'WOLSwuWXnmohf8othG', 'W4NcVSkdz8kFcG9EWR9v', 'BCobWRZdNwi', 'egFcHWRcQG', 'nCoBa8oJtW', 'WP88sSo6zmoaWRBcRSo5yG', 'ifdcJmoQea', 'W6NdMIK1AhStqGm', 'WQK3WOS', 'WRddQrWnWORcM3qmWPiW', 'wfZdRfesWOhdMvq', 'W7ylgarvD1ldJmkSW7O', 'WPpdK8kHWPGl', 'W6FcV3ZdTd5CwNS2Fa', 'W6hcK8kiFmkFgGDO', "sa/cT1Ho", 'AmkxWQZdGXfZiG', 'l8kjWOldNXbMpSkiasC', 'W5JcPmkXuSkZ', 'iw3cGWNcTW', 'WQZcTmkYWPdcNq', 'W4tcVfFdSfi', 'W6lcThpdTgOg', 'WPWxldzraJxdNtHO', 'W7FcK8keCmkU', 'cx3cOYRcKGPGBCoXDW', 'WRpdMmkFWRn7WOq', "e2/cUYtcHqC", 'ptddRMrEW5RcOtdcK8kW', 'W590WP8gWP3dSSodmsRdMG', 'W4hdV3ldVNaqesnKuW', "p8k/BmkjWOC", 'omorWPSIvW', 'AI8cWPhdQW', "WRyuWQdcK1/cTmo0r1e", 'W6WFB1tcOmoGW5r5WR92', 'W7qFkqldRmkW', 'h8kMgSoaiG', 'WQHeg0KbtwNcN3Ca', 'dmoAWP0L', 'W4tdGmovnmoMsmovBwBcVW', 'FYFdIZ0MWQldMmoYsmol', 'WQddLCkyWPmI', 'fYZcQCoKWOLxtCkRj8k9', 'WQPif38lsNm', "W6/dUmoCumoOkmovcXVcPG", 'WRBdTSkHdSoKW7FdQSoODCkQ', 'W6bfbmkZl8ojWQ3cG8kqiW', 'W7FcICoQWR90AmoDW7vJW6y', 'omkgoCoanq', 'W4ZcLmoRWRzu', "WR1/chi2", 'WOjakxGn', 'WOLXwqv3amkDg8oseW', 'gSoacCoHW4KFhSodvSkm', 'W4vthftdHCo4W4v5WR57', 'k8kVpvpdJIz1W6G', "WP/dPmkJrCoi", 'aCkJCCkWWOm', 'WRNcN8kyButdOdm', 'W6qEW4BcM3fcW5tdNCkPW48', 'W7VdQCkPWQTC', 'WPuHWPNcMMC', 'W5xdH8kg', 'oKBcUSk0WOflxSkmW7OY', 'lMxdLSkzDW', "W7JdKdC/ygOB", 'd8kMBCkUWQy', 'W7JcJmk7qmkN', 'WOKdoYy3hmklemoJbG', 'ySo5WP7cKcFcN8odaSoOWRe', 'WQZdJtJdHaSJW43cMu3cUG', 'k8kAF8kLWRK', 'b23dKSkhcG', 'WQmpWQFcLuHnW6ZdHCkNW7C', 'W7hdLmkFuSkW', 'AmkkWP7dHqj8omkFnYO', "W69MCXpdKSo/xGLpWRS", 'DepdPLOs', 'WPWEeXNcKG', 'W4tcLCoQWRz9ACoCW6m', 'WQVdKmkLW74Pp8kRWRyUW5K', 'W7tdHmoajt3cJ2e4W5ddUa', 'WRVdSutdJdC4vXS2gG', 'jmobCfTXECoWWReBjq', 'lCoNWRK1yG', 'W6pdMYm2Euyy', 'WRZcTSkyWQpcJq', "W4C/dq13emkmwSkdtW", 'tmk5W57cSmorW5VcPCotmCof', 'W5JdV8kDW6K7ldulpSkX', 'WOKJdGi3', "wI7cJbldItG/q8kLkW", 'lhBdS8kRgG', 'W5DYeSkla8kOW5pdNSoWqG', 'rc3dGmoYbCotWPVcVWa', 'W4rCfL3cRq', 'W7zSkfZcPG', 'cCowWR0VWO0', 'WRilsSoRF8oTWPZcRSk6iW', 'W54Kaa', 'aCompSoaCq', 'WOe8aG3cHSoPW49WW74', 'owxdS8kAfSotW6JcKNfV', 'rqRdPSoHW4r0umoaW5a', 'fGFdSuXp', "ua/dRSoHW7G", 'WOOAgHRcNa', 'WP3dISkKWQKoEq', 'FehcUSkFW4mhz8k2j8o0', 'zSknfWJdVgjnWRRcJCo9', 'BmoOWPhdR3JdGSkltCoJW50', 'tcNdV8oXW6G', "oG/dLgrEWR7cQ3b9W4y", "dCoCwCk7W5yDaCkLk8o+", 'yImmoCoX', 'WQhcJmoCW6aOW4xdStWsW7a', "owhcKuT+", "FtFcIf1/WPq", 'W6XMW5FdIZ53W7RcGmkxWO8', 'WQbdbvKBtfFcNMWv', "x8oUWO/dUCkV", "ESo6WP7cKc/cMmoeaSoiW6e", "frNcOK0yW77dSwJcK8k/", "W7JcLmoSWR9SAmk2WQ4/WQ4", "cCoSoCo+srhdPcG7W60", 'W4yUeZn0hmkhcCoifq', "WR4jWO/cTLa", 'wmk4WQBcKc3cH8ojgCkEWRy', 'W7GMW6bKW67cIq', 'vmkYmqm7', 'WQpcOJmMWOVdGZpdJ0HF', 'xMtdRhCg', 'rZJdGmoNcSoDWPpcQa', "BYtcHvT/", 'WPBdU3LUWPa', 'qmktW45Xoh4Dzcua', "W77cLmo9WQDOAmk+WQuXWQS", 'W6xdGSodmHddIGnsW57cTW', 'nKhdTSkDAW', 'WRGmWR7cK08', "W5tcKSkMr8k/", 'xhlcPMjgWRJcUXb9W4S', 'dvZdQmkYzq', 'WQyTEGJdV8oDoqCcW7q', 'hCongmoQWOPfFSkDbmkY', "W5/dGmkfFW", 'WRVcNSkfALxdTZvHWOdcVq', 'WRxdVtFdGa', 'sCkhjr80lmkAW6reCq', "W55/wMVdHCk5WPi5WQ3cTa", "AYFdGSkyw8o9WRtcOIG/", 'dCoHm8okWRK', 'WRewfctcLCo6W4y', 'W6bce8kQiCoaWQNcSCkNiW', 'oMldT8kIbSoo', "WPZdKeyhWPRcHviAWP5+", 'bKlcVmk5CmknW53cKt8Q', 'iIhdPxfEW4S', 'WQldTZZdJbeYW7hcJKdcPq', "W6/cH8oLWRv9Aq", 'wSktWOCLoa', 'jCoTo8oCxW', 'zdSi', 'oSkBAa', 'WR1gWPuFWRe', 'FMJcQ1LOW6NdVZRdKCoL', 'W45PvMVdLmoRW4nMW6JdMW', 'ualcHwbi', 'WPBdP8kjACoJ', "WOH+WQ4WWRi", 'WR3dKCksWRTH', 'W6tdHJm2C30hvWit', 'ySo4WP8', "pmo/WPWWWPm", 'WPpdL0ydWOVcMK4yWOG', 'bSkeEmkUWPm9jvv4Ca', 'W6apkrDe', 'xhlcPMjhWRJcUXb9W4i', "xmo3WOxdQSkEWO/cN8oIFq", 'WO7dJCk5WPGw', 'W4mtdqL0eCkidSoiha', "wmoQWOPsWQ/dRKhcTWBcPa", 'W6lcNCkQWOKMWRDua8kCW7i', 'DuBdOuOdWOtdTu44W5S', 'WQRdQKn2WPy', 'BmkaWPxdLdS', 'WRNcKCkox0tdSsb7WPVcVq', 'BmkBdJuK', 'WQNcJfDYWQi', 'W5OphazyFfFdMSkLW74', 'WPZdHSkKrG', 'oq7dJMDj', 'oh3cTcFcHqDCE8o2yG', 'W594m13cSW', 'W6jdgCkY', 'W7fSkey', "W4a5pt/dVq", 'mSk3jeldGNiVWQxcJCo9', 'cmonkSoDWRS', 'W5FdJCkuE8kTemkhrq', 'W5SxmWhdSq', 'W7xcH8oKWRS', 'eCoFWR4pWOpcRNxdO1ldQG', 'WRrwegecuq', 'AbVdSCkmsuldL8oiW4VdHG', 'BMtcO1eeW47cVJVdGmo7', 'bNpcKSo3ka', "WRddVt/cOc9tswzzzq", 'pSkobCoDoSk5W73cINNdHG', 'WQpcKCklWQxcNtBdILqObW', 'WO07eYRcGmoTWOOHWRZdGW', 'W50vetpdOG', 'WPpdRCkFzCoN', 'W4NcKSkcymkBhcnOWRbn', 'WOTUWO4qW5JdRCojpZdcOq', 'WQyLhqBcSSkAefOBW74', 'W78wfcrO', 'u8kjW44QfvqDzc1N', 'W4tcMZhdVNWjoIT5sW', 'dmoGWP4sWO0', 'WQVcT8kBWRlcLde', 'DIFcUCoLuSkoW4ldKwvT', 'WQRcINHUiviJdJWc', 'WPpdRwb1WPBdIdldKKDc', 'nSouzLDXAmoGW4yzAa', 'mgZdHe0xW7RdSCohgIK', 'W70icam', 's8okWOldKWLnnSkvbc0', 'W69Mih3cUq', 'W6hcTgS', 'cCk5W4hcP8kRW5xcK8oHDSoT', 'WPmQWOVcNNTiW7tdJmk9', 'omkchmo2nSk4W7dcNfldGa', 'W57cVY5VWOZdNJtdMKDs', 'yYBdGConbG', "WO7cJNj+WQKiWPruW6FdLa", "yMtcUICAWO/dSrRdSCof", "W57cQKKOWO/dGI7dIf1u", 'WOTYWP8ZWOW', "WQigtILraLZcSsO+", 'z8kqdI01', "W7CMW69LW77dGSo+WQxdRSkv", "WPddMSkitmo+W7hdPCoe", 'nNJdS8kKD8kjW7y', 'i8oSW74GW4tcGtZcQHVdRq', "WRVcNCkeW5q4lCk+WROUWRy", 'tSkzgSoLWPPfaCoprmoI', "ja/dH3Py", 'WRddPxqxWRK', 'cedcMgPp', 'fmowdSotDa', 'WQBdG8keu8oJW6ddOCkElmog', "kM/dVSkZ", 'WPtcHCovi8kEw8kywvxdPq', 'l8k4pLpdIa', 'mKFcUatcHa', 'BrJcOeXo', 'lK7cJ8oYdbdcG8krWPVcGW', "W6/dTaeLsa", 'WOZdP29YWOFcHxlcIH8D', 'dJFdHSokW6K', 'n17cKLzS', "cmowWPW+Dt9wixq", 'k0lcHwHH', 'kMRdS8kK', 'E2ZcICkMwSkdW43dGw1E', 'W41kW55iW5JdOSondXRdMG', 'WQ3dI8kGWR1o', 'aSoAWPu5WP8', 'WOpcRNvtWOm', 'W6X5W4JdLJ4eW6dcH8kHW5i', 'W7ztgSkUla', 'WRybWQlcTe4', "WPBcKMH+WQKiWQ9l", 'W74vkWhdKmk9WPKRW7OZ', "WO3dTM9OWOhdIb/dMfTu", 'WRG6WPZcTxC', 'W6aklYHCimkMimo3iG', 'WRVdRSkhWOKJwaPTwSow', 'W7rsiKrXjrRcN8k0W7a', 'W7Kdna', 'W450vNVdJ8kfWQG1WQ3dMW', 'cmkraLBdSG', 'W77cJ8opWQLt', "qXVdHZ03WRhdJSo+smkK", 'WRKEWQdcKKlcRG', 'WQxdJxGOWPO', 'W4WIgGnShCkDh8oohG', 'WPtcK2r4WOKmWOvdW6m', 'xmoVWPxdKW', 'WQDhzZ7dHCoXWQnPW5nG', "W6POne/cQ8kD", 'h8kbjfxdTa', 'bL7dJ8kQnW', 'W4JcUZfxW6XhW4beW7NdGG', 'WRhdT8khWR9g', 'W4j7c8kEhG', 'W67cQgJdUwW', 'W6xdLY0mBgyqvbnw', 'W6mTluNcPSou', 'WRdcUM9SWO4', 'WP3cHmk0zLe', 'W5ldVCkntmkYpmkVzwpdKq', 'qr7dGCosiq', 'WRBdJKjJWQ8', 'WPzZreXclSoaiCkmlq', 'W57cSJulW6JcJwdcMWKr', 'W6fcd8kOlCkoW6xdUSo7Bq', 'WOCRhtpcJq', 'r8kmW7CGWQNdTuFcPMBcPa', 'WOldHHjDW5FdJaSXWQz3', 'mM7dQSkKamol', 'iCoeW43cKumYomkBgYW', 'W6Cgwvfct2JcGNar', 'xCktWRummqumgs16', 'cCkMW57cSSomWQdcO8kNq8kS', 'WPjfWPiYWRC', 'stmnWONdGq', 'j8o2WQ09vG', "W6/cICo7WRD9yCk3WQedWPW", 'bfFcN8oVeq', 'oSkcAmkYWPK0nfL4Cq', 'WPRdKLCxWOq', 'WQjifx8crq', 'AwFdKSoRbGZcHmkCWO7cLa', 'q8kGWRFdNsy', "yG/cSazkW4xdGhb0WQa", 'WRNcR8ovk8o5vCovfLJdTW', 'W6OSWQePWRxcMSkSWPpdKSox', "WO0Mgd/cHSoNW455W6JcIq", 'hCodWPGD', 'uINdH8oY', 'f8ocWPKfsG', 'W6rcW7xdUdZdPSk5aHu6', 'W57cOI4MW4lcJspdMLPu', 'WQBdH8kismoUW7hdJmosDSk9', "W58/WRLBWPxcVCkyCwtcNW", 'W5NcLmolamkRWRxdO8owzmkU', 'bmoxjSoMW4zIAJaQpG', "zSo2AGhcJXu+W7FdN8kZ", 'WQlcOCkgWRlcPZ7dKevYwG', 'W7RcLSoDWPfs', 'W4eJn0FcSCkgcKWDW68', "xJSfWO/dL8k9pG", 'W7Xdb8k4iCks', 'BGddTCoSWOeVpmkyWOfy', 'WQ3dMWddTICqW6RcSwlcNq', 'WRxcPSkjWQxcNxFdNXfIwG', 'FWNdJmoTW5K', "BdJcKvT/WOlcSmkfvMW", "aeRcPxv/", 'WP3dO2jQ', 'W7Gztdy3FY7cTZe4', 'dgShWPZdGCk2ASkns8oP', 'jSoqlSogWRG', 'W4qufWDyyfxdI8o8WRe', 'o2BdIbyRW4xdP8olgKy', "DCkbnqm+jCknW69tzG", "WQldQCocE8k7W4JcOmkkn8o+", 'W5eJhWO', "kr/dTmonW5fVhG", 'ncRdN1fp', 'W6dcUhJdUwOkcYe', 'uCkkW5PXW5tdVdZcTXVcPa', 'WRnGlxRcQCkOWP81W6tcLq', 'swhcTsxcVWfVASoXEG', 'WQdcHCkeCetdRcX9WOi', "W7SapW/dOG", 'h1xcU8kni8k6WQldGhb1', 'W6ddMmkiWQfRWOBdK2aSW6S', 'WOddNSkJASo7', 'wSoTWOddOCkpWP7dNSkXj8kJ', 'nqhdPCkFWOC1umk2xmkj', 'nuNcGtykWOpdSxxcK8kV', 'WRrAccFdKSo2WPC7W6qF', 'DqldKmoNhG', 'wmovWQddGSkQ', 'pchdQNO', 'W48DcrPg', 'WQ5kDexcSmkBdv0kW6K', 'uHBdPSoZjG', 'jgldUmkXf8koWRtdHYqI', 'EIRdV1bdW7lcSa', 'kSkBCSkLWPm', 'W74EmbtdGa', "W7/cJ8ksFmkFfGHOW7Wc", 'WQdcP8kgWRBcLdZdKfHNxq', 'y8kZwCkKW4KaaCoEvSo3', 'WQNcOSkYWR7cKW', 'WQNcKM9cW5xdKrTrW7zu', 'Cqiti8o5', 'pSkUp8oObq', 'WPpdJvehWRFcKLKpWPOQ', 'W6lcHmktFmkhca4TW6mc', "CCoVWPRdHhxcJ8omfmk/WPW", 'uxRdHvuE', 'W45PvMVdNmopWOX4W6lcLq', 'dmoEWOilWOtcUw7dLfRdTW', 'WOldOeyUWQm', 'W6rSoupcUmkhevWbW78', 'WQhcGCk3x1i', 'WQLvbxCcqwldJdXA', 'WOG7gsBcT8oGW4nNW47cLa', 'fh7cTJJcJHa', 'W6NdHYiYDwXwffyl', 'r1ddNSk5W7WWpSkfW4HT', "WRH+WP86WOW", 'W6pdHGyHC2Gh', 'kuldOfCeWPhdVL8PWOi', 'kSo1p8o4xW', 'W5NdGmkhBmk8eq', "W5hdImoMWRXYuSo/W6L6W78", 'W7VcLSkoBCkv', 'kZBdV29AW4BdSwRcJmkY', 'fmouWRKCWOdcTa', 'WQOqbbVcHW', 'n8keB8kNWPG6aMvPBa', 'WOVdGmksumoUWRxcV8kikSoR', 'zsRcSSoIWPG3tCkMpmoz', 'WOddK1mqWO3cN18', 'cCkVfCoymG', 'BI3dPwvEW4lcVZBdLSoq', 'r1NcUmkPWPeRdSkVWOeJ', 'W6BdNrJdR1e4W4pcLNdcVa', 'CCoUWP7dLNxdHSkn', 'WOlcIgb6WRGFWPi', 'jXJdRSkwWOmhz8k2j8o0', 'fSoJkmo1futcNuDPWQm', "W6BcR3RcKKXSWQZdTG/dTq", 'h8oYo8oMuGW', 'DLZdHmoSkCkwW5JdNZuI', 'EdeuWQVdPa', 'W7pcJ8kvESkh', 'Cseobmk0WOzjW4TIqG', 'WPxcN8k7WPxcLW', 'BeZcOmkpWOmhz8k2j8o0', 'm3xdRCk8', 'CIeobmoNWOWzW5W3eq', 'uslcMG', 'EmoTWRxdPmkz', 'BSkgWOFdRG59lCkFacW', 'W5VdKmkbtCkRfmkyu0G', 'WR7dK8kcWRyMW5DPvmkCW68', "Cmo+WP7dGMtdNSkjr8kZWOm", 'ErxdTG', 'W6ldQCkuCCkq', "WOOSbt/cHSoNW5TWW6K", 'W6tcHCkeBSkBgr8', "kCkxfmoRWODtvCkBbmk+", 'WQOSWOBcLwPfW4JdHW', 'CCkwWOJdHrDR', 'WO3dKCkzvmoYW6xdPCkxkmo0', 'W5zmW4WOW5JdR8owmIVdTW', 'zmkriqi9kCk6', 'W6CgutzmaIFdJcSI', 'W7lcPg3dVYq', "W7Xxb8k/", 'eg3dTSkUoG', 'WRZdGdWQW7XbW60NWRFcKq', 'ySkrnamOomkTWQeioG', 'lv7cIhvJW6BcTmk3cCkD', 'hrzeW4dcKSoRCCkYD8oZ', 'W4tdMJyEAa', 'qCoSWOxdICkn', 'WONcJmkIW7NcLZxdLg53xa', 'WPpdNSkBCv7dTJv9WOlcRa', "jmkxfSoMWOn/uCkhbmk4", 'A8oLWOJdHfxdICkA', 'W47dTCktECkd', 'o2JdT8k2bSodW7FcL3G', "WPWSfZ/cKCkGWPyKWRxdLW", 'AKddOuOdWOddQv4', 'k8oomSo0WOO', 'CmoqWPJdSMO', 'g8o2DWhcNMKDWPdcKmo9', "W6zxbmk5iCk/W7xdVmo/yG", 'd2VcTJ3cLa', 'tW3cSeaVW5NdImkpsmow', 'WQhcJmoCW6aOWO7dL2eAWR8', 'evhcVCkFWOGXymkCj8o0', 'WPtcHCkwASkQemovbq3cRa', 'dSonlCosBG', 'WOLdqNKMjqFcN8kLW6e', 'W6vxh8k0jq', 'WOJdKCkZWQG', 'WPOWbI4', 'W4K7lrtdNG', 'WQrjh2uyuhlcJ3Ck', 'ECkwlcGJiCk4W65ryW', 'W6hdHSkDASkP', 'fxxdLJyxWOpdOw7cVSkf', 's8oDhuumAmo1WQehpG', 'W5FdGmkCzW', 'keRcIur0', 'bWldH3nC', 'bSoAWOaWDdHpk2OG', 'WQFdH8kO', 'WRDuW6ldLJ4mWOFcICoSWP0', 'W7fSiWK', 'W7y4hb9ThSkgfmopba', 'W67dKce6B2WUvqHd', 'bSoDn8o0saVdStKMW60', 'kwFdVmkLzSkcW7a', 'iwNdPSkZoSovWRpdI3XL', 'WPBdLSkbF8oMW7RdTSosF8kU', 'sJxcJvna', 'WP3dNmkPWRmuBq', 'BhBdMWKNW5dcISk6e1i', 'AapdL8oCW4u', 'W7JdKdq1zq', 'WPZcICkPWR3cNa', 'hCkrW6HeW4NdVeFdIHldNW', 'W53dI8kgF8k4g8kwuXVcQq', 'i8kjca', 'cCoJlSo0feZcOhTLWQm', 'peddPSkcDq', 'i0RcO8o0ablcMmkoWO3cUq', "nf/cHa3cJW", 'e8krieNdOa', 'WQiarSo6DCorWQBcOSk6ta', 'WRHhz1xcO8ovW7j5WQ5G', "aK/cKZRcJq", 'WPxdUSksWPbU', "WQBdSt/cSt4abdvZbW", 'W4qAaq', 'jWFdIbCAWORdTv4PWP4', 'qWhdGmomW6C', 'iMhdVSkID8kv', 'WPBcJ1vWWRW', 'W7VcJSkpE8kkhrK', 'AtRcUCkEl8kpW57dJ1uI', 'BmkFbdu6', 'W509bWJdOSovf0CCW68', 'WRuuxXddHSovWOiOWQ3dIW', "BGVdIvWeW4ZcSZ/dRmo8", 'hupcJJm', 'mg7dT8kHo8oiW6hcMNa', "zdxcSSk/FmkuW7BcNd4M", 'W5ddR8oBFCkRWQJcOmoEECk4', 'W44Sgc7cMCoHW4DMWQ3cMq', 'W5VdGhOhW4zAW4anWRFcKq', 'dCokWP00DdG', 'DXBdQ8o6W5v1Cq', 'W4xdGSkFx8kG', 'WRddTIVdOtO', "CrJdSCo+W5u", 'mKxcN8oPbWBdNSotW6BdRa', 'W7RcR8o9WO1P', 'CWRdHmo7W5nXEG', 'WQFcLCkcA0a', 'nCkIl1pdJJXJW67dKCkZ', 'WRWcfqFcNW', "W6dcGmorWO9sW4u/BSoHW68", 'lCkwDCkLWPm', "dSovWQy/WRe", 'WO7dLMHCWQm', 'WP3dOmknWRuQ', 'W6ZdGSkCxCkk', "W5BdICkVWQ4tAG1zASo/", 'E8kvmHq5cCkKW60', 'btZdGfnK', "WQdcOCk/D0K", 'vCk0C8kKW4KaaCoEvSo3', "Fh/cHHWkWOpdSxxcK8kV", 'iKtdSSkupq', "C8oVW5VcJY/cMSozECooWPu", "W43cNHi5WRxdMhbAWQz+", 'EXxdQSoNW4q', 'bSowfmoHWQ9jrSkwaG', 'ECoPDWhdVa85W4hcGmka', 'WRG5WPmAWPBcOCkcz2lcKW', "WRPPWQe2WQRcH8kKWO/cOCkt", 'WRBcLmkMWR7cIa', 'WRldQYRdGa', 'WRrja2i', 'WQyWEHNdQCooCYnpWRS', 'cMhcOsRcJqzGAG', 'qYldGCoRdmoeWPFcRGSB', 'qYldH8oZg8otWRhcOaGC', 'WQjhbxneeZBdMI9f', 'gmoOgmolrG', 'wGmJWPNdTq', 'WRHABYlcTSk1WPC3W700', "bu/dN8kjkG", 'W7VcJSkpE8kkhrL5WQvn', 'smoQWOtcR8ovW4JdHmkUy8kt', 'W7Hza8k0', 'W5JdJmkdBG', "W5zJd2/cVa", 'WQ9haLKBtfFcNMWv', 'W48jgbLj', 'zGpcJf1C', 'WP4xWOtcMhC', 'WR48WOxcJG', "Aq3dOmo7W4H+CmorW4bT", 'y2FdOx49', 'fmowW4zGkwOrzdX0', 'emogWP05', 'kColE1CkfCoHW5Ohwa', 'WPD4WO0b', 'mSkdaCoXi8kKW6BcMNNdJa', 'W7xcJCkoE8kBha', 'fmowWPWLys5yzdj4', 'C2tcUY0NWQNdSxxcK8kV', 'WRpdK1KSWPK', 'WPpdU8k0WQ1I', 'WOZcJLDHWRK', 'yMtdV0WY', 'W7BdLSkgxSk9', 'W4uAgXfa', "gK/cPfn8", 'BrJdRmoIdq', 'W647lsLA', 'W7r5i1JcUSovqrzsWRS', 'W58MicjT', 'W4uugI59', 'm3xdSmkRaCosW6tcKwTN', "W6xcTd/cRIfErr1ldG", "W4/cGSkgqmkt", 'WR5vWRuAWO8', "BJhcO8oLcCkRWO/dNYGI", 'W6BcJSk7xmku', 'iI3dUgi', 'hKpcLa', 'CZOCoCo1', 'cCoDWPOJDW', 'wcyFbmoK', "WQLNgYtcMSo7W5zWW7/cJW", 'iCoeW43cKumYC8k9rIq', "c2/cPdVcTbz8Ca", 'W4nIdh7cPq', 'W799pWJdOmokqWK0W4y', 'uL3cNMKMW63cLSoYcCol', 'W7Oigbj9', 'pMHllCooW5WYWOHkdG', 'qJGqWPZdNmkWl8oGhSkH', 'W7bSnL3cUG', 'WRGSWPRcMa', "vCoJWO/dVfy", 'W70eW4JdIZ4CWPZcPmogWP0', 'WQhdNCkIWRiu', "WPVdI8kUWRmuBb1iD8o+", 'W4xdOCkfACkx', 'WPGNjXlcHW', 'qmkmW5fSoavGBvz2', 'tmktW51Pnh5YbKDP', 'W4VcGSktWQjIWRldHxWqW6G', "qt7dM8oZgCoLWP/cTGi", 'W4OufWbEAKVdK8oGWRm', 'W43cH0FdU2G', 'W4hcIw95WRGBWO5oW7ldRG', 'emoWWQi9EW', 'W4BcKWftW53cHeeDWPG7WOi', 'WQrjh2iEtwVcGgyx', 'WQlcHhzLlsLpffeF', "gmoNCSkJdu/cVg17WRm", 'ixvlvSkZW50UWPD6qq', 'b8kfg8ooeq', 'W55UkfVcIq', 'WPNdOtNdJrOZW6dcIeq', 'jXlcRW1aW57cLID9W5S', "WP/dJfWrWPZcLfKEWOiU", 'zSkjWOZdHqPHnSotu0q', 'hSoNnSo0xqZdTr0OW7e', 'pSoAWPyzWOe', "ua/cVurP", 'W59BW67dLrBdPSk5qvrP', 'W6NcS3xdJNWxfsDKqG', 'WOOiWQ3cNvpcOSoyvL4', "W60yW61+W44", "W5aYmcNdGmkcWQG+W7Wk", 'W4CnlWZdTCkRWPK1W6e0', 'ktdcJvfYWOtcOSohw2u', 'W7pcNCocW6WJW4WRhmo2W6e', 'WOxcHmkSBx4', 'W7NdSCovW7FcOWRcL2OWAa', "e8ohWO8/EZTIj38I", 'xSklWPRdNW', 'W5W4qW', 'W59CbSkVeG', 'pCksAmkYWOq2hL9U', 'pMHllCooW5WYWOLkdG', 'h8o2p8oJsaBdOcHPWRW', 'W48OW5bYW4G', 'BSoRWOS', 'DuRdV1uwWOBdVG', "qmkIACkKef/dNW8dWQ0", 'W5OGea98', 'WPTlqvGmnbBcJ8kPW6e', 'WP3dGxWtWRa', 'W6ZdG8kkWQvLWOJdMgy', 'W5OEdq', 'f8otWR0EWPFcQa', 'WQddVJxdIG0', 'W4ldMCkpWRrNWOdcLJO', 'e0hdGIylWOJdMmoYsmol', "pd7cIM/dNum2jCkiha", "Amk7ju/dLcz1W6JdHmkK", 'k8ouDKXCqSoOWQexjq', 'r1xcIMBcU1jtpSk4nG', "iCoeW4xdTK1/nmkugZ0", 'nCk5j0q', 'W7NdGsyNCG', 'l8k4lKtdNX12', 'WROzWQtcKfxcSG', 'W4xdUmkWWO1P', 'W6btFgJcKSo4W5H5WQ5G', 'k2tcTcKxWOpcIGJcMSou', "AHmJWQ/dHW", 'WQm3WPVcGNTEW5pdKmk8W5G', 'iaFdV2rR', 'W77cLCo9WQX3Da', 'EKVcOmoeWRuatCk2j8o0', 'WRFcLs49CN0Fsqrw', 'ieJcN35p', 's8oZWORdKKm', "WQxcSLmMW5/cJxtcJbi8", 'yWNcKLn9WPxcPCkiu20', 'WPHYWQWgWRdcMCoysxtcNW', 'W5LVo1ZcQ8kzg0SaW7y', 'zCkbWOhdLbD3', 'CSoKEbhcKgfyW5FdPCkTBt8', 'W4uTgWL1', 'W4z3gmkQnG', 'W7NdGsiHAgCnuWzD', 'WQddMSoSaSoEweSTW7WD', 'WP0MgY4', "WQVdShpcNNjDWOhdNa/dTq", 'W5RdJSktWQf6WONdQZixW7a', 'WQbhbxm', 'qYKoWQldN8k8jmomcCk2', 'WOVcR8kuCvhdTYvlWPpcSa', 'WPhdOgrzWPddHdddLe9x', 'a8oSkCoLwq3dPdq5W6y', 'F1ZcQmkyuSkBWQxcLMzX', 'tYhdH8oZb8kFW43dGw1E', 'ECoxm8kbW5G0cfr5AG', 'WOFcKM5N', 'W7RcKSk0t8kC', 'W6SwlGBdVq', 'W7rBrfrfA1tdI8oKWQ8', 'mhBcKCoemq', 'W6NdICkoWQ9LWOZdNxCh', 'WRSiWRRcKetcR8o3uuf7', "jW/cRXLxW4xcUW11WRW", 'hSoEWOmsWRC', 'DmklAHZcH2iRWPFcUSo9', 'WPHfgq', "yCoRWO/dHhZdGSkuuCo0", 'WRVdHSkPW744lCk2W50GW7S', 'dZxdVNCnW5ddSt7dNCoM', 'r8kPWQldVZy', "WPRdM8kfu8o/W6FdTCouy8kK", "FXFdPSoMW5r+D8oaW5nT", 'C8kAmGuO', 'W4Cjja3dVCk8WRa8W6iW', 'u8oxo8oMW5z5rXOQnG', "WQ/dRCkBuCoV", 'W57cGWfwW4tdKwqOWRfW', 'rSokWOddNG1Hl8kFgIa', 'qX7cQhvl', 'a8oCdCoWWOHutSkqfmki', 'cmo3n8o8rvBcQ0bdWQm', 'vtZdLCoXb8of', 'cK3cOaJcSG', 'W7xcJCks', 'kNVdPSkZymktW7VcJtvL', 'AXmng8ou', 'WPvQhwu6', 'WRRcUSkAFgm', "fSk+xmkNWOq", 'kmoZnSoMWPS', 'W6dcUhpdPxSr', 'jaldSCojW7i', 'W7hdQmk6ySkT', 'lHddTmolW5rVaSoGySkM', 'WPynWOlcR3i', 'W7nAgCoG', 'tZKbWPZdHSk2ySklt8oI', 'W6XMW5FdIZ53W7RcGmkxWOW', "WQ/cMenSWRy", 'n8kvESk0', 'AmkkWO7dNrz2pSkj', 'gSkpaSoJoG', 'WOqVWOxcOuW', 'iSoJWPu9WPe', 'W41IlhhcMG', 'WQORWOFcMW', 'WPhcLxjI', 'mLtcNCoOcGFcQmklWPNcGW', 'WQ81WPS', 'chNcUsRcKJD7BmoR', 'W6TSlKVcT8k0eKu', 'WO3dP2jG', "W6JcKSoOWRb7Amk+WQuXWQS", 'oSkBAmkiWPC0aG', 'W7xdJCksWQnT', 'tSkHWOJdTWe', 'gYhdMg94', 'BdlcOhD0', "hu/cGxHLW7y", 'WRvph2uyq2NcJ2zf', 'WRW4WPRcGNbjW5u', 'WOmMgdJcGmoTW5b8W6pcIa', 'W6VcK8o6WRy', 'W6WtnaJcSCoJW7vtWQ5G', 'jNxdTSkXhCosW7ZcJ20', 'qNFdN1m1', 'dba5W5tdQCoIf8kFqmoZ', 'nM3dS8kID8opWRpdJwzP', 'WPH5e3KnugpcV2an', 'tmozb8k4z07dJw10WQm', 'W5THh8kZkq', 'WPnYWPasWOZcUG', 'fetcMw5Y', 'W47cJ8oMkSkRWRxcOmkxn8oR', 'iLJcU8kYWRiQtCk2j8o0', 'pmoeW53cIM4yE8oAsgK', 'WPhdH8kAvSob', 'WPxdISkMWQKhDHW', 'o2ldRCkXe8osW6RcKvDS', 'W5ldHLWhWOxcMe4zW5i', 'WRhdNSkuWOTSWP4bp8oiWQO', 'vcxdMSo1hCoxWPJcRWjE', 'ASoKWOJdHhhdICkAr8omW58', "vt/dLCkVuSk7W7ZdReDE", 'tmkIESkXxX7dOYHPWRi', 'jf7dGmkbjW', "FSkBkXidj8k/", 'kq3cUr9bW4dcJmohbYK', 'WQRcLwDZku5qsGHD', 'WPb1WPqQWPdcT8keBwdcMW', 'ydSie8omWPyBW5X2wG', 'W6ngkL3cMG', 'lCkysmkYWOqWcv0', "W6/cLxHSpcKLEK5O", 'omkcdmoUiSkYW7BcIG', 'yLVdN1auWO7dVKK', 'ju7cU8oujG', 'Cmo6WPRdH37dLa', 'W6WWWOBcHwPnW4NdISkPW6i', 'W74tnrBdRa', 'cSoWnCo8FXFdSt8kW6W', 'd8okhSoRWPTfcmofE8oD', 'qtGd', 'EI3dTSkMsuldL8oiW4VcHq', "WQ/dGSkHDSoZ", 'WPhdJNuMWOi', 'W6fEa8k8ma', 'WOKxjevcqCk0wSkbua', 'aupcLa', 'W4pdJCkm', 'C8kuWOZdGWz8lW', 'WQBcLmowCvBcPtvWWPxcSq', 'rSokWOddNG1Hl8kFgJ0', 'WQBcRwrjWR4', 'WOyrWQtcTu8', 'B8krnr48zSkUW7fwBW', 'C07dOvOs', 'WQLmA0xcQCoQW4X1WQ4p', 'tbNdOmoqoq', 'WQn3tuxcUmo4W5H5WQ4J', 'W7NcImoBWRLR', 'WRxcHmktnGhcThC0W5ddQq', 'h0JcMxPJW6y', 'kxBdHb5DW57cVmkivhO', 'WQ3dSCklWR5b', 'AmoVWOVdHa', 'qSoqWPhdPx4', 'WOFdTJ7dRX0', 'WPpdGCk5', 'evJdM8kpW6uQumk2BSk6', 'zcJcSSo2mSohWQldLrDR', 'hLpcN8oUdaBcPmknWPO', 'iKVcJ8kMhbhcKSoiWQJcRG', 'fW3dLci7WQlcO8kpqCkW', "WPRdN8kyamo+W6BdPCkxvmkd", 'W7P1W4JcUvXMWONdHSkUW5C', 'WRqjWQO', 'BZWax8kOW7HJWPK3dG', 'W4jIpCkpaq', "gmkIW6ZcHComW5VdNSkUomk+", 'W7CunbhdVCkQWOWGW74L', 'W6GDW49fW6K', 'bLJcMxn1', "tmkXW5pcVSouW5FdNSk/kCkU", 'W6LVmhFcVCkAde0kW6K', 'WRSTm0BcRmkbh0CmW74', 'WOfPa2u6', 'rrRdRq', 'W4qAW7rvW5JdSSowiJddMG', 'i8o2Dr7cMNjlW4FcMCkg', 'W7FcLCkeimomtv0HW7Wm', "whddRvywWPFdV34+WPm", 'WPxdI8kUWRmuEXPy', 'WPX4WPagWOZcOmkdywtcLq', 'W6tdNSkZWQy', "WP/dOJFdLZS", 'wSoTWOddOCkpWP7cOCoTASo7', "eSk+k1xcHZD+W7/dNCkK", 'ohxcRgLU', 'FeRcJCk1WPGQtCk2j8o0', 'cMdcSsBcHWT6', 'ECoxo8kLWPCQaHOYkG', 'W7xcJSkpE8krfa4', 'cwBdQSk3g8odW6NcMwfS', 'amkDgmo3pq', 'W48sfXa', "AYFdGSkyw8o9WRxcOIG/", 'wCkLWPVdLba', "W7/cNCorW7qNWQTkm8otWQe", 'W4FdKCkuzCk6emkQvuNdSW', 'd8ondCoLWOPlrmkA', 'y8oDv8kUD8oNWQhdJIhcGW', 'W6OvmGVdVa', "W7/cI8okW5KfW4XeFSkCW68", 'BSkgWOFdRG59n8kEdtO', 'fwddUCkvwq', 'W7pdH8kBBSkS', 'j3tdKHaSW5xdHG1GW5S', 'EgRdTSkRaCosW6dcJxX7', 'l1xcMmoHdcdcLSkeWOFcIq', 'WQVdGCk6vCoxi1LqW7Wa', 'W7fzbmkPmmksW6pdRCoUBa', 'FXFdSCo7W4H1Ca', 'EspcL14', "oI7dQM/cIq19ASoKEa", "f0pcN29/", 'WRtdMmkbWQa', 'bMZcLmkMsCkwW5BdPcbq', "hSkSW5RcGSoMW5VdNSkUomk+", 'W7RdR8kasCkS', 'fmosWOW9Fq', 'h8ozWQm', 'WOT8i086', 'oblcR2iQW4ZdGb0aW5S', 'rclcVv98', "CCotumk/D8knW47dKfBcKW", "WROvWR3cGvpcTmoTw0v/", 'dSotamoGwq', 'WOvBseWCkqFdSmohWOS', 'WP7dHLmg', 'W79zbmkPmmkfW6tdUSoJCW', 'aLhcTd3cHqj6E8kTiG', 'W5NdNmkgBSk1eW', 'wmkrfWmC', "rZ/dPxBdMKn1e8kpnG", "fw/dP3VdIvGdfmkLnG", 'WRlcMCkyEG', 'lCo5tfDXAmoOWQexjq', 'W4BdHSk0W74VomkLWPCeWRy', 'W67dRCkrBmks', 'WQrXwvqmjqFcN8oMWQa', 'tmo2AGhcH3iWWRRcKmo1', 'W7xcP8oZWP9U', 'W4tdKmkgyW', 'WPhdQmkQWQWj', 'W5xcNCorW7qVW4XeFSkCW6C', 'zmk7WO7dGWzZl8kFqhG', 'WQhcLSkYWQxcLq', 'W7dcUgZdUhWpaa', 'lSkFyG', 'W6D9ld83efRdJd5f', 'WRr1WPeIWPm', 'W6ddMmkiWQfRWOBdK3y', 'uG3dIZ0MW6hcMCkHdCol', "WPVdLXTzW6xdUWTkW5T+", 'DSkOWRVdUIi', 'hZNdJ8o2l8ohWRldHL1p', 'kf7dKCkYEa', 'W7tdJCowlGVcIeS4W5ddUa', 'WPGTWRlcO1y', 'kmoNWQ8rWQu', 'D3ZcISkFWPGQtCk2j8o0', 'WPVdQ8obkmoEweSTWR9C', 'fSkqqSkjW6maaCoEvSo3', 'hCkly3RcLG8WWQFcKmoL', "CvhdQCorW4T+dmo4zmkX", 'W57cOI4MW4lcJwdcMWf2', "WR/dSCkivmoG", 'kCkLoGJcNf8AWRRcKmo9', 'zcJcUSkrpmkkW63cKYmX', "r8koW6PBWQ/cGtxdJaVdMq", 'W7uuiqZdV8kWWOW', "WPtdM8kfu8o/W7ddSSoEECk4", 'W6xcKCknyCkk', 'wmk7WQBcKc3cH8ojgCkEWRy', 'etFdQh5pW4FcGJddH8oo', 'WPb1WPqQWPRcS8kcDNZcNW', 'j8kna8o3mG', 'WRajWOhcKW', 'vdxdUCojca', 'DSkfWPVdUWK', "gXtdTCo+W5m", 'WOdcLwDZisLEb0CB', "W7/cJmoeW6iJW4WRhmo2W6e", 'WPFdHNPVWPS', 'n2NdSCkKra', 'WPBdPmkDWOfD', 'e3JcPsNcQG', 's8o6WOpdT8kQ', 'WPdcT8kYWRlcRG', 'W6PsouFcSCkbdeydW7C', 'WPtdNCkf', 'W6dcO37dVhS', 'WP3dVSk1W7FdHxFdL19Zqq', "aL/cHgLPW7BcGCkIdq", 'kmkAxmknWP0', 'WPZdGCobkmoEweTUWR1o', 'WOZdHCkUWQmfAHfBzG', 'WPNcKCkkWRJcMsxdMMjJxq', 'Cmo6AHlcKx4WW5xdSSkx', 'W4xcHmkBWP1jrvP2i8kS', 'W41vh8kPmmkpW7VdICoVzG', 'fmoCWR0LAJDtiW', 'DXBdQ8o6W5v1CComW49W', 'BSoLWPxdG2tdGSkls8o9W48', "WPhdHSkPW744lCk+WROUWRy", "WQ/dMmorW6SWW5febCoHW6y", 'fSosWRjBW4VdOYhcT2ddMq', 'W57dJuXmW4ZdGIldKxzw', 'W6zZjSk9dq', 'qYldK8oVb8ot', 'e23dKcD3WOpdRhxcG8k0', 'BSkbnbS0', 'W7qTW7vJW7JdIq', 'WQNcNSonW7qKW43cHYDjWRm', "trldLJ1DW5/dKCkjwCk2", "FaddI8k3uM/dVCoiW4VdHG", 'CZam', 'WQrtaMidt0lcGMqm', 'W7BdGSos', 'DaRdSCoSW5nKESovW4qJ', 'W55Vp3lcTq', 'fmoEWRqqWOFdVgJdV17cPa', "kwBdTmk/DCkpW7y", 'W7NcJ8oNWRO', 'W40qfXBdTa', 'sCoOW54mogmDlwm0', 'W6fcd8kOmmkzW6BdQ8k6pa', "WPFcGw1/WQK", 'WRBdJCk5WPXh', 'omo7k8opWOG', 'WR7cK8obW6btWRdcN0LnW4i', 'WPVdRhP0WPS', 'W7tdMmorWRDHWOm', "WRZdIcbPWOddHX/dNvTE", 'bMZcLmkUlSkyWPVcOWKn', 'W70imXZdQmk9W5HMWRf9', 'W604W7zcW5G', 'WQBcLCkxALxcRxiQW4ddTa', 'W5lcNHilWOBcGL8lWPu9', 'WQpdJtNdLXO2W5xcMqFdPW', 'W5S4abX8u8owrCkbua', 'jmoFdmogWPK', 'WOvBnJzMk0JdNCoVWP4', 'W7zec8kT', 'W7VdOmkqtCk7', "WQBdSt/cSt5dtqe4sG", 'WOPJW4q', 'eWldO8oxW51UjCoZA8kK', 'W7dcK8kazCkB', 'emokWPSqvG', 'WPJdQ2bI', "jW/cRXLxW4xcS2PZWPy", "W5lcNHjuW5pdVcfkW5T+", 'WQ3dMmkDWRfUWP8boG', 'WRjifxmEvMBcGgy', 'zINdL8kxqSkiWRtdHe5M', 'WOT2WPawWP3cJCkvChxcMW', "WRi3ELpdKSo/xGLpWRS", 'W6TSiG', "uG3dG1OOW6/cL8k8g8kF", 'nSouzLCYkCk7W6qxnW', 'mSknhmoND8oJWQpdGY3dMa', 'gdldUmo3W7y', "kgRcRLb+", 'WQaxWQS', 'WQ44WPZcGNjjW4JdN8kPW48', 'AWOAa8o2WOyDW5b4qa', 'WPW2WOxcK2q', 'W4pdPWmMrW', 'WQG8WPJcGNy', 'c8oxhCoTWODh', 'jGRdUNPS', 'W583WP0uWOVcT8owoYxdGa', 'WPJdLKmlWR4', 'W6rSlLZcS8kqe1Oi', 'WOZdGCkYWRqzBG0lpmkU', "BZ/cILjtWP7cTCkcqG", 'dvRcSmkEqmo7WQxdGIGY', 'WOaxste5tSoje8osaW', 'pCotdCoMBq', 'j03dO1yuWO7dQa0PWPm', "umo2W7KwWPVcSM/dO17dTG", 'WQm7WOlcQxXnW5pdNCkGW5G', "WP/dRg1JW4lcKN/cHGLQ", 'WRv7k2VdICkOWPiUWOddSq', "W47dRSk2W65NWO/dNe0DW74", 'c8o8WPqxWRu', 'aCoBe8oBWOvptSkgx8oS', 'WOZcJ295WRGFWPjE', 'qYKoWQldKmkYpSoleCk2', 'WOLSwq94amkmwSkjra', 'nvNcJmoJ', 'WRGuWQdcHKlcO8oR', "WRqxWQ/cH1S", 'WOBdGLWbWO0', 'W7pcKSkvESkraq', "nLNdISolW6S+BmohW4TC", 'WRRcNCkgWRv2W40', 'W7tcThpdTh8qaci', 'WPNdOxmBWQdcU1O9WOii', 'WRyxWR0', 'EIlcGurUWONcOCkcgJy', 'ySkwWOJdKbD3C8olwxG', 'WPRdI8kHWRietrXoCW', 'hSoeWRKyWOdcTxpdUq', 'W5ZcNfhdNLm', 'mSkna8oU', 'WPmQWOVcNNTi', 'WQhdKXJdHYK', 'WRNcVCkVC2O', 'qJGqWPJdGmkNm8opgmoZ', 'CmoPWONdN3ZdI8k7tCoYW44', "bg/cPcRdGfy8jmkLBq", 'haNcP8k0neldISoiW5VdNq', 'WOS7os0', 'ehZdImkdwG', "WOJcJNj+WQ0uWOniW4JdKG", 'BMtcQZ5TWO3cVdRdNCo8', 'WOX7WPCwWP0', 'mSknhmoND8oJWQxdGY3dMa', 'W6RcThhdTMOl', "W4/dNY47W4lcNxVcTImr", 'WRddIHNdLHq', 'WRS3W4y', 'W6WYhrhdIG', 'WOOoWR4', 'WP5lmLWv', 'WRddN8kBWOT4WOmjp8osWQS', 'EmkhmHiJpmkXW7fsjq', 'WRtcRgfKWOJdSIBdKKDq', 'iYVdPwvEW4BcOW', 'WQhcHmk7W65LWOldMgelW7O', 'WORdMmkcq8oU', 'mSkjmmoHjCkZW7lcJwJcIW', 'W7pdGCoEn8odwdbqW7vM', "W4/cUIiMW5hcLwZcM2zZ", 'patdS8ox', 'c8owWP4L', 'iCoQWQWCEG', "mCkRaCkHyv/cRw16WRS", 'dgTeW53cKSoZASkFvCku', 'WQ7cKCkVv2e', 'lghcUqZcRW', 'W63dHCkkWQu', 'WPhcOSkGswq', 'aSoXlSo0tGVdQt0SWQm', 'aN3dUq', 'xG3cPf9mWQZcL8kWaSk0', 'W4RdPmkvWOfg', 'W5lcT8orW7qVW4XeFSkCW68', 'auJcIg9JW7y', 'WQ5iaMintgtcIvWg', 'CvhdM8oIWPfrxmolj8oP', 'wWyGemoI', 'jdRdI8oZW50', "WOz3WOFcLhrZW5FdImk+W44", 'W6NcV2ZdPxSrdcHLuW', 'WORdKmk5WRafpLCupSkX', 'hLxcJa', 'W4ObhaLo', 'gCobWQCxWO0', 'f2lcSCo2kW', 'qZRdKCo0ea', 'oJhdUxHz', 'WRvfWRSAWPK', 'WPbWWPKCWOZdU8ondXRdMG', 'ks7dO8onW51RgCoZl8oM', 'gCofWRjtW4BdQsRcUXVcTq', 'W5ZdGdeXW4fWW4anWRFcKq', 'AvZdU1WfWOZdTv4PWPO', 'W4OJfWPWaCke', 'r8o4WOZdQG', 'WQypWQVcH0lcV8oPrXuL', 'W7FdJCkqWRvT', "bw/cUYpcJWXGDSoGFW", 'W5dcLCoXW7rmpLKEnCk9', "a8oYp8o/vrhdTWeGW60", 'W6hdJc8jvq', 'WPCeW4hcRsXXWOFcLmoSWO0', 'AclcGr4OW4hdP8olgJO', 'W4vNfeZcQa', 'WP5yWPOqWP4', "aCkQW5FcUCoaW5VdI8k+nmk+", 'WQWzlYBcSW', "cw/cUYBcJHD8CCkSlq", 'W7Swnsvq', 'WRVdOwmsWOu', 'W4KxfbFdKq', "W6H+lK3cRCkbb1KkWRS", 'wmofWRyqWPhdVgJdV17cPa', 'mu7cQNHm', 'W5NcS8kLyCkM', "bg/cImoXpG", 'W5JdV8kDW6K7lJulpSkX', 'WOZcJ295WRGFWPjeW7NdGG', "aCk+auxdQa", "WO/dLq7dPIW", 'WQRcLwDZise5cqPC', 'WQJdTZFdNa', 'zcJcSSo2mSkeW6pcJJvL', 'nxBcNCoujW', 'p8kwxSkvWPm', 'W4uLdWK', 'lKpcK8oO', 'n8owWPGRtG', 'EX3dOq', 'uI3dMSoLdmoPWPxcVGiF', "WPFcIGLVW6ldKqTkW5T+", 'rspdMSoGamoeWPVcQqm', 'WOLZrLe5kmk0u8oNqG', 'W6ConJGbtwNcN3Ca', "WQNdSdddUGSYW4/cJ0BcUG", "WRjFbmkPmmkbW7JdRCo/xa", 'CdFcH39y', 'pmkjhCoLmSkY', 'W4NdKta6W6bAW5eFWQFcNq', 'AcyQbmoHWPqq', "oLNcPCkHW6y+BSokW49W", "qSoVnCo/tWVdTt89W7O", 'mSkahmomnSk7W7y', 'nCkjhmo2jCk5W6RcNgK', 'WRBcKCkcALZdOcXRWPC', "mKxdNmk+uvJdL8ktW6BdRa", "WOeNbt/cKCo6W5zSW73cNG", 'W7vBW67dLr7cGCk3t1P0', 'ohtdRCkKhmofW6ddNZC9', 'zmkkWPNdGXO', 'W6JdVZxdIWWJW4tcJLVcRa', 'W7COW7K', 'W6PfgwdcMW', 'W7vBW67dLrBdPSk5aH1D', 'WPFdK8kUWQus', 'cMhcUtZcLaz8ASo8zG', 'W50nlt52', 'W5pcG1ZdLfO', 'jMldJCkLESkEW7dcMd5S', 'p17cILX1', 'wSo2WPpdUW', 'WRRdPmkxWQ1f', 'meBcGdNcKW', 'W57dNZWQWPCNW4L2WQFdRa', 'WRldHmkxWR1OWOqq', 'W6bvuq', 'W6bKneW', "amk/AmkfWQC", 'avNcJM9VW6ZcI8kMcCkf', 'tadcT3Tm', 'pSoMiSocuG', 'pSoBW5dcKtHpCSkHwHq', 'p8kpcSkIAmoPWQ7dMvBdVG', 'rmoGWPldQSkaWP0', 'WRNcRgnPWOZdNJtdNLTy', "W4/cG2K/W4hcQHK3W5TJ", 'yCoNWP7dNMxdHmkwtCoHW5G', 'WQZdICkuWQz7WPuuo8kCW7a', 'f8oeWQm9WOBcVxhdSKG', 'qspcPu9l', 'WOLSwuW5u8ojwSkunW', "fmovWQuAWP/cUtxcRdBcJG", 'W4vAEKxcQmoJW7vtWQ5G', 'WQlcNCkjWPJcJW', 'WP3dLSk0WRKqE0GupmkS', 'WOtcJNv4WRu', 'W7xcLCo9WRTQzmoWW6L6W7C', 'WQFcUSkCWRBcMZZdM1u', 'fmohWQuYqG', 'W4FdKCkqECkTdmkfuXVcQq', "WQypWQ/cM1xcO8ogquD/", 'dSoJlSoLubRdPZ8GW7C', 'fCoFWResWPpcTgG', 'W5JcJmkhW64nCqzyD8o0', 'W5tcPNxdKgG', 'W6DJou3dV8okqrrpW4a', 'WPb0pKa9', 'W77dJdC2itzbgKDO', 'WOioWPNcGM8', 'W7uvkrBdRmk9WOOTW7CW', 'E8o2FHlcNf8AWRRcKmo9', 'zSo9WO3dPeK', 'W6nSlK3dT8oetHfdWRS', 'nSkvCCkzWPq4e05MEW', 'W4hdLtqXW4fWW4anWRFcKq', 'ECoijmo7W5ycoHnrla', 'kxBdHby6W5ddUCkGfgq', 'W5JdHmkgF8knamkhwa', 'hLpcN8oUdaBcTCkr', 'W5pcJ8oGWRPD', 'W7azpsJdGG', 'qttcVf59', "W6/dOmorW6KVW5HFu8k2W68", 'W4GUW4rvWOpdN8o8iJddMG', 'dmofnmkWcSo2WQ7dMtNcLq', "gmo3kmo/", 'DXJdHSozW4m', "W6CgutzmaI/cQY0i", 'hLpcN8oUday', 'ySo5WP7cKcJcKmodaSoOWRe', 'W6PopCkomW', 'BJ7cKa', 'CtblsCkSW4HjW6jkbW', "W4NcMmolB8ojW5/cRSoyDCkH", 'W6SQW4JcPvf5W6VcHW', 'hmoyWRKC', 'ouhdQCkeha', 'W44imJ1p', 'pmkdaCoXi8kZW6hcJxtdKW', 'nM3dS8kID8opWRddI2zP', 'W6BdKcK0Dwe', 'zgxdVCkKDW', 'W5BdRCkZASkS', 'WP4SvNtdI8k1WOjoW5ddKG', 'tvNdPviK', "ySo+WP7cMchcN8ojdSkZWOu", 'cCouWRqvxG', 'FbRdS8oCW6i', "WQBcS3pdVN0irtj+qG", 'm2BdRCkGwSkEWQNdNZKZ', 'W4VcKX5cWQFcS2feWPq8', 'BbJdRSomW4XRa8o1ySkl', 'W48Hfd1C', 'yCk4ksaa', 'yIayaSo8WPGSW5DZwG', 'qc4kWPRdHSk7', 'W6mdfrne', 'W6Cuss1HkcFdJcnf', "WOhcU8k/C0C", 'W6ZcJN7dOMOkaIT3uW', 'ybRdT8oNka', 'D8oLWQJdHgldJSkxrq', 'p8ogWP4', "g8k/c8opeG", 'W6O4mIrB', 'B8oJWOJdHa', 'tdlcTxfC', 'W7rdbmk5mmkjW7NdOa', 'W4yRocry', 'WOVdQCkHWPeu', 'nKNcImoU', 'qX3cRv1w', 'emkzDmktWPi', 'W6NdMIKNC2yssWjb', 'lX3dSW', 'kwVdHayHW73dM8ohgIK', 'nSouzLD5d8oMW6XyAW', 'W4NcKSkcymkBhcP5WRC', 'WRVdOmkswCog', 'W6TSkG', 'WONcKLHEWOm', 'W7vBW67dNxhdQmo0tvTP', "W78NW6z/W6tdGG", "nSk+k1ldGMz5W7tdHmkV", 'WQGuWQeRWQRcL8k3W4xcHCoE', 'WRHAz0xcUmoWWR93W6mV', 'WRBdMKCkWOK', 'WPpdKCkZWRH8', 'iSkycSoWi8kVW6pcNc3cNa', 'W7m0htPF', 'W7xcRSoGW6bapKGli8kX', 'sHOGfCoB', 'f8kfcmoQiW', "WPH/t0a5pmkRmmkshW", 'i8kqs8kjWQ8', 'CctcSSkzumkTWQZcKJiV', "WQq6WR/cNMdcV8oGwN9d", 'dComcSoWWOznDCkFbmkW', 'a8k9sSkXWPa', 'WPP1WPegWOVdU8ondXRdMG', 'WQhcJmoCW6aOW43cNLvrW7i', 'WRddN8kBWRfSWPG', 'eCocWPyjWOBcVwu', 'WQONz1JcUmoOW4nuWOrG', 'WPxdGCkYWQmzCWLt', 'i8kjaSo6', 'zmoeW5lcJL4YamkNqri', 'W4LpeaBcSmkxfhyBW74', "W7NcR3RdVIj+W7RdJxldTq", 'W5OPdq', 'rmkKWPBdN37dLmknr8oHW4G', "zhvusCkUW5uYW6q+Dq", 'WPtcHCovk8o5fSkurv7cTG', 'WOlcJhi', "r8koW6PBWQ/cGtxdJaRdMq", 'pGFdH3Pj', 'iwBdT8k7E8kcW7hdNtyS', 'ttmGimou', 'fmowW4zJlwGrzdX1', 'WQNdNmobu8kJuta8WOeD', 'nuxcJSoYeblcKSoiW5tdMq', 'cSoCcSoWWPTpwmkBeG', 'emouWRSlWPhcRM8', 'WQFdOIRdIqy', 'nNZdQ8kMD8ohWR3dGM1L', "nCkIk0/dHdDpW7NdGSk4", 'W7tdGmoneZRcPwe4W5ddUa', 'BXiGhmoz', "zZxcGryLW4/dRmohyvq", 'WRBdLwvpWRC', 'WORcOSkQWRVcIW', 'WRvdaNai', 'W6BdSGqWqG', "BH/dLJ9XWPlcJhxcJSkV", "bSkwAmkYWP8+cLT+DW", 'fmoyWQeE', 'o27dTW', 'eSouWR8XWOW', 'je7cN8oPhaZcG8knWPNcIa', 'gvRcSmoWmW', 'owxcVLjG', 'W5VdSslcSsXxxKSCbW', 'WQVdGCk6vCoxi1PqW7Wa', 'W51XtMFdLmk7WPO5WQ3cTa', 'f0pcPK50', 'W6pdMYe8', 'WO1JWOCfWP3dSSojps3dMG', 'W6vxW67cUNtcJmk3tvDW', 'FZZcLmopuSkgWQxdNYGI', "ySo+WO/dKxpdJmkCrG", 'W7RcQmkQs8k1', "WP47gt/cM8o8W5TLW6G", 'WRFdSCk7ESog', 'WPpdMSkJDCoe', 'sCkhjr80lmkkW7G', 'eSoCWOi0', 'A2ujWPldNmkGpSoAd8k6', 'jaJdQmouW58', 'xcFcUCoLuSkgWQxdNYGQ', "rSo7WQ/dVSk0", 'BHJdQ8oQW4q', 'W7RcImoQWRS4mSkHWQCUW40', "WR/cISkTWQ8oBrXoCCoL", 'm8oNWQypWQ0', 'WOtdIX3dTcy', "WRdcTmk/F3m", "W4hdGceQW6XAW4anWR/dTG", 'kCkcAmkU', 'WQxcU8kBWQpcLZRdTLHKuq', 'WRBdPZpcSs9tswzzzq', "qYKoWQldN8k8jSoBdSk+", "W4JcG0LVW6ldKqTkW5T+", 'W6tcHmkrzmkFgW4', 'WPtcMSoknSo5lSkOh2dcPa', 'zrCHamoP', 'WOhdL1CqWOhcN1GEWPOW', 'W7RcRCkWtSkO', 'nmo3WQ8dua', "kCk0ih7dHt5LW7/dR8k4", 'hmoGomooWQS', 'xKxdUKOG', 'WPrCchuP', 'WQpdVc7dLWy', 'DCoTrYVcH3iWWRRcKmo9', "WPmQWOVcNNTiW6xdHSk+W5m", 'eCoFWQmjWPS', 'W4iPab8', 'W71tFgJcKSo4W5H5WQ5G', 'Dtazh8o9WOyDW5H5tq', "W67dGSkpWRrTWP/dGMSpW7O", 'obdcSHKSWRJcSNzTWQy', 'b8oNiW', 'e8ouWQCpWQdcQw7dUq', "WO/cK3vRWQizWOvYW7tdGW", 'WOOiWQ3cNvpcOSolr0zU', 'pCk6lmoMpq', 'W57dTduJCW', 'W4FcM8o9W6a7q0fWmSom', "yL3cPGj6W6/cUW19W5S", 'eSk4pMxdVq', 'lMFdU8k4', 'W7OpkWNdVCkSWOS', 'W6ztgmkZkSktW6ldR8o0ya', 'DeddOLW', 'W7bulCk9aG', 'zu7dU00BWOddVf8YWO4', "W6/dJ8kzW6a3W5lcIZiKW4i", 'v8kjWQddSc4', 'a8oycq', 'WPPLWOOmWRZcT8kfywlcKW', 'pfRcKM1V', 'pCoaWR0IWP0', 'nCoBfSoLWPTeFmoEhSk4', 'C8oiWRBdQKy', 'W4hdNsfJWQijWPrmW7NdKG', 'aSovhCo2WOHlrmoxtCoA', 'WQFdI8k3WQ4', 'W6PKle0', 'B8kxWPNdLbfMiSkkdwK', 'W6i8ctddSa', 'iKpcPCoYWQWAi8kfWOeJ', 'W6NcG8oUWQT0BmoS', 'W7rSreXWhCkAdSoDhG', 'ECoglmo8W5yIAJaQpG', 'W5FcR8oyWPX0', 'FSkvnq', 'W6ZdG8ksWRn8WOJdHhSrW6W', 'W7K7W6r3W77dGSkKW7VcVSoj', 'WPtdINa6WQ8', 'W47dMquRAa', 'WPJdLCk3WPTR', 'W6O7W65IW6xdK8o1WRJdQG', 'WOqAW7rvW5JdSSowiJddMG', "kmkLpKtdLtT+W6NdHmk8", 'EWNdTCoLW5G', "WQVcT8koWR7cNZ/dIG", 'mSksyG', 'WQ7dOvz3WPm', 'bColWOCLxIXCkwG', 'de7dPSk8wa', 'WQhdOxT1WPBdGI3dVfXu', 'm8oXoCo5wrVdKJq', 'rHtcRMLnWQlcMmkZF1S', 'WQFdUdZdGcW', 'W5LpcmksbW', 'FdJcGfn8WPNcV8kcxG', 'leRcUslcMq', 'W7tcQ8kRn2VcTrW4W43dUa', 'WQVdSYldPaSJW4dcN0tcSa', "W5BdI8kIWQO/BafBBmo3", 'W74rcszg', "WPP+sua5qSoAtmkqua", 'uK7cINnOW63cJmoYcSko', 'WQmSWOtcKJ5cW4JdNCoSW5W', 'WOhdHKy', 'FshdPmoMW5q', 'l8kyD8kiWRW', 'mCoxW5VcJtdcL8ocl8kzWPW', 'wmkoWPJdGJq', 'WR8iWRVcLvy', 'frNcOK0BW77dSwJcK8oM', 'BZ3dImoyW6q', "j1NdNSouWOHlmCo4WOe+", 'W5hdPmkCB8ky', 'nmkoBmk0WP8TaKG', 'e8kKa1NdIq', 'W7mVW6bdW7S', 'WOdcJhiW', 'W6ddNmkEWPHz', 'W7xcLCo9WR92BSo7W4vTW6q', 'tZKbWPZdHSk2ySkntCoR', 'W77dUZmXDq', 'WPNdImkHWRinwX5oBCoL', 'WRVdMCk2W6m4vSodWRnvWQC', 'B8kbWOddIa', 'WP1zWOOSWRC', 'W58TfrL8aa', 'qmohWO86Fs0DmguI', 'W63cTgy', 'WOLerKKmxNRcLSoEW7m', 'BYyFf8o9WPymWPKOeq', 'W4ddQmkYWPPU', 'W4SkW7DZW6K', 'zmoIWO8', 'WRRcHwTZtKS0cqHr', 'WQqIWPRcO0q', "WO/cRCoFrqddMgeLW5dcSq", 'W54sdrW', "rmo4WO3cPSoxW7BdTmkUomk+", 'CSkDWQFdUWW', 'kc3dP2jpW5e', 'W4RcHSoramoWWPJcISkxn8oR', "WOCNbt/cLCoMW4fWW5lcMa", 'q8kUW4pdNGf4bmknaca', 'BNVcTcSkW7JcJhZdQmk9', 'W5WXW6bJW6G', "hSkXiM/dJG", 'W4aIdr52', 'mCkepetdHq', 'WQBcHmkpBLxcPx4NW43dUa', 'zcJcSSo2mSohWQldNxGc', 'WPWwldzraJpdMdHO', 'c8k1sSkjWOC', 'WOZdP29Q', 'W6BdS8oiW6ddG1RcTbeGfq', "kr/dPmowW5zT", 'WR8TWO3cHgPvW5FdJmoSWOi', 'W57cOI4MW4lcJwJdVaDC', 'wmkrW7DBW5tdVdZcTXpdGW', 'WRBdRSkeA8ozW7JcU8oGCCkX', 'WRddK8kcWQbQWP4nmmopWRS', 'BtOihCoGW5uDW5fYdG', 'WRtcRgfKWOJdSJpdI0bv', 'mgVdTSkQaa', 'ycCp', "rCozASomhelcShT/WRG", 'jKJcQSoGaq', 'WPpdJ1qqWOFcLKWdWO93', 'EmkvkXi', "WR7cV2nLWQ0iWOr+W7tdMq", 'WO0alI3cRa', 'wfZdRfesWOhdIeGPWRO', 'WRKsWR3cGq', 'WRJcLCkyEutdRq', "W7yjmWtdTSk7WP15WRf/", 'i8kKpLJdLZCWWQxcJ8oG', 'W7ekusfCdIFcO0eV', 'WRldVrldIGWJ', 'WQhcJmoCW6HpW4pdM30rW6W', 'WPBdPMX3WPi', 'W74wmdtdUW', 'DSozWOZdPx0', 'W50ocXO', 'W4mPmt9NBMNdSSo0WQm', 'WPBcGxnK', 'W6PSoe3cSW', 'zIhcILnO', 'WPVdHvm3WPK', "iSo5W4a+EJrIlw4I", 'xCoSWPpdOCkF', 'mYFcPSo6t8kgW57cOIfz', 'nmk5ovxdGIbuW4G', 'BLZdJKSfWOtdOG', 'W4xcHmkBWP1jrvH2i8kS', 'W4FdQ8kEWRPd', 'isBdOuLhW4ZcVYBdH8oQ', 'WPL4WPirWP3cTG', "hSo2i8oHwv/cR3j0WQm", 'stmnWO7dHSkG', 'lZddRJ4EWPxdOxNcK8k5', 'DXFdO8oGW4z4DW', 'CSooWP7dGxW', 'WPVcUWhcLsj3WPZdNeBcUW', 'W50GW6bzW74', 'e3zeWQBdR8o6eCknimoZ', 'jXdcSarxWR7dHGqgW4S', "Dce/a8oHWPSMW49Yxa", 'mmkAESkHWPmgh0LPFW', 'oh3cTcFcHqDDE8oXqG', 'W5ZcSSoGWP9I', 'oSkAomoQnq', 'jwtdQ8kAh8ojW6VcJhXN', 'W54uvNBdLmoHW4XMW7NcMG', 'WPhdOgrJWOhdMq', 'W7tcHmoJWOfWBmoQW717W68', 'WQlcHSkbAfi', "cmk+p8o6gW", "jr/dS8olW5LKdSoZj8oR", "WRJdTfz/WQ8", 'W7NdGsy9yMWHrbvw', "W6/cNxvJosvEff8F", 'aCoSpmo4wXFdPa', 'W4OGcG', 'C0ZcOmoKW6uJnSkKwSo0', 'W4BdNmoCmmouF8ovfHVcTG', "cSoSWOm+DdPyn34M", 'W6vInfVcQ8khc0OBW7q', 'WPZdLCkFrCkJWQFcTCkho8oR', 'a2lcGqtcHW', 'jKZdRSkWiG', 'ou7cHNXR', 'amoRkCoL', 'hepdQSkhvG', 'WRXzcmkWg8kvW7JdQSoJBq', "W6T+o0tcSmkbvXjIWPe", 'pNtdQmkZoa', 'WQvjegqiCwtcHgyb', 'WQCUWOhcVvO', 'xCk8eZG3', 'tYqkWO7dHSkHp8oCcCk8', 'WORdI8kSWQu', "Cwi/W43dR8oZD8kFfmk9", 'WR7cHCovk8o5vCovfHVcVG', 'WR5Jm086', 'x8o4WO3dUSkjWOG', 'W7fxbmkFkSkeW4ldU8oOBq', 'W6ldG8ksWRr6WOldMN4AW60', 'E8kDka', 'WQ06WOBcKLO', 'pXtdTa', 'W7yaerFdQG', 'W4FdKCkuzCk6emovcqtcQW', 'o8oXd8oJAq', 'wGBdLaKQW4xcPG00WPu', 'BctcKe8', 'WOZdNCkWWQvaivCwi8ok', 'W7lcShhdSNS', "W5L+oudcUSkrmKWoW60", 'WORdM8kgrq', 'cwhdSmkRe8okW6pcJwDL', 'W4FdGmkzBq', 'C2ZdNvS6', 'W7tcVMRdV3O', 'W74tkXhdVCkQ', 'WP7dRMqnWR4', 'W6lcNCodW6W0W6fUFSkCW68', 'BMZdJdHhW4ZcVYBdH8oQ', 'W6PzpSkCda', 'W6WBkqBdVCkhWPSRW6SH', 'W4C5fa58aq', 'W7CyltRdR8kQWPeTW6SY', 'WReOfZNcM8oMWOSUWOddSq', 'r2FcUtZcLajGFCoGsq', 'WRBdK8kcWQbUWOiho8oJWQS', 'oLNcPCkPWOeWk8oIWO9U', 'W5dcL23dP38', 'WPxcHxHpWQK', 'WPTYWO0bWORcVCkpz3q', 'i23dPSk5E8kdWQVdHL1p', 'WPJdJ8kDWOXI', 'W4xdTW19BMSuEbfw', 'kmo9WOS0ta', 'uG3dIZ0MWQRcV8o8bCke', 'nqpcHNjOW7hcJmk3gSkF', "WPhdOgrzWOxdNY/dJf1q", 'sSo1WPldGCknWPBcMW', 'WPtdLCkt', 'sJ4kWP7dHSk6jCor', 'kxBdHbz5WPhcOSkcgJS', 'W5JdV8k6E8kA', 'rCozASomhelcScqNW7a', 'FmkGeJKt', 'a8obWOSWBdSvDJH3', 'WQi4WOxcKW', 'WPtdGCkUWQCuDG', 'sd7dNmormW', 'W6SknqZdRmk9WRm8W7C', 'dSogWOmZFsW', 'WOShEGJdV8ovxGLpWRS', 'bSkeEmkUWPm9jK5H', "W6/cG8o7WQPHFCo7WROXWQK", 'CZGhWPxdL8k3gmoAdSkN', 'W6i0WOFcMg1yW4ldM8k4W4q', 'W4NcNmoSW6btjKqltmot', 'W7pcK8kizSkndaPJWR9y', 'fmowWP0L', 'mMldV8kShmodW5xcJwDY', "BZ/cIej/WOi", 'W6xdMZqNzhSkxHDw', 'W7xdICkoWRrXWP3dKZjaWQa', 'qIOjWPJdVCk1', 'W57cOI4UWQxcGY3dLeDc', 'm3JcK8ofia', 'W6zjW7RdMrBdT8kQeHK6', 'WP14WOObWPFcVW', 'CLxdNemc', 'o8kPf8oUlG', 'dXFcHmoBsCklW5BdU1jf', 'W4CTfaK', 'C0ZcOmoKW6uJnSkMwSo0', "aIqgWPFdRCk+jCotgCkG", 'BMtcQZykW4dcScBdLSkV', 'dmomuSkIzCoJWQJdTaFcGW', "mh3dOmk4zSkoW6/cMci", 't8oJWO3dTf0', 'WRRdJ8kfWQ0', "tIe7WO/dM8kJjCozg8km", "W7y/gGr8f8k7h8opba", 'WO7cL29VWR4UWPvFW7NdGG', 'WPxdI8kUWRmuEXO', 'AZVdNCobW48', 'WPBdIMGWWPS', 'yWNcHLDUWOtcVCkcwgy', "W5NcGmoFg8kgWP/cOmkxn8oR", 'lX7dRSozW5fTgmoKzSk2', 'Amo9WOVdImklWQRcHmoOrq', 'nSkxjWq0AmoWWRmnjq', "ogpcTIhcHaXPn8k+gW", "ACoat8onfCkCWR3cLM/dIq", 'WOVdLmkHWRCowr1oCmoL', 'WRiElCo0kCkpW7JdVCoUzG', 'A2ujWPldNmkGpSoAd8kN', 'WPBdL8k0WQusAHfBzSkX', 'yxVcOCkVmLlcQSoiW5BdHG', 'W4OSutzmaIFdJcnf', "W7PFdSk+iCkoW5pdOmo/BG", 'W6BdNdqN', 'DXldGCoaW4u', "bw/cOZVcJazHAmoGza", 'W4eJcHG', 'WOtcQCkoWRdcIG', 'rmkZpXK0', 'WRG5WPmAWPBcOCkcz2lcJG', 'tmkIESk5E1hdVsiNW7a', 'bSksDCkL', "BZ/cLKvU", "mg3dOmk/FmkuW7BcNd4M", 'EIFdLSkhomkiW6RcNwjD', 'tmkgWQddOYa', 'DrFdH8kly0ldL8oiW4VdHG', 'zcJcSSo2mSohWQRcUN4O', 'WQddUZtdGq', 'BqxcJgDU', 'W41vaG', 'W4CRfqK', 'W47cLCkYACky', 'kNVdPSk3FmkeW6FcOJm3', 'W4XelLRcKq', "W7/cNCorWRDUWP8bFSknW7W", 'nwVdICkHha', 'oK3cVCkYWQWAi8kfWOeJ', 'fx7cTJ3cHq16', 'lv7cIhvJW6BcUSkR', 'WQVdLN9YWQe', "WQVcOmkoWR7cNZ/dIG", 'WORdU35J', 'CCkxySkiD8o2WRpdMs3cGW', 'WRtcRgfKWOJdSIpdK0bD', 'l1pcImoNbWhcKSk3WOJcLa', 'W6BdICki', 'wmkYmqiE', 'WPpdRwb1WPBdIdi', 'W4hcH8kBrSkSpJ1cWOP2', 'W6VdS8kqWQ9NWPxcNYLYWPu', 'x8ojWOZdJSkn', "tCkOWPNcIWf+oSksicC", 'a8oFWOeIFtO', 'W4VcMhRcHv93WOhdNeZcTa', 'WRaiWRRcH1NcVW', "W5L+oudcUSkrpfa", 'WRHAz0xcUmo4W5HXW4LU', 'sCkcW6fxW5tcK17dNrxdQW', "W7uNW7jIW6/dLCo4WRhdV8kB", 'W4ddKmkhzCoJ', 'hSoyWRatWOdcTxldSa', 'EmkVWPxdMJm', "W4/cTerfWORdMY7dUG", 'W4OPwvmMtSojiCoHwq', 'xbZdKSo0mW', 'WOizWPFcS3S', 'n8kZW4dcVrRcH8ozaSkZWPW', 'BSoRWOm', 'W6BcSNRcHv93WONcUWhcUa', 'iSkjgW', 'fKJcMgL0W63cGCk3da', 'kwFdVmkLzSkcW7dcIsK1', 'oSo7W7KuWPBcTKpdULldOW', 'bhxcOwTI', 'WQe4WPZcLxzjW5q', 'cCk5W4hcR8omW5pcUCkGDCoX', 'FaZdQ8oQW5v5Bmol', 'WOlcUCkCvMK', 'W5yBaHhdKW', "W64/W7nWW4a", 'DwRdIKaZ', 'kIhdU2jc', 'jb7dS8olW71KdG', 'lehcHa', 'wSo6WPpdKmkbWPtcKmo9Bmo7', 'W4pcNMVdPKK', 'WRVcGhnGnJfjvav4a2Ly', 'rIBcKf1R', 'WP3dSgTNWPBdIgJcIrGh', 'WRrsfgqyw3FcIsnA', "Bd/cOKfr", 'WPKrwve5rCoBqCkXEG', 'W6nJlLRcPG', 'WPtcHCovk8o5xCkYgfBdUq', 'bLtcM3GMWR3dH8oVsmkW', 'WQrkixic', 'W6TInfVcQ8kqdf0wW6S', 'C2FdHM0a', 'W43cNa9cWRpcRaiXW4Od', 'cCoXlSoJuWy', 'xIlcOuvV', 'WQXcFuxdO8ovW7j5WQ5G', 'usldTWdcOIKGCCoNFa', 'lSkFDmkQWPn5e094Ca', 'W6hdKdCN', 'WQ8wxmoVF8oTWPZcRSk6iW', "nCk/wmkoWRi", 'w8ojWOhdQNu', 'oLNcPCkPWOeWi8knW6yT', 'wGyLWQ3dPa', 'W4JdV2K8y2mHsWjE', "WPj5WPGCWP/cUSkc", 'jbldGSoiW5i', 'bgVdSCkZmq', 'm8oXoCo5wrVdGYG9W5C', 'W7KLW7i', 'o2BdOq', 'gmoCWOG3', 'zSoRAHBcK2KDWPdcKmo9', 'qIusfmoG', 'WQpcVmkCWQ7cTJBdK1rZ', "WQBdSt/cStyKsYT5sq", 'WQujWR7cOf8', 'W504fqL7hmkegmkvsW', 'WOddNSkz', 'C0ZcOmoKW6uJnSkNwSo0', 'DCkfWOpdKGy', "jW/cRXLxW4xcUWuAW5u", 'WQZcGunqWR8', 'WQ8apWFcSG', 'W67cOSkBBmkt', 'WQZdNSkKWRGk', 'WOaUgI4', 'dSkzq8ktWPi', 'CCort8kYBmoBWPNdMs3cGW', 'W6JdGSkAWQ8', 'W5ldJmkhEmkT', 'WQVcOCkgWQtcJdldJf9Hwa', 'W5uyb8k1kSktW6ldQ8oOAG', 'WORcISkcWP7cJq', 'd8odWR4pWP3cSNVdRW', 'bhFdS8kZhW', 'W77cUCoQWQX9BmoQW78MWQq', 'pCkjcCo2', "W7ldHda/qG", 'WQVcOCkgWQtcJdldJfHUrG', "W6BcP2lcN18SWQZdTG/dTq", 'W4ddGmkhySk3bSkbv1xdTq', 'WOZdO8kDvCoH', 'BCodWORdTh0', 'W7GBuu0Xc1ZdNL5f', 'W6BdV8oqW6ZdTv3cNHeGfq', 'pvVcRstcSG', 'W6BcSNRcJtH5W4ZcK0hcPG', 'W447arP6', 'qCodWPldNhG', 'nHFcOXLgW5FcRWf9WRq', 'WPtcR8k4WO7cNa', 'W4hdKZeWW6WbW60NWRFcKq', 'i8k7W4VcGdZcH8k2ymozWPi', 'W5ZdGfPxW6uHW5bWWRFcJa', 'BSkgWOFdRG59nCkjhcW', "tmkiW61BWO/dKrBcTXVcPa", 'W6ZdNcSNzhS', "g8o/erhdUNiTWRRcG8oR", "W6a/W495W54", 'WO3dISkKWRKoEZDoE8k4', 'WRxcJv8nWOBcGL8pWOK3', 'hupcMgLJW7dcKCk8g8kF', "W7/cQrjcW4JdKqTkWPG/", 'WQe6WRtcM3G', 'o2NdV8kSfCooW7e', 'WQ3dTYm', 'WQhcKCoCW7C5W5BcUXHFWR8', 'W7ncaCkzjCkq', 'W7pdHCksWRn8WOZdMheAWR8', 'ySkvpJqxbCk6W7rMAW', 'WPtcR8kqWRtcUW', 'EspdG8oO', 'W7f5WRpcQZD3WPxdTmoSWOa', 'WOibnqpcSa', 'WRyqWOdcLfy', 'baXkWPddNCk9oColgmkH', 'W7OgkKTfEtFcSsny', 'WRrdbwmC', 'sXZdILL4WPRcJSkjw3K', 'WRddN8kBWOTIWOmso8ouWQO', 'WQyYzrxdV8kUiWa0WQS', 'W6vaW4pdVXBdPSk5aHu6', 'wc4wWPtdNmkGpSoEe8kW', 'CJKcfCo2', 'WRFcMmkxBKtdOdm', 'cwRdPNLeW5dcPtddGCo7', 'W6xdMZqNzhSxsrrh', 'WQVdVttdLGSYW5pcIfBcPq', 'W4hcVtmMWRNdSgNdObLS', 'xcVdPmojma', 'fmoqWQqpWQdcQw7dUq', 'W6tdNSkvWQ57WPNdL3WCW7O', 'WQpcSMxcMKj3W7RcOqBcJG', "WOL/WOOEWPK", "yCoat8onfCkCWR3cLM/dIq", 'DuNcGtykWOpdSxxcK8kV', 'W4BdHSk0W74OnSktWPaUWRy', 'W4tcG8oNWR0', 'W6tcKCkaESkBfH8', "WP/dJCk0W6LBe2ili8kX", "tI/dJSolmW", 'WRldUZNdIrOWW4tcKGBdRG', 'dmoUW43cKumYE8oAsgK', 'jKhcGNzR', 'W7tcOx7dO3Sneq', 'W58ridPy', 'haNcP8k3neldISoiW5ZdLW', 'WPJdRwjIWOFdIq', 'WQFcG8kxnWVcIeS4W5ddUa', 'DYKlWPZdGmk3f8kFhSk7', 'df9lvSkZW5vjWPK3dG', 'jxBcI1G6WPhdSCkfvwG', 'fmosWOaYFq', 'i8kUkutdLYz5W7xdNG', 'WQ7dSZBdKq', 'WR3dQNudWPO', 'zuxdKfGeWPhdSKOWWPO', 'wmoqWRKFW5q', 'tmo4WPxdQSoeW4RdHSkIomkT', 'W7pcK8kvCCk6hrHUWQ5u', 'A0BdVe0', "W7XfhSk/nSkuW6/dVSo/iW", 'W6WcWRxdN0uCW7RcICoXWP0', 'W4tcHCoH', "Cmo+WONdMx7dGa", 'W6rSnKtcSmkAeeekW7i', 'W7xcLCotWQTW', 'fSompmoiWOi', 'W6tcVvFdVKC', 'CZWfbCoNWPqhW5PYdG', 'p8kzaSoGmSkK', "EZ/cIKvUWPhcV8kexYK", "EJRcJvv/", 'W6ZdNJuerG', 'AKddOuOdWOddQuqZWOG', 'W6xcO3RdSgOgtxqGcW', 'F8khbWuJkCkX', 't8oWWO3dU8kjWOK', 'Fh7cQ20NWQNdSxxcK8kV', 'W6hcKmkpzmkO', 'wMC2vSkUW5vzWOiAja', 'iMtdRCkggW', "kfpcN8o/mW", 'WRihwmoUAmoaW5NdJmoqlq', 'WP16WPSBWO3cSCkzBwlcNG', 'b8oko8oLWOvmtSkrga', 'WPxcGw9PWQLAW58sWQRcKq', 'o8kGsSk8WRW', 'WPddLL4oWO3cHvG', 'WPFdKx0e', 'sdVdRSoahq', 'W7NdGsiHDxaoqKCm', 'W53dGSkVt8kF', 'WP3cK8k9D3C', 'WO14WOSBWPW', 'WQdcLCoElWdcS204W4hdQq', 'pWxdPCop', 'W41fcCkYiCkeW4xdQ8oUqG', 'afNcKM1JWQldH8oTvCol', 'W4qJfX9TfSkBe8osaW', 'WO8LhZ3cKq', 'ia3dLgS6W43dSCkovhO', 'WOBdG0zHWO4', 'kmkJlKBdGJy', 'WRPPWQe2WQRcH8kSW6ddImoq', "W4Kgn8o6ECoaW7/dOmoPDW", 'W5RcNmkHW6a1W43dN3WmW6S', 'WOOuWRNcMW', 'fSkMW5ZcR8k3WQBdL8ovkCod', 'WQ7cOCkBWQm', 'W71vpSkBaW', 'WOJdSmkouCoN', 'WPuyWQy', 'kH7dRmoBW51U', 'ixvlxSouW5SeW5z5xq', 'W5ytW6HxW4m', 'WPZcHSkmWRdcSW', 'W43dK8k8kmodwfS2W5e3', 'hSohWRivWOu', 'W7GteJDN', 'aCo3WQGsvW', 'WRiwsSo6zmoaWRBcRSkYra', 'xrmcWOVdPW', 'lSk5ovu', 'WOVdK1DcW5FdJHzkWQad', 'a0tcKHRcHW', 'WPVdImkqWQqo', 'WPvRnLK9', 'lwBdU8kIzCkvW6VcItKR', 'a8oacSoHWOvg', 'xGOjgCoYWOCnW6P0rG', 'WOVdKmkVWRiztGLzD8oO', 'uatcKLr0', "iwBdTSk/Fmka", 'W73cJ8oNWRO', 'W583W55vW5JdUSkXlh3cLq', "W5L+oudcUSkr", 'WP7dJfedWOtcTfmdWO8', 'zCoyWQldUCkC', 'oLNcPCkPWOeWymoeW5jM', 'WRG8WPVcGG', 'a8kUdmo3bW', 'WQOWWQRcRLK', 'h0pcJxrHW6RcJa', 'W57cTNBdH00', 'BbldOComW50QxmkIpCo0', 'vM7dPuGX', 'lmojeSolWOS', 'W4uFhaDFza7cHmkiW4S', "WQFdSthdLL84W4/dNfVcOa", 'dmoEWQC', "W7u+W69ZW7G", 'WQhdNxXNWPu', 'f03cOWpcQW', "oG/cVWj6W6/cUW19W5S", "W7/cNCorW7qVW4Whp8opWQO", 'mmkzxSkOWPm0hMPIFW', 'W5hcRmkes8km', 'a8owW45Uj2mDh1bU', 'h0ZcKW', "CSkPWRZcR8orW5VdImk+i8kt", 'W4BdJ8osW65flCkJWRPNW7G', 'W4uPfWTTgW', 'WOldLhm1WQ0', 'EtpdHaKLW43dSCk8zYa', 'tYCx', 'bCoXd8of', 'WQjubw8CrYFdKZXy', 'W6xcRCkzwSko', 'W6JcO8khWRNcIYpdM0n0ta', 'W70gcHTMaIFdJcnf', 'BMtcQZykWOpdSxxcK8kN', 'cxtdUSkTf8ocW4tcI2m', 'W7HPgSk7nSktW7JdP8oXkG', "FH/dGCkMmJ/dNSkZW5NcUW", "WRu/AGtdV8oetr9dWRS", 'WRFcLxzRoGr0b0Ct', 'WO8GWPJcKwq', 'WOiSgcZcGmoG', 'W5vfkeFcHG', 'Cmkqmqyj', 'oSo7oSoqWQPZsSk8n8kU', 'BqmOeSo5', 'o8kwB8kYWPO8cKLT', 'xmkSaqm5', 'WOVdLmkSWQKu', 'k8ouhsP4e8o6W5Wxoa', 'Aa3dVmo5W4qWpmkAWPWJ', 'WQZdGJtdOq4', 'dSkVyCkKWOe', "W6NdKc4/", "srqhWO/dL8kYpSoAvCoI", 'B8knE3ZcH28WWQVcImoM', 'W4ZdRSoiW7FdMhFcNHeGhq', 'kCoolCobWQO', 'WRlcL2LGWOS', 'W6ZdG8ksWRn8WOJdHge', "s8oWWO/dQW", "iM/cVGFcSW", 'WQbRsSoNzmoqWQ3cG8kqiW', "WRFcJd/cRd4kcZvIrG", "zG0Xbmo+", 'iComWQRcNW59nCkjhcW', 'W5ZdSWirzW', "gxpcICkMmSoRW5/cL1yJ", 'DrVdR8owW5v1BCowW4HS', 'W5ddR2fOWPhdMsxdIv1i', 'kwFcKrRcUq', 'W4pdVZqPAW', 'WPPHWPShWOe', 'W6tcNwZdTL8', 'mCk1dNhdLG', 'WQFcHmkeD17dOG', 'W4BdGCkqBCk8fmkb', "CCo+WPldNxxdLq", 'WOmWeclcK8oGW5y', 'ymkhWOBdGKn9nCoAhdW', 'WRpcOCkNWRn3y8oTW65RW6q', "aIqgWPFdRCk+jCotgCk2", 'o8oqpCoVWQi', 'ASoqWPpdOCk0', 'W50Puv4OrCofwSknqW', 'W6n0geNcHG', 'W4NcPY9NWQmuWPnzW7ldGW', 'WR8PWOtcN2O', 'e1ZdMCkbqG', "pSkccSk4D8k/W6FdMq", "W4DydSk/nSkuW7FdOSo/iW", 'jwldRq', "Et/cP1fu", 'EWdcH8kly0ldL8oiW4VdHG', 'E8kvpG', 'W57dNsyNiwWqqGPk', 'WRRdNmkfWReNW55rBSkqW68', 'WQpcGSkFALNdQYzG', 'jCkjhmo2', "WR/cUmkDWRJcQq", 'fmosWOaYFx4cEZbN', "Bs7dT2/dGemUpSkLpG", 'BtafeCoNWP0', "W4W+drvPfSojrCkdtq", 'WQxdVttdLGSLW5tcN1VcUG', 'AMxdVCk4yCktW6FcJYq8', 'W53cOCotWRXq', 'W7FcHmkvr8kx', 'pSkQWQddRtNdVmojF8kZWOe', 'itpdPxnyW7FcPcFdNCo8', 'cSofWQ4lWPhdVcpcQaBcPa', 'W6tdLmkvWRr7', 'xdKlWONdNCkNm8opga', 'WQZdMmkf', 'W7xcICkaEmkkhrLaWRjy', 'mCokgSoSWOXe', 'iCknhmoXmSkY', 'W64HkY9G', 'WORdU8kYq8on', 'W5vZkCk2cG', 'hCkly3RcLG8WWQFcKmoQ', 'WOxcL8ocm8kCbSkLuwNdSW', "etFdQh5pW4FcMtddN8o/", 'WRhdJSkfWRvHWO8baCoFWR0', 'W50PcW', 'zepcSmkhWPqQxSkUk8o0', 'W7ndhSk1g8kmW7pdOmo9DW', 'WRjvc8k0zmkpW7JdOSoJiW', 'qZRcVMjv', 'W5ZdImoKWRf2FSoQW798W78', 'WPFdH8kFqCoLW7BdPCoODmk5', 'df9lvSkZW5vjWPL0tW', 'W6BdRSoiW7FdKbdcKfXVwW', 'W7lcGeFdG3C', 'WPznWPqGWQi', "WOBdGLWbWO3dKrrvW4z+", "nSouBJb/jCkNW69eCq", 'ArldJCkYruldHSoEW4FdHG', 'W4ddGmkhF8kGbCkqfGtcQq', 'A8kcWQ7dVca', 'W6bzh8k0ia', 'cmobWPO8vW', 'AJpdHaKLW43dSCk8zYa', 'wSo1WOJdRmkj', 'WOLBwvqmjqFcN8kTWOy', 'W65Skq', 'ACkPWRRdQcG', 'i8kQW5VcKddcH8orzCk9W5e', "WQ/cR8kzWOdcVW", 'WQeAWQdcLLm', 'W57cOI4MW4ldJIhdIeWr', 'W7SRW7i', 'WQhcKCoCW7aZW6dcVdjFWR8', "oh/cOI7cKGjGASoSEa", "W6HBWPxcQb/cNCkPFXuN", 'W57cOI4MW4lcHqFcLurE', 'W6TJpehcUmkDcG', 'WRrhwc1HkcFdJcnf', 'W7irW4vHW5K', 'WOZcGxe', "WO3cIxj+", 'DICcaSoYWPCfW5W', 'EZxcSSknt8ooW5NdJq1L', 'WRNdKSkDWRbQWOG', "BH/dLJ9XWPpcJhxcJSkV", 'jmkof8oJaG', 'oCovW5FcKrGFuCoAsgK', 'W6D9ld83e1RdJd5f', 'W6JcKSoSWQXSDmoUW78UWQK', 'W6Cgut4RdgRcG20w', 'kmkCcSkIAmoPWQ7dMvBdVG', 'WRiwsSk5jCktW7pcRSkRmq', 'W5SEcrHnzKi', "W7/cNCorW7qVW4XmgCksWQi", "WPZdKeyhWPRcMeuzWO8/", 'e8kMqCoTnCk8W4ZcN2tdJq', 'cCoCdq', 'WPOSbt8', 'bKJcMgK', 'WOa6aIRcMSoRW4C1WRldHa', "yCkXt8k/D8oVWQJdTaFcGW", "jW/cR1OwWPBdVG1LW4S", 'W4hdGceQW6XAW4afW5dcNW', 'W5STzWJdR8ooCYnpWRS', 'cCoWfCo3', 'WPZcLmouh8k2WRxdM8oQpSkq', "ff/cHhPHW6VcJmo7u8oM", 'W7msjHpdGq', 'zIVcUCkkmmoSWQVcKgPO', 'WRGsWQa', 'W7pcQdxdHXuiW4dcJvRcTa', "Be/cVmk7FCkjW7hcItu3", 'W5hdUSkwECk8fmkbuXpcPq', 'W7tdKmowpLpdPdj9W5ddQq', "e13cM3f/", "W6BdRSoiW7FdMh/dUr9TwG", 'WROmWQdcKetcKSoSufS', 'icVdUxnEW5BcOZS', 'ECoijmo7W5ycoHnrlW', "dgTeW53cKSoZySo4u8k+", "W7SQW7v/W6tdGmo4WQNdVCkz", 'WPpcLhH6WQLAW58sWQRcKq', 'hmoJkmoLuHRdOG', 'm8o1mSo4uqZdSseMW7C', "WO/cHKTLWR0", 'eKhcVdVcRW', 'W51Cbmk3da', 'WOLSwuW5u8obpCkshq', 'WQ3dICkiWQrQW4XByCkbW68', 'W7CWW7jZW6BdGq', 'W5FcUqmmW4lcJwdcMWKr', 'W6PadeFcIq', 'jgpdVmkJf8ohW7e', 'b8oxemoWWP5ssmkkh8k5', 'WPj4WPOq', 'aCoWWQO9vW', "W6BcSNRcHv9/W6BdKKlcUG", 'W6CztITmEvRdHvHv', 'nSkDkaqLkCkMW6jswG', "yqJcU8kOba3cMCkBWP/cGW", "lv7cIhvJW6BcQ8k3hmk/", "wdhdQM/cUZ4NrCk1sW", 'aulcMwK', 'p2NdQSkXe8oiW6BcMLDH', "WONcR8k+WOBcTa", 'aCoAWPWlWPK', 'hYVdL8o8W6S', "cCoEWOm/Dq", 'hSoyWQuiWOa', 'ssldH8oYdmoeWOlcTrCB', 'WPCeW4hcRs9XWOFcLmoSW5q', 'qmoQWRtdMW', 'lCkdD8kJW4rWxdCapG', "zt/cKLm", 'W53dO0lcSsnddcHLuW', 'oKtcPCk5WPODcCkfWOeJ', 'W4K7W546WRRcMmoyBxlcKa', 'BdGSeSol', 'WR3dNbxcSt5drwy2bW', 'tbq4jSor', 'W45PvMVdLmkOWOi9W4RdLq', 'n3JdS8kHFmku', 's37dUvuy', 'W4pcLr5cW5NdGbTgW5Sr', 'WRhcGSkcz37dPcX9WOm', 'WPtdJ8kIWQm4', "WPO/W41hW4ZdVSowmYpdIG", 'W4hdGceIWOTuWO1cW7NdGG', 'W5SKarJcGSovqWLBWQ0', 'i8oSW74GW4tcGtZcQHVcTq', 'EIiqWRhdTa', 'nCkljmkKW5qaeCofE8oD', 'W5NdUSowpHdcPwe4W5ddUa', 'CCo6WPRdGNxdICkn', 'WRZdKCkvWRnm', 'W6LlhNGFvMlcNMOl', 'kSk3ovxdSYDIW7q', 'kwVdHf90WOpcPCkgvgO', 'W4iEue8HdWFcN8kLW6e', 'oIFcJh7cVumZpSk1lq', "WO/cJMPcWP0", 'WRtdSY3dQba5W5lcIeRcPW', 'WRSAWQpcKa', 'dvhcUIdcJaDRBCo2DW', "CcBdS8o/eq", 'lCo5tfDXAmoOWQexzG', 'W6pcV2VdO2C', 'W79PWR4PWRFcH8oxWPxcPSkL', 'kxBdHby6W5JcLSojv2y', 'gmoJnmoYwq', 'WQSSWO3cHwPF', 'W6VdGmkBAa', 'DuddVe0sWPFdJNK', 'c8oeW43cKumYE8kzctO', "rY7dT2/dGeTjmmoOEq", "WQ/cVCkPWQxcIJBdHW", "W6/cN8o5WRS", 'qCkgiteB', 'j8kIlWNcLgmMWRBcKmoS', 'W652W4tdLrBdPSk5aHu6', 'W5FcNbXJxcLdbW5D', "fw/cUsq", 'W4vthfxdHCo4W4v5WRL1', 'DCkrgrqJlCkPW7vslq', 'jCkyWOXkWQNdVchcTWNcSG', 'W74TWQe', 'pHZdRCoOW4O', 'ASktW45Xoh4Dzc1N', 'c0NdT8kgsG', 'fCofWP0mWOC', 'W43dLCkqk8oMsSoifMddIW', 'W7CzlexdRmkWWP15W7KH', 'gXFdPCotW4a', 'WRHhzWZdTSkRWOW4W6aJ', 'cgdcPdVcHrf6z8o1CW', 'WRhdKmobkqRcPtOvW7RdUa', 'WQpcOJmMW5tcMxVcTImr', 'W6lcNCkQWOKMWRDva8kCW7i', 'jwBdSCkZtCkeW7dcMdeX', 'WRpdTCkNBSoe', 'ECkoWPZdMWO', 'W508bWJdOSovtHjIWPe', 'bCobWPOOAdSDEZj6', 'p8oaWO05FtPVix4Z', 'kqpdJ8oz', 'lCo4WRGWWPa', 'WP7dHLWfWPZcMq', 'obtdSSolW4f6cmk2omoR', 'W7WFiqZdTSk9WQGRW6eW', 'W7xcPx7dV30grxKPgG', 'WPrWffCl', 'tNJcIvL0WOpcPCkcsga', 'WRKYzWJcHmkOv3jEW4y', 'qYuxWONdL8kHpSogdCk2', 'W7tdKmowpHdcRqy2WP3cTW', 'BtWDeW', 'nuhcKSoLdd3cLmkAWO7cHW', 'WPRdHCk0WRqmEW9zBmoK', "WQzRf2C/", "jKxcJSo1bGZcNSkgWP/cLa", 'WPxdKCknva', 'WRGGWPJcKZ4tWPJcLmoSW6y', 'ESkCpZ0M', 'W75EjmkwbW', 'WRrdhxa', 'pwldQCkX', 'nfhcTSooma', 'DCkfWOpdKGzMiSkkdq', 'a8owf8o3WP1fu8kkd8kN', 'WRyxkaVdQ8kSWP0RW6CU', 'CGVdGmocW5y', 'DJqzga', 'WRSTaxxdTSkUtNrpWQy', 'ngBdTCkPhCojW6VcIgfM', 'WO8KeY7cSG', 'Emo0WPpdHSkK', 'qmktW45XmbKtkwiP', 'gCobWRuJWQu', 'nmkyDCk1WOi8fvnKBq', "WOpdL8k+smoe", 'nmkubSo2ja', 'wrqDe8oG', "kW/cVGTaW4NcU2iFWRe", 'W7lcR8kJuSkk', 'WPxdI8kUWRmuEXPcBCoI', 'W4VdGCoCkmooq2yhW7WD', 'iSkphCoDoSk5W73cINNdHG', 'WOrmp3iB', 'ArBdQmoS', 'W7utkq', 'W4VdHmoiW7FdMhFcNHfJva', 'WR3dG8oIW7FdMhFcNHeGfq', 'zdBcRSosW5DKhSoIySkM', "xZ/cOL9r", "W6n/lLe", 'W7JdNmkzW6a3W5lcIZiKW4i', 'WOhdOmkfWRJcLItdILrYqq', 'WRavWQ3cMKpcQmoTr0D0', "w8kdWO/dQbe", 'W6m4nIHJ', 'jComC0vHgSk7W5jHra8', 'W6RcSMNcNvn3W67cVMxdUW', 'jmoFa8oxWOi', 'W501cqK', 'jmo4cSocWPS', 'x8kznJi7', 'stGxWPZcM8oOr8k1xCoZ', 'WPldP2bHWPBdHq', "W5RdKcK+sq", 'k8ouCKbQrCocWQexjq', 'ySknnHjXD8o3WRWxxG', 'yKhdU0So', 'D8kmWPNdMGi', 'zmkejWu0jSk8', 'pHxdPCozW51Rgq', 'W5hdKCkLySk6hSkquG', 'W7RcImkxBq', "uG3dIZ0UW4xdLSk/b8kf", 'cMpcKcVcUa', 'CmkQWPtdLJddJSknuCkZW5m', 'W5VdI8kgF8k8b8kbt0VdSW', 'irhdILT1WP7cOSktx3S', 'WPVdGCk4A8on', "W6/dQIqHzgGkqK8c", 'WOxcLKTsWO0', 'pmkdaCoXi8kZW6e', 'W7ddImk0WPPS', 'nmkIm1hdGNiVWQxcJCo9', "i8kjkvpdGJnKW7/cMmoS", 'pghdMSkimq', 'W7NcH8o9WQP0AmoZW6LP', 'ymkBbZSz', 'W7NcH8o9WQP0Amo5W6HHW6m', "W4/cMmoleCk+WQpcRmkxwmkj", 'W6RcTwZdVh8pth0Blq', 'ECoxo8oMW5zXibrNCq', 'rY7dTYZcGrbRpSkZiW', 'WPJcGCkhuxi', 'WRtcP8kgWQtcJdBdKfjLfq', 'jwhdGmkihW', 'swTBW4lcJ8oZeCoIvmki', 'WQZcNCkEWRiVWOuqlCkCWQa', 'sIBcNvrP', 'W7ldICkqWQy', 'iwBdT8k7AW', 'WPZcL8oem8o1vCoebWVcUG', "cCkSW5hcTmoHW7hdNSkUomk+", 'zLVdQHffW5tcQWf9W4S', 'j8kKj2pdIdnIW74', "W6NdICkqWRbTWP/dHq", 'WQZdICkqWRPSWOLeyCkdW7i', 'umoPWOtcR8otW4tdG8kUq8od', "ixvlvSkZW5vjWPL+qa", 'WR3cL8kzBudcRhOvW7RdUa', 'bWxdJCohW7a', 'WOFdKvW', "tmk/ESkJd0tcNuDPWQm", 'WPhdKCkhumoUW6FdSW', "W7WGW61IW6/dLq", 'f8o8WQaIWR0', 'W6SXvXToB3JdLCoGWRm', 'W4OAfrG', 'n3xdTa', 'W4LbogRcSq', "W73cN1dcHv93WOhdNa/cTG", 'W6FcSg3dVNbkxKSCbW', 'WPVdUvG3WRi', 'sSkeW69xW5tdPddcT3tdHG', "WOqweclcMSoPW45+W6pcKG", 'W6CMW67dIbBdTSkIlZ86', "EZNcKvH+", 'yWhcHujx', 'jmodALCEcSkcWQ9yzW', 'hmouzLDXAmoOWQexlq', 'hmkytCkqWOW', 'WRhcNmkunWVcIeS4W5ddUa', 'l8kJvCkeWRK', "WP/dMKehWOtcLW", 'W7irudCPlSojr8kCgq', 'm0NcKSo1hqpcMCklWO7dHG', 'WPVdLwCbWQ4', 'fhddMSkLEa', 'gSkHW43cR8kJWRNcTmkGD8o8', 'WOTYW5zeW43dVSowmsJdLG', "s8ooWP/dLf4", "WQ/cV8kGWQtcOa", 'W48ofXDyBeJdKq', 'W7Swna', 'WONdSmkgzCoO', 'WOK3WPRcO3K', "WQm3WPVcGNTEW47dH8k/W4K", 'xwJdNN8Q', 'WRqpWQxcTLFcTG', 'WPZdO2jQWO3dGI7dJebv', 'W43cVf3dPvG', 'WOtcK8kUB0e', 'WQJcRCknW7FdH2JcGXfBAa', 'xwFdRfC2', 'W74DhbHu', 'x8knvCkKW5OxdCoEoCkv', 'W73cK8oNWR1SzmoXW7q', 'WRdcR8keWQlcNq', 'WOpcIw9U', 'WPpdP8kZWQ8W', 'yCoxySkiD8o2WRpdMs3cGW', 'oXJdTmox', 'W4WTdqKXqSoys8kqua', "d8o7WQC/tW", 'tmk9zCkShctdJwqsWRe', 'WPO8bcxcH8ohW5rWW78', 'trddI0zBWQVcO8oJnCol', 'DM3dL3ez', 'WP3dP2DQ', "WPmQWOVcNNTiW7xdJmk/W4K", 'uatdS8oIlG', 'W7tdUSoeW7FcTXxdTb9VvW', 'owxdS8kAh8ojW6VcJhXN', 'WOLBwvqmjutdNSo2WQq', "W7/cNCksWRv8WOLeACkpW7u", 'WOddGvKJWRS', 'W43cISoOWP1z', 'i0RcO8o1bHhcMmkAWPNcNW', 'EHSOWOxdLW', 'W4OTcGK5qCoCt8kgua', 'WQRdL8k9W7i4pSkMWRyUW5K', 'W7Gztdy3FY7cTZm4', 'ASoHzCkID8o2WRpdMs3dGa', "BCkfWO/dLa8", 'c8obWRymWPRcRW', 'WQ9wANxdV8oixKabW6G', 'WOZcI8kSWQpcJq', 'g8oieSoJWQm', 'W7RcImksFa', "W59yWRW/W5BcVCkuAe/cIG", 'vhBdMryQW4VdNmoTgIK', 'W4yzeYTeyfxdKmo1WQa', "b8o0WO7dOCkFWO/cM8o8BmoN", 'WPddHCkZ', 'WOvBseeAkqFdSmohWOS', 'pchdP3nlW5dcTde', 'W450vNJdH8kZWQ8FWQ3dMW', 'WROzWQtcQLtcP8oRqWuO', 'mmkWW5VdIX3cRCozaSkZWPW', 'wmkrW7DBW5tdVdtdKbxdQq', "le/cKSo1hqFcHq", 'WO4MW6FcRGtcM8k5hXuQ', 'oLNcPCkPWOeWi8kfWOLe', 'jCknaCoHmSo2WQZdHJdcGW', 's8o4WPxdU8kaWP7cKCo4FCoS', 'hLpcN8oUdaBcV8knWOFcLG', 'gCoFWRqEWQVcV27dSLRdSa', 'lLldKmktDa', "pSkZAbO+jSk7W7vsDW", "A8omcSoJnmk+WRpcMhNdLW", 'WOFdSMSMW53cKN3cM3jS', 'W6zxbmk5iCoaWQNcSCkNiW', 'WQ8XWONcHMPjW5xdPmkIW5G', 'W7lcHCob', 'yrddH8kly0ldL8oiW4VdHG', 'nmkEhCoTjq', 'zdNcIKvUWPxcO8ku', "W6/cI3xdHeq", 'h0lcHw5YW6FcISk7bSky', 'WQtdUaxdKWO7W4RcLuhdVa', 'W6WFnbe', "ev/cJNXYW6FdKmoMwSoB", 'WQVdJ8kqWR17WQmc', 'CIeobmo6WPSAW412qa', "WQBdRd/dUhaqesD4ra", 'Aw7dTxGb', 'zSoRAHxcLwKDWPdcKmo9', 'W7ldGIqfBW', 'W6rSnKtcSmkAef4gW78', 'omo7a8o7tG', 'W5O4gaj6fSk2gCoofq', 'W5KAeaDR', 'W787W7vVW7RdGSkSW7FcSmod', "W4Khn8o6ECoaW7/dOmoPDW", 'W7jOkehcSCkgcKGbW7G', 'WRpdVc7dGa0', 'WPJdHLOOWPa', 'ydtdL8oEW4W', 'fgtcKSopmq', 'WO7cPmkZuNu', 'BmklWOpdGHD3kq', "h8o2o8o/xXRcShj2WR4", 'W6VdJCowrw3cRbOOWQ3dUa', 'uG3dIZ0MWQldMmoYqmkS', 'Emk3x8oFD8oRWRpdJdxcMa', 'DrFdTSo9W4rID8oCW5fM', 'W6PSkvZcI8kadeC', 'lCoBWOCiWPG', 'WPpdQuPpWOy', 'xSkxWO7dMqz2gSkoaW', 'f3pcPCkPWOeWi8kfWOeJ', 'g8oPWP01WQq', 'W450vNRdJ8kfWQG1WQ3dMW', 'W7fKlKa', 'x8klsCkOW4LVy8k0wmk4', 'kmkJvmkYWOu', 'AtJcPmoLkCo7WQZcPdLF', "WOpcUmkPWP/cVq", "WO3dOxXzWO/dGI7dIf1u", 'BJFcIvm', 'iCoBW5lcJenjbSotm3K', "kxddGKy0W5/dMmoVsmoB", "W6/cH8oNWR19", 'W6bKnLZcUSkh', "WO/dO8kqWOyt", 'B8krWOddKWzG', 'e2tcTJyDWPFdQLJcUCkV', 'WQpdRSoxW6JdHxFdPwWPBG', 'lSkLo1FdRq', 'sHWUWQ7dMG', 'zc7cSfLa', 'AJasbq', 'W7pcVSkcESkBgr9OW7qo', 'DXJdVq', "W583W55DWR/dVmkBBx7cIq", 'WRldS8kvWOvc', 'WO7dT31U', "kgFdPSo/kCoQWOJdNxbL", 'esNdPhPoW5dcVdtdN8kM', 'BdxdSSofW7i', 'pmoDWOybWP8', 'CJOgeW', 'zCkajWmI', 'zmkwWOtdNXbMoSkucYW', 'WRPPWQe2WQRdHmoTWRVdQSoE', 'hCkIEmkIWQW', 'mMNdSSkbaq', "WRtcQ8kjWQpcNx/cJaa4gq", 'lLFdP8k4DSkEW6ZcMdiK', 'tYhdLCoHdmoPWO7cVWqF', 'WRVdM8kPW64JamkuWROUWRy', 'W74eptz8', 'WOeNfdNcKCoPW4y8WRBdTG', 'WOJdK8krWQ4T', 'DCkBkamJj8kKW61sDW', 'tCo8WOFdRSkzWPFcISoDAmoS', 'fWxdMsK2WQ7dMmoGwmoh', 'C8oGCsZcRxiWWRRcKmo9', 'WP7dKsddVXO', 'WOZcMfvLWPy', 'W5RdPbWpWOFcN1GEWP4S', 'fCoEWRKiWOdcUw4', 'jmk1gvxdGIjxW7VdHmk4', 'EZFcR8o2sCk6WQVcPMay', "dvhcVsRcKHf3n8k+gW", 'WRJcK0D8WPO', 'WQJcMmkzWPNcTa', 'WPddP8k6tmoj', 'yL3dU0ahWOdcUXjIW4y', 'WPFdISkdWRifFXXo', 'pwJcJLTK', 'W7ywhabyzfpdKmoRWQq', 'aNBcPcRcQa', 'rspdMSo1bSoAWPm', 'oSkDBCkqWRe', 'rcxdMSoI', 'swpcUchcKXDRBmoXBW', 'WOawWORcKNW', 'zeRdPLu', 'uINcNmkYwmkaW5RdRfzp', 'EX0lWQRdQW', 'WOLgwr1cDLpdNSoRWQi', 'papdNMXy', 'WPf5W5xdLIyxWQRcO8oSWP0', "WQBdSt/cUvLnccL4va", 'W6NcTJBcQHnPrwy2bW', 'W4avcGbnA0tdMSoAWQu', 'W77cHmknEmkBcHG', 'wtddQmoNW5y', 'iCoeW43cMsq8nSkvbJO', 'W5pdVCkuzmkS', "WQ/dMmk+WRi", "WRZcRCk9WR/cTW", 'W6NcKCorW6u9W5XiFSoZWO0', 'ySodWQVdMMC', 'nCktu8kpWP0', 'WQRcJ29jWOm', 'WRBdKCoAbCo0weSTW7WD', "WRhcGmk/EKG", 'WRTWWP8AWPe', 'WPHveN4jrLtcIxCX', 'W59BW67dLrBdPSk5aHuY', 'W6aBncNdLq', "WRFcLCowiq/cUgfdWQ3dSq", 'iGldTmoEW5zPcmk2omoR', 'cxVcUI3cHre', 'W5dcMmkUESkT', 'W6JcM1RdHu8', 'yamLWPtdHq', 'dhNdL8kCxW', 'W5f0vHdcQCkHW7KLW5ddMW', 'D8kJW4dcVrRcH8ozaSkZWPW', 'aCo7pmo4wXFdPa', 'WQJdU8kDACoQ', 'fCoyWP8JFa', 'E2xdR8k3nmkwW4VdRfDf', 'WQiQWPZcL3bpW4ldTSkVW48', 'ldhdP3PpW5FcOG', 'W6i0WOFcMg1yW4ldM8kLW5m', 'WQBdR8kqWP1i', 'WReHDZJcUmoLW5GWW6aZ', 'W6xcLCkaFmkn', 'CCkWnCkRWPK3fe5VBa', 'WPC5e2VdI8k3WP81W5BcPG', 'WOLFWQKzWO4', 'WR8uWQFcMW', 'WRndaMi', "WPJdGmkocmk4WQFcSmkBn8o/", 'WPVdI8kUWRqsCqrhzSoJ', 'W50PcXHGa8kmwSkdtW', 'WQ8nWOdcMMi', 'W57cGWnsW5JdNqSLWRKu', "W6/cVh7dOf8", 'huZdR8kPjq', 'rtGIWPtdNmk6pSoA', 'c8oxdCo2WPa', "gSo/WPe+WRW", 'F8oyWOJdPSkV', 'W7ZdGIKLqG', 'uG3dIZvbWQZcLCk9bSky', 'W6CBux8cuxpcJw0g', 'zSkvnqqfpCk6W68', 'W5VdUetcO0ndwgyMha', 'dCoAWOa', "WQmSWPZcSgXnW4RdJmk/", 'd8kVvSkOWQW', 'hSozDSkPWPGQe194AG', 'bMZcLmkMsCkEWRhdOGOr', 'WPNdVZxdIrSKW4ZcNupdVa', 'WORdUSkBWRXi', 'W7vHm0VcUG', 'EZ8dWOVdLG', 'WQeuWP3cGutcR8o3rq', 'W5xdLJu2yh0Bd1ue', "W7VcJSkpE8kkhrL+", 'nM3dVmkI', 'C13dPLq', 'BdOfbCoNWPaBW5b5xq', 'BSkSWQtdNZq', 'aMdcScBcJGy', 'iMBdTCkUf8oc', 'zJ09emo7', 'zSoPDrZcHWLnWRpdQ8oT', 'sWddNmkMsuldL8oiW4VdJG', 'ErBdQ8o6W5vIDSogW5vS', "A8oekSo+W4mQdvfWDqW", 'bt3dKmoOW7W', 'zLpdNa', 'sZRdS8oSW4i', 'WOXJWP8BWPVcT8kPywlcNW', 'WP5LWPSnWQG', 'auJcNW', 'WOdcLgqIW71lW5ybWRFcGa', 'C8kbWOZdNq', "g8oEWRKiWOdcRMNdTe/dQW", 'WQNdNmkDWQfQ', 'ogtdVmoLtCkzWRJdN1nF', 'W4tcJXiTWQRcUWufWPK0', 'WPVdKhmqWPRcKfi', "W6BdRSoiW7/cV3NdK15UrG", 'W63dRmk0tCk0', 'W6SFkWm', "WO/dGCkRpG3cPxiVW4VdLq", 'dCovcG', 'iqJdS8oAW5rS', 'E8kAib42imk8', 'mLtcMCo0hrVcH8knW4VdMq', 'BaddRSodpSoIWQlcHtaK', 'WOddHL8nWP7cLa', 'W47cImoGWO8IvezeyCo7', 'W6RdPCk0WQHs', 'W6JcKCoDWP1T', 'W4BcIColE8owWRZdM8kgsSoR', 'r8o4WO3dQCkEWPtcMCoPCCoQ', 'dmoeWQuvWOdcTxhdSKK', 'WQVdImkdWRP7WOujo8oo', 'zmoxlSo9W7TtrXOQpG', 'E8ktWOFdGsC', "mSkZoeJdIsfKW7VdNSk+", 'uNBcTJrDWRdcPCoYvCol', 'W64xdZldSG', 'W5BdICkwzmk3aSkr', 'WPjUWO0bWORcU8kyzq', 'mSkZofxdNIj1WRRcJ8oI', 'hCkWBSkcWQi', 'dSkzhW', 'uZ3dN8oHiW', 'WQ3dK8kcW7rGWOPen8oiWRW', 'o8oTo8oIDq', "ECoFxmoOWPS2cuL+EW", 'BSoKWP3dMxFdJ8kn', 'sYldKSoVdSoEWOi', 'yfhdJ8o9W7iKaSo0BCkl', 'bCoDWOObDd9t', 'W7DycCk1mCkoW6ldQ8oOBq', 'W5VdHSkzqmks'];
  return lN = function () {
    return i;
  }, lN();
}
a(lt, 'phaseOwners');
function lW(i, J, UU, Uf = "retired an enemy that kept the battle in its own state") {
  let Ur = J.myself;
  typeof Ur == 'number' && T.monster[Ur] === 0x1 && (Jf()[Ur] = 0x0), J._quarantined = 0x1;
  try {
    J.instance_destroy();
  } catch {
    lT(J);
  }
  lC(i, Uf, J.constructor.name + '\x20(' + UU + ')');
}
a(lW, 'retire');
function lj(J, UU) {
  let Uf = !J.unknownResets && J.since >= 0x12c && J.frame - J.since < 0x12c && lt(UU).length < lx().filter(Uk => T.monster[Uk.myself] === 0x1).length,
    Ur = J.unknownResets ? 0x12c : Uf ? 0x12c : 0x4b0;
  if (J.since < Ur) return false;
  let Uo = T.mnfight + '/' + T.myfight + " for " + J.since + " frames";
  if (J.unknownResets) {
    for (let Uk of lt(UU)) lW(J, Uk, Uo);
  }
  return J.unknownResets = (J.unknownResets || 0x0) + 0x1, true;
}
a(lj, 'unknownPhase');
var la = ['beginStep', 'step', 'endStep', 'alarmEvent'];
function lR(i) {
  if (!(i._guardWrapped && la.some(J => Object.prototype.hasOwnProperty.call(i, J)))) {
    i._guardWrapped || (i._guardFailFrames = 0x0, i._guardLastFail = -0x1), i._guardWrapped = 0x1;
    for (let J of la) {
      let UU = i[J];
      if (typeof UU != 'function') continue;
      let Uf = Object.prototype.hasOwnProperty.call(i, J),
        Ur = Object.getPrototypeOf(i);
      i[J] = function (...Uo) {
        try {
          return (Uf ? UU : Ur[J]).apply(this, Uo);
        } catch (Uk) {
          throw i._guardLastFail !== j.frame && (i._guardLastFail = j.frame, i._guardFailFrames++), Uk;
        }
      };
    }
  }
}
a(lR, 'watchGuest');
function lK(i) {
  for (let J of j.list) {
    if (!lP(J) || !J._customGuest || (lR(J), J._guardFailFrames < 0x1e)) continue;
    let UU = J.myself;
    typeof UU == 'number' && UU >= 0x4 && T.monster[UU] === 0x1 && (Jf()[UU] = 0x0), J._quarantined = 0x1;
    try {
      J.instance_destroy();
    } catch {
      lT(J);
    }
    lC(i, "quarantined a guest", J.constructor.name + " threw on " + J._guardFailFrames + " frames");
  }
}
a(lK, 'quarantine');
function ly(i) {
  i.ghost = i.ghost || [0x0, 0x0, 0x0];
  for (let J = 0x0; J < 0x3; J++) {
    let UU = T.monsterinstance && T.monsterinstance[J],
      Uf = T.monster[J] === 0x1 && UU && typeof UU == 'object' && UU.destroyed;
    i.ghost[J] = Uf ? i.ghost[J] + 0x1 : 0x0, i.ghost[J] >= 0x1e && (Jf()[J] = 0x0, i.ghost[J] = 0x0, lC(i, "freed a slot whose enemy is gone", "slot " + J + '\x20' + UU.constructor.name));
  }
}
a(ly, 'ghostSlots');
function lu() {
  for (let i = 0x4; i < T.monster.length; i++) {
    if (T.monster[i] !== 0x1) continue;
    let J = T.monsterinstance[i];
    if (lP(J) && J.myself === i && !J._quarantined) return i;
  }
  return -0x1;
}
a(lu, 'nextGuest');
function lB(i, J) {
  Ji(i, J);
  let UU = T.monsterinstance[i];
  return delete UU._customGuest, UU._promotedFrom = J, Jf()[J] = 0x0, UU;
}
a(lB, 'swapIntoSlot');
function lz(J, UU) {
  let Uf = 0x0;
  for (let Ur = 0x0; Ur < 0x3; Ur++) {
    if (T.monster[Ur] === 0x1) continue;
    let Uo = lu();
    if (Uo < 0x0) break;
    let Uk = lB(Ur, Uo);
    Uf++, lC(J, "promoted a guest into a real slot", Uk.constructor.name + '\x20' + Uo + " -> " + Ur + (UU ? " (after the win was declared)" : ''));
  }
  return Uf;
}
a(lz, 'promote');
function lp(i) {
  if (Array.isArray(T.flag)) for (let J = 0x4; J < T.monster.length; J++) {
    let UU = i.guestAlive.get(J),
      Uf = T.monster[J] === 0x1;
    Uf && !i.flagSnap.has(J) && i.flagSnap.set(J, T.flag[0x33 + J]), UU && !Uf && i.flagSnap.has(J) && (T.flag[0x33 + J] = i.flagSnap.get(J)), i.guestAlive.set(J, Uf);
  }
}
a(lp, 'guestFlags');
function le(i) {
  let J = i.x - 0x140,
    UU = i.y - 0xf0;
  if (Math.abs(J) < 0x1c0 && Math.abs(UU) < 0x170) return false;
  let Uf = i.gravity ? Math.cos(i.gravity_direction * Math.PI / 0xb4) * i.gravity : 0x0,
    Ur = i.gravity ? -Math.sin(i.gravity_direction * Math.PI / 0xb4) * i.gravity : 0x0;
  return i.hspeed * J + i.vspeed * UU > 0x0 && Uf * J + Ur * UU >= 0x0;
}
a(le, 'leaving');
function lF(J, UU) {
  let Uf = UU === 'ut' ? 'blt_parent' : 'obj_bulletparent',
    Ur = [];
  for (let Uk of j.list) !Uk.destroyed && lg(Uk, Uf) && (Uk._capSeen === void 0x0 && (Uk._capSeen = J.frame), Ur.push(Uk));
  if (Ur.length <= 0x190) return;
  let Uo = 0x0;
  for (let UH of Ur) {
    if (Ur.length - Uo <= 0x190) break;
    le(UH) && (lT(UH), Uo++);
  }
  if (Ur.length - Uo > 0x5dc) {
    let Us = j.first('obj_heart'),
      Uh = Us ? Us.x + 0x8 : 0x140,
      US = Us ? Us.y + 0x8 : 0xf0,
      UQ = Ur.filter(Um => !Um.destroyed && J.frame - Um._capSeen >= 0x1e).map(Um => [Um, Math.hypot(Um.x - Uh, Um.y - US)]).filter(Um => Um[0x1] > 0xa0).sort((Um, UV) => UV[0x1] - Um[0x1]);
    for (let [Um] of UQ) {
      if (Ur.length - Uo <= 0x5dc) break;
      lT(Um), Uo++;
    }
  }
  Uo && lC(J, "capped bullets", Ur.length + " alive, " + Uo + " removed");
}
a(lF, 'capBullets');
function lE() {
  return j.first('obj_battlecontroller');
}
a(lE, 'BC');
function lY() {
  let i = T.mnfight === 0x0 && T.myfight === 0x0;
  for (let J of j.list) !lP(J) || J.attacked !== 0x0 || !lg(J, 'obj_monsterparent') || (J.rtimer === void 0x0 || typeof J.rtimer == 'number' && Number.isNaN(J.rtimer) || i && J.talked === 0x0 && typeof J.rtimer == 'number' && J.rtimer !== 0x0) && (J.rtimer = 0x0);
}
a(lY, 'drRtimer');
function ce(i, J) {
  if (i.frame - (i.forcedAt || -0x3e7) < 0x2d) return;
  let UU = lE();
  ld(), i.forceCount > 0x0 ? (j.with('obj_bulletparent', Uf => Uf.instance_destroy()), j.with('obj_bulletgenparent', Uf => Uf.instance_destroy()), j.with('obj_darkener', Uf => {
    Uf.darken = 0x0;
  }), j.with('obj_heart', Uf => {
    D(Uf.x, Uf.y, G), Uf.instance_destroy();
  }), UU && (UU.reset = 0x0, UU.noreturn = 0x0, UU.timeron = 0x1, UU.alarm[0x2] = -0x1), P(), lC(i, "ended a stuck enemy turn (directly)", J)) : (T.mnfight = 0x2, T.turntimer = 0x0, UU && (UU.reset = 0x0, UU.noreturn = 0x0, UU.timeron = 0x1), lC(i, "ended a stuck enemy turn", J)), i.forcedAt = i.frame, i.forceCount = (i.forceCount || 0x0) + 0x1, i.pinned = 0x0, i.resetFrames = 0x0, i.nrIdle = 0x0;
}
a(ce, 'drEndEnemyTurn');
var bn = 0x1e;
function bt(i) {
  let J = T.turntimer;
  i.lastTT === null || !(J >= i.lastTT) || J >= i.lastTT + bn ? (i.lastTT = J, i.pinned = 0x0) : i.pinned++;
}
a(bt, 'trackTimer');
function In(i, J) {
  if (bt(i), i.pinned === 0x96) {
    let UU = [];
    for (let Uf of lx()) Uf.attacked === 0x0 && T.monster[Uf.myself] === 0x1 && (Uf.attacked = 0x1, UU.push(Uf.constructor.name));
    UU.length && lC(i, "enemies that never attacked gave up their attack", UU.join(',\x20') + " at turntimer " + T.turntimer);
  }
  if (i.pinned >= 0x258) {
    ce(i, "turntimer held at " + T.turntimer + " for " + i.pinned + " frames");
    return;
  }
  if (J) {
    if (J.reset === 0x1) {
      if (i.resetFrames++, J.noreturn === 0x1) {
        let Ur = j.list.some(Uo => lP(Uo) && lL(Uo));
        i.nrIdle = Ur ? 0x0 : i.nrIdle + 0x1, (i.nrIdle >= 0xf0 || i.resetFrames >= 0x384) && (i.resetFrames >= 0x384 && ld(), J.noreturn = 0x0, J.alarm[0x2] = 0x1, i.nrIdle = 0x0, i.resetFrames = 0x0, lC(i, "released an orphaned noreturn", "nobody left to hand the turn back"));
      } else !(J.alarm[0x2] > 0x0) && i.resetFrames >= 0x3c && (J.alarm[0x2] = 0x1, i.resetFrames = 0x0, lC(i, "re-armed the end-of-turn alarm"));
    } else i.resetFrames = 0x0, i.nrIdle = 0x0;
    i.since >= 0xa8c && ce(i, "bullet phase " + i.since + " frames");
  }
}
a(In, 'drBulletPhase');
function It(i) {
  let J = 0x0;
  for (let Uf of j.list.slice()) if (!(!lP(Uf) || !(lg(Uf, 'obj_bulletparent') || lg(Uf, 'obj_bulletgenparent')))) {
    try {
      Uf.instance_destroy();
    } catch {
      lT(Uf);
    }
    J++;
  }
  let UU = i.prevMn === 0x1 || i.prevMn === 1.5 || i.prevMn === 0x2;
  if (i.since === 0x0 && UU) {
    for (let Ur of j.list.slice()) if (!(!lP(Ur) || !lg(Ur, 'obj_battleblcon'))) {
      if (lP(Ur.mywriter)) try {
        Ur.mywriter.instance_destroy();
      } catch {
        lT(Ur.mywriter);
      }
      try {
        Ur.instance_destroy();
      } catch {
        lT(Ur);
      }
      J++;
    }
  }
  i.since === 0x0 && UU && (j.with('obj_darkener', Uo => {
    Uo.darken = 0x0;
  }), j.with('obj_heart', Uo => {
    D(Uo.x, Uo.y, G), Uo.instance_destroy();
  })), J && lC(i, "cleared an enemy turn left on the menu", J + " bullets/generators/balloons");
}
a(It, 'drMenuCleanup');
function Ie(i) {
  if (!lm()) {
    i.gated = 0x0, i.gatedQuiet = 0x0;
    return;
  }
  i.gated = (i.gated || 0x0) + 0x1;
  let J = lE();
  if (i.gated === 0xf && J && lP(J.battlewriter) && T.myfight === 0x0 && (J.battlewriter.instance_destroy(), lC(i, "made way for an intro")), i.gatedQuiet = j.list.some(UU => lP(UU) && lL(UU)) ? 0x0 : (i.gatedQuiet || 0x0) + 0x1, i.gatedQuiet === 0x96) {
    let UU = [];
    for (let Uf of lV()) Uf.done && (Object.assign(Uf.m, Uf.done), UU.push(Uf.m.constructor.name));
    UU.length && T.mnfight === 0x0 && T.myfight === 0x0 && Array.isArray(T.char) && !(T.charturn < T.char.length) && (T.charturn = 0x0), lC(i, "ended an intro the battle controller was waiting for", UU.join(',\x20') || "no known intro");
  }
  if (i.gatedQuiet >= 0x12c) {
    for (let Ur of lV()) lW(i, Ur.m, "the controller waited " + i.gated + " frames for its intro");
    i.gated = 0x0, i.gatedQuiet = 0x0;
  }
}
a(Ie, 'drFrozenMenu');
function U7(J) {
  let UU = lE();
  lY();
  let Uf = T.mnfight,
    Ur = T.myfight;
  if (UU && UU.victory === 0x1 && UU.victoried === 0x0 && (lG() > 0x0 || lu() >= 0x0)) {
    lz(J, true), Jr.length && (lC(J, "refused a win that would have defeated enemies at full health", Jr.map(Uo => "slot " + Uo.slot + " by " + Uo.by).join(',\x20')), Jr.length = 0x0), lG() > 0x0 && (UU.victory = 0x0, J.prevMn === 0x2 ? P() : (T.mnfight = 0x1, T.myfight = -0x1), lC(J, "cancelled a win with guests still standing"));
    return;
  }
  if (!(Uf === -0x1 && Ur === 0x7)) {
    if (Ie(J), Uf === 0x0 && Ur === 0x0) {
      It(J), lG() === 0x0 && lu() < 0x0 ? ++J.emptyFrames >= 0x1e && (J.emptyFrames = 0x0, g(), lC(J, "won a board with no enemy left")) : J.emptyFrames = 0x0;
      return;
    }
    if (J.emptyFrames = 0x0, Uf === 0x2) {
      In(J, UU);
      return;
    }
    if (J.pinned = 0x0, J.lastTT = null, Uf === 0x1 || Uf === 1.25 || Uf === 1.5) {
      if (J.since <= 0x1 && (J.quietTalk = 0x0), J.quietTalk = j.list.some(Uo => lP(Uo) && /writer|blcon|balloon|choicer|^obj_face/i.test(Uo.constructor.name)) ? 0x0 : (J.quietTalk || 0x0) + 0x1, Uf === 0x1 && J.quietTalk >= 0xf0) {
        J.quietTalk = 0x0, T.mnfight = 0x2, lC(J, "moved on a talk phase with nothing to read");
        return;
      }
      J.since === 0x258 && (s(), lC(J, "pressed Z at a talk phase that did not end")), J.since >= 0x384 && ce(J, "talk phase " + J.since + " frames");
      return;
    }
    if (Ur === 0x3 && U9(), Ur === 0x3 && J.since >= 0x96 && J.since % 0x1e === 0x0) {
      let Uo = lx().filter(UH => UH.acting > 0x0 || UH.actingsus > 0x0 || UH.actingral > 0x0 || UH.actingnoe > 0x0).some(UH => (UH.actcon || 0x0) !== 0x0 || (UH.actconsus || 0x0) !== 0x0 || (UH.actconral || 0x0) !== 0x0 || (UH.actconnoe || 0x0) !== 0x0),
        Uk = j.list.some(UH => lP(UH) && (lL(UH) || lM(UH)));
      if (!Uo && !Uk) {
        Z(), lC(J, "skipped an ACT that never started");
        return;
      }
    }
    if (Ur === 0x3 || Ur === 0x4) {
      J.since === 0x258 && (s(), lC(J, "advanced the text of an ACT/spell phase that did not end")), J.since >= 0x2ee && (Z(), J.since = 0x0, lC(J, "left a stuck ACT/spell phase"));
      return;
    }
    if (Ur === 0x1 && !j.exists('obj_attackpress')) {
      J.since >= 0x258 && (T.mnfight = 0x1, T.myfight = -0x1, lC(J, "left a stuck attack phase"));
      return;
    }
    lj(J, 'dr') && (J.forcedAt = -0x3e7, ce(J, "phase " + Uf + '/' + Ur + " for " + J.since + " frames"), J.since = 0x0);
  }
}
a(U7, 'drWatch');
var U8 = [['sus', 'Susie'], ['ral', 'Ralsei'], ['noe', 'Noelle']];
function U9() {
  if (v.scr_nextact) for (let i of lx()) {
    if (!(i._ch < 0x2)) continue;
    if (i._memberAct) {
      j.list.some(UU => lP(UU) && lL(UU)) || (i._memberAct = 0x0, v.scr_nextact.call({}));
      continue;
    }
    let J = U8.find(([UU]) => i['acting' + UU] === 0x1 && i['actcon' + UU] === 0x1);
    J && (i['actcon' + J[0x0]] = 0x0, i._memberAct = 0x1, n(i.myself, 0x32), T.msg[0x0] = '*\x20' + J[0x1] + " tried to help!/%", x());
  }
}
a(U9, 'drMemberActs');
function Ui(i) {
  let J = T.mnfight,
    UU = T.myfight,
    Uf = j.first('obj_battlecontroller');
  if (Uf && Uf.won === 0x1 && !i.utWonSeen && lG() === 0x0 && lu() >= 0x0 && (lz(i, true), lG() > 0x0)) {
    Uf.won = 0x0, T.xp -= T.xpreward[0x3] || 0x0, T.gold -= T.goldreward[0x3] || 0x0, lv(lL), T.myfight = 0x0, T.mnfight = 0x1, lC(i, "cancelled a win with guests still standing");
    return;
  }
  if (Uf && Uf.won === 0x1) {
    i.utWonSeen = true;
    return;
  }
  if (!(J === 0x0 && UU === 0x0)) {
    if (J === 0x1) {
      i.since === 0x258 && (s(), lC(i, "pressed Z at a talk phase that did not end")), i.since >= 0x384 && (lv(lM), i.since = 0x0, (i.talkForces = (i.talkForces || 0x0) + 0x1) === 0x1 ? (T.mnfight = 0x2, lC(i, "moved a stuck talk phase on")) : (T.turntimer = -0x1, T.mnfight = 0x3, lC(i, "ended a talk phase that kept coming back")));
      return;
    }
    if (J === 0x2) {
      if (i.ttOut = T.turntimer < 0x1 ? i.ttOut + 0x1 : 0x0, bt(i), i.ttOut >= 0x5a || i.pinned >= 0x258 || i.since >= 0xa8c) {
        let Ur = i.ttOut >= 0x5a ? "turntimer out, no generator ended it" : i.pinned >= 0x258 ? "turntimer held at " + T.turntimer : "bullet phase " + i.since + " frames";
        T.turntimer = -0x1, T.mnfight = 0x3, i.ttOut = 0x0, i.pinned = 0x0, lC(i, "ended a stuck enemy turn", Ur);
      }
      return;
    }
    if (i.pinned = 0x0, i.lastTT = null, i.ttOut = 0x0, J === 0x3) {
      i.since === 0x12c && (j.with('obj_lborder', Uo => {
        Uo.x = T.idealborder[0x0];
      }), j.with('obj_rborder', Uo => {
        Uo.x = T.idealborder[0x1];
      }), j.with('obj_uborder', Uo => {
        Uo.y = T.idealborder[0x2];
      }), j.with('obj_dborder', Uo => {
        Uo.y = T.idealborder[0x3];
      }), lC(i, "snapped the box back to the menu")), i.since >= 600 && (T.bmenuno = 0x0, T.myfight = 0x0, T.mnfight = 0x0, T.turn = (T.turn || 0x0) + 0x1, T.mercyuse = -0x1, lC(i, "returned to the menu"));
      return;
    }
    if (J === 0x0 && UU >= 0x1 && UU <= 0x4) {
      i.since === 0x258 && (s(), lC(i, "advanced the text of an ACT/FIGHT phase that did not end")), i.since >= 0x2ee && (j.with('obj_base_writer', Uo => {
        Uo.halt = 0x3;
      }), T.myfight = 0x0, T.mnfight = 0x1, lC(i, "left a stuck ACT/FIGHT phase"));
      return;
    }
    lj(i, 'ut') && (lv(Uo => lL(Uo) || lM(Uo)), T.turntimer = -0x1, T.myfight = 0x0, T.mnfight = 0x3, i.since = 0x0, lC(i, "reset a phase nobody left", J + '/' + UU + " for " + i.since + " frames"));
  }
}
a(Ui, 'utWatch');
function UJ(J) {
  let UU = j.first('obj_battlecontroller');
  if (!UU || UU.won === 0x1 || UU.runaway === 0x1 || J.utWonSeen || (J.exitUndos || 0x0) >= T.monster.length) return;
  let Uf = /^(obj_battlecontroller|obj_heart|obj_battler|OBJ_|obj_base_writer|blt_)/,
    Ur = [...Array(T.monster.length).keys()].filter(Uk => T.monster[Uk] === 0x1 && lP(T.monsterinstance[Uk])).map(Uk => T.monsterinstance[Uk]).filter(Uk => Uk._schedLeave === 0x1);
  for (let Uk of j.list) Uk._schedLeave === 0x1 && (Uk._schedLeave = void 0x0);
  if (!Ur.length) for (let UH = 0x0; UH < T.monster.length; UH++) {
    let Us = T.monsterinstance[UH];
    T.monster[UH] === 0x1 && lP(Us) && typeof Us == 'object' && T.monsterhp[UH] <= 0x0 && Ur.push(Us);
  }
  if (!Ur.length) {
    let Uh = new Set([...Array(T.monster.length).keys()].filter(UQ => T.monster[UQ] === 0x1).map(UQ => T.monsterinstance[UQ])),
      US = j.list.find(UQ => lP(UQ) && Uh.has(UQ) && !Uf.test(UQ.constructor.name) && /room_goto(_next)?\(/.test(lX(UQ.constructor)));
    US && (Ur = [US]);
  }
  let Uo = Ur.length ? [] : j.list.filter(UQ => lP(UQ) && UQ._schedBy && !lP(UQ._schedBy) && /room_goto(_next)?\(/.test(lX(UQ.constructor)));
  if (!(![...Array(T.monster.length).keys()].some(UQ => T.monster[UQ] === 0x1 && lP(T.monsterinstance[UQ]) && !Ur.includes(T.monsterinstance[UQ])) || !Ur.length && !Uo.length)) {
    J.exitUndos = (J.exitUndos || 0x0) + 0x1;
    for (let UQ of Uo) {
      let Um = j.list.slice(j.list.indexOf(UQ) + 0x1);
      for (let UV of Um) lP(UV) && typeof UV.depth == 'number' && UV.depth <= -0x3e8 && !lg(UV, 'obj_monsterparent') && !lL(UV) && lT(UV);
      lT(UQ);
    }
    for (let Uw of Ur) lW(J, Uw, "it ended the battle with enemies still standing", "let one enemy leave by its own exit");
    T.battleover = null, lv(UZ => lL(UZ) || lM(UZ)), T.turntimer = -0x1, T.myfight = 0x0, T.mnfight = 0x3, lz(J, true), lC(J, "let one enemy leave by its own exit", "the others stay");
  }
}
a(UJ, 'utEarlyExit');
function Ul(J) {
  if (!(T.mnfight === 0x0 && T.myfight === 0x0 && (T.bmenuno === 0x1 || T.bmenuno === 0x2) && Array.isArray(T.bmenucoord))) {
    J.utCur = null;
    return;
  }
  let UU = T.bmenucoord[0x1],
    Uf = J.utCur;
  if (J.utCur = UU, Uf == null || Jl() === 0x0) return;
  let Ur = [0x0, 0x1, 0x2].filter(US => T.monster[US] === 0x1);
  if (!Ur.length) return;
  let Uo = Ur[0x0],
    Uk = Ur[Ur.length - 0x1],
    UH = 0x0;
  if (t.pressed.down && Uf === Uk && UU === Uo ? UH = 0x1 : t.pressed.up && Uf === Uo && UU === Uk && (UH = -0x1), !UH || !Jc(UH)) return;
  let Us = [0x0, 0x1, 0x2].filter(US => T.monster[US] === 0x1);
  T.bmenucoord[0x1] = UH > 0x0 ? Us[Us.length - 0x1] : Us[0x0], J.utCur = T.bmenucoord[0x1];
  let Uh = j.list.find(US => lP(US) && US.constructor.name === 'OBJ_INSTAWRITER');
  if (Uh) try {
    V().UTSCR.SCR_TEXT.call({}, 0x3);
    let US = T.msg[0x0];
    Array.isArray(Uh.mystring) && (Uh.mystring[0x0] = US), Uh.originalstring = US, Uh.stringpos = String(US).length;
  } catch {}
  lC(J, "scrolled the target list");
}
a(Ul, 'utMenuScroll');
var Uc = /^OBJ_(WRITER|INSTAWRITER|NOMSCWRITER)$/;
function Ub() {
  let i = null;
  for (let UU of j.list) UU.destroyed || !Uc.test(UU.constructor.name) || Math.abs(UU.x - 0x20) > 0xc || Math.abs(UU.y - 0xfa) > 0xc || !UU.visible && !UU._boxParked || (i || (i = [])).push(UU);
  if (!i) return;
  let J = i[0x0];
  for (let Uf of i) (Uf._ord || 0x0) > (J._ord || 0x0) && (J = Uf);
  for (let Ur of i) Ur === J ? Ur._boxParked && (Ur._boxParked = 0x0, Ur.visible = true) : Ur._boxParked || (Ur._boxParked = 0x1, Ur.visible = false);
}
a(Ub, 'utBoxWriters');
function UI(i) {
  if (!i || !i.customEncounter || (T.battleover === "ut-win" && i.customEngine === 'ut' && !T.inGameOver && UJ(lZ(i)), T.battleover || T.inGameOver) || !Array.isArray(T.monster) && typeof T.monster != 'object') return;
  let J = lZ(i);
  J.frame++;
  let UU = i.customEngine === 'ut' ? 'ut' : 'dr',
    Uf = T.mnfight + '/' + T.myfight;
  if (Uf !== J.key ? (J.prevMn = J.curMn, J.key = Uf, J.since = 0x0) : J.since++, Uf === "0/0" && (J.forceCount = 0x0, J.talkForces = 0x0), J.curMn = T.mnfight, lK(J), ly(J), UU === 'dr' && lp(J), UU === 'dr') {
    let Ur = lE();
    Ur && (Ur.victory === 0x1 || Ur.victoried === 0x1) || lz(J, false);
  } else {
    let Uo = j.first('obj_battlecontroller');
    Uo && Uo.won === 0x1 || lz(J, false);
  }
  li(i, UU), T.mnfight === 0x2 && lF(J, UU), UU === 'ut' && (Ul(J), Ub()), UU === 'dr' ? U7(J) : Ui(J), Jr.length && (lC(J, "refused a collateral defeat", Jr.map(Uk => "slot " + Uk.slot + " by " + Uk.by).join(',\x20')), Jr.length = 0x0);
}
a(UI, 'customWatchdog');
export { ih as a, iZ as b, iC as c, ix as d, iT as e, UI as f, iX as g, iy as h, J2 as i, J3 as j };