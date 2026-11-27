import { x as t } from './c-CCL3XGEJ.js';
import './c-VB7PBWB7.js';
import { Da as o, E as f, Ea as E, Ga as h, S as s, T as y, U as m, W as p, X as d, ca as S, f as e, j as c, ja as Z0, ka as Z1, l as Z2, la as Z3, pa as Z4, xa as Z5, ya as Z6 } from './c-AXDRFE3U.js';
import './c-J7PU4477.js';
import './c-HUDNK55W.js';
import './c-IKEEXWRQ.js';
import './c-SUMRYW3E.js';
import './c-3ELH3LBH.js';
import './c-WSZI3RLB.js';
import './c-NNTXHBME.js';
import './c-OYFOJ3BV.js';
import './c-MYK6C3LF.js';
import './c-GI6IDYOV.js';
import './c-E7FVSW52.js';
import './c-ZQQWH6UG.js';
import { Aa as Z7, La as Z8, Ra as Z9, gb as ZZ, h as ZN, hb as Zi, jb as ZR, na as ZY, oa as Zl, pa as Zk, ra as Za, ta as ZA, ua as ZK, va as Zn, wa as Zg, xa as ZP, ya as Zq, za as ZD } from './c-PBMEVLU6.js';
import { a as Zo, l as Zb } from './c-XSSGDLV7.js';
Zb();
var ZB = 'castletown',
  ZF = 'castletown',
  ZI = 0x280,
  Zu = 0x1e0,
  Zx = "assets/castletown/",
  Zw = Zo(() => e() || {}, 'host'),
  Zf = Z5,
  ZE = ['FIGHTS', "BOSS RUSH", 'DAILY', 'CUSTOM', 'PARTY', 'PRACTICE', 'REPLAYS', 'GAMES', 'COLLECTION', 'JUKEBOX', 'CHAPTERS', 'MODS'],
  ZT = {
    'FIGHTS': ["* The throne room. Every fight in the sim is through these doors: all five chapters, plus UNDERTALE.", "* Win one and it gets a rank and a score. Your best shows on its card, so you can always come back and beat it.", "* Tip: hold R in a fight to rewind."],
    'BOSS\x20RUSH': ["* The Party Dojo. This is where you go to really test yourself.", "* Boss rush is a chapter's bosses back to back. Gauntlet is every attack, one after another. On the menu, both are under Modes."],
    'PARTY': ["* Susie's room. This is where you choose who fights with you.", "* Swap anyone in, copy a hero and their stats, or build your own team. A custom team's wins don't earn a rank."],
    'DAILY': ["* Top Bakery. One fresh fight comes out of the oven every day.", "* Everybody gets the same one, so you can compare. Try to keep a streak going."],
    'PRACTICE': ["* The dungeon. It's quiet down here. Good for getting better at something.", "* Practice loops one attack until you've got it. Attack lab plays any attack on its own. Both are under Modes."],
    'REPLAYS': ["* A SAVE point. Every fight you finish is kept here as a replay.", "* Watch them back, save a clip (F9 in a fight) or share one. The ending screen can open the one you just played."],
    'GAMES': ["* Lancer's room. He hid all the extra games in here.", "* Darkdle, Mania, Blackjack, Spell Card Rush... Not fights. Just for fun. They're under Modes on the menu."],
    'COLLECTION': ["* Your room. Everything you've seen and done ends up on these shelves.", "* The bestiary has every enemy. Achievements and stats show how far you've got."],
    'JUKEBOX': ["* The cafe. Every song from the games is on the menu.", "* Pick any track and just listen. The menu music goes quiet while it plays, and some songs have lyrics to follow."],
    'CHAPTERS': ["* The cliff. You can see every chapter from up here.", "* Rewatch the chapter intros and the trailers whenever you like."],
    'MODS': ["* A big golden door. Fan-made mods of real fights are on the other side.", "* In the list, each mod sits right after the fight it changes."]
  },
  Zz = {
    'FIGHTS': [["Go in", () => ND()]],
    'PARTY': [["Pick a team", () => Nq(() => {
      let i = Zw().menu;
      i && i.clickIcon(0x3);
    })]],
    'BOSS\x20RUSH': [["Boss rush", () => Nq(() => Zs().openChallenges('rush'))], ['Gauntlet', () => Nq(() => Zs().openChallenges('gauntlet'))]],
    'DAILY': [["Play it", () => Nq(() => {
      let i = Z0('practice');
      i && i.startDaily ? i.startDaily() : Zs().openChallenges('daily');
    })]],
    'PRACTICE': [['Practice', () => Nq(() => Zs().openChallenges('practice'))], ["Attack lab", () => Nq(() => Zs().openChallenges('lab'))]],
    'REPLAYS': [['Look', () => Nq(() => Zs().openReplays())]],
    'GAMES': [["Go in", () => Nq(() => {
      let i = Z0('games');
      i && i.open();
    })]],
    'COLLECTION': [['Bestiary', () => Nq(() => S("bestiary:open"))], ['Achievements', () => Nq(() => {
      let i = f("ach.gallery");
      i && i.onUse(c());
    })], ['Stats', () => Nq(() => Zs().openToolbox('stats'))]],
    'JUKEBOX': [['Listen', () => Nq(() => S("jukebox:open"))]],
    'CHAPTERS': [['Watch', () => Nq(() => S("trailers:open"))]],
    'MODS': [["Open it", () => ND(NB)]]
  },
  ZX = {
    'FIGHTS': "Every fight - all the chapters and UNDERTALE.",
    'BOSS\x20RUSH': "Bosses back to back, or every attack in a row.",
    'DAILY': "One new fight a day, same for everybody.",
    'CUSTOM': "Build your own fight, up to 200 enemies.",
    'PARTY': "Who fights with you, and custom teams.",
    'PRACTICE': "Repeat one attack, or pull it apart in the lab.",
    'REPLAYS': "Your replays, clips and save states.",
    'GAMES': "Darkdle, Mania, Blackjack and the other games.",
    'COLLECTION': "Bestiary, achievements and stats.",
    'JUKEBOX': "Every song, with lyrics.",
    'CHAPTERS': "Chapter intros and trailers.",
    'MODS': "Fan-made mods of real fights."
  },
  Zh = {
    'FIGHTS': "Castle, 1F",
    'BOSS\x20RUSH': "Party Dojo",
    'DAILY': "Top Bakery",
    'CUSTOM': "Seam's shop",
    'PARTY': "Susie's room, 2F",
    'PRACTICE': "Castle dungeon",
    'REPLAYS': "Save point",
    'GAMES': "Lancer's room, 2F",
    'COLLECTION': "Kris's room, 2F",
    'JUKEBOX': 'Cafe',
    'CHAPTERS': "West cliff",
    'MODS': "Golden door"
  },
  ZJ = {
    'FIGHTS': ['f1', 0x258, 0x14a, 'u'],
    'BOSS\x20RUSH': ['dojo', 0xd7, 0x122, 'l'],
    'DAILY': ['bakery', 0x134, 0x17c, 'u'],
    'CUSTOM': ['town', 0x237, 0x236, 'u'],
    'PARTY': ['susie', 0x12a, 0x114, 'u'],
    'PRACTICE': ['dungeon', 0x3e8, 0xf0, 'u'],
    'REPLAYS': ['town', 0x30c, 0x10e, 'r'],
    'GAMES': ['f2', 0x337, 0xe6, 'u'],
    'COLLECTION': ['kris', 0x140, 0x168, 'u'],
    'JUKEBOX': ['cafe', 0x1b8, 0x140, 'u'],
    'CHAPTERS': ['cliff', 0xbe, 0x122, 'l'],
    'MODS': ['east', 0x1a4, 0x12c, 'u']
  },
  ZW = {
    'town': {
      0x0: {
        'say': "* (That's the road out of town. Nothing else to see that way.)"
      },
      0x1: ['east', 'W', 'r'],
      0x2: ['cliff', 'X', 'l'],
      0x3: ['front', 'A', 'u'],
      0x4: ['bakery', 'X', 'u'],
      0x5: ['cafe', 'X', 'u'],
      0x6: ['dojo', 'X', 'u'],
      0x7: {
        'shop': true
      }
    },
    'front': {
      0x0: ['town', 'B', 'd'],
      0x1: ['f1', 'X', 'u']
    },
    'f1': {
      0x0: ['dungeon', 'W', 'r'],
      0x1: ['front', 'X', 'd'],
      0x2: ['f2', 'A', 'r']
    },
    'f2': {
      0x0: ['kris', 'V', 'u'],
      0x1: ['susie', 'W', 'u'],
      0x2: {
        'feature': 'GAMES'
      },
      0x3: ['f1', 'B', 'd']
    },
    'dungeon': {
      0x0: ['f1', 'W', 'd']
    },
    'kris': {
      0x0: ['f2', 'V', 'd']
    },
    'susie': {
      0x0: ['f2', 'W', 'd']
    },
    'dojo': {
      0x0: ['town', 'U', 'd']
    },
    'cafe': {
      0x0: ['town', 'S', 'd']
    },
    'bakery': {
      0x0: ['town', 'T', 'd']
    },
    'cliff': {
      0x0: ['town', 'R', 'r']
    },
    'east': {
      0x0: ['town', 'X', 'l']
    }
  },
  ZC = {
    'town': [{
      'kind': 'spot',
      'f': 'REPLAYS',
      'name': "SAVE POINT",
      'x': 0x33a,
      'y': 0x122,
      'w': 0x36,
      'h': 0x34
    }, {
      'kind': 'door',
      'door': 0x6,
      'f': "BOSS RUSH",
      'name': "PARTY DOJO",
      'click': [0x180, 0x28a, 0x11c, 0xc4]
    }, {
      'kind': 'door',
      'door': 0x4,
      'f': 'DAILY',
      'name': "TOP BAKERY",
      'click': [0x39b, 0x26e, 0xc4, 0xea]
    }, {
      'kind': 'door',
      'door': 0x5,
      'f': 'JUKEBOX',
      'name': 'CAFE',
      'click': [0x31e, 0x125, 0x106, 0x13e]
    }, {
      'kind': 'door',
      'door': 0x7,
      'f': 'CUSTOM',
      'name': "SEAM'S SHOP",
      'click': [0x1dc, 0x179, 0xd0, 0xe4]
    }, {
      'kind': 'door',
      'door': 0x3,
      'f': 'FIGHTS',
      'name': 'CASTLE'
    }, {
      'kind': 'door',
      'door': 0x2,
      'f': 'CHAPTERS',
      'name': "WEST CLIFF"
    }, {
      'kind': 'door',
      'door': 0x1,
      'f': 'MODS',
      'name': 'EAST'
    }],
    'front': [{
      'kind': 'door',
      'door': 0x1,
      'f': 'FIGHTS',
      'name': 'CASTLE'
    }],
    'f1': [{
      'kind': 'spot',
      'f': 'FIGHTS',
      'name': "THRONE ROOM",
      'x': 0x230,
      'y': 0x78,
      'w': 0x78,
      'h': 0x96
    }, {
      'kind': 'door',
      'door': 0x2,
      'f': 'GAMES',
      'name': 'UPSTAIRS'
    }, {
      'kind': 'door',
      'door': 0x0,
      'f': 'PRACTICE',
      'name': 'DUNGEON'
    }],
    'f2': [{
      'kind': 'door',
      'door': 0x0,
      'f': 'COLLECTION',
      'name': "KRIS'S ROOM"
    }, {
      'kind': 'door',
      'door': 0x1,
      'f': 'PARTY',
      'name': "SUSIE'S ROOM"
    }, {
      'kind': 'door',
      'door': 0x2,
      'f': 'GAMES',
      'name': "LANCER'S ROOM"
    }],
    'dojo': [{
      'kind': 'spot',
      'f': "BOSS RUSH",
      'name': 'DOJO',
      'x': 0x4f,
      'y': 0x116,
      'w': 0x7b,
      'h': 0x7a
    }],
    'bakery': [{
      'kind': 'spot',
      'f': 'DAILY',
      'name': 'COUNTER',
      'x': 0x78,
      'y': 0xc8,
      'w': 0x190,
      'h': 0x5c
    }],
    'cafe': [{
      'kind': 'spot',
      'f': 'JUKEBOX',
      'name': 'CAFE',
      'x': 0x172,
      'y': 0x64,
      'w': 0x10e,
      'h': 0x70
    }],
    'dungeon': [{
      'kind': 'spot',
      'f': 'PRACTICE',
      'name': 'CELLS',
      'x': 0x370,
      'y': 0xc8,
      'w': 0x208,
      'h': 0x70
    }],
    'kris': [{
      'kind': 'spot',
      'f': 'COLLECTION',
      'name': "YOUR STUFF",
      'x': 0x96,
      'y': 0x96,
      'w': 0x15e,
      'h': 0x82
    }],
    'susie': [{
      'kind': 'spot',
      'f': 'PARTY',
      'name': "YOUR TEAM",
      'x': 0xf5,
      'y': 0xeb,
      'w': 0x91,
      'h': 0x55
    }],
    'cliff': [{
      'kind': 'spot',
      'f': 'CHAPTERS',
      'name': 'CHEST',
      'x': 0x64,
      'y': 0x12c,
      'w': 0x50,
      'h': 0x50
    }],
    'east': [{
      'kind': 'spot',
      'f': 'MODS',
      'name': "GOLDEN DOOR",
      'x': 0x15e,
      'y': 0xfa,
      'w': 0xaa,
      'h': 0x50
    }]
  },
  ZL = ['dojo', 'cafe', 'bakery', 'kris', 'susie'],
  Zs = Zo(() => Z0('hub') || {}, 'hub'),
  Zy = {},
  ZO = {},
  ZQ = null,
  ZU = null,
  ZG = Zo(i => new Promise((Y, ix) => {
    let iw = new Image();
    iw.onload = () => Y(iw), iw.onerror = () => ix(new Error("could not load " + i)), iw.src = Zx + i;
  }), 'img');
