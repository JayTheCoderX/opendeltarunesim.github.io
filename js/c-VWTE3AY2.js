import { d as X } from "./c-MYK6C3LF.js";
import { P as s, V as r, g as T } from "./c-ZQQWH6UG.js";
import { B as Y, C, Ec as e, Fb as g, Ib as i, N as A0, Ra as A1, h as A2, nc as A3, o as A4, pb as A5, qb as A6, x as A7, xb as A8, xc as A9 } from "./c-PBMEVLU6.js";
import { a as AA, e as At, l as Aq } from "./c-XSSGDLV7.js";
Aq();
var Av = class AS extends A5 {
  create() {
    this.rotspeed = 4;
    this.timer = 0;
    this.con = 0;
    this.image_xscale = 1.5;
    this.image_yscale = 1.5;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += this.rotspeed * 2;
      this.direction += this.rotspeed * 3;
      this.timer++;
      if (this.timer >= 10) {
        this.image_alpha -= 0.1;
      }
      if (this.image_alpha <= 0) {
        this.instance_destroy();
      }
    }
  }
};
AA(Av, "obj_icespell_hexagon");
At(Av, "kinds", A6("obj_icespell_hexagon", A5));
At(Av, "defaultSprite", "spr_icespell_hexagon");
var Am = Av;
var AJ = class Af extends A5 {
  create() {
    this.timer = 0;
    this.star = 0;
    this.damage = 0;
    this.hex = [];
    this.target = null;
  }
  draw(Ah) {
    this.timer++;
    let AU = this.timer;
    if (AU === 1) {
      A1("snd_icespell");
      this.hex[0] = i(this.x - 25, this.y - 20, Am);
    }
    if (AU === 4) {
      this.hex[1] = i(this.x + 25, this.y - 20, Am);
    }
    if (AU === 7) {
      this.hex[2] = i(this.x, this.y + 20, Am);
    }
    if (AU === 10) {
      for (let An of this.hex) {
        if (!!An && !An.destroyed) {
          for (let AF = 0; AF < 6; AF++) {
            let AD = i(An.x, An.y, Am);
            AD.image_xscale = 0.75;
            AD.image_yscale = 0.75;
            AD.con = 1;
            AD.direction = AF * 60;
            AD.speed = 8;
            AD.friction = 0.2;
          }
        }
      }
    }
    if (AU === 11) {
      for (let AE of this.hex) {
        if (AE && !AE.destroyed) {
          AE.instance_destroy();
        }
      }
    }
    if (AU === 15 && T.fighting === 1) {
      T.hittarget[this.star] = 0;
      let Aj = s.monsterinstance ? s.monsterinstance(this.star) : null;
      let Au = AV(this.star, this.damage);
      r(this.star, this.damage, this.caster);
      AN(this.star, Au);
      if (T.monster[this.star] === 1 && Aj && !Aj.destroyed && s.ch2_scr_oflash) {
        s.ch2_scr_oflash.call(Aj);
      }
    }
    if (AU >= 10 && AU <= 30) {
      Ah.draw_set_alpha(Math.max(0, 2.2 - AU / 10));
      Ah.draw_set_color(A2.white);
      for (let AL = 0; AL < 3; AL++) {
        Ah.draw_circle(this.x, this.y, 60 + AL - AU * 6, true);
      }
      Ah.draw_set_alpha(1);
    }
    if (AU === 60) {
      this.instance_destroy();
    }
  }
};
AA(AJ, "obj_icespell");
At(AJ, "kinds", A6("obj_icespell", A5));
At(AJ, "defaultSprite", "spr_icespell_snowflake");
var Ap = AJ;
var Ac = new Set(["obj_queen_enemy", "obj_spamton_neo_enemy", "obj_berdlyb_enemy", "obj_berdlyb2_enemy", "obj_lancerboss", "obj_lancerboss2", "obj_lancerboss3", "obj_susieenemy", "obj_king_boss", "obj_joker", "obj_knight_enemy"]);
function AV(Ah, AU) {
  let An = s.monsterinstance ? s.monsterinstance(Ah) : null;
  if (!An || An.destroyed || T.monster[Ah] !== 1 || AU < T.monsterhp[Ah] || An.freezable === 0 || Ac.has(An.constructor.name)) {
    return null;
  }
  let AF = T.flag[51 + Ah];
  T.flag[51 + Ah] = 6;
  return {
    mi: An,
    was: AF
  };
}
AA(AV, "iceFreezeMark");
function AN(Ah, AU) {
  if (!AU) {
    return;
  }
  if (T.monster[Ah] === 1) {
    T.flag[51 + Ah] = AU.was;
    return;
  }
  let An = i(AU.mi.x, AU.mi.y, Ak);
  An.target = AU.mi;
  An.star = Ah;
  An.spr = AU.mi.hurtsprite || AU.mi.sprite_index;
  An.idx = 0;
  An.xs = AU.mi.image_xscale;
  An.ys = AU.mi.image_yscale;
  An.dep = AU.mi.depth;
  An.kx = AU.mi.x;
  An.ky = AU.mi.y;
}
AA(AN, "iceFreezeAfterHit");
var AW = AA(Ah => !Ah.destroyed && /^obj_(defeatanim|deathanim)/.test(Ah.constructor.name), "isDefeatAnim");
var AH = class AP extends A5 {
  create() {
    this.timer = 0;
    this.target = null;
    this.star = 0;
    this.seen = new Set(A8.all("obj_defeatanim").concat(A8.all("obj_deathanim")));
  }
  ownStatue(Ah) {
    let AU = Ah.defeatanim;
    if (!AU || AU.destroyed || AU.constructor.name !== "obj_frozennpc") {
      return false;
    } else {
      AU.visible = true;
      this.instance_destroy();
      if (AU.sprite_index === "spr_nothing" && this.spr && this.spr !== "spr_nothing") {
        AU.sprite_index = this.spr;
      } else if (AU.sprite_index === "spr_nothing" && Ah.idlesprite && Ah.idlesprite !== "spr_nothing") {
        AU.sprite_index = Ah.idlesprite;
      }
      return true;
    }
  }
  step() {
    this.timer++;
    let Ah = this.target;
    if (Ah && !Ah.destroyed) {
      if (this.ownStatue(Ah)) {
        return;
      }
      if (T.monster[this.star] === 0 && (Math.abs(Ah.x - this.kx) > 30 || Math.abs(Ah.y - this.ky) > 30 || this.timer > 60)) {
        this.x = this.kx;
        this.y = this.ky;
        Ah.instance_destroy();
        this.freeze(null);
        return;
      }
      if (this.timer > 300) {
        this.instance_destroy();
      }
      return;
    }
    if (Ah && this.ownStatue(Ah)) {
      return;
    }
    let AU = Ah && Ah.defeatanim && AW(Ah.defeatanim) ? Ah.defeatanim : null;
    if (!AU) {
      for (let An of A8.list) {
        if (AW(An) && !this.seen.has(An) && Math.abs(An.x - this.x) < 80 && Math.abs(An.y - this.y) < 80) {
          AU = An;
        }
      }
    }
    this.freeze(AU);
  }
  freeze(Ah) {
    let AU = Ah || {
      x: this.kx ?? this.x,
      y: this.ky ?? this.y,
      sprite_index: this.spr,
      image_index: 0,
      image_xscale: this.xs,
      image_yscale: this.ys
    };
    let An = g("obj_frozennpc") || s.ch2Obj && s.ch2Obj("obj_frozennpc");
    if (An) {
      let AF = i(AU.x, AU.y, An);
      AF.sprite_index = AU.sprite_index;
      AF.image_index = 0;
      AF.image_xscale = AU.image_xscale || 2;
      AF.image_yscale = AU.image_yscale || 2;
      AF.depth = this.dep ?? AF.depth;
      AF.inbattle = 1;
      AF.visible = true;
      if (Ah) {
        Ah.instance_destroy();
      }
      A8.with("obj_recruitanim", AE => {
        if (AE.image_index === 7 && Math.abs(AE.x - T.monsterx[this.star]) < 2 && Math.abs(AE.y - (T.monstery[this.star] - 40)) < 2) {
          AE.instance_destroy();
        }
      });
      let AD = g("obj_recruitanim") || s.ch2Obj && s.ch2Obj("obj_recruitanim");
      if (AD) {
        let AE = i(T.monsterx[this.star], T.monstery[this.star] - 40, AD);
        AE.image_index = 12;
        if (T.chapter === 1 && A0["spr_battlemsg@ch2"]) {
          AE.sprite_index = "spr_battlemsg@ch2";
        }
      }
      T.flag[63] = 1;
    }
    this.instance_destroy();
  }
};
AA(AH, "obj_icefreeze");
At(AH, "kinds", A6("obj_icefreeze", A5));
At(AH, "defaultVisible", false);
var Ak = AH;
var AI = class Ay extends A5 {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.siner = 0;
    this.timer = 0;
    this.image_alpha = 1;
  }
  step() {
    this.image_xscale = Y(this.siner) * 2;
    this.siner++;
    this.timer++;
    if (this.timer >= 30) {
      this.instance_destroy();
    }
  }
  draw(Ah) {
    let AU = this.sprite_index;
    let An = this.image_index;
    let AF = this.image_alpha;
    Ah.draw_sprite_ext(AU, An, this.x, this.y, this.image_xscale, this.image_yscale, 0, A2.white, AF);
    Ah.draw_sprite_ext(AU, An, this.x + Y(this.siner / 3) * 30, this.y, Y(this.siner / 3) * 2, 2, 0, A2.white, AF);
    Ah.draw_sprite_ext(AU, An, this.x - Y(this.siner / 3) * 30, this.y, Y(this.siner / 3) * 2, 2, 0, A2.white, AF);
  }
};
AA(AI, "obj_spell_snowgrave_snowflake");
At(AI, "kinds", A6("obj_spell_snowgrave_snowflake", A5));
At(AI, "defaultSprite", "spr_icespell_snowflake");
var Aw = AI;
var AQ = class Aa extends A5 {
  create() {
    this.bgalpha = 0;
    this.timer = 0;
    this.snowspeed = 0;
    this.stimer = 0;
    this.caster = 0;
    this.damage = 0;
    this.pattern = null;
    this.altpath = T.encounterno === 82 ? 1 : 0;
    this.fb = null;
    this.init = 0;
    this.fncon = 0;
    this.fn = null;
    this.fntimer = 0;
    this.amplitude = 0;
  }
  altpathCutscene(Ah) {
    let AU = this.fn;
    if (!!AU && !AU.destroyed) {
      if (this.fncon === 0) {
        AU.image_index += 0.25;
        if (AU.image_index >= 8) {
          this.fntimer = 0;
          this.fncon = 0.5;
          if (T.batmusic) {
            e(T.batmusic[1], 0, 90);
          }
        }
      }
      if (this.fncon === 0.5 && (this.fntimer++, this.fntimer >= 120)) {
        if (s.ch2_scr_oflash) {
          s.ch2_scr_oflash.call(AU);
        }
        AU.sprite_index = "spr_noelleb_spell_special";
        AU.image_speed = 0.5;
        this.fncon = 0.8;
        this.fntimer = 0;
        this.amplitude = 0;
        let An = A8.first("obj_berdlyb2_enemy");
        if (An) {
          An.visible = false;
          this.fb = X(An.x, An.y, "spr_berdlyb_idle_shocked");
          this.fb.depth = An.depth;
        }
      }
      if (this.fncon === 0.8) {
        this.fntimer++;
        if (this.fntimer >= 30) {
          this.fntimer = 0;
          this.fncon = 1;
        }
      }
      if (this.fncon === 1 || this.fncon === 2) {
        if (this.amplitude < 1) {
          this.amplitude += 0.03;
        }
        if (AU.y > AU.ystart - 70) {
          AU.y -= this.amplitude;
          AU.x += this.amplitude * 2.94;
        }
        AU.x += Y(Ah / 3) * this.amplitude;
        AU.y += C(Ah / 3) * this.amplitude;
        if (Ah % 4 === 0 && Ah < 70) {
          let AF = A1("snd_bell");
          A9(AF, 0.5, 0);
          A3(AF, 0.5 + A4(0.3));
          let AD = s.ch2Obj && s.ch2Obj("obj_afterimage_grow");
          if (AD) {
            let AE = i(AU.x + 50, AU.y + 10 + 10, AD);
            AE.speed = A4(2) + 1;
            AE.direction = A4(180);
            AE.gravity = 0.2 + A4(0.3);
            AE.gravity_direction = 70 + A4(40);
            AE.image_xscale = 1;
            AE.image_yscale = 1;
            AE.sprite_index = "spr_shine";
            AE.image_speed = 0.5;
            AE.image_alpha = 3;
          }
        }
        if (Ah >= 210) {
          AU.sprite_index = "spr_noelleb_spell";
          AU.image_index = 2;
          AU.image_speed = 0;
          AU.gravity = 1;
          this.fncon = 3;
        }
      }
      if (this.fncon === 3 && AU.y >= this.ystart - 6) {
        AU.y = this.ystart;
        AU.sprite_index = "spr_noelleb_defeat";
        AU.speed = 0;
        AU.gravity = 0;
        if (s.ch2_scr_shakeobj) {
          s.ch2_scr_shakeobj.call(AU);
        }
        this.fncon = 4;
      }
    }
  }
  draw(Ah) {
    if (this.init === 0 && (this.init = 1, this.fncon = 0, this.altpath === 1)) {
      this.timer = -270;
      let AF = A8.first("obj_heronoelle");
      A8.with("obj_heronoelle", AD => {
        AD.visible = false;
      });
      if (AF) {
        this.fn = X(AF.x, AF.y, "spr_noelleb_spell");
        this.fn.depth = AF.depth;
        this.fn.image_index = 0;
        this.fn.image_speed = 0;
      }
    }
    this.timer++;
    let AU = this.timer;
    if (this.altpath === 1) {
      this.altpathCutscene(AU);
    }
    if (this.bgalpha > 0) {
      let AD = Ah.ctx;
      AD.save();
      AD.globalAlpha = Math.min(1, this.bgalpha);
      let AE = AD.createLinearGradient(0, -10, 0, 500);
      if (AE) {
        AE.addColorStop(0, "#ffffff");
        AE.addColorStop(1, "#0000ff");
        AD.fillStyle = AE;
        AD.fillRect(-10, -10, 710, 510);
      }
      AD.restore();
    }
    let An = A0.bg_snowfall;
    if (An && An.img && An.img[0]) {
      this.pattern ||= Ah.ctx.createPattern(An.img[0], "repeat");
      let Aj = (Au, AL, AX, AO) => {
        if (AX <= 0) {
          return;
        }
        let As = Ah.ctx;
        As.save();
        As.globalAlpha = Math.min(1, AX);
        As.scale(AO, AO);
        As.translate(Math.round(Au / AO), Math.round(AL / AO));
        As.fillStyle = this.pattern;
        As.fillRect(-Math.round(Au / AO) - 10, -Math.round(AL / AO) - 10, 700 / AO, 520 / AO);
        As.restore();
      };
      Aj(this.snowspeed / 1.5, AU * 6, this.bgalpha, 2);
      Aj(this.snowspeed, AU * 8, this.bgalpha * 2, 2);
    }
    if (AU === 1) {
      A1("snd_snowgrave");
    }
    if (AU <= 10 && AU >= 0 && this.bgalpha < 0.5) {
      this.bgalpha += 0.05;
    }
    if (AU >= 0) {
      this.snowspeed += 20 + AU / 5;
    }
    if (AU >= 20 && AU <= 75 + this.altpath * 30) {
      this.stimer++;
      for (let [Au, AL] of [[455, 560], [500, 600], [545, 520]]) {
        let AX = i(Au, AL, Aw);
        AX.gravity = -2;
        AX.vspeed = Y(AU / 2) * 0.5;
        AX.siner = AU / 2;
      }
      if (this.stimer >= 8) {
        this.stimer = 0;
      }
    }
    if (this.altpath === 1 && AU === 70 && this.fb && !this.fb.destroyed) {
      this.fb.sprite_index = "spr_berdly_ice";
      this.fb.x -= 22;
      this.fb.y -= 48;
    }
    if (AU === 95 + this.altpath * 30 && this.damage > 0 && T.fighting === 1) {
      for (let AO = 0; AO < 3; AO++) {
        if (T.monster[AO] !== 1) {
          continue;
        }
        let As = s.monsterinstance ? s.monsterinstance(AO) : null;
        T.hittarget[AO] = 0;
        if (As && !As.destroyed) {
          As.fatal = 1;
        }
        if (this.altpath === 0) {
          let AC = this.damage + A7(A4(100));
          let AM = AV(AO, AC);
          r(AO, AC, this.caster);
          AN(AO, AM);
          if (T.monsterhp[AO] > 0 && As && !As.destroyed) {
            As.fatal = 0;
            if (s.ch2_scr_oflash) {
              s.ch2_scr_oflash.call(As);
            }
          }
          continue;
        }
        if (s.dmgwriter) {
          let Ad = s.dmgwriter(T.monsterx[AO], T.monstery[AO] + 20 - T.hittarget[AO] * 20);
          Ad.damage = this.damage + A7(A4(100));
          Ad.type = 6;
        }
        if (this.fb && !this.fb.destroyed && s.ch2_scr_oflash) {
          s.ch2_scr_oflash.call(this.fb);
        }
      }
    }
    if (this.altpath === 0) {
      if (AU >= 90 && this.bgalpha > 0) {
        this.bgalpha -= 0.02;
      }
    } else if (AU >= 120) {
      this.bgalpha -= 0.005;
    }
    if (AU === 120 + this.altpath * 150) {
      if (this.altpath) {
        let Ar = A8.first("obj_berdlyb2_enemy");
        if (Ar) {
          Ar.sidebcon = 1;
          Ar.fn = this.fn;
          Ar.fb = this.fb;
        }
      }
      this.instance_destroy();
    }
  }
};
AA(AQ, "obj_spell_snowgrave");
At(AQ, "kinds", A6("obj_spell_snowgrave", A5));
At(AQ, "defaultDepth", 0);
var Ax = AQ;
var Ao = class AT extends A5 {
  create() {
    this.siner = 0;
    this.amp = 0;
    this.image_xscale = 3;
    this.image_yscale = 2;
    this.stimer = 0;
    this.initdelay = 0;
    this.myself = -1;
    this.target = null;
    this.success = 0;
    this.init = 0;
  }
  draw(Ah) {
    if (this.init === 0 && this.myself >= 0 && T.monster[this.myself] === 1 && T.monsterstatus[this.myself] === 1) {
      this.success = 1;
    }
    if (this.initdelay === 0) {
      A1("snd_ghostappear");
      if (this.success === 1) {
        A1("snd_spell_pacify");
      }
    }
    this.initdelay--;
    if (this.initdelay > 0) {
      return;
    }
    this.siner++;
    this.image_alpha = Y(this.siner / 9) - 0.3 + this.success * 0.3;
    this.amp = Y(this.siner / 9) * 30;
    let AU = Math.max(0, Math.min(1, this.image_alpha * 0.8));
    let An = Y(this.siner / 6) * this.amp;
    let AF = C(this.siner / 6) * this.amp / 2;
    if (AU > 0) {
      Ah.draw_sprite_ext(this.sprite_index, this.image_index, this.x + An, this.y + AF, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, AU);
      Ah.draw_sprite_ext(this.sprite_index, this.image_index, this.x - An, this.y - AF, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, AU);
    }
    this.stimer++;
    if (this.siner === 12 && this.success === 1) {
      let AD = this.target;
      if (AD && !AD.destroyed) {
        T.flag[51 + AD.myself] = 3;
        AD.userEvent(10);
        AD.scr_monsterdefeat();
      }
    }
    if (this.stimer >= 3 && this.siner <= 24 && (this.stimer = 0, this.success === 1)) {
      let AE = this.sprite_width;
      let Aj = this.sprite_height;
      let Au = i(this.x - AE / 2 + A4(AE), this.y - Aj / 2 + A4(Aj), Am);
      Au.image_xscale = 0.5;
      Au.image_yscale = 0.5;
      Au.con = 1;
      Au.rotspeed = A4(5);
      Au.sprite_index = "spr_icespell_snowflake";
    }
    if (this.siner >= 40) {
      this.instance_destroy();
    }
  }
};
AA(Ao, "obj_spell_mist");
At(Ao, "kinds", A6("obj_spell_mist", A5));
At(Ao, "defaultSprite", "spr_icespell_mist");
var AR = Ao;
export { Am as a, Ap as b, AV as c, AN as d, Ak as e, Aw as f, Ax as g, AR as h };
