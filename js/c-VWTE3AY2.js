import { d as X } from './c-MYK6C3LF.js';
import { P as s, V as r, g as T } from './c-ZQQWH6UG.js';
import { B as Y, C, Ec as e, Fb as g, Ib as i, N as A0, Ra as A1, h as A2, nc as A3, o as A4, pb as A5, qb as A6, x as A7, xb as A8, xc as A9 } from './c-PBMEVLU6.js';
import { a as AA, e as At, l as Aq } from './c-XSSGDLV7.js';
Aq();
var Av = class AS extends A5 {
  ["create"]() {
    this.rotspeed = 0x4, this.timer = 0x0, this.con = 0x0, this.image_xscale = 1.5, this.image_yscale = 1.5;
  }
  ["step"]() {
    this.con === 0x1 && (this.image_angle += this.rotspeed * 0x2, this.direction += this.rotspeed * 0x3, this.timer++, this.timer >= 0xa && (this.image_alpha -= 0.1), this.image_alpha <= 0x0 && this.instance_destroy());
  }
};
AA(Av, 'obj_icespell_hexagon'), At(Av, 'kinds', A6('obj_icespell_hexagon', A5)), At(Av, 'defaultSprite', 'spr_icespell_hexagon');
var Am = Av,
  AJ = class Af extends A5 {
    ["create"]() {
      this.timer = 0x0, this.star = 0x0, this.damage = 0x0, this.hex = [], this.target = null;
    }
    ["draw"](Ah) {
      this.timer++;
      let AU = this.timer;
      if (AU === 0x1 && (A1('snd_icespell'), this.hex[0x0] = i(this.x - 0x19, this.y - 0x14, Am)), AU === 0x4 && (this.hex[0x1] = i(this.x + 0x19, this.y - 0x14, Am)), AU === 0x7 && (this.hex[0x2] = i(this.x, this.y + 0x14, Am)), AU === 0xa) {
        for (let An of this.hex) if (!(!An || An.destroyed)) for (let AF = 0x0; AF < 0x6; AF++) {
          let AD = i(An.x, An.y, Am);
          AD.image_xscale = 0.75, AD.image_yscale = 0.75, AD.con = 0x1, AD.direction = 0x3c * AF, AD.speed = 0x8, AD.friction = 0.2;
        }
      }
      if (AU === 0xb) {
        for (let AE of this.hex) AE && !AE.destroyed && AE.instance_destroy();
      }
      if (AU === 0xf && T.fighting === 0x1) {
        T.hittarget[this.star] = 0x0;
        let Aj = s.monsterinstance ? s.monsterinstance(this.star) : null,
          Au = AV(this.star, this.damage);
        r(this.star, this.damage, this.caster), AN(this.star, Au), T.monster[this.star] === 0x1 && Aj && !Aj.destroyed && s.ch2_scr_oflash && s.ch2_scr_oflash.call(Aj);
      }
      if (AU >= 0xa && AU <= 0x1e) {
        Ah.draw_set_alpha(Math.max(0x0, 2.2 - AU / 0xa)), Ah.draw_set_color(A2.white);
        for (let AL = 0x0; AL < 0x3; AL++) Ah.draw_circle(this.x, this.y, 0x3c + AL - AU * 0x6, true);
        Ah.draw_set_alpha(0x1);
      }
      AU === 0x3c && this.instance_destroy();
    }
  };
AA(AJ, 'obj_icespell'), At(AJ, 'kinds', A6('obj_icespell', A5)), At(AJ, 'defaultSprite', 'spr_icespell_snowflake');
var Ap = AJ,
  Ac = new Set(['obj_queen_enemy', 'obj_spamton_neo_enemy', 'obj_berdlyb_enemy', 'obj_berdlyb2_enemy', 'obj_lancerboss', 'obj_lancerboss2', 'obj_lancerboss3', 'obj_susieenemy', 'obj_king_boss', 'obj_joker', 'obj_knight_enemy']);
