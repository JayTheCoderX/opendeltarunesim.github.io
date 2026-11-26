const K = function () {
    let YF = true;
    return function (YW, YS) {
      const Ym = YF ? function () {
        if (YS) {
          const YI = YS.apply(YW, arguments);
          return YS = null, YI;
        }
      } : function () {};
      return YF = false, Ym;
    };
  }(),
  l = K(this, function () {
    if (l.bind().toString().indexOf('\x0a') !== -0x1) return;
    return l.toString().search(".*").toString().constructor(l).search(".*");
  });
l();
import { L as t, g as u } from './c-ZQQWH6UG.js';
import { Aa as s, Ib as x, Ob as b, Ra as m, Ta as i, h as L, l as Y0, pb as Y1, qb as Y2, ra as Y3, v as Y4, x as Y5, xa as Y6, xb as Y7, y as Y8, ya as Y9, za as YY } from './c-PBMEVLU6.js';
import { a as YQ, e as Yf, l as YT } from './c-XSSGDLV7.js';
YT();
var Yg = class Ye extends Y1 {};
YQ(Yg, 'obj_marker'), Yf(Yg, 'kinds', Y2('obj_marker', Y1)), Yf(Yg, 'defaultDepth', 0x0);
var YO = Yg,
  YU = class Yi extends YO {
    ["create"]() {
      this.fadeSpeed = 0.04, u.chapter >= 0x5 && (this.parentid = -0x1);
    }
    get ["fadespeed"]() {
      return this.fadeSpeed;
    }
    set ["fadespeed"](YF) {
      this.fadeSpeed = YF;
    }
    ["endStep"]() {
      this.image_alpha -= this.fadeSpeed, this.image_alpha < 0x0 && this.instance_destroy();
    }
  };