function Zm() {
  return ZU || (ZU = (async () => {
    let i = await fetch(Zx + "rooms/raw.json");
    if (!i.ok) throw new Error("rooms/raw.json " + i.status);
    ZQ = await i.json();
    let Y = [],
      ix = ['savepoint', 'exc', 'seam_bg', 'seam_talk', 'seam_idle', 'townmap'];
    for (let iw of ['kris', 'susie', 'ralsei']) for (let iE of 'durl') ix.push(iw + '_' + iE);
    for (let iT of ix) Y.push(ZG("sprites/" + iT + ".png").then(iz => {
      Zy[iT] = iz;
    }));
    for (let [iz, iX] of Object.entries(ZQ.rooms)) ZO[iz] = {
      ...iX
    }, Y.push(ZG("rooms/" + iz + ".png").then(ih => {
      ZO[iz].img = ih;
    })), iX.top && Y.push(ZG("rooms/" + iz + "_top.png").then(ih => {
      ZO[iz].topImg = ih;
    })), Y.push(ZG("rooms/" + iz + "_coll.png").then(ih => {
      let iJ = document.createElement('canvas');
      iJ.width = ih.width, iJ.height = ih.height;
      let iW = iJ.getContext('2d');
      iW.drawImage(ih, 0x0, 0x0);
      let iC = iW.getImageData(0x0, 0x0, ih.width, ih.height).data,
        iL = new Uint8Array(ih.width * ih.height);
      for (let is = 0x0; is < iL.length; is++) iL[is] = iC[is * 0x4 + 0x3] > 0x0 ? 0x1 : 0x0;
      ZO[iz].coll = iL;
    }));
    await Promise.all(Y);
    for (let [ih, iJ] of Object.entries(ZC)) for (let iW of iJ) iW.kind === 'door' && Object.assign(iW, ZO[ih].doors[iW.door]);
    for (let [iC, iL] of Object.entries(ZO)) for (let is of iL.npcs || []) (ZC[iC] = ZC[iC] || []).push({
      'kind': 'npc',
      'name': '',
      ...is,
      'line': is.lines.join('\x20').replace(/\s+/g, '\x20')
    });
    for (let [iy, iO] of Object.entries(ZO)) iO.doors.forEach((iQ, iU) => {
      let iG = ZC[iy] = ZC[iy] || [];
      iG.some(im => im.kind === 'door' && im.door === iU) || iG.push({
        'kind': 'door',
        'door': iU,
        'name': '',
        ...iQ
      });
    });
  })().catch(i => {
    throw ZU = null, i;
  }), ZU);
}
Zo(Zm, 'loadAll');
var Zr = {
    'room': 'town',
    'x': 0x2e4,
    'y': 0xc8,
    'face': 'd',
    'walk': 0x0,
    'run': 0x0,
    'moving': false
  },
  Zp = {
    'x': 0x0,
    'y': 0x0
  },
  Zd = 0x0,
  Zv = 0x0,
  ZS = null,
  ZH = null,
  Zc = null,
  Zj = null,
  ZV = null,
  ZM = 0x0,
  N0 = 0x0,
  N1 = 0x0,
  N2 = null,
  N3 = null,
  N4 = [],
  N5 = 0x0,
  N6 = 0x0,
  N7 = 0x0,
  N8 = 0x1,
  N9 = null,
  NZ = false,
  NN = new Set();
function Ni() {
  try {
    NN = new Set(JSON.parse(Z1(ZB, 'visited', '[]') || '[]'));
  } catch {
    NN = new Set();
  }
}
Zo(Ni, 'loadVisited');
function NR(i) {
  !i || NN.has(i) || (NN.add(i), Z3(ZB, 'visited', JSON.stringify([...NN])));
}
Zo(NR, 'visit');
var NY = null,
  Nl = null,
  Nk = false,
  Na = 0x0;
