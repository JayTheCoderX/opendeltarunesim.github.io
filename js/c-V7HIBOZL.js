const e = function () {
    let aq = true;
    return function (aA, F0) {
      const F1 = aq ? function () {
        if (F0) {
          const F2 = F0.apply(aA, arguments);
          return F0 = null, F2;
        }
      } : function () {};
      return aq = false, F1;
    };
  }(),
  t = e(this, function () {
    if (t.bind().toString().indexOf('\x0a') !== -0x1) return;
    return t.toString().search(".*").toString().constructor(t).search(".*");
  });
t();
import { b as C, c as l } from './c-O567UJ4Y.js';
import { G as a0, s as a1 } from './c-QFDZPUX2.js';
import { a as a2, c as a3, e as a4 } from './c-DTW63MWW.js';
import { g, i as a5 } from './c-3ELH3LBH.js';
import { a as a6, f as a7, n as a8, p as a9 } from './c-MYK6C3LF.js';
import { H as aa, M as aF, Q as aU, g as an, n as ai } from './c-ZQQWH6UG.js';
import { A as aI, B as aD, C as ao, Ib as af, Ra as aH, Ta as ag, h as aL, na as ax, o as aG, pb as aB, qb as ae, r as aO, xb as ab, z as aN } from './c-PBMEVLU6.js';
import { a as aY, c as ak, e as aK, g as aZ, l as ay } from './c-XSSGDLV7.js';
var az = {};
ak(az, {
  'FIGHTS': () => aT,
  'SOUNDS': () => aJ,
  'SPRITES': () => aP,
  'obj_animation': () => aC,
  'obj_carrotthrower': () => aW,
  'obj_defeatanim': () => au,
  'obj_rabbick_bush': () => aV,
  'obj_rabbick_enemy': () => aE,
  'obj_rabbitbullet': () => al,
  'obj_spareanim': () => aM,
  'setupStats': () => aw
}), ay();
var aP = ['spr_rabbick_enemy', 'spr_rabbick_enemy_hurt', 'spr_rabbick_enemy_spared', 'spr_rabbick_dustorb', 'spr_rabbick_bushhole', 'spr_rabbitbullet', 'spr_rabbitthrower', 'spr_carrotbullet', 'spr_sparestar_anim', 'spr_defeatsweat', 'spr_battleblcon_long'],
  aJ = ['snd_whistlebreath', 'snd_wing', 'snd_spare', 'snd_defeatrun'];
function aw(aq) {
  an.monstername[aq] = 'Rabbick', an.monstermaxhp[aq] = 0x78, an.monsterhp[aq] = 0x78, an.monsterat[aq] = 0x8, an.monsterdf[aq] = 0x1, an.monsterexp[aq] = 0x0, an.monstergold[aq] = 0x26, an.sparepoint[aq] = 0xa, an.mercymod[aq] = 0x0, an.mercymax[aq] = 0x64, an.canact[aq][0x0] = 0x1, an.actname[aq][0x0] = 'Check', an.canact[aq][0x1] = 0x1, an.actname[aq][0x1] = "Blow On", an.canact[aq][0x2] = 0x1, an.actname[aq][0x2] = 'BreathAll', an.actactor[aq][0x2] = 0x3, ai(0x2) === 0x1 && an.plot < 0x96 && (an.canact[aq][0x3] = 0x1, an.actname[aq][0x3] = 'Warning', an.actactor[aq][0x3] = 0x3);
}
aY(aw, 'setupStats');
function aX(aq) {
  return "[Z]";
}
aY(aX, 'scr_get_input_name');
function as(aq, ...aA) {
  for (let F0 = 0x0; F0 < aA.length; F0++) aq = aq.split('~' + (F0 + 0x1)).join(aA[F0]);
  return aq;
}
aY(as, 'scr_84_get_subst_string');
var aR = class F3 extends aB {
  ["animationEnd"]() {
    this.instance_destroy();
  }
};
aY(aR, 'obj_animation'), aK(aR, 'kinds', ae('obj_animation', aB)), aK(aR, 'defaultDepth', 0x0);
var aC = aR,
  ac = class F4 extends aB {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], ag('snd_spare'), aH('snd_spare');
    }
    ["draw"](aq) {
      if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage++, aq.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x4, this.y, this.image_xscale, this.image_yscale, 0x0, Math.max(0x0, 0.7 - this.afterimage / 0x19)), aq.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x8, this.y, this.image_xscale, this.image_yscale, 0x0, Math.max(0x0, 0.4 - this.afterimage / 0x1e))), this.t < 0x6) {
        this.t < 0x5 && aq.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
        let aA = this.t / 0x5;
        aA > 0x1 && (aA = 0x1), aq.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, Math.max(0x0, aA - this.tone / 0x5));
      }
      if (this.t >= 0x1 && this.t <= 0x5) for (let F0 = 0x0; F0 < 0x2; F0++) {
        let F1 = af(this.x + aG(this.sprite_width), this.y + aG(this.sprite_height), a6);
        F1.image_xscale = 0x2, F1.image_yscale = 0x2, F1.sprite_index = 'spr_sparestar_anim', F1.image_alpha = 0x2, F1.image_speed = 0.25, F1.hspeed = -0x3, F1.gravity = 0.5, F1.gravity_direction = 0x0, this.star[this.starcount] = F1, this.starcount++;
      }
      if (this.t >= 0x5 && this.t <= 0x1e) for (let F2 = 0x0; F2 < this.starcount; F2++) {
        let F5 = this.star[F2];
        F5 && !F5.destroyed && (F5.image_angle += 0xa, F5.image_alpha -= 0.1, F5.image_alpha <= 0x0 && F5.instance_destroy());
      }
      if (this.t >= 0x5 && this.t < 0xa && this.tone++, this.t >= 0x9 && (this.neotone++, this.neotone >= 0x1e)) {
        for (let F6 = 0x0; F6 < this.starcount; F6++) {
          let F7 = this.star[F6];
          F7 && !F7.destroyed && F7.instance_destroy();
        }
        this.instance_destroy();
      }
      this.t++;
    }
  };
