import { _F as f } from "./c-E335QRCA.js";
import { Ma as v } from "./c-NHPC5UGW.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { Sh as q } from "./c-PWNRTD7X.js";
import "./c-DTW63MWW.js";
import "./c-HUDNK55W.js";
import "./c-IKEEXWRQ.js";
import "./c-SUMRYW3E.js";
import "./c-3ELH3LBH.js";
import "./c-OYFOJ3BV.js";
import "./c-MYK6C3LF.js";
import "./c-E7FVSW52.js";
import "./c-ZQQWH6UG.js";
import "./c-PBMEVLU6.js";
import { a as z, l as m } from "./c-XSSGDLV7.js";
m();
var {
  AR: k,
  FIRST: X,
  SETALL: j
} = q;
var Q = new Proxy({}, {
  get: z((N, u) => f[u] || v[u], "get")
});
var x = {
  name: "room_shadowmantle_movementExample",
  w: 640,
  h: 480,
  color: 0,
  drawColor: false,
  speed: 0,
  views: [{
    x: 0,
    y: 0,
    w: 640,
    h: 480,
    follow: null,
    bx: 160,
    by: 240
  }],
  rcc: null,
  layers: [{
    name: "OBJECTS_MAIN",
    type: "Instances",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_shadowmantleExample",
      x: 0,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 103124,
      pre: null,
      cc: null
    }]
  }, {
    name: "COLLISION_DOOR",
    type: "Instances",
    depth: 100,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: []
  }, {
    name: "TILES",
    type: "Tiles",
    depth: 1000000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    tileset: {
      bg: "bg_board_adventure_tileset",
      tw: 32,
      th: 32,
      bx: 2,
      by: 2,
      cols: 30
    },
    tilesX: 20,
    tilesY: 15,
    data: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 130, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 132, 0, 0, 0, 0], [0, 0, 0, 0, 146, 163, 161, 145, 161, 161, 161, 161, 161, 161, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 161, 163, 161, 163, 161, 163, 161, 163, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 163, 161, 161, 161, 129, 163, 161, 161, 129, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 161, 161, 163, 161, 161, 145, 161, 163, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 163, 161, 163, 161, 163, 161, 163, 161, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 129, 161, 161, 161, 161, 161, 161, 161, 161, 163, 148, 0, 0, 0, 0], [0, 0, 0, 0, 162, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 164, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    instances: []
  }, {
    name: "BGCOLOR",
    type: "Background",
    depth: 2147483600,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    bg: {
      spr: null,
      visible: true,
      fore: false,
      htile: false,
      vtile: false,
      stretch: false,
      color: 7493388,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
x.ginst = [103124];
export { x as ROOM };
