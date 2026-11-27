import { a as f, d as X, f as s, h as m, j as U, l as V, m as e, n as J, o as a, p as Q, q as i } from './c-DTW63MWW.js';
import { a as I, d as Z } from './c-MYK6C3LF.js';
import { H as j, g as r } from './c-ZQQWH6UG.js';
import { Ib as t, Ra as b0, h as b1, o, qb as b2, r as b3, s as b4, t as b5, xb as b6, z as b7 } from './c-PBMEVLU6.js';
import { a as b8, e as b9, l as bb } from './c-XSSGDLV7.js';
bb();
var bB = {};
function bH(bc) {
  Object.assign(bB, bc);
}
b8(bH, 'registerControllerTypes');
var bO = class bN extends X {
  ["create"]() {
    this.btimer = 0x63, this.timermax = 0xc, this.difficulty = 0x1, this.type = 0x1, this.joker = 0x0, this.side = 0x1, this.damage = 0x64, this.grazepoints = 0x1, this.timepoints = 0x1, this.inv = 0x3c, this.grazed = 0x0, this.grazetimer = 0x0, this.target = 0x0, this.made = 0x0, this.special = 0x0, this.miny = 0x96, this.maxy = 0x118;
    let bc = b6.first('obj_growtangle');
    bc && (this.miny = bc.y - bc.sprite_height / 0x2, this.maxy = bc.y + bc.sprite_height / 0x2), this.ratio = 0x1, j() === 0x2 && (this.ratio = 1.6), j() === 0x3 && (this.ratio = 2.3), this.visible = false;
  }
  ["step"]() {
    this.btimer++;
    let bc = b6.first('obj_heart'),
      bz = b6.first('obj_battlesolid'),
      bG = bz ? bz.x : 0x140,
      bx = bz ? bz.y : 0xaa,
      bS = bB[this.type];
    if (bS) {
      bS(this, {
        'heart': bc,
        'bs': bz,
        'bsx': bG,
        'bsy': bx
      });
      return;
    }
    if (this.type === 0xe && this.btimer >= 0xa) {
      let bg = -0x14;
      this.side === 0x1 && (bg = 0x294);
      let bn = this.miny + o(this.maxy - this.miny),
        by = t(bg, bn, s);
      by.sprite_index = 'spr_smallbullet', by.hspeed = -0x8, by.damage = this.damage, by.target = this.target, this.side === 0x1 && (by.direction = 0xb4, by.image_angle = 0xb4), this.btimer = 0x0;
    }
    if (this.joker !== 0x1) return;
    let bF = bY => {
      let bM = b3(0x0, 0x1),
        bp = bG,
        bK = bM === 0x0 ? bp - 0xb4 - o(0x64) : bp + 0xb4 + o(0x64),
        bh = t(bK, -0x14, U);
      f(this, bh), bY(bh), this.btimer = 0x0;
    };
    if (this.type === 0x2d && this.btimer >= 0x12 && bF(bY => {
      bY.type === 0x2 && (bY.type = b3(0x0, 0x1, 0x2, 0x3));
    }), this.type === 0x2e && this.btimer >= 0xc && bF(bY => {
      bY.type === 0x2 && (bY.type = b3(0x0, 0x1, 0x2, 0x3));
    }), this.type === 0x2f && this.btimer >= 0xc && bF(bY => {
      bY.type = 0x1;
    }), this.type === 0x30 && this.btimer >= 0xc && bF(bY => {
      bY.type = 0x0;
    }), this.type === 0x31 && this.btimer >= 0x14 && bF(bY => {
      bY.type = 0x2;
    }), this.type === 0x32 && this.btimer >= 0xc && bF(bY => {
      bY.type = 0x3;
    }), this.type === 0x3d && this.btimer >= 0x28 && this.made === 0x0) {
      this.btimer = 0x0, this.made = 0x1;
      let bY = o(0x12c);
      for (let bM = 0x0; bM < 0x3; bM++) for (let bp = 0x0; bp < 0x3; bp++) {
        let bK = t(bG + 0x96, bx - 0x50 + bp * 0x50, V);
        bK.siner = bM * 0x2a, bK.vsin = bY, bK.image_index = 0x0, bK.altmode = 0x2, bK.sinspeed = 1.1, f(this, bK), bK = t(bG + 0x96, bx - 0x50 + bp * 0x50, V), bK.siner = bM * 0x2a + 0x15, bK.vsin = bY, bK.image_index = 0x1, bK.altmode = 0x1, bK.sinspeed = 1.1, f(this, bK), b7(o(0x32)) === 0x1 && (bK.image_index = 0x2);
      }
    }
    if (this.type === 0x3e && this.btimer >= 0x28 && this.made === 0x0) {
      this.btimer = 0x0, this.made = 0x1;
      for (let bh = 0x0; bh < 0x3; bh++) for (let bf = 0x0; bf < 0x7; bf++) {
        let bP = t(bG + 0x96, bx - 0x50 + bh * 0x50, V);
        bP.siner = bf * 0x12, bP.vsin = bf * 0x9, bP.sinspeed = 1.15, bP.altmode = 0x3, f(this, bP);
      }
    }
    if (this.type === 0x41 && this.btimer >= 0x3c) {
      let bk = t(bG, bx, e);
      bk.maxspade = 0xa, bk.grav = 0.4, f(this, bk), this.btimer = 0x0;
    }
    if (this.type === 0x44 && (bc && (bc.wspeed = 0x5), this.btimer >= 0x36)) {
      let bW = t(bG, bx, e);
      bW.side = b3(0x0, 0x1), bW.grav = 0.45, bW.maxspade = 0xa, f(this, bW), this.btimer = 0x0;
    }
    if (this.type === 0x46 && this.btimer >= 0x14 && r.turntimer >= 0x1e) {
      let bX = b3(bG - 0x64 - o(0x64), bG + 0x64 + o(0x64)),
        bs = b3(bx - o(0x64), bx + o(0x64)),
        bm = t(bX, bs, J);
      bm.type = 0x1, f(this, bm), bm.active = 0x0, this.btimer = 0x0;
    }
    if (this.type === 0x47 && this.btimer >= 0x9 && r.turntimer >= 0x14) {
      let bw = b3(bG - 0x64 - o(0x64), bG + 0x64 + o(0x64)),
        bU = b3(bx - o(0x64), bx + o(0x64)),
        bV = t(bw, bU, J);
      f(this, bV), bV.active = 0x0, this.btimer = 0x0;
    }
    if (this.type === 0x48 && this.btimer >= 0x12) {
      this.btimer = 0x0;
      let bv = 0x0;
      this.side === 0x1 && (bv = b3(0xe1, 0x13b)), this.side === -0x1 && (bv = b3(0x2d, 0x87));
      let bD = 0x168,
        bR = b4(bD, bv),
        be = b5(bD, bv),
        bA = bc ? bc.x : 0x136,
        bJ = bc ? bc.y : 0xa0,
        bd = t(bA + 0x8 + bR, bJ + 0x8 + be, a);
      bd.direction = bv + 0xb4, bd.speed = 0x14, bd.friction = 0x1, bd.type = 0x2, bd.damage = this.damage, bd.target = this.target, bd.image_angle = bd.direction, this.side = this.side === 0x1 ? -0x1 : 0x1;
    }
    if (this.type === 0x49 && this.btimer >= 0x4) {
      this.btimer = 0x0;
      let ba = -0x64 + o(0xc8);
      if (b3(0x0, 0x1, 0x2, 0x3) === 0x3 && (ba = -0xa + o(0x14)), bz && bc) {
        let bC = t(bc.x + 0x8 + ba, bx + 0x64, m);
        bC.type = 0x1, bC.damage = this.damage, bC.target = this.target, bC.timepoints = 0x2;
      }
    }
    if (this.type === 0x4a && this.btimer >= 0x9) {
      this.btimer = 0x0;
      let bE = (0x8c + o(0x28)) * this.side,
        bu = -0x64 + o(0xc8);
      if (b3(0x0, 0x1, 0x2, 0x3) === 0x3 && (bu = -0xa + o(0x14)), bc) {
        let bQ = t(bc.x + 0x8 + bu, bc.y + 0x8 + bE, m);
        bQ.grazepoints = 0xc, bQ.timepoints = 0x2, bQ.damage = this.damage, bQ.target = this.target;
      }
    }
    (this.type === 0x4b || this.type === 0x4c) && this.btimer >= 0x0 && this.special === 0x0 && (b0('snd_spearappear'), t(0x0, 0x0, Q), b6.with('obj_centerscythe', bi => {
      bi.damage = this.damage, bi.grazepoints = this.grazepoints, bi.timepoints = this.timepoints, bi.inv = this.inv, bi.target = this.target, bi.grazed = 0x0, bi.grazetimer = 0x0;
    }), this.special = 0x1), this.type === 0x4d && this.finalChaos(bc, bz);
  }
  ["finalChaos"](bc, bz) {
    r.sp = 0xa, bc && (bc.wspeed = 0xa), this.special === 0x0 && (b0('snd_joker_byebye'), this.prevmake = 0x0, this.special = 0x1, this.rank = 0x10, this.realtimer = 0x0, this.chase = 0x0, this.made = 0x0, this.amount = 0x0, this.jokertimer = 0x0, this.darkfader = Z(0x140, -0xa, 'spr_tallpx'), Object.assign(this.darkfader, {
      'depth': 0x2,
      'image_alpha': 0x0,
      'image_blend': b1.black,
      'image_xscale': 0xc8,
      'image_yscale': 0x2
    }));
    let bG = this.realtimer;
    if (bG >= 0x0 && bG < 0xa && (this.darkfader.image_alpha += 0.1, b6.with('obj_battlesolid', bx => {
      bx.image_alpha -= 0.1;
    }), bc && (bc.y += 0x10, bc.boundaryup = 0xa0)), bG === 0xa && b6.with('obj_battlesolid', bx => bx.instance_destroy()), bG === 0x14 && t(0x28, -0x3c, i), bG === 0x28 && t(0x23a, -0x3c, i), bG >= 0x3c && this.amount < 0x1e && this.btimer >= this.rank) {
      this.rank > 0x7 && this.rank--;
      let bx = b7(o(0x5));
      bx === this.prevmake && (bx = b7(o(0x5))), this.chase === 0x3 && (bx = b7(((bc ? bc.x : 0x140) + 0x8) / 0x5a), this.chase = 0x0), t(0x28 + 0x5a * bx, -0x3c, i), bx === 0x1 && t(0x1ea, -0x3c, i), bx === 0x0 && t(0x244, -0x3c, i), this.prevmake = bx, this.btimer = 0x0, this.chase++, this.amount++;
    }
    if (this.amount >= 0x1d - this.made && this.special === 0x1) {
      this.jokertimer = 0x0;
      let bS = t(0x140, 0x64, J);
      bS.type = 0x42, bS.depth = -0x1e, this.special = 0x2;
    }
    if (this.special === 0x2) {
      this.jokertimer++;
      let bF = this.jokertimer;
      if (bF === 0xa && b0('snd_joker_neochaos'), (bF === 0x28 || bF === 0x62) && (t(0x28, -0x3c, i), t(0x244, -0x3c, i)), (bF === 0x2e || bF === 0x56) && (t(0x82, -0x3c, i), t(0x1ea, -0x3c, i)), (bF === 0x34 || bF === 0x50) && (t(0xdc, -0x3c, i), t(0x190, -0x3c, i)), (bF === 0x42 || bF === 0x62) && t(0x136, -0x3c, i), bF === 0x82) {
        let bg = t(0x140, -0x140, i);
        this.lastscythe = bg, this.vol = 0x0, this.rumnoise = b0('snd_rumble', {
          'volume': 0x0
        }), Object.assign(bg, {
          'vspeed': 0x1,
          'gravity': 0.02,
          'image_xscale': 0x10,
          'image_yscale': 0x10,
          'scale': 0x10,
          'rotspeed': 0x0,
          'remrot': 0xa0,
          'image_angle': 0xa0
        });
        let bn = t(0x140, -0x28, I);
        bn.sprite_index = 'spr_tallpx', bn.image_xscale = 0x190, bn.image_yscale = 0x2, bn.depth = -0x64, bn.image_alpha = -0.3, this.fadewhite = bn;
      }
      if (bF >= 0x83) {
        let by = this.lastscythe,
          bY = this.fadewhite;
        by && !by.destroyed && (by.x = by.xstart + o(0x8)), bY.image_alpha += 0.01, this.vol += 0.01, this.rumnoise && (this.rumnoise.volume = Math.min(0x1, this.vol)), bY.image_alpha >= 0x1 && (this.darkfader && !this.darkfader.destroyed && this.darkfader.instance_destroy(), by && !by.destroyed && by.instance_destroy()), bY.image_alpha >= 1.3 && (this.special = 0x3);
      }
    }
    this.special === 0x3 && (bc && (bc.x = 0x140, bc.y = 0x78), this.vol -= 0.1, this.rumnoise && (this.rumnoise.volume = Math.max(0x0, Math.min(0x1, this.vol))), this.fadewhite.image_alpha -= 0.1, this.fadewhite.image_alpha <= 0x0 && (this.rumnoise && this.rumnoise.pause(), r.turntimer = 0xb, this.special = 0x4)), this.realtimer++;
  }
  ["destroy"]() {
    this.rumnoise && this.rumnoise.pause(), this.fadewhite && !this.fadewhite.destroyed && this.fadewhite.instance_destroy(), this.darkfader && !this.darkfader.destroyed && this.darkfader.instance_destroy();
  }
};
b8(bO, 'obj_dbulletcontroller'), b9(bO, 'kinds', b2('obj_dbulletcontroller', X)), b9(bO, 'defaultDepth', 0x0);
var bo = bO;
export { bB as a, bH as b, bo as c };