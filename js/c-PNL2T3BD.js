import { jf as P } from './c-PWNRTD7X.js';
import { c as y } from './c-3ELH3LBH.js';
import { a as V } from './c-MYK6C3LF.js';
import { g as C, l as M } from './c-ZQQWH6UG.js';
import { A as K, Ea as d, Ib as F, Ja as Q, Ra as r, gb as n, h as m, hb as Y, na as H, o as L, pb as E, qb as i, r as J, ra as W, ta as u, ua as T, vc as l, xb as X } from './c-PBMEVLU6.js';
import { a as S, e as s, l as G } from './c-XSSGDLV7.js';
G(), G();
var f = "dr.ini",
  c = 0;
function I() {
  const Bt = {
    'kZmiH': function (Bo, BP) {
      return Bo < BP;
    },
    'yrztO': function (Bo, BP) {
      return Bo > BP;
    },
    'ZqBnQ': function (Bo, BP) {
      return Bo(BP);
    },
    'Edhvr': "URA",
    'zGqHt': function (Bo, BP) {
      return Bo + BP;
    }
  };
  P.read(f);
  let BZ = 0;
  for (let Bo = 0; Bo < 3; Bo++) (Number(P.get("URA", '3_' + Bo, 0)) || 0) > 0 && BZ++;
  return BZ;
}
S(I, "knightAttempts");
function k(R) {
  const Bt = {
    'DqmSD': function (BP, By) {
      return BP(By);
    },
    'UnLyB': "URA",
    'ZaSyt': function (BP, By) {
      return BP + By;
    },
    'vLcbB': function (BP, By) {
      return BP === By;
    },
    'CdOIr': function (BP, By) {
      return BP + By;
    },
    'bGdrp': "CHAPTER3",
    'uAQYP': "UraBoss"
  };
  if (!R) return;
  P.read(f);
  let Bo = Number(P.get("URA", '3_' + c, 0)) || 0;
  P.set("URA", '3_' + c, R + Bo === 3 ? 3 : R), P.set("CHAPTER3", "UraBoss", R), P.close();
}
S(k, "recordKnightAttempt");
var b;
function B0() {
  const R = {};
  R.zoQKd = function (Bo, BP) {
    return Bo === BP;
  };
  R.ycPqk = function (Bo, BP) {
    return Bo + BP;
  };
  const BZ = R;
  return b = BZ.zoQKd(b, void 0) ? 1 : BZ.ycPqk(b, 1), b;
}
S(B0, "bumpKnightLosses");
function B1() {
  const w = {
    'FSoJl': function (BZ, Bo) {
      return BZ !== Bo;
    },
    'DFDwc': function (BZ, Bo) {
      return BZ(Bo);
    },
    'rCRmJ': "FLAGS",
    'Rjomy': "1263"
  };
  return P.read(f), (Number(P.get("FLAGS", "1263", 0)) || 0) !== 0;
}
S(B1, "shinyMessageSeen");
function B2() {
  const R = {};
  R.GtySW = "FLAGS", R.yTIHn = "1263";
  const Ba = R;
  P.read(f), P.set(Ba.GtySW, Ba.yTIHn, 1), P.close();
}
S(B2, "markShinyMessageSeen");
var B5 = S(R => {
    let w = 0x0;
    for (let Bt = 0x0; Bt < 0x3; Bt++) {
      let Ba = C.char[Bt];
      Ba && (C.chararmor1[Ba] === R && w++, C.chararmor2[Ba] === R && w++);
    }
    return w;
  }, 'armorEquippedInParty'),
  B6 = S((R, w, Bt) => {
    let Ba = Math.min(0x1, Math.max(0x0, Bt));
    return R + (w - R) * (-Ba * (Ba - 0x2));
  }, 'easeOut2'),
  B7 = S(() => C.chapter === 0x3 && C.tempflag[0x5d] === 0x1, 'isKnightDeath'),
  B8 = class R3 extends E {
    ["create"]() {
      this.image_speed = 0x0, this.visible = false, this.timer = 0x0, this.timerb = 0x0, this.Z_COUNT = 0x0, this.fade = 0x0, this.sh = [], this.whiteout = 0x0, this.knight_mode = B7(), this.lerp = null;
    }
    ["step"]() {
      if (this.timer++, this.timer === 0x1e && (C.screenshot = null, this.visible = true, this.x = C.heartx, this.y = C.hearty), this.knight_mode) {
        if (this.timer === 0x50 && (this.lerp = {
          'x0': this.x,
          'y0': this.y,
          't': 0x0
        }), this.lerp) {
          this.lerp.t++;
          let R = this.lerp.t / 0x1e;
          this.x = B6(this.lerp.x0, 0x138, R), this.y = B6(this.lerp.y0, 0x50, R);
        }
        this.timer === 0x96 && (C.roomScale = 0x2, F(0x120, 0xa0, Bz), this.instance_destroy());
        return;
      }
      if (this.timer === 0x32 && (r('snd_break1'), this.sprite_index = 'spr_heartbreak', this.x -= 0x2), this.timer === 0x5a) {
        r('snd_break2'), this.visible = false;
        let w = [[-0x2, 0x0], [0x0, 0x3], [0x2, 0x6], [0x8, 0x0], [0xa, 0x3], [0xc, 0x6]];
        for (let Bt = 0x0; Bt < 0x6; Bt++) {
          let Ba = F(this.x + w[Bt][0x0], this.y + w[Bt][0x1], V);
          Ba.direction = L(0x168), Ba.speed = 0x7, Ba.gravity_direction = 0x10e, Ba.gravity = 0.2, Ba.sprite_index = 'spr_heartshards', Ba.image_speed = 0.2, this.sh.push(Ba);
        }
        C.tempflag[0x3] >= 0x1 && (this.timer += 0xf);
      }
      if (this.timer === 0x8c && (this.fade = 0x1), this.timer >= 0x50 && this.timer < 0x96 && (H() && this.Z_COUNT++, this.Z_COUNT >= 0x4)) {
        if (C.chapter >= 0x3) this.timerb === 0x0 && (this.timer = -0x3e7, this.timerb = 0x1, this.whiteout = 0x1, r('snd_dtrans_lw', {
          'volume': 0.7
        }));else {
          C.gameoverAction = 'retry', this.instance_destroy();
          return;
        }
      }
      if (this.timerb > 0x0 && (this.timerb++, this.timerb === 0x28)) {
        C.gameoverAction = 'retry', this.instance_destroy();
        return;
      }
      if (this.timer === 0x96) {
        for (let BZ of this.sh) BZ.instance_destroy();
        C.roomScale = 0x2, F(0x120, 0xa0, Bz), this.instance_destroy();
      }
    }
    ["draw"](R) {
      this.timer < 0x1e && this.timer >= 0x0 && C.screenshot && R.ctx.drawImage(C.screenshot, 0x0, 0x0), this.visible && this.draw_self(R), this.fade && (R.ctx.globalAlpha = Math.min(0x1, (this.timer - 0x8c) / 0xa), R.ctx.fillStyle = "#000", R.ctx.fillRect(0x0, 0x0, 0x280, 0x1e0), R.ctx.globalAlpha = 0x1), this.whiteout && (R.ctx.globalAlpha = Math.min(0x1, this.timerb / 0x1e), R.ctx.fillStyle = "#fff", R.ctx.fillRect(0x0, 0x0, 0x280, 0x1e0), R.ctx.globalAlpha = 0x1);
    }
  };
