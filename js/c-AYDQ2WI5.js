const g = function () {
    let xZ = true;
    return function (xR, xi) {
      const xm = xZ ? function () {
        if (xi) {
          const xF = xi.apply(xR, arguments);
          return xi = null, xF;
        }
      } : function () {};
      return xZ = false, xm;
    };
  }(),
  k = g(this, function () {
    if (k.bind().toString().indexOf('\x0a') !== -0x1) return;
    return k.toString().search(".*").toString().constructor(k).search(".*");
  });
k();
import { Ed as o, F as y, Ha as l, Lp as a, Mo as j, No as Z, la as i, sf as m, v as A } from './c-F3KC5JBP.js';
import { a as r } from './c-QVGXLNTR.js';
import { a as E, c as v } from './c-HQHPDIVM.js';
import { d as I, l as S, m as n } from './c-UTWCWEAR.js';
import { E as w, Fd as T, Sh as b, Yb as G0, g as G1, h as G2, k as G3, sd as G4, ub as G5 } from './c-PWNRTD7X.js';
import { Oa as G6, s as G7, y as G8 } from './c-NNTXHBME.js';
import { C as G9, F as GG, P as Gx, g as Gu, l as GV } from './c-ZQQWH6UG.js';
import { E as Gp, Ib as GL, Ra as GB, l as Gh, mb as Gd, pb as GQ, qb as GD, r as GX, xb as Gc } from './c-PBMEVLU6.js';
import { a as Gg, e as Gk, j as GM, k as GN, l as GH } from './c-XSSGDLV7.js';
GH();
function Go(xZ, xR, xi, xm, xF, xq, xA, xr, xP, xE, xv, xI) {
  let xz = xR.frame(xi);
  if (!xz) return;
  let xS = Math.max(0x0, xm),
    xn = Math.max(0x0, xF),
    xw = Math.min(xq, xR.w - xS),
    xO = Math.min(xA, xR.h - xn);
  xw <= 0x0 || xO <= 0x0 || xI <= 0x0 || (xZ.save(), xZ.globalAlpha = Math.min(0x1, xI), xZ.drawImage(xz, xS, xn, xw, xO, xr, xP, xw * xE, xO * xv), xZ.restore());
}
Gg(Go, 'partExt');
function Gy(xZ, xR, xi, xm, xF, xq, xA, xr, xP, xE, xv, xI) {
  if (!xR) return;
  let xz = xR.w * xE,
    xS = xR.h * xv;
  if (!xz || !xS) return;
  let xn = xq - (xq % xz - xm % xz) - xz * (xq % xz < xm % xz),
    xw = xA - (xA % xS - xF % xS) - xS * (xA % xS < xF % xS),
    xO = -0x1 / 0x0,
    xT = 0x1 / 0x0,
    xC = -0x1 / 0x0,
    xJ = 0x1 / 0x0;
  try {
    let xY = xZ.getTransform && xZ.getTransform(),
      xf = xZ.canvas;
    xY && xf && !xY.b && !xY.c && xY.a > 0x0 && xY.d > 0x0 && (xO = -xY.e / xY.a, xT = (xf.width - xY.e) / xY.a, xC = -xY.f / xY.d, xJ = (xf.height - xY.f) / xY.d);
  } catch {}
  let xK = xw,
    xW = 0x0;
  for (; xn <= xr && xW++ < 0xfa0;) {
    if (xn + xz >= xO && xn <= xT) {
      let xb = 0x0;
      for (; xK <= xP && xb++ < 0xfa0;) {
        if (xK + xS >= xC && xK <= xJ) {
          let u0 = xn <= xq ? xq - xn : 0x0,
            u1 = xn + u0,
            u2 = xK <= xA ? xA - xK : 0x0,
            u3 = xK + u2,
            u4 = xr <= xn + xz ? xz - (xn + xz - xr) + 0x1 - u0 : xz - u0,
            u5 = xP <= xK + xS ? xS - (xK + xS - xP) + 0x1 - u2 : xS - u2;
          Go(xZ, xR, xi, u0, u2, u4, u5, u1, u3, xE, xv, xI);
        }
        xK += xS;
      }
    }
    xK = xw, xn += xz;
  }
}
Gg(Gy, 'tiledArea');
var Gs = Gg(xZ => xZ && xZ.ctx && typeof xZ.ctx.drawImage == 'function' ? xZ.ctx : null, 'ctxOf'),
  GU = class u6 extends GQ {
    ["create"]() {
      Object.assign(this, {
        'init': !0x1,
        'x_pos': this.x,
        'y_pos': this.y,
        'x_scale': 0x2,
        'y_scale': 0x2,
        'alpha': 0x1,
        'width': -0x1,
        'height': -0x1,
        'x_speed': 0x0,
        'y_speed': 0x0,
        'room_wide': !0x1,
        'loop_vertical': !0x1,
        'spr': null,
        'ch': 'ch2',
        'camx': 0x0,
        'camy': 0x0
      });
    }
    ["step"]() {
      let xZ = I(this.ch, this.spr);
      if (!this.init && xZ && (this.init = !0x0, this.width === -0x1 && (this.width = xZ.w * this.x_scale), this.height === -0x1 && (this.height = xZ.h * this.y_scale)), !this.init) return;
      this.x_pos += this.x_speed;
      let xR = this.room_wide ? 0x0 : this.camx;
      this.x_pos + this.width < xR && (this.x_pos += this.width), this.x_pos - this.width > xR && (this.x_pos -= this.width), this.y_speed !== 0x0 && (this.y_pos += this.y_speed, this.y_pos + this.height < this.camy && (this.y_pos += this.height), this.y_pos - this.height > this.camy && (this.y_pos -= this.height));
    }
    ["draw"](xZ) {
      let xR = Gs(xZ),
        xi = I(this.ch, this.spr);
      if (!xR || !xi || !this.init) return;
      let xm = this.x_pos - this.camx,
        xF = this.y_pos - this.camy,
        xq = this.width,
        xA = this.height,
        xr = Math.floor(this.image_index || 0x0);
      Gy(xR, xi, xr, xm - xq, xF, xm, xF, xm - xq + xq, xF + xA, this.x_scale, this.y_scale, this.alpha), Gy(xR, xi, xr, xm, xF, xm, xF, xm + xq, xF + xA, this.x_scale, this.y_scale, this.alpha), Gy(xR, xi, xr, xm + xq, xF, xm + xq, xF, xm + xq + xq, xF + xA, this.x_scale, this.y_scale, this.alpha);
    }
  };
