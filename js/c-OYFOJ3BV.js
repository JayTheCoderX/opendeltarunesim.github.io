var b = function () {
    var Vi = true;
    return function (VR, Vk) {
      var Va = Vi ? function () {
        if (Vk) {
          var VU = Vk.apply(VR, arguments);
          return Vk = null, VU;
        }
      } : function () {};
      return Vi = false, Va;
    };
  }(),
  z = b(this, function () {
    if (z.bind().toString().indexOf('\x0a') !== -0x1) return;
    return z.toString().search(".*").toString().constructor(z).search(".*");
  });
z();
import { pb as n, qb as h } from './c-PBMEVLU6.js';
import { a, c as y, e as r, l as o } from './c-XSSGDLV7.js';
var l = {};
y(l, {
  'obj_blocktile': () => V0,
  'obj_darkslide': () => V2,
  'obj_elnina_lanino_rematch_controller': () => V4,
  'obj_event_manager': () => V6,
  'obj_forest_area5_puzzle': () => V8,
  'obj_glowtile': () => VV,
  'obj_hathyfightevent': () => Vj,
  'obj_heartmarker': () => Vg,
  'obj_lancerbattle2_event': () => Vm,
  'obj_mainchara': () => Vx,
  'obj_npc_room': () => Vc,
  'obj_onion_event': () => VE,
  'obj_scissordancer': () => VS,
  'obj_solidblock': () => Vz,
  'obj_solidenemy': () => Vh,
  'obj_susieandlancer_event': () => VB
}), o();
var e = class VI extends n {};
a(e, 'obj_blocktile'), r(e, 'kinds', h('obj_blocktile', n));
var V0 = e,
  V1 = class Vy extends n {};
a(V1, 'obj_darkslide'), r(V1, 'kinds', h('obj_darkslide', n));
var V2 = V1,
  V3 = class VX extends n {};
a(V3, 'obj_elnina_lanino_rematch_controller'), r(V3, 'kinds', h('obj_elnina_lanino_rematch_controller', n));
var V4 = V3,
  V5 = class VZ extends n {};
a(V5, 'obj_event_manager'), r(V5, 'kinds', h('obj_event_manager', n));
var V6 = V5,
  V7 = class Vr extends n {};
a(V7, 'obj_forest_area5_puzzle'), r(V7, 'kinds', h('obj_forest_area5_puzzle', n));
var V8 = V7,
  V9 = class VK extends n {};
a(V9, 'obj_glowtile'), r(V9, 'kinds', h('obj_glowtile', n));
var VV = V9,
  VC = class Vw extends n {};
a(VC, 'obj_hathyfightevent'), r(VC, 'kinds', h('obj_hathyfightevent', n));
var Vj = VC,
  Vv = class VT extends n {};
a(Vv, 'obj_heartmarker'), r(Vv, 'kinds', h('obj_heartmarker', n));
var Vg = Vv,
  Vd = class Vt extends n {};
a(Vd, 'obj_lancerbattle2_event'), r(Vd, 'kinds', h('obj_lancerbattle2_event', n));
var Vm = Vd,
  Vq = class VM extends n {};
a(Vq, 'obj_mainchara'), r(Vq, 'kinds', h('obj_mainchara', n));
var Vx = Vq,
  Vb = class VQ extends n {};
a(Vb, 'obj_npc_room'), r(Vb, 'kinds', h('obj_npc_room', n));
var Vc = Vb,
  Vs = class VP extends n {};
a(Vs, 'obj_onion_event'), r(Vs, 'kinds', h('obj_onion_event', n));
var VE = Vs,
  VA = class Vf extends n {};
a(VA, 'obj_scissordancer'), r(VA, 'kinds', h('obj_scissordancer', n));
var VS = VA,
  VG = class VJ extends n {};
a(VG, 'obj_solidblock'), r(VG, 'kinds', h('obj_solidblock', n));
var Vz = VG,
  Vn = class Vo extends n {};
a(Vn, 'obj_solidenemy'), r(Vn, 'kinds', h('obj_solidenemy', n));
var Vh = Vn,
  VW = class VL extends n {};
a(VW, 'obj_susieandlancer_event'), r(VW, 'kinds', h('obj_susieandlancer_event', n));
var VB = VW;
export { V0 as a, V2 as b, V4 as c, V6 as d, V8 as e, VV as f, Vj as g, Vg as h, Vm as i, Vx as j, Vc as k, VE as l, VS as m, Vz as n, Vh as o, VB as p, l as q };