function AV(Ah, AU) {
  let An = s.monsterinstance ? s.monsterinstance(Ah) : null;
  if (!An || An.destroyed || T.monster[Ah] !== 0x1 || AU < T.monsterhp[Ah] || An.freezable === 0x0 || Ac.has(An.constructor.name)) return null;
  let AF = T.flag[0x33 + Ah];
  return T.flag[0x33 + Ah] = 0x6, {
    'mi': An,
    'was': AF
  };
}
AA(AV, 'iceFreezeMark');
function AN(Ah, AU) {
  if (!AU) return;
  if (T.monster[Ah] === 0x1) {
    T.flag[0x33 + Ah] = AU.was;
    return;
  }
  let An = i(AU.mi.x, AU.mi.y, Ak);
  An.target = AU.mi, An.star = Ah, An.spr = AU.mi.hurtsprite || AU.mi.sprite_index, An.idx = 0x0, An.xs = AU.mi.image_xscale, An.ys = AU.mi.image_yscale, An.dep = AU.mi.depth, An.kx = AU.mi.x, An.ky = AU.mi.y;
}
AA(AN, 'iceFreezeAfterHit');
var AW = AA(Ah => !Ah.destroyed && /^obj_(defeatanim|deathanim)/.test(Ah.constructor.name), 'isDefeatAnim'),
  AH = class AP extends A5 {
    ["create"]() {
      this.timer = 0x0, this.target = null, this.star = 0x0, this.seen = new Set(A8.all('obj_defeatanim').concat(A8.all('obj_deathanim')));
    }
    ["ownStatue"](Ah) {
      let AU = Ah.defeatanim;
      return !AU || AU.destroyed || AU.constructor.name !== 'obj_frozennpc' ? false : (AU.visible = true, this.instance_destroy(), AU.sprite_index === 'spr_nothing' && this.spr && this.spr !== 'spr_nothing' ? AU.sprite_index = this.spr : AU.sprite_index === 'spr_nothing' && Ah.idlesprite && Ah.idlesprite !== 'spr_nothing' && (AU.sprite_index = Ah.idlesprite), true);
    }
    ["step"]() {
      this.timer++;
      let Ah = this.target;
      if (Ah && !Ah.destroyed) {
        if (this.ownStatue(Ah)) return;
        if (T.monster[this.star] === 0x0 && (Math.abs(Ah.x - this.kx) > 0x1e || Math.abs(Ah.y - this.ky) > 0x1e || this.timer > 0x3c)) {
          this.x = this.kx, this.y = this.ky, Ah.instance_destroy(), this.freeze(null);
          return;
        }
        this.timer > 0x12c && this.instance_destroy();
        return;
      }
      if (Ah && this.ownStatue(Ah)) return;
      let AU = Ah && Ah.defeatanim && AW(Ah.defeatanim) ? Ah.defeatanim : null;
      if (!AU) {
        for (let An of A8.list) AW(An) && !this.seen.has(An) && Math.abs(An.x - this.x) < 0x50 && Math.abs(An.y - this.y) < 0x50 && (AU = An);
      }
      this.freeze(AU);
    }
    ["freeze"](Ah) {
      let AU = Ah || {
          'x': this.kx ?? this.x,
          'y': this.ky ?? this.y,
          'sprite_index': this.spr,
          'image_index': 0x0,
          'image_xscale': this.xs,
          'image_yscale': this.ys
        },
        An = g('obj_frozennpc') || s.ch2Obj && s.ch2Obj('obj_frozennpc');
      if (An) {
        let AF = i(AU.x, AU.y, An);
        AF.sprite_index = AU.sprite_index, AF.image_index = 0x0, AF.image_xscale = AU.image_xscale || 0x2, AF.image_yscale = AU.image_yscale || 0x2, AF.depth = this.dep ?? AF.depth, AF.inbattle = 0x1, AF.visible = true, Ah && Ah.instance_destroy(), A8.with('obj_recruitanim', AE => {
          AE.image_index === 0x7 && Math.abs(AE.x - T.monsterx[this.star]) < 0x2 && Math.abs(AE.y - (T.monstery[this.star] - 0x28)) < 0x2 && AE.instance_destroy();
        });
        let AD = g('obj_recruitanim') || s.ch2Obj && s.ch2Obj('obj_recruitanim');
        if (AD) {
          let AE = i(T.monsterx[this.star], T.monstery[this.star] - 0x28, AD);
          AE.image_index = 0xc, T.chapter === 0x1 && A0["spr_battlemsg@ch2"] && (AE.sprite_index = "spr_battlemsg@ch2");
        }
        T.flag[0x3f] = 0x1;
      }
      this.instance_destroy();
    }
  };