Gg(GU, 'obj_looping_tiled_area'), Gk(GU, 'kinds', GD('obj_looping_tiled_area', GQ)), Gk(GU, 'defaultDepth', 0x0);
var Gl = GU;
function Ga(xZ, xR, xi, xm) {
  let xF = GL(xZ, xR, Gl);
  return xF.x_pos = xZ, xF.y_pos = xR, xF.spr = xi, Object.assign(xF, xm), xF;
}
Gg(Ga, 'looping');
var Gj = class u7 extends GQ {
  ["create"]() {
    this.camx = 0x0, this.camy = 0x0, this.spr = null, this.frame = 0x0, this.anim = 0x0, this.xs = 0x1, this.ys = 0x1, this.alpha = 0x1, this.sineY = 0x0, this.timer = 0x0, this.depthOf = null;
  }
  ["step"]() {
    if (this.frame += this.anim, this.timer++, this.sineY && (this.ys = Math.sin(this.timer / 0xa) * 0.5 + 1.5), this.depthOf) {
      let xZ = Gc.first(this.depthOf[0x0]);
      xZ && (this.depth = xZ.depth + this.depthOf[0x1]);
    }
  }
  ["draw"](xZ) {
    let xR = Gs(xZ),
      xi = I('ch2', this.spr);
    if (!xR || !xi) return;
    let xm = xi.frame(Math.floor(this.frame));
    xm && (xR.save(), xR.globalAlpha = this.alpha, xR.translate(this.x - this.camx, this.y - this.camy), xR.scale(this.xs, this.ys), xR.drawImage(xm, -xi.ox, -xi.oy), xR.restore());
  }
};
Gg(Gj, 'obj_ch2_roomprop'), Gk(Gj, 'kinds', GD('obj_ch2_roomprop', GQ)), Gk(Gj, 'defaultDepth', 0x0);
var GZ = Gj;
function GR(xZ, xR, xi, xm, xF = {}) {
  let xq = GL(xZ, xR, GZ);
  return xq.spr = xi, xq.depth = xm, Object.assign(xq, xF), xq;
}
Gg(GR, 'prop');
var Gi = class u8 extends GQ {
  ["create"]() {
    this.visible = !0x1, this.sinerx = 0x0, this.sinery = 0x0, this.coaster_offset_x = -0x19, this.coaster_offset_y = 0x28, this.character_offset_x = 0x0, this.character_offset_y = 0x0, this.target_x_end = 0x0, this.con = 0x0, this.actor = {
      'sprite_index': null
    }, this.character_sprite = null;
  }
  ["draw"]() {}
};
Gg(Gi, 'obj_coaster_cart'), Gk(Gi, 'kinds', GD('obj_coaster_cart', GQ)), Gk(Gi, 'defaultDepth', 0x0);
var Gm = Gi;
function GF(xZ, xR, xi, xm) {
  let xF = GL(xZ, xR, Gm);
  return xF.coaster_offset_x = xi, xF.coaster_offset_y = xm, xF;
}
Gg(GF, 'coasterCart'), v(0x3a, ({
  vx: xZ,
  vy: xR
}) => {
  let xi = (xr, xP) => {
      let xE = I('ch2', xr);
      return xE ? xE.w * 0x2 * 0x3 : 0x0;
    },
    xm = xr => {
      let xP = I('ch2', xr);
      return xP ? xP.h - 0x1 : 0x0;
    },
    xF = {
      'room_wide': !0x0,
      'x_scale': 0x1,
      'y_scale': 0x1,
      'camx': xZ,
      'camy': xR
    };
  Ga(0x0, 0x0, 'spr_cyber_coaster_bg_tile', {
    ...xF,
    'width': xi('spr_cyber_coaster_bg_cityscape'),
    'height': xm('spr_cyber_coaster_bg_cityscape'),
    'depth': 0xf4434
  }), Ga(0x410, 0x0, 'spr_cyber_coaster_bg_cityscape_bg', {
    ...xF,
    'width': xi('spr_cyber_coaster_bg_cityscape_bg'),
    'height': xm('spr_cyber_coaster_bg_cityscape_bg'),
    'depth': 0xf43d0,
    'x_speed': -0.5
  }), Ga(936, 0x0, 'spr_cyber_coaster_bg_cityscape_fg', {
    ...xF,
    'width': xi('spr_cyber_coaster_bg_cityscape_fg'),
    'height': xm('spr_cyber_coaster_bg_cityscape_fg'),
    'depth': 0xf436c,
    'x_speed': -0x1
  }), Ga(0x32f, 0x40, 'bg_dw_city_coaster_track_fullwidth', {
    ...xF,
    'width': xi('bg_dw_city_coaster_track_fullwidth'),
    'height': xm('bg_dw_city_coaster_track_fullwidth'),
    'depth': 0xf4308,
    'x_speed': -0xf
  });
  for (let xr = 0x0; xr < 0x3; xr++) {
    let xP = I('ch2', 'spr_cyber_coaster_track');
    Ga(0x32f, 0x82 + xr * 0x3c, 'spr_cyber_coaster_track', {
      ...xF,
      'width': xP ? xP.w * 0x2 * 0x7 : 0x0,
      'height': xP ? xP.h - 0x1 : 0x0,
      'depth': 0xf42a4,
      'x_speed': -0xf
    });
  }
  GR(xZ + 0x19, 0x0, 'spr_cyber_coaster_bg_fountain', 0xf4402, {
    'camx': xZ,
    'camy': xR,
    'anim': 0.125,
    'xs': 0x2,
    'ys': 0x2
  });
  let xq = (xE, xv) => GF(xE - xZ, xv - xR, -0x19, 0x28),
    xA = GL(0x0, 0x0, G7);
  xA.visible = !0x1, xA.__battleprop = !0x0, xA.coaster_kris = xq(0x4c4, 0x48), xA.coaster_susie = xq(0x4c4, 0x76), xA.coaster_ralsei = xq(0x4c4, 0xb5), xA.coaster_berdly = xq(0x672, 0x7e);
}), v(0x3b, ({
  vx: xZ,
  vy: xR
}) => {
  GL(0x0, 0x28, n), GR(0x2ee, 0x0, 'spr_cc_fountainbg', 0xf4308, {
    'camx': xZ,
    'camy': xR,
    'anim': 0.1,
    'xs': 0x2,
    'ys': 0x2
  });
}), v(0x3f, ({
  room: xZ,
  vx: xR,
  vy: xi
}) => {
  let xm = I('ch2', 'spr_cutscene_21_acid_loop');
  Ga(xR, 0x0, 'spr_cutscene_21_acid_loop', {
    'room_wide': !0x1,
    'x_scale': 0x1,
    'y_scale': 0x1,
    'width': 0x2d0,
    'height': xm ? xm.h : 0x1e0,
    'camx': xR,
    'camy': xi,
    'depth': 0xf42a4
  });
  for (let xF of xZ.layers) for (let xq of xF.inst || []) xq[0x0] === 'obj_gradientglow' && GR(xq[0x1], xq[0x2], 'spr_gradient20', 0xcf850, {
    'camx': xR,
    'camy': xi,
    'xs': xq[0x3],
    'ys': xq[0x4],
    'sineY': 0x1
  });
  GR(0x307, 0x6e, 'spr_swanboat', 0x1, {
    'camx': xR,
    'camy': xi,
    'anim': 0.15,
    'xs': 0x2,
    'ys': 0x2,
    'depthOf': ['obj_herokris', 0x1]
  }), GR(0x307, 0x6e, 'spr_swanboat_cover', -0xa, {
    'camx': xR,
    'camy': xi,
    'anim': 0.15,
    'xs': 0x2,
    'ys': 0x2,
    'depthOf': ['obj_heroralsei', -0xa]
  }), GL(0x0, 0x0, GA);
});
var Gq = class u9 extends GQ {
  ["create"]() {
    this.trackpos = 0x0, this.con = 0x0, this.timer = 0x0, this.lang = Gu.flag && Gu.flag[0x390] || 0x0, this.depth = 0x1388;
  }
  ["draw"](xZ) {
    if (this.trackpos = Gd(Gu.batmusic && Gu.batmusic[0x1]), Gu.myfight === 0x0 && this.trackpos >= 58.335 && this.trackpos <= 58.375 && this.con === 0x0 && (this.timer = 0x0, this.con = 0x1), this.con === 0x1) {
      let xR = Gc.first('obj_rouxls_enemy');
      xR && xZ && xZ.draw_sprite && xZ.draw_sprite('spr_rouxls_bubble_hey', this.lang, xR.x - 0xa, Gu.monstery[xR.myself]), this.timer++, this.timer === 0xc && (this.con = 0x0);
    }
  }
};
Gg(Gq, 'obj_rouxlsbattle_hey'), Gk(Gq, 'kinds', GD('obj_rouxlsbattle_hey', GQ)), Gk(Gq, 'defaultDepth', 0x1388);
var GA = Gq,
  Gr = {
    'x': 0x668,
    'y': 0x0
  };
