import { b as e, c as t0 } from './c-O567UJ4Y.js';
import { G as t1, s as t2 } from './c-QFDZPUX2.js';
import { a as t3, c as t4, g as t5 } from './c-DTW63MWW.js';
import { f as t6, g as t7 } from './c-3ELH3LBH.js';
import { a as t8, f as t9, n as to, p as ta } from './c-MYK6C3LF.js';
import { H as tY, M as tB, Q as tr, g as ti, n as tA } from './c-ZQQWH6UG.js';
import { B as tf, C as tE, Ib as tl, Ra as tF, Ta as tC, na as tX, o as tG, pb as tU, qb as tw, r as tg, x as tW, xb as tb } from './c-PBMEVLU6.js';
import { a as tz, c as tZ, e as tP, g as tO, l as tj } from './c-XSSGDLV7.js';
var tK = {};
tZ(tK, {
  'FIGHTS': () => o6,
  'SOUNDS': () => tq,
  'SPRITES': () => tN,
  'obj_defeatanim': () => tk,
  'obj_hathyfightevent': () => o1,
  'obj_headhathy': () => tS,
  'obj_heartblcon': () => te,
  'obj_heartenemy': () => tI,
  'obj_heartshaper': () => tT,
  'obj_spareanim': () => tp,
  'obj_spinheart': () => tR,
  'setupHathyStats': () => td,
  'setupHeadHathyStats': () => ts,
  'setupStats': () => tV
}), tj();
var tN = ['spr_heartenemy_idle', 'spr_heartenemy_hurt', 'spr_heartenemy_spared', 'spr_hathyx_idle', 'spr_hathyx_hurt', 'spr_hathyx_spared', 'spr_heartblcon_0', 'spr_heartblcon_1', 'spr_heartblcon_2', 'spr_heartblcon_3', 'spr_heartblcon_4', 'spr_heartblcon_5', 'spr_battleblcon', 'spr_spinheart', 'spr_spinheartmask', 'spr_heartbullet', 'spr_sparestar_anim', 'spr_defeatsweat'],
  tq = ['snd_spare', 'snd_defeatrun'];
