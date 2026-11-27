import { b as m } from './c-MYK6C3LF.js';
import { P as t, S as a, T as N0, g as N1 } from './c-ZQQWH6UG.js';
import { B as N2, C as N3, Ca as N4, Ib as N5, Ra as N6, h as N7, o as N8, pb as N9, qb as NN, r as Ny, s as Nw, t as NI, u as Nd, xb as NE, y as Nh } from './c-PBMEVLU6.js';
import { a as Nc, e, l as Ni } from './c-XSSGDLV7.js';
Ni();
function Nf(NP, Nt) {
  if (!(!Nt || Nt.destroyed)) {
    if (N1.chapter >= 0x2) {
      NP.damage !== -0x1 && (Nt.damage = NP.damage), NP.grazepoints !== -0x1 && (Nt.grazepoints = NP.grazepoints), NP.timepoints !== -0x1 && (Nt.timepoints = NP.timepoints), NP.inv !== -0x1 && (Nt.inv = NP.inv), NP.target !== -0x1 && (Nt.target = NP.target), NP.grazed !== -0x1 && (Nt.grazed = 0x0), NP.grazetimer !== -0x1 && (Nt.grazetimer = 0x0), Nt.element = NP.element, N1.chapter >= 0x5 && NP.constructor && NP.constructor.name === 'obj_dbulletcontroller' && (Nt.creatorid = NP.creatorid, Nt.creator = NP.creator);
      return;
    }
    Nt.damage = NP.damage, Nt.grazepoints = NP.grazepoints, Nt.timepoints = NP.timepoints, Nt.inv = NP.inv, Nt.target = NP.target, Nt.grazed = 0x0, Nt.grazetimer = 0x0, NP.element !== void 0x0 && (Nt.element = NP.element);
  }
}
Nc(Nf, 'scr_bullet_inherit');
function No(NP, Nt) {
  Ns(NP, Nt);
}
Nc(No, 'applyBulletDamage');
function Ns(NP, Nt) {
  if (N1.chapter >= 0x2 && (Nt ? t.scr_damage_all : t.scr_damage)) {
    if (N1.inv < 0x0 && (N1.debugInv || N4.invuln)) {
      N1.inv = N1.invc * 0x28;
      return;
    }
    (Nt ? t.scr_damage_all : t.scr_damage).call(NP);
    return;
  }
  (Nt ? N0 : a)(NP);
}
Nc(Ns, 'bulletDamage');
var NW = class NS extends N9 {};
Nc(NW, 'obj_bulletparent'), e(NW, 'kinds', NN('obj_bulletparent', N9)), e(NW, 'defaultDepth', 0x0);
var ND = NW,
  Nz = class NA extends N9 {};
Nc(Nz, 'obj_bulletgenparent'), e(Nz, 'kinds', NN('obj_bulletgenparent', N9));
var NM = Nz,
  Nj = class NX extends ND {
    constructor() {
      super(), this.active = 0x0, this.damage = 0x0, this.target = 0x0, this.grazed = 0x0, this.grazepoints = 0x0, this.timepoints = 0x0, this.inv = 0x3c, this.grazetimer = 0x0, this.destroyonhit = 0x1, this.element = 0x0;
    }
    ["userEvent"](NP) {
      NP === 0x5 && this.active === 0x1 && (N1.chapter === 0x5 && NE.with('obj_aqua_enemy', Nt => {
        Nt.fight_type === 'solo' && (Nt.myattackchoice === 0x0 && Nt.attack_chain_hits++, Nt.myattackchoice === 0x1 && Nt.attack_fan_hits++, Nt.myattackchoice === 0x2 && Nt.attack_petal_hits++, Nt.myattackchoice === 0x3 && Nt.attack_omega_hits++), Nt.fight_type === 'seth' && (Nt.phasehit = 0x1);
      }), Ns(this, this.target === 0x3), (N1.chapter < 0x2 || this.destroyonhit === 0x1) && this.instance_destroy());
    }
  };
