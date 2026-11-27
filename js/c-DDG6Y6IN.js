import { f, j as p } from './c-IZXKHYOP.js';
import { l as Z } from './c-RNLQZIER.js';
import { n as z } from './c-VB7PBWB7.js';
import { e as H, f as o, g as V } from './c-3KRFGFG4.js';
import { d as B } from './c-PGO4VU5H.js';
import { n as r } from './c-KLECZKO5.js';
import { f as e } from './c-WSZI3RLB.js';
import { c as Q } from './c-GI6IDYOV.js';
import { g as X } from './c-ZQQWH6UG.js';
import { Ca as L, Tb as P, Ub as J, X as a, ac as Y, lc as d, mc as k0, xb as k1 } from './c-PBMEVLU6.js';
import { a as k2, l as k3 } from './c-XSSGDLV7.js';
k3();
var k4 = 0x1e,
  k5 = ['b1', 'b2', 'b3', 'left', 'right', 'up', 'down'],
  k6 = k2(q => {
    if (!q) return {};
    let K = q.partystats !== void 0x0 ? q : {
      'partystats': 'CUSTOM',
      ...q
    };
    return {
      'utItems': [],
      'utParty': null,
      'utName': '',
      ...(K.startitems !== void 0x0 ? K : {
        ...K,
        'startitems': 'OFF'
      })
    };
  }, 'setupOf'),
  k7 = ['font', 'color', 'alpha', 'halign', 'valign', 'fog'];
function k8() {
  let q = k1.first('obj_heart') || k1.first('obj_purpleheart'),
    K = typeof X.hp == 'number' ? X.hp : Array.isArray(X.hp) ? (X.hp[0x1] || 0x0) + (X.hp[0x2] || 0x0) + (X.hp[0x3] || 0x0) : 0x0;
  return (q ? (q.x | 0x0) + ',' + (q.y | 0x0) : 'none') + '|' + K + '|' + k1.list.length + '|' + (X.mnfight | 0x0);
}
k2(k8, 'sigString');
function k9(kf) {
  let kZ = 0x811c9dc5;
  for (let kz = 0x0; kz < kf.length; kz++) kZ ^= kf.charCodeAt(kz), kZ = Math.imul(kZ, 0x1000193) >>> 0x0;
  return kZ >>> 0x0;
}
k2(k9, 'fnv');
var kk = k2(() => k9(k8()) || 0x1, 'sigNow');
function kq() {
  let q = Q(d),
    K = q.ctx;
  try {
    Object.defineProperty(q, 'ctx', {
      'get': () => K,
      'set': () => {},
      'configurable': true
    });
  } catch {}
  return q;
}
k2(kq, 'makeNullG');
function kK(q) {
  for (let K = 0x0; K < k5.length; K++) {
    let kf = k5[K];
    a.held[kf] = !!(q & 0x1 << K), a.pressed[kf] = !!(q & 0x1 << K + 0x8), a.released[kf] = !!(q & 0x1 << K + 0x10);
  }
}
k2(kK, 'writeBits');
function kb(q) {
  if (q.k === 'godmode') X.godmode = !!q.v;else {
    if (q.k === 'forceAttack') X.forceAttack = q.v;else {
      if (q.k === 'kill') {
        if (typeof X.hp == 'number') X.hp = 0x0;else {
          if (Array.isArray(X.char)) for (let K = 0x0; K < X.char.length; K++) {
            let kf = X.char[K];
            kf && (X.hp[kf] = 0x0);
          }
        }
      }
    }
  }
}
k2(kb, 'applyNote');
function ki(q, K) {
  let kf = new Map();
  for (let kZ of Array.isArray(q.notes) ? q.notes : []) !kZ || !Number.isInteger(kZ.f) || (kf.has(kZ.f) || kf.set(kZ.f, []), kf.get(kZ.f).push(kZ));
  let kw = new Map();
  for (let kz of Array.isArray(q.checks) ? q.checks : []) Array.isArray(kz) && Number.isInteger(kz[0x0]) && typeof kz[0x1] == 'string' && kw.set(kz[0x0], parseInt(kz[0x1], 0x10) >>> 0x0 || 0x1);
  let kp = K ? Object.assign(Object.create(Object.getPrototypeOf(K)), K) : null;
  return kp && (delete kp._guestsIn, delete kp._guestWait, delete kp._guestCount), {
    'notes': kf,
    'checks': kw,
    'fx': kp
  };
}
k2(ki, 'prepare');
function kv(q, K, kf) {
  let kw = kq();
  return J(kw), o(q, {
    'seed': K.seed | 0x0,
    'cfg': kf
  }), H(q) ? r(q) : (Z(q), V(q, kf)), X.autoplay = false, X.godmode = !!K.godmode0, a.synthetic = null, kw;
}
k2(kv, 'stage');
function kT(q, K, kf, kw) {
  let kp = q.notes.get(kf - 0x1);
  if (kp) {
    for (let ko of kp) kb(ko);
  }
  let kZ = K[kf - 0x1] >>> 0x0;
  if (a.synthetic = () => kK(kZ), L.freetp && (X.tension = X.maxtension), X.autoplay = false, B(), X.godmode) {
    if (typeof X.hp == 'number') X.hp = X.maxhp || 0x14;else {
      if (X.maxhp) {
        for (let kV = 0x1; kV <= 0x3; kV++) X.maxhp[kV] && (X.hp[kV] = X.maxhp[kV]);
      }
    }
    X.karma = 0x0, X.fightRoom === 'room_floweyx' && X.my_inv >= 0x13 && X.my_hp > 0x1 && X.my_hp < 0x32 && (X.my_hp = 0x32);
  }
  X.pressedDebugKeys = null, z(), Y(e, kw);
  let kz = q.fx;
  kz.customEncounter && !kz._guestsIn && (kz._guestWait = (kz._guestWait || 0x0) + 0x1, kz._guestWait >= 0x3 && (kz._guestsIn = true, kz._guestCount = p(kz))), kz.customEncounter && f(kz);
  let kH = q.checks.get(kf);
  return kH ? kk() === kH ? 0x1 : -0x1 : 0x0;
}
k2(kT, 'stepFrame');
function ks(q) {
  let K = new d(q);
  for (let kf of k7) P && kf in P && (K[kf] = P[kf]);
  return J(K), K;
}
k2(ks, 'takeOver');
function kt(q) {
  !X.inGameOver && X.battleover && (q.fade = Math.min(0x1, (q.fade || 0x0) + 0.04));
}
k2(kt, 'fadeStep');
function kA(q, K, kf, kw) {
  q.setTransform(kf, 0x0, 0x0, kf, 0x0, 0x0), q.globalAlpha = 0x1, q.globalCompositeOperation = "source-over", q.imageSmoothingEnabled = false, q.fillStyle = "#000", q.fillRect(0x0, 0x0, 0x280, 0x1e0), q.save(), X.roomScale === 0x2 && q.scale(0x2, 0x2), q.translate(Math.round((X.shakex || 0x0) * (L.shake ?? 0x1)), Math.round((X.shakey || 0x0) * (L.shake ?? 0x1)));
  try {
    k0(K, 0x1);
  } catch {}
  q.restore(), !X.inGameOver && X.battleover && (kt(kw), q.fillStyle = "rgba(0,0,0," + kw.fade + ')', q.fillRect(0x0, 0x0, 0x280, 0x1e0));
}
k2(kA, 'present');
export { k4 as a, k5 as b, k6 as c, k8 as d, kk as e, kq as f, kK as g, kb as h, ki as i, kv as j, kT as k, ks as l, kt as m, kA as n };