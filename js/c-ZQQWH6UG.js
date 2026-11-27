const g = function () {
  const n = {
    HZcgY: function (nL, nc) {
      return nL !== nc;
    }
  };
  n.pJGNy = "JQkqX";
  n.bwtwI = function (nL, nc) {
    return nL === nc;
  };
  n.gspjV = "Dfdct";
  n.wEgUj = "hnqTl";
  n.IMmSB = "ZZHvl";
  const nS = n;
  let nt = true;
  return function (nL, nc) {
    if (nS.HZcgY(nS.wEgUj, nS.IMmSB)) {
      const l2 = nt ? function () {
        if (nS.HZcgY(nS.pJGNy, nS.pJGNy)) {
          for (let [l6, l7] of l0.entries(l1)) {
            if (!la.isArray(lq[l6])) {
              lG[l6] = [];
            }
            for (let l8 = 0; l8 < li; l8++) {
              if (lB[l6][l8] === undefined) {
                lM[l6][l8] = l7;
              }
            }
            lg[l6].length = lC.max(ld[l6].length, lP);
          }
          for (let l9 of ["canact", "actname"]) {
            if (!lx.isArray(ly[l9])) {
              lo[l9] = [];
            }
            for (let ln = 0; ln < lp; ln++) {
              if (!lE.isArray(lu[l9][ln])) {
                lF[l9][ln] = new lw(6).fill(l9 === "canact" ? 0 : " ");
              }
            }
          }
          if (!nN.isArray(nQ.bmenucoord)) {
            nh.bmenucoord = [];
          }
          for (let ll = 0; ll < lN.max(20, lQ); ll++) {
            if (!__DECODE_0__.isArray(__DECODE_0__.bmenucoord[ll])) {
              __DECODE_0__.bmenucoord[ll] = new lU(lj.max(20, lz)).fill(0);
            }
          }
          if (nt > 20) {
            for (let la of lt.bmenucoord) {
              if (lL.isArray(la)) {
                while (la.length < lc) {
                  la.push(0);
                }
              }
            }
          }
        } else if (nc) {
          if (nS.bwtwI(nS.gspjV, nS.gspjV)) {
            const lq = nc.apply(nL, arguments);
            nc = null;
            return lq;
          } else {
            for (let lG = 1; lG < (nB.charbase ? nM.charbase.length : 4); lG++) {
              let lO = nk[nI.charweapon[lG]] || np[0];
              let lY = nE[nu.chararmor1[lG]] || nF[0];
              let lD = nw[nN.chararmor2[lG]] || nQ[0];
              let lg = li => li === "chapter" ? nz.chapter | 0 : +li || 0;
              let lC = lO.map((li, lB) => lB ? lg(li) : li);
              let ld = lY.map((li, lB) => lB ? lg(li) : li);
              let lP = lD.map((li, lB) => lB ? lg(li) : li);
              nb.itemat[lG] = [lC[1], ld[1], lP[1], 0];
              nX.itemdf[lG] = [lC[2], ld[2], lP[2], 0];
              __STRING_ARRAY__.itemmag[lG] = [lC[3], ld[3], lP[3], 0];
              nj.itemgrazesize[lG] = [0, ld[4], lP[4], 0];
            }
          }
        }
      } : function () {};
      nt = false;
      return l2;
    } else {
      nS.inv = nt.invc * 40;
      return;
    }
  };
}();
const d = g(this, function () {
  const ns = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const nS = new RegExp("[bbLXSCEqEVZVZTAKWQzqxPSSbAOLKEDHEMfAEGELGxQbJkyPPZNzDbDNQZqWkCHSPqDAVjxYRMqWBGJODSDCJXyxzRPAbqWkQRCHkGkDVGGVDGYVJkQLXFGTJzUDNUqHYJITUYFxPxZbWCNIMkONjNUXjDyEIEUXAMKLDzkNfkbMKIbTxQbNKGyMKHJ]", "g");
  const nt = "blboLcXalhosSt;1CE2q7EVZVZ.T0.0.A1;deKWQzltaqxPruSneSsibAOLm.cKEDHEoMm;wfAwEGwE.deltLarunGxeQbJksiyPPZNm.zDbcoDmNQZ;qdWkrCHSPqsim.DlocAalhVjxostYRMq;.delWBtGJOaDSDrCunJXeysixzmRP.pAagbeqs.deWkvQRCHkGkDVGGVDGYVJkQLXFGTJzUDNUqHYJITUYFxPxZbWCNIMkONjNUXjDyEIEUXAMKLDzkNfkbMKIbTxQbNKGyMKHJ".replace(nS, "").split(";");
  let nL;
  let nc;
  let nR;
  let l0;
  const l2 = function (ll, la, lq) {
    if (ll.length != la) {
      return false;
    }
    for (let lD = 0; lD < la; lD++) {
      for (let lg = 0; lg < lq.length; lg += 2) {
        if (lD == lq[lg] && ll.charCodeAt(lD) != lq[lg + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const l3 = function (ll, la, lq) {
    return l2(la, lq, ll);
  };
  const l4 = function (ll, la, lq) {
    return l3(la, ll, lq);
  };
  const l6 = function (ll, la, lq) {
    return l4(la, lq, ll);
  };
  for (let ll in ns) {
    if (l2(ll, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      nL = ll;
      break;
    }
  }
  for (let lq in ns[nL]) {
    if (l6(6, lq, [5, 110, 0, 100])) {
      nc = lq;
      break;
    }
  }
  for (let lg in ns[nL]) {
    if (l4(lg, [7, 110, 0, 108], 8)) {
      nR = lg;
      break;
    }
  }
  if (!(nc < "~")) {
    for (let ld in ns[nL][nR]) {
      if (l3([7, 101, 0, 104], ld, 8)) {
        l0 = ld;
        break;
      }
    }
  }
  if (!nL || !ns[nL]) {
    return;
  }
  const l7 = ns[nL][nc];
  const l8 = !!ns[nL][nR] && ns[nL][nR][l0];
  const l9 = l7 || l8;
  if (!l9) {
    return;
  }
  let ln = false;
  for (let lA = 0; lA < nt.length; lA++) {
    const lm = nt[lA];
    const lx = lm[0] === String.fromCharCode(46) ? lm.slice(1) : lm;
    const ly = l9.length - lx.length;
    const lo = l9.indexOf(lx, ly);
    const lV = lo !== -1 && lo === ly;
    if (lV) {
      if (l9.length == lm.length || lm.indexOf(".") === 0) {
        ln = true;
      }
    }
  }
  if (!ln) {}
});
d();
import { A as J, Ca as f, Ra as W, ha as x, o, x as V, xb as H, y as r } from "./c-PBMEVLU6.js";
import { a as k, l as I } from "./c-XSSGDLV7.js";
I();
I();
var E = {
  items: {
    1: {
      id: 1,
      ch: 1,
      name: "Darker Candy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120,
        bych: {
          1: 40,
          2: 40,
          3: 40,
          4: 120,
          5: 120
        }
      },
      battle: true
    },
    2: {
      id: 2,
      ch: 1,
      name: "ReviveMint",
      desc: "Heal#Downed#Ally",
      target: 1,
      usable: 1,
      effect: {
        revive: "mint"
      },
      battle: true
    },
    3: {
      id: 3,
      ch: 1,
      name: "Glowshard",
      desc: "Sell#at#shops",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    4: {
      id: 4,
      ch: 1,
      name: "Manual",
      desc: "Read#out of#battle",
      target: 2,
      usable: 0,
      effect: {},
      battle: true
    },
    5: {
      id: 5,
      ch: 1,
      name: "BrokenCake",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20
      },
      battle: true
    },
    6: {
      id: 6,
      ch: 1,
      name: "Top Cake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160
      },
      battle: true
    },
    7: {
      id: 7,
      ch: 1,
      name: "Spincake",
      desc: "Heals#team#140HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        bych: {
          1: 80,
          2: 140,
          3: 150,
          4: 160,
          5: 180
        }
      },
      battle: true
    },
    8: {
      id: 8,
      ch: 1,
      name: "Darkburger",
      desc: "Heals#70HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 70
      },
      battle: true
    },
    9: {
      id: 9,
      ch: 1,
      name: "LancerCookie",
      desc: "Heals#50HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50
      },
      battle: true
    },
    10: {
      id: 10,
      ch: 1,
      name: "GigaSalad",
      desc: "Heals#4HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 4
      },
      battle: true
    },
    11: {
      id: 11,
      ch: 1,
      name: "ClubsSandwich",
      desc: "Heals#team#70HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 70,
        bych: {
          1: 30,
          2: 70,
          3: 70,
          4: 70,
          5: 70
        }
      },
      battle: true
    },
    12: {
      id: 12,
      ch: 1,
      name: "HeartsDonut",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 20,
          2: 80,
          3: 50,
          4: 30
        }
      },
      battle: true
    },
    13: {
      id: 13,
      ch: 1,
      name: "ChocDiamond",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 80,
          2: 20,
          3: 50,
          4: 70
        }
      },
      battle: true
    },
    14: {
      id: 14,
      ch: 1,
      name: "Favwich",
      desc: "Heals#ALL HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 500
      },
      battle: true
    },
    15: {
      id: 15,
      ch: 1,
      name: "RouxlsRoux",
      desc: "Heals#50 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50,
        bych: {
          1: 60,
          2: 50,
          3: 50,
          4: 50,
          5: 50
        }
      },
      battle: true
    },
    16: {
      id: 16,
      ch: 2,
      name: "CD Bagel",
      desc: "Heals#80 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    17: {
      id: 17,
      ch: 2,
      name: "Mannequin",
      desc: "Useless",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    18: {
      id: 18,
      ch: 2,
      name: "Kris Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 40,
          2: 120,
          3: 120,
          4: 70
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    19: {
      id: 19,
      ch: 2,
      name: "Noelle Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 70,
          2: 120,
          3: 50,
          4: 40
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    20: {
      id: 20,
      ch: 2,
      name: "Ralsei Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 60,
          2: 120,
          3: 40,
          4: 50
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    21: {
      id: 21,
      ch: 2,
      name: "Susie Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 120,
          2: 40,
          3: 120,
          4: 400
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    22: {
      id: 22,
      ch: 2,
      name: "DD-Burger",
      desc: "Heals#60HP 2x",
      target: 1,
      usable: 1,
      replace: 8,
      effect: {
        heal: 60,
        replace: 8
      },
      battle: true
    },
    23: {
      id: 23,
      ch: 2,
      name: "LightCandy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120
      },
      battle: true
    },
    24: {
      id: 24,
      ch: 2,
      name: "ButJuice",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100
      },
      battle: true
    },
    25: {
      id: 25,
      ch: 2,
      name: "SpagettiCode",
      desc: "Heals#team#30HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 30
      },
      battle: true
    },
    26: {
      id: 26,
      ch: 2,
      name: "JavaCookie",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 100
        },
        dflt: 90
      },
      battle: true
    },
    27: {
      id: 27,
      ch: 2,
      name: "TensionBit",
      desc: "Raises#TP#32%",
      target: 2,
      usable: 1,
      effect: {
        tp: 80
      },
      battle: true
    },
    28: {
      id: 28,
      ch: 2,
      name: "TensionGem",
      desc: "Raises#TP#50%",
      target: 2,
      usable: 1,
      effect: {
        tp: "half"
      },
      battle: true
    },
    29: {
      id: 29,
      ch: 2,
      name: "TensionMax",
      desc: "Raises#TP#Max",
      target: 2,
      usable: 1,
      effect: {
        tp: "max"
      },
      battle: true
    },
    30: {
      id: 30,
      ch: 2,
      name: "ReviveDust",
      desc: "Revives#team#25%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 10,
          deaddiv: 4
        }
      },
      battle: true
    },
    31: {
      id: 31,
      ch: 2,
      name: "ReviveBrite",
      desc: "Revives#team#100%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 50,
          deadheal: 999
        }
      },
      battle: true
    },
    32: {
      id: 32,
      ch: 2,
      name: "S.POISON",
      desc: "Hurts#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 40,
        poison: 60
      },
      battle: true
    },
    33: {
      id: 33,
      ch: 2,
      name: "DogDollar",
      desc: "Not#so#useful",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    34: {
      id: 34,
      ch: 3,
      name: "TVDinner",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100
      },
      battle: true
    },
    35: {
      id: 35,
      ch: 3,
      name: "Pipis",
      desc: "Does#nothing",
      target: 1,
      usable: 1,
      effect: {},
      battle: true
    },
    36: {
      id: 36,
      ch: 3,
      name: "FlatSoda",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20
      },
      battle: true
    },
    37: {
      id: 37,
      ch: 3,
      name: "TVSlop",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    38: {
      id: 38,
      ch: 3,
      name: "ExecBuffet",
      desc: "Heals#team#100HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 100
      },
      battle: true
    },
    39: {
      id: 39,
      ch: 3,
      name: "DeluxeDinner",
      desc: "Heals#140HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 140
      },
      battle: true
    },
    60: {
      id: 60,
      ch: 4,
      name: "AncientSweet",
      desc: "Kris only#+400",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 400,
          2: 40,
          3: 40,
          4: 40
        }
      },
      battle: true
    },
    61: {
      id: 61,
      ch: 4,
      name: "Rhapsotea",
      desc: "Heals#115HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 115
      },
      battle: true
    },
    62: {
      id: 62,
      ch: 4,
      name: "Scarlixir",
      desc: "Heals#160HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 160,
          2: 160,
          3: 160,
          4: 155
        },
        noellebonus: 5
      },
      battle: true
    },
    63: {
      id: 63,
      ch: 4,
      name: "BitterTear",
      desc: "Heals#All HP",
      target: 1,
      usable: 1,
      effect: {
        revive: "full"
      },
      battle: true
    },
    40: {
      id: 40,
      ch: 5,
      name: "PunchBowl",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200
      },
      battle: true
    },
    41: {
      id: 41,
      ch: 5,
      name: "Flavigne",
      desc: "Heals#130HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 130
      },
      battle: true
    },
    42: {
      id: 42,
      ch: 5,
      name: "GreenTea",
      desc: "Heals#180HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 180
      },
      battle: true
    },
    43: {
      id: 43,
      ch: 5,
      name: "OrangeJuice",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    64: {
      id: 64,
      ch: 5,
      name: "Schadenbrot",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200
      },
      battle: true
    },
    65: {
      id: 65,
      ch: 5,
      name: "TreeCake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160
      },
      battle: true
    },
    66: {
      id: 66,
      ch: 5,
      name: "S.POTION",
      desc: "Heals#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 200
      },
      battle: true
    },
    67: {
      id: 67,
      ch: 5,
      name: "Raw Moon",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 200
        },
        dflt: 100,
        tpselect: 0.16
      },
      battle: true
    },
    68: {
      id: 68,
      ch: 5,
      name: "Phanta",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          2: 200
        },
        dflt: 100,
        tpselect: 0.16
      },
      battle: true
    },
    69: {
      id: 69,
      ch: 5,
      name: "FlowerySoda",
      desc: "Raises#TP 16%#+50HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          3: 200
        },
        dflt: 50,
        tpselect: 0.16
      },
      battle: true
    },
    70: {
      id: 70,
      ch: 5,
      name: "Shikacola",
      desc: "Heals#team#80HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 80
      },
      battle: true
    }
  },
  weapons: {
    1: {
      id: 1,
      ch: 1,
      chars: [1],
      name: "Wood Blade",
      desc: "A wooden practice blade with a carbon-#reinforced core.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "What's this!? A CHOPSTICK?",
        3: "That's yours, Kris...",
        4: "(It has bite marks...)"
      }
    },
    2: {
      id: 2,
      ch: 1,
      chars: [2],
      name: "Mane Ax",
      desc: "Beginner's ax forged from the#mane of a dragon whelp.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "I'm too GOOD for that.",
        3: "Ummm... it's a bit big.",
        4: "It... smells nice..."
      }
    },
    3: {
      id: 3,
      ch: 1,
      chars: [3],
      name: "Red Scarf",
      desc: "A basic scarf made of lightly#magical fiber.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No. Just... no.",
        3: "Comfy! Touch it, Kris!",
        4: "Huh? No, I'm not cold."
      }
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 2, 3, 4],
      name: "EverybodyWeapon",
      desc: "It felt right for everyone.",
      at: 12,
      df: 6,
      mag: 8,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Uhhh... ok.",
        3: "A perfect fit!",
        4: "Wh... what is this?"
      }
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1],
      name: "Spookysword",
      desc: "A black-and-orange sword with a bat hilt.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Spookiness UP",
      abicon: 7,
      msg: {
        2: "Ugh, it's too small!",
        3: "Oh, it's too scary!",
        4: "(It's kinda cool...)"
      }
    },
    6: {
      id: 6,
      ch: 1,
      chars: [2],
      name: "Brave Ax",
      desc: "A glossy ax from a block warrior.#Suitable for heroes.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Guts Up",
      abicon: 7,
      msg: {
        2: "Well, if I have to.",
        3: "It's a bit too heavy...",
        4: "(W-wow, what presence...)"
      }
    },
    7: {
      id: 7,
      ch: 1,
      chars: [2],
      name: "Devilsknife",
      desc: "Skull-emblazoned scythe-ax.#Reduces Rudebuster's cost by 10",
      at: 5,
      df: 0,
      mag: 4,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Buster TP DOWN",
      abicon: 6,
      msg: {
        2: "Let the games begin!",
        3: "It's too, um, evil.",
        4: "...? It smiled at me?"
      }
    },
    8: {
      id: 8,
      ch: 1,
      chars: [1],
      name: "Trefoil",
      desc: "Mossy rapier with a clover emblem.#Increases $ found by 5%.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Money Earned UP",
      abicon: 7,
      msg: {
        2: "That tacky thing? No!",
        3: "Not my shade of green...",
        4: "Okay! ...? What do you mean, unused!?"
      }
    },
    9: {
      id: 9,
      ch: 1,
      chars: [3],
      name: "Ragger",
      desc: "A rugged scarf that cuts enemies like a dagger.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ow! That can't be comfy!",
        3: "Feels prickly... nice!",
        4: "Ouch! ... kind of nice"
      }
    },
    10: {
      id: 10,
      ch: 1,
      chars: [3],
      name: "DaintyScarf",
      desc: "Delicate scarf that increases healing#power but has no attack.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Fluffiness UP",
      abicon: 7,
      msg: {
        2: "IT'S MADE OF DOILIES!",
        3: "I'll protect everyone!",
        4: "S-stop covering me with it!"
      }
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1],
      name: "TwistedSwd",
      desc: "A strange blade",
      at: 16,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 6,
      msg: {
        2: "... uhh, looks bad.",
        3: "It's like a spiral.",
        4: "It's... kind of scary..."
      }
    },
    12: {
      id: 12,
      ch: 2,
      chars: [4],
      name: "SnowRing",
      desc: "A ring with the emblem of the#snowflake",
      at: 0,
      df: 0,
      mag: 0,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Smells like Noelle",
        3: "Are you... proposing?",
        4: "(Thank goodness...)"
      }
    },
    13: {
      id: 13,
      ch: 2,
      chars: [4],
      name: "ThornRing",
      desc: "Wearer takes damage from pain#Reduces the TP cost of ice spells",
      at: 14,
      df: 0,
      mag: 12,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 14,
      msg: {
        2: "A torture device?",
        3: "...",
        4: " "
      }
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1],
      name: "BounceBlade",
      desc: "A pink saber with a rubber blade.#Weak, but increases defence.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Defense",
      abicon: 7,
      msg: {
        2: "What is this, rubber?",
        3: "Soft and squishy!",
        4: "S-stop thwacking me!"
      }
    },
    15: {
      id: 15,
      ch: 2,
      chars: [3],
      name: "CheerScarf",
      desc: "A scarf with colorful you-can-do-it#imagery. Gains more TP from criticals.",
      at: 1,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Smiley",
      abicon: 10,
      msg: {
        2: "Smiley faces? Ecch.",
        3: "You can do it!",
        4: "Now THIS is a tacky scarf! Faha!"
      }
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "MechaSaber",
      desc: "The blade extends when you press the hilt.#CHA-CHK!",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Annoying",
      abicon: 13,
      msg: {
        2: "*chk chk chk chk* Nah.",
        3: "You'd look cool holding it, Kris!",
        4: "*chk* A-AHH! Scared myself..."
      }
    },
    17: {
      id: 17,
      ch: 2,
      chars: [2],
      name: "AutoAxe",
      desc: "Make sure to charge it by#plugging it into the wall.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "BadIdea",
      abicon: 13,
      msg: {
        2: "*chainsaw noises* Hahaha!!",
        3: "(Is this a good idea?)",
        4: "*zrrt* A-AHH! Scared myself..."
      }
    },
    18: {
      id: 18,
      ch: 2,
      chars: [3],
      name: "FiberScarf",
      desc: "A scarf made of soft microfiber.#Balances attack and magic.",
      at: 2,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Soft...)",
        3: "Oh! My fur's staticy!",
        4: "Sure, I'll... huh? It's a weapon?"
      }
    },
    19: {
      id: 19,
      ch: 2,
      chars: [3],
      name: "Ragger2",
      desc: "A sharp and scratchy scarf.#Worse healing, better attack.",
      at: 5,
      df: 0,
      mag: -1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Prickly",
      abicon: 7,
      msg: {
        2: "This is Ralsei's deal.",
        3: "I'm a prickly prince!",
        4: "(It's like Santa's beard?)"
      }
    },
    20: {
      id: 20,
      ch: 2,
      chars: [],
      name: "BrokenSwd",
      desc: "A rejected sword cut into 2 pieces.#Not even you can equip this...",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Failure",
      abicon: 6,
      msg: {
        2: "... this is trash.",
        3: "Should we fix this...?",
        4: "(Wh... why give this to me?)"
      }
    },
    21: {
      id: 21,
      ch: 2,
      chars: [3],
      name: "PuppetScarf",
      desc: "A scarf made of strange strings.#For those that abandon healing.",
      at: 10,
      df: 0,
      mag: -6,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No way, that's creepy.",
        3: "If I have to fight...",
        4: "(Feels like guitar strings...)"
      }
    },
    22: {
      id: 22,
      ch: 2,
      chars: [4],
      name: "FreezeRing",
      desc: "A ring with a snowglobe on it.#... is that someone inside?",
      at: 4,
      df: 0,
      mag: 4,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heh, you steal this? Heh.",
        3: "It's beautiful...",
        4: "..."
      }
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1],
      name: "Saber10",
      desc: "A saber made of 10 cactus needles.#Fortunately, can deal more than 10 damage.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Nah, I'd snap it.",
        3: "You want to... pierce my ears...?",
        4: "(I'm not against using it, but...)"
      }
    },
    24: {
      id: 24,
      ch: 3,
      chars: [2],
      name: "ToxicAxe",
      desc: "An axe used to clear wastelands#in a fetid swamp. Not poison, but gross.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Eat dirt, losers.",
        3: "Could I wash it off first?",
        4: "N-no way! Susie wouldn't use that!"
      }
    },
    25: {
      id: 25,
      ch: 3,
      chars: [3],
      name: "FlexScarf",
      desc: "A scarf that is warm and fuzzy, but with#a metal core that lets it keep its shape.",
      at: 4,
      df: 0,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Looks like a giant caterpillar.  ",
        3: "So pliable, like me!",
        4: "Twist it and... it's a wreath!"
      }
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 4],
      name: "BlackShard",
      desc: "A dagger-like shard of the Black Knife.#Strikes the weakness of dark-element enemies.",
      at: 16,
      df: 0,
      mag: 0,
      icon: 18,
      grazesize: 0,
      grazeamt: 0,
      ability: "SlayDark",
      abicon: 18,
      msg: {
        2: "... how is this a weapon?",
        3: "I... shouldn't use it.",
        4: " "
      }
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 4],
      name: "JingleBlade",
      desc: "A lance-like sword with red-and-white stripes.#Perfect for jousting.",
      at: 7,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Festive",
      abicon: 10,
      msg: {
        2: "Sleigh the bad guys.",
        3: "Mmm! Minty and festive!",
        4: "What is this, a barber pole?"
      }
    },
    51: {
      id: 51,
      ch: 4,
      chars: [3],
      name: "ScarfMark",
      desc: "A thin scarf with a deep sheen. Holy writing has#been pressed into it, imbuing it with magic.",
      at: 4,
      df: 1,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heheh...",
        3: "I'll keep my place.",
        4: "Look, ribbon dancing!"
      }
    },
    52: {
      id: 52,
      ch: 4,
      chars: [2],
      name: "JusticeAxe",
      desc: "It has no special powers. However, in order to#attain this item, you became much stronger!",
      at: 12,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 5,
      msg: {
        2: "Watch this, old man!",
        3: "... isn't Susie amazing?",
        4: "... Susie beat up an old man!?"
      }
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1],
      name: "Winglade",
      desc: "A majestic sword with a white feathered hilt.#Slightly increases money won.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Don't make me sneeze!",
        3: "Th-that tickles!",
        4: "... whose feather is this?"
      }
    },
    54: {
      id: 54,
      ch: 4,
      chars: [2],
      name: "AbsorbAx",
      desc: "A long, curved axe with an indent.#Scoop up HP when you attack.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Vampire",
      abicon: 13,
      msg: {
        2: "Scoopin' time.",
        3: "Don't scoop me!",
        4: "That red... is that blood?"
      }
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1],
      name: "WoodBlade2",
      desc: "A sword that is arbitrarily stronger#because it fits the setting of Chapter 5.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Coolness",
      abicon: 7,
      msg: {
        2: "No, you geek.",
        3: "Cool poses, Kris!",
        4: "Go, Kris! \"1000 Moon Crescent Slash!\" Faha!"
      }
    },
    31: {
      id: 31,
      ch: 5,
      chars: [2],
      name: "Thatchet",
      desc: "An axe made of brambles. It's rumored its#wickedness infects anything it touches.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Wicked",
      abicon: 13,
      msg: {
        2: "Literally wicked.",
        3: "Yay, I'm infected!",
        4: "Well... roses have thorns, too."
      }
    },
    32: {
      id: 32,
      ch: 5,
      chars: [3],
      name: "BlueShoes",
      desc: "Shoes from a prestigious dancer.#Ralsei's PACIFY costs 0% TP.",
      at: 2,
      df: 4,
      mag: 6,
      icon: 24,
      grazesize: 0,
      grazeamt: 0,
      ability: "Pacify0TP",
      abicon: 20,
      msg: {
        2: "Hell no, I'd wreck these.",
        3: "Helps me step to attack!",
        4: "(You KNOW I can't wear normal shoes...)"
      }
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 4],
      name: "AquaKnife",
      desc: "A mischievous blade. Attacks with this#weapon are easier to make critical.",
      at: 10,
      df: 2,
      mag: 0,
      icon: 27,
      grazesize: 0,
      grazeamt: 0,
      ability: "Critical",
      abicon: 7,
      msg: {
        2: "Too small. Kris-size.",
        3: "Umm, I might hurt myself...",
        4: "That's, um, nostalgic."
      }
    },
    34: {
      id: 34,
      ch: 5,
      chars: [],
      name: "FloweryScarf",
      desc: "A scarf which says \"I <3 Flowery\" on it.#It's the perfect size for Ralsei.",
      at: 70,
      df: 70,
      mag: 70,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "TheBest",
      abicon: 21,
      msg: {
        2: "Nah, that's for Ralsei.",
        3: "I, um... it, it doesn't fit!",
        4: "Who the heck is Flowery?"
      }
    },
    35: {
      id: 35,
      ch: 5,
      chars: [3, 4],
      name: "BrokenScarf",
      desc: "A scarf that was torn to pieces in the#battle, revealing it was all for show.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "...",
        3: "... I'll wear it.",
        4: "Who the HECK is Flowery?"
      }
    },
    36: {
      id: 36,
      ch: 5,
      chars: [4],
      name: "GildedRose",
      desc: "Armour rings with a rose motif. Any thorns are#pointed outwards so you don't hurt yourself.",
      at: 16,
      df: 0,
      mag: 2,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, if only it fit!",
        3: "Noelle... could equip this.",
        4: "Wow! Something I actually want to wear?"
      }
    },
    37: {
      id: 37,
      ch: 5,
      chars: [3],
      name: "MistleWP",
      desc: "A parasitic ivy whip with a nature's power.#Only experts can use it as a scarf.",
      at: 6,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Stop nailing it to stuff.",
        3: "Look, I'm a wreath?",
        4: "... ah?"
      }
    }
  },
  armors: {
    1: {
      id: 1,
      ch: 1,
      chars: [1, 2, 3],
      name: "Amber Card",
      desc: "A thin square charm that sticks#to you, increasing defense.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... better than nothing.",
        3: "It's sticky, huh, Kris...",
        4: "It's like a name-tag!"
      }
    },
    2: {
      id: 2,
      ch: 1,
      chars: [1, 2, 3],
      name: "Dice Brace",
      desc: "A bracelet made out of various#symbol-inscribed cubes.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... okay.",
        3: "It says \"Friendship!\"",
        4: "Hey, y-you jumbled it..."
      }
    },
    3: {
      id: 3,
      ch: 1,
      chars: [1, 3, 4],
      name: "Pink Ribbon",
      desc: "A cute hair ribbon that increases#the range bullets increase tension.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar."
      }
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 3],
      name: "White Ribbon",
      desc: "A crinkly hair ribbon that slightly#increases your defense.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Cuteness",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar."
      }
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1, 2, 3],
      name: "IronShackle",
      desc: "Shackle that ironically increases#your attack and defense.",
      at: 1,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Damn, it's actually cool...)",
        3: "*jingle jangle* Haha!",
        4: "I'm the ghost of holidays past!"
      }
    },
    6: {
      id: 6,
      ch: 1,
      chars: [1, 2, 3],
      name: "MouseToken",
      desc: "A golden coin with a once-powerful mousewizard engraved on it.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "This guy's... familiar?",
        3: "Chu! Healing power UP!",
        4: "... from the family entertainment center?"
      }
    },
    7: {
      id: 7,
      ch: 1,
      chars: [1, 2, 3],
      name: "Jevilstail",
      desc: "A J-shaped tail that gives you devilenergy.",
      at: 2,
      df: 2,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Figured I'd grow one someday.",
        3: "I'm a good devil, OK?",
        4: "... (I like it...)"
      }
    },
    8: {
      id: 8,
      ch: 2,
      chars: [1, 2, 3],
      name: "Silver Card",
      desc: "A square charm that increases#dropped money by 5%",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Do they take credit?",
        4: "It goes with my watch!"
      }
    },
    9: {
      id: 9,
      ch: 2,
      chars: [1, 3, 4],
      name: "TwinRibbon",
      desc: "Two ribbons. You'll have to put#your hair into pigtails.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "... it gets worse and worse.",
        3: "Try around my horns!",
        4: "... nostalgic, huh."
      }
    },
    10: {
      id: 10,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "GlowWrist",
      desc: "A tough bracelet made of green wires,#and studded with sharp glowing lights.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Whoops, it's tangled.",
        3: "Let me just untangle this...",
        4: "It's like holiday lights..."
      }
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "ChainMail",
      desc: "Chain-armor. Send it to 10 others#or it'll lose its defensive rating",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, guess I'm cursed.",
        3: "A letter?... for me...?",
        4: "Armor? (It's cool...)"
      }
    },
    12: {
      id: 12,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "B.ShotBowtie",
      desc: "A handsome bowtie. Looks like the brand#name has been cut off.",
      at: 0,
      df: 2,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ugh, I look like a nerd.",
        3: "Can I have suspenders?",
        4: "... do I put it in my hair?"
      }
    },
    13: {
      id: 13,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeBand",
      desc: "A black wristband covered in spikes.#Has the tendency to get stuck to itself.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Can't say no to spikes.",
        3: "Um, do I... look tough?",
        4: "(Maybe Susie would like this look?)"
      }
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "Silver Watch",
      desc: "Grazing bullets affects#the turn length by 10% more",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "GrazeTime",
      abicon: 7,
      msg: {
        2: "It's clobbering time.",
        3: "I'm late, I'm late!",
        4: "(Th-this was mine...)"
      }
    },
    15: {
      id: 15,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "TensionBow",
      desc: "Gain 10% more tension from#grazing bullets",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7,
      msg: {
        2: " ",
        3: " ",
        4: " "
      }
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "Mannequin",
      desc: "It's a mannequin with the clothes#permanently attached. Useless",
      at: 0,
      df: 0,
      mag: 0,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 4,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)"
      }
    },
    17: {
      id: 17,
      ch: 2,
      chars: [1],
      name: "DarkGoldBand",
      desc: "A black metal with a golden shine.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)"
      }
    },
    18: {
      id: 18,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SkyMantle",
      desc: "A cape that shimmers fluorescently.#Protects against Elec and Holy attacks.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elec/Holy",
      abicon: 4,
      msg: {
        2: " ",
        3: " ",
        4: " "
      }
    },
    19: {
      id: 19,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeShackle",
      desc: " ",
      at: 3,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Attack",
      abicon: 7,
      msg: {
        2: "Get a load of THIS!",
        3: "Looking SHARP!",
        4: "(It's tearing my sleeves...)"
      }
    },
    20: {
      id: 20,
      ch: 2,
      chars: [1, 3, 4],
      name: "FrayedBowtie",
      desc: "An old bowtie. It seems to have#lost much of its defensive value.",
      at: 1,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look. I have standards.",
        3: "It's still wearable!",
        4: "(Reminds me of Asgore...)"
      }
    },
    21: {
      id: 21,
      ch: 2,
      chars: [1, 2, 3],
      name: "Dealmaker",
      desc: "Fashionable pink and yellow glasses.#Greatly increase $ gained, and...?",
      at: 0,
      df: 5,
      mag: 5,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +30%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Two pairs of glasses?",
        4: "(Seems... familiar?)"
      }
    },
    22: {
      id: 22,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "RoyalPin",
      desc: "A brooch engraved with Queen's face.#Careful of the sharp part.",
      at: 0,
      df: 3,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "ROACH? Oh, brooch. Heh.",
        3: "I'm a cute little corkboard!",
        4: "Queen... gave this to me."
      }
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1, 2, 3],
      name: "ShadowMantle",
      desc: "Shadows slip off like water.#Greatly protects against Dark and Star attacks.",
      at: 0,
      df: "chapter",
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Dark/Star",
      abicon: 4,
      msg: {
        2: "Hell yeah, what's this?",
        3: "Sh-should I wear this...?",
        4: "No... it's for someone... taller."
      }
    },
    24: {
      id: 24,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "LodeStone",
      desc: "A lodestone token shaped like a snail's shell.#Enemy bullets give a bit more TP.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7
    },
    25: {
      id: 25,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "GingerGuard",
      desc: "A steel bangle tempered by extreme flame.#Its shape is humanoid in nature.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 19,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look! I punched through a guy!",
        3: "A bigger one could make Kris!",
        4: "This smells amazing! Um, sorry."
      }
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 3, 4],
      name: "BlueRibbon",
      desc: "A blue cheer bow. When the user uses a#healing move, it recovers slightly more HP.",
      at: 0,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Heal+",
      abicon: 7,
      msg: {
        2: "ABSOLUTELY not.",
        4: "Go...  t... team?"
      }
    },
    27: {
      id: 27,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "TennaTie",
      desc: "A giant, heavy-duty, bullet-proof tie.#How to even wear it...?",
      at: 0,
      df: 5,
      mag: -2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Bandana-style.",
        3: "Like a sash...?",
        4: "Look, I'm like a gift!"
      }
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "Waferguard",
      desc: "Although it looks brittle, it contains a magical#energy that blunts damage on impact. +4DF",
      at: 0,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Don't eat it. Don't eat it.)",
        3: "It's got drool on it.",
        4: "What's next, cheezy armor? Faha!"
      }
    },
    51: {
      id: 51,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "MysticBand",
      desc: "A silver armlet stained with amber.#Increases magic only. MAG +4",
      at: 0,
      df: 0,
      mag: 4,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Let's go, Rude Buster!",
        3: "Behold! Heal Prayer!",
        4: "(The other flavor is better)"
      }
    },
    52: {
      id: 52,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "PowerBand",
      desc: "A silver armlet stained with red essence.#Increases strength only. ATK +4",
      at: 4,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "BLOOD POWER ACTIVATE!",
        3: "I'm juiced up!",
        4: "Why always jewelry?"
      }
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1, 3, 4],
      name: "PrincessRBN",
      desc: "Elegant lace ribbon with gloves,#delicate enough to see through. +4 DEF +2 ATK",
      at: 2,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elegance",
      abicon: 7,
      msg: {
        2: "Nah. Gloves don't fit.",
        3: "Cute! (Gloves don't fit)",
        4: "Kris, you can wear the gloves!"
      }
    },
    54: {
      id: 54,
      ch: 4,
      chars: [1, 2, 3],
      name: "GoldWidow",
      desc: "A spider made of gold. It gathers coins#into it, reducing $ gained.",
      at: 1,
      df: 5,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -10%",
      abicon: 6,
      msg: {
        2: "Spider on my head. K.",
        3: "Itsy and/or bitsy!",
        4: "E-Ew! Kris, get that away!"
      }
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1, 3, 4],
      name: "MonarchRBN",
      desc: "A ribbon like the wings of a butterfly.#Increases healing ability when equipped.",
      at: 0,
      df: 6,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "HasAntenna",
      abicon: 10,
      msg: {
        2: "I'll squash it.",
        3: "My horns are like antenna!",
        4: "They're not ANTENNA!! They're ant-LERS!"
      }
    },
    31: {
      id: 31,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "TrueTie",
      desc: "The genuine tie worn by a forgotten TV star.#Defends against the Puppet&Cat element.",
      at: 1,
      df: 5,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "CatDefend",
      abicon: 11,
      msg: {
        2: "More hand-me-downs?",
        3: "Ready for my close-up!",
        4: "What's next, a fedora?"
      }
    },
    32: {
      id: 32,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "DogWidow",
      desc: "A brooch in the shape of a golden pooch.#You lose almost all money after battle.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -90%",
      abicon: 6,
      msg: {
        2: "This is annoying.",
        3: "This is annoying.",
        4: "Pff... YOU should wear it, Kris."
      }
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "RedRibbon",
      desc: "A ribbon with an inscription to drive#away resident spirits, if they don't pay.",
      at: 0,
      df: 4,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Kris's got the tab.",
        3: "Red and white...",
        4: "Umm, your dad's name is on this."
      }
    },
    34: {
      id: 34,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "NetskieHat",
      desc: "A white-yellow hat for someone with fox#ears. Somehow you can wear more than one.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Cool. Visible ears.",
        3: "Fits my horns perfectly!",
        4: "Does not. Fit my antlers."
      }
    },
    35: {
      id: 35,
      ch: 5,
      chars: [1, 2, 3],
      name: "SethSpecs",
      desc: "A tactician's glasses. Become invulnerable for#longer after being damaged.",
      at: 0,
      df: 4,
      mag: 6,
      icon: 22,
      grazesize: 0,
      grazeamt: 0,
      ability: "InvTime+",
      abicon: 5,
      msg: {
        2: "Easier than stealing Ralsei's.",
        3: "I'm ready to do your homework!",
        4: "That's too much like..."
      }
    },
    36: {
      id: 36,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "YellowHat",
      desc: "The hat of a just cowboy. Makes spells#20% more effective.",
      at: 4,
      df: 4,
      mag: 4,
      icon: 25,
      grazesize: 0,
      grazeamt: 0,
      ability: "Skill20%",
      abicon: 7,
      msg: {
        2: "Get in Horse Mode, Ralsei.",
        3: "Can Susie be the horse?",
        4: "(At least I'm not the horse)"
      }
    },
    37: {
      id: 37,
      ch: 5,
      chars: [2, 4],
      name: "O.Glove",
      desc: "The glove of a brave fighter.#Susie's SCYTHEMARE will cost less TP. ",
      at: 4,
      df: 8,
      mag: 0,
      icon: 23,
      grazesize: 0,
      grazeamt: 0,
      ability: "ScytheTP-",
      abicon: 6,
      msg: {
        2: "Helps me hold the axe.",
        3: "Um... I need training, first.",
        4: "I'm used to gloves. I mean, um, oven mitts."
      }
    },
    38: {
      id: 38,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "GreenApron",
      desc: "The apron of a kind chef. The wearer#recovers 16% of their max HP after defending.",
      at: 0,
      df: 7,
      mag: 0,
      icon: 26,
      grazesize: 0,
      grazeamt: 0,
      ability: "DefendHeal",
      abicon: 5,
      msg: {
        2: "Arright, back to cooking fire.",
        3: "Horse devors, anyone?",
        4: "Kris, can you, um, tie the back for me...?"
      }
    }
  }
};
I();
var u = {
  1: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17],
  2: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17]
};
var F = {
  1: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num lock",
    145: "Scroll lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  },
  2: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num Lock",
    145: "Scroll Lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  }
};
I();
const N = {
  none: 0,
  party: 0,
  all: 0,
  ally: 1,
  enemy: 2
};
var Q = [];
var h = {};
var X = [];
var T = N;
function s(n, q, nT, ns) {
  let nL = 1000 + X.length;
  const l1 = {
    member: n,
    entry: q,
    kind: nT,
    scope: ns
  };
  X.push(l1);
  q.id = nL;
  return nL;
}
k(s, "addSpell");
function t(n) {
  if (!n || !n.id || h[n.id]) {
    return n;
  }
  n.spells = n.spells || [];
  n.acts = n.acts || {};
  for (let nt of n.spells) {
    s(n, nt, "spell", null);
  }
  for (let [nL, nc] of Object.entries(n.acts)) {
    for (let nR of nc) {
      s(n, nR, "act", nL);
    }
  }
  Q.push(n);
  h[n.id] = n;
  return n;
}
k(t, "registerMember");
var L = k(n => h[n] || null, "memberOf");
var c = k(n => n >= 1000 && n < 1000 + X.length, "isCustomSpell");
var n0 = k(n => c(n) ? X[n - 1000] : null, "customSpell");
var n1 = k((n, q) => Math.round((n.tp || 0) / 100 * (q || 250)), "tpCost");
var n2 = k(n => T[n.target] ?? n.target | 0, "targetOf");
function n3(n, q) {
  let ns = n0(n);
  if (!ns) {
    return null;
  }
  let nc = ns.entry;
  return {
    spellname: nc.name,
    spellnameb: nc.short || nc.name,
    spelltarget: n2(nc),
    cost: n1(nc, q),
    spelldescb: nc.desc || " ",
    spellanim: 0
  };
}
k(n3, "customSpellInfo");
var n4 = {};
x(n4);
var n5 = new Set(["autoplay", "autoplayBeam", "autoplayInfo", "autoplayNet", "autoplayWait", "godmode", "debugInv", "forceAttack", "debugUser", "pressedDebugKeys", "screenshot", "replayTape", "replayPos", "replayPrevUp", "replayDone"]);
var n6 = k(n => {
  if (Array.isArray(n)) {
    return n.map(n6);
  }
  if (n && typeof n == "object" && Object.getPrototypeOf(n) === Object.prototype) {
    let q = {};
    for (let nT of Object.keys(n)) {
      q[nT] = n6(n[nT]);
    }
    return q;
  }
  return n;
}, "cloneBoot");
var n7 = null;
function n8() {
  if (!n7) {
    n7 = new Map();
    for (let n of Object.keys(n4)) {
      if (!n5.has(n)) {
        n7.set(n, n6(n4[n]));
      }
    }
  }
  for (let q of Object.getOwnPropertyNames(n4)) {
    if (n5.has(q)) {
      continue;
    }
    let nT = Object.getOwnPropertyDescriptor(n4, q);
    if (!n7.has(q) || nT && (nT.get || nT.set)) {
      delete n4[q];
    }
  }
  for (let [ns, nS] of n7) {
    n4[ns] = n6(nS);
  }
  if (n4.debugUser === 1) {
    n4.debug = 1;
  }
}
k(n8, "resetGlobalsForFight");
function n9() {
  n4.chapter = 1;
  n4.inv = 20;
  n4.invc = 1;
  n4.encounterno = 1;
  n4.specialbattle = 0;
  n4.char = [1, 2, 3];
  n4.heromakex = [100, 100, 100];
  n4.heromakey = [200, 200, 200];
  n4.charauto = [0, 0, 0, 0];
  n4.charmove = [0, 0, 0];
  n4.charcantarget = [0, 0, 0];
  n4.chardead = [0, 0, 0];
  n4.charaction = [0, 0, 0];
  n4.faceaction = [0, 0, 0];
  n4.charcond = [0, 0, 0];
  n4.hp = [0, 90, 110, 70];
  n4.maxhp = [0, 90, 110, 70];
  n4.at = [10, 10, 14, 8];
  n4.df = [2, 2, 2, 2];
  n4.mag = [0, 0, 1, 7];
  n4.charweapon = [0, 1, 2, 3];
  n4.chararmor1 = [0, 0, 0, 0];
  n4.chararmor2 = [0, 0, 0, 0];
  n4.itemat = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  n4.itemdf = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  n4.itemmag = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  n4.itemgrazesize = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  n4.spell = [[], [7], [4], [3, 2]];
  for (let n = 0; n < 4; n++) {
    for (let q = 0; q < 12; q++) {
      if (n4.spell[n][q] === undefined) {
        n4.spell[n][q] = 0;
      }
    }
  }
  n4.charname = [" ", "Kris", "Susie", "Ralsei"];
  n4.charbase = [0, 1, 2, 3];
  n4.charhero = [null, "kris", "susie", "ralsei"];
  nl(nY);
  n4.item = new Array(13).fill(0);
  n4.tension = 0;
  n4.maxtension = 250;
  n4.monstermakex = [500, 500, 500];
  n4.monstermakey = [240, 240, 240];
  n4.monsterinstancetype = [null, null, null];
  n4.monster = [1, 1, 1];
  n4.monstertype = [1, 1, 1];
  n4.monstername = ["", "", ""];
  n4.bmenuno = 0;
  n4.bmenucoord = [];
  for (let nT = 0; nT < 20; nT++) {
    n4.bmenucoord[nT] = new Array(20).fill(0);
  }
  n4.myfight = 0;
  n4.mnfight = 0;
  n4.fc = 0;
  n4.fe = 0;
  n4.typer = 5;
  n4.msg = new Array(100).fill(" ");
  n4.msgno = 0;
  n4.flag = new Array(9999).fill(0);
  n4.tempflag = new Array(100).fill(0);
  n4.flag[13] = 0;
  n4.turntimer = 0;
  n4.sp = 4;
  n4.heartx = 0;
  n4.hearty = 0;
  n4.time = 0;
  n4.fighting = 0;
  n4.darkzone = 1;
  n4.plot = 100;
  n4.lang = "en";
  n4.monstercomment = [" ", " ", " "];
  n4.batmusic = [null, null];
  n4.automiss = [0, 0, 0];
  n4.damage_cache = [];
  n4.input_g = [];
  nn(n4.chapter);
}
k(n9, "scr_gamestart");
function nn(n) {
  let q = String(u[n] ? n : 1);
  n4.input_k = u[q].slice();
  n4.asc_def = [];
  for (let [nT, ns] of Object.entries(F[q])) {
    n4.asc_def[+nT] = ns;
  }
}
k(nn, "scr_controls_default");
function nl(n) {
  let q = (nT, ns) => {
    for (let nS = nT.length; nS < n; nS++) {
      nT[nS] = typeof ns == "function" ? ns() : ns;
    }
    return nT;
  };
  for (let nT = 4; nT < n; nT++) {
    if (n4.charbase[nT] === undefined) {
      n4.charbase[nT] = 1;
    }
  }
  q(n4.hp, 0);
  q(n4.maxhp, 0);
  q(n4.at, 0);
  q(n4.df, 0);
  q(n4.mag, 0);
  q(n4.charweapon, 0);
  q(n4.chararmor1, 0);
  q(n4.chararmor2, 0);
  q(n4.charauto, 0);
  q(n4.itemat, () => [0, 0, 0, 0]);
  q(n4.itemdf, () => [0, 0, 0, 0]);
  q(n4.itemmag, () => [0, 0, 0, 0]);
  q(n4.itemgrazesize, () => [0, 0, 0, 0]);
  q(n4.spell, () => new Array(12).fill(0));
  for (let ns = 4; ns < n; ns++) {
    let nS = n4.charbase[ns] || 1;
    n4.charname[ns] ||= n4.charname[nS];
    if (!n4.spell[ns].some(Boolean)) {
      n4.spell[ns] = n4.spell[nS].slice();
    }
  }
}
k(nl, "scr_widen_party");
var na = k(n => n4.charbase && n4.charbase[n] || (n >= 1 && n <= 3 ? n : 1), "charBase");
function nq(n) {
  for (let q = 0, nT = ng(); q < nT; q++) {
    let ns = n4.char[q];
    if (ns && na(ns) === n) {
      return q;
    }
  }
  return -1;
}
k(nq, "scr_charslot");
function nG(n) {
  if (nq(n) >= 0) {
    return 1;
  } else {
    return 0;
  }
}
k(nG, "scr_havechar");
function nO() {
  let n = nq(1);
  if (n < 0) {
    return 0;
  } else {
    return n;
  }
}
k(nO, "krisSlot");
var nY = 64;
var nD = k(() => n4.char ? n4.char.length : 3, "PARTY");
var ng = k(() => n4.customTeam === 1 && n4.char ? Math.max(3, n4.char.length) : 3, "ACTSLOTS");
var nC = k(n => n4.customTeam === 1 ? na(n) : n, "ACTKIND");
var nd = k(n => n4.customTeam !== 1 || !n4.actingsimul || n4.actingsimul[n] !== 0, "ACTSIMUL");
function nP(n, q) {
  if (n4.customTeam !== 1 || !n || !n4.actingchoice) {
    return;
  }
  let nT = n4.actingchoice[q];
  if (!(nT >= 0)) {
    return;
  }
  let ns = na(n4.char[q]);
  if (ns === 2) {
    n.actingsus = nT + 1;
  } else if (ns === 3) {
    n.actingral = nT + 1;
  } else if (ns === 4) {
    n.actingnoe = nT + 1;
  }
}
k(nP, "ACTRESTAMP");
var ni = {
  charaction: 0,
  faceaction: 0,
  acting: 0,
  charspecial: 0,
  targeted: 0,
  chartarget: 0,
  charmove: 1,
  charcantarget: 1,
  chardead: 0,
  charcond: 0,
  temptension: 0,
  battleat: 0,
  battledf: 0,
  battlemag: 0,
  charinstance: null,
  heromakex: 80,
  heromakey: 140,
  hittarget2: 0
};
function nB(n) {
  for (let [q, nT] of Object.entries(ni)) {
    if (!Array.isArray(n4[q])) {
      n4[q] = [];
    }
    for (let ns = 0; ns < n; ns++) {
      if (n4[q][ns] === undefined) {
        n4[q][ns] = nT;
      }
    }
    n4[q].length = Math.max(n4[q].length, n);
  }
  for (let nS of ["canact", "actname"]) {
    if (!Array.isArray(n4[nS])) {
      n4[nS] = [];
    }
    for (let nt = 0; nt < n; nt++) {
      if (!Array.isArray(n4[nS][nt])) {
        n4[nS][nt] = new Array(6).fill(nS === "canact" ? 0 : " ");
      }
    }
  }
  if (!Array.isArray(n4.bmenucoord)) {
    n4.bmenucoord = [];
  }
  for (let nL = 0; nL < Math.max(20, n); nL++) {
    if (!Array.isArray(n4.bmenucoord[nL])) {
      n4.bmenucoord[nL] = new Array(Math.max(20, n)).fill(0);
    }
  }
  if (n > 20) {
    for (let nc of n4.bmenucoord) {
      if (Array.isArray(nc)) {
        while (nc.length < n) {
          nc.push(0);
        }
      }
    }
  }
}
k(nB, "scr_resize_party");
var nJ = {
  0: [" ", 0, 0, 0, 0]
};
var nf = {
  0: [" ", 0, 0, 0, 0]
};
var nv = {};
var nK = {};
var nZ = {};
for (let lu of Object.values(E.weapons)) {
  nJ[lu.id] = [lu.name, lu.at, lu.df, lu.mag, lu.grazesize];
  nK[lu.id] = lu.chars;
}
for (let lF of Object.values(E.armors)) {
  nf[lF.id] = [lF.name, lF.at, lF.df, lF.mag, lF.grazesize];
  nZ[lF.id] = lF.chars;
}
for (let lw of Object.values(E.items)) {
  if (lw.battle) {
    nv[200 + lw.id] = [lw.name, lw.name, lw.target, lw.desc.replace(/#/g, " ")];
  }
}
function nW(n) {
  let q = E.items[n - 200];
  if (q) {
    return q.effect;
  } else {
    return null;
  }
}
k(nW, "itemEffect");
function nA() {
  for (let q = 1; q < (n4.charbase ? n4.charbase.length : 4); q++) {
    let nT = nJ[n4.charweapon[q]] || nJ[0];
    let ns = nf[n4.chararmor1[q]] || nf[0];
    let nS = nf[n4.chararmor2[q]] || nf[0];
    let nt = l0 => l0 === "chapter" ? n4.chapter | 0 : +l0 || 0;
    let nL = nT.map((l0, l1) => l1 ? nt(l0) : l0);
    let nc = ns.map((l0, l1) => l1 ? nt(l0) : l0);
    let nR = nS.map((l0, l1) => l1 ? nt(l0) : l0);
    n4.itemat[q] = [nL[1], nc[1], nR[1], 0];
    n4.itemdf[q] = [nL[2], nc[2], nR[2], 0];
    n4.itemmag[q] = [nL[3], nc[3], nR[3], 0];
    n4.itemgrazesize[q] = [0, nc[4], nR[4], 0];
  }
}
k(nA, "scr_iteminfo_all");
var nm = {};
var nx = k(n => !!n && n4.charweapon && n4.charweapon[n] === 13, "thorn");
function ny(q, nT) {
  if (q >= 1000) {
    let nc = n3(q, n4.maxtension);
    if (nc) {
      return nc;
    }
  }
  if (n4.chapter >= 4 && nm[n4.chapter]) {
    let nR = nm[n4.chapter](q);
    if (nR && q === 10) {
      return {
        ...nR,
        cost: n4.maxtension
      };
    }
    if (nR && q === 9 && nx(nT) && nT !== 4 && n4.charweapon[4] !== 13 && nR.cost > 0) {
      return {
        ...nR,
        cost: nR.cost * 0.5
      };
    }
    if (nR) {
      return nR;
    }
  }
  let ns = {
    0: [" ", " ", 0, -1, "None"],
    1: ["Rude Sword", "RudeSword", 2, 125, "Rude#Damage#"],
    2: ["Heal Prayer", "Heal Prayer", 1, 80, "Heal#Ally"],
    3: ["Pacify", "Pacify", 2, 40, "Spare#TIRED foe"],
    4: ["Rude Buster", "Rude Buster", 2, 125, "Rude#Damage#"],
    5: ["Red Buster", "Red Buster", 2, 0, "Red#Damage#"],
    6: ["Dual Heal", "Dual Heal", 0, 0, "Heal All#30 HP"],
    7: ["ACT", "ACT", 0, 0, "Use#action"],
    8: ["SleepMist", "Sleep Mist", 0, 80, "Spare#TIRED foes"],
    9: ["IceShock", "IceShock", 2, 40, "Damage#w/ ICE"],
    10: ["SnowGrave", "SnowGrave", 0, n4.maxtension, "Fatal"]
  }[q] || [" ", " ", 0, -1, " "];
  let nS = ns[3];
  if (q === 4 && n4.charweapon[2] === 7) {
    nS = 100;
  }
  if (nx(nT) && q === 9) {
    nS *= 0.5;
  }
  let nt = q === 10 && (n4.flag[924] | 0) < 4 && H.first("obj_berdlyb2_enemy") ? 3 : ns[2];
  let nL = q === 10 && nt !== 3 && H.first("obj_berdlyb2_enemy") ? 1 : 0;
  return {
    spellname: ns[0],
    spellnameb: ns[1],
    spelltarget: nt,
    cost: nS,
    spelldescb: ns[4],
    spellanim: nL
  };
}
k(ny, "scr_spellinfo");
function no() {
  let n = Math.max(4, n4.charbase ? n4.charbase.length : 4);
  n4.spellname = [];
  n4.spellnameb = [];
  n4.spellcost = [];
  n4.spelldescb = [];
  n4.spelltarget = [];
  for (let q = 0; q < n; q++) {
    n4.spellname[q] = [];
    n4.spellnameb[q] = [];
    n4.spellcost[q] = [];
    n4.spelldescb[q] = [];
    n4.spelltarget[q] = [];
    if (!Array.isArray(n4.spell[q])) {
      n4.spell[q] = new Array(12).fill(0);
    }
  }
  for (let nT = 0; nT < n; nT++) {
    for (let ns = 0; ns < 12; ns++) {
      let nS = ny(n4.spell[nT][ns] || 0, nT);
      n4.spellname[nT][ns] = nS.spellname;
      n4.spellnameb[nT][ns] = nS.spellnameb;
      n4.spellcost[nT][ns] = nS.cost;
      n4.spelldescb[nT][ns] = nS.spelldescb;
      n4.spelltarget[nT][ns] = nS.spelltarget;
    }
  }
}
k(no, "scr_spellinfo_all");
function nV(n) {
  n4.tension += n;
  if (n4.tension > n4.maxtension) {
    n4.tension = n4.maxtension;
  }
  if (n4.chapter >= 4 && nw.tensionCap) {
    let q = nw.tensionCap();
    if (q != null && n4.tension > q) {
      n4.tension = q;
    }
  }
}
k(nV, "scr_tensionheal");
function nH() {
  return n4.monster[0] + n4.monster[1] + n4.monster[2];
}
k(nH, "scr_monsterpop");
function nr(n) {
  n4.charmove[n] = 0;
  n4.charcantarget[n] = 0;
  n4.chardead[n] = 1;
  n4.charaction[n] = 0;
  n4.charspecial[n] = 0;
}
k(nr, "scr_dead");
function nk(n) {
  n4.charmove[n] = 1;
  n4.charcantarget[n] = 1;
  n4.chardead[n] = 0;
}
k(nk, "scr_revive");
function nI(n, q) {
  let nT = 0;
  if (n4.chararmor1[n] === q) {
    nT++;
  }
  if (n4.chararmor2[n] === q) {
    nT++;
  }
  return nT;
}
k(nI, "scr_armorcheck_equipped");
function np(n) {
  let q = 0;
  for (let nT = 0; nT < 3; nT++) {
    if (n4.char[nT] !== 0 && n4.char[nT] !== undefined) {
      q += nI(n4.char[nT], n);
    }
  }
  return q;
}
k(np, "scr_armorcheck_equipped_party");
function nE(n, q) {
  n4.mercymod[n] += q;
  if (n4.mercymod[n] < 0) {
    n4.mercymod[n] = 0;
  }
  if (n4.chapter < 2) {
    return;
  }
  if (n4.mercymod[n] >= 100) {
    n4.mercymod[n] = 100;
  }
  let nT = 1;
  if (q <= 0) {
    nT = 0;
  }
  H.with("obj_dmgwriter", ns => {
    if (ns.type === 5) {
      nT = 0;
    }
  });
  if (nT) {
    let ns = 0.8;
    if (q < 99) {
      ns = 1;
    }
    if (q <= 50) {
      ns = 1.2;
    }
    if (q <= 25) {
      ns = 1.4;
    }
    W("snd_mercyadd", {
      volume: 0.8,
      pitch: ns
    });
  }
  if (nw.dmgwriter) {
    let nS = nw.dmgwriter(n4.monsterx[n], n4.monstery[n] + 20 - n4.hittarget[n] * 20);
    nS.damage = q;
    nS.type = 5;
  }
  n4.hittarget[n]++;
}
k(nE, "scr_mercyadd");
function nu(q, nT) {
  let ns = n4.char[q];
  let nS = n4.hp[ns];
  let nt = 0;
  let nL = 0;
  if (n4.hp[ns] <= 0) {
    nL = 1;
  }
  if (n4.hp[ns] > n4.maxhp[ns]) {
    nt = 1;
  }
  if (nt === 0) {
    n4.hp[ns] += nT;
    if (n4.hp[ns] > n4.maxhp[ns]) {
      n4.hp[ns] = n4.maxhp[ns];
    }
  }
  if (nL === 1 && n4.hp[ns] >= 0) {
    if (n4.hp[ns] < r(n4.maxhp[ns] / 6)) {
      n4.hp[ns] = r(n4.maxhp[ns] / 6);
    }
    nk(q);
  }
  W("snd_power");
  return n4.hp[ns] - nS;
}
k(nu, "scr_heal");
function nF(n) {
  for (let q = 0; q < nD(); q++) {
    if (n4.char[q] !== 0) {
      nu(q, n);
    }
  }
}
k(nF, "scr_healall");
var nw = {
  dmgwriter: null,
  gameover: null,
  shake: null,
  charinstance: k(() => null, "charinstance"),
  monsterinstance: k(n => null, "monsterinstance"),
  damagecheck: k(() => {}, "damagecheck"),
  scr_damage: null,
  scr_damage_all: null,
  scr_act_simul: null,
  scr_spareanim: null,
  scr_recruit: null,
  spellmenu_setup: null
};
function nN(n) {
  let q = [];
  for (let ns = 0; ns < Math.min(3, nD()); ns++) {
    if (n4.charcantarget[ns] === 1) {
      q.push(ns);
    }
  }
  let nT = q.length ? q[Math.min(q.length - 1, Math.floor(o(q.length)))] : 3;
  n4.targeted[nT] = 1;
  n.mytarget = nT;
  return nT;
}
k(nN, "scr_randomtarget");
function nQ(n) {
  for (let q = 0; q < Math.min(3, nD()); q++) {
    if (n4.charcantarget[q] === 1) {
      n4.targeted[q] = 1;
    }
  }
  n.mytarget = 3;
  n.target = 3;
}
k(nQ, "scr_targetall");
function nh(q) {
  if (!(n4.inv < 0)) {
    return;
  }
  if (n4.debugInv || f.invuln) {
    n4.inv = n4.invc * 40;
    return;
  }
  let nT = q.target;
  if (nT < 3 && n4.hp[n4.char[nT]] <= 0) {
    nT = nN(q);
    q.target = nT;
    let l1 = nw.charinstance(nT);
    if (l1) {
      l1.image_blend = "#ffffff";
      l1.darkify = 0;
    }
  }
  let ns = 3;
  let nS = q.damage;
  if (nT < 3) {
    nS = r(nS - n4.battledf[nT] * 3);
    ns = n4.char[nT];
    if (n4.charaction[nT] === 10) {
      nS = r(nS * 2 / 3);
    }
    if (nS < 1) {
      nS = 1;
    }
  }
  if (nw.shake) {
    nw.shake();
  }
  let nt = nT < 3 ? nw.charinstance(nT) : null;
  if (nt) {
    nt.hurt = 1;
    nt.hurttimer = 0;
  }
  let nL = nS;
  H.with("obj_dmgwriter", l2 => {
    if (l2.delaytimer >= 1) {
      l2.killactive = 1;
    }
  });
  let nc = -1;
  let nR = H.first("obj_heart");
  if (nR) {
    nR.dmgnoise = 1;
  }
  if (nT < 3 && (n4.hp[ns] <= 0 ? (nc = 4, n4.hp[ns] -= V(nS / 4), nL = V(nS / 4)) : (n4.hp[ns] -= nS, n4.hp[ns] <= 0 && (nL = J(n4.hp[ns] - n4.maxhp[ns] / 2), nc = 4, n4.hp[ns] = V(-n4.maxhp[ns] / 2), nr(nT))), nw.dmgwriter && nt)) {
    let l2 = nw.dmgwriter(nt.x, nt.y + nt.myheight - 24);
    l2.damage = nL;
    l2.type = nc;
  }
  if (nT === 3) {
    for (let l3 = 0; l3 < nD(); l3++) {
      ns = n4.char[l3];
      if (n4.hp[ns] >= 0) {
        if (n4.charaction[l3] === 10) {
          n4.hp[ns] -= r(nS / 2);
        } else {
          n4.hp[ns] -= nS;
        }
        if (n4.hp[ns] <= 0) {
          n4.hp[ns] = V(-n4.maxhp[0] / 2);
        }
      }
    }
  }
  n4.inv = n4.invc * 40;
  nw.damagecheck();
  let l0 = 1;
  for (let l4 = 0; l4 < nD(); l4++) {
    if (n4.char[l4] !== 0 && n4.hp[n4.char[l4]] > 0) {
      l0 = 0;
    }
  }
  if (l0 === 1 && nw.gameover) {
    nw.gameover();
  }
}
k(nh, "scr_damage");
function nb(n) {
  if (!(n4.inv < 0)) {
    return;
  }
  let q = n.damage;
  let nT = n.target;
  for (let ns = 0; ns < nD(); ns++) {
    n4.inv = -1;
    n.damage = q;
    n.target = ns;
    if (n4.hp[n4.char[ns]] > 0 && n4.char[ns] !== 0) {
      nh(n);
    }
  }
  n4.inv = n4.invc * 40;
  n.target = nT;
}
k(nb, "scr_damage_all");
function nX(n) {
  let q = n4.charhero && n4.charhero[n];
  if (q === "noelle" || !q && n === 4 && n4.chapter >= 2) {
    if (n4.chapter >= 2) {
      return 6;
    } else {
      return 3;
    }
  }
  {
    let ns = q && L(q);
    if (ns && !ns.extends) {
      return ns.dmgtype ?? 0;
    }
  }
  let nT = {
    kris: 1,
    susie: 2,
    ralsei: 3
  }[q] || (n >= 1 && n <= 3 ? n : na(n));
  return Math.max(0, Math.min(3, nT - 1));
}
k(nX, "dmgTypeOf");
function nj(q, nT, ns) {
  let nS = null;
  if (nw.dmgwriter) {
    nS = nw.dmgwriter(n4.monsterx[q], n4.monstery[q] + 20 - n4.hittarget[q] * 20);
    nS.type = nX(n4.char[ns]);
    if (n4.chapter >= 2 && ns === 5 && !n4.char[5]) {
      nS.type = 5;
    }
    nS.damage = nT;
  }
  n4.monsterhp[q] -= nT;
  let nt = nw.monsterinstance(q);
  if (n4.chapter === 5 && nt && typeof nt.callback_on_damage == "function") {
    nt.callback_on_damage(nt);
  }
  if (nT > 0 && nt) {
    nt.shakex = 9;
    nt.state = 3;
    nt.hurttimer = 30;
    nt.hurtamt = nT;
  }
  n4.hittarget[q] += 1;
  if (nT === 0 && nt) {
    nt.hurtamt = 0;
    if (nt.hurttimer <= 15 && nt.candodge === 1) {
      nt.dodgetimer = 0;
      nt.state = 4;
    }
  }
  if (n4.chapter === 2 && H.first("obj_sweet_enemy") && n4.monsterhp[q] <= 0) {
    n4.monsterhp[q] = 1;
  }
  let nL = H.first("obj_queen_enemy") ? 1 : H.first("obj_spamton_neo_enemy") ? 2 : H.first("obj_berdlyb_enemy") ? 3 : 0;
  if (n4.monsterhp[q] <= 0 && nL === 0 && nt) {
    nt.scr_monsterdefeat();
  }
  if (n4.monsterhp[q] <= 0 && nL === 3 && nt) {
    nt.endcon = 1;
  }
  return nS;
}
k(nj, "scr_damage_enemy");
function nz() {
  nw.damagecheck();
}
k(nz, "scr_damage_check");
export { E as a, Q as b, t as c, c as d, n0 as e, n2 as f, n4 as g, n8 as h, n9 as i, nn as j, nl as k, na as l, nq as m, nG as n, nO as o, nY as p, nD as q, ng as r, nC as s, nd as t, nP as u, nB as v, nJ as w, nf as x, nv as y, nK as z, nZ as A, nW as B, nA as C, nm as D, ny as E, no as F, nV as G, nH as H, nr as I, nk as J, nI as K, np as L, nE as M, nu as N, nF as O, nw as P, nN as Q, nQ as R, nh as S, nb as T, nX as U, nj as V, nz as W };
