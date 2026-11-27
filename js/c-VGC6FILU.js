import { a as g, l as w } from './c-XSSGDLV7.js';
w(), w();
var m = ['buttons', 'keys', 'socks', 'coins'],
  t = ['buttons', 'keys'],
  o = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  e = {
    'rank': 'Q',
    'suit': 'buttons'
  },
  c = 0x6,
  f = [0x1, 0x5, 0x19, 0x64, 0x1f4],
  a = 0x3e8,
  n = 0xc8,
  k = 0x5,
  s = 0x3,
  r = 0x4,
  l = {
    'max': 0x64,
    'gain': {
      'twenty': 0xa,
      'five': 0x14,
      'brave': 0xa,
      'stare': 0xf
    },
    'cost': {
      'glow': 0x19,
      'snag': 0x32,
      'redraw': 0x32,
      'knuckle': 0x4b,
      'find': 0x64
    }
  },
  b = {
    'wick': 'glow',
    'bobbin': 'snag',
    'sienna': 'redraw',
    'aggie': 'knuckle',
    'finder': 'find'
  },
  h0 = ['wick', 'bobbin', 'sienna', 'aggie', 'finder'],
  h1 = ['dogear', 'management', 'lefty', 'spareman', 'tally', 'nibs', 'penny', 'warranty', 'keyes', 'bunnie'],
  h2 = {
    'coin': {
      'id': 'coin',
      'h17': false,
      'natural': 1.5,
      'tiesLose': false,
      'dealerOpen': false,
      'peek': true,
      'insurance': true,
      'surrender': true,
      'ticket': false,
      'lint': false
    },
    'glasses': {
      'id': 'glasses',
      'h17': false,
      'natural': 0x1,
      'tiesLose': true,
      'dealerOpen': true,
      'peek': false,
      'insurance': false,
      'surrender': false,
      'ticket': false,
      'lint': false
    },
    'violin': {
      'id': 'violin',
      'h17': true,
      'natural': 1.5,
      'tiesLose': false,
      'dealerOpen': false,
      'peek': true,
      'insurance': true,
      'surrender': false,
      'ticket': true,
      'lint': false
    },
    'lint': {
      'id': 'lint',
      'h17': false,
      'natural': 1.5,
      'tiesLose': false,
      'dealerOpen': false,
      'peek': false,
      'insurance': false,
      'surrender': false,
      'ticket': false,
      'lint': true,
      'lintWin': 1.2
    },
    'finale': {
      'id': 'finale',
      'h17': false,
      'natural': 1.5,
      'tiesLose': false,
      'dealerOpen': false,
      'peek': false,
      'insurance': false,
      'surrender': false,
      'ticket': false,
      'lint': false,
      'decks': 0x1,
      'full': true,
      'stakes': false
    }
  },
  h3 = 'true',
  h4 = [{
    'id': 'coin',
    'name': "THE COIN RETURN",
    'law': 'coin',
    'min': 0x5,
    'max': 0x64,
    'dealer': 'dogear',
    'left': 'tally',
    'right': 'nibs',
    'farSeat': true,
    'plaque': "STANDARD RULES.",
    'house': "TEETH MAY BET ONE.",
    'open': {
      'always': true
    }
  }, {
    'id': 'glasses',
    'name': "THE GLASSES CASE",
    'law': 'glasses',
    'min': 0xa,
    'max': 0xfa,
    'dealer': 'dogear',
    'left': 'penny',
    'right': 'warranty',
    'farSeat': true,
    'plaque': "SEEN THROUGH: BOTH DEALER CARDS FACE UP. TIES LOSE. NATURALS PAY EVEN.",
    'open': {
      'ticket': 'SIXTEEN',
      'count': 0x4,
      'beat': 0x5
    }
  }, {
    'id': 'violin',
    'name': "THE VIOLIN CASE",
    'law': 'violin',
    'min': 0x19,
    'max': 0x1f4,
    'dealer': 'lefty',
    'left': 'keyes',
    'right': 'bunnie',
    'farSeat': true,
    'plaque': "THE STAND-IN: THE BUS TICKET COUNTS AS ANY CARD. DEALER HITS SOFT 17.",
    'open': {
      'ticket': 'SPLIT_WIN',
      'count': 0x8,
      'beat': 0x6
    }
  }, {
    'id': 'lint',
    'name': "THE LINT TRAP",
    'law': 'lint',
    'min': 0x1,
    'max': 0x33,
    'dealer': 'spareman',
    'left': null,
    'right': null,
    'farSeat': false,
    'plaque': "UNDER THE LINT: EVERY THIRD CARD IS DEALT FACE DOWN. NOBODY PEEKS. A WIN WITH LINT IN IT PAYS 6 TO 5.",
    'open': {
      'flag': 'lintOpen',
      'beat': 0xa
    }
  }],
  h5 = {
    'id': 'finale',
    'name': "THE FIFTY-SECOND HAND",
    'law': 'finale',
    'min': 0x0,
    'max': 0x0,
    'dealer': 'spareman',
    'left': null,
    'right': null,
    'farSeat': false,
    'plaque': '',
    'open': {
      'flag': 'finale'
    }
  },
  h6 = [{
    'id': 'NATURAL',
    'text': "Held a natural.",
    'room': null
  }, {
    'id': 'SIXTEEN',
    'text': "Stood on 16 against a ten and won.",
    'room': null
  }, {
    'id': 'FIVE_CARD',
    'text': "Won with five cards.",
    'room': null
  }, {
    'id': 'SPLIT_WIN',
    'text': "Won both halves of a split.",
    'room': null
  }, {
    'id': 'DOUBLE_FACE',
    'text': "Doubled on 11 and caught a face.",
    'room': null
  }, {
    'id': 'THREE_RINGS',
    'text': "Won all three rings in one deal.",
    'room': null
  }, {
    'id': 'BUS_TICKET',
    'text': "Won with the bus ticket.",
    'room': 'violin'
  }, {
    'id': 'SEEN_21',
    'text': "Beat a twenty you could see coming.",
    'room': 'glasses'
  }, {
    'id': 'LINT_BUST',
    'text': "Busted under the lint.",
    'room': 'lint'
  }, {
    'id': 'STAKED',
    'text': "Staked a stranger.",
    'room': null
  }, {
    'id': 'WELL_PLAYED',
    'text': "Made Dog-Ear say \"well played\".",
    'room': null
  }, {
    'id': 'CORNER',
    'text': "Called the corner three times in one visit.",
    'room': null
  }, {
    'id': 'CLAIMED',
    'text': "Won the Keepsake bet.",
    'room': null
  }, {
    'id': 'UNCLAIMED',
    'text': "Wore the tag with dignity.",
    'room': null
  }, {
    'id': 'INSURED',
    'text': "Took Warranty's advice. It paid.",
    'room': null
  }, {
    'id': 'SURRENDER',
    'text': "Gave half back to Management.",
    'room': 'coin'
  }, {
    'id': 'GLOW_21',
    'text': "Leaned left, hit, twenty-one.",
    'room': null
  }, {
    'id': 'SNAG_BUST',
    'text': "Pulled a thread; the dealer came apart.",
    'room': null
  }, {
    'id': 'REDRAW_TWO',
    'text': "Redrew into two winners.",
    'room': null
  }, {
    'id': 'KNUCKLE_12',
    'text': "Knew enough to stand on twelve.",
    'room': null
  }, {
    'id': 'NIBS_ONE',
    'text': "Watched Nibs win one.",
    'room': 'coin'
  }, {
    'id': 'BUNNIE_FIVE',
    'text': "Saw Bunnie hold five cards.",
    'room': 'violin'
  }, {
    'id': 'KEYES_21',
    'text': "Saw the cycle land on twenty-one.",
    'room': 'violin'
  }, {
    'id': 'FIFTY_ONE',
    'text': "Counted the shoe.",
    'room': null
  }, {
    'id': 'LEVER',
    'text': "Pulled the lever eleven times.",
    'room': 'coin'
  }, {
    'id': 'FIFTY_TWO',
    'text': "Played the fifty-second hand.",
    'room': null
  }],
  h7 = [{
    'n': 0x1,
    'id': 'arrive',
    'room': 'coin',
    'at': 'sit'
  }, {
    'n': 0x2,
    'id': 'first_rummage',
    'room': 'coin',
    'at': 'after2'
  }, {
    'n': 0x3,
    'id': 'tally_fades',
    'room': 'coin',
    'at': 'after2'
  }, {
    'n': 0x4,
    'id': 'nibs_jar',
    'room': 'coin',
    'at': 'after2'
  }, {
    'n': 0x5,
    'id': 'penny_taken',
    'room': 'glasses',
    'at': 'after2'
  }, {
    'n': 0x6,
    'id': 'lefty_found',
    'room': 'violin',
    'at': 'after2'
  }, {
    'n': 0x7,
    'id': 'reprint',
    'room': 'coin',
    'at': 'sit'
  }, {
    'n': 0x8,
    'id': 'always_same',
    'room': 'coin',
    'at': 'after2'
  }, {
    'n': 0x9,
    'id': 'pillow',
    'room': 'coin',
    'at': 'sit'
  }, {
    'n': 0xa,
    'id': 'eleventh_key',
    'room': 'violin',
    'at': 'after2'
  }, {
    'n': 0xb,
    'id': 'spareman_speaks',
    'room': 'lint',
    'at': 'sit'
  }, {
    'n': 0xc,
    'id': 'last_call',
    'room': 'coin',
    'at': 'sit'
  }],
  h8 = {
    'visit': 'BJ_VISIT',
    'five': 'BJ_FIVE',
    'corner': 'BJ_CORNER',
    'claims': 'BJ_CLAIMS',
    'finale': 'BJ_52'
  },
  h9 = {
    'tally': 0x12c,
    'nibs': 0x14,
    'penny': 0xc8,
    'warranty': 0xfa,
    'keyes': 0x190,
    'bunnie': 0x96,
    'spareman': 0x1f4
  },
  hx = 0x5,
  hu = {
    'dogear': 'dogear_corner',
    'lefty': 'lefty_hum'
  },
  hi = Object.fromEntries(h4.concat([h5]).map(iK => [iK.id, iK]));
function hy(iK) {
  return hi[iK] || null;
}
g(hy, 'roomById');
var hY = Object.fromEntries(h6.map(iK => [iK.id, iK])),
  hj = g(iK => (typeof iK == 'string' ? h2[iK] || h2[(hi[iK] || {}).law] : iK) || h2.coin, 'lawOf');
function hp(...iK) {
  let iW = 0x811c9dc5,
    ic = iK.map(iN => String(iN)).join('\x1f');
  for (let iN = 0x0; iN < ic.length; iN++) iW ^= ic.charCodeAt(iN), iW = Math.imul(iW, 0x1000193) >>> 0x0;
  return iW >>> 0x0;
}
g(hp, 'hashSeed');
function hD(iK) {
  let iW = iK >>> 0x0,
    ic = {
      'next'() {
        iW = iW + 0x6d2b79f5 >>> 0x0;
        let iN = iW;
        return iN = Math.imul(iN ^ iN >>> 0xf, iN | 0x1), iN ^= iN + Math.imul(iN ^ iN >>> 0x7, iN | 0x3d), ((iN ^ iN >>> 0xe) >>> 0x0) / 0x100000000;
      },
      'int'(iN) {
        return Math.floor(ic.next() * iN);
      },
      'chance'(iN) {
        return ic.next() < iN;
      },
      'pick'(iN) {
        return iN[ic.int(iN.length)];
      },
      'shuffle'(iN) {
        for (let iF = iN.length - 0x1; iF > 0x0; iF--) {
          let iI = ic.int(iF + 0x1),
            ia = iN[iF];
          iN[iF] = iN[iI], iN[iI] = ia;
        }
        return iN;
      },
      'fork'(iN) {
        return hD(hp(iW, iN));
      },
      'state'() {
        return iW >>> 0x0;
      }
    };
  return ic;
}
g(hD, 'rng');
function hQ(iK) {
  if (!iK) return null;
  let iW = iK.rank;
  return iW === 'TICKET' ? 'TICKET' : iW === 'A' || iW === '10' || iW === 'J' || iW === 'Q' || iW === 'K' ? 'HIGH' : +iW <= 0x6 ? 'LOW' : 'MID';
}
g(hQ, 'band');
function hg(iK) {
  return !!iK && (iK.rank === '10' || iK.rank === 'J' || iK.rank === 'Q' || iK.rank === 'K');
}
g(hg, 'isTen');
function hU(iK) {
  return !!iK && (iK.rank === 'J' || iK.rank === 'Q' || iK.rank === 'K');
}
g(hU, 'isFace');
function hZ(iK) {
  let iW = hQ(iK);
  return iW === 'LOW' ? 0x1 : iW === 'HIGH' ? -0x1 : 0x0;
}
g(hZ, 'hiLo');
function hw(iK) {
  return iK === 'A' ? 0x1 : iK === 'TICKET' ? 0x0 : iK === 'J' || iK === 'Q' || iK === 'K' ? 0xa : +iK;
}
g(hw, 'rankValue');
var hC = g((iK, iW) => iK === 'Q' && iW === 'buttons', 'isMissing');
function hB({
  law: iK,
  rng: iW,
  decks: ic = c,
  full: iN = false
} = {}) {
  let iF = hj(iK),
    iI = [],
    ia = 0x0;
  for (let iG = 0x0; iG < ic; iG++) for (let ik of m) for (let iJ of o) !iN && hC(iJ, ik) || iI.push(Object.freeze({
    'id': ia++,
    'rank': iJ,
    'suit': ik,
    'deck': iG
  }));
  iF.ticket && iI.push(Object.freeze({
    'id': ia++,
    'rank': 'TICKET',
    'suit': null,
    'deck': -0x1
  }));
  let iR = {
    'all': iI,
    'cards': [],
    'cut': 0x0,
    'dealtSinceShuffle': 0x0,
    'size': iI.length,
    'pastCut': false,
    'cutFired': false,
    'shuffle'() {
      iR.cards = iI.slice(), iW.shuffle(iR.cards), iR.cut = Math.floor(iI.length * (0.72 + 0.06 * iW.next())), iR.dealtSinceShuffle = 0x0, iR.pastCut = false, iR.cutFired = false;
    },
    'draw'() {
      iR.cards.length || iR.shuffle();
      let iA = iR.cards.shift();
      return iR.dealtSinceShuffle++, iR.dealtSinceShuffle > iR.cut && (iR.pastCut = true), iA;
    },
    'burn'() {
      return iR.draw();
    },
    'peek'() {
      return iR.cards.length ? iR.cards[0x0] : null;
    },
    'take'(iA) {
      let ir = iR.cards.findIndex(il => il.rank === iA.rank && il.suit === iA.suit);
      if (ir < 0x0) return iR.draw();
      let iL = iR.cards.splice(ir, 0x1)[0x0];
      return iR.dealtSinceShuffle++, iR.dealtSinceShuffle > iR.cut && (iR.pastCut = true), iL;
    },
    get 'remaining'() {
      return iR.cards.length;
    }
  };
  return iR.shuffle(), iR;
}
g(hB, 'makeShoe');
function hO(iK) {
  let iW = 0x0,
    ic = 0x0,
    iN = false,
    iF = 0x0;
  for (let iG of iK) {
    if (iF++, iG.rank === 'TICKET') {
      iN = true;
      continue;
    }
    let ik = hw(iG.rank);
    iW += ik, ik === 0x1 && ic++;
  }
  let iI,
    ia,
    iR = null;
  if (iN) {
    let iJ = ic && iW + 0xa + 0x1 <= 0x15 ? 0xa : 0x0,
      iA = null;
    for (let ir of iJ ? [0xa, 0x0] : [0x0]) for (let iL = 0xb; iL >= 0x1; iL--) {
      let il = iW + ir + iL;
      if (il <= 0x15 && (iA === null || il > iA.s)) {
        iA = {
          's': il,
          't': iL,
          'b': ir
        };
        break;
      }
    }
    iA ? (iI = iA.s, iR = iA.t, ia = iA.t > 0x1 || iA.b > 0x0) : (iI = iW + 0x1, iR = 0x1, ia = false);
  } else ic && iW + 0xa <= 0x15 ? (iI = iW + 0xa, ia = true) : (iI = iW, ia = false);
  return {
    'total': iI,
    'soft': ia,
    'ticketAs': iR,
    'hard': iW,
    'aces': ic,
    'ticket': iN,
    'n': iF
  };
}
g(hO, 'valueOf');
function hm(iK) {
  if (iK.length !== 0x2) return false;
  let [iW, ic] = iK,
    iN = iW.rank === 'TICKET' ? ic : ic.rank === 'TICKET' ? iW : null;
  return iN ? iN.rank === 'A' || hg(iN) : iW.rank === 'A' && hg(ic) || ic.rank === 'A' && hg(iW);
}
g(hm, 'naturalOf');
function hH(iK, {
  split: iW = false,
  hiddenIds: ic = null
} = {}) {
  let iN = hO(iK),
    iF = ic ? iK.filter(ia => !ic.has(ia.id)) : iK,
    iI = ic ? hO(iF) : iN;
  return {
    'total': iN.total,
    'soft': iN.soft,
    'bust': iN.total > 0x15,
    'natural': !iW && hm(iK),
    'ticketAs': iN.ticketAs,
    'visible': {
      'total': iI.total,
      'soft': iI.soft,
      'count': iF.length
    },
    'hidden': iK.length - iF.length
  };
}
g(hH, 'handValue');
function hT(iK, iW) {
  let ic = hj(iW),
    iN = iK;
  return iN.total < 0x11 ? true : !!(ic.h17 && iN.soft && iN.total === 0x11);
}
g(hT, 'dealerShouldHit');
var hq = [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa],
  hX = {
    0x33: hq.map(iK => (iK === 0xa ? 0xf : 0x4) / 0x33),
    0x34: hq.map(iK => (iK === 0xa ? 0x10 : 0x4) / 0x34)
  },
  hV = g((iK, iW) => iW && iK + 0xa <= 0x15 ? iK + 0xa : iK, 'tot'),
  hz = g((iK, iW) => iW && iK + 0xa <= 0x15, 'isSoft');
