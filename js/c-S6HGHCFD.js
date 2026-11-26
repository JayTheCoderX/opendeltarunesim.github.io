import { a as Z } from "./c-HQHPDIVM.js";
import { k as R, rc as C } from "./c-GABAATJZ.js";
import { G as E, H as W, s as M } from "./c-QFDZPUX2.js";
import { q as O } from "./c-OYFOJ3BV.js";
import { f as Q, n as Y } from "./c-MYK6C3LF.js";
import { P as r, g as P } from "./c-ZQQWH6UG.js";
import { Ib as e, qb as V, xb as L } from "./c-PBMEVLU6.js";
import { a, e as A, g as N, l as G } from "./c-XSSGDLV7.js";
G();
G();
var X = {
  chapter: 1,
  unusedMonsterTypes: [{
    type: 4,
    name: "Ralsei",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }, {
    type: 8,
    name: "Pippins",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }, {
    type: 17,
    name: "DoomTank",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }],
  unusedAttackPatterns: [6, 7, 8, 10, 11, 12, 13, 22, 36, 45, 55, 56, 57, 58, 60, 66, 67, 81, 82, 83, 84],
  unusedAttackDetail: [{
    type: 6,
    line: 132,
    why: "obj_dbulletcontroller can run pattern 6 (Step_0.gml line 132) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 7,
    line: 147,
    why: "obj_dbulletcontroller can run pattern 7 (Step_0.gml line 147) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 8,
    line: 166,
    why: "obj_dbulletcontroller can run pattern 8 (Step_0.gml line 166) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 10,
    line: 188,
    why: "obj_dbulletcontroller can run pattern 10 (Step_0.gml line 188) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 11,
    line: 214,
    why: "obj_dbulletcontroller can run pattern 11 (Step_0.gml line 214) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 12,
    line: 241,
    why: "obj_dbulletcontroller can run pattern 12 (Step_0.gml line 241) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 13,
    line: 255,
    why: "obj_dbulletcontroller can run pattern 13 (Step_0.gml line 255) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 22,
    line: 301,
    why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 301) but nothing assigns it. It spawns obj_regularbullet."
  }, {
    type: 36,
    line: 748,
    why: "obj_dbulletcontroller can run pattern 36 (Step_0.gml line 748) but nothing assigns it. It spawns obj_skychain."
  }, {
    type: 45,
    line: 987,
    why: "obj_dbulletcontroller can run pattern 45 (Step_0.gml line 987) but nothing assigns it. It spawns obj_suitbomb."
  }, {
    type: 55,
    line: 1137,
    why: "obj_dbulletcontroller can run pattern 55 (Step_0.gml line 1137) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 56,
    line: 1148,
    why: "obj_dbulletcontroller can run pattern 56 (Step_0.gml line 1148) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 57,
    line: 1169,
    why: "obj_dbulletcontroller can run pattern 57 (Step_0.gml line 1169) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 58,
    line: 1181,
    why: "obj_dbulletcontroller can run pattern 58 (Step_0.gml line 1181) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 60,
    line: 1192,
    why: "obj_dbulletcontroller can run pattern 60 (Step_0.gml line 1192) but nothing assigns it. It spawns obj_carouselbullet."
  }, {
    type: 66,
    line: 1284,
    why: "obj_dbulletcontroller can run pattern 66 (Step_0.gml line 1284) but nothing assigns it. It spawns obj_spadering."
  }, {
    type: 67,
    line: 1296,
    why: "obj_dbulletcontroller can run pattern 67 (Step_0.gml line 1296) but nothing assigns it. It spawns obj_spadering."
  }, {
    type: 81,
    line: 778,
    why: "obj_dbulletcontroller can run pattern 81 (Step_0.gml line 778) but nothing assigns it."
  }, {
    type: 82,
    line: 782,
    why: "obj_dbulletcontroller can run pattern 82 (Step_0.gml line 782) but nothing assigns it."
  }, {
    type: 83,
    line: 786,
    why: "obj_dbulletcontroller can run pattern 83 (Step_0.gml line 786) but nothing assigns it."
  }, {
    type: 84,
    line: 790,
    why: "obj_dbulletcontroller can run pattern 84 (Step_0.gml line 790) but nothing assigns it."
  }],
  unusedEncounters: [15, 21, 29],
  unusedEncounterWhy: {
    15: "Nothing in the chapter sets this encounter number. It builds Clover, Hathy. Its message is \"* Clover and Hathy grew close!\".",
    21: "Nothing in the chapter sets this encounter number. It builds Jigsawry. Its message is \"* Jigsawry drew near!\".",
    29: "Nothing in the chapter sets this encounter number. It builds Head Hathy. Its message is \"* Head Hathy blocked the way quietly!\"."
  },
  carriedForwardEncounters: [],
  unusedEnemyObjects: [{
    object: "obj_clubsenemy_old",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 498,
    type: 16,
    typeFrom: "chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)",
    name: "Clover",
    gutted: false,
    attackTypes: [2, 4],
    needs: [],
    why: "5 events, 498 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)."
  }, {
    object: "obj_ralseienemy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Alarm_5", "Create_0", "Destroy_0", "Draw_0", "Other_22", "Step_0"],
    lines: 702,
    type: 4,
    typeFrom: "its name matches scr_monstersetup type 4 \"Ralsei\"",
    name: "Ralsei",
    gutted: false,
    attackTypes: [],
    needs: [],
    why: "7 events, 702 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: its name matches scr_monstersetup type 4 \"Ralsei\"."
  }],
  unplaceable: [],
  unsound: {
    note: "flag-driven grants make these mostly false positives; not surfaced in the UI",
    unusedItems: [{
      id: 11,
      name: "ClubsSandwich"
    }, {
      id: 14,
      name: "Favwich"
    }],
    unusedWeapons: [{
      id: 1,
      name: "Wood Blade"
    }, {
      id: 2,
      name: "Mane Ax"
    }, {
      id: 3,
      name: "Red Scarf"
    }, {
      id: 4,
      name: "EverybodyWeapon"
    }, {
      id: 5,
      name: "Spookysword"
    }, {
      id: 6,
      name: "Brave Ax"
    }, {
      id: 8,
      name: "Trefoil"
    }, {
      id: 9,
      name: "Ragger"
    }, {
      id: 10,
      name: "DaintyScarf"
    }],
    unusedArmors: [{
      id: 1,
      name: "Amber Card"
    }, {
      id: 2,
      name: "Dice Brace"
    }, {
      id: 3,
      name: "Pink Ribbon"
    }, {
      id: 4,
      name: "White Ribbon"
    }, {
      id: 6,
      name: "MouseToken"
    }]
  },
  unusedItems: [{
    id: 11,
    name: "ClubsSandwich"
  }, {
    id: 14,
    name: "Favwich"
  }],
  unusedWeapons: [{
    id: 1,
    name: "Wood Blade"
  }, {
    id: 2,
    name: "Mane Ax"
  }, {
    id: 3,
    name: "Red Scarf"
  }, {
    id: 4,
    name: "EverybodyWeapon"
  }, {
    id: 5,
    name: "Spookysword"
  }, {
    id: 6,
    name: "Brave Ax"
  }, {
    id: 8,
    name: "Trefoil"
  }, {
    id: 9,
    name: "Ragger"
  }, {
    id: 10,
    name: "DaintyScarf"
  }],
  unusedArmors: [{
    id: 1,
    name: "Amber Card"
  }, {
    id: 2,
    name: "Dice Brace"
  }, {
    id: 3,
    name: "Pink Ribbon"
  }, {
    id: 4,
    name: "White Ribbon"
  }, {
    id: 6,
    name: "MouseToken"
  }],
  definedAttackPatterns: [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27, 30, 32, 33, 34, 35, 36, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 60, 61, 62, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 81, 82, 83, 84, 85],
  definedMonsterTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25]
};
var F0 = new Proxy({}, {
  get: a((FF, Fs) => C[Fs] || O[Fs], "get")
});
var F1 = C;
var F2 = class FT extends M {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.candodge = 0;
  }
  userEvent(FF) {
    if (FF === 12) {
      R.call(this);
      P.monsterx[this.myself] = this.x + 20;
      P.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(FF);
  }
  step() {
    let FF = this.myself;
    if (P.monster[FF] === 1) {
      if (P.mnfight === 1 && this.talked === 0 && !L.exists("obj_attackpress")) {
        this.talked = 1;
        this.talktimer = 0;
        P.mnfight = 2;
      }
      if (P.mnfight === 2 && this.attacked === 0) {
        this.attacked = 1;
        P.turntimer = 120;
        if (!L.exists("obj_moveheart")) {
          Y();
        }
        if (!L.exists("obj_growtangle")) {
          e(320, 170, Q);
        }
      }
      if (P.mnfight === 2 && P.turntimer <= 1 && this.attacked === 1) {
        this.attacked = 2;
        if (!P.monster || !P.monster.__customBoard) {
          W();
        }
      }
      if (P.myfight === 3 && this.acting > 0 && this.actcon === 0) {
        this.actcon = 1;
      }
      if (this.actcon === 1 && !L.exists("obj_writer")) {
        this.actcon = 0;
        if (P.chapter >= 2 && r.scr_nextact) {
          r.scr_nextact.call(this);
        } else {
          this.acting = 0;
          P.acting = [0, 0, 0];
          E();
        }
      }
      if (P.myfight === 3 && (this.actconsus === 1 || this.actconral === 1 || this.actconnoe === 1) && !L.exists("obj_writer") && r.scr_nextact) {
        this.actconsus = 0;
        this.actconral = 0;
        this.actconnoe = 0;
        r.scr_nextact.call(this);
      }
      if (this.state === 3) {
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        }
      }
    }
  }
  draw(FF) {
    FF.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
    if (this.flash === 1) {
      this.fsiner++;
      FF.draw_sprite_white(this.sprite_index, 0, this.x, this.y, 2, 2, 0, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
a(F2, "obj_cutenemy");
A(F2, "kinds", V("obj_cutenemy", M));
A(F2, "defaultSprite", "spr_dummymonster");
var F3 = F2;
var F4 = {
  obj_clubsenemy_old: "Early",
  obj_debug_swatchling: "Debug",
  obj_placeholderenemy: "Placeholder",
  obj_ralseienemy: "Unused",
  obj_rouxls_enemy_old_copy: "Old"
};
var F5 = a(FF => FF.name + " (" + (F4[FF.object] || FF.object) + ")", "cutName");
function F6(FF, Fs = 34) {
  let Fc = [];
  let Fn = "";
  for (let Fg of String(FF).split(/\s+/).filter(Boolean)) {
    if (Fn && Fn.length + 1 + Fg.length > Fs) {
      Fc.push(Fn);
      Fn = Fg;
    } else {
      Fn = Fn ? Fn + " " + Fg : Fg;
    }
  }
  if (Fn) {
    Fc.push(Fn);
  }
  return Fc.join("#");
}
a(F6, "wrapDesc");
var F7 = {};
for (let Fd of X.unusedEnemyObjects || []) {
  F7[Fd.type] = Fd.object;
}
function F8() {
  let FF = [];
  for (let Fc of X.unusedMonsterTypes || []) {
    let Fn = F7[Fc.type];
    let Fg = Fn && F0[Fn] || F3;
    FF.push({
      id: "cut" + Fc.type,
      name: Fc.name,
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: Fc.name + "#" + F6(Fc.why || "Unused enemy: defined in the game's data but no encounter uses it.") + (Fn ? "#Runs its own object, " + Fn + "." : "#Data-only: the game never made an#object for it."),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [{
        cls: Fg,
        type: Fc.type,
        x: 500,
        y: 160,
        setup: () => {}
      }],
      battlemsg: "* " + Fc.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: Z(null)
    });
  }
  let Fs = new Set(FF.map(Fy => Fy.monsters[0].type));
  for (let Fy of X.unusedEnemyObjects || []) {
    if (Fs.has(Fy.type)) {
      continue;
    }
    let FH = F0[Fy.object] || F3;
    FF.push({
      id: "cut_" + Fy.object.replace(/^(obj|o)_/, ""),
      name: F5(Fy),
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: Fy.name + "#" + Fy.object + "#" + F6(Fy.why),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [{
        cls: FH,
        type: Fy.type,
        x: 500,
        y: 160,
        setup: () => {}
      }],
      battlemsg: "* " + Fy.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: Z(null)
    });
  }
  return FF;
}
a(F8, "buildCutFights");
var F9 = X;
N(F3, "G.mnfight = 2;");
export { X as a, F1 as b, F3 as c, F4 as d, F5 as e, F6 as f, F8 as g, F9 as h };
