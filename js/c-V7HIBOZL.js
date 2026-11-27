import { b as C, c as l } from "./c-O567UJ4Y.js";
import { G as a0, s as a1 } from "./c-QFDZPUX2.js";
import { a as a2, c as a3, e as a4 } from "./c-DTW63MWW.js";
import { g, i as a5 } from "./c-3ELH3LBH.js";
import { a as a6, f as a7, n as a8, p as a9 } from "./c-MYK6C3LF.js";
import { H as aa, M as aF, Q as aU, g as an, n as ai } from "./c-ZQQWH6UG.js";
import { A as aI, B as aD, C as ao, Ib as af, Ra as aH, Ta as ag, h as aL, na as ax, o as aG, pb as aB, qb as ae, r as aO, xb as ab, z as aN } from "./c-PBMEVLU6.js";
import { a as aY, c as ak, e as aK, g as aZ, l as ay } from "./c-XSSGDLV7.js";
var az = {};
ak(az, {
  FIGHTS: () => aT,
  SOUNDS: () => aJ,
  SPRITES: () => aP,
  obj_animation: () => aC,
  obj_carrotthrower: () => aW,
  obj_defeatanim: () => au,
  obj_rabbick_bush: () => aV,
  obj_rabbick_enemy: () => aE,
  obj_rabbitbullet: () => al,
  obj_spareanim: () => aM,
  setupStats: () => aw
});
ay();
var aP = ["spr_rabbick_enemy", "spr_rabbick_enemy_hurt", "spr_rabbick_enemy_spared", "spr_rabbick_dustorb", "spr_rabbick_bushhole", "spr_rabbitbullet", "spr_rabbitthrower", "spr_carrotbullet", "spr_sparestar_anim", "spr_defeatsweat", "spr_battleblcon_long"];
var aJ = ["snd_whistlebreath", "snd_wing", "snd_spare", "snd_defeatrun"];
function aw(aq) {
  an.monstername[aq] = "Rabbick";
  an.monstermaxhp[aq] = 120;
  an.monsterhp[aq] = 120;
  an.monsterat[aq] = 8;
  an.monsterdf[aq] = 1;
  an.monsterexp[aq] = 0;
  an.monstergold[aq] = 38;
  an.sparepoint[aq] = 10;
  an.mercymod[aq] = 0;
  an.mercymax[aq] = 100;
  an.canact[aq][0] = 1;
  an.actname[aq][0] = "Check";
  an.canact[aq][1] = 1;
  an.actname[aq][1] = "Blow On";
  an.canact[aq][2] = 1;
  an.actname[aq][2] = "BreathAll";
  an.actactor[aq][2] = 3;
  if (ai(2) === 1 && an.plot < 150) {
    an.canact[aq][3] = 1;
    an.actname[aq][3] = "Warning";
    an.actactor[aq][3] = 3;
  }
}
aY(aw, "setupStats");
function aX(aq) {
  return "[Z]";
}
aY(aX, "scr_get_input_name");
function as(aq, ...aA) {
  for (let F0 = 0; F0 < aA.length; F0++) {
    aq = aq.split("~" + (F0 + 1)).join(aA[F0]);
  }
  return aq;
}
aY(as, "scr_84_get_subst_string");
var aR = class F3 extends aB {
  animationEnd() {
    this.instance_destroy();
  }
};
aY(aR, "obj_animation");
aK(aR, "kinds", ae("obj_animation", aB));
aK(aR, "defaultDepth", 0);
var aC = aR;
var ac = class F4 extends aB {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    ag("snd_spare");
    aH("snd_spare");
  }
  draw(aq) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage++;
      aq.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, 0.7 - this.afterimage / 25));
      aq.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, 0.4 - this.afterimage / 30));
    }
    if (this.t < 6) {
      if (this.t < 5) {
        aq.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let aA = this.t / 5;
      if (aA > 1) {
        aA = 1;
      }
      aq.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, aA - this.tone / 5));
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let F0 = 0; F0 < 2; F0++) {
        let F1 = af(this.x + aG(this.sprite_width), this.y + aG(this.sprite_height), a6);
        F1.image_xscale = 2;
        F1.image_yscale = 2;
        F1.sprite_index = "spr_sparestar_anim";
        F1.image_alpha = 2;
        F1.image_speed = 0.25;
        F1.hspeed = -3;
        F1.gravity = 0.5;
        F1.gravity_direction = 0;
        this.star[this.starcount] = F1;
        this.starcount++;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let F2 = 0; F2 < this.starcount; F2++) {
        let F5 = this.star[F2];
        if (F5 && !F5.destroyed) {
          F5.image_angle += 10;
          F5.image_alpha -= 0.1;
          if (F5.image_alpha <= 0) {
            F5.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone++;
    }
    if (this.t >= 9 && (this.neotone++, this.neotone >= 30)) {
      for (let F6 = 0; F6 < this.starcount; F6++) {
        let F7 = this.star[F6];
        if (F7 && !F7.destroyed) {
          F7.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t++;
  }
};
aY(ac, "obj_spareanim");
aK(ac, "kinds", ae("obj_spareanim", aB));
aK(ac, "defaultDepth", 0);
var aM = ac;
var ad = class F8 extends aB {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    aH("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(aq) {
    if (this.t === 0) {
      this.draw_self(aq);
    }
    let aA = 0;
    if (this.g <= 5) {
      aA = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      aA = 1;
    }
    if (aA === 1) {
      aq.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let F0 = 0; F0 <= 80; F0++) {
        aq.draw_sprite_ext(this.sprite_index, this.image_index, this.x + F0 * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, Math.max(0, 0.4 - this.t / 8 + F0 / 200));
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
aY(ad, "obj_defeatanim");
aK(ad, "kinds", ae("obj_defeatanim", aB));
aK(ad, "defaultDepth", 0);
var au = ad;
var aS = class F9 extends a4 {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_alpha = 0;
    this.image_speed = 0;
    if (!ab.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.jumpsiner = aG(100);
    this.hspeed = -3 - aG(1);
    this.jumpspeed = 8 + aG(4);
    this.jumpheight = 50 + aG(10);
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    this.jumpsiner++;
    if (this.image_alpha < 1 && this.active === 0) {
      this.image_alpha += 0.1;
    } else {
      this.active = 1;
    }
    let aq = ab.first("obj_battlesolid");
    let aA = aq ? aq.x : 320;
    let F0 = aq ? aq.y : 170;
    let F1 = aq ? aq.sprite_width : 0;
    let F2 = aq ? aq.sprite_height : 0;
    let F5 = F0 + F2 / 2 - 20;
    let F6 = aD(this.jumpsiner / this.jumpspeed) * this.jumpheight;
    this.y = F5 + F6 - this.jumpheight;
    this.image_speed = 0;
    this.image_index = 1;
    if (F6 > 0) {
      this.image_index = 2;
    }
    if (F6 > this.jumpheight / 2) {
      this.image_index = 0;
    }
    if (this.x <= aA - F1 / 2 - 40) {
      this.image_alpha -= 0.1;
    }
  }
};
aY(aS, "obj_rabbitbullet");
aK(aS, "kinds", ae("obj_rabbitbullet", a4));
aK(aS, "defaultDepth", -20);
aK(aS, "defaultSprite", "spr_rabbitbullet");
var al = aS;
var am = class Fa extends a3 {
  create() {
    this.image_speed = 0;
    this.con = 0;
    this.throw_n = 0;
    this.buffer = 0;
    this.throwtimer = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.dir = aO(1, -1);
    this.gravity = 1;
    this.vspeed = -14;
    this.hspeed = this.dir * aG(2);
  }
  alarmEvent(aq) {
    if (aq === 4) {
      this.con += 1;
    }
  }
  step() {
    this.buffer++;
    if (this.buffer === 19) {
      this.gravity = 0;
      this.vspeed = 0;
      this.hspeed = this.dir * 4;
      this.depth = -10;
    }
    if (this.buffer >= 19) {
      let aq = ab.first("obj_battlesolid");
      let aA = aq ? aq.x : 320;
      let F0 = aq ? aq.y : 170;
      let F1 = aq ? aq.sprite_width : 0;
      let F2 = aq ? aq.sprite_height : 0;
      this.y = F0 - F2 / 2;
      if (this.x <= aA - F1 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x <= aA - F1 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x >= aA + F1 / 2 - 20) {
        this.x -= 4;
        if (this.hspeed > 0) {
          this.hspeed = -this.hspeed;
        }
      }
      let F5 = ab.first("obj_heart");
      if (this.buffer >= 20 && this.con === 0 && F5 && aI(this.x - (F5.x + 10)) < 30) {
        this.con = 5;
      }
      if (this.con === 5) {
        this.image_speed = 0.5;
        this.con = 6;
      }
      if (this.con === 6) {
        if (this.image_index >= 2 && this.throw_n === 0) {
          this.throw_n = 1;
          let F6 = af(this.x, this.y, a4);
          a2(this, F6);
          let F7 = 7;
          if (aa() === 2) {
            F7 = 6;
          }
          if (aa() === 3) {
            F7 = 5;
          }
          F6.active = 1;
          F6.image_xscale = 2;
          F6.image_yscale = 2;
          F6.vspeed = F7;
          F6.image_speed = 0.25;
          F6.sprite_index = "spr_carrotbullet";
        }
        if (this.image_index >= 3) {
          this.throw_n = 0;
          this.image_speed = 0;
          this.con = 7;
          this.alarm[4] = 15;
          if (aa() === 2) {
            this.alarm[4] = 22;
          }
          if (aa() === 3) {
            this.alarm[4] = 30;
          }
        }
      }
      if (this.con === 8) {
        this.image_index = 0;
        this.con = 0;
      }
    }
  }
};
aY(am, "obj_carrotthrower");
aK(am, "kinds", ae("obj_carrotthrower", a3));
aK(am, "defaultDepth", 50);
aK(am, "defaultSprite", "spr_rabbitthrower");
var aW = am;
C({
  30: (aq, aA) => {
    let F0 = 34;
    if (aa() === 2) {
      F0 = 46;
    }
    if (aa() === 3) {
      F0 = 60;
    }
    if (aq.btimer >= F0) {
      let F1 = aA.bs;
      let F2 = af(aA.bsx + (F1 ? F1.sprite_width : 0), aA.bsy, al);
      a2(aq, F2);
      aq.btimer = 0;
    }
  },
  32: (aq, aA) => {
    let F0 = 0;
    if (ab.exists("obj_carrotthrower")) {
      F0 = 1;
      aq.type = 30;
    }
    if (aq.made === 0 && F0 === 0) {
      aq.made = 1;
      let F1 = af(aA.bsx, aA.bsy, aW);
      a2(aq, F1);
      aq.instance_destroy();
    }
  }
});
var ap = class FF extends a1 {
  create() {
    Object.assign(this, {
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: 343249823,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      blowall: 0,
      blowing: 0,
      animsiner: 0,
      blowamt: 0,
      xx: 0,
      yy: 0,
      blowtimer: 180,
      blowbuffer: 3,
      blown: 0,
      blowanimtimer: 0,
      blow_wait: 0,
      image_xscale: 2,
      image_yscale: 2,
      onoff: 0,
      shakeamt: 0,
      rtimer: 0,
      ashake: 0,
      xoff: 0,
      bunnycount: 0,
      bunnyid: null
    });
    this.originalwidth = this.sprite_width;
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = "spr_rabbick_enemy";
    this.hurtsprite = "spr_rabbick_enemy_hurt";
    this.sparedsprite = "spr_rabbick_enemy_spared";
  }
  alarmEvent(aq) {
    if (aq === 4) {
      this.con += 1;
    }
  }
  userEvent(aq) {
    if (aq === 12) {
      an.monsterx[this.myself] = this.x + this.sprite_width / 2;
      an.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (aq === 2) {
      this.dust();
      return;
    }
    if (aq === 10) {
      this.spared();
      return;
    }
  }
  dust() {
    let aq = af(this.x + aG(this.sprite_width - 10) + 10, this.y + 20 + aG(this.sprite_height - 20), aC);
    aq.sprite_index = "spr_rabbick_dustorb";
    aq.speed = 6;
    aq.image_index = 1;
    aq.direction = 10 + aG(70);
    aq.image_speed = 0.5;
    aq.image_xscale = 2;
    aq.image_yscale = 2;
    aq.gravity_direction = 0;
    aq.gravity = 0.7;
    aq.friction = 0.4;
    aq.image_alpha = 0.5;
    aq.depth = 15;
    if (this.blown === 1) {
      aq.image_alpha = 1;
      aq.depth = -10;
    }
  }
  spared() {
    let aq = af(this.x, this.y, aM);
    aq.sprite_index = this.sparedsprite;
    aq.image_index = 0;
    aq.image_xscale = this.image_xscale;
    aq.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let aq = af(this.x, this.y, au);
    aq.sprite_index = this.hurtsprite;
    aq.image_index = 0;
    aq.image_xscale = this.image_xscale;
    aq.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  step() {
    let aq = this.myself;
    if (an.monster[aq] === 1) {
      if (an.mnfight === 1 && this.talked === 0) {
        aU(this);
        if (!ab.exists("obj_darkener")) {
          af(0, 0, a9);
        }
        an.typer = 50;
        an.msg = new Array(100).fill(" ");
        let aA = aO(0, 1, 2, 3);
        if (aN(aG(50)) === 0) {
          aA = 4;
        }
        if (aA === 0) {
          an.msg[0] = "Snitter&snatter&what's the&matter";
        }
        if (aA === 1) {
          an.msg[0] = "Duruuuu---";
        }
        if (aA === 2) {
          an.msg[0] = "Hop^1, hop";
        }
        if (aA === 3) {
          an.msg[0] = "Meow.";
        }
        if (aA === 4) {
          an.msg[0] = "Bunnies are&the sequel&to frogs.";
        }
        if (this.blown === 1) {
          if (aA === 0 || aA === 4) {
            an.msg[0] = "A soft and&clean boy.";
          }
          if (aA === 1) {
            an.msg[0] = "A refreshing&boy.";
          }
          if (aA === 2) {
            an.msg[0] = "A sweet and&fresh girl.";
          }
          if (aA === 3) {
            an.msg[0] = "A nice and&tidy girl.";
          }
        }
        a5(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && an.mnfight === 1) {
        this.rtimer = 0;
        if (ax() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          ab.with("obj_writer", F0 => F0.instance_destroy());
          ab.with("obj_battleblcon", F0 => F0.instance_destroy());
          an.mnfight = 2;
        }
        if (an.mnfight === 2) {
          if (!ab.exists("obj_moveheart")) {
            a8();
          }
          if (!ab.exists("obj_growtangle")) {
            af(320, 170, a7);
          }
        }
      }
      if (an.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          let F0 = af(this.x, this.y, l);
          let F1 = aO(0, 1);
          F0.type = F1 === 0 ? 30 : 32;
          F0.target = this.mytarget;
          F0.damage = an.monsterat[aq] * 5;
          F0.grazepoints = 9;
          F0.timepoints = 3;
          this.turns++;
          an.turntimer = 170;
          this.attacked = 1;
          an.typer = 6;
          an.fc = 0;
          let F2 = aO(0, 1, 2, 3);
          if (F2 === 0) {
            an.battlemsg[0] = "* Rabbick is looking for a couch to get stuck under.";
          }
          if (F2 === 1) {
            an.battlemsg[0] = "* Rabbick emits a musty groan.";
          }
          if (F2 === 2) {
            an.battlemsg[0] = "* Rabbick ambiently damages the soil.";
          }
          if (F2 === 3) {
            an.battlemsg[0] = "* The battlefield is filled with the smell of dusty mustard.";
          }
          if (an.monsterhp[aq] <= an.monstermaxhp[aq] / 3) {
            an.battlemsg[0] = "* Rabbick is starting to look wispy.";
          }
          if (an.mercymod[aq] >= an.mercymax[aq]) {
            an.msg[0] = "* Rabbick is now nice and clean.";
          }
        } else {
          an.turntimer = 120;
        }
      }
      if (an.mnfight === 2 && an.turntimer <= 1 && (this.battlecancel === 1 && (an.mercymod[aq] = 999), this.battlecancel === 2)) {
        let F5 = ab.first("obj_battlecontroller");
        if (F5) {
          F5.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (an.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let aq = this.myself;
    this.xx = 0;
    this.yy = 0;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      an.msg = new Array(100).fill(" ");
      an.msg[0] = "* RABBICK - AT 8 DF 1&* This dusty bunny needs a bit&  of spring cleaning./%";
      g();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.blowall = 0;
      let aA = aX(4);
      an.msg = new Array(100).fill(" ");
      an.msg[0] = as("* Press ~1 repeatedly to blow air!", aA);
      if (this.blown === 0) {
        this.actcon = 10;
        this.blowing = 1;
        this.blowtimer = 90;
        g();
      }
      if (this.blown === 1) {
        an.msg[0] = "* Kris breathed on the Rabbick^1.&* It blew away entirely.../%";
        g();
        this.actcon = 20;
      }
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.blowall = 1;
      let F0 = aX(4);
      an.msg = new Array(100).fill(" ");
      an.msg[0] = as("* Press ~1 repeatedly to blow air!", F0);
      this.actcon = 10;
      this.blowing = 1;
      this.blowtimer = 90;
      ab.with("obj_rabbick_enemy", F1 => {
        F1.bunnycount = 0;
        F1.bunnyid = this;
      });
      ab.with("obj_rabbick_enemy", F1 => {
        if (F1.blown === 0) {
          F1.bunnyid.bunnycount += 1;
        }
        F1.blowbuffer = 2;
        F1.blow_wait = 0;
        F1.blowall = 1;
        F1.blowing = 1;
        F1.blowtimer = 90;
      });
      if (this.bunnycount === 0) {
        ab.with("obj_rabbick_enemy", F1 => {
          F1.blowing = 0;
          F1.blowtimer = -1;
          F1.actcon = 30;
          an.msg[0] = "* The bunnies were blown away!/%";
        });
      }
      g();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      an.msg = new Array(100).fill(" ");
      an.msg[0] = "* You and Ralsei warned Rabbick about Susie^1.&* The enemy went on guard.../%";
      if (aa() > 1) {
        an.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let F1 = 0; F1 < 3; F1++) {
        an.monstercomment[F1] = "(Warned)";
        an.automiss[F1] = 1;
      }
      g();
    }
    if (this.actcon === 10 && this.blowing === 0) {
      ab.with("obj_writer", F2 => F2.instance_destroy());
      this.actcon = 1;
    }
    if (this.actcon === 20 && !ab.exists("obj_writer")) {
      this.userEvent(10);
      this.actcon = 1;
    }
    if (this.actcon === 30 && !ab.exists("obj_writer")) {
      ab.with("obj_rabbick_enemy", F2 => F2.userEvent(10));
      this.actcon = 1;
    }
    if (this.actcon === 1 && !ab.exists("obj_writer")) {
      this.actcon = 0;
      a0();
    }
    if (this.blowing === 1) {
      if (this.blow_wait === 1) {
        this.blowtimer--;
      }
      this.blowbuffer--;
      if (this.blowamt > 0 && this.blowanimtimer <= 0) {
        this.blowamt--;
      }
      if (this.blowbuffer <= 0 && ax()) {
        this.blow_wait = 1;
        ag("snd_whistlebreath");
        aH("snd_whistlebreath", {
          pitch: 1 + this.blowamt / 100
        });
        this.onoff = 0;
        this.shakeamt = 5;
        this.blowamt += 12;
        this.blowbuffer = 2;
        this.blowanimtimer = 20;
        for (let F2 = 0; F2 < 6; F2++) {
          this.userEvent(2);
        }
      }
      if (this.blowtimer <= 0) {
        this.blowing = 0;
      }
      if (this.blowamt >= 100 && this.blown === 0) {
        aF(aq, 100);
        this.blown = 1;
        this.blowing = 0;
        this.blowanimtimer = 0;
        for (let F5 = 0; F5 < 15; F5++) {
          this.userEvent(2);
        }
      }
    }
  }
  draw(aq) {
    let aA = this.myself;
    this.animsiner++;
    this.image_xscale = 2 - this.blowamt / 100;
    if (this.blown === 1) {
      this.image_xscale = 2;
    }
    this.xoff = 0;
    if (this.image_xscale < 2) {
      this.xoff = (this.originalwidth - this.sprite_width) / 2;
    }
    this.blowanimtimer--;
    if (this.blowanimtimer > 6 && this.blown === 0) {
      if (this.onoff === 2) {
        this.onoff = 0;
      }
      if (this.onoff === 1.5) {
        this.onoff = 2;
      }
      if (this.onoff === 0.5) {
        this.onoff = 1;
      }
      if (this.onoff === 0) {
        this.ashake = -this.shakeamt;
        this.onoff = 0.5;
      }
      if (this.onoff === 1) {
        this.ashake = this.shakeamt;
        if (this.shakeamt > 0) {
          this.shakeamt--;
        }
        this.onoff = 1.5;
      }
      if (this.image_xscale > 1.5) {
        aq.draw_sprite_ext("spr_rabbick_enemy_hurt", 0, this.x + this.xoff + this.ashake, this.y, this.image_xscale, this.image_yscale, 0, aL.white, 1);
      } else {
        aq.draw_sprite_ext("spr_rabbick_enemy_hurt", 1, this.x + this.xoff + this.ashake - 8, this.y, this.image_xscale + 0.5, this.image_yscale, 0, aL.white, 1);
      }
    } else {
      if (this.state === 3) {
        if (an.monsterhp[aA] <= an.monstermaxhp[aA] / 3) {
          an.monsterstatus[aA] = 1;
          if (an.monstercomment[aA] === " ") {
            an.monstercomment[aA] = "(Tired)";
          }
        }
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (an.monster[aA] === 0) {
            this.scr_defeatrun();
            return;
          }
          this.hurtshake++;
          if (this.hurtshake > 1) {
            if (this.shakex > 0) {
              this.shakex--;
            }
            if (this.shakex < 0) {
              this.shakex++;
            }
            this.shakex = -this.shakex;
            this.hurtshake = 0;
          }
          let F0 = this.hurtsprite;
          if (this.image_xscale > 1.5) {
            aq.draw_sprite_ext(F0, 0, this.x + this.xoff + this.shakex, this.y, this.image_xscale, this.image_yscale, 0, aL.white, 1);
          } else {
            aq.draw_sprite_ext(F0, 1, this.x + this.xoff + this.shakex - 8, this.y, this.image_xscale + 0.5, this.image_yscale, 0, aL.white, 1);
          }
        }
      }
      if (this.state === 0) {
        let F1 = this.idlesprite;
        if (an.mercymod[aA] >= an.mercymax[aA] || this.blown === 1) {
          F1 = this.sparedsprite;
        }
        aq.draw_sprite_ext(F1, this.animsiner / 5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1);
        if (this.flash === 1) {
          this.fsiner++;
          aq.draw_sprite_white(F1, this.animsiner / 5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0, -ao(this.fsiner / 5) * 0.4 + 0.6);
        }
      }
      if (this.becomeflash === 0) {
        this.flash = 0;
      }
      this.becomeflash = 0;
    }
  }
};
aY(ap, "obj_rabbick_enemy");
aK(ap, "kinds", ae("obj_rabbick_enemy", a1));
aK(ap, "defaultDepth", 90);
aK(ap, "defaultSprite", "spr_rabbick_enemy");
var aE = ap;
var ar = null;
try {
  ar = (await aQ("./c-KR6P5SRC.js", import.meta.url)).obj_chaseenemy || null;
} catch {
  ar = null;
}
var ah = class FU extends aB {
  create() {
    this.visible = false;
    this.radius = 90;
    this.con = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    let aq = ab.first("obj_mainchara");
    if (aq) {
      let aA = aq.x + aq.sprite_width / 2;
      let F0 = this.x + this.sprite_width / 2;
      if (aI(aA - F0) <= this.radius && aq.y >= this.y && this.con === 0) {
        aH("snd_wing");
        aH("snd_wing", {
          pitch: 0.8
        });
        this.con = 1;
        this.visible = true;
        let F1 = af(this.x, this.y, ar);
        F1.vspeed = 16;
      }
    }
  }
};
aY(ah, "obj_rabbick_bush");
aK(ah, "kinds", ae("obj_rabbick_bush", aB));
aK(ah, "defaultDepth", 800000);
aK(ah, "defaultSprite", "spr_rabbick_bushhole");
var aV = ah;
var av = null;
try {
  let Fn = await aQ("./c-2V75GZ7D.js", import.meta.url);
  if (Fn && Fn.obj_diamondenemy) {
    av = Fn;
  }
} catch {
  av = null;
}
var aj = av ? {
  cls: av.obj_diamondenemy,
  type: 5,
  x: 460,
  y: 180,
  setup: av.setupStats
} : {
  cls: null,
  type: 0,
  x: 460,
  y: 180,
  setup: aY(() => {}, "setup"),
  missing: "obj_diamondenemy",
  missingType: 5
};
var aT = [{
  id: "rabbick",
  name: "Rabbick",
  chapter: 1,
  area: "Field",
  desc: "Rabbick.#Hopping bunnies and#carrot drops.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: aE,
    type: 13,
    x: 480,
    y: 140,
    setup: aw
  }],
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 16,
  music: "battle"
}, {
  id: "rabbick2",
  name: "Rabbick x2",
  chapter: 1,
  area: "Field",
  desc: "Two Rabbicks.#Blow them all away.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: aE,
    type: 13,
    x: 480,
    y: 60,
    setup: aw
  }, {
    cls: aE,
    type: 13,
    x: 460,
    y: 180,
    setup: aw
  }],
  battlemsg: "* Rabbicks slithered in the way!",
  encounterno: 17,
  music: "battle"
}, {
  id: "rabbick_rudinn",
  name: "Rabbick + Rudinn",
  chapter: 1,
  area: "Field",
  desc: "Rabbick and Rudinn.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: aE,
    type: 13,
    x: 480,
    y: 60,
    setup: aw
  }, aj],
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 24,
  music: "battle"
}];
aZ(aE, "G.mnfight = 2;");
export { aP as a, aJ as b, aw as c, aC as d, aM as e, au as f, al as g, aW as h, aE as i, aV as j, aT as k, az as l };
function aQ(aq, aA) {
  var F0 = new URL(aq, aA).href;
  var F1 = globalThis.__drWarm;
  return (F1 ? F1(F0) : Promise.resolve()).then(function () {
    return import(F0).catch(function (F2) {
      try {
        F2.reload = true;
        F2.what = "the game code";
      } catch (F5) {}
      throw F2;
    });
  });
}
