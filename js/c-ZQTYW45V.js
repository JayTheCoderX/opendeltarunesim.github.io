import { _F as H } from "./c-E335QRCA.js";
import { Ma as M } from "./c-NHPC5UGW.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { Sh as n } from "./c-PWNRTD7X.js";
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
import { a as S, l as c } from "./c-XSSGDLV7.js";
c();
var {
  AR: Q,
  FIRST: u,
  SETALL: k
} = n;
var f = new Proxy({}, {
  get: S((J, m) => H[m] || M[m], "get")
});
var L = {
  name: "room_rhythmgame_editor",
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
      obj: "obj_mainchara",
      x: 140,
      y: 100,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104229,
      pre: null,
      cc: null
    }, {
      obj: "obj_darkcontroller",
      x: 0,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104230,
      pre: null,
      cc: null
    }, {
      obj: "obj_rhythmgame_editor",
      x: 120,
      y: 80,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104231,
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
      color: 0,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
L.ginst = [104229, 104230, 104231];
export { L as ROOM };