Nc(Nj, 'obj_collidebullet'), e(Nj, 'kinds', NN('obj_collidebullet', ND)), e(Nj, 'defaultDepth', 0x0);
var NC = Nj,
  Np = class Ng extends NC {
    ["create"]() {
      if (N1.chapter >= 0x2) {
        this.scr_bullet_init(), this.spin = 0x0, this.spinspeed = 0x0, this.image_alpha = 0x1, NE.exists('obj_heart') || this.instance_destroy(), this.wall_destroy = 0x1, this.bottomfade = 0x0, N1.chapter >= 0x5 && (this.anglechange = 0x0);
        return;
      }
      this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x3c, this.damage = 0x7c, this.active = 0x1, this.spec = 0x0, this.image_alpha = 0x1, this.wall_destroy = 0x1, NE.exists('obj_heart') || this.instance_destroy();
    }
    ["scr_bullet_init"]() {
      this.grazed = 0x0, this.grazetimer = 0x0, this.destroyonhit = 0x1, this.target = 0x0, this.inv = 0x3c, this.damage = 0xa, this.element = 0x0, this.grazepoints = 0x1, this.timepoints = 0x1, this.active = 0x1, this.updateimageangle = 0x0;
    }
    ["step"]() {
      if (N1.chapter >= 0x2) {
        this.wall_destroy === 0x1 && (this.x < -0x50 || this.x > 0x2f8 || this.y < -0x50 || this.y > 0x244) && this.instance_destroy(), this.updateimageangle === 0x1 && (this.image_angle = this.direction), this.spin === 0x1 && (this.image_angle += this.spinspeed), N1.chapter >= 0x5 && this.anglechange && (this.direction += this.anglechange), this.bottomfade !== 0x0 && this.bottomfade !== void 0x0 && this.y > this.bottomfade && (this.image_alpha *= 0.8);
        return;
      }
      this.wall_destroy === 0x1 && (this.x < -0x28 || this.x > 0x2a8 || this.y < -0x28 || this.y > 0x208) && this.instance_destroy();
    }
  };
Nc(Np, 'obj_regularbullet'), e(Np, 'kinds', NN('obj_regularbullet', NC)), e(Np, 'defaultDepth', -0xa);
var NV = Np,
  Nr = class Na extends NV {
    ["userEvent"](NP) {
      NP === 0x5 && this.active === 0x1 && Ns(this, this.target === 0x3);
    }
  };
Nc(Nr, 'obj_regularbullet_permanent'), e(Nr, 'kinds', NN('obj_regularbullet_permanent', NV)), e(Nr, 'defaultDepth', 0x0);
var Nl = Nr,
  NG = class y0 extends NC {
    ["create"]() {
      this.y < 0x14 && (this.y = 0x14), this.y > 0x1cc && (this.y = 0x1cc), this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0, NE.exists('obj_heart') || this.instance_destroy(), this.type = 0x0;
    }
    ["draw"](NP) {
      if (this.dont === 0x0) {
        if (this.active === 0x0) {
          if (NP.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x3 - this.image_alpha * 0x2, 0x3 - this.image_alpha * 0x2, 0x0, N7.white, this.image_alpha), this.image_alpha < 0x1) this.image_alpha += 0.1, this.type === 0x1 && (this.vspeed = 0x3, this.gravity = -0.5);else {
            if (this.type === 0x0) {
              let Nt = NE.first('obj_heart');
              Nt && Nt.y + 0x8 < this.y ? (this.vspeed = 0x1, this.gravity = -0.2) : (this.vspeed = -0x2, this.gravity = 0x1);
            }
            this.active = 0x1;
          }
        }
        NP.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2 - this.image_alpha, 0x2 - this.image_alpha, 0x0, N7.white, this.image_alpha), this.type === 0x0 && this.speed > 0x8 && (this.speed = 0x8), this.y > 0x1f4 && this.instance_destroy(), this.y < -0x14 && this.instance_destroy();
      }
      this.dont = 0x0;
    }
  };
