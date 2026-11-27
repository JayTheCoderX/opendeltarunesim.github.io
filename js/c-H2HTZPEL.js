import { b as P0, c as P1 } from './c-O567UJ4Y.js';
import { G as P2, s as P3 } from './c-QFDZPUX2.js';
import { a as P4, c as P5, f as P6, h as P7, i as P8 } from './c-DTW63MWW.js';
import { f as P9, g as PP, i as Pj } from './c-3ELH3LBH.js';
import { a as Pk, f as PM, n as Pf, p as Px } from './c-MYK6C3LF.js';
import { H as PA, M as PO, Q as Pb, g as Pa, n as PK } from './c-ZQQWH6UG.js';
import { B, C as Po, Ib as PD, Ra as Pm, Ta as PV, na as Pu, o as PX, pb as Pw, qb as PG, r as Pq, s as PW, t as PZ, xb as PH } from './c-PBMEVLU6.js';
import { a as Pe, c as PS, e as PI, g as PF, l as PB } from './c-XSSGDLV7.js';
var Pn = {};
PS(Pn, {
  'FIGHTS': () => j6,
  'SOUNDS': () => PL,
  'SPRITES': () => Ps,
  'obj_defeatanim': () => PC,
  'obj_diamondenemy': () => Pc,
  'obj_dknight_slasher': () => Pz,
  'obj_rudinnranger': () => Pv,
  'obj_spareanim': () => Pl,
  'setupRangerStats': () => Pi,
  'setupStats': () => PY
}), PB();
var Ps = ['spr_diamondm_idle', 'spr_diamondm_hurt', 'spr_diamondm_spared', 'spr_daimond_knight_idle', 'spr_diamond_knight_hurt', 'spr_diamond_knight_spared', 'spr_diamond_knight_slash', 'spr_diamondswordbullet', 'spr_diamondbullet', 'spr_diamondbullet_form', 'spr_diamondbullet_vert', 'spr_defeatsweat', 'spr_sparestar_anim', 'spr_battleblcon_long'],
  PL = ['snd_defeatrun', 'snd_spare'],
  Pr = Pe(() => {
    Pa.msg = new Array(0x64).fill('\x20');
  }, 'newmsg'),
  Py = Pe((j9, jP) => {
    Pa.msg[j9] = "\\TX \\F0 \\E" + jP + " \\FS \\TS %";
  }, 'scr_susface'),
  Pt = Pe((j9, jP) => {
    Pa.msg[j9] = "\\TX \\F0 \\E" + jP + " \\FR \\TR %";
  }, 'scr_ralface');
