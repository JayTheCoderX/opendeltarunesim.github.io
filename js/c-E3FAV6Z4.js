import { b as e, c as t0 } from "./c-O567UJ4Y.js";
import { G as t1, s as t2 } from "./c-QFDZPUX2.js";
import { a as t3, c as t4, g as t5 } from "./c-DTW63MWW.js";
import { f as t6, g as t7 } from "./c-3ELH3LBH.js";
import { a as t8, f as t9, n as to, p as ta } from "./c-MYK6C3LF.js";
import { H as tY, M as tB, Q as tr, g as ti, n as tA } from "./c-ZQQWH6UG.js";
import { B as tf, C as tE, Ib as tl, Ra as tF, Ta as tC, na as tX, o as tG, pb as tU, qb as tw, r as tg, x as tW, xb as tb } from "./c-PBMEVLU6.js";
import { a as tz, c as tZ, e as tP, g as tO, l as tj } from "./c-XSSGDLV7.js";
var tK = {};
tZ(tK, {
  FIGHTS: () => o6,
  SOUNDS: () => tq,
  SPRITES: () => tN,
  obj_defeatanim: () => tk,
  obj_hathyfightevent: () => o1,
  obj_headhathy: () => tS,
  obj_heartblcon: () => te,
  obj_heartenemy: () => tI,
  obj_heartshaper: () => tT,
  obj_spareanim: () => tp,
  obj_spinheart: () => tR,
  setupHathyStats: () => td,
  setupHeadHathyStats: () => ts,
  setupStats: () => tV
});
tj();
var tN = ["spr_heartenemy_idle", "spr_heartenemy_hurt", "spr_heartenemy_spared", "spr_hathyx_idle", "spr_hathyx_hurt", "spr_hathyx_spared", "spr_heartblcon_0", "spr_heartblcon_1", "spr_heartblcon_2", "spr_heartblcon_3", "spr_heartblcon_4", "spr_heartblcon_5", "spr_battleblcon", "spr_spinheart", "spr_spinheartmask", "spr_heartbullet", "spr_sparestar_anim", "spr_defeatsweat"];
var tq = ["snd_spare", "snd_defeatrun"];
function tV(o7) {
  ti.monstername[o7] = "Hathy";
  ti.monstermaxhp[o7] = 150;
  ti.monsterhp[o7] = 150;
  ti.monsterat[o7] = 6;
  ti.monsterdf[o7] = 0;
  ti.monsterexp[o7] = 0;
  ti.monstergold[o7] = 28;
  ti.sparepoint[o7] = 10;
  ti.mercymod[o7] = 0;
  ti.mercymax[o7] = 100;
  ti.canact[o7][0] = 1;
  ti.actname[o7][0] = "Check";
  ti.canact[o7][1] = 1;
  ti.actname[o7][1] = "Flatter";
  ti.canact[o7][2] = 1;
  ti.actname[o7][2] = "X-Flatter";
  ti.actactor[o7][2] = 3;
  if (ti.encounterno === 7) {
    ti.actactor[o7][2] = 2;
    if (ti.plot < 40) {
      ti.plot = 40;
    }
  }
  if (tA(2) && ti.plot < 150) {
    ti.canact[o7][3] = 1;
    ti.actname[o7][3] = "Warning";
    ti.actactor[o7][3] = 3;
  }
  if (tA(2) && ti.plot >= 150) {
    ti.canact[o7][3] = 1;
    ti.actname[o7][3] = "S-Flatter";
    ti.actactor[o7][3] = 2;
  }
}
tz(tV, "setupStats");
var td = tV;
function ts(o7) {
  ti.monstername[o7] = "Head Hathy";
  ti.monstermaxhp[o7] = 190;
  ti.monsterhp[o7] = 190;
  ti.monsterat[o7] = 8;
  ti.monsterdf[o7] = 0;
  ti.monsterexp[o7] = 0;
  ti.monstergold[o7] = 40;
  ti.sparepoint[o7] = 10;
  ti.mercymod[o7] = 0;
  ti.mercymax[o7] = 100;
  ti.canact[o7][0] = 1;
  ti.actname[o7][0] = "Check";
  ti.canact[o7][1] = 1;
  ti.actname[o7][1] = "Flirt";
  ti.canact[o7][2] = 1;
  ti.actname[o7][2] = "X-Flirt";
  ti.actactor[o7][2] = 2;
}
tz(ts, "setupHeadHathyStats");
function tm(o7, o8) {
  ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FR \\TR %";
}
tz(tm, "scr_ralface");
function tJ(o7, o8) {
  ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FS \\TS %";
}
tz(tJ, "scr_susface");
var tM = /^\\TX \\F0 \\E(\w) \\F[RS] \\T[RS] %$/;
function tQ() {
  let o7 = [];
  let o8 = "";
  for (let o9 = 0; o9 < ti.msg.length; o9++) {
    let oo = ti.msg[o9];
    if (typeof oo != "string") {
      o7.push(oo);
      continue;
    }
    let oa = tM.exec(oo);
    if (oa) {
      o8 = "\\E" + oa[1];
      continue;
    }
    o7.push(o8 + oo);
    o8 = "";
  }
  while (o7.length < 100) {
    o7.push(" ");
  }
  ti.msg = o7;
}
tz(tQ, "foldFaceLines");
var tn = class oY extends tU {
  create() {
    this.image_speed = 0.2;
    this.siner = 0;
  }
  draw(o7) {
    this.siner += 1;
    o7.draw_sprite("spr_battleblcon", 0, this.x, this.y);
    o7.draw_sprite(this.sprite_index, this.image_index, this.x + 15 + tW(tf(this.siner / 8)), this.y + 15 + tW(tE(this.siner / 8)));
  }
};
tz(tn, "obj_heartblcon");
tP(tn, "kinds", tw("obj_heartblcon", tU));
tP(tn, "defaultDepth", 0);
tP(tn, "defaultSprite", "spr_heartblcon_0");
var te = tn;
var tu = class oB extends tU {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    tC("snd_spare");
    tF("snd_spare");
  }
  draw(o7) {
    let o8 = this.sprite_index;
    let o9 = this.image_index;
    let oo = this.image_xscale;
    let oa = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      o7.draw_sprite_white(o8, o9, this.x + this.afterimage * 4, this.y, oo, oa, 0, 0.7 - this.afterimage / 25);
      o7.draw_sprite_white(o8, o9, this.x + this.afterimage * 8, this.y, oo, oa, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        o7.draw_sprite_ext(o8, o9, this.x, this.y, oo, oa, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let or = this.t / 5;
      if (or > 1) {
        or = 1;
      }
      o7.draw_sprite_white(o8, o9, this.x, this.y, oo, oa, 0, or - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let oi = 0; oi < 2; oi++) {
        let oA = tl(this.x + tG(this.sprite_width), this.y + tG(this.sprite_height), t8);
        oA.image_xscale = 2;
        oA.image_yscale = 2;
        oA.sprite_index = "spr_sparestar_anim";
        oA.image_alpha = 2;
        oA.image_speed = 0.25;
        oA.hspeed = -3;
        oA.gravity = 0.5;
        oA.gravity_direction = 0;
        this.star[this.starcount] = oA;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let of = 0; of < this.starcount; of++) {
        let oE = this.star[of];
        if (oE && !oE.destroyed) {
          oE.image_angle += 10;
          oE.image_alpha -= 0.1;
          if (oE.image_alpha <= 0) {
            oE.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let ol = 0; ol < this.starcount; ol++) {
        let oF = this.star[ol];
        if (oF && !oF.destroyed) {
          oF.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
tz(tu, "obj_spareanim");
tP(tu, "kinds", tw("obj_spareanim", tU));
tP(tu, "defaultDepth", 0);
var tp = tu;
var tc = class oC extends tU {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    tF("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(o7) {
    if (this.t === 0) {
      this.draw_self(o7);
    }
    let o8 = 0;
    if (this.g <= 5) {
      o8 = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      o8 = 1;
    }
    if (o8 === 1) {
      o7.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let o9 = 0; o9 <= 80; o9++) {
        o7.draw_sprite_ext(this.sprite_index, this.image_index, this.x + o9 * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + o9 / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
tz(tc, "obj_defeatanim");
tP(tc, "kinds", tw("obj_defeatanim", tU));
tP(tc, "defaultDepth", 0);
var tk = tc;
var tH = class oX extends t5 {
  create() {
    let o7 = tb.first("obj_heart");
    this.con = 0;
    this.htimer = 0;
    this.image_xscale = 4;
    this.image_yscale = 4;
    this.active = 0;
    this.image_alpha = 0;
    this.x = (o7 ? o7.x : 312) + 8;
    this.y = (o7 ? o7.y : 162) + 8;
    this.image_angle = -90;
    this.joker = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
  }
  step() {
    if (this.con === 4) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.friction = 0;
        this.speed = 0;
      }
      if (this.htimer >= 20) {
        this.active = 0;
        this.image_alpha -= 0.2;
      }
      if (this.htimer >= 25 && ti.turntimer >= 0) {
        ti.turntimer = -2;
      }
    }
    if (this.con === 3) {
      this.htimer += 1;
      if (this.htimer >= this.hmax) {
        this.direction = this.image_angle;
        this.speed = 2.5;
        this.friction = -0.5;
        if (this.joker === 1) {
          this.speed = 5;
        }
        this.con = 4;
        this.htimer = 0;
      }
    }
    if (this.con === 2) {
      this.htimer += 1;
      this.image_angle += 24;
      if (this.htimer >= this.spinmax) {
        this.hmax = 19;
        if (this.joker === 1) {
          this.hmax = 15;
        }
        this.image_angle = 270 + this.spinmax * 24;
        this.con = 3;
        this.htimer = 0;
      }
    }
    if (this.con === 1) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.spinmax = tg(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + tG(15);
        }
        this.con = 2;
        this.htimer = 0;
      }
    }
    if (this.con === 0) {
      this.image_alpha += 0.2;
      this.image_xscale -= 0.2;
      this.image_yscale -= 0.2;
      this.htimer += 1;
      if (this.htimer >= 5) {
        this.con = 1;
        this.htimer = 0;
        this.active = 1;
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
    }
    if (this.grazetimer >= 15) {
      this.grazetimer = 0;
      this.grazed = 0;
    }
  }
};
tz(tH, "obj_spinheart");
tP(tH, "kinds", tw("obj_spinheart", t5));
tP(tH, "defaultDepth", 0);
tP(tH, "defaultSprite", "spr_spinheart");
tP(tH, "defaultMask", "spr_spinheartmask");
var tR = tH;
var tv = class oG extends t4 {
  create() {
    let o7 = tb.first("obj_heart");
    this.siner = 0;
    this.radius = 160;
    this.dir = 0;
    this.norot = 0;
    this.actual = 1;
    this.thisx = o7 ? o7.x : 312;
    this.thisy = o7 ? o7.y : 162;
    this.made = 0;
    this.damage = 100;
    this.active = 1;
    this.type = 0;
    this.maxradius = 80;
    this.movespeed = 0.5;
    this.radcon = 0;
    this.bul = [];
  }
  step() {
    if (this.actual === 0 && (this.siner += 1, this.dir += 2, this.xdir = this.dir + 180, this.norot === 1)) {
      let o7 = tb.first("obj_heart");
      for (let o8 = 0; o8 < 20; o8++) {
        let o9 = o8 * 2 * Math.PI / 20 + this.siner / 60;
        let oo = tf(o9) * tf(o9) * tf(o9) * 16;
        let oa = tE(o9) * 13 - tE(o9 * 2) * 5 - tE(o9 * 3) * 2 - tE(o9 * 4);
        this.xxx = (o7 ? o7.x : 312) + 8 + oo * this.radius;
        this.yyy = (o7 ? o7.y : 162) + 8 - oa * this.radius;
      }
    }
    if (this.actual === 1) {
      if (this.made === 0) {
        for (let oi = 0; oi < 16; oi++) {
          let oA = tl(-20, -20, t5);
          oA.damage = this.damage;
          oA.grazepoints = 2;
          oA.timepoints = 1;
          oA.depth = 0;
          oA.image_alpha = 0;
          oA.sprite_index = "spr_heartbullet";
          this.bul[oi] = oA;
        }
        this.made = 1;
      }
      if (this.type === 0) {
        if (this.radius > this.maxradius) {
          this.radius -= 5;
        } else {
          this.radius += tf(this.siner / 10) / 2;
        }
      }
      if (this.type === 1) {
        if (this.radius > this.maxradius && this.radcon === 0) {
          this.radius -= 4;
        } else {
          this.radcon = 1;
          this.radius += 8;
          this.active = 0;
          this.image_alpha -= 0.1;
        }
      }
      this.dir += 2;
      this.siner += 1.5;
      let or = 0;
      for (let of = 0; of < 16; of++) {
        let oE = this.bul[of];
        if (oE && !oE.destroyed) {
          or += 1;
          if (this.radcon === 0 && oE.image_alpha < 1) {
            oE.image_alpha += 0.1;
          }
          let ol = tf(Math.PI * of / 8 + this.siner / 20) * this.radius;
          let oF = tE(Math.PI * of / 8 + this.siner / 20) * this.radius;
          oE.x = this.thisx + 8 + ol;
          oE.y = this.thisy + 8 - oF;
          if (this.radcon === 1) {
            oE.image_alpha -= 0.1;
            oE.active = 0;
            if (oE.image_alpha <= 0.1) {
              oE.instance_destroy();
            }
          }
        }
      }
      if (or === 0) {
        this.instance_destroy();
      }
    }
  }
  draw(o7) {}
};
tz(tv, "obj_heartshaper");
tP(tv, "kinds", tw("obj_heartshaper", t4));
tP(tv, "defaultDepth", 0);
tP(tv, "defaultSprite", "spr_heartbullet");
tP(tv, "defaultVisible", false);
var tT = tv;
e({
  33: (o7, o8) => {
    if (o7.btimer >= o7.ratio * 26) {
      let o9 = tl(o8.bsx, o8.bsy, tT);
      o9.maxradius = 50;
      o9.type = 1;
      o7.btimer = 0;
      o9.thisx = o8.bsx - 50 + tG(100);
      o9.thisy = o8.bsy - 50 + tG(100);
      t3(o7, o9);
    }
  }
});
var ty = class oU extends t2 {
  create() {
    this.bikeflip = 0;
    this.becomeflash = 0;
    this.turnt = 0;
    this.turns = 0;
    this.talktimer = 0;
    this.talkmax = 90;
    this.state = 0;
    this.flash = 0;
    this.siner = 0;
    this.fsiner = 0;
    this.talked = 0;
    this.attacked = 0;
    this.hurt = 0;
    this.hurttimer = 0;
    this.hurtshake = 0;
    this.acting = 0;
    this.actcon = 0;
    this.acttimer = 0;
    this.mercymod = 0;
    this.maxmercy = 9999;
    this.warned = 0;
    this.compliment = 0;
    this.tired = 0;
    this.delete_n = 0;
    this.attacks = 0;
    this.dodgetimer = 0;
    this.candodge = 0;
    this.con = 0;
    this.battlecancel = 0;
    this.nexttry = 0;
    this.mytarget = 3;
    this.checkhp1 = ti.hp[1];
    this.checkhp2 = ti.hp[2];
    this.firstturn = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.rtimer = 0;
    this.shakex = 0;
  }
  userEvent(o7) {
    if (o7 === 12) {
      ti.monsterx[this.myself] = this.x + this.sprite_width / 2;
      ti.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (o7 === 10) {
      this.spared();
      return;
    }
  }
  spared() {
    let o7 = tl(this.x, this.y, tp);
    o7.sprite_index = this.sparedsprite;
    o7.image_index = 0;
    o7.image_xscale = this.image_xscale;
    o7.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let o7 = tl(this.x, this.y, tk);
    o7.sprite_index = this.hurtsprite;
    o7.image_index = 0;
    o7.image_xscale = this.image_xscale;
    o7.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  alarmEvent(o7) {
    if (o7 === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let o7 = this.myself;
    if (ti.monster[o7] === 1) {
      if (ti.mnfight === 1 && this.talked === 0) {
        tr(this);
        if (!tb.exists("obj_darkener")) {
          tl(0, 0, ta);
        }
        let o8 = tl(this.x - 100, this.y, te);
        o8.sprite_index = this.blconSprite();
        if (this.acting === 2) {
          o8.sprite_index = "spr_heartblcon_2";
        }
        if (this.acting === 3) {
          o8.sprite_index = "spr_heartblcon_3";
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && ti.mnfight === 1) {
        this.rtimer = 0;
        if (tX() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          tb.with("obj_heartblcon", o9 => o9.instance_destroy());
          ti.mnfight = 2;
        }
        if (ti.mnfight === 2) {
          if (!tb.exists("obj_moveheart")) {
            to();
          }
          if (!tb.exists("obj_growtangle")) {
            tl(320, 170, t9);
          }
        }
      }
      if (ti.mnfight === 2 && this.attacked === 0) {
        tb.with("obj_heartblcon", o9 => o9.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.makeAttack(o7);
          this.turns += 1;
          this.attacked = 1;
          ti.typer = 6;
          ti.fc = 0;
          this.attackMessages(o7);
        } else {
          ti.turntimer = 120;
        }
      }
      if (ti.mnfight === 2 && ti.turntimer <= 1) {
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          ti.mercymod[o7] = 999;
        }
      }
    }
    if (ti.myfight === 3) {
      this.actStep(o7);
    }
    if (ti.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(o7) {
    let o8 = this.myself;
    if (this.state === 3) {
      if (ti.monsterhp[o8] <= ti.monstermaxhp[o8] / 3) {
        ti.monsterstatus[o8] = 1;
        if (ti.monstercomment[o8] === " ") {
          ti.monstercomment[o8] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (ti.monster[o8] === 0) {
          this.onDefeatRun(o8);
          this.scr_defeatrun();
        }
        this.hurtshake += 1;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex -= 1;
          }
          if (this.shakex < 0) {
            this.shakex += 1;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        o7.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let o9 = this.idlesprite;
      if (ti.mercymod[o8] >= ti.mercymax[o8]) {
        o9 = this.sparedsprite;
      }
      o7.draw_sprite_ext(o9, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        o7.draw_sprite_white(o9, this.siner / 5, this.x, this.y, 2, 2, 0, -tE(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
  onDefeatRun(o7) {}
};
tz(ty, "obj_hathyparent");
tP(ty, "kinds", tw("obj_hathyparent", t2));
tP(ty, "defaultDepth", 90);
var th = ty;
var tD = class ow extends th {
  create() {
    super.create();
    this.idlesprite = "spr_heartenemy_idle";
    this.hurtsprite = "spr_heartenemy_hurt";
    this.sparedsprite = "spr_heartenemy_spared";
  }
  blconSprite() {
    return tg("spr_heartblcon_0", "spr_heartblcon_1");
  }
  onDefeatRun(o7) {
    if (ti.flag[51 + o7] === 5) {
      ti.flag[524] += 1;
    }
    ti.flag[521] += 1;
  }
  makeAttack(o7) {
    let o8 = tY();
    ti.turntimer = 140;
    if (o8 === 1) {
      let o9 = tl(this.x, this.y, tR);
      o9.type = 0;
      o9.target = this.mytarget;
      o9.damage = ti.monsterat[o7] * 5;
    } else {
      let oo = tl(this.x, this.y, tT);
      oo.type = 0;
      oo.target = this.mytarget;
      oo.damage = ti.monsterat[o7] * 5;
      if (ti.encounterno === 9) {
        ti.turntimer = 100;
      }
    }
  }
  attackMessages(o7) {
    let o8 = tg(0, 1, 2, 3, 4);
    if (o8 === 0) {
      ti.battlemsg[0] = "* Hathy's body beats audibly.";
    }
    if (o8 === 1) {
      ti.battlemsg[0] = "* Hathy smiled a darling smile.";
    }
    if (o8 === 2) {
      ti.battlemsg[0] = "* Hathy is whispering a lovely spell.";
    }
    if (o8 === 3) {
      ti.battlemsg[0] = "* Hathy has a little secret.";
    }
    if (o8 === 4) {
      ti.battlemsg[0] = "* Smells like a soft kiss.";
    }
    if (ti.monsterstatus[o7] === 1) {
      ti.battlemsg[0] = "* Hathy's beat slows.";
    }
    if (ti.monsterhp[o7] <= ti.monstermaxhp[o7] / 3) {
      ti.battlemsg[0] = "* Hathy's beat seems to stutter.";
    }
    if (ti.mercymod[o7] >= ti.mercymax[o7]) {
      ti.msg[0] = "* Hathy is skipping beats.";
    }
  }
  actStep(o7) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      ti.msg[0] = "* HATHY - AT 7 DF 0&* I am a \\cYlittle kiss\\cW./%";
      t7();
    }
    if (this.acting === 2 && this.actcon === 0) {
      let o8 = tg(0, 1, 2);
      ti.msg[0] = "* You told Hathy it has cool tentacles^1.&* It began to think about this.../%";
      if (o8 === 1) {
        ti.msg[0] = "* You called Hathy a sweetheart^1.&* It began to think about this.../%";
      }
      if (o8 === 2) {
        ti.msg[0] = "* You told Hathy its teeth look like knives^1.&* It began to think about this.../%";
      }
      tB(o7, 100);
      t7();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      ti.msg[0] = "* You ordered Ralsei to flatter all the enemies!/";
      tm(1, 0);
      let o9 = tg(0, 1, 2);
      ti.msg[2] = "* Out of anyone^1, I'm glad we randomly encountered all of you./%";
      if (o9 === 1) {
        ti.msg[2] = "* I'm making tea later..^1.&* Umm^1, would you like any?/%";
      }
      if (o9 === 2) {
        ti.msg[2] = "* We don't need EXP^1.&* Just encountering your smile is reward enough./%";
      }
      tB(0, 100);
      tB(1, 100);
      tB(2, 100);
      this.actcon = 1;
      tQ();
      t7();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      if (ti.plot < 150) {
        ti.msg[0] = "* You and Ralsei warned Hathy about Susie^1.&* The enemy went on guard./%";
        if (tY() > 1) {
          ti.msg[0] = "* You and Ralsei  warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let oo = 0; oo < 3; oo++) {
          ti.monstercomment[oo] = "(Warned)";
          ti.automiss[oo] = 1;
        }
      } else {
        ti.msg[0] = "* You ordered Susie to flatter all the enemies!/";
        tJ(1, 2);
        let oa = tg(0, 1, 2);
        ti.msg[2] = "* Can't believe my bozo teammates.../";
        ti.msg[3] = "\\E0* ... came back here just to see YOU guys./%";
        if (oa === 1) {
          ti.msg[3] = "\\E0* ... wanted to fight someone like YOU so much./%";
        }
        if (oa === 2) {
          ti.msg[3] = "\\E0* ... have a THING for weaklings like you./%";
        }
        tB(0, 100);
        tB(1, 100);
        tB(2, 100);
      }
      tQ();
      t7();
    }
    if (this.actcon === 1 && !tb.exists("obj_writer")) {
      this.actcon = 0;
      t1();
    }
    if (this.actcon === 5 && !tb.exists("obj_writer")) {
      ti.battleat[1] = 90;
      ti.battleat[2] = 90;
      this.actcon = 6;
      tb.with("obj_herosusie", or => {
        or.attacktimer = 0;
        or.state = 1;
        or.points = 100 + tW(tG(40));
        ti.faceaction[or.myself] = 0;
        if (ti.automiss[0] === 1) {
          or.points = 0;
        }
      });
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      ti.msg[0] = "* Where'd you get it^1?&* Heh heh heh heh./";
      tm(1, 3);
      ti.msg[2] = "* (Umm^1, Kris^1, maybe Susie shouldn't ACT anymore...)/%";
      if (ti.automiss[0] === 1) {
        ti.msg[0] = "\\E7* H-hey^1, what gives!?/";
        tm(1, 3);
        ti.msg[2] = "* (Wow^1, that was close^1, Kris...)/";
        ti.msg[3] = "* (Maybe Susie shouldn't ACT anymore...)/%";
      }
      tQ();
      t6();
      this.actcon = 1;
    }
  }
};
tz(tD, "obj_heartenemy");
tP(tD, "kinds", tw("obj_heartenemy", th));
tP(tD, "defaultDepth", 90);
tP(tD, "defaultSprite", "spr_heartenemy_idle");
var tI = tD;
var tx = class og extends th {
  create() {
    super.create();
    this.idlesprite = "spr_hathyx_idle";
    this.hurtsprite = "spr_hathyx_hurt";
    this.sparedsprite = "spr_hathyx_spared";
  }
  blconSprite() {
    return tg("spr_heartblcon_4", "spr_heartblcon_5");
  }
  makeAttack(o7) {
    let o8 = tY();
    ti.turntimer = 180;
    if (o8 === 1) {
      let o9 = tl(this.x, this.y, tR);
      o9.joker = 1;
      o9.type = 0;
      o9.target = this.mytarget;
      o9.damage = ti.monsterat[o7] * 5;
    } else {
      let oo = tl(this.x, this.y, t0);
      oo.type = 33;
      oo.ratio = 1.3 - tb.number("obj_headhathy") / 10;
      oo.target = this.mytarget;
      oo.damage = ti.monsterat[o7] * 5;
      if (tb.number("obj_headhathy") > 1 && tb.number("obj_dbulletcontroller") > 1) {
        oo.instance_destroy();
      }
    }
  }
  attackMessages(o7) {
    let o8 = tg(0, 1, 2, 3, 4);
    if (o8 === 0) {
      ti.battlemsg[0] = "* Head Hathy's body moves silently.";
    }
    if (o8 === 1) {
      ti.battlemsg[0] = "* Head Hathy showed no emotion at all.";
    }
    if (o8 === 2) {
      ti.battlemsg[0] = "* Head Hathy whispered something unhearable.";
    }
    if (o8 === 3) {
      ti.battlemsg[0] = "* Head Hathy's mind is an enigma.";
    }
    if (o8 === 4) {
      ti.battlemsg[0] = "* Smells like a lonely kiss.";
    }
    if (ti.monsterstatus[o7] === 1) {
      ti.battlemsg[0] = "* Head Hathy's beat slows.";
    }
    if (ti.monsterhp[o7] <= ti.monstermaxhp[o7] / 3) {
      ti.battlemsg[0] = "* Head Hathy's beat seems to stutter.";
    }
    if (ti.mercymod[o7] >= ti.mercymax[o7]) {
      ti.msg[0] = "* Head Hathy is skipping beats.";
    }
  }
  actStep(o7) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      ti.msg[0] = "* HEAD HATHY - AT 8 DF 0&* It learned to hide its feelings..^1. is that strength?/%";
      t7();
    }
    if (this.acting === 2 && this.actcon === 0) {
      tg(0, 1, 2);
      ti.msg[0] = "* You flirted with Head Hathy^1.&* It was highly effective./%";
      tB(o7, 100);
      t7();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      tB(o7, 100);
      this.actcon = 1;
      if (ti.flag[504] === 0) {
        ti.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        tJ(1, 0);
        ti.msg[2] = "* .../";
        ti.msg[3] = "\\E1* Annnnnnnnnd hell no./";
        tm(4, 6);
        ti.msg[5] = "* Aww^1, Susie^1, it's OK if you don't know how!/";
        tJ(6, 7);
        ti.msg[7] = "* What^1? Shut up^1, that's not the problem!/";
        tm(8, 6);
        ti.msg[9] = "* ... Are you sure?/";
        tJ(10, 7);
        ti.msg[11] = "* Alright^1, LOOK^1, wise guy! I'll show you! Watch this!/";
        ti.msg[12] = "\\E0* AHEM./%";
        this.actcon = 20;
        this.acttimer = 0;
      }
      if (ti.flag[504] === 1) {
        ti.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        tJ(1, 2);
        ti.msg[2] = "* Hell nah^1. Let's see Ralsei do it./";
        tm(3, 1);
        ti.msg[4] = "* I suppose if it can't be helped...!/";
        ti.msg[5] = "\\E0* Hathy^1, your beauty is just... transcendent./";
        ti.msg[6] = "\\E8* Your hair is like a waterfall of.../";
        ti.msg[7] = "\\E1* ... wait^1, um^1, do you have hair^1, or.../%";
        this.actcon = 22;
      }
      if (ti.flag[504] === 2) {
        ti.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        tJ(1, 7);
        ti.msg[2] = "* Oh my god^1, Kris!!^1! I can't!^1! Do it yourself!!/%";
        this.actcon = 25;
      }
      if (ti.flag[504] >= 3) {
        ti.msg[0] = "* You flirted with the enemies^1. It worked^1! (Susie did not help.)/%";
        tB(0, 100);
        tB(1, 100);
        tB(2, 100);
      }
      ti.flag[504] += 1;
      tQ();
      t7();
    }
    if (this.actcon === 1 && !tb.exists("obj_writer")) {
      this.actcon = 0;
      t1();
      if (this.delete_n === 1) {
        this.instance_destroy();
      }
    }
    if (this.actcon === 20 && !tb.exists("obj_writer")) {
      this.acttimer += 1;
      if (this.acttimer >= 60) {
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      ti.fe = 2;
      ti.msg[0] = "* So^1, uh.../";
      ti.msg[1] = "* Come here..^1. often?/%";
      t6();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !tb.exists("obj_writer")) {
      this.hspeed = 6;
      ti.msg[0] = "* (Head Hathy felt awkward and left...)/";
      tJ(1, 7);
      ti.msg[2] = "* HEY^1, GET BACK HERE AND LET ME FLIRT WITH YOU!!!/%";
      if (ti.flag[504] === 2) {
        ti.msg[0] = "* (Head Hathy felt awkward and left...)/";
        tm(1, 3);
        ti.msg[2] = "* Oh^1, oh dear^1! Wait!!/";
        tJ(3, 2);
        ti.msg[4] = "* Not so easy^1, huh!?/%";
      }
      tQ();
      t7();
      this.delete_n = 1;
      this.actcon = 23;
      ti.monster[o7] = 0;
    }
    if (this.actcon === 23 && this.x >= 640) {
      this.actcon = 1;
    }
    if (this.actcon === 25 && !tb.exists("obj_writer")) {
      ti.msg[0] = "* You said some sweet lines. The enemies were deeply enamored!/%";
      t7();
      tB(0, 100);
      tB(1, 100);
      tB(2, 100);
      this.actcon = 1;
    }
  }
};
tz(tx, "obj_headhathy");
tP(tx, "kinds", tw("obj_headhathy", th));
tP(tx, "defaultDepth", 90);
tP(tx, "defaultSprite", "spr_hathyx_idle");
var tS = tx;
var tL = tz((o7, o8) => {
  ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FL \\TL %";
}, "scr_lanface");
var o0 = class oW extends tU {
  create() {
    this.con = 0;
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.x = 700;
    this.y = 220;
  }
  alarmEvent(o7) {
    if (o7 === 4) {
      this.con++;
    }
  }
  step() {
    let o7 = tb.first("obj_battlecontroller");
    if (o7 && o7.victoried === 1 && this.con < 30) {
      this.con = 30;
      o7.victoried = 2;
      if (o7.lastbattlewriter && !o7.lastbattlewriter.destroyed) {
        o7.lastbattlewriter.instance_destroy();
      }
    }
    if (this.con === 15) {
      this.depth = 0;
      this.x = 640;
      this.hspeed = -20;
      this.con = 16;
      this.alarm[4] = 15;
    }
    if (this.con === 17) {
      this.hspeed = 0;
      ti.fc = 5;
      ti.fe = 0;
      ti.typer = 46;
      ti.msg = new Array(100).fill(" ");
      ti.msg[0] = "* Hey, why aren't you guys thrashed?! You're totally outnumbered!/";
      tm(1, "B");
      ti.msg[2] = "* You made a team purely of SUPPORT ENEMIES./";
      ti.msg[3] = "* Their bullet patterns aren't balanced at all./";
      ti.msg[4] = "\\E1* It's like a dinner made out of three glasses of milk./";
      tL(5, 0);
      ti.msg[6] = "* .../";
      ti.msg[7] = "\\E7* And that's, um..^1.&* Unusual, somehow?/";
      tm(8, 8);
      ti.msg[9] = "* Why don't we talk about this AFTER the battle?/%";
      t6();
      this.con = 18;
    }
    if (this.con === 18 && !tb.exists("obj_writer")) {
      ti.fc = 0;
      this.hspeed = 20;
      this.con = 19;
      if (o7) {
        o7.alarm[2] = 21;
      }
      this.alarm[4] = 20;
    }
    if (this.con === 20) {
      if (o7) {
        o7.noreturn = 0;
      }
      this.con = 21;
    }
    if (this.con === 30) {
      ti.fc = 2;
      ti.fe = 8;
      ti.typer = 45;
      ti.msg = new Array(100).fill(" ");
      ti.msg[0] = "* Great job, Kris!&* We earned " + ti.monsterexp[3] + " EXP&and " + ti.monstergold[3] + " D$!/%";
      t6();
      this.con = 31;
    }
    if (this.con === 31 && !tb.exists("obj_writer")) {
      this.depth = 0;
      this.x = 640;
      this.hspeed = -20;
      this.con = 32;
      this.alarm[4] = 15;
    }
    if (this.con === 33) {
      this.hspeed = 0;
      ti.fc = 5;
      ti.fe = 2;
      ti.typer = 46;
      ti.msg = new Array(100).fill(" ");
      ti.msg[0] = "* Sweet!&* How much do I get?/";
      tm(1, "B");
      ti.msg[2] = "* You..^1. lost^1, Lancer^1.&* You don't get any./";
      tL(3, 4);
      ti.msg[4] = "* Oh./";
      ti.msg[5] = "\\E3* Can I have some of yours?/";
      tm(6, "A");
      ti.msg[7] = "* No!/";
      tL(8, 1);
      ti.msg[9] = "* Fine^1!&* Later, losers!/%";
      t6();
      this.con = 34;
    }
    if (this.con === 34 && !tb.exists("obj_writer")) {
      ti.fc = 0;
      this.hspeed = 20;
      this.con = 35;
      this.alarm[4] = 20;
    }
    if (this.con === 36) {
      if (o7) {
        o7.victoried = 1;
      }
      this.con = 37;
    }
  }
};
tz(o0, "obj_hathyfightevent");
tP(o0, "kinds", tw("obj_hathyfightevent", tU));
tP(o0, "defaultDepth", 0);
tP(o0, "defaultSprite", "spr_lancer_lt");
var o1 = o0;
var o2 = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle"
};
var o3 = tz((o7, o8) => ({
  cls: tI,
  type: 6,
  x: o7,
  y: o8,
  setup: tV
}), "H");
var o4 = tz((o7, o8) => ({
  cls: tS,
  type: 23,
  x: o7,
  y: o8,
  setup: ts
}), "HH");
var o5 = tz((o7, o8, o9, oo) => ({
  cls: null,
  type: 0,
  x: o9,
  y: oo,
  setup: () => {},
  missing: o7,
  missingType: o8
}), "MISSING");
var o6 = [{
  id: "hathy-rudinn",
  name: "Rudinn & Hathy",
  ...o2,
  area: "Field",
  desc: "Rudinn and Hathy.#(Rudinn is in its#own module.)",
  encounterno: 6,
  battlemsg: "* Rudinn and Hathy blocked the way!",
  monsters: [o5("obj_diamondenemy", 5, 480, 110), o3(500, 200)]
}, {
  id: "hathy3",
  name: "Hathy x3",
  ...o2,
  area: "Field",
  desc: "Three Hathys.#Rings of hearts.",
  encounterno: 9,
  battlemsg: "* Three Hathys blocked the way!",
  monsters: [o3(480, 20), o3(500, 120), o3(460, 220)]
}, {
  id: "hathy-clover",
  name: "Clover & Hathy",
  ...o2,
  area: "Field",
  desc: "Clover and Hathy.#(Clover is in its#own module.)",
  encounterno: 15,
  battlemsg: "* Clover and Hathy grew close!",
  monsters: [o5("obj_clubsenemy", 7, 400, 30), o3(420, 200)]
}, {
  id: "hathy-smorgasboard",
  name: "Smorgasboard",
  ...o2,
  area: "Field",
  desc: "Jigsawry, Rudinn#and Hathy.",
  encounterno: 23,
  battlemsg: "* Smorgasboard.",
  monsters: [o5("obj_jigsawryenemy", 15, 480, 20), o5("obj_diamondenemy", 5, 500, 120), o3(460, 220)]
}, {
  id: "headhathy2",
  name: "Head Hathy x2",
  ...o2,
  area: "Card Castle",
  desc: "Two Head Hathys.#Shrinking heart rings.",
  encounterno: 29,
  battlemsg: "* Head Hathy blocked the way quietly!",
  monsters: [o4(480, 110), o4(500, 200)]
}, {
  id: "headhathy3",
  name: "Head Hathy x3",
  ...o2,
  area: "Card Castle",
  desc: "Three Head Hathys.#Shrinking heart rings.",
  encounterno: 30,
  battlemsg: "* Head Hathy blocked the way quietly! (x3)",
  monsters: [o4(480, 20), o4(500, 120), o4(460, 220)]
}, {
  id: "hathy-various",
  name: "Various guys",
  ...o2,
  area: "Field",
  desc: "Rudinn, Hathy#and Rudinn.",
  encounterno: 33,
  battlemsg: "* Various guys appeared!",
  monsters: [o5("obj_diamondenemy", 5, 480, 20), o3(500, 120), o5("obj_diamondenemy", 5, 460, 220)]
}];
tO(th, "G.mnfight = 2;");
export { tN as a, tq as b, tV as c, td as d, ts as e, te as f, tp as g, tk as h, tR as i, tT as j, tI as k, tS as l, o1 as m, o6 as n, tK as o };