Object.assign(G8.prototype, {
  'draw'(xZ) {
    let xR = Gs(xZ);
    if (!xR || !this.__battleprop) return;
    let xi = this.camx || 0x0;
    if (this.drawtrack === 0x1) {
      let xm = I('ch2', 'spr_sneo_track');
      if (xm) {
        for (let xF of [this.tracky0, this.tracky1, this.tracky2]) for (let xq of [-0x280, 0x0, 0x280]) {
          let xA = xm.frame(0x0);
          if (!xA) break;
          xR.save(), xR.globalAlpha = this.image_alpha ?? 0x1, xR.drawImage(xA, this.trackx + xq, xF, xm.w * 0x2, xm.h * 0x2), xR.restore();
        }
      }
      0x50 - xi > 0x0 && (xR.save(), xR.fillStyle = "#000", xR.fillRect(-xi, 0xc8, 0x50, 0xdc), xR.restore());
    }
    if (this.cityscape_active) {
      let xr = (xE, xv) => {
        let xI = I('ch2', xE);
        xI && Gy(xR, xI, 0x0, this.cityscape_speed * xv, 0x0, this.cityscape_speed * xv, 0x0, 0x280, xI.h * 0x2, 0x2, 0x2, this.cityscape_alpha);
      };
      xr('bg_dw_mansion_basement_cityscape_background', 0x1), xr('bg_dw_mansion_basement_cityscape_midground', 1.1), xr('bg_dw_mansion_basement_cityscape_foreground', 1.2);
      let xP = I('ch2', 'bg_dw_mansion_basement_cityscape');
      if (this.shop_spamton_bg_con > 0x1) {
        let xE = I('ch2', 'spr_shop_spamton_bg_battle');
        xE && xP && Gy(xR, xE, 0x0, this.cityscape_speed, 0x0, this.cityscape_speed, 0x0, 0x280, xP.h * 0x2, 1.6708, 1.195, this.cityscapefade === 0x1 ? 0.15 : this.cityscape_alpha);
      }
      if (this.shop_spamton_bg_con > 0x0 && this.shop_spamton_bg_con < 0x3 && xP) {
        let xv = I('ch2', 'spr_whitepixel');
        xv && Gy(xR, xv, 0x0, this.cityscape_speed, 0x0, this.cityscape_speed, -0x2, 0x280, -0x2 + xP.h * 0x2, 0x18c, 0x8, this.shop_spamton_bg_timer / 0x14);
      }
    }
  },
  'step'() {
    this.__battleprop && (this.drawtrack === 0x1 && (this.trackx += this.trackspeed, this.trackx + 0x280 < 0x0 && (this.trackx += 0x280), this.trackx - 0x280 > 0x0 && (this.trackx -= 0x280)), this.cityscape_active && (this.cityscape_alpha < 0x1 && (this.cityscape_alpha = G5(this.cityscape_alpha, 0x1, 0.2)), this.cityscapefade === 0x1 && (this.cityscape_alpha = 0x0), this.cityscape_speed -= this.cityscape_speed_max, this.cityscape_speed_max < 0x0 && this.cityscape_speed > -0x18e && (this.cityscape_speed -= 0x18e), this.shop_spamton_bg_con === 0x1 && Gc.number('obj_writer') === 0x0 && Gc.number('obj_battleblcon') === 0x0 && (this.shop_spamton_bg_timer++, this.shop_spamton_bg_timer === 0x1 && GB('snd_petrify'), this.shop_spamton_bg_timer === 0x17 && (this.shop_spamton_bg_con = 0x2)), this.shop_spamton_bg_con === 0x2 && (this.shop_spamton_bg_timer--, this.shop_spamton_bg_timer === 0x0 && (this.shop_spamton_bg_con = 0x3, Gc.with('obj_spamton_neo_enemy', xZ => {
      xZ.targetbgspeed = 0x5;
    })))));
  }
});
var Gt = class uG extends GQ {
  ["create"]() {
    Object.assign(this, {
      'timer': 0x0,
      'timermax': 0xb4,
      'playerinput': 0x0,
      'playerinputtimer': 0x0,
      'actcon': 0x0,
      'krisgooffscreen': 0x0,
      'susiegooffscreen': 0x0,
      'ralseigooffscreen': 0x0,
      'buttonspressed': 0x0,
      'bumpmercy': 0x0,
      'mykey': [0x5a, 0x58, 0x43],
      'HeroCoaster': [],
      'yspot': []
    }), this.visible = !0x1, this.seated = !0x1;
  }
  ["draw"]() {}
  ["step"]() {
    !this.seated && Gc.first('obj_herokris') && (this.seated = !0x0, this.seat());
  }
  ["seat"]() {
    let xZ = [0x65, 0xb6, 0x104];
    for (let xR = 0x0; xR < 0x3; xR++) {
      let xi = GL(0x0, xZ[xR] - 0x0, Z);
      xi.HeroID = xR, xi.image_index = xR, xi.depth = xi.y * -0x64, xi.siner = 0x0, xi.mykey = this.mykey[xR], xi.lerpstate = 0x1, xi.lerptimer = 0x0;
      let xm = GL(xi.x, xi.y, j);
      xm.parentid = xi, xm.depth = xi.depth + 0x2, xi.back = xm, this.HeroCoaster[xR] = xi, this.yspot[xR] = xi.y;
    }
  }
};
Gg(Gt, 'o_coaster_controller_sneo'), Gk(Gt, 'kinds', GD('o_coaster_controller_sneo', GQ)), Gk(Gt, 'defaultDepth', 0x0);
var GP = Gt;
v(0x3d, ({
  vx: xZ,
  vy: xR
}) => {
  let xi = GL(0x0, 0x0, G8);
  xi.__battleprop = !0x0, xi.camx = xZ, xi.depth = 0x182b8, Object.assign(xi, {
    'drawblack': 0x2,
    'drawtrack': 0x1,
    'trackx': 0x0,
    'tracky0': 0x46,
    'tracky1': 0x96,
    'tracky2': 0xe6,
    'fightmode': 0x1,
    'trackspeed': -0xf,
    'trackaccel': 0x0,
    'trackspeedmax': 0x0,
    'cityscapefade': 0x0,
    'cityscape_active': !0x0,
    'cityscape_speed': 0x0,
    'cityscape_alpha': 0x0,
    'shop_spamton_bg_con': 0x0,
    'shop_spamton_bg_timer': 0x0,
    'cityscape_speed_max': 0x5,
    'forcend': 0x0,
    'con': 0x8,
    'image_alpha': 0x1
  });
  let xm = (xF, xq) => GF(xF - xZ, xq - xR, -0x19, 0x28);
  xi.coaster_kris = xm(0x6b9, 0x3c), xi.coaster_susie = xm(0x6b6, 0x7d), xi.coaster_ralsei = xm(0x6bf, 0xd7), GL(0x0, 0x0, GP);
});
function GE(xZ, xR, xi) {
  let xm = xZ;
  return xm = xm < 0x0 ? 0x100 - -xm % 0x100 : xm % 0x100, w(xm, xR, xi);
}
Gg(GE, 'hsv');
var Gv = new Map();
function GI(xZ, xR, xi, xm) {
  let xF = Gv.get(xZ);
  if (!xF) {
    let xr = document.createElement('canvas');
    if (!xr.getContext) return null;
    xF = {
      'cv': xr,
      'im': null,
      'col': null
    }, Gv.set(xZ, xF);
  }
  if (xF.im === xi && xF.col === xm) return xF.cv;
  let xq = xF.cv;
  (xq.width !== xZ.w || xq.height !== xZ.h) && (xq.width = xZ.w, xq.height = xZ.h);
  let xA = xq.getContext('2d');
  return !xA || !xA.drawImage ? null : (xA.globalCompositeOperation = "source-over", xA.clearRect(0x0, 0x0, xZ.w, xZ.h), xA.drawImage(xi, 0x0, 0x0), xA.globalCompositeOperation = 'multiply', xA.fillStyle = xm, xA.fillRect(0x0, 0x0, xZ.w, xZ.h), xA.globalCompositeOperation = "destination-in", xA.drawImage(xi, 0x0, 0x0), xA.globalCompositeOperation = "source-over", xF.im = xi, xF.col = xm, xq);
}
Gg(GI, 'tintedCopy');
function Gz(xZ, xR, xi, xm, xF, xq, xA, xr, xP) {
  let xE = xR && xR.frame(xi);
  if (!xE || xP <= 0x0 || typeof document > 'u' || !document.createElement) return;
  let xv = GI(xR, xi, xE, xr);
  xv && (xZ.save(), xZ.globalAlpha = Math.min(0x1, xP), xZ.drawImage(xv, xm - xR.ox * xq, xF - xR.oy * xA, xR.w * xq, xR.h * xA), xZ.restore());
}
Gg(Gz, 'drawTinted');
var GS = class ux extends GQ {
  ["create"]() {
    Object.assign(this, {
      'siner': 0x64,
      'bgsiner': 0x0,
      'colcol': "rgb(0,0,0)",
      'hscroll': 0x0,
      'eyebody': 0x1,
      'adjust': 0x3,
      'slowdown': 0x0,
      'nowcolor': "rgb(0,255,0)",
      'roomw': 0x280
    });
  }
  ["step"]() {
    this.siner += 0x1, this.hscroll += 0x1, this.hscroll > 0xf0 && (this.hscroll -= 0xf0), this.adjust === 0x3 && (this.slowdown < 0x1 && (this.slowdown += 0.01), this.siner -= this.slowdown * 0.5, this.bgsiner -= this.slowdown / 0x18, this.hscroll -= this.slowdown * 0.8, this.colcol = Gh(this.nowcolor, GE(this.siner / 0x10, 0xa0 + Math.sin(this.siner / 0x80) * 0x3c, 0xff), this.slowdown), this.nowcolor = Gh(this.nowcolor, GE(this.siner / 0x10, 0xff, Math.sin(this.siner / 0x40) * 0x28 + 0x3c), this.slowdown)), this.bgsiner += 0.0625, this.bgsiner > 0x7 && (this.bgsiner -= 0x7);
  }
  ["draw"](xZ) {
    let xR = Gs(xZ);
    if (!xR) return;
    xR.save(), xR.fillStyle = this.nowcolor, xR.fillRect(0x0, 0x0, 0x280, 0x1e0), xR.restore();
    let xi = I('ch2', 'bg_fountain1'),
      xm = I('ch2', 'spr_fountainedge'),
      xF = I('ch2', 'spr_fountainbottom'),
      xq = (xI, xz, xS) => {
        if (!xi) return;
        let xn = xi.w * 0x2,
          xw = xi.h * 0x2;
        for (let xO = (xz % xw + xw) % xw - xw; xO < 0x1e0; xO += xw) for (let xT = (xI % xn + xn) % xn - xn; xT < 0x280; xT += xn) Gz(xR, xi, 0x0, xT, xO, 0x2, 0x2, this.colcol, xS);
      };
    xq(0x0 - this.siner, 0x0 - this.siner, 0.7 * this.eyebody), xq(-0xf0 + this.hscroll, 0x0 + this.siner, 0.3 * this.eyebody);
    let xA = xm ? xm.w * 0x2 : 0xc8,
      xr = this.roomw / 0x2 - xA / 0x2;
    xR.save(), xR.fillStyle = "#000", xR.fillRect(0x0, 0x0, xr + 0x1, 0x119), xR.fillRect(this.roomw / 0x2 + xA / 0x2, 0x0, 0x3e7, 0x119), xR.restore();
    let xP = 0x0 - this.bgsiner * 0x118 / 0x7,
      xE = 0x118 - this.bgsiner * 0x118 / 0x7,
      xv = Math.sin(this.siner / 0x10) * 0xc;
    for (let [xI, xz] of [[0x0, 0x1], [xv, 0.5], [-xv, 0.5]]) Gz(xR, xm, 0x0, xr + xI, xP, 0x2, 0x2, this.colcol, xz), Gz(xR, xm, 0x0, xr + xI, xE, 0x2, 0x2, this.colcol, xz);
    Gz(xR, xF, 0x0, xr, -0x8 + Math.sin(this.siner / 0x10) * 0x8, 0x2, 0x2, this.colcol, 0.3), Gz(xR, xF, 0x0, xr, -0x4 + Math.sin(this.siner / 0x10) * 0x4, 0x2, 0x2, this.colcol, 0.5), Gz(xR, xF, 0x0, xr, 0x0, 0x2, 0x2, this.colcol, 0x1), xR.save(), xR.fillStyle = this.nowcolor, xR.fillRect(0x0, 0x118, 0x281, 0xc9), xR.restore();
  }
};
Gg(GS, 'obj_darkfountain_battle'), Gk(GS, 'kinds', GD('obj_darkfountain', GQ)), Gk(GS, 'defaultDepth', 0x10c8e0);
var Gn = GS;
v("61sg", () => {
  GL(0xe0, 0x0, Gn);
});
var Gw = class uu extends GQ {
  ["create"]() {
    this.spr = 'spr_dojo_discoball', this.frame = 0x0, this.anim = 0x0, this.vsp = 0x0, this.blend = 0xffffff;
  }
  ["step"]() {
    this.frame += this.anim;
  }
  ["draw"](xZ) {
    xZ.draw_sprite_ext(this.spr, Math.floor(this.frame), this.x, this.y, 0x2, 0x2, 0x0, this.blend, 0x1);
  }
};
Gg(Gw, 'obj_dojofx_ball'), Gk(Gw, 'kinds', GD('obj_dojofx_ball', GQ)), Gk(Gw, 'defaultDepth', 0x1388);
var GO = Gw,
  GT = class uV extends GQ {
    ["create"]() {
      this.siner = 0x0, this.inbattle = 0x0, this.drawalpha = 0x1, this.bsiner = 0x0, this.ball = GL(0x140, 0x0, GO), this.ball.anim = 0.18, this.ballback = GL(0x140, 0x0, GO), this.ballback.spr = 'spr_dojo_discoball_back', this.ballback.depth = 0x1770, GL(0x0, 0x0, GK);
    }
    ["step"]() {
      let xZ = this.ball;
      xZ.y += xZ.vsp, Gu.mnfight > 0x0 && Gu.fighting === 0x1 ? xZ.y >= -0xc8 ? xZ.vsp -= 0x1 : xZ.vsp = 0x0 : xZ.y < -0xa && (xZ.y = G5(xZ.y, 0x0, 0.5)), this.siner++, this.ballback.blend = w(this.siner / 0x4, 0xff, 0xdc + Math.sin(this.siner / 0xf) * 0x1e), this.ballback.x = xZ.x, this.ballback.y = xZ.y;
    }
  };
Gg(GT, 'obj_dojofx'), Gk(GT, 'kinds', GD('obj_dojofx', GQ)), Gk(GT, 'defaultDepth', 0x10c8e0);
var GC = GT,
  GJ = class up extends GQ {
    ["create"]() {
      this.image_alpha = 0x0;
    }
    ["draw"](xZ) {
      if (Gu.fighting !== 0x1) {
        this.image_alpha > 0x0 && (this.image_alpha -= 0.02);
        return;
      }
      this.image_alpha < 0x1 && (this.image_alpha += 0.02);
      let xR = Gu.encounterno >= 0x5a && Gu.encounterno <= 0x5e;
      for (let xi = 0x0; xi < 0x6; xi++) {
        let xm = null,
          xF = 0x0,
          xq = 0x0,
          xA = 0x14;
        if (xi <= 0x2) xm = Gu.char[xi] !== 0x0 && Gu.charinstance ? Gu.charinstance[xi] : null, xm && !xm.destroyed ? (xA = 0x50, xq = xm.y + G0(xm.idlesprite) * 0x2, xF = xm.x + 0x14, (GV(Gu.char[xi]) === 0x2 || GV(Gu.char[xi]) === 0x3) && (xF += 0xf)) : xm = null;else {
          if (xm = Gu.monsterinstance ? Gu.monsterinstance[xi - 0x3] : null, !xm || xm.destroyed || xR) continue;
          xF = xm.x + xm.sprite_width / 0x2, xq = xm.y + xm.sprite_height, xA = xm.sprite_width;
        }
        if (!xm || !Number.isFinite(xF) || !Number.isFinite(xq) || !Number.isFinite(xA)) continue;
        let xr = 0x118;
        T('spr_whitegradientdown_40', 0x0, xF, xq - xr, xF, xq - xr, xF - xA / 0x2 + 0x2, xq - 0x2, xF + xA / 0x2, xq - 0x2, 0.25), xZ.draw_set_color(0x808080), G4(xF - xA / 0x2, xq + 0x4, xF + xA / 0x2, xq - 0xa, !0x1);
      }
      xZ.draw_set_alpha(0x1);
    }
  };
