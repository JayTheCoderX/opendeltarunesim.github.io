import { b as c, c as l } from './c-O567UJ4Y.js';
import { G as e, s as h } from './c-QFDZPUX2.js';
import { a as I, e as p } from './c-DTW63MWW.js';
import { g as q0, i as q1 } from './c-3ELH3LBH.js';
import { a as q2, f as q3, n as q4, p as q5 } from './c-MYK6C3LF.js';
import { H as q6, M as q7, Q as q8, g as q9 } from './c-ZQQWH6UG.js';
import { C as qq, Ib as qG, Nb as qo, Ra as qE, Ta as qS, na as qi, o as qM, pb as qr, qb as qR, r as qm, xb as qf } from './c-PBMEVLU6.js';
import { a as qN, c as qO, e as qt, g as qg, i as qB, l as qn } from './c-XSSGDLV7.js';
var qw = {};
qO(qw, {
  'FIGHTS': () => qd,
  'SOUNDS': () => qZ,
  'SPRITES': () => qJ,
  'obj_defeatanim': () => qK,
  'obj_jigsawbullet': () => qV,
  'obj_jigsawryenemy': () => qc,
  'obj_spareanim': () => qv,
  'scr_defeatrun': () => qb,
  'scr_spareanim': () => qC,
  'setupStats': () => qD
}), qn();
var qJ = ['spr_jigsawry_idle', 'spr_jigsawry_hurt', 'spr_jigsawry_spared', 'spr_jigsawbullet', 'spr_defeatsweat', 'spr_sparestar_anim', 'spr_battleblcon_long'],
  qZ = ['snd_defeatrun', 'snd_spare'];
