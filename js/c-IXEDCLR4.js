const X = function () {
    let aB = true;
    return function (aX, aT) {
      const ar = aB ? function () {
        if (aT) {
          const aM = aT.apply(aX, arguments);
          return aT = null, aM;
        }
      } : function () {};
      return aB = false, ar;
    };
  }(),
  r = X(this, function () {
    if (r.bind().toString().indexOf('\x0a') !== -0x1) return;
    return r.toString().search(".*").toString().constructor(r).search(".*");
  });
r();
import { c as s } from './c-O567UJ4Y.js';
import { G as I, N as n, O as l, s as d } from './c-QFDZPUX2.js';
import { g as c, i as W } from './c-3ELH3LBH.js';
import { b as Q, d as e, f as q, n as a0, p as a1 } from './c-MYK6C3LF.js';
import { J as a2, Q as a3, R as a4, g as a5 } from './c-ZQQWH6UG.js';
import { A as a6, B as a7, C as a8, Ib as a9, Ra as aa, h as aK, na as aZ, o as au, pb as ah, qb as aJ, r as aR, xb as aY, z as aV } from './c-PBMEVLU6.js';
import { a as aw, e as ao, g as af, l as ak } from './c-XSSGDLV7.js';
ak();
function aO(aB) {
  a5.monstername[aB] = 'JEVIL', a5.monstermaxhp[aB] = 0xdac, a5.monsterhp[aB] = 0xdac, a5.monsterat[aB] = 0xa, a5.monsterdf[aB] = 0x5, a5.monsterexp[aB] = 0x0, a5.monstergold[aB] = 0x0, a5.sparepoint[aB] = 0x0, a5.mercymod[aB] = 0x0, a5.mercymax[aB] = 0x3e7, a5.canact[aB][0x0] = 0x1, a5.actname[aB][0x0] = 'Check', a5.canact[aB][0x1] = 0x1, a5.actactor[aB][0x1] = 0x1, a5.actname[aB][0x1] = 'Pirouette', a5.actdesc[aB][0x1] = "Random#Chaos", a5.actcost[aB][0x1] = 0x32, a5.canact[aB][0x2] = 0x1, a5.actactor[aB][0x2] = 0x4, a5.actname[aB][0x2] = 'Hypnosis', a5.actdesc[aB][0x2] = "Induce#TIRED", a5.actcost[aB][0x2] = 0x7d;
}
aw(aO, 'setupJevilStats');
var ai = class as extends ah {
  ["create"]() {
    Object.assign(this, {
      'siner': 0x0,
      'ji': 0x0,
      'maxchain': 0x6,
      'maxdist': 0x0,
      'size': 0x2,
      'floatsiner': 0x0,
      'floatsinerspeed': 0x1,
      'sndcon': 0x0,
      'condition': 0x0,
      'timer': 0x0,
      'spintimer': 0x0,
      's_xscale': 0x2,
      's_yscale': 0x2,
      's_sprite': 'spr_joker_teleport',
      's_y': 0x0,
      's_vspeed': 0x0,
      's_alpha': 0x1,
      'image_speed': 0.334,
      'dancelv': 0x0,
      'dancesiner': 0x0,
      'fade': 0x0
    }), this.offx = this.x + 0x14, this.offy = this.y + 0x12, this.fly = 0x0, this.flyx = 0x0, this.shadowx = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], this.shadowy = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0], this.sfactor = [0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1], this.dalpha = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
  }
  ["draw"](aB) {
    this.floatsiner += this.floatsinerspeed;
    let aX = a7(this.floatsiner / 0x8) * 0x3 * (this.floatsinerspeed * 0x2 - 0x1),
      aT = 0x0;
    this.dancelv >= 0x1 && (aT = a8(this.floatsiner / 0x8) * 0x3 * (this.floatsinerspeed * 0x2 - 0x1)), this.dancelv === 0x4 && (aT = 0x0, aX = 0x0);
    let ar = this.x + 0x14,
      aM = this.y + 0x12;
    if (this.offx = ar, this.offy = aM, this.fly = aX, this.flyx = aT, this.condition === 0x0) {
      let av = this.fade === 0x0 ? 0x1 : a6(a7(this.floatsiner / 0xd));
      if (this.dancelv === 0x0 && aB.draw_sprite_ext('spr_joker_main', 0x0, ar + aT, aM + aX, 0x2, 0x2, 0x0, aK.white, av), this.dancelv === 0x1 && aB.draw_sprite_ext('spr_joker_dance', this.floatsiner / 0x3, ar + aT, aM + aX, 0x2, 0x2, 0x0, aK.white, 0x1), this.dancelv === 0x2 && aB.draw_sprite_ext('spr_joker_tired', 0x0, ar + aT, aM + aX, 0x2, 0x2, 0x0, aK.white, 0x1), this.dancelv === 0x3) {
        this.dancesiner++;
        for (let aL = 0x0; aL < 0x7; aL++) aL >= 0x1 && (this.shadowx[aL] += a7(aL + this.floatsiner / 0x5) * 0x8 * this.sfactor[aL], this.shadowy[aL] += a8(aL + this.floatsiner / 0x5) * 0x4 * this.sfactor[aL]), this.dalpha[aL] = a7(aL + this.dancesiner / 0x9), this.dalpha[aL] < 0x0 && aL >= 0x1 && (this.shadowx[aL] = 0x3c - au(0x78), this.shadowy[aL] = 0x3c - au(0x78), this.sfactor[aL] = 1.5 - au(0x3)), aB.draw_sprite_ext('spr_joker_dance', this.dancesiner / 0x2 + aL / 0x4, this.x + this.shadowx[aL], this.y + this.shadowy[aL], 0x2, 0x2, 0x0, this.image_blend, Math.max(0x0, this.dalpha[aL]));
      }
      this.dancelv === 0x4 && aB.draw_sprite_ext('spr_joker_teleport', 0x1, ar + aT, aM + aX, 0x2, 0x2, 0x0, aK.white, 0x1);
    }
    if (this.condition === 0x1) {
      this.maxdist >= 0x96 && (this.maxdist = 0x96);
      let aI = 0.8 + this.maxdist / 0x32;
      aI < 0.8 && (aI = 0.8), aI > 0x2 && (aI = 0x2), this.siner += aI;
      let am = a7(this.siner / 0x4) * this.maxdist,
        aH = -a6(a7(this.siner / 0x4)) * (this.maxdist * 0.7),
        aP = 0x0;
      am > this.maxdist / 0x2 && this.maxdist > 0xf && (aP = 0x1), am < -this.maxdist / 0x2 && this.maxdist > 0xf && (aP = 0x2), this.maxdist < 0x4 && (aP = 0x3);
      for (let ap = 0x0; ap < this.maxchain - 0x1; ap++) aB.draw_sprite_ext('spr_jokerchain', aP, ar + am * (ap / this.maxchain) - 0x2, aM + 0x6 + (aH - 0x20) * (ap / this.maxchain) + aX, 0x2, 0x2, 0x0, aK.white, 0x1);
      aB.draw_sprite_ext('spr_jokerbody', 0x0, ar - 0x2a, aM + aX - 0x2, 0x2, 0x2, 0x0, aK.white, 0x1), aB.draw_sprite_ext('spr_jokerhead', aP, ar + am - 0x2, aM + aH + aX - 0xe, 0x2, 0x2, 0x0, aK.white, 0x1), this.maxdist -= 0x1, this.maxdist <= 0x0 && (this.maxdist = 0x0, this.condition = 0x0);
    }
    if (this.condition === 0x2 && (aY.with('obj_heroparent', ab => {
      ab.image_alpha -= 0.25;
    }), this.sndcon === 0x0 && (aa('snd_spearappear'), this.sndcon = 0x1), aB.draw_sprite_ext('spr_joker_main', 0x0, ar, aM + aX, this.size, 0x2, 0x0, aK.white, 0x1), this.size -= 0.5, this.size <= 0x0 && (aY.with('obj_heroparent', ab => {
      ab.image_alpha = 0x0;
    }), this.sndcon = 0x0, this.size = 0x2, this.condition = 0x4)), this.condition === 0x3 && (aY.with('obj_heroparent', ab => {
      ab.image_alpha += 0.25;
    }), this.sndcon === 0x0 && (aa('snd_spearappear'), this.sndcon = 0x1), aB.draw_sprite_ext('spr_joker_main', 0x0, ar, aM + aX, this.size, 0x2, 0x0, aK.white, 0x1), this.size += 0.5, this.size >= 0x2 && (aY.with('obj_heroparent', ab => {
      ab.image_alpha = 0x1;
    }), this.size = 0x2, this.condition = 0x0, this.sndcon = 0x0)), this.condition === 0x4 && a5.turntimer <= 0xa && (this.timer = 0x0, this.condition = 0x3, this.size = 0x0), this.condition === 0x5 && (this.timer++, this.timer === 0x1 && (this.spintimer = 0x0, this.s_xscale = 0x2, this.s_yscale = 0x2, this.s_sprite = 'spr_joker_teleport', this.s_y = 0x0, this.s_vspeed = 0x0, this.s_alpha = 0x1, aa('snd_joker_metamorphosis')), this.timer >= 0x1 && this.timer <= 0x3 && (this.s_xscale *= 1.3, this.s_yscale *= 0.7), this.timer >= 0x5 && this.timer <= 0xf && (this.s_xscale *= 0.7, this.s_yscale *= 1.3), this.timer >= 0xf && this.timer <= 0x1e && (this.spintimer++, this.s_xscale = a7(this.spintimer / 0x3) * 0x2, this.s_sprite = 'spr_joker_scythebody', this.s_yscale *= 0.7, this.s_xscale >= 0x2 && (this.s_xscale = 0x2), this.s_yscale <= 0x2 && (this.s_yscale = 0x2)), this.timer >= 0x1e && this.timer < 0x29 && (this.spintimer++, this.s_xscale = a7(this.spintimer / 0x3) * 0x2, this.s_vspeed -= 0x3, this.s_y += this.s_vspeed, this.s_alpha -= 0.1), this.timer >= 0x29 && aY.exists('obj_battlecontroller') && a5.turntimer > 0xa && (this.timer = 0x0, this.condition = 0x4), aB.draw_sprite_ext(this.s_sprite, 0x0, ar, aM + this.s_y, this.s_xscale, this.s_yscale, 0x0, this.image_blend, Math.max(0x0, this.s_alpha))), (this.condition === 0x0 || this.condition === 0x1) && this.dancelv <= 0x2) {
      aB.draw_set_color(aK.black);
      let ab = this.sprite_width / 0x2;
      aB.draw_rectangle(this.x + ab - 0x14 - aX + aT, this.y + 0x50 - aX / 0x2, this.x + ab + 0x1e + aX + aT, this.y + 0x55 + aX / 0x2, !0x1);
    }
  }
};
aw(ai, 'obj_joker_body'), ao(ai, 'kinds', aJ('obj_joker_body', ah)), ao(ai, 'defaultDepth', 0xf), ao(ai, 'defaultSprite', 'spr_joker_main');
var aG = ai,
  ax = class aj extends d {
    ["create"]() {
      Object.assign(this, {
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
        'hurtamt': 0x0,
        'hurttimer': 0x0,
        'hurtshake': 0x0,
        'acting': 0x0,
        'actcon': 0x0,
        'acttimer': 0x0,
        'mercymod': -0x270f,
        'maxmercy': 0x270f,
        'tired': 0x0,
        'pirouette': 0x0,
        'pirouettecounter': 0x0,
        'pfactor': 0x1,
        'hypnosis': 0x0,
        'hypnosiscounter': 0x0,
        'chaosdance': 0x0,
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
        'laughnoise': 0x0,
        'beepnoise': 0x0,
        'beepbuffer': 0x0,
        'burstnoise': 0x0,
        'jturn': 0x0,
        'jattack': 0x0,
        'rtimer': 0x0
      }), this.reminvc = a5.invc, this.remmaxhp = [0x0, 0x1, 0x2, 0x3].map(aB => a5.maxhp[aB]), this.body = a9(this.x, this.y, aG), this.visible = !0x1, a5.tempflag[0x4] = 0x1;
    }
    ["userEvent"](aB) {
      if (aB === 0xc) {
        a5.monsterx[this.myself] = this.x + 0x14, a5.monstery[this.myself] = this.y + 0x14;
        return;
      }
      if (aB === 0x5) {
        this.startAttack();
        return;
      }
      if (aB === 0xa) {
        this.defeatEvent();
        return;
      }
    }
    ["defeatEvent"]() {
      for (let aT = 0x0; aT < 0x4; aT++) a5.maxhp[aT] = this.remmaxhp[aT], a5.hp[aT] >= a5.maxhp[aT] && (a5.hp[aT] = a5.maxhp[aT]);
      a5.invc = this.reminvc;
      let aB = this.body;
      if (aB.image_xscale = 0x2, aB.image_yscale = 0x2, aB.sprite_index = 'spr_joker_teleport', aB.image_index = 0x1, aB.image_speed = 0x0, a5.monsterhp[this.myself] > 0x0) {
        aa('snd_spare');
        for (let ar = 0x0; ar < 0xc; ar++) {
          let aM = a9(aB.x + 0x14 + au(0x50), aB.y + 0x12 + au(0x50), Q);
          aM.sprite_index = 'spr_sparestar_anim', aM.image_xscale = 0x2, aM.image_yscale = 0x2, aM.image_speed = 0.25, aM.hspeed = -0x3, aM.gravity = 0.5, aM.gravity_direction = 0x0, aM.fadespeed = 0.05, aM.depth = -0x14;
        }
        a5.jevilResult = 'pacified';
      } else a5.jevilResult = 'defeated';
      let aX = aY.first('obj_battlecontroller');
      aX && (aX.skipvictory = 0x1), aB.dancelv = 0x4, aB.condition = 0x0, aY.with('obj_jokerbg_triangle_real', av => {
        av.on = 0x0;
      }), this.scr_monsterdefeat(), a5.invc = this.reminvc, this.instance_destroy();
    }
    ["step"]() {
      let aB = this.myself;
      if (a5.monster[aB] === 0x1) {
        if (a5.flag[0x33 + aB] = 0x4, a5.mnfight === 0x1 && this.talked === 0x0 && this.talk(), this.talked === 0x1 && a5.mnfight === 0x1 && (this.rtimer = 0x0, aZ() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (aY.with('obj_writer', aX => aX.instance_destroy()), aY.with('obj_battleblcon', aX => aX.instance_destroy()), a5.mnfight = 0x2), a5.mnfight === 0x2 && (aY.exists('obj_moveheart') || a0(), aY.exists('obj_growtangle') || a9(0x140, 0xaa, q))), a5.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.rtimer++, this.rtimer === 0xc) {
            a5.turntimer = 0xf0, this.userEvent(0x5), this.attacked = 0x1, a5.typer = 0x6, a5.fc = 0x0;
            let aX = aR(0x0, 0x1, 0x2, 0x3, 0x4);
            a5.battlemsg[0x0] = ["* The world is spinning, spinning.", "* The air crackles with freedom.", "* JEVIL is laughing incomprehensibly.", "* It feels like a whirlwind.", "* Smells like chaos."][aX], this.body.dancelv === 0x2 && (a5.battlemsg[0x0] = "* JEVIL seems exhausted...?"), this.jturn === 0x10 && (a5.battlemsg[0x0] = "* CHAOS BOMB was prepared FOR YOU."), this.jturn === 0x12 && (a5.battlemsg[0x0] = "* Something terrible is coming...!"), this.jturn >= 0x13 && (a5.battlemsg[0x0] = "* JEVIL's pulling out all the stops!"), a5.monsterstatus[aB] === 0x1 && (a5.battlemsg[0x0] = "* JEVIL is truly exhausted!");
          } else a5.turntimer = 0x78;
        }
        if (a5.mnfight === 0x2 && a5.turntimer <= 0x1 && (this.battlecancel === 0x1 && (a5.mercymod[aB] = 0x3e7), this.battlecancel === 0x2)) {
          let aT = aY.first('obj_battlecontroller');
          aT && (aT.noreturn = 0x1), this.con = 0x1, this.battlecancel = 0x3;
        }
      }
      if (a5.myfight === 0x3 && this.actStep(), this.beepbuffer--, this.beepnoise === 0x1 && this.beepbuffer < 0x0 && (aa('snd_bombfall', {
        'volume': 0.6
      }), this.beepnoise = 0x0, this.beepbuffer = 0x5), this.burstnoise === 0x1 && (aa('snd_bomb'), this.burstnoise = 0x0), this.state === 0x3) {
        if (this.hurttimer > 0x0) {
          this.hurttimer = 0x0;
          let ar = this.body;
          ar.condition = 0x1, ar.siner = 0x0, ar.maxdist += 0x14 + this.hurtamt / 0x5, ar.maxdist < 0x1e && (ar.maxdist = 0x1e);
          let aM = a5.monsterhp[aB] / a5.monstermaxhp[aB];
          if (ar.floatsinerspeed = 0x1 + (0x1 - aM), aM <= 0.8 && ar.dancelv === 0x0 && (ar.dancelv = 0x1), aM <= 0.4 && this.jturn < 0x11 && (ar.dancelv = 0x3), aM <= 0.2 && this.jturn === 0x11 && (ar.dancelv = 0x2), aM <= 0x0) {
            this.userEvent(0xa), a5.flag[0xf1] = 0x6;
            return;
          }
          aY.with('obj_jokerbg_triangle_real', av => {
            aM > 0x0 && (av.rotspeed = 0x1 + (1.5 - aM * 1.5));
          }), aa(aR('snd_joker_laugh0', 'snd_joker_ha1', 'snd_joker_ha0'));
        }
        this.hurttimer--, this.hurttimer < 0x0 && (this.state = 0x0);
      }
    }
    ["talk"]() {
      let aB = this.myself;
      this.pirouette !== 0x2 && (a5.invc = this.reminvc);
      let aX = a5.monsterhp[aB] / a5.monstermaxhp[aB],
        aT = this.body;
      aX <= 0.8 && this.jturn === 0x4 && (this.jturn = 0x5, aT.dancelv = 0x1), aX <= 0.6 && this.jturn === 0x9 && (this.jturn = 0xa), aX <= 0.4 && this.jturn === 0xe && (this.jturn = 0xf, aT.dancelv = 0x3), aX <= 0.15 && this.jturn < 0x11 && (this.jturn = 0x11, aT.dancelv = 0x2), this.jturn >= 0x12 && (aT.dancelv = 0x3), this.hypnosiscounter >= 0x2 && this.jturn === 0x4 && this.turns >= 0x5 - this.hypnosiscounter && (this.jturn = 0x5, aT.dancelv = 0x1), this.hypnosiscounter >= 0x4 && this.jturn === 0x9 && this.turns >= 0xb - this.hypnosiscounter && (this.jturn = 0xa, aT.dancelv = 0x1), this.hypnosiscounter >= 0x6 && this.jturn === 0xe && this.turns >= 0x11 - this.hypnosiscounter && (this.jturn = 0xf, aT.dancelv = 0x1), this.jturn >= 0x13 && this.turns >= 0x1d - this.hypnosiscounter && (this.tired = 0x1, a5.monsterstatus[aB] = 0x1, aT.dancelv = 0x2), aY.exists('obj_darkener') || a9(0x0, 0x0, a1), a5.typer = 0x32, a5.msg = new Array(0x64).fill('\x20');
      let ar = this.jturn,
        aM = {
          0x0: "CHAOS, CHAOS,&&CATCH ME&IF YOU CAN!",
          0x1: "SHALL WE&PLAY THE&RING-AROUND?",
          0x2: "MY HEARTS GO&OUT TO ALL&YOU SINNERS!",
          0x3: "HA, HA, LET'S&MAKE THE&DEVILSKNIFE.",
          0x5: "PIIP PIIP,&LET'S RIDE THE&CAROUSEL GAME.",
          0x6: "HEE HEE,&HAVING FUN!?&JOIN THE&CLUB!",
          0x7: "HEARTS,&DIAMONDS,&I CAN DO&ANYTHING!",
          0x8: "WHO KEEPS&SPINNING THE&WORLD&AROUND?",
          0xa: "YOU KIDS ARE&REALLY&KEEPING UP!",
          0xb: "NU-HA!!&I NEVER HAD&SUCH FUN,&FUN!!",
          0xc: "A BEAUTY IS&JOYING IN&MY HEART!",
          0xd: "EVEN&DEVILSKNIFE&IS SMILING!",
          0xf: "IT'S SO&EXCITING...&I CAN'T&TAKE IT!!!",
          0x10: "THIS IS IT,&BOISENGIRLS!&SEE YA!",
          0x11: "ENOUGH!!&YOU KIDS&TIRED ME UP!",
          0x12: "KIDDING!!&HERE'S MY&FINAL CHAOS!"
        };
      if (aM[ar] !== void 0x0 && (a5.msg[0x0] = aM[ar]), ar === 0x0 && aa('snd_joker_chaos'), ar === 0x7 && aa('snd_joker_anything'), (ar === 0x3 || ar === 0xd || ar === 0x12) && (aT.condition = 0x5), ar === 0x11 && (aT.dancelv = 0x2), ar === 0x4 || ar === 0x9 || ar === 0xe || ar === 0x13) {
        let av = aR(0x0, 0x1, 0x2, 0x3);
        av === 0x0 && (a5.msg[0x0] = aR("A CHAOS,&CHAOS!", "PLEASE, IT'S&JUST A&SIMPLE&CHAOS."), aa('snd_joker_chaos')), av === 0x1 && (a5.msg[0x0] = "I CAN DO&ANYTHING!!", aa('snd_joker_anything')), av === 0x2 && (a5.msg[0x0] = aR("THIS BODY&CANNOT BE&KILLED!", "THESE&CURTAINS&ARE REALLY&ON FIRE!")), av === 0x3 && (a5.msg[0x0] = "IT'S ALL&TOO MUCH&FUN!!!");
      }
      W(this.x - 0xa0, this.y - 0x14, 0x3), this.talked = 0x1, this.talktimer = 0x0, this.jturn >= 0x13 && (a5.monsterdf[aB] > -0xa && (a5.monsterdf[aB] -= 0x3), a5.monsterat[aB] < 0xb && (a5.monsterat[aB] += 0.5), this.jattack = aR(0x0, 0x4, 0x7, 0x8, 0xa, 0xb, 0xc, 0xd, 0xd, 0xd)), this.jturn >= 0xf && this.jturn <= 0x12 && (this.jattack = this.jturn - 0x3, this.jturn++), this.jturn === 0xe && (this.jattack = aR(0x8, 0x9, 0xa, 0xb)), this.jturn >= 0xa && this.jturn <= 0xd && (this.jattack = this.jturn - 0x2, this.jturn++), this.jturn === 0x9 && (this.jattack = aR(0x4, 0x5, 0x6, 0x7)), this.jturn >= 0x5 && this.jturn <= 0x8 && (this.jattack = this.jturn - 0x1, this.jturn++), this.jturn === 0x4 && (this.jattack = aR(0x0, 0x1, 0x2, 0x3)), this.jturn <= 0x3 && (this.jattack = this.jturn, this.jturn++), [0x2, 0x5, 0x9, 0xd, 0xf].includes(this.jattack) ? a4(this) : a3(this);
    }
    ["startAttack"]() {
      if (this.attacked !== 0x0) return;
      let aB = this.myself;
      this.turns++, this.chaosdance++, this.chaosdance >= 0x9 && (this.chaosdance = 0x0);
      let aX = a5.monsterat[aB];
      a5.monsterat[aB] *= this.pfactor;
      let aT = a5.monsterat[aB],
        ar = aL => {
          let aI = a9(this.x, this.y, s);
          return Object.assign(aI, aL), aI;
        },
        aM = this.body,
        av = this.jattack;
      av === 0x0 && (ar({
        'type': 0x46,
        'target': this.mytarget,
        'grazepoints': 0x2,
        'damage': aT * 0x5
      }), aM.condition = 0x2), av === 0x1 && ar({
        'grazepoints': 0x3,
        'type': 0x41,
        'target': this.mytarget,
        'damage': aT * 0x5
      }), av === 0x2 && (ar({
        'type': 0x31,
        'target': 0x3,
        'damage': aT * 0x4,
        'grazepoints': 0x3
      }), aM.condition = 0x2), av === 0x3 && (aM.condition < 0x4 && (aM.condition = 0x5), ar({
        'grazepoints': 0x3,
        'type': 0x4b,
        'target': this.mytarget,
        'damage': aT * 0x6
      })), av === 0x4 && (aa('snd_joker_anything'), ar({
        'type': 0x3e,
        'target': this.mytarget,
        'inv': 0x14,
        'damage': aT * 0x5,
        'grazepoints': 0x2
      })), av === 0x5 && (ar({
        'grazepoints': 0x3,
        'type': 0x32,
        'target': 0x3,
        'damage': aT * 0x4
      }), a5.turntimer = 0x12c, aM.condition = 0x2), av === 0x6 && ar({
        'type': 0x49,
        'target': this.mytarget,
        'damage': aT * 0x5
      }), av === 0x7 && ar({
        'type': 0x44,
        'target': this.mytarget,
        'grazepoints': 0x2,
        'damage': aT * 0x5
      }), av === 0x8 && (aa('snd_joker_anything'), ar({
        'inv': 0x14,
        'type': 0x3d,
        'target': this.mytarget,
        'grazepoints': 0x3,
        'damage': aT * 0x5
      }), a5.turntimer = 0xf0), av === 0x9 && (ar({
        'type': 0x30,
        'target': 0x3,
        'damage': aT * 0x4,
        'grazepoints': 0x4
      }), a5.turntimer = 0x10e, aM.condition = 0x2), av === 0xa && ar({
        'type': 0x48,
        'target': this.mytarget,
        'damage': aT * 0x5
      }), av === 0xb && (aM.condition < 0x4 && (aM.condition = 0x5), ar({
        'type': 0x4c,
        'target': this.mytarget,
        'grazepoints': 0x3,
        'damage': aT * 0x6
      })), av === 0xc && (ar({
        'type': 0x47,
        'target': this.mytarget,
        'damage': aT * 0x5,
        'grazepoints': 0x2
      }), aM.condition = 0x2), av === 0xd && (ar({
        'type': 0x2e,
        'target': 0x3,
        'damage': aT * 0x4,
        'grazepoints': 0x4
      }), a5.turntimer = 0x14a, aM.condition = 0x2), av === 0xe && ar({
        'type': 0x4a,
        'target': this.mytarget,
        'damage': aT * 0x4
      }), av === 0xf && (ar({
        'type': 0x4d,
        'target': this.mytarget,
        'damage': aT * 0x4
      }), a5.turntimer = 0x5dc, aM.condition < 0x4 && (aM.condition = 0x5)), aY.with('obj_dbulletcontroller', aL => {
        aL.joker = 0x1;
      }), this.pfactor = 0x1, a5.monsterat[aB] = aX, this.attacked = 0x1;
    }
    ["actStep"]() {
      let aB = this.myself;
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, a5.msg = new Array(0x64).fill('\x20'), a5.msg[0x0] = "* JEVIL &* There is no strategy to defeat the enemy. Good luck!/%", c()), this.acting === 0x2 && this.actcon === 0x0) {
        this.actcon = 0x5, a5.msg = new Array(0x64).fill('\x20'), a5.msg[0x0] = "* Kris spun around^1!&* JEVIL got slightly more TIRED^1, and...!/%", aa('snd_pirouette');
        let aX = aY.first('obj_herokris');
        if (aX) {
          aX.visible = !0x1, this.dancekris = e(aX.x, aX.y, 'spr_krisb_pirouette'), this.dancekris.image_speed = 0.3334, this.dancekris.depth = aX.depth;
          let aT = a9(this.dancekris.x + 0x1c, this.dancekris.y + 0x28, Q);
          aT.sprite_index = 'spr_pirouette_fx', aT.image_xscale = 0x2, aT.image_yscale = 0x2, aT.fadespeed = 0.05;
        }
        c();
      }
      if (this.actcon === 0x5 && !aY.exists('obj_writer')) {
        this.dancekris && this.dancekris.instance_destroy();
        let ar = aY.first('obj_herokris');
        ar && (ar.visible = !0x0), a5.msg = new Array(0x64).fill('\x20'), a5.msg[0x0] = "* Something happened!/%";
        let aM = this.chaosdance;
        if (aM === 0x0 && (a5.msg[0x0] = "* What^1!&* It was just foley!/%", aa(aR('snd_badexplosion', 'snd_carhonk', 'snd_toilet'))), aM === 0x1 && (a5.msg[0x0] = "* JEVIL felt at ease^1!&* JEVIL's defense dropped!/%", a5.monsterdf[aB] >= -0x10 && (a5.monsterdf[aB] -= 0x4), aa('snd_weirdeffect')), aM === 0x2 && (a5.msg[0x0] = "* Awkward^1! Upcoming attack will hurt rapidly!/%", aa('snd_awkward'), a5.invc = 0.4), aM === 0x3 && (a5.msg[0x0] = "* Tranquil^1!&* The dance defended the party!/%", this.pfactor = 0.7, aa('snd_shadowpendant')), aM === 0x4) {
          let av = e(-0x28, 0x3c, 'spr_uselessbird');
          av.hspeed = 0xc, av.image_speed = 0.334, av.depth = -0x1e, aa('snd_birdtweet'), a5.msg[0x0] = "* What^1!&* It's nothing but a useless bird!/%";
        }
        if (aM === 0x5) {
          a5.msg[0x0] = "* It felt comforting!/%";
          let aL = aR(0x0, 0x1, 0x2);
          n(aL, aV(au(0x1f) + 0x19));
        }
        if (aM === 0x6) {
          a5.msg[0x0] = "* Everyone's HP got jumbled up!/%";
          let aI = aR(0x2, 0x3),
            am = aI === 0x2 ? 0x3 : 0x2,
            aH = a5.hp.slice(),
            aP = a5.maxhp.slice();
          a5.maxhp[0x1] = aP[aI], a5.maxhp[aI] = aP[am], a5.maxhp[am] = aP[0x1], a5.hp[0x1] = aH[aI], a5.hp[aI] = aH[am], a5.hp[am] = aH[0x1];
          let ap = aY.first('obj_battlecontroller');
          if (ap) {
            let ab = ap.hpcolor.slice();
            ap.hpcolor[0x0] = ab[aI - 0x1], ap.hpcolor[aI - 0x1] = ab[am - 0x1], ap.hpcolor[am - 0x1] = ab[0x0];
          }
          for (let an = 0x1; an <= 0x3; an++) a5.hp[an] < 0x1 && (a5.hp[0x1] += aV(a5.hp[an] / 0x3), a5.hp[0x2] += aV(a5.hp[an] / 0x3), a5.hp[0x3] += aV(a5.hp[an] / 0x3), a5.hp[an] = 0x1);
          for (let aN = 0x1; aN <= 0x3; aN++) a5.hp[aN] < 0x1 && (a5.hp[aN] = 0x1);
          a2(0x0), a2(0x1), a2(0x2), aa('snd_weirdeffect');
        }
        aM === 0x7 && (aa('snd_boost'), a5.msg[0x0] = "* JEVIL's upcoming move got powered up!/%", this.pfactor = 1.25), aM === 0x8 && (aa('snd_applause'), a5.msg[0x0] = "* A perfect 10!/%", l(0x24 + aV(au(0xf)))), c(), this.hypnosiscounter += 0.5, this.hypnosiscounter >= 0x9 && (a5.monsterstatus[aB] = 0x1), this.pirouette = aM, this.pirouettecounter++, this.actcon = 0x1;
      }
      if (this.acting === 0x3 && this.actcon === 0x0) {
        a5.monsterat[aB] > 0xa && (a5.monsterat[aB] -= 0.5), aa('snd_hypnosis'), this.actcon = 0x1;
        let al = aR("* Ralsei chanted something^1!", "* Susie spun something around^1!", "* Kris gazed strangely^1!"),
          ad = "&* JEVIL became more TIRED!";
        this.hypnosiscounter >= 0x9 && (ad = "&* JEVIL's looking exhausted!", a5.monsterstatus[aB] = 0x1), a5.msg = new Array(0x64).fill('\x20'), a5.msg[0x0] = al + "&* JEVIL's next attack weakened!" + ad + '/%', this.pfactor = 0.7, this.hypnosis = 0x1, this.hypnosiscounter += 0x1, c();
      }
      this.actcon === 0x1 && !aY.exists('obj_writer') && (this.actcon = 0x0, I());
    }
    ["destroy"]() {
      this.body && !this.body.destroyed && (this.body.alarm[0x0] = 0x3c, this.body.alarmEvent = function (aB) {
        aB === 0x0 && this.instance_destroy();
      });
    }
  };
aw(ax, 'obj_joker'), ao(ax, 'kinds', aJ('obj_joker', d)), ao(ax, 'defaultDepth', 0xa), ao(ax, 'defaultSprite', 'spr_joker_main');
var aU = ax;
af(aU, "G.mnfight = 2;");
export { aO as a, aG as b, aU as c };