YQ(YU, 'obj_afterimage'), Yf(YU, 'kinds', Y2('obj_afterimage', YO)), Yf(YU, 'defaultDepth', 0x0);
var Ya = YU;
function Yc(YF) {
  let YW = x(YF.x, YF.y, Ya);
  return YW.sprite_index = YF.sprite_index, YW.image_index = YF.image_index, YW.image_xscale = YF.image_xscale, YW.image_yscale = YF.image_yscale, YW.image_angle = YF.image_angle, YW.image_blend = YF.image_blend, YW.image_alpha = YF.image_alpha, YW.depth = YF.depth + 0x1, YW.image_speed = 0x0, YW;
}
YQ(Yc, 'scr_afterimage');
function Yd(YF, YW, YS) {
  let Ym = x(YF, YW, YO);
  return Ym.sprite_index = YS, Ym.image_xscale = 0x2, Ym.image_yscale = 0x2, Ym;
}
YQ(Yd, 'scr_dark_marker');
var Yy = class Yq extends Y1 {};
YQ(Yy, 'obj_battlesolid'), Yf(Yy, 'kinds', Y2('obj_battlesolid', Y1));
var Yo = Yy,
  Yr = class Yw extends Yo {
    ["create"]() {
      this.image_xscale = 0x0, this.image_yscale = 0x0, this.image_alpha = 0.3, this.timer = 0x0, this.maxtimer = 0xf, this.growcon = 0x1, this.image_speed = 0x0, this.image_blend = Y0(L.green, L.lime, 0.5), this.fullgrow = 0x0, this.keep = 0x0, this.megakeep = 0x0, this.maxxscale = 0x2, this.maxyscale = 0x2, this.target_angle = 0x0, this.customBox = !0x1, this.init = 0x0, this.spr_custom_box = this.sprite_index, this.customScaleX = 0x1, this.customScaleY = 0x1, this.growth = 0x0;
    }
    ["step"]() {
      this.init || (this.visible && (this.maxxscale !== 0x2 || this.maxyscale !== 0x2) && this.sprite_index === 'spr_battlebg_0' && (this.customBox = !0x0, this.maxxscale % 0x1 !== 0x0 && (this.maxxscale = Y5(this.maxxscale * 37.5) / 37.5), this.maxyscale % 0x1 !== 0x0 && (this.maxyscale = Y5(this.maxyscale * 37.5) / 37.5), this.spr_custom_box = 'spr_battlebg_stretch', this.customScaleX = this.maxxscale / 0x2, this.customScaleY = this.maxyscale / 0x2, this.sprite_index = 'spr_battlebg_stretch_hitbox'), this.init = 0x1);
      let YF = 0x0;
      if (this.timer < this.maxtimer && this.growcon === 0x1 && (YF = 0x1), this.timer > 0x0 && this.growcon === 0x3 && (YF = 0x1), this.growth = YF, YF === 0x1) {
        if (this.growcon === 0x1 && this.timer++, this.growcon === 0x3 && this.timer--, this.image_xscale = this.maxxscale * (this.timer / this.maxtimer), this.image_yscale = this.maxyscale * (this.timer / this.maxtimer), this.image_angle = 0xb4 + 0xb4 * (this.timer / this.maxtimer) + this.target_angle, this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5, this.visible) {
          let YW = x(this.x, this.y, Ya);
          YW.sprite_index = this.spr_custom_box || this.sprite_index, YW.image_xscale = this.image_xscale / (this.maxxscale / 0x2) * this.customScaleX, YW.image_yscale = this.image_yscale / (this.maxyscale / 0x2) * this.customScaleY, YW.image_angle = this.image_angle, YW.depth = this.depth - 0x1, YW.image_blend = this.image_blend, YW.image_alpha = 0x1 - this.image_alpha + 0.1, YW.image_speed = 0x0;
        }
        this.timer >= this.maxtimer && this.growcon === 0x1 && (this.growcon = 0x2, this.image_angle = this.target_angle), this.timer <= 0x0 && this.growcon === 0x3 && this.instance_destroy();
      }
    }
    ["endStep"]() {
      if (this.keep !== 0x1) return;
      let YF = Y7.first('obj_heart');
      if (!YF || !(this.path_speed !== 0x0 || this.speed !== 0x0 || this.megakeep === 0x1)) return;
      let YW = this.x - this.sprite_width / 0x2,
        YS = this.x + this.sprite_width / 0x2,
        Ym = this.y - this.sprite_height / 0x2,
        YI = this.y + this.sprite_height / 0x2;
      YF.x < YW + 0x5 && (YF.x = YW + 0x5), YF.x > YS - 0x16 && (YF.x = YS - 0x16), YF.y < Ym + 0x5 && (YF.y = Ym + 0x5), YF.y > YI - 0x16 && (YF.y = YI - 0x16);
    }
    ["draw"](YF) {
      this.noborder || (YF.draw_sprite_ext(this.sprite_index, 0x1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.customBox && this.growth && this.growcon !== 0x2 ? YF.draw_sprite_ext(this.spr_custom_box, 0x0, this.x, this.y, this.image_xscale / (this.maxxscale / 0x2) * this.customScaleX, this.image_yscale / (this.maxyscale / 0x2) * this.customScaleY, this.image_angle, this.image_blend, this.image_alpha) : YF.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha));
    }
  };