Gg(GJ, 'obj_dojofx_front'), Gk(GJ, 'kinds', GD('obj_dojofx_front', GQ)), Gk(GJ, 'defaultDepth', 0xca);
var GK = GJ;
function GW() {
  return () => {
    GL(0x0, 0x0, S), GL(0x140, 0x0, GC);
  };
}
Gg(GW, 'dojoBackground'), GH();
var GY = {
  'chapter': 0x2,
  'unusedMonsterTypes': [{
    'type': 0x4,
    'name': 'Ralsei',
    'carriedForward': !0x0,
    'why': "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    'type': 0x8,
    'name': 'Pippins',
    'carriedForward': !0x0,
    'why': "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    'type': 0x11,
    'name': 'DoomTank',
    'carriedForward': !0x0,
    'why': "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    'type': 0x29,
    'name': 'GrazeTest',
    'carriedForward': !0x1,
    'why': "Defined in scr_monstersetup; no encounter case builds it."
  }],
  'unusedAttackPatterns': [0x12, 0x15, 0x16, 0x1d, 0x23, 0x31],
  'unusedAttackDetail': [{
    'type': 0x12,
    'line': 0x328,
    'why': "obj_dbulletcontroller can run pattern 18 (Step_0.gml line 808) but nothing assigns it. The branch is empty - a gutted slot."
  }, {
    'type': 0x15,
    'line': 0x36c,
    'why': "obj_dbulletcontroller can run pattern 21 (Step_0.gml line 876) but nothing assigns it."
  }, {
    'type': 0x16,
    'line': 0x373,
    'why': "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 883) but nothing assigns it. It spawns obj_musicalfight_speakers."
  }, {
    'type': 0x1d,
    'line': 0x481,
    'why': "obj_dbulletcontroller can run pattern 29 (Step_0.gml line 1153) but nothing assigns it. It spawns obj_thrash_laserbullet."
  }, {
    'type': 0x23,
    'line': 0x5a5,
    'why': "obj_dbulletcontroller can run pattern 35 (Step_0.gml line 1445) but nothing assigns it. It spawns obj_bulletparent. It sets global.turntimer = 3600, so it must never reach an encounter."
  }, {
    'type': 0x31,
    'line': 0x622,
    'why': "obj_dbulletcontroller can run pattern 49 (Step_0.gml line 1570) but nothing assigns it. It spawns obj_sneo_faceattack."
  }],
  'unusedEncounters': [0x41, 0x43, 0x46, 0x4b, 0x4c, 0x4d, 0x4e, 0x50, 0x63],
  'unusedEncounterWhy': {
    0x41: "Nothing in the chapter sets this encounter number. It builds Werewerewire. Its message is \"* Werewerewire strongly blocks the way!\".",
    0x43: "Nothing in the chapter sets this encounter number. It builds Virovirokun. Its message is \"* H-huh!? What's going on!?\".",
    0x46: "Nothing in the chapter sets this encounter number. It builds Poppup, Tasque. Its message is \"* Animal house.\".",
    0x4b: "Nothing in the chapter sets this encounter number. It builds Werewire. Its message is \"* Werewires swung in!\".",
    0x4c: "Nothing in the chapter sets this encounter number. It builds Werewire, Maus. Its message is \"* Werewire and Maus swung down like stringed superheroes!\".",
    0x4d: "Nothing in the chapter sets this encounter number. It builds Poppup, Ambyu-Lance. Its message is \"* Ambyu-Lance and its pet appeared!\".",
    0x4e: "Nothing in the chapter sets this encounter number. It builds Swatchling, Poppup. Its message is \"* Poppup and caretakers appeared!\". The GML never gives slot 2 an instance type, so that monster has stats and no object - ported as written.",
    0x50: "Nothing in the chapter sets this encounter number. It builds Swatchling, Maus. Its message is \"* Swatchling and vermin appeared!\".",
    0x63: "Nothing in the chapter sets this encounter number. It builds Enemy. Its message is \"* Test enemies showed up.\"."
  },
  'carriedForwardEncounters': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x28],
  'unusedEnemyObjects': [{
    'object': 'obj_debug_swatchling',
    'parent': 'obj_monsterparent',
    'events': ['Alarm_4', 'Create_0', 'Draw_0', 'Other_22', 'Step_0'],
    'lines': 0x5,
    'type': 0x24,
    'typeFrom': "its name matches scr_monstersetup type 36 \"Swatchling\"",
    'name': 'Swatchling',
    'gutted': !0x0,
    'attackTypes': [],
    'needs': [],
    'why': "No encounter names it, and all 5 of its events are a bare exit; - the object still exists and everything it used to do was deleted. Stats: its name matches scr_monstersetup type 36 \"Swatchling\"."
  }, {
    'object': 'obj_placeholderenemy',
    'parent': 'obj_monsterparent',
    'events': ['Alarm_4', 'Create_0', 'Draw_0', 'Other_22', 'Step_0'],
    'lines': 0x13d,
    'type': 0x1,
    'typeFrom': "chapter 1 scr_encountersetup gives monstertype 1",
    'name': 'Enemy',
    'gutted': !0x1,
    'attackTypes': [0x0, 0x1],
    'needs': [],
    'why': "5 events, 317 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 1."
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
  }, {
    'object': 'obj_rouxls_enemy_old_copy',
    'parent': 'obj_monsterparent',
    'events': ['Alarm_4', 'Create_0', 'Draw_0', 'Other_22', 'Step_0'],
    'lines': 0x27d,
    'type': 0x2d,
    'typeFrom': "chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy)",
    'name': 'Rouxls',
    'gutted': !0x1,
    'attackTypes': [0x1a, 0x1b, 0x1c],
    'needs': [{
      'object': 'obj_rouxls_enemy',
      'type': 0x2d
    }],
    'why': "5 events, 637 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy). Its attack patterns (26, 27, 28) read obj_rouxls_enemy by name, so they cannot run without that enemy in the fight - standalone they fault where the GML would fault too."
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
    }, {
      'id': 0x12,
      'name': "Kris Tea"
    }, {
      'id': 0x13,
      'name': "Noelle Tea"
    }, {
      'id': 0x15,
      'name': "Susie Tea"
    }, {
      'id': 0x1a,
      'name': 'JavaCookie'
    }, {
      'id': 0x1b,
      'name': 'TensionBit'
    }, {
      'id': 0x1c,
      'name': 'TensionGem'
    }, {
      'id': 0x1d,
      'name': 'TensionMax'
    }, {
      'id': 0x1e,
      'name': 'ReviveDust'
    }, {
      'id': 0x1f,
      'name': 'ReviveBrite'
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
      'id': 0x7,
      'name': 'Devilsknife'
    }, {
      'id': 0x8,
      'name': 'Trefoil'
    }, {
      'id': 0x9,
      'name': 'Ragger'
    }, {
      'id': 0xa,
      'name': 'DaintyScarf'
    }, {
      'id': 0xb,
      'name': 'TwistedSwd'
    }, {
      'id': 0xc,
      'name': 'SnowRing'
    }, {
      'id': 0xe,
      'name': 'BounceBlade'
    }, {
      'id': 0xf,
      'name': 'CheerScarf'
    }, {
      'id': 0x10,
      'name': 'MechaSaber'
    }, {
      'id': 0x11,
      'name': 'AutoAxe'
    }, {
      'id': 0x12,
      'name': 'FiberScarf'
    }, {
      'id': 0x13,
      'name': 'Ragger2'
    }, {
      'id': 0x14,
      'name': 'BrokenSwd'
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
    }, {
      'id': 0x7,
      'name': 'Jevilstail'
    }, {
      'id': 0x8,
      'name': "Silver Card"
    }, {
      'id': 0x9,
      'name': 'TwinRibbon'
    }, {
      'id': 0xa,
      'name': 'GlowWrist'
    }, {
      'id': 0xb,
      'name': 'ChainMail'
    }, {
      'id': 0xc,
      'name': "B.ShotBowtie"
    }, {
      'id': 0xd,
      'name': 'SpikeBand'
    }, {
      'id': 0xe,
      'name': "Silver Watch"
    }, {
      'id': 0xf,
      'name': 'TensionBow'
    }, {
      'id': 0x11,
      'name': 'DarkGoldBand'
    }, {
      'id': 0x12,
      'name': 'SkyMantle'
    }, {
      'id': 0x13,
      'name': 'SpikeShackle'
    }, {
      'id': 0x14,
      'name': 'FrayedBowtie'
    }, {
      'id': 0x16,
      'name': 'RoyalPin'
    }]
  },
  'unusedItems': [{
    'id': 0xb,
    'name': 'ClubsSandwich'
  }, {
    'id': 0xe,
    'name': 'Favwich'
  }, {
    'id': 0x12,
    'name': "Kris Tea"
  }, {
    'id': 0x13,
    'name': "Noelle Tea"
  }, {
    'id': 0x15,
    'name': "Susie Tea"
  }, {
    'id': 0x1a,
    'name': 'JavaCookie'
  }, {
    'id': 0x1b,
    'name': 'TensionBit'
  }, {
    'id': 0x1c,
    'name': 'TensionGem'
  }, {
    'id': 0x1d,
    'name': 'TensionMax'
  }, {
    'id': 0x1e,
    'name': 'ReviveDust'
  }, {
    'id': 0x1f,
    'name': 'ReviveBrite'
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
    'id': 0x7,
    'name': 'Devilsknife'
  }, {
    'id': 0x8,
    'name': 'Trefoil'
  }, {
    'id': 0x9,
    'name': 'Ragger'
  }, {
    'id': 0xa,
    'name': 'DaintyScarf'
  }, {
    'id': 0xb,
    'name': 'TwistedSwd'
  }, {
    'id': 0xc,
    'name': 'SnowRing'
  }, {
    'id': 0xe,
    'name': 'BounceBlade'
  }, {
    'id': 0xf,
    'name': 'CheerScarf'
  }, {
    'id': 0x10,
    'name': 'MechaSaber'
  }, {
    'id': 0x11,
    'name': 'AutoAxe'
  }, {
    'id': 0x12,
    'name': 'FiberScarf'
  }, {
    'id': 0x13,
    'name': 'Ragger2'
  }, {
    'id': 0x14,
    'name': 'BrokenSwd'
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
  }, {
    'id': 0x7,
    'name': 'Jevilstail'
  }, {
    'id': 0x8,
    'name': "Silver Card"
  }, {
    'id': 0x9,
    'name': 'TwinRibbon'
  }, {
    'id': 0xa,
    'name': 'GlowWrist'
  }, {
    'id': 0xb,
    'name': 'ChainMail'
  }, {
    'id': 0xc,
    'name': "B.ShotBowtie"
  }, {
    'id': 0xd,
    'name': 'SpikeBand'
  }, {
    'id': 0xe,
    'name': "Silver Watch"
  }, {
    'id': 0xf,
    'name': 'TensionBow'
  }, {
    'id': 0x11,
    'name': 'DarkGoldBand'
  }, {
    'id': 0x12,
    'name': 'SkyMantle'
  }, {
    'id': 0x13,
    'name': 'SpikeShackle'
  }, {
    'id': 0x14,
    'name': 'FrayedBowtie'
  }, {
    'id': 0x16,
    'name': 'RoyalPin'
  }],
  'definedAttackPatterns': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33],
  'definedMonsterTypes': [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x19, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35]
};
GH(), GH();
var Gf = new Proxy({}, {
    'get': Gg((xZ, xR) => a[xR] || G6[xR], 'get')
  }),
  Gb = Gg(xZ => m[xZ] || r[xZ] || b[xZ] || (() => {}), 'SCRIPT'),
  {
    instance_exists: x0
  } = b,
  x1 = new Proxy({}, {
    'get': Gg((xZ, xR) => Gf[xR], 'get')
  });
