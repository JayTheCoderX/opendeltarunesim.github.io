import { c as s } from "./c-O567UJ4Y.js";
import { G as I, N as n, O as l, s as d } from "./c-QFDZPUX2.js";
import { g as c, i as W } from "./c-3ELH3LBH.js";
import { b as Q, d as e, f as q, n as a0, p as a1 } from "./c-MYK6C3LF.js";
import { J as a2, Q as a3, R as a4, g as a5 } from "./c-ZQQWH6UG.js";
import { A as a6, B as a7, C as a8, Ib as a9, Ra as aa, h as aK, na as aZ, o as au, pb as ah, qb as aJ, r as aR, xb as aY, z as aV } from "./c-PBMEVLU6.js";
import { a as aw, e as ao, g as af, l as ak } from "./c-XSSGDLV7.js";
ak();
function aO(aB) {
  a5.monstername[aB] = "JEVIL";
  a5.monstermaxhp[aB] = 3500;
  a5.monsterhp[aB] = 3500;
  a5.monsterat[aB] = 10;
  a5.monsterdf[aB] = 5;
  a5.monsterexp[aB] = 0;
  a5.monstergold[aB] = 0;
  a5.sparepoint[aB] = 0;
  a5.mercymod[aB] = 0;
  a5.mercymax[aB] = 999;
  a5.canact[aB][0] = 1;
  a5.actname[aB][0] = "Check";
  a5.canact[aB][1] = 1;
  a5.actactor[aB][1] = 1;
  a5.actname[aB][1] = "Pirouette";
  a5.actdesc[aB][1] = "Random#Chaos";
  a5.actcost[aB][1] = 50;
  a5.canact[aB][2] = 1;
  a5.actactor[aB][2] = 4;
  a5.actname[aB][2] = "Hypnosis";
  a5.actdesc[aB][2] = "Induce#TIRED";
  a5.actcost[aB][2] = 125;
}
aw(aO, "setupJevilStats");
var ai = class as extends ah {
  create() {
    Object.assign(this, {
      siner: 0,
      ji: 0,
      maxchain: 6,
      maxdist: 0,
      size: 2,
      floatsiner: 0,
      floatsinerspeed: 1,
      sndcon: 0,
      condition: 0,
      timer: 0,
      spintimer: 0,
      s_xscale: 2,
      s_yscale: 2,
      s_sprite: "spr_joker_teleport",
      s_y: 0,
      s_vspeed: 0,
      s_alpha: 1,
      image_speed: 0.334,
      dancelv: 0,
      dancesiner: 0,
      fade: 0
    });
    this.offx = this.x + 20;
    this.offy = this.y + 18;
    this.fly = 0;
    this.flyx = 0;
    this.shadowx = [0, 0, 0, 0, 0, 0, 0];
    this.shadowy = [0, 0, 0, 0, 0, 0, 0];
    this.sfactor = [1, 1, 1, 1, 1, 1, 1];
    this.dalpha = [0, 0, 0, 0, 0, 0, 0];
  }
  draw(aB) {
    this.floatsiner += this.floatsinerspeed;
    let aX = a7(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    let aT = 0;
    if (this.dancelv >= 1) {
      aT = a8(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    }
    if (this.dancelv === 4) {
      aT = 0;
      aX = 0;
    }
    let ar = this.x + 20;
    let aM = this.y + 18;
    this.offx = ar;
    this.offy = aM;
    this.fly = aX;
    this.flyx = aT;
    if (this.condition === 0) {
      let av = this.fade === 0 ? 1 : a6(a7(this.floatsiner / 13));
      if (this.dancelv === 0) {
        aB.draw_sprite_ext("spr_joker_main", 0, ar + aT, aM + aX, 2, 2, 0, aK.white, av);
      }
      if (this.dancelv === 1) {
        aB.draw_sprite_ext("spr_joker_dance", this.floatsiner / 3, ar + aT, aM + aX, 2, 2, 0, aK.white, 1);
      }
      if (this.dancelv === 2) {
        aB.draw_sprite_ext("spr_joker_tired", 0, ar + aT, aM + aX, 2, 2, 0, aK.white, 1);
      }
      if (this.dancelv === 3) {
        this.dancesiner++;
        for (let aL = 0; aL < 7; aL++) {
          if (aL >= 1) {
            this.shadowx[aL] += a7(aL + this.floatsiner / 5) * 8 * this.sfactor[aL];
            this.shadowy[aL] += a8(aL + this.floatsiner / 5) * 4 * this.sfactor[aL];
          }
          this.dalpha[aL] = a7(aL + this.dancesiner / 9);
          if (this.dalpha[aL] < 0 && aL >= 1) {
            this.shadowx[aL] = 60 - au(120);
            this.shadowy[aL] = 60 - au(120);
            this.sfactor[aL] = 1.5 - au(3);
          }
          aB.draw_sprite_ext("spr_joker_dance", this.dancesiner / 2 + aL / 4, this.x + this.shadowx[aL], this.y + this.shadowy[aL], 2, 2, 0, this.image_blend, Math.max(0, this.dalpha[aL]));
        }
      }
      if (this.dancelv === 4) {
        aB.draw_sprite_ext("spr_joker_teleport", 1, ar + aT, aM + aX, 2, 2, 0, aK.white, 1);
      }
    }
    if (this.condition === 1) {
      if (this.maxdist >= 150) {
        this.maxdist = 150;
      }
      let aI = 0.8 + this.maxdist / 50;
      if (aI < 0.8) {
        aI = 0.8;
      }
      if (aI > 2) {
        aI = 2;
      }
      this.siner += aI;
      let am = a7(this.siner / 4) * this.maxdist;
      let aH = -a6(a7(this.siner / 4)) * (this.maxdist * 0.7);
      let aP = 0;
      if (am > this.maxdist / 2 && this.maxdist > 15) {
        aP = 1;
      }
      if (am < -this.maxdist / 2 && this.maxdist > 15) {
        aP = 2;
      }
      if (this.maxdist < 4) {
        aP = 3;
      }
      for (let ap = 0; ap < this.maxchain - 1; ap++) {
        aB.draw_sprite_ext("spr_jokerchain", aP, ar + am * (ap / this.maxchain) - 2, aM + 6 + (aH - 32) * (ap / this.maxchain) + aX, 2, 2, 0, aK.white, 1);
      }
      aB.draw_sprite_ext("spr_jokerbody", 0, ar - 42, aM + aX - 2, 2, 2, 0, aK.white, 1);
      aB.draw_sprite_ext("spr_jokerhead", aP, ar + am - 2, aM + aH + aX - 14, 2, 2, 0, aK.white, 1);
      this.maxdist -= 1;
      if (this.maxdist <= 0) {
        this.maxdist = 0;
        this.condition = 0;
      }
    }
    if (this.condition === 2) {
      aY.with("obj_heroparent", ab => {
        ab.image_alpha -= 0.25;
      });
      if (this.sndcon === 0) {
        aa("snd_spearappear");
        this.sndcon = 1;
      }
      aB.draw_sprite_ext("spr_joker_main", 0, ar, aM + aX, this.size, 2, 0, aK.white, 1);
      this.size -= 0.5;
      if (this.size <= 0) {
        aY.with("obj_heroparent", ab => {
          ab.image_alpha = 0;
        });
        this.sndcon = 0;
        this.size = 2;
        this.condition = 4;
      }
    }
    if (this.condition === 3) {
      aY.with("obj_heroparent", ab => {
        ab.image_alpha += 0.25;
      });
      if (this.sndcon === 0) {
        aa("snd_spearappear");
        this.sndcon = 1;
      }
      aB.draw_sprite_ext("spr_joker_main", 0, ar, aM + aX, this.size, 2, 0, aK.white, 1);
      this.size += 0.5;
      if (this.size >= 2) {
        aY.with("obj_heroparent", ab => {
          ab.image_alpha = 1;
        });
        this.size = 2;
        this.condition = 0;
        this.sndcon = 0;
      }
    }
    if (this.condition === 4 && a5.turntimer <= 10) {
      this.timer = 0;
      this.condition = 3;
      this.size = 0;
    }
    if (this.condition === 5) {
      this.timer++;
      if (this.timer === 1) {
        this.spintimer = 0;
        this.s_xscale = 2;
        this.s_yscale = 2;
        this.s_sprite = "spr_joker_teleport";
        this.s_y = 0;
        this.s_vspeed = 0;
        this.s_alpha = 1;
        aa("snd_joker_metamorphosis");
      }
      if (this.timer >= 1 && this.timer <= 3) {
        this.s_xscale *= 1.3;
        this.s_yscale *= 0.7;
      }
      if (this.timer >= 5 && this.timer <= 15) {
        this.s_xscale *= 0.7;
        this.s_yscale *= 1.3;
      }
      if (this.timer >= 15 && this.timer <= 30) {
        this.spintimer++;
        this.s_xscale = a7(this.spintimer / 3) * 2;
        this.s_sprite = "spr_joker_scythebody";
        this.s_yscale *= 0.7;
        if (this.s_xscale >= 2) {
          this.s_xscale = 2;
        }
        if (this.s_yscale <= 2) {
          this.s_yscale = 2;
        }
      }
      if (this.timer >= 30 && this.timer < 41) {
        this.spintimer++;
        this.s_xscale = a7(this.spintimer / 3) * 2;
        this.s_vspeed -= 3;
        this.s_y += this.s_vspeed;
        this.s_alpha -= 0.1;
      }
      if (this.timer >= 41 && aY.exists("obj_battlecontroller") && a5.turntimer > 10) {
        this.timer = 0;
        this.condition = 4;
      }
      aB.draw_sprite_ext(this.s_sprite, 0, ar, aM + this.s_y, this.s_xscale, this.s_yscale, 0, this.image_blend, Math.max(0, this.s_alpha));
    }
    if ((this.condition === 0 || this.condition === 1) && this.dancelv <= 2) {
      aB.draw_set_color(aK.black);
      let ab = this.sprite_width / 2;
      aB.draw_rectangle(this.x + ab - 20 - aX + aT, this.y + 80 - aX / 2, this.x + ab + 30 + aX + aT, this.y + 85 + aX / 2, false);
    }
  }
};
aw(ai, "obj_joker_body");
ao(ai, "kinds", aJ("obj_joker_body", ah));
ao(ai, "defaultDepth", 15);
ao(ai, "defaultSprite", "spr_joker_main");
var aG = ai;
var ax = class aj extends d {
  create() {
    Object.assign(this, {
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurtamt: 0,
      hurttimer: 0,
      hurtshake: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: -9999,
      maxmercy: 9999,
      tired: 0,
      pirouette: 0,
      pirouettecounter: 0,
      pfactor: 1,
      hypnosis: 0,
      hypnosiscounter: 0,
      chaosdance: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      image_speed: 0,
      image_xscale: 2,
      image_yscale: 2,
      laughnoise: 0,
      beepnoise: 0,
      beepbuffer: 0,
      burstnoise: 0,
      jturn: 0,
      jattack: 0,
      rtimer: 0
    });
    this.reminvc = a5.invc;
    this.remmaxhp = [0, 1, 2, 3].map(aB => a5.maxhp[aB]);
    this.body = a9(this.x, this.y, aG);
    this.visible = false;
    a5.tempflag[4] = 1;
  }
  userEvent(aB) {
    if (aB === 12) {
      a5.monsterx[this.myself] = this.x + 20;
      a5.monstery[this.myself] = this.y + 20;
      return;
    }
    if (aB === 5) {
      this.startAttack();
      return;
    }
    if (aB === 10) {
      this.defeatEvent();
      return;
    }
  }
  defeatEvent() {
    for (let aT = 0; aT < 4; aT++) {
      a5.maxhp[aT] = this.remmaxhp[aT];
      if (a5.hp[aT] >= a5.maxhp[aT]) {
        a5.hp[aT] = a5.maxhp[aT];
      }
    }
    a5.invc = this.reminvc;
    let aB = this.body;
    aB.image_xscale = 2;
    aB.image_yscale = 2;
    aB.sprite_index = "spr_joker_teleport";
    aB.image_index = 1;
    aB.image_speed = 0;
    if (a5.monsterhp[this.myself] > 0) {
      aa("snd_spare");
      for (let ar = 0; ar < 12; ar++) {
        let aM = a9(aB.x + 20 + au(80), aB.y + 18 + au(80), Q);
        aM.sprite_index = "spr_sparestar_anim";
        aM.image_xscale = 2;
        aM.image_yscale = 2;
        aM.image_speed = 0.25;
        aM.hspeed = -3;
        aM.gravity = 0.5;
        aM.gravity_direction = 0;
        aM.fadespeed = 0.05;
        aM.depth = -20;
      }
      a5.jevilResult = "pacified";
    } else {
      a5.jevilResult = "defeated";
    }
    let aX = aY.first("obj_battlecontroller");
    if (aX) {
      aX.skipvictory = 1;
    }
    aB.dancelv = 4;
    aB.condition = 0;
    aY.with("obj_jokerbg_triangle_real", av => {
      av.on = 0;
    });
    this.scr_monsterdefeat();
    a5.invc = this.reminvc;
    this.instance_destroy();
  }
  step() {
    let aB = this.myself;
    if (a5.monster[aB] === 1) {
      a5.flag[51 + aB] = 4;
      if (a5.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && a5.mnfight === 1) {
        this.rtimer = 0;
        if (aZ() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          aY.with("obj_writer", aX => aX.instance_destroy());
          aY.with("obj_battleblcon", aX => aX.instance_destroy());
          a5.mnfight = 2;
        }
        if (a5.mnfight === 2) {
          if (!aY.exists("obj_moveheart")) {
            a0();
          }
          if (!aY.exists("obj_growtangle")) {
            a9(320, 170, q);
          }
        }
      }
      if (a5.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          a5.turntimer = 240;
          this.userEvent(5);
          this.attacked = 1;
          a5.typer = 6;
          a5.fc = 0;
          let aX = aR(0, 1, 2, 3, 4);
          a5.battlemsg[0] = ["* The world is spinning, spinning.", "* The air crackles with freedom.", "* JEVIL is laughing incomprehensibly.", "* It feels like a whirlwind.", "* Smells like chaos."][aX];
          if (this.body.dancelv === 2) {
            a5.battlemsg[0] = "* JEVIL seems exhausted...?";
          }
          if (this.jturn === 16) {
            a5.battlemsg[0] = "* CHAOS BOMB was prepared FOR YOU.";
          }
          if (this.jturn === 18) {
            a5.battlemsg[0] = "* Something terrible is coming...!";
          }
          if (this.jturn >= 19) {
            a5.battlemsg[0] = "* JEVIL's pulling out all the stops!";
          }
          if (a5.monsterstatus[aB] === 1) {
            a5.battlemsg[0] = "* JEVIL is truly exhausted!";
          }
        } else {
          a5.turntimer = 120;
        }
      }
      if (a5.mnfight === 2 && a5.turntimer <= 1 && (this.battlecancel === 1 && (a5.mercymod[aB] = 999), this.battlecancel === 2)) {
        let aT = aY.first("obj_battlecontroller");
        if (aT) {
          aT.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (a5.myfight === 3) {
      this.actStep();
    }
    this.beepbuffer--;
    if (this.beepnoise === 1 && this.beepbuffer < 0) {
      aa("snd_bombfall", {
        volume: 0.6
      });
      this.beepnoise = 0;
      this.beepbuffer = 5;
    }
    if (this.burstnoise === 1) {
      aa("snd_bomb");
      this.burstnoise = 0;
    }
    if (this.state === 3) {
      if (this.hurttimer > 0) {
        this.hurttimer = 0;
        let ar = this.body;
        ar.condition = 1;
        ar.siner = 0;
        ar.maxdist += 20 + this.hurtamt / 5;
        if (ar.maxdist < 30) {
          ar.maxdist = 30;
        }
        let aM = a5.monsterhp[aB] / a5.monstermaxhp[aB];
        ar.floatsinerspeed = 1 + (1 - aM);
        if (aM <= 0.8 && ar.dancelv === 0) {
          ar.dancelv = 1;
        }
        if (aM <= 0.4 && this.jturn < 17) {
          ar.dancelv = 3;
        }
        if (aM <= 0.2 && this.jturn === 17) {
          ar.dancelv = 2;
        }
        if (aM <= 0) {
          this.userEvent(10);
          a5.flag[241] = 6;
          return;
        }
        aY.with("obj_jokerbg_triangle_real", av => {
          if (aM > 0) {
            av.rotspeed = 1 + (1.5 - aM * 1.5);
          }
        });
        aa(aR("snd_joker_laugh0", "snd_joker_ha1", "snd_joker_ha0"));
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
  }
  talk() {
    let aB = this.myself;
    if (this.pirouette !== 2) {
      a5.invc = this.reminvc;
    }
    let aX = a5.monsterhp[aB] / a5.monstermaxhp[aB];
    let aT = this.body;
    if (aX <= 0.8 && this.jturn === 4) {
      this.jturn = 5;
      aT.dancelv = 1;
    }
    if (aX <= 0.6 && this.jturn === 9) {
      this.jturn = 10;
    }
    if (aX <= 0.4 && this.jturn === 14) {
      this.jturn = 15;
      aT.dancelv = 3;
    }
    if (aX <= 0.15 && this.jturn < 17) {
      this.jturn = 17;
      aT.dancelv = 2;
    }
    if (this.jturn >= 18) {
      aT.dancelv = 3;
    }
    if (this.hypnosiscounter >= 2 && this.jturn === 4 && this.turns >= 5 - this.hypnosiscounter) {
      this.jturn = 5;
      aT.dancelv = 1;
    }
    if (this.hypnosiscounter >= 4 && this.jturn === 9 && this.turns >= 11 - this.hypnosiscounter) {
      this.jturn = 10;
      aT.dancelv = 1;
    }
    if (this.hypnosiscounter >= 6 && this.jturn === 14 && this.turns >= 17 - this.hypnosiscounter) {
      this.jturn = 15;
      aT.dancelv = 1;
    }
    if (this.jturn >= 19 && this.turns >= 29 - this.hypnosiscounter) {
      this.tired = 1;
      a5.monsterstatus[aB] = 1;
      aT.dancelv = 2;
    }
    if (!aY.exists("obj_darkener")) {
      a9(0, 0, a1);
    }
    a5.typer = 50;
    a5.msg = new Array(100).fill(" ");
    let ar = this.jturn;
    let aM = {
      0: "CHAOS, CHAOS,&&CATCH ME&IF YOU CAN!",
      1: "SHALL WE&PLAY THE&RING-AROUND?",
      2: "MY HEARTS GO&OUT TO ALL&YOU SINNERS!",
      3: "HA, HA, LET'S&MAKE THE&DEVILSKNIFE.",
      5: "PIIP PIIP,&LET'S RIDE THE&CAROUSEL GAME.",
      6: "HEE HEE,&HAVING FUN!?&JOIN THE&CLUB!",
      7: "HEARTS,&DIAMONDS,&I CAN DO&ANYTHING!",
      8: "WHO KEEPS&SPINNING THE&WORLD&AROUND?",
      10: "YOU KIDS ARE&REALLY&KEEPING UP!",
      11: "NU-HA!!&I NEVER HAD&SUCH FUN,&FUN!!",
      12: "A BEAUTY IS&JOYING IN&MY HEART!",
      13: "EVEN&DEVILSKNIFE&IS SMILING!",
      15: "IT'S SO&EXCITING...&I CAN'T&TAKE IT!!!",
      16: "THIS IS IT,&BOISENGIRLS!&SEE YA!",
      17: "ENOUGH!!&YOU KIDS&TIRED ME UP!",
      18: "KIDDING!!&HERE'S MY&FINAL CHAOS!"
    };
    if (aM[ar] !== undefined) {
      a5.msg[0] = aM[ar];
    }
    if (ar === 0) {
      aa("snd_joker_chaos");
    }
    if (ar === 7) {
      aa("snd_joker_anything");
    }
    if (ar === 3 || ar === 13 || ar === 18) {
      aT.condition = 5;
    }
    if (ar === 17) {
      aT.dancelv = 2;
    }
    if (ar === 4 || ar === 9 || ar === 14 || ar === 19) {
      let av = aR(0, 1, 2, 3);
      if (av === 0) {
        a5.msg[0] = aR("A CHAOS,&CHAOS!", "PLEASE, IT'S&JUST A&SIMPLE&CHAOS.");
        aa("snd_joker_chaos");
      }
      if (av === 1) {
        a5.msg[0] = "I CAN DO&ANYTHING!!";
        aa("snd_joker_anything");
      }
      if (av === 2) {
        a5.msg[0] = aR("THIS BODY&CANNOT BE&KILLED!", "THESE&CURTAINS&ARE REALLY&ON FIRE!");
      }
      if (av === 3) {
        a5.msg[0] = "IT'S ALL&TOO MUCH&FUN!!!";
      }
    }
    W(this.x - 160, this.y - 20, 3);
    this.talked = 1;
    this.talktimer = 0;
    if (this.jturn >= 19) {
      if (a5.monsterdf[aB] > -10) {
        a5.monsterdf[aB] -= 3;
      }
      if (a5.monsterat[aB] < 11) {
        a5.monsterat[aB] += 0.5;
      }
      this.jattack = aR(0, 4, 7, 8, 10, 11, 12, 13, 13, 13);
    }
    if (this.jturn >= 15 && this.jturn <= 18) {
      this.jattack = this.jturn - 3;
      this.jturn++;
    }
    if (this.jturn === 14) {
      this.jattack = aR(8, 9, 10, 11);
    }
    if (this.jturn >= 10 && this.jturn <= 13) {
      this.jattack = this.jturn - 2;
      this.jturn++;
    }
    if (this.jturn === 9) {
      this.jattack = aR(4, 5, 6, 7);
    }
    if (this.jturn >= 5 && this.jturn <= 8) {
      this.jattack = this.jturn - 1;
      this.jturn++;
    }
    if (this.jturn === 4) {
      this.jattack = aR(0, 1, 2, 3);
    }
    if (this.jturn <= 3) {
      this.jattack = this.jturn;
      this.jturn++;
    }
    if ([2, 5, 9, 13, 15].includes(this.jattack)) {
      a4(this);
    } else {
      a3(this);
    }
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let aB = this.myself;
    this.turns++;
    this.chaosdance++;
    if (this.chaosdance >= 9) {
      this.chaosdance = 0;
    }
    let aX = a5.monsterat[aB];
    a5.monsterat[aB] *= this.pfactor;
    let aT = a5.monsterat[aB];
    let ar = aL => {
      let aI = a9(this.x, this.y, s);
      Object.assign(aI, aL);
      return aI;
    };
    let aM = this.body;
    let av = this.jattack;
    if (av === 0) {
      ar({
        type: 70,
        target: this.mytarget,
        grazepoints: 2,
        damage: aT * 5
      });
      aM.condition = 2;
    }
    if (av === 1) {
      ar({
        grazepoints: 3,
        type: 65,
        target: this.mytarget,
        damage: aT * 5
      });
    }
    if (av === 2) {
      ar({
        type: 49,
        target: 3,
        damage: aT * 4,
        grazepoints: 3
      });
      aM.condition = 2;
    }
    if (av === 3) {
      if (aM.condition < 4) {
        aM.condition = 5;
      }
      ar({
        grazepoints: 3,
        type: 75,
        target: this.mytarget,
        damage: aT * 6
      });
    }
    if (av === 4) {
      aa("snd_joker_anything");
      ar({
        type: 62,
        target: this.mytarget,
        inv: 20,
        damage: aT * 5,
        grazepoints: 2
      });
    }
    if (av === 5) {
      ar({
        grazepoints: 3,
        type: 50,
        target: 3,
        damage: aT * 4
      });
      a5.turntimer = 300;
      aM.condition = 2;
    }
    if (av === 6) {
      ar({
        type: 73,
        target: this.mytarget,
        damage: aT * 5
      });
    }
    if (av === 7) {
      ar({
        type: 68,
        target: this.mytarget,
        grazepoints: 2,
        damage: aT * 5
      });
    }
    if (av === 8) {
      aa("snd_joker_anything");
      ar({
        inv: 20,
        type: 61,
        target: this.mytarget,
        grazepoints: 3,
        damage: aT * 5
      });
      a5.turntimer = 240;
    }
    if (av === 9) {
      ar({
        type: 48,
        target: 3,
        damage: aT * 4,
        grazepoints: 4
      });
      a5.turntimer = 270;
      aM.condition = 2;
    }
    if (av === 10) {
      ar({
        type: 72,
        target: this.mytarget,
        damage: aT * 5
      });
    }
    if (av === 11) {
      if (aM.condition < 4) {
        aM.condition = 5;
      }
      ar({
        type: 76,
        target: this.mytarget,
        grazepoints: 3,
        damage: aT * 6
      });
    }
    if (av === 12) {
      ar({
        type: 71,
        target: this.mytarget,
        damage: aT * 5,
        grazepoints: 2
      });
      aM.condition = 2;
    }
    if (av === 13) {
      ar({
        type: 46,
        target: 3,
        damage: aT * 4,
        grazepoints: 4
      });
      a5.turntimer = 330;
      aM.condition = 2;
    }
    if (av === 14) {
      ar({
        type: 74,
        target: this.mytarget,
        damage: aT * 4
      });
    }
    if (av === 15) {
      ar({
        type: 77,
        target: this.mytarget,
        damage: aT * 4
      });
      a5.turntimer = 1500;
      if (aM.condition < 4) {
        aM.condition = 5;
      }
    }
    aY.with("obj_dbulletcontroller", aL => {
      aL.joker = 1;
    });
    this.pfactor = 1;
    a5.monsterat[aB] = aX;
    this.attacked = 1;
  }
  actStep() {
    let aB = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      a5.msg = new Array(100).fill(" ");
      a5.msg[0] = "* JEVIL &* There is no strategy to defeat the enemy. Good luck!/%";
      c();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 5;
      a5.msg = new Array(100).fill(" ");
      a5.msg[0] = "* Kris spun around^1!&* JEVIL got slightly more TIRED^1, and...!/%";
      aa("snd_pirouette");
      let aX = aY.first("obj_herokris");
      if (aX) {
        aX.visible = false;
        this.dancekris = e(aX.x, aX.y, "spr_krisb_pirouette");
        this.dancekris.image_speed = 0.3334;
        this.dancekris.depth = aX.depth;
        let aT = a9(this.dancekris.x + 28, this.dancekris.y + 40, Q);
        aT.sprite_index = "spr_pirouette_fx";
        aT.image_xscale = 2;
        aT.image_yscale = 2;
        aT.fadespeed = 0.05;
      }
      c();
    }
    if (this.actcon === 5 && !aY.exists("obj_writer")) {
      if (this.dancekris) {
        this.dancekris.instance_destroy();
      }
      let ar = aY.first("obj_herokris");
      if (ar) {
        ar.visible = true;
      }
      a5.msg = new Array(100).fill(" ");
      a5.msg[0] = "* Something happened!/%";
      let aM = this.chaosdance;
      if (aM === 0) {
        a5.msg[0] = "* What^1!&* It was just foley!/%";
        aa(aR("snd_badexplosion", "snd_carhonk", "snd_toilet"));
      }
      if (aM === 1) {
        a5.msg[0] = "* JEVIL felt at ease^1!&* JEVIL's defense dropped!/%";
        if (a5.monsterdf[aB] >= -16) {
          a5.monsterdf[aB] -= 4;
        }
        aa("snd_weirdeffect");
      }
      if (aM === 2) {
        a5.msg[0] = "* Awkward^1! Upcoming attack will hurt rapidly!/%";
        aa("snd_awkward");
        a5.invc = 0.4;
      }
      if (aM === 3) {
        a5.msg[0] = "* Tranquil^1!&* The dance defended the party!/%";
        this.pfactor = 0.7;
        aa("snd_shadowpendant");
      }
      if (aM === 4) {
        let av = e(-40, 60, "spr_uselessbird");
        av.hspeed = 12;
        av.image_speed = 0.334;
        av.depth = -30;
        aa("snd_birdtweet");
        a5.msg[0] = "* What^1!&* It's nothing but a useless bird!/%";
      }
      if (aM === 5) {
        a5.msg[0] = "* It felt comforting!/%";
        let aL = aR(0, 1, 2);
        n(aL, aV(au(31) + 25));
      }
      if (aM === 6) {
        a5.msg[0] = "* Everyone's HP got jumbled up!/%";
        let aI = aR(2, 3);
        let am = aI === 2 ? 3 : 2;
        let aH = a5.hp.slice();
        let aP = a5.maxhp.slice();
        a5.maxhp[1] = aP[aI];
        a5.maxhp[aI] = aP[am];
        a5.maxhp[am] = aP[1];
        a5.hp[1] = aH[aI];
        a5.hp[aI] = aH[am];
        a5.hp[am] = aH[1];
        let ap = aY.first("obj_battlecontroller");
        if (ap) {
          let ab = ap.hpcolor.slice();
          ap.hpcolor[0] = ab[aI - 1];
          ap.hpcolor[aI - 1] = ab[am - 1];
          ap.hpcolor[am - 1] = ab[0];
        }
        for (let an = 1; an <= 3; an++) {
          if (a5.hp[an] < 1) {
            a5.hp[1] += aV(a5.hp[an] / 3);
            a5.hp[2] += aV(a5.hp[an] / 3);
            a5.hp[3] += aV(a5.hp[an] / 3);
            a5.hp[an] = 1;
          }
        }
        for (let aN = 1; aN <= 3; aN++) {
          if (a5.hp[aN] < 1) {
            a5.hp[aN] = 1;
          }
        }
        a2(0);
        a2(1);
        a2(2);
        aa("snd_weirdeffect");
      }
      if (aM === 7) {
        aa("snd_boost");
        a5.msg[0] = "* JEVIL's upcoming move got powered up!/%";
        this.pfactor = 1.25;
      }
      if (aM === 8) {
        aa("snd_applause");
        a5.msg[0] = "* A perfect 10!/%";
        l(36 + aV(au(15)));
      }
      c();
      this.hypnosiscounter += 0.5;
      if (this.hypnosiscounter >= 9) {
        a5.monsterstatus[aB] = 1;
      }
      this.pirouette = aM;
      this.pirouettecounter++;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (a5.monsterat[aB] > 10) {
        a5.monsterat[aB] -= 0.5;
      }
      aa("snd_hypnosis");
      this.actcon = 1;
      let al = aR("* Ralsei chanted something^1!", "* Susie spun something around^1!", "* Kris gazed strangely^1!");
      let ad = "&* JEVIL became more TIRED!";
      if (this.hypnosiscounter >= 9) {
        ad = "&* JEVIL's looking exhausted!";
        a5.monsterstatus[aB] = 1;
      }
      a5.msg = new Array(100).fill(" ");
      a5.msg[0] = al + "&* JEVIL's next attack weakened!" + ad + "/%";
      this.pfactor = 0.7;
      this.hypnosis = 1;
      this.hypnosiscounter += 1;
      c();
    }
    if (this.actcon === 1 && !aY.exists("obj_writer")) {
      this.actcon = 0;
      I();
    }
  }
  destroy() {
    if (this.body && !this.body.destroyed) {
      this.body.alarm[0] = 60;
      this.body.alarmEvent = function (aB) {
        if (aB === 0) {
          this.instance_destroy();
        }
      };
    }
  }
};
aw(ax, "obj_joker");
ao(ax, "kinds", aJ("obj_joker", d));
ao(ax, "defaultDepth", 10);
ao(ax, "defaultSprite", "spr_joker_main");
var aU = ax;
af(aU, "G.mnfight = 2;");
export { aO as a, aG as b, aU as c };