function PN() {
  let j9 = [],
    jP = '';
  for (let jj = 0x0; jj < 0x64; jj++) {
    let jk = Pa.msg[jj];
    if (jk === void 0x0 || jk === '\x20' || jk === '') break;
    if (/^\\TX .*%$/.test(jk)) {
      let jM = /\\E([0-9A-Fa-f])/.exec(jk);
      jP = jM ? '\x5cE' + jM[0x1] : '';
      continue;
    }
    j9.push(jP + jk), jP = '';
  }
  Pr(), j9.forEach((jf, jx) => {
    Pa.msg[jx] = jf;
  });
}
Pe(PN, 'packFaces');
function PY(j9) {
  Pa.monstername[j9] = 'Rudinn', Pa.monstermaxhp[j9] = 0x78, Pa.monsterhp[j9] = 0x78, Pa.monsterat[j9] = 0x5, Pa.monsterdf[j9] = 0x0, Pa.monsterexp[j9] = 0x0, Pa.monstergold[j9] = 0x1e, Pa.sparepoint[j9] = 0xa, Pa.mercymod[j9] = 0x0, Pa.mercymax[j9] = 0x64, Pa.canact[j9][0x0] = 0x1, Pa.actname[j9][0x0] = 'Check', Pa.canact[j9][0x1] = 0x1, Pa.actname[j9][0x1] = 'Convince', Pa.canact[j9][0x2] = 0x1, Pa.actname[j9][0x2] = 'Lecture', PK(0x2) && Pa.plot < 0x96 && (Pa.canact[j9][0x3] = 0x1, Pa.actname[j9][0x3] = 'Warning', Pa.actactor[j9][0x3] = 0x3);
}
Pe(PY, 'setupStats');
function Pi(j9) {
  Pa.monstername[j9] = "Rudinn Ranger", Pa.monstermaxhp[j9] = 0xaa, Pa.monsterhp[j9] = 0xaa, Pa.monsterat[j9] = 0x8, Pa.monsterdf[j9] = 0x0, Pa.monsterexp[j9] = 0x0, Pa.monstergold[j9] = 0x2d, Pa.sparepoint[j9] = 0x19, Pa.mercymod[j9] = 0x0, Pa.mercymax[j9] = 0x64, Pa.canact[j9][0x0] = 0x1, Pa.actname[j9][0x0] = 'Check', Pa.canact[j9][0x1] = 0x1, Pa.actname[j9][0x1] = 'Convince', Pa.canact[j9][0x2] = 0x1, Pa.actname[j9][0x2] = 'Compliment', Pa.actactor[j9][0x2] = 0x2;
}
Pe(Pi, 'setupRangerStats');
var PQ = class jA extends Pw {
  ["create"]() {
    this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], PV('snd_spare'), Pm('snd_spare');
  }
  ["draw"](j9) {
    let jP = this.sprite_index,
      jj = this.image_index,
      jk = this.image_xscale,
      jM = this.image_yscale;
    if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, j9.draw_sprite_white(jP, jj, this.x + this.afterimage * 0x4, this.y, jk, jM, 0x0, 0.7 - this.afterimage / 0x19), j9.draw_sprite_white(jP, jj, this.x + this.afterimage * 0x8, this.y, jk, jM, 0x0, 0.4 - this.afterimage / 0x1e)), this.t < 0x6) {
      this.t < 0x5 && j9.draw_sprite_ext(jP, jj, this.x, this.y, jk, jM, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
      let jf = this.t / 0x5;
      jf > 0x1 && (jf = 0x1), j9.draw_sprite_white(jP, jj, this.x, this.y, jk, jM, 0x0, jf - this.tone / 0x5);
    }
    if (this.t >= 0x1 && this.t <= 0x5) for (let jx = 0x0; jx < 0x2; jx += 0x1) {
      let jO = PD(this.x + PX(this.sprite_width), this.y + PX(this.sprite_height), Pk);
      jO.image_xscale = 0x2, jO.image_yscale = 0x2, jO.sprite_index = 'spr_sparestar_anim', jO.image_alpha = 0x2, jO.image_speed = 0.25, jO.hspeed = -0x3, jO.gravity = 0.5, jO.gravity_direction = 0x0, this.star[this.starcount] = jO, this.starcount += 0x1;
    }
    if (this.t >= 0x5 && this.t <= 0x1e) for (let jb = 0x0; jb < this.starcount; jb += 0x1) {
      let ja = this.star[jb];
      ja && !ja.destroyed && (ja.image_angle += 0xa, ja.image_alpha -= 0.1, ja.image_alpha <= 0x0 && ja.instance_destroy());
    }
    if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
      for (let jK = 0x0; jK < this.starcount; jK += 0x1) {
        let jo = this.star[jK];
        jo && !jo.destroyed && jo.instance_destroy();
      }
      this.instance_destroy();
    }
    this.t += 0x1;
  }
};
Pe(PQ, 'obj_spareanim'), PI(PQ, 'kinds', PG('obj_spareanim', Pw)), PI(PQ, 'defaultDepth', 0x0);
var Pl = PQ,
  Pp = class jD extends Pw {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, Pm('snd_defeatrun');
    }
    ["step"]() {
      this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
    }
    ["draw"](j9) {
      this.t === 0x0 && this.draw_self(j9);
      let jP = 0x0;
      if (this.g <= 0x5 && (jP = 0x1), this.g >= 0x9 && this.g <= 0xd && (jP = 0x1), jP === 0x1 && j9.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (let jj = 0x0; jj <= 0x50; jj += 0x1) j9.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * jj, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.4 - this.t / 0x8 + jj / 0xc8);
        this.t >= 0xf && this.instance_destroy();
      }
    }
  };