Nc(NG, 'obj_dbullet_vert'), e(NG, 'kinds', NN('obj_dbullet_vert', NC)), e(NG, 'defaultDepth', -0x1), e(NG, 'defaultSprite', 'spr_diamondbullet_vert');
var NZ = NG,
  Nv = class y1 extends ND {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0;
      let NP = NE.first('obj_heart');
      NP ? this.futuredir = Nd(this.x, this.y, NP.x + 0x8, NP.y + 0x8) : this.instance_destroy();
    }
    ["draw"](NP) {
      if (this.dont === 0x0) {
        let Nt = NE.first('obj_heart');
        if (this.active === 0x0 && (Nt && (this.futuredir = Nd(this.x, this.y, Nt.x + 0x8, Nt.y + 0x8)), NP.draw_sprite_ext('spr_diamondbullet_form', 0x0, this.x, this.y, 0x3 - this.image_alpha * 0x2, 0x3 - this.image_alpha * 0x2, this.futuredir, N7.white, 0x1 - this.image_alpha), this.image_alpha < 0x1 ? this.image_alpha += 0.1 : (Nt && this.move_towards_point(Nt.x + 0x8, Nt.y + 0x8, 0x2), this.futuredir = this.direction, this.active = 0x1, this.speed = 0x0)), NP.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2 - this.image_alpha, 0x2 - this.image_alpha, this.futuredir, N7.white, this.image_alpha), this.active === 0x1) {
          if (this.activetimer++, this.activetimer >= 0x5 && this.times < this.difficulty) {
            let Nx = N5(this.x, this.y, NV);
            Nx.destroyed || (N1.chapter >= 0x2 && (Nx.grazepoints = this.grazepoints), Nx.damage = this.damage, Nx.target = this.target, Nx.sprite_index = 'spr_diamondbullet', Nx.direction = this.futuredir, Nx.speed = 0x6, Nx.image_angle = Nx.direction), this.times++, this.activetimer = 0x0;
          }
          this.activetimer >= 0x5 && this.times >= this.difficulty && (this.image_alpha -= 0.2, this.image_alpha <= 0x0 && this.instance_destroy());
        }
      }
      this.dont = 0x0;
    }
  };
Nc(Nv, 'obj_dbullet_maker'), e(Nv, 'kinds', NN('obj_dbullet_maker', ND)), e(Nv, 'defaultDepth', -0x14), e(Nv, 'defaultSprite', 'spr_diamondbullet_form');
var NR = Nv,
  NJ = class y2 extends ND {
    constructor() {
      super(), this.damage = 0x0, this.grazepoints = 0x0, this.timepoints = 0x0, this.inv = 0x3c, this.target = 0x0, this.grazed = 0x0, this.grazetimer = 0x0;
    }
    ["create"]() {
      this.visible = false, this.type = Ny(0x0, 0x1, 0x2, 0x3), this.y = -0x50, this.image_xscale = 0x2, this.image_yscale = 0x2, this.con = 0x0, this.timer = 0x0, this.image_speed = 0x0, this.vspeed = 0xa, this.maxtimer = 0x14 + N8(0x10), this.explodedraw = 0x0;
    }
    ["step"]() {
      let NP = NE.first('obj_joker');
      if (this.con === 0x0 && (this.sprite_index = ['spr_bomb_spade', 'spr_bomb_diamond', 'spr_bomb_heart', 'spr_bomb_club'][this.type], this.visible = true, this.con = 0x1), this.con === 0x1 && (this.timer++, this.timer >= 0xa && (NP && (NP.beepnoise = 0x1), this.image_speed = this.timer / this.maxtimer), this.timer >= this.maxtimer && (this.con = 0x2, this.timer = 0x0, this.speed = 0x0)), this.con === 0x2) {
        NP && (NP.burstnoise = 0x1);
        let Nt = NE.first('obj_heart'),
          Nx = Nt ? Nt.x + 0x8 : 0x140,
          NL = Nt ? Nt.y + 0x8 : 0xaa;
        if (this.type === 0x0) {
          let NF = N8(0x168),
            y3 = 0xc;
          for (let y4 = 0x0; y4 < 0xc; y4++) {
            let y5 = N5(this.x, this.y, NV);
            Nf(this, y5), y5.active = 0x1, y5.direction = NF + y4 * (0x168 / y3), y5.speed = 0x8, y5.image_angle = y5.direction, y5.sprite_index = 'spr_spadebullet';
          }
          this.con = 0x3;
        }
        if (this.type === 0x1) {
          for (let y6 = 0x0; y6 < 0x3; y6++) {
            let y7 = N5(this.x, this.y, NV);
            y7.damage = 0x64, Nf(this, y7), y7.move_towards_point(Nx, NL, 0xb), y7.speed -= y6, y7.image_angle = y7.direction, y7.sprite_index = 'spr_diamondbullet';
          }
          this.con = 0x3;
        }
        if (this.type === 0x2) {
          let y8 = N5(this.x, this.y, Nn);
          Nf(this, y8), this.con = 0x3;
        }
        if (this.type === 0x3) {
          let y9 = Nd(this.x, this.y, Nx, NL);
          for (let yN = 0x0; yN < 0x3; yN++) {
            let yy = N5(this.x, this.y, NV);
            yy.sprite_index = 'spr_clubsbullet', yy.damage = 0x64, Nf(this, yy), yy.active = 0x1, yy.direction = y9 - 0x14 + yN * 0x14, yy.image_angle = yy.direction, yy.speed = 0x8;
          }
          this.con = 0x3;
        }
      }
      this.explodedraw >= 0x28 && this.instance_destroy();
    }
    ["draw"](NP) {
      this.con < 0x2 && this.draw_self(NP), this.con >= 0x2 && (this.explodedraw++, NP.draw_set_color(N7.white), NP.draw_set_alpha(Math.max(0x0, 1.5 - this.explodedraw / 0xa)), NP.draw_circle(this.x, this.y, this.sprite_width / 0x2 + this.explodedraw * 0x2, false), NP.draw_set_alpha(0x1));
    }
  };