function ho(iK, iW, ic, iN, iF) {
  let iI = iK * 0x2 + (iW ? 0x1 : 0x0);
  if (iF[iI]) return iF[iI];
  let ia = new Float64Array(0x6);
  if (iK > 0x15) ia[0x5] = 0x1;else {
    let iR = hV(iK, iW);
    if (iR >= 0x11 && !(ic && hz(iK, iW) && iR === 0x11)) ia[iR - 0x11] = 0x1;else for (let iG = 0x0; iG < 0xa; iG++) {
      let ik = hq[iG],
        iJ = ho(iK + ik, iW || ik === 0x1, ic, iN, iF);
      for (let iA = 0x0; iA < 0x6; iA++) ia[iA] += iN[iG] * iJ[iA];
    }
  }
  return iF[iI] = ia, ia;
}
g(ho, 'dealerFrom');
function hK(iK, iW, ic, iN) {
  let iF = [],
    iI = new Float64Array(0x6),
    ia = 0x0,
    iR = 0x0;
  for (let iG = 0x0; iG < 0xa; iG++) {
    let ik = hq[iG];
    if (iK === 0x1 && ik === 0xa || iK === 0xa && ik === 0x1) {
      ic || (ia += iN[iG]);
      continue;
    }
    iR += iN[iG];
    let iJ = ho(iK + ik, iK === 0x1 || ik === 0x1, iW, iN, iF);
    for (let iA = 0x0; iA < 0x6; iA++) iI[iA] += iN[iG] * iJ[iA];
  }
  if (ic) {
    for (let ir = 0x0; ir < 0x6; ir++) iI[ir] /= iR;
    ia = 0x0;
  }
  return {
    'd': iI,
    'bj': ia
  };
}
g(hK, 'dealerFromUp');
function hW(iK, iW, ic) {
  let iN = new Map(),
    iF = (ik, iJ, iA, ir, iL) => {
      let il = ik + ',' + iJ + ',' + iA + ',' + ir + ',' + Math.min(iL, 0x3);
      if (iN.has(il)) return iN.get(il);
      let iv = new Float64Array(0x8);
      if (ik + iA > 0x15) iv[0x5] = 0x1;else {
        if (hV(ik, iJ) >= 0x11) {
          let iS = hV(ik + iA, iJ || ir);
          iL === 0x2 && iS === 0x15 ? iv[0x6] = 0x1 : iS >= 0x11 ? iv[iS - 0x11] = 0x1 : iv[0x7] = 0x1;
        } else for (let iE = 0x0; iE < 0xa; iE++) {
          let iM = hq[iE],
            iP = iF(ik + iM, iJ || iM === 0x1, iA, ir, iL + 0x1),
            ib = iF(ik, iJ, iA + iM, ir || iM === 0x1, iL + 0x1);
          for (let id = 0x0; id < 0x8; id++) iv[id] += iW[iE] * (0.6666666666666666 * iP[id] + 0.3333333333333333 * ib[id]);
        }
      }
      return iN.set(il, iv), iv;
    },
    iI = new Float64Array(0x6),
    ia = 0x0,
    iR = 0x0,
    iG = iK == null ? hq.map((ik, iJ) => [ik, iW[iJ], true]) : [[iK, 0x1, false]];
  for (let [ik, iJ, iA] of iG) for (let ir = 0x0; ir < 0xa; ir++) {
    let iL = hq[ir],
      il;
    ic ? il = iA ? iF(iL, iL === 0x1, ik, ik === 0x1, 0x2) : iF(ik + iL, ik === 0x1 || iL === 0x1, 0x0, false, 0x2) : il = iA ? iF(0x0, false, ik + iL, ik === 0x1 || iL === 0x1, 0x2) : iF(ik, ik === 0x1, iL, iL === 0x1, 0x2);
    for (let iv = 0x0; iv < 0x6; iv++) iI[iv] += iJ * iW[ir] * il[iv];
    ia += iJ * iW[ir] * il[0x6], iR += iJ * iW[ir] * il[0x7];
  }
  return {
    'd': iI,
    'bj': ia,
    'low': iR
  };
}
g(hW, 'dealerLintBlind');
function hc(iK, iW) {
  let ic = iK.low || 0x0;
  return (iN, iF = 0x1) => {
    if (iN > 0x15) return -0x1;
    let iI = iF * iK.d[0x5] - iK.bj;
    for (let ia = 0x0; ia < 0x5; ia++) {
      let iR = 0x11 + ia;
      iN > iR ? iI += iF * iK.d[ia] : (iN < iR || iW) && (iI -= iK.d[ia]);
    }
    return iN >= 0x11 && (iI += iF * ic), iI;
  };
}
g(hc, 'standEVfn');
function hN(iK, iW, ic) {
  let iN = hc(iK, iW.tiesLose),
    iF = new Map(),
    iI = (iG, ik) => {
      if (iG > 0x15) return -0x1;
      let iJ = iG * 0x2 + (ik ? 0x1 : 0x0);
      if (iF.has(iJ)) return iF.get(iJ);
      let iA = hV(iG, ik),
        ir = iN(iA);
      if (iA < 0x15) {
        let iL = 0x0;
        for (let il = 0x0; il < 0xa; il++) iL += ic[il] * iI(iG + hq[il], ik || hq[il] === 0x1);
        iL > ir && (ir = iL);
      }
      return iF.set(iJ, ir), ir;
    },
    ia = (iG, ik) => {
      let iJ = 0x0;
      for (let iA = 0x0; iA < 0xa; iA++) iJ += ic[iA] * iI(iG + hq[iA], ik || hq[iA] === 0x1);
      return iJ;
    },
    iR = (iG, ik) => {
      let iJ = 0x0;
      for (let iA = 0x0; iA < 0xa; iA++) {
        let ir = iG + hq[iA];
        iJ += ic[iA] * (ir > 0x15 ? -0x1 : iN(hV(ir, ik || hq[iA] === 0x1)));
      }
      return 0x2 * iJ;
    };
  return {
    'stand': (iG, ik) => iN(hV(iG, ik)),
    'hs': iI,
    'hit': ia,
    'dbl': iR,
    'split': iG => {
      let ik = 0x0;
      for (let iJ = 0x0; iJ < 0xa; iJ++) {
        let iA = hq[iJ],
          ir = iG + iA,
          iL = iG === 0x1 || iA === 0x1;
        iG === 0x1 ? ik += ic[iJ] * iN(hV(ir, iL)) : ik += ic[iJ] * Math.max(iI(ir, iL), iR(ir, iL));
      }
      return 0x2 * ik;
    }
  };
}
g(hN, 'makeSolver');
var hF = new Map();
function hf(iK, iW, ic) {
  let iN = iK.id + '|' + iW,
    iF = hF.get(iN);
  return iF || (iF = ic(), hF.set(iN, iF)), iF;
}
g(hf, 'solverFor');
function hI(iK) {
  return iK.rank === 'TICKET' ? 0xb : hw(iK.rank);
}
g(hI, 'upValueOf');
function ha(iK, iW) {
  let ic = new Map([[0x0, 0x1]]);
  for (let iN = 0x0; iN < iK; iN++) {
    let iF = new Map();
    for (let [iI, ia] of ic) {
      let iR = iI >> 0x1,
        iG = iI & 0x1;
      for (let ik = 0x0; ik < 0xa; ik++) {
        let iJ = hq[ik],
          iA = Math.min(iR + iJ, 0x1f) << 0x1 | (iG || iJ === 0x1 ? 0x1 : 0x0);
        iF.set(iA, (iF.get(iA) || 0x0) + ia * iW[ik]);
      }
    }
    ic = iF;
  }
  return ic;
}
g(ha, 'hiddenDist');
function hR(iK, iW, ic) {
  let iN = hc(iK, iW.tiesLose),
    iF = 0x1 + (iW.lintWin || 0x1) - 0x1,
    iI = [0x0, 0x1, 0x2, 0x3, 0x4].map(il => ha(il, ic)),
    ia = (il, iv, iS) => {
      if (il > 0x15) return -0x1;
      let iE = 0x0;
      for (let [iM, iP] of iI[Math.min(iS, 0x4)]) {
        let ib = il + (iM >> 0x1),
          id = iv || (iM & 0x1) === 0x1;
        iE += iP * (ib > 0x15 ? -0x1 : iN(hV(ib, id), iS > 0x0 ? iF : 0x1));
      }
      return iE;
    },
    iR = new Map(),
    iG = new Map(),
    ik = (il, iv, iS) => {
      let iE = il + ',' + (iv ? 0x1 : 0x0) + ',' + iS,
        iM = iR.get(iE);
      return iM === void 0x0 && (iM = ia(il, iv, iS), iR.set(iE, iM)), iM;
    },
    iJ = il => il === 0x0 ? 0x2 : il - 0x1,
    iA = (il, iv, iS, iE) => {
      let iM = 0x0;
      for (let iP = 0x0; iP < 0xa; iP++) {
        let ib = hq[iP];
        iM += ic[iP] * (iE === 0x0 ? ir(il, iv, Math.min(iS + 0x1, 0x4), 0x2) : ir(il + ib, iv || ib === 0x1, iS, iE - 0x1));
      }
      return iM;
    },
    ir = (il, iv, iS, iE) => {
      if (il > 0x15) return -0x1;
      let iM = il + ',' + (iv ? 0x1 : 0x0) + ',' + iS + ',' + iE,
        iP = iG.get(iM);
      if (iP !== void 0x0) return iP;
      if (iP = ik(il, iv, iS), hV(il, iv) < 0x15 && iS < 0x4) {
        let ib = iA(il, iv, iS, iE);
        ib > iP && (iP = ib);
      }
      return iG.set(iM, iP), iP;
    },
    iL = (il, iv, iS, iE) => {
      let iM = 0x0;
      for (let iP = 0x0; iP < 0xa; iP++) {
        let ib = hq[iP];
        iM += ic[iP] * (iE === 0x0 ? ik(il, iv, iS + 0x1) : ik(il + ib, iv || ib === 0x1, iS));
      }
      return 0x2 * iM;
    };
  return {
    'stand': ik,
    'hit': (il, iv, iS, iE) => iA(il, iv, iS, iE),
    'dbl': iL,
    'split': (il, iv) => {
      let iS = 0x0;
      for (let iE = 0x0; iE < 0xa; iE++) {
        let iM = hq[iE];
        iv === 0x0 ? iS += ic[iE] * (il === 0x1 ? ik(0x1, true, 0x1) : Math.max(ir(il, il === 0x1, 0x1, 0x2), iL(il, il === 0x1, 0x1, 0x2))) : il === 0x1 ? iS += ic[iE] * ik(0x1 + iM, true, 0x0) : iS += ic[iE] * Math.max(ir(il + iM, iM === 0x1, 0x0, iJ(iv)), iL(il + iM, iM === 0x1, 0x0, iJ(iv)));
      }
      return 0x2 * iS;
    },
    'V': ir
  };
}
g(hR, 'makeLintSolver');
function hG(iK, iW, ic) {
  if (ic === 'visible' || ic === 'hole') return hW(iK, iW, ic === 'hole');
  if (iK != null) return hK(iK, false, false, iW);
  let iN = new Float64Array(0x6),
    iF = 0x0;
  for (let iI = 0x0; iI < 0xa; iI++) {
    let ia = hK(hq[iI], false, false, iW);
    for (let iR = 0x0; iR < 0x6; iR++) iN[iR] += iW[iI] * ia.d[iR];
    iF += iW[iI] * ia.bj;
  }
  return {
    'd': iN,
    'bj': iF
  };
}
g(hG, 'lintDealerDist');
function hk(iK, iW, ic = {}) {
  let iN = hj(iW || iK.law),
    iF = hX[iK.full || iN.full ? 0x34 : 0x33],
    iI = iK.cards || [],
    ia = iK.value && iK.value.total !== void 0x0 ? iK.value : hH(iI),
    iR = ia.visible ? ia.visible.total : ia.total,
    iG = iK.hidden || 0x0,
    ik = iS => iS === 'double' ? iK.canDouble : iS === 'split' ? iK.canSplit : iS === 'surrender' ? iK.canSurrender : true;
  if (iR >= 0x15 && iG === 0x0) return 'stand';
  if (iI.some(iS => iS.rank === 'TICKET') && iG === 0x0) return 'hit';
  let iJ = 0x0,
    iA = false;
  for (let iS of iI) {
    let iE = hw(iS.rank);
    iJ += iE, iE === 0x1 && (iA = true);
  }
  let ir = iI.length === 0x2 && iI[0x0].rank === iI[0x1].rank ? hw(iI[0x0].rank) : 0x0,
    iL = {};
  if (iN.lint) {
    let iM = ic.lintRule || h3,
      iP = iK.dealerUp,
      ib = iP ? Math.min(hI(iP), 0xa) : null,
      id = hf(iN, "lint:" + iM + ':' + ib + ':' + (iF === hX[0x34] ? 0x34 : 0x33), () => hR(hG(ib === 0xb ? 0x1 : ib, iF, iM), iN, iF)),
      y0 = iK.untilLint == null ? 0x1 : iK.untilLint;
    iL.stand = id.stand(iJ, iA, iG), iL.hit = id.hit(iJ, iA, iG, y0), ik('double') && iI.length + iG === 0x2 && (iL.double = id.dbl(iJ, iA, iG, y0)), ik('split') && ir && iG === 0x0 && (iL.split = id.split(ir, y0));
  } else {
    let y1;
    if (iN.dealerOpen) {
      let y2 = iK.dealerCards || (iK.dealerUp ? [iK.dealerUp] : []),
        y3 = 0x0,
        y4 = false;
      for (let y5 of y2) {
        let y6 = hw(y5.rank);
        y3 += y6, y6 === 0x1 && (y4 = true);
      }
      y1 = hf(iN, "open:" + y3 + ':' + y4 + ':' + (iF === hX[0x34] ? 0x34 : 0x33), () => hN({
        'd': ho(y3, y4, iN.h17, iF, []),
        'bj': 0x0
      }, iN, iF));
    } else {
      let y7 = iK.dealerUp,
        y8 = y7 ? y7.rank === 'TICKET' ? 0x1 : hw(y7.rank) : 0xa;
      y1 = hf(iN, "up:" + y8 + ':' + (iF === hX[0x34] ? 0x34 : 0x33), () => hN(hK(y8, iN.h17, iN.peek, iF), iN, iF));
    }
    iL.stand = y1.stand(iJ, iA), iL.hit = y1.hit(iJ, iA), ik('double') && iI.length === 0x2 && (iL.double = y1.dbl(iJ, iA)), ik('split') && ir && (iL.split = y1.split(ir)), ik('surrender') && iI.length === 0x2 && (iL.surrender = -0.5);
  }
  let il = 'stand',
    iv = -0x1 / 0x0;
  for (let y9 of ['stand', 'hit', 'double', 'split', 'surrender']) iL[y9] !== void 0x0 && iL[y9] > iv + 1e-12 && (iv = iL[y9], il = y9);
  return ic.withEV ? {
    'action': il,
    'ev': iL
  } : il;
}
g(hk, 'basicStrategy');
function hJ(iK, iW) {
  return iK._legal(iW);
}
g(hJ, 'legalActions');
var hA = g((iK, iW) => !!iK && !!iW && iK.seat === iW.seat && iK.ring === iW.ring && iK.hand === iW.hand, 'refEq'),
  hr = g(iK => Math.round(iK * 0x2) / 0x2, 'half'),
  hL = class yh {
    constructor({
      room: iK,
      seed: iW,
      wallet: ic = a,
      you: iN = {
        'char': 'wick',
        'nerve': 0x0
      },
      seats: iF = [{
        'kind': 'you'
      }],
      dealer: iI = null,
      tells: ia = {},
      script: iR = null,
      full: iG = false,
      canKeepsake: ik = true,
      lintRule: iJ = h3
    } = {}) {
      this.roomCfg = hy(iK) || hy('coin'), this.room = this.roomCfg.id, this.law = h2[this.roomCfg.law], this.lintRule = iJ, this.dealerId = iI || this.roomCfg.dealer, this.base = hD(iW >>> 0x0), this.streams = {
        'shoe': this.base.fork('shoe'),
        'tell': this.base.fork("tell:" + this.dealerId),
        'penny': this.base.fork('penny'),
        'ai': {}
      }, this.full = !!(iG || this.law.full), this.shoe = hB({
        'law': this.law,
        'rng': this.streams.shoe,
        'decks': this.law.decks || c,
        'full': this.full
      }), this.wallet = hr(ic), this.char = iN && iN.char || 'wick', this.nerve = Math.max(0x0, Math.min(l.max, iN && iN.nerve || 0x0)), this.tells = ia || {}, this.script = iR, this.canKeepsake = ik, this.seats = iF.map((iA, ir) => {
        let iL = {
          'i': ir,
          'kind': iA.kind,
          'id': iA.kind === 'you' ? 'you' : iA.id,
          'cfg': iA,
          'bank': iA.kind === 'you' ? null : hr(iA.bank != null ? iA.bank : h9[iA.id] || 0x64),
          'rings': [],
          'face': null,
          'sitout': false,
          'insurance': 0x0
        };
        return iA.kind === 'ai' && (this.streams.ai[iA.id] = this.base.fork("ai:" + iA.id)), iL;
      }), this.youSeat = this.seats.findIndex(iA => iA.kind === 'you'), this.phase = 'bet', this.bets = [0x0, 0x0, 0x0], this.stacks = [[], [], []], this.lastBets = [0x0, 0x0, 0x0], this.keepsakeRing = -0x1, this.keepsakeSpent = false, this.stareArmed = false, this.active = null, this.round = 0x0, this.seq = 0x0, this.seen = [], this.runningCount = 0x0, this.discard = 0x0, this.lastBigpot = -0x63, this.pendingShuffle = false, this._resetRound();
    }
    ["_resetRound"]() {
      this.dealer = {
        'cards': [],
        'hidden': new Set(),
        'lint': new Set()
      }, this.dealCount = 0x0, this.skillUsed = false, this.stare = null, this.skills = [], this.tellLog = [], this.fives = [], this.ticketSeenBy = null, this.insurance = {
        'offered': false,
        'amount': 0x0,
        'won': false
      }, this.dealerNatural = false, this.dealerDone = false, this.revealed = false, this.settleQueue = null, this.settled = [], this.roundBet = 0x0, this.redraw = null, this.knuckle = null, this.glow = null, this.bigpotFired = false, this._out = null;
      for (let iK of this.seats) iK.rings = [], iK.sitout = false, iK.insurance = 0x0;
    }
    ["_ev"](iK, iW = {}) {
      let ic = {
        't': iK,
        'seq': ++this.seq,
        ...iW
      };
      return this._out && this._out.push(ic), ic;
    }
    ["_begin"]() {
      return this._out = [], this._out;
    }
    ["_illegal"](iK, iW) {
      return [{
        't': 'illegal',
        'seq': ++this.seq,
        'action': iK,
        'reason': iW
      }];
    }
    get ["you"]() {
      return this.youSeat >= 0x0 ? this.seats[this.youSeat] : null;
    }
    ["_hand"](iK) {
      if (!iK || iK === 'dealer') return null;
      let iW = this.seats[iK.seat],
        ic = iW && iW.rings[iK.ring];
      return ic && ic.hands[iK.hand] || null;
    }
    ["_cover"](iK, iW) {
      return iK.kind === 'you' ? this.wallet >= iW : iK.bank >= iW;
    }
    ["_pay"](iK, iW) {
      iK.kind === 'you' ? this.wallet = hr(this.wallet + iW) : iK.bank = hr(iK.bank + iW);
    }
    ["_charge"](iK, iW) {
      this._pay(iK, -iW);
    }
    ["credit"](iK) {
      this.wallet = hr(this.wallet + iK);
    }
    ["addBank"](iK, iW) {
      let ic = this.seats.find(iN => iN.id === iK);
      return ic && (ic.bank = hr(ic.bank + iW)), !!ic;
    }
    ["_limits"]() {
      return this.roomCfg;
    }
    ["placeChip"](iK, iW) {
      return this.phase !== 'bet' ? {
        'ok': false,
        'reason': 'phase'
      } : this.law.stakes === false ? {
        'ok': false,
        'reason': 'ring'
      } : !(iK >= 0x0 && iK < s) || iK === this.keepsakeRing || !f.includes(iW) ? {
        'ok': false,
        'reason': 'ring'
      } : this.bets[iK] + iW > this._limits().max ? {
        'ok': false,
        'reason': 'max'
      } : iW > this.wallet ? {
        'ok': false,
        'reason': 'wallet'
      } : (this.stacks[iK].push(iW), this.bets[iK] += iW, this.wallet = hr(this.wallet - iW), {
        'ok': true
      });
    }
    ["liftChip"](iK) {
      if (this.phase !== 'bet') return {
        'ok': false,
        'reason': 'phase'
      };
      let iW = this.stacks[iK];
      if (!iW || !iW.length) return {
        'ok': false,
        'reason': 'ring'
      };
      let ic = iW.pop();
      return this.bets[iK] -= ic, this.wallet = hr(this.wallet + ic), {
        'ok': true,
        'value': ic
      };
    }
    ["clearBets"]() {
      if (this.phase !== 'bet') return {
        'ok': false,
        'reason': 'phase'
      };
      for (let iK = 0x0; iK < s; iK++) for (; this.stacks[iK].length;) this.liftChip(iK);
      return {
        'ok': true
      };
    }
    ["_setBets"](iK) {
      this.clearBets();
      for (let iW = 0x0; iW < s; iW++) {
        let ic = iK[iW] || 0x0;
        if (iW !== this.keepsakeRing) {
          for (let iN = f.length - 0x1; iN >= 0x0 && ic > 0x0; iN--) for (; ic >= f[iN];) this.stacks[iW].push(f[iN]), ic -= f[iN];
          this.bets[iW] = (iK[iW] || 0x0) - ic, this.wallet = hr(this.wallet - this.bets[iW]);
        }
      }
    }
    ["rebet"]() {
      if (this.phase !== 'bet') return {
        'ok': false,
        'reason': 'phase'
      };
      let iK = this.lastBets.map((iN, iF) => iF === this.keepsakeRing ? 0x0 : iN),
        iW = iK.reduce((iN, iF) => iN + iF, 0x0);
      if (!iW) return {
        'ok': false,
        'reason': 'nobet'
      };
      let ic = this.bets.reduce((iN, iF) => iN + iF, 0x0);
      return iW > this.wallet + ic ? {
        'ok': false,
        'reason': 'wallet'
      } : iK.some(iN => iN > this._limits().max) ? {
        'ok': false,
        'reason': 'max'
      } : (this._setBets(iK), {
        'ok': true
      });
    }
    ["doubleBets"]() {
      if (this.phase !== 'bet') return {
        'ok': false,
        'reason': 'phase'
      };
      let iK = this.bets.map(ic => ic * 0x2),
        iW = this.bets.reduce((ic, iN) => ic + iN, 0x0);
      return iW ? iW > this.wallet ? {
        'ok': false,
        'reason': 'wallet'
      } : iK.some(ic => ic > this._limits().max) ? {
        'ok': false,
        'reason': 'max'
      } : (this._setBets(iK), {
        'ok': true
      }) : {
        'ok': false,
        'reason': 'nobet'
      };
    }
    ["armKeepsake"]() {
      if (this.phase !== 'bet') return {
        'ok': false,
        'reason': 'phase'
      };
      if (!this.canKeepsake || this.keepsakeSpent) return {
        'ok': false,
        'reason': 'used'
      };
      if (this.law.stakes === false) return {
        'ok': false,
        'reason': 'ring'
      };
      for (; this.stacks[0x0].length;) this.liftChip(0x0);
      return this.keepsakeRing = 0x0, {
        'ok': true
      };
    }
    ["armStare"]() {
      return this.phase !== 'bet' ? {
        'ok': false,
        'reason': 'phase'
      } : this.law.dealerOpen || !this.tells[this.dealerId] ? {
        'ok': false,
        'reason': 'nodealer'
      } : (this.stareArmed = true, {
        'ok': true
      });
    }
    ["_newHand"](iK, iW = {}) {
      return {
        'cards': [],
        'faceDown': new Set(),
        'bet': iK,
        'doubled': false,
        'done': false,
        'bust': false,
        'bustRevealed': false,
        'surrendered': false,
        'fromSplit': false,
        'splitAces': false,
        'keepsake': false,
        'noNatural': false,
        'actions': [],
        'stoodOn': null,
        'doubledOn': null,
        'doubleCard': null,
        'result': null,
        'twentyOne': false,
        'glow': null,
        'glowHit': false,
        'five': false,
        ...iW
      };
    }
    ["_deal"](iK, {
      hole: iW = false
    } = {}) {
      let ic,
        iN = iK === 'dealer' ? this.dealer : this._hand(iK);
      this.script && this.script.youSecond && iK !== 'dealer' && iK.seat === this.youSeat && iK.ring === 0x0 && iK.hand === 0x0 && iN.cards.length === 0x1 && !this._scripted ? (ic = this.shoe.take(this.script.youSecond), this._scripted = true) : ic = this.shoe.draw(), this.dealCount++;
      let iF = !!this.law.lint && this.dealCount % 0x3 === 0x0,
        iI = iF || iW && !this.law.dealerOpen;
      return iN.cards.push(ic), iK === 'dealer' ? (iI && this.dealer.hidden.add(ic.id), iF && this.dealer.lint.add(ic.id)) : iI && (iN.faceDown.add(ic.id), iF && (iN.hadLint = true)), iI || this._see(ic), this._ev('deal', {
        'to': iK,
        'card': iI ? null : ic,
        'faceDown': iI,
        'lint': iF,
        'hole': !!iW,
        'index': iN.cards.length - 0x1
      }), !this.shoe.cutFired && this.shoe.pastCut && (this.shoe.cutFired = true, this._ev('cutcard', {})), ic.rank === 'TICKET' && (this.ticketSeenBy = iK === 'dealer' ? 'dealer' : this.seats[iK.seat].id, this._ev('ticketDealt', {
        'to': iK
      })), ic;
    }
    ["_see"](iK) {
      this.seen.push(iK), this.runningCount += hZ(iK);
    }
    ["_handRefs"]() {
      let iK = [];
      return this.seats.forEach((iW, ic) => iW.rings.forEach((iN, iF) => {
        iN && iN.hands.forEach((iI, ia) => iK.push({
          'seat': ic,
          'ring': iF,
          'hand': ia
        }));
      })), iK;
    }
    ["_aiBetView"](iK) {
      return {
        'law': this.law,
        'room': this.room,
        'bank': iK.bank,
        'min': this.roomCfg.min,
        'max': this.roomCfg.max,
        'runningCount': this.runningCount,
        'decksLeft': Math.max(0.5, this.shoe.remaining / 0x33),
        'round': this.round,
        'face': iK.face,
        'seen': this.seen
      };
    }
    ["deal"]() {
      if (this.phase !== 'bet') return this._illegal('deal', 'phase');
      let iK = this.roomCfg,
        iW = this.you;
      if (iW && this.law.stakes !== false) {
        if (!(this.bets.some(iR => iR > 0x0) || this.keepsakeRing === 0x0) && !this.rebet().ok) return this._illegal('deal', 'nobet');
        if (this.bets.some(iR => iR > 0x0 && iR < iK.min)) return this._illegal('deal', 'min');
      }
      let ic = this._begin();
      this._resetRound(), this._out = ic, this.pendingShuffle && (this.shoe.shuffle(), this.seen = [], this.runningCount = 0x0, this.discard = 0x0, this.pendingShuffle = false, this._ev('shuffle', {
        'size': this.shoe.size
      }));
      for (let iR of this.seats) {
        if (iR.kind !== 'ai') continue;
        iR.cfg.flip && (iR.face = iR.cfg.flip(this.streams.penny), this._ev('flip', {
          'seat': iR.i,
          'id': iR.id,
          'face': iR.face
        }));
        let iG = iR.cfg.bet ? iR.cfg.bet(this._aiBetView(iR), this.streams.ai[iR.id]) : 0x5;
        if (iG = Math.min(hr(+iG || 0x0), iK.max), iG > 0x0 && iG < iK.min && (iG = iK.min), !(iG > 0x0) || iG > iR.bank) {
          iR.sitout = true, this._ev('sitout', {
            'seat': iR.i,
            'id': iR.id,
            'need': iG
          });
          continue;
        }
        iR.bank = hr(iR.bank - iG), iR.rings = [{
          'bet': iG,
          'hands': [this._newHand(iG)]
        }], this._ev('bet', {
          'seat': iR.i,
          'id': iR.id,
          'amount': iG
        });
      }
      if (iW) {
        if (iW.rings = [null, null, null], this.law.stakes === false) iW.rings[0x0] = {
          'bet': 0x0,
          'hands': [this._newHand(0x0, {
            'keepsake': true
          })]
        };else {
          for (let ik = 0x0; ik < s; ik++) ik === this.keepsakeRing ? iW.rings[ik] = {
            'bet': 0x0,
            'hands': [this._newHand(0x0, {
              'keepsake': true
            })]
          } : this.bets[ik] > 0x0 && (iW.rings[ik] = {
            'bet': this.bets[ik],
            'hands': [this._newHand(this.bets[ik])]
          });
        }
        this.roundBet = this.bets.reduce((iJ, iA) => iJ + iA, 0x0), this.lastBets = this.bets.slice(), this.keepsakeThisRound = this.keepsakeRing === 0x0, this.keepsakeThisRound && (this.keepsakeSpent = true);
      }
      this.stareThisRound = this.stareArmed, this.stareArmed = false;
      let iN = this._handRefs();
      for (let iJ of iN) this._deal(iJ);
      this._deal('dealer');
      for (let iA of iN) this._deal(iA);
      this._deal('dealer', {
        'hole': true
      });
      let iF = this.dealer.cards[0x1];
      if (!this.law.dealerOpen) for (let ir of Object.keys(this.tells)) {
        if (ir !== this.dealerId) continue;
        let iL = this.tells[ir];
        if (!iL || typeof iL.test != 'function') continue;
        let il = !!iL.test(iF),
          iv = this.streams.tell.chance(il ? iL.p : iL.q),
          iS = iL.id || iL.tellId || hu[ir] || ir + '_tell';
        this.tellLog.push({
          'who': ir,
          'tellId': iS,
          'shown': iv,
          'truth': il
        }), this._ev('tell', {
          'who': ir,
          'tellId': iS,
          'shown': iv,
          'truth': il
        });
      }
      for (let iE of iN) this._afterCard(iE, true);
      let iI = this.dealer.cards[0x0],
        ia = iI.rank === 'A' || iI.rank === 'TICKET';
      if (this.law.insurance && ia && !this.dealer.hidden.has(iI.id)) {
        this.phase = 'insure';
        let iM = this._yourInsureCost();
        return this.insurance.offered = true, this._ev('insureOffer', {
          'cost': iM
        }), !iW || iM === 0x0 ? (this._insureAI(), this._afterInsure(ic)) : ic;
      }
      return this._afterInsure(ic);
    }
    ["_yourInsureCost"]() {
      let iK = this.you;
      return iK ? iK.rings.reduce((iW, ic) => iW + (ic && !ic.hands[0x0].keepsake ? ic.bet / 0x2 : 0x0), 0x0) : 0x0;
    }
    ["_insureAI"]() {
      for (let iK of this.seats) {
        if (iK.kind !== 'ai' || !iK.rings.length || !iK.cfg.insure) continue;
        let iW = iK.rings[0x0].bet / 0x2;
        if (iK.bank < iW) continue;
        let ic = {
          'seat': iK.i,
          'ring': 0x0,
          'hand': 0x0
        };
        iK.cfg.insure(this._view(ic), this.streams.ai[iK.id]) && (iK.bank = hr(iK.bank - iW), iK.insurance = iW, this._ev('insure', {
          'seat': iK.i,
          'amount': iW
        }));
      }
    }
    ["insure"](iK) {
      if (this.phase !== 'insure') return this._illegal('insure', 'phase');
      let iW = this._yourInsureCost();
      if (iK && iW > this.wallet) return this._illegal('insure', 'wallet');
      let ic = this._begin();
      return iK && iW > 0x0 && (this.wallet = hr(this.wallet - iW), this.you.insurance = iW, this.insurance.amount = iW, this._ev('insure', {
        'seat': this.youSeat,
        'amount': iW
      })), this._insureAI(), this._afterInsure(ic);
    }
    ["_afterInsure"](iK) {
      let iW = this.dealer.cards,
        ic = iW[0x0],
        iN = hm(iW);
      this.law.peek && (ic.rank === 'A' || ic.rank === 'TICKET' || hg(ic)) && this._ev('peek', {
        'natural': iN
      });
      for (let iF of this.seats) {
        if (!iF.insurance) continue;
        let iI = iN ? iF.insurance * 0x3 : 0x0;
        this._pay(iF, iI), iF.kind === 'you' && (this.insurance.won = iN), this._ev('settle', {
          'ref': {
            'seat': iF.i,
            'ring': -0x1,
            'hand': -0x1
          },
          'outcome': 'insurance',
          'bet': iF.insurance,
          'paid': iI,
          'net': iI - iF.insurance,
          'keepsake': false
        });
      }
      if (iN && (this.law.peek || this.law.dealerOpen)) {
        this.dealerNatural = true, this.dealer.hidden.size && this._revealDealer();
        for (let ia of this._handRefs()) this._hand(ia).done = true;
        return this._ev('dealerTotal', {
          'total': 0x15,
          'soft': true,
          'bust': false
        }), this.dealerDone = true, this.phase = 'settle', this.active = null, iK;
      }
      return this.stareThisRound && this.dealer.hidden.has(iW[0x1].id) && this.tells[this.dealerId] ? (this.phase = 'stare', iK) : (this._startTurns(), iK);
    }
    ["call"](iK) {
      if (this.phase !== 'stare') return this._illegal('call', 'phase');
      let iW = this._begin(),
        ic = this.tellLog.find(iI => iI.who === this.dealerId),
        iN = ic ? ic.truth : !!this.tells[this.dealerId].test(this.dealer.cards[0x1]),
        iF = !!iK === iN;
      return this.stare = {
        'saysTrue': !!iK,
        'right': iF,
        'dealer': this.dealerId
      }, this._ev('stareCall', {
        'saysTrue': !!iK,
        'right': iF
      }), this._startTurns(), iW;
    }
    ["_startTurns"]() {
      this.phase = 'turn', this._nextActive();
    }
    ["_nextActive"]() {
      let iK = this.active;
      this.active = null;
      for (let iW of this._handRefs()) if (!this._hand(iW).done) {
        this.active = iW;
        break;
      }
      this.active ? hA(iK, this.active) || this._ev('turn', {
        'ref': this.active
      }) : this.phase === 'turn' && (this.phase = 'dealer');
    }
    ["_afterCard"](iK, iW = false) {
      let ic = this._hand(iK),
        iN = hH(ic.cards, {
          'split': ic.fromSplit || ic.noNatural,
          'hiddenIds': ic.faceDown
        });
      if (iN.visible.total > 0x15) {
        ic.bust = true, ic.done = true, this._ev('bust', {
          'ref': iK,
          'total': iN.visible.total,
          'revealed': false
        });
        return;
      }
      if (ic.cards.length >= 0x5 && !ic.five && iN.visible.total <= 0x15 && (ic.five = true, this.fives.push(this.seats[iK.seat].id), this._ev('five', {
        'ref': iK,
        'alive': true
      })), iW && iN.hidden === 0x0 && iN.natural) {
        ic.done = true, ic.natural = true;
        return;
      }
      if (iN.visible.total === 0x15) {
        ic.done || (ic.done = true, ic.twentyOne = true, ic.stoodOn = 0x15, this._ev('twentyone', {
          'ref': iK
        }));
        return;
      }
      ic.splitAces && ic.cards.length >= 0x2 && (ic.done = true);
    }
    ["_legal"](iK) {
      let iW = this._hand(iK);
      if (!iW || iW.done || this.phase !== 'turn') return [];
      let ic = this.seats[iK.seat],
        iN = ic.rings[iK.ring],
        iF = ['hit', 'stand'],
        iI = iW.cards.length === 0x2,
        ia = iI && iW.faceDown.size === 0x0;
      return iI && !iW.splitAces && !iW.keepsake && this._cover(ic, iW.bet) && iF.push('double'), ia && !iW.keepsake && iW.cards[0x0].rank === iW.cards[0x1].rank && iW.cards[0x0].rank !== 'TICKET' && iN.hands.length < r && !(iW.fromSplit && iW.cards[0x0].rank === 'A') && this._cover(ic, iW.bet) && iF.push('split'), this.law.surrender && iI && !iW.fromSplit && !iW.keepsake && iW.actions.length === 0x0 && iF.push('surrender'), iF;
    }
    ["act"](iK) {
      if (this.phase !== 'turn' || !this.active || this.active.seat !== this.youSeat) return this._illegal(iK, 'phase');
      if (!this._legal(this.active).includes(iK)) return this._illegal(iK, 'illegal');
      let iW = this._begin();
      return this._apply(this.active, iK), iW;
    }
    ["_apply"](iK, iW) {
      let ic = this.seats[iK.seat],
        iN = this._hand(iK),
        iF = hH(iN.cards, {
          'hiddenIds': iN.faceDown
        });
      if (iN.actions.push(iW), this._ev('action', {
        'ref': iK,
        'action': iW
      }), iN.glow && iN.actions.length === iN.glowAt + 0x1 && iW === 'hit' && (iN.glowHit = true), iW === 'hit') this._deal(iK), this._afterCard(iK);else {
        if (iW === 'stand') iN.done = true, iN.stoodOn = iF.visible.total, iN.stoodSoft = iF.visible.soft;else {
          if (iW === 'double') this._charge(ic, iN.bet), iN.doubledOn = {
            'total': iF.visible.total,
            'soft': iF.visible.soft
          }, iN.bet *= 0x2, iN.doubled = true, ic.kind === 'you' && (this.roundBet += iN.bet / 0x2), this._ev('double', {
            'ref': iK,
            'bet': iN.bet
          }), iN.doubleCard = this._deal(iK), this._afterCard(iK), iN.done = true;else {
            if (iW === 'split') {
              this._charge(ic, iN.bet), ic.kind === 'you' && (this.roundBet += iN.bet);
              let iI = ic.rings[iK.ring],
                ia = iN.cards[0x0].rank === 'A',
                iR = this._newHand(iN.bet, {
                  'fromSplit': true,
                  'splitAces': ia
                });
              iR.cards.push(iN.cards.pop()), iN.fromSplit = true, iN.splitAces = ia, iI.hands.push(iR);
              let iG = {
                'seat': iK.seat,
                'ring': iK.ring,
                'hand': iI.hands.length - 0x1
              };
              this._ev('split', {
                'ref': iK,
                'into': iG
              }), this._deal(iK), this._afterCard(iK), this._deal(iG), this._afterCard(iG), ia && (iN.done = true, iR.done = true);
            } else {
              if (iW === 'surrender') {
                iN.surrendered = true, iN.done = true;
                let ik = iN.bet / 0x2;
                this._ev('surrender', {
                  'ref': iK,
                  'back': ik
                });
              }
            }
          }
        }
      }
      this._nextActive();
    }
    ["skill"](iK = null) {
      let iW = b[this.char];
      if (this.phase !== 'turn' || !this.active || this.active.seat !== this.youSeat) return this._illegal('skill', 'phase');
      if (this.skillUsed) return this._illegal('skill', 'used');
      let ic = l.cost[iW];
      if (this.nerve < ic) return this._illegal('skill', 'nerve');
      let iN = null,
        iF = this._hand(this.active);
      if (iW === 'glow') iN = hQ(this.shoe.peek()) || 'MID';else {
        if (iW === 'snag') {
          if (!this.shoe.remaining) return this._illegal('skill', 'empty');
          this.shoe.burn(), this.discard++, iN = {
            'burned': true
          };
        } else {
          if (iW === 'knuckle') {
            if (this.law.dealerOpen || !this.dealer.hidden.has(this.dealer.cards[0x1].id)) return this._illegal('skill', 'open');
            let ia = hQ(this.dealer.cards[0x1]);
            iN = ia === 'TICKET' ? 'HIGH' : ia;
          } else {
            if (iW === 'find') {
              let iR = iK && iK.cardId,
                iG = null;
              if (this.dealer.hidden.has(iR)) iG = {
                'who': 'dealer',
                'card': this.dealer.cards.find(iJ => iJ.id === iR)
              };else for (let iJ of this._handRefs()) {
                let iA = this._hand(iJ);
                if (iA.faceDown.has(iR)) {
                  iG = {
                    'who': iJ,
                    'card': iA.cards.find(ir => ir.id === iR),
                    'h': iA
                  };
                  break;
                }
              }
              if (!iG) return this._illegal('skill', 'target');
              let ik = this._begin();
              return this._spend(iW, ic), iG.who === 'dealer' ? this.dealer.hidden.delete(iR) : iG.h.faceDown.delete(iR), this._see(iG.card), iN = {
                'card': iG.card
              }, this.skillUsed = true, this.skills.push({
                'kind': iW,
                'result': 'card'
              }), this._ev('skill', {
                'kind': iW,
                'cost': ic,
                'result': iN
              }), this._ev('reveal', {
                'who': iG.who,
                'cards': [iG.card]
              }), iG.who !== 'dealer' && this._afterCard(iG.who), this._nextActive(), ik;
            } else {
              if (iW === 'redraw') {
                let ir = iK && iK.a,
                  iL = iK && iK.b,
                  il = ir && this._hand(ir.ref),
                  iv = iL && this._hand(iL.ref),
                  iS = (id, y0) => y0 && id.seat === this.youSeat && !y0.done && !y0.doubled && !y0.splitAces;
                if (!iS(ir.ref, il) || !iS(iL.ref, iv) || hA(ir.ref, iL.ref)) return this._illegal('skill', 'target');
                let iE = il.cards.findIndex(id => id.id === ir.cardId),
                  iM = iv.cards.findIndex(id => id.id === iL.cardId);
                if (iE < 0x0 || iM < 0x0 || il.faceDown.has(ir.cardId) || iv.faceDown.has(iL.cardId)) return this._illegal('skill', 'target');
                let iP = this._begin();
                this._spend(iW, ic);
                let ib = il.cards[iE];
                return il.cards[iE] = iv.cards[iM], iv.cards[iM] = ib, il.noNatural = true, iv.noNatural = true, this.redraw = {
                  'a': ir.ref,
                  'b': iL.ref
                }, this.skillUsed = true, this.skills.push({
                  'kind': iW,
                  'result': 'swap'
                }), this._ev('skill', {
                  'kind': iW,
                  'cost': ic,
                  'result': {
                    'a': ir,
                    'b': iL
                  }
                }), this._afterCard(ir.ref), this._afterCard(iL.ref), this._nextActive(), iP;
              } else return this._illegal('skill', 'none');
            }
          }
        }
      }
      let iI = this._begin();
      return this._spend(iW, ic), this.skillUsed = true, this.skills.push({
        'kind': iW,
        'result': iN
      }), iW === 'glow' && (this.glow = iN, iF.glow = iN, iF.glowAt = iF.actions.length), iW === 'knuckle' && (this.knuckle = iN), this._ev('skill', {
        'kind': iW,
        'cost': ic,
        'result': iN
      }), iI;
    }
    ["_spend"](iK, iW) {
      this.nerve -= iW, this._ev('nerve', {
        'delta': -iW,
        'reason': 'spend',
        'value': this.nerve
      });
    }
    ["_gain"](iK) {
      let iW = l.gain[iK],
        ic = this.nerve;
      this.nerve = Math.min(l.max, this.nerve + iW), this.nerve !== ic && this._ev('nerve', {
        'delta': this.nerve - ic,
        'reason': iK,
        'value': this.nerve
      });
    }
    ["advance"]() {
      let iK = this._begin(),
        iW = 0x0;
      for (; !iK.length && iW++ < 0x40;) {
        if (this.phase === 'turn') {
          if (this.active && this.seats[this.active.seat].kind === 'you') break;
          this._step();
        } else {
          if (this.phase === 'dealer') this._step();else {
            if (this.phase === 'settle' && !(this.settleQueue && !this.settleQueue.length)) this._step();else break;
          }
        }
        this._out = iK;
      }
      return iK;
    }
    ["_step"]() {
      let iK = this._out;
      if (this.phase === 'turn') {
        if (!this.active) return this._nextActive(), iK;
        let iW = this.seats[this.active.seat];
        if (iW.kind === 'you') return iK;
        let ic = this.active,
          iN = this._view(ic),
          iF = iW.cfg.policy ? iW.cfg.policy(iN, this.streams.ai[iW.id]) : hk(iN, this.law, {
            'lintRule': this.lintRule
          }),
          iI = this._legal(ic);
        if (!iI.includes(iF)) {
          let ia = iF;
          if (iF === 'double') iF = 'hit';else {
            let iR = hk({
              ...iN,
              'canDouble': false,
              'canSplit': false,
              'canSurrender': false
            }, this.law, {
              'lintRule': this.lintRule
            });
            iF = iI.includes(iR) ? iR : 'stand';
          }
          iI.includes(iF) || (iF = 'stand'), this._ev('corrected', {
            'ref': ic,
            'from': ia,
            'to': iF
          });
        }
        return this._apply(ic, iF), iK;
      }
      return this.phase === 'dealer' ? (this._dealerStep(), iK) : (this.phase === 'settle' && this._settleStep(), iK);
    }
    ["_live"]() {
      return this._handRefs().some(iK => {
        let iW = this._hand(iK);
        return !iW.surrendered && !(iW.bust && !iW.faceDown.size) && !(iW.natural && !this.law.lint);
      });
    }
    ["_revealDealer"]() {
      let iK = this.dealer.cards.filter(iW => this.dealer.hidden.has(iW.id));
      for (let iW of iK) this._see(iW);
      this.dealer.hidden.clear(), this._ev('reveal', {
        'who': 'dealer',
        'cards': this.dealer.cards.slice()
      });
    }
    ["_dealerValue"](iK) {
      return hH(this.dealer.cards, {
        'hiddenIds': iK ? this.dealer.hidden : null
      });
    }
    ["_dealerDecisionValue"]() {
      if (!this.law.lint || this.lintRule === 'true') return this._dealerValue(false);
      let iK = this.lintRule === 'visible' ? this.dealer.hidden : this.dealer.lint,
        iW = hH(this.dealer.cards, {
          'hiddenIds': iK
        }).visible;
      if (this.lintRule === 'ten') {
        let ic = this.dealer.lint.size;
        return {
          'total': iW.total + 0xa * ic,
          'soft': iW.soft && iW.total + 0xa * ic <= 0x15,
          'count': iW.count
        };
      }
      return iW;
    }
    ["_dealerStep"]() {
      if (!this.revealed) {
        if (this.revealed = true, this.you && !this.bigpotFired && this.round - this.lastBigpot >= 0x4 && this.dealer.hidden.size) {
          let iK = Math.max(0x64, 0.2 * (this.wallet + this.roundBet));
          this.roundBet >= iK && (this.bigpotFired = true, this.lastBigpot = this.round, this._ev('bigpot', {
            'bet': this.roundBet
          }));
        }
        this.law.lint || (this.dealer.hidden.size && this._revealDealer(), this._stareResolve());
        return;
      }
      if (!this.dealerDone) {
        let iW = this._live(),
          ic = this._dealerDecisionValue();
        if (iW && hT(ic, this.law) && !(ic.total > 0x15)) {
          this._deal('dealer');
          return;
        }
        this.dealerDone = true, this.law.lint && this._showdown();
        let iN = this._dealerValue(false);
        iN.bust && this._ev('bust', {
          'ref': 'dealer',
          'total': iN.total,
          'revealed': !!this.law.lint
        }), this._ev('dealerTotal', {
          'total': iN.total,
          'soft': iN.soft,
          'bust': iN.bust
        }), this.phase = 'settle';
        return;
      }
      this.phase = 'settle';
    }
    ["_showdown"]() {
      this.dealer.hidden.size && this._revealDealer(), this._stareResolve();
      for (let iK of this._handRefs()) {
        let iW = this._hand(iK);
        if (!iW.faceDown.size) continue;
        let ic = iW.cards.filter(iF => iW.faceDown.has(iF.id));
        for (let iF of ic) this._see(iF);
        iW.faceDown.clear(), this._ev('reveal', {
          'who': iK,
          'cards': iW.cards.slice()
        });
        let iN = hH(iW.cards);
        iN.bust && !iW.bust && (iW.bust = true, iW.bustRevealed = true, this._ev('bust', {
          'ref': iK,
          'total': iN.total,
          'revealed': true
        }));
      }
    }
    ["_stareResolve"]() {
      this.stare && !this.stare.resolved && (this.stare.resolved = true, this.stare.right && this._gain('stare'));
    }
    ["_settleStep"]() {
      this.settleQueue || (this.settleQueue = this._handRefs());
      let iK = this.settleQueue.shift();
      if (!iK) return;
      let iW = this.seats[iK.seat],
        ic = this._hand(iK),
        iN = this._dealerValue(false),
        iF = hm(this.dealer.cards),
        iI = hH(ic.cards, {
          'split': ic.fromSplit || ic.noNatural
        }),
        ia = iI.natural,
        iR,
        iG = 0x0;
      ic.surrendered ? (iR = 'surrender', iG = ic.bet / 0x2) : iI.bust ? iR = 'lose' : iF ? iR = ia && !this.law.tiesLose ? 'push' : 'lose' : ia ? iR = 'natural' : iN.bust || iI.total > iN.total ? iR = 'win' : iI.total < iN.total ? iR = 'lose' : iR = this.law.tiesLose ? 'lose' : 'push';
      let ik = iR === 'win' && this.law.lintWin && ic.hadLint;
      if (iR === 'natural' ? iG = ic.bet * (0x1 + this.law.natural) : ik ? iG = ic.bet + Math.floor(ic.bet * this.law.lintWin * 0x2) / 0x2 : iR === 'win' ? iG = ic.bet * 0x2 : iR === 'push' && (iG = ic.bet), iG = hr(iG), this._pay(iW, iG), ic.result = iR, ic.paid = iG, ic.total = iI.total, this.settled.push(iK), this._ev('settle', {
        'ref': iK,
        'outcome': iR,
        'bet': ic.bet,
        'paid': iG,
        'net': iG - ic.bet,
        'keepsake': !!ic.keepsake,
        'lint': !!ik
      }), iW.kind === 'you') {
        let iJ = iR === 'win' || iR === 'natural';
        (iJ || iR === 'push') && (iI.total === 0x14 || iI.total === 0x15) && this._gain('twenty'), iJ && ic.cards.length >= 0x5 && this._gain('five'), iJ && ic.stoodOn != null && ic.stoodOn >= 0xc && ic.stoodOn <= 0x10 && !ic.twentyOne && this._gain('brave');
      }
    }
    ["finishRound"]() {
      if (this.phase === 'bet' || this.phase === 'done') return this._illegal('finishRound', 'phase');
      let iK = [],
        iW = 0x0;
      for (;;) {
        let iN = this.advance();
        if (!iN.length || iW++ > 0x7d0) break;
        iK.push(...iN);
      }
      if (this.phase !== 'settle') return iK.concat(this._illegal('finishRound', this.phase));
      this._out = iK, this.phase = 'done';
      let ic = this._summary();
      this._ev('roundEnd', {
        'summary': ic
      }), this.round++;
      for (let iF of this._handRefs()) this.discard += this._hand(iF).cards.length;
      return this.discard += this.dealer.cards.length, this.shoe.pastCut && (this.pendingShuffle = true), this.bets = [0x0, 0x0, 0x0], this.stacks = [[], [], []], this.keepsakeRing = -0x1, this.phase = 'bet', this.active = null, iK;
    }
    ["_summary"]() {
      let iK = this._dealerValue(false),
        iW = this.you,
        ic = [],
        iN = 0x0,
        iF = null;
      iW && (iW.rings.forEach((iR, iG) => {
        iR && iR.hands.forEach((ik, iJ) => {
          let iA = (ik.paid || 0x0) - ik.bet;
          iN += iA;
          let ir = ik.result === 'win' || ik.result === 'natural';
          ik.keepsake && this.law.stakes !== false && (iF = ir ? 'win' : ik.result === 'push' ? 'push' : 'lose'), ic.push({
            'ring': iG,
            'hand': iJ,
            'cards': ik.cards.slice(),
            'total': ik.total,
            'outcome': ik.result,
            'net': iA,
            'bet': ik.bet,
            'doubled': ik.doubled,
            'split': ik.fromSplit,
            'ringHands': iR.hands.length,
            'stoodOn': ik.stoodOn,
            'stoodSoft': !!ik.stoodSoft,
            'doubledOn': ik.doubledOn,
            'doubleCard': ik.doubleCard,
            'lintBust': ik.bustRevealed,
            'natural': ik.result === 'natural' || ik.result === 'push' && hH(ik.cards, {
              'split': ik.fromSplit
            }).natural,
            'ticket': ik.cards.some(iL => iL.rank === 'TICKET'),
            'keepsake': ik.keepsake,
            'glow': ik.glow,
            'glowHit': ik.glowHit,
            'surrendered': ik.surrendered,
            'skill': this.skills.length ? this.skills[0x0].kind : null
          });
        });
      }), iW.insurance && (iN += this.insurance.won ? iW.insurance * 0x2 : -iW.insurance));
      let iI = {};
      for (let iR of this.seats) {
        if (iR.kind !== 'ai') continue;
        if (!iR.rings.length) {
          iI[iR.id] = {
            'outcome': 'sitout',
            'cards': [],
            'total': 0x0,
            'bank': iR.bank
          };
          continue;
        }
        let iG = iR.rings[0x0].hands[0x0];
        iI[iR.id] = {
          'outcome': iG.result,
          'cards': iG.cards.slice(),
          'total': iG.total,
          'bank': iR.bank,
          'hands': iR.rings[0x0].hands.map(ik => ({
            'outcome': ik.result,
            'total': ik.total,
            'cards': ik.cards.slice()
          }))
        };
      }
      let ia = this.seats.find(ik => ik.id === 'penny');
      return {
        'room': this.room,
        'law': this.law.id,
        'dealerId': this.dealerId,
        'round': this.round,
        'you': {
          'hands': ic,
          'net': iN,
          'rings': iW ? iW.rings.filter(ik => ik && ik.bet > 0x0).length : 0x0
        },
        'dealer': {
          'total': iK.total,
          'bust': iK.bust,
          'natural': hm(this.dealer.cards),
          'up': this.dealer.cards[0x0],
          'cards': this.dealer.cards.slice(),
          'twoCardTotal': hH(this.dealer.cards.slice(0x0, 0x2)).total
        },
        'ai': iI,
        'ticketSeenBy': this.ticketSeenBy,
        'keepsake': iF,
        'stare': this.stare,
        'pennyFace': ia ? ia.face : null,
        'insurance': {
          'amount': this.insurance.amount,
          'won': this.insurance.won
        },
        'skills': this.skills.slice(),
        'redraw': this.redraw,
        'knuckle': this.knuckle,
        'tells': this.tellLog.slice(),
        'fives': this.fives.slice(),
        'wallet': this.wallet,
        'nerve': this.nerve,
        'roundBet': this.roundBet
      };
    }
    ["_view"](iK) {
      let iW = this._hand(iK),
        ic = this.seats[iK.seat],
        iN = iW.cards.filter(ia => !iW.faceDown.has(ia.id)),
        iF = this._legal(iK),
        iI = this.dealer.cards[0x0] && !this.dealer.hidden.has(this.dealer.cards[0x0].id) ? this.dealer.cards[0x0] : null;
      return {
        'law': this.law,
        'room': this.room,
        'cards': iN,
        'value': hH(iW.cards, {
          'split': iW.fromSplit,
          'hiddenIds': iW.faceDown
        }).visible,
        'hidden': iW.faceDown.size,
        'canDouble': iF.includes('double'),
        'canSplit': iF.includes('split'),
        'canSurrender': iF.includes('surrender'),
        'dealerUp': iI,
        'dealerUpBand': iI ? hQ(iI) : null,
        'dealerCards': this.dealer.cards.filter(ia => !this.dealer.hidden.has(ia.id)),
        'seen': this.seen,
        'runningCount': this.runningCount,
        'decksLeft': Math.max(0.5, this.shoe.remaining / 0x33),
        'cycle': null,
        'face': ic.face,
        'round': this.round,
        'bank': ic.kind === 'you' ? this.wallet : ic.bank,
        'untilLint': this.law.lint ? (0x3 - (this.dealCount + 0x1) % 0x3) % 0x3 : null,
        'full': this.full,
        'id': ic.id,
        'ref': iK,
        'handCards': iW.cards.length
      };
    }
    ["view"](iK) {
      return iK ? this._view(iK) : {
        'phase': this.phase,
        'dealer': {
          'id': this.dealerId,
          'cards': this.dealer.cards.slice(),
          'faceDown': [...this.dealer.hidden],
          'value': this._dealerValue(true).visible
        },
        'seats': this.seats.map(iW => ({
          'id': iW.id,
          'kind': iW.kind,
          'bank': iW.kind === 'you' ? this.wallet : iW.bank,
          'face': iW.face,
          'sitout': iW.sitout,
          'rings': iW.rings.map(ic => ic ? {
            'bet': ic.bet,
            'hands': ic.hands.map(iN => ({
              'cards': iN.cards.slice(),
              'faceDown': [...iN.faceDown],
              'value': hH(iN.cards, {
                'split': iN.fromSplit,
                'hiddenIds': iN.faceDown
              }).visible,
              'bet': iN.bet,
              'doubled': iN.doubled,
              'done': iN.done,
              'result': iN.result,
              'keepsake': iN.keepsake
            }))
          } : null)
        })),
        'shoe': {
          'remaining': this.shoe.remaining,
          'dealtSinceShuffle': this.shoe.dealtSinceShuffle,
          'pastCut': this.shoe.pastCut,
          'size': this.shoe.size
        },
        'discard': this.discard,
        'wallet': this.wallet,
        'nerve': this.nerve,
        'bets': this.bets.slice(),
        'stacks': this.stacks.map(iW => iW.slice()),
        'active': this.active,
        'law': this.law.id,
        'room': this.room,
        'round': this.round,
        'keepsakeRing': this.keepsakeRing,
        'stareArmed': this.stareArmed,
        'skillUsed': this.skillUsed
      };
    }
  };