function tV(o7) {
  ti.monstername[o7] = 'Hathy', ti.monstermaxhp[o7] = 0x96, ti.monsterhp[o7] = 0x96, ti.monsterat[o7] = 0x6, ti.monsterdf[o7] = 0x0, ti.monsterexp[o7] = 0x0, ti.monstergold[o7] = 0x1c, ti.sparepoint[o7] = 0xa, ti.mercymod[o7] = 0x0, ti.mercymax[o7] = 0x64, ti.canact[o7][0x0] = 0x1, ti.actname[o7][0x0] = 'Check', ti.canact[o7][0x1] = 0x1, ti.actname[o7][0x1] = 'Flatter', ti.canact[o7][0x2] = 0x1, ti.actname[o7][0x2] = "X-Flatter", ti.actactor[o7][0x2] = 0x3, ti.encounterno === 0x7 && (ti.actactor[o7][0x2] = 0x2, ti.plot < 0x28 && (ti.plot = 0x28)), tA(0x2) && ti.plot < 0x96 && (ti.canact[o7][0x3] = 0x1, ti.actname[o7][0x3] = 'Warning', ti.actactor[o7][0x3] = 0x3), tA(0x2) && ti.plot >= 0x96 && (ti.canact[o7][0x3] = 0x1, ti.actname[o7][0x3] = "S-Flatter", ti.actactor[o7][0x3] = 0x2);
}
tz(tV, 'setupStats');
var td = tV;
function ts(o7) {
  ti.monstername[o7] = "Head Hathy", ti.monstermaxhp[o7] = 0xbe, ti.monsterhp[o7] = 0xbe, ti.monsterat[o7] = 0x8, ti.monsterdf[o7] = 0x0, ti.monsterexp[o7] = 0x0, ti.monstergold[o7] = 0x28, ti.sparepoint[o7] = 0xa, ti.mercymod[o7] = 0x0, ti.mercymax[o7] = 0x64, ti.canact[o7][0x0] = 0x1, ti.actname[o7][0x0] = 'Check', ti.canact[o7][0x1] = 0x1, ti.actname[o7][0x1] = 'Flirt', ti.canact[o7][0x2] = 0x1, ti.actname[o7][0x2] = "X-Flirt", ti.actactor[o7][0x2] = 0x2;
}
tz(ts, 'setupHeadHathyStats');
function tm(o7, o8) {
  ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FR \\TR %";
}
tz(tm, 'scr_ralface');
function tJ(o7, o8) {
  ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FS \\TS %";
}
tz(tJ, 'scr_susface');
var tM = /^\\TX \\F0 \\E(\w) \\F[RS] \\T[RS] %$/;
function tQ() {
  let o7 = [],
    o8 = '';
  for (let o9 = 0x0; o9 < ti.msg.length; o9++) {
    let oo = ti.msg[o9];
    if (typeof oo != 'string') {
      o7.push(oo);
      continue;
    }
    let oa = tM.exec(oo);
    if (oa) {
      o8 = '\x5cE' + oa[0x1];
      continue;
    }
    o7.push(o8 + oo), o8 = '';
  }
  for (; o7.length < 0x64;) o7.push('\x20');
  ti.msg = o7;
}
tz(tQ, 'foldFaceLines');
var tn = class oY extends tU {
  ["create"]() {
    this.image_speed = 0.2, this.siner = 0x0;
  }
  ["draw"](o7) {
    this.siner += 0x1, o7.draw_sprite('spr_battleblcon', 0x0, this.x, this.y), o7.draw_sprite(this.sprite_index, this.image_index, this.x + 0xf + tW(tf(this.siner / 0x8)), this.y + 0xf + tW(tE(this.siner / 0x8)));
  }
};
tz(tn, 'obj_heartblcon'), tP(tn, 'kinds', tw('obj_heartblcon', tU)), tP(tn, 'defaultDepth', 0x0), tP(tn, 'defaultSprite', 'spr_heartblcon_0');
var te = tn,
  tu = class oB extends tU {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], tC('snd_spare'), tF('snd_spare');
    }
    ["draw"](o7) {
      let o8 = this.sprite_index,
        o9 = this.image_index,
        oo = this.image_xscale,
        oa = this.image_yscale;
      if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, o7.draw_sprite_white(o8, o9, this.x + this.afterimage * 0x4, this.y, oo, oa, 0x0, 0.7 - this.afterimage / 0x19), o7.draw_sprite_white(o8, o9, this.x + this.afterimage * 0x8, this.y, oo, oa, 0x0, 0.4 - this.afterimage / 0x1e)), this.t < 0x6) {
        this.t < 0x5 && o7.draw_sprite_ext(o8, o9, this.x, this.y, oo, oa, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
        let or = this.t / 0x5;
        or > 0x1 && (or = 0x1), o7.draw_sprite_white(o8, o9, this.x, this.y, oo, oa, 0x0, or - this.tone / 0x5);
      }
      if (this.t >= 0x1 && this.t <= 0x5) for (let oi = 0x0; oi < 0x2; oi++) {
        let oA = tl(this.x + tG(this.sprite_width), this.y + tG(this.sprite_height), t8);
        oA.image_xscale = 0x2, oA.image_yscale = 0x2, oA.sprite_index = 'spr_sparestar_anim', oA.image_alpha = 0x2, oA.image_speed = 0.25, oA.hspeed = -0x3, oA.gravity = 0.5, oA.gravity_direction = 0x0, this.star[this.starcount] = oA, this.starcount += 0x1;
      }
      if (this.t >= 0x5 && this.t <= 0x1e) for (let of = 0x0; of < this.starcount; of++) {
        let oE = this.star[of];
        oE && !oE.destroyed && (oE.image_angle += 0xa, oE.image_alpha -= 0.1, oE.image_alpha <= 0x0 && oE.instance_destroy());
      }
      if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
        for (let ol = 0x0; ol < this.starcount; ol++) {
          let oF = this.star[ol];
          oF && !oF.destroyed && oF.instance_destroy();
        }
        this.instance_destroy();
      }
      this.t += 0x1;
    }
  };
tz(tu, 'obj_spareanim'), tP(tu, 'kinds', tw('obj_spareanim', tU)), tP(tu, 'defaultDepth', 0x0);
var tp = tu,
  tc = class oC extends tU {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, tF('snd_defeatrun');
    }
    ["step"]() {
      this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
    }
    ["draw"](o7) {
      this.t === 0x0 && this.draw_self(o7);
      let o8 = 0x0;
      if (this.g <= 0x5 && (o8 = 0x1), this.g >= 0x9 && this.g <= 0xd && (o8 = 0x1), o8 === 0x1 && o7.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (let o9 = 0x0; o9 <= 0x50; o9++) o7.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * o9, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.4 - this.t / 0x8 + o9 / 0xc8);
        this.t >= 0xf && this.instance_destroy();
      }
    }
  };
tz(tc, 'obj_defeatanim'), tP(tc, 'kinds', tw('obj_defeatanim', tU)), tP(tc, 'defaultDepth', 0x0);
var tk = tc,
  tH = class oX extends t5 {
    ["create"]() {
      let o7 = tb.first('obj_heart');
      this.con = 0x0, this.htimer = 0x0, this.image_xscale = 0x4, this.image_yscale = 0x4, this.active = 0x0, this.image_alpha = 0x0, this.x = (o7 ? o7.x : 0x138) + 0x8, this.y = (o7 ? o7.y : 0xa2) + 0x8, this.image_angle = -0x5a, this.joker = 0x0, this.damage = 0x64, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x0, this.inv = 0x3c, this.grazetimer = 0x0;
    }
    ["step"]() {
      this.con === 0x4 && (this.htimer += 0x1, this.htimer >= 0xa && (this.friction = 0x0, this.speed = 0x0), this.htimer >= 0x14 && (this.active = 0x0, this.image_alpha -= 0.2), this.htimer >= 0x19 && ti.turntimer >= 0x0 && (ti.turntimer = -0x2)), this.con === 0x3 && (this.htimer += 0x1, this.htimer >= this.hmax && (this.direction = this.image_angle, this.speed = 2.5, this.friction = -0.5, this.joker === 0x1 && (this.speed = 0x5), this.con = 0x4, this.htimer = 0x0)), this.con === 0x2 && (this.htimer += 0x1, this.image_angle += 0x18, this.htimer >= this.spinmax && (this.hmax = 0x13, this.joker === 0x1 && (this.hmax = 0xf), this.image_angle = 0x10e + this.spinmax * 0x18, this.con = 0x3, this.htimer = 0x0)), this.con === 0x1 && (this.htimer += 0x1, this.htimer >= 0xa && (this.spinmax = tg(26.25, 0x1e, 33.75, 37.5), this.joker === 0x1 && (this.spinmax = 0xf + tG(0xf)), this.con = 0x2, this.htimer = 0x0)), this.con === 0x0 && (this.image_alpha += 0.2, this.image_xscale -= 0.2, this.image_yscale -= 0.2, this.htimer += 0x1, this.htimer >= 0x5 && (this.con = 0x1, this.htimer = 0x0, this.active = 0x1)), this.grazed === 0x1 && (this.grazetimer += 0x1), this.grazetimer >= 0xf && (this.grazetimer = 0x0, this.grazed = 0x0);
    }
  };
