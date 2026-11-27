import { a as g, l as w } from "./c-XSSGDLV7.js";
w();
w();
var m = ["buttons", "keys", "socks", "coins"];
var t = ["buttons", "keys"];
var o = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var e = {
  rank: "Q",
  suit: "buttons"
};
var c = 6;
var f = [1, 5, 25, 100, 500];
var a = 1000;
var n = 200;
var k = 5;
var s = 3;
var r = 4;
var l = {
  max: 100,
  gain: {
    twenty: 10,
    five: 20,
    brave: 10,
    stare: 15
  },
  cost: {
    glow: 25,
    snag: 50,
    redraw: 50,
    knuckle: 75,
    find: 100
  }
};
var b = {
  wick: "glow",
  bobbin: "snag",
  sienna: "redraw",
  aggie: "knuckle",
  finder: "find"
};
var h0 = ["wick", "bobbin", "sienna", "aggie", "finder"];
var h1 = ["dogear", "management", "lefty", "spareman", "tally", "nibs", "penny", "warranty", "keyes", "bunnie"];
var h2 = {
  coin: {
    id: "coin",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: true,
    ticket: false,
    lint: false
  },
  glasses: {
    id: "glasses",
    h17: false,
    natural: 1,
    tiesLose: true,
    dealerOpen: true,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false
  },
  violin: {
    id: "violin",
    h17: true,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: false,
    ticket: true,
    lint: false
  },
  lint: {
    id: "lint",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: true,
    lintWin: 1.2
  },
  finale: {
    id: "finale",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false,
    decks: 1,
    full: true,
    stakes: false
  }
};
var h3 = "true";
var h4 = [{
  id: "coin",
  name: "THE COIN RETURN",
  law: "coin",
  min: 5,
  max: 100,
  dealer: "dogear",
  left: "tally",
  right: "nibs",
  farSeat: true,
  plaque: "STANDARD RULES.",
  house: "TEETH MAY BET ONE.",
  open: {
    always: true
  }
}, {
  id: "glasses",
  name: "THE GLASSES CASE",
  law: "glasses",
  min: 10,
  max: 250,
  dealer: "dogear",
  left: "penny",
  right: "warranty",
  farSeat: true,
  plaque: "SEEN THROUGH: BOTH DEALER CARDS FACE UP. TIES LOSE. NATURALS PAY EVEN.",
  open: {
    ticket: "SIXTEEN",
    count: 4,
    beat: 5
  }
}, {
  id: "violin",
  name: "THE VIOLIN CASE",
  law: "violin",
  min: 25,
  max: 500,
  dealer: "lefty",
  left: "keyes",
  right: "bunnie",
  farSeat: true,
  plaque: "THE STAND-IN: THE BUS TICKET COUNTS AS ANY CARD. DEALER HITS SOFT 17.",
  open: {
    ticket: "SPLIT_WIN",
    count: 8,
    beat: 6
  }
}, {
  id: "lint",
  name: "THE LINT TRAP",
  law: "lint",
  min: 1,
  max: 51,
  dealer: "spareman",
  left: null,
  right: null,
  farSeat: false,
  plaque: "UNDER THE LINT: EVERY THIRD CARD IS DEALT FACE DOWN. NOBODY PEEKS. A WIN WITH LINT IN IT PAYS 6 TO 5.",
  open: {
    flag: "lintOpen",
    beat: 10
  }
}];
var h5 = {
  id: "finale",
  name: "THE FIFTY-SECOND HAND",
  law: "finale",
  min: 0,
  max: 0,
  dealer: "spareman",
  left: null,
  right: null,
  farSeat: false,
  plaque: "",
  open: {
    flag: "finale"
  }
};
var h6 = [{
  id: "NATURAL",
  text: "Held a natural.",
  room: null
}, {
  id: "SIXTEEN",
  text: "Stood on 16 against a ten and won.",
  room: null
}, {
  id: "FIVE_CARD",
  text: "Won with five cards.",
  room: null
}, {
  id: "SPLIT_WIN",
  text: "Won both halves of a split.",
  room: null
}, {
  id: "DOUBLE_FACE",
  text: "Doubled on 11 and caught a face.",
  room: null
}, {
  id: "THREE_RINGS",
  text: "Won all three rings in one deal.",
  room: null
}, {
  id: "BUS_TICKET",
  text: "Won with the bus ticket.",
  room: "violin"
}, {
  id: "SEEN_21",
  text: "Beat a twenty you could see coming.",
  room: "glasses"
}, {
  id: "LINT_BUST",
  text: "Busted under the lint.",
  room: "lint"
}, {
  id: "STAKED",
  text: "Staked a stranger.",
  room: null
}, {
  id: "WELL_PLAYED",
  text: "Made Dog-Ear say \"well played\".",
  room: null
}, {
  id: "CORNER",
  text: "Called the corner three times in one visit.",
  room: null
}, {
  id: "CLAIMED",
  text: "Won the Keepsake bet.",
  room: null
}, {
  id: "UNCLAIMED",
  text: "Wore the tag with dignity.",
  room: null
}, {
  id: "INSURED",
  text: "Took Warranty's advice. It paid.",
  room: null
}, {
  id: "SURRENDER",
  text: "Gave half back to Management.",
  room: "coin"
}, {
  id: "GLOW_21",
  text: "Leaned left, hit, twenty-one.",
  room: null
}, {
  id: "SNAG_BUST",
  text: "Pulled a thread; the dealer came apart.",
  room: null
}, {
  id: "REDRAW_TWO",
  text: "Redrew into two winners.",
  room: null
}, {
  id: "KNUCKLE_12",
  text: "Knew enough to stand on twelve.",
  room: null
}, {
  id: "NIBS_ONE",
  text: "Watched Nibs win one.",
  room: "coin"
}, {
  id: "BUNNIE_FIVE",
  text: "Saw Bunnie hold five cards.",
  room: "violin"
}, {
  id: "KEYES_21",
  text: "Saw the cycle land on twenty-one.",
  room: "violin"
}, {
  id: "FIFTY_ONE",
  text: "Counted the shoe.",
  room: null
}, {
  id: "LEVER",
  text: "Pulled the lever eleven times.",
  room: "coin"
}, {
  id: "FIFTY_TWO",
  text: "Played the fifty-second hand.",
  room: null
}];
var h7 = [{
  n: 1,
  id: "arrive",
  room: "coin",
  at: "sit"
}, {
  n: 2,
  id: "first_rummage",
  room: "coin",
  at: "after2"
}, {
  n: 3,
  id: "tally_fades",
  room: "coin",
  at: "after2"
}, {
  n: 4,
  id: "nibs_jar",
  room: "coin",
  at: "after2"
}, {
  n: 5,
  id: "penny_taken",
  room: "glasses",
  at: "after2"
}, {
  n: 6,
  id: "lefty_found",
  room: "violin",
  at: "after2"
}, {
  n: 7,
  id: "reprint",
  room: "coin",
  at: "sit"
}, {
  n: 8,
  id: "always_same",
  room: "coin",
  at: "after2"
}, {
  n: 9,
  id: "pillow",
  room: "coin",
  at: "sit"
}, {
  n: 10,
  id: "eleventh_key",
  room: "violin",
  at: "after2"
}, {
  n: 11,
  id: "spareman_speaks",
  room: "lint",
  at: "sit"
}, {
  n: 12,
  id: "last_call",
  room: "coin",
  at: "sit"
}];
var h8 = {
  visit: "BJ_VISIT",
  five: "BJ_FIVE",
  corner: "BJ_CORNER",
  claims: "BJ_CLAIMS",
  finale: "BJ_52"
};
var h9 = {
  tally: 300,
  nibs: 20,
  penny: 200,
  warranty: 250,
  keyes: 400,
  bunnie: 150,
  spareman: 500
};
var hx = 5;
var hu = {
  dogear: "dogear_corner",
  lefty: "lefty_hum"
};
var hi = Object.fromEntries(h4.concat([h5]).map(iK => [iK.id, iK]));
function hy(iK) {
  return hi[iK] || null;
}
g(hy, "roomById");
var hY = Object.fromEntries(h6.map(iK => [iK.id, iK]));
var hj = g(iK => (typeof iK == "string" ? h2[iK] || h2[(hi[iK] || {}).law] : iK) || h2.coin, "lawOf");
function hp(...iK) {
  let iW = 2166136261;
  let ic = iK.map(iN => String(iN)).join("");
  for (let iN = 0; iN < ic.length; iN++) {
    iW ^= ic.charCodeAt(iN);
    iW = Math.imul(iW, 16777619) >>> 0;
  }
  return iW >>> 0;
}
g(hp, "hashSeed");
function hD(iK) {
  let iW = iK >>> 0;
  let ic = {
    next() {
      iW = iW + 1831565813 >>> 0;
      let iN = iW;
      iN = Math.imul(iN ^ iN >>> 15, iN | 1);
      iN ^= iN + Math.imul(iN ^ iN >>> 7, iN | 61);
      return ((iN ^ iN >>> 14) >>> 0) / 4294967296;
    },
    int(iN) {
      return Math.floor(ic.next() * iN);
    },
    chance(iN) {
      return ic.next() < iN;
    },
    pick(iN) {
      return iN[ic.int(iN.length)];
    },
    shuffle(iN) {
      for (let iF = iN.length - 1; iF > 0; iF--) {
        let iI = ic.int(iF + 1);
        let ia = iN[iF];
        iN[iF] = iN[iI];
        iN[iI] = ia;
      }
      return iN;
    },
    fork(iN) {
      return hD(hp(iW, iN));
    },
    state() {
      return iW >>> 0;
    }
  };
  return ic;
}
g(hD, "rng");
function hQ(iK) {
  if (!iK) {
    return null;
  }
  let iW = iK.rank;
  if (iW === "TICKET") {
    return "TICKET";
  } else if (iW === "A" || iW === "10" || iW === "J" || iW === "Q" || iW === "K") {
    return "HIGH";
  } else if (+iW <= 6) {
    return "LOW";
  } else {
    return "MID";
  }
}
g(hQ, "band");
function hg(iK) {
  return !!iK && (iK.rank === "10" || iK.rank === "J" || iK.rank === "Q" || iK.rank === "K");
}
g(hg, "isTen");
function hU(iK) {
  return !!iK && (iK.rank === "J" || iK.rank === "Q" || iK.rank === "K");
}
g(hU, "isFace");
function hZ(iK) {
  let iW = hQ(iK);
  if (iW === "LOW") {
    return 1;
  } else if (iW === "HIGH") {
    return -1;
  } else {
    return 0;
  }
}
g(hZ, "hiLo");
function hw(iK) {
  if (iK === "A") {
    return 1;
  } else if (iK === "TICKET") {
    return 0;
  } else if (iK === "J" || iK === "Q" || iK === "K") {
    return 10;
  } else {
    return +iK;
  }
}
g(hw, "rankValue");
var hC = g((iK, iW) => iK === "Q" && iW === "buttons", "isMissing");
function hB({
  law: iK,
  rng: iW,
  decks: ic = c,
  full: iN = false
} = {}) {
  let iF = hj(iK);
  let iI = [];
  let ia = 0;
  for (let iG = 0; iG < ic; iG++) {
    for (let ik of m) {
      for (let iJ of o) {
        if (!!iN || !hC(iJ, ik)) {
          iI.push(Object.freeze({
            id: ia++,
            rank: iJ,
            suit: ik,
            deck: iG
          }));
        }
      }
    }
  }
  if (iF.ticket) {
    iI.push(Object.freeze({
      id: ia++,
      rank: "TICKET",
      suit: null,
      deck: -1
    }));
  }
  let iR = {
    all: iI,
    cards: [],
    cut: 0,
    dealtSinceShuffle: 0,
    size: iI.length,
    pastCut: false,
    cutFired: false,
    shuffle() {
      iR.cards = iI.slice();
      iW.shuffle(iR.cards);
      iR.cut = Math.floor(iI.length * (0.72 + iW.next() * 0.06));
      iR.dealtSinceShuffle = 0;
      iR.pastCut = false;
      iR.cutFired = false;
    },
    draw() {
      if (!iR.cards.length) {
        iR.shuffle();
      }
      let iA = iR.cards.shift();
      iR.dealtSinceShuffle++;
      if (iR.dealtSinceShuffle > iR.cut) {
        iR.pastCut = true;
      }
      return iA;
    },
    burn() {
      return iR.draw();
    },
    peek() {
      if (iR.cards.length) {
        return iR.cards[0];
      } else {
        return null;
      }
    },
    take(iA) {
      let ir = iR.cards.findIndex(il => il.rank === iA.rank && il.suit === iA.suit);
      if (ir < 0) {
        return iR.draw();
      }
      let iL = iR.cards.splice(ir, 1)[0];
      iR.dealtSinceShuffle++;
      if (iR.dealtSinceShuffle > iR.cut) {
        iR.pastCut = true;
      }
      return iL;
    },
    get remaining() {
      return iR.cards.length;
    }
  };
  iR.shuffle();
  return iR;
}
g(hB, "makeShoe");
function hO(iK) {
  let iW = 0;
  let ic = 0;
  let iN = false;
  let iF = 0;
  for (let iG of iK) {
    iF++;
    if (iG.rank === "TICKET") {
      iN = true;
      continue;
    }
    let ik = hw(iG.rank);
    iW += ik;
    if (ik === 1) {
      ic++;
    }
  }
  let iI;
  let ia;
  let iR = null;
  if (iN) {
    let iJ = ic && iW + 10 + 1 <= 21 ? 10 : 0;
    let iA = null;
    for (let ir of iJ ? [10, 0] : [0]) {
      for (let iL = 11; iL >= 1; iL--) {
        let il = iW + ir + iL;
        if (il <= 21 && (iA === null || il > iA.s)) {
          iA = {
            s: il,
            t: iL,
            b: ir
          };
          break;
        }
      }
    }
    if (iA) {
      iI = iA.s;
      iR = iA.t;
      ia = iA.t > 1 || iA.b > 0;
    } else {
      iI = iW + 1;
      iR = 1;
      ia = false;
    }
  } else if (ic && iW + 10 <= 21) {
    iI = iW + 10;
    ia = true;
  } else {
    iI = iW;
    ia = false;
  }
  return {
    total: iI,
    soft: ia,
    ticketAs: iR,
    hard: iW,
    aces: ic,
    ticket: iN,
    n: iF
  };
}
g(hO, "valueOf");
function hm(iK) {
  if (iK.length !== 2) {
    return false;
  }
  let [iW, ic] = iK;
  let iN = iW.rank === "TICKET" ? ic : ic.rank === "TICKET" ? iW : null;
  if (iN) {
    return iN.rank === "A" || hg(iN);
  } else {
    return iW.rank === "A" && hg(ic) || ic.rank === "A" && hg(iW);
  }
}
g(hm, "naturalOf");
function hH(iK, {
  split: iW = false,
  hiddenIds: ic = null
} = {}) {
  let iN = hO(iK);
  let iF = ic ? iK.filter(ia => !ic.has(ia.id)) : iK;
  let iI = ic ? hO(iF) : iN;
  return {
    total: iN.total,
    soft: iN.soft,
    bust: iN.total > 21,
    natural: !iW && hm(iK),
    ticketAs: iN.ticketAs,
    visible: {
      total: iI.total,
      soft: iI.soft,
      count: iF.length
    },
    hidden: iK.length - iF.length
  };
}
g(hH, "handValue");
function hT(iK, iW) {
  let ic = hj(iW);
  let iN = iK;
  if (iN.total < 17) {
    return true;
  } else {
    return !!ic.h17 && !!iN.soft && iN.total === 17;
  }
}
g(hT, "dealerShouldHit");
var hq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var hX = {
  51: hq.map(iK => (iK === 10 ? 15 : 4) / 51),
  52: hq.map(iK => (iK === 10 ? 16 : 4) / 52)
};
var hV = g((iK, iW) => iW && iK + 10 <= 21 ? iK + 10 : iK, "tot");
var hz = g((iK, iW) => iW && iK + 10 <= 21, "isSoft");
function ho(iK, iW, ic, iN, iF) {
  let iI = iK * 2 + (iW ? 1 : 0);
  if (iF[iI]) {
    return iF[iI];
  }
  let ia = new Float64Array(6);
  if (iK > 21) {
    ia[5] = 1;
  } else {
    let iR = hV(iK, iW);
    if (iR >= 17 && (!ic || !hz(iK, iW) || iR !== 17)) {
      ia[iR - 17] = 1;
    } else {
      for (let iG = 0; iG < 10; iG++) {
        let ik = hq[iG];
        let iJ = ho(iK + ik, iW || ik === 1, ic, iN, iF);
        for (let iA = 0; iA < 6; iA++) {
          ia[iA] += iN[iG] * iJ[iA];
        }
      }
    }
  }
  iF[iI] = ia;
  return ia;
}
g(ho, "dealerFrom");
function hK(iK, iW, ic, iN) {
  let iF = [];
  let iI = new Float64Array(6);
  let ia = 0;
  let iR = 0;
  for (let iG = 0; iG < 10; iG++) {
    let ik = hq[iG];
    if (iK === 1 && ik === 10 || iK === 10 && ik === 1) {
      if (!ic) {
        ia += iN[iG];
      }
      continue;
    }
    iR += iN[iG];
    let iJ = ho(iK + ik, iK === 1 || ik === 1, iW, iN, iF);
    for (let iA = 0; iA < 6; iA++) {
      iI[iA] += iN[iG] * iJ[iA];
    }
  }
  if (ic) {
    for (let ir = 0; ir < 6; ir++) {
      iI[ir] /= iR;
    }
    ia = 0;
  }
  return {
    d: iI,
    bj: ia
  };
}
g(hK, "dealerFromUp");
function hW(iK, iW, ic) {
  let iN = new Map();
  let iF = (ik, iJ, iA, ir, iL) => {
    let il = ik + "," + iJ + "," + iA + "," + ir + "," + Math.min(iL, 3);
    if (iN.has(il)) {
      return iN.get(il);
    }
    let iv = new Float64Array(8);
    if (ik + iA > 21) {
      iv[5] = 1;
    } else if (hV(ik, iJ) >= 17) {
      let iS = hV(ik + iA, iJ || ir);
      if (iL === 2 && iS === 21) {
        iv[6] = 1;
      } else if (iS >= 17) {
        iv[iS - 17] = 1;
      } else {
        iv[7] = 1;
      }
    } else {
      for (let iE = 0; iE < 10; iE++) {
        let iM = hq[iE];
        let iP = iF(ik + iM, iJ || iM === 1, iA, ir, iL + 1);
        let ib = iF(ik, iJ, iA + iM, ir || iM === 1, iL + 1);
        for (let id = 0; id < 8; id++) {
          iv[id] += iW[iE] * (iP[id] * 0.6666666666666666 + ib[id] * 0.3333333333333333);
        }
      }
    }
    iN.set(il, iv);
    return iv;
  };
  let iI = new Float64Array(6);
  let ia = 0;
  let iR = 0;
  let iG = iK == null ? hq.map((ik, iJ) => [ik, iW[iJ], true]) : [[iK, 1, false]];
  for (let [ik, iJ, iA] of iG) {
    for (let ir = 0; ir < 10; ir++) {
      let iL = hq[ir];
      let il;
      if (ic) {
        il = iA ? iF(iL, iL === 1, ik, ik === 1, 2) : iF(ik + iL, ik === 1 || iL === 1, 0, false, 2);
      } else {
        il = iA ? iF(0, false, ik + iL, ik === 1 || iL === 1, 2) : iF(ik, ik === 1, iL, iL === 1, 2);
      }
      for (let iv = 0; iv < 6; iv++) {
        iI[iv] += iJ * iW[ir] * il[iv];
      }
      ia += iJ * iW[ir] * il[6];
      iR += iJ * iW[ir] * il[7];
    }
  }
  return {
    d: iI,
    bj: ia,
    low: iR
  };
}
g(hW, "dealerLintBlind");
function hc(iK, iW) {
  let ic = iK.low || 0;
  return (iN, iF = 1) => {
    if (iN > 21) {
      return -1;
    }
    let iI = iF * iK.d[5] - iK.bj;
    for (let ia = 0; ia < 5; ia++) {
      let iR = 17 + ia;
      if (iN > iR) {
        iI += iF * iK.d[ia];
      } else if (iN < iR || iW) {
        iI -= iK.d[ia];
      }
    }
    if (iN >= 17) {
      iI += iF * ic;
    }
    return iI;
  };
}
g(hc, "standEVfn");
function hN(iK, iW, ic) {
  let iN = hc(iK, iW.tiesLose);
  let iF = new Map();
  let iI = (iG, ik) => {
    if (iG > 21) {
      return -1;
    }
    let iJ = iG * 2 + (ik ? 1 : 0);
    if (iF.has(iJ)) {
      return iF.get(iJ);
    }
    let iA = hV(iG, ik);
    let ir = iN(iA);
    if (iA < 21) {
      let iL = 0;
      for (let il = 0; il < 10; il++) {
        iL += ic[il] * iI(iG + hq[il], ik || hq[il] === 1);
      }
      if (iL > ir) {
        ir = iL;
      }
    }
    iF.set(iJ, ir);
    return ir;
  };
  let ia = (iG, ik) => {
    let iJ = 0;
    for (let iA = 0; iA < 10; iA++) {
      iJ += ic[iA] * iI(iG + hq[iA], ik || hq[iA] === 1);
    }
    return iJ;
  };
  let iR = (iG, ik) => {
    let iJ = 0;
    for (let iA = 0; iA < 10; iA++) {
      let ir = iG + hq[iA];
      iJ += ic[iA] * (ir > 21 ? -1 : iN(hV(ir, ik || hq[iA] === 1)));
    }
    return iJ * 2;
  };
  return {
    stand: (iG, ik) => iN(hV(iG, ik)),
    hs: iI,
    hit: ia,
    dbl: iR,
    split: iG => {
      let ik = 0;
      for (let iJ = 0; iJ < 10; iJ++) {
        let iA = hq[iJ];
        let ir = iG + iA;
        let iL = iG === 1 || iA === 1;
        if (iG === 1) {
          ik += ic[iJ] * iN(hV(ir, iL));
        } else {
          ik += ic[iJ] * Math.max(iI(ir, iL), iR(ir, iL));
        }
      }
      return ik * 2;
    }
  };
}
g(hN, "makeSolver");
var hF = new Map();
function hf(iK, iW, ic) {
  let iN = iK.id + "|" + iW;
  let iF = hF.get(iN);
  if (!iF) {
    iF = ic();
    hF.set(iN, iF);
  }
  return iF;
}
g(hf, "solverFor");
function hI(iK) {
  if (iK.rank === "TICKET") {
    return 11;
  } else {
    return hw(iK.rank);
  }
}
g(hI, "upValueOf");
function ha(iK, iW) {
  let ic = new Map([[0, 1]]);
  for (let iN = 0; iN < iK; iN++) {
    let iF = new Map();
    for (let [iI, ia] of ic) {
      let iR = iI >> 1;
      let iG = iI & 1;
      for (let ik = 0; ik < 10; ik++) {
        let iJ = hq[ik];
        let iA = Math.min(iR + iJ, 31) << 1 | (iG || iJ === 1 ? 1 : 0);
        iF.set(iA, (iF.get(iA) || 0) + ia * iW[ik]);
      }
    }
    ic = iF;
  }
  return ic;
}
g(ha, "hiddenDist");
function hR(iK, iW, ic) {
  let iN = hc(iK, iW.tiesLose);
  let iF = 1 + (iW.lintWin || 1) - 1;
  let iI = [0, 1, 2, 3, 4].map(il => ha(il, ic));
  let ia = (il, iv, iS) => {
    if (il > 21) {
      return -1;
    }
    let iE = 0;
    for (let [iM, iP] of iI[Math.min(iS, 4)]) {
      let ib = il + (iM >> 1);
      let id = iv || (iM & 1) === 1;
      iE += iP * (ib > 21 ? -1 : iN(hV(ib, id), iS > 0 ? iF : 1));
    }
    return iE;
  };
  let iR = new Map();
  let iG = new Map();
  let ik = (il, iv, iS) => {
    let iE = il + "," + (iv ? 1 : 0) + "," + iS;
    let iM = iR.get(iE);
    if (iM === undefined) {
      iM = ia(il, iv, iS);
      iR.set(iE, iM);
    }
    return iM;
  };
  let iJ = il => il === 0 ? 2 : il - 1;
  let iA = (il, iv, iS, iE) => {
    let iM = 0;
    for (let iP = 0; iP < 10; iP++) {
      let ib = hq[iP];
      iM += ic[iP] * (iE === 0 ? ir(il, iv, Math.min(iS + 1, 4), 2) : ir(il + ib, iv || ib === 1, iS, iE - 1));
    }
    return iM;
  };
  let ir = (il, iv, iS, iE) => {
    if (il > 21) {
      return -1;
    }
    let iM = il + "," + (iv ? 1 : 0) + "," + iS + "," + iE;
    let iP = iG.get(iM);
    if (iP !== undefined) {
      return iP;
    }
    iP = ik(il, iv, iS);
    if (hV(il, iv) < 21 && iS < 4) {
      let ib = iA(il, iv, iS, iE);
      if (ib > iP) {
        iP = ib;
      }
    }
    iG.set(iM, iP);
    return iP;
  };
  let iL = (il, iv, iS, iE) => {
    let iM = 0;
    for (let iP = 0; iP < 10; iP++) {
      let ib = hq[iP];
      iM += ic[iP] * (iE === 0 ? ik(il, iv, iS + 1) : ik(il + ib, iv || ib === 1, iS));
    }
    return iM * 2;
  };
  return {
    stand: ik,
    hit: (il, iv, iS, iE) => iA(il, iv, iS, iE),
    dbl: iL,
    split: (il, iv) => {
      let iS = 0;
      for (let iE = 0; iE < 10; iE++) {
        let iM = hq[iE];
        if (iv === 0) {
          iS += ic[iE] * (il === 1 ? ik(1, true, 1) : Math.max(ir(il, il === 1, 1, 2), iL(il, il === 1, 1, 2)));
        } else if (il === 1) {
          iS += ic[iE] * ik(1 + iM, true, 0);
        } else {
          iS += ic[iE] * Math.max(ir(il + iM, iM === 1, 0, iJ(iv)), iL(il + iM, iM === 1, 0, iJ(iv)));
        }
      }
      return iS * 2;
    },
    V: ir
  };
}
g(hR, "makeLintSolver");
function hG(iK, iW, ic) {
  if (ic === "visible" || ic === "hole") {
    return hW(iK, iW, ic === "hole");
  }
  if (iK != null) {
    return hK(iK, false, false, iW);
  }
  let iN = new Float64Array(6);
  let iF = 0;
  for (let iI = 0; iI < 10; iI++) {
    let ia = hK(hq[iI], false, false, iW);
    for (let iR = 0; iR < 6; iR++) {
      iN[iR] += iW[iI] * ia.d[iR];
    }
    iF += iW[iI] * ia.bj;
  }
  return {
    d: iN,
    bj: iF
  };
}
g(hG, "lintDealerDist");
function hk(iK, iW, ic = {}) {
  let iN = hj(iW || iK.law);
  let iF = hX[iK.full || iN.full ? 52 : 51];
  let iI = iK.cards || [];
  let ia = iK.value && iK.value.total !== undefined ? iK.value : hH(iI);
  let iR = ia.visible ? ia.visible.total : ia.total;
  let iG = iK.hidden || 0;
  let ik = iS => iS === "double" ? iK.canDouble : iS === "split" ? iK.canSplit : iS === "surrender" ? iK.canSurrender : true;
  if (iR >= 21 && iG === 0) {
    return "stand";
  }
  if (iI.some(iS => iS.rank === "TICKET") && iG === 0) {
    return "hit";
  }
  let iJ = 0;
  let iA = false;
  for (let iS of iI) {
    let iE = hw(iS.rank);
    iJ += iE;
    if (iE === 1) {
      iA = true;
    }
  }
  let ir = iI.length === 2 && iI[0].rank === iI[1].rank ? hw(iI[0].rank) : 0;
  let iL = {};
  if (iN.lint) {
    let iM = ic.lintRule || h3;
    let iP = iK.dealerUp;
    let ib = iP ? Math.min(hI(iP), 10) : null;
    let id = hf(iN, "lint:" + iM + ":" + ib + ":" + (iF === hX[52] ? 52 : 51), () => hR(hG(ib === 11 ? 1 : ib, iF, iM), iN, iF));
    let y0 = iK.untilLint == null ? 1 : iK.untilLint;
    iL.stand = id.stand(iJ, iA, iG);
    iL.hit = id.hit(iJ, iA, iG, y0);
    if (ik("double") && iI.length + iG === 2) {
      iL.double = id.dbl(iJ, iA, iG, y0);
    }
    if (ik("split") && ir && iG === 0) {
      iL.split = id.split(ir, y0);
    }
  } else {
    let y1;
    if (iN.dealerOpen) {
      let y2 = iK.dealerCards || (iK.dealerUp ? [iK.dealerUp] : []);
      let y3 = 0;
      let y4 = false;
      for (let y5 of y2) {
        let y6 = hw(y5.rank);
        y3 += y6;
        if (y6 === 1) {
          y4 = true;
        }
      }
      y1 = hf(iN, "open:" + y3 + ":" + y4 + ":" + (iF === hX[52] ? 52 : 51), () => hN({
        d: ho(y3, y4, iN.h17, iF, []),
        bj: 0
      }, iN, iF));
    } else {
      let y7 = iK.dealerUp;
      let y8 = y7 ? y7.rank === "TICKET" ? 1 : hw(y7.rank) : 10;
      y1 = hf(iN, "up:" + y8 + ":" + (iF === hX[52] ? 52 : 51), () => hN(hK(y8, iN.h17, iN.peek, iF), iN, iF));
    }
    iL.stand = y1.stand(iJ, iA);
    iL.hit = y1.hit(iJ, iA);
    if (ik("double") && iI.length === 2) {
      iL.double = y1.dbl(iJ, iA);
    }
    if (ik("split") && ir) {
      iL.split = y1.split(ir);
    }
    if (ik("surrender") && iI.length === 2) {
      iL.surrender = -0.5;
    }
  }
  let il = "stand";
  let iv = -Infinity;
  for (let y9 of ["stand", "hit", "double", "split", "surrender"]) {
    if (iL[y9] !== undefined && iL[y9] > iv + 1e-12) {
      iv = iL[y9];
      il = y9;
    }
  }
  if (ic.withEV) {
    return {
      action: il,
      ev: iL
    };
  } else {
    return il;
  }
}
g(hk, "basicStrategy");
function hJ(iK, iW) {
  return iK._legal(iW);
}
g(hJ, "legalActions");
var hA = g((iK, iW) => !!iK && !!iW && iK.seat === iW.seat && iK.ring === iW.ring && iK.hand === iW.hand, "refEq");
var hr = g(iK => Math.round(iK * 2) / 2, "half");
var hL = class yh {
  constructor({
    room: iK,
    seed: iW,
    wallet: ic = a,
    you: iN = {
      char: "wick",
      nerve: 0
    },
    seats: iF = [{
      kind: "you"
    }],
    dealer: iI = null,
    tells: ia = {},
    script: iR = null,
    full: iG = false,
    canKeepsake: ik = true,
    lintRule: iJ = h3
  } = {}) {
    this.roomCfg = hy(iK) || hy("coin");
    this.room = this.roomCfg.id;
    this.law = h2[this.roomCfg.law];
    this.lintRule = iJ;
    this.dealerId = iI || this.roomCfg.dealer;
    this.base = hD(iW >>> 0);
    this.streams = {
      shoe: this.base.fork("shoe"),
      tell: this.base.fork("tell:" + this.dealerId),
      penny: this.base.fork("penny"),
      ai: {}
    };
    this.full = !!iG || !!this.law.full;
    this.shoe = hB({
      law: this.law,
      rng: this.streams.shoe,
      decks: this.law.decks || c,
      full: this.full
    });
    this.wallet = hr(ic);
    this.char = iN && iN.char || "wick";
    this.nerve = Math.max(0, Math.min(l.max, iN && iN.nerve || 0));
    this.tells = ia || {};
    this.script = iR;
    this.canKeepsake = ik;
    this.seats = iF.map((iA, ir) => {
      let iL = {
        i: ir,
        kind: iA.kind,
        id: iA.kind === "you" ? "you" : iA.id,
        cfg: iA,
        bank: iA.kind === "you" ? null : hr(iA.bank ?? (h9[iA.id] || 100)),
        rings: [],
        face: null,
        sitout: false,
        insurance: 0
      };
      if (iA.kind === "ai") {
        this.streams.ai[iA.id] = this.base.fork("ai:" + iA.id);
      }
      return iL;
    });
    this.youSeat = this.seats.findIndex(iA => iA.kind === "you");
    this.phase = "bet";
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.lastBets = [0, 0, 0];
    this.keepsakeRing = -1;
    this.keepsakeSpent = false;
    this.stareArmed = false;
    this.active = null;
    this.round = 0;
    this.seq = 0;
    this.seen = [];
    this.runningCount = 0;
    this.discard = 0;
    this.lastBigpot = -99;
    this.pendingShuffle = false;
    this._resetRound();
  }
  _resetRound() {
    this.dealer = {
      cards: [],
      hidden: new Set(),
      lint: new Set()
    };
    this.dealCount = 0;
    this.skillUsed = false;
    this.stare = null;
    this.skills = [];
    this.tellLog = [];
    this.fives = [];
    this.ticketSeenBy = null;
    this.insurance = {
      offered: false,
      amount: 0,
      won: false
    };
    this.dealerNatural = false;
    this.dealerDone = false;
    this.revealed = false;
    this.settleQueue = null;
    this.settled = [];
    this.roundBet = 0;
    this.redraw = null;
    this.knuckle = null;
    this.glow = null;
    this.bigpotFired = false;
    this._out = null;
    for (let iK of this.seats) {
      iK.rings = [];
      iK.sitout = false;
      iK.insurance = 0;
    }
  }
  _ev(iK, iW = {}) {
    let ic = {
      t: iK,
      seq: ++this.seq,
      ...iW
    };
    if (this._out) {
      this._out.push(ic);
    }
    return ic;
  }
  _begin() {
    this._out = [];
    return this._out;
  }
  _illegal(iK, iW) {
    return [{
      t: "illegal",
      seq: ++this.seq,
      action: iK,
      reason: iW
    }];
  }
  get you() {
    if (this.youSeat >= 0) {
      return this.seats[this.youSeat];
    } else {
      return null;
    }
  }
  _hand(iK) {
    if (!iK || iK === "dealer") {
      return null;
    }
    let iW = this.seats[iK.seat];
    let ic = iW && iW.rings[iK.ring];
    return ic && ic.hands[iK.hand] || null;
  }
  _cover(iK, iW) {
    if (iK.kind === "you") {
      return this.wallet >= iW;
    } else {
      return iK.bank >= iW;
    }
  }
  _pay(iK, iW) {
    if (iK.kind === "you") {
      this.wallet = hr(this.wallet + iW);
    } else {
      iK.bank = hr(iK.bank + iW);
    }
  }
  _charge(iK, iW) {
    this._pay(iK, -iW);
  }
  credit(iK) {
    this.wallet = hr(this.wallet + iK);
  }
  addBank(iK, iW) {
    let ic = this.seats.find(iN => iN.id === iK);
    if (ic) {
      ic.bank = hr(ic.bank + iW);
    }
    return !!ic;
  }
  _limits() {
    return this.roomCfg;
  }
  placeChip(iK, iW) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    } else if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring"
      };
    } else if (!(iK >= 0) || !(iK < s) || iK === this.keepsakeRing || !f.includes(iW)) {
      return {
        ok: false,
        reason: "ring"
      };
    } else if (this.bets[iK] + iW > this._limits().max) {
      return {
        ok: false,
        reason: "max"
      };
    } else if (iW > this.wallet) {
      return {
        ok: false,
        reason: "wallet"
      };
    } else {
      this.stacks[iK].push(iW);
      this.bets[iK] += iW;
      this.wallet = hr(this.wallet - iW);
      return {
        ok: true
      };
    }
  }
  liftChip(iK) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let iW = this.stacks[iK];
    if (!iW || !iW.length) {
      return {
        ok: false,
        reason: "ring"
      };
    }
    let ic = iW.pop();
    this.bets[iK] -= ic;
    this.wallet = hr(this.wallet + ic);
    return {
      ok: true,
      value: ic
    };
  }
  clearBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    for (let iK = 0; iK < s; iK++) {
      while (this.stacks[iK].length) {
        this.liftChip(iK);
      }
    }
    return {
      ok: true
    };
  }
  _setBets(iK) {
    this.clearBets();
    for (let iW = 0; iW < s; iW++) {
      let ic = iK[iW] || 0;
      if (iW !== this.keepsakeRing) {
        for (let iN = f.length - 1; iN >= 0 && ic > 0; iN--) {
          while (ic >= f[iN]) {
            this.stacks[iW].push(f[iN]);
            ic -= f[iN];
          }
        }
        this.bets[iW] = (iK[iW] || 0) - ic;
        this.wallet = hr(this.wallet - this.bets[iW]);
      }
    }
  }
  rebet() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let iK = this.lastBets.map((iN, iF) => iF === this.keepsakeRing ? 0 : iN);
    let iW = iK.reduce((iN, iF) => iN + iF, 0);
    if (!iW) {
      return {
        ok: false,
        reason: "nobet"
      };
    }
    let ic = this.bets.reduce((iN, iF) => iN + iF, 0);
    if (iW > this.wallet + ic) {
      return {
        ok: false,
        reason: "wallet"
      };
    } else if (iK.some(iN => iN > this._limits().max)) {
      return {
        ok: false,
        reason: "max"
      };
    } else {
      this._setBets(iK);
      return {
        ok: true
      };
    }
  }
  doubleBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let iK = this.bets.map(ic => ic * 2);
    let iW = this.bets.reduce((ic, iN) => ic + iN, 0);
    if (iW) {
      if (iW > this.wallet) {
        return {
          ok: false,
          reason: "wallet"
        };
      } else if (iK.some(ic => ic > this._limits().max)) {
        return {
          ok: false,
          reason: "max"
        };
      } else {
        this._setBets(iK);
        return {
          ok: true
        };
      }
    } else {
      return {
        ok: false,
        reason: "nobet"
      };
    }
  }
  armKeepsake() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    if (!this.canKeepsake || this.keepsakeSpent) {
      return {
        ok: false,
        reason: "used"
      };
    }
    if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring"
      };
    }
    while (this.stacks[0].length) {
      this.liftChip(0);
    }
    this.keepsakeRing = 0;
    return {
      ok: true
    };
  }
  armStare() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    } else if (this.law.dealerOpen || !this.tells[this.dealerId]) {
      return {
        ok: false,
        reason: "nodealer"
      };
    } else {
      this.stareArmed = true;
      return {
        ok: true
      };
    }
  }
  _newHand(iK, iW = {}) {
    return {
      cards: [],
      faceDown: new Set(),
      bet: iK,
      doubled: false,
      done: false,
      bust: false,
      bustRevealed: false,
      surrendered: false,
      fromSplit: false,
      splitAces: false,
      keepsake: false,
      noNatural: false,
      actions: [],
      stoodOn: null,
      doubledOn: null,
      doubleCard: null,
      result: null,
      twentyOne: false,
      glow: null,
      glowHit: false,
      five: false,
      ...iW
    };
  }
  _deal(iK, {
    hole: iW = false
  } = {}) {
    let ic;
    let iN = iK === "dealer" ? this.dealer : this._hand(iK);
    if (this.script && this.script.youSecond && iK !== "dealer" && iK.seat === this.youSeat && iK.ring === 0 && iK.hand === 0 && iN.cards.length === 1 && !this._scripted) {
      ic = this.shoe.take(this.script.youSecond);
      this._scripted = true;
    } else {
      ic = this.shoe.draw();
    }
    this.dealCount++;
    let iF = !!this.law.lint && this.dealCount % 3 === 0;
    let iI = iF || iW && !this.law.dealerOpen;
    iN.cards.push(ic);
    if (iK === "dealer") {
      if (iI) {
        this.dealer.hidden.add(ic.id);
      }
      if (iF) {
        this.dealer.lint.add(ic.id);
      }
    } else if (iI) {
      iN.faceDown.add(ic.id);
      if (iF) {
        iN.hadLint = true;
      }
    }
    if (!iI) {
      this._see(ic);
    }
    this._ev("deal", {
      to: iK,
      card: iI ? null : ic,
      faceDown: iI,
      lint: iF,
      hole: !!iW,
      index: iN.cards.length - 1
    });
    if (!this.shoe.cutFired && this.shoe.pastCut) {
      this.shoe.cutFired = true;
      this._ev("cutcard", {});
    }
    if (ic.rank === "TICKET") {
      this.ticketSeenBy = iK === "dealer" ? "dealer" : this.seats[iK.seat].id;
      this._ev("ticketDealt", {
        to: iK
      });
    }
    return ic;
  }
  _see(iK) {
    this.seen.push(iK);
    this.runningCount += hZ(iK);
  }
  _handRefs() {
    let iK = [];
    this.seats.forEach((iW, ic) => iW.rings.forEach((iN, iF) => {
      if (iN) {
        iN.hands.forEach((iI, ia) => iK.push({
          seat: ic,
          ring: iF,
          hand: ia
        }));
      }
    }));
    return iK;
  }
  _aiBetView(iK) {
    return {
      law: this.law,
      room: this.room,
      bank: iK.bank,
      min: this.roomCfg.min,
      max: this.roomCfg.max,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      round: this.round,
      face: iK.face,
      seen: this.seen
    };
  }
  deal() {
    if (this.phase !== "bet") {
      return this._illegal("deal", "phase");
    }
    let iK = this.roomCfg;
    let iW = this.you;
    if (iW && this.law.stakes !== false) {
      if (!this.bets.some(iR => iR > 0) && this.keepsakeRing !== 0 && !this.rebet().ok) {
        return this._illegal("deal", "nobet");
      }
      if (this.bets.some(iR => iR > 0 && iR < iK.min)) {
        return this._illegal("deal", "min");
      }
    }
    let ic = this._begin();
    this._resetRound();
    this._out = ic;
    if (this.pendingShuffle) {
      this.shoe.shuffle();
      this.seen = [];
      this.runningCount = 0;
      this.discard = 0;
      this.pendingShuffle = false;
      this._ev("shuffle", {
        size: this.shoe.size
      });
    }
    for (let iR of this.seats) {
      if (iR.kind !== "ai") {
        continue;
      }
      if (iR.cfg.flip) {
        iR.face = iR.cfg.flip(this.streams.penny);
        this._ev("flip", {
          seat: iR.i,
          id: iR.id,
          face: iR.face
        });
      }
      let iG = iR.cfg.bet ? iR.cfg.bet(this._aiBetView(iR), this.streams.ai[iR.id]) : 5;
      iG = Math.min(hr(+iG || 0), iK.max);
      if (iG > 0 && iG < iK.min) {
        iG = iK.min;
      }
      if (!(iG > 0) || iG > iR.bank) {
        iR.sitout = true;
        this._ev("sitout", {
          seat: iR.i,
          id: iR.id,
          need: iG
        });
        continue;
      }
      iR.bank = hr(iR.bank - iG);
      iR.rings = [{
        bet: iG,
        hands: [this._newHand(iG)]
      }];
      this._ev("bet", {
        seat: iR.i,
        id: iR.id,
        amount: iG
      });
    }
    if (iW) {
      iW.rings = [null, null, null];
      if (this.law.stakes === false) {
        iW.rings[0] = {
          bet: 0,
          hands: [this._newHand(0, {
            keepsake: true
          })]
        };
      } else {
        for (let ik = 0; ik < s; ik++) {
          if (ik === this.keepsakeRing) {
            iW.rings[ik] = {
              bet: 0,
              hands: [this._newHand(0, {
                keepsake: true
              })]
            };
          } else if (this.bets[ik] > 0) {
            iW.rings[ik] = {
              bet: this.bets[ik],
              hands: [this._newHand(this.bets[ik])]
            };
          }
        }
      }
      this.roundBet = this.bets.reduce((iJ, iA) => iJ + iA, 0);
      this.lastBets = this.bets.slice();
      this.keepsakeThisRound = this.keepsakeRing === 0;
      if (this.keepsakeThisRound) {
        this.keepsakeSpent = true;
      }
    }
    this.stareThisRound = this.stareArmed;
    this.stareArmed = false;
    let iN = this._handRefs();
    for (let iJ of iN) {
      this._deal(iJ);
    }
    this._deal("dealer");
    for (let iA of iN) {
      this._deal(iA);
    }
    this._deal("dealer", {
      hole: true
    });
    let iF = this.dealer.cards[1];
    if (!this.law.dealerOpen) {
      for (let ir of Object.keys(this.tells)) {
        if (ir !== this.dealerId) {
          continue;
        }
        let iL = this.tells[ir];
        if (!iL || typeof iL.test != "function") {
          continue;
        }
        let il = !!iL.test(iF);
        let iv = this.streams.tell.chance(il ? iL.p : iL.q);
        let iS = iL.id || iL.tellId || hu[ir] || ir + "_tell";
        this.tellLog.push({
          who: ir,
          tellId: iS,
          shown: iv,
          truth: il
        });
        this._ev("tell", {
          who: ir,
          tellId: iS,
          shown: iv,
          truth: il
        });
      }
    }
    for (let iE of iN) {
      this._afterCard(iE, true);
    }
    let iI = this.dealer.cards[0];
    let ia = iI.rank === "A" || iI.rank === "TICKET";
    if (this.law.insurance && ia && !this.dealer.hidden.has(iI.id)) {
      this.phase = "insure";
      let iM = this._yourInsureCost();
      this.insurance.offered = true;
      this._ev("insureOffer", {
        cost: iM
      });
      if (!iW || iM === 0) {
        this._insureAI();
        return this._afterInsure(ic);
      } else {
        return ic;
      }
    }
    return this._afterInsure(ic);
  }
  _yourInsureCost() {
    let iK = this.you;
    if (iK) {
      return iK.rings.reduce((iW, ic) => iW + (ic && !ic.hands[0].keepsake ? ic.bet / 2 : 0), 0);
    } else {
      return 0;
    }
  }
  _insureAI() {
    for (let iK of this.seats) {
      if (iK.kind !== "ai" || !iK.rings.length || !iK.cfg.insure) {
        continue;
      }
      let iW = iK.rings[0].bet / 2;
      if (iK.bank < iW) {
        continue;
      }
      let ic = {
        seat: iK.i,
        ring: 0,
        hand: 0
      };
      if (iK.cfg.insure(this._view(ic), this.streams.ai[iK.id])) {
        iK.bank = hr(iK.bank - iW);
        iK.insurance = iW;
        this._ev("insure", {
          seat: iK.i,
          amount: iW
        });
      }
    }
  }
  insure(iK) {
    if (this.phase !== "insure") {
      return this._illegal("insure", "phase");
    }
    let iW = this._yourInsureCost();
    if (iK && iW > this.wallet) {
      return this._illegal("insure", "wallet");
    }
    let ic = this._begin();
    if (iK && iW > 0) {
      this.wallet = hr(this.wallet - iW);
      this.you.insurance = iW;
      this.insurance.amount = iW;
      this._ev("insure", {
        seat: this.youSeat,
        amount: iW
      });
    }
    this._insureAI();
    return this._afterInsure(ic);
  }
  _afterInsure(iK) {
    let iW = this.dealer.cards;
    let ic = iW[0];
    let iN = hm(iW);
    if (this.law.peek && (ic.rank === "A" || ic.rank === "TICKET" || hg(ic))) {
      this._ev("peek", {
        natural: iN
      });
    }
    for (let iF of this.seats) {
      if (!iF.insurance) {
        continue;
      }
      let iI = iN ? iF.insurance * 3 : 0;
      this._pay(iF, iI);
      if (iF.kind === "you") {
        this.insurance.won = iN;
      }
      this._ev("settle", {
        ref: {
          seat: iF.i,
          ring: -1,
          hand: -1
        },
        outcome: "insurance",
        bet: iF.insurance,
        paid: iI,
        net: iI - iF.insurance,
        keepsake: false
      });
    }
    if (iN && (this.law.peek || this.law.dealerOpen)) {
      this.dealerNatural = true;
      if (this.dealer.hidden.size) {
        this._revealDealer();
      }
      for (let ia of this._handRefs()) {
        this._hand(ia).done = true;
      }
      this._ev("dealerTotal", {
        total: 21,
        soft: true,
        bust: false
      });
      this.dealerDone = true;
      this.phase = "settle";
      this.active = null;
      return iK;
    }
    if (this.stareThisRound && this.dealer.hidden.has(iW[1].id) && this.tells[this.dealerId]) {
      this.phase = "stare";
      return iK;
    } else {
      this._startTurns();
      return iK;
    }
  }
  call(iK) {
    if (this.phase !== "stare") {
      return this._illegal("call", "phase");
    }
    let iW = this._begin();
    let ic = this.tellLog.find(iI => iI.who === this.dealerId);
    let iN = ic ? ic.truth : !!this.tells[this.dealerId].test(this.dealer.cards[1]);
    let iF = !!iK === iN;
    this.stare = {
      saysTrue: !!iK,
      right: iF,
      dealer: this.dealerId
    };
    this._ev("stareCall", {
      saysTrue: !!iK,
      right: iF
    });
    this._startTurns();
    return iW;
  }
  _startTurns() {
    this.phase = "turn";
    this._nextActive();
  }
  _nextActive() {
    let iK = this.active;
    this.active = null;
    for (let iW of this._handRefs()) {
      if (!this._hand(iW).done) {
        this.active = iW;
        break;
      }
    }
    if (this.active) {
      if (!hA(iK, this.active)) {
        this._ev("turn", {
          ref: this.active
        });
      }
    } else if (this.phase === "turn") {
      this.phase = "dealer";
    }
  }
  _afterCard(iK, iW = false) {
    let ic = this._hand(iK);
    let iN = hH(ic.cards, {
      split: ic.fromSplit || ic.noNatural,
      hiddenIds: ic.faceDown
    });
    if (iN.visible.total > 21) {
      ic.bust = true;
      ic.done = true;
      this._ev("bust", {
        ref: iK,
        total: iN.visible.total,
        revealed: false
      });
      return;
    }
    if (ic.cards.length >= 5 && !ic.five && iN.visible.total <= 21) {
      ic.five = true;
      this.fives.push(this.seats[iK.seat].id);
      this._ev("five", {
        ref: iK,
        alive: true
      });
    }
    if (iW && iN.hidden === 0 && iN.natural) {
      ic.done = true;
      ic.natural = true;
      return;
    }
    if (iN.visible.total === 21) {
      if (!ic.done) {
        ic.done = true;
        ic.twentyOne = true;
        ic.stoodOn = 21;
        this._ev("twentyone", {
          ref: iK
        });
      }
      return;
    }
    if (ic.splitAces && ic.cards.length >= 2) {
      ic.done = true;
    }
  }
  _legal(iK) {
    let iW = this._hand(iK);
    if (!iW || iW.done || this.phase !== "turn") {
      return [];
    }
    let ic = this.seats[iK.seat];
    let iN = ic.rings[iK.ring];
    let iF = ["hit", "stand"];
    let iI = iW.cards.length === 2;
    let ia = iI && iW.faceDown.size === 0;
    if (iI && !iW.splitAces && !iW.keepsake && this._cover(ic, iW.bet)) {
      iF.push("double");
    }
    if (ia && !iW.keepsake && iW.cards[0].rank === iW.cards[1].rank && iW.cards[0].rank !== "TICKET" && iN.hands.length < r && (!iW.fromSplit || iW.cards[0].rank !== "A") && this._cover(ic, iW.bet)) {
      iF.push("split");
    }
    if (this.law.surrender && iI && !iW.fromSplit && !iW.keepsake && iW.actions.length === 0) {
      iF.push("surrender");
    }
    return iF;
  }
  act(iK) {
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal(iK, "phase");
    }
    if (!this._legal(this.active).includes(iK)) {
      return this._illegal(iK, "illegal");
    }
    let iW = this._begin();
    this._apply(this.active, iK);
    return iW;
  }
  _apply(iK, iW) {
    let ic = this.seats[iK.seat];
    let iN = this._hand(iK);
    let iF = hH(iN.cards, {
      hiddenIds: iN.faceDown
    });
    iN.actions.push(iW);
    this._ev("action", {
      ref: iK,
      action: iW
    });
    if (iN.glow && iN.actions.length === iN.glowAt + 1 && iW === "hit") {
      iN.glowHit = true;
    }
    if (iW === "hit") {
      this._deal(iK);
      this._afterCard(iK);
    } else if (iW === "stand") {
      iN.done = true;
      iN.stoodOn = iF.visible.total;
      iN.stoodSoft = iF.visible.soft;
    } else if (iW === "double") {
      this._charge(ic, iN.bet);
      iN.doubledOn = {
        total: iF.visible.total,
        soft: iF.visible.soft
      };
      iN.bet *= 2;
      iN.doubled = true;
      if (ic.kind === "you") {
        this.roundBet += iN.bet / 2;
      }
      this._ev("double", {
        ref: iK,
        bet: iN.bet
      });
      iN.doubleCard = this._deal(iK);
      this._afterCard(iK);
      iN.done = true;
    } else if (iW === "split") {
      this._charge(ic, iN.bet);
      if (ic.kind === "you") {
        this.roundBet += iN.bet;
      }
      let iI = ic.rings[iK.ring];
      let ia = iN.cards[0].rank === "A";
      let iR = this._newHand(iN.bet, {
        fromSplit: true,
        splitAces: ia
      });
      iR.cards.push(iN.cards.pop());
      iN.fromSplit = true;
      iN.splitAces = ia;
      iI.hands.push(iR);
      let iG = {
        seat: iK.seat,
        ring: iK.ring,
        hand: iI.hands.length - 1
      };
      this._ev("split", {
        ref: iK,
        into: iG
      });
      this._deal(iK);
      this._afterCard(iK);
      this._deal(iG);
      this._afterCard(iG);
      if (ia) {
        iN.done = true;
        iR.done = true;
      }
    } else if (iW === "surrender") {
      iN.surrendered = true;
      iN.done = true;
      let ik = iN.bet / 2;
      this._ev("surrender", {
        ref: iK,
        back: ik
      });
    }
    this._nextActive();
  }
  skill(iK = null) {
    let iW = b[this.char];
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal("skill", "phase");
    }
    if (this.skillUsed) {
      return this._illegal("skill", "used");
    }
    let ic = l.cost[iW];
    if (this.nerve < ic) {
      return this._illegal("skill", "nerve");
    }
    let iN = null;
    let iF = this._hand(this.active);
    if (iW === "glow") {
      iN = hQ(this.shoe.peek()) || "MID";
    } else if (iW === "snag") {
      if (!this.shoe.remaining) {
        return this._illegal("skill", "empty");
      }
      this.shoe.burn();
      this.discard++;
      iN = {
        burned: true
      };
    } else if (iW === "knuckle") {
      if (this.law.dealerOpen || !this.dealer.hidden.has(this.dealer.cards[1].id)) {
        return this._illegal("skill", "open");
      }
      let ia = hQ(this.dealer.cards[1]);
      iN = ia === "TICKET" ? "HIGH" : ia;
    } else if (iW === "find") {
      let iR = iK && iK.cardId;
      let iG = null;
      if (this.dealer.hidden.has(iR)) {
        iG = {
          who: "dealer",
          card: this.dealer.cards.find(iJ => iJ.id === iR)
        };
      } else {
        for (let iJ of this._handRefs()) {
          let iA = this._hand(iJ);
          if (iA.faceDown.has(iR)) {
            iG = {
              who: iJ,
              card: iA.cards.find(ir => ir.id === iR),
              h: iA
            };
            break;
          }
        }
      }
      if (!iG) {
        return this._illegal("skill", "target");
      }
      let ik = this._begin();
      this._spend(iW, ic);
      if (iG.who === "dealer") {
        this.dealer.hidden.delete(iR);
      } else {
        iG.h.faceDown.delete(iR);
      }
      this._see(iG.card);
      iN = {
        card: iG.card
      };
      this.skillUsed = true;
      this.skills.push({
        kind: iW,
        result: "card"
      });
      this._ev("skill", {
        kind: iW,
        cost: ic,
        result: iN
      });
      this._ev("reveal", {
        who: iG.who,
        cards: [iG.card]
      });
      if (iG.who !== "dealer") {
        this._afterCard(iG.who);
      }
      this._nextActive();
      return ik;
    } else if (iW === "redraw") {
      let ir = iK && iK.a;
      let iL = iK && iK.b;
      let il = ir && this._hand(ir.ref);
      let iv = iL && this._hand(iL.ref);
      let iS = (id, y0) => y0 && id.seat === this.youSeat && !y0.done && !y0.doubled && !y0.splitAces;
      if (!iS(ir.ref, il) || !iS(iL.ref, iv) || hA(ir.ref, iL.ref)) {
        return this._illegal("skill", "target");
      }
      let iE = il.cards.findIndex(id => id.id === ir.cardId);
      let iM = iv.cards.findIndex(id => id.id === iL.cardId);
      if (iE < 0 || iM < 0 || il.faceDown.has(ir.cardId) || iv.faceDown.has(iL.cardId)) {
        return this._illegal("skill", "target");
      }
      let iP = this._begin();
      this._spend(iW, ic);
      let ib = il.cards[iE];
      il.cards[iE] = iv.cards[iM];
      iv.cards[iM] = ib;
      il.noNatural = true;
      iv.noNatural = true;
      this.redraw = {
        a: ir.ref,
        b: iL.ref
      };
      this.skillUsed = true;
      this.skills.push({
        kind: iW,
        result: "swap"
      });
      this._ev("skill", {
        kind: iW,
        cost: ic,
        result: {
          a: ir,
          b: iL
        }
      });
      this._afterCard(ir.ref);
      this._afterCard(iL.ref);
      this._nextActive();
      return iP;
    } else {
      return this._illegal("skill", "none");
    }
    let iI = this._begin();
    this._spend(iW, ic);
    this.skillUsed = true;
    this.skills.push({
      kind: iW,
      result: iN
    });
    if (iW === "glow") {
      this.glow = iN;
      iF.glow = iN;
      iF.glowAt = iF.actions.length;
    }
    if (iW === "knuckle") {
      this.knuckle = iN;
    }
    this._ev("skill", {
      kind: iW,
      cost: ic,
      result: iN
    });
    return iI;
  }
  _spend(iK, iW) {
    this.nerve -= iW;
    this._ev("nerve", {
      delta: -iW,
      reason: "spend",
      value: this.nerve
    });
  }
  _gain(iK) {
    let iW = l.gain[iK];
    let ic = this.nerve;
    this.nerve = Math.min(l.max, this.nerve + iW);
    if (this.nerve !== ic) {
      this._ev("nerve", {
        delta: this.nerve - ic,
        reason: iK,
        value: this.nerve
      });
    }
  }
  advance() {
    let iK = this._begin();
    let iW = 0;
    while (!iK.length && iW++ < 64) {
      if (this.phase === "turn") {
        if (this.active && this.seats[this.active.seat].kind === "you") {
          break;
        }
        this._step();
      } else if (this.phase === "dealer") {
        this._step();
      } else if (this.phase === "settle" && (!this.settleQueue || !!this.settleQueue.length)) {
        this._step();
      } else {
        break;
      }
      this._out = iK;
    }
    return iK;
  }
  _step() {
    let iK = this._out;
    if (this.phase === "turn") {
      if (!this.active) {
        this._nextActive();
        return iK;
      }
      let iW = this.seats[this.active.seat];
      if (iW.kind === "you") {
        return iK;
      }
      let ic = this.active;
      let iN = this._view(ic);
      let iF = iW.cfg.policy ? iW.cfg.policy(iN, this.streams.ai[iW.id]) : hk(iN, this.law, {
        lintRule: this.lintRule
      });
      let iI = this._legal(ic);
      if (!iI.includes(iF)) {
        let ia = iF;
        if (iF === "double") {
          iF = "hit";
        } else {
          let iR = hk({
            ...iN,
            canDouble: false,
            canSplit: false,
            canSurrender: false
          }, this.law, {
            lintRule: this.lintRule
          });
          iF = iI.includes(iR) ? iR : "stand";
        }
        if (!iI.includes(iF)) {
          iF = "stand";
        }
        this._ev("corrected", {
          ref: ic,
          from: ia,
          to: iF
        });
      }
      this._apply(ic, iF);
      return iK;
    }
    if (this.phase === "dealer") {
      this._dealerStep();
      return iK;
    } else {
      if (this.phase === "settle") {
        this._settleStep();
      }
      return iK;
    }
  }
  _live() {
    return this._handRefs().some(iK => {
      let iW = this._hand(iK);
      return !iW.surrendered && (!iW.bust || !!iW.faceDown.size) && (!iW.natural || !!this.law.lint);
    });
  }
  _revealDealer() {
    let iK = this.dealer.cards.filter(iW => this.dealer.hidden.has(iW.id));
    for (let iW of iK) {
      this._see(iW);
    }
    this.dealer.hidden.clear();
    this._ev("reveal", {
      who: "dealer",
      cards: this.dealer.cards.slice()
    });
  }
  _dealerValue(iK) {
    return hH(this.dealer.cards, {
      hiddenIds: iK ? this.dealer.hidden : null
    });
  }
  _dealerDecisionValue() {
    if (!this.law.lint || this.lintRule === "true") {
      return this._dealerValue(false);
    }
    let iK = this.lintRule === "visible" ? this.dealer.hidden : this.dealer.lint;
    let iW = hH(this.dealer.cards, {
      hiddenIds: iK
    }).visible;
    if (this.lintRule === "ten") {
      let ic = this.dealer.lint.size;
      return {
        total: iW.total + ic * 10,
        soft: iW.soft && iW.total + ic * 10 <= 21,
        count: iW.count
      };
    }
    return iW;
  }
  _dealerStep() {
    if (!this.revealed) {
      this.revealed = true;
      if (this.you && !this.bigpotFired && this.round - this.lastBigpot >= 4 && this.dealer.hidden.size) {
        let iK = Math.max(100, (this.wallet + this.roundBet) * 0.2);
        if (this.roundBet >= iK) {
          this.bigpotFired = true;
          this.lastBigpot = this.round;
          this._ev("bigpot", {
            bet: this.roundBet
          });
        }
      }
      if (!this.law.lint) {
        if (this.dealer.hidden.size) {
          this._revealDealer();
        }
        this._stareResolve();
      }
      return;
    }
    if (!this.dealerDone) {
      let iW = this._live();
      let ic = this._dealerDecisionValue();
      if (iW && hT(ic, this.law) && !(ic.total > 21)) {
        this._deal("dealer");
        return;
      }
      this.dealerDone = true;
      if (this.law.lint) {
        this._showdown();
      }
      let iN = this._dealerValue(false);
      if (iN.bust) {
        this._ev("bust", {
          ref: "dealer",
          total: iN.total,
          revealed: !!this.law.lint
        });
      }
      this._ev("dealerTotal", {
        total: iN.total,
        soft: iN.soft,
        bust: iN.bust
      });
      this.phase = "settle";
      return;
    }
    this.phase = "settle";
  }
  _showdown() {
    if (this.dealer.hidden.size) {
      this._revealDealer();
    }
    this._stareResolve();
    for (let iK of this._handRefs()) {
      let iW = this._hand(iK);
      if (!iW.faceDown.size) {
        continue;
      }
      let ic = iW.cards.filter(iF => iW.faceDown.has(iF.id));
      for (let iF of ic) {
        this._see(iF);
      }
      iW.faceDown.clear();
      this._ev("reveal", {
        who: iK,
        cards: iW.cards.slice()
      });
      let iN = hH(iW.cards);
      if (iN.bust && !iW.bust) {
        iW.bust = true;
        iW.bustRevealed = true;
        this._ev("bust", {
          ref: iK,
          total: iN.total,
          revealed: true
        });
      }
    }
  }
  _stareResolve() {
    if (this.stare && !this.stare.resolved) {
      this.stare.resolved = true;
      if (this.stare.right) {
        this._gain("stare");
      }
    }
  }
  _settleStep() {
    this.settleQueue ||= this._handRefs();
    let iK = this.settleQueue.shift();
    if (!iK) {
      return;
    }
    let iW = this.seats[iK.seat];
    let ic = this._hand(iK);
    let iN = this._dealerValue(false);
    let iF = hm(this.dealer.cards);
    let iI = hH(ic.cards, {
      split: ic.fromSplit || ic.noNatural
    });
    let ia = iI.natural;
    let iR;
    let iG = 0;
    if (ic.surrendered) {
      iR = "surrender";
      iG = ic.bet / 2;
    } else if (iI.bust) {
      iR = "lose";
    } else if (iF) {
      iR = ia && !this.law.tiesLose ? "push" : "lose";
    } else if (ia) {
      iR = "natural";
    } else if (iN.bust || iI.total > iN.total) {
      iR = "win";
    } else if (iI.total < iN.total) {
      iR = "lose";
    } else {
      iR = this.law.tiesLose ? "lose" : "push";
    }
    let ik = iR === "win" && this.law.lintWin && ic.hadLint;
    if (iR === "natural") {
      iG = ic.bet * (1 + this.law.natural);
    } else if (ik) {
      iG = ic.bet + Math.floor(ic.bet * this.law.lintWin * 2) / 2;
    } else if (iR === "win") {
      iG = ic.bet * 2;
    } else if (iR === "push") {
      iG = ic.bet;
    }
    iG = hr(iG);
    this._pay(iW, iG);
    ic.result = iR;
    ic.paid = iG;
    ic.total = iI.total;
    this.settled.push(iK);
    this._ev("settle", {
      ref: iK,
      outcome: iR,
      bet: ic.bet,
      paid: iG,
      net: iG - ic.bet,
      keepsake: !!ic.keepsake,
      lint: !!ik
    });
    if (iW.kind === "you") {
      let iJ = iR === "win" || iR === "natural";
      if ((iJ || iR === "push") && (iI.total === 20 || iI.total === 21)) {
        this._gain("twenty");
      }
      if (iJ && ic.cards.length >= 5) {
        this._gain("five");
      }
      if (iJ && ic.stoodOn != null && ic.stoodOn >= 12 && ic.stoodOn <= 16 && !ic.twentyOne) {
        this._gain("brave");
      }
    }
  }
  finishRound() {
    if (this.phase === "bet" || this.phase === "done") {
      return this._illegal("finishRound", "phase");
    }
    let iK = [];
    let iW = 0;
    while (true) {
      let iN = this.advance();
      if (!iN.length || iW++ > 2000) {
        break;
      }
      iK.push(...iN);
    }
    if (this.phase !== "settle") {
      return iK.concat(this._illegal("finishRound", this.phase));
    }
    this._out = iK;
    this.phase = "done";
    let ic = this._summary();
    this._ev("roundEnd", {
      summary: ic
    });
    this.round++;
    for (let iF of this._handRefs()) {
      this.discard += this._hand(iF).cards.length;
    }
    this.discard += this.dealer.cards.length;
    if (this.shoe.pastCut) {
      this.pendingShuffle = true;
    }
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.keepsakeRing = -1;
    this.phase = "bet";
    this.active = null;
    return iK;
  }
  _summary() {
    let iK = this._dealerValue(false);
    let iW = this.you;
    let ic = [];
    let iN = 0;
    let iF = null;
    if (iW) {
      iW.rings.forEach((iR, iG) => {
        if (iR) {
          iR.hands.forEach((ik, iJ) => {
            let iA = (ik.paid || 0) - ik.bet;
            iN += iA;
            let ir = ik.result === "win" || ik.result === "natural";
            if (ik.keepsake && this.law.stakes !== false) {
              iF = ir ? "win" : ik.result === "push" ? "push" : "lose";
            }
            ic.push({
              ring: iG,
              hand: iJ,
              cards: ik.cards.slice(),
              total: ik.total,
              outcome: ik.result,
              net: iA,
              bet: ik.bet,
              doubled: ik.doubled,
              split: ik.fromSplit,
              ringHands: iR.hands.length,
              stoodOn: ik.stoodOn,
              stoodSoft: !!ik.stoodSoft,
              doubledOn: ik.doubledOn,
              doubleCard: ik.doubleCard,
              lintBust: ik.bustRevealed,
              natural: ik.result === "natural" || ik.result === "push" && hH(ik.cards, {
                split: ik.fromSplit
              }).natural,
              ticket: ik.cards.some(iL => iL.rank === "TICKET"),
              keepsake: ik.keepsake,
              glow: ik.glow,
              glowHit: ik.glowHit,
              surrendered: ik.surrendered,
              skill: this.skills.length ? this.skills[0].kind : null
            });
          });
        }
      });
      if (iW.insurance) {
        iN += this.insurance.won ? iW.insurance * 2 : -iW.insurance;
      }
    }
    let iI = {};
    for (let iR of this.seats) {
      if (iR.kind !== "ai") {
        continue;
      }
      if (!iR.rings.length) {
        iI[iR.id] = {
          outcome: "sitout",
          cards: [],
          total: 0,
          bank: iR.bank
        };
        continue;
      }
      let iG = iR.rings[0].hands[0];
      iI[iR.id] = {
        outcome: iG.result,
        cards: iG.cards.slice(),
        total: iG.total,
        bank: iR.bank,
        hands: iR.rings[0].hands.map(ik => ({
          outcome: ik.result,
          total: ik.total,
          cards: ik.cards.slice()
        }))
      };
    }
    let ia = this.seats.find(ik => ik.id === "penny");
    return {
      room: this.room,
      law: this.law.id,
      dealerId: this.dealerId,
      round: this.round,
      you: {
        hands: ic,
        net: iN,
        rings: iW ? iW.rings.filter(ik => ik && ik.bet > 0).length : 0
      },
      dealer: {
        total: iK.total,
        bust: iK.bust,
        natural: hm(this.dealer.cards),
        up: this.dealer.cards[0],
        cards: this.dealer.cards.slice(),
        twoCardTotal: hH(this.dealer.cards.slice(0, 2)).total
      },
      ai: iI,
      ticketSeenBy: this.ticketSeenBy,
      keepsake: iF,
      stare: this.stare,
      pennyFace: ia ? ia.face : null,
      insurance: {
        amount: this.insurance.amount,
        won: this.insurance.won
      },
      skills: this.skills.slice(),
      redraw: this.redraw,
      knuckle: this.knuckle,
      tells: this.tellLog.slice(),
      fives: this.fives.slice(),
      wallet: this.wallet,
      nerve: this.nerve,
      roundBet: this.roundBet
    };
  }
  _view(iK) {
    let iW = this._hand(iK);
    let ic = this.seats[iK.seat];
    let iN = iW.cards.filter(ia => !iW.faceDown.has(ia.id));
    let iF = this._legal(iK);
    let iI = this.dealer.cards[0] && !this.dealer.hidden.has(this.dealer.cards[0].id) ? this.dealer.cards[0] : null;
    return {
      law: this.law,
      room: this.room,
      cards: iN,
      value: hH(iW.cards, {
        split: iW.fromSplit,
        hiddenIds: iW.faceDown
      }).visible,
      hidden: iW.faceDown.size,
      canDouble: iF.includes("double"),
      canSplit: iF.includes("split"),
      canSurrender: iF.includes("surrender"),
      dealerUp: iI,
      dealerUpBand: iI ? hQ(iI) : null,
      dealerCards: this.dealer.cards.filter(ia => !this.dealer.hidden.has(ia.id)),
      seen: this.seen,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      cycle: null,
      face: ic.face,
      round: this.round,
      bank: ic.kind === "you" ? this.wallet : ic.bank,
      untilLint: this.law.lint ? (3 - (this.dealCount + 1) % 3) % 3 : null,
      full: this.full,
      id: ic.id,
      ref: iK,
      handCards: iW.cards.length
    };
  }
  view(iK) {
    if (iK) {
      return this._view(iK);
    } else {
      return {
        phase: this.phase,
        dealer: {
          id: this.dealerId,
          cards: this.dealer.cards.slice(),
          faceDown: [...this.dealer.hidden],
          value: this._dealerValue(true).visible
        },
        seats: this.seats.map(iW => ({
          id: iW.id,
          kind: iW.kind,
          bank: iW.kind === "you" ? this.wallet : iW.bank,
          face: iW.face,
          sitout: iW.sitout,
          rings: iW.rings.map(ic => ic ? {
            bet: ic.bet,
            hands: ic.hands.map(iN => ({
              cards: iN.cards.slice(),
              faceDown: [...iN.faceDown],
              value: hH(iN.cards, {
                split: iN.fromSplit,
                hiddenIds: iN.faceDown
              }).visible,
              bet: iN.bet,
              doubled: iN.doubled,
              done: iN.done,
              result: iN.result,
              keepsake: iN.keepsake
            }))
          } : null)
        })),
        shoe: {
          remaining: this.shoe.remaining,
          dealtSinceShuffle: this.shoe.dealtSinceShuffle,
          pastCut: this.shoe.pastCut,
          size: this.shoe.size
        },
        discard: this.discard,
        wallet: this.wallet,
        nerve: this.nerve,
        bets: this.bets.slice(),
        stacks: this.stacks.map(iW => iW.slice()),
        active: this.active,
        law: this.law.id,
        room: this.room,
        round: this.round,
        keepsakeRing: this.keepsakeRing,
        stareArmed: this.stareArmed,
        skillUsed: this.skillUsed
      };
    }
  }
};
g(hL, "Table");
var hl = hL;
var hv = ["tallyFaded", "tallyReprinted", "leftyFound", "nibsGone", "lintOpen", "sparemanSpoke", "finale", "nibsDollar", "nibsJar"];
var hS = g((iK, iW, ic, iN) => {
  let iF = typeof iK == "number" && Number.isFinite(iK) ? iK : iW;
  return Math.max(ic, Math.min(iN, iF));
}, "num");
var hE = 1000000000;
function hM(iK = 0) {
  return {
    v: 1,
    salt: hp(iK),
    visitNo: 0,
    wallet: a,
    char: "wick",
    howto: false,
    finder: false,
    tickets: {},
    story: {
      beat: 0,
      visits: 0,
      flags: Object.fromEntries(hv.map(iW => [iW, false]))
    },
    journal: {},
    staked: {},
    stareRightLifetime: 0,
    opened: {
      coin: "always"
    },
    secrets: {},
    postcards: [],
    cosmetics: {
      thankYouChip: false,
      backs: [],
      useChip: false,
      useBack: null
    },
    stats: {
      rounds: 0,
      naturals: 0,
      bailouts: 0,
      bestWin: 0
    },
    settings: {
      chatter: "full",
      brisk: false,
      totals: true,
      confirmSurrender: true
    }
  };
}
g(hM, "newProfile");
function hP(iK) {
  let iW = iK;
  try {
    if (typeof iW == "string") {
      iW = JSON.parse(iW);
    }
  } catch {
    iW = null;
  }
  if (!iW || typeof iW != "object" || Array.isArray(iW)) {
    return hM(0);
  }
  let ic = hM(0);
  try {
    if (typeof iW.salt == "number" && Number.isFinite(iW.salt)) {
      ic.salt = iW.salt >>> 0;
    }
    ic.visitNo = Math.floor(hS(iW.visitNo, 0, 0, 10000000));
    let iN = iW.wallet;
    if (typeof iN != "number" && (!iW.v || iW.v < 1)) {
      iN = [iW.dollars, iW.bank, iW.dd, iW.money].find(iG => typeof iG == "number");
    }
    ic.wallet = hr(hS(iN, a, 0, hE));
    ic.finder = iW.finder === true;
    ic.char = h0.includes(iW.char) && (iW.char !== "finder" || ic.finder) ? iW.char : "wick";
    ic.howto = iW.howto === true;
    if (iW.tickets && typeof iW.tickets == "object") {
      for (let [iG, ik] of Object.entries(iW.tickets)) {
        if (hY[iG]) {
          ic.tickets[iG] = {
            at: Math.floor(hS(ik && ik.at, 0, 0, 10000000)),
            char: h0.includes(ik && ik.char) ? ik.char : "wick"
          };
        }
      }
    }
    let iF = iW.story && typeof iW.story == "object" ? iW.story : {};
    ic.story.beat = Math.floor(hS(iF.beat, 0, 0, 12));
    ic.story.visits = Math.floor(hS(iF.visits, 0, 0, 10000000));
    if (iF.flags && typeof iF.flags == "object") {
      for (let iJ of hv) {
        ic.story.flags[iJ] = iF.flags[iJ] === true;
      }
    }
    if (ic.story.flags.finale) {
      ic.finder = true;
    }
    if (iW.journal && typeof iW.journal == "object") {
      for (let [iA, ir] of Object.entries(iW.journal)) {
        if (!ir || typeof ir != "object" || typeof iA != "string" || iA.length > 40) {
          continue;
        }
        let iL = Math.floor(hS(ir.seen, 0, 0, 10000000));
        ic.journal[iA] = {
          seen: iL,
          right: Math.floor(hS(ir.right, 0, 0, iL)),
          noted: ir.noted === true
        };
      }
    }
    if (iW.staked && typeof iW.staked == "object") {
      for (let il of h1) {
        if (typeof iW.staked[il] == "number") {
          ic.staked[il] = hr(hS(iW.staked[il], 0, 0, hE));
        }
      }
    }
    ic.stareRightLifetime = Math.floor(hS(iW.stareRightLifetime, 0, 0, 10000000));
    if (iW.opened && typeof iW.opened == "object") {
      for (let iv of h4) {
        if (typeof iW.opened[iv.id] == "string") {
          ic.opened[iv.id] = iW.opened[iv.id];
        }
      }
    }
    if (iW.secrets && typeof iW.secrets == "object") {
      for (let iS = 1; iS <= 7; iS++) {
        if (iW.secrets[iS] === true) {
          ic.secrets[iS] = true;
        }
      }
    }
    if (Array.isArray(iW.postcards)) {
      ic.postcards = iW.postcards.filter(iE => typeof iE == "string").slice(0, 10);
    }
    let iI = iW.cosmetics && typeof iW.cosmetics == "object" ? iW.cosmetics : {};
    ic.cosmetics.thankYouChip = iI.thankYouChip === true;
    ic.cosmetics.backs = Array.isArray(iI.backs) ? [...new Set(iI.backs.filter(iE => h0.includes(iE)))] : [];
    ic.cosmetics.useChip = iI.useChip === true && ic.cosmetics.thankYouChip;
    ic.cosmetics.useBack = iI.useBack === "52" && ic.story.flags.finale ? "52" : ic.cosmetics.backs.includes(iI.useBack) ? iI.useBack : null;
    let ia = iW.stats && typeof iW.stats == "object" ? iW.stats : {};
    ic.stats = {
      rounds: Math.floor(hS(ia.rounds, 0, 0, 1000000000)),
      naturals: Math.floor(hS(ia.naturals, 0, 0, 1000000000)),
      bailouts: Math.floor(hS(ia.bailouts, 0, 0, 1000000000)),
      bestWin: hr(hS(ia.bestWin, 0, 0, hE))
    };
    let iR = iW.settings && typeof iW.settings == "object" ? iW.settings : {};
    ic.settings = {
      chatter: ["full", "less", "off"].includes(iR.chatter) ? iR.chatter : "full",
      brisk: iR.brisk === true,
      totals: iR.totals !== false,
      confirmSurrender: iR.confirmSurrender !== false
    };
  } catch {
    return hM(0);
  }
  return ic;
}
g(hP, "loadProfile");
function hb(iK) {
  return JSON.parse(JSON.stringify(iK));
}
g(hb, "saveProfile");
function hd(iK) {
  iK.visitNo = (iK.visitNo || 0) + 1;
  let iW = hp(iK.salt, iK.visitNo);
  let ic = hD(iW).fork("spareman");
  let iN = {};
  for (let [iF, iI] of Object.entries(h9)) {
    iN[iF] = {
      bank: iI
    };
  }
  return {
    seed: iW,
    rounds: 0,
    counted: false,
    beatFired: false,
    nerve: 0,
    keepsakeUsed: false,
    tag: false,
    tagRounds: 0,
    lever: 0,
    stareRight: 0,
    sparemanPresent: iK.story.beat < 10 && ic.chance(0.25),
    regulars: iN,
    keyesCycle: 0,
    roomRounds: {},
    rummageCooldown: 0,
    requested: false,
    pennyTails: false,
    staked: {},
    drops: []
  };
}
g(hd, "newVisit");
function x0(iK, iW, ic = 0) {
  return hp(iK.seed, "room:" + iW, ic);
}
g(x0, "tableSeed");
function x1(iK) {
  return Object.keys(iK.tickets).length;
}
g(x1, "reputation");
function x2(iK, iW) {
  let ic = hy(iW);
  if (!ic) {
    return false;
  }
  let iN = ic.open;
  if (iN.always || iN.ticket && iK.tickets[iN.ticket] || iN.count && x1(iK) >= iN.count || iN.flag && iK.story.flags[iN.flag]) {
    return true;
  }
  if (iN.beat) {
    if (h7[iN.beat - 1].room === iW) {
      if (iK.story.beat >= iN.beat - 1 && iK.story.visits >= iN.beat - 1) {
        return true;
      }
    } else if (iK.story.beat >= iN.beat) {
      return true;
    }
  }
  return false;
}
g(x2, "roomOpen");
function x3(iK, iW = null) {
  let ic = [];
  iK.opened ||= {
    coin: "always"
  };
  for (let iN of h4) {
    if (iK.opened[iN.id] || !x2(iK, iN.id)) {
      continue;
    }
    let iF = iN.open;
    let iI = iW;
    iI ||= iF.ticket && iK.tickets[iF.ticket] ? "ticket" : iF.count && x1(iK) >= iF.count ? "count" : iF.flag && iK.story.flags[iF.flag] ? "secret" : "story";
    iK.opened[iN.id] = iI;
    ic.push({
      t: "roomOpened",
      room: iN.id,
      by: iI
    });
  }
  return ic;
}
g(x3, "checkRooms");
function x4(iK, iW, ic) {
  if (!hY[iW] || iK.tickets[iW]) {
    return false;
  } else {
    iK.tickets[iW] = {
      at: iK.visitNo || 0,
      char: h0.includes(ic) ? ic : iK.char || "wick"
    };
    return true;
  }
}
g(x4, "awardTicket");
function x5(iK, iW, ic) {
  let iN = hY[iW];
  if (!iN || iN.room && ic && iN.room !== ic) {
    return [];
  }
  if (!x4(iK, iW, iK.char)) {
    return [];
  }
  let iF = [{
    t: "ticket",
    id: iW,
    text: iN.text,
    char: iK.char
  }];
  if (x1(iK) === 20) {
    iF.push({
      t: "achievement",
      id: h8.claims
    });
  }
  return iF;
}
g(x5, "ticketEvents");
function x6(iK, iW, ic, iN) {
  let iF = iK.journal[iW] ||= {
    seen: 0,
    right: 0,
    noted: false
  };
  if (ic) {
    iF.seen++;
    if (iN) {
      iF.right++;
    }
    if (!iF.noted && iF.seen >= 6 && iF.right / iF.seen >= 0.6) {
      iF.noted = true;
      return [{
        t: "journalNote",
        tellId: iW,
        right: iF.right,
        seen: iF.seen
      }];
    } else {
      return [];
    }
  } else {
    return [];
  }
}
g(x6, "journalObserve");
function x7(iK, iW, ic) {
  let iN = [];
  let iF = ic.room;
  if (ic.law === "finale") {
    return iN;
  }
  let iI = ir => iN.push(...x5(iK, ir, iF));
  iW.rounds++;
  iW.roomRounds[iF] = (iW.roomRounds[iF] || 0) + 1;
  if (iW.rummageCooldown > 0) {
    iW.rummageCooldown--;
  }
  iK.stats.rounds++;
  if (typeof ic.wallet == "number") {
    iK.wallet = hr(Math.max(0, Math.min(hE, ic.wallet)));
  }
  if (typeof ic.nerve == "number") {
    iW.nerve = ic.nerve;
  }
  let ia = ic.you.hands;
  let iR = ir => ir.outcome === "win" || ir.outcome === "natural";
  let iG = ic.dealer;
  let ik = hg(iG.up);
  if (ic.you.net > iK.stats.bestWin) {
    iK.stats.bestWin = ic.you.net;
  }
  for (let ir of ia) {
    if (ir.natural) {
      iK.stats.naturals++;
      iI("NATURAL");
    }
    if (iR(ir) && ir.stoodOn === 16 && !ir.stoodSoft && ik && ir.cards.length >= 2) {
      iI("SIXTEEN");
    }
    if (iR(ir) && ir.cards.length >= 5) {
      let iL = iN.length;
      iI("FIVE_CARD");
      if (iN.length > iL) {
        iN.push({
          t: "achievement",
          id: h8.five
        });
      }
    }
    if (ir.doubledOn && ir.doubledOn.total === 11 && !ir.doubledOn.soft && hU(ir.doubleCard)) {
      iI("DOUBLE_FACE");
    }
    if (iR(ir) && ir.ticket) {
      iI("BUS_TICKET");
    }
    if (iF === "glasses" && iG.twoCardTotal === 20 && ir.total === 21) {
      iI("SEEN_21");
    }
    if (ir.lintBust) {
      iI("LINT_BUST");
    }
    if (iR(ir) && ir.doubled && ik && ic.dealerId === "dogear") {
      iI("WELL_PLAYED");
    }
    if (ir.surrendered) {
      iI("SURRENDER");
    }
    if (ir.glow === "LOW" && ir.glowHit && ir.total === 21) {
      iI("GLOW_21");
    }
    if (ic.knuckle === "LOW" && ir.stoodOn >= 12 && ir.stoodOn <= 16 && iR(ir)) {
      iI("KNUCKLE_12");
    }
  }
  let iJ = {};
  for (let il of ia) {
    (iJ[il.ring] = iJ[il.ring] || []).push(il);
  }
  for (let iv of Object.values(iJ)) {
    if (iv.length === 2 && iv.every(iS => iS.split) && iv.every(iR)) {
      iI("SPLIT_WIN");
    }
  }
  if (ic.you.rings === 3 && Object.keys(iJ).length === 3 && ia.every(iR)) {
    iI("THREE_RINGS");
  }
  if (ic.insurance && ic.insurance.won) {
    iI("INSURED");
  }
  if (ic.skills.some(iS => iS.kind === "snag") && iG.bust) {
    iI("SNAG_BUST");
  }
  if (ic.redraw) {
    let iS = ia.find(iM => iM.ring === ic.redraw.a.ring && iM.hand === ic.redraw.a.hand);
    let iE = ia.find(iM => iM.ring === ic.redraw.b.ring && iM.hand === ic.redraw.b.hand);
    if (iS && iE && iR(iS) && iR(iE)) {
      iI("REDRAW_TWO");
    }
  }
  let iA = ic.ai || {};
  if (iA.nibs && (iA.nibs.outcome === "win" || iA.nibs.outcome === "natural")) {
    iI("NIBS_ONE");
  }
  if ((ic.fives || []).includes("bunnie")) {
    iI("BUNNIE_FIVE");
  }
  if (iA.keyes && (iA.keyes.hands || []).some(iM => iM.total === 21)) {
    iI("KEYES_21");
  }
  if (ic.keepsake) {
    iW.keepsakeUsed = true;
    if (ic.keepsake === "win") {
      iI("CLAIMED");
    }
    if (ic.keepsake === "lose") {
      iW.tag = true;
      iW.tagRounds = 0;
    }
  } else if (iW.tag) {
    iW.tagRounds++;
    if (iW.tagRounds === 3) {
      iI("UNCLAIMED");
    }
  }
  if (ic.stare && ic.stare.right) {
    iW.stareRight++;
    if (iW.stareRight >= 3) {
      iI("CORNER");
    }
    if (ic.stare.dealer === "dogear") {
      iK.stareRightLifetime++;
      if (iK.stareRightLifetime === 10) {
        iK.secrets[3] = true;
        iN.push({
          t: "secret",
          id: 3,
          kind: "stare"
        }, {
          t: "achievement",
          id: h8.corner
        });
      }
    }
  }
  for (let iM of ic.tells || []) {
    iN.push(...x6(iK, iM.tellId, iM.shown, iM.truth));
  }
  if (!iW.counted && iW.rounds >= hx) {
    iW.counted = true;
    iK.story.visits++;
    iN.push({
      t: "visitCounted",
      visits: iK.story.visits
    });
    if (iK.story.visits === 1) {
      iN.push({
        t: "achievement",
        id: h8.visit
      });
    }
  }
  iN.push(...x3(iK));
  return iN;
}
g(x7, "onRoundEnd");
function x8(iK, iW, ic, iN) {
  let iF = iK.story.beat + 1;
  if (iF > h7.length || iW.beatFired || iK.story.visits < iF - 1) {
    return null;
  }
  let iI = h7[iF - 1];
  if (iI.room !== ic) {
    if (iN === "sit" && !iW.requested) {
      iW.requested = true;
      return {
        request: iI.room,
        beat: iI
      };
    } else {
      return null;
    }
  } else if (iI.at !== iN || iN === "after2" && (iW.roomRounds[ic] || 0) < 2) {
    return null;
  } else {
    return iI;
  }
}
g(x8, "beatDue");
function x9(iK, iW, ic, iN = {}) {
  let iF = iK.story.beat + 1;
  let iI = h7[iF - 1];
  if (!iI || iI.id !== ic || iW.beatFired) {
    return [{
      t: "illegal",
      action: "beat",
      reason: "notdue"
    }];
  }
  let ia = iK.story.flags;
  let iR = [];
  iW.beatFired = true;
  iW.rummageCooldown = Math.max(iW.rummageCooldown, 1);
  if (ic === "reprint" && iN.accept === false) {
    return [{
      t: "beatDeferred",
      id: ic,
      n: iI.n
    }];
  }
  iK.story.beat = iI.n;
  iR.push({
    t: "beat",
    id: ic,
    n: iI.n
  });
  switch (ic) {
    case "tally_fades":
      ia.tallyFaded = true;
      break;
    case "nibs_jar":
      ia.nibsJar = true;
      break;
    case "penny_taken":
      iW.pennyTails = true;
      break;
    case "lefty_found":
      ia.leftyFound = true;
      if (!iK.postcards.includes("lefty")) {
        iK.postcards.push("lefty");
      }
      break;
    case "reprint":
      ia.tallyReprinted = true;
      ia.tallyFaded = false;
      break;
    case "pillow":
      ia.nibsGone = true;
      if (ia.nibsDollar) {
        iK.cosmetics.thankYouChip = true;
        iK.secrets[6] = true;
        iR.push({
          t: "secret",
          id: 6,
          kind: "nibsDollar"
        });
      }
      break;
    case "eleventh_key":
      ia.lintOpen = true;
      break;
    case "spareman_speaks":
      ia.sparemanSpoke = true;
      break;
    case "last_call":
      ia.finale = true;
      iK.finder = true;
      iR.push(...x5(iK, "FIFTY_TWO", null));
      iR.push({
        t: "achievement",
        id: h8.finale
      });
      break;
    default:
      break;
  }
  iR.push(...x3(iK, "story"));
  return iR;
}
g(x9, "playBeat");
function xh(iK, iW) {
  if (iW) {
    if (iW.phase !== "bet" || iW.bets.some(ic => ic > 0)) {
      return false;
    } else {
      return iW.wallet < k;
    }
  } else {
    return iK.wallet < k;
  }
}
g(xh, "needsBailout");
function xx(iK, iW = null) {
  let ic = iK.stats.bailouts === 0;
  iK.stats.bailouts++;
  iK.wallet = hr(iK.wallet + n);
  if (iW) {
    iW.credit(n);
  }
  return {
    amount: n,
    first: ic,
    events: [{
      t: "bailout",
      amount: n,
      first: ic
    }]
  };
}
g(xx, "bailout");
function xu(iK, iW, ic, iN = {}) {
  let iF = [];
  let iI = ia => {
    let iR = !iK.secrets[ia];
    iK.secrets[ia] = true;
    iF.push({
      t: "secret",
      id: ia,
      kind: ic,
      first: iR
    });
  };
  if (ic === "shoeClick") {
    if (iN.dealtSinceShuffle === 51) {
      iI(1);
      iF.push(...x5(iK, "FIFTY_ONE", null));
    }
  } else if (ic === "lever") {
    if ((iN.room || "coin") !== "coin") {
      return iF;
    }
    iW.lever++;
    iF.push({
      t: "lever",
      pulls: iW.lever
    });
    if (iW.lever === 11) {
      iI(2);
      iK.story.flags.lintOpen = true;
      iF.push(...x5(iK, "LEVER", "coin"));
      iF.push(...x3(iK, "secret"));
    }
  } else if (ic === "signHover") {
    if ((iN.seconds || 0) >= 30) {
      iI(4);
    }
  } else if (ic === "pennyEdge") {
    if (iN.face === "EDGE" && iN.natural) {
      iI(5);
    }
  } else if (ic === "keepsakeItem" && (iN.room || "lint") === "lint") {
    let ia = iN.char || iK.char;
    if (h0.includes(ia) && !iK.cosmetics.backs.includes(ia)) {
      iK.cosmetics.backs.push(ia);
    }
    iI(7);
  }
  return iF;
}
g(xu, "secretCheck");
var xi = {
  ink: "#1b140f",
  shadow: "#0f0b09",
  box0: "#4a3526",
  box1: "#7a5a3e",
  box2: "#b08c62",
  lint: "#8f8a82",
  moss: "#3d5638",
  plush: "#62202a",
  brass: "#c29a45",
  ivory: "#efe6cf",
  inkred: "#b0302a",
  navy: "#2a3a64",
  fluoro: "#e6eedc",
  white: "#ffffff",
  sel: "#ffff00",
  void: "#000000",
  dw0: "#0b0614",
  dw1: "#170c26",
  dw2: "#2a1742",
  dw3: "#4a2a73",
  dw4: "#7b52b8",
  dw5: "#b89af0",
  gold0: "#5e3a0c",
  gold1: "#a8741c",
  gold2: "#e8b43c",
  gold3: "#ffe89a",
  rail0: "#0e0812",
  rail1: "#221430",
  rail2: "#3a2352",
  rail3: "#5c3a80",
  orange: "#ff7f27",
  grey: "#7f7f8a",
  paper: "#d9ccae",
  panel: "#f6e7bd",
  cardred: "#c8203a",
  cardblk: "#1f1830"
};
var xy = {
  ink: "shadow",
  shadow: "shadow",
  box0: "shadow",
  box1: "box0",
  box2: "box1",
  lint: "box0",
  moss: "#27371f",
  plush: "#3f1219",
  brass: "box1",
  ivory: "box2",
  inkred: "plush",
  navy: "#1b2544",
  fluoro: "lint",
  white: "ivory",
  sel: "gold2",
  void: "void",
  dw0: "void",
  dw1: "dw0",
  dw2: "dw1",
  dw3: "dw2",
  dw4: "dw3",
  dw5: "dw4",
  gold0: "#3a2306",
  gold1: "gold0",
  gold2: "gold1",
  gold3: "gold2",
  rail0: "void",
  rail1: "rail0",
  rail2: "rail1",
  rail3: "rail2",
  orange: "#a04a10",
  grey: "#4a4a52",
  paper: "box2",
  panel: "ivory",
  cardred: "inkred",
  cardblk: "shadow"
};
var xY = g((iK, iW) => iW && iW[0] === "#" ? iW : iK[iW] || xi[iW] || "#ff00ff", "hexOf");
var xj = Object.fromEntries(Object.keys(xi).map(iK => [iK, xY(xi, xy[iK])]));
var xp = {
  coin: ["#052620", "#093a2e", "#0e5040", "#166b55"],
  glasses: ["#06143a", "#0b2255", "#123272", "#1d4896"],
  violin: ["#280512", "#410a20", "#5a112f", "#7a1b43"],
  lint: ["#18142a", "#241e38", "#312a4b", "#453b63"]
};
xp.finale = xp.coin;
var xD = 39;
var xQ = 55;
var xg = 14;
var xU = 26;
var xZ = 36;
var xw = m || ["buttons", "keys", "socks", "coins"];
var xC = o || ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var xB = new Set(t || ["buttons", "keys"]);
var xO = f || [1, 5, 25, 100, 500];
var xm = null;
function xH(iK) {
  xm = typeof iK == "function" ? iK : null;
  uv();
}
g(xH, "setCanvasFactory");
function xT(iK, iW) {
  if (xm) {
    return xm(iK, iW);
  }
  if (typeof document !== "undefined" && document.createElement) {
    let ic = document.createElement("canvas");
    ic.width = iK;
    ic.height = iW;
    return ic;
  }
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(iK, iW);
  } else {
    return null;
  }
}
g(xT, "newCanvas");
var xq = new Map();
function xX(iK) {
  let iW = xq.get(iK);
  if (iW) {
    return iW;
  }
  let ic = parseInt(iK.slice(1), 16);
  iW = [ic >> 16 & 255, ic >> 8 & 255, ic & 255];
  xq.set(iK, iW);
  return iW;
}
g(xX, "rgb");
var xV = class yx {
  constructor(iK, iW) {
    this.w = iK;
    this.h = iW;
    this.p = new Array(iK * iW).fill(null);
  }
  set(iK, iW, ic) {
    iK |= 0;
    iW |= 0;
    if (iK >= 0 && iW >= 0 && iK < this.w && iW < this.h) {
      this.p[iW * this.w + iK] = ic;
    }
  }
  get(iK, iW) {
    if (iK >= 0 && iW >= 0 && iK < this.w && iW < this.h) {
      return this.p[iW * this.w + iK];
    } else {
      return null;
    }
  }
  rect(iK, iW, ic, iN, iF) {
    for (let iI = 0; iI < iN; iI++) {
      for (let ia = 0; ia < ic; ia++) {
        this.set(iK + ia, iW + iI, iF);
      }
    }
  }
  stamp(iK, iW, ic, iN, {
    flip: iF = false,
    mirror: iI = false,
    only: ia = null
  } = {}) {
    let iR = iK.length;
    for (let iG = 0; iG < iR; iG++) {
      let ik = iK[iF ? iR - 1 - iG : iG];
      let iJ = ik.length;
      for (let iA = 0; iA < iJ; iA++) {
        let ir = ik[iF || iI ? iJ - 1 - iA : iA];
        if (ir === "." || ir === " ") {
          continue;
        }
        let iL = iN[ir];
        if (iL) {
          if (!ia || !!ia(iW + iA, ic + iG)) {
            this.set(iW + iA, ic + iG, iL);
          }
        }
      }
    }
  }
  toCanvas(iK = xi, iW = 1) {
    let ic = xT(this.w * iW, this.h * iW);
    if (!ic) {
      return null;
    }
    let iN = ic.getContext("2d");
    let iF = iN.createImageData(this.w * iW, this.h * iW);
    let iI = iF.data;
    let ia = this.w * iW;
    for (let iR = 0; iR < this.h; iR++) {
      for (let iG = 0; iG < this.w; iG++) {
        let ik = this.p[iR * this.w + iG];
        if (!ik) {
          continue;
        }
        let [iJ, iA, ir] = xX(xY(iK, ik));
        for (let iL = 0; iL < iW; iL++) {
          for (let il = 0; il < iW; il++) {
            let iv = ((iR * iW + iL) * ia + iG * iW + il) * 4;
            iI[iv] = iJ;
            iI[iv + 1] = iA;
            iI[iv + 2] = ir;
            iI[iv + 3] = 255;
          }
        }
      }
    }
    iN.putImageData(iF, 0, 0);
    return ic;
  }
  toMap() {
    let iK = {};
    let iW = new Map();
    let ic = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iN = [];
    for (let iF = 0; iF < this.h; iF++) {
      let iI = "";
      for (let ia = 0; ia < this.w; ia++) {
        let iR = this.p[iF * this.w + ia];
        if (!iR) {
          iI += ".";
          continue;
        }
        let iG = iW.get(iR);
        if (!iG) {
          iG = ic[iW.size] || "?";
          iW.set(iR, iG);
          iK[iG] = iR;
        }
        iI += iG;
      }
      iN.push(iI);
    }
    return {
      w: this.w,
      h: this.h,
      pal: iK,
      rows: iN
    };
  }
};
g(xV, "PB");
var xz = xV;
var xo = new WeakMap();
var xK = new WeakMap();
var xW = 1;
function xc(iK) {
  let iW = xK.get(iK);
  if (!iW) {
    iW = xW++;
    xK.set(iK, iW);
  }
  return iW;
}
g(xc, "palId");
function xN(iK, iW = 0) {
  if (!iK) {
    return null;
  }
  if (iK.rows) {
    return iK.rows;
  }
  let ic = iK.frames;
  if (!ic) {
    return null;
  }
  if (Array.isArray(ic)) {
    return ic[(iW | 0) % ic.length] || ic[0];
  }
  if (typeof iW == "string") {
    let iF = iW.indexOf(":");
    let iI = iF >= 0 ? iW.slice(0, iF) : iW;
    let ia = iF >= 0 ? +iW.slice(iF + 1) : 0;
    let iR = ic[iI];
    if (!iR || !iR.length) {
      return null;
    } else {
      return iR[(ia | 0) % iR.length] || iR[0];
    }
  }
  let iN = ic.idle || ic[Object.keys(ic)[0]];
  if (!iN || !iN.length) {
    return null;
  } else {
    return iN[(iW | 0) % iN.length];
  }
}
g(xN, "frameRows");
function xF(iK, iW = 0, ic = xi, iN = 1) {
  if (!iK) {
    return null;
  }
  let iF = xo.get(iK);
  if (!iF) {
    iF = new Map();
    xo.set(iK, iF);
  }
  let iI = iW + "|" + xc(ic) + "|" + iN;
  if (iF.has(iI)) {
    return iF.get(iI);
  }
  let ia = xN(iK, iW);
  let iR = null;
  if (ia) {
    let iG = new xz(iK.w || ia[0].length, iK.h || ia.length);
    let ik = {};
    for (let iJ in iK.pal) {
      ik[iJ] = iK.pal[iJ];
    }
    iG.stamp(ia, 0, 0, ik);
    iR = iG.toCanvas(ic, iN);
  }
  iF.set(iI, iR);
  return iR;
}
g(xF, "bake");
var xf = {
  A: [".#.", "#.#", "###", "#.#", "#.#"],
  2: ["##.", "..#", ".#.", "#..", "###"],
  3: ["##.", "..#", ".#.", "..#", "##."],
  4: ["#.#", "#.#", "###", "..#", "..#"],
  5: ["###", "#..", "##.", "..#", "##."],
  6: [".##", "#..", "###", "#.#", "###"],
  7: ["###", "..#", ".#.", ".#.", ".#."],
  8: ["###", "#.#", ".#.", "#.#", "###"],
  9: ["###", "#.#", "###", "..#", "##."],
  10: ["#.###", "#.#.#", "#.#.#", "#.#.#", "#.###"],
  J: ["..#", "..#", "..#", "#.#", ".#."],
  Q: [".#.", "#.#", "#.#", "#.#", ".##"],
  K: ["#.#", "#.#", "##.", "#.#", "#.#"],
  0: ["###", "#.#", "#.#", "#.#", "###"],
  1: [".#.", "##.", ".#.", ".#.", "###"],
  "?": ["##.", "..#", ".#.", "...", ".#."],
  R: ["##.", "#.#", "##.", "#.#", "#.#"],
  O: [".#.", "#.#", "#.#", "#.#", ".#."],
  U: ["#.#", "#.#", "#.#", "#.#", "###"],
  T: ["###", ".#.", ".#.", ".#.", ".#."],
  E: ["###", "#..", "##.", "#..", "###"],
  N: ["#.#", "###", "###", "#.#", "#.#"],
  S: [".##", "#..", ".#.", "..#", "##."],
  L: ["#..", "#..", "#..", "#..", "###"],
  I: ["###", ".#.", ".#.", ".#.", "###"],
  C: [".##", "#..", "#..", "#..", ".##"],
  D: ["##.", "#.#", "#.#", "#.#", "##."],
  M: ["#.#", "###", "###", "#.#", "#.#"],
  F: ["###", "#..", "##.", "#..", "#.."],
  H: ["#.#", "#.#", "###", "#.#", "#.#"],
  Y: ["#.#", "#.#", ".#.", ".#.", ".#."],
  W: ["#.#", "#.#", "#.#", "###", "#.#"],
  P: ["##.", "#.#", "##.", "#..", "#.."],
  A2: [".#.", "#.#", "###", "#.#", "#.#"]
};
function xI(iK, iW, ic, iN, iF) {
  let iI = ic;
  for (let ia of String(iW)) {
    if (ia === " ") {
      iI += 2;
      continue;
    }
    let iR = xf[ia];
    if (!iR) {
      iI += 4;
      continue;
    }
    iK.stamp(iR, iI, iN, {
      "#": iF
    });
    iI += iR[0].length + 1;
  }
  return iI - ic - 1;
}
g(xI, "micro");
var xa = g(iK => {
  let iW = 0;
  for (let ic of String(iK)) {
    iW += ic === " " ? 2 : xf[ic] ? xf[ic][0].length + 1 : 4;
  }
  return Math.max(0, iW - 1);
}, "microW");
var xR = {
  buttons: "heart",
  keys: "diamond",
  socks: "spade",
  coins: "club"
};
var xG = g(iK => xR[iK] || iK, "shownOf");
var xk = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#.."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#.."],
  spade: ["..#..", ".###.", "#####", "#####", ".#.#."],
  club: [".###.", ".###.", "##.##", "#####", ".#.#."]
};
var xJ = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#..", "....."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#..", "....."],
  spade: ["..#..", ".###.", "#####", "#####", "..#..", ".###."],
  club: [".###.", ".###.", "##.##", "#####", "..#..", ".###."]
};
var xA = {
  heart: [".##...##.", "####.####", "#########", "#########", "#########", ".#######.", "..#####..", "...###...", "....#...."],
  diamond: ["....#....", "...###...", "..#####..", ".#######.", "#########", ".#######.", "..#####..", "...###...", "....#...."],
  spade: ["....#....", "...###...", "..#####..", ".#######.", "#########", "#########", ".##.#.##.", "....#....", "...###..."],
  club: ["...###...", "..#####..", "..#####..", ".##.#.##.", "#########", "#########", ".##.#.##.", "....#....", "...###..."]
};
var xr = Object.fromEntries(xw.map(iK => [iK, xA[xG(iK)] || xA.heart]));
var xL = 7;
var xl = 11;
var xv = 15;
var xS = {
  2: [[xl, 4], [xl, 26]],
  3: [[xl, 4], [xl, 15], [xl, 26]],
  4: [[xL, 4], [xv, 4], [xL, 26], [xv, 26]],
  5: [[xL, 4], [xv, 4], [xl, 15], [xL, 26], [xv, 26]],
  6: [[xL, 4], [xv, 4], [xL, 15], [xv, 15], [xL, 26], [xv, 26]],
  7: [[xL, 4], [xv, 4], [xl, 9], [xL, 15], [xv, 15], [xL, 26], [xv, 26]],
  8: [[xL, 4], [xv, 4], [xl, 9], [xL, 15], [xv, 15], [xl, 21], [xL, 26], [xv, 26]],
  9: [[xL, 4], [xv, 4], [xL, 11], [xv, 11], [xl, 15], [xL, 19], [xv, 19], [xL, 26], [xv, 26]],
  10: [[xL, 4], [xv, 4], [xl, 8], [xL, 11], [xv, 11], [xL, 19], [xv, 19], [xl, 22], [xL, 26], [xv, 26]]
};
var xE = xf[10];
var xM = {
  K: ["#.#.#.#.#", "#########", "#.#.#.#.#", "#########"],
  Q: ["....#....", ".#.###.#.", "#########", ".#######."],
  J: [".......##", ".....###.", "########.", "#########"]
};
var xP = {
  J: ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
  Q: [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"]
};
var xb = g((iK, iW, ic, iN, iF) => {
  let iI = xP[iW];
  for (let ia = 0; ia < iI.length; ia++) {
    for (let iR = 0; iR < iI[ia].length; iR++) {
      if (iI[ia][iR] === "#") {
        iK.rect(ic + iR * 2, iN + ia * 2, 2, 2, iF);
      }
    }
  }
}, "bigGlyph");
var xd = {
  J: xM.J,
  Q: xM.Q,
  K: xM.K
};
var u0 = {};
var u1 = [];
var u2 = ["coffee", "tally", "nick", "residue", "crease", "ripple", "crayon", "thumb", "pinhole", "price"];
var u3 = {
  "7:keys": {
    kind: "coffee",
    at: 2,
    name: "the coffee ring on the 7 of KEYS"
  },
  "2:socks": {
    kind: "tooth",
    at: 1,
    name: "a tooth mark on the 2 of SOCKS"
  },
  "K:coins": {
    kind: "crayon",
    at: 3,
    name: "a brown crayon moustache on the KING of COINS"
  },
  "A:buttons": {
    kind: "price",
    at: 0,
    name: "a 5c price sticker on the ACE of BUTTONS"
  },
  "10:socks": {
    kind: "crease",
    at: 1,
    name: "the long crease across the 10 of SOCKS"
  },
  "J:keys": {
    kind: "pinhole",
    at: 2,
    name: "a pin hole through the JACK of KEYS"
  }
};
function u4(iK) {
  if (!iK || iK.rank === "TICKET") {
    return null;
  }
  let iW = u3[iK.rank + ":" + iK.suit];
  if (iW) {
    return {
      kind: iW.kind,
      at: iW.at,
      named: true
    };
  }
  let ic = Math.max(0, xC.indexOf(iK.rank));
  let iN = Math.max(0, xw.indexOf(iK.suit));
  return {
    kind: u2[(iN * 7 + ic * 3) % 10],
    at: (ic + iN * 5) % 4,
    named: false
  };
}
g(u4, "flawOf");
function u5(iK) {
  let iW = xU;
  let ic = xZ;
  iK.rect(1, 1, iW - 2, ic - 2, "ivory");
  for (let iN = 2; iN < iW - 2; iN++) {
    iK.set(iN, 0, "ink");
    iK.set(iN, ic - 1, "ink");
  }
  for (let iF = 2; iF < ic - 2; iF++) {
    iK.set(0, iF, "ink");
    iK.set(iW - 1, iF, "ink");
  }
  iK.set(1, 1, "ink");
  iK.set(iW - 2, 1, "ink");
  iK.set(1, ic - 2, "ink");
  iK.set(iW - 2, ic - 2, "ink");
  for (let iI = 2; iI < ic - 2; iI++) {
    iK.set(iW - 2, iI, "paper");
  }
  for (let ia = 2; ia < iW - 2; ia++) {
    iK.set(ia, ic - 2, "paper");
  }
  for (let iR = 2; iR < iW - 2; iR++) {
    iK.set(iR, 1, "white");
  }
  for (let iG = 2; iG < ic - 2; iG++) {
    iK.set(1, iG, "white");
  }
}
g(u5, "cardOutline");
var u6 = g(iK => xB.has(iK) ? "cardred" : "cardblk", "inkOf");
function u7(iK, iW, ic, iN, iF, iI) {
  iK.stamp(xJ[iW] || xJ.heart, ic, iN, {
    "#": iF
  }, {
    flip: iI
  });
}
g(u7, "stampPip");
function u8(iK, iW, ic = {}) {
  let iN = new xz(xU, xZ);
  u5(iN);
  if (!iK) {
    return iN;
  }
  if (iK.rank === "TICKET") {
    return u9();
  }
  let iF = xG(iK.suit);
  let iI = u6(iK.suit);
  let ia = iK.rank;
  let iR = ia === "10" ? xE : xf[ia] || xf["?"];
  let iG = iR[0].length;
  let ik = ia === "10" ? 1 : 2;
  iN.stamp(iR, ik, 3, {
    "#": iI
  });
  iN.stamp(xk[iF], 1, 9, {
    "#": iI
  });
  iN.stamp(iR, xU - ik - iG, xZ - 8, {
    "#": iI
  }, {
    flip: true,
    mirror: true
  });
  iN.stamp(xk[iF], xU - 6, xZ - 14, {
    "#": iI
  }, {
    flip: true,
    mirror: true
  });
  if (ia === "J" || ia === "Q" || ia === "K") {
    for (let iJ = 3; iJ <= 32; iJ++) {
      for (let iA = 6; iA <= 19; iA++) {
        iN.set(iA, iJ, iA === 6 || iA === 19 || iJ === 3 || iJ === 32 ? "gold1" : "panel");
      }
    }
    iN.stamp(xM[ia], 8, 5, {
      "#": "gold2"
    });
    for (let ir = 0; ir < 9; ir++) {
      if (xM[ia][0][ir] === "#") {
        iN.set(8 + ir, 5, "gold3");
      }
    }
    xb(iN, ia, 8, 10, iI);
    iN.stamp(xk[iF], 10, 26, {
      "#": iI
    });
    if (ia === "Q" && iK.suit === "buttons" && ic.dogear) {
      iN.set(24, 1, null);
      iN.set(23, 0, null);
      iN.set(24, 0, null);
      iN.set(25, 2, null);
      iN.set(22, 1, "paper");
      iN.set(23, 1, "paper");
      iN.set(23, 2, "paper");
      iN.set(24, 2, "ink");
      iN.set(24, 3, "ink");
      iN.set(22, 0, "ink");
    }
  } else if (ia === "A") {
    iN.stamp(xA[iF], 8, 13, {
      "#": iI
    });
    if (iF === "spade") {
      for (let [iL, il] of [[12, 16], [11, 17], [13, 17]]) {
        iN.set(iL, il, "gold2");
      }
    }
  } else {
    let iv = +ia;
    for (let [iS, iE] of xS[iv] || []) {
      u7(iN, iF, iS, iE, iI, iE > 17);
    }
  }
  return iN;
}
g(u8, "faceBuffer");
function u9() {
  let iK = new xz(xU, xZ);
  u5(iK);
  for (let iW = 2; iW < xU - 2; iW += 2) {
    iK.set(iW, 2, "navy");
    iK.set(iW, xZ - 3, "navy");
  }
  xI(iK, "WILD", 5, 5, "navy");
  ((ic, iN, iF) => {
    let iI = xf[ic];
    for (let ia = 0; ia < 5; ia++) {
      for (let iR = 0; iR < 3; iR++) {
        if (iI[ia][iR] === "#") {
          iK.rect(iN + iR * 2, iF + ia * 2, 2, 2, "navy");
        }
      }
    }
  })("?", 10, 13);
  for (let ic = 2; ic < xU - 2; ic++) {
    for (let iN = 26; iN < 29; iN++) {
      if ((ic + iN & 3) < 2) {
        iK.set(ic, iN, "cardred");
      }
    }
  }
  return iK;
}
g(u9, "ticketBuffer");
function uh(iK) {
  let iW = new xz(xU, xZ);
  u5(iW);
  iW.rect(2, 2, xU - 4, xZ - 4, "dw2");
  for (let iI = 3; iI < xU - 3; iI++) {
    iW.set(iI, 3, "gold1");
    iW.set(iI, xZ - 4, "gold1");
  }
  for (let ia = 3; ia < xZ - 3; ia++) {
    iW.set(3, ia, "gold1");
    iW.set(xU - 4, ia, "gold1");
  }
  for (let iR = 5; iR < xZ - 5; iR++) {
    for (let iG = 5; iG < xU - 5; iG++) {
      let ik = (iG + iR) % 4 === 0;
      let iJ = (iG - iR + 64) % 4 === 0;
      iW.set(iG, iR, ik && iJ ? "dw4" : ik || iJ ? "dw3" : "dw1");
    }
  }
  let ic = 13;
  let iN = 18;
  for (let iA = iN - 9; iA <= iN + 9; iA++) {
    for (let ir = ic - 7; ir <= ic + 7; ir++) {
      let iL = Math.abs(ir + 0.5 - ic) / 7 + Math.abs(iA + 0.5 - iN) / 9;
      if (iL <= 1.08 && iL > 0.92) {
        iW.set(ir, iA, "ink");
      } else if (iL <= 0.92 && iL > 0.7) {
        iW.set(ir, iA, ir < ic == iA < iN ? "gold3" : "gold2");
      } else if (iL <= 0.7) {
        iW.set(ir, iA, "dw1");
      }
    }
  }
  let iF = iK === "52" ? "white" : "gold2";
  iW.rect(12, 14, 2, 8, iF);
  iW.rect(9, 17, 8, 2, iF);
  iW.rect(11, 16, 4, 4, iF);
  return iW;
}
g(uh, "backBuffer");
var ux = {
  1: {
    c: "#ecebf4",
    w: "#7b52b8",
    d: "#a9a4c2",
    l: "#ffffff",
    t: "#4a2a73"
  },
  5: {
    c: "#d8283f",
    w: "#ffffff",
    d: "#8e1328",
    l: "#f06a7c",
    t: "#ffffff"
  },
  25: {
    c: "#1fa45e",
    w: "#ffffff",
    d: "#0d6537",
    l: "#5bd594",
    t: "#ffffff"
  },
  100: {
    c: "#2c2540",
    w: "#e8b43c",
    d: "#16111f",
    l: "#4d4466",
    t: "#ffe89a"
  },
  500: {
    c: "#8a3fe0",
    w: "#ffe89a",
    d: "#4f1f94",
    l: "#b98af7",
    t: "#ffe89a"
  }
};
ux[0.5] = ux[1];
var uu = {
  1: [".#", "##", ".#", ".#", ".#"],
  2: xf[2],
  5: xf[5],
  0: xf[0]
};
function ui(iK) {
  let iW = [];
  for (let ia = 0; ia < 18; ia++) {
    let iR = "";
    for (let iG = 0; iG < 18; iG++) {
      let ik = iG + 0.5 - 9;
      let iJ = ia + 0.5 - 9;
      let iA = Math.hypot(ik, iJ);
      let ir = (Math.atan2(iJ, ik) / (Math.PI * 2) + 1) % 1;
      let iL = ".";
      if (iA <= 8.9) {
        if (iA > 8) {
          iL = "k";
        } else if (iA > 6.6) {
          iL = Math.floor(ir * 16 + 0.5) % 2 === 0 ? "w" : ik + iJ > 7 ? "d" : "c";
        } else if (iA > 5.9) {
          iL = "d";
        } else {
          iL = ik + iJ < -5.5 && iA > 4 ? "l" : "c";
        }
      }
      iR += iL;
    }
    iW.push(iR.split(""));
  }
  let ic = [...(iK === 0.5 ? "" : String(iK))].map(il => uu[il] || xf[il]);
  let iN = ic.reduce((il, iv) => il + iv[0].length, 0) + Math.max(0, ic.length - 1);
  let iF = Math.round(9 - iN / 2);
  let iI = 7;
  for (let il of ic) {
    for (let iv = 0; iv < 5; iv++) {
      for (let iS = 0; iS < il[iv].length; iS++) {
        if (il[iv][iS] === "#") {
          iW[iI + iv][iF + iS] = "t";
        }
      }
    }
    iF += il[0].length + 1;
  }
  if (iK === 0.5) {
    for (let iE = 0; iE < 18; iE++) {
      for (let iM = 10; iM < 18; iM++) {
        iW[iE][iM] = iM === 10 && iW[iE][iM] !== "." ? "k" : ".";
      }
    }
  }
  return iW.map(iP => iP.join(""));
}
g(ui, "chipTopRows");
var uy = [".kkkkkkkkkkkkkk.", "kllllllllllllllk", "kcwwccwwccwwccck", "kdwwddwwddwwdddk", ".kkkkkkkkkkkkkk."];
var uY = [".kkkkkkkkkkkkkk.", "kllllllllllllllk", "kccwwccwwccwwcck", "kddwwddwwddwwddk", ".kkkkkkkkkkkkkk."];
var uj = [".kkkkkkk........", "kllllllk........", "kcwwccck........", "kdwwdddk........", ".kkkkkkk........"];
function up(iK = false) {
  let iW = [];
  for (let ic = 0; ic < 7; ic++) {
    let iN = "";
    for (let iF = 0; iF < 16; iF++) {
      let iI = (iF + 0.5 - 8) / 8;
      let ia = (ic + 0.5 - 3.5) / 3.5;
      let iR = Math.hypot(iI, ia);
      let iG = (Math.atan2(ia, iI) / (Math.PI * 2) + 1) % 1;
      let ik = ".";
      if (iR <= 1) {
        ik = iR > 0.84 ? "k" : iR > 0.58 ? Math.floor(iG * 12 + 0.5) % 2 === 0 ? "w" : "c" : iR > 0.44 ? "d" : ia < -0.1 && iI < 0.2 ? "l" : "c";
      }
      if (iK && iF > 7) {
        ik = iF === 8 && ik !== "." ? "k" : ".";
      }
      iN += ik;
    }
    iW.push(iN);
  }
  return iW;
}
g(up, "chipCapRows");
var uD = g(iK => Object.assign({
  k: "ink"
}, ux[iK]), "chipPal");
function uQ() {
  let iK = new xz(30, 22);
  for (let iW = 4; iW < 20; iW++) {
    for (let ic = 6; ic < 29; ic++) {
      iK.set(ic, iW, "rail1");
    }
  }
  for (let iN = 6; iN < 29; iN++) {
    iK.set(iN, 4, "rail3");
    iK.set(iN, 19, "rail0");
    iK.set(iN, 20, "void");
  }
  for (let iF = 4; iF < 20; iF++) {
    iK.set(28, iF, "rail0");
    iK.set(6, iF, "rail2");
  }
  for (let iI = 6; iI < 19; iI++) {
    let ia = 1 + (iI - 6 >> 2);
    for (let iR = ia; iR < 9; iR++) {
      iK.set(iR, iI, "rail0");
    }
  }
  for (let iG = 7; iG < 18; iG++) {
    let ik = 2 + (iG - 6 >> 2);
    for (let iJ = ik; iJ < ik + 5; iJ++) {
      iK.set(iJ, iG, "dw2");
    }
    iK.set(ik + 5, iG, iG & 1 ? "ivory" : "box2");
    if (iG === 12) {
      iK.set(ik + 2, iG, "gold2");
    }
  }
  for (let iA = 6; iA < 19; iA++) {
    let ir = 1 + (iA - 6 >> 2);
    iK.set(ir - 1, iA, "gold2");
  }
  for (let iL = 1; iL < 29; iL++) {
    if (!iK.get(iL, 5)) {
      iL < 9;
    }
  }
  for (let il = 9; il < 28; il++) {
    iK.set(il, 5, "gold1");
  }
  iK.rect(15, 11, 9, 5, "gold1");
  for (let iv = 15; iv < 24; iv++) {
    iK.set(iv, 11, "gold2");
  }
  iK.set(19, 13, "rail0");
  for (let iS = 9; iS < 27; iS++) {
    iK.set(iS, 2, iS & 1 ? "ivory" : "box2");
    iK.set(iS, 3, "dw2");
  }
  iK.set(8, 3, "gold2");
  iK.set(27, 3, "rail0");
  return iK;
}
g(uQ, "shoeBuffer");
function ug() {
  let iK = new xz(28, 12);
  for (let iW = 2; iW < 10; iW++) {
    for (let ic = 1; ic < 27; ic++) {
      iK.set(ic, iW, "rail0");
    }
  }
  for (let iN = 1; iN < 27; iN++) {
    iK.set(iN, 1, "gold1");
    iK.set(iN, 2, "gold2");
    iK.set(iN, 10, "void");
  }
  for (let iF = 2; iF < 10; iF++) {
    iK.set(0, iF, "gold1");
    iK.set(27, iF, "gold1");
  }
  for (let iI = 4; iI < 9; iI++) {
    for (let ia = 3; ia < 25; ia++) {
      iK.set(ia, iI, "rail1");
    }
  }
  return iK;
}
g(ug, "trayBuffer");
function uU() {
  let iK = new xz(26, 30);
  for (let iW = 2; iW < 30; iW++) {
    for (let ic = 1; ic < 25; ic++) {
      if (!(iW < 5) || !(ic < 3 + (5 - iW)) && !(ic > 22 - (5 - iW))) {
        iK.set(ic, iW, "gold0");
      }
    }
  }
  for (let iN = 2; iN < 30; iN++) {
    for (let iF = 1; iF < 25; iF++) {
      if ((!(iN < 5) || !(iF < 3 + (5 - iN)) && !(iF > 22 - (5 - iN))) && (iN === 2 || iF === 1 || iF === 24)) {
        iK.set(iF, iN, "gold1");
      }
    }
  }
  for (let iI = 4; iI < 30; iI++) {
    for (let ia = 3; ia < 23; ia++) {
      if (!(iI < 7) || !(ia < 5 + (7 - iI)) && !(ia > 20 - (7 - iI))) {
        iK.set(ia, iI, ia < 5 ? "dw4" : ia > 20 || (ia + iI) % 7 === 0 ? "dw2" : "dw3");
      }
    }
  }
  for (let iR = 5; iR < 21; iR++) {
    iK.set(iR, 5, "dw5");
  }
  for (let [iG, ik] of [[7, 10], [13, 10], [19, 10], [10, 16], [16, 16], [7, 22], [13, 22], [19, 22]]) {
    iK.set(iG, ik, "gold2");
    iK.set(iG, ik + 1, "dw1");
  }
  return iK;
}
g(uU, "chairBuffer");
function uZ() {
  let iK = new xz(30, 26);
  let iW = 14.5;
  for (let ic = 0; ic < 26; ic++) {
    for (let iN = 0; iN < 30; iN++) {
      let iF = (iN - iW) / 15;
      let iI = ic < 10 ? (10 - ic) / 10 : 0;
      if (iF * iF + iI * iI > 1) {
        continue;
      }
      let ia = iF * iF + iI * iI > 0.8 || iN === 0 || iN === 29;
      iK.set(iN, ic, ia ? "gold1" : "plush");
    }
  }
  for (let iR = 0; iR < 26; iR++) {
    for (let iG = 0; iG < 30; iG++) {
      if (iK.get(iG, iR) !== "plush") {
        continue;
      }
      if ([iK.get(iG - 1, iR), iK.get(iG + 1, iR), iK.get(iG, iR - 1)].includes("gold1")) {
        iK.set(iG, iR, iG < iW ? "gold2" : "gold0");
      }
    }
  }
  for (let [ik, iJ] of [[9, 8], [15, 6], [21, 8], [12, 13], [18, 13], [9, 18], [15, 18], [21, 18]]) {
    iK.set(ik, iJ, "#3a0f16");
    iK.set(ik - 1, iJ - 1, "#8a3040");
  }
  for (let iA = 1; iA < 29; iA++) {
    iK.set(iA, 23, "gold2");
    iK.set(iA, 24, "gold0");
    iK.set(iA, 25, "void");
  }
  return iK;
}
g(uZ, "chairFrontBuffer");
function uw() {
  let iK = new xz(34, 13);
  for (let iW = 0; iW < 13; iW++) {
    for (let ic = 0; ic < 34; ic++) {
      if (iW < 3 && (ic < 3 - iW || ic > 30 + iW)) {
        continue;
      }
      let iN = ic === 0 || ic === 33 || iW === 0 || iW < 3 && (ic === 3 - iW || ic === 30 + iW);
      iK.set(ic, iW, iN ? "gold1" : iW < 2 ? "rail3" : iW < 6 ? "rail2" : "rail1");
    }
  }
  for (let iF = 2; iF < 32; iF++) {
    if (iK.get(iF, 1) === "rail3") {
      iK.set(iF, 1, "gold2");
    }
  }
  for (let iI = 3; iI < 12; iI++) {
    for (let ia = 4; ia < 30; ia++) {
      iK.set(ia, iI, iI === 3 || ia === 4 ? "gold3" : iI === 11 || ia === 29 ? "gold0" : "gold1");
    }
  }
  return iK;
}
g(uw, "chairBackBuffer");
var uC = {
  w: 14,
  h: 12,
  pal: {
    k: "ink",
    w: "ivory",
    b: "dw4",
    s: "box2"
  },
  frames: {
    open: [["..k.k.k.......", ".kwkwkwk......", ".kwkwkwk.k....", ".kwwwwwwkwk...", ".kwwwwwwwwk...", ".kwwwwwwwwk...", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", ".............."]],
    hold: [["..............", "..kkkkkk......", ".kwwwwwwk.....", ".kwkwkwwwk....", ".kwwwwwwwk....", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
    flat: [["..............", "..............", ".kkkkkkkkk....", "kwwwwwwwwwk...", "kwwwwwwwwwwk..", "kswwwwwwwwwk..", ".kkkkkkkkkk...", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
    point: [[".....k........", "....kwk.......", "....kwk.......", "..kkkwkk......", ".kwkwwwwk.....", ".kwwwwwwk.....", ".kswwwwwk.....", "..kwwwwk......", "..kbbbbk......", "..kbbbbk......", "...kkkk.......", ".............."]]
  }
};
var uB = {
  shoe: uQ().toMap(),
  tray: ug().toMap(),
  chair: uU().toMap(),
  chairFront: uZ().toMap(),
  chairBack: uw().toMap(),
  glove: uC,
  cut: {
    w: 26,
    h: 4,
    pal: {
      k: "ink",
      r: "inkred"
    },
    rows: ["kkkkkkkkkkkkkkkkkkkkkkkkkk", "krrrrrrrrrrrrrrrrrrrrrrrrk", "krrrrrrrrrrrrrrrrrrrrrrrrk", "kkkkkkkkkkkkkkkkkkkkkkkkkk"]
  },
  envelope: {
    w: 24,
    h: 14,
    pal: {
      k: "ink",
      w: "ivory",
      b: "box2",
      r: "inkred"
    },
    rows: ["kkkkkkkkkkkkkkkkkkkkkkkk", "kwkwwwwwwwwwwwwwwwwwwkwk", "kwwkwwwwwwwwwwwwwwwwkwwk", "kwwwkwwwwwwwwwwwwwwkwwwk", "kwwwwkkwwwwwwwwwwkkwwwwk", "kwwwwwwkkwwwwwwkkwwwwwwk", "kwwwwwwwwkkrrkkwwwwwwwwk", "kwwwwwwwwwwrrwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kbbbbwwwwwwwwwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kbbbbbbwwwwwwwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kkkkkkkkkkkkkkkkkkkkkkkk"]
  }
};
var uO = 31;
var um = 24;
var uH = {
  hit: ["#########", "#.......#", "#...#...#", "#...#...#", "#.#####.#", "#...#...#", "#...#...#", "#.......#", "#########"],
  stand: ["..#.#.#..", "..#.#.#.#", "#.#.#.#.#", "#.#.#.#.#", "#.#######", "#########", ".########", "..######.", "...####.."],
  double: ["##...##.#####", ".##.##.....##", "..###...#####", ".##.##.##....", "##...##.#####"],
  split: ["####......####", "#..#......#..#", "#..#.#..#.#..#", "#..##....##..#", "#..#.#..#.#..#", "#..#......#..#", "####......####"],
  surrender: ["##.......", "#######..", "########.", "#######..", "##.......", "##.......", "##.......", "##.......", "##......."],
  skill: ["....#....", "....#....", "...###...", "#########", ".#######.", "..#####..", "..##.##..", ".##...##.", ".#.....#."],
  deal: [".######....", ".#....#....", ".#..######.", ".#..#....#.", ".#..#....#.", ".####....#.", "....#....#.", "....######."],
  rebet: ["..#####..", ".#.....#.", "#.......#", "#......##", "#.....###", "#........", ".#.....#.", "..#####.."],
  clear: ["#.....#", ".#...#.", "..#.#..", "...#...", "..#.#..", ".#...#.", "#.....#"],
  leave: ["######...", "#....#...", "#....#.#.", "#....####", "#....#.#.", "#....#...", "######..."],
  talk: [".#######.", "#.......#", "#.#.#.#.#", "#.......#", ".####.##.", "....##...", "....#...."]
};
var uT = Object.keys(uH);
function uq(iK) {
  let iW = new xz(uO, um);
  for (let iG = 0; iG < uO; iG++) {
    for (let ik of [0, 1, um - 2, um - 1]) {
      iW.set(iG, ik, "k");
    }
  }
  for (let iJ = 0; iJ < um; iJ++) {
    for (let iA of [0, 1, uO - 2, uO - 1]) {
      iW.set(iA, iJ, "k");
    }
  }
  let ic = uH[iK] || uH.hit;
  let iN = ic[0].length;
  let iF = ic.length;
  let iI = iN <= 9 && iF <= 9 ? 2 : 1;
  let ia = Math.floor((uO - iN * iI) / 2);
  let iR = Math.floor((um - iF * iI) / 2);
  for (let ir = 0; ir < iF; ir++) {
    for (let iL = 0; iL < iN; iL++) {
      if (ic[ir][iL] === "#") {
        iW.rect(ia + iL * iI, iR + ir * iI, iI, iI, "k");
      }
    }
  }
  return iW;
}
g(uq, "buttonBuffer");
var uX = {
  off: "#ff7f27",
  on: "#ffff00",
  dis: "#5a5a66"
};
var uV = {
  off: {
    k: "#ff7f27"
  },
  on: {
    k: "#ffff00"
  },
  dis: {
    k: "#5a5a66"
  }
};
var uz = ["..########..", "..#......##.", "..#.##...#.#", "..#.##...###", "..#........#", "..#...#....#", "..#..###...#", "..#...#....#", "..#........#", "..#.....##.#", "..#.....##.#", "..##########"];
var uo = g(iK => ({
  w: xU,
  h: xZ,
  pal: null,
  buf: iK
}), "cardMap");
var uK = {
  glyphs: xf,
  suits: xk,
  pips: xr,
  faces: xd,
  faceMoods: u0,
  aceTag: u1,
  pipLayouts: xS,
  chips: Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
    w: 18,
    h: 18,
    pal: uD(iK),
    rows: ui(iK)
  }])),
  chipEdges: Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
    w: 16,
    h: 5,
    pal: uD(iK),
    rows: iK === 0.5 ? uj : uy
  }])),
  chipEdgesB: Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
    w: 16,
    h: 5,
    pal: uD(iK),
    rows: iK === 0.5 ? uj : uY
  }])),
  chipCaps: Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
    w: 16,
    h: 7,
    pal: uD(iK),
    rows: up(iK === 0.5)
  }])),
  suitShown: xR,
  suits9: xA,
  props: uB,
  buttons: Object.fromEntries(uT.map(iK => [iK, uq(iK).toMap()])),
  icon: uz,
  flip: [27, 15, 6, 2, 6, 15, 27, 39],
  backs: ["51", "52"],
  cardMap: uo
};
uK.thankYou = uK.chips[1];
var uW = ["base", "ch1", "ch2", "ch3", "ch4", "ch5", "ut"];
var uc = {
  spade: 0,
  heart: 1,
  diamond: 2,
  club: 3
};
var uN = new Map();
var uF = "base";
function uf(iK) {
  let iW = String(iK ?? "").toLowerCase();
  if (/^ch[1-4]$/.test(iW)) {
    return iW;
  } else if (/^ch5/.test(iW)) {
    return "ch5";
  } else if (/^ut/.test(iW)) {
    return "ut";
  } else if (/^[1-5]$/.test(iW)) {
    return "ch" + iW;
  } else {
    return "base";
  }
}
g(uf, "deckFor");
var uI = g(iK => "assets/blackjack/decks/F_" + (uW.includes(iK) ? iK : "base") + ".png", "deckPath");
function ua(iK) {
  if (!uW.includes(iK)) {
    iK = "base";
  }
  if (uN.has(iK)) {
    return uN.get(iK);
  }
  let iW = {
    img: null,
    ready: false,
    failed: false
  };
  uN.set(iK, iW);
  if (typeof Image === "undefined") {
    iW.failed = true;
    return iW;
  }
  try {
    let ic = new Image();
    iW.img = ic;
    ic.onload = () => {
      iW.ready = true;
    };
    ic.onerror = () => {
      iW.failed = true;
      console.warn("[blackjack] deck sheet failed to load: " + iK);
    };
    ic.src = new URL("../" + uI(iK), import.meta.url).href;
  } catch {
    iW.failed = true;
  }
  return iW;
}
g(ua, "loadDeck");
function uR(iK) {
  uF = uW.includes(iK) ? iK : "base";
  ua(uF);
}
g(uR, "setDeck");
function uG() {
  for (let iK of uW) {
    ua(iK);
  }
}
g(uG, "preloadDecks");
function uk(iK = uF) {
  let iW = uN.get(iK);
  return !!iW && !!iW.ready;
}
g(uk, "deckReady");
function uJ(iK = uF) {
  let iW = uN.get(iK);
  return !!iW && (!!iW.ready || !!iW.failed);
}
g(uJ, "deckSettled");
var uA = g(() => uF, "currentDeck");
function ur(iK, iW) {
  uN.set(iK, {
    img: iW,
    ready: !!iW,
    failed: !iW
  });
  uL.clear();
}
g(ur, "setDeckImage");
var uL = new Map();
function ul(iK, iW) {
  if (uL.has(iK)) {
    return uL.get(iK);
  }
  let ic = iW();
  uL.set(iK, ic);
  return ic;
}
g(ul, "cacheGet");
function uv() {
  uL.clear();
  iU.clear();
}
g(uv, "clearCaches");
function uS(iK) {
  if (iK) {
    if (iK.rank === "TICKET") {
      return "T";
    } else {
      return iK.rank + ":" + iK.suit;
    }
  } else {
    return "-";
  }
}
g(uS, "cardKey");
var uE = g(() => uk(uF) ? uF : uk("base") && uJ(uF) ? "base" : null, "sheetId");
var uM = g(() => typeof Image === "undefined", "noImages");
var uP = g(() => uE() || (uM() ? "p" : null), "deckTag");
function ub(iK, iW, ic) {
  let iN = uE();
  let iF = iN && uN.get(iN);
  if (!iF || !iF.ready || iK < 0 || iW == null) {
    return null;
  } else {
    return ul("D" + iN + "|" + iK + "," + iW + "|" + (ic ? 1 : 0), () => {
      let iI = xT(xD, xQ);
      if (!iI) {
        return null;
      }
      let ia = iI.getContext("2d");
      ia.imageSmoothingEnabled = false;
      ia.drawImage(iF.img, iK * xD, iW * xQ, xD, xQ, 0, 0, xD, xQ);
      if (ic) {
        ia.globalCompositeOperation = "source-atop";
        ia.fillStyle = "rgba(8,4,20,0.45)";
        ia.fillRect(0, 0, xD, xQ);
        ia.globalCompositeOperation = "source-over";
      }
      return iI;
    });
  }
}
g(ub, "sheetCell");
function ud(iK, iW) {
  return ul("P" + iW, () => {
    if (!iK) {
      return null;
    }
    let ic = xT(xD, xQ);
    if (ic) {
      ic.getContext("2d").drawImage(iK, xD - xU >> 1, xQ - xZ >> 1);
      return ic;
    } else {
      return null;
    }
  });
}
g(ud, "padded");
function i0(iK, iW, ic, iN) {
  if (iK) {
    let iI = iK.rank === "TICKET" ? ub(1, 4, ic) : ub(xC.indexOf(iK.rank), uc[xG(iK.suit)], ic);
    if (iI) {
      return iI;
    }
  }
  if (!uM()) {
    return null;
  }
  let iF = "F" + uS(iK) + "|" + (iW | 0) + "|" + (ic ? 1 : 0) + "|" + (iN ? 1 : 0);
  return ud(ul(iF, () => u8(iK, iW, {
    dogear: iN
  }).toCanvas(ic ? xj : xi, 1)), iF);
}
g(i0, "faceCanvas");
function i1(iK, iW) {
  let ic = ub(0, 4, iW);
  if (ic) {
    return ic;
  }
  if (!uM()) {
    return null;
  }
  let iN = "B" + iK + "|" + (iW ? 1 : 0);
  return ud(ul(iN, () => uh(iK).toCanvas(iW ? xj : xi, 1)), iN);
}
g(i1, "backCanvas");
function i2(iK, iW, ic) {
  return ul("N" + iW + "|" + ic, () => {
    if (!iK) {
      return null;
    }
    let iN = xT(Math.max(1, ic), xQ);
    if (!iN) {
      return null;
    }
    let iF = iN.getContext("2d");
    if (ic <= 2) {
      for (let iI = 0; iI < ic; iI++) {
        iF.drawImage(iK, iI === 0 ? 0 : xD - 1, 0, 1, xQ, iI, 0, 1, xQ);
      }
      return iN;
    }
    for (let ia = 0; ia < ic; ia++) {
      let iR = ia === 0 ? 0 : ia === ic - 1 ? xD - 1 : Math.min(xD - 2, 1 + Math.floor((ia - 0.5) / (ic - 2) * (xD - 2)));
      iF.drawImage(iK, iR, 0, 1, xQ, ia, 0, 1, xQ);
    }
    return iN;
  });
}
g(i2, "narrow");
var i3 = g(iK => {
  iK.imageSmoothingEnabled = false;
}, "noSmooth");
function i4(iK, iW, ic, iN, iF = {}) {
  let iI = Math.max(1, Math.round(iF.scale || 2));
  let ia = !!iF.dim;
  let iR = iF.back === "52" ? "52" : "51";
  let iG = iF.react === "grin" ? 1 : iF.react === "wince" ? 2 : 0;
  let ik = uP();
  if (!ik) {
    return false;
  }
  let iJ = Number.isFinite(iF.flip) ? iF.flip : -1;
  let iA = iF.flipFrame ?? -1;
  if (iJ < 0 && iA >= 0 && iA < 7) {
    iJ = (iA + 0.5) / 8;
  }
  let ir = iJ >= 0 && iJ < 1;
  let iL = ir ? iJ < 0.5 : iF.faceDown || !iW;
  let il = null;
  let iv = "";
  if (iL) {
    iv = ik + "b" + iR + ia;
    il = i1(iR, ia);
  } else {
    iv = ik + "f" + uS(iW) + iG + ia + (iF.dogear ? "d" : "");
    il = i0(iW, iG, ia, iF.dogear);
  }
  if (!il) {
    return false;
  }
  let iS = xD;
  if (ir) {
    iS = Math.round(xD * Math.abs(Math.cos(Math.PI * iJ)));
    if (iS < 1) {
      return true;
    }
    if (iS < xD) {
      il = i2(il, iv, iS);
    }
    if (!il) {
      return false;
    }
  }
  ic = Math.round(ic);
  iN = Math.round(iN);
  let iE = ic + Math.round((xD - iS) * iI / 2);
  i3(iK);
  if (iF.shadow !== false && iS > 4) {
    let iM = Math.max(0, iF.lift | 0);
    iK.fillStyle = "rgba(0,0,0,0.45)";
    iK.fillRect(iE + iI * (1 + (iM >> 1)), iN + xQ * iI + iM * iI, (iS - 2) * iI, iI * (iM ? 2 : 1));
  }
  iK.drawImage(il, iE, iN, iS * iI, xQ * iI);
  return true;
}
g(i4, "drawCard");
function i5(iK, iW, ic, iN, {
  edge: iF = false,
  cap: iI = false,
  turned: ia = false,
  scale: iR = 2,
  dim: iG = false,
  shadow: ik = true
} = {}) {
  let iJ = iW === 0.5 ? 0.5 : iW;
  let iA = (iI ? uK.chipCaps : iF ? ia ? uK.chipEdgesB : uK.chipEdges : uK.chips)[iJ];
  if (!iA) {
    return;
  }
  let ir = xF(iA, 0, iG ? xj : xi, 1);
  if (ir) {
    i3(iK);
    ic = Math.round(ic);
    iN = Math.round(iN);
    if (!iF && !iI && ik) {
      iK.fillStyle = "rgba(0,0,0,0.5)";
      iK.fillRect(ic + iR * 3, iN + iR * 18, iR * 12, iR);
    }
    iK.drawImage(ir, ic, iN, ir.width * iR, ir.height * iR);
  }
}
g(i5, "drawChip");
var i6 = [0, 1, 0, -1, 0, 1, 1, 0, -1, 0, 0, 1];
function i7(iK, iW, ic, iN, {
  scale: iF = 2,
  dim: iI = false,
  max: ia = 36,
  per: iR = 12
} = {}) {
  if (!iW || !iW.length) {
    return;
  }
  ic = Math.round(ic);
  iN = Math.round(iN);
  let iG = Math.min(ia, iW.length, iR * 3);
  let ik = Math.min(3, Math.ceil(iG / iR));
  iK.fillStyle = "rgba(0,0,0,0.45)";
  iK.fillRect(ic + iF, iN + iF * 5, (ik * 17 - 3) * iF, iF);
  for (let iJ = 0; iJ < ik; iJ++) {
    let iA = [];
    for (let il = iJ * iR; il < Math.min(iG, iJ * iR + iR); il++) {
      iA.push(iW[il]);
    }
    let ir = ic + iJ * 17 * iF;
    iA.forEach((iv, iS) => i5(iK, iv, ir + i6[(iS + iJ * 5) % 12] * (iF >> 1), iN - iS * 3 * iF, {
      edge: true,
      turned: !!(iS & 1),
      scale: iF,
      dim: iI
    }));
    let iL = iA.length - 1;
    if (iL >= 0) {
      i5(iK, iA[iL], ir + i6[(iL + iJ * 5) % 12] * (iF >> 1), iN - iL * 3 * iF - iF * 4, {
        cap: true,
        scale: iF,
        dim: iI
      });
    }
  }
}
g(i7, "drawStack");
var i8 = g((iK, iW = 2, ic = 12) => iK <= 0 ? 0 : (Math.min(ic, iK) - 1) * 3 * iW + iW * 9, "stackHeight");
function i9(iK) {
  let iW = Math.round(Math.max(0, +iK || 0) * 2) / 2;
  let ic = [];
  let iN = xO.slice().sort((iF, iI) => iI - iF);
  for (let iF of iN) {
    while (iW >= iF - 1e-9) {
      ic.push(iF);
      iW = Math.round((iW - iF) * 2) / 2;
    }
  }
  if (iW >= 0.5) {
    ic.push(0.5);
  }
  return ic;
}
g(i9, "chipsFor");
function ih(iK) {
  iK = Math.round((+iK || 0) * 2) / 2;
  let iW = iK < 0;
  iK = Math.abs(iK);
  let ic = Math.floor(iK);
  return (iW ? "-" : "") + String(ic).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (iK - ic ? ".5" : "");
}
g(ih, "fmtD");
function ix(iK, iW, ic, iN, iF = "off") {
  let iI = uK.buttons[iW];
  if (!iI) {
    return;
  }
  let ia = xF(iI, 0, uV[iF] || uV.off, 1);
  if (ia) {
    i3(iK);
    iK.drawImage(ia, Math.round(ic), Math.round(iN));
  }
}
g(ix, "drawButton");
var iu = {
  w: uO,
  h: um
};
var ii = 320;
var iy = 240;
var iY = 65;
var ij = 160;
var ip = 148;
var iD = 123;
var iQ = 8;
var ig = {
  far: iY * 2,
  cx: ij * 2,
  rx: ip * 2,
  ry: iD * 2,
  rail: iQ * 2,
  rim: (iY - 5) * 2,
  dealer: {
    x: 320,
    feet: 162
  },
  dealerCards: {
    x: 320,
    y: 142,
    step: 16
  },
  shoe: {
    x: 410,
    y: 102
  },
  tray: {
    x: 184,
    y: 116
  },
  rack: {
    x: 256,
    y: 116,
    w: 128
  },
  rings: [{
    x: 246,
    y: 314
  }, {
    x: 320,
    y: 314
  }, {
    x: 394,
    y: 314
  }],
  ringR: 20,
  row: {
    cards: 228,
    tag: 286,
    circle: 314
  },
  you: {
    x: 320,
    top: 330
  },
  chairY: 376,
  wallet: {
    x: 364,
    y: 370
  },
  print: {
    pays: 201,
    stands: 216
  },
  emblem: {
    x: 320,
    y: 176
  },
  panel: 400
};
var iU = new Map();
var iZ = g((iK, iW) => iW >= iY && ((iK + 0.5 - ij) / ip) ** 2 + ((iW + 0.5 - iY) / iD) ** 2 <= 1, "inFelt");
var iw = g((iK, iW) => iW >= iY - 5 && ((iK + 0.5 - ij) / (ip + iQ)) ** 2 + ((iW + 0.5 - iY) / (iD + iQ)) ** 2 <= 1, "inOuter");
var iC = g((iK, iW, ic) => ic >= 4 || (ic === 3 ? !(iK & 1) || !(iW & 1) : ic === 2 ? (iK + iW & 1) === 0 : ic === 1 ? (iK & 1) === 0 && (iW & 1) === 0 : false), "ditherOn");
function iB(iK) {
  let iW = new xz(ii, iy);
  let ic = xp[iK] || xp.coin;
  for (let iJ = iY; iJ < iy; iJ++) {
    for (let iA = 0; iA < ii; iA++) {
      if (iw(iA, iJ) || iw(iA, iJ - 1)) {
        continue;
      }
      if ((iw(iA, iJ - 3) || iw(iA - 2, iJ - 2) || iw(iA + 2, iJ - 2)) && (iA + iJ & 1) === 0) {
        iW.set(iA, iJ, "void");
      }
    }
  }
  for (let ir = 0; ir < ii; ir++) {
    let iL = -1;
    for (let il = iy - 1; il >= iY; il--) {
      if (iw(ir, il)) {
        iL = il;
        break;
      }
    }
    if (!(iL < 0)) {
      iW.set(ir, iL + 1, "rail0");
      iW.set(ir, iL + 2, "void");
    }
  }
  for (let iv = iY; iv < iy; iv++) {
    for (let iS = 0; iS < ii; iS++) {
      if (!iZ(iS, iv)) {
        continue;
      }
      let iE = Math.hypot((iS + 0.5 - ij) / ip, (iv + 0.5 - iY) / iD);
      let iM = (iS + 0.5 - ij) / 118;
      let iP = (iv + 0.5 - iY - 44) / 70;
      let ib = Math.hypot(iM, iP);
      let id = ic[1];
      if (ib < 0.55) {
        id = iC(iS, iv, ib < 0.4 ? 4 : 2) ? ic[2] : ic[1];
      } else if (ib < 0.8) {
        id = iC(iS, iv, ib < 0.68 ? 2 : 1) ? ic[2] : ic[1];
      }
      if (ib < 0.3 && iC(iS, iv, ib < 0.18 ? 2 : 1)) {
        id = ic[3];
      }
      if (iE > 0.9) {
        id = iC(iS, iv, iE > 0.955 ? 4 : iE > 0.93 ? 3 : 2) ? ic[0] : id;
      }
      if (iv < iY + 3) {
        id = iv === iY || iC(iS, iv, 2) ? ic[0] : id;
      }
      iW.set(iS, iv, id);
    }
  }
  for (let y0 = iY - 5; y0 < iy; y0++) {
    for (let y1 = 0; y1 < ii; y1++) {
      if (!iw(y1, y0) || iZ(y1, y0)) {
        continue;
      }
      let y2 = 1;
      if (y0 >= iY) {
        let y4 = ij - y1;
        let y5 = Math.max(iY + 20, iY + 60) - y0;
        let y6 = Math.hypot(y4, y5) || 1;
        for (y2 = 1; y2 <= 12 && !iZ(Math.round(y1 + y4 / y6 * y2), Math.round(y0 + y5 / y6 * y2)); y2++);
      } else {
        y2 = iY - y0;
      }
      let y3 = y2 <= 1 ? "gold2" : y2 === 2 ? "rail3" : y2 <= 4 ? "rail2" : y2 <= 6 ? "rail1" : "rail0";
      if (y0 >= iY && y2 === 5 && (y1 * 3 + y0) % 9 === 0) {
        y3 = "rail3";
      }
      if (y0 < iY && y2 === 5) {
        y3 = "rail0";
      }
      iW.set(y1, y0, y3);
    }
  }
  for (let y7 = 0; y7 < ii; y7++) {
    if (iw(y7, iY - 5)) {
      iW.set(y7, iY - 5, "rail3");
    }
  }
  let iN = ig.emblem.x / 2;
  let iF = ig.emblem.y / 2;
  for (let y8 = iF - 13; y8 <= iF + 13; y8++) {
    for (let y9 = iN - 24; y9 <= iN + 24; y9++) {
      let yu = Math.abs(y9 + 0.5 - iN) / 24 + Math.abs(y8 + 0.5 - iF) / 13;
      if (yu <= 1 && yu > 0.92) {
        iW.set(y9, y8, "gold1");
      } else if (yu <= 0.8 && yu > 0.75) {
        iW.set(y9, y8, ic[3]);
      }
    }
  }
  ["heart", "spade", "diamond", "club"].forEach((yi, yy) => iW.stamp(xk[yi], iN - 13 + yy * 7, iF - 2, {
    "#": "gold1"
  }));
  let iI = ig.rack.x / 2;
  let ia = ig.rack.y / 2;
  let iR = ig.rack.w / 2;
  for (let yi = ia; yi < ia + 12; yi++) {
    for (let yy = iI; yy < iI + iR; yy++) {
      iW.set(yy, yi, "rail0");
    }
  }
  for (let yY = iI; yY < iI + iR; yY++) {
    iW.set(yY, ia, "gold1");
    iW.set(yY, ia + 11, "gold2");
  }
  for (let yj = ia; yj < ia + 12; yj++) {
    iW.set(iI, yj, "gold1");
    iW.set(iI + iR - 1, yj, "gold1");
  }
  let iG = [500, 100, 25, 5, 1, 1, 5, 25, 100, 500];
  let ik = Math.floor((iR - 4) / iG.length);
  iG.forEach((yp, yD) => {
    let yQ = ux[yp];
    let yg = iI + 2 + yD * ik;
    for (let yU = ia + 2; yU < ia + 10; yU++) {
      for (let yZ = yg; yZ < yg + ik - 1; yZ++) {
        iW.set(yZ, yU, yU & 1 ? yQ.d : yZ === yg + 1 ? yQ.l : yQ.c);
      }
    }
  });
  return iW;
}
g(iB, "tableBuffer");
function iO(iK, iW) {
  let ic = "T" + iK + "|" + (iW ? 1 : 0);
  if (iU.has(ic)) {
    return iU.get(ic);
  }
  let iN = iB(iK).toCanvas(iW ? xj : xi, 1);
  iU.set(ic, iN);
  return iN;
}
g(iO, "tableCanvas");
function im(iK, iW, ic, {
  dim: iN = false
} = {}) {
  let iF = iO(iW || "coin", iN);
  if (iF) {
    i3(iK);
    iK.drawImage(iF, 0, 0, ii * 2, iy * 2);
    iT(iK, "tray", ig.tray.x, ig.tray.y, 0, {
      dim: iN
    });
    iT(iK, "shoe", ig.shoe.x, ig.shoe.y, 0, {
      dim: iN
    });
  }
}
g(im, "drawFelt");
function iH(iK, iW, ic, iN, {
  calm: iF = false
} = {}) {
  for (let [iI, ia, iR] of [[60, 280, 0.035], [44, 210, 0.035], [30, 150, 0.04]]) {
    iK.fillStyle = "rgba(200,170,255," + iR + ")";
    iK.beginPath();
    iK.moveTo(320 - iI, 0);
    iK.lineTo(320 + iI, 0);
    iK.lineTo(320 + ia, ig.far);
    iK.lineTo(320 - ia, ig.far);
    iK.closePath();
    iK.fill();
  }
}
g(iH, "drawRoom");
function iT(iK, iW, ic, iN, iF = 0, {
  scale: iI = 2,
  dim: ia = false
} = {}) {
  let iR = uB[iW];
  if (!iR) {
    return;
  }
  let iG = xF(iR, iF, ia ? xj : xi, 1);
  if (iG) {
    i3(iK);
    iK.drawImage(iG, Math.round(ic), Math.round(iN), iG.width * iI, iG.height * iI);
  }
}
g(iT, "drawProp");
function iq(iK, iW, ic, iN, iF, iI = 2) {
  let ia = Math.round(ic);
  iN = Math.round(iN);
  iK.fillStyle = iF;
  for (let iR of String(iW)) {
    if (iR === " ") {
      ia += iI * 2;
      continue;
    }
    let iG = xf[iR];
    if (!iG) {
      ia += iI * 4;
      continue;
    }
    for (let ik = 0; ik < 5; ik++) {
      for (let iJ = 0; iJ < iG[ik].length; iJ++) {
        if (iG[ik][iJ] === "#") {
          iK.fillRect(ia + iJ * iI, iN + ik * iI, iI, iI);
        }
      }
    }
    ia += (iG[0].length + 1) * iI;
  }
  return ia - Math.round(ic);
}
g(iq, "drawMicro");
var iX = g((iK, iW = 2) => xa(iK) * iW, "microWidth");
function iV() {
  return {
    ok: false,
    checks: [],
    results: [],
    reason: "not in the production build"
  };
}
g(iV, "selfTest");
function iz(iK) {
  return iB(iK);
}
g(iz, "roomBuffer");
var io = {
  faceBuffer: u8,
  backBuffer: uh,
  ticketBuffer: u9,
  roomBuffer: iz,
  tableBuffer: iB,
  buttonBuffer: uq,
  PB: xz
};
export { f as a, l as b, b as c, h2 as d, h4 as e, h5 as f, h6 as g, h8 as h, hy as i, hp as j, hD as k, hg as l, hZ as m, hH as n, hk as o, hJ as p, hl as q, hM as r, hP as s, hb as t, hd as u, x0 as v, x1 as w, x7 as x, x8 as y, x9 as z, xh as A, xx as B, xu as C, xi as D, xy as E, xj as F, xp as G, xD as H, xQ as I, xg as J, xH as K, xN as L, xF as M, xR as N, u2 as O, u3 as P, u4 as Q, uT as R, uz as S, uK as T, uW as U, uf as V, uI as W, uR as X, uG as Y, uk as Z, uJ as _, uA as $, ur as aa, i4 as ba, i5 as ca, i7 as da, i8 as ea, i9 as fa, ih as ga, ix as ha, iu as ia, ig as ja, im as ka, iH as la, iT as ma, iq as na, iX as oa, iV as pa, io as qa };