aY(ac, 'obj_spareanim'), aK(ac, 'kinds', ae('obj_spareanim', aB)), aK(ac, 'defaultDepth', 0x0);
var aM = ac,
  ad = class F8 extends aB {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, aH('snd_defeatrun');
    }
    ["step"]() {
      this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
    }
    ["draw"](aq) {
      this.t === 0x0 && this.draw_self(aq);
      let aA = 0x0;
      if (this.g <= 0x5 && (aA = 0x1), this.g >= 0x9 && this.g <= 0xd && (aA = 0x1), aA === 0x1 && aq.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (let F0 = 0x0; F0 <= 0x50; F0++) aq.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * F0, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, Math.max(0x0, 0.4 - this.t / 0x8 + F0 / 0xc8));
        this.t >= 0xf && this.instance_destroy();
      }
    }
  };
aY(ad, 'obj_defeatanim'), aK(ad, 'kinds', ae('obj_defeatanim', aB)), aK(ad, 'defaultDepth', 0x0);
var au = ad,
  aS = class F9 extends a4 {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0, this.image_speed = 0x0, ab.exists('obj_heart') || this.instance_destroy(), this.jumpsiner = aG(0x64), this.hspeed = -0x3 - aG(0x1), this.jumpspeed = 0x8 + aG(0x4), this.jumpheight = 0x32 + aG(0xa), this.image_xscale = 0x2, this.image_yscale = 0x2;
    }
    ["step"]() {
      this.jumpsiner++, this.image_alpha < 0x1 && this.active === 0x0 ? this.image_alpha += 0.1 : this.active = 0x1;
      let aq = ab.first('obj_battlesolid'),
        aA = aq ? aq.x : 0x140,
        F0 = aq ? aq.y : 0xaa,
        F1 = aq ? aq.sprite_width : 0x0,
        F2 = aq ? aq.sprite_height : 0x0,
        F5 = F0 + F2 / 0x2 - 0x14,
        F6 = aD(this.jumpsiner / this.jumpspeed) * this.jumpheight;
      this.y = F5 + F6 - this.jumpheight, this.image_speed = 0x0, this.image_index = 0x1, F6 > 0x0 && (this.image_index = 0x2), F6 > this.jumpheight / 0x2 && (this.image_index = 0x0), this.x <= aA - F1 / 0x2 - 0x28 && (this.image_alpha -= 0.1);
    }
  };