async function NA(Y = {}) {
  if (d(ZF)) {
    Y.map && !ZV ? (Zc = null, Nm()) : Y.place && ZJ[Y.place] && Nz(Y.place, true);
    return;
  }
  let ix = p(),
    iw = Zw().menu ? Zw().menu.menuno : 0x0;
  try {
    await Zm();
  } catch (iX) {
    Z4("The tour could not load: " + (iX && iX.message || iX), {
      'kind': 'error'
    });
    return;
  }
  let iE = Zw().menu,
    iT = p();
  if (d(ZF) || c().state !== 'menu' || iE && (iE.pending || iE.start || iE.menuno !== iw) || iT && iT !== ix) return;
  Ni(), Z3(ZB, 'opened', 0x1), Zc = null, ZV = null, N3 = null, Zd = 0x1, Zv = -0x1, ZS = null, ZH = null, N6 = 0x0, N7 = 0x0, N8 = 0x1;
  let iz = Y.resume || NY;
  if (NY = null, iz) NE(iz.room, iz.x, iz.y, iz.face);else {
    let ih = ZO.town.markers.B;
    NE('town', ih[0x0], ih[0x1], 'd');
  }
  try {
    Z8(['snd_dooropen', 'snd_doorclose', 'snd_text', 'snd_select', 'snd_menumove']);
  } catch {}
  N9 = ZR();
  try {
    Nl = ZZ('castletown', 0.8), Nk = false;
  } catch {}
  if (NZ = true, Na = performance.now(), s({
    'id': ZF,
    'owner': ZB,
    'pauses': true,
    'draw': iA,
    'step': Nc,
    'onKey': Nd,
    'onPointer': Np,
    'onClose': Nn
  }), !iz && !Z1(ZB, 'hinted', 0x0) && (Z3(ZB, 'hinted', 0x1), NW(m() ? "* (Use the pad to walk, or just tap where you want to go. MAP lists every place.)" : "* (Walk with the arrow keys and press Z near anything. Press M for a map if you'd rather skip the walk.)")), Y.map && Nm(), Y.place && ZJ[Y.place]) {
    let [iJ, iW, iC, iL] = ZJ[Y.place];
    NE(iJ, iW, iC, iL), ZH = () => NL(Y.place);
  }
}
Zo(NA, 'open');
var NK = Zo(() => NY ? NY.kind : null, 'pendingReturn');
function Nn() {
  if (NZ) {
    NZ = false;
    try {
      Zi(), N9 && !(NY && NY.kind === 'fight') && ZZ(N9);
    } catch {}
    Nl = null;
  }
}
Zo(Nn, 'onClose');
function Ng() {
  NY = null, y(ZF);
}
Zo(Ng, 'leave');
function NP(i) {
  NY = {
    'room': Zr.room,
    'x': Zr.x,
    'y': Zr.y,
    'face': Zr.face,
    'kind': i,
    'fought': false,
    'sawEditor': false
  }, y(ZF);
}
Zo(NP, 'stepAside');
function Nq(i) {
  try {
    i();
  } catch (Y) {
    Z4("That did not open: " + (Y && Y.message || Y), {
      'kind': 'warn'
    });
  }
}
Zo(Nq, 'feature');
function ND(ix) {
  NP('list');
  let iT = Zw().menu;
  iT && (iT.menuno === 0x6 && iT.closeEditor ? iT.closeEditor() : iT.menuno && (iT.menuno = 0x0, iT.submenu = 0x0, iT.list = null), iT.page && iT.setPage && iT.setPage(0x0), iT.zone = 'list'), ix && ix(), Z4("Pick a fight - you'll be back in Castle Town after it. TOUR goes back right away.", {
    'ms': 0x1388
  });
}
Zo(ND, 'toList');
function No() {
  NP('editor');
  let i = Zw().menu,
    Y = (Zw().fights || []).find(ix => ix.mode === 'editor');
  i && i.openEditor ? i.openEditor() : Y && Zw().startFight && Zw().startFight(Y);
}
Zo(No, 'toEditor'), Z2('fightStart', () => {
  d(ZF) ? (NP('fight'), NY.fought = true) : NY && (NY.fought = true);
}, {
  'owner': ZB
}), Z2('menuDraw', (i, Y) => {
  if (!NY || Y.state !== 'menu' || d()) return;
  let ix = Zw().menu;
  if (!ix) return;
  if (NY.kind === 'editor') {
    if (ix.menuno === 0x6) {
      NY.sawEditor = true;
      return;
    }
    if (!NY.sawEditor && !NY.fought) return;
  } else {
    if (NY.kind === 'list' && !NY.fought) return;
  }
  if (ix.menuno !== 0x0 || ix.pending) return;
  NA({
    'resume': NY
  });
}, {
  'owner': ZB,
  'priority': -0x14
});
function Nb() {
  let i = p(),
    Y = !!(i && i.id !== ZF);
  if (!(!Nl || Y === Nk)) {
    Nk = Y;
    try {
      if (Y) Nl.pause();else {
        let ix = Nl.play();
        ix && ix.catch && ix.catch(() => {});
      }
    } catch {}
  }
}
Zo(Nb, 'duck');
function NB() {
  let i = Zw().menu;
  if (!i) return;
  i.openTab && i.openTab('ALL');
  let Y = (i.fightList ? i.fightList() : []).findIndex(ix => ix && ix.mod);
  Y >= 0x0 && (i.zone = 'list', i.fightsel = Y, i.ftop = Math.max(0x0, Y - 0x2));
}
Zo(NB, 'showMods');
function NF(Y, ix, iw, iE, iT) {
  let iz = ZO[Y];
  if (ix = Math.round(ix), iw = Math.round(iw), ix < 0x0 || iw < 0x0 || ix + iE > iz.w || iw + iT > iz.h) return true;
  for (let iX = iw; iX < iw + iT; iX += 0x2) for (let ih = ix; ih < ix + iE; ih += 0x2) if (iz.coll[iX * iz.w + ih]) return true;
  for (let iJ = iw; iJ < iw + iT; iJ += 0x2) if (iz.coll[iJ * iz.w + ix + iE - 0x1]) return true;
  for (let iW = ix; iW < ix + iE; iW += 0x2) if (iz.coll[(iw + iT - 0x1) * iz.w + iW]) return true;
  return false;
}
Zo(NF, 'coll');
var NI = Zo((i, Y) => [i + 0x2, Y + 0x32, 0x22, 0x1a], 'BOX'),
  Nu = Zo((i, Y) => i[0x0] < Y.x + Y.w && i[0x0] + i[0x2] > Y.x && i[0x1] < Y.y + Y.h && i[0x1] + i[0x3] > Y.y, 'hit');
