const u = function () {
    let hI = true;
    return function (hu, hf) {
      const hW = hI ? function () {
        if (hf) {
          const hX = hf.apply(hu, arguments);
          return hf = null, hX;
        }
      } : function () {};
      return hI = false, hW;
    };
  }(),
  f = u(this, function () {
    if (f.bind().toString().indexOf('\x0a') !== -0x1) return;
    return f.toString().search(".*").toString().constructor(f).search(".*");
  });
f();
import { o as i } from './c-E3FAV6Z4.js';
import { k as v } from './c-TW2FVSA5.js';
import { k as g } from './c-H2HTZPEL.js';
import { l as s } from './c-V7HIBOZL.js';
import { b as e, c as k } from './c-O567UJ4Y.js';
import { C as n, G as o, J as Q0, d as Q1, g as Q2, s as Q3 } from './c-QFDZPUX2.js';
import { a as Q4, c as Q5, e as Q6, f as Q7, g as Q8, o as Q9 } from './c-DTW63MWW.js';
import { f as QQ, g as Qj, i as QT } from './c-3ELH3LBH.js';
import { a as QL, b as Qh, c as Qd, d as QP, f as QU, j as QH, n as QI, p as Qu, q as Qf } from './c-MYK6C3LF.js';
import { H as QW, M as QX, Q as QY, R as QB, S as QC, g as Qx, l as QG, n as QN } from './c-ZQQWH6UG.js';
import { A as Qp, B as QM, C as Qv, Ib as QJ, N as Qg, Nb as QZ, Ob as QR, Ra as QS, Ta as Ql, h as Qz, l as QF, m as Qc, na as Qw, o as Qq, oc as Qa, pa as QD, pb as QE, qb as QA, r as Qy, s as Qk, t as Qn, tc as Qo, u as QV, v as Qr, x as QK, xb as Qb, y as Qm, z as QO } from './c-PBMEVLU6.js';
import { a as j0, c as j1, e as j2, g as j3, l as j4 } from './c-XSSGDLV7.js';
j4();
var j5 = {};
j1(j5, {
  'FIGHTS': () => jX,
  'SOUNDS': () => j7,
  'SPRITES': () => j6,
  'obj_blockbullet_fall': () => ju,
  'obj_bloxer_enemy': () => jW,
  'obj_spareanim': () => jH,
  'setupStats': () => jT
}), j4();
var j6 = ['spr_blockguy_overworld', 'spr_blockguy_spared', 'spr_blockguy_part', 'spr_blockguy_part_hurt', 'spr_blockbullet', 'spr_blockbullet_mini', 'spr_sparestar_anim', 'spr_battleblcon_long'],
  j7 = ['snd_spare'],
  j8 = j0(hI => "[C]", 'scr_get_input_name'),
  j9 = Qc(0x808080),
  jQ = Qc(0xffff),
  jj = Qc(0xffffff);
function jT(hI) {
  Qx.monstername[hI] = 'Bloxer', Qx.monstermaxhp[hI] = 0x82, Qx.monsterhp[hI] = 0x82, Qx.monsterat[hI] = 0x9, Qx.monsterdf[hI] = 0x2, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x26, Qx.sparepoint[hI] = 0xa, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Rearrange', QN(0x2) && Qx.plot >= 0x96 && (Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Rival', Qx.actactor[hI][0x2] = 0x2);
}
j0(jT, 'setupStats');
var jL = {
  'spr_blockbullet_mini': {
    'w': 0x22,
    'h': 0x1c,
    'bb': [0x4, 0x4, 0x1d, 0x17]
  },
  'spr_blockguy_spared': {
    'w': 0x26,
    'h': 0x36,
    'bb': [0x0, 0x0, 0x25, 0x35]
  }
};
function jh(hI) {
  let hu = Qg[hI];
  return hu || jL[hI] || {
    'w': 0x0,
    'h': 0x0,
    'bb': [0x0, 0x0, 0x0, 0x0]
  };
}
j0(jh, 'sprDims');
function jd(hI, hu, hf, hW) {
  for (let hX of Qb.list) {
    if (hX.destroyed || hX === hW || !hX.is(hf)) continue;
    let hY = jh(hX.sprite_index);
    if (!hY || hY.w === 0x0) continue;
    let hB = hY.ox || 0x0,
      hC = hY.oy || 0x0,
      hx = hY.bb,
      hG = hX.x + (hx[0x0] - hB) * hX.image_xscale,
      hN = hX.x + (hx[0x2] + 0x1 - hB) * hX.image_xscale,
      hp = hX.y + (hx[0x1] - hC) * hX.image_yscale,
      hM = hX.y + (hx[0x3] + 0x1 - hC) * hX.image_yscale;
    if (hI >= Math.min(hG, hN) && hI < Math.max(hG, hN) && hu >= Math.min(hp, hM) && hu < Math.max(hp, hM)) return hX;
  }
  return null;
}
j0(jd, 'collision_point');
function jP(hI, hu, hf, hW, hX, hY) {
  let hB = hI.ctx;
  hB.save(), hB.globalAlpha = hI.alpha, hB.strokeStyle = hB.fillStyle = hI.color, hB.lineWidth = 0x1;
  let hC = hW - hu,
    hx = hX - hf,
    hG = Math.hypot(hC, hx);
  if (hB.beginPath(), hB.moveTo(hu, hf), hB.lineTo(hW, hX), hB.stroke(), hG !== 0x0) {
    hY > hG && (hY = hG);
    let hN = hC / hG,
      hp = hx / hG,
      hM = hW - hN * hY,
      hv = hX - hp * hY;
    hB.beginPath(), hB.moveTo(hW, hX), hB.lineTo(hM + hp * hY / 0x3, hv - hN * hY / 0x3), hB.lineTo(hM - hp * hY / 0x3, hv + hN * hY / 0x3), hB.closePath(), hB.fill();
  }
  hB.restore();
}
j0(jP, 'draw_arrow');
var jU = class hJ extends QE {
  ["create"]() {
    this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], Ql('snd_spare'), QS('snd_spare');
  }
  ["draw"](hI) {
    let hu = this.t;
    if (hu >= 0x6 && hu <= 0x1a && (this.afterimage += 0x1, hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x4, this.y, this.image_xscale, this.image_yscale, 0x0, 0.7 - this.afterimage / 0x19), hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x8, this.y, this.image_xscale, this.image_yscale, 0x0, 0.4 - this.afterimage / 0x1e)), hu < 0x6) {
      hu < 0x5 && hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
      let hf = hu / 0x5;
      hf > 0x1 && (hf = 0x1), hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, hf - this.tone / 0x5);
    }
    if (hu >= 0x1 && hu <= 0x5) for (let hW = 0x0; hW < 0x2; hW++) {
      let hX = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
      hX.image_xscale = 0x2, hX.image_yscale = 0x2, hX.sprite_index = 'spr_sparestar_anim', hX.image_alpha = 0x2, hX.image_speed = 0.25, hX.hspeed = -0x3, hX.gravity = 0.5, hX.gravity_direction = 0x0, this.star[this.starcount] = hX, this.starcount += 0x1;
    }
    if (hu >= 0x5 && hu <= 0x1e) for (let hY = 0x0; hY < this.starcount; hY++) {
      let hB = this.star[hY];
      hB && !hB.destroyed && (hB.image_angle += 0xa, hB.image_alpha -= 0.1, hB.image_alpha <= 0x0 && hB.instance_destroy());
    }
    if (hu >= 0x5 && hu < 0xa && (this.tone += 0x1), hu >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
      for (let hC = 0x0; hC < this.starcount; hC++) {
        let hx = this.star[hC];
        hx && !hx.destroyed && hx.instance_destroy();
      }
      this.instance_destroy();
    }
    this.t += 0x1;
  }
};
j0(jU, 'obj_spareanim'), j2(jU, 'kinds', QA('obj_spareanim', QE)), j2(jU, 'defaultDepth', 0x0);
var jH = jU,
  jI = class hg extends Q6 {
    get ["sprite_width"]() {
      return jh(this.sprite_index).w * Math.abs(this.image_xscale);
    }
    get ["sprite_height"]() {
      return jh(this.sprite_index).h * Math.abs(this.image_yscale);
    }
    ["create"]() {
      this.active = 0x0, this.visible = !0x1, this.image_alpha = 0x0, this.con = 0x0, this.xpos = Qy(0x0, 0x1, 0x2, 0x3), this.ypos = -0x8, this.fallspeed = 0x5, this.falltimer = 0x0, this.halt = 0x0;
    }
    ["step"]() {
      this.con === 0x1 && (this.active = 0x1, this.visible = !0x0, this.image_alpha += 0.15, this.image_alpha >= 0x1 && (this.con = 0x2)), this.con === 0x2 && (this.falltimer += 0x1, this.falltimer >= this.fallspeed && (this.ypos < 0x0 && !jd(this.x + this.sprite_width / 0x2, this.y + this.sprite_height * 1.5, 'obj_blockbullet_fall', this) ? this.ypos += 0x1 : this.halt = 0x1, this.falltimer = 0x0)), this.con === 0x0 && (this.con = 0x1), this.con === 0x3 && (this.image_alpha <= 0.2 && this.instance_destroy(), this.active = 0x0, this.image_alpha -= 0.2);
      let hI = Qb.first('obj_battlesolid');
      if (hI) {
        let hu = hI.x - hI.sprite_width / 0x2 + 0x8;
        this.x = hu + this.xpos * this.sprite_width;
        let hf = hI.y + hI.sprite_height / 0x2 - 0x3 - this.sprite_height;
        this.y = hf + this.ypos * this.sprite_height;
      }
      this.grazed === 0x1 && (this.grazepoints = 0x0, this.timepoints = 0x0);
    }
  };
j0(jI, 'obj_blockbullet_fall'), j2(jI, 'kinds', QA('obj_blockbullet_fall', Q6)), j2(jI, 'defaultDepth', 0x0), j2(jI, 'defaultSprite', 'spr_blockbullet_mini');
var ju = jI;
e({
  0x1a: (hI, hu) => {
    Qb.with('obj_regularbullet', hW => {
      hW.sprite_index === 'spr_blockbullet' && (hW.image_alpha += 0.1);
    });
    let hf = 0x23;
    if (QW() === 0x2 && (hf = 52.5), QW() === 0x3 && (hf = 0x4d), hI.btimer >= hf) {
      let hW = -0x3c,
        hX = -0x50 + Qq(0xa0);
      hW += hX;
      let hY = -hX / 0xa0,
        hB = -0x2;
      for (let hC = 0x0; hC < 0x2; hC++) {
        let hx = Qy(0x0, 0x1, 0x2),
          hG = Qy(0x0, 0x1, 0x2);
        for (let hN = 0x0; hN < 0x2; hN++) {
          let hp = QJ(0x1f4 + hC * 0x50, 0x8c + hW + hN * 0x50, Q7);
          Q4(hI, hp), hN === hx && (hp.y += Qy(0x0, 0x28)), hC === 0x1 && hN === 0x1 && (hp.x += Qy(0x0, -0x28), hp.y = 0x8c + hW + Qy(0x0, 0x28) + hN * 0x50), hp.hspeed = hB, hp.vspeed = hY, hp.friction = -0.07, QW() >= 0x2 && (hp.friction = -0.1), hp.sprite_index = 'spr_blockbullet', hp.image_alpha = 0x0;
        }
      }
      hI.btimer = 0x0;
    }
  },
  0x1b: (hI, hu) => {
    let hf = 0xf;
    QW() === 0x2 && (hf = 25.5), QW() === 0x3 && (hf = 34.5);
    let hW = hu.bs;
    if (!hW) return;
    let hX = hW.x - hW.sprite_width / 0x2 + 0x8,
      hY = hW.y + hW.sprite_height / 0x2 - 0xf;
    if (hI.btimer >= hf) {
      let hN = hI.made;
      hI.made = Qy(0x0, 0x1, 0x2, 0x3), hI.made === hN && (hI.made = Qy(0x0, 0x1, 0x2, 0x3)), hI.btimer = 0x0;
      let hp = QJ(0x64, 0x64, ju);
      hp.xpos = hI.made, Q4(hI, hp);
      let hM = jd(hX + hI.made * hp.sprite_width + 0x8, hY - hp.sprite_height * 0x3 - 0xa, 'obj_blockbullet_fall', null);
      hM && hM.halt === 0x1 && hp.instance_destroy();
    }
    let hB = jd(hX + 0xf, hY, 'obj_blockbullet_fall', null),
      hC = jd(hX + 0xf + 0x22, hY, 'obj_blockbullet_fall', null),
      hx = jd(hX + 0xf + 0x44, hY, 'obj_blockbullet_fall', null),
      hG = jd(hX + 0xf + 0x66, hY, 'obj_blockbullet_fall', null);
    hB && hC && hx && hG && (hB.con = 0x3, hC.con = 0x3, hx.con = 0x3, hG.con = 0x3);
  }
});
var jf = class hZ extends Q3 {
  get ["sprite_width"]() {
    return jh(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get ["sprite_height"]() {
    return jh(this.sprite_index).h * Math.abs(this.image_yscale);
  }
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
      'shakex': 0x0,
      'acting': 0x0,
      'actcon': 0x0,
      'acttimer': 0x0,
      'mercymod': 0x0,
      'maxmercy': 0x270f,
      'warned': 0x0,
      'compliment': 0x0,
      'tired': 0x0,
      'fixed': 0x0,
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
      'idlesprite': 'spr_blockguy_overworld',
      'hurtsprite': 'spr_blockguy_overworld',
      'sparedsprite': 'spr_blockguy_spared'
    });
    let hI = Qy(0x0, 0x1, 0x2, 0x3);
    this.headpart = 0x1, this.part = [0x0, 0x0, 0x0, 0x0, 0x0], hI === 0x0 && (this.headpart = 0x3, this.part[0x1] = 0x2, this.part[0x2] = 0x3, this.part[0x3] = 0x1), hI === 0x1 && (this.headpart = 0x3, this.part[0x1] = 0x3, this.part[0x2] = 0x2, this.part[0x3] = 0x1), hI === 0x2 && (this.headpart = 0x1, this.part[0x1] = 0x1, this.part[0x2] = 0x3, this.part[0x3] = 0x2), hI === 0x3 && (this.headpart = 0x2, this.part[0x1] = 0x2, this.part[0x2] = 0x1, this.part[0x3] = 0x3), this.part[0x4] = 0x4, this.maxpart = 0x5, this.siner = 0x0, this.floatsin = 0x0, this.party = [0x1c, 0x36, 0x46], this.floating = 0x0, this.swaptime = 0xa, this.bodyfade = 0x0, this.bodyalpha = 0x1, this.swapx = 0x0, this.sinmomentum = 0x0, this.custom = [4.5, 0x3, 1.5], this.select = [-0x1, -0x1, -0x1], this.selectpart = [0x0, 0x0, 0x0], this.partyb = [0x0, 0x0, 0x0], this.selecty = 0x0, this.selected = 0x0, this.selecttotal = 0x0, this.selectx = [0x0], this.movex = [0x0, 0x0, 0x0], this.threebuffer = 0x0, this.finishtimer = 0x0, this.hurk = 0x0, this.xspeed = 0x0, this.scolor = [j9, j9, j9], this.introtimer = 0x0, this.idealy = [0x0, 0x0, 0x0, 0x0, 0x0], this.cury = [0x0, 0x0, 0x0, 0x0, 0x0], this.yfactor = [0x0, 0x0, 0x0, 0x0, 0x0];
  }
  ["userEvent"](hI) {
    if (hI === 0xc) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    if (hI !== 0xb && hI === 0xa) {
      let hu = QJ(this.x, this.y, jH);
      hu.sprite_index = this.sparedsprite, hu.image_index = 0x0, hu.image_xscale = this.image_xscale, hu.image_yscale = this.image_yscale, this.scr_monsterdefeat(), this.instance_destroy();
      return;
    }
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && (this.con += 0x1);
  }
  ["step"]() {
    let hI = this.myself;
    if (Qx.monster[hI] === 0x1) {
      if (Qx.mnfight === 0x1 && this.talked === 0x0) {
        QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20');
        let hu = Qy(0x0, 0x1, 0x2, 0x3);
        hu === 0x0 && (Qx.msg[0x0] = "HOOH...! You&interrupted my&training...!"), hu === 0x1 && (Qx.msg[0x0] = "GOOH...! I'm&gonna knock&your block&off...!"), hu === 0x2 && (Qx.msg[0x0] = "Let's see how&you stack&up...! HIYA!!"), hu === 0x3 && (Qx.msg[0x0] = "Let me show&you my&training!&YIHA!!"), this.acting === 0x2 && (Qx.msg[0x0] = "ARRGH!!", this.part[0x2] === 0x3 && (Qx.msg[0x0] = "ARRGH!! NO!!&MY BUTT IS&MY ABS!"), this.part[0x1] === 0x3 && (Qx.msg[0x0] = "ARRGH!! NO!!&MY BUTT IS&MY FACE!!"), this.part[0x1] === 0x2 && (Qx.msg[0x0] = "ARRGH!! NO!!&MY ABS ARE&MY FACE!!"), this.part[0x1] === 0x1 && (Qx.msg[0x0] = "ARRGH!! NO!!&MY FACE IS&MY FACE!!&Wait..."), Qx.mercymod[hI] >= 0x64 && (Qx.msg[0x0] = "Oh, you mixed&me up all&nice~")), this.acting === 0x3 && (Qx.msg[0x0] = "My momentum&is totally&blocked&up..."), QT(this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0;
      }
      if (this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qw() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (Qb.with('obj_writer', hf => hf.instance_destroy()), Qb.with('obj_battleblcon', hf => hf.instance_destroy()), Qx.mnfight = 0x2), Qx.mnfight === 0x2 && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU))), Qx.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          let hf = Qy(0x0, 0x1),
            hW = 0x1;
          if (QW() >= 0x2 && hI >= 0x1 && (hW = 0x0), hf === 0x0 && hW === 0x1) {
            let hY = QJ(this.x, this.y, k);
            hY.type = 0x1a, hY.target = this.mytarget, hY.damage = Qx.monsterat[hI] * 0x5, hY.grazepoints = 0x5, hY.timepoints = 0x2;
          } else {
            let hB = QJ(this.x, this.y, k);
            hB.type = 0x1b, hB.target = this.mytarget, hB.damage = Qx.monsterat[hI] * 0x5, hB.grazepoints = 0x5;
          }
          this.turns += 0x1, Qx.turntimer = 0xaa, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0;
          let hX = Qy(0x0, 0x1, 0x2, 0x3, 0x4);
          hX === 0x0 && (Qx.battlemsg[0x0] = "* Bloxer is thinking about training."), hX === 0x1 && (Qx.battlemsg[0x0] = "* Bloxer is thinking about trains."), hX === 0x2 && (Qx.battlemsg[0x0] = "* Bloxer is thinking about training wheels."), hX === 0x3 && (Qx.battlemsg[0x0] = "* Bloxer considers building a house out of its own body."), hX === 0x4 && (Qx.battlemsg[0x0] = "* Smells like freshly-printed plastic."), Qx.monsterstatus[hI] === 0x1 && (Qx.battlemsg[0x0] = "* Bloxer is starting to break apart with exhaustion."), Qx.mercymod[hI] >= Qx.mercymax[hI] && (Qx.battlemsg[0x0] = "* Bloxer radiates with the spirit of joy.");
        } else Qx.turntimer = 0x78;
      }
      Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (this.battlecancel === 0x1 && (Qx.mercymod[hI] = 0x3e7), this.battlecancel === 0x2 && (Qb.with('obj_battlecontroller', hC => {
        hC.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3));
    }
    if (Qx.myfight === 0x3) {
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* BLOXER - AT 9 DF 2&* Loves: Training^1. Hates: Body being the wrong shape/%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Press " + j8(0x6) + " to choose:&  #1 HEAD, #2 BODY, #3 LEGS.", Qx.mercymod[hI] = 0x0, Qj(), this.actcon = 0xa, this.swaptime = 0x1, this.floatsin = 0x0, this.swapx = 0x0, this.sinmomentum = 0x0, this.party[0x0] = 0x1c, this.party[0x1] = 0x36, this.party[0x2] = 0x46, this.select[0x0] = -0x1, this.select[0x1] = -0x1, this.select[0x2] = -0x1, this.selecttotal = 0x0, this.movex[0x0] = 0x0, this.movex[0x1] = 0x0, this.movex[0x2] = 0x0, this.finishtimer = 0x0), this.acting === 0x3 && this.actcon === 0x0) {
        this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Susie became antagonistic!/";
        let hC = Qy(0x0, 0x1, 0x2);
        Qx.msg[0x1] = "* Why bother training^1? You'll NEVER beat me./", hC === 0x1 && (Qx.msg[0x1] = "* Why train^1? You're still 100 years too early to beat me./"), hC === 0x2 && (Qx.msg[0x1] = "* Training^1? Yeah^1, like I need that to beat you down./"), Qx.msg[0x2] = "* The enemies became \\cBTIRED\\cW.../%";
        for (let hx = 0x0; hx < 0x3; hx++) Qx.monstercomment[hx] = "(Tired)", Qx.monsterstatus[hx] = 0x1;
        Qj();
      }
      this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o()), this.actcon === 0xa && this.swaptime === 0x0 && (Qb.with('obj_writer', hG => hG.instance_destroy()), Qx.msg = new Array(0x64).fill('\x20'), Qx.mercymod[hI] >= 0x64 ? (Qx.msg[0x0] = "* Bloxer is pleased with its new self!/%", this.fixed = 0x1) : Qx.msg[0x0] = "* Bloxer is still unhappy with its self.../%", Qj(), this.actcon = 0x1);
    }
    Qx.myfight === 0x7 && (this.hspeed = 0xf);
  }
  ["draw"](hI) {
    let hu = this.myself,
      hf = this.part,
      hW = this.movex,
      hX = this.partyb,
      hY = this.select;
    this.threebuffer -= 0x1;
    let hB = QM(this.siner / 0x4),
      hC = Qv(this.siner / 0x4);
    if (this.swaptime === 0x5) {
      let hx = 0x0;
      for (let hG = 0x0; hG < 0x3; hG++) hW[hG] += this.xspeed, hW[hG] <= 0x0 && (hW[hG] = 0x0, hx += 0x1);
      hx >= 0x3 ? (this.swaptime = 0x6, hf[0x1] = this.selectpart[0x0], hf[0x2] = this.selectpart[0x1], hf[0x3] = this.selectpart[0x2], hf[0x1] === 0x1 && hf[0x2] === 0x2 && hf[0x3] === 0x3 && (hf[0x1] = 0x6, QX(hu, 0x64))) : (this.xspeed -= 0x2, hI.draw_sprite_ext('spr_blockguy_part', hf[0x3], this.x + hW[0x2], hX[0x2], 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext('spr_blockguy_part', hf[0x2], this.x + hW[0x1], hX[0x1], 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext('spr_blockguy_part', hf[0x1], this.x + hW[0x0], hX[0x0], 0x2, 0x2, 0x0, Qz.white, 0x1));
    }
    if (this.swaptime === 0x2 || this.swaptime === 0x3) {
      this.sinmomentum < 0.8 && (this.sinmomentum += 0.05), this.floatsin += this.sinmomentum, this.threebuffer <= 0x0 && (this.selecty = this.y + 0x1e + this.selecttotal * 0x1a), hY[0x0] < 0x0 && (hX[0x0] = this.y + 0x35 + QM(this.floatsin / 0x8 + this.custom[0x0]) * 0x19), hY[0x1] < 0x0 && (hX[0x1] = this.y + 0x35 + QM(this.floatsin / 0x8 + this.custom[0x1]) * 0x19), hY[0x2] < 0x0 && (hX[0x2] = this.y + 0x35 + QM(this.floatsin / 0x8 + this.custom[0x2]) * 0x19);
      let hN = -0x1,
        hp = 0x63;
      for (let hS = 0x0; hS < 0x3; hS++) if (this.scolor[hS] = j9, hY[hS] < 0x0) {
        let hl = Qp(hX[hS] - this.selecty);
        hl < hp && hl < 0x18 && (hp = hl, hN = hS);
      } else {
        hW[hS] < 0x3c && (hW[hS] += 0x6), this.scolor[hS] = jQ;
        let hz = this.y + 0x1c + hY[hS] * 0x19;
        Qp(hX[hS] - hz) < 0x6 && (hX[hS] = hz), hX[hS] < hz && (hX[hS] += 0x6), hX[hS] > hz && (hX[hS] -= 0x6);
      }
      let hM = Qz.white;
      for (let hF = 0x0; hF < 0x3; hF++) hN === hF && (this.scolor[hF] = jj, hM = Qz.yellow);
      hI.draw_sprite_ext('spr_blockguy_part', hf[0x3], this.x + hW[0x2], hX[0x2], 0x2, 0x2, 0x0, this.scolor[0x2], 0x1), hI.draw_sprite_ext('spr_blockguy_part', hf[0x2], this.x + hW[0x1], hX[0x1], 0x2, 0x2, 0x0, this.scolor[0x1], 0x1), hI.draw_sprite_ext('spr_blockguy_part', hf[0x1], this.x + hW[0x0], hX[0x0], 0x2, 0x2, 0x0, this.scolor[0x0], 0x1);
      let hv = this.threebuffer * 0x4;
      hv < 0x0 && (hv = 0x0);
      let hR = 0x0;
      this.threebuffer === 0x1 && (hR = 0xf), hI.draw_set_color(hM), this.finishtimer < 0x8 && this.selecttotal < this.maxpart - 0x2 && jP(hI, this.x - 0x32 + QM(this.floatsin / 0x6) * 0x2 + hv, this.selecty + 0xa + hR, this.x - 0xa + QM(this.floatsin / 0x6) * 0x2 + hv, this.selecty + 0xa + hR, 0x10), QD() && this.threebuffer < 0x0 && this.selecttotal < this.maxpart - 0x2 && (hN >= 0x0 && (this.selectpart[this.selecttotal] = hf[0x1 + hN], hY[hN] = this.selecttotal, this.selecttotal += 0x1, this.threebuffer = 0x6), this.selecttotal >= this.maxpart - 0x2 && (this.swaptime = 0x3)), this.swaptime === 0x3 && (this.finishtimer += 0x1), this.finishtimer >= 0xd && (this.swaptime = 0x5, this.xspeed = 0x4);
    }
    if (this.swaptime === 0x0 || this.swaptime === 0x1 || this.swaptime === 0x6) {
      this.hurk = 0x0, this.state === 0x3 && (this.hurk = 0x1, Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 0x3 && (Qx.monsterstatus[hu] = 0x1, Qx.monstercomment[hu] === '\x20' && (Qx.monstercomment[hu] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (this.hspeed = 0xa), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0))), this.swaptime === 0x0 && (this.siner += 0x1), this.swaptime === 0x1 && (this.swapx += 0x2), this.swaptime === 0x6 && (this.swapx > 0x0 && (this.swapx -= 0x2), this.swapx <= 0x0 && (this.swaptime = 0x0)), this.swapx >= 0x10 && this.swaptime === 0x1 && (this.swaptime = 0x2), this.swaptime === 0x0 && hf[0x1] === 0x1 && hf[0x2] === 0x2 && hf[0x3] === 0x3 && (hf[0x1] = 0x6), this.swaptime === 0x1 && hf[0x1] === 0x6 && (hf[0x1] = 0x1);
      let hc = 'spr_blockguy_part';
      this.hurk === 0x1 && (hc = 'spr_blockguy_part_hurt');
      let hw = this.x,
        hq = this.y,
        hD = this.swapx,
        hE = this.shakex;
      if (hI.draw_sprite_ext(hc, 0x5, hw - 0x18 + hB * 0x2 + hD * 1.5 + hE, hq + 0x36 + hC * 0x2, 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext(hc, hf[0x4], hw - hB + hE, hq + 0x64 - hD, 0x2, 0x2, 0x0, Qz.white, 0x1), (this.swaptime === 0x1 || this.swaptime === 0x6) && hI.draw_sprite_ext(hc, hf[0x0], hw + hB * 0x2 + hE, hq + hD, 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext(hc, hf[0x3], hw - 0x4 + hB * 0x2 + hE, hq + 0x4e, 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext(hc, hf[0x2], hw + 0x4 - hB * 0x2 + hE, hq + 0x36, 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext(hc, hf[0x1], hw + hB * 0x2 + hE, hq + 0x1c, 0x2, 0x2, 0x0, Qz.white, 0x1), this.swaptime === 0x0 && hI.draw_sprite_ext(hc, hf[0x0], hw + hB * 0x2 + hE, hq + hD, 0x2, 0x2, 0x0, Qz.white, 0x1), this.state === 0x0 && this.flash === 0x1) {
        this.fsiner += 0x1;
        let hA = -Qv(this.fsiner / 0x5) * 0.4 + 0.6;
        hI.draw_sprite_white(hc, 0x5, hw - 0x18 + hB * 0x2 + hD * 1.5 + hE, hq + 0x36 + hC * 0x2, 0x2, 0x2, 0x0, hA), hI.draw_sprite_white(hc, hf[0x4], hw - hB + hE, hq + 0x64 - hD, 0x2, 0x2, 0x0, hA), (this.swaptime === 0x1 || this.swaptime === 0x6) && hI.draw_sprite_white(hc, hf[0x0], hw + hB * 0x2 + hE, hq + hD, 0x2, 0x2, 0x0, hA), hI.draw_sprite_white(hc, hf[0x3], hw - 0x4 + hB * 0x2 + hE, hq + 0x4e, 0x2, 0x2, 0x0, hA), hI.draw_sprite_white(hc, hf[0x2], hw + 0x4 - hB * 0x2 + hE, hq + 0x36, 0x2, 0x2, 0x0, hA), hI.draw_sprite_white(hc, hf[0x1], hw + hB * 0x2 + hE, hq + 0x1c, 0x2, 0x2, 0x0, hA);
      }
    }
    if (this.swaptime === 0xa) {
      this.introtimer = 0x0, this.idealy = [0x0, 0x1c, 0x36, 0x4e, 0x64];
      for (let hy = 0x0; hy < 0x5; hy++) this.cury[hy] = 0x64, this.yfactor[hy] = (0x64 - this.idealy[hy]) / 0x10;
      this.cury[0x0] = 0x4e, this.yfactor[0x0] = 4.875, this.swaptime = 0xb;
    }
    if (this.swaptime === 0xb) {
      hI.draw_sprite_ext('spr_blockguy_part', 0x5, this.x - this.introtimer * 0x2 + 0x6, this.y + this.cury[0x2], 0x2, 0x2, 0x0, Qz.white, 0x1);
      for (let hk = 0x4; hk >= 0x0; hk--) this.cury[hk] -= this.yfactor[hk], hI.draw_sprite_ext('spr_blockguy_part', hf[hk], this.x, this.y + this.cury[hk], 0x2, 0x2, 0x0, Qz.white, 0x1);
      hI.draw_sprite_ext('spr_blockguy_part', hf[this.headpart], this.x, this.y + this.cury[this.headpart], 0x2, 0x2, 0x0, Qz.white, 0x1), hI.draw_sprite_ext('spr_blockguy_part', hf[0x0], this.x, this.y + this.cury[0x0], 0x2, 0x2, 0x0, Qz.white, 0x1), this.introtimer += 0x1, this.introtimer >= 0x10 && (this.swaptime = 0x0);
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(jf, 'obj_bloxer_enemy'), j2(jf, 'kinds', QA('obj_bloxer_enemy', Q3)), j2(jf, 'defaultDepth', 0x5a), j2(jf, 'defaultSprite', 'spr_blockguy_spared');
var jW = jf,
  jX = [{
    'id': 'bloxer',
    'name': 'Bloxer',
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "Bloxer.#Rearrange its blocks.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': jW,
      'type': 0xe,
      'x': 0x1e0,
      'y': 0x8c,
      'setup': jT
    }],
    'battlemsg': "* Bloxer assembled!",
    'encounterno': 0x12,
    'music': 'battle'
  }, {
    'id': 'bloxer2',
    'name': "Bloxer x2",
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "Two Bloxers.#Falling bricks.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': jW,
      'type': 0xe,
      'x': 0x1e0,
      'y': 0x3c,
      'setup': jT
    }, {
      'cls': jW,
      'type': 0xe,
      'x': 0x1cc,
      'y': 0xb4,
      'setup': jT
    }],
    'battlemsg': "* Bloxers assembled!",
    'encounterno': 0x13,
    'music': 'battle'
  }];
j3(jW, "G.mnfight = 2;");
var jY = {};
j1(jY, {
  'FIGHTS': () => jE,
  'SOUNDS': () => jC,
  'SPRITES': () => jB,
  'obj_clubsbullet': () => jS,
  'obj_clubsbullet_dark_t0': () => jz,
  'obj_clubsenemy': () => jc,
  'obj_defeatanim': () => jg,
  'obj_spareanim': () => jv,
  'setupStats': () => jp,
  'setupStats16': () => jN,
  'setupStats7': () => jG
}), j4();
var jB = ['spr_clubs_idle', 'spr_clubs_hurt', 'spr_clubs_spared', 'spr_battleblcon_clubs', 'spr_clubsbullet', 'spr_clubsbullet_dark', 'spr_clubsball_a', 'spr_clubsball_b', 'spr_clubsball_c', 'spr_defeatsweat', 'spr_sparestar_anim'],
  jC = ['snd_defeatrun', 'snd_spare'],
  jx = j0(() => {
    Qx.msg = new Array(0x64).fill('\x20');
  }, 'clearmsg');
function jG(hI) {
  Qx.monstername[hI] = 'Clover', Qx.monstermaxhp[hI] = 0x10e, Qx.monsterhp[hI] = 0x10e, Qx.monsterat[hI] = 0x8, Qx.monsterdf[hI] = 0x1, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x2b, Qx.sparepoint[hI] = 0xa, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check';
  let hu = Qy(0x0, 0x1, 0x2);
  hu === 0x0 && (Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Politics', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Religion', Qx.canact[hI][0x3] = 0x1, Qx.actname[hI][0x3] = 'Sports'), hu === 0x1 && (Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Kindness', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Cuteboys', Qx.canact[hI][0x3] = 0x1, Qx.actname[hI][0x3] = 'GunControl'), hu === 0x2 && (Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Trees', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Ghosts', Qx.canact[hI][0x3] = 0x1, Qx.actname[hI][0x3] = 'Games'), QN(0x2) && (Qx.canact[hI][0x4] = 0x1, Qx.actname[hI][0x4] = 'Warning', Qx.actactor[hI][0x4] = 0x3);
}
j0(jG, 'setupStats7');
function jN(hI) {
  Qx.monstername[hI] = 'Clover', Qx.monstermaxhp[hI] = 0x10e, Qx.monsterhp[hI] = 0x10e, Qx.monsterat[hI] = 0x6, Qx.monsterdf[hI] = 0x1, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x50, Qx.sparepoint[hI] = 0xa, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'TalkBday', Qx.actactor[hI][0x1] = 0x3, Qx.actname[hI][0x2] = 'TalkBoys', Qx.canact[hI][0x2] = 0x1, Qx.actactor[hI][0x2] = 0x3, Qx.actname[hI][0x3] = 'TalkSports', Qx.canact[hI][0x3] = 0x1, Qx.actactor[hI][0x3] = 0x3, Qx.actname[hI][0x4] = 'TalkAnimals', Qx.canact[hI][0x4] = 0x1, Qx.actname[hI][0x5] = 'TalkTrees', Qx.canact[hI][0x5] = 0x1, Qy(0x0, 0x1, 0x2);
}
j0(jN, 'setupStats16');
var jp = jN,
  jM = class hn extends QE {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], Ql('snd_spare'), QS('snd_spare');
    }
    ["draw"](hI) {
      let hu = this.sprite_index,
        hf = this.image_index,
        hW = this.image_xscale,
        hX = this.image_yscale;
      if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, hI.draw_sprite_white(hu, hf, this.x + this.afterimage * 0x4, this.y, hW, hX, 0x0, 0.7 - this.afterimage / 0x19), hI.draw_sprite_white(hu, hf, this.x + this.afterimage * 0x8, this.y, hW, hX, 0x0, 0.4 - this.afterimage / 0x1e)), this.t < 0x6) {
        this.t < 0x5 && hI.draw_sprite_ext(hu, hf, this.x, this.y, hW, hX, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
        let hY = this.t / 0x5;
        hY > 0x1 && (hY = 0x1), hI.draw_sprite_white(hu, hf, this.x, this.y, hW, hX, 0x0, hY - this.tone / 0x5);
      }
      if (this.t >= 0x1 && this.t <= 0x5) for (let hB = 0x0; hB < 0x2; hB += 0x1) {
        let hC = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
        hC.image_xscale = 0x2, hC.image_yscale = 0x2, hC.sprite_index = 'spr_sparestar_anim', hC.image_alpha = 0x2, hC.image_speed = 0.25, hC.hspeed = -0x3, hC.gravity = 0.5, hC.gravity_direction = 0x0, this.star[this.starcount] = hC, this.starcount += 0x1;
      }
      if (this.t >= 0x5 && this.t <= 0x1e) for (let hx = 0x0; hx < this.starcount; hx += 0x1) {
        let hG = this.star[hx];
        hG && !hG.destroyed && (hG.image_angle += 0xa, hG.image_alpha -= 0.1, hG.image_alpha <= 0x0 && hG.instance_destroy());
      }
      if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
        for (let hN = 0x0; hN < this.starcount; hN += 0x1) {
          let hp = this.star[hN];
          hp && !hp.destroyed && hp.instance_destroy();
        }
        this.instance_destroy();
      }
      this.t += 0x1;
    }
  };
j0(jM, 'obj_spareanim'), j2(jM, 'kinds', QA('obj_spareanim', QE)), j2(jM, 'defaultDepth', 0x0);
var jv = jM,
  jJ = class ho extends QE {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, QS('snd_defeatrun');
    }
    ["step"]() {
      this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
    }
    ["draw"](hI) {
      this.t === 0x0 && this.draw_self(hI);
      let hu = 0x0;
      if (this.g <= 0x5 && (hu = 0x1), this.g >= 0x9 && this.g <= 0xd && (hu = 0x1), hu === 0x1 && hI.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (let hf = 0x0; hf <= 0x50; hf += 0x1) hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * hf, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.4 - this.t / 0x8 + hf / 0xc8);
        this.t >= 0xf && this.instance_destroy();
      }
    }
  };
j0(jJ, 'obj_defeatanim'), j2(jJ, 'kinds', QA('obj_defeatanim', QE)), j2(jJ, 'defaultDepth', 0x0);
var jg = jJ;
function jZ(hI) {
  let hu = QJ(hI.x, hI.y, jg);
  hu.sprite_index = hI.sprite_index, hu.sprite_index = hI.hurtsprite, hu.image_index = 0x0, hu.image_xscale = hI.image_xscale, hu.image_yscale = hI.image_yscale, hI.instance_destroy();
}
j0(jZ, 'scr_defeatrun');
var jR = class hV extends Q5 {
  ["create"]() {
    this.damage = 0x0, this.target = 0x0;
  }
  ["endStep"]() {
    if (this.destroyed || !QR(this, this.x, this.y, 'obj_battlesolid')) return;
    let hI = (hu, hf, hW) => {
      let hX = QJ(this.x, this.y, Q7);
      hX.destroyed || (hX.sprite_index = hu, hX.direction = this.direction + hf, hX.speed = this.speed + hW, hX.image_angle = this.image_angle, hX.damage = this.damage, hX.target = this.target, hX.grazepoints = 0x3, hX.timepoints = 0x2);
    };
    hI('spr_clubsball_b', 0x0, -0x6), hI('spr_clubsball_c', -0x19, -0x8), hI('spr_clubsball_a', 0x19, -0x8), this.instance_destroy();
  }
};
j0(jR, 'obj_clubsbullet'), j2(jR, 'kinds', QA('obj_clubsbullet', Q5)), j2(jR, 'defaultDepth', -0x14), j2(jR, 'defaultSprite', 'spr_clubsbullet');
var jS = jR,
  jl = class hr extends Q9 {
    ["step"]() {
      if (this.type !== 0x0) {
        super.step();
        return;
      }
      this.dtimer += 0x1;
      let hI = Qb.first('obj_heart');
      if (this.dtimer === 0xf || this.dtimer === 0x13 || this.dtimer === 0x17) {
        this.move_towards_point(hI ? hI.x + 0x8 : 0x140, hI ? hI.y + 0x8 : 0xaa, 0.1);
        let hu = (hf, hW) => {
          let hX = QJ(this.x, this.y, Q7);
          hX.destroyed || (hX.sprite_index = hf, hX.direction = this.direction + hW, hX.speed = 0x4, hX.image_angle = this.direction, hX.damage = this.damage, hX.target = this.target, hX.grazepoints = 0x2, hX.timepoints = 0x1);
        };
        hu('spr_clubsball_b', 0x0), hu('spr_clubsball_c', -0x11), hu('spr_clubsball_a', 0x11);
      }
      if (this.dtimer === 0x19) {
        let hf = QJ(this.x, this.y, Qh);
        hf.sprite_index = this.sprite_index, hf.image_angle = this.image_angle, this.instance_destroy();
      }
    }
  };
j0(jl, 'obj_clubsbullet_dark_t0'), j2(jl, 'kinds', QA('obj_clubsbullet_dark_t0', Q9));
var jz = jl;
e({
  0x2: hI => {
    if (hI.btimer >= 0x14 * hI.ratio) {
      let hu = -0x14;
      hI.side === 0x1 && (hu = 0x294);
      let hf = hI.miny + Qq(hI.maxy - hI.miny),
        hW = QJ(hu, hf, jS);
      hW.speed = 0xc, hW.damage = hI.damage, hW.target = hI.target, hI.side === 0x1 && (hW.direction = 0xb4, hW.image_angle = 0xb4), hI.btimer = 0x0;
    }
  },
  0x4: (hI, hu) => {
    if (hI.btimer >= 0x1e * hI.ratio) {
      hI.btimer = 0x0;
      let hf = 0xe1;
      hI.side === -0x1 && (hf = 0xe1), hI.side === 0x1 && (hf = 0x13b);
      let hW = 0x190,
        hX = Qk(hW, hf),
        hY = Qn(hW, hf),
        hB = hu.heart,
        hC = hB ? hB.x : 0x140,
        hx = hB ? hB.y : 0xaa,
        hG = QJ(hC + 0x8 + hX, hx + 0x8 + hY, jz);
      hG.damage = hI.damage, hG.target = hI.target, hG.direction = hf + 0xb4, hG.speed = 0x14, hG.friction = 0x1, hG.image_angle = hG.direction, hI.side === 0x1 ? hI.side = -0x1 : hI.side = 0x1;
    }
  }
});
var jF = class hK extends Q3 {
  ["create"]() {
    Object.assign(this, {
      'bikeflip': 0x0,
      'becomeflash': 0x0,
      'turnt': 0x0,
      'turns': 0x0,
      'talktimer': 0x0,
      'talkmax': 0x96,
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
      'manual': 0x0,
      'attacks': 0x0,
      'dodgetimer': 0x0,
      'candodge': 0x0,
      'con': 0x0,
      'battlecancel': 0x0,
      'nexttry': 0x0,
      'mytarget': 0x3,
      'image_speed': 0x0,
      'betray': 0x0,
      'argue': 0x0,
      'image_xscale': 0x2,
      'image_yscale': 0x2,
      'idlesprite': 'spr_clubs_idle',
      'hurtsprite': 'spr_clubs_hurt',
      'sparedsprite': 'spr_clubs_spared',
      'rtimer': 0x0
    }), this.acted = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
  }
  ["setupFn"](hI) {
    Qx.monstertype[hI] === 0x7 ? jG(hI) : jN(hI);
  }
  ["userEvent"](hI) {
    if (hI === 0xc) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2 + 0x32, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2 + 0x28, this.setupFn(this.myself);
      return;
    }
    if (hI === 0xa) {
      this.spared();
      return;
    }
    super.userEvent(hI);
  }
  ["spared"]() {
    let hI = QJ(this.x, this.y, jv);
    hI.sprite_index = this.sparedsprite, hI.image_index = 0x0, hI.image_xscale = this.image_xscale, hI.image_yscale = this.image_yscale, this.scr_monsterdefeat(), this.instance_destroy();
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && (this.con += 0x1);
  }
  ["blcon3"](hI, hu, hf) {
    let hW = (hX, hY, hB, hC) => {
      jx(), Qx.msg[0x0] = hC;
      let hx = QT(hX, hY, hB);
      hx && (hx.sprite_index = 'spr_battleblcon_clubs', hx.image_index = hB - 0x4, hx.image_speed = 0x0);
    };
    hW(this.x - 0x6e, this.y - 0xa, 0x4, hI), hW(this.x - 0x7d, this.y + 0x46, 0x5, hu), hW(this.x + 0x7d, this.y - 0xa, 0x6, hf);
  }
  ["step"]() {
    let hI = this.myself;
    if (Qx.monster[hI] === 0x1) {
      if (Qx.mnfight === 0x1 && this.talked === 0x0) {
        QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32;
        let hu = Qy(0x0, 0x1, 0x2),
          hf = "Nice mouth",
          hW = "Anger mouth",
          hX = "Smart Mouth";
        hu === 0x0 && (hf = "Nice to&meet you!", hW = "Die!&Die!&Die!", hX = "Please&ignore&them."), hu === 0x1 && (hf = "Let's get&to know&you~", hW = "GET OUT&OF HERE!!", hX = "Sorry&about&this..."), hu === 0x2 && (hf = "Nice&weather&today.", hW = "What?&It's just&awful!", hX = "Please&stop, you&two..."), this.acting === 0x2 && (hf = "It's my&birthday~", hW = "WHAT!? NO!&It's MY&birthday!", hX = "We're&triplets..."), this.acting === 0x3 && (hf = "Glasses&are cute,&I think...", hW = "Fluffy!&Glasses!&That's it!", hX = "HIM???&... err,&sure."), this.acting === 0x4 && (hf = "Spaghetti&and tennis&balls.", hW = "That's&GENIUS!", hX = "We really&agree&on it."), this.acting === 0x5 && (hf = "Animals&are kind&of nasty.", hW = "Just AWFUL&in&concept.", hX = "(Never&seen one,&but...)"), this.acting === 0x6 && (hf = "I love&the smell&of trees.", hW = "Oh!&Me too!", hX = "Pollen&makes me...&Uh, sure!"), this.manual === 0x1 && (hf = "Aww, he&MADE that!?&So caring!", hW = "It's SOOO&cute!&I want it!", hX = "(Isn't it&a bit...&boring?)"), this.blcon3(hf, hW, hX), Qb.with('obj_monsterparent', hY => {
          hY.talkmax = 0xd2;
        }), this.talked = 0x1, this.talktimer = 0x0, this.manual = 0x0;
      }
      if (this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qw() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Qb.with('obj_writer', hY => hY.instance_destroy()), Qx.mnfight = 0x2), Qx.mnfight === 0x2 && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU))), Qx.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          let hY = Qy(0x0, 0x1),
            hB = QJ(this.x, this.y, k);
          hB.type = hY === 0x0 ? 0x2 : 0x4, hB.target = this.mytarget, hB.damage = Qx.monsterat[hI] * 0x5, this.turns += 0x1, Qx.turntimer = 0x96, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0;
          let hC = Qy(0x0, 0x1, 0x2, 0x3, 0x4, 0x5);
          hC === 0x0 && (Qx.battlemsg[0x0] = "* Clover flashes a trio of terrible smiles."), hC === 0x1 && (Qx.battlemsg[0x0] = "* Clover is bickering with herselves."), hC === 0x2 && (Qx.battlemsg[0x0] = "* Clover is whispering about cute boys."), hC === 0x3 && (Qx.battlemsg[0x0] = "* Clover is arguing about whose toothbrush is whose."), hC === 0x4 && (Qx.battlemsg[0x0] = "* Clover hums like an out-of-tune choir."), hC === 0x5 && (Qx.battlemsg[0x0] = "* Smells like clover and dew."), Qx.monsterstatus[hI] === 0x1 && (Qx.battlemsg[0x0] = "* Clover seems TIRED of discussing so much."), Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 0x3 && (Qx.battlemsg[0x0] = "* Clover starts to look wilted."), Qx.mercymod[hI] >= Qx.mercymax[hI] && (Qx.msg[0x0] = "* Clover seems to be getting along with herselves."), this.betray === 0x1 && (Qx.battlemsg[0x0] = "* Clover's harmony was shattered by violence."), this.betray = 0x0;
        } else Qx.turntimer = 0x96;
      }
    }
    Qx.myfight === 0x3 && this.actStep();
  }
  ["actStep"]() {
    let hI = this.myself,
      hu = () => Qb.exists('obj_writer');
    this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, jx(), Qx.msg[0x0] = "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (Qx.typer = 0x2d, Qx.fc = 0x2, Qx.fe = 0x0, jx(), Qx.msg[0x0] = "* Ummm^1, what would you like for your birthday?/%", this.argue += 0x1, QQ(), this.actcon = 0x14), this.actcon === 0x14 && !hu() && (Qx.typer = 0x32, this.blcon3("Let's just&have a nice&chat~/%", "You IDIOT!&Ask for a&GIFT!!!/%", "(Just&discuss&our likes.)/%"), this.actcon = 0x15), this.actcon === 0x15 && !hu() && (jx(), Qx.msg[0x0] = "* (Seems like you should talk about something else...)/%", Qj(), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (Qx.typer = 0x2d, Qx.fc = 0x2, Qx.fe = 0x0, jx(), Qx.msg[0x0] = "* Ummm..^1. What kind of \"Boys\" do you like?/%", this.argue += 0x1, QQ(), this.actcon = 0x16), this.actcon === 0x16 && !hu() && (Qx.typer = 0x32, this.acted[0x2] === 0x0 && (QX(hI, 0x28), this.acted[0x2] = 0x1), this.blcon3("Cute ones!&Hmm hmm~&/%", "NICE ONES,&like I AM!/%", "None...&Um, I mean,&all./%"), this.actcon = 0x17), this.actcon === 0x17 && !hu() && (jx(), Qx.msg[0x0] = "* (Seems like Clover enjoyed talking about that...)/%", Qj(), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && (Qx.typer = 0x2d, Qx.fc = 0x2, Qx.fe = 0x0, jx(), Qx.msg[0x0] = "* Do you like^1, um..^1. Sports?/%", this.argue += 0x1, QQ(), this.actcon = 0x18), this.actcon === 0x18 && !hu() && (Qx.typer = 0x32, this.acted[0x3] === 0x0 && (QX(hI, 0x28), this.acted[0x3] = 0x1), this.blcon3("I wanna&eat a&football./%", "Sports!&My favorite&food!/%", "Oh!&I love you&two!/%"), this.actcon = 0x19), this.actcon === 0x19 && !hu() && (jx(), Qx.msg[0x0] = "* (Seems like Clover enjoyed talking about that...)/%", Qj(), this.actcon = 0x1), this.acting === 0x5 && this.actcon === 0x0 && (jx(), Qx.msg[0x0] = "* You brought up the topic of Animals./", Qx.msg[0x1] = "* Clover didn't seem to care.../%", this.argue += 0x1, Qj(), this.actcon = 0x1), this.acting === 0x6 && this.actcon === 0x0 && (this.acted[0x5] === 0x0 && (QX(hI, 0x28), this.acted[0x5] = 0x1), jx(), Qx.msg[0x0] = "* You brought up the topic of Trees^1. Clover seemed happy.../%", this.argue += 0x1, Qj(), this.actcon = 0x1), this.actcon === 0x1 && !hu() && (this.argue >= 0x3 && (Qx.monstercomment[hI] = "(Tired)", Qx.monsterstatus[hI] = 0x1), this.actcon = 0x0, o());
  }
  ["draw"](hI) {
    let hu = this.myself;
    if (this.state === 0x3 && (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 0x2 && (Qx.monsterstatus[hu] = 0x1, Qx.monstercomment[hu] === '\x20' && (Qx.monstercomment[hu] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (Qx.flag[0x20a] += 0x1, jZ(this)), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext('spr_clubs_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0) {
      this.siner += 0x1;
      let hf = 'spr_clubs_idle';
      Qx.mercymod[hu] >= Qx.mercymax[hu] && (hf = 'spr_clubs_spared'), hI.draw_sprite_ext(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(jF, 'obj_clubsenemy'), j2(jF, 'kinds', QA('obj_clubsenemy', Q3)), j2(jF, 'defaultDepth', 0x5a), j2(jF, 'defaultSprite', 'spr_clubs_idle');
var jc = jF,
  jw = j0(() => {}, 'none'),
  jq = j0((hI, hu, hf, hW) => ({
    'cls': null,
    'type': 0x0,
    'x': hf,
    'y': hW,
    'setup': jw,
    'missing': hI,
    'missingType': hu
  }), 'MISSING'),
  ja = null;
try {
  let hb = await hH("./c-J62DCCBN.js", import.meta.url);
  hb && hb.obj_heartenemy && (ja = hb);
} catch {
  ja = null;
}
var jD = ja ? {
    'cls': ja.obj_heartenemy,
    'type': 0x6,
    'x': 0x1a4,
    'y': 0xc8,
    'setup': ja.setupStats
  } : jq('obj_heartenemy', 0x6, 0x1a4, 0xc8),
  jE = [{
    'id': 'clover',
    'name': 'Clover',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Clover.#Three heads,#one flower.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': jc,
      'type': 0x10,
      'x': 0x190,
      'y': 0x78,
      'setup': jN
    }],
    'battlemsg': "* Clover grew close!",
    'encounterno': 0x8,
    'music': 'battle'
  }, {
    'id': "clover-hathy",
    'name': "Clover & Hathy",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Clover and Hathy.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': jc,
      'type': 0x7,
      'x': 0x190,
      'y': 0x1e,
      'setup': jG
    }, jD],
    'battlemsg': "* Clover and Hathy grew close!",
    'encounterno': 0xf,
    'music': 'battle'
  }];
j3(jc, "G.mnfight = 2;");
var jA = {};
j1(jA, {
  'FIGHTS': () => TJ,
  'SOUNDS': () => jk,
  'SPRITES': () => jy,
  'obj_animation': () => T7,
  'obj_chainking': () => TW,
  'obj_chainpiece': () => TT,
  'obj_fadechain': () => Th,
  'obj_finalchain': () => TC,
  'obj_growtangle_bouncer': () => Tu,
  'obj_heartmarker': () => T1,
  'obj_king_body': () => Tv,
  'obj_king_boss': () => Tp,
  'obj_nonsolid_growtangle': () => TH,
  'obj_oflash': () => T4,
  'obj_skychain': () => TP,
  'obj_wavechain': () => TY,
  'setupStats': () => jn
}), j4();
var jy = ['spr_chainking_idle', 'spr_chainking_hurt', 'spr_chainking_spin', 'spr_chainking_toss', 'spr_chainking_toss_idle', 'spr_chainking_pullback', 'spr_chainking_receive', 'spr_chainpiece', 'spr_chainfront', 'spr_spadebullet', 'spr_battlebg_wavechain', 'spr_battlebg_1', 'spr_battlebg_2', 'spr_battlebg_spikes', 'spr_bouncebox_spike', 'spr_heartoutline', 'spr_soulshining', 'spr_susieb_idle_serious', 'spr_susieb_attack_serious', 'spr_diamondbullet_form'],
  jk = ['snd_dadblast', 'snd_dadlaugh', 'snd_criticalswing', 'snd_chain_extend', 'snd_chain_wave', 'snd_locker', 'snd_screenshake', 'snd_bump', 'snd_menumove', 'snd_spearrise', 'snd_power', 'snd_boost'];
function jn(hI) {
  Qx.monstername[hI] = 'King', Qx.monstermaxhp[hI] = 0xaf0, Qx.monsterhp[hI] = 0xaf0, Qx.monsterat[hI] = 0x8, Qx.monsterdf[hI] = 0x0, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x0, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x3e7, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actactor[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Talk', Qx.actdesc[hI][0x1] = '\x20', Qx.actcost[hI][0x1] = 0x0, Qx.canact[hI][0x2] = 0x1, Qx.actactor[hI][0x2] = 0x2, Qx.actname[hI][0x2] = 'Talk', Qx.actdesc[hI][0x2] = '\x20', Qx.actcost[hI][0x2] = 0x0, Qx.canact[hI][0x3] = 0x1, Qx.actactor[hI][0x3] = 0x3, Qx.actname[hI][0x3] = 'Talk', Qx.actdesc[hI][0x3] = '\x20', Qx.actcost[hI][0x3] = 0x0, Qx.tempflag[0x5] === 0x1 && (Qx.canact[hI][0x1] = 0x1, Qx.actactor[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Courage', Qx.actdesc[hI][0x1] = "Defense#Boost", Qx.actcost[hI][0x1] = 0x3e), Qx.tempflag[0x6] === 0x1 && (Qx.canact[hI][0x2] = 0x1, Qx.actactor[hI][0x2] = 0x2, Qx.actname[hI][0x2] = 'RedBuster', Qx.actdesc[hI][0x2] = "Red#Damage", Qx.actcost[hI][0x2] = 0x96), Qx.tempflag[0x7] === 0x1 && (Qx.canact[hI][0x3] = 0x1, Qx.actactor[hI][0x3] = 0x3, Qx.actname[hI][0x3] = 'DualHeal', Qx.actdesc[hI][0x3] = "Heals#everyone", Qx.actcost[hI][0x3] = 0x7d);
}
j0(jn, 'setupStats');
var jo = j0((hI, hu) => {
    Qx.msg[hI] = Qx.plot >= 0xeb ? "\\TX \\F0 \\E" + hu + " \\FK \\TK %" : "\\TX \\F0 \\E" + hu + " \\TK %";
  }, 'scr_kingface'),
  jV = j0((hI, hu) => {
    Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FS \\TS %";
  }, 'scr_susface'),
  jr = j0((hI, hu) => {
    Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FR \\TR %";
  }, 'scr_ralface'),
  jK = j0(hI => {
    Qx.msg[hI] = "\\TX \\F0 \\T0 %";
  }, 'scr_noface'),
  jb = 0x0,
  jm = 0x0,
  jO = j0(() => Qb.first('obj_heart'), 'heart'),
  T0 = class hm extends QE {};
j0(T0, 'obj_heartmarker'), j2(T0, 'kinds', QA('obj_heartmarker', QE)), j2(T0, 'defaultDepth', 0x0), j2(T0, 'defaultSprite', 'spr_diamondbullet_form'), j2(T0, 'defaultVisible', !0x1);
var T1 = T0;
function T2() {
  let hI = Qb.first('obj_herokris'),
    hu = QJ(hI ? hI.x + 0xa : 0x5a, hI ? hI.y + 0x28 : 0x8c, QH),
    hf = Qb.first('obj_heartmarker');
  if (hf) {
    hu.distx = hf.x, hu.disty = hf.y;
    let hW = Qr(hu.x, hu.y, hu.distx, hu.disty);
    hu.move_towards_point(hu.distx, hu.disty, hW / hu.flytime);
  }
  return hu;
}
j0(T2, 'scr_moveheart_k');
var T3 = class hO extends QE {
  ["create"]() {
    this.flashspeed = 0x1, this.siner = 0x0, this.target = null, this.image_speed = 0x0, this.flashcolor = Qz.white;
  }
  ["draw"](hI) {
    Qb.exists(this.target) && (this.image_index = this.target.image_index, this.sprite_index = this.target.sprite_index), this.siner += this.flashspeed;
    let hu = Qg[this.sprite_index];
    if (hu) {
      let hf = hI.ctx;
      hf.save(), hf.globalAlpha = Math.max(0x0, Math.min(0x1, QM(this.siner / 0x3))), hf.translate(this.x, this.y), hf.scale(this.image_xscale, this.image_yscale), hf.drawImage(hI.tinted(hu, hI.frame(this.sprite_index, this.image_index), this.flashcolor, !0x0), -hu.ox, -hu.oy), hf.restore();
    }
    this.siner > 0x4 && QM(this.siner / 0x3) < 0x0 && this.instance_destroy();
  }
};
j0(T3, 'obj_oflash'), j2(T3, 'kinds', QA('obj_oflash', QE)), j2(T3, 'defaultDepth', 0x0);
var T4 = T3;
function T5(hI) {
  let hu = QJ(hI.x, hI.y, T4);
  return hu.image_xscale = hI.image_xscale, hu.image_speed = 0x0, hu.image_index = hI.image_index, hu.image_yscale = hI.image_yscale, hu.sprite_index = hI.sprite_index, hu.depth = hI.depth - 0x1, hu.target = hI, hu;
}
j0(T5, 'scr_oflash');
var T6 = class d0 extends QE {
  ["animationEnd"]() {
    this.instance_destroy();
  }
};
j0(T6, 'obj_animation'), j2(T6, 'kinds', QA('obj_animation', QE)), j2(T6, 'defaultDepth', 0x0);
var T7 = T6;
function T8(hI) {
  let hu = QS(hI);
  return hu && (hu.loop = !0x0), hu;
}
j0(T8, 'snd_loop');
function T9(hI) {
  if (hI) try {
    hI.pause();
  } catch {}
}
j0(T9, 'snd_stop_h');
function TQ(hI, hu) {
  hI && (hI.playbackRate = hu);
}
j0(TQ, 'snd_pitch');
var Tj = class d1 extends Q5 {
  ["create"]() {
    this.siner = 0x0;
  }
  ["draw"](hI) {
    this.siner += 0.5, hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + QM(this.siner / 0x4), this.y + Qv(this.siner / 0x4), this.image_xscale + QM(this.siner / 0x8) * 0.2, this.image_yscale + QM(this.siner / 0x8) * 0.2, this.image_angle, this.image_blend, this.image_alpha);
  }
};
j0(Tj, 'obj_chainpiece'), j2(Tj, 'kinds', QA('obj_chainpiece', Q5)), j2(Tj, 'defaultDepth', 0xf), j2(Tj, 'defaultSprite', 'spr_chainpiece');
var TT = Tj,
  TL = class d2 extends Q6 {
    ["create"]() {
      this.active = 0x1, this.timer = 0x0, this.bdir = Qq(0x168), this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0;
    }
    ["step"]() {
      if (this.timer += 0x1, this.timer >= 0x1e) {
        if (this.active = 0x0, this.image_alpha -= 0.1, this.image_alpha <= 0x0) {
          this.instance_destroy();
          return;
        }
        this.hspeed += Qk(0.2, this.bdir), this.vspeed += Qn(0.2, this.bdir);
      }
    }
  };
j0(TL, 'obj_fadechain'), j2(TL, 'kinds', QA('obj_fadechain', Q6)), j2(TL, 'defaultDepth', 0x0), j2(TL, 'defaultSprite', 'spr_chainpiece');
var Th = TL,
  Td = class d3 extends Q6 {
    ["create"]() {
      this.sons = -0x1, this.son = [], this.damage = 0x64, this.active = 0x1;
      let hI = jO();
      this.move_towards_point(hI ? hI.x + 0x8 : 0x140, hI ? hI.y + 0x8 : 0xaa, 0x1), this.friction = -0.3, this.timer = 0x0, this.con = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.soundcon = 0x0, QS('snd_menumove');
    }
    ["step"]() {
      if (this.image_angle = this.direction, this.con === 0x0 && (this.timer += 0x1, this.timer >= 0x2)) {
        this.sons += 0x1;
        let hI = QJ(this.x, this.y, Th);
        this.son[this.sons] = hI, hI.image_angle = this.image_angle, hI.direction = this.direction, hI.speed = this.speed / 2.5, hI.active = 0x1, hI.damage = 0xa, Q4(this, hI), this.timer = 0x0;
      }
      this.sons >= 0x1e && this.instance_destroy();
    }
    ["draw"](hI) {
      this.draw_self(hI);
      let hu = 0x0;
      this.y < -0x14 && (hu = 0x1), this.x < jb - 0x14 && (hu = 0x1), this.x > jb + 0x294 && (hu = 0x1), hu === 0x1 && (hI.draw_set_color(Qz.red), hI.draw_line_width(this.x, this.y, this.x + Qk(0x3e8, this.direction), this.y + Qn(0x3e8, this.direction), 0x1)), hu === 0x0 && this.soundcon === 0x0 && (QS('snd_spearrise'), this.soundcon = 0x1);
    }
  };
j0(Td, 'obj_skychain'), j2(Td, 'kinds', QA('obj_skychain', Q6)), j2(Td, 'defaultDepth', 0x0), j2(Td, 'defaultSprite', 'spr_chainfront');
var TP = Td,
  TU = class d4 extends QE {
    ["create"]() {
      this.image_xscale = 0x0, this.image_yscale = 0x0, this.image_alpha = 0.3, this.timer = 0x0, this.maxtimer = 0xf, this.growcon = 0x1, this.fullgrow = 0x0, this.keep = 0x0, this.megakeep = 0x0, this.image_speed = 0x0, this.image_blend = QF(Qz.green, Qz.lime, 0.5);
    }
    ["step"]() {
      let hI = 0x0;
      if (this.timer < this.maxtimer && this.growcon === 0x1 && (hI = 0x1), this.timer > 0x0 && this.growcon === 0x3 && (hI = 0x1), hI === 0x1) {
        this.growcon === 0x1 && (this.timer += 0x1), this.growcon === 0x3 && (this.timer -= 0x1), this.image_xscale = 0x2 * (this.timer / this.maxtimer), this.image_yscale = 0x2 * (this.timer / this.maxtimer), this.image_angle = 0xb4 + 0xb4 * (this.timer / this.maxtimer), this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5;
        let hu = QJ(this.x, this.y, Qh);
        hu.sprite_index = this.sprite_index, hu.image_xscale = this.image_xscale, hu.image_yscale = this.image_yscale, hu.image_angle = this.image_angle, hu.depth = this.depth - 0x1, hu.image_blend = this.image_blend, hu.image_alpha = 0x1 - this.image_alpha + 0.1, hu.image_speed = 0x0, this.timer >= this.maxtimer && this.growcon === 0x1 && (this.growcon = 0x2, this.keep = 0x1), this.timer <= 0x0 && this.growcon === 0x3 && this.instance_destroy();
      }
    }
    ["endStep"]() {
      let hI = jO();
      if (!hI) return;
      let hu = this.x - this.sprite_width / 0x2,
        hf = this.x + this.sprite_width / 0x2,
        hW = this.y - this.sprite_height / 0x2,
        hX = this.y + this.sprite_height / 0x2;
      hI.x < hu + 0x5 && (hI.x = hu + 0x5), hI.x > hf - 0x16 && (hI.x = hf - 0x16), hI.y < hW + 0x5 && (hI.y = hW + 0x5), hI.y > hX - 0x16 && (hI.y = hX - 0x16);
    }
    ["draw"](hI) {
      hI.draw_sprite_ext(this.sprite_index, 0x1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.draw_self(hI);
    }
  };
j0(TU, 'obj_nonsolid_growtangle'), j2(TU, 'kinds', QA('obj_nonsolid_growtangle', QE)), j2(TU, 'defaultDepth', 0x5), j2(TU, 'defaultSprite', 'spr_battlebg_wavechain');
var TH = TU,
  TI = class d5 extends Q8 {
    ["create"]() {
      this.image_speed = 0x0, this.image_xscale = 1.96, this.image_yscale = 1.96, this.initdir = Qy(0x2d, 0x87, 0xe1, 0x13b), this.direction = this.initdir, this.speed = 0.1, this.active = 0x1;
      let hI = Qb.first('obj_growtangle');
      hI && (this.x = hI.x, this.y = hI.y, hI.megakeep = 0x1), this.timer = 0x0, this.type = 0x0, this.con = 0x0, this.xx = jb, this.yy = jm, this.lx = 0x8c + this.xx, this.rx = 0x1e0 + this.xx, this.ux = 0x0 + this.yy, this.dx = 0x140 + this.yy, this.fadein = 0x0, this.spikecount = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.minitimer = 0x0, this.bumpnoise = 0x0, this.timerbonus = 0x0, this.wall_destroy = 0x0;
    }
    ["userEvent"](hI) {
      if (hI === 0x5) {
        super.userEvent(0x5);
        return;
      }
      hI === 0x2 && (Qb.with('obj_king_body', hu => {
        hu.active = 0x1;
      }), Qb.with('obj_growtangle', hu => {
        hu.growcon = 0x3;
      }), Qx.turntimer = 0x3, this.instance_destroy());
    }
    ["endStep"]() {
      if (this.type === 0x0 && (this.con === 0x0 && (this.ux += 0x1e, this.dx -= 0x1e, this.lx += 0x1e, this.rx -= 0x1e, this.con = 0.4), this.con === 0.4 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.6 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.6 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.2, this.speed <= 0.1))) {
        this.userEvent(0x2);
        return;
      }
      if (this.type === 0x1 && (this.con === 0x0 && (this.direction += Qq(0x14) - Qq(0x14), this.con = 0.5), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.hspeed >= 4.2 && (this.vspeed > 0x0 ? (this.vspeed += 0.1, this.hspeed -= 0.1) : (this.vspeed -= 0.1, this.hspeed -= 0.1)), this.hspeed <= -4.2 && (this.vspeed > 0x0 ? (this.vspeed += 0.1, this.hspeed += 0.1) : (this.vspeed -= 0.1, this.hspeed += 0.1)), this.vspeed >= 4.2 && (this.hspeed > 0x0 ? (this.hspeed += 0.1, this.vspeed -= 0.1) : (this.hspeed -= 0.1, this.vspeed -= 0.1)), this.vspeed <= -4.2 && (this.hspeed > 0x0 ? (this.hspeed += 0.1, this.vspeed += 0.1) : (this.hspeed -= 0.1, this.vspeed += 0.1)), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 0x1, this.timer >= 0x5a && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.4, this.speed <= 0.1))) {
        this.userEvent(0x2);
        return;
      }
      if (this.type === 0x2 && (this.con === 0x0 && (this.direction += Qq(0x14) - Qq(0x14), this.con = 0.5, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 0x1, this.timer >= 0x46 && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed <= 0.1))) {
        this.userEvent(0x2);
        return;
      }
      if (this.type === 0x3 && (this.con === 0x0 && (this.direction += Qq(0x14) - Qq(0x14), this.con = 0.4, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), this.con === 0.4 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.4 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed <= 0.1))) {
        this.userEvent(0x2);
        return;
      }
      if (this.type === 0x4 && (this.con === 0x0 && (this.direction += Qq(0xa) - Qq(0xa), this.con = 0.5, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), this.con === 0.5 && this.speed < 0x7 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 0x7 && (this.timer += 0x1, this.timer >= 0x5a && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed <= 0.1))) {
        this.active = 0x0, this.userEvent(0x2);
        return;
      }
      if (this.type === 0x5 && (this.con === 0x0 && (this.ux += 0x1e, this.dx -= 0x1e, this.lx += 0x1e, this.rx -= 0x1e, this.con = 0.4), this.con === 0.4 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed < 0x4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 0x4 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.2, this.speed <= 0.1))) {
        this.userEvent(0x2);
        return;
      }
      let hI = Qb.first('obj_growtangle');
      if (hI) {
        hI.x = this.x, hI.y = this.y;
        let hu = this.x - this.sprite_width / 0x2,
          hf = this.x + this.sprite_width / 0x2,
          hW = this.y - this.sprite_height / 0x2,
          hX = this.y + this.sprite_height / 0x2;
        hu < this.lx && this.hspeed < 0x0 && (this.hspeed = -this.hspeed, this.bumpnoise = 0x1), hf > this.rx && this.hspeed > 0x0 && (this.hspeed = -this.hspeed, this.bumpnoise = 0x1), hW < this.ux && this.vspeed < 0x0 && (this.vspeed = -this.vspeed, this.bumpnoise = 0x1), hX > this.dx && this.vspeed > 0x0 && (this.vspeed = -this.vspeed, this.bumpnoise = 0x1), this.bumpnoise === 0x1 && (QS('snd_bump'), QS('snd_screenshake'), this.bumpnoise = 0x0, Qb.exists('obj_shake') || QJ(0x0, 0x0, Qf));
      }
      this.grazed === 0x1 && (this.timerbonus === 0x0 && (this.timer += 0x2, this.timerbonus = 0x1), this.grazetimer += 0x1, this.grazetimer >= 0xf && (this.timerbonus = 0x0, this.grazetimer = 0x0, this.grazed = 0x0));
    }
    ["draw"](hI) {
      this.draw_self(hI), this.fadein < 0xa && (this.fadein += 0x1), hI.draw_set_alpha(this.fadein / 0xa), hI.draw_set_color(Qz.white), hI.draw_rectangle(this.lx, this.ux, this.rx, this.dx, !0x0), hI.draw_rectangle(this.lx + 0x1, this.ux + 0x1, this.rx - 0x1, this.dx - 0x1, !0x0), hI.draw_set_alpha(0x1);
      let hu = this.sprite_width,
        hf = this.sprite_height,
        hW = Math.floor(hu / 0xb),
        hX = this.x,
        hY = this.y,
        hB = this.fadein / 0xa;
      for (let hC = 0x0; hC < hW; hC += 0x1) hI.draw_sprite_ext('spr_bouncebox_spike', 0x0, hX - hu / 0x2 + 0x3, hY - hf / 0x2 + hC * 0xb, 0x1, 0x1, 0x0, Qz.white, hB), hI.draw_sprite_ext('spr_bouncebox_spike', 0x0, hX + hu / 0x2 - hC * 0xb, hY - hf / 0x2 + 0x3, 0x1, 0x1, 0x10e, Qz.white, hB), hI.draw_sprite_ext('spr_bouncebox_spike', 0x0, hX - hu / 0x2 + hC * 0xb, hY + hf / 0x2 - 0x2, 0x1, 0x1, 0x5a, Qz.white, hB), hI.draw_sprite_ext('spr_bouncebox_spike', 0x0, hX + hu / 0x2 - 0x2, hY - hf / 0x2 + hC * 0xb, -0x1, 0x1, 0x0, Qz.white, hB);
    }
  };
j0(TI, 'obj_growtangle_bouncer'), j2(TI, 'kinds', QA('obj_growtangle_bouncer', Q8)), j2(TI, 'defaultDepth', 0x4), j2(TI, 'defaultSprite', 'spr_battlebg_2');
var Tu = TI,
  Tf = class d6 extends Q5 {
    ["create"]() {
      this.kingcon = 0x0, this.contimer = 0x0, this.image_speed = 0.334, this.image_xscale = 0x2, this.image_yscale = 0x2, this.t = 0x0, this.tmax = 0xb4, this.subtype = 0x0, this.type = 0x1, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.soundplayed = 0x0, this.chain = null;
    }
    ["step"]() {
      this.t === 0x0 && this.kingcon === 0x0 && (this.sprite_index = 'spr_chainking_toss', this.image_index = 0x0, this.image_speed = 0.5, this.kingcon = 0x1, this.soundplayed = 0x0, this.type === 0x2 && this.subtype === 0x1 ? QS('snd_dadlaugh') : QS('snd_dadblast')), this.kingcon === 0x1 && this.image_index >= 0x3 && (this.image_index >= 0x2 && this.soundplayed === 0x0 && (QS('snd_criticalswing'), this.soundplayed = 0x1), this.sprite_index = 'spr_chainking_toss_idle', this.image_index = 0x0, this.image_speed = 0.334, this.kingcon = 0x2, this.type === 0x1 && (this.chain = QJ(this.x - 0x18, this.y + 0x68, TY)), this.type === 0x2 && (this.chain = QJ(this.x - 0x18, this.y + 0x68, TC)), this.chain && (Q4(this, this.chain), this.chain.type = this.subtype)), this.t += 0x1;
    }
    ["destroy"]() {
      Qb.with('obj_king_boss', hI => {
        hI.visible = !0x0, hI.active = 0x1;
      }), Qb.with('obj_growtangle', hI => {
        hI.growcon = 0x3;
      }), Qb.with('obj_nonsolid_growtangle', hI => {
        hI.growcon = 0x3;
      });
    }
  };
j0(Tf, 'obj_chainking'), j2(Tf, 'kinds', QA('obj_chainking', Q5)), j2(Tf, 'defaultDepth', 0x6), j2(Tf, 'defaultSprite', 'spr_chainking_spin');
var TW = Tf,
  TX = class d7 extends Q5 {
    ["create"]() {
      this.direction = 0xb4, this.speed = 0xa, this.image_angle = 0xb4, this.chaincon = 0x0, this.sons = -0x1, this.son = [], this.timer = 0x0, this.t = 0x0, this.tmax = 0xdc;
      let hI = Qb.first('obj_chainking'),
        hu = Qb.first('obj_nonsolid_growtangle');
      this.initkingx = hI ? hI.x : this.x, this.initkingy = hI ? hI.y : this.y, this.initboxx = hu ? hu.x : 0xc8, this.initboxy = hu ? hu.y : 0xaf, this.kingx = new Array(0x29).fill(0x0), this.kingy = new Array(0x29).fill(0x0), this.siner = 0x0, this.btimer = 0x14, this.bgap = 0x0, this.type = 0x0, this.wavefactor = 0x1, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x6, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.chain_noise = 0x0, this.chainsnd = null, this.wavenoise = null;
    }
    ["step"]() {
      let hI = Qb.first('obj_nonsolid_growtangle'),
        hu = Qb.first('obj_chainking'),
        hf = jO();
      if (this.chaincon === 0x0 && (this.chain_noise === 0x0 && (this.chain_noise = 0x1, this.chainsnd = T8('snd_chain_extend')), this.sons += 0x1, this.son[this.sons] = QJ(this.x, this.y, TT), hI && this.x <= hI.x && (T9(this.chainsnd), QS('snd_locker'), QS('snd_screenshake'), this.speed = 0x0, this.chaincon = 0x1, this.shakeamt = 0xc, this.remx = hf ? hf.x : 0x0, this.remy = hf ? hf.y : 0x0, this.remx_box = hI.x, this.remy_box = hI.y, this.chaincon = 2.1, Qb.with('obj_growtangle', hW => {
        hW.megakeep = 0x1;
      }))), this.chaincon === 2.1) {
        hf && (hf.x = this.remx, hf.y = this.remy), hI && (hI.x = this.remx_box, hI.y = this.remy_box);
        let hW = Qq(0x168),
          hX = Qk(this.shakeamt, hW),
          hY = Qn(this.shakeamt, hW);
        hf && (hf.x += hX, hf.y += hY), hI && (hI.x += hX, hI.y += hY), this.shakeamt -= 0x2, this.shakeamt < 0x0 && (this.chaincon = 0x3);
      }
      if (this.chaincon === 0x3) {
        this.chain_noise === 0x1 && (this.chain_noise = 0x2, this.wavenoise = T8('snd_chain_wave'));
        let hB = (hC, hx, hG) => {
          if (this.siner += 0x1, hu && (hu.y = this.initkingy + QM(this.siner / hC) * 0x50 * hG), this.btimer += 0x1, this.btimer >= hx) {
            let hN = QJ(jb - 0x14, this.initboxy, Q7);
            hN.sprite_index = 'spr_spadebullet', hN.hspeed = 0x4, Q4(this, hN), this.btimer = 0x0;
          }
        };
        this.type === 0x0 && (hB(0xc, 0x14, 0x1), this.chain_noise === 0x2 && TQ(this.wavenoise, 0.8 - QM(this.siner / 0xc) / 0x2)), this.type === 0x1 && (hB(0xa, 0x12, 0x1), this.chain_noise === 0x2 && TQ(this.wavenoise, 0.9 - QM(this.siner / 0xa) / 0x2)), this.type === 0x2 && (hB(0x9, 0x10, 0x1), this.chain_noise === 0x2 && TQ(this.wavenoise, 0x1 - QM(this.siner / 0x9) / 0x2)), this.type === 0x3 && (hB(0x7, 0xe, this.wavefactor), this.chain_noise === 0x2 && TQ(this.wavenoise, 0x1 - QM(this.siner / 0x7) / 0x2));
      }
      if (hu) {
        this.kingx[0x0] = hu.x - this.initkingx, this.kingy[0x0] = hu.y - this.initkingy;
        for (let hC = 0x28; hC > 0x0; hC -= 0x1) this.kingx[hC] = this.kingx[hC - 0x1], this.kingy[hC] = this.kingy[hC - 0x1];
        for (let hx = 0x0; hx <= this.sons; hx += 0x1) {
          let hG = this.son[hx];
          hG && !hG.destroyed && (hG.x = (this.kingx[hx] || 0x0) + hG.xstart, hG.y = (this.kingy[hx] || 0x0) + hG.ystart);
        }
        if (this.chaincon >= 0x3) {
          let hN = this.son[this.sons];
          hN && (this.x = hN.x, this.y = hN.y), hI && (hI.x = (this.kingx[this.sons] || 0x0) + this.initboxx, hI.y = (this.kingy[this.sons] || 0x0) + this.initboxy);
        }
      }
      this.t += 0x1, this.t >= this.tmax - 0xa && (this.wavefactor *= 0.8, Qb.with('obj_chainpiece', hp => {
        hp.image_alpha -= 0.1;
      }), Qb.with('obj_regularbullet', hp => {
        hp.active = 0x0, hp.image_alpha -= 0.1;
      })), this.t >= this.tmax && (this.chain_noise === 0x2 && (this.chain_noise = 0x3, T9(this.wavenoise)), Qx.turntimer = 0x3, Qb.with('obj_regularbullet', hp => hp.instance_destroy()), Qb.with('obj_chainking', hp => {
        hp.sprite_index = 'spr_chainking_receive';
      }), Qb.with('obj_chainking', hp => hp.instance_destroy()), this.instance_destroy());
    }
    ["destroy"]() {
      T9(this.chainsnd), T9(this.wavenoise);
    }
  };
j0(TX, 'obj_wavechain'), j2(TX, 'kinds', QA('obj_wavechain', Q5)), j2(TX, 'defaultDepth', 0xa), j2(TX, 'defaultSprite', 'spr_chainfront');
var TY = TX,
  TB = class d8 extends Q5 {
    ["create"]() {
      this.direction = 0xb4, this.speed = 0xa, this.image_angle = 0xb4, this.chaincon = 0x0, this.sons = -0x1, this.son = [], this.timer = 0x0, this.gotimer = 0x0;
      let hI = Qb.first('obj_chainking'),
        hu = Qb.first('obj_nonsolid_growtangle');
      this.initkingx = hI ? hI.x : this.x, this.initkingy = hI ? hI.y : this.y, this.initboxx = hu ? hu.x : 0xcd, this.initboxy = hu ? hu.y : 0xaa, this.kingx = new Array(0x29).fill(0x0), this.kingy = new Array(0x29).fill(0x0), this.siner = 0x0, this.btimer = 0x14, this.bgap = 0x0, this.type = 0x1, this.movecon = 0x0, this.movetime = 0x19, this.mytimer = 0x0, this.maxtimer = 0xc8, this.type === 0x1 && (this.maxtimer = 0x12c), this.image_blend = Qz.red, this.bulletpoint = 0x0, this.spikemake = 0x0, this.ended = 0x0, this.endtimer = 0x0, this.xx = jb, this.yy = jm, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.chain_noise = 0x0, this.timerbonus = 0x0, this.chainsound = null, this.chainnoise = null, this.spike = null, this.box = null, this.movetimer = 0x0, this.pointx = 0x0, this.pointy = 0x0, this.mark = null;
    }
    ["step"]() {
      let hI = Qb.first('obj_nonsolid_growtangle'),
        hu = jO();
      if (this.chaincon === 0x0) {
        if (this.chain_noise === 0x0 && (this.chainsound = T8('snd_chain_extend'), this.chain_noise = 0x1), this.sons < 0x28) {
          this.sons += 0x1;
          let hf = QJ(this.x, this.y, TT);
          hf.image_blend = Qz.red, this.son[this.sons] = hf;
        }
        hI && this.x <= hI.x && (this.chain_noise === 0x1 && (this.chain_noise = 0x2, T9(this.chainsound), QS('snd_locker'), QS('snd_screenshake')), this.box = hI, this.x = hI.x, this.y = hI.y, this.speed = 0x0, this.chaincon = 0x1, this.shakeamt = 0x10, this.remx = hu ? hu.x : 0x0, this.remy = hu ? hu.y : 0x0, this.remx_box = hI.x, this.remy_box = hI.y, this.chaincon = 2.1, Qb.with('obj_growtangle', hW => {
          hW.megakeep = 0x1;
        }));
      }
      if (this.chaincon === 2.1) {
        hI && (hI.x = this.remx_box, hI.y = this.remy_box);
        let hW = Qq(0x168),
          hX = Qk(this.shakeamt, hW),
          hY = Qn(this.shakeamt, hW);
        hI && (hI.x += hX, hI.y += hY), this.shakeamt -= 0x2, this.shakeamt <= 0x0 && (this.chaincon = 2.2, hI && (hI.x = this.remx_box, hI.y = this.remy_box));
      }
      if (this.chaincon === 2.2) {
        this.xx = jb + 0x140, this.yy = jm + 0xa0;
        let hB = jm;
        if (this.chaincon = 2.3, this.type >= 0x1) {
          let hC = QJ(this.x, this.y, Q8);
          this.spike = hC, Q4(this, hC), hC.image_speed = 0x0, hC.active = 0x0, Qb.with('obj_regularbullet', hx => {
            hx.basealpha = 0x0;
          }), hC.image_alpha = 0x0, hC.mask_index = this.box ? this.box.sprite_index : 'spr_battlebg_1', hC.sprite_index = 'spr_battlebg_spikes', this.spikemake = 0x1, hC.image_xscale = (this.box ? this.box.image_xscale : 0x2) * 0.96, hC.image_yscale = (this.box ? this.box.image_yscale : 0x2) * 0.96;
        }
        if (this.type <= 0x1) {
          for (let hx = 0x0; hx < 0x5; hx += 0x1) for (let hG = 0x0; hG < 0x5; hG += 0x1) {
            let hN = QJ(this.xx - 0x96 + hx * 0x46, hB + 0x14 + hG * 0x46, Q8);
            hN.sprite_index = 'spr_spadebullet', hN.basealpha = 0x0, hN.active = 0x0, hN.image_angle = 0x5a, hN.image_xscale = 0.5, hN.image_yscale = 0.5, hN.neveractive = 0x1, Q4(this, hN);
          }
          this.bulletpoint = 0x1;
        }
      }
      if (this.chaincon === 2.3 && (Qb.with('obj_regularbullet', hp => {
        hp.basealpha = (hp.basealpha || 0x0) + 0.04;
      }), this.spikemake === 0x1 && this.box && this.spike && (this.box.image_xscale += 0.005, this.box.image_yscale += 0.005, this.spike.image_xscale += 0.005, this.spike.image_yscale += 0.005, this.type === 0x1 && (this.box.image_xscale += 0.01, this.box.image_yscale += 0.01, this.spike.image_xscale += 0.01, this.spike.image_yscale += 0.01)), this.gotimer += 0x1, this.gotimer >= 0x1e && (this.chaincon = 0x3, this.gotimer = 0x0, this.xx = jb + 0x140, this.yy = jm + 0xa0, this.pointx = this.xx, this.pointy = this.yy, Qb.with('obj_regularbullet', hp => {
        hp.active = 0x1;
      }))), this.chaincon === 0x3) {
        if (this.movecon === 0x0 && this.ended === 0x0 && this.mytimer > this.maxtimer - 0xa && (this.ended = 0x1), this.movecon === 0x0 && this.ended === 0x0) {
          this.speed = 0x0;
          let hp = 0x0,
            hM = 0x64,
            hv = 0x82;
          this.type === 0x0 && (hv = 0x6e, this.movetime = 0x1e), this.type >= 0x1 && (hv = 0x8c), (this.type === 0x3 || this.type === 0x4) && (hv = 0x78), this.type === 0x5 && (hv = 0x82, this.movetime = 0x1e);
          let hR = 0x0;
          for (; (hp < hM || hp > hv) && hR++ < 0x2710;) this.pointx = this.xx + Qq(0x8c) - Qq(0x8c), this.pointy = this.yy + Qq(0x78) - Qq(0x78), hp = Qr(this.x, this.y, this.pointx, this.pointy);
          this.target = QJ(this.pointx, this.pointy, TT), this.target.sprite_index = 'spr_heartoutline', this.target.depth = 0x1e, this.move_towards_point(this.pointx, this.pointy, hp / this.movetime), this.movetimer = 0x0, this.movecon = 0x1, this.chainnoise = T8('snd_chain_extend');
        }
        if (this.movecon === 0x1 && this.ended === 0x0 && (this.movetimer += 0x1, this.movetimer > this.movetime && (this.x = this.pointx, this.y = this.pointy, this.movecon = 0x2, this.speed = 0x0, this.movetimer = 0x0)), this.movecon === 0x2 && this.ended === 0x0) {
          let hS = 0x14;
          this.type === 0x1 && (hS = 0x16), this.type === 0x2 && (hS = 0x10), this.type === 0x3 && (hS = 0x7), this.type === 0x4 && (hS = 0x3), this.type === 0x5 && (hS = 0x16), this.movetimer += 0x1, this.movetimer >= hS && (this.target && this.target.instance_destroy && this.target.instance_destroy(), this.movecon = 0x0, T9(this.chainnoise));
        }
      }
      if (this.chaincon >= 0x0) {
        this.kingx[0x0] = this.x, this.kingy[0x0] = this.y;
        for (let hl = 0x28; hl > 0x0; hl -= 0x1) this.kingx[hl] = this.kingx[hl - 0x1], this.kingy[hl] = this.kingy[hl - 0x1];
        for (let hz = 0x0; hz <= this.sons; hz += 0x1) {
          let hF = this.son[hz];
          hF && !hF.destroyed && (hF.x = this.kingx[hz], hF.y = this.kingy[hz], hF.image_angle = this.direction);
        }
        this.chaincon >= 0x3 && hI && (hI.x = this.kingx[this.sons], hI.y = this.kingy[this.sons]);
      }
      if (this.bulletpoint === 0x1) {
        let hc = hu ? hu.x + 0x8 : 0x140,
          hw = hu ? hu.y + 0x8 : 0xaa;
        Qb.with('obj_regularbullet', hq => {
          if (hq.sprite_index === 'spr_spadebullet') {
            hq.image_angle = QV(hq.x, hq.y, hc, hw);
            let hD = Qr(hq.x, hq.y, hc, hw);
            hD > 0x50 && (hq.neveractive -= 0.02), hq.neveractive > 0x0 ? hq.active = 0x0 : hq.active = 0x1;
            let hE = 0.7,
              hA = 0x1 - hq.neveractive;
            hA > 0x1 && (hA = 0x1), hD > 0x50 && (hE = 1.7 - hD * 0x1 / 0x50, hE < 0x0 && (hE = 0x0)), hq.image_alpha = (0.3 + hE) * hq.basealpha * hA, hq.image_xscale < 0.68 && this.ended === 0x0 ? (hq.image_xscale += 0.0005, hq.image_yscale += 0.0005) : (hq.active = 0x0, hq.basealpha -= 0.1, this.ended = 0x1);
          }
        });
      }
      if (this.spikemake === 0x1 && this.spike && !this.spike.destroyed && (this.spike.image_alpha += 0.04, this.box && (this.spike.x = this.box.x, this.spike.y = this.box.y), this.ended === 0x1 && (this.spike.image_alpha >= 0x1 && (this.spike.image_alpha = 0x1), this.spike.image_alpha -= 0.14)), this.ended === 0x1 && (this.endtimer += 0x1, this.endtimer >= 0xa)) {
        Ql('snd_chain_extend'), Qb.with('obj_chainpiece', hq => hq.instance_destroy()), Qb.with('obj_regularbullet', hq => hq.instance_destroy()), Qb.with('obj_chainking', hq => hq.instance_destroy()), Qx.turntimer = 0x3, this.instance_destroy();
        return;
      }
      this.spikemake === 0x1 && this.spike && !this.spike.destroyed && this.spike.grazed === 0x1 && (this.timerbonus === 0x0 && (this.mytimer += 0x2, this.timerbonus = 0x1), this.grazetimer += 0x1, this.grazetimer >= 0xf && (this.timerbonus = 0x0, this.grazetimer = 0x0, this.spike.grazed = 0x0)), this.mytimer += 0x1, this.image_angle = this.direction;
    }
    ["draw"](hI) {
      this.draw_self(hI);
    }
    ["destroy"]() {
      T9(this.chainsound), T9(this.chainnoise);
    }
  };
j0(TB, 'obj_finalchain'), j2(TB, 'kinds', QA('obj_finalchain', Q5)), j2(TB, 'defaultDepth', 0xa), j2(TB, 'defaultSprite', 'spr_chainfront');
var TC = TB;
function Tx(hI, hu) {
  if (Qb.with('obj_regularbullet', hf => {
    hf.image_alpha += 0.2;
  }), hI.btimer >= hu) {
    let hf = hI.side === 0x0 ? 0x50 : 0x230,
      hW = Qb.first('obj_growtangle'),
      hX = hW ? hW.y : 0xaa,
      hY = hW ? hW.sprite_height : 0x0,
      hB = QJ(jb + hf, hX - hY / 0x2 + Qq(hY), Q7);
    hI.side === 0x0 && (hB.direction = 0x0), hI.side === 0x1 && (hB.direction = 0xb4), hB.image_alpha = 0x0, hB.damage = hI.damage, hB.target = hI.target, hB.sprite_index = 'spr_spadebullet', hB.speed = 0x5, hB.friction = -0.1, hB.image_angle = hB.direction, hI.side = hI.side === 0x1 ? 0x0 : 0x1, hI.btimer = 0x0;
  }
}
j0(Tx, 'sideSpades');
function TG(hI, hu, hf) {
  if (hI.btimer >= hu) {
    let hW = Qy(0x0, 0x1, 0x2, 0x3),
      hX = 0x0,
      hY = 0x0;
    (hW === 0x0 || hW === 0x3) && (hX = jb + 0x140 + Qq(0x12c) - Qq(0x12c), hY = -0x3c), hW === 0x1 && (hX = jb - 0x3c, hY = Qq(0x140)), hW === 0x2 && (hX = jb + 0x2bc, hY = Qq(0x140));
    let hB = QJ(hX, hY, TP);
    hf ? Qb.with('obj_skychain', hC => Q4(hI, hC)) : Q4(hI, hB), hI.btimer = 0x0;
  }
}
j0(TG, 'skyChains'), e({
  0x15: hI => Tx(hI, 0x9),
  0x17: hI => Tx(hI, 0x7),
  0x22: hI => TG(hI, 0x1c, !0x0),
  0x23: hI => TG(hI, 0x16, !0x1)
});
var TN = class d9 extends Q3 {
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
      'idlesprite': 'spr_chainking_idle',
      'hurtsprite': 'spr_chainking_hurt',
      'sparedsprite': 'spr_chainking_idle',
      'kturn': 0x0,
      'xx': jb,
      'yy': jm,
      'tempattack': 0x1,
      'hurtbuffer': 0x0,
      'susinit': 0x0,
      'remxx': jb,
      'remyy': jm,
      'chain_dragging': 0x0,
      'wall_bouncing': 0x0,
      'talk_all_message': 0x0,
      'attack': 0x0,
      'rtimer': 0x0,
      'shakex': 0x0,
      'active': 0x1,
      'blcontype': 0x3
    }), this.reminvc = Qx.invc;
  }
  ["userEvent"](hI) {
    if (hI === 0xc) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2 - 0xa, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    if (hI === 0x5) {
      this.startAttack();
      return;
    }
    if (hI === 0xa) {
      this.defeatEvent();
      return;
    }
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && (this.con += 0x1);
  }
  ["defeatEvent"]() {
    let hI = Qb.first('obj_battlecontroller');
    hI && (hI.skipvictory = 0x1), Qx.invc = 0x1, this.instance_destroy();
  }
  ["startAttack"]() {
    if (this.attacked !== 0x0) return;
    let hI = this.myself,
      hu = this.xx,
      hf = this.yy,
      hW = Qx.monsterat[hI],
      hX = this.tempattack;
    Qx.invc = this.reminvc;
    let hY = this.attack,
      hB = (hM, hv) => QJ(hu + hM, hf + hv, QU),
      hC = hM => {
        let hv = QJ(0x0, 0x0, k);
        return Object.assign(hv, hM), hv;
      },
      hx = hM => {
        let hv = QJ(hM.x - 0xa, hM.y - 0xa, T1);
        T2(), hv.instance_destroy();
      },
      hG = (hM, hv, hR) => {
        this.visible = !0x1;
        let hS = QJ(this.x, this.y, TW);
        hS.type = 0x1, hS.subtype = hM, hS.grazepoints = 0x6;
        let hl = QJ(hu + 0xc8, hf + 0xaf, TH);
        hl.sprite_index = 'spr_battlebg_wavechain', hx(hl), hS.damage = hW * hv * hX, hS.target = hR, Qx.turntimer = 0x3e7;
      },
      hN = (hM, hv, hR) => {
        Qx.invc *= 1.5, this.visible = !0x1, this.timeruse = 0x0;
        let hS = QJ(this.x, this.y, TW);
        hS.type = 0x2, hS.subtype = hM;
        let hl = QJ(hu + 0xcd, hf + 0xaa, TH);
        return hl.sprite_index = 'spr_battlebg_1', hS.damage = hW * hv * hX, hS.target = hR, Qx.turntimer = 0x3e7, hx(hl), hS;
      },
      hp = hM => {
        Qx.invc *= 1.5;
        let hv = hB(0x136, 0xa5);
        hv.sprite_index = 'spr_battlebg_2', hv.keep = 0x1, hx(hv);
        let hR = QJ(hv.x, hv.y, Tu);
        hR.type = hM, hR.damage = hW * 0x5 * hX, hR.target = this.mytarget, Qx.turntimer = 0x3e7;
      };
    if (hY === 0x1 && (hB(0x140, 0xaa), T2(), hC({
      'type': 0x15,
      'damage': hW * 0x5 * hX,
      'target': this.mytarget,
      'side': 0x1,
      'btimer': -0x8
    }), Qx.turntimer = 0xbe), hY === 0x2 && hG(0x0, 0x4, 0x3), hY === 0x3 && (hB(0x140, 0xaa), T2(), hC({
      'type': 0x22,
      'damage': hW * 0x5 * hX,
      'target': this.mytarget,
      'btimer': 0xa
    }), Qx.turntimer = 0xd2), hY === 0x4 && hp(0x5), hY === 0x5 && hG(0x1, 0x4, 0x3), hY === 0x6) {
      Qx.invc *= 1.5, this.visible = !0x1, this.timeruse = 0x0;
      let hM = QJ(this.x, this.y, TW);
      hM.type = 0x2, hM.subtype = 0x5, this.chain_dragging >= 0x1 && (hM.subtype = 0x2), this.chain_dragging += 0x1;
      let hv = QJ(hu + 0xcd, hf + 0xaa, TH);
      hv.sprite_index = 'spr_battlebg_1', hM.damage = hW * 0x5 * hX, hM.target = this.mytarget, Qx.turntimer = 0x3e7, hx(hv);
    }
    hY === 0x7 && (hB(0x140, 0xaa), T2(), hC({
      'type': 0x23,
      'damage': hW * 0x5 * hX,
      'target': this.mytarget,
      'btimer': 0xa
    }), Qx.turntimer = 0xdc), hY === 0x8 && hp(0x3), hY === 0x9 && (hB(0x140, 0xaa), T2(), hC({
      'type': 0x17,
      'damage': hW * 0x5 * hX,
      'target': this.mytarget,
      'btimer': -0x8,
      'side': 0x1
    }), Qx.turntimer = 0xc8), hY === 0xa && hG(0x2, 0x4, 0x3), hY === 0xb && hN(0x1, 0x3, 0x3), this.tempattack = 0x1, this.attacked = 0x1;
  }
  ["talk"]() {
    let hI = this.myself;
    Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "Fall before&the chain&of justice!/%";
    let hu = 0x3,
      hf = this.kturn;
    hf === 0x0 && (Qx.msg[0x0] = "How dare you&come here,&Lightners...?/%"), hf === 0x1 && (Qx.msg[0x0] = "You, that&left us in&the shadows,&stripped of&meaning.../%", hu = 0x8), hf === 0x2 && (Qx.msg[0x0] = "You DARE&return&to torment us&once again?/%"), hf === 0x3 && (Qx.msg[0x0] = "Begone!&We have found&fresh&purpose./%"), hf === 0x4 && (Qx.msg[0x0] = "For the&KNIGHT&has appeared./%"), hf === 0x5 && (Qx.msg[0x0] = "The KNIGHT&that pulls&the Fountains&from the&Earth./%", hu = 0x8), hf === 0x6 && (hu = 0x8, Qx.msg[0x0] = "Holy&Fountains,&whose shadows&are creating&a new&world.../", Qx.msg[0x1] = "OUR world./%"), hf === 0x7 && (Qx.msg[0x0] = "Hahaha...&Do you see&now our NEW&purpose...?/%"), hf === 0x8 && (Qx.msg[0x0] = "Soon, this&world&shall be&blanketed&in darkness.../", Qx.msg[0x1] = "And DARKNERS&shall RULE&it!/%", hu = 0x8), hf === 0x9 && (Qx.msg[0x0] = "Then, you may&see what it is&like to live&in DESPAIR!/%"), hf === 0xa && (Qx.msg[0x0] = "Now, enough&talk!/", Qx.msg[0x1] = "Fall before&the chain of&justice!/%"), hf === 0xb && (Qx.msg[0x0] = "... ha,&you're&quite strong,&aren't you!?/%"), hf === 0xc && (Qx.msg[0x0] = "If I keep&fighting you&like this,&then.../%"), hf === 0xd && (Qx.msg[0x0] = "It seems...&that.../%"), hf >= 0xe && (Qx.msg[0x0] = "My KNIGHT...&I shall not&fail you.../%", this.battlecancel = 0x2), this.kturn += 0x1, this.kturn <= 0xb ? this.attack = this.kturn : (this.kturn === 0xc && (this.attack = 0x7), this.kturn === 0xd && (this.attack = 0x8), this.kturn === 0xe && (this.attack = 0xa), this.kturn === 0xf && (this.attack = 0x9), this.kturn === 0x10 && (this.attack = 0x7), this.kturn === 0x11 && (this.attack = 0xb), this.kturn >= 0x12 && (this.attack = 0xb), Qx.monsterdf[hI] > -0x19 && (Qx.monsterdf[hI] -= 0x5)), this.target_randomly = 0x1, this.attack === 0x2 || this.attack === 0x5 || this.attack === 0xa || this.attack === 0xb ? QB(this) : QY(this), this.blcontype = hu, QT(this.x - 0xa0, this.y, hu), this.talked = 0x1, this.talktimer = 0x0;
  }
  ["step"]() {
    let hI = this.myself;
    if (this.susinit === 0x0 && (Qb.with('obj_herosusie', hu => {
      hu.idlesprite = 'spr_susieb_idle_serious', hu.attacksprite = 'spr_susieb_attack_serious';
    }), this.susinit = 0x1), Qx.monster[hI] === 0x1) {
      if (Qx.flag[0x33 + hI] = 0x4, Qx.mnfight === 0x1 && this.talked === 0x0 && this.talk(), this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qb.exists('obj_writer') || (Qx.mnfight = 0x2)), Qx.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          this.talktimer = 0x0, Qx.turntimer = 0xb4, this.userEvent(0x5), this.turns += 0x1, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0;
          let hu = Qy(0x0, 0x1, 0x2, 0x3);
          hu === 0x0 && (Qx.battlemsg[0x0] = "* Darkness pours from the fountain."), hu === 0x1 && (Qx.battlemsg[0x0] = "* KING's mouths gave a berserk smile."), hu === 0x2 && (Qx.battlemsg[0x0] = "* The battlefield is rumbling."), hu === 0x3 && (Qx.battlemsg[0x0] = "* KING's mouths babble indecipherably."), Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 0x4 && (Qx.battlemsg[0x0] = "* KING's cape flutters weakly.");
        } else Qx.turntimer = 0x78;
      }
      Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (this.battlecancel === 0x1 && (Qx.mercymod[hI] = 0x3e7), this.battlecancel === 0x2 && (Qb.with('obj_battlecontroller', hf => {
        hf.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3));
    }
    if (this.con === 0x1 && (this.con = 0x4), this.con === 0x4 && !Qb.exists('obj_writer') && (this.con = 0x5, this.alarm[0x4] = 0xf, Qb.with('obj_battlecontroller', hf => {
      hf.alarm[0x2] = 0x11;
    })), this.con === 0x6) {
      Qb.with('obj_battlecontroller', hf => {
        hf.noreturn = 0x0;
      }), Qx.flag[0xf7] = 0x1, this.scr_monsterdefeat(), this.userEvent(0xa), this.instance_destroy(), this.con = 0x7;
      return;
    }
    Qx.myfight === 0x3 && this.actStep(), Qx.myfight === 0x7 && (this.hspeed = 0xf);
  }
  ["actStep"]() {
    let hI = this.myself;
    this.xx = jb, this.yy = jm, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* KING - Abandoned by the Lightners^1, his heart became cracked with hatred./", Qx.msg[0x1] = "* He cannot be reasoned with^1, but don't give up...!/%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.tempflag[0x5] === 0x0 ? (Qx.msg[0x0] = "* You tried to reason with the King.../", jo(0x1, 0x5), Qx.msg[0x2] = "* Silence^1, Lightbringer!/", Qx.msg[0x3] = "* Your very existence goes against our own.../", Qx.msg[0x4] = "\\E0* By the Knight's will^1, I shall shatter your heart to pieces!/", jK(0x5), Qx.msg[0x6] = "* Your will is changing..^1.&* \\cYTALK\\cW became \\cYCOURAGE\\cW!/%", Qx.tempflag[0x5] = 0x1, Qx.canact[hI][0x1] = 0x1, Qx.actactor[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Courage', Qx.actdesc[hI][0x1] = "Defense#Boost", Qx.actcost[hI][0x1] = 0x3e) : (QS('snd_power'), Qb.with('obj_heroparent', hf => {
      let hW = T5(hf);
      hW.flashcolor = Qz.orange;
    }), Qx.msg[0x0] = "* You encouraged the party^1!&* The party's DEFENSE raised for this turn!/%", this.tempattack = 0.8), Qj(), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.tempflag[0x6] === 0x0 ? (Qx.msg[0x0] = "* Susie tried to reason with the King.../", jV(0x1, 0x1), Qx.msg[0x2] = "* Arright^1, listen up./", Qx.msg[0x3] = "\\E2* Lancer's my friend./", Qx.msg[0x4] = "\\EC* So if we can get by without hurting you^1, then.../", jo(0x5, 0x0), Qx.msg[0x6] = "* If I perish^1, so be it!/", Qx.msg[0x7] = "\\E4* Show my son the monster you REALLY are!/", jV(0x8, 'C'), Qx.msg[0x9] = "* .../", Qx.msg[0xa] = "\\E3* Arright^1, you wanna see what I can do^1, huh?/", jK(0xb), Qx.msg[0xc] = "* Susie's will is changing..^1.&* \\cYTALK\\cW became \\cYRED BUSTER\\cW!/%", Qx.tempflag[0x6] = 0x1, Qx.canact[hI][0x2] = 0x1, Qx.actactor[hI][0x2] = 0x2, Qx.actname[hI][0x2] = 'RedBuster', Qx.actdesc[hI][0x2] = "Red#Damage", Qx.actcost[hI][0x2] = 0x96, this.actcon = 0x1) : (Qx.msg[0x0] = "* Your SOUL shined its power on Susie!/%", this.actcon = 0xa), Qj(), this.acttimer = 0x0), this.acting === 0x4 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.tempflag[0x7] === 0x0 ? (Qx.msg[0x0] = "* Ralsei tried to reason with the King.../", jr(0x1, 'B'), Qx.msg[0x2] = "* You might not realize it^1, but.../", Qx.msg[0x3] = "\\E6* This is a world where you don't have to fight./", Qx.msg[0x4] = "\\E8* I know if we try^1, we can all find another way.../", jo(0x5, 0x6), Qx.msg[0x6] = "\\E6* Such simple-minded platitudes.../", Qx.msg[0x7] = "\\E0* A shame you will not live to realize your naivety./", Qx.msg[0x8] = "\\E4* Now^1, perish with the pathetic LIGHTNERs you worship!/", jr(0x9, 0x8), Qx.msg[0xa] = "* Sorry^1, my friends and I aren't going anywhere!/", jK(0xb), Qx.msg[0xc] = "* Ralsei's will is changing..^1.&* \\cYTALK\\cW became \\cYDUAL HEAL\\cW!/%", Qj(), Qx.tempflag[0x7] = 0x1, Qx.canact[hI][0x3] = 0x1, Qx.actactor[hI][0x3] = 0x3, Qx.actname[hI][0x3] = 'DualHeal', Qx.actdesc[hI][0x3] = "Heals#everyone", Qx.actcost[hI][0x3] = 0x7d, this.actcon = 0x1) : (Qx.msg[0x0] = "* Your SOUL shined its power on RALSEI!/%", Qj(), this.actcon = 0x14), this.acttimer = 0x0);
    let hu = (hf, hW, hX) => {
      Qx.faceaction[hf] = 0x2, Qx.charaction[hf] = 0x2, Qx.charspecial[hf] = hW, Qx.chartarget[hf] = 0x0, Qx.acting[hf] = 0x0, QS('snd_boost');
      let hY = Qb.first('obj_herokris'),
        hB = QJ((hY ? hY.x : 0x50) + 0x1e, (hY ? hY.y : 0x32) + 0x32, T7);
      hB.depth = -0x14, hB.image_index = 0x0, hB.image_xscale = 0x2, hB.image_yscale = 0x2, hB.image_speed = 0x1, hB.sprite_index = 'spr_soulshining', Qb.with(hX, hC => T5(hC)), Qb.with('obj_herokris', hC => T5(hC));
    };
    this.actcon === 0xa && (this.acttimer += 0x1, (this.acttimer >= 0xa || !Qb.exists('obj_writer')) && (this.acttimer = 0x0, this.actcon = 0xb)), this.actcon === 0xb && (hu(0x1, 0x5, 'obj_herosusie'), this.actcon = 0xc), this.actcon === 0xc && (this.acttimer += 0x1, this.acttimer >= 0x14 && (this.actcon = 0x1, Qb.with('obj_herosusie', hf => {
      hf.state = 0x0;
    }))), this.actcon === 0x14 && (this.acttimer += 0x1, (this.acttimer >= 0xa || !Qb.exists('obj_writer')) && (this.acttimer = 0x0, this.actcon = 0x15)), this.actcon === 0x15 && (hu(0x2, 0x6, 'obj_heroralsei'), this.actcon = 0x16), this.actcon === 0x16 && (this.acttimer += 0x1, this.acttimer >= 0x14 && (this.actcon = 0x1, Qb.with('obj_heroralsei', hf => {
      hf.state = 0x0;
    }))), this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o());
  }
  ["draw"](hI) {
    let hu = this.myself;
    if (this.state === 0x3) {
      if (this.hurttimer -= 0x1, this.hurttimer < 0x0) this.state = 0x0;else {
        if (Qx.monster[hu] === 0x0) {
          this.userEvent(0xa);
          return;
        }
        this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1);
      }
    }
    if (this.state === 0x0) {
      this.siner += 0x1;
      let hf = this.idlesprite;
      Qx.mercymod[hu] >= Qx.mercymax[hu] && (hf = this.idlesprite), hI.draw_sprite_ext(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(TN, 'obj_king_boss'), j2(TN, 'kinds', QA('obj_king_boss', Q3)), j2(TN, 'defaultDepth', 0x5a), j2(TN, 'defaultSprite', 'spr_chainking_idle');
var Tp = TN,
  TM = class dQ extends QE {
    ["create"]() {
      this.xx = jb, this.yy = jm, this.condition = 0x0, this.attackno = 0x0, this.attack = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.x = this.xx + 0x1d6, this.y = this.yy + 0x46, this.active = 0x1, this.faketimer = 0x0, this.faketimermax = 0xb4, this.timeruse = 0x0, this.image_speed = 0.334;
    }
    ["scr_debug"]() {
      return Qx.debug === 0x1;
    }
    ["nextAttack"]() {
      let hI = this.xx,
        hu = this.yy;
      this.attackno += 0x1, this.active = 0x0, this.attackno <= 0xb ? this.attack = this.attackno : this.attack = Qy(0x7, 0x8, 0x9, 0xa, 0xb);
      let hf = this.attack,
        hW = hx => {
          let hG = QJ(0x0, 0x0, k);
          return hG.type = hx, hG;
        },
        hX = hx => {
          this.visible = !0x1;
          let hG = QJ(this.x, this.y, TW);
          hG.type = 0x1, hG.subtype = hx;
          let hN = QJ(hI + 0xc8, hu + 0xaf, TH);
          hN.sprite_index = 'spr_battlebg_wavechain', T2();
        },
        hY = hx => {
          this.visible = !0x1, this.timeruse = 0x0;
          let hG = QJ(this.x, this.y, TW);
          hG.type = 0x2, hG.subtype = hx;
          let hN = QJ(hI + 0xcd, hu + 0xaa, TH);
          hN.sprite_index = 'spr_battlebg_1', T2();
        },
        hB = hx => {
          let hG = QJ(hI + 0x136, hu + 0xa5, QU);
          hG.sprite_index = 'spr_battlebg_2', T2();
          let hN = QJ(hG.x, hG.y, Tu);
          hN.type = hx;
        },
        hC = (hx, hG) => {
          QJ(hI + 0x154, hu + 0xaa, QU), T2(), hW(hx), this.timeruse = 0x1, this.faketimermax = hG, this.faketimer = 0x0;
        };
      hf === 0x1 && hC(0x15, 0xbe), hf === 0x2 && hX(0x0), hf === 0x3 && hC(0x22, 0xc8), hf === 0x4 && hB(0x0), hf === 0x5 && hX(0x1), hf === 0x6 && hY(0x2), hf === 0x7 && hC(0x23, 0xdc), hf === 0x8 && hB(0x3), hf === 0x9 && hC(0x17, 0xbe), hf === 0xa && hX(0x2), hf === 0xb && hY(0x1);
    }
    ["step"]() {
      this.active === 0x1 && this.scr_debug() && this.nextAttack(), this.timeruse === 0x1 && (this.faketimer += 0x1, this.faketimer >= this.faketimermax && (Qb.with('obj_bulletparent', hI => hI.instance_destroy()), Qb.with('obj_dbulletcontroller', hI => hI.instance_destroy()), Qb.with('obj_growtangle', hI => {
        hI.growcon = 0x3;
      }), Qb.with('obj_heart', hI => hI.instance_destroy()), this.active = 0x1, this.timeruse = 0x0, this.faketimer = 0x0));
    }
    ["draw"](hI) {
      this.draw_self(hI), hI.draw_set_color(Qz.green), hI.draw_text(0x0, 0x0, String(this.attackno));
      let hu = Qb.first('obj_chainking');
      hu && (hI.draw_set_color(Qz.yellow), hI.draw_text(0x0, 0x28, String(hu.x)), hI.draw_text(0x0, 0x3c, String(hu.y)));
    }
  };
j0(TM, 'obj_king_body'), j2(TM, 'kinds', QA('obj_king_body', QE)), j2(TM, 'defaultDepth', 0x0), j2(TM, 'defaultSprite', 'spr_chainking_spin');
var Tv = TM,
  TJ = [{
    'id': 'king',
    'name': 'King',
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "King.#Chains, spades and#a bouncing spiked box.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': Tp,
      'type': 0x19,
      'x': 0x1cc,
      'y': 0x46,
      'setup': jn
    }],
    'battlemsg': "* King blocked the way!",
    'encounterno': 0x28,
    'music': 'battle'
  }];
j3(Tp, "G.mnfight = 2;");
var Tg = {};
j1(Tg, {
  'FIGHTS': () => Lj,
  'SOUNDS': () => TR,
  'SPRITES': () => TZ,
  'obj_checker_animtest': () => L0,
  'obj_checkers_enemy': () => L8,
  'obj_checkers_leap': () => TK,
  'obj_oflash': () => TA,
  'obj_ralseithrown': () => L4,
  'obj_smallcheckers_enemy': () => LQ,
  'obj_spinheart': () => Tm,
  'obj_throwralsei': () => L6,
  'obj_throwtarget': () => L2,
  'setupStats': () => TV,
  'setupStatsCRound': () => Tk,
  'setupStatsKRound': () => Tn,
  'setupStatsKRound2': () => To
}), j4();
var TZ = ['spr_checkers_idle', 'spr_checkers_crouch', 'spr_checkers_leap', 'spr_checkers_magnificent', 'spr_checkers_leg', 'spr_checkers_bow', 'spr_checkers_milk', 'spr_checkers_crown', 'spr_checkers_idle_crownless', 'spr_checkershrapnel', 'spr_smallchecker_idle', 'spr_smallchecker_hurt', 'spr_smallchecker_run', 'spr_smallchecker_transform3', 'spr_smallchecker_legtuck', 'spr_smallchecker_crown', 'spr_krisb_bow', 'spr_ralseib_bow', 'spr_susieb_throwralseiready', 'spr_susieb_attack_unarmed', 'spr_ralsei_thrown', 'spr_ralseib_idle', 'spr_throwarrow', 'spr_spinheart', 'spr_spinheartmask', 'spr_attack_cut1', 'spr_attack_slap1'],
  TR = ['snd_impact', 'snd_jump', 'snd_boost', 'snd_ultraswing', 'snd_magicsprinkle', 'snd_swing', 'snd_power', 'snd_item', 'snd_grab', 'snd_coin', 'snd_noise', 'snd_whistlebreath', 'snd_crownshrink'],
  TS = 0x0,
  Tl = 0x0,
  Tz = j0(hI => "[C]", 'scr_get_input_name'),
  TF = j0((hI, ...hu) => {
    let hf = hI;
    return hu.forEach((hW, hX) => {
      hf = hf.split('~' + (hX + 0x1)).join(String(hW));
    }), hf;
  }, 'scr_84_get_subst_string'),
  Tc = j0(hI => ({
    'face': hI
  }), 'ralface'),
  Tw = j0(hI => ({
    'face': hI
  }), 'susface');
function Tq(...hI) {
  Qx.msg = new Array(0x64).fill('\x20');
  let hu = '',
    hf = 0x0;
  for (let hW of hI) typeof hW == 'string' ? (Qx.msg[hf++] = hu + hW, hu = '') : hu += '\x5cE' + String(hW.face);
}
j0(Tq, 'setMsgs');
var Ta = j0(() => Qb.exists('obj_writer'), 'writerExists'),
  TD = j0(() => Qb.with('obj_writer', hI => hI.instance_destroy()), 'killWriters'),
  TE = class dj extends QE {
    ["create"]() {
      this.flashspeed = 0x1, this.siner = 0x0, this.target = null, this.image_speed = 0x0, this.flashcolor = Qz.white;
    }
    ["draw"](hI) {
      Qb.exists(this.target) && (this.image_index = this.target.image_index, this.sprite_index = this.target.sprite_index), this.siner += this.flashspeed, hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, Math.max(0x0, QM(this.siner / 0x3))), this.siner > 0x4 && QM(this.siner / 0x3) < 0x0 && this.instance_destroy();
    }
  };
j0(TE, 'obj_oflash'), j2(TE, 'kinds', QA('obj_oflash', QE)), j2(TE, 'defaultDepth', 0x0);
var TA = TE;
function Ty(hI) {
  let hu = QJ(hI.x, hI.y, TA);
  return hu.image_xscale = hI.image_xscale, hu.image_speed = 0x0, hu.image_index = hI.image_index, hu.image_yscale = hI.image_yscale, hu.sprite_index = hI.sprite_index, hu.depth = hI.depth - 0x1, hu.target = hI, hu;
}
j0(Ty, 'scr_oflash');
function Tk(hI) {
  Qx.monstername[hI] = "C.Round", Qx.monstermaxhp[hI] = 0xa, Qx.monsterhp[hI] = 0xa, Qx.monsterat[hI] = 0x5, Qx.monsterdf[hI] = 0x0, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0xa, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.encounterno === 0x7 && Qx.plot < 0x28 && (Qx.plot = 0x28), QN(0x2) && (Qx.canact[hI][0x1] = 0x1, Qx.actactor[hI][0x1] = 0x2, Qx.actname[hI][0x1] = "X-Compliment", Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Warning', Qx.actactor[hI][0x2] = 0x3);
}
j0(Tk, 'setupStatsCRound');
function Tn(hI) {
  Qx.monstername[hI] = "K.Round", Qx.monstermaxhp[hI] = 0x514, Qx.monsterhp[hI] = 0x514, Qx.monsterat[hI] = 7.5, Qx.monsterdf[hI] = 0x3, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x64, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Bow', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = "Deep Bow", Qx.actactor[hI][0x2] = 0x3, QN(0x2) && (Qx.canact[hI][0x3] = 0x1, Qx.actname[hI][0x3] = 'Warning', Qx.actactor[hI][0x3] = 0x3);
}
j0(Tn, 'setupStatsKRound');
function To(hI) {
  Qx.monstername[hI] = "K.Round", Qx.monstermaxhp[hI] = 0x514, Qx.monsterhp[hI] = 0x514, Qx.monsterat[hI] = 0x8, Qx.monsterdf[hI] = 0x3, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x64, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.flag[0xf6] === 0x1 && (Qx.actname[hI][0x0] = 'Checkers'), Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Bow', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = "Susie's Idea", Qx.actactor[hI][0x2] = 0x4;
}
j0(To, 'setupStatsKRound2');
var TV = Tn,
  Tr = class dT extends Q6 {
    ["create"]() {
      Object.assign(this, {
        'jumpcon': 0x0,
        'jumptimer': 0x0,
        's_timer': 0x0,
        'image_xscale': 0x2,
        'image_yscale': 0x2,
        'leapmode': 0x0,
        'active': 0x1,
        'image_speed': 0x0,
        'image_index': 0x0,
        'damage': 0x64,
        'grazed': 0x0,
        'grazepoints': 0x6,
        'timepoints': 0x2,
        'inv': 0x78,
        'grazetimer': 0x0,
        'target': 0x0,
        'boss': 0x0,
        'amt': 0x0,
        'floory': 0x0,
        'targetx': 0x0,
        'magamt': 0x0,
        'siner': 0x0
      });
    }
    ["userEvent"](hI) {
      hI === 0x5 && this.active === 0x1 && QC(this);
    }
    ["step"]() {
      let hI = Qb.first('obj_growtangle'),
        hu = hI ? hI.y : 0xaa,
        hf = hI ? hI.sprite_height : 0x0,
        hW = Qb.first('obj_heart'),
        hX = hW ? hW.x : 0x140,
        hY = hW ? hW.y : 0xaa,
        hB = () => Qb.with('obj_checkers_enemy', hC => {
          hC.visible = !0x0;
        });
      if (this.leapmode === 0x0) {
        if (this.jumpcon === 0x1 && this.vspeed >= 0x0 && this.y >= hu + hf / 0x2 - this.sprite_height && (QS('snd_impact'), QJ(0x0, 0x0, Qf), this.y = hu + hf / 0x2 - this.sprite_height, this.jumptimer = 0x0, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0), this.jumpcon === 0x3 && this.vspeed >= 0x0 && this.y >= this.floory - 0x2 && (QS('snd_impact'), QJ(0x0, 0x0, Qf), this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x4), this.jumpcon === 0x0) {
          this.sprite_index = 'spr_checkers_crouch', this.jumptimer += 0x1;
          let hC = 0x14;
          this.amt >= 0x1 && (hC = 0xa), this.jumptimer >= hC && (QS('snd_jump'), this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.amt += 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = hX + 0x8 - this.sprite_width / 0x2, this.vspeed = -0xf, this.amt === 0x1 && (this.vspeed = -0x11), this.gravity = 0x1, this.hspeed = (this.targetx - this.x) / 0x1c, this.amt >= 0x4 && (this.active = 0x0, this.jumpcon = 0x3, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0x10));
        }
        this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (Qx.turntimer = -0x1, hB(), this.instance_destroy()));
      }
      if (this.leapmode === 0x1 && (this.jumpcon === 0x7 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && Qb.with('obj_regularbullet', hx => {
        hx.active = 0x0, hx.image_alpha -= 0.1;
      }), this.jumptimer >= 0x14 && (Qx.turntimer = -0x1, hB(), this.instance_destroy())), this.jumpcon === 0x6 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x7), this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_crouch', this.jumptimer += 0x1, this.jumptimer >= 0x14 && (this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = hX + 0x8 - this.sprite_width / 0x2, this.hspeed = (this.targetx - this.x) / 0x11, this.vspeed = -0x11, QS('snd_jump'), this.gravity = 0x1, this.amt += 0x1, this.amt >= 0x3 && (this.active = 0x0, this.jumpcon = 0x6, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0x10))), this.jumpcon === 0x1 && this.vspeed >= 0x0 && (this.gravity = 0x0, this.vspeed = 0x0, this.hspeed = 0x0, this.jumpcon = 0x2, QS('snd_boost')), this.jumpcon === 0x2 && (this.image_speed = 0.25, this.jumptimer += 0x1, this.jumptimer >= 0xf && (QS('snd_ultraswing'), this.image_speed = 0x0, this.image_index = 0x0, this.vspeed = 0x20, this.jumpcon = 0x3, this.jumptimer = 0x0)), this.jumpcon === 0x3)) {
        let hx = Qd(this);
        if (hx.image_alpha = 0.7, this.y >= hu + hf / 0x2 - this.sprite_height) {
          QS('snd_impact'), QJ(0x0, 0x0, Qf);
          for (let hG = 0x0; hG < 0x6; hG += 0x1) {
            let hN = QJ(this.x + this.sprite_width / 0x2 - 0xf + hG * 0x5, hu + hf / 0x2, Q7);
            hN.image_xscale = 1.5, hN.image_yscale = 1.5, hN.direction = 0x82 - Qq(0xa) - 0x46 * (hG / 0x5), hN.sprite_index = 'spr_checkershrapnel', hN.speed = 0x6 + Qq(0x1), hN.gravity = 0.25, hN.target = this.target, hN.damage = this.damage;
          }
          this.y = hu + hf / 0x2 - this.sprite_height, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0;
        }
      }
      if (this.leapmode === 0x2) {
        if (this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_magnificent', this.image_speed = 0.5, this.jumpcon = 0x1, this.magamt = 0x0), this.jumpcon === 0x1 && (this.image_index === 0x2 && QS('snd_ultraswing'), this.image_index >= 0x4 && (this.image_index = 0x4, this.image_speed = 0x0, this.hspeed = -0x4, this.gravity = -0.12, this.jumpcon = 0x2, this.siner = 0x0)), this.jumpcon === 0x2) {
          if (this.siner += 0x1, this.y += QM(this.siner / 0x3) * 0x4, this.s_timer += 0x1, this.s_timer === 0x14 && QS('snd_magicsprinkle'), this.s_timer >= 0x18) {
            let hp = QJ(this.x + Qq(this.sprite_width / 0x2), this.y + this.sprite_height - 0x32, Q7);
            hp.sprite_index = 'spr_checkershrapnel', hp.vspeed = 0x3, hp.image_xscale = 1.5, hp.image_yscale = 1.5, hp.depth = this.depth + 0x1, hp.gravity_direction = 0x87 + Qq(0xb4), hp.gravity = 0.06, hp.target = this.target, hp.damage = this.damage, (this.magamt === 0x6 || this.magamt === 0xc) && (hp.gravity = 0x0, hp.move_towards_point(hX + 0x8, hY + 0x8, 0x3)), this.s_timer = 0x15, this.magamt += 0x1;
          }
          this.y < Tl - 0xc8 && (this.speed = 0x0, this.gravity = 0x0, this.y = this.ystart - 0x64, this.x = this.xstart + 0x12c, this.hspeed = -0x1e, this.vspeed = 0xa, this.jumpcon = 0x3);
        }
        this.jumpcon === 0x3 && (this.magamt = 0x0, this.jumptimer += 0x1, this.jumptimer >= 0xa && (QS('snd_impact'), QJ(0x0, 0x0, Qf), this.amt += 0x1, this.s_timer = 0x0, this.x = this.xstart, this.y = this.ystart, this.hspeed = 0x0, this.vspeed = 0x0, this.jumpcon = 0x0, this.jumpcon = 0x4, this.jumptimer = 0x0, this.sprite_index = 'spr_checkers_idle', this.image_index = 0x0, this.image_speed = 0x0)), this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0x14 && Qb.with('obj_regularbullet', hM => {
          hM.active = 0x0, hM.image_alpha -= 0.1;
        }), this.jumptimer >= 0x1e && (Qx.turntimer = -0x1, this.instance_destroy(), hB()));
      }
      if (this.leapmode === 0x3) {
        if (Qb.with('obj_regularbullet', hM => {
          hM.image_xscale += 0.01, hM.image_yscale += 0.01;
        }), this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_leg', this.image_index = 0x0, this.image_speed = 0.5, this.jumpcon = 0x1), this.jumpcon === 0x1) {
          if (this.image_index === 0x3) {
            QS('snd_swing'), QS('snd_magicsprinkle');
            for (let hM = 0x0; hM < 0x4; hM += 0x1) {
              let hv = QJ(this.x - 0x28, this.y + 0x64, Q7);
              hv.sprite_index = 'spr_checkershrapnel', hv.direction = QV(hv.x, hv.y, hX + 0x8, hY + 0x8) - 0xa * hM + Qq(hM * 0x14), hv.speed = 3.5 + Qq(1.8), hv.target = this.target, hv.damage = this.damage;
            }
          }
          this.image_index >= 0x5 && (this.image_index = 0x5, this.image_speed = 0x0, this.jumpcon = 0x2);
        }
        this.jumpcon === 0x2 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (this.sprite_index = 'spr_checkers_idle', this.image_index = 0x0), this.jumptimer >= 0x14 && (this.jumptimer = 0x0, this.jumpcon = 0x0, this.amt += 0x1, this.amt >= 0x4 && (this.jumpcon = 0x3, this.jumptimer = 0x0))), this.jumpcon === 0x3 && (this.jumptimer += 0x1, this.jumptimer >= 0x14 && Qb.with('obj_regularbullet', hR => {
          hR.image_alpha -= 0.1, hR.active = 0x0;
        }), this.jumptimer >= 0x1e && (Qx.turntimer = -0x1, this.instance_destroy(), hB()));
      }
      this.leapmode === 0x4 && (this.jumpcon === 0x1 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0, this.jumptimer = 0xa), this.jumpcon === 0x3 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x4), this.jumpcon === 0x0 && (this.jumptimer += 0x1, this.jumptimer >= 0x10 && (this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = hX + 0x8 - this.sprite_width / 0x2, this.vspeed = -0xc, this.gravity = 0x1, this.hspeed = (this.targetx - this.x) / 0x18, this.amt += 0x1, this.amt >= 0x4 && (this.active = 0x0, this.jumpcon = 0x3, this.jumptimer = 0x0, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0xc))), this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (Qx.turntimer = -0x1, hB(), this.instance_destroy()))), this.grazed === 0x1 && (this.grazetimer += 0x1, this.grazetimer >= 0xa && (this.grazetimer = 0x0, this.grazed = 0x0));
    }
  };
j0(Tr, 'obj_checkers_leap'), j2(Tr, 'kinds', QA('obj_checkers_leap', Q6)), j2(Tr, 'defaultDepth', 0x1), j2(Tr, 'defaultSprite', 'spr_checkers_idle');
var TK = Tr,
  Tb = class dL extends Q8 {
    ["create"]() {
      let hI = Qb.first('obj_heart');
      Object.assign(this, {
        'con': 0x0,
        'htimer': 0x0,
        'image_xscale': 0x4,
        'image_yscale': 0x4,
        'active': 0x0,
        'image_alpha': 0x0,
        'image_angle': -0x5a,
        'joker': 0x0,
        'damage': 0x64,
        'grazed': 0x0,
        'grazepoints': 0x5,
        'timepoints': 0x0,
        'inv': 0x3c,
        'grazetimer': 0x0,
        'spinmax': 0x0,
        'hmax': 0x0,
        'type': 0x0,
        'target': 0x0
      }), this.x = (hI ? hI.x : 0x140) + 0x8, this.y = (hI ? hI.y : 0xaa) + 0x8;
    }
    ["step"]() {
      this.con === 0x4 && (this.htimer += 0x1, this.htimer >= 0xa && (this.friction = 0x0, this.speed = 0x0), this.htimer >= 0x14 && (this.active = 0x0, this.image_alpha -= 0.2), this.htimer >= 0x19 && Qx.turntimer >= 0x0 && (Qx.turntimer = -0x2)), this.con === 0x3 && (this.htimer += 0x1, this.htimer >= this.hmax && (this.direction = this.image_angle, this.speed = 2.5, this.friction = -0.5, this.joker === 0x1 && (this.speed = 0x5), this.con = 0x4, this.htimer = 0x0)), this.con === 0x2 && (this.htimer += 0x1, this.image_angle += 0x18, this.htimer >= this.spinmax && (this.hmax = 0x13, this.joker === 0x1 && (this.hmax = 0xf), this.image_angle = 0x10e + this.spinmax * 0x18, this.con = 0x3, this.htimer = 0x0)), this.con === 0x1 && (this.htimer += 0x1, this.htimer >= 0xa && (this.spinmax = Qy(26.25, 0x1e, 33.75, 37.5), this.joker === 0x1 && (this.spinmax = 0xf + Qq(0xf)), this.con = 0x2, this.htimer = 0x0)), this.con === 0x0 && (this.image_alpha += 0.2, this.image_xscale -= 0.2, this.image_yscale -= 0.2, this.htimer += 0x1, this.htimer >= 0x5 && (this.con = 0x1, this.htimer = 0x0, this.active = 0x1)), this.grazed === 0x1 && (this.grazetimer += 0x1), this.grazetimer >= 0xf && (this.grazetimer = 0x0, this.grazed = 0x0);
    }
  };
j0(Tb, 'obj_spinheart'), j2(Tb, 'kinds', QA('obj_spinheart', Q8)), j2(Tb, 'defaultDepth', 0x0), j2(Tb, 'defaultSprite', 'spr_spinheart'), j2(Tb, 'defaultMask', 'spr_spinheartmask');
var Tm = Tb,
  TO = class dh extends QE {
    ["create"]() {
      this.type = 0x0, this.con = 0x1, this.subcon = 0x0, this.secondtime = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.windsound = 0x0, this.crown = null, this.maxy = 0x0;
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && (this.con += 0x1);
    }
    ["step"]() {
      if (this.type !== 0x1) return;
      let hI = this.crown;
      this.con === 0x1 && (this.image_speed = 0x0, this.image_index = 0x0, this.crown = QJ(this.x + 0x18, this.y + 0xa, QL), this.crown.image_xscale = 0x2, this.crown.image_yscale = 0x2, this.crown.sprite_index = 'spr_smallchecker_crown', this.crown.depth = this.depth - 0x1, this.sprite_index = 'spr_smallchecker_transform3', this.con = 0.4, this.windsound = 0x0, this.alarm[0x4] = 0x1e), this.con === 1.4 && (this.windsound === 0x0 && (QS('snd_whistlebreath'), this.windsound = 0x1), this.secondtime === 0x0 ? hI.hspeed += 0.2 : hI.hspeed += 0.4, hI.hspeed >= 0x3 && (this.con = 1.5)), this.con === 1.5 && (hI.maxy = this.y + this.sprite_height, hI.image_angle = -0x2d, hI.y -= 0xa, hI.gravity = 0.5, hI.hspeed = 0x5, hI.friction = 0.2, this.con = 1.6), this.con === 1.6 && hI.y >= hI.maxy - hI.sprite_height - 0xa && (hI.y += 0xa, hI.image_angle = 0x0, hI.gravity = 0x0, hI.vspeed = 0x0, hI.friction = 0x0, hI.hspeed = 0x1, this.con = 0.9, this.alarm[0x4] = 0x1e, this.secondtime === 0x1 && (this.alarm[0x4] = 0xa)), this.con === 1.9 && (this.image_speed = 0.25, QS('snd_crownshrink'), this.con = 2.1), this.con === 2.1 && (this.image_speed += 0.01, this.secondtime === 0x1 && (this.image_speed += 0.01), this.image_speed >= 0.4 && (this.image_index = 0x1, this.image_speed = 0x0, this.con = 0x3, this.maxy = this.y + this.sprite_height - 0x1e, this.alarm[0x4] = 0x1e, this.secondtime === 0x1 && (this.alarm[0x4] = 0xa))), this.con === 0x4 && (this.x += 0x28, this.y += 0x2e, this.sprite_index = 'spr_smallchecker_legtuck', this.image_index = 0x0, this.image_speed = 0.25, this.vspeed = -0x3, this.gravity = 0x1, this.secondtime === 0x1 && (this.vspeed = -0x6, this.gravity = 0x2, this.image_speed = 0.5), this.con = 0x5), this.con === 0x5 && (this.image_index >= 0x2 && (this.image_speed = 0x0), this.y >= this.maxy - 0x4 && (this.y = this.maxy, this.gravity = 0x0, this.vspeed = 0x0, this.con = 0x6, this.alarm[0x4] = 0x1e, this.secondtime === 0x1 && (this.alarm[0x4] = 0xa))), this.con === 0x7 && (this.image_angle -= 0x5, this.hspeed = 0x3, this.secondtime === 0x1 && (this.hspeed = 0x6, this.image_angle -= 0x5), this.x >= TS + 0x2d0 && (this.con = 0x8, Qx.monster[0x0] = 0x0, Qx.monster[0x1] = 0x0, Qx.monster[0x2] = 0x0, o(), Qb.with('obj_monsterparent', hu => hu.instance_destroy()), this.instance_destroy()));
    }
  };
j0(TO, 'obj_checker_animtest'), j2(TO, 'kinds', QA('obj_checker_animtest', QE)), j2(TO, 'defaultDepth', 0x0), j2(TO, 'defaultSprite', 'spr_smallchecker_idle');
var L0 = TO,
  L1 = class dd extends QE {
    ["create"]() {
      if (this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_speed = 0.2, this.good = 0x1, this.offing = 0x0, Qb.number('obj_throwtarget') === 0x1) {
        let hI = QJ(this.x, this.y, dd);
        hI.depth = this.depth + 0x1, hI.offing = 0x0, hI.good = 0x0, hI.sprite_index = 'spr_checkers_idle_crownless';
      }
      this.con = 0x0;
    }
    ["step"]() {
      this.con === 0x1 && (this.image_angle += 0xa), this.con === 0x5 && (this.x < this.xstart + 0x28 && (this.x += 0xa), this.con = 0x6), this.con === 0x6 && this.x > this.xstart && (this.x -= 0x2), this.con === 0x7 && (this.x < this.xstart + 0x28 && (this.x += 0x8), this.con = 0x6);
    }
  };
j0(L1, 'obj_throwtarget'), j2(L1, 'kinds', QA('obj_throwtarget', QE)), j2(L1, 'defaultDepth', 0x4), j2(L1, 'defaultSprite', 'spr_checkers_crown');
var L2 = L1,
  L3 = class dP extends QE {
    ["create"]() {
      this.con = 0x0, this.yy = Tl, this.xx = TS, this.timer = 0x0, this.collided = 0x0, this.mypower = 0xa;
    }
    ["step"]() {
      let hI = Qb.first('obj_heroralsei'),
        hu = hI ? hI.y : 0xb4,
        hf = hI ? hI.x : 0x50;
      (this.con === 0x0 || this.con === 0x2) && (this.image_angle = this.direction), (this.x > this.xx + 0x2bc || this.y < this.yy - 0x28) && this.con === 0x0 && (this.gravity = 0x0, this.speed = 0x0, this.x = this.xx - 0x28, this.y = hu, this.sprite_index = 'spr_ralseib_idle', this.image_angle = 0x0, this.hspeed = 0x14, this.con = 0xa), this.con === 0xa && (this.timer += 0x1, this.x >= hf - 0xa && (this.collided === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Missed!/%", Qj()), Qb.with('obj_heroralsei', hW => {
        hW.visible = !0x0;
      }), Qb.with('obj_herosusie', hW => {
        hW.visible = !0x0;
      }), Qb.with('obj_checkers_enemy', hW => {
        hW.actcon = 0x1, hW.visible = !0x0;
      }), Qb.with('obj_throwtarget', hW => hW.instance_destroy()), Qb.with('obj_throwralsei', hW => hW.instance_destroy()), this.instance_destroy())), this.con === 0x2 && (this.x < this.xx - 0x28 || this.y > this.yy + 0x208) && (this.timer = 0x0, this.gravity = 0x0, this.speed = 0x0, this.x = this.xx - 0x28, this.y = hu, this.sprite_index = 'spr_ralseib_idle', this.image_angle = 0x0, this.hspeed = 0x14, this.con = 0xa);
    }
    ["endStep"]() {
      if (!this.destroyed) {
        for (let hI of Qb.all('obj_throwtarget')) QZ(this, hI) && this.hitTarget(hI);
      }
    }
    ["hitTarget"](hI) {
      this.collided === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), hI.good === 0x1 ? (Qb.with('obj_checkers_enemy', hu => {
        hu.crown += 0x23;
      }), Qx.msg[0x0] = "* The crown greatly loosened!/%", QS('snd_coin'), hI.offing === 0x1 ? (hI.con = 0x1, hI.vspeed = -0x8) : hI.con = 0x5) : (QS('snd_noise'), hI.con = 0x7, Qb.with('obj_checkers_enemy', hu => {
        hu.crown += 0x14;
      }), Qx.msg[0x0] = "* The crown loosened a little!/%", this.hspeed = -0xc, this.vspeed = -0x4, this.gravity = 0.5, this.con = 0x2), Qj(), this.collided = 0x1);
    }
  };
j0(L3, 'obj_ralseithrown'), j2(L3, 'kinds', QA('obj_ralseithrown', QE)), j2(L3, 'defaultDepth', 0x1), j2(L3, 'defaultSprite', 'spr_ralsei_thrown');
var L4 = L3,
  L5 = class dU extends QE {
    ["create"]() {
      Object.assign(this, {
        'angle': 0x0,
        'throwcon': 0x1,
        'angledraw': 0x1,
        'image_xscale': 0x2,
        'image_yscale': 0x2,
        'radius': 0x12c,
        'anglespeed': 0x2,
        'ralspeed': 0x1a,
        'ralgrav': 0x1,
        'fro': 0x0,
        'mypower': 0xf,
        'maxpower': 0x1e,
        'minpower': 0xf,
        'powerdir': 0x1,
        'powerspeed': 0.6,
        'throwready': 0x0,
        'throwalpha': 0x0,
        'activatethrow': 0x0,
        'lx': 0x0,
        'ly': 0x0
      }), this.rx = this.x + 0x46, this.ry = this.y + 0x1e, this.ralyoff = new Array(0x2a).fill(0x0);
    }
    ["step"]() {
      if (this.throwcon === 0x1) {
        if (this.throwready === 0x0 && (this.angle += this.anglespeed), this.angle >= 0x1e && (this.anglespeed = -0x2), this.angle <= -0xf && (this.anglespeed = 0x2), QD() && this.throwalpha >= 0.9 && this.throwready === 0x1 && (this.activatethrow = 0x1, TD()), QD() && this.throwready === 0x0 && (this.throwready = 0x1, TD(), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Press " + Tz(0x6) + " to determine the POWER!", Qj()), this.activatethrow === 0x1) {
          this.activatethrow = 0x0, this.throwready = 0x0, this.image_index = 0x0, this.image_speed = 0.5, this.sprite_index = 'spr_susieb_attack_unarmed', this.angledraw = 0x0, this.throwcon = 0x2, QS('snd_ultraswing');
          let hI = QJ(this.rx, this.ry, L4);
          hI.speed = this.mypower, hI.mypower = this.mypower, hI.image_xscale = 0x2, hI.image_yscale = 0x2, hI.direction = this.angle, hI.image_angle = this.angle, hI.gravity = this.ralgrav;
        }
        this.throwready === 0x1 && (this.mypower += this.powerdir * this.powerspeed, this.mypower >= this.maxpower && (this.powerdir = -0x1), this.mypower <= this.minpower && (this.powerdir = 0x1));
      }
      if (this.throwcon === 0x2 && this.image_index >= 0x5 && (this.image_speed = 0x0), this.angledraw === 0x1) {
        this.lx = Qk(this.mypower, this.angle), this.ly = Qn(this.mypower, this.angle);
        for (let hu = 0x0; hu < 0x2a; hu += 0x1) {
          let hf = this.ralgrav + this.ralgrav * hu;
          hu > 0x0 ? this.ralyoff[hu] = this.ralyoff[hu - 0x1] + hf : this.ralyoff[0x0] = hf;
        }
      }
    }
    ["draw"](hI) {
      if (this.draw_self(hI), this.angledraw === 0x1) {
        let hu = this.rx,
          hf = this.ry,
          hW = this.lx,
          hX = this.ly,
          hY = this.fro,
          hB = this.ralyoff;
        if (this.throwready === 0x1) {
          this.throwalpha < 0x1 && (this.throwalpha += 0.125), hI.draw_set_alpha(this.throwalpha), hI.draw_set_color(QF(Qz.blue, Qz.white, 0.5));
          for (let hC = 0x0; hC < 0xc; hC += 0x1) hI.draw_circle(hu + hW * (hC * 0x2 + hY), hf + hX * (hC * 0x2 + hY) + hB[hC * 0x2 + hY] - 0x14, 0x4, !0x1), hI.draw_line_width(hu + hW * (hC * 0x2 + hY), hf + hX * (hC * 0x2 + hY) + hB[hC * 0x2 + hY] - 0x14, hu + hW * ((hC + 0x1) * 0x2 + hY), hf + hX * ((hC + 0x1) * 0x2 + hY) + hB[(hC + 0x1) * 0x2 + hY] - 0x14, 0x2), hI.draw_sprite_ext('spr_throwarrow', 0x0, hu, hf - 0x14, 0x2, 0x2, this.angle, Qz.red, 0x1);
          hI.draw_set_alpha(0x1);
        }
        this.throwready === 0x0 && (hI.draw_set_color(Qz.red), hI.draw_sprite_ext('spr_throwarrow', 0x0, hu, hf - 0x14, 0x2, 0x2, this.angle, Qz.white, 0x1));
      }
    }
  };
j0(L5, 'obj_throwralsei'), j2(L5, 'kinds', QA('obj_throwralsei', QE)), j2(L5, 'defaultDepth', 0x0), j2(L5, 'defaultSprite', 'spr_susieb_throwralseiready');
var L6 = L5,
  L7 = class dH extends Q3 {
    ["create"]() {
      Object.assign(this, {
        'bikeflip': 0x0,
        'becomeflash': 0x0,
        'turnt': 0x0,
        'turns': 0x0,
        'talktimer': 0x0,
        'talkmax': 0x5,
        'state': 0x0,
        'flash': 0x0,
        'siner': 0x0,
        'fsiner': 0x0,
        'talked': 0x0,
        'attacked': 0x0,
        'hurt': 0x0,
        'hurttimer': 0x0,
        'hurtshake': 0x0,
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
        'checked': 0x0,
        'crown': 0x0,
        'attacktype': 0x0,
        'thrown': 0x0,
        'thissprite': 'spr_checkers_idle',
        'scon': 0x0,
        'secondtime': 0x0,
        'bowcounter': 0x0,
        'ralsei_lecture': 0x0,
        'milk_counter': 0x0,
        'rtimer': 0x0,
        'milkmax': 0x3e8,
        'milktimer': 0x0,
        'milk': null,
        'bowkris': null,
        'bowral': null,
        'bowcheck': null,
        'trsus': null,
        'throwsus': null,
        'animtest': null
      });
    }
    ["userEvent"](hI) {
      if (hI === 0xc) {
        Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x4, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x4;
        return;
      }
      hI !== 0xb && super.userEvent(hI);
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && (this.actcon += 0x1);
    }
    ["step"]() {
      let hI = this.myself;
      if (Qx.monstertype[hI] === 0x15 && (this.secondtime = 0x1), Qx.monster[hI] === 0x1) {
        if (Qx.flag[0x33 + hI] = 0x4, this.secondtime === 0x1 && (this.milk_counter = 0x63), this.secondtime === 0x1 && (this.ralsei_lecture = 0x63), Qx.mnfight === 0x1 && this.talked === 0x0 && (QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), this.milkmax = 0x3e8, this.milk_counter > 0x0 && (this.milkmax = 0x258), Qx.monsterhp[hI] > this.milkmax && (!Qb.exists('obj_moveheart') && !Qb.exists('obj_heart') && QI(), Qb.exists('obj_growtangle') || QJ(TS + 0x140, Tl + 0xaa, QU)), Qx.mnfight = 0x2, this.rtimer = 0x0, Qx.typer = 0x32, this.talked = 0x2, this.attacked = 0x0, this.talktimer = 0x0), this.talked === 0x2 && (Qx.mnfight = 0x2), Qx.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.rtimer += 0x1, this.rtimer === 0xc) {
            if (this.talked = 0x0, this.milkmax = 0x3e8, this.milk_counter > 0x0 && (this.milkmax = 0x258), Qx.monsterhp[hI] <= this.milkmax) this.scon === 0x0 && (this.scon = 0x1);else {
              if (!Qb.exists('obj_checkers_leap')) {
                let hu = 0x0;
                this.attacktype === 0x0 && (hu = 0x0), this.attacktype === 0x1 && (hu = 0x3), this.attacktype === 0x2 && (hu = 0x1), this.attacktype === 0x3 && (hu = 0x2);
                let hf = QJ(this.x, this.y, TK);
                hf.leapmode = hu, hf.target = this.mytarget, hf.damage = Qx.monsterat[hI] * 0x5, this.attacktype += 0x1, this.attacktype > 0x3 && (this.attacktype = 0x0);
              }
              this.siner = 0x0, this.visible = !0x1, this.turns += 0x1;
            }
            Qx.turntimer = 0x3e7, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0, Qy(0x0), Qx.battlemsg[0x0] = "* K.Round shuffles furiously.", Qx.monsterstatus[hI] === 0x1 && (Qx.battlemsg[0x0] = "* K.Round looks weak."), Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 0x3 && (Qx.battlemsg[0x0] = "* K.Round's shuffle becomes lethargic."), this.crown > 0x0 && (Qx.battlemsg[0x0] = TF("* The crown is \\cY~1-percent\\cW loose!", String(this.crown)));
          } else Qx.turntimer = 0x78;
        }
        Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (this.battlecancel === 0x1 && (Qx.mercymod[hI] = 0x3e7), this.battlecancel === 0x2 && (Qb.with('obj_battlecontroller', hW => {
          hW.noreturn = 0x1;
        }), this.con = 0x1, this.battlecancel = 0x3));
      }
      if (this.scon === 0x1 && (this.milk_counter > 0x0 ? this.scon = 1.5 : (TD(), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* K. ROUND felt stressed out and attacked!/%", Qj(), this.scon = 1.5)), this.scon === 1.5 && !Ta() && (QS('snd_magicsprinkle'), TD(), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* K. ROUND practiced self-care!", Qx.turntimer = 0x3e7, Qj(), this.milk = QP(this.x - 0x64, this.y + 0x3c, 'spr_checkers_milk'), this.milk.image_speed = 0x0, this.milk.image_xscale = 0x4, this.milk.image_yscale = 0x4, this.milk.image_alpha = 0x0, this.milk.depth = this.depth - 0x1, this.scon = 0x2, this.milktimer = 0x0), this.scon === 0x2) {
        let hW = this.milk;
        hW.image_xscale -= 0.2, hW.image_yscale -= 0.2, hW.image_alpha += 0.1, this.milktimer += 0x1, this.milktimer >= 0xa && (this.scon = 0x3, this.milktimer = 0x0, hW.image_alpha = 1.4);
      }
      if (this.scon === 0x3 && (this.milktimer += 0x1, this.milktimer >= 0x19 && (this.scon = 0x4, this.milktimer = 0x0)), this.scon === 0x4) {
        let hX = this.milk;
        if (hX.hspeed += 0x2, hX.image_alpha -= 0.1, this.milktimer += 0x1, this.milktimer === 0xa) {
          Qx.monsterat[hI] < 0xa && (Qx.monsterat[hI] += 0.5), QS('snd_power');
          let hY = 0x2bc;
          this.milk_counter === 0x0 && (hY = 0x12c), Qx.monsterhp[hI] += hY;
          let hB = QJ(Qx.monsterx[hI], Qx.monstery[hI], Q1);
          hB.delay = 0x8, hB.type = 0x3, hB.damage = 0x2bc, hB.damage = hY;
          let hC = QJ(this.x, this.y, Q2);
          hC.target = this;
        }
        this.milktimer >= 0xf && (hX.instance_destroy(), this.scon = 0x5, this.milktimer = 0x0);
      }
      this.scon === 0x5 && (this.milktimer += 0x1, this.milktimer >= 0x1e && (this.milk_counter > 0x0 ? (TD(), this.scon = 0x0, this.milktimer = 0x0, Qx.turntimer = 0x0) : (TD(), this.scon = 0x6, Tq("* K. ROUND's HP and ATTACK went up!/", Tc(0x3), "* Susie^1! Stop attacking it^1! You're making it stronger!/", Tw(0x3), "* Pssh^1, and let it think I'm AFRAID^1? No way!/%"), Qj()), this.milk_counter += 0x1)), this.scon === 0x6 && (Ta() ? Qx.turntimer = 0x3e7 : (Qx.fc = 0x0, this.scon = 0x0, this.milktimer = 0x0, Qx.turntimer = 0x0)), Qx.myfight === 0x3 && this.actStep(), Qx.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["actStep"]() {
      let hI = this.myself,
        hu = () => Qb.first('obj_herokris'),
        hf = () => Qb.first('obj_herosusie'),
        hW = () => Qb.first('obj_heroralsei'),
        hX = (hY, hB) => Qb.with(hY, hC => {
          hC.visible = hB;
        });
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), this.secondtime === 0x0 ? (Qx.msg[0x0] = "* K.ROUND - AT 9 DF 3&* Check^1?&* That's chess^1, not checkers!/%", Qx.actname[hI][0x0] = 'Checkers', Qx.flag[0xf6] = 0x1, this.checked === 0x1 && (Qx.msg[0x0] = "* K.ROUND - AT 9 DF 3&* That's better./%"), this.checked = 0x1) : (Qx.flag[0xf6] === 0x1 ? (Qx.msg[0x0] = "* K.ROUND - AT 9 DF 3&* Watch out for its Flying King attack!/", Qx.msg[0x1] = "* (Also^1, you need to get the CROWN off of its head.)/%") : (Qx.msg[0x0] = "* K.ROUND - AT 9 DF 3&* It's being controlled into attacking...!/", Qx.msg[0x1] = "* (Though^1, wouldn't it just attack anyway...?)/%"), this.checked = 0x1), Qj()), this.acting === 0x2 && this.actcon === 0x0) {
        this.secondtime === 0x0 && (this.crown += 0xf), this.secondtime === 0x1 && (this.crown += 0x12), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You bowed to K. ROUND./%", hX('obj_herokris', !0x1), Qx.faceaction[0x0] = 0x0, Qx.charaction[0x0] = 0x0;
        let hY = hu();
        this.bowkris = QP(hY ? hY.x : 0x50, hY ? hY.y : 0x64, 'spr_krisb_bow'), Ty(this.bowkris);
        let hB = Qd(this.bowkris);
        hB.hspeed = 0x5, hB.depth = this.bowkris.depth + 0x1, QS('snd_item'), Qj(), this.actcon = 0x14;
      }
      if (this.actcon === 0x14 && !Ta() && (this.visible = !0x1, this.bowcheck = QP(this.x, this.y, 'spr_checkers_bow'), this.bowcheck.image_speed = 0.334, Qx.fc = 0x0, Qx.typer = 0x4, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* It bowed back^1.&* Its crown loosened a little./%", this.ralsei_lecture === 0x0 && this.secondtime === 0x0 && (Tq("* It bowed back^1.&* Its crown loosened a little./", Tc(0x0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", Tw(0x0), "* Nah^1, it's crown'll come off.../", "\\E4* When I smash this guy into the GROUND!/", Tc(0x1), "* .../%"), this.ralsei_lecture = 0x1), this.thrown === 0x0 && this.secondtime === 0x1 && (this.bowcounter === 0x0 && (Qx.fc = 0x2, Qx.fe = 0x3, Qx.typer = 0x2d, Tq("* Huh!? That hardly did anything!/", "\\E1* How can we push off that CROWN...?/", Tw(0x1), "* ... Hmm./%")), this.bowcounter === 0x1 && (Qx.fc = 0x2, Qx.fe = 0x3, Qx.typer = 0x2d, Tq("* It's still hardly working!/", "\\E6* Whatever can we do^1, Kris...?/", Tw(0x2), "* ... Hey./%")), this.bowcounter === 0x2 && (Qx.fc = 0x2, Qx.fe = 0x8, Qx.typer = 0x2d, Tq("* Sometimes persistence is key^1, Kris!!/", "\\E6* It'll be hard^1, but we can do it!!/", Tw(0x7), "* HEY YOU GUYS!!!/%"))), this.bowcounter += 0x1, QQ(), this.actcon = 0x15), this.actcon === 0x15 && !Ta() && (this.bowkris && this.bowkris.instance_destroy(), this.bowcheck && this.bowcheck.instance_destroy(), this.visible = !0x0, hX('obj_herokris', !0x0), this.actcon = 0x1), this.secondtime === 0x0 && this.acting === 0x3 && this.actcon === 0x0) {
        this.crown += 0x14, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You and Ralsei bowed./%", hX('obj_herokris', !0x1), hX('obj_heroralsei', !0x1), Qx.faceaction[0x0] = 0x0, Qx.charaction[0x0] = 0x0, Qx.faceaction[0x1] = 0x0, Qx.charaction[0x1] = 0x0;
        let hC = hu(),
          hx = hW();
        this.bowkris = QP(hC ? hC.x : 0x50, hC ? hC.y : 0x64, 'spr_krisb_bow'), Ty(this.bowkris);
        let hG = Qd(this.bowkris);
        hG.hspeed = 0x5, hG.depth = this.bowkris.depth + 0x1, this.bowral = QP(hx ? hx.x : 0x50, hx ? hx.y : 0xb4, 'spr_ralseib_bow'), Ty(this.bowral), hG = Qd(this.bowral), hG.hspeed = 0x5, hG.depth = this.bowral.depth + 0x1, QS('snd_item'), Qj(), this.actcon = 0x1e;
      }
      if (this.actcon === 0x1e && !Ta() && (this.visible = !0x1, this.bowcheck = QP(this.x, this.y, 'spr_checkers_bow'), this.bowcheck.image_speed = 0.5, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* K. ROUND bowed back^1.&* Its crown loosened!/%", this.ralsei_lecture === 0x0 && this.secondtime === 0x0 && (Tq("* K. ROUND bowed back^1.&* Its crown loosened!/", Tc(0x0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", Tw(0x0), "* Nah^1, its crown'll come off.../", "\\E4* When I smash this guy to the GROUND!/", Tc(0x1), "* .../%"), this.ralsei_lecture = 0x1), Qj(), this.actcon = 0x1f), this.actcon === 0x1f && !Ta() && (this.bowral && this.bowral.instance_destroy(), this.bowkris && this.bowkris.instance_destroy(), this.bowcheck && this.bowcheck.instance_destroy(), this.visible = !0x0, hX('obj_heroralsei', !0x0), hX('obj_herokris', !0x0), this.actcon = 0x1), this.secondtime === 0x1 && this.acting === 0x3 && this.actcon === 0x0) {
        if (this.thrown === 0x1 && (this.trsus && this.trsus.instance_destroy(), this.thrown = 0x2), this.thrown > 0x0) {
          Qx.actname[hI][0x2] = 'Throw', Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Press " + Tz(0x6) + " to determine the ANGLE!", this.flash = 0x0, this.becomeflash = 0x0, Qj(), this.actcon = 0x5a, QJ(this.x, this.y, L2);
          let hN = hf();
          this.throwsus = QJ(hN ? hN.x : 0x5a, hN ? hN.y : 0x82, L6), this.visible = !0x1, Qx.faceaction[0x1] = 0x0, Qx.charaction[0x1] = 0x0, Qx.faceaction[0x2] = 0x0, Qx.charaction[0x2] = 0x0, hX('obj_herosusie', !0x1), hX('obj_heroralsei', !0x1), QS('snd_grab');
        } else Qx.typer = 0x1f, Qx.fc = 0x2, Qx.fe = 0x6, Tq("* Susie^1? You want to ACT^1? Aww, what's your idea?/", Tw(0x0), "* Umm..^1. well..^1. how do I say this./", "* I kind of..^1.&* Need you for this one./", Tc(0x8), "* That's fine^1, Susie^1!&* I'll help!/", "\\E0* You want to apologize to it for earlier^1, right?/", Tw(0x2), "* Nah^1, I just need you to stay still./%"), this.actcon = 0xa, QQ();
      }
      if (this.acting === 0x4 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You explained to K. Round about the importance of dodging Susie's attacks./", Qx.msg[0x1] = "* But it didn't seem to understand.../%", this.warned === 0x1 && (Qx.msg[0x0] = "* You started making siren noises with your mouth and looking at Susie./", Qx.msg[0x1] = "* K. Round still didn't understand.../%"), this.warned === 0x2 && (Qx.msg[0x0] = "* You started explaining that Susie is really dangerous and strong./", Qx.msg[0x1] = "* Susie got a large boost to her morale./", Qx.msg[0x2] = "* Susie's ATTACK went up massively...!/%", Qx.battleat[0x2] *= 1.5), this.warned += 0x1, Qj()), this.actcon === 0x1 && !Ta() && (this.actcon = 0x0, this.crown >= 0x64 ? (Qx.mercymod[hI] = 0x3e7, this.actcon = 0x32) : o()), this.actcon === 0xa && !Ta()) {
        this.actcon = 0xb, this.alarm[0x4] = 0x1e, hX('obj_herosusie', !0x1), hX('obj_heroralsei', !0x1), this.thrown = 0x1;
        let hp = hf();
        this.trsus = QP(hp ? hp.x : 0x5a, hp ? hp.y : 0x82, 'spr_susieb_throwralseiready'), QS('snd_grab');
      }
      this.actcon === 0xc && (Qx.fe = 0x7, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Kris^1! We gotta get that CROWN off its head!/", Qx.msg[0x1] = "* Help me throw Ralsei at it!/%", QQ(), this.actcon = 0xd), this.actcon === 0xd && !Ta() && (this.actcon = 0x0), this.actcon === 0x32 && (this.visible = !0x1, this.animtest = QJ(this.x, this.y, L0), this.animtest.sprite_index = 'spr_smallchecker_transform3', this.animtest.image_xscale = 0x2, this.animtest.image_yscale = 0x2, this.animtest.type = 0x1, this.animtest.secondtime = this.secondtime, this.actcon = 0x33);
    }
    ["draw"](hI) {
      let hu = this.myself;
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), this.siner = 0x0, hI.draw_sprite_ext('spr_checkers_idle', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_checkers_idle', Qx.mercymod[hu] >= Qx.mercymax[hu] && (this.thissprite = 'spr_checkers_idle'), hI.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0, this.sprite_index = this.thissprite, this.image_index = this.siner / 0x3;
    }
  };
j0(L7, 'obj_checkers_enemy'), j2(L7, 'kinds', QA('obj_checkers_enemy', Q3)), j2(L7, 'defaultDepth', 0x5a), j2(L7, 'defaultSprite', 'spr_checkers_idle');
var L8 = L7,
  L9 = class dI extends Q3 {
    ["create"]() {
      Object.assign(this, {
        'bikeflip': 0x0,
        'becomeflash': 0x0,
        'turnt': 0x0,
        'turns': 0x0,
        'talktimer': 0x0,
        'talkmax': 0x5,
        'state': 0x0,
        'flash': 0x0,
        'siner': 0x0,
        'fsiner': 0x0,
        'talked': 0x0,
        'attacked': 0x0,
        'hurt': 0x0,
        'hurttimer': 0x0,
        'hurtshake': 0x0,
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
        'thissprite': 'spr_smallchecker_idle'
      }), this.checkhp1 = Qx.hp[0x1], this.checkhp2 = Qx.hp[0x2], this.firstturn = 0x0;
    }
    ["userEvent"](hI) {
      if (hI === 0xc) {
        Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2;
        return;
      }
      super.userEvent(hI);
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && (this.actcon += 0x1);
    }
    ["step"]() {
      let hI = this.myself,
        hu = Qb.first('obj_basicattack');
      if (hu && (hu.sprite_index === 'spr_attack_cut1' && (Qx.flag[0xd3] = 0x3), hu.sprite_index === 'spr_attack_slap1' && (Qx.flag[0xd3] = 0x3)), Qx.monster[hI] === 0x1) {
        if (Qx.flag[0x33 + hI] = 0x4, Qx.mnfight === 0x1 && this.talked === 0x0 && (QY(this), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qw() && this.talktimer > 0x5 && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Qx.mnfight = 0x2)), Qx.mnfight === 0x2 && this.attacked === 0x0) {
          if (Qb.with('obj_heartblcon', hf => hf.instance_destroy()), this.rtimer += 0x1, this.rtimer === 0xc) {
            let hf = QW();
            if (Qx.turntimer = 0x1, hf === 0x3e7) {
              let hW = QJ(this.x, this.y, Tm);
              hW.type = 0x0, hW.target = this.mytarget, hW.damage = Qx.monsterat[hI] * 0x5;
            }
            this.turns += 0x1, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0, hf = Qy(0x0), hf === 0x0 && (Qx.battlemsg[0x0] = "* C.Round continues to act extremely violent.");
          } else Qx.turntimer = 0x1;
        }
        Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (Qb.exists('obj_hathyfightevent') && this.firstturn === 0x0 && this.checkhp1 <= Qx.hp[0x1] && this.checkhp2 <= Qx.hp[0x2] && (Qb.with('obj_battlecontroller', hX => {
          hX.noreturn = 0x1;
        }), Qb.with('obj_hathyfightevent', hX => {
          hX.con = 0xf;
        })), this.firstturn = 0x1, this.battlecancel === 0x1 && (Qx.mercymod[hI] = 0x3e7));
      }
      Qx.myfight === 0x3 && this.actStep(), Qx.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["actStep"]() {
      let hI = this.myself;
      this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* C.ROUND - AT 1 DF 0&* Despite appearances^1, it's trying its best to defeat you./%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (Tq("* You ordered Susie to flatter the enemy!/", Tw(0x0), "* ... what^1? Why the HELL would I do that?/", "\\E1* IT attacked US^1.&* Let's smash it before it moves./", Tc(0x0), "* Aww^1, look^1, Susie^1!&* It seems harmless!/", "\\E8* If you act nice^1, we might win without hurting it!/", Tw(0x0), "* .../", "\\E2* ... okay^1, okay./", "\\E1* Hey^1, little guy./", "\\E4* I really like the ax in your face./%"), this.actcon = 0x5, Qj()), this.acting === 0x3 && this.actcon === 0x0 && (this.actcon = 0x5, Tq("* You warned C.Round about Susie^1.&* It seems barely cognizant of what that means./", Tw(0x0), "* Hey^1, wait^1.&* Why the hell are you giving the ENEMY advice?/", Tc(0x6), "* Umm^1, so we don't accidentally hurt it...?/", Tw(0x0), "\\E0* .../", "\\E8* HURTING IT's the point^1, you MORON./", "\\E1* It attacked us^1.&* So it dies^1.&* Simple^1, right?/", Tc(0x8), "* B-but Susie^1, what if the enemy might be^1, um^1, nice?/", Tw(0x0), "* .../", "\\E2* Okay^1, yeah^1, there's a word for that./", Tc(0x0), "* Oh^1?&* What is it?/", Tw(0x4), "\\E4* Striking first./%"), Qx.monstercomment[hI] = "(Warned)", Qx.automiss[0x0] = 0x1, Qj()), this.actcon === 0x1 && !Ta() && (this.actcon = 0x0, o()), this.actcon === 0x5 && !Ta() && (Qx.battleat[0x1] = 0x5a, Qx.battleat[0x2] = 0x5a, this.actcon = 0x6, Qb.with('obj_herosusie', hu => {
        hu.attacktimer = 0x0, hu.state = 0x1, hu.points = 0x64 + QK(Qq(0x28)), Qx.faceaction[hu.myself] = 0x0, Qx.automiss[0x0] === 0x1 && (hu.points = 0x0);
      }), Qx.automiss[0x0] === 0x1 && (this.hspeed = 0x5, Qx.mercymod[hI] = 0xc8), this.alarm[0x4] = 0x32), this.actcon === 0x7 && (Qx.monster[hI] = 0x0, Tq("* Where'd you get it^1?&* Heh heh heh heh./", Tc(0x3), "* (Umm^1, Kris^1, maybe I should talk to her...)/%"), Qx.flag[0xd3] = 0x1, Qx.automiss[0x0] === 0x1 && (Qx.flag[0xd3] = 0x2, Tq("\\E7* Urgh^1, you IDIOTS^1!&* It got away!/", Tc(0x3), "* (Wow^1, that was close^1, Kris...)/", "* (M-maybe I should talk to her...)/%")), QQ(), this.actcon = 0x1);
    }
    ["draw"](hI) {
      let hu = this.myself;
      this.state === 0x3 && (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 0x3 && (Qx.monsterstatus[hu] = 0x1, Qx.monstercomment[hu] === '\x20' && (Qx.monstercomment[hu] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext('spr_smallchecker_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_smallchecker_idle', Qx.mercymod[hu] >= Qx.mercymax[hu] && (this.thissprite = 'spr_smallchecker_run'), hI.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
  };
j0(L9, 'obj_smallcheckers_enemy'), j2(L9, 'kinds', QA('obj_smallcheckers_enemy', Q3)), j2(L9, 'defaultDepth', 0x5a), j2(L9, 'defaultSprite', 'spr_smallchecker_idle');
var LQ = L9,
  Lj = [{
    'id': 'cround',
    'name': "C.Round",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "C.Round.#Include Susie#in an ACT.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': LQ,
      'type': 0x9,
      'x': 0x1b8,
      'y': 0x96,
      'setup': Tk
    }],
    'battlemsg': "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)",
    'encounterno': 0x7,
    'music': 'battle'
  }, {
    'id': 'kround',
    'name': "K.Round",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "K.Round.#Bow to loosen#the crown.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': L8,
      'type': 0xa,
      'x': 0x1e0,
      'y': 0x78,
      'setup': Tn
    }],
    'battlemsg': "* Here it comes!",
    'encounterno': 0xc,
    'music': 'battle'
  }, {
    'id': 'kround2',
    'name': "K.Round (Card Castle)",
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "K.Round again.#Throw Ralsei at#the crown.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x41, 0x82, 0xd2],
    'monsters': [{
      'cls': L8,
      'type': 0x15,
      'x': 0x1e0,
      'y': 0x78,
      'setup': To
    }],
    'battlemsg': "* Here it comes^1. Again.",
    'encounterno': 0x1b,
    'music': 'battle'
  }];
j3(L8, "G.mnfight = 2;G.mnfight = 2;"), j3(LQ, "G.mnfight = 2;");
var LT = {};
j1(LT, {
  'FIGHTS': () => h5,
  'SOUNDS': () => Lg,
  'SPRITES': () => LJ,
  'obj_defeatanim': () => LA,
  'obj_lancerbattle2_event': () => h0,
  'obj_lancerbike': () => Ln,
  'obj_lancerboss': () => Lm,
  'obj_lancerboss2': () => h2,
  'obj_lancerboss3': () => h4,
  'setupStats': () => LS,
  'setupStats12': () => Ll,
  'setupStats18': () => Lz
}), j4();
var LL = {};
j1(LL, {
  'FIGHTS': () => Lv,
  'SOUNDS': () => Ld,
  'SPRITES': () => Lh,
  'obj_afterimage_grow': () => LB,
  'obj_axebullet': () => Lx,
  'obj_lancerbike_neo': () => LN,
  'obj_oflash': () => LW,
  'obj_susieenemy': () => LM,
  'setupStats': () => Lu
}), j4();
var Lh = ['spr_susie_enemy', 'spr_susie_enemy_hurt', 'spr_susie_enemy_defeat', 'spr_susie_enemy_attack', 'spr_susiel_dark', 'spr_lancerbike', 'spr_lancerbike_l', 'spr_lancernoise', 'spr_axebullet_b', 'spr_spadebullet', 'spr_ralseib_sing', 'spr_battleblcon_long'],
  Ld = ['snd_sussurprise', 'snd_ralseising1', 'snd_ralseising2', 'snd_lancerwhistle', 'snd_jump', 'snd_splat', 'snd_laz_c', 'snd_lancerhonk', 'snd_drive'];
function LP(hI, ...hu) {
  return hI.replace(/~(\d)/g, (hf, hW) => String(hu[parseInt(hW) - 0x1]));
}
j0(LP, 'scr_84_get_subst_string');
function LU(hI, hu) {
  Qx.msg[hI] = LP("\\TX \\F0 \\E~1 \\FL \\TL %", String(hu));
}
j0(LU, 'scr_lanface');
function LH(hI) {
  Qx.msg[hI] = "\\TX \\F0 \\T0 %";
}
j0(LH, 'scr_noface');
function LI() {
  let hI = [],
    hu = '';
  for (let hf = 0x0; hf < 0x64; hf++) {
    let hW = Qx.msg[hf];
    if (hW === void 0x0 || hW === '\x20' || hW === '') break;
    if (/^\\TX .*%$/.exec(hW)) {
      let hX = /\\E([0-9A-F])/.exec(hW);
      hu = hX ? '\x5cE' + hX[0x1] : '';
      continue;
    }
    hI.push(hu + hW), hu = '';
  }
  Qx.msg = hI.concat(new Array(Math.max(0x0, 0x64 - hI.length)).fill('\x20'));
}
j0(LI, 'packFaces');
function Lu(hI) {
  let hu = Qx.itemdf[0x2][0x0] + Qx.itemdf[0x2][0x1] + Qx.itemdf[0x2][0x2];
  Qx.monstername[hI] = 'Susie', Qx.monstermaxhp[hI] = 0x78, Qx.monsterhp[hI] = 0x78, Qx.monsterat[hI] = 0x7, Qx.monsterdf[hI] = -0x5 + hu, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x0, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Anything', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Sing', Qx.actactor[hI][0x2] = 0x3;
}
j0(Lu, 'setupStats');
var Lf = class du extends QE {
  ["create"]() {
    this.flashspeed = 0x1, this.siner = 0x0, this.target = null, this.image_speed = 0x0, this.flashcolor = Qz.white;
  }
  ["draw"](hI) {
    Qb.exists(this.target) && (this.image_index = this.target.image_index, this.sprite_index = this.target.sprite_index), this.siner += this.flashspeed;
    let hu = Qg[this.sprite_index];
    if (hu) {
      let hf = hI.ctx;
      hf.save(), hf.globalAlpha = Math.max(0x0, Math.min(0x1, QM(this.siner / 0x3))), hf.translate(this.x, this.y), hf.scale(this.image_xscale, this.image_yscale), hf.drawImage(hI.tinted(hu, hI.frame(this.sprite_index, this.image_index), this.flashcolor, !0x0), -hu.ox, -hu.oy), hf.restore();
    }
    this.siner > 0x4 && QM(this.siner / 0x3) < 0x0 && this.instance_destroy();
  }
};
j0(Lf, 'obj_oflash'), j2(Lf, 'kinds', QA('obj_oflash', QE)), j2(Lf, 'defaultDepth', 0x0);
var LW = Lf;
function LX(hI) {
  let hu = QJ(hI.x, hI.y, LW);
  return hu.image_xscale = hI.image_xscale, hu.image_speed = 0x0, hu.image_index = hI.image_index, hu.image_yscale = hI.image_yscale, hu.sprite_index = hI.sprite_index, hu.depth = hI.depth - 0x1, hu.target = hI, hu;
}
j0(LX, 'scr_oflash');
var LY = class df extends QE {
  ["create"]() {
    this.xrate = 0.2, this.yrate = 0.2, this.fade = 0.1;
  }
  ["step"]() {
    this.image_alpha -= this.fade, this.image_xscale += this.xrate, this.image_yscale += this.yrate, this.image_alpha < 0x0 && this.instance_destroy();
  }
};
j0(LY, 'obj_afterimage_grow'), j2(LY, 'kinds', QA('obj_afterimage_grow', QE)), j2(LY, 'defaultDepth', 0x0);
var LB = LY,
  LC = class dW extends Q6 {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.counter = 0x0, this.image_angle = 0x0, this.seizure = 0x0, this.hspeed = -7.6 - Qq(1.5), this.vspeed = -0x2 + Qq(0x4), this.gravity = 0.13, this.gravity_direction = 0x0, this.active = 0x1, this.timepoints = 0x4, this.grazepoints = 0x4, this.damage = 0x1e, this.grazed = 0x0;
    }
    ["step"]() {
      this.seizure === 0x0 && (this.counter += 0x1, this.counter >= 0x3 && (this.image_angle += 0x2d, this.counter = 0x0)), this.seizure === 0x1 && (this.image_angle += 0xa), this.x >= 0x2bc && this.instance_destroy();
    }
  };
j0(LC, 'obj_axebullet'), j2(LC, 'kinds', QA('obj_axebullet', Q6)), j2(LC, 'defaultDepth', 0x2), j2(LC, 'defaultSprite', 'spr_axebullet_b');
var Lx = LC,
  LG = class dX extends Q7 {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0x4, this.timepoints = 0x0, this.target = 0x0, this.dont = 0x1, this.inv = 0x3c, this.damage = 0x14, this.spec = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.loop = 0x0, this.lcon = 0x0, this.flip = 0x0, this.ltimer = 0x0, this.btimer = 0x0, this.racecon = 0x0, this.topy = 0x64, this.bottomy = 0x12c, this.susiex = this.x - 0x64, this.susiey = this.y - 0xb4;
      let hI = Qb.first('obj_susieenemy');
      hI && (this.susiex = hI.x, this.susiey = hI.y), this.s_tracking = 0x0, this.s_attack = 0x0, this.s_timer = 0x0, this.type = 0x0;
    }
    ["userEvent"](hI) {
      hI === 0x5 && QC(this);
    }
    ["step"]() {
      let hI = Qb.first('obj_heart');
      if (this.racecon === 0x0) {
        this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.vdir = Qy(0x1, -0x1), this.racecon = 0x1, this.rtimer = 0x0, Qb.with('obj_susieenemy', hW => {
          hW.visible = !0x1;
        });
        let hf = QJ(this.susiex, this.susiey, Q8);
        this.s = hf, Q4(this, hf), hf.wall_destroy = 0x0, hf.sprite_index = 'spr_susiel_dark', hf.image_xscale = 0x2, hf.image_yscale = 0x2, hf.active = 0x1, hf.depth = this.depth - 0x1, hf.image_speed = 0x0, hf.image_index = 0x1, hf.lx = this.x, hf.ly = this.y - 0x6c, QS('snd_jump'), hf.hspeed = -0x2, hf.vspeed -= 0x7, hf.gravity = 0x1;
      }
      let hu = this.s;
      if (this.racecon === 0x1 && (this.siner = 0x0, this.rtimer += 0x1, this.rtimer === 0xd && (Ql('snd_jump'), QS('snd_splat')), this.rtimer >= 0xd && (this.image_xscale += 0.1, this.image_yscale -= 0.15), this.rtimer === 0x10 && (hu.speed = 0x0, hu.gravity = 0x0, hu.image_index = 0x0, this.sfitx = hu.x - this.x, this.sfity = hu.y - this.y, this.s_tracking = 0x1, this.ax_timer = 0x0, this.s_timer = 0x0, this.racecon = 0x2, this.rtimer = 0x0)), this.s_attack === 0x1) {
        if (this.ax_timer += 0x1, this.s_timer += 0x1, this.s_timer === 0x1) {
          let hW = QJ(hu.x - 0x28, hu.y - 0xf, Lx);
          Q4(this, hW), hW.depth = this.depth + 0x2, hW.hspeed = -0x10, (hI ? hI.y : 0xaa) >= hW.y ? (hW.gravity_direction = -0xf + Qq(0xa), hW.vspeed = 0x2) : (hW.gravity_direction = 0x5 + Qq(0xa), hW.vspeed = -0x2), hW.gravity = 0.5, hW.hspeed += 0.3 * this.ax_timer, QS('snd_laz_c'), hu.sprite_index = 'spr_susie_enemy_attack', hu.active = 0x0, hu.image_index = 0x0, hu.image_speed = 0.5;
        }
        this.s_timer === 0x4 && (hu.active = 0x0), this.s_timer === 0x8 && (hu.image_speed = 0x0), this.s_timer === 0x8 && this.ax_timer <= 0x3c && (this.s_timer = 0x0);
      }
      if (this.racecon === 0x2) {
        if (this.rtimer += 0x1, this.rtimer >= 0x1 && (this.y <= this.ory - 0x78 || this.y >= this.ory + 0x78) && (this.y <= this.ory - 0x78 && this.vspeed < 0x0 && (this.vspeed = -this.vspeed), this.y >= this.ory + 0x78 && this.vspeed > 0x0 && (this.vspeed = -this.vspeed)), this.rtimer === 0x5 || this.rtimer === 0xa) {
          this.vspeed = 0x0, QS('snd_lancerhonk');
          let hX = QJ(this.x - 0x3c, this.y - 0x28, LB);
          hX.sprite_index = 'spr_lancernoise';
        }
        this.rtimer === 0x1e && (this.active = 0x1, this.s_attack = 0x1, this.racecon = 0x3, this.rtimer = 0x0, this.ang = 0x0, QS('snd_drive'), this.hspeed = -0xa, this.vspeed = -0xb, this.gravity = 0.5);
      }
      if (this.racecon === 0x3 && (this.rtimer += 0x1, this.x <= -0x28 && (this.speed = 0x0, this.gravity = 0x0, this.friction = 0x0, this.s_attack = 0x0, this.s_tracking = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.x = 0x2e4, this.y = this.ory, hu.x = this.susiex + 0xc8, hu.hspeed = -0x8, hu.y = this.susiey, hu.sprite_index = 'spr_susie_enemy', this.hspeed = -0x6, this.racecon = 0x4)), this.racecon === 0x4) {
        let hY = 0x0;
        hu.x <= this.susiex && (hY += 0x1, hu.hspeed = 0x0, hu.x = this.susiex), this.x <= this.orx + 0x5 && (hY += 0x1, this.hspeed = 0x0, this.x = this.orx), hY >= 0x2 && (Qx.turntimer = 0x5, Qb.with('obj_susieenemy', hB => {
          hB.visible = !0x0;
        }), Qb.with('obj_lancerboss3', hB => {
          hB.visible = !0x0;
        }), this.racecon = -0x1);
      }
      this.s_tracking === 0x1 && (hu.x = this.x + this.sfitx, hu.y = this.y + this.sfity);
    }
  };
j0(LG, 'obj_lancerbike_neo'), j2(LG, 'kinds', QA('obj_lancerbike_neo', Q7)), j2(LG, 'defaultDepth', -0x14), j2(LG, 'defaultSprite', 'spr_lancerbike');
var LN = LG;
e({
  0x14: (hI, {
    heart: hu
  }) => {
    if (Qb.exists('obj_lancerboss3') && (hI.made === 0x0 && (QS('snd_lancerwhistle'), hI.whistletimer = 0x0, hI.made = 0x1, Qb.with('obj_lancerboss3', hf => {
      hf.idlesprite = 'spr_lancerbike_l';
    })), hI.made === 0x1 && (hI.whistletimer += 0x1, hI.whistletimer >= 0x1e && (Qb.with('obj_lancerboss3', hf => {
      hf.idlesprite = 'spr_lancerbike';
    }), hI.made = 0x2))), hI.btimer >= 0x8) {
      let hf = -0x50 + Qq(0xa0) + 0x8,
        hW = QJ((hu ? hu.x : 0x140) + hf, -0x14, Q7);
      hW.destroyed || (hW.damage = hI.damage, hW.target = hI.target, hW.sprite_index = 'spr_spadebullet', hW.image_angle = 0x10e, hW.gravity = 0.3, hW.speed = 0x0, hW.vspeed = 0x3, hW.hspeed = -0.6 + Qq(1.2)), hI.side === 0x1 ? hI.side = -0x1 : hI.side = 0x1, hI.btimer = 0x0;
    }
  },
  0x55: (hI, {
    bsy: hu
  }) => {
    if (hI.made === 0x0) {
      hI.cheer = 0x0, hI.cheertimer = 0x0, hI.remhp = [Qx.hp[Qx.char[0x0]], Qx.hp[Qx.char[0x1]]], Qb.with('obj_susieenemy', hX => {
        hX.visible = !0x1;
      }), Qb.with('obj_lancerboss3', hX => {
        hX.visible = !0x1;
      });
      let hf = QJ(0x244, hu + 0xa0, Q5);
      hI.fakelan = hf, hf.depth += 0x1, hf.image_xscale = 0x2, hf.image_yscale = 0x2, hf.visible = !0x0, hf.sprite_index = 'spr_lancerbike', hf.active = 0x0, hf.image_speed = 0.2;
      let hW = QJ(0x212, hu - 0x28, Q5);
      hI.fakesus = hW, hW.image_xscale = 0x2, hW.image_yscale = 0x2, hW.visible = !0x0, hW.sprite_index = 'spr_susie_enemy_attack', hW.active = 0x0, hW.image_speed = 0x0, hI.made = 0x1;
    }
    if (hI.made === 0x1 && (Qb.exists(hI.fakelan) && (hI.cheer === 0x0 && Qx.inv > 0xa && (hI.cheer = 0x1, QS('snd_lancerwhistle'), hI.fakelan.sprite_index = 'spr_lancerbike_l'), hI.cheer === 0x1 && (hI.cheertimer += 0x1, hI.cheertimer >= 0x1e && (hI.cheertimer = 0x0, hI.fakelan.sprite_index = 'spr_lancerbike', hI.cheer = 0x0))), Qb.exists(hI.fakesus) && hI.fakesus.image_index < 0x5 && (hI.fakesus.image_index += 0.334)), hI.made === 0x1 && Qx.turntimer <= 0xa && (Qb.exists(hI.fakesus) && (hI.fakesus.visible = !0x1), Qb.exists(hI.fakelan) && (hI.fakelan.visible = !0x1), Qb.with('obj_susieenemy', hX => {
      hX.visible = !0x0;
    }), Qb.with('obj_lancerboss3', hX => {
      hX.visible = !0x0;
    })), hI.btimer >= 0x1b && Qb.exists('obj_battlesolid') && Qx.turntimer > 0xa) {
      Qb.exists(hI.fakesus) && (hI.fakesus.image_index = 0x0, QS('snd_laz_c'));
      for (let hX = 0x0; hX < 0x1; hX += 0x1) {
        let hY = QJ(0x21c, hu, Lx);
        Q4(hI, hY);
      }
      hI.btimer = 0x0;
    }
  }
});
var Lp = class dY extends Q3 {
  ["create"]() {
    Qx.turntimer = 0x0, Object.assign(this, {
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
      'idlesprite': 'spr_susie_enemy',
      'hurtsprite': 'spr_susie_enemy_hurt',
      'sparedsprite': 'spr_susie_enemy',
      'attacktype': 0x0,
      'sleeping': 0x0,
      'sleepcounter': 0x63,
      'lullabied': 0x0,
      'lancer_act': 0x0,
      'susie_act': 0x0,
      'lancer_hurt': 0x0,
      'pacifycon': 0x0,
      'defeated': 0x0,
      'lancerhurt': 0x0,
      'anythingcounter': 0x0,
      'anythingxcounter': 0x0,
      'tirespare': 0x0,
      'ears_blocked': 0x0,
      'susie_anythingcounter': 0x0,
      'rtimer': 0x0,
      'shakex': 0x0,
      'pacifytimer': 0x0,
      'lullatimer': 0x0
    });
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && (this.con += 0x1);
  }
  ["userEvent"](hI) {
    if (hI === 0x1) {
      this.talk();
      return;
    }
    if (hI !== 0xb) {
      if (hI === 0xc) {
        Qx.monsterx[this.myself] = this.x + 0x14, Qx.monstery[this.myself] = this.y + (this.sprite_height || 0x5a) / 0x2;
        return;
      }
      super.userEvent(hI);
    }
  }
  ["talk"]() {
    let hI = this.myself;
    if (Qx.mnfight === 0x1 && this.talked === 0x0) {
      let hu = 0x0;
      this.sleepcounter += 0x1, this.sleepcounter >= 0x3 && this.sleeping === 0x1 && (this.sleeping = 0x0, this.idlesprite = 'spr_susie_enemy', Qx.monstercomment[hI] = "(Awake)", Qx.monsterstatus[hI] = 0x0, this.sleepcounter = 0x63, hu = 0x1), this.sleeping === 0x0 && QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x35, Qx.msg = new Array(0x64).fill('\x20');
      let hf = Qy(0x0, 0x1, 0x2, 0x3);
      hf === 0x0 && (Qx.msg[0x0] = "Heh,&scared?"), hf === 0x1 && (Qx.msg[0x0] = "Weasel&out of&THIS!"), hf === 0x2 && (Qx.msg[0x0] = "Talk your&way out of&THIS!"), hf === 0x3 && (Qx.msg[0x0] = "Think&fast!"), this.lancer_hurt === 0x0 && Qx.monsterhp[0x1] <= Qx.monstermaxhp[0x1] * 0.5 && (this.lancer_hurt = 0x1, Qx.monsterhp[hI] === Qx.monstermaxhp[hI] ? Qx.msg[0x0] = "Hey^1, stop&ganging up&on him!" : Qx.msg[0x0] = "Hey^1, stop&hitting&him!"), this.acting === 0x2 && (this.anythingcounter === 0x1 && (Qx.msg[0x0] = "No way!&Shut up and&fight!!!"), this.anythingcounter === 0x2 && (Qx.msg[0x0] = "Really?&...&Shut up and&fight!!!"), this.anythingcounter === 0x3 && (Qx.msg[0x0] = "What are&you even&doing?"), this.anythingcounter === 0x4 && (Qx.msg[0x0] = " Really...?&No way, I&don't see&anything!"), this.anythingcounter >= 0x5 && (Qx.msg[0x0] = "Yeah, it's&hopeless.")), this.lancer_act === 0x3 && (this.anythingxcounter === 0x1 && (Qx.msg[0x0] = "Flattery&won't&work on&US!!!"), this.anythingxcounter === 0x2 && (Qx.msg[0x0] = "THAT'S&THE&POINT!!!"), this.anythingxcounter === 0x3 && (Qx.msg[0x0] = "Huh...?&I mean...&NO!!!"), this.anythingxcounter >= 0x4 && (Qx.msg[0x0] = "Heh,&score for&the BAD&GUYS!")), this.sleeping === 0x1 && (Qx.msg[0x0] = "(Zzzz...)"), hu === 0x1 && (Qx.msg[0x0] = "(Yawn)&I'm awake,&did I miss&anything?"), hu = 0x0, this.lancer_act = 0x0, QT(this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0;
    }
  }
  ["step"]() {
    let hI = this.myself;
    if (Qx.monster[hI] === 0x1 && this.defeated === 0x0) {
      if (Qx.flag[0x33 + hI] = 0x4, this.userEvent(0x1), this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qw() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (Qb.with('obj_writer', hu => hu.instance_destroy()), Qx.mnfight = 0x2), Qx.mnfight === 0x2 && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU))), Qx.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          if (Qx.turntimer = 0xb4, this.attacktype === 0x2) {
            let hf = QJ(this.x + this.sprite_width / 0x2, this.y + this.sprite_height / 0x2, k);
            hf.type = 0x55, hf.target = this.mytarget, hf.damage = Qx.monsterat[hI] * 0x5, hf.timepoints = 0x3, hf.grazepoints = 0x5, this.sleeping === 0x1 && hf.instance_destroy();
          }
          if (this.attacktype === 0x1) {
            let hW = QJ(this.x, this.y, k);
            hW.type = 0x14, hW.target = this.mytarget, hW.damage = Qx.monsterat[hI] * 0x5, hW.timepoints = 0x3, hW.grazepoints = 0x3, this.sleeping === 0x1 && hW.instance_destroy();
          }
          if (this.attacktype === 0x0 && this.sleeping === 0x0) {
            let hX = Qb.first('obj_lancerboss3'),
              hY = QJ(hX ? hX.x : this.x + 0x14, hX ? hX.y : this.y + 0xa0, LN);
            Qb.with('obj_lancerboss3', hB => {
              hB.visible = !0x1;
            }), hY.target = this.mytarget, hY.damage = Qx.monsterat[hI] * 0x5, Qx.turntimer = 0x3e7;
          }
          this.attacktype += 0x1, this.attacktype >= 0x3 && (this.attacktype = 0x0), this.turns += 0x1, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0;
          let hu = Qy(0x0, 0x1, 0x2, 0x3, 0x4);
          Qx.battlemsg[0x0] = "* Susie and Lancer are making fun of you.", hu === 0x1 && (Qx.battlemsg[0x0] = "* Susie and Lancer are gloating about how great their team is."), hu === 0x2 && (Qx.battlemsg[0x0] = "* Susie and Lancer are having an evil laugh contest."), hu === 0x3 && (Qx.battlemsg[0x0] = "* Susie and Lancer are coming up with victory celebration plans."), hu === 0x4 && (Qx.battlemsg[0x0] = "* Smells like teamwork.");
        } else Qx.turntimer = 0x78;
      }
      Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (this.battlecancel === 0x1 && (Qx.mercymod[hI] = 0x3e7), this.battlecancel === 0x2 && (Qb.with('obj_battlecontroller', hB => {
        hB.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3));
    }
    if (this.con === 0x1 && (this.con = 0x2, this.alarm[0x4] = 0xa), this.con === 0x3 && (Qx.typer = 0x32, Qx.mercymod[hI] = 0x3e7, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "Alright^1,&you convinced&me!!/%", QT(this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Qb.exists('obj_writer') && (this.hspeed = 0xf, this.con = 0x5, this.alarm[0x4] = 0xf, Qb.with('obj_battlecontroller', hB => {
      hB.alarm[0x2] = 0x11;
    })), this.con === 0x6 && (Qb.with('obj_battlecontroller', hB => {
      hB.noreturn = 0x0;
    }), this.scr_monsterdefeat(), this.instance_destroy(), this.con = 0x7), Qx.myfight === 0x3 && this.actStep(), this.pacifycon > 0x0 && (Qx.spelldelay = 0x3e7, Qb.with('obj_spellphase', hB => {
      hB.spelltimer > 0x1e && (hB.spelltimer = 0x1e);
    })), this.pacifycon === 0x1) {
      let hB = Qb.first('obj_spellphase');
      hB && hB.spelltimer >= 0xf && (this.pacifytimer = 0x0, this.pacifycon = 0x2, Qb.with('obj_lancerboss3', hC => {
        hC.visible = !0x1;
      }), this.temp_l = QP(this.x - 0x28, this.y + this.sprite_height, 'spr_lancerbike'), this.temp_l.depth = this.depth - 0x2);
    }
    if (this.pacifycon === 0x2) {
      if (QS('snd_lancerwhistle'), Qb.exists(this.temp_l)) {
        let hC = LX(this.temp_l);
        hC.flashcolor = Qz.blue;
      }
      this.pacifycon = 0x3;
    }
    this.pacifycon === 0x3 && (this.pacifytimer += 0x1, this.pacifytimer >= 0x1e && !Qb.exists('obj_writer') && (Qb.exists(this.temp_l) && this.temp_l.instance_destroy(), Qb.with('obj_lancerboss3', hx => {
      hx.visible = !0x0;
    }), this.pacifycon = 0x4, Qb.with('obj_monsterparent', hx => {
      hx.susie_act = 0x9;
    }), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", LU(0x1, 0x3), Qx.msg[0x2] = "* I'll never let you SPARE my friends!!!/", LH(0x3), Qx.msg[0x4] = "* (Lancer's BIKE began to get tired??????????????)/%", this.tirespare === 0x1 && (Qx.msg[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", Qx.msg[0x1] = "* (The WHEEL of the BIKE became SPARED!)/", Qx.msg[0x2] = "* (It turned into a SPARED TIRE!)/", Qx.msg[0x3] = "* (... that didn't do anything though.)/", Qx.msg[0x4] = "* (Seems that PACIFYing won't work!)/%"), this.tirespare >= 0x2 && (Qx.msg[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", Qx.msg[0x1] = "* (Seems that nothing else interesting will happen!)/%"), LI(), Qj(), this.pacifycon = 0x5, this.tirespare += 0x1)), this.pacifycon === 0x5 && !Qb.exists('obj_writer') && (Qx.spelldelay = 0x14, Qb.with('obj_spellphase', hx => {
      hx.spelltimer = 0x12;
    }), this.pacifycon = 0x0);
  }
  ["actStep"]() {
    let hI = this.myself;
    if (this.acting === 0x1 && this.actcon === 0x0) {
      this.actcon = 0x1;
      let hu = Qx.itemdf[0x2][0x0] + Qx.itemdf[0x2][0x1] + Qx.itemdf[0x2][0x2],
        hf = Qx.itemat[0x2][0x0] + Qx.itemat[0x2][0x1] + Qx.itemat[0x2][0x2],
        hW = String(Qx.df[0x2] + hu),
        hX = String(Qx.at[0x2] + hf),
        hY = String(Qx.maxhp[0x2]);
      Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = LP("* SUSIE - AT:~1 DF:~2 HP:~3&* If you read the status screen^1, you already knew that./%", hX, hW, hY), hu > 0x0 && (Qx.msg[0x0] = LP("* SUSIE - AT:~1 DF:~2 HP:~3&* The armor you equipped her with just made her tougher!/%", hX, hW, hY)), Qj();
    }
    if (this.acting === 0x2 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You tried convincing Susie not to fight./", this.anythingcounter === 0x1 && (Qx.msg[0x0] = "* You tried telling Susie you like her hair./"), this.anythingcounter === 0x2 && (Qx.msg[0x0] = "* You growled at Susie like a bear./"), this.anythingcounter === 0x3 && (Qx.msg[0x0] = "* You told Susie you'd give her a picnic basket of worms./"), this.anythingcounter >= 0x4 && (Qx.msg[0x0] = "* You have no idea what to do what to Susie anymore./"), Qx.msg[0x1] = "* There was no effect!/%", this.anythingcounter >= 0x1 && (Qx.msg[0x1] = "* It seems this command is a total waste of time!/%"), Qj(), this.anythingcounter += 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
      Qb.with('obj_monsterparent', hC => {
        hC.susie_act = 0x3;
      }), this.lullabied === 0x0 ? (this.singy = 'snd_ralseising1', QS('snd_ralseising1'), Qb.with('obj_susieenemy', hC => {
        hC.lullabied = 0x1;
      })) : (this.singy = 'snd_ralseising2', QS('snd_ralseising2'), Qb.with('obj_susieenemy', hC => {
        hC.lullabied = 0x0;
      })), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let hB = Qb.first('obj_heroralsei');
      hB && (hB.visible = !0x1), this.ralsing = QP(hB ? hB.x : 0x50, hB ? hB.y : 0xb4, 'spr_ralseib_sing'), this.ralsing.image_speed = 0.2, this.lullatimer = 0x0, Qj(), this.actcon = 0xa;
    }
    this.actcon === 0xa && (this.lullatimer += 0x1, this.lullatimer >= 0x1e && (this.actcon = 0xb)), this.actcon === 0xb && !Qb.exists('obj_writer') && (Qb.exists(this.ralsing) && this.ralsing.instance_destroy(), Qb.with('obj_heroralsei', hC => {
      hC.visible = !0x0;
    }), Ql(this.singy), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* SUSIE fell asleep!/%", this.sleeping === 0x1 && (Qx.msg[0x0] = "* But SUSIE was already asleep...!/%"), this.idlesprite = 'spr_susie_enemy_defeat', this.sleepcounter = 0x0, this.sleeping = 0x1, Qx.monstercomment[hI] = "(Asleep)", Qx.monsterstatus[hI] = 0x1, Qj(), this.actcon = 0x1), this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o());
  }
  ["draw"](hI) {
    let hu = this.myself;
    if (this.state === 0x3 && (this.sleepcounter = 0x63, this.sleeping = 0x0, Qx.monstercomment[hu] = "(Awake)", Qx.monsterstatus[hu] = 0x0, this.idlesprite = 'spr_susie_enemy', this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (QS('snd_sussurprise'), this.visible = !0x1, this.instance_destroy()), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0) {
      this.siner += 0x1;
      let hf = this.idlesprite;
      Qx.mercymod[hu] >= Qx.mercymax[hu] && (hf = this.idlesprite), hI.draw_sprite_ext(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(hf, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(Lp, 'obj_susieenemy'), j2(Lp, 'kinds', QA('obj_susieenemy', Q3)), j2(Lp, 'defaultDepth', 0x5f), j2(Lp, 'defaultSprite', 'spr_susie_enemy');
var LM = Lp,
  Lv = [{
    'id': 'susie',
    'name': 'Susie',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Two bad guys#blocked the way!#(Susie only)",
    'party': [0x1, 0x3, 0x0],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x64, 0xb4, 0xd2],
    'monsters': [{
      'cls': LM,
      'type': 0x13,
      'x': 0x208,
      'y': 0x50,
      'setup': Lu
    }],
    'battlemsg': "* Two bad guys blocked the way!",
    'encounterno': 0x1f,
    'music': 'lancerfight'
  }];
j3(LM, "G.mnfight = 2;");
var LJ = ['spr_lancerbike', 'spr_lancerbike_l', 'spr_lancerbike_hurt', 'spr_lancerbike_earcover', 'spr_lancernoise', 'spr_lancer_battle', 'spr_lancer_battle_hurt', 'spr_spadebullet', 'spr_susieb_idle_serious', 'spr_susieb_attack_serious', 'spr_defeatsweat', 'spr_susieb_idle', 'spr_susieb_attack', 'spr_pixel_white'],
  Lg = ['snd_cardrive', 'snd_spearrise', 'snd_lancerhonk', 'snd_drive', 'snd_laz_c', 'snd_bell', 'snd_power', 'snd_lancerwhistle', 'snd_defeatrun', 'snd_txtlan', 'snd_txtsus'],
  LZ = {
    0x20: ['fnt_mainbig', Qz.white, 0x1, 'snd_txtlan', 0x10, 0x24],
    0x2e: ['fnt_mainbig', Qz.white, 0x1, 'snd_txtlan', 0x10, 0x1c],
    0x35: ['fnt_dotumche', Qz.black, 0x1, 'snd_txtsus', 0x9, 0x14],
    0x36: ['fnt_dotumche', Qz.black, 0x2, 'snd_txtsus', 0x9, 0x14]
  };
function LR(hI) {
  let hu = LZ[Qx.typer];
  return !hI || !hu || ([hI.myfont, hI.mycolor, hI.rate, hI.textsound, hI.hspace, hI.vspace] = hu, hI.xcolor = hI.mycolor), hI;
}
j0(LR, 'scr_texttype_fix');
function LS(hI) {
  Qx.monstername[hI] = 'Lancer', Qx.monstermaxhp[hI] = 0x21c, Qx.monsterhp[hI] = 0x21c, Qx.monsterat[hI] = 0x5, Qx.monsterdf[hI] = 0x1, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x14, Qx.sparepoint[hI] = 0xa, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Warning', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Compliment', Qx.battlemsg[0x0] = "* Lancer busts in!";
}
j0(LS, 'setupStats');
function Ll(hI) {
  Qx.monstername[hI] = 'Lancer', Qx.monstermaxhp[hI] = 0x960, Qx.monsterhp[hI] = 0x960, Qx.monsterat[hI] = 0x4, Qx.monsterdf[hI] = -0x28, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x0, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check';
}
j0(Ll, 'setupStats12');
function Lz(hI) {
  Qx.monstername[hI] = 'Lancer', Qx.monstermaxhp[hI] = 0x320, Qx.monsterhp[hI] = 0x320, Qx.monsterat[hI] = 0x6, Qx.monsterdf[hI] = 0x1, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x0, Qx.sparepoint[hI] = 0x0, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Anything', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = "X-Anything", Qx.actactor[hI][0x2] = 0x3;
}
j0(Lz, 'setupStats18');
var LF = j0((hI, hu) => {
    Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FS \\TS %";
  }, 'scr_susface'),
  Lc = j0((hI, hu) => {
    Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FL \\TL %";
  }, 'scr_lanface'),
  Lw = j0((hI, hu) => {
    Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FR \\TR %";
  }, 'scr_ralface'),
  Lq = j0(hI => {
    Qx.msg[hI] = "\\TX \\F0 \\T0 %";
  }, 'scr_noface');
function La() {
  let hI = [],
    hu = '';
  for (let hf = 0x0; hf < 0x64; hf++) {
    let hW = Qx.msg[hf];
    if (hW === void 0x0 || hW === '\x20' || hW === '') break;
    if (/^\\TX .*%$/.exec(hW)) {
      let hX = /\\E([0-9A-F])/.exec(hW);
      hu = hX ? '\x5cE' + hX[0x1] : '';
      continue;
    }
    hI.push(hu + hW), hu = '';
  }
  Qx.msg = new Array(0x64).fill('\x20'), hI.forEach((hY, hB) => {
    Qx.msg[hB] = hY;
  });
}
j0(La, 'packFaces');
var LD = ["* Lancer's riding it out.", "* Lancer is thinking about chips.", "* Lancer's motorcycle is actually just a bike that's on fire.", "* Lancer switches gears randomly to appear competent.", "* Lancer revs viciously."],
  LE = class dB extends QE {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, QS('snd_defeatrun');
    }
    ["draw"](hI) {
      this.t === 0x0 && this.draw_self(hI);
      let hu = 0x0;
      if (this.g <= 0x5 && (hu = 0x1), this.g >= 0x9 && this.g <= 0xd && (hu = 0x1), hu === 0x1 && hI.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (let hf = 0x0; hf <= 0x50; hf++) hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * hf, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, Math.max(0x0, 0.4 - this.t / 0x8 + hf / 0xc8));
        this.t >= 0xf && this.instance_destroy();
      }
    }
    ["step"]() {
      this.g++, this.g >= 0xf && this.t++;
    }
  };
j0(LE, 'obj_defeatanim'), j2(LE, 'kinds', QA('obj_defeatanim', QE)), j2(LE, 'defaultDepth', 0x0);
var LA = LE;
function Ly(hI) {
  let hu = QJ(hI.x, hI.y, LA);
  hu.sprite_index = hI.hurtsprite, hu.image_index = 0x0, hu.image_xscale = hI.image_xscale, hu.image_yscale = hI.image_yscale, hI.instance_destroy();
}
j0(Ly, 'scr_defeatrun');
var Lk = class dC extends Q7 {
  ["create"]() {
    this.grazed = 0x0, this.grazepoints = 0xa, this.timepoints = 0x0, this.target = 0x0, this.dont = 0x1, this.inv = 0x3c, this.damage = 0x14, this.spec = 0x0, Qx.hp[0x1] <= Qx.maxhp[0x1] / 0x2 && (this.damage = 0xa), Qx.hp[0x1] <= Qx.maxhp[0x1] / 0x4 && (this.damage = 0x5), this.image_xscale = 0x2, this.image_yscale = 0x2, this.loop = 0x0, this.lcon = 0x0, this.flip = 0x0, this.ltimer = 0x0, this.btimer = 0x0, this.endcon = 0x0, this.racecon = 0x0, this.topy = 0x78, this.bottomy = 0xfa;
  }
  ["userEvent"](hI) {
    hI === 0x5 && (this.target === 0x0 && Qx.hp[0x1] <= Qx.maxhp[0x1] / 0x2 && (this.damage = Qm(Qx.hp[0x1] / 0x3)), QC(this));
  }
  ["step"]() {
    let hI = Qb.first('obj_heart');
    if (this.lcon === 0x1 && (this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.ltimer = 0x0, this.shrinktimer = 0x0, this.lcon = 1.5), this.lcon === 1.5 && (this.ltimer++, this.ltimer >= 0xa && (this.ltimer = 0x0, this.lcon = 0x2, QS('snd_cardrive'))), this.lcon >= 0x6 && this.lcon < 0xa && (this.btimer++, this.btimer >= 0xa)) {
      let hu = Qk(0x28, this.image_angle - 0x14),
        hf = Qn(0x28, this.image_angle - 0x14);
      QS('snd_spearrise');
      let hW = QJ(this.x - hu, this.y - hf, Q7);
      hW.destroyed || (hW.target = this.target, hW.damage = this.damage, hW.target === 0x0 && Qx.hp[0x1] <= Qx.maxhp[0x1] / 0x2 && (hW.damage = Qm(Qx.hp[0x1] / 0x3)), hW.timepoints = 0x0, hW.sprite_index = 'spr_spadebullet', hW.move_towards_point(hI ? hI.x + 0x8 : 0x140, hI ? hI.y + 0x8 : 0xaa, 0x4), hW.image_angle = hW.direction, hW.friction = -0.4, hW.depth = this.depth + 0x1), this.btimer = 0x0;
    }
    if (this.lcon === 0x2 && (this.ltimer++, this.shrinktimer++, this.hspeed = QM(this.ltimer / 0x3) * 0x5, this.image_yscale = 0x2 - QM(this.ltimer / 0x5) * 0x1, this.shrinktimer > 0x4 && (this.image_yscale = 0x2 - QM(this.ltimer / 0x5) * 0x1 * (0x8 / this.shrinktimer)), this.ltimer > 0x7 && (this.image_angle -= Qp(QM(this.ltimer / 0x5)) * 0x4, this.ang = -this.image_angle), this.ltimer > 0x4 && Qp(QM(this.ltimer / 0x5)) <= 0.06 && (this.lcon = 0x5, this.image_yscale = 0x2, this.direction = 0xb4, this.speed = 0x4)), this.lcon === 0x5 && (this.speed < 0x10 && (this.speed += 0x2), this.ang < 0x2d && (this.ang += 0x4), this.image_angle = -this.ang, this.x < 0x50 && (this.lcon = 0x6)), this.lcon === 0x6 && (this.ang < 0x87 && (this.ang += 0xa), this.image_angle = -this.ang, this.x <= 0x5 && (this.lcon = 0x7, this.direction = 0x5a)), this.lcon === 0x7 && (this.y < 0x50 ? (this.ang < 0xe1 && (this.ang += 0xa), this.y <= 0x5 && (this.direction = 0x0, this.lcon = 0x8)) : this.ang < 0x87 && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0x8 && (this.x >= 0x21c ? (this.ang < 0x13b && (this.ang += 0xa), this.x >= 0x276 && (this.direction = 0x10e, this.lcon = 0x9)) : this.ang < 0xe1 && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0x9 && (this.y > this.ory - 0x46 ? (this.ang < 0x168 && (this.ang += 0xa), this.y >= this.ory - 0x5 && (this.y = this.ory, this.direction = 0xb4, this.lcon = 0xa)) : this.ang < 0x13b && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0xa && (this.ang = 0x0, this.image_angle = 0x0, this.x <= this.orx && (this.speed = 0x0, this.x = this.orx, this.lcon = 0xb, this.ltimer = 0x0)), this.lcon === 0xb && (this.sprite_index = 'spr_lancerbike_l', this.ltimer++, this.ltimer >= 0x19 && (Qb.with('obj_regularbullet', hX => {
      hX.active = 0x0, hX.image_alpha -= 0.2;
    }), this.image_alpha = 0x1), this.ltimer >= 0x1e && (this.lcon = 0x0, this.endcon = 0x1)), this.racecon === 0x1 && (this.sy = 0x0, this.s_moveup = 0x0, Qb.with('obj_susieandlancer_event', hX => {
      hX.s && (this.s = hX.s, this.sy = hX.s.y, this.s_moveup = 0x1);
    }), this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.racecon = 0x2, this.vspeed = -0xe * Qy(0x1, -0x1), this.rtimer = 0x0, this.maxr = 0xf + Qq(0x19)), this.racecon === 0x2 && (this.s_moveup === 0x1 && this.s.y > -0x14 && (this.s.y -= 0xa), this.y < this.topy + 0xa && (this.vspeed = 0xc), this.y > this.bottomy - 0xa && (this.vspeed = -0xc), this.rtimer++, this.rtimer > this.maxr && (this.vspeed = 0x0, this.racecon = 0x3, this.rtimer = 0x0)), this.racecon === 0x3) {
      if (this.rtimer++, this.rtimer === 0x5 || this.rtimer === 0xa) {
        QS('snd_lancerhonk');
        let hX = QJ(this.x - 0x3c, this.y - 0x28, LB);
        hX.sprite_index = 'spr_lancernoise';
      }
      this.rtimer >= 0x19 && (QS('snd_drive'), this.racecon = 0x4, this.hspeed = -0x14, this.rtimer = 0x0, this.ang = 0x0);
    }
    this.racecon === 0x4 && (this.s_moveup === 0x1 && (this.s.y += 0xa, this.s.y >= this.sy && (this.s.y = this.sy, this.s_moveup = 0x0)), this.rtimer++, this.ang += this.rtimer * 0x2 + 0x4, this.ang > 0x32 && (this.ang = 0x32), this.image_angle = -this.ang, this.x <= -0x28 && (this.ang = 0x0, this.image_angle = 0x0, this.x = 0x2e4, this.y = this.ory, this.hspeed = -0xc, this.racecon = 0x5)), this.racecon === 0x5 && this.x <= this.orx + 0x5 && (this.hspeed = 0x0, this.x = this.orx, this.racecon = 0x0, this.endcon = 0x1), this.endcon === 0x1 && (Qx.turntimer = 0x2, Qb.with('obj_lancerboss', hY => {
      hY.visible = !0x0, hY.turns >= 0x4 && (hY.con = 0x1, Qb.with('obj_battlecontroller', hB => {
        hB.noreturn = 0x1;
      }));
    }), Qb.with('obj_lancerboss3', hY => {
      hY.visible = !0x0;
    }), this.instance_destroy()), Qb.with('obj_lancerboss', hY => {
      hY.compliment >= 0x3 && Qb.with('obj_dmgwriter', hB => {
        hB.spec = 0x1;
      });
    });
  }
};
j0(Lk, 'obj_lancerbike'), j2(Lk, 'kinds', QA('obj_lancerbike', Q7)), j2(Lk, 'defaultDepth', -0x14), j2(Lk, 'defaultSprite', 'spr_lancerbike');
var Ln = Lk;
function Lo(hI, hu, hf) {
  let hW = -0x50 + Qq(0xa0) + 0x8,
    hX = QJ((hu ? hu.x : 0x140) + hW, hf, Q7);
  hX.destroyed || (hX.damage = hI.damage, hX.target = hI.target, hX.sprite_index = 'spr_spadebullet', hX.image_angle = 0x10e, hX.gravity = 0.3, hX.speed = 0x0, hX.vspeed = 0x3, hX.hspeed = -0.6 + Qq(1.2));
}
j0(Lo, 'fallspade');
function LV(hI, {
  heart: hu
}) {
  Qb.exists('obj_lancerboss3') && (hI.made === 0x0 && (QS('snd_lancerwhistle'), hI.whistletimer = 0x0, hI.made = 0x1, Qb.with('obj_lancerboss3', hW => {
    hW.idlesprite = 'spr_lancerbike_l';
  })), hI.made === 0x1 && (hI.whistletimer++, hI.whistletimer >= 0x1e && (Qb.with('obj_lancerboss3', hW => {
    hW.idlesprite = 'spr_lancerbike';
  }), hI.made = 0x2)));
  let hf = 0x8;
  hI.type === 0x16 && (hf = 0x6), hI.btimer >= hf && (Lo(hI, hu, -0x14), hI.side = hI.side === 0x1 ? -0x1 : 0x1, hI.btimer = 0x0);
}
j0(LV, 'type20_22');
function Lr(hI) {
  let hu = 0x9;
  if (hI.type === 0x17 && (hu = 0x7), hI.type === 0x19 && (hu = 0x4), Qb.with('obj_regularbullet', hf => {
    hf.image_alpha += 0.2;
  }), hI.btimer >= hu) {
    let hf = hI.side === 0x0 ? 0x50 : 0x230,
      hW = Qb.first('obj_growtangle'),
      hX = hW ? hW.y : 0xaa,
      hY = hW ? hW.sprite_height : 0x82,
      hB = QJ(hf, hX - hY / 0x2 + Qq(hY), Q7);
    hB.destroyed || (hB.direction = hI.side === 0x0 ? 0x0 : 0xb4, hB.image_alpha = 0x0, hB.damage = hI.damage, hB.target = hI.target, hB.sprite_index = 'spr_spadebullet', hB.speed = 0x5, hB.friction = -0.1, hB.image_angle = hB.direction), hI.side = hI.side === 0x1 ? 0x0 : 0x1, hI.btimer = 0x0;
  }
}
j0(Lr, 'type21_23_25');
function LK(hI, {
  heart: hu
}) {
  let hf = hI.difficulty + 0x5;
  Qb.with('obj_regularbullet', hW => {
    if (!hu) return;
    let hX = hW.x - (hu.x + 0x8);
    hW.y >= hu.y - 0xf0 && Qp(hX) <= 0x1e && (hX >= 0x0 && hW.hspeed < 0x5 && (hW.hspeed += 0.4), hX < 0x0 && hW.hspeed > -0x5 && (hW.hspeed -= 0.4)), hW.y >= hu.y - 0x64 && Qp(hX) <= 0x3c && (hX >= 0x0 ? (hW.hspeed < 0x2 && (hW.hspeed += 0.25), hX < 0xa && (hW.x += 0x3), hX < 0x14 && (hW.x += 0x3), hX < 0x1e && (hW.x += 0x3), hX < 0x28 && (hW.x += 0x2), hX < 0x3c && (hW.x += 0x1)) : (hW.hspeed > -0x2 && (hW.hspeed -= 0.25), hX > -0xa && (hW.x -= 0x3), hX > -0x14 && (hW.x -= 0x3), hX > -0x1e && (hW.x -= 0x3), hX > -0x28 && (hW.x -= 0x2), hX > -0x3c && (hW.x -= 0x1)));
  }), hI.btimer >= hf && (Lo(hI, hu, -0x14), hI.side = hI.side === 0x1 ? -0x1 : 0x1, hI.btimer = 0x0);
}
j0(LK, 'type24'), e({
  0x14: LV,
  0x16: LV,
  0x15: Lr,
  0x17: Lr,
  0x19: Lr,
  0x18: LK
});
var Lb = class dx extends Q3 {
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
      'acting': 0x0,
      'actcon': 0x0,
      'acttimer': 0x0,
      'mercymod': 0x0,
      'maxmercy': 0x270f,
      'warned': 0x0,
      'compliment': 0x0,
      'compliment_just': 0x0,
      'attacks': 0x0,
      'dodgetimer': 0x0,
      'candodge': 0x1,
      'con': 0x0,
      'shakex': 0x0
    }), this.image_xscale = 0x2, this.image_yscale = 0x2, Qx.automiss || (Qx.automiss = [0x0, 0x0, 0x0]);
  }
  ["userEvent"](hI) {
    hI === 0xc && (Qx.monsterx[this.myself] = this.x, Qx.monstery[this.myself] = this.y - this.sprite_height / 0x2 - 0x1e);
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && this.con++;
  }
  ["step"]() {
    let hI = this.myself;
    if (Qx.monster[hI] === 0x1 && (Qx.mnfight === 0x1 && this.talked === 0x0 && (QY(this), Qx.flag[0x33 + hI] = 0x4, Qx.targeted[this.mytarget] = 0x1, Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20'), this.turns === 0x0 && (Qx.msg[0x0] = "Halt, clowns!&This bike is&fueled by&victory!!!"), this.turns === 0x1 && (Qx.msg[0x0] = "I love to get&thrashed...&Just kidding!&That's you!!"), this.turns === 0x2 && (Qx.msg[0x0] = "So what are&you guys doing&after this???"), this.turns >= 0x3 && (Qx.msg[0x0] = "Hohoho!!!&I'm the bad&guy!"), this.compliment_just === 0x1 && (this.compliment === 0x1 && (Qx.msg[0x0] = "Oh! You make&my feelings&do wheelies!&Sweet wheelys"), this.compliment === 0x2 && (Qx.msg[0x0] = "Did you not&realize I can&mask my self-&esteem levels?"), this.compliment === 0x3 && (Qx.msg[0x0] = "Stop!! My&personality's&getting too&deep!!!"), this.compliment_just = 0x0), QT(this.x - 0xeb, this.y - 0x41, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Qx.mnfight === 0x1 && (Qw() && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU), Qb.with('obj_writer', hu => hu.instance_destroy()), Qx.mnfight = 0x2)), Qx.mnfight === 0x2 && this.attacked === 0x0)) {
      let hu = QJ(this.x, this.y, Ln);
      this.bike = hu, this.visible = !0x1, this.attacks === 0x0 ? (hu.racecon = 0x1, hu.target = this.mytarget, hu.damage = Qx.monsterat[hI] * 0x5, this.attacks = 0x1) : (hu.lcon = 0x1, hu.target = this.mytarget, hu.damage = Qx.monsterat[hI] * 0x5, this.attacks = 0x0), this.turns++, Qx.turntimer = 0x3e7, this.attacked = 0x1;
      let hf = QO(Qq(0x5));
      Qx.typer = 0x6, Qx.fc = 0x0, Qx.battlemsg[0x0] = LD[hf], this.turns === 0x1 && (Qx.typer = 0x2f, Qx.fc = 0x1, Qx.fe = 0x2, Qx.battlemsg[0x0] = "* Dunno how I got an ax but^1, like^1, that's cool.");
    }
    Qx.myfight === 0x3 && (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* LANCER - AT 7 DF 1&* Not to call a spade a spade^1, but he's a spade./", Qx.msg[0x1] = "* Not old enough to ride a motorcycle^1, so he set his bike on fire./%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.automiss[hI] === 0x0 ? (Qx.msg[0x0] = "* You tell Lancer to watch out for Susie's attack^1.&* He readies himself./%", Qx.automiss[hI] = 0x1) : Qx.msg[0x0] = "* Lancer laughs at the idea he would need your help!/%", Qj()), this.acting === 0x3 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), this.compliment >= 0x3 && (Qx.msg[0x0] = "* You say some kind words^1.&* Lancer absorbs them into his skin./%"), this.compliment === 0x2 && (Qx.msg[0x0] = "* You compliment LANCER^1.&* He gets confused as to your sincerity./", Qx.msg[0x1] = "* Instead of going up or down^1, his ATTACK power goes sideways...?/%", QX(hI, 0x14)), this.compliment === 0x1 && (Qx.msg[0x0] = "* You try to compliment LANCER again.../", Qx.msg[0x1] = "* But he sees it as insincere^1.&* His ATTACK POWER goes back up!/%", QX(hI, 0x14), Qx.monsterat[hI] += 0x1), this.compliment === 0x0 && (Qx.msg[0x0] = "* You tell Lancer you can't tell the difference between his clothes and his body./", Qx.msg[0x1] = "* He seems flattered..^1.&* His ATTACK POWER went down!/%", QX(hI, 0x14), Qx.monsterat[hI] -= 0x1), this.compliment_just = 0x1, this.compliment++, Qj(), this.actcon = 0x1), this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o())), this.con === 0x1 && (this.alarm[0x4] = 0x5, this.con = 0x2), this.con === 0x3 && (Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "Wait^1!&Wait a second!/", Qx.msg[0x1] = "My bike's&running&out of&fuel...!/", Qx.msg[0x2] = "Alright,&you punk-&a-roos!/", Qx.msg[0x3] = "You had the&luck of the&draw this&time^1, but.../", Qx.msg[0x4] = "Next time^1,&the losers&will be&YOU!!!/", Qx.msg[0x5] = "Hahaha!!^1!&Bye^1, losers!!/", Qx.msg[0x6] = "I gotta get&home before&dinner!!!/%", this.con = 0x4, QT(this.x - 0xeb, this.y - 0x41, 0x3)), this.con === 0x4 && !Qb.exists('obj_writer') && (this.hspeed = 0x14, this.con = 0x5, this.alarm[0x4] = 0xf, Qb.with('obj_battlecontroller', hW => {
      hW.noreturn = 0x0, hW.alarm[0x2] = 0x11;
    })), this.con === 0x6 && (Qx.monsterexp[hI] -= 0x0, Qx.monstergold[hI] += 0xa, Qx.plot < 0x16 && (Qx.plot = 0x16), this.scr_monsterdefeat(), this.instance_destroy(), this.con = 0x7);
  }
  ["draw"](hI) {
    let hu = this.myself;
    if (this.state === 0x3 && (this.hurttimer--, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (Qx.plot < 0x16 && (Qx.plot = 0x16), this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake++, this.hurtshake > 0x1 && (this.shakex > 0x0 && this.shakex--, this.shakex < 0x0 && this.shakex++, this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext('spr_lancerbike_hurt', this.hurttimer / 0x2, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x4) {
      this.dodgetimer++;
      let hf = Math.cos(this.dodgetimer * 0x2 * Math.PI / 0xf) * 0x2;
      hI.draw_sprite_ext('spr_lancerbike_l', 0x0, this.x, this.y, hf, 0x2, 0x0, this.image_blend, 0x1), this.dodgetimer >= 0xf && (this.state = 0x0);
    }
    if (this.state === 0x0) {
      this.siner++;
      let hW = 'spr_lancerbike';
      Qx.mercymod[hu] >= Qx.mercymax[hu] && (hW = 'spr_lancerbike'), hI.draw_sprite_ext(hW, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner++, hI.draw_sprite_white(hW, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(Lb, 'obj_lancerboss'), j2(Lb, 'kinds', QA('obj_lancerboss', Q3)), j2(Lb, 'defaultDepth', 0x5a), j2(Lb, 'defaultSprite', 'spr_lancerbike');
var Lm = Lb,
  LO = class dG extends QE {
    ["create"]() {
      this.con = 0x33, this.image_speed = 0x0, this.visible = !0x1, this.image_xscale = 0x2, this.image_yscale = 0x2;
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && this.con++;
    }
    ["step"]() {
      if (this.con === 0x35) {
        let hI = Qb.first('obj_herosusie');
        this.s = QP(hI ? hI.x : 0x78, hI ? hI.y : 0x8c, 'spr_susieb_attack_serious'), this.s.image_index = 0x5, this.s.depth = hI ? hI.depth : 0x64, this.visible = !0x0, this.sprite_index = 'spr_lancer_battle_hurt', Qx.fighting = 0x0, Qb.with('obj_battlecontroller', hf => hf.instance_destroy()), Qb.with('obj_herosusie', hf => hf.instance_destroy()), Qb.with('obj_herokris', hf => hf.instance_destroy()), Qb.with('obj_tensionbar', hf => hf.instance_destroy()), Qb.with('obj_lancerboss2', hf => hf.instance_destroy()), Qb.with('obj_bulletparent', hf => hf.instance_destroy()), this.black && !this.black.destroyed && this.black.instance_destroy();
        let hu = QJ(this.x + 0x1e, this.y + 0x28, Q1);
        hu.type = 0x1, hu.damage = 0x0, this.con = 0x36, this.alarm[0x4] = 0x78;
      }
      this.con === 0x37 && (this.sprite_index = 'spr_lancer_battle', this.image_index = 0x0, Qx.typer = 0x20, Qx.fc = 0x5, Qx.fe = 0xc, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* S..^1. Susie...?/", Qx.msg[0x1] = "* Y..^1. you missed.../%", LR(QQ()), this.con = 0x38), this.con === 0x38 && !Qb.exists('obj_writer') && (this.con = 0x39, Qx.battleover = 'win', Q0());
    }
  };
j0(LO, 'obj_lancerbattle2_event'), j2(LO, 'kinds', QA('obj_lancerbattle2_event', QE)), j2(LO, 'defaultDepth', 0x3e8), j2(LO, 'defaultSprite', 'spr_lancer_battle');
var h0 = LO,
  h1 = class dN extends Q3 {
    ["create"]() {
      if (Object.assign(this, {
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
        'idlesprite': 'spr_lancer_battle',
        'hurtsprite': 'spr_lancer_battle_hurt',
        'sparedsprite': 'spr_lancer_battle',
        'hurtlevel': 0x0,
        'hmake': 0x0,
        'firstskip': 0x1,
        'shakesine': 0x0,
        'rtimer': 0x0,
        'shakex': 0x0
      }), !Qb.exists('obj_lancerbattle2_event')) {
        let hI = QJ(this.x, this.y, h0);
        hI.depth = this.depth;
      }
    }
    ["userEvent"](hI) {
      hI === 0xc && (Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2);
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && this.con++;
    }
    ["step"]() {
      let hI = this.myself;
      if (this.firstskip === 0x1 && (Qx.acting[0x0] = 0x1, this.acting = 0x1, Qb.with('obj_writer', hu => hu.instance_destroy()), Qb.with('obj_face', hu => hu.instance_destroy()), Qb.with('obj_smallface', hu => hu.instance_destroy()), Qx.charaction[0x0] === 0x1 && (Qx.attacking = 0x1), Qx.charturn = n(), Qx.myfight = 0x3), Qx.monster[hI] === 0x1) {
        if (Qx.flag[0x33 + hI] = 0x4, Qx.acting[0x0] = 0x1, this.acting = 0x1, Qx.mnfight === 0x1 && this.talked === 0x0 && (this.actcon = 0x0, QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qb.exists('obj_writer') || (Qx.mnfight = 0x2), Qx.mnfight === 0x2 && (!Qb.exists('obj_moveheart') && this.hmake === 0x0 && (QI(), this.hmake = 0x1), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU))), Qx.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.rtimer++, this.rtimer === 0xc) {
            if (Qx.turntimer = 0x8c, this.turns === 0x0 || this.turns === 0x2) {
              let hu = QJ(this.x, this.y, k);
              hu.type = 0x14, hu.target = this.mytarget, hu.damage = Qx.monsterat[hI] * 0x5, Qx.hp[Qx.char[0x0]] <= 0x46 && (hu.damage = Qx.monsterat[hI] * 0x3), Qx.turntimer = 0xb4;
            }
            if (this.turns === 0x1) {
              let hf = QJ(this.x, this.y, k);
              hf.type = 0x15, hf.target = this.mytarget, hf.damage = Qx.monsterat[hI] * 0x5, Qx.hp[Qx.char[0x0]] <= 0x46 && (hf.damage = Qx.monsterat[hI] * 0x3), Qx.turntimer = 0xb4;
            }
            if (this.turns >= 0x3) {
              let hW = QJ(this.x, this.y, k);
              hW.difficulty = this.turns * 0x2, this.turns === 0x6 && (hW.difficulty = 0x1e), this.turns === 0x7 && (hW.difficulty = 0x5a), hW.type = 0x18, hW.target = this.mytarget, hW.damage = Qx.monsterat[hI] * 0x5;
            }
            this.turns++, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0, Qx.battlemsg[0x0] = "* ...";
          } else Qx.turntimer = 0x96;
        }
        Qx.mnfight === 0x2 && Qx.turntimer <= 0xa && (this.hmake = 0x0);
      }
      if (Qx.myfight === 0x3) {
        if (this.acting === 0x1 && this.actcon === 0x0) {
          this.firstskip = 0x0, Qx.typer = 0x35, this.rr = Qy(0x0, 0x1, 0x2, 0x3), this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20');
          let hX = this.turns;
          hX === 0x0 && (Qx.msg[0x0] = "Hey, wanna&see what&happens to&traitors?/%"), hX === 0x1 && (Qx.msg[0x0] = "They.&Get.&Crushed./%"), hX === 0x2 && (Qx.msg[0x0] = "If you don't&get out of&the way.../", Qx.msg[0x1] = "...I'll&kill you./%"), hX === 0x3 && (Qx.msg[0x0] = "Get it?&I'll KILL&you./%"), hX === 0x4 && (Qx.msg[0x0] = "Heh...&You missed,&idiot!/%"), hX === 0x5 && (Qx.msg[0x0] = "... wait, why&aren't you&fighting&back...?/%", Qb.with('obj_herosusie', hC => {
            hC.idlesprite = 'spr_susieb_idle_serious', hC.attacksprite = 'spr_susieb_attack_serious';
          })), hX === 0x6 && (Qx.msg[0x0] = "... Heh, you&think I&CARE?/", Qx.msg[0x1] = "If you just&wanna lie&down and&die?/", Qx.msg[0x2] = "You're just&making it&easier for&me!/%", Qb.with('obj_herosusie', hC => {
            hC.idlesprite = 'spr_susieb_idle', hC.attacksprite = 'spr_susieb_attack';
          })), hX === 0x7 && (Qx.typer = 0x36, Qx.msg[0x0] = "........&Alright,&that's&enough./", Qx.msg[0x1] = "If you&wanna die&so much.../", Qx.msg[0x2] = "THEN DIE!/%", this.actcon = 0x2), Qx.monsterdf[hI] -= 0x5;
          let hY = Qb.first('obj_herosusie'),
            hB = QT((hY ? hY.x : 0x78) + 0x64, hY ? hY.y : 0x8c, 0x7);
          LR(hB.mywriter), Qb.with('obj_writer', hC => {
            hC.skippable = 0x0;
          });
        }
        if (this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o()), this.actcon === 0x2 && !Qb.exists('obj_writer')) {
          Qo(), QS('snd_laz_c'), this.black = QP(-0x14, -0x14, 'spr_pixel_white'), this.black.image_blend = Qz.black, this.black.depth = -0x2710, this.black.image_xscale = 0x384, this.black.image_yscale = 0x384, this.actcon = 0x3, this.acttimer = 0x0;
          let hC = Qb.first('obj_lancerbattle2_event');
          hC && (hC.black = this.black, hC.con = 0x34, hC.alarm[0x4] = 0x50);
        }
      }
    }
    ["draw"](hI) {
      let hu = this.myself;
      if (this.state === 0x3 && (this.shakesine = 0x0, this.siner = 0x0, this.hurttimer--, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && Ly(this), this.hurtshake++, this.hurtshake > 0x1 && (this.shakex > 0x0 && this.shakex--, this.shakex < 0x0 && this.shakex++, this.shakex = -this.shakex, this.hurtshake = 0x0), Qx.monsterhp[hu] / Qx.monstermaxhp[hu] <= 0.65 && (this.hurtlevel = 0x1), Qx.monsterhp[hu] / Qx.monstermaxhp[hu] <= 0.2 && (this.hurtlevel = 0x2), hI.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex * 0x2, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0) {
        this.shakesine++, this.siner++;
        let hf = Qq(QM(this.shakesine / 0x6) * this.hurtlevel / 1.5),
          hW = this.idlesprite;
        Qx.mercymod[hu] >= Qx.mercymax[hu] && (hW = this.sparedsprite), hI.draw_sprite_ext(hW, this.hurtlevel, this.x + hf, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner++, hI.draw_sprite_white(hW, this.hurtlevel, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
      }
      this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
  };
j0(h1, 'obj_lancerboss2'), j2(h1, 'kinds', QA('obj_lancerboss2', Q3)), j2(h1, 'defaultDepth', 0x5a), j2(h1, 'defaultSprite', 'spr_lancer_battle');
var h2 = h1,
  h3 = class dp extends Q3 {
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
        'acting': 0x0,
        'actcon': 0x0,
        'acttimer': 0x0,
        'mercymod': 0x0,
        'maxmercy': 0x270f,
        'warned': 0x0,
        'compliment': 0x0,
        'attacks': 0x0,
        'dodgetimer': 0x0,
        'candodge': 0x1,
        'con': 0x0,
        'susie_act': 0x0,
        'lancer_act': 0x0,
        'defeated': 0x0,
        'anythingcounter': 0x0,
        'lancer_hurt': 0x0,
        'susie_revive_count': 0x0,
        'ears_blocked': 0x0,
        'shakex': 0x0,
        'attack_qual': 0x0
      }), this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = this.sprite_index;
    }
    ["userEvent"](hI) {
      hI === 0xc && (Qx.monsterx[this.myself] = this.x - 0x1e, Qx.monstery[this.myself] = this.y - this.sprite_height / 0x2 - 0x1e);
    }
    ["alarmEvent"](hI) {
      hI === 0x4 && this.con++;
    }
    ["attackQual"]() {
      let hI = 0x0;
      return QW() === 0x1 && (hI = 0x1), Qb.with('obj_susieenemy', hu => {
        hu.sleeping === 0x1 && (hI = 0x1);
      }), hI;
    }
    ["step"]() {
      let hI = this.myself;
      if (this.defeated === 0x1 && Qx.mnfight === 0x1 && (Qx.mnfight = 0x63, this.con = 0x1), Qx.monster[hI] === 0x1 && this.defeated === 0x0) {
        if (Qx.flag[0x33 + hI] = 0x4, Qx.mnfight === 0x1 && this.talked === 0x0) {
          if (QW() === 0x1 && (this.susie_revive_count++, this.susie_revive_count >= 0x3)) {
            if (this.myself !== 0x0 && Qx.monsterinstancetype[0x0] && Qx.monster[0x0] === 0x0) {
              Qb.with('obj_susieandlancer_event', hX => {
                hX.s && (hX.s.visible = !0x1);
              }), Qx.monster[0x0] = 0x1;
              let hW = QJ(Qx.monstermakex[0x0], Qx.monstermakey[0x0], Qx.monsterinstancetype[0x0]);
              hW.myself = 0x0, Qx.monsterinstance[0x0] = hW, hW.userEvent(0xc), hW.userEvent(0x1), Qx.turntimer < 0x96 && (Qx.turntimer = 0x96), Qx.monsterhp[0x0] = 0x28, QS('snd_power');
            }
            this.susie_revive_count = 0x0;
          }
          this.attack_qual = 0x1, Qb.with('obj_susieenemy', hX => {
            hX.sleeping === 0x0 && Qx.monster[hX.myself] === 0x1 && (this.attack_qual = 0x0);
          }), this.attack_qual === 0x1 && (QY(this), Qx.targeted[this.mytarget] = 0x1), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20');
          let hu = Qy(0x0, 0x1, 0x2, 0x3);
          Qx.msg[0x0] = "Hey!!&Hey Susie!!&Watch me,&watch me!!", hu === 0x1 && (Qx.msg[0x0] = "Prepare for&smashing, you&luxurious&melons!!!"), hu === 0x2 && (Qx.msg[0x0] = "Horror! Pain!&The power of&REAL bad guys!&(Nice, huh?)"), hu === 0x3 && (Qx.msg[0x0] = "This bike is&fueled by&EVIL! ...and&friendship!"), this.lancer_hurt === 0x0 && Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] * 0.5 && (this.lancer_hurt = 0x1, Qx.msg[0x0] = "Ow^1, my&guts hurt!"), this.susie_act === 0x3 && (Qx.msg[0x0] = "Oh^1, what a&beautiful&song!!!"), this.susie_act === 0x9 && (Qx.msg[0x0] = "Don't worry&Bikey, I'll&put you to&bed soon...");
          let hf = this.anythingcounter;
          this.acting === 0x2 && (hf === 0x1 && (Qx.msg[0x0] = "Oh!!!&It's&working&on me!!!"), hf === 0x2 && (Qx.msg[0x0] = "Thanks,&it's all&natural!"), hf === 0x3 && (Qx.msg[0x0] = "Really!?&It's just&what I&wanted!!!"), hf >= 0x4 && (Qx.msg[0x0] = "Hee hee!&I'm bliss-&-fully&ignorant!")), this.acting === 0x3 && (hf === 0x1 && (Qx.msg[0x0] = "Oh!!!&It's&working&on me!!!"), hf === 0x2 && (Qx.msg[0x0] = "Really!^1?&That's bad!"), hf === 0x3 && (Qx.msg[0x0] = "Wow, I'll&look&amazing!!"), hf >= 0x4 && (Qx.msg[0x0] = "Hee hee!&I'm bliss-&-fully&ignorant!")), this.susie_act = 0x0, this.lancer_act = 0x0, QT(this.x - 0xeb, this.y - 0x41, 0x3), this.talked = 0x1, this.talktimer = 0x0;
        }
        if (this.talked === 0x1 && Qx.mnfight === 0x1 && (Qw() && this.talktimer > 0x11 && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU), Qb.with('obj_writer', hX => hX.instance_destroy()), Qx.mnfight = 0x2)), Qx.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.attack_qual = this.attackQual(), this.attack_qual === 0x1) {
            let hY = QJ(this.x, this.y, Ln);
            this.bike = hY, this.visible = !0x1, this.attacks === 0x0 ? (hY.racecon = 0x1, hY.target = this.mytarget, hY.damage = Qx.monsterat[hI] * 0x5, this.attacks = 0x1) : (hY.lcon = 0x1, hY.target = this.mytarget, hY.damage = Qx.monsterat[hI] * 0x5, this.attacks = 0x0), Qx.turntimer = 0x3e7;
          }
          this.turns++, this.attacked = 0x1;
          let hX = QO(Qq(0x5));
          Qx.typer = 0x6, Qx.fc = 0x0, Qx.battlemsg[0x0] = LD[hX];
        }
      }
      Qx.myfight === 0x3 && this.actStep(), this.con === 0x1 && (this.alarm[0x4] = 0x5, this.con = 0x2), this.con === 0x3 && (Qb.with('obj_susieenemy', hB => {
        hB.idlesprite = 'spr_susie_enemy';
      }), Qx.typer = 0x2e, Qx.fe = 0x4, Qx.fc = 0x5, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Ow.../", LF(0x1, 0x9), Qx.msg[0x2] = "* Hey^1, HEY^1! Enough's enough already!/", Qx.msg[0x3] = "* If you hit him any more^1, you might really hurt him!/", Qx.msg[0x4] = "\\E0* ... Lancer^1, you OK...?/", Lc(0x5, 0x2), Qx.msg[0x6] = "* I..^1. I'm fine^1, Susie!/", Qx.msg[0x7] = "\\E7* My insides are just..^1. a little mixed up./", LF(0x8, 0x0), Qx.msg[0x9] = "* Alright^1, fine^1! You guys win!/", Lw(0xa, 0x6), Qx.msg[0xb] = "* (Kris^1, maybe we should have taken it easier...)/%", Qx.flag[0xf9] === 0x1 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Uh oh./", LF(0x1, 0x0), Qx.msg[0x2] = "* What's wrong^1, dude?/", Lc(0x3, 0x4), Qx.msg[0x4] = "* I accidentally started liking the enemies...!/", Qx.msg[0x5] = "\\E3* Now seeing them just makes me feel round and soft./", Qx.msg[0x6] = "\\E4* Bad atmosphere for battle^1, though./", LF(0x7, 0x0), Qx.msg[0x8] = "* .../", Qx.msg[0x9] = "\\E1* Well^1, if you don't wanna fight,/", Qx.msg[0xa] = "\\E0* There's no point^1, I guess./", Qx.msg[0xb] = "\\E2* Battle's over!/%"), this.con = 0x4, La(), LR(QQ())), this.con === 0x4 && !Qb.exists('obj_writer') && (this.con = 0x5, this.alarm[0x4] = 0x2, Qb.with('obj_battlecontroller', hB => {
        hB.noreturn = 0x0, hB.alarm[0x2] = 0x4;
      })), this.con === 0x6 && (Qb.with('obj_susieandlancer_event', hB => {
        hB.l && (hB.l.visible = !0x0);
      }), Qb.with('obj_monsterparent', hB => {
        hB.scr_monsterdefeat();
      }), this.instance_destroy(), this.con = 0x7);
    }
    ["actStep"]() {
      let hI = this.myself;
      if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* LANCER - AT 7 DF 1&* Watch out!!^1! He's boosted by friendship!/%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You tried convincing Lancer not to fight./", Qx.msg[0x1] = "* Lancer started to become convinced!/%", this.anythingcounter === 0x1 && (Qx.msg[0x0] = "* You tried telling Lancer you like his hair.../", Qx.msg[0x1] = "* Lancer became even more convinced!/%"), this.anythingcounter === 0x2 && (Qx.msg[0x0] = "* You told Lancer you'd give him a picnic basket of worms./", Qx.msg[0x1] = "* Lancer became almost fully convinced!/%"), this.anythingcounter >= 0x3 && (Qx.msg[0x0] = "* You told Lancer you just want to get along!/", Qx.msg[0x1] = "* It's the decisive kindness!/%", this.ears_blocked >= 0x2 && (Qx.msg[0x0] = "* You told Lancer you want to get along really fast!/", Qx.msg[0x1] = "* The soundwaves reached Lancer instantly!/%"), this.attack_qual = this.attackQual(), this.attack_qual === 0x0 ? (this.actcon = 0x14, Qb.with('obj_monsterparent', hu => {
        hu.ears_blocked = (hu.ears_blocked || 0x0) + 0x1;
      })) : this.anythingcounter = 0xa, this.ears_blocked >= 0x3 && (this.anythingcounter = 0xa, this.actcon = 0x1, this.attack_qual = 0x1)), this.anythingcounter < 0x4 && this.anythingcounter++, Qj()), this.acting === 0x3 && this.actcon === 0x0) {
        this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You told Ralsei to compliment the enemies!/", Lw(0x1, 0x8), Qx.msg[0x2] = "* You two look like a really great team! I'm proud!/", Lq(0x3), Qx.msg[0x4] = "* (Lancer started to become a little convinced!)/%", this.anythingcounter === 0x1 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You told Ralsei to logically best Lancer and Susie./", Lw(0x1, 0x1), Qx.msg[0x2] = "* You two^1, if we don't stop fighting, then.../", Qx.msg[0x3] = "\\E6* ... Someone might get hurt!/", Lq(0x4), Qx.msg[0x5] = "* (Lancer became more convinced^1! It's working!)/%"), this.anythingcounter === 0x2 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You told Ralsei to offer his services to the enemies!/", Lw(0x1, 0x1), Qx.msg[0x2] = "* You two^1, if we stop fighting^1, then I could^1, um.../", Qx.msg[0x3] = "\\E8* I could braid your hair!/", Lq(0x4), Qx.msg[0x5] = "* (Lancer became almost fully convinced!)/%"), this.anythingcounter >= 0x3 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You told Ralsei to deal the final blow of kindness!/", Lw(0x1, 0x6), Qx.msg[0x2] = "* In summary^1, I like you two^1, and.../", Qx.msg[0x3] = "\\E8* I think we should all just get along!/%", this.ears_blocked >= 0x2 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You told Ralsei to compliment Lancer really fast!/", Lw(0x1, 0x0), Qx.msg[0x2] = "* You'rereallyaswellpersonyouknowthat?!/", Lq(0x3), Qx.msg[0x4] = "* The soundwaves reached Lancer instantly!/%"), this.attack_qual = this.attackQual(), this.attack_qual === 0x0 ? (this.actcon = 0x14, Qb.with('obj_monsterparent', hf => {
          hf.ears_blocked = (hf.ears_blocked || 0x0) + 0x1;
        })) : this.anythingcounter = 0xa, this.ears_blocked >= 0x3 && (this.anythingcounter = 0xa, this.actcon = 0x1, this.attack_qual = 0x1)), this.anythingcounter < 0x4 && this.anythingcounter++;
        let hu = Qb.first('obj_susieenemy');
        hu && (hu.anythingxcounter = this.anythingcounter, hu.lancer_act = 0x3), La(), Qj();
      }
      this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, this.anythingcounter < 0xa ? o() : (this.defeated = 0x1, Qx.mnfight = 0x63, Qx.myfight = 0x63, this.con = 0x1, Qx.flag[0xf9] = 0x1)), this.actcon === 0x14 && !Qb.exists('obj_writer') && (this.visible = !0x1, Qb.with('obj_susieenemy', hf => {
        hf.visible = !0x1;
      }), QW() === 0x1 && Qb.with('obj_susieandlancer_event', hf => {
        hf.s && (hf.s.visible = !0x1);
      }), this.blocklan = QP(this.x, this.y, 'spr_lancerbike_earcover'), this.blocklan.depth = this.depth, QS('snd_bell'), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* (But Susie blocked the soundwaves before they reached Lancer!)/", LF(0x1, 0x2), Qx.msg[0x2] = "* Try convincing someone that can't HEAR YOU!/%", La(), Qj(), this.actcon = 0x15), this.actcon === 0x15 && !Qb.exists('obj_writer') && (this.blocklan && this.blocklan.instance_destroy(), this.visible = !0x0, Qb.with('obj_susieenemy', hf => {
        hf.visible = !0x0;
      }), QW() === 0x1 && Qb.with('obj_susieandlancer_event', hf => {
        hf.s && (hf.s.visible = !0x0);
      }), this.actcon = 0x1);
    }
    ["draw"](hI) {
      let hu = this.myself;
      if (this.state === 0x3 && (Qx.monsterhp[hu] < Qx.monstermaxhp[hu] / 0x4 && (Qb.with('obj_monsterparent', hf => {
        hf.defeated = 0x1;
      }), Qx.monsterhp[hu] = Qx.monstermaxhp[hu] / 0x4), this.hurttimer--, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (this.hspeed = 0xc), this.hurtshake++, this.hurtshake > 0x1 && (this.shakex > 0x0 && this.shakex--, this.shakex < 0x0 && this.shakex++, this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext('spr_lancerbike_hurt', this.hurttimer / 0x2, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x4) {
        this.dodgetimer++;
        let hf = Math.cos(this.dodgetimer * 0x2 * Math.PI / 0xf) * 0x2;
        hI.draw_sprite_ext('spr_lancerbike_l', 0x0, this.x, this.y, hf, 0x2, 0x0, this.image_blend, 0x1), this.dodgetimer >= 0xf && (this.state = 0x0);
      }
      if (this.state === 0x0) {
        this.siner++;
        let hW = this.idlesprite;
        Qx.mercymod[hu] >= Qx.mercymax[hu] && (hW = this.idlesprite), hI.draw_sprite_ext(hW, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner++, hI.draw_sprite_white(hW, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
      }
      this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
  };
j0(h3, 'obj_lancerboss3'), j2(h3, 'kinds', QA('obj_lancerboss3', Q3)), j2(h3, 'defaultDepth', 0x5a), j2(h3, 'defaultSprite', 'spr_lancerbike');
var h4 = h3,
  h5 = [{
    'id': 'lancer',
    'name': 'Lancer',
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Lancer busts in!#Bike attacks, ACTs.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': Lm,
      'type': 0x2,
      'x': 0x21c,
      'y': 0xc8,
      'setup': LS
    }],
    'battlemsg': "* Lancer busts in!",
    'encounterno': 0x2,
    'music': 'battle'
  }, {
    'id': 'lancer2',
    'name': "Lancer (vs Susie)",
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "Susie alone#against Lancer.#Scripted fight.",
    'party': [0x2, 0x0, 0x0],
    'heromakex': [0x78, 0x50, 0x50],
    'heromakey': [0x8c, 0x82, 0xd2],
    'monsters': [{
      'cls': h2,
      'type': 0xc,
      'x': 0x1e0,
      'y': 0xa0,
      'setup': Ll
    }],
    'battlemsg': "* Lancer blocked the way!",
    'encounterno': 0x14,
    'music': 'battle'
  }, {
    'id': 'lancer3',
    'name': "Susie & Lancer",
    'chapter': 0x1,
    'area': "Card Castle",
    'desc': "Two bad guys#blocked the way!#Susie and Lancer.",
    'party': [0x1, 0x3, 0x0],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x64, 0xb4, 0xd2],
    'monsters': [{
      'cls': LM,
      'type': 0x13,
      'x': 0x208,
      'y': 0x50,
      'setup': Lu
    }, {
      'cls': h4,
      'type': 0x12,
      'x': 0x21c,
      'y': 0xf0,
      'setup': Lz
    }],
    'battlemsg': "* Two bad guys blocked the way!",
    'encounterno': 0x1f,
    'music': 'lancerfight'
  }];
j3(Lm, "G.mnfight = 2;"), j3(h2, "G.myfight = 3;G.mnfight = 2;"), j3(h4, "G.mnfight = 99;G.mnfight = 2;G.mnfight = 99;G.myfight = 99;");
var h6 = {};
j1(h6, {
  'FIGHTS': () => hd,
  'SOUNDS': () => h8,
  'SPRITES': () => h7,
  'obj_ponman_enemy': () => hh,
  'obj_spareanim': () => hQ,
  'scr_spareanim': () => hj,
  'setupStats': () => hT
}), j4();
var h7 = ['spr_ponman_idle', 'spr_ponman_eye', 'spr_ponman_appear', 'spr_diamondbullet', 'spr_ralseib_sing', 'spr_sparestar_anim'],
  h8 = ['snd_hurt1', 'snd_ralseising1', 'snd_ralseising2', 'snd_spare'],
  h9 = class dM extends QE {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, this.star = [], Ql('snd_spare'), QS('snd_spare');
    }
    ["draw"](hI) {
      if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x4, this.y, this.image_xscale, this.image_yscale, 0x0, 0.7 - this.afterimage / 0x19), hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 0x8, this.y, this.image_xscale, this.image_yscale, 0x0, 0.4 - this.afterimage / 0x1e)), this.t < 0x6) {
        this.t < 0x5 && hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1 - this.neotone / 0x4);
        let hu = this.t / 0x5;
        hu > 0x1 && (hu = 0x1), hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, hu - this.tone / 0x5);
      }
      if (this.t >= 0x1 && this.t <= 0x5) for (let hf = 0x0; hf < 0x2; hf += 0x1) {
        let hW = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
        hW.image_xscale = 0x2, hW.image_yscale = 0x2, hW.sprite_index = 'spr_sparestar_anim', hW.image_alpha = 0x2, hW.image_speed = 0.25, hW.hspeed = -0x3, hW.gravity = 0.5, hW.gravity_direction = 0x0, this.star[this.starcount] = hW, this.starcount += 0x1;
      }
      if (this.t >= 0x5 && this.t <= 0x1e) for (let hX = 0x0; hX < this.starcount; hX += 0x1) {
        let hY = this.star[hX];
        hY && !hY.destroyed && (hY.image_angle += 0xa, hY.image_alpha -= 0.1, hY.image_alpha <= 0x0 && hY.instance_destroy());
      }
      if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
        for (let hB = 0x0; hB < this.starcount; hB += 0x1) {
          let hC = this.star[hB];
          hC && !hC.destroyed && hC.instance_destroy();
        }
        this.instance_destroy();
      }
      this.t += 0x1;
    }
  };
j0(h9, 'obj_spareanim'), j2(h9, 'kinds', QA('obj_spareanim', QE)), j2(h9, 'defaultDepth', 0x0);
var hQ = h9;
function hj(hI) {
  let hu = QJ(hI.x, hI.y, hQ);
  hu.sprite_index = hI.sprite_index, hu.sprite_index = hI.sparedsprite, hu.image_index = 0x0, hu.image_xscale = hI.image_xscale, hu.image_yscale = hI.image_yscale;
}
j0(hj, 'scr_spareanim');
function hT(hI) {
  Qx.monstername[hI] = 'Ponman', Qx.monstermaxhp[hI] = 0x8c, Qx.monsterhp[hI] = 0x8c, Qx.monsterat[hI] = 0x7, Qx.monsterdf[hI] = 0x1, Qx.monsterexp[hI] = 0x0, Qx.monstergold[hI] = 0x17, Qx.sparepoint[hI] = 0xa, Qx.mercymod[hI] = 0x0, Qx.mercymax[hI] = 0x64, Qx.canact[hI][0x0] = 0x1, Qx.actname[hI][0x0] = 'Check', Qx.canact[hI][0x1] = 0x1, Qx.actname[hI][0x1] = 'Goodnight', Qx.canact[hI][0x2] = 0x1, Qx.actname[hI][0x2] = 'Lullaby', Qx.actactor[hI][0x2] = 0x3, QN(0x2) && Qx.plot < 0x96 && (Qx.canact[hI][0x3] = 0x1, Qx.actname[hI][0x3] = 'Warning', Qx.actactor[hI][0x3] = 0x3);
}
j0(hT, 'setupStats');
var hL = class dv extends Q3 {
  ["create"]() {
    Object.assign(this, {
      'bikeflip': 0x0,
      'becomeflash': 0x0,
      'turnt': 0x0,
      'turns': 0x0,
      'talktimer': 0x0,
      'talkmax': 0x3c,
      'state': 0x0,
      'flash': 0x0,
      'siner': 0x0,
      'fsiner': 0x0,
      'talked': 0x0,
      'attacked': 0x0,
      'hurt': 0x0,
      'hurttimer': 0x0,
      'hurtshake': 0x0,
      'mywriter': null,
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
      'eyex': 0x0,
      'eyey': 0x0,
      'eye_angle': 0x0,
      'eye_radius': 0x0,
      'ponman_eye': 0x0,
      'image_xscale': 0x2,
      'image_yscale': 0x2,
      'addup': 0x0,
      'eyecon': 0x0,
      'spinspeed': 0x0,
      'shotrefresh': 0x0,
      'x_angle': 0x0,
      'spintype': 0x0,
      'shotbuffer': 0x0,
      'grandbuffer': 0x0,
      'shotcount': 0x0,
      'totalshotcount': 0x0,
      'pontotal': 0x1,
      'maxtimer': 0x0,
      'activetimer': 0x0,
      'testtimer': 0x0,
      'sleeping': 0x0,
      'sleep_index': 0x5,
      'becomesleep': 0x0,
      'this_index': 0x0,
      'lullabied': 0x0,
      'idlesprite': 'spr_ponman_idle',
      'hurtsprite': 'spr_ponman_idle',
      'sparedsprite': 'spr_ponman_appear',
      'rtimer': 0x0,
      'maxshot': 0x0,
      'lullatimer': 0x0,
      'ralsing': null,
      'singy': null,
      'shakex': 0x0
    });
  }
  ["userEvent"](hI) {
    if (hI === 0xc) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 0x2, Qx.monstery[this.myself] = this.y + this.sprite_height / 0x2;
      return;
    }
    hI !== 0xb && hI === 0xa && (hj(this), this.scr_monsterdefeat(), this.instance_destroy());
  }
  ["alarmEvent"](hI) {
    hI === 0x4 && (this.actcon += 0x1);
  }
  ["step"]() {
    let hI = this.myself;
    if (Qx.monster[hI] === 0x1) {
      if (Qx.mnfight === 0x1 && this.talked === 0x0) {
        Qx.mercymod[hI] < 0x64 && QY(this), Qb.exists('obj_darkener') || QJ(0x0, 0x0, Qu), Qx.typer = 0x32, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = '\x20';
        let hu = QT(this.x - 0xa0, this.y, 0x3);
        hu.mywriter && hu.mywriter.instance_destroy(), hu.instance_destroy(), this.talked = 0x1, this.talktimer = 0x0;
      }
      if (this.talked === 0x1 && Qx.mnfight === 0x1 && (this.rtimer = 0x0, Qw() && this.talktimer > 0x5 && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Qb.with('obj_writer', hf => hf.instance_destroy()), Qx.mnfight = 0x2), Qx.mnfight === 0x2 && (Qb.exists('obj_moveheart') || QI(), Qb.exists('obj_growtangle') || QJ(0x140, 0xaa, QU))), Qx.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.rtimer += 0x1, this.rtimer === 0xc) {
          Qx.turntimer = 0x96, this.pontotal = QW();
          for (let hW = 0x0; hW < 0x3; hW += 0x1) Qx.monster[hW] === 0x1 && Qx.mercymod[hW] >= 0x64 && (this.pontotal -= 0x1);
          this.pontotal === 0x3 && (this.maxshot = 0x3), this.pontotal === 0x2 && (this.maxshot = 0x4), this.pontotal === 0x1 && (this.maxshot = 0x5), this.pontotal <= 0x0 && (Qx.turntimer = 0xa, this.maxshot = 0x6), this.shotcount = 0x0, this.totalshotcount = 0x0, this.activetimer = 0x1, this.shotbuffer = 0x8, Qx.mercymod[hI] < 0x64 && (this.eyecon = 0x14), this.turns += 0x1, this.attacked = 0x1, Qx.typer = 0x6, Qx.fc = 0x0;
          let hf = Qy(0x0, 0x1, 0x2, 0x3, 0x4);
          hf === 0x0 && (Qx.battlemsg[0x0] = "* Ponman advances one step at a time."), hf === 0x1 && (Qx.battlemsg[0x0] = "* Ponman listens politely^1, despite having no ears."), hf === 0x2 && (Qx.battlemsg[0x0] = "* Ponman seems hypnotized by your idle animation."), hf === 0x3 && (Qx.battlemsg[0x0] = "* Ponman gazes enigmatically."), hf === 0x4 && (Qx.battlemsg[0x0] = "* Smells like a pawn shop."), Qx.monsterstatus[hI] === 0x1 && (Qx.battlemsg[0x0] = "* Ponman can't keep its eye open."), Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 0x3 && (Qx.battlemsg[0x0] = "* Ponman looks dilated."), Qx.mercymod[hI] >= Qx.mercymax[hI] && (Qx.msg[0x0] = "* Ponman is sleeping soundly."), Qx.monstercomment[hI] === "(Sleepy)" && (Qx.msg[0x0] = "* The enemies became SLEEPY from Ralsei's lullaby!");
        } else Qx.turntimer = 0x78;
      }
      Qx.mnfight === 0x2 && Qx.turntimer <= 0x1 && (this.battlecancel === 0x1 && QX(hI, 0x64), this.battlecancel === 0x2 && (Qb.with('obj_battlecontroller', hX => {
        hX.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3));
    }
    if (Qx.myfight === 0x3 && this.actStep(), Qx.myfight === 0x7 && (this.hspeed = 0xf), this.sleeping === 0x1 && (this.eyecon = 0x3e7), this.eyecon === 0x0 && (this.eye_angle = 0xb4 + QM(this.siner / 0x8) * 0x1e, this.eye_radius < 0x8 ? this.eye_radius += 0x2 : this.eye_radius = 0x8, this.addup === 0x0 ? this.image_index = 0x1 : this.image_index = 0x3, this.eye_angle > 0xc8 && (this.image_index = 0x0, this.addup = 0x1), this.eye_angle < 0xa0 && (this.image_index = 0x2, this.addup = 0x0)), this.eyecon === 0xa && (this.activetimer = 0x0, Qb.with('obj_regularbullet', hX => {
      hX.active = 0x0, hX.image_alpha -= 0.1;
    }), this.image_index = 0x0, this.eye_radius *= 0.7, Qp(this.eye_radius) < 0.5 && (this.eye_radius = 0x0, this.eye_angle = 0x0), Qx.turntimer <= 0x1 && (this.eyecon = 0x0)), this.eyecon === 0x14) {
      this.spinspeed < 0xa && (this.spinspeed += 0x1), this.pontotal > 0x1 ? this.siner += this.spinspeed / 0x8 : this.siner += this.spinspeed / 0x14, this.eye_angle = 0xb4 + QM(this.siner / 0x8) * 0x46, this.eye_radius < 0x8 && (this.eye_radius += 0x1), this.grandbuffer -= 0x1;
      let hX = Qb.first('obj_heart');
      if (hX ? this.x_angle = QV(this.eyex + 0x1c + this.x, this.eyey + 0x20 + this.y, hX.x + 0x8, hX.y + 0x8) : this.x_angle = 0x0, Qp(this.x_angle - this.eye_angle) < 0x19 && this.eye_angle >= 0x78 && this.eye_angle <= 0xf0 && this.shotbuffer < 0x0 && this.shotcount < 0x3 && this.totalshotcount < this.maxshot) {
        this.shotcount += 0x1, this.pontotal === 0x2 && (this.shotcount += 0x1), this.pontotal === 0x3 && (this.shotcount += 0x1), this.shotcount >= 0x3 && (this.totalshotcount += 0x1, this.shotcount = 0x0, this.pontotal === 0x1 && (this.shotbuffer = 0xa), this.pontotal === 0x2 && (this.shotbuffer = 0xd), this.pontotal === 0x3 && (this.shotbuffer = 0x16)), this.totalshotcount >= this.maxshot && (this.maxtimer = 0x1), QS('snd_hurt1');
        let hY = QJ(this.eyex + 0x1c + this.x, this.eyey + 0x20 + this.y, Q7);
        hY.destroyed || (hY.speed = 0x2, hY.timepoints = 2.5, hY.target = this.mytarget, hY.damage = Qx.monsterat[hI] * 0x5, hY.friction = -0.11, this.pontotal === 0x1 && (hY.friction = -0.12), hY.direction = this.eye_angle, hY.sprite_index = 'spr_diamondbullet', hY.image_angle = hY.direction);
      }
      this.maxtimer > 0x0 && (this.maxtimer += 0x1), Qx.turntimer < 0xa && (this.eyecon = 0xa);
    }
    this.siner += 0x1, this.shotbuffer -= 0x1, this.becomesleep === 0x1 && (this.eyecon = 0x3e7, this.sleeping = 0x1, this.becomesleep = 0x0, this.sleep_index = 0x5), this.eye_angle < 0x0 && (this.eye_angle += 0x168), this.eye_angle > 0x168 && (this.eye_angle -= 0x168), this.eyex = Qk(this.eye_radius, this.eye_angle), this.eyey = Qn(this.eye_radius, this.eye_angle);
  }
  ["actStep"]() {
    let hI = this.myself;
    if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* PONMAN - AT 8 DF 0&* Its nucleus doubles as an eyespot./%", Qj()), this.acting === 0x2 && this.actcon === 0x0 && (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You whispered goodnight to Ponman^1.&* It fell asleep.../%", this.sleeping = 0x1, QX(hI, 0x64), Qj(), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
      this.lullabied === 0x0 ? (this.singy = QS('snd_ralseising1'), Qb.with('obj_ponman_enemy', hf => {
        hf.lullabied = 0x1;
      })) : (this.singy = QS('snd_ralseising2'), Qb.with('obj_ponman_enemy', hf => {
        hf.lullabied = 0x0;
      })), Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let hu = Qb.first('obj_heroralsei');
      Qb.with('obj_heroralsei', hf => {
        hf.visible = !0x1;
      }), hu && (this.ralsing = QP(hu.x, hu.y, 'spr_ralseib_sing'), this.ralsing.image_speed = 0.2), this.lullatimer = 0x0, Qj(), this.actcon = 0xa;
    }
    if (this.acting === 0x4 && this.actcon === 0x0) {
      this.actcon = 0x1, Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* You and Ralsei warned Ponman about Susie^1.&* The enemy went on guard.../%", QW() > 0x1 && (Qx.msg[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%");
      for (let hf = 0x0; hf < 0x3; hf += 0x1) Qx.monstercomment[hf] = "(Warned)", Qx.automiss[hf] = 0x1;
      Qj();
    }
    if (this.actcon === 0x1 && !Qb.exists('obj_writer') && (this.actcon = 0x0, o()), this.actcon === 0xa && (this.lullatimer += 0x1, this.lullatimer >= 0x1e && (this.actcon = 0xb)), this.actcon === 0xb && Qb.exists('obj_writer') === !0x1) {
      if (this.ralsing && !this.ralsing.destroyed && this.ralsing.instance_destroy(), Qb.with('obj_heroralsei', hW => {
        hW.visible = !0x0;
      }), this.singy) {
        Qa(this.singy);
        try {
          this.singy.currentTime = 0x0;
        } catch {}
        this.singy = null;
      }
      if (Qx.msg = new Array(0x64).fill('\x20'), Qx.msg[0x0] = "* PONMAN fell asleep^1!&* The enemies became TIRED!/%", QW() > 0x1 && QN(0x2)) {
        for (let hW = 0x0; hW < 0x3; hW += 0x1) Qx.char[hW] && QG(Qx.char[hW]) === 0x2 && Qx.charcond[hW] !== 0x5 && (Qx.charcond[hW] = 0x5, Qx.faceaction[hW] = 0x9, Qx.charmove[hW] = 0x0, Qx.msg[0x0] = "* PONMAN fell asleep^1!&* SUSIE fell asleep^1!&* The enemies became TIRED!/%");
      }
      this.sleeping = 0x1, QX(hI, 0x64), Qb.with('obj_monsterparent', hX => {
        Qx.monstercomment[hX.myself] = "(Sleepy)", Qx.monsterstatus[hX.myself] = 0x1;
      }), Qj(), this.actcon = 0x1;
    }
  }
  ["draw"](hI) {
    let hu = this.myself;
    if (this.state === 0x3 && (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 0x3 && (Qx.monsterstatus[hu] = 0x1, Qx.monstercomment[hu] === '\x20' && (Qx.monstercomment[hu] = "(Weak)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Qx.monster[hu] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), hI.draw_sprite_ext('spr_ponman_idle', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.sleeping === 0x0 && hI.draw_sprite_ext('spr_ponman_eye', 0x0, this.x + 0x1c + this.eyex, this.y + 0x20 + this.eyey, 0x2, 0x2, 0x0, Qz.white, 0x1), this.sleeping === 0x1 && (QX(hu, -0x64), this.sprite_index = 'spr_ponman_idle', this.image_index = 0x0, this.sleeping = 0x0))), this.state === 0x0) {
      let hf = 'spr_ponman_idle';
      this.this_index = this.image_index, this.sleeping === 0x1 && (hf = 'spr_ponman_appear', this.this_index = this.sleep_index, this.sleep_index > 0.5 && (this.sleep_index -= 0.25)), hI.draw_sprite_ext(hf, this.this_index, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.sleeping === 0x0 && hI.draw_sprite_ext('spr_ponman_eye', 0x0, this.x + 0x1c + this.eyex, this.y + 0x20 + this.eyey, 0x2, 0x2, 0x0, Qz.white, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, hI.draw_sprite_white(hf, this.this_index, this.x, this.y, 0x2, 0x2, 0x0, -Qv(this.fsiner / 0x5) * 0.4 + 0.6));
    }
    this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
j0(hL, 'obj_ponman_enemy'), j2(hL, 'kinds', QA('obj_ponman_enemy', Q3)), j2(hL, 'defaultDepth', 0x5a), j2(hL, 'defaultSprite', 'spr_ponman_idle');
var hh = hL,
  hd = [{
    'id': 'ponman2',
    'name': "Ponman x2",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Two Ponmen.#Eye-aimed diamonds.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': hh,
      'type': 0xb,
      'x': 0x1e0,
      'y': 0x6e,
      'setup': hT
    }, {
      'cls': hh,
      'type': 0xb,
      'x': 0x1f4,
      'y': 0xc8,
      'setup': hT
    }],
    'battlemsg': "* Ponman drew near!",
    'encounterno': 0xd,
    'music': 'battle'
  }, {
    'id': 'ponman3',
    'name': "Ponman x3",
    'chapter': 0x1,
    'area': 'Field',
    'desc': "Three Ponmen.#Eye-aimed diamonds.",
    'party': [0x1, 0x2, 0x3],
    'heromakex': [0x50, 0x50, 0x50],
    'heromakey': [0x32, 0x82, 0xd2],
    'monsters': [{
      'cls': hh,
      'type': 0xb,
      'x': 0x1e0,
      'y': 0x14,
      'setup': hT
    }, {
      'cls': hh,
      'type': 0xb,
      'x': 0x1f4,
      'y': 0x78,
      'setup': hT
    }, {
      'cls': hh,
      'type': 0xb,
      'x': 0x1cc,
      'y': 0xdc,
      'setup': hT
    }],
    'battlemsg': "* Ponman drew near!",
    'encounterno': 0xe,
    'music': 'battle'
  }];
j3(hh, "G.mnfight = 2;");
var hP = [j5, jY, i, v, jA, Tg, LT, h6, s, g, LL],
  hU = {
    'cirno_baka': 'mp3',
    'cyber_battle_backing': 'wav',
    'cyber_battle_backing_solo': 'wav',
    'motor_swing_down': 'wav',
    'motor_swing_down_bc': 'wav',
    'motor_upper_2': 'wav',
    'motor_upper_2_bc': 'wav',
    'motor_upper_quick': 'wav',
    'motor_upper_quick_bc': 'wav',
    'motor_upper_quick_high': 'wav',
    'motor_upper_quick_high_bc': 'wav',
    'motor_upper_quick_mid': 'wav',
    'motor_upper_quick_mid_bc': 'wav',
    'mus_a2': 'ogg',
    'mus_alphysfix': 'ogg',
    'mus_amalgam': 'ogg',
    'mus_ambientwater': 'ogg',
    'mus_anothermedium': 'ogg',
    'mus_bad': 'ogg',
    'mus_badnote1': 'wav',
    'mus_badnote2': 'wav',
    'mus_badnote3': 'wav',
    'mus_barrier': 'ogg',
    'mus_battle1': 'ogg',
    'mus_battle2': 'ogg',
    'mus_bergentruckung': 'ogg',
    'mus_bgflameA': 'ogg',
    'mus_birdsong': 'ogg',
    'mus_boss1': 'ogg',
    'mus_cast_1': 'ogg',
    'mus_cast_2': 'ogg',
    'mus_cast_3': 'ogg',
    'mus_cast_4': 'ogg',
    'mus_cast_5': 'ogg',
    'mus_cast_6': 'ogg',
    'mus_cast_7': 'ogg',
    'mus_chime': 'wav',
    'mus_chokedup': 'ogg',
    'mus_churchbell': 'ogg',
    'mus_computer': 'ogg',
    'mus_coolbeat': 'ogg',
    'mus_core': 'ogg',
    'mus_core_ambience': 'ogg',
    'mus_create': 'wav',
    'mus_creepy_ambience': 'ogg',
    'mus_crickets': 'ogg',
    'mus_cymbal': 'ogg',
    'mus_dance_of_dog': 'ogg',
    'mus_date': 'ogg',
    'mus_date_fight': 'ogg',
    'mus_date_tense': 'ogg',
    'mus_deeploop2': 'ogg',
    'mus_dialup_0': 'wav',
    'mus_dialup_1': 'wav',
    'mus_dialup_2': 'wav',
    'mus_dialup_3': 'wav',
    'mus_dialup_4': 'wav',
    'mus_dialup_5': 'wav',
    'mus_disturbing': 'ogg',
    'mus_dogappear': 'ogg',
    'mus_dogmeander': 'ogg',
    'mus_dogroom': 'ogg',
    'mus_dogsong': 'ogg',
    'mus_dontgiveup': 'ogg',
    'mus_doorclose': 'ogg',
    'mus_dooropen': 'ogg',
    'mus_drone': 'ogg',
    'mus_drumcuica': 'wav',
    'mus_drumcuica2': 'wav',
    'mus_drumcymbal': 'wav',
    'mus_drumkick': 'wav',
    'mus_drumsnare': 'wav',
    'mus_dummybattle': 'ogg',
    'mus_dununnn': 'ogg',
    'mus_elevator': 'ogg',
    'mus_elevator_last': 'ogg',
    'mus_endarea_parta': 'ogg',
    'mus_endarea_partb': 'ogg',
    'mus_endingexcerpt1': 'ogg',
    'mus_endingexcerpt2': 'ogg',
    'mus_explosion': 'wav',
    'mus_express_myself': 'ogg',
    'mus_fallendown2': 'ogg',
    'mus_fearsting': 'ogg',
    'mus_flowey': 'ogg',
    'mus_f_6s_1': 'ogg',
    'mus_f_6s_2': 'ogg',
    'mus_f_6s_3': 'ogg',
    'mus_f_6s_4': 'ogg',
    'mus_f_6s_5': 'ogg',
    'mus_f_6s_6': 'ogg',
    'mus_f_alarm': 'ogg',
    'mus_f_destroyed': 'ogg',
    'mus_f_destroyed2': 'ogg',
    'mus_f_destroyed3': 'ogg',
    'mus_f_endnote': 'wav',
    'mus_f_finale_1': 'ogg',
    'mus_f_finale_1_l': 'ogg',
    'mus_f_finale_2': 'ogg',
    'mus_f_finale_3': 'ogg',
    'mus_f_glock': 'wav',
    'mus_f_intro': 'ogg',
    'mus_f_laugh': 'wav',
    'mus_f_newlaugh': 'ogg',
    'mus_f_newlaugh_low': 'ogg',
    'mus_f_noise': 'wav',
    'mus_f_orchhit': 'wav',
    'mus_f_orchhit_l': 'wav',
    'mus_f_part1': 'ogg',
    'mus_f_part2': 'ogg',
    'mus_f_part3': 'ogg',
    'mus_f_saved': 'ogg',
    'mus_f_wind1': 'ogg',
    'mus_f_wind2': 'ogg',
    'mus_gameover': 'ogg',
    'mus_ghostbattle': 'ogg',
    'mus_harpnoise': 'ogg',
    'mus_hereweare': 'ogg',
    'mus_hotel': 'ogg',
    'mus_hotel_battle': 'ogg',
    'mus_house1': 'ogg',
    'mus_house2': 'ogg',
    'mus_intronoise': 'ogg',
    'mus_kingdescription': 'ogg',
    'mus_lab': 'ogg',
    'mus_leave': 'ogg',
    'mus_menu1': 'ogg',
    'mus_menu2': 'ogg',
    'mus_menu3': 'ogg',
    'mus_menu4': 'ogg',
    'mus_mettafly': 'ogg',
    'mus_mettatonbattle': 'ogg',
    'mus_mettaton_ex': 'ogg',
    'mus_mettaton_neo': 'ogg',
    'mus_mettaton_pretransform': 'ogg',
    'mus_mettmusical1': 'ogg',
    'mus_mettmusical2': 'ogg',
    'mus_mettmusical3': 'ogg',
    'mus_mettmusical4': 'ogg',
    'mus_mettsad': 'ogg',
    'mus_mettsmash': 'wav',
    'mus_mett_applause': 'ogg',
    'mus_mett_cheer': 'ogg',
    'mus_mode': 'ogg',
    'mus_mtgameshow': 'ogg',
    'mus_mt_yeah': 'wav',
    'mus_muscle': 'ogg',
    'mus_musicbox': 'ogg',
    'mus_myemeow': 'ogg',
    'mus_mysteriousroom2': 'ogg',
    'mus_mystery': 'ogg',
    'mus_napstachords': 'ogg',
    'mus_napstahouse': 'ogg',
    'mus_news': 'ogg',
    'mus_news_battle': 'ogg',
    'mus_note1': 'wav',
    'mus_note2': 'wav',
    'mus_note3': 'wav',
    'mus_note4': 'wav',
    'mus_note5': 'wav',
    'mus_note6': 'wav',
    'mus_ohyes': 'ogg',
    'mus_oogloop': 'ogg',
    'mus_operatile': 'ogg',
    'mus_options_fall': 'ogg',
    'mus_options_summer': 'ogg',
    'mus_options_winter': 'ogg',
    'mus_papyrus': 'ogg',
    'mus_papyrusboss': 'ogg',
    'mus_piano': 'ogg',
    'mus_piano1': 'wav',
    'mus_piano2': 'wav',
    'mus_piano3': 'wav',
    'mus_piano4': 'wav',
    'mus_piano5': 'wav',
    'mus_piano6': 'wav',
    'mus_piano7': 'wav',
    'mus_piano8': 'wav',
    'mus_piano9': 'wav',
    'mus_pianoA': 'wav',
    'mus_prebattle1': 'ogg',
    'mus_predummy': 'ogg',
    'mus_race': 'ogg',
    'mus_rain': 'ogg',
    'mus_rain_deep': 'ogg',
    'mus_repeat_1': 'ogg',
    'mus_repeat_2': 'ogg',
    'mus_reunited': 'ogg',
    'mus_rimshot': 'ogg',
    'mus_rotate': 'wav',
    'mus_ruins': 'ogg',
    'mus_ruinspiano': 'ogg',
    'mus_sansdate': 'ogg',
    'mus_sfx_abreak': 'wav',
    'mus_sfx_abreak2': 'wav',
    'mus_sfx_ahh': 'wav',
    'mus_sfx_a_bullet': 'wav',
    'mus_sfx_a_gigatalk': 'wav',
    'mus_sfx_a_grab': 'ogg',
    'mus_sfx_a_lithit': 'wav',
    'mus_sfx_a_lithit2': 'wav',
    'mus_sfx_a_pullback': 'wav',
    'mus_sfx_a_swipe': 'wav',
    'mus_sfx_a_swordappear': 'wav',
    'mus_sfx_a_target': 'wav',
    'mus_sfx_bookspin': 'wav',
    'mus_sfx_chainsaw': 'ogg',
    'mus_sfx_cinematiccut': 'wav',
    'mus_sfx_eyeflash': 'wav',
    'mus_sfx_frypan': 'wav',
    'mus_sfx_generate': 'wav',
    'mus_sfx_gigapunch': 'wav',
    'mus_sfx_gunshot': 'wav',
    'mus_sfx_hypergoner_charge': 'ogg',
    'mus_sfx_hypergoner_laugh': 'ogg',
    'mus_sfx_oh': 'wav',
    'mus_sfx_rainbowbeam_1': 'wav',
    'mus_sfx_rainbowbeam_hold': 'ogg',
    'mus_sfx_segapower': 'wav',
    'mus_sfx_segapower2': 'wav',
    'mus_sfx_sparkles': 'wav',
    'mus_sfx_spellcast': 'wav',
    'mus_sfx_star': 'wav',
    'mus_sfx_swipe': 'wav',
    'mus_sfx_ted': 'wav',
    'mus_sfx_voice_jafe': 'wav',
    'mus_sfx_voice_ted': 'wav',
    'mus_sfx_voice_triple': 'wav',
    'mus_sfx_yowl': 'wav',
    'mus_shop': 'ogg',
    'mus_sigh_of_dog': 'ogg',
    'mus_silence': 'ogg',
    'mus_singF': 'wav',
    'mus_singG': 'wav',
    'mus_singvoice': 'wav',
    'mus_smallshock': 'ogg',
    'mus_snoresymphony': 'ogg',
    'mus_snowwalk': 'ogg',
    'mus_snowy': 'ogg',
    'mus_spider': 'ogg',
    'mus_spoopy': 'ogg',
    'mus_spoopy_holiday': 'ogg',
    'mus_spoopy_wave': 'ogg',
    'mus_star': 'ogg',
    'mus_sticksnap': 'ogg',
    'mus_story': 'ogg',
    'mus_story_stuck': 'ogg',
    'mus_temshop': 'ogg',
    'mus_temvillage': 'ogg',
    'mus_tension': 'ogg',
    'mus_tone2': 'ogg',
    'mus_tone3': 'ogg',
    'mus_toomuch': 'ogg',
    'mus_toriel': 'ogg',
    'mus_town': 'ogg',
    'mus_tv': 'ogg',
    'mus_undyneboss': 'ogg',
    'mus_undynefast': 'ogg',
    'mus_undynepiano': 'ogg',
    'mus_undynescary': 'ogg',
    'mus_undynetheme': 'ogg',
    'mus_undynetruetheme': 'ogg',
    'mus_vsasgore': 'ogg',
    'mus_waterfall': 'ogg',
    'mus_waterquiet': 'ogg',
    'mus_wawa': 'ogg',
    'mus_whoopee': 'ogg',
    'mus_wind': 'ogg',
    'mus_woofenstein': 'ogg',
    'mus_woofenstein_loop': 'ogg',
    'mus_wrongworld': 'ogg',
    'mus_xpart': 'ogg',
    'mus_xpart_2': 'ogg',
    'mus_xpart_a': 'ogg',
    'mus_xpart_b': 'ogg',
    'mus_xpart_back': 'ogg',
    'mus_x_undyne': 'ogg',
    'mus_x_undyne_pre': 'ogg',
    'mus_yourbestfriend_3': 'ogg',
    'mus_zzz_c': 'ogg',
    'mus_zzz_c2': 'ogg',
    'mus_zz_megalovania': 'ogg',
    'mus_z_ending': 'ogg',
    'punch_ish_1': 'wav',
    'punch_ish_1_bc': 'wav',
    'rhythm_battle_snare': 'wav',
    'sfx_coin_chefs': 'wav',
    'shadowman_sax_long_1': 'wav',
    'shadowman_sax_long_2': 'wav',
    'shadowman_sax_long_3': 'wav',
    'shadowman_sax_long_4': 'wav',
    'shadowman_sax_long_solo_note': 'wav',
    'snd_acquire_lancer': 'wav',
    'snd_applause': 'wav',
    'snd_applause_single': 'wav',
    'snd_arrow': 'wav',
    'snd_audience_aww': 'wav',
    'snd_awkward': 'wav',
    'snd_b': 'wav',
    'snd_b@chut': 'wav',
    'snd_badexplosion': 'wav',
    'snd_bageldefeat': 'wav',
    'snd_barrel_jump': 'wav',
    'snd_battleenter': 'wav',
    'snd_battlefall': 'wav',
    'snd_bell': 'wav',
    'snd_bell@chut': 'wav',
    'snd_bell_bc': 'wav',
    'snd_bell_bounce_short': 'wav',
    'snd_bigscore': 'wav',
    'snd_birdtweet': 'wav',
    'snd_block2': 'wav',
    'snd_bluh': 'wav',
    'snd_board_bomb': 'wav',
    'snd_board_bosshit': 'wav',
    'snd_board_damage': 'wav',
    'snd_board_door_close': 'wav',
    'snd_board_kill': 'wav',
    'snd_board_lift': 'wav',
    'snd_board_mantle_dash_fast': 'wav',
    'snd_board_mantle_dash_prepare': 'wav',
    'snd_board_mantle_dash_slow': 'wav',
    'snd_board_mantle_laugh_mid': 'wav',
    'snd_board_mantle_move': 'wav',
    'snd_board_mantle_unknown_a': 'wav',
    'snd_board_mantle_unknown_b': 'wav',
    'snd_board_playerhurt': 'wav',
    'snd_board_splash': 'wav',
    'snd_board_summon': 'wav',
    'snd_board_sword1': 'wav',
    'snd_board_sword2': 'wav',
    'snd_board_sword3': 'wav',
    'snd_board_sword_metal': 'wav',
    'snd_board_text_main': 'wav',
    'snd_board_text_main_end': 'wav',
    'snd_board_throw': 'wav',
    'snd_board_torch': 'wav',
    'snd_board_torch_high': 'wav',
    'snd_board_unsummon': 'wav',
    'snd_bomb': 'wav',
    'snd_bomb@chut': 'wav',
    'snd_bombfall': 'wav',
    'snd_boost': 'wav',
    'snd_boxing_fight': 'wav',
    'snd_boxing_fight_bc': 'wav',
    'snd_boxing_round1': 'wav',
    'snd_boxing_round1_bc': 'wav',
    'snd_boxing_round2': 'wav',
    'snd_boxing_round3': 'wav',
    'snd_break1': 'wav',
    'snd_break1@chut': 'wav',
    'snd_break2': 'wav',
    'snd_break2@chut': 'wav',
    'snd_breaka': 'wav',
    'snd_breakb': 'wav',
    'snd_breakc': 'wav',
    'snd_bump': 'wav',
    'snd_bwaap': 'wav',
    'snd_camera_flash': 'wav',
    'snd_cardrive': 'wav',
    'snd_cardrive_bc': 'wav',
    'snd_carhonk': 'wav',
    'snd_catsalad': 'wav',
    'snd_chain_extend': 'wav',
    'snd_chain_extend_bc': 'wav',
    'snd_chain_wave': 'wav',
    'snd_chargeshot_charge': 'wav',
    'snd_chargeshot_fire': 'wav',
    'snd_chug': 'wav',
    'snd_coaster_kiss': 'wav',
    'snd_coin': 'wav',
    'snd_credit_s': 'wav',
    'snd_creepyjingle': 'wav',
    'snd_criticalswing': 'wav',
    'snd_criticalswing_bc': 'wav',
    'snd_crow': 'wav',
    'snd_crowd': 'wav',
    'snd_crowd_aah': 'wav',
    'snd_crowd_cheer_single': 'wav',
    'snd_crowd_laughter_loop': 'wav',
    'snd_crowd_laughter_single': 'wav',
    'snd_crowd_ooh': 'wav',
    'snd_crowngrowth': 'wav',
    'snd_crownshrink': 'wav',
    'snd_dadblast': 'wav',
    'snd_dadlaugh': 'wav',
    'snd_dadtxt': 'wav',
    'snd_damage': 'wav',
    'snd_damage@chut': 'wav',
    'snd_damage_bc': 'wav',
    'snd_deathnoise': 'wav',
    'snd_defeatrun': 'wav',
    'snd_dimbox': 'wav',
    'snd_doghurt1': 'wav',
    'snd_dogresidue': 'wav',
    'snd_dogsalad': 'wav',
    'snd_doorclose': 'wav',
    'snd_dooropen': 'wav',
    'snd_drake_dodge': 'wav',
    'snd_drive': 'wav',
    'snd_drumroll': 'wav',
    'snd_dumbvictory': 'wav',
    'snd_egg': 'wav',
    'snd_ehurt1': 'wav',
    'snd_ehurt1@chut': 'wav',
    'snd_electric_meow': 'wav',
    'snd_electric_talk': 'wav',
    'snd_equip': 'wav',
    'snd_error': 'wav',
    'snd_escaped': 'wav',
    'snd_escaped@chut': 'wav',
    'snd_explosion': 'wav',
    'snd_explosion_8bit': 'wav',
    'snd_explosion_firework': 'wav',
    'snd_explosion_firework_bc': 'wav',
    'snd_explosion_mmx': 'wav',
    'snd_explosion_mmx3': 'wav',
    'snd_face_hit': 'wav',
    'snd_fall': 'wav',
    'snd_fall_cool_deep': 'wav',
    'snd_floweylaugh': 'wav',
    'snd_floweytalk1': 'wav',
    'snd_floweytalk2': 'wav',
    'snd_foodscore': 'wav',
    'snd_ftext_bounce': 'wav',
    'snd_ftext_brother': 'wav',
    'snd_ftext_dark_fountain': 'wav',
    'snd_ftext_enter': 'wav',
    'snd_ftext_gunshot': 'wav',
    'snd_ftext_names': 'wav',
    'snd_ftext_prize': 'wav',
    'snd_ftext_susiezilla': 'wav',
    'snd_ftext_toriel': 'wav',
    'snd_ftext_vibraphones': 'wav',
    'snd_ftext_woodblock': 'wav',
    'snd_glassbreak': 'wav',
    'snd_grab': 'wav',
    'snd_grab@chut': 'wav',
    'snd_grandpatemi': 'wav',
    'snd_graze': 'wav',
    'snd_graze_bc': 'wav',
    'snd_guitarerror': 'wav',
    'snd_guitarerror2': 'wav',
    'snd_guitarpickup1': 'wav',
    'snd_guitarpickup2': 'wav',
    'snd_guitarpickup3': 'wav',
    'snd_guitarpickup4': 'wav',
    'snd_gunshot': 'wav',
    'snd_gunshot_b': 'wav',
    'snd_heal_c': 'wav',
    'snd_heartshot': 'wav',
    'snd_heartshot_dr': 'wav',
    'snd_heartshot_dr_b': 'wav',
    'snd_heavyswing': 'wav',
    'snd_heavyswing_bc': 'wav',
    'snd_heavy_passing': 'wav',
    'snd_hero': 'wav',
    'snd_hit': 'wav',
    'snd_hit@chut': 'wav',
    'snd_howl': 'wav',
    'snd_hurt1': 'wav',
    'snd_hurt1@chut': 'wav',
    'snd_hurt1_bc': 'wav',
    'snd_hurtbeef': 'wav',
    'snd_hurtbig': 'wav',
    'snd_hurtbuzz': 'wav',
    'snd_hurtdragon': 'wav',
    'snd_hurtgirl': 'wav',
    'snd_hurtlaugh': 'wav',
    'snd_hypnosis': 'wav',
    'snd_impact': 'wav',
    'snd_impact@chut': 'wav',
    'snd_impact_bc': 'wav',
    'snd_item': 'wav',
    'snd_item@chut': 'wav',
    'snd_joker_anything': 'wav',
    'snd_joker_byebye': 'wav',
    'snd_joker_chaos': 'wav',
    'snd_joker_ha0': 'wav',
    'snd_joker_ha1': 'wav',
    'snd_joker_laugh0': 'wav',
    'snd_joker_laugh1': 'wav',
    'snd_joker_metamorphosis': 'wav',
    'snd_joker_neochaos': 'wav',
    'snd_joker_oh': 'wav',
    'snd_jump': 'wav',
    'snd_jump_bc': 'wav',
    'snd_knight_boxbreak': 'wav',
    'snd_knight_cut': 'wav',
    'snd_knight_cut2': 'wav',
    'snd_knight_drawpower': 'wav',
    'snd_knight_fallingsword_big': 'wav',
    'snd_knight_hurt': 'wav',
    'snd_knight_hurtb': 'wav',
    'snd_knight_jump': 'wav',
    'snd_knight_jump_quick': 'wav',
    'snd_knight_powerup_white': 'wav',
    'snd_knight_puff': 'wav',
    'snd_knight_roar': 'wav',
    'snd_knight_rotatingslash_line': 'wav',
    'snd_knight_star_explosion_close': 'wav',
    'snd_knight_stretch': 'wav',
    'snd_knight_teleport': 'wav',
    'snd_knock': 'wav',
    'snd_knock@chut': 'wav',
    'snd_lancerhonk': 'wav',
    'snd_lancerlaugh': 'wav',
    'snd_lancerwhistle': 'wav',
    'snd_laughtrack_short_temp': 'wav',
    'snd_laz': 'wav',
    'snd_laz_c': 'wav',
    'snd_levelup': 'wav',
    'snd_levelup@chut': 'wav',
    'snd_link_secret_bad': 'wav',
    'snd_locker': 'wav',
    'snd_magicmarker': 'wav',
    'snd_magicsprinkle': 'wav',
    'snd_menumove': 'wav',
    'snd_mercyadd': 'wav',
    'snd_metalhit': 'wav',
    'snd_metalhit_bc': 'wav',
    'snd_metal_hit': 'wav',
    'snd_metal_hit_guard': 'wav',
    'snd_metal_hit_reverb': 'wav',
    'snd_motor_swing_down': 'wav',
    'snd_motor_upper_2': 'wav',
    'snd_mtt1': 'wav',
    'snd_mtt2': 'wav',
    'snd_mtt3': 'wav',
    'snd_mtt4': 'wav',
    'snd_mtt5': 'wav',
    'snd_mtt6': 'wav',
    'snd_mtt7': 'wav',
    'snd_mtt8': 'wav',
    'snd_mtt9': 'wav',
    'snd_mtt_burst': 'wav',
    'snd_mtt_hit': 'wav',
    'snd_mtt_prebomb': 'wav',
    'snd_noise': 'wav',
    'snd_noise@chut': 'wav',
    'snd_nosound': 'wav',
    'snd_nosound@chut': 'wav',
    'snd_object_passing': 'wav',
    'snd_orchhit': 'wav',
    'snd_petrify': 'wav',
    'snd_phone': 'wav',
    'snd_phone@chut': 'wav',
    'snd_pianonoise': 'wav',
    'snd_pinball': 'wav',
    'snd_pirouette': 'wav',
    'snd_pombark': 'wav',
    'snd_pombark@chut': 'wav',
    'snd_power': 'wav',
    'snd_power@chut': 'wav',
    'snd_punchheavythunder': 'wav',
    'snd_punchheavythunder_bc': 'wav',
    'snd_punchmed': 'wav',
    'snd_punchmed_bc': 'wav',
    'snd_punchstrong': 'wav',
    'snd_punchweak': 'wav',
    'snd_punchweak@chut': 'wav',
    'snd_punch_ish_1': 'wav',
    'snd_quake_nes': 'wav',
    'snd_queenhowl_b': 'wav',
    'snd_queenhowl_b_bc': 'wav',
    'snd_queen_bitcrushlaugh': 'wav',
    'snd_queen_gasp': 'wav',
    'snd_queen_hoot_0': 'wav',
    'snd_queen_hoot_1': 'wav',
    'snd_queen_hoot_2': 'wav',
    'snd_queen_laugh_0': 'wav',
    'snd_queen_laugh_0_bc': 'wav',
    'snd_queen_punched_lower': 'wav',
    'snd_queen_punched_lower_heavy': 'wav',
    'snd_ralseising1': 'wav',
    'snd_ralseising2': 'wav',
    'snd_reverse_spare': 'wav',
    'snd_rimshot': 'wav',
    'snd_rocket': 'wav',
    'snd_rocket_bc': 'wav',
    'snd_rocket_long': 'wav',
    'snd_rocket_sneo': 'wav',
    'snd_rudebuster_hit': 'wav',
    'snd_rudebuster_swing': 'wav',
    'snd_rumble': 'wav',
    'snd_saber3': 'wav',
    'snd_scissorbell': 'wav',
    'snd_screenshake': 'wav',
    'snd_screenshake_bc': 'wav',
    'snd_scytheburst': 'wav',
    'snd_scytheburst_bc': 'wav',
    'snd_select': 'wav',
    'snd_select@chut': 'wav',
    'snd_shadowpendant': 'wav',
    'snd_shakerbreaker': 'wav',
    'snd_shineselect': 'wav',
    'snd_shinka_ambience': 'wav',
    'snd_shock': 'wav',
    'snd_slidewhist': 'wav',
    'snd_slidewhistle': 'wav',
    'snd_smallswing': 'wav',
    'snd_smashreveal': 'wav',
    'snd_snd_motor_upper_quick_high': 'wav',
    'snd_sneo_laugh_long': 'wav',
    'snd_sneo_overpower': 'wav',
    'snd_sonar': 'wav',
    'snd_spamton_laugh': 'wav',
    'snd_spare': 'wav',
    'snd_sparkle1': 'wav',
    'snd_sparkle_gem': 'wav',
    'snd_sparkle_glock': 'wav',
    'snd_spearappear': 'wav',
    'snd_spearappear@chut': 'wav',
    'snd_spearappear_choppy': 'wav',
    'snd_spearrise': 'wav',
    'snd_spearrise@chut': 'wav',
    'snd_speedup': 'wav',
    'snd_spellcast': 'wav',
    'snd_spell_cure_slight_smaller': 'wav',
    'snd_splat': 'wav',
    'snd_spooky': 'wav',
    'snd_squeak': 'wav',
    'snd_squeaky': 'wav',
    'snd_squeaky_bc': 'wav',
    'snd_stardrop': 'wav',
    'snd_step1': 'wav',
    'snd_step2': 'wav',
    'snd_suslaugh': 'wav',
    'snd_sussurprise': 'wav',
    'snd_swallow': 'wav',
    'snd_swallow@chut': 'wav',
    'snd_swing': 'wav',
    'snd_switchpull_n': 'wav',
    'snd_tearcard': 'wav',
    'snd_tem': 'wav',
    'snd_tem2': 'wav',
    'snd_tem3': 'wav',
    'snd_tem4': 'wav',
    'snd_tem5': 'wav',
    'snd_tem6': 'wav',
    'snd_tensionhorn': 'wav',
    'snd_text': 'wav',
    'snd_tm_quiz_a': 'wav',
    'snd_tm_quiz_b': 'wav',
    'snd_tm_quiz_c': 'wav',
    'snd_tm_quiz_d': 'wav',
    'snd_toilet': 'wav',
    'snd_tvturnoff': 'wav',
    'snd_tvturnoff2': 'wav',
    'snd_tv_alarm': 'wav',
    'snd_tv_static': 'wav',
    'snd_tv_voice_short': 'wav',
    'snd_tv_voice_short_10': 'wav',
    'snd_tv_voice_short_2': 'wav',
    'snd_tv_voice_short_3': 'wav',
    'snd_tv_voice_short_4': 'wav',
    'snd_tv_voice_short_5': 'wav',
    'snd_tv_voice_short_6': 'wav',
    'snd_tv_voice_short_7': 'wav',
    'snd_tv_voice_short_8': 'wav',
    'snd_tv_voice_short_9': 'wav',
    'SND_TXT1': 'wav',
    'SND_TXT2': 'wav',
    'snd_txtal': 'wav',
    'snd_txtal@chut': 'wav',
    'snd_txtasg': 'wav',
    'snd_txtasg@chut': 'wav',
    'snd_txtasr': 'wav',
    'snd_txtasr2': 'wav',
    'snd_txtber': 'wav',
    'snd_txtecho': 'wav',
    'snd_txtjok': 'wav',
    'snd_txtlan': 'wav',
    'snd_txtnoe': 'wav',
    'snd_txtpap': 'wav',
    'snd_txtpap@chut': 'wav',
    'snd_txtq': 'wav',
    'snd_txtq_2': 'wav',
    'snd_txtral': 'wav',
    'snd_txtrud': 'wav',
    'snd_txtrx1': 'wav',
    'snd_txtsans': 'wav',
    'snd_txtsans2': 'wav',
    'snd_txtsans@chut': 'wav',
    'snd_txtspam': 'wav',
    'snd_txtspam2': 'wav',
    'snd_txtsus': 'wav',
    'snd_txtsusral': 'wav',
    'snd_txttor': 'wav',
    'snd_txttor2': 'wav',
    'snd_txttor@chut': 'wav',
    'snd_txtund': 'wav',
    'snd_txtund2': 'wav',
    'snd_txtund3': 'wav',
    'snd_txtund4': 'wav',
    'snd_txtund@chut': 'wav',
    'snd_txtund_hyper': 'wav',
    'snd_ultraswing': 'wav',
    'snd_ultraswing_bc': 'wav',
    'snd_vaporized': 'wav',
    'snd_victor': 'wav',
    'snd_vulkinhurt': 'wav',
    'snd_wallclaw': 'wav',
    'snd_weaponpull_fast': 'wav',
    'snd_weirdeffect': 'wav',
    'snd_whip_crack_only': 'wav',
    'snd_whip_hard': 'wav',
    'snd_whip_throw_only': 'wav',
    'snd_whistlebreath': 'wav',
    'snd_wideslash_low': 'wav',
    'snd_wing': 'wav',
    'snd_wngdng1': 'wav',
    'snd_wngdng2': 'wav',
    'snd_wngdng3': 'wav',
    'snd_wngdng4': 'wav',
    'snd_wngdng5': 'wav',
    'snd_wngdng6': 'wav',
    'snd_wngdng7': 'wav',
    'snd_won': 'wav',
    'snd_wrongvictory': 'wav',
    'snd_yeah': 'wav',
    'a2': 'ogg',
    'acid_tunnel': 'ogg',
    'alarm_titlescreen': 'ogg',
    'alley_ambience': 'ogg',
    'alphysfix': 'ogg',
    'amalgam': 'ogg',
    'ambientwater': 'ogg',
    'ambientwater_weird': 'ogg',
    'anothermedium': 'ogg',
    'april_2012': 'ogg',
    'AUDIO_ANOTHERHIM': 'ogg',
    'AUDIO_DARKNESS': 'ogg',
    'AUDIO_DEFEAT': 'ogg',
    'AUDIO_DRONE': 'ogg',
    'AUDIO_STORY': 'ogg',
    'baci_distort': 'ogg',
    'baci_perugina': 'ogg',
    'bad': 'ogg',
    'barrier': 'ogg',
    'basement': 'ogg',
    'battle': 'ogg',
    'battle1': 'ogg',
    'battle2': 'ogg',
    'battle_vapor': 'ogg',
    'berdly_audience': 'ogg',
    'berdly_battle_heartbeat_true': 'ogg',
    'berdly_chase': 'ogg',
    'berdly_descend': 'ogg',
    'berdly_flashback': 'ogg',
    'berdly_theme': 'ogg',
    'bergentruckung': 'ogg',
    'bgflameA': 'ogg',
    'bird': 'ogg',
    'birdnoise': 'ogg',
    'birdsong': 'ogg',
    'board4_rhythm': 'ogg',
    'board_4': 'ogg',
    'board_4_challenge': 'ogg',
    'board_lancer_dig': 'ogg',
    'board_ocean': 'ogg',
    'board_sword_music': 'ogg',
    'board_zelda': 'ogg',
    'boss1': 'ogg',
    'boxing_boss': 'ogg',
    'boxing_game': 'ogg',
    'card_castle': 'ogg',
    'castletown': 'ogg',
    'castletown_empty': 'ogg',
    'cast_1': 'ogg',
    'cast_2': 'ogg',
    'cast_3': 'ogg',
    'cast_4': 'ogg',
    'cast_5': 'ogg',
    'cast_6': 'ogg',
    'cast_7': 'ogg',
    'ch2_credits': 'ogg',
    'ch3-practice_song_combined': 'ogg',
    'ch3-practice_song_noguit': 'ogg',
    'ch3_board2': 'ogg',
    'ch3_board3': 'ogg',
    'ch3_karaoke_example_guit_only': 'ogg',
    'ch3_karaoke_example_noguit': 'ogg',
    'ch3_karaoke_full': 'ogg',
    'ch3_karaoke_no_guitar': 'ogg',
    'ch3_south_of_the_border': 'ogg',
    'ch3_tvtime': 'ogg',
    'ch3_tvtime_guitar': 'ogg',
    'charjoined': 'ogg',
    'checkers': 'ogg',
    'chokedup': 'ogg',
    'churchbell': 'ogg',
    'computer': 'ogg',
    'confession': 'ogg',
    'coolbeat': 'ogg',
    'coolbeat@chut': 'ogg',
    'core': 'ogg',
    'core_ambience': 'ogg',
    'creepychase': 'ogg',
    'creepydoor': 'ogg',
    'creepylandscape': 'ogg',
    'creepy_ambience': 'ogg',
    'crickets': 'ogg',
    'cyber': 'ogg',
    'cybercity': 'ogg',
    'cybercity_alt': 'ogg',
    'cyberhouse': 'ogg',
    'cybershop_christmas': 'ogg',
    'cyber_battle_end': 'ogg',
    'cyber_battle_prelude': 'ogg',
    'cyber_shop': 'ogg',
    'cymbal': 'ogg',
    'd': 'ogg',
    'dance_of_dog': 'ogg',
    'date': 'ogg',
    'date_fight': 'ogg',
    'date_tense': 'ogg',
    'deeploop2': 'ogg',
    'deep_noise': 'ogg',
    'deltarune_logo_ch5_itoki': 'ogg',
    'dogappear': 'ogg',
    'dogcheck': 'ogg',
    'dogmeander': 'ogg',
    'dogroom': 'ogg',
    'dogroom@chut': 'ogg',
    'dogsong': 'ogg',
    'dontforget': 'ogg',
    'dontgiveup': 'ogg',
    'doorclose': 'ogg',
    'dooropen': 'ogg',
    'drone': 'ogg',
    'dummybattle': 'ogg',
    'dununnn': 'ogg',
    'elevator': 'ogg',
    'elevator@chut': 'ogg',
    'elevator_last': 'ogg',
    'endarea_parta': 'ogg',
    'endarea_partb': 'ogg',
    'endingexcerpt1': 'ogg',
    'endingexcerpt2': 'ogg',
    'express_myself': 'ogg',
    'fallendown2': 'ogg',
    'fanfare': 'ogg',
    'fearsting': 'ogg',
    'field_of_hopes': 'ogg',
    'findher': 'ogg',
    'flashback_excerpt': 'ogg',
    'flowey': 'ogg',
    'forest': 'ogg',
    'friendship': 'ogg',
    'f_6s_1': 'ogg',
    'f_6s_2': 'ogg',
    'f_6s_3': 'ogg',
    'f_6s_4': 'ogg',
    'f_6s_5': 'ogg',
    'f_6s_6': 'ogg',
    'f_alarm': 'ogg',
    'f_destroyed': 'ogg',
    'f_destroyed2': 'ogg',
    'f_destroyed3': 'ogg',
    'f_finale_1': 'ogg',
    'f_finale_1_l': 'ogg',
    'f_finale_2': 'ogg',
    'f_finale_3': 'ogg',
    'f_intro': 'ogg',
    'f_newlaugh': 'ogg',
    'f_newlaugh_low': 'ogg',
    'f_part1': 'ogg',
    'f_part2': 'ogg',
    'f_part3': 'ogg',
    'f_saved': 'ogg',
    'f_wind1': 'ogg',
    'f_wind2': 'ogg',
    'GALLERY': 'ogg',
    'gameover': 'ogg',
    'gameover_short': 'ogg',
    'ghostbattle': 'ogg',
    'giant_queen_appears': 'ogg',
    'gigaqueen_pre': 'ogg',
    'glacier': 'ogg',
    'greenroom_detune': 'ogg',
    'harpnoise': 'ogg',
    'hereweare': 'ogg',
    'hip_shop': 'ogg',
    'home': 'ogg',
    'honksong': 'ogg',
    'hotel': 'ogg',
    'hotel_battle': 'ogg',
    'house1': 'ogg',
    'house2': 'ogg',
    'intronoise': 'ogg',
    'joker': 'ogg',
    'KEYGEN': 'ogg',
    'kingboss': 'ogg',
    'kingdescription': 'ogg',
    'knight': 'ogg',
    'knight_appears': 'ogg',
    'lab': 'ogg',
    'lancer': 'ogg',
    'lancerfight': 'ogg',
    'lancer_susie': 'ogg',
    'leave': 'ogg',
    'legend': 'ogg',
    'man': 'ogg',
    'mansion': 'ogg',
    'mansion_entrance': 'ogg',
    'menu': 'ogg',
    'menu1': 'ogg',
    'menu2': 'ogg',
    'menu3': 'ogg',
    'menu4': 'ogg',
    'mettafly': 'ogg',
    'mettatonbattle': 'ogg',
    'mettaton_ex': 'ogg',
    'mettaton_neo': 'ogg',
    'mettaton_pretransform': 'ogg',
    'mettmusical1': 'ogg',
    'mettmusical2': 'ogg',
    'mettmusical3': 'ogg',
    'mettmusical4': 'ogg',
    'mettsad': 'ogg',
    'mett_applause': 'ogg',
    'mett_cheer': 'ogg',
    'minigame_kart': 'ogg',
    'mode': 'ogg',
    'mtgameshow': 'ogg',
    'muscle': 'ogg',
    'muscle@chut': 'ogg',
    'musicbox': 'ogg',
    'music_guys': 'ogg',
    'music_guys_intro': 'ogg',
    'mus_birdnoise': 'ogg',
    'mus_birdnoise@chut': 'ogg',
    'mus_confession': 'ogg',
    'mus_confession@chut': 'ogg',
    'mus_introcar': 'ogg',
    'mus_school': 'ogg',
    'myemeow': 'ogg',
    'mysteriousroom2': 'ogg',
    'mystery': 'ogg',
    'napstachords': 'ogg',
    'napstahouse': 'ogg',
    'napsta_alarm': 'ogg',
    'nes_intro_extended_part2': 'ogg',
    'news': 'ogg',
    'newscast': 'ogg',
    'news_battle': 'ogg',
    'nightmare_boss_heavy': 'ogg',
    'nightmare_nes': 'ogg',
    'night_ambience': 'ogg',
    'noelle_ferriswheel': 'ogg',
    'noelle_normal': 'ogg',
    'noelle_school': 'ogg',
    'northernlight': 'ogg',
    'ocean': 'ogg',
    'ohyes': 'ogg',
    'ominous_message': 'ogg',
    'oogloop': 'ogg',
    'operatile': 'ogg',
    'options_fall': 'ogg',
    'options_summer': 'ogg',
    'options_winter': 'ogg',
    'papyrus': 'ogg',
    'papyrusboss': 'ogg',
    'piano': 'ogg',
    'prebattle1': 'ogg',
    'predummy': 'ogg',
    'prejoker': 'ogg',
    'queen': 'ogg',
    'queen_boss': 'ogg',
    'queen_car_radio': 'ogg',
    'queen_intro': 'ogg',
    'quiet_autumn': 'ogg',
    'race': 'ogg',
    'rain': 'ogg',
    'rain@chut': 'ogg',
    'rain_deep': 'ogg',
    'repeat_1': 'ogg',
    'repeat_2': 'ogg',
    'reunited': 'ogg',
    'rimshot': 'ogg',
    'root_8bit': 'ogg',
    'rouxls_battle': 'ogg',
    'rtenna_zoom': 'ogg',
    'rudebuster_boss': 'ogg',
    'ruins': 'ogg',
    'ruinspiano': 'ogg',
    'ruruskaado': 'ogg',
    'sansdate': 'ogg',
    'sfx_a_grab': 'ogg',
    'sfx_chainsaw': 'ogg',
    'sfx_disturbing': 'ogg',
    'sfx_hypergoner_charge': 'ogg',
    'sfx_hypergoner_laugh': 'ogg',
    'sfx_rainbowbeam_hold': 'ogg',
    'sfx_star': 'ogg',
    'sfx_woofenstein': 'ogg',
    'sfx_woofenstein_loop': 'ogg',
    'shinkansen': 'ogg',
    'shop': 'ogg',
    'shop1': 'ogg',
    'sigh_of_dog': 'ogg',
    'silence': 'ogg',
    'sink_noise': 'ogg',
    'smallshock': 'ogg',
    'snd_bigcar_yelp': 'ogg',
    'snd_closet_impact': 'ogg',
    'snd_dtrans_drone': 'ogg',
    'snd_dtrans_flip': 'ogg',
    'snd_dtrans_lw': 'ogg',
    'snd_dtrans_square': 'ogg',
    'snd_dtrans_twinkle': 'ogg',
    'snd_fountain_make': 'ogg',
    'snd_ghostappear': 'ogg',
    'snd_great_shine': 'ogg',
    'snd_him_quick': 'ogg',
    'snd_hitcar': 'ogg',
    'snd_hitcar_little': 'ogg',
    'snd_icespell': 'ogg',
    'snd_knight_fallingsword': 'ogg',
    'snd_smallcar_yelp': 'ogg',
    'snd_snowgrave': 'ogg',
    'snd_spell_pacify': 'ogg',
    'snoresymphony': 'ogg',
    'snowwalk': 'ogg',
    'snowy': 'ogg',
    'spamton_basement': 'ogg',
    'spamton_battle': 'ogg',
    'spamton_happy': 'ogg',
    'spamton_laugh_noise': 'ogg',
    'spamton_meeting': 'ogg',
    'spamton_meeting_intro': 'ogg',
    'spamton_neo_after': 'ogg',
    'spamton_neo_meeting': 'ogg',
    'spamton_neo_mix_ex_wip': 'ogg',
    'spider': 'ogg',
    'spoopy': 'ogg',
    'spoopy_holiday': 'ogg',
    'spoopy_wave': 'ogg',
    'star': 'ogg',
    'stealth': 'ogg',
    'sticksnap': 'ogg',
    'story': 'ogg',
    'story_stuck': 'ogg',
    's_neo': 'ogg',
    's_neo_clip': 'ogg',
    'temshop': 'ogg',
    'temvillage': 'ogg',
    'tenna_battle': 'ogg',
    'tenna_battle_guitar': 'ogg',
    'tenna_battle_old': 'ogg',
    'tenna_island': 'ogg',
    'tense': 'ogg',
    'tension': 'ogg',
    'the_dark_truth': 'ogg',
    'THE_HOLY': 'ogg',
    'thrashmachine': 'ogg',
    'tone2': 'ogg',
    'tone3': 'ogg',
    'toomuch': 'ogg',
    'toriel': 'ogg',
    'town': 'ogg',
    'town@chut': 'ogg',
    'tv': 'ogg',
    'tvromance': 'ogg',
    'tv_changingroom': 'ogg',
    'TV_GAME': 'ogg',
    'tv_hall_of_fame': 'ogg',
    'tv_noise': 'ogg',
    'tv_results_screen': 'ogg',
    'tv_world': 'ogg',
    'undyneboss': 'ogg',
    'undynefast': 'ogg',
    'undynepiano': 'ogg',
    'undynescary': 'ogg',
    'undynetheme': 'ogg',
    'undynetruetheme': 'ogg',
    'vsasgore': 'ogg',
    'vs_susie': 'ogg',
    'w': 'ogg',
    'waterfall': 'ogg',
    'waterquiet': 'ogg',
    'wawa': 'ogg',
    'whoopee': 'ogg',
    'wind': 'ogg',
    'wind@chut': 'ogg',
    'wind_highplace': 'ogg',
    'xpart': 'ogg',
    'xpart_2': 'ogg',
    'xpart_a': 'ogg',
    'xpart_b': 'ogg',
    'xpart_back': 'ogg',
    'x_undyne': 'ogg',
    'x_undyne_pre': 'ogg',
    'yourbestfriend_3': 'ogg',
    'zzz_c': 'ogg',
    'zzz_c2': 'ogg',
    'zz_megalovania': 'ogg',
    'z_ending': 'ogg',
    'snd_bombfall@chut': 'ogg',
    'snd_bombsplosion@chut': 'wav',
    'snd_break1_c@chut': 'wav',
    'snd_break2_c@chut': 'wav',
    'snd_buzzing@chut': 'ogg',
    'snd_damage_c@chut': 'wav',
    'snd_elecdoor_close@chut': 'wav',
    'snd_elecdoor_open@chut': 'wav',
    'snd_flameloop@chut': 'ogg',
    'snd_gameover_broken@chut': 'wav',
    'snd_heavydamage@chut': 'ogg',
    'snd_hurt1_c@chut': 'wav',
    'snd_instanoise@chut': 'wav',
    'snd_undynestep@chut': 'wav'
  };
export { jv as a, jg as b, hQ as c, hP as d, hU as e };
function hH(hI, hu) {
  var hf = new URL(hI, hu).href,
    hW = globalThis.__drWarm;
  return (hW ? hW(hf) : Promise.resolve()).then(function () {
    return import(hf).catch(function (hX) {
      try {
        hX.reload = !0x0, hX.what = "the game code";
      } catch (hY) {}
      throw hX;
    });
  });
}