AA(AH, 'obj_icefreeze'), At(AH, 'kinds', A6('obj_icefreeze', A5)), At(AH, 'defaultVisible', false);
var Ak = AH,
  AI = class Ay extends A5 {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.siner = 0x0, this.timer = 0x0, this.image_alpha = 0x1;
    }
    ["step"]() {
      this.image_xscale = Y(this.siner) * 0x2, this.siner++, this.timer++, this.timer >= 0x1e && this.instance_destroy();
    }
    ["draw"](Ah) {
      let AU = this.sprite_index,
        An = this.image_index,
        AF = this.image_alpha;
      Ah.draw_sprite_ext(AU, An, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, A2.white, AF), Ah.draw_sprite_ext(AU, An, this.x + Y(this.siner / 0x3) * 0x1e, this.y, Y(this.siner / 0x3) * 0x2, 0x2, 0x0, A2.white, AF), Ah.draw_sprite_ext(AU, An, this.x - Y(this.siner / 0x3) * 0x1e, this.y, Y(this.siner / 0x3) * 0x2, 0x2, 0x0, A2.white, AF);
    }
  };
AA(AI, 'obj_spell_snowgrave_snowflake'), At(AI, 'kinds', A6('obj_spell_snowgrave_snowflake', A5)), At(AI, 'defaultSprite', 'spr_icespell_snowflake');
var Aw = AI,
  AQ = class Aa extends A5 {
    ["create"]() {
      this.bgalpha = 0x0, this.timer = 0x0, this.snowspeed = 0x0, this.stimer = 0x0, this.caster = 0x0, this.damage = 0x0, this.pattern = null, this.altpath = T.encounterno === 0x52 ? 0x1 : 0x0, this.fb = null, this.init = 0x0, this.fncon = 0x0, this.fn = null, this.fntimer = 0x0, this.amplitude = 0x0;
    }
    ["altpathCutscene"](Ah) {
      let AU = this.fn;
      if (!(!AU || AU.destroyed)) {
        if (this.fncon === 0x0 && (AU.image_index += 0.25, AU.image_index >= 0x8 && (this.fntimer = 0x0, this.fncon = 0.5, T.batmusic && e(T.batmusic[0x1], 0x0, 0x5a))), this.fncon === 0.5 && (this.fntimer++, this.fntimer >= 0x78)) {
          s.ch2_scr_oflash && s.ch2_scr_oflash.call(AU), AU.sprite_index = 'spr_noelleb_spell_special', AU.image_speed = 0.5, this.fncon = 0.8, this.fntimer = 0x0, this.amplitude = 0x0;
          let An = A8.first('obj_berdlyb2_enemy');
          An && (An.visible = false, this.fb = X(An.x, An.y, 'spr_berdlyb_idle_shocked'), this.fb.depth = An.depth);
        }
        if (this.fncon === 0.8 && (this.fntimer++, this.fntimer >= 0x1e && (this.fntimer = 0x0, this.fncon = 0x1)), this.fncon === 0x1 || this.fncon === 0x2) {
          if (this.amplitude < 0x1 && (this.amplitude += 0.03), AU.y > AU.ystart - 0x46 && (AU.y -= this.amplitude, AU.x += this.amplitude * 2.94), AU.x += Y(Ah / 0x3) * this.amplitude, AU.y += C(Ah / 0x3) * this.amplitude, Ah % 0x4 === 0x0 && Ah < 0x46) {
            let AF = A1('snd_bell');
            A9(AF, 0.5, 0x0), A3(AF, 0.5 + A4(0.3));
            let AD = s.ch2Obj && s.ch2Obj('obj_afterimage_grow');
            if (AD) {
              let AE = i(AU.x + 0x32, AU.y + 0xa + 0xa, AD);
              AE.speed = A4(0x2) + 0x1, AE.direction = A4(0xb4), AE.gravity = 0.2 + A4(0.3), AE.gravity_direction = 0x46 + A4(0x28), AE.image_xscale = 0x1, AE.image_yscale = 0x1, AE.sprite_index = 'spr_shine', AE.image_speed = 0.5, AE.image_alpha = 0x3;
            }
          }
          Ah >= 0xd2 && (AU.sprite_index = 'spr_noelleb_spell', AU.image_index = 0x2, AU.image_speed = 0x0, AU.gravity = 0x1, this.fncon = 0x3);
        }
        this.fncon === 0x3 && AU.y >= this.ystart - 0x6 && (AU.y = this.ystart, AU.sprite_index = 'spr_noelleb_defeat', AU.speed = 0x0, AU.gravity = 0x0, s.ch2_scr_shakeobj && s.ch2_scr_shakeobj.call(AU), this.fncon = 0x4);
      }
    }
    ["draw"](Ah) {
      if (this.init === 0x0 && (this.init = 0x1, this.fncon = 0x0, this.altpath === 0x1)) {
        this.timer = -0x10e;
        let AF = A8.first('obj_heronoelle');
        A8.with('obj_heronoelle', AD => {
          AD.visible = false;
        }), AF && (this.fn = X(AF.x, AF.y, 'spr_noelleb_spell'), this.fn.depth = AF.depth, this.fn.image_index = 0x0, this.fn.image_speed = 0x0);
      }
      this.timer++;
      let AU = this.timer;
      if (this.altpath === 0x1 && this.altpathCutscene(AU), this.bgalpha > 0x0) {
        let AD = Ah.ctx;
        AD.save(), AD.globalAlpha = Math.min(0x1, this.bgalpha);
        let AE = AD.createLinearGradient(0x0, -0xa, 0x0, 0x1f4);
        AE && (AE.addColorStop(0x0, "#ffffff"), AE.addColorStop(0x1, "#0000ff"), AD.fillStyle = AE, AD.fillRect(-0xa, -0xa, 0x2c6, 0x1fe)), AD.restore();
      }
      let An = A0.bg_snowfall;
      if (An && An.img && An.img[0x0]) {
        this.pattern || (this.pattern = Ah.ctx.createPattern(An.img[0x0], 'repeat'));
        let Aj = (Au, AL, AX, AO) => {
          if (AX <= 0x0) return;
          let As = Ah.ctx;
          As.save(), As.globalAlpha = Math.min(0x1, AX), As.scale(AO, AO), As.translate(Math.round(Au / AO), Math.round(AL / AO)), As.fillStyle = this.pattern, As.fillRect(-Math.round(Au / AO) - 0xa, -Math.round(AL / AO) - 0xa, 0x2bc / AO, 0x208 / AO), As.restore();
        };
        Aj(this.snowspeed / 1.5, AU * 0x6, this.bgalpha, 0x2), Aj(this.snowspeed, AU * 0x8, this.bgalpha * 0x2, 0x2);
      }
      if (AU === 0x1 && A1('snd_snowgrave'), AU <= 0xa && AU >= 0x0 && this.bgalpha < 0.5 && (this.bgalpha += 0.05), AU >= 0x0 && (this.snowspeed += 0x14 + AU / 0x5), AU >= 0x14 && AU <= 0x4b + this.altpath * 0x1e) {
        this.stimer++;
        for (let [Au, AL] of [[0x1c7, 0x230], [0x1f4, 0x258], [0x221, 0x208]]) {
          let AX = i(Au, AL, Aw);
          AX.gravity = -0x2, AX.vspeed = Y(AU / 0x2) * 0.5, AX.siner = AU / 0x2;
        }
        this.stimer >= 0x8 && (this.stimer = 0x0);
      }
      if (this.altpath === 0x1 && AU === 0x46 && this.fb && !this.fb.destroyed && (this.fb.sprite_index = 'spr_berdly_ice', this.fb.x -= 0x16, this.fb.y -= 0x30), AU === 0x5f + this.altpath * 0x1e && this.damage > 0x0 && T.fighting === 0x1) for (let AO = 0x0; AO < 0x3; AO++) {
        if (T.monster[AO] !== 0x1) continue;
        let As = s.monsterinstance ? s.monsterinstance(AO) : null;
        if (T.hittarget[AO] = 0x0, As && !As.destroyed && (As.fatal = 0x1), this.altpath === 0x0) {
          let AC = this.damage + A7(A4(0x64)),
            AM = AV(AO, AC);
          r(AO, AC, this.caster), AN(AO, AM), T.monsterhp[AO] > 0x0 && As && !As.destroyed && (As.fatal = 0x0, s.ch2_scr_oflash && s.ch2_scr_oflash.call(As));
          continue;
        }
        if (s.dmgwriter) {
          let Ad = s.dmgwriter(T.monsterx[AO], T.monstery[AO] + 0x14 - T.hittarget[AO] * 0x14);
          Ad.damage = this.damage + A7(A4(0x64)), Ad.type = 0x6;
        }
        this.fb && !this.fb.destroyed && s.ch2_scr_oflash && s.ch2_scr_oflash.call(this.fb);
      }
      if (this.altpath === 0x0 ? AU >= 0x5a && this.bgalpha > 0x0 && (this.bgalpha -= 0.02) : AU >= 0x78 && (this.bgalpha -= 0.005), AU === 0x78 + this.altpath * 0x96) {
        if (this.altpath) {
          let Ar = A8.first('obj_berdlyb2_enemy');
          Ar && (Ar.sidebcon = 0x1, Ar.fn = this.fn, Ar.fb = this.fb);
        }
        this.instance_destroy();
      }
    }
  };