YQ(Yr, 'obj_growtangle'), Yf(Yr, 'kinds', Y2('obj_growtangle', Yo)), Yf(Yr, 'defaultDepth', 0x5), Yf(Yr, 'defaultSprite', 'spr_battlebg_0');
var YH = Yr,
  Yk = class Yh extends Y1 {
    ["create"]() {
      let YF = Y7.first('obj_heart');
      YF && (this.x = YF.x + 0xa, this.y = YF.y + 0xa), this.grazetimer = 0x0, this.grazetpfactor = 0x1, this.grazetimefactor = 0x1, this.grazesizefactor = 0x1, u.chapter >= 0x2 && (this.grazecount = 0x0, this.grazetpfactor += t(0xf) * 0.1, u.chapter >= 0x3 && (this.grazetpfactor += t(0x18) * 0.05, this.grazetpfactor -= t(0x3) * 0.2, this.grazetpfactor -= t(0x9) * 0.25), this.grazetimefactor += t(0xe) * 0.1, u.chapter >= 0x3 && (this.grazetimefactor -= t(0x3) * 0.2, this.grazetimefactor -= t(0x9) * 0.25), this.grazesizefactor += t(0x3) * 0.2, this.grazesizefactor += t(0x9) * 0.25, this.grazetimefactor > 0x3 && (this.grazetimefactor = 0x3), this.grazetpfactor > 0x3 && (this.grazetpfactor = 0x3), this.grazesizefactor > 0x3 && (this.grazesizefactor = 0x3), this.image_xscale = this.grazesizefactor, this.image_yscale = this.grazesizefactor, this.sizexoff = 0x0, this.sizeyoff = 0x0);
    }
    ["endStep"]() {
      let YF = Y7.first('obj_heart');
      YF ? u.chapter >= 0x2 ? (this.sizexoff = 0x0, this.sizeyoff = 0x0, this.x = YF.x + 0xa + this.sizexoff, this.y = YF.y + 0xa + this.sizeyoff) : (this.x = YF.x + 0xa, this.y = YF.y + 0xa) : this.instance_destroy();
    }
    ["draw"](YF) {
      if (this.grazetimer > 0x0) {
        let YW = this.sprite_index || 'spr_grazeappear';
        YF.draw_sprite_ext(YW, 0x0, this.x, this.y, 0x1, 0x1, 0x0, L.white, this.grazetimer / 0x6), YF.draw_sprite_ext(YW, 0x3, this.x, this.y, 0x1, 0x1, 0x0, L.white, this.grazetimer / 0x6 - 0.2), u.chapter >= 0x2 && this.image_xscale > 0x1 && (YF.draw_sprite_ext(YW, 0x0, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, L.white, this.grazetimer / 0x6), YF.draw_sprite_ext(YW, 0x3, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, L.white, this.grazetimer / 0x6 - 0.2));
      }
      this.grazetimer -= 0x1;
    }
  };
YQ(Yk, 'obj_grazebox'), Yf(Yk, 'kinds', Y2('obj_grazebox', Y1)), Yf(Yk, 'defaultDepth', 0x2), Yf(Yk, 'defaultSprite', 'spr_grazeappear'), Yf(Yk, 'defaultMask', 'spr_grazemask');
var Yp = Yk,
  YK = class YL extends Y1 {
    ["create"]() {
      this.burst = 0x0;
    }
    ["draw"](YF) {
      this.burst++;
      let YW = this.burst,
        YS = this.xstart + 0x9,
        Ym = this.ystart + 0x9;
      YF.draw_sprite_ext('spr_heartoutline2', 0x0, YS, Ym, 0.25 + YW, 0.25 + YW / 0x2, 0x0, L.white, 0.8 - YW / 0x6), YF.draw_sprite_ext('spr_heartoutline', 0x0, YS, Ym, 0.25 + YW / 1.5, 0.25 + YW / 0x3, 0x0, L.white, 0x1 - YW / 0x6), YF.draw_sprite_ext('spr_heartoutline', 0x0, YS, Ym, 0.2 + YW / 2.5, 0.2 + YW / 0x5, 0x0, L.white, 1.2 - YW / 0x6), YW > 0xa && this.instance_destroy();
    }
  };