Nc(NJ, 'obj_suitbomb'), e(NJ, 'kinds', NN('obj_suitbomb', ND)), e(NJ, 'defaultDepth', 0x0), e(NJ, 'defaultSprite', 'spr_suitsbomb');
var Nu = NJ,
  NY = class yw extends ND {
    constructor() {
      super(), this.damage = 0x0, this.grazepoints = 0x0, this.timepoints = 0x0, this.inv = 0x3c, this.target = 0x0;
    }
    ["create"]() {
      this.made = 0x0, this.active = 0x0, this.pausetimer = 0x0, this.con = 0x0, this.siner = 0x0, this.maxlength = 0x0, this.visible = false, this.son = [];
    }
    ["step"]() {
      if (this.made === 0x0) {
        for (let NP = 0x0; NP < 0x4; NP++) {
          let Nt = N5(this.x, this.y, NV);
          Nt.sprite_index = 'spr_heartbullet', Nf(this, Nt), this.son[NP] = Nt;
        }
        this.made = 0x1;
      }
      if (this.pausetimer++, this.pausetimer >= 0xa && this.con === 0x0) {
        let Nx = NE.first('obj_heart');
        this.move_towards_point(Nx ? Nx.x + 0x8 : 0x140, Nx ? Nx.y + 0x8 : 0xaa, 0x7), this.con = 0x1;
      }
      this.siner++, this.maxlength < 0x28 && (this.maxlength += 0x4);
      for (let NL = 0x0; NL < 0x4; NL++) {
        let NF = this.son[NL];
        NF && !NF.destroyed && (NF.x = this.x + Nw(this.maxlength, this.siner * 0x3 + NL * 0x5a), NF.y = this.y + NI(this.maxlength, this.siner * 0x3 + NL * 0x5a));
      }
      (this.x < -0xc8 || this.x > 0x384 || this.y < -0xc8 || this.y > 0x2bc) && this.instance_destroy();
    }
  };
Nc(NY, 'obj_heartbomb_blast'), e(NY, 'kinds', NN('obj_heartbomb_blast', ND)), e(NY, 'defaultDepth', 0x0);
var Nn = NY,
  NO = class yI extends Nl {
    ["create"]() {
      this.siner = 0x0, this.siner2 = 0x0, this.t = 0x0, this.hspeed = 0x6, this.sinspeed = 0x1, this.altmode = 0x0, this.altsin = 0x0, this.timer = 0x0, this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0xa, this.timepoints = 0xa, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_alpha = 0x0, this.image_speed = 0x0, this.type = 0x0, this.con = 0x0, this.vsin = 0x0, this.wall_destroy = 0x0;
    }
    ["step"]() {
      this.t <= 0x19 && (this.image_alpha += 0.04), this.t === 0x19 && (this.active = 0x1), this.t === 0x0 && (this.maxspeed = Math.abs(this.hspeed), this.hspeed = 0x0), this.t++, this.siner += this.sinspeed;
      let NP = N2((this.siner - 0x1) / 0x14),
        Nt = N2(this.siner / 0x14),
        Nx = Nt - NP,
        NL = NE.first('obj_battlesolid'),
        NF = NL ? NL.x : 0x140;
      this.x = NF - Nt * 0x96, this.image_xscale = Nx * 0x32, this.image_xscale > 0x2 && (this.image_xscale = 0x2), this.image_xscale < -0x2 && (this.image_xscale = -0x2), Nx > 0x0 && (this.depth = 0x15, this.active = 0x0, this.image_blend = N7.gray), Nx < 0x0 && (this.depth = 0x0, this.image_alpha >= 0x1 && (this.active = 0x1), this.image_blend = N7.white), this.vsin++, (this.altmode === 0x0 || this.altmode === 0x2 || this.altmode === 0x3) && (this.y += N2(this.vsin / 0xa) * 3.5), this.altmode === 0x1 && (this.y -= N2(this.vsin / 0xa) * 3.5);
    }
  };
