import { _F as H } from './c-E335QRCA.js';
import { Ma as M } from './c-NHPC5UGW.js';
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
import { a as S, l as c } from './c-XSSGDLV7.js';
c();
var {
    AR: Q,
    FIRST: u,
    SETALL: k
  } = n,
  f = new Proxy({}, {
    'get': S((J, m) => H[m] || M[m], 'get')
  }),
  L = {
    'name': 'room_rhythmgame_editor',
    'w': 0x280,
    'h': 0x1e0,
    'color': 0x0,
    'drawColor': false,
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
      'visible': true,
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
        'id': 0x19725,
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
        'id': 0x19726,
        'pre': null,
        'cc': null
      }, {
        'obj': 'obj_rhythmgame_editor',
        'x': 0x78,
        'y': 0x50,
        'xs': 0x1,
        'ys': 0x1,
        'rot': 0x0,
        'frame': 0x0,
        'speed': 0x1,
        'color': 0xffffff,
        'alpha': 0x1,
        'id': 0x19727,
        'pre': null,
        'cc': null
      }]
    }, {
      'name': 'COLLISION_DOOR',
      'type': 'Instances',
      'depth': 0x64,
      'visible': true,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': []
    }, {
      'name': 'TILES',
      'type': 'Tiles',
      'depth': 0xf4240,
      'visible': true,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'instances': []
    }, {
      'name': 'BGCOLOR',
      'type': 'Background',
      'depth': 0x7fffffd0,
      'visible': true,
      'x': 0x0,
      'y': 0x0,
      'hs': 0x0,
      'vs': 0x0,
      'bg': {
        'spr': null,
        'visible': true,
        'fore': false,
        'htile': false,
        'vtile': false,
        'stretch': false,
        'color': 0x0,
        'alpha': 0x1,
        'frame': 0x0,
        'speed': 0xf
      },
      'instances': []
    }]
  };
L.ginst = [0x19725, 0x19726, 0x19727];
export { L as ROOM };