YQ(YK, 'obj_heartburst'), Yf(YK, 'kinds', Y2('obj_heartburst', Y1)), Yf(YK, 'defaultDepth', 0x0);
var Yl = YK,
  Yt = class YG extends Y1 {
    ["create"]() {
      u.sp = 0x4, this.wspeed = u.sp, this.image_speed = 0x0, this.fly = 0x0, this.dmgnoise = 0x0, x(this.x + 0xa, this.y + 0xa, Yp), this.boundaryup = 0x0, this.disableslow = 0x0, Y3() && (this.disableslow = 0x1);
    }
    ["step"]() {
      let YF = Y6() ? 0x1 : 0x0,
        YW = Y9() ? 0x1 : 0x0,
        YS = YY() ? 0x1 : 0x0,
        Ym = s() ? 0x1 : 0x0,
        YI = 0x0,
        Yn = 0x0,
        Yj = this.wspeed;
      YW && (YI = Yj), YF && (YI = -Yj), Ym && (Yn = Yj), YS && (Yn = -Yj), Y3() ? this.disableslow === 0x0 && (YI = Y8(YI * 0.5), Yn = Y8(Yn * 0.5)) : this.disableslow = 0x0;
      let YE = (Q1, Q2) => b(this, Q1, Q2, 'obj_battlesolid');
      if (YE(this.x + YI, this.y)) {
        for (let Q2 = Yj; Q2 > 0x0; Q2--) {
          let Q3 = 0x0;
          if (Ym === 0x0 && !YE(this.x + YI, this.y - Q2)) {
            this.y -= Q2, Yn = 0x0;
            break;
          }
          if (YS === 0x0 && Q3 === 0x0 && !YE(this.x + YI, this.y + Q2)) {
            this.y += Q2, Yn = 0x0;
            break;
          }
        }
        let Q1 = 0x0;
        if (YI > 0x0) {
          for (let Q4 = YI; Q4 >= 0x0; Q4--) if (!YE(this.x + Q4, this.y)) {
            YI = Q4, Q1 = 0x1;
            break;
          }
        }
        if (YI < 0x0) {
          for (let Q5 = YI; Q5 <= 0x0; Q5++) if (!YE(this.x + Q5, this.y)) {
            YI = Q5, Q1 = 0x1;
            break;
          }
        }
        Q1 === 0x0 && (YI = 0x0);
      }
      if (YE(this.x, this.y + Yn)) {
        for (let Q7 = Yj; Q7 > 0x0; Q7--) {
          let Q8 = 0x0;
          if (YW === 0x0 && !YE(this.x - Q7, this.y + Yn)) {
            this.x -= Q7, YI = 0x0;
            break;
          }
          if (Q8 === 0x0 && YF === 0x0 && !YE(this.x + Q7, this.y + Yn)) {
            this.x += Q7, YI = 0x0;
            break;
          }
        }
        let Q6 = 0x0;
        if (Yn > 0x0) {
          for (let Q9 = Yn; Q9 >= 0x0; Q9--) if (!YE(this.x, this.y + Q9)) {
            Yn = Q9, Q6 = 0x1;
            break;
          }
        }
        if (Yn < 0x0) {
          for (let QY = Yn; QY <= 0x0; QY++) if (!YE(this.x, this.y + QY)) {
            Yn = QY, Q6 = 0x1;
            break;
          }
        }
        Q6 === 0x0 && (Yn = 0x0);
      }
      if (YE(this.x + YI, this.y + Yn)) {
        let QQ = 0x0,
          Qf = YI,
          QT = Yn;
        for (; QT !== 0x0 || Qf !== 0x0;) {
          if (!YE(this.x + Qf, this.y + QT)) {
            YI = Qf, Yn = QT, QQ = 0x1;
            break;
          }
          Math.abs(QT) >= 0x1 ? (QT > 0x0 && QT--, QT < 0x0 && QT++) : QT = 0x0, Math.abs(Qf) >= 0x1 ? (Qf > 0x0 && Qf--, Qf < 0x0 && Qf++) : Qf = 0x0;
        }
        QQ === 0x0 && (YI = 0x0, Yn = 0x0);
      }
      let YN = this.sprite_width,
        Q0 = this.sprite_height;
      this.x + YI >= 0x280 - YN && (YI = 0x280 - YN - this.x), this.x + YI <= 0x0 && (YI = -this.x), this.y + Yn <= 0x0 && (Yn = -this.y), this.y + Yn >= 0x140 - Q0 + this.boundaryup && (Yn = 0x140 - Q0 - this.y + this.boundaryup), this.x += YI, this.y += Yn, this.dmgnoise === 0x1 && (this.dmgnoise = 0x0, i('snd_hurt1'), m('snd_hurt1')), u.inv -= 0x1, u.inv > 0x0 ? this.image_speed = 0.25 : (this.image_speed = 0x0, this.image_index = 0x0), u.heartx = this.x + 0x2, u.hearty = this.y + 0x2;
    }
  };