tz(tH, 'obj_spinheart'), tP(tH, 'kinds', tw('obj_spinheart', t5)), tP(tH, 'defaultDepth', 0x0), tP(tH, 'defaultSprite', 'spr_spinheart'), tP(tH, 'defaultMask', 'spr_spinheartmask');
var tR = tH,
  tv = class oG extends t4 {
    ["create"]() {
      let o7 = tb.first('obj_heart');
      this.siner = 0x0, this.radius = 0xa0, this.dir = 0x0, this.norot = 0x0, this.actual = 0x1, this.thisx = o7 ? o7.x : 0x138, this.thisy = o7 ? o7.y : 0xa2, this.made = 0x0, this.damage = 0x64, this.active = 0x1, this.type = 0x0, this.maxradius = 0x50, this.movespeed = 0.5, this.radcon = 0x0, this.bul = [];
    }
    ["step"]() {
      if (this.actual === 0x0 && (this.siner += 0x1, this.dir += 0x2, this.xdir = this.dir + 0xb4, this.norot === 0x1)) {
        let o7 = tb.first('obj_heart');
        for (let o8 = 0x0; o8 < 0x14; o8++) {
          let o9 = o8 * 0x2 * Math.PI / 0x14 + this.siner / 0x3c,
            oo = 0x10 * (tf(o9) * tf(o9) * tf(o9)),
            oa = 0xd * tE(o9) - 0x5 * tE(0x2 * o9) - 0x2 * tE(0x3 * o9) - tE(0x4 * o9);
          this.xxx = (o7 ? o7.x : 0x138) + 0x8 + oo * this.radius, this.yyy = (o7 ? o7.y : 0xa2) + 0x8 - oa * this.radius;
        }
      }
      if (this.actual === 0x1) {
        if (this.made === 0x0) {
          for (let oi = 0x0; oi < 0x10; oi++) {
            let oA = tl(-0x14, -0x14, t5);
            oA.damage = this.damage, oA.grazepoints = 0x2, oA.timepoints = 0x1, oA.depth = 0x0, oA.image_alpha = 0x0, oA.sprite_index = 'spr_heartbullet', this.bul[oi] = oA;
          }
          this.made = 0x1;
        }
        this.type === 0x0 && (this.radius > this.maxradius ? this.radius -= 0x5 : this.radius += tf(this.siner / 0xa) / 0x2), this.type === 0x1 && (this.radius > this.maxradius && this.radcon === 0x0 ? this.radius -= 0x4 : (this.radcon = 0x1, this.radius += 0x8, this.active = 0x0, this.image_alpha -= 0.1)), this.dir += 0x2, this.siner += 1.5;
        let or = 0x0;
        for (let of = 0x0; of < 0x10; of++) {
          let oE = this.bul[of];
          if (oE && !oE.destroyed) {
            or += 0x1, this.radcon === 0x0 && oE.image_alpha < 0x1 && (oE.image_alpha += 0.1);
            let ol = tf(Math.PI * of / 0x8 + this.siner / 0x14) * this.radius,
              oF = tE(Math.PI * of / 0x8 + this.siner / 0x14) * this.radius;
            oE.x = this.thisx + 0x8 + ol, oE.y = this.thisy + 0x8 - oF, this.radcon === 0x1 && (oE.image_alpha -= 0.1, oE.active = 0x0, oE.image_alpha <= 0.1 && oE.instance_destroy());
          }
        }
        or === 0x0 && this.instance_destroy();
      }
    }
    ["draw"](o7) {}
  };