g(hL, 'Table');
var hl = hL,
  hv = ['tallyFaded', 'tallyReprinted', 'leftyFound', 'nibsGone', 'lintOpen', 'sparemanSpoke', 'finale', 'nibsDollar', 'nibsJar'],
  hS = g((iK, iW, ic, iN) => {
    let iF = typeof iK == 'number' && Number.isFinite(iK) ? iK : iW;
    return Math.max(ic, Math.min(iN, iF));
  }, 'num'),
  hE = 0x3b9aca00;
function hM(iK = 0x0) {
  return {
    'v': 0x1,
    'salt': hp(iK),
    'visitNo': 0x0,
    'wallet': a,
    'char': 'wick',
    'howto': false,
    'finder': false,
    'tickets': {},
    'story': {
      'beat': 0x0,
      'visits': 0x0,
      'flags': Object.fromEntries(hv.map(iW => [iW, false]))
    },
    'journal': {},
    'staked': {},
    'stareRightLifetime': 0x0,
    'opened': {
      'coin': 'always'
    },
    'secrets': {},
    'postcards': [],
    'cosmetics': {
      'thankYouChip': false,
      'backs': [],
      'useChip': false,
      'useBack': null
    },
    'stats': {
      'rounds': 0x0,
      'naturals': 0x0,
      'bailouts': 0x0,
      'bestWin': 0x0
    },
    'settings': {
      'chatter': 'full',
      'brisk': false,
      'totals': true,
      'confirmSurrender': true
    }
  };
}
g(hM, 'newProfile');
function hP(iK) {
  let iW = iK;
  try {
    typeof iW == 'string' && (iW = JSON.parse(iW));
  } catch {
    iW = null;
  }
  if (!iW || typeof iW != 'object' || Array.isArray(iW)) return hM(0x0);
  let ic = hM(0x0);
  try {
    typeof iW.salt == 'number' && Number.isFinite(iW.salt) && (ic.salt = iW.salt >>> 0x0), ic.visitNo = Math.floor(hS(iW.visitNo, 0x0, 0x0, 0x989680));
    let iN = iW.wallet;
    if (typeof iN != 'number' && (!iW.v || iW.v < 0x1) && (iN = [iW.dollars, iW.bank, iW.dd, iW.money].find(iG => typeof iG == 'number')), ic.wallet = hr(hS(iN, a, 0x0, hE)), ic.finder = iW.finder === true, ic.char = h0.includes(iW.char) && (iW.char !== 'finder' || ic.finder) ? iW.char : 'wick', ic.howto = iW.howto === true, iW.tickets && typeof iW.tickets == 'object') {
      for (let [iG, ik] of Object.entries(iW.tickets)) hY[iG] && (ic.tickets[iG] = {
        'at': Math.floor(hS(ik && ik.at, 0x0, 0x0, 0x989680)),
        'char': h0.includes(ik && ik.char) ? ik.char : 'wick'
      });
    }
    let iF = iW.story && typeof iW.story == 'object' ? iW.story : {};
    if (ic.story.beat = Math.floor(hS(iF.beat, 0x0, 0x0, 0xc)), ic.story.visits = Math.floor(hS(iF.visits, 0x0, 0x0, 0x989680)), iF.flags && typeof iF.flags == 'object') {
      for (let iJ of hv) ic.story.flags[iJ] = iF.flags[iJ] === true;
    }
    if (ic.story.flags.finale && (ic.finder = true), iW.journal && typeof iW.journal == 'object') for (let [iA, ir] of Object.entries(iW.journal)) {
      if (!ir || typeof ir != 'object' || typeof iA != 'string' || iA.length > 0x28) continue;
      let iL = Math.floor(hS(ir.seen, 0x0, 0x0, 0x989680));
      ic.journal[iA] = {
        'seen': iL,
        'right': Math.floor(hS(ir.right, 0x0, 0x0, iL)),
        'noted': ir.noted === true
      };
    }
    if (iW.staked && typeof iW.staked == 'object') {
      for (let il of h1) typeof iW.staked[il] == 'number' && (ic.staked[il] = hr(hS(iW.staked[il], 0x0, 0x0, hE)));
    }
    if (ic.stareRightLifetime = Math.floor(hS(iW.stareRightLifetime, 0x0, 0x0, 0x989680)), iW.opened && typeof iW.opened == 'object') {
      for (let iv of h4) typeof iW.opened[iv.id] == 'string' && (ic.opened[iv.id] = iW.opened[iv.id]);
    }
    if (iW.secrets && typeof iW.secrets == 'object') {
      for (let iS = 0x1; iS <= 0x7; iS++) iW.secrets[iS] === true && (ic.secrets[iS] = true);
    }
    Array.isArray(iW.postcards) && (ic.postcards = iW.postcards.filter(iE => typeof iE == 'string').slice(0x0, 0xa));
    let iI = iW.cosmetics && typeof iW.cosmetics == 'object' ? iW.cosmetics : {};
    ic.cosmetics.thankYouChip = iI.thankYouChip === true, ic.cosmetics.backs = Array.isArray(iI.backs) ? [...new Set(iI.backs.filter(iE => h0.includes(iE)))] : [], ic.cosmetics.useChip = iI.useChip === true && ic.cosmetics.thankYouChip, ic.cosmetics.useBack = iI.useBack === '52' && ic.story.flags.finale ? '52' : ic.cosmetics.backs.includes(iI.useBack) ? iI.useBack : null;
    let ia = iW.stats && typeof iW.stats == 'object' ? iW.stats : {};
    ic.stats = {
      'rounds': Math.floor(hS(ia.rounds, 0x0, 0x0, 0x3b9aca00)),
      'naturals': Math.floor(hS(ia.naturals, 0x0, 0x0, 0x3b9aca00)),
      'bailouts': Math.floor(hS(ia.bailouts, 0x0, 0x0, 0x3b9aca00)),
      'bestWin': hr(hS(ia.bestWin, 0x0, 0x0, hE))
    };
    let iR = iW.settings && typeof iW.settings == 'object' ? iW.settings : {};
    ic.settings = {
      'chatter': ['full', 'less', 'off'].includes(iR.chatter) ? iR.chatter : 'full',
      'brisk': iR.brisk === true,
      'totals': iR.totals !== false,
      'confirmSurrender': iR.confirmSurrender !== false
    };
  } catch {
    return hM(0x0);
  }
  return ic;
}
g(hP, 'loadProfile');
function hb(iK) {
  return JSON.parse(JSON.stringify(iK));
}
g(hb, 'saveProfile');
function hd(iK) {
  iK.visitNo = (iK.visitNo || 0x0) + 0x1;
  let iW = hp(iK.salt, iK.visitNo),
    ic = hD(iW).fork('spareman'),
    iN = {};
  for (let [iF, iI] of Object.entries(h9)) iN[iF] = {
    'bank': iI
  };
  return {
    'seed': iW,
    'rounds': 0x0,
    'counted': false,
    'beatFired': false,
    'nerve': 0x0,
    'keepsakeUsed': false,
    'tag': false,
    'tagRounds': 0x0,
    'lever': 0x0,
    'stareRight': 0x0,
    'sparemanPresent': iK.story.beat < 0xa && ic.chance(0.25),
    'regulars': iN,
    'keyesCycle': 0x0,
    'roomRounds': {},
    'rummageCooldown': 0x0,
    'requested': false,
    'pennyTails': false,
    'staked': {},
    'drops': []
  };
}
g(hd, 'newVisit');
function x0(iK, iW, ic = 0x0) {
  return hp(iK.seed, "room:" + iW, ic);
}
g(x0, 'tableSeed');
function x1(iK) {
  return Object.keys(iK.tickets).length;
}
g(x1, 'reputation');
function x2(iK, iW) {
  let ic = hy(iW);
  if (!ic) return false;
  let iN = ic.open;
  if (iN.always || iN.ticket && iK.tickets[iN.ticket] || iN.count && x1(iK) >= iN.count || iN.flag && iK.story.flags[iN.flag]) return true;
  if (iN.beat) {
    if (h7[iN.beat - 0x1].room === iW) {
      if (iK.story.beat >= iN.beat - 0x1 && iK.story.visits >= iN.beat - 0x1) return true;
    } else {
      if (iK.story.beat >= iN.beat) return true;
    }
  }
  return false;
}
g(x2, 'roomOpen');
function x3(iK, iW = null) {
  let ic = [];
  iK.opened || (iK.opened = {
    'coin': 'always'
  });
  for (let iN of h4) {
    if (iK.opened[iN.id] || !x2(iK, iN.id)) continue;
    let iF = iN.open,
      iI = iW;
    iI || (iI = iF.ticket && iK.tickets[iF.ticket] ? 'ticket' : iF.count && x1(iK) >= iF.count ? 'count' : iF.flag && iK.story.flags[iF.flag] ? 'secret' : 'story'), iK.opened[iN.id] = iI, ic.push({
      't': 'roomOpened',
      'room': iN.id,
      'by': iI
    });
  }
  return ic;
}
g(x3, 'checkRooms');
function x4(iK, iW, ic) {
  return !hY[iW] || iK.tickets[iW] ? false : (iK.tickets[iW] = {
    'at': iK.visitNo || 0x0,
    'char': h0.includes(ic) ? ic : iK.char || 'wick'
  }, true);
}
g(x4, 'awardTicket');
function x5(iK, iW, ic) {
  let iN = hY[iW];
  if (!iN || iN.room && ic && iN.room !== ic) return [];
  if (!x4(iK, iW, iK.char)) return [];
  let iF = [{
    't': 'ticket',
    'id': iW,
    'text': iN.text,
    'char': iK.char
  }];
  return x1(iK) === 0x14 && iF.push({
    't': 'achievement',
    'id': h8.claims
  }), iF;
}
g(x5, 'ticketEvents');
function x6(iK, iW, ic, iN) {
  let iF = iK.journal[iW] || (iK.journal[iW] = {
    'seen': 0x0,
    'right': 0x0,
    'noted': false
  });
  return ic ? (iF.seen++, iN && iF.right++, !iF.noted && iF.seen >= 0x6 && iF.right / iF.seen >= 0.6 ? (iF.noted = true, [{
    't': 'journalNote',
    'tellId': iW,
    'right': iF.right,
    'seen': iF.seen
  }]) : []) : [];
}
g(x6, 'journalObserve');
function x7(iK, iW, ic) {
  let iN = [],
    iF = ic.room;
  if (ic.law === 'finale') return iN;
  let iI = ir => iN.push(...x5(iK, ir, iF));
  iW.rounds++, iW.roomRounds[iF] = (iW.roomRounds[iF] || 0x0) + 0x1, iW.rummageCooldown > 0x0 && iW.rummageCooldown--, iK.stats.rounds++, typeof ic.wallet == 'number' && (iK.wallet = hr(Math.max(0x0, Math.min(hE, ic.wallet)))), typeof ic.nerve == 'number' && (iW.nerve = ic.nerve);
  let ia = ic.you.hands,
    iR = ir => ir.outcome === 'win' || ir.outcome === 'natural',
    iG = ic.dealer,
    ik = hg(iG.up);
  ic.you.net > iK.stats.bestWin && (iK.stats.bestWin = ic.you.net);
  for (let ir of ia) {
    if (ir.natural && (iK.stats.naturals++, iI('NATURAL')), iR(ir) && ir.stoodOn === 0x10 && !ir.stoodSoft && ik && ir.cards.length >= 0x2 && iI('SIXTEEN'), iR(ir) && ir.cards.length >= 0x5) {
      let iL = iN.length;
      iI('FIVE_CARD'), iN.length > iL && iN.push({
        't': 'achievement',
        'id': h8.five
      });
    }
    ir.doubledOn && ir.doubledOn.total === 0xb && !ir.doubledOn.soft && hU(ir.doubleCard) && iI('DOUBLE_FACE'), iR(ir) && ir.ticket && iI('BUS_TICKET'), iF === 'glasses' && iG.twoCardTotal === 0x14 && ir.total === 0x15 && iI('SEEN_21'), ir.lintBust && iI('LINT_BUST'), iR(ir) && ir.doubled && ik && ic.dealerId === 'dogear' && iI('WELL_PLAYED'), ir.surrendered && iI('SURRENDER'), ir.glow === 'LOW' && ir.glowHit && ir.total === 0x15 && iI('GLOW_21'), ic.knuckle === 'LOW' && ir.stoodOn >= 0xc && ir.stoodOn <= 0x10 && iR(ir) && iI('KNUCKLE_12');
  }
  let iJ = {};
  for (let il of ia) (iJ[il.ring] = iJ[il.ring] || []).push(il);
  for (let iv of Object.values(iJ)) iv.length === 0x2 && iv.every(iS => iS.split) && iv.every(iR) && iI('SPLIT_WIN');
  if (ic.you.rings === 0x3 && Object.keys(iJ).length === 0x3 && ia.every(iR) && iI('THREE_RINGS'), ic.insurance && ic.insurance.won && iI('INSURED'), ic.skills.some(iS => iS.kind === 'snag') && iG.bust && iI('SNAG_BUST'), ic.redraw) {
    let iS = ia.find(iM => iM.ring === ic.redraw.a.ring && iM.hand === ic.redraw.a.hand),
      iE = ia.find(iM => iM.ring === ic.redraw.b.ring && iM.hand === ic.redraw.b.hand);
    iS && iE && iR(iS) && iR(iE) && iI('REDRAW_TWO');
  }
  let iA = ic.ai || {};
  iA.nibs && (iA.nibs.outcome === 'win' || iA.nibs.outcome === 'natural') && iI('NIBS_ONE'), (ic.fives || []).includes('bunnie') && iI('BUNNIE_FIVE'), iA.keyes && (iA.keyes.hands || []).some(iM => iM.total === 0x15) && iI('KEYES_21'), ic.keepsake ? (iW.keepsakeUsed = true, ic.keepsake === 'win' && iI('CLAIMED'), ic.keepsake === 'lose' && (iW.tag = true, iW.tagRounds = 0x0)) : iW.tag && (iW.tagRounds++, iW.tagRounds === 0x3 && iI('UNCLAIMED')), ic.stare && ic.stare.right && (iW.stareRight++, iW.stareRight >= 0x3 && iI('CORNER'), ic.stare.dealer === 'dogear' && (iK.stareRightLifetime++, iK.stareRightLifetime === 0xa && (iK.secrets[0x3] = true, iN.push({
    't': 'secret',
    'id': 0x3,
    'kind': 'stare'
  }, {
    't': 'achievement',
    'id': h8.corner
  }))));
  for (let iM of ic.tells || []) iN.push(...x6(iK, iM.tellId, iM.shown, iM.truth));
  return !iW.counted && iW.rounds >= hx && (iW.counted = true, iK.story.visits++, iN.push({
    't': 'visitCounted',
    'visits': iK.story.visits
  }), iK.story.visits === 0x1 && iN.push({
    't': 'achievement',
    'id': h8.visit
  })), iN.push(...x3(iK)), iN;
}
g(x7, 'onRoundEnd');
function x8(iK, iW, ic, iN) {
  let iF = iK.story.beat + 0x1;
  if (iF > h7.length || iW.beatFired || iK.story.visits < iF - 0x1) return null;
  let iI = h7[iF - 0x1];
  return iI.room !== ic ? iN === 'sit' && !iW.requested ? (iW.requested = true, {
    'request': iI.room,
    'beat': iI
  }) : null : iI.at !== iN || iN === 'after2' && (iW.roomRounds[ic] || 0x0) < 0x2 ? null : iI;
}
g(x8, 'beatDue');
function x9(iK, iW, ic, iN = {}) {
  let iF = iK.story.beat + 0x1,
    iI = h7[iF - 0x1];
  if (!iI || iI.id !== ic || iW.beatFired) return [{
    't': 'illegal',
    'action': 'beat',
    'reason': 'notdue'
  }];
  let ia = iK.story.flags,
    iR = [];
  if (iW.beatFired = true, iW.rummageCooldown = Math.max(iW.rummageCooldown, 0x1), ic === 'reprint' && iN.accept === false) return [{
    't': 'beatDeferred',
    'id': ic,
    'n': iI.n
  }];
  switch (iK.story.beat = iI.n, iR.push({
    't': 'beat',
    'id': ic,
    'n': iI.n
  }), ic) {
    case 'tally_fades':
      ia.tallyFaded = true;
      break;
    case 'nibs_jar':
      ia.nibsJar = true;
      break;
    case 'penny_taken':
      iW.pennyTails = true;
      break;
    case 'lefty_found':
      ia.leftyFound = true, iK.postcards.includes('lefty') || iK.postcards.push('lefty');
      break;
    case 'reprint':
      ia.tallyReprinted = true, ia.tallyFaded = false;
      break;
    case 'pillow':
      ia.nibsGone = true, ia.nibsDollar && (iK.cosmetics.thankYouChip = true, iK.secrets[0x6] = true, iR.push({
        't': 'secret',
        'id': 0x6,
        'kind': 'nibsDollar'
      }));
      break;
    case 'eleventh_key':
      ia.lintOpen = true;
      break;
    case 'spareman_speaks':
      ia.sparemanSpoke = true;
      break;
    case 'last_call':
      ia.finale = true, iK.finder = true, iR.push(...x5(iK, 'FIFTY_TWO', null)), iR.push({
        't': 'achievement',
        'id': h8.finale
      });
      break;
    default:
      break;
  }
  return iR.push(...x3(iK, 'story')), iR;
}
g(x9, 'playBeat');
function xh(iK, iW) {
  return iW ? iW.phase !== 'bet' || iW.bets.some(ic => ic > 0x0) ? false : iW.wallet < k : iK.wallet < k;
}
g(xh, 'needsBailout');
function xx(iK, iW = null) {
  let ic = iK.stats.bailouts === 0x0;
  return iK.stats.bailouts++, iK.wallet = hr(iK.wallet + n), iW && iW.credit(n), {
    'amount': n,
    'first': ic,
    'events': [{
      't': 'bailout',
      'amount': n,
      'first': ic
    }]
  };
}
g(xx, 'bailout');
function xu(iK, iW, ic, iN = {}) {
  let iF = [],
    iI = ia => {
      let iR = !iK.secrets[ia];
      iK.secrets[ia] = true, iF.push({
        't': 'secret',
        'id': ia,
        'kind': ic,
        'first': iR
      });
    };
  if (ic === 'shoeClick') iN.dealtSinceShuffle === 0x33 && (iI(0x1), iF.push(...x5(iK, 'FIFTY_ONE', null)));else {
    if (ic === 'lever') {
      if ((iN.room || 'coin') !== 'coin') return iF;
      iW.lever++, iF.push({
        't': 'lever',
        'pulls': iW.lever
      }), iW.lever === 0xb && (iI(0x2), iK.story.flags.lintOpen = true, iF.push(...x5(iK, 'LEVER', 'coin')), iF.push(...x3(iK, 'secret')));
    } else {
      if (ic === 'signHover') (iN.seconds || 0x0) >= 0x1e && iI(0x4);else {
        if (ic === 'pennyEdge') iN.face === 'EDGE' && iN.natural && iI(0x5);else {
          if (ic === 'keepsakeItem' && (iN.room || 'lint') === 'lint') {
            let ia = iN.char || iK.char;
            h0.includes(ia) && !iK.cosmetics.backs.includes(ia) && iK.cosmetics.backs.push(ia), iI(0x7);
          }
        }
      }
    }
  }
  return iF;
}
g(xu, 'secretCheck');
var xi = {
    'ink': "#1b140f",
    'shadow': "#0f0b09",
    'box0': "#4a3526",
    'box1': "#7a5a3e",
    'box2': "#b08c62",
    'lint': "#8f8a82",
    'moss': "#3d5638",
    'plush': "#62202a",
    'brass': "#c29a45",
    'ivory': "#efe6cf",
    'inkred': "#b0302a",
    'navy': "#2a3a64",
    'fluoro': "#e6eedc",
    'white': "#ffffff",
    'sel': "#ffff00",
    'void': "#000000",
    'dw0': "#0b0614",
    'dw1': "#170c26",
    'dw2': "#2a1742",
    'dw3': "#4a2a73",
    'dw4': "#7b52b8",
    'dw5': "#b89af0",
    'gold0': "#5e3a0c",
    'gold1': "#a8741c",
    'gold2': "#e8b43c",
    'gold3': "#ffe89a",
    'rail0': "#0e0812",
    'rail1': "#221430",
    'rail2': "#3a2352",
    'rail3': "#5c3a80",
    'orange': "#ff7f27",
    'grey': "#7f7f8a",
    'paper': "#d9ccae",
    'panel': "#f6e7bd",
    'cardred': "#c8203a",
    'cardblk': "#1f1830"
  },
  xy = {
    'ink': 'shadow',
    'shadow': 'shadow',
    'box0': 'shadow',
    'box1': 'box0',
    'box2': 'box1',
    'lint': 'box0',
    'moss': "#27371f",
    'plush': "#3f1219",
    'brass': 'box1',
    'ivory': 'box2',
    'inkred': 'plush',
    'navy': "#1b2544",
    'fluoro': 'lint',
    'white': 'ivory',
    'sel': 'gold2',
    'void': 'void',
    'dw0': 'void',
    'dw1': 'dw0',
    'dw2': 'dw1',
    'dw3': 'dw2',
    'dw4': 'dw3',
    'dw5': 'dw4',
    'gold0': "#3a2306",
    'gold1': 'gold0',
    'gold2': 'gold1',
    'gold3': 'gold2',
    'rail0': 'void',
    'rail1': 'rail0',
    'rail2': 'rail1',
    'rail3': 'rail2',
    'orange': "#a04a10",
    'grey': "#4a4a52",
    'paper': 'box2',
    'panel': 'ivory',
    'cardred': 'inkred',
    'cardblk': 'shadow'
  },
  xY = g((iK, iW) => iW && iW[0x0] === '#' ? iW : iK[iW] || xi[iW] || "#ff00ff", 'hexOf'),
  xj = Object.fromEntries(Object.keys(xi).map(iK => [iK, xY(xi, xy[iK])])),
  xp = {
    'coin': ["#052620", "#093a2e", "#0e5040", "#166b55"],
    'glasses': ["#06143a", "#0b2255", "#123272", "#1d4896"],
    'violin': ["#280512", "#410a20", "#5a112f", "#7a1b43"],
    'lint': ["#18142a", "#241e38", "#312a4b", "#453b63"]
  };