Nc(NO, 'obj_carouselbullet'), e(NO, 'kinds', NN('obj_carouselbullet', Nl)), e(NO, 'defaultDepth', 0x0), e(NO, 'defaultSprite', 'spr_carousel');
var NQ = NO,
  Nm = class yd extends ND {
    constructor() {
      super(), this.damage = 0x0, this.grazepoints = 0x0, this.timepoints = 0x0, this.inv = 0x3c, this.target = 0x0;
    }
    ["create"]() {
      this.visible = false, this.ringno = 0x0, this.maxspade = 0x8, this.t = 0x0, this.con = 0x0, this.startspade = 0x0, this.spadet = 0x0, this.startang = N8(0x168), this.grav = 0.2, this.size = 0x1, this.special = 0x0, this.side = 0x0, this.spade = [];
    }
    ["step"]() {
      let NP = NE.first('obj_battlesolid'),
        Nt = NP ? NP.x : 0x140,
        Nx = NP ? NP.y : 0xaa;
      if (this.t === 0x0) {
        this.size > 0x1 && (this.startang = -N8(0xb4));
        for (let NL = 0x0; NL < this.maxspade; NL++) {
          let NF = 0x168 / this.maxspade * NL + this.startang;
          this.side === 0x1 && (NF = -NF);
          let y3 = Nw(0x12c, NF + 0xb4),
            y4 = NI(0x12c, NF + 0xb4),
            y5 = N5(y3 + Nt, y4 + Nx, NC);
          Nf(this, y5), y5.sprite_index = 'spr_spadebullet', y5.image_alpha = 0x0, y5.active = 0x1, y5.image_blend = N7.ltgray, y5.direction = NF, y5.image_angle = NF, y5.speed = 0x1a, y5.image_xscale = this.size, y5.image_yscale = this.size, this.spade[NL] = y5;
        }
      }
      if (this.t >= 0x1 && this.t < 0xf) {
        for (let y6 of this.spade) y6.destroyed || (y6.speed *= 0.87, y6.image_alpha += 0.1);
      }
      if (this.t === 0xf) {
        for (let y7 of this.spade) y7.destroyed || (y7.speed = 0x0, y7.image_alpha += 0.1);
      }
      if (this.t >= 0xf && this.con === 0x0 && (this.spadet++, this.special === 0x1 && (this.spadet += 0x6), this.spadet >= 0x4)) {
        let y8 = this.spade[this.startspade];
        y8 && !y8.destroyed && (y8.image_blend = N7.white, y8.gravity_direction = y8.direction, y8.speed = -3.4, y8.gravity = this.grav), this.startspade++, this.startspade >= this.maxspade && (this.con = 0x1, this.instance_destroy()), this.spadet = 0x0;
      }
      this.t++;
    }
  };
