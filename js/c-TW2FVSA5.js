import { b as c, c as l } from "./c-O567UJ4Y.js";
import { G as e, s as h } from "./c-QFDZPUX2.js";
import { a as I, e as p } from "./c-DTW63MWW.js";
import { g as q0, i as q1 } from "./c-3ELH3LBH.js";
import { a as q2, f as q3, n as q4, p as q5 } from "./c-MYK6C3LF.js";
import { H as q6, M as q7, Q as q8, g as q9 } from "./c-ZQQWH6UG.js";
import { C as qq, Ib as qG, Nb as qo, Ra as qE, Ta as qS, na as qi, o as qM, pb as qr, qb as qR, r as qm, xb as qf } from "./c-PBMEVLU6.js";
import { a as qN, c as qO, e as qt, g as qg, i as qB, l as qn } from "./c-XSSGDLV7.js";
var qw = {};
qO(qw, {
  FIGHTS: () => qd,
  SOUNDS: () => qZ,
  SPRITES: () => qJ,
  obj_defeatanim: () => qK,
  obj_jigsawbullet: () => qV,
  obj_jigsawryenemy: () => qc,
  obj_spareanim: () => qv,
  scr_defeatrun: () => qb,
  scr_spareanim: () => qC,
  setupStats: () => qD
});
qn();
var qJ = ["spr_jigsawry_idle", "spr_jigsawry_hurt", "spr_jigsawry_spared", "spr_jigsawbullet", "spr_defeatsweat", "spr_sparestar_anim", "spr_battleblcon_long"];
var qZ = ["snd_defeatrun", "snd_spare"];
function qD(ql) {
  q9.monstername[ql] = "Jigsawry";
  q9.monstermaxhp[ql] = 90;
  q9.monsterhp[ql] = 90;
  q9.monsterat[ql] = 5;
  q9.monsterdf[ql] = 0;
  q9.monsterexp[ql] = 0;
  q9.monstergold[ql] = 20;
  q9.sparepoint[ql] = 10;
  q9.mercymod[ql] = 0;
  q9.mercymax[ql] = 100;
  q9.canact[ql][0] = 1;
  q9.actname[ql][0] = "Check";
  q9.canact[ql][1] = 1;
  q9.actname[ql][1] = "Befriend";
  if (Array.isArray(q9.char) && q9.char.includes(2) && q9.plot < 150) {
    q9.canact[ql][2] = 1;
    q9.actname[ql][2] = "Warning";
    q9.actactor[ql][2] = 3;
  }
}
qN(qD, "setupStats");
var qL = class qu extends qr {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    qE("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(ql) {
    if (this.t === 0) {
      this.draw_self(ql);
    }
    let qA = 0;
    if (this.g <= 5) {
      qA = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      qA = 1;
    }
    if (qA === 1) {
      ql.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let qY = 0; qY <= 80; qY += 1) {
        ql.draw_sprite_ext(this.sprite_index, this.image_index, this.x + qY * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + qY / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
qN(qL, "obj_defeatanim");
qt(qL, "kinds", qR("obj_defeatanim", qr));
qt(qL, "defaultDepth", 0);
var qK = qL;
function qb(ql) {
  let qA = qG(ql.x, ql.y, qK);
  qA.sprite_index = ql.sprite_index;
  qA.sprite_index = ql.hurtsprite;
  qA.image_index = 0;
  qA.image_xscale = ql.image_xscale;
  qA.image_yscale = ql.image_yscale;
  ql.instance_destroy();
}
qN(qb, "scr_defeatrun");
var qF = class qk extends qr {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    qS("snd_spare");
    qE("snd_spare");
  }
  draw(ql) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      ql.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      ql.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        ql.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let qA = this.t / 5;
      if (qA > 1) {
        qA = 1;
      }
      ql.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, qA - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let qY = 0; qY < 2; qY += 1) {
        let qe = qG(this.x + qM(this.sprite_width), this.y + qM(this.sprite_height), q2);
        qe.image_xscale = 2;
        qe.image_yscale = 2;
        qe.sprite_index = "spr_sparestar_anim";
        qe.image_alpha = 2;
        qe.image_speed = 0.25;
        qe.hspeed = -3;
        qe.gravity = 0.5;
        qe.gravity_direction = 0;
        this.star[this.starcount] = qe;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let qh = 0; qh < this.starcount; qh += 1) {
        let qz = this.star[qh];
        if (qz && !qz.destroyed) {
          qz.image_angle += 10;
          qz.image_alpha -= 0.1;
          if (qz.image_alpha <= 0) {
            qz.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let qI = 0; qI < this.starcount; qI += 1) {
        let qQ = this.star[qI];
        if (qQ && !qQ.destroyed) {
          qQ.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
qN(qF, "obj_spareanim");
qt(qF, "kinds", qR("obj_spareanim", qr));
qt(qF, "defaultDepth", 0);
var qv = qF;
function qC(ql) {
  let qA = qG(ql.x, ql.y, qv);
  qA.sprite_index = ql.sprite_index;
  qA.sprite_index = ql.sparedsprite;
  qA.image_index = 0;
  qA.image_xscale = ql.image_xscale;
  qA.image_yscale = ql.image_yscale;
}
qN(qC, "scr_spareanim");
var qs = class qj extends p {
  create() {
    this.damage = 0;
    this.grazepoints = 0;
    this.grazed = 0;
    this.timepoints = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.init = 0;
    this.tracking = 1;
    this.timer = 0;
    this.con = 0;
    this.side = 0;
    this.fade = 0;
    this.locked = 0;
    this.ltimer = 0;
    this.joker = 0;
  }
  step() {
    if (this.init === 0 && this.image_alpha < 1) {
      this.image_alpha += 0.1;
      if (this.image_alpha >= 1) {
        this.init = 1;
        this.active = 1;
      }
    }
    if (this.tracking === 1) {
      let ql = qf.first("obj_heart");
      if (ql) {
        if (this.side === 1 || this.side === 3) {
          if (ql.x + 10 - this.x >= 10) {
            this.x += 3;
          }
          if (ql.x + 10 - this.x <= -10) {
            this.x -= 3;
          }
        }
        if (this.side === 0 || this.side === 2) {
          if (ql.y + 10 - this.y >= 10) {
            this.y += 3;
          }
          if (ql.y + 10 - this.y <= -10) {
            this.y -= 3;
          }
        }
      }
    }
    this.timer += 1;
    if (this.timer >= 30 && this.con === 0) {
      this.tracking = 0;
      this.direction = this.side * 90 + 180;
      this.speed = 4;
      this.gravity_direction = this.side * 90;
      this.gravity = 1.2;
      if (this.joker === 1) {
        this.gravity = 1.6;
        this.speed = 6;
      }
      this.con = 1;
    }
    if (this.timer >= 40) {
      this.gravity = 0;
    }
    if (this.locked === 1) {
      this.ltimer += 1;
      if (this.ltimer >= 12) {
        this.image_alpha -= 0.2;
        this.active = 0;
      }
      if (this.ltimer >= 17) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let ql of qf.list.slice()) {
        if (ql !== this && !ql.destroyed && !this.destroyed && !!ql.is("obj_jigsawbullet")) {
          if (qo(this, ql)) {
            this.collideWith(ql);
          }
        }
      }
    }
  }
  collideWith(ql) {
    if (this.con === 1 && ql.con === 1 && this.active === 1 && ql.active === 1 && this.locked === 0) {
      this.speed = 0;
      this.locked = 1;
      ql.speed = 0;
      ql.locked = 1;
      for (let qA = 0; qA < 16; qA++) {
        if (this.side === 0) {
          if (this.x >= ql.x - 28) {
            this.x -= 1;
          }
          if (this.x >= ql.x - 28) {
            ql.x += 1;
          }
        }
        if (this.side === 3) {
          if (this.y >= ql.y - 28) {
            this.y -= 1;
          }
          if (this.y >= ql.y - 28) {
            ql.y += 1;
          }
        }
        if (this.side === 2) {
          if (this.x <= ql.x + 28) {
            this.x += 1;
          }
          if (this.x <= ql.x + 28) {
            ql.x -= 1;
          }
        }
        if (this.side === 1) {
          if (this.y <= ql.y + 28) {
            this.y += 1;
          }
          if (this.y <= ql.y + 28) {
            ql.y -= 1;
          }
        }
      }
    }
  }
};
qN(qs, "obj_jigsawbullet");
qt(qs, "kinds", qR("obj_jigsawbullet", p));
qt(qs, "defaultDepth", 0);
qt(qs, "defaultSprite", "spr_jigsawbullet");
var qV = qs;
function qa(ql, qA) {
  let qY = ql.type;
  let qe = 40;
  if (qY === 81) {
    qe = 30;
  }
  if (qY === 82) {
    qe = 26;
  }
  if (qY === 83) {
    qe = 19;
  }
  if (qY === 84) {
    qe = 14;
  }
  if (ql.btimer >= qe) {
    ql.btimer = 0;
    let qh = qA.bsx;
    let qz = qA.bsy;
    let qI = qA.heart;
    let qQ = qI ? qI.x : 310;
    let qp = qI ? qI.y : 160;
    let qx = qm(0, 1);
    if (qY === 81 || qY === 84) {
      qx = ql.made;
      if (ql.made === 0) {
        ql.made = 1;
      } else {
        ql.made = 0;
      }
    }
    if (qx === 0) {
      let qH = qG(qQ + 8, qz - 150, qV);
      qH.side = 3;
      let qU = qG(qQ + 8, qz + 150, qV);
      qU.side = 1;
      if (qY === 82) {
        qH.timer = 10;
      }
      if (qY === 82) {
        qU.timer = 10;
      }
      if (qY === 83 || qY === 84) {
        qH.timer = 15;
      }
      if (qY === 83 || qY === 84) {
        qU.timer = 15;
      }
      I(ql, qH);
      I(ql, qU);
    }
    if (qx === 1) {
      let qP = qG(qh + 150, qp + 8, qV);
      qP.side = 2;
      let G0 = qG(qh - 150, qp + 8, qV);
      G0.side = 0;
      if (qY === 82) {
        qP.timer = 10;
      }
      if (qY === 82) {
        G0.timer = 10;
      }
      if (qY === 83) {
        qP.timer = 15;
      }
      if (qY === 83) {
        G0.timer = 15;
      }
      I(ql, qP);
      I(ql, G0);
    }
    if (qY === 83) {
      qf.with("obj_jigsawbullet", G1 => {
        G1.joker = 1;
      });
    }
  }
}
qN(qa, "jigsawType");
c({
  80: qa,
  81: qa,
  82: qa,
  83: qa,
  84: qa
});
var qy = class G2 extends h {
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
      image_speed: 0,
      image_xscale: 2,
      image_yscale: 2,
      rtimer: 0,
      shakex: 0,
      tellme: 0,
      thissprite: "spr_jigsawry_idle"
    });
    this.idlesprite = "spr_jigsawry_idle";
    this.hurtsprite = "spr_jigsawry_hurt";
    this.sparedsprite = "spr_jigsawry_spared";
    q9.flag[20] = 0;
    this.traitorp = 0;
  }
  alarmEvent(ql) {
    if (ql === 4) {
      this.con += 1;
    }
  }
  userEvent(ql) {
    if (ql === 12) {
      q9.monsterx[this.myself] = this.x + this.sprite_width / 2;
      q9.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (ql === 11) {
      if (q9.room === "room_field1") {
        q9.flag[500] += 1;
      }
      if (q9.room === "room_field2" && q9.flag[50] !== 0) {
        q9.flag[501] = q9.flag[50];
      }
      return;
    }
    if (ql === 10) {
      qC(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  step() {
    let ql = this.myself;
    if (q9.monster[ql] === 1) {
      if (q9.mnfight === 1 && this.talked === 0) {
        q8(this);
        if (!qf.exists("obj_darkener")) {
          qG(0, 0, q5);
        }
        q9.typer = 50;
        q9.msg = new Array(100).fill(" ");
        let qA = qm(0, 1, 2, 3);
        if (qA === 0) {
          q9.msg[0] = "H... hurting&people is&cool..";
        }
        if (qA === 1) {
          q9.msg[0] = "P... Put up&your d-dukes,&bubbo...";
        }
        if (qA === 2) {
          q9.msg[0] = "F... Fighting?&I love&fighting...";
        }
        if (qA === 3) {
          q9.msg[0] = "I... I have&a rent&payment&to make...";
        }
        if (q9.mercymod[ql] >= 100) {
          if (qA === 0 || qA === 1) {
            q9.msg[0] = "I always&wanted a&friend just&like you.";
          }
          if (qA === 2 || qA === 3) {
            q9.msg[0] = "We're friends&now, la la~";
          }
        }
        if (this.traitorp === 1) {
          if (qA === 0 || qA === 1) {
            q9.msg[0] = "WHADDA WORLD!";
          }
          if (qA === 2 || qA === 3) {
            q9.msg[0] = "I'M TOO YOUNG&TO DIE!!!";
          }
        }
        if (this.traitorp === 2) {
          if (qA === 0 || qA === 1) {
            q9.msg[0] = "BARRY!!!&THEY GOT&BARRY!!!";
          }
          if (qA === 2 || qA === 3) {
            q9.msg[0] = "BARRY!!&HANG IN&THERE BARRY!";
          }
        }
        this.traitorp = 0;
        q1(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && q9.mnfight === 1) {
        this.rtimer = 0;
        if (qi() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          qf.with("obj_writer", qY => qY.instance_destroy());
          q9.mnfight = 2;
        }
        if (q9.mnfight === 2) {
          if (!qf.exists("obj_moveheart")) {
            q4();
          }
          if (!qf.exists("obj_growtangle")) {
            qG(320, 170, q3);
          }
        }
      }
      if (q9.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          q9.flag[20] = 0;
          if (qm(0) === 0 && (this.tellme = 0, qf.with("obj_dbulletcontroller", qe => {
            if (qe.type >= 80 && qe.type <= 84) {
              qf.with("obj_jigsawryenemy", qh => {
                qh.tellme = 1;
              });
            }
          }), this.tellme === 0)) {
            let qe = qG(this.x, this.y, l);
            qe.grazepoints = 4;
            qe.timepoints = 2;
            let qh = 0;
            for (let qz = 0; qz < 3; qz += 1) {
              if (q9.monstertype[qz] === 15 && q9.monster[qz] === 1) {
                qh += 1;
              }
            }
            qe.type = 80 + qh;
            qe.target = this.mytarget;
            qe.damage = q9.monsterat[ql] * 5;
          }
          this.turns += 1;
          q9.turntimer = 140;
          this.attacked = 1;
          q9.typer = 6;
          q9.fc = 0;
          let qY = qm(0, 1, 2, 3, 4);
          if (qY === 0) {
            q9.battlemsg[0] = "* Jigsawry is pretending to march.";
          }
          if (qY === 1) {
            q9.battlemsg[0] = "* Jigsawry is trying to calculate this month's rent.";
          }
          if (qY === 2) {
            q9.battlemsg[0] = "* Jigsawry thought of its boss and felt afraid.";
          }
          if (qY === 3) {
            q9.battlemsg[0] = "* Jigsawry is wishing it could quit its job.";
          }
          if (qY === 4) {
            q9.battlemsg[0] = "* Smells like cardboard.";
          }
          if (q9.monsterstatus[ql] === 1) {
            q9.battlemsg[0] = "* Jigsawry looks exhausted.";
          }
          if (q9.monsterhp[ql] <= q9.monstermaxhp[ql] / 3) {
            q9.battlemsg[0] = "* Jigsawry's edges are fraying.";
          }
          if (q9.mercymod[ql] >= q9.mercymax[ql]) {
            q9.msg[0] = "* Jigsawry looks happy about its life.";
          }
        } else {
          q9.turntimer = 120;
        }
      }
      if (q9.mnfight === 2 && q9.turntimer <= 1) {
        if (this.battlecancel === 1) {
          q9.mercymod[ql] = 999;
        }
        if (this.battlecancel === 2) {
          qf.with("obj_battlecontroller", qI => {
            qI.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (q9.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        q9.msg = new Array(100).fill(" ");
        q9.msg[0] = "* JIGSAWRY - AT 5 DF 0&* This mousenary is only fighting to make ends meet.../%";
        q0();
      }
      if (this.acting === 2 && this.actcon === 0) {
        q9.msg = new Array(100).fill(" ");
        q9.msg[0] = "* You barely lifted a finger^1, and.../%";
        q0();
        this.actcon = 3;
      }
      if (this.actcon === 3 && !qf.exists("obj_writer")) {
        qf.with("obj_jigsawryenemy", qQ => {
          q7(qQ.myself, 100);
        });
        let qI = qm(0, 1, 2, 3);
        q9.typer = 50;
        q9.msg = new Array(100).fill(" ");
        if (qI === 0) {
          q9.msg[0] = "Of course&I'll be&your friend!/%";
        }
        if (qI === 1) {
          q9.msg[0] = "Alright!&You win!&Let's be&friends!/%";
        }
        if (qI === 2) {
          q9.msg[0] = "Friends?&I was thinking&the same&thing!/%";
        }
        if (qI === 3) {
          q9.msg[0] = "... well,&if we HAVE&to be&friends.../%";
        }
        q1(this.x - 160, this.y, 3);
        this.actcon = 1;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        q9.msg = new Array(100).fill(" ");
        q9.msg[0] = "* You and Ralsei warned Jigsawry about Susie^1.&* The enemy went on guard.../%";
        if (q6() > 1) {
          q9.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let qQ = 0; qQ < 3; qQ += 1) {
          q9.monstercomment[qQ] = "(Warned)";
          q9.automiss[qQ] = 1;
        }
        q0();
      }
      if (this.actcon === 1 && !qf.exists("obj_writer")) {
        this.actcon = 0;
        e();
      }
    }
  }
  draw(ql) {
    let qA = this.myself;
    if (this.state === 3) {
      q9.mercymod[qA] = 0;
      this.traitorp = 1;
      q9.flag[20] = 1;
      qf.with("obj_jigsawryenemy", qY => {
        if (qY.traitorp === 0) {
          qY.traitorp = 2;
        }
        q9.mercymod[qY.myself] = 0;
      });
      if (q9.monsterhp[qA] <= q9.monstermaxhp[qA] - 20) {
        q9.monsterstatus[qA] = 1;
        if (q9.monstercomment[qA] === " ") {
          q9.monstercomment[qA] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (q9.monster[qA] === 0) {
          qb(this);
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
        ql.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = this.idlesprite;
      if (q9.mercymod[qA] >= q9.mercymax[qA]) {
        this.thissprite = this.sparedsprite;
      }
      if (q9.flag[20] === 1) {
        this.thissprite = this.hurtsprite;
      }
      ql.draw_sprite_ext(this.thissprite, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        ql.draw_sprite_white(this.thissprite, this.siner / 6, this.x, this.y, 2, 2, 0, -qq(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
qN(qy, "obj_jigsawryenemy");
qt(qy, "kinds", qR("obj_jigsawryenemy", h));
qt(qy, "defaultDepth", 90);
qt(qy, "defaultSprite", "spr_jigsawry_idle");
var qc = qy;
var qW = 0;
function qT(ql) {
  if (typeof window === "undefined" || !qB.DR || !Array.isArray(qB.DR.FIGHTS) || qW) {
    return null;
  }
  qW = 1;
  try {
    for (let qA of qB.DR.FIGHTS) {
      let qY = null;
      try {
        qY = qA && qA.monsters;
      } catch {
        qY = null;
      }
      if (Array.isArray(qY)) {
        for (let qe of qY) {
          if (qe && qe.type === ql && qe.cls && typeof qe.setup == "function") {
            return qe;
          }
        }
      }
    }
  } finally {
    qW = 0;
  }
  return null;
}
qN(qT, "resolveMonster");
var qX = {
  id: "jigsawry_smorgasboard",
  name: "Smorgasboard",
  chapter: 1,
  area: "Field",
  desc: "Smorgasboard.#Jigsawry + Rudinn + Hathy.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  battlemsg: "* Smorgasboard.",
  encounterno: 23,
  music: "battle",
  get monsters() {
    let ql = [{
      cls: qc,
      type: 15,
      x: 480,
      y: 20,
      setup: qD
    }];
    let qA = qT(5);
    if (qA) {
      ql.push({
        cls: qA.cls,
        type: 5,
        x: 500,
        y: 120,
        setup: qA.setup
      });
    }
    let qY = qT(6);
    if (qY) {
      ql.push({
        cls: qY.cls,
        type: 6,
        x: 460,
        y: 220,
        setup: qY.setup
      });
    }
    return ql;
  }
};
var qd = [{
  id: "jigsawry",
  name: "Jigsawry",
  chapter: 1,
  area: "Field",
  desc: "Jigsawry.#Puzzle-piece pincers.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: qc,
    type: 15,
    x: 480,
    y: 140,
    setup: qD
  }],
  battlemsg: "* Jigsawry drew near!",
  encounterno: 21,
  music: "battle"
}, {
  id: "jigsawry_board",
  name: "Jigsawry x3",
  chapter: 1,
  area: "Field",
  desc: "A board of Jigsawrys.#Three at once.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: qc,
    type: 15,
    x: 480,
    y: 20,
    setup: qD
  }, {
    cls: qc,
    type: 15,
    x: 500,
    y: 120,
    setup: qD
  }, {
    cls: qc,
    type: 15,
    x: 460,
    y: 220,
    setup: qD
  }],
  battlemsg: "* A board of Jigsawrys blocked the way!",
  encounterno: 22,
  music: "battle"
}, qX];
qg(qc, "G.mnfight = 2;");
export { qJ as a, qZ as b, qD as c, qK as d, qb as e, qv as f, qC as g, qV as h, qc as i, qd as j, qw as k };
