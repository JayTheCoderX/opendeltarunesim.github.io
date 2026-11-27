import { b as m } from "./c-MYK6C3LF.js";
import { P as t, S as a, T as N0, g as N1 } from "./c-ZQQWH6UG.js";
import { B as N2, C as N3, Ca as N4, Ib as N5, Ra as N6, h as N7, o as N8, pb as N9, qb as NN, r as Ny, s as Nw, t as NI, u as Nd, xb as NE, y as Nh } from "./c-PBMEVLU6.js";
import { a as Nc, e, l as Ni } from "./c-XSSGDLV7.js";
Ni();
function Nf(NP, Nt) {
  if (!!Nt && !Nt.destroyed) {
    if (N1.chapter >= 2) {
      if (NP.damage !== -1) {
        Nt.damage = NP.damage;
      }
      if (NP.grazepoints !== -1) {
        Nt.grazepoints = NP.grazepoints;
      }
      if (NP.timepoints !== -1) {
        Nt.timepoints = NP.timepoints;
      }
      if (NP.inv !== -1) {
        Nt.inv = NP.inv;
      }
      if (NP.target !== -1) {
        Nt.target = NP.target;
      }
      if (NP.grazed !== -1) {
        Nt.grazed = 0;
      }
      if (NP.grazetimer !== -1) {
        Nt.grazetimer = 0;
      }
      Nt.element = NP.element;
      if (N1.chapter >= 5 && NP.constructor && NP.constructor.name === "obj_dbulletcontroller") {
        Nt.creatorid = NP.creatorid;
        Nt.creator = NP.creator;
      }
      return;
    }
    Nt.damage = NP.damage;
    Nt.grazepoints = NP.grazepoints;
    Nt.timepoints = NP.timepoints;
    Nt.inv = NP.inv;
    Nt.target = NP.target;
    Nt.grazed = 0;
    Nt.grazetimer = 0;
    if (NP.element !== undefined) {
      Nt.element = NP.element;
    }
  }
}
Nc(Nf, "scr_bullet_inherit");
function No(NP, Nt) {
  Ns(NP, Nt);
}
Nc(No, "applyBulletDamage");
function Ns(NP, Nt) {
  if (N1.chapter >= 2 && (Nt ? t.scr_damage_all : t.scr_damage)) {
    if (N1.inv < 0 && (N1.debugInv || N4.invuln)) {
      N1.inv = N1.invc * 40;
      return;
    }
    (Nt ? t.scr_damage_all : t.scr_damage).call(NP);
    return;
  }
  (Nt ? N0 : a)(NP);
}
Nc(Ns, "bulletDamage");
var NW = class NS extends N9 {};
Nc(NW, "obj_bulletparent");
e(NW, "kinds", NN("obj_bulletparent", N9));
e(NW, "defaultDepth", 0);
var ND = NW;
var Nz = class NA extends N9 {};
Nc(Nz, "obj_bulletgenparent");
e(Nz, "kinds", NN("obj_bulletgenparent", N9));
var NM = Nz;
var Nj = class NX extends ND {
  constructor() {
    super();
    this.active = 0;
    this.damage = 0;
    this.target = 0;
    this.grazed = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.element = 0;
  }
  userEvent(NP) {
    if (NP === 5 && this.active === 1) {
      if (N1.chapter === 5) {
        NE.with("obj_aqua_enemy", Nt => {
          if (Nt.fight_type === "solo") {
            if (Nt.myattackchoice === 0) {
              Nt.attack_chain_hits++;
            }
            if (Nt.myattackchoice === 1) {
              Nt.attack_fan_hits++;
            }
            if (Nt.myattackchoice === 2) {
              Nt.attack_petal_hits++;
            }
            if (Nt.myattackchoice === 3) {
              Nt.attack_omega_hits++;
            }
          }
          if (Nt.fight_type === "seth") {
            Nt.phasehit = 1;
          }
        });
      }
      Ns(this, this.target === 3);
      if (N1.chapter < 2 || this.destroyonhit === 1) {
        this.instance_destroy();
      }
    }
  }
};
Nc(Nj, "obj_collidebullet");
e(Nj, "kinds", NN("obj_collidebullet", ND));
e(Nj, "defaultDepth", 0);
var NC = Nj;
var Np = class Ng extends NC {
  create() {
    if (N1.chapter >= 2) {
      this.scr_bullet_init();
      this.spin = 0;
      this.spinspeed = 0;
      this.image_alpha = 1;
      if (!NE.exists("obj_heart")) {
        this.instance_destroy();
      }
      this.wall_destroy = 1;
      this.bottomfade = 0;
      if (N1.chapter >= 5) {
        this.anglechange = 0;
      }
      return;
    }
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 124;
    this.active = 1;
    this.spec = 0;
    this.image_alpha = 1;
    this.wall_destroy = 1;
    if (!NE.exists("obj_heart")) {
      this.instance_destroy();
    }
  }
  scr_bullet_init() {
    this.grazed = 0;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.target = 0;
    this.inv = 60;
    this.damage = 10;
    this.element = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.active = 1;
    this.updateimageangle = 0;
  }
  step() {
    if (N1.chapter >= 2) {
      if (this.wall_destroy === 1 && (this.x < -80 || this.x > 760 || this.y < -80 || this.y > 580)) {
        this.instance_destroy();
      }
      if (this.updateimageangle === 1) {
        this.image_angle = this.direction;
      }
      if (this.spin === 1) {
        this.image_angle += this.spinspeed;
      }
      if (N1.chapter >= 5 && this.anglechange) {
        this.direction += this.anglechange;
      }
      if (this.bottomfade !== 0 && this.bottomfade !== undefined && this.y > this.bottomfade) {
        this.image_alpha *= 0.8;
      }
      return;
    }
    if (this.wall_destroy === 1 && (this.x < -40 || this.x > 680 || this.y < -40 || this.y > 520)) {
      this.instance_destroy();
    }
  }
};
Nc(Np, "obj_regularbullet");
e(Np, "kinds", NN("obj_regularbullet", NC));
e(Np, "defaultDepth", -10);
var NV = Np;
var Nr = class Na extends NV {
  userEvent(NP) {
    if (NP === 5 && this.active === 1) {
      Ns(this, this.target === 3);
    }
  }
};
Nc(Nr, "obj_regularbullet_permanent");
e(Nr, "kinds", NN("obj_regularbullet_permanent", NV));
e(Nr, "defaultDepth", 0);
var Nl = Nr;
var NG = class y0 extends NC {
  create() {
    if (this.y < 20) {
      this.y = 20;
    }
    if (this.y > 460) {
      this.y = 460;
    }
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
    if (!NE.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.type = 0;
  }
  draw(NP) {
    if (this.dont === 0) {
      if (this.active === 0) {
        NP.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 3 - this.image_alpha * 2, 3 - this.image_alpha * 2, 0, N7.white, this.image_alpha);
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
          if (this.type === 1) {
            this.vspeed = 3;
            this.gravity = -0.5;
          }
        } else {
          if (this.type === 0) {
            let Nt = NE.first("obj_heart");
            if (Nt && Nt.y + 8 < this.y) {
              this.vspeed = 1;
              this.gravity = -0.2;
            } else {
              this.vspeed = -2;
              this.gravity = 1;
            }
          }
          this.active = 1;
        }
      }
      NP.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2 - this.image_alpha, 2 - this.image_alpha, 0, N7.white, this.image_alpha);
      if (this.type === 0 && this.speed > 8) {
        this.speed = 8;
      }
      if (this.y > 500) {
        this.instance_destroy();
      }
      if (this.y < -20) {
        this.instance_destroy();
      }
    }
    this.dont = 0;
  }
};
Nc(NG, "obj_dbullet_vert");
e(NG, "kinds", NN("obj_dbullet_vert", NC));
e(NG, "defaultDepth", -1);
e(NG, "defaultSprite", "spr_diamondbullet_vert");
var NZ = NG;
var Nv = class y1 extends ND {
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
    let NP = NE.first("obj_heart");
    if (NP) {
      this.futuredir = Nd(this.x, this.y, NP.x + 8, NP.y + 8);
    } else {
      this.instance_destroy();
    }
  }
  draw(NP) {
    if (this.dont === 0) {
      let Nt = NE.first("obj_heart");
      if (this.active === 0) {
        if (Nt) {
          this.futuredir = Nd(this.x, this.y, Nt.x + 8, Nt.y + 8);
        }
        NP.draw_sprite_ext("spr_diamondbullet_form", 0, this.x, this.y, 3 - this.image_alpha * 2, 3 - this.image_alpha * 2, this.futuredir, N7.white, 1 - this.image_alpha);
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
        } else {
          if (Nt) {
            this.move_towards_point(Nt.x + 8, Nt.y + 8, 2);
          }
          this.futuredir = this.direction;
          this.active = 1;
          this.speed = 0;
        }
      }
      NP.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2 - this.image_alpha, 2 - this.image_alpha, this.futuredir, N7.white, this.image_alpha);
      if (this.active === 1) {
        this.activetimer++;
        if (this.activetimer >= 5 && this.times < this.difficulty) {
          let Nx = N5(this.x, this.y, NV);
          if (!Nx.destroyed) {
            if (N1.chapter >= 2) {
              Nx.grazepoints = this.grazepoints;
            }
            Nx.damage = this.damage;
            Nx.target = this.target;
            Nx.sprite_index = "spr_diamondbullet";
            Nx.direction = this.futuredir;
            Nx.speed = 6;
            Nx.image_angle = Nx.direction;
          }
          this.times++;
          this.activetimer = 0;
        }
        if (this.activetimer >= 5 && this.times >= this.difficulty) {
          this.image_alpha -= 0.2;
          if (this.image_alpha <= 0) {
            this.instance_destroy();
          }
        }
      }
    }
    this.dont = 0;
  }
};
Nc(Nv, "obj_dbullet_maker");
e(Nv, "kinds", NN("obj_dbullet_maker", ND));
e(Nv, "defaultDepth", -20);
e(Nv, "defaultSprite", "spr_diamondbullet_form");
var NR = Nv;
var NJ = class y2 extends ND {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  create() {
    this.visible = false;
    this.type = Ny(0, 1, 2, 3);
    this.y = -80;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.con = 0;
    this.timer = 0;
    this.image_speed = 0;
    this.vspeed = 10;
    this.maxtimer = 20 + N8(16);
    this.explodedraw = 0;
  }
  step() {
    let NP = NE.first("obj_joker");
    if (this.con === 0) {
      this.sprite_index = ["spr_bomb_spade", "spr_bomb_diamond", "spr_bomb_heart", "spr_bomb_club"][this.type];
      this.visible = true;
      this.con = 1;
    }
    if (this.con === 1) {
      this.timer++;
      if (this.timer >= 10) {
        if (NP) {
          NP.beepnoise = 1;
        }
        this.image_speed = this.timer / this.maxtimer;
      }
      if (this.timer >= this.maxtimer) {
        this.con = 2;
        this.timer = 0;
        this.speed = 0;
      }
    }
    if (this.con === 2) {
      if (NP) {
        NP.burstnoise = 1;
      }
      let Nt = NE.first("obj_heart");
      let Nx = Nt ? Nt.x + 8 : 320;
      let NL = Nt ? Nt.y + 8 : 170;
      if (this.type === 0) {
        let NF = N8(360);
        let y3 = 12;
        for (let y4 = 0; y4 < 12; y4++) {
          let y5 = N5(this.x, this.y, NV);
          Nf(this, y5);
          y5.active = 1;
          y5.direction = NF + y4 * (360 / y3);
          y5.speed = 8;
          y5.image_angle = y5.direction;
          y5.sprite_index = "spr_spadebullet";
        }
        this.con = 3;
      }
      if (this.type === 1) {
        for (let y6 = 0; y6 < 3; y6++) {
          let y7 = N5(this.x, this.y, NV);
          y7.damage = 100;
          Nf(this, y7);
          y7.move_towards_point(Nx, NL, 11);
          y7.speed -= y6;
          y7.image_angle = y7.direction;
          y7.sprite_index = "spr_diamondbullet";
        }
        this.con = 3;
      }
      if (this.type === 2) {
        let y8 = N5(this.x, this.y, Nn);
        Nf(this, y8);
        this.con = 3;
      }
      if (this.type === 3) {
        let y9 = Nd(this.x, this.y, Nx, NL);
        for (let yN = 0; yN < 3; yN++) {
          let yy = N5(this.x, this.y, NV);
          yy.sprite_index = "spr_clubsbullet";
          yy.damage = 100;
          Nf(this, yy);
          yy.active = 1;
          yy.direction = y9 - 20 + yN * 20;
          yy.image_angle = yy.direction;
          yy.speed = 8;
        }
        this.con = 3;
      }
    }
    if (this.explodedraw >= 40) {
      this.instance_destroy();
    }
  }
  draw(NP) {
    if (this.con < 2) {
      this.draw_self(NP);
    }
    if (this.con >= 2) {
      this.explodedraw++;
      NP.draw_set_color(N7.white);
      NP.draw_set_alpha(Math.max(0, 1.5 - this.explodedraw / 10));
      NP.draw_circle(this.x, this.y, this.sprite_width / 2 + this.explodedraw * 2, false);
      NP.draw_set_alpha(1);
    }
  }
};
Nc(NJ, "obj_suitbomb");
e(NJ, "kinds", NN("obj_suitbomb", ND));
e(NJ, "defaultDepth", 0);
e(NJ, "defaultSprite", "spr_suitsbomb");
var Nu = NJ;
var NY = class yw extends ND {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.made = 0;
    this.active = 0;
    this.pausetimer = 0;
    this.con = 0;
    this.siner = 0;
    this.maxlength = 0;
    this.visible = false;
    this.son = [];
  }
  step() {
    if (this.made === 0) {
      for (let NP = 0; NP < 4; NP++) {
        let Nt = N5(this.x, this.y, NV);
        Nt.sprite_index = "spr_heartbullet";
        Nf(this, Nt);
        this.son[NP] = Nt;
      }
      this.made = 1;
    }
    this.pausetimer++;
    if (this.pausetimer >= 10 && this.con === 0) {
      let Nx = NE.first("obj_heart");
      this.move_towards_point(Nx ? Nx.x + 8 : 320, Nx ? Nx.y + 8 : 170, 7);
      this.con = 1;
    }
    this.siner++;
    if (this.maxlength < 40) {
      this.maxlength += 4;
    }
    for (let NL = 0; NL < 4; NL++) {
      let NF = this.son[NL];
      if (NF && !NF.destroyed) {
        NF.x = this.x + Nw(this.maxlength, this.siner * 3 + NL * 90);
        NF.y = this.y + NI(this.maxlength, this.siner * 3 + NL * 90);
      }
    }
    if (this.x < -200 || this.x > 900 || this.y < -200 || this.y > 700) {
      this.instance_destroy();
    }
  }
};
Nc(NY, "obj_heartbomb_blast");
e(NY, "kinds", NN("obj_heartbomb_blast", ND));
e(NY, "defaultDepth", 0);
var Nn = NY;
var NO = class yI extends Nl {
  create() {
    this.siner = 0;
    this.siner2 = 0;
    this.t = 0;
    this.hspeed = 6;
    this.sinspeed = 1;
    this.altmode = 0;
    this.altsin = 0;
    this.timer = 0;
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 10;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_alpha = 0;
    this.image_speed = 0;
    this.type = 0;
    this.con = 0;
    this.vsin = 0;
    this.wall_destroy = 0;
  }
  step() {
    if (this.t <= 25) {
      this.image_alpha += 0.04;
    }
    if (this.t === 25) {
      this.active = 1;
    }
    if (this.t === 0) {
      this.maxspeed = Math.abs(this.hspeed);
      this.hspeed = 0;
    }
    this.t++;
    this.siner += this.sinspeed;
    let NP = N2((this.siner - 1) / 20);
    let Nt = N2(this.siner / 20);
    let Nx = Nt - NP;
    let NL = NE.first("obj_battlesolid");
    let NF = NL ? NL.x : 320;
    this.x = NF - Nt * 150;
    this.image_xscale = Nx * 50;
    if (this.image_xscale > 2) {
      this.image_xscale = 2;
    }
    if (this.image_xscale < -2) {
      this.image_xscale = -2;
    }
    if (Nx > 0) {
      this.depth = 21;
      this.active = 0;
      this.image_blend = N7.gray;
    }
    if (Nx < 0) {
      this.depth = 0;
      if (this.image_alpha >= 1) {
        this.active = 1;
      }
      this.image_blend = N7.white;
    }
    this.vsin++;
    if (this.altmode === 0 || this.altmode === 2 || this.altmode === 3) {
      this.y += N2(this.vsin / 10) * 3.5;
    }
    if (this.altmode === 1) {
      this.y -= N2(this.vsin / 10) * 3.5;
    }
  }
};
Nc(NO, "obj_carouselbullet");
e(NO, "kinds", NN("obj_carouselbullet", Nl));
e(NO, "defaultDepth", 0);
e(NO, "defaultSprite", "spr_carousel");
var NQ = NO;
var Nm = class yd extends ND {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.visible = false;
    this.ringno = 0;
    this.maxspade = 8;
    this.t = 0;
    this.con = 0;
    this.startspade = 0;
    this.spadet = 0;
    this.startang = N8(360);
    this.grav = 0.2;
    this.size = 1;
    this.special = 0;
    this.side = 0;
    this.spade = [];
  }
  step() {
    let NP = NE.first("obj_battlesolid");
    let Nt = NP ? NP.x : 320;
    let Nx = NP ? NP.y : 170;
    if (this.t === 0) {
      if (this.size > 1) {
        this.startang = -N8(180);
      }
      for (let NL = 0; NL < this.maxspade; NL++) {
        let NF = 360 / this.maxspade * NL + this.startang;
        if (this.side === 1) {
          NF = -NF;
        }
        let y3 = Nw(300, NF + 180);
        let y4 = NI(300, NF + 180);
        let y5 = N5(y3 + Nt, y4 + Nx, NC);
        Nf(this, y5);
        y5.sprite_index = "spr_spadebullet";
        y5.image_alpha = 0;
        y5.active = 1;
        y5.image_blend = N7.ltgray;
        y5.direction = NF;
        y5.image_angle = NF;
        y5.speed = 26;
        y5.image_xscale = this.size;
        y5.image_yscale = this.size;
        this.spade[NL] = y5;
      }
    }
    if (this.t >= 1 && this.t < 15) {
      for (let y6 of this.spade) {
        if (!y6.destroyed) {
          y6.speed *= 0.87;
          y6.image_alpha += 0.1;
        }
      }
    }
    if (this.t === 15) {
      for (let y7 of this.spade) {
        if (!y7.destroyed) {
          y7.speed = 0;
          y7.image_alpha += 0.1;
        }
      }
    }
    if (this.t >= 15 && this.con === 0 && (this.spadet++, this.special === 1 && (this.spadet += 6), this.spadet >= 4)) {
      let y8 = this.spade[this.startspade];
      if (y8 && !y8.destroyed) {
        y8.image_blend = N7.white;
        y8.gravity_direction = y8.direction;
        y8.speed = -3.4;
        y8.gravity = this.grav;
      }
      this.startspade++;
      if (this.startspade >= this.maxspade) {
        this.con = 1;
        this.instance_destroy();
      }
      this.spadet = 0;
    }
    this.t++;
  }
};
Nc(Nm, "obj_spadering");
e(Nm, "kinds", NN("obj_spadering", ND));
e(Nm, "defaultDepth", 0);
var NU = Nm;
var NK = class yE extends ND {
  create() {
    this.fire = 0;
    this.special = 0;
    this.con = 0;
    this.image_xscale = 0;
    this.image_speed = 0;
    this.timer = 0;
    this.image_yscale = 2;
    this.type = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 2;
    this.inv = 60;
    this.grazetimer = 0;
    this.target = 0;
    this.sndcon = 0;
    if (this.x < 320) {
      this.sprite_index = "spr_joker_teleport_r";
    }
  }
  step() {
    let NP = NE.first("obj_heart");
    if (this.con === 0) {
      if (this.sndcon === 0) {
        N6("snd_swing");
        this.sndcon = 1;
      }
      this.image_index = 0;
      if (this.image_xscale < 2) {
        this.image_xscale += 0.4;
      } else {
        this.image_xscale = 2;
        this.con = 1;
        this.timer = 0;
      }
    }
    if (this.con === 1 && (this.timer++, this.timer >= 8)) {
      if (this.sndcon === 1 && this.type < 3) {
        N6("snd_joker_oh");
        this.sndcon = 2;
      }
      this.image_index = 1;
      this.con = 2;
      this.timer = 0;
      if (this.type === 0) {
        let Nt = N5(this.x, this.y, NC);
        Nt.sprite_index = "spr_diamondbullet";
        Nt.active = 1;
        Nf(this, Nt);
        Nt.move_towards_point(NP ? NP.x + 10 : 320, NP ? NP.y + 10 : 170, 8);
        Nt.image_angle = Nt.direction;
        Nt.image_xscale = 0.7;
        Nt.image_yscale = 0.7;
      }
      if (this.type === 1) {
        for (let Nx = 0; Nx < 5; Nx++) {
          let NL = N5(this.x, this.y, NC);
          NL.sprite_index = "spr_spadebullet";
          NL.active = 1;
          NL.offset = Nx * 18;
          Nf(this, NL);
          NL.move_towards_point(NP ? NP.x + 10 : 320, NP ? NP.y + 10 : 170, 4.5);
          NL.direction = NL.direction - 36 + NL.offset;
          NL.image_angle = NL.direction;
          NL.image_xscale = 0.4;
          NL.image_yscale = 0.4;
        }
      }
    }
    if (this.con === 2) {
      this.timer++;
      if (this.timer >= 10) {
        this.con = 4;
        this.timer = 0;
      }
    }
    if (this.con === 4) {
      if (this.sndcon === 2) {
        N6("snd_swing");
        this.sndcon = 3;
      }
      if (this.image_xscale > 0) {
        this.image_xscale -= 0.4;
        this.image_yscale += 0.2;
      } else {
        this.image_xscale = 0;
        this.con = 0;
        this.instance_destroy();
      }
    }
  }
};
Nc(NK, "obj_joker_teleport");
e(NK, "kinds", NN("obj_joker_teleport", ND));
e(NK, "defaultDepth", 5);
e(NK, "defaultSprite", "spr_joker_teleport");
var Nq = NK;
var Nb = class yh extends ND {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.dtimer = 0;
    this.type = 0;
    this.initangle = 0;
  }
  step() {
    this.dtimer++;
    let NP = NE.first("obj_heart");
    if (this.type === 2) {
      if (this.dtimer === 20 || this.dtimer === 22 || this.dtimer === 24) {
        this.move_towards_point(NP ? NP.x + 8 : 320, NP ? NP.y + 8 : 170, 0.1);
        let Nt = (Nx, NL) => {
          let NF = N5(this.x, this.y, NV);
          if (!NF.destroyed) {
            NF.sprite_index = Nx;
            NF.direction = this.direction + NL - 2 + this.initangle;
            NF.speed = 5;
            NF.image_angle = this.direction;
            Nf(this, NF);
          }
        };
        Nt("spr_clubsball_b", 0);
        Nt("spr_clubsball_c", -19);
        Nt("spr_clubsball_a", 19);
        this.initangle += 2;
      }
      if (this.dtimer === 26) {
        let Nx = N5(this.x, this.y, m);
        Nx.sprite_index = this.sprite_index;
        Nx.image_angle = this.image_angle;
        Nx.fadespeed = 0.04;
        this.instance_destroy();
      }
    }
  }
};
Nc(Nb, "obj_clubsbullet_dark");
e(Nb, "kinds", NN("obj_clubsbullet_dark", ND));
e(Nb, "defaultDepth", -10);
e(Nb, "defaultSprite", "spr_clubsbullet_dark");
var Ne = Nb;
var NB = class yc extends Nl {
  create() {
    this.grazed = 0;
    this.grazepoints = 3;
    this.timepoints = 2;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.grazetimer = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.image_xscale = 1;
    this.image_yscale = 1;
    this.rotspeed = 0;
    this.insanity = 1;
    this.chasecon = 1;
    this.chasetimer = 0;
    this.centerx = 320;
    this.centery = 120;
    let NP = NE.first("obj_battlesolid");
    if (NP) {
      this.centerx = NP.x;
      this.centery = NP.y;
    }
    this.radius = 150;
    this.sine = 0;
    this.sinespeed = 1.4;
    this.dir = N8(70);
    this.dirspeed = Ny(1, -1) * 1.5;
    this.un = 0;
    this.scythetimer = -5;
    this.scythesidex = 1;
    this.swingnoise = 0;
    this.noisebuffer = 0;
    this.type = 0;
    let Nt = NE.first("obj_dbulletcontroller");
    if (Nt && Nt.type === 76) {
      this.type = 1;
    }
    this.king = 0;
    if (this.type === 1) {
      this.insanity = 0;
      this.sinespeed = 1.3;
      this.scythesidex = Ny(1, -1);
    }
    if (NE.number("obj_centerscythe") === 1) {
      this.king = 1;
      this.x = this.centerx - this.radius;
      this.y = this.centery;
      let Nx = N5(this.centerx + this.radius, this.centery, yc);
      Nx.sine = 0;
      Nx.dir = 180;
      Nx.un = 1;
      let NL = N5(this.centerx, this.centery - this.radius, yc);
      NL.sine = 0;
      NL.dir = 90;
      NL.un = 0;
      let NF = N5(this.centerx, this.centery + this.radius, yc);
      NF.sine = 0;
      NF.dir = 270;
      NF.un = 1;
      let y3 = this.dir;
      NE.with("obj_centerscythe", y4 => {
        y4.mydir = y3;
        y4.sinespeed = this.sinespeed;
        y4.dirspeed = this.dirspeed;
        y4.insanity = this.insanity;
      });
      NE.with("obj_centerscythe", y4 => {
        if (y4.dir !== y4.mydir) {
          y4.dir += y4.mydir;
        }
        y4.x = y4.centerx - Nw(y4.radius, y4.dir);
        y4.y = y4.centery - NI(y4.radius, y4.dir);
      });
    }
    this.wall_destroy = 0;
  }
  step() {
    if (this.chasecon === 1) {
      this.image_alpha += 0.04;
      if (this.image_alpha >= 1) {
        this.image_alpha = 1;
        this.chasecon = 2;
        this.active = 1;
      }
    }
    if (this.chasecon === 2) {
      if (this.un === 0 && this.rotspeed <= 10) {
        this.rotspeed++;
      }
      if (this.un === 1 && this.rotspeed >= -10) {
        this.rotspeed--;
      }
      this.sine += this.sinespeed;
      this.dir += this.dirspeed;
      if (this.insanity === 1) {
        if (this.dirspeed > 0 && this.dirspeed < 3) {
          this.dirspeed += 0.01;
        }
        if (this.dirspeed < 0 && this.dirspeed > -3) {
          this.dirspeed -= 0.01;
        }
      }
      let NP = N3(this.sine / 18) * this.radius;
      this.x = this.centerx - Nw(NP, this.dir);
      this.y = this.centery - NI(NP, this.dir);
      if (this.king === 1) {
        this.noisebuffer--;
        if (Math.abs(NP) <= 8 && this.noisebuffer < 0) {
          N6("snd_swing");
          this.noisebuffer = 10;
        }
      }
    }
    if (this.king === 1 && this.type === 1) {
      this.scythetimer++;
      if (this.scythetimer === 60) {
        N6("snd_spearappear");
        let Nx = N5(this.centerx + this.radius * this.scythesidex, this.centery + this.scythesidex * 60, NC);
        Nx.image_xscale = 2;
        Nx.image_yscale = 2;
        Nx.image_alpha = 0;
        Nx.sprite_index = "spr_joker_scythebody";
        Nx.mask_index = "spr_joker_scythebody_mask";
        Nx.image_blend = N7.red;
        Nx.active = 1;
        Nf(this, Nx);
        this.sbul = Nx;
      }
      let Nt = this.sbul;
      if (this.scythetimer >= 60 && this.scythetimer < 70 && Nt && !Nt.destroyed) {
        Nt.image_angle += this.scythesidex * 10;
        Nt.image_alpha += 0.1;
      }
      if (this.scythetimer >= 85 && this.scythetimer < 90 && Nt && !Nt.destroyed) {
        Nt.hspeed -= this.scythesidex * 3;
      }
      if (this.scythetimer >= 100 && this.scythetimer < 105 && Nt && !Nt.destroyed) {
        Nt.image_alpha -= 0.2;
      }
      if (this.scythetimer >= 105) {
        if (Nt && !Nt.destroyed) {
          Nt.instance_destroy();
        }
        this.scythesidex = this.scythesidex === -1 ? 1 : -1;
        this.scythetimer = 59;
      }
    }
    this.image_angle += this.rotspeed;
    if (this.grazed === 1) {
      this.grazetimer++;
      if (this.grazetimer >= 30) {
        this.grazed = 0;
        this.grazetimer = 0;
      }
    }
  }
};
Nc(NB, "obj_centerscythe");
e(NB, "kinds", NN("obj_centerscythe", Nl));
e(NB, "defaultDepth", 0);
e(NB, "defaultSprite", "spr_joker_scythebody");
e(NB, "defaultMask", "spr_joker_scythebody_mask");
var Nk = NB;
var NT = class yi extends Nl {
  create() {
    this.grazed = 0;
    this.grazepoints = 15;
    this.timepoints = 0;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 1;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_angle = N8(360);
    this.rotspeed = 14;
    this.vspeed = 5;
    this.mask_index = "spr_joker_scythebody_mask";
    this.gravity = 1;
    this.explode = 0;
    this.explodetimer = 0;
    this.remrot = this.image_angle;
    this.remy = this.y;
    this.remx = this.x;
    this.scale = 2;
    this.wall_destroy = 0;
  }
  step() {
    if (this.explode === 0) {
      this.remx = this.x;
      this.remy = this.y;
      this.image_angle += this.rotspeed;
      this.remrot = this.image_angle;
    }
    if (this.y >= 380 && this.explode === 0) {
      N6("snd_scytheburst");
      this.remx = this.x;
      this.remy = this.y;
      this.explode = 1;
      this.explodetimer = 0;
      this.remrot = this.image_angle;
      this.image_angle = 0;
      this.speed = 0;
      this.gravity = 0;
      this.mask_index = "spr_tallpx";
      this.sprite_index = "spr_tallpx";
      this.grazed = 0;
      this.y = 0;
      this.depth += 1;
    }
    if (this.explode === 1) {
      this.active = 0;
      this.image_xscale += 8;
      if (this.image_xscale >= 16) {
        this.active = 1;
      }
      if (this.image_xscale >= 32) {
        this.explode = 2;
      }
    }
    if (this.explode === 2) {
      this.image_xscale -= 4;
      if (this.image_xscale <= 16) {
        this.image_alpha -= 0.25;
        this.active = 0;
      }
      if (this.image_xscale <= 0) {
        this.instance_destroy();
      }
    }
    if (this.grazed === 1) {
      NE.with("obj_dbulletcontroller", NP => {
        NP.made += 0.2;
      });
      this.grazed = 2;
    }
  }
  draw(NP) {
    if (this.explode < 2) {
      NP.draw_sprite_ext("spr_joker_scythebody", this.image_index, this.remx, this.remy, this.scale, this.scale, this.remrot, N7.white, 1);
    }
    if (this.explode >= 1) {
      this.draw_self(NP);
    }
  }
  userEvent(NP) {
    if (NP === 5 && this.active === 1 && N1.inv < 0) {
      if (NE.first("obj_battlecontroller")) {
        NE.first("obj_battlecontroller").shakeReq = 1;
      }
      N6("snd_hurt1");
      N1.inv = N1.invc * 40;
      let Nt = [0, 1, 2].map(Nx => Math.max(0, N1.hp[N1.char[Nx]]));
      if (Nh(Nt[0] + Nt[1] + Nt[2]) / 3 >= 10) {
        for (let Nx = 0; Nx < 3; Nx++) {
          if (Nt[Nx] > 0) {
            N1.hp[N1.char[Nx]] = Nh(N1.hp[N1.char[Nx]] * 0.7);
          }
        }
      } else {
        N0(this);
      }
    }
  }
};
Nc(NT, "obj_laserscythe");
e(NT, "kinds", NN("obj_laserscythe", Nl));
e(NT, "defaultDepth", -5);
e(NT, "defaultSprite", "spr_joker_scythebody");
var NH = NT;
export { Nf as a, No as b, ND as c, NM as d, NC as e, NV as f, Nl as g, NZ as h, NR as i, Nu as j, Nn as k, NQ as l, NU as m, Nq as n, Ne as o, Nk as p, NH as q };
