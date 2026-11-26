import { L as t, g as u } from "./c-ZQQWH6UG.js";
import { Aa as s, Ib as x, Ob as b, Ra as m, Ta as i, h as L, l as Y0, pb as Y1, qb as Y2, ra as Y3, v as Y4, x as Y5, xa as Y6, xb as Y7, y as Y8, ya as Y9, za as YY } from "./c-PBMEVLU6.js";
import { a as YQ, e as Yf, l as YT } from "./c-XSSGDLV7.js";
YT();
var Yg = class Ye extends Y1 {};
YQ(Yg, "obj_marker");
Yf(Yg, "kinds", Y2("obj_marker", Y1));
Yf(Yg, "defaultDepth", 0);
var YO = Yg;
var YU = class Yi extends YO {
  create() {
    this.fadeSpeed = 0.04;
    if (u.chapter >= 5) {
      this.parentid = -1;
    }
  }
  get fadespeed() {
    return this.fadeSpeed;
  }
  set fadespeed(YF) {
    this.fadeSpeed = YF;
  }
  endStep() {
    this.image_alpha -= this.fadeSpeed;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
YQ(YU, "obj_afterimage");
Yf(YU, "kinds", Y2("obj_afterimage", YO));
Yf(YU, "defaultDepth", 0);
var Ya = YU;
function Yc(YF) {
  let YW = x(YF.x, YF.y, Ya);
  YW.sprite_index = YF.sprite_index;
  YW.image_index = YF.image_index;
  YW.image_xscale = YF.image_xscale;
  YW.image_yscale = YF.image_yscale;
  YW.image_angle = YF.image_angle;
  YW.image_blend = YF.image_blend;
  YW.image_alpha = YF.image_alpha;
  YW.depth = YF.depth + 1;
  YW.image_speed = 0;
  return YW;
}
YQ(Yc, "scr_afterimage");
function Yd(YF, YW, YS) {
  let Ym = x(YF, YW, YO);
  Ym.sprite_index = YS;
  Ym.image_xscale = 2;
  Ym.image_yscale = 2;
  return Ym;
}
YQ(Yd, "scr_dark_marker");
var Yy = class Yq extends Y1 {};
YQ(Yy, "obj_battlesolid");
Yf(Yy, "kinds", Y2("obj_battlesolid", Y1));
var Yo = Yy;
var Yr = class Yw extends Yo {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.image_speed = 0;
    this.image_blend = Y0(L.green, L.lime, 0.5);
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.maxxscale = 2;
    this.maxyscale = 2;
    this.target_angle = 0;
    this.customBox = false;
    this.init = 0;
    this.spr_custom_box = this.sprite_index;
    this.customScaleX = 1;
    this.customScaleY = 1;
    this.growth = 0;
  }
  step() {
    if (!this.init) {
      if (this.visible && (this.maxxscale !== 2 || this.maxyscale !== 2) && this.sprite_index === "spr_battlebg_0") {
        this.customBox = true;
        if (this.maxxscale % 1 !== 0) {
          this.maxxscale = Y5(this.maxxscale * 37.5) / 37.5;
        }
        if (this.maxyscale % 1 !== 0) {
          this.maxyscale = Y5(this.maxyscale * 37.5) / 37.5;
        }
        this.spr_custom_box = "spr_battlebg_stretch";
        this.customScaleX = this.maxxscale / 2;
        this.customScaleY = this.maxyscale / 2;
        this.sprite_index = "spr_battlebg_stretch_hitbox";
      }
      this.init = 1;
    }
    let YF = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      YF = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      YF = 1;
    }
    this.growth = YF;
    if (YF === 1) {
      if (this.growcon === 1) {
        this.timer++;
      }
      if (this.growcon === 3) {
        this.timer--;
      }
      this.image_xscale = this.maxxscale * (this.timer / this.maxtimer);
      this.image_yscale = this.maxyscale * (this.timer / this.maxtimer);
      this.image_angle = 180 + this.timer / this.maxtimer * 180 + this.target_angle;
      this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5;
      if (this.visible) {
        let YW = x(this.x, this.y, Ya);
        YW.sprite_index = this.spr_custom_box || this.sprite_index;
        YW.image_xscale = this.image_xscale / (this.maxxscale / 2) * this.customScaleX;
        YW.image_yscale = this.image_yscale / (this.maxyscale / 2) * this.customScaleY;
        YW.image_angle = this.image_angle;
        YW.depth = this.depth - 1;
        YW.image_blend = this.image_blend;
        YW.image_alpha = 1 - this.image_alpha + 0.1;
        YW.image_speed = 0;
      }
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.image_angle = this.target_angle;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (this.keep !== 1) {
      return;
    }
    let YF = Y7.first("obj_heart");
    if (!YF || this.path_speed === 0 && this.speed === 0 && this.megakeep !== 1) {
      return;
    }
    let YW = this.x - this.sprite_width / 2;
    let YS = this.x + this.sprite_width / 2;
    let Ym = this.y - this.sprite_height / 2;
    let YI = this.y + this.sprite_height / 2;
    if (YF.x < YW + 5) {
      YF.x = YW + 5;
    }
    if (YF.x > YS - 22) {
      YF.x = YS - 22;
    }
    if (YF.y < Ym + 5) {
      YF.y = Ym + 5;
    }
    if (YF.y > YI - 22) {
      YF.y = YI - 22;
    }
  }
  draw(YF) {
    if (!this.noborder) {
      YF.draw_sprite_ext(this.sprite_index, 1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
      if (this.customBox && this.growth && this.growcon !== 2) {
        YF.draw_sprite_ext(this.spr_custom_box, 0, this.x, this.y, this.image_xscale / (this.maxxscale / 2) * this.customScaleX, this.image_yscale / (this.maxyscale / 2) * this.customScaleY, this.image_angle, this.image_blend, this.image_alpha);
      } else {
        YF.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
      }
    }
  }
};
YQ(Yr, "obj_growtangle");
Yf(Yr, "kinds", Y2("obj_growtangle", Yo));
Yf(Yr, "defaultDepth", 5);
Yf(Yr, "defaultSprite", "spr_battlebg_0");
var YH = Yr;
var Yk = class Yh extends Y1 {
  create() {
    let YF = Y7.first("obj_heart");
    if (YF) {
      this.x = YF.x + 10;
      this.y = YF.y + 10;
    }
    this.grazetimer = 0;
    this.grazetpfactor = 1;
    this.grazetimefactor = 1;
    this.grazesizefactor = 1;
    if (u.chapter >= 2) {
      this.grazecount = 0;
      this.grazetpfactor += t(15) * 0.1;
      if (u.chapter >= 3) {
        this.grazetpfactor += t(24) * 0.05;
        this.grazetpfactor -= t(3) * 0.2;
        this.grazetpfactor -= t(9) * 0.25;
      }
      this.grazetimefactor += t(14) * 0.1;
      if (u.chapter >= 3) {
        this.grazetimefactor -= t(3) * 0.2;
        this.grazetimefactor -= t(9) * 0.25;
      }
      this.grazesizefactor += t(3) * 0.2;
      this.grazesizefactor += t(9) * 0.25;
      if (this.grazetimefactor > 3) {
        this.grazetimefactor = 3;
      }
      if (this.grazetpfactor > 3) {
        this.grazetpfactor = 3;
      }
      if (this.grazesizefactor > 3) {
        this.grazesizefactor = 3;
      }
      this.image_xscale = this.grazesizefactor;
      this.image_yscale = this.grazesizefactor;
      this.sizexoff = 0;
      this.sizeyoff = 0;
    }
  }
  endStep() {
    let YF = Y7.first("obj_heart");
    if (YF) {
      if (u.chapter >= 2) {
        this.sizexoff = 0;
        this.sizeyoff = 0;
        this.x = YF.x + 10 + this.sizexoff;
        this.y = YF.y + 10 + this.sizeyoff;
      } else {
        this.x = YF.x + 10;
        this.y = YF.y + 10;
      }
    } else {
      this.instance_destroy();
    }
  }
  draw(YF) {
    if (this.grazetimer > 0) {
      let YW = this.sprite_index || "spr_grazeappear";
      YF.draw_sprite_ext(YW, 0, this.x, this.y, 1, 1, 0, L.white, this.grazetimer / 6);
      YF.draw_sprite_ext(YW, 3, this.x, this.y, 1, 1, 0, L.white, this.grazetimer / 6 - 0.2);
      if (u.chapter >= 2 && this.image_xscale > 1) {
        YF.draw_sprite_ext(YW, 0, this.x, this.y, this.image_xscale, this.image_yscale, 0, L.white, this.grazetimer / 6);
        YF.draw_sprite_ext(YW, 3, this.x, this.y, this.image_xscale, this.image_yscale, 0, L.white, this.grazetimer / 6 - 0.2);
      }
    }
    this.grazetimer -= 1;
  }
};
YQ(Yk, "obj_grazebox");
Yf(Yk, "kinds", Y2("obj_grazebox", Y1));
Yf(Yk, "defaultDepth", 2);
Yf(Yk, "defaultSprite", "spr_grazeappear");
Yf(Yk, "defaultMask", "spr_grazemask");
var Yp = Yk;
var YK = class YL extends Y1 {
  create() {
    this.burst = 0;
  }
  draw(YF) {
    this.burst++;
    let YW = this.burst;
    let YS = this.xstart + 9;
    let Ym = this.ystart + 9;
    YF.draw_sprite_ext("spr_heartoutline2", 0, YS, Ym, 0.25 + YW, 0.25 + YW / 2, 0, L.white, 0.8 - YW / 6);
    YF.draw_sprite_ext("spr_heartoutline", 0, YS, Ym, 0.25 + YW / 1.5, 0.25 + YW / 3, 0, L.white, 1 - YW / 6);
    YF.draw_sprite_ext("spr_heartoutline", 0, YS, Ym, 0.2 + YW / 2.5, 0.2 + YW / 5, 0, L.white, 1.2 - YW / 6);
    if (YW > 10) {
      this.instance_destroy();
    }
  }
};
YQ(YK, "obj_heartburst");
Yf(YK, "kinds", Y2("obj_heartburst", Y1));
Yf(YK, "defaultDepth", 0);
var Yl = YK;
var Yt = class YG extends Y1 {
  create() {
    u.sp = 4;
    this.wspeed = u.sp;
    this.image_speed = 0;
    this.fly = 0;
    this.dmgnoise = 0;
    x(this.x + 10, this.y + 10, Yp);
    this.boundaryup = 0;
    this.disableslow = 0;
    if (Y3()) {
      this.disableslow = 1;
    }
  }
  step() {
    let YF = Y6() ? 1 : 0;
    let YW = Y9() ? 1 : 0;
    let YS = YY() ? 1 : 0;
    let Ym = s() ? 1 : 0;
    let YI = 0;
    let Yn = 0;
    let Yj = this.wspeed;
    if (YW) {
      YI = Yj;
    }
    if (YF) {
      YI = -Yj;
    }
    if (Ym) {
      Yn = Yj;
    }
    if (YS) {
      Yn = -Yj;
    }
    if (Y3()) {
      if (this.disableslow === 0) {
        YI = Y8(YI * 0.5);
        Yn = Y8(Yn * 0.5);
      }
    } else {
      this.disableslow = 0;
    }
    let YE = (Q1, Q2) => b(this, Q1, Q2, "obj_battlesolid");
    if (YE(this.x + YI, this.y)) {
      for (let Q2 = Yj; Q2 > 0; Q2--) {
        let Q3 = 0;
        if (Ym === 0 && !YE(this.x + YI, this.y - Q2)) {
          this.y -= Q2;
          Yn = 0;
          break;
        }
        if (YS === 0 && Q3 === 0 && !YE(this.x + YI, this.y + Q2)) {
          this.y += Q2;
          Yn = 0;
          break;
        }
      }
      let Q1 = 0;
      if (YI > 0) {
        for (let Q4 = YI; Q4 >= 0; Q4--) {
          if (!YE(this.x + Q4, this.y)) {
            YI = Q4;
            Q1 = 1;
            break;
          }
        }
      }
      if (YI < 0) {
        for (let Q5 = YI; Q5 <= 0; Q5++) {
          if (!YE(this.x + Q5, this.y)) {
            YI = Q5;
            Q1 = 1;
            break;
          }
        }
      }
      if (Q1 === 0) {
        YI = 0;
      }
    }
    if (YE(this.x, this.y + Yn)) {
      for (let Q7 = Yj; Q7 > 0; Q7--) {
        let Q8 = 0;
        if (YW === 0 && !YE(this.x - Q7, this.y + Yn)) {
          this.x -= Q7;
          YI = 0;
          break;
        }
        if (Q8 === 0 && YF === 0 && !YE(this.x + Q7, this.y + Yn)) {
          this.x += Q7;
          YI = 0;
          break;
        }
      }
      let Q6 = 0;
      if (Yn > 0) {
        for (let Q9 = Yn; Q9 >= 0; Q9--) {
          if (!YE(this.x, this.y + Q9)) {
            Yn = Q9;
            Q6 = 1;
            break;
          }
        }
      }
      if (Yn < 0) {
        for (let QY = Yn; QY <= 0; QY++) {
          if (!YE(this.x, this.y + QY)) {
            Yn = QY;
            Q6 = 1;
            break;
          }
        }
      }
      if (Q6 === 0) {
        Yn = 0;
      }
    }
    if (YE(this.x + YI, this.y + Yn)) {
      let QQ = 0;
      let Qf = YI;
      let QT = Yn;
      while (QT !== 0 || Qf !== 0) {
        if (!YE(this.x + Qf, this.y + QT)) {
          YI = Qf;
          Yn = QT;
          QQ = 1;
          break;
        }
        if (Math.abs(QT) >= 1) {
          if (QT > 0) {
            QT--;
          }
          if (QT < 0) {
            QT++;
          }
        } else {
          QT = 0;
        }
        if (Math.abs(Qf) >= 1) {
          if (Qf > 0) {
            Qf--;
          }
          if (Qf < 0) {
            Qf++;
          }
        } else {
          Qf = 0;
        }
      }
      if (QQ === 0) {
        YI = 0;
        Yn = 0;
      }
    }
    let YN = this.sprite_width;
    let Q0 = this.sprite_height;
    if (this.x + YI >= 640 - YN) {
      YI = 640 - YN - this.x;
    }
    if (this.x + YI <= 0) {
      YI = -this.x;
    }
    if (this.y + Yn <= 0) {
      Yn = -this.y;
    }
    if (this.y + Yn >= 320 - Q0 + this.boundaryup) {
      Yn = 320 - Q0 - this.y + this.boundaryup;
    }
    this.x += YI;
    this.y += Yn;
    if (this.dmgnoise === 1) {
      this.dmgnoise = 0;
      i("snd_hurt1");
      m("snd_hurt1");
    }
    u.inv -= 1;
    if (u.inv > 0) {
      this.image_speed = 0.25;
    } else {
      this.image_speed = 0;
      this.image_index = 0;
    }
    u.heartx = this.x + 2;
    u.hearty = this.y + 2;
  }
};
YQ(Yt, "obj_heart");
Yf(Yt, "kinds", Y2("obj_heart", Y1));
Yf(Yt, "defaultDepth", 1);
Yf(Yt, "defaultSprite", "spr_dodgeheart");
Yf(Yt, "defaultMask", "spr_dodgeheartmask");
var Yu = Yt;
var YJ = class Qg extends Y1 {
  create() {
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 0;
    this.flytime = 8;
    this.distx = 310;
    this.disty = 160;
    let YF = Y7.first("obj_heartmarker");
    let YW = Y7.first("obj_growtangle");
    if (YF) {
      this.distx = YF.x;
      this.disty = YF.y;
    } else if (u.chapter >= 2 && YW) {
      this.distx = YW.x - 10;
      this.disty = YW.y - 10;
    }
    this.dist = Y4(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
    x(this.x, this.y, Yl);
  }
  step() {
    this.image_alpha += 0.334;
  }
  alarmEvent(YF) {
    if (YF === 0) {
      this.x = this.distx;
      this.y = this.disty;
      if (u.chapter < 2 || !Y7.exists("obj_heart")) {
        let YW = x(this.x, this.y, YD());
        if (u.chapter >= 3 && YW) {
          YW.sprite_index = this.sprite_index;
          YW.mask_index = this.mask_index;
        }
      }
      this.instance_destroy();
    }
  }
};
YQ(YJ, "obj_moveheart");
Yf(YJ, "kinds", Y2("obj_moveheart", Y1));
Yf(YJ, "defaultDepth", 0);
Yf(YJ, "defaultSprite", "spr_dodgeheart");
var YV = YJ;
var YM = null;
function Yv(YF) {
  YM = YF;
  YF.prototype.interpSelf = true;
}
YQ(Yv, "setCh2Heart");
var YC = null;
function YZ(YF) {
  YC = YF;
  YF.prototype.interpSelf = true;
}
YQ(YZ, "setCh3Heart");
var Yz = {};
function YA(YF, YW) {
  Yz[YF] = YW;
  YW.prototype.interpSelf = true;
}
YQ(YA, "setChapterHeart");
function YD() {
  let YF = Yz[u.chapter];
  return YF || (u.chapter >= 3 && YC ? YC : u.chapter >= 2 && YM ? YM : Yu);
}
YQ(YD, "soulClass");
function YP() {
  if (u.chapter >= 2) {
    u.inv = 0;
  }
  let YF = Y7.first("obj_herokris");
  if (u.chapter === 2 && Y7.exists("obj_gigaqueen_enemy")) {
    let YW = Y7.first("o_boxingcontroller");
    if (YW) {
      return x(YW.x + 4, YW.y - 120, YV);
    }
  }
  return x(YF ? YF.x + 10 : 90, YF ? YF.y + 40 : 140, YV);
}
YQ(YP, "scr_moveheart");
var YR = class QO extends Y1 {
  create() {
    let YF = Y7.first("obj_herokris");
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 1;
    this.flytime = 8;
    this.distx = (YF ? YF.x : 80) + 10;
    this.disty = (YF ? YF.y : 100) + 40;
    if (u.chapter === 2 && Y7.exists("obj_gigaqueen_enemy")) {
      let YW = Y7.first("o_boxingcontroller");
      if (YW) {
        this.distx = YW.x;
        this.disty = YW.y - 110;
      }
    }
    this.dist = Y4(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
  }
  alarmEvent(YF) {
    if (YF === 0) {
      this.x = this.distx;
      this.y = this.disty;
      x(this.x, this.y, Yl);
      this.instance_destroy();
    }
  }
};
YQ(YR, "obj_returnheart");
Yf(YR, "kinds", Y2("obj_returnheart", Y1));
Yf(YR, "defaultDepth", 0);
Yf(YR, "defaultSprite", "spr_dodgeheart");
var Ys = YR;
var YX = class QU extends Y1 {
  create() {
    if (u.chapter >= 2) {
      this.depth = 205;
    }
    if (Y7.number("obj_darkener") > 1) {
      this.instance_destroy();
      return;
    }
    this.darken = 1;
    this.darkamt = 0;
  }
  draw(YF) {
    if (this.darken === 1) {
      Y7.with("obj_heroparent", YS => {
        YS.darkify = 1;
      });
      let YW = Y7.first("obj_tenna_enemy");
      if (u.chapter === 3 && YW && (YW.phaseturn === 11 || YW.testlightemup === 1)) {
        if (this.darkamt < 8) {
          this.darkamt++;
        }
      } else if (this.darkamt < 15) {
        this.darkamt++;
      }
      Y7.with("obj_whiteedge", YS => {
        YS.image_alpha = this.darkamt / 15;
      });
    }
    if (this.darken === 0 && (Y7.with("obj_growtangle", YS => {
      YS.growcon = 3;
    }), Y7.with("obj_heroparent", YS => {
      YS.darkify = 0;
    }), this.darkamt > 0 && this.darkamt--, Y7.with("obj_whiteedge", YS => {
      YS.image_alpha = this.darkamt / 15;
    }), this.darkamt <= 0)) {
      this.instance_destroy();
      return;
    }
    YF.draw_set_alpha(this.darkamt / 20);
    YF.draw_set_color(L.black);
    YF.draw_rectangle(-40, -40, 680, 520, false);
    YF.draw_set_alpha(1);
  }
  destroy() {
    Y7.with("obj_whiteedge", YF => {
      YF.image_alpha = 0;
    });
  }
};
YQ(YX, "obj_darkener");
Yf(YX, "kinds", Y2("obj_darkener", Y1));
Yf(YX, "defaultDepth", 200);
var Yx = YX;
var YB = class Qa extends Y1 {
  create() {
    if (Y7.number("obj_shake") > 1) {
      this.instance_destroy();
      return;
    }
    this.shakespeed = 1;
    this.shakesign = 1;
    this.shakex = 4;
    this.shakey = 4;
    this.permashake = 0;
    this.active = 0;
    this.beenset = 0;
  }
  step() {
    if (this.active === 0) {
      this.beenset = 1;
      if (u.flag[12] === 0) {
        u.shakex = this.shakex;
        u.shakey = this.shakey;
      }
      this.shakesign = -this.shakesign;
      this.active = 1;
      this.alarm[0] = this.shakespeed;
    }
  }
  alarmEvent(YF) {
    if (YF === 0) {
      if (u.flag[12] === 0) {
        u.shakex = this.shakex * this.shakesign;
        u.shakey = this.shakey * this.shakesign;
      }
      if (this.permashake === 0) {
        if (this.shakex > 0) {
          this.shakex--;
        }
        if (this.shakey > 0) {
          this.shakey--;
        }
      }
      this.shakesign = -this.shakesign;
      this.alarm[0] = this.shakespeed;
      if (this.shakex === 0 && this.shakey === 0) {
        this.instance_destroy();
      }
    }
  }
  destroy() {
    if (u.chapter < 2 || this.beenset) {
      u.shakex = 0;
      u.shakey = 0;
    }
  }
};
YQ(YB, "obj_shake");
Yf(YB, "kinds", Y2("obj_shake", Y1));
Yf(YB, "defaultDepth", 0);
var Yb = YB;
export { YO as a, Ya as b, Yc as c, Yd as d, Yo as e, YH as f, Yp as g, Yl as h, Yu as i, YV as j, Yv as k, YZ as l, YA as m, YP as n, Ys as o, Yx as p, Yb as q };
