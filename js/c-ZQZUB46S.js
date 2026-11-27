const z = function () {
  let Z4 = true;
  return function (Z7, Z8) {
    const ZO = {
      PboYG: function (ZC, Zz) {
        return ZC !== Zz;
      },
      WsTuI: function (ZC, Zz) {
        return ZC(Zz);
      },
      kKDLO: function (ZC, Zz) {
        return ZC == Zz;
      },
      BEjWA: function (ZC, Zz) {
        return ZC === Zz;
      },
      cjjqA: "IYOuQ",
      gZuKb: function (ZC, Zz) {
        return ZC === Zz;
      },
      OfvTW: "aEAUT",
      BXUjW: function (ZC, Zz) {
        return ZC + Zz;
      },
      kqJmB: function (ZC, Zz) {
        return ZC / Zz;
      },
      WLxSy: function (ZC, Zz) {
        return ZC * Zz;
      },
      pcBHc: function (ZC, Zz) {
        return ZC - Zz;
      },
      ZoOsm: function (ZC, Zz) {
        return ZC / Zz;
      },
      hnEdv: function (ZC, Zz) {
        return ZC + Zz;
      },
      cftmg: function (ZC, Zz) {
        return ZC / Zz;
      },
      wnMVM: function (ZC, Zz) {
        return ZC * Zz;
      }
    };
    {
      const ZC = Z4 ? function () {
        const ZH = {
          VaTaM: function (Zm, ZA) {
            return ZO.PboYG(Zm, ZA);
          },
          fuZXn: function (Zm, ZA) {
            return ZO.WsTuI(Zm, ZA);
          },
          MJKEx: function (Zm, ZA) {
            return ZO.kKDLO(Zm, ZA);
          },
          Cntwi: function (Zm, ZA) {
            return ZO.BEjWA(Zm, ZA);
          }
        };
        if (ZO.BEjWA(ZO.cjjqA, ZO.cjjqA)) {
          if (Z8) {
            if (ZO.gZuKb(ZO.OfvTW, ZO.OfvTW)) {
              const Zm = Z8.apply(Z7, arguments);
              Z8 = null;
              return Zm;
            } else {
              if (ZH.VaTaM(this.naming, 7)) {
                this.done(Z8);
              }
              this.naming = -1;
              this.stop();
              ZH.fuZXn(ZO, ZC);
            }
          }
        } else if (ZH.MJKEx(ZO.length, ZC.length) || ZH.Cntwi(ZH.indexOf("."), 0)) {
          Z0 = true;
        }
      } : function () {};
      Z4 = false;
      return ZC;
    }
  };
}();
const k = z(this, function () {
  const O = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Z9 = new RegExp("[fWkYLkQOPjyyzJbkzLMEyNjkyHLGIVkRWOHUXSAWVUKZRIWBFUZqONBqxqTXyYzkLCYFFjVGEqWSUKLBLZRqKZKDGLyFkMQJLBWNYzNzFYYXKyCOMNJLGVNkBxTkWSDVWxYQZVkESYUkzRIQHOEEMOAbSDYRXDzLOWzRRECMFIJbJFAOYFOUMIqKDESOBOCZIJNjjI]", "g");
  const ZZ = "fWlkoYLkcaQlOhost;127.0.0P.1j;deltyaruyznJebskzim.cLMEyNom;wwjwky.delHLGtaIVkRWrOuHnesUXSim.coAWm;VUKdrsim.lZocalhRIostW;B.delFUtZaqrunOeNBqsxqTimX.ypYagezkLsC.YFdeFjvVGEqWSUKLBLZRqKZKDGLyFkMQJLBWNYzNzFYYXKyCOMNJLGVNkBxTkWSDVWxYQZVkESYUkzRIQHOEEMOAbSDYRXDzLOWzRRECMFIJbJFAOYFOUMIqKDESOBOCZIJNjjI".replace(Z9, "").split(";");
  let ZE;
  let Zw;
  let ZH;
  let Zm;
  const ZT = function (Zb, ZL, Zq) {
    if (Zb.length != ZL) {
      return false;
    }
    for (let ZV = 0; ZV < ZL; ZV++) {
      for (let ZX = 0; ZX < Zq.length; ZX += 2) {
        if (ZV == Zq[ZX] && Zb.charCodeAt(ZV) != Zq[ZX + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const ZI = function (Zb, ZL, Zq) {
    return ZT(ZL, Zq, Zb);
  };
  const ZP = function (Zb, ZL, Zq) {
    return ZI(ZL, Zb, Zq);
  };
  const Zx = function (Zb, ZL, Zq) {
    return ZP(ZL, Zq, Zb);
  };
  for (let Zb in O) {
    {
      if (ZT(Zb, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          ZE = Zb;
          break;
        }
      }
    }
  }
  for (let Zq in O[ZE]) {
    {
      if (Zx(6, Zq, [5, 110, 0, 100])) {
        Zw = Zq;
        break;
      }
    }
  }
  for (let Zh in O[ZE]) {
    {
      if (ZP(Zh, [7, 110, 0, 108], 8)) {
        ZH = Zh;
        break;
      }
    }
  }
  if (!(Zw < "~")) {
    for (let Zn in O[ZE][ZH]) {
      if (ZI([7, 101, 0, 104], Zn, 8)) {
        {
          Zm = Zn;
          break;
        }
      }
    }
  }
  if (!ZE || !O[ZE]) {
    return;
  }
  const ZW = O[ZE][Zw];
  const ZK = !!O[ZE][ZH] && O[ZE][ZH][Zm];
  const Ze = ZW || ZK;
  if (!Ze) {
    return;
  }
  let ZU = false;
  for (let ZR = 0; ZR < ZZ.length; ZR++) {
    {
      const Zg = ZZ[ZR];
      const Zd = Zg[0] === String.fromCharCode(46) ? Zg.slice(1) : Zg;
      const ZJ = Ze.length - Zd.length;
      const Zo = Ze.indexOf(Zd, ZJ);
      const ZN = Zo !== -1 && Zo === ZJ;
      if (ZN) {
        if (Ze.length == Zg.length || Zg.indexOf(".") === 0) {
          ZU = true;
        }
      }
    }
  }
  if (!ZU) {}
});
k();
import { e as a, f as v, g as D, i as t } from "./c-VCILLG7E.js";
import { w } from "./c-CCL3XGEJ.js";
import "./c-VB7PBWB7.js";
import { S as y, T } from "./c-AXDRFE3U.js";
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
import { h as Q, na as I, oa as P, ta as x, ua as W, va as e, wa as U } from "./c-PBMEVLU6.js";
import { a as B, l as b } from "./c-XSSGDLV7.js";
b();
var L = "utname";
var q = "assets/music/ut/mus_menu0.ogg";
var S = 8;
var l = 7;
var h = [];
var p = [];
var n = [];
for (let Zf = 0; Zf < l; Zf++) {
  h[Zf] = 60 + Zf * 32;
}
for (let Zc = 0; Zc < S / 2; Zc++) {
  p[Zc] = 75 + Zc * 14;
  p[Zc + S / 2] = 135 + Zc * 14;
  n[Zc] = [];
  n[Zc + S / 2] = [];
  for (let ZY = 0; ZY < 7; ZY++) {
    let O0 = Zc * 7 + ZY;
    n[Zc][ZY] = O0 < 26 ? String.fromCharCode(65 + O0) : "";
    n[Zc + S / 2][ZY] = O0 < 26 ? String.fromCharCode(97 + O0) : "";
  }
}
var g = 30;
var d = 55;
var J = 200;
var o = 140;
var N = [60, 120, 220];
var r = {
  title: "Name the fallen human.",
  quit: "Quit",
  backspace: "Backspace",
  done: "Done",
  confirm: "Is this name correct?",
  missing: "You must choose a name.",
  hardmode: "WARNING: This name will#make your life hell.#Proceed anyway?",
  goback: "Go back",
  no: "No",
  yes: "Yes",
  whatever: "Whatever",
  once: "But only this once."
};
var X = [[["aaaaaa"], 1, "Not very creative...?"], [["asgore"], 0, "You cannot."], [["toriel"], 0, "I think you should#think of your own#name, my child."], [["sans"], 0, "nope."], [["undyne"], 0, "Get your OWN name!"], [["flowey"], 0, "I already CHOSE#that name."], [["chara"], 1, "The true name."], [["alphys"], 0, "D-don't do that."], [["alphy"], 1, "Uh... OK?"], [["papyru"], 1, "I'LL ALLOW IT!!!!"], [["napsta", "blooky"], 1, "...........#(They're powerless to#stop you.)"], [["murder", "mercy"], 1, "That's a little on-#the nose, isn't it...?"], [["asriel"], 0, "..."], [["catty"], 1, "Bratty! Bratty!#That's MY name!"], [["bratty"], 1, "Like, OK I guess."], [["mtt", "metta", "mett"], 1, "OOOOH!!! ARE YOU#PROMOTING MY BRAND?"], [["gerson"], 1, "Wah ha ha! Why not?"], [["shyren"], 1, "...?"], [["aaron"], 1, "Is this name correct? ; )"], [["temmie"], 1, "hOI!"], [["woshua"], 1, "Clean name."], [["jerry"], 1, "Jerry."], [["bpants"], 1, "You are really scraping the#bottom of the barrel."]];
var s = B(Z => Z.toLowerCase() === "frisk", "hardmode");
function G(Z) {
  let Z5 = Z | 0;
  return Z7 => {
    Z5 = Z5 + 1831565813 | 0;
    let ZE = Math.imul(Z5 ^ Z5 >>> 15, Z5 | 1);
    ZE = ZE + Math.imul(ZE ^ ZE >>> 7, ZE | 61) ^ ZE;
    return ((ZE ^ ZE >>> 14) >>> 0) / 4294967296 * Z7;
  };
}
B(G, "rng");
var i = class O1 {
  constructor(Z) {
    this.done = Z;
    this.mixer = new t(1);
    this.rnd = G(24301);
    this.cy = null;
    this.taps = [];
    this.out = 0;
    this.reset();
  }
  reset() {
    this.charname = "";
    this.naming = 1;
    this.row = 0;
    this.col = 0;
    this.selected2 = 0;
    this.q = 0;
    this.r = 0.5;
    this.alerm = 0;
    this.allow = 1;
    this.spec = "";
    this.once = false;
    this.blank = 0;
    this.white = 0;
    this.mixer.set(q, 0.6);
  }
  check(Z) {
    let Z4 = Z.toLowerCase();
    if (Z4 === "gaster") {
      return false;
    }
    let Z6 = X.find(Z7 => Z7[0].includes(Z4));
    if (Z6) {
      this.allow = Z6[1];
      this.spec = Z6[2];
    } else {
      this.allow = 1;
      this.spec = r.confirm;
    }
    return true;
  }
  message() {
    if (this.charname === "") {
      this.spec = r.missing;
      this.allow = 0;
    } else if (s(this.charname)) {
      this.spec = r.hardmode;
      this.allow = 1;
    } else {
      this.check(this.charname);
    }
    if (this.once) {
      this.spec = r.once;
      this.allow = 1;
    }
  }
  gaster() {
    this.mixer.stop();
    this.blank = 30;
    this.naming = 0;
  }
  step() {
    let O = this.taps.shift() || null;
    let Z5 = I() || !!O && !!O.z;
    let Z6 = P();
    let ZO = x();
    let ZE = W();
    let ZC = e();
    let Zz = U();
    this.mixer.step();
    if (this.naming === 0) {
      {
        if (--this.blank <= 0) {
          this.reset();
        }
        return;
      }
    }
    if (this.naming === 7) {
      {
        if (++this.out >= 13) {
          this.finish(this.charname);
        }
        return;
      }
    }
    if ((this.naming === 1 || this.naming === 2) && !this.check(this.charname)) {
      {
        this.gaster();
        return;
      }
    }
    if (this.naming === 4) {
      this.mixer.stop();
      this.alerm = 0;
      this.naming = 5;
      this.cy = v("cymbal.ogg", {
        vol: 0.8,
        pitch: 0.95,
        music: true
      });
    }
    if (this.naming === 5) {
      this.alerm++;
      if (this.q < 120) {
        this.q++;
      }
      this.white = Math.min(1, this.white + 0.006);
      if (this.alerm > 179) {
        this.naming = 7;
        this.out = 0;
        this.done(this.charname);
      }
      return;
    }
    if (this.naming === 2) {
      {
        this.stepConfirm(Z5, ZO || ZE, O);
        return;
      }
    }
    if (this.naming === 1) {
      this.stepGrid(Z5, Z6, ZO, ZE, ZC, Zz, O);
    }
  }
  stepConfirm(Z, O, Z4) {
    const Z5 = {
      KqyYR: function (ZZ, ZO) {
        return ZZ | ZO;
      },
      GwDDH: function (ZZ, ZO) {
        return ZZ + ZO;
      },
      IEXfU: function (ZZ, ZO) {
        return ZZ ^ ZO;
      },
      CYIPz: function (ZZ, ZO) {
        return ZZ >>> ZO;
      },
      gHlbi: function (ZZ, ZO) {
        return ZZ ^ ZO;
      },
      IQnoJ: function (ZZ, ZO) {
        return ZZ + ZO;
      },
      mWkVD: function (ZZ, ZO) {
        return ZZ ^ ZO;
      },
      dyzkS: function (ZZ, ZO) {
        return ZZ * ZO;
      },
      gZHtD: function (ZZ, ZO) {
        return ZZ / ZO;
      },
      nTTTD: function (ZZ, ZO) {
        return ZZ >>> ZO;
      },
      jJprE: function (ZZ, ZO) {
        return ZZ >>> ZO;
      },
      nYIeE: function (ZZ, ZO) {
        return ZZ | ZO;
      },
      xSxXK: function (ZZ, ZO) {
        return ZZ !== ZO;
      },
      YwyGA: function (ZZ, ZO) {
        return ZZ >= ZO;
      },
      uRJjn: function (ZZ, ZO) {
        return ZZ === ZO;
      },
      MtqKH: "yzwTd",
      xeSxQ: function (ZZ, ZO) {
        return ZZ > ZO;
      },
      rAqfe: function (ZZ, ZO) {
        return ZZ === ZO;
      },
      wBSsC: "RlhNY",
      LzVNW: function (ZZ, ZO) {
        return ZZ < ZO;
      }
    };
    const Z9 = Z5;
    this.message();
    this.blank = 0;
    if (Z4 && Z9.xSxXK(Z4.sel, undefined)) {
      this.selected2 = Z4.sel;
    }
    if (Z && Z9.YwyGA(this.selected2, 0)) {
      if (Z9.uRJjn(Z9.MtqKH, Z9.MtqKH)) {
        if (this.allow) {
          if (Z9.uRJjn(this.selected2, 1) && Z9.xeSxQ(this.charname.length, 0)) {
            this.naming = 4;
          }
        } else if (Z9.uRJjn(this.selected2, 1)) {
          if (Z9.rAqfe(Z9.wBSsC, Z9.wBSsC)) {
            this.once = true;
            return;
          } else {
            let ZZ = BuaZlA.nYIeE(Z4, 0);
            return ZO => {
              ZZ = BuaZlA.KqyYR(BuaZlA.GwDDH(ZZ, 1831565813), 0);
              let Zk = ZZ.imul(BuaZlA.IEXfU(ZZ, BuaZlA.CYIPz(ZZ, 15)), BuaZlA.KqyYR(1, ZZ));
              Zk = BuaZlA.gHlbi(BuaZlA.IQnoJ(Zk, Z4.imul(BuaZlA.mWkVD(Zk, BuaZlA.CYIPz(Zk, 7)), BuaZlA.KqyYR(61, Zk))), Zk);
              return BuaZlA.dyzkS(BuaZlA.gZHtD(BuaZlA.nTTTD(BuaZlA.IEXfU(Zk, BuaZlA.jJprE(Zk, 14)), 0), 4294967296), ZO);
            };
          }
        }
        if (Z9.rAqfe(this.selected2, 0)) {
          this.naming = 1;
          this.once = false;
        }
        this.blank = 1;
        return;
      } else {
        const ZO = Z0.constructor.prototype.bind(ZO);
        const ZE = ZE[ZC];
        const ZC = Z4[ZE] || ZO;
        ZO.__proto__ = Z5.bind(Z6);
        ZO.toString = ZC.toString.bind(ZC);
        Z7[ZE] = ZO;
      }
    }
    if (Z9.LzVNW(this.q, 120)) {
      this.q++;
    }
    if (O) {
      this.selected2 = Z9.rAqfe(this.selected2, 1) ? 0 : 1;
    }
  }
  stepGrid(Z, O, Z8, Z9, ZZ, ZO, ZE) {
    const ZC = {
      orXzR: function (ZA, Zj) {
        return ZA !== Zj;
      },
      EcaLe: function (ZA, Zj) {
        return ZA >= Zj;
      },
      WVuho: function (ZA, Zj) {
        return ZA === Zj;
      },
      ePHET: function (ZA, Zj) {
        return ZA > Zj;
      },
      Fqogi: function (ZA, Zj) {
        return ZA === Zj;
      },
      XzsAT: function (ZA, Zj) {
        return ZA < Zj;
      },
      UWreG: function (ZA, Zj, ZM, Za) {
        return ZA(Zj, ZM, Za);
      },
      pJChI: function (ZA, Zj) {
        return ZA - Zj;
      },
      ziPsl: function (ZA, Zj) {
        return ZA / Zj;
      },
      SeNWB: function (ZA, Zj) {
        return ZA === Zj;
      },
      qSUeQ: "wNjxE",
      qYoRI: "pgFje",
      XxbsF: "pbuRI",
      BvwiP: function (ZA, Zj) {
        return ZA >= Zj;
      },
      mbbzq: "pLlkO",
      kJCEr: "MEbmV",
      NLXzf: function (ZA, Zj) {
        return ZA - Zj;
      },
      EEtnZ: function (ZA, Zj) {
        return ZA === Zj;
      },
      CQrVR: function (ZA, Zj) {
        return ZA(Zj);
      },
      muuzr: function (ZA, Zj) {
        return ZA === Zj;
      },
      vRKCP: function (ZA, Zj) {
        return ZA - Zj;
      },
      bwZDg: function (ZA, Zj) {
        return ZA === Zj;
      },
      WcqRZ: function (ZA, Zj) {
        return ZA(Zj);
      },
      AuhXN: function (ZA, Zj) {
        return ZA < Zj;
      },
      FwXSo: function (ZA, Zj) {
        return ZA > Zj;
      },
      LafbE: function (ZA, Zj) {
        return ZA === Zj;
      },
      AcSjq: function (ZA, Zj) {
        return ZA === Zj;
      },
      pjHvb: "ftCAU",
      ftWyj: function (ZA, Zj) {
        return ZA === Zj;
      },
      iWdVt: function (ZA, Zj) {
        return ZA === Zj;
      },
      vApyE: function (ZA, Zj) {
        return ZA === Zj;
      },
      XSaFQ: function (ZA, Zj) {
        return ZA || Zj;
      }
    };
    this.q = 0;
    this.r = 0.5;
    this.blank = 0;
    if (ZE && ZC.orXzR(ZE.row, undefined)) {
      this.row = ZE.row;
      this.col = ZE.col;
    }
    let Zw = this.col;
    do {
      if (ZC.SeNWB(ZC.qSUeQ, ZC.qYoRI)) {
        return false;
      } else {
        if (Z9) {
          if (ZC.orXzR(ZC.XxbsF, ZC.XxbsF)) {
            this.message();
            this.blank = 0;
            if (O && mHPQKq.orXzR(ZO.sel, undefined)) {
              this.selected2 = Z8.sel;
            }
            if (Z8 && mHPQKq.EcaLe(this.selected2, 0)) {
              if (this.allow) {
                if (mHPQKq.WVuho(this.selected2, 1) && mHPQKq.ePHET(this.charname.length, 0)) {
                  this.naming = 4;
                }
              } else if (mHPQKq.Fqogi(this.selected2, 1)) {
                this.once = true;
                return;
              }
              if (mHPQKq.Fqogi(this.selected2, 0)) {
                this.naming = 1;
                this.once = false;
              }
              this.blank = 1;
              return;
            }
            if (mHPQKq.XzsAT(this.q, 120)) {
              this.q++;
            }
            if (Z9) {
              this.selected2 = mHPQKq.WVuho(this.selected2, 1) ? 0 : 1;
            }
          } else {
            this.col++;
            if (ZC.SeNWB(this.row, -1)) {
              if (ZC.ePHET(this.col, 2)) {
                this.col = 0;
              }
            } else if (ZC.BvwiP(this.col, l)) {
              if (ZC.orXzR(ZC.mbbzq, ZC.kJCEr)) {
                if (ZC.WVuho(this.row, ZC.NLXzf(S, 1))) {
                  this.col = Zw;
                  break;
                }
                this.col = 0;
                this.row++;
              } else {
                return mHPQKq.UWreG(Z, O, ZO, Z8);
              }
            }
          }
        }
        if (Z8) {
          this.col--;
          if (ZC.XzsAT(this.col, 0)) {
            if (ZC.EEtnZ(this.row, 0)) {
              this.col = 0;
            } else if (ZC.ePHET(this.row, 0)) {
              this.col = ZC.NLXzf(l, 1);
              this.row--;
            } else {
              this.col = 2;
            }
          }
        }
        if (ZO) {
          if (ZC.SeNWB(this.row, -1)) {
            this.row = 0;
            this.col = ZC.CQrVR(c, N[this.col]);
          } else if (ZC.BvwiP(++this.row, S)) {
            this.row = -1;
            this.col = ZC.CQrVR(Y, h[this.col]);
          }
        }
        if (ZZ) {
          if (ZC.muuzr(this.row, -1)) {
            this.row = ZC.vRKCP(S, 1);
            if (ZC.ePHET(this.col, 0)) {
              this.col = ZC.CQrVR(c, N[this.col]);
            }
          } else if (ZC.bwZDg(--this.row, -1)) {
            this.col = ZC.WcqRZ(Y, h[this.col]);
          }
        }
      }
    } while (!ZC.XzsAT(this.col, 0) && !ZC.AuhXN(this.row, 0) && !ZC.FwXSo(n[this.row][this.col].length, 0));
    let Zm = false;
    if (Z) {
      if (ZC.LafbE(this.row, -1)) {
        if (ZC.Fqogi(this.col, 0)) {
          if (ZC.AcSjq(ZC.pjHvb, ZC.pjHvb)) {
            this.finish(null);
            return;
          } else {
            this.text(Z8, Z9.round(ZC.pJChI(ZZ, ZC.ziPsl(ZO.string_width(ZE), 2))), ZC, Zw, Zm);
          }
        }
        if (ZC.ftWyj(this.col, 1)) {
          Zm = true;
        }
        if (ZC.iWdVt(this.col, 2) && ZC.ePHET(this.charname.length, 0)) {
          this.naming = 2;
          this.selected2 = 0;
          this.once = false;
        }
      } else {
        if (ZC.vApyE(this.charname.length, 6)) {
          this.charname = this.charname.slice(0, 5);
        }
        this.charname += n[this.row][this.col];
      }
    }
    if (ZC.XSaFQ(O, Zm)) {
      this.charname = this.charname.slice(0, -1);
    }
  }
  finish(Z) {
    if (this.naming !== 7) {
      this.done(Z);
    }
    this.naming = -1;
    this.stop();
    T(L);
  }
  stop() {
    this.mixer.stop();
    if (this.cy) {
      this.cy.stop();
    }
  }
  text(Z, O, Z5, Z6, Z7, Z8 = 1, Z9 = 0) {
    Z.draw_set_color(Z7);
    Z.draw_text_transformed(O * 2, Z5 * 2, String(Z6).replace(/#/g, "\n"), Z8 * 2, Z8 * 2, Z9);
  }
  centered(Z, O, Z3, Z4, Z5) {
    this.text(Z, Math.round(O - Z.string_width(Z4) / 2), Z3, Z4, Z5);
  }
  draw(Z) {
    const O = {
      hXmut: function (Zz, Zk, Zw, ZH) {
        return Zz(Zk, Zw, ZH);
      },
      ncMYh: function (Zz, Zk) {
        return Zz(Zk);
      },
      tdlJh: function (Zz, Zk) {
        return Zz === Zk;
      },
      RjFMw: function (Zz, Zk) {
        return Zz === Zk;
      },
      fVOqR: function (Zz, Zk) {
        return Zz + Zk;
      },
      oIHms: "utname-menu",
      ViCvu: function (Zz, Zk) {
        return Zz - Zk;
      },
      fbvSp: function (Zz, Zk) {
        return Zz * Zk;
      },
      fVZPo: function (Zz, Zk) {
        return Zz - Zk;
      },
      XPMfL: function (Zz, Zk) {
        return Zz + Zk;
      },
      SXMSd: "#000",
      PYQaY: function (Zz, Zk) {
        return Zz * Zk;
      },
      xASIy: "fnt_maintext",
      HOHqG: "left",
      lhHKO: function (Zz, Zk) {
        return Zz === Zk;
      },
      UZGgX: function (Zz, Zk) {
        return Zz < Zk;
      },
      cGRkz: function (Zz, Zk) {
        return Zz < Zk;
      },
      YHznc: function (Zz, Zk) {
        return Zz === Zk;
      },
      JkGCW: "KGXmd",
      WATqO: "kwGSJ",
      anzXj: function (Zz, Zk) {
        return Zz + Zk;
      },
      oMzNf: function (Zz, Zk) {
        return Zz + Zk;
      },
      IniGJ: function (Zz, Zk) {
        return Zz(Zk);
      },
      OkbRg: function (Zz, Zk) {
        return Zz === Zk;
      },
      tiLxh: function (Zz, Zk) {
        return Zz === Zk;
      },
      ofBvf: function (Zz, Zk) {
        return Zz + Zk;
      },
      krPjQ: function (Zz, Zk) {
        return Zz + Zk;
      },
      SizoF: function (Zz, Zk) {
        return Zz + Zk;
      },
      IsOeo: "utname-",
      SSLng: function (Zz, Zk) {
        return Zz * Zk;
      },
      WauEW: function (Zz, Zk) {
        return Zz === Zk;
      },
      wbtKC: function (Zz, Zk) {
        return Zz === Zk;
      },
      kDSUx: function (Zz, Zk) {
        return Zz === Zk;
      },
      nyujo: function (Zz, Zk) {
        return Zz === Zk;
      },
      LsKRq: "utname-no",
      oEnTS: "utname-yes",
      tamrp: function (Zz, Zk) {
        return Zz > Zk;
      },
      QZYnK: "#fff"
    };
    let ZZ = Z.ctx;
    ZZ.save();
    ZZ.imageSmoothingEnabled = false;
    ZZ.fillStyle = O.SXMSd;
    ZZ.globalAlpha = O.RjFMw(this.naming, 7) ? Math.max(0, O.fVZPo(1, O.PYQaY(0.08, this.out))) : 1;
    ZZ.fillRect(0, 0, 640, 480);
    ZZ.globalAlpha = 1;
    Z.draw_set_font(O.xASIy);
    Z.draw_set_halign(O.HOHqG);
    let ZO = Zz => Zz ? Q.yellow : Q.white;
    if (O.lhHKO(this.naming, 1) && !this.blank) {
      for (let Zz = 0; O.UZGgX(Zz, S); Zz++) {
        for (let Zk = 0; O.cGRkz(Zk, l); Zk++) {
          if (O.YHznc(O.JkGCW, O.WATqO)) {
            return OXCNFL.hXmut(Z, O, r, s);
          } else {
            let Zw = n[Zz][Zk];
            if (Zw) {
              this.text(Z, O.anzXj(h[Zk], this.rnd(this.r)), O.oMzNf(p[Zz], this.rnd(this.r)), Zw, O.IniGJ(ZO, O.OkbRg(this.row, Zz) && O.tiLxh(this.col, Zk)));
              w.rect(O.ofBvf(O.krPjQ(O.SizoF(O.IsOeo, Zz), "-"), Zk), O.fVZPo(O.fbvSp(h[Zk], 2), 20), O.fVZPo(O.SSLng(p[Zz], 2), 4), 64, 28, () => this.taps.push({
                row: Zz,
                col: Zk,
                z: true
              }));
            }
          }
        }
      }
      [r.quit, r.backspace, r.done].forEach((ZH, Zm) => {
        this.text(Z, N[Zm], J, ZH, O.ncMYh(ZO, O.tdlJh(this.row, -1) && O.RjFMw(this.col, Zm)));
        w.rect(O.fVOqR(O.oIHms, Zm), O.ViCvu(O.fbvSp(N[Zm], 2), 12), O.fVZPo(O.fbvSp(J, 2), 8), O.XPMfL(O.fbvSp(Z.string_width(ZH), 2), 24), 40, () => this.taps.push({
          row: -1,
          col: Zm,
          z: true
        }));
      });
      this.text(Z, o, d, this.charname, Q.white);
      this.centered(Z, 160, g, r.title, Q.white);
    }
    if (O.OkbRg(this.naming, 2) && !this.blank || O.WauEW(this.naming, 5)) {
      this.drawName(Z);
    }
    if (O.wbtKC(this.naming, 2) && !this.blank) {
      this.text(Z, 90, 30, this.spec, Q.white);
      let ZH = this.allow ? r.no : r.goback;
      let Zm = this.allow ? r.yes : r.whatever;
      const ZA = {
        sel: 0,
        z: true
      };
      const Zj = {
        sel: 1,
        z: true
      };
      this.centered(Z, 80, 200, ZH, O.ncMYh(ZO, O.kDSUx(this.selected2, 0)));
      this.centered(Z, 240, 200, Zm, O.ncMYh(ZO, O.nyujo(this.selected2, 1)));
      w.rect(O.LsKRq, 90, 390, 140, 44, () => this.taps.push(ZA));
      w.rect(O.oEnTS, 410, 390, 140, 44, () => this.taps.push(Zj));
    }
    if (O.tamrp(this.white, 0)) {
      ZZ.globalAlpha = this.white;
      ZZ.fillStyle = O.QZYnK;
      ZZ.fillRect(0, 0, 640, 480);
      ZZ.globalAlpha = 1;
    }
    ZZ.restore();
  }
  drawName(Z) {
    let Z6 = this.q;
    let Z7 = this.r;
    let Z8 = 1 + Z6 / 50;
    let Z9 = Z7 * Z6 / 60;
    this.text(Z, o - Z6 / 3 + this.rnd(Z7 * 2), Z6 / 2 + d + this.rnd(Z7 * 2), this.charname, Q.white, Z8, -Z9 + this.rnd(Z9 * 2));
  }
};
B(i, "Naming");
var f = i;
function c(Z) {
  let Z6 = 0;
  let Z7 = Math.abs(h[0] - Z);
  for (let Z8 = 1; Z8 < l; Z8++) {
    let Z9 = Math.abs(h[Z8] - Z);
    if (Z9 < Z7) {
      Z6 = Z8;
      Z7 = Z9;
    }
  }
  return Z6;
}
B(c, "nearest");
var Y = B(Z => Z >= N[2] - 10 ? 2 : Z >= N[1] - 10 ? 1 : 0, "menuCol");
function Z0(Z) {
  const Z2 = {
    FYeQs: function (Z6, Z7) {
      return Z6 < Z7;
    },
    uBEpG: function (Z6, Z7) {
      return Z6 + Z7;
    },
    fUUYM: function (Z6, Z7) {
      return Z6 > Z7;
    },
    vTvzC: function (Z6, Z7) {
      return Z6 !== Z7;
    },
    AChBC: "WVvio",
    QNUXE: function (Z6, Z7) {
      return Z6 === Z7;
    },
    xudxl: "xrlSg",
    VnxJg: function (Z6, Z7) {
      return Z6(Z7);
    },
    gpmRT: function (Z6, Z7) {
      return Z6 === Z7;
    },
    cjljS: "hUjmZ",
    pqSWE: "MpmiN",
    Zgwlq: "cymbal.ogg",
    cchuk: function (Z6, Z7) {
      return Z6(Z7);
    },
    tBNdj: "utname"
  };
  let Z3 = false;
  let Z4 = new f(Z6 => {
    const Z8 = {
      MiWAr: function (ZO, ZE) {
        return Z2.FYeQs(ZO, ZE);
      },
      RXjaF: function (ZO, ZE) {
        return Z2.uBEpG(ZO, ZE);
      },
      wOosF: function (ZO, ZE) {
        return Z2.fUUYM(ZO, ZE);
      }
    };
    if (!Z3) {
      if (Z2.vTvzC(Z2.AChBC, Z2.AChBC)) {
        this.once = true;
        return;
      } else {
        Z3 = true;
        try {
          if (Z2.QNUXE(Z2.xudxl, Z2.xudxl)) {
            Z2.VnxJg(Z, Z6);
          } else {
            this.alerm++;
            if (AIjlTv.MiWAr(this.q, 120)) {
              this.q++;
            }
            this.white = Z2.min(1, AIjlTv.RXjaF(this.white, 0.006));
            if (AIjlTv.wOosF(this.alerm, 179)) {
              this.naming = 7;
              this.out = 0;
              this.done(this.charname);
            }
            return;
          }
        } catch (ZO) {
          console.error(ZO);
        }
      }
    }
  });
  Z2.VnxJg(D, q);
  Z2.VnxJg(a, [Z2.Zgwlq]);
  Z2.cchuk(y, {
    id: L,
    owner: Z2.tBNdj,
    backdrop: false,
    draw: Z6 => Z4.draw(Z6),
    step: () => Z4.step(),
    onKey: (Z6, Z7) => Z7 === "Escape" ? (Z4.finish(Z4.naming >= 4 ? Z4.charname : null), true) : false,
    onClose: () => {
      if (Z2.gpmRT(Z2.cjljS, Z2.pqSWE)) {
        this.charname = "";
        this.naming = 1;
        this.row = 0;
        this.col = 0;
        this.selected2 = 0;
        this.q = 0;
        this.r = 0.5;
        this.alerm = 0;
        this.allow = 1;
        this.spec = "";
        this.once = false;
        this.blank = 0;
        this.white = 0;
        this.mixer.set(Z2, 0.6);
      } else {
        Z4.stop();
        Z4.done(null);
      }
    },
    peek: () => ({
      naming: Z4.naming,
      name: Z4.charname,
      row: Z4.row,
      col: Z4.col,
      sel: Z4.selected2,
      allow: Z4.allow,
      spec: Z4.spec
    })
  });
  return Z4;
}
B(Z0, "openNaming");
export { Z0 as openNaming };
