import { x as t } from "./c-CCL3XGEJ.js";
import "./c-VB7PBWB7.js";
import { Da as o, E as f, Ea as E, Ga as h, S as s, T as y, U as m, W as p, X as d, ca as S, f as e, j as c, ja as Z0, ka as Z1, l as Z2, la as Z3, pa as Z4, xa as Z5, ya as Z6 } from "./c-AXDRFE3U.js";
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
import { Aa as Z7, La as Z8, Ra as Z9, gb as ZZ, h as ZN, hb as Zi, jb as ZR, na as ZY, oa as Zl, pa as Zk, ra as Za, ta as ZA, ua as ZK, va as Zn, wa as Zg, xa as ZP, ya as Zq, za as ZD } from "./c-PBMEVLU6.js";
import { a as Zo, l as Zb } from "./c-XSSGDLV7.js";
Zb();
var ZB = "castletown";
var ZF = "castletown";
var ZI = 640;
var Zu = 480;
var Zx = "assets/castletown/";
var Zw = Zo(() => e() || {}, "host");
var Zf = Z5;
var ZE = ["FIGHTS", "BOSS RUSH", "DAILY", "CUSTOM", "PARTY", "PRACTICE", "REPLAYS", "GAMES", "COLLECTION", "JUKEBOX", "CHAPTERS", "MODS"];
var ZT = {
  FIGHTS: ["* The throne room. Every fight in the sim is through these doors: all five chapters, plus UNDERTALE.", "* Win one and it gets a rank and a score. Your best shows on its card, so you can always come back and beat it.", "* Tip: hold R in a fight to rewind."],
  "BOSS RUSH": ["* The Party Dojo. This is where you go to really test yourself.", "* Boss rush is a chapter's bosses back to back. Gauntlet is every attack, one after another. On the menu, both are under Modes."],
  PARTY: ["* Susie's room. This is where you choose who fights with you.", "* Swap anyone in, copy a hero and their stats, or build your own team. A custom team's wins don't earn a rank."],
  DAILY: ["* Top Bakery. One fresh fight comes out of the oven every day.", "* Everybody gets the same one, so you can compare. Try to keep a streak going."],
  PRACTICE: ["* The dungeon. It's quiet down here. Good for getting better at something.", "* Practice loops one attack until you've got it. Attack lab plays any attack on its own. Both are under Modes."],
  REPLAYS: ["* A SAVE point. Every fight you finish is kept here as a replay.", "* Watch them back, save a clip (F9 in a fight) or share one. The ending screen can open the one you just played."],
  GAMES: ["* Lancer's room. He hid all the extra games in here.", "* Darkdle, Mania, Blackjack, Spell Card Rush... Not fights. Just for fun. They're under Modes on the menu."],
  COLLECTION: ["* Your room. Everything you've seen and done ends up on these shelves.", "* The bestiary has every enemy. Achievements and stats show how far you've got."],
  JUKEBOX: ["* The cafe. Every song from the games is on the menu.", "* Pick any track and just listen. The menu music goes quiet while it plays, and some songs have lyrics to follow."],
  CHAPTERS: ["* The cliff. You can see every chapter from up here.", "* Rewatch the chapter intros and the trailers whenever you like."],
  MODS: ["* A big golden door. Fan-made mods of real fights are on the other side.", "* In the list, each mod sits right after the fight it changes."]
};
var Zz = {
  FIGHTS: [["Go in", () => ND()]],
  PARTY: [["Pick a team", () => Nq(() => {
    let i = Zw().menu;
    if (i) {
      i.clickIcon(3);
    }
  })]],
  "BOSS RUSH": [["Boss rush", () => Nq(() => Zs().openChallenges("rush"))], ["Gauntlet", () => Nq(() => Zs().openChallenges("gauntlet"))]],
  DAILY: [["Play it", () => Nq(() => {
    let i = Z0("practice");
    if (i && i.startDaily) {
      i.startDaily();
    } else {
      Zs().openChallenges("daily");
    }
  })]],
  PRACTICE: [["Practice", () => Nq(() => Zs().openChallenges("practice"))], ["Attack lab", () => Nq(() => Zs().openChallenges("lab"))]],
  REPLAYS: [["Look", () => Nq(() => Zs().openReplays())]],
  GAMES: [["Go in", () => Nq(() => {
    let i = Z0("games");
    if (i) {
      i.open();
    }
  })]],
  COLLECTION: [["Bestiary", () => Nq(() => S("bestiary:open"))], ["Achievements", () => Nq(() => {
    let i = f("ach.gallery");
    if (i) {
      i.onUse(c());
    }
  })], ["Stats", () => Nq(() => Zs().openToolbox("stats"))]],
  JUKEBOX: [["Listen", () => Nq(() => S("jukebox:open"))]],
  CHAPTERS: [["Watch", () => Nq(() => S("trailers:open"))]],
  MODS: [["Open it", () => ND(NB)]]
};
var ZX = {
  FIGHTS: "Every fight - all the chapters and UNDERTALE.",
  "BOSS RUSH": "Bosses back to back, or every attack in a row.",
  DAILY: "One new fight a day, same for everybody.",
  CUSTOM: "Build your own fight, up to 200 enemies.",
  PARTY: "Who fights with you, and custom teams.",
  PRACTICE: "Repeat one attack, or pull it apart in the lab.",
  REPLAYS: "Your replays, clips and save states.",
  GAMES: "Darkdle, Mania, Blackjack and the other games.",
  COLLECTION: "Bestiary, achievements and stats.",
  JUKEBOX: "Every song, with lyrics.",
  CHAPTERS: "Chapter intros and trailers.",
  MODS: "Fan-made mods of real fights."
};
var Zh = {
  FIGHTS: "Castle, 1F",
  "BOSS RUSH": "Party Dojo",
  DAILY: "Top Bakery",
  CUSTOM: "Seam's shop",
  PARTY: "Susie's room, 2F",
  PRACTICE: "Castle dungeon",
  REPLAYS: "Save point",
  GAMES: "Lancer's room, 2F",
  COLLECTION: "Kris's room, 2F",
  JUKEBOX: "Cafe",
  CHAPTERS: "West cliff",
  MODS: "Golden door"
};
var ZJ = {
  FIGHTS: ["f1", 600, 330, "u"],
  "BOSS RUSH": ["dojo", 215, 290, "l"],
  DAILY: ["bakery", 308, 380, "u"],
  CUSTOM: ["town", 567, 566, "u"],
  PARTY: ["susie", 298, 276, "u"],
  PRACTICE: ["dungeon", 1000, 240, "u"],
  REPLAYS: ["town", 780, 270, "r"],
  GAMES: ["f2", 823, 230, "u"],
  COLLECTION: ["kris", 320, 360, "u"],
  JUKEBOX: ["cafe", 440, 320, "u"],
  CHAPTERS: ["cliff", 190, 290, "l"],
  MODS: ["east", 420, 300, "u"]
};
var ZW = {
  town: {
    0: {
      say: "* (That's the road out of town. Nothing else to see that way.)"
    },
    1: ["east", "W", "r"],
    2: ["cliff", "X", "l"],
    3: ["front", "A", "u"],
    4: ["bakery", "X", "u"],
    5: ["cafe", "X", "u"],
    6: ["dojo", "X", "u"],
    7: {
      shop: true
    }
  },
  front: {
    0: ["town", "B", "d"],
    1: ["f1", "X", "u"]
  },
  f1: {
    0: ["dungeon", "W", "r"],
    1: ["front", "X", "d"],
    2: ["f2", "A", "r"]
  },
  f2: {
    0: ["kris", "V", "u"],
    1: ["susie", "W", "u"],
    2: {
      feature: "GAMES"
    },
    3: ["f1", "B", "d"]
  },
  dungeon: {
    0: ["f1", "W", "d"]
  },
  kris: {
    0: ["f2", "V", "d"]
  },
  susie: {
    0: ["f2", "W", "d"]
  },
  dojo: {
    0: ["town", "U", "d"]
  },
  cafe: {
    0: ["town", "S", "d"]
  },
  bakery: {
    0: ["town", "T", "d"]
  },
  cliff: {
    0: ["town", "R", "r"]
  },
  east: {
    0: ["town", "X", "l"]
  }
};
var ZC = {
  town: [{
    kind: "spot",
    f: "REPLAYS",
    name: "SAVE POINT",
    x: 826,
    y: 290,
    w: 54,
    h: 52
  }, {
    kind: "door",
    door: 6,
    f: "BOSS RUSH",
    name: "PARTY DOJO",
    click: [384, 650, 284, 196]
  }, {
    kind: "door",
    door: 4,
    f: "DAILY",
    name: "TOP BAKERY",
    click: [923, 622, 196, 234]
  }, {
    kind: "door",
    door: 5,
    f: "JUKEBOX",
    name: "CAFE",
    click: [798, 293, 262, 318]
  }, {
    kind: "door",
    door: 7,
    f: "CUSTOM",
    name: "SEAM'S SHOP",
    click: [476, 377, 208, 228]
  }, {
    kind: "door",
    door: 3,
    f: "FIGHTS",
    name: "CASTLE"
  }, {
    kind: "door",
    door: 2,
    f: "CHAPTERS",
    name: "WEST CLIFF"
  }, {
    kind: "door",
    door: 1,
    f: "MODS",
    name: "EAST"
  }],
  front: [{
    kind: "door",
    door: 1,
    f: "FIGHTS",
    name: "CASTLE"
  }],
  f1: [{
    kind: "spot",
    f: "FIGHTS",
    name: "THRONE ROOM",
    x: 560,
    y: 120,
    w: 120,
    h: 150
  }, {
    kind: "door",
    door: 2,
    f: "GAMES",
    name: "UPSTAIRS"
  }, {
    kind: "door",
    door: 0,
    f: "PRACTICE",
    name: "DUNGEON"
  }],
  f2: [{
    kind: "door",
    door: 0,
    f: "COLLECTION",
    name: "KRIS'S ROOM"
  }, {
    kind: "door",
    door: 1,
    f: "PARTY",
    name: "SUSIE'S ROOM"
  }, {
    kind: "door",
    door: 2,
    f: "GAMES",
    name: "LANCER'S ROOM"
  }],
  dojo: [{
    kind: "spot",
    f: "BOSS RUSH",
    name: "DOJO",
    x: 79,
    y: 278,
    w: 123,
    h: 122
  }],
  bakery: [{
    kind: "spot",
    f: "DAILY",
    name: "COUNTER",
    x: 120,
    y: 200,
    w: 400,
    h: 92
  }],
  cafe: [{
    kind: "spot",
    f: "JUKEBOX",
    name: "CAFE",
    x: 370,
    y: 100,
    w: 270,
    h: 112
  }],
  dungeon: [{
    kind: "spot",
    f: "PRACTICE",
    name: "CELLS",
    x: 880,
    y: 200,
    w: 520,
    h: 112
  }],
  kris: [{
    kind: "spot",
    f: "COLLECTION",
    name: "YOUR STUFF",
    x: 150,
    y: 150,
    w: 350,
    h: 130
  }],
  susie: [{
    kind: "spot",
    f: "PARTY",
    name: "YOUR TEAM",
    x: 245,
    y: 235,
    w: 145,
    h: 85
  }],
  cliff: [{
    kind: "spot",
    f: "CHAPTERS",
    name: "CHEST",
    x: 100,
    y: 300,
    w: 80,
    h: 80
  }],
  east: [{
    kind: "spot",
    f: "MODS",
    name: "GOLDEN DOOR",
    x: 350,
    y: 250,
    w: 170,
    h: 80
  }]
};
var ZL = ["dojo", "cafe", "bakery", "kris", "susie"];
var Zs = Zo(() => Z0("hub") || {}, "hub");
var Zy = {};
var ZO = {};
var ZQ = null;
var ZU = null;
var ZG = Zo(i => new Promise((Y, ix) => {
  let iw = new Image();
  iw.onload = () => Y(iw);
  iw.onerror = () => ix(new Error("could not load " + i));
  iw.src = Zx + i;
}), "img");
function Zm() {
  return ZU || (ZU = (async () => {
    let i = await fetch(Zx + "rooms/raw.json");
    if (!i.ok) {
      throw new Error("rooms/raw.json " + i.status);
    }
    ZQ = await i.json();
    let Y = [];
    let ix = ["savepoint", "exc", "seam_bg", "seam_talk", "seam_idle", "townmap"];
    for (let iw of ["kris", "susie", "ralsei"]) {
      for (let iE of "durl") {
        ix.push(iw + "_" + iE);
      }
    }
    for (let iT of ix) {
      Y.push(ZG("sprites/" + iT + ".png").then(iz => {
        Zy[iT] = iz;
      }));
    }
    for (let [iz, iX] of Object.entries(ZQ.rooms)) {
      ZO[iz] = {
        ...iX
      };
      Y.push(ZG("rooms/" + iz + ".png").then(ih => {
        ZO[iz].img = ih;
      }));
      if (iX.top) {
        Y.push(ZG("rooms/" + iz + "_top.png").then(ih => {
          ZO[iz].topImg = ih;
        }));
      }
      Y.push(ZG("rooms/" + iz + "_coll.png").then(ih => {
        let iJ = document.createElement("canvas");
        iJ.width = ih.width;
        iJ.height = ih.height;
        let iW = iJ.getContext("2d");
        iW.drawImage(ih, 0, 0);
        let iC = iW.getImageData(0, 0, ih.width, ih.height).data;
        let iL = new Uint8Array(ih.width * ih.height);
        for (let is = 0; is < iL.length; is++) {
          iL[is] = iC[is * 4 + 3] > 0 ? 1 : 0;
        }
        ZO[iz].coll = iL;
      }));
    }
    await Promise.all(Y);
    for (let [ih, iJ] of Object.entries(ZC)) {
      for (let iW of iJ) {
        if (iW.kind === "door") {
          Object.assign(iW, ZO[ih].doors[iW.door]);
        }
      }
    }
    for (let [iC, iL] of Object.entries(ZO)) {
      for (let is of iL.npcs || []) {
        (ZC[iC] = ZC[iC] || []).push({
          kind: "npc",
          name: "",
          ...is,
          line: is.lines.join(" ").replace(/\s+/g, " ")
        });
      }
    }
    for (let [iy, iO] of Object.entries(ZO)) {
      iO.doors.forEach((iQ, iU) => {
        let iG = ZC[iy] = ZC[iy] || [];
        if (!iG.some(im => im.kind === "door" && im.door === iU)) {
          iG.push({
            kind: "door",
            door: iU,
            name: "",
            ...iQ
          });
        }
      });
    }
  })().catch(i => {
    ZU = null;
    throw i;
  }), ZU);
}
Zo(Zm, "loadAll");
var Zr = {
  room: "town",
  x: 740,
  y: 200,
  face: "d",
  walk: 0,
  run: 0,
  moving: false
};
var Zp = {
  x: 0,
  y: 0
};
var Zd = 0;
var Zv = 0;
var ZS = null;
var ZH = null;
var Zc = null;
var Zj = null;
var ZV = null;
var ZM = 0;
var N0 = 0;
var N1 = 0;
var N2 = null;
var N3 = null;
var N4 = [];
var N5 = 0;
var N6 = 0;
var N7 = 0;
var N8 = 1;
var N9 = null;
var NZ = false;
var NN = new Set();
function Ni() {
  try {
    NN = new Set(JSON.parse(Z1(ZB, "visited", "[]") || "[]"));
  } catch {
    NN = new Set();
  }
}
Zo(Ni, "loadVisited");
function NR(i) {
  if (!!i && !NN.has(i)) {
    NN.add(i);
    Z3(ZB, "visited", JSON.stringify([...NN]));
  }
}
Zo(NR, "visit");
var NY = null;
var Nl = null;
var Nk = false;
var Na = 0;
async function NA(Y = {}) {
  if (d(ZF)) {
    if (Y.map && !ZV) {
      Zc = null;
      Nm();
    } else if (Y.place && ZJ[Y.place]) {
      Nz(Y.place, true);
    }
    return;
  }
  let ix = p();
  let iw = Zw().menu ? Zw().menu.menuno : 0;
  try {
    await Zm();
  } catch (iX) {
    Z4("The tour could not load: " + (iX && iX.message || iX), {
      kind: "error"
    });
    return;
  }
  let iE = Zw().menu;
  let iT = p();
  if (d(ZF) || c().state !== "menu" || iE && (iE.pending || iE.start || iE.menuno !== iw) || iT && iT !== ix) {
    return;
  }
  Ni();
  Z3(ZB, "opened", 1);
  Zc = null;
  ZV = null;
  N3 = null;
  Zd = 1;
  Zv = -1;
  ZS = null;
  ZH = null;
  N6 = 0;
  N7 = 0;
  N8 = 1;
  let iz = Y.resume || NY;
  NY = null;
  if (iz) {
    NE(iz.room, iz.x, iz.y, iz.face);
  } else {
    let ih = ZO.town.markers.B;
    NE("town", ih[0], ih[1], "d");
  }
  try {
    Z8(["snd_dooropen", "snd_doorclose", "snd_text", "snd_select", "snd_menumove"]);
  } catch {}
  N9 = ZR();
  try {
    Nl = ZZ("castletown", 0.8);
    Nk = false;
  } catch {}
  NZ = true;
  Na = performance.now();
  s({
    id: ZF,
    owner: ZB,
    pauses: true,
    draw: iA,
    step: Nc,
    onKey: Nd,
    onPointer: Np,
    onClose: Nn
  });
  if (!iz && !Z1(ZB, "hinted", 0)) {
    Z3(ZB, "hinted", 1);
    NW(m() ? "* (Use the pad to walk, or just tap where you want to go. MAP lists every place.)" : "* (Walk with the arrow keys and press Z near anything. Press M for a map if you'd rather skip the walk.)");
  }
  if (Y.map) {
    Nm();
  }
  if (Y.place && ZJ[Y.place]) {
    let [iJ, iW, iC, iL] = ZJ[Y.place];
    NE(iJ, iW, iC, iL);
    ZH = () => NL(Y.place);
  }
}
Zo(NA, "open");
var NK = Zo(() => NY ? NY.kind : null, "pendingReturn");
function Nn() {
  if (NZ) {
    NZ = false;
    try {
      Zi();
      if (N9 && (!NY || NY.kind !== "fight")) {
        ZZ(N9);
      }
    } catch {}
    Nl = null;
  }
}
Zo(Nn, "onClose");
function Ng() {
  NY = null;
  y(ZF);
}
Zo(Ng, "leave");
function NP(i) {
  NY = {
    room: Zr.room,
    x: Zr.x,
    y: Zr.y,
    face: Zr.face,
    kind: i,
    fought: false,
    sawEditor: false
  };
  y(ZF);
}
Zo(NP, "stepAside");
function Nq(i) {
  try {
    i();
  } catch (Y) {
    Z4("That did not open: " + (Y && Y.message || Y), {
      kind: "warn"
    });
  }
}
Zo(Nq, "feature");
function ND(ix) {
  NP("list");
  let iT = Zw().menu;
  if (iT) {
    if (iT.menuno === 6 && iT.closeEditor) {
      iT.closeEditor();
    } else if (iT.menuno) {
      iT.menuno = 0;
      iT.submenu = 0;
      iT.list = null;
    }
    if (iT.page && iT.setPage) {
      iT.setPage(0);
    }
    iT.zone = "list";
  }
  if (ix) {
    ix();
  }
  Z4("Pick a fight - you'll be back in Castle Town after it. TOUR goes back right away.", {
    ms: 5000
  });
}
Zo(ND, "toList");
function No() {
  NP("editor");
  let i = Zw().menu;
  let Y = (Zw().fights || []).find(ix => ix.mode === "editor");
  if (i && i.openEditor) {
    i.openEditor();
  } else if (Y && Zw().startFight) {
    Zw().startFight(Y);
  }
}
Zo(No, "toEditor");
Z2("fightStart", () => {
  if (d(ZF)) {
    NP("fight");
    NY.fought = true;
  } else if (NY) {
    NY.fought = true;
  }
}, {
  owner: ZB
});
Z2("menuDraw", (i, Y) => {
  if (!NY || Y.state !== "menu" || d()) {
    return;
  }
  let ix = Zw().menu;
  if (!ix) {
    return;
  }
  if (NY.kind === "editor") {
    if (ix.menuno === 6) {
      NY.sawEditor = true;
      return;
    }
    if (!NY.sawEditor && !NY.fought) {
      return;
    }
  } else if (NY.kind === "list" && !NY.fought) {
    return;
  }
  if (ix.menuno !== 0 || ix.pending) {
    return;
  }
  NA({
    resume: NY
  });
}, {
  owner: ZB,
  priority: -20
});
function Nb() {
  let i = p();
  let Y = !!i && i.id !== ZF;
  if (!!Nl && Y !== Nk) {
    Nk = Y;
    try {
      if (Y) {
        Nl.pause();
      } else {
        let ix = Nl.play();
        if (ix && ix.catch) {
          ix.catch(() => {});
        }
      }
    } catch {}
  }
}
Zo(Nb, "duck");
function NB() {
  let i = Zw().menu;
  if (!i) {
    return;
  }
  if (i.openTab) {
    i.openTab("ALL");
  }
  let Y = (i.fightList ? i.fightList() : []).findIndex(ix => ix && ix.mod);
  if (Y >= 0) {
    i.zone = "list";
    i.fightsel = Y;
    i.ftop = Math.max(0, Y - 2);
  }
}
Zo(NB, "showMods");
function NF(Y, ix, iw, iE, iT) {
  let iz = ZO[Y];
  ix = Math.round(ix);
  iw = Math.round(iw);
  if (ix < 0 || iw < 0 || ix + iE > iz.w || iw + iT > iz.h) {
    return true;
  }
  for (let iX = iw; iX < iw + iT; iX += 2) {
    for (let ih = ix; ih < ix + iE; ih += 2) {
      if (iz.coll[iX * iz.w + ih]) {
        return true;
      }
    }
  }
  for (let iJ = iw; iJ < iw + iT; iJ += 2) {
    if (iz.coll[iJ * iz.w + ix + iE - 1]) {
      return true;
    }
  }
  for (let iW = ix; iW < ix + iE; iW += 2) {
    if (iz.coll[(iw + iT - 1) * iz.w + iW]) {
      return true;
    }
  }
  return false;
}
Zo(NF, "coll");
var NI = Zo((i, Y) => [i + 2, Y + 50, 34, 26], "BOX");
var Nu = Zo((i, Y) => i[0] < Y.x + Y.w && i[0] + i[2] > Y.x && i[1] < Y.y + Y.h && i[1] + i[3] > Y.y, "hit");
function Nx(i, Y) {
  let ix = Math.max(Y.x - (i[0] + i[2]), i[0] - (Y.x + Y.w), 0);
  let iw = Math.max(Y.y - (i[1] + i[3]), i[1] - (Y.y + Y.h), 0);
  return Math.hypot(ix, iw);
}
Zo(Nx, "gap");
function Nw(i, Y) {
  let ix = ZO[Zr.room];
  let iw = Math.round(i + 19 - ZI / 2);
  let iE = Math.round(Y + 38 - Zu / 2);
  return [ix.w <= ZI ? Math.round((ix.w - ZI) / 2) : Math.max(0, Math.min(ix.w - ZI, iw)), ix.h <= Zu ? Math.round((ix.h - Zu) / 2) : Math.max(0, Math.min(ix.h - Zu, iE))];
}
Zo(Nw, "camFor");
function Nf() {
  let [i, Y] = Nw(Zr.x, Zr.y);
  Zp.x = i;
  Zp.y = Y;
}
Zo(Nf, "snapCamera");
function NE(i, Y, ix, iw) {
  Zr.room = i;
  Zr.x = Y;
  Zr.y = ix;
  Zr.face = iw;
  Zr.walk = 0;
  Zr.run = 0;
  Zr.moving = false;
  N4 = [];
  for (let iE = 0; iE < 40; iE++) {
    N4.push({
      x: Y,
      y: ix,
      face: iw
    });
  }
  Nf();
}
Zo(NE, "placeKris");
function NT(i, Y, ix, iw, iE, iT) {
  if (!(Zv > 0)) {
    ZS = {
      to: i,
      x: Y,
      y: ix,
      face: iw
    };
    Zv = 1;
    ZH = iT || null;
    N3 = null;
    if (iE) {
      Z9(iE, {
        volume: 0.5
      });
    }
  }
}
Zo(NT, "goRoom");
function Nz(i, Y) {
  let [ix, iw, iE, iT] = ZJ[i];
  ZV = null;
  NT(ix, iw, iE, iT, null, Y ? () => NL(i) : null);
}
Zo(Nz, "warpTo");
function NX() {
  let i = NI(Zr.x, Zr.y);
  let Y = null;
  let ix = 1000000000;
  for (let iw of ZC[Zr.room] || []) {
    let iE = Nx(i, iw);
    let iT = iw.kind === "door" ? 30 : 44;
    if (iE <= iT && iE < ix) {
      ix = iE;
      Y = iw;
    }
  }
  return Y;
}
Zo(NX, "nearest");
var Nh = null;
function NJ(Y, ix) {
  if (!Nh) {
    return [Y];
  }
  let iw = Y.split(" ");
  let iE = [];
  let iT = "";
  for (let iz of iw) {
    let iX = iT ? iT + " " + iz : iz;
    if (Nh(iX) > ix && iT) {
      iE.push(iT);
      iT = (iE.length && Y.startsWith("*") ? "  " : "") + iz;
    } else {
      iT = iX;
    }
  }
  if (iT) {
    iE.push(iT);
  }
  return iE;
}
Zo(NJ, "wrap");
function NW(i, Y = null, ix = null) {
  Zc = {
    pages: Array.isArray(i) ? i : [i],
    page: 0,
    lines: null,
    shown: 0,
    picks: Y,
    sel: 0,
    feat: ix
  };
  N3 = null;
}
Zo(NW, "say");
var NC = Zo(i => i.page >= i.pages.length - 1, "lastPage");
function NL(i) {
  if (!NN.has(i)) {
    NR(i);
    Zj = {
      text: NN.size === ZE.length ? "All " + ZE.length + " places found" : "New place, " + NN.size + "/" + ZE.length,
      t: 75
    };
  }
  if (i === "CUSTOM") {
    NU();
    return;
  }
  NW(ZT[i], Zz[i], i);
}
Zo(NL, "checkPlace");
function Ns(i) {
  let Y = (ZW[Zr.room] || {})[i];
  if (Y) {
    if (Array.isArray(Y)) {
      let [ix, iw, iE] = Y;
      let iT = ZO[ix].markers[iw];
      NT(ix, iT[0], iT[1], iE, ZL.includes(ix) ? "snd_dooropen" : ZL.includes(Zr.room) ? "snd_doorclose" : null);
    } else {
      Zr.y += Zr.face === "u" ? 10 : Zr.face === "d" ? -10 : 0;
      Zr.x += Zr.face === "l" ? 10 : Zr.face === "r" ? -10 : 0;
      N3 = null;
      if (Y.say) {
        NW(Y.say);
      } else if (Y.feature) {
        NL(Y.feature);
      } else if (Y.shop) {
        NU();
      }
    }
  }
}
Zo(Ns, "useDoor");
function Ny(i) {
  N3 = null;
  if (i.kind === "spot") {
    NL(i.f);
  } else if (i.kind === "npc") {
    NW(i.line);
  } else if (i.kind === "door") {
    Ns(i.door);
  }
}
Zo(Ny, "act");
var NO = ["* Hee hee... Looking for a fight nobody's seen before?", "* I can stitch one up. Any enemies you like... up to 200."];
var NQ = ["* Pick the enemies, pick their attacks, pick the music.", "* Then I sew it all together. Simple, isn't it? Hee hee."];
function NU() {
  NR("CUSTOM");
  ZV = "shop";
  N1 = 0;
  N3 = null;
  N2 = {
    src: NO,
    lines: null,
    shown: 0
  };
  Z9("snd_dooropen", {
    volume: 0.5
  });
}
Zo(NU, "openShop");
function NG() {
  ZV = null;
  let i = ZO.town.markers.V;
  NT("town", i[0], i[1], "d", "snd_doorclose");
}
Zo(NG, "leaveShop");
function Nm() {
  ZV = "map";
  N0 = Math.max(0, N0);
  N3 = null;
  Z9("snd_select");
}
Zo(Nm, "openMap");
var Nr = null;
function Np(i) {
  Nr = {
    x: i.x,
    y: i.y
  };
  return true;
}
Zo(Np, "onPointer");
function Nd(i, Y) {
  if (Y === "Escape") {
    if (ZV === "map" || ZV === "menu") {
      ZV = null;
    } else if (ZV === "shop") {
      NG();
    } else if (Zc) {
      Zc = null;
    } else if (performance.now() - Na > 1000) {
      Ng();
    }
    return true;
  }
  let ix = String(i.key || "").toLowerCase();
  if (ix === "m" && !i.ctrlKey && !i.metaKey) {
    if (ZV === "map") {
      ZV = null;
    } else if (!ZV && !Zc && !Zv) {
      Nm();
    }
    return true;
  } else if (ix === "f" && !i.ctrlKey && !i.metaKey && ZV !== "shop") {
    Ng();
    return true;
  } else {
    return false;
  }
}
Zo(Nd, "onKey");
var Nv = Zo((i, Y, ix, iw) => t.kind === "mouse" && t.inside && t.x >= i && t.y >= Y && t.x < i + ix && t.y < Y + iw, "hovered");
var NS = {
  x: -1,
  y: -1
};
var NH = Zo(() => t.kind === "mouse" && t.inside && (t.x !== NS.x || t.y !== NS.y), "ptrMoved");
function Nc() {
  N5++;
  let Y = Nr;
  Nr = null;
  let ix = NH();
  NS = {
    x: t.x,
    y: t.y
  };
  if (Zv) {
    Zd += Zv / 12;
    if (Zv > 0 && Zd >= 1) {
      Zd = 1;
      if (ZS) {
        NE(ZS.to, ZS.x, ZS.y, ZS.face);
        ZS = null;
      }
      Zv = -1;
    } else if (Zv < 0 && Zd <= 0 && (Zd = 0, Zv = 0, ZH)) {
      let iO = ZH;
      ZH = null;
      iO();
    }
    return;
  }
  if (Y && ZV !== "shop" && Y.y < 30) {
    if (Y.x < 100) {
      Ng();
      return;
    }
    if (Y.x < 190) {
      if (ZV === "map") {
        ZV = null;
      } else {
        Zc = null;
        Nm();
      }
      return;
    }
  }
  if (ZV === "shop") {
    return i8(Y, ix);
  }
  if (ZV === "map") {
    return i7(Y, ix);
  }
  if (ZV === "menu") {
    return i5(Y, ix);
  }
  if (Zc) {
    return i2(Y, ix);
  }
  if (Zk()) {
    ZV = "menu";
    ZM = 0;
    Z9("snd_select");
    return;
  }
  if (Y) {
    Nj(Y);
  }
  let iw = ZD();
  let iE = Z7();
  let iT = ZP();
  let iz = Zq();
  if (iw || iE || iT || iz) {
    N3 = null;
  }
  if (N3) {
    let iQ = N3.x - Zr.x;
    let iU = N3.y - Zr.y;
    iT = iQ < -3;
    iz = iQ > 3;
    iw = iU < -3;
    iE = iU > 3;
  }
  let iX = Za() || N3 && Math.hypot(N3.x - Zr.x, N3.y - Zr.y) > 160;
  if (iX) {
    Zr.run++;
  } else {
    Zr.run = 0;
  }
  let ih = iX ? Zr.run > 60 ? 9 : Zr.run > 10 ? 8 : 6 : 4;
  let iJ = 0;
  let iW = 0;
  if (iz) {
    iJ = ih;
    Zr.face = "r";
  }
  if (iT) {
    iJ = -ih;
    Zr.face = "l";
  }
  if (iE) {
    iW = ih;
    Zr.face = "d";
  }
  if (iw) {
    iW = -ih;
    Zr.face = "u";
  }
  if (N3) {
    if (Math.abs(N3.x - Zr.x) < ih) {
      iJ = N3.x - Zr.x;
    }
    if (Math.abs(N3.y - Zr.y) < ih) {
      iW = N3.y - Zr.y;
    }
  }
  let iC = Zr.x;
  let iL = Zr.y;
  let is = NF(Zr.room, ...NI(Zr.x, Zr.y));
  for (let iG = 0; iG < Math.ceil(Math.abs(iJ)); iG++) {
    let im = Math.sign(iJ) * Math.min(1, Math.abs(iJ) - iG);
    if (is || !NF(Zr.room, ...NI(Zr.x + im, Zr.y))) {
      Zr.x += im;
    } else {
      break;
    }
  }
  for (let ir = 0; ir < Math.ceil(Math.abs(iW)); ir++) {
    let ip = Math.sign(iW) * Math.min(1, Math.abs(iW) - ir);
    if (is || !NF(Zr.room, ...NI(Zr.x, Zr.y + ip))) {
      Zr.y += ip;
    } else {
      break;
    }
  }
  Zr.moving = Zr.x !== iC || Zr.y !== iL;
  if (Zr.moving) {
    Zr.walk += iX ? 3 : 1.5;
    if (Zr.walk >= 40) {
      Zr.walk -= 40;
    }
    N4.push({
      x: Zr.x,
      y: Zr.y,
      face: Zr.face
    });
    if (N4.length > 60) {
      N4.shift();
    }
  } else if (!iJ && !iW) {
    Zr.walk = 0;
  }
  if (Zr.moving || iJ || iW) {
    N6++;
    N7 = 0;
  } else {
    N7++;
  }
  if (N3) {
    let id = N3.thing;
    if (id && id.kind !== "door" && NX() === id) {
      Ny(id);
    } else if (Math.abs(N3.x - Zr.x) < 1 && Math.abs(N3.y - Zr.y) < 1) {
      N3 = null;
      if (id && id.kind !== "door") {
        Ny(id);
      }
    } else if (Zr.moving) {
      N3.stall = 0;
    } else if (++N3.stall > 8) {
      N3 = null;
      if (id && id.kind === "door") {
        Ns(id.door);
      } else if (id) {
        NT(Zr.room, id.ax, id.ay, id.kind === "npc" ? "l" : "u", null, () => Ny(id));
      }
    }
  }
  Nf();
  let iy = NI(Zr.x, Zr.y);
  ZO[Zr.room].doors.forEach((iv, iS) => {
    if (!Zv && !Zc && !ZV && Nu([iy[0] - 2, iy[1] - 2, iy[2] + 4, iy[3] + 4], iv)) {
      Ns(iS);
    }
  });
  if (ZY() && !Zc && !ZV && !Zv) {
    let iv = NX();
    if (iv) {
      Ny(iv);
    }
  }
}
Zo(Nc, "step");
function Nj(Y) {
  let ix = Y.x + Zp.x;
  let iw = Y.y + Zp.y;
  let iE = null;
  for (let iX of ZC[Zr.room] || []) {
    let ih = iX.click ? {
      x: iX.click[0],
      y: iX.click[1],
      w: iX.click[2],
      h: iX.click[3]
    } : {
      x: iX.x - 16,
      y: iX.y - 40,
      w: iX.w + 32,
      h: iX.h + 56
    };
    if (ix >= ih.x && ix <= ih.x + ih.w && iw >= ih.y && iw <= ih.y + ih.h) {
      iE = iX;
      break;
    }
  }
  if (!iE) {
    N3 = {
      x: Math.round(ix - 19),
      y: Math.round(iw - 63),
      thing: null,
      stall: 0
    };
    return;
  }
  let iT = ZO[Zr.room];
  let iz = Math.round(iE.x + iE.w / 2 - 19);
  if (iE.kind === "door") {
    if (iE.x <= 10) {
      iE.ax = -8;
      iE.ay = Math.round(iE.y + iE.h / 2 - 63);
    } else if (iE.x + iE.w >= iT.w - 10) {
      iE.ax = iT.w - 30;
      iE.ay = Math.round(iE.y + iE.h / 2 - 63);
    } else if (iE.y + iE.h >= iT.h - 30) {
      iE.ax = iz;
      iE.ay = iT.h - 70;
    } else {
      iE.ax = iz;
      iE.ay = Math.round(iE.y + iE.h - 52);
    }
  } else if (iE.kind === "npc") {
    iE.ax = Math.round(iE.x + iE.w + 4);
    iE.ay = Math.round(iE.y + iE.h - 70);
  } else {
    iE.ax = iz;
    iE.ay = Math.round(iE.y + iE.h + 4 - 50);
  }
  N3 = {
    x: iE.ax,
    y: iE.ay,
    thing: iE,
    stall: 0
  };
}
Zo(Nj, "clickWorld");
var NV = Zo(() => Zr.y + 38 - Zp.y > 250 ? 2 : 312, "boxY");
function NM(i) {
  return i.lines && i.shown >= i.lines.join("").length;
}
Zo(NM, "textDone");
function i0(i) {
  if (i.lines) {
    if (i.shown < i.lines.join("").length) {
      i.shown++;
      if (i.shown % 2 === 0) {
        Z9("snd_text");
      }
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
Zo(i0, "typeOn");
var i1 = [];
function i2(i, Y) {
  let ix = Zc;
  if (i0(ix)) {
    if (ZY() || Zl() || i) {
      ix.shown = 1000000000;
    }
    return;
  }
  if (!NC(ix)) {
    if (ZY() || i) {
      ix.page++;
      ix.lines = null;
      ix.shown = 0;
    } else if (Zl()) {
      Zc = null;
    }
    return;
  }
  if (ix.picks) {
    let iw = ix.picks.length;
    if (ZA()) {
      ix.sel = (ix.sel + iw - 1) % iw;
      Z9("snd_menumove");
    }
    if (ZK()) {
      ix.sel = (ix.sel + 1) % iw;
      Z9("snd_menumove");
    }
    if (Y) {
      i1.forEach((iE, iT) => {
        if (Nv(iE[0], iE[1], iE[2], iE[3]) && ix.sel !== iT) {
          ix.sel = iT;
          Z9("snd_menumove");
        }
      });
    }
    if (i) {
      let iE = i1.findIndex(iT => i.x >= iT[0] && i.x < iT[0] + iT[2] && i.y >= iT[1] && i.y < iT[1] + iT[3]);
      if (iE >= 0) {
        ix.sel = iE;
        i3();
      } else {
        Zc = null;
      }
      return;
    }
    if (ZY()) {
      i3();
    } else if (Zl()) {
      Zc = null;
    }
    return;
  }
  if (ZY() || Zl() || i) {
    Zc = null;
  }
}
Zo(i2, "stepBox");
function i3() {
  let i = Zc.picks[Zc.sel];
  Z9("snd_select");
  Zc = null;
  i[1]();
}
Zo(i3, "choose");
var i4 = [["MAP", "Go straight to any place"], ["LEAVE", "Back to the fight list"]];
function i5(i, Y) {
  if (Zn() || Zg() || ZA() || ZK()) {
    ZM ^= 1;
    Z9("snd_menumove");
  }
  let ix = iw => iw.x >= 40 && iw.x < 600 && iw.y >= 40 && iw.y < 120 ? iw.y < 80 ? 0 : 1 : -1;
  if (Y && ix(t) >= 0) {
    ZM = ix(t);
  }
  if (i) {
    let iw = ix(i);
    if (iw < 0) {
      ZV = null;
      return;
    }
    ZM = iw;
  }
  if (ZY() || i) {
    Z9("snd_select");
    if (ZM === 0) {
      Nm();
    } else {
      Ng();
    }
    return;
  }
  if (Zl() || Zk()) {
    ZV = null;
  }
}
Zo(i5, "stepMenu");
var i6 = Zo(i => 50 + i * 30, "MAPROW");
function i7(i, Y) {
  let ix = ZE.length + 1;
  if (Zn()) {
    N0 = (N0 + ix - 1) % ix;
    Z9("snd_menumove");
  }
  if (Zg()) {
    N0 = (N0 + 1) % ix;
    Z9("snd_menumove");
  }
  let iw = iT => {
    if (!iT || iT.x < 300 || iT.x > 632) {
      return -1;
    }
    for (let iz = 0; iz < ix; iz++) {
      let iX = i6(iz) + (iz === ZE.length ? 8 : 0);
      if (iT.y >= iX - 7 && iT.y < iX + 25) {
        return iz;
      }
    }
    return -1;
  };
  if (Y && iw(t) >= 0 && iw(t) !== N0) {
    N0 = iw(t);
    Z9("snd_menumove");
  }
  if (i) {
    let iT = iw(i);
    if (iT < 0) {
      if (i.x < 290 && i.y > 420) {
        ZV = null;
      }
      return;
    }
    N0 = iT;
    iE();
    return;
  }
  if (ZY()) {
    iE();
  } else if (Zl()) {
    ZV = null;
  }
  function iE() {
    Z9("snd_select");
    if (N0 === ZE.length) {
      Ng();
    } else {
      Nz(ZE[N0], true);
    }
  }
  iE;
}
Zo(i7, "stepMap");
function i8(i, Y) {
  if (N2 && i0(N2)) {
    if (ZY() || Zl() || i) {
      N2.shown = 1000000000;
    }
    return;
  }
  if (Zn()) {
    N1 = (N1 + 2) % 3;
    Z9("snd_menumove");
  }
  if (Zg()) {
    N1 = (N1 + 1) % 3;
    Z9("snd_menumove");
  }
  let ix = iw => iw && iw.x > 400 && iw.y > 252 && iw.y < 372 ? Math.floor((iw.y - 252) / 40) : -1;
  if (Y && ix(t) >= 0) {
    N1 = ix(t);
  }
  if (i) {
    let iw = ix(i);
    if (iw < 0) {
      return;
    }
    N1 = iw;
  }
  if (ZY() || i) {
    Z9("snd_select");
    if (N1 === 0) {
      ZV = null;
      No();
    } else if (N1 === 1) {
      N2 = {
        src: NQ,
        lines: null,
        shown: 0
      };
    } else {
      NG();
    }
    return;
  }
  if (Zl()) {
    NG();
  }
}
Zo(i8, "stepShop");
function i9() {
  let Y = [];
  let ix = Zr.moving ? Math.floor(Zr.walk / 10) % 4 : 0;
  Y.push({
    who: "kris",
    x: Zr.x,
    y: Zr.y,
    face: Zr.face,
    fr: ix,
    feet: Zr.y + 76
  });
  for (let [iw, iE] of [["susie", 12], ["ralsei", 24]]) {
    let iT = N4[Math.max(0, N4.length - 1 - iE)] || {
      x: Zr.x,
      y: Zr.y,
      face: Zr.face
    };
    let iz = Zy[iw + "_" + iT.face];
    let iX = iz.width / 4;
    let ih = iz.height;
    Y.push({
      who: iw,
      x: iT.x + (38 - iX * 2) / 2,
      y: iT.y + 76 - ih * 2,
      face: iT.face,
      fr: ix,
      feet: iT.y + 76 - iE * 0.01
    });
  }
  return Y.sort((iJ, iW) => iJ.feet - iW.feet);
}
Zo(i9, "party");
var iZ = [-1, 0, 1, 0, 0, -1, 0, 1, -1, -1, 1, 1, -1, 1, 1, -1];
function iN(i, Y, ix, iw, iE) {
  for (let iT = 0; iT < 16; iT += 2) {
    i.draw_text(Y + iZ[iT], ix + iZ[iT + 1], iw, ZN.black);
  }
  i.draw_text(Y, ix, iw, iE);
}
Zo(iN, "otext");
var ii = Zo(() => h.kit || null, "kit");
var iR = Zo(i => {
  let Y = i.state();
  return i.pal(Math.round(Y.h), Y.s);
}, "kitPal");
function iY(Y, ix, iw, iE, iT, iz) {
  let iX = Y.ctx;
  let ih = iR(ix);
  ix.stair(iX, iw - 2, iE - 2, iT + 4, iz + 4, 8, ix.BLACK);
  ix.stair(iX, iw, iE, iT, iz, 6, ih.dim);
  ix.stair(iX, iw + 4, iE + 4, iT - 8, iz - 8, 4, ih.face);
  return ih;
}
Zo(iY, "plate");
function il(Y, ix, iw, iE, iT, iz = ZN.white) {
  let iX = ii();
  if (iX) {
    let iJ = iX.keycap(Y, ix, iw, iE, iR(iX), false);
    let iW = iX.natural(iT);
    iN(Y, ix + iJ + 4, iw + 1, iW, iz);
    return iJ + 4 + Y.string_width(iW, "fnt_main") + 8;
  }
  let ih = o(Y, iE) || Y.string_width(iE, "fnt_main") + 8;
  Y.draw_set_color(ZN.black);
  Y.draw_rectangle(ix - 1, iw - 1, ix + ih, iw + 18, false);
  E(Y, ix, iw, iE);
  iN(Y, ix + ih + 4, iw + 2, iT, iz);
  return ih + 4 + Y.string_width(iT, "fnt_main") + 8;
}
Zo(il, "chip");
var ik = Zo((i, Y, ix) => {
  let iw = ii();
  if (iw) {
    return Math.max(18, Math.ceil(iw.wide(i, iw.FONT, Y)) + 8) + 4 + i.string_width(iw.natural(ix), "fnt_main") + 8;
  } else {
    return (o(i, Y) || i.string_width(Y, "fnt_main") + 8) + 4 + i.string_width(ix, "fnt_main") + 8;
  }
}, "chipW");
function ia(i, Y, ix, iw, iE) {
  i.draw_set_color(ZN.black);
  i.draw_rectangle(Y + 6, ix + 6, iw - 6, iE - 6, false);
  let iT = Zw().darkbox;
  if (iT) {
    iT(i, Y, ix, iw, iE);
  }
}
Zo(ia, "darkbox");
function iA(i) {
  let Y = i.ctx;
  if (!!Y && !!ZQ) {
    Nb();
    Z6(i, () => {
      Y.imageSmoothingEnabled = false;
      Y.fillStyle = "#000";
      Y.fillRect(0, 0, ZI, Zu);
      if (Zd >= 1) {
        return;
      }
      {
        let iE = ii();
        Nh = iE ? iT => iE.wide(i, iE.FONT, iT) : iT => i.string_width(iT, "fnt_mainbig");
      }
      let ix = p();
      let iw = !!ix && ix.id !== ZF;
      if (ZV === "shop") {
        iF(i, Y);
      } else if (iw) {
        iK(i, Y, true);
      } else {
        iK(i, Y);
        if (Zc) {
          iP(i);
        }
        if (ZV === "menu") {
          iD(i);
        }
        if (ZV === "map") {
          ib(i, Y);
        }
      }
      if (Zd > 0) {
        Y.globalAlpha = Math.min(1, Zd);
        Y.fillStyle = "#000";
        Y.fillRect(0, 0, ZI, Zu);
        Y.globalAlpha = 1;
      }
    });
  }
}
Zo(iA, "draw");
function iK(Y, ix, iw = false) {
  let iE = ZO[Zr.room];
  let iT = Zp.x;
  let iz = Zp.y;
  ix.drawImage(iE.img, -iT, -iz);
  if (Zr.room === ZQ.savepoint.room) {
    ix.drawImage(Zy.savepoint, Math.floor(N5 / 5) % 6 * 20, 0, 20, 19, ZQ.savepoint.x - iT, ZQ.savepoint.y - iz, 40, 38);
  }
  for (let iL of i9()) {
    let is = Zy[iL.who + "_" + iL.face];
    let iy = is.width / 4;
    let iO = is.height;
    ix.drawImage(is, iL.fr * iy, 0, iy, iO, Math.round(iL.x - iT), Math.round(iL.y - iz), iy * 2, iO * 2);
  }
  if (iE.topImg) {
    ix.drawImage(iE.topImg, -iT, -iz);
  }
  if (iw) {
    return;
  }
  for (let iQ of ZC[Zr.room] || []) {
    if (!iQ.f || !iQ.name || NN.has(iQ.f) || iQ.kind === "npc" || iQ.kind === "door" && !iQ.click && !(iQ.x <= 10) && !(iQ.x + iQ.w >= iE.w - 10) && !["f1", "f2", "front"].includes(Zr.room)) {
      continue;
    }
    let iU = Math.max(24, Math.min(iE.w - 24, iQ.x + iQ.w / 2));
    let iG = iQ.kind === "door" && iQ.click ? iQ.click[1] + 30 : Math.max(24, iQ.y - 4);
    ix.drawImage(Zy.exc, 0, 0, 20, 10, Math.round(iU - 20 - iT), Math.round(iG - 20 - iz + Math.floor(N5 / 15) % 2), 40, 20);
  }
  Y.draw_set_font("fnt_main");
  let iX = m();
  let ih = iX ? "TAP" : "Z";
  let iJ = !Zc && !ZV && !Zv ? NX() : null;
  if (iJ && iJ.name) {
    let im = Math.round(iJ.x + iJ.w / 2 - iT);
    let ir = Math.round((iJ.kind === "door" ? Math.min(iJ.y, Zr.y + 10) - 26 : iJ.y - 26) - iz);
    let ip = ik(Y, ih, iJ.name);
    let id = Math.max(4, Math.min(ZI - ip - 4, im - ip / 2));
    let iv = Math.max(32, Math.min(Zu - 24, ir));
    il(Y, id, iv, ih, iJ.name);
  }
  if (iX) {
    for (let [iS, iH, ic] of [[8, 84, "LEAVE"], [100, 70, "MAP"]]) {
      Y.draw_set_color(ZN.black);
      Y.draw_rectangle(iS, 4, iS + iH, 26, false);
      Y.draw_set_color(Zf.dim);
      Y.draw_rectangle(iS, 4, iS + iH, 26, true);
      Y.draw_text(iS + Math.round((iH - Y.string_width(ic, "fnt_main")) / 2), 8, ic, ZN.white);
    }
  } else {
    let ij = 8;
    ij += il(Y, ij, 6, "Esc", "LEAVE");
    il(Y, ij, 6, "M", "MAP");
  }
  let iW = ZE.length - NN.size;
  let iC = iW ? "Found " + NN.size + "/" + ZE.length : "All found";
  iN(Y, 632 - Y.string_width(iC, "fnt_main"), 8, iC, iW ? ZN.white : ZN.yellow);
  if (iW && !iX && !ii()) {
    let iV = iW + " left - M shows where";
    iN(Y, 632 - Y.string_width(iV, "fnt_main"), 24, iV, ZN.gray);
  }
  if (Zj && Zj.t > 0 && ii()) {
    Zj.t--;
    let iM = ii();
    let R0 = Math.ceil(iM.wide(Y, iM.FONT, Zj.text)) + 32;
    iY(Y, iM, Math.round((ZI - R0) / 2), 34, R0, 30);
    iM.sayMid(Y, iM.FONT, Zj.text, 320, 41, iM.GOLD);
  } else if (Zj && Zj.t > 0) {
    Zj.t--;
    Y.draw_set_font("fnt_mainbig");
    let R1 = Y.string_width(Zj.text, "fnt_mainbig");
    iN(Y, Math.round((ZI - R1) / 2), 40, Zj.text, ZN.yellow);
    Y.draw_set_font("fnt_main");
  }
  if (!Zc && !ZV) {
    let R2 = N6 < 240 || N7 > 600 ? 1 : 0;
    N8 += (R2 - N8) * 0.05;
    if (N8 > 0.02) {
      let R3 = iX ? [["PAD", "walk"], ["TAP", "go somewhere"], ["Z", "check"]] : [["Arrows", "walk"], ["X", "run"], ["Z", "check"], ["M", "map"], ["Esc", "leave"]];
      let R4 = R3.reduce((R6, [R7, R8]) => R6 + ik(Y, R7, R8), 0);
      Y.draw_set_alpha(Math.min(1, N8));
      ix.globalAlpha = Math.min(1, N8);
      let R5 = Math.round((ZI - R4) / 2);
      for (let [R6, R7] of R3) {
        R5 += il(Y, R5, 456, R6, R7);
      }
      Y.draw_set_alpha(1);
      ix.globalAlpha = 1;
    }
  }
}
Zo(iK, "drawRoom");
function ig(Y, ix) {
  let iw = Y.ctx;
  let iE = NC(Zc);
  let iT = Zc.picks && iE;
  let iz = 22;
  Zc.lines ||= NJ(Zc.pages[Zc.page], 548).slice(0, 4);
  let iX = 26 + Zc.lines.length * iz + (iT ? 38 : 0);
  let ih = Zr.y + 38 - Zp.y > 250 ? 34 : 468 - iX;
  let iJ = iY(Y, ix, 24, ih, 592, iX);
  let iW = Zc.shown;
  Zc.lines.forEach((iC, iL) => {
    ix.say(Y, ix.FONT, iC.slice(0, Math.max(0, iW)), 44, ih + 13 + iL * iz, ix.WHITE);
    iW -= iC.length;
  });
  i1 = [];
  if (!iE && NM(Zc) && Math.floor(N5 / 8) % 2) {
    Y.draw_sprite("spr_heartsmall", 0, 590, ih + iX - 24);
  }
  if (iT && NM(Zc)) {
    let iC = ih + 13 + Zc.lines.length * iz + 6;
    let iL = 44;
    Zc.picks.forEach((iy, iO) => {
      let iQ = Zc.sel === iO;
      let iU = Math.ceil(ix.wide(Y, ix.FONT, iy[0])) + 60;
      ix.stair(iw, iL, iC, iU, 28, 4, iQ ? iJ.dim : iJ.plate);
      ix.say(Y, ix.FONT, iy[0], iL + 30, iC + 4, iQ ? ix.WHITE : ix.TEXT);
      if (iQ) {
        ix.gameSoul(Y, iL + 16, iC + 14);
      }
      i1.push([iL, iC, iU, 28]);
      iL += iU + 8;
    });
    let is = m() ? "Tap outside: not now" : "X: not now";
    ix.say(Y, ix.FONT, is, 596 - ix.wide(Y, ix.FONT, is), iC + 4, iJ.soft);
  }
}
Zo(ig, "drawBoxKit");
function iP(Y) {
  let ix = ii();
  if (ix) {
    ig(Y, ix);
    return;
  }
  let iw = NV();
  ia(Y, 24, iw, 616, iw + 166);
  Y.draw_set_font("fnt_mainbig");
  Zc.lines ||= NJ(Zc.pages[Zc.page], 530).slice(0, Zc.picks && NC(Zc) ? 2 : 3);
  let iE = Zc.shown;
  Zc.lines.forEach((iT, iz) => {
    Y.draw_text(58, iw + 20 + iz * 34, iT.slice(0, Math.max(0, iE)), ZN.white);
    iE -= iT.length;
  });
  i1 = [];
  if (!NC(Zc) && NM(Zc) && Math.floor(N5 / 8) % 2) {
    Y.draw_sprite("spr_heartsmall", 0, 584, iw + 134);
  }
  if (Zc.picks && NC(Zc) && NM(Zc)) {
    let iT = iw + 20 + 68 + 14;
    let iz = Zc.picks.length;
    let iX = Zc.picks.map(iW => Y.string_width(iW[0], "fnt_mainbig"));
    let ih = Math.max(40, Math.floor((520 - iX.reduce((iW, iC) => iW + iC, 0)) / (iz + 1)));
    let iJ = 60 + (iz === 1 ? Math.floor((520 - iX[0]) / 2) : ih);
    Zc.picks.forEach((iW, iC) => {
      Y.draw_text(iJ + 24, iT, iW[0], Zc.sel === iC ? ZN.yellow : ZN.white);
      if (Zc.sel === iC) {
        Y.draw_sprite("spr_heart", 0, iJ, iT + 8);
      }
      i1.push([iJ - 6, iT - 6, iX[iC] + 36, 44]);
      iJ += iX[iC] + 24 + ih;
    });
    Y.draw_set_font("fnt_main");
    {
      let iW = m() ? "tap outside: not now" : "X: not now";
      Y.draw_text(586 - Y.string_width(iW, "fnt_main"), iw + 134, iW, ZN.gray);
    }
  }
}
Zo(iP, "drawBox");
function iq(i, Y) {
  let ix = i.ctx;
  let iw = iY(i, Y, 24, 30, 592, 102);
  i4.forEach(([iE, iT], iz) => {
    let iX = 46 + iz * 40;
    let ih = ZM === iz;
    Y.stair(ix, 36, iX - 8, 568, 34, 4, ih ? iw.dim : iw.plate);
    Y.say(i, Y.FONT, Y.natural(iE), 74, iX, ih ? Y.WHITE : Y.TEXT);
    Y.say(i, Y.FONT, iT, 592 - Y.wide(i, Y.FONT, iT), iX, ih ? Y.TEXT : iw.soft);
    if (ih) {
      Y.gameSoul(i, 54, iX + 9);
    }
  });
}
Zo(iq, "drawMenuKit");
function iD(i) {
  let Y = ii();
  if (Y) {
    iq(i, Y);
    return;
  }
  ia(i, 24, 30, 616, 132);
  i.draw_set_font("fnt_mainbig");
  i4.forEach(([ix, iw], iE) => {
    let iT = 46 + iE * 40;
    i.draw_text(80, iT, ix, ZM === iE ? ZN.yellow : ZN.white);
    i.draw_set_font("fnt_main");
    i.draw_text(220, iT + 10, iw, ZM === iE ? ZN.white : ZN.gray);
    i.draw_set_font("fnt_mainbig");
    if (ZM === iE) {
      i.draw_sprite("spr_heart", 0, 52, iT + 8);
    }
  });
}
Zo(iD, "drawMenu");
function io(Y, ix, iw) {
  let iE = iw.state();
  ix.fillStyle = "#000";
  ix.fillRect(0, 0, ZI, Zu);
  let iT = iY(Y, iw, 8, 8, 280, 292);
  ix.drawImage(Zy.townmap, 28, 28);
  let iz = {
    "BOSS RUSH": [514, 846],
    DAILY: [1006, 846],
    CUSTOM: [570, 600],
    JUKEBOX: [927, 600],
    REPLAYS: [853, 330],
    FIGHTS: [754, 205]
  };
  for (let [iL, [is, iy]] of Object.entries(iz)) {
    let iO = 28 + (is - 160) / 5;
    let iQ = 28 + iy / 5;
    if (ZE[N0] === iL) {
      iw.gameSoul(Y, iO, iQ);
    } else {
      ix.fillStyle = NN.has(iL) ? iw.WHITE : iw.GOLD;
      ix.fillRect(iO - 2, iQ - 2, 5, 5);
    }
  }
  iT = iY(Y, iw, 296, 8, 336, 464);
  iw.say(Y, iw.FONT, "Where to?", 316, 20, iw.WHITE);
  let iX = ZE.length - NN.size;
  let ih = iX ? iX + " still to find" : "All " + ZE.length + " found";
  iw.say(Y, iw.FONT, ih, 612 - iw.wide(Y, iw.FONT, ih), 20, iX ? iw.GOLD : iT.soft);
  let iJ = (iU, iG, im, ir, ip) => {
    let id = iU === N0;
    iw.stair(ix, 308, iG - 3, 312, 26, 4, id ? iT.dim : iT.plate);
    iw.say(Y, iw.FONT, im, 340, iG, id ? iw.WHITE : iw.TEXT);
    if (ip) {
      iw.say(Y, iw.FONT, "New", 340 + iw.wide(Y, iw.FONT, im) + 8, iG, iw.GOLD);
    }
    if (ir) {
      iw.say(Y, iw.FONT, ir, 610 - iw.wide(Y, iw.FONT, ir), iG, id ? iw.TEXT : iT.soft);
    }
    if (id) {
      iw.gameSoul(Y, 324, iG + 10);
    }
  };
  ZE.forEach((iU, iG) => iJ(iG, i6(iG), iw.natural(iU), Zh[iU], !NN.has(iU)));
  iJ(ZE.length, i6(ZE.length) + 8, "Just take me to the fight list", "", false);
  iT = iY(Y, iw, 8, 308, 280, 164);
  let iW = ZE[N0];
  iw.say(Y, iw.FONT, iW ? iw.natural(iW) : "Fight list", 28, 322, iw.GOLD);
  let iC = iw.wrap(Y, iw.FONT, iW ? ZX[iW] : "Skip the walk and go straight to the fights.", 240, 3);
  iC.forEach((iU, iG) => iw.say(Y, iw.FONT, iU, 28, 346 + iG * 20, iw.TEXT));
  if (iW) {
    iw.say(Y, iw.FONT, Zh[iW], 28, 346 + iC.length * 20 + 2, iT.soft);
  }
  iw.hints(Y, iE, [{
    key: "Z",
    word: "Go"
  }, {
    key: "X",
    word: "Back"
  }], false, {
    top: true,
    x: 28,
    y: 442
  });
}
Zo(io, "drawMapKit");
function ib(ix, iw) {
  let iE = ii();
  if (iE) {
    io(ix, iw, iE);
    return;
  }
  iw.fillStyle = "#000";
  iw.fillRect(0, 0, ZI, Zu);
  ia(ix, 8, 8, 288, 304);
  iw.drawImage(Zy.townmap, 28, 28);
  let iT = {
    "BOSS RUSH": [514, 846],
    DAILY: [1006, 846],
    CUSTOM: [570, 600],
    JUKEBOX: [927, 600],
    REPLAYS: [853, 330],
    FIGHTS: [754, 205]
  };
  for (let [iO, [iQ, iU]] of Object.entries(iT)) {
    let iG = 28 + (iQ - 160) / 5;
    let im = 28 + iU / 5;
    if (ZE[N0] === iO) {
      ix.draw_sprite("spr_heart", 0, iG - 8, im - 8);
    } else {
      iw.fillStyle = NN.has(iO) ? "#ffffff" : "#ffff00";
      iw.fillRect(iG - 2, im - 2, 5, 5);
    }
  }
  ia(ix, 296, 8, 632, 472);
  ix.draw_set_font("fnt_mainbig");
  ix.draw_text(324, 20, "Where to?", ZN.white);
  ix.draw_set_font("fnt_main");
  let iz = ZE.length - NN.size;
  let iX = iz ? iz + " still to find (NEW)" : "all " + ZE.length + " found";
  ix.draw_text(604 - ix.string_width(iX, "fnt_main"), 30, iX, iz ? ZN.yellow : ZN.gray);
  ZE.forEach((ir, ip) => {
    let id = i6(ip);
    let iv = ip === N0;
    let iS = !NN.has(ir);
    if (iv) {
      iw.fillStyle = Zf.hover;
      iw.fillRect(316, id - 5, 296, 26);
    }
    ix.draw_text(344, id, ir, iv ? ZN.yellow : ZN.white);
    if (iS) {
      ix.draw_text(344 + ix.string_width(ir, "fnt_main") + 6, id, "NEW", ZN.yellow);
    }
    ix.draw_text(470, id, Zh[ir], iv ? ZN.white : ZN.gray);
    if (iv) {
      ix.draw_sprite("spr_heart", 0, 322, id);
    }
  });
  let ih = i6(ZE.length) + 8;
  iw.fillStyle = "#404040";
  iw.fillRect(320, ih - 8, 290, 1);
  if (N0 === ZE.length) {
    iw.fillStyle = Zf.hover;
    iw.fillRect(316, ih - 5, 296, 26);
    ix.draw_sprite("spr_heart", 0, 322, ih);
  }
  ix.draw_text(344, ih, "Just take me to the fight list", N0 === ZE.length ? ZN.yellow : ZN.white);
  ia(ix, 8, 304, 288, 472);
  let iJ = ZE[N0];
  ix.draw_set_font("fnt_mainbig");
  ix.draw_text(36, 320, iJ || "FIGHT LIST", ZN.yellow);
  ix.draw_set_font("fnt_main");
  let iW = (iJ ? ZX[iJ] : "Skip the walk and go straight to the encounters.").split(" ");
  let iC = "";
  let iL = 358;
  for (let ir of iW) {
    let ip = iC ? iC + " " + ir : ir;
    if (ix.string_width(ip, "fnt_main") > 222) {
      ix.draw_text(36, iL, iC, ZN.white);
      iL += 18;
      iC = ir;
    } else {
      iC = ip;
    }
  }
  if (iC) {
    ix.draw_text(36, iL, iC, ZN.white);
  }
  if (iJ) {
    ix.draw_text(36, iL + 22, Zh[iJ], ZN.gray);
  }
  let is = m();
  let iy = 36;
  iy += il(ix, iy, 432, is ? "TAP" : "Z", "go");
  il(ix, iy, 432, "X", "back");
}
Zo(ib, "drawMap");
function iB(i, Y, ix) {
  Y.fillStyle = "#000";
  Y.fillRect(0, 240, 640, 240);
  let iw = 22;
  let iE = iY(i, ix, 8, 248, 392, 224);
  if (N2 && !N2.lines) {
    N2.lines = N2.src.flatMap(iT => NJ(iT, 352));
  }
  if (N2) {
    let iT = N2.shown;
    N2.lines.slice(0, 9).forEach((iz, iX) => {
      ix.say(i, ix.FONT, iz.slice(0, Math.max(0, iT)), 28, 262 + iX * iw, ix.WHITE);
      iT -= iz.length;
    });
  }
  iE = iY(i, ix, 408, 248, 224, 224);
  ["Stitch one", "Talk", "Leave"].forEach((iz, iX) => {
    let ih = 260 + iX * 40;
    let iJ = N1 === iX;
    ix.stair(Y, 420, ih - 6, 200, 32, 4, iJ ? iE.dim : iE.plate);
    ix.say(i, ix.FONT, iz, 456, ih + 1, iJ ? ix.WHITE : ix.TEXT);
    if (iJ) {
      ix.gameSoul(i, 438, ih + 10);
    }
  });
  ix.wrap(i, ix.FONT, "Stitch one opens the encounter editor.", 192, 3).forEach((iz, iX) => ix.say(i, ix.FONT, iz, 424, 388 + iX * 20, iE.soft));
}
Zo(iB, "drawShopKit");
function iF(Y, ix) {
  ix.drawImage(Zy.seam_bg, 0, 0, 640, 240);
  let iw = N2 && !NM(N2);
  let iE = iw ? Zy.seam_talk : Zy.seam_idle;
  let iT = iE.width / 135;
  let iz = Math.floor(N5 / (iw ? 4 : 8)) % iT;
  ix.drawImage(iE, iz * 135, 0, 135, 109, 160, 34, 270, 218);
  {
    let iX = ii();
    if (iX) {
      iB(Y, ix, iX);
      return;
    }
  }
  ix.fillStyle = "#000";
  ix.fillRect(0, 240, 640, 240);
  ia(Y, 0, 240, 415, 480);
  ia(Y, 400, 240, 640, 480);
  Y.draw_set_font("fnt_mainbig");
  if (N2 && !N2.lines) {
    Nh = ih => Y.string_width(ih, "fnt_mainbig");
    N2.lines = N2.src.flatMap(ih => NJ(ih, 345));
  }
  if (N2) {
    let ih = N2.shown;
    let iJ = N2.lines.length > 5 ? 32 : 36;
    N2.lines.forEach((iW, iC) => {
      Y.draw_text(30, 258 + iC * iJ, iW.slice(0, Math.max(0, ih)), ZN.white);
      ih -= iW.length;
    });
  }
  ["Stitch one", "Talk", "Leave"].forEach((iW, iC) => Y.draw_text(480, 260 + iC * 40, iW, N1 === iC ? ZN.yellow : ZN.white));
  Y.draw_sprite("spr_heart", 0, 450, 270 + N1 * 40);
  Y.draw_set_font("fnt_main");
  Y.draw_text(452, 432, "ENCOUNTER EDITOR", ZN.gray);
}
Zo(iF, "drawShop");
var iI = ZE.slice();
var iu = {
  resume: Zo(() => NY, "resume"),
  K: Zr,
  ROOM: ZO,
  THINGS: ZC,
  visited: Zo(() => NN, "visited"),
  state: Zo(() => ({
    room: Zr.room,
    x: Zr.x,
    y: Zr.y,
    screen: ZV,
    box: !!Zc,
    typing: !!Zc && !NM(Zc),
    fade: Zd,
    cam: [Zp.x, Zp.y],
    target: !!N3
  }), "state"),
  warpTo: Nz,
  checkPlace: NL
};
export { iI as PLACES, iu as _test, NA as open, NK as pendingReturn };
