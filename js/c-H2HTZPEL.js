import { b as P0, c as P1 } from "./c-O567UJ4Y.js";
import { G as P2, s as P3 } from "./c-QFDZPUX2.js";
import { a as P4, c as P5, f as P6, h as P7, i as P8 } from "./c-DTW63MWW.js";
import { f as P9, g as PP, i as Pj } from "./c-3ELH3LBH.js";
import { a as Pk, f as PM, n as Pf, p as Px } from "./c-MYK6C3LF.js";
import { H as PA, M as PO, Q as Pb, g as Pa, n as PK } from "./c-ZQQWH6UG.js";
import { B, C as Po, Ib as PD, Ra as Pm, Ta as PV, na as Pu, o as PX, pb as Pw, qb as PG, r as Pq, s as PW, t as PZ, xb as PH } from "./c-PBMEVLU6.js";
import { a as Pe, c as PS, e as PI, g as PF, l as PB } from "./c-XSSGDLV7.js";
var Pn = {};
PS(Pn, {
  FIGHTS: () => j6,
  SOUNDS: () => PL,
  SPRITES: () => Ps,
  obj_defeatanim: () => PC,
  obj_diamondenemy: () => Pc,
  obj_dknight_slasher: () => Pz,
  obj_rudinnranger: () => Pv,
  obj_spareanim: () => Pl,
  setupRangerStats: () => Pi,
  setupStats: () => PY
});
PB();
var Ps = ["spr_diamondm_idle", "spr_diamondm_hurt", "spr_diamondm_spared", "spr_daimond_knight_idle", "spr_diamond_knight_hurt", "spr_diamond_knight_spared", "spr_diamond_knight_slash", "spr_diamondswordbullet", "spr_diamondbullet", "spr_diamondbullet_form", "spr_diamondbullet_vert", "spr_defeatsweat", "spr_sparestar_anim", "spr_battleblcon_long"];
var PL = ["snd_defeatrun", "snd_spare"];
var Pr = Pe(() => {
  Pa.msg = new Array(100).fill(" ");
}, "newmsg");
var Py = Pe((j9, jP) => {
  Pa.msg[j9] = "\\TX \\F0 \\E" + jP + " \\FS \\TS %";
}, "scr_susface");
var Pt = Pe((j9, jP) => {
  Pa.msg[j9] = "\\TX \\F0 \\E" + jP + " \\FR \\TR %";
}, "scr_ralface");
function PN() {
  let j9 = [];
  let jP = "";
  for (let jj = 0; jj < 100; jj++) {
    let jk = Pa.msg[jj];
    if (jk === undefined || jk === " " || jk === "") {
      break;
    }
    if (/^\\TX .*%$/.test(jk)) {
      let jM = /\\E([0-9A-Fa-f])/.exec(jk);
      jP = jM ? "\\E" + jM[1] : "";
      continue;
    }
    j9.push(jP + jk);
    jP = "";
  }
  Pr();
  j9.forEach((jf, jx) => {
    Pa.msg[jx] = jf;
  });
}
Pe(PN, "packFaces");
function PY(j9) {
  Pa.monstername[j9] = "Rudinn";
  Pa.monstermaxhp[j9] = 120;
  Pa.monsterhp[j9] = 120;
  Pa.monsterat[j9] = 5;
  Pa.monsterdf[j9] = 0;
  Pa.monsterexp[j9] = 0;
  Pa.monstergold[j9] = 30;
  Pa.sparepoint[j9] = 10;
  Pa.mercymod[j9] = 0;
  Pa.mercymax[j9] = 100;
  Pa.canact[j9][0] = 1;
  Pa.actname[j9][0] = "Check";
  Pa.canact[j9][1] = 1;
  Pa.actname[j9][1] = "Convince";
  Pa.canact[j9][2] = 1;
  Pa.actname[j9][2] = "Lecture";
  if (PK(2) && Pa.plot < 150) {
    Pa.canact[j9][3] = 1;
    Pa.actname[j9][3] = "Warning";
    Pa.actactor[j9][3] = 3;
  }
}
Pe(PY, "setupStats");
function Pi(j9) {
  Pa.monstername[j9] = "Rudinn Ranger";
  Pa.monstermaxhp[j9] = 170;
  Pa.monsterhp[j9] = 170;
  Pa.monsterat[j9] = 8;
  Pa.monsterdf[j9] = 0;
  Pa.monsterexp[j9] = 0;
  Pa.monstergold[j9] = 45;
  Pa.sparepoint[j9] = 25;
  Pa.mercymod[j9] = 0;
  Pa.mercymax[j9] = 100;
  Pa.canact[j9][0] = 1;
  Pa.actname[j9][0] = "Check";
  Pa.canact[j9][1] = 1;
  Pa.actname[j9][1] = "Convince";
  Pa.canact[j9][2] = 1;
  Pa.actname[j9][2] = "Compliment";
  Pa.actactor[j9][2] = 2;
}
Pe(Pi, "setupRangerStats");
var PQ = class jA extends Pw {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    PV("snd_spare");
    Pm("snd_spare");
  }
  draw(j9) {
    let jP = this.sprite_index;
    let jj = this.image_index;
    let jk = this.image_xscale;
    let jM = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      j9.draw_sprite_white(jP, jj, this.x + this.afterimage * 4, this.y, jk, jM, 0, 0.7 - this.afterimage / 25);
      j9.draw_sprite_white(jP, jj, this.x + this.afterimage * 8, this.y, jk, jM, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        j9.draw_sprite_ext(jP, jj, this.x, this.y, jk, jM, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let jf = this.t / 5;
      if (jf > 1) {
        jf = 1;
      }
      j9.draw_sprite_white(jP, jj, this.x, this.y, jk, jM, 0, jf - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let jx = 0; jx < 2; jx += 1) {
        let jO = PD(this.x + PX(this.sprite_width), this.y + PX(this.sprite_height), Pk);
        jO.image_xscale = 2;
        jO.image_yscale = 2;
        jO.sprite_index = "spr_sparestar_anim";
        jO.image_alpha = 2;
        jO.image_speed = 0.25;
        jO.hspeed = -3;
        jO.gravity = 0.5;
        jO.gravity_direction = 0;
        this.star[this.starcount] = jO;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let jb = 0; jb < this.starcount; jb += 1) {
        let ja = this.star[jb];
        if (ja && !ja.destroyed) {
          ja.image_angle += 10;
          ja.image_alpha -= 0.1;
          if (ja.image_alpha <= 0) {
            ja.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let jK = 0; jK < this.starcount; jK += 1) {
        let jo = this.star[jK];
        if (jo && !jo.destroyed) {
          jo.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
Pe(PQ, "obj_spareanim");
PI(PQ, "kinds", PG("obj_spareanim", Pw));
PI(PQ, "defaultDepth", 0);
var Pl = PQ;
var Pp = class jD extends Pw {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    Pm("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(j9) {
    if (this.t === 0) {
      this.draw_self(j9);
    }
    let jP = 0;
    if (this.g <= 5) {
      jP = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      jP = 1;
    }
    if (jP === 1) {
      j9.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let jj = 0; jj <= 80; jj += 1) {
        j9.draw_sprite_ext(this.sprite_index, this.image_index, this.x + jj * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + jj / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
Pe(Pp, "obj_defeatanim");
PI(Pp, "kinds", PG("obj_defeatanim", Pw));
PI(Pp, "defaultDepth", 0);
var PC = Pp;
function PE(j9) {
  let jP = PD(j9.x, j9.y, PC);
  jP.sprite_index = j9.sprite_index;
  jP.sprite_index = j9.hurtsprite;
  jP.image_index = 0;
  jP.image_xscale = j9.image_xscale;
  jP.image_yscale = j9.image_yscale;
  j9.instance_destroy();
}
Pe(PE, "scr_defeatrun");
var Ph = class jm extends P3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
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
      hurttimer: 0,
      hurtshake: 0,
      mywriter: 343249823,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      rtimer: 0,
      shakex: 0
    });
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  setupFn(j9) {}
  defeatedEvent() {}
  talk() {}
  attack() {}
  actStep() {}
  actDone() {}
  onDefeatRun() {}
  get tiredDiv() {
    return 3;
  }
  userEvent(j9) {
    if (j9 === 12) {
      Pa.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Pa.monstery[this.myself] = this.y + this.sprite_height / 2;
      this.setupFn(this.myself);
      return;
    }
    if (j9 === 11) {
      this.defeatedEvent();
      return;
    }
    if (j9 === 10) {
      this.spared();
      return;
    }
    super.userEvent(j9);
  }
  spared() {
    let j9 = PD(this.x, this.y, Pl);
    j9.sprite_index = this.sparedsprite;
    j9.image_index = 0;
    j9.image_xscale = this.image_xscale;
    j9.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  step() {
    let j9 = this.myself;
    if (Pa.monster[j9] === 1) {
      if (Pa.mnfight === 1 && this.talked === 0) {
        Pb(this);
        if (!PH.exists("obj_darkener")) {
          PD(0, 0, Px);
        }
        Pa.typer = 50;
        Pr();
        this.talk();
        Pj(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Pa.mnfight === 1) {
        this.rtimer = 0;
        if (Pu() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          PH.with("obj_writer", jP => jP.instance_destroy());
          Pa.mnfight = 2;
        }
        if (Pa.mnfight === 2) {
          if (!PH.exists("obj_moveheart")) {
            Pf();
          }
          if (!PH.exists("obj_growtangle")) {
            PD(320, 170, PM);
          }
        }
      }
      if (Pa.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.attack();
        } else {
          Pa.turntimer = 120;
        }
      }
      if (Pa.mnfight === 2 && Pa.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Pa.mercymod[j9] = 999;
        }
        if (this.battlecancel === 2) {
          PH.with("obj_battlecontroller", jP => {
            jP.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[4] = 10;
    }
    if (this.con === 3) {
      Pa.typer = 50;
      Pa.mercymod[j9] = 999;
      Pr();
      Pa.msg[0] = "Alright^1,&you convinced&me!!/%";
      Pj(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !PH.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      PH.with("obj_battlecontroller", jP => {
        jP.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      PH.with("obj_battlecontroller", jP => {
        jP.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (Pa.myfight === 3) {
      this.actStep();
      this.actTail();
    }
    if (Pa.myfight === 7) {
      this.hspeed = 15;
    }
  }
  alarmEvent(j9) {
    if (j9 === 4) {
      this.con += 1;
    }
  }
  actTail() {
    if (this.actcon === 1 && !PH.exists("obj_writer")) {
      this.actDone();
      this.actcon = 0;
      P2();
    }
    if (this.actcon === 10 && !PH.exists("obj_writer")) {
      Pa.typer = 50;
      Pr();
      Pa.msg[0] = "You kidding?&I can't quit.&Stopping you&is my job!/%";
      Pj(this.x - 160, this.y, 3);
      this.actcon = 11;
    }
    if (this.actcon === 11 && !PH.exists("obj_writer")) {
      Pa.typer = 45;
      Pa.fc = 2;
      Pa.fe = 8;
      Pr();
      Pa.msg[0] = "* Really^1?&* What do you spend your money on?/%";
      P9();
      this.actcon = 12;
    }
    if (this.actcon === 12 && !PH.exists("obj_writer")) {
      Pa.typer = 50;
      Pr();
      Pa.msg[0] = "I'm a normal&person./";
      Pa.msg[1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%";
      Pj(this.x - 160, this.y, 3);
      this.actcon = 14;
    }
    if (this.actcon === 14 && !PH.exists("obj_writer")) {
      Pa.typer = 45;
      Pa.fc = 2;
      Pa.fe = 3;
      Pr();
      Pa.msg[0] = "* (Kris^1, let's try CONVINCING them again...)/%";
      P9();
      this.nexttry = 1;
      this.actcon = 1;
    }
  }
  draw(j9) {
    let jP = this.myself;
    if (this.state === 3) {
      if (Pa.monsterhp[jP] <= Pa.monstermaxhp[jP] / this.tiredDiv) {
        Pa.monsterstatus[jP] = 1;
        if (Pa.monstercomment[jP] === " ") {
          Pa.monstercomment[jP] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Pa.monster[jP] === 0) {
          this.onDefeatRun();
          PE(this);
        }
        this.hurtshake += 1;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex -= 1;
          }
          if (this.shakex < 0) {
            this.shakex += 1;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        j9.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let jj = this.idlesprite;
      if (Pa.mercymod[jP] >= Pa.mercymax[jP]) {
        jj = this.sparedsprite;
      }
      j9.draw_sprite_ext(jj, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        j9.draw_sprite_white(jj, this.siner / 6, this.x, this.y, 2, 2, 0, -Po(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
Pe(Ph, "obj_rudinnbase");
PI(Ph, "kinds", PG("obj_rudinnbase", P3));
PI(Ph, "defaultDepth", 90);
var PJ = Ph;
var PU = class jV extends PJ {
  create() {
    super.create();
    this.idlesprite = "spr_diamondm_idle";
    this.hurtsprite = "spr_diamondm_hurt";
    this.sparedsprite = "spr_diamondm_spared";
  }
  get tiredDiv() {
    return 3;
  }
  setupFn(j9) {
    PY(j9);
  }
  defeatedEvent() {}
  onDefeatRun() {
    let j9 = this.myself;
    if (Pa.flag[51 + j9] === 5) {
      Pa.flag[523] += 1;
    }
    Pa.flag[520] += 1;
  }
  talk() {
    let j9 = Pq(0, 1, 2, 3);
    if (j9 === 0) {
      Pa.msg[0] = "Long live&the guy&who pays us!";
    }
    if (j9 === 1) {
      Pa.msg[0] = "Shine,&shine";
    }
    if (j9 === 2) {
      Pa.msg[0] = "I'm just a&normal&person.";
    }
    if (j9 === 3) {
      Pa.msg[0] = "Face my&Diamond&Cutter!";
    }
    if (this.acting === 2) {
      Pa.msg[0] = "Yeah I&guess that&makes&sense.";
    }
    if (this.acting === 3) {
      Pa.msg[0] = "(Yawn)...&What? OK...";
    }
  }
  attack() {
    let j9 = this.myself;
    let jP = Pq(0, 1);
    if (jP === 0) {
      let jj = PD(this.x, this.y, P1);
      jj.type = 0;
      jj.target = this.mytarget;
      jj.damage = Pa.monsterat[j9] * 5;
    } else {
      let jk = PD(this.x, this.y, P1);
      jk.type = 1;
      jk.target = this.mytarget;
      jk.damage = Pa.monsterat[j9] * 5;
    }
    this.turns += 1;
    Pa.turntimer = 140;
    this.attacked = 1;
    Pa.typer = 6;
    Pa.fc = 0;
    jP = Pq(0, 1, 2, 3, 4);
    if (jP === 0) {
      Pa.battlemsg[0] = "* Rudinn is glimmering plainly.";
    }
    if (jP === 1) {
      Pa.battlemsg[0] = "* Rudinn has no strong opinions one way or the other.";
    }
    if (jP === 2) {
      Pa.battlemsg[0] = "* Rudinn thinks about elaborate stones.";
    }
    if (jP === 3) {
      Pa.battlemsg[0] = "* Rudinn dislikes its boss^1, but doesn't care enough to quit.";
    }
    if (jP === 4) {
      Pa.battlemsg[0] = "* Smells like jewelry.";
    }
    if (Pa.monsterstatus[j9] === 1) {
      Pa.battlemsg[0] = "* Rudinn is starting to fall asleep.";
    }
    if (Pa.monsterhp[j9] <= Pa.monstermaxhp[j9] / 3) {
      Pa.battlemsg[0] = "* Rudinn's luster begins to fade.";
    }
    if (Pa.mercymod[j9] >= Pa.mercymax[j9]) {
      Pa.msg[0] = "* Rudinn is alright with not fighting.";
    }
  }
  actStep() {
    let j9 = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Pr();
      Pa.msg[0] = "* RUDINN - AT 6 DF 0&* This ambivalent diamond isn't any girl's best friend./%";
      PP();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.nexttry === 1) {
        Pa.flag[208] = 1;
      }
      Pr();
      Pa.msg[0] = "* You told Rudinn to quit fighting^1.&* It was utterly swayed./%";
      PO(j9, 100);
      PP();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Pr();
      Pa.msg[0] = "* You lectured the enemies on the importance of kindness./";
      Pa.msg[1] = "* The enemies became \\cBTIRED\\cW.../%";
      for (let jP = 0; jP < 3; jP += 1) {
        Pa.monstercomment[jP] = "(Tired)";
        Pa.monsterstatus[jP] = 1;
      }
      PO(j9, 50);
      PP();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      Pr();
      Pa.msg[0] = "* You and Ralsei warned Rudinn about Susie^1.&* The enemy went on guard.../%";
      if (PA() > 1) {
        Pa.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let jj = 0; jj < 3; jj += 1) {
        Pa.monstercomment[jj] = "(Warned)";
        Pa.automiss[jj] = 1;
      }
      PP();
    }
  }
};
Pe(PU, "obj_diamondenemy");
PI(PU, "kinds", PG("obj_diamondenemy", PJ));
PI(PU, "defaultDepth", 90);
PI(PU, "defaultSprite", "spr_diamondm_idle");
var Pc = PU;
var Pg = class ju extends PJ {
  create() {
    super.create();
    this.convinced = 0;
    this.complimented = 0;
    this.idlesprite = "spr_daimond_knight_idle";
    this.hurtsprite = "spr_diamond_knight_hurt";
    this.sparedsprite = "spr_diamond_knight_spared";
  }
  get tiredDiv() {
    return 2;
  }
  setupFn(j9) {
    Pi(j9);
  }
  defeatedEvent() {}
  talk() {
    let j9 = Pq(0, 1, 2, 3);
    if (j9 === 0) {
      Pa.msg[0] = "Long live&the king!";
    }
    if (j9 === 1) {
      Pa.msg[0] = "Glimmer&glammor";
    }
    if (j9 === 2) {
      Pa.msg[0] = "Perish,&Lightners!";
    }
    if (j9 === 3) {
      Pa.msg[0] = "I'm the,&diamond,&here's the&rough!";
    }
    if (this.acting === 2) {
      Pa.msg[0] = "Enough!&You can't&convince&me!";
    }
    if (this.acting === 3) {
      if (j9 === 0 || j9 === 1) {
        Pa.msg[0] = "No one ever&said THAT to&me before&...";
      }
      if (j9 === 2 || j9 === 3) {
        Pa.msg[0] = "The King&never said&THAT to me&before...";
      }
      if (this.complimented >= 2) {
        Pa.msg[0] = "Yeah it&would be&weird.";
      }
    }
  }
  attack() {
    let j9 = this.myself;
    let jP = PH.number("obj_rudinnranger");
    if (jP === 99) {
      let jj = PD(this.x, this.y, P1);
      jj.type = 1;
      jj.target = this.mytarget;
      jj.damage = Pa.monsterat[j9] * 5;
      jj.ratio = 1;
    } else {
      this.visible = false;
      let jk = PD(this.x, this.y, Pz);
      jk.inv = 60;
      jk.target = this.mytarget;
      jk.grazepoints = 6;
      jk.timepoints = 2;
      jk.active = 0;
      jk.creator = this;
      jk.damage = Pa.monsterat[j9] * 5;
    }
    this.turns += 1;
    Pa.turntimer = 180;
    this.attacked = 1;
    Pa.typer = 6;
    Pa.fc = 0;
    jP = Pq(0, 1, 2, 3, 4);
    if (jP === 0) {
      Pa.battlemsg[0] = "* Rudinn Ranger gleams gallantly.";
    }
    if (jP === 1) {
      Pa.battlemsg[0] = "* Rudinn Ranger puts a power limiter on its feelings.";
    }
    if (jP === 2) {
      Pa.battlemsg[0] = "* Rudinn Ranger fantasizes about divine gems.";
    }
    if (jP === 3) {
      Pa.battlemsg[0] = "* Rudinn Ranger pledges allegiance.";
    }
    if (jP === 4) {
      Pa.battlemsg[0] = "* Smells like crystal.";
    }
    if (Pa.monsterstatus[j9] === 1) {
      Pa.battlemsg[0] = "* Rudinn Ranger is starting to fall asleep.";
    }
    if (Pa.monsterhp[j9] <= Pa.monstermaxhp[j9] / 3) {
      Pa.battlemsg[0] = "* Rudinn Ranger's luster begins to fade.";
    }
    if (Pa.mercymod[j9] >= Pa.mercymax[j9]) {
      Pa.msg[0] = "* Rudinn Ranger seems totally flattered.";
    }
  }
  actDone() {
    if (this.acting === 3) {
      PO(this.myself, 100);
    }
  }
  actStep() {
    let j9 = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Pr();
      Pa.msg[0] = "* RUDINN RANGER - AT 8 DF 0&* Ideally multicolored, but they all wanted to be red./%";
      PP();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Pr();
      Pa.msg[0] = "* You tried to explain why fighting is bad./";
      Pa.msg[1] = "* But Rudinn Ranger just became \\cBTIRED\\cW.../%";
      Pa.monstercomment[j9] = "(Tired)";
      Pa.monsterstatus[j9] = 1;
      PO(j9, 50);
      PP();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Pr();
      Pa.msg[0] = "* Susie COMPLIMENTed the enemy...?/";
      Py(1, 2);
      let jP = Pq(0, 1, 2);
      if (jP === 0) {
        Pa.msg[2] = "* \"Your outfit is NOT disgusting.\"/%";
      }
      if (jP === 1) {
        Pa.msg[2] = "* \"Please keep body tackling the soda machine.\"/%";
      }
      if (jP === 2) {
        Pa.msg[2] = "* Nice^1, you guys look like you're gonna kill me./%";
      }
      if (Pa.flag[503] === 0) {
        Pa.msg[0] = "* You told Susie to COMPLIMENT the enemy!/";
        Py(1, 0);
        Pa.msg[2] = "* ... uhhh^1, are you serious?/";
        Pa.msg[3] = "\\E2* What good can I say about someone trying to kill us?/";
        Pt(4, 6);
        Pa.msg[5] = "* Aww^1, Susie..^1. if you're stuck^1, why not try.../";
        Pa.msg[6] = "* ... saying something you wish someone'd say to you?/";
        Py(7, 0);
        Pa.msg[8] = "* .../";
        Pa.msg[9] = "\\E2* \"You are unbanned from free ham sandwich day\"/%";
        Pa.flag[503] = 1;
      }
      if (this.complimented >= 1) {
        Pa.msg[0] = "* Susie actively didn't COMPLIMENT the enemy!/";
        Py(1, 0);
        Pa.msg[2] = "* Look^1, it's just gonna be weird if I keep going./%";
        this.complimented = 2;
      }
      PN();
      PP();
      this.actcon = 1;
      if (this.complimented === 0) {
        this.complimented = 1;
      }
    }
  }
};
Pe(Pg, "obj_rudinnranger");
PI(Pg, "kinds", PG("obj_rudinnranger", PJ));
PI(Pg, "defaultDepth", 90);
PI(Pg, "defaultSprite", "spr_daimond_knight_idle");
var Pv = Pg;
var PT = class jX extends P5 {
  create() {
    Object.assign(this, {
      con: 0,
      movecon: 0,
      movetimer: 0,
      timer: 0,
      image_speed: 0,
      image_index: 0,
      image_xscale: 2,
      image_yscale: 2,
      movesiner: 0,
      movefactor: 0,
      type: 0,
      creator: null,
      damage: 0,
      grazepoints: 0,
      timepoints: 0,
      inv: 60,
      target: 0,
      active: 0,
      throwernumber: 1,
      thrown: 0
    });
  }
  step() {
    if (this.con === 0) {
      this.throwernumber = PH.number("obj_dknight_slasher");
      this.con = 12;
      this.movecon = 4;
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
    }
    if (this.movecon === 4) {
      this.movesiner += 1;
      if (Pa.turntimer >= 30 && this.movefactor < 1) {
        this.movefactor += 0.1;
      }
      this.y = this.ystart + B(this.movesiner / 16) * 40 * this.movefactor;
      if (Pa.turntimer <= 30) {
        if (this.movefactor > 0) {
          this.movefactor -= 0.1;
        } else {
          this.movefactor = 0;
        }
      }
    }
    if (this.con === 10) {
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
      if (Pa.turntimer > 15) {
        this.con = 11;
      }
    }
    if (this.con === 11) {
      this.image_index += 0.334;
      if (this.image_index >= 4 && this.thrown === 0) {
        let j9 = PD(this.x + 6, this.y + 34, P6);
        j9.siner = this.movesiner;
        P4(this, j9);
        j9.throwernumber = this.throwernumber;
        if (!j9.destroyed) {
          j9.active = 1;
          j9.sprite_index = "spr_diamondswordbullet";
          j9.image_xscale = 2;
          j9.image_yscale = 2;
          let jP = PH.first("obj_heart");
          j9.move_towards_point(jP ? jP.x + 8 : 320, jP ? jP.y + 8 : 170, 9 + B(j9.siner / 10) * 4);
          if (j9.throwernumber === 2) {
            j9.speed *= 0.85;
          }
          if (j9.throwernumber === 3) {
            j9.speed *= 0.7;
          }
          j9.direction += 5 - PX(10);
          j9.image_angle = j9.direction;
          j9.depth = this.depth + 1;
        }
        this.thrown = 1;
      }
      if (this.image_index >= 6) {
        this.con = 12;
        this.timer = 0;
      }
    }
    if (this.con === 12) {
      this.timer += 1;
      if (this.timer >= this.throwernumber * 3) {
        this.con = 10;
      }
    }
  }
  destroy() {
    if (this.creator && !this.creator.destroyed) {
      this.creator.visible = true;
    }
  }
};
Pe(PT, "obj_dknight_slasher");
PI(PT, "kinds", PG("obj_dknight_slasher", P5));
PI(PT, "defaultDepth", 0);
PI(PT, "defaultSprite", "spr_diamond_knight_slash");
var Pz = PT;
P0({
  0: (j9, {
    heart: jP
  }) => {
    if (j9.btimer >= j9.timermax * j9.ratio) {
      j9.btimer = 0;
      let jj = 30 + PX(120);
      let jk = 140 + PX(80);
      let jM = PW(jk, jj);
      let jf = PZ(jk, jj);
      let jx = jP ? jP.x : 320;
      let jO = jP ? jP.y : 170;
      let jb = PD(jx + 8 + jM, jO + 8 + jf, P8);
      if (jb.y < 40) {
        jb.y = 40;
      }
      jb.damage = j9.damage;
      jb.target = j9.target;
    }
  },
  1: (j9, {
    heart: jP
  }) => {
    if (j9.btimer >= j9.ratio * 9) {
      j9.btimer = 0;
      let jj = (140 + PX(40)) * j9.side;
      let jk = -100 + PX(200);
      if (Pq(0, 1, 2, 3) === 3) {
        jk = -10 + PX(20);
      }
      let jM = jP ? jP.x : 320;
      let jf = jP ? jP.y : 170;
      let jx = PD(jM + 8 + jk, jf + 8 + jj, P7);
      jx.damage = j9.damage;
      jx.target = j9.target;
    }
  }
});
var PR = {};
for (let [jw, jG] of [["hathy", "./hathy.js"], ["jigsawry", "./jigsawry.js"], ["rabbick", "./rabbick.js"]]) {
  Promise.resolve().then(() => j7(jG)).then(j9 => {
    PR[jw] = j9;
  }).catch(() => {});
}
var Pd = Pe((j9, jP) => ({
  cls: Pc,
  type: 5,
  x: j9,
  y: jP,
  setup: PY
}), "R");
var j0 = Pe((j9, jP) => ({
  cls: Pv,
  type: 22,
  x: j9,
  y: jP,
  setup: Pi
}), "RR");
function j1(j9, jP, jj, jk, jM, jf) {
  let jx = PR[j9];
  if (!jx || !jx[jP] || !jx[jj]) {
    return null;
  } else {
    return {
      cls: jx[jP],
      type: jk,
      x: jM,
      y: jf,
      setup: jx[jj]
    };
  }
}
Pe(j1, "sib");
var j2 = Pe((j9, jP) => j1("hathy", "obj_heartenemy", "setupStats", 6, j9, jP), "HATHY");
var j3 = Pe((j9, jP) => j1("jigsawry", "obj_jigsawryenemy", "setupStats", 15, j9, jP), "JIGSAW");
var j4 = Pe((j9, jP) => j1("rabbick", "obj_rabbick_enemy", "setupStats", 13, j9, jP), "RABBICK");
var j5 = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle"
};
var j6 = [{
  ...j5,
  id: "rudinn",
  name: "Rudinn",
  area: "Field",
  desc: "Rudinn.#Diamond bullets.",
  monsters: [Pd(480, 140)],
  encounterno: 4,
  get battlemsg() {
    let j9 = "* Rudinn drew near!";
    if (Pa.flag[500] >= 1) {
      j9 = "* A different Rudinn from last time drew near!";
    }
    if (Pa.flag[500] === 2) {
      j9 = "* Assumedly another different Rudinn appeared!";
    }
    return j9;
  }
}, {
  ...j5,
  id: "rudinn2",
  name: "Rudinn x2",
  area: "Field",
  desc: "A necklace of#Rudinns.",
  monsters: [Pd(480, 110), Pd(500, 200)],
  battlemsg: "* A necklace of Rudinns blocks your path.",
  encounterno: 5
}, {
  ...j5,
  id: "rudinn_hathy",
  name: "Rudinn & Hathy",
  area: "Field",
  desc: "Rudinn and Hathy.",
  get monsters() {
    return [Pd(480, 110), j2(500, 200)].filter(Boolean);
  },
  battlemsg: "* Rudinn and Hathy blocked the way!",
  encounterno: 6
}, {
  ...j5,
  id: "smorgasboard",
  name: "Smorgasboard",
  area: "Field",
  desc: "Jigsawry, Rudinn#and Hathy.",
  get monsters() {
    return [j3(480, 20), Pd(500, 120), j2(460, 220)].filter(Boolean);
  },
  battlemsg: "* Smorgasboard.",
  encounterno: 23
}, {
  ...j5,
  id: "rabbick_rudinn",
  name: "Rabbick & Rudinn",
  area: "Field",
  desc: "Rabbick and Rudinn.",
  get monsters() {
    return [j4(480, 60), Pd(460, 180)].filter(Boolean);
  },
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 24
}, {
  ...j5,
  id: "rudinnranger2",
  name: "Rudinn Ranger x2",
  area: "Card Castle",
  desc: "Two Rudinn Rangers.#Sword throwers.",
  monsters: [j0(480, 110), j0(500, 200)],
  battlemsg: "* Rudinn Rangers came sparkling into view!",
  encounterno: 28
}, {
  ...j5,
  id: "various_guys",
  name: "Various Guys",
  area: "Field",
  desc: "Rudinn, Hathy#and Rudinn.",
  get monsters() {
    return [Pd(480, 20), j2(500, 120), Pd(460, 220)].filter(Boolean);
  },
  battlemsg: "* Various guys appeared!",
  encounterno: 33
}];
function j7(j9) {
  switch (j9) {
    case "../battle.js":
      return j8("./battle-RLFUO4GL.js", import.meta.url);
    case "../bullets.js":
      return j8("./bullets-5Y5YBCNE.js", import.meta.url);
    case "../controller.js":
      return j8("./c-ARQXD3PJ.js", import.meta.url);
    case "../globals.js":
      return j8("./globals-MPUN2SAS.js", import.meta.url);
    case "../gm.js":
      return j8("./gm-PYDVYOKK.js", import.meta.url);
    case "../heart.js":
      return j8("./heart-TMDJKKP3.js", import.meta.url);
    case "../text.js":
      return j8("./c-H7TTANKZ.js", import.meta.url);
    case "./hathy.js":
      return j8("./c-J62DCCBN.js", import.meta.url);
    case "./jigsawry.js":
      return j8("./c-ZIGB2SRS.js", import.meta.url);
    case "./rabbick.js":
      return j8("./c-KABMIQWX.js", import.meta.url);
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
Pe(j7, "__dr_imp");
PF(PJ, "G.mnfight = 2;");
export { Ps as a, PL as b, PY as c, Pi as d, Pl as e, PC as f, Pc as g, Pv as h, Pz as i, j6 as j, Pn as k };
function j8(j9, jP) {
  var jj = new URL(j9, jP).href;
  var jk = globalThis.__drWarm;
  return (jk ? jk(jj) : Promise.resolve()).then(function () {
    return import(jj).catch(function (jM) {
      try {
        jM.reload = true;
        jM.what = "the game code";
      } catch (jf) {}
      throw jM;
    });
  });
}
