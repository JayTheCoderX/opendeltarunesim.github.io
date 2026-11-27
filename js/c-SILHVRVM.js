import { _F as q } from "./c-E335QRCA.js";
import { Ma as X } from "./c-NHPC5UGW.js";
import "./c-IXEDCLR4.js";
import "./c-O567UJ4Y.js";
import "./c-UTWCWEAR.js";
import "./c-QFDZPUX2.js";
import "./c-VWTE3AY2.js";
import { Sh as D } from "./c-PWNRTD7X.js";
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
import { a as M, l as d } from "./c-XSSGDLV7.js";
d();
var {
  AR: B,
  FIRST: h,
  SETALL: J
} = D;
var v = new Proxy({}, {
  get: M((S, L) => q[L] || X[L], "get")
});
var c = {
  name: "room_CHEFS",
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
    bx: 500,
    by: 500
  }],
  rcc: null,
  layers: [{
    name: "Compatibility_Instances_Depth_0",
    type: "Instances",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_chefs_toggles",
      x: 320,
      y: 100,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108100,
      pre: null,
      cc: null
    }]
  }, {
    name: "Assets_2",
    type: "Assets",
    depth: 100,
    visible: false,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_chefs_BG",
      x: 0,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_314D3C54"
    }],
    instances: []
  }, {
    name: "Compatibility_Colour",
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
      color: 6696000,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
c.ginst = [108100];
export { c as ROOM };