Pe(Pp, 'obj_defeatanim'), PI(Pp, 'kinds', PG('obj_defeatanim', Pw)), PI(Pp, 'defaultDepth', 0x0);
var PC = Pp;
function PE(j9) {
  let jP = PD(j9.x, j9.y, PC);
  jP.sprite_index = j9.sprite_index, jP.sprite_index = j9.hurtsprite, jP.image_index = 0x0, jP.image_xscale = j9.image_xscale, jP.image_yscale = j9.image_yscale, j9.instance_destroy();
}
Pe(PE, 'scr_defeatrun');
var Ph = class jm extends P3 {
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
      'rtimer': 0x0,
      'shakex': 0x0
    }), this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2;
  }
  ["setupFn"](j9) {}
  ["defeatedEvent"]() {}
  ["talk"]() {}
  ["attack"]() {}
  ["actStep"]() {}
  ["actDone"]() {}
  ["onDefeatRun"]() {}
  get ["tiredDiv"]() {
    return 0x3;
  }
  ["userEvent"](j9) {
    if (j9 === 0xc) {
      Pa.monsterx[this.myself] = this.x + this.sprite_width / 0x2, Pa.monstery[this.myself] = this.y + this.sprite_height / 0x2, this.setupFn(this.myself);
      return;
    }
    if (j9 === 0xb) {
      this.defeatedEvent();
      return;
    }
    if (j9 === 0xa) {
      this.spared();
      return;
    }
    super.userEvent(j9);
  }
  ["spared"]() {
    let j9 = PD(this.x, this.y, Pl);
    j9.sprite_index = this.sparedsprite, j9.image_index = 0x0, j9.image_xscale = this.image_xscale, j9.image_yscale = this.image_yscale, this.scr_monsterdefeat(), this.instance_destroy();
  }
  ["step"]() {
    let j9 = this.myself;
    Pa.monster[j9] === 0x1 && (Pa.mnfight === 0x1 && this.talked === 0x0 && (Pb(this), PH.exists('obj_darkener') || PD(0x0, 0x0, Px), Pa.typer = 0x32, Pr(), this.talk(), Pj(this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Pa.mnfight === 0x1 && (this.rtimer = 0x0, Pu() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (PH.with('obj_writer', jP => jP.instance_destroy()), Pa.mnfight = 0x2), Pa.mnfight === 0x2 && (PH.exists('obj_moveheart') || Pf(), PH.exists('obj_growtangle') || PD(0x140, 0xaa, PM))), Pa.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? this.attack() : Pa.turntimer = 0x78), Pa.mnfight === 0x2 && Pa.turntimer <= 0x1 && (this.battlecancel === 0x1 && (Pa.mercymod[j9] = 0x3e7), this.battlecancel === 0x2 && (PH.with('obj_battlecontroller', jP => {
      jP.noreturn = 0x1;
    }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, this.alarm[0x4] = 0xa), this.con === 0x3 && (Pa.typer = 0x32, Pa.mercymod[j9] = 0x3e7, Pr(), Pa.msg[0x0] = "Alright^1,&you convinced&me!!/%", Pj(this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !PH.exists('obj_writer') && (this.hspeed = 0xf, this.con = 0x5, this.alarm[0x4] = 0xf, PH.with('obj_battlecontroller', jP => {
      jP.alarm[0x2] = 0x11;
    })), this.con === 0x6 && (PH.with('obj_battlecontroller', jP => {
      jP.noreturn = 0x0;
    }), this.scr_monsterdefeat(), this.instance_destroy(), this.con = 0x7), Pa.myfight === 0x3 && (this.actStep(), this.actTail()), Pa.myfight === 0x7 && (this.hspeed = 0xf);
  }
  ["alarmEvent"](j9) {
    j9 === 0x4 && (this.con += 0x1);
  }
  ["actTail"]() {
    this.actcon === 0x1 && !PH.exists('obj_writer') && (this.actDone(), this.actcon = 0x0, P2()), this.actcon === 0xa && !PH.exists('obj_writer') && (Pa.typer = 0x32, Pr(), Pa.msg[0x0] = "You kidding?&I can't quit.&Stopping you&is my job!/%", Pj(this.x - 0xa0, this.y, 0x3), this.actcon = 0xb), this.actcon === 0xb && !PH.exists('obj_writer') && (Pa.typer = 0x2d, Pa.fc = 0x2, Pa.fe = 0x8, Pr(), Pa.msg[0x0] = "* Really^1?&* What do you spend your money on?/%", P9(), this.actcon = 0xc), this.actcon === 0xc && !PH.exists('obj_writer') && (Pa.typer = 0x32, Pr(), Pa.msg[0x0] = "I'm a normal&person./", Pa.msg[0x1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%", Pj(this.x - 0xa0, this.y, 0x3), this.actcon = 0xe), this.actcon === 0xe && !PH.exists('obj_writer') && (Pa.typer = 0x2d, Pa.fc = 0x2, Pa.fe = 0x3, Pr(), Pa.msg[0x0] = "* (Kris^1, let's try CONVINCING them again...)/%", P9(), this.nexttry = 0x1, this.actcon = 0x1);
  }
  ["draw"](j9) {
    let jP = this.myself;
    if (this.state === 0x3 && (Pa.monsterhp[jP] <= Pa.monstermaxhp[jP] / this.tiredDiv && (Pa.monsterstatus[jP] = 0x1, Pa.monstercomment[jP] === '\x20' && (Pa.monstercomment[jP] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Pa.monster[jP] === 0x0 && (this.onDefeatRun(), PE(this)), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), j9.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0) {
      this.siner += 0x1;
      let jj = this.idlesprite;
      Pa.mercymod[jP] >= Pa.mercymax[jP] && (jj = this.sparedsprite), j9.draw_sprite_ext(jj, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, j9.draw_sprite_white(jj, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, -Po(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
Pe(Ph, 'obj_rudinnbase'), PI(Ph, 'kinds', PG('obj_rudinnbase', P3)), PI(Ph, 'defaultDepth', 0x5a);
var PJ = Ph,
  PU = class jV extends PJ {
    ["create"]() {
      super.create(), this.idlesprite = 'spr_diamondm_idle', this.hurtsprite = 'spr_diamondm_hurt', this.sparedsprite = 'spr_diamondm_spared';
    }
    get ["tiredDiv"]() {
      return 0x3;
    }
    ["setupFn"](j9) {
      PY(j9);
    }
    ["defeatedEvent"]() {}
    ["onDefeatRun"]() {
      let j9 = this.myself;
      Pa.flag[0x33 + j9] === 0x5 && (Pa.flag[0x20b] += 0x1), Pa.flag[0x208] += 0x1;
    }
    ["talk"]() {
      let j9 = Pq(0x0, 0x1, 0x2, 0x3);
      j9 === 0x0 && (Pa.msg[0x0] = "Long live&the guy&who pays us!"), j9 === 0x1 && (Pa.msg[0x0] = "Shine,&shine"), j9 === 0x2 && (Pa.msg[0x0] = "I'm just a&normal&person."), j9 === 0x3 && (Pa.msg[0x0] = "Face my&Diamond&Cutter!"), this.acting === 0x2 && (Pa.msg[0x0] = "Yeah I&guess that&makes&sense."), this.acting === 0x3 && (Pa.msg[0x0] = "(Yawn)...&What? OK...");
    }
    ["attack"]() {
      let j9 = this.myself,
        jP = Pq(0x0, 0x1);
      if (jP === 0x0) {
        let jj = PD(this.x, this.y, P1);
        jj.type = 0x0, jj.target = this.mytarget, jj.damage = Pa.monsterat[j9] * 0x5;
      } else {
        let jk = PD(this.x, this.y, P1);
        jk.type = 0x1, jk.target = this.mytarget, jk.damage = Pa.monsterat[j9] * 0x5;
      }
      this.turns += 0x1, Pa.turntimer = 0x8c, this.attacked = 0x1, Pa.typer = 0x6, Pa.fc = 0x0, jP = Pq(0x0, 0x1, 0x2, 0x3, 0x4), jP === 0x0 && (Pa.battlemsg[0x0] = "* Rudinn is glimmering plainly."), jP === 0x1 && (Pa.battlemsg[0x0] = "* Rudinn has no strong opinions one way or the other."), jP === 0x2 && (Pa.battlemsg[0x0] = "* Rudinn thinks about elaborate stones."), jP === 0x3 && (Pa.battlemsg[0x0] = "* Rudinn dislikes its boss^1, but doesn't care enough to quit."), jP === 0x4 && (Pa.battlemsg[0x0] = "* Smells like jewelry."), Pa.monsterstatus[j9] === 0x1 && (Pa.battlemsg[0x0] = "* Rudinn is starting to fall asleep."), Pa.monsterhp[j9] <= Pa.monstermaxhp[j9] / 0x3 && (Pa.battlemsg[0x0] = "* Rudinn's luster begins to fade."), Pa.mercymod[j9] >= Pa.mercymax[j9] && (Pa.msg[0x0] = "* Rudinn is alright with not fighting.");
    }
    ["actStep"]() {
      let j9 = this.myself;
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Pr(), Pa.msg[0x0] = "* RUDINN - AT 6 DF 0&* This ambivalent diamond isn't any girl's best friend./%", PP()), this.acting === 0x2 && this.actcon === 0x0 && (this.nexttry === 0x1 && (Pa.flag[0xd0] = 0x1), Pr(), Pa.msg[0x0] = "* You told Rudinn to quit fighting^1.&* It was utterly swayed./%", PO(j9, 0x64), PP(), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
        Pr(), Pa.msg[0x0] = "* You lectured the enemies on the importance of kindness./", Pa.msg[0x1] = "* The enemies became \\cBTIRED\\cW.../%";
        for (let jP = 0x0; jP < 0x3; jP += 0x1) Pa.monstercomment[jP] = "(Tired)", Pa.monsterstatus[jP] = 0x1;
        PO(j9, 0x32), PP(), this.actcon = 0x1;
      }
      if (this.acting === 0x4 && this.actcon === 0x0) {
        this.actcon = 0x1, Pr(), Pa.msg[0x0] = "* You and Ralsei warned Rudinn about Susie^1.&* The enemy went on guard.../%", PA() > 0x1 && (Pa.msg[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%");
        for (let jj = 0x0; jj < 0x3; jj += 0x1) Pa.monstercomment[jj] = "(Warned)", Pa.automiss[jj] = 0x1;
        PP();
      }
    }
  };
Pe(PU, 'obj_diamondenemy'), PI(PU, 'kinds', PG('obj_diamondenemy', PJ)), PI(PU, 'defaultDepth', 0x5a), PI(PU, 'defaultSprite', 'spr_diamondm_idle');
var Pc = PU,
  Pg = class ju extends PJ {
    ["create"]() {
      super.create(), this.convinced = 0x0, this.complimented = 0x0, this.idlesprite = 'spr_daimond_knight_idle', this.hurtsprite = 'spr_diamond_knight_hurt', this.sparedsprite = 'spr_diamond_knight_spared';
    }
    get ["tiredDiv"]() {
      return 0x2;
    }
    ["setupFn"](j9) {
      Pi(j9);
    }
    ["defeatedEvent"]() {}
    ["talk"]() {
      let j9 = Pq(0x0, 0x1, 0x2, 0x3);
      j9 === 0x0 && (Pa.msg[0x0] = "Long live&the king!"), j9 === 0x1 && (Pa.msg[0x0] = "Glimmer&glammor"), j9 === 0x2 && (Pa.msg[0x0] = "Perish,&Lightners!"), j9 === 0x3 && (Pa.msg[0x0] = "I'm the,&diamond,&here's the&rough!"), this.acting === 0x2 && (Pa.msg[0x0] = "Enough!&You can't&convince&me!"), this.acting === 0x3 && ((j9 === 0x0 || j9 === 0x1) && (Pa.msg[0x0] = "No one ever&said THAT to&me before&..."), (j9 === 0x2 || j9 === 0x3) && (Pa.msg[0x0] = "The King&never said&THAT to me&before..."), this.complimented >= 0x2 && (Pa.msg[0x0] = "Yeah it&would be&weird."));
    }
    ["attack"]() {
      let j9 = this.myself,
        jP = PH.number('obj_rudinnranger');
      if (jP === 0x63) {
        let jj = PD(this.x, this.y, P1);
        jj.type = 0x1, jj.target = this.mytarget, jj.damage = Pa.monsterat[j9] * 0x5, jj.ratio = 0x1;
      } else {
        this.visible = false;
        let jk = PD(this.x, this.y, Pz);
        jk.inv = 0x3c, jk.target = this.mytarget, jk.grazepoints = 0x6, jk.timepoints = 0x2, jk.active = 0x0, jk.creator = this, jk.damage = Pa.monsterat[j9] * 0x5;
      }
      this.turns += 0x1, Pa.turntimer = 0xb4, this.attacked = 0x1, Pa.typer = 0x6, Pa.fc = 0x0, jP = Pq(0x0, 0x1, 0x2, 0x3, 0x4), jP === 0x0 && (Pa.battlemsg[0x0] = "* Rudinn Ranger gleams gallantly."), jP === 0x1 && (Pa.battlemsg[0x0] = "* Rudinn Ranger puts a power limiter on its feelings."), jP === 0x2 && (Pa.battlemsg[0x0] = "* Rudinn Ranger fantasizes about divine gems."), jP === 0x3 && (Pa.battlemsg[0x0] = "* Rudinn Ranger pledges allegiance."), jP === 0x4 && (Pa.battlemsg[0x0] = "* Smells like crystal."), Pa.monsterstatus[j9] === 0x1 && (Pa.battlemsg[0x0] = "* Rudinn Ranger is starting to fall asleep."), Pa.monsterhp[j9] <= Pa.monstermaxhp[j9] / 0x3 && (Pa.battlemsg[0x0] = "* Rudinn Ranger's luster begins to fade."), Pa.mercymod[j9] >= Pa.mercymax[j9] && (Pa.msg[0x0] = "* Rudinn Ranger seems totally flattered.");
    }
    ["actDone"]() {
      this.acting === 0x3 && PO(this.myself, 0x64);
    }
    ["actStep"]() {
      let j9 = this.myself;
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Pr(), Pa.msg[0x0] = "* RUDINN RANGER - AT 8 DF 0&* Ideally multicolored, but they all wanted to be red./%", PP()), this.acting === 0x2 && this.actcon === 0x0 && (Pr(), Pa.msg[0x0] = "* You tried to explain why fighting is bad./", Pa.msg[0x1] = "* But Rudinn Ranger just became \\cBTIRED\\cW.../%", Pa.monstercomment[j9] = "(Tired)", Pa.monsterstatus[j9] = 0x1, PO(j9, 0x32), PP(), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
        Pr(), Pa.msg[0x0] = "* Susie COMPLIMENTed the enemy...?/", Py(0x1, 0x2);
        let jP = Pq(0x0, 0x1, 0x2);
        jP === 0x0 && (Pa.msg[0x2] = "* \"Your outfit is NOT disgusting.\"/%"), jP === 0x1 && (Pa.msg[0x2] = "* \"Please keep body tackling the soda machine.\"/%"), jP === 0x2 && (Pa.msg[0x2] = "* Nice^1, you guys look like you're gonna kill me./%"), Pa.flag[0x1f7] === 0x0 && (Pa.msg[0x0] = "* You told Susie to COMPLIMENT the enemy!/", Py(0x1, 0x0), Pa.msg[0x2] = "* ... uhhh^1, are you serious?/", Pa.msg[0x3] = "\\E2* What good can I say about someone trying to kill us?/", Pt(0x4, 0x6), Pa.msg[0x5] = "* Aww^1, Susie..^1. if you're stuck^1, why not try.../", Pa.msg[0x6] = "* ... saying something you wish someone'd say to you?/", Py(0x7, 0x0), Pa.msg[0x8] = "* .../", Pa.msg[0x9] = "\\E2* \"You are unbanned from free ham sandwich day\"/%", Pa.flag[0x1f7] = 0x1), this.complimented >= 0x1 && (Pa.msg[0x0] = "* Susie actively didn't COMPLIMENT the enemy!/", Py(0x1, 0x0), Pa.msg[0x2] = "* Look^1, it's just gonna be weird if I keep going./%", this.complimented = 0x2), PN(), PP(), this.actcon = 0x1, this.complimented === 0x0 && (this.complimented = 0x1);
      }
    }
  };
Pe(Pg, 'obj_rudinnranger'), PI(Pg, 'kinds', PG('obj_rudinnranger', PJ)), PI(Pg, 'defaultDepth', 0x5a), PI(Pg, 'defaultSprite', 'spr_daimond_knight_idle');
var Pv = Pg,
  PT = class jX extends P5 {
    ["create"]() {
      Object.assign(this, {
        'con': 0x0,
        'movecon': 0x0,
        'movetimer': 0x0,
        'timer': 0x0,
        'image_speed': 0x0,
        'image_index': 0x0,
        'image_xscale': 0x2,
        'image_yscale': 0x2,
        'movesiner': 0x0,
        'movefactor': 0x0,
        'type': 0x0,
        'creator': null,
        'damage': 0x0,
        'grazepoints': 0x0,
        'timepoints': 0x0,
        'inv': 0x3c,
        'target': 0x0,
        'active': 0x0,
        'throwernumber': 0x1,
        'thrown': 0x0
      });
    }
    ["step"]() {
      if (this.con === 0x0 && (this.throwernumber = PH.number('obj_dknight_slasher'), this.con = 0xc, this.movecon = 0x4, this.timer = 0x0, this.thrown = 0x0, this.image_index = 0x0), this.movecon === 0x4 && (this.movesiner += 0x1, Pa.turntimer >= 0x1e && this.movefactor < 0x1 && (this.movefactor += 0.1), this.y = this.ystart + B(this.movesiner / 0x10) * 0x28 * this.movefactor, Pa.turntimer <= 0x1e && (this.movefactor > 0x0 ? this.movefactor -= 0.1 : this.movefactor = 0x0)), this.con === 0xa && (this.timer = 0x0, this.thrown = 0x0, this.image_index = 0x0, Pa.turntimer > 0xf && (this.con = 0xb)), this.con === 0xb) {
        if (this.image_index += 0.334, this.image_index >= 0x4 && this.thrown === 0x0) {
          let j9 = PD(this.x + 0x6, this.y + 0x22, P6);
          if (j9.siner = this.movesiner, P4(this, j9), j9.throwernumber = this.throwernumber, !j9.destroyed) {
            j9.active = 0x1, j9.sprite_index = 'spr_diamondswordbullet', j9.image_xscale = 0x2, j9.image_yscale = 0x2;
            let jP = PH.first('obj_heart');
            j9.move_towards_point(jP ? jP.x + 0x8 : 0x140, jP ? jP.y + 0x8 : 0xaa, 0x9 + B(j9.siner / 0xa) * 0x4), j9.throwernumber === 0x2 && (j9.speed *= 0.85), j9.throwernumber === 0x3 && (j9.speed *= 0.7), j9.direction += 0x5 - PX(0xa), j9.image_angle = j9.direction, j9.depth = this.depth + 0x1;
          }
          this.thrown = 0x1;
        }
        this.image_index >= 0x6 && (this.con = 0xc, this.timer = 0x0);
      }
      this.con === 0xc && (this.timer += 0x1, this.timer >= this.throwernumber * 0x3 && (this.con = 0xa));
    }
    ["destroy"]() {
      this.creator && !this.creator.destroyed && (this.creator.visible = true);
    }
  };
Pe(PT, 'obj_dknight_slasher'), PI(PT, 'kinds', PG('obj_dknight_slasher', P5)), PI(PT, 'defaultDepth', 0x0), PI(PT, 'defaultSprite', 'spr_diamond_knight_slash');
var Pz = PT;
P0({
  0x0: (j9, {
    heart: jP
  }) => {
    if (j9.btimer >= j9.timermax * j9.ratio) {
      j9.btimer = 0x0;
      let jj = 0x1e + PX(0x78),
        jk = 0x8c + PX(0x50),
        jM = PW(jk, jj),
        jf = PZ(jk, jj),
        jx = jP ? jP.x : 0x140,
        jO = jP ? jP.y : 0xaa,
        jb = PD(jx + 0x8 + jM, jO + 0x8 + jf, P8);
      jb.y < 0x28 && (jb.y = 0x28), jb.damage = j9.damage, jb.target = j9.target;
    }
  },
  0x1: (j9, {
    heart: jP
  }) => {
    if (j9.btimer >= 0x9 * j9.ratio) {
      j9.btimer = 0x0;
      let jj = (0x8c + PX(0x28)) * j9.side,
        jk = -0x64 + PX(0xc8);
      Pq(0x0, 0x1, 0x2, 0x3) === 0x3 && (jk = -0xa + PX(0x14));
      let jM = jP ? jP.x : 0x140,
        jf = jP ? jP.y : 0xaa,
        jx = PD(jM + 0x8 + jk, jf + 0x8 + jj, P7);
      jx.damage = j9.damage, jx.target = j9.target;
    }
  }
});
var PR = {};
for (let [jw, jG] of [['hathy', "./hathy.js"], ['jigsawry', "./jigsawry.js"], ['rabbick', "./rabbick.js"]]) Promise.resolve().then(() => j7(jG)).then(j9 => {
  PR[jw] = j9;
}).catch(() => {});
var Pd = Pe((j9, jP) => ({
    'cls': Pc,
    'type': 0x5,
    'x': j9,
    'y': jP,
    'setup': PY
  }), 'R'),
  j0 = Pe((j9, jP) => ({
    'cls': Pv,
    'type': 0x16,
    'x': j9,
    'y': jP,
    'setup': Pi
  }), 'RR');
function j1(j9, jP, jj, jk, jM, jf) {
  let jx = PR[j9];
  return !jx || !jx[jP] || !jx[jj] ? null : {
    'cls': jx[jP],
    'type': jk,
    'x': jM,
    'y': jf,
    'setup': jx[jj]
  };
}
Pe(j1, 'sib');
var j2 = Pe((j9, jP) => j1('hathy', 'obj_heartenemy', 'setupStats', 0x6, j9, jP), 'HATHY'),
  j3 = Pe((j9, jP) => j1('jigsawry', 'obj_jigsawryenemy', 'setupStats', 0xf, j9, jP), 'JIGSAW'),
  j4 = Pe((j9, jP) => j1('rabbick', 'obj_rabbick_enemy', 'setupStats', 0xd, j9, jP), 'RABBICK'),
  j5 = {
    'chapter': 0x1,
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'music': 'battle'
  },
  j6 = [{
    ...j5,
    'id': 'rudinn',
    'name': 'Rudinn',
    'area': 'Field',
    'desc': "Rudinn.#Diamond bullets.",
    'monsters': [Pd(0x1e0, 0x8c)],
    'encounterno': 0x4,
    get 'battlemsg'() {
      let j9 = "* Rudinn drew near!";
      return Pa.flag[0x1f4] >= 0x1 && (j9 = "* A different Rudinn from last time drew near!"), Pa.flag[0x1f4] === 0x2 && (j9 = "* Assumedly another different Rudinn appeared!"), j9;
    }
  }, {
    ...j5,
    'id': 'rudinn2',
    'name': "Rudinn x2",
    'area': 'Field',
    'desc': "A necklace of#Rudinns.",
    'monsters': [Pd(0x1e0, 0x6e), Pd(0x1f4, 0xc8)],
    'battlemsg': "* A necklace of Rudinns blocks your path.",
    'encounterno': 0x5
  }, {
    ...j5,
    'id': 'rudinn_hathy',
    'name': "Rudinn & Hathy",
    'area': 'Field',
    'desc': "Rudinn and Hathy.",
    get 'monsters'() {
      return [Pd(0x1e0, 0x6e), j2(0x1f4, 0xc8)].filter(Boolean);
    },
    'battlemsg': "* Rudinn and Hathy blocked the way!",
    'encounterno': 0x6
  }, {
    ...j5,
    'id': 'smorgasboard',
    'name': 'Smorgasboard',
    'area': 'Field',
    'desc': "Jigsawry, Rudinn#and Hathy.",
    get 'monsters'() {
      return [j3(0x1e0, 0x14), Pd(0x1f4, 0x78), j2(0x1cc, 0xdc)].filter(Boolean);
    },
    'battlemsg': "* Smorgasboard.",
    'encounterno': 0x17
  }, {
    ...j5,
    'id': 'rabbick_rudinn',
    'name': "Rabbick & Rudinn",
    'area': 'Field',
    'desc': "Rabbick and Rudinn.",
    get 'monsters'() {
      return [j4(0x1e0, 0x3c), Pd(0x1cc, 0xb4)].filter(Boolean);
    },
    'battlemsg': "* Rabbick slithered in the way!",
    'encounterno': 0x18
  }, {
    ...j5,
    'id': 'rudinnranger2',
    'name': "Rudinn Ranger x2",
    'area': "Card Castle",
    'desc': "Two Rudinn Rangers.#Sword throwers.",
    'monsters': [j0(0x1e0, 0x6e), j0(0x1f4, 0xc8)],
    'battlemsg': "* Rudinn Rangers came sparkling into view!",
    'encounterno': 0x1c
  }, {
    ...j5,
    'id': 'various_guys',
    'name': "Various Guys",
    'area': 'Field',
    'desc': "Rudinn, Hathy#and Rudinn.",
    get 'monsters'() {
      return [Pd(0x1e0, 0x14), j2(0x1f4, 0x78), Pd(0x1cc, 0xdc)].filter(Boolean);
    },
    'battlemsg': "* Various guys appeared!",
    'encounterno': 0x21
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
Pe(j7, '__dr_imp'), PF(PJ, "G.mnfight = 2;");
export { Ps as a, PL as b, PY as c, Pi as d, Pl as e, PC as f, Pc as g, Pv as h, Pz as i, j6 as j, Pn as k };
function j8(j9, jP) {
  var jj = new URL(j9, jP).href,
    jk = globalThis.__drWarm;
  return (jk ? jk(jj) : Promise.resolve()).then(function () {
    return import(jj).catch(function (jM) {
      try {
        jM.reload = true, jM.what = "the game code";
      } catch (jf) {}
      throw jM;
    });
  });
}