xp.finale = xp.coin;
var xD = 0x27,
  xQ = 0x37,
  xg = 0xe,
  xU = 0x1a,
  xZ = 0x24,
  xw = m || ['buttons', 'keys', 'socks', 'coins'],
  xC = o || ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  xB = new Set(t || ['buttons', 'keys']),
  xO = f || [0x1, 0x5, 0x19, 0x64, 0x1f4],
  xm = null;
function xH(iK) {
  xm = typeof iK == 'function' ? iK : null, uv();
}
g(xH, 'setCanvasFactory');
function xT(iK, iW) {
  if (xm) return xm(iK, iW);
  if (typeof document < 'u' && document.createElement) {
    let ic = document.createElement('canvas');
    return ic.width = iK, ic.height = iW, ic;
  }
  return typeof OffscreenCanvas < 'u' ? new OffscreenCanvas(iK, iW) : null;
}
g(xT, 'newCanvas');
var xq = new Map();
function xX(iK) {
  let iW = xq.get(iK);
  if (iW) return iW;
  let ic = parseInt(iK.slice(0x1), 0x10);
  return iW = [ic >> 0x10 & 0xff, ic >> 0x8 & 0xff, ic & 0xff], xq.set(iK, iW), iW;
}
g(xX, 'rgb');
var xV = class yx {
  constructor(iK, iW) {
    this.w = iK, this.h = iW, this.p = new Array(iK * iW).fill(null);
  }
  ["set"](iK, iW, ic) {
    iK |= 0x0, iW |= 0x0, iK >= 0x0 && iW >= 0x0 && iK < this.w && iW < this.h && (this.p[iW * this.w + iK] = ic);
  }
  ["get"](iK, iW) {
    return iK >= 0x0 && iW >= 0x0 && iK < this.w && iW < this.h ? this.p[iW * this.w + iK] : null;
  }
  ["rect"](iK, iW, ic, iN, iF) {
    for (let iI = 0x0; iI < iN; iI++) for (let ia = 0x0; ia < ic; ia++) this.set(iK + ia, iW + iI, iF);
  }
  ["stamp"](iK, iW, ic, iN, {
    flip: iF = false,
    mirror: iI = false,
    only: ia = null
  } = {}) {
    let iR = iK.length;
    for (let iG = 0x0; iG < iR; iG++) {
      let ik = iK[iF ? iR - 0x1 - iG : iG],
        iJ = ik.length;
      for (let iA = 0x0; iA < iJ; iA++) {
        let ir = ik[iF || iI ? iJ - 0x1 - iA : iA];
        if (ir === '.' || ir === '\x20') continue;
        let iL = iN[ir];
        iL && (ia && !ia(iW + iA, ic + iG) || this.set(iW + iA, ic + iG, iL));
      }
    }
  }
  ["toCanvas"](iK = xi, iW = 0x1) {
    let ic = xT(this.w * iW, this.h * iW);
    if (!ic) return null;
    let iN = ic.getContext('2d'),
      iF = iN.createImageData(this.w * iW, this.h * iW),
      iI = iF.data,
      ia = this.w * iW;
    for (let iR = 0x0; iR < this.h; iR++) for (let iG = 0x0; iG < this.w; iG++) {
      let ik = this.p[iR * this.w + iG];
      if (!ik) continue;
      let [iJ, iA, ir] = xX(xY(iK, ik));
      for (let iL = 0x0; iL < iW; iL++) for (let il = 0x0; il < iW; il++) {
        let iv = ((iR * iW + iL) * ia + iG * iW + il) * 0x4;
        iI[iv] = iJ, iI[iv + 0x1] = iA, iI[iv + 0x2] = ir, iI[iv + 0x3] = 0xff;
      }
    }
    return iN.putImageData(iF, 0x0, 0x0), ic;
  }
  ["toMap"]() {
    let iK = {},
      iW = new Map(),
      ic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      iN = [];
    for (let iF = 0x0; iF < this.h; iF++) {
      let iI = '';
      for (let ia = 0x0; ia < this.w; ia++) {
        let iR = this.p[iF * this.w + ia];
        if (!iR) {
          iI += '.';
          continue;
        }
        let iG = iW.get(iR);
        iG || (iG = ic[iW.size] || '?', iW.set(iR, iG), iK[iG] = iR), iI += iG;
      }
      iN.push(iI);
    }
    return {
      'w': this.w,
      'h': this.h,
      'pal': iK,
      'rows': iN
    };
  }
};
g(xV, 'PB');
var xz = xV,
  xo = new WeakMap(),
  xK = new WeakMap(),
  xW = 0x1;