Nc(Nm, 'obj_spadering'), e(Nm, 'kinds', NN('obj_spadering', ND)), e(Nm, 'defaultDepth', 0x0);
var NU = Nm,
  NK = class yE extends ND {
    ["create"]() {
      this.fire = 0x0, this.special = 0x0, this.con = 0x0, this.image_xscale = 0x0, this.image_speed = 0x0, this.timer = 0x0, this.image_yscale = 0x2, this.type = 0x0, this.damage = 0x64, this.grazed = 0x0, this.grazepoints = 0x4, this.timepoints = 0x2, this.inv = 0x3c, this.grazetimer = 0x0, this.target = 0x0, this.sndcon = 0x0, this.x < 0x140 && (this.sprite_index = 'spr_joker_teleport_r');
    }
    ["step"]() {
      let NP = NE.first('obj_heart');
      if (this.con === 0x0 && (this.sndcon === 0x0 && (N6('snd_swing'), this.sndcon = 0x1), this.image_index = 0x0, this.image_xscale < 0x2 ? this.image_xscale += 0.4 : (this.image_xscale = 0x2, this.con = 0x1, this.timer = 0x0)), this.con === 0x1 && (this.timer++, this.timer >= 0x8)) {
        if (this.sndcon === 0x1 && this.type < 0x3 && (N6('snd_joker_oh'), this.sndcon = 0x2), this.image_index = 0x1, this.con = 0x2, this.timer = 0x0, this.type === 0x0) {
          let Nt = N5(this.x, this.y, NC);
          Nt.sprite_index = 'spr_diamondbullet', Nt.active = 0x1, Nf(this, Nt), Nt.move_towards_point(NP ? NP.x + 0xa : 0x140, NP ? NP.y + 0xa : 0xaa, 0x8), Nt.image_angle = Nt.direction, Nt.image_xscale = 0.7, Nt.image_yscale = 0.7;
        }
        if (this.type === 0x1) for (let Nx = 0x0; Nx < 0x5; Nx++) {
          let NL = N5(this.x, this.y, NC);
          NL.sprite_index = 'spr_spadebullet', NL.active = 0x1, NL.offset = 0x12 * Nx, Nf(this, NL), NL.move_towards_point(NP ? NP.x + 0xa : 0x140, NP ? NP.y + 0xa : 0xaa, 4.5), NL.direction = NL.direction - 0x24 + NL.offset, NL.image_angle = NL.direction, NL.image_xscale = 0.4, NL.image_yscale = 0.4;
        }
      }
      this.con === 0x2 && (this.timer++, this.timer >= 0xa && (this.con = 0x4, this.timer = 0x0)), this.con === 0x4 && (this.sndcon === 0x2 && (N6('snd_swing'), this.sndcon = 0x3), this.image_xscale > 0x0 ? (this.image_xscale -= 0.4, this.image_yscale += 0.2) : (this.image_xscale = 0x0, this.con = 0x0, this.instance_destroy()));
    }
  };
Nc(NK, 'obj_joker_teleport'), e(NK, 'kinds', NN('obj_joker_teleport', ND)), e(NK, 'defaultDepth', 0x5), e(NK, 'defaultSprite', 'spr_joker_teleport');
var Nq = NK,
  Nb = class yh extends ND {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x1, this.timepoints = 0x1, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.dtimer = 0x0, this.type = 0x0, this.initangle = 0x0;
    }
    ["step"]() {
      this.dtimer++;
      let NP = NE.first('obj_heart');
      if (this.type === 0x2) {
        if (this.dtimer === 0x14 || this.dtimer === 0x16 || this.dtimer === 0x18) {
          this.move_towards_point(NP ? NP.x + 0x8 : 0x140, NP ? NP.y + 0x8 : 0xaa, 0.1);
          let Nt = (Nx, NL) => {
            let NF = N5(this.x, this.y, NV);
            NF.destroyed || (NF.sprite_index = Nx, NF.direction = this.direction + NL - 0x2 + this.initangle, NF.speed = 0x5, NF.image_angle = this.direction, Nf(this, NF));
          };
          Nt('spr_clubsball_b', 0x0), Nt('spr_clubsball_c', -0x13), Nt('spr_clubsball_a', 0x13), this.initangle += 0x2;
        }
        if (this.dtimer === 0x1a) {
          let Nx = N5(this.x, this.y, m);
          Nx.sprite_index = this.sprite_index, Nx.image_angle = this.image_angle, Nx.fadespeed = 0.04, this.instance_destroy();
        }
      }
    }
  };
