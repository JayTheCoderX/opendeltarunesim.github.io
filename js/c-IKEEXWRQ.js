const L = function () {
  let Zs = true;
  return function (ZG, Zp) {
    const z1 = {
      BsRLa: function (z3, z4, z5, z6) {
        return z3(z4, z5, z6);
      },
      qxDWs: function (z3, z4) {
        return z3 === z4;
      },
      iINVa: "DWcPE",
      zRpTf: "gJhgP"
    };
    const z2 = Zs ? function () {
      const z5 = {
        ZUWah: function (z7, z8, z9, zZ) {
          return z1.BsRLa(z7, z8, z9, zZ);
        }
      };
      if (Zp) {
        if (z1.qxDWs(z1.iINVa, z1.zRpTf)) {
          return z5.ZUWah(z1, z2, z5, d);
        } else {
          const z7 = Zp.apply(ZG, arguments);
          Zp = null;
          return z7;
        }
      }
    } : function () {};
    Zs = false;
    return z2;
  };
}();
const l = L(this, function () {
  const ZK = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Zs = new RegExp("[WISYYqIzZUzTkfkTPRWDIFfCzXJAXfKHjPHKUXIIWXzWRCEJPDxJfqfOHQAzBFYzLIDkKxTRxqzxSJkVWMxMHJMXSBYbJDGSyRJKNOAkKNxSSjfqUNVbPPQTTMNIAILTKkZyEkTARDVPNNRzCFyRMjOWFKNEBzMxEOkYPKKCZPkfVBRkCjKNOjPVfqSAWbMxHzbL]", "g");
  const ZG = "lWISYoYqIczZUazlhosTkfktTPRW;1DIFf27.0.C0.1zX;deltarunJesAiXmf.KHjPcHoKUXIImWXz;WwwwRCE.JdPDelxtaJfqrunfOesiHQAmzB.FcYozmLID;kKxdTrsiRmxqz.xlSoJcakVWlMxhMosHt;.deJltaMXSruBYbJDGneSsyRJKiNOmA.kpagKNexSsSj.devfqUNVbPPQTTMNIAILTKkZyEkTARDVPNNRzCFyRMjOWFKNEBzMxEOkYPKKCZPkfVBRkCjKNOjPVfqSAWbMxHzbL".replace(Zs, "").split(";");
  let Zp;
  let ZH;
  let z0;
  let z1;
  const z2 = function (zI, zo, zh) {
    if (zI.length != zo) {
      return false;
    }
    for (let zA = 0; zA < zo; zA++) {
      for (let zx = 0; zx < zh.length; zx += 2) {
        if (zA == zh[zx] && zI.charCodeAt(zA) != zh[zx + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const z4 = function (zI, zo, zh) {
    return z2(zo, zh, zI);
  };
  const z5 = function (zI, zo, zh) {
    return z4(zo, zI, zh);
  };
  const z6 = function (zI, zo, zh) {
    return z5(zo, zh, zI);
  };
  for (let zI in ZK) {
    {
      if (z2(zI, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          Zp = zI;
          break;
        }
      }
    }
  }
  for (let zt in ZK[Zp]) {
    if (z6(6, zt, [5, 110, 0, 100])) {
      {
        ZH = zt;
        break;
      }
    }
  }
  for (let zw in ZK[Zp]) {
    if (z5(zw, [7, 110, 0, 108], 8)) {
      z0 = zw;
      break;
    }
  }
  if (!(ZH < "~")) {
    for (let zk in ZK[Zp][z0]) {
      {
        if (z4([7, 101, 0, 104], zk, 8)) {
          {
            z1 = zk;
            break;
          }
        }
      }
    }
  }
  if (!Zp || !ZK[Zp]) {
    return;
  }
  const z7 = ZK[Zp][ZH];
  const z9 = !!ZK[Zp][z0] && ZK[Zp][z0][z1];
  const zZ = z7 || z9;
  if (!zZ) {
    return;
  }
  let zz = false;
  for (let zE = 0; zE < ZG.length; zE++) {
    const zd = ZG[zE];
    const zu = zd[0] === String.fromCharCode(46) ? zd.slice(1) : zd;
    const zJ = zZ.length - zu.length;
    const zg = zZ.indexOf(zu, zJ);
    const zf = zg !== -1 && zg === zJ;
    if (zf) {
      if (zZ.length == zd.length || zd.indexOf(".") === 0) {
        zz = true;
      }
    }
  }
});
l();
const C = function () {
  let ZG = true;
  return function (Zp, ZH) {
    const z2 = {
      MOlCS: function (z4, z5, z6, z7) {
        return z4(z5, z6, z7);
      },
      Mtxlj: function (z4, z5) {
        return z4(z5);
      },
      MFDDu: "ut_",
      HTIUq: function (z4, z5) {
        return z4 == z5;
      },
      NXsPo: "function",
      bWogA: function (z4, z5) {
        return z4 === z5;
      },
      GifQn: "rkTou",
      ZRKqb: "YORmp",
      qxVvn: "kUHwx",
      PwiYm: "AxUCJ"
    };
    {
      const z4 = ZG ? function () {
        const z7 = {
          rVQqj: function (z9, zZ) {
            return z2.Mtxlj(z9, zZ);
          },
          pGMBS: z2.MFDDu,
          hmJGc: function (z9, zZ) {
            return z2.HTIUq(z9, zZ);
          },
          rYJPQ: z2.NXsPo
        };
        if (z2.bWogA(z2.GifQn, z2.ZRKqb)) {
          let z9 = z7.rVQqj(ZZ, Zz);
          if (!z9 || !z9.startsWith(z7.pGMBS)) {
            return null;
          }
          let [zZ, zz, zI, zo, zh] = ZI[z9];
          Zo.lv = zZ;
          Zh.xp = ZL[zZ] || 0;
          if (Zl && z7.hmJGc(typeof Zi.scr_weaponeq, z7.rYJPQ) && z7.hmJGc(typeof ZY.scr_armoreq, z7.rYJPQ)) {
            ZC.scr_weaponeq.call({}, -1, zz);
            ZW.scr_armoreq.call({}, -1, zo);
          } else {
            ZD.weapon = zz;
            Zn.wstrength = zI;
            Zq.armor = zo;
            ZN.adef = zh;
          }
          let zL = z7.rVQqj(Zj, zZ);
          Zt.maxhp = zL.maxhp;
          ZA.hp = zL.maxhp;
          Zx.at = zL.at;
          Zm.df = zL.df;
          Zw.canonState = z9;
          return z9;
        } else if (ZH) {
          if (z2.bWogA(z2.qxVvn, z2.PwiYm)) {
            return z2.MOlCS(z2, Q, z4, z7);
          } else {
            const zl = ZH.apply(Zp, arguments);
            ZH = null;
            return zl;
          }
        }
      } : function () {};
      ZG = false;
      return z4;
    }
  };
}();
const W = C(this, function () {
  const ZK = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Zs = ZK.console = ZK.console || {};
  const ZG = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let z0 = 0; z0 < ZG.length; z0++) {
    {
      const z1 = C.constructor.prototype.bind(C);
      const z2 = ZG[z0];
      const z3 = Zs[z2] || z1;
      z1.__proto__ = C.bind(C);
      z1.toString = z3.toString.bind(z3);
      Zs[z2] = z1;
    }
  }
});
W();
import { C as D, F as n, g as q, w as N, x as j } from "./c-ZQQWH6UG.js";
import { a, l as t } from "./c-XSSGDLV7.js";
t();
t();
var b = {
  "1": ["Monster Candy", "MnstrCndy", "Heals 10 HP"],
  "2": ["Croquet Roll", "CroqtRoll", "Heals 15 HP"],
  "3": ["Stick", "Stick", "Weapon AT 0"],
  "4": ["Bandage", "Bandage", "Heals 10 HP"],
  "5": ["Rock Candy", "RockCandy", "Heals 1 HP"],
  "6": ["Pumpkin Rings", "PunkRings", "Heals 8 HP"],
  "7": ["Spider Donut", "SpidrDont", "Heals 12 HP"],
  "8": ["Stoic Onion", "StocOnoin", "Heals 5 HP"],
  "9": ["Ghost Fruit", "GhostFrut", "Heals 16 HP"],
  "10": ["Spider Cider", "SpidrCidr", "Heals 24 HP"],
  "11": ["Butterscotch Pie", "ButtsPie", "All HP"],
  "12": ["Faded Ribbon", "Ribbon", "Armor DF 3"],
  "13": ["Toy Knife", "Toy Knife", "Weapon AT 3"],
  "14": ["Tough Glove", "TuffGlove", "Weapon AT 5"],
  "15": ["Manly Bandanna", "Mandanna", "Armor DF 7"],
  "16": ["Snowman Piece", "SnowPiece", "Heals 45 HP"],
  "17": ["Nice Cream", "NiceCream", "Heals 15 HP"],
  "18": ["Puppydough Icecream", "PDIceCram", "Heals 28 HP"],
  "19": ["Bisicle", "Bisicle", "Heals 11 HP"],
  "20": ["Unisicle", "Unisicle", "Heals 11 HP"],
  "21": ["Cinnamon Bun", "CinnaBun", "Heals 22 HP"],
  "22": ["Temmie Flakes", "TemFlakes", "Heals 2 HP"],
  "23": ["Abandoned Quiche", "Ab Quiche", "Heals 34 HP"],
  "24": ["Old Tutu", "Old Tutu", "Armor DF 10"],
  "25": ["Ballet Shoes", "BallShoes", "Wpn AT 7"],
  "26": ["Punch Card", "PunchCard", "Battle Item"],
  "27": ["Annoying Dog", "Annoy Dog", "Dog"],
  "28": ["Dog Salad", "Dog Salad", "Heals ?? HP"],
  "29": ["Dog Residue", "DogResidu", "Dog Item"],
  "30": ["Dog Residue", "DogResidu", "Dog Item"],
  "31": ["Dog Residue", "DogResidu", "Dog Item"],
  "32": ["Dog Residue", "DogResidu", "Dog Item"],
  "33": ["Dog Residue", "DogResidu", "Dog Item"],
  "34": ["Dog Residue", "DogResidu", "Dog Item"],
  "35": ["Astronaut Food", "AstroFood", "Heals 21 HP"],
  "36": ["Instant Noodles", "InstaNood", "Heals HP"],
  "37": ["Crab Apple", "CrabApple", "Heals 18 HP"],
  "38": ["Hot Dog...?", "Hot Dog", "Heals 20 HP"],
  "39": ["Hot Cat", "Hot Cat", "Heals 21 HP"],
  "40": ["Glamburger", "GlamBurg", "Heals 27 HP"],
  "41": ["Sea Tea", "Sea Tea", "Heals 10 HP"],
  "42": ["Starfait", "Starfait", "Heals 14 HP"],
  "43": ["Legendary Hero", "Leg.Hero", "Heals 40 HP"],
  "44": ["Cloudy Glasses", "ClodGlass", "Armor DF 6"],
  "45": ["Torn Notebook", "TornNotbo", "Weapon AT 2"],
  "46": ["Stained Apron", "StainApro", "Armor DF 11"],
  "47": ["Burnt Pan", "Burnt Pan", "Weapon AT 10"],
  "48": ["Cowboy Hat", "CowboyHat", "Armor DF 12"],
  "49": ["Empty Gun", "Empty Gun", "Weapon AT 12"],
  "50": ["Heart Locket", "<--Locket", "Armor DF 15"],
  "51": ["Worn Dagger", "WornDG", "Weapon AT 15"],
  "52": ["Real Knife", "RealKnife", "Weapon AT 99"],
  "53": ["The Locket", "TheLocket", "Armor DF 99"],
  "54": ["Bad Memory", "BadMemory", "Hurts 1 HP"],
  "55": ["Dream", "LastDream", "Heals 12 HP"],
  "56": ["Undyne's Letter", "UndynLetr", "Unique"],
  "57": ["Undyne Letter EX", "UndynLtrX", "Unique"],
  "58": ["Popato Chisps", "PT Chisps", "Heals 13 HP"],
  "59": ["Junk Food", "Junk Food", "Heals 17 HP"],
  "60": ["Mystery Key", "MystryKey", "Unique"],
  "61": ["Face Steak", "FaceSteak", "Heals 60 HP"],
  "62": ["Hush Puppy", "HushPupe", "Heals 65 HP"],
  "63": ["Snail Pie", "Snail Pie", "Heals Some HP"],
  "64": ["temy armor", "Temmie AR", "Armor DF 20"]
};
var y = {
  "3": 0,
  "13": 3,
  "14": 5,
  "25": 7,
  "45": 2,
  "47": 10,
  "49": 12,
  "51": 15,
  "52": 99
};
var M = {
  "4": 0,
  "12": 3,
  "15": 7,
  "24": 10,
  "44": 5,
  "46": 11,
  "48": 12,
  "50": 15,
  "53": 99,
  "64": 20
};
var r = {
  "48": 5,
  "64": 10
};
const Q = {
  "1": [7],
  "2": [4],
  "3": [3, 2],
  "4": [2, 8, 9]
};
const T = {
  party: {
    "1": [120, 12, 2, 0, 1, 1, 1],
    "2": [140, 16, 2, 1, 2, 1, 1],
    "3": [100, 10, 2, 9, 3, 1, 4],
    "4": [90, 3, 1, 11, 12, 14, 22]
  },
  spell: Q
};
const d = {
  "1": [7],
  "2": [4, 11],
  "3": [3, 2]
};
const J = {
  party: {
    "1": [160, 14, 2, 0, 16, 1, 10],
    "2": [190, 18, 2, 2, 17, 1, 10],
    "3": [140, 12, 2, 11, 18, 1, 10]
  },
  spell: d,
  weaponAT: {
    "18": 3
  }
};
const f = {
  "1": [7],
  "2": [4, 11],
  "3": [3, 2],
  "4": [2, 8, 9]
};
const S = {
  party: {
    "1": [200, 17, 2, 0, 23, 25, 10],
    "2": [230, 22, 2, 3, 24, 25, 10],
    "3": [180, 15, 2, 14, 25, 25, 10],
    "4": [90, 3, 1, 11, 12, 14, 22]
  },
  spell: f
};
const e = {
  "1": {
    party: {
      "1": [90, 10, 2, 0, 1, 0, 0],
      "2": [110, 14, 2, 1, 2, 0, 0],
      "3": [70, 8, 2, 7, 3, 0, 0]
    },
    spell: {
      "1": [7],
      "2": [4],
      "3": [3, 2]
    }
  },
  "2": T,
  "3": J,
  "4": S,
  "5": {
    party: {
      "1": [240, 17, 2, 0, 53, 25, 25],
      "2": [290, 22, 2, 3, 24, 25, 25],
      "3": [210, 15, 2, 14, 25, 25, 25],
      "4": [90, 3, 1, 11, 12, 14, 22]
    },
    spell: {
      "1": [7],
      "2": [4, 11, 13],
      "3": [3, 2, 12],
      "4": [2, 8, 9]
    }
  }
};
var p = e;
var H = {
  ut_r0: [1, 3, 0, 4, 0],
  ut_r1: [1, 13, 3, 12, 3],
  ut_sd: [1, 14, 5, 15, 7],
  ut_wf: [1, 25, 7, 24, 10],
  ut_hl: [1, 47, 10, 46, 11],
  ut_nh: [1, 51, 15, 50, 15],
  ut_g9: [9, 13, 3, 12, 3],
  ut_g10: [10, 25, 7, 24, 10],
  ut_g15: [15, 47, 10, 46, 11],
  ut_g19: [19, 52, 99, 53, 99]
};
var Z0 = [[91, 91, "ut_g10"], [92, 92, "ut_g10"], [93, 93, "ut_g9"], [94, 94, "ut_g15"], [95, 95, "ut_g19"], [-1000000000, 21, "ut_r0"], [120, 134, "ut_r0"], [22, 22, "ut_r1"], [23, 36, "ut_sd"], [40, 46, "ut_sd"], [53, 55, "ut_sd"], [135, 135, "ut_sd"], [47, 47, "ut_wf"], [58, 58, "ut_wf"], [48, 52, "ut_wf"], [57, 57, "ut_wf"], [69, 75, "ut_wf"], [77, 79, "ut_wf"], [56, 56, "ut_hl"], [59, 68, "ut_hl"], [76, 76, "ut_hl"], [80, 80, "ut_hl"], [81, 81, "ut_hl"], [140, 140, "ut_hl"], [82, 90, "ut_nh"], [100, 100, "ut_nh"], [101, 101, "ut_nh"], [255, 255, "ut_nh"], [256, 256, "ut_nh"]];
var Z1 = {
  utflowey: "ut_nh"
};
var Z2 = {
  jevil: "dr1",
  dummy: "dr1",
  enc2: "dr1",
  enc4: "dr1",
  enc5: "dr1",
  enc6: "dr1",
  enc7: "dr1",
  enc8: "dr1",
  enc9: "dr1",
  enc12: "dr1",
  enc13: "dr1",
  enc14: "dr1",
  enc15: "dr1",
  enc16: "dr1",
  enc17: "dr1",
  enc18: "dr1",
  enc19: "dr1",
  enc20: "dr1",
  enc21: "dr1",
  enc22: "dr1",
  enc23: "dr1",
  enc24: "dr1",
  enc27: "dr1",
  enc28: "dr1",
  enc29: "dr1",
  enc30: "dr1",
  enc31: "dr1",
  enc32: "dr1",
  enc33: "dr1",
  enc40: "dr1",
  cut4: "dr1",
  cut8: "dr1",
  cut17: "dr1",
  cut_clubsenemy_old: "dr1",
  ch2enc50: "dr2",
  ch2enc51: "dr2",
  ch2enc52: "dr2",
  ch2enc53: "dr2",
  ch2enc54: "dr2",
  ch2enc55: "dr2",
  ch2enc56: "dr2",
  ch2enc57: "dr2",
  ch2enc58: "dr2",
  ch2enc59: "dr2",
  ch2enc59sg: "dr2sg",
  ch2enc60: "dr2",
  ch2enc61: "dr2",
  ch2enc61sg: "dr2sg",
  ch2enc62: "dr2",
  ch2enc63: "dr2",
  ch2enc64: "dr2",
  ch2enc65: "dr2",
  ch2enc66: "dr2",
  ch2enc67: "dr2",
  ch2enc68: "dr2",
  ch2enc69: "dr2",
  ch2enc70: "dr2",
  ch2enc71: "dr2",
  ch2enc72: "dr2",
  ch2enc73: "dr2",
  ch2enc74: "dr2",
  ch2enc75: "dr2",
  ch2enc76: "dr2",
  ch2enc77: "dr2",
  ch2enc78: "dr2",
  ch2enc79: "dr2",
  ch2enc80: "dr2",
  ch2enc81: "dr2",
  ch2enc82: "dr2",
  ch2enc82sg: "dr2sg",
  ch2enc83: "dr2",
  ch2enc84: "dr2",
  ch2enc85: "dr2",
  ch2enc86: "dr2",
  ch2enc87: "dr2",
  ch2enc88: "dr2",
  ch2enc89: "dr2",
  ch2enc90: "dr2",
  ch2enc91: "dr2",
  ch2enc92: "dr2",
  ch2enc93: "dr2",
  ch2enc94: "dr2",
  ch2enc95: "dr2",
  ch2enc96: "dr2",
  ch2enc97: "dr2",
  ch2enc98: "dr2",
  ch2enc99: "dr2",
  ch2enc100: "dr2",
  ch2enc101: "dr2",
  ch2enc102: "dr2",
  ch2cut_debug_swatchling: "dr2",
  ch2cut_placeholderenemy: "dr2",
  ch2cut_ralseienemy: "dr2",
  ch2cut_rouxls_enemy_old_copy: "dr2",
  ch2cut41: "dr2",
  ch3enc110: "dr3",
  ch3enc111: "dr3",
  ch3enc112: "dr3",
  ch3enc113: "dr3",
  ch3enc114: "dr3",
  ch3enc115: "dr3",
  ch3enc116: "dr3",
  ch3enc117: "dr3",
  ch3enc118: "dr3",
  ch3enc119: "dr3",
  ch3enc120: "dr3",
  ch3enc121: "dr3",
  ch3enc122: "dr3",
  ch3enc123: "dr3",
  ch3enc124: "dr3",
  ch3enc125: "dr3",
  ch3enc126: "dr3",
  ch3enc127: "dr3",
  ch3enc128: "dr3",
  ch3enc129: "dr3",
  ch3enc130: "dr3",
  ch3enc131: "dr3",
  ch3enc132: "dr3",
  ch3enc133: "dr3",
  ch3enc134: "dr3",
  ch3enc135: "dr3",
  ch3enc136: "dr3",
  ch3enc137: "dr3",
  ch3enc138: "dr3",
  ch3enc139: "dr3",
  ch3enc140: "dr3",
  ch3enc141: "dr3",
  ch3tv_cooking: "dr3",
  ch3tv_music: "dr3",
  ch3tv_lightemup: "dr3",
  ch3tv_cowboy: "dr3",
  ch3tv_cowboy_hard: "dr3",
  ch3tv_kaiju: "dr3",
  ch3rhythm: "dr3",
  ch4enc150: "dr4",
  ch4enc151: "dr4",
  ch4enc152: "dr4",
  ch4enc153: "dr4",
  ch4enc154: "dr4",
  ch4enc155: "dr4",
  ch4enc156: "dr4",
  ch4enc157: "dr4",
  ch4enc158: "dr4",
  ch4enc159: "dr4",
  ch4enc160: "dr4",
  ch4enc161: "dr4",
  ch4enc162: "dr4",
  ch4enc163: "dr4",
  ch4enc164: "dr4",
  ch4enc165: "dr4",
  ch4enc166: "dr4",
  ch4enc167: "dr4",
  ch4enc168: "dr4",
  ch4enc169: "dr4",
  ch4enc170: "dr4",
  ch4enc171: "dr4",
  ch4enc172: "dr4",
  ch4enc173: "dr4",
  ch4enc174: "dr4",
  ch4enc175: "dr4",
  ch4enc176: "dr4",
  ch4enc177: "dr4",
  ch4enc178: "dr4",
  ch4enc179: "dr4",
  ch4enc180: "dr4",
  ch4enc181: "dr4",
  ch4enc182: "dr4",
  ch4enc183: "dr4",
  ch4enc184: "dr4",
  ch4enc185: "dr4",
  ch4enc186: "dr4",
  ch4enc187: "dr4",
  ch4enc188: "dr4",
  ch4enc189: "dr4",
  ch4enc190: "dr4",
  ch4enc191: "dr4",
  ch4enc500: "dr4",
  ch4enc501: "dr4",
  ch4enc150g: "dr4",
  ch4enc151g: "dr4",
  ch5enc1: "dr5",
  ch5enc200: "dr5",
  ch5enc201: "dr5",
  ch5enc202: "dr5",
  ch5enc203: "dr5",
  ch5enc204: "dr5",
  ch5enc205: "dr5",
  ch5enc206: "dr5",
  ch5enc207: "dr5",
  ch5enc208: "dr5",
  ch5enc209: "dr5",
  ch5enc210: "dr5",
  ch5enc211: "dr5",
  ch5enc212: "dr5",
  ch5enc213: "dr5",
  ch5enc214: "dr5",
  ch5enc215: "dr5",
  ch5enc220: "dr5",
  ch5enc221: "dr5",
  ch5enc222: "dr5",
  ch5enc223: "dr5",
  ch5enc224: "dr5",
  ch5enc225: "dr5",
  ch5enc226: "dr5",
  ch5enc227: "dr5",
  ch5enc228: "dr5",
  ch5enc229: "dr5",
  ch5enc230: "dr5",
  ch5enc231: "dr5",
  ch5enc232: "dr5",
  ch5enc233: "dr5",
  ch5enc234: "dr5",
  ch5enc235: "dr5",
  ch5enc500: "dr5",
  ch5enc501: "dr5",
  ch5enc777: "dr5",
  ut1: "ut_r0",
  ut2: "ut_r0",
  ut3: "ut_r0",
  ut4: "ut_r0",
  ut5: "ut_r0",
  ut6: "ut_r0",
  ut7: "ut_r0",
  ut8: "ut_r0",
  ut9: "ut_r0",
  ut10: "ut_r0",
  ut11: "ut_r0",
  ut12: "ut_r0",
  ut13: "ut_r0",
  ut14: "ut_r0",
  ut15: "ut_r0",
  ut16: "ut_r0",
  ut17: "ut_r0",
  ut18: "ut_r0",
  ut19: "ut_r0",
  ut20: "ut_r0",
  ut21: "ut_r0",
  ut22: "ut_r1",
  ut23: "ut_sd",
  ut24: "ut_sd",
  ut25: "ut_sd",
  ut26: "ut_sd",
  ut27: "ut_sd",
  ut28: "ut_sd",
  ut30: "ut_sd",
  ut31: "ut_sd",
  ut32: "ut_sd",
  ut33: "ut_sd",
  ut34: "ut_sd",
  ut35: "ut_sd",
  ut36: "ut_sd",
  ut40: "ut_sd",
  ut41: "ut_sd",
  ut42: "ut_sd",
  ut43: "ut_sd",
  ut44: "ut_sd",
  ut45: "ut_sd",
  ut46: "ut_sd",
  ut47: "ut_wf",
  ut48: "ut_wf",
  ut49: "ut_wf",
  ut50: "ut_wf",
  ut51: "ut_wf",
  ut52: "ut_wf",
  ut53: "ut_sd",
  ut54: "ut_sd",
  ut55: "ut_sd",
  ut56: "ut_hl",
  ut57: "ut_wf",
  ut58: "ut_wf",
  ut59: "ut_hl",
  ut60: "ut_hl",
  ut61: "ut_hl",
  ut62: "ut_hl",
  ut63: "ut_hl",
  ut64: "ut_hl",
  ut65: "ut_hl",
  ut66: "ut_hl",
  ut67: "ut_hl",
  ut68: "ut_hl",
  ut69: "ut_wf",
  ut70: "ut_wf",
  ut71: "ut_wf",
  ut72: "ut_wf",
  ut73: "ut_wf",
  ut74: "ut_wf",
  ut75: "ut_wf",
  ut76: "ut_hl",
  ut77: "ut_wf",
  ut78: "ut_wf",
  ut79: "ut_wf",
  ut80: "ut_hl",
  ut81: "ut_hl",
  ut82: "ut_nh",
  ut83: "ut_nh",
  ut84: "ut_nh",
  ut85: "ut_nh",
  ut86: "ut_nh",
  ut87: "ut_nh",
  ut88: "ut_nh",
  ut89: "ut_nh",
  ut90: "ut_nh",
  ut91: "ut_g10",
  ut92: "ut_g10",
  ut93: "ut_g9",
  ut94: "ut_g15",
  ut95: "ut_g19",
  ut100: "ut_nh",
  ut101: "ut_nh",
  ut120: "ut_r0",
  ut121: "ut_r0",
  ut122: "ut_r0",
  ut123: "ut_r0",
  ut124: "ut_r0",
  ut125: "ut_r0",
  ut126: "ut_r0",
  ut127: "ut_r0",
  ut128: "ut_r0",
  ut129: "ut_r0",
  ut130: "ut_r0",
  ut131: "ut_r0",
  ut132: "ut_r0",
  ut133: "ut_r0",
  ut134: "ut_r0",
  ut135: "ut_sd",
  ut140: "ut_hl",
  ut255: "ut_nh",
  ut256: "ut_nh",
  utflowey: "ut_nh"
};
var Z3 = "CANON";
function Z4(Z) {
  Z3 = Z && String(Z.partystats || "").toUpperCase() === "CUSTOM" ? "CUSTOM" : "CANON";
  ZR = Z3 === "CUSTOM" ? Zv(Z) : null;
  Z5 = Z6(Z);
  return Z3;
}
a(Z4, "setPartyMode");
var Z5 = "";
function Z6(Z) {
  let ZG = Z && (typeof Z.utName == "string" ? Z.utName : Z.app && Z.app.utname && Z.app.utname.name);
  if (typeof ZG == "string" && /^[A-Za-z]{1,6}$/.test(ZG)) {
    return ZG;
  } else {
    return "";
  }
}
a(Z6, "utNameOf");
var Z7 = a(() => Z5 || "CHARA", "utCharName");
var Z8 = a(() => Z3, "partyMode");
var Z9 = a(() => Z3 === "CANON", "canonOn");
var ZZ = ["roster", "slots", "weapon", "armor1", "armor2", "maxhp", "hp", "stats"];
function Zz(Z) {
  if (!Z || typeof Z != "object" || !Z9()) {
    return Z;
  }
  const ZG = {
    ...Z
  };
  let ZH = ZG;
  for (let z0 of ZZ) {
    delete ZH[z0];
  }
  return ZH;
}
a(Zz, "partyCfg");
const ZI = {
  at: [0, 10, 14, 8],
  df: [0, 2, 2, 2],
  mag: [0, 0, 1, 7]
};
const Zo = {
  roster: {},
  slots: [1, 2, 3],
  weapon: [0, 1, 2, 3],
  armor1: [0, 0, 0, 0],
  armor2: [0, 0, 0, 0],
  maxhp: [0, 90, 110, 70],
  hp: [0, 90, 110, 70],
  stats: ZI
};
var Zh = Zo;
var ZL = a(Z => Z === undefined ? undefined : JSON.parse(JSON.stringify(Z)), "copyOf");
var Zl = a(Z => Z && String(Z.partystats || "").toUpperCase() === "CUSTOM" ? "CUSTOM" : "CANON", "partyStatsOf");
function Zi(Z) {
  let ZK = {};
  for (let Zp of ZZ) {
    if (Z && Z[Zp] !== undefined) {
      ZK[Zp] = ZL(Z[Zp]);
    }
  }
  return ZK;
}
a(Zi, "customSnapshot");
function ZY(Z, z) {
  const Zs = {
    isCvs: function (z0, z1) {
      return z0 != z1;
    },
    tfyge: "object",
    GviJU: "CANON",
    bEDSd: function (z0, z1) {
      return z0(z1);
    },
    ROobE: function (z0, z1) {
      return z0 === z1;
    },
    ystjT: function (z0, z1) {
      return z0(z1);
    },
    oFdZe: "CUSTOM",
    LfZsN: function (z0, z1) {
      return z0 === z1;
    },
    OWCCC: function (z0, z1) {
      return z0(z1);
    },
    RwMEm: function (z0, z1) {
      return z0 == z1;
    },
    tHWCm: "Xfhsr",
    Gkgwu: "tkSDK",
    NsiVk: function (z0, z1) {
      return z0 !== z1;
    }
  };
  if (!Z || Zs.isCvs(typeof Z, Zs.tfyge)) {
    return Zs.GviJU;
  }
  let Zp = Zs.bEDSd(Zl, Z);
  z = z ? Zs.ROobE(Zs.ystjT(String, z).toUpperCase(), Zs.oFdZe) ? Zs.oFdZe : Zs.GviJU : Zs.ROobE(Zp, Zs.oFdZe) ? Zs.GviJU : Zs.oFdZe;
  if (Zs.LfZsN(z, Zp)) {
    Z.partystats = z;
    return z;
  }
  if (Zs.ROobE(z, Zs.GviJU)) {
    Z.customParty = Zs.OWCCC(Zi, Z);
  } else if (Z.customParty && Zs.RwMEm(typeof Z.customParty, Zs.tfyge)) {
    if (Zs.LfZsN(Zs.tHWCm, Zs.Gkgwu)) {
      let [z0, z1, z2, z3, z4, z5, z6] = z;
      Zs[Zp] = {
        maxhp: z0,
        at: z1,
        df: z2,
        mag: z3,
        weapon: z4,
        armor1: z5,
        armor2: z6,
        spell: (f.spell[z] || []).slice()
      };
    } else {
      let z7 = Z.customParty;
      for (let z8 of ZZ) {
        if (Zs.NsiVk(z7[z8], undefined)) {
          Z[z8] = Zs.OWCCC(ZL, z7[z8]);
        } else {
          delete Z[z8];
        }
      }
    }
  }
  Z.partystats = z;
  return z;
}
a(ZY, "switchPartyStats");
const ZC = {
  kris: 1,
  susie: 2,
  ralsei: 3,
  noelle: 4
};
var ZW = ZC;
var ZD = a(Z => {
  let z = ZW[Z];
  if (z) {
    return Object.keys(p).map(Number).filter(Zp => p[Zp].party[z]);
  } else {
    return [];
  }
}, "canonChaptersOf");
function Zn(Z, z, ZK, Zs) {
  let z0 = p[Zs];
  let z1 = z0 && z0.party[ZW[ZK]];
  if (!z1 || !Z || !Z.stats) {
    return false;
  }
  let [z3, z4, z5, z6, z7, z8, z9] = z1;
  Z.maxhp[z] = z3;
  Z.hp[z] = z3;
  Z.stats.at[z] = z4;
  Z.stats.df[z] = z5;
  Z.stats.mag[z] = z6;
  Z.weapon[z] = z7;
  Z.armor1[z] = z8;
  Z.armor2[z] = z9;
  return true;
}
a(Zn, "importCanonMember");
function Zq(Z) {
  if (!!Z && typeof Z == "object") {
    {
      delete Z.utParty;
      for (let Zp of ZZ) {
        Z[Zp] = ZL(Zh[Zp]);
      }
      Z.customParty = Zi(Z);
    }
  }
}
a(Zq, "resetCustomParty");
var ZN = a(Z => Z.game === "undertale" && (Z.engine || "undertale") === "undertale", "isUT");
function Zj(Z) {
  for (let [ZH, z0, z1] of Z0) {
    if (Z >= ZH && Z <= z0) {
      return z1;
    }
  }
  return null;
}
a(Zj, "utArea");
function Zt(Z) {
  if (!Z || Z.mode || Z.partyhp || Z.heroes || Z.game === "undertale" && !ZN(Z)) {
    return null;
  }
  if (ZN(Z)) {
    if (!Z.customEncounter && Z2[Z.id]) {
      return Z2[Z.id];
    } else {
      return Z1[Z.id] || Z.battlegroup !== undefined && Zj(Z.battlegroup) || "ut_r0";
    }
  }
  if (!Z.customEncounter && Z2[Z.id]) {
    return Z2[Z.id];
  }
  let Zp = Z.engineChapter ?? Z.chapter;
  if (p[Zp]) {
    if (Zp === 2 && Z.flags && Z.flags[915] >= 5) {
      return "dr2sg";
    } else {
      return "dr" + Zp;
    }
  } else {
    return null;
  }
}
a(Zt, "canonStateOf");
var ZA = new Set(["ch2enc59", "ch2enc59sg", "ch2enc84", "ch2enc61", "ch2enc61sg"]);
var Zx = a(Z => ZA.has(Z.id) || /^Queen's Mansion/.test(Z.area || ""), "ch2AfterPlot95");
var Zm = 13;
var Zw = 10;
var Zk = 10;
var Zb = "ch2enc61sg";
var Zy = 20;
function ZM(Z, z) {
  for (let z1 of [1, 2, 3]) {
    if (Z[z1]) {
      Z[z1].maxhp += 2;
    }
  }
  if (Z[2] && z % 2 === 0) {
    Z[2].maxhp += 1;
  }
  if (z % 10 === 0) {
    {
      for (let z6 of [1, 2, 3]) {
        if (Z[z6]) {
          Z[z6].at += 1;
        }
      }
      for (let z7 of [2, 3]) {
        if (Z[z7]) {
          Z[z7].mag += 1;
        }
      }
    }
  }
  if (Z[4]) {
    Z[4].maxhp += 4;
    if (z % 4 === 0) {
      Z[4].at += 1;
      Z[4].mag += 1;
    }
  }
  let ZH = {
    "1": 160,
    "2": 190,
    "3": 140,
    "4": 999
  };
  for (let z8 of [1, 2, 3, 4]) {
    if (Z[z8]) {
      Z[z8].maxhp = Math.max(10, Math.min(ZH[z8], Z[z8].maxhp));
    }
  }
}
a(ZM, "levelup");
const Zr = {
  maxhp: 99,
  at: 30,
  df: 30
};
var ZP = [0, 0, 10, 30, 70, 120, 200, 300, 500, 800, 1200, 1700, 2500, 3500, 5000, 7000, 10000, 15000, 25000, 50000, 99999];
var ZF = a(Z => Z >= 20 ? Zr : {
  maxhp: 16 + Z * 4,
  at: 8 + Z * 2,
  df: 9 + Math.ceil(Z / 4)
}, "utStatsForLv");
var ZQ = {
  "3": "Stick",
  "4": "Bandage",
  "12": "Faded Ribbon",
  "13": "Toy Knife",
  "14": "Tough Glove",
  "15": "Manly Bandanna",
  "24": "Old Tutu",
  "25": "Ballet Shoes",
  "46": "Stained Apron",
  "47": "Burnt Pan",
  "50": "Heart Locket",
  "51": "Worn Dagger",
  "52": "Real Knife",
  "53": "The Locket"
};
var ZT = new Set(["ut_g9", "ut_g10", "ut_g15"]);
var ZX = a(Z => {
  let Zp = (Z || []).slice(0, 12);
  while (Zp.length < 12) {
    Zp.push(0);
  }
  return Zp;
}, "pad12");
var ZE = {
  "1": "Kris",
  "2": "Susie",
  "3": "Ralsei",
  "4": "Noelle"
};
function Zd(Z, z) {
  let ZG = Number(z.slice(2, 3));
  let Zp = p[ZG];
  if (!Zp) {
    return null;
  }
  let z0 = {};
  for (let [z3, z4] of Object.entries(Zp.party)) {
    let [z5, z6, z7, z8, z9, zZ, zz] = z4;
    z0[z3] = {
      maxhp: z5,
      at: z6,
      df: z7,
      mag: z8,
      weapon: z9,
      armor1: zZ,
      armor2: zz,
      spell: (Zp.spell[z3] || []).slice()
    };
  }
  if (ZG === 2 && z0[2] && Zx(Z) && !z0[2].spell.includes(11)) {
    z0[2].spell.push(11);
  }
  if (z === "dr2sg") {
    for (let zI = 1, zo = Z.id === Zb ? Zy : Zk; zI <= zo; zI++) {
      ZM(z0, zI);
    }
    if (z0[4]) {
      z0[4].weapon = Zm;
      if (!z0[4].spell.includes(Zw)) {
        z0[4].spell.push(Zw);
      }
    }
  }
  const z1 = {
    ch: ZG,
    rows: z0,
    weaponAT: Zp.weaponAT || {}
  };
  return z1;
}
a(Zd, "drRows");
var Zu = a((Z, z) => Z === "chapter" ? z : +Z || 0, "num");
function ZJ(Z, z, ZK) {
  let ZG = N[Z.weapon] || N[0];
  let Zp = j[Z.armor1] || j[0];
  let ZH = j[Z.armor2] || j[0];
  let z0 = ZK[Z.weapon] ?? Zu(ZG[1], z);
  return {
    at: Z.at + z0 + Zu(Zp[1], z) + Zu(ZH[1], z),
    df: Z.df + Zu(ZG[2], z) + Zu(Zp[2], z) + Zu(ZH[2], z),
    mag: Z.mag + Zu(ZG[3], z) + Zu(Zp[3], z) + Zu(ZH[3], z)
  };
}
a(ZJ, "effOf");
function Zg(Z) {
  let ZK = Zt(Z);
  if (!ZK) {
    return null;
  }
  if (ZK.startsWith("ut_")) {
    let [z2, z3, z4, z5, z6] = H[ZK];
    let z7 = ZF(z2);
    let z8 = {
      ut_r0: "Ruins",
      ut_r1: "Ruins gear",
      ut_sd: "Snowdin gear",
      ut_wf: "Waterfall gear",
      ut_hl: "Hotland gear",
      ut_nh: "New Home gear"
    }[ZK] || "Genocide";
    return {
      state: ZK,
      game: "ut",
      chapter: "ut",
      label: "UNDERTALE " + z8 + (ZT.has(ZK) ? " (LV approx.)" : ""),
      ut: {
        lv: z2,
        xp: ZP[z2] || 0,
        ...z7,
        hp: z7.maxhp,
        weapon: z3,
        wstrength: z4,
        armor: z5,
        adef: z6,
        weaponName: ZQ[z3] || "#" + z3,
        armorName: ZQ[z5] || "#" + z5
      },
      members: [],
      notes: ZT.has(ZK) ? ["genocide LV estimated from the kill quotas"] : []
    };
  }
  let Zp = Zd(Z, ZK);
  if (!Zp) {
    return null;
  }
  let ZH = (Z.party || [1, 2, 3]).filter(Boolean).map(z9 => {
    {
      let zh = Zp.rows[z9];
      if (zh) {
        return {
          id: z9,
          name: ZE[z9] || "#" + z9,
          lv: 1,
          ...zh,
          hp: zh.maxhp,
          eff: ZJ(zh, Zp.ch, Zp.weaponAT),
          weaponName: (N[zh.weapon] || N[0])[0],
          armor1Name: (j[zh.armor1] || j[0])[0],
          armor2Name: (j[zh.armor2] || j[0])[0]
        };
      } else {
        return {
          id: z9,
          name: ZE[z9] || "#" + z9,
          missing: true
        };
      }
    }
  });
  let z0 = [];
  if (Zp.ch === 2 && Zx(Z)) {
    z0.push("after plot 95: Susie knows UltimateHeal");
  }
  if (ZK === "dr2sg") {
    z0.push("Weird Route: Noelle has the ThornRing and SnowGrave", "Weird Route: " + (Z.id === Zb ? Zy : Zk) + " level-ups from the frozen battles the route requires");
  }
  if (Zp.ch === 3) {
    z0.push("FiberScarf is AT 3 in chapter 3");
  }
  return {
    state: ZK,
    game: "dr",
    chapter: Zp.ch,
    label: "Chapter " + Zp.ch + (ZK === "dr2sg" ? " (Weird Route)" : ""),
    members: ZH,
    notes: z0
  };
}
a(Zg, "canonParty");
function Zf(Z) {
  let ZK = Zt(Z);
  if (!ZK || ZK.startsWith("ut_")) {
    return null;
  }
  let Zp = Zd(Z, ZK);
  if (!Zp) {
    return null;
  }
  for (let [z0, z1] of Object.entries(Zp.rows)) {
    let z2 = Number(z0);
    q.maxhp[z2] = z1.maxhp;
    q.hp[z2] = z1.maxhp;
    q.at[z2] = z1.at;
    q.df[z2] = z1.df;
    q.mag[z2] = z1.mag;
    q.charweapon[z2] = z1.weapon;
    q.chararmor1[z2] = z1.armor1;
    q.chararmor2[z2] = z1.armor2;
    if (Array.isArray(q.spell)) {
      q.spell[z2] = ZX(z1.spell);
    }
  }
  D();
  for (let z3 of Object.keys(Zp.rows)) {
    let z4 = Number(z3);
    let z5 = Zp.weaponAT[q.charweapon[z4]];
    if (z5 !== undefined && q.itemat[z4]) {
      q.itemat[z4][0] = z5;
    }
  }
  n();
  q.canonState = ZK;
  return ZK;
}
a(Zf, "applyCanonDR");
function ZS(Z, z) {
  let ZG = Zt(Z);
  if (!ZG || !ZG.startsWith("ut_")) {
    return null;
  }
  let [z0, z1, z2, z3, z4] = H[ZG];
  q.lv = z0;
  q.xp = ZP[z0] || 0;
  if (z && typeof z.scr_weaponeq == "function" && typeof z.scr_armoreq == "function") {
    z.scr_weaponeq.call({}, -1, z1);
    z.scr_armoreq.call({}, -1, z3);
  } else {
    q.weapon = z1;
    q.wstrength = z2;
    q.armor = z3;
    q.adef = z4;
  }
  let z5 = ZF(z0);
  q.maxhp = z5.maxhp;
  q.hp = z5.maxhp;
  q.at = z5.at;
  q.df = z5.df;
  q.canonState = ZG;
  return ZG;
}
a(ZS, "applyCanonUT");
var ZR = null;
var ZO = a((Z, z, ZK, Zs) => {
  let z1 = Math.round(Number(Z));
  if (Number.isFinite(z1)) {
    return Math.max(z, Math.min(ZK, z1));
  } else {
    return Zs;
  }
}, "clampInt");
function Za(Z = 1) {
  let ZK = ZF(Z);
  const Zs = {
    lv: Z,
    maxhp: ZK.maxhp,
    hp: ZK.maxhp,
    at: ZK.at,
    df: ZK.df,
    weapon: 3,
    armor: 4
  };
  return Zs;
}
a(Za, "utPartyDefaults");
function Zv(Z) {
  let ZK = Z && Z.utParty;
  if (!ZK || typeof ZK != "object") {
    return null;
  }
  let ZG = ZO(ZK.lv, 1, 20, 1);
  let Zp = Za(ZG);
  let ZH = ZO(ZK.maxhp, 1, 999, Zp.maxhp);
  return {
    lv: ZG,
    maxhp: ZH,
    hp: ZO(ZK.hp, 1, ZH, ZH),
    at: ZO(ZK.at, 0, 999, Zp.at),
    df: ZO(ZK.df, 0, 999, Zp.df),
    weapon: y[ZK.weapon] !== undefined ? ZK.weapon | 0 : 3,
    armor: M[ZK.armor] !== undefined ? ZK.armor | 0 : 4
  };
}
a(Zv, "utPartyOf");
function ZV(Z) {
  let Zp = ZR;
  if (Zp) {
    q.lv = Zp.lv;
    q.xp = ZP[Zp.lv] || 0;
    if (Z && typeof Z.scr_weaponeq == "function" && typeof Z.scr_armoreq == "function") {
      Z.scr_weaponeq.call({}, -1, Zp.weapon);
      Z.scr_armoreq.call({}, -1, Zp.armor);
    } else {
      q.weapon = Zp.weapon;
      q.armor = Zp.armor;
    }
    q.maxhp = Zp.maxhp;
    q.hp = Zp.hp;
    q.at = Zp.at;
    q.df = Zp.df;
    Ze = true;
    return true;
  } else {
    return false;
  }
}
a(ZV, "applyCustomUT");
var Ze = false;
function ZB() {
  let z = ZR;
  if (z) {
    q.maxhp = z.maxhp;
    q.at = z.at;
    q.df = z.df;
    if (Ze) {
      q.hp = z.hp;
      Ze = false;
    }
  }
}
a(ZB, "applyCustomUTStats");
export { b as a, y as b, M as c, r as d, Z4 as e, Z6 as f, Z7 as g, Z8 as h, Z9 as i, Zz as j, Zl as k, ZY as l, ZD as m, Zn as n, Zq as o, Zg as p, Zf as q, ZS as r, Za as s, Zv as t, ZV as u, ZB as v };
