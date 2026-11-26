var d = function () {
    var z = true;
    return function (h, M) {
      var W = z ? function () {
        if (M) {
          var O = M.apply(h, arguments);
          return M = null, O;
        }
      } : function () {};
      return z = false, W;
    };
  }(),
  Y = d(this, function () {
    if (Y.bind().toString().indexOf('\x0a') !== -0x1) return;
    return Y.toString().search(".*").toString().constructor(Y).search(".*");
  });
Y();
import { _F as Z } from './c-E335QRCA.js';
import { Ma as b } from './c-NHPC5UGW.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import { Sh as G } from './c-PWNRTD7X.js';
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
import { a as j, l as U } from './c-XSSGDLV7.js';
U();
var {
    AR: D,
    FIRST: X,
    SETALL: x
  } = G,
  e = new Proxy({}, {
    'get': j((z, h) => Z[h] || b[h], 'get')
  }),
  V = {
    'name': 'room_dw_rhythm_empty',
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
        'x': 0x8c,
        'y': 0x64,
        'xs': 0x2,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a61a,
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
        'id': 0x1a61b,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_room_rhythm_empty',
        'x': 0x0,
        'y': 0x28,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a61c,
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
      'name': 'TILES',
      'type': 'Tiles',
      'depth': 0xf4240,
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
V.ginst = [0x1a61a, 0x1a61b, 0x1a61c];
export { V as ROOM };