function xc(iK) {
  let iW = xK.get(iK);
  return iW || (iW = xW++, xK.set(iK, iW)), iW;
}
g(xc, 'palId');
function xN(iK, iW = 0x0) {
  if (!iK) return null;
  if (iK.rows) return iK.rows;
  let ic = iK.frames;
  if (!ic) return null;
  if (Array.isArray(ic)) return ic[(iW | 0x0) % ic.length] || ic[0x0];
  if (typeof iW == 'string') {
    let iF = iW.indexOf(':'),
      iI = iF >= 0x0 ? iW.slice(0x0, iF) : iW,
      ia = iF >= 0x0 ? +iW.slice(iF + 0x1) : 0x0,
      iR = ic[iI];
    return !iR || !iR.length ? null : iR[(ia | 0x0) % iR.length] || iR[0x0];
  }
  let iN = ic.idle || ic[Object.keys(ic)[0x0]];
  return !iN || !iN.length ? null : iN[(iW | 0x0) % iN.length];
}
g(xN, 'frameRows');
function xF(iK, iW = 0x0, ic = xi, iN = 0x1) {
  if (!iK) return null;
  let iF = xo.get(iK);
  iF || (iF = new Map(), xo.set(iK, iF));
  let iI = iW + '|' + xc(ic) + '|' + iN;
  if (iF.has(iI)) return iF.get(iI);
  let ia = xN(iK, iW),
    iR = null;
  if (ia) {
    let iG = new xz(iK.w || ia[0x0].length, iK.h || ia.length),
      ik = {};
    for (let iJ in iK.pal) ik[iJ] = iK.pal[iJ];
    iG.stamp(ia, 0x0, 0x0, ik), iR = iG.toCanvas(ic, iN);
  }
  return iF.set(iI, iR), iR;
}
g(xF, 'bake');
var xf = {
  'A': [".#.", "#.#", "###", "#.#", "#.#"],
  0x2: ["##.", "..#", ".#.", "#..", "###"],
  0x3: ["##.", "..#", ".#.", "..#", "##."],
  0x4: ["#.#", "#.#", "###", "..#", "..#"],
  0x5: ["###", "#..", "##.", "..#", "##."],
  0x6: [".##", "#..", "###", "#.#", "###"],
  0x7: ["###", "..#", ".#.", ".#.", ".#."],
  0x8: ["###", "#.#", ".#.", "#.#", "###"],
  0x9: ["###", "#.#", "###", "..#", "##."],
  0xa: ["#.###", "#.#.#", "#.#.#", "#.#.#", "#.###"],
  'J': ["..#", "..#", "..#", "#.#", ".#."],
  'Q': [".#.", "#.#", "#.#", "#.#", ".##"],
  'K': ["#.#", "#.#", "##.", "#.#", "#.#"],
  0x0: ["###", "#.#", "#.#", "#.#", "###"],
  0x1: [".#.", "##.", ".#.", ".#.", "###"],
  '?': ["##.", "..#", ".#.", "...", ".#."],
  'R': ["##.", "#.#", "##.", "#.#", "#.#"],
  'O': [".#.", "#.#", "#.#", "#.#", ".#."],
  'U': ["#.#", "#.#", "#.#", "#.#", "###"],
  'T': ["###", ".#.", ".#.", ".#.", ".#."],
  'E': ["###", "#..", "##.", "#..", "###"],
  'N': ["#.#", "###", "###", "#.#", "#.#"],
  'S': [".##", "#..", ".#.", "..#", "##."],
  'L': ["#..", "#..", "#..", "#..", "###"],
  'I': ["###", ".#.", ".#.", ".#.", "###"],
  'C': [".##", "#..", "#..", "#..", ".##"],
  'D': ["##.", "#.#", "#.#", "#.#", "##."],
  'M': ["#.#", "###", "###", "#.#", "#.#"],
  'F': ["###", "#..", "##.", "#..", "#.."],
  'H': ["#.#", "#.#", "###", "#.#", "#.#"],
  'Y': ["#.#", "#.#", ".#.", ".#.", ".#."],
  'W': ["#.#", "#.#", "#.#", "###", "#.#"],
  'P': ["##.", "#.#", "##.", "#..", "#.."],
  'A2': [".#.", "#.#", "###", "#.#", "#.#"]
};
function xI(iK, iW, ic, iN, iF) {
  let iI = ic;
  for (let ia of String(iW)) {
    if (ia === '\x20') {
      iI += 0x2;
      continue;
    }
    let iR = xf[ia];
    if (!iR) {
      iI += 0x4;
      continue;
    }
    iK.stamp(iR, iI, iN, {
      '#': iF
    }), iI += iR[0x0].length + 0x1;
  }
  return iI - ic - 0x1;
}
g(xI, 'micro');
var xa = g(iK => {
    let iW = 0x0;
    for (let ic of String(iK)) iW += ic === '\x20' ? 0x2 : xf[ic] ? xf[ic][0x0].length + 0x1 : 0x4;
    return Math.max(0x0, iW - 0x1);
  }, 'microW'),
  xR = {
    'buttons': 'heart',
    'keys': 'diamond',
    'socks': 'spade',
    'coins': 'club'
  },
  xG = g(iK => xR[iK] || iK, 'shownOf'),
  xk = {
    'heart': [".#.#.", "#####", "#####", ".###.", "..#.."],
    'diamond': ["..#..", ".###.", "#####", ".###.", "..#.."],
    'spade': ["..#..", ".###.", "#####", "#####", ".#.#."],
    'club': [".###.", ".###.", "##.##", "#####", ".#.#."]
  },
  xJ = {
    'heart': [".#.#.", "#####", "#####", ".###.", "..#..", "....."],
    'diamond': ["..#..", ".###.", "#####", ".###.", "..#..", "....."],
    'spade': ["..#..", ".###.", "#####", "#####", "..#..", ".###."],
    'club': [".###.", ".###.", "##.##", "#####", "..#..", ".###."]
  },
  xA = {
    'heart': [".##...##.", "####.####", "#########", "#########", "#########", ".#######.", "..#####..", "...###...", "....#...."],
    'diamond': ["....#....", "...###...", "..#####..", ".#######.", "#########", ".#######.", "..#####..", "...###...", "....#...."],
    'spade': ["....#....", "...###...", "..#####..", ".#######.", "#########", "#########", ".##.#.##.", "....#....", "...###..."],
    'club': ["...###...", "..#####..", "..#####..", ".##.#.##.", "#########", "#########", ".##.#.##.", "....#....", "...###..."]
  },
  xr = Object.fromEntries(xw.map(iK => [iK, xA[xG(iK)] || xA.heart])),
  xL = 0x7,
  xl = 0xb,
  xv = 0xf,
  xS = {
    0x2: [[xl, 0x4], [xl, 0x1a]],
    0x3: [[xl, 0x4], [xl, 0xf], [xl, 0x1a]],
    0x4: [[xL, 0x4], [xv, 0x4], [xL, 0x1a], [xv, 0x1a]],
    0x5: [[xL, 0x4], [xv, 0x4], [xl, 0xf], [xL, 0x1a], [xv, 0x1a]],
    0x6: [[xL, 0x4], [xv, 0x4], [xL, 0xf], [xv, 0xf], [xL, 0x1a], [xv, 0x1a]],
    0x7: [[xL, 0x4], [xv, 0x4], [xl, 0x9], [xL, 0xf], [xv, 0xf], [xL, 0x1a], [xv, 0x1a]],
    0x8: [[xL, 0x4], [xv, 0x4], [xl, 0x9], [xL, 0xf], [xv, 0xf], [xl, 0x15], [xL, 0x1a], [xv, 0x1a]],
    0x9: [[xL, 0x4], [xv, 0x4], [xL, 0xb], [xv, 0xb], [xl, 0xf], [xL, 0x13], [xv, 0x13], [xL, 0x1a], [xv, 0x1a]],
    0xa: [[xL, 0x4], [xv, 0x4], [xl, 0x8], [xL, 0xb], [xv, 0xb], [xL, 0x13], [xv, 0x13], [xl, 0x16], [xL, 0x1a], [xv, 0x1a]]
  },
  xE = xf[0xa],
  xM = {
    'K': ["#.#.#.#.#", "#########", "#.#.#.#.#", "#########"],
    'Q': ["....#....", ".#.###.#.", "#########", ".#######."],
    'J': [".......##", ".....###.", "########.", "#########"]
  },
  xP = {
    'J': ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
    'Q': [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
    'K': ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"]
  },
  xb = g((iK, iW, ic, iN, iF) => {
    let iI = xP[iW];
    for (let ia = 0x0; ia < iI.length; ia++) for (let iR = 0x0; iR < iI[ia].length; iR++) iI[ia][iR] === '#' && iK.rect(ic + iR * 0x2, iN + ia * 0x2, 0x2, 0x2, iF);
  }, 'bigGlyph'),
  xd = {
    'J': xM.J,
    'Q': xM.Q,
    'K': xM.K
  },
  u0 = {},
  u1 = [],
  u2 = ['coffee', 'tally', 'nick', 'residue', 'crease', 'ripple', 'crayon', 'thumb', 'pinhole', 'price'],
  u3 = {
    '7:keys': {
      'kind': 'coffee',
      'at': 0x2,
      'name': "the coffee ring on the 7 of KEYS"
    },
    '2:socks': {
      'kind': 'tooth',
      'at': 0x1,
      'name': "a tooth mark on the 2 of SOCKS"
    },
    'K:coins': {
      'kind': 'crayon',
      'at': 0x3,
      'name': "a brown crayon moustache on the KING of COINS"
    },
    'A:buttons': {
      'kind': 'price',
      'at': 0x0,
      'name': "a 5c price sticker on the ACE of BUTTONS"
    },
    '10:socks': {
      'kind': 'crease',
      'at': 0x1,
      'name': "the long crease across the 10 of SOCKS"
    },
    'J:keys': {
      'kind': 'pinhole',
      'at': 0x2,
      'name': "a pin hole through the JACK of KEYS"
    }
  };
function u4(iK) {
  if (!iK || iK.rank === 'TICKET') return null;
  let iW = u3[iK.rank + ':' + iK.suit];
  if (iW) return {
    'kind': iW.kind,
    'at': iW.at,
    'named': true
  };
  let ic = Math.max(0x0, xC.indexOf(iK.rank)),
    iN = Math.max(0x0, xw.indexOf(iK.suit));
  return {
    'kind': u2[(iN * 0x7 + ic * 0x3) % 0xa],
    'at': (ic + iN * 0x5) % 0x4,
    'named': false
  };
}
g(u4, 'flawOf');
function u5(iK) {
  let iW = xU,
    ic = xZ;
  iK.rect(0x1, 0x1, iW - 0x2, ic - 0x2, 'ivory');
  for (let iN = 0x2; iN < iW - 0x2; iN++) iK.set(iN, 0x0, 'ink'), iK.set(iN, ic - 0x1, 'ink');
  for (let iF = 0x2; iF < ic - 0x2; iF++) iK.set(0x0, iF, 'ink'), iK.set(iW - 0x1, iF, 'ink');
  iK.set(0x1, 0x1, 'ink'), iK.set(iW - 0x2, 0x1, 'ink'), iK.set(0x1, ic - 0x2, 'ink'), iK.set(iW - 0x2, ic - 0x2, 'ink');
  for (let iI = 0x2; iI < ic - 0x2; iI++) iK.set(iW - 0x2, iI, 'paper');
  for (let ia = 0x2; ia < iW - 0x2; ia++) iK.set(ia, ic - 0x2, 'paper');
  for (let iR = 0x2; iR < iW - 0x2; iR++) iK.set(iR, 0x1, 'white');
  for (let iG = 0x2; iG < ic - 0x2; iG++) iK.set(0x1, iG, 'white');
}
g(u5, 'cardOutline');
var u6 = g(iK => xB.has(iK) ? 'cardred' : 'cardblk', 'inkOf');
function u7(iK, iW, ic, iN, iF, iI) {
  iK.stamp(xJ[iW] || xJ.heart, ic, iN, {
    '#': iF
  }, {
    'flip': iI
  });
}
g(u7, 'stampPip');
function u8(iK, iW, ic = {}) {
  let iN = new xz(xU, xZ);
  if (u5(iN), !iK) return iN;
  if (iK.rank === 'TICKET') return u9();
  let iF = xG(iK.suit),
    iI = u6(iK.suit),
    ia = iK.rank,
    iR = ia === '10' ? xE : xf[ia] || xf['?'],
    iG = iR[0x0].length,
    ik = ia === '10' ? 0x1 : 0x2;
  if (iN.stamp(iR, ik, 0x3, {
    '#': iI
  }), iN.stamp(xk[iF], 0x1, 0x9, {
    '#': iI
  }), iN.stamp(iR, xU - ik - iG, xZ - 0x8, {
    '#': iI
  }, {
    'flip': true,
    'mirror': true
  }), iN.stamp(xk[iF], xU - 0x6, xZ - 0xe, {
    '#': iI
  }, {
    'flip': true,
    'mirror': true
  }), ia === 'J' || ia === 'Q' || ia === 'K') {
    for (let iJ = 0x3; iJ <= 0x20; iJ++) for (let iA = 0x6; iA <= 0x13; iA++) iN.set(iA, iJ, iA === 0x6 || iA === 0x13 || iJ === 0x3 || iJ === 0x20 ? 'gold1' : 'panel');
    iN.stamp(xM[ia], 0x8, 0x5, {
      '#': 'gold2'
    });
    for (let ir = 0x0; ir < 0x9; ir++) xM[ia][0x0][ir] === '#' && iN.set(0x8 + ir, 0x5, 'gold3');
    xb(iN, ia, 0x8, 0xa, iI), iN.stamp(xk[iF], 0xa, 0x1a, {
      '#': iI
    }), ia === 'Q' && iK.suit === 'buttons' && ic.dogear && (iN.set(0x18, 0x1, null), iN.set(0x17, 0x0, null), iN.set(0x18, 0x0, null), iN.set(0x19, 0x2, null), iN.set(0x16, 0x1, 'paper'), iN.set(0x17, 0x1, 'paper'), iN.set(0x17, 0x2, 'paper'), iN.set(0x18, 0x2, 'ink'), iN.set(0x18, 0x3, 'ink'), iN.set(0x16, 0x0, 'ink'));
  } else {
    if (ia === 'A') {
      if (iN.stamp(xA[iF], 0x8, 0xd, {
        '#': iI
      }), iF === 'spade') {
        for (let [iL, il] of [[0xc, 0x10], [0xb, 0x11], [0xd, 0x11]]) iN.set(iL, il, 'gold2');
      }
    } else {
      let iv = +ia;
      for (let [iS, iE] of xS[iv] || []) u7(iN, iF, iS, iE, iI, iE > 0x11);
    }
  }
  return iN;
}
g(u8, 'faceBuffer');
function u9() {
  let iK = new xz(xU, xZ);
  u5(iK);
  for (let iW = 0x2; iW < xU - 0x2; iW += 0x2) iK.set(iW, 0x2, 'navy'), iK.set(iW, xZ - 0x3, 'navy');
  xI(iK, 'WILD', 0x5, 0x5, 'navy'), ((ic, iN, iF) => {
    let iI = xf[ic];
    for (let ia = 0x0; ia < 0x5; ia++) for (let iR = 0x0; iR < 0x3; iR++) iI[ia][iR] === '#' && iK.rect(iN + iR * 0x2, iF + ia * 0x2, 0x2, 0x2, 'navy');
  })('?', 0xa, 0xd);
  for (let ic = 0x2; ic < xU - 0x2; ic++) for (let iN = 0x1a; iN < 0x1d; iN++) (ic + iN & 0x3) < 0x2 && iK.set(ic, iN, 'cardred');
  return iK;
}
g(u9, 'ticketBuffer');
function uh(iK) {
  let iW = new xz(xU, xZ);
  u5(iW), iW.rect(0x2, 0x2, xU - 0x4, xZ - 0x4, 'dw2');
  for (let iI = 0x3; iI < xU - 0x3; iI++) iW.set(iI, 0x3, 'gold1'), iW.set(iI, xZ - 0x4, 'gold1');
  for (let ia = 0x3; ia < xZ - 0x3; ia++) iW.set(0x3, ia, 'gold1'), iW.set(xU - 0x4, ia, 'gold1');
  for (let iR = 0x5; iR < xZ - 0x5; iR++) for (let iG = 0x5; iG < xU - 0x5; iG++) {
    let ik = (iG + iR) % 0x4 === 0x0,
      iJ = (iG - iR + 0x40) % 0x4 === 0x0;
    iW.set(iG, iR, ik && iJ ? 'dw4' : ik || iJ ? 'dw3' : 'dw1');
  }
  let ic = 0xd,
    iN = 0x12;
  for (let iA = iN - 0x9; iA <= iN + 0x9; iA++) for (let ir = ic - 0x7; ir <= ic + 0x7; ir++) {
    let iL = Math.abs(ir + 0.5 - ic) / 0x7 + Math.abs(iA + 0.5 - iN) / 0x9;
    iL <= 1.08 && iL > 0.92 ? iW.set(ir, iA, 'ink') : iL <= 0.92 && iL > 0.7 ? iW.set(ir, iA, ir < ic == iA < iN ? 'gold3' : 'gold2') : iL <= 0.7 && iW.set(ir, iA, 'dw1');
  }
  let iF = iK === '52' ? 'white' : 'gold2';
  return iW.rect(0xc, 0xe, 0x2, 0x8, iF), iW.rect(0x9, 0x11, 0x8, 0x2, iF), iW.rect(0xb, 0x10, 0x4, 0x4, iF), iW;
}
g(uh, 'backBuffer');
var ux = {
  0x1: {
    'c': "#ecebf4",
    'w': "#7b52b8",
    'd': "#a9a4c2",
    'l': "#ffffff",
    't': "#4a2a73"
  },
  0x5: {
    'c': "#d8283f",
    'w': "#ffffff",
    'd': "#8e1328",
    'l': "#f06a7c",
    't': "#ffffff"
  },
  0x19: {
    'c': "#1fa45e",
    'w': "#ffffff",
    'd': "#0d6537",
    'l': "#5bd594",
    't': "#ffffff"
  },
  0x64: {
    'c': "#2c2540",
    'w': "#e8b43c",
    'd': "#16111f",
    'l': "#4d4466",
    't': "#ffe89a"
  },
  0x1f4: {
    'c': "#8a3fe0",
    'w': "#ffe89a",
    'd': "#4f1f94",
    'l': "#b98af7",
    't': "#ffe89a"
  }
};
ux[0.5] = ux[0x1];
var uu = {
  0x1: ['.#', '##', '.#', '.#', '.#'],
  0x2: xf[0x2],
  0x5: xf[0x5],
  0x0: xf[0x0]
};
function ui(iK) {
  let iW = [];
  for (let ia = 0x0; ia < 0x12; ia++) {
    let iR = '';
    for (let iG = 0x0; iG < 0x12; iG++) {
      let ik = iG + 0.5 - 0x9,
        iJ = ia + 0.5 - 0x9,
        iA = Math.hypot(ik, iJ),
        ir = (Math.atan2(iJ, ik) / (Math.PI * 0x2) + 0x1) % 0x1,
        iL = '.';
      iA <= 8.9 && (iA > 0x8 ? iL = 'k' : iA > 6.6 ? iL = Math.floor(ir * 0x10 + 0.5) % 0x2 === 0x0 ? 'w' : ik + iJ > 0x7 ? 'd' : 'c' : iA > 5.9 ? iL = 'd' : iL = ik + iJ < -5.5 && iA > 0x4 ? 'l' : 'c'), iR += iL;
    }
    iW.push(iR.split(''));
  }
  let ic = [...(iK === 0.5 ? '' : String(iK))].map(il => uu[il] || xf[il]),
    iN = ic.reduce((il, iv) => il + iv[0x0].length, 0x0) + Math.max(0x0, ic.length - 0x1),
    iF = Math.round(0x9 - iN / 0x2),
    iI = 0x7;
  for (let il of ic) {
    for (let iv = 0x0; iv < 0x5; iv++) for (let iS = 0x0; iS < il[iv].length; iS++) il[iv][iS] === '#' && (iW[iI + iv][iF + iS] = 't');
    iF += il[0x0].length + 0x1;
  }
  if (iK === 0.5) {
    for (let iE = 0x0; iE < 0x12; iE++) for (let iM = 0xa; iM < 0x12; iM++) iW[iE][iM] = iM === 0xa && iW[iE][iM] !== '.' ? 'k' : '.';
  }
  return iW.map(iP => iP.join(''));
}
g(ui, 'chipTopRows');
var uy = [".kkkkkkkkkkkkkk.", 'kllllllllllllllk', 'kcwwccwwccwwccck', 'kdwwddwwddwwdddk', ".kkkkkkkkkkkkkk."],
  uY = [".kkkkkkkkkkkkkk.", 'kllllllllllllllk', 'kccwwccwwccwwcck', 'kddwwddwwddwwddk', ".kkkkkkkkkkkkkk."],
  uj = [".kkkkkkk........", "kllllllk........", "kcwwccck........", "kdwwdddk........", ".kkkkkkk........"];
function up(iK = false) {
  let iW = [];
  for (let ic = 0x0; ic < 0x7; ic++) {
    let iN = '';
    for (let iF = 0x0; iF < 0x10; iF++) {
      let iI = (iF + 0.5 - 0x8) / 0x8,
        ia = (ic + 0.5 - 3.5) / 3.5,
        iR = Math.hypot(iI, ia),
        iG = (Math.atan2(ia, iI) / (Math.PI * 0x2) + 0x1) % 0x1,
        ik = '.';
      iR <= 0x1 && (ik = iR > 0.84 ? 'k' : iR > 0.58 ? Math.floor(iG * 0xc + 0.5) % 0x2 === 0x0 ? 'w' : 'c' : iR > 0.44 ? 'd' : ia < -0.1 && iI < 0.2 ? 'l' : 'c'), iK && iF > 0x7 && (ik = iF === 0x8 && ik !== '.' ? 'k' : '.'), iN += ik;
    }
    iW.push(iN);
  }
  return iW;
}
g(up, 'chipCapRows');
var uD = g(iK => Object.assign({
  'k': 'ink'
}, ux[iK]), 'chipPal');
function uQ() {
  let iK = new xz(0x1e, 0x16);
  for (let iW = 0x4; iW < 0x14; iW++) for (let ic = 0x6; ic < 0x1d; ic++) iK.set(ic, iW, 'rail1');
  for (let iN = 0x6; iN < 0x1d; iN++) iK.set(iN, 0x4, 'rail3'), iK.set(iN, 0x13, 'rail0'), iK.set(iN, 0x14, 'void');
  for (let iF = 0x4; iF < 0x14; iF++) iK.set(0x1c, iF, 'rail0'), iK.set(0x6, iF, 'rail2');
  for (let iI = 0x6; iI < 0x13; iI++) {
    let ia = 0x1 + (iI - 0x6 >> 0x2);
    for (let iR = ia; iR < 0x9; iR++) iK.set(iR, iI, 'rail0');
  }
  for (let iG = 0x7; iG < 0x12; iG++) {
    let ik = 0x2 + (iG - 0x6 >> 0x2);
    for (let iJ = ik; iJ < ik + 0x5; iJ++) iK.set(iJ, iG, 'dw2');
    iK.set(ik + 0x5, iG, iG & 0x1 ? 'ivory' : 'box2'), iG === 0xc && iK.set(ik + 0x2, iG, 'gold2');
  }
  for (let iA = 0x6; iA < 0x13; iA++) {
    let ir = 0x1 + (iA - 0x6 >> 0x2);
    iK.set(ir - 0x1, iA, 'gold2');
  }
  for (let iL = 0x1; iL < 0x1d; iL++) iK.get(iL, 0x5) || iL < 0x9;
  for (let il = 0x9; il < 0x1c; il++) iK.set(il, 0x5, 'gold1');
  iK.rect(0xf, 0xb, 0x9, 0x5, 'gold1');
  for (let iv = 0xf; iv < 0x18; iv++) iK.set(iv, 0xb, 'gold2');
  iK.set(0x13, 0xd, 'rail0');
  for (let iS = 0x9; iS < 0x1b; iS++) iK.set(iS, 0x2, iS & 0x1 ? 'ivory' : 'box2'), iK.set(iS, 0x3, 'dw2');
  return iK.set(0x8, 0x3, 'gold2'), iK.set(0x1b, 0x3, 'rail0'), iK;
}
g(uQ, 'shoeBuffer');
function ug() {
  let iK = new xz(0x1c, 0xc);
  for (let iW = 0x2; iW < 0xa; iW++) for (let ic = 0x1; ic < 0x1b; ic++) iK.set(ic, iW, 'rail0');
  for (let iN = 0x1; iN < 0x1b; iN++) iK.set(iN, 0x1, 'gold1'), iK.set(iN, 0x2, 'gold2'), iK.set(iN, 0xa, 'void');
  for (let iF = 0x2; iF < 0xa; iF++) iK.set(0x0, iF, 'gold1'), iK.set(0x1b, iF, 'gold1');
  for (let iI = 0x4; iI < 0x9; iI++) for (let ia = 0x3; ia < 0x19; ia++) iK.set(ia, iI, 'rail1');
  return iK;
}
g(ug, 'trayBuffer');
function uU() {
  let iK = new xz(0x1a, 0x1e);
  for (let iW = 0x2; iW < 0x1e; iW++) for (let ic = 0x1; ic < 0x19; ic++) iW < 0x5 && (ic < 0x3 + (0x5 - iW) || ic > 0x16 - (0x5 - iW)) || iK.set(ic, iW, 'gold0');
  for (let iN = 0x2; iN < 0x1e; iN++) for (let iF = 0x1; iF < 0x19; iF++) !(iN < 0x5 && (iF < 0x3 + (0x5 - iN) || iF > 0x16 - (0x5 - iN))) && (iN === 0x2 || iF === 0x1 || iF === 0x18) && iK.set(iF, iN, 'gold1');
  for (let iI = 0x4; iI < 0x1e; iI++) for (let ia = 0x3; ia < 0x17; ia++) iI < 0x7 && (ia < 0x5 + (0x7 - iI) || ia > 0x14 - (0x7 - iI)) || iK.set(ia, iI, ia < 0x5 ? 'dw4' : ia > 0x14 || (ia + iI) % 0x7 === 0x0 ? 'dw2' : 'dw3');
  for (let iR = 0x5; iR < 0x15; iR++) iK.set(iR, 0x5, 'dw5');
  for (let [iG, ik] of [[0x7, 0xa], [0xd, 0xa], [0x13, 0xa], [0xa, 0x10], [0x10, 0x10], [0x7, 0x16], [0xd, 0x16], [0x13, 0x16]]) iK.set(iG, ik, 'gold2'), iK.set(iG, ik + 0x1, 'dw1');
  return iK;
}
g(uU, 'chairBuffer');
function uZ() {
  let iK = new xz(0x1e, 0x1a),
    iW = 14.5;
  for (let ic = 0x0; ic < 0x1a; ic++) for (let iN = 0x0; iN < 0x1e; iN++) {
    let iF = (iN - iW) / 0xf,
      iI = ic < 0xa ? (0xa - ic) / 0xa : 0x0;
    if (iF * iF + iI * iI > 0x1) continue;
    let ia = iF * iF + iI * iI > 0.8 || iN === 0x0 || iN === 0x1d;
    iK.set(iN, ic, ia ? 'gold1' : 'plush');
  }
  for (let iR = 0x0; iR < 0x1a; iR++) for (let iG = 0x0; iG < 0x1e; iG++) {
    if (iK.get(iG, iR) !== 'plush') continue;
    [iK.get(iG - 0x1, iR), iK.get(iG + 0x1, iR), iK.get(iG, iR - 0x1)].includes('gold1') && iK.set(iG, iR, iG < iW ? 'gold2' : 'gold0');
  }
  for (let [ik, iJ] of [[0x9, 0x8], [0xf, 0x6], [0x15, 0x8], [0xc, 0xd], [0x12, 0xd], [0x9, 0x12], [0xf, 0x12], [0x15, 0x12]]) iK.set(ik, iJ, "#3a0f16"), iK.set(ik - 0x1, iJ - 0x1, "#8a3040");
  for (let iA = 0x1; iA < 0x1d; iA++) iK.set(iA, 0x17, 'gold2'), iK.set(iA, 0x18, 'gold0'), iK.set(iA, 0x19, 'void');
  return iK;
}
g(uZ, 'chairFrontBuffer');
function uw() {
  let iK = new xz(0x22, 0xd);
  for (let iW = 0x0; iW < 0xd; iW++) for (let ic = 0x0; ic < 0x22; ic++) {
    if (iW < 0x3 && (ic < 0x3 - iW || ic > 0x1e + iW)) continue;
    let iN = ic === 0x0 || ic === 0x21 || iW === 0x0 || iW < 0x3 && (ic === 0x3 - iW || ic === 0x1e + iW);
    iK.set(ic, iW, iN ? 'gold1' : iW < 0x2 ? 'rail3' : iW < 0x6 ? 'rail2' : 'rail1');
  }
  for (let iF = 0x2; iF < 0x20; iF++) iK.get(iF, 0x1) === 'rail3' && iK.set(iF, 0x1, 'gold2');
  for (let iI = 0x3; iI < 0xc; iI++) for (let ia = 0x4; ia < 0x1e; ia++) iK.set(ia, iI, iI === 0x3 || ia === 0x4 ? 'gold3' : iI === 0xb || ia === 0x1d ? 'gold0' : 'gold1');
  return iK;
}
g(uw, 'chairBackBuffer');
var uC = {
    'w': 0xe,
    'h': 0xc,
    'pal': {
      'k': 'ink',
      'w': 'ivory',
      'b': 'dw4',
      's': 'box2'
    },
    'frames': {
      'open': [["..k.k.k.......", ".kwkwkwk......", ".kwkwkwk.k....", ".kwwwwwwkwk...", ".kwwwwwwwwk...", ".kwwwwwwwwk...", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", ".............."]],
      'hold': [["..............", "..kkkkkk......", ".kwwwwwwk.....", ".kwkwkwwwk....", ".kwwwwwwwk....", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
      'flat': [["..............", "..............", ".kkkkkkkkk....", "kwwwwwwwwwk...", "kwwwwwwwwwwk..", "kswwwwwwwwwk..", ".kkkkkkkkkk...", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
      'point': [[".....k........", "....kwk.......", "....kwk.......", "..kkkwkk......", ".kwkwwwwk.....", ".kwwwwwwk.....", ".kswwwwwk.....", "..kwwwwk......", "..kbbbbk......", "..kbbbbk......", "...kkkk.......", ".............."]]
    }
  },
  uB = {
    'shoe': uQ().toMap(),
    'tray': ug().toMap(),
    'chair': uU().toMap(),
    'chairFront': uZ().toMap(),
    'chairBack': uw().toMap(),
    'glove': uC,
    'cut': {
      'w': 0x1a,
      'h': 0x4,
      'pal': {
        'k': 'ink',
        'r': 'inkred'
      },
      'rows': ['kkkkkkkkkkkkkkkkkkkkkkkkkk', 'krrrrrrrrrrrrrrrrrrrrrrrrk', 'krrrrrrrrrrrrrrrrrrrrrrrrk', 'kkkkkkkkkkkkkkkkkkkkkkkkkk']
    },
    'envelope': {
      'w': 0x18,
      'h': 0xe,
      'pal': {
        'k': 'ink',
        'w': 'ivory',
        'b': 'box2',
        'r': 'inkred'
      },
      'rows': ['kkkkkkkkkkkkkkkkkkkkkkkk', 'kwkwwwwwwwwwwwwwwwwwwkwk', 'kwwkwwwwwwwwwwwwwwwwkwwk', 'kwwwkwwwwwwwwwwwwwwkwwwk', 'kwwwwkkwwwwwwwwwwkkwwwwk', 'kwwwwwwkkwwwwwwkkwwwwwwk', 'kwwwwwwwwkkrrkkwwwwwwwwk', 'kwwwwwwwwwwrrwwwwwwwwwwk', 'kwwwwwwwwwwwwwwwwwwwwwwk', 'kbbbbwwwwwwwwwwwwwwwwwwk', 'kwwwwwwwwwwwwwwwwwwwwwwk', 'kbbbbbbwwwwwwwwwwwwwwwwk', 'kwwwwwwwwwwwwwwwwwwwwwwk', 'kkkkkkkkkkkkkkkkkkkkkkkk']
    }
  },
  uO = 0x1f,
  um = 0x18,
  uH = {
    'hit': ["#########", "#.......#", "#...#...#", "#...#...#", "#.#####.#", "#...#...#", "#...#...#", "#.......#", "#########"],
    'stand': ["..#.#.#..", "..#.#.#.#", "#.#.#.#.#", "#.#.#.#.#", "#.#######", "#########", ".########", "..######.", "...####.."],
    'double': ["##...##.#####", ".##.##.....##", "..###...#####", ".##.##.##....", "##...##.#####"],
    'split': ["####......####", "#..#......#..#", "#..#.#..#.#..#", "#..##....##..#", "#..#.#..#.#..#", "#..#......#..#", "####......####"],
    'surrender': ["##.......", "#######..", "########.", "#######..", "##.......", "##.......", "##.......", "##.......", "##......."],
    'skill': ["....#....", "....#....", "...###...", "#########", ".#######.", "..#####..", "..##.##..", ".##...##.", ".#.....#."],
    'deal': [".######....", ".#....#....", ".#..######.", ".#..#....#.", ".#..#....#.", ".####....#.", "....#....#.", "....######."],
    'rebet': ["..#####..", ".#.....#.", "#.......#", "#......##", "#.....###", "#........", ".#.....#.", "..#####.."],
    'clear': ["#.....#", ".#...#.", "..#.#..", "...#...", "..#.#..", ".#...#.", "#.....#"],
    'leave': ["######...", "#....#...", "#....#.#.", "#....####", "#....#.#.", "#....#...", "######..."],
    'talk': [".#######.", "#.......#", "#.#.#.#.#", "#.......#", ".####.##.", "....##...", "....#...."]
  },
  uT = Object.keys(uH);
function uq(iK) {
  let iW = new xz(uO, um);
  for (let iG = 0x0; iG < uO; iG++) for (let ik of [0x0, 0x1, um - 0x2, um - 0x1]) iW.set(iG, ik, 'k');
  for (let iJ = 0x0; iJ < um; iJ++) for (let iA of [0x0, 0x1, uO - 0x2, uO - 0x1]) iW.set(iA, iJ, 'k');
  let ic = uH[iK] || uH.hit,
    iN = ic[0x0].length,
    iF = ic.length,
    iI = iN <= 0x9 && iF <= 0x9 ? 0x2 : 0x1,
    ia = Math.floor((uO - iN * iI) / 0x2),
    iR = Math.floor((um - iF * iI) / 0x2);
  for (let ir = 0x0; ir < iF; ir++) for (let iL = 0x0; iL < iN; iL++) ic[ir][iL] === '#' && iW.rect(ia + iL * iI, iR + ir * iI, iI, iI, 'k');
  return iW;
}
g(uq, 'buttonBuffer');
var uX = {
    'off': "#ff7f27",
    'on': "#ffff00",
    'dis': "#5a5a66"
  },
  uV = {
    'off': {
      'k': "#ff7f27"
    },
    'on': {
      'k': "#ffff00"
    },
    'dis': {
      'k': "#5a5a66"
    }
  },
  uz = ["..########..", "..#......##.", "..#.##...#.#", "..#.##...###", "..#........#", "..#...#....#", "..#..###...#", "..#...#....#", "..#........#", "..#.....##.#", "..#.....##.#", "..##########"],
  uo = g(iK => ({
    'w': xU,
    'h': xZ,
    'pal': null,
    'buf': iK
  }), 'cardMap'),
  uK = {
    'glyphs': xf,
    'suits': xk,
    'pips': xr,
    'faces': xd,
    'faceMoods': u0,
    'aceTag': u1,
    'pipLayouts': xS,
    'chips': Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
      'w': 0x12,
      'h': 0x12,
      'pal': uD(iK),
      'rows': ui(iK)
    }])),
    'chipEdges': Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
      'w': 0x10,
      'h': 0x5,
      'pal': uD(iK),
      'rows': iK === 0.5 ? uj : uy
    }])),
    'chipEdgesB': Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
      'w': 0x10,
      'h': 0x5,
      'pal': uD(iK),
      'rows': iK === 0.5 ? uj : uY
    }])),
    'chipCaps': Object.fromEntries(xO.concat([0.5]).map(iK => [iK, {
      'w': 0x10,
      'h': 0x7,
      'pal': uD(iK),
      'rows': up(iK === 0.5)
    }])),
    'suitShown': xR,
    'suits9': xA,
    'props': uB,
    'buttons': Object.fromEntries(uT.map(iK => [iK, uq(iK).toMap()])),
    'icon': uz,
    'flip': [0x1b, 0xf, 0x6, 0x2, 0x6, 0xf, 0x1b, 0x27],
    'backs': ['51', '52'],
    'cardMap': uo
  };