function Nx(i, Y) {
  let ix = Math.max(Y.x - (i[0x0] + i[0x2]), i[0x0] - (Y.x + Y.w), 0x0),
    iw = Math.max(Y.y - (i[0x1] + i[0x3]), i[0x1] - (Y.y + Y.h), 0x0);
  return Math.hypot(ix, iw);
}
Zo(Nx, 'gap');
function Nw(i, Y) {
  let ix = ZO[Zr.room],
    iw = Math.round(i + 0x13 - ZI / 0x2),
    iE = Math.round(Y + 0x26 - Zu / 0x2);
  return [ix.w <= ZI ? Math.round((ix.w - ZI) / 0x2) : Math.max(0x0, Math.min(ix.w - ZI, iw)), ix.h <= Zu ? Math.round((ix.h - Zu) / 0x2) : Math.max(0x0, Math.min(ix.h - Zu, iE))];
}
Zo(Nw, 'camFor');
function Nf() {
  let [i, Y] = Nw(Zr.x, Zr.y);
  Zp.x = i, Zp.y = Y;
}
Zo(Nf, 'snapCamera');
function NE(i, Y, ix, iw) {
  Zr.room = i, Zr.x = Y, Zr.y = ix, Zr.face = iw, Zr.walk = 0x0, Zr.run = 0x0, Zr.moving = false, N4 = [];
  for (let iE = 0x0; iE < 0x28; iE++) N4.push({
    'x': Y,
    'y': ix,
    'face': iw
  });
  Nf();
}
Zo(NE, 'placeKris');
function NT(i, Y, ix, iw, iE, iT) {
  Zv > 0x0 || (ZS = {
    'to': i,
    'x': Y,
    'y': ix,
    'face': iw
  }, Zv = 0x1, ZH = iT || null, N3 = null, iE && Z9(iE, {
    'volume': 0.5
  }));
}
Zo(NT, 'goRoom');
function Nz(i, Y) {
  let [ix, iw, iE, iT] = ZJ[i];
  ZV = null, NT(ix, iw, iE, iT, null, Y ? () => NL(i) : null);
}
Zo(Nz, 'warpTo');
function NX() {
  let i = NI(Zr.x, Zr.y),
    Y = null,
    ix = 0x3b9aca00;
  for (let iw of ZC[Zr.room] || []) {
    let iE = Nx(i, iw),
      iT = iw.kind === 'door' ? 0x1e : 0x2c;
    iE <= iT && iE < ix && (ix = iE, Y = iw);
  }
  return Y;
}
Zo(NX, 'nearest');
var Nh = null;
function NJ(Y, ix) {
  if (!Nh) return [Y];
  let iw = Y.split('\x20'),
    iE = [],
    iT = '';
  for (let iz of iw) {
    let iX = iT ? iT + '\x20' + iz : iz;
    Nh(iX) > ix && iT ? (iE.push(iT), iT = (iE.length && Y.startsWith('*') ? '\x20\x20' : '') + iz) : iT = iX;
  }
  return iT && iE.push(iT), iE;
}
Zo(NJ, 'wrap');
function NW(i, Y = null, ix = null) {
  Zc = {
    'pages': Array.isArray(i) ? i : [i],
    'page': 0x0,
    'lines': null,
    'shown': 0x0,
    'picks': Y,
    'sel': 0x0,
    'feat': ix
  }, N3 = null;
}
Zo(NW, 'say');
var NC = Zo(i => i.page >= i.pages.length - 0x1, 'lastPage');
function NL(i) {
  if (NN.has(i) || (NR(i), Zj = {
    'text': NN.size === ZE.length ? "All " + ZE.length + " places found" : "New place, " + NN.size + '/' + ZE.length,
    't': 0x4b
  }), i === 'CUSTOM') {
    NU();
    return;
  }
  NW(ZT[i], Zz[i], i);
}
Zo(NL, 'checkPlace');
function Ns(i) {
  let Y = (ZW[Zr.room] || {})[i];
  if (Y) {
    if (Array.isArray(Y)) {
      let [ix, iw, iE] = Y,
        iT = ZO[ix].markers[iw];
      NT(ix, iT[0x0], iT[0x1], iE, ZL.includes(ix) ? 'snd_dooropen' : ZL.includes(Zr.room) ? 'snd_doorclose' : null);
    } else Zr.y += Zr.face === 'u' ? 0xa : Zr.face === 'd' ? -0xa : 0x0, Zr.x += Zr.face === 'l' ? 0xa : Zr.face === 'r' ? -0xa : 0x0, N3 = null, Y.say ? NW(Y.say) : Y.feature ? NL(Y.feature) : Y.shop && NU();
  }
}
Zo(Ns, 'useDoor');
function Ny(i) {
  N3 = null, i.kind === 'spot' ? NL(i.f) : i.kind === 'npc' ? NW(i.line) : i.kind === 'door' && Ns(i.door);
}
Zo(Ny, 'act');
var NO = ["* Hee hee... Looking for a fight nobody's seen before?", "* I can stitch one up. Any enemies you like... up to 200."],
  NQ = ["* Pick the enemies, pick their attacks, pick the music.", "* Then I sew it all together. Simple, isn't it? Hee hee."];
function NU() {
  NR('CUSTOM'), ZV = 'shop', N1 = 0x0, N3 = null, N2 = {
    'src': NO,
    'lines': null,
    'shown': 0x0
  }, Z9('snd_dooropen', {
    'volume': 0.5
  });
}
Zo(NU, 'openShop');
function NG() {
  ZV = null;
  let i = ZO.town.markers.V;
  NT('town', i[0x0], i[0x1], 'd', 'snd_doorclose');
}
Zo(NG, 'leaveShop');
function Nm() {
  ZV = 'map', N0 = Math.max(0x0, N0), N3 = null, Z9('snd_select');
}
Zo(Nm, 'openMap');
var Nr = null;
function Np(i) {
  return Nr = {
    'x': i.x,
    'y': i.y
  }, true;
}
Zo(Np, 'onPointer');
function Nd(i, Y) {
  if (Y === 'Escape') return ZV === 'map' || ZV === 'menu' ? ZV = null : ZV === 'shop' ? NG() : Zc ? Zc = null : performance.now() - Na > 0x3e8 && Ng(), true;
  let ix = String(i.key || '').toLowerCase();
  return ix === 'm' && !i.ctrlKey && !i.metaKey ? (ZV === 'map' ? ZV = null : !ZV && !Zc && !Zv && Nm(), true) : ix === 'f' && !i.ctrlKey && !i.metaKey && ZV !== 'shop' ? (Ng(), true) : false;
}
Zo(Nd, 'onKey');
var Nv = Zo((i, Y, ix, iw) => t.kind === 'mouse' && t.inside && t.x >= i && t.y >= Y && t.x < i + ix && t.y < Y + iw, 'hovered'),
  NS = {
    'x': -0x1,
    'y': -0x1
  },
  NH = Zo(() => t.kind === 'mouse' && t.inside && (t.x !== NS.x || t.y !== NS.y), 'ptrMoved');
