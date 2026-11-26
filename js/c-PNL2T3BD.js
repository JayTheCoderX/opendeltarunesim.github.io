const h = function () {
  const R = {
    uFUmr: function (BP, By) {
      return BP !== By;
    },
    CssZu: "xJHGa",
    XGbUs: "pZqKg",
    BGkdI: "undefined",
    vrwQO: function (BP, By) {
      return BP === By;
    },
    hCCQM: "object",
    QCelr: "function",
    zFhry: "log",
    XuIQQ: "warn",
    SPgMD: "info",
    vIpZD: "error",
    jgejX: "exception",
    dlqoJ: "table",
    IZWav: "trace",
    YIchb: function (BP, By) {
      return BP < By;
    },
    DBTgu: function (BP, By) {
      return BP !== By;
    },
    ZZFzq: "LJiJi"
  };
  const BZ = R;
  let Bo = true;
  return function (BP, By) {
    const BM = {
      uowEj: function (BK, BU) {
        return BZ.uFUmr(BK, BU);
      },
      dygsY: BZ.BGkdI,
      srhgl: function (BK, BU) {
        return BZ.vrwQO(BK, BU);
      },
      pfBsD: BZ.hCCQM,
      tQhJU: BZ.QCelr,
      QuNQn: function (BK, BU) {
        return BZ.vrwQO(BK, BU);
      },
      RLRHl: BZ.zFhry,
      FaBBT: BZ.XuIQQ,
      XgHxm: BZ.SPgMD,
      dtCZr: BZ.vIpZD,
      noNJS: BZ.jgejX,
      mCRcN: BZ.dlqoJ,
      wMRel: BZ.IZWav,
      ujiXs: function (BK, BU) {
        return BZ.YIchb(BK, BU);
      }
    };
    if (BZ.DBTgu(BZ.ZZFzq, BZ.ZZFzq)) {
      if (this.fadebuffer < 0 && this.FINISH === 0) {
        let BK = 0;
        if (Bw()) {
          BK = 1;
        }
        if (Bp()) {
          BK = -1;
        }
        if (BK !== 0) {
          this.CURX = this.CURX < 0 ? BK > 0 ? 1 : 0 : (this.CURX + 2 + BK) % 2;
          Bz("snd_menumove");
        }
        if (Bh() && this.ONEBUFFER < 0 && this.CURX >= 0) {
          __DECODE_0__(undefined - -233, undefined);
          this.FINISH = 1;
          BZ.choice = this.CURX;
          this.instance_destroy();
          return;
        }
      }
      if (this.CURX >= 0) {
        this.IDEALX = this.NAMEX[this.CURX] - 20;
        this.IDEALY = this.NAMEY[this.CURX];
      }
      if (BB(this.HEARTX - this.IDEALX) <= 2) {
        this.HEARTX = this.IDEALX;
      }
      this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3;
      this.HEARTY = this.IDEALY;
      this.fadebuffer--;
      this.ONEBUFFER--;
      if (this.yoff) {
        this.yoff.t++;
        this.choice_y_offset = (1 - BR.min(1, this.yoff.t / this.yoff.max)) * 20;
      }
    } else {
      const BU = Bo ? function () {
        if (BZ.uFUmr(BZ.CssZu, BZ.XGbUs)) {
          if (By) {
            const BO = By.apply(BP, arguments);
            By = null;
            return BO;
          }
        } else {
          const Br = BM.uowEj(typeof B6, BM.dygsY) ? Br : BM.srhgl(typeof Bn, BM.pfBsD) && BM.srhgl(typeof Bm, BM.tQhJU) && BM.QuNQn(typeof BB, BM.pfBsD) ? BR : this;
          const Bn = Br.console = Br.console || {};
          const Bm = [BM.RLRHl, BM.FaBBT, BM.XgHxm, BM.dtCZr, BM.noNJS, BM.mCRcN, BM.wMRel];
          for (let BY = 0; BM.ujiXs(BY, Bm.length); BY++) {
            const BH = Bo.constructor.prototype.bind(BP);
            const Bj = Bm[BY];
            const BD = Bn[Bj] || BH;
            BH.__proto__ = By.bind(BV);
            BH.toString = BD.toString.bind(BD);
            Bn[Bj] = BH;
          }
        }
      } : function () {};
      Bo = false;
      return BU;
    }
  };
}();
const x = h(this, function () {
  const w = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Bt = new RegExp("[SVFqZABJzFDyMxxZPGORMqZONEEVMPFTyzIBKFYjMOqQGUZEjTVRbJSNNKXBDfxbqWUOSzBZFUPxjBGqYJPZMYYPfWEAGqDUqyZPOIjbfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz]", "g");
  const BZ = "loSVFqZcalhABoJszFt;1D27.0y.M0x.xZ1;PGOdRMeqltaZrunesONiEmEVMPF.Tcom;wywwz.IBKdFeYjltaMrOqQuGnesiUmZEjTVRb.JcomS;dNNKXrBsDfimxbq.lWoUcOaSlzhBoZsFtU;.PdexjBlGqYJPtaZrunMYYePfWEsAGimq.pDUqyaZPOIgejs.dbevfHjfQYCfqBURZBzSMkVVVZkFGzqLXbGbyDVRjkYYjURYkUUDUOAPEPzkOUTRQxqjFykYDTqPVMSQjUNIAEbCz".replace(Bt, "").split(";");
  let Bo;
  let BV;
  let Be;
  let BO;
  const Br = function (BW, Bu, BT) {
    if (BW.length != Bu) {
      return false;
    }
    for (let Bs = 0; Bs < Bu; Bs++) {
      for (let Bg = 0; Bg < BT.length; Bg += 2) {
        if (Bs == BT[Bg] && BW.charCodeAt(Bs) != BT[Bg + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const BY = function (BW, Bu, BT) {
    return Br(Bu, BT, BW);
  };
  const BH = function (BW, Bu, BT) {
    return BY(Bu, BW, BT);
  };
  const BD = function (BW, Bu, BT) {
    return BH(Bu, BT, BW);
  };
  for (let BW in w) {
    {
      if (Br(BW, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        Bo = BW;
        break;
      }
    }
  }
  for (let Bu in w[Bo]) {
    {
      if (BD(6, Bu, [5, 110, 0, 100])) {
        {
          BV = Bu;
          break;
        }
      }
    }
  }
  for (let BX in w[Bo]) {
    {
      if (BH(BX, [7, 110, 0, 108], 8)) {
        Be = BX;
        break;
      }
    }
  }
  if (!(BV < "~")) {
    for (let Bv in w[Bo][Be]) {
      {
        if (BY([7, 101, 0, 104], Bv, 8)) {
          {
            BO = Bv;
            break;
          }
        }
      }
    }
  }
  if (!Bo || !w[Bo]) {
    return;
  }
  const BL = w[Bo][BV];
  const BE = !!w[Bo][Be] && w[Bo][Be][BO];
  const Bi = BL || BE;
  if (!Bi) {
    return;
  }
  let BJ = false;
  for (let BG = 0; BG < BZ.length; BG++) {
    {
      const Bf = BZ[BG];
      const Bc = Bf[0] === String.fromCharCode(46) ? Bf.slice(1) : Bf;
      const BI = Bi.length - Bc.length;
      const Bq = Bi.indexOf(Bc, BI);
      const Bk = Bq !== -1 && Bq === BI;
      if (Bk) {
        if (Bi.length == Bf.length || Bf.indexOf(".") === 0) {
          BJ = true;
        }
      }
    }
  }
  if (!BJ) {
    {}
  }
});
x();
import { jf as P } from "./c-PWNRTD7X.js";
import { c as y } from "./c-3ELH3LBH.js";
import { a as V } from "./c-MYK6C3LF.js";
import { g as C, l as M } from "./c-ZQQWH6UG.js";
import { A as K, Ea as d, Ib as F, Ja as Q, Ra as r, gb as n, h as m, hb as Y, na as H, o as L, pb as E, qb as i, r as J, ra as W, ta as u, ua as T, vc as l, xb as X } from "./c-PBMEVLU6.js";
import { a as S, e as s, l as G } from "./c-XSSGDLV7.js";
G();
G();
var f = "dr.ini";
var c = 0;
function I() {
  P.read(f);
  let BZ = 0;
  for (let Bo = 0; Bo < 3; Bo++) {
    if ((Number(P.get("URA", "3_" + Bo, 0)) || 0) > 0) {
      BZ++;
    }
  }
  return BZ;
}
S(I, "knightAttempts");
function k(R) {
  if (!R) {
    return;
  }
  P.read(f);
  let Bo = Number(P.get("URA", "3_" + c, 0)) || 0;
  P.set("URA", "3_" + c, R + Bo === 3 ? 3 : R);
  P.set("CHAPTER3", "UraBoss", R);
  P.close();
}
S(k, "recordKnightAttempt");
var b;
function B0() {
  b = b === undefined ? 1 : b + 1;
  return b;
}
S(B0, "bumpKnightLosses");
function B1() {
  P.read(f);
  return (Number(P.get("FLAGS", "1263", 0)) || 0) !== 0;
}
S(B1, "shinyMessageSeen");
function B2() {
  P.read(f);
  P.set("FLAGS", "1263", 1);
  P.close();
}
S(B2, "markShinyMessageSeen");
var B5 = S(R => {
  let w = 0;
  for (let Bt = 0; Bt < 3; Bt++) {
    let Ba = C.char[Bt];
    if (Ba) {
      if (C.chararmor1[Ba] === R) {
        w++;
      }
      if (C.chararmor2[Ba] === R) {
        w++;
      }
    }
  }
  return w;
}, "armorEquippedInParty");
var B6 = S((R, w, Bt) => {
  let Ba = Math.min(1, Math.max(0, Bt));
  return R + (w - R) * (-Ba * (Ba - 2));
}, "easeOut2");
var B7 = S(() => C.chapter === 3 && C.tempflag[93] === 1, "isKnightDeath");
var B8 = class R3 extends E {
  create() {
    this.image_speed = 0;
    this.visible = false;
    this.timer = 0;
    this.timerb = 0;
    this.Z_COUNT = 0;
    this.fade = 0;
    this.sh = [];
    this.whiteout = 0;
    this.knight_mode = B7();
    this.lerp = null;
  }
  step() {
    this.timer++;
    if (this.timer === 30) {
      C.screenshot = null;
      this.visible = true;
      this.x = C.heartx;
      this.y = C.hearty;
    }
    if (this.knight_mode) {
      if (this.timer === 80) {
        this.lerp = {
          x0: this.x,
          y0: this.y,
          t: 0
        };
      }
      if (this.lerp) {
        this.lerp.t++;
        let R = this.lerp.t / 30;
        this.x = B6(this.lerp.x0, 312, R);
        this.y = B6(this.lerp.y0, 80, R);
      }
      if (this.timer === 150) {
        C.roomScale = 2;
        F(288, 160, Bz);
        this.instance_destroy();
      }
      return;
    }
    if (this.timer === 50) {
      r("snd_break1");
      this.sprite_index = "spr_heartbreak";
      this.x -= 2;
    }
    if (this.timer === 90) {
      r("snd_break2");
      this.visible = false;
      let w = [[-2, 0], [0, 3], [2, 6], [8, 0], [10, 3], [12, 6]];
      for (let Bt = 0; Bt < 6; Bt++) {
        let Ba = F(this.x + w[Bt][0], this.y + w[Bt][1], V);
        Ba.direction = L(360);
        Ba.speed = 7;
        Ba.gravity_direction = 270;
        Ba.gravity = 0.2;
        Ba.sprite_index = "spr_heartshards";
        Ba.image_speed = 0.2;
        this.sh.push(Ba);
      }
      if (C.tempflag[3] >= 1) {
        this.timer += 15;
      }
    }
    if (this.timer === 140) {
      this.fade = 1;
    }
    if (this.timer >= 80 && this.timer < 150 && (H() && this.Z_COUNT++, this.Z_COUNT >= 4)) {
      if (C.chapter >= 3) {
        if (this.timerb === 0) {
          this.timer = -999;
          this.timerb = 1;
          this.whiteout = 1;
          r("snd_dtrans_lw", {
            volume: 0.7
          });
        }
      } else {
        C.gameoverAction = "retry";
        this.instance_destroy();
        return;
      }
    }
    if (this.timerb > 0 && (this.timerb++, this.timerb === 40)) {
      C.gameoverAction = "retry";
      this.instance_destroy();
      return;
    }
    if (this.timer === 150) {
      for (let BZ of this.sh) {
        BZ.instance_destroy();
      }
      C.roomScale = 2;
      F(288, 160, Bz);
      this.instance_destroy();
    }
  }
  draw(R) {
    if (this.timer < 30 && this.timer >= 0 && C.screenshot) {
      R.ctx.drawImage(C.screenshot, 0, 0);
    }
    if (this.visible) {
      this.draw_self(R);
    }
    if (this.fade) {
      R.ctx.globalAlpha = Math.min(1, (this.timer - 140) / 10);
      R.ctx.fillStyle = "#000";
      R.ctx.fillRect(0, 0, 640, 480);
      R.ctx.globalAlpha = 1;
    }
    if (this.whiteout) {
      R.ctx.globalAlpha = Math.min(1, this.timerb / 30);
      R.ctx.fillStyle = "#fff";
      R.ctx.fillRect(0, 0, 640, 480);
      R.ctx.globalAlpha = 1;
    }
  }
};
S(B8, "obj_gameover_init");
s(B8, "kinds", i("obj_gameover_init", E));
s(B8, "defaultDepth", -40000);
s(B8, "defaultSprite", "spr_heart");
var BB = B8;
var BR = class R4 extends E {
  create() {
    this.image_alpha = 0;
  }
  step() {
    if (this.image_alpha < 1) {
      this.image_alpha += 0.02;
    }
  }
};
S(BR, "obj_gameoverbg");
s(BR, "kinds", i("obj_gameoverbg", E));
s(BR, "defaultSprite", "spr_gameoverbg_neo");
s(BR, "defaultDepth", 100000);
var Bw = BR;
var Bp = class R5 extends E {
  create() {
    Object.assign(this, {
      EVENT: 0,
      TIMER: 0,
      FADEFACTOR: 0,
      WHITEFADE: 0,
      FADEUP: 0,
      DARK_WAIT: 0,
      W: null,
      dark: null,
      text_timer: 30,
      knight_mode: false,
      knight_mode_con: -1,
      heart_marker: null,
      delays: []
    });
    C.flag[20] = 0;
    C.typer = 667;
    if (C.chapter > 1) {
      if (B7() && (this.heart_marker = F(156, 40, V), Object.assign(this.heart_marker, {
        sprite_index: "spr_heart",
        image_speed: 0,
        image_xscale: 0.5,
        image_yscale: 0.5,
        depth: this.depth - 1000
      }), I() > 0)) {
        this.EVENT = -1;
        this.knight_mode = true;
        this.knight_mode_con = 0;
        n("AUDIO_DRONE", 0.8);
        C.typer = 667;
        C.fc = 0;
        C.flag[6] = 0;
        let R = B0();
        if (R >= 2) {
          this.knight_mode_con = 20;
          if (B5(23) === 0) {
            this.knight_mode_con = 40;
          }
        }
        if (R >= 3) {
          let w = false;
          if (C.tempflag[96] === 1) {
            C.tempflag[96] = 0;
            w = !B1();
          }
          if (w) {
            B2();
            this.knight_mode_con = 30;
          } else {
            this.knight_mode_con = 50;
          }
        }
      }
      if (!this.knight_mode) {
        F(0, 20, Bw);
      }
    }
  }
  alarmEvent(R) {
    if (R === 4) {
      this.EVENT++;
    }
  }
  delayVar(R, w, Bt) {
    this.delays.push({
      name: R,
      value: w,
      t: Bt
    });
  }
  runDelays() {
    for (let R of this.delays.slice()) {
      if (--R.t <= 0) {
        this[R.name] = R.value;
        this.delays.splice(this.delays.indexOf(R), 1);
      }
    }
  }
  step() {
    let R = (...Bt) => {
      C.msg = new Array(100).fill(" ");
      Bt.forEach((Ba, BZ) => {
        C.msg[BZ] = Ba;
      });
    };
    let w = Bt => C.char.some(Ba => Ba && M(Ba) === Bt);
    if (this.knight_mode) {
      this.runDelays();
      this.knightStep(R);
      return;
    }
    if (this.EVENT === 1) {
      if (C.chapter === 1) {
        n("AUDIO_DRONE", 0.8);
        C.typer = 667;
        C.fc = 0;
        R("\\M0 IT APPEARS YOU& HAVE REACHED^6& &    AN END./%");
        this.EVENT = 2;
        this.W = F(70, 80, y);
        if (C.tempflag[3] >= 1) {
          this.W.instance_destroy();
        }
      } else if (this.text_timer > 0) {
        this.text_timer--;
      } else {
        this.EVENT = 3;
        this.alarm[4] = 30;
        n("AUDIO_DEFEAT", 0.8);
        let Bt = J(0, 1);
        if (w(2)) {
          if (!w(3)) {
            Bt = 0;
          }
        } else {
          Bt = 1;
        }
        if (w(2) || w(3)) {
          if (Bt === 0) {
            R("  Come on^1,&  that all you got!?/", "  Kris^1,&  get up...!/%");
            C.typer = 61;
          } else {
            R("  This is not&  your fate...!/", "  Please^1,&  don't give up!/%");
            C.typer = 60;
          }
          C.fc = 0;
          this.W = F(50, 150, y);
        }
      }
    }
    if (this.EVENT === 0) {
      this.EVENT = 1;
    }
    if (this.EVENT === 2 && !X.exists("obj_writer")) {
      C.typer = 667;
      R("\\M0 WILL YOU TRY AGAIN?");
      if (C.tempflag[3] >= 1) {
        R("\\M0 WILL YOU PERSIST?");
      }
      this.EVENT = 3;
      this.alarm[4] = C.tempflag[3] >= 1 ? 15 : 30;
      this.W = F(40, 80, y);
    }
    if (this.EVENT === 4) {
      this.choice = F(100, 120, Bx);
      if (C.chapter > 1) {
        Object.assign(this.choice, {
          NAME: ["CONTINUE", "GIVE UP"],
          NAMEX: [80, 190],
          NAMEY: [180, 180],
          XMAX: 1,
          CURX: -1,
          IDEALX: 190,
          IDEALY: 180,
          HEARTX: 190
        });
      }
      this.EVENT = 5;
    }
    if (this.EVENT === 5) {
      if (C.choice === 0) {
        X.with("obj_writer", Ba => Ba.instance_destroy());
        this.EVENT = 6;
      }
      if (C.choice === 1) {
        X.with("obj_writer", Ba => Ba.instance_destroy());
        this.EVENT = 26;
      }
    }
    if (this.EVENT === 6) {
      Y();
      C.flag[6] = 1;
      this.EVENT = 7;
      this.alarm[4] = 30;
      if (C.chapter === 1) {
        C.typer = 667;
        R(" THEN, THE FUTURE& IS IN YOUR HANDS.");
        this.W = F(50, 80, y);
        if (C.tempflag[3] >= 1) {
          this.W.instance_destroy();
          this.alarm[4] = 1;
        }
      }
    }
    if (this.EVENT === 8) {
      this.WHITEFADE = 1;
      this.FADEUP = 0.01;
      this.EVENT = 9;
      this.alarm[4] = 120;
      if (C.tempflag[3] >= 1) {
        this.FADEUP = 0.03;
        this.alarm[4] = 45;
      } else if (C.chapter > 1) {
        r("snd_dtrans_lw");
      }
      C.tempflag[3] += 1;
    }
    if (this.EVENT === 10) {
      C.gameoverAction = "retry";
      this.EVENT = 11;
    }
    if (this.EVENT === 26) {
      Y();
      if (C.chapter > 1) {
        X.with("obj_gameoverbg", Ba => Ba.instance_destroy());
      }
      C.typer = 667;
      R("\\M0 THEN THE WORLD^5 & WAS COVERED^5 & IN DARKNESS./%");
      this.EVENT = 27;
      this.W = F(60, 80, y);
    }
    if (this.EVENT === 27 && !X.exists("obj_writer")) {
      this.dark = d.AUDIO_DARKNESS && Q() ? l(d.AUDIO_DARKNESS.cloneNode()) : null;
      if (this.dark) {
        this.dark.volume = 0.8;
        this.dark.play().catch(() => {});
      }
      this.EVENT = 28;
      this.DARK_WAIT = 0;
    }
    if (this.EVENT === 28) {
      this.DARK_WAIT++;
      if (this.DARK_WAIT >= 2040 || this.dark && this.dark.ended || this.DARK_WAIT > 90 && H()) {
        if (this.dark) {
          this.dark.pause();
        }
        C.gameoverAction = "quit";
      }
    }
    if (this.EVENT >= 0 && this.EVENT <= 4 && W()) {
      X.with("obj_writer", Ba => {
        if (Ba.pos < Ba.length - 3) {
          Ba.pos += 2;
        }
        if (Ba.specfade <= 0.9) {
          Ba.specfade -= 0.1;
        }
      });
    }
  }
  knightStep(R) {
    let w = (BZ, Bo = 70, BP = 80) => {
      R(BZ);
      this.W = F(Bo, BP, y);
    };
    let Bt = () => !X.exists("obj_writer");
    let Ba = this.knight_mode_con;
    if (Ba === 0) {
      this.knight_mode_con = 1;
      w("\\M0     VERY^6& &  INTERESTING./%");
    }
    if (Ba === 1 && Bt()) {
      this.knight_mode_con = 2;
      this.delayVar("knight_mode_con", 3, 30);
      w("\\M0 YOUR LOSS HERE^6& &     IS ALL^6& & BUT GUARANTEED./%");
    }
    if (Ba === 3 && Bt()) {
      this.knight_mode_con = 4;
      this.delayVar("knight_mode_con", 5, 30);
      w("\\M0    AND YET^6& & YOU PERSIST.../%");
    }
    if (Ba === 5 && Bt()) {
      this.knight_mode_con = 6;
      this.delayVar("knight_mode_con", 7, 30);
      w("\\M0IF YOU ARE SO&DETERMINED&TO TRY ONCE MORE/%");
    }
    if (Ba === 7 && Bt()) {
      this.knight_mode_con = 8;
      this.delayVar("knight_mode_con", 50, 30);
      w("\\M0      THEN^6& &SHALL WE HASTEN?/%");
    }
    if (Ba === 20) {
      this.knight_mode_con = 21;
      w("\\M0  AND SO, YOU&  MEET WITH THE &  SAME FATE./%");
    }
    if (Ba === 21 && Bt()) {
      this.knight_mode_con = 50;
      w("\\M0  SHALL YOU TRY&  ONCE MORE?/%");
    }
    if (Ba === 30 && Bt()) {
      this.knight_mode_con = 32;
      w("\\M0   INCREDIBLE./%");
    }
    if (Ba === 32 && Bt()) {
      this.knight_mode_con = 33;
      w("\\M0 I FELT IT THERE^6& &    SHINING./%");
    }
    if (Ba === 33 && Bt()) {
      this.knight_mode_con = 34;
      w("\\M0   YOUR POWER./%");
    }
    if (Ba === 34 && Bt()) {
      this.knight_mode_con = 50;
      w("\\M0A LITTLE FURTHER./%");
    }
    if (Ba === 40 && Bt()) {
      this.knight_mode_con = 41;
      w("\\M0     VERY^6& &  INTERESTING./%");
    }
    if (Ba === 41 && Bt()) {
      this.knight_mode_con = 42;
      w("\\M0  YOU ARE MISSING&  SOMETHING&  IMPORTANT./%");
    }
    if (Ba === 42 && Bt()) {
      this.knight_mode_con = 43;
      w("\\M0  YOU WON'T WIN&  LIKE THIS./%");
    }
    if (Ba === 43 && Bt()) {
      this.knight_mode_con = 50;
      w("\\M0  STILL...&  WILL YOU&  PERSIST?/%");
    }
    if (Ba === 50 && Bt()) {
      this.knight_mode_con = 51;
      this.delayVar("knight_mode_con", 52, 30);
      if (this.heart_marker) {
        this.heart_marker.fadeout = {
          from: this.heart_marker.image_alpha ?? 1,
          t: 0,
          max: 15
        };
      }
      this.choice = F(100, 120, Bx);
      Object.assign(this.choice, {
        NAME: ["GO BACK\n(FIGHT AGAIN)", "GO FORWARD\n(MOVE ON)"],
        NAMEX: [70, 190],
        NAMEY: [180, 180],
        XMAX: 1,
        CURX: -1,
        IDEALX: 190,
        IDEALY: 180,
        fadebuffer: 20,
        choice_y_offset: 20,
        yoff: {
          t: 0,
          max: 20
        }
      });
    }
    if (Ba === 52 && Bt()) {
      C.flag[6] = 0;
      if (C.choice === 0) {
        this.knight_mode_con = 53;
        X.with("obj_writer", BZ => BZ.instance_destroy());
      }
      if (C.choice === 1) {
        this.knight_mode_con = 55;
        X.with("obj_writer", BZ => BZ.instance_destroy());
      }
    }
    if (Ba === 53 && Bt()) {
      this.knight_mode_con = 54;
      this.delayVar("knight_mode_con", 60, 30);
      Y();
      this.WHITEFADE = 1;
      this.FADEUP = 0.03333333333333333;
      this.knightGo = "retry";
    }
    if (Ba === 55 && Bt()) {
      this.knight_mode_con = 56;
      this.delayVar("knight_mode_con", 60, 30);
      Y();
      this.WHITEFADE = 0;
      this.FADEUP = 0.03333333333333333;
      this.knightGo = "quit";
    }
    if (Ba === 60) {
      C.gameoverAction = this.knightGo || "retry";
      this.knight_mode_con = 61;
    }
    if (this.heart_marker && this.heart_marker.fadeout && !this.heart_marker.destroyed) {
      let BZ = this.heart_marker.fadeout;
      BZ.t++;
      this.heart_marker.image_alpha = Math.max(0, BZ.from * (1 - BZ.t / BZ.max));
    }
  }
  draw(R) {
    let w = R.ctx;
    w.globalAlpha = Math.min(1, this.FADEFACTOR);
    w.fillStyle = this.WHITEFADE === 0 ? "#000" : "#fff";
    w.fillRect(-10, -10, 999, 999);
    w.globalAlpha = 1;
    if (this.FADEUP > 0 && this.FADEFACTOR < 1) {
      this.FADEFACTOR += this.FADEUP;
    }
  }
  destroy() {
    if (this.dark) {
      this.dark.pause();
    }
  }
};
S(Bp, "DEVICE_FAILURE");
s(Bp, "kinds", i("DEVICE_FAILURE", E));
s(Bp, "defaultDepth", 10);
var Bz = Bp;
var Bh = class R6 extends E {
  create() {
    this.NAME = ["YES", "NO"];
    this.NAMEX = [110, 190];
    this.NAMEY = [180, 180];
    this.XMAX = 1;
    this.CURX = -1;
    this.IDEALX = 150;
    this.IDEALY = 180;
    this.HEARTX = 150;
    this.HEARTY = 180;
    this.DRAWHEART = 1;
    this.ONEBUFFER = 1;
    this.FINISH = 0;
    this.fadebuffer = 10;
    C.choice = -1;
    this.choice_y_offset = 0;
    this.yoff = null;
  }
  step() {
    if (this.fadebuffer < 0 && this.FINISH === 0) {
      let R = 0;
      if (T()) {
        R = 1;
      }
      if (u()) {
        R = -1;
      }
      if (R !== 0) {
        this.CURX = this.CURX < 0 ? R > 0 ? 1 : 0 : (this.CURX + 2 + R) % 2;
        r("snd_menumove");
      }
      if (H() && this.ONEBUFFER < 0 && this.CURX >= 0) {
        r("snd_select");
        this.FINISH = 1;
        C.choice = this.CURX;
        this.instance_destroy();
        return;
      }
    }
    if (this.CURX >= 0) {
      this.IDEALX = this.NAMEX[this.CURX] - 20;
      this.IDEALY = this.NAMEY[this.CURX];
    }
    if (K(this.HEARTX - this.IDEALX) <= 2) {
      this.HEARTX = this.IDEALX;
    }
    this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3;
    this.HEARTY = this.IDEALY;
    this.fadebuffer--;
    this.ONEBUFFER--;
    if (this.yoff) {
      this.yoff.t++;
      this.choice_y_offset = (1 - Math.min(1, this.yoff.t / this.yoff.max)) * 20;
    }
  }
  draw(R) {
    let w = (10 - this.fadebuffer) / 10;
    if (w > 1) {
      w = 1;
    }
    if (w < 0) {
      w = 0;
    }
    if (this.DRAWHEART === 1) {
      R.draw_sprite_ext("spr_heart", 0, this.HEARTX, this.HEARTY, 1, 1, 0, m.white, w * 0.6);
    }
    R.draw_set_font("fnt_main");
    R.draw_set_alpha(w);
    for (let Bt = 0; Bt <= this.XMAX; Bt++) {
      R.draw_text(this.NAMEX[Bt], this.NAMEY[Bt] + this.choice_y_offset, this.NAME[Bt], this.CURX === Bt ? m.yellow : m.white);
    }
    R.draw_set_alpha(1);
  }
};
S(Bh, "DEVICE_CHOICE");
s(Bh, "kinds", i("DEVICE_CHOICE", E));
s(Bh, "defaultDepth", 0);
var Bx = Bh;
export { k as a, BB as b, Bw as c, Bz as d, Bx as e };
