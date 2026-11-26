const q = function () {
    let FF = true;
    return function (Fs, Fc) {
      const Fn = FF ? function () {
        if (Fc) {
          const Fg = Fc.apply(Fs, arguments);
          return Fc = null, Fg;
        }
      } : function () {};
      return FF = false, Fn;
    };
  }(),
  J = q(this, function () {
    if (J.bind().toString().indexOf('\x0a') !== -0x1) return;
    return J.toString().search(".*").toString().constructor(J).search(".*");
  });
J();
import { a as Z } from './c-HQHPDIVM.js';
import { k as R, rc as C } from './c-GABAATJZ.js';
import { G as E, H as W, s as M } from './c-QFDZPUX2.js';
import { q as O } from './c-OYFOJ3BV.js';
import { f as Q, n as Y } from './c-MYK6C3LF.js';
import { P as r, g as P } from './c-ZQQWH6UG.js';
import { Ib as e, qb as V, xb as L } from './c-PBMEVLU6.js';
import { a, e as A, g as N, l as G } from './c-XSSGDLV7.js';
G(), G();
var X = {
    'chapter': 0x1,
    'unusedMonsterTypes': [{
      'type': 0x4,
      'name': 'Ralsei',
      'carriedForward': !0x1,
      'why': "Defined in scr_monstersetup; no encounter case builds it."
    }, {
      'type': 0x8,
      'name': 'Pippins',
      'carriedForward': !0x1,
      'why': "Defined in scr_monstersetup; no encounter case builds it."
    }, {
      'type': 0x11,
      'name': 'DoomTank',
      'carriedForward': !0x1,
      'why': "Defined in scr_monstersetup; no encounter case builds it."
    }],
    'unusedAttackPatterns': [0x6, 0x7, 0x8, 0xa, 0xb, 0xc, 0xd, 0x16, 0x24, 0x2d, 0x37, 0x38, 0x39, 0x3a, 0x3c, 0x42, 0x43, 0x51, 0x52, 0x53, 0x54],
    'unusedAttackDetail': [{
      'type': 0x6,
      'line': 0x84,
      'why': "obj_dbulletcontroller can run pattern 6 (Step_0.gml line 132) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0x7,
      'line': 0x93,
      'why': "obj_dbulletcontroller can run pattern 7 (Step_0.gml line 147) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0x8,
      'line': 0xa6,
      'why': "obj_dbulletcontroller can run pattern 8 (Step_0.gml line 166) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0xa,
      'line': 0xbc,
      'why': "obj_dbulletcontroller can run pattern 10 (Step_0.gml line 188) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0xb,
      'line': 0xd6,
      'why': "obj_dbulletcontroller can run pattern 11 (Step_0.gml line 214) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0xc,
      'line': 0xf1,
      'why': "obj_dbulletcontroller can run pattern 12 (Step_0.gml line 241) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0xd,
      'line': 0xff,
      'why': "obj_dbulletcontroller can run pattern 13 (Step_0.gml line 255) but nothing assigns it. It spawns obj_dicebul."
    }, {
      'type': 0x16,
      'line': 0x12d,
      'why': "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 301) but nothing assigns it. It spawns obj_regularbullet."
    }, {
      'type': 0x24,
      'line': 0x2ec,
      'why': "obj_dbulletcontroller can run pattern 36 (Step_0.gml line 748) but nothing assigns it. It spawns obj_skychain."
    }, {
      'type': 0x2d,
      'line': 0x3db,
      'why': "obj_dbulletcontroller can run pattern 45 (Step_0.gml line 987) but nothing assigns it. It spawns obj_suitbomb."
    }, {
      'type': 0x37,
      'line': 0x471,
      'why': "obj_dbulletcontroller can run pattern 55 (Step_0.gml line 1137) but nothing assigns it. It spawns obj_bigscythe."
    }, {
      'type': 0x38,
      'line': 0x47c,
      'why': "obj_dbulletcontroller can run pattern 56 (Step_0.gml line 1148) but nothing assigns it. It spawns obj_bigscythe."
    }, {
      'type': 0x39,
      'line': 0x491,
      'why': "obj_dbulletcontroller can run pattern 57 (Step_0.gml line 1169) but nothing assigns it. It spawns obj_bigscythe."
    }, {
      'type': 0x3a,
      'line': 0x49d,
      'why': "obj_dbulletcontroller can run pattern 58 (Step_0.gml line 1181) but nothing assigns it. It spawns obj_bigscythe."
    }, {
      'type': 0x3c,
      'line': 0x4a8,
      'why': "obj_dbulletcontroller can run pattern 60 (Step_0.gml line 1192) but nothing assigns it. It spawns obj_carouselbullet."
    }, {
      'type': 0x42,
      'line': 0x504,
      'why': "obj_dbulletcontroller can run pattern 66 (Step_0.gml line 1284) but nothing assigns it. It spawns obj_spadering."
    }, {
      'type': 0x43,
      'line': 0x510,
      'why': "obj_dbulletcontroller can run pattern 67 (Step_0.gml line 1296) but nothing assigns it. It spawns obj_spadering."
    }, {
      'type': 0x51,
      'line': 0x30a,
      'why': "obj_dbulletcontroller can run pattern 81 (Step_0.gml line 778) but nothing assigns it."
    }, {
      'type': 0x52,
      'line': 0x30e,
      'why': "obj_dbulletcontroller can run pattern 82 (Step_0.gml line 782) but nothing assigns it."
    }, {
      'type': 0x53,
      'line': 0x312,
      'why': "obj_dbulletcontroller can run pattern 83 (Step_0.gml line 786) but nothing assigns it."
    }, {
      'type': 0x54,
      'line': 0x316,
      'why': "obj_dbulletcontroller can run pattern 84 (Step_0.gml line 790) but nothing assigns it."
    }],
    'unusedEncounters': [0xf, 0x15, 0x1d],
    'unusedEncounterWhy': {
      0xf: "Nothing in the chapter sets this encounter number. It builds Clover, Hathy. Its message is \"* Clover and Hathy grew close!\".",
      0x15: "Nothing in the chapter sets this encounter number. It builds Jigsawry. Its message is \"* Jigsawry drew near!\".",
      0x1d: "Nothing in the chapter sets this encounter number. It builds Head Hathy. Its message is \"* Head Hathy blocked the way quietly!\"."
    },
    'carriedForwardEncounters': [],
    'unusedEnemyObjects': [{
      'object': 'obj_clubsenemy_old',
      'parent': 'obj_monsterparent',
      'events': ['Alarm_4', 'Create_0', 'Draw_0', 'Other_22', 'Step_0'],
      'lines': 0x1f2,
      'type': 0x10,
      'typeFrom': "chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)",
      'name': 'Clover',
      'gutted': !0x1,
      'attackTypes': [0x2, 0x4],
      'needs': [],
      'why': "5 events, 498 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)."
    }, {
      'object': 'obj_ralseienemy',
      'parent': 'obj_monsterparent',
      'events': ['Alarm_4', 'Alarm_5', 'Create_0', 'Destroy_0', 'Draw_0', 'Other_22', 'Step_0'],
      'lines': 0x2be,
      'type': 0x4,
      'typeFrom': "its name matches scr_monstersetup type 4 \"Ralsei\"",
      'name': 'Ralsei',
      'gutted': !0x1,
      'attackTypes': [],
      'needs': [],
      'why': "7 events, 702 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: its name matches scr_monstersetup type 4 \"Ralsei\"."
    }],
    'unplaceable': [],
    'unsound': {
      'note': "flag-driven grants make these mostly false positives; not surfaced in the UI",
      'unusedItems': [{
        'id': 0xb,
        'name': 'ClubsSandwich'
      }, {
        'id': 0xe,
        'name': 'Favwich'
      }],
      'unusedWeapons': [{
        'id': 0x1,
        'name': "Wood Blade"
      }, {
        'id': 0x2,
        'name': "Mane Ax"
      }, {
        'id': 0x3,
        'name': "Red Scarf"
      }, {
        'id': 0x4,
        'name': 'EverybodyWeapon'
      }, {
        'id': 0x5,
        'name': 'Spookysword'
      }, {
        'id': 0x6,
        'name': "Brave Ax"
      }, {
        'id': 0x8,
        'name': 'Trefoil'
      }, {
        'id': 0x9,
        'name': 'Ragger'
      }, {
        'id': 0xa,
        'name': 'DaintyScarf'
      }],
      'unusedArmors': [{
        'id': 0x1,
        'name': "Amber Card"
      }, {
        'id': 0x2,
        'name': "Dice Brace"
      }, {
        'id': 0x3,
        'name': "Pink Ribbon"
      }, {
        'id': 0x4,
        'name': "White Ribbon"
      }, {
        'id': 0x6,
        'name': 'MouseToken'
      }]
    },
    'unusedItems': [{
      'id': 0xb,
      'name': 'ClubsSandwich'
    }, {
      'id': 0xe,
      'name': 'Favwich'
    }],
    'unusedWeapons': [{
      'id': 0x1,
      'name': "Wood Blade"
    }, {
      'id': 0x2,
      'name': "Mane Ax"
    }, {
      'id': 0x3,
      'name': "Red Scarf"
    }, {
      'id': 0x4,
      'name': 'EverybodyWeapon'
    }, {
      'id': 0x5,
      'name': 'Spookysword'
    }, {
      'id': 0x6,
      'name': "Brave Ax"
    }, {
      'id': 0x8,
      'name': 'Trefoil'
    }, {
      'id': 0x9,
      'name': 'Ragger'
    }, {
      'id': 0xa,
      'name': 'DaintyScarf'
    }],
    'unusedArmors': [{
      'id': 0x1,
      'name': "Amber Card"
    }, {
      'id': 0x2,
      'name': "Dice Brace"
    }, {
      'id': 0x3,
      'name': "Pink Ribbon"
    }, {
      'id': 0x4,
      'name': "White Ribbon"
    }, {
      'id': 0x6,
      'name': 'MouseToken'
    }],
    'definedAttackPatterns': [0x0, 0x1, 0x2, 0x3, 0x4, 0x6, 0x7, 0x8, 0xa, 0xb, 0xc, 0xd, 0xe, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1e, 0x20, 0x21, 0x22, 0x23, 0x24, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x37, 0x38, 0x39, 0x3a, 0x3c, 0x3d, 0x3e, 0x41, 0x42, 0x43, 0x44, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x51, 0x52, 0x53, 0x54, 0x55],
    'definedMonsterTypes': [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x19]
  },
  F0 = new Proxy({}, {
    'get': a((FF, Fs) => C[Fs] || O[Fs], 'get')
  }),
  F1 = C,
  F2 = class FT extends M {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.candodge = 0x0;
    }
    ["userEvent"](FF) {
      if (FF === 0xc) {
        R.call(this), P.monsterx[this.myself] = this.x + 0x14, P.monstery[this.myself] = this.y;
        return;
      }
      return super.userEvent(FF);
    }
    ["step"]() {
      let FF = this.myself;
      P.monster[FF] === 0x1 && (P.mnfight === 0x1 && this.talked === 0x0 && !L.exists('obj_attackpress') && (this.talked = 0x1, this.talktimer = 0x0, P.mnfight = 0x2), P.mnfight === 0x2 && this.attacked === 0x0 && (this.attacked = 0x1, P.turntimer = 0x78, L.exists('obj_moveheart') || Y(), L.exists('obj_growtangle') || e(0x140, 0xaa, Q)), P.mnfight === 0x2 && P.turntimer <= 0x1 && this.attacked === 0x1 && (this.attacked = 0x2, P.monster && P.monster.__customBoard || W()), P.myfight === 0x3 && this.acting > 0x0 && this.actcon === 0x0 && (this.actcon = 0x1), this.actcon === 0x1 && !L.exists('obj_writer') && (this.actcon = 0x0, P.chapter >= 0x2 && r.scr_nextact ? r.scr_nextact.call(this) : (this.acting = 0x0, P.acting = [0x0, 0x0, 0x0], E())), P.myfight === 0x3 && (this.actconsus === 0x1 || this.actconral === 0x1 || this.actconnoe === 0x1) && !L.exists('obj_writer') && r.scr_nextact && (this.actconsus = 0x0, this.actconral = 0x0, this.actconnoe = 0x0, r.scr_nextact.call(this)), this.state === 0x3 && (this.hurttimer--, this.hurttimer < 0x0 && (this.state = 0x0)));
    }
    ["draw"](FF) {
      FF.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, this.image_alpha), this.flash === 0x1 && (this.fsiner++, FF.draw_sprite_white(this.sprite_index, 0x0, this.x, this.y, 0x2, 0x2, 0x0, -Math.cos(this.fsiner / 0x5) * 0.4 + 0.6)), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
  };