function Nc() {
  N5++;
  let Y = Nr;
  Nr = null;
  let ix = NH();
  if (NS = {
    'x': t.x,
    'y': t.y
  }, Zv) {
    if (Zd += Zv / 0xc, Zv > 0x0 && Zd >= 0x1) Zd = 0x1, ZS && (NE(ZS.to, ZS.x, ZS.y, ZS.face), ZS = null), Zv = -0x1;else {
      if (Zv < 0x0 && Zd <= 0x0 && (Zd = 0x0, Zv = 0x0, ZH)) {
        let iO = ZH;
        ZH = null, iO();
      }
    }
    return;
  }
  if (Y && ZV !== 'shop' && Y.y < 0x1e) {
    if (Y.x < 0x64) {
      Ng();
      return;
    }
    if (Y.x < 0xbe) {
      ZV === 'map' ? ZV = null : (Zc = null, Nm());
      return;
    }
  }
  if (ZV === 'shop') return i8(Y, ix);
  if (ZV === 'map') return i7(Y, ix);
  if (ZV === 'menu') return i5(Y, ix);
  if (Zc) return i2(Y, ix);
  if (Zk()) {
    ZV = 'menu', ZM = 0x0, Z9('snd_select');
    return;
  }
  Y && Nj(Y);
  let iw = ZD(),
    iE = Z7(),
    iT = ZP(),
    iz = Zq();
  if ((iw || iE || iT || iz) && (N3 = null), N3) {
    let iQ = N3.x - Zr.x,
      iU = N3.y - Zr.y;
    iT = iQ < -0x3, iz = iQ > 0x3, iw = iU < -0x3, iE = iU > 0x3;
  }
  let iX = Za() || N3 && Math.hypot(N3.x - Zr.x, N3.y - Zr.y) > 0xa0;
  iX ? Zr.run++ : Zr.run = 0x0;
  let ih = iX ? Zr.run > 0x3c ? 0x9 : Zr.run > 0xa ? 0x8 : 0x6 : 0x4,
    iJ = 0x0,
    iW = 0x0;
  iz && (iJ = ih, Zr.face = 'r'), iT && (iJ = -ih, Zr.face = 'l'), iE && (iW = ih, Zr.face = 'd'), iw && (iW = -ih, Zr.face = 'u'), N3 && (Math.abs(N3.x - Zr.x) < ih && (iJ = N3.x - Zr.x), Math.abs(N3.y - Zr.y) < ih && (iW = N3.y - Zr.y));
  let iC = Zr.x,
    iL = Zr.y,
    is = NF(Zr.room, ...NI(Zr.x, Zr.y));
  for (let iG = 0x0; iG < Math.ceil(Math.abs(iJ)); iG++) {
    let im = Math.sign(iJ) * Math.min(0x1, Math.abs(iJ) - iG);
    if (is || !NF(Zr.room, ...NI(Zr.x + im, Zr.y))) Zr.x += im;else break;
  }
  for (let ir = 0x0; ir < Math.ceil(Math.abs(iW)); ir++) {
    let ip = Math.sign(iW) * Math.min(0x1, Math.abs(iW) - ir);
    if (is || !NF(Zr.room, ...NI(Zr.x, Zr.y + ip))) Zr.y += ip;else break;
  }
  if (Zr.moving = Zr.x !== iC || Zr.y !== iL, Zr.moving ? (Zr.walk += iX ? 0x3 : 1.5, Zr.walk >= 0x28 && (Zr.walk -= 0x28), N4.push({
    'x': Zr.x,
    'y': Zr.y,
    'face': Zr.face
  }), N4.length > 0x3c && N4.shift()) : iJ || iW || (Zr.walk = 0x0), Zr.moving || iJ || iW ? (N6++, N7 = 0x0) : N7++, N3) {
    let id = N3.thing;
    id && id.kind !== 'door' && NX() === id ? Ny(id) : Math.abs(N3.x - Zr.x) < 0x1 && Math.abs(N3.y - Zr.y) < 0x1 ? (N3 = null, id && id.kind !== 'door' && Ny(id)) : Zr.moving ? N3.stall = 0x0 : ++N3.stall > 0x8 && (N3 = null, id && id.kind === 'door' ? Ns(id.door) : id && NT(Zr.room, id.ax, id.ay, id.kind === 'npc' ? 'l' : 'u', null, () => Ny(id)));
  }
  Nf();
  let iy = NI(Zr.x, Zr.y);
  if (ZO[Zr.room].doors.forEach((iv, iS) => {
    !Zv && !Zc && !ZV && Nu([iy[0x0] - 0x2, iy[0x1] - 0x2, iy[0x2] + 0x4, iy[0x3] + 0x4], iv) && Ns(iS);
  }), ZY() && !Zc && !ZV && !Zv) {
    let iv = NX();
    iv && Ny(iv);
  }
}
Zo(Nc, 'step');
function Nj(Y) {
  let ix = Y.x + Zp.x,
    iw = Y.y + Zp.y,
    iE = null;
  for (let iX of ZC[Zr.room] || []) {
    let ih = iX.click ? {
      'x': iX.click[0x0],
      'y': iX.click[0x1],
      'w': iX.click[0x2],
      'h': iX.click[0x3]
    } : {
      'x': iX.x - 0x10,
      'y': iX.y - 0x28,
      'w': iX.w + 0x20,
      'h': iX.h + 0x38
    };
    if (ix >= ih.x && ix <= ih.x + ih.w && iw >= ih.y && iw <= ih.y + ih.h) {
      iE = iX;
      break;
    }
  }
  if (!iE) {
    N3 = {
      'x': Math.round(ix - 0x13),
      'y': Math.round(iw - 0x3f),
      'thing': null,
      'stall': 0x0
    };
    return;
  }
  let iT = ZO[Zr.room],
    iz = Math.round(iE.x + iE.w / 0x2 - 0x13);
  iE.kind === 'door' ? iE.x <= 0xa ? (iE.ax = -0x8, iE.ay = Math.round(iE.y + iE.h / 0x2 - 0x3f)) : iE.x + iE.w >= iT.w - 0xa ? (iE.ax = iT.w - 0x1e, iE.ay = Math.round(iE.y + iE.h / 0x2 - 0x3f)) : iE.y + iE.h >= iT.h - 0x1e ? (iE.ax = iz, iE.ay = iT.h - 0x46) : (iE.ax = iz, iE.ay = Math.round(iE.y + iE.h - 0x34)) : iE.kind === 'npc' ? (iE.ax = Math.round(iE.x + iE.w + 0x4), iE.ay = Math.round(iE.y + iE.h - 0x46)) : (iE.ax = iz, iE.ay = Math.round(iE.y + iE.h + 0x4 - 0x32)), N3 = {
    'x': iE.ax,
    'y': iE.ay,
    'thing': iE,
    'stall': 0x0
  };
}
Zo(Nj, 'clickWorld');
var NV = Zo(() => Zr.y + 0x26 - Zp.y > 0xfa ? 0x2 : 0x138, 'boxY');
function NM(i) {
  return i.lines && i.shown >= i.lines.join('').length;
}
Zo(NM, 'textDone');
function i0(i) {
  return i.lines ? i.shown < i.lines.join('').length ? (i.shown++, i.shown % 0x2 === 0x0 && Z9('snd_text'), true) : false : true;
}
Zo(i0, 'typeOn');
var i1 = [];
function i2(i, Y) {
  let ix = Zc;
  if (i0(ix)) {
    (ZY() || Zl() || i) && (ix.shown = 0x3b9aca00);
    return;
  }
  if (!NC(ix)) {
    ZY() || i ? (ix.page++, ix.lines = null, ix.shown = 0x0) : Zl() && (Zc = null);
    return;
  }
  if (ix.picks) {
    let iw = ix.picks.length;
    if (ZA() && (ix.sel = (ix.sel + iw - 0x1) % iw, Z9('snd_menumove')), ZK() && (ix.sel = (ix.sel + 0x1) % iw, Z9('snd_menumove')), Y && i1.forEach((iE, iT) => {
      Nv(iE[0x0], iE[0x1], iE[0x2], iE[0x3]) && ix.sel !== iT && (ix.sel = iT, Z9('snd_menumove'));
    }), i) {
      let iE = i1.findIndex(iT => i.x >= iT[0x0] && i.x < iT[0x0] + iT[0x2] && i.y >= iT[0x1] && i.y < iT[0x1] + iT[0x3]);
      iE >= 0x0 ? (ix.sel = iE, i3()) : Zc = null;
      return;
    }
    ZY() ? i3() : Zl() && (Zc = null);
    return;
  }
  (ZY() || Zl() || i) && (Zc = null);
}
Zo(i2, 'stepBox');
function i3() {
  let i = Zc.picks[Zc.sel];
  Z9('snd_select'), Zc = null, i[0x1]();
}
Zo(i3, 'choose');
var i4 = [['MAP', "Go straight to any place"], ['LEAVE', "Back to the fight list"]];
function i5(i, Y) {
  (Zn() || Zg() || ZA() || ZK()) && (ZM ^= 0x1, Z9('snd_menumove'));
  let ix = iw => iw.x >= 0x28 && iw.x < 0x258 && iw.y >= 0x28 && iw.y < 0x78 ? iw.y < 0x50 ? 0x0 : 0x1 : -0x1;
  if (Y && ix(t) >= 0x0 && (ZM = ix(t)), i) {
    let iw = ix(i);
    if (iw < 0x0) {
      ZV = null;
      return;
    }
    ZM = iw;
  }
  if (ZY() || i) {
    Z9('snd_select'), ZM === 0x0 ? Nm() : Ng();
    return;
  }
  (Zl() || Zk()) && (ZV = null);
}
Zo(i5, 'stepMenu');
var i6 = Zo(i => 0x32 + i * 0x1e, 'MAPROW');
function i7(i, Y) {
  let ix = ZE.length + 0x1;
  Zn() && (N0 = (N0 + ix - 0x1) % ix, Z9('snd_menumove')), Zg() && (N0 = (N0 + 0x1) % ix, Z9('snd_menumove'));
  let iw = iT => {
    if (!iT || iT.x < 0x12c || iT.x > 0x278) return -0x1;
    for (let iz = 0x0; iz < ix; iz++) {
      let iX = i6(iz) + (iz === ZE.length ? 0x8 : 0x0);
      if (iT.y >= iX - 0x7 && iT.y < iX + 0x19) return iz;
    }
    return -0x1;
  };
  if (Y && iw(t) >= 0x0 && iw(t) !== N0 && (N0 = iw(t), Z9('snd_menumove')), i) {
    let iT = iw(i);
    if (iT < 0x0) {
      i.x < 0x122 && i.y > 0x1a4 && (ZV = null);
      return;
    }
    N0 = iT, iE();
    return;
  }
  ZY() ? iE() : Zl() && (ZV = null);
  function iE() {
    Z9('snd_select'), N0 === ZE.length ? Ng() : Nz(ZE[N0], true);
  }
  iE;
}
Zo(i7, 'stepMap');
function i8(i, Y) {
  if (N2 && i0(N2)) {
    (ZY() || Zl() || i) && (N2.shown = 0x3b9aca00);
    return;
  }
  Zn() && (N1 = (N1 + 0x2) % 0x3, Z9('snd_menumove')), Zg() && (N1 = (N1 + 0x1) % 0x3, Z9('snd_menumove'));
  let ix = iw => iw && iw.x > 0x190 && iw.y > 0xfc && iw.y < 0x174 ? Math.floor((iw.y - 0xfc) / 0x28) : -0x1;
  if (Y && ix(t) >= 0x0 && (N1 = ix(t)), i) {
    let iw = ix(i);
    if (iw < 0x0) return;
    N1 = iw;
  }
  if (ZY() || i) {
    Z9('snd_select'), N1 === 0x0 ? (ZV = null, No()) : N1 === 0x1 ? N2 = {
      'src': NQ,
      'lines': null,
      'shown': 0x0
    } : NG();
    return;
  }
  Zl() && NG();
}
Zo(i8, 'stepShop');
function i9() {
  let Y = [],
    ix = Zr.moving ? Math.floor(Zr.walk / 0xa) % 0x4 : 0x0;
  Y.push({
    'who': 'kris',
    'x': Zr.x,
    'y': Zr.y,
    'face': Zr.face,
    'fr': ix,
    'feet': Zr.y + 0x4c
  });
  for (let [iw, iE] of [['susie', 0xc], ['ralsei', 0x18]]) {
    let iT = N4[Math.max(0x0, N4.length - 0x1 - iE)] || {
        'x': Zr.x,
        'y': Zr.y,
        'face': Zr.face
      },
      iz = Zy[iw + '_' + iT.face],
      iX = iz.width / 0x4,
      ih = iz.height;
    Y.push({
      'who': iw,
      'x': iT.x + (0x26 - iX * 0x2) / 0x2,
      'y': iT.y + 0x4c - ih * 0x2,
      'face': iT.face,
      'fr': ix,
      'feet': iT.y + 0x4c - 0.01 * iE
    });
  }
  return Y.sort((iJ, iW) => iJ.feet - iW.feet);
}
Zo(i9, 'party');
var iZ = [-0x1, 0x0, 0x1, 0x0, 0x0, -0x1, 0x0, 0x1, -0x1, -0x1, 0x1, 0x1, -0x1, 0x1, 0x1, -0x1];
function iN(i, Y, ix, iw, iE) {
  for (let iT = 0x0; iT < 0x10; iT += 0x2) i.draw_text(Y + iZ[iT], ix + iZ[iT + 0x1], iw, ZN.black);
  i.draw_text(Y, ix, iw, iE);
}
Zo(iN, 'otext');
var ii = Zo(() => h.kit || null, 'kit'),
  iR = Zo(i => {
    let Y = i.state();
    return i.pal(Math.round(Y.h), Y.s);
  }, 'kitPal');
