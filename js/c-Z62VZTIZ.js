var y = function () {
    var j = true;
    return function (x, d) {
      var F = j ? function () {
        if (d) {
          var B = d.apply(x, arguments);
          return d = null, B;
        }
      } : function () {};
      return j = false, F;
    };
  }(),
  X = y(this, function () {
    if (X.bind().toString().indexOf('\x0a') !== -0x1) return;
    return X.toString().search(".*").toString().constructor(X).search(".*");
  });
X();
import { _F as q } from './c-E335QRCA.js';
import { Ma as k } from './c-NHPC5UGW.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import { Sh as n } from './c-PWNRTD7X.js';
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
import { a as f, l as N } from './c-XSSGDLV7.js';
N();
var {
    AR: b,
    FIRST: H,
    SETALL: u
  } = n,
  T = new Proxy({}, {
    'get': f((j, x) => q[x] || k[x], 'get')
  }),
  c = {
    'name': 'room_dw_rhythm',
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
        'x': -0xc8,
        'y': 0x78,
        'xs': 0x2,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x18d36,
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
        'id': 0x18d37,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_rhythmgame',
        'x': 0x0,
        'y': 0x1e0,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x18d38,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_ch3_GSB02',
        'x': 0x0,
        'y': 0x0,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x18d39,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblock_32',
        'x': -0xf3,
        'y': 0x64,
        'xs': 3.5,
        'ys': 3.5,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x18d3a,
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
c.ginst = [0x18d36, 0x18d37, 0x18d39, 0x18d3a, 0x18d38];
export { c as ROOM };