S(B8, 'obj_gameover_init'), s(B8, 'kinds', i('obj_gameover_init', E)), s(B8, 'defaultDepth', -0x9c40), s(B8, 'defaultSprite', 'spr_heart');
var BB = B8,
  BR = class R4 extends E {
    ["create"]() {
      this.image_alpha = 0x0;
    }
    ["step"]() {
      this.image_alpha < 0x1 && (this.image_alpha += 0.02);
    }
  };
S(BR, 'obj_gameoverbg'), s(BR, 'kinds', i('obj_gameoverbg', E)), s(BR, 'defaultSprite', 'spr_gameoverbg_neo'), s(BR, 'defaultDepth', 0x186a0);
var Bw = BR,
  Bp = class R5 extends E {
    ["create"]() {
      if (Object.assign(this, {
        'EVENT': 0x0,
        'TIMER': 0x0,
        'FADEFACTOR': 0x0,
        'WHITEFADE': 0x0,
        'FADEUP': 0x0,
        'DARK_WAIT': 0x0,
        'W': null,
        'dark': null,
        'text_timer': 0x1e,
        'knight_mode': false,
        'knight_mode_con': -0x1,
        'heart_marker': null,
        'delays': []
      }), C.flag[0x14] = 0x0, C.typer = 0x29b, C.chapter > 0x1) {
        if (B7() && (this.heart_marker = F(0x9c, 0x28, V), Object.assign(this.heart_marker, {
          'sprite_index': 'spr_heart',
          'image_speed': 0x0,
          'image_xscale': 0.5,
          'image_yscale': 0.5,
          'depth': this.depth - 0x3e8
        }), I() > 0x0)) {
          this.EVENT = -0x1, this.knight_mode = true, this.knight_mode_con = 0x0, n('AUDIO_DRONE', 0.8), C.typer = 0x29b, C.fc = 0x0, C.flag[0x6] = 0x0;
          let R = B0();
          if (R >= 0x2 && (this.knight_mode_con = 0x14, B5(0x17) === 0x0 && (this.knight_mode_con = 0x28)), R >= 0x3) {
            let w = false;
            C.tempflag[0x60] === 0x1 && (C.tempflag[0x60] = 0x0, w = !B1()), w ? (B2(), this.knight_mode_con = 0x1e) : this.knight_mode_con = 0x32;
          }
        }
        this.knight_mode || F(0x0, 0x14, Bw);
      }
    }
    ["alarmEvent"](R) {
      R === 0x4 && this.EVENT++;
    }
    ["delayVar"](R, w, Bt) {
      this.delays.push({
        'name': R,
        'value': w,
        't': Bt
      });
    }
    ["runDelays"]() {
      for (let R of this.delays.slice()) --R.t <= 0x0 && (this[R.name] = R.value, this.delays.splice(this.delays.indexOf(R), 0x1));
    }
    ["step"]() {
      let R = (...Bt) => {
          C.msg = new Array(0x64).fill('\x20'), Bt.forEach((Ba, BZ) => {
            C.msg[BZ] = Ba;
          });
        },
        w = Bt => C.char.some(Ba => Ba && M(Ba) === Bt);
      if (this.knight_mode) {
        this.runDelays(), this.knightStep(R);
        return;
      }
      if (this.EVENT === 0x1) {
        if (C.chapter === 0x1) n('AUDIO_DRONE', 0.8), C.typer = 0x29b, C.fc = 0x0, R("\\M0 IT APPEARS YOU& HAVE REACHED^6& &    AN END./%"), this.EVENT = 0x2, this.W = F(0x46, 0x50, y), C.tempflag[0x3] >= 0x1 && this.W.instance_destroy();else {
          if (this.text_timer > 0x0) this.text_timer--;else {
            this.EVENT = 0x3, this.alarm[0x4] = 0x1e, n('AUDIO_DEFEAT', 0.8);
            let Bt = J(0x0, 0x1);
            w(0x2) ? w(0x3) || (Bt = 0x0) : Bt = 0x1, (w(0x2) || w(0x3)) && (Bt === 0x0 ? (R("  Come on^1,&  that all you got!?/", "  Kris^1,&  get up...!/%"), C.typer = 0x3d) : (R("  This is not&  your fate...!/", "  Please^1,&  don't give up!/%"), C.typer = 0x3c), C.fc = 0x0, this.W = F(0x32, 0x96, y));
          }
        }
      }
      this.EVENT === 0x0 && (this.EVENT = 0x1), this.EVENT === 0x2 && !X.exists('obj_writer') && (C.typer = 0x29b, R("\\M0 WILL YOU TRY AGAIN?"), C.tempflag[0x3] >= 0x1 && R("\\M0 WILL YOU PERSIST?"), this.EVENT = 0x3, this.alarm[0x4] = C.tempflag[0x3] >= 0x1 ? 0xf : 0x1e, this.W = F(0x28, 0x50, y)), this.EVENT === 0x4 && (this.choice = F(0x64, 0x78, Bx), C.chapter > 0x1 && Object.assign(this.choice, {
        'NAME': ['CONTINUE', "GIVE UP"],
        'NAMEX': [0x50, 0xbe],
        'NAMEY': [0xb4, 0xb4],
        'XMAX': 0x1,
        'CURX': -0x1,
        'IDEALX': 0xbe,
        'IDEALY': 0xb4,
        'HEARTX': 0xbe
      }), this.EVENT = 0x5), this.EVENT === 0x5 && (C.choice === 0x0 && (X.with('obj_writer', Ba => Ba.instance_destroy()), this.EVENT = 0x6), C.choice === 0x1 && (X.with('obj_writer', Ba => Ba.instance_destroy()), this.EVENT = 0x1a)), this.EVENT === 0x6 && (Y(), C.flag[0x6] = 0x1, this.EVENT = 0x7, this.alarm[0x4] = 0x1e, C.chapter === 0x1 && (C.typer = 0x29b, R(" THEN, THE FUTURE& IS IN YOUR HANDS."), this.W = F(0x32, 0x50, y), C.tempflag[0x3] >= 0x1 && (this.W.instance_destroy(), this.alarm[0x4] = 0x1))), this.EVENT === 0x8 && (this.WHITEFADE = 0x1, this.FADEUP = 0.01, this.EVENT = 0x9, this.alarm[0x4] = 0x78, C.tempflag[0x3] >= 0x1 ? (this.FADEUP = 0.03, this.alarm[0x4] = 0x2d) : C.chapter > 0x1 && r('snd_dtrans_lw'), C.tempflag[0x3] += 0x1), this.EVENT === 0xa && (C.gameoverAction = 'retry', this.EVENT = 0xb), this.EVENT === 0x1a && (Y(), C.chapter > 0x1 && X.with('obj_gameoverbg', Ba => Ba.instance_destroy()), C.typer = 0x29b, R("\\M0 THEN THE WORLD^5 & WAS COVERED^5 & IN DARKNESS./%"), this.EVENT = 0x1b, this.W = F(0x3c, 0x50, y)), this.EVENT === 0x1b && !X.exists('obj_writer') && (this.dark = d.AUDIO_DARKNESS && Q() ? l(d.AUDIO_DARKNESS.cloneNode()) : null, this.dark && (this.dark.volume = 0.8, this.dark.play().catch(() => {})), this.EVENT = 0x1c, this.DARK_WAIT = 0x0), this.EVENT === 0x1c && (this.DARK_WAIT++, (this.DARK_WAIT >= 0x7f8 || this.dark && this.dark.ended || this.DARK_WAIT > 0x5a && H()) && (this.dark && this.dark.pause(), C.gameoverAction = 'quit')), this.EVENT >= 0x0 && this.EVENT <= 0x4 && W() && X.with('obj_writer', Ba => {
        Ba.pos < Ba.length - 0x3 && (Ba.pos += 0x2), Ba.specfade <= 0.9 && (Ba.specfade -= 0.1);
      });
    }
    ["knightStep"](R) {
      let w = (BZ, Bo = 0x46, BP = 0x50) => {
          R(BZ), this.W = F(Bo, BP, y);
        },
        Bt = () => !X.exists('obj_writer'),
        Ba = this.knight_mode_con;
      if (Ba === 0x0 && (this.knight_mode_con = 0x1, w("\\M0     VERY^6& &  INTERESTING./%")), Ba === 0x1 && Bt() && (this.knight_mode_con = 0x2, this.delayVar('knight_mode_con', 0x3, 0x1e), w("\\M0 YOUR LOSS HERE^6& &     IS ALL^6& & BUT GUARANTEED./%")), Ba === 0x3 && Bt() && (this.knight_mode_con = 0x4, this.delayVar('knight_mode_con', 0x5, 0x1e), w("\\M0    AND YET^6& & YOU PERSIST.../%")), Ba === 0x5 && Bt() && (this.knight_mode_con = 0x6, this.delayVar('knight_mode_con', 0x7, 0x1e), w("\\M0IF YOU ARE SO&DETERMINED&TO TRY ONCE MORE/%")), Ba === 0x7 && Bt() && (this.knight_mode_con = 0x8, this.delayVar('knight_mode_con', 0x32, 0x1e), w("\\M0      THEN^6& &SHALL WE HASTEN?/%")), Ba === 0x14 && (this.knight_mode_con = 0x15, w("\\M0  AND SO, YOU&  MEET WITH THE &  SAME FATE./%")), Ba === 0x15 && Bt() && (this.knight_mode_con = 0x32, w("\\M0  SHALL YOU TRY&  ONCE MORE?/%")), Ba === 0x1e && Bt() && (this.knight_mode_con = 0x20, w("\\M0   INCREDIBLE./%")), Ba === 0x20 && Bt() && (this.knight_mode_con = 0x21, w("\\M0 I FELT IT THERE^6& &    SHINING./%")), Ba === 0x21 && Bt() && (this.knight_mode_con = 0x22, w("\\M0   YOUR POWER./%")), Ba === 0x22 && Bt() && (this.knight_mode_con = 0x32, w("\\M0A LITTLE FURTHER./%")), Ba === 0x28 && Bt() && (this.knight_mode_con = 0x29, w("\\M0     VERY^6& &  INTERESTING./%")), Ba === 0x29 && Bt() && (this.knight_mode_con = 0x2a, w("\\M0  YOU ARE MISSING&  SOMETHING&  IMPORTANT./%")), Ba === 0x2a && Bt() && (this.knight_mode_con = 0x2b, w("\\M0  YOU WON'T WIN&  LIKE THIS./%")), Ba === 0x2b && Bt() && (this.knight_mode_con = 0x32, w("\\M0  STILL...&  WILL YOU&  PERSIST?/%")), Ba === 0x32 && Bt() && (this.knight_mode_con = 0x33, this.delayVar('knight_mode_con', 0x34, 0x1e), this.heart_marker && (this.heart_marker.fadeout = {
        'from': this.heart_marker.image_alpha ?? 0x1,
        't': 0x0,
        'max': 0xf
      }), this.choice = F(0x64, 0x78, Bx), Object.assign(this.choice, {
        'NAME': ["GO BACK\n(FIGHT AGAIN)", "GO FORWARD\n(MOVE ON)"],
        'NAMEX': [0x46, 0xbe],
        'NAMEY': [0xb4, 0xb4],
        'XMAX': 0x1,
        'CURX': -0x1,
        'IDEALX': 0xbe,
        'IDEALY': 0xb4,
        'fadebuffer': 0x14,
        'choice_y_offset': 0x14,
        'yoff': {
          't': 0x0,
          'max': 0x14
        }
      })), Ba === 0x34 && Bt() && (C.flag[0x6] = 0x0, C.choice === 0x0 && (this.knight_mode_con = 0x35, X.with('obj_writer', BZ => BZ.instance_destroy())), C.choice === 0x1 && (this.knight_mode_con = 0x37, X.with('obj_writer', BZ => BZ.instance_destroy()))), Ba === 0x35 && Bt() && (this.knight_mode_con = 0x36, this.delayVar('knight_mode_con', 0x3c, 0x1e), Y(), this.WHITEFADE = 0x1, this.FADEUP = 0.03333333333333333, this.knightGo = 'retry'), Ba === 0x37 && Bt() && (this.knight_mode_con = 0x38, this.delayVar('knight_mode_con', 0x3c, 0x1e), Y(), this.WHITEFADE = 0x0, this.FADEUP = 0.03333333333333333, this.knightGo = 'quit'), Ba === 0x3c && (C.gameoverAction = this.knightGo || 'retry', this.knight_mode_con = 0x3d), this.heart_marker && this.heart_marker.fadeout && !this.heart_marker.destroyed) {
        let BZ = this.heart_marker.fadeout;
        BZ.t++, this.heart_marker.image_alpha = Math.max(0x0, BZ.from * (0x1 - BZ.t / BZ.max));
      }
    }
    ["draw"](R) {
      let w = R.ctx;
      w.globalAlpha = Math.min(0x1, this.FADEFACTOR), w.fillStyle = this.WHITEFADE === 0x0 ? "#000" : "#fff", w.fillRect(-0xa, -0xa, 0x3e7, 0x3e7), w.globalAlpha = 0x1, this.FADEUP > 0x0 && this.FADEFACTOR < 0x1 && (this.FADEFACTOR += this.FADEUP);
    }
    ["destroy"]() {
      this.dark && this.dark.pause();
    }
  };