YQ(Yt, 'obj_heart'), Yf(Yt, 'kinds', Y2('obj_heart', Y1)), Yf(Yt, 'defaultDepth', 0x1), Yf(Yt, 'defaultSprite', 'spr_dodgeheart'), Yf(Yt, 'defaultMask', 'spr_dodgeheartmask');
var Yu = Yt,
  YJ = class Qg extends Y1 {
    ["create"]() {
      this.burst = 0x0, this.shift = 0x1, this.image_alpha = 0x0, this.flytime = 0x8, this.distx = 0x136, this.disty = 0xa0;
      let YF = Y7.first('obj_heartmarker'),
        YW = Y7.first('obj_growtangle');
      YF ? (this.distx = YF.x, this.disty = YF.y) : u.chapter >= 0x2 && YW && (this.distx = YW.x - 0xa, this.disty = YW.y - 0xa), this.dist = Y4(this.x, this.y, this.distx, this.disty), this.move_towards_point(this.distx, this.disty, this.dist / this.flytime), this.alarm[0x0] = this.flytime, this.image_speed = 0x0, x(this.x, this.y, Yl);
    }
    ["step"]() {
      this.image_alpha += 0.334;
    }
    ["alarmEvent"](YF) {
      if (YF === 0x0) {
        if (this.x = this.distx, this.y = this.disty, u.chapter < 0x2 || !Y7.exists('obj_heart')) {
          let YW = x(this.x, this.y, YD());
          u.chapter >= 0x3 && YW && (YW.sprite_index = this.sprite_index, YW.mask_index = this.mask_index);
        }
        this.instance_destroy();
      }
    }
  };
YQ(YJ, 'obj_moveheart'), Yf(YJ, 'kinds', Y2('obj_moveheart', Y1)), Yf(YJ, 'defaultDepth', 0x0), Yf(YJ, 'defaultSprite', 'spr_dodgeheart');
var YV = YJ,
  YM = null;
function Yv(YF) {
  YM = YF, YF.prototype.interpSelf = !0x0;
}
YQ(Yv, 'setCh2Heart');
var YC = null;
function YZ(YF) {
  YC = YF, YF.prototype.interpSelf = !0x0;
}
YQ(YZ, 'setCh3Heart');
var Yz = {};
function YA(YF, YW) {
  Yz[YF] = YW, YW.prototype.interpSelf = !0x0;
}
YQ(YA, 'setChapterHeart');
function YD() {
  let YF = Yz[u.chapter];
  return YF || (u.chapter >= 0x3 && YC ? YC : u.chapter >= 0x2 && YM ? YM : Yu);
}
YQ(YD, 'soulClass');
function YP() {
  u.chapter >= 0x2 && (u.inv = 0x0);
  let YF = Y7.first('obj_herokris');
  if (u.chapter === 0x2 && Y7.exists('obj_gigaqueen_enemy')) {
    let YW = Y7.first('o_boxingcontroller');
    if (YW) return x(YW.x + 0x4, YW.y - 0x78, YV);
  }
  return x(YF ? YF.x + 0xa : 0x5a, YF ? YF.y + 0x28 : 0x8c, YV);
}
YQ(YP, 'scr_moveheart');
var YR = class QO extends Y1 {
  ["create"]() {
    let YF = Y7.first('obj_herokris');
    if (this.burst = 0x0, this.shift = 0x1, this.image_alpha = 0x1, this.flytime = 0x8, this.distx = (YF ? YF.x : 0x50) + 0xa, this.disty = (YF ? YF.y : 0x64) + 0x28, u.chapter === 0x2 && Y7.exists('obj_gigaqueen_enemy')) {
      let YW = Y7.first('o_boxingcontroller');
      YW && (this.distx = YW.x, this.disty = YW.y - 0x6e);
    }
    this.dist = Y4(this.x, this.y, this.distx, this.disty), this.move_towards_point(this.distx, this.disty, this.dist / this.flytime), this.alarm[0x0] = this.flytime, this.image_speed = 0x0;
  }
  ["alarmEvent"](YF) {
    YF === 0x0 && (this.x = this.distx, this.y = this.disty, x(this.x, this.y, Yl), this.instance_destroy());
  }
};
YQ(YR, 'obj_returnheart'), Yf(YR, 'kinds', Y2('obj_returnheart', Y1)), Yf(YR, 'defaultDepth', 0x0), Yf(YR, 'defaultSprite', 'spr_dodgeheart');
var Ys = YR,
  YX = class QU extends Y1 {
    ["create"]() {
      if (u.chapter >= 0x2 && (this.depth = 0xcd), Y7.number('obj_darkener') > 0x1) {
        this.instance_destroy();
        return;
      }
      this.darken = 0x1, this.darkamt = 0x0;
    }
    ["draw"](YF) {
      if (this.darken === 0x1) {
        Y7.with('obj_heroparent', YS => {
          YS.darkify = 0x1;
        });
        let YW = Y7.first('obj_tenna_enemy');
        u.chapter === 0x3 && YW && (YW.phaseturn === 0xb || YW.testlightemup === 0x1) ? this.darkamt < 0x8 && this.darkamt++ : this.darkamt < 0xf && this.darkamt++, Y7.with('obj_whiteedge', YS => {
          YS.image_alpha = this.darkamt / 0xf;
        });
      }
      if (this.darken === 0x0 && (Y7.with('obj_growtangle', YS => {
        YS.growcon = 0x3;
      }), Y7.with('obj_heroparent', YS => {
        YS.darkify = 0x0;
      }), this.darkamt > 0x0 && this.darkamt--, Y7.with('obj_whiteedge', YS => {
        YS.image_alpha = this.darkamt / 0xf;
      }), this.darkamt <= 0x0)) {
        this.instance_destroy();
        return;
      }
      YF.draw_set_alpha(this.darkamt / 0x14), YF.draw_set_color(L.black), YF.draw_rectangle(-0x28, -0x28, 0x2a8, 0x208, !0x1), YF.draw_set_alpha(0x1);
    }
    ["destroy"]() {
      Y7.with('obj_whiteedge', YF => {
        YF.image_alpha = 0x0;
      });
    }
  };