a(F2, 'obj_cutenemy'), A(F2, 'kinds', V('obj_cutenemy', M)), A(F2, 'defaultSprite', 'spr_dummymonster');
var F3 = F2,
  F4 = {
    'obj_clubsenemy_old': 'Early',
    'obj_debug_swatchling': 'Debug',
    'obj_placeholderenemy': 'Placeholder',
    'obj_ralseienemy': 'Unused',
    'obj_rouxls_enemy_old_copy': 'Old'
  },
  F5 = a(FF => FF.name + '\x20(' + (F4[FF.object] || FF.object) + ')', 'cutName');
function F6(FF, Fs = 0x22) {
  let Fc = [],
    Fn = '';
  for (let Fg of String(FF).split(/\s+/).filter(Boolean)) Fn && Fn.length + 0x1 + Fg.length > Fs ? (Fc.push(Fn), Fn = Fg) : Fn = Fn ? Fn + '\x20' + Fg : Fg;
  return Fn && Fc.push(Fn), Fc.join('#');
}
a(F6, 'wrapDesc');
var F7 = {};
for (let Fd of X.unusedEnemyObjects || []) F7[Fd.type] = Fd.object;
function F8() {
  let FF = [];
  for (let Fc of X.unusedMonsterTypes || []) {
    let Fn = F7[Fc.type],
      Fg = Fn && F0[Fn] || F3;
    FF.push({
      'id': 'cut' + Fc.type,
      'name': Fc.name,
      'chapter': 0x1,
      'area': "CUT CONTENT",
      'cut': !0x0,
      'generated': !0x0,
      'desc': Fc.name + '#' + F6(Fc.why || "Unused enemy: defined in the game's data but no encounter uses it.") + (Fn ? "#Runs its own object, " + Fn + '.' : "#Data-only: the game never made an#object for it."),
      'party': [0x1, 0x2, 0x3],
      'heromakex': [0x50, 0x50, 0x50],
      'heromakey': [0x32, 0x82, 0xd2],
      'monsters': [{
        'cls': Fg,
        'type': Fc.type,
        'x': 0x1f4,
        'y': 0xa0,
        'setup': () => {}
      }],
      'battlemsg': '*\x20' + Fc.name + " blocks the way!",
      'encounterno': 0x0,
      'music': 'battle',
      'background': Z(null)
    });
  }
  let Fs = new Set(FF.map(Fy => Fy.monsters[0x0].type));
  for (let Fy of X.unusedEnemyObjects || []) {
    if (Fs.has(Fy.type)) continue;
    let FH = F0[Fy.object] || F3;
    FF.push({
      'id': 'cut_' + Fy.object.replace(/^(obj|o)_/, ''),
      'name': F5(Fy),
      'chapter': 0x1,
      'area': "CUT CONTENT",
      'cut': !0x0,
      'generated': !0x0,
      'desc': Fy.name + '#' + Fy.object + '#' + F6(Fy.why),
      'party': [0x1, 0x2, 0x3],
      'heromakex': [0x50, 0x50, 0x50],
      'heromakey': [0x32, 0x82, 0xd2],
      'monsters': [{
        'cls': FH,
        'type': Fy.type,
        'x': 0x1f4,
        'y': 0xa0,
        'setup': () => {}
      }],
      'battlemsg': '*\x20' + Fy.name + " blocks the way!",
      'encounterno': 0x0,
      'music': 'battle',
      'background': Z(null)
    });
  }
  return FF;
}
a(F8, 'buildCutFights');
var F9 = X;
N(F3, "G.mnfight = 2;");
export { X as a, F1 as b, F3 as c, F4 as d, F5 as e, F6 as f, F8 as g, F9 as h };