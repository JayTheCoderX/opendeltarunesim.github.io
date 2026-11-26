var f = function () {
    var b = true;
    return function (L, E) {
      var P = b ? function () {
        if (E) {
          var k = E.apply(L, arguments);
          return E = null, k;
        }
      } : function () {};
      return b = false, P;
    };
  }(),
  w = f(this, function () {
    if (w.bind().toString().indexOf('\x0a') !== -0x1) return;
    return w.toString().search(".*").toString().constructor(w).search(".*");
  });
w();
import { _F as c } from './c-E335QRCA.js';
import { Ma as W } from './c-NHPC5UGW.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import { Sh as Q } from './c-PWNRTD7X.js';
import './c-DTW63MWW.js';
import './c-HUDNK55W.js';
import './c-IKEEXWRQ.js';
import './c-SUMRYW3E.js';
import './c-3ELH3LBH.js';
import './c-OYFOJ3BV.js';
import './c-MYK6C3LF.js';
import './c-E7FVSW52.js';
import './c-ZQQWH6UG.js';
import './c-PBMEVLU6.js';
import { a as J, l as M } from './c-XSSGDLV7.js';
M();
var {
    AR: p,
    FIRST: G,
    SETALL: e
  } = Q,
  j = new Proxy({}, {
    'get': J((b, L) => c[L] || W[L], 'get')
  }),
  N = {
    'name': 'room_dw_susiezilla_empty',
    'w': 0x280,
    'h': 0x1e0,
    'color': 0x0,
    'drawColor': !0x1,
    'speed': 0x0,
    'views': [{
      'x': 0x0,
      'y': 0x0,
      'w': 0x280,
      'h': 0x1e0,
      'follow': null,
      'bx': 0xa0,
      'by': 0xf0
    }],
    'rcc': null,
    'layers': [{
      'name': 'FG_Curtains',
      'type': 'Assets',
      'depth': 0x17318,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'sprites': [{
        'spr': 'spr_dw_gameshow_curtain',
        'x': 0x0,
        'y': 0x34,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_4473C506'
      }, {
        'spr': 'spr_dw_gameshow_curtain',
        'x': 0x280,
        'y': 0x34,
        'xs': -0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_66541F5E'
      }],
      'instances': []
    }, {
      'name': 'OBJECTS_MAIN',
      'type': 'Instances',
      'depth': 0x1737c,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': [{
        'obj': 'obj_mainchara',
        'x': 0x140,
        'y': 0xc8,
        'xs': 0x2,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a613,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_darkcontroller',
        'x': 0x0,
        'y': 0x0,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a614,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_room_susiezilla_empty',
        'x': 0x0,
        'y': 0x28,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a615,
        'pre': null,
        'cc': null
      }]
    }, {
      'name': 'COLLISION_DOOR',
      'type': 'Instances',
      'depth': 0x173e0,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': [{
        'obj': 'obj_solidblock_32',
        'x': 0x0,
        'y': 0x168,
        'xs': 0x14,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a616,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblock_32',
        'x': -0x20,
        'y': 0x9c,
        'xs': 0x1,
        'ys': 7.375,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a617,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblock_32',
        'x': 0x0,
        'y': 0x9c,
        'xs': 0x14,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a618,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblock_32',
        'x': 0x280,
        'y': 0x9c,
        'xs': 0x1,
        'ys': 7.375,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a619,
        'pre': null,
        'cc': null
      }]
    }, {
      'name': 'BACKGROUND',
      'type': 'Assets',
      'depth': 0xf4240,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'sprites': [{
        'spr': 'spr_dw_susiezilla_bg_empty',
        'x': 0x0,
        'y': 0x0,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_5E7B8710'
      }],
      'instances': []
    }, {
      'name': 'TILES',
      'type': 'Tiles',
      'depth': 0xf42a4,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': []
    }, {
      'name': 'BGCOLOR',
      'type': 'Background',
      'depth': 0x7fffffd0,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'bg': {
        'spr': null,
        'visible': !0x0,
        'fore': !0x1,
        'htile': !0x1,
        'vtile': !0x1,
        'stretch': !0x1,
        'color': 0x0,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0xf
      },
      'instances': []
    }]
  };
N.ginst = [0x1a613, 0x1a614, 0x1a615, 0x1a616, 0x1a617, 0x1a618, 0x1a619];
export { N as ROOM };