Nc(Nb, 'obj_clubsbullet_dark'), e(Nb, 'kinds', NN('obj_clubsbullet_dark', ND)), e(Nb, 'defaultDepth', -0xa), e(Nb, 'defaultSprite', 'spr_clubsbullet_dark');
var Ne = Nb,
  NB = class yc extends Nl {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0x3, this.timepoints = 0x2, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.grazetimer = 0x0, this.active = 0x0, this.image_alpha = 0x0, this.image_xscale = 0x1, this.image_yscale = 0x1, this.rotspeed = 0x0, this.insanity = 0x1, this.chasecon = 0x1, this.chasetimer = 0x0, this.centerx = 0x140, this.centery = 0x78;
      let NP = NE.first('obj_battlesolid');
      NP && (this.centerx = NP.x, this.centery = NP.y), this.radius = 0x96, this.sine = 0x0, this.sinespeed = 1.4, this.dir = N8(0x46), this.dirspeed = 1.5 * Ny(0x1, -0x1), this.un = 0x0, this.scythetimer = -0x5, this.scythesidex = 0x1, this.swingnoise = 0x0, this.noisebuffer = 0x0, this.type = 0x0;
      let Nt = NE.first('obj_dbulletcontroller');
      if (Nt && Nt.type === 0x4c && (this.type = 0x1), this.king = 0x0, this.type === 0x1 && (this.insanity = 0x0, this.sinespeed = 1.3, this.scythesidex = Ny(0x1, -0x1)), NE.number('obj_centerscythe') === 0x1) {
        this.king = 0x1, this.x = this.centerx - this.radius, this.y = this.centery;
        let Nx = N5(this.centerx + this.radius, this.centery, yc);
        Nx.sine = 0x0, Nx.dir = 0xb4, Nx.un = 0x1;
        let NL = N5(this.centerx, this.centery - this.radius, yc);
        NL.sine = 0x0, NL.dir = 0x5a, NL.un = 0x0;
        let NF = N5(this.centerx, this.centery + this.radius, yc);
        NF.sine = 0x0, NF.dir = 0x10e, NF.un = 0x1;
        let y3 = this.dir;
        NE.with('obj_centerscythe', y4 => {
          y4.mydir = y3, y4.sinespeed = this.sinespeed, y4.dirspeed = this.dirspeed, y4.insanity = this.insanity;
        }), NE.with('obj_centerscythe', y4 => {
          y4.dir !== y4.mydir && (y4.dir += y4.mydir), y4.x = y4.centerx - Nw(y4.radius, y4.dir), y4.y = y4.centery - NI(y4.radius, y4.dir);
        });
      }
      this.wall_destroy = 0x0;
    }
    ["step"]() {
      if (this.chasecon === 0x1 && (this.image_alpha += 0.04, this.image_alpha >= 0x1 && (this.image_alpha = 0x1, this.chasecon = 0x2, this.active = 0x1)), this.chasecon === 0x2) {
        this.un === 0x0 && this.rotspeed <= 0xa && this.rotspeed++, this.un === 0x1 && this.rotspeed >= -0xa && this.rotspeed--, this.sine += this.sinespeed, this.dir += this.dirspeed, this.insanity === 0x1 && (this.dirspeed > 0x0 && this.dirspeed < 0x3 && (this.dirspeed += 0.01), this.dirspeed < 0x0 && this.dirspeed > -0x3 && (this.dirspeed -= 0.01));
        let NP = N3(this.sine / 0x12) * this.radius;
        this.x = this.centerx - Nw(NP, this.dir), this.y = this.centery - NI(NP, this.dir), this.king === 0x1 && (this.noisebuffer--, Math.abs(NP) <= 0x8 && this.noisebuffer < 0x0 && (N6('snd_swing'), this.noisebuffer = 0xa));
      }
      if (this.king === 0x1 && this.type === 0x1) {
        if (this.scythetimer++, this.scythetimer === 0x3c) {
          N6('snd_spearappear');
          let Nx = N5(this.centerx + this.radius * this.scythesidex, this.centery + 0x3c * this.scythesidex, NC);
          Nx.image_xscale = 0x2, Nx.image_yscale = 0x2, Nx.image_alpha = 0x0, Nx.sprite_index = 'spr_joker_scythebody', Nx.mask_index = 'spr_joker_scythebody_mask', Nx.image_blend = N7.red, Nx.active = 0x1, Nf(this, Nx), this.sbul = Nx;
        }
        let Nt = this.sbul;
        this.scythetimer >= 0x3c && this.scythetimer < 0x46 && Nt && !Nt.destroyed && (Nt.image_angle += 0xa * this.scythesidex, Nt.image_alpha += 0.1), this.scythetimer >= 0x55 && this.scythetimer < 0x5a && Nt && !Nt.destroyed && (Nt.hspeed -= 0x3 * this.scythesidex), this.scythetimer >= 0x64 && this.scythetimer < 0x69 && Nt && !Nt.destroyed && (Nt.image_alpha -= 0.2), this.scythetimer >= 0x69 && (Nt && !Nt.destroyed && Nt.instance_destroy(), this.scythesidex = this.scythesidex === -0x1 ? 0x1 : -0x1, this.scythetimer = 0x3b);
      }
      this.image_angle += this.rotspeed, this.grazed === 0x1 && (this.grazetimer++, this.grazetimer >= 0x1e && (this.grazed = 0x0, this.grazetimer = 0x0));
    }
  };