aY(aS, 'obj_rabbitbullet'), aK(aS, 'kinds', ae('obj_rabbitbullet', a4)), aK(aS, 'defaultDepth', -0x14), aK(aS, 'defaultSprite', 'spr_rabbitbullet');
var al = aS,
  am = class Fa extends a3 {
    ["create"]() {
      this.image_speed = 0x0, this.con = 0x0, this.throw_n = 0x0, this.buffer = 0x0, this.throwtimer = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.dir = aO(0x1, -0x1), this.gravity = 0x1, this.vspeed = -0xe, this.hspeed = this.dir * aG(0x2);
    }
    ["alarmEvent"](aq) {
      aq === 0x4 && (this.con += 0x1);
    }
    ["step"]() {
      if (this.buffer++, this.buffer === 0x13 && (this.gravity = 0x0, this.vspeed = 0x0, this.hspeed = 0x4 * this.dir, this.depth = -0xa), this.buffer >= 0x13) {
        let aq = ab.first('obj_battlesolid'),
          aA = aq ? aq.x : 0x140,
          F0 = aq ? aq.y : 0xaa,
          F1 = aq ? aq.sprite_width : 0x0,
          F2 = aq ? aq.sprite_height : 0x0;
        this.y = F0 - F2 / 0x2, this.x <= aA - F1 / 0x2 + 0x14 && (this.x += 0x4, this.hspeed < 0x0 && (this.hspeed = -this.hspeed)), this.x <= aA - F1 / 0x2 + 0x14 && (this.x += 0x4, this.hspeed < 0x0 && (this.hspeed = -this.hspeed)), this.x >= aA + F1 / 0x2 - 0x14 && (this.x -= 0x4, this.hspeed > 0x0 && (this.hspeed = -this.hspeed));
        let F5 = ab.first('obj_heart');
        if (this.buffer >= 0x14 && this.con === 0x0 && F5 && aI(this.x - (F5.x + 0xa)) < 0x1e && (this.con = 0x5), this.con === 0x5 && (this.image_speed = 0.5, this.con = 0x6), this.con === 0x6) {
          if (this.image_index >= 0x2 && this.throw_n === 0x0) {
            this.throw_n = 0x1;
            let F6 = af(this.x, this.y, a4);
            a2(this, F6);
            let F7 = 0x7;
            aa() === 0x2 && (F7 = 0x6), aa() === 0x3 && (F7 = 0x5), F6.active = 0x1, F6.image_xscale = 0x2, F6.image_yscale = 0x2, F6.vspeed = F7, F6.image_speed = 0.25, F6.sprite_index = 'spr_carrotbullet';
          }
          this.image_index >= 0x3 && (this.throw_n = 0x0, this.image_speed = 0x0, this.con = 0x7, this.alarm[0x4] = 0xf, aa() === 0x2 && (this.alarm[0x4] = 0x16), aa() === 0x3 && (this.alarm[0x4] = 0x1e));
        }
        this.con === 0x8 && (this.image_index = 0x0, this.con = 0x0);
      }
    }
  };
