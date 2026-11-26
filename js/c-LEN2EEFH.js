var C = function () {
    var g = true;
    return function (P, Y) {
      var i = g ? function () {
        if (Y) {
          var q = Y.apply(P, arguments);
          return Y = null, q;
        }
      } : function () {};
      return g = false, i;
    };
  }(),
  W = C(this, function () {
    if (W.bind().toString().indexOf('\x0a') !== -0x1) return;
    return W.toString().search(".*").toString().constructor(W).search(".*");
  });
W();
import { _F as v } from './c-E335QRCA.js';
import { Ma as M } from './c-NHPC5UGW.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import { Sh as U } from './c-PWNRTD7X.js';
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
import { a as S, l as u } from './c-XSSGDLV7.js';
u();
var {
    AR: h,
    FIRST: J,
    SETALL: A
  } = U,
  E = new Proxy({}, {
    'get': S((g, P) => v[P] || M[P], 'get')
  }),
  f = {
    'name': 'room_dw_chef_empty',
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
      'name': 'OBJECTS_MAIN',
      'type': 'Instances',
      'depth': 0x0,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': [{
        'obj': 'obj_mainchara',
        'x': 0x118,
        'y': 0xc8,
        'xs': 0x2,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a60e,
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
        'id': 0x1a60f,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_dw_chef_screen',
        'x': 0x0,
        'y': 0x50,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a610,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_room_chef_empty',
        'x': 0x28,
        'y': 0x0,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a611,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_dw_chef_screen_empty',
        'x': 0x0,
        'y': 0x28,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a612,
        'pre': null,
        'cc': null
      }]
    }, {
      'name': 'COLLISION_DOOR',
      'type': 'Instances',
      'depth': 0x64,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': []
    }, {
      'name': 'ASSETS_BG',
      'type': 'Assets',
      'depth': 0x1000000,
      'visible': !0x0,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'sprites': [{
        'spr': 'spr_dw_kitchen',
        'x': 0x0,
        'y': 0x0,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_29284964'
      }],
      'instances': []
    }, {
      'name': 'TILES',
      'type': 'Tiles',
      'depth': 0x1000064,
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
f.ginst = [0x1a60e, 0x1a60f, 0x1a610, 0x1a611, 0x1a612];
export { f as ROOM };