var U = function () {
    var R = true;
    return function (m, J) {
      var k = R ? function () {
        if (J) {
          var p = J.apply(m, arguments);
          return J = null, p;
        }
      } : function () {};
      return R = false, k;
    };
  }(),
  q = U(this, function () {
    if (q.bind().toString().indexOf('\x0a') !== -0x1) return;
    return q.toString().search(".*").toString().constructor(q).search(".*");
  });
q();
import { _F as T } from './c-E335QRCA.js';
import { Ma as i } from './c-NHPC5UGW.js';
import './c-IXEDCLR4.js';
import './c-O567UJ4Y.js';
import './c-UTWCWEAR.js';
import './c-QFDZPUX2.js';
import './c-VWTE3AY2.js';
import { Sh as s } from './c-PWNRTD7X.js';
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
import { a as E, l as G } from './c-XSSGDLV7.js';
G();
var {
    AR: u,
    FIRST: K,
    SETALL: S
  } = s,
  j = new Proxy({}, {
    'get': E((R, m) => T[m] || i[m], 'get')
  }),
  F = {
    'name': 'room_board_empty',
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
        'x': 0x245,
        'y': 0x158,
        'xs': 0x2,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3af,
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
        'id': 0x1a3b0,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_room_stage',
        'x': 0x50,
        'y': 0x0,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b1,
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
      'instances': [{
        'obj': 'obj_doorAny',
        'x': 0x280,
        'y': 0x168,
        'xs': 0x1,
        'ys': 0x2,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b2,
        'pre': E(function () {
          this.doorRoom = 'room_dw_b3bs_interstitial', this.doorEntrance = 'A';
        }, 'pre'),
        'cc': null
      }, {
        'obj': 'obj_markerAny',
        'x': 0x247,
        'y': 0x15a,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x1,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b3,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblocksized',
        'x': 0x0,
        'y': 0x140,
        'xs': 0x11,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b4,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblocksized',
        'x': -0x28,
        'y': 0x140,
        'xs': 0x1,
        'ys': 0x3,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b5,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_solidblocksized',
        'x': -0x28,
        'y': 0x1b8,
        'xs': 0x12,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x1a3b6,
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
        'spr': 'spr_gameshow_wall',
        'x': 0x0,
        'y': 0x0,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_8F7BB45'
      }, {
        'spr': 'spr_gameshow_tvframe',
        'x': 0x60,
        'y': 0x0,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_498F5D0F'
      }, {
        'spr': 'spr_gameshow_floor',
        'x': 0x0,
        'y': 0x13e,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_5454E73E'
      }, {
        'spr': 'spr_gameshow_playerpodiums',
        'x': 0x80,
        'y': 0x1b6,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_2F2DCE7F'
      }, {
        'spr': 'spr_gameshow_couch',
        'x': 0x0,
        'y': 0x1c4,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_4ACBBD69'
      }, {
        'spr': 'spr_gameshow_console',
        'x': 0xca,
        'y': 0x142,
        'xs': 0x2,
        'ys': 0x2,
        'color': 0xffffff,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0x1,
        'rot': 0x0,
        'id': 'graphic_685F7F4E'
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
        'speed': 0x1
      },
      'instances': []
    }]
  };
F.ginst = [0x1a3af, 0x1a3b0, 0x1a3b2, 0x1a3b3, 0x1a3b4, 0x1a3b5, 0x1a3b6, 0x1a3b1];
export { F as ROOM };