function iY(Y, ix, iw, iE, iT, iz) {
  let iX = Y.ctx,
    ih = iR(ix);
  return ix.stair(iX, iw - 0x2, iE - 0x2, iT + 0x4, iz + 0x4, 0x8, ix.BLACK), ix.stair(iX, iw, iE, iT, iz, 0x6, ih.dim), ix.stair(iX, iw + 0x4, iE + 0x4, iT - 0x8, iz - 0x8, 0x4, ih.face), ih;
}
Zo(iY, 'plate');
function il(Y, ix, iw, iE, iT, iz = ZN.white) {
  let iX = ii();
  if (iX) {
    let iJ = iX.keycap(Y, ix, iw, iE, iR(iX), false),
      iW = iX.natural(iT);
    return iN(Y, ix + iJ + 0x4, iw + 0x1, iW, iz), iJ + 0x4 + Y.string_width(iW, 'fnt_main') + 0x8;
  }
  let ih = o(Y, iE) || Y.string_width(iE, 'fnt_main') + 0x8;
  return Y.draw_set_color(ZN.black), Y.draw_rectangle(ix - 0x1, iw - 0x1, ix + ih, iw + 0x12, false), E(Y, ix, iw, iE), iN(Y, ix + ih + 0x4, iw + 0x2, iT, iz), ih + 0x4 + Y.string_width(iT, 'fnt_main') + 0x8;
}
Zo(il, 'chip');
var ik = Zo((i, Y, ix) => {
  let iw = ii();
  return iw ? Math.max(0x12, Math.ceil(iw.wide(i, iw.FONT, Y)) + 0x8) + 0x4 + i.string_width(iw.natural(ix), 'fnt_main') + 0x8 : (o(i, Y) || i.string_width(Y, 'fnt_main') + 0x8) + 0x4 + i.string_width(ix, 'fnt_main') + 0x8;
}, 'chipW');
function ia(i, Y, ix, iw, iE) {
  i.draw_set_color(ZN.black), i.draw_rectangle(Y + 0x6, ix + 0x6, iw - 0x6, iE - 0x6, false);
  let iT = Zw().darkbox;
  iT && iT(i, Y, ix, iw, iE);
}
Zo(ia, 'darkbox');
function iA(i) {
  let Y = i.ctx;
  !Y || !ZQ || (Nb(), Z6(i, () => {
    if (Y.imageSmoothingEnabled = false, Y.fillStyle = "#000", Y.fillRect(0x0, 0x0, ZI, Zu), Zd >= 0x1) return;
    let iE = ii();
    Nh = iE ? iT => iE.wide(i, iE.FONT, iT) : iT => i.string_width(iT, 'fnt_mainbig');
    let ix = p(),
      iw = !!(ix && ix.id !== ZF);
    ZV === 'shop' ? iF(i, Y) : iw ? iK(i, Y, true) : (iK(i, Y), Zc && iP(i), ZV === 'menu' && iD(i), ZV === 'map' && ib(i, Y)), Zd > 0x0 && (Y.globalAlpha = Math.min(0x1, Zd), Y.fillStyle = "#000", Y.fillRect(0x0, 0x0, ZI, Zu), Y.globalAlpha = 0x1);
  }));
}
Zo(iA, 'draw');
function iK(Y, ix, iw = false) {
  let iE = ZO[Zr.room],
    iT = Zp.x,
    iz = Zp.y;
  ix.drawImage(iE.img, -iT, -iz), Zr.room === ZQ.savepoint.room && ix.drawImage(Zy.savepoint, Math.floor(N5 / 0x5) % 0x6 * 0x14, 0x0, 0x14, 0x13, ZQ.savepoint.x - iT, ZQ.savepoint.y - iz, 0x28, 0x26);
  for (let iL of i9()) {
    let is = Zy[iL.who + '_' + iL.face],
      iy = is.width / 0x4,
      iO = is.height;
    ix.drawImage(is, iL.fr * iy, 0x0, iy, iO, Math.round(iL.x - iT), Math.round(iL.y - iz), iy * 0x2, iO * 0x2);
  }
  if (iE.topImg && ix.drawImage(iE.topImg, -iT, -iz), iw) return;
  for (let iQ of ZC[Zr.room] || []) {
    if (!iQ.f || !iQ.name || NN.has(iQ.f) || iQ.kind === 'npc' || iQ.kind === 'door' && !iQ.click && !(iQ.x <= 0xa || iQ.x + iQ.w >= iE.w - 0xa || ['f1', 'f2', 'front'].includes(Zr.room))) continue;
    let iU = Math.max(0x18, Math.min(iE.w - 0x18, iQ.x + iQ.w / 0x2)),
      iG = iQ.kind === 'door' && iQ.click ? iQ.click[0x1] + 0x1e : Math.max(0x18, iQ.y - 0x4);
    ix.drawImage(Zy.exc, 0x0, 0x0, 0x14, 0xa, Math.round(iU - 0x14 - iT), Math.round(iG - 0x14 - iz + Math.floor(N5 / 0xf) % 0x2), 0x28, 0x14);
  }
  Y.draw_set_font('fnt_main');
  let iX = m(),
    ih = iX ? 'TAP' : 'Z',
    iJ = !Zc && !ZV && !Zv ? NX() : null;
  if (iJ && iJ.name) {
    let im = Math.round(iJ.x + iJ.w / 0x2 - iT),
      ir = Math.round((iJ.kind === 'door' ? Math.min(iJ.y, Zr.y + 0xa) - 0x1a : iJ.y - 0x1a) - iz),
      ip = ik(Y, ih, iJ.name),
      id = Math.max(0x4, Math.min(ZI - ip - 0x4, im - ip / 0x2)),
      iv = Math.max(0x20, Math.min(Zu - 0x18, ir));
    il(Y, id, iv, ih, iJ.name);
  }
  if (iX) {
    for (let [iS, iH, ic] of [[0x8, 0x54, 'LEAVE'], [0x64, 0x46, 'MAP']]) Y.draw_set_color(ZN.black), Y.draw_rectangle(iS, 0x4, iS + iH, 0x1a, false), Y.draw_set_color(Zf.dim), Y.draw_rectangle(iS, 0x4, iS + iH, 0x1a, true), Y.draw_text(iS + Math.round((iH - Y.string_width(ic, 'fnt_main')) / 0x2), 0x8, ic, ZN.white);
  } else {
    let ij = 0x8;
    ij += il(Y, ij, 0x6, 'Esc', 'LEAVE'), il(Y, ij, 0x6, 'M', 'MAP');
  }
  let iW = ZE.length - NN.size,
    iC = iW ? "Found " + NN.size + '/' + ZE.length : "All found";
  if (iN(Y, 0x278 - Y.string_width(iC, 'fnt_main'), 0x8, iC, iW ? ZN.white : ZN.yellow), iW && !iX && !ii()) {
    let iV = iW + " left - M shows where";
    iN(Y, 0x278 - Y.string_width(iV, 'fnt_main'), 0x18, iV, ZN.gray);
  }
  if (Zj && Zj.t > 0x0 && ii()) {
    Zj.t--;
    let iM = ii(),
      R0 = Math.ceil(iM.wide(Y, iM.FONT, Zj.text)) + 0x20;
    iY(Y, iM, Math.round((ZI - R0) / 0x2), 0x22, R0, 0x1e), iM.sayMid(Y, iM.FONT, Zj.text, 0x140, 0x29, iM.GOLD);
  } else {
    if (Zj && Zj.t > 0x0) {
      Zj.t--, Y.draw_set_font('fnt_mainbig');
      let R1 = Y.string_width(Zj.text, 'fnt_mainbig');
      iN(Y, Math.round((ZI - R1) / 0x2), 0x28, Zj.text, ZN.yellow), Y.draw_set_font('fnt_main');
    }
  }
  if (!Zc && !ZV) {
    let R2 = N6 < 0xf0 || N7 > 0x258 ? 0x1 : 0x0;
    if (N8 += (R2 - N8) * 0.05, N8 > 0.02) {
      let R3 = iX ? [['PAD', 'walk'], ['TAP', "go somewhere"], ['Z', 'check']] : [['Arrows', 'walk'], ['X', 'run'], ['Z', 'check'], ['M', 'map'], ['Esc', 'leave']],
        R4 = R3.reduce((R6, [R7, R8]) => R6 + ik(Y, R7, R8), 0x0);
      Y.draw_set_alpha(Math.min(0x1, N8)), ix.globalAlpha = Math.min(0x1, N8);
      let R5 = Math.round((ZI - R4) / 0x2);
      for (let [R6, R7] of R3) R5 += il(Y, R5, 0x1c8, R6, R7);
      Y.draw_set_alpha(0x1), ix.globalAlpha = 0x1;
    }
  }
}
Zo(iK, 'drawRoom');
function ig(Y, ix) {
  let iw = Y.ctx,
    iE = NC(Zc),
    iT = Zc.picks && iE,
    iz = 0x16;
  Zc.lines || (Zc.lines = NJ(Zc.pages[Zc.page], 0x224).slice(0x0, 0x4));
  let iX = 0x1a + Zc.lines.length * iz + (iT ? 0x26 : 0x0),
    ih = Zr.y + 0x26 - Zp.y > 0xfa ? 0x22 : 0x1d4 - iX,
    iJ = iY(Y, ix, 0x18, ih, 0x250, iX),
    iW = Zc.shown;
  if (Zc.lines.forEach((iC, iL) => {
    ix.say(Y, ix.FONT, iC.slice(0x0, Math.max(0x0, iW)), 0x2c, ih + 0xd + iL * iz, ix.WHITE), iW -= iC.length;
  }), i1 = [], !iE && NM(Zc) && Math.floor(N5 / 0x8) % 0x2 && Y.draw_sprite('spr_heartsmall', 0x0, 0x24e, ih + iX - 0x18), iT && NM(Zc)) {
    let iC = ih + 0xd + Zc.lines.length * iz + 0x6,
      iL = 0x2c;
    Zc.picks.forEach((iy, iO) => {
      let iQ = Zc.sel === iO,
        iU = Math.ceil(ix.wide(Y, ix.FONT, iy[0x0])) + 0x3c;
      ix.stair(iw, iL, iC, iU, 0x1c, 0x4, iQ ? iJ.dim : iJ.plate), ix.say(Y, ix.FONT, iy[0x0], iL + 0x1e, iC + 0x4, iQ ? ix.WHITE : ix.TEXT), iQ && ix.gameSoul(Y, iL + 0x10, iC + 0xe), i1.push([iL, iC, iU, 0x1c]), iL += iU + 0x8;
    });
    let is = m() ? "Tap outside: not now" : "X: not now";
    ix.say(Y, ix.FONT, is, 0x254 - ix.wide(Y, ix.FONT, is), iC + 0x4, iJ.soft);
  }
}
Zo(ig, 'drawBoxKit');
function iP(Y) {
  let ix = ii();
  if (ix) {
    ig(Y, ix);
    return;
  }
  let iw = NV();
  ia(Y, 0x18, iw, 0x268, iw + 0xa6), Y.draw_set_font('fnt_mainbig'), Zc.lines || (Zc.lines = NJ(Zc.pages[Zc.page], 0x212).slice(0x0, Zc.picks && NC(Zc) ? 0x2 : 0x3));
  let iE = Zc.shown;
  if (Zc.lines.forEach((iT, iz) => {
    Y.draw_text(0x3a, iw + 0x14 + iz * 0x22, iT.slice(0x0, Math.max(0x0, iE)), ZN.white), iE -= iT.length;
  }), i1 = [], !NC(Zc) && NM(Zc) && Math.floor(N5 / 0x8) % 0x2 && Y.draw_sprite('spr_heartsmall', 0x0, 0x248, iw + 0x86), Zc.picks && NC(Zc) && NM(Zc)) {
    let iT = iw + 0x14 + 0x44 + 0xe,
      iz = Zc.picks.length,
      iX = Zc.picks.map(iW => Y.string_width(iW[0x0], 'fnt_mainbig')),
      ih = Math.max(0x28, Math.floor((0x208 - iX.reduce((iW, iC) => iW + iC, 0x0)) / (iz + 0x1))),
      iJ = 0x3c + (iz === 0x1 ? Math.floor((0x208 - iX[0x0]) / 0x2) : ih);
    Zc.picks.forEach((iW, iC) => {
      Y.draw_text(iJ + 0x18, iT, iW[0x0], Zc.sel === iC ? ZN.yellow : ZN.white), Zc.sel === iC && Y.draw_sprite('spr_heart', 0x0, iJ, iT + 0x8), i1.push([iJ - 0x6, iT - 0x6, iX[iC] + 0x24, 0x2c]), iJ += iX[iC] + 0x18 + ih;
    }), Y.draw_set_font('fnt_main');
    let iW = m() ? "tap outside: not now" : "X: not now";
    Y.draw_text(0x24a - Y.string_width(iW, 'fnt_main'), iw + 0x86, iW, ZN.gray);
  }
}
Zo(iP, 'drawBox');
function iq(i, Y) {
  let ix = i.ctx,
    iw = iY(i, Y, 0x18, 0x1e, 0x250, 0x66);
  i4.forEach(([iE, iT], iz) => {
    let iX = 0x2e + iz * 0x28,
      ih = ZM === iz;
    Y.stair(ix, 0x24, iX - 0x8, 0x238, 0x22, 0x4, ih ? iw.dim : iw.plate), Y.say(i, Y.FONT, Y.natural(iE), 0x4a, iX, ih ? Y.WHITE : Y.TEXT), Y.say(i, Y.FONT, iT, 0x250 - Y.wide(i, Y.FONT, iT), iX, ih ? Y.TEXT : iw.soft), ih && Y.gameSoul(i, 0x36, iX + 0x9);
  });
}
Zo(iq, 'drawMenuKit');
function iD(i) {
  let Y = ii();
  if (Y) {
    iq(i, Y);
    return;
  }
  ia(i, 0x18, 0x1e, 0x268, 0x84), i.draw_set_font('fnt_mainbig'), i4.forEach(([ix, iw], iE) => {
    let iT = 0x2e + iE * 0x28;
    i.draw_text(0x50, iT, ix, ZM === iE ? ZN.yellow : ZN.white), i.draw_set_font('fnt_main'), i.draw_text(0xdc, iT + 0xa, iw, ZM === iE ? ZN.white : ZN.gray), i.draw_set_font('fnt_mainbig'), ZM === iE && i.draw_sprite('spr_heart', 0x0, 0x34, iT + 0x8);
  });
}
Zo(iD, 'drawMenu');
function io(Y, ix, iw) {
  let iE = iw.state();
  ix.fillStyle = "#000", ix.fillRect(0x0, 0x0, ZI, Zu);
  let iT = iY(Y, iw, 0x8, 0x8, 0x118, 0x124);
  ix.drawImage(Zy.townmap, 0x1c, 0x1c);
  let iz = {
    'BOSS\x20RUSH': [0x202, 0x34e],
    'DAILY': [0x3ee, 0x34e],
    'CUSTOM': [0x23a, 0x258],
    'JUKEBOX': [0x39f, 0x258],
    'REPLAYS': [0x355, 0x14a],
    'FIGHTS': [0x2f2, 0xcd]
  };
  for (let [iL, [is, iy]] of Object.entries(iz)) {
    let iO = 0x1c + (is - 0xa0) / 0x5,
      iQ = 0x1c + iy / 0x5;
    ZE[N0] === iL ? iw.gameSoul(Y, iO, iQ) : (ix.fillStyle = NN.has(iL) ? iw.WHITE : iw.GOLD, ix.fillRect(iO - 0x2, iQ - 0x2, 0x5, 0x5));
  }
  iT = iY(Y, iw, 0x128, 0x8, 0x150, 0x1d0), iw.say(Y, iw.FONT, "Where to?", 0x13c, 0x14, iw.WHITE);
  let iX = ZE.length - NN.size,
    ih = iX ? iX + " still to find" : "All " + ZE.length + " found";
  iw.say(Y, iw.FONT, ih, 0x264 - iw.wide(Y, iw.FONT, ih), 0x14, iX ? iw.GOLD : iT.soft);
  let iJ = (iU, iG, im, ir, ip) => {
    let id = iU === N0;
    iw.stair(ix, 0x134, iG - 0x3, 0x138, 0x1a, 0x4, id ? iT.dim : iT.plate), iw.say(Y, iw.FONT, im, 0x154, iG, id ? iw.WHITE : iw.TEXT), ip && iw.say(Y, iw.FONT, 'New', 0x154 + iw.wide(Y, iw.FONT, im) + 0x8, iG, iw.GOLD), ir && iw.say(Y, iw.FONT, ir, 0x262 - iw.wide(Y, iw.FONT, ir), iG, id ? iw.TEXT : iT.soft), id && iw.gameSoul(Y, 0x144, iG + 0xa);
  };
  ZE.forEach((iU, iG) => iJ(iG, i6(iG), iw.natural(iU), Zh[iU], !NN.has(iU))), iJ(ZE.length, i6(ZE.length) + 0x8, "Just take me to the fight list", '', false), iT = iY(Y, iw, 0x8, 0x134, 0x118, 0xa4);
  let iW = ZE[N0];
  iw.say(Y, iw.FONT, iW ? iw.natural(iW) : "Fight list", 0x1c, 0x142, iw.GOLD);
  let iC = iw.wrap(Y, iw.FONT, iW ? ZX[iW] : "Skip the walk and go straight to the fights.", 0xf0, 0x3);
  iC.forEach((iU, iG) => iw.say(Y, iw.FONT, iU, 0x1c, 0x15a + iG * 0x14, iw.TEXT)), iW && iw.say(Y, iw.FONT, Zh[iW], 0x1c, 0x15a + iC.length * 0x14 + 0x2, iT.soft), iw.hints(Y, iE, [{
    'key': 'Z',
    'word': 'Go'
  }, {
    'key': 'X',
    'word': 'Back'
  }], false, {
    'top': true,
    'x': 0x1c,
    'y': 0x1ba
  });
}
Zo(io, 'drawMapKit');
function ib(ix, iw) {
  let iE = ii();
  if (iE) {
    io(ix, iw, iE);
    return;
  }
  iw.fillStyle = "#000", iw.fillRect(0x0, 0x0, ZI, Zu), ia(ix, 0x8, 0x8, 0x120, 0x130), iw.drawImage(Zy.townmap, 0x1c, 0x1c);
  let iT = {
    'BOSS\x20RUSH': [0x202, 0x34e],
    'DAILY': [0x3ee, 0x34e],
    'CUSTOM': [0x23a, 0x258],
    'JUKEBOX': [0x39f, 0x258],
    'REPLAYS': [0x355, 0x14a],
    'FIGHTS': [0x2f2, 0xcd]
  };
  for (let [iO, [iQ, iU]] of Object.entries(iT)) {
    let iG = 0x1c + (iQ - 0xa0) / 0x5,
      im = 0x1c + iU / 0x5;
    ZE[N0] === iO ? ix.draw_sprite('spr_heart', 0x0, iG - 0x8, im - 0x8) : (iw.fillStyle = NN.has(iO) ? "#ffffff" : "#ffff00", iw.fillRect(iG - 0x2, im - 0x2, 0x5, 0x5));
  }
  ia(ix, 0x128, 0x8, 0x278, 0x1d8), ix.draw_set_font('fnt_mainbig'), ix.draw_text(0x144, 0x14, "Where to?", ZN.white), ix.draw_set_font('fnt_main');
  let iz = ZE.length - NN.size,
    iX = iz ? iz + " still to find (NEW)" : "all " + ZE.length + " found";
  ix.draw_text(0x25c - ix.string_width(iX, 'fnt_main'), 0x1e, iX, iz ? ZN.yellow : ZN.gray), ZE.forEach((ir, ip) => {
    let id = i6(ip),
      iv = ip === N0,
      iS = !NN.has(ir);
    iv && (iw.fillStyle = Zf.hover, iw.fillRect(0x13c, id - 0x5, 0x128, 0x1a)), ix.draw_text(0x158, id, ir, iv ? ZN.yellow : ZN.white), iS && ix.draw_text(0x158 + ix.string_width(ir, 'fnt_main') + 0x6, id, 'NEW', ZN.yellow), ix.draw_text(0x1d6, id, Zh[ir], iv ? ZN.white : ZN.gray), iv && ix.draw_sprite('spr_heart', 0x0, 0x142, id);
  });
  let ih = i6(ZE.length) + 0x8;
  iw.fillStyle = "#404040", iw.fillRect(0x140, ih - 0x8, 0x122, 0x1), N0 === ZE.length && (iw.fillStyle = Zf.hover, iw.fillRect(0x13c, ih - 0x5, 0x128, 0x1a), ix.draw_sprite('spr_heart', 0x0, 0x142, ih)), ix.draw_text(0x158, ih, "Just take me to the fight list", N0 === ZE.length ? ZN.yellow : ZN.white), ia(ix, 0x8, 0x130, 0x120, 0x1d8);
  let iJ = ZE[N0];
  ix.draw_set_font('fnt_mainbig'), ix.draw_text(0x24, 0x140, iJ || "FIGHT LIST", ZN.yellow), ix.draw_set_font('fnt_main');
  let iW = (iJ ? ZX[iJ] : "Skip the walk and go straight to the encounters.").split('\x20'),
    iC = '',
    iL = 0x166;
  for (let ir of iW) {
    let ip = iC ? iC + '\x20' + ir : ir;
    ix.string_width(ip, 'fnt_main') > 0xde ? (ix.draw_text(0x24, iL, iC, ZN.white), iL += 0x12, iC = ir) : iC = ip;
  }
  iC && ix.draw_text(0x24, iL, iC, ZN.white), iJ && ix.draw_text(0x24, iL + 0x16, Zh[iJ], ZN.gray);
  let is = m(),
    iy = 0x24;
  iy += il(ix, iy, 0x1b0, is ? 'TAP' : 'Z', 'go'), il(ix, iy, 0x1b0, 'X', 'back');
}
Zo(ib, 'drawMap');
function iB(i, Y, ix) {
  Y.fillStyle = "#000", Y.fillRect(0x0, 0xf0, 0x280, 0xf0);
  let iw = 0x16,
    iE = iY(i, ix, 0x8, 0xf8, 0x188, 0xe0);
  if (N2 && !N2.lines && (N2.lines = N2.src.flatMap(iT => NJ(iT, 0x160))), N2) {
    let iT = N2.shown;
    N2.lines.slice(0x0, 0x9).forEach((iz, iX) => {
      ix.say(i, ix.FONT, iz.slice(0x0, Math.max(0x0, iT)), 0x1c, 0x106 + iX * iw, ix.WHITE), iT -= iz.length;
    });
  }
  iE = iY(i, ix, 0x198, 0xf8, 0xe0, 0xe0), ["Stitch one", 'Talk', 'Leave'].forEach((iz, iX) => {
    let ih = 0x104 + iX * 0x28,
      iJ = N1 === iX;
    ix.stair(Y, 0x1a4, ih - 0x6, 0xc8, 0x20, 0x4, iJ ? iE.dim : iE.plate), ix.say(i, ix.FONT, iz, 0x1c8, ih + 0x1, iJ ? ix.WHITE : ix.TEXT), iJ && ix.gameSoul(i, 0x1b6, ih + 0xa);
  }), ix.wrap(i, ix.FONT, "Stitch one opens the encounter editor.", 0xc0, 0x3).forEach((iz, iX) => ix.say(i, ix.FONT, iz, 0x1a8, 0x184 + iX * 0x14, iE.soft));
}
Zo(iB, 'drawShopKit');
function iF(Y, ix) {
  ix.drawImage(Zy.seam_bg, 0x0, 0x0, 0x280, 0xf0);
  let iw = N2 && !NM(N2),
    iE = iw ? Zy.seam_talk : Zy.seam_idle,
    iT = iE.width / 0x87,
    iz = Math.floor(N5 / (iw ? 0x4 : 0x8)) % iT;
  ix.drawImage(iE, iz * 0x87, 0x0, 0x87, 0x6d, 0xa0, 0x22, 0x10e, 0xda);
  let iX = ii();
  if (iX) {
    iB(Y, ix, iX);
    return;
  }
  if (ix.fillStyle = "#000", ix.fillRect(0x0, 0xf0, 0x280, 0xf0), ia(Y, 0x0, 0xf0, 0x19f, 0x1e0), ia(Y, 0x190, 0xf0, 0x280, 0x1e0), Y.draw_set_font('fnt_mainbig'), N2 && !N2.lines && (Nh = ih => Y.string_width(ih, 'fnt_mainbig'), N2.lines = N2.src.flatMap(ih => NJ(ih, 0x159))), N2) {
    let ih = N2.shown,
      iJ = N2.lines.length > 0x5 ? 0x20 : 0x24;
    N2.lines.forEach((iW, iC) => {
      Y.draw_text(0x1e, 0x102 + iC * iJ, iW.slice(0x0, Math.max(0x0, ih)), ZN.white), ih -= iW.length;
    });
  }
  ["Stitch one", 'Talk', 'Leave'].forEach((iW, iC) => Y.draw_text(0x1e0, 0x104 + iC * 0x28, iW, N1 === iC ? ZN.yellow : ZN.white)), Y.draw_sprite('spr_heart', 0x0, 0x1c2, 0x10e + N1 * 0x28), Y.draw_set_font('fnt_main'), Y.draw_text(0x1c4, 0x1b0, "ENCOUNTER EDITOR", ZN.gray);
}
Zo(iF, 'drawShop');
var iI = ZE.slice(),
  iu = {
    'resume': Zo(() => NY, 'resume'),
    'K': Zr,
    'ROOM': ZO,
    'THINGS': ZC,
    'visited': Zo(() => NN, 'visited'),
    'state': Zo(() => ({
      'room': Zr.room,
      'x': Zr.x,
      'y': Zr.y,
      'screen': ZV,
      'box': !!Zc,
      'typing': !!(Zc && !NM(Zc)),
      'fade': Zd,
      'cam': [Zp.x, Zp.y],
      'target': !!N3
    }), 'state'),
    'warpTo': Nz,
    'checkPlace': NL
  };
export { iI as PLACES, iu as _test, NA as open, NK as pendingReturn };