function qD(ql) {
  q9.monstername[ql] = 'Jigsawry', q9.monstermaxhp[ql] = 0x5a, q9.monsterhp[ql] = 0x5a, q9.monsterat[ql] = 0x5, q9.monsterdf[ql] = 0x0, q9.monsterexp[ql] = 0x0, q9.monstergold[ql] = 0x14, q9.sparepoint[ql] = 0xa, q9.mercymod[ql] = 0x0, q9.mercymax[ql] = 0x64, q9.canact[ql][0x0] = 0x1, q9.actname[ql][0x0] = 'Check', q9.canact[ql][0x1] = 0x1, q9.actname[ql][0x1] = 'Befriend', Array.isArray(q9.char) && q9.char.includes(0x2) && q9.plot < 0x96 && (q9.canact[ql][0x2] = 0x1, q9.actname[ql][0x2] = 'Warning', q9.actactor[ql][0x2] = 0x3);
}
qN(qD, 'setupStats');
var qL = class qu extends qr {
  ["create"]() {
    this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, qE('snd_defeatrun');
  }
  ["step"]() {
    this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
  }
  ["draw"](ql) {
    this.t === 0x0 && this.draw_self(ql);
    let qA = 0x0;
    if (this.g <= 0x5 && (qA = 0x1), this.g >= 0x9 && this.g <= 0xd && (qA = 0x1), qA === 0x1 && ql.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
      for (let qY = 0x0; qY <= 0x50; qY += 0x1) ql.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * qY, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.4 - this.t / 0x8 + qY / 0xc8);
      this.t >= 0xf && this.instance_destroy();
    }
  }
};
qN(qL, 'obj_defeatanim'), qt(qL, 'kinds', qR('obj_defeatanim', qr)), qt(qL, 'defaultDepth', 0x0);
var qK = qL;
function qb(ql) {
  let qA = qG(ql.x, ql.y, qK);
  qA.sprite_index = ql.sprite_index, qA.sprite_index = ql.hurtsprite, qA.image_index = 0x0, qA.image_xscale = ql.image_xscale, qA.image_yscale = ql.image_yscale, ql.instance_destroy();
}
qN(qb, 'scr_defeatrun');
var qF = class qk extends qr {
  ["create"]() {
    this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], qS('snd_spare'), qE('snd_spare');
  }
  ["draw"](ql) {
    if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, ql.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x4, this.y, this.image_xscale, this.image_yscale, 0x0, 0.7 - this.afterimage / 0x19), ql.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x8, this.y, this.image_xscale, this.image_yscale, 0x0, 0.4 - this.afterimage / 0x1e)), this.t < 0x6) {
      this.t < 0x5 && ql.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
      let qA = this.t / 0x5;
      qA > 0x1 && (qA = 0x1), ql.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, qA - this.tone / 0x5);
    }
    if (this.t >= 0x1 && this.t <= 0x5) for (let qY = 0x0; qY < 0x2; qY += 0x1) {
      let qe = qG(this.x + qM(this.sprite_width), this.y + qM(this.sprite_height), q2);
      qe.image_xscale = 0x2, qe.image_yscale = 0x2, qe.sprite_index = 'spr_sparestar_anim', qe.image_alpha = 0x2, qe.image_speed = 0.25, qe.hspeed = -0x3, qe.gravity = 0.5, qe.gravity_direction = 0x0, this.star[this.starcount] = qe, this.starcount += 0x1;
    }
    if (this.t >= 0x5 && this.t <= 0x1e) for (let qh = 0x0; qh < this.starcount; qh += 0x1) {
      let qz = this.star[qh];
      qz && !qz.destroyed && (qz.image_angle += 0xa, qz.image_alpha -= 0.1, qz.image_alpha <= 0x0 && qz.instance_destroy());
    }
    if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
      for (let qI = 0x0; qI < this.starcount; qI += 0x1) {
        let qQ = this.star[qI];
        qQ && !qQ.destroyed && qQ.instance_destroy();
      }
      this.instance_destroy();
    }
    this.t += 0x1;
  }
};
qN(qF, 'obj_spareanim'), qt(qF, 'kinds', qR('obj_spareanim', qr)), qt(qF, 'defaultDepth', 0x0);
var qv = qF;
function qC(ql) {
  let qA = qG(ql.x, ql.y, qv);
  qA.sprite_index = ql.sprite_index, qA.sprite_index = ql.sparedsprite, qA.image_index = 0x0, qA.image_xscale = ql.image_xscale, qA.image_yscale = ql.image_yscale;
}
qN(qC, 'scr_spareanim');
var qs = class qj extends p {
  ["create"]() {
    this.damage = 0x0, this.grazepoints = 0x0, this.grazed = 0x0, this.timepoints = 0x0, this.active = 0x0, this.image_alpha = 0x0, this.init = 0x0, this.tracking = 0x1, this.timer = 0x0, this.con = 0x0, this.side = 0x0, this.fade = 0x0, this.locked = 0x0, this.ltimer = 0x0, this.joker = 0x0;
  }
  ["step"]() {
    if (this.init === 0x0 && this.image_alpha < 0x1 && (this.image_alpha += 0.1, this.image_alpha >= 0x1 && (this.init = 0x1, this.active = 0x1)), this.tracking === 0x1) {
      let ql = qf.first('obj_heart');
      ql && ((this.side === 0x1 || this.side === 0x3) && (ql.x + 0xa - this.x >= 0xa && (this.x += 0x3), ql.x + 0xa - this.x <= -0xa && (this.x -= 0x3)), (this.side === 0x0 || this.side === 0x2) && (ql.y + 0xa - this.y >= 0xa && (this.y += 0x3), ql.y + 0xa - this.y <= -0xa && (this.y -= 0x3)));
    }
    this.timer += 0x1, this.timer >= 0x1e && this.con === 0x0 && (this.tracking = 0x0, this.direction = this.side * 0x5a + 0xb4, this.speed = 0x4, this.gravity_direction = this.side * 0x5a, this.gravity = 1.2, this.joker === 0x1 && (this.gravity = 1.6, this.speed = 0x6), this.con = 0x1), this.timer >= 0x28 && (this.gravity = 0x0), this.locked === 0x1 && (this.ltimer += 0x1, this.ltimer >= 0xc && (this.image_alpha -= 0.2, this.active = 0x0), this.ltimer >= 0x11 && this.instance_destroy());
  }
  ["endStep"]() {
    if (!this.destroyed) {
      for (let ql of qf.list.slice()) ql === this || ql.destroyed || this.destroyed || !ql.is('obj_jigsawbullet') || qo(this, ql) && this.collideWith(ql);
    }
  }
  ["collideWith"](ql) {
    if (this.con === 0x1 && ql.con === 0x1 && this.active === 0x1 && ql.active === 0x1 && this.locked === 0x0) {
      this.speed = 0x0, this.locked = 0x1, ql.speed = 0x0, ql.locked = 0x1;
      for (let qA = 0x0; qA < 0x10; qA++) this.side === 0x0 && (this.x >= ql.x - 0x1c && (this.x -= 0x1), this.x >= ql.x - 0x1c && (ql.x += 0x1)), this.side === 0x3 && (this.y >= ql.y - 0x1c && (this.y -= 0x1), this.y >= ql.y - 0x1c && (ql.y += 0x1)), this.side === 0x2 && (this.x <= ql.x + 0x1c && (this.x += 0x1), this.x <= ql.x + 0x1c && (ql.x -= 0x1)), this.side === 0x1 && (this.y <= ql.y + 0x1c && (this.y += 0x1), this.y <= ql.y + 0x1c && (ql.y -= 0x1));
    }
  }
};
qN(qs, 'obj_jigsawbullet'), qt(qs, 'kinds', qR('obj_jigsawbullet', p)), qt(qs, 'defaultDepth', 0x0), qt(qs, 'defaultSprite', 'spr_jigsawbullet');
var qV = qs;
function qa(ql, qA) {
  let qY = ql.type,
    qe = 0x28;
  if (qY === 0x51 && (qe = 0x1e), qY === 0x52 && (qe = 0x1a), qY === 0x53 && (qe = 0x13), qY === 0x54 && (qe = 0xe), ql.btimer >= qe) {
    ql.btimer = 0x0;
    let qh = qA.bsx,
      qz = qA.bsy,
      qI = qA.heart,
      qQ = qI ? qI.x : 0x136,
      qp = qI ? qI.y : 0xa0,
      qx = qm(0x0, 0x1);
    if ((qY === 0x51 || qY === 0x54) && (qx = ql.made, ql.made === 0x0 ? ql.made = 0x1 : ql.made = 0x0), qx === 0x0) {
      let qH = qG(qQ + 0x8, qz - 0x96, qV);
      qH.side = 0x3;
      let qU = qG(qQ + 0x8, qz + 0x96, qV);
      qU.side = 0x1, qY === 0x52 && (qH.timer = 0xa), qY === 0x52 && (qU.timer = 0xa), (qY === 0x53 || qY === 0x54) && (qH.timer = 0xf), (qY === 0x53 || qY === 0x54) && (qU.timer = 0xf), I(ql, qH), I(ql, qU);
    }
    if (qx === 0x1) {
      let qP = qG(qh + 0x96, qp + 0x8, qV);
      qP.side = 0x2;
      let G0 = qG(qh - 0x96, qp + 0x8, qV);
      G0.side = 0x0, qY === 0x52 && (qP.timer = 0xa), qY === 0x52 && (G0.timer = 0xa), qY === 0x53 && (qP.timer = 0xf), qY === 0x53 && (G0.timer = 0xf), I(ql, qP), I(ql, G0);
    }
    qY === 0x53 && qf.with('obj_jigsawbullet', G1 => {
      G1.joker = 0x1;
    });
  }
}
qN(qa, 'jigsawType'), c({
  0x50: qa,
  0x51: qa,
  0x52: qa,
  0x53: qa,
  0x54: qa
});
var qy = class G2 extends h {
  ["create"]() {
    Object.assign(this, {
      'bikeflip': 0x0,
      'becomeflash': 0x0,
      'turnt': 0x0,
      'turns': 0x0,
      'talktimer': 0x0,
      'talkmax': 0x5a,
      'state': 0x0,
      'flash': 0x0,
      'siner': 0x0,
      'fsiner': 0x0,
      'talked': 0x0,
      'attacked': 0x0,
      'hurt': 0x0,
      'hurttimer': 0x0,
      'hurtshake': 0x0,
      'mywriter': 0x1475939f,
      'acting': 0x0,
      'actcon': 0x0,
      'acttimer': 0x0,
      'mercymod': 0x0,
      'maxmercy': 0x270f,
      'warned': 0x0,
      'compliment': 0x0,
      'tired': 0x0,
      'attacks': 0x0,
      'dodgetimer': 0x0,
      'candodge': 0x0,
      'con': 0x0,
      'battlecancel': 0x0,
      'nexttry': 0x0,
      'mytarget': 0x3,
      'image_speed': 0x0,
      'image_xscale': 0x2,
      'image_yscale': 0x2,
      'rtimer': 0x0,
      'shakex': 0x0,
      'tellme': 0x0,
      'thissprite': 'spr_jigsawry_idle'
    }), this.idlesprite = 'spr_jigsawry_idle', this.hurtsprite = 'spr_jigsawry_hurt', this.sparedsprite = 'spr_jigsawry_spared', q9.flag[0x14] = 0x0, this.traitorp = 0x0;
  }
  ["alarmEvent"](ql) {
    ql === 0x4 && (this.con += 0x1);
  }
  ["userEvent"](ql) {
    if (ql === 0xc) {
      q9.monsterx[this.myself] = this.x + this.sprite_width / 0x2, q9.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    if (ql === 0xb) {
      q9.room === 'room_field1' && (q9.flag[0x1f4] += 0x1), q9.room === 'room_field2' && q9.flag[0x32] !== 0x0 && (q9.flag[0x1f5] = q9.flag[0x32]);
      return;
    }
    if (ql === 0xa) {
      qC(this), this.scr_monsterdefeat(), this.instance_destroy();
      return;
    }
  }
  ["step"]() {
    let ql = this.myself;
    if (q9.monster[ql] === 0x1) {
      if (q9.mnfight === 0x1 && this.talked === 0x0) {
        q8(this), qf.exists('obj_darkener') || qG(0x0, 0x0, q5), q9.typer = 0x32, q9.msg = new Array(0x64).fill('\x20');
        let qA = qm(0x0, 0x1, 0x2, 0x3);
        qA === 0x0 && (q9.msg[0x0] = "H... hurting&people is&cool.."), qA === 0x1 && (q9.msg[0x0] = "P... Put up&your d-dukes,&bubbo..."), qA === 0x2 && (q9.msg[0x0] = "F... Fighting?&I love&fighting..."), qA === 0x3 && (q9.msg[0x0] = "I... I have&a rent&payment&to make..."), q9.mercymod[ql] >= 0x64 && ((qA === 0x0 || qA === 0x1) && (q9.msg[0x0] = "I always&wanted a&friend just&like you."), (qA === 0x2 || qA === 0x3) && (q9.msg[0x0] = "We're friends&now, la la~")), this.traitorp === 0x1 && ((qA === 0x0 || qA === 0x1) && (q9.msg[0x0] = "WHADDA WORLD!"), (qA === 0x2 || qA === 0x3) && (q9.msg[0x0] = "I'M TOO YOUNG&TO DIE!!!")), this.traitorp === 0x2 && ((qA === 0x0 || qA === 0x1) && (q9.msg[0x0] = "BARRY!!!&THEY GOT&BARRY!!!"), (qA === 0x2 || qA === 0x3) && (q9.msg[0x0] = "BARRY!!&HANG IN&THERE BARRY!")), this.traitorp = 0x0, q1(this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0;
      }
      if (this.talked === 0x1 && q9.mnfight === 0x1 && (this.rtimer = 0x0, qi() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (qf.with('obj_writer', qY => qY.instance_destroy()), q9.mnfight = 0x2), q9.mnfight === 0x2 && (qf.exists('obj_moveheart') || q4(), qf.exists('obj_growtangle') || qG(0x140, 0xaa, q3))), q9.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          if (q9.flag[0x14] = 0x0, qm(0x0) === 0x0 && (this.tellme = 0x0, qf.with('obj_dbulletcontroller', qe => {
            qe.type >= 0x50 && qe.type <= 0x54 && qf.with('obj_jigsawryenemy', qh => {
              qh.tellme = 0x1;
            });
          }), this.tellme === 0x0)) {
            let qe = qG(this.x, this.y, l);
            qe.grazepoints = 0x4, qe.timepoints = 0x2;
            let qh = 0x0;
            for (let qz = 0x0; qz < 0x3; qz += 0x1) q9.monstertype[qz] === 0xf && q9.monster[qz] === 0x1 && (qh += 0x1);
            qe.type = 0x50 + qh, qe.target = this.mytarget, qe.damage = q9.monsterat[ql] * 0x5;
          }
          this.turns += 0x1, q9.turntimer = 0x8c, this.attacked = 0x1, q9.typer = 0x6, q9.fc = 0x0;
          let qY = qm(0x0, 0x1, 0x2, 0x3, 0x4);
          qY === 0x0 && (q9.battlemsg[0x0] = "* Jigsawry is pretending to march."), qY === 0x1 && (q9.battlemsg[0x0] = "* Jigsawry is trying to calculate this month's rent."), qY === 0x2 && (q9.battlemsg[0x0] = "* Jigsawry thought of its boss and felt afraid."), qY === 0x3 && (q9.battlemsg[0x0] = "* Jigsawry is wishing it could quit its job."), qY === 0x4 && (q9.battlemsg[0x0] = "* Smells like cardboard."), q9.monsterstatus[ql] === 0x1 && (q9.battlemsg[0x0] = "* Jigsawry looks exhausted."), q9.monsterhp[ql] <= q9.monstermaxhp[ql] / 0x3 && (q9.battlemsg[0x0] = "* Jigsawry's edges are fraying."), q9.mercymod[ql] >= q9.mercymax[ql] && (q9.msg[0x0] = "* Jigsawry looks happy about its life.");
        } else q9.turntimer = 0x78;
      }
      q9.mnfight === 0x2 && q9.turntimer <= 0x1 && (this.battlecancel === 0x1 && (q9.mercymod[ql] = 0x3e7), this.battlecancel === 0x2 && (qf.with('obj_battlecontroller', qI => {
        qI.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3));
    }
    if (q9.myfight === 0x3) {
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, q9.msg = new Array(0x64).fill('\x20'), q9.msg[0x0] = "* JIGSAWRY - AT 5 DF 0&* This mousenary is only fighting to make ends meet.../%", q0()), this.acting === 0x2 && this.actcon === 0x0 && (q9.msg = new Array(0x64).fill('\x20'), q9.msg[0x0] = "* You barely lifted a finger^1, and.../%", q0(), this.actcon = 0x3), this.actcon === 0x3 && !qf.exists('obj_writer')) {
        qf.with('obj_jigsawryenemy', qQ => {
          q7(qQ.myself, 0x64);
        });
        let qI = qm(0x0, 0x1, 0x2, 0x3);
        q9.typer = 0x32, q9.msg = new Array(0x64).fill('\x20'), qI === 0x0 && (q9.msg[0x0] = "Of course&I'll be&your friend!/%"), qI === 0x1 && (q9.msg[0x0] = "Alright!&You win!&Let's be&friends!/%"), qI === 0x2 && (q9.msg[0x0] = "Friends?&I was thinking&the same&thing!/%"), qI === 0x3 && (q9.msg[0x0] = "... well,&if we HAVE&to be&friends.../%"), q1(this.x - 0xa0, this.y, 0x3), this.actcon = 0x1;
      }
      if (this.acting === 0x3 && this.actcon === 0x0) {
        this.actcon = 0x1, q9.msg = new Array(0x64).fill('\x20'), q9.msg[0x0] = "* You and Ralsei warned Jigsawry about Susie^1.&* The enemy went on guard.../%", q6() > 0x1 && (q9.msg[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%");
        for (let qQ = 0x0; qQ < 0x3; qQ += 0x1) q9.monstercomment[qQ] = "(Warned)", q9.automiss[qQ] = 0x1;
        q0();
      }
      this.actcon === 0x1 && !qf.exists('obj_writer') && (this.actcon = 0x0, e());
    }
  }
  ["draw"](ql) {
    let qA = this.myself;
    this.state === 0x3 && (q9.mercymod[qA] = 0x0, this.traitorp = 0x1, q9.flag[0x14] = 0x1, qf.with('obj_jigsawryenemy', qY => {
      qY.traitorp === 0x0 && (qY.traitorp = 0x2), q9.mercymod[qY.myself] = 0x0;
    }), q9.monsterhp[qA] <= q9.monstermaxhp[qA] - 0x14 && (q9.monsterstatus[qA] = 0x1, q9.monstercomment[qA] === '\x20' && (q9.monstercomment[qA] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (q9.monster[qA] === 0x0 && qb(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), ql.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, q9.mercymod[qA] >= q9.mercymax[qA] && (this.thissprite = this.sparedsprite), q9.flag[0x14] === 0x1 && (this.thissprite = this.hurtsprite), ql.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, ql.draw_sprite_white(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, -qq(this.fsiner / 0x5) * 0.4 + 0.6))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
qN(qy, 'obj_jigsawryenemy'), qt(qy, 'kinds', qR('obj_jigsawryenemy', h)), qt(qy, 'defaultDepth', 0x5a), qt(qy, 'defaultSprite', 'spr_jigsawry_idle');
var qc = qy,
  qW = 0x0;
function qT(ql) {
  if (typeof window > 'u' || !qB.DR || !Array.isArray(qB.DR.FIGHTS) || qW) return null;
  qW = 0x1;
  try {
    for (let qA of qB.DR.FIGHTS) {
      let qY = null;
      try {
        qY = qA && qA.monsters;
      } catch {
        qY = null;
      }
      if (Array.isArray(qY)) {
        for (let qe of qY) if (qe && qe.type === ql && qe.cls && typeof qe.setup == 'function') return qe;
      }
    }
  } finally {
    qW = 0x0;
  }
  return null;
}
qN(qT, 'resolveMonster');
var qX = {
    'id': 'jigsawry_smorgasboard',
    'name': 'Smorgasboard',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Smorgasboard.#Jigsawry + Rudinn + Hathy.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'battlemsg': "* Smorgasboard.",
    'encounterno': 0x17,
    'music': 'battle',
    get 'monsters'() {
      let ql = [{
          'cls': qc,
          'type': 0xf,
          'x': 0x1e0,
          'y': 0x14,
          'setup': qD
        }],
        qA = qT(0x5);
      qA && ql.push({
        'cls': qA.cls,
        'type': 0x5,
        'x': 0x1f4,
        'y': 0x78,
        'setup': qA.setup
      });
      let qY = qT(0x6);
      return qY && ql.push({
        'cls': qY.cls,
        'type': 0x6,
        'x': 0x1cc,
        'y': 0xdc,
        'setup': qY.setup
      }), ql;
    }
  },
  qd = [{
    'id': 'jigsawry',
    'name': 'Jigsawry',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Jigsawry.#Puzzle-piece pincers.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': qc,
      'type': 0xf,
      'x': 0x1e0,
      'y': 0x8c,
      'setup': qD
    }],
    'battlemsg': "* Jigsawry drew near!",
    'encounterno': 0x15,
    'music': 'battle'
  }, {
    'id': 'jigsawry_board',
    'name': "Jigsawry x3",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "A board of Jigsawrys.#Three at once.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': qc,
      'type': 0xf,
      'x': 0x1e0,
      'y': 0x14,
      'setup': qD
    }, {
      'cls': qc,
      'type': 0xf,
      'x': 0x1f4,
      'y': 0x78,
      'setup': qD
    }, {
      'cls': qc,
      'type': 0xf,
      'x': 0x1cc,
      'y': 0xdc,
      'setup': qD
    }],
    'battlemsg': "* A board of Jigsawrys blocked the way!",
    'encounterno': 0x16,
    'music': 'battle'
  }, qX];
qg(qc, "G.mnfight = 2;");
export { qJ as a, qZ as b, qD as c, qK as d, qb as e, qv as f, qC as g, qV as h, qc as i, qd as j, qw as k };