function x2(xZ) {
  for (this.xx = 0x0, this.yy = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) G1(Gu, 'heromakex')[this.i] = this.xx + 0x50, G1(Gu, 'heromakey')[this.i] = this.yy + 0x32 + 0x50 * this.i, G1(Gu, 'monsterinstancetype')[this.i] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[this.i] = 0x1, G1(Gu, 'monstermakex')[this.i] = this.xx + 0x1f4 + 0x14 * this.i, G1(Gu, 'monstermakey')[this.i] = this.yy + 0x28 + 0x5a * this.i;
  switch (G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, Gu.char[0x0] !== 0x0 && Gu.char[0x1] === 0x0 && Gu.char[0x2] === 0x0 && (G1(Gu, 'heromakey')[0x0] = this.yy + 0x8c), Gu.char[0x0] !== 0x0 && Gu.char[0x1] !== 0x0 && Gu.char[0x2] === 0x0 && (G1(Gu, 'heromakey')[0x0] = this.yy + 0x64, G1(Gu, 'heromakey')[0x1] = this.yy + 0xb4), G1(Gu, 'battlemsg')[0x0] = "* It is known.", xZ) {
    case 0x0:
      break;
    case 0x1:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[0x0] = 0x1, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[0x1] = 0x1, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Test enemies showed up.";
        break;
      }
    case 0x2:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_lancerboss, G1(Gu, 'monstertype')[0x0] = 0x2, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x21c, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0;
        break;
      }
    case 0x3:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_dummyenemy, G1(Gu, 'monstertype')[0x0] = 0x3, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xa0, Gp(x0(Gf.obj_npc_room)) && (G1(Gu, 'monstermakex')[0x0] = G2('obj_npc_room').xstart, G1(Gu, 'monstermakey')[0x0] = G2('obj_npc_room').ystart), G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0;
        break;
      }
    case 0x4:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x0] = 0x5, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x8c, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rudinn drew near!", Gu.flag[0x1f4] >= 0x1 && (G1(Gu, 'battlemsg')[0x0] = "* A different Rudinn from last time drew near!"), Gu.flag[0x1f4] === 0x2 && (G1(Gu, 'battlemsg')[0x0] = "* Assumedly another different Rudinn appeared!");
        break;
      }
    case 0x5:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x0] = 0x5, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x1] = 0x5, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 0x6:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x0] = 0x5, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x1] = 0x6, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 0x7:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_smallcheckers_enemy, G1(Gu, 'monstertype')[0x0] = 0x9, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x96, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 0x8:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_clubsenemy, G1(Gu, 'monstertype')[0x0] = 0x10, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x190, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x78, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Clover grew close!";
        break;
      }
    case 0x9:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x0] = 0x6, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x1] = 0x6, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x2] = 0x6, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Three Hathys blocked the way!";
        break;
      }
    case 0xc:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_checkers_enemy, G1(Gu, 'monstertype')[0x0] = 0xa, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x78, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Here it comes!";
        break;
      }
    case 0xd:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_ponman_enemy, G1(Gu, 'monstertype')[0x0] = 0xb, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_ponman_enemy, G1(Gu, 'monstertype')[0x1] = 0xb, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'battlemsg')[0x0] = "* Ponman drew near!", G1(Gu, 'monstertype', 0x2)[0x2] = 0x0;
        break;
      }
    case 0xe:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_ponman_enemy, G1(Gu, 'monstertype')[0x0] = 0xb, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_ponman_enemy, G1(Gu, 'monstertype')[0x1] = 0xb, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_ponman_enemy, G1(Gu, 'monstertype')[0x2] = 0xb, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Ponman drew near!";
        break;
      }
    case 0xf:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_clubsenemy, G1(Gu, 'monstertype')[0x0] = 0x7, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x190, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x1e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x1] = 0x6, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1a4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Clover and Hathy grew close!";
        break;
      }
    case 0x10:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x0] = 0xd, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x8c, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rabbick slithered in the way!";
        break;
      }
    case 0x11:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x0] = 0xd, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3c, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x1] = 0xd, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xb4, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 0x12:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_bloxer_enemy, G1(Gu, 'monstertype')[0x0] = 0xe, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x8c, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Bloxer assembled!";
        break;
      }
    case 0x13:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_bloxer_enemy, G1(Gu, 'monstertype')[0x0] = 0xe, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3c, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_bloxer_enemy, G1(Gu, 'monstertype')[0x1] = 0xe, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xb4, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Bloxers assembled!";
        break;
      }
    case 0x14:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_lancerboss2, G1(Gu, 'monstertype')[0x0] = 0xc, G1(Gu, 'heromakex')[0x0] = this.xx + 0x78, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xa0, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Lancer blocked the way!";
        break;
      }
    case 0x15:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_jigsawryenemy, G1(Gu, 'monstertype')[0x0] = 0xf, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x8c, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Jigsawry drew near!", Gu.flag[0x1f4] >= 0x1 && (G1(Gu, 'battlemsg')[0x0] = "* A different Jigsawry from last time drew near!"), Gu.flag[0x1f4] === 0x2 && (G1(Gu, 'battlemsg')[0x0] = "* Assumedly another different Jigsawry appeared!");
        break;
      }
    case 0x16:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_jigsawryenemy, G1(Gu, 'monstertype')[0x0] = 0xf, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_jigsawryenemy, G1(Gu, 'monstertype')[0x1] = 0xf, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_jigsawryenemy, G1(Gu, 'monstertype')[0x2] = 0xf, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 0x17:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_jigsawryenemy, G1(Gu, 'monstertype')[0x0] = 0xf, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x1] = 0x5, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x2] = 0x6, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Smorgasboard.";
        break;
      }
    case 0x18:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x0] = 0xd, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3c, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x1] = 0x5, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xb4, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rabbick slithered in the way!";
        break;
      }
    case 0x19:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x50, G1(Gu, 'heromakey')[0x0] = this.yy + 0x64, G1(Gu, 'heromakex')[0x1] = this.xx + 0x5a, G1(Gu, 'heromakey')[0x1] = this.yy + 0x96, G1(Gu, 'heromakex')[0x2] = this.xx + 0x64, G1(Gu, 'heromakey')[0x2] = this.yy + 0xd2, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_joker, G1(Gu, 'monstertype')[0x0] = 0x14, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xa0, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 0x1b:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_checkers_enemy, G1(Gu, 'monstertype')[0x0] = 0x15, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x78, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Here it comes^1. Again.", G1(Gu, 'heromakey')[0x0] = this.yy + 0x41;
        break;
      }
    case 0x1c:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rudinnranger, G1(Gu, 'monstertype')[0x0] = 0x16, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_rudinnranger, G1(Gu, 'monstertype')[0x1] = 0x16, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 0x1d:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_headhathy, G1(Gu, 'monstertype')[0x0] = 0x17, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_headhathy, G1(Gu, 'monstertype')[0x1] = 0x17, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 0x1e:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_headhathy, G1(Gu, 'monstertype')[0x0] = 0x17, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_headhathy, G1(Gu, 'monstertype')[0x1] = 0x17, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_headhathy, G1(Gu, 'monstertype')[0x2] = 0x17, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 0x1f:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_susieenemy, G1(Gu, 'monstertype')[0x0] = 0x13, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x208, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x50, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_lancerboss3, G1(Gu, 'monstertype')[0x1] = 0x12, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x21c, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xf0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Two bad guys blocked the way!";
        break;
      }
    case 0x20:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x0] = 0xd, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x1] = 0xd, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_rabbick_enemy, G1(Gu, 'monstertype')[0x2] = 0xd, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 0x21:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x0] = 0x5, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x14, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_heartenemy, G1(Gu, 'monstertype')[0x1] = 0x6, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_diamondenemy, G1(Gu, 'monstertype')[0x2] = 0x5, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Various guys appeared!";
        break;
      }
    case 0x28:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_king_boss, G1(Gu, 'monstertype')[0x0] = 0x19, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x46, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* King blocked the way!";
        break;
      }
    case 0x32:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x0] = 0x1e, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x1] = 0x1e, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xc8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Ambyu-Lances beeped towards you!", Gu.chapter === 0x2 && G3 === 'room_dw_city_postbaseball_1' && (G1(Gu, 'battlemsg')[0x0] = "* Hey Kris^1, lemme show you my ultimate healing!");
        break;
      }
    case 0x33:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x32, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x1] = 0x1f, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x78, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xbe, G1(Gu, 'battlemsg')[0x0] = "* Poppups popped up!";
        break;
      }
    case 0x34:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x0] = 0x20, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x32, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Tasques crossed your path!";
        break;
      }
    case 0x35:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3c, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x21, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x208, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xbe, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Werewires swung in!";
        break;
      }
    case 0x36:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x0] = 0x22, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1de, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x62, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x1] = 0x22, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xca, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Maice blocked the way! ";
        break;
      }
    case 0x37:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x28, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x1] = 0x23, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1fe, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x9a, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Virovirokun floated in!", Gu.ambush === 0x2 && (G1(Gu, 'battlemsg')[0x0] = "* First strike!");
        break;
      }
    case 0x38:
      {
        G1(Gu, 'flag')[0x1aa] = GX(0x0, 0x1, 0x2, 0x3), Gu.flag[0x21d] === 0x0 && (G1(Gu, 'flag')[0x1aa] = -0x1), G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x0] = 0x24, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x18a, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x7, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x1] = 0x24, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x4a, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x2] = 0x24, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x18a, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xb4, G1(Gu, 'battlemsg')[0x0] = "* Swatchlings bowed in!";
        break;
      }
    case 0x39:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x0] = 0x20, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1c2, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x23, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_manager_enemy, G1(Gu, 'monstertype')[0x1] = 0x2a, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e6, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x5f, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x2] = 0x20, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1c2, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xdc, G1(Gu, 'battlemsg')[0x0] = "* Tasque Manager blocks the way!";
        break;
      }
    case 0x3a:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_berdlyb_enemy, G1(Gu, 'monstertype')[0x0] = 0x2b, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x64, G1(Gu, 'monsterinstancetype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Berdly rides in!";
        break;
      }
    case 0x3b:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_queen_enemy, G1(Gu, 'monstertype')[0x0] = 0x30, Gb('scr_sideb_get_phase').call(this) < 0x2 ? (G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1d6, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x78) : (G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1c2, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x62), G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Queen blocks the way!";
        break;
      }
    case 0x3c:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_spamton_enemy, G1(Gu, 'monstertype')[0x0] = 0x31, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xb4, G1(Gu, 'heromakex')[0x0] = this.xx + 0x5a, G1(Gu, 'heromakey')[0x0] = this.yy + 0xaa, G1(Gu, 'battlemsg')[0x0] = "* DON'T YOU WANNA BE A BIG SHOT?";
        break;
      }
    case 0x3d:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_spamton_neo_enemy, G1(Gu, 'monstertype')[0x0] = 0x32, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x50, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'heromakex')[0x0] = this.xx + 0x50, G1(Gu, 'heromakey')[0x0] = this.yy + 0x3c, Gb('scr_sideb_get_phase').call(this) > 0x2 && (G1(Gu, 'heromakey')[0x0] = this.yy + 0xad), G1(Gu, 'battlemsg')[0x0] = "* It's time to be a BIG SHOT!";
        break;
      }
    case 0x3e:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_sweet_enemy, G1(Gu, 'monstertype')[0x0] = 0x27, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x28, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_kk_enemy, G1(Gu, 'monstertype')[0x1] = 0x26, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x5a, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_hatguy_enemy, G1(Gu, 'monstertype')[0x2] = 0x25, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xc8, G1(Gu, 'battlemsg')[0x0] = "* Sweet Cap'n Cakes block your way!";
        break;
      }
    case 0x3f:
      {
        Gp(Gb('i_ex').call(this, Gf.obj_ch2_scene21_loop)) && Gc.with('obj_ch2_scene21_loop', xR => {
          G1(Gu, 'heromakex')[0x0] = xR.kr_actor.x, G1(Gu, 'heromakey')[0x0] = xR.kr_actor.y, G1(Gu, 'heromakex')[0x1] = xR.ra_actor.x, G1(Gu, 'heromakey')[0x1] = xR.ra_actor.y;
        }), G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_rouxls_enemy, G1(Gu, 'monstertype')[0x0] = 0x2d, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3c, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Thrash Machine reluctantly fights you!";
        break;
      }
    case 0x40:
      {
        G1(Gu, 'flag')[0x1aa] = GX(0x4, 0x5, 0x6, 0x7, 0x8), G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x0] = 0x24, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x18, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x1] = 0x24, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e8, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x8e, G1(Gu, 'battlemsg')[0x0] = "* Swatchlings bowed in!";
        break;
      }
    case 0x41:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewerewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x28, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f6, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x46, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewerewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x28, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1c8, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xbe, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 0x42:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x0] = 0x22, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xac, G1(Gu, 'battlemsg')[0x0] = "* Maus blocked the way! ";
        break;
      }
    case 0x43:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ee, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* H-huh!? What's going on!?";
        break;
      }
    case 0x44:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x28, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x1] = 0x1e, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 0x45:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x0] = 0x1e, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x28, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x1] = 0x23, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 0x46:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x96, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xaa, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Animal house.";
        break;
      }
    case 0x47:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_clubsenemy, G1(Gu, 'monstertype')[0x0] = 0x2f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x190, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x50, G1(Gu, 'battlemsg')[0x0] = "* Clover joins the stage!";
        break;
      }
    case 0x48:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_dojograzeenemy, G1(Gu, 'monstertype')[0x0] = 0x2a, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x64, G1(Gu, 'battlemsg')[0x0] = "* It's a grazing adventure.";
        break;
      }
    case 0x49:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ee, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x6e, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "\\EE* H-huh!? What's going on!?&* What are we doing!?";
        break;
      }
    case 0x4a:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ee, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x40, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ae, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x82, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x2] = 0x23, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1ef, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xcc, G1(Gu, 'battlemsg')[0x0] = "* Smorgasbord 2.";
        break;
      }
    case 0x4b:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x21c, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x55, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x21, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1b3, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x90, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x2] = 0x21, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x20a, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xd6, G1(Gu, 'battlemsg')[0x0] = "* Werewires swung in!";
        break;
      }
    case 0x4c:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x3e, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x21, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1b2, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x7e, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x2] = 0x22, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x212, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xec, G1(Gu, 'battlemsg')[0x0] = "* Werewire and Maus swung down like stringed superheroes!";
        break;
      }
    case 0x4d:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x96, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x1] = 0x1e, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xaa, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Ambyu-Lance and its pet appeared!";
        break;
      }
    case 0x4e:
      {
        G1(Gu, 'flag')[0x1aa] = GX(0x4, 0x5, 0x6, 0x7, 0x8), G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x0] = 0x24, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x186, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x12, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x1] = 0x24, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x18a, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xb4, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x2] = 0x1f, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1cc, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xf0, G1(Gu, 'battlemsg')[0x0] = "* Poppup and caretakers appeared!";
        break;
      }
    case 0x4f:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x0] = 0x22, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x46, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x1] = 0x22, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x212, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x8e, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x2] = 0x22, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1d4, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xd6, G1(Gu, 'battlemsg')[0x0] = "* Maice blocked the way!";
        break;
      }
    case 0x50:
      {
        G1(Gu, 'flag')[0x1aa] = GX(0x4, 0x5, 0x6, 0x7, 0x8), G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x0] = 0x24, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x19a, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x12, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x1] = 0x24, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e2, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x64, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x2] = 0x22, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1d2, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xf0, G1(Gu, 'battlemsg')[0x0] = "* Swatchling and vermin appeared!";
        break;
      }
    case 0x51:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewerewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x28, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e2, G1(Gu, 'monstermakey')[0x0] = this.yy + 0xa4, G1(Gu, 'monsterinstancetype', 0x1)[0x1] = 0x0, G1(Gu, 'monsterinstancetype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 0x52:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_berdlyb2_enemy, G1(Gu, 'monstertype')[0x0] = 0x2e, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1d6, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x90, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x21c, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x54, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x20a, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xd6, G1(Gu, 'battlemsg')[0x0] = "* Berdly blocks the way!";
        break;
      }
    case 0x53:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_mauswheel_enemy, G1(Gu, 'monstertype')[0x0] = 0x2c, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1c2, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x64, G1(Gu, 'monsterinstancetype', 0x1)[0x1] = 0x0, G1(Gu, 'monsterinstancetype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Mauswheel spins into you!";
        break;
      }
    case 0x54:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_gigaqueen_enemy, G1(Gu, 'monstertype')[0x0] = 0x33, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x96, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x0, G1(Gu, 'monsterinstancetype', 0x1)[0x1] = 0x0, G1(Gu, 'monsterinstancetype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* GIGA Queen blocks the way!";
        break;
      }
    case 0x55:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x0] = 0x1e, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x2a, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x1] = 0x1e, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1a6, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x86, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x2] = 0x1e, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xc8, G1(Gu, 'battlemsg')[0x0] = "* Ambyu-Lances beeped towards you!";
        break;
      }
    case 0x56:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x18, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1e2, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x7e, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x2] = 0x23, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xb8, G1(Gu, 'battlemsg')[0x0] = "* Tasque and Co. drew near!";
        break;
      }
    case 0x57:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x0] = 0x20, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x18, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1da, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x72, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x2] = 0x20, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xb8, G1(Gu, 'battlemsg')[0x0] = "* Tasques zoomed towards you!";
        break;
      }
    case 0x58:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b2, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x24, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x1] = 0x23, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x64, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xbe, G1(Gu, 'battlemsg')[0x0] = "* Poppup and Virovirokun Appeared!";
        break;
      }
    case 0x59:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_manager_enemy, G1(Gu, 'monstertype')[0x0] = 0x2a, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e7, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x5e, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Graze!";
        break;
      }
    case 0x5a:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1dc, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x46, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x21, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1c6, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Round One!";
        break;
      }
    case 0x5b:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x28, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x1] = 0x1e, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1d2, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x6a, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x2] = 0x23, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x19c, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xb8, G1(Gu, 'battlemsg')[0x0] = "* Round Two!";
        break;
      }
    case 0x5c:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x0] = 0x20, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x34, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x1] = 0x20, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1dc, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x8c, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x2] = 0x22, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x200, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xec, G1(Gu, 'battlemsg')[0x0] = "* Round Three!";
        break;
      }
    case 0x5d:
      {
        G1(Gu, 'flag')[0x1aa] = GX(0x0, 0x1, 0x2, 0x3), G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x0] = 0x24, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x18a, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x8, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x1] = 0x24, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x1] = this.yy + 0x4a, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_swatchling_enemy, G1(Gu, 'monstertype')[0x2] = 0x24, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x18a, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xa0, G1(Gu, 'battlemsg')[0x0] = "* Round Four!";
        break;
      }
    case 0x5e:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewerewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x28, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1d0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x44, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_werewerewire_enemy, G1(Gu, 'monstertype')[0x1] = 0x28, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ee, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xb8, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Final Round!";
        break;
      }
    case 0x5f:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_werewire_enemy, G1(Gu, 'monstertype')[0x0] = 0x21, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1f6, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x90, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Werewire appeared.";
        break;
      }
    case 0x60:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_virovirokun_enemy, G1(Gu, 'monstertype')[0x0] = 0x23, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x78, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Virovirokun floated in!";
        break;
      }
    case 0x61:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_omawaroid_enemy, G1(Gu, 'monstertype')[0x0] = 0x1e, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x72, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Ambyu-Lance beeps towards you!";
        break;
      }
    case 0x62:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_tasque_enemy, G1(Gu, 'monstertype')[0x0] = 0x20, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1ee, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x90, G1(Gu, 'monstertype', 0x1)[0x1] = 0x0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Tasque crossed your path!";
        break;
      }
    case 0x63:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[0x0] = 0x1, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1e0, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x50, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[0x1] = 0x1, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1f4, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa0, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_baseenemy, G1(Gu, 'monstertype')[0x2] = 0x1, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x208, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xf0, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'battlemsg')[0x0] = "* Test enemies showed up.";
        break;
      }
    case 0x64:
      {
        G1(Gu, 'heromakex')[0x0] = this.xx + 0x5e, G1(Gu, 'heromakey')[0x0] = this.yy + 0x32, G1(Gu, 'heromakex')[0x1] = this.xx + 0x50, G1(Gu, 'heromakey')[0x1] = this.yy + 0x7a, G1(Gu, 'heromakex')[0x2] = this.xx + 0x48, G1(Gu, 'heromakey')[0x2] = this.yy + 0xc8, G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_dojo_spareenemy, G1(Gu, 'monstertype')[0x0] = 0x34, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x64, G1(Gu, 'battlemsg')[0x0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 0x65:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_poppup_enemy, G1(Gu, 'monstertype')[0x0] = 0x1f, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x32, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_maus_enemy, G1(Gu, 'monstertype')[0x1] = 0x22, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1ea, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa6, G1(Gu, 'monstertype', 0x2)[0x2] = 0x0, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1b8, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xce, G1(Gu, 'battlemsg')[0x0] = "* Poppup and Maus appeared.";
        break;
      }
    case 0x66:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_pipis_enemy, G1(Gu, 'monstertype')[0x0] = 0x35, G1(Gu, 'monstermakex')[0x0] = this.xx + 0x212, G1(Gu, 'monstermakey')[0x0] = this.yy + 0x64, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_pipis_enemy, G1(Gu, 'monstertype')[0x1] = 0x35, G1(Gu, 'monstermakex')[0x1] = this.xx + 0x1c0, G1(Gu, 'monstermakey')[0x1] = this.yy + 0xa8, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_pipis_enemy, G1(Gu, 'monstertype')[0x2] = 0x35, G1(Gu, 'monstermakex')[0x2] = this.xx + 0x1fe, G1(Gu, 'monstermakey')[0x2] = this.yy + 0xfa, G1(Gu, 'battlemsg')[0x0] = "* Pipis.";
        break;
      }
    case 0x309:
      {
        G1(Gu, 'monsterinstancetype')[0x0] = Gf.obj_bullettester_enemy, G1(Gu, 'monsterinstancetype')[0x1] = Gf.obj_bullettester_enemy, G1(Gu, 'monsterinstancetype')[0x2] = Gf.obj_bullettester_enemy, G1(Gu, 'monstertype')[0x0] = 0x1, G1(Gu, 'monstertype')[0x1] = 0x1, G1(Gu, 'monstertype')[0x2] = 0x1, G1(Gu, 'battlemsg')[0x0] = '\x20';
        break;
      }
  }
}
Gg(x2, 'scr_encountersetup'), GM(x2, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 50:\n;\ncase 51:\n;\ncase 52:\n;\ncase 53:\n;\ncase 54:\n;\ncase 55:\n;\ncase 56:\n;\ncase 57:\n;\ncase 58:\n;\ncase 59:\n;\ncase 60:\n;\ncase 61:\n;\ncase 62:\n;\ncase 63:\n;\ncase 64:\n;\ncase 65:\n;\ncase 66:\n;\ncase 67:\n;\ncase 68:\n;\ncase 69:\n;\ncase 70:\n;\ncase 71:\n;\ncase 72:\n;\ncase 73:\n;\ncase 74:\n;\ncase 75:\n;\ncase 76:\n;\ncase 77:\n;\ncase 78:\n;\ncase 79:\n;\ncase 80:\n;\ncase 81:\n;\ncase 82:\n;\ncase 83:\n;\ncase 84:\n;\ncase 85:\n;\ncase 86:\n;\ncase 87:\n;\ncase 88:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 95:\n;\ncase 96:\n;\ncase 97:\n;\ncase 98:\n;\ncase 99:\n;\ncase 100:\n;\ncase 101:\n;\ncase 102:\n;\ncase 777:"), GH();
var x3 = {
    0xc: 'checkers',
    0x35: 'battle',
    0x38: 'mansion',
    0x39: 'mansion',
    0x3a: 'berdly_chase',
    0x3b: 'queen_boss',
    0x3c: 'spamton_battle',
    0x3d: 'spamton_neo_mix_ex_wip',
    0x3e: '',
    0x3f: 'rouxls_battle',
    0x4a: 'battle',
    0x4b: 'battle',
    0x4c: 'battle',
    0x52: 'berdly_chase',
    0x53: 'mansion',
    0x54: '',
    0x5a: 'battle',
    0x5f: 'battle',
    0x66: 'spamton_basement'
  },
  x4 = {
    0x3a: 'plain',
    0x3b: 'mansion_parallax',
    0x3d: 'plain',
    0x3f: 'plain',
    0x309: 'plain'
  },
  x5 = 'battle',
  x6 = {
    0x52: {
      'test': "== 2",
      'song': 'berdly_battle_heartbeat_true'
    }
  },
  x7 = {
    0x38: [0x1, 0x1],
    0x39: [0x1, 0x1],
    0x53: [0x1, 0x1],
    0x66: [0x1, 0x1]
  };
Gx.scr_damage = i, Gx.scr_damage_all = o, Gx.scr_act_simul = y;
var x8 = new Proxy({}, {
    'get': Gg((xZ, xR) => a[xR] || G6[xR], 'get')
  }),
  x9 = new Set(GY.unusedEncounters || []),
  xG = GY.unusedEncounterWhy || {},
  xx = 0x32,
  xu = {
    0x309: "the developers' bullet-tester slot: three obj_bullettester_enemy with no monster data"
  },
  xV = new Set([0x0, 0x1, ...Object.keys(xu).map(Number)]),
  xp = new Set((GN(x2) ?? String(x2)).match(/case (\d+):/g).map(xZ => Number(xZ.slice(0x5, -0x1)))),
  xL = {
    0x32: "Cyber City",
    0x33: "Cyber City",
    0x34: "Cyber City",
    0x35: "Cyber City",
    0x36: "Cyber Field",
    0x37: "Cyber Field",
    0x38: "Queen's Mansion",
    0x39: "Cyber City",
    0x3a: "Cyber Field - Berdly",
    0x3b: "Queen's Mansion - Queen",
    0x3c: "Cyber City - Spamton",
    0x3d: "Cyber City - Spamton NEO",
    0x3e: "Cyber City - Sweet Cap’n Cakes",
    0x3f: "Cyber Field - Rouxls",
    0x40: "Queen's Mansion",
    0x41: "Cyber City",
    0x42: "Cyber Field",
    0x43: "Cyber Field",
    0x44: "Cyber Field",
    0x45: "Cyber Field",
    0x46: "Cyber City",
    0x47: "Cyber City",
    0x48: 'Dojo',
    0x49: "Cyber Field",
    0x4a: "Cyber City",
    0x4b: "Cyber City",
    0x4c: "Cyber City",
    0x4d: "Cyber City",
    0x4e: "Cyber City",
    0x4f: "Cyber City",
    0x50: "Cyber City",
    0x51: "Cyber City",
    0x52: "Cyber City",
    0x53: "Cyber City",
    0x54: "Cyber City",
    0x55: "Cyber City",
    0x56: "Cyber City",
    0x57: "Cyber City",
    0x58: "Cyber City",
    0x59: "Cyber City",
    0x5a: "Cyber City",
    0x5b: "Cyber City",
    0x5c: "Cyber City",
    0x5d: "Cyber City",
    0x5e: "Cyber City",
    0x5f: "Cyber City",
    0x60: "Cyber City",
    0x61: "Cyber City",
    0x62: "Cyber City",
    0x63: "Cyber City",
    0x64: "Cyber City",
    0x65: "Cyber City",
    0x66: "Cyber City",
    0x309: 'Debug'
  },
  xB = {
    0x54: 'room_dw_mansion_top'
  },
  xh = {
    0x64: "Jigsaw Joe",
    0x48: "Graze Challenge 1",
    0x47: "Clover Rematch",
    0x59: "Tasque Manager Says",
    0x5a: "All Stars 1",
    0x5b: "All Stars 2",
    0x5c: "All Stars 3",
    0x5d: "All Stars 4",
    0x5e: "All Stars Final"
  },
  xd = [0x64, 0x48, 0x47, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e],
  xQ = 'ch2enc102';
function xD(xZ, xR = 0x22) {
  let xi = [],
    xm = '';
  for (let xF of String(xZ).split(/\s+/).filter(Boolean)) xm && xm.length + 0x1 + xF.length > xR ? (xi.push(xm), xm = xF) : xm = xm ? xm + '\x20' + xF : xF;
  return xm && xi.push(xm), xi.join('#');
}
Gg(xD, 'wrapDesc');
function xX() {
  return {
    't': Gu.monstertype.slice(),
    'it': Gu.monsterinstancetype.slice(),
    'mx': Gu.monstermakex.slice(),
    'my': Gu.monstermakey.slice(),
    'hx': Gu.heromakex.slice(),
    'hy': Gu.heromakey.slice(),
    'bm': (Gu.battlemsg || []).slice(),
    'name': Gu.monstername.slice()
  };
}
Gg(xX, 'snapshot');
function xc(xZ) {
  Gu.monstertype = xZ.t, Gu.monsterinstancetype = xZ.it, Gu.monstermakex = xZ.mx, Gu.monstermakey = xZ.my, Gu.heromakex = xZ.hx, Gu.heromakey = xZ.hy, Gu.battlemsg = xZ.bm, Gu.monstername = xZ.name;
}
Gg(xc, 'restore');
function xg(xZ) {
  let xR = {
    't': Gu.monstertype.slice(),
    'n': Gu.monstername.slice()
  };
  Gu.monstertype[0x0] = xZ;
  let xi = {
    'myself': 0x0
  };
  try {
    l.call(xi);
  } catch {}
  let xm = Gu.monstername[0x0];
  return Gu.monstertype = xR.t, Gu.monstername = xR.n, xm && xm.trim() ? xm : "Enemy " + xZ;
}
Gg(xg, 'monsterName');
var xk = 0x40,
  xM = Gg((xZ, xR) => Array.from({
    'length': xk
  }, () => new Array(xZ).fill(xR)), 'rows');
function xN() {
  let xZ = {
    'actingchoice': 0x0,
    'actingsimul': 0x0,
    'actingsingle': 0x0,
    'actingtarget': 0x0,
    'armor': 0x0,
    'battleactcount': 0x0,
    'guts': 0x0,
    'input_released': 0x0,
    'keyitem': 0x0,
    'litem': 0x0,
    'phone': 0x0,
    'pocketitem': 0x0,
    'smxx': 0x0,
    'smyy': 0x0,
    'weapon': 0x0,
    'weaponstyle': 0x0,
    'choicemsg': '\x20',
    'currentsong': '\x20',
    'monsterattackname': '\x20',
    'othername': '\x20'
  };
  for (let [xR, xi] of Object.entries(xZ)) Array.isArray(Gu[xR]) || (Gu[xR] = new Array(xk).fill(xi));
  for (let xm of ['itembolts', 'itemboltspeed', 'itemelement', 'itemelementamount', 'itemgrazeamt', 'itemspecial']) Array.isArray(Gu[xm]) || (Gu[xm] = xM(0x4, 0x0));
  Array.isArray(Gu.menucoord) || (Gu.menucoord = xM(xk, 0x0)), Array.isArray(Gu.cinstance) || (Gu.cinstance = Array.from({
    'length': xk
  }, () => ({
    'x': 0x0,
    'y': 0x0
  })));
}
Gg(xN, 'ensureChapter2Globals');
var xH = {
    'maxhp': {
      0x1: 0x78,
      0x2: 0x8c,
      0x3: 0x64,
      0x4: 0x5a
    },
    'at': {
      0x1: 0xc,
      0x2: 0x10,
      0x3: 0xa,
      0x4: 0x3
    },
    'mag': {
      0x2: 0x1,
      0x3: 0x9,
      0x4: 0xb
    },
    'df': {
      0x4: 0x1
    },
    'charweapon': {
      0x4: 0xc
    },
    'chararmor1': {
      0x1: 0x1,
      0x2: 0x1,
      0x3: 0x1,
      0x4: 0xe
    },
    'chararmor2': {
      0x1: 0x1,
      0x2: 0x1,
      0x3: 0x4,
      0x4: 0x16
    }
  },
  xo = {
    'maxhp': [0x5a, 0x6e, 0x46],
    'at': [0xa, 0xe, 0x8],
    'charweapon': [0x1, 0x2, 0x3],
    'chararmor1': [0x0, 0x0, 0x0],
    'chararmor2': [0x0, 0x0, 0x0]
  };
function xy() {
  for (let [xZ, xR] of Object.entries(xo)) for (let xi = 0x0; xi < 0x3; xi++) if ((Gu[xZ] && Gu[xZ][xi + 0x1]) !== xR[xi]) return !0x1;
  return !0x0;
}
Gg(xy, 'isChapter1Party');
function xs(xZ) {
  let xR = (Gu.char || []).includes(0x4) && !!(xZ && xZ.storyParty),
    xi = !!(Gu.charhero && Gu.charhero[0x4] === 'noelle');
  xR && (Gu.charbase[0x4] = 0x4, Gu.charhero && (Gu.charhero[0x4] = 'noelle'), Gu.charname[0x4] = 'Noelle');
  let xm = xy();
  if (!xm && !(xR && !xi)) return;
  let xF = xq => !(xi && xq === '4') && (xm || xq === '4');
  for (let [xq, xA] of Object.entries(xH)) for (let [xr, xP] of Object.entries(xA)) Array.isArray(Gu[xq]) && xF(xr) && (Gu[xq][Number(xr)] = xP);
  for (let xE of Object.keys(xH.maxhp)) xF(xE) && (Gu.hp[Number(xE)] = Gu.maxhp[Number(xE)]);
  Array.isArray(Gu.spell) && !xi && (Gu.spell[0x4] = new Array(0xc).fill(0x0), Gu.spell[0x4][0x0] = 0x2, Gu.spell[0x4][0x1] = 0x8, Gu.spell[0x4][0x2] = 0x9, xZ && xZ.flags && xZ.flags[0x393] >= 0x5 && (Gu.spell[0x4][0x3] = 0xa)), G9(), GG();
}
Gg(xs, 'applyChapter2Start');
var xU = {
    0x3c: [0x1, 0x0, 0x0],
    0x3f: [0x1, 0x3, 0x0],
    0x54: [0x1, 0x0, 0x0],
    0x52: [0x1, 0x4, 0x0],
    0x5f: [0x1, 0x4, 0x0],
    0x60: [0x1, 0x4, 0x0],
    0x61: [0x1, 0x4, 0x0],
    0x62: [0x1, 0x4, 0x0]
  },
  xl = {
    0x52: [{
      'suffix': 'sg',
      'party': [0x1, 0x4, 0x0],
      'flags': {
        0x393: 0x5
      },
      'note': "Weird Route (Snowgrave)"
    }],
    0x3d: [{
      'suffix': 'sg',
      'party': [0x1, 0x0, 0x0],
      'flags': {
        0x393: 0x9
      },
      'note': "Weird Route (Snowgrave)"
    }],
    0x3b: [{
      'suffix': 'sg',
      'party': [0x1, 0x2, 0x3],
      'flags': {
        0x393: 0x9
      },
      'note': "Weird Route (Snowgrave)"
    }]
  };
function xa(xZ = 0x320) {
  let xR = [];
  for (let xi = xx; xi <= xZ; xi++) if (!(xV.has(xi) || !xp.has(xi))) {
    for (let xm of [null, ...(xl[xi] || [])]) xj(xR, xi, xm);
  }
  return xR;
}
Gg(xa, 'buildChapter2Fights');
function xj(xZ, xR, xi) {
  {
    let xm = xX(),
      xF = Gu.char.slice(),
      xq = {},
      xA = xi && xi.party || xU[xR] || null;
    xA && (Gu.char = xA.slice());
    let xr = xi && xi.flags || null;
    if (xr) {
      for (let [xE, xv] of Object.entries(xr)) xq[xE] = Gu.flag[xE], Gu.flag[xE] = xv;
    }
    Gu.monstertype = [0x0, 0x0, 0x0], Gu.monsterinstancetype = [null, null, null], Gu.battlemsg = ['\x20'];
    let xP = !0x0;
    try {
      x2.call({}, xR);
    } catch (xI) {
      xP = !0x1, console.error("ch2 encounter " + xR + " setup failed", xI);
    }
    if (xP && Gu.monstertype[0x0] > 0x0) {
      let xz = [];
      for (let xS = 0x0; xS < 0x3; xS++) {
        let xn = Gu.monstertype[xS],
          xw = Gu.monsterinstancetype[xS];
        xn > 0x0 && xw && xz.push({
          'cls': xw,
          'type': xn,
          'x': Gu.monstermakex[xS],
          'y': Gu.monstermakey[xS],
          'setup': () => {}
        });
      }
      if (xz.length) {
        let xO = xz.map(u0 => xg(u0.type)),
          xT = {};
        for (let u0 of xO) xT[u0] = (xT[u0] || 0x0) + 0x1;
        let xC = Object.entries(xT).map(([u1, u2]) => u2 > 0x1 ? u1 + '\x20x' + u2 : u1).join(" & "),
          xJ = xh[xR] && !xi ? xh[xR] : null,
          xK = xJ ? /All Stars/.test(xJ) ? xJ + ':\x20' + xC : xJ : xC + (xi ? '\x20(' + xi.note + ')' : ''),
          xW = x9.has(xR) && !xJ,
          xY = xJ ? xd.indexOf(xR) : -0x1,
          xf = x3[String(xR)] ?? x5,
          xb = x6 && x6[String(xR)];
        if (xb) {
          let [u1, u2] = xb.test.split('\x20'),
            u3 = A(),
            u4 = Number(u2);
          ({
            '==': u3 === u4,
            '!=': u3 !== u4,
            '>=': u3 >= u4,
            '<=': u3 <= u4,
            '>': u3 > u4,
            '<': u3 < u4
          })[u1] && (xf = xb.song);
        }
        xZ.push({
          'id': 'ch2enc' + xR + (xi ? xi.suffix : ''),
          'name': xK,
          'chapter': 0x2,
          'cut': xW,
          'area': xW ? "CUT CONTENT" : xJ ? 'Dojo' : xL[xR] || "Chapter 2",
          'generated': !0x0,
          ...(xY >= 0x0 ? {
            'dojo': !0x0,
            'listAfter': xY === 0x0 ? xQ : 'ch2enc' + xd[xY - 0x1]
          } : {}),
          'desc': xK + "#Chapter 2, encounter " + xR + '.' + (xJ ? "#A dojo challenge" + (/All Stars/.test(xJ) ? " (Ch2 All Stars)." : '.') : '') + (xW ? '#' + xD(xG[String(xR)] || '') : ''),
          'party': Gu.char.slice(),
          'storyParty': !!xA,
          'flags': xr ? {
            ...xr
          } : void 0x0,
          'heromakex': Gu.heromakex.slice(),
          'heromakey': Gu.heromakey.slice(),
          'monstermakex': Gu.monstermakex.slice(0x0, 0x3),
          'monstermakey': Gu.monstermakey.slice(0x0, 0x3),
          'monsters': xz,
          'battlemsg': Gu.battlemsg && Gu.battlemsg[0x0] || '\x20',
          'encounterno': xR,
          'music': xf,
          ...(x7[String(xR)] ? {
            'musiclevel': x7[String(xR)]
          } : {}),
          'room': xB[xR] || (xJ ? 'room_dw_castle_dojo' : null),
          'background': xJ ? GW() : E(x4[String(xR)])
        });
      }
    }
    xc(xm), Gu.char = xF;
    for (let [u5, uL] of Object.entries(xq)) Gu.flag[u5] = uL;
  }
}
Gg(xj, 'buildOne');
export { GC as a, GY as b, x8 as c, xD as d, xN as e, xs as f, xa as g };