uK.thankYou = uK.chips[0x1];
var uW = ['base', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ut'],
  uc = {
    'spade': 0x0,
    'heart': 0x1,
    'diamond': 0x2,
    'club': 0x3
  },
  uN = new Map(),
  uF = 'base';
function uf(iK) {
  let iW = String(iK ?? '').toLowerCase();
  return /^ch[1-4]$/.test(iW) ? iW : /^ch5/.test(iW) ? 'ch5' : /^ut/.test(iW) ? 'ut' : /^[1-5]$/.test(iW) ? 'ch' + iW : 'base';
}
g(uf, 'deckFor');
var uI = g(iK => "assets/blackjack/decks/F_" + (uW.includes(iK) ? iK : 'base') + ".png", 'deckPath');
function ua(iK) {
  if (uW.includes(iK) || (iK = 'base'), uN.has(iK)) return uN.get(iK);
  let iW = {
    'img': null,
    'ready': false,
    'failed': false
  };
  if (uN.set(iK, iW), typeof Image > 'u') return iW.failed = true, iW;
  try {
    let ic = new Image();
    iW.img = ic, ic.onload = () => {
      iW.ready = true;
    }, ic.onerror = () => {
      iW.failed = true, console.warn("[blackjack] deck sheet failed to load: " + iK);
    }, ic.src = new URL("../" + uI(iK), import.meta.url).href;
  } catch {
    iW.failed = true;
  }
  return iW;
}
g(ua, 'loadDeck');
function uR(iK) {
  uF = uW.includes(iK) ? iK : 'base', ua(uF);
}
g(uR, 'setDeck');
function uG() {
  for (let iK of uW) ua(iK);
}
g(uG, 'preloadDecks');
function uk(iK = uF) {
  let iW = uN.get(iK);
  return !!(iW && iW.ready);
}
g(uk, 'deckReady');
function uJ(iK = uF) {
  let iW = uN.get(iK);
  return !!(iW && (iW.ready || iW.failed));
}
g(uJ, 'deckSettled');
var uA = g(() => uF, 'currentDeck');
function ur(iK, iW) {
  uN.set(iK, {
    'img': iW,
    'ready': !!iW,
    'failed': !iW
  }), uL.clear();
}
g(ur, 'setDeckImage');
var uL = new Map();
function ul(iK, iW) {
  if (uL.has(iK)) return uL.get(iK);
  let ic = iW();
  return uL.set(iK, ic), ic;
}
g(ul, 'cacheGet');
function uv() {
  uL.clear(), iU.clear();
}
g(uv, 'clearCaches');
function uS(iK) {
  return iK ? iK.rank === 'TICKET' ? 'T' : iK.rank + ':' + iK.suit : '-';
}
g(uS, 'cardKey');
var uE = g(() => uk(uF) ? uF : uk('base') && uJ(uF) ? 'base' : null, 'sheetId'),
  uM = g(() => typeof Image > 'u', 'noImages'),
  uP = g(() => uE() || (uM() ? 'p' : null), 'deckTag');
function ub(iK, iW, ic) {
  let iN = uE(),
    iF = iN && uN.get(iN);
  return !iF || !iF.ready || iK < 0x0 || iW == null ? null : ul('D' + iN + '|' + iK + ',' + iW + '|' + (ic ? 0x1 : 0x0), () => {
    let iI = xT(xD, xQ);
    if (!iI) return null;
    let ia = iI.getContext('2d');
    return ia.imageSmoothingEnabled = false, ia.drawImage(iF.img, iK * xD, iW * xQ, xD, xQ, 0x0, 0x0, xD, xQ), ic && (ia.globalCompositeOperation = "source-atop", ia.fillStyle = "rgba(8,4,20,0.45)", ia.fillRect(0x0, 0x0, xD, xQ), ia.globalCompositeOperation = "source-over"), iI;
  });
}
g(ub, 'sheetCell');
function ud(iK, iW) {
  return ul('P' + iW, () => {
    if (!iK) return null;
    let ic = xT(xD, xQ);
    return ic ? (ic.getContext('2d').drawImage(iK, xD - xU >> 0x1, xQ - xZ >> 0x1), ic) : null;
  });
}
g(ud, 'padded');
function i0(iK, iW, ic, iN) {
  if (iK) {
    let iI = iK.rank === 'TICKET' ? ub(0x1, 0x4, ic) : ub(xC.indexOf(iK.rank), uc[xG(iK.suit)], ic);
    if (iI) return iI;
  }
  if (!uM()) return null;
  let iF = 'F' + uS(iK) + '|' + (iW | 0x0) + '|' + (ic ? 0x1 : 0x0) + '|' + (iN ? 0x1 : 0x0);
  return ud(ul(iF, () => u8(iK, iW, {
    'dogear': iN
  }).toCanvas(ic ? xj : xi, 0x1)), iF);
}
g(i0, 'faceCanvas');
function i1(iK, iW) {
  let ic = ub(0x0, 0x4, iW);
  if (ic) return ic;
  if (!uM()) return null;
  let iN = 'B' + iK + '|' + (iW ? 0x1 : 0x0);
  return ud(ul(iN, () => uh(iK).toCanvas(iW ? xj : xi, 0x1)), iN);
}
g(i1, 'backCanvas');
function i2(iK, iW, ic) {
  return ul('N' + iW + '|' + ic, () => {
    if (!iK) return null;
    let iN = xT(Math.max(0x1, ic), xQ);
    if (!iN) return null;
    let iF = iN.getContext('2d');
    if (ic <= 0x2) {
      for (let iI = 0x0; iI < ic; iI++) iF.drawImage(iK, iI === 0x0 ? 0x0 : xD - 0x1, 0x0, 0x1, xQ, iI, 0x0, 0x1, xQ);
      return iN;
    }
    for (let ia = 0x0; ia < ic; ia++) {
      let iR = ia === 0x0 ? 0x0 : ia === ic - 0x1 ? xD - 0x1 : Math.min(xD - 0x2, 0x1 + Math.floor((ia - 0.5) / (ic - 0x2) * (xD - 0x2)));
      iF.drawImage(iK, iR, 0x0, 0x1, xQ, ia, 0x0, 0x1, xQ);
    }
    return iN;
  });
}
g(i2, 'narrow');
var i3 = g(iK => {
  iK.imageSmoothingEnabled = false;
}, 'noSmooth');
function i4(iK, iW, ic, iN, iF = {}) {
  let iI = Math.max(0x1, Math.round(iF.scale || 0x2)),
    ia = !!iF.dim,
    iR = iF.back === '52' ? '52' : '51',
    iG = iF.react === 'grin' ? 0x1 : iF.react === 'wince' ? 0x2 : 0x0,
    ik = uP();
  if (!ik) return false;
  let iJ = Number.isFinite(iF.flip) ? iF.flip : -0x1,
    iA = iF.flipFrame ?? -0x1;
  iJ < 0x0 && iA >= 0x0 && iA < 0x7 && (iJ = (iA + 0.5) / 0x8);
  let ir = iJ >= 0x0 && iJ < 0x1,
    iL = ir ? iJ < 0.5 : iF.faceDown || !iW,
    il = null,
    iv = '';
  if (iL ? (iv = ik + 'b' + iR + ia, il = i1(iR, ia)) : (iv = ik + 'f' + uS(iW) + iG + ia + (iF.dogear ? 'd' : ''), il = i0(iW, iG, ia, iF.dogear)), !il) return false;
  let iS = xD;
  if (ir) {
    if (iS = Math.round(xD * Math.abs(Math.cos(Math.PI * iJ))), iS < 0x1) return true;
    if (iS < xD && (il = i2(il, iv, iS)), !il) return false;
  }
  ic = Math.round(ic), iN = Math.round(iN);
  let iE = ic + Math.round((xD - iS) * iI / 0x2);
  if (i3(iK), iF.shadow !== false && iS > 0x4) {
    let iM = Math.max(0x0, iF.lift | 0x0);
    iK.fillStyle = "rgba(0,0,0,0.45)", iK.fillRect(iE + iI * (0x1 + (iM >> 0x1)), iN + xQ * iI + iM * iI, (iS - 0x2) * iI, iI * (iM ? 0x2 : 0x1));
  }
  return iK.drawImage(il, iE, iN, iS * iI, xQ * iI), true;
}
g(i4, 'drawCard');
function i5(iK, iW, ic, iN, {
  edge: iF = false,
  cap: iI = false,
  turned: ia = false,
  scale: iR = 0x2,
  dim: iG = false,
  shadow: ik = true
} = {}) {
  let iJ = iW === 0.5 ? 0.5 : iW,
    iA = (iI ? uK.chipCaps : iF ? ia ? uK.chipEdgesB : uK.chipEdges : uK.chips)[iJ];
  if (!iA) return;
  let ir = xF(iA, 0x0, iG ? xj : xi, 0x1);
  ir && (i3(iK), ic = Math.round(ic), iN = Math.round(iN), !iF && !iI && ik && (iK.fillStyle = "rgba(0,0,0,0.5)", iK.fillRect(ic + 0x3 * iR, iN + 0x12 * iR, 0xc * iR, iR)), iK.drawImage(ir, ic, iN, ir.width * iR, ir.height * iR));
}
g(i5, 'drawChip');
var i6 = [0x0, 0x1, 0x0, -0x1, 0x0, 0x1, 0x1, 0x0, -0x1, 0x0, 0x0, 0x1];
function i7(iK, iW, ic, iN, {
  scale: iF = 0x2,
  dim: iI = false,
  max: ia = 0x24,
  per: iR = 0xc
} = {}) {
  if (!iW || !iW.length) return;
  ic = Math.round(ic), iN = Math.round(iN);
  let iG = Math.min(ia, iW.length, iR * 0x3),
    ik = Math.min(0x3, Math.ceil(iG / iR));
  iK.fillStyle = "rgba(0,0,0,0.45)", iK.fillRect(ic + iF, iN + 0x5 * iF, (ik * 0x11 - 0x3) * iF, iF);
  for (let iJ = 0x0; iJ < ik; iJ++) {
    let iA = [];
    for (let il = iJ * iR; il < Math.min(iG, iJ * iR + iR); il++) iA.push(iW[il]);
    let ir = ic + iJ * 0x11 * iF;
    iA.forEach((iv, iS) => i5(iK, iv, ir + i6[(iS + iJ * 0x5) % 0xc] * (iF >> 0x1), iN - iS * 0x3 * iF, {
      'edge': true,
      'turned': !!(iS & 0x1),
      'scale': iF,
      'dim': iI
    }));
    let iL = iA.length - 0x1;
    iL >= 0x0 && i5(iK, iA[iL], ir + i6[(iL + iJ * 0x5) % 0xc] * (iF >> 0x1), iN - iL * 0x3 * iF - 0x4 * iF, {
      'cap': true,
      'scale': iF,
      'dim': iI
    });
  }
}
g(i7, 'drawStack');
var i8 = g((iK, iW = 0x2, ic = 0xc) => iK <= 0x0 ? 0x0 : (Math.min(ic, iK) - 0x1) * 0x3 * iW + 0x9 * iW, 'stackHeight');
function i9(iK) {
  let iW = Math.round(Math.max(0x0, +iK || 0x0) * 0x2) / 0x2,
    ic = [],
    iN = xO.slice().sort((iF, iI) => iI - iF);
  for (let iF of iN) for (; iW >= iF - 1e-9;) ic.push(iF), iW = Math.round((iW - iF) * 0x2) / 0x2;
  return iW >= 0.5 && ic.push(0.5), ic;
}
g(i9, 'chipsFor');
function ih(iK) {
  iK = Math.round((+iK || 0x0) * 0x2) / 0x2;
  let iW = iK < 0x0;
  iK = Math.abs(iK);
  let ic = Math.floor(iK);
  return (iW ? '-' : '') + String(ic).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (iK - ic ? '.5' : '');
}
g(ih, 'fmtD');
function ix(iK, iW, ic, iN, iF = 'off') {
  let iI = uK.buttons[iW];
  if (!iI) return;
  let ia = xF(iI, 0x0, uV[iF] || uV.off, 0x1);
  ia && (i3(iK), iK.drawImage(ia, Math.round(ic), Math.round(iN)));
}
g(ix, 'drawButton');
var iu = {
    'w': uO,
    'h': um
  },
  ii = 0x140,
  iy = 0xf0,
  iY = 0x41,
  ij = 0xa0,
  ip = 0x94,
  iD = 0x7b,
  iQ = 0x8,
  ig = {
    'far': iY * 0x2,
    'cx': ij * 0x2,
    'rx': ip * 0x2,
    'ry': iD * 0x2,
    'rail': iQ * 0x2,
    'rim': (iY - 0x5) * 0x2,
    'dealer': {
      'x': 0x140,
      'feet': 0xa2
    },
    'dealerCards': {
      'x': 0x140,
      'y': 0x8e,
      'step': 0x10
    },
    'shoe': {
      'x': 0x19a,
      'y': 0x66
    },
    'tray': {
      'x': 0xb8,
      'y': 0x74
    },
    'rack': {
      'x': 0x100,
      'y': 0x74,
      'w': 0x80
    },
    'rings': [{
      'x': 0xf6,
      'y': 0x13a
    }, {
      'x': 0x140,
      'y': 0x13a
    }, {
      'x': 0x18a,
      'y': 0x13a
    }],
    'ringR': 0x14,
    'row': {
      'cards': 0xe4,
      'tag': 0x11e,
      'circle': 0x13a
    },
    'you': {
      'x': 0x140,
      'top': 0x14a
    },
    'chairY': 0x178,
    'wallet': {
      'x': 0x16c,
      'y': 0x172
    },
    'print': {
      'pays': 0xc9,
      'stands': 0xd8
    },
    'emblem': {
      'x': 0x140,
      'y': 0xb0
    },
    'panel': 0x190
  },
  iU = new Map(),
  iZ = g((iK, iW) => iW >= iY && ((iK + 0.5 - ij) / ip) ** 0x2 + ((iW + 0.5 - iY) / iD) ** 0x2 <= 0x1, 'inFelt'),
  iw = g((iK, iW) => iW >= iY - 0x5 && ((iK + 0.5 - ij) / (ip + iQ)) ** 0x2 + ((iW + 0.5 - iY) / (iD + iQ)) ** 0x2 <= 0x1, 'inOuter'),
  iC = g((iK, iW, ic) => ic >= 0x4 || (ic === 0x3 ? !(iK & 0x1 && iW & 0x1) : ic === 0x2 ? (iK + iW & 0x1) === 0x0 : ic === 0x1 ? (iK & 0x1) === 0x0 && (iW & 0x1) === 0x0 : false), 'ditherOn');
function iB(iK) {
  let iW = new xz(ii, iy),
    ic = xp[iK] || xp.coin;
  for (let iJ = iY; iJ < iy; iJ++) for (let iA = 0x0; iA < ii; iA++) {
    if (iw(iA, iJ) || iw(iA, iJ - 0x1)) continue;
    (iw(iA, iJ - 0x3) || iw(iA - 0x2, iJ - 0x2) || iw(iA + 0x2, iJ - 0x2)) && (iA + iJ & 0x1) === 0x0 && iW.set(iA, iJ, 'void');
  }
  for (let ir = 0x0; ir < ii; ir++) {
    let iL = -0x1;
    for (let il = iy - 0x1; il >= iY; il--) if (iw(ir, il)) {
      iL = il;
      break;
    }
    iL < 0x0 || (iW.set(ir, iL + 0x1, 'rail0'), iW.set(ir, iL + 0x2, 'void'));
  }
  for (let iv = iY; iv < iy; iv++) for (let iS = 0x0; iS < ii; iS++) {
    if (!iZ(iS, iv)) continue;
    let iE = Math.hypot((iS + 0.5 - ij) / ip, (iv + 0.5 - iY) / iD),
      iM = (iS + 0.5 - ij) / 0x76,
      iP = (iv + 0.5 - iY - 0x2c) / 0x46,
      ib = Math.hypot(iM, iP),
      id = ic[0x1];
    ib < 0.55 ? id = iC(iS, iv, ib < 0.4 ? 0x4 : 0x2) ? ic[0x2] : ic[0x1] : ib < 0.8 && (id = iC(iS, iv, ib < 0.68 ? 0x2 : 0x1) ? ic[0x2] : ic[0x1]), ib < 0.3 && iC(iS, iv, ib < 0.18 ? 0x2 : 0x1) && (id = ic[0x3]), iE > 0.9 && (id = iC(iS, iv, iE > 0.955 ? 0x4 : iE > 0.93 ? 0x3 : 0x2) ? ic[0x0] : id), iv < iY + 0x3 && (id = iv === iY || iC(iS, iv, 0x2) ? ic[0x0] : id), iW.set(iS, iv, id);
  }
  for (let y0 = iY - 0x5; y0 < iy; y0++) for (let y1 = 0x0; y1 < ii; y1++) {
    if (!iw(y1, y0) || iZ(y1, y0)) continue;
    let y2 = 0x1;
    if (y0 >= iY) {
      let y4 = ij - y1,
        y5 = Math.max(iY + 0x14, iY + 0x3c) - y0,
        y6 = Math.hypot(y4, y5) || 0x1;
      for (y2 = 0x1; y2 <= 0xc && !iZ(Math.round(y1 + y4 / y6 * y2), Math.round(y0 + y5 / y6 * y2)); y2++);
    } else y2 = iY - y0;
    let y3 = y2 <= 0x1 ? 'gold2' : y2 === 0x2 ? 'rail3' : y2 <= 0x4 ? 'rail2' : y2 <= 0x6 ? 'rail1' : 'rail0';
    y0 >= iY && y2 === 0x5 && (y1 * 0x3 + y0) % 0x9 === 0x0 && (y3 = 'rail3'), y0 < iY && y2 === 0x5 && (y3 = 'rail0'), iW.set(y1, y0, y3);
  }
  for (let y7 = 0x0; y7 < ii; y7++) iw(y7, iY - 0x5) && iW.set(y7, iY - 0x5, 'rail3');
  let iN = ig.emblem.x / 0x2,
    iF = ig.emblem.y / 0x2;
  for (let y8 = iF - 0xd; y8 <= iF + 0xd; y8++) for (let y9 = iN - 0x18; y9 <= iN + 0x18; y9++) {
    let yu = Math.abs(y9 + 0.5 - iN) / 0x18 + Math.abs(y8 + 0.5 - iF) / 0xd;
    yu <= 0x1 && yu > 0.92 ? iW.set(y9, y8, 'gold1') : yu <= 0.8 && yu > 0.75 && iW.set(y9, y8, ic[0x3]);
  }
  ['heart', 'spade', 'diamond', 'club'].forEach((yi, yy) => iW.stamp(xk[yi], iN - 0xd + yy * 0x7, iF - 0x2, {
    '#': 'gold1'
  }));
  let iI = ig.rack.x / 0x2,
    ia = ig.rack.y / 0x2,
    iR = ig.rack.w / 0x2;
  for (let yi = ia; yi < ia + 0xc; yi++) for (let yy = iI; yy < iI + iR; yy++) iW.set(yy, yi, 'rail0');
  for (let yY = iI; yY < iI + iR; yY++) iW.set(yY, ia, 'gold1'), iW.set(yY, ia + 0xb, 'gold2');
  for (let yj = ia; yj < ia + 0xc; yj++) iW.set(iI, yj, 'gold1'), iW.set(iI + iR - 0x1, yj, 'gold1');
  let iG = [0x1f4, 0x64, 0x19, 0x5, 0x1, 0x1, 0x5, 0x19, 0x64, 0x1f4],
    ik = Math.floor((iR - 0x4) / iG.length);
  return iG.forEach((yp, yD) => {
    let yQ = ux[yp],
      yg = iI + 0x2 + yD * ik;
    for (let yU = ia + 0x2; yU < ia + 0xa; yU++) for (let yZ = yg; yZ < yg + ik - 0x1; yZ++) iW.set(yZ, yU, yU & 0x1 ? yQ.d : yZ === yg + 0x1 ? yQ.l : yQ.c);
  }), iW;
}
g(iB, 'tableBuffer');
function iO(iK, iW) {
  let ic = 'T' + iK + '|' + (iW ? 0x1 : 0x0);
  if (iU.has(ic)) return iU.get(ic);
  let iN = iB(iK).toCanvas(iW ? xj : xi, 0x1);
  return iU.set(ic, iN), iN;
}
g(iO, 'tableCanvas');
function im(iK, iW, ic, {
  dim: iN = false
} = {}) {
  let iF = iO(iW || 'coin', iN);
  iF && (i3(iK), iK.drawImage(iF, 0x0, 0x0, ii * 0x2, iy * 0x2), iT(iK, 'tray', ig.tray.x, ig.tray.y, 0x0, {
    'dim': iN
  }), iT(iK, 'shoe', ig.shoe.x, ig.shoe.y, 0x0, {
    'dim': iN
  }));
}
g(im, 'drawFelt');
function iH(iK, iW, ic, iN, {
  calm: iF = false
} = {}) {
  for (let [iI, ia, iR] of [[0x3c, 0x118, 0.035], [0x2c, 0xd2, 0.035], [0x1e, 0x96, 0.04]]) iK.fillStyle = "rgba(200,170,255," + iR + ')', iK.beginPath(), iK.moveTo(0x140 - iI, 0x0), iK.lineTo(0x140 + iI, 0x0), iK.lineTo(0x140 + ia, ig.far), iK.lineTo(0x140 - ia, ig.far), iK.closePath(), iK.fill();
}
g(iH, 'drawRoom');
function iT(iK, iW, ic, iN, iF = 0x0, {
  scale: iI = 0x2,
  dim: ia = false
} = {}) {
  let iR = uB[iW];
  if (!iR) return;
  let iG = xF(iR, iF, ia ? xj : xi, 0x1);
  iG && (i3(iK), iK.drawImage(iG, Math.round(ic), Math.round(iN), iG.width * iI, iG.height * iI));
}
g(iT, 'drawProp');
function iq(iK, iW, ic, iN, iF, iI = 0x2) {
  let ia = Math.round(ic);
  iN = Math.round(iN), iK.fillStyle = iF;
  for (let iR of String(iW)) {
    if (iR === '\x20') {
      ia += 0x2 * iI;
      continue;
    }
    let iG = xf[iR];
    if (!iG) {
      ia += 0x4 * iI;
      continue;
    }
    for (let ik = 0x0; ik < 0x5; ik++) for (let iJ = 0x0; iJ < iG[ik].length; iJ++) iG[ik][iJ] === '#' && iK.fillRect(ia + iJ * iI, iN + ik * iI, iI, iI);
    ia += (iG[0x0].length + 0x1) * iI;
  }
  return ia - Math.round(ic);
}
g(iq, 'drawMicro');
var iX = g((iK, iW = 0x2) => xa(iK) * iW, 'microWidth');
function iV() {
  return {
    'ok': false,
    'checks': [],
    'results': [],
    'reason': "not in the production build"
  };
}
g(iV, 'selfTest');
function iz(iK) {
  return iB(iK);
}
g(iz, 'roomBuffer');
var io = {
  'faceBuffer': u8,
  'backBuffer': uh,
  'ticketBuffer': u9,
  'roomBuffer': iz,
  'tableBuffer': iB,
  'buttonBuffer': uq,
  'PB': xz
};
export { f as a, l as b, b as c, h2 as d, h4 as e, h5 as f, h6 as g, h8 as h, hy as i, hp as j, hD as k, hg as l, hZ as m, hH as n, hk as o, hJ as p, hl as q, hM as r, hP as s, hb as t, hd as u, x0 as v, x1 as w, x7 as x, x8 as y, x9 as z, xh as A, xx as B, xu as C, xi as D, xy as E, xj as F, xp as G, xD as H, xQ as I, xg as J, xH as K, xN as L, xF as M, xR as N, u2 as O, u3 as P, u4 as Q, uT as R, uz as S, uK as T, uW as U, uf as V, uI as W, uR as X, uG as Y, uk as Z, uJ as _, uA as $, ur as aa, i4 as ba, i5 as ca, i7 as da, i8 as ea, i9 as fa, ih as ga, ix as ha, iu as ia, ig as ja, im as ka, iH as la, iT as ma, iq as na, iX as oa, iV as pa, io as qa };