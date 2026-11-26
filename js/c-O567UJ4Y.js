import { a as f, d as X, f as s, h as m, j as U, l as V, m as e, n as J, o as a, p as Q, q as i } from "./c-DTW63MWW.js";
import { a as I, d as Z } from "./c-MYK6C3LF.js";
import { H as j, g as r } from "./c-ZQQWH6UG.js";
import { Ib as t, Ra as b0, h as b1, o, qb as b2, r as b3, s as b4, t as b5, xb as b6, z as b7 } from "./c-PBMEVLU6.js";
import { a as b8, e as b9, l as bb } from "./c-XSSGDLV7.js";
bb();
var bB = {};
function bH(bc) {
  Object.assign(bB, bc);
}
b8(bH, "registerControllerTypes");
var bO = class bN extends X {
  create() {
    this.btimer = 99;
    this.timermax = 12;
    this.difficulty = 1;
    this.type = 1;
    this.joker = 0;
    this.side = 1;
    this.damage = 100;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.inv = 60;
    this.grazed = 0;
    this.grazetimer = 0;
    this.target = 0;
    this.made = 0;
    this.special = 0;
    this.miny = 150;
    this.maxy = 280;
    let bc = b6.first("obj_growtangle");
    if (bc) {
      this.miny = bc.y - bc.sprite_height / 2;
      this.maxy = bc.y + bc.sprite_height / 2;
    }
    this.ratio = 1;
    if (j() === 2) {
      this.ratio = 1.6;
    }
    if (j() === 3) {
      this.ratio = 2.3;
    }
    this.visible = false;
  }
  step() {
    this.btimer++;
    let bc = b6.first("obj_heart");
    let bz = b6.first("obj_battlesolid");
    let bG = bz ? bz.x : 320;
    let bx = bz ? bz.y : 170;
    let bS = bB[this.type];
    if (bS) {
      bS(this, {
        heart: bc,
        bs: bz,
        bsx: bG,
        bsy: bx
      });
      return;
    }
    if (this.type === 14 && this.btimer >= 10) {
      let bg = -20;
      if (this.side === 1) {
        bg = 660;
      }
      let bn = this.miny + o(this.maxy - this.miny);
      let by = t(bg, bn, s);
      by.sprite_index = "spr_smallbullet";
      by.hspeed = -8;
      by.damage = this.damage;
      by.target = this.target;
      if (this.side === 1) {
        by.direction = 180;
        by.image_angle = 180;
      }
      this.btimer = 0;
    }
    if (this.joker !== 1) {
      return;
    }
    let bF = bY => {
      let bM = b3(0, 1);
      let bp = bG;
      let bK = bM === 0 ? bp - 180 - o(100) : bp + 180 + o(100);
      let bh = t(bK, -20, U);
      f(this, bh);
      bY(bh);
      this.btimer = 0;
    };
    if (this.type === 45 && this.btimer >= 18) {
      bF(bY => {
        if (bY.type === 2) {
          bY.type = b3(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 46 && this.btimer >= 12) {
      bF(bY => {
        if (bY.type === 2) {
          bY.type = b3(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 47 && this.btimer >= 12) {
      bF(bY => {
        bY.type = 1;
      });
    }
    if (this.type === 48 && this.btimer >= 12) {
      bF(bY => {
        bY.type = 0;
      });
    }
    if (this.type === 49 && this.btimer >= 20) {
      bF(bY => {
        bY.type = 2;
      });
    }
    if (this.type === 50 && this.btimer >= 12) {
      bF(bY => {
        bY.type = 3;
      });
    }
    if (this.type === 61 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      let bY = o(300);
      for (let bM = 0; bM < 3; bM++) {
        for (let bp = 0; bp < 3; bp++) {
          let bK = t(bG + 150, bx - 80 + bp * 80, V);
          bK.siner = bM * 42;
          bK.vsin = bY;
          bK.image_index = 0;
          bK.altmode = 2;
          bK.sinspeed = 1.1;
          f(this, bK);
          bK = t(bG + 150, bx - 80 + bp * 80, V);
          bK.siner = bM * 42 + 21;
          bK.vsin = bY;
          bK.image_index = 1;
          bK.altmode = 1;
          bK.sinspeed = 1.1;
          f(this, bK);
          if (b7(o(50)) === 1) {
            bK.image_index = 2;
          }
        }
      }
    }
    if (this.type === 62 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      for (let bh = 0; bh < 3; bh++) {
        for (let bf = 0; bf < 7; bf++) {
          let bP = t(bG + 150, bx - 80 + bh * 80, V);
          bP.siner = bf * 18;
          bP.vsin = bf * 9;
          bP.sinspeed = 1.15;
          bP.altmode = 3;
          f(this, bP);
        }
      }
    }
    if (this.type === 65 && this.btimer >= 60) {
      let bk = t(bG, bx, e);
      bk.maxspade = 10;
      bk.grav = 0.4;
      f(this, bk);
      this.btimer = 0;
    }
    if (this.type === 68 && (bc && (bc.wspeed = 5), this.btimer >= 54)) {
      let bW = t(bG, bx, e);
      bW.side = b3(0, 1);
      bW.grav = 0.45;
      bW.maxspade = 10;
      f(this, bW);
      this.btimer = 0;
    }
    if (this.type === 70 && this.btimer >= 20 && r.turntimer >= 30) {
      let bX = b3(bG - 100 - o(100), bG + 100 + o(100));
      let bs = b3(bx - o(100), bx + o(100));
      let bm = t(bX, bs, J);
      bm.type = 1;
      f(this, bm);
      bm.active = 0;
      this.btimer = 0;
    }
    if (this.type === 71 && this.btimer >= 9 && r.turntimer >= 20) {
      let bw = b3(bG - 100 - o(100), bG + 100 + o(100));
      let bU = b3(bx - o(100), bx + o(100));
      let bV = t(bw, bU, J);
      f(this, bV);
      bV.active = 0;
      this.btimer = 0;
    }
    if (this.type === 72 && this.btimer >= 18) {
      this.btimer = 0;
      let bv = 0;
      if (this.side === 1) {
        bv = b3(225, 315);
      }
      if (this.side === -1) {
        bv = b3(45, 135);
      }
      let bD = 360;
      let bR = b4(bD, bv);
      let be = b5(bD, bv);
      let bA = bc ? bc.x : 310;
      let bJ = bc ? bc.y : 160;
      let bd = t(bA + 8 + bR, bJ + 8 + be, a);
      bd.direction = bv + 180;
      bd.speed = 20;
      bd.friction = 1;
      bd.type = 2;
      bd.damage = this.damage;
      bd.target = this.target;
      bd.image_angle = bd.direction;
      this.side = this.side === 1 ? -1 : 1;
    }
    if (this.type === 73 && this.btimer >= 4) {
      this.btimer = 0;
      let ba = -100 + o(200);
      if (b3(0, 1, 2, 3) === 3) {
        ba = -10 + o(20);
      }
      if (bz && bc) {
        let bC = t(bc.x + 8 + ba, bx + 100, m);
        bC.type = 1;
        bC.damage = this.damage;
        bC.target = this.target;
        bC.timepoints = 2;
      }
    }
    if (this.type === 74 && this.btimer >= 9) {
      this.btimer = 0;
      let bE = (140 + o(40)) * this.side;
      let bu = -100 + o(200);
      if (b3(0, 1, 2, 3) === 3) {
        bu = -10 + o(20);
      }
      if (bc) {
        let bQ = t(bc.x + 8 + bu, bc.y + 8 + bE, m);
        bQ.grazepoints = 12;
        bQ.timepoints = 2;
        bQ.damage = this.damage;
        bQ.target = this.target;
      }
    }
    if ((this.type === 75 || this.type === 76) && this.btimer >= 0 && this.special === 0) {
      b0("snd_spearappear");
      t(0, 0, Q);
      b6.with("obj_centerscythe", bi => {
        bi.damage = this.damage;
        bi.grazepoints = this.grazepoints;
        bi.timepoints = this.timepoints;
        bi.inv = this.inv;
        bi.target = this.target;
        bi.grazed = 0;
        bi.grazetimer = 0;
      });
      this.special = 1;
    }
    if (this.type === 77) {
      this.finalChaos(bc, bz);
    }
  }
  finalChaos(bc, bz) {
    r.sp = 10;
    if (bc) {
      bc.wspeed = 10;
    }
    if (this.special === 0) {
      b0("snd_joker_byebye");
      this.prevmake = 0;
      this.special = 1;
      this.rank = 16;
      this.realtimer = 0;
      this.chase = 0;
      this.made = 0;
      this.amount = 0;
      this.jokertimer = 0;
      this.darkfader = Z(320, -10, "spr_tallpx");
      Object.assign(this.darkfader, {
        depth: 2,
        image_alpha: 0,
        image_blend: b1.black,
        image_xscale: 200,
        image_yscale: 2
      });
    }
    let bG = this.realtimer;
    if (bG >= 0 && bG < 10) {
      this.darkfader.image_alpha += 0.1;
      b6.with("obj_battlesolid", bx => {
        bx.image_alpha -= 0.1;
      });
      if (bc) {
        bc.y += 16;
        bc.boundaryup = 160;
      }
    }
    if (bG === 10) {
      b6.with("obj_battlesolid", bx => bx.instance_destroy());
    }
    if (bG === 20) {
      t(40, -60, i);
    }
    if (bG === 40) {
      t(570, -60, i);
    }
    if (bG >= 60 && this.amount < 30 && this.btimer >= this.rank) {
      if (this.rank > 7) {
        this.rank--;
      }
      let bx = b7(o(5));
      if (bx === this.prevmake) {
        bx = b7(o(5));
      }
      if (this.chase === 3) {
        bx = b7(((bc ? bc.x : 320) + 8) / 90);
        this.chase = 0;
      }
      t(40 + bx * 90, -60, i);
      if (bx === 1) {
        t(490, -60, i);
      }
      if (bx === 0) {
        t(580, -60, i);
      }
      this.prevmake = bx;
      this.btimer = 0;
      this.chase++;
      this.amount++;
    }
    if (this.amount >= 29 - this.made && this.special === 1) {
      this.jokertimer = 0;
      let bS = t(320, 100, J);
      bS.type = 66;
      bS.depth = -30;
      this.special = 2;
    }
    if (this.special === 2) {
      this.jokertimer++;
      let bF = this.jokertimer;
      if (bF === 10) {
        b0("snd_joker_neochaos");
      }
      if (bF === 40 || bF === 98) {
        t(40, -60, i);
        t(580, -60, i);
      }
      if (bF === 46 || bF === 86) {
        t(130, -60, i);
        t(490, -60, i);
      }
      if (bF === 52 || bF === 80) {
        t(220, -60, i);
        t(400, -60, i);
      }
      if (bF === 66 || bF === 98) {
        t(310, -60, i);
      }
      if (bF === 130) {
        let bg = t(320, -320, i);
        this.lastscythe = bg;
        this.vol = 0;
        this.rumnoise = b0("snd_rumble", {
          volume: 0
        });
        Object.assign(bg, {
          vspeed: 1,
          gravity: 0.02,
          image_xscale: 16,
          image_yscale: 16,
          scale: 16,
          rotspeed: 0,
          remrot: 160,
          image_angle: 160
        });
        let bn = t(320, -40, I);
        bn.sprite_index = "spr_tallpx";
        bn.image_xscale = 400;
        bn.image_yscale = 2;
        bn.depth = -100;
        bn.image_alpha = -0.3;
        this.fadewhite = bn;
      }
      if (bF >= 131) {
        let by = this.lastscythe;
        let bY = this.fadewhite;
        if (by && !by.destroyed) {
          by.x = by.xstart + o(8);
        }
        bY.image_alpha += 0.01;
        this.vol += 0.01;
        if (this.rumnoise) {
          this.rumnoise.volume = Math.min(1, this.vol);
        }
        if (bY.image_alpha >= 1) {
          if (this.darkfader && !this.darkfader.destroyed) {
            this.darkfader.instance_destroy();
          }
          if (by && !by.destroyed) {
            by.instance_destroy();
          }
        }
        if (bY.image_alpha >= 1.3) {
          this.special = 3;
        }
      }
    }
    if (this.special === 3) {
      if (bc) {
        bc.x = 320;
        bc.y = 120;
      }
      this.vol -= 0.1;
      if (this.rumnoise) {
        this.rumnoise.volume = Math.max(0, Math.min(1, this.vol));
      }
      this.fadewhite.image_alpha -= 0.1;
      if (this.fadewhite.image_alpha <= 0) {
        if (this.rumnoise) {
          this.rumnoise.pause();
        }
        r.turntimer = 11;
        this.special = 4;
      }
    }
    this.realtimer++;
  }
  destroy() {
    if (this.rumnoise) {
      this.rumnoise.pause();
    }
    if (this.fadewhite && !this.fadewhite.destroyed) {
      this.fadewhite.instance_destroy();
    }
    if (this.darkfader && !this.darkfader.destroyed) {
      this.darkfader.instance_destroy();
    }
  }
};
b8(bO, "obj_dbulletcontroller");
b9(bO, "kinds", b2("obj_dbulletcontroller", X));
b9(bO, "defaultDepth", 0);
var bo = bO;
export { bB as a, bH as b, bo as c };