Nc(NB, 'obj_centerscythe'), e(NB, 'kinds', NN('obj_centerscythe', Nl)), e(NB, 'defaultDepth', 0x0), e(NB, 'defaultSprite', 'spr_joker_scythebody'), e(NB, 'defaultMask', 'spr_joker_scythebody_mask');
var Nk = NB,
  NT = class yi extends Nl {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0xf, this.timepoints = 0x0, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.active = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_angle = N8(0x168), this.rotspeed = 0xe, this.vspeed = 0x5, this.mask_index = 'spr_joker_scythebody_mask', this.gravity = 0x1, this.explode = 0x0, this.explodetimer = 0x0, this.remrot = this.image_angle, this.remy = this.y, this.remx = this.x, this.scale = 0x2, this.wall_destroy = 0x0;
    }
    ["step"]() {
      this.explode === 0x0 && (this.remx = this.x, this.remy = this.y, this.image_angle += this.rotspeed, this.remrot = this.image_angle), this.y >= 0x17c && this.explode === 0x0 && (N6('snd_scytheburst'), this.remx = this.x, this.remy = this.y, this.explode = 0x1, this.explodetimer = 0x0, this.remrot = this.image_angle, this.image_angle = 0x0, this.speed = 0x0, this.gravity = 0x0, this.mask_index = 'spr_tallpx', this.sprite_index = 'spr_tallpx', this.grazed = 0x0, this.y = 0x0, this.depth += 0x1), this.explode === 0x1 && (this.active = 0x0, this.image_xscale += 0x8, this.image_xscale >= 0x10 && (this.active = 0x1), this.image_xscale >= 0x20 && (this.explode = 0x2)), this.explode === 0x2 && (this.image_xscale -= 0x4, this.image_xscale <= 0x10 && (this.image_alpha -= 0.25, this.active = 0x0), this.image_xscale <= 0x0 && this.instance_destroy()), this.grazed === 0x1 && (NE.with('obj_dbulletcontroller', NP => {
        NP.made += 0.2;
      }), this.grazed = 0x2);
    }
    ["draw"](NP) {
      this.explode < 0x2 && NP.draw_sprite_ext('spr_joker_scythebody', this.image_index, this.remx, this.remy, this.scale, this.scale, this.remrot, N7.white, 0x1), this.explode >= 0x1 && this.draw_self(NP);
    }
    ["userEvent"](NP) {
      if (!(NP !== 0x5 || this.active !== 0x1) && N1.inv < 0x0) {
        NE.first('obj_battlecontroller') && (NE.first('obj_battlecontroller').shakeReq = 0x1), N6('snd_hurt1'), N1.inv = N1.invc * 0x28;
        let Nt = [0x0, 0x1, 0x2].map(Nx => Math.max(0x0, N1.hp[N1.char[Nx]]));
        if (Nh(Nt[0x0] + Nt[0x1] + Nt[0x2]) / 0x3 >= 0xa) {
          for (let Nx = 0x0; Nx < 0x3; Nx++) Nt[Nx] > 0x0 && (N1.hp[N1.char[Nx]] = Nh(N1.hp[N1.char[Nx]] * 0.7));
        } else N0(this);
      }
    }
  };
Nc(NT, 'obj_laserscythe'), e(NT, 'kinds', NN('obj_laserscythe', Nl)), e(NT, 'defaultDepth', -0x5), e(NT, 'defaultSprite', 'spr_joker_scythebody');
var NH = NT;
export { Nf as a, No as b, ND as c, NM as d, NC as e, NV as f, Nl as g, NZ as h, NR as i, Nu as j, Nn as k, NQ as l, NU as m, Nq as n, Ne as o, Nk as p, NH as q };