S(Bp, 'DEVICE_FAILURE'), s(Bp, 'kinds', i('DEVICE_FAILURE', E)), s(Bp, 'defaultDepth', 0xa);
var Bz = Bp,
  Bh = class R6 extends E {
    ["create"]() {
      this.NAME = ['YES', 'NO'], this.NAMEX = [0x6e, 0xbe], this.NAMEY = [0xb4, 0xb4], this.XMAX = 0x1, this.CURX = -0x1, this.IDEALX = 0x96, this.IDEALY = 0xb4, this.HEARTX = 0x96, this.HEARTY = 0xb4, this.DRAWHEART = 0x1, this.ONEBUFFER = 0x1, this.FINISH = 0x0, this.fadebuffer = 0xa, C.choice = -0x1, this.choice_y_offset = 0x0, this.yoff = null;
    }
    ["step"]() {
      if (this.fadebuffer < 0x0 && this.FINISH === 0x0) {
        let R = 0x0;
        if (T() && (R = 0x1), u() && (R = -0x1), R !== 0x0 && (this.CURX = this.CURX < 0x0 ? R > 0x0 ? 0x1 : 0x0 : (this.CURX + 0x2 + R) % 0x2, r('snd_menumove')), H() && this.ONEBUFFER < 0x0 && this.CURX >= 0x0) {
          r('snd_select'), this.FINISH = 0x1, C.choice = this.CURX, this.instance_destroy();
          return;
        }
      }
      this.CURX >= 0x0 && (this.IDEALX = this.NAMEX[this.CURX] - 0x14, this.IDEALY = this.NAMEY[this.CURX]), K(this.HEARTX - this.IDEALX) <= 0x2 && (this.HEARTX = this.IDEALX), this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3, this.HEARTY = this.IDEALY, this.fadebuffer--, this.ONEBUFFER--, this.yoff && (this.yoff.t++, this.choice_y_offset = 0x14 * (0x1 - Math.min(0x1, this.yoff.t / this.yoff.max)));
    }
    ["draw"](R) {
      let w = (0xa - this.fadebuffer) / 0xa;
      w > 0x1 && (w = 0x1), w < 0x0 && (w = 0x0), this.DRAWHEART === 0x1 && R.draw_sprite_ext('spr_heart', 0x0, this.HEARTX, this.HEARTY, 0x1, 0x1, 0x0, m.white, 0.6 * w), R.draw_set_font('fnt_main'), R.draw_set_alpha(w);
      for (let Bt = 0x0; Bt <= this.XMAX; Bt++) R.draw_text(this.NAMEX[Bt], this.NAMEY[Bt] + this.choice_y_offset, this.NAME[Bt], this.CURX === Bt ? m.yellow : m.white);
      R.draw_set_alpha(0x1);
    }
  };
S(Bh, 'DEVICE_CHOICE'), s(Bh, 'kinds', i('DEVICE_CHOICE', E)), s(Bh, 'defaultDepth', 0x0);
var Bx = Bh;
export { k as a, BB as b, Bw as c, Bz as d, Bx as e };