AA(AQ, 'obj_spell_snowgrave'), At(AQ, 'kinds', A6('obj_spell_snowgrave', A5)), At(AQ, 'defaultDepth', 0x0);
var Ax = AQ,
  Ao = class AT extends A5 {
    ["create"]() {
      this.siner = 0x0, this.amp = 0x0, this.image_xscale = 0x3, this.image_yscale = 0x2, this.stimer = 0x0, this.initdelay = 0x0, this.myself = -0x1, this.target = null, this.success = 0x0, this.init = 0x0;
    }
    ["draw"](Ah) {
      if (this.init === 0x0 && this.myself >= 0x0 && T.monster[this.myself] === 0x1 && T.monsterstatus[this.myself] === 0x1 && (this.success = 0x1), this.initdelay === 0x0 && (A1('snd_ghostappear'), this.success === 0x1 && A1('snd_spell_pacify')), this.initdelay--, this.initdelay > 0x0) return;
      this.siner++, this.image_alpha = Y(this.siner / 0x9) - 0.3 + this.success * 0.3, this.amp = Y(this.siner / 0x9) * 0x1e;
      let AU = Math.max(0x0, Math.min(0x1, this.image_alpha * 0.8)),
        An = Y(this.siner / 0x6) * this.amp,
        AF = C(this.siner / 0x6) * this.amp / 0x2;
      if (AU > 0x0 && (Ah.draw_sprite_ext(this.sprite_index, this.image_index, this.x + An, this.y + AF, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, AU), Ah.draw_sprite_ext(this.sprite_index, this.image_index, this.x - An, this.y - AF, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, AU)), this.stimer++, this.siner === 0xc && this.success === 0x1) {
        let AD = this.target;
        AD && !AD.destroyed && (T.flag[0x33 + AD.myself] = 0x3, AD.userEvent(0xa), AD.scr_monsterdefeat());
      }
      if (this.stimer >= 0x3 && this.siner <= 0x18 && (this.stimer = 0x0, this.success === 0x1)) {
        let AE = this.sprite_width,
          Aj = this.sprite_height,
          Au = i(this.x - AE / 0x2 + A4(AE), this.y - Aj / 0x2 + A4(Aj), Am);
        Au.image_xscale = 0.5, Au.image_yscale = 0.5, Au.con = 0x1, Au.rotspeed = A4(0x5), Au.sprite_index = 'spr_icespell_snowflake';
      }
      this.siner >= 0x28 && this.instance_destroy();
    }
  };
AA(Ao, 'obj_spell_mist'), At(Ao, 'kinds', A6('obj_spell_mist', A5)), At(Ao, 'defaultSprite', 'spr_icespell_mist');
var AR = Ao;
export { Am as a, Ap as b, AV as c, AN as d, Ak as e, Aw as f, Ax as g, AR as h };