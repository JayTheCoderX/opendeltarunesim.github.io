import { o as i } from "./c-E3FAV6Z4.js";
import { k as v } from "./c-TW2FVSA5.js";
import { k as g } from "./c-H2HTZPEL.js";
import { l as s } from "./c-V7HIBOZL.js";
import { b as e, c as k } from "./c-O567UJ4Y.js";
import { C as n, G as o, J as Q0, d as Q1, g as Q2, s as Q3 } from "./c-QFDZPUX2.js";
import { a as Q4, c as Q5, e as Q6, f as Q7, g as Q8, o as Q9 } from "./c-DTW63MWW.js";
import { f as QQ, g as Qj, i as QT } from "./c-3ELH3LBH.js";
import { a as QL, b as Qh, c as Qd, d as QP, f as QU, j as QH, n as QI, p as Qu, q as Qf } from "./c-MYK6C3LF.js";
import { H as QW, M as QX, Q as QY, R as QB, S as QC, g as Qx, l as QG, n as QN } from "./c-ZQQWH6UG.js";
import { A as Qp, B as QM, C as Qv, Ib as QJ, N as Qg, Nb as QZ, Ob as QR, Ra as QS, Ta as Ql, h as Qz, l as QF, m as Qc, na as Qw, o as Qq, oc as Qa, pa as QD, pb as QE, qb as QA, r as Qy, s as Qk, t as Qn, tc as Qo, u as QV, v as Qr, x as QK, xb as Qb, y as Qm, z as QO } from "./c-PBMEVLU6.js";
import { a as j0, c as j1, e as j2, g as j3, l as j4 } from "./c-XSSGDLV7.js";
j4();
var j5 = {};
j1(j5, {
  FIGHTS: () => jX,
  SOUNDS: () => j7,
  SPRITES: () => j6,
  obj_blockbullet_fall: () => ju,
  obj_bloxer_enemy: () => jW,
  obj_spareanim: () => jH,
  setupStats: () => jT
});
j4();
var j6 = ["spr_blockguy_overworld", "spr_blockguy_spared", "spr_blockguy_part", "spr_blockguy_part_hurt", "spr_blockbullet", "spr_blockbullet_mini", "spr_sparestar_anim", "spr_battleblcon_long"];
var j7 = ["snd_spare"];
var j8 = j0(hI => "[C]", "scr_get_input_name");
var j9 = Qc(8421504);
var jQ = Qc(65535);
var jj = Qc(16777215);
function jT(hI) {
  Qx.monstername[hI] = "Bloxer";
  Qx.monstermaxhp[hI] = 130;
  Qx.monsterhp[hI] = 130;
  Qx.monsterat[hI] = 9;
  Qx.monsterdf[hI] = 2;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 38;
  Qx.sparepoint[hI] = 10;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Rearrange";
  if (QN(2) && Qx.plot >= 150) {
    Qx.canact[hI][2] = 1;
    Qx.actname[hI][2] = "Rival";
    Qx.actactor[hI][2] = 2;
  }
}
j0(jT, "setupStats");
var jL = {
  spr_blockbullet_mini: {
    w: 34,
    h: 28,
    bb: [4, 4, 29, 23]
  },
  spr_blockguy_spared: {
    w: 38,
    h: 54,
    bb: [0, 0, 37, 53]
  }
};
function jh(hI) {
  let hu = Qg[hI];
  return hu || jL[hI] || {
    w: 0,
    h: 0,
    bb: [0, 0, 0, 0]
  };
}
j0(jh, "sprDims");
function jd(hI, hu, hf, hW) {
  for (let hX of Qb.list) {
    if (hX.destroyed || hX === hW || !hX.is(hf)) {
      continue;
    }
    let hY = jh(hX.sprite_index);
    if (!hY || hY.w === 0) {
      continue;
    }
    let hB = hY.ox || 0;
    let hC = hY.oy || 0;
    let hx = hY.bb;
    let hG = hX.x + (hx[0] - hB) * hX.image_xscale;
    let hN = hX.x + (hx[2] + 1 - hB) * hX.image_xscale;
    let hp = hX.y + (hx[1] - hC) * hX.image_yscale;
    let hM = hX.y + (hx[3] + 1 - hC) * hX.image_yscale;
    if (hI >= Math.min(hG, hN) && hI < Math.max(hG, hN) && hu >= Math.min(hp, hM) && hu < Math.max(hp, hM)) {
      return hX;
    }
  }
  return null;
}
j0(jd, "collision_point");
function jP(hI, hu, hf, hW, hX, hY) {
  let hB = hI.ctx;
  hB.save();
  hB.globalAlpha = hI.alpha;
  hB.strokeStyle = hB.fillStyle = hI.color;
  hB.lineWidth = 1;
  let hC = hW - hu;
  let hx = hX - hf;
  let hG = Math.hypot(hC, hx);
  hB.beginPath();
  hB.moveTo(hu, hf);
  hB.lineTo(hW, hX);
  hB.stroke();
  if (hG !== 0) {
    if (hY > hG) {
      hY = hG;
    }
    let hN = hC / hG;
    let hp = hx / hG;
    let hM = hW - hN * hY;
    let hv = hX - hp * hY;
    hB.beginPath();
    hB.moveTo(hW, hX);
    hB.lineTo(hM + hp * hY / 3, hv - hN * hY / 3);
    hB.lineTo(hM - hp * hY / 3, hv + hN * hY / 3);
    hB.closePath();
    hB.fill();
  }
  hB.restore();
}
j0(jP, "draw_arrow");
var jU = class hJ extends QE {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Ql("snd_spare");
    QS("snd_spare");
  }
  draw(hI) {
    let hu = this.t;
    if (hu >= 6 && hu <= 26) {
      this.afterimage += 1;
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (hu < 6) {
      if (hu < 5) {
        hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let hf = hu / 5;
      if (hf > 1) {
        hf = 1;
      }
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, hf - this.tone / 5);
    }
    if (hu >= 1 && hu <= 5) {
      for (let hW = 0; hW < 2; hW++) {
        let hX = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
        hX.image_xscale = 2;
        hX.image_yscale = 2;
        hX.sprite_index = "spr_sparestar_anim";
        hX.image_alpha = 2;
        hX.image_speed = 0.25;
        hX.hspeed = -3;
        hX.gravity = 0.5;
        hX.gravity_direction = 0;
        this.star[this.starcount] = hX;
        this.starcount += 1;
      }
    }
    if (hu >= 5 && hu <= 30) {
      for (let hY = 0; hY < this.starcount; hY++) {
        let hB = this.star[hY];
        if (hB && !hB.destroyed) {
          hB.image_angle += 10;
          hB.image_alpha -= 0.1;
          if (hB.image_alpha <= 0) {
            hB.instance_destroy();
          }
        }
      }
    }
    if (hu >= 5 && hu < 10) {
      this.tone += 1;
    }
    if (hu >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let hC = 0; hC < this.starcount; hC++) {
        let hx = this.star[hC];
        if (hx && !hx.destroyed) {
          hx.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
j0(jU, "obj_spareanim");
j2(jU, "kinds", QA("obj_spareanim", QE));
j2(jU, "defaultDepth", 0);
var jH = jU;
var jI = class hg extends Q6 {
  get sprite_width() {
    return jh(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return jh(this.sprite_index).h * Math.abs(this.image_yscale);
  }
  create() {
    this.active = 0;
    this.visible = false;
    this.image_alpha = 0;
    this.con = 0;
    this.xpos = Qy(0, 1, 2, 3);
    this.ypos = -8;
    this.fallspeed = 5;
    this.falltimer = 0;
    this.halt = 0;
  }
  step() {
    if (this.con === 1) {
      this.active = 1;
      this.visible = true;
      this.image_alpha += 0.15;
      if (this.image_alpha >= 1) {
        this.con = 2;
      }
    }
    if (this.con === 2) {
      this.falltimer += 1;
      if (this.falltimer >= this.fallspeed) {
        if (this.ypos < 0 && !jd(this.x + this.sprite_width / 2, this.y + this.sprite_height * 1.5, "obj_blockbullet_fall", this)) {
          this.ypos += 1;
        } else {
          this.halt = 1;
        }
        this.falltimer = 0;
      }
    }
    if (this.con === 0) {
      this.con = 1;
    }
    if (this.con === 3) {
      if (this.image_alpha <= 0.2) {
        this.instance_destroy();
      }
      this.active = 0;
      this.image_alpha -= 0.2;
    }
    let hI = Qb.first("obj_battlesolid");
    if (hI) {
      let hu = hI.x - hI.sprite_width / 2 + 8;
      this.x = hu + this.xpos * this.sprite_width;
      let hf = hI.y + hI.sprite_height / 2 - 3 - this.sprite_height;
      this.y = hf + this.ypos * this.sprite_height;
    }
    if (this.grazed === 1) {
      this.grazepoints = 0;
      this.timepoints = 0;
    }
  }
};
j0(jI, "obj_blockbullet_fall");
j2(jI, "kinds", QA("obj_blockbullet_fall", Q6));
j2(jI, "defaultDepth", 0);
j2(jI, "defaultSprite", "spr_blockbullet_mini");
var ju = jI;
e({
  26: (hI, hu) => {
    Qb.with("obj_regularbullet", hW => {
      if (hW.sprite_index === "spr_blockbullet") {
        hW.image_alpha += 0.1;
      }
    });
    let hf = 35;
    if (QW() === 2) {
      hf = 52.5;
    }
    if (QW() === 3) {
      hf = 77;
    }
    if (hI.btimer >= hf) {
      let hW = -60;
      let hX = -80 + Qq(160);
      hW += hX;
      let hY = -hX / 160;
      let hB = -2;
      for (let hC = 0; hC < 2; hC++) {
        let hx = Qy(0, 1, 2);
        let hG = Qy(0, 1, 2);
        for (let hN = 0; hN < 2; hN++) {
          let hp = QJ(500 + hC * 80, 140 + hW + hN * 80, Q7);
          Q4(hI, hp);
          if (hN === hx) {
            hp.y += Qy(0, 40);
          }
          if (hC === 1 && hN === 1) {
            hp.x += Qy(0, -40);
            hp.y = 140 + hW + Qy(0, 40) + hN * 80;
          }
          hp.hspeed = hB;
          hp.vspeed = hY;
          hp.friction = -0.07;
          if (QW() >= 2) {
            hp.friction = -0.1;
          }
          hp.sprite_index = "spr_blockbullet";
          hp.image_alpha = 0;
        }
      }
      hI.btimer = 0;
    }
  },
  27: (hI, hu) => {
    let hf = 15;
    if (QW() === 2) {
      hf = 25.5;
    }
    if (QW() === 3) {
      hf = 34.5;
    }
    let hW = hu.bs;
    if (!hW) {
      return;
    }
    let hX = hW.x - hW.sprite_width / 2 + 8;
    let hY = hW.y + hW.sprite_height / 2 - 15;
    if (hI.btimer >= hf) {
      let hN = hI.made;
      hI.made = Qy(0, 1, 2, 3);
      if (hI.made === hN) {
        hI.made = Qy(0, 1, 2, 3);
      }
      hI.btimer = 0;
      let hp = QJ(100, 100, ju);
      hp.xpos = hI.made;
      Q4(hI, hp);
      let hM = jd(hX + hI.made * hp.sprite_width + 8, hY - hp.sprite_height * 3 - 10, "obj_blockbullet_fall", null);
      if (hM && hM.halt === 1) {
        hp.instance_destroy();
      }
    }
    let hB = jd(hX + 15, hY, "obj_blockbullet_fall", null);
    let hC = jd(hX + 15 + 34, hY, "obj_blockbullet_fall", null);
    let hx = jd(hX + 15 + 68, hY, "obj_blockbullet_fall", null);
    let hG = jd(hX + 15 + 102, hY, "obj_blockbullet_fall", null);
    if (hB && hC && hx && hG) {
      hB.con = 3;
      hC.con = 3;
      hx.con = 3;
      hG.con = 3;
    }
  }
});
var jf = class hZ extends Q3 {
  get sprite_width() {
    return jh(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return jh(this.sprite_index).h * Math.abs(this.image_yscale);
  }
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
      shakex: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      fixed: 0,
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
      idlesprite: "spr_blockguy_overworld",
      hurtsprite: "spr_blockguy_overworld",
      sparedsprite: "spr_blockguy_spared"
    });
    let hI = Qy(0, 1, 2, 3);
    this.headpart = 1;
    this.part = [0, 0, 0, 0, 0];
    if (hI === 0) {
      this.headpart = 3;
      this.part[1] = 2;
      this.part[2] = 3;
      this.part[3] = 1;
    }
    if (hI === 1) {
      this.headpart = 3;
      this.part[1] = 3;
      this.part[2] = 2;
      this.part[3] = 1;
    }
    if (hI === 2) {
      this.headpart = 1;
      this.part[1] = 1;
      this.part[2] = 3;
      this.part[3] = 2;
    }
    if (hI === 3) {
      this.headpart = 2;
      this.part[1] = 2;
      this.part[2] = 1;
      this.part[3] = 3;
    }
    this.part[4] = 4;
    this.maxpart = 5;
    this.siner = 0;
    this.floatsin = 0;
    this.party = [28, 54, 70];
    this.floating = 0;
    this.swaptime = 10;
    this.bodyfade = 0;
    this.bodyalpha = 1;
    this.swapx = 0;
    this.sinmomentum = 0;
    this.custom = [4.5, 3, 1.5];
    this.select = [-1, -1, -1];
    this.selectpart = [0, 0, 0];
    this.partyb = [0, 0, 0];
    this.selecty = 0;
    this.selected = 0;
    this.selecttotal = 0;
    this.selectx = [0];
    this.movex = [0, 0, 0];
    this.threebuffer = 0;
    this.finishtimer = 0;
    this.hurk = 0;
    this.xspeed = 0;
    this.scolor = [j9, j9, j9];
    this.introtimer = 0;
    this.idealy = [0, 0, 0, 0, 0];
    this.cury = [0, 0, 0, 0, 0];
    this.yfactor = [0, 0, 0, 0, 0];
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (hI !== 11 && hI === 10) {
      let hu = QJ(this.x, this.y, jH);
      hu.sprite_index = this.sparedsprite;
      hu.image_index = 0;
      hu.image_xscale = this.image_xscale;
      hu.image_yscale = this.image_yscale;
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con += 1;
    }
  }
  step() {
    let hI = this.myself;
    if (Qx.monster[hI] === 1) {
      if (Qx.mnfight === 1 && this.talked === 0) {
        QY(this);
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        Qx.typer = 50;
        Qx.msg = new Array(100).fill(" ");
        let hu = Qy(0, 1, 2, 3);
        if (hu === 0) {
          Qx.msg[0] = "HOOH...! You&interrupted my&training...!";
        }
        if (hu === 1) {
          Qx.msg[0] = "GOOH...! I'm&gonna knock&your block&off...!";
        }
        if (hu === 2) {
          Qx.msg[0] = "Let's see how&you stack&up...! HIYA!!";
        }
        if (hu === 3) {
          Qx.msg[0] = "Let me show&you my&training!&YIHA!!";
        }
        if (this.acting === 2) {
          Qx.msg[0] = "ARRGH!!";
          if (this.part[2] === 3) {
            Qx.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY ABS!";
          }
          if (this.part[1] === 3) {
            Qx.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY FACE!!";
          }
          if (this.part[1] === 2) {
            Qx.msg[0] = "ARRGH!! NO!!&MY ABS ARE&MY FACE!!";
          }
          if (this.part[1] === 1) {
            Qx.msg[0] = "ARRGH!! NO!!&MY FACE IS&MY FACE!!&Wait...";
          }
          if (Qx.mercymod[hI] >= 100) {
            Qx.msg[0] = "Oh, you mixed&me up all&nice~";
          }
        }
        if (this.acting === 3) {
          Qx.msg[0] = "My momentum&is totally&blocked&up...";
        }
        QT(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (Qw() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          Qb.with("obj_writer", hf => hf.instance_destroy());
          Qb.with("obj_battleblcon", hf => hf.instance_destroy());
          Qx.mnfight = 2;
        }
        if (Qx.mnfight === 2) {
          if (!Qb.exists("obj_moveheart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let hf = Qy(0, 1);
          let hW = 1;
          if (QW() >= 2 && hI >= 1) {
            hW = 0;
          }
          if (hf === 0 && hW === 1) {
            let hY = QJ(this.x, this.y, k);
            hY.type = 26;
            hY.target = this.mytarget;
            hY.damage = Qx.monsterat[hI] * 5;
            hY.grazepoints = 5;
            hY.timepoints = 2;
          } else {
            let hB = QJ(this.x, this.y, k);
            hB.type = 27;
            hB.target = this.mytarget;
            hB.damage = Qx.monsterat[hI] * 5;
            hB.grazepoints = 5;
          }
          this.turns += 1;
          Qx.turntimer = 170;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          let hX = Qy(0, 1, 2, 3, 4);
          if (hX === 0) {
            Qx.battlemsg[0] = "* Bloxer is thinking about training.";
          }
          if (hX === 1) {
            Qx.battlemsg[0] = "* Bloxer is thinking about trains.";
          }
          if (hX === 2) {
            Qx.battlemsg[0] = "* Bloxer is thinking about training wheels.";
          }
          if (hX === 3) {
            Qx.battlemsg[0] = "* Bloxer considers building a house out of its own body.";
          }
          if (hX === 4) {
            Qx.battlemsg[0] = "* Smells like freshly-printed plastic.";
          }
          if (Qx.monsterstatus[hI] === 1) {
            Qx.battlemsg[0] = "* Bloxer is starting to break apart with exhaustion.";
          }
          if (Qx.mercymod[hI] >= Qx.mercymax[hI]) {
            Qx.battlemsg[0] = "* Bloxer radiates with the spirit of joy.";
          }
        } else {
          Qx.turntimer = 120;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Qx.mercymod[hI] = 999;
        }
        if (this.battlecancel === 2) {
          Qb.with("obj_battlecontroller", hC => {
            hC.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (Qx.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* BLOXER - AT 9 DF 2&* Loves: Training^1. Hates: Body being the wrong shape/%";
        Qj();
      }
      if (this.acting === 2 && this.actcon === 0) {
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* Press " + j8(6) + " to choose:&  #1 HEAD, #2 BODY, #3 LEGS.";
        Qx.mercymod[hI] = 0;
        Qj();
        this.actcon = 10;
        this.swaptime = 1;
        this.floatsin = 0;
        this.swapx = 0;
        this.sinmomentum = 0;
        this.party[0] = 28;
        this.party[1] = 54;
        this.party[2] = 70;
        this.select[0] = -1;
        this.select[1] = -1;
        this.select[2] = -1;
        this.selecttotal = 0;
        this.movex[0] = 0;
        this.movex[1] = 0;
        this.movex[2] = 0;
        this.finishtimer = 0;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* Susie became antagonistic!/";
        let hC = Qy(0, 1, 2);
        Qx.msg[1] = "* Why bother training^1? You'll NEVER beat me./";
        if (hC === 1) {
          Qx.msg[1] = "* Why train^1? You're still 100 years too early to beat me./";
        }
        if (hC === 2) {
          Qx.msg[1] = "* Training^1? Yeah^1, like I need that to beat you down./";
        }
        Qx.msg[2] = "* The enemies became \\cBTIRED\\cW.../%";
        for (let hx = 0; hx < 3; hx++) {
          Qx.monstercomment[hx] = "(Tired)";
          Qx.monsterstatus[hx] = 1;
        }
        Qj();
      }
      if (this.actcon === 1 && !Qb.exists("obj_writer")) {
        this.actcon = 0;
        o();
      }
      if (this.actcon === 10 && this.swaptime === 0) {
        Qb.with("obj_writer", hG => hG.instance_destroy());
        Qx.msg = new Array(100).fill(" ");
        if (Qx.mercymod[hI] >= 100) {
          Qx.msg[0] = "* Bloxer is pleased with its new self!/%";
          this.fixed = 1;
        } else {
          Qx.msg[0] = "* Bloxer is still unhappy with its self.../%";
        }
        Qj();
        this.actcon = 1;
      }
    }
    if (Qx.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(hI) {
    let hu = this.myself;
    let hf = this.part;
    let hW = this.movex;
    let hX = this.partyb;
    let hY = this.select;
    this.threebuffer -= 1;
    let hB = QM(this.siner / 4);
    let hC = Qv(this.siner / 4);
    if (this.swaptime === 5) {
      let hx = 0;
      for (let hG = 0; hG < 3; hG++) {
        hW[hG] += this.xspeed;
        if (hW[hG] <= 0) {
          hW[hG] = 0;
          hx += 1;
        }
      }
      if (hx >= 3) {
        this.swaptime = 6;
        hf[1] = this.selectpart[0];
        hf[2] = this.selectpart[1];
        hf[3] = this.selectpart[2];
        if (hf[1] === 1 && hf[2] === 2 && hf[3] === 3) {
          hf[1] = 6;
          QX(hu, 100);
        }
      } else {
        this.xspeed -= 2;
        hI.draw_sprite_ext("spr_blockguy_part", hf[3], this.x + hW[2], hX[2], 2, 2, 0, Qz.white, 1);
        hI.draw_sprite_ext("spr_blockguy_part", hf[2], this.x + hW[1], hX[1], 2, 2, 0, Qz.white, 1);
        hI.draw_sprite_ext("spr_blockguy_part", hf[1], this.x + hW[0], hX[0], 2, 2, 0, Qz.white, 1);
      }
    }
    if (this.swaptime === 2 || this.swaptime === 3) {
      if (this.sinmomentum < 0.8) {
        this.sinmomentum += 0.05;
      }
      this.floatsin += this.sinmomentum;
      if (this.threebuffer <= 0) {
        this.selecty = this.y + 30 + this.selecttotal * 26;
      }
      if (hY[0] < 0) {
        hX[0] = this.y + 53 + QM(this.floatsin / 8 + this.custom[0]) * 25;
      }
      if (hY[1] < 0) {
        hX[1] = this.y + 53 + QM(this.floatsin / 8 + this.custom[1]) * 25;
      }
      if (hY[2] < 0) {
        hX[2] = this.y + 53 + QM(this.floatsin / 8 + this.custom[2]) * 25;
      }
      let hN = -1;
      let hp = 99;
      for (let hS = 0; hS < 3; hS++) {
        this.scolor[hS] = j9;
        if (hY[hS] < 0) {
          let hl = Qp(hX[hS] - this.selecty);
          if (hl < hp && hl < 24) {
            hp = hl;
            hN = hS;
          }
        } else {
          if (hW[hS] < 60) {
            hW[hS] += 6;
          }
          this.scolor[hS] = jQ;
          let hz = this.y + 28 + hY[hS] * 25;
          if (Qp(hX[hS] - hz) < 6) {
            hX[hS] = hz;
          }
          if (hX[hS] < hz) {
            hX[hS] += 6;
          }
          if (hX[hS] > hz) {
            hX[hS] -= 6;
          }
        }
      }
      let hM = Qz.white;
      for (let hF = 0; hF < 3; hF++) {
        if (hN === hF) {
          this.scolor[hF] = jj;
          hM = Qz.yellow;
        }
      }
      hI.draw_sprite_ext("spr_blockguy_part", hf[3], this.x + hW[2], hX[2], 2, 2, 0, this.scolor[2], 1);
      hI.draw_sprite_ext("spr_blockguy_part", hf[2], this.x + hW[1], hX[1], 2, 2, 0, this.scolor[1], 1);
      hI.draw_sprite_ext("spr_blockguy_part", hf[1], this.x + hW[0], hX[0], 2, 2, 0, this.scolor[0], 1);
      let hv = this.threebuffer * 4;
      if (hv < 0) {
        hv = 0;
      }
      let hR = 0;
      if (this.threebuffer === 1) {
        hR = 15;
      }
      hI.draw_set_color(hM);
      if (this.finishtimer < 8 && this.selecttotal < this.maxpart - 2) {
        jP(hI, this.x - 50 + QM(this.floatsin / 6) * 2 + hv, this.selecty + 10 + hR, this.x - 10 + QM(this.floatsin / 6) * 2 + hv, this.selecty + 10 + hR, 16);
      }
      if (QD() && this.threebuffer < 0 && this.selecttotal < this.maxpart - 2) {
        if (hN >= 0) {
          this.selectpart[this.selecttotal] = hf[1 + hN];
          hY[hN] = this.selecttotal;
          this.selecttotal += 1;
          this.threebuffer = 6;
        }
        if (this.selecttotal >= this.maxpart - 2) {
          this.swaptime = 3;
        }
      }
      if (this.swaptime === 3) {
        this.finishtimer += 1;
      }
      if (this.finishtimer >= 13) {
        this.swaptime = 5;
        this.xspeed = 4;
      }
    }
    if (this.swaptime === 0 || this.swaptime === 1 || this.swaptime === 6) {
      this.hurk = 0;
      if (this.state === 3) {
        this.hurk = 1;
        if (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 3) {
          Qx.monsterstatus[hu] = 1;
          if (Qx.monstercomment[hu] === " ") {
            Qx.monstercomment[hu] = "(Tired)";
          }
        }
        this.hurttimer -= 1;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (Qx.monster[hu] === 0) {
            this.hspeed = 10;
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
        }
      }
      if (this.swaptime === 0) {
        this.siner += 1;
      }
      if (this.swaptime === 1) {
        this.swapx += 2;
      }
      if (this.swaptime === 6) {
        if (this.swapx > 0) {
          this.swapx -= 2;
        }
        if (this.swapx <= 0) {
          this.swaptime = 0;
        }
      }
      if (this.swapx >= 16 && this.swaptime === 1) {
        this.swaptime = 2;
      }
      if (this.swaptime === 0 && hf[1] === 1 && hf[2] === 2 && hf[3] === 3) {
        hf[1] = 6;
      }
      if (this.swaptime === 1 && hf[1] === 6) {
        hf[1] = 1;
      }
      let hc = "spr_blockguy_part";
      if (this.hurk === 1) {
        hc = "spr_blockguy_part_hurt";
      }
      let hw = this.x;
      let hq = this.y;
      let hD = this.swapx;
      let hE = this.shakex;
      hI.draw_sprite_ext(hc, 5, hw - 24 + hB * 2 + hD * 1.5 + hE, hq + 54 + hC * 2, 2, 2, 0, Qz.white, 1);
      hI.draw_sprite_ext(hc, hf[4], hw - hB + hE, hq + 100 - hD, 2, 2, 0, Qz.white, 1);
      if (this.swaptime === 1 || this.swaptime === 6) {
        hI.draw_sprite_ext(hc, hf[0], hw + hB * 2 + hE, hq + hD, 2, 2, 0, Qz.white, 1);
      }
      hI.draw_sprite_ext(hc, hf[3], hw - 4 + hB * 2 + hE, hq + 78, 2, 2, 0, Qz.white, 1);
      hI.draw_sprite_ext(hc, hf[2], hw + 4 - hB * 2 + hE, hq + 54, 2, 2, 0, Qz.white, 1);
      hI.draw_sprite_ext(hc, hf[1], hw + hB * 2 + hE, hq + 28, 2, 2, 0, Qz.white, 1);
      if (this.swaptime === 0) {
        hI.draw_sprite_ext(hc, hf[0], hw + hB * 2 + hE, hq + hD, 2, 2, 0, Qz.white, 1);
      }
      if (this.state === 0 && this.flash === 1) {
        this.fsiner += 1;
        let hA = -Qv(this.fsiner / 5) * 0.4 + 0.6;
        hI.draw_sprite_white(hc, 5, hw - 24 + hB * 2 + hD * 1.5 + hE, hq + 54 + hC * 2, 2, 2, 0, hA);
        hI.draw_sprite_white(hc, hf[4], hw - hB + hE, hq + 100 - hD, 2, 2, 0, hA);
        if (this.swaptime === 1 || this.swaptime === 6) {
          hI.draw_sprite_white(hc, hf[0], hw + hB * 2 + hE, hq + hD, 2, 2, 0, hA);
        }
        hI.draw_sprite_white(hc, hf[3], hw - 4 + hB * 2 + hE, hq + 78, 2, 2, 0, hA);
        hI.draw_sprite_white(hc, hf[2], hw + 4 - hB * 2 + hE, hq + 54, 2, 2, 0, hA);
        hI.draw_sprite_white(hc, hf[1], hw + hB * 2 + hE, hq + 28, 2, 2, 0, hA);
      }
    }
    if (this.swaptime === 10) {
      this.introtimer = 0;
      this.idealy = [0, 28, 54, 78, 100];
      for (let hy = 0; hy < 5; hy++) {
        this.cury[hy] = 100;
        this.yfactor[hy] = (100 - this.idealy[hy]) / 16;
      }
      this.cury[0] = 78;
      this.yfactor[0] = 4.875;
      this.swaptime = 11;
    }
    if (this.swaptime === 11) {
      hI.draw_sprite_ext("spr_blockguy_part", 5, this.x - this.introtimer * 2 + 6, this.y + this.cury[2], 2, 2, 0, Qz.white, 1);
      for (let hk = 4; hk >= 0; hk--) {
        this.cury[hk] -= this.yfactor[hk];
        hI.draw_sprite_ext("spr_blockguy_part", hf[hk], this.x, this.y + this.cury[hk], 2, 2, 0, Qz.white, 1);
      }
      hI.draw_sprite_ext("spr_blockguy_part", hf[this.headpart], this.x, this.y + this.cury[this.headpart], 2, 2, 0, Qz.white, 1);
      hI.draw_sprite_ext("spr_blockguy_part", hf[0], this.x, this.y + this.cury[0], 2, 2, 0, Qz.white, 1);
      this.introtimer += 1;
      if (this.introtimer >= 16) {
        this.swaptime = 0;
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(jf, "obj_bloxer_enemy");
j2(jf, "kinds", QA("obj_bloxer_enemy", Q3));
j2(jf, "defaultDepth", 90);
j2(jf, "defaultSprite", "spr_blockguy_spared");
var jW = jf;
var jX = [{
  id: "bloxer",
  name: "Bloxer",
  chapter: 1,
  area: "Card Castle",
  desc: "Bloxer.#Rearrange its blocks.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: jW,
    type: 14,
    x: 480,
    y: 140,
    setup: jT
  }],
  battlemsg: "* Bloxer assembled!",
  encounterno: 18,
  music: "battle"
}, {
  id: "bloxer2",
  name: "Bloxer x2",
  chapter: 1,
  area: "Card Castle",
  desc: "Two Bloxers.#Falling bricks.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: jW,
    type: 14,
    x: 480,
    y: 60,
    setup: jT
  }, {
    cls: jW,
    type: 14,
    x: 460,
    y: 180,
    setup: jT
  }],
  battlemsg: "* Bloxers assembled!",
  encounterno: 19,
  music: "battle"
}];
j3(jW, "G.mnfight = 2;");
var jY = {};
j1(jY, {
  FIGHTS: () => jE,
  SOUNDS: () => jC,
  SPRITES: () => jB,
  obj_clubsbullet: () => jS,
  obj_clubsbullet_dark_t0: () => jz,
  obj_clubsenemy: () => jc,
  obj_defeatanim: () => jg,
  obj_spareanim: () => jv,
  setupStats: () => jp,
  setupStats16: () => jN,
  setupStats7: () => jG
});
j4();
var jB = ["spr_clubs_idle", "spr_clubs_hurt", "spr_clubs_spared", "spr_battleblcon_clubs", "spr_clubsbullet", "spr_clubsbullet_dark", "spr_clubsball_a", "spr_clubsball_b", "spr_clubsball_c", "spr_defeatsweat", "spr_sparestar_anim"];
var jC = ["snd_defeatrun", "snd_spare"];
var jx = j0(() => {
  Qx.msg = new Array(100).fill(" ");
}, "clearmsg");
function jG(hI) {
  Qx.monstername[hI] = "Clover";
  Qx.monstermaxhp[hI] = 270;
  Qx.monsterhp[hI] = 270;
  Qx.monsterat[hI] = 8;
  Qx.monsterdf[hI] = 1;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 43;
  Qx.sparepoint[hI] = 10;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  let hu = Qy(0, 1, 2);
  if (hu === 0) {
    Qx.canact[hI][1] = 1;
    Qx.actname[hI][1] = "Politics";
    Qx.canact[hI][2] = 1;
    Qx.actname[hI][2] = "Religion";
    Qx.canact[hI][3] = 1;
    Qx.actname[hI][3] = "Sports";
  }
  if (hu === 1) {
    Qx.canact[hI][1] = 1;
    Qx.actname[hI][1] = "Kindness";
    Qx.canact[hI][2] = 1;
    Qx.actname[hI][2] = "Cuteboys";
    Qx.canact[hI][3] = 1;
    Qx.actname[hI][3] = "GunControl";
  }
  if (hu === 2) {
    Qx.canact[hI][1] = 1;
    Qx.actname[hI][1] = "Trees";
    Qx.canact[hI][2] = 1;
    Qx.actname[hI][2] = "Ghosts";
    Qx.canact[hI][3] = 1;
    Qx.actname[hI][3] = "Games";
  }
  if (QN(2)) {
    Qx.canact[hI][4] = 1;
    Qx.actname[hI][4] = "Warning";
    Qx.actactor[hI][4] = 3;
  }
}
j0(jG, "setupStats7");
function jN(hI) {
  Qx.monstername[hI] = "Clover";
  Qx.monstermaxhp[hI] = 270;
  Qx.monsterhp[hI] = 270;
  Qx.monsterat[hI] = 6;
  Qx.monsterdf[hI] = 1;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 80;
  Qx.sparepoint[hI] = 10;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "TalkBday";
  Qx.actactor[hI][1] = 3;
  Qx.actname[hI][2] = "TalkBoys";
  Qx.canact[hI][2] = 1;
  Qx.actactor[hI][2] = 3;
  Qx.actname[hI][3] = "TalkSports";
  Qx.canact[hI][3] = 1;
  Qx.actactor[hI][3] = 3;
  Qx.actname[hI][4] = "TalkAnimals";
  Qx.canact[hI][4] = 1;
  Qx.actname[hI][5] = "TalkTrees";
  Qx.canact[hI][5] = 1;
  Qy(0, 1, 2);
}
j0(jN, "setupStats16");
var jp = jN;
var jM = class hn extends QE {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Ql("snd_spare");
    QS("snd_spare");
  }
  draw(hI) {
    let hu = this.sprite_index;
    let hf = this.image_index;
    let hW = this.image_xscale;
    let hX = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      hI.draw_sprite_white(hu, hf, this.x + this.afterimage * 4, this.y, hW, hX, 0, 0.7 - this.afterimage / 25);
      hI.draw_sprite_white(hu, hf, this.x + this.afterimage * 8, this.y, hW, hX, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        hI.draw_sprite_ext(hu, hf, this.x, this.y, hW, hX, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let hY = this.t / 5;
      if (hY > 1) {
        hY = 1;
      }
      hI.draw_sprite_white(hu, hf, this.x, this.y, hW, hX, 0, hY - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let hB = 0; hB < 2; hB += 1) {
        let hC = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
        hC.image_xscale = 2;
        hC.image_yscale = 2;
        hC.sprite_index = "spr_sparestar_anim";
        hC.image_alpha = 2;
        hC.image_speed = 0.25;
        hC.hspeed = -3;
        hC.gravity = 0.5;
        hC.gravity_direction = 0;
        this.star[this.starcount] = hC;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let hx = 0; hx < this.starcount; hx += 1) {
        let hG = this.star[hx];
        if (hG && !hG.destroyed) {
          hG.image_angle += 10;
          hG.image_alpha -= 0.1;
          if (hG.image_alpha <= 0) {
            hG.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let hN = 0; hN < this.starcount; hN += 1) {
        let hp = this.star[hN];
        if (hp && !hp.destroyed) {
          hp.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
j0(jM, "obj_spareanim");
j2(jM, "kinds", QA("obj_spareanim", QE));
j2(jM, "defaultDepth", 0);
var jv = jM;
var jJ = class ho extends QE {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    QS("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(hI) {
    if (this.t === 0) {
      this.draw_self(hI);
    }
    let hu = 0;
    if (this.g <= 5) {
      hu = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      hu = 1;
    }
    if (hu === 1) {
      hI.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let hf = 0; hf <= 80; hf += 1) {
        hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + hf * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + hf / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
j0(jJ, "obj_defeatanim");
j2(jJ, "kinds", QA("obj_defeatanim", QE));
j2(jJ, "defaultDepth", 0);
var jg = jJ;
function jZ(hI) {
  let hu = QJ(hI.x, hI.y, jg);
  hu.sprite_index = hI.sprite_index;
  hu.sprite_index = hI.hurtsprite;
  hu.image_index = 0;
  hu.image_xscale = hI.image_xscale;
  hu.image_yscale = hI.image_yscale;
  hI.instance_destroy();
}
j0(jZ, "scr_defeatrun");
var jR = class hV extends Q5 {
  create() {
    this.damage = 0;
    this.target = 0;
  }
  endStep() {
    if (this.destroyed || !QR(this, this.x, this.y, "obj_battlesolid")) {
      return;
    }
    let hI = (hu, hf, hW) => {
      let hX = QJ(this.x, this.y, Q7);
      if (!hX.destroyed) {
        hX.sprite_index = hu;
        hX.direction = this.direction + hf;
        hX.speed = this.speed + hW;
        hX.image_angle = this.image_angle;
        hX.damage = this.damage;
        hX.target = this.target;
        hX.grazepoints = 3;
        hX.timepoints = 2;
      }
    };
    hI("spr_clubsball_b", 0, -6);
    hI("spr_clubsball_c", -25, -8);
    hI("spr_clubsball_a", 25, -8);
    this.instance_destroy();
  }
};
j0(jR, "obj_clubsbullet");
j2(jR, "kinds", QA("obj_clubsbullet", Q5));
j2(jR, "defaultDepth", -20);
j2(jR, "defaultSprite", "spr_clubsbullet");
var jS = jR;
var jl = class hr extends Q9 {
  step() {
    if (this.type !== 0) {
      super.step();
      return;
    }
    this.dtimer += 1;
    let hI = Qb.first("obj_heart");
    if (this.dtimer === 15 || this.dtimer === 19 || this.dtimer === 23) {
      this.move_towards_point(hI ? hI.x + 8 : 320, hI ? hI.y + 8 : 170, 0.1);
      let hu = (hf, hW) => {
        let hX = QJ(this.x, this.y, Q7);
        if (!hX.destroyed) {
          hX.sprite_index = hf;
          hX.direction = this.direction + hW;
          hX.speed = 4;
          hX.image_angle = this.direction;
          hX.damage = this.damage;
          hX.target = this.target;
          hX.grazepoints = 2;
          hX.timepoints = 1;
        }
      };
      hu("spr_clubsball_b", 0);
      hu("spr_clubsball_c", -17);
      hu("spr_clubsball_a", 17);
    }
    if (this.dtimer === 25) {
      let hf = QJ(this.x, this.y, Qh);
      hf.sprite_index = this.sprite_index;
      hf.image_angle = this.image_angle;
      this.instance_destroy();
    }
  }
};
j0(jl, "obj_clubsbullet_dark_t0");
j2(jl, "kinds", QA("obj_clubsbullet_dark_t0", Q9));
var jz = jl;
e({
  2: hI => {
    if (hI.btimer >= hI.ratio * 20) {
      let hu = -20;
      if (hI.side === 1) {
        hu = 660;
      }
      let hf = hI.miny + Qq(hI.maxy - hI.miny);
      let hW = QJ(hu, hf, jS);
      hW.speed = 12;
      hW.damage = hI.damage;
      hW.target = hI.target;
      if (hI.side === 1) {
        hW.direction = 180;
        hW.image_angle = 180;
      }
      hI.btimer = 0;
    }
  },
  4: (hI, hu) => {
    if (hI.btimer >= hI.ratio * 30) {
      hI.btimer = 0;
      let hf = 225;
      if (hI.side === -1) {
        hf = 225;
      }
      if (hI.side === 1) {
        hf = 315;
      }
      let hW = 400;
      let hX = Qk(hW, hf);
      let hY = Qn(hW, hf);
      let hB = hu.heart;
      let hC = hB ? hB.x : 320;
      let hx = hB ? hB.y : 170;
      let hG = QJ(hC + 8 + hX, hx + 8 + hY, jz);
      hG.damage = hI.damage;
      hG.target = hI.target;
      hG.direction = hf + 180;
      hG.speed = 20;
      hG.friction = 1;
      hG.image_angle = hG.direction;
      if (hI.side === 1) {
        hI.side = -1;
      } else {
        hI.side = 1;
      }
    }
  }
});
var jF = class hK extends Q3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 150,
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
      manual: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      image_speed: 0,
      betray: 0,
      argue: 0,
      image_xscale: 2,
      image_yscale: 2,
      idlesprite: "spr_clubs_idle",
      hurtsprite: "spr_clubs_hurt",
      sparedsprite: "spr_clubs_spared",
      rtimer: 0
    });
    this.acted = [0, 0, 0, 0, 0, 0];
  }
  setupFn(hI) {
    if (Qx.monstertype[hI] === 7) {
      jG(hI);
    } else {
      jN(hI);
    }
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2 + 50;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2 + 40;
      this.setupFn(this.myself);
      return;
    }
    if (hI === 10) {
      this.spared();
      return;
    }
    super.userEvent(hI);
  }
  spared() {
    let hI = QJ(this.x, this.y, jv);
    hI.sprite_index = this.sparedsprite;
    hI.image_index = 0;
    hI.image_xscale = this.image_xscale;
    hI.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con += 1;
    }
  }
  blcon3(hI, hu, hf) {
    let hW = (hX, hY, hB, hC) => {
      jx();
      Qx.msg[0] = hC;
      let hx = QT(hX, hY, hB);
      if (hx) {
        hx.sprite_index = "spr_battleblcon_clubs";
        hx.image_index = hB - 4;
        hx.image_speed = 0;
      }
    };
    hW(this.x - 110, this.y - 10, 4, hI);
    hW(this.x - 125, this.y + 70, 5, hu);
    hW(this.x + 125, this.y - 10, 6, hf);
  }
  step() {
    let hI = this.myself;
    if (Qx.monster[hI] === 1) {
      if (Qx.mnfight === 1 && this.talked === 0) {
        QY(this);
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        Qx.typer = 50;
        let hu = Qy(0, 1, 2);
        let hf = "Nice mouth";
        let hW = "Anger mouth";
        let hX = "Smart Mouth";
        if (hu === 0) {
          hf = "Nice to&meet you!";
          hW = "Die!&Die!&Die!";
          hX = "Please&ignore&them.";
        }
        if (hu === 1) {
          hf = "Let's get&to know&you~";
          hW = "GET OUT&OF HERE!!";
          hX = "Sorry&about&this...";
        }
        if (hu === 2) {
          hf = "Nice&weather&today.";
          hW = "What?&It's just&awful!";
          hX = "Please&stop, you&two...";
        }
        if (this.acting === 2) {
          hf = "It's my&birthday~";
          hW = "WHAT!? NO!&It's MY&birthday!";
          hX = "We're&triplets...";
        }
        if (this.acting === 3) {
          hf = "Glasses&are cute,&I think...";
          hW = "Fluffy!&Glasses!&That's it!";
          hX = "HIM???&... err,&sure.";
        }
        if (this.acting === 4) {
          hf = "Spaghetti&and tennis&balls.";
          hW = "That's&GENIUS!";
          hX = "We really&agree&on it.";
        }
        if (this.acting === 5) {
          hf = "Animals&are kind&of nasty.";
          hW = "Just AWFUL&in&concept.";
          hX = "(Never&seen one,&but...)";
        }
        if (this.acting === 6) {
          hf = "I love&the smell&of trees.";
          hW = "Oh!&Me too!";
          hX = "Pollen&makes me...&Uh, sure!";
        }
        if (this.manual === 1) {
          hf = "Aww, he&MADE that!?&So caring!";
          hW = "It's SOOO&cute!&I want it!";
          hX = "(Isn't it&a bit...&boring?)";
        }
        this.blcon3(hf, hW, hX);
        Qb.with("obj_monsterparent", hY => {
          hY.talkmax = 210;
        });
        this.talked = 1;
        this.talktimer = 0;
        this.manual = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (Qw() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          Qb.with("obj_writer", hY => hY.instance_destroy());
          Qx.mnfight = 2;
        }
        if (Qx.mnfight === 2) {
          if (!Qb.exists("obj_moveheart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let hY = Qy(0, 1);
          let hB = QJ(this.x, this.y, k);
          hB.type = hY === 0 ? 2 : 4;
          hB.target = this.mytarget;
          hB.damage = Qx.monsterat[hI] * 5;
          this.turns += 1;
          Qx.turntimer = 150;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          let hC = Qy(0, 1, 2, 3, 4, 5);
          if (hC === 0) {
            Qx.battlemsg[0] = "* Clover flashes a trio of terrible smiles.";
          }
          if (hC === 1) {
            Qx.battlemsg[0] = "* Clover is bickering with herselves.";
          }
          if (hC === 2) {
            Qx.battlemsg[0] = "* Clover is whispering about cute boys.";
          }
          if (hC === 3) {
            Qx.battlemsg[0] = "* Clover is arguing about whose toothbrush is whose.";
          }
          if (hC === 4) {
            Qx.battlemsg[0] = "* Clover hums like an out-of-tune choir.";
          }
          if (hC === 5) {
            Qx.battlemsg[0] = "* Smells like clover and dew.";
          }
          if (Qx.monsterstatus[hI] === 1) {
            Qx.battlemsg[0] = "* Clover seems TIRED of discussing so much.";
          }
          if (Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 3) {
            Qx.battlemsg[0] = "* Clover starts to look wilted.";
          }
          if (Qx.mercymod[hI] >= Qx.mercymax[hI]) {
            Qx.msg[0] = "* Clover seems to be getting along with herselves.";
          }
          if (this.betray === 1) {
            Qx.battlemsg[0] = "* Clover's harmony was shattered by violence.";
          }
          this.betray = 0;
        } else {
          Qx.turntimer = 150;
        }
      }
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let hI = this.myself;
    let hu = () => Qb.exists("obj_writer");
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      jx();
      Qx.msg[0] = "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%";
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Qx.typer = 45;
      Qx.fc = 2;
      Qx.fe = 0;
      jx();
      Qx.msg[0] = "* Ummm^1, what would you like for your birthday?/%";
      this.argue += 1;
      QQ();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !hu()) {
      Qx.typer = 50;
      this.blcon3("Let's just&have a nice&chat~/%", "You IDIOT!&Ask for a&GIFT!!!/%", "(Just&discuss&our likes.)/%");
      this.actcon = 21;
    }
    if (this.actcon === 21 && !hu()) {
      jx();
      Qx.msg[0] = "* (Seems like you should talk about something else...)/%";
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Qx.typer = 45;
      Qx.fc = 2;
      Qx.fe = 0;
      jx();
      Qx.msg[0] = "* Ummm..^1. What kind of \"Boys\" do you like?/%";
      this.argue += 1;
      QQ();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !hu()) {
      Qx.typer = 50;
      if (this.acted[2] === 0) {
        QX(hI, 40);
        this.acted[2] = 1;
      }
      this.blcon3("Cute ones!&Hmm hmm~&/%", "NICE ONES,&like I AM!/%", "None...&Um, I mean,&all./%");
      this.actcon = 23;
    }
    if (this.actcon === 23 && !hu()) {
      jx();
      Qx.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      Qx.typer = 45;
      Qx.fc = 2;
      Qx.fe = 0;
      jx();
      Qx.msg[0] = "* Do you like^1, um..^1. Sports?/%";
      this.argue += 1;
      QQ();
      this.actcon = 24;
    }
    if (this.actcon === 24 && !hu()) {
      Qx.typer = 50;
      if (this.acted[3] === 0) {
        QX(hI, 40);
        this.acted[3] = 1;
      }
      this.blcon3("I wanna&eat a&football./%", "Sports!&My favorite&food!/%", "Oh!&I love you&two!/%");
      this.actcon = 25;
    }
    if (this.actcon === 25 && !hu()) {
      jx();
      Qx.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 5 && this.actcon === 0) {
      jx();
      Qx.msg[0] = "* You brought up the topic of Animals./";
      Qx.msg[1] = "* Clover didn't seem to care.../%";
      this.argue += 1;
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 6 && this.actcon === 0) {
      if (this.acted[5] === 0) {
        QX(hI, 40);
        this.acted[5] = 1;
      }
      jx();
      Qx.msg[0] = "* You brought up the topic of Trees^1. Clover seemed happy.../%";
      this.argue += 1;
      Qj();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !hu()) {
      if (this.argue >= 3) {
        Qx.monstercomment[hI] = "(Tired)";
        Qx.monsterstatus[hI] = 1;
      }
      this.actcon = 0;
      o();
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      if (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 2) {
        Qx.monsterstatus[hu] = 1;
        if (Qx.monstercomment[hu] === " ") {
          Qx.monstercomment[hu] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          Qx.flag[522] += 1;
          jZ(this);
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
        hI.draw_sprite_ext("spr_clubs_hurt", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let hf = "spr_clubs_idle";
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hf = "spr_clubs_spared";
      }
      hI.draw_sprite_ext(hf, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(hf, this.siner / 6, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(jF, "obj_clubsenemy");
j2(jF, "kinds", QA("obj_clubsenemy", Q3));
j2(jF, "defaultDepth", 90);
j2(jF, "defaultSprite", "spr_clubs_idle");
var jc = jF;
var jw = j0(() => {}, "none");
var jq = j0((hI, hu, hf, hW) => ({
  cls: null,
  type: 0,
  x: hf,
  y: hW,
  setup: jw,
  missing: hI,
  missingType: hu
}), "MISSING");
var ja = null;
try {
  let hb = await hH("./c-J62DCCBN.js", import.meta.url);
  if (hb && hb.obj_heartenemy) {
    ja = hb;
  }
} catch {
  ja = null;
}
var jD = ja ? {
  cls: ja.obj_heartenemy,
  type: 6,
  x: 420,
  y: 200,
  setup: ja.setupStats
} : jq("obj_heartenemy", 6, 420, 200);
var jE = [{
  id: "clover",
  name: "Clover",
  chapter: 1,
  area: "Field",
  desc: "Clover.#Three heads,#one flower.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: jc,
    type: 16,
    x: 400,
    y: 120,
    setup: jN
  }],
  battlemsg: "* Clover grew close!",
  encounterno: 8,
  music: "battle"
}, {
  id: "clover-hathy",
  name: "Clover & Hathy",
  chapter: 1,
  area: "Field",
  desc: "Clover and Hathy.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: jc,
    type: 7,
    x: 400,
    y: 30,
    setup: jG
  }, jD],
  battlemsg: "* Clover and Hathy grew close!",
  encounterno: 15,
  music: "battle"
}];
j3(jc, "G.mnfight = 2;");
var jA = {};
j1(jA, {
  FIGHTS: () => TJ,
  SOUNDS: () => jk,
  SPRITES: () => jy,
  obj_animation: () => T7,
  obj_chainking: () => TW,
  obj_chainpiece: () => TT,
  obj_fadechain: () => Th,
  obj_finalchain: () => TC,
  obj_growtangle_bouncer: () => Tu,
  obj_heartmarker: () => T1,
  obj_king_body: () => Tv,
  obj_king_boss: () => Tp,
  obj_nonsolid_growtangle: () => TH,
  obj_oflash: () => T4,
  obj_skychain: () => TP,
  obj_wavechain: () => TY,
  setupStats: () => jn
});
j4();
var jy = ["spr_chainking_idle", "spr_chainking_hurt", "spr_chainking_spin", "spr_chainking_toss", "spr_chainking_toss_idle", "spr_chainking_pullback", "spr_chainking_receive", "spr_chainpiece", "spr_chainfront", "spr_spadebullet", "spr_battlebg_wavechain", "spr_battlebg_1", "spr_battlebg_2", "spr_battlebg_spikes", "spr_bouncebox_spike", "spr_heartoutline", "spr_soulshining", "spr_susieb_idle_serious", "spr_susieb_attack_serious", "spr_diamondbullet_form"];
var jk = ["snd_dadblast", "snd_dadlaugh", "snd_criticalswing", "snd_chain_extend", "snd_chain_wave", "snd_locker", "snd_screenshake", "snd_bump", "snd_menumove", "snd_spearrise", "snd_power", "snd_boost"];
function jn(hI) {
  Qx.monstername[hI] = "King";
  Qx.monstermaxhp[hI] = 2800;
  Qx.monsterhp[hI] = 2800;
  Qx.monsterat[hI] = 8;
  Qx.monsterdf[hI] = 0;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 0;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 999;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actactor[hI][1] = 1;
  Qx.actname[hI][1] = "Talk";
  Qx.actdesc[hI][1] = " ";
  Qx.actcost[hI][1] = 0;
  Qx.canact[hI][2] = 1;
  Qx.actactor[hI][2] = 2;
  Qx.actname[hI][2] = "Talk";
  Qx.actdesc[hI][2] = " ";
  Qx.actcost[hI][2] = 0;
  Qx.canact[hI][3] = 1;
  Qx.actactor[hI][3] = 3;
  Qx.actname[hI][3] = "Talk";
  Qx.actdesc[hI][3] = " ";
  Qx.actcost[hI][3] = 0;
  if (Qx.tempflag[5] === 1) {
    Qx.canact[hI][1] = 1;
    Qx.actactor[hI][1] = 1;
    Qx.actname[hI][1] = "Courage";
    Qx.actdesc[hI][1] = "Defense#Boost";
    Qx.actcost[hI][1] = 62;
  }
  if (Qx.tempflag[6] === 1) {
    Qx.canact[hI][2] = 1;
    Qx.actactor[hI][2] = 2;
    Qx.actname[hI][2] = "RedBuster";
    Qx.actdesc[hI][2] = "Red#Damage";
    Qx.actcost[hI][2] = 150;
  }
  if (Qx.tempflag[7] === 1) {
    Qx.canact[hI][3] = 1;
    Qx.actactor[hI][3] = 3;
    Qx.actname[hI][3] = "DualHeal";
    Qx.actdesc[hI][3] = "Heals#everyone";
    Qx.actcost[hI][3] = 125;
  }
}
j0(jn, "setupStats");
var jo = j0((hI, hu) => {
  Qx.msg[hI] = Qx.plot >= 235 ? "\\TX \\F0 \\E" + hu + " \\FK \\TK %" : "\\TX \\F0 \\E" + hu + " \\TK %";
}, "scr_kingface");
var jV = j0((hI, hu) => {
  Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FS \\TS %";
}, "scr_susface");
var jr = j0((hI, hu) => {
  Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FR \\TR %";
}, "scr_ralface");
var jK = j0(hI => {
  Qx.msg[hI] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
var jb = 0;
var jm = 0;
var jO = j0(() => Qb.first("obj_heart"), "heart");
var T0 = class hm extends QE {};
j0(T0, "obj_heartmarker");
j2(T0, "kinds", QA("obj_heartmarker", QE));
j2(T0, "defaultDepth", 0);
j2(T0, "defaultSprite", "spr_diamondbullet_form");
j2(T0, "defaultVisible", false);
var T1 = T0;
function T2() {
  let hI = Qb.first("obj_herokris");
  let hu = QJ(hI ? hI.x + 10 : 90, hI ? hI.y + 40 : 140, QH);
  let hf = Qb.first("obj_heartmarker");
  if (hf) {
    hu.distx = hf.x;
    hu.disty = hf.y;
    let hW = Qr(hu.x, hu.y, hu.distx, hu.disty);
    hu.move_towards_point(hu.distx, hu.disty, hW / hu.flytime);
  }
  return hu;
}
j0(T2, "scr_moveheart_k");
var T3 = class hO extends QE {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = Qz.white;
  }
  draw(hI) {
    if (Qb.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let hu = Qg[this.sprite_index];
    if (hu) {
      let hf = hI.ctx;
      hf.save();
      hf.globalAlpha = Math.max(0, Math.min(1, QM(this.siner / 3)));
      hf.translate(this.x, this.y);
      hf.scale(this.image_xscale, this.image_yscale);
      hf.drawImage(hI.tinted(hu, hI.frame(this.sprite_index, this.image_index), this.flashcolor, true), -hu.ox, -hu.oy);
      hf.restore();
    }
    if (this.siner > 4 && QM(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
j0(T3, "obj_oflash");
j2(T3, "kinds", QA("obj_oflash", QE));
j2(T3, "defaultDepth", 0);
var T4 = T3;
function T5(hI) {
  let hu = QJ(hI.x, hI.y, T4);
  hu.image_xscale = hI.image_xscale;
  hu.image_speed = 0;
  hu.image_index = hI.image_index;
  hu.image_yscale = hI.image_yscale;
  hu.sprite_index = hI.sprite_index;
  hu.depth = hI.depth - 1;
  hu.target = hI;
  return hu;
}
j0(T5, "scr_oflash");
var T6 = class d0 extends QE {
  animationEnd() {
    this.instance_destroy();
  }
};
j0(T6, "obj_animation");
j2(T6, "kinds", QA("obj_animation", QE));
j2(T6, "defaultDepth", 0);
var T7 = T6;
function T8(hI) {
  let hu = QS(hI);
  if (hu) {
    hu.loop = true;
  }
  return hu;
}
j0(T8, "snd_loop");
function T9(hI) {
  if (hI) {
    try {
      hI.pause();
    } catch {}
  }
}
j0(T9, "snd_stop_h");
function TQ(hI, hu) {
  if (hI) {
    hI.playbackRate = hu;
  }
}
j0(TQ, "snd_pitch");
var Tj = class d1 extends Q5 {
  create() {
    this.siner = 0;
  }
  draw(hI) {
    this.siner += 0.5;
    hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + QM(this.siner / 4), this.y + Qv(this.siner / 4), this.image_xscale + QM(this.siner / 8) * 0.2, this.image_yscale + QM(this.siner / 8) * 0.2, this.image_angle, this.image_blend, this.image_alpha);
  }
};
j0(Tj, "obj_chainpiece");
j2(Tj, "kinds", QA("obj_chainpiece", Q5));
j2(Tj, "defaultDepth", 15);
j2(Tj, "defaultSprite", "spr_chainpiece");
var TT = Tj;
var TL = class d2 extends Q6 {
  create() {
    this.active = 1;
    this.timer = 0;
    this.bdir = Qq(360);
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  step() {
    this.timer += 1;
    if (this.timer >= 30) {
      this.active = 0;
      this.image_alpha -= 0.1;
      if (this.image_alpha <= 0) {
        this.instance_destroy();
        return;
      }
      this.hspeed += Qk(0.2, this.bdir);
      this.vspeed += Qn(0.2, this.bdir);
    }
  }
};
j0(TL, "obj_fadechain");
j2(TL, "kinds", QA("obj_fadechain", Q6));
j2(TL, "defaultDepth", 0);
j2(TL, "defaultSprite", "spr_chainpiece");
var Th = TL;
var Td = class d3 extends Q6 {
  create() {
    this.sons = -1;
    this.son = [];
    this.damage = 100;
    this.active = 1;
    let hI = jO();
    this.move_towards_point(hI ? hI.x + 8 : 320, hI ? hI.y + 8 : 170, 1);
    this.friction = -0.3;
    this.timer = 0;
    this.con = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundcon = 0;
    QS("snd_menumove");
  }
  step() {
    this.image_angle = this.direction;
    if (this.con === 0 && (this.timer += 1, this.timer >= 2)) {
      this.sons += 1;
      let hI = QJ(this.x, this.y, Th);
      this.son[this.sons] = hI;
      hI.image_angle = this.image_angle;
      hI.direction = this.direction;
      hI.speed = this.speed / 2.5;
      hI.active = 1;
      hI.damage = 10;
      Q4(this, hI);
      this.timer = 0;
    }
    if (this.sons >= 30) {
      this.instance_destroy();
    }
  }
  draw(hI) {
    this.draw_self(hI);
    let hu = 0;
    if (this.y < -20) {
      hu = 1;
    }
    if (this.x < jb - 20) {
      hu = 1;
    }
    if (this.x > jb + 660) {
      hu = 1;
    }
    if (hu === 1) {
      hI.draw_set_color(Qz.red);
      hI.draw_line_width(this.x, this.y, this.x + Qk(1000, this.direction), this.y + Qn(1000, this.direction), 1);
    }
    if (hu === 0 && this.soundcon === 0) {
      QS("snd_spearrise");
      this.soundcon = 1;
    }
  }
};
j0(Td, "obj_skychain");
j2(Td, "kinds", QA("obj_skychain", Q6));
j2(Td, "defaultDepth", 0);
j2(Td, "defaultSprite", "spr_chainfront");
var TP = Td;
var TU = class d4 extends QE {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.image_speed = 0;
    this.image_blend = QF(Qz.green, Qz.lime, 0.5);
  }
  step() {
    let hI = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      hI = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      hI = 1;
    }
    if (hI === 1) {
      if (this.growcon === 1) {
        this.timer += 1;
      }
      if (this.growcon === 3) {
        this.timer -= 1;
      }
      this.image_xscale = this.timer / this.maxtimer * 2;
      this.image_yscale = this.timer / this.maxtimer * 2;
      this.image_angle = 180 + this.timer / this.maxtimer * 180;
      this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5;
      let hu = QJ(this.x, this.y, Qh);
      hu.sprite_index = this.sprite_index;
      hu.image_xscale = this.image_xscale;
      hu.image_yscale = this.image_yscale;
      hu.image_angle = this.image_angle;
      hu.depth = this.depth - 1;
      hu.image_blend = this.image_blend;
      hu.image_alpha = 1 - this.image_alpha + 0.1;
      hu.image_speed = 0;
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.keep = 1;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    let hI = jO();
    if (!hI) {
      return;
    }
    let hu = this.x - this.sprite_width / 2;
    let hf = this.x + this.sprite_width / 2;
    let hW = this.y - this.sprite_height / 2;
    let hX = this.y + this.sprite_height / 2;
    if (hI.x < hu + 5) {
      hI.x = hu + 5;
    }
    if (hI.x > hf - 22) {
      hI.x = hf - 22;
    }
    if (hI.y < hW + 5) {
      hI.y = hW + 5;
    }
    if (hI.y > hX - 22) {
      hI.y = hX - 22;
    }
  }
  draw(hI) {
    hI.draw_sprite_ext(this.sprite_index, 1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    this.draw_self(hI);
  }
};
j0(TU, "obj_nonsolid_growtangle");
j2(TU, "kinds", QA("obj_nonsolid_growtangle", QE));
j2(TU, "defaultDepth", 5);
j2(TU, "defaultSprite", "spr_battlebg_wavechain");
var TH = TU;
var TI = class d5 extends Q8 {
  create() {
    this.image_speed = 0;
    this.image_xscale = 1.96;
    this.image_yscale = 1.96;
    this.initdir = Qy(45, 135, 225, 315);
    this.direction = this.initdir;
    this.speed = 0.1;
    this.active = 1;
    let hI = Qb.first("obj_growtangle");
    if (hI) {
      this.x = hI.x;
      this.y = hI.y;
      hI.megakeep = 1;
    }
    this.timer = 0;
    this.type = 0;
    this.con = 0;
    this.xx = jb;
    this.yy = jm;
    this.lx = 140 + this.xx;
    this.rx = 480 + this.xx;
    this.ux = 0 + this.yy;
    this.dx = 320 + this.yy;
    this.fadein = 0;
    this.spikecount = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.minitimer = 0;
    this.bumpnoise = 0;
    this.timerbonus = 0;
    this.wall_destroy = 0;
  }
  userEvent(hI) {
    if (hI === 5) {
      super.userEvent(5);
      return;
    }
    if (hI === 2) {
      Qb.with("obj_king_body", hu => {
        hu.active = 1;
      });
      Qb.with("obj_growtangle", hu => {
        hu.growcon = 3;
      });
      Qx.turntimer = 3;
      this.instance_destroy();
    }
  }
  endStep() {
    if (this.type === 0 && (this.con === 0 && (this.ux += 30, this.dx -= 30, this.lx += 30, this.rx -= 30, this.con = 0.4), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.6 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.6 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.2, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 1 && (this.con === 0 && (this.direction += Qq(20) - Qq(20), this.con = 0.5), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.hspeed >= 4.2 && (this.vspeed > 0 ? (this.vspeed += 0.1, this.hspeed -= 0.1) : (this.vspeed -= 0.1, this.hspeed -= 0.1)), this.hspeed <= -4.2 && (this.vspeed > 0 ? (this.vspeed += 0.1, this.hspeed += 0.1) : (this.vspeed -= 0.1, this.hspeed += 0.1)), this.vspeed >= 4.2 && (this.hspeed > 0 ? (this.hspeed += 0.1, this.vspeed -= 0.1) : (this.hspeed -= 0.1, this.vspeed -= 0.1)), this.vspeed <= -4.2 && (this.hspeed > 0 ? (this.hspeed += 0.1, this.vspeed += 0.1) : (this.hspeed -= 0.1, this.vspeed += 0.1)), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 1, this.timer >= 90 && (this.con = 1)), this.con === 1 && (this.speed -= 0.4, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 2 && (this.con === 0 && (this.direction += Qq(20) - Qq(20), this.con = 0.5, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 1, this.timer >= 70 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 3 && (this.con === 0 && (this.direction += Qq(20) - Qq(20), this.con = 0.4, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.4 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 4 && (this.con === 0 && (this.direction += Qq(10) - Qq(10), this.con = 0.5, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.5 && this.speed < 7 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 7 && (this.timer += 1, this.timer >= 90 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.active = 0;
      this.userEvent(2);
      return;
    }
    if (this.type === 5 && (this.con === 0 && (this.ux += 30, this.dx -= 30, this.lx += 30, this.rx -= 30, this.con = 0.4), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.2, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    let hI = Qb.first("obj_growtangle");
    if (hI) {
      hI.x = this.x;
      hI.y = this.y;
      let hu = this.x - this.sprite_width / 2;
      let hf = this.x + this.sprite_width / 2;
      let hW = this.y - this.sprite_height / 2;
      let hX = this.y + this.sprite_height / 2;
      if (hu < this.lx && this.hspeed < 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (hf > this.rx && this.hspeed > 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (hW < this.ux && this.vspeed < 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (hX > this.dx && this.vspeed > 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (this.bumpnoise === 1) {
        QS("snd_bump");
        QS("snd_screenshake");
        this.bumpnoise = 0;
        if (!Qb.exists("obj_shake")) {
          QJ(0, 0, Qf);
        }
      }
    }
    if (this.grazed === 1) {
      if (this.timerbonus === 0) {
        this.timer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
  draw(hI) {
    this.draw_self(hI);
    if (this.fadein < 10) {
      this.fadein += 1;
    }
    hI.draw_set_alpha(this.fadein / 10);
    hI.draw_set_color(Qz.white);
    hI.draw_rectangle(this.lx, this.ux, this.rx, this.dx, true);
    hI.draw_rectangle(this.lx + 1, this.ux + 1, this.rx - 1, this.dx - 1, true);
    hI.draw_set_alpha(1);
    let hu = this.sprite_width;
    let hf = this.sprite_height;
    let hW = Math.floor(hu / 11);
    let hX = this.x;
    let hY = this.y;
    let hB = this.fadein / 10;
    for (let hC = 0; hC < hW; hC += 1) {
      hI.draw_sprite_ext("spr_bouncebox_spike", 0, hX - hu / 2 + 3, hY - hf / 2 + hC * 11, 1, 1, 0, Qz.white, hB);
      hI.draw_sprite_ext("spr_bouncebox_spike", 0, hX + hu / 2 - hC * 11, hY - hf / 2 + 3, 1, 1, 270, Qz.white, hB);
      hI.draw_sprite_ext("spr_bouncebox_spike", 0, hX - hu / 2 + hC * 11, hY + hf / 2 - 2, 1, 1, 90, Qz.white, hB);
      hI.draw_sprite_ext("spr_bouncebox_spike", 0, hX + hu / 2 - 2, hY - hf / 2 + hC * 11, -1, 1, 0, Qz.white, hB);
    }
  }
};
j0(TI, "obj_growtangle_bouncer");
j2(TI, "kinds", QA("obj_growtangle_bouncer", Q8));
j2(TI, "defaultDepth", 4);
j2(TI, "defaultSprite", "spr_battlebg_2");
var Tu = TI;
var Tf = class d6 extends Q5 {
  create() {
    this.kingcon = 0;
    this.contimer = 0;
    this.image_speed = 0.334;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.t = 0;
    this.tmax = 180;
    this.subtype = 0;
    this.type = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundplayed = 0;
    this.chain = null;
  }
  step() {
    if (this.t === 0 && this.kingcon === 0) {
      this.sprite_index = "spr_chainking_toss";
      this.image_index = 0;
      this.image_speed = 0.5;
      this.kingcon = 1;
      this.soundplayed = 0;
      if (this.type === 2 && this.subtype === 1) {
        QS("snd_dadlaugh");
      } else {
        QS("snd_dadblast");
      }
    }
    if (this.kingcon === 1 && this.image_index >= 3) {
      if (this.image_index >= 2 && this.soundplayed === 0) {
        QS("snd_criticalswing");
        this.soundplayed = 1;
      }
      this.sprite_index = "spr_chainking_toss_idle";
      this.image_index = 0;
      this.image_speed = 0.334;
      this.kingcon = 2;
      if (this.type === 1) {
        this.chain = QJ(this.x - 24, this.y + 104, TY);
      }
      if (this.type === 2) {
        this.chain = QJ(this.x - 24, this.y + 104, TC);
      }
      if (this.chain) {
        Q4(this, this.chain);
        this.chain.type = this.subtype;
      }
    }
    this.t += 1;
  }
  destroy() {
    Qb.with("obj_king_boss", hI => {
      hI.visible = true;
      hI.active = 1;
    });
    Qb.with("obj_growtangle", hI => {
      hI.growcon = 3;
    });
    Qb.with("obj_nonsolid_growtangle", hI => {
      hI.growcon = 3;
    });
  }
};
j0(Tf, "obj_chainking");
j2(Tf, "kinds", QA("obj_chainking", Q5));
j2(Tf, "defaultDepth", 6);
j2(Tf, "defaultSprite", "spr_chainking_spin");
var TW = Tf;
var TX = class d7 extends Q5 {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.t = 0;
    this.tmax = 220;
    let hI = Qb.first("obj_chainking");
    let hu = Qb.first("obj_nonsolid_growtangle");
    this.initkingx = hI ? hI.x : this.x;
    this.initkingy = hI ? hI.y : this.y;
    this.initboxx = hu ? hu.x : 200;
    this.initboxy = hu ? hu.y : 175;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 0;
    this.wavefactor = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 6;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.chainsnd = null;
    this.wavenoise = null;
  }
  step() {
    let hI = Qb.first("obj_nonsolid_growtangle");
    let hu = Qb.first("obj_chainking");
    let hf = jO();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chain_noise = 1;
        this.chainsnd = T8("snd_chain_extend");
      }
      this.sons += 1;
      this.son[this.sons] = QJ(this.x, this.y, TT);
      if (hI && this.x <= hI.x) {
        T9(this.chainsnd);
        QS("snd_locker");
        QS("snd_screenshake");
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 12;
        this.remx = hf ? hf.x : 0;
        this.remy = hf ? hf.y : 0;
        this.remx_box = hI.x;
        this.remy_box = hI.y;
        this.chaincon = 2.1;
        Qb.with("obj_growtangle", hW => {
          hW.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (hf) {
        hf.x = this.remx;
        hf.y = this.remy;
      }
      if (hI) {
        hI.x = this.remx_box;
        hI.y = this.remy_box;
      }
      let hW = Qq(360);
      let hX = Qk(this.shakeamt, hW);
      let hY = Qn(this.shakeamt, hW);
      if (hf) {
        hf.x += hX;
        hf.y += hY;
      }
      if (hI) {
        hI.x += hX;
        hI.y += hY;
      }
      this.shakeamt -= 2;
      if (this.shakeamt < 0) {
        this.chaincon = 3;
      }
    }
    if (this.chaincon === 3) {
      if (this.chain_noise === 1) {
        this.chain_noise = 2;
        this.wavenoise = T8("snd_chain_wave");
      }
      let hB = (hC, hx, hG) => {
        this.siner += 1;
        if (hu) {
          hu.y = this.initkingy + QM(this.siner / hC) * 80 * hG;
        }
        this.btimer += 1;
        if (this.btimer >= hx) {
          let hN = QJ(jb - 20, this.initboxy, Q7);
          hN.sprite_index = "spr_spadebullet";
          hN.hspeed = 4;
          Q4(this, hN);
          this.btimer = 0;
        }
      };
      if (this.type === 0) {
        hB(12, 20, 1);
        if (this.chain_noise === 2) {
          TQ(this.wavenoise, 0.8 - QM(this.siner / 12) / 2);
        }
      }
      if (this.type === 1) {
        hB(10, 18, 1);
        if (this.chain_noise === 2) {
          TQ(this.wavenoise, 0.9 - QM(this.siner / 10) / 2);
        }
      }
      if (this.type === 2) {
        hB(9, 16, 1);
        if (this.chain_noise === 2) {
          TQ(this.wavenoise, 1 - QM(this.siner / 9) / 2);
        }
      }
      if (this.type === 3) {
        hB(7, 14, this.wavefactor);
        if (this.chain_noise === 2) {
          TQ(this.wavenoise, 1 - QM(this.siner / 7) / 2);
        }
      }
    }
    if (hu) {
      this.kingx[0] = hu.x - this.initkingx;
      this.kingy[0] = hu.y - this.initkingy;
      for (let hC = 40; hC > 0; hC -= 1) {
        this.kingx[hC] = this.kingx[hC - 1];
        this.kingy[hC] = this.kingy[hC - 1];
      }
      for (let hx = 0; hx <= this.sons; hx += 1) {
        let hG = this.son[hx];
        if (hG && !hG.destroyed) {
          hG.x = (this.kingx[hx] || 0) + hG.xstart;
          hG.y = (this.kingy[hx] || 0) + hG.ystart;
        }
      }
      if (this.chaincon >= 3) {
        let hN = this.son[this.sons];
        if (hN) {
          this.x = hN.x;
          this.y = hN.y;
        }
        if (hI) {
          hI.x = (this.kingx[this.sons] || 0) + this.initboxx;
          hI.y = (this.kingy[this.sons] || 0) + this.initboxy;
        }
      }
    }
    this.t += 1;
    if (this.t >= this.tmax - 10) {
      this.wavefactor *= 0.8;
      Qb.with("obj_chainpiece", hp => {
        hp.image_alpha -= 0.1;
      });
      Qb.with("obj_regularbullet", hp => {
        hp.active = 0;
        hp.image_alpha -= 0.1;
      });
    }
    if (this.t >= this.tmax) {
      if (this.chain_noise === 2) {
        this.chain_noise = 3;
        T9(this.wavenoise);
      }
      Qx.turntimer = 3;
      Qb.with("obj_regularbullet", hp => hp.instance_destroy());
      Qb.with("obj_chainking", hp => {
        hp.sprite_index = "spr_chainking_receive";
      });
      Qb.with("obj_chainking", hp => hp.instance_destroy());
      this.instance_destroy();
    }
  }
  destroy() {
    T9(this.chainsnd);
    T9(this.wavenoise);
  }
};
j0(TX, "obj_wavechain");
j2(TX, "kinds", QA("obj_wavechain", Q5));
j2(TX, "defaultDepth", 10);
j2(TX, "defaultSprite", "spr_chainfront");
var TY = TX;
var TB = class d8 extends Q5 {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.gotimer = 0;
    let hI = Qb.first("obj_chainking");
    let hu = Qb.first("obj_nonsolid_growtangle");
    this.initkingx = hI ? hI.x : this.x;
    this.initkingy = hI ? hI.y : this.y;
    this.initboxx = hu ? hu.x : 205;
    this.initboxy = hu ? hu.y : 170;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 1;
    this.movecon = 0;
    this.movetime = 25;
    this.mytimer = 0;
    this.maxtimer = 200;
    if (this.type === 1) {
      this.maxtimer = 300;
    }
    this.image_blend = Qz.red;
    this.bulletpoint = 0;
    this.spikemake = 0;
    this.ended = 0;
    this.endtimer = 0;
    this.xx = jb;
    this.yy = jm;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.timerbonus = 0;
    this.chainsound = null;
    this.chainnoise = null;
    this.spike = null;
    this.box = null;
    this.movetimer = 0;
    this.pointx = 0;
    this.pointy = 0;
    this.mark = null;
  }
  step() {
    let hI = Qb.first("obj_nonsolid_growtangle");
    let hu = jO();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chainsound = T8("snd_chain_extend");
        this.chain_noise = 1;
      }
      if (this.sons < 40) {
        this.sons += 1;
        let hf = QJ(this.x, this.y, TT);
        hf.image_blend = Qz.red;
        this.son[this.sons] = hf;
      }
      if (hI && this.x <= hI.x) {
        if (this.chain_noise === 1) {
          this.chain_noise = 2;
          T9(this.chainsound);
          QS("snd_locker");
          QS("snd_screenshake");
        }
        this.box = hI;
        this.x = hI.x;
        this.y = hI.y;
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 16;
        this.remx = hu ? hu.x : 0;
        this.remy = hu ? hu.y : 0;
        this.remx_box = hI.x;
        this.remy_box = hI.y;
        this.chaincon = 2.1;
        Qb.with("obj_growtangle", hW => {
          hW.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (hI) {
        hI.x = this.remx_box;
        hI.y = this.remy_box;
      }
      let hW = Qq(360);
      let hX = Qk(this.shakeamt, hW);
      let hY = Qn(this.shakeamt, hW);
      if (hI) {
        hI.x += hX;
        hI.y += hY;
      }
      this.shakeamt -= 2;
      if (this.shakeamt <= 0) {
        this.chaincon = 2.2;
        if (hI) {
          hI.x = this.remx_box;
          hI.y = this.remy_box;
        }
      }
    }
    if (this.chaincon === 2.2) {
      this.xx = jb + 320;
      this.yy = jm + 160;
      let hB = jm;
      this.chaincon = 2.3;
      if (this.type >= 1) {
        let hC = QJ(this.x, this.y, Q8);
        this.spike = hC;
        Q4(this, hC);
        hC.image_speed = 0;
        hC.active = 0;
        Qb.with("obj_regularbullet", hx => {
          hx.basealpha = 0;
        });
        hC.image_alpha = 0;
        hC.mask_index = this.box ? this.box.sprite_index : "spr_battlebg_1";
        hC.sprite_index = "spr_battlebg_spikes";
        this.spikemake = 1;
        hC.image_xscale = (this.box ? this.box.image_xscale : 2) * 0.96;
        hC.image_yscale = (this.box ? this.box.image_yscale : 2) * 0.96;
      }
      if (this.type <= 1) {
        for (let hx = 0; hx < 5; hx += 1) {
          for (let hG = 0; hG < 5; hG += 1) {
            let hN = QJ(this.xx - 150 + hx * 70, hB + 20 + hG * 70, Q8);
            hN.sprite_index = "spr_spadebullet";
            hN.basealpha = 0;
            hN.active = 0;
            hN.image_angle = 90;
            hN.image_xscale = 0.5;
            hN.image_yscale = 0.5;
            hN.neveractive = 1;
            Q4(this, hN);
          }
        }
        this.bulletpoint = 1;
      }
    }
    if (this.chaincon === 2.3) {
      Qb.with("obj_regularbullet", hp => {
        hp.basealpha = (hp.basealpha || 0) + 0.04;
      });
      if (this.spikemake === 1 && this.box && this.spike) {
        this.box.image_xscale += 0.005;
        this.box.image_yscale += 0.005;
        this.spike.image_xscale += 0.005;
        this.spike.image_yscale += 0.005;
        if (this.type === 1) {
          this.box.image_xscale += 0.01;
          this.box.image_yscale += 0.01;
          this.spike.image_xscale += 0.01;
          this.spike.image_yscale += 0.01;
        }
      }
      this.gotimer += 1;
      if (this.gotimer >= 30) {
        this.chaincon = 3;
        this.gotimer = 0;
        this.xx = jb + 320;
        this.yy = jm + 160;
        this.pointx = this.xx;
        this.pointy = this.yy;
        Qb.with("obj_regularbullet", hp => {
          hp.active = 1;
        });
      }
    }
    if (this.chaincon === 3) {
      if (this.movecon === 0 && this.ended === 0 && this.mytimer > this.maxtimer - 10) {
        this.ended = 1;
      }
      if (this.movecon === 0 && this.ended === 0) {
        this.speed = 0;
        let hp = 0;
        let hM = 100;
        let hv = 130;
        if (this.type === 0) {
          hv = 110;
          this.movetime = 30;
        }
        if (this.type >= 1) {
          hv = 140;
        }
        if (this.type === 3 || this.type === 4) {
          hv = 120;
        }
        if (this.type === 5) {
          hv = 130;
          this.movetime = 30;
        }
        let hR = 0;
        while ((hp < hM || hp > hv) && hR++ < 10000) {
          this.pointx = this.xx + Qq(140) - Qq(140);
          this.pointy = this.yy + Qq(120) - Qq(120);
          hp = Qr(this.x, this.y, this.pointx, this.pointy);
        }
        this.target = QJ(this.pointx, this.pointy, TT);
        this.target.sprite_index = "spr_heartoutline";
        this.target.depth = 30;
        this.move_towards_point(this.pointx, this.pointy, hp / this.movetime);
        this.movetimer = 0;
        this.movecon = 1;
        this.chainnoise = T8("snd_chain_extend");
      }
      if (this.movecon === 1 && this.ended === 0) {
        this.movetimer += 1;
        if (this.movetimer > this.movetime) {
          this.x = this.pointx;
          this.y = this.pointy;
          this.movecon = 2;
          this.speed = 0;
          this.movetimer = 0;
        }
      }
      if (this.movecon === 2 && this.ended === 0) {
        let hS = 20;
        if (this.type === 1) {
          hS = 22;
        }
        if (this.type === 2) {
          hS = 16;
        }
        if (this.type === 3) {
          hS = 7;
        }
        if (this.type === 4) {
          hS = 3;
        }
        if (this.type === 5) {
          hS = 22;
        }
        this.movetimer += 1;
        if (this.movetimer >= hS) {
          if (this.target && this.target.instance_destroy) {
            this.target.instance_destroy();
          }
          this.movecon = 0;
          T9(this.chainnoise);
        }
      }
    }
    if (this.chaincon >= 0) {
      this.kingx[0] = this.x;
      this.kingy[0] = this.y;
      for (let hl = 40; hl > 0; hl -= 1) {
        this.kingx[hl] = this.kingx[hl - 1];
        this.kingy[hl] = this.kingy[hl - 1];
      }
      for (let hz = 0; hz <= this.sons; hz += 1) {
        let hF = this.son[hz];
        if (hF && !hF.destroyed) {
          hF.x = this.kingx[hz];
          hF.y = this.kingy[hz];
          hF.image_angle = this.direction;
        }
      }
      if (this.chaincon >= 3 && hI) {
        hI.x = this.kingx[this.sons];
        hI.y = this.kingy[this.sons];
      }
    }
    if (this.bulletpoint === 1) {
      let hc = hu ? hu.x + 8 : 320;
      let hw = hu ? hu.y + 8 : 170;
      Qb.with("obj_regularbullet", hq => {
        if (hq.sprite_index === "spr_spadebullet") {
          hq.image_angle = QV(hq.x, hq.y, hc, hw);
          let hD = Qr(hq.x, hq.y, hc, hw);
          if (hD > 80) {
            hq.neveractive -= 0.02;
          }
          if (hq.neveractive > 0) {
            hq.active = 0;
          } else {
            hq.active = 1;
          }
          let hE = 0.7;
          let hA = 1 - hq.neveractive;
          if (hA > 1) {
            hA = 1;
          }
          if (hD > 80) {
            hE = 1.7 - hD * 1 / 80;
            if (hE < 0) {
              hE = 0;
            }
          }
          hq.image_alpha = (0.3 + hE) * hq.basealpha * hA;
          if (hq.image_xscale < 0.68 && this.ended === 0) {
            hq.image_xscale += 0.0005;
            hq.image_yscale += 0.0005;
          } else {
            hq.active = 0;
            hq.basealpha -= 0.1;
            this.ended = 1;
          }
        }
      });
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed) {
      this.spike.image_alpha += 0.04;
      if (this.box) {
        this.spike.x = this.box.x;
        this.spike.y = this.box.y;
      }
      if (this.ended === 1) {
        if (this.spike.image_alpha >= 1) {
          this.spike.image_alpha = 1;
        }
        this.spike.image_alpha -= 0.14;
      }
    }
    if (this.ended === 1 && (this.endtimer += 1, this.endtimer >= 10)) {
      Ql("snd_chain_extend");
      Qb.with("obj_chainpiece", hq => hq.instance_destroy());
      Qb.with("obj_regularbullet", hq => hq.instance_destroy());
      Qb.with("obj_chainking", hq => hq.instance_destroy());
      Qx.turntimer = 3;
      this.instance_destroy();
      return;
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed && this.spike.grazed === 1) {
      if (this.timerbonus === 0) {
        this.mytimer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.spike.grazed = 0;
      }
    }
    this.mytimer += 1;
    this.image_angle = this.direction;
  }
  draw(hI) {
    this.draw_self(hI);
  }
  destroy() {
    T9(this.chainsound);
    T9(this.chainnoise);
  }
};
j0(TB, "obj_finalchain");
j2(TB, "kinds", QA("obj_finalchain", Q5));
j2(TB, "defaultDepth", 10);
j2(TB, "defaultSprite", "spr_chainfront");
var TC = TB;
function Tx(hI, hu) {
  Qb.with("obj_regularbullet", hf => {
    hf.image_alpha += 0.2;
  });
  if (hI.btimer >= hu) {
    let hf = hI.side === 0 ? 80 : 560;
    let hW = Qb.first("obj_growtangle");
    let hX = hW ? hW.y : 170;
    let hY = hW ? hW.sprite_height : 0;
    let hB = QJ(jb + hf, hX - hY / 2 + Qq(hY), Q7);
    if (hI.side === 0) {
      hB.direction = 0;
    }
    if (hI.side === 1) {
      hB.direction = 180;
    }
    hB.image_alpha = 0;
    hB.damage = hI.damage;
    hB.target = hI.target;
    hB.sprite_index = "spr_spadebullet";
    hB.speed = 5;
    hB.friction = -0.1;
    hB.image_angle = hB.direction;
    hI.side = hI.side === 1 ? 0 : 1;
    hI.btimer = 0;
  }
}
j0(Tx, "sideSpades");
function TG(hI, hu, hf) {
  if (hI.btimer >= hu) {
    let hW = Qy(0, 1, 2, 3);
    let hX = 0;
    let hY = 0;
    if (hW === 0 || hW === 3) {
      hX = jb + 320 + Qq(300) - Qq(300);
      hY = -60;
    }
    if (hW === 1) {
      hX = jb - 60;
      hY = Qq(320);
    }
    if (hW === 2) {
      hX = jb + 700;
      hY = Qq(320);
    }
    let hB = QJ(hX, hY, TP);
    if (hf) {
      Qb.with("obj_skychain", hC => Q4(hI, hC));
    } else {
      Q4(hI, hB);
    }
    hI.btimer = 0;
  }
}
j0(TG, "skyChains");
e({
  21: hI => Tx(hI, 9),
  23: hI => Tx(hI, 7),
  34: hI => TG(hI, 28, true),
  35: hI => TG(hI, 22, false)
});
var TN = class d9 extends Q3 {
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
      idlesprite: "spr_chainking_idle",
      hurtsprite: "spr_chainking_hurt",
      sparedsprite: "spr_chainking_idle",
      kturn: 0,
      xx: jb,
      yy: jm,
      tempattack: 1,
      hurtbuffer: 0,
      susinit: 0,
      remxx: jb,
      remyy: jm,
      chain_dragging: 0,
      wall_bouncing: 0,
      talk_all_message: 0,
      attack: 0,
      rtimer: 0,
      shakex: 0,
      active: 1,
      blcontype: 3
    });
    this.reminvc = Qx.invc;
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2 - 10;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (hI === 5) {
      this.startAttack();
      return;
    }
    if (hI === 10) {
      this.defeatEvent();
      return;
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con += 1;
    }
  }
  defeatEvent() {
    let hI = Qb.first("obj_battlecontroller");
    if (hI) {
      hI.skipvictory = 1;
    }
    Qx.invc = 1;
    this.instance_destroy();
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let hI = this.myself;
    let hu = this.xx;
    let hf = this.yy;
    let hW = Qx.monsterat[hI];
    let hX = this.tempattack;
    Qx.invc = this.reminvc;
    let hY = this.attack;
    let hB = (hM, hv) => QJ(hu + hM, hf + hv, QU);
    let hC = hM => {
      let hv = QJ(0, 0, k);
      Object.assign(hv, hM);
      return hv;
    };
    let hx = hM => {
      let hv = QJ(hM.x - 10, hM.y - 10, T1);
      T2();
      hv.instance_destroy();
    };
    let hG = (hM, hv, hR) => {
      this.visible = false;
      let hS = QJ(this.x, this.y, TW);
      hS.type = 1;
      hS.subtype = hM;
      hS.grazepoints = 6;
      let hl = QJ(hu + 200, hf + 175, TH);
      hl.sprite_index = "spr_battlebg_wavechain";
      hx(hl);
      hS.damage = hW * hv * hX;
      hS.target = hR;
      Qx.turntimer = 999;
    };
    let hN = (hM, hv, hR) => {
      Qx.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let hS = QJ(this.x, this.y, TW);
      hS.type = 2;
      hS.subtype = hM;
      let hl = QJ(hu + 205, hf + 170, TH);
      hl.sprite_index = "spr_battlebg_1";
      hS.damage = hW * hv * hX;
      hS.target = hR;
      Qx.turntimer = 999;
      hx(hl);
      return hS;
    };
    let hp = hM => {
      Qx.invc *= 1.5;
      let hv = hB(310, 165);
      hv.sprite_index = "spr_battlebg_2";
      hv.keep = 1;
      hx(hv);
      let hR = QJ(hv.x, hv.y, Tu);
      hR.type = hM;
      hR.damage = hW * 5 * hX;
      hR.target = this.mytarget;
      Qx.turntimer = 999;
    };
    if (hY === 1) {
      hB(320, 170);
      T2();
      hC({
        type: 21,
        damage: hW * 5 * hX,
        target: this.mytarget,
        side: 1,
        btimer: -8
      });
      Qx.turntimer = 190;
    }
    if (hY === 2) {
      hG(0, 4, 3);
    }
    if (hY === 3) {
      hB(320, 170);
      T2();
      hC({
        type: 34,
        damage: hW * 5 * hX,
        target: this.mytarget,
        btimer: 10
      });
      Qx.turntimer = 210;
    }
    if (hY === 4) {
      hp(5);
    }
    if (hY === 5) {
      hG(1, 4, 3);
    }
    if (hY === 6) {
      Qx.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let hM = QJ(this.x, this.y, TW);
      hM.type = 2;
      hM.subtype = 5;
      if (this.chain_dragging >= 1) {
        hM.subtype = 2;
      }
      this.chain_dragging += 1;
      let hv = QJ(hu + 205, hf + 170, TH);
      hv.sprite_index = "spr_battlebg_1";
      hM.damage = hW * 5 * hX;
      hM.target = this.mytarget;
      Qx.turntimer = 999;
      hx(hv);
    }
    if (hY === 7) {
      hB(320, 170);
      T2();
      hC({
        type: 35,
        damage: hW * 5 * hX,
        target: this.mytarget,
        btimer: 10
      });
      Qx.turntimer = 220;
    }
    if (hY === 8) {
      hp(3);
    }
    if (hY === 9) {
      hB(320, 170);
      T2();
      hC({
        type: 23,
        damage: hW * 5 * hX,
        target: this.mytarget,
        btimer: -8,
        side: 1
      });
      Qx.turntimer = 200;
    }
    if (hY === 10) {
      hG(2, 4, 3);
    }
    if (hY === 11) {
      hN(1, 3, 3);
    }
    this.tempattack = 1;
    this.attacked = 1;
  }
  talk() {
    let hI = this.myself;
    if (!Qb.exists("obj_darkener")) {
      QJ(0, 0, Qu);
    }
    Qx.typer = 50;
    Qx.msg = new Array(100).fill(" ");
    Qx.msg[0] = "Fall before&the chain&of justice!/%";
    let hu = 3;
    let hf = this.kturn;
    if (hf === 0) {
      Qx.msg[0] = "How dare you&come here,&Lightners...?/%";
    }
    if (hf === 1) {
      Qx.msg[0] = "You, that&left us in&the shadows,&stripped of&meaning.../%";
      hu = 8;
    }
    if (hf === 2) {
      Qx.msg[0] = "You DARE&return&to torment us&once again?/%";
    }
    if (hf === 3) {
      Qx.msg[0] = "Begone!&We have found&fresh&purpose./%";
    }
    if (hf === 4) {
      Qx.msg[0] = "For the&KNIGHT&has appeared./%";
    }
    if (hf === 5) {
      Qx.msg[0] = "The KNIGHT&that pulls&the Fountains&from the&Earth./%";
      hu = 8;
    }
    if (hf === 6) {
      hu = 8;
      Qx.msg[0] = "Holy&Fountains,&whose shadows&are creating&a new&world.../";
      Qx.msg[1] = "OUR world./%";
    }
    if (hf === 7) {
      Qx.msg[0] = "Hahaha...&Do you see&now our NEW&purpose...?/%";
    }
    if (hf === 8) {
      Qx.msg[0] = "Soon, this&world&shall be&blanketed&in darkness.../";
      Qx.msg[1] = "And DARKNERS&shall RULE&it!/%";
      hu = 8;
    }
    if (hf === 9) {
      Qx.msg[0] = "Then, you may&see what it is&like to live&in DESPAIR!/%";
    }
    if (hf === 10) {
      Qx.msg[0] = "Now, enough&talk!/";
      Qx.msg[1] = "Fall before&the chain of&justice!/%";
    }
    if (hf === 11) {
      Qx.msg[0] = "... ha,&you're&quite strong,&aren't you!?/%";
    }
    if (hf === 12) {
      Qx.msg[0] = "If I keep&fighting you&like this,&then.../%";
    }
    if (hf === 13) {
      Qx.msg[0] = "It seems...&that.../%";
    }
    if (hf >= 14) {
      Qx.msg[0] = "My KNIGHT...&I shall not&fail you.../%";
      this.battlecancel = 2;
    }
    this.kturn += 1;
    if (this.kturn <= 11) {
      this.attack = this.kturn;
    } else {
      if (this.kturn === 12) {
        this.attack = 7;
      }
      if (this.kturn === 13) {
        this.attack = 8;
      }
      if (this.kturn === 14) {
        this.attack = 10;
      }
      if (this.kturn === 15) {
        this.attack = 9;
      }
      if (this.kturn === 16) {
        this.attack = 7;
      }
      if (this.kturn === 17) {
        this.attack = 11;
      }
      if (this.kturn >= 18) {
        this.attack = 11;
      }
      if (Qx.monsterdf[hI] > -25) {
        Qx.monsterdf[hI] -= 5;
      }
    }
    this.target_randomly = 1;
    if (this.attack === 2 || this.attack === 5 || this.attack === 10 || this.attack === 11) {
      QB(this);
    } else {
      QY(this);
    }
    this.blcontype = hu;
    QT(this.x - 160, this.y, hu);
    this.talked = 1;
    this.talktimer = 0;
  }
  step() {
    let hI = this.myself;
    if (this.susinit === 0) {
      Qb.with("obj_herosusie", hu => {
        hu.idlesprite = "spr_susieb_idle_serious";
        hu.attacksprite = "spr_susieb_attack_serious";
      });
      this.susinit = 1;
    }
    if (Qx.monster[hI] === 1) {
      Qx.flag[51 + hI] = 4;
      if (Qx.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (!Qb.exists("obj_writer")) {
          Qx.mnfight = 2;
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talktimer = 0;
          Qx.turntimer = 180;
          this.userEvent(5);
          this.turns += 1;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          let hu = Qy(0, 1, 2, 3);
          if (hu === 0) {
            Qx.battlemsg[0] = "* Darkness pours from the fountain.";
          }
          if (hu === 1) {
            Qx.battlemsg[0] = "* KING's mouths gave a berserk smile.";
          }
          if (hu === 2) {
            Qx.battlemsg[0] = "* The battlefield is rumbling.";
          }
          if (hu === 3) {
            Qx.battlemsg[0] = "* KING's mouths babble indecipherably.";
          }
          if (Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 4) {
            Qx.battlemsg[0] = "* KING's cape flutters weakly.";
          }
        } else {
          Qx.turntimer = 120;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Qx.mercymod[hI] = 999;
        }
        if (this.battlecancel === 2) {
          Qb.with("obj_battlecontroller", hf => {
            hf.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 4;
    }
    if (this.con === 4 && !Qb.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 15;
      Qb.with("obj_battlecontroller", hf => {
        hf.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      Qb.with("obj_battlecontroller", hf => {
        hf.noreturn = 0;
      });
      Qx.flag[247] = 1;
      this.scr_monsterdefeat();
      this.userEvent(10);
      this.instance_destroy();
      this.con = 7;
      return;
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (Qx.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let hI = this.myself;
    this.xx = jb;
    this.yy = jm;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* KING - Abandoned by the Lightners^1, his heart became cracked with hatred./";
      Qx.msg[1] = "* He cannot be reasoned with^1, but don't give up...!/%";
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Qx.msg = new Array(100).fill(" ");
      if (Qx.tempflag[5] === 0) {
        Qx.msg[0] = "* You tried to reason with the King.../";
        jo(1, 5);
        Qx.msg[2] = "* Silence^1, Lightbringer!/";
        Qx.msg[3] = "* Your very existence goes against our own.../";
        Qx.msg[4] = "\\E0* By the Knight's will^1, I shall shatter your heart to pieces!/";
        jK(5);
        Qx.msg[6] = "* Your will is changing..^1.&* \\cYTALK\\cW became \\cYCOURAGE\\cW!/%";
        Qx.tempflag[5] = 1;
        Qx.canact[hI][1] = 1;
        Qx.actactor[hI][1] = 1;
        Qx.actname[hI][1] = "Courage";
        Qx.actdesc[hI][1] = "Defense#Boost";
        Qx.actcost[hI][1] = 62;
      } else {
        QS("snd_power");
        Qb.with("obj_heroparent", hf => {
          let hW = T5(hf);
          hW.flashcolor = Qz.orange;
        });
        Qx.msg[0] = "* You encouraged the party^1!&* The party's DEFENSE raised for this turn!/%";
        this.tempattack = 0.8;
      }
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Qx.msg = new Array(100).fill(" ");
      if (Qx.tempflag[6] === 0) {
        Qx.msg[0] = "* Susie tried to reason with the King.../";
        jV(1, 1);
        Qx.msg[2] = "* Arright^1, listen up./";
        Qx.msg[3] = "\\E2* Lancer's my friend./";
        Qx.msg[4] = "\\EC* So if we can get by without hurting you^1, then.../";
        jo(5, 0);
        Qx.msg[6] = "* If I perish^1, so be it!/";
        Qx.msg[7] = "\\E4* Show my son the monster you REALLY are!/";
        jV(8, "C");
        Qx.msg[9] = "* .../";
        Qx.msg[10] = "\\E3* Arright^1, you wanna see what I can do^1, huh?/";
        jK(11);
        Qx.msg[12] = "* Susie's will is changing..^1.&* \\cYTALK\\cW became \\cYRED BUSTER\\cW!/%";
        Qx.tempflag[6] = 1;
        Qx.canact[hI][2] = 1;
        Qx.actactor[hI][2] = 2;
        Qx.actname[hI][2] = "RedBuster";
        Qx.actdesc[hI][2] = "Red#Damage";
        Qx.actcost[hI][2] = 150;
        this.actcon = 1;
      } else {
        Qx.msg[0] = "* Your SOUL shined its power on Susie!/%";
        this.actcon = 10;
      }
      Qj();
      this.acttimer = 0;
    }
    if (this.acting === 4 && this.actcon === 0) {
      Qx.msg = new Array(100).fill(" ");
      if (Qx.tempflag[7] === 0) {
        Qx.msg[0] = "* Ralsei tried to reason with the King.../";
        jr(1, "B");
        Qx.msg[2] = "* You might not realize it^1, but.../";
        Qx.msg[3] = "\\E6* This is a world where you don't have to fight./";
        Qx.msg[4] = "\\E8* I know if we try^1, we can all find another way.../";
        jo(5, 6);
        Qx.msg[6] = "\\E6* Such simple-minded platitudes.../";
        Qx.msg[7] = "\\E0* A shame you will not live to realize your naivety./";
        Qx.msg[8] = "\\E4* Now^1, perish with the pathetic LIGHTNERs you worship!/";
        jr(9, 8);
        Qx.msg[10] = "* Sorry^1, my friends and I aren't going anywhere!/";
        jK(11);
        Qx.msg[12] = "* Ralsei's will is changing..^1.&* \\cYTALK\\cW became \\cYDUAL HEAL\\cW!/%";
        Qj();
        Qx.tempflag[7] = 1;
        Qx.canact[hI][3] = 1;
        Qx.actactor[hI][3] = 3;
        Qx.actname[hI][3] = "DualHeal";
        Qx.actdesc[hI][3] = "Heals#everyone";
        Qx.actcost[hI][3] = 125;
        this.actcon = 1;
      } else {
        Qx.msg[0] = "* Your SOUL shined its power on RALSEI!/%";
        Qj();
        this.actcon = 20;
      }
      this.acttimer = 0;
    }
    let hu = (hf, hW, hX) => {
      Qx.faceaction[hf] = 2;
      Qx.charaction[hf] = 2;
      Qx.charspecial[hf] = hW;
      Qx.chartarget[hf] = 0;
      Qx.acting[hf] = 0;
      QS("snd_boost");
      let hY = Qb.first("obj_herokris");
      let hB = QJ((hY ? hY.x : 80) + 30, (hY ? hY.y : 50) + 50, T7);
      hB.depth = -20;
      hB.image_index = 0;
      hB.image_xscale = 2;
      hB.image_yscale = 2;
      hB.image_speed = 1;
      hB.sprite_index = "spr_soulshining";
      Qb.with(hX, hC => T5(hC));
      Qb.with("obj_herokris", hC => T5(hC));
    };
    if (this.actcon === 10) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !Qb.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 11;
      }
    }
    if (this.actcon === 11) {
      hu(1, 5, "obj_herosusie");
      this.actcon = 12;
    }
    if (this.actcon === 12) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        Qb.with("obj_herosusie", hf => {
          hf.state = 0;
        });
      }
    }
    if (this.actcon === 20) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !Qb.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      hu(2, 6, "obj_heroralsei");
      this.actcon = 22;
    }
    if (this.actcon === 22) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        Qb.with("obj_heroralsei", hf => {
          hf.state = 0;
        });
      }
    }
    if (this.actcon === 1 && !Qb.exists("obj_writer")) {
      this.actcon = 0;
      o();
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          this.userEvent(10);
          return;
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
        hI.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let hf = this.idlesprite;
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hf = this.idlesprite;
      }
      hI.draw_sprite_ext(hf, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(hf, this.siner / 6, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(TN, "obj_king_boss");
j2(TN, "kinds", QA("obj_king_boss", Q3));
j2(TN, "defaultDepth", 90);
j2(TN, "defaultSprite", "spr_chainking_idle");
var Tp = TN;
var TM = class dQ extends QE {
  create() {
    this.xx = jb;
    this.yy = jm;
    this.condition = 0;
    this.attackno = 0;
    this.attack = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.x = this.xx + 470;
    this.y = this.yy + 70;
    this.active = 1;
    this.faketimer = 0;
    this.faketimermax = 180;
    this.timeruse = 0;
    this.image_speed = 0.334;
  }
  scr_debug() {
    return Qx.debug === 1;
  }
  nextAttack() {
    let hI = this.xx;
    let hu = this.yy;
    this.attackno += 1;
    this.active = 0;
    if (this.attackno <= 11) {
      this.attack = this.attackno;
    } else {
      this.attack = Qy(7, 8, 9, 10, 11);
    }
    let hf = this.attack;
    let hW = hx => {
      let hG = QJ(0, 0, k);
      hG.type = hx;
      return hG;
    };
    let hX = hx => {
      this.visible = false;
      let hG = QJ(this.x, this.y, TW);
      hG.type = 1;
      hG.subtype = hx;
      let hN = QJ(hI + 200, hu + 175, TH);
      hN.sprite_index = "spr_battlebg_wavechain";
      T2();
    };
    let hY = hx => {
      this.visible = false;
      this.timeruse = 0;
      let hG = QJ(this.x, this.y, TW);
      hG.type = 2;
      hG.subtype = hx;
      let hN = QJ(hI + 205, hu + 170, TH);
      hN.sprite_index = "spr_battlebg_1";
      T2();
    };
    let hB = hx => {
      let hG = QJ(hI + 310, hu + 165, QU);
      hG.sprite_index = "spr_battlebg_2";
      T2();
      let hN = QJ(hG.x, hG.y, Tu);
      hN.type = hx;
    };
    let hC = (hx, hG) => {
      QJ(hI + 340, hu + 170, QU);
      T2();
      hW(hx);
      this.timeruse = 1;
      this.faketimermax = hG;
      this.faketimer = 0;
    };
    if (hf === 1) {
      hC(21, 190);
    }
    if (hf === 2) {
      hX(0);
    }
    if (hf === 3) {
      hC(34, 200);
    }
    if (hf === 4) {
      hB(0);
    }
    if (hf === 5) {
      hX(1);
    }
    if (hf === 6) {
      hY(2);
    }
    if (hf === 7) {
      hC(35, 220);
    }
    if (hf === 8) {
      hB(3);
    }
    if (hf === 9) {
      hC(23, 190);
    }
    if (hf === 10) {
      hX(2);
    }
    if (hf === 11) {
      hY(1);
    }
  }
  step() {
    if (this.active === 1 && this.scr_debug()) {
      this.nextAttack();
    }
    if (this.timeruse === 1) {
      this.faketimer += 1;
      if (this.faketimer >= this.faketimermax) {
        Qb.with("obj_bulletparent", hI => hI.instance_destroy());
        Qb.with("obj_dbulletcontroller", hI => hI.instance_destroy());
        Qb.with("obj_growtangle", hI => {
          hI.growcon = 3;
        });
        Qb.with("obj_heart", hI => hI.instance_destroy());
        this.active = 1;
        this.timeruse = 0;
        this.faketimer = 0;
      }
    }
  }
  draw(hI) {
    this.draw_self(hI);
    hI.draw_set_color(Qz.green);
    hI.draw_text(0, 0, String(this.attackno));
    let hu = Qb.first("obj_chainking");
    if (hu) {
      hI.draw_set_color(Qz.yellow);
      hI.draw_text(0, 40, String(hu.x));
      hI.draw_text(0, 60, String(hu.y));
    }
  }
};
j0(TM, "obj_king_body");
j2(TM, "kinds", QA("obj_king_body", QE));
j2(TM, "defaultDepth", 0);
j2(TM, "defaultSprite", "spr_chainking_spin");
var Tv = TM;
var TJ = [{
  id: "king",
  name: "King",
  chapter: 1,
  area: "Card Castle",
  desc: "King.#Chains, spades and#a bouncing spiked box.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: Tp,
    type: 25,
    x: 460,
    y: 70,
    setup: jn
  }],
  battlemsg: "* King blocked the way!",
  encounterno: 40,
  music: "battle"
}];
j3(Tp, "G.mnfight = 2;");
var Tg = {};
j1(Tg, {
  FIGHTS: () => Lj,
  SOUNDS: () => TR,
  SPRITES: () => TZ,
  obj_checker_animtest: () => L0,
  obj_checkers_enemy: () => L8,
  obj_checkers_leap: () => TK,
  obj_oflash: () => TA,
  obj_ralseithrown: () => L4,
  obj_smallcheckers_enemy: () => LQ,
  obj_spinheart: () => Tm,
  obj_throwralsei: () => L6,
  obj_throwtarget: () => L2,
  setupStats: () => TV,
  setupStatsCRound: () => Tk,
  setupStatsKRound: () => Tn,
  setupStatsKRound2: () => To
});
j4();
var TZ = ["spr_checkers_idle", "spr_checkers_crouch", "spr_checkers_leap", "spr_checkers_magnificent", "spr_checkers_leg", "spr_checkers_bow", "spr_checkers_milk", "spr_checkers_crown", "spr_checkers_idle_crownless", "spr_checkershrapnel", "spr_smallchecker_idle", "spr_smallchecker_hurt", "spr_smallchecker_run", "spr_smallchecker_transform3", "spr_smallchecker_legtuck", "spr_smallchecker_crown", "spr_krisb_bow", "spr_ralseib_bow", "spr_susieb_throwralseiready", "spr_susieb_attack_unarmed", "spr_ralsei_thrown", "spr_ralseib_idle", "spr_throwarrow", "spr_spinheart", "spr_spinheartmask", "spr_attack_cut1", "spr_attack_slap1"];
var TR = ["snd_impact", "snd_jump", "snd_boost", "snd_ultraswing", "snd_magicsprinkle", "snd_swing", "snd_power", "snd_item", "snd_grab", "snd_coin", "snd_noise", "snd_whistlebreath", "snd_crownshrink"];
var TS = 0;
var Tl = 0;
var Tz = j0(hI => "[C]", "scr_get_input_name");
var TF = j0((hI, ...hu) => {
  let hf = hI;
  hu.forEach((hW, hX) => {
    hf = hf.split("~" + (hX + 1)).join(String(hW));
  });
  return hf;
}, "scr_84_get_subst_string");
var Tc = j0(hI => ({
  face: hI
}), "ralface");
var Tw = j0(hI => ({
  face: hI
}), "susface");
function Tq(...hI) {
  Qx.msg = new Array(100).fill(" ");
  let hu = "";
  let hf = 0;
  for (let hW of hI) {
    if (typeof hW == "string") {
      Qx.msg[hf++] = hu + hW;
      hu = "";
    } else {
      hu += "\\E" + String(hW.face);
    }
  }
}
j0(Tq, "setMsgs");
var Ta = j0(() => Qb.exists("obj_writer"), "writerExists");
var TD = j0(() => Qb.with("obj_writer", hI => hI.instance_destroy()), "killWriters");
var TE = class dj extends QE {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = Qz.white;
  }
  draw(hI) {
    if (Qb.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, QM(this.siner / 3)));
    if (this.siner > 4 && QM(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
j0(TE, "obj_oflash");
j2(TE, "kinds", QA("obj_oflash", QE));
j2(TE, "defaultDepth", 0);
var TA = TE;
function Ty(hI) {
  let hu = QJ(hI.x, hI.y, TA);
  hu.image_xscale = hI.image_xscale;
  hu.image_speed = 0;
  hu.image_index = hI.image_index;
  hu.image_yscale = hI.image_yscale;
  hu.sprite_index = hI.sprite_index;
  hu.depth = hI.depth - 1;
  hu.target = hI;
  return hu;
}
j0(Ty, "scr_oflash");
function Tk(hI) {
  Qx.monstername[hI] = "C.Round";
  Qx.monstermaxhp[hI] = 10;
  Qx.monsterhp[hI] = 10;
  Qx.monsterat[hI] = 5;
  Qx.monsterdf[hI] = 0;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 10;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  if (Qx.encounterno === 7 && Qx.plot < 40) {
    Qx.plot = 40;
  }
  if (QN(2)) {
    Qx.canact[hI][1] = 1;
    Qx.actactor[hI][1] = 2;
    Qx.actname[hI][1] = "X-Compliment";
    Qx.canact[hI][2] = 1;
    Qx.actname[hI][2] = "Warning";
    Qx.actactor[hI][2] = 3;
  }
}
j0(Tk, "setupStatsCRound");
function Tn(hI) {
  Qx.monstername[hI] = "K.Round";
  Qx.monstermaxhp[hI] = 1300;
  Qx.monsterhp[hI] = 1300;
  Qx.monsterat[hI] = 7.5;
  Qx.monsterdf[hI] = 3;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 100;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Bow";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "Deep Bow";
  Qx.actactor[hI][2] = 3;
  if (QN(2)) {
    Qx.canact[hI][3] = 1;
    Qx.actname[hI][3] = "Warning";
    Qx.actactor[hI][3] = 3;
  }
}
j0(Tn, "setupStatsKRound");
function To(hI) {
  Qx.monstername[hI] = "K.Round";
  Qx.monstermaxhp[hI] = 1300;
  Qx.monsterhp[hI] = 1300;
  Qx.monsterat[hI] = 8;
  Qx.monsterdf[hI] = 3;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 100;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  if (Qx.flag[246] === 1) {
    Qx.actname[hI][0] = "Checkers";
  }
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Bow";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "Susie's Idea";
  Qx.actactor[hI][2] = 4;
}
j0(To, "setupStatsKRound2");
var TV = Tn;
var Tr = class dT extends Q6 {
  create() {
    Object.assign(this, {
      jumpcon: 0,
      jumptimer: 0,
      s_timer: 0,
      image_xscale: 2,
      image_yscale: 2,
      leapmode: 0,
      active: 1,
      image_speed: 0,
      image_index: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 6,
      timepoints: 2,
      inv: 120,
      grazetimer: 0,
      target: 0,
      boss: 0,
      amt: 0,
      floory: 0,
      targetx: 0,
      magamt: 0,
      siner: 0
    });
  }
  userEvent(hI) {
    if (hI === 5 && this.active === 1) {
      QC(this);
    }
  }
  step() {
    let hI = Qb.first("obj_growtangle");
    let hu = hI ? hI.y : 170;
    let hf = hI ? hI.sprite_height : 0;
    let hW = Qb.first("obj_heart");
    let hX = hW ? hW.x : 320;
    let hY = hW ? hW.y : 170;
    let hB = () => Qb.with("obj_checkers_enemy", hC => {
      hC.visible = true;
    });
    if (this.leapmode === 0) {
      if (this.jumpcon === 1 && this.vspeed >= 0 && this.y >= hu + hf / 2 - this.sprite_height) {
        QS("snd_impact");
        QJ(0, 0, Qf);
        this.y = hu + hf / 2 - this.sprite_height;
        this.jumptimer = 0;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
      if (this.jumpcon === 3 && this.vspeed >= 0 && this.y >= this.floory - 2) {
        QS("snd_impact");
        QJ(0, 0, Qf);
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_crouch";
        this.jumptimer += 1;
        let hC = 20;
        if (this.amt >= 1) {
          hC = 10;
        }
        if (this.jumptimer >= hC) {
          QS("snd_jump");
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.amt += 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = hX + 8 - this.sprite_width / 2;
          this.vspeed = -15;
          if (this.amt === 1) {
            this.vspeed = -17;
          }
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 28;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 16;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          Qx.turntimer = -1;
          hB();
          this.instance_destroy();
        }
      }
    }
    if (this.leapmode === 1 && (this.jumpcon === 7 && (this.jumptimer += 1, this.jumptimer >= 10 && Qb.with("obj_regularbullet", hx => {
      hx.active = 0;
      hx.image_alpha -= 0.1;
    }), this.jumptimer >= 20 && (Qx.turntimer = -1, hB(), this.instance_destroy())), this.jumpcon === 6 && this.y >= this.floory - 2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0, this.gravity = 0, this.hspeed = 0, this.sprite_index = "spr_checkers_crouch", this.jumpcon = 7), this.jumpcon === 0 && (this.sprite_index = "spr_checkers_crouch", this.jumptimer += 1, this.jumptimer >= 20 && (this.floory = this.y, this.jumptimer = 0, this.jumpcon = 1, this.sprite_index = "spr_checkers_leap", this.targetx = hX + 8 - this.sprite_width / 2, this.hspeed = (this.targetx - this.x) / 17, this.vspeed = -17, QS("snd_jump"), this.gravity = 1, this.amt += 1, this.amt >= 3 && (this.active = 0, this.jumpcon = 6, this.targetx = this.xstart, this.gravity = 2, this.hspeed = (this.targetx - this.x) / 16))), this.jumpcon === 1 && this.vspeed >= 0 && (this.gravity = 0, this.vspeed = 0, this.hspeed = 0, this.jumpcon = 2, QS("snd_boost")), this.jumpcon === 2 && (this.image_speed = 0.25, this.jumptimer += 1, this.jumptimer >= 15 && (QS("snd_ultraswing"), this.image_speed = 0, this.image_index = 0, this.vspeed = 32, this.jumpcon = 3, this.jumptimer = 0)), this.jumpcon === 3)) {
      let hx = Qd(this);
      hx.image_alpha = 0.7;
      if (this.y >= hu + hf / 2 - this.sprite_height) {
        QS("snd_impact");
        QJ(0, 0, Qf);
        for (let hG = 0; hG < 6; hG += 1) {
          let hN = QJ(this.x + this.sprite_width / 2 - 15 + hG * 5, hu + hf / 2, Q7);
          hN.image_xscale = 1.5;
          hN.image_yscale = 1.5;
          hN.direction = 130 - Qq(10) - hG / 5 * 70;
          hN.sprite_index = "spr_checkershrapnel";
          hN.speed = 6 + Qq(1);
          hN.gravity = 0.25;
          hN.target = this.target;
          hN.damage = this.damage;
        }
        this.y = hu + hf / 2 - this.sprite_height;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
    }
    if (this.leapmode === 2) {
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_magnificent";
        this.image_speed = 0.5;
        this.jumpcon = 1;
        this.magamt = 0;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 2) {
          QS("snd_ultraswing");
        }
        if (this.image_index >= 4) {
          this.image_index = 4;
          this.image_speed = 0;
          this.hspeed = -4;
          this.gravity = -0.12;
          this.jumpcon = 2;
          this.siner = 0;
        }
      }
      if (this.jumpcon === 2) {
        this.siner += 1;
        this.y += QM(this.siner / 3) * 4;
        this.s_timer += 1;
        if (this.s_timer === 20) {
          QS("snd_magicsprinkle");
        }
        if (this.s_timer >= 24) {
          let hp = QJ(this.x + Qq(this.sprite_width / 2), this.y + this.sprite_height - 50, Q7);
          hp.sprite_index = "spr_checkershrapnel";
          hp.vspeed = 3;
          hp.image_xscale = 1.5;
          hp.image_yscale = 1.5;
          hp.depth = this.depth + 1;
          hp.gravity_direction = 135 + Qq(180);
          hp.gravity = 0.06;
          hp.target = this.target;
          hp.damage = this.damage;
          if (this.magamt === 6 || this.magamt === 12) {
            hp.gravity = 0;
            hp.move_towards_point(hX + 8, hY + 8, 3);
          }
          this.s_timer = 21;
          this.magamt += 1;
        }
        if (this.y < Tl - 200) {
          this.speed = 0;
          this.gravity = 0;
          this.y = this.ystart - 100;
          this.x = this.xstart + 300;
          this.hspeed = -30;
          this.vspeed = 10;
          this.jumpcon = 3;
        }
      }
      if (this.jumpcon === 3) {
        this.magamt = 0;
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          QS("snd_impact");
          QJ(0, 0, Qf);
          this.amt += 1;
          this.s_timer = 0;
          this.x = this.xstart;
          this.y = this.ystart;
          this.hspeed = 0;
          this.vspeed = 0;
          this.jumpcon = 0;
          this.jumpcon = 4;
          this.jumptimer = 0;
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
          this.image_speed = 0;
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          Qb.with("obj_regularbullet", hM => {
            hM.active = 0;
            hM.image_alpha -= 0.1;
          });
        }
        if (this.jumptimer >= 30) {
          Qx.turntimer = -1;
          this.instance_destroy();
          hB();
        }
      }
    }
    if (this.leapmode === 3) {
      Qb.with("obj_regularbullet", hM => {
        hM.image_xscale += 0.01;
        hM.image_yscale += 0.01;
      });
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_leg";
        this.image_index = 0;
        this.image_speed = 0.5;
        this.jumpcon = 1;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 3) {
          QS("snd_swing");
          QS("snd_magicsprinkle");
          for (let hM = 0; hM < 4; hM += 1) {
            let hv = QJ(this.x - 40, this.y + 100, Q7);
            hv.sprite_index = "spr_checkershrapnel";
            hv.direction = QV(hv.x, hv.y, hX + 8, hY + 8) - hM * 10 + Qq(hM * 20);
            hv.speed = 3.5 + Qq(1.8);
            hv.target = this.target;
            hv.damage = this.damage;
          }
        }
        if (this.image_index >= 5) {
          this.image_index = 5;
          this.image_speed = 0;
          this.jumpcon = 2;
        }
      }
      if (this.jumpcon === 2) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
        }
        if (this.jumptimer >= 20) {
          this.jumptimer = 0;
          this.jumpcon = 0;
          this.amt += 1;
          if (this.amt >= 4) {
            this.jumpcon = 3;
            this.jumptimer = 0;
          }
        }
      }
      if (this.jumpcon === 3) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          Qb.with("obj_regularbullet", hR => {
            hR.image_alpha -= 0.1;
            hR.active = 0;
          });
        }
        if (this.jumptimer >= 30) {
          Qx.turntimer = -1;
          this.instance_destroy();
          hB();
        }
      }
    }
    if (this.leapmode === 4) {
      if (this.jumpcon === 1 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
        this.jumptimer = 10;
      }
      if (this.jumpcon === 3 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.jumptimer += 1;
        if (this.jumptimer >= 16) {
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = hX + 8 - this.sprite_width / 2;
          this.vspeed = -12;
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 24;
          this.amt += 1;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.jumptimer = 0;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 12;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          Qx.turntimer = -1;
          hB();
          this.instance_destroy();
        }
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
      if (this.grazetimer >= 10) {
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
};
j0(Tr, "obj_checkers_leap");
j2(Tr, "kinds", QA("obj_checkers_leap", Q6));
j2(Tr, "defaultDepth", 1);
j2(Tr, "defaultSprite", "spr_checkers_idle");
var TK = Tr;
var Tb = class dL extends Q8 {
  create() {
    let hI = Qb.first("obj_heart");
    Object.assign(this, {
      con: 0,
      htimer: 0,
      image_xscale: 4,
      image_yscale: 4,
      active: 0,
      image_alpha: 0,
      image_angle: -90,
      joker: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 5,
      timepoints: 0,
      inv: 60,
      grazetimer: 0,
      spinmax: 0,
      hmax: 0,
      type: 0,
      target: 0
    });
    this.x = (hI ? hI.x : 320) + 8;
    this.y = (hI ? hI.y : 170) + 8;
  }
  step() {
    if (this.con === 4) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.friction = 0;
        this.speed = 0;
      }
      if (this.htimer >= 20) {
        this.active = 0;
        this.image_alpha -= 0.2;
      }
      if (this.htimer >= 25 && Qx.turntimer >= 0) {
        Qx.turntimer = -2;
      }
    }
    if (this.con === 3) {
      this.htimer += 1;
      if (this.htimer >= this.hmax) {
        this.direction = this.image_angle;
        this.speed = 2.5;
        this.friction = -0.5;
        if (this.joker === 1) {
          this.speed = 5;
        }
        this.con = 4;
        this.htimer = 0;
      }
    }
    if (this.con === 2) {
      this.htimer += 1;
      this.image_angle += 24;
      if (this.htimer >= this.spinmax) {
        this.hmax = 19;
        if (this.joker === 1) {
          this.hmax = 15;
        }
        this.image_angle = 270 + this.spinmax * 24;
        this.con = 3;
        this.htimer = 0;
      }
    }
    if (this.con === 1) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.spinmax = Qy(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + Qq(15);
        }
        this.con = 2;
        this.htimer = 0;
      }
    }
    if (this.con === 0) {
      this.image_alpha += 0.2;
      this.image_xscale -= 0.2;
      this.image_yscale -= 0.2;
      this.htimer += 1;
      if (this.htimer >= 5) {
        this.con = 1;
        this.htimer = 0;
        this.active = 1;
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
    }
    if (this.grazetimer >= 15) {
      this.grazetimer = 0;
      this.grazed = 0;
    }
  }
};
j0(Tb, "obj_spinheart");
j2(Tb, "kinds", QA("obj_spinheart", Q8));
j2(Tb, "defaultDepth", 0);
j2(Tb, "defaultSprite", "spr_spinheart");
j2(Tb, "defaultMask", "spr_spinheartmask");
var Tm = Tb;
var TO = class dh extends QE {
  create() {
    this.type = 0;
    this.con = 1;
    this.subcon = 0;
    this.secondtime = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.windsound = 0;
    this.crown = null;
    this.maxy = 0;
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con += 1;
    }
  }
  step() {
    if (this.type !== 1) {
      return;
    }
    let hI = this.crown;
    if (this.con === 1) {
      this.image_speed = 0;
      this.image_index = 0;
      this.crown = QJ(this.x + 24, this.y + 10, QL);
      this.crown.image_xscale = 2;
      this.crown.image_yscale = 2;
      this.crown.sprite_index = "spr_smallchecker_crown";
      this.crown.depth = this.depth - 1;
      this.sprite_index = "spr_smallchecker_transform3";
      this.con = 0.4;
      this.windsound = 0;
      this.alarm[4] = 30;
    }
    if (this.con === 1.4) {
      if (this.windsound === 0) {
        QS("snd_whistlebreath");
        this.windsound = 1;
      }
      if (this.secondtime === 0) {
        hI.hspeed += 0.2;
      } else {
        hI.hspeed += 0.4;
      }
      if (hI.hspeed >= 3) {
        this.con = 1.5;
      }
    }
    if (this.con === 1.5) {
      hI.maxy = this.y + this.sprite_height;
      hI.image_angle = -45;
      hI.y -= 10;
      hI.gravity = 0.5;
      hI.hspeed = 5;
      hI.friction = 0.2;
      this.con = 1.6;
    }
    if (this.con === 1.6 && hI.y >= hI.maxy - hI.sprite_height - 10) {
      hI.y += 10;
      hI.image_angle = 0;
      hI.gravity = 0;
      hI.vspeed = 0;
      hI.friction = 0;
      hI.hspeed = 1;
      this.con = 0.9;
      this.alarm[4] = 30;
      if (this.secondtime === 1) {
        this.alarm[4] = 10;
      }
    }
    if (this.con === 1.9) {
      this.image_speed = 0.25;
      QS("snd_crownshrink");
      this.con = 2.1;
    }
    if (this.con === 2.1) {
      this.image_speed += 0.01;
      if (this.secondtime === 1) {
        this.image_speed += 0.01;
      }
      if (this.image_speed >= 0.4) {
        this.image_index = 1;
        this.image_speed = 0;
        this.con = 3;
        this.maxy = this.y + this.sprite_height - 30;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 4) {
      this.x += 40;
      this.y += 46;
      this.sprite_index = "spr_smallchecker_legtuck";
      this.image_index = 0;
      this.image_speed = 0.25;
      this.vspeed = -3;
      this.gravity = 1;
      if (this.secondtime === 1) {
        this.vspeed = -6;
        this.gravity = 2;
        this.image_speed = 0.5;
      }
      this.con = 5;
    }
    if (this.con === 5) {
      if (this.image_index >= 2) {
        this.image_speed = 0;
      }
      if (this.y >= this.maxy - 4) {
        this.y = this.maxy;
        this.gravity = 0;
        this.vspeed = 0;
        this.con = 6;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 7) {
      this.image_angle -= 5;
      this.hspeed = 3;
      if (this.secondtime === 1) {
        this.hspeed = 6;
        this.image_angle -= 5;
      }
      if (this.x >= TS + 720) {
        this.con = 8;
        Qx.monster[0] = 0;
        Qx.monster[1] = 0;
        Qx.monster[2] = 0;
        o();
        Qb.with("obj_monsterparent", hu => hu.instance_destroy());
        this.instance_destroy();
      }
    }
  }
};
j0(TO, "obj_checker_animtest");
j2(TO, "kinds", QA("obj_checker_animtest", QE));
j2(TO, "defaultDepth", 0);
j2(TO, "defaultSprite", "spr_smallchecker_idle");
var L0 = TO;
var L1 = class dd extends QE {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 0.2;
    this.good = 1;
    this.offing = 0;
    if (Qb.number("obj_throwtarget") === 1) {
      let hI = QJ(this.x, this.y, dd);
      hI.depth = this.depth + 1;
      hI.offing = 0;
      hI.good = 0;
      hI.sprite_index = "spr_checkers_idle_crownless";
    }
    this.con = 0;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += 10;
    }
    if (this.con === 5) {
      if (this.x < this.xstart + 40) {
        this.x += 10;
      }
      this.con = 6;
    }
    if (this.con === 6 && this.x > this.xstart) {
      this.x -= 2;
    }
    if (this.con === 7) {
      if (this.x < this.xstart + 40) {
        this.x += 8;
      }
      this.con = 6;
    }
  }
};
j0(L1, "obj_throwtarget");
j2(L1, "kinds", QA("obj_throwtarget", QE));
j2(L1, "defaultDepth", 4);
j2(L1, "defaultSprite", "spr_checkers_crown");
var L2 = L1;
var L3 = class dP extends QE {
  create() {
    this.con = 0;
    this.yy = Tl;
    this.xx = TS;
    this.timer = 0;
    this.collided = 0;
    this.mypower = 10;
  }
  step() {
    let hI = Qb.first("obj_heroralsei");
    let hu = hI ? hI.y : 180;
    let hf = hI ? hI.x : 80;
    if (this.con === 0 || this.con === 2) {
      this.image_angle = this.direction;
    }
    if ((this.x > this.xx + 700 || this.y < this.yy - 40) && this.con === 0) {
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = hu;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
    if (this.con === 10) {
      this.timer += 1;
      if (this.x >= hf - 10) {
        if (this.collided === 0) {
          Qx.msg = new Array(100).fill(" ");
          Qx.msg[0] = "* Missed!/%";
          Qj();
        }
        Qb.with("obj_heroralsei", hW => {
          hW.visible = true;
        });
        Qb.with("obj_herosusie", hW => {
          hW.visible = true;
        });
        Qb.with("obj_checkers_enemy", hW => {
          hW.actcon = 1;
          hW.visible = true;
        });
        Qb.with("obj_throwtarget", hW => hW.instance_destroy());
        Qb.with("obj_throwralsei", hW => hW.instance_destroy());
        this.instance_destroy();
      }
    }
    if (this.con === 2 && (this.x < this.xx - 40 || this.y > this.yy + 520)) {
      this.timer = 0;
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = hu;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let hI of Qb.all("obj_throwtarget")) {
        if (QZ(this, hI)) {
          this.hitTarget(hI);
        }
      }
    }
  }
  hitTarget(hI) {
    if (this.collided === 0) {
      Qx.msg = new Array(100).fill(" ");
      if (hI.good === 1) {
        Qb.with("obj_checkers_enemy", hu => {
          hu.crown += 35;
        });
        Qx.msg[0] = "* The crown greatly loosened!/%";
        QS("snd_coin");
        if (hI.offing === 1) {
          hI.con = 1;
          hI.vspeed = -8;
        } else {
          hI.con = 5;
        }
      } else {
        QS("snd_noise");
        hI.con = 7;
        Qb.with("obj_checkers_enemy", hu => {
          hu.crown += 20;
        });
        Qx.msg[0] = "* The crown loosened a little!/%";
        this.hspeed = -12;
        this.vspeed = -4;
        this.gravity = 0.5;
        this.con = 2;
      }
      Qj();
      this.collided = 1;
    }
  }
};
j0(L3, "obj_ralseithrown");
j2(L3, "kinds", QA("obj_ralseithrown", QE));
j2(L3, "defaultDepth", 1);
j2(L3, "defaultSprite", "spr_ralsei_thrown");
var L4 = L3;
var L5 = class dU extends QE {
  create() {
    Object.assign(this, {
      angle: 0,
      throwcon: 1,
      angledraw: 1,
      image_xscale: 2,
      image_yscale: 2,
      radius: 300,
      anglespeed: 2,
      ralspeed: 26,
      ralgrav: 1,
      fro: 0,
      mypower: 15,
      maxpower: 30,
      minpower: 15,
      powerdir: 1,
      powerspeed: 0.6,
      throwready: 0,
      throwalpha: 0,
      activatethrow: 0,
      lx: 0,
      ly: 0
    });
    this.rx = this.x + 70;
    this.ry = this.y + 30;
    this.ralyoff = new Array(42).fill(0);
  }
  step() {
    if (this.throwcon === 1) {
      if (this.throwready === 0) {
        this.angle += this.anglespeed;
      }
      if (this.angle >= 30) {
        this.anglespeed = -2;
      }
      if (this.angle <= -15) {
        this.anglespeed = 2;
      }
      if (QD() && this.throwalpha >= 0.9 && this.throwready === 1) {
        this.activatethrow = 1;
        TD();
      }
      if (QD() && this.throwready === 0) {
        this.throwready = 1;
        TD();
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* Press " + Tz(6) + " to determine the POWER!";
        Qj();
      }
      if (this.activatethrow === 1) {
        this.activatethrow = 0;
        this.throwready = 0;
        this.image_index = 0;
        this.image_speed = 0.5;
        this.sprite_index = "spr_susieb_attack_unarmed";
        this.angledraw = 0;
        this.throwcon = 2;
        QS("snd_ultraswing");
        let hI = QJ(this.rx, this.ry, L4);
        hI.speed = this.mypower;
        hI.mypower = this.mypower;
        hI.image_xscale = 2;
        hI.image_yscale = 2;
        hI.direction = this.angle;
        hI.image_angle = this.angle;
        hI.gravity = this.ralgrav;
      }
      if (this.throwready === 1) {
        this.mypower += this.powerdir * this.powerspeed;
        if (this.mypower >= this.maxpower) {
          this.powerdir = -1;
        }
        if (this.mypower <= this.minpower) {
          this.powerdir = 1;
        }
      }
    }
    if (this.throwcon === 2 && this.image_index >= 5) {
      this.image_speed = 0;
    }
    if (this.angledraw === 1) {
      this.lx = Qk(this.mypower, this.angle);
      this.ly = Qn(this.mypower, this.angle);
      for (let hu = 0; hu < 42; hu += 1) {
        let hf = this.ralgrav + this.ralgrav * hu;
        if (hu > 0) {
          this.ralyoff[hu] = this.ralyoff[hu - 1] + hf;
        } else {
          this.ralyoff[0] = hf;
        }
      }
    }
  }
  draw(hI) {
    this.draw_self(hI);
    if (this.angledraw === 1) {
      let hu = this.rx;
      let hf = this.ry;
      let hW = this.lx;
      let hX = this.ly;
      let hY = this.fro;
      let hB = this.ralyoff;
      if (this.throwready === 1) {
        if (this.throwalpha < 1) {
          this.throwalpha += 0.125;
        }
        hI.draw_set_alpha(this.throwalpha);
        hI.draw_set_color(QF(Qz.blue, Qz.white, 0.5));
        for (let hC = 0; hC < 12; hC += 1) {
          hI.draw_circle(hu + hW * (hC * 2 + hY), hf + hX * (hC * 2 + hY) + hB[hC * 2 + hY] - 20, 4, false);
          hI.draw_line_width(hu + hW * (hC * 2 + hY), hf + hX * (hC * 2 + hY) + hB[hC * 2 + hY] - 20, hu + hW * ((hC + 1) * 2 + hY), hf + hX * ((hC + 1) * 2 + hY) + hB[(hC + 1) * 2 + hY] - 20, 2);
          hI.draw_sprite_ext("spr_throwarrow", 0, hu, hf - 20, 2, 2, this.angle, Qz.red, 1);
        }
        hI.draw_set_alpha(1);
      }
      if (this.throwready === 0) {
        hI.draw_set_color(Qz.red);
        hI.draw_sprite_ext("spr_throwarrow", 0, hu, hf - 20, 2, 2, this.angle, Qz.white, 1);
      }
    }
  }
};
j0(L5, "obj_throwralsei");
j2(L5, "kinds", QA("obj_throwralsei", QE));
j2(L5, "defaultDepth", 0);
j2(L5, "defaultSprite", "spr_susieb_throwralseiready");
var L6 = L5;
var L7 = class dH extends Q3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      checked: 0,
      crown: 0,
      attacktype: 0,
      thrown: 0,
      thissprite: "spr_checkers_idle",
      scon: 0,
      secondtime: 0,
      bowcounter: 0,
      ralsei_lecture: 0,
      milk_counter: 0,
      rtimer: 0,
      milkmax: 1000,
      milktimer: 0,
      milk: null,
      bowkris: null,
      bowral: null,
      bowcheck: null,
      trsus: null,
      throwsus: null,
      animtest: null
    });
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 4;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 4;
      return;
    }
    if (hI !== 11) {
      super.userEvent(hI);
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let hI = this.myself;
    if (Qx.monstertype[hI] === 21) {
      this.secondtime = 1;
    }
    if (Qx.monster[hI] === 1) {
      Qx.flag[51 + hI] = 4;
      if (this.secondtime === 1) {
        this.milk_counter = 99;
      }
      if (this.secondtime === 1) {
        this.ralsei_lecture = 99;
      }
      if (Qx.mnfight === 1 && this.talked === 0) {
        QY(this);
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        this.milkmax = 1000;
        if (this.milk_counter > 0) {
          this.milkmax = 600;
        }
        if (Qx.monsterhp[hI] > this.milkmax) {
          if (!Qb.exists("obj_moveheart") && !Qb.exists("obj_heart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(TS + 320, Tl + 170, QU);
          }
        }
        Qx.mnfight = 2;
        this.rtimer = 0;
        Qx.typer = 50;
        this.talked = 2;
        this.attacked = 0;
        this.talktimer = 0;
      }
      if (this.talked === 2) {
        Qx.mnfight = 2;
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talked = 0;
          this.milkmax = 1000;
          if (this.milk_counter > 0) {
            this.milkmax = 600;
          }
          if (Qx.monsterhp[hI] <= this.milkmax) {
            if (this.scon === 0) {
              this.scon = 1;
            }
          } else {
            if (!Qb.exists("obj_checkers_leap")) {
              let hu = 0;
              if (this.attacktype === 0) {
                hu = 0;
              }
              if (this.attacktype === 1) {
                hu = 3;
              }
              if (this.attacktype === 2) {
                hu = 1;
              }
              if (this.attacktype === 3) {
                hu = 2;
              }
              let hf = QJ(this.x, this.y, TK);
              hf.leapmode = hu;
              hf.target = this.mytarget;
              hf.damage = Qx.monsterat[hI] * 5;
              this.attacktype += 1;
              if (this.attacktype > 3) {
                this.attacktype = 0;
              }
            }
            this.siner = 0;
            this.visible = false;
            this.turns += 1;
          }
          Qx.turntimer = 999;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          Qy(0);
          Qx.battlemsg[0] = "* K.Round shuffles furiously.";
          if (Qx.monsterstatus[hI] === 1) {
            Qx.battlemsg[0] = "* K.Round looks weak.";
          }
          if (Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 3) {
            Qx.battlemsg[0] = "* K.Round's shuffle becomes lethargic.";
          }
          if (this.crown > 0) {
            Qx.battlemsg[0] = TF("* The crown is \\cY~1-percent\\cW loose!", String(this.crown));
          }
        } else {
          Qx.turntimer = 120;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Qx.mercymod[hI] = 999;
        }
        if (this.battlecancel === 2) {
          Qb.with("obj_battlecontroller", hW => {
            hW.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.scon === 1) {
      if (this.milk_counter > 0) {
        this.scon = 1.5;
      } else {
        TD();
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* K. ROUND felt stressed out and attacked!/%";
        Qj();
        this.scon = 1.5;
      }
    }
    if (this.scon === 1.5 && !Ta()) {
      QS("snd_magicsprinkle");
      TD();
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* K. ROUND practiced self-care!";
      Qx.turntimer = 999;
      Qj();
      this.milk = QP(this.x - 100, this.y + 60, "spr_checkers_milk");
      this.milk.image_speed = 0;
      this.milk.image_xscale = 4;
      this.milk.image_yscale = 4;
      this.milk.image_alpha = 0;
      this.milk.depth = this.depth - 1;
      this.scon = 2;
      this.milktimer = 0;
    }
    if (this.scon === 2) {
      let hW = this.milk;
      hW.image_xscale -= 0.2;
      hW.image_yscale -= 0.2;
      hW.image_alpha += 0.1;
      this.milktimer += 1;
      if (this.milktimer >= 10) {
        this.scon = 3;
        this.milktimer = 0;
        hW.image_alpha = 1.4;
      }
    }
    if (this.scon === 3) {
      this.milktimer += 1;
      if (this.milktimer >= 25) {
        this.scon = 4;
        this.milktimer = 0;
      }
    }
    if (this.scon === 4) {
      let hX = this.milk;
      hX.hspeed += 2;
      hX.image_alpha -= 0.1;
      this.milktimer += 1;
      if (this.milktimer === 10) {
        if (Qx.monsterat[hI] < 10) {
          Qx.monsterat[hI] += 0.5;
        }
        QS("snd_power");
        let hY = 700;
        if (this.milk_counter === 0) {
          hY = 300;
        }
        Qx.monsterhp[hI] += hY;
        let hB = QJ(Qx.monsterx[hI], Qx.monstery[hI], Q1);
        hB.delay = 8;
        hB.type = 3;
        hB.damage = 700;
        hB.damage = hY;
        let hC = QJ(this.x, this.y, Q2);
        hC.target = this;
      }
      if (this.milktimer >= 15) {
        hX.instance_destroy();
        this.scon = 5;
        this.milktimer = 0;
      }
    }
    if (this.scon === 5) {
      this.milktimer += 1;
      if (this.milktimer >= 30) {
        if (this.milk_counter > 0) {
          TD();
          this.scon = 0;
          this.milktimer = 0;
          Qx.turntimer = 0;
        } else {
          TD();
          this.scon = 6;
          Tq("* K. ROUND's HP and ATTACK went up!/", Tc(3), "* Susie^1! Stop attacking it^1! You're making it stronger!/", Tw(3), "* Pssh^1, and let it think I'm AFRAID^1? No way!/%");
          Qj();
        }
        this.milk_counter += 1;
      }
    }
    if (this.scon === 6) {
      if (Ta()) {
        Qx.turntimer = 999;
      } else {
        Qx.fc = 0;
        this.scon = 0;
        this.milktimer = 0;
        Qx.turntimer = 0;
      }
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (Qx.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let hI = this.myself;
    let hu = () => Qb.first("obj_herokris");
    let hf = () => Qb.first("obj_herosusie");
    let hW = () => Qb.first("obj_heroralsei");
    let hX = (hY, hB) => Qb.with(hY, hC => {
      hC.visible = hB;
    });
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      if (this.secondtime === 0) {
        Qx.msg[0] = "* K.ROUND - AT 9 DF 3&* Check^1?&* That's chess^1, not checkers!/%";
        Qx.actname[hI][0] = "Checkers";
        Qx.flag[246] = 1;
        if (this.checked === 1) {
          Qx.msg[0] = "* K.ROUND - AT 9 DF 3&* That's better./%";
        }
        this.checked = 1;
      } else {
        if (Qx.flag[246] === 1) {
          Qx.msg[0] = "* K.ROUND - AT 9 DF 3&* Watch out for its Flying King attack!/";
          Qx.msg[1] = "* (Also^1, you need to get the CROWN off of its head.)/%";
        } else {
          Qx.msg[0] = "* K.ROUND - AT 9 DF 3&* It's being controlled into attacking...!/";
          Qx.msg[1] = "* (Though^1, wouldn't it just attack anyway...?)/%";
        }
        this.checked = 1;
      }
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.secondtime === 0) {
        this.crown += 15;
      }
      if (this.secondtime === 1) {
        this.crown += 18;
      }
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You bowed to K. ROUND./%";
      hX("obj_herokris", false);
      Qx.faceaction[0] = 0;
      Qx.charaction[0] = 0;
      let hY = hu();
      this.bowkris = QP(hY ? hY.x : 80, hY ? hY.y : 100, "spr_krisb_bow");
      Ty(this.bowkris);
      let hB = Qd(this.bowkris);
      hB.hspeed = 5;
      hB.depth = this.bowkris.depth + 1;
      QS("snd_item");
      Qj();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !Ta()) {
      this.visible = false;
      this.bowcheck = QP(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.334;
      Qx.fc = 0;
      Qx.typer = 4;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* It bowed back^1.&* Its crown loosened a little./%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        Tq("* It bowed back^1.&* Its crown loosened a little./", Tc(0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", Tw(0), "* Nah^1, it's crown'll come off.../", "\\E4* When I smash this guy into the GROUND!/", Tc(1), "* .../%");
        this.ralsei_lecture = 1;
      }
      if (this.thrown === 0 && this.secondtime === 1) {
        if (this.bowcounter === 0) {
          Qx.fc = 2;
          Qx.fe = 3;
          Qx.typer = 45;
          Tq("* Huh!? That hardly did anything!/", "\\E1* How can we push off that CROWN...?/", Tw(1), "* ... Hmm./%");
        }
        if (this.bowcounter === 1) {
          Qx.fc = 2;
          Qx.fe = 3;
          Qx.typer = 45;
          Tq("* It's still hardly working!/", "\\E6* Whatever can we do^1, Kris...?/", Tw(2), "* ... Hey./%");
        }
        if (this.bowcounter === 2) {
          Qx.fc = 2;
          Qx.fe = 8;
          Qx.typer = 45;
          Tq("* Sometimes persistence is key^1, Kris!!/", "\\E6* It'll be hard^1, but we can do it!!/", Tw(7), "* HEY YOU GUYS!!!/%");
        }
      }
      this.bowcounter += 1;
      QQ();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !Ta()) {
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      hX("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 0 && this.acting === 3 && this.actcon === 0) {
      this.crown += 20;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You and Ralsei bowed./%";
      hX("obj_herokris", false);
      hX("obj_heroralsei", false);
      Qx.faceaction[0] = 0;
      Qx.charaction[0] = 0;
      Qx.faceaction[1] = 0;
      Qx.charaction[1] = 0;
      let hC = hu();
      let hx = hW();
      this.bowkris = QP(hC ? hC.x : 80, hC ? hC.y : 100, "spr_krisb_bow");
      Ty(this.bowkris);
      let hG = Qd(this.bowkris);
      hG.hspeed = 5;
      hG.depth = this.bowkris.depth + 1;
      this.bowral = QP(hx ? hx.x : 80, hx ? hx.y : 180, "spr_ralseib_bow");
      Ty(this.bowral);
      hG = Qd(this.bowral);
      hG.hspeed = 5;
      hG.depth = this.bowral.depth + 1;
      QS("snd_item");
      Qj();
      this.actcon = 30;
    }
    if (this.actcon === 30 && !Ta()) {
      this.visible = false;
      this.bowcheck = QP(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.5;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* K. ROUND bowed back^1.&* Its crown loosened!/%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        Tq("* K. ROUND bowed back^1.&* Its crown loosened!/", Tc(0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", Tw(0), "* Nah^1, its crown'll come off.../", "\\E4* When I smash this guy to the GROUND!/", Tc(1), "* .../%");
        this.ralsei_lecture = 1;
      }
      Qj();
      this.actcon = 31;
    }
    if (this.actcon === 31 && !Ta()) {
      if (this.bowral) {
        this.bowral.instance_destroy();
      }
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      hX("obj_heroralsei", true);
      hX("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 1 && this.acting === 3 && this.actcon === 0) {
      if (this.thrown === 1) {
        if (this.trsus) {
          this.trsus.instance_destroy();
        }
        this.thrown = 2;
      }
      if (this.thrown > 0) {
        Qx.actname[hI][2] = "Throw";
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* Press " + Tz(6) + " to determine the ANGLE!";
        this.flash = 0;
        this.becomeflash = 0;
        Qj();
        this.actcon = 90;
        QJ(this.x, this.y, L2);
        let hN = hf();
        this.throwsus = QJ(hN ? hN.x : 90, hN ? hN.y : 130, L6);
        this.visible = false;
        Qx.faceaction[1] = 0;
        Qx.charaction[1] = 0;
        Qx.faceaction[2] = 0;
        Qx.charaction[2] = 0;
        hX("obj_herosusie", false);
        hX("obj_heroralsei", false);
        QS("snd_grab");
      } else {
        Qx.typer = 31;
        Qx.fc = 2;
        Qx.fe = 6;
        Tq("* Susie^1? You want to ACT^1? Aww, what's your idea?/", Tw(0), "* Umm..^1. well..^1. how do I say this./", "* I kind of..^1.&* Need you for this one./", Tc(8), "* That's fine^1, Susie^1!&* I'll help!/", "\\E0* You want to apologize to it for earlier^1, right?/", Tw(2), "* Nah^1, I just need you to stay still./%");
        this.actcon = 10;
        QQ();
      }
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You explained to K. Round about the importance of dodging Susie's attacks./";
      Qx.msg[1] = "* But it didn't seem to understand.../%";
      if (this.warned === 1) {
        Qx.msg[0] = "* You started making siren noises with your mouth and looking at Susie./";
        Qx.msg[1] = "* K. Round still didn't understand.../%";
      }
      if (this.warned === 2) {
        Qx.msg[0] = "* You started explaining that Susie is really dangerous and strong./";
        Qx.msg[1] = "* Susie got a large boost to her morale./";
        Qx.msg[2] = "* Susie's ATTACK went up massively...!/%";
        Qx.battleat[2] *= 1.5;
      }
      this.warned += 1;
      Qj();
    }
    if (this.actcon === 1 && !Ta()) {
      this.actcon = 0;
      if (this.crown >= 100) {
        Qx.mercymod[hI] = 999;
        this.actcon = 50;
      } else {
        o();
      }
    }
    if (this.actcon === 10 && !Ta()) {
      this.actcon = 11;
      this.alarm[4] = 30;
      hX("obj_herosusie", false);
      hX("obj_heroralsei", false);
      this.thrown = 1;
      let hp = hf();
      this.trsus = QP(hp ? hp.x : 90, hp ? hp.y : 130, "spr_susieb_throwralseiready");
      QS("snd_grab");
    }
    if (this.actcon === 12) {
      Qx.fe = 7;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* Kris^1! We gotta get that CROWN off its head!/";
      Qx.msg[1] = "* Help me throw Ralsei at it!/%";
      QQ();
      this.actcon = 13;
    }
    if (this.actcon === 13 && !Ta()) {
      this.actcon = 0;
    }
    if (this.actcon === 50) {
      this.visible = false;
      this.animtest = QJ(this.x, this.y, L0);
      this.animtest.sprite_index = "spr_smallchecker_transform3";
      this.animtest.image_xscale = 2;
      this.animtest.image_yscale = 2;
      this.animtest.type = 1;
      this.animtest.secondtime = this.secondtime;
      this.actcon = 51;
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        this.siner = 0;
        hI.draw_sprite_ext("spr_checkers_idle", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = "spr_checkers_idle";
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        this.thissprite = "spr_checkers_idle";
      }
      hI.draw_sprite_ext(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
    this.sprite_index = this.thissprite;
    this.image_index = this.siner / 3;
  }
};
j0(L7, "obj_checkers_enemy");
j2(L7, "kinds", QA("obj_checkers_enemy", Q3));
j2(L7, "defaultDepth", 90);
j2(L7, "defaultSprite", "spr_checkers_idle");
var L8 = L7;
var L9 = class dI extends Q3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      thissprite: "spr_smallchecker_idle"
    });
    this.checkhp1 = Qx.hp[1];
    this.checkhp2 = Qx.hp[2];
    this.firstturn = 0;
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    super.userEvent(hI);
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let hI = this.myself;
    let hu = Qb.first("obj_basicattack");
    if (hu) {
      if (hu.sprite_index === "spr_attack_cut1") {
        Qx.flag[211] = 3;
      }
      if (hu.sprite_index === "spr_attack_slap1") {
        Qx.flag[211] = 3;
      }
    }
    if (Qx.monster[hI] === 1) {
      Qx.flag[51 + hI] = 4;
      if (Qx.mnfight === 1 && this.talked === 0) {
        QY(this);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (Qw() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          Qx.mnfight = 2;
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        Qb.with("obj_heartblcon", hf => hf.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let hf = QW();
          Qx.turntimer = 1;
          if (hf === 999) {
            let hW = QJ(this.x, this.y, Tm);
            hW.type = 0;
            hW.target = this.mytarget;
            hW.damage = Qx.monsterat[hI] * 5;
          }
          this.turns += 1;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          hf = Qy(0);
          if (hf === 0) {
            Qx.battlemsg[0] = "* C.Round continues to act extremely violent.";
          }
        } else {
          Qx.turntimer = 1;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (Qb.exists("obj_hathyfightevent") && this.firstturn === 0 && this.checkhp1 <= Qx.hp[1] && this.checkhp2 <= Qx.hp[2]) {
          Qb.with("obj_battlecontroller", hX => {
            hX.noreturn = 1;
          });
          Qb.with("obj_hathyfightevent", hX => {
            hX.con = 15;
          });
        }
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          Qx.mercymod[hI] = 999;
        }
      }
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (Qx.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let hI = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* C.ROUND - AT 1 DF 0&* Despite appearances^1, it's trying its best to defeat you./%";
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Tq("* You ordered Susie to flatter the enemy!/", Tw(0), "* ... what^1? Why the HELL would I do that?/", "\\E1* IT attacked US^1.&* Let's smash it before it moves./", Tc(0), "* Aww^1, look^1, Susie^1!&* It seems harmless!/", "\\E8* If you act nice^1, we might win without hurting it!/", Tw(0), "* .../", "\\E2* ... okay^1, okay./", "\\E1* Hey^1, little guy./", "\\E4* I really like the ax in your face./%");
      this.actcon = 5;
      Qj();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 5;
      Tq("* You warned C.Round about Susie^1.&* It seems barely cognizant of what that means./", Tw(0), "* Hey^1, wait^1.&* Why the hell are you giving the ENEMY advice?/", Tc(6), "* Umm^1, so we don't accidentally hurt it...?/", Tw(0), "\\E0* .../", "\\E8* HURTING IT's the point^1, you MORON./", "\\E1* It attacked us^1.&* So it dies^1.&* Simple^1, right?/", Tc(8), "* B-but Susie^1, what if the enemy might be^1, um^1, nice?/", Tw(0), "* .../", "\\E2* Okay^1, yeah^1, there's a word for that./", Tc(0), "* Oh^1?&* What is it?/", Tw(4), "\\E4* Striking first./%");
      Qx.monstercomment[hI] = "(Warned)";
      Qx.automiss[0] = 1;
      Qj();
    }
    if (this.actcon === 1 && !Ta()) {
      this.actcon = 0;
      o();
    }
    if (this.actcon === 5 && !Ta()) {
      Qx.battleat[1] = 90;
      Qx.battleat[2] = 90;
      this.actcon = 6;
      Qb.with("obj_herosusie", hu => {
        hu.attacktimer = 0;
        hu.state = 1;
        hu.points = 100 + QK(Qq(40));
        Qx.faceaction[hu.myself] = 0;
        if (Qx.automiss[0] === 1) {
          hu.points = 0;
        }
      });
      if (Qx.automiss[0] === 1) {
        this.hspeed = 5;
        Qx.mercymod[hI] = 200;
      }
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      Qx.monster[hI] = 0;
      Tq("* Where'd you get it^1?&* Heh heh heh heh./", Tc(3), "* (Umm^1, Kris^1, maybe I should talk to her...)/%");
      Qx.flag[211] = 1;
      if (Qx.automiss[0] === 1) {
        Qx.flag[211] = 2;
        Tq("\\E7* Urgh^1, you IDIOTS^1!&* It got away!/", Tc(3), "* (Wow^1, that was close^1, Kris...)/", "* (M-maybe I should talk to her...)/%");
      }
      QQ();
      this.actcon = 1;
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      if (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 3) {
        Qx.monsterstatus[hu] = 1;
        if (Qx.monstercomment[hu] === " ") {
          Qx.monstercomment[hu] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        hI.draw_sprite_ext("spr_smallchecker_hurt", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = "spr_smallchecker_idle";
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        this.thissprite = "spr_smallchecker_run";
      }
      hI.draw_sprite_ext(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(L9, "obj_smallcheckers_enemy");
j2(L9, "kinds", QA("obj_smallcheckers_enemy", Q3));
j2(L9, "defaultDepth", 90);
j2(L9, "defaultSprite", "spr_smallchecker_idle");
var LQ = L9;
var Lj = [{
  id: "cround",
  name: "C.Round",
  chapter: 1,
  area: "Field",
  desc: "C.Round.#Include Susie#in an ACT.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: LQ,
    type: 9,
    x: 440,
    y: 150,
    setup: Tk
  }],
  battlemsg: "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)",
  encounterno: 7,
  music: "battle"
}, {
  id: "kround",
  name: "K.Round",
  chapter: 1,
  area: "Field",
  desc: "K.Round.#Bow to loosen#the crown.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: L8,
    type: 10,
    x: 480,
    y: 120,
    setup: Tn
  }],
  battlemsg: "* Here it comes!",
  encounterno: 12,
  music: "battle"
}, {
  id: "kround2",
  name: "K.Round (Card Castle)",
  chapter: 1,
  area: "Card Castle",
  desc: "K.Round again.#Throw Ralsei at#the crown.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [65, 130, 210],
  monsters: [{
    cls: L8,
    type: 21,
    x: 480,
    y: 120,
    setup: To
  }],
  battlemsg: "* Here it comes^1. Again.",
  encounterno: 27,
  music: "battle"
}];
j3(L8, "G.mnfight = 2;G.mnfight = 2;");
j3(LQ, "G.mnfight = 2;");
var LT = {};
j1(LT, {
  FIGHTS: () => h5,
  SOUNDS: () => Lg,
  SPRITES: () => LJ,
  obj_defeatanim: () => LA,
  obj_lancerbattle2_event: () => h0,
  obj_lancerbike: () => Ln,
  obj_lancerboss: () => Lm,
  obj_lancerboss2: () => h2,
  obj_lancerboss3: () => h4,
  setupStats: () => LS,
  setupStats12: () => Ll,
  setupStats18: () => Lz
});
j4();
var LL = {};
j1(LL, {
  FIGHTS: () => Lv,
  SOUNDS: () => Ld,
  SPRITES: () => Lh,
  obj_afterimage_grow: () => LB,
  obj_axebullet: () => Lx,
  obj_lancerbike_neo: () => LN,
  obj_oflash: () => LW,
  obj_susieenemy: () => LM,
  setupStats: () => Lu
});
j4();
var Lh = ["spr_susie_enemy", "spr_susie_enemy_hurt", "spr_susie_enemy_defeat", "spr_susie_enemy_attack", "spr_susiel_dark", "spr_lancerbike", "spr_lancerbike_l", "spr_lancernoise", "spr_axebullet_b", "spr_spadebullet", "spr_ralseib_sing", "spr_battleblcon_long"];
var Ld = ["snd_sussurprise", "snd_ralseising1", "snd_ralseising2", "snd_lancerwhistle", "snd_jump", "snd_splat", "snd_laz_c", "snd_lancerhonk", "snd_drive"];
function LP(hI, ...hu) {
  return hI.replace(/~(\d)/g, (hf, hW) => String(hu[parseInt(hW) - 1]));
}
j0(LP, "scr_84_get_subst_string");
function LU(hI, hu) {
  Qx.msg[hI] = LP("\\TX \\F0 \\E~1 \\FL \\TL %", String(hu));
}
j0(LU, "scr_lanface");
function LH(hI) {
  Qx.msg[hI] = "\\TX \\F0 \\T0 %";
}
j0(LH, "scr_noface");
function LI() {
  let hI = [];
  let hu = "";
  for (let hf = 0; hf < 100; hf++) {
    let hW = Qx.msg[hf];
    if (hW === undefined || hW === " " || hW === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(hW)) {
      let hX = /\\E([0-9A-F])/.exec(hW);
      hu = hX ? "\\E" + hX[1] : "";
      continue;
    }
    hI.push(hu + hW);
    hu = "";
  }
  Qx.msg = hI.concat(new Array(Math.max(0, 100 - hI.length)).fill(" "));
}
j0(LI, "packFaces");
function Lu(hI) {
  let hu = Qx.itemdf[2][0] + Qx.itemdf[2][1] + Qx.itemdf[2][2];
  Qx.monstername[hI] = "Susie";
  Qx.monstermaxhp[hI] = 120;
  Qx.monsterhp[hI] = 120;
  Qx.monsterat[hI] = 7;
  Qx.monsterdf[hI] = -5 + hu;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 0;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Anything";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "Sing";
  Qx.actactor[hI][2] = 3;
}
j0(Lu, "setupStats");
var Lf = class du extends QE {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = Qz.white;
  }
  draw(hI) {
    if (Qb.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let hu = Qg[this.sprite_index];
    if (hu) {
      let hf = hI.ctx;
      hf.save();
      hf.globalAlpha = Math.max(0, Math.min(1, QM(this.siner / 3)));
      hf.translate(this.x, this.y);
      hf.scale(this.image_xscale, this.image_yscale);
      hf.drawImage(hI.tinted(hu, hI.frame(this.sprite_index, this.image_index), this.flashcolor, true), -hu.ox, -hu.oy);
      hf.restore();
    }
    if (this.siner > 4 && QM(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
j0(Lf, "obj_oflash");
j2(Lf, "kinds", QA("obj_oflash", QE));
j2(Lf, "defaultDepth", 0);
var LW = Lf;
function LX(hI) {
  let hu = QJ(hI.x, hI.y, LW);
  hu.image_xscale = hI.image_xscale;
  hu.image_speed = 0;
  hu.image_index = hI.image_index;
  hu.image_yscale = hI.image_yscale;
  hu.sprite_index = hI.sprite_index;
  hu.depth = hI.depth - 1;
  hu.target = hI;
  return hu;
}
j0(LX, "scr_oflash");
var LY = class df extends QE {
  create() {
    this.xrate = 0.2;
    this.yrate = 0.2;
    this.fade = 0.1;
  }
  step() {
    this.image_alpha -= this.fade;
    this.image_xscale += this.xrate;
    this.image_yscale += this.yrate;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
j0(LY, "obj_afterimage_grow");
j2(LY, "kinds", QA("obj_afterimage_grow", QE));
j2(LY, "defaultDepth", 0);
var LB = LY;
var LC = class dW extends Q6 {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.counter = 0;
    this.image_angle = 0;
    this.seizure = 0;
    this.hspeed = -7.6 - Qq(1.5);
    this.vspeed = -2 + Qq(4);
    this.gravity = 0.13;
    this.gravity_direction = 0;
    this.active = 1;
    this.timepoints = 4;
    this.grazepoints = 4;
    this.damage = 30;
    this.grazed = 0;
  }
  step() {
    if (this.seizure === 0) {
      this.counter += 1;
      if (this.counter >= 3) {
        this.image_angle += 45;
        this.counter = 0;
      }
    }
    if (this.seizure === 1) {
      this.image_angle += 10;
    }
    if (this.x >= 700) {
      this.instance_destroy();
    }
  }
};
j0(LC, "obj_axebullet");
j2(LC, "kinds", QA("obj_axebullet", Q6));
j2(LC, "defaultDepth", 2);
j2(LC, "defaultSprite", "spr_axebullet_b");
var Lx = LC;
var LG = class dX extends Q7 {
  create() {
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.racecon = 0;
    this.topy = 100;
    this.bottomy = 300;
    this.susiex = this.x - 100;
    this.susiey = this.y - 180;
    let hI = Qb.first("obj_susieenemy");
    if (hI) {
      this.susiex = hI.x;
      this.susiey = hI.y;
    }
    this.s_tracking = 0;
    this.s_attack = 0;
    this.s_timer = 0;
    this.type = 0;
  }
  userEvent(hI) {
    if (hI === 5) {
      QC(this);
    }
  }
  step() {
    let hI = Qb.first("obj_heart");
    if (this.racecon === 0) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.vdir = Qy(1, -1);
      this.racecon = 1;
      this.rtimer = 0;
      Qb.with("obj_susieenemy", hW => {
        hW.visible = false;
      });
      let hf = QJ(this.susiex, this.susiey, Q8);
      this.s = hf;
      Q4(this, hf);
      hf.wall_destroy = 0;
      hf.sprite_index = "spr_susiel_dark";
      hf.image_xscale = 2;
      hf.image_yscale = 2;
      hf.active = 1;
      hf.depth = this.depth - 1;
      hf.image_speed = 0;
      hf.image_index = 1;
      hf.lx = this.x;
      hf.ly = this.y - 108;
      QS("snd_jump");
      hf.hspeed = -2;
      hf.vspeed -= 7;
      hf.gravity = 1;
    }
    let hu = this.s;
    if (this.racecon === 1) {
      this.siner = 0;
      this.rtimer += 1;
      if (this.rtimer === 13) {
        Ql("snd_jump");
        QS("snd_splat");
      }
      if (this.rtimer >= 13) {
        this.image_xscale += 0.1;
        this.image_yscale -= 0.15;
      }
      if (this.rtimer === 16) {
        hu.speed = 0;
        hu.gravity = 0;
        hu.image_index = 0;
        this.sfitx = hu.x - this.x;
        this.sfity = hu.y - this.y;
        this.s_tracking = 1;
        this.ax_timer = 0;
        this.s_timer = 0;
        this.racecon = 2;
        this.rtimer = 0;
      }
    }
    if (this.s_attack === 1) {
      this.ax_timer += 1;
      this.s_timer += 1;
      if (this.s_timer === 1) {
        let hW = QJ(hu.x - 40, hu.y - 15, Lx);
        Q4(this, hW);
        hW.depth = this.depth + 2;
        hW.hspeed = -16;
        if ((hI ? hI.y : 170) >= hW.y) {
          hW.gravity_direction = -15 + Qq(10);
          hW.vspeed = 2;
        } else {
          hW.gravity_direction = 5 + Qq(10);
          hW.vspeed = -2;
        }
        hW.gravity = 0.5;
        hW.hspeed += this.ax_timer * 0.3;
        QS("snd_laz_c");
        hu.sprite_index = "spr_susie_enemy_attack";
        hu.active = 0;
        hu.image_index = 0;
        hu.image_speed = 0.5;
      }
      if (this.s_timer === 4) {
        hu.active = 0;
      }
      if (this.s_timer === 8) {
        hu.image_speed = 0;
      }
      if (this.s_timer === 8 && this.ax_timer <= 60) {
        this.s_timer = 0;
      }
    }
    if (this.racecon === 2) {
      this.rtimer += 1;
      if (this.rtimer >= 1 && (this.y <= this.ory - 120 || this.y >= this.ory + 120)) {
        if (this.y <= this.ory - 120 && this.vspeed < 0) {
          this.vspeed = -this.vspeed;
        }
        if (this.y >= this.ory + 120 && this.vspeed > 0) {
          this.vspeed = -this.vspeed;
        }
      }
      if (this.rtimer === 5 || this.rtimer === 10) {
        this.vspeed = 0;
        QS("snd_lancerhonk");
        let hX = QJ(this.x - 60, this.y - 40, LB);
        hX.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer === 30) {
        this.active = 1;
        this.s_attack = 1;
        this.racecon = 3;
        this.rtimer = 0;
        this.ang = 0;
        QS("snd_drive");
        this.hspeed = -10;
        this.vspeed = -11;
        this.gravity = 0.5;
      }
    }
    if (this.racecon === 3) {
      this.rtimer += 1;
      if (this.x <= -40) {
        this.speed = 0;
        this.gravity = 0;
        this.friction = 0;
        this.s_attack = 0;
        this.s_tracking = 0;
        this.image_xscale = 2;
        this.image_yscale = 2;
        this.x = 740;
        this.y = this.ory;
        hu.x = this.susiex + 200;
        hu.hspeed = -8;
        hu.y = this.susiey;
        hu.sprite_index = "spr_susie_enemy";
        this.hspeed = -6;
        this.racecon = 4;
      }
    }
    if (this.racecon === 4) {
      let hY = 0;
      if (hu.x <= this.susiex) {
        hY += 1;
        hu.hspeed = 0;
        hu.x = this.susiex;
      }
      if (this.x <= this.orx + 5) {
        hY += 1;
        this.hspeed = 0;
        this.x = this.orx;
      }
      if (hY >= 2) {
        Qx.turntimer = 5;
        Qb.with("obj_susieenemy", hB => {
          hB.visible = true;
        });
        Qb.with("obj_lancerboss3", hB => {
          hB.visible = true;
        });
        this.racecon = -1;
      }
    }
    if (this.s_tracking === 1) {
      hu.x = this.x + this.sfitx;
      hu.y = this.y + this.sfity;
    }
  }
};
j0(LG, "obj_lancerbike_neo");
j2(LG, "kinds", QA("obj_lancerbike_neo", Q7));
j2(LG, "defaultDepth", -20);
j2(LG, "defaultSprite", "spr_lancerbike");
var LN = LG;
e({
  20: (hI, {
    heart: hu
  }) => {
    if (Qb.exists("obj_lancerboss3")) {
      if (hI.made === 0) {
        QS("snd_lancerwhistle");
        hI.whistletimer = 0;
        hI.made = 1;
        Qb.with("obj_lancerboss3", hf => {
          hf.idlesprite = "spr_lancerbike_l";
        });
      }
      if (hI.made === 1) {
        hI.whistletimer += 1;
        if (hI.whistletimer >= 30) {
          Qb.with("obj_lancerboss3", hf => {
            hf.idlesprite = "spr_lancerbike";
          });
          hI.made = 2;
        }
      }
    }
    if (hI.btimer >= 8) {
      let hf = -80 + Qq(160) + 8;
      let hW = QJ((hu ? hu.x : 320) + hf, -20, Q7);
      if (!hW.destroyed) {
        hW.damage = hI.damage;
        hW.target = hI.target;
        hW.sprite_index = "spr_spadebullet";
        hW.image_angle = 270;
        hW.gravity = 0.3;
        hW.speed = 0;
        hW.vspeed = 3;
        hW.hspeed = -0.6 + Qq(1.2);
      }
      if (hI.side === 1) {
        hI.side = -1;
      } else {
        hI.side = 1;
      }
      hI.btimer = 0;
    }
  },
  85: (hI, {
    bsy: hu
  }) => {
    if (hI.made === 0) {
      hI.cheer = 0;
      hI.cheertimer = 0;
      hI.remhp = [Qx.hp[Qx.char[0]], Qx.hp[Qx.char[1]]];
      Qb.with("obj_susieenemy", hX => {
        hX.visible = false;
      });
      Qb.with("obj_lancerboss3", hX => {
        hX.visible = false;
      });
      let hf = QJ(580, hu + 160, Q5);
      hI.fakelan = hf;
      hf.depth += 1;
      hf.image_xscale = 2;
      hf.image_yscale = 2;
      hf.visible = true;
      hf.sprite_index = "spr_lancerbike";
      hf.active = 0;
      hf.image_speed = 0.2;
      let hW = QJ(530, hu - 40, Q5);
      hI.fakesus = hW;
      hW.image_xscale = 2;
      hW.image_yscale = 2;
      hW.visible = true;
      hW.sprite_index = "spr_susie_enemy_attack";
      hW.active = 0;
      hW.image_speed = 0;
      hI.made = 1;
    }
    if (hI.made === 1) {
      if (Qb.exists(hI.fakelan)) {
        if (hI.cheer === 0 && Qx.inv > 10) {
          hI.cheer = 1;
          QS("snd_lancerwhistle");
          hI.fakelan.sprite_index = "spr_lancerbike_l";
        }
        if (hI.cheer === 1) {
          hI.cheertimer += 1;
          if (hI.cheertimer >= 30) {
            hI.cheertimer = 0;
            hI.fakelan.sprite_index = "spr_lancerbike";
            hI.cheer = 0;
          }
        }
      }
      if (Qb.exists(hI.fakesus) && hI.fakesus.image_index < 5) {
        hI.fakesus.image_index += 0.334;
      }
    }
    if (hI.made === 1 && Qx.turntimer <= 10) {
      if (Qb.exists(hI.fakesus)) {
        hI.fakesus.visible = false;
      }
      if (Qb.exists(hI.fakelan)) {
        hI.fakelan.visible = false;
      }
      Qb.with("obj_susieenemy", hX => {
        hX.visible = true;
      });
      Qb.with("obj_lancerboss3", hX => {
        hX.visible = true;
      });
    }
    if (hI.btimer >= 27 && Qb.exists("obj_battlesolid") && Qx.turntimer > 10) {
      if (Qb.exists(hI.fakesus)) {
        hI.fakesus.image_index = 0;
        QS("snd_laz_c");
      }
      for (let hX = 0; hX < 1; hX += 1) {
        let hY = QJ(540, hu, Lx);
        Q4(hI, hY);
      }
      hI.btimer = 0;
    }
  }
});
var Lp = class dY extends Q3 {
  create() {
    Qx.turntimer = 0;
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
      idlesprite: "spr_susie_enemy",
      hurtsprite: "spr_susie_enemy_hurt",
      sparedsprite: "spr_susie_enemy",
      attacktype: 0,
      sleeping: 0,
      sleepcounter: 99,
      lullabied: 0,
      lancer_act: 0,
      susie_act: 0,
      lancer_hurt: 0,
      pacifycon: 0,
      defeated: 0,
      lancerhurt: 0,
      anythingcounter: 0,
      anythingxcounter: 0,
      tirespare: 0,
      ears_blocked: 0,
      susie_anythingcounter: 0,
      rtimer: 0,
      shakex: 0,
      pacifytimer: 0,
      lullatimer: 0
    });
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con += 1;
    }
  }
  userEvent(hI) {
    if (hI === 1) {
      this.talk();
      return;
    }
    if (hI !== 11) {
      if (hI === 12) {
        Qx.monsterx[this.myself] = this.x + 20;
        Qx.monstery[this.myself] = this.y + (this.sprite_height || 90) / 2;
        return;
      }
      super.userEvent(hI);
    }
  }
  talk() {
    let hI = this.myself;
    if (Qx.mnfight === 1 && this.talked === 0) {
      let hu = 0;
      this.sleepcounter += 1;
      if (this.sleepcounter >= 3 && this.sleeping === 1) {
        this.sleeping = 0;
        this.idlesprite = "spr_susie_enemy";
        Qx.monstercomment[hI] = "(Awake)";
        Qx.monsterstatus[hI] = 0;
        this.sleepcounter = 99;
        hu = 1;
      }
      if (this.sleeping === 0) {
        QY(this);
      }
      if (!Qb.exists("obj_darkener")) {
        QJ(0, 0, Qu);
      }
      Qx.typer = 53;
      Qx.msg = new Array(100).fill(" ");
      let hf = Qy(0, 1, 2, 3);
      if (hf === 0) {
        Qx.msg[0] = "Heh,&scared?";
      }
      if (hf === 1) {
        Qx.msg[0] = "Weasel&out of&THIS!";
      }
      if (hf === 2) {
        Qx.msg[0] = "Talk your&way out of&THIS!";
      }
      if (hf === 3) {
        Qx.msg[0] = "Think&fast!";
      }
      if (this.lancer_hurt === 0 && Qx.monsterhp[1] <= Qx.monstermaxhp[1] * 0.5) {
        this.lancer_hurt = 1;
        if (Qx.monsterhp[hI] === Qx.monstermaxhp[hI]) {
          Qx.msg[0] = "Hey^1, stop&ganging up&on him!";
        } else {
          Qx.msg[0] = "Hey^1, stop&hitting&him!";
        }
      }
      if (this.acting === 2) {
        if (this.anythingcounter === 1) {
          Qx.msg[0] = "No way!&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 2) {
          Qx.msg[0] = "Really?&...&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 3) {
          Qx.msg[0] = "What are&you even&doing?";
        }
        if (this.anythingcounter === 4) {
          Qx.msg[0] = " Really...?&No way, I&don't see&anything!";
        }
        if (this.anythingcounter >= 5) {
          Qx.msg[0] = "Yeah, it's&hopeless.";
        }
      }
      if (this.lancer_act === 3) {
        if (this.anythingxcounter === 1) {
          Qx.msg[0] = "Flattery&won't&work on&US!!!";
        }
        if (this.anythingxcounter === 2) {
          Qx.msg[0] = "THAT'S&THE&POINT!!!";
        }
        if (this.anythingxcounter === 3) {
          Qx.msg[0] = "Huh...?&I mean...&NO!!!";
        }
        if (this.anythingxcounter >= 4) {
          Qx.msg[0] = "Heh,&score for&the BAD&GUYS!";
        }
      }
      if (this.sleeping === 1) {
        Qx.msg[0] = "(Zzzz...)";
      }
      if (hu === 1) {
        Qx.msg[0] = "(Yawn)&I'm awake,&did I miss&anything?";
      }
      hu = 0;
      this.lancer_act = 0;
      QT(this.x - 160, this.y, 3);
      this.talked = 1;
      this.talktimer = 0;
    }
  }
  step() {
    let hI = this.myself;
    if (Qx.monster[hI] === 1 && this.defeated === 0) {
      Qx.flag[51 + hI] = 4;
      this.userEvent(1);
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (Qw() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          Qb.with("obj_writer", hu => hu.instance_destroy());
          Qx.mnfight = 2;
        }
        if (Qx.mnfight === 2) {
          if (!Qb.exists("obj_moveheart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          Qx.turntimer = 180;
          if (this.attacktype === 2) {
            let hf = QJ(this.x + this.sprite_width / 2, this.y + this.sprite_height / 2, k);
            hf.type = 85;
            hf.target = this.mytarget;
            hf.damage = Qx.monsterat[hI] * 5;
            hf.timepoints = 3;
            hf.grazepoints = 5;
            if (this.sleeping === 1) {
              hf.instance_destroy();
            }
          }
          if (this.attacktype === 1) {
            let hW = QJ(this.x, this.y, k);
            hW.type = 20;
            hW.target = this.mytarget;
            hW.damage = Qx.monsterat[hI] * 5;
            hW.timepoints = 3;
            hW.grazepoints = 3;
            if (this.sleeping === 1) {
              hW.instance_destroy();
            }
          }
          if (this.attacktype === 0 && this.sleeping === 0) {
            let hX = Qb.first("obj_lancerboss3");
            let hY = QJ(hX ? hX.x : this.x + 20, hX ? hX.y : this.y + 160, LN);
            Qb.with("obj_lancerboss3", hB => {
              hB.visible = false;
            });
            hY.target = this.mytarget;
            hY.damage = Qx.monsterat[hI] * 5;
            Qx.turntimer = 999;
          }
          this.attacktype += 1;
          if (this.attacktype >= 3) {
            this.attacktype = 0;
          }
          this.turns += 1;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          let hu = Qy(0, 1, 2, 3, 4);
          Qx.battlemsg[0] = "* Susie and Lancer are making fun of you.";
          if (hu === 1) {
            Qx.battlemsg[0] = "* Susie and Lancer are gloating about how great their team is.";
          }
          if (hu === 2) {
            Qx.battlemsg[0] = "* Susie and Lancer are having an evil laugh contest.";
          }
          if (hu === 3) {
            Qx.battlemsg[0] = "* Susie and Lancer are coming up with victory celebration plans.";
          }
          if (hu === 4) {
            Qx.battlemsg[0] = "* Smells like teamwork.";
          }
        } else {
          Qx.turntimer = 120;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Qx.mercymod[hI] = 999;
        }
        if (this.battlecancel === 2) {
          Qb.with("obj_battlecontroller", hB => {
            hB.noreturn = 1;
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
      Qx.typer = 50;
      Qx.mercymod[hI] = 999;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "Alright^1,&you convinced&me!!/%";
      QT(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !Qb.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      Qb.with("obj_battlecontroller", hB => {
        hB.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      Qb.with("obj_battlecontroller", hB => {
        hB.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (this.pacifycon > 0) {
      Qx.spelldelay = 999;
      Qb.with("obj_spellphase", hB => {
        if (hB.spelltimer > 30) {
          hB.spelltimer = 30;
        }
      });
    }
    if (this.pacifycon === 1) {
      let hB = Qb.first("obj_spellphase");
      if (hB && hB.spelltimer >= 15) {
        this.pacifytimer = 0;
        this.pacifycon = 2;
        Qb.with("obj_lancerboss3", hC => {
          hC.visible = false;
        });
        this.temp_l = QP(this.x - 40, this.y + this.sprite_height, "spr_lancerbike");
        this.temp_l.depth = this.depth - 2;
      }
    }
    if (this.pacifycon === 2) {
      QS("snd_lancerwhistle");
      if (Qb.exists(this.temp_l)) {
        let hC = LX(this.temp_l);
        hC.flashcolor = Qz.blue;
      }
      this.pacifycon = 3;
    }
    if (this.pacifycon === 3) {
      this.pacifytimer += 1;
      if (this.pacifytimer >= 30 && !Qb.exists("obj_writer")) {
        if (Qb.exists(this.temp_l)) {
          this.temp_l.instance_destroy();
        }
        Qb.with("obj_lancerboss3", hx => {
          hx.visible = true;
        });
        this.pacifycon = 4;
        Qb.with("obj_monsterparent", hx => {
          hx.susie_act = 9;
        });
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
        LU(1, 3);
        Qx.msg[2] = "* I'll never let you SPARE my friends!!!/";
        LH(3);
        Qx.msg[4] = "* (Lancer's BIKE began to get tired??????????????)/%";
        if (this.tirespare === 1) {
          Qx.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          Qx.msg[1] = "* (The WHEEL of the BIKE became SPARED!)/";
          Qx.msg[2] = "* (It turned into a SPARED TIRE!)/";
          Qx.msg[3] = "* (... that didn't do anything though.)/";
          Qx.msg[4] = "* (Seems that PACIFYing won't work!)/%";
        }
        if (this.tirespare >= 2) {
          Qx.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          Qx.msg[1] = "* (Seems that nothing else interesting will happen!)/%";
        }
        LI();
        Qj();
        this.pacifycon = 5;
        this.tirespare += 1;
      }
    }
    if (this.pacifycon === 5 && !Qb.exists("obj_writer")) {
      Qx.spelldelay = 20;
      Qb.with("obj_spellphase", hx => {
        hx.spelltimer = 18;
      });
      this.pacifycon = 0;
    }
  }
  actStep() {
    let hI = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      let hu = Qx.itemdf[2][0] + Qx.itemdf[2][1] + Qx.itemdf[2][2];
      let hf = Qx.itemat[2][0] + Qx.itemat[2][1] + Qx.itemat[2][2];
      let hW = String(Qx.df[2] + hu);
      let hX = String(Qx.at[2] + hf);
      let hY = String(Qx.maxhp[2]);
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = LP("* SUSIE - AT:~1 DF:~2 HP:~3&* If you read the status screen^1, you already knew that./%", hX, hW, hY);
      if (hu > 0) {
        Qx.msg[0] = LP("* SUSIE - AT:~1 DF:~2 HP:~3&* The armor you equipped her with just made her tougher!/%", hX, hW, hY);
      }
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You tried convincing Susie not to fight./";
      if (this.anythingcounter === 1) {
        Qx.msg[0] = "* You tried telling Susie you like her hair./";
      }
      if (this.anythingcounter === 2) {
        Qx.msg[0] = "* You growled at Susie like a bear./";
      }
      if (this.anythingcounter === 3) {
        Qx.msg[0] = "* You told Susie you'd give her a picnic basket of worms./";
      }
      if (this.anythingcounter >= 4) {
        Qx.msg[0] = "* You have no idea what to do what to Susie anymore./";
      }
      Qx.msg[1] = "* There was no effect!/%";
      if (this.anythingcounter >= 1) {
        Qx.msg[1] = "* It seems this command is a total waste of time!/%";
      }
      Qj();
      this.anythingcounter += 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      Qb.with("obj_monsterparent", hC => {
        hC.susie_act = 3;
      });
      if (this.lullabied === 0) {
        this.singy = "snd_ralseising1";
        QS("snd_ralseising1");
        Qb.with("obj_susieenemy", hC => {
          hC.lullabied = 1;
        });
      } else {
        this.singy = "snd_ralseising2";
        QS("snd_ralseising2");
        Qb.with("obj_susieenemy", hC => {
          hC.lullabied = 0;
        });
      }
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let hB = Qb.first("obj_heroralsei");
      if (hB) {
        hB.visible = false;
      }
      this.ralsing = QP(hB ? hB.x : 80, hB ? hB.y : 180, "spr_ralseib_sing");
      this.ralsing.image_speed = 0.2;
      this.lullatimer = 0;
      Qj();
      this.actcon = 10;
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && !Qb.exists("obj_writer")) {
      if (Qb.exists(this.ralsing)) {
        this.ralsing.instance_destroy();
      }
      Qb.with("obj_heroralsei", hC => {
        hC.visible = true;
      });
      Ql(this.singy);
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* SUSIE fell asleep!/%";
      if (this.sleeping === 1) {
        Qx.msg[0] = "* But SUSIE was already asleep...!/%";
      }
      this.idlesprite = "spr_susie_enemy_defeat";
      this.sleepcounter = 0;
      this.sleeping = 1;
      Qx.monstercomment[hI] = "(Asleep)";
      Qx.monsterstatus[hI] = 1;
      Qj();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !Qb.exists("obj_writer")) {
      this.actcon = 0;
      o();
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      this.sleepcounter = 99;
      this.sleeping = 0;
      Qx.monstercomment[hu] = "(Awake)";
      Qx.monsterstatus[hu] = 0;
      this.idlesprite = "spr_susie_enemy";
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          QS("snd_sussurprise");
          this.visible = false;
          this.instance_destroy();
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
        hI.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let hf = this.idlesprite;
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hf = this.idlesprite;
      }
      hI.draw_sprite_ext(hf, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(hf, this.siner / 6, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(Lp, "obj_susieenemy");
j2(Lp, "kinds", QA("obj_susieenemy", Q3));
j2(Lp, "defaultDepth", 95);
j2(Lp, "defaultSprite", "spr_susie_enemy");
var LM = Lp;
var Lv = [{
  id: "susie",
  name: "Susie",
  chapter: 1,
  area: "Field",
  desc: "Two bad guys#blocked the way!#(Susie only)",
  party: [1, 3, 0],
  heromakex: [80, 80, 80],
  heromakey: [100, 180, 210],
  monsters: [{
    cls: LM,
    type: 19,
    x: 520,
    y: 80,
    setup: Lu
  }],
  battlemsg: "* Two bad guys blocked the way!",
  encounterno: 31,
  music: "lancerfight"
}];
j3(LM, "G.mnfight = 2;");
var LJ = ["spr_lancerbike", "spr_lancerbike_l", "spr_lancerbike_hurt", "spr_lancerbike_earcover", "spr_lancernoise", "spr_lancer_battle", "spr_lancer_battle_hurt", "spr_spadebullet", "spr_susieb_idle_serious", "spr_susieb_attack_serious", "spr_defeatsweat", "spr_susieb_idle", "spr_susieb_attack", "spr_pixel_white"];
var Lg = ["snd_cardrive", "snd_spearrise", "snd_lancerhonk", "snd_drive", "snd_laz_c", "snd_bell", "snd_power", "snd_lancerwhistle", "snd_defeatrun", "snd_txtlan", "snd_txtsus"];
var LZ = {
  32: ["fnt_mainbig", Qz.white, 1, "snd_txtlan", 16, 36],
  46: ["fnt_mainbig", Qz.white, 1, "snd_txtlan", 16, 28],
  53: ["fnt_dotumche", Qz.black, 1, "snd_txtsus", 9, 20],
  54: ["fnt_dotumche", Qz.black, 2, "snd_txtsus", 9, 20]
};
function LR(hI) {
  let hu = LZ[Qx.typer];
  if (!!hI && !!hu) {
    [hI.myfont, hI.mycolor, hI.rate, hI.textsound, hI.hspace, hI.vspace] = hu;
    hI.xcolor = hI.mycolor;
  }
  return hI;
}
j0(LR, "scr_texttype_fix");
function LS(hI) {
  Qx.monstername[hI] = "Lancer";
  Qx.monstermaxhp[hI] = 540;
  Qx.monsterhp[hI] = 540;
  Qx.monsterat[hI] = 5;
  Qx.monsterdf[hI] = 1;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 20;
  Qx.sparepoint[hI] = 10;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Warning";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "Compliment";
  Qx.battlemsg[0] = "* Lancer busts in!";
}
j0(LS, "setupStats");
function Ll(hI) {
  Qx.monstername[hI] = "Lancer";
  Qx.monstermaxhp[hI] = 2400;
  Qx.monsterhp[hI] = 2400;
  Qx.monsterat[hI] = 4;
  Qx.monsterdf[hI] = -40;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 0;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
}
j0(Ll, "setupStats12");
function Lz(hI) {
  Qx.monstername[hI] = "Lancer";
  Qx.monstermaxhp[hI] = 800;
  Qx.monsterhp[hI] = 800;
  Qx.monsterat[hI] = 6;
  Qx.monsterdf[hI] = 1;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 0;
  Qx.sparepoint[hI] = 0;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Anything";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "X-Anything";
  Qx.actactor[hI][2] = 3;
}
j0(Lz, "setupStats18");
var LF = j0((hI, hu) => {
  Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FS \\TS %";
}, "scr_susface");
var Lc = j0((hI, hu) => {
  Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FL \\TL %";
}, "scr_lanface");
var Lw = j0((hI, hu) => {
  Qx.msg[hI] = "\\TX \\F0 \\E" + hu + " \\FR \\TR %";
}, "scr_ralface");
var Lq = j0(hI => {
  Qx.msg[hI] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
function La() {
  let hI = [];
  let hu = "";
  for (let hf = 0; hf < 100; hf++) {
    let hW = Qx.msg[hf];
    if (hW === undefined || hW === " " || hW === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(hW)) {
      let hX = /\\E([0-9A-F])/.exec(hW);
      hu = hX ? "\\E" + hX[1] : "";
      continue;
    }
    hI.push(hu + hW);
    hu = "";
  }
  Qx.msg = new Array(100).fill(" ");
  hI.forEach((hY, hB) => {
    Qx.msg[hB] = hY;
  });
}
j0(La, "packFaces");
var LD = ["* Lancer's riding it out.", "* Lancer is thinking about chips.", "* Lancer's motorcycle is actually just a bike that's on fire.", "* Lancer switches gears randomly to appear competent.", "* Lancer revs viciously."];
var LE = class dB extends QE {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    QS("snd_defeatrun");
  }
  draw(hI) {
    if (this.t === 0) {
      this.draw_self(hI);
    }
    let hu = 0;
    if (this.g <= 5) {
      hu = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      hu = 1;
    }
    if (hu === 1) {
      hI.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let hf = 0; hf <= 80; hf++) {
        hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x + hf * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, Math.max(0, 0.4 - this.t / 8 + hf / 200));
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
  step() {
    this.g++;
    if (this.g >= 15) {
      this.t++;
    }
  }
};
j0(LE, "obj_defeatanim");
j2(LE, "kinds", QA("obj_defeatanim", QE));
j2(LE, "defaultDepth", 0);
var LA = LE;
function Ly(hI) {
  let hu = QJ(hI.x, hI.y, LA);
  hu.sprite_index = hI.hurtsprite;
  hu.image_index = 0;
  hu.image_xscale = hI.image_xscale;
  hu.image_yscale = hI.image_yscale;
  hI.instance_destroy();
}
j0(Ly, "scr_defeatrun");
var Lk = class dC extends Q7 {
  create() {
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    if (Qx.hp[1] <= Qx.maxhp[1] / 2) {
      this.damage = 10;
    }
    if (Qx.hp[1] <= Qx.maxhp[1] / 4) {
      this.damage = 5;
    }
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.endcon = 0;
    this.racecon = 0;
    this.topy = 120;
    this.bottomy = 250;
  }
  userEvent(hI) {
    if (hI === 5) {
      if (this.target === 0 && Qx.hp[1] <= Qx.maxhp[1] / 2) {
        this.damage = Qm(Qx.hp[1] / 3);
      }
      QC(this);
    }
  }
  step() {
    let hI = Qb.first("obj_heart");
    if (this.lcon === 1) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.ltimer = 0;
      this.shrinktimer = 0;
      this.lcon = 1.5;
    }
    if (this.lcon === 1.5) {
      this.ltimer++;
      if (this.ltimer >= 10) {
        this.ltimer = 0;
        this.lcon = 2;
        QS("snd_cardrive");
      }
    }
    if (this.lcon >= 6 && this.lcon < 10 && (this.btimer++, this.btimer >= 10)) {
      let hu = Qk(40, this.image_angle - 20);
      let hf = Qn(40, this.image_angle - 20);
      QS("snd_spearrise");
      let hW = QJ(this.x - hu, this.y - hf, Q7);
      if (!hW.destroyed) {
        hW.target = this.target;
        hW.damage = this.damage;
        if (hW.target === 0 && Qx.hp[1] <= Qx.maxhp[1] / 2) {
          hW.damage = Qm(Qx.hp[1] / 3);
        }
        hW.timepoints = 0;
        hW.sprite_index = "spr_spadebullet";
        hW.move_towards_point(hI ? hI.x + 8 : 320, hI ? hI.y + 8 : 170, 4);
        hW.image_angle = hW.direction;
        hW.friction = -0.4;
        hW.depth = this.depth + 1;
      }
      this.btimer = 0;
    }
    if (this.lcon === 2) {
      this.ltimer++;
      this.shrinktimer++;
      this.hspeed = QM(this.ltimer / 3) * 5;
      this.image_yscale = 2 - QM(this.ltimer / 5) * 1;
      if (this.shrinktimer > 4) {
        this.image_yscale = 2 - QM(this.ltimer / 5) * 1 * (8 / this.shrinktimer);
      }
      if (this.ltimer > 7) {
        this.image_angle -= Qp(QM(this.ltimer / 5)) * 4;
        this.ang = -this.image_angle;
      }
      if (this.ltimer > 4 && Qp(QM(this.ltimer / 5)) <= 0.06) {
        this.lcon = 5;
        this.image_yscale = 2;
        this.direction = 180;
        this.speed = 4;
      }
    }
    if (this.lcon === 5) {
      if (this.speed < 16) {
        this.speed += 2;
      }
      if (this.ang < 45) {
        this.ang += 4;
      }
      this.image_angle = -this.ang;
      if (this.x < 80) {
        this.lcon = 6;
      }
    }
    if (this.lcon === 6) {
      if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
      if (this.x <= 5) {
        this.lcon = 7;
        this.direction = 90;
      }
    }
    if (this.lcon === 7) {
      if (this.y < 80) {
        if (this.ang < 225) {
          this.ang += 10;
        }
        if (this.y <= 5) {
          this.direction = 0;
          this.lcon = 8;
        }
      } else if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 8) {
      if (this.x >= 540) {
        if (this.ang < 315) {
          this.ang += 10;
        }
        if (this.x >= 630) {
          this.direction = 270;
          this.lcon = 9;
        }
      } else if (this.ang < 225) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 9) {
      if (this.y > this.ory - 70) {
        if (this.ang < 360) {
          this.ang += 10;
        }
        if (this.y >= this.ory - 5) {
          this.y = this.ory;
          this.direction = 180;
          this.lcon = 10;
        }
      } else if (this.ang < 315) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 10) {
      this.ang = 0;
      this.image_angle = 0;
      if (this.x <= this.orx) {
        this.speed = 0;
        this.x = this.orx;
        this.lcon = 11;
        this.ltimer = 0;
      }
    }
    if (this.lcon === 11) {
      this.sprite_index = "spr_lancerbike_l";
      this.ltimer++;
      if (this.ltimer >= 25) {
        Qb.with("obj_regularbullet", hX => {
          hX.active = 0;
          hX.image_alpha -= 0.2;
        });
        this.image_alpha = 1;
      }
      if (this.ltimer >= 30) {
        this.lcon = 0;
        this.endcon = 1;
      }
    }
    if (this.racecon === 1) {
      this.sy = 0;
      this.s_moveup = 0;
      Qb.with("obj_susieandlancer_event", hX => {
        if (hX.s) {
          this.s = hX.s;
          this.sy = hX.s.y;
          this.s_moveup = 1;
        }
      });
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.racecon = 2;
      this.vspeed = Qy(1, -1) * -14;
      this.rtimer = 0;
      this.maxr = 15 + Qq(25);
    }
    if (this.racecon === 2) {
      if (this.s_moveup === 1 && this.s.y > -20) {
        this.s.y -= 10;
      }
      if (this.y < this.topy + 10) {
        this.vspeed = 12;
      }
      if (this.y > this.bottomy - 10) {
        this.vspeed = -12;
      }
      this.rtimer++;
      if (this.rtimer > this.maxr) {
        this.vspeed = 0;
        this.racecon = 3;
        this.rtimer = 0;
      }
    }
    if (this.racecon === 3) {
      this.rtimer++;
      if (this.rtimer === 5 || this.rtimer === 10) {
        QS("snd_lancerhonk");
        let hX = QJ(this.x - 60, this.y - 40, LB);
        hX.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer >= 25) {
        QS("snd_drive");
        this.racecon = 4;
        this.hspeed = -20;
        this.rtimer = 0;
        this.ang = 0;
      }
    }
    if (this.racecon === 4) {
      if (this.s_moveup === 1) {
        this.s.y += 10;
        if (this.s.y >= this.sy) {
          this.s.y = this.sy;
          this.s_moveup = 0;
        }
      }
      this.rtimer++;
      this.ang += this.rtimer * 2 + 4;
      if (this.ang > 50) {
        this.ang = 50;
      }
      this.image_angle = -this.ang;
      if (this.x <= -40) {
        this.ang = 0;
        this.image_angle = 0;
        this.x = 740;
        this.y = this.ory;
        this.hspeed = -12;
        this.racecon = 5;
      }
    }
    if (this.racecon === 5 && this.x <= this.orx + 5) {
      this.hspeed = 0;
      this.x = this.orx;
      this.racecon = 0;
      this.endcon = 1;
    }
    if (this.endcon === 1) {
      Qx.turntimer = 2;
      Qb.with("obj_lancerboss", hY => {
        hY.visible = true;
        if (hY.turns >= 4) {
          hY.con = 1;
          Qb.with("obj_battlecontroller", hB => {
            hB.noreturn = 1;
          });
        }
      });
      Qb.with("obj_lancerboss3", hY => {
        hY.visible = true;
      });
      this.instance_destroy();
    }
    Qb.with("obj_lancerboss", hY => {
      if (hY.compliment >= 3) {
        Qb.with("obj_dmgwriter", hB => {
          hB.spec = 1;
        });
      }
    });
  }
};
j0(Lk, "obj_lancerbike");
j2(Lk, "kinds", QA("obj_lancerbike", Q7));
j2(Lk, "defaultDepth", -20);
j2(Lk, "defaultSprite", "spr_lancerbike");
var Ln = Lk;
function Lo(hI, hu, hf) {
  let hW = -80 + Qq(160) + 8;
  let hX = QJ((hu ? hu.x : 320) + hW, hf, Q7);
  if (!hX.destroyed) {
    hX.damage = hI.damage;
    hX.target = hI.target;
    hX.sprite_index = "spr_spadebullet";
    hX.image_angle = 270;
    hX.gravity = 0.3;
    hX.speed = 0;
    hX.vspeed = 3;
    hX.hspeed = -0.6 + Qq(1.2);
  }
}
j0(Lo, "fallspade");
function LV(hI, {
  heart: hu
}) {
  if (Qb.exists("obj_lancerboss3")) {
    if (hI.made === 0) {
      QS("snd_lancerwhistle");
      hI.whistletimer = 0;
      hI.made = 1;
      Qb.with("obj_lancerboss3", hW => {
        hW.idlesprite = "spr_lancerbike_l";
      });
    }
    if (hI.made === 1) {
      hI.whistletimer++;
      if (hI.whistletimer >= 30) {
        Qb.with("obj_lancerboss3", hW => {
          hW.idlesprite = "spr_lancerbike";
        });
        hI.made = 2;
      }
    }
  }
  let hf = 8;
  if (hI.type === 22) {
    hf = 6;
  }
  if (hI.btimer >= hf) {
    Lo(hI, hu, -20);
    hI.side = hI.side === 1 ? -1 : 1;
    hI.btimer = 0;
  }
}
j0(LV, "type20_22");
function Lr(hI) {
  let hu = 9;
  if (hI.type === 23) {
    hu = 7;
  }
  if (hI.type === 25) {
    hu = 4;
  }
  Qb.with("obj_regularbullet", hf => {
    hf.image_alpha += 0.2;
  });
  if (hI.btimer >= hu) {
    let hf = hI.side === 0 ? 80 : 560;
    let hW = Qb.first("obj_growtangle");
    let hX = hW ? hW.y : 170;
    let hY = hW ? hW.sprite_height : 130;
    let hB = QJ(hf, hX - hY / 2 + Qq(hY), Q7);
    if (!hB.destroyed) {
      hB.direction = hI.side === 0 ? 0 : 180;
      hB.image_alpha = 0;
      hB.damage = hI.damage;
      hB.target = hI.target;
      hB.sprite_index = "spr_spadebullet";
      hB.speed = 5;
      hB.friction = -0.1;
      hB.image_angle = hB.direction;
    }
    hI.side = hI.side === 1 ? 0 : 1;
    hI.btimer = 0;
  }
}
j0(Lr, "type21_23_25");
function LK(hI, {
  heart: hu
}) {
  let hf = hI.difficulty + 5;
  Qb.with("obj_regularbullet", hW => {
    if (!hu) {
      return;
    }
    let hX = hW.x - (hu.x + 8);
    if (hW.y >= hu.y - 240 && Qp(hX) <= 30) {
      if (hX >= 0 && hW.hspeed < 5) {
        hW.hspeed += 0.4;
      }
      if (hX < 0 && hW.hspeed > -5) {
        hW.hspeed -= 0.4;
      }
    }
    if (hW.y >= hu.y - 100 && Qp(hX) <= 60) {
      if (hX >= 0) {
        if (hW.hspeed < 2) {
          hW.hspeed += 0.25;
        }
        if (hX < 10) {
          hW.x += 3;
        }
        if (hX < 20) {
          hW.x += 3;
        }
        if (hX < 30) {
          hW.x += 3;
        }
        if (hX < 40) {
          hW.x += 2;
        }
        if (hX < 60) {
          hW.x += 1;
        }
      } else {
        if (hW.hspeed > -2) {
          hW.hspeed -= 0.25;
        }
        if (hX > -10) {
          hW.x -= 3;
        }
        if (hX > -20) {
          hW.x -= 3;
        }
        if (hX > -30) {
          hW.x -= 3;
        }
        if (hX > -40) {
          hW.x -= 2;
        }
        if (hX > -60) {
          hW.x -= 1;
        }
      }
    }
  });
  if (hI.btimer >= hf) {
    Lo(hI, hu, -20);
    hI.side = hI.side === 1 ? -1 : 1;
    hI.btimer = 0;
  }
}
j0(LK, "type24");
e({
  20: LV,
  22: LV,
  21: Lr,
  23: Lr,
  25: Lr,
  24: LK
});
var Lb = class dx extends Q3 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      compliment_just: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      shakex: 0
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    Qx.automiss ||= [0, 0, 0];
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x;
      Qx.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con++;
    }
  }
  step() {
    let hI = this.myself;
    if (Qx.monster[hI] === 1 && (Qx.mnfight === 1 && this.talked === 0 && (QY(this), Qx.flag[51 + hI] = 4, Qx.targeted[this.mytarget] = 1, Qb.exists("obj_darkener") || QJ(0, 0, Qu), Qx.typer = 50, Qx.msg = new Array(100).fill(" "), this.turns === 0 && (Qx.msg[0] = "Halt, clowns!&This bike is&fueled by&victory!!!"), this.turns === 1 && (Qx.msg[0] = "I love to get&thrashed...&Just kidding!&That's you!!"), this.turns === 2 && (Qx.msg[0] = "So what are&you guys doing&after this???"), this.turns >= 3 && (Qx.msg[0] = "Hohoho!!!&I'm the bad&guy!"), this.compliment_just === 1 && (this.compliment === 1 && (Qx.msg[0] = "Oh! You make&my feelings&do wheelies!&Sweet wheelys"), this.compliment === 2 && (Qx.msg[0] = "Did you not&realize I can&mask my self-&esteem levels?"), this.compliment === 3 && (Qx.msg[0] = "Stop!! My&personality's&getting too&deep!!!"), this.compliment_just = 0), QT(this.x - 235, this.y - 65, 3), this.talked = 1, this.talktimer = 0), this.talked === 1 && Qx.mnfight === 1 && (Qw() && this.talktimer > 15 && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (Qb.exists("obj_moveheart") || QI(), Qb.exists("obj_growtangle") || QJ(320, 170, QU), Qb.with("obj_writer", hu => hu.instance_destroy()), Qx.mnfight = 2)), Qx.mnfight === 2 && this.attacked === 0)) {
      let hu = QJ(this.x, this.y, Ln);
      this.bike = hu;
      this.visible = false;
      if (this.attacks === 0) {
        hu.racecon = 1;
        hu.target = this.mytarget;
        hu.damage = Qx.monsterat[hI] * 5;
        this.attacks = 1;
      } else {
        hu.lcon = 1;
        hu.target = this.mytarget;
        hu.damage = Qx.monsterat[hI] * 5;
        this.attacks = 0;
      }
      this.turns++;
      Qx.turntimer = 999;
      this.attacked = 1;
      let hf = QO(Qq(5));
      Qx.typer = 6;
      Qx.fc = 0;
      Qx.battlemsg[0] = LD[hf];
      if (this.turns === 1) {
        Qx.typer = 47;
        Qx.fc = 1;
        Qx.fe = 2;
        Qx.battlemsg[0] = "* Dunno how I got an ax but^1, like^1, that's cool.";
      }
    }
    if (Qx.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* LANCER - AT 7 DF 1&* Not to call a spade a spade^1, but he's a spade./";
        Qx.msg[1] = "* Not old enough to ride a motorcycle^1, so he set his bike on fire./%";
        Qj();
      }
      if (this.acting === 2 && this.actcon === 0) {
        this.actcon = 1;
        Qx.msg = new Array(100).fill(" ");
        if (Qx.automiss[hI] === 0) {
          Qx.msg[0] = "* You tell Lancer to watch out for Susie's attack^1.&* He readies himself./%";
          Qx.automiss[hI] = 1;
        } else {
          Qx.msg[0] = "* Lancer laughs at the idea he would need your help!/%";
        }
        Qj();
      }
      if (this.acting === 3 && this.actcon === 0) {
        Qx.msg = new Array(100).fill(" ");
        if (this.compliment >= 3) {
          Qx.msg[0] = "* You say some kind words^1.&* Lancer absorbs them into his skin./%";
        }
        if (this.compliment === 2) {
          Qx.msg[0] = "* You compliment LANCER^1.&* He gets confused as to your sincerity./";
          Qx.msg[1] = "* Instead of going up or down^1, his ATTACK power goes sideways...?/%";
          QX(hI, 20);
        }
        if (this.compliment === 1) {
          Qx.msg[0] = "* You try to compliment LANCER again.../";
          Qx.msg[1] = "* But he sees it as insincere^1.&* His ATTACK POWER goes back up!/%";
          QX(hI, 20);
          Qx.monsterat[hI] += 1;
        }
        if (this.compliment === 0) {
          Qx.msg[0] = "* You tell Lancer you can't tell the difference between his clothes and his body./";
          Qx.msg[1] = "* He seems flattered..^1.&* His ATTACK POWER went down!/%";
          QX(hI, 20);
          Qx.monsterat[hI] -= 1;
        }
        this.compliment_just = 1;
        this.compliment++;
        Qj();
        this.actcon = 1;
      }
      if (this.actcon === 1 && !Qb.exists("obj_writer")) {
        this.actcon = 0;
        o();
      }
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      Qx.typer = 50;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "Wait^1!&Wait a second!/";
      Qx.msg[1] = "My bike's&running&out of&fuel...!/";
      Qx.msg[2] = "Alright,&you punk-&a-roos!/";
      Qx.msg[3] = "You had the&luck of the&draw this&time^1, but.../";
      Qx.msg[4] = "Next time^1,&the losers&will be&YOU!!!/";
      Qx.msg[5] = "Hahaha!!^1!&Bye^1, losers!!/";
      Qx.msg[6] = "I gotta get&home before&dinner!!!/%";
      this.con = 4;
      QT(this.x - 235, this.y - 65, 3);
    }
    if (this.con === 4 && !Qb.exists("obj_writer")) {
      this.hspeed = 20;
      this.con = 5;
      this.alarm[4] = 15;
      Qb.with("obj_battlecontroller", hW => {
        hW.noreturn = 0;
        hW.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      Qx.monsterexp[hI] -= 0;
      Qx.monstergold[hI] += 10;
      if (Qx.plot < 22) {
        Qx.plot = 22;
      }
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          if (Qx.plot < 22) {
            Qx.plot = 22;
          }
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
        }
        this.hurtshake++;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex--;
          }
          if (this.shakex < 0) {
            this.shakex++;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        hI.draw_sprite_ext("spr_lancerbike_hurt", this.hurttimer / 2, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 4) {
      this.dodgetimer++;
      let hf = Math.cos(this.dodgetimer * 2 * Math.PI / 15) * 2;
      hI.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, hf, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let hW = "spr_lancerbike";
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hW = "spr_lancerbike";
      }
      hI.draw_sprite_ext(hW, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        hI.draw_sprite_white(hW, this.siner / 5, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(Lb, "obj_lancerboss");
j2(Lb, "kinds", QA("obj_lancerboss", Q3));
j2(Lb, "defaultDepth", 90);
j2(Lb, "defaultSprite", "spr_lancerbike");
var Lm = Lb;
var LO = class dG extends QE {
  create() {
    this.con = 51;
    this.image_speed = 0;
    this.visible = false;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con++;
    }
  }
  step() {
    if (this.con === 53) {
      let hI = Qb.first("obj_herosusie");
      this.s = QP(hI ? hI.x : 120, hI ? hI.y : 140, "spr_susieb_attack_serious");
      this.s.image_index = 5;
      this.s.depth = hI ? hI.depth : 100;
      this.visible = true;
      this.sprite_index = "spr_lancer_battle_hurt";
      Qx.fighting = 0;
      Qb.with("obj_battlecontroller", hf => hf.instance_destroy());
      Qb.with("obj_herosusie", hf => hf.instance_destroy());
      Qb.with("obj_herokris", hf => hf.instance_destroy());
      Qb.with("obj_tensionbar", hf => hf.instance_destroy());
      Qb.with("obj_lancerboss2", hf => hf.instance_destroy());
      Qb.with("obj_bulletparent", hf => hf.instance_destroy());
      if (this.black && !this.black.destroyed) {
        this.black.instance_destroy();
      }
      let hu = QJ(this.x + 30, this.y + 40, Q1);
      hu.type = 1;
      hu.damage = 0;
      this.con = 54;
      this.alarm[4] = 120;
    }
    if (this.con === 55) {
      this.sprite_index = "spr_lancer_battle";
      this.image_index = 0;
      Qx.typer = 32;
      Qx.fc = 5;
      Qx.fe = 12;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* S..^1. Susie...?/";
      Qx.msg[1] = "* Y..^1. you missed.../%";
      LR(QQ());
      this.con = 56;
    }
    if (this.con === 56 && !Qb.exists("obj_writer")) {
      this.con = 57;
      Qx.battleover = "win";
      Q0();
    }
  }
};
j0(LO, "obj_lancerbattle2_event");
j2(LO, "kinds", QA("obj_lancerbattle2_event", QE));
j2(LO, "defaultDepth", 1000);
j2(LO, "defaultSprite", "spr_lancer_battle");
var h0 = LO;
var h1 = class dN extends Q3 {
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
      idlesprite: "spr_lancer_battle",
      hurtsprite: "spr_lancer_battle_hurt",
      sparedsprite: "spr_lancer_battle",
      hurtlevel: 0,
      hmake: 0,
      firstskip: 1,
      shakesine: 0,
      rtimer: 0,
      shakex: 0
    });
    if (!Qb.exists("obj_lancerbattle2_event")) {
      let hI = QJ(this.x, this.y, h0);
      hI.depth = this.depth;
    }
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2;
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con++;
    }
  }
  step() {
    let hI = this.myself;
    if (this.firstskip === 1) {
      Qx.acting[0] = 1;
      this.acting = 1;
      Qb.with("obj_writer", hu => hu.instance_destroy());
      Qb.with("obj_face", hu => hu.instance_destroy());
      Qb.with("obj_smallface", hu => hu.instance_destroy());
      if (Qx.charaction[0] === 1) {
        Qx.attacking = 1;
      }
      Qx.charturn = n();
      Qx.myfight = 3;
    }
    if (Qx.monster[hI] === 1) {
      Qx.flag[51 + hI] = 4;
      Qx.acting[0] = 1;
      this.acting = 1;
      if (Qx.mnfight === 1 && this.talked === 0) {
        this.actcon = 0;
        QY(this);
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (!Qb.exists("obj_writer")) {
          Qx.mnfight = 2;
        }
        if (Qx.mnfight === 2) {
          if (!Qb.exists("obj_moveheart") && this.hmake === 0) {
            QI();
            this.hmake = 1;
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          Qx.turntimer = 140;
          if (this.turns === 0 || this.turns === 2) {
            let hu = QJ(this.x, this.y, k);
            hu.type = 20;
            hu.target = this.mytarget;
            hu.damage = Qx.monsterat[hI] * 5;
            if (Qx.hp[Qx.char[0]] <= 70) {
              hu.damage = Qx.monsterat[hI] * 3;
            }
            Qx.turntimer = 180;
          }
          if (this.turns === 1) {
            let hf = QJ(this.x, this.y, k);
            hf.type = 21;
            hf.target = this.mytarget;
            hf.damage = Qx.monsterat[hI] * 5;
            if (Qx.hp[Qx.char[0]] <= 70) {
              hf.damage = Qx.monsterat[hI] * 3;
            }
            Qx.turntimer = 180;
          }
          if (this.turns >= 3) {
            let hW = QJ(this.x, this.y, k);
            hW.difficulty = this.turns * 2;
            if (this.turns === 6) {
              hW.difficulty = 30;
            }
            if (this.turns === 7) {
              hW.difficulty = 90;
            }
            hW.type = 24;
            hW.target = this.mytarget;
            hW.damage = Qx.monsterat[hI] * 5;
          }
          this.turns++;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          Qx.battlemsg[0] = "* ...";
        } else {
          Qx.turntimer = 150;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 10) {
        this.hmake = 0;
      }
    }
    if (Qx.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.firstskip = 0;
        Qx.typer = 53;
        this.rr = Qy(0, 1, 2, 3);
        this.actcon = 1;
        Qx.msg = new Array(100).fill(" ");
        let hX = this.turns;
        if (hX === 0) {
          Qx.msg[0] = "Hey, wanna&see what&happens to&traitors?/%";
        }
        if (hX === 1) {
          Qx.msg[0] = "They.&Get.&Crushed./%";
        }
        if (hX === 2) {
          Qx.msg[0] = "If you don't&get out of&the way.../";
          Qx.msg[1] = "...I'll&kill you./%";
        }
        if (hX === 3) {
          Qx.msg[0] = "Get it?&I'll KILL&you./%";
        }
        if (hX === 4) {
          Qx.msg[0] = "Heh...&You missed,&idiot!/%";
        }
        if (hX === 5) {
          Qx.msg[0] = "... wait, why&aren't you&fighting&back...?/%";
          Qb.with("obj_herosusie", hC => {
            hC.idlesprite = "spr_susieb_idle_serious";
            hC.attacksprite = "spr_susieb_attack_serious";
          });
        }
        if (hX === 6) {
          Qx.msg[0] = "... Heh, you&think I&CARE?/";
          Qx.msg[1] = "If you just&wanna lie&down and&die?/";
          Qx.msg[2] = "You're just&making it&easier for&me!/%";
          Qb.with("obj_herosusie", hC => {
            hC.idlesprite = "spr_susieb_idle";
            hC.attacksprite = "spr_susieb_attack";
          });
        }
        if (hX === 7) {
          Qx.typer = 54;
          Qx.msg[0] = "........&Alright,&that's&enough./";
          Qx.msg[1] = "If you&wanna die&so much.../";
          Qx.msg[2] = "THEN DIE!/%";
          this.actcon = 2;
        }
        Qx.monsterdf[hI] -= 5;
        let hY = Qb.first("obj_herosusie");
        let hB = QT((hY ? hY.x : 120) + 100, hY ? hY.y : 140, 7);
        LR(hB.mywriter);
        Qb.with("obj_writer", hC => {
          hC.skippable = 0;
        });
      }
      if (this.actcon === 1 && !Qb.exists("obj_writer")) {
        this.actcon = 0;
        o();
      }
      if (this.actcon === 2 && !Qb.exists("obj_writer")) {
        Qo();
        QS("snd_laz_c");
        this.black = QP(-20, -20, "spr_pixel_white");
        this.black.image_blend = Qz.black;
        this.black.depth = -10000;
        this.black.image_xscale = 900;
        this.black.image_yscale = 900;
        this.actcon = 3;
        this.acttimer = 0;
        let hC = Qb.first("obj_lancerbattle2_event");
        if (hC) {
          hC.black = this.black;
          hC.con = 52;
          hC.alarm[4] = 80;
        }
      }
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      this.shakesine = 0;
      this.siner = 0;
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          Ly(this);
        }
        this.hurtshake++;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex--;
          }
          if (this.shakex < 0) {
            this.shakex++;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        if (Qx.monsterhp[hu] / Qx.monstermaxhp[hu] <= 0.65) {
          this.hurtlevel = 1;
        }
        if (Qx.monsterhp[hu] / Qx.monstermaxhp[hu] <= 0.2) {
          this.hurtlevel = 2;
        }
        hI.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex * 2, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.shakesine++;
      this.siner++;
      let hf = Qq(QM(this.shakesine / 6) * this.hurtlevel / 1.5);
      let hW = this.idlesprite;
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hW = this.sparedsprite;
      }
      hI.draw_sprite_ext(hW, this.hurtlevel, this.x + hf, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        hI.draw_sprite_white(hW, this.hurtlevel, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(h1, "obj_lancerboss2");
j2(h1, "kinds", QA("obj_lancerboss2", Q3));
j2(h1, "defaultDepth", 90);
j2(h1, "defaultSprite", "spr_lancer_battle");
var h2 = h1;
var h3 = class dp extends Q3 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      susie_act: 0,
      lancer_act: 0,
      defeated: 0,
      anythingcounter: 0,
      lancer_hurt: 0,
      susie_revive_count: 0,
      ears_blocked: 0,
      shakex: 0,
      attack_qual: 0
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = this.sprite_index;
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x - 30;
      Qx.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.con++;
    }
  }
  attackQual() {
    let hI = 0;
    if (QW() === 1) {
      hI = 1;
    }
    Qb.with("obj_susieenemy", hu => {
      if (hu.sleeping === 1) {
        hI = 1;
      }
    });
    return hI;
  }
  step() {
    let hI = this.myself;
    if (this.defeated === 1 && Qx.mnfight === 1) {
      Qx.mnfight = 99;
      this.con = 1;
    }
    if (Qx.monster[hI] === 1 && this.defeated === 0) {
      Qx.flag[51 + hI] = 4;
      if (Qx.mnfight === 1 && this.talked === 0) {
        if (QW() === 1 && (this.susie_revive_count++, this.susie_revive_count >= 3)) {
          if (this.myself !== 0 && Qx.monsterinstancetype[0] && Qx.monster[0] === 0) {
            Qb.with("obj_susieandlancer_event", hX => {
              if (hX.s) {
                hX.s.visible = false;
              }
            });
            Qx.monster[0] = 1;
            let hW = QJ(Qx.monstermakex[0], Qx.monstermakey[0], Qx.monsterinstancetype[0]);
            hW.myself = 0;
            Qx.monsterinstance[0] = hW;
            hW.userEvent(12);
            hW.userEvent(1);
            if (Qx.turntimer < 150) {
              Qx.turntimer = 150;
            }
            Qx.monsterhp[0] = 40;
            QS("snd_power");
          }
          this.susie_revive_count = 0;
        }
        this.attack_qual = 1;
        Qb.with("obj_susieenemy", hX => {
          if (hX.sleeping === 0 && Qx.monster[hX.myself] === 1) {
            this.attack_qual = 0;
          }
        });
        if (this.attack_qual === 1) {
          QY(this);
          Qx.targeted[this.mytarget] = 1;
        }
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        Qx.typer = 50;
        Qx.msg = new Array(100).fill(" ");
        let hu = Qy(0, 1, 2, 3);
        Qx.msg[0] = "Hey!!&Hey Susie!!&Watch me,&watch me!!";
        if (hu === 1) {
          Qx.msg[0] = "Prepare for&smashing, you&luxurious&melons!!!";
        }
        if (hu === 2) {
          Qx.msg[0] = "Horror! Pain!&The power of&REAL bad guys!&(Nice, huh?)";
        }
        if (hu === 3) {
          Qx.msg[0] = "This bike is&fueled by&EVIL! ...and&friendship!";
        }
        if (this.lancer_hurt === 0 && Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] * 0.5) {
          this.lancer_hurt = 1;
          Qx.msg[0] = "Ow^1, my&guts hurt!";
        }
        if (this.susie_act === 3) {
          Qx.msg[0] = "Oh^1, what a&beautiful&song!!!";
        }
        if (this.susie_act === 9) {
          Qx.msg[0] = "Don't worry&Bikey, I'll&put you to&bed soon...";
        }
        let hf = this.anythingcounter;
        if (this.acting === 2) {
          if (hf === 1) {
            Qx.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (hf === 2) {
            Qx.msg[0] = "Thanks,&it's all&natural!";
          }
          if (hf === 3) {
            Qx.msg[0] = "Really!?&It's just&what I&wanted!!!";
          }
          if (hf >= 4) {
            Qx.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        if (this.acting === 3) {
          if (hf === 1) {
            Qx.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (hf === 2) {
            Qx.msg[0] = "Really!^1?&That's bad!";
          }
          if (hf === 3) {
            Qx.msg[0] = "Wow, I'll&look&amazing!!";
          }
          if (hf >= 4) {
            Qx.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        this.susie_act = 0;
        this.lancer_act = 0;
        QT(this.x - 235, this.y - 65, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        if (Qw() && this.talktimer > 17) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          if (!Qb.exists("obj_moveheart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
          Qb.with("obj_writer", hX => hX.instance_destroy());
          Qx.mnfight = 2;
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 1) {
          let hY = QJ(this.x, this.y, Ln);
          this.bike = hY;
          this.visible = false;
          if (this.attacks === 0) {
            hY.racecon = 1;
            hY.target = this.mytarget;
            hY.damage = Qx.monsterat[hI] * 5;
            this.attacks = 1;
          } else {
            hY.lcon = 1;
            hY.target = this.mytarget;
            hY.damage = Qx.monsterat[hI] * 5;
            this.attacks = 0;
          }
          Qx.turntimer = 999;
        }
        this.turns++;
        this.attacked = 1;
        let hX = QO(Qq(5));
        Qx.typer = 6;
        Qx.fc = 0;
        Qx.battlemsg[0] = LD[hX];
      }
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      Qb.with("obj_susieenemy", hB => {
        hB.idlesprite = "spr_susie_enemy";
      });
      Qx.typer = 46;
      Qx.fe = 4;
      Qx.fc = 5;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* Ow.../";
      LF(1, 9);
      Qx.msg[2] = "* Hey^1, HEY^1! Enough's enough already!/";
      Qx.msg[3] = "* If you hit him any more^1, you might really hurt him!/";
      Qx.msg[4] = "\\E0* ... Lancer^1, you OK...?/";
      Lc(5, 2);
      Qx.msg[6] = "* I..^1. I'm fine^1, Susie!/";
      Qx.msg[7] = "\\E7* My insides are just..^1. a little mixed up./";
      LF(8, 0);
      Qx.msg[9] = "* Alright^1, fine^1! You guys win!/";
      Lw(10, 6);
      Qx.msg[11] = "* (Kris^1, maybe we should have taken it easier...)/%";
      if (Qx.flag[249] === 1) {
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* Uh oh./";
        LF(1, 0);
        Qx.msg[2] = "* What's wrong^1, dude?/";
        Lc(3, 4);
        Qx.msg[4] = "* I accidentally started liking the enemies...!/";
        Qx.msg[5] = "\\E3* Now seeing them just makes me feel round and soft./";
        Qx.msg[6] = "\\E4* Bad atmosphere for battle^1, though./";
        LF(7, 0);
        Qx.msg[8] = "* .../";
        Qx.msg[9] = "\\E1* Well^1, if you don't wanna fight,/";
        Qx.msg[10] = "\\E0* There's no point^1, I guess./";
        Qx.msg[11] = "\\E2* Battle's over!/%";
      }
      this.con = 4;
      La();
      LR(QQ());
    }
    if (this.con === 4 && !Qb.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 2;
      Qb.with("obj_battlecontroller", hB => {
        hB.noreturn = 0;
        hB.alarm[2] = 4;
      });
    }
    if (this.con === 6) {
      Qb.with("obj_susieandlancer_event", hB => {
        if (hB.l) {
          hB.l.visible = true;
        }
      });
      Qb.with("obj_monsterparent", hB => {
        hB.scr_monsterdefeat();
      });
      this.instance_destroy();
      this.con = 7;
    }
  }
  actStep() {
    let hI = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* LANCER - AT 7 DF 1&* Watch out!!^1! He's boosted by friendship!/%";
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You tried convincing Lancer not to fight./";
      Qx.msg[1] = "* Lancer started to become convinced!/%";
      if (this.anythingcounter === 1) {
        Qx.msg[0] = "* You tried telling Lancer you like his hair.../";
        Qx.msg[1] = "* Lancer became even more convinced!/%";
      }
      if (this.anythingcounter === 2) {
        Qx.msg[0] = "* You told Lancer you'd give him a picnic basket of worms./";
        Qx.msg[1] = "* Lancer became almost fully convinced!/%";
      }
      if (this.anythingcounter >= 3) {
        Qx.msg[0] = "* You told Lancer you just want to get along!/";
        Qx.msg[1] = "* It's the decisive kindness!/%";
        if (this.ears_blocked >= 2) {
          Qx.msg[0] = "* You told Lancer you want to get along really fast!/";
          Qx.msg[1] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          Qb.with("obj_monsterparent", hu => {
            hu.ears_blocked = (hu.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      Qj();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You told Ralsei to compliment the enemies!/";
      Lw(1, 8);
      Qx.msg[2] = "* You two look like a really great team! I'm proud!/";
      Lq(3);
      Qx.msg[4] = "* (Lancer started to become a little convinced!)/%";
      if (this.anythingcounter === 1) {
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* You told Ralsei to logically best Lancer and Susie./";
        Lw(1, 1);
        Qx.msg[2] = "* You two^1, if we don't stop fighting, then.../";
        Qx.msg[3] = "\\E6* ... Someone might get hurt!/";
        Lq(4);
        Qx.msg[5] = "* (Lancer became more convinced^1! It's working!)/%";
      }
      if (this.anythingcounter === 2) {
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* You told Ralsei to offer his services to the enemies!/";
        Lw(1, 1);
        Qx.msg[2] = "* You two^1, if we stop fighting^1, then I could^1, um.../";
        Qx.msg[3] = "\\E8* I could braid your hair!/";
        Lq(4);
        Qx.msg[5] = "* (Lancer became almost fully convinced!)/%";
      }
      if (this.anythingcounter >= 3) {
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = "* You told Ralsei to deal the final blow of kindness!/";
        Lw(1, 6);
        Qx.msg[2] = "* In summary^1, I like you two^1, and.../";
        Qx.msg[3] = "\\E8* I think we should all just get along!/%";
        if (this.ears_blocked >= 2) {
          Qx.msg = new Array(100).fill(" ");
          Qx.msg[0] = "* You told Ralsei to compliment Lancer really fast!/";
          Lw(1, 0);
          Qx.msg[2] = "* You'rereallyaswellpersonyouknowthat?!/";
          Lq(3);
          Qx.msg[4] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          Qb.with("obj_monsterparent", hf => {
            hf.ears_blocked = (hf.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      let hu = Qb.first("obj_susieenemy");
      if (hu) {
        hu.anythingxcounter = this.anythingcounter;
        hu.lancer_act = 3;
      }
      La();
      Qj();
    }
    if (this.actcon === 1 && !Qb.exists("obj_writer")) {
      this.actcon = 0;
      if (this.anythingcounter < 10) {
        o();
      } else {
        this.defeated = 1;
        Qx.mnfight = 99;
        Qx.myfight = 99;
        this.con = 1;
        Qx.flag[249] = 1;
      }
    }
    if (this.actcon === 20 && !Qb.exists("obj_writer")) {
      this.visible = false;
      Qb.with("obj_susieenemy", hf => {
        hf.visible = false;
      });
      if (QW() === 1) {
        Qb.with("obj_susieandlancer_event", hf => {
          if (hf.s) {
            hf.s.visible = false;
          }
        });
      }
      this.blocklan = QP(this.x, this.y, "spr_lancerbike_earcover");
      this.blocklan.depth = this.depth;
      QS("snd_bell");
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* (But Susie blocked the soundwaves before they reached Lancer!)/";
      LF(1, 2);
      Qx.msg[2] = "* Try convincing someone that can't HEAR YOU!/%";
      La();
      Qj();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !Qb.exists("obj_writer")) {
      if (this.blocklan) {
        this.blocklan.instance_destroy();
      }
      this.visible = true;
      Qb.with("obj_susieenemy", hf => {
        hf.visible = true;
      });
      if (QW() === 1) {
        Qb.with("obj_susieandlancer_event", hf => {
          if (hf.s) {
            hf.s.visible = true;
          }
        });
      }
      this.actcon = 1;
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      if (Qx.monsterhp[hu] < Qx.monstermaxhp[hu] / 4) {
        Qb.with("obj_monsterparent", hf => {
          hf.defeated = 1;
        });
        Qx.monsterhp[hu] = Qx.monstermaxhp[hu] / 4;
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          this.hspeed = 12;
        }
        this.hurtshake++;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex--;
          }
          if (this.shakex < 0) {
            this.shakex++;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        hI.draw_sprite_ext("spr_lancerbike_hurt", this.hurttimer / 2, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 4) {
      this.dodgetimer++;
      let hf = Math.cos(this.dodgetimer * 2 * Math.PI / 15) * 2;
      hI.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, hf, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let hW = this.idlesprite;
      if (Qx.mercymod[hu] >= Qx.mercymax[hu]) {
        hW = this.idlesprite;
      }
      hI.draw_sprite_ext(hW, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        hI.draw_sprite_white(hW, this.siner / 5, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(h3, "obj_lancerboss3");
j2(h3, "kinds", QA("obj_lancerboss3", Q3));
j2(h3, "defaultDepth", 90);
j2(h3, "defaultSprite", "spr_lancerbike");
var h4 = h3;
var h5 = [{
  id: "lancer",
  name: "Lancer",
  chapter: 1,
  area: "Field",
  desc: "Lancer busts in!#Bike attacks, ACTs.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: Lm,
    type: 2,
    x: 540,
    y: 200,
    setup: LS
  }],
  battlemsg: "* Lancer busts in!",
  encounterno: 2,
  music: "battle"
}, {
  id: "lancer2",
  name: "Lancer (vs Susie)",
  chapter: 1,
  area: "Card Castle",
  desc: "Susie alone#against Lancer.#Scripted fight.",
  party: [2, 0, 0],
  heromakex: [120, 80, 80],
  heromakey: [140, 130, 210],
  monsters: [{
    cls: h2,
    type: 12,
    x: 480,
    y: 160,
    setup: Ll
  }],
  battlemsg: "* Lancer blocked the way!",
  encounterno: 20,
  music: "battle"
}, {
  id: "lancer3",
  name: "Susie & Lancer",
  chapter: 1,
  area: "Card Castle",
  desc: "Two bad guys#blocked the way!#Susie and Lancer.",
  party: [1, 3, 0],
  heromakex: [80, 80, 80],
  heromakey: [100, 180, 210],
  monsters: [{
    cls: LM,
    type: 19,
    x: 520,
    y: 80,
    setup: Lu
  }, {
    cls: h4,
    type: 18,
    x: 540,
    y: 240,
    setup: Lz
  }],
  battlemsg: "* Two bad guys blocked the way!",
  encounterno: 31,
  music: "lancerfight"
}];
j3(Lm, "G.mnfight = 2;");
j3(h2, "G.myfight = 3;G.mnfight = 2;");
j3(h4, "G.mnfight = 99;G.mnfight = 2;G.mnfight = 99;G.myfight = 99;");
var h6 = {};
j1(h6, {
  FIGHTS: () => hd,
  SOUNDS: () => h8,
  SPRITES: () => h7,
  obj_ponman_enemy: () => hh,
  obj_spareanim: () => hQ,
  scr_spareanim: () => hj,
  setupStats: () => hT
});
j4();
var h7 = ["spr_ponman_idle", "spr_ponman_eye", "spr_ponman_appear", "spr_diamondbullet", "spr_ralseib_sing", "spr_sparestar_anim"];
var h8 = ["snd_hurt1", "snd_ralseising1", "snd_ralseising2", "snd_spare"];
var h9 = class dM extends QE {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Ql("snd_spare");
    QS("snd_spare");
  }
  draw(hI) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        hI.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let hu = this.t / 5;
      if (hu > 1) {
        hu = 1;
      }
      hI.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, hu - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let hf = 0; hf < 2; hf += 1) {
        let hW = QJ(this.x + Qq(this.sprite_width), this.y + Qq(this.sprite_height), QL);
        hW.image_xscale = 2;
        hW.image_yscale = 2;
        hW.sprite_index = "spr_sparestar_anim";
        hW.image_alpha = 2;
        hW.image_speed = 0.25;
        hW.hspeed = -3;
        hW.gravity = 0.5;
        hW.gravity_direction = 0;
        this.star[this.starcount] = hW;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let hX = 0; hX < this.starcount; hX += 1) {
        let hY = this.star[hX];
        if (hY && !hY.destroyed) {
          hY.image_angle += 10;
          hY.image_alpha -= 0.1;
          if (hY.image_alpha <= 0) {
            hY.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let hB = 0; hB < this.starcount; hB += 1) {
        let hC = this.star[hB];
        if (hC && !hC.destroyed) {
          hC.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
j0(h9, "obj_spareanim");
j2(h9, "kinds", QA("obj_spareanim", QE));
j2(h9, "defaultDepth", 0);
var hQ = h9;
function hj(hI) {
  let hu = QJ(hI.x, hI.y, hQ);
  hu.sprite_index = hI.sprite_index;
  hu.sprite_index = hI.sparedsprite;
  hu.image_index = 0;
  hu.image_xscale = hI.image_xscale;
  hu.image_yscale = hI.image_yscale;
}
j0(hj, "scr_spareanim");
function hT(hI) {
  Qx.monstername[hI] = "Ponman";
  Qx.monstermaxhp[hI] = 140;
  Qx.monsterhp[hI] = 140;
  Qx.monsterat[hI] = 7;
  Qx.monsterdf[hI] = 1;
  Qx.monsterexp[hI] = 0;
  Qx.monstergold[hI] = 23;
  Qx.sparepoint[hI] = 10;
  Qx.mercymod[hI] = 0;
  Qx.mercymax[hI] = 100;
  Qx.canact[hI][0] = 1;
  Qx.actname[hI][0] = "Check";
  Qx.canact[hI][1] = 1;
  Qx.actname[hI][1] = "Goodnight";
  Qx.canact[hI][2] = 1;
  Qx.actname[hI][2] = "Lullaby";
  Qx.actactor[hI][2] = 3;
  if (QN(2) && Qx.plot < 150) {
    Qx.canact[hI][3] = 1;
    Qx.actname[hI][3] = "Warning";
    Qx.actactor[hI][3] = 3;
  }
}
j0(hT, "setupStats");
var hL = class dv extends Q3 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 60,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: null,
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
      eyex: 0,
      eyey: 0,
      eye_angle: 0,
      eye_radius: 0,
      ponman_eye: 0,
      image_xscale: 2,
      image_yscale: 2,
      addup: 0,
      eyecon: 0,
      spinspeed: 0,
      shotrefresh: 0,
      x_angle: 0,
      spintype: 0,
      shotbuffer: 0,
      grandbuffer: 0,
      shotcount: 0,
      totalshotcount: 0,
      pontotal: 1,
      maxtimer: 0,
      activetimer: 0,
      testtimer: 0,
      sleeping: 0,
      sleep_index: 5,
      becomesleep: 0,
      this_index: 0,
      lullabied: 0,
      idlesprite: "spr_ponman_idle",
      hurtsprite: "spr_ponman_idle",
      sparedsprite: "spr_ponman_appear",
      rtimer: 0,
      maxshot: 0,
      lullatimer: 0,
      ralsing: null,
      singy: null,
      shakex: 0
    });
  }
  userEvent(hI) {
    if (hI === 12) {
      Qx.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Qx.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (hI !== 11 && hI === 10) {
      hj(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
    }
  }
  alarmEvent(hI) {
    if (hI === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let hI = this.myself;
    if (Qx.monster[hI] === 1) {
      if (Qx.mnfight === 1 && this.talked === 0) {
        if (Qx.mercymod[hI] < 100) {
          QY(this);
        }
        if (!Qb.exists("obj_darkener")) {
          QJ(0, 0, Qu);
        }
        Qx.typer = 50;
        Qx.msg = new Array(100).fill(" ");
        Qx.msg[0] = " ";
        let hu = QT(this.x - 160, this.y, 3);
        if (hu.mywriter) {
          hu.mywriter.instance_destroy();
        }
        hu.instance_destroy();
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Qx.mnfight === 1) {
        this.rtimer = 0;
        if (Qw() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          Qb.with("obj_writer", hf => hf.instance_destroy());
          Qx.mnfight = 2;
        }
        if (Qx.mnfight === 2) {
          if (!Qb.exists("obj_moveheart")) {
            QI();
          }
          if (!Qb.exists("obj_growtangle")) {
            QJ(320, 170, QU);
          }
        }
      }
      if (Qx.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          Qx.turntimer = 150;
          this.pontotal = QW();
          for (let hW = 0; hW < 3; hW += 1) {
            if (Qx.monster[hW] === 1 && Qx.mercymod[hW] >= 100) {
              this.pontotal -= 1;
            }
          }
          if (this.pontotal === 3) {
            this.maxshot = 3;
          }
          if (this.pontotal === 2) {
            this.maxshot = 4;
          }
          if (this.pontotal === 1) {
            this.maxshot = 5;
          }
          if (this.pontotal <= 0) {
            Qx.turntimer = 10;
            this.maxshot = 6;
          }
          this.shotcount = 0;
          this.totalshotcount = 0;
          this.activetimer = 1;
          this.shotbuffer = 8;
          if (Qx.mercymod[hI] < 100) {
            this.eyecon = 20;
          }
          this.turns += 1;
          this.attacked = 1;
          Qx.typer = 6;
          Qx.fc = 0;
          let hf = Qy(0, 1, 2, 3, 4);
          if (hf === 0) {
            Qx.battlemsg[0] = "* Ponman advances one step at a time.";
          }
          if (hf === 1) {
            Qx.battlemsg[0] = "* Ponman listens politely^1, despite having no ears.";
          }
          if (hf === 2) {
            Qx.battlemsg[0] = "* Ponman seems hypnotized by your idle animation.";
          }
          if (hf === 3) {
            Qx.battlemsg[0] = "* Ponman gazes enigmatically.";
          }
          if (hf === 4) {
            Qx.battlemsg[0] = "* Smells like a pawn shop.";
          }
          if (Qx.monsterstatus[hI] === 1) {
            Qx.battlemsg[0] = "* Ponman can't keep its eye open.";
          }
          if (Qx.monsterhp[hI] <= Qx.monstermaxhp[hI] / 3) {
            Qx.battlemsg[0] = "* Ponman looks dilated.";
          }
          if (Qx.mercymod[hI] >= Qx.mercymax[hI]) {
            Qx.msg[0] = "* Ponman is sleeping soundly.";
          }
          if (Qx.monstercomment[hI] === "(Sleepy)") {
            Qx.msg[0] = "* The enemies became SLEEPY from Ralsei's lullaby!";
          }
        } else {
          Qx.turntimer = 120;
        }
      }
      if (Qx.mnfight === 2 && Qx.turntimer <= 1) {
        if (this.battlecancel === 1) {
          QX(hI, 100);
        }
        if (this.battlecancel === 2) {
          Qb.with("obj_battlecontroller", hX => {
            hX.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (Qx.myfight === 3) {
      this.actStep();
    }
    if (Qx.myfight === 7) {
      this.hspeed = 15;
    }
    if (this.sleeping === 1) {
      this.eyecon = 999;
    }
    if (this.eyecon === 0) {
      this.eye_angle = 180 + QM(this.siner / 8) * 30;
      if (this.eye_radius < 8) {
        this.eye_radius += 2;
      } else {
        this.eye_radius = 8;
      }
      if (this.addup === 0) {
        this.image_index = 1;
      } else {
        this.image_index = 3;
      }
      if (this.eye_angle > 200) {
        this.image_index = 0;
        this.addup = 1;
      }
      if (this.eye_angle < 160) {
        this.image_index = 2;
        this.addup = 0;
      }
    }
    if (this.eyecon === 10) {
      this.activetimer = 0;
      Qb.with("obj_regularbullet", hX => {
        hX.active = 0;
        hX.image_alpha -= 0.1;
      });
      this.image_index = 0;
      this.eye_radius *= 0.7;
      if (Qp(this.eye_radius) < 0.5) {
        this.eye_radius = 0;
        this.eye_angle = 0;
      }
      if (Qx.turntimer <= 1) {
        this.eyecon = 0;
      }
    }
    if (this.eyecon === 20) {
      if (this.spinspeed < 10) {
        this.spinspeed += 1;
      }
      if (this.pontotal > 1) {
        this.siner += this.spinspeed / 8;
      } else {
        this.siner += this.spinspeed / 20;
      }
      this.eye_angle = 180 + QM(this.siner / 8) * 70;
      if (this.eye_radius < 8) {
        this.eye_radius += 1;
      }
      this.grandbuffer -= 1;
      let hX = Qb.first("obj_heart");
      if (hX) {
        this.x_angle = QV(this.eyex + 28 + this.x, this.eyey + 32 + this.y, hX.x + 8, hX.y + 8);
      } else {
        this.x_angle = 0;
      }
      if (Qp(this.x_angle - this.eye_angle) < 25 && this.eye_angle >= 120 && this.eye_angle <= 240 && this.shotbuffer < 0 && this.shotcount < 3 && this.totalshotcount < this.maxshot) {
        this.shotcount += 1;
        if (this.pontotal === 2) {
          this.shotcount += 1;
        }
        if (this.pontotal === 3) {
          this.shotcount += 1;
        }
        if (this.shotcount >= 3) {
          this.totalshotcount += 1;
          this.shotcount = 0;
          if (this.pontotal === 1) {
            this.shotbuffer = 10;
          }
          if (this.pontotal === 2) {
            this.shotbuffer = 13;
          }
          if (this.pontotal === 3) {
            this.shotbuffer = 22;
          }
        }
        if (this.totalshotcount >= this.maxshot) {
          this.maxtimer = 1;
        }
        QS("snd_hurt1");
        let hY = QJ(this.eyex + 28 + this.x, this.eyey + 32 + this.y, Q7);
        if (!hY.destroyed) {
          hY.speed = 2;
          hY.timepoints = 2.5;
          hY.target = this.mytarget;
          hY.damage = Qx.monsterat[hI] * 5;
          hY.friction = -0.11;
          if (this.pontotal === 1) {
            hY.friction = -0.12;
          }
          hY.direction = this.eye_angle;
          hY.sprite_index = "spr_diamondbullet";
          hY.image_angle = hY.direction;
        }
      }
      if (this.maxtimer > 0) {
        this.maxtimer += 1;
      }
      if (Qx.turntimer < 10) {
        this.eyecon = 10;
      }
    }
    this.siner += 1;
    this.shotbuffer -= 1;
    if (this.becomesleep === 1) {
      this.eyecon = 999;
      this.sleeping = 1;
      this.becomesleep = 0;
      this.sleep_index = 5;
    }
    if (this.eye_angle < 0) {
      this.eye_angle += 360;
    }
    if (this.eye_angle > 360) {
      this.eye_angle -= 360;
    }
    this.eyex = Qk(this.eye_radius, this.eye_angle);
    this.eyey = Qn(this.eye_radius, this.eye_angle);
  }
  actStep() {
    let hI = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* PONMAN - AT 8 DF 0&* Its nucleus doubles as an eyespot./%";
      Qj();
    }
    if (this.acting === 2 && this.actcon === 0) {
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You whispered goodnight to Ponman^1.&* It fell asleep.../%";
      this.sleeping = 1;
      QX(hI, 100);
      Qj();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (this.lullabied === 0) {
        this.singy = QS("snd_ralseising1");
        Qb.with("obj_ponman_enemy", hf => {
          hf.lullabied = 1;
        });
      } else {
        this.singy = QS("snd_ralseising2");
        Qb.with("obj_ponman_enemy", hf => {
          hf.lullabied = 0;
        });
      }
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let hu = Qb.first("obj_heroralsei");
      Qb.with("obj_heroralsei", hf => {
        hf.visible = false;
      });
      if (hu) {
        this.ralsing = QP(hu.x, hu.y, "spr_ralseib_sing");
        this.ralsing.image_speed = 0.2;
      }
      this.lullatimer = 0;
      Qj();
      this.actcon = 10;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* You and Ralsei warned Ponman about Susie^1.&* The enemy went on guard.../%";
      if (QW() > 1) {
        Qx.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let hf = 0; hf < 3; hf += 1) {
        Qx.monstercomment[hf] = "(Warned)";
        Qx.automiss[hf] = 1;
      }
      Qj();
    }
    if (this.actcon === 1 && !Qb.exists("obj_writer")) {
      this.actcon = 0;
      o();
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && Qb.exists("obj_writer") === false) {
      if (this.ralsing && !this.ralsing.destroyed) {
        this.ralsing.instance_destroy();
      }
      Qb.with("obj_heroralsei", hW => {
        hW.visible = true;
      });
      if (this.singy) {
        Qa(this.singy);
        try {
          this.singy.currentTime = 0;
        } catch {}
        this.singy = null;
      }
      Qx.msg = new Array(100).fill(" ");
      Qx.msg[0] = "* PONMAN fell asleep^1!&* The enemies became TIRED!/%";
      if (QW() > 1 && QN(2)) {
        for (let hW = 0; hW < 3; hW += 1) {
          if (Qx.char[hW] && QG(Qx.char[hW]) === 2 && Qx.charcond[hW] !== 5) {
            Qx.charcond[hW] = 5;
            Qx.faceaction[hW] = 9;
            Qx.charmove[hW] = 0;
            Qx.msg[0] = "* PONMAN fell asleep^1!&* SUSIE fell asleep^1!&* The enemies became TIRED!/%";
          }
        }
      }
      this.sleeping = 1;
      QX(hI, 100);
      Qb.with("obj_monsterparent", hX => {
        Qx.monstercomment[hX.myself] = "(Sleepy)";
        Qx.monsterstatus[hX.myself] = 1;
      });
      Qj();
      this.actcon = 1;
    }
  }
  draw(hI) {
    let hu = this.myself;
    if (this.state === 3) {
      if (Qx.monsterhp[hu] <= Qx.monstermaxhp[hu] / 3) {
        Qx.monsterstatus[hu] = 1;
        if (Qx.monstercomment[hu] === " ") {
          Qx.monstercomment[hu] = "(Weak)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Qx.monster[hu] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        hI.draw_sprite_ext("spr_ponman_idle", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
        if (this.sleeping === 0) {
          hI.draw_sprite_ext("spr_ponman_eye", 0, this.x + 28 + this.eyex, this.y + 32 + this.eyey, 2, 2, 0, Qz.white, 1);
        }
        if (this.sleeping === 1) {
          QX(hu, -100);
          this.sprite_index = "spr_ponman_idle";
          this.image_index = 0;
          this.sleeping = 0;
        }
      }
    }
    if (this.state === 0) {
      let hf = "spr_ponman_idle";
      this.this_index = this.image_index;
      if (this.sleeping === 1) {
        hf = "spr_ponman_appear";
        this.this_index = this.sleep_index;
        if (this.sleep_index > 0.5) {
          this.sleep_index -= 0.25;
        }
      }
      hI.draw_sprite_ext(hf, this.this_index, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.sleeping === 0) {
        hI.draw_sprite_ext("spr_ponman_eye", 0, this.x + 28 + this.eyex, this.y + 32 + this.eyey, 2, 2, 0, Qz.white, 1);
      }
      if (this.flash === 1) {
        this.fsiner += 1;
        hI.draw_sprite_white(hf, this.this_index, this.x, this.y, 2, 2, 0, -Qv(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
j0(hL, "obj_ponman_enemy");
j2(hL, "kinds", QA("obj_ponman_enemy", Q3));
j2(hL, "defaultDepth", 90);
j2(hL, "defaultSprite", "spr_ponman_idle");
var hh = hL;
var hd = [{
  id: "ponman2",
  name: "Ponman x2",
  chapter: 1,
  area: "Field",
  desc: "Two Ponmen.#Eye-aimed diamonds.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: hh,
    type: 11,
    x: 480,
    y: 110,
    setup: hT
  }, {
    cls: hh,
    type: 11,
    x: 500,
    y: 200,
    setup: hT
  }],
  battlemsg: "* Ponman drew near!",
  encounterno: 13,
  music: "battle"
}, {
  id: "ponman3",
  name: "Ponman x3",
  chapter: 1,
  area: "Field",
  desc: "Three Ponmen.#Eye-aimed diamonds.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: hh,
    type: 11,
    x: 480,
    y: 20,
    setup: hT
  }, {
    cls: hh,
    type: 11,
    x: 500,
    y: 120,
    setup: hT
  }, {
    cls: hh,
    type: 11,
    x: 460,
    y: 220,
    setup: hT
  }],
  battlemsg: "* Ponman drew near!",
  encounterno: 14,
  music: "battle"
}];
j3(hh, "G.mnfight = 2;");
var hP = [j5, jY, i, v, jA, Tg, LT, h6, s, g, LL];
var hU = {
  cirno_baka: "mp3",
  cyber_battle_backing: "wav",
  cyber_battle_backing_solo: "wav",
  motor_swing_down: "wav",
  motor_swing_down_bc: "wav",
  motor_upper_2: "wav",
  motor_upper_2_bc: "wav",
  motor_upper_quick: "wav",
  motor_upper_quick_bc: "wav",
  motor_upper_quick_high: "wav",
  motor_upper_quick_high_bc: "wav",
  motor_upper_quick_mid: "wav",
  motor_upper_quick_mid_bc: "wav",
  mus_a2: "ogg",
  mus_alphysfix: "ogg",
  mus_amalgam: "ogg",
  mus_ambientwater: "ogg",
  mus_anothermedium: "ogg",
  mus_bad: "ogg",
  mus_badnote1: "wav",
  mus_badnote2: "wav",
  mus_badnote3: "wav",
  mus_barrier: "ogg",
  mus_battle1: "ogg",
  mus_battle2: "ogg",
  mus_bergentruckung: "ogg",
  mus_bgflameA: "ogg",
  mus_birdsong: "ogg",
  mus_boss1: "ogg",
  mus_cast_1: "ogg",
  mus_cast_2: "ogg",
  mus_cast_3: "ogg",
  mus_cast_4: "ogg",
  mus_cast_5: "ogg",
  mus_cast_6: "ogg",
  mus_cast_7: "ogg",
  mus_chime: "wav",
  mus_chokedup: "ogg",
  mus_churchbell: "ogg",
  mus_computer: "ogg",
  mus_coolbeat: "ogg",
  mus_core: "ogg",
  mus_core_ambience: "ogg",
  mus_create: "wav",
  mus_creepy_ambience: "ogg",
  mus_crickets: "ogg",
  mus_cymbal: "ogg",
  mus_dance_of_dog: "ogg",
  mus_date: "ogg",
  mus_date_fight: "ogg",
  mus_date_tense: "ogg",
  mus_deeploop2: "ogg",
  mus_dialup_0: "wav",
  mus_dialup_1: "wav",
  mus_dialup_2: "wav",
  mus_dialup_3: "wav",
  mus_dialup_4: "wav",
  mus_dialup_5: "wav",
  mus_disturbing: "ogg",
  mus_dogappear: "ogg",
  mus_dogmeander: "ogg",
  mus_dogroom: "ogg",
  mus_dogsong: "ogg",
  mus_dontgiveup: "ogg",
  mus_doorclose: "ogg",
  mus_dooropen: "ogg",
  mus_drone: "ogg",
  mus_drumcuica: "wav",
  mus_drumcuica2: "wav",
  mus_drumcymbal: "wav",
  mus_drumkick: "wav",
  mus_drumsnare: "wav",
  mus_dummybattle: "ogg",
  mus_dununnn: "ogg",
  mus_elevator: "ogg",
  mus_elevator_last: "ogg",
  mus_endarea_parta: "ogg",
  mus_endarea_partb: "ogg",
  mus_endingexcerpt1: "ogg",
  mus_endingexcerpt2: "ogg",
  mus_explosion: "wav",
  mus_express_myself: "ogg",
  mus_fallendown2: "ogg",
  mus_fearsting: "ogg",
  mus_flowey: "ogg",
  mus_f_6s_1: "ogg",
  mus_f_6s_2: "ogg",
  mus_f_6s_3: "ogg",
  mus_f_6s_4: "ogg",
  mus_f_6s_5: "ogg",
  mus_f_6s_6: "ogg",
  mus_f_alarm: "ogg",
  mus_f_destroyed: "ogg",
  mus_f_destroyed2: "ogg",
  mus_f_destroyed3: "ogg",
  mus_f_endnote: "wav",
  mus_f_finale_1: "ogg",
  mus_f_finale_1_l: "ogg",
  mus_f_finale_2: "ogg",
  mus_f_finale_3: "ogg",
  mus_f_glock: "wav",
  mus_f_intro: "ogg",
  mus_f_laugh: "wav",
  mus_f_newlaugh: "ogg",
  mus_f_newlaugh_low: "ogg",
  mus_f_noise: "wav",
  mus_f_orchhit: "wav",
  mus_f_orchhit_l: "wav",
  mus_f_part1: "ogg",
  mus_f_part2: "ogg",
  mus_f_part3: "ogg",
  mus_f_saved: "ogg",
  mus_f_wind1: "ogg",
  mus_f_wind2: "ogg",
  mus_gameover: "ogg",
  mus_ghostbattle: "ogg",
  mus_harpnoise: "ogg",
  mus_hereweare: "ogg",
  mus_hotel: "ogg",
  mus_hotel_battle: "ogg",
  mus_house1: "ogg",
  mus_house2: "ogg",
  mus_intronoise: "ogg",
  mus_kingdescription: "ogg",
  mus_lab: "ogg",
  mus_leave: "ogg",
  mus_menu1: "ogg",
  mus_menu2: "ogg",
  mus_menu3: "ogg",
  mus_menu4: "ogg",
  mus_mettafly: "ogg",
  mus_mettatonbattle: "ogg",
  mus_mettaton_ex: "ogg",
  mus_mettaton_neo: "ogg",
  mus_mettaton_pretransform: "ogg",
  mus_mettmusical1: "ogg",
  mus_mettmusical2: "ogg",
  mus_mettmusical3: "ogg",
  mus_mettmusical4: "ogg",
  mus_mettsad: "ogg",
  mus_mettsmash: "wav",
  mus_mett_applause: "ogg",
  mus_mett_cheer: "ogg",
  mus_mode: "ogg",
  mus_mtgameshow: "ogg",
  mus_mt_yeah: "wav",
  mus_muscle: "ogg",
  mus_musicbox: "ogg",
  mus_myemeow: "ogg",
  mus_mysteriousroom2: "ogg",
  mus_mystery: "ogg",
  mus_napstachords: "ogg",
  mus_napstahouse: "ogg",
  mus_news: "ogg",
  mus_news_battle: "ogg",
  mus_note1: "wav",
  mus_note2: "wav",
  mus_note3: "wav",
  mus_note4: "wav",
  mus_note5: "wav",
  mus_note6: "wav",
  mus_ohyes: "ogg",
  mus_oogloop: "ogg",
  mus_operatile: "ogg",
  mus_options_fall: "ogg",
  mus_options_summer: "ogg",
  mus_options_winter: "ogg",
  mus_papyrus: "ogg",
  mus_papyrusboss: "ogg",
  mus_piano: "ogg",
  mus_piano1: "wav",
  mus_piano2: "wav",
  mus_piano3: "wav",
  mus_piano4: "wav",
  mus_piano5: "wav",
  mus_piano6: "wav",
  mus_piano7: "wav",
  mus_piano8: "wav",
  mus_piano9: "wav",
  mus_pianoA: "wav",
  mus_prebattle1: "ogg",
  mus_predummy: "ogg",
  mus_race: "ogg",
  mus_rain: "ogg",
  mus_rain_deep: "ogg",
  mus_repeat_1: "ogg",
  mus_repeat_2: "ogg",
  mus_reunited: "ogg",
  mus_rimshot: "ogg",
  mus_rotate: "wav",
  mus_ruins: "ogg",
  mus_ruinspiano: "ogg",
  mus_sansdate: "ogg",
  mus_sfx_abreak: "wav",
  mus_sfx_abreak2: "wav",
  mus_sfx_ahh: "wav",
  mus_sfx_a_bullet: "wav",
  mus_sfx_a_gigatalk: "wav",
  mus_sfx_a_grab: "ogg",
  mus_sfx_a_lithit: "wav",
  mus_sfx_a_lithit2: "wav",
  mus_sfx_a_pullback: "wav",
  mus_sfx_a_swipe: "wav",
  mus_sfx_a_swordappear: "wav",
  mus_sfx_a_target: "wav",
  mus_sfx_bookspin: "wav",
  mus_sfx_chainsaw: "ogg",
  mus_sfx_cinematiccut: "wav",
  mus_sfx_eyeflash: "wav",
  mus_sfx_frypan: "wav",
  mus_sfx_generate: "wav",
  mus_sfx_gigapunch: "wav",
  mus_sfx_gunshot: "wav",
  mus_sfx_hypergoner_charge: "ogg",
  mus_sfx_hypergoner_laugh: "ogg",
  mus_sfx_oh: "wav",
  mus_sfx_rainbowbeam_1: "wav",
  mus_sfx_rainbowbeam_hold: "ogg",
  mus_sfx_segapower: "wav",
  mus_sfx_segapower2: "wav",
  mus_sfx_sparkles: "wav",
  mus_sfx_spellcast: "wav",
  mus_sfx_star: "wav",
  mus_sfx_swipe: "wav",
  mus_sfx_ted: "wav",
  mus_sfx_voice_jafe: "wav",
  mus_sfx_voice_ted: "wav",
  mus_sfx_voice_triple: "wav",
  mus_sfx_yowl: "wav",
  mus_shop: "ogg",
  mus_sigh_of_dog: "ogg",
  mus_silence: "ogg",
  mus_singF: "wav",
  mus_singG: "wav",
  mus_singvoice: "wav",
  mus_smallshock: "ogg",
  mus_snoresymphony: "ogg",
  mus_snowwalk: "ogg",
  mus_snowy: "ogg",
  mus_spider: "ogg",
  mus_spoopy: "ogg",
  mus_spoopy_holiday: "ogg",
  mus_spoopy_wave: "ogg",
  mus_star: "ogg",
  mus_sticksnap: "ogg",
  mus_story: "ogg",
  mus_story_stuck: "ogg",
  mus_temshop: "ogg",
  mus_temvillage: "ogg",
  mus_tension: "ogg",
  mus_tone2: "ogg",
  mus_tone3: "ogg",
  mus_toomuch: "ogg",
  mus_toriel: "ogg",
  mus_town: "ogg",
  mus_tv: "ogg",
  mus_undyneboss: "ogg",
  mus_undynefast: "ogg",
  mus_undynepiano: "ogg",
  mus_undynescary: "ogg",
  mus_undynetheme: "ogg",
  mus_undynetruetheme: "ogg",
  mus_vsasgore: "ogg",
  mus_waterfall: "ogg",
  mus_waterquiet: "ogg",
  mus_wawa: "ogg",
  mus_whoopee: "ogg",
  mus_wind: "ogg",
  mus_woofenstein: "ogg",
  mus_woofenstein_loop: "ogg",
  mus_wrongworld: "ogg",
  mus_xpart: "ogg",
  mus_xpart_2: "ogg",
  mus_xpart_a: "ogg",
  mus_xpart_b: "ogg",
  mus_xpart_back: "ogg",
  mus_x_undyne: "ogg",
  mus_x_undyne_pre: "ogg",
  mus_yourbestfriend_3: "ogg",
  mus_zzz_c: "ogg",
  mus_zzz_c2: "ogg",
  mus_zz_megalovania: "ogg",
  mus_z_ending: "ogg",
  punch_ish_1: "wav",
  punch_ish_1_bc: "wav",
  rhythm_battle_snare: "wav",
  sfx_coin_chefs: "wav",
  shadowman_sax_long_1: "wav",
  shadowman_sax_long_2: "wav",
  shadowman_sax_long_3: "wav",
  shadowman_sax_long_4: "wav",
  shadowman_sax_long_solo_note: "wav",
  snd_acquire_lancer: "wav",
  snd_applause: "wav",
  snd_applause_single: "wav",
  snd_arrow: "wav",
  snd_audience_aww: "wav",
  snd_awkward: "wav",
  snd_b: "wav",
  "snd_b@chut": "wav",
  snd_badexplosion: "wav",
  snd_bageldefeat: "wav",
  snd_barrel_jump: "wav",
  snd_battleenter: "wav",
  snd_battlefall: "wav",
  snd_bell: "wav",
  "snd_bell@chut": "wav",
  snd_bell_bc: "wav",
  snd_bell_bounce_short: "wav",
  snd_bigscore: "wav",
  snd_birdtweet: "wav",
  snd_block2: "wav",
  snd_bluh: "wav",
  snd_board_bomb: "wav",
  snd_board_bosshit: "wav",
  snd_board_damage: "wav",
  snd_board_door_close: "wav",
  snd_board_kill: "wav",
  snd_board_lift: "wav",
  snd_board_mantle_dash_fast: "wav",
  snd_board_mantle_dash_prepare: "wav",
  snd_board_mantle_dash_slow: "wav",
  snd_board_mantle_laugh_mid: "wav",
  snd_board_mantle_move: "wav",
  snd_board_mantle_unknown_a: "wav",
  snd_board_mantle_unknown_b: "wav",
  snd_board_playerhurt: "wav",
  snd_board_splash: "wav",
  snd_board_summon: "wav",
  snd_board_sword1: "wav",
  snd_board_sword2: "wav",
  snd_board_sword3: "wav",
  snd_board_sword_metal: "wav",
  snd_board_text_main: "wav",
  snd_board_text_main_end: "wav",
  snd_board_throw: "wav",
  snd_board_torch: "wav",
  snd_board_torch_high: "wav",
  snd_board_unsummon: "wav",
  snd_bomb: "wav",
  "snd_bomb@chut": "wav",
  snd_bombfall: "wav",
  snd_boost: "wav",
  snd_boxing_fight: "wav",
  snd_boxing_fight_bc: "wav",
  snd_boxing_round1: "wav",
  snd_boxing_round1_bc: "wav",
  snd_boxing_round2: "wav",
  snd_boxing_round3: "wav",
  snd_break1: "wav",
  "snd_break1@chut": "wav",
  snd_break2: "wav",
  "snd_break2@chut": "wav",
  snd_breaka: "wav",
  snd_breakb: "wav",
  snd_breakc: "wav",
  snd_bump: "wav",
  snd_bwaap: "wav",
  snd_camera_flash: "wav",
  snd_cardrive: "wav",
  snd_cardrive_bc: "wav",
  snd_carhonk: "wav",
  snd_catsalad: "wav",
  snd_chain_extend: "wav",
  snd_chain_extend_bc: "wav",
  snd_chain_wave: "wav",
  snd_chargeshot_charge: "wav",
  snd_chargeshot_fire: "wav",
  snd_chug: "wav",
  snd_coaster_kiss: "wav",
  snd_coin: "wav",
  snd_credit_s: "wav",
  snd_creepyjingle: "wav",
  snd_criticalswing: "wav",
  snd_criticalswing_bc: "wav",
  snd_crow: "wav",
  snd_crowd: "wav",
  snd_crowd_aah: "wav",
  snd_crowd_cheer_single: "wav",
  snd_crowd_laughter_loop: "wav",
  snd_crowd_laughter_single: "wav",
  snd_crowd_ooh: "wav",
  snd_crowngrowth: "wav",
  snd_crownshrink: "wav",
  snd_dadblast: "wav",
  snd_dadlaugh: "wav",
  snd_dadtxt: "wav",
  snd_damage: "wav",
  "snd_damage@chut": "wav",
  snd_damage_bc: "wav",
  snd_deathnoise: "wav",
  snd_defeatrun: "wav",
  snd_dimbox: "wav",
  snd_doghurt1: "wav",
  snd_dogresidue: "wav",
  snd_dogsalad: "wav",
  snd_doorclose: "wav",
  snd_dooropen: "wav",
  snd_drake_dodge: "wav",
  snd_drive: "wav",
  snd_drumroll: "wav",
  snd_dumbvictory: "wav",
  snd_egg: "wav",
  snd_ehurt1: "wav",
  "snd_ehurt1@chut": "wav",
  snd_electric_meow: "wav",
  snd_electric_talk: "wav",
  snd_equip: "wav",
  snd_error: "wav",
  snd_escaped: "wav",
  "snd_escaped@chut": "wav",
  snd_explosion: "wav",
  snd_explosion_8bit: "wav",
  snd_explosion_firework: "wav",
  snd_explosion_firework_bc: "wav",
  snd_explosion_mmx: "wav",
  snd_explosion_mmx3: "wav",
  snd_face_hit: "wav",
  snd_fall: "wav",
  snd_fall_cool_deep: "wav",
  snd_floweylaugh: "wav",
  snd_floweytalk1: "wav",
  snd_floweytalk2: "wav",
  snd_foodscore: "wav",
  snd_ftext_bounce: "wav",
  snd_ftext_brother: "wav",
  snd_ftext_dark_fountain: "wav",
  snd_ftext_enter: "wav",
  snd_ftext_gunshot: "wav",
  snd_ftext_names: "wav",
  snd_ftext_prize: "wav",
  snd_ftext_susiezilla: "wav",
  snd_ftext_toriel: "wav",
  snd_ftext_vibraphones: "wav",
  snd_ftext_woodblock: "wav",
  snd_glassbreak: "wav",
  snd_grab: "wav",
  "snd_grab@chut": "wav",
  snd_grandpatemi: "wav",
  snd_graze: "wav",
  snd_graze_bc: "wav",
  snd_guitarerror: "wav",
  snd_guitarerror2: "wav",
  snd_guitarpickup1: "wav",
  snd_guitarpickup2: "wav",
  snd_guitarpickup3: "wav",
  snd_guitarpickup4: "wav",
  snd_gunshot: "wav",
  snd_gunshot_b: "wav",
  snd_heal_c: "wav",
  snd_heartshot: "wav",
  snd_heartshot_dr: "wav",
  snd_heartshot_dr_b: "wav",
  snd_heavyswing: "wav",
  snd_heavyswing_bc: "wav",
  snd_heavy_passing: "wav",
  snd_hero: "wav",
  snd_hit: "wav",
  "snd_hit@chut": "wav",
  snd_howl: "wav",
  snd_hurt1: "wav",
  "snd_hurt1@chut": "wav",
  snd_hurt1_bc: "wav",
  snd_hurtbeef: "wav",
  snd_hurtbig: "wav",
  snd_hurtbuzz: "wav",
  snd_hurtdragon: "wav",
  snd_hurtgirl: "wav",
  snd_hurtlaugh: "wav",
  snd_hypnosis: "wav",
  snd_impact: "wav",
  "snd_impact@chut": "wav",
  snd_impact_bc: "wav",
  snd_item: "wav",
  "snd_item@chut": "wav",
  snd_joker_anything: "wav",
  snd_joker_byebye: "wav",
  snd_joker_chaos: "wav",
  snd_joker_ha0: "wav",
  snd_joker_ha1: "wav",
  snd_joker_laugh0: "wav",
  snd_joker_laugh1: "wav",
  snd_joker_metamorphosis: "wav",
  snd_joker_neochaos: "wav",
  snd_joker_oh: "wav",
  snd_jump: "wav",
  snd_jump_bc: "wav",
  snd_knight_boxbreak: "wav",
  snd_knight_cut: "wav",
  snd_knight_cut2: "wav",
  snd_knight_drawpower: "wav",
  snd_knight_fallingsword_big: "wav",
  snd_knight_hurt: "wav",
  snd_knight_hurtb: "wav",
  snd_knight_jump: "wav",
  snd_knight_jump_quick: "wav",
  snd_knight_powerup_white: "wav",
  snd_knight_puff: "wav",
  snd_knight_roar: "wav",
  snd_knight_rotatingslash_line: "wav",
  snd_knight_star_explosion_close: "wav",
  snd_knight_stretch: "wav",
  snd_knight_teleport: "wav",
  snd_knock: "wav",
  "snd_knock@chut": "wav",
  snd_lancerhonk: "wav",
  snd_lancerlaugh: "wav",
  snd_lancerwhistle: "wav",
  snd_laughtrack_short_temp: "wav",
  snd_laz: "wav",
  snd_laz_c: "wav",
  snd_levelup: "wav",
  "snd_levelup@chut": "wav",
  snd_link_secret_bad: "wav",
  snd_locker: "wav",
  snd_magicmarker: "wav",
  snd_magicsprinkle: "wav",
  snd_menumove: "wav",
  snd_mercyadd: "wav",
  snd_metalhit: "wav",
  snd_metalhit_bc: "wav",
  snd_metal_hit: "wav",
  snd_metal_hit_guard: "wav",
  snd_metal_hit_reverb: "wav",
  snd_motor_swing_down: "wav",
  snd_motor_upper_2: "wav",
  snd_mtt1: "wav",
  snd_mtt2: "wav",
  snd_mtt3: "wav",
  snd_mtt4: "wav",
  snd_mtt5: "wav",
  snd_mtt6: "wav",
  snd_mtt7: "wav",
  snd_mtt8: "wav",
  snd_mtt9: "wav",
  snd_mtt_burst: "wav",
  snd_mtt_hit: "wav",
  snd_mtt_prebomb: "wav",
  snd_noise: "wav",
  "snd_noise@chut": "wav",
  snd_nosound: "wav",
  "snd_nosound@chut": "wav",
  snd_object_passing: "wav",
  snd_orchhit: "wav",
  snd_petrify: "wav",
  snd_phone: "wav",
  "snd_phone@chut": "wav",
  snd_pianonoise: "wav",
  snd_pinball: "wav",
  snd_pirouette: "wav",
  snd_pombark: "wav",
  "snd_pombark@chut": "wav",
  snd_power: "wav",
  "snd_power@chut": "wav",
  snd_punchheavythunder: "wav",
  snd_punchheavythunder_bc: "wav",
  snd_punchmed: "wav",
  snd_punchmed_bc: "wav",
  snd_punchstrong: "wav",
  snd_punchweak: "wav",
  "snd_punchweak@chut": "wav",
  snd_punch_ish_1: "wav",
  snd_quake_nes: "wav",
  snd_queenhowl_b: "wav",
  snd_queenhowl_b_bc: "wav",
  snd_queen_bitcrushlaugh: "wav",
  snd_queen_gasp: "wav",
  snd_queen_hoot_0: "wav",
  snd_queen_hoot_1: "wav",
  snd_queen_hoot_2: "wav",
  snd_queen_laugh_0: "wav",
  snd_queen_laugh_0_bc: "wav",
  snd_queen_punched_lower: "wav",
  snd_queen_punched_lower_heavy: "wav",
  snd_ralseising1: "wav",
  snd_ralseising2: "wav",
  snd_reverse_spare: "wav",
  snd_rimshot: "wav",
  snd_rocket: "wav",
  snd_rocket_bc: "wav",
  snd_rocket_long: "wav",
  snd_rocket_sneo: "wav",
  snd_rudebuster_hit: "wav",
  snd_rudebuster_swing: "wav",
  snd_rumble: "wav",
  snd_saber3: "wav",
  snd_scissorbell: "wav",
  snd_screenshake: "wav",
  snd_screenshake_bc: "wav",
  snd_scytheburst: "wav",
  snd_scytheburst_bc: "wav",
  snd_select: "wav",
  "snd_select@chut": "wav",
  snd_shadowpendant: "wav",
  snd_shakerbreaker: "wav",
  snd_shineselect: "wav",
  snd_shinka_ambience: "wav",
  snd_shock: "wav",
  snd_slidewhist: "wav",
  snd_slidewhistle: "wav",
  snd_smallswing: "wav",
  snd_smashreveal: "wav",
  snd_snd_motor_upper_quick_high: "wav",
  snd_sneo_laugh_long: "wav",
  snd_sneo_overpower: "wav",
  snd_sonar: "wav",
  snd_spamton_laugh: "wav",
  snd_spare: "wav",
  snd_sparkle1: "wav",
  snd_sparkle_gem: "wav",
  snd_sparkle_glock: "wav",
  snd_spearappear: "wav",
  "snd_spearappear@chut": "wav",
  snd_spearappear_choppy: "wav",
  snd_spearrise: "wav",
  "snd_spearrise@chut": "wav",
  snd_speedup: "wav",
  snd_spellcast: "wav",
  snd_spell_cure_slight_smaller: "wav",
  snd_splat: "wav",
  snd_spooky: "wav",
  snd_squeak: "wav",
  snd_squeaky: "wav",
  snd_squeaky_bc: "wav",
  snd_stardrop: "wav",
  snd_step1: "wav",
  snd_step2: "wav",
  snd_suslaugh: "wav",
  snd_sussurprise: "wav",
  snd_swallow: "wav",
  "snd_swallow@chut": "wav",
  snd_swing: "wav",
  snd_switchpull_n: "wav",
  snd_tearcard: "wav",
  snd_tem: "wav",
  snd_tem2: "wav",
  snd_tem3: "wav",
  snd_tem4: "wav",
  snd_tem5: "wav",
  snd_tem6: "wav",
  snd_tensionhorn: "wav",
  snd_text: "wav",
  snd_tm_quiz_a: "wav",
  snd_tm_quiz_b: "wav",
  snd_tm_quiz_c: "wav",
  snd_tm_quiz_d: "wav",
  snd_toilet: "wav",
  snd_tvturnoff: "wav",
  snd_tvturnoff2: "wav",
  snd_tv_alarm: "wav",
  snd_tv_static: "wav",
  snd_tv_voice_short: "wav",
  snd_tv_voice_short_10: "wav",
  snd_tv_voice_short_2: "wav",
  snd_tv_voice_short_3: "wav",
  snd_tv_voice_short_4: "wav",
  snd_tv_voice_short_5: "wav",
  snd_tv_voice_short_6: "wav",
  snd_tv_voice_short_7: "wav",
  snd_tv_voice_short_8: "wav",
  snd_tv_voice_short_9: "wav",
  SND_TXT1: "wav",
  SND_TXT2: "wav",
  snd_txtal: "wav",
  "snd_txtal@chut": "wav",
  snd_txtasg: "wav",
  "snd_txtasg@chut": "wav",
  snd_txtasr: "wav",
  snd_txtasr2: "wav",
  snd_txtber: "wav",
  snd_txtecho: "wav",
  snd_txtjok: "wav",
  snd_txtlan: "wav",
  snd_txtnoe: "wav",
  snd_txtpap: "wav",
  "snd_txtpap@chut": "wav",
  snd_txtq: "wav",
  snd_txtq_2: "wav",
  snd_txtral: "wav",
  snd_txtrud: "wav",
  snd_txtrx1: "wav",
  snd_txtsans: "wav",
  snd_txtsans2: "wav",
  "snd_txtsans@chut": "wav",
  snd_txtspam: "wav",
  snd_txtspam2: "wav",
  snd_txtsus: "wav",
  snd_txtsusral: "wav",
  snd_txttor: "wav",
  snd_txttor2: "wav",
  "snd_txttor@chut": "wav",
  snd_txtund: "wav",
  snd_txtund2: "wav",
  snd_txtund3: "wav",
  snd_txtund4: "wav",
  "snd_txtund@chut": "wav",
  snd_txtund_hyper: "wav",
  snd_ultraswing: "wav",
  snd_ultraswing_bc: "wav",
  snd_vaporized: "wav",
  snd_victor: "wav",
  snd_vulkinhurt: "wav",
  snd_wallclaw: "wav",
  snd_weaponpull_fast: "wav",
  snd_weirdeffect: "wav",
  snd_whip_crack_only: "wav",
  snd_whip_hard: "wav",
  snd_whip_throw_only: "wav",
  snd_whistlebreath: "wav",
  snd_wideslash_low: "wav",
  snd_wing: "wav",
  snd_wngdng1: "wav",
  snd_wngdng2: "wav",
  snd_wngdng3: "wav",
  snd_wngdng4: "wav",
  snd_wngdng5: "wav",
  snd_wngdng6: "wav",
  snd_wngdng7: "wav",
  snd_won: "wav",
  snd_wrongvictory: "wav",
  snd_yeah: "wav",
  a2: "ogg",
  acid_tunnel: "ogg",
  alarm_titlescreen: "ogg",
  alley_ambience: "ogg",
  alphysfix: "ogg",
  amalgam: "ogg",
  ambientwater: "ogg",
  ambientwater_weird: "ogg",
  anothermedium: "ogg",
  april_2012: "ogg",
  AUDIO_ANOTHERHIM: "ogg",
  AUDIO_DARKNESS: "ogg",
  AUDIO_DEFEAT: "ogg",
  AUDIO_DRONE: "ogg",
  AUDIO_STORY: "ogg",
  baci_distort: "ogg",
  baci_perugina: "ogg",
  bad: "ogg",
  barrier: "ogg",
  basement: "ogg",
  battle: "ogg",
  battle1: "ogg",
  battle2: "ogg",
  battle_vapor: "ogg",
  berdly_audience: "ogg",
  berdly_battle_heartbeat_true: "ogg",
  berdly_chase: "ogg",
  berdly_descend: "ogg",
  berdly_flashback: "ogg",
  berdly_theme: "ogg",
  bergentruckung: "ogg",
  bgflameA: "ogg",
  bird: "ogg",
  birdnoise: "ogg",
  birdsong: "ogg",
  board4_rhythm: "ogg",
  board_4: "ogg",
  board_4_challenge: "ogg",
  board_lancer_dig: "ogg",
  board_ocean: "ogg",
  board_sword_music: "ogg",
  board_zelda: "ogg",
  boss1: "ogg",
  boxing_boss: "ogg",
  boxing_game: "ogg",
  card_castle: "ogg",
  castletown: "ogg",
  castletown_empty: "ogg",
  cast_1: "ogg",
  cast_2: "ogg",
  cast_3: "ogg",
  cast_4: "ogg",
  cast_5: "ogg",
  cast_6: "ogg",
  cast_7: "ogg",
  ch2_credits: "ogg",
  "ch3-practice_song_combined": "ogg",
  "ch3-practice_song_noguit": "ogg",
  ch3_board2: "ogg",
  ch3_board3: "ogg",
  ch3_karaoke_example_guit_only: "ogg",
  ch3_karaoke_example_noguit: "ogg",
  ch3_karaoke_full: "ogg",
  ch3_karaoke_no_guitar: "ogg",
  ch3_south_of_the_border: "ogg",
  ch3_tvtime: "ogg",
  ch3_tvtime_guitar: "ogg",
  charjoined: "ogg",
  checkers: "ogg",
  chokedup: "ogg",
  churchbell: "ogg",
  computer: "ogg",
  confession: "ogg",
  coolbeat: "ogg",
  "coolbeat@chut": "ogg",
  core: "ogg",
  core_ambience: "ogg",
  creepychase: "ogg",
  creepydoor: "ogg",
  creepylandscape: "ogg",
  creepy_ambience: "ogg",
  crickets: "ogg",
  cyber: "ogg",
  cybercity: "ogg",
  cybercity_alt: "ogg",
  cyberhouse: "ogg",
  cybershop_christmas: "ogg",
  cyber_battle_end: "ogg",
  cyber_battle_prelude: "ogg",
  cyber_shop: "ogg",
  cymbal: "ogg",
  d: "ogg",
  dance_of_dog: "ogg",
  date: "ogg",
  date_fight: "ogg",
  date_tense: "ogg",
  deeploop2: "ogg",
  deep_noise: "ogg",
  deltarune_logo_ch5_itoki: "ogg",
  dogappear: "ogg",
  dogcheck: "ogg",
  dogmeander: "ogg",
  dogroom: "ogg",
  "dogroom@chut": "ogg",
  dogsong: "ogg",
  dontforget: "ogg",
  dontgiveup: "ogg",
  doorclose: "ogg",
  dooropen: "ogg",
  drone: "ogg",
  dummybattle: "ogg",
  dununnn: "ogg",
  elevator: "ogg",
  "elevator@chut": "ogg",
  elevator_last: "ogg",
  endarea_parta: "ogg",
  endarea_partb: "ogg",
  endingexcerpt1: "ogg",
  endingexcerpt2: "ogg",
  express_myself: "ogg",
  fallendown2: "ogg",
  fanfare: "ogg",
  fearsting: "ogg",
  field_of_hopes: "ogg",
  findher: "ogg",
  flashback_excerpt: "ogg",
  flowey: "ogg",
  forest: "ogg",
  friendship: "ogg",
  f_6s_1: "ogg",
  f_6s_2: "ogg",
  f_6s_3: "ogg",
  f_6s_4: "ogg",
  f_6s_5: "ogg",
  f_6s_6: "ogg",
  f_alarm: "ogg",
  f_destroyed: "ogg",
  f_destroyed2: "ogg",
  f_destroyed3: "ogg",
  f_finale_1: "ogg",
  f_finale_1_l: "ogg",
  f_finale_2: "ogg",
  f_finale_3: "ogg",
  f_intro: "ogg",
  f_newlaugh: "ogg",
  f_newlaugh_low: "ogg",
  f_part1: "ogg",
  f_part2: "ogg",
  f_part3: "ogg",
  f_saved: "ogg",
  f_wind1: "ogg",
  f_wind2: "ogg",
  GALLERY: "ogg",
  gameover: "ogg",
  gameover_short: "ogg",
  ghostbattle: "ogg",
  giant_queen_appears: "ogg",
  gigaqueen_pre: "ogg",
  glacier: "ogg",
  greenroom_detune: "ogg",
  harpnoise: "ogg",
  hereweare: "ogg",
  hip_shop: "ogg",
  home: "ogg",
  honksong: "ogg",
  hotel: "ogg",
  hotel_battle: "ogg",
  house1: "ogg",
  house2: "ogg",
  intronoise: "ogg",
  joker: "ogg",
  KEYGEN: "ogg",
  kingboss: "ogg",
  kingdescription: "ogg",
  knight: "ogg",
  knight_appears: "ogg",
  lab: "ogg",
  lancer: "ogg",
  lancerfight: "ogg",
  lancer_susie: "ogg",
  leave: "ogg",
  legend: "ogg",
  man: "ogg",
  mansion: "ogg",
  mansion_entrance: "ogg",
  menu: "ogg",
  menu1: "ogg",
  menu2: "ogg",
  menu3: "ogg",
  menu4: "ogg",
  mettafly: "ogg",
  mettatonbattle: "ogg",
  mettaton_ex: "ogg",
  mettaton_neo: "ogg",
  mettaton_pretransform: "ogg",
  mettmusical1: "ogg",
  mettmusical2: "ogg",
  mettmusical3: "ogg",
  mettmusical4: "ogg",
  mettsad: "ogg",
  mett_applause: "ogg",
  mett_cheer: "ogg",
  minigame_kart: "ogg",
  mode: "ogg",
  mtgameshow: "ogg",
  muscle: "ogg",
  "muscle@chut": "ogg",
  musicbox: "ogg",
  music_guys: "ogg",
  music_guys_intro: "ogg",
  mus_birdnoise: "ogg",
  "mus_birdnoise@chut": "ogg",
  mus_confession: "ogg",
  "mus_confession@chut": "ogg",
  mus_introcar: "ogg",
  mus_school: "ogg",
  myemeow: "ogg",
  mysteriousroom2: "ogg",
  mystery: "ogg",
  napstachords: "ogg",
  napstahouse: "ogg",
  napsta_alarm: "ogg",
  nes_intro_extended_part2: "ogg",
  news: "ogg",
  newscast: "ogg",
  news_battle: "ogg",
  nightmare_boss_heavy: "ogg",
  nightmare_nes: "ogg",
  night_ambience: "ogg",
  noelle_ferriswheel: "ogg",
  noelle_normal: "ogg",
  noelle_school: "ogg",
  northernlight: "ogg",
  ocean: "ogg",
  ohyes: "ogg",
  ominous_message: "ogg",
  oogloop: "ogg",
  operatile: "ogg",
  options_fall: "ogg",
  options_summer: "ogg",
  options_winter: "ogg",
  papyrus: "ogg",
  papyrusboss: "ogg",
  piano: "ogg",
  prebattle1: "ogg",
  predummy: "ogg",
  prejoker: "ogg",
  queen: "ogg",
  queen_boss: "ogg",
  queen_car_radio: "ogg",
  queen_intro: "ogg",
  quiet_autumn: "ogg",
  race: "ogg",
  rain: "ogg",
  "rain@chut": "ogg",
  rain_deep: "ogg",
  repeat_1: "ogg",
  repeat_2: "ogg",
  reunited: "ogg",
  rimshot: "ogg",
  root_8bit: "ogg",
  rouxls_battle: "ogg",
  rtenna_zoom: "ogg",
  rudebuster_boss: "ogg",
  ruins: "ogg",
  ruinspiano: "ogg",
  ruruskaado: "ogg",
  sansdate: "ogg",
  sfx_a_grab: "ogg",
  sfx_chainsaw: "ogg",
  sfx_disturbing: "ogg",
  sfx_hypergoner_charge: "ogg",
  sfx_hypergoner_laugh: "ogg",
  sfx_rainbowbeam_hold: "ogg",
  sfx_star: "ogg",
  sfx_woofenstein: "ogg",
  sfx_woofenstein_loop: "ogg",
  shinkansen: "ogg",
  shop: "ogg",
  shop1: "ogg",
  sigh_of_dog: "ogg",
  silence: "ogg",
  sink_noise: "ogg",
  smallshock: "ogg",
  snd_bigcar_yelp: "ogg",
  snd_closet_impact: "ogg",
  snd_dtrans_drone: "ogg",
  snd_dtrans_flip: "ogg",
  snd_dtrans_lw: "ogg",
  snd_dtrans_square: "ogg",
  snd_dtrans_twinkle: "ogg",
  snd_fountain_make: "ogg",
  snd_ghostappear: "ogg",
  snd_great_shine: "ogg",
  snd_him_quick: "ogg",
  snd_hitcar: "ogg",
  snd_hitcar_little: "ogg",
  snd_icespell: "ogg",
  snd_knight_fallingsword: "ogg",
  snd_smallcar_yelp: "ogg",
  snd_snowgrave: "ogg",
  snd_spell_pacify: "ogg",
  snoresymphony: "ogg",
  snowwalk: "ogg",
  snowy: "ogg",
  spamton_basement: "ogg",
  spamton_battle: "ogg",
  spamton_happy: "ogg",
  spamton_laugh_noise: "ogg",
  spamton_meeting: "ogg",
  spamton_meeting_intro: "ogg",
  spamton_neo_after: "ogg",
  spamton_neo_meeting: "ogg",
  spamton_neo_mix_ex_wip: "ogg",
  spider: "ogg",
  spoopy: "ogg",
  spoopy_holiday: "ogg",
  spoopy_wave: "ogg",
  star: "ogg",
  stealth: "ogg",
  sticksnap: "ogg",
  story: "ogg",
  story_stuck: "ogg",
  s_neo: "ogg",
  s_neo_clip: "ogg",
  temshop: "ogg",
  temvillage: "ogg",
  tenna_battle: "ogg",
  tenna_battle_guitar: "ogg",
  tenna_battle_old: "ogg",
  tenna_island: "ogg",
  tense: "ogg",
  tension: "ogg",
  the_dark_truth: "ogg",
  THE_HOLY: "ogg",
  thrashmachine: "ogg",
  tone2: "ogg",
  tone3: "ogg",
  toomuch: "ogg",
  toriel: "ogg",
  town: "ogg",
  "town@chut": "ogg",
  tv: "ogg",
  tvromance: "ogg",
  tv_changingroom: "ogg",
  TV_GAME: "ogg",
  tv_hall_of_fame: "ogg",
  tv_noise: "ogg",
  tv_results_screen: "ogg",
  tv_world: "ogg",
  undyneboss: "ogg",
  undynefast: "ogg",
  undynepiano: "ogg",
  undynescary: "ogg",
  undynetheme: "ogg",
  undynetruetheme: "ogg",
  vsasgore: "ogg",
  vs_susie: "ogg",
  w: "ogg",
  waterfall: "ogg",
  waterquiet: "ogg",
  wawa: "ogg",
  whoopee: "ogg",
  wind: "ogg",
  "wind@chut": "ogg",
  wind_highplace: "ogg",
  xpart: "ogg",
  xpart_2: "ogg",
  xpart_a: "ogg",
  xpart_b: "ogg",
  xpart_back: "ogg",
  x_undyne: "ogg",
  x_undyne_pre: "ogg",
  yourbestfriend_3: "ogg",
  zzz_c: "ogg",
  zzz_c2: "ogg",
  zz_megalovania: "ogg",
  z_ending: "ogg",
  "snd_bombfall@chut": "ogg",
  "snd_bombsplosion@chut": "wav",
  "snd_break1_c@chut": "wav",
  "snd_break2_c@chut": "wav",
  "snd_buzzing@chut": "ogg",
  "snd_damage_c@chut": "wav",
  "snd_elecdoor_close@chut": "wav",
  "snd_elecdoor_open@chut": "wav",
  "snd_flameloop@chut": "ogg",
  "snd_gameover_broken@chut": "wav",
  "snd_heavydamage@chut": "ogg",
  "snd_hurt1_c@chut": "wav",
  "snd_instanoise@chut": "wav",
  "snd_undynestep@chut": "wav"
};
export { jv as a, jg as b, hQ as c, hP as d, hU as e };
function hH(hI, hu) {
  var hf = new URL(hI, hu).href;
  var hW = globalThis.__drWarm;
  return (hW ? hW(hf) : Promise.resolve()).then(function () {
    return import(hf).catch(function (hX) {
      try {
        hX.reload = true;
        hX.what = "the game code";
      } catch (hY) {}
      throw hX;
    });
  });
}