aY(am, 'obj_carrotthrower'), aK(am, 'kinds', ae('obj_carrotthrower', a3)), aK(am, 'defaultDepth', 0x32), aK(am, 'defaultSprite', 'spr_rabbitthrower');
var aW = am;
C({
  0x1e: (aq, aA) => {
    let F0 = 0x22;
    if (aa() === 0x2 && (F0 = 0x2e), aa() === 0x3 && (F0 = 0x3c), aq.btimer >= F0) {
      let F1 = aA.bs,
        F2 = af(aA.bsx + (F1 ? F1.sprite_width : 0x0), aA.bsy, al);
      a2(aq, F2), aq.btimer = 0x0;
    }
  },
  0x20: (aq, aA) => {
    let F0 = 0x0;
    if (ab.exists('obj_carrotthrower') && (F0 = 0x1, aq.type = 0x1e), aq.made === 0x0 && F0 === 0x0) {
      aq.made = 0x1;
      let F1 = af(aA.bsx, aA.bsy, aW);
      a2(aq, F1), aq.instance_destroy();
    }
  }
});
var ap = class FF extends a1 {
  ["create"]() {
    Object.assign(this, {
      'becomeflash': 0x0,
      'turnt': 0x0,
      'turns': 0x0,
      'talktimer': 0x0,
      'talkmax': 0x5a,
      'state': 0x0,
      'flash': 0x0,
      'siner': 0x0,
      'fsiner': 0x0,
      'talked': 0x0,
      'attacked': 0x0,
      'hurt': 0x0,
      'hurttimer': 0x0,
      'hurtshake': 0x0,
      'mywriter': 0x1475939f,
      'acting': 0x0,
      'actcon': 0x0,
      'acttimer': 0x0,
      'mercymod': 0x0,
      'maxmercy': 0x270f,
      'warned': 0x0,
      'compliment': 0x0,
      'tired': 0x0,
      'attacks': 0x0,
      'dodgetimer': 0x0,
      'candodge': 0x0,
      'con': 0x0,
      'battlecancel': 0x0,
      'nexttry': 0x0,
      'mytarget': 0x3,
      'blowall': 0x0,
      'blowing': 0x0,
      'animsiner': 0x0,
      'blowamt': 0x0,
      'xx': 0x0,
      'yy': 0x0,
      'blowtimer': 0xb4,
      'blowbuffer': 0x3,
      'blown': 0x0,
      'blowanimtimer': 0x0,
      'blow_wait': 0x0,
      'image_xscale': 0x2,
      'image_yscale': 0x2,
      'onoff': 0x0,
      'shakeamt': 0x0,
      'rtimer': 0x0,
      'ashake': 0x0,
      'xoff': 0x0,
      'bunnycount': 0x0,
      'bunnyid': null
    }), this.originalwidth = this.sprite_width, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_rabbick_enemy', this.hurtsprite = 'spr_rabbick_enemy_hurt', this.sparedsprite = 'spr_rabbick_enemy_spared';
  }
  ["alarmEvent"](aq) {
    aq === 0x4 && (this.con += 0x1);
  }
  ["userEvent"](aq) {
    if (aq === 0xc) {
      an.monsterx[this.myself] = this.x + this.sprite_width / 0x2, an.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    if (aq === 0x2) {
      this.dust();
      return;
    }
    if (aq === 0xa) {
      this.spared();
      return;
    }
  }
  ["dust"]() {
    let aq = af(this.x + aG(this.sprite_width - 0xa) + 0xa, this.y + 0x14 + aG(this.sprite_height - 0x14), aC);
    aq.sprite_index = 'spr_rabbick_dustorb', aq.speed = 0x6, aq.image_index = 0x1, aq.direction = 0xa + aG(0x46), aq.image_speed = 0.5, aq.image_xscale = 0x2, aq.image_yscale = 0x2, aq.gravity_direction = 0x0, aq.gravity = 0.7, aq.friction = 0.4, aq.image_alpha = 0.5, aq.depth = 0xf, this.blown === 0x1 && (aq.image_alpha = 0x1, aq.depth = -0xa);
  }
  ["spared"]() {
    let aq = af(this.x, this.y, aM);
    aq.sprite_index = this.sparedsprite, aq.image_index = 0x0, aq.image_xscale = this.image_xscale, aq.image_yscale = this.image_yscale, this.scr_monsterdefeat(), this.instance_destroy();
  }
  ["scr_defeatrun"]() {
    let aq = af(this.x, this.y, au);
    aq.sprite_index = this.hurtsprite, aq.image_index = 0x0, aq.image_xscale = this.image_xscale, aq.image_yscale = this.image_yscale, this.instance_destroy();
  }
  ["step"]() {
    let aq = this.myself;
    if (an.monster[aq] === 0x1) {
      if (an.mnfight === 0x1 && this.talked === 0x0) {
        aU(this), ab.exists('obj_darkener') || af(0x0, 0x0, a9), an.typer = 0x32, an.msg = new Array(0x64).fill('\x20');
        let aA = aO(0x0, 0x1, 0x2, 0x3);
        aN(aG(0x32)) === 0x0 && (aA = 0x4), aA === 0x0 && (an.msg[0x0] = "Snitter&snatter&what's the&matter"), aA === 0x1 && (an.msg[0x0] = "Duruuuu---"), aA === 0x2 && (an.msg[0x0] = "Hop^1, hop"), aA === 0x3 && (an.msg[0x0] = "Meow."), aA === 0x4 && (an.msg[0x0] = "Bunnies are&the sequel&to frogs."), this.blown === 0x1 && ((aA === 0x0 || aA === 0x4) && (an.msg[0x0] = "A soft and&clean boy."), aA === 0x1 && (an.msg[0x0] = "A refreshing&boy."), aA === 0x2 && (an.msg[0x0] = "A sweet and&fresh girl."), aA === 0x3 && (an.msg[0x0] = "A nice and&tidy girl.")), a5(this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0;
      }
      if (this.talked === 0x1 && an.mnfight === 0x1 && (this.rtimer = 0x0, ax() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (ab.with('obj_writer', F0 => F0.instance_destroy()), ab.with('obj_battleblcon', F0 => F0.instance_destroy()), an.mnfight = 0x2), an.mnfight === 0x2 && (ab.exists('obj_moveheart') || a8(), ab.exists('obj_growtangle') || af(0x140, 0xaa, a7))), an.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer++, this.rtimer === 0xc) {
          let F0 = af(this.x, this.y, l),
            F1 = aO(0x0, 0x1);
          F0.type = F1 === 0x0 ? 0x1e : 0x20, F0.target = this.mytarget, F0.damage = an.monsterat[aq] * 0x5, F0.grazepoints = 0x9, F0.timepoints = 0x3, this.turns++, an.turntimer = 0xaa, this.attacked = 0x1, an.typer = 0x6, an.fc = 0x0;
          let F2 = aO(0x0, 0x1, 0x2, 0x3);
          F2 === 0x0 && (an.battlemsg[0x0] = "* Rabbick is looking for a couch to get stuck under."), F2 === 0x1 && (an.battlemsg[0x0] = "* Rabbick emits a musty groan."), F2 === 0x2 && (an.battlemsg[0x0] = "* Rabbick ambiently damages the soil."), F2 === 0x3 && (an.battlemsg[0x0] = "* The battlefield is filled with the smell of dusty mustard."), an.monsterhp[aq] <= an.monstermaxhp[aq] / 0x3 && (an.battlemsg[0x0] = "* Rabbick is starting to look wispy."), an.mercymod[aq] >= an.mercymax[aq] && (an.msg[0x0] = "* Rabbick is now nice and clean.");
        } else an.turntimer = 0x78;
      }
      if (an.mnfight === 0x2 && an.turntimer <= 0x1 && (this.battlecancel === 0x1 && (an.mercymod[aq] = 0x3e7), this.battlecancel === 0x2)) {
        let F5 = ab.first('obj_battlecontroller');
        F5 && (F5.noreturn = 0x1), this.con = 0x1, this.battlecancel = 0x3;
      }
    }
    an.myfight === 0x3 && this.actStep();
  }
  ["actStep"]() {
    let aq = this.myself;
    if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, an.msg = new Array(0x64).fill('\x20'), an.msg[0x0] = "* RABBICK - AT 8 DF 1&* This dusty bunny needs a bit&  of spring cleaning./%", g()), this.acting === 0x2 && this.actcon === 0x0) {
      this.blowall = 0x0;
      let aA = aX(0x4);
      an.msg = new Array(0x64).fill('\x20'), an.msg[0x0] = as("* Press ~1 repeatedly to blow air!", aA), this.blown === 0x0 && (this.actcon = 0xa, this.blowing = 0x1, this.blowtimer = 0x5a, g()), this.blown === 0x1 && (an.msg[0x0] = "* Kris breathed on the Rabbick^1.&* It blew away entirely.../%", g(), this.actcon = 0x14);
    }
    if (this.acting === 0x3 && this.actcon === 0x0) {
      this.blowall = 0x1;
      let F0 = aX(0x4);
      an.msg = new Array(0x64).fill('\x20'), an.msg[0x0] = as("* Press ~1 repeatedly to blow air!", F0), this.actcon = 0xa, this.blowing = 0x1, this.blowtimer = 0x5a, ab.with('obj_rabbick_enemy', F1 => {
        F1.bunnycount = 0x0, F1.bunnyid = this;
      }), ab.with('obj_rabbick_enemy', F1 => {
        F1.blown === 0x0 && (F1.bunnyid.bunnycount += 0x1), F1.blowbuffer = 0x2, F1.blow_wait = 0x0, F1.blowall = 0x1, F1.blowing = 0x1, F1.blowtimer = 0x5a;
      }), this.bunnycount === 0x0 && ab.with('obj_rabbick_enemy', F1 => {
        F1.blowing = 0x0, F1.blowtimer = -0x1, F1.actcon = 0x1e, an.msg[0x0] = "* The bunnies were blown away!/%";
      }), g();
    }
    if (this.acting === 0x4 && this.actcon === 0x0) {
      this.actcon = 0x1, an.msg = new Array(0x64).fill('\x20'), an.msg[0x0] = "* You and Ralsei warned Rabbick about Susie^1.&* The enemy went on guard.../%", aa() > 0x1 && (an.msg[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%");
      for (let F1 = 0x0; F1 < 0x3; F1++) an.monstercomment[F1] = "(Warned)", an.automiss[F1] = 0x1;
      g();
    }
    if (this.actcon === 0xa && this.blowing === 0x0 && (ab.with('obj_writer', F2 => F2.instance_destroy()), this.actcon = 0x1), this.actcon === 0x14 && !ab.exists('obj_writer') && (this.userEvent(0xa), this.actcon = 0x1), this.actcon === 0x1e && !ab.exists('obj_writer') && (ab.with('obj_rabbick_enemy', F2 => F2.userEvent(0xa)), this.actcon = 0x1), this.actcon === 0x1 && !ab.exists('obj_writer') && (this.actcon = 0x0, a0()), this.blowing === 0x1) {
      if (this.blow_wait === 0x1 && this.blowtimer--, this.blowbuffer--, this.blowamt > 0x0 && this.blowanimtimer <= 0x0 && this.blowamt--, this.blowbuffer <= 0x0 && ax()) {
        this.blow_wait = 0x1, ag('snd_whistlebreath'), aH('snd_whistlebreath', {
          'pitch': 0x1 + this.blowamt / 0x64
        }), this.onoff = 0x0, this.shakeamt = 0x5, this.blowamt += 0xc, this.blowbuffer = 0x2, this.blowanimtimer = 0x14;
        for (let F2 = 0x0; F2 < 0x6; F2++) this.userEvent(0x2);
      }
      if (this.blowtimer <= 0x0 && (this.blowing = 0x0), this.blowamt >= 0x64 && this.blown === 0x0) {
        aF(aq, 0x64), this.blown = 0x1, this.blowing = 0x0, this.blowanimtimer = 0x0;
        for (let F5 = 0x0; F5 < 0xf; F5++) this.userEvent(0x2);
      }
    }
  }
  ["draw"](aq) {
    let aA = this.myself;
    if (this.animsiner++, this.image_xscale = 0x2 - this.blowamt / 0x64, this.blown === 0x1 && (this.image_xscale = 0x2), this.xoff = 0x0, this.image_xscale < 0x2 && (this.xoff = (this.originalwidth - this.sprite_width) / 0x2), this.blowanimtimer--, this.blowanimtimer > 0x6 && this.blown === 0x0) this.onoff === 0x2 && (this.onoff = 0x0), this.onoff === 1.5 && (this.onoff = 0x2), this.onoff === 0.5 && (this.onoff = 0x1), this.onoff === 0x0 && (this.ashake = -this.shakeamt, this.onoff = 0.5), this.onoff === 0x1 && (this.ashake = this.shakeamt, this.shakeamt > 0x0 && this.shakeamt--, this.onoff = 1.5), this.image_xscale > 1.5 ? aq.draw_sprite_ext('spr_rabbick_enemy_hurt', 0x0, this.x + this.xoff + this.ashake, this.y, this.image_xscale, this.image_yscale, 0x0, aL.white, 0x1) : aq.draw_sprite_ext('spr_rabbick_enemy_hurt', 0x1, this.x + this.xoff + this.ashake - 0x8, this.y, this.image_xscale + 0.5, this.image_yscale, 0x0, aL.white, 0x1);else {
      if (this.state === 0x3) {
        if (an.monsterhp[aA] <= an.monstermaxhp[aA] / 0x3 && (an.monsterstatus[aA] = 0x1, an.monstercomment[aA] === '\x20' && (an.monstercomment[aA] = "(Tired)")), this.hurttimer--, this.hurttimer < 0x0) this.state = 0x0;else {
          if (an.monster[aA] === 0x0) {
            this.scr_defeatrun();
            return;
          }
          this.hurtshake++, this.hurtshake > 0x1 && (this.shakex > 0x0 && this.shakex--, this.shakex < 0x0 && this.shakex++, this.shakex = -this.shakex, this.hurtshake = 0x0);
          let F0 = this.hurtsprite;
          this.image_xscale > 1.5 ? aq.draw_sprite_ext(F0, 0x0, this.x + this.xoff + this.shakex, this.y, this.image_xscale, this.image_yscale, 0x0, aL.white, 0x1) : aq.draw_sprite_ext(F0, 0x1, this.x + this.xoff + this.shakex - 0x8, this.y, this.image_xscale + 0.5, this.image_yscale, 0x0, aL.white, 0x1);
        }
      }
      if (this.state === 0x0) {
        let F1 = this.idlesprite;
        (an.mercymod[aA] >= an.mercymax[aA] || this.blown === 0x1) && (F1 = this.sparedsprite), aq.draw_sprite_ext(F1, this.animsiner / 0x5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner++, aq.draw_sprite_white(F1, this.animsiner / 0x5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0x0, -ao(this.fsiner / 0x5) * 0.4 + 0.6));
      }
      this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
  }
};
aY(ap, 'obj_rabbick_enemy'), aK(ap, 'kinds', ae('obj_rabbick_enemy', a1)), aK(ap, 'defaultDepth', 0x5a), aK(ap, 'defaultSprite', 'spr_rabbick_enemy');
var aE = ap,
  ar = null;
try {
  ar = (await aQ("./c-KR6P5SRC.js", import.meta.url)).obj_chaseenemy || null;
} catch {
  ar = null;
}
var ah = class FU extends aB {
  ["create"]() {
    this.visible = !0x1, this.radius = 0x5a, this.con = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2;
  }
  ["step"]() {
    let aq = ab.first('obj_mainchara');
    if (aq) {
      let aA = aq.x + aq.sprite_width / 0x2,
        F0 = this.x + this.sprite_width / 0x2;
      if (aI(aA - F0) <= this.radius && aq.y >= this.y && this.con === 0x0) {
        aH('snd_wing'), aH('snd_wing', {
          'pitch': 0.8
        }), this.con = 0x1, this.visible = !0x0;
        let F1 = af(this.x, this.y, ar);
        F1.vspeed = 0x10;
      }
    }
  }
};
aY(ah, 'obj_rabbick_bush'), aK(ah, 'kinds', ae('obj_rabbick_bush', aB)), aK(ah, 'defaultDepth', 0xc3500), aK(ah, 'defaultSprite', 'spr_rabbick_bushhole');
var aV = ah,
  av = null;
try {
  let Fn = await aQ("./c-2V75GZ7D.js", import.meta.url);
  Fn && Fn.obj_diamondenemy && (av = Fn);
} catch {
  av = null;
}
var aj = av ? {
    'cls': av.obj_diamondenemy,
    'type': 0x5,
    'x': 0x1cc,
    'y': 0xb4,
    'setup': av.setupStats
  } : {
    'cls': null,
    'type': 0x0,
    'x': 0x1cc,
    'y': 0xb4,
    'setup': aY(() => {}, 'setup'),
    'missing': 'obj_diamondenemy',
    'missingType': 0x5
  },
  aT = [{
    'id': 'rabbick',
    'name': 'Rabbick',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Rabbick.#Hopping bunnies and#carrot drops.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': aE,
      'type': 0xd,
      'x': 0x1e0,
      'y': 0x8c,
      'setup': aw
    }],
    'battlemsg': "* Rabbick slithered in the way!",
    'encounterno': 0x10,
    'music': 'battle'
  }, {
    'id': 'rabbick2',
    'name': "Rabbick x2",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Two Rabbicks.#Blow them all away.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': aE,
      'type': 0xd,
      'x': 0x1e0,
      'y': 0x3c,
      'setup': aw
    }, {
      'cls': aE,
      'type': 0xd,
      'x': 0x1cc,
      'y': 0xb4,
      'setup': aw
    }],
    'battlemsg': "* Rabbicks slithered in the way!",
    'encounterno': 0x11,
    'music': 'battle'
  }, {
    'id': 'rabbick_rudinn',
    'name': "Rabbick + Rudinn",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Rabbick and Rudinn.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': aE,
      'type': 0xd,
      'x': 0x1e0,
      'y': 0x3c,
      'setup': aw
    }, aj],
    'battlemsg': "* Rabbick slithered in the way!",
    'encounterno': 0x18,
    'music': 'battle'
  }];
aZ(aE, "G.mnfight = 2;");
export { aP as a, aJ as b, aw as c, aC as d, aM as e, au as f, al as g, aW as h, aE as i, aV as j, aT as k, az as l };
function aQ(aq, aA) {
  var F0 = new URL(aq, aA).href,
    F1 = globalThis.__drWarm;
  return (F1 ? F1(F0) : Promise.resolve()).then(function () {
    return import(F0).catch(function (F2) {
      try {
        F2.reload = !0x0, F2.what = "the game code";
      } catch (F5) {}
      throw F2;
    });
  });
}