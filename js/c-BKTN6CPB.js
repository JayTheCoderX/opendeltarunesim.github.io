import { b as r, c as B, d as Z } from './c-AYDQ2WI5.js';
import { Ha as T } from './c-F3KC5JBP.js';
import { b as u, c as A, e as J } from './c-S6HGHCFD.js';
import { a as N } from './c-HQHPDIVM.js';
import { g as P } from './c-ZQQWH6UG.js';
import { qb as w } from './c-PBMEVLU6.js';
import { a as q, e as D, l as v } from './c-XSSGDLV7.js';
v();
var E = class V extends A {
  ["userEvent"](L) {
    if (L === 0xc) {
      T.call(this), P.monsterx[this.myself] = this.x + 0x14, P.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(L);
  }
};
q(E, 'obj_cutenemy2'), D(E, 'kinds', w('obj_cutenemy2', A));
var S = E;
function U(L) {
  return B[L] || u[L] || null;
}
q(U, 'classFor');
function F() {
  let L = [];
  for (let s of r.unusedEnemyObjects || []) {
    let H = U(s.object),
      z = H || S,
      X = !H,
      o0 = s.why;
    X && (o0 += " The port has no class for it yet, so its stats, ACT list and check text run on the data-only shell.");
    let o1 = (s.needs || []).filter(o4 => o4.type > 0x0 && U(o4.object)),
      o2 = [{
        'cls': z,
        'type': s.type,
        'x': 0x1f4,
        'y': 0x78,
        'setup': () => {}
      }],
      o3 = o1.map(o4 => ({
        'cls': U(o4.object),
        'x': 0x1f4,
        'y': 0x78
      }));
    o1.length && (o0 += '\x20' + o1.map(o4 => o4.object).join(',\x20') + " is put in the room with it for that reason, inert (not registered as a monster, so its own Step never runs) and invisible, purely so those reads resolve."), L.push({
      'id': 'ch2cut_' + s.object.replace(/^(obj|o)_/, ''),
      'name': J(s),
      'chapter': 0x2,
      'area': "CUT CONTENT",
      'cut': true,
      'generated': true,
      'desc': s.name + '#' + s.object + '#' + Z(o0),
      'party': P.char && P.char.length ? P.char.slice() : [0x1, 0x2, 0x3],
      'heromakex': [0x50, 0x50, 0x50],
      'heromakey': [0x32, 0x82, 0xd2],
      'cutObject': true,
      'monsters': o2,
      'bystanders': o3,
      'battlemsg': '*\x20' + s.name + " blocks the way!",
      'encounterno': 0x0,
      'music': 'battle',
      'background': N(null)
    });
  }
  for (let o4 of r.unusedMonsterTypes || []) o4.carriedForward || L.push({
    'id': 'ch2cut' + o4.type,
    'name': o4.name,
    'chapter': 0x2,
    'area': "CUT CONTENT",
    'cut': true,
    'generated': true,
    'desc': o4.name + "#Chapter 2 monstertype " + o4.type + '.#' + Z(o4.why),
    'party': P.char && P.char.length ? P.char.slice() : [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': S,
      'type': o4.type,
      'x': 0x1f4,
      'y': 0xa0,
      'setup': () => {}
    }],
    'battlemsg': '*\x20' + o4.name + " blocks the way!",
    'encounterno': 0x0,
    'music': 'battle',
    'background': N(null)
  });
  return L;
}
q(F, 'buildCutFights2');
var Y = r.unusedAttackDetail || [],
  O = r;
export { S as a, F as b, Y as c, O as d };