YQ(YX, 'obj_darkener'), Yf(YX, 'kinds', Y2('obj_darkener', Y1)), Yf(YX, 'defaultDepth', 0xc8);
var Yx = YX,
  YB = class Qa extends Y1 {
    ["create"]() {
      if (Y7.number('obj_shake') > 0x1) {
        this.instance_destroy();
        return;
      }
      this.shakespeed = 0x1, this.shakesign = 0x1, this.shakex = 0x4, this.shakey = 0x4, this.permashake = 0x0, this.active = 0x0, this.beenset = 0x0;
    }
    ["step"]() {
      this.active === 0x0 && (this.beenset = 0x1, u.flag[0xc] === 0x0 && (u.shakex = this.shakex, u.shakey = this.shakey), this.shakesign = -this.shakesign, this.active = 0x1, this.alarm[0x0] = this.shakespeed);
    }
    ["alarmEvent"](YF) {
      YF === 0x0 && (u.flag[0xc] === 0x0 && (u.shakex = this.shakex * this.shakesign, u.shakey = this.shakey * this.shakesign), this.permashake === 0x0 && (this.shakex > 0x0 && this.shakex--, this.shakey > 0x0 && this.shakey--), this.shakesign = -this.shakesign, this.alarm[0x0] = this.shakespeed, this.shakex === 0x0 && this.shakey === 0x0 && this.instance_destroy());
    }
    ["destroy"]() {
      (u.chapter < 0x2 || this.beenset) && (u.shakex = 0x0, u.shakey = 0x0);
    }
  };
YQ(YB, 'obj_shake'), Yf(YB, 'kinds', Y2('obj_shake', Y1)), Yf(YB, 'defaultDepth', 0x0);
var Yb = YB;
export { YO as a, Ya as b, Yc as c, Yd as d, Yo as e, YH as f, Yp as g, Yl as h, Yu as i, YV as j, Yv as k, YZ as l, YA as m, YP as n, Ys as o, Yx as p, Yb as q };