tz(tv, 'obj_heartshaper'), tP(tv, 'kinds', tw('obj_heartshaper', t4)), tP(tv, 'defaultDepth', 0x0), tP(tv, 'defaultSprite', 'spr_heartbullet'), tP(tv, 'defaultVisible', false);
var tT = tv;
e({
  0x21: (o7, o8) => {
    if (o7.btimer >= 0x1a * o7.ratio) {
      let o9 = tl(o8.bsx, o8.bsy, tT);
      o9.maxradius = 0x32, o9.type = 0x1, o7.btimer = 0x0, o9.thisx = o8.bsx - 0x32 + tG(0x64), o9.thisy = o8.bsy - 0x32 + tG(0x64), t3(o7, o9);
    }
  }
});
var ty = class oU extends t2 {
  ["create"]() {
    this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.delete_n = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.checkhp1 = ti.hp[0x1], this.checkhp2 = ti.hp[0x2], this.firstturn = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.rtimer = 0x0, this.shakex = 0x0;
  }
  ["userEvent"](o7) {
    if (o7 === 0xc) {
      ti.monsterx[this.myself] = this.x + this.sprite_width / 0x2, ti.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    if (o7 === 0xa) {
      this.spared();
      return;
    }
  }
  ["spared"]() {
    let o7 = tl(this.x, this.y, tp);
    o7.sprite_index = this.sparedsprite, o7.image_index = 0x0, o7.image_xscale = this.image_xscale, o7.image_yscale = this.image_yscale, this.scr_monsterdefeat(), this.instance_destroy();
  }
  ["scr_defeatrun"]() {
    let o7 = tl(this.x, this.y, tk);
    o7.sprite_index = this.hurtsprite, o7.image_index = 0x0, o7.image_xscale = this.image_xscale, o7.image_yscale = this.image_yscale, this.instance_destroy();
  }
  ["alarmEvent"](o7) {
    o7 === 0x4 && (this.actcon += 0x1);
  }
  ["step"]() {
    let o7 = this.myself;
    if (ti.monster[o7] === 0x1) {
      if (ti.mnfight === 0x1 && this.talked === 0x0) {
        tr(this), tb.exists('obj_darkener') || tl(0x0, 0x0, ta);
        let o8 = tl(this.x - 0x64, this.y, te);
        o8.sprite_index = this.blconSprite(), this.acting === 0x2 && (o8.sprite_index = 'spr_heartblcon_2'), this.acting === 0x3 && (o8.sprite_index = 'spr_heartblcon_3'), this.talked = 0x1, this.talktimer = 0x0;
      }
      this.talked === 0x1 && ti.mnfight === 0x1 && (this.rtimer = 0x0, tX() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (tb.with('obj_heartblcon', o9 => o9.instance_destroy()), ti.mnfight = 0x2), ti.mnfight === 0x2 && (tb.exists('obj_moveheart') || to(), tb.exists('obj_growtangle') || tl(0x140, 0xaa, t9))), ti.mnfight === 0x2 && this.attacked === 0x0 && (tb.with('obj_heartblcon', o9 => o9.instance_destroy()), this.rtimer += 0x1, this.rtimer === 0xc ? (this.makeAttack(o7), this.turns += 0x1, this.attacked = 0x1, ti.typer = 0x6, ti.fc = 0x0, this.attackMessages(o7)) : ti.turntimer = 0x78), ti.mnfight === 0x2 && ti.turntimer <= 0x1 && (this.firstturn = 0x1, this.battlecancel === 0x1 && (ti.mercymod[o7] = 0x3e7));
    }
    ti.myfight === 0x3 && this.actStep(o7), ti.myfight === 0x7 && (this.hspeed = 0xf);
  }
  ["draw"](o7) {
    let o8 = this.myself;
    if (this.state === 0x3 && (ti.monsterhp[o8] <= ti.monstermaxhp[o8] / 0x3 && (ti.monsterstatus[o8] = 0x1, ti.monstercomment[o8] === '\x20' && (ti.monstercomment[o8] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (ti.monster[o8] === 0x0 && (this.onDefeatRun(o8), this.scr_defeatrun()), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), o7.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0) {
      this.siner += 0x1;
      let o9 = this.idlesprite;
      ti.mercymod[o8] >= ti.mercymax[o8] && (o9 = this.sparedsprite), o7.draw_sprite_ext(o9, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, o7.draw_sprite_white(o9, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, -tE(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
  ["onDefeatRun"](o7) {}
};
tz(ty, 'obj_hathyparent'), tP(ty, 'kinds', tw('obj_hathyparent', t2)), tP(ty, 'defaultDepth', 0x5a);
var th = ty,
  tD = class ow extends th {
    ["create"]() {
      super.create(), this.idlesprite = 'spr_heartenemy_idle', this.hurtsprite = 'spr_heartenemy_hurt', this.sparedsprite = 'spr_heartenemy_spared';
    }
    ["blconSprite"]() {
      return tg('spr_heartblcon_0', 'spr_heartblcon_1');
    }
    ["onDefeatRun"](o7) {
      ti.flag[0x33 + o7] === 0x5 && (ti.flag[0x20c] += 0x1), ti.flag[0x209] += 0x1;
    }
    ["makeAttack"](o7) {
      let o8 = tY();
      if (ti.turntimer = 0x8c, o8 === 0x1) {
        let o9 = tl(this.x, this.y, tR);
        o9.type = 0x0, o9.target = this.mytarget, o9.damage = ti.monsterat[o7] * 0x5;
      } else {
        let oo = tl(this.x, this.y, tT);
        oo.type = 0x0, oo.target = this.mytarget, oo.damage = ti.monsterat[o7] * 0x5, ti.encounterno === 0x9 && (ti.turntimer = 0x64);
      }
    }
    ["attackMessages"](o7) {
      let o8 = tg(0x0, 0x1, 0x2, 0x3, 0x4);
      o8 === 0x0 && (ti.battlemsg[0x0] = "* Hathy's body beats audibly."), o8 === 0x1 && (ti.battlemsg[0x0] = "* Hathy smiled a darling smile."), o8 === 0x2 && (ti.battlemsg[0x0] = "* Hathy is whispering a lovely spell."), o8 === 0x3 && (ti.battlemsg[0x0] = "* Hathy has a little secret."), o8 === 0x4 && (ti.battlemsg[0x0] = "* Smells like a soft kiss."), ti.monsterstatus[o7] === 0x1 && (ti.battlemsg[0x0] = "* Hathy's beat slows."), ti.monsterhp[o7] <= ti.monstermaxhp[o7] / 0x3 && (ti.battlemsg[0x0] = "* Hathy's beat seems to stutter."), ti.mercymod[o7] >= ti.mercymax[o7] && (ti.msg[0x0] = "* Hathy is skipping beats.");
    }
    ["actStep"](o7) {
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, ti.msg[0x0] = "* HATHY - AT 7 DF 0&* I am a \\cYlittle kiss\\cW./%", t7()), this.acting === 0x2 && this.actcon === 0x0) {
        let o8 = tg(0x0, 0x1, 0x2);
        ti.msg[0x0] = "* You told Hathy it has cool tentacles^1.&* It began to think about this.../%", o8 === 0x1 && (ti.msg[0x0] = "* You called Hathy a sweetheart^1.&* It began to think about this.../%"), o8 === 0x2 && (ti.msg[0x0] = "* You told Hathy its teeth look like knives^1.&* It began to think about this.../%"), tB(o7, 0x64), t7(), this.battlecancel = 0x1, this.actcon = 0x1;
      }
      if (this.acting === 0x3 && this.actcon === 0x0) {
        ti.msg[0x0] = "* You ordered Ralsei to flatter all the enemies!/", tm(0x1, 0x0);
        let o9 = tg(0x0, 0x1, 0x2);
        ti.msg[0x2] = "* Out of anyone^1, I'm glad we randomly encountered all of you./%", o9 === 0x1 && (ti.msg[0x2] = "* I'm making tea later..^1.&* Umm^1, would you like any?/%"), o9 === 0x2 && (ti.msg[0x2] = "* We don't need EXP^1.&* Just encountering your smile is reward enough./%"), tB(0x0, 0x64), tB(0x1, 0x64), tB(0x2, 0x64), this.actcon = 0x1, tQ(), t7();
      }
      if (this.acting === 0x4 && this.actcon === 0x0) {
        if (this.actcon = 0x1, ti.plot < 0x96) {
          ti.msg[0x0] = "* You and Ralsei warned Hathy about Susie^1.&* The enemy went on guard./%", tY() > 0x1 && (ti.msg[0x0] = "* You and Ralsei  warned the enemies about Susie^1.&* Everyone went on guard./%");
          for (let oo = 0x0; oo < 0x3; oo++) ti.monstercomment[oo] = "(Warned)", ti.automiss[oo] = 0x1;
        } else {
          ti.msg[0x0] = "* You ordered Susie to flatter all the enemies!/", tJ(0x1, 0x2);
          let oa = tg(0x0, 0x1, 0x2);
          ti.msg[0x2] = "* Can't believe my bozo teammates.../", ti.msg[0x3] = "\\E0* ... came back here just to see YOU guys./%", oa === 0x1 && (ti.msg[0x3] = "\\E0* ... wanted to fight someone like YOU so much./%"), oa === 0x2 && (ti.msg[0x3] = "\\E0* ... have a THING for weaklings like you./%"), tB(0x0, 0x64), tB(0x1, 0x64), tB(0x2, 0x64);
        }
        tQ(), t7();
      }
      this.actcon === 0x1 && !tb.exists('obj_writer') && (this.actcon = 0x0, t1()), this.actcon === 0x5 && !tb.exists('obj_writer') && (ti.battleat[0x1] = 0x5a, ti.battleat[0x2] = 0x5a, this.actcon = 0x6, tb.with('obj_herosusie', or => {
        or.attacktimer = 0x0, or.state = 0x1, or.points = 0x64 + tW(tG(0x28)), ti.faceaction[or.myself] = 0x0, ti.automiss[0x0] === 0x1 && (or.points = 0x0);
      }), this.alarm[0x4] = 0x32), this.actcon === 0x7 && (ti.msg[0x0] = "* Where'd you get it^1?&* Heh heh heh heh./", tm(0x1, 0x3), ti.msg[0x2] = "* (Umm^1, Kris^1, maybe Susie shouldn't ACT anymore...)/%", ti.automiss[0x0] === 0x1 && (ti.msg[0x0] = "\\E7* H-hey^1, what gives!?/", tm(0x1, 0x3), ti.msg[0x2] = "* (Wow^1, that was close^1, Kris...)/", ti.msg[0x3] = "* (Maybe Susie shouldn't ACT anymore...)/%"), tQ(), t6(), this.actcon = 0x1);
    }
  };
tz(tD, 'obj_heartenemy'), tP(tD, 'kinds', tw('obj_heartenemy', th)), tP(tD, 'defaultDepth', 0x5a), tP(tD, 'defaultSprite', 'spr_heartenemy_idle');
var tI = tD,
  tx = class og extends th {
    ["create"]() {
      super.create(), this.idlesprite = 'spr_hathyx_idle', this.hurtsprite = 'spr_hathyx_hurt', this.sparedsprite = 'spr_hathyx_spared';
    }
    ["blconSprite"]() {
      return tg('spr_heartblcon_4', 'spr_heartblcon_5');
    }
    ["makeAttack"](o7) {
      let o8 = tY();
      if (ti.turntimer = 0xb4, o8 === 0x1) {
        let o9 = tl(this.x, this.y, tR);
        o9.joker = 0x1, o9.type = 0x0, o9.target = this.mytarget, o9.damage = ti.monsterat[o7] * 0x5;
      } else {
        let oo = tl(this.x, this.y, t0);
        oo.type = 0x21, oo.ratio = 1.3 - tb.number('obj_headhathy') / 0xa, oo.target = this.mytarget, oo.damage = ti.monsterat[o7] * 0x5, tb.number('obj_headhathy') > 0x1 && tb.number('obj_dbulletcontroller') > 0x1 && oo.instance_destroy();
      }
    }
    ["attackMessages"](o7) {
      let o8 = tg(0x0, 0x1, 0x2, 0x3, 0x4);
      o8 === 0x0 && (ti.battlemsg[0x0] = "* Head Hathy's body moves silently."), o8 === 0x1 && (ti.battlemsg[0x0] = "* Head Hathy showed no emotion at all."), o8 === 0x2 && (ti.battlemsg[0x0] = "* Head Hathy whispered something unhearable."), o8 === 0x3 && (ti.battlemsg[0x0] = "* Head Hathy's mind is an enigma."), o8 === 0x4 && (ti.battlemsg[0x0] = "* Smells like a lonely kiss."), ti.monsterstatus[o7] === 0x1 && (ti.battlemsg[0x0] = "* Head Hathy's beat slows."), ti.monsterhp[o7] <= ti.monstermaxhp[o7] / 0x3 && (ti.battlemsg[0x0] = "* Head Hathy's beat seems to stutter."), ti.mercymod[o7] >= ti.mercymax[o7] && (ti.msg[0x0] = "* Head Hathy is skipping beats.");
    }
    ["actStep"](o7) {
      this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, ti.msg[0x0] = "* HEAD HATHY - AT 8 DF 0&* It learned to hide its feelings..^1. is that strength?/%", t7()), this.acting === 0x2 && this.actcon === 0x0 && (tg(0x0, 0x1, 0x2), ti.msg[0x0] = "* You flirted with Head Hathy^1.&* It was highly effective./%", tB(o7, 0x64), t7(), this.battlecancel = 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (tB(o7, 0x64), this.actcon = 0x1, ti.flag[0x1f8] === 0x0 && (ti.msg[0x0] = "* You ordered SUSIE to flirt with the enemy!/", tJ(0x1, 0x0), ti.msg[0x2] = "* .../", ti.msg[0x3] = "\\E1* Annnnnnnnnd hell no./", tm(0x4, 0x6), ti.msg[0x5] = "* Aww^1, Susie^1, it's OK if you don't know how!/", tJ(0x6, 0x7), ti.msg[0x7] = "* What^1? Shut up^1, that's not the problem!/", tm(0x8, 0x6), ti.msg[0x9] = "* ... Are you sure?/", tJ(0xa, 0x7), ti.msg[0xb] = "* Alright^1, LOOK^1, wise guy! I'll show you! Watch this!/", ti.msg[0xc] = "\\E0* AHEM./%", this.actcon = 0x14, this.acttimer = 0x0), ti.flag[0x1f8] === 0x1 && (ti.msg[0x0] = "* You ordered SUSIE to flirt with the enemy!/", tJ(0x1, 0x2), ti.msg[0x2] = "* Hell nah^1. Let's see Ralsei do it./", tm(0x3, 0x1), ti.msg[0x4] = "* I suppose if it can't be helped...!/", ti.msg[0x5] = "\\E0* Hathy^1, your beauty is just... transcendent./", ti.msg[0x6] = "\\E8* Your hair is like a waterfall of.../", ti.msg[0x7] = "\\E1* ... wait^1, um^1, do you have hair^1, or.../%", this.actcon = 0x16), ti.flag[0x1f8] === 0x2 && (ti.msg[0x0] = "* You ordered SUSIE to flirt with the enemy!/", tJ(0x1, 0x7), ti.msg[0x2] = "* Oh my god^1, Kris!!^1! I can't!^1! Do it yourself!!/%", this.actcon = 0x19), ti.flag[0x1f8] >= 0x3 && (ti.msg[0x0] = "* You flirted with the enemies^1. It worked^1! (Susie did not help.)/%", tB(0x0, 0x64), tB(0x1, 0x64), tB(0x2, 0x64)), ti.flag[0x1f8] += 0x1, tQ(), t7()), this.actcon === 0x1 && !tb.exists('obj_writer') && (this.actcon = 0x0, t1(), this.delete_n === 0x1 && this.instance_destroy()), this.actcon === 0x14 && !tb.exists('obj_writer') && (this.acttimer += 0x1, this.acttimer >= 0x3c && (this.actcon = 0x15)), this.actcon === 0x15 && (ti.fe = 0x2, ti.msg[0x0] = "* So^1, uh.../", ti.msg[0x1] = "* Come here..^1. often?/%", t6(), this.actcon = 0x16), this.actcon === 0x16 && !tb.exists('obj_writer') && (this.hspeed = 0x6, ti.msg[0x0] = "* (Head Hathy felt awkward and left...)/", tJ(0x1, 0x7), ti.msg[0x2] = "* HEY^1, GET BACK HERE AND LET ME FLIRT WITH YOU!!!/%", ti.flag[0x1f8] === 0x2 && (ti.msg[0x0] = "* (Head Hathy felt awkward and left...)/", tm(0x1, 0x3), ti.msg[0x2] = "* Oh^1, oh dear^1! Wait!!/", tJ(0x3, 0x2), ti.msg[0x4] = "* Not so easy^1, huh!?/%"), tQ(), t7(), this.delete_n = 0x1, this.actcon = 0x17, ti.monster[o7] = 0x0), this.actcon === 0x17 && this.x >= 0x280 && (this.actcon = 0x1), this.actcon === 0x19 && !tb.exists('obj_writer') && (ti.msg[0x0] = "* You said some sweet lines. The enemies were deeply enamored!/%", t7(), tB(0x0, 0x64), tB(0x1, 0x64), tB(0x2, 0x64), this.actcon = 0x1);
    }
  };
tz(tx, 'obj_headhathy'), tP(tx, 'kinds', tw('obj_headhathy', th)), tP(tx, 'defaultDepth', 0x5a), tP(tx, 'defaultSprite', 'spr_hathyx_idle');
var tS = tx,
  tL = tz((o7, o8) => {
    ti.msg[o7] = "\\TX \\F0 \\E" + o8 + " \\FL \\TL %";
  }, 'scr_lanface'),
  o0 = class oW extends tU {
    ["create"]() {
      this.con = 0x0, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.x = 0x2bc, this.y = 0xdc;
    }
    ["alarmEvent"](o7) {
      o7 === 0x4 && this.con++;
    }
    ["step"]() {
      let o7 = tb.first('obj_battlecontroller');
      o7 && o7.victoried === 0x1 && this.con < 0x1e && (this.con = 0x1e, o7.victoried = 0x2, o7.lastbattlewriter && !o7.lastbattlewriter.destroyed && o7.lastbattlewriter.instance_destroy()), this.con === 0xf && (this.depth = 0x0, this.x = 0x280, this.hspeed = -0x14, this.con = 0x10, this.alarm[0x4] = 0xf), this.con === 0x11 && (this.hspeed = 0x0, ti.fc = 0x5, ti.fe = 0x0, ti.typer = 0x2e, ti.msg = new Array(0x64).fill('\x20'), ti.msg[0x0] = "* Hey, why aren't you guys thrashed?! You're totally outnumbered!/", tm(0x1, 'B'), ti.msg[0x2] = "* You made a team purely of SUPPORT ENEMIES./", ti.msg[0x3] = "* Their bullet patterns aren't balanced at all./", ti.msg[0x4] = "\\E1* It's like a dinner made out of three glasses of milk./", tL(0x5, 0x0), ti.msg[0x6] = "* .../", ti.msg[0x7] = "\\E7* And that's, um..^1.&* Unusual, somehow?/", tm(0x8, 0x8), ti.msg[0x9] = "* Why don't we talk about this AFTER the battle?/%", t6(), this.con = 0x12), this.con === 0x12 && !tb.exists('obj_writer') && (ti.fc = 0x0, this.hspeed = 0x14, this.con = 0x13, o7 && (o7.alarm[0x2] = 0x15), this.alarm[0x4] = 0x14), this.con === 0x14 && (o7 && (o7.noreturn = 0x0), this.con = 0x15), this.con === 0x1e && (ti.fc = 0x2, ti.fe = 0x8, ti.typer = 0x2d, ti.msg = new Array(0x64).fill('\x20'), ti.msg[0x0] = "* Great job, Kris!&* We earned " + ti.monsterexp[0x3] + " EXP&and " + ti.monstergold[0x3] + " D$!/%", t6(), this.con = 0x1f), this.con === 0x1f && !tb.exists('obj_writer') && (this.depth = 0x0, this.x = 0x280, this.hspeed = -0x14, this.con = 0x20, this.alarm[0x4] = 0xf), this.con === 0x21 && (this.hspeed = 0x0, ti.fc = 0x5, ti.fe = 0x2, ti.typer = 0x2e, ti.msg = new Array(0x64).fill('\x20'), ti.msg[0x0] = "* Sweet!&* How much do I get?/", tm(0x1, 'B'), ti.msg[0x2] = "* You..^1. lost^1, Lancer^1.&* You don't get any./", tL(0x3, 0x4), ti.msg[0x4] = "* Oh./", ti.msg[0x5] = "\\E3* Can I have some of yours?/", tm(0x6, 'A'), ti.msg[0x7] = "* No!/", tL(0x8, 0x1), ti.msg[0x9] = "* Fine^1!&* Later, losers!/%", t6(), this.con = 0x22), this.con === 0x22 && !tb.exists('obj_writer') && (ti.fc = 0x0, this.hspeed = 0x14, this.con = 0x23, this.alarm[0x4] = 0x14), this.con === 0x24 && (o7 && (o7.victoried = 0x1), this.con = 0x25);
    }
  };
tz(o0, 'obj_hathyfightevent'), tP(o0, 'kinds', tw('obj_hathyfightevent', tU)), tP(o0, 'defaultDepth', 0x0), tP(o0, 'defaultSprite', 'spr_lancer_lt');
var o1 = o0,
  o2 = {
    'chapter': 0x1,
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'music': 'battle'
  },
  o3 = tz((o7, o8) => ({
    'cls': tI,
    'type': 0x6,
    'x': o7,
    'y': o8,
    'setup': tV
  }), 'H'),
  o4 = tz((o7, o8) => ({
    'cls': tS,
    'type': 0x17,
    'x': o7,
    'y': o8,
    'setup': ts
  }), 'HH'),
  o5 = tz((o7, o8, o9, oo) => ({
    'cls': null,
    'type': 0x0,
    'x': o9,
    'y': oo,
    'setup': () => {},
    'missing': o7,
    'missingType': o8
  }), 'MISSING'),
  o6 = [{
    'id': "hathy-rudinn",
    'name': "Rudinn & Hathy",
    ...o2,
    'area': 'Field',
    'desc': "Rudinn and Hathy.#(Rudinn is in its#own module.)",
    'encounterno': 0x6,
    'battlemsg': "* Rudinn and Hathy blocked the way!",
    'monsters': [o5('obj_diamondenemy', 0x5, 0x1e0, 0x6e), o3(0x1f4, 0xc8)]
  }, {
    'id': 'hathy3',
    'name': "Hathy x3",
    ...o2,
    'area': 'Field',
    'desc': "Three Hathys.#Rings of hearts.",
    'encounterno': 0x9,
    'battlemsg': "* Three Hathys blocked the way!",
    'monsters': [o3(0x1e0, 0x14), o3(0x1f4, 0x78), o3(0x1cc, 0xdc)]
  }, {
    'id': "hathy-clover",
    'name': "Clover & Hathy",
    ...o2,
    'area': 'Field',
    'desc': "Clover and Hathy.#(Clover is in its#own module.)",
    'encounterno': 0xf,
    'battlemsg': "* Clover and Hathy grew close!",
    'monsters': [o5('obj_clubsenemy', 0x7, 0x190, 0x1e), o3(0x1a4, 0xc8)]
  }, {
    'id': "hathy-smorgasboard",
    'name': 'Smorgasboard',
    ...o2,
    'area': 'Field',
    'desc': "Jigsawry, Rudinn#and Hathy.",
    'encounterno': 0x17,
    'battlemsg': "* Smorgasboard.",
    'monsters': [o5('obj_jigsawryenemy', 0xf, 0x1e0, 0x14), o5('obj_diamondenemy', 0x5, 0x1f4, 0x78), o3(0x1cc, 0xdc)]
  }, {
    'id': 'headhathy2',
    'name': "Head Hathy x2",
    ...o2,
    'area': "Card Castle",
    'desc': "Two Head Hathys.#Shrinking heart rings.",
    'encounterno': 0x1d,
    'battlemsg': "* Head Hathy blocked the way quietly!",
    'monsters': [o4(0x1e0, 0x6e), o4(0x1f4, 0xc8)]
  }, {
    'id': 'headhathy3',
    'name': "Head Hathy x3",
    ...o2,
    'area': "Card Castle",
    'desc': "Three Head Hathys.#Shrinking heart rings.",
    'encounterno': 0x1e,
    'battlemsg': "* Head Hathy blocked the way quietly! (x3)",
    'monsters': [o4(0x1e0, 0x14), o4(0x1f4, 0x78), o4(0x1cc, 0xdc)]
  }, {
    'id': "hathy-various",
    'name': "Various guys",
    ...o2,
    'area': 'Field',
    'desc': "Rudinn, Hathy#and Rudinn.",
    'encounterno': 0x21,
    'battlemsg': "* Various guys appeared!",
    'monsters': [o5('obj_diamondenemy', 0x5, 0x1e0, 0x14), o3(0x1f4, 0x78), o5('obj_diamondenemy', 0x5, 0x1cc, 0xdc)]
  }];
tO(th, "G.mnfight = 2;");
export { tN as a, tq as b, tV as c, td as d, ts as e, te as f, tp as g, tk as h, tR as i, tT as j, tI as k, tS as l, o1 as m, o6 as n, tK as o };