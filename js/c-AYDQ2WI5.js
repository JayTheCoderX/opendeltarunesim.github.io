import { Ed as o, F as y, Ha as l, Lp as a, Mo as j, No as Z, la as i, sf as m, v as A } from "./c-F3KC5JBP.js";
import { a as r } from "./c-QVGXLNTR.js";
import { a as E, c as v } from "./c-HQHPDIVM.js";
import { d as I, l as S, m as n } from "./c-UTWCWEAR.js";
import { E as w, Fd as T, Sh as b, Yb as G0, g as G1, h as G2, k as G3, sd as G4, ub as G5 } from "./c-PWNRTD7X.js";
import { Oa as G6, s as G7, y as G8 } from "./c-NNTXHBME.js";
import { C as G9, F as GG, P as Gx, g as Gu, l as GV } from "./c-ZQQWH6UG.js";
import { E as Gp, Ib as GL, Ra as GB, l as Gh, mb as Gd, pb as GQ, qb as GD, r as GX, xb as Gc } from "./c-PBMEVLU6.js";
import { a as Gg, e as Gk, j as GM, k as GN, l as GH } from "./c-XSSGDLV7.js";
GH();
function Go(xZ, xR, xi, xm, xF, xq, xA, xr, xP, xE, xv, xI) {
  let xz = xR.frame(xi);
  if (!xz) {
    return;
  }
  let xS = Math.max(0, xm);
  let xn = Math.max(0, xF);
  let xw = Math.min(xq, xR.w - xS);
  let xO = Math.min(xA, xR.h - xn);
  if (!(xw <= 0) && !(xO <= 0) && !(xI <= 0)) {
    xZ.save();
    xZ.globalAlpha = Math.min(1, xI);
    xZ.drawImage(xz, xS, xn, xw, xO, xr, xP, xw * xE, xO * xv);
    xZ.restore();
  }
}
Gg(Go, "partExt");
function Gy(xZ, xR, xi, xm, xF, xq, xA, xr, xP, xE, xv, xI) {
  if (!xR) {
    return;
  }
  let xz = xR.w * xE;
  let xS = xR.h * xv;
  if (!xz || !xS) {
    return;
  }
  let xn = xq - (xq % xz - xm % xz) - xz * (xq % xz < xm % xz);
  let xw = xA - (xA % xS - xF % xS) - xS * (xA % xS < xF % xS);
  let xO = -Infinity;
  let xT = Infinity;
  let xC = -Infinity;
  let xJ = Infinity;
  try {
    let xY = xZ.getTransform && xZ.getTransform();
    let xf = xZ.canvas;
    if (xY && xf && !xY.b && !xY.c && xY.a > 0 && xY.d > 0) {
      xO = -xY.e / xY.a;
      xT = (xf.width - xY.e) / xY.a;
      xC = -xY.f / xY.d;
      xJ = (xf.height - xY.f) / xY.d;
    }
  } catch {}
  let xK = xw;
  let xW = 0;
  while (xn <= xr && xW++ < 4000) {
    if (xn + xz >= xO && xn <= xT) {
      let xb = 0;
      while (xK <= xP && xb++ < 4000) {
        if (xK + xS >= xC && xK <= xJ) {
          let u0 = xn <= xq ? xq - xn : 0;
          let u1 = xn + u0;
          let u2 = xK <= xA ? xA - xK : 0;
          let u3 = xK + u2;
          let u4 = xr <= xn + xz ? xz - (xn + xz - xr) + 1 - u0 : xz - u0;
          let u5 = xP <= xK + xS ? xS - (xK + xS - xP) + 1 - u2 : xS - u2;
          Go(xZ, xR, xi, u0, u2, u4, u5, u1, u3, xE, xv, xI);
        }
        xK += xS;
      }
    }
    xK = xw;
    xn += xz;
  }
}
Gg(Gy, "tiledArea");
var Gs = Gg(xZ => xZ && xZ.ctx && typeof xZ.ctx.drawImage == "function" ? xZ.ctx : null, "ctxOf");
var GU = class u6 extends GQ {
  create() {
    Object.assign(this, {
      init: false,
      x_pos: this.x,
      y_pos: this.y,
      x_scale: 2,
      y_scale: 2,
      alpha: 1,
      width: -1,
      height: -1,
      x_speed: 0,
      y_speed: 0,
      room_wide: false,
      loop_vertical: false,
      spr: null,
      ch: "ch2",
      camx: 0,
      camy: 0
    });
  }
  step() {
    let xZ = I(this.ch, this.spr);
    if (!this.init && xZ) {
      this.init = true;
      if (this.width === -1) {
        this.width = xZ.w * this.x_scale;
      }
      if (this.height === -1) {
        this.height = xZ.h * this.y_scale;
      }
    }
    if (!this.init) {
      return;
    }
    this.x_pos += this.x_speed;
    let xR = this.room_wide ? 0 : this.camx;
    if (this.x_pos + this.width < xR) {
      this.x_pos += this.width;
    }
    if (this.x_pos - this.width > xR) {
      this.x_pos -= this.width;
    }
    if (this.y_speed !== 0) {
      this.y_pos += this.y_speed;
      if (this.y_pos + this.height < this.camy) {
        this.y_pos += this.height;
      }
      if (this.y_pos - this.height > this.camy) {
        this.y_pos -= this.height;
      }
    }
  }
  draw(xZ) {
    let xR = Gs(xZ);
    let xi = I(this.ch, this.spr);
    if (!xR || !xi || !this.init) {
      return;
    }
    let xm = this.x_pos - this.camx;
    let xF = this.y_pos - this.camy;
    let xq = this.width;
    let xA = this.height;
    let xr = Math.floor(this.image_index || 0);
    Gy(xR, xi, xr, xm - xq, xF, xm, xF, xm - xq + xq, xF + xA, this.x_scale, this.y_scale, this.alpha);
    Gy(xR, xi, xr, xm, xF, xm, xF, xm + xq, xF + xA, this.x_scale, this.y_scale, this.alpha);
    Gy(xR, xi, xr, xm + xq, xF, xm + xq, xF, xm + xq + xq, xF + xA, this.x_scale, this.y_scale, this.alpha);
  }
};
Gg(GU, "obj_looping_tiled_area");
Gk(GU, "kinds", GD("obj_looping_tiled_area", GQ));
Gk(GU, "defaultDepth", 0);
var Gl = GU;
function Ga(xZ, xR, xi, xm) {
  let xF = GL(xZ, xR, Gl);
  xF.x_pos = xZ;
  xF.y_pos = xR;
  xF.spr = xi;
  Object.assign(xF, xm);
  return xF;
}
Gg(Ga, "looping");
var Gj = class u7 extends GQ {
  create() {
    this.camx = 0;
    this.camy = 0;
    this.spr = null;
    this.frame = 0;
    this.anim = 0;
    this.xs = 1;
    this.ys = 1;
    this.alpha = 1;
    this.sineY = 0;
    this.timer = 0;
    this.depthOf = null;
  }
  step() {
    this.frame += this.anim;
    this.timer++;
    if (this.sineY) {
      this.ys = Math.sin(this.timer / 10) * 0.5 + 1.5;
    }
    if (this.depthOf) {
      let xZ = Gc.first(this.depthOf[0]);
      if (xZ) {
        this.depth = xZ.depth + this.depthOf[1];
      }
    }
  }
  draw(xZ) {
    let xR = Gs(xZ);
    let xi = I("ch2", this.spr);
    if (!xR || !xi) {
      return;
    }
    let xm = xi.frame(Math.floor(this.frame));
    if (xm) {
      xR.save();
      xR.globalAlpha = this.alpha;
      xR.translate(this.x - this.camx, this.y - this.camy);
      xR.scale(this.xs, this.ys);
      xR.drawImage(xm, -xi.ox, -xi.oy);
      xR.restore();
    }
  }
};
Gg(Gj, "obj_ch2_roomprop");
Gk(Gj, "kinds", GD("obj_ch2_roomprop", GQ));
Gk(Gj, "defaultDepth", 0);
var GZ = Gj;
function GR(xZ, xR, xi, xm, xF = {}) {
  let xq = GL(xZ, xR, GZ);
  xq.spr = xi;
  xq.depth = xm;
  Object.assign(xq, xF);
  return xq;
}
Gg(GR, "prop");
var Gi = class u8 extends GQ {
  create() {
    this.visible = false;
    this.sinerx = 0;
    this.sinery = 0;
    this.coaster_offset_x = -25;
    this.coaster_offset_y = 40;
    this.character_offset_x = 0;
    this.character_offset_y = 0;
    this.target_x_end = 0;
    this.con = 0;
    this.actor = {
      sprite_index: null
    };
    this.character_sprite = null;
  }
  draw() {}
};
Gg(Gi, "obj_coaster_cart");
Gk(Gi, "kinds", GD("obj_coaster_cart", GQ));
Gk(Gi, "defaultDepth", 0);
var Gm = Gi;
function GF(xZ, xR, xi, xm) {
  let xF = GL(xZ, xR, Gm);
  xF.coaster_offset_x = xi;
  xF.coaster_offset_y = xm;
  return xF;
}
Gg(GF, "coasterCart");
v(58, ({
  vx: xZ,
  vy: xR
}) => {
  let xi = (xr, xP) => {
    let xE = I("ch2", xr);
    if (xE) {
      return xE.w * 2 * 3;
    } else {
      return 0;
    }
  };
  let xm = xr => {
    let xP = I("ch2", xr);
    if (xP) {
      return xP.h - 1;
    } else {
      return 0;
    }
  };
  let xF = {
    room_wide: true,
    x_scale: 1,
    y_scale: 1,
    camx: xZ,
    camy: xR
  };
  Ga(0, 0, "spr_cyber_coaster_bg_tile", {
    ...xF,
    width: xi("spr_cyber_coaster_bg_cityscape"),
    height: xm("spr_cyber_coaster_bg_cityscape"),
    depth: 1000500
  });
  Ga(1040, 0, "spr_cyber_coaster_bg_cityscape_bg", {
    ...xF,
    width: xi("spr_cyber_coaster_bg_cityscape_bg"),
    height: xm("spr_cyber_coaster_bg_cityscape_bg"),
    depth: 1000400,
    x_speed: -0.5
  });
  Ga(936, 0, "spr_cyber_coaster_bg_cityscape_fg", {
    ...xF,
    width: xi("spr_cyber_coaster_bg_cityscape_fg"),
    height: xm("spr_cyber_coaster_bg_cityscape_fg"),
    depth: 1000300,
    x_speed: -1
  });
  Ga(815, 64, "bg_dw_city_coaster_track_fullwidth", {
    ...xF,
    width: xi("bg_dw_city_coaster_track_fullwidth"),
    height: xm("bg_dw_city_coaster_track_fullwidth"),
    depth: 1000200,
    x_speed: -15
  });
  for (let xr = 0; xr < 3; xr++) {
    let xP = I("ch2", "spr_cyber_coaster_track");
    Ga(815, 130 + xr * 60, "spr_cyber_coaster_track", {
      ...xF,
      width: xP ? xP.w * 2 * 7 : 0,
      height: xP ? xP.h - 1 : 0,
      depth: 1000100,
      x_speed: -15
    });
  }
  GR(xZ + 25, 0, "spr_cyber_coaster_bg_fountain", 1000450, {
    camx: xZ,
    camy: xR,
    anim: 0.125,
    xs: 2,
    ys: 2
  });
  let xq = (xE, xv) => GF(xE - xZ, xv - xR, -25, 40);
  let xA = GL(0, 0, G7);
  xA.visible = false;
  xA.__battleprop = true;
  xA.coaster_kris = xq(1220, 72);
  xA.coaster_susie = xq(1220, 118);
  xA.coaster_ralsei = xq(1220, 181);
  xA.coaster_berdly = xq(1650, 126);
});
v(59, ({
  vx: xZ,
  vy: xR
}) => {
  GL(0, 40, n);
  GR(750, 0, "spr_cc_fountainbg", 1000200, {
    camx: xZ,
    camy: xR,
    anim: 0.1,
    xs: 2,
    ys: 2
  });
});
v(63, ({
  room: xZ,
  vx: xR,
  vy: xi
}) => {
  let xm = I("ch2", "spr_cutscene_21_acid_loop");
  Ga(xR, 0, "spr_cutscene_21_acid_loop", {
    room_wide: false,
    x_scale: 1,
    y_scale: 1,
    width: 720,
    height: xm ? xm.h : 480,
    camx: xR,
    camy: xi,
    depth: 1000100
  });
  for (let xF of xZ.layers) {
    for (let xq of xF.inst || []) {
      if (xq[0] === "obj_gradientglow") {
        GR(xq[1], xq[2], "spr_gradient20", 850000, {
          camx: xR,
          camy: xi,
          xs: xq[3],
          ys: xq[4],
          sineY: 1
        });
      }
    }
  }
  GR(775, 110, "spr_swanboat", 1, {
    camx: xR,
    camy: xi,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_herokris", 1]
  });
  GR(775, 110, "spr_swanboat_cover", -10, {
    camx: xR,
    camy: xi,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_heroralsei", -10]
  });
  GL(0, 0, GA);
});
var Gq = class u9 extends GQ {
  create() {
    this.trackpos = 0;
    this.con = 0;
    this.timer = 0;
    this.lang = Gu.flag && Gu.flag[912] || 0;
    this.depth = 5000;
  }
  draw(xZ) {
    this.trackpos = Gd(Gu.batmusic && Gu.batmusic[1]);
    if (Gu.myfight === 0 && this.trackpos >= 58.335 && this.trackpos <= 58.375 && this.con === 0) {
      this.timer = 0;
      this.con = 1;
    }
    if (this.con === 1) {
      let xR = Gc.first("obj_rouxls_enemy");
      if (xR && xZ && xZ.draw_sprite) {
        xZ.draw_sprite("spr_rouxls_bubble_hey", this.lang, xR.x - 10, Gu.monstery[xR.myself]);
      }
      this.timer++;
      if (this.timer === 12) {
        this.con = 0;
      }
    }
  }
};
Gg(Gq, "obj_rouxlsbattle_hey");
Gk(Gq, "kinds", GD("obj_rouxlsbattle_hey", GQ));
Gk(Gq, "defaultDepth", 5000);
var GA = Gq;
var Gr = {
  x: 1640,
  y: 0
};
Object.assign(G8.prototype, {
  draw(xZ) {
    let xR = Gs(xZ);
    if (!xR || !this.__battleprop) {
      return;
    }
    let xi = this.camx || 0;
    if (this.drawtrack === 1) {
      let xm = I("ch2", "spr_sneo_track");
      if (xm) {
        for (let xF of [this.tracky0, this.tracky1, this.tracky2]) {
          for (let xq of [-640, 0, 640]) {
            let xA = xm.frame(0);
            if (!xA) {
              break;
            }
            xR.save();
            xR.globalAlpha = this.image_alpha ?? 1;
            xR.drawImage(xA, this.trackx + xq, xF, xm.w * 2, xm.h * 2);
            xR.restore();
          }
        }
      }
      if (80 - xi > 0) {
        xR.save();
        xR.fillStyle = "#000";
        xR.fillRect(-xi, 200, 80, 220);
        xR.restore();
      }
    }
    if (this.cityscape_active) {
      let xr = (xE, xv) => {
        let xI = I("ch2", xE);
        if (xI) {
          Gy(xR, xI, 0, this.cityscape_speed * xv, 0, this.cityscape_speed * xv, 0, 640, xI.h * 2, 2, 2, this.cityscape_alpha);
        }
      };
      xr("bg_dw_mansion_basement_cityscape_background", 1);
      xr("bg_dw_mansion_basement_cityscape_midground", 1.1);
      xr("bg_dw_mansion_basement_cityscape_foreground", 1.2);
      let xP = I("ch2", "bg_dw_mansion_basement_cityscape");
      if (this.shop_spamton_bg_con > 1) {
        let xE = I("ch2", "spr_shop_spamton_bg_battle");
        if (xE && xP) {
          Gy(xR, xE, 0, this.cityscape_speed, 0, this.cityscape_speed, 0, 640, xP.h * 2, 1.6708, 1.195, this.cityscapefade === 1 ? 0.15 : this.cityscape_alpha);
        }
      }
      if (this.shop_spamton_bg_con > 0 && this.shop_spamton_bg_con < 3 && xP) {
        let xv = I("ch2", "spr_whitepixel");
        if (xv) {
          Gy(xR, xv, 0, this.cityscape_speed, 0, this.cityscape_speed, -2, 640, -2 + xP.h * 2, 396, 8, this.shop_spamton_bg_timer / 20);
        }
      }
    }
  },
  step() {
    if (this.__battleprop) {
      if (this.drawtrack === 1) {
        this.trackx += this.trackspeed;
        if (this.trackx + 640 < 0) {
          this.trackx += 640;
        }
        if (this.trackx - 640 > 0) {
          this.trackx -= 640;
        }
      }
      if (this.cityscape_active) {
        if (this.cityscape_alpha < 1) {
          this.cityscape_alpha = G5(this.cityscape_alpha, 1, 0.2);
        }
        if (this.cityscapefade === 1) {
          this.cityscape_alpha = 0;
        }
        this.cityscape_speed -= this.cityscape_speed_max;
        if (this.cityscape_speed_max < 0 && this.cityscape_speed > -398) {
          this.cityscape_speed -= 398;
        }
        if (this.shop_spamton_bg_con === 1 && Gc.number("obj_writer") === 0 && Gc.number("obj_battleblcon") === 0) {
          this.shop_spamton_bg_timer++;
          if (this.shop_spamton_bg_timer === 1) {
            GB("snd_petrify");
          }
          if (this.shop_spamton_bg_timer === 23) {
            this.shop_spamton_bg_con = 2;
          }
        }
        if (this.shop_spamton_bg_con === 2) {
          this.shop_spamton_bg_timer--;
          if (this.shop_spamton_bg_timer === 0) {
            this.shop_spamton_bg_con = 3;
            Gc.with("obj_spamton_neo_enemy", xZ => {
              xZ.targetbgspeed = 5;
            });
          }
        }
      }
    }
  }
});
var Gt = class uG extends GQ {
  create() {
    Object.assign(this, {
      timer: 0,
      timermax: 180,
      playerinput: 0,
      playerinputtimer: 0,
      actcon: 0,
      krisgooffscreen: 0,
      susiegooffscreen: 0,
      ralseigooffscreen: 0,
      buttonspressed: 0,
      bumpmercy: 0,
      mykey: [90, 88, 67],
      HeroCoaster: [],
      yspot: []
    });
    this.visible = false;
    this.seated = false;
  }
  draw() {}
  step() {
    if (!this.seated && Gc.first("obj_herokris")) {
      this.seated = true;
      this.seat();
    }
  }
  seat() {
    let xZ = [101, 182, 260];
    for (let xR = 0; xR < 3; xR++) {
      let xi = GL(0, xZ[xR] - 0, Z);
      xi.HeroID = xR;
      xi.image_index = xR;
      xi.depth = xi.y * -100;
      xi.siner = 0;
      xi.mykey = this.mykey[xR];
      xi.lerpstate = 1;
      xi.lerptimer = 0;
      let xm = GL(xi.x, xi.y, j);
      xm.parentid = xi;
      xm.depth = xi.depth + 2;
      xi.back = xm;
      this.HeroCoaster[xR] = xi;
      this.yspot[xR] = xi.y;
    }
  }
};
Gg(Gt, "o_coaster_controller_sneo");
Gk(Gt, "kinds", GD("o_coaster_controller_sneo", GQ));
Gk(Gt, "defaultDepth", 0);
var GP = Gt;
v(61, ({
  vx: xZ,
  vy: xR
}) => {
  let xi = GL(0, 0, G8);
  xi.__battleprop = true;
  xi.camx = xZ;
  xi.depth = 99000;
  Object.assign(xi, {
    drawblack: 2,
    drawtrack: 1,
    trackx: 0,
    tracky0: 70,
    tracky1: 150,
    tracky2: 230,
    fightmode: 1,
    trackspeed: -15,
    trackaccel: 0,
    trackspeedmax: 0,
    cityscapefade: 0,
    cityscape_active: true,
    cityscape_speed: 0,
    cityscape_alpha: 0,
    shop_spamton_bg_con: 0,
    shop_spamton_bg_timer: 0,
    cityscape_speed_max: 5,
    forcend: 0,
    con: 8,
    image_alpha: 1
  });
  let xm = (xF, xq) => GF(xF - xZ, xq - xR, -25, 40);
  xi.coaster_kris = xm(1721, 60);
  xi.coaster_susie = xm(1718, 125);
  xi.coaster_ralsei = xm(1727, 215);
  GL(0, 0, GP);
});
function GE(xZ, xR, xi) {
  let xm = xZ;
  xm = xm < 0 ? 256 - -xm % 256 : xm % 256;
  return w(xm, xR, xi);
}
Gg(GE, "hsv");
var Gv = new Map();
function GI(xZ, xR, xi, xm) {
  let xF = Gv.get(xZ);
  if (!xF) {
    let xr = document.createElement("canvas");
    if (!xr.getContext) {
      return null;
    }
    xF = {
      cv: xr,
      im: null,
      col: null
    };
    Gv.set(xZ, xF);
  }
  if (xF.im === xi && xF.col === xm) {
    return xF.cv;
  }
  let xq = xF.cv;
  if (xq.width !== xZ.w || xq.height !== xZ.h) {
    xq.width = xZ.w;
    xq.height = xZ.h;
  }
  let xA = xq.getContext("2d");
  if (!xA || !xA.drawImage) {
    return null;
  } else {
    xA.globalCompositeOperation = "source-over";
    xA.clearRect(0, 0, xZ.w, xZ.h);
    xA.drawImage(xi, 0, 0);
    xA.globalCompositeOperation = "multiply";
    xA.fillStyle = xm;
    xA.fillRect(0, 0, xZ.w, xZ.h);
    xA.globalCompositeOperation = "destination-in";
    xA.drawImage(xi, 0, 0);
    xA.globalCompositeOperation = "source-over";
    xF.im = xi;
    xF.col = xm;
    return xq;
  }
}
Gg(GI, "tintedCopy");
function Gz(xZ, xR, xi, xm, xF, xq, xA, xr, xP) {
  let xE = xR && xR.frame(xi);
  if (!xE || xP <= 0 || typeof document === "undefined" || !document.createElement) {
    return;
  }
  let xv = GI(xR, xi, xE, xr);
  if (xv) {
    xZ.save();
    xZ.globalAlpha = Math.min(1, xP);
    xZ.drawImage(xv, xm - xR.ox * xq, xF - xR.oy * xA, xR.w * xq, xR.h * xA);
    xZ.restore();
  }
}
Gg(Gz, "drawTinted");
var GS = class ux extends GQ {
  create() {
    Object.assign(this, {
      siner: 100,
      bgsiner: 0,
      colcol: "rgb(0,0,0)",
      hscroll: 0,
      eyebody: 1,
      adjust: 3,
      slowdown: 0,
      nowcolor: "rgb(0,255,0)",
      roomw: 640
    });
  }
  step() {
    this.siner += 1;
    this.hscroll += 1;
    if (this.hscroll > 240) {
      this.hscroll -= 240;
    }
    if (this.adjust === 3) {
      if (this.slowdown < 1) {
        this.slowdown += 0.01;
      }
      this.siner -= this.slowdown * 0.5;
      this.bgsiner -= this.slowdown / 24;
      this.hscroll -= this.slowdown * 0.8;
      this.colcol = Gh(this.nowcolor, GE(this.siner / 16, 160 + Math.sin(this.siner / 128) * 60, 255), this.slowdown);
      this.nowcolor = Gh(this.nowcolor, GE(this.siner / 16, 255, Math.sin(this.siner / 64) * 40 + 60), this.slowdown);
    }
    this.bgsiner += 0.0625;
    if (this.bgsiner > 7) {
      this.bgsiner -= 7;
    }
  }
  draw(xZ) {
    let xR = Gs(xZ);
    if (!xR) {
      return;
    }
    xR.save();
    xR.fillStyle = this.nowcolor;
    xR.fillRect(0, 0, 640, 480);
    xR.restore();
    let xi = I("ch2", "bg_fountain1");
    let xm = I("ch2", "spr_fountainedge");
    let xF = I("ch2", "spr_fountainbottom");
    let xq = (xI, xz, xS) => {
      if (!xi) {
        return;
      }
      let xn = xi.w * 2;
      let xw = xi.h * 2;
      for (let xO = (xz % xw + xw) % xw - xw; xO < 480; xO += xw) {
        for (let xT = (xI % xn + xn) % xn - xn; xT < 640; xT += xn) {
          Gz(xR, xi, 0, xT, xO, 2, 2, this.colcol, xS);
        }
      }
    };
    xq(0 - this.siner, 0 - this.siner, this.eyebody * 0.7);
    xq(-240 + this.hscroll, 0 + this.siner, this.eyebody * 0.3);
    let xA = xm ? xm.w * 2 : 200;
    let xr = this.roomw / 2 - xA / 2;
    xR.save();
    xR.fillStyle = "#000";
    xR.fillRect(0, 0, xr + 1, 281);
    xR.fillRect(this.roomw / 2 + xA / 2, 0, 999, 281);
    xR.restore();
    let xP = 0 - this.bgsiner * 280 / 7;
    let xE = 280 - this.bgsiner * 280 / 7;
    let xv = Math.sin(this.siner / 16) * 12;
    for (let [xI, xz] of [[0, 1], [xv, 0.5], [-xv, 0.5]]) {
      Gz(xR, xm, 0, xr + xI, xP, 2, 2, this.colcol, xz);
      Gz(xR, xm, 0, xr + xI, xE, 2, 2, this.colcol, xz);
    }
    Gz(xR, xF, 0, xr, -8 + Math.sin(this.siner / 16) * 8, 2, 2, this.colcol, 0.3);
    Gz(xR, xF, 0, xr, -4 + Math.sin(this.siner / 16) * 4, 2, 2, this.colcol, 0.5);
    Gz(xR, xF, 0, xr, 0, 2, 2, this.colcol, 1);
    xR.save();
    xR.fillStyle = this.nowcolor;
    xR.fillRect(0, 280, 641, 201);
    xR.restore();
  }
};
Gg(GS, "obj_darkfountain_battle");
Gk(GS, "kinds", GD("obj_darkfountain", GQ));
Gk(GS, "defaultDepth", 1100000);
var Gn = GS;
v("61sg", () => {
  GL(224, 0, Gn);
});
var Gw = class uu extends GQ {
  create() {
    this.spr = "spr_dojo_discoball";
    this.frame = 0;
    this.anim = 0;
    this.vsp = 0;
    this.blend = 16777215;
  }
  step() {
    this.frame += this.anim;
  }
  draw(xZ) {
    xZ.draw_sprite_ext(this.spr, Math.floor(this.frame), this.x, this.y, 2, 2, 0, this.blend, 1);
  }
};
Gg(Gw, "obj_dojofx_ball");
Gk(Gw, "kinds", GD("obj_dojofx_ball", GQ));
Gk(Gw, "defaultDepth", 5000);
var GO = Gw;
var GT = class uV extends GQ {
  create() {
    this.siner = 0;
    this.inbattle = 0;
    this.drawalpha = 1;
    this.bsiner = 0;
    this.ball = GL(320, 0, GO);
    this.ball.anim = 0.18;
    this.ballback = GL(320, 0, GO);
    this.ballback.spr = "spr_dojo_discoball_back";
    this.ballback.depth = 6000;
    GL(0, 0, GK);
  }
  step() {
    let xZ = this.ball;
    xZ.y += xZ.vsp;
    if (Gu.mnfight > 0 && Gu.fighting === 1) {
      if (xZ.y >= -200) {
        xZ.vsp -= 1;
      } else {
        xZ.vsp = 0;
      }
    } else if (xZ.y < -10) {
      xZ.y = G5(xZ.y, 0, 0.5);
    }
    this.siner++;
    this.ballback.blend = w(this.siner / 4, 255, 220 + Math.sin(this.siner / 15) * 30);
    this.ballback.x = xZ.x;
    this.ballback.y = xZ.y;
  }
};
Gg(GT, "obj_dojofx");
Gk(GT, "kinds", GD("obj_dojofx", GQ));
Gk(GT, "defaultDepth", 1100000);
var GC = GT;
var GJ = class up extends GQ {
  create() {
    this.image_alpha = 0;
  }
  draw(xZ) {
    if (Gu.fighting !== 1) {
      if (this.image_alpha > 0) {
        this.image_alpha -= 0.02;
      }
      return;
    }
    if (this.image_alpha < 1) {
      this.image_alpha += 0.02;
    }
    let xR = Gu.encounterno >= 90 && Gu.encounterno <= 94;
    for (let xi = 0; xi < 6; xi++) {
      let xm = null;
      let xF = 0;
      let xq = 0;
      let xA = 20;
      if (xi <= 2) {
        xm = Gu.char[xi] !== 0 && Gu.charinstance ? Gu.charinstance[xi] : null;
        if (xm && !xm.destroyed) {
          xA = 80;
          xq = xm.y + G0(xm.idlesprite) * 2;
          xF = xm.x + 20;
          if (GV(Gu.char[xi]) === 2 || GV(Gu.char[xi]) === 3) {
            xF += 15;
          }
        } else {
          xm = null;
        }
      } else {
        xm = Gu.monsterinstance ? Gu.monsterinstance[xi - 3] : null;
        if (!xm || xm.destroyed || xR) {
          continue;
        }
        xF = xm.x + xm.sprite_width / 2;
        xq = xm.y + xm.sprite_height;
        xA = xm.sprite_width;
      }
      if (!xm || !Number.isFinite(xF) || !Number.isFinite(xq) || !Number.isFinite(xA)) {
        continue;
      }
      let xr = 280;
      T("spr_whitegradientdown_40", 0, xF, xq - xr, xF, xq - xr, xF - xA / 2 + 2, xq - 2, xF + xA / 2, xq - 2, 0.25);
      xZ.draw_set_color(8421504);
      G4(xF - xA / 2, xq + 4, xF + xA / 2, xq - 10, false);
    }
    xZ.draw_set_alpha(1);
  }
};
Gg(GJ, "obj_dojofx_front");
Gk(GJ, "kinds", GD("obj_dojofx_front", GQ));
Gk(GJ, "defaultDepth", 202);
var GK = GJ;
function GW() {
  return () => {
    GL(0, 0, S);
    GL(320, 0, GC);
  };
}
Gg(GW, "dojoBackground");
GH();
var GY = {
  chapter: 2,
  unusedMonsterTypes: [{
    type: 4,
    name: "Ralsei",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 8,
    name: "Pippins",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 17,
    name: "DoomTank",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 41,
    name: "GrazeTest",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }],
  unusedAttackPatterns: [18, 21, 22, 29, 35, 49],
  unusedAttackDetail: [{
    type: 18,
    line: 808,
    why: "obj_dbulletcontroller can run pattern 18 (Step_0.gml line 808) but nothing assigns it. The branch is empty - a gutted slot."
  }, {
    type: 21,
    line: 876,
    why: "obj_dbulletcontroller can run pattern 21 (Step_0.gml line 876) but nothing assigns it."
  }, {
    type: 22,
    line: 883,
    why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 883) but nothing assigns it. It spawns obj_musicalfight_speakers."
  }, {
    type: 29,
    line: 1153,
    why: "obj_dbulletcontroller can run pattern 29 (Step_0.gml line 1153) but nothing assigns it. It spawns obj_thrash_laserbullet."
  }, {
    type: 35,
    line: 1445,
    why: "obj_dbulletcontroller can run pattern 35 (Step_0.gml line 1445) but nothing assigns it. It spawns obj_bulletparent. It sets global.turntimer = 3600, so it must never reach an encounter."
  }, {
    type: 49,
    line: 1570,
    why: "obj_dbulletcontroller can run pattern 49 (Step_0.gml line 1570) but nothing assigns it. It spawns obj_sneo_faceattack."
  }],
  unusedEncounters: [65, 67, 70, 75, 76, 77, 78, 80, 99],
  unusedEncounterWhy: {
    65: "Nothing in the chapter sets this encounter number. It builds Werewerewire. Its message is \"* Werewerewire strongly blocks the way!\".",
    67: "Nothing in the chapter sets this encounter number. It builds Virovirokun. Its message is \"* H-huh!? What's going on!?\".",
    70: "Nothing in the chapter sets this encounter number. It builds Poppup, Tasque. Its message is \"* Animal house.\".",
    75: "Nothing in the chapter sets this encounter number. It builds Werewire. Its message is \"* Werewires swung in!\".",
    76: "Nothing in the chapter sets this encounter number. It builds Werewire, Maus. Its message is \"* Werewire and Maus swung down like stringed superheroes!\".",
    77: "Nothing in the chapter sets this encounter number. It builds Poppup, Ambyu-Lance. Its message is \"* Ambyu-Lance and its pet appeared!\".",
    78: "Nothing in the chapter sets this encounter number. It builds Swatchling, Poppup. Its message is \"* Poppup and caretakers appeared!\". The GML never gives slot 2 an instance type, so that monster has stats and no object - ported as written.",
    80: "Nothing in the chapter sets this encounter number. It builds Swatchling, Maus. Its message is \"* Swatchling and vermin appeared!\".",
    99: "Nothing in the chapter sets this encounter number. It builds Enemy. Its message is \"* Test enemies showed up.\"."
  },
  carriedForwardEncounters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 40],
  unusedEnemyObjects: [{
    object: "obj_debug_swatchling",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 5,
    type: 36,
    typeFrom: "its name matches scr_monstersetup type 36 \"Swatchling\"",
    name: "Swatchling",
    gutted: true,
    attackTypes: [],
    needs: [],
    why: "No encounter names it, and all 5 of its events are a bare exit; - the object still exists and everything it used to do was deleted. Stats: its name matches scr_monstersetup type 36 \"Swatchling\"."
  }, {
    object: "obj_placeholderenemy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 317,
    type: 1,
    typeFrom: "chapter 1 scr_encountersetup gives monstertype 1",
    name: "Enemy",
    gutted: false,
    attackTypes: [0, 1],
    needs: [],
    why: "5 events, 317 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 1."
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
  }, {
    object: "obj_rouxls_enemy_old_copy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 637,
    type: 45,
    typeFrom: "chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy)",
    name: "Rouxls",
    gutted: false,
    attackTypes: [26, 27, 28],
    needs: [{
      object: "obj_rouxls_enemy",
      type: 45
    }],
    why: "5 events, 637 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy). Its attack patterns (26, 27, 28) read obj_rouxls_enemy by name, so they cannot run without that enemy in the fight - standalone they fault where the GML would fault too."
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
    }, {
      id: 18,
      name: "Kris Tea"
    }, {
      id: 19,
      name: "Noelle Tea"
    }, {
      id: 21,
      name: "Susie Tea"
    }, {
      id: 26,
      name: "JavaCookie"
    }, {
      id: 27,
      name: "TensionBit"
    }, {
      id: 28,
      name: "TensionGem"
    }, {
      id: 29,
      name: "TensionMax"
    }, {
      id: 30,
      name: "ReviveDust"
    }, {
      id: 31,
      name: "ReviveBrite"
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
      id: 7,
      name: "Devilsknife"
    }, {
      id: 8,
      name: "Trefoil"
    }, {
      id: 9,
      name: "Ragger"
    }, {
      id: 10,
      name: "DaintyScarf"
    }, {
      id: 11,
      name: "TwistedSwd"
    }, {
      id: 12,
      name: "SnowRing"
    }, {
      id: 14,
      name: "BounceBlade"
    }, {
      id: 15,
      name: "CheerScarf"
    }, {
      id: 16,
      name: "MechaSaber"
    }, {
      id: 17,
      name: "AutoAxe"
    }, {
      id: 18,
      name: "FiberScarf"
    }, {
      id: 19,
      name: "Ragger2"
    }, {
      id: 20,
      name: "BrokenSwd"
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
    }, {
      id: 7,
      name: "Jevilstail"
    }, {
      id: 8,
      name: "Silver Card"
    }, {
      id: 9,
      name: "TwinRibbon"
    }, {
      id: 10,
      name: "GlowWrist"
    }, {
      id: 11,
      name: "ChainMail"
    }, {
      id: 12,
      name: "B.ShotBowtie"
    }, {
      id: 13,
      name: "SpikeBand"
    }, {
      id: 14,
      name: "Silver Watch"
    }, {
      id: 15,
      name: "TensionBow"
    }, {
      id: 17,
      name: "DarkGoldBand"
    }, {
      id: 18,
      name: "SkyMantle"
    }, {
      id: 19,
      name: "SpikeShackle"
    }, {
      id: 20,
      name: "FrayedBowtie"
    }, {
      id: 22,
      name: "RoyalPin"
    }]
  },
  unusedItems: [{
    id: 11,
    name: "ClubsSandwich"
  }, {
    id: 14,
    name: "Favwich"
  }, {
    id: 18,
    name: "Kris Tea"
  }, {
    id: 19,
    name: "Noelle Tea"
  }, {
    id: 21,
    name: "Susie Tea"
  }, {
    id: 26,
    name: "JavaCookie"
  }, {
    id: 27,
    name: "TensionBit"
  }, {
    id: 28,
    name: "TensionGem"
  }, {
    id: 29,
    name: "TensionMax"
  }, {
    id: 30,
    name: "ReviveDust"
  }, {
    id: 31,
    name: "ReviveBrite"
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
    id: 7,
    name: "Devilsknife"
  }, {
    id: 8,
    name: "Trefoil"
  }, {
    id: 9,
    name: "Ragger"
  }, {
    id: 10,
    name: "DaintyScarf"
  }, {
    id: 11,
    name: "TwistedSwd"
  }, {
    id: 12,
    name: "SnowRing"
  }, {
    id: 14,
    name: "BounceBlade"
  }, {
    id: 15,
    name: "CheerScarf"
  }, {
    id: 16,
    name: "MechaSaber"
  }, {
    id: 17,
    name: "AutoAxe"
  }, {
    id: 18,
    name: "FiberScarf"
  }, {
    id: 19,
    name: "Ragger2"
  }, {
    id: 20,
    name: "BrokenSwd"
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
  }, {
    id: 7,
    name: "Jevilstail"
  }, {
    id: 8,
    name: "Silver Card"
  }, {
    id: 9,
    name: "TwinRibbon"
  }, {
    id: 10,
    name: "GlowWrist"
  }, {
    id: 11,
    name: "ChainMail"
  }, {
    id: 12,
    name: "B.ShotBowtie"
  }, {
    id: 13,
    name: "SpikeBand"
  }, {
    id: 14,
    name: "Silver Watch"
  }, {
    id: 15,
    name: "TensionBow"
  }, {
    id: 17,
    name: "DarkGoldBand"
  }, {
    id: 18,
    name: "SkyMantle"
  }, {
    id: 19,
    name: "SpikeShackle"
  }, {
    id: 20,
    name: "FrayedBowtie"
  }, {
    id: 22,
    name: "RoyalPin"
  }],
  definedAttackPatterns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 46, 47, 48, 49, 50, 51],
  definedMonsterTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
};
GH();
GH();
var Gf = new Proxy({}, {
  get: Gg((xZ, xR) => a[xR] || G6[xR], "get")
});
var Gb = Gg(xZ => m[xZ] || r[xZ] || b[xZ] || (() => {}), "SCRIPT");
var {
  instance_exists: x0
} = b;
var x1 = new Proxy({}, {
  get: Gg((xZ, xR) => Gf[xR], "get")
});
function x2(xZ) {
  this.xx = 0;
  this.yy = 0;
  this.i = 0;
  for (; this.i < 3; this.i += 1) {
    G1(Gu, "heromakex")[this.i] = this.xx + 80;
    G1(Gu, "heromakey")[this.i] = this.yy + 50 + this.i * 80;
    G1(Gu, "monsterinstancetype")[this.i] = Gf.obj_baseenemy;
    G1(Gu, "monstertype")[this.i] = 1;
    G1(Gu, "monstermakex")[this.i] = this.xx + 500 + this.i * 20;
    G1(Gu, "monstermakey")[this.i] = this.yy + 40 + this.i * 90;
  }
  G1(Gu, "monstertype", 1)[1] = 0;
  G1(Gu, "monstertype", 2)[2] = 0;
  if (Gu.char[0] !== 0 && Gu.char[1] === 0 && Gu.char[2] === 0) {
    G1(Gu, "heromakey")[0] = this.yy + 140;
  }
  if (Gu.char[0] !== 0 && Gu.char[1] !== 0 && Gu.char[2] === 0) {
    G1(Gu, "heromakey")[0] = this.yy + 100;
    G1(Gu, "heromakey")[1] = this.yy + 180;
  }
  G1(Gu, "battlemsg")[0] = "* It is known.";
  switch (xZ) {
    case 0:
      break;
    case 1:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_baseenemy;
        G1(Gu, "monstertype")[0] = 1;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_baseenemy;
        G1(Gu, "monstertype")[1] = 1;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Test enemies showed up.";
        break;
      }
    case 2:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_lancerboss;
        G1(Gu, "monstertype")[0] = 2;
        G1(Gu, "monstermakex")[0] = this.xx + 540;
        G1(Gu, "monstermakey")[0] = this.yy + 200;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        break;
      }
    case 3:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_dummyenemy;
        G1(Gu, "monstertype")[0] = 3;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 160;
        if (Gp(x0(Gf.obj_npc_room))) {
          G1(Gu, "monstermakex")[0] = G2("obj_npc_room").xstart;
          G1(Gu, "monstermakey")[0] = G2("obj_npc_room").ystart;
        }
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        break;
      }
    case 4:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[0] = 5;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 140;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rudinn drew near!";
        if (Gu.flag[500] >= 1) {
          G1(Gu, "battlemsg")[0] = "* A different Rudinn from last time drew near!";
        }
        if (Gu.flag[500] === 2) {
          G1(Gu, "battlemsg")[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[0] = 5;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[1] = 5;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[0] = 5;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[1] = 6;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_smallcheckers_enemy;
        G1(Gu, "monstertype")[0] = 9;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 150;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_clubsenemy;
        G1(Gu, "monstertype")[0] = 16;
        G1(Gu, "monstermakex")[0] = this.xx + 400;
        G1(Gu, "monstermakey")[0] = this.yy + 120;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[0] = 6;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[1] = 6;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[2] = 6;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_checkers_enemy;
        G1(Gu, "monstertype")[0] = 10;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 120;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_ponman_enemy;
        G1(Gu, "monstertype")[0] = 11;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_ponman_enemy;
        G1(Gu, "monstertype")[1] = 11;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "battlemsg")[0] = "* Ponman drew near!";
        G1(Gu, "monstertype", 2)[2] = 0;
        break;
      }
    case 14:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_ponman_enemy;
        G1(Gu, "monstertype")[0] = 11;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_ponman_enemy;
        G1(Gu, "monstertype")[1] = 11;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_ponman_enemy;
        G1(Gu, "monstertype")[2] = 11;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_clubsenemy;
        G1(Gu, "monstertype")[0] = 7;
        G1(Gu, "monstermakex")[0] = this.xx + 400;
        G1(Gu, "monstermakey")[0] = this.yy + 30;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[1] = 6;
        G1(Gu, "monstermakex")[1] = this.xx + 420;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[0] = 13;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 140;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[0] = 13;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 60;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[1] = 13;
        G1(Gu, "monstermakex")[1] = this.xx + 460;
        G1(Gu, "monstermakey")[1] = this.yy + 180;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_bloxer_enemy;
        G1(Gu, "monstertype")[0] = 14;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 140;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_bloxer_enemy;
        G1(Gu, "monstertype")[0] = 14;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 60;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_bloxer_enemy;
        G1(Gu, "monstertype")[1] = 14;
        G1(Gu, "monstermakex")[1] = this.xx + 460;
        G1(Gu, "monstermakey")[1] = this.yy + 180;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_lancerboss2;
        G1(Gu, "monstertype")[0] = 12;
        G1(Gu, "heromakex")[0] = this.xx + 120;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 160;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_jigsawryenemy;
        G1(Gu, "monstertype")[0] = 15;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 140;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Jigsawry drew near!";
        if (Gu.flag[500] >= 1) {
          G1(Gu, "battlemsg")[0] = "* A different Jigsawry from last time drew near!";
        }
        if (Gu.flag[500] === 2) {
          G1(Gu, "battlemsg")[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_jigsawryenemy;
        G1(Gu, "monstertype")[0] = 15;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_jigsawryenemy;
        G1(Gu, "monstertype")[1] = 15;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_jigsawryenemy;
        G1(Gu, "monstertype")[2] = 15;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_jigsawryenemy;
        G1(Gu, "monstertype")[0] = 15;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[1] = 5;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[2] = 6;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[0] = 13;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 60;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[1] = 5;
        G1(Gu, "monstermakex")[1] = this.xx + 460;
        G1(Gu, "monstermakey")[1] = this.yy + 180;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        G1(Gu, "heromakex")[0] = this.xx + 80;
        G1(Gu, "heromakey")[0] = this.yy + 100;
        G1(Gu, "heromakex")[1] = this.xx + 90;
        G1(Gu, "heromakey")[1] = this.yy + 150;
        G1(Gu, "heromakex")[2] = this.xx + 100;
        G1(Gu, "heromakey")[2] = this.yy + 210;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_joker;
        G1(Gu, "monstertype")[0] = 20;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 160;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_checkers_enemy;
        G1(Gu, "monstertype")[0] = 21;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 120;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Here it comes^1. Again.";
        G1(Gu, "heromakey")[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rudinnranger;
        G1(Gu, "monstertype")[0] = 22;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_rudinnranger;
        G1(Gu, "monstertype")[1] = 22;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_headhathy;
        G1(Gu, "monstertype")[0] = 23;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_headhathy;
        G1(Gu, "monstertype")[1] = 23;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_headhathy;
        G1(Gu, "monstertype")[0] = 23;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_headhathy;
        G1(Gu, "monstertype")[1] = 23;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_headhathy;
        G1(Gu, "monstertype")[2] = 23;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_susieenemy;
        G1(Gu, "monstertype")[0] = 19;
        G1(Gu, "monstermakex")[0] = this.xx + 520;
        G1(Gu, "monstermakey")[0] = this.yy + 80;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_lancerboss3;
        G1(Gu, "monstertype")[1] = 18;
        G1(Gu, "monstermakex")[1] = this.xx + 540;
        G1(Gu, "monstermakey")[1] = this.yy + 240;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[0] = 13;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[1] = 13;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_rabbick_enemy;
        G1(Gu, "monstertype")[2] = 13;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[0] = 5;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 20;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_heartenemy;
        G1(Gu, "monstertype")[1] = 6;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_diamondenemy;
        G1(Gu, "monstertype")[2] = 5;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_king_boss;
        G1(Gu, "monstertype")[0] = 25;
        G1(Gu, "monstermakex")[0] = this.xx + 460;
        G1(Gu, "monstermakey")[0] = this.yy + 70;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* King blocked the way!";
        break;
      }
    case 50:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[0] = 30;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[1] = 30;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 200;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
        if (Gu.chapter === 2 && G3 === "room_dw_city_postbaseball_1") {
          G1(Gu, "battlemsg")[0] = "* Hey Kris^1, lemme show you my ultimate healing!";
        }
        break;
      }
    case 51:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 50;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[1] = 31;
        G1(Gu, "monstermakex")[1] = this.xx + 490;
        G1(Gu, "monstermakey")[1] = this.yy + 120;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "monstermakex")[2] = this.xx + 440;
        G1(Gu, "monstermakey")[2] = this.yy + 190;
        G1(Gu, "battlemsg")[0] = "* Poppups popped up!";
        break;
      }
    case 52:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[0] = 32;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 50;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 480;
        G1(Gu, "monstermakey")[1] = this.yy + 160;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Tasques crossed your path!";
        break;
      }
    case 53:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 490;
        G1(Gu, "monstermakey")[0] = this.yy + 60;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[1] = 33;
        G1(Gu, "monstermakex")[1] = this.xx + 520;
        G1(Gu, "monstermakey")[1] = this.yy + 190;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Werewires swung in!";
        break;
      }
    case 54:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[0] = 34;
        G1(Gu, "monstermakex")[0] = this.xx + 478;
        G1(Gu, "monstermakey")[0] = this.yy + 98;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[1] = 34;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 202;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Maice blocked the way! ";
        break;
      }
    case 55:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 40;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[1] = 35;
        G1(Gu, "monstermakex")[1] = this.xx + 510;
        G1(Gu, "monstermakey")[1] = this.yy + 154;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Virovirokun floated in!";
        if (Gu.ambush === 2) {
          G1(Gu, "battlemsg")[0] = "* First strike!";
        }
        break;
      }
    case 56:
      {
        G1(Gu, "flag")[426] = GX(0, 1, 2, 3);
        if (Gu.flag[541] === 0) {
          G1(Gu, "flag")[426] = -1;
        }
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[0] = 36;
        G1(Gu, "monstermakex")[0] = this.xx + 394;
        G1(Gu, "monstermakey")[0] = this.yy + 7;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[1] = 36;
        G1(Gu, "monstermakex")[1] = this.xx + 490;
        G1(Gu, "monstermakey")[1] = this.yy + 74;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[2] = 36;
        G1(Gu, "monstermakex")[2] = this.xx + 394;
        G1(Gu, "monstermakey")[2] = this.yy + 180;
        G1(Gu, "battlemsg")[0] = "* Swatchlings bowed in!";
        break;
      }
    case 57:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[0] = 32;
        G1(Gu, "monstermakex")[0] = this.xx + 450;
        G1(Gu, "monstermakey")[0] = this.yy + 35;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_manager_enemy;
        G1(Gu, "monstertype")[1] = 42;
        G1(Gu, "monstermakex")[1] = this.xx + 486;
        G1(Gu, "monstermakey")[1] = this.yy + 95;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[2] = 32;
        G1(Gu, "monstermakex")[2] = this.xx + 450;
        G1(Gu, "monstermakey")[2] = this.yy + 220;
        G1(Gu, "battlemsg")[0] = "* Tasque Manager blocks the way!";
        break;
      }
    case 58:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_berdlyb_enemy;
        G1(Gu, "monstertype")[0] = 43;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 100;
        G1(Gu, "monsterinstancetype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Berdly rides in!";
        break;
      }
    case 59:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_queen_enemy;
        G1(Gu, "monstertype")[0] = 48;
        if (Gb("scr_sideb_get_phase").call(this) < 2) {
          G1(Gu, "monstermakex")[0] = this.xx + 470;
          G1(Gu, "monstermakey")[0] = this.yy + 120;
        } else {
          G1(Gu, "monstermakex")[0] = this.xx + 450;
          G1(Gu, "monstermakey")[0] = this.yy + 98;
        }
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Queen blocks the way!";
        break;
      }
    case 60:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_spamton_enemy;
        G1(Gu, "monstertype")[0] = 49;
        G1(Gu, "monstermakex")[0] = this.xx + 490;
        G1(Gu, "monstermakey")[0] = this.yy + 180;
        G1(Gu, "heromakex")[0] = this.xx + 90;
        G1(Gu, "heromakey")[0] = this.yy + 170;
        G1(Gu, "battlemsg")[0] = "* DON'T YOU WANNA BE A BIG SHOT?";
        break;
      }
    case 61:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_spamton_neo_enemy;
        G1(Gu, "monstertype")[0] = 50;
        G1(Gu, "monstermakex")[0] = this.xx + 460;
        G1(Gu, "monstermakey")[0] = this.yy + 80;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "heromakex")[0] = this.xx + 80;
        G1(Gu, "heromakey")[0] = this.yy + 60;
        if (Gb("scr_sideb_get_phase").call(this) > 2) {
          G1(Gu, "heromakey")[0] = this.yy + 173;
        }
        G1(Gu, "battlemsg")[0] = "* It's time to be a BIG SHOT!";
        break;
      }
    case 62:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_sweet_enemy;
        G1(Gu, "monstertype")[0] = 39;
        G1(Gu, "monstermakex")[0] = this.xx + 460;
        G1(Gu, "monstermakey")[0] = this.yy + 40;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_kk_enemy;
        G1(Gu, "monstertype")[1] = 38;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 90;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_hatguy_enemy;
        G1(Gu, "monstertype")[2] = 37;
        G1(Gu, "monstermakex")[2] = this.xx + 480;
        G1(Gu, "monstermakey")[2] = this.yy + 200;
        G1(Gu, "battlemsg")[0] = "* Sweet Cap'n Cakes block your way!";
        break;
      }
    case 63:
      {
        if (Gp(Gb("i_ex").call(this, Gf.obj_ch2_scene21_loop))) {
          Gc.with("obj_ch2_scene21_loop", xR => {
            G1(Gu, "heromakex")[0] = xR.kr_actor.x;
            G1(Gu, "heromakey")[0] = xR.kr_actor.y;
            G1(Gu, "heromakex")[1] = xR.ra_actor.x;
            G1(Gu, "heromakey")[1] = xR.ra_actor.y;
          });
        }
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_rouxls_enemy;
        G1(Gu, "monstertype")[0] = 45;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 60;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Thrash Machine reluctantly fights you!";
        break;
      }
    case 64:
      {
        G1(Gu, "flag")[426] = GX(4, 5, 6, 7, 8);
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[0] = 36;
        G1(Gu, "monstermakex")[0] = this.xx + 432;
        G1(Gu, "monstermakey")[0] = this.yy + 24;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[1] = 36;
        G1(Gu, "monstermakex")[1] = this.xx + 488;
        G1(Gu, "monstermakey")[1] = this.yy + 142;
        G1(Gu, "battlemsg")[0] = "* Swatchlings bowed in!";
        break;
      }
    case 65:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewerewire_enemy;
        G1(Gu, "monstertype")[0] = 40;
        G1(Gu, "monstermakex")[0] = this.xx + 502;
        G1(Gu, "monstermakey")[0] = this.yy + 70;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewerewire_enemy;
        G1(Gu, "monstertype")[1] = 40;
        G1(Gu, "monstermakex")[1] = this.xx + 456;
        G1(Gu, "monstermakey")[1] = this.yy + 190;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 66:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[0] = 34;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 172;
        G1(Gu, "battlemsg")[0] = "* Maus blocked the way! ";
        break;
      }
    case 67:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 494;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* H-huh!? What's going on!?";
        break;
      }
    case 68:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 40;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[1] = 30;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 160;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 69:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[0] = 30;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 40;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[1] = 35;
        G1(Gu, "monstermakex")[1] = this.xx + 480;
        G1(Gu, "monstermakey")[1] = this.yy + 160;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 70:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 150;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 480;
        G1(Gu, "monstermakey")[1] = this.yy + 170;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Animal house.";
        break;
      }
    case 71:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_clubsenemy;
        G1(Gu, "monstertype")[0] = 47;
        G1(Gu, "monstermakex")[0] = this.xx + 400;
        G1(Gu, "monstermakey")[0] = this.yy + 80;
        G1(Gu, "battlemsg")[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_dojograzeenemy;
        G1(Gu, "monstertype")[0] = 42;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 100;
        G1(Gu, "battlemsg")[0] = "* It's a grazing adventure.";
        break;
      }
    case 73:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 494;
        G1(Gu, "monstermakey")[0] = this.yy + 110;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "\\EE* H-huh!? What's going on!?&* What are we doing!?";
        break;
      }
    case 74:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 494;
        G1(Gu, "monstermakey")[0] = this.yy + 64;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 430;
        G1(Gu, "monstermakey")[1] = this.yy + 130;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[2] = 35;
        G1(Gu, "monstermakex")[2] = this.xx + 495;
        G1(Gu, "monstermakey")[2] = this.yy + 204;
        G1(Gu, "battlemsg")[0] = "* Smorgasbord 2.";
        break;
      }
    case 75:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 540;
        G1(Gu, "monstermakey")[0] = this.yy + 85;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[1] = 33;
        G1(Gu, "monstermakex")[1] = this.xx + 435;
        G1(Gu, "monstermakey")[1] = this.yy + 144;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[2] = 33;
        G1(Gu, "monstermakex")[2] = this.xx + 522;
        G1(Gu, "monstermakey")[2] = this.yy + 214;
        G1(Gu, "battlemsg")[0] = "* Werewires swung in!";
        break;
      }
    case 76:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 62;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[1] = 33;
        G1(Gu, "monstermakex")[1] = this.xx + 434;
        G1(Gu, "monstermakey")[1] = this.yy + 126;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[2] = 34;
        G1(Gu, "monstermakex")[2] = this.xx + 530;
        G1(Gu, "monstermakey")[2] = this.yy + 236;
        G1(Gu, "battlemsg")[0] = "* Werewire and Maus swung down like stringed superheroes!";
        break;
      }
    case 77:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 150;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[1] = 30;
        G1(Gu, "monstermakex")[1] = this.xx + 480;
        G1(Gu, "monstermakey")[1] = this.yy + 170;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Ambyu-Lance and its pet appeared!";
        break;
      }
    case 78:
      {
        G1(Gu, "flag")[426] = GX(4, 5, 6, 7, 8);
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[0] = 36;
        G1(Gu, "monstermakex")[0] = this.xx + 390;
        G1(Gu, "monstermakey")[0] = this.yy + 18;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[1] = 36;
        G1(Gu, "monstermakex")[1] = this.xx + 394;
        G1(Gu, "monstermakey")[1] = this.yy + 180;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[2] = 31;
        G1(Gu, "monstermakex")[2] = this.xx + 460;
        G1(Gu, "monstermakey")[2] = this.yy + 240;
        G1(Gu, "battlemsg")[0] = "* Poppup and caretakers appeared!";
        break;
      }
    case 79:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[0] = 34;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 70;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[1] = 34;
        G1(Gu, "monstermakex")[1] = this.xx + 530;
        G1(Gu, "monstermakey")[1] = this.yy + 142;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[2] = 34;
        G1(Gu, "monstermakex")[2] = this.xx + 468;
        G1(Gu, "monstermakey")[2] = this.yy + 214;
        G1(Gu, "battlemsg")[0] = "* Maice blocked the way!";
        break;
      }
    case 80:
      {
        G1(Gu, "flag")[426] = GX(4, 5, 6, 7, 8);
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[0] = 36;
        G1(Gu, "monstermakex")[0] = this.xx + 410;
        G1(Gu, "monstermakey")[0] = this.yy + 18;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[1] = 36;
        G1(Gu, "monstermakex")[1] = this.xx + 482;
        G1(Gu, "monstermakey")[1] = this.yy + 100;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[2] = 34;
        G1(Gu, "monstermakex")[2] = this.xx + 466;
        G1(Gu, "monstermakey")[2] = this.yy + 240;
        G1(Gu, "battlemsg")[0] = "* Swatchling and vermin appeared!";
        break;
      }
    case 81:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewerewire_enemy;
        G1(Gu, "monstertype")[0] = 40;
        G1(Gu, "monstermakex")[0] = this.xx + 482;
        G1(Gu, "monstermakey")[0] = this.yy + 164;
        G1(Gu, "monsterinstancetype", 1)[1] = 0;
        G1(Gu, "monsterinstancetype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 82:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_berdlyb2_enemy;
        G1(Gu, "monstertype")[0] = 46;
        G1(Gu, "monstermakex")[0] = this.xx + 470;
        G1(Gu, "monstermakey")[0] = this.yy + 144;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstermakex")[1] = this.xx + 540;
        G1(Gu, "monstermakey")[1] = this.yy + 84;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "monstermakex")[2] = this.xx + 522;
        G1(Gu, "monstermakey")[2] = this.yy + 214;
        G1(Gu, "battlemsg")[0] = "* Berdly blocks the way!";
        break;
      }
    case 83:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_mauswheel_enemy;
        G1(Gu, "monstertype")[0] = 44;
        G1(Gu, "monstermakex")[0] = this.xx + 450;
        G1(Gu, "monstermakey")[0] = this.yy + 100;
        G1(Gu, "monsterinstancetype", 1)[1] = 0;
        G1(Gu, "monsterinstancetype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Mauswheel spins into you!";
        break;
      }
    case 84:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_gigaqueen_enemy;
        G1(Gu, "monstertype")[0] = 51;
        G1(Gu, "monstermakex")[0] = this.xx + 150;
        G1(Gu, "monstermakey")[0] = this.yy + 0;
        G1(Gu, "monsterinstancetype", 1)[1] = 0;
        G1(Gu, "monsterinstancetype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* GIGA Queen blocks the way!";
        break;
      }
    case 85:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[0] = 30;
        G1(Gu, "monstermakex")[0] = this.xx + 500;
        G1(Gu, "monstermakey")[0] = this.yy + 42;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[1] = 30;
        G1(Gu, "monstermakex")[1] = this.xx + 422;
        G1(Gu, "monstermakey")[1] = this.yy + 134;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[2] = 30;
        G1(Gu, "monstermakex")[2] = this.xx + 500;
        G1(Gu, "monstermakey")[2] = this.yy + 200;
        G1(Gu, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
        break;
      }
    case 86:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 412;
        G1(Gu, "monstermakey")[0] = this.yy + 24;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 482;
        G1(Gu, "monstermakey")[1] = this.yy + 126;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[2] = 35;
        G1(Gu, "monstermakex")[2] = this.xx + 412;
        G1(Gu, "monstermakey")[2] = this.yy + 184;
        G1(Gu, "battlemsg")[0] = "* Tasque and Co. drew near!";
        break;
      }
    case 87:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[0] = 32;
        G1(Gu, "monstermakex")[0] = this.xx + 412;
        G1(Gu, "monstermakey")[0] = this.yy + 24;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 474;
        G1(Gu, "monstermakey")[1] = this.yy + 114;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[2] = 32;
        G1(Gu, "monstermakex")[2] = this.xx + 412;
        G1(Gu, "monstermakey")[2] = this.yy + 184;
        G1(Gu, "battlemsg")[0] = "* Tasques zoomed towards you!";
        break;
      }
    case 88:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 434;
        G1(Gu, "monstermakey")[0] = this.yy + 36;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[1] = 35;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 100;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "monstermakex")[2] = this.xx + 440;
        G1(Gu, "monstermakey")[2] = this.yy + 190;
        G1(Gu, "battlemsg")[0] = "* Poppup and Virovirokun Appeared!";
        break;
      }
    case 89:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_manager_enemy;
        G1(Gu, "monstertype")[0] = 42;
        G1(Gu, "monstermakex")[0] = this.xx + 487;
        G1(Gu, "monstermakey")[0] = this.yy + 94;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Graze!";
        break;
      }
    case 90:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 476;
        G1(Gu, "monstermakey")[0] = this.yy + 70;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[1] = 33;
        G1(Gu, "monstermakex")[1] = this.xx + 454;
        G1(Gu, "monstermakey")[1] = this.yy + 168;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Round One!";
        break;
      }
    case 91:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 412;
        G1(Gu, "monstermakey")[0] = this.yy + 40;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[1] = 30;
        G1(Gu, "monstermakex")[1] = this.xx + 466;
        G1(Gu, "monstermakey")[1] = this.yy + 106;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[2] = 35;
        G1(Gu, "monstermakex")[2] = this.xx + 412;
        G1(Gu, "monstermakey")[2] = this.yy + 184;
        G1(Gu, "battlemsg")[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[0] = 32;
        G1(Gu, "monstermakex")[0] = this.xx + 432;
        G1(Gu, "monstermakey")[0] = this.yy + 52;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[1] = 32;
        G1(Gu, "monstermakex")[1] = this.xx + 476;
        G1(Gu, "monstermakey")[1] = this.yy + 140;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[2] = 34;
        G1(Gu, "monstermakex")[2] = this.xx + 512;
        G1(Gu, "monstermakey")[2] = this.yy + 236;
        G1(Gu, "battlemsg")[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        G1(Gu, "flag")[426] = GX(0, 1, 2, 3);
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[0] = 36;
        G1(Gu, "monstermakex")[0] = this.xx + 394;
        G1(Gu, "monstermakey")[0] = this.yy + 8;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[1] = 36;
        G1(Gu, "monstermakex")[1] = this.xx + 490;
        G1(Gu, "monstermakey")[1] = this.yy + 74;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_swatchling_enemy;
        G1(Gu, "monstertype")[2] = 36;
        G1(Gu, "monstermakex")[2] = this.xx + 394;
        G1(Gu, "monstermakey")[2] = this.yy + 160;
        G1(Gu, "battlemsg")[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewerewire_enemy;
        G1(Gu, "monstertype")[0] = 40;
        G1(Gu, "monstermakex")[0] = this.xx + 464;
        G1(Gu, "monstermakey")[0] = this.yy + 68;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_werewerewire_enemy;
        G1(Gu, "monstertype")[1] = 40;
        G1(Gu, "monstermakex")[1] = this.xx + 494;
        G1(Gu, "monstermakey")[1] = this.yy + 184;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Final Round!";
        break;
      }
    case 95:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_werewire_enemy;
        G1(Gu, "monstertype")[0] = 33;
        G1(Gu, "monstermakex")[0] = this.xx + 502;
        G1(Gu, "monstermakey")[0] = this.yy + 144;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Werewire appeared.";
        break;
      }
    case 96:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_virovirokun_enemy;
        G1(Gu, "monstertype")[0] = 35;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 120;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Virovirokun floated in!";
        break;
      }
    case 97:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_omawaroid_enemy;
        G1(Gu, "monstertype")[0] = 30;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 114;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Ambyu-Lance beeps towards you!";
        break;
      }
    case 98:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_tasque_enemy;
        G1(Gu, "monstertype")[0] = 32;
        G1(Gu, "monstermakex")[0] = this.xx + 494;
        G1(Gu, "monstermakey")[0] = this.yy + 144;
        G1(Gu, "monstertype", 1)[1] = 0;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Tasque crossed your path!";
        break;
      }
    case 99:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_baseenemy;
        G1(Gu, "monstertype")[0] = 1;
        G1(Gu, "monstermakex")[0] = this.xx + 480;
        G1(Gu, "monstermakey")[0] = this.yy + 80;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_baseenemy;
        G1(Gu, "monstertype")[1] = 1;
        G1(Gu, "monstermakex")[1] = this.xx + 500;
        G1(Gu, "monstermakey")[1] = this.yy + 160;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_baseenemy;
        G1(Gu, "monstertype")[2] = 1;
        G1(Gu, "monstermakex")[2] = this.xx + 520;
        G1(Gu, "monstermakey")[2] = this.yy + 240;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "battlemsg")[0] = "* Test enemies showed up.";
        break;
      }
    case 100:
      {
        G1(Gu, "heromakex")[0] = this.xx + 94;
        G1(Gu, "heromakey")[0] = this.yy + 50;
        G1(Gu, "heromakex")[1] = this.xx + 80;
        G1(Gu, "heromakey")[1] = this.yy + 122;
        G1(Gu, "heromakex")[2] = this.xx + 72;
        G1(Gu, "heromakey")[2] = this.yy + 200;
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_dojo_spareenemy;
        G1(Gu, "monstertype")[0] = 52;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 100;
        G1(Gu, "battlemsg")[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 101:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_poppup_enemy;
        G1(Gu, "monstertype")[0] = 31;
        G1(Gu, "monstermakex")[0] = this.xx + 440;
        G1(Gu, "monstermakey")[0] = this.yy + 50;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_maus_enemy;
        G1(Gu, "monstertype")[1] = 34;
        G1(Gu, "monstermakex")[1] = this.xx + 490;
        G1(Gu, "monstermakey")[1] = this.yy + 166;
        G1(Gu, "monstertype", 2)[2] = 0;
        G1(Gu, "monstermakex")[2] = this.xx + 440;
        G1(Gu, "monstermakey")[2] = this.yy + 206;
        G1(Gu, "battlemsg")[0] = "* Poppup and Maus appeared.";
        break;
      }
    case 102:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_pipis_enemy;
        G1(Gu, "monstertype")[0] = 53;
        G1(Gu, "monstermakex")[0] = this.xx + 530;
        G1(Gu, "monstermakey")[0] = this.yy + 100;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_pipis_enemy;
        G1(Gu, "monstertype")[1] = 53;
        G1(Gu, "monstermakex")[1] = this.xx + 448;
        G1(Gu, "monstermakey")[1] = this.yy + 168;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_pipis_enemy;
        G1(Gu, "monstertype")[2] = 53;
        G1(Gu, "monstermakex")[2] = this.xx + 510;
        G1(Gu, "monstermakey")[2] = this.yy + 250;
        G1(Gu, "battlemsg")[0] = "* Pipis.";
        break;
      }
    case 777:
      {
        G1(Gu, "monsterinstancetype")[0] = Gf.obj_bullettester_enemy;
        G1(Gu, "monsterinstancetype")[1] = Gf.obj_bullettester_enemy;
        G1(Gu, "monsterinstancetype")[2] = Gf.obj_bullettester_enemy;
        G1(Gu, "monstertype")[0] = 1;
        G1(Gu, "monstertype")[1] = 1;
        G1(Gu, "monstertype")[2] = 1;
        G1(Gu, "battlemsg")[0] = " ";
        break;
      }
  }
}
Gg(x2, "scr_encountersetup");
GM(x2, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 50:\n;\ncase 51:\n;\ncase 52:\n;\ncase 53:\n;\ncase 54:\n;\ncase 55:\n;\ncase 56:\n;\ncase 57:\n;\ncase 58:\n;\ncase 59:\n;\ncase 60:\n;\ncase 61:\n;\ncase 62:\n;\ncase 63:\n;\ncase 64:\n;\ncase 65:\n;\ncase 66:\n;\ncase 67:\n;\ncase 68:\n;\ncase 69:\n;\ncase 70:\n;\ncase 71:\n;\ncase 72:\n;\ncase 73:\n;\ncase 74:\n;\ncase 75:\n;\ncase 76:\n;\ncase 77:\n;\ncase 78:\n;\ncase 79:\n;\ncase 80:\n;\ncase 81:\n;\ncase 82:\n;\ncase 83:\n;\ncase 84:\n;\ncase 85:\n;\ncase 86:\n;\ncase 87:\n;\ncase 88:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 95:\n;\ncase 96:\n;\ncase 97:\n;\ncase 98:\n;\ncase 99:\n;\ncase 100:\n;\ncase 101:\n;\ncase 102:\n;\ncase 777:");
GH();
var x3 = {
  12: "checkers",
  53: "battle",
  56: "mansion",
  57: "mansion",
  58: "berdly_chase",
  59: "queen_boss",
  60: "spamton_battle",
  61: "spamton_neo_mix_ex_wip",
  62: "",
  63: "rouxls_battle",
  74: "battle",
  75: "battle",
  76: "battle",
  82: "berdly_chase",
  83: "mansion",
  84: "",
  90: "battle",
  95: "battle",
  102: "spamton_basement"
};
var x4 = {
  58: "plain",
  59: "mansion_parallax",
  61: "plain",
  63: "plain",
  777: "plain"
};
var x5 = "battle";
var x6 = {
  82: {
    test: "== 2",
    song: "berdly_battle_heartbeat_true"
  }
};
var x7 = {
  56: [1, 1],
  57: [1, 1],
  83: [1, 1],
  102: [1, 1]
};
Gx.scr_damage = i;
Gx.scr_damage_all = o;
Gx.scr_act_simul = y;
var x8 = new Proxy({}, {
  get: Gg((xZ, xR) => a[xR] || G6[xR], "get")
});
var x9 = new Set(GY.unusedEncounters || []);
var xG = GY.unusedEncounterWhy || {};
var xx = 50;
var xu = {
  777: "the developers' bullet-tester slot: three obj_bullettester_enemy with no monster data"
};
var xV = new Set([0, 1, ...Object.keys(xu).map(Number)]);
var xp = new Set((GN(x2) ?? String(x2)).match(/case (\d+):/g).map(xZ => Number(xZ.slice(5, -1))));
var xL = {
  50: "Cyber City",
  51: "Cyber City",
  52: "Cyber City",
  53: "Cyber City",
  54: "Cyber Field",
  55: "Cyber Field",
  56: "Queen's Mansion",
  57: "Cyber City",
  58: "Cyber Field - Berdly",
  59: "Queen's Mansion - Queen",
  60: "Cyber City - Spamton",
  61: "Cyber City - Spamton NEO",
  62: "Cyber City - Sweet Cap’n Cakes",
  63: "Cyber Field - Rouxls",
  64: "Queen's Mansion",
  65: "Cyber City",
  66: "Cyber Field",
  67: "Cyber Field",
  68: "Cyber Field",
  69: "Cyber Field",
  70: "Cyber City",
  71: "Cyber City",
  72: "Dojo",
  73: "Cyber Field",
  74: "Cyber City",
  75: "Cyber City",
  76: "Cyber City",
  77: "Cyber City",
  78: "Cyber City",
  79: "Cyber City",
  80: "Cyber City",
  81: "Cyber City",
  82: "Cyber City",
  83: "Cyber City",
  84: "Cyber City",
  85: "Cyber City",
  86: "Cyber City",
  87: "Cyber City",
  88: "Cyber City",
  89: "Cyber City",
  90: "Cyber City",
  91: "Cyber City",
  92: "Cyber City",
  93: "Cyber City",
  94: "Cyber City",
  95: "Cyber City",
  96: "Cyber City",
  97: "Cyber City",
  98: "Cyber City",
  99: "Cyber City",
  100: "Cyber City",
  101: "Cyber City",
  102: "Cyber City",
  777: "Debug"
};
var xB = {
  84: "room_dw_mansion_top"
};
var xh = {
  100: "Jigsaw Joe",
  72: "Graze Challenge 1",
  71: "Clover Rematch",
  89: "Tasque Manager Says",
  90: "All Stars 1",
  91: "All Stars 2",
  92: "All Stars 3",
  93: "All Stars 4",
  94: "All Stars Final"
};
var xd = [100, 72, 71, 89, 90, 91, 92, 93, 94];
var xQ = "ch2enc102";
function xD(xZ, xR = 34) {
  let xi = [];
  let xm = "";
  for (let xF of String(xZ).split(/\s+/).filter(Boolean)) {
    if (xm && xm.length + 1 + xF.length > xR) {
      xi.push(xm);
      xm = xF;
    } else {
      xm = xm ? xm + " " + xF : xF;
    }
  }
  if (xm) {
    xi.push(xm);
  }
  return xi.join("#");
}
Gg(xD, "wrapDesc");
function xX() {
  return {
    t: Gu.monstertype.slice(),
    it: Gu.monsterinstancetype.slice(),
    mx: Gu.monstermakex.slice(),
    my: Gu.monstermakey.slice(),
    hx: Gu.heromakex.slice(),
    hy: Gu.heromakey.slice(),
    bm: (Gu.battlemsg || []).slice(),
    name: Gu.monstername.slice()
  };
}
Gg(xX, "snapshot");
function xc(xZ) {
  Gu.monstertype = xZ.t;
  Gu.monsterinstancetype = xZ.it;
  Gu.monstermakex = xZ.mx;
  Gu.monstermakey = xZ.my;
  Gu.heromakex = xZ.hx;
  Gu.heromakey = xZ.hy;
  Gu.battlemsg = xZ.bm;
  Gu.monstername = xZ.name;
}
Gg(xc, "restore");
function xg(xZ) {
  let xR = {
    t: Gu.monstertype.slice(),
    n: Gu.monstername.slice()
  };
  Gu.monstertype[0] = xZ;
  let xi = {
    myself: 0
  };
  try {
    l.call(xi);
  } catch {}
  let xm = Gu.monstername[0];
  Gu.monstertype = xR.t;
  Gu.monstername = xR.n;
  if (xm && xm.trim()) {
    return xm;
  } else {
    return "Enemy " + xZ;
  }
}
Gg(xg, "monsterName");
var xk = 64;
var xM = Gg((xZ, xR) => Array.from({
  length: xk
}, () => new Array(xZ).fill(xR)), "rows");
function xN() {
  let xZ = {
    actingchoice: 0,
    actingsimul: 0,
    actingsingle: 0,
    actingtarget: 0,
    armor: 0,
    battleactcount: 0,
    guts: 0,
    input_released: 0,
    keyitem: 0,
    litem: 0,
    phone: 0,
    pocketitem: 0,
    smxx: 0,
    smyy: 0,
    weapon: 0,
    weaponstyle: 0,
    choicemsg: " ",
    currentsong: " ",
    monsterattackname: " ",
    othername: " "
  };
  for (let [xR, xi] of Object.entries(xZ)) {
    if (!Array.isArray(Gu[xR])) {
      Gu[xR] = new Array(xk).fill(xi);
    }
  }
  for (let xm of ["itembolts", "itemboltspeed", "itemelement", "itemelementamount", "itemgrazeamt", "itemspecial"]) {
    if (!Array.isArray(Gu[xm])) {
      Gu[xm] = xM(4, 0);
    }
  }
  if (!Array.isArray(Gu.menucoord)) {
    Gu.menucoord = xM(xk, 0);
  }
  if (!Array.isArray(Gu.cinstance)) {
    Gu.cinstance = Array.from({
      length: xk
    }, () => ({
      x: 0,
      y: 0
    }));
  }
}
Gg(xN, "ensureChapter2Globals");
var xH = {
  maxhp: {
    1: 120,
    2: 140,
    3: 100,
    4: 90
  },
  at: {
    1: 12,
    2: 16,
    3: 10,
    4: 3
  },
  mag: {
    2: 1,
    3: 9,
    4: 11
  },
  df: {
    4: 1
  },
  charweapon: {
    4: 12
  },
  chararmor1: {
    1: 1,
    2: 1,
    3: 1,
    4: 14
  },
  chararmor2: {
    1: 1,
    2: 1,
    3: 4,
    4: 22
  }
};
var xo = {
  maxhp: [90, 110, 70],
  at: [10, 14, 8],
  charweapon: [1, 2, 3],
  chararmor1: [0, 0, 0],
  chararmor2: [0, 0, 0]
};
function xy() {
  for (let [xZ, xR] of Object.entries(xo)) {
    for (let xi = 0; xi < 3; xi++) {
      if ((Gu[xZ] && Gu[xZ][xi + 1]) !== xR[xi]) {
        return false;
      }
    }
  }
  return true;
}
Gg(xy, "isChapter1Party");
function xs(xZ) {
  let xR = (Gu.char || []).includes(4) && !!xZ && !!xZ.storyParty;
  let xi = !!Gu.charhero && Gu.charhero[4] === "noelle";
  if (xR) {
    Gu.charbase[4] = 4;
    if (Gu.charhero) {
      Gu.charhero[4] = "noelle";
    }
    Gu.charname[4] = "Noelle";
  }
  let xm = xy();
  if (!xm && (!xR || !!xi)) {
    return;
  }
  let xF = xq => (!xi || xq !== "4") && (xm || xq === "4");
  for (let [xq, xA] of Object.entries(xH)) {
    for (let [xr, xP] of Object.entries(xA)) {
      if (Array.isArray(Gu[xq]) && xF(xr)) {
        Gu[xq][Number(xr)] = xP;
      }
    }
  }
  for (let xE of Object.keys(xH.maxhp)) {
    if (xF(xE)) {
      Gu.hp[Number(xE)] = Gu.maxhp[Number(xE)];
    }
  }
  if (Array.isArray(Gu.spell) && !xi) {
    Gu.spell[4] = new Array(12).fill(0);
    Gu.spell[4][0] = 2;
    Gu.spell[4][1] = 8;
    Gu.spell[4][2] = 9;
    if (xZ && xZ.flags && xZ.flags[915] >= 5) {
      Gu.spell[4][3] = 10;
    }
  }
  G9();
  GG();
}
Gg(xs, "applyChapter2Start");
var xU = {
  60: [1, 0, 0],
  63: [1, 3, 0],
  84: [1, 0, 0],
  82: [1, 4, 0],
  95: [1, 4, 0],
  96: [1, 4, 0],
  97: [1, 4, 0],
  98: [1, 4, 0]
};
var xl = {
  82: [{
    suffix: "sg",
    party: [1, 4, 0],
    flags: {
      915: 5
    },
    note: "Weird Route (Snowgrave)"
  }],
  61: [{
    suffix: "sg",
    party: [1, 0, 0],
    flags: {
      915: 9
    },
    note: "Weird Route (Snowgrave)"
  }],
  59: [{
    suffix: "sg",
    party: [1, 2, 3],
    flags: {
      915: 9
    },
    note: "Weird Route (Snowgrave)"
  }]
};
function xa(xZ = 800) {
  let xR = [];
  for (let xi = xx; xi <= xZ; xi++) {
    if (!xV.has(xi) && !!xp.has(xi)) {
      for (let xm of [null, ...(xl[xi] || [])]) {
        xj(xR, xi, xm);
      }
    }
  }
  return xR;
}
Gg(xa, "buildChapter2Fights");
function xj(xZ, xR, xi) {
  {
    let xm = xX();
    let xF = Gu.char.slice();
    let xq = {};
    let xA = xi && xi.party || xU[xR] || null;
    if (xA) {
      Gu.char = xA.slice();
    }
    let xr = xi && xi.flags || null;
    if (xr) {
      for (let [xE, xv] of Object.entries(xr)) {
        xq[xE] = Gu.flag[xE];
        Gu.flag[xE] = xv;
      }
    }
    Gu.monstertype = [0, 0, 0];
    Gu.monsterinstancetype = [null, null, null];
    Gu.battlemsg = [" "];
    let xP = true;
    try {
      x2.call({}, xR);
    } catch (xI) {
      xP = false;
      console.error("ch2 encounter " + xR + " setup failed", xI);
    }
    if (xP && Gu.monstertype[0] > 0) {
      let xz = [];
      for (let xS = 0; xS < 3; xS++) {
        let xn = Gu.monstertype[xS];
        let xw = Gu.monsterinstancetype[xS];
        if (xn > 0 && xw) {
          xz.push({
            cls: xw,
            type: xn,
            x: Gu.monstermakex[xS],
            y: Gu.monstermakey[xS],
            setup: () => {}
          });
        }
      }
      if (xz.length) {
        let xO = xz.map(u0 => xg(u0.type));
        let xT = {};
        for (let u0 of xO) {
          xT[u0] = (xT[u0] || 0) + 1;
        }
        let xC = Object.entries(xT).map(([u1, u2]) => u2 > 1 ? u1 + " x" + u2 : u1).join(" & ");
        let xJ = xh[xR] && !xi ? xh[xR] : null;
        let xK = xJ ? /All Stars/.test(xJ) ? xJ + ": " + xC : xJ : xC + (xi ? " (" + xi.note + ")" : "");
        let xW = x9.has(xR) && !xJ;
        let xY = xJ ? xd.indexOf(xR) : -1;
        let xf = x3[String(xR)] ?? x5;
        let xb = x6 && x6[String(xR)];
        if (xb) {
          let [u1, u2] = xb.test.split(" ");
          let u3 = A();
          let u4 = Number(u2);
          if ({
            "==": u3 === u4,
            "!=": u3 !== u4,
            ">=": u3 >= u4,
            "<=": u3 <= u4,
            ">": u3 > u4,
            "<": u3 < u4
          }[u1]) {
            xf = xb.song;
          }
        }
        xZ.push({
          id: "ch2enc" + xR + (xi ? xi.suffix : ""),
          name: xK,
          chapter: 2,
          cut: xW,
          area: xW ? "CUT CONTENT" : xJ ? "Dojo" : xL[xR] || "Chapter 2",
          generated: true,
          ...(xY >= 0 ? {
            dojo: true,
            listAfter: xY === 0 ? xQ : "ch2enc" + xd[xY - 1]
          } : {}),
          desc: xK + "#Chapter 2, encounter " + xR + "." + (xJ ? "#A dojo challenge" + (/All Stars/.test(xJ) ? " (Ch2 All Stars)." : ".") : "") + (xW ? "#" + xD(xG[String(xR)] || "") : ""),
          party: Gu.char.slice(),
          storyParty: !!xA,
          flags: xr ? {
            ...xr
          } : undefined,
          heromakex: Gu.heromakex.slice(),
          heromakey: Gu.heromakey.slice(),
          monstermakex: Gu.monstermakex.slice(0, 3),
          monstermakey: Gu.monstermakey.slice(0, 3),
          monsters: xz,
          battlemsg: Gu.battlemsg && Gu.battlemsg[0] || " ",
          encounterno: xR,
          music: xf,
          ...(x7[String(xR)] ? {
            musiclevel: x7[String(xR)]
          } : {}),
          room: xB[xR] || (xJ ? "room_dw_castle_dojo" : null),
          background: xJ ? GW() : E(x4[String(xR)])
        });
      }
    }
    xc(xm);
    Gu.char = xF;
    for (let [u5, uL] of Object.entries(xq)) {
      Gu.flag[u5] = uL;
    }
  }
}
Gg(xj, "buildOne");
export { GC as a, GY as b, x8 as c, xD as d, xN as e, xs as f, xa as g };
