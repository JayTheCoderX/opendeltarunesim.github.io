const M0 = function () {
    let PV = true;
    return function (PD, PY) {
      const Pw = PV ? function () {
        if (PY) {
          const Pp = PY.apply(PD, arguments);
          return PY = null, Pp;
        }
      } : function () {};
      return PV = false, Pw;
    };
  }(),
  M1 = M0(this, function () {
    if (M1.bind().toString().indexOf('\x0a') !== -0x1) return;
    return M1.toString().search(".*").toString().constructor(M1).search(".*");
  });
M1();
import { b as M2 } from './c-IXEDCLR4.js';
import { g as M3, l as M4 } from './c-UTWCWEAR.js';
import { A as M5, B as M6, C as M7, D as M8, E as M9, F as MM, G as MI, H as Mo, I as My, J as ME, K as Mj, M as Mm, N as MP, O as MX, P as MK, R as Mk, d as MW, e as MZ, g as Mq, s as Mu, v as MH, w as MG } from './c-QFDZPUX2.js';
import { A as MA, B as Md, C as MS, D as MR, E as Mv, Kc as Mz, Sc as Mb, Sh as MV, Ud as MD, Vd as MY, d as Mw, db as Mp, eb as MC, gd as Mn, h as MO, k as Mc, m as MN, o as Mg, ob as MB, p as ML, q as MU, r as Mf, s as Mx, u as MF, v as MJ, w as MQ, y as Ml } from './c-PWNRTD7X.js';
import { a as MT, c as I0, d as I1, e as I2, f as I3, g as I4 } from './c-DTW63MWW.js';
import { c as I5, d as I6, f as I7, g as I8, h as I9, i as IM } from './c-3ELH3LBH.js';
import { c as II, g as Io, h as Iy, i as IE, j as Ij, n as Im, o as IP, p as IX, q as IK } from './c-OYFOJ3BV.js';
import { a as Ik, b as IW, d as IZ, e as Iq, g as Iu, j as IH, n as IG, p as IA, q as Id } from './c-MYK6C3LF.js';
import { C as IS, F as IR, G as Iv, H as Iz, I as Ib, J as IV, M as ID, N as IY, O as Iw, Q as Ip, R as IC, S as In, T as IO, V as Ic, W as IN, g as Ig, l as IB } from './c-ZQQWH6UG.js';
import { A as IL, B as IU, C as If, E as Ix, I as IF, Jb as IJ, Kb as IQ, Ob as Il, Pc as IT, Rc as o0, Sa as o1, Ta as o2, Tb as o3, h as o4, l as o5, nd as o6, o as o7, pb as o8, pd as o9, qb as oM, r as oI, rc as oo, s as oy, sb as oE, sd as oj, t as om, tb as oP, u as oX, v as oK, x as ok, xb as oW, y as oZ, z as oq, zb as ou } from './c-PBMEVLU6.js';
import { a as oH, c as oG, e as oA, g as od, j as oS, l as oR } from './c-XSSGDLV7.js';
var ov = {};
oG(ov, {
  'd_ex': () => Pb,
  'scr_84_get_sound': () => PS,
  'scr_84_get_subst_string': () => m2,
  'scr_afterimage': () => P1,
  'scr_ambush': () => Pu,
  'scr_armorget': () => mB,
  'scr_armorinfo': () => mU,
  'scr_armorinfo_all': () => mL,
  'scr_asgface': () => m1,
  'scr_attackphase': () => mJ,
  'scr_battlecursor_memory_reset': () => Pk,
  'scr_battletext': () => mk,
  'scr_battletext_default': () => mK,
  'scr_blconskip': () => Py,
  'scr_bullet_inherit': () => P2,
  'scr_caterpillar_facing': () => my,
  'scr_caterpillar_interpolate': () => Pz,
  'scr_damage': () => mf,
  'scr_damage_all': () => ml,
  'scr_damage_all_overworld': () => mE,
  'scr_damage_cache': () => mj,
  'scr_damage_check': () => mm,
  'scr_dark_marker': () => m4,
  'scr_darkbox': () => Pj,
  'scr_dbox': () => PE,
  'scr_dead': () => mF,
  'scr_defeatrun': () => P3,
  'scr_depth': () => P0,
  'scr_destroyoutside': () => m5,
  'scr_dmgwriter_selfchar': () => PP,
  'scr_encountersetup': () => PI,
  'scr_endturn': () => PW,
  'scr_enemyblcon': () => P5,
  'scr_facechoice': () => mT,
  'scr_gameover': () => mP,
  'scr_get_input_name': () => mV,
  'scr_getchar': () => m8,
  'scr_halt': () => P9,
  'scr_havechar': () => m9,
  'scr_heal': () => PX,
  'scr_healall': () => PG,
  'scr_healallitemspell': () => PH,
  'scr_healitemspell': () => Pm,
  'scr_itemcheck': () => mw,
  'scr_itemget': () => mv,
  'scr_iteminfo': () => mb,
  'scr_iteminfo_all': () => mz,
  'scr_itemname': () => mc,
  'scr_itemnamelist': () => mN,
  'scr_itemremove': () => mn,
  'scr_itemshift': () => mO,
  'scr_keyitemcheck': () => mo,
  'scr_keyitemget': () => mH,
  'scr_keyiteminfo': () => mA,
  'scr_keyiteminfo_all': () => mG,
  'scr_keyitemremove': () => mp,
  'scr_keyitemshift': () => mC,
  'scr_kingface': () => mI,
  'scr_lanface': () => mY,
  'scr_litemcheck': () => mD,
  'scr_litemname': () => mu,
  'scr_litemremove': () => mZ,
  'scr_litemshift': () => mq,
  'scr_losechar': () => Pd,
  'scr_marker': () => Pq,
  'scr_mercyadd': () => P7,
  'scr_mnendturn': () => PK,
  'scr_monsterdefeat': () => m7,
  'scr_monsterpop': () => m3,
  'scr_monstersetup': () => mM,
  'scr_move_to_point_over_time': () => P8,
  'scr_moveheart': () => PA,
  'scr_noface': () => m0,
  'scr_oflash': () => mX,
  'scr_outside_camera': () => P6,
  'scr_pan': () => Po,
  'scr_phoneadd': () => md,
  'scr_phonename': () => mS,
  'scr_ralface': () => mR,
  'scr_randomtarget': () => mx,
  'scr_revive': () => PM,
  'scr_rudface': () => PZ,
  'scr_spareanim': () => PR,
  'scr_susface': () => m6,
  'scr_targetall': () => P4,
  'scr_text': () => mW,
  'scr_torface': () => mg,
  'scr_unmarkify_caterpillar': () => Pv,
  'scr_wincombat': () => mQ
}), oR();
var oz = {};
oG(oz, {
  'ATTACKS': () => jU,
  'obj_afterimage': () => IW,
  'obj_afterimage_grow': () => EX,
  'obj_animation': () => jz,
  'obj_attackpress': () => MH,
  'obj_axebullet': () => ow,
  'obj_basicattack': () => MZ,
  'obj_battleback': () => M4,
  'obj_battleblcon': () => I9,
  'obj_battlecontroller': () => Mk,
  'obj_battlesolid': () => Iq,
  'obj_bigscythe': () => oC,
  'obj_blockbullet_fall': () => oO,
  'obj_bloxer_enemy': () => EV,
  'obj_bulletgenparent': () => I1,
  'obj_bulletparent': () => I0,
  'obj_carouselbullet': () => oN,
  'obj_carrotthrower': () => oa,
  'obj_centerscythe': () => oL,
  'obj_chain_of_hell': () => of,
  'obj_chainking': () => oF,
  'obj_chainpiece': () => oQ,
  'obj_chasebullet': () => oT,
  'obj_chaseenemy': () => EY,
  'obj_chaseenemy_Collision': () => Ep,
  'obj_checker_animtest': () => jV,
  'obj_checkers_enemy': () => EO,
  'obj_checkers_leap': () => y1,
  'obj_clubsbullet': () => y3,
  'obj_clubsbullet_dark': () => y5,
  'obj_clubsenemy': () => EN,
  'obj_clubsenemy_old': () => EB,
  'obj_collidebullet': () => I2,
  'obj_darkener': () => IA,
  'obj_dbullet_maker': () => y7,
  'obj_dbullet_vert': () => y9,
  'obj_dbulletcontroller': () => yI,
  'obj_defeatanim': () => EM,
  'obj_dialoguer': () => jn,
  'obj_diamondenemy': () => EU,
  'obj_dicebul': () => yy,
  'obj_dknight_slasher': () => yj,
  'obj_dmgwriter': () => MW,
  'obj_dummyenemy': () => Ex,
  'obj_elnina_lanino_rematch_controller': () => II,
  'obj_encounterbasic': () => jY,
  'obj_excblcon': () => EZ,
  'obj_face': () => I6,
  'obj_fadechain': () => yP,
  'obj_fadeout': () => jc,
  'obj_finalchain': () => yK,
  'obj_grazebox': () => Iu,
  'obj_growtangle': () => yW,
  'obj_growtangle_bouncer': () => yq,
  'obj_hathyfightevent': () => Io,
  'obj_headhathy': () => EJ,
  'obj_healanim': () => Mq,
  'obj_heart': () => yH,
  'obj_heartblcon': () => Ek,
  'obj_heartbomb_blast': () => yA,
  'obj_heartenemy': () => El,
  'obj_heartmarker': () => Iy,
  'obj_heartshaper': () => yS,
  'obj_hypnofx': () => Em,
  'obj_jigsawbullet': () => yv,
  'obj_jigsawryenemy': () => j0,
  'obj_joker': () => j2,
  'obj_joker_body': () => M2,
  'obj_joker_teleport': () => yb,
  'obj_jokerbg_triangle_real': () => M3,
  'obj_king_boss': () => j4,
  'obj_lancerbattle2_event': () => IE,
  'obj_lancerbike': () => yD,
  'obj_lancerbike_neo': () => yw,
  'obj_lancerboss': () => j6,
  'obj_lancerboss2': () => j8,
  'obj_lancerboss3': () => jM,
  'obj_laserscythe': () => yC,
  'obj_mainchara': () => Ij,
  'obj_marker': () => Ik,
  'obj_monsterparent': () => Mu,
  'obj_move_to_point': () => ER,
  'obj_moveheart': () => IH,
  'obj_nonsolid_growtangle': () => E8,
  'obj_ob_checkertile': () => yN,
  'obj_oflash': () => EE,
  'obj_overworld_spade': () => yB,
  'obj_overworld_spade_homing': () => yU,
  'obj_overworldbulletparent': () => yO,
  'obj_panner': () => jL,
  'obj_persistentfadein': () => jg,
  'obj_placeholderenemy': () => jo,
  'obj_ponman_enemy': () => jE,
  'obj_rabbick_enemy': () => jm,
  'obj_rabbitbullet': () => yx,
  'obj_ralseibullet': () => yJ,
  'obj_ralseienemy': () => jX,
  'obj_ralseithrown': () => jp,
  'obj_readable_room1': () => jx,
  'obj_regularbullet': () => I3,
  'obj_regularbullet_permanent': () => I4,
  'obj_rudinnranger': () => jk,
  'obj_scissordancer_Collision_obj': () => jZ,
  'obj_shake': () => Id,
  'obj_skychain': () => yl,
  'obj_smallcheckers_enemy': () => ju,
  'obj_smallface': () => Ed,
  'obj_solidblock': () => Im,
  'obj_solidenemy': () => IP,
  'obj_spadering': () => E0,
  'obj_spareanim': () => Eo,
  'obj_spellphase': () => MG,
  'obj_spinheart': () => E2,
  'obj_suitbomb': () => E4,
  'obj_susieandlancer_event': () => IX,
  'obj_susieenemy': () => jG,
  'obj_testoverworldenemy': () => jd,
  'obj_testoverworldenemy_Collision': () => jR,
  'obj_thrashmachine': () => Ez,
  'obj_throwralsei': () => Eu,
  'obj_throwtarget': () => EG,
  'obj_wavechain': () => E6,
  'obj_writer': () => I5
}), oR();
var ob = {};
oG(ob, {
  'scr_attackphase': () => MI,
  'scr_battletext': () => I7,
  'scr_battletext_default': () => I8,
  'scr_bullet_inherit': () => MT,
  'scr_charcan': () => M6,
  'scr_damage': () => In,
  'scr_damage_all': () => IO,
  'scr_damage_check': () => IN,
  'scr_damage_enemy': () => Ic,
  'scr_dark_marker': () => IZ,
  'scr_dead': () => Ib,
  'scr_endcombat': () => ME,
  'scr_endturn': () => MM,
  'scr_enemyblcon': () => IM,
  'scr_heal': () => IY,
  'scr_healall': () => Iw,
  'scr_healallitemspell': () => MX,
  'scr_healitemspell': () => MP,
  'scr_iteminfo_all': () => IS,
  'scr_mercyadd': () => ID,
  'scr_mnendturn': () => Mo,
  'scr_monsterpop': () => Iz,
  'scr_moveheart': () => IG,
  'scr_nexthero': () => M8,
  'scr_prevhero': () => M9,
  'scr_randomtarget': () => Ip,
  'scr_retarget': () => M5,
  'scr_revive': () => IV,
  'scr_spell': () => MK,
  'scr_spellconsumeb': () => Mj,
  'scr_spellinfo_all': () => IR,
  'scr_spelltext': () => Mm,
  'scr_targetall': () => IC,
  'scr_tensionheal': () => Iv,
  'scr_wincombat': () => My
}), oR();
var oV = oH(PV => ov[PV] || ob[PV] || MV[PV] || (() => {}), 'SCRIPT'),
  oD = oH((PV, PD) => {
    if (typeof PV == 'number' && (PV = oP(PV)), typeof PV == 'function' || typeof PV == 'string') return oW.with(PV, PD);
    PV && typeof PV == 'object' && !PV.destroyed && PD(PV);
  }, 'withInst'),
  oY = class PC extends I2 {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.counter = 0x0, this.image_angle = 0x0, this.seizure = 0x0, this.hspeed = -7.6 - o7(1.5), this.vspeed = -0x2 + o7(0x4), this.gravity = 0.13, this.gravity_direction = 0x0, this.active = 0x1, this.timepoints = 0x4, this.grazepoints = 0x4, this.damage = 0x1e, this.grazed = 0x0;
    }
    ["step"]() {
      this.seizure === 0x0 && (this.counter += 0x1, this.counter >= 0x3 && (this.image_angle += 0x2d, this.counter = 0x0)), this.seizure === 0x1 && (this.image_angle += 0xa), this.x >= 0x2bc && this.instance_destroy();
    }
  };
oH(oY, 'obj_axebullet'), oA(oY, 'kinds', oM('obj_axebullet', I2)), oA(oY, 'defaultDepth', 0x2), oA(oY, 'defaultSprite', 'spr_axebullet_b');
var ow = oY,
  op = class Pn extends I4 {
    ["create"]() {
      this.anglespeed = -0x8, this.siner = 0x0, this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0xa, this.timepoints = 0xa, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.active = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_alpha = 0x0, this.type = 0x0, this.grazetimer = 0x0;
    }
    ["draw"](PV) {
      PV.draw_sprite_ext('spr_jokerscythe_big', 0x0, this.x, this.y, 0x2, 0x2, this.image_angle, o4.white, 0x1 - this.image_alpha + 0.2 + IU(this.siner / 0xa) / 2.5), this.draw_self(), PV.draw_set_color(o4.red), PV.draw_rectangle(this.x - 0x1, this.y - 0x1, this.x + 0x1, this.y + 0x1, 0x0);
    }
    ["step"]() {
      this.type === 0x0 && (this.x >= MO('obj_battlesolid').x + 0x64 && (this.hspeed -= 0.5), this.x <= MO('obj_battlesolid').x - 0x64 && (this.hspeed += 0.5)), this.type === 0x1 && (this.y >= MO('obj_battlesolid').y + 0x64 && (this.vspeed -= 0.5), this.y <= MO('obj_battlesolid').y - 0x64 && (this.vspeed += 0.5)), this.siner += 0x1, this.image_angle += this.anglespeed, this.image_alpha - 0x1 < -0.00001 && (this.image_alpha += 0.1), this.grazetimer += 0x1, this.grazetimer >= 0x3 && (this.grazetimer = 0x0, this.grazed = 0x0);
    }
  };
oH(op, 'obj_bigscythe'), oA(op, 'kinds', oM('obj_bigscythe', I4)), oA(op, 'defaultMask', 'jokerscythebig_mask'), oA(op, 'defaultDepth', 0x0), oA(op, 'defaultSprite', 'jokerscythebig_mask');
var oC = op,
  on = class PO extends I2 {
    ["create"]() {
      this.active = 0x0, this.visible = 0x0, this.image_alpha = 0x0, this.con = 0x0, this.xpos = oI(0x0, 0x1, 0x2, 0x3), this.ypos = -0x8, this.fallspeed = 0x5, this.falltimer = 0x0, this.halt = 0x0;
    }
    ["step"]() {
      this.con === 0x1 && (this.active = 0x1, this.visible = 0x1, this.image_alpha += 0.15, this.image_alpha - 0x1 >= -0.00001 && (this.con = 0x2)), this.con === 0x2 && (this.falltimer += 0x1, this.falltimer >= this.fallspeed && (this.ypos < 0x0 && !Ix(o0(this.x + this.sprite_width / 0x2, this.y + this.sprite_height * 1.5, PO, 0x0, 0x1)) ? this.ypos += 0x1 : this.halt = 0x1, this.falltimer = 0x0)), this.con === 0x0 && (this.con = 0x1), this.con === 0x3 && (this.image_alpha - 0.2 <= 0.00001 && this.instance_destroy(), this.active = 0x0, this.image_alpha -= 0.2), Ix(IJ(Iq)) && (this.lx = MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 + 0x8, this.x = this.lx + this.xpos * this.sprite_width, this.yx = MO('obj_battlesolid').y + MO('obj_battlesolid').sprite_height / 0x2 - 0x3 - this.sprite_height, this.y = this.yx + this.ypos * this.sprite_height), this.grazed === 0x1 && (this.grazepoints = 0x0, this.timepoints = 0x0);
    }
  };
oH(on, 'obj_blockbullet_fall'), oA(on, 'kinds', oM('obj_blockbullet_fall', I2)), oA(on, 'defaultDepth', 0x0), oA(on, 'defaultSprite', 'spr_blockbullet_mini');
var oO = on,
  oc = class Pc extends I4 {
    ["create"]() {
      this.siner = 0x0, this.siner2 = 0x0, this.t = 0x0, this.hspeed = 0x6, this.sinspeed = 0x1, this.altmode = 0x0, this.altsin = 0x0, this.timer = 0x0, this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0xa, this.timepoints = 0xa, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_alpha = 0x0, this.image_speed = 0x0, this.type = 0x0, this.con = 0x0, this.vsin = 0x0, this.wall_destroy = 0x0;
    }
    ["step"]() {
      this.t <= 0x19 && (this.image_alpha += 0.04), this.t === 0x19 && (this.active = 0x1), this.t === 0x0 && (this.maxspeed = IL(this.hspeed), this.hspeed = 0x0), this.t += 0x1, this.siner += this.sinspeed, this.sinfactor_0 = IU((this.siner - 0x1) / 0x14), this.sinfactor = IU(this.siner / 0x14), this.sinsign = this.sinfactor - this.sinfactor_0, this.x = MO('obj_battlesolid').x - this.sinfactor * 0x96, this.image_xscale = this.sinsign * 0x32, this.image_xscale > 0x2 && (this.image_xscale = 0x2), this.image_xscale < -0x2 && (this.image_xscale = -0x2), this.sinsign > 0x0 && (this.depth = 0x15, this.active = 0x0, this.image_blend = o4.gray), this.sinsign < 0x0 && (this.depth = 0x0, this.image_alpha - 0x1 >= -0.00001 && (this.active = 0x1), this.image_blend = o4.white), this.vsin += 0x1, (this.altmode === 0x0 || this.altmode === 0x2 || this.altmode === 0x3) && (this.y += IU(this.vsin / 0xa) * 3.5), this.altmode === 0x1 && (this.y -= IU(this.vsin / 0xa) * 3.5), this.altmode === 0x63 && (this.altsin += 0x1, this.y += If(this.altsin / 0x14) * 0x2), this.altmode === 0x63 && (this.altsin += 0x1, this.y += If(this.altsin / 0xa) * 0x2);
    }
  };
oH(oc, 'obj_carouselbullet'), oA(oc, 'kinds', oM('obj_carouselbullet', I4)), oA(oc, 'defaultDepth', 0x0), oA(oc, 'defaultSprite', 'spr_carousel');
var oN = oc,
  og = class PN extends I0 {
    ["create"]() {
      this.image_speed = 0x0, this.con = 0x0, this.throw_n = 0x0, this.buffer = 0x0, this.throwtimer = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.dir = oI(0x1, -0x1), this.gravity = 0x1, this.vspeed = -0xe, this.hspeed = this.dir * o7(0x2);
    }
    ["step"]() {
      this.buffer += 0x1, this.buffer === 0x13 && (this.gravity = 0x0, this.vspeed = 0x0, this.hspeed = 0x4 * this.dir, this.depth = -0xa), this.buffer >= 0x13 && (this.y = MO('obj_battlesolid').y - MO('obj_battlesolid').sprite_height / 0x2, this.x <= MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 + 0x14 && (this.x += 0x4, this.hspeed < 0x0 && (this.hspeed = -this.hspeed)), this.x <= MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 + 0x14 && (this.x += 0x4, this.hspeed < 0x0 && (this.hspeed = -this.hspeed)), this.x >= MO('obj_battlesolid').x + MO('obj_battlesolid').sprite_width / 0x2 - 0x14 && (this.x -= 0x4, this.hspeed > 0x0 && (this.hspeed = -this.hspeed)), this.buffer >= 0x14 && this.con === 0x0 && IL(this.x - (MO('obj_heart').x + 0xa)) < 0x1e && (this.con = 0x5), this.con === 0x5 && (this.image_speed = 0.5, this.con = 0x6), this.con === 0x6 && (this.image_index >= 0x2 && this.throw_n === 0x0 && (this.throw_n = 0x1, this.carrot = oV('instance_create').call(this, this.x, this.y, I2), oV('scr_bullet_inherit').call(this, this.carrot), oD(this.carrot, PV => {
        PV.speedmax = 0x7, oV('scr_monsterpop').call(PV) === 0x2 && (PV.speedmax = 0x6), oV('scr_monsterpop').call(PV) === 0x3 && (PV.speedmax = 0x5), PV.active = 0x1, PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.vspeed = PV.speedmax, PV.image_speed = 0.25, PV.sprite_index = 'spr_carrotbullet';
      })), this.image_index >= 0x3 && (this.throw_n = 0x0, this.image_speed = 0x0, this.con = 0x7, (this.alarm ??= [])[0x4] = 0xf, oV('scr_monsterpop').call(this) === 0x2 && ((this.alarm ??= [])[0x4] = 0x16), oV('scr_monsterpop').call(this) === 0x3 && ((this.alarm ??= [])[0x4] = 0x1e))), this.con === 0x8 && (this.image_index = 0x0, this.con = 0x0));
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
  };
oH(og, 'obj_carrotthrower'), oA(og, 'kinds', oM('obj_carrotthrower', I0)), oA(og, 'defaultDepth', 0x32), oA(og, 'defaultSprite', 'spr_rabbitthrower');
var oa = og,
  oB = class Pg extends I4 {
    ["create"]() {
      if (this.grazed = 0x0, this.grazepoints = 0x3, this.timepoints = 0x2, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.grazetimer = 0x0, this.active = 0x0, this.image_alpha = 0x0, this.image_xscale = 0x1, this.image_yscale = 0x1, this.rotspeed = 0x0, this.insanity = 0x1, this.chasecon = 0x1, this.chasetimer = 0x0, this.centerx = 0x140, this.centery = 0x78, Ix(IJ(Iq)) && (this.centerx = MO('obj_battlesolid').x, this.centery = MO('obj_battlesolid').y), this.radius = 0x96, this.sine = 0x0, this.sinespeed = 1.4, this.dir = o7(0x46), this.dirspeed = 1.5 * oI(0x1, -0x1), this.un = 0x0, this.scythetimer = -0x5, this.scythesidex = 0x1, this.swingnoise = 0x0, this.noisebuffer = 0x0, this.type = 0x0, Ix(IJ(yI)) && MO('obj_dbulletcontroller').type === 0x4c && (this.type = 0x1), this.king = 0x0, this.type === 0x1 && (this.image_xscale = 0x1, this.image_yscale = 0x1, this.insanity = 0x0, this.sinespeed = 1.3, this.scythesidex = oI(0x1, -0x1)), IQ(Pg) === 0x1) {
        this.king = 0x1, this.x = this.centerx - this.radius, this.y = this.centery, this.s2 = oV('instance_create').call(this, this.centerx + this.radius, this.centery, Pg), oD(this.s2, PV => {
          PV.sine = 0x0, PV.dir = 0xb4, PV.un = 0x1;
        }), this.s3 = oV('instance_create').call(this, this.centerx, this.centery - this.radius, Pg), oD(this.s3, PV => {
          PV.sine = 0x0, PV.dir = 0x5a, PV.un = 0x0;
        }), this.s4 = oV('instance_create').call(this, this.centerx, this.centery + this.radius, Pg), oD(this.s4, PV => {
          PV.sine = 0x0, PV.dir = 0x10e, PV.un = 0x1;
        });
        {
          let PV = this.dir;
          oW.with('obj_centerscythe', PD => {
            PD.mydir = PV;
          });
        }
        {
          let PD = this.sinespeed;
          oW.with('obj_centerscythe', PY => {
            PY.sinespeed = PD;
          });
        }
        {
          let PY = this.dirspeed;
          oW.with('obj_centerscythe', Pw => {
            Pw.dirspeed = PY;
          });
        }
        {
          let Pw = this.insanity;
          oW.with('obj_centerscythe', Pp => {
            Pp.insanity = Pw;
          });
        }
        oW.with('obj_centerscythe', Pp => {
          Pp.dir !== Pp.mydir && (Pp.dir += Pp.mydir), Pp.x = Pp.centerx - oy(Pp.radius, Pp.dir), Pp.y = Pp.centery - om(Pp.radius, Pp.dir);
        });
      }
      this.wall_destroy = 0x0;
    }
    ["step"]() {
      this.chasecon === 0x1 && (this.image_alpha += 0.04, this.image_alpha - 0x1 >= -0.00001 && (this.image_alpha = 0x1, this.chasecon = 0x2, this.active = 0x1)), this.chasecon === 0x2 && (this.un === 0x0 && this.rotspeed <= 0xa && (this.rotspeed += 0x1), this.un === 0x1 && this.rotspeed >= -0xa && (this.rotspeed -= 0x1), this.sine += this.sinespeed, this.dir += this.dirspeed, this.insanity === 0x1 && (this.dirspeed - 0x0 > 0.00001 && this.dirspeed - 0x3 < -0.00001 && (this.dirspeed += 0.01), this.dirspeed - 0x0 < -0.00001 && this.dirspeed > -0x3 && (this.dirspeed -= 0.01)), this.length = If(this.sine / 0x12) * this.radius, this.x = this.centerx - oy(this.length, this.dir), this.y = this.centery - om(this.length, this.dir), this.king === 0x1 && (this.noisebuffer -= 0x1, IL(this.length) <= 0x8 && this.noisebuffer < 0x0 && (oV('snd_play').call(this, 'snd_swing'), this.noisebuffer = 0xa))), this.king === 0x1 && this.type === 0x1 && (this.scythetimer += 0x1, this.scythetimer === 0x3c && (oV('snd_play').call(this, 'snd_spearappear'), this.sbul = oV('instance_create').call(this, this.centerx + this.radius * this.scythesidex, this.centery + 0x3c * this.scythesidex, I2), this.sbul.image_xscale = 0x2, this.sbul.image_yscale = 0x2, this.sbul.image_alpha = 0x0, this.sbul.sprite_index = 'spr_joker_scythebody', this.sbul.mask_index = 'spr_joker_scythebody_mask', this.sbul.image_blend = o4.red, this.sbul.active = 0x1, oV('scr_bullet_inherit').call(this, this.sbul)), this.scythetimer >= 0x3c && this.scythetimer < 0x46 && (this.sbul.image_angle += 0xa * this.scythesidex, this.sbul.image_alpha += 0.1), this.scythetimer >= 0x55 && this.scythetimer < 0x5a && Ix(IJ(this.sbul)) && (this.sbul.hspeed -= 0x3 * this.scythesidex), this.scythetimer >= 0x64 && this.scythetimer < 0x69 && oD(this.sbul, PV => {
        PV.image_alpha -= 0.2;
      }), this.scythetimer >= 0x69 && (oD(this.sbul, PV => {
        PV.instance_destroy();
      }), this.scythesidex === -0x1 ? this.scythesidex = 0x1 : this.scythesidex = -0x1, this.scythetimer = 0x3b)), this.image_angle += this.rotspeed, this.grazed === 0x1 && (this.grazetimer += 0x1, this.grazetimer >= 0x1e && (this.grazed = 0x0, this.grazetimer = 0x0));
    }
  };
oH(oB, 'obj_centerscythe'), oA(oB, 'kinds', oM('obj_centerscythe', I4)), oA(oB, 'defaultDepth', 0x0), oA(oB, 'defaultSprite', 'spr_joker_scythebody'), oA(oB, 'defaultMask', 'spr_joker_scythebody_mask');
var oL = oB,
  oU = class PB extends I0 {
    ["create"]() {
      this.direction = 0xb4, this.image_angle = this.direction, this.chain_max = 0x0, this.chain_number = 0x0, this.chaincon = 0x0, this.framerule = 0x0, this.maxspeed = 0x18, this.factor = 0xc, this.chainrate = 0x1, this.type = 0x1, this.btimer = 0x14, this.smashtime = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0;
    }
    ["step"]() {
      if (this.chaincon === 0x0 && (this.chaincon = 0x1), this.chaincon === 0x1 && (this.chaincon = 0x2, this.chaintimer = 0x0), this.chaincon === 0x2 && (this.image_angle = this.direction, this.chaintimer += 0x1, this.chaintimer >= this.chainrate && ((this.chain ??= [])[this.chain_number] = oV('instance_create').call(this, this.x, this.y, oQ), this.chain[this.chain_number].image_angle = this.image_angle, this.chain_max += 0x1, this.chain_number += 0x1, this.chaintimer = 0x0), this.path_position >= 0x1 && (this.path_speed = 0x0, this.shakeamt = 0xc, this.remx = MO('obj_heart').x, this.remy = MO('obj_heart').y, this.remx_box = MO('obj_growtangle').x, this.remy_box = MO('obj_growtangle').y, this.chaincon = 2.1), this.type === 0x58 && (this.btimer += 0x1, this.btimer >= 0x2 && this.path_position <= 0.8 && (this.cchoice = oI(-0x1, 0x0, 0x1), this.ychoice = oy(0x24, this.image_angle), this.xchoice = om(0x24, this.image_angle), this.bul = oV('instance_create').call(this, this.x + this.xchoice * this.cchoice, this.y + this.ychoice * this.cchoice, I2), this.bul.active = 0x1, this.bul.sprite_index = 'spr_spadebullet', this.bul.image_angle = this.image_angle, this.btimer = 0x0))), Math.abs(this.chaincon - 2.1) < 0.00001) {
        {
          let PV = this.remx;
          oW.with('obj_heart', PD => {
            PD.x = PV;
          });
        }
        {
          let PD = this.remy;
          oW.with('obj_heart', PY => {
            PY.y = PD;
          });
        }
        {
          let PY = this.remx_box;
          oW.with('obj_growtangle', Pw => {
            Pw.x = PY;
          });
        }
        {
          let Pw = this.remy_box;
          oW.with('obj_growtangle', Pp => {
            Pp.y = Pw;
          });
        }
        this.shakedir = o7(0x168), this.xshake = oy(this.shakeamt, this.shakedir), this.yshake = om(this.shakeamt, this.shakedir);
        {
          let Pp = this.xshake;
          oW.with('obj_heart', PL => {
            PL.x += Pp;
          });
        }
        {
          let PL = this.yshake;
          oW.with('obj_heart', PU => {
            PU.y += PL;
          });
        }
        {
          let PU = this.xshake;
          oW.with('obj_growtangle', Pf => {
            Pf.x += PU;
          });
        }
        {
          let Pf = this.yshake;
          oW.with('obj_growtangle', Px => {
            Px.y += Pf;
          });
        }
        this.shakeamt -= 0x2, this.shakeamt < 0x0 && (this.chaincon = 0x3);
      }
      if (this.chaincon === 0x3 && (this.chaincon = 0x5, this.smashtime = 0x1, this.bullettimer = 0x0), this.chaincon === 0x5 && (this.bullettimer += 0x1, this.bullettimer >= 0x1e && (this.chaincon = 0x6)), this.chaincon === 0x6) {
        if (o6(this.mypath2, this.maxspeed / this.factor, 0x0, 0x0), Ix(IJ(yW))) {
          {
            let Px = this.maxspeed;
            oW.with('obj_growtangle', PF => {
              PF.maxspeed = Px;
            });
          }
          {
            let PF = this.mypath2;
            oW.with('obj_growtangle', PJ => {
              PJ.mypath2 = PF;
            });
          }
          {
            let PJ = this.factor;
            oW.with('obj_growtangle', PQ => {
              PQ.factor = PJ;
            });
          }
          oW.with('obj_growtangle', PQ => {
            o6(PQ.mypath2, PQ.maxspeed / PQ.factor, 0x0, 0x0);
          });
        }
        this.chain_number -= 0x1, this.chain_max -= 0x1, this.framerule = 0x0, this.chainrate === 0x1 && (oD(this.chain[this.chain_number], PQ => {
          PQ.instance_destroy();
        }), this.chain_number -= 0x1, this.chain_max -= 0x1), this.chaincon = 0xa;
      }
      if (this.chaincon === 0xa && (this.path_position >= 0.8 && (this.smashtime = 0x0), this.framerule === 0x1 && (this.image_angle = this.direction + 0xb4), this.framerule = 0x1, this.chaintimer -= 0x1, this.chaintimer <= 0x0 && (this.chaintimer = this.chainrate * this.factor, this.chain_number >= 0x0 && (oD(this.chain[this.chain_number], PQ => {
        PQ.instance_destroy();
      }), this.chain_number -= 0x1, this.chain_max -= 0x1)), this.path_position >= 0x1 && (this.chaincon = 0xb)), this.chaincon, this.smashtime === 0x1 && this.type === 0x0) {
        if (this.btimer += 0x1, this.btimer === 0xa) {
          for (this.i = 0x0; this.i < 0x1; this.i += 0x1) this.regbul = oV('instance_create').call(this, 0x140 + this.i * 0x78, -0x14, I3), this.regbul.vspeed = 0x2, this.regbul.gravity = 0.2, this.regbul.sprite_index = 'spr_spadebullet', this.regbul.image_angle = 0x10e, oV('scr_bullet_inherit').call(this, this.regbul);
        }
        if (this.btimer >= 0x14) {
          for (this.btimer = 0x0, this.i = 0x0; this.i < 0x2; this.i += 0x1) this.regbul = oV('instance_create').call(this, 0x104 + this.i * 0x78, -0x14, I3), this.regbul.vspeed = 0x2, this.regbul.gravity = 0.2, this.regbul.sprite_index = 'spr_spadebullet', this.regbul.image_angle = 0x10e, oV('scr_bullet_inherit').call(this, this.regbul);
        }
      }
    }
  };
oH(oU, 'obj_chain_of_hell'), oA(oU, 'kinds', oM('obj_chain_of_hell', I0)), oA(oU, 'defaultDepth', 0xa), oA(oU, 'defaultSprite', 'spr_chainfront');
var of = oU,
  ox = class Pl extends I0 {
    ["create"]() {
      this.kingcon = 0x0, this.contimer = 0x0, this.image_speed = 0.334, this.image_xscale = 0x2, this.image_yscale = 0x2, this.t = 0x0, this.tmax = 0xb4, this.subtype = 0x0, this.type = 0x1, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0;
    }
    ["destroy"]() {
      oW.with('obj_king_boss', PV => {
        PV.visible = 0x1, PV.active = 0x1;
      }), oW.with('obj_growtangle', PV => {
        PV.growcon = 0x3;
      }), oW.with('obj_nonsolid_growtangle', PV => {
        PV.growcon = 0x3;
      });
    }
    ["step"]() {
      this.t === 0x0 && this.kingcon === 0x0 && (this.sprite_index = 'spr_chainking_toss', this.image_index = 0x0, this.image_speed = 0.5, this.kingcon = 0x1, this.soundplayed = 0x0, this.type === 0x2 && this.subtype === 0x1 ? oV('snd_play').call(this, 'snd_dadlaugh') : oV('snd_play').call(this, 'snd_dadblast')), this.kingcon === 0x1 && this.image_index >= 0x3 && (this.image_index >= 0x2 && this.soundplayed === 0x0 && (oV('snd_play').call(this, 'snd_criticalswing'), this.soundplayed = 0x1), this.sprite_index = 'spr_chainking_toss_idle', this.image_index = 0x0, this.image_speed = 0.334, this.kingcon = 0x2, this.type === 0x0 && (this.chain = oV('instance_create').call(this, this.x - 0x2c, this.y + 0x68, of)), this.type === 0x1 && (this.chain = oV('instance_create').call(this, this.x - 0x18, this.y + 0x68, E6)), this.type === 0x2 && (this.chain = oV('instance_create').call(this, this.x - 0x18, this.y + 0x68, yK)), oV('scr_bullet_inherit').call(this, this.chain), this.chain.type = this.subtype), this.type === 0x0 && (this.kingcon === 0x2 && Ix(IJ(this.chain)) && (this.chain.chaincon === 0x3 && (this.image_speed = 0x0), this.chain.chaincon >= 0xa && (this.sprite_index = 'spr_chainking_pullback', this.image_speed = 0.25, this.image_index = 0x0, this.kingcon = 0x3)), this.kingcon === 0x3 && Ix(IJ(this.chain)) && this.chain.chaincon >= 0xb && (this.sprite_index = 'spr_chainking_receive', this.image_speed = 0.25, this.image_index = 0x0, this.kingcon = 0x4)), this.t += 0x1;
    }
  };
oH(ox, 'obj_chainking'), oA(ox, 'kinds', oM('obj_chainking', I0)), oA(ox, 'defaultDepth', 0x6), oA(ox, 'defaultSprite', 'spr_chainking_spin');
var oF = ox,
  oJ = class PT extends I0 {
    ["create"]() {
      this.siner = 0x0;
    }
    ["draw"](PV) {
      this.siner += 0.5, PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x + IU(this.siner / 0x4), this.y + If(this.siner / 0x4), this.image_xscale + IU(this.siner / 0x8) * 0.2, this.image_yscale + IU(this.siner / 0x8) * 0.2, this.image_angle, this.image_blend, this.image_alpha);
    }
  };
oH(oJ, 'obj_chainpiece'), oA(oJ, 'kinds', oM('obj_chainpiece', I0)), oA(oJ, 'defaultDepth', 0xf), oA(oJ, 'defaultSprite', 'spr_chainpiece');
var oQ = oJ,
  ol = class r0 extends I2 {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x3c, this.active = 0x0, this.image_alpha = 0x0, Ix(IJ(yH)) ? this.futuredir = oX(this.x, this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8) : this.instance_destroy();
    }
    ["destroy"]() {
      this.active === 0x1 && (this.af = oV('instance_create').call(this, this.x, this.y, IW), this.af.sprite_index = this.sprite_index, this.af.depth = this.depth, this.af.image_angle = this.futuredir);
    }
    ["draw"](PV) {
      this.dont === 0x0 && (this.active === 0x0 && (this.futuredir = oX(this.x, this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8), PV.draw_sprite_ext('spr_diamondbullet_form', 0x0, this.x, this.y, 0x3 - this.image_alpha * 0x2, 0x3 - this.image_alpha * 0x2, this.futuredir, o4.white, 0x1 - this.image_alpha), this.image_alpha - 0x1 < -0.00001 ? this.image_alpha += 0.08 : (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x4), this.futuredir = this.direction, this.active = 0x1, this.friction = -0.1)), PV.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2 - this.image_alpha, 0x2 - this.image_alpha, this.futuredir, o4.white, this.image_alpha), this.x < -0x28 && this.instance_destroy(), this.x > 0x2a8 && this.instance_destroy(), this.y < -0x28 && this.instance_destroy(), this.y > 0x208 && this.instance_destroy()), this.dont = 0x0;
    }
  };
oH(ol, 'obj_chasebullet'), oA(ol, 'kinds', oM('obj_chasebullet', I2)), oA(ol, 'defaultDepth', 0x0), oA(ol, 'defaultSprite', 'spr_diamondbullet');
var oT = ol,
  y0 = class r1 extends I2 {
    ["create"]() {
      this.jumpcon = 0x0, this.jumptimer = 0x0, this.s_timer = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.leapmode = 0x0, this.active = 0x1, this.image_speed = 0x0, this.image_index = 0x0, this.damage = 0x64, this.grazed = 0x0, this.grazepoints = 0x6, this.timepoints = 0x2, this.inv = 0x78, this.grazetimer = 0x0, this.target = 0x0, this.boss = 0x0, this.amt = 0x0;
    }
    ["destroy"]() {}
    ["userEvent5"]() {
      this.active === 0x1 && oV('scr_damage').call(this);
    }
    ["step"]() {
      if (this.leapmode === 0x0 && (this.jumpcon === 0x1 && this.vspeed >= 0x0 && this.y >= MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2 - this.sprite_height && (oV('snd_play').call(this, 'snd_impact'), oV('instance_create').call(this, 0x0, 0x0, Id), this.y = MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2 - this.sprite_height, this.jumptimer = 0x0, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0), this.jumpcon === 0x3 && this.vspeed >= 0x0 && this.y >= this.floory - 0x2 && (oV('snd_play').call(this, 'snd_impact'), oV('instance_create').call(this, 0x0, 0x0, Id), this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x4), this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_crouch', this.jumptimer += 0x1, this.jumpmax = 0x14, this.amt >= 0x1 && (this.jumpmax = 0xa), this.jumptimer >= this.jumpmax && (oV('snd_play').call(this, 'snd_jump'), this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.amt += 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = MO('obj_heart').x + 0x8 - this.sprite_width / 0x2, this.vspeed = -0xf, this.amt === 0x1 && (this.vspeed = -0x11), this.gravity = 0x1, this.hspeed = (this.targetx - this.x) / 0x1c, this.amt >= 0x4 && (this.active = 0x0, this.jumpcon = 0x3, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0x10))), this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (Ig.turntimer = -0x1, oW.with('obj_checkers_enemy', PV => {
        PV.visible = 0x1;
      }), this.instance_destroy()))), this.leapmode === 0x1 && (this.jumpcon === 0x7 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && oW.with('obj_regularbullet', PV => {
        PV.active = 0x0, PV.image_alpha -= 0.1;
      }), this.jumptimer >= 0x14 && (Ig.turntimer = -0x1, oW.with('obj_checkers_enemy', PV => {
        PV.visible = 0x1;
      }), this.instance_destroy())), this.jumpcon === 0x6 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x7), this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_crouch', this.jumptimer += 0x1, this.jumptimer >= 0x14 && (this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = MO('obj_heart').x + 0x8 - this.sprite_width / 0x2, this.hspeed = (this.targetx - this.x) / 0x11, this.vspeed = -0x11, oV('snd_play').call(this, 'snd_jump'), this.gravity = 0x1, this.amt += 0x1, this.amt >= 0x3 && (this.active = 0x0, this.jumpcon = 0x6, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0x10))), this.jumpcon === 0x1 && this.vspeed >= 0x0 && (this.gravity = 0x0, this.vspeed = 0x0, this.hspeed = 0x0, this.jumpcon = 0x2, oV('snd_play').call(this, 'snd_boost')), this.jumpcon === 0x2 && (this.image_speed = 0.25, this.jumptimer += 0x1, this.jumptimer >= 0xf && (oV('snd_play').call(this, 'snd_ultraswing'), this.image_speed = 0x0, this.image_index = 0x0, this.vspeed = 0x20, this.jumpcon = 0x3, this.jumptimer = 0x0)), this.jumpcon === 0x3 && (this.a = oV('scr_afterimage').call(this), this.a.image_alpha = 0.7, this.y >= MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2 - this.sprite_height))) {
        for (this.shrapmax = 0x6, oV('snd_play').call(this, 'snd_impact'), oV('instance_create').call(this, 0x0, 0x0, Id), this.i = 0x0; this.i < this.shrapmax; this.i += 0x1) this.shrap = oV('instance_create').call(this, this.x + this.sprite_width / 0x2 - 0xf + this.i * 0x5, MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2, I3), this.shrap.image_xscale = 1.5, this.shrap.image_yscale = 1.5, this.shrap.direction = 0x82 - o7(0xa) - 0x46 * (this.i / (this.shrapmax - 0x1)), this.shrap.sprite_index = 'spr_checkershrapnel', this.shrap.speed = 0x6 + o7(0x1), this.shrap.gravity = 0.25, this.shrap.target = this.target, this.shrap.damage = this.damage;
        this.y = MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2 - this.sprite_height, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0;
      }
      if (this.leapmode === 0x2 && (this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_magnificent', this.image_speed = 0.5, this.jumpcon = 0x1, this.magamt = 0x0), this.jumpcon === 0x1 && (this.image_index === 0x2 && oV('snd_play').call(this, 'snd_ultraswing'), this.image_index >= 0x4 && (this.image_index = 0x4, this.image_speed = 0x0, this.hspeed = -0x4, this.gravity = -0.12, this.jumpcon = 0x2, this.siner = 0x0)), this.jumpcon === 0x2 && (this.siner += 0x1, this.y += IU(this.siner / 0x3) * 0x4, this.s_timer += 0x1, this.s_timer === 0x14 && oV('snd_play').call(this, 'snd_magicsprinkle'), this.s_timer >= 0x18 && (this.bul = oV('instance_create').call(this, this.x + o7(this.sprite_width / 0x2), this.y + this.sprite_height - 0x32, I3), this.bul.sprite_index = 'spr_checkershrapnel', this.bul.vspeed = 0x3, this.bul.image_xscale = 1.5, this.bul.image_yscale = 1.5, this.bul.depth = this.depth + 0x1, this.bul.gravity_direction = 0x87 + o7(0xb4), this.bul.gravity = 0.06, this.bul.target = this.target, this.bul.damage = this.damage, (this.magamt === 0x6 || this.magamt === 0xc) && oD(this.bul, PV => {
        PV.gravity = 0x0, PV.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x3);
      }), this.s_timer = 0x15, this.magamt += 0x1), this.y < -0xc8 && (this.speed = 0x0, this.gravity = 0x0, this.y = this.ystart - 0x64, this.x = this.xstart + 0x12c, this.hspeed = -0x1e, this.vspeed = 0xa, this.jumpcon = 0x3)), this.jumpcon === 0x3 && (this.magamt = 0x0, this.jumptimer += 0x1, this.jumptimer >= 0xa && (oV('snd_play').call(this, 'snd_impact'), oV('instance_create').call(this, 0x0, 0x0, Id), this.amt += 0x1, this.s_timer = 0x0, this.x = this.xstart, this.y = this.ystart, this.hspeed = 0x0, this.vspeed = 0x0, this.jumpcon = 0x0, this.jumpcon = 0x4, this.jumptimer = 0x0, this.sprite_index = 'spr_checkers_idle', this.image_index = 0x0, this.image_speed = 0x0)), this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0x14 && oW.with('obj_regularbullet', PV => {
        PV.active = 0x0, PV.image_alpha -= 0.1;
      }), this.jumptimer >= 0x1e && (Ig.turntimer = -0x1, this.instance_destroy(), oW.with('obj_checkers_enemy', PV => {
        PV.visible = 0x1;
      })))), this.leapmode === 0x3) {
        if (oW.with('obj_regularbullet', PV => {
          PV.image_xscale += 0.01, PV.image_yscale += 0.01;
        }), this.jumpcon === 0x0 && (this.sprite_index = 'spr_checkers_leg', this.image_index = 0x0, this.image_speed = 0.5, this.jumpcon = 0x1), this.jumpcon === 0x1) {
          if (this.image_index === 0x3) {
            for (oV('snd_play').call(this, 'snd_swing'), oV('snd_play').call(this, 'snd_magicsprinkle'), this.i = 0x0; this.i < 0x4; this.i += 0x1) this.bul = oV('instance_create').call(this, this.x - 0x28, this.y + 0x64, I3), this.bul.sprite_index = 'spr_checkershrapnel', this.bul.direction = oX(this.bul.x, this.bul.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8) - 0xa * this.i + o7(this.i * 0x14), this.bul.speed = 3.5 + o7(1.8), this.bul.target = this.target, this.bul.damage = this.damage;
          }
          this.image_index >= 0x5 && (this.image_index = 0x5, this.image_speed = 0x0, this.jumpcon = 0x2);
        }
        this.jumpcon === 0x2 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (this.sprite_index = 'spr_checkers_idle', this.image_index = 0x0), this.jumptimer >= 0x14 && (this.jumptimer = 0x0, this.jumpcon = 0x0, this.amt += 0x1, this.amt >= 0x4 && (this.jumpcon = 0x3, this.jumptimer = 0x0))), this.jumpcon === 0x3 && (this.jumptimer += 0x1, this.jumptimer >= 0x14 && oW.with('obj_regularbullet', PV => {
          PV.image_alpha -= 0.1, PV.active = 0x0;
        }), this.jumptimer >= 0x1e && (Ig.turntimer = -0x1, this.instance_destroy(), oW.with('obj_checkers_enemy', PV => {
          PV.visible = 0x1;
        })));
      }
      this.leapmode === 0x4 && (this.jumpcon === 0x1 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x0, this.jumptimer = 0xa), this.jumpcon === 0x3 && this.y >= this.floory - 0x2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0x0, this.gravity = 0x0, this.hspeed = 0x0, this.sprite_index = 'spr_checkers_crouch', this.jumpcon = 0x4), this.jumpcon === 0x0 && (this.jumptimer += 0x1, this.jumptimer >= 0x10 && (this.floory = this.y, this.jumptimer = 0x0, this.jumpcon = 0x1, this.sprite_index = 'spr_checkers_leap', this.targetx = MO('obj_heart').x + 0x8 - this.sprite_width / 0x2, this.vspeed = -0xc, this.gravity = 0x1, this.hspeed = (this.targetx - this.x) / 0x18, this.amt += 0x1, this.amt >= 0x4 && (this.active = 0x0, this.jumpcon = 0x3, this.jumptimer = 0x0, this.targetx = this.xstart, this.gravity = 0x2, this.hspeed = (this.targetx - this.x) / 0xc))), this.jumpcon === 0x4 && (this.jumptimer += 0x1, this.jumptimer >= 0xa && (Ig.turntimer = -0x1, oW.with('obj_checkers_enemy', PV => {
        PV.visible = 0x1;
      }), this.instance_destroy()))), this.grazed === 0x1 && (this.grazetimer += 0x1, this.grazetimer >= 0xa && (this.grazetimer = 0x0, this.grazed = 0x0));
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(y0, 'obj_checkers_leap'), oA(y0, 'kinds', oM('obj_checkers_leap', I2)), oA(y0, 'defaultDepth', 0x1), oA(y0, 'defaultSprite', 'spr_checkers_idle');
var y1 = y0,
  y2 = class r2 extends I0 {
    ["collide_obj_battlesolid"](PV) {
      this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_b', this.bul.direction = this.direction, this.bul.speed = this.speed - 0x6, this.bul.image_angle = this.image_angle, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x3, this.bul.timepoints = 0x2), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_c', this.bul.direction = this.direction - 0x19, this.bul.speed = this.speed - 0x8, this.bul.image_angle = this.image_angle, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x3, this.bul.timepoints = 0x2), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_a', this.bul.direction = this.direction + 0x19, this.bul.speed = this.speed - 0x8, this.bul.image_angle = this.image_angle, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x3, this.bul.timepoints = 0x2), this.instance_destroy();
    }
  };
oH(y2, 'obj_clubsbullet'), oA(y2, 'kinds', oM('obj_clubsbullet', I0)), oA(y2, 'defaultDepth', -0x14), oA(y2, 'defaultSprite', 'spr_clubsbullet');
var y3 = y2,
  y4 = class r3 extends I0 {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x1, this.timepoints = 0x1, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.dtimer = 0x0, this.type = 0x0, this.initangle = 0x0;
    }
    ["step"]() {
      this.dtimer += 0x1, this.type === 0x0 && ((this.dtimer === 0xf || this.dtimer === 0x13 || this.dtimer === 0x17) && (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0.1), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_b', this.bul.direction = this.direction, this.bul.speed = 0x4, this.bul.image_angle = this.direction, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x2, this.bul.timepoints = 0x1), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_c', this.bul.direction = this.direction - 0x11, this.bul.speed = 0x4, this.bul.image_angle = this.direction, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x2, this.bul.timepoints = 0x1), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_a', this.bul.direction = this.direction + 0x11, this.bul.speed = 0x4, this.bul.image_angle = this.direction, this.bul.damage = this.damage, this.bul.target = this.target, this.bul.grazepoints = 0x2, this.bul.timepoints = 0x1)), this.dtimer === 0x19 && (this.a = oV('instance_create').call(this, this.x, this.y, IW), this.a.sprite_index = this.sprite_index, this.a.image_angle = this.image_angle, this.instance_destroy())), this.type === 0x2 && ((this.dtimer === 0x14 || this.dtimer === 0x16 || this.dtimer === 0x18) && (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0.1), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_b', this.bul.direction = this.direction - 0x2 + this.initangle, this.bul.speed = 0x2, this.type === 0x2 && (this.bul.speed = 0x5), this.bul.image_angle = this.direction, oV('scr_bullet_inherit').call(this, this.bul)), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_c', this.bul.direction = this.direction - 0x13 - 0x2 + this.initangle, this.bul.speed = 0x2, this.type === 0x2 && (this.bul.speed = 0x5), this.bul.image_angle = this.direction, oV('scr_bullet_inherit').call(this, this.bul)), this.bul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.bul)) && (this.bul.sprite_index = 'spr_clubsball_a', this.bul.direction = this.direction + 0x13 - 0x2 + this.initangle, this.bul.speed = 0x2, this.type === 0x2 && (this.bul.speed = 0x5), this.bul.image_angle = this.direction, oV('scr_bullet_inherit').call(this, this.bul)), this.initangle += 0x2), this.dtimer === 0x1a && (this.a = oV('instance_create').call(this, this.x, this.y, IW), this.a.sprite_index = this.sprite_index, this.a.image_angle = this.image_angle, this.instance_destroy()));
    }
  };
oH(y4, 'obj_clubsbullet_dark'), oA(y4, 'kinds', oM('obj_clubsbullet_dark', I0)), oA(y4, 'defaultDepth', -0xa), oA(y4, 'defaultSprite', 'spr_clubsbullet_dark');
var y5 = y4,
  y6 = class r4 extends I0 {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0, Ix(IJ(yH)) ? this.futuredir = oX(this.x, this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8) : this.instance_destroy();
    }
    ["draw"](PV) {
      this.dont === 0x0 && (this.active === 0x0 && (this.futuredir = oX(this.x, this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8), PV.draw_sprite_ext('spr_diamondbullet_form', 0x0, this.x, this.y, 0x3 - this.image_alpha * 0x2, 0x3 - this.image_alpha * 0x2, this.futuredir, o4.white, 0x1 - this.image_alpha), this.image_alpha - 0x1 < -0.00001 ? this.image_alpha += 0.1 : (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x2), this.futuredir = this.direction, this.active = 0x1, this.speed = 0x0)), PV.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2 - this.image_alpha, 0x2 - this.image_alpha, this.futuredir, o4.white, this.image_alpha), this.active === 0x1 && (this.activetimer += 0x1, this.activetimer >= 0x5 && this.times < this.difficulty && (this.mybul = oV('instance_create').call(this, this.x, this.y, I3), Ix(IJ(this.mybul)) && (this.mybul.damage = this.damage, this.mybul.target = this.target, this.mybul.sprite_index = 'spr_diamondbullet', this.mybul.direction = this.futuredir, oD(this.mybul, PD => {
        PD.speed = 0x6, PD.image_angle = PD.direction;
      })), this.times += 0x1, this.activetimer = 0x0), this.activetimer >= 0x5 && this.times >= this.difficulty && (this.image_alpha -= 0.2, this.image_alpha - 0x0 <= 0.00001 && this.instance_destroy()))), this.dont = 0x0;
    }
  };
oH(y6, 'obj_dbullet_maker'), oA(y6, 'kinds', oM('obj_dbullet_maker', I0)), oA(y6, 'defaultDepth', -0x14), oA(y6, 'defaultSprite', 'spr_diamondbullet_form');
var y7 = y6,
  y8 = class r5 extends I2 {
    ["create"]() {
      this.y < 0x14 && (this.y = 0x14), this.y > 0x1cc && (this.y = 0x1cc), this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0, Ix(IJ(yH)) || this.instance_destroy(), this.type = 0x0;
    }
    ["draw"](PV) {
      this.dont === 0x0 && (this.active === 0x0 && (PV.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x3 - this.image_alpha * 0x2, 0x3 - this.image_alpha * 0x2, 0x0, o4.white, this.image_alpha), this.image_alpha - 0x1 < -0.00001 ? (this.image_alpha += 0.1, this.type === 0x1 && (this.vspeed = 0x3, this.gravity = -0.5)) : (this.type === 0x0 && (MO('obj_heart').y + 0x8 < this.y ? (this.vspeed = 0x1, this.gravity = -0.2) : (this.vspeed = -0x2, this.gravity = 0x1)), this.active = 0x1)), PV.draw_sprite_ext(this.sprite_index, 0x0, this.x, this.y, 0x2 - this.image_alpha, 0x2 - this.image_alpha, 0x0, o4.white, this.image_alpha), this.type === 0x0 && this.speed > 0x8 && (this.speed = 0x8), this.y > 0x1f4 && this.instance_destroy(), this.y < -0x14 && this.instance_destroy()), this.dont = 0x0;
    }
  };
oH(y8, 'obj_dbullet_vert'), oA(y8, 'kinds', oM('obj_dbullet_vert', I2)), oA(y8, 'defaultDepth', -0x1), oA(y8, 'defaultSprite', 'spr_diamondbullet_vert');
var y9 = y8,
  yM = class r6 extends I1 {
    ["create"]() {
      this.btimer = 0x63, this.timermax = 0xc, this.difficulty = 0x1, this.type = 0x1, this.joker = 0x0, this.side = 0x1, this.damage = 0x64, this.grazepoints = 0x1, this.timepoints = 0x1, this.inv = 0x3c, this.grazed = 0x0, this.grazetimer = 0x0, this.target = 0x0, this.made = 0x0, this.special = 0x0, this.miny = 0x96, this.maxy = 0x118, Ix(IJ(yW)) && (this.miny = MO('obj_growtangle').y - MO('obj_growtangle').sprite_height / 0x2, this.maxy = MO('obj_growtangle').y + MO('obj_growtangle').sprite_height / 0x2), this.ratio = 0x1, oV('scr_monsterpop').call(this) === 0x2 && (this.ratio = 1.6), oV('scr_monsterpop').call(this) === 0x3 && (this.ratio = 2.3);
    }
    ["step"]() {
      if (this.btimer += 0x1, this.type === 0x0 && this.btimer >= this.timermax * this.ratio && (this.btimer = 0x0, this.dir = 0x1e + o7(0x78), this.radius = 0x8c + o7(0x50), this.xx = oy(this.radius, this.dir), this.yy = om(this.radius, this.dir), this.bm = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y7), this.bm.y < 0x28 && (this.bm.y = 0x28), this.bm.damage = this.damage, this.bm.target = this.target), this.type === 0x1 && this.btimer >= 0x9 * this.ratio && (this.btimer = 0x0, this.radius = 0x8c + o7(0x28), this.yy = this.radius * this.side, this.xx = -0x64 + o7(0xc8), this.num = oI(0x0, 0x1, 0x2, 0x3), this.num === 0x3 && (this.xx = -0xa + o7(0x14)), this.d = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y9), this.d.damage = this.damage, this.d.target = this.target), this.type === 0x2 && this.btimer >= 0x14 * this.ratio && (this.xx = -0x14, this.side === 0x1 && (this.xx = 0x294), this.yy = this.miny + o7(this.maxy - this.miny), this.bul = oV('instance_create').call(this, this.xx, this.yy, y3), this.bul.speed = 0xc, this.bul.damage = this.damage, this.bul.target = this.target, this.side === 0x1 && (this.bul.direction = 0xb4, this.bul.image_angle = 0xb4), this.btimer = 0x0), this.type === 0x3 && this.btimer >= 0x14 * this.ratio && (this.btimer = 0x0, this.side === 0x1 && (this.dir = oI(0xe1, 0x13b)), this.side === -0x1 && (this.dir = oI(0x2d, 0x87)), this.radius = 0x190, this.xx = oy(this.radius, this.dir), this.yy = om(this.radius, this.dir), this.d = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y5), this.d.direction = this.dir + 0xb4, this.d.speed = 0x14, this.d.friction = 0x1, this.d.damage = this.damage, this.d.target = this.target, oD(this.d, PV => {
        PV.image_angle = PV.direction;
      }), this.side === 0x1 ? this.side = -0x1 : this.side = 0x1), this.type === 0x4 && this.btimer >= 0x1e * this.ratio && (this.btimer = 0x0, this.side === -0x1 && (this.dir = 0xe1), this.side === 0x1 && (this.dir = 0x13b), this.radius = 0x190, this.xx = oy(this.radius, this.dir), this.yy = om(this.radius, this.dir), this.d = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y5), this.d.damage = this.damage, this.d.target = this.target, this.d.direction = this.dir + 0xb4, this.d.speed = 0x14, this.d.friction = 0x1, oD(this.d, PV => {
        PV.image_angle = PV.direction;
      }), this.side === 0x1 ? this.side = -0x1 : this.side = 0x1), this.type === 0x6 && (this.xx = 0x0, this.yy = 0x0, this.made === 0x0 && (this.d = oV('instance_create').call(this, 0x12c + this.xx, -0x14 + this.yy, yy), this.e = oV('instance_create').call(this, 0x168 + this.xx, -0x3c + this.yy, yy), this.d.target = this.target, this.d.damage = this.damage, this.e.target = this.target, this.e.damage = this.damage, this.made = 0x1)), this.type === 0x7 && (this.xx = 0x0, this.yy = 0x0, this.made < 0x3 && this.btimer >= 0xf && (this.btimer = 0x0, this.mine = oV('instance_create').call(this, 0x12c + this.xx, -0x14 + this.yy, yy), this.mine.damage = this.damage, this.mine.target = this.target, oW.with('obj_dicebul', PV => {
        PV.gravity = 0.15 + PV.gravbonus, PV.image_xscale = 0x1, PV.image_yscale = 0x1;
      }), this.made += 0x1)), this.type === 0x8 && (this.xx = 0x0, this.yy = 0x0, this.made < 0x4 && this.btimer >= 0xf && (this.btimer = 0x0, this.mine = oV('instance_create').call(this, 0x12c + this.xx, this.yy - 0x28, yy), this.mine.damage = this.damage, this.mine.target = this.target, oD(this.mine, PV => {
        PV.hspeed = 1.2 + o7(1.2), PV.hspeed *= oI(-0x1, 0x1), PV.gravbonus = o7(0.1), PV.gravity = 0.15 + PV.gravbonus, PV.image_xscale = 0.7, PV.image_yscale = 0.7;
      }), this.made += 0x1)), this.type === 0xa && (this.xx = 0x0, this.yy = 0x0, this.btimer >= 0xf && (this.btimer = 0x0, this.dicecomet = oV('instance_create').call(this, oI(this.xx + 0x2a8, this.xx - 0x64), 0x0 - o7(0x64), yy), this.dicecomet.damage = this.damage, this.dicecomet.target = this.target, oD(this.dicecomet, PV => {
        PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.x > 0x140 ? PV.hspeed = -0x6 - o7(0x1) : PV.hspeed = 0x6 + o7(0x1), PV.vspeed = 0x2 + o7(0x2);
      }))), this.type === 0xb && (this.xx = 0x0, this.yy = 0x0, this.made < 0x4 && this.btimer >= 0xf && (this.btimer = 0x0, this.bb = oV('instance_create').call(this, 0x12c + this.xx, -0x14 + this.yy, yy), this.bb.damage = this.damage, this.bb.target = this.target, oW.with('obj_dicebul', PV => {
        PV.gravity = 0.15 + PV.gravbonus, PV.image_xscale = 0x1, PV.image_yscale = 0x1;
      }), this.made === 0x3 && oD(this.bb, PV => {
        PV.green = 0x1, PV.image_blend = o4.lime;
      }), this.made += 0x1)), this.type === 0xc && (this.xx = 0x0, this.yy = 0x0, this.made === 0x0 && (this.db = oV('instance_create').call(this, 0x140 + this.xx, -0x14 + this.yy, yy), this.db.image_xscale = 0x1, this.db.image_yscale = 0x1, this.db.damage = this.damage, this.db.target = this.target, this.made = 0x1)), this.type === 0xd && (this.xx = 0x0, this.yy = 0x0, this.made < 0x2 && this.btimer >= 0x14 && ((this.db ??= [])[this.made] = oV('instance_create').call(this, 0x140 + this.xx, -0x14 + this.yy, yy), this.db[this.made].image_xscale = 0x1, this.db[this.made].image_yscale = 0x1, this.db[this.made].damage = this.damage, this.db[this.made].target = this.target, this.made === 0x1 && (oD(this.db[0x1], PV => {
        PV.green = 0x1, PV.image_blend = o4.lime;
      }), this.db[0x1].hspeed = -this.db[0x0].hspeed), this.made += 0x1)), this.type === 0xe && this.btimer >= 0xa && (this.xx = -0x14, this.side === 0x1 && (this.xx = 0x294), this.yy = this.miny + o7(this.maxy - this.miny), this.bul = oV('instance_create').call(this, this.xx, this.yy, I3), this.bul.sprite_index = 'spr_smallbullet', this.bul.hspeed = -0x8, this.bul.damage = this.damage, this.bul.target = this.target, this.side === 0x1 && (this.bul.direction = 0xb4, this.bul.image_angle = 0xb4), this.btimer = 0x0), (this.type === 0x14 || this.type === 0x16) && (Ix(IJ(jM)) && (this.made === 0x0 && (oV('snd_play').call(this, 'snd_lancerwhistle'), this.whistletimer = 0x0, this.made = 0x1, oW.with('obj_lancerboss3', PV => {
        PV.idlesprite = 'spr_lancerbike_l';
      })), this.made === 0x1 && (this.whistletimer += 0x1, this.whistletimer >= 0x1e && (oW.with('obj_lancerboss3', PV => {
        PV.idlesprite = 'spr_lancerbike';
      }), this.made = 0x2))), this.type === 0x14 && (this.bmax = 0x8), this.type === 0x16 && (this.bmax = 0x6), this.btimer >= this.bmax && (this.radius = -0x50 + o7(0xa0) + 0x8, this.fallspade = oV('instance_create').call(this, MO('obj_heart').x + this.radius, -0x14, I3), this.fallspade.damage = this.damage, this.fallspade.target = this.target, oD(this.fallspade, PV => {
        PV.sprite_index = 'spr_spadebullet', PV.image_angle = 0x10e, PV.gravity = 0.3, PV.speed = 0x0, PV.vspeed = 0x3, PV.hspeed = -0.6 + o7(1.2);
      }), this.side === 0x1 ? this.side = -0x1 : this.side = 0x1, this.btimer = 0x0)), (this.type === 0x15 || this.type === 0x17 || this.type === 0x19) && (this.type === 0x15 && (this.bmax = 0x9), this.type === 0x17 && (this.bmax = 0x7), this.type === 0x19 && (this.bmax = 0x4), oW.with('obj_regularbullet', PV => {
        PV.image_alpha += 0.2;
      }), this.btimer >= this.bmax && (this.side === 0x0 ? this.radius = 0x50 : this.radius = 0x230, (this.sidespade ??= [])[this.side] = oV('instance_create').call(this, 0x0 + this.radius, MO('obj_growtangle').y - MO('obj_growtangle').sprite_height / 0x2 + o7(MO('obj_growtangle').sprite_height), I3), this.side === 0x0 && (this.sidespade[this.side].direction = 0x0), this.side === 0x1 && (this.sidespade[this.side].direction = 0xb4), this.sidespade[this.side].image_alpha = 0x0, this.sidespade[this.side].damage = this.damage, this.sidespade[this.side].target = this.target, oD(this.sidespade[this.side], PV => {
        PV.sprite_index = 'spr_spadebullet', PV.speed = 0x5, PV.friction = -0.1, PV.image_angle = PV.direction;
      }), this.side === 0x1 ? this.side = 0x0 : this.side = 0x1, this.btimer = 0x0)), this.type === 0x18 && (this.bmax = this.difficulty + 0x5, oW.with('obj_regularbullet', PV => {
        Ix(IJ(yH)) && (PV.xdiff = PV.x - (MO('obj_heart').x + 0x8), PV.y >= MO('obj_heart').y - 0xf0 && IL(PV.xdiff) <= 0x1e && (PV.xdiff >= 0x0 && PV.hspeed < 0x5 && (PV.hspeed += 0.4), PV.xdiff < 0x0 && PV.hspeed > -0x5 && (PV.hspeed -= 0.4)), PV.y >= MO('obj_heart').y - 0x64 && IL(PV.xdiff) <= 0x3c && (PV.xdiff >= 0x0 ? (PV.hspeed < 0x2 && (PV.hspeed += 0.25), PV.xdiff < 0xa && (PV.x += 0x3), PV.xdiff < 0x14 && (PV.x += 0x3), PV.xdiff < 0x1e && (PV.x += 0x3), PV.xdiff < 0x28 && (PV.x += 0x2), PV.xdiff < 0x3c && (PV.x += 0x1)) : (PV.hspeed > -0x2 && (PV.hspeed -= 0.25), PV.xdiff > -0xa && (PV.x -= 0x3), PV.xdiff > -0x14 && (PV.x -= 0x3), PV.xdiff > -0x1e && (PV.x -= 0x3), PV.xdiff > -0x28 && (PV.x -= 0x2), PV.xdiff > -0x3c && (PV.x -= 0x1))));
      }), this.btimer >= this.bmax && (this.radius = -0x50 + o7(0xa0) + 0x8, this.fallspade = oV('instance_create').call(this, MO('obj_heart').x + this.radius, -0x14, I3), this.fallspade.damage = this.damage, this.fallspade.target = this.target, oD(this.fallspade, PV => {
        PV.sprite_index = 'spr_spadebullet', PV.image_angle = 0x10e, PV.gravity = 0.3, PV.speed = 0x0, PV.vspeed = 0x3, PV.hspeed = -0.6 + o7(1.2);
      }), this.side === 0x1 ? this.side = -0x1 : this.side = 0x1, this.btimer = 0x0)), this.type === 0x1a && (oW.with('obj_regularbullet', PV => {
        PV.sprite_index === 'spr_blockbullet' && (PV.image_alpha += 0.1);
      }), this.timer = 0x23, oV('scr_monsterpop').call(this) === 0x2 && (this.timer = 52.5), oV('scr_monsterpop').call(this) === 0x3 && (this.timer = 0x4d), this.btimer >= this.timer)) {
        for (this.x_c = 0x12c, this.y_c = 0x8c, this.x_o = 0xc8, this.y_o = -0x3c, this.y_o_o = -0x50 + o7(0xa0), this.y_o += this.y_o_o, this.v_s = -this.y_o_o / 0xa0, this.h_s = -0x2, this.i = 0x0; this.i < 0x2; this.i += 0x1) for (this.upallow = oI(0x0, 0x1, 0x2), this.rightallow = oI(0x0, 0x1, 0x2), this.j = 0x0; this.j < 0x2; this.j += 0x1) ((this.bul ??= [])[this.i] ??= [])[this.j] = oV('instance_create').call(this, this.x_c + this.x_o + this.i * 0x50, this.y_c + this.y_o + this.j * 0x50, I3), oV('scr_bullet_inherit').call(this, this.bul[this.i][this.j]), this.j === this.upallow && (this.bul[this.i][this.j].y += oI(0x0, 0x28)), this.i === 0x1 && this.j === 0x1 && (this.bul[this.i][this.j].x += oI(0x0, -0x28), this.bul[this.i][this.j].y = this.y_c + this.y_o + oI(0x0, 0x28) + this.j * 0x50), this.bul[this.i][this.j].hspeed = this.h_s, this.bul[this.i][this.j].vspeed = this.v_s, this.bul[this.i][this.j].friction = -0.07, oV('scr_monsterpop').call(this) >= 0x2 && (this.bul[this.i][this.j].friction = -0.1), this.bul[this.i][this.j].sprite_index = 'spr_blockbullet', this.bul[this.i][this.j].image_alpha = 0x0;
        this.btimer = 0x0;
      }
      if (this.type === 0x1b && (this.timer = 0xf, oV('scr_monsterpop').call(this) === 0x2 && (this.timer = 25.5), oV('scr_monsterpop').call(this) === 0x3 && (this.timer = 34.5), this.lx = MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 + 0x8, this.ly = MO('obj_battlesolid').y + MO('obj_battlesolid').sprite_height / 0x2 - 0xf, this.btimer >= this.timer && (this.prevmade = this.made, this.made = oI(0x0, 0x1, 0x2, 0x3), this.made === this.prevmade && (this.made = oI(0x0, 0x1, 0x2, 0x3)), this.btimer = 0x0, this.block = oV('instance_create').call(this, 0x64, 0x64, oO), this.block.xpos = this.made, oV('scr_bullet_inherit').call(this, this.block), this.testblock = o0(this.lx + this.made * this.block.sprite_width + 0x8, this.ly - this.block.sprite_height * 0x3 - 0xa, oO, 0x0, 0x1), this.testblock > 0x1 && this.testblock.halt === 0x1 && oD(this.block, PV => {
        PV.instance_destroy();
      })), this.legoa = o0(this.lx + 0xf, this.ly, oO, 0x0, 0x1), this.legob = o0(this.lx + 0xf + 0x22, this.ly, oO, 0x0, 0x1), this.legoc = o0(this.lx + 0xf + 0x44, this.ly, oO, 0x0, 0x1), this.legod = o0(this.lx + 0xf + 0x66, this.ly, oO, 0x0, 0x1), this.legoa > 0x1 && this.legob > 0x1 && this.legoc > 0x1 && this.legod > 0x1 && (oD(this.legoa, PV => {
        PV.con = 0x3;
      }), oD(this.legob, PV => {
        PV.con = 0x3;
      }), oD(this.legoc, PV => {
        PV.con = 0x3;
      }), oD(this.legod, PV => {
        PV.con = 0x3;
      }))), this.type === 0x1e && (this.bmax = 0x22, oV('scr_monsterpop').call(this) === 0x2 && (this.bmax = 0x2e), oV('scr_monsterpop').call(this) === 0x3 && (this.bmax = 0x3c), this.btimer >= this.bmax && (this.rab = oV('instance_create').call(this, MO('obj_battlesolid').x + MO('obj_battlesolid').sprite_width, MO('obj_battlesolid').y, yx), oV('scr_bullet_inherit').call(this, this.rab), this.btimer = 0x0)), this.type === 0x20 && (this.skiprab = 0x0, Ix(IJ(oa)) && (this.skiprab = 0x1, this.type = 0x1e), this.made === 0x0 && this.skiprab === 0x0 && (this.made = 0x1, this.rab = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, oa), oV('scr_bullet_inherit').call(this, this.rab), this.instance_destroy())), this.type === 0x21 && this.btimer >= 0x1a * this.ratio && (this.hs = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, yS), this.hs.maxradius = 0x32, this.hs.type = 0x1, this.btimer = 0x0, this.hs.thisx = MO('obj_battlesolid').x - 0x32 + o7(0x64), this.hs.thisy = MO('obj_battlesolid').y - 0x32 + o7(0x64), oV('scr_bullet_inherit').call(this, this.hs)), this.type === 0x22 && this.btimer >= 0x1c && (this.typechoice = oI(0x0, 0x1, 0x2, 0x3), this.xx = 0x0, this.yy = 0x0, (this.typechoice === 0x0 || this.typechoice === 0x3) && (this.xx = 0x140 + o7(0x12c) - o7(0x12c), this.yy = -0x3c), this.typechoice === 0x1 && (this.xx = -0x3c, this.yy = o7(0x140)), this.typechoice === 0x2 && (this.xx = 0x2bc, this.yy = o7(0x140)), this.chain = oV('instance_create').call(this, this.xx, this.yy, yl), oV('scr_bullet_inherit').call(this, 0xff), this.btimer = 0x0), this.type === 0x23 && this.btimer >= 0x16 && (this.typechoice = oI(0x0, 0x1, 0x2, 0x3), this.xx = 0x0, this.yy = 0x0, (this.typechoice === 0x0 || this.typechoice === 0x3) && (this.xx = 0x140 + o7(0x12c) - o7(0x12c), this.yy = -0x3c), this.typechoice === 0x1 && (this.xx = -0x3c, this.yy = o7(0x140)), this.typechoice === 0x2 && (this.xx = 0x2bc, this.yy = o7(0x140)), this.chain = oV('instance_create').call(this, this.xx, this.yy, yl), oV('scr_bullet_inherit').call(this, this.chain), this.btimer = 0x0), this.type === 0x24 && this.btimer >= 0x10 && (this.typechoice = oI(0x0, 0x1, 0x2, 0x3), this.xx = 0x0, this.yy = 0x0, (this.typechoice === 0x0 || this.typechoice === 0x3) && (this.xx = 0x140 + o7(0x12c) - o7(0x12c), this.yy = -0x3c), this.typechoice === 0x1 && (this.xx = -0x3c, this.yy = o7(0x140)), this.typechoice === 0x2 && (this.xx = 0x2bc, this.yy = o7(0x140)), this.chain = oV('instance_create').call(this, this.xx, this.yy, yl), oV('scr_bullet_inherit').call(this, this.chain), this.btimer = 0x0), this.type >= 0x50 && this.type <= 0x54 && (this.maxtimer = 0x28, this.type === 0x51 && (this.maxtimer = 0x1e), this.type === 0x52 && (this.maxtimer = 0x1a), this.type === 0x53 && (this.maxtimer = 0x13), this.type === 0x54 && (this.maxtimer = 0xe), this.btimer >= this.maxtimer && (this.btimer = 0x0, this.lx = MO('obj_battlesolid').x, this.ly = MO('obj_battlesolid').y, this.side = oI(0x0, 0x1), (this.type === 0x51 || this.type === 0x54) && (this.side = this.made, this.made === 0x0 ? this.made = 0x1 : this.made = 0x0), this.side === 0x0 && (this.puzz1 = oV('instance_create').call(this, MO('obj_heart').x + 0x8, this.ly - 0x96, yv), this.puzz1.side = 0x3, this.puzz2 = oV('instance_create').call(this, MO('obj_heart').x + 0x8, this.ly + 0x96, yv), this.puzz2.side = 0x1, this.type === 0x52 && (this.puzz1.timer = 0xa), this.type === 0x52 && (this.puzz2.timer = 0xa), (this.type === 0x53 || this.type === 0x54) && (this.puzz1.timer = 0xf), (this.type === 0x53 || this.type === 0x54) && (this.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(this, this.puzz1), oV('scr_bullet_inherit').call(this, this.puzz2)), this.side === 0x1 && (this.puzz1 = oV('instance_create').call(this, this.lx + 0x96, MO('obj_heart').y + 0x8, yv), this.puzz1.side = 0x2, this.puzz2 = oV('instance_create').call(this, this.lx - 0x96, MO('obj_heart').y + 0x8, yv), this.puzz2.side = 0x0, this.type === 0x52 && (this.puzz1.timer = 0xa), this.type === 0x52 && (this.puzz2.timer = 0xa), this.type === 0x53 && (this.puzz1.timer = 0xf), this.type === 0x53 && (this.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(this, this.puzz1), oV('scr_bullet_inherit').call(this, this.puzz2)), this.type === 0x53 && oW.with('obj_jigsawbullet', PV => {
        PV.joker = 0x1;
      }))), this.type === 0x55 && (this.made === 0x0 && (this.cheer = 0x0, this.cheertimer = 0x0, (this.remhp ??= [])[0x0] = Ig.hp[Ig.char[0x0]], (this.remhp ??= [])[0x1] = Ig.hp[Ig.char[0x1]], oW.with('obj_susieenemy', PV => {
        PV.visible = 0x0;
      }), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x0;
      }), this.fakelan = oV('instance_create').call(this, 0x244, MO('obj_battlesolid').y + 0xa0, I0), oD(this.fakelan, PV => {
        PV.depth += 0x1, PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.visible = 0x1, PV.sprite_index = 'spr_lancerbike', PV.active = 0x0, PV.image_speed = 0.2;
      }), this.fakesus = oV('instance_create').call(this, 0x212, MO('obj_battlesolid').y - 0x28, I0), oD(this.fakesus, PV => {
        PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.visible = 0x1, PV.sprite_index = 'spr_susie_enemy_attack', PV.active = 0x0, PV.image_speed = 0x0;
      }), this.made = 0x1), this.made === 0x1 && (Ix(IJ(this.fakelan)) && (this.cheer === 0x0 && Ig.inv > 0xa && (this.cheer = 0x1, oV('snd_play').call(this, 'snd_lancerwhistle'), oD(this.fakelan, PV => {
        PV.sprite_index = 'spr_lancerbike_l';
      })), this.cheer === 0x1 && (this.cheertimer += 0x1, this.cheertimer >= 0x1e && (this.cheertimer = 0x0, oD(this.fakelan, PV => {
        PV.sprite_index = 'spr_lancerbike';
      }), this.cheer = 0x0))), Ix(IJ(this.fakesus)) && oD(this.fakesus, PV => {
        PV.image_index < 0x5 && (PV.image_index += 0.334);
      })), this.made === 0x1 && Ig.turntimer <= 0xa && (oD(this.fakesus, PV => {
        PV.visible = 0x0;
      }), oD(this.fakelan, PV => {
        PV.visible = 0x0;
      }), oW.with('obj_susieenemy', PV => {
        PV.visible = 0x1;
      }), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x1;
      })), this.btimer >= 0x1b && Ix(IJ(Iq)) && Ig.turntimer > 0xa)) {
        for (oD(this.fakesus, PV => {
          PV.image_index = 0x0, oV('snd_play').call(PV, 'snd_laz_c');
        }), this.i = 0x0; this.i < 0x1; this.i += 0x1) (this.axe ??= [])[this.i] = oV('instance_create').call(this, 0x21c, MO('obj_battlesolid').y, ow), oV('scr_bullet_inherit').call(this, this.axe[this.i]);
        this.btimer = 0x0;
      }
      if (this.joker === 0x1) {
        if (this.type === 0x2d && this.btimer >= 0x12 && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type === 0x2 && (this.bomb.type = oI(0x0, 0x1, 0x2, 0x3)), this.btimer = 0x0), this.type === 0x2e && this.btimer >= 0xc && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type === 0x2 && (this.bomb.type = oI(0x0, 0x1, 0x2, 0x3)), this.btimer = 0x0), this.type === 0x2f && this.btimer >= 0xc && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type = 0x1, this.btimer = 0x0), this.type === 0x30 && this.btimer >= 0xc && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type = 0x0, this.btimer = 0x0), this.type === 0x31 && this.btimer >= 0x14 && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type = 0x2, this.btimer = 0x0), this.type === 0x32 && this.btimer >= 0xc && (this.xx = oI(0x0, 0x1), this.basex = 0x140, Ix(IJ(yW)) && (this.basex = MO('obj_growtangle').x), this.xx === 0x0 && (this.idealx = this.basex - 0xb4 - o7(0x64)), this.xx === 0x1 && (this.idealx = this.basex + 0xb4 + o7(0x64)), this.bomb = oV('instance_create').call(this, this.idealx, -0x14, E4), oV('scr_bullet_inherit').call(this, this.bomb), this.bomb.type = 0x3, this.btimer = 0x0), this.type === 0x37 && this.btimer >= 0x28 && this.made === 0x0 && (this.btimer = 0x0, this.made = 0x1, this.scythe = oV('instance_create').call(this, MO('obj_battlesolid').x - 0xc8, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(this, this.scythe), this.scythe.image_angle = 0x10e + o7(0x78)), this.type === 0x38 && this.btimer >= 0x1d && this.made === 0x0 && (this.btimer = 0x0, this.xchoose = oI(-0xfa), this.scythe = oV('instance_create').call(this, MO('obj_battlesolid').x + this.xchoose, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(this, this.scythe), this.scythe.image_angle = o7(0x5a), this.scythe.type = 0x3, this.scythe.friction = -0.25, this.xchoose > 0x0 && (this.scythe.hspeed = -0x1), this.xchoose < 0x0 && (this.scythe.hspeed = 0x1)), this.type === 0x39 && this.btimer >= 0x28 && this.made === 0x0 && (this.btimer = 0x0, this.made = 0x1, this.scythe = oV('instance_create').call(this, MO('obj_battlesolid').x - 0x8c, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(this, this.scythe), this.scythe.anglespeed = -0xc, this.scythe.image_angle = 0x10e + o7(0x78)), this.type === 0x3a && this.btimer >= 0x28 && this.made === 0x0 && (this.btimer = 0x0, this.made = 0x1, this.scythe = oV('instance_create').call(this, MO('obj_battlesolid').x - 0x96, MO('obj_battlesolid').y, oC), this.scythe.anglespeed = -0x11, this.scythe.image_angle = 0x10e + o7(0x78)), this.type === 0x3c && this.btimer >= 0x28 && this.made === 0x0) {
          for (this.btimer = 0x0, this.made = 0x1, this.i = 0x0; this.i < 0x3; this.i += 0x1) for (this.j = 0x0; this.j < 0x7; this.j += 0x1) this.horse1 = oV('instance_create').call(this, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + this.i * 0x50, oN), this.horse1.siner = this.j * 0x12, this.horse1.vsin = this.j * 0x9, oV('scr_bullet_inherit').call(this, this.horse1);
        }
        if (this.type === 0x3d && this.btimer >= 0x28 && this.made === 0x0) for (this.btimer = 0x0, this.made = 0x1, this.horse = 0x0, this.vseed = o7(0x12c), this.j = 0x0; this.j < 0x3; this.j += 0x1) {
          for (this.i = 0x0; this.i < 0x3; this.i += 0x1) this.horse1 = oV('instance_create').call(this, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + this.i * 0x50, oN), this.horse1.siner = this.j * 0x2a, this.horse1.vsin = 0x0 + this.vseed, this.horse1.image_index = 0x0, this.horse1.altmode = 0x2, this.horse1.sinspeed = 1.1, oV('scr_bullet_inherit').call(this, this.horse1), this.horse1 = oV('instance_create').call(this, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + this.i * 0x50, oN), this.horse1.siner = this.j * 0x2a + 0x15, this.horse1.vsin = 0x0 + this.vseed, this.horse1.image_index = 0x1, this.horse1.altmode = 0x1, this.horse1.sinspeed = 1.1, oV('scr_bullet_inherit').call(this, this.horse1), this.chance = oq(o7(0x32)), this.chance === 0x1 && (this.horse1.image_index = 0x2);
          this.horse === 0x0 ? this.horse = 0x1 : this.horse = 0x0;
        }
        if (this.type === 0x3e && this.btimer >= 0x28 && this.made === 0x0) {
          for (this.btimer = 0x0, this.made = 0x1, this.i = 0x0; this.i < 0x3; this.i += 0x1) for (this.j = 0x0; this.j < 0x7; this.j += 0x1) this.horse1 = oV('instance_create').call(this, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + this.i * 0x50, oN), this.horse1.siner = this.j * 0x12, this.horse1.vsin = this.j * 0x9, this.horse1.sinspeed = 1.15, this.horse1.altmode = 0x3, oV('scr_bullet_inherit').call(this, this.horse1);
        }
        if (this.type === 0x41 && this.btimer >= 0x3c && (this.ring = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), this.ring.maxspade = 0xa, this.ring.grav = 0.4, oV('scr_bullet_inherit').call(this, this.ring), this.btimer = 0x0), this.type === 0x42 && this.btimer >= 0x1e && (this.ring = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), this.ring.maxspade = 0x6, this.ring.grav = 0x3, this.ring.size = 1.5, oV('scr_bullet_inherit').call(this, this.ring), this.btimer = 0x0), this.type === 0x43 && this.btimer >= 0x14 && (this.ring = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), this.ring.grav = 0.2, this.ring.maxspade = 0x4, this.ring.special = 0x1, oV('scr_bullet_inherit').call(this, this.ring), this.btimer = 0x0), this.type === 0x44 && (oW.with('obj_heart', PV => {
          PV.wspeed = 0x5;
        }), this.btimer >= 0x36 && (this.ring = oV('instance_create').call(this, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), this.ring.side = oI(0x0, 0x1), this.ring.grav = 0.45, this.ring.maxspade = 0xa, oV('scr_bullet_inherit').call(this, this.ring), this.btimer = 0x0)), this.type === 0x46 && this.btimer >= 0x14 && Ig.turntimer >= 0x1e && (this.jokerx = oI(MO('obj_battlesolid').x - 0x64 - o7(0x64), MO('obj_battlesolid').x + 0x64 + o7(0x64)), this.jokery = oI(MO('obj_battlesolid').y - o7(0x64), MO('obj_battlesolid').y + o7(0x64)), this.jokern = oV('instance_create').call(this, this.jokerx, this.jokery, yb), this.jokern.type = 0x1, oV('scr_bullet_inherit').call(this, this.jokern), this.jokern.active = 0x0, this.btimer = 0x0), this.type === 0x47 && this.btimer >= 0x9 && Ig.turntimer >= 0x14 && (this.jokerx = oI(MO('obj_battlesolid').x - 0x64 - o7(0x64), MO('obj_battlesolid').x + 0x64 + o7(0x64)), this.jokery = oI(MO('obj_battlesolid').y - o7(0x64), MO('obj_battlesolid').y + o7(0x64)), this.jokern = oV('instance_create').call(this, this.jokerx, this.jokery, yb), oV('scr_bullet_inherit').call(this, this.jokern), this.jokern.active = 0x0, this.btimer = 0x0), this.type === 0x48 && this.btimer >= 0x12 && (this.btimer = 0x0, this.side === 0x1 && (this.dir = oI(0xe1, 0x13b)), this.side === -0x1 && (this.dir = oI(0x2d, 0x87)), this.radius = 0x168, this.xx = oy(this.radius, this.dir), this.yy = om(this.radius, this.dir), this.d = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y5), this.d.direction = this.dir + 0xb4, this.d.speed = 0x14, this.d.friction = 0x1, this.d.type = 0x2, this.d.damage = this.damage, this.d.target = this.target, oD(this.d, PV => {
          PV.image_angle = PV.direction;
        }), this.side === 0x1 ? this.side = -0x1 : this.side = 0x1), this.type === 0x49 && this.btimer >= 0x4 && (this.btimer = 0x0, this.radius = 0x8c + o7(0x28), this.yy = this.radius * this.side, this.xx = -0x64 + o7(0xc8), this.num = oI(0x0, 0x1, 0x2, 0x3), this.num === 0x3 && (this.xx = -0xa + o7(0x14)), Ix(IJ(Iq)) && (this.db = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_battlesolid').y + 0x64, y9), oD(this.db, PV => {
          PV.type = 0x1;
        }), this.db.damage = this.damage, this.db.target = this.target, this.db.timepoints = 0x2)), this.type === 0x4a && this.btimer >= 0x9 && (this.btimer = 0x0, this.radius = 0x8c + o7(0x28), this.yy = this.radius * this.side, this.xx = -0x64 + o7(0xc8), this.num = oI(0x0, 0x1, 0x2, 0x3), this.num === 0x3 && (this.xx = -0xa + o7(0x14)), this.d = oV('instance_create').call(this, MO('obj_heart').x + 0x8 + this.xx, MO('obj_heart').y + 0x8 + this.yy, y9), this.d.grazepoints = 0xc, this.d.timepoints = 0x2, this.d.damage = this.damage, this.d.target = this.target), (this.type === 0x4b || this.type === 0x4c) && this.btimer >= 0x0 && this.special === 0x0) {
          oV('snd_play').call(this, 'snd_spearappear'), this.scythe = oV('instance_create').call(this, 0x0, 0x0, oL);
          {
            let PV = this.damage;
            oW.with('obj_centerscythe', PD => {
              PD.damage = PV;
            });
          }
          {
            let PD = this.grazepoints;
            oW.with('obj_centerscythe', PY => {
              PY.grazepoints = PD;
            });
          }
          {
            let PY = this.timepoints;
            oW.with('obj_centerscythe', Pw => {
              Pw.timepoints = PY;
            });
          }
          {
            let Pw = this.inv;
            oW.with('obj_centerscythe', Pp => {
              Pp.inv = Pw;
            });
          }
          {
            let Pp = this.target;
            oW.with('obj_centerscythe', PL => {
              PL.target = Pp;
            });
          }
          oW.with('obj_centerscythe', PL => {
            PL.grazed = 0x0;
          }), oW.with('obj_centerscythe', PL => {
            PL.grazetimer = 0x0;
          }), this.special = 0x1;
        }
        this.type === 0x4d && (Ig.sp = 0xa, oW.with('obj_heart', PL => {
          PL.wspeed = 0xa;
        }), this.special === 0x0 && (oV('snd_play').call(this, 'snd_joker_byebye'), this.prevmake = 0x0, this.special = 0x1, this.rank = 0x10, this.realtimer = 0x0, this.chase = 0x0, this.made = 0x0, this.amount = 0x0, this.jokertimer = 0x0, this.darkfader = oV('scr_dark_marker').call(this, 0x140, -0xa, 'spr_tallpx'), oD(this.darkfader, PL => {
          PL.depth = 0x2, PL.image_alpha = 0x0, PL.image_blend = o4.black, PL.image_xscale = 0xc8, PL.image_yscale = 0x2;
        })), this.realtimer >= 0x0 && this.realtimer < 0xa && (oD(this.darkfader, PL => {
          PL.image_alpha += 0.1;
        }), oW.with('obj_battlesolid', PL => {
          PL.image_alpha -= 0.1;
        }), oW.with('obj_heart', PL => {
          PL.y += 0x10, PL.boundaryup = 0xa0;
        })), this.realtimer === 0xa && oW.with('obj_battlesolid', PL => {
          PL.instance_destroy();
        }), this.realtimer === 0x14 && oV('instance_create').call(this, 0x28, -0x3c, yC), this.realtimer === 0x28 && oV('instance_create').call(this, 0x23a, -0x3c, yC), this.realtimer >= 0x3c && this.amount < 0x1e && this.btimer >= this.rank && (this.rank > 0x7 && (this.rank -= 0x1), this.which = oq(o7(0x5)), this.which === this.prevmake && (this.which = oq(o7(0x5))), this.chase === 0x3 && (this.which = oq((MO('obj_heart').x + 0x8) / 0x5a), this.chase = 0x0), this.scythe = oV('instance_create').call(this, 0x28 + 0x5a * this.which, -0x3c, yC), this.which === 0x1 && (this.scythe2 = oV('instance_create').call(this, 0x1ea, -0x3c, yC)), this.which === 0x0 && (this.scythe2 = oV('instance_create').call(this, 0x244, -0x3c, yC)), this.prevmake = this.which, this.btimer = 0x0, this.chase += 0x1, this.amount += 0x1), this.amount >= 0x1d - this.made && this.special === 0x1 && (this.jokertimer = 0x0, this.jokerin = oV('instance_create').call(this, 0x140, 0x64, yb), oD(this.jokerin, PL => {
          PL.type = 0x42, PL.depth = -0x1e;
        }), this.special = 0x2, this.which2 = 0x0), this.special === 0x2 && (this.jokertimer += 0x1, this.jokertimer === 0xa && oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_neochaos')), (this.jokertimer === 0x28 || this.jokertimer === 0x62) && (this.scythe = oV('instance_create').call(this, 0x28, -0x3c, yC), this.scythe = oV('instance_create').call(this, 0x244, -0x3c, yC)), (this.jokertimer === 0x2e || this.jokertimer === 0x56) && (this.scythe = oV('instance_create').call(this, 0x82, -0x3c, yC), this.scythe = oV('instance_create').call(this, 0x1ea, -0x3c, yC)), (this.jokertimer === 0x34 || this.jokertimer === 0x50) && (this.scythe = oV('instance_create').call(this, 0xdc, -0x3c, yC), this.scythe = oV('instance_create').call(this, 0x190, -0x3c, yC)), (this.jokertimer === 0x42 || this.jokertimer === 0x62) && (this.scythe = oV('instance_create').call(this, 0x136, -0x3c, yC)), this.jokertimer === 0x82 && (this.lastscythe = oV('instance_create').call(this, 0x140, -0x140, yC), this.p = 0x0, this.vol = 0x0, this.vol2 = 0x1, this.rumnoise = o1('snd_rumble', 0x32, 0x1), oD(this.lastscythe, PL => {
          PL.vspeed = 0x1, PL.gravity = 0.02, PL.image_xscale = 0x10, PL.image_yscale = 0x10, PL.scale = 0x10, PL.rotspeed = 0x0, PL.remrot = 0xa0, PL.image_angle = 0xa0;
        }), this.fadewhite = oV('instance_create').call(this, 0x140, -0x28, Ik), this.fadewhite.sprite_index = 'spr_tallpx', this.fadewhite.image_xscale = 0x190, this.fadewhite.image_yscale = 0x2, this.fadewhite.depth = -0x64, this.fadewhite.image_alpha = -0.3), this.jokertimer >= 0x83 && (oD(this.lastscythe, PL => {
          PL.x = PL.xstart + o7(0x8);
        }), oD(this.fadewhite, PL => {
          PL.image_alpha += 0.01;
        }), this.vol += 0.01, this.fadewhite.image_alpha >= 0x1 && (oD(this.darkfader, PL => {
          PL.instance_destroy();
        }), oD(this.lastscythe, PL => {
          PL.instance_destroy();
        })), this.fadewhite.image_alpha >= 1.3 && (this.special = 0x3))), this.special === 0x3 && (oW.with('obj_heart', PL => {
          PL.x = 0x140, PL.y = 0x78;
        }), this.vol -= 0.1, oo(this.rumnoise, this.vol, 0x0), oD(this.fadewhite, PL => {
          PL.image_alpha -= 0.1;
        }), this.fadewhite.image_alpha <= 0x0 && (o2(this.rumnoise), Ig.turntimer = 0xb, this.special = 0x4)), this.realtimer += 0x1);
      }
    }
  };
oH(yM, 'obj_dbulletcontroller'), oA(yM, 'kinds', oM('obj_dbulletcontroller', I1)), oA(yM, 'defaultDepth', 0x0), oA(yM, 'defaultSprite', 'spr_grazemask'), oA(yM, 'defaultVisible', !0x1);
var yI = yM,
  yo = class r7 extends I2 {
    ["create"]() {}
    ["userEvent5"]() {}
    ["step"]() {}
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yo, 'obj_dicebul'), oA(yo, 'kinds', oM('obj_dicebul', I2)), oA(yo, 'defaultDepth', 0x0);
var yy = yo,
  yE = class r8 extends I0 {
    ["create"]() {
      this.con = 0x0, this.movecon = 0x0, this.movetimer = 0x0, this.timer = 0x0, this.image_speed = 0x0, this.image_index = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.movesiner = 0x0, this.movefactor = 0x0, this.type = 0x0;
    }
    ["destroy"]() {
      oD(this.creator, PV => {
        PV.visible = 0x1;
      });
    }
    ["step"]() {
      this.con === 0x0 && (this.throwernumber = IQ(this.object_index), this.con = 0xc, this.movecon = 0x4, this.timer = 0x0, this.thrown = 0x0, this.image_index = 0x0), this.movecon === 0x4 && (this.movesiner += 0x1, Ig.turntimer >= 0x1e && this.movefactor - 0x1 < -0.00001 && (this.movefactor += 0.1), this.y = this.ystart + IU(this.movesiner / 0x10) * 0x28 * this.movefactor, Ig.turntimer <= 0x1e && (this.movefactor - 0x0 > 0.00001 ? this.movefactor -= 0.1 : this.movefactor = 0x0)), this.con === 0xa && (this.timer = 0x0, this.thrown = 0x0, this.image_index = 0x0, Ig.turntimer > 0xf && (this.con = 0xb)), this.con === 0xb && (this.image_index += 0.334, this.image_index - 0x4 >= -0.00001 && this.thrown === 0x0 && (this.swordbullet = oV('instance_create').call(this, this.x + 0x6, this.y + 0x22, I3), this.swordbullet.siner = this.movesiner, oV('scr_bullet_inherit').call(this, this.swordbullet), this.swordbullet.throwernumber = this.throwernumber, oD(this.swordbullet, PV => {
        PV.active = 0x1, PV.sprite_index = 'spr_diamondswordbullet', PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x9 + IU(PV.siner / 0xa) * 0x4), PV.throwernumber === 0x2 && (PV.speed *= 0.85), PV.throwernumber === 0x3 && (PV.speed *= 0.7), PV.direction += 0x5 - o7(0xa), PV.image_angle = PV.direction;
      }), this.swordbullet.depth = this.depth + 0x1, this.thrown = 0x1), this.image_index - 0x6 >= -0.00001 && (this.con = 0xc, this.timer = 0x0)), this.con === 0xc && (this.timer += 0x1, this.timer >= this.throwernumber * 0x3 && (this.con = 0xa));
    }
  };
oH(yE, 'obj_dknight_slasher'), oA(yE, 'kinds', oM('obj_dknight_slasher', I0)), oA(yE, 'defaultDepth', 0x0), oA(yE, 'defaultSprite', 'spr_diamond_knight_slash');
var yj = yE,
  ym = class r9 extends I2 {
    ["create"]() {
      this.active = 0x1, this.timer = 0x0, this.bdir = o7(0x168), this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0;
    }
    ["step"]() {
      this.timer += 0x1, this.timer >= 0x1e && (this.active = 0x0, this.image_alpha -= 0.1, this.image_alpha - 0x0 <= 0.00001 && this.instance_destroy(), this.hspeed += oy(0.2, this.bdir), this.vspeed += om(0.2, this.bdir));
    }
  };
oH(ym, 'obj_fadechain'), oA(ym, 'kinds', oM('obj_fadechain', I2)), oA(ym, 'defaultDepth', 0x0), oA(ym, 'defaultSprite', 'spr_chainpiece');
var yP = ym,
  yX = class rM extends I0 {
    ["create"]() {
      for (this.direction = 0xb4, this.speed = 0xa, this.image_angle = 0xb4, this.chaincon = 0x0, this.sons = -0x1, this.timer = 0x0, this.gotimer = 0x0, this.initkingx = MO('obj_chainking').x, this.initkingy = MO('obj_chainking').y, this.initboxx = MO('obj_nonsolid_growtangle').x, this.initboxy = MO('obj_nonsolid_growtangle').y, this.i = 0x0; this.i < 0x28; this.i += 0x1) (this.kingx ??= [])[this.i] = 0x0, (this.kingy ??= [])[this.i] = 0x0;
      this.siner = 0x0, this.btimer = 0x14, this.bgap = 0x0, this.type = 0x1, this.movecon = 0x0, this.movetime = 0x19, this.mytimer = 0x0, this.maxtimer = 0xc8, this.type === 0x1 && (this.maxtimer = 0x12c), this.image_blend = o4.red, this.bulletpoint = 0x0, this.spikemake = 0x0, this.ended = 0x0, this.endtimer = 0x0, this.xx = 0x0, this.yy = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.chain_noise = 0x0, this.timerbonus = 0x0;
    }
    ["draw"](PV) {
      if (this.draw_self(), this.chaincon >= 0x270f && this.type >= 0x1 && Ix(IJ(this.spike))) {
        for (this.w = this.spike.sprite_width, this.h = this.spike.sprite_height, this.spikecount = oq(this.w / 0xb), this.spx = this.spike.x, this.spy = this.spike.y, this.balpha = this.spike.basealpha, this.i = 0x0; this.i < this.spikecount; this.i += 0x1) PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.spx - this.w / 0x2 + 0x3, this.y - this.h / 0x2 + this.i * 0xb, 0x1, 0x1, 0x0, o4.white, this.balpha), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x + this.w / 0x2 - this.i * 0xb, this.y - this.h / 0x2 + 0x3, 0x1, 0x1, 0x10e, o4.white, this.balpha), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x - this.w / 0x2 + this.i * 0xb, this.y + this.h / 0x2 - 0x2, 0x1, 0x1, 0x5a, o4.white, this.balpha), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x + this.w / 0x2 - 0x2, this.y - this.h / 0x2 + this.i * 0xb, -0x1, 0x1, 0x0, o4.white, this.balpha);
      }
    }
    ["step"]() {
      if (this.chaincon === 0x0 && (this.chain_noise === 0x0 && (this.chainsound = oV('snd_loop').call(this, 'snd_chain_extend'), this.chain_noise = 0x1), this.sons < 0x28 && (this.sons += 0x1, (this.son ??= [])[this.sons] = oV('instance_create').call(this, this.x, this.y, oQ), this.son[this.sons].image_blend = o4.red), this.x <= MO('obj_nonsolid_growtangle').x && (this.chain_noise === 0x1 && (this.chain_noise = 0x2, oV('snd_stop').call(this, this.chainsound), oV('snd_play').call(this, 'snd_locker'), oV('snd_play').call(this, 'snd_screenshake')), this.box = oE(E8), this.x = MO('obj_nonsolid_growtangle').x, this.y = MO('obj_nonsolid_growtangle').y, this.speed = 0x0, this.chaincon = 0x1, this.shakeamt = 0x10, this.remx = MO('obj_heart').x, this.remy = MO('obj_heart').y, this.remx_box = MO('obj_nonsolid_growtangle').x, this.remy_box = MO('obj_nonsolid_growtangle').y, this.chaincon = 2.1, oW.with('obj_growtangle', PV => {
        PV.megakeep = 0x1;
      }))), Math.abs(this.chaincon - 2.1) < 0.00001) {
        {
          let PV = this.remx_box;
          oW.with('obj_nonsolid_growtangle', PD => {
            PD.x = PV;
          });
        }
        {
          let PD = this.remy_box;
          oW.with('obj_nonsolid_growtangle', PY => {
            PY.y = PD;
          });
        }
        this.shakedir = o7(0x168), this.xshake = oy(this.shakeamt, this.shakedir), this.yshake = om(this.shakeamt, this.shakedir);
        {
          let PY = this.xshake;
          oW.with('obj_nonsolid_growtangle', Pw => {
            Pw.x += PY;
          });
        }
        {
          let Pw = this.yshake;
          oW.with('obj_nonsolid_growtangle', Pp => {
            Pp.y += Pw;
          });
        }
        if (this.shakeamt -= 0x2, this.shakeamt <= 0x0) {
          this.chaincon = 2.2;
          {
            let Pp = this.remx_box;
            oW.with('obj_nonsolid_growtangle', PL => {
              PL.x = Pp;
            });
          }
          {
            let PL = this.remy_box;
            oW.with('obj_nonsolid_growtangle', PU => {
              PU.y = PL;
            });
          }
        }
      }
      if (Math.abs(this.chaincon - 2.2) < 0.00001 && (this.xx = 0x140, this.yy = 0xa0, this.yy_2 = 0x0, this.chaincon = 2.3, this.type >= 0x1 && (this.spike = oV('instance_create').call(this, this.x, this.y, I4), oV('scr_bullet_inherit').call(this, this.spike), this.spike.image_speed = 0x0, this.spike.active = 0x0, oW.with('obj_regularbullet', PU => {
        PU.basealpha = 0x0;
      }), this.spike.image_alpha = 0x0, this.spike.mask_index = this.box.sprite_index, this.spike.sprite_index = 'spr_battlebg_spikes', this.spikemake = 0x1, this.spike.image_xscale = this.box.image_xscale * 0.96, this.spike.image_yscale = this.box.image_yscale * 0.96), this.type <= 0x1)) {
        for (this.i = 0x0; this.i < 0x5; this.i += 0x1) for (this.j = 0x0; this.j < 0x5; this.j += 0x1) ((this.bul ??= [])[this.i] ??= [])[this.j] = oV('instance_create').call(this, this.xx - 0x96 + this.i * 0x46, this.yy_2 + 0x14 + this.j * 0x46, I4), this.bul[this.i][this.j].sprite_index = 'spr_spadebullet', this.bul[this.i][this.j].basealpha = 0x0, this.bul[this.i][this.j].active = 0x0, this.bul[this.i][this.j].image_angle = 0x5a, this.bul[this.i][this.j].image_xscale = 0.5, this.bul[this.i][this.j].image_yscale = 0.5, this.bul[this.i][this.j].neveractive = 0x1, oV('scr_bullet_inherit').call(this, this.bul[this.i][this.j]);
        this.bulletpoint = 0x1;
      }
      if (Math.abs(this.chaincon - 2.3) < 0.00001 && (oW.with('obj_regularbullet', PU => {
        PU.basealpha += 0.04;
      }), this.spikemake === 0x1 && (this.box.image_xscale += 0.005, this.box.image_yscale += 0.005, this.spike.image_xscale += 0.005, this.spike.image_yscale += 0.005, this.type === 0x1 && (this.box.image_xscale += 0.01, this.box.image_yscale += 0.01, this.spike.image_xscale += 0.01, this.spike.image_yscale += 0.01)), this.gotimer += 0x1, this.gotimer >= 0x1e && (this.chaincon = 0x3, this.gotimer = 0x0, this.xx = 0x140, this.yy = 0xa0, this.pointx = this.xx, this.pointy = this.yy, oW.with('obj_regularbullet', PU => {
        PU.active = 0x1;
      }))), this.chaincon === 0x3) {
        if (this.movecon === 0x0 && this.ended === 0x0 && this.mytimer > this.maxtimer - 0xa && (this.ended = 0x1), this.movecon === 0x0 && this.ended === 0x0) {
          this.speed = 0x0, this.pointdist = 0x0, this.mind = 0x64, this.maxd = 0x82, this.type === 0x0 && (this.maxd = 0x6e, this.movetime = 0x1e), this.type >= 0x1 && (this.maxd = 0x8c), (this.type === 0x3 || this.type === 0x4) && (this.maxd = 0x78), this.type === 0x5 && (this.maxd = 0x82, this.movetime = 0x1e);
          for (let PU = 0x0; this.pointdist < this.mind || this.pointdist > this.maxd;) {
            if (++PU > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
            this.pointx = this.xx + o7(0x8c) - o7(0x8c), this.pointy = this.yy + o7(0x78) - o7(0x78), this.pointdist = oK(this.x, this.y, this.pointx, this.pointy);
          }
          this.target = oV('instance_create').call(this, this.pointx, this.pointy, oQ), this.target.sprite_index = 'spr_heartoutline', this.target.depth = 0x1e, this.move_towards_point(this.pointx, this.pointy, this.pointdist / this.movetime), this.movetimer = 0x0, this.movecon = 0x1, this.chainnoise = oV('snd_loop').call(this, 'snd_chain_extend');
        }
        this.movecon === 0x1 && this.ended === 0x0 && (this.movetimer += 0x1, this.movetimer > this.movetime && (this.x = this.pointx, this.y = this.pointy, this.movecon = 0x2, this.speed = 0x0, this.movetimer = 0x0)), this.movecon === 0x2 && this.ended === 0x0 && (this.maxmove = 0x14, this.type === 0x1 && (this.maxmove = 0x16), this.type === 0x2 && (this.maxmove = 0x10), this.type === 0x3 && (this.maxmove = 0x7), this.type === 0x4 && (this.maxmove = 0x3), this.type === 0x5 && (this.maxmove = 0x16), this.movetimer += 0x1, this.movetimer >= this.maxmove && (oD(this.target, Pf => {
          Pf.instance_destroy();
        }), this.movecon = 0x0, oV('snd_stop').call(this, this.chainnoise)));
      }
      if (this.chaincon >= 0x0) {
        for ((this.kingx ??= [])[0x0] = this.x, (this.kingy ??= [])[0x0] = this.y, this.i = 0x28; this.i > 0x0; this.i -= 0x1) (this.kingx ??= [])[this.i] = this.kingx[Math.trunc(this.i - 0x1)], (this.kingy ??= [])[this.i] = this.kingy[Math.trunc(this.i - 0x1)];
        for (this.i = 0x0; this.i <= this.sons; this.i += 0x1) this.son[this.i].x = this.kingx[this.i], this.son[this.i].y = this.kingy[this.i], this.son[this.i].image_angle = this.direction;
        if (this.chaincon >= 0x3) {
          {
            let Pf = this.kingx[this.sons];
            oW.with('obj_nonsolid_growtangle', Px => {
              Px.x = Pf;
            });
          }
          {
            let Px = this.kingy[this.sons];
            oW.with('obj_nonsolid_growtangle', PF => {
              PF.y = Px;
            });
          }
        }
      }
      this.bulletpoint === 0x1 && oW.with('obj_regularbullet', PF => {
        PF.sprite_index === 'spr_spadebullet' && (PF.image_angle = oX(PF.x, PF.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8), PF.pointdist = oK(PF.x, PF.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8), PF.pointdist > 0x50 && (PF.neveractive -= 0.02), PF.neveractive > 0x0 ? PF.active = 0x0 : PF.active = 0x1, PF.alphafactor = 0.7, PF.activefactor = 0x1 - PF.neveractive, PF.activefactor > 0x1 && (PF.activefactor = 0x1), PF.pointdist > 0x50 && (PF.alphafactor = 1.7 - PF.pointdist * 0x1 / 0x50, PF.alphafactor < 0x0 && (PF.alphafactor = 0x0)), PF.image_alpha = (0.3 + PF.alphafactor) * PF.basealpha * PF.activefactor, PF.image_xscale < 0.68 && MO('obj_finalchain').ended === 0x0 ? (PF.image_xscale += 0.0005, PF.image_yscale += 0.0005) : (PF.active = 0x0, PF.basealpha -= 0.1, oW.with('obj_finalchain', PJ => {
          PJ.ended = 0x1;
        })));
      }), this.spikemake === 0x1 && (this.spike.image_alpha += 0.04, this.spike.x = this.box.x, this.spike.y = this.box.y, this.ended === 0x1 && (this.spike.image_alpha - 0x1 >= -0.00001 && (this.spike.image_alpha = 0x1), this.spike.image_alpha -= 0.14)), this.ended === 0x1 && (this.endtimer += 0x1, this.endtimer >= 0xa && (oV('snd_stop').call(this, 'snd_chain_extend'), oW.with('obj_chainpiece', PF => {
        PF.instance_destroy();
      }), oW.with('obj_regularbullet', PF => {
        PF.instance_destroy();
      }), oW.with('obj_chainking', PF => {
        PF.instance_destroy();
      }), Ig.turntimer = 0x3, this.instance_destroy())), this.spikemake === 0x1 && Ix(IJ(this.spike)) && this.spike.grazed === 0x1 && (this.timerbonus === 0x0 && (this.mytimer += 0x2, this.timerbonus = 0x1), this.grazetimer += 0x1, this.grazetimer >= 0xf && (this.timerbonus = 0x0, this.grazetimer = 0x0, this.spike.grazed = 0x0)), this.mytimer += 0x1, this.image_angle = this.direction;
    }
  };
oH(yX, 'obj_finalchain'), oA(yX, 'kinds', oM('obj_finalchain', I0)), oA(yX, 'defaultDepth', 0xa), oA(yX, 'defaultSprite', 'spr_chainfront');
var yK = yX,
  yk = class rI extends Iq {
    ["create"]() {
      this.image_xscale = 0x0, this.image_yscale = 0x0, this.image_alpha = 0.3, this.timer = 0x0, this.maxtimer = 0xf, this.growcon = 0x1, this.image_speed = 0x0, this.image_blend = o5(o4.green, o4.lime, 0.5), this.fullgrow = 0x0, this.keep = 0x0, this.megakeep = 0x0;
    }
    ["draw"](PV) {
      PV.draw_sprite_ext(this.sprite_index, 0x1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.draw_self();
    }
    ["step"]() {
      this.growth = 0x0, this.timer < this.maxtimer && this.growcon === 0x1 && (this.growth = 0x1), this.timer > 0x0 && this.growcon === 0x3 && (this.growth = 0x1), this.growth === 0x1 && (this.growcon === 0x1 && (this.timer += 0x1), this.growcon === 0x3 && (this.timer -= 0x1), this.image_xscale = 0x2 * (this.timer / this.maxtimer), this.image_yscale = 0x2 * (this.timer / this.maxtimer), this.image_angle = 0xb4 + 0xb4 * (this.timer / this.maxtimer), this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5, this.d = oV('instance_create').call(this, this.x, this.y, IW), this.d.sprite_index = this.sprite_index, this.d.image_xscale = this.image_xscale, this.d.image_yscale = this.image_yscale, this.d.image_angle = this.image_angle, this.d.depth = this.depth - 0x1, this.d.image_blend = this.image_blend, this.d.image_alpha = 0x1 - this.image_alpha + 0.1, this.d.image_speed = 0x0, this.timer >= this.maxtimer && this.growcon === 0x1 && (this.growcon = 0x2, this.image_angle = 0x0), this.timer <= 0x0 && this.growcon === 0x3 && this.instance_destroy());
    }
    ["endStep"]() {
      if (this.keep === 0x1 && Ix(IJ(yH)) && (this.path_speed !== 0x0 || this.speed !== 0x0 || this.megakeep === 0x1)) {
        if (this.lborder = this.x - this.sprite_width / 0x2, this.rborder = this.x + this.sprite_width / 0x2, this.uborder = this.y - this.sprite_height / 0x2, this.dborder = this.y + this.sprite_height / 0x2, MO('obj_heart').x < this.lborder + 0x5) {
          let PV = this.lborder + 0x5;
          oW.with('obj_heart', PD => {
            PD.x = PV;
          });
        }
        if (MO('obj_heart').x > this.rborder - 0x16) {
          let PD = this.rborder - 0x16;
          oW.with('obj_heart', PY => {
            PY.x = PD;
          });
        }
        if (MO('obj_heart').y < this.uborder + 0x5) {
          let PY = this.uborder + 0x5;
          oW.with('obj_heart', Pw => {
            Pw.y = PY;
          });
        }
        if (MO('obj_heart').y > this.dborder - 0x16) {
          let Pw = this.dborder - 0x16;
          oW.with('obj_heart', Pp => {
            Pp.y = Pw;
          });
        }
      }
    }
  };
oH(yk, 'obj_growtangle'), oA(yk, 'kinds', oM('obj_growtangle', Iq)), oA(yk, 'defaultDepth', 0x5), oA(yk, 'defaultSprite', 'spr_battlebg_0');
var yW = yk,
  yZ = class ro extends I4 {
    ["create"]() {
      this.image_speed = 0x0, this.image_xscale = 1.96, this.image_yscale = 1.96, this.initdir = oI(0x2d, 0x87, 0xe1, 0x13b), this.direction = this.initdir, this.speed = 0.1, this.active = 0x1, Ix(IJ(yW)) && (this.x = MO('obj_growtangle').x, this.y = MO('obj_growtangle').y, oW.with('obj_growtangle', PV => {
        PV.megakeep = 0x1;
      })), this.timer = 0x0, this.type = 0x0, this.con = 0x0, this.xx = 0x0, this.yy = 0x0, this.lx = 0x8c + this.xx, this.rx = 0x1e0 + this.xx, this.ux = 0x0 + this.yy, this.dx = 0x140 + this.yy, this.fadein = 0x0, this.spikecount = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.minitimer = 0x0, this.bumpnoise = 0x0, this.timerbonus = 0x0, this.wall_destroy = 0x0;
    }
    ["draw"](PV) {
      for (this.draw_self(), this.fadein < 0xa && (this.fadein += 0x1), PV.draw_set_alpha(this.fadein / 0xa), PV.draw_set_color(o4.white), PV.draw_rectangle(this.lx, this.ux, this.rx, this.dx, 0x1), PV.draw_rectangle(this.lx + 0x1, this.ux + 0x1, this.rx - 0x1, this.dx - 0x1, 0x1), PV.draw_set_alpha(0x1), this.w = this.sprite_width, this.h = this.sprite_height, this.spikecount = oq(this.w / 0xb), this.i = 0x0; this.i < this.spikecount; this.i += 0x1) PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x - this.w / 0x2 + 0x3, this.y - this.h / 0x2 + this.i * 0xb, 0x1, 0x1, 0x0, o4.white, this.fadein / 0xa), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x + this.w / 0x2 - this.i * 0xb, this.y - this.h / 0x2 + 0x3, 0x1, 0x1, 0x10e, o4.white, this.fadein / 0xa), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x - this.w / 0x2 + this.i * 0xb, this.y + this.h / 0x2 - 0x2, 0x1, 0x1, 0x5a, o4.white, this.fadein / 0xa), PV.draw_sprite_ext('spr_bouncebox_spike', 0x0, this.x + this.w / 0x2 - 0x2, this.y - this.h / 0x2 + this.i * 0xb, -0x1, 0x1, 0x0, o4.white, this.fadein / 0xa);
    }
    ["userEvent2"]() {
      oW.with('obj_king_body', PV => {
        PV.active = 0x1;
      }), oW.with('obj_growtangle', PV => {
        PV.growcon = 0x3;
      }), Ig.turntimer = 0x3, this.instance_destroy();
    }
    ["endStep"]() {
      if (this.type === 0x0 && (this.con === 0x0 && (this.ux += 0x1e, this.dx -= 0x1e, this.lx += 0x1e, this.rx -= 0x1e, this.con = 0.4), Math.abs(this.con - 0.4) < 0.00001 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed - 4.6 < -0.00001 && (this.speed += 0.2), this.con === 0.5 && this.speed - 4.6 >= -0.00001 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.2, this.speed - 0.1 <= 0.00001 && this.event_user(0x2))), this.type === 0x1 && (this.con === 0x0 && (this.direction += o7(0x14) - o7(0x14), this.con = 0.5), this.con === 0.5 && this.speed - 5.2 < -0.00001 && (this.speed += 0.2), this.hspeed - 4.2 >= -0.00001 && (this.vspeed - 0x0 > 0.00001 ? (this.vspeed += 0.1, this.hspeed -= 0.1) : (this.vspeed -= 0.1, this.hspeed -= 0.1)), this.hspeed <= -4.2 && (this.vspeed - 0x0 > 0.00001 ? (this.vspeed += 0.1, this.hspeed += 0.1) : (this.vspeed -= 0.1, this.hspeed += 0.1)), this.vspeed - 4.2 >= -0.00001 && (this.hspeed - 0x0 > 0.00001 ? (this.hspeed += 0.1, this.vspeed -= 0.1) : (this.hspeed -= 0.1, this.vspeed -= 0.1)), this.vspeed <= -4.2 && (this.hspeed - 0x0 > 0.00001 ? (this.hspeed += 0.1, this.vspeed += 0.1) : (this.hspeed -= 0.1, this.vspeed += 0.1)), this.con === 0.5 && this.speed - 5.2 >= -0.00001 && (this.timer += 0x1, this.timer >= 0x5a && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.4, this.speed - 0.1 <= 0.00001 && this.event_user(0x2))), this.type === 0x2 && (this.con === 0x0 && (this.direction += o7(0x14) - o7(0x14), this.con = 0.5, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), this.con === 0.5 && this.speed - 5.2 < -0.00001 && (this.speed += 0.2), this.con === 0.5 && this.speed - 5.2 >= -0.00001 && (this.timer += 0x1, this.timer >= 0x46 && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed - 0.1 <= 0.00001 && this.event_user(0x2))), this.type === 0x3 && (this.con === 0x0 && (this.direction += o7(0x14) - o7(0x14), this.con = 0.4, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), Math.abs(this.con - 0.4) < 0.00001 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed - 4.4 < -0.00001 && (this.speed += 0.2), this.con === 0.5 && this.speed - 4.4 >= -0.00001 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed - 0.1 <= 0.00001 && this.event_user(0x2))), this.type === 0x4 && (this.con === 0x0 && (this.direction += o7(0xa) - o7(0xa), this.con = 0.5, this.ux += 0x32, this.dx -= 0x32, this.lx += 0x32, this.rx -= 0x32), this.con === 0.5 && this.speed - 0x7 < -0.00001 && (this.speed += 0.2), this.con === 0.5 && this.speed - 0x7 >= -0.00001 && (this.timer += 0x1, this.timer >= 0x5a && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.5, this.speed - 0.1 <= 0.00001 && (this.active = 0x0, this.event_user(0x2)))), this.type === 0x5 && (this.con === 0x0 && (this.ux += 0x1e, this.dx -= 0x1e, this.lx += 0x1e, this.rx -= 0x1e, this.con = 0.4), Math.abs(this.con - 0.4) < 0.00001 && (this.minitimer += 0x1, this.minitimer >= 0xe && (this.con = 0.5)), this.con === 0.5 && this.speed - 0x4 < -0.00001 && (this.speed += 0.2), this.con === 0.5 && this.speed - 0x4 >= -0.00001 && (this.timer += 0x1, this.timer >= 0xaa && (this.con = 0x1)), this.con === 0x1 && (this.speed -= 0.2, this.speed - 0.1 <= 0.00001 && this.event_user(0x2))), Ix(IJ(yW))) {
        {
          let PV = this.x;
          oW.with('obj_growtangle', PD => {
            PD.x = PV;
          });
        }
        {
          let PD = this.y;
          oW.with('obj_growtangle', PY => {
            PY.y = PD;
          });
        }
        this.lborder = this.x - this.sprite_width / 0x2, this.rborder = this.x + this.sprite_width / 0x2, this.uborder = this.y - this.sprite_height / 0x2, this.dborder = this.y + this.sprite_height / 0x2, this.lborder < this.lx && this.hspeed - 0x0 < -0.00001 && (this.hspeed = -this.hspeed, this.bumpnoise = 0x1), this.rborder > this.rx && this.hspeed - 0x0 > 0.00001 && (this.hspeed = -this.hspeed, this.bumpnoise = 0x1), this.uborder < this.ux && this.vspeed - 0x0 < -0.00001 && (this.vspeed = -this.vspeed, this.bumpnoise = 0x1), this.dborder > this.dx && this.vspeed - 0x0 > 0.00001 && (this.vspeed = -this.vspeed, this.bumpnoise = 0x1), this.bumpnoise === 0x1 && (oV('snd_play').call(this, 'snd_bump'), oV('snd_play').call(this, 'snd_screenshake'), this.bumpnoise = 0x0, Ix(IJ(Id)) || oV('instance_create').call(this, 0x0, 0x0, Id));
      }
      this.grazed === 0x1 && (this.timerbonus === 0x0 && (this.timer += 0x2, this.timerbonus = 0x1), this.grazetimer += 0x1, this.grazetimer >= 0xf && (this.timerbonus = 0x0, this.grazetimer = 0x0, this.grazed = 0x0));
    }
    ["userEvent"](PV) {
      if (PV === 0x2) return this.userEvent2();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yZ, 'obj_growtangle_bouncer'), oA(yZ, 'kinds', oM('obj_growtangle_bouncer', I4)), oA(yZ, 'defaultDepth', 0x4), oA(yZ, 'defaultSprite', 'spr_battlebg_2');
var yq = yZ,
  yu = class ry extends o8 {
    ["collide_obj_collidebullet"](PV) {
      oD(PV, PD => {
        PD.event_user(0x5);
      });
    }
    ["create"]() {
      Ig.sp = 0x4, this.wspeed = Ig.sp, this.image_speed = 0x0, this.fly = 0x0, this.darken = 0x1, this.darkamt = 0x0, this.dmgnoise = 0x0, oV('instance_create').call(this, this.x + 0xa, this.y + 0xa, Iu), this.boundaryup = 0x0, this.disableslow = 0x0, Ix(oV('button2_h').call(this)) && (this.disableslow = 0x1);
    }
    ["draw"](PV) {
      this.draw_self();
    }
    ["step"]() {
      if (this.wallcheck = 0x0, this.press_l = 0x0, this.press_r = 0x0, this.press_d = 0x0, this.press_u = 0x0, this.bkx = 0x0, this.bky = 0x0, this.bkxy = 0x0, this.jelly = 0x2, Ix(oV('left_h').call(this)) && (this.press_l = 0x1), Ix(oV('right_h').call(this)) && (this.press_r = 0x1), Ix(oV('up_h').call(this)) && (this.press_u = 0x1), Ix(oV('down_h').call(this)) && (this.press_d = 0x1), this.px = 0x0, this.py = 0x0, this.press_r === 0x1 && (this.px = this.wspeed), this.press_l === 0x1 && (this.px = -this.wspeed), this.press_d === 0x1 && (this.py = this.wspeed), this.press_u === 0x1 && (this.py = -this.wspeed), Ix(oV('button2_h').call(this)) ? this.disableslow === 0x0 && (this.px = oZ(this.px * 0.5), this.py = oZ(this.py * 0.5)) : this.disableslow = 0x0, this.xmeet = 0x0, this.ymeet = 0x0, this.xymeet = 0x0, Ix(Il(this, this.x + this.px, this.y + this.py, Iq)) && (this.xymeet = 0x1), Ix(Il(this, this.x + this.px, this.y, Iq))) {
        if (Ix(Il(this, this.x + this.px, this.y, Iq))) for (this.g = this.wspeed; this.g > 0x0; this.g -= 0x1) {
          if (this.mvd = 0x0, this.press_d === 0x0 && !Ix(Il(this, this.x + this.px, this.y - this.g, Iq))) {
            this.y -= this.g, this.py = 0x0;
            break;
          }
          if (this.press_u === 0x0 && this.mvd === 0x0 && !Ix(Il(this, this.x + this.px, this.y + this.g, Iq))) {
            this.y += this.g, this.py = 0x0;
            break;
          }
        }
        if (this.xmeet = 0x1, this.bkx = 0x0, this.px > 0x0) {
          for (this.i = this.px; this.i >= 0x0; this.i -= 0x1) if (!Ix(Il(this, this.x + this.i, this.y, Iq))) {
            this.px = this.i, this.bkx = 0x1;
            break;
          }
        }
        if (this.px < 0x0) {
          for (this.i = this.px; this.i <= 0x0; this.i += 0x1) if (!Ix(Il(this, this.x + this.i, this.y, Iq))) {
            this.px = this.i, this.bkx = 0x1;
            break;
          }
        }
        this.bkx === 0x0 && (this.px = 0x0);
      }
      if (Ix(Il(this, this.x, this.y + this.py, Iq))) {
        if (this.ymeet = 0x1, this.bky = 0x0, Ix(Il(this, this.x, this.y + this.py, Iq))) for (this.g = this.wspeed; this.g > 0x0; this.g -= 0x1) {
          if (this.mvd = 0x0, this.press_r === 0x0 && !Ix(Il(this, this.x - this.g, this.y + this.py, Iq))) {
            this.x -= this.g, this.px = 0x0;
            break;
          }
          if (this.mvd === 0x0 && this.press_l === 0x0 && !Ix(Il(this, this.x + this.g, this.y + this.py, Iq))) {
            this.x += this.g, this.px = 0x0;
            break;
          }
        }
        if (this.py > 0x0) {
          for (this.i = this.py; this.i >= 0x0; this.i -= 0x1) if (!Ix(Il(this, this.x, this.y + this.i, Iq))) {
            this.py = this.i, this.bky = 0x1;
            break;
          }
        }
        if (this.py < 0x0) {
          for (this.i = this.py; this.i <= 0x0; this.i += 0x1) if (!Ix(Il(this, this.x, this.y + this.i, Iq))) {
            this.py = this.i, this.bky = 0x1;
            break;
          }
        }
        this.bky === 0x0 && (this.py = 0x0);
      }
      if (Ix(Il(this, this.x + this.px, this.y + this.py, Iq))) {
        this.xymeet = 0x1, this.bkxy = 0x0, this.i = this.px, this.j = this.py;
        for (let PV = 0x0; this.j !== 0x0 || this.i !== 0x0;) {
          if (++PV > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
          if (!Ix(Il(this, this.x + this.i, this.y + this.j, Iq))) {
            this.px = this.i, this.py = this.j, this.bkxy = 0x1;
            break;
          }
          IL(this.j) >= 0x1 ? (this.j > 0x0 && (this.j -= 0x1), this.j < 0x0 && (this.j += 0x1)) : this.j = 0x0, IL(this.i) >= 0x1 ? (this.i > 0x0 && (this.i -= 0x1), this.i < 0x0 && (this.i += 0x1)) : this.i = 0x0;
        }
        this.bkxy === 0x0 && (this.px = 0x0, this.py = 0x0);
      }
      this.x + this.px >= 0x280 - this.sprite_width && (this.px = 0x280 - this.sprite_width - this.x), this.x + this.px <= 0x0 && (this.px = -this.x), this.y + this.py <= 0x0 && (this.py = -this.y), this.y + this.py >= 0x140 - this.sprite_height + this.boundaryup && (this.py = 0x140 - this.sprite_height - this.y + this.boundaryup), this.x += this.px, this.y += this.py, this.dmgnoise === 0x1 && (this.dmgnoise = 0x0, oV('snd_stop').call(this, 'snd_hurt1'), oV('snd_play').call(this, 'snd_hurt1')), Ig.inv -= 0x1, Ig.inv > 0x0 ? this.image_speed = 0.25 : (this.image_speed = 0x0, this.image_index = 0x0), Ig.heartx = this.x + 0x2 - 0x0, Ig.hearty = this.y + 0x2 - 0x0;
    }
  };
oH(yu, 'obj_heart'), oA(yu, 'kinds', oM('obj_heart', o8)), oA(yu, 'defaultDepth', 0x1), oA(yu, 'defaultSprite', 'spr_dodgeheart'), oA(yu, 'defaultMask', 'spr_dodgeheartmask');
var yH = yu,
  yG = class rE extends I0 {
    ["create"]() {
      this.made = 0x0, this.active = 0x0, this.pausetimer = 0x0, this.con = 0x0, this.siner = 0x0, this.maxlength = 0x0, this.visible = 0x0;
    }
    ["step"]() {
      if (this.made === 0x0) {
        for (this.i = 0x0; this.i < 0x4; this.i += 0x1) (this.son ??= [])[this.i] = oV('instance_create').call(this, this.x, this.y, I3), this.son[this.i].sprite_index = 'spr_heartbullet', oV('scr_bullet_inherit').call(this, this.son[this.i]);
        this.made = 0x1;
      }
      for (this.pausetimer += 0x1, this.pausetimer >= 0xa && this.con === 0x0 && (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x7), this.con = 0x1), this.siner += 0x1, this.maxlength < 0x28 && (this.maxlength += 0x4), this.i = 0x0; this.i < 0x4; this.i += 0x1) Ix(IJ(this.son[this.i])) && (this.son[this.i].x = this.x + oy(this.maxlength, this.siner * 0x3 + this.i * 0x5a), this.son[this.i].y = this.y + om(this.maxlength, this.siner * 0x3 + this.i * 0x5a));
    }
  };
oH(yG, 'obj_heartbomb_blast'), oA(yG, 'kinds', oM('obj_heartbomb_blast', I0)), oA(yG, 'defaultDepth', 0x0), oA(yG, 'defaultSprite', 'spr_bomb_heart');
var yA = yG,
  yd = class rj extends I0 {
    ["create"]() {
      this.siner = 0x0, this.radius = 0xa0, this.dir = 0x0, this.norot = 0x0, this.actual = 0x1, this.thisx = MO('obj_heart').x, this.thisy = MO('obj_heart').y, this.made = 0x0, this.damage = 0x64, this.active = 0x1, this.type = 0x0, this.maxradius = 0x50, this.movespeed = 0.5, this.radcon = 0x0;
    }
    ["step"]() {
      if (this.actual === 0x0 && (this.siner += 0x1, this.dir += 0x2, this.xdir = this.dir + 0xb4, this.norot === 0x1)) {
        for (this.i = 0x0; this.i < 0x14; this.i += 0x1) this.t = this.i * 0x2 * Math.PI / 0x14 + this.siner / 0x3c, this.xx = 0x10 * (IU(this.t) * IU(this.t) * IU(this.t)), this.yy = 0xd * If(this.t) - 0x5 * If(0x2 * this.t) - 0x2 * If(0x3 * this.t) - If(0x4 * this.t), this.xxx = MO('obj_heart').x + 0x8 + this.xx * this.radius, this.yyy = MO('obj_heart').y + 0x8 - this.yy * this.radius, o3.draw_sprite('spr_heartbullet', 0x0, this.xxx, this.yyy);
      }
      if (this.actual === 0x1) {
        if (this.made === 0x0) {
          for (this.t = 0x0; this.t < 0x10; this.t += 0x1) (this.bul ??= [])[this.t] = oV('instance_create').call(this, -0x14, -0x14, I4), this.bul[this.t].damage = this.damage, oD(this.bul[this.t], PV => {
            PV.grazepoints = 0x2, PV.timepoints = 0x1, PV.depth = 0x0, PV.image_alpha = 0x0, PV.sprite_index = 'spr_heartbullet';
          });
          this.made = 0x1;
        }
        for (this.type === 0x0 && (this.radius > this.maxradius ? this.radius -= 0x5 : this.radius += IU(this.siner / 0xa) / 0x2), this.type === 0x1 && (this.radius > this.maxradius && this.radcon === 0x0 ? this.radius -= 0x4 : (this.radcon = 0x1, this.radius += 0x8, this.active = 0x0, this.image_alpha -= 0.1)), this.dir += 0x2, this.siner += 1.5, this.tcount = 0x0, this.t = 0x0; this.t < 0x10; this.t += 0x1) Ix(IJ(this.bul[this.t])) && (this.tcount += 0x1, this.radcon === 0x0 && oD(this.bul[this.t], PV => {
          PV.image_alpha < 0x1 && (PV.image_alpha += 0.1);
        }), this.xx = IU(Math.PI * this.t / 0x8 + this.siner / 0x14) * this.radius, this.yy = If(Math.PI * this.t / 0x8 + this.siner / 0x14) * this.radius, this.xxx = this.thisx + 0x8 + this.xx, this.yyy = this.thisy + 0x8 - this.yy, this.bul[this.t].x = this.xxx, this.bul[this.t].y = this.yyy, this.radcon === 0x1 && oD(this.bul[this.t], PV => {
          PV.image_alpha -= 0.1, PV.active = 0x0, PV.image_alpha <= 0.1 && PV.instance_destroy();
        }));
        this.tcount === 0x0 && this.instance_destroy();
      }
    }
  };
oH(yd, 'obj_heartshaper'), oA(yd, 'kinds', oM('obj_heartshaper', I0)), oA(yd, 'defaultDepth', 0x0), oA(yd, 'defaultSprite', 'spr_heartbullet'), oA(yd, 'defaultVisible', !0x1);
var yS = yd,
  yR = class rm extends I2 {
    ["collide_obj_jigsawbullet"](PV) {
      if (this.con === 0x1 && PV.con === 0x1 && this.active === 0x1 && PV.active === 0x1 && this.locked === 0x0) {
        this.speed = 0x0, this.locked = 0x1, oD(PV, PD => {
          PD.speed = 0x0, PD.locked = 0x1;
        });
        for (let PD = 0x0; PD < 0x10; PD++) this.side === 0x0 && (this.x >= PV.x - 0x1c && (this.x -= 0x1), this.x >= PV.x - 0x1c && (PV.x += 0x1)), this.side === 0x3 && (this.y >= PV.y - 0x1c && (this.y -= 0x1), this.y >= PV.y - 0x1c && (PV.y += 0x1)), this.side === 0x2 && (this.x <= PV.x + 0x1c && (this.x += 0x1), this.x <= PV.x + 0x1c && (PV.x -= 0x1)), this.side === 0x1 && (this.y <= PV.y + 0x1c && (this.y += 0x1), this.y <= PV.y + 0x1c && (PV.y -= 0x1));
      }
    }
    ["create"]() {
      this.damage = 0x0, this.grazepoints = 0x0, this.grazed = 0x0, this.timepoints = 0x0, this.active = 0x0, this.image_alpha = 0x0, this.init = 0x0, this.tracking = 0x1, this.timer = 0x0, this.con = 0x0, this.side = 0x0, this.fade = 0x0, this.locked = 0x0, this.ltimer = 0x0, this.joker = 0x0;
    }
    ["step"]() {
      this.init === 0x0 && this.image_alpha - 0x1 < -0.00001 && (this.image_alpha += 0.1, this.image_alpha - 0x1 >= -0.00001 && (this.init = 0x1, this.active = 0x1)), this.tracking === 0x1 && Ix(IJ(yH)) && ((this.side === 0x1 || this.side === 0x3) && (MO('obj_heart').x + 0xa - this.x >= 0xa && (this.x += 0x3), MO('obj_heart').x + 0xa - this.x <= -0xa && (this.x -= 0x3)), (this.side === 0x0 || this.side === 0x2) && (MO('obj_heart').y + 0xa - this.y >= 0xa && (this.y += 0x3), MO('obj_heart').y + 0xa - this.y <= -0xa && (this.y -= 0x3))), this.timer += 0x1, this.timer >= 0x1e && this.con === 0x0 && (this.tracking = 0x0, this.direction = this.side * 0x5a + 0xb4, this.speed = 0x4, this.gravity_direction = this.side * 0x5a, this.gravity = 1.2, this.joker === 0x1 && (this.gravity = 1.6, this.speed = 0x6), this.con = 0x1), this.timer >= 0x28 && (this.gravity = 0x0), this.locked === 0x1 && (this.ltimer += 0x1, this.ltimer >= 0xc && (this.image_alpha -= 0.2, this.active = 0x0), this.ltimer >= 0x11 && this.instance_destroy());
    }
  };
oH(yR, 'obj_jigsawbullet'), oA(yR, 'kinds', oM('obj_jigsawbullet', I2)), oA(yR, 'defaultDepth', 0x0), oA(yR, 'defaultSprite', 'spr_jigsawbullet');
var yv = yR,
  yz = class rP extends I0 {
    ["create"]() {
      this.fire = 0x0, this.special = 0x0, this.con = 0x0, this.image_xscale = 0x0, this.image_speed = 0x0, this.timer = 0x0, this.image_yscale = 0x2, this.type = 0x0, this.damage = 0x64, this.grazed = 0x0, this.grazepoints = 0x4, this.timepoints = 0x2, this.inv = 0x3c, this.grazetimer = 0x0, this.target = 0x0, this.sndcon = 0x0, this.x < 320 && (this.sprite_index = 'spr_joker_teleport_r');
    }
    ["step"]() {
      if (this.con === 0x0 && (this.sndcon === 0x0 && (oV('snd_stop').call(this, 'snd_swing'), oV('snd_play').call(this, 'snd_swing'), this.sndcon = 0x1), this.image_index = 0x0, this.image_xscale - 0x2 < -0.00001 ? this.image_xscale += 0.4 : (this.image_xscale = 0x2, this.con = 0x1, this.timer = 0x0)), this.con === 0x1 && (this.timer += 0x1, this.timer >= 0x8 && (this.sndcon === 0x1 && this.type < 0x3 && (oV('snd_play').call(this, 'snd_joker_oh'), this.sndcon = 0x2), this.image_index = 0x1, this.con = 0x2, this.timer = 0x0, this.type === 0x0 && (this.bullet = oV('instance_create').call(this, this.x, this.y, I2), this.bullet.sprite_index = 'spr_diamondbullet', this.bullet.active = 0x1, oV('scr_bullet_inherit').call(this, this.bullet), oD(this.bullet, PV => {
        PV.move_towards_point(MO('obj_heart').x + 0xa, MO('obj_heart').y + 0xa, 0x8), PV.image_angle = PV.direction, PV.image_xscale = 0.7, PV.image_yscale = 0.7;
      })), this.type === 0x1))) {
        for (this.i = 0x0; this.i < 0x5; this.i += 0x1) this.bullet = oV('instance_create').call(this, this.x, this.y, I2), this.bullet.sprite_index = 'spr_spadebullet', this.bullet.active = 0x1, this.bullet.offset = 0x12 * this.i, oV('scr_bullet_inherit').call(this, this.bullet), oD(this.bullet, PV => {
          PV.move_towards_point(MO('obj_heart').x + 0xa, MO('obj_heart').y + 0xa, 4.5), PV.direction = PV.direction - 0x24 + PV.offset, PV.image_angle = PV.direction, PV.image_xscale = 0.4, PV.image_yscale = 0.4;
        });
      }
      this.con === 0x2 && (this.timer += 0x1, this.timer >= 0xa && (this.con = 0x4, this.timer = 0x0)), this.con === 0x4 && (this.sndcon === 0x2 && (oV('snd_stop').call(this, 'snd_swing'), oV('snd_play').call(this, 'snd_swing'), this.sndcon = 0x3), this.image_xscale - 0x0 > 0.00001 ? (this.image_xscale -= 0.4, this.image_yscale += 0.2) : (this.image_xscale = 0x0, this.con = 0x0, this.instance_destroy()));
    }
  };
oH(yz, 'obj_joker_teleport'), oA(yz, 'kinds', oM('obj_joker_teleport', I0)), oA(yz, 'defaultDepth', 0x5), oA(yz, 'defaultSprite', 'spr_joker_teleport');
var yb = yz,
  yV = class rX extends I3 {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0xa, this.timepoints = 0x0, this.target = 0x0, this.dont = 0x1, this.inv = 0x3c, this.damage = 0x14, this.spec = 0x0, Ig.hp[0x1] <= Ig.maxhp[0x1] / 0x2 && (this.damage = 0xa), Ig.hp[0x1] <= Ig.maxhp[0x1] / 0x4 && (this.damage = 0x5), this.image_xscale = 0x2, this.image_yscale = 0x2, this.loop = 0x0, this.lcon = 0x0, this.flip = 0x0, this.ltimer = 0x0, this.btimer = 0x0, this.endcon = 0x0, this.racecon = 0x0, this.yy = 0x0, this.xx = 0x0, this.topy = this.yy + 0x78, this.bottomy = this.yy + 0xfa;
    }
    ["userEvent5"]() {
      this.target === 0x0 && Ig.hp[0x1] <= Ig.maxhp[0x1] / 0x2 && (this.damage = oZ(Ig.hp[0x1] / 0x3)), oV('scr_damage').call(this);
    }
    ["step"]() {
      this.lcon === 0x1 && (this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.ltimer = 0x0, this.shrinktimer = 0x0, this.lcon = 1.5), this.lcon === 1.5 && (this.ltimer += 0x1, this.ltimer >= 0xa && (this.ltimer = 0x0, this.lcon = 0x2, oV('snd_play').call(this, 'snd_cardrive'))), this.lcon >= 0x6 && this.lcon < 0xa && (this.btimer += 0x1, this.btimer >= 0xa && (this.xoff = oy(0x28, this.image_angle - 0x14), this.yoff = om(0x28, this.image_angle - 0x14), oV('snd_play').call(this, 'snd_spearrise'), this.bullet = oV('instance_create').call(this, this.x - this.xoff, this.y - this.yoff, I3), oD(this.bullet, PV => {
        PV.target = MO('obj_lancerbike').target, PV.damage = MO('obj_lancerbike').damage, PV.target === 0x0 && Ig.hp[0x1] <= Ig.maxhp[0x1] / 0x2 && (PV.damage = oZ(Ig.hp[0x1] / 0x3)), PV.timepoints = 0x0, PV.sprite_index = 'spr_spadebullet', PV.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x4), PV.image_angle = PV.direction, PV.friction = -0.4;
      }), this.bullet.depth = this.depth + 0x1, this.btimer = 0x0)), this.lcon === 0x2 && (this.ltimer += 0x1, this.shrinktimer += 0x1, this.hspeed = IU(this.ltimer / 0x3) * 0x5, this.image_yscale = 0x2 - IU(this.ltimer / 0x5) * 0x1, this.shrinktimer > 0x4 && (this.image_yscale = 0x2 - IU(this.ltimer / 0x5) * 0x1 * (0x8 / this.shrinktimer)), this.ltimer > 0x7 && (this.image_angle -= IL(IU(this.ltimer / 0x5)) * 0x4, this.ang = -this.image_angle), this.ltimer > 0x4 && IL(IU(this.ltimer / 0x5)) <= 0.06 && (this.lcon = 0x5, this.image_yscale = 0x2, this.direction = 0xb4, this.speed = 0x4)), this.lcon === 0x5 && (this.speed < 0x10 && (this.speed += 0x2), this.ang < 0x2d && (this.ang += 0x4), this.image_angle = -this.ang, this.x < 0x50 && (this.lcon = 0x6)), this.lcon === 0x6 && (this.ang < 0x87 && (this.ang += 0xa), this.image_angle = -this.ang, this.x <= 0x5 && (this.lcon = 0x7, this.direction = 0x5a)), this.lcon === 0x7 && (this.y < 0x50 ? (this.ang < 0xe1 && (this.ang += 0xa), this.y <= 0x5 && (this.direction = 0x0, this.lcon = 0x8)) : this.ang < 0x87 && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0x8 && (this.x >= 0x21c ? (this.ang < 0x13b && (this.ang += 0xa), this.x >= 0x276 && (this.direction = 0x10e, this.lcon = 0x9)) : this.ang < 0xe1 && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0x9 && (this.y > this.ory - 0x46 ? (this.ang < 0x168 && (this.ang += 0xa), this.y >= this.ory - 0x5 && (this.y = this.ory, this.direction = 0xb4, this.lcon = 0xa)) : this.ang < 0x13b && (this.ang += 0xa), this.image_angle = -this.ang), this.lcon === 0xa && (this.ang = 0x0, this.image_angle = 0x0, this.x <= this.orx && (this.speed = 0x0, this.x = this.orx, this.lcon = 0xb, this.ltimer = 0x0)), this.lcon === 0xb && (this.sprite_index = 'spr_lancerbike_l', this.ltimer += 0x1, this.ltimer >= 0x19 && (oW.with('obj_regularbullet', PV => {
        PV.active = 0x0, PV.image_alpha -= 0.2;
      }), this.image_alpha = 0x1), this.ltimer >= 0x1e && (this.lcon = 0x0, this.endcon = 0x1)), this.racecon === 0x1 && (this.sy = 0x0, this.s_moveup = 0x0, Ix(IJ(IX)) ? (this.s = MO('obj_susieandlancer_event').s, this.sy = this.s.y, this.s_moveup = 0x1) : Ix(IJ(jG)) && (this.s = MO('obj_susieenemy'), this.sy = this.s.y, this.s_moveup = 0x1), this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.racecon = 0x2, this.vspeed = -0xe * oI(0x1, -0x1), this.rtimer = 0x0, this.maxr = 0xf + o7(0x19)), this.racecon === 0x2 && (this.s_moveup === 0x1 && this.s.y > -0x14 && (this.s.y -= 0xa), this.y < this.topy + 0xa && (this.vspeed = 0xc), this.y > this.bottomy - 0xa && (this.vspeed = -0xc), this.rtimer += 0x1, this.rtimer > this.maxr && (this.vspeed = 0x0, this.racecon = 0x3, this.rtimer = 0x0)), this.racecon === 0x3 && (this.rtimer += 0x1, (this.rtimer === 0x5 || this.rtimer === 0xa) && (oV('snd_play').call(this, 'snd_lancerhonk'), this.honkimg = oV('instance_create').call(this, this.x - 0x3c, this.y - 0x28, EX), oD(this.honkimg, PV => {
        PV.sprite_index = 'spr_lancernoise';
      })), this.rtimer >= 0x19 && (oV('snd_play').call(this, 'snd_drive'), this.racecon = 0x4, this.hspeed = -0x14, this.rtimer = 0x0, this.ang = 0x0)), this.racecon === 0x4 && (this.s_moveup === 0x1 && (this.s.y += 0xa, this.s.y >= this.sy && (this.s.y = this.sy, this.s_moveup = 0x0)), this.rtimer += 0x1, this.ang += this.rtimer * 0x2 + 0x4, this.ang > 0x32 && (this.ang = 0x32), this.image_angle = -this.ang, this.x <= -0x28 && (this.ang = 0x0, this.image_angle = 0x0, this.x = 0x2e4, this.y = this.ory, this.hspeed = -0xc, this.racecon = 0x5)), this.racecon === 0x5 && this.x <= this.orx + 0x5 && (this.hspeed = 0x0, this.x = this.orx, this.racecon = 0x0, this.endcon = 0x1), this.endcon === 0x1 && (Ig.turntimer = 0x2, oW.with('obj_lancerboss', PV => {
        PV.visible = 0x1, PV.turns >= 0x4 && (PV.con = 0x1, oW.with('obj_battlecontroller', PD => {
          PD.noreturn = 0x1;
        }));
      }), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x1;
      }), this.instance_destroy()), oW.with('obj_lancerboss', PV => {
        PV.compliment >= 0x3 && oW.with('obj_dmgwriter', PD => {
          PD.spec = 0x1;
        });
      });
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yV, 'obj_lancerbike'), oA(yV, 'kinds', oM('obj_lancerbike', I3)), oA(yV, 'defaultDepth', -0x14), oA(yV, 'defaultSprite', 'spr_lancerbike');
var yD = yV,
  yY = class rK extends I3 {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0x4, this.timepoints = 0x0, this.target = 0x0, this.dont = 0x1, this.inv = 0x3c, this.damage = 0x14, this.spec = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.loop = 0x0, this.lcon = 0x0, this.flip = 0x0, this.ltimer = 0x0, this.btimer = 0x0, this.racecon = 0x0, this.topy = 0x64, this.bottomy = 0x12c, this.susiex = this.x - 0x64, this.susiey = this.y - 0xb4, Ix(IJ(jG)) && (this.susiex = MO('obj_susieenemy').x, this.susiey = MO('obj_susieenemy').y), this.s_tracking = 0x0, this.s_attack = 0x0, this.s_timer = 0x0, this.type = 0x0;
    }
    ["userEvent5"]() {
      oV('scr_damage').call(this);
    }
    ["step"]() {
      this.racecon === 0x0 && (this.orx = this.x, this.ory = this.y, this.ang = 0x0, this.vdir = oI(0x1, -0x1), this.racecon = 0x1, this.rtimer = 0x0, oW.with('obj_susieenemy', PV => {
        PV.visible = 0x0;
      }), this.s = oV('instance_create').call(this, this.susiex, this.susiey, I4), oV('scr_bullet_inherit').call(this, this.s), this.s.wall_destroy = 0x0, this.s.sprite_index = 'spr_susiel_dark', this.s.image_xscale = 0x2, this.s.image_yscale = 0x2, this.s.active = 0x1, this.s.depth = this.depth - 0x1, this.s.image_speed = 0x0, this.s.image_index = 0x1, this.s.lx = this.x, this.s.ly = this.y - 0x6c, oV('snd_play').call(this, 'snd_jump'), oD(this.s, PV => {
        PV.hspeed = -0x2, PV.vspeed -= 0x7, PV.gravity = 0x1;
      })), this.racecon === 0x1 && (this.siner = 0x0, this.rtimer += 0x1, this.rtimer === 0xd && (oV('snd_stop').call(this, 'snd_jump'), oV('snd_play').call(this, 'snd_splat')), this.rtimer >= 0xd && (this.image_xscale += 0.1, this.image_yscale -= 0.15), this.rtimer === 0x10 && (oD(this.s, PV => {
        PV.speed = 0x0, PV.gravity = 0x0, PV.image_index = 0x0;
      }), this.sfitx = this.s.x - this.x, this.sfity = this.s.y - this.y, this.s_tracking = 0x1, this.ax_timer = 0x0, this.s_timer = 0x0, this.racecon = 0x2, this.rtimer = 0x0)), this.s_attack === 0x1 && (this.ax_timer += 0x1, this.s_timer += 0x1, this.s_timer === 0x1 && (this.axe = oV('instance_create').call(this, this.s.x - 0x28, this.s.y - 0xf, ow), oV('scr_bullet_inherit').call(this, this.axe), this.axe.depth = this.depth + 0x2, oD(this.axe, PV => {
        PV.hspeed = -0x10, MO('obj_heart').y >= PV.y ? (PV.gravity_direction = -0xf + o7(0xa), PV.vspeed = 0x2) : (PV.gravity_direction = 0x5 + o7(0xa), PV.vspeed = -0x2), PV.gravity = 0.5;
      }), this.axe.hspeed += 0.3 * this.ax_timer, oV('snd_play').call(this, 'snd_laz_c'), this.s.sprite_index = 'spr_susie_enemy_attack', this.s.active = 0x0, this.s.image_index = 0x0, this.s.image_speed = 0.5), this.s_timer === 0x4 && (this.s.active = 0x0), this.s_timer === 0x8 && (this.s.image_speed = 0x0), this.s_timer === 0x8 && this.ax_timer <= 0x3c && (this.s_timer = 0x0)), this.racecon === 0x2 && (this.rtimer += 0x1, this.rtimer >= 0x1 && (this.y <= this.ory - 0x78 || this.y >= this.ory + 0x78) && (this.y <= this.ory - 0x78 && this.vspeed < 0x0 && (this.vspeed = -this.vspeed), this.y >= this.ory + 0x78 && this.vspeed > 0x0 && (this.vspeed = -this.vspeed)), (this.rtimer === 0x5 || this.rtimer === 0xa) && (this.vspeed = 0x0, oV('snd_play').call(this, 'snd_lancerhonk'), this.honkimg = oV('instance_create').call(this, this.x - 0x3c, this.y - 0x28, EX), oD(this.honkimg, PV => {
        PV.sprite_index = 'spr_lancernoise';
      })), this.rtimer === 0x1e && (this.active = 0x1, this.s_attack = 0x1, this.racecon = 0x3, this.rtimer = 0x0, this.ang = 0x0, oV('snd_play').call(this, 'snd_drive'), this.hspeed = -0xa, this.vspeed = -0xb, this.gravity = 0.5)), this.racecon === 0x3 && (this.rtimer += 0x1, this.x <= -0x28 && (this.speed = 0x0, this.gravity = 0x0, this.friction = 0x0, this.s_attack = 0x0, this.s_tracking = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.x = 0x2e4, this.y = this.ory, this.s.x = this.susiex + 0xc8, this.s.hspeed = -0x8, this.s.y = this.susiey, this.s.sprite_index = 'spr_susie_enemy', this.hspeed = -0x6, this.racecon = 0x4)), this.racecon === 0x4 && (this.donecount = 0x0, this.s.x <= this.susiex && (this.donecount += 0x1, this.s.hspeed = 0x0, this.s.x = this.susiex), this.x <= this.orx + 0x5 && (this.donecount += 0x1, this.hspeed = 0x0, this.x = this.orx), this.donecount >= 0x2 && (Ig.turntimer = 0x5, oW.with('obj_susieenemy', PV => {
        PV.visible = 0x1;
      }), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x1;
      }), this.racecon = -0x1)), this.s_tracking === 0x1 && (this.s.x = this.x + this.sfitx, this.s.y = this.y + this.sfity);
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yY, 'obj_lancerbike_neo'), oA(yY, 'kinds', oM('obj_lancerbike_neo', I3)), oA(yY, 'defaultDepth', -0x14), oA(yY, 'defaultSprite', 'spr_lancerbike');
var yw = yY,
  yp = class rk extends I4 {
    ["create"]() {
      this.grazed = 0x0, this.grazepoints = 0xf, this.timepoints = 0x0, this.target = 0x0, this.inv = 0x78, this.damage = 0x7c, this.active = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_angle = o7(0x168), this.rotspeed = 0xe, this.vspeed = 0x5, this.mask_index = 'spr_joker_scythebody_mask', this.gravity = 0x1, this.explode = 0x0, this.explodetimer = 0x0, this.remrot = this.image_angle, this.remy = this.y, this.remx = this.x, this.scale = 0x2;
    }
    ["draw"](PV) {
      this.explode < 0x2 && PV.draw_sprite_ext('spr_joker_scythebody', this.image_index, this.remx, this.remy, this.scale, this.scale, this.remrot, o4.white, 0x1), this.explode >= 0x1 && this.draw_self();
    }
    ["userEvent5"]() {
      if (this.active === 0x1 && Ig.inv < 0x0) {
        for (oV('instance_create').call(this, 0x0, 0x0, Id), oV('snd_stop').call(this, 'snd_hurt1'), oV('snd_play').call(this, 'snd_hurt1'), Ig.inv = Ig.invc * 0x28, this.i = 0x0; this.i < 0x3; this.i += 0x1) (this.temphp ??= [])[this.i] = Ig.hp[Ig.char[this.i]], this.temphp[this.i] < 0x0 && ((this.temphp ??= [])[this.i] = 0x0);
        if (oZ(this.temphp[0x0] + this.temphp[0x1] + this.temphp[0x2]) / 0x3 >= 0xa) {
          for (this.i = 0x0; this.i < 0x3; this.i += 0x1) this.temphp[this.i] > 0x0 && ((Ig.hp ??= [])[Ig.char[this.i]] = oZ(Ig.hp[Ig.char[this.i]] * 0.7));
        } else oV('scr_damage_all').call(this);
      }
    }
    ["step"]() {
      this.explode === 0x0 && (this.remx = this.x, this.remy = this.y, this.image_angle += this.rotspeed, this.remrot = this.image_angle), this.y >= MC - 0x64 && this.explode === 0x0 && (o2('snd_scytheburst'), oV('snd_play').call(this, 'snd_scytheburst'), this.remx = this.x, this.remy = this.y, this.explode = 0x1, this.explodetimer = 0x0, this.remrot = this.image_angle, this.image_angle = 0x0, this.speed = 0x0, this.gravity = 0x0, this.mask_index = 'spr_tallpx', this.sprite_index = 'spr_tallpx', this.grazed = 0x0, this.y = 0x0, this.depth += 0x1), this.explode === 0x1 && (this.active = 0x0, this.image_xscale += 0x8, this.image_xscale >= 0x10 && (this.active = 0x1), this.image_xscale >= 0x20 && (this.explode = 0x2)), this.explode === 0x2 && (this.image_xscale -= 0x4, this.image_xscale <= 0x10 && (this.image_alpha -= 0.25, this.active = 0x0), this.image_xscale <= 0x0 && this.instance_destroy()), this.grazed === 0x1 && (oW.with('obj_dbulletcontroller', PV => {
        PV.made += 0.2;
      }), this.grazed = 0x2);
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yp, 'obj_laserscythe'), oA(yp, 'kinds', oM('obj_laserscythe', I4)), oA(yp, 'defaultDepth', -0x5), oA(yp, 'defaultSprite', 'spr_joker_scythebody');
var yC = yp,
  yn = class rW extends o8 {
    ["userEvent5"]() {
      this.active === 0x1 && (oV('snd_stop').call(this, 'snd_hurt1'), oV('snd_play').call(this, 'snd_hurt1'), this.target !== 0x3 && oV('scr_damage').call(this), this.target === 0x3 && oV('scr_damage_all_overworld').call(this), oW.with('obj_darkcontroller', PV => {
        PV.charcon = 0x1;
      }), Ig.interact = 0x1, oW.with('obj_mainchara', PV => {
        (PV.alarm ??= [])[0x1] = 0x7;
      }));
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yn, 'obj_overworldbulletparent'), oA(yn, 'kinds', oM('obj_overworldbulletparent', o8)), oA(yn, 'defaultDepth', 0x0);
var yO = yn,
  yc = class rZ extends yO {
    ["collide_obj_mainchara"](PV) {
      this.active === 0x1 && Ig.interact === 0x0 && this.event_user(0x5);
    }
    ["create"]() {
      this.active = 0x0, this.image_alpha = 0x0, this.timer = 0x0, this.damage = oZ(Ig.maxhp[0x1] / 0x6), this.target = 0x3, Mc === 'room_field_checkers4' && (this.x += 0x2);
    }
    ["userEvent5"]() {
      this.active === 0x1 && Ig.interact === 0x0 && (Ig.interact = 0x1, oV('snd_play').call(this, 'snd_boost'), oW.with('obj_ob_gen', PV => {
        PV.whitetimer = 0x0, PV.whitecon = 0x1;
      }));
    }
    ["step"]() {
      Ig.interact === 0x0 && (this.timer += 0x1), this.timer >= 0x0 && this.timer <= 0xa && (this.image_alpha = this.timer / 0xa), this.timer === 0xa && (this.active = 0x1), this.timer >= 0x14 && (this.image_alpha = 0x3 - this.timer / 0xa, this.active = 0x0, this.image_alpha <= 0x0 && (Mc === 'room_field_checkers1' && (this.x -= 0x50), Mc === 'room_field_checkers4' && (this.x -= 0x28, this.y += 0x28, this.y >= 0x15e && (this.y = 0xf0, this.x += 0x78)), Mc === 'room_field_checkers6' && (this.x -= 0x28, this.y += 0x28, this.y >= 0x136 && (this.y = 0xf0, this.x += 0x50)), this.timer = -0xa, Mc === 'room_field_checkers6' && (this.timer = -0x6), Mc === 'room_field_checkers4' && (this.timer = -0x4), this.image_alpha = 0x0)), this.x < 0x1f4 && this.instance_destroy();
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(yc, 'obj_ob_checkertile'), oA(yc, 'kinds', oM('obj_ob_checkertile', yO)), oA(yc, 'defaultDepth', 0x30d40), oA(yc, 'defaultSprite', 'spr_checkertile_bullet'), oA(yc, 'defaultMask', 'spr_checkertile_bullet_mask');
var yN = yc,
  yg = class rq extends yO {
    ["create"]() {
      this.active = 0x0, this.image_alpha = 0x0, this.timer = 0x0, this.damage = 0x12, this.target = 0x0;
    }
    ["step"]() {
      this.timer += 0x1, this.timer >= 0x2 && (this.image_alpha - 0x1 < -0.00001 && (this.image_alpha += 0.1), Math.abs(this.image_alpha - 0x1) < 0.00001 && (this.active = 0x1)), Mc === 'room_dark_chase2' ? (this.x > 0x2a8 && this.instance_destroy(), this.x < -0x28 && this.instance_destroy()) : (Mc === 'room_dark_chase1' && (this.x >= 0x320 && (this.x -= 0x384), this.x <= -0xc8 && (this.x += 0x384)), this.y > 0x258 && this.instance_destroy(), this.y < -0x320 && this.instance_destroy());
    }
  };
oH(yg, 'obj_overworld_spade'), oA(yg, 'kinds', oM('obj_overworld_spade', yO)), oA(yg, 'defaultDepth', 0xa), oA(yg, 'defaultSprite', 'spr_spadebullet');
var yB = yg,
  yL = class ru extends yO {
    ["create"]() {
      this.active = 0x0, this.image_alpha = 0x0, this.timer = 0x0, this.damage = 0x14, this.target = 0x0;
    }
    ["step"]() {
      this.timer += 0x1, this.timer >= 0x2 && (this.image_alpha - 0x1 < -0.00001 && (this.image_alpha += 0.1), this.image_alpha - 0x1 >= -0.00001 && (this.active = 0x1)), this.timer === 0x2 && (this.move_towards_point(MO('obj_mainchara').x + 0x14, MO('obj_mainchara').y + 0x32, 0x8), this.image_angle = this.direction), this.x >= 0x320 && this.instance_destroy(), this.x <= -0xc8 && this.instance_destroy(), this.y > 0x258 && this.instance_destroy(), this.y < -0x258 && this.instance_destroy();
    }
  };
oH(yL, 'obj_overworld_spade_homing'), oA(yL, 'kinds', oM('obj_overworld_spade_homing', yO)), oA(yL, 'defaultDepth', 0xa), oA(yL, 'defaultSprite', 'spr_spadebullet');
var yU = yL,
  yf = class rH extends I2 {
    ["create"]() {
      this.difficulty = 0x1, this.times = 0x0, this.activetimer = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x7c, this.active = 0x0, this.image_alpha = 0x0, this.image_speed = 0x0, Ix(IJ(yH)) || this.instance_destroy(), this.jumpsiner = o7(0x64), this.hspeed = -0x3 - o7(0x1), this.jumpspeed = 0x8 + o7(0x4), this.jumpheight = 0x32 + o7(0xa), this.image_xscale = 0x2, this.image_yscale = 0x2;
    }
    ["step"]() {
      this.jumpsiner += 0x1, this.image_alpha - 0x1 < -0.00001 && this.active === 0x0 ? this.image_alpha += 0.1 : this.active = 0x1, this.bottomy = MO('obj_battlesolid').y + MO('obj_battlesolid').sprite_height / 0x2 - 0x14, this.jsine = IU(this.jumpsiner / this.jumpspeed) * this.jumpheight, this.y = this.bottomy + this.jsine - this.jumpheight, this.image_speed = 0x0, this.image_index = 0x1, this.jsine > 0x0 && (this.image_index = 0x2), this.jsine > this.jumpheight / 0x2 && (this.image_index = 0x0), this.x <= MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 - 0x28 && (this.image_alpha -= 0.1);
    }
  };
oH(yf, 'obj_rabbitbullet'), oA(yf, 'kinds', oM('obj_rabbitbullet', I2)), oA(yf, 'defaultDepth', -0x14), oA(yf, 'defaultSprite', 'spr_rabbitbullet');
var yx = yf,
  yF = class rG extends I2 {
    ["create"]() {
      this.image_xscale = 0x0, this.image_yscale = 0x0, this.active = 0x0, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x5, this.target = 0x0, this.dont = 0x1, this.inv = 0x78, this.damage = 0x1, this.active = 0x0, this.image_alpha = 0x0, this.y < 0x32 && (this.y = 0x32), this.g = oV('instance_create').call(this, this.x, this.y, EX), this.g.sprite_index = 'spr_smallbullet_outline', this.g.image_alpha = 1.4, this.g.xrate = 0.25, this.g.yrate = 0.25, this.g.image_xscale = 0x0, this.g.image_yscale = 0x0, this.special = 0x0, (this.alarm ??= [])[0x0] = 0x14;
    }
    ["step"]() {
      this.image_xscale - 0x1 <= 0.00001 && (this.image_yscale += 0.2, this.image_xscale += 0.2, this.image_alpha += 0.2, this.image_xscale - 0x1 >= -0.00001 && (this.active = 0x1)), oV('scr_destroyoutside').call(this);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x0) {
        Ix(IJ(yH)) && (this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x6), this.special === 0x1 && (this.speed = -this.speed));
        return;
      }
      return super.alarmEvent?.(PV);
    }
  };
oH(yF, 'obj_ralseibullet'), oA(yF, 'kinds', oM('obj_ralseibullet', I2)), oA(yF, 'defaultDepth', 0x0), oA(yF, 'defaultSprite', 'spr_smallbullet');
var yJ = yF,
  yQ = class rA extends I2 {
    ["create"]() {
      this.sons = -0x1, this.damage = 0x64, this.active = 0x1, this.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0x1), this.friction = -0.3, this.timer = 0x0, this.con = 0x0, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x3, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.soundcon = 0x0, oV('snd_play').call(this, 'snd_menumove');
    }
    ["draw"](PV) {
      this.draw_self(), this.can = 0x0, this.y < -0x14 && (this.can = 0x1), this.x < -0x14 && (this.can = 0x1), this.x > 0x294 && (this.can = 0x1), this.can === 0x1 && (PV.draw_set_color(o4.red), PV.draw_line(this.x, this.y, this.x + oy(0x3e8, this.direction), this.y + om(0x3e8, this.direction))), this.can === 0x0 && this.soundcon === 0x0 && (oV('snd_play').call(this, 'snd_spearrise'), this.soundcon = 0x1);
    }
    ["step"]() {
      this.image_angle = this.direction, this.con === 0x0 && (this.timer += 0x1, this.timer >= 0x2 && (this.sons += 0x1, (this.son ??= [])[this.sons] = oV('instance_create').call(this, this.x, this.y, yP), this.son[this.sons].image_angle = this.image_angle, this.son[this.sons].direction = this.direction, this.son[this.sons].speed = this.speed / 2.5, this.son[this.sons].active = 0x1, this.son[this.sons].damage = 0xa, oV('scr_bullet_inherit').call(this, this.son[this.sons]), this.timer = 0x0)), this.sons >= 0x1e && this.instance_destroy();
    }
  };
oH(yQ, 'obj_skychain'), oA(yQ, 'kinds', oM('obj_skychain', I2)), oA(yQ, 'defaultDepth', 0x0), oA(yQ, 'defaultSprite', 'spr_chainfront');
var yl = yQ,
  yT = class rd extends I0 {
    ["create"]() {
      this.ringno = 0x0, this.maxspade = 0x8, this.t = 0x0, this.con = 0x0, this.startspade = 0x0, this.spadet = 0x0, this.startang = o7(0x168), this.grav = 0.2, this.size = 0x1, this.special = 0x0, this.side = 0x0;
    }
    ["step"]() {
      if (this.t === 0x0) {
        for (this.size > 0x1 && (this.startang = -o7(0xb4)), this.i = 0x0; this.i < this.maxspade; this.i += 0x1) this.spadeang = 0x168 / this.maxspade * this.i + this.startang, this.side === 0x1 && (this.spadeang = -this.spadeang), this.spadex = oy(0x12c, this.spadeang + 0xb4), this.spadey = om(0x12c, this.spadeang + 0xb4), (this.spade ??= [])[this.i] = oV('instance_create').call(this, this.spadex + MO('obj_battlesolid').x, this.spadey + MO('obj_battlesolid').y, I2), oV('scr_bullet_inherit').call(this, this.spade[this.i]), this.spade[this.i].sprite_index = 'spr_spadebullet', this.spade[this.i].image_alpha = 0x0, this.spade[this.i].active = 0x1, this.spade[this.i].image_blend = o4.ltgray, this.spade[this.i].direction = this.spadeang, this.spade[this.i].image_angle = this.spadeang, this.spade[this.i].speed = 0x1a, this.spade[this.i].image_xscale = this.size, this.spade[this.i].image_yscale = this.size;
      }
      if (this.t >= 0x1 && this.t < 0xf) {
        for (this.i = 0x0; this.i < this.maxspade; this.i += 0x1) oD(this.spade[this.i], PV => {
          PV.speed *= 0.87, PV.image_alpha += 0.1;
        });
      }
      if (this.t === 0xf) {
        for (this.i = 0x0; this.i < this.maxspade; this.i += 0x1) oD(this.spade[this.i], PV => {
          PV.speed = 0x0, PV.image_alpha += 0.1;
        });
      }
      this.t >= 0xf && this.con === 0x0 && (this.spadet += 0x1, this.special === 0x1 && (this.spadet += 0x6), this.spadet >= 0x4 && (oD(this.spade[this.startspade], PV => {
        PV.image_blend = o4.white, PV.gravity_direction = PV.direction, PV.speed = -3.4;
      }), this.spade[this.startspade].gravity = this.grav, this.startspade += 0x1, this.startspade >= this.maxspade && (this.con = 0x1, this.instance_destroy()), this.spadet = 0x0)), this.t += 0x1;
    }
  };
oH(yT, 'obj_spadering'), oA(yT, 'kinds', oM('obj_spadering', I0)), oA(yT, 'defaultDepth', 0x0), oA(yT, 'defaultSprite', 'spr_diamondbullet'), oA(yT, 'defaultVisible', !0x1);
var E0 = yT,
  E1 = class rS extends I4 {
    ["create"]() {
      this.con = 0x0, this.htimer = 0x0, this.image_xscale = 0x4, this.image_yscale = 0x4, this.active = 0x0, this.image_alpha = 0x0, this.x = MO('obj_heart').x + 0x8, this.y = MO('obj_heart').y + 0x8, this.image_angle = -0x5a, this.joker = 0x0, this.damage = 0x64, this.grazed = 0x0, this.grazepoints = 0x5, this.timepoints = 0x0, this.inv = 0x3c, this.grazetimer = 0x0;
    }
    ["step"]() {
      this.con === 0x4 && (this.htimer += 0x1, this.htimer >= 0xa && (this.friction = 0x0, this.speed = 0x0), this.htimer >= 0x14 && (this.active = 0x0, this.image_alpha -= 0.2), this.htimer >= 0x19 && Ig.turntimer >= 0x0 && (Ig.turntimer = -0x2)), this.con === 0x3 && (this.htimer += 0x1, this.htimer >= this.hmax && (this.direction = this.image_angle, this.speed = 2.5, this.friction = -0.5, this.joker === 0x1 && (this.speed = 0x5), this.con = 0x4, this.htimer = 0x0)), this.con === 0x2 && (this.htimer += 0x1, this.image_angle += 0x18, this.htimer >= this.spinmax && (this.hmax = 0x13, this.joker === 0x1 && (this.hmax = 0xf), this.image_angle = 0x10e + this.spinmax * 0x18, this.con = 0x3, this.htimer = 0x0)), this.con === 0x1 && (this.htimer += 0x1, this.htimer >= 0xa && (this.spinmax = oI(26.25, 0x1e, 33.75, 37.5), this.joker === 0x1 && (this.spinmax = 0xf + o7(0xf)), this.con = 0x2, this.htimer = 0x0)), this.con === 0x0 && (this.image_alpha += 0.2, this.image_xscale -= 0.2, this.image_yscale -= 0.2, this.htimer += 0x1, this.htimer >= 0x5 && (this.con = 0x1, this.htimer = 0x0, this.active = 0x1)), this.grazed === 0x1 && (this.grazetimer += 0x1), this.grazetimer >= 0xf && (this.grazetimer = 0x0, this.grazed = 0x0);
    }
  };
oH(E1, 'obj_spinheart'), oA(E1, 'kinds', oM('obj_spinheart', I4)), oA(E1, 'defaultDepth', 0x0), oA(E1, 'defaultSprite', 'spr_spinheart'), oA(E1, 'defaultMask', 'spr_spinheartmask');
var E2 = E1,
  E3 = class rR extends I0 {
    ["create"]() {
      this.visible = 0x0, this.type = oI(0x0, 0x1, 0x2, 0x3), this.y = -0x50, this.image_xscale = 0x2, this.image_yscale = 0x2, this.con = 0x0, this.timer = 0x0, this.image_speed = 0x0, this.vspeed = 0xa, this.maxtimer = 0x14 + o7(0x10), this.explodedraw = 0x0;
    }
    ["draw"](PV) {
      this.con < 0x2 && this.draw_self(), this.con >= 0x2 && (this.explodedraw += 0x1, PV.draw_set_color(o4.white), PV.draw_set_alpha(1.5 - this.explodedraw / 0xa), PV.draw_circle(this.x, this.y, this.sprite_width / 0x2 + this.explodedraw * 0x2, 0x0), PV.draw_set_alpha(0x1));
    }
    ["step"]() {
      if (this.con === 0x0 && (this.type === 0x0 && (this.sprite_index = 'spr_bomb_spade'), this.type === 0x1 && (this.sprite_index = 'spr_bomb_diamond'), this.type === 0x2 && (this.sprite_index = 'spr_bomb_heart'), this.type === 0x3 && (this.sprite_index = 'spr_bomb_club'), this.visible = 0x1, this.con = 0x1), this.con === 0x1 && (this.timer += 0x1, this.timer >= 0xa && (oW.with('obj_joker', PV => {
        PV.beepnoise = 0x1;
      }), this.image_speed = this.timer / this.maxtimer), this.timer >= this.maxtimer && (this.con = 0x2, this.timer = 0x0, this.speed = 0x0)), this.con === 0x2) {
        if (oW.with('obj_joker', PV => {
          PV.burstnoise = 0x1;
        }), this.type === 0x0) {
          for (this.dir = o7(0x168), this.maxe = 0xc, this.i = 0x0; this.i < 0xc; this.i += 0x1) (this.spade ??= [])[this.i] = oV('instance_create').call(this, this.x, this.y, I3), oV('scr_bullet_inherit').call(this, this.spade[this.i]), this.spade[this.i].active = 0x1, this.spade[this.i].direction = this.dir + this.i * (0x168 / this.maxe), this.spade[this.i].speed = 0x8, this.spade[this.i].image_angle = this.spade[this.i].direction, this.spade[this.i].sprite_index = 'spr_spadebullet';
          this.con = 0x3;
        }
        if (this.type === 0x1) {
          for (this.i = 0x0; this.i < 0x3; this.i += 0x1) (this.diamond ??= [])[this.i] = oV('instance_create').call(this, this.x, this.y, I3), this.diamond[this.i].damage = 0x64, oV('scr_bullet_inherit').call(this, this.diamond[this.i]), oD(this.diamond[this.i], PV => {
            PV.move_towards_point(MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8, 0xb);
          }), this.diamond[this.i].speed -= this.i, this.diamond[this.i].image_angle = this.diamond[this.i].direction, this.diamond[this.i].sprite_index = 'spr_diamondbullet';
          this.con = 0x3;
        }
        if (this.type === 0x2 && (this.h = oV('instance_create').call(this, this.x, this.y, yA), oV('scr_bullet_inherit').call(this, this.h), this.con = 0x3), this.type === 0x3) {
          for (this.dir = oX(this.x, this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8), this.i = 0x0; this.i < 0x3; this.i += 0x1) (this.club ??= [])[this.i] = oV('instance_create').call(this, this.x, this.y, I3), this.club[this.i].sprite_index = 'spr_clubsbullet', this.club[this.i].damage = 0x64, oV('scr_bullet_inherit').call(this, this.club[this.i]), this.club[this.i].active = 0x1, this.club[this.i].direction = this.dir - 0x14 + this.i * 0x14, this.club[this.i].image_angle = this.club[this.i].direction, this.club[this.i].speed = 0x8;
          this.con = 0x3;
        }
      }
      this.explodedraw >= 0x28 && this.instance_destroy();
    }
  };
oH(E3, 'obj_suitbomb'), oA(E3, 'kinds', oM('obj_suitbomb', I0)), oA(E3, 'defaultDepth', 0x0), oA(E3, 'defaultSprite', 'spr_suitsbomb');
var E4 = E3,
  E5 = class rv extends I0 {
    ["create"]() {
      for (this.direction = 0xb4, this.speed = 0xa, this.image_angle = 0xb4, this.chaincon = 0x0, this.sons = -0x1, this.timer = 0x0, this.t = 0x0, this.tmax = 0xdc, this.initkingx = MO('obj_chainking').x, this.initkingy = MO('obj_chainking').y, this.initboxx = MO('obj_nonsolid_growtangle').x, this.initboxy = MO('obj_nonsolid_growtangle').y, this.i = 0x0; this.i < 0x28; this.i += 0x1) (this.kingx ??= [])[this.i] = 0x0, (this.kingy ??= [])[this.i] = 0x0;
      this.siner = 0x0, this.btimer = 0x14, this.bgap = 0x0, this.type = 0x0, this.wavefactor = 0x1, this.inv = 0x3c, this.timepoints = 0x0, this.grazepoints = 0x6, this.target = 0x0, this.damage = 0x32, this.grazed = 0x0, this.grazetimer = 0x0, this.chain_noise = 0x0;
    }
    ["step"]() {
      if (this.chaincon === 0x0 && (this.chain_noise === 0x0 && (this.chain_noise = 0x1, this.chainsnd = oV('snd_loop').call(this, 'snd_chain_extend')), this.sons += 0x1, (this.son ??= [])[this.sons] = oV('instance_create').call(this, this.x, this.y, oQ), this.x <= MO('obj_nonsolid_growtangle').x && (oV('snd_stop').call(this, this.chainsnd), oV('snd_play').call(this, 'snd_locker'), oV('snd_play').call(this, 'snd_screenshake'), this.speed = 0x0, this.chaincon = 0x1, this.shakeamt = 0xc, this.remx = MO('obj_heart').x, this.remy = MO('obj_heart').y, this.remx_box = MO('obj_nonsolid_growtangle').x, this.remy_box = MO('obj_nonsolid_growtangle').y, this.chaincon = 2.1, oW.with('obj_growtangle', PV => {
        PV.megakeep = 0x1;
      }))), Math.abs(this.chaincon - 2.1) < 0.00001) {
        {
          let PV = this.remx;
          oW.with('obj_heart', PD => {
            PD.x = PV;
          });
        }
        {
          let PD = this.remy;
          oW.with('obj_heart', PY => {
            PY.y = PD;
          });
        }
        {
          let PY = this.remx_box;
          oW.with('obj_nonsolid_growtangle', Pw => {
            Pw.x = PY;
          });
        }
        {
          let Pw = this.remy_box;
          oW.with('obj_nonsolid_growtangle', Pp => {
            Pp.y = Pw;
          });
        }
        this.shakedir = o7(0x168), this.xshake = oy(this.shakeamt, this.shakedir), this.yshake = om(this.shakeamt, this.shakedir);
        {
          let Pp = this.xshake;
          oW.with('obj_heart', PL => {
            PL.x += Pp;
          });
        }
        {
          let PL = this.yshake;
          oW.with('obj_heart', PU => {
            PU.y += PL;
          });
        }
        {
          let PU = this.xshake;
          oW.with('obj_nonsolid_growtangle', Pf => {
            Pf.x += PU;
          });
        }
        {
          let Pf = this.yshake;
          oW.with('obj_nonsolid_growtangle', Px => {
            Px.y += Pf;
          });
        }
        this.shakeamt -= 0x2, this.shakeamt < 0x0 && (this.chaincon = 0x3);
      }
      if (this.chaincon === 0x3) {
        if (this.chain_noise === 0x1 && (this.chain_noise = 0x2, this.wavenoise = oV('snd_loop').call(this, 'snd_chain_wave')), this.type === 0x0) {
          this.siner += 0x1;
          {
            let Px = this.initkingy + IU(this.siner / 0xc) * 0x50;
            oW.with('obj_chainking', PF => {
              PF.y = Px;
            });
          }
          this.btimer += 0x1, this.btimer >= 0x14 && (this.regbul = oV('instance_create').call(this, -0x14, this.initboxy, I3), this.regbul.sprite_index = 'spr_spadebullet', this.regbul.hspeed = 0x4, oV('scr_bullet_inherit').call(this, this.regbul), this.btimer = 0x0), this.chain_noise === 0x2 && oV('snd_pitch').call(this, this.wavenoise, 0.8 - IU(this.siner / 0xc) / 0x2);
        }
        if (this.type === 0x1) {
          this.siner += 0x1;
          {
            let PF = this.initkingy + IU(this.siner / 0xa) * 0x50;
            oW.with('obj_chainking', PJ => {
              PJ.y = PF;
            });
          }
          this.btimer += 0x1, this.btimer >= 0x12 && (this.regbul = oV('instance_create').call(this, -0x14, this.initboxy, I3), this.regbul.sprite_index = 'spr_spadebullet', this.regbul.hspeed = 0x4, oV('scr_bullet_inherit').call(this, this.regbul), this.btimer = 0x0), this.chain_noise === 0x2 && oV('snd_pitch').call(this, this.wavenoise, 0.9 - IU(this.siner / 0xa) / 0x2);
        }
        if (this.type === 0x2) {
          this.siner += 0x1;
          {
            let PJ = this.initkingy + IU(this.siner / 0x9) * 0x50;
            oW.with('obj_chainking', PQ => {
              PQ.y = PJ;
            });
          }
          this.btimer += 0x1, this.btimer >= 0x10 && (this.regbul = oV('instance_create').call(this, -0x14, this.initboxy, I3), this.regbul.sprite_index = 'spr_spadebullet', this.regbul.hspeed = 0x4, oV('scr_bullet_inherit').call(this, this.regbul), this.btimer = 0x0), this.chain_noise === 0x2 && oV('snd_pitch').call(this, this.wavenoise, 0x1 - IU(this.siner / 0x9) / 0x2);
        }
        if (this.type === 0x3) {
          this.siner += 0x1;
          {
            let PQ = this.initkingy + IU(this.siner / 0x7) * 0x50 * this.wavefactor;
            oW.with('obj_chainking', rz => {
              rz.y = PQ;
            });
          }
          this.btimer += 0x1, this.btimer >= 0xe && (this.regbul = oV('instance_create').call(this, -0x14, this.initboxy, I3), this.regbul.sprite_index = 'spr_spadebullet', this.regbul.hspeed = 0x4, oV('scr_bullet_inherit').call(this, this.regbul), this.btimer = 0x0), this.chain_noise === 0x2 && oV('snd_pitch').call(this, this.wavenoise, 0x1 - IU(this.siner / 0x7) / 0x2);
        }
      }
      if (Ix(IJ(oF))) {
        for ((this.kingx ??= [])[0x0] = MO('obj_chainking').x - this.initkingx, (this.kingy ??= [])[0x0] = MO('obj_chainking').y - this.initkingy, this.i = 0x28; this.i > 0x0; this.i -= 0x1) (this.kingx ??= [])[this.i] = this.kingx[Math.trunc(this.i - 0x1)], (this.kingy ??= [])[this.i] = this.kingy[Math.trunc(this.i - 0x1)];
        for (this.i = 0x0; this.i <= this.sons; this.i += 0x1) this.son[this.i].x = this.kingx[this.i] + this.son[this.i].xstart, this.son[this.i].y = this.kingy[this.i] + this.son[this.i].ystart;
        if (this.chaincon >= 0x3) {
          this.x = this.son[this.sons].x, this.y = this.son[this.sons].y;
          {
            let rz = this.kingx[this.sons] + this.initboxx;
            oW.with('obj_nonsolid_growtangle', rb => {
              rb.x = rz;
            });
          }
          {
            let rb = this.kingy[this.sons] + this.initboxy;
            oW.with('obj_nonsolid_growtangle', rV => {
              rV.y = rb;
            });
          }
        }
      }
      this.t += 0x1, this.t >= this.tmax - 0xa && (this.wavefactor *= 0.8, oW.with('obj_chainpiece', rV => {
        rV.image_alpha -= 0.1;
      }), oW.with('obj_regularbullet', rV => {
        rV.active = 0x0, rV.image_alpha -= 0.1;
      })), this.t >= this.tmax && (this.chain_noise === 0x2 && (this.chain_noise = 0x3, oV('snd_stop').call(this, this.wavenoise)), Ig.turntimer = 0x3, oW.with('obj_regularbullet', rV => {
        rV.instance_destroy();
      }), oW.with('obj_chainking', rV => {
        rV.sprite_index = 'spr_chainking_receive';
      }), oW.with('obj_chainking', rV => {
        rV.instance_destroy();
      }), this.instance_destroy());
    }
  };
oH(E5, 'obj_wavechain'), oA(E5, 'kinds', oM('obj_wavechain', I0)), oA(E5, 'defaultDepth', 0xa), oA(E5, 'defaultSprite', 'spr_chainfront');
var E6 = E5,
  E7 = class rD extends o8 {
    ["create"]() {
      this.image_xscale = 0x0, this.image_yscale = 0x0, this.image_alpha = 0.3, this.timer = 0x0, this.maxtimer = 0xf, this.growcon = 0x1, this.fullgrow = 0x0, this.keep = 0x0, this.megakeep = 0x0, this.image_speed = 0x0, this.image_blend = o5(o4.green, o4.lime, 0.5);
    }
    ["draw"](PV) {
      PV.draw_sprite_ext(this.sprite_index, 0x1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.draw_self();
    }
    ["step"]() {
      this.growth = 0x0, this.timer < this.maxtimer && this.growcon === 0x1 && (this.growth = 0x1), this.timer > 0x0 && this.growcon === 0x3 && (this.growth = 0x1), this.growth === 0x1 && (this.growcon === 0x1 && (this.timer += 0x1), this.growcon === 0x3 && (this.timer -= 0x1), this.image_xscale = 0x2 * (this.timer / this.maxtimer), this.image_yscale = 0x2 * (this.timer / this.maxtimer), this.image_angle = 0xb4 + 0xb4 * (this.timer / this.maxtimer), this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5, this.d = oV('instance_create').call(this, this.x, this.y, IW), this.d.sprite_index = this.sprite_index, this.d.image_xscale = this.image_xscale, this.d.image_yscale = this.image_yscale, this.d.image_angle = this.image_angle, this.d.depth = this.depth - 0x1, this.d.image_blend = this.image_blend, this.d.image_alpha = 0x1 - this.image_alpha + 0.1, this.d.image_speed = 0x0, this.timer >= this.maxtimer && this.growcon === 0x1 && (this.growcon = 0x2, this.keep = 0x1), this.timer <= 0x0 && this.growcon === 0x3 && this.instance_destroy());
    }
    ["endStep"]() {
      if (Ix(IJ(yH))) {
        if (this.lborder = this.x - this.sprite_width / 0x2, this.rborder = this.x + this.sprite_width / 0x2, this.uborder = this.y - this.sprite_height / 0x2, this.dborder = this.y + this.sprite_height / 0x2, MO('obj_heart').x < this.lborder + 0x5) {
          let PV = this.lborder + 0x5;
          oW.with('obj_heart', PD => {
            PD.x = PV;
          });
        }
        if (MO('obj_heart').x > this.rborder - 0x16) {
          let PD = this.rborder - 0x16;
          oW.with('obj_heart', PY => {
            PY.x = PD;
          });
        }
        if (MO('obj_heart').y < this.uborder + 0x5) {
          let PY = this.uborder + 0x5;
          oW.with('obj_heart', Pw => {
            Pw.y = PY;
          });
        }
        if (MO('obj_heart').y > this.dborder - 0x16) {
          let Pw = this.dborder - 0x16;
          oW.with('obj_heart', Pp => {
            Pp.y = Pw;
          });
        }
      }
    }
  };
oH(E7, 'obj_nonsolid_growtangle'), oA(E7, 'kinds', oM('obj_nonsolid_growtangle', o8)), oA(E7, 'defaultDepth', 0x5), oA(E7, 'defaultSprite', 'spr_battlebg_wavechain');
var E8 = E7,
  E9 = class rY extends o8 {
    ["create"]() {
      this.t = 0x0, this.g = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.redup = 0x0, this.bsize = 0x6, oV('snd_play').call(this, 'snd_defeatrun');
    }
    ["draw"](PV) {
      if (this.t === 0x0 && this.draw_self(), this.sweat = 0x0, this.g <= 0x5 && (this.sweat = 0x1), this.g >= 0x9 && this.g <= 0xd && (this.sweat = 0x1), this.sweat === 0x1 && PV.draw_sprite('spr_defeatsweat', 0x0, this.x - 0x6, this.y - 0x6), this.t >= 0x1) {
        for (this.i = 0x0; this.i <= 0x50; this.i += 0x1) this.alph = 0.4, PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x + 0x4 * this.i, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, this.alph - this.t / 0x8 + this.i / 0xc8);
        this.t >= 0xf && this.instance_destroy();
      }
    }
    ["step"]() {
      this.g += 0x1, this.g >= 0xf && (this.t += 0x1);
    }
  };
oH(E9, 'obj_defeatanim'), oA(E9, 'kinds', oM('obj_defeatanim', o8)), oA(E9, 'defaultDepth', 0x0);
var EM = E9,
  EI = class rw extends o8 {
    ["create"]() {
      this.t = 0x0, this.image_speed = 0x0, this.starcount = 0x0, this.afterimage = 0x0, this.tone = 0x0, this.neotone = 0x0, oV('snd_stop').call(this, 'snd_spare'), oV('snd_play').call(this, 'snd_spare');
    }
    ["draw"](PV) {
      if (this.t >= 0x6 && this.t <= 0x1a && (this.afterimage += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x + this.afterimage * 0x4, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.7 - this.afterimage / 0x19), PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x + this.afterimage * 0x8, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0.4 - this.afterimage / 0x1e), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0)), this.t < 0x6 && (this.t < 0x5 && PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1 - this.neotone / 0x4), oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), this.maxwhite = this.t / 0x5, this.maxwhite > 0x1 && (this.maxwhite = 0x1), PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, this.maxwhite - this.tone / 0x5), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0)), this.t >= 0x1 && this.t <= 0x5) {
        for (this.i = 0x0; this.i < 0x2; this.i += 0x1) (this.star ??= [])[this.starcount] = oV('instance_create').call(this, this.x + o7(this.sprite_width), this.y + o7(this.sprite_height), Ik), oD(this.star[this.starcount], PD => {
          PD.image_xscale = 0x2, PD.image_yscale = 0x2, PD.sprite_index = 'spr_sparestar_anim', PD.image_alpha = 0x2, PD.image_speed = 0.25, PD.hspeed = -0x3, PD.gravity = 0.5, PD.gravity_direction = 0x0;
        }), this.starcount += 0x1;
      }
      if (this.t >= 0x5 && this.t <= 0x1e) {
        for (this.i = 0x0; this.i < this.starcount; this.i += 0x1) oD(this.star[this.i], PD => {
          PD.image_angle += 0xa, PD.image_alpha -= 0.1, PD.image_alpha <= 0x0 && PD.instance_destroy();
        });
      }
      if (this.t >= 0x5 && this.t < 0xa && (this.tone += 0x1), this.t >= 0x9 && (this.neotone += 0x1, this.neotone >= 0x1e)) {
        for (this.i = 0x0; this.i < this.starcount; this.i += 0x1) oD(this.star[this.i], PD => {
          PD.instance_destroy();
        });
        this.instance_destroy();
      }
      this.t += 0x1;
    }
  };
oH(EI, 'obj_spareanim'), oA(EI, 'kinds', oM('obj_spareanim', o8)), oA(EI, 'defaultDepth', 0x0);
var Eo = EI,
  Ey = class rp extends o8 {
    ["create"]() {
      this.flashspeed = 0x1, this.siner = 0x0, this.target = 0x29d0103, this.image_speed = 0x0, this.flashcolor = o4.white;
    }
    ["draw"](PV) {
      Ix(IJ(this.target)) && (this.image_index = this.target.image_index, this.sprite_index = this.target.sprite_index), this.siner += this.flashspeed, oV('d3d_set_fog').call(this, 0x1, this.flashcolor, 0x0, 0x1), PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, IU(this.siner / 0x3)), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0), this.siner > 0x4 && IU(this.siner / 0x3) < 0x0 && this.instance_destroy();
    }
  };
oH(Ey, 'obj_oflash'), oA(Ey, 'kinds', oM('obj_oflash', o8)), oA(Ey, 'defaultDepth', 0x0);
var EE = Ey,
  Ej = class rC extends o8 {
    ["create"]() {
      this.type = 0x0, this.size = 0x0, this.ringmax = 0x4, this.timer = 0x0;
    }
    ["draw"](PV) {
      if (this.timer += 0x1, this.timer === 0x1) {
        for (this.initsiner = o7(0x190), this.i = 0x0; this.i < this.ringmax; this.i += 0x1) (this.ringsize ??= [])[this.i] = 0x1 + 0.5 * this.i, (this.ringradius ??= [])[this.i] = 0x2 + this.i * 0xc, (this.ringspeed ??= [])[this.i] = 0.3, (this.ringalpha ??= [])[this.i] = 0x0, (this.ringsiner ??= [])[this.i] = this.initsiner;
      }
      if (this.timer >= 0x2) {
        for (this.i = 0x0; this.i < this.ringmax; this.i += 0x1) (this.ringsiner ??= [])[this.i] += (this.i + 0x2) * this.ringalpha[this.i], this.timer < 0xc && this.ringalpha[this.i] < 0x1 && ((this.ringalpha ??= [])[this.i] += 0.2), this.timer >= 0x18 && ((this.ringalpha ??= [])[this.i] -= 0.1), PV.draw_sprite_ext('spr_hypnoring', 0x0, this.x + IU(this.ringsiner[this.i] / 0xc) * this.ringradius[this.i], this.y + If(this.ringsiner[this.i] / 0xc) * this.ringradius[this.i], this.ringsize[this.i], this.ringsize[this.i], 0x0, o4.white, this.ringalpha[this.i]);
        this.timer >= 0x26 && this.instance_destroy();
      }
    }
  };
oH(Ej, 'obj_hypnofx'), oA(Ej, 'kinds', oM('obj_hypnofx', o8)), oA(Ej, 'defaultDepth', 0x0), oA(Ej, 'defaultSprite', 'spr_hypnoring');
var Em = Ej,
  EP = class rn extends o8 {
    ["create"]() {
      this.xrate = 0.2, this.yrate = 0.2, this.fade = 0.1;
    }
    ["step"]() {
      this.image_alpha -= this.fade, this.image_xscale += this.xrate, this.image_yscale += this.yrate, this.image_alpha < 0x0 && this.instance_destroy();
    }
  };
oH(EP, 'obj_afterimage_grow'), oA(EP, 'kinds', oM('obj_afterimage_grow', o8)), oA(EP, 'defaultDepth', 0x0);
var EX = EP,
  EK = class rO extends o8 {
    ["create"]() {
      this.image_speed = 0.2, this.siner = 0x0;
    }
    ["draw"](PV) {
      this.siner += 0x1, PV.draw_sprite('spr_battleblcon', 0x0, this.x, this.y), PV.draw_sprite(this.sprite_index, this.image_index, this.x + 0xf + ok(IU(this.siner / 0x8)), this.y + 0xf + ok(If(this.siner / 0x8)));
    }
  };
oH(EK, 'obj_heartblcon'), oA(EK, 'kinds', oM('obj_heartblcon', o8)), oA(EK, 'defaultDepth', 0x0), oA(EK, 'defaultSprite', 'spr_heartblcon_0');
var Ek = EK,
  EW = class rc extends o8 {
    ["create"]() {
      (this.alarm ??= [])[0x0] = 0x14, Ig.darkzone === 0x1 && (this.image_xscale = 0x2, this.image_yscale = 0x2);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x0) {
        this.instance_destroy();
        return;
      }
      return super.alarmEvent?.(PV);
    }
  };
oH(EW, 'obj_excblcon'), oA(EW, 'kinds', oM('obj_excblcon', o8)), oA(EW, 'defaultDepth', 0x0), oA(EW, 'defaultSprite', 'spr_exc');
var EZ = EW,
  Eq = class rN extends o8 {
    ["create"]() {
      this.angle = 0x0, this.throwcon = 0x1, this.angledraw = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.radius = 0x12c, this.anglespeed = 0x2, this.rx = this.x + 0x46, this.ry = this.y + 0x1e, this.ralspeed = 0x1a, this.ralgrav = 0x1, this.fro = 0x0, this.mypower = 0xf, this.maxpower = 0x1e, this.minpower = 0xf, this.powerdir = 0x1, this.powerspeed = 0.6, this.throwready = 0x0, this.throwalpha = 0x0, this.activatethrow = 0x0;
    }
    ["draw"](PV) {
      if (this.draw_self(), this.angledraw === 0x1) {
        if (this.throwready === 0x1) {
          for (this.throwalpha < 0x1 && (this.throwalpha += 0.125), PV.draw_set_alpha(this.throwalpha), PV.draw_set_color(o5(o4.blue, o4.white, 0.5)), this.i = 0x0; this.i < 0xc; this.i += 0x1) this.fr = 0x2, PV.draw_circle(this.rx + this.lx * (this.i * this.fr + this.fro), this.ry + this.ly * (this.i * this.fr + this.fro) + this.ralyoff[Math.trunc(this.i * this.fr + this.fro)] - 0x14, 0x4, 0x0), PV.draw_line_width(this.rx + this.lx * (this.i * this.fr + this.fro), this.ry + this.ly * (this.i * this.fr + this.fro) + this.ralyoff[Math.trunc(this.i * this.fr + this.fro)] - 0x14, this.rx + this.lx * ((this.i + 0x1) * this.fr + this.fro), this.ry + this.ly * ((this.i + 0x1) * this.fr + this.fro) + this.ralyoff[Math.trunc((this.i + 0x1) * this.fr + this.fro)] - 0x14, 0x2), PV.draw_sprite_ext('spr_throwarrow', 0x0, this.rx, this.ry - 0x14, 0x2, 0x2, this.angle, o4.red, 0x1);
          PV.draw_set_alpha(0x1);
        }
        this.throwready === 0x0 && (PV.draw_set_color(o4.red), PV.draw_sprite_ext('spr_throwarrow', 0x0, this.rx, this.ry - 0x14, 0x2, 0x2, this.angle, o4.white, 0x1));
      }
    }
    ["step"]() {
      if (this.throwcon === 0x1 && (this.throwready === 0x0 && (this.angle += this.anglespeed), this.angle >= 0x1e && (this.anglespeed = -0x2), this.angle <= -0xf && (this.anglespeed = 0x2), Ix(oV('button3_p').call(this)) && this.throwalpha >= 0.9 && this.throwready === 0x1 && (this.activatethrow = 0x1, oW.with('obj_writer', PV => {
        PV.instance_destroy();
      })), Ix(oV('button3_p').call(this)) && this.throwready === 0x0 && (this.throwready = 0x1, oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), (Ig.msg ??= [])[0x0] = "* Press " + oV('scr_get_input_name').call(this, 0x6) + " to determine the POWER!", oV('scr_battletext_default').call(this)), this.activatethrow === 0x1 && (this.activatethrow = 0x0, this.throwready = 0x0, this.image_index = 0x0, this.image_speed = 0.5, this.sprite_index = 'spr_susieb_attack_unarmed', this.angledraw = 0x0, this.throwcon = 0x2, oV('snd_play').call(this, 'snd_ultraswing'), this.ral = oV('instance_create').call(this, this.rx, this.ry, jp), this.ral.speed = this.mypower, this.ral.mypower = this.mypower, this.ral.image_xscale = 0x2, this.ral.image_yscale = 0x2, this.ral.direction = this.angle, this.ral.image_angle = this.angle, this.ral.gravity = this.ralgrav), this.throwready === 0x1 && (this.mypower += this.powerdir * this.powerspeed, this.mypower >= this.maxpower && (this.powerdir = -0x1), this.mypower <= this.minpower && (this.powerdir = 0x1))), this.throwcon === 0x2 && this.image_index >= 0x5 && (this.image_speed = 0x0), this.angledraw === 0x1) {
        for (this.lx = oy(this.mypower, this.angle), this.ly = om(this.mypower, this.angle), this.i = 0x0; this.i < 0x2a; this.i += 0x1) this.ralyadd = this.ralgrav + this.ralgrav * this.i, this.i > 0x0 ? (this.ralyoff ??= [])[this.i] = this.ralyoff[Math.trunc(this.i - 0x1)] + this.ralyadd : (this.ralyoff ??= [])[0x0] = this.ralyadd;
      }
    }
  };
oH(Eq, 'obj_throwralsei'), oA(Eq, 'kinds', oM('obj_throwralsei', o8)), oA(Eq, 'defaultDepth', 0x0), oA(Eq, 'defaultSprite', 'spr_susieb_throwralseiready');
var Eu = Eq,
  EH = class rg extends o8 {
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_speed = 0.2, this.good = 0x1, this.offing = 0x0, IQ(this.object_index) === 0x1 && (this.tt = oV('instance_create').call(this, this.x, this.y, rg), this.tt.depth = this.depth + 0x1, oD(this.tt, PV => {
        PV.offing = 0x0, PV.good = 0x0, PV.sprite_index = 'spr_checkers_idle_crownless';
      })), this.con = 0x0;
    }
    ["step"]() {
      this.con === 0x1 && (this.image_angle += 0xa), this.con === 0x5 && (this.x < this.xstart + 0x28 && (this.x += 0xa), this.con = 0x6), this.con === 0x6 && this.x > this.xstart && (this.x -= 0x2), this.con === 0x7 && (this.x < this.xstart + 0x28 && (this.x += 0x8), this.con = 0x6);
    }
  };
oH(EH, 'obj_throwtarget'), oA(EH, 'kinds', oM('obj_throwtarget', o8)), oA(EH, 'defaultDepth', 0x4), oA(EH, 'defaultSprite', 'spr_checkers_crown');
var EG = EH,
  EA = class ra extends o8 {
    ["create"]() {
      this.stringpos = 0x0, this.mystring = '\x20', this.part = 0x1, this.partstring = '\x20', this.type = 0x0, this.rate = 0x1, this.active = 0x0, this.finished = 0x0, this.mycolor = o4.purple, (this.alarm ??= [])[0x0] = 0x1, this.getrid = 0x0, this.writergod = oE(I5), this.nowdir = 0x5a, this.facealpha = 0x0;
    }
    ["draw"](PV) {
      this.facealpha - 0x1 < -0.00001 && (this.facealpha += 0.2), PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.facealpha), PV.draw_set_alpha(this.facealpha), (this.type === 0x0 || this.type === 0x3) && (oV('scr_84_set_draw_font').call(this, 'main'), PV.draw_set_color(this.mycolor), PV.draw_text(this.x + 0x46, this.y + 0xa, Md(this.mystring))), this.type === 0x1 && this.active === 0x1 && this.getrid === 0x0 && (oV('scr_84_set_draw_font').call(this, 'main'), PV.draw_set_color(this.mycolor), PV.draw_text(this.x + 0x46, this.y + 0xf, Md(this.mystring)), this.finished = 0x1), (this.type === 0x2 || this.type === 0x4) && this.active === 0x1 && (oV('scr_84_set_draw_font').call(this, 'main'), PV.draw_set_color(this.mycolor), this.finished === 0x0 && (this.partstring += MA(this.mystring, this.part), this.part += 0x1, this.part >= ML(this.mystring) + 0x1 && (this.finished = 0x1)), PV.draw_text(this.x + 0x46 + o7(0x1), this.y + 0xf + o7(0x1), Md(this.partstring))), Ix(IJ(this.writergod)) ? this.finished === 0x1 && this.getrid === 0x0 && (oD(this.writergod, PD => {
        PD.halt === 0x0 && (PD.halt = 0x1);
      }), this.finished = 0x2) : this.instance_destroy(), this.getrid === 0x1 && (this.direction = -this.nowdir, this.speed += 0x2, (this.type === 0x3 || this.type === 0x4) && this.instance_destroy()), PV.draw_set_alpha(0x1);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x0) {
        this.nowdir = this.direction, this.speed = 0x0, this.active = 0x1, this.type !== 0x2 && this.type !== 0x4 && (this.finished = 0x1);
        return;
      }
      return super.alarmEvent?.(PV);
    }
  };
oH(EA, 'obj_smallface'), oA(EA, 'kinds', oM('obj_smallface', o8)), oA(EA, 'defaultDepth', -0x5), oA(EA, 'defaultSprite', 'spr_smallface_s0');
var Ed = EA,
  ES = class rB extends o8 {
    ["create"]() {
      this.target = oE(rB), this.moved = 0x0, this.movetimer = 0x0, this.movex = 0x0, this.movey = 0x0, this.movemax = 0xa;
    }
    ["step"]() {
      Ix(IJ(this.target)) ? (this.moved === 0x0 && (this.x = this.target.x, this.y = this.target.y, this.dist = MJ.call(this, this.movex, this.movey), this.dir = oX(this.x, this.y, this.movex, this.movey), this.amt = this.dist / this.movemax, this.xadd = oy(this.amt, this.dir), this.yadd = om(this.amt, this.dir), this.moved = 0x1), this.target.x += this.xadd, this.target.y += this.yadd, this.movetimer += 0x1, this.movetimer >= this.movemax && this.instance_destroy(), this.target === rB && this.instance_destroy()) : this.instance_destroy();
    }
  };
oH(ES, 'obj_move_to_point'), oA(ES, 'kinds', oM('obj_move_to_point', o8)), oA(ES, 'defaultDepth', 0x0);
var ER = ES,
  Ev = class rL extends o8 {
    ["create"]() {
      this.dbselect = 0x0, (this.color ??= [])[0x0] = o4.white, (this.color ??= [])[0x1] = o4.white, (this.color ??= [])[0x2] = o4.white, (this.dcolor ??= [])[0x0] = Ig.flag[0xdf], (this.dcolor ??= [])[0x1] = Ig.flag[0xe0], (this.dcolor ??= [])[0x2] = Ig.flag[0xe1], (this.part ??= [])[0x0] = Ig.flag[0xdd], (this.part ??= [])[0x1] = Ig.flag[0xdc], (this.part ??= [])[0x2] = Ig.flag[0xde], this.a = 0x1, this.s = 0x4, this.xx = this.x, this.yy = this.y, this.siner = 0x0, this.wsiner = 0x0, this.animate = 0x1, this.bad = 0x0, this.value = 0x1, this.basecolor = o4.white;
    }
    ["draw"](PV) {
      for (this.part[0x2] >= 0x0 && (this.wsiner += 0.8), this.animate === 0x0 && (this.siner = 0x0, this.wsiner = 0x0), this.walkc = If(this.wsiner / 0x3), this.loop = 0x0; this.loop < 0x2; this.loop += 0x1) this.loop === 0x0 && (oV('draw_set_blend_mode').call(this, 0x0), (this.color ??= [])[0x0] = this.basecolor, (this.color ??= [])[0x1] = this.basecolor, (this.color ??= [])[0x2] = this.basecolor), this.loop === 0x1 && (oV('draw_set_blend_mode').call(this, 0x1), (this.color ??= [])[0x0] = this.dcolor[0x0], (this.color ??= [])[0x1] = this.dcolor[0x1], (this.color ??= [])[0x2] = this.dcolor[0x2]), this.walka = -IU(this.wsiner / 0x6), this.walkb = -If(this.wsiner / 0x6), this.bad === 0x0 ? (this.part[0x2] === 0x0 && PV.draw_sprite_ext('spr_thrashfoot', 0x0, this.xx - 0xb * this.s + this.s * this.walka * 0x2, this.yy + 0x13 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x1 && PV.draw_sprite_ext('spr_thrashfoot', 0x1, this.xx - 0x6 * this.s + this.s * this.walka * 0x2, this.yy + 0x11 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x3 && PV.draw_sprite_ext('spr_thrashfoot', 0x4, this.xx - 0x8 * this.s + this.s * this.walka * 0x2, this.yy + 0x15 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a)) : (this.part[0x2] === 0x0 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x0, this.xx - 0xb * this.s + this.s * this.walka * 0x2, this.yy + 0x13 * this.s + this.s * this.walkb * 0x1, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x1 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x1, this.xx - 0x6 * this.s + this.s * this.walka * 0x2, this.yy + 0x11 * this.s + this.s * this.walkb * 0x1, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x3 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x4, this.xx - 0x8 * this.s + this.s * this.walka * 0x2, this.yy + 0x15 * this.s + this.s * this.walkb * 0x1, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a));
      if (this.part[0x0] >= 0x0) {
        for (this.loop = 0x0; this.loop < 0x2; this.loop += 0x1) this.loop === 0x0 && (oV('draw_set_blend_mode').call(this, 0x0), (this.color ??= [])[0x0] = this.basecolor, (this.color ??= [])[0x1] = this.basecolor, (this.color ??= [])[0x2] = this.basecolor), this.loop === 0x1 && (oV('draw_set_blend_mode').call(this, 0x1), (this.color ??= [])[0x0] = this.dcolor[0x0], (this.color ??= [])[0x1] = this.dcolor[0x1], (this.color ??= [])[0x2] = this.dcolor[0x2]), this.bad === 0x0 && PV.draw_sprite_ext('spr_thrashbody', this.part[0x0], this.xx, this.yy + this.s * this.walkc, this.s, this.s, 0x0, this.color[0x0], this.a), this.bad === 0x1 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashbody_b'), this.part[0x0], this.xx, this.yy + this.s * this.walkc, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x0], this.a);
      }
      for (this.loop = 0x0; this.loop < 0x2; this.loop += 0x1) this.loop === 0x0 && (oV('draw_set_blend_mode').call(this, 0x0), (this.color ??= [])[0x0] = this.basecolor, (this.color ??= [])[0x1] = this.basecolor, (this.color ??= [])[0x2] = this.basecolor), this.loop === 0x1 && (oV('draw_set_blend_mode').call(this, 0x1), (this.color ??= [])[0x0] = this.dcolor[0x0], (this.color ??= [])[0x1] = this.dcolor[0x1], (this.color ??= [])[0x2] = this.dcolor[0x2]), this.bad === 0x0 ? (this.part[0x1] === 0x0 && PV.draw_sprite_ext('spr_thrashweapon_laser', 0x0, this.xx - 0x8 * this.s, this.yy + 0x6 * this.s + this.s * this.walkc * 0x2, this.s, this.s, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x1 && PV.draw_sprite_ext('spr_thrashweapon_sword', 0x0, this.xx - 0xa * this.s, this.yy + 0x6 * this.s + this.s * this.walkc * 0x2, this.s, this.s, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x2 && PV.draw_sprite_ext('spr_thrashweapon_flame', 0x0, this.xx - this.s * 0x4, this.yy + 0x5 * this.s + this.s * this.walkc * 0x2, this.s, this.s, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x3 && PV.draw_sprite_ext('spr_thrashweapon_duck', 0x0, this.xx - 0x8 * this.s, this.yy + 0x3 * this.s + this.s * this.walkc * 0x2, this.s, this.s, 0x0, this.color[0x1], this.a)) : (this.part[0x1] === 0x0 && PV.draw_sprite_ext('spr_thrashweapon_laser_b', 0x0, this.xx - 0x8 * this.s, this.yy + 0x6 * this.s + this.s * this.walkc * 0x2, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x1 && PV.draw_sprite_ext('spr_thrashweapon_sword_b', 0x0, this.xx - 0xa * this.s, this.yy + 0x6 * this.s + this.s * this.walkc * 0x2, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x2 && PV.draw_sprite_ext('spr_thrashweapon_flame_b', 0x0, this.xx - this.s * 0x4, this.yy + 0x5 * this.s + this.s * this.walkc * 0x2, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x1], this.a), this.part[0x1] === 0x3 && PV.draw_sprite_ext('spr_thrashweapon_duck', 0x0, this.xx - 0x8 * this.s, this.yy + 0x3 * this.s + this.s * this.walkc * 0x2, this.s, this.s, 0x0, this.color[0x1], this.a));
      for (this.loop = 0x0; this.loop < 0x2; this.loop += 0x1) this.loop === 0x0 && (oV('draw_set_blend_mode').call(this, 0x0), (this.color ??= [])[0x0] = this.basecolor, (this.color ??= [])[0x1] = this.basecolor, (this.color ??= [])[0x2] = this.basecolor), this.loop === 0x1 && (oV('draw_set_blend_mode').call(this, 0x1), (this.color ??= [])[0x0] = this.dcolor[0x0], (this.color ??= [])[0x1] = this.dcolor[0x1], (this.color ??= [])[0x2] = this.dcolor[0x2]), this.walka = IU(this.wsiner / 0x6), this.walkb = If(this.wsiner / 0x6), this.bad === 0x0 ? (this.part[0x2] === 0x0 && PV.draw_sprite_ext('spr_thrashfoot', 0x0, this.xx - 0x5 * this.s + this.s * this.walka * 0x2, this.yy + 0x14 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x1 && PV.draw_sprite_ext('spr_thrashfoot', 0x1, this.xx + this.s * this.walka * 0x2, this.yy + 0x12 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x2 && PV.draw_sprite_ext('spr_thrashfoot', 0x2, this.xx - 0xf * this.s, this.yy + 0x12 * this.s, this.s, this.s, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x3 && (this.walka = IU(this.wsiner / 0x6), this.walkb = If(this.wsiner / 0x6), PV.draw_sprite_ext('spr_thrashfoot', 0x3, this.xx + this.s * this.walka * 0x2, this.yy + 0x16 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a))) : (this.part[0x2] === 0x0 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x0, this.xx - 0x5 * this.s + this.s * this.walka * 0x2, this.yy + 0x14 * this.s + this.s * this.walkb * 0x1, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x1 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x1, this.xx + this.s * this.walka * 0x2, this.yy + 0x12 * this.s + this.s * this.walkb * 0x1, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x2 && PV.draw_sprite_ext(oV('scr_84_get_sprite').call(this, 'spr_thrashfoot_b'), 0x2, this.xx - 0xf * this.s, this.yy + 0x12 * this.s, this.s / 0x2, this.s / 0x2, 0x0, this.color[0x2], this.a), this.part[0x2] === 0x3 && (this.walka = IU(this.wsiner / 0x6), this.walkb = If(this.wsiner / 0x6), PV.draw_sprite_ext('spr_thrashfoot', 0x3, this.xx + this.s * this.walka * 0x2, this.yy + 0x16 * this.s + this.s * this.walkb * 0x1, this.s, this.s, 0x0, this.color[0x2], this.a)));
      oV('draw_set_blend_mode').call(this, 0x0), this.dbselect === 0x1 && (Ix(MR(0x27)) && ((this.part ??= [])[0x0] += 0x1, this.part[0x0] >= 0x4 && ((this.part ??= [])[0x0] = 0x0)), Ix(MR(0x26)) && ((this.part ??= [])[0x1] += 0x1, this.part[0x1] >= 0x4 && ((this.part ??= [])[0x1] = 0x0)), Ix(MR(0x10)) && ((this.part ??= [])[0x2] += 0x1, this.part[0x2] >= 0x4 && ((this.part ??= [])[0x2] = 0x0)), Ix(MS(0x20)) && ((this.dcolor ??= [])[0x0] = Mv(this.wsiner * 0x2, 0xff, 0xff), (this.dcolor ??= [])[0x1] = Mv(this.wsiner, 0xff, 0xff), (this.dcolor ??= [])[0x2] = Mv(this.wsiner / 0x2, 0xff, 0xff)), Ix(MR(0xd)) && (this.s += 0x1, this.s >= 0x5 && (this.s = 0x1)));
    }
    ["step"]() {
      (this.dcolor ??= [])[0x1] = Mv(Ig.flag[0xdf] * 0x8, 0xff, 0xff * this.value), (this.dcolor ??= [])[0x0] = Mv(Ig.flag[0xe0] * 0x8, 0xff, 0xff * this.value), (this.dcolor ??= [])[0x2] = Mv(Ig.flag[0xe1] * 0x8, 0xff, 0xff * this.value), (this.part ??= [])[0x1] = Ig.flag[0xdc], (this.part ??= [])[0x0] = Ig.flag[0xdd], (this.part ??= [])[0x2] = Ig.flag[0xde], this.basecolor = o5(o4.black, o4.white, this.value);
    }
  };
oH(Ev, 'obj_thrashmachine'), oA(Ev, 'kinds', oM('obj_thrashmachine', o8)), oA(Ev, 'defaultDepth', -0x14), oA(Ev, 'defaultSprite', 'spr_thrashweapon_duck');
var Ez = Ev,
  Eb = class rU extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.shakex = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.fixed = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_blockguy_overworld', this.hurtsprite = 'spr_blockguy_overworld', this.sparedsprite = 'spr_blockguy_spared', this.rr = oI(0x0, 0x1, 0x2, 0x3), this.headpart = 0x1, (this.part ??= [])[0x0] = 0x0, this.rr === 0x0 && (this.headpart = 0x3, (this.part ??= [])[0x1] = 0x2, (this.part ??= [])[0x2] = 0x3, (this.part ??= [])[0x3] = 0x1), this.rr === 0x1 && (this.headpart = 0x3, (this.part ??= [])[0x1] = 0x3, (this.part ??= [])[0x2] = 0x2, (this.part ??= [])[0x3] = 0x1), this.rr === 0x2 && (this.headpart = 0x1, (this.part ??= [])[0x1] = 0x1, (this.part ??= [])[0x2] = 0x3, (this.part ??= [])[0x3] = 0x2), this.rr === 0x3 && (this.headpart = 0x2, (this.part ??= [])[0x1] = 0x2, (this.part ??= [])[0x2] = 0x1, (this.part ??= [])[0x3] = 0x3), (this.part ??= [])[0x4] = 0x4, this.maxpart = 0x5, this.siner = 0x0, this.floatsin = 0x0, (this.party ??= [])[0x0] = 0x1c, (this.party ??= [])[0x1] = 0x36, (this.party ??= [])[0x2] = 0x46, this.floating = 0x0, this.swaptime = 0xa, this.bodyfade = 0x0, this.bodyalpha = 0x1, this.swapx = 0x0, this.sinmomentum = 0x0, (this.custom ??= [])[0x0] = 4.5, (this.custom ??= [])[0x1] = 0x3, (this.custom ??= [])[0x2] = 1.5, (this.select ??= [])[0x0] = -0x1, (this.select ??= [])[0x1] = -0x1, (this.select ??= [])[0x2] = -0x1, (this.selectpart ??= [])[0x0] = 0x0, (this.selectpart ??= [])[0x1] = 0x0, (this.selectpart ??= [])[0x2] = 0x0, (this.partyb ??= [])[0x0] = 0x0, (this.partyb ??= [])[0x1] = 0x0, (this.partyb ??= [])[0x2] = 0x0, this.selecty = 0x0, this.selected = 0x0, this.selecttotal = 0x0, (this.selectx ??= [])[0x0] = 0x0, (this.movex ??= [])[0x0] = 0x0, (this.movex ??= [])[0x1] = 0x0, (this.movex ??= [])[0x2] = 0x0, this.threebuffer = 0x0, this.finishtimer = 0x0, this.hurk = 0x0;
    }
    ["draw"](PV) {
      if (this.threebuffer -= 0x1, this.ss = IU(this.siner / 0x4), this.ssb = If(this.siner / 0x4), this.swaptime === 0x5) {
        for (this.returncount = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) (this.movex ??= [])[this.i] += this.xspeed, this.movex[this.i] <= 0x0 && ((this.movex ??= [])[this.i] = 0x0, this.returncount += 0x1);
        this.returncount >= 0x3 ? (this.swaptime = 0x6, (this.part ??= [])[0x1] = this.selectpart[0x0], (this.part ??= [])[0x2] = this.selectpart[0x1], (this.part ??= [])[0x3] = this.selectpart[0x2], this.part[0x1] === 0x1 && this.part[0x2] === 0x2 && this.part[0x3] === 0x3 && ((this.part ??= [])[0x1] = 0x6, oV('scr_mercyadd').call(this, this.myself, 0x64))) : (this.xspeed -= 0x2, PV.draw_sprite_ext('spr_blockguy_part', this.part[0x3], this.x + this.movex[0x2], this.partyb[0x2], 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext('spr_blockguy_part', this.part[0x2], this.x + this.movex[0x1], this.partyb[0x1], 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext('spr_blockguy_part', this.part[0x1], this.x + this.movex[0x0], this.partyb[0x0], 0x2, 0x2, 0x0, o4.white, 0x1));
      }
      if (this.swaptime === 0x2 || this.swaptime === 0x3) {
        for (this.sinmomentum - 0.8 < -0.00001 && (this.sinmomentum += 0.05), this.floatsin += this.sinmomentum, this.threebuffer <= 0x0 && (this.selecty = this.y + 0x1e + this.selecttotal * 0x1a), this.select[0x0] < 0x0 && ((this.partyb ??= [])[0x0] = this.y + 0x35 + IU(this.floatsin / 0x8 + this.custom[0x0]) * 0x19), this.select[0x1] < 0x0 && ((this.partyb ??= [])[0x1] = this.y + 0x35 + IU(this.floatsin / 0x8 + this.custom[0x1]) * 0x19), this.select[0x2] < 0x0 && ((this.partyb ??= [])[0x2] = this.y + 0x35 + IU(this.floatsin / 0x8 + this.custom[0x2]) * 0x19), this.closest = -0x1, this.closefactor = 0x63, this.i = 0x0; this.i < 0x3; this.i += 0x1) (this.scolor ??= [])[this.i] = 0x808080, this.select[this.i] < 0x0 ? (this.cfactor = IL(this.partyb[this.i] - this.selecty), this.cfactor < this.closefactor && this.cfactor < 0x18 && (this.closefactor = this.cfactor, this.closest = this.i)) : (this.movex[this.i] < 0x3c && ((this.movex ??= [])[this.i] += 0x6), (this.scolor ??= [])[this.i] = 0xffff, this.idealy = this.y + 0x1c + this.select[this.i] * 0x19, IL(this.partyb[this.i] - this.idealy) < 0x6 && ((this.partyb ??= [])[this.i] = this.idealy), this.partyb[this.i] < this.idealy && ((this.partyb ??= [])[this.i] += 0x6), this.partyb[this.i] > this.idealy && ((this.partyb ??= [])[this.i] -= 0x6));
        for (this.arrowcolor = o4.white, this.i = 0x0; this.i < 0x3; this.i += 0x1) this.closest === this.i && ((this.scolor ??= [])[this.i] = 0xffffff, this.arrowcolor = o4.yellow);
        PV.draw_sprite_ext('spr_blockguy_part', this.part[0x3], this.x + this.movex[0x2], this.partyb[0x2], 0x2, 0x2, 0x0, this.scolor[0x2], 0x1), PV.draw_sprite_ext('spr_blockguy_part', this.part[0x2], this.x + this.movex[0x1], this.partyb[0x1], 0x2, 0x2, 0x0, this.scolor[0x1], 0x1), PV.draw_sprite_ext('spr_blockguy_part', this.part[0x1], this.x + this.movex[0x0], this.partyb[0x0], 0x2, 0x2, 0x0, this.scolor[0x0], 0x1), this.arrowpush = this.threebuffer * 0x4, this.arrowpush < 0x0 && (this.arrowpush = 0x0), this.ypush = 0x0, this.threebuffer === 0x1 && (this.ypush = 0xf), PV.draw_set_color(this.arrowcolor), this.finishtimer < 0x8 && this.selecttotal < this.maxpart - 0x2 && o9(this.x - 0x32 + IU(this.floatsin / 0x6) * 0x2 + this.arrowpush, this.selecty + 0xa + this.ypush, this.x - 0xa + IU(this.floatsin / 0x6) * 0x2 + this.arrowpush, this.selecty + 0xa + this.ypush, 0x10), Ix(oV('button3_p').call(this)) && this.threebuffer < 0x0 && this.selecttotal < this.maxpart - 0x2 && (this.closest >= 0x0 && ((this.selectpart ??= [])[this.selecttotal] = this.part[Math.trunc(0x1 + this.closest)], (this.select ??= [])[this.closest] = this.selecttotal, this.selecttotal += 0x1, this.threebuffer = 0x6), this.selecttotal >= this.maxpart - 0x2 && (this.swaptime = 0x3)), this.swaptime === 0x3 && (this.finishtimer += 0x1), this.finishtimer >= 0xd && (this.swaptime = 0x5, this.xspeed = 0x4);
      }
      if ((this.swaptime === 0x0 || this.swaptime === 0x1 || this.swaptime === 0x6) && (this.hurk = 0x0, this.state === 0x3 && (this.hurk = 0x1, Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xa), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0))), this.swaptime === 0x0 && (this.siner += 0x1), this.swaptime === 0x1 && (this.swapx += 0x2), this.swaptime === 0x6 && (this.swapx > 0x0 && (this.swapx -= 0x2), this.swapx <= 0x0 && (this.swaptime = 0x0)), this.swapx >= 0x10 && this.swaptime === 0x1 && (this.swaptime = 0x2), this.swaptime === 0x0 && this.part[0x1] === 0x1 && this.part[0x2] === 0x2 && this.part[0x3] === 0x3 && ((this.part ??= [])[0x1] = 0x6), this.swaptime === 0x1 && this.part[0x1] === 0x6 && ((this.part ??= [])[0x1] = 0x1), this.thissprite = 'spr_blockguy_part', this.hurk === 0x1 && (this.thissprite = 'spr_blockguy_part_hurt'), PV.draw_sprite_ext(this.thissprite, 0x5, this.x - 0x18 + this.ss * 0x2 + this.swapx * 1.5 + this.shakex, this.y + 0x36 + this.ssb * 0x2, 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext(this.thissprite, this.part[0x4], this.x - this.ss + this.shakex, this.y + 0x64 - this.swapx, 0x2, 0x2, 0x0, o4.white, 0x1), (this.swaptime === 0x1 || this.swaptime === 0x6) && PV.draw_sprite_ext(this.thissprite, this.part[0x0], this.x + this.ss * 0x2 + this.shakex, this.y + this.swapx, 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext(this.thissprite, this.part[0x3], this.x - 0x4 + this.ss * 0x2 + this.shakex, this.y + 0x4e, 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext(this.thissprite, this.part[0x2], this.x + 0x4 - this.ss * 0x2 + this.shakex, this.y + 0x36, 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext(this.thissprite, this.part[0x1], this.x + this.ss * 0x2 + this.shakex, this.y + 0x1c, 0x2, 0x2, 0x0, o4.white, 0x1), this.swaptime === 0x0 && PV.draw_sprite_ext(this.thissprite, this.part[0x0], this.x + this.ss * 0x2 + this.shakex, this.y + this.swapx, 0x2, 0x2, 0x0, o4.white, 0x1), this.state === 0x0 && this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, 0x5, this.x - 0x18 + this.ss * 0x2 + this.swapx * 1.5 + this.shakex, this.y + 0x36 + this.ssb * 0x2, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), PV.draw_sprite_ext(this.thissprite, this.part[0x4], this.x - this.ss + this.shakex, this.y + 0x64 - this.swapx, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), (this.swaptime === 0x1 || this.swaptime === 0x6) && PV.draw_sprite_ext(this.thissprite, this.part[0x0], this.x + this.ss * 0x2 + this.shakex, this.y + this.swapx, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), PV.draw_sprite_ext(this.thissprite, this.part[0x3], this.x - 0x4 + this.ss * 0x2 + this.shakex, this.y + 0x4e, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), PV.draw_sprite_ext(this.thissprite, this.part[0x2], this.x + 0x4 - this.ss * 0x2 + this.shakex, this.y + 0x36, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), PV.draw_sprite_ext(this.thissprite, this.part[0x1], this.x + this.ss * 0x2 + this.shakex, this.y + 0x1c, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.swaptime === 0xa) {
        for (this.introtimer = 0x0, (this.idealy ??= [])[0x0] = 0x0, (this.idealy ??= [])[0x1] = 0x1c, (this.idealy ??= [])[0x2] = 0x36, (this.idealy ??= [])[0x3] = 0x4e, (this.idealy ??= [])[0x4] = 0x64, this.i = 0x0; this.i < 0x5; this.i += 0x1) (this.cury ??= [])[this.i] = 0x64, (this.yfactor ??= [])[this.i] = (0x64 - this.idealy[this.i]) / 0x10;
        (this.cury ??= [])[0x0] = 0x4e, (this.yfactor ??= [])[0x0] = 4.875, this.swaptime = 0xb;
      }
      if (this.swaptime === 0xb) {
        for (PV.draw_sprite_ext('spr_blockguy_part', 0x5, this.x - this.introtimer * 0x2 + 0x6, this.y + this.cury[0x2], 0x2, 0x2, 0x0, o4.white, 0x1), this.i = 0x4; this.i >= 0x0; this.i -= 0x1) (this.cury ??= [])[this.i] -= this.yfactor[this.i], PV.draw_sprite_ext('spr_blockguy_part', this.part[this.i], this.x, this.y + this.cury[this.i], 0x2, 0x2, 0x0, o4.white, 0x1);
        PV.draw_sprite_ext('spr_blockguy_part', this.part[this.headpart], this.x, this.y + this.cury[this.headpart], 0x2, 0x2, 0x0, o4.white, 0x1), PV.draw_sprite_ext('spr_blockguy_part', this.part[0x0], this.x, this.y + this.cury[0x0], 0x2, 0x2, 0x0, o4.white, 0x1), this.introtimer += 0x1, this.introtimer >= 0x10 && (this.swaptime = 0x0);
      }
      this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent11"]() {}
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "HOOH...! You&interrupted my&training...!"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "GOOH...! I'm&gonna knock&your block&off...!"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Let's see how&you stack&up...! HIYA!!"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "Let me show&you my&training!&YIHA!!"), this.acting === 0x2 && ((Ig.msg ??= [])[0x0] = "ARRGH!!", this.part[0x2] === 0x3 && ((Ig.msg ??= [])[0x0] = "ARRGH!! NO!!&MY BUTT IS&MY ABS!"), this.part[0x1] === 0x3 && ((Ig.msg ??= [])[0x0] = "ARRGH!! NO!!&MY BUTT IS&MY FACE!!"), this.part[0x1] === 0x2 && ((Ig.msg ??= [])[0x0] = "ARRGH!! NO!!&MY ABS ARE&MY FACE!!"), this.part[0x1] === 0x1 && ((Ig.msg ??= [])[0x0] = "ARRGH!! NO!!&MY FACE IS&MY FACE!!&Wait..."), Ig.mercymod[this.myself] >= 0x64 && ((Ig.msg ??= [])[0x0] = "Oh, you mixed&me up all&nice~")), this.acting === 0x3 && ((Ig.msg ??= [])[0x0] = "My momentum&is totally&blocked&up..."), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.biglegoqual = 0x1, oV('scr_monsterpop').call(this) >= 0x2 && this.myself >= 0x1 && (this.biglegoqual = 0x0), this.rr === 0x0 && this.biglegoqual === 0x1 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1a, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x5, this.dc.timepoints = 0x2) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1b, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x5), this.turns += 0x1, Ig.turntimer = 0xaa, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer is thinking about training."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer is thinking about trains."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer is thinking about training wheels."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer considers building a house out of its own body."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like freshly-printed plastic."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer is starting to break apart with exhaustion."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.battlemsg ??= [])[0x0] = "* Bloxer radiates with the spirit of joy.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* BLOXER - AT 9 DF 2&* Loves: Training^1. Hates: Body being the wrong shape/%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Press " + oV('scr_get_input_name').call(this, 0x6) + " to choose:&  #1 HEAD, #2 BODY, #3 LEGS.", (Ig.mercymod ??= [])[this.myself] = 0x0, oV('scr_battletext_default').call(this), this.actcon = 0xa, this.swaptime = 0x1, this.floatsin = 0x0, this.swapx = 0x0, this.sinmomentum = 0x0, (this.party ??= [])[0x0] = 0x1c, (this.party ??= [])[0x1] = 0x36, (this.party ??= [])[0x2] = 0x46, (this.select ??= [])[0x0] = -0x1, (this.select ??= [])[0x1] = -0x1, (this.select ??= [])[0x2] = -0x1, this.selecttotal = 0x0, (this.movex ??= [])[0x0] = 0x0, (this.movex ??= [])[0x1] = 0x0, (this.movex ??= [])[0x2] = 0x0, this.finishtimer = 0x0), this.acting === 0x3 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* Susie became antagonistic!/", this.rr = oI(0x0, 0x1, 0x2), oV('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Why bother training^1? You'll NEVER beat me./", this.rr === 0x1 && ((Ig.msg ??= [])[0x2] = "* Why train^1? You're still 100 years too early to beat me./"), this.rr === 0x2 && ((Ig.msg ??= [])[0x2] = "* Training^1? Yeah^1, like I need that to beat you down./"), (Ig.msg ??= [])[0x3] = "* The enemies became \\cBTIRED\\cW.../%", this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Tired)", (Ig.monsterstatus ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0xa && this.swaptime === 0x0 && (oW.with('obj_writer', PV => {
          PV.instance_destroy();
        }), Ig.mercymod[this.myself] >= 0x64 ? ((Ig.msg ??= [])[0x0] = "* Bloxer is pleased with its new self!/%", this.fixed = 0x1) : (Ig.msg ??= [])[0x0] = "* Bloxer is still unhappy with its self.../%", oV('scr_battletext_default').call(this), this.actcon = 0x1);
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(Eb, 'obj_bloxer_enemy'), oA(Eb, 'kinds', oM('obj_bloxer_enemy', Mu)), oA(Eb, 'defaultDepth', 0x5a), oA(Eb, 'defaultSprite', 'spr_blockguy_spared');
var EV = Eb,
  ED = class rf extends o8 {
    ["collide_obj_mainchara"](PV) {
      Ig.interact === 0x0 && this.event_user(0x0);
    }
    ["create"]() {
      this.image_xscale = 0x2, this.image_yscale = 0x2, this.facing = 0x0, this.walk_index = 0x0, this.state = 0x0, this.alertcon = 0x0, this.alerttimer = 0x0, this.facetimer = 0x0, this.chasetype = 0x0, this.pacetype = 0x1, this.pacecon = 0x0, this.pacecon2 = 0x0, this.pacetimer = 0x0, this.targetx = 0x0, this.targety = 0x0, oV('scr_depth').call(this), this.radius = 0xc8, this.moveradius = 0xa0, this.pacespeed = 0x1, this.frozen = 0x0, this.hadfrozen = 0x0, this.offscreen_frozen = 0x1, this.remspeed = 0x0, this.myencounter = 0x4, this.touchsprite = 'spr_diamondm_hurt', this.cancelwalk = 0x0, this.eraser = 0x0, this.touchflag = 0x0, this.ignoresolid = 0x0, Mc === 'room_battletest' && (this.myencounter = 0x28), Mc === 'room_field1' && (this.myencounter = 0x4), Mc === 'room_field2' && (this.myencounter = 0x5, Ig.flag[0x1f5] > 0x0 && this.instance_destroy()), Mc === 'room_field_puzzle1' && (this.myencounter = 0x6, this.radius = 0xc8, this.pacetype = 0x5), Mc === 'room_field_getsusie' && (this.myencounter = 0x7, this.sprite_index = 'spr_smallchecker_front', this.touchsprite = this.sprite_index, this.pacetype = 0x6, this.image_speed = 0.2), Mc === 'room_field4' && (this.myencounter = 0x21), Mc === 'room_field_secret1' && (this.sprite_index = 'spr_jigsawry_idle', this.touchsprite = 'spr_jigsawry_idle', this.myencounter = 0x17, Ig.plot < 0x82 && this.instance_destroy()), Mc === 'room_forest_area0' && (this.sprite_index = 'spr_rabbick_enemy_overworld', this.myencounter = 0x10, this.touchsprite = 'spr_rabbick_enemy_overworld', this.alertcon = -0x1, this.pacetype = 0xa), (Mc === 'room_forest_area1' || Mc === 'room_forest_area3' || Mc === 'room_forest_secret1') && (this.pacetype = 0x7, this.sprite_index = 'spr_rabbick_enemy_overworld', Mc === 'room_forest_area1' && (this.pacetype = 0xb), this.myencounter = 0x11, this.touchflag = 0x1f9, this.touchsprite = 'spr_rabbick_enemy_overworld', Mc === 'room_forest_area3' && (this.myencounter = 0x18), Mc === 'room_forest_secret1' && (this.myencounter = 0x20), this.alertcon = -0x1), Mc === 'room_forest_maze1' && (this.touchflag = 0x1f9, this.sprite_index = 'spr_rabbick_enemy_overworld', this.myencounter = 0x11, this.touchsprite = 'spr_rabbick_enemy_overworld', this.pacetype = 0x1, Ig.flag[0x1f9] === 0x1 && (this.chasetype = 0x3)), Mc === 'room_forest_maze2' && (this.touchflag = 0x1fa, this.myencounter = 0x12, this.sprite_index = 'spr_blockguy_overworld', this.touchsprite = 'spr_blockguy_overworld', this.pacetype = 0x1, Ig.flag[0x1fa] === 0x1 ? this.chasetype = 0x3 : this.chasetype = 0x4), Mc === 'room_forest_beforeclover' && (this.myencounter = 0x12, this.sprite_index = 'spr_blockguy_overworld', this.touchsprite = 'spr_blockguy_overworld', this.pacetype = 0x7, this.alertcon = -0x1), Mc === 'room_forest_area4' && (this.myencounter = 0x13, this.sprite_index = 'spr_blockguy_overworld', this.touchsprite = 'spr_blockguy_overworld', this.pacetype = 0x7, this.x < Mp / 0x2 && (this.pacetype = 7.5), this.eraser = 0x1, this.touchflag = 0x1fa, this.chasetype = 0x4, this.radius = 0x5a, this.ignoresolid = 0x1, this.offscreen_frozen = 0x0, Ig.flag[0x1fa] >= 0x1 && (this.alertcon = -0x1)), Mc === 'room_cc_1f' && (this.pacetype = 0x9, this.chasetype = 0x4, this.moveradius = 0xa0, this.sprite_index = 'spr_daimond_knight_idle', this.myencounter = 0x1c, this.touchsprite = 'spr_daimond_knight_idle', this.touchflag = 0x1fb, Ig.flag[0x1fb] === 0x1 && (this.alertcon = -0x1)), Mc === 'room_cc_3f' && (this.eraser = 0x1, this.ignoresolid = 0x1, this.chasetype = 0x4, this.pacetype = 0x9, this.radius = 0xa5, this.moveradius = 0xa0, this.x >= Mp / 0x2 && (this.moveradius = -0xa0), this.sprite_index = 'spr_hathyx_overworld', this.myencounter = 0x1e, this.touchsprite = 'spr_hathyx_overworld', this.offscreen_frozen = 0x0, this.touchflag = 0x1fc, Ig.flag[0x1fc] === 0x1 && (this.alertcon = -0x1));
    }
    ["draw"](PV) {
      this.facing === 0x0 && PV.draw_sprite_ext(this.sprite_index, this.walk_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha), this.facing === 0x1 && PV.draw_sprite_ext(this.sprite_index, this.walk_index, this.x + this.sprite_width, this.y, -this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    }
    ["userEvent0"]() {
      this.touchflag > 0x0 && ((Ig.flag ??= [])[this.touchflag] = 0x1), this.newme = oV('instance_create').call(this, this.x, this.y, jd), this.newme.sprite_index = this.touchsprite, this.newme.touchsprite = this.touchsprite, this.newme.slidesprite = this.sprite_index, this.newme.depth = this.depth, this.newme.eraser = this.eraser, oD(this.newme, PV => {
        PV.event_user(0x0);
      }), Ig.encounterno = this.myencounter, this.instance_destroy();
    }
    ["step"]() {
      oV('scr_depth').call(this), this.targetx = MO('obj_mainchara').x + MO('obj_mainchara').sprite_width / 0x2 - this.sprite_width / 0x2, this.targety = MO('obj_mainchara').y + MO('obj_mainchara').sprite_height / 0x2 - this.sprite_height / 0x2, Ig.interact === 0x0 && (this.frozen = 0x0), Ix(oV('scr_outside_camera').call(this, 0xc8)) && this.offscreen_frozen === 0x1 ? this.frozen = 0x1 : this.frozen = 0x0, Ig.interact !== 0x0 && (this.frozen = 0x1), this.frozen === 0x1 && this.hadfrozen === 0x0 && (this.remspeed = this.speed, this.speed = 0x0, this.hadfrozen = 0x1), this.frozen === 0x0 && (this.hadfrozen === 0x1 && (this.speed === 0x0 && (this.speed = this.remspeed), this.hadfrozen = 0x0), this.pacecon === 0x0 && (this.pacetimer += 0x1, this.pacetype, this.pacetype === 0x1 && (this.pacetimer === 0xa && (this.hspeed = 0x2), this.pacetimer === 0x22 && (this.hspeed = 0x0), this.pacetimer === 0x32 && (this.hspeed = -0x2), this.pacetimer === 0x4a && (this.hspeed = 0x0), this.pacetimer === 0x50 && (this.pacetimer = 0x0)), this.pacetype === 0x2 && (this.hspeed = IU(this.pacetimer / 0x18) * 0x4, this.vspeed = If(this.pacetimer / 0x18) * 0x4), this.pacetype === 0x5 && (this.pacetimer === 0x1 && (this.vspeed = 0x6), this.pacetimer === 0x19 && (this.vspeed = -0x6), this.y < this.ystart && (this.pacetimer = 0x0)), this.pacetype === 0x6 && (this.cancelwalk = 0x1, this.walk_index += 0.25), this.pacetype === 0x7 && (this.hspeed = -IU(this.pacetimer / 0x1e) * 0xa), this.pacetype === 7.5 && (this.hspeed = IU(this.pacetimer / 0x1e) * 0xa), this.pacetype === 0x8 && (this.vspeed = -IU(this.pacetimer / 0x19) * 12.5), this.pacetype === 0x9 && (this.hspeed = IU(this.pacetimer / (this.pacespeed * 0x1e)) * (this.moveradius / 0x14), this.pacespeed = 0.8), this.pacetype === 0xa && (this.pacecon2 === 0x0 && (this.vspeed > 0x0 && (this.vspeed *= 0.9), this.vspeed <= 0.5 && this.pacecon2 === 0x0 && (this.pacecon2 = 0x1)), this.pacecon2 === 0x1 && this.move_towards_point(MO('obj_mainchara').x, MO('obj_mainchara').y, 0x4))), this.alertcon === 0x0 && (this.alerttimer += 0x1, this.alerttimer >= 0x6 && (this.alerttimer -= 0x6, MJ.call(this, this.targetx + this.sprite_width / 0x2, this.targety + this.sprite_height / 0x2) <= this.radius && (this.speed = 0x0, this.pacecon = 0x1, this.alerttimer = 0x0, this.alertcon = 0x1, oV('snd_play').call(this, 'snd_b'), oV('instance_create').call(this, this.x + this.sprite_width / 0x2, this.y - 0x14, EZ), (this.alarm ??= [])[0x4] = 0x14))), this.alertcon === 0x2 && (this.chasetype === 0x0 && (this.speed < 0x4 && (this.speed = 0x4), this.speed < 0x7 && (this.speed += 0.5), this.move_towards_point(this.targetx, this.targety, this.speed)), this.chasetype === 0x1 && (this.alerttimer === 0x0 && this.move_towards_point(this.targetx, this.targety, 0xa), this.alerttimer += 0x1, this.alerttimer >= 0x14 && (this.speed *= 0.75), this.alerttimer >= 0x19 && (this.speed = 0x0), this.alerttimer >= 0x1b && (this.alerttimer = 0x0)), this.chasetype === 0x2 && (this.alerttimer === 0x0 && (this.xnext = 0x0, this.ynext = 0x0, Ix(oV('right_h').call(this)) && (this.xnext = 0x84), Ix(oV('left_h').call(this)) && (this.xnext = -0x84), Ix(oV('down_h').call(this)) && (this.ynext = 0x84), Ix(oV('up_h').call(this)) && (this.ynext = -0x84), this.move_towards_point(this.targetx + this.xnext, this.targety + this.ynext, 0xa)), this.alerttimer += 0x1, this.alerttimer >= 0x14 && (this.speed *= 0.75), this.alerttimer >= 0x19 && (this.speed = 0x0), this.alerttimer >= 0x1b && (this.alerttimer = 0x0)), this.chasetype === 0x3 && (this.speed < 0x2 && (this.speed = 0x2), this.speed < 0x4 && (this.speed += 0.5), this.move_towards_point(this.targetx, this.targety, this.speed)), this.chasetype === 0x4 && (this.speed < 0x6 && (this.speed = 0x6), this.speed < 0xe && (this.speed += 0.5), this.move_towards_point(this.targetx, this.targety, this.speed))), this.facetimer += 0x1, this.facetimer >= 0xa && (this.hspeed <= -0.2 && this.facing === 0x1 && (this.facing = 0x0, this.facetimer = 0x0), this.hspeed >= 0.2 && this.facing === 0x0 && (this.facing = 0x1, this.facetimer = 0x0)), this.cancelwalk === 0x0 && (this.walk_index += this.speed / 0x14, this.speed === 0x0 && (this.walk_index = 0x0)));
    }
    ["endStep"]() {
      this.alertcon >= 0x1 && this.frozen === 0x0 && this.ignoresolid === 0x0 && (Ix(IT(this.bbox_left, this.bbox_top, this.bbox_right, this.bbox_bottom, Im, 0x0, 0x1)) || Ix(IT(this.bbox_left, this.bbox_top, this.bbox_right, this.bbox_bottom, IP, 0x0, 0x1))) && (this.x -= this.hspeed, this.y -= this.vspeed, this.hspeed = 0x0, this.vspeed = 0x0);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.alertcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x0) return this.userEvent0();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(ED, 'obj_chaseenemy'), oA(ED, 'kinds', oM('obj_chaseenemy', o8)), oA(ED, 'defaultDepth', 0x0), oA(ED, 'defaultSprite', 'spr_diamond_overworld');
var EY = ED,
  Ew = class rx extends o8 {};
oH(Ew, 'obj_chaseenemy_Collision'), oA(Ew, 'kinds', oM('obj_chaseenemy_Collision', o8));
var Ep = Ew,
  EC = class rF extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.checked = 0x0, this.crown = 0x0, this.attacktype = 0x0, this.thrown = 0x0, this.thissprite = 'spr_checkers_idle', this.scon = 0x0, this.secondtime = 0x0, this.bowcounter = 0x0, this.ralsei_lecture = 0x0, this.milk_counter = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), this.siner = 0x0, PV.draw_sprite_ext('spr_checkers_idle', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_checkers_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_checkers_idle'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0, this.sprite_index = this.thissprite, this.image_index = this.siner / 0x3;
    }
    ["userEvent11"]() {
      Mc === 'room_field1' && ((Ig.flag ??= [])[0x1f4] += 0x1), Mc === 'room_field2' && Ig.flag[0x32] !== 0x0 && ((Ig.flag ??= [])[0x1f5] = Ig.flag[0x32]);
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x4, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x4, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monstertype[this.myself] === 0x15 && (this.secondtime = 0x1), Ig.monster[this.myself] === 0x1 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, this.secondtime === 0x1 && (this.milk_counter = 0x63), this.secondtime === 0x1 && (this.ralsei_lecture = 0x63), Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), this.milkmax = 0x3e8, this.milk_counter > 0x0 && (this.milkmax = 0x258), Ig.monsterhp[this.myself] > this.milkmax && (!Ix(IJ(IH)) && !Ix(IJ(yH)) && oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW)), Ig.mnfight = 0x2, this.rtimer = 0x0, Ig.typer = 0x32, this.talked = 0x2, this.attacked = 0x0, this.talktimer = 0x0), this.talked === 0x2 && (Ig.mnfight = 0x2), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.talked = 0x0, this.milkmax = 0x3e8, this.milk_counter > 0x0 && (this.milkmax = 0x258), Ig.monsterhp[this.myself] <= this.milkmax ? this.scon === 0x0 && (this.scon = 0x1) : (Ix(IJ(y1)) || (this.attacktype === 0x0 && (this.rr = 0x0), this.attacktype === 0x1 && (this.rr = 0x3), this.attacktype === 0x2 && (this.rr = 0x1), this.attacktype === 0x3 && (this.rr = 0x2), this.dc = oV('instance_create').call(this, this.x, this.y, y1), this.dc.leapmode = this.rr, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.attacktype += 0x1, this.attacktype > 0x3 && (this.attacktype = 0x0)), this.siner = 0x0, this.visible = 0x0, this.turns += 0x1), Ig.turntimer = 0x3e7, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0), (Ig.battlemsg ??= [])[0x0] = "* K.Round shuffles furiously.", Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* K.Round looks weak."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* K.Round's shuffle becomes lethargic."), this.crown > 0x0 && ((Ig.battlemsg ??= [])[0x0] = oV('scr_84_get_subst_string').call(this, "* The crown is \\cY~1-percent\\cW loose!", String(this.crown)))) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.scon === 0x1 && (this.milk_counter > 0x0 ? this.scon = 1.5 : (oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), (Ig.msg ??= [])[0x0] = "* K. ROUND felt stressed out and attacked!/%", oV('scr_battletext_default').call(this), this.scon = 1.5)), this.scon === 1.5 && !Ix(IJ(I5)) && (oV('snd_play').call(this, 'snd_magicsprinkle'), oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), (Ig.msg ??= [])[0x0] = "* K. ROUND practiced self-care!", Ig.turntimer = 0x3e7, oV('scr_battletext_default').call(this), this.milk = oV('scr_dark_marker').call(this, this.x - 0x64, this.y + 0x3c, 'spr_checkers_milk'), oD(this.milk, PV => {
        PV.image_speed = 0x0, PV.image_xscale = 0x4, PV.image_yscale = 0x4, PV.image_alpha = 0x0;
      }), this.milk.depth = this.depth - 0x1, this.scon = 0x2, this.milktimer = 0x0), this.scon === 0x2 && (oD(this.milk, PV => {
        PV.image_xscale -= 0.2, PV.image_yscale -= 0.2, PV.image_alpha += 0.1;
      }), this.milktimer += 0x1, this.milktimer >= 0xa && (this.scon = 0x3, this.milktimer = 0x0, oD(this.milk, PV => {
        PV.image_alpha = 1.4;
      }))), this.scon === 0x3 && (this.milktimer += 0x1, this.milktimer >= 0x19 && (this.scon = 0x4, this.milktimer = 0x0)), this.scon === 0x4 && (oD(this.milk, PV => {
        PV.hspeed += 0x2, PV.image_alpha -= 0.1;
      }), this.milktimer += 0x1, this.milktimer === 0xa && (Ig.monsterat[this.myself] < 0xa && ((Ig.monsterat ??= [])[this.myself] += 0.5), oV('snd_play').call(this, 'snd_power'), this.milkheal = 0x2bc, this.milk_counter === 0x0 && (this.milkheal = 0x12c), (Ig.monsterhp ??= [])[this.myself] += this.milkheal, this.healamt = oV('instance_create').call(this, Ig.monsterx[this.myself], Ig.monstery[this.myself], MW), oD(this.healamt, PV => {
        PV.delay = 0x8, PV.type = 0x3, PV.damage = 0x2bc;
      }), this.healamt.damage = this.milkheal, this.hanim = oV('instance_create').call(this, this.x, this.y, Mq), this.hanim.target = this), this.milktimer >= 0xf && (oD(this.milk, PV => {
        PV.instance_destroy();
      }), this.scon = 0x5, this.milktimer = 0x0)), this.scon === 0x5 && (this.milktimer += 0x1, this.milktimer >= 0x1e && (this.milk_counter > 0x0 ? (oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), this.scon = 0x0, this.milktimer = 0x0, Ig.turntimer = 0x0) : (oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), this.scon = 0x6, (Ig.msg ??= [])[0x0] = "* K. ROUND's HP and ATTACK went up!/", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* Susie^1! Stop attacking it^1! You're making it stronger!/", oV('scr_susface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* Pssh^1, and let it think I'm AFRAID^1? No way!/%", oV('scr_battletext_default').call(this)), this.milk_counter += 0x1)), this.scon === 0x6 && (Ix(IJ(I5)) ? Ig.turntimer = 0x3e7 : (Ig.fc = 0x0, this.scon = 0x0, this.milktimer = 0x0, Ig.turntimer = 0x0)), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, this.secondtime === 0x0 ? ((Ig.msg ??= [])[0x0] = "* K.ROUND - AT 9 DF 3&* Check^1?&* That's chess^1, not checkers!/%", ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Checkers', (Ig.flag ??= [])[0xf6] = 0x1, this.checked === 0x1 && ((Ig.msg ??= [])[0x0] = "* K.ROUND - AT 9 DF 3&* That's better./%"), this.checked = 0x1) : (Ig.flag[0xf6] === 0x1 ? ((Ig.msg ??= [])[0x0] = "* K.ROUND - AT 9 DF 3&* Watch out for its Flying King attack!/", (Ig.msg ??= [])[0x1] = "* (Also^1, you need to get the CROWN off of its head.)/%") : ((Ig.msg ??= [])[0x0] = "* K.ROUND - AT 9 DF 3&* It's being controlled into attacking...!/", (Ig.msg ??= [])[0x1] = "* (Though^1, wouldn't it just attack anyway...?)/%"), this.checked = 0x1), oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.secondtime === 0x0 && (this.crown += 0xf), this.secondtime === 0x1 && (this.crown += 0x12), (Ig.msg ??= [])[0x0] = "* You bowed to K. ROUND./%", oW.with('obj_herokris', PV => {
        PV.visible = 0x0;
      }), (Ig.faceaction ??= [])[0x0] = 0x0, (Ig.charaction ??= [])[0x0] = 0x0, this.bowkris = oV('scr_dark_marker').call(this, MO('obj_herokris').x, MO('obj_herokris').y, 'spr_krisb_bow'), oD(this.bowkris, PV => {
        oV('scr_oflash').call(PV), PV.a = oV('scr_afterimage').call(PV), PV.a.hspeed = 0x5, PV.a.depth = PV.depth + 0x1;
      }), oV('snd_play').call(this, 'snd_item'), oV('scr_battletext_default').call(this), this.actcon = 0x14), this.actcon === 0x14 && !Ix(IJ(I5)) && (this.visible = 0x0, this.bowcheck = oV('scr_dark_marker').call(this, this.x, this.y, 'spr_checkers_bow'), oD(this.bowcheck, PV => {
        PV.image_speed = 0.334;
      }), Ig.fc = 0x0, Ig.typer = 0x4, (Ig.msg ??= [])[0x0] = "* It bowed back^1.&* Its crown loosened a little./%", this.ralsei_lecture === 0x0 && this.secondtime === 0x0 && ((Ig.msg ??= [])[0x0] = "* It bowed back^1.&* Its crown loosened a little./", oV('scr_ralface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* That's it^1, Kris^1! If we can get its crown off.../", (Ig.msg ??= [])[0x3] = "\\E8* It should turn back into a little guy...!/", (Ig.msg ??= [])[0x4] = "\\E0* Susie^1! Help us bow at it!/", oV('scr_susface').call(this, 0x5, 0x0), (Ig.msg ??= [])[0x6] = "* Nah^1, it's crown'll come off.../", (Ig.msg ??= [])[0x7] = "\\E4* When I smash this guy into the GROUND!/", oV('scr_ralface').call(this, 0x8, 0x1), (Ig.msg ??= [])[0x9] = "* .../%", this.ralsei_lecture = 0x1), this.thrown === 0x0 && this.secondtime === 0x1 && (this.bowcounter === 0x0 && (Ig.fc = 0x2, Ig.fe = 0x3, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* Huh!? That hardly did anything!/", (Ig.msg ??= [])[0x1] = "\\E1* How can we push off that CROWN...?/", oV('scr_susface').call(this, 0x2, 0x1), (Ig.msg ??= [])[0x3] = "* ... Hmm./%"), this.bowcounter === 0x1 && (Ig.fc = 0x2, Ig.fe = 0x3, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* It's still hardly working!/", (Ig.msg ??= [])[0x1] = "\\E6* Whatever can we do^1, Kris...?/", oV('scr_susface').call(this, 0x2, 0x2), (Ig.msg ??= [])[0x3] = "* ... Hey./%"), this.bowcounter === 0x2 && (Ig.fc = 0x2, Ig.fe = 0x8, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* Sometimes persistence is key^1, Kris!!/", (Ig.msg ??= [])[0x1] = "\\E6* It'll be hard^1, but we can do it!!/", oV('scr_susface').call(this, 0x2, 0x7), (Ig.msg ??= [])[0x3] = "* HEY YOU GUYS!!!/%")), this.bowcounter += 0x1, oV('scr_battletext').call(this), this.actcon = 0x15), this.actcon === 0x15 && !Ix(IJ(I5)) && (oD(this.bowkris, PV => {
        PV.instance_destroy();
      }), oD(this.bowcheck, PV => {
        PV.instance_destroy();
      }), this.visible = 0x1, oW.with('obj_herokris', PV => {
        PV.visible = 0x1;
      }), this.actcon = 0x1), this.secondtime === 0x0 && this.acting === 0x3 && this.actcon === 0x0 && (this.crown += 0x14, (Ig.msg ??= [])[0x0] = "* You and Ralsei bowed./%", oW.with('obj_herokris', PV => {
        PV.visible = 0x0;
      }), oW.with('obj_heroralsei', PV => {
        PV.visible = 0x0;
      }), (Ig.faceaction ??= [])[0x0] = 0x0, (Ig.charaction ??= [])[0x0] = 0x0, (Ig.faceaction ??= [])[0x1] = 0x0, (Ig.charaction ??= [])[0x1] = 0x0, this.bowkris = oV('scr_dark_marker').call(this, MO('obj_herokris').x, MO('obj_herokris').y, 'spr_krisb_bow'), oD(this.bowkris, PV => {
        oV('scr_oflash').call(PV), PV.a = oV('scr_afterimage').call(PV), PV.a.hspeed = 0x5, PV.a.depth = PV.depth + 0x1;
      }), this.bowral = oV('scr_dark_marker').call(this, MO('obj_heroralsei').x, MO('obj_heroralsei').y, 'spr_ralseib_bow'), oD(this.bowral, PV => {
        oV('scr_oflash').call(PV), PV.a = oV('scr_afterimage').call(PV), PV.a.hspeed = 0x5, PV.a.depth = PV.depth + 0x1;
      }), oV('snd_play').call(this, 'snd_item'), oV('scr_battletext_default').call(this), this.actcon = 0x1e), this.actcon === 0x1e && !Ix(IJ(I5)) && (this.visible = 0x0, this.bowcheck = oV('scr_dark_marker').call(this, this.x, this.y, 'spr_checkers_bow'), oD(this.bowcheck, PV => {
        PV.image_speed = 0.5;
      }), (Ig.msg ??= [])[0x0] = "* K. ROUND bowed back^1.&* Its crown loosened!/%", this.ralsei_lecture === 0x0 && this.secondtime === 0x0 && ((Ig.msg ??= [])[0x0] = "* K. ROUND bowed back^1.&* Its crown loosened!/", oV('scr_ralface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* That's it^1, Kris^1! If we can get its crown off.../", (Ig.msg ??= [])[0x3] = "\\E8* It should turn back into a little guy...!/", (Ig.msg ??= [])[0x4] = "\\E0* Susie^1! Help us bow at it!/", oV('scr_susface').call(this, 0x5, 0x0), (Ig.msg ??= [])[0x6] = "* Nah^1, its crown'll come off.../", (Ig.msg ??= [])[0x7] = "\\E4* When I smash this guy to the GROUND!/", oV('scr_ralface').call(this, 0x8, 0x1), (Ig.msg ??= [])[0x9] = "* .../%", this.ralsei_lecture = 0x1), oV('scr_battletext_default').call(this), this.actcon = 0x1f), this.actcon === 0x1f && !Ix(IJ(I5)) && (oD(this.bowral, PV => {
        PV.instance_destroy();
      }), oD(this.bowkris, PV => {
        PV.instance_destroy();
      }), oD(this.bowcheck, PV => {
        PV.instance_destroy();
      }), this.visible = 0x1, oW.with('obj_heroralsei', PV => {
        PV.visible = 0x1;
      }), oW.with('obj_herokris', PV => {
        PV.visible = 0x1;
      }), this.actcon = 0x1), this.secondtime === 0x1 && this.acting === 0x3 && this.actcon === 0x0 && (this.thrown === 0x1 && (oD(this.trsus, PV => {
        PV.instance_destroy();
      }), this.thrown = 0x2), this.thrown > 0x0 ? (((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Throw', (Ig.msg ??= [])[0x0] = "* Press " + oV('scr_get_input_name').call(this, 0x6) + " to determine the ANGLE!", this.flash = 0x0, this.becomeflash = 0x0, oV('scr_battletext_default').call(this), this.actcon = 0x5a, oV('instance_create').call(this, this.x, this.y, EG), this.throwsus = oV('instance_create').call(this, MO('obj_herosusie').x, MO('obj_herosusie').y, Eu), this.visible = 0x0, (Ig.faceaction ??= [])[0x1] = 0x0, (Ig.charaction ??= [])[0x1] = 0x0, (Ig.faceaction ??= [])[0x2] = 0x0, (Ig.charaction ??= [])[0x2] = 0x0, oW.with('obj_herosusie', PV => {
        PV.visible = 0x0;
      }), oW.with('obj_heroralsei', PV => {
        PV.visible = 0x0;
      }), oV('snd_play').call(this, 'snd_grab')) : (Ig.typer = 0x1f, Ig.fc = 0x2, Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "* Susie^1? You want to ACT^1? Aww, what's your idea?/", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Umm..^1. well..^1. how do I say this./", (Ig.msg ??= [])[0x3] = "* I kind of..^1.&* Need you for this one./", oV('scr_ralface').call(this, 0x4, 0x8), (Ig.msg ??= [])[0x5] = "* That's fine^1, Susie^1!&* I'll help!/", (Ig.msg ??= [])[0x6] = "\\E0* You want to apologize to it for earlier^1, right?/", oV('scr_susface').call(this, 0x7, 0x2), (Ig.msg ??= [])[0x8] = "* Nah^1, I just need you to stay still./%", this.actcon = 0xa, oV('scr_battletext').call(this))), this.acting === 0x4 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You explained to K. Round about the importance of dodging Susie's attacks./", (Ig.msg ??= [])[0x1] = "* But it didn't seem to understand.../%", this.warned === 0x1 && ((Ig.msg ??= [])[0x0] = "* You started making siren noises with your mouth and looking at Susie./", (Ig.msg ??= [])[0x1] = "* K. Round still didn't understand.../%"), this.warned === 0x2 && ((Ig.msg ??= [])[0x0] = "* You started explaining that Susie is really dangerous and strong./", (Ig.msg ??= [])[0x1] = "* Susie got a large boost to her morale./", (Ig.msg ??= [])[0x2] = "* Susie's ATTACK went up massively...!/%", (Ig.battleat ??= [])[0x2] *= 1.5), this.warned += 0x1, oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, this.crown >= 0x64 ? ((Ig.mercymod ??= [])[this.myself] = 0x3e7, this.actcon = 0x32) : oV('scr_attackphase').call(this)), this.actcon === 0xa && !Ix(IJ(I5)) && (this.actcon = 0xb, (this.alarm ??= [])[0x4] = 0x1e, oW.with('obj_herosusie', PV => {
        PV.visible = 0x0;
      }), oW.with('obj_heroralsei', PV => {
        PV.visible = 0x0;
      }), this.thrown = 0x1, this.trsus = oV('scr_dark_marker').call(this, MO('obj_herosusie').x, MO('obj_herosusie').y, 'spr_susieb_throwralseiready'), oV('snd_play').call(this, 'snd_grab')), this.actcon === 0xc && (Ig.fe = 0x7, (Ig.msg ??= [])[0x0] = "* Kris^1! We gotta get that CROWN off its head!/", (Ig.msg ??= [])[0x1] = "* Help me throw Ralsei at it!/%", oV('scr_battletext').call(this), this.actcon = 0xd), this.actcon === 0xd && !Ix(IJ(I5)) && (this.actcon = 0x0), this.actcon === 0x32 && (this.visible = 0x0, oV('snd_free_all').call(this), this.animtest = oV('instance_create').call(this, this.x, this.y, jV), this.animtest.sprite_index = 'spr_smallchecker_transform3', this.animtest.image_xscale = 0x2, this.animtest.image_yscale = 0x2, this.animtest.type = 0x1, this.actcon = 0x33)), Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(EC, 'obj_checkers_enemy'), oA(EC, 'kinds', oM('obj_checkers_enemy', Mu)), oA(EC, 'defaultDepth', 0x5a), oA(EC, 'defaultSprite', 'spr_checkers_idle');
var EO = EC,
  Ec = class rJ extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x96, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.manual = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.betray = 0x0, this.argue = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_clubs_idle', this.hurtsprite = 'spr_clubs_hurt', this.sparedsprite = 'spr_clubs_spared', (this.acted ??= [])[0x0] = 0x0, (this.acted ??= [])[0x1] = 0x0, (this.acted ??= [])[0x2] = 0x0, (this.acted ??= [])[0x3] = 0x0, (this.acted ??= [])[0x4] = 0x0, (this.acted ??= [])[0x5] = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x2 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && ((Ig.flag ??= [])[0x20a] += 0x1, oV('scr_defeatrun').call(this)), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_clubs_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_clubs_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_clubs_spared'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2 + 0x32, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2 + 0x28, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2), this.text1 = "Nice mouth", this.text2 = "Anger mouth", this.text3 = "Smart Mouth", this.rr === 0x0 && (this.text1 = "Nice to&meet you!", this.text2 = "Die!&Die!&Die!", this.text3 = "Please&ignore&them."), this.rr === 0x1 && (this.text1 = "Let's get&to know&you~", this.text2 = "GET OUT&OF HERE!!", this.text3 = "Sorry&about&this..."), this.rr === 0x2 && (this.text1 = "Nice&weather&today.", this.text2 = "What?&It's just&awful!", this.text3 = "Please&stop, you&two..."), this.acting === 0x2 && (this.text1 = "It's my&birthday~", this.text2 = "WHAT!? NO!&It's MY&birthday!", this.text3 = "We're&triplets..."), this.acting === 0x3 && (this.text1 = "Glasses&are cute,&I think...", this.text2 = "Fluffy!&Glasses!&That's it!", this.text3 = "HIM???&... err,&sure."), this.acting === 0x4 && (this.text1 = "Spaghetti&and tennis&balls.", this.text2 = "That's&GENIUS!", this.text3 = "We really&agree&on it."), this.acting === 0x5 && (this.text1 = "Animals&are kind&of nasty.", this.text2 = "Just AWFUL&in&concept.", this.text3 = "(Never&seen one,&but...)"), this.acting === 0x6 && (this.text1 = "I love&the smell&of trees.", this.text2 = "Oh!&Me too!", this.text3 = "Pollen&makes me...&Uh, sure!"), this.manual === 0x1 && (this.text1 = "Aww, he&MADE that!?&So caring!", this.text2 = "It's SOOO&cute!&I want it!", this.text3 = "(Isn't it&a bit...&boring?)"), (Ig.msg ??= [])[0x0] = this.text1, oV('scr_enemyblcon').call(this, this.x - 0x6e, this.y - 0xa, 0x4), (Ig.msg ??= [])[0x0] = this.text2, oV('scr_enemyblcon').call(this, this.x - 0x7d, this.y + 0x46, 0x5), (Ig.msg ??= [])[0x0] = this.text3, oV('scr_enemyblcon').call(this, this.x + 0x7d, this.y - 0xa, 0x6), oW.with('obj_monsterparent', PV => {
        PV.talkmax = 0xd2;
      }), this.talked = 0x1, this.talktimer = 0x0, this.manual = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.rr === 0x0 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x2, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x4, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, Ig.turntimer = 0x96, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4, 0x5), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Clover flashes a trio of terrible smiles."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is bickering with herselves."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is whispering about cute boys."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is arguing about whose toothbrush is whose."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Clover hums like an out-of-tune choir."), this.rr === 0x5 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like clover and dew."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover seems TIRED of discussing so much."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Clover starts to look wilted."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Clover seems to be getting along with herselves."), this.betray === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover's harmony was shattered by violence."), this.betray = 0x0) : Ig.turntimer = 0x96)), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Ummm^1, what would you like for your birthday?/%", this.argue += 0x1, oV('scr_battletext').call(this), this.actcon = 0x14), this.actcon === 0x14 && !Ix(IJ(I5)) && (Ig.typer = 0x32, this.text1 = "Let's just&have a nice&chat~/%", this.text2 = "You IDIOT!&Ask for a&GIFT!!!/%", this.text3 = "(Just&discuss&our likes.)/%", (Ig.msg ??= [])[0x0] = this.text1, oV('scr_enemyblcon').call(this, this.x - 0x6e, this.y - 0xa, 0x4), (Ig.msg ??= [])[0x0] = this.text2, oV('scr_enemyblcon').call(this, this.x - 0x7d, this.y + 0x46, 0x5), (Ig.msg ??= [])[0x0] = this.text3, oV('scr_enemyblcon').call(this, this.x + 0x7d, this.y - 0xa, 0x6), this.actcon = 0x15), this.actcon === 0x15 && !Ix(IJ(I5)) && ((Ig.msg ??= [])[0x0] = "* (Seems like you should talk about something else...)/%", oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Ummm..^1. What kind of \"Boys\" do you like?/%", this.argue += 0x1, oV('scr_battletext').call(this), this.actcon = 0x16), this.actcon === 0x16 && !Ix(IJ(I5)) && (Ig.typer = 0x32, this.acted[0x2] === 0x0 && (oV('scr_mercyadd').call(this, this.myself, 0x28), (this.acted ??= [])[0x2] = 0x1), this.text1 = "Cute ones!&Hmm hmm~&/%", this.text2 = "NICE ONES,&like I AM!/%", this.text3 = "None...&Um, I mean,&all./%", (Ig.msg ??= [])[0x0] = this.text1, oV('scr_enemyblcon').call(this, this.x - 0x6e, this.y - 0xa, 0x4), (Ig.msg ??= [])[0x0] = this.text2, oV('scr_enemyblcon').call(this, this.x - 0x7d, this.y + 0x46, 0x5), (Ig.msg ??= [])[0x0] = this.text3, oV('scr_enemyblcon').call(this, this.x + 0x7d, this.y - 0xa, 0x6), this.actcon = 0x17), this.actcon === 0x17 && !Ix(IJ(I5)) && ((Ig.msg ??= [])[0x0] = "* (Seems like Clover enjoyed talking about that...)/%", oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Do you like^1, um..^1. Sports?/%", this.argue += 0x1, oV('scr_battletext').call(this), this.actcon = 0x18), this.actcon === 0x18 && !Ix(IJ(I5)) && (Ig.typer = 0x32, this.acted[0x3] === 0x0 && (oV('scr_mercyadd').call(this, this.myself, 0x28), (this.acted ??= [])[0x3] = 0x1), this.text1 = "I wanna&eat a&football./%", this.text2 = "Sports!&My favorite&food!/%", this.text3 = "Oh!&I love you&two!/%", (Ig.msg ??= [])[0x0] = this.text1, oV('scr_enemyblcon').call(this, this.x - 0x6e, this.y - 0xa, 0x4), (Ig.msg ??= [])[0x0] = this.text2, oV('scr_enemyblcon').call(this, this.x - 0x7d, this.y + 0x46, 0x5), (Ig.msg ??= [])[0x0] = this.text3, oV('scr_enemyblcon').call(this, this.x + 0x7d, this.y - 0xa, 0x6), this.actcon = 0x19), this.actcon === 0x19 && !Ix(IJ(I5)) && ((Ig.msg ??= [])[0x0] = "* (Seems like Clover enjoyed talking about that...)/%", oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x5 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of Animals./", (Ig.msg ??= [])[0x1] = "* Clover didn't seem to care.../%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x6 && this.actcon === 0x0 && (this.acted[0x5] === 0x0 && (oV('scr_mercyadd').call(this, this.myself, 0x28), (this.acted ??= [])[0x5] = 0x1), (Ig.msg ??= [])[0x0] = "* You brought up the topic of Trees^1. Clover seemed happy.../%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.argue >= 0x3 && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)", (Ig.monsterstatus ??= [])[this.myself] = 0x1), this.actcon = 0x0, oV('scr_attackphase').call(this)));
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(Ec, 'obj_clubsenemy'), oA(Ec, 'kinds', oM('obj_clubsenemy', Mu)), oA(Ec, 'defaultDepth', 0x5a), oA(Ec, 'defaultSprite', 'spr_clubs_idle');
var EN = Ec,
  Eg = class rQ extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x96, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.manual = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.betray = 0x0, this.argue = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_clubs_idle', this.hurtsprite = 'spr_clubs_hurt', this.sparedsprite = 'spr_clubs_spared';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x2 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 ? oV('scr_defeatrun').call(this) : (Ig.mercymod[this.myself] > 0x0 || this.battlecancel === 0x1) && (this.battlecancel = 0x0, oV('scr_mercyadd').call(this, this.myself, -0x64), this.betray = 0x1), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_clubs_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_clubs_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_clubs_spared'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2 + 0x32, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2 + 0x28, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.text1 = "Nice mouth", this.text2 = "Anger mouth", this.text3 = "Smart Mouth", this.rr === 0x0 && (this.text1 = "Nice to&meet you!", this.text2 = "Die!&Die!&Die!", this.text3 = "Please&ignore&them."), this.rr === 0x1 && (Ix(oV('scr_havechar').call(this, 0x3)) ? (this.text1 = "I want the&fluffy one!", this.text2 = "No, that&one's MINE!", this.text3 = "(He's&boring...)") : (this.text1 = "Where's&Mr. Fluffy?", this.text2 = "YOU must&have&scared him!", this.text3 = "(Who&cares?)")), this.rr === 0x2 && (this.text1 = "I'm the&oldest!", this.text2 = "WHAT!?&I am!!!", this.text3 = "We're&the same&age..."), this.rr === 0x3 && (this.text1 = "Nice&weather&today.", this.text2 = "What?&It's just&awful!", this.text3 = "Please&stop, you&two..."), this.myact === 0x0 && (this.acting === 0x2 && (this.text1 = "The King&is great!", this.text2 = "He's&TERRIBLE!", this.text3 = "Please&stop, you&two..."), this.acting === 0x3 && (this.text1 = "An angel&is watching&us.", this.text2 = "You BELIEVE&that&garbage?", this.text3 = "Please&stop, you&two..."), this.acting === 0x4 && (this.text1 = "I wanna&eat a&football.", this.text2 = "Sports!&My favorite&food!", this.text3 = "Oh!&I love you&two!")), this.myact === 0x1 && (this.acting === 0x2 && (this.text1 = "Lightners&deserve&respect.", this.text2 = "Hell no!&They can&all die!", this.text3 = "Please&stop, you&two..."), this.acting === 0x3 && (this.text1 = "Oh, oh! That&boy is ever&so cute!", this.text2 = "So fluffy!&I want to&pet him!", this.text3 = "HIM???&... err,&sure.", Ix(oV('scr_havechar').call(this, 0x2)) && (this.text3 = "(What&about the&girl..?)"), Ix(oV('scr_havechar').call(this, 0x3)) || (this.text1 = "Oh, oh!&I want a&sweet boy.", this.text2 = "Someone&NICE, like&me!", this.text3 = "...&Sure,&I guess.")), this.acting === 0x4 && (this.text1 = "I use a&gamepad to&aim!", this.text2 = "IDIOT!&Mouse and&keyboard!", this.text3 = "Please&stop, you&two...")), this.myact === 0x2 && (this.acting === 0x2 && (this.text1 = "I love&the smell&of trees.", this.text2 = "Oh!&Me too!", this.text3 = "Pollen&makes me...&Uh, sure!"), this.acting === 0x3 && (this.text1 = "A ghost&told me I&was stupid.", this.text2 = "That was me,&you idiot!", this.text3 = "Please&stop, you&two..."), this.acting === 0x4 && (this.text1 = "Our favorite&video game&is...", this.text2 = "Shut up!!&They'll make&fun of us!!!", this.text3 = "Please&stop, you&two...")), this.manual === 0x1 && (this.text1 = "Aww, he&MADE that!?&So caring!", this.text2 = "It's SOOO&cute!&I want it!", this.text3 = "(Isn't it&a bit...&childish?)"), this.betray === 0x1 && (this.text1 = "Ouchy!&That hurts!", this.text2 = "Suck it up,&idiot!", this.text3 = "(We're&fighting&again!?)"), (Ig.msg ??= [])[0x0] = this.text1, oV('scr_enemyblcon').call(this, this.x - 0x6e, this.y - 0xa, 0x4), (Ig.msg ??= [])[0x0] = this.text2, oV('scr_enemyblcon').call(this, this.x - 0x7d, this.y + 0x46, 0x5), (Ig.msg ??= [])[0x0] = this.text3, oV('scr_enemyblcon').call(this, this.x + 0x7d, this.y - 0xa, 0x6), oW.with('obj_monsterparent', PV => {
        PV.talkmax = 0x96;
      }), this.talked = 0x1, this.talktimer = 0x0, this.manual = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.rr === 0x0 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x2, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x4, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, Ig.turntimer = 0x8c, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4, 0x5), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Clover flashes a trio of terrible smiles."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is bickering with herselves."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is whispering about cute boys."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Clover is arguing about whose toothbrush is whose."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Clover hums like an out-of-tune choir."), this.rr === 0x5 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like clover and dew."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover seems TIRED of arguing so much."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Clover starts to look wilted."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Clover seems to be getting along with herselves."), this.betray === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Clover's harmony was shattered by violence."), this.betray = 0x0) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && oV('scr_mercyadd').call(this, this.myself, 0x64), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%", oV('scr_battletext_default').call(this)), this.myact === 0x0 && (this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of POLITICS^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of RELIGION^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of SPORTS^1.&* CLOVER seems relieved./%", this.battlecancel = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1)), this.myact === 0x1 && (this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of KINDNESS^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of CUTEBOYS^1.&* CLOVER seems excited./%", this.battlecancel = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of GUNCONTROL^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1)), this.myact === 0x2 && (this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of TREES^1.&* CLOVER seems relieved./%", this.battlecancel = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of GHOSTS^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You brought up the topic of GAMES^1.&* CLOVER started to argue./%", this.argue += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1)), this.acting === 0x5 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You and Ralsei warned Clover about Susie^1.&* The enemy went on guard.../%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.argue >= 0x2 && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)", (Ig.monsterstatus ??= [])[this.myself] = 0x1), this.actcon = 0x0, oV('scr_attackphase').call(this));
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(Eg, 'obj_clubsenemy_old'), oA(Eg, 'kinds', oM('obj_clubsenemy_old', Mu)), oA(Eg, 'defaultDepth', 0x5a), oA(Eg, 'defaultSprite', 'spr_clubs_idle');
var EB = Eg,
  EL = class rl extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_diamondm_idle', this.hurtsprite = 'spr_diamondm_hurt', this.sparedsprite = 'spr_diamondm_spared';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (Ig.flag[Math.trunc(0x33 + this.myself)] === 0x5 && ((Ig.flag ??= [])[0x20b] += 0x1), (Ig.flag ??= [])[0x208] += 0x1, oV('scr_defeatrun').call(this)), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_diamondm_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_diamondm_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_diamondm_spared'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent11"]() {
      Mc === 'room_field1' && ((Ig.flag ??= [])[0x1f4] += 0x1), Mc === 'room_field2' && Ig.flag[0x32] !== 0x0 && ((Ig.flag ??= [])[0x1f5] = Ig.flag[0x32]);
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Long live&the guy&who pays us!"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Shine,&shine"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "I'm just a&normal&person."), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "Face my&Diamond&Cutter!"), this.acting === 0x2 && ((Ig.msg ??= [])[0x0] = "Yeah I&guess that&makes&sense."), this.acting === 0x3 && ((Ig.msg ??= [])[0x0] = "(Yawn)...&What? OK..."), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.rr === 0x0 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x0, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, Ig.turntimer = 0x8c, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn is glimmering plainly."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn has no strong opinions one way or the other."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn thinks about elaborate stones."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn dislikes its boss^1, but doesn't care enough to quit."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like jewelry."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn is starting to fall asleep."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn's luster begins to fade."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Rudinn is alright with not fighting.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3 && (Ig.typer = 0x32, (Ig.mercymod ??= [])[this.myself] = 0x3e7, (Ig.msg ??= [])[0x0] = "Alright^1,&you convinced&me!!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0xf, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* RUDINN - AT 6 DF 0&* This ambivalent diamond isn't any girl's best friend./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.nexttry === 0x1 && ((Ig.flag ??= [])[0xd0] = 0x1), (Ig.msg ??= [])[0x0] = "* You told Rudinn to quit fighting^1.&* It was utterly swayed./%", oV('scr_mercyadd').call(this, this.myself, 0x64), oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
          for ((Ig.msg ??= [])[0x0] = "* You lectured the enemies on the importance of kindness./", (Ig.msg ??= [])[0x1] = "* The enemies became \\cBTIRED\\cW.../%", this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Tired)", (Ig.monsterstatus ??= [])[this.i] = 0x1;
          oV('scr_mercyadd').call(this, this.myself, 0x32), oV('scr_battletext_default').call(this), this.actcon = 0x1;
        }
        if (this.acting === 0x4 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You and Ralsei warned Rudinn about Susie^1.&* The enemy went on guard.../%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0xa && IJ(I5) === 0x0 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "You kidding?&I can't quit.&Stopping you&is my job!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.actcon = 0xb), this.actcon === 0xb && IJ(I5) === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* Really^1?&* What do you spend your money on?/%", oV('scr_battletext').call(this), this.actcon = 0xc), this.actcon === 0xc && IJ(I5) === 0x0 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "I'm a normal&person./", (Ig.msg ??= [])[0x1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.actcon = 0xe), this.actcon === 0xe && IJ(I5) === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* (Kris^1, let's try CONVINCING them again...)/%", oV('scr_battletext').call(this), this.nexttry = 0x1, this.actcon = 0x1);
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(EL, 'obj_diamondenemy'), oA(EL, 'kinds', oM('obj_diamondenemy', Mu)), oA(EL, 'defaultDepth', 0x5a), oA(EL, 'defaultSprite', 'spr_diamondm_idle');
var EU = EL,
  Ef = class rT extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.plot = 0x0, this.checked = 0x0, this.r_hugtime = 0x0, this.hugtime = 0x0, this.dial = 0x0, this.attackedkris = 0x0, this.hurtkris = 0x0, this.attackcon = 0x0, this.attacktimer = 0x0, this.misstime = 0x0, this.hittime = 0x0, this.defendtime = 0x0, this.won = 0x0, this.hugtime = 0x0, this.hitdum = 0x0, this.ambushed = 0x0, this.battlecancel = 0x0, this.defend_command = 0x0, this.attack_command = 0x0, this.act_command = 0x0, this.spell_command = 0x0, this.spare_command = 0x0, this.spare_used = 0x0, this.item_command = 0x0, this.win_spare = 0x0, this.ral_wrongcommand = 0x0, this.ral_wrongcommand_count = 0x0, this.pacifycon = 0x0, this.sparecon = 0x0, this.sparedsprite = this.sprite_index, this.hurtsprite = this.sprite_index, this.idlesprite = this.sprite_index, this.kris_inithp = Ig.hp[0x1], this.wontimer = 0x0;
    }
    ["destroy"]() {
      oW.with('obj_npc_room', PV => {
        PV.visible = 0x1;
      });
    }
    ["draw"](PV) {
      this.state === 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)"), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself], this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.sprite_index, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.sprite_index, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sprite_index), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent10"]() {
      oV('instance_create').call(this, 0x64, 0x64, Ez);
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_height / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2 + 0x1e, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (this.ambushed === 0x0 && (oV('scr_ambush').call(this), this.ambushed = 0x1), this.plot !== 0x3 ? ((Ig.charmove ??= [])[0x0] = 0x1, (Ig.charmove ??= [])[0x1] = 0x0, Ig.charspecial[0x0] === 0x64 ? this.spare_used = 0x1 : this.spare_used = 0x0) : ((Ig.charmove ??= [])[0x0] = 0x0, (Ig.charmove ??= [])[0x1] = 0x1, Ig.charspecial[0x1] === 0x64 && (this.ral_wrongcommand = 0x1), Ig.charaction[0x1] === 0x4 && (this.ral_wrongcommand = 0x1), Ig.charaction[0x1] !== 0x2 && Ig.charaction[0x1] !== 0x4 && (oW.with('obj_attackpress', PV => {
        oW.with('obj_heroparent', PD => {
          PD.state === 0x1 && (PD.state = 0x0), PD.attacked = 0x0, PD.itemed = 0x0;
        }), Ig.mnfight = 0x1, Ig.myfight = -0x1, PV.instance_destroy();
      }), (Ig.charaction ??= [])[0x1] = 0x0, (Ig.faceaction ??= [])[0x1] = 0x0)), Ig.monster[this.myself] === 0x1) {
        if ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, this.commanded = 0x0, Ig.mnfight === 0x1 && this.talked === 0x0) {
          if ((Ig.writerimg ??= [])[0x0] = oV('scr_84_get_sprite').call(this, 'spr_btfight'), (Ig.writerimg ??= [])[0x1] = oV('scr_84_get_sprite').call(this, 'spr_btdefend'), (Ig.writerimg ??= [])[0x2] = oV('scr_84_get_sprite').call(this, 'spr_bttech'), (Ig.writerimg ??= [])[0x3] = oV('scr_84_get_sprite').call(this, 'spr_btact'), (Ig.writerimg ??= [])[0x4] = oV('scr_84_get_sprite').call(this, 'spr_btspare'), (Ig.writerimg ??= [])[0x5] = oV('scr_84_get_sprite').call(this, 'spr_btitem'), this.attackcon === 0x0) {
            if (oV('scr_moveheart').call(this), this.abletotarget = 0x1, Ig.charcantarget[0x0] === 0x0 && Ig.charcantarget[0x1] === 0x0 && Ig.charcantarget[0x2] === 0x0 && (this.abletotarget = 0x0), this.mytarget = oI(0x0), this.abletotarget === 0x1) for (let PV = 0x0; Ig.charcantarget[this.mytarget] === 0x0;) {
              if (++PV > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
              this.mytarget = oI(0x0);
            } else this.target = 0x3;
            (Ig.targeted ??= [])[this.mytarget] = 0x1, this.attackcon = 0x1, oV('instance_create').call(this, 0x140, 0xaa, yW), oV('instance_create').call(this, 0x0, 0x0, IA);
          }
          Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Skip/%", this.plot === 0x0 && this.attackcon === 0x1 && (Ig.fe = 0x0, (Ig.flag ??= [])[0x1e] = 0x0, (Ig.msg ??= [])[0x0] = "\\E0* See that \\cRHEART\\cW, Kris?/", (Ig.msg ??= [])[0x1] = "* That's your \\cRSOUL\\cW, the culmination of your being!/", (Ig.msg ??= [])[0x2] = "\\EB* Within^1, it holds your WILL..^1. your COMPASSION.../", (Ig.msg ??= [])[0x3] = "\\E1* ... and the FATE of the world./", (Ig.msg ??= [])[0x4] = "\\EB* If it gets hit^1, you and your friends will lose HP./", (Ig.msg ??= [])[0x5] = "\\E3* If everyone's HP reaches 0^1, we'll lose the battle./", (Ig.msg ??= [])[0x6] = "\\E0* So^1, please take care to avoid the enemy's attack./", (Ig.msg ??= [])[0x7] = "\\E8* Ready^1?&* Let's try dodging!/%"), this.plot >= 0x1 && (this.dial = 0x0, Ig.charaction[0x0] === 0x1 && (this.dummyhp > Ig.monsterhp[0x0] && (this.dial = 0x1), this.dummyhp === Ig.monsterhp[0x0] && this.plot === 0x1 && (this.dial = 0x2), this.dummyhp === Ig.monsterhp[0x0] && this.misstime === 0x9 && this.plot === 0x2 && (this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x6), this.dial === 0x1 && this.hitdum >= 0x3 && (this.hitdum = 0x4, this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x4)), Ig.charaction[0x0] === 0xa && this.commanded === 0x0 && (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "\\E0* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./", (Ig.msg ??= [])[0x1] = "\\E8* You should learn to ATTACK first^1, though./%", this.defendtime === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E8* Gee^1, Kris^1!&* You sure are good at defending!/", (Ig.msg ??= [])[0x1] = "\\E6* I'm not attacking^1, you^1, though, so...&* No need to defend!/%"), this.defendtime === 0x2 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E1* Ummm..^1.&* Kris?/", (Ig.msg ??= [])[0x1] = "\\E8* There are no bullets^1, and you can't use TP.../", (Ig.msg ??= [])[0x2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%"), this.defendtime === 0x3 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "\\E9* .../%"), this.plot === 0x2 && ((Ig.writerimg ??= [])[0x2] = oV('scr_84_get_sprite').call(this, 'spr_bttech'), (Ig.msg ??= [])[0x0] = "\\E8* Great job^1, Kris^1!&* Now that you've gathered TP -/", (Ig.msg ??= [])[0x1] = "\\E0* How about spending that TP on one of my \\cYSPELLs\\cW?/", (Ig.msg ??= [])[0x2] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", (Ig.msg ??= [])[0x3] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", (Ig.msg ??= [])[0x4] = "\\E8* It'll fall asleep^1, and we'll win peacefully!/%", Ig.monsterhp[0x0] === Ig.monstermaxhp[0x0] && ((Ig.msg ??= [])[0x2] = "\\E1* If you had^1, um^1, hit the enemy^1, it'd be TIRED now./", (Ig.msg ??= [])[0x3] = "\\E0* In that case^1, we use my \\cYPACIFY\\cW spell on it.../"), (Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)"), this.plot = 0x3, this.defendtime === 0x4 && (this.defendtime = 0x3)), this.defendtime >= 0x4 && (this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x5), this.defendtime += 0x1, this.commanded = 0x1), Ig.charaction[0x0] === 0x4 && this.commanded === 0x0 && (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "\\E0* Oh^1, Kris^1, you found an \\cYITEM\\cW?/", (Ig.msg ??= [])[0x1] = "\\E1* I figured \\cYITEMs\\cW are self-explanatory^1, so.../", (Ig.msg ??= [])[0x2] = "\\E6* Let's skip over them for now^1, OK?/%", this.item_command === 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E3* You really want to learn about \\cYITEMS\\cW, Kris...?/", (Ig.msg ??= [])[0x1] = "\\E0* OK^1, I'll teach you!/", (Ig.msg ??= [])[0x2] = "\\E1* Errm.../", (Ig.msg ??= [])[0x3] = "\\E0* You use them^1, and something happens./", (Ig.msg ??= [])[0x4] = "\\E8* ... is that sufficient?/%"), this.item_command === 0x2 && (Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "\\E6* Yes^1, haha^1, that \\cYITEM\\cW is very pretty^1, isn't it?/", (Ig.msg ??= [])[0x1] = "\\E8* I'm glad you're enjoying yourself^1, Kris...!/%"), this.item_command === 0x3 && (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "\\E8* Kris^1, we can find lots more ITEMs on our journey!/", (Ig.msg ??= [])[0x1] = "\\E0* Which^1, will continue..^1. after this tutorial./%"), this.item_command >= 0x4 && (this.dial = 0x3), this.commanded = 0x1, this.item_command += 0x1), this.ral_wrongcommand === 0x1 && this.commanded === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E8* Kris^1, please ask me to do a spell./%", this.ral_wrongcommand_count === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E8* Kris^1, wouldn't you rather learn about \\cYSPELLs\\cW?/%"), this.ral_wrongcommand_count === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E6* Kris^1, do you..^1. know what a \\cYSPELL\\cW is?/", (Ig.msg ??= [])[0x1] = "\\E1* Can humans not even ASK people to use them...?/%"), this.ral_wrongcommand_count === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E6* Kris^1, what if you just give me a hand sign?/%"), this.ral_wrongcommand_count === 0x3 && ((Ig.msg ??= [])[0x0] = "*\\E8 Ummm^1, if this is too difficult.../", (Ig.msg ??= [])[0x1] = "* Let's move to the next lesson^1, OK?/", (Ig.msg ??= [])[0x2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../", (Ig.msg ??= [])[0x3] = "\\E8* Can be defeated through various \\I3   s of kindness!/", (Ig.msg ??= [])[0x4] = "* Kris^1, though it's just a dummy^1, why not give it a HUG?/%", this.plot === 0x3 && (this.plot = 0x4), Ig.mercymod[this.myself] >= 0x64 && ((Ig.msg ??= [])[0x2] = "\\EB* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/", (Ig.msg ??= [])[0x3] = "\\E0* Because of that^1, its name turned \\cYYELLOW\\cW!/", (Ig.msg ??= [])[0x4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%", this.plot = 0x5)), this.ral_wrongcommand_count += 0x1, this.commanded = 0x0), Ig.charaction[0x1] === 0x2 && this.ral_wrongcommand === 0x0 && this.commanded === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* Great^1, Kris^1! A healing spell works too!/", (Ig.msg ??= [])[0x1] = "* Now I have just a little more to teach you!/", (Ig.msg ??= [])[0x2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../", (Ig.msg ??= [])[0x3] = "\\E8* Can be defeated through various \\I3   s of kindness!/", (Ig.msg ??= [])[0x4] = "\\E6* Kris^1, though it's just a dummy^1, why not give it a HUG?/%", this.pacifycon === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* Great^1, Kris^1! We would have won the battle by now!/", Ig.monsterstatus[this.myself] === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* Great^1, Kris^1! If it was TIRED we would have won!/")), this.plot = 0x4, Ig.mercymod[this.myself] >= 0x64 && ((Ig.msg ??= [])[0x2] = "\\E0* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/", (Ig.msg ??= [])[0x3] = "* Because of that^1, its name turned \\cYYELLOW\\cW!/", (Ig.msg ??= [])[0x4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%", this.plot = 0x5), this.commanded = 0x1), this.spare_used === 0x1 && this.commanded === 0x0 && (this.plot < 0x5 && (Ig.fe = 0x0, this.spare_command === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E8* Ah^1, Kris^1, don't worry about that command yet!/%"), this.spare_command === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E6* You're really merciful^1, aren't you^1, Kris?/%"), this.spare_command >= 0x2 && ((Ig.msg ??= [])[0x0] = "\\E1* Kris^1, you are aware it's just a dummy^1, right...?/%"), Ig.mercymod[this.myself] >= 0x64 && (this.win_spare += 0x1), this.win_spare === 0x1 && (Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "\\E0* Kris^1, since you SPARED an enemy after ACTING,/", (Ig.msg ??= [])[0x1] = "\\E1* You would have won in a real battle, but, um.../", (Ig.msg ??= [])[0x2] = "\\E0* Don't you want to learn other things^1, first?/%"), this.win_spare === 0x2 && (Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "\\E0* I see..^1. Then^1, perhaps we can just end here./", (Ig.msg ??= [])[0x1] = "\\E1* You know how to win peacefully, so.../", (Ig.msg ??= [])[0x2] = "\\E8* That's good enough for me!/%", this.won = 0x1)), this.plot === 0x5 && ((Ig.msg ??= [])[0x0] = "\\E0* Great job^1, Kris^1!&* That'd be the end in a real battle!/", (Ig.msg ??= [])[0x1] = "\\E8* I'm really happy I had the chance to teach you^1, Kris!/%", this.won = 0x1), this.spare_used = 0x0, this.spare_command += 0x1, this.commanded = 0x1), this.dial === 0x1 && (this.plot === 0x1 ? (Ig.fe = 0x3, this.dummyhp > Ig.monsterhp[0x0] + 0x32 ? ((Ig.msg ??= [])[0x0] = "\\E3* W-wow^1, Kris^1!&* That was an amazing attack!/", (Ig.msg ??= [])[0x1] = "\\E8* Have you done this before or something...?/") : ((Ig.msg ??= [])[0x0] = "\\E0* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../", (Ig.msg ??= [])[0x1] = "\\E8* Pressing " + oV('scr_get_input_name').call(this, 0x4) + " when the cursor enters the box on the left!/"), this.misstime >= 0x6 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "\\E3* Kris^1!&* You did it!!!/", (Ig.msg ??= [])[0x1] = "\\E8* (I was really just about at my limit...)/"), (Ig.msg ??= [])[0x2] = "\\E0* OK, next let's try DEFENDING. (\\I1    )/", (Ig.msg ??= [])[0x3] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../", (Ig.msg ??= [])[0x4] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/", (Ig.msg ??= [])[0x5] = "* (Watch the orange big bar on the left^1! I'll explain it next!)/%", this.plot = 0x2, this.defendtime >= 0x1 && ((Ig.msg ??= [])[0x2] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/", (Ig.msg ??= [])[0x3] = "* The big orange TP bar on the left filled up a bit!/", (Ig.msg ??= [])[0x4] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", (Ig.msg ??= [])[0x5] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", (Ig.msg ??= [])[0x6] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", (Ig.msg ??= [])[0x7] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3)) : (this.hitdum === 0x0 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E1* Ummm..^1. Kris^1?&* You don't need to hit it anymore./", (Ig.msg ??= [])[0x1] = "\\E8* I already know you're great at attacking!/%"), this.hitdum === 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E1* U-umm^1, Kris..^1. H-How do I put this...?/", (Ig.msg ??= [])[0x1] = "\\E1* Kris^1, seeing you^1, um^1, attack an effigy of myself.../", (Ig.msg ??= [])[0x2] = "\\E6* ... Kris^1, are you trying to say something?/%"), this.hitdum === 0x2 && (Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "\\E6* Ah^1, Kris..^1. I..^1. um^1, I think I understand./", (Ig.msg ??= [])[0x1] = "\\E1* W^1-well^1, if..^1. during our adventure,/", (Ig.msg ??= [])[0x2] = "\\E7* ... if you want to hit me^1, that's OK^1, too!/%"), this.hitdum >= 0x3 && (this.dial = 0x3), this.hitdum += 0x1)), this.dial === 0x2 && (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "\\E3* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../", (Ig.msg ??= [])[0x1] = "\\E8* Press " + oV('scr_get_input_name').call(this, 0x4) + " again when the cursor goes in the box!/%", this.misstime >= 0x1 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "\\E8* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%", this.misstime === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E8* Press " + oV('scr_get_input_name').call(this, 0x4) + " when the white rectangle's in the blue box!/%"), this.misstime === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E6* Ummm..^1. you can press " + oV('scr_get_input_name').call(this, 0x4) + " a lot^1, if it helps!/%"), this.misstime === 0x4 && ((Ig.msg ??= [])[0x0] = "\\E6* Kris..^1.&* Please try to press " + oV('scr_get_input_name').call(this, 0x4) + "./%"), this.misstime === 0x5 && ((Ig.msg ??= [])[0x0] = "\\E6* Ummm^1, Kris^1?&* Can you see the white rectangle?/%"), this.misstime === 0x6 && ((Ig.msg ??= [])[0x0] = "\\E8* You know rectangles^1?&* They're like messed-up squares?/%"), this.misstime === 0x7 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "\\E9* .../%"), this.misstime === 0x8 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E6* Umm^1, perhaps we should try something else?/%", this.plot = 0x2, this.defendtime >= 0x1 && ((Ig.msg ??= [])[0x0] = "\\E6* Umm^1, perhaps we should try something else?/", (Ig.msg ??= [])[0x1] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/", (Ig.msg ??= [])[0x2] = "* The big orange TP bar on the left filled up a bit!/", (Ig.msg ??= [])[0x3] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", (Ig.msg ??= [])[0x4] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", (Ig.msg ??= [])[0x5] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", (Ig.msg ??= [])[0x6] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3))), this.misstime += 0x1), this.dial === 0x3 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "\\E9* .../", (Ig.msg ??= [])[0x1] = "\\E8* Kris^1, I think I've^1, um^1, perhaps.../", (Ig.msg ??= [])[0x2] = "\\E1* Reached the limits of what I can teach you today./", (Ig.msg ??= [])[0x3] = "\\E0* Let's go find Susie./%", this.hitdum >= 0x4 && ((Ig.msg ??= [])[0x0] = "\\E9* Kris^1, I don't mean to interrupt^1, but.../", (Ig.msg ??= [])[0x1] = "\\E3* You're going to break the dummy at this rate./", (Ig.msg ??= [])[0x2] = "\\E1* I suppose we'll have to stop here for now./%"), this.won = 0x1, Ig.myfight = 0x3e7, Ig.mnfight = 0x3e7)), oV('scr_battletext').call(this), Ig.msg[0x0] === "* Skip/%" && oW.with('obj_writer', PD => {
            PD.instance_destroy();
          }), this.acting = 0x0, this.spare_used = 0x0, this.dummyhp = Ig.monsterhp[this.myself], this.talked = 0x1, this.talktimer = 0x0, this.ral_wrongcommand = 0x0;
        }
        Ig.mnfight === 0x263a && this.attacked === 0x0 && (this.turns += 0x1, Ig.turntimer = -0x1, oV('scr_mnendturn').call(this), this.attacked = 0x1, this.rr = oq(o7(0x0)), Ig.typer = 0x6, Ig.fc = 0x0, this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Ralsei looks on expectedly.")), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.won === 0x0 ? (this.rtimer = 0x0, oV('scr_blconskip').call(this, -0x1), Ig.mnfight === 0x2 && this.attackcon === 0x1 && (!Ix(IJ(IH)) && !Ix(IJ(yH)) && oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))) : Ix(IJ(I5)) || (oV('scr_monsterdefeat').call(this), oV('scr_mnendturn').call(this))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.attackcon !== 0x1 && (this.rtimer = 0x8), this.rtimer += 0x1, this.rtimer >= 0x8 ? (this.rr = oI(0x0), this.rr === 0x0 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0xe, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, Ig.turntimer = 0x96, this.attackcon === 0x1 && (this.battlecancel = 0x2), this.attackcon !== 0x1 && (Ig.turntimer = -0x64, oD(this.dc, PD => {
          PD.instance_destroy();
        })), this.attackcon = 0x2, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, (Ig.battlemsg ??= [])[0x0] = "* What?", (Ig.writerimg ??= [])[0x0] = oV('scr_84_get_sprite').call(this, 'spr_btfight'), (Ig.writerimg ??= [])[0x1] = oV('scr_84_get_sprite').call(this, 'spr_btdefend'), (Ig.writerimg ??= [])[0x2] = oV('scr_84_get_sprite').call(this, 'spr_bttech'), (Ig.writerimg ??= [])[0x3] = oV('scr_84_get_sprite').call(this, 'spr_btact'), (Ig.writerimg ??= [])[0x4] = oV('scr_84_get_sprite').call(this, 'spr_btspare'), (Ig.writerimg ??= [])[0x5] = oV('scr_84_get_sprite').call(this, 'spr_btitem'), Ig.fc = 0x0, this.plot === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Let's try FIGHTing!&  (\\I0    )"), this.plot === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Let's try DEFENDing!&  (\\I1    )"), this.plot === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Let's try SPELLs!&  (\\I2    )"), this.plot === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Let's ACT!&  (\\I3    )"), this.plot === 0x5 && ((Ig.battlemsg ??= [])[0x0] = "* Let's SPARE!&  (\\I4    )"), this.spare_used = 0x0, this.ral_wrongcommand = 0x0) : Ig.turntimer = 0x96), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PD => {
          PD.noreturn = 0x1;
        }), this.con = 0x1, this.battlecancel = 0x3);
      }
      this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x5] = 0x2), this.con === 0x3 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.writerimg ??= [])[0x0] = oV('scr_84_get_sprite').call(this, 'spr_btfight'), (Ig.msg ??= [])[0x0] = "* Great job^1, Kris^1!&* You're a natural!/", this.kris_inithp > Ig.hp[0x1] && (Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "\\E6* Ouch^1, it's OK^1, Kris^1! You're still learning!/"), (Ig.msg ??= [])[0x1] = "\\E8* Anyhow^1, after the enemy attacks^1, it's our turn^1, Kris!/", (Ig.msg ??= [])[0x2] = "\\E0* First^1, I'll teach you how to \\cYFIGHT\\cW (\\I0    )./", (Ig.msg ??= [])[0x3] = "\\E1* Though \\cYFIGHTing\\cW is unnecessary in this world.../", (Ig.msg ??= [])[0x4] = "\\E8* There's no harm in a thorough lesson!/%", (Ig.battlemsg ??= [])[0x0] = "* Let's try FIGHTing!&  (\\I0   )", oV('scr_battletext').call(this), this.con = 0x6), this.con === 0x6 && !Ix(IJ(I5)) && (oW.with('obj_battlecontroller', PD => {
        PD.noreturn = 0x0, (PD.alarm ??= [])[0x2] = 0x2;
      }), this.battlecancel = 0x0, this.plot === 0x0 && (this.plot = 0x1), this.con = 0x7), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./%", this.checked === 0x0 && ((Ig.msg ??= [])[0x0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./", oV('scr_ralface').call(this, 0x1, 0x6), (Ig.msg ??= [])[0x2] = "* Er^1, sorry^1, it kind of looks like me.../", (Ig.msg ??= [])[0x3] = "\\E1* I've been alone^1, so I didn't have anyone to model it after.../", (Ig.msg ??= [])[0x4] = "\\E6* Kris^1, since it's me^1, please be kind to it^1, OK?/%"), this.checked += 0x1, oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0xa, oW.with('obj_herokris', PD => {
        (Ig.faceaction ??= [])[PD.myself] = 0x0, PD.state = 0x0, PD.acttimer = 0x0;
      }), (Ig.msg ??= [])[0x0] = "* You hug the DUMMY./%", oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && ((Ig.acting ??= [])[0x0] = 0x0, (Ig.acting ??= [])[0x1] = 0x0, (Ig.acting ??= [])[0x2] = 0x0, this.actcon = 0x0, this.acting = -0x1, oV('scr_attackphase').call(this)), this.actcon === 0xa && (oD(Ig.charinstance[0x0], PD => {
        PD.visible = 0x0;
      }), this.k = oV('scr_dark_marker').call(this, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 'spr_kris_hug'), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, Ig.monsterx[0x0] - 0x2a, Ig.monstery[0x0] - 0x1e, 0xf);
      }), this.actcon = 0xb, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0xc && (oD(this.k, PD => {
        PD.image_speed = 0.25;
      }), this.actcon = 0xd, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0xe && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), this.actcon = 0xf), this.actcon === 0xf && !Ix(IJ(I5)) && ((Ig.flag ??= [])[0xcd] = 0x1, Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* How caring^1, Kris!/%", this.plot === 0x5 && ((Ig.msg ??= [])[0x0] = "* That's great^1, Kris^1!&* Just one hug is enough^1, though!/%", this.hugtime >= 0x1 && ((Ig.msg ??= [])[0x0] = "\\E8* Kris^1, you don't need to hug it anymore./%"), this.hugtime += 0x1), this.plot === 0x1 && (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* Huh...^1? Kris^1, you'd rather hug it out than fight?/", (Ig.msg ??= [])[0x1] = "\\E1* .../", (Ig.msg ??= [])[0x2] = "\\E8* You know what^1, that's fine^1! We don't need to fight!/", (Ig.msg ??= [])[0x3] = "* OK, next let's try DEFENDING. (\\I1    )/", (Ig.msg ??= [])[0x4] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../", (Ig.msg ??= [])[0x5] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/", (Ig.msg ??= [])[0x6] = "* (Watch the orange big bar on the left^1! I'll explain it next!/%", this.plot = 0x2, this.defendtime >= 0x1 && ((Ig.msg ??= [])[0x3] = "* Kris^1, if you didn't notice^1, when you DEFENDED before -/", (Ig.msg ??= [])[0x4] = "* The big orange TP bar on the left filled up a bit!/", (Ig.msg ??= [])[0x5] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", (Ig.msg ??= [])[0x6] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", (Ig.msg ??= [])[0x7] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", (Ig.msg ??= [])[0x8] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3)), this.plot === 0x4 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* Aww^1, that's great^1, Kris!/", (Ig.msg ??= [])[0x1] = "\\E0* Each enemy has different ACTs that satisfy them./", (Ig.msg ??= [])[0x2] = "* When an enemy is satisfied^1, its name turns \\cYYELLOW\\cW./", (Ig.msg ??= [])[0x3] = "* When that happens^1, you can defeat it by SPARING (\\I4    ) it!/", (Ig.msg ??= [])[0x4] = "* If we \\cYSPARE\\cW all the enemies we meet^1, we'll never have to \\cYFIGHT\\cW!/%", this.plot = 0x5), oV('scr_battletext').call(this), this.actcon = 0x10), this.actcon === 0x10 && !Ix(IJ(I5)) && (oD(this.myface, PD => {
        PD.instance_destroy();
      }), oD(this.k, PD => {
        PD.image_speed = -0.25;
      }), this.actcon = 0x11, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0x12 && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 0xf);
      }), this.actcon = 0x13, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0x14 && (oD(this.k, PD => {
        PD.instance_destroy();
      }), (Ig.mercymod ??= [])[0x0] = 0x64, (Ig.mercymod ??= [])[0x1] = 0x64, Ig.charinstance[0x0].visible = 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (this.makekris = 0x0, oW.with('obj_herokris', PD => {
        (Ig.faceaction ??= [])[PD.myself] = 0x0, PD.state = 0x0, PD.acttimer = 0x0;
      }), oW.with('obj_heroralsei', PD => {
        (Ig.faceaction ??= [])[PD.myself] = 0x0, PD.state = 0x0, PD.acttimer = 0x0;
      }), this.actcon = 0x1e, (Ig.msg ??= [])[0x0] = "* You hug RALSEI./%", oV('scr_battletext_default').call(this)), this.actcon === 0x1e && (this.makekris = 0x1, this.maker = 0x0, oD(Ig.charinstance[0x0], PD => {
        PD.visible = 0x0;
      }), this.k = oV('scr_dark_marker').call(this, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 'spr_kris_hug'), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, MO('obj_heroralsei').x - 0x18, MO('obj_heroralsei').y + 0xa, 0xf);
      }), this.actcon = 0x1f, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0x20 && (this.maker = 0x1, oW.with('obj_heroralsei', PD => {
        PD.visible = 0x0;
      }), this.rb = oV('scr_dark_marker').call(this, MO('obj_heroralsei').x, MO('obj_heroralsei').y, 'spr_ralseil_blush'), oD(this.k, PD => {
        PD.image_speed = 0.25;
      }), this.actcon = 0x21, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0x22 && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), this.actcon = 0x23), this.actcon === 0x23 && !Ix(IJ(I5)) && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* K..^1. Kris!?/%", this.r_hugtime === 0x0 && ((Ig.msg ??= [])[0x0] = "* K..^1. Kris!?/", (Ig.msg ??= [])[0x1] = "\\E8* Ummm^1, I don't think^1, um.../", (Ig.msg ??= [])[0x2] = "* This is what you're supposed to be doing./", (Ig.msg ??= [])[0x3] = "\\E2* ... but.../%", oW.with('obj_event_manager', PD => {
        Mw(0x0, 0x12);
      })), this.r_hugtime === 0x1 && ((Ig.msg ??= [])[0x0] = "* Kris...?/", (Ig.msg ??= [])[0x1] = "\\E2* Are you trying^1, to^1, um.../", (Ig.msg ??= [])[0x2] = "\\E6* Ask me to give you a tutorial on hugging...?/%"), this.r_hugtime === 0x2 && ((Ig.msg ??= [])[0x0] = "* Ummm^1, I've never hugged anyone before.../", (Ig.msg ??= [])[0x1] = "\\E1* (Besides the dummy^1, to test it out,)/", (Ig.msg ??= [])[0x2] = "\\E2* So I don't know anything about it^1, sorry.../", (Ig.msg ??= [])[0x3] = "\\E7* I suppose you're the one teaching me^1, haha!/%"), this.r_hugtime >= 0x3 && ((Ig.msg ??= [])[0x0] = "\\E2* .../%"), this.r_hugtime += 0x1, oV('scr_battletext').call(this), this.actcon = 0x24), this.actcon === 0x24 && !Ix(IJ(I5)) && (oD(this.myface, PD => {
        PD.instance_destroy();
      }), oD(this.k, PD => {
        PD.image_speed = -0.25;
      }), this.actcon = 0x25, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0x26 && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 0xf);
      }), this.actcon = 0x27, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0x28 && (this.makekris = 0x0, this.maker = 0x0, oD(this.rb, PD => {
        PD.instance_destroy();
      }), oW.with('obj_heroralsei', PD => {
        PD.visible = 0x1;
      }), oD(this.k, PD => {
        PD.instance_destroy();
      }), Ig.charinstance[0x0].visible = 0x1, this.actcon = 0x1), this.actcon >= 0x1e && this.actcon < 0x28 && (this.makekris === 0x1 && (oD(this.k, PD => {
        oV('scr_depth').call(PD);
      }), oD(this.k, PD => {
        PD.depth -= 0x186a0;
      })), this.maker === 0x1 && (oD(this.rb, PD => {
        oV('scr_depth').call(PD);
      }), oD(this.rb, PD => {
        PD.depth -= 0x186a0;
      })))), IJ(Mk) === 0x0 && this.instance_destroy();
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      if (PV === 0x5) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xa) return this.userEvent10();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(Ef, 'obj_dummyenemy'), oA(Ef, 'kinds', oM('obj_dummyenemy', Mu)), oA(Ef, 'defaultDepth', 0x5a), oA(Ef, 'defaultSprite', 'spr_dummymonster');
var Ex = Ef,
  EF = class X0 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.delete_n = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.checkhp1 = Ig.hp[0x1], this.checkhp2 = Ig.hp[0x2], this.firstturn = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_hathyx_idle', this.hurtsprite = 'spr_hathyx_hurt', this.sparedsprite = 'spr_hathyx_spared';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && oV('scr_defeatrun').call(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sparedsprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), this.hb = oV('instance_create').call(this, this.x - 0x64, this.y, Ek), this.hb.sprite_index = oI('spr_heartblcon_4', 'spr_heartblcon_5'), this.acting === 0x2 && (this.hb.sprite_index = 'spr_heartblcon_2'), this.acting === 0x3 && (this.hb.sprite_index = 'spr_heartblcon_3'), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, Ix(oV('button1_p').call(this)) && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (oW.with('obj_heartblcon', PV => {
        PV.instance_destroy();
      }), Ig.mnfight = 0x2), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (oW.with('obj_heartblcon', PV => {
        PV.instance_destroy();
      }), this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oV('scr_monsterpop').call(this), Ig.turntimer = 0xb4, this.rr === 0x1 ? (this.dc = oV('instance_create').call(this, this.x, this.y, E2), this.dc.joker = 0x1, this.dc.type = 0x0, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x21, this.dc.ratio = 1.3 - IQ(this.object_index) / 0xa, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, IQ(this.object_index) > 0x1 && IQ(yI) > 0x1 && oD(this.dc, PV => {
        PV.instance_destroy();
      })), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy's body moves silently."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy showed no emotion at all."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy whispered something unhearable."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy's mind is an enigma."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like a lonely kiss."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy's beat slows."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Head Hathy's beat seems to stutter."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Head Hathy is skipping beats.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (Ix(IJ(Io)) && this.firstturn === 0x0 && this.checkhp1 <= Ig.hp[0x1] && this.checkhp2 <= Ig.hp[0x2] && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), oW.with('obj_hathyfightevent', PV => {
        PV.con = 0xf;
      })), this.firstturn = 0x1, this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7))), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* HEAD HATHY - AT 8 DF 0&* It learned to hide its feelings..^1. is that strength?/%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.rr = oI(0x0, 0x1, 0x2), (Ig.msg ??= [])[0x0] = "* You flirted with Head Hathy^1.&* It was highly effective./%", oV('scr_mercyadd').call(this, this.myself, 0x64), oV('scr_battletext_default').call(this), this.battlecancel = 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (oV('scr_mercyadd').call(this, this.myself, 0x64), this.actcon = 0x1, Ig.flag[0x1f8] === 0x0 && ((Ig.msg ??= [])[0x0] = "* You ordered SUSIE to flirt with the enemy!/", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* .../", (Ig.msg ??= [])[0x3] = "\\E1* Annnnnnnnnd hell no./", oV('scr_ralface').call(this, 0x4, 0x6), (Ig.msg ??= [])[0x5] = "* Aww^1, Susie^1, it's OK if you don't know how!/", oV('scr_susface').call(this, 0x6, 0x7), (Ig.msg ??= [])[0x7] = "* What^1? Shut up^1, that's not the problem!/", oV('scr_ralface').call(this, 0x8, 0x6), (Ig.msg ??= [])[0x9] = "* ... Are you sure?/", oV('scr_susface').call(this, 0xa, 0x7), (Ig.msg ??= [])[0xb] = "* Alright^1, LOOK^1, wise guy! I'll show you! Watch this!/", (Ig.msg ??= [])[0xc] = "\\E0* AHEM./%", this.actcon = 0x14, this.acttimer = 0x0), Ig.flag[0x1f8] === 0x1 && ((Ig.msg ??= [])[0x0] = "* You ordered SUSIE to flirt with the enemy!/", oV('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Hell nah^1. Let's see Ralsei do it./", oV('scr_ralface').call(this, 0x3, 0x1), (Ig.msg ??= [])[0x4] = "* I suppose if it can't be helped...!/", (Ig.msg ??= [])[0x5] = "\\E0* Hathy^1, your beauty is just... transcendent./", (Ig.msg ??= [])[0x6] = "\\E8* Your hair is like a waterfall of.../", (Ig.msg ??= [])[0x7] = "\\E1* ... wait^1, um^1, do you have hair^1, or.../%", this.actcon = 0x16), Ig.flag[0x1f8] === 0x2 && ((Ig.msg ??= [])[0x0] = "* You ordered SUSIE to flirt with the enemy!/", oV('scr_susface').call(this, 0x1, 0x7), (Ig.msg ??= [])[0x2] = "* Oh my god^1, Kris!!^1! I can't!^1! Do it yourself!!/%", this.actcon = 0x19), Ig.flag[0x1f8] >= 0x3 && ((Ig.msg ??= [])[0x0] = "* You flirted with the enemies^1. It worked^1! (Susie did not help.)/%", oV('scr_mercyadd').call(this, 0x0, 0x64), oV('scr_mercyadd').call(this, 0x1, 0x64), oV('scr_mercyadd').call(this, 0x2, 0x64)), (Ig.flag ??= [])[0x1f8] += 0x1, oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this), this.delete_n === 0x1 && this.instance_destroy()), this.actcon === 0x14 && !Ix(IJ(I5)) && (oV('snd_pause').call(this, Ig.batmusic[0x0]), this.acttimer += 0x1, this.acttimer >= 0x3c && (this.actcon = 0x15)), this.actcon === 0x15 && (Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* So^1, uh.../", (Ig.msg ??= [])[0x1] = "* Come here..^1. often?/%", oV('scr_battletext').call(this), this.actcon = 0x16), this.actcon === 0x16 && !Ix(IJ(I5)) && (oV('snd_resume').call(this, Ig.batmusic[0x0]), this.hspeed = 0x6, (Ig.msg ??= [])[0x0] = "* (Head Hathy felt awkward and left...)/", oV('scr_susface').call(this, 0x1, 0x7), (Ig.msg ??= [])[0x2] = "* HEY^1, GET BACK HERE AND LET ME FLIRT WITH YOU!!!/%", Ig.flag[0x1f8] === 0x2 && ((Ig.msg ??= [])[0x0] = "* (Head Hathy felt awkward and left...)/", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* Oh^1, oh dear^1! Wait!!/", oV('scr_susface').call(this, 0x3, 0x2), (Ig.msg ??= [])[0x4] = "* Not so easy^1, huh!?/%"), oV('scr_battletext_default').call(this), this.delete_n = 0x1, this.actcon = 0x17, (Ig.monster ??= [])[this.myself] = 0x0), this.actcon === 0x17 && this.x >= 0x280 && (this.actcon = 0x1), this.actcon === 0x19 && !Ix(IJ(I5)) && ((Ig.msg ??= [])[0x0] = "* You said some sweet lines. The enemies were deeply enamored!/%", oV('scr_battletext_default').call(this), oV('scr_mercyadd').call(this, 0x0, 0x64), oV('scr_mercyadd').call(this, 0x1, 0x64), oV('scr_mercyadd').call(this, 0x2, 0x64), this.actcon = 0x1)), Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(EF, 'obj_headhathy'), oA(EF, 'kinds', oM('obj_headhathy', Mu)), oA(EF, 'defaultDepth', 0x5a), oA(EF, 'defaultSprite', 'spr_hathyx_idle');
var EJ = EF,
  EQ = class X1 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.checkhp1 = Ig.hp[0x1], this.checkhp2 = Ig.hp[0x2], this.firstturn = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_heartenemy_idle', this.hurtsprite = 'spr_heartenemy_hurt', this.sparedsprite = 'spr_heartenemy_spared';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (Ig.flag[Math.trunc(0x33 + this.myself)] === 0x5 && ((Ig.flag ??= [])[0x20c] += 0x1), (Ig.flag ??= [])[0x209] += 0x1, oV('scr_defeatrun').call(this)), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_heartenemy_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_heartenemy_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_heartenemy_spared'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), this.hb = oV('instance_create').call(this, this.x - 0x64, this.y, Ek), this.hb.sprite_index = oI('spr_heartblcon_0', 'spr_heartblcon_1'), this.acting === 0x2 && (this.hb.sprite_index = 'spr_heartblcon_2'), this.acting === 0x3 && (this.hb.sprite_index = 'spr_heartblcon_3'), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, Ix(oV('button1_p').call(this)) && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (oW.with('obj_heartblcon', PV => {
        PV.instance_destroy();
      }), Ig.mnfight = 0x2), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (oW.with('obj_heartblcon', PV => {
        PV.instance_destroy();
      }), this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oV('scr_monsterpop').call(this), Ig.turntimer = 0x8c, this.rr === 0x1 ? (this.dc = oV('instance_create').call(this, this.x, this.y, E2), this.dc.type = 0x0, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5) : (this.dc = oV('instance_create').call(this, this.x, this.y, yS), this.dc.type = 0x0, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, Ig.encounterno === 0x9 && (Ig.turntimer = 0x64)), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy's body beats audibly."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy smiled a darling smile."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy is whispering a lovely spell."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy has a little secret."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like a soft kiss."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy's beat slows."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Hathy's beat seems to stutter."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Hathy is skipping beats.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (Ix(IJ(Io)) && this.firstturn === 0x0 && this.checkhp1 <= Ig.hp[0x1] && this.checkhp2 <= Ig.hp[0x2] && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), oW.with('obj_hathyfightevent', PV => {
        PV.con = 0xf;
      })), this.firstturn = 0x1, this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7))), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* HATHY - AT 7 DF 0&* I am a \\cYlittle kiss\\cW./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.rr = oI(0x0, 0x1, 0x2), (Ig.msg ??= [])[0x0] = "* You told Hathy it has cool tentacles^1.&* It began to think about this.../%", this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "* You called Hathy a sweetheart^1.&* It began to think about this.../%"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "* You told Hathy its teeth look like knives^1.&* It began to think about this.../%"), oV('scr_mercyadd').call(this, this.myself, 0x64), oV('scr_battletext_default').call(this), this.battlecancel = 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You ordered Ralsei to flatter all the enemies!/", oV('scr_ralface').call(this, 0x1, 0x0), this.rr = oI(0x0, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Out of anyone^1, I'm glad we randomly encountered all of you./%", this.rr === 0x1 && ((Ig.msg ??= [])[0x2] = "* I'm making tea later..^1.&* Umm^1, would you like any?/%"), this.rr === 0x2 && ((Ig.msg ??= [])[0x2] = "* We don't need EXP^1.&* Just encountering your smile is reward enough./%"), oV('scr_mercyadd').call(this, 0x0, 0x64), oV('scr_mercyadd').call(this, 0x1, 0x64), oV('scr_mercyadd').call(this, 0x2, 0x64), this.actcon = 0x1, oV('scr_battletext_default').call(this)), this.acting === 0x4 && this.actcon === 0x0) {
          if (this.actcon = 0x1, Ig.plot < 0x96) {
            for ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned Hathy about Susie^1.&* The enemy went on guard./%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei  warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          } else (Ig.msg ??= [])[0x0] = "* You ordered Susie to flatter all the enemies!/", oV('scr_susface').call(this, 0x1, 0x2), this.rr = oI(0x0, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Can't believe my bozo teammates.../", (Ig.msg ??= [])[0x3] = "\\E0* ... came back here just to see YOU guys./%", this.rr === 0x1 && ((Ig.msg ??= [])[0x3] = "\\E0* ... wanted to fight someone like YOU so much./%"), this.rr === 0x2 && ((Ig.msg ??= [])[0x3] = "\\E0* ... have a THING for weaklings like you./%"), oV('scr_mercyadd').call(this, 0x0, 0x64), oV('scr_mercyadd').call(this, 0x1, 0x64), oV('scr_mercyadd').call(this, 0x2, 0x64);
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0x5 && IJ(I5) === 0x0 && ((Ig.battleat ??= [])[0x1] = 0x5a, (Ig.battleat ??= [])[0x2] = 0x5a, this.actcon = 0x6, oW.with('obj_herosusie', PV => {
          PV.attacktimer = 0x0, PV.state = 0x1, PV.points = 0x64 + ok(o7(0x28)), (Ig.faceaction ??= [])[PV.myself] = 0x0, Ig.automiss[0x0] === 0x1 && (PV.points = 0x0), Ig.automiss[0x0] === 0x0 && oW.with('obj_event_manager', PD => {
            Mw(0x0, 0x16);
          });
        }), (this.alarm ??= [])[0x4] = 0x32), this.actcon === 0x7 && ((Ig.msg ??= [])[0x0] = "* Where'd you get it^1?&* Heh heh heh heh./", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* (Umm^1, Kris^1, maybe Susie shouldn't ACT anymore...)/%", Ig.automiss[0x0] === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E7* H-hey^1, what gives!?/", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* (Wow^1, that was close^1, Kris...)/", (Ig.msg ??= [])[0x3] = "* (Maybe Susie shouldn't ACT anymore...)/%"), oV('scr_battletext').call(this), this.actcon = 0x1);
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(EQ, 'obj_heartenemy'), oA(EQ, 'kinds', oM('obj_heartenemy', Mu)), oA(EQ, 'defaultDepth', 0x5a), oA(EQ, 'defaultSprite', 'spr_heartenemy_idle');
var El = EQ,
  ET = class X2 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_jigsawry_idle', this.hurtsprite = 'spr_jigsawry_hurt', this.sparedsprite = 'spr_jigsawry_spared', (Ig.flag ??= [])[0x14] = 0x0, this.traitorp = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && ((Ig.mercymod ??= [])[this.myself] = 0x0, this.traitorp = 0x1, (Ig.flag ??= [])[0x14] = 0x1, oW.with('obj_jigsawryenemy', PD => {
        PD.traitorp === 0x0 && (PD.traitorp = 0x2), (Ig.mercymod ??= [])[PD.myself] = 0x0;
      }), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] - 0x14 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && oV('scr_defeatrun').call(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sparedsprite), Ig.flag[0x14] === 0x1 && (this.thissprite = this.hurtsprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent11"]() {
      Mc === 'room_field1' && ((Ig.flag ??= [])[0x1f4] += 0x1), Mc === 'room_field2' && Ig.flag[0x32] !== 0x0 && ((Ig.flag ??= [])[0x1f5] = Ig.flag[0x32]);
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1) {
        if (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "H... hurting&people is&cool.."), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "P... Put up&your d-dukes,&bubbo..."), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "F... Fighting?&I love&fighting..."), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "I... I have&a rent&payment&to make..."), Ig.mercymod[this.myself] >= 0x64 && ((this.rr === 0x0 || this.rr === 0x1) && ((Ig.msg ??= [])[0x0] = "I always&wanted a&friend just&like you."), (this.rr === 0x2 || this.rr === 0x3) && ((Ig.msg ??= [])[0x0] = "We're friends&now, la la~")), this.traitorp === 0x1 && ((this.rr === 0x0 || this.rr === 0x1) && ((Ig.msg ??= [])[0x0] = "WHADDA WORLD!"), (this.rr === 0x2 || this.rr === 0x3) && ((Ig.msg ??= [])[0x0] = "I'M TOO YOUNG&TO DIE!!!")), this.traitorp === 0x2 && ((this.rr === 0x0 || this.rr === 0x1) && ((Ig.msg ??= [])[0x0] = "BARRY!!!&THEY GOT&BARRY!!!"), (this.rr === 0x2 || this.rr === 0x3) && ((Ig.msg ??= [])[0x0] = "BARRY!!&HANG IN&THERE BARRY!")), this.traitorp = 0x0, oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.rtimer += 0x1, this.rtimer === 0xc) {
            if ((Ig.flag ??= [])[0x14] = 0x0, this.rr = oI(0x0), this.rr === 0x0 && (this.tellme = 0x0, oW.with('obj_dbulletcontroller', PV => {
              PV.type >= 0x50 && PV.type <= 0x54 && oW.with('obj_jigsawryenemy', PD => {
                PD.tellme = 0x1;
              });
            }), this.tellme === 0x0)) {
              for (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.grazepoints = 0x4, this.dc.timepoints = 0x2, this.metotal = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) Ig.monstertype[this.i] === 0xf && Ig.monster[this.i] === 0x1 && (this.metotal += 0x1);
              this.dc.type = 0x50 + this.metotal, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5;
            }
            this.turns += 0x1, Ig.turntimer = 0x8c, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry is pretending to march."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry is trying to calculate this month's rent."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry thought of its boss and felt afraid."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry is wishing it could quit its job."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like cardboard."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry looks exhausted."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Jigsawry's edges are fraying."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Jigsawry looks happy about its life.");
          } else Ig.turntimer = 0x78;
        }
        Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
          PV.noreturn = 0x1;
        }), this.con = 0x1, this.battlecancel = 0x3));
      }
      if (Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* JIGSAWRY - AT 5 DF 0&* This mousenary is only fighting to make ends meet.../%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You barely lifted a finger^1, and.../%", oV('scr_battletext_default').call(this), this.actcon = 0x3), this.actcon === 0x3 && !Ix(IJ(I5)) && (oW.with('obj_jigsawryenemy', PV => {
          oV('scr_mercyadd').call(PV, PV.myself, 0x64);
        }), this.rr = oI(0x0, 0x1, 0x2, 0x3), Ig.typer = 0x32, this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Of course&I'll be&your friend!/%"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Alright!&You win!&Let's be&friends!/%"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Friends?&I was thinking&the same&thing!/%"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "... well,&if we HAVE&to be&friends.../%"), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You and Ralsei warned Jigsawry about Susie^1.&* The enemy went on guard.../%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this));
      }
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(ET, 'obj_jigsawryenemy'), oA(ET, 'kinds', oM('obj_jigsawryenemy', Mu)), oA(ET, 'defaultDepth', 0x5a), oA(ET, 'defaultSprite', 'spr_jigsawry_idle');
var j0 = ET,
  j1 = class X3 extends Mu {
    ["create"]() {
      for (this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurtamt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = -0x270f, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.pirouette = 0x0, this.pirouettecounter = 0x0, this.pfactor = 0x1, this.hypnosis = 0x0, this.hypnosiscounter = 0x0, this.chaosdance = 0x0, this.reminvc = Ig.invc, this.i = 0x0; this.i < 0x4; this.i += 0x1) (this.remmaxhp ??= [])[this.i] = Ig.maxhp[this.i];
      this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_joker_main', this.hurtsprite = 'spr_joker_main', this.sparedsprite = 'spr_joker_main', this.body = oV('instance_create').call(this, this.x, this.y, M2), this.laughnoise = 0x0, this.beepnoise = 0x0, this.beepbuffer = 0x0, this.burstnoise = 0x0, this.jturn = 0x0, this.jattack = 0x0, (Ig.tempflag ??= [])[0x4] = 0x1;
    }
    ["draw"](PV) {
      if (this.state === 0x3) {
        if (this.hurttimer > 0x0) {
          if (this.hurttimer = 0x0, this.body.condition = 0x1, this.body.siner = 0x0, this.body.maxdist += 0x14 + this.hurtamt / 0x5, this.body.maxdist < 0x1e && (this.body.maxdist = 0x1e), this.mhpratio = Ig.monsterhp[this.myself] / Ig.monstermaxhp[this.myself], this.body.floatsinerspeed = 0x1 + (0x1 - this.mhpratio), this.mhpratio <= 0.8 && this.body.dancelv === 0x0 && (this.body.dancelv = 0x1), this.mhpratio <= 0.4 && this.jturn < 0x11 && (this.body.dancelv = 0x3), this.mhpratio <= 0.2 && this.jturn === 0x11 && (this.body.dancelv = 0x2), this.mhpratio <= 0x0 && (this.event_user(0xa), (Ig.flag ??= [])[0xf1] = 0x6), Ix(IJ(M3)) && this.mhpratio > 0x0) {
            let PD = 0x1 + (1.5 - this.mhpratio * 1.5);
            oW.with('obj_jokerbg_triangle_real', PY => {
              PY.rotspeed = PD;
            });
          }
          this.laughnoise = oI(0x0, 0x1, 0x2), this.laughnoise === 0x0 && oV('snd_play').call(this, 'snd_joker_laugh0'), this.laughnoise === 0x1 && oV('snd_play').call(this, 'snd_joker_ha1'), this.laughnoise === 0x2 && oV('snd_play').call(this, 'snd_joker_ha0');
        }
        this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : Ig.monster[this.myself];
      }
      this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, this.flash === 0x1 && (this.fsiner += 0x1, this.body.fsiner = this.fsiner, oD(this.body, PY => {
        oV('d3d_set_fog').call(PY, 0x1, o4.white, 0x0, 0x1), PY.dancelv === 0x0 && PV.draw_sprite_ext('spr_joker_main', 0x0, PY.offx + PY.flyx, PY.offy + PY.fly, 0x2, 0x2, 0x0, PY.image_blend, -If(PY.fsiner / 0x5) * 0.4 + 0.6), PY.dancelv === 0x1 && PV.draw_sprite_ext('spr_joker_dance', PY.floatsiner / 0x3, PY.offx + PY.flyx, PY.offy + PY.fly, 0x2, 0x2, 0x0, PY.image_blend, -If(PY.fsiner / 0x5) * 0.4 + 0.6), PY.dancelv === 0x2 && PV.draw_sprite_ext('spr_joker_tired', 0x0, PY.offx + PY.flyx, PY.offy + PY.fly, 0x2, 0x2, 0x0, PY.image_blend, -If(PY.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(PY, 0x0, o4.black, 0x0, 0x0);
      }))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent5"]() {
      this.attacked === 0x0 && (this.turns += 0x1, this.chaosdance += 0x1, this.chaosdance >= 0x9 && (this.chaosdance = 0x0), this.remat = Ig.monsterat[this.myself], (Ig.monsterat ??= [])[this.myself] *= this.pfactor, this.jattack === 0x0 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x46, this.dc.target = this.mytarget, this.dc.grazepoints = 0x2, this.dc.damage = Ig.monsterat[this.myself] * 0x5, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0x1 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.grazepoints = 0x3, this.dc.type = 0x41, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.jattack === 0x2 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x31, this.dc.target = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x4, this.dc.grazepoints = 0x3, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0x3 && (this.body.condition < 0x4 && (this.body.condition = 0x5), this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.grazepoints = 0x3, this.dc.type = 0x4b, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x6), this.jattack === 0x4 && (oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_anything')), this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x3e, this.dc.target = this.mytarget, this.dc.inv = 0x14, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x2), this.jattack === 0x5 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.grazepoints = 0x3, this.dc.type = 0x32, this.dc.target = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x4, Ig.turntimer = 0x12c, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0x6 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x49, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.jattack === 0x7 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x44, this.dc.target = this.mytarget, this.dc.grazepoints = 0x2, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.jattack === 0x8 && (oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_anything')), this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.inv = 0x14, this.dc.type = 0x3d, this.dc.target = this.mytarget, this.dc.grazepoints = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x5, Ig.turntimer = 0xf0), this.jattack === 0x9 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x30, this.dc.target = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x4, this.dc.grazepoints = 0x4, Ig.turntimer = 0x10e, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0xa && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x48, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.jattack === 0xb && (this.body.condition < 0x4 && (this.body.condition = 0x5), this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x4c, this.dc.target = this.mytarget, this.dc.grazepoints = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x6), this.jattack === 0xc && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x47, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x2, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0xd && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x2e, this.dc.target = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x4, this.dc.grazepoints = 0x4, Ig.turntimer = 0x14a, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0xe && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x4a, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x4), this.jattack === 0xf && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x4d, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x4, Ig.turntimer = 0x5dc, this.body.condition < 0x4 && (this.body.condition = 0x5)), this.jattack === 0x63 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x2f, this.dc.target = 0x3, this.dc.damage = Ig.monsterat[this.myself] * 0x4, Ig.turntimer = 0x12c, oD(this.body, PV => {
        PV.condition = 0x2;
      })), this.jattack === 0x3e7 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x19, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x4, Ig.turntimer = 0x12c), oW.with('obj_dbulletcontroller', PV => {
        PV.joker = 0x1;
      }), this.pfactor = 0x1, (Ig.monsterat ??= [])[this.myself] = this.remat, this.attacked = 0x1);
    }
    ["userEvent10"]() {
      for (this.i = 0x0; this.i < 0x4; this.i += 0x1) (Ig.maxhp ??= [])[this.i] = this.remmaxhp[this.i], Ig.hp[this.i] >= Ig.maxhp[this.i] && ((Ig.hp ??= [])[this.i] = Ig.maxhp[this.i]);
      Ig.invc = this.reminvc, oW.with('obj_joker_body', PV => {
        PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.sprite_index = 'spr_joker_teleport', PV.sparedsprite = PV.sprite_index, PV.image_index = 0x1, PV.image_speed = 0x0;
      }), Ig.monsterhp[this.myself] > 0x0 && oW.with('obj_joker_body', PV => {
        PV.x += 0x14, PV.y += 0x12, oV('scr_spareanim').call(PV), PV.x -= 0x14, PV.y -= 0x12;
      }), oW.with('obj_battlecontroller', PV => {
        PV.skipvictory = 0x1;
      }), oV('snd_free_all').call(this), this.body.dancelv = 0x4, this.body.condition = 0x0, oW.with('obj_jokerbg_triangle_real', PV => {
        PV.on = 0x0;
      }), oV('scr_monsterdefeat').call(this), Ig.invc = this.reminvc, this.instance_destroy();
    }
    ["userEvent11"]() {}
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + 0x14, (Ig.monstery ??= [])[this.myself] = this.y + 0x14, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, Ig.mnfight === 0x1 && this.talked === 0x0 && (this.pirouette !== 0x2 && (Ig.invc = this.reminvc), this.mhpratio = Ig.monsterhp[this.myself] / Ig.monstermaxhp[this.myself], this.mhpratio <= 0.8 && this.jturn === 0x4 && (this.jturn = 0x5, oD(this.body, PV => {
        PV.dancelv = 0x1;
      })), this.mhpratio <= 0.6 && this.jturn === 0x9 && (this.jturn = 0xa), this.mhpratio <= 0.4 && this.jturn === 0xe && (this.jturn = 0xf, oD(this.body, PV => {
        PV.dancelv = 0x3;
      })), this.mhpratio <= 0.15 && this.jturn < 0x11 && (this.jturn = 0x11, oD(this.body, PV => {
        PV.dancelv = 0x2;
      })), this.jturn >= 0x12 && oD(this.body, PV => {
        PV.dancelv = 0x3;
      }), this.hypnosiscounter >= 0x2 && this.jturn === 0x4 && this.turns >= 0x5 - this.hypnosiscounter && (this.jturn = 0x5, oD(this.body, PV => {
        PV.dancelv = 0x1;
      })), this.hypnosiscounter >= 0x4 && this.jturn === 0x9 && this.turns >= 0xb - this.hypnosiscounter && (this.jturn = 0xa, oD(this.body, PV => {
        PV.dancelv = 0x1;
      })), this.hypnosiscounter >= 0x6 && this.jturn === 0xe && this.turns >= 0x11 - this.hypnosiscounter && (this.jturn = 0xf, oD(this.body, PV => {
        PV.dancelv = 0x1;
      })), this.jturn >= 0x13 && this.turns >= 0x1d - this.hypnosiscounter && (this.tired = 0x1, (Ig.monsterstatus ??= [])[this.myself] = 0x1, oD(this.body, PV => {
        PV.dancelv = 0x2;
      })), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.jturn === 0x0 && ((Ig.msg ??= [])[0x0] = "CHAOS, CHAOS,&&CATCH ME&IF YOU CAN!", oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_chaos'))), this.jturn === 0x1 && ((Ig.msg ??= [])[0x0] = "SHALL WE&PLAY THE&RING-AROUND?"), this.jturn === 0x2 && ((Ig.msg ??= [])[0x0] = "MY HEARTS GO&OUT TO ALL&YOU SINNERS!"), this.jturn === 0x3 && ((Ig.msg ??= [])[0x0] = "HA, HA, LET'S&MAKE THE&DEVILSKNIFE.", oD(this.body, PV => {
        PV.condition = 0x5;
      })), this.jturn === 0x5 && ((Ig.msg ??= [])[0x0] = "PIIP PIIP,&LET'S RIDE THE&CAROUSEL GAME."), this.jturn === 0x6 && ((Ig.msg ??= [])[0x0] = "HEE HEE,&HAVING FUN!?&JOIN THE&CLUB!"), this.jturn === 0x7 && ((Ig.msg ??= [])[0x0] = "HEARTS,&DIAMONDS,&I CAN DO&ANYTHING!", oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_anything'))), this.jturn === 0x8 && ((Ig.msg ??= [])[0x0] = "WHO KEEPS&SPINNING THE&WORLD&AROUND?"), this.jturn === 0xa && ((Ig.msg ??= [])[0x0] = "YOU KIDS ARE&REALLY&KEEPING UP!"), this.jturn === 0xb && ((Ig.msg ??= [])[0x0] = "NU-HA!!&I NEVER HAD&SUCH FUN,&FUN!!"), this.jturn === 0xc && ((Ig.msg ??= [])[0x0] = "A BEAUTY IS&JOYING IN&MY HEART!"), this.jturn === 0xd && ((Ig.msg ??= [])[0x0] = "EVEN&DEVILSKNIFE&IS SMILING!", oD(this.body, PV => {
        PV.condition = 0x5;
      })), this.jturn === 0xf && ((Ig.msg ??= [])[0x0] = "IT'S SO&EXCITING...&I CAN'T&TAKE IT!!!"), this.jturn === 0x10 && ((Ig.msg ??= [])[0x0] = "THIS IS IT,&BOISENGIRLS!&SEE YA!"), this.jturn === 0x11 && ((Ig.msg ??= [])[0x0] = "ENOUGH!!&YOU KIDS&TIRED ME UP!", oD(this.body, PV => {
        PV.dancelv = 0x2;
      })), this.jturn === 0x12 && ((Ig.msg ??= [])[0x0] = "KIDDING!!&HERE'S MY&FINAL CHAOS!", oD(this.body, PV => {
        PV.condition = 0x5;
      })), (this.jturn === 0x4 || this.jturn === 0x9 || this.jturn === 0xe || this.jturn === 0x13) && (this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = oI("A CHAOS,&CHAOS!", "PLEASE, IT'S&JUST A&SIMPLE&CHAOS."), oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_chaos'))), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "I CAN DO&ANYTHING!!", oV('snd_play').call(this, oV('scr_84_get_sound').call(this, 'snd_joker_anything'))), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = oI("THIS BODY&CANNOT BE&KILLED!", "THESE&CURTAINS&ARE REALLY&ON FIRE!")), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "IT'S ALL&TOO MUCH&FUN!!!")), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y - 0x14, 0x3), this.talked = 0x1, this.talktimer = 0x0, this.jturn >= 0x13 && (Ig.monsterdf[this.myself] > -0xa && ((Ig.monsterdf ??= [])[this.myself] -= 0x3), Ig.monsterat[this.myself] < 0xb && ((Ig.monsterat ??= [])[this.myself] += 0.5), this.jattack = oI(0x0, 0x4, 0x7, 0x8, 0xa, 0xb, 0xc, 0xd, 0xd, 0xd)), this.jturn >= 0xf && this.jturn <= 0x12 && (this.jattack = this.jturn - 0x3, this.jturn += 0x1), this.jturn === 0xe && (this.jattack = oI(0x8, 0x9, 0xa, 0xb)), this.jturn >= 0xa && this.jturn <= 0xd && (this.jattack = this.jturn - 0x2, this.jturn += 0x1), this.jturn === 0x9 && (this.jattack = oI(0x4, 0x5, 0x6, 0x7)), this.jturn >= 0x5 && this.jturn <= 0x8 && (this.jattack = this.jturn - 0x1, this.jturn += 0x1), this.jturn === 0x4 && (this.jattack = oI(0x0, 0x1, 0x2, 0x3)), this.jturn <= 0x3 && (this.jattack = this.jturn, this.jturn += 0x1), this.jattack === 0x2 || this.jattack === 0x5 || this.jattack === 0x9 || this.jattack === 0xd || this.jattack === 0xf ? oV('scr_targetall').call(this) : oV('scr_randomtarget').call(this)), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (Ig.turntimer = 0xf0, this.event_user(0x5), this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* The world is spinning, spinning."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* The air crackles with freedom."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* JEVIL is laughing incomprehensibly."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* It feels like a whirlwind."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like chaos."), this.body.dancelv === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* JEVIL seems exhausted...?"), this.jturn === 0x10 && ((Ig.battlemsg ??= [])[0x0] = "* CHAOS BOMB was prepared FOR YOU."), this.jturn === 0x12 && ((Ig.battlemsg ??= [])[0x0] = "* Something terrible is coming...!"), this.jturn >= 0x13 && ((Ig.battlemsg ??= [])[0x0] = "* JEVIL's pulling out all the stops!"), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* JEVIL is truly exhausted!")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3 && (Ig.typer = 0x32, (Ig.mercymod ??= [])[this.myself] = 0x3e7, (Ig.msg ??= [])[0x0] = "Alright^1,&you convinced&me!!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0xf, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* JEVIL &* There is no strategy to defeat the enemy. Good luck!/%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x5, (Ig.msg ??= [])[0x0] = "* Kris spun around^1!&* JEVIL got slightly more TIRED^1, and...!/%", oV('snd_play').call(this, 'snd_pirouette'), oW.with('obj_herokris', PV => {
          PV.visible = 0x0;
        }), this.dancekris = oV('scr_dark_marker').call(this, MO('obj_herokris').x, MO('obj_herokris').y, 'spr_krisb_pirouette'), oD(this.dancekris, PV => {
          PV.image_speed = 0.3334, PV.depth = MO('obj_herokris').depth;
        }), this.fx = oV('instance_create').call(this, this.dancekris.x + 0x1c, this.dancekris.y + 0x28, EX), this.fx.sprite_index = 'spr_pirouette_fx', this.fx.image_xscale = 0x2, this.fx.image_yscale = 0x2, oV('scr_battletext_default').call(this)), this.actcon === 0x5 && !Ix(IJ(I5))) {
          if (oD(this.dancekris, PV => {
            PV.instance_destroy();
          }), oW.with('obj_herokris', PV => {
            PV.visible = 0x1;
          }), (Ig.msg ??= [])[0x0] = "* Something happened!/%", this.chaosdance === 0x0 && ((Ig.msg ??= [])[0x0] = "* What^1!&* It was just foley!/%", this.ch = oI(0x0, 0x1, 0x2), this.ch === 0x0 && oV('snd_play').call(this, 'snd_badexplosion'), this.ch === 0x1 && oV('snd_play').call(this, 'snd_carhonk'), this.ch === 0x2 && oV('snd_play').call(this, 'snd_toilet')), this.chaosdance === 0x1 && ((Ig.msg ??= [])[0x0] = "* JEVIL felt at ease^1!&* JEVIL's defense dropped!/%", Ig.monsterdf[this.myself] >= -0x10 && ((Ig.monsterdf ??= [])[this.myself] -= 0x4), oV('snd_play').call(this, 'snd_weirdeffect')), this.chaosdance === 0x2 && ((Ig.msg ??= [])[0x0] = "* Awkward^1! Upcoming attack will hurt rapidly!/%", oV('snd_play').call(this, 'snd_awkward'), Ig.invc = 0.4), this.chaosdance === 0x3 && ((Ig.msg ??= [])[0x0] = "* Tranquil^1!&* The dance defended the party!/%", this.pfactor = 0.7, oV('snd_play').call(this, 'snd_shadowpendant')), this.chaosdance === 0x4 && (oW.with('obj_marker', PV => {
            PV.sprite_index === 'spr_uselessbird' && PV.instance_destroy();
          }), this.bird = oV('scr_dark_marker').call(this, -0x28, 0x3c, 'spr_uselessbird'), oD(this.bird, PV => {
            PV.hspeed = 0xc, PV.image_speed = 0.334;
          }), oV('snd_play').call(this, 'snd_birdtweet'), (Ig.msg ??= [])[0x0] = "* What^1!&* It's nothing but a useless bird!/%"), this.chaosdance === 0x5 && ((Ig.msg ??= [])[0x0] = "* It felt comforting!/%", this.star = oI(0x0, 0x1, 0x2), oV('scr_healitemspell').call(this, oq(o7(0x1f) + 0x19))), this.chaosdance === 0x6) {
            for ((Ig.msg ??= [])[0x0] = "* Everyone's HP got jumbled up!/%", this.swap1 = 0x1, this.swap2 = 0x1, this.swap1 = oI(0x2, 0x3), this.swap1 === 0x2 && (this.swap2 = 0x3), this.swap1 === 0x3 && (this.swap2 = 0x2), this.i = 0x0; this.i < 0x4; this.i += 0x1) (this.remhp ??= [])[this.i] = Ig.hp[this.i], (this.curmaxhp ??= [])[this.i] = Ig.maxhp[this.i];
            (Ig.maxhp ??= [])[0x1] = this.curmaxhp[this.swap1], (Ig.maxhp ??= [])[this.swap1] = this.curmaxhp[this.swap2], (Ig.maxhp ??= [])[this.swap2] = this.curmaxhp[0x1], (Ig.hp ??= [])[0x1] = this.remhp[this.swap1], (Ig.hp ??= [])[this.swap1] = this.remhp[this.swap2], (Ig.hp ??= [])[this.swap2] = this.remhp[0x1], (this.remhpcolor ??= [])[0x0] = MO('obj_battlecontroller').hpcolor[0x0], (this.remhpcolor ??= [])[0x1] = MO('obj_battlecontroller').hpcolor[0x1], (this.remhpcolor ??= [])[0x2] = MO('obj_battlecontroller').hpcolor[0x2];
            {
              let PV = this.remhpcolor[Math.trunc(this.swap1 - 0x1)];
              oW.with('obj_battlecontroller', PD => {
                PD.hpcolor[0x0] = PV;
              });
            }
            {
              let PD = this.remhpcolor[Math.trunc(this.swap2 - 0x1)];
              oW.with('obj_battlecontroller', PY => {
                PY.hpcolor[Math.trunc(this.swap1 - 0x1)] = PD;
              });
            }
            {
              let PY = this.remhpcolor[0x0];
              oW.with('obj_battlecontroller', Pw => {
                Pw.hpcolor[Math.trunc(this.swap2 - 0x1)] = PY;
              });
            }
            for (this.i = 0x1; this.i <= 0x3; this.i += 0x1) Ig.hp[this.i] < 0x1 && ((Ig.hp ??= [])[0x1] += oq(Ig.hp[this.i] / 0x3), (Ig.hp ??= [])[0x2] += oq(Ig.hp[this.i] / 0x3), (Ig.hp ??= [])[0x3] += oq(Ig.hp[this.i] / 0x3), (Ig.hp ??= [])[this.i] = 0x1);
            Ig.hp[0x1] < 0x1 && ((Ig.hp ??= [])[0x1] = 0x1), Ig.hp[0x2] < 0x1 && ((Ig.hp ??= [])[0x2] = 0x1), Ig.hp[0x3] < 0x1 && ((Ig.hp ??= [])[0x3] = 0x1), oV('scr_revive').call(this, 0x0), oV('scr_revive').call(this, 0x1), oV('scr_revive').call(this, 0x2), oV('snd_play').call(this, 'snd_weirdeffect');
          }
          this.chaosdance === 0x7 && (oV('snd_play').call(this, 'snd_boost'), (Ig.msg ??= [])[0x0] = "* JEVIL's upcoming move got powered up!/%", this.pfactor = 1.25), this.chaosdance === 0x8 && (oV('snd_play').call(this, 'snd_applause'), (Ig.msg ??= [])[0x0] = "* A perfect 10!/%", oV('scr_healallitemspell').call(this, 0x24 + oq(o7(0xf)))), oV('scr_battletext_default').call(this), this.hypnosiscounter += 0.5, this.hypnosiscounter >= 0x9 && (this.txtpart3 = "&* JEVIL's looking exhausted!", (Ig.monsterstatus ??= [])[this.myself] = 0x1), this.pirouette = this.chaosdance, this.pirouettecounter += 0x1, this.actcon = 0x1;
        }
        this.acting === 0x3 && this.actcon === 0x0 && (Ig.monsterat[this.myself] > 0xa && ((Ig.monsterat ??= [])[this.myself] -= 0.5), this.hypnofx = oV('instance_create').call(this, Ig.monsterx[this.myself], Ig.monstery[this.myself], Em), oV('snd_play').call(this, 'snd_hypnosis'), this.actcon = 0x1, this.aaa = oI(0x0, 0x1, 0x2), this.aaa === 0x0 && (this.txtpart1 = "* Ralsei chanted something^1!"), this.aaa === 0x1 && (this.txtpart1 = "* Susie spun something around^1!"), this.aaa === 0x2 && (this.txtpart1 = "* Kris gazed strangely^1!"), this.txtpart2 = "&* JEVIL's next attack weakened!", this.txtpart3 = "&* JEVIL became more TIRED!", this.hypnosiscounter === 0x0 && (this.txtpart3 = "&* JEVIL became more TIRED!"), this.hypnosiscounter >= 0x9 && (this.txtpart3 = "&* JEVIL's looking exhausted!", (Ig.monsterstatus ??= [])[this.myself] = 0x1), (Ig.msg ??= [])[0x0] = this.txtpart1 + this.txtpart2 + this.txtpart3 + '/%', this.pfactor = 0.7, this.hypnosis = 0x1, this.hypnosiscounter += 0x1, oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this));
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf), this.beepbuffer -= 0x1, this.beepnoise === 0x4 && this.beepbuffer < 0x0 && (oV('snd_stop').call(this, 'snd_bombfall'), oV('snd_play').call(this, 'snd_bombfall'), this.beepnoise = 0x0, this.beepbuffer = 0x5), this.burstnoise === 0x1 && (oV('snd_stop').call(this, 'snd_bomb'), oV('snd_play').call(this, 'snd_bomb'), this.burstnoise = 0x0);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (PV === 0xa) return this.userEvent10();
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(j1, 'obj_joker'), oA(j1, 'kinds', oM('obj_joker', Mu)), oA(j1, 'defaultDepth', 0xa), oA(j1, 'defaultSprite', 'spr_joker_main');
var j2 = j1,
  j3 = class X4 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_chainking_idle', this.hurtsprite = 'spr_chainking_hurt', this.sparedsprite = 'spr_chainking_idle', this.kturn = 0x0, this.xx = 0x0, this.yy = 0x0, this.tempattack = 0x1, this.hurtbuffer = 0x0, this.reminvc = Ig.invc, this.susinit = 0x0, this.remxx = 0x0, this.remyy = 0x0, this.chain_dragging = 0x0, this.wall_bouncing = 0x0, this.talk_all_message = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && this.event_user(0xa), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.idlesprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent5"]() {
      this.attacked === 0x0 && (Ig.invc = this.reminvc, this.attack === 0x1 && (this.box = oV('instance_create').call(this, this.xx + 0x140, this.yy + 0xaa, yW), this.mh = oV('scr_moveheart').call(this), this.dd = oV('instance_create').call(this, 0x0, 0x0, yI), this.dd.type = 0x15, this.dd.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.dd.target = this.mytarget, this.dd.side = 0x1, this.dd.btimer = -0x8, Ig.turntimer = 0xbe), this.attack === 0x2 && (this.visible = 0x0, this.chainking = oV('instance_create').call(this, this.x, this.y, oF), this.chainking.type = 0x1, this.chainking.subtype = 0x0, this.chainking.grazepoints = 0x6, this.box = oV('instance_create').call(this, this.xx + 0xc8, this.yy + 0xaf, E8), this.box.sprite_index = 'spr_battlebg_wavechain', this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      }), this.chainking.damage = Ig.monsterat[this.myself] * 0x4 * this.tempattack, this.chainking.target = 0x3, Ig.turntimer = 0x3e7), this.attack === 0x3 && (this.box = oV('instance_create').call(this, this.xx + 0x140, this.yy + 0xaa, yW), oV('scr_moveheart').call(this), this.dd = oV('instance_create').call(this, 0x0, 0x0, yI), this.dd.type = 0x22, this.dd.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.dd.target = this.mytarget, this.dd.btimer = 0xa, Ig.turntimer = 0xd2), this.attack === 0x4 && (Ig.invc *= 1.5, this.box = oV('instance_create').call(this, this.xx + 0x136, this.yy + 0xa5, yW), this.box.sprite_index = 'spr_battlebg_2', this.box.keep = 0x1, this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      }), this.damagebox = oV('instance_create').call(this, this.box.x, this.box.y, yq), this.damagebox.type = 0x5, this.damagebox.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.damagebox.target = this.mytarget, Ig.turntimer = 0x3e7), this.attack === 0x5 && (this.visible = 0x0, this.chainking = oV('instance_create').call(this, this.x, this.y, oF), this.chainking.grazepoints = 0x6, this.chainking.type = 0x1, this.chainking.subtype = 0x1, this.box = oV('instance_create').call(this, this.xx + 0xc8, this.yy + 0xaf, E8), this.box.sprite_index = 'spr_battlebg_wavechain', this.chainking.damage = Ig.monsterat[this.myself] * 0x4 * this.tempattack, this.chainking.target = 0x3, Ig.turntimer = 0x3e7, this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      })), this.attack === 0x6 && (Ig.invc *= 1.5, this.visible = 0x0, this.timeruse = 0x0, this.chainking = oV('instance_create').call(this, this.x, this.y, oF), this.chainking.type = 0x2, this.chainking.subtype = 0x5, this.chain_dragging >= 0x1 && (this.chainking.subtype = 0x2), this.chain_dragging += 0x1, this.box = oV('instance_create').call(this, this.xx + 0xcd, this.yy + 0xaa, E8), this.box.sprite_index = 'spr_battlebg_1', this.chainking.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.chainking.target = this.mytarget, Ig.turntimer = 0x3e7, this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      })), this.attack === 0x7 && (this.box = oV('instance_create').call(this, this.xx + 0x140, this.yy + 0xaa, yW), oV('scr_moveheart').call(this), this.dd = oV('instance_create').call(this, 0x0, 0x0, yI), this.dd.type = 0x23, Ig.turntimer = 0xdc, this.dd.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.dd.target = this.mytarget, this.dd.btimer = 0xa), this.attack === 0x8 && (Ig.invc *= 1.5, this.box = oV('instance_create').call(this, this.xx + 0x136, this.yy + 0xa5, yW), this.box.sprite_index = 'spr_battlebg_2', this.box.keep = 0x1, this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      }), this.damagebox = oV('instance_create').call(this, this.box.x, this.box.y, yq), this.damagebox.type = 0x3, this.damagebox.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.damagebox.target = this.mytarget, Ig.turntimer = 0x3e7), this.attack === 0x9 && (this.box = oV('instance_create').call(this, this.xx + 0x140, this.yy + 0xaa, yW), oV('scr_moveheart').call(this), this.dd = oV('instance_create').call(this, 0x0, 0x0, yI), this.dd.type = 0x17, Ig.turntimer = 0xc8, this.dd.damage = Ig.monsterat[this.myself] * 0x5 * this.tempattack, this.dd.target = this.mytarget, this.dd.btimer = -0x8, this.dd.side = 0x1), this.attack === 0xa && (this.visible = 0x0, this.chainking = oV('instance_create').call(this, this.x, this.y, oF), this.chainking.grazepoints = 0x6, this.chainking.type = 0x1, this.chainking.subtype = 0x2, this.box = oV('instance_create').call(this, this.xx + 0xc8, this.yy + 0xaf, E8), this.box.sprite_index = 'spr_battlebg_wavechain', this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      }), this.chainking.damage = Ig.monsterat[this.myself] * 0x4 * this.tempattack, this.chainking.target = 0x3, Ig.turntimer = 0x3e7), this.attack === 0xb && (Ig.invc *= 1.5, this.visible = 0x0, this.timeruse = 0x0, this.chainking = oV('instance_create').call(this, this.x, this.y, oF), this.chainking.type = 0x2, this.chainking.subtype = 0x1, this.box = oV('instance_create').call(this, this.xx + 0xcd, this.yy + 0xaa, E8), this.box.sprite_index = 'spr_battlebg_1', this.chainking.damage = Ig.monsterat[this.myself] * 0x3 * this.tempattack, this.chainking.target = 0x3, Ig.turntimer = 0x3e7, this.hm = oV('instance_create').call(this, this.box.x - 0xa, this.box.y - 0xa, Iy), oV('scr_moveheart').call(this), oD(this.hm, PV => {
        PV.instance_destroy();
      })), this.tempattack = 0x1, this.attacked = 0x1);
    }
    ["userEvent10"]() {
      oV('snd_free_all').call(this), oW.with('obj_battlecontroller', PV => {
        PV.skipvictory = 0x1;
      }), oW.with('obj_kingcutscene', PV => {
        oD(PV.king, PD => {
          PD.visible = 0x1;
        });
      }), Ig.flag[0xf7] === 0x0 && oW.with('obj_kingcutscene', PV => {
        oD(PV.king, PD => {
          PD.sprite_index = 'spr_chainking_hurt';
        });
      }), Ig.invc = 0x1, this.instance_destroy();
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2 - 0xa, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      this.susinit === 0x0 && (oW.with('obj_herosusie', PV => {
        PV.idlesprite = 'spr_susieb_idle_serious', PV.attacksprite = 'spr_susieb_attack_serious';
      }), this.susinit = 0x1), Ig.monster[this.myself] === 0x1 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, Ig.mnfight === 0x1 && this.talked === 0x0 && (Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "Fall before&the chain&of justice!/%", this.blcontype = 0x3, this.kturn === 0x0 && ((Ig.msg ??= [])[0x0] = "How dare you&come here,&Lightners...?/%"), this.kturn === 0x1 && ((Ig.msg ??= [])[0x0] = "You, that&left us in&the shadows,&stripped of&meaning.../%", this.blcontype = 0x8), this.kturn === 0x2 && ((Ig.msg ??= [])[0x0] = "You DARE&return&to torment us&once again?/%"), this.kturn === 0x3 && ((Ig.msg ??= [])[0x0] = "Begone!&We have found&fresh&purpose./%"), this.kturn === 0x4 && ((Ig.msg ??= [])[0x0] = "For the&KNIGHT&has appeared./%"), this.kturn === 0x5 && ((Ig.msg ??= [])[0x0] = "The KNIGHT&that pulls&the Fountains&from the&Earth./%", this.blcontype = 0x8), this.kturn === 0x6 && (this.blcontype = 0x8, (Ig.msg ??= [])[0x0] = "Holy&Fountains,&whose shadows&are creating&a new&world.../", (Ig.msg ??= [])[0x1] = "OUR world./%"), this.kturn === 0x7 && ((Ig.msg ??= [])[0x0] = "Hahaha...&Do you see&now our NEW&purpose...?/%"), this.kturn === 0x8 && ((Ig.msg ??= [])[0x0] = "Soon, this&world&shall be&blanketed&in darkness.../", (Ig.msg ??= [])[0x1] = "And DARKNERS&shall RULE&it!/%", this.blcontype = 0x8), this.kturn === 0x9 && ((Ig.msg ??= [])[0x0] = "Then, you may&see what it is&like to live&in DESPAIR!/%"), this.kturn === 0xa && ((Ig.msg ??= [])[0x0] = "Now, enough&talk!/", (Ig.msg ??= [])[0x1] = "Fall before&the chain of&justice!/%"), this.kturn === 0xb && ((Ig.msg ??= [])[0x0] = "... ha,&you're&quite strong,&aren't you!?/%"), this.kturn === 0xc && ((Ig.msg ??= [])[0x0] = "If I keep&fighting you&like this,&then.../%"), this.kturn === 0xd && ((Ig.msg ??= [])[0x0] = "It seems...&that.../%"), this.kturn >= 0xe && ((Ig.msg ??= [])[0x0] = "My KNIGHT...&I shall not&fail you.../%", this.battlecancel = 0x2), this.kturn += 0x1, this.kturn <= 0xb ? this.attack = this.kturn : (this.kturn === 0xc && (this.attack = 0x7), this.kturn === 0xd && (this.attack = 0x8), this.kturn === 0xe && (this.attack = 0xa), this.kturn === 0xf && (this.attack = 0x9), this.kturn === 0x10 && (this.attack = 0x7), this.kturn === 0x11 && (this.attack = 0xb), this.kturn >= 0x12 && (this.attack = 0xb), Ig.monsterdf[this.myself] > -0x19 && ((Ig.monsterdf ??= [])[this.myself] -= 0x5)), this.target_randomly = 0x1, this.attack === 0x2 || this.attack === 0x5 || this.attack === 0xa || this.attack === 0xb ? oV('scr_targetall').call(this) : oV('scr_randomtarget').call(this), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, this.blcontype), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, -0x1)), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.talktimer = 0x0, Ig.turntimer = 0xb4, this.event_user(0x5), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Darkness pours from the fountain."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* KING's mouths gave a berserk smile."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* The battlefield is rumbling."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* KING's mouths babble indecipherably."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* KING's cape flutters weakly.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), (Ig.flag ??= [])[0xf7] = 0x1, oV('scr_monsterdefeat').call(this), this.event_user(0xa), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* KING - Abandoned by the Lightners^1, his heart became cracked with hatred./", (Ig.msg ??= [])[0x1] = "* He cannot be reasoned with^1, but don't give up...!/%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (Ig.tempflag[0x5] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* You tried to reason with the King.../", oV('scr_kingface').call(this, 0x1, 0x5), (Ig.msg ??= [])[0x2] = "* Silence^1, Lightbringer!/", (Ig.msg ??= [])[0x3] = "* Your very existence goes against our own.../", (Ig.msg ??= [])[0x4] = "\\E0* By the Knight's will^1, I shall shatter your heart to pieces!/", oV('scr_noface').call(this, 0x5), (Ig.msg ??= [])[0x6] = "* Your will is changing..^1.&* \\cYTALK\\cW became \\cYCOURAGE\\cW!/%", (Ig.tempflag ??= [])[0x5] = 0x1, ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Courage', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x1] = "Defense#Boost", ((Ig.actcost ??= [])[this.myself] ??= [])[0x1] = 0x3e) : (oV('snd_play').call(this, 'snd_power'), oW.with('obj_heroparent', PV => {
        PV.__of = oV('scr_oflash').call(PV), PV.__of.flashcolor = o4.orange;
      }), (Ig.msg ??= [])[0x0] = "* You encouraged the party^1!&* The party's DEFENSE raised for this turn!/%", this.tempattack = 0.8), oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (Ig.tempflag[0x6] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* Susie tried to reason with the King.../", oV('scr_susface').call(this, 0x1, 0x1), (Ig.msg ??= [])[0x2] = "* Arright^1, listen up./", (Ig.msg ??= [])[0x3] = "\\E2* Lancer's my friend./", (Ig.msg ??= [])[0x4] = "\\EC* So if we can get by without hurting you^1, then.../", oV('scr_kingface').call(this, 0x5, 0x0), (Ig.msg ??= [])[0x6] = "* If I perish^1, so be it!/", (Ig.msg ??= [])[0x7] = "\\E4* Show my son the monster you REALLY are!/", oV('scr_susface').call(this, 0x8, 'C'), (Ig.msg ??= [])[0x9] = "* .../", (Ig.msg ??= [])[0xa] = "\\E3* Arright^1, you wanna see what I can do^1, huh?/", oV('scr_noface').call(this, 0xb), (Ig.msg ??= [])[0xc] = "* Susie's will is changing..^1.&* \\cYTALK\\cW became \\cYRED BUSTER\\cW!/%", (Ig.tempflag ??= [])[0x6] = 0x1, ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'RedBuster', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x2] = "Red#Damage", ((Ig.actcost ??= [])[this.myself] ??= [])[0x2] = 0x96, this.actcon = 0x1) : ((Ig.msg ??= [])[0x0] = "* Your SOUL shined its power on Susie!/%", this.actcon = 0xa), oV('scr_battletext_default').call(this), this.acttimer = 0x0), this.acting === 0x4 && this.actcon === 0x0 && (Ig.tempflag[0x7] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* Ralsei tried to reason with the King.../", oV('scr_ralface').call(this, 0x1, 'B'), (Ig.msg ??= [])[0x2] = "* You might not realize it^1, but.../", (Ig.msg ??= [])[0x3] = "\\E6* This is a world where you don't have to fight./", (Ig.msg ??= [])[0x4] = "\\E8* I know if we try^1, we can all find another way.../", oV('scr_kingface').call(this, 0x5, 0x6), (Ig.msg ??= [])[0x6] = "\\E6* Such simple-minded platitudes.../", (Ig.msg ??= [])[0x7] = "\\E0* A shame you will not live to realize your naivety./", (Ig.msg ??= [])[0x8] = "\\E4* Now^1, perish with the pathetic LIGHTNERs you worship!/", oV('scr_ralface').call(this, 0x9, 0x8), (Ig.msg ??= [])[0xa] = "* Sorry^1, my friends and I aren't going anywhere!/", oV('scr_noface').call(this, 0xb), (Ig.msg ??= [])[0xc] = "* Ralsei's will is changing..^1.&* \\cYTALK\\cW became \\cYDUAL HEAL\\cW!/%", oV('scr_battletext_default').call(this), (Ig.tempflag ??= [])[0x7] = 0x1, ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'DualHeal', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x3] = "Heals#everyone", ((Ig.actcost ??= [])[this.myself] ??= [])[0x3] = 0x7d, this.actcon = 0x1) : ((Ig.msg ??= [])[0x0] = "* Your SOUL shined its power on RALSEI!/%", oV('scr_battletext_default').call(this), this.actcon = 0x14), this.acttimer = 0x0), this.actcon === 0xa && (this.acttimer += 0x1, (this.acttimer >= 0xa || !Ix(IJ(I5))) && (this.acttimer = 0x0, this.actcon = 0xb)), this.actcon === 0xb && ((Ig.faceaction ??= [])[0x1] = 0x2, (Ig.charaction ??= [])[0x1] = 0x2, (Ig.charspecial ??= [])[0x1] = 0x5, (Ig.chartarget ??= [])[0x1] = 0x0, (Ig.acting ??= [])[0x1] = 0x0, oV('snd_play').call(this, 'snd_boost'), this.heartanim = oV('instance_create').call(this, MO('obj_herokris').x + 0x1e, MO('obj_herokris').y + 0x32, jz), oD(this.heartanim, PV => {
        PV.depth = -0x14, PV.image_index = 0x0, PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.image_speed = 0x1, PV.sprite_index = 'spr_soulshining';
      }), oW.with('obj_herokris', PV => {
        oV('scr_oflash').call(PV);
      }), oW.with('obj_herosusie', PV => {
        oV('scr_oflash').call(PV);
      }), this.actcon = 0xc), this.actcon === 0xc && (this.acttimer += 0x1, this.acttimer >= 0x14 && (this.actcon = 0x1, oW.with('obj_herosusie', PV => {
        PV.state = 0x0;
      }))), this.actcon === 0x14 && (this.acttimer += 0x1, (this.acttimer >= 0xa || !Ix(IJ(I5))) && (this.acttimer = 0x0, this.actcon = 0x15)), this.actcon === 0x15 && ((Ig.faceaction ??= [])[0x2] = 0x2, (Ig.charaction ??= [])[0x2] = 0x2, (Ig.charspecial ??= [])[0x2] = 0x6, (Ig.chartarget ??= [])[0x2] = 0x0, (Ig.acting ??= [])[0x2] = 0x0, oV('snd_play').call(this, 'snd_boost'), this.heartanim = oV('instance_create').call(this, MO('obj_herokris').x + 0x1e, MO('obj_herokris').y + 0x32, jz), oD(this.heartanim, PV => {
        PV.depth = -0x14, PV.image_index = 0x0, PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.image_speed = 0x1, PV.sprite_index = 'spr_soulshining';
      }), oW.with('obj_heroralsei', PV => {
        oV('scr_oflash').call(PV);
      }), oW.with('obj_herokris', PV => {
        oV('scr_oflash').call(PV);
      }), this.actcon = 0x16), this.actcon === 0x16 && (this.acttimer += 0x1, this.acttimer >= 0x14 && (this.actcon = 0x1, oW.with('obj_heroralsei', PV => {
        PV.state = 0x0;
      }))), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this))), Ig.myfight === 0x7 && (this.hspeed = 0xf), Ix(IJ(Id));
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x5) return this.userEvent5();
      if (PV === 0xa) return this.userEvent10();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(j3, 'obj_king_boss'), oA(j3, 'kinds', oM('obj_king_boss', Mu)), oA(j3, 'defaultDepth', 0x5a), oA(j3, 'defaultSprite', 'spr_chainking_idle');
var j4 = j3,
  j5 = class X5 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.compliment_just = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x1, this.con = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (Ig.plot < 0x16 && (Ig.plot = 0x16), this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_lancerbike_hurt', this.hurttimer / 0x2, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x4 && (this.dodgetimer += 0x1, this.dodgeamt = If(this.dodgetimer * 0x2 * Math.PI / 0xf) * 0x2, PV.draw_sprite_ext('spr_lancerbike_l', 0x0, this.x, this.y, this.dodgeamt, 0x2, 0x0, this.image_blend, 0x1), this.dodgetimer >= 0xf && (this.state = 0x0)), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_lancerbike', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_lancerbike'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x, (Ig.monstery ??= [])[this.myself] = this.y - this.sprite_height / 0x2 - 0x1e, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), (Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, (Ig.targeted ??= [])[this.mytarget] = 0x1, Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.turns === 0x0 && ((Ig.msg ??= [])[0x0] = "Halt, clowns!&This bike is&fueled by&victory!!!"), this.turns === 0x1 && ((Ig.msg ??= [])[0x0] = "I love to get&thrashed...&Just kidding!&That's you!!"), this.turns === 0x2 && ((Ig.msg ??= [])[0x0] = "So what are&you guys doing&after this???"), this.turns >= 0x3 && ((Ig.msg ??= [])[0x0] = "Hohoho!!!&I'm the bad&guy!"), this.compliment_just === 0x1 && (this.compliment === 0x1 && ((Ig.msg ??= [])[0x0] = "Oh! You make&my feelings&do wheelies!&Sweet wheelys"), this.compliment === 0x2 && ((Ig.msg ??= [])[0x0] = "Did you not&realize I can&mask my self-&esteem levels?"), this.compliment === 0x3 && ((Ig.msg ??= [])[0x0] = "Stop!! My&personality's&getting too&deep!!!"), this.compliment_just = 0x0), oV('scr_enemyblcon').call(this, this.x - 0xeb, this.y - 0x41, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (Ix(oV('button1_p').call(this)) && this.talktimer > 0xf && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW), oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), Ig.mnfight = 0x2)), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.attacks === 0x0 ? (this.bike = oV('instance_create').call(this, this.x, this.y, yD), this.visible = 0x0, this.bike.racecon = 0x1, this.bike.target = this.mytarget, this.bike.damage = Ig.monsterat[this.myself] * 0x5, this.attacks = 0x1) : (this.bike = oV('instance_create').call(this, this.x, this.y, yD), this.visible = 0x0, this.bike.lcon = 0x1, this.bike.target = this.mytarget, this.bike.damage = Ig.monsterat[this.myself] * 0x5, this.attacks = 0x0), this.turns += 0x1, Ig.turntimer = 0x3e7, this.attacked = 0x1, this.rr = oq(o7(0x5)), Ig.typer = 0x6, Ig.fc = 0x0, this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer's riding it out."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer is thinking about chips."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer's motorcycle is actually just a bike that's on fire."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer switches gears randomly to appear competent."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer revs viciously."), this.turns === 0x1 && (Ig.typer = 0x2f, Ig.fc = 0x1, Ig.fe = 0x2, (Ig.battlemsg ??= [])[0x0] = "* Dunno how I got an ax but^1, like^1, that's cool."))), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* LANCER - AT 7 DF 1&* Not to call a spade a spade^1, but he's a spade./", (Ig.msg ??= [])[0x1] = "* Not old enough to ride a motorcycle^1, so he set his bike on fire./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x1, Ig.automiss[this.myself] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* You tell Lancer to watch out for Susie's attack^1.&* He readies himself./%", (Ig.automiss ??= [])[this.myself] = 0x1) : (Ig.msg ??= [])[0x0] = "* Lancer laughs at the idea he would need your help!/%", oV('scr_battletext_default').call(this)), this.acting === 0x3 && this.actcon === 0x0 && (this.compliment >= 0x3 && ((Ig.msg ??= [])[0x0] = "* You say some kind words^1.&* Lancer absorbs them into his skin./%"), this.compliment === 0x2 && ((Ig.msg ??= [])[0x0] = "* You compliment LANCER^1.&* He gets confused as to your sincerity./", (Ig.msg ??= [])[0x1] = "* Instead of going up or down^1, his ATTACK power goes sideways...?/%", oV('scr_mercyadd').call(this, this.myself, 0x14)), this.compliment === 0x1 && ((Ig.msg ??= [])[0x0] = "* You try to compliment LANCER again.../", (Ig.msg ??= [])[0x1] = "* But he sees it as insincere^1.&* His ATTACK POWER goes back up!/%", oV('scr_mercyadd').call(this, this.myself, 0x14), (Ig.monsterat ??= [])[this.myself] += 0x1), this.compliment === 0x0 && ((Ig.msg ??= [])[0x0] = "* You tell Lancer you can't tell the difference between his clothes and his body./", (Ig.msg ??= [])[0x1] = "* He seems flattered..^1.&* His ATTACK POWER went down!/%", oV('scr_mercyadd').call(this, this.myself, 0x14), (Ig.monsterat ??= [])[this.myself] -= 0x1), this.compliment_just = 0x1, this.compliment += 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this))), this.con === 0x1 && ((this.alarm ??= [])[0x4] = 0x5, this.con = 0x2), this.con === 0x3 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "Wait^1!&Wait a second!/", (Ig.msg ??= [])[0x1] = "My bike's&running&out of&fuel...!/", (Ig.msg ??= [])[0x2] = "Alright,&you punk-&a-roos!/", (Ig.msg ??= [])[0x3] = "You had the&luck of the&draw this&time^1, but.../", (Ig.msg ??= [])[0x4] = "Next time^1,&the losers&will be&YOU!!!/", (Ig.msg ??= [])[0x5] = "Hahaha!!^1!&Bye^1, losers!!/", (Ig.msg ??= [])[0x6] = "I gotta get&home before&dinner!!!/%", this.con = 0x4, oV('scr_enemyblcon').call(this, this.x - 0xeb, this.y - 0x41, 0x3)), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0x14, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0, (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && ((Ig.monsterexp ??= [])[this.myself] -= 0x0, (Ig.monstergold ??= [])[this.myself] += 0xa, Ig.plot < 0x16 && (Ig.plot = 0x16), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(j5, 'obj_lancerboss'), oA(j5, 'kinds', oM('obj_lancerboss', Mu)), oA(j5, 'defaultDepth', 0x5a), oA(j5, 'defaultSprite', 'spr_lancerbike');
var j6 = j5,
  j7 = class X6 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_lancer_battle', this.hurtsprite = 'spr_lancer_battle_hurt', this.sparedsprite = 'spr_lancer_battle', this.hurtlevel = 0x0, this.hmake = 0x0, this.firstskip = 0x1, this.shakesine = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.shakesine = 0x0, this.siner = 0x0, this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && oV('scr_defeatrun').call(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), Ig.monsterhp[this.myself] / Ig.monstermaxhp[this.myself] <= 0.65 && (this.hurtlevel = 0x1), Ig.monsterhp[this.myself] / Ig.monstermaxhp[this.myself] <= 0.2 && (this.hurtlevel = 0x2), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex * 0x2, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.shakesine += 0x1, this.siner += 0x1, this.shx = o7(IU(this.shakesine / 0x6) * this.hurtlevel / 1.5), this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sparedsprite), PV.draw_sprite_ext(this.thissprite, this.hurtlevel, this.x + this.shx, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.hurtlevel, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (this.firstskip === 0x1 && ((Ig.acting ??= [])[0x0] = 0x1, this.acting = 0x1, oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), oW.with('obj_face', PV => {
        PV.instance_destroy();
      }), oW.with('obj_smallface', PV => {
        PV.instance_destroy();
      }), Ig.charaction[0x0] === 0x1 && (Ig.attacking = 0x1), Ig.charturn = M7(), Ig.myfight = 0x3), Ig.monster[this.myself] === 0x1 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, (Ig.acting ??= [])[0x0] = 0x1, this.acting = 0x1, Ig.mnfight === 0x1 && this.talked === 0x0 && (this.actcon = 0x0, oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, -0x1), Ig.mnfight === 0x2 && (!Ix(IJ(IH)) && this.hmake === 0x0 && (oV('scr_moveheart').call(this), this.hmake = 0x1), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (Ig.turntimer = 0x8c, (this.turns === 0x0 || this.turns === 0x2) && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x14, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, Ig.hp[Ig.char[0x0]] <= 0x46 && (this.dc.damage = Ig.monsterat[this.myself] * 0x3), Ig.turntimer = 0xb4), this.turns === 0x1 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x15, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, Ig.hp[Ig.char[0x0]] <= 0x46 && (this.dc.damage = Ig.monsterat[this.myself] * 0x3), Ig.turntimer = 0xb4), this.turns >= 0x3 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.difficulty = this.turns * 0x2, this.turns === 0x6 && (this.dc.difficulty = 0x1e), this.turns === 0x7 && (this.dc.difficulty = 0x5a), this.dc.type = 0x18, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, (Ig.battlemsg ??= [])[0x0] = "* ...") : Ig.turntimer = 0x96), Ig.mnfight === 0x2 && Ig.turntimer <= 0xa && (this.hmake = 0x0)), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.firstskip = 0x0, Ig.typer = 0x35, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.actcon = 0x1, this.turns === 0x0 && ((Ig.msg ??= [])[0x0] = "Hey, wanna&see what&happens to&traitors?/%"), this.turns === 0x1 && ((Ig.msg ??= [])[0x0] = "They.&Get.&Crushed./%"), this.turns === 0x2 && ((Ig.msg ??= [])[0x0] = "If you don't&get out of&the way.../", (Ig.msg ??= [])[0x1] = "...I'll&kill you./%"), this.turns === 0x3 && ((Ig.msg ??= [])[0x0] = "Get it?&I'll KILL&you./%"), this.turns === 0x4 && ((Ig.msg ??= [])[0x0] = "Heh...&You missed,&idiot!/%"), this.turns === 0x5 && ((Ig.msg ??= [])[0x0] = "... wait, why&aren't you&fighting&back...?/%", oW.with('obj_herosusie', PV => {
          PV.idlesprite = 'spr_susieb_idle_serious', PV.attacksprite = 'spr_susieb_attack_serious';
        })), this.turns === 0x6 && ((Ig.msg ??= [])[0x0] = "... Heh, you&think I&CARE?/", (Ig.msg ??= [])[0x1] = "If you just&wanna lie&down and&die?/", (Ig.msg ??= [])[0x2] = "You're just&making it&easier for&me!/%", oW.with('obj_herosusie', PV => {
          PV.idlesprite = 'spr_susieb_idle', PV.attacksprite = 'spr_susieb_attack';
        })), this.turns === 0x7 && (Ig.typer = 0x36, (Ig.msg ??= [])[0x0] = "........&Alright,&that's&enough./", (Ig.msg ??= [])[0x1] = "If you&wanna die&so much.../", (Ig.msg ??= [])[0x2] = "THEN DIE!/%", this.actcon = 0x2), (Ig.monsterdf ??= [])[this.myself] -= 0x5, oV('scr_enemyblcon').call(this, MO('obj_herosusie').x + 0x64, MO('obj_herosusie').y, 0x7), oW.with('obj_writer', PV => {
          PV.skippable = 0x0;
        })), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0x2 && !Ix(IJ(I5)) && (oV('snd_free_all').call(this), oV('snd_play').call(this, 'snd_laz_c'), this.black = oV('scr_dark_marker').call(this, -0x14, -0x14, 'spr_pixel_white'), oD(this.black, PV => {
          PV.image_blend = o4.black, PV.depth = -0x2710, PV.image_xscale = 0x384, PV.image_yscale = 0x384;
        }), this.actcon = 0x3, this.acttimer = 0x0, Ix(IJ(IE)))) {
          {
            let PV = this.black;
            oW.with('obj_lancerbattle2_event', PD => {
              PD.black = PV;
            });
          }
          oW.with('obj_lancerbattle2_event', PD => {
            PD.con = 0x34, (PD.alarm ??= [])[0x4] = 0x50;
          });
        }
        this.actcon;
      }
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(j7, 'obj_lancerboss2'), oA(j7, 'kinds', oM('obj_lancerboss2', Mu)), oA(j7, 'defaultDepth', 0x5a), oA(j7, 'defaultSprite', 'spr_lancer_battle');
var j8 = j7,
  j9 = class X7 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x1, this.con = 0x0, this.susie_act = 0x0, this.lancer_act = 0x0, this.defeated = 0x0, this.anythingcounter = 0x0, this.lancer_hurt = 0x0, this.idlesprite = this.sprite_index, this.susie_revive_count = 0x0, this.ears_blocked = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] < Ig.monstermaxhp[this.myself] / 0x4 && (oW.with('obj_monsterparent', PD => {
        PD.defeated = 0x1;
      }), (Ig.monsterhp ??= [])[this.myself] = Ig.monstermaxhp[this.myself] / 0x4), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xc), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_lancerbike_hurt', this.hurttimer / 0x2, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x4 && (this.dodgetimer += 0x1, this.dodgeamt = If(this.dodgetimer * 0x2 * Math.PI / 0xf) * 0x2, PV.draw_sprite_ext('spr_lancerbike_l', 0x0, this.x, this.y, this.dodgeamt, 0x2, 0x0, this.image_blend, 0x1), this.dodgetimer >= 0xf && (this.state = 0x0)), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.idlesprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x - 0x1e, (Ig.monstery ??= [])[this.myself] = this.y - this.sprite_height / 0x2 - 0x1e, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (this.defeated === 0x1 && Ig.mnfight === 0x1 && (Ig.mnfight = 0x63, this.con = 0x1), Ig.monster[this.myself] === 0x1 && this.defeated === 0x0 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_monsterpop').call(this) === 0x1 && (this.susie_revive_count += 0x1, this.susie_revive_count >= 0x3 && (oW.with('obj_susieandlancer_event', PV => {
        PV.s.visible = 0x0;
      }), (Ig.monster ??= [])[0x0] = 0x1, (Ig.monsterinstance ??= [])[0x0] = oV('instance_create').call(this, Ig.monstermakex[0x0], Ig.monstermakey[0x0], Ig.monsterinstancetype[0x0]), Ig.monsterinstance[0x0].myself = 0x0, oD(Ig.monsterinstance[0x0], PV => {
        PV.event_user(0xc), PV.event_user(0x1), Ig.turntimer < 0x96 && (Ig.turntimer = 0x96);
      }), (Ig.monsterhp ??= [])[0x0] = 0x28, oV('snd_play').call(this, 'snd_power'), this.susie_revive_count = 0x0)), this.attack_qual = 0x1, oW.with('obj_susieenemy', PV => {
        PV.sleeping === 0x0 && Ig.monster[PV.myself] === 0x1 && oW.with('obj_lancerboss3', PD => {
          PD.attack_qual = 0x0;
        });
      }), this.attack_qual === 0x1 && (oV('scr_randomtarget').call(this), (Ig.targeted ??= [])[this.mytarget] = 0x1), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rrrr = oI(0x0, 0x1, 0x2, 0x3), (Ig.msg ??= [])[0x0] = "Hey!!&Hey Susie!!&Watch me,&watch me!!", this.rrrr === 0x1 && ((Ig.msg ??= [])[0x0] = "Prepare for&smashing, you&luxurious&melons!!!"), this.rrrr === 0x2 && ((Ig.msg ??= [])[0x0] = "Horror! Pain!&The power of&REAL bad guys!&(Nice, huh?)"), this.rrrr === 0x3 && ((Ig.msg ??= [])[0x0] = "This bike is&fueled by&EVIL! ...and&friendship!"), this.lancer_hurt === 0x0 && Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] * 0.5 && (this.lancer_hurt = 0x1, (Ig.msg ??= [])[0x0] = "Ow^1, my&guts hurt!"), this.susie_act === 0x3 && ((Ig.msg ??= [])[0x0] = "Oh^1, what a&beautiful&song!!!"), this.susie_act === 0x9 && ((Ig.msg ??= [])[0x0] = "Don't worry&Bikey, I'll&put you to&bed soon..."), this.acting === 0x2 && (this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "Oh!!!&It's&working&on me!!!"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "Thanks,&it's all&natural!"), this.anythingcounter === 0x3 && ((Ig.msg ??= [])[0x0] = "Really!?&It's just&what I&wanted!!!"), this.anythingcounter >= 0x4 && ((Ig.msg ??= [])[0x0] = "Hee hee!&I'm bliss-&-fully&ignorant!")), this.acting === 0x3 && (this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "Oh!!!&It's&working&on me!!!"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "Really!^1?&That's bad!"), this.anythingcounter === 0x3 && ((Ig.msg ??= [])[0x0] = "Wow, I'll&look&amazing!!"), this.anythingcounter >= 0x4 && ((Ig.msg ??= [])[0x0] = "Hee hee!&I'm bliss-&-fully&ignorant!")), this.susie_act = 0x0, this.lancer_act = 0x0, oV('scr_enemyblcon').call(this, this.x - 0xeb, this.y - 0x41, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (Ix(oV('button1_p').call(this)) && this.talktimer > 0x11 && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW), oW.with('obj_writer', PV => {
        PV.instance_destroy();
      }), Ig.mnfight = 0x2)), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.attack_qual = 0x0, oV('scr_monsterpop').call(this) === 0x1 && (this.attack_qual = 0x1), oW.with('obj_susieenemy', PV => {
        PV.sleeping === 0x1 && oW.with('obj_lancerboss3', PD => {
          PD.attack_qual = 0x1;
        });
      }), this.attack_qual === 0x1 && (this.attacks === 0x0 ? (this.bike = oV('instance_create').call(this, this.x, this.y, yD), this.visible = 0x0, this.bike.racecon = 0x1, this.bike.target = this.mytarget, this.bike.damage = Ig.monsterat[this.myself] * 0x5, this.attacks = 0x1) : (this.bike = oV('instance_create').call(this, this.x, this.y, yD), this.visible = 0x0, this.bike.lcon = 0x1, this.bike.target = this.mytarget, this.bike.damage = Ig.monsterat[this.myself] * 0x5, this.attacks = 0x0), Ig.turntimer = 0x3e7), this.turns += 0x1, this.attacked = 0x1, this.rr = oq(o7(0x5)), Ig.typer = 0x6, Ig.fc = 0x0, this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer's riding it out."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer is thinking about chips."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer's motorcycle is actually just a bike that's on fire."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer switches gears randomly to appear competent."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Lancer revs viciously."))), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* LANCER - AT 7 DF 1&* Watch out!!^1! He's boosted by friendship!/%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You tried convincing Lancer not to fight./", (Ig.msg ??= [])[0x1] = "* Lancer started to become convinced!/%", this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "* You tried telling Lancer you like his hair.../", (Ig.msg ??= [])[0x1] = "* Lancer became even more convinced!/%"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "* You told Lancer you'd give him a picnic basket of worms./", (Ig.msg ??= [])[0x1] = "* Lancer became almost fully convinced!/%"), this.anythingcounter >= 0x3 && ((Ig.msg ??= [])[0x0] = "* You told Lancer you just want to get along!/", (Ig.msg ??= [])[0x1] = "* It's the decisive kindness!/%", this.ears_blocked >= 0x2 && ((Ig.msg ??= [])[0x0] = "* You told Lancer you want to get along really fast!/", (Ig.msg ??= [])[0x1] = "* The soundwaves reached Lancer instantly!/%"), this.attack_qual = 0x0, oV('scr_monsterpop').call(this) === 0x1 && (this.attack_qual = 0x1), oW.with('obj_susieenemy', PV => {
          PV.sleeping === 0x1 && oW.with('obj_lancerboss3', PD => {
            PD.attack_qual = 0x1;
          });
        }), this.attack_qual === 0x0 ? (this.actcon = 0x14, oW.with('obj_monsterparent', PV => {
          PV.ears_blocked += 0x1;
        })) : this.anythingcounter = 0xa, this.ears_blocked >= 0x3 && (this.anythingcounter = 0xa, this.actcon = 0x1, this.attack_qual = 0x1)), this.anythingcounter < 0x4 && (this.anythingcounter += 0x1), oV('scr_battletext_default').call(this)), this.acting === 0x3 && this.actcon === 0x0) {
          if (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You told Ralsei to compliment the enemies!/", oV('scr_ralface').call(this, 0x1, 0x8), (Ig.msg ??= [])[0x2] = "* You two look like a really great team! I'm proud!/", oV('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "* (Lancer started to become a little convinced!)/%", this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "* You told Ralsei to logically best Lancer and Susie./", oV('scr_ralface').call(this, 0x1, 0x1), (Ig.msg ??= [])[0x2] = "* You two^1, if we don't stop fighting, then.../", (Ig.msg ??= [])[0x3] = "\\E6* ... Someone might get hurt!/", oV('scr_noface').call(this, 0x4), (Ig.msg ??= [])[0x5] = "* (Lancer became more convinced^1! It's working!)/%"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "* You told Ralsei to offer his services to the enemies!/", oV('scr_ralface').call(this, 0x1, 0x1), (Ig.msg ??= [])[0x2] = "* You two^1, if we stop fighting^1, then I could^1, um.../", (Ig.msg ??= [])[0x3] = "\\E8* I could braid your hair!/", oV('scr_noface').call(this, 0x4), (Ig.msg ??= [])[0x5] = "* (Lancer became almost fully convinced!)/%"), this.anythingcounter >= 0x3 && ((Ig.msg ??= [])[0x0] = "* You told Ralsei to deal the final blow of kindness!/", oV('scr_ralface').call(this, 0x1, 0x6), (Ig.msg ??= [])[0x2] = "* In summary^1, I like you two^1, and.../", (Ig.msg ??= [])[0x3] = "\\E8* I think we should all just get along!/%", this.ears_blocked >= 0x2 && ((Ig.msg ??= [])[0x0] = "* You told Ralsei to compliment Lancer really fast!/", oV('scr_ralface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* You'rereallyaswellpersonyouknowthat?!/", oV('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "* The soundwaves reached Lancer instantly!/%"), this.attack_qual = 0x0, oV('scr_monsterpop').call(this) === 0x1 && (this.attack_qual = 0x1), oW.with('obj_susieenemy', PV => {
            PV.sleeping === 0x1 && oW.with('obj_lancerboss3', PD => {
              PD.attack_qual = 0x1;
            });
          }), this.attack_qual === 0x0 ? (this.actcon = 0x14, oW.with('obj_monsterparent', PV => {
            PV.ears_blocked += 0x1;
          })) : this.anythingcounter = 0xa, this.ears_blocked >= 0x3 && (this.anythingcounter = 0xa, this.actcon = 0x1, this.attack_qual = 0x1)), this.anythingcounter < 0x4 && (this.anythingcounter += 0x1), Ix(IJ(jG))) {
            {
              let PV = this.anythingcounter;
              oW.with('obj_susieenemy', PD => {
                PD.anythingxcounter = PV;
              });
            }
            oW.with('obj_susieenemy', PD => {
              PD.lancer_act = 0x3;
            });
          }
          oV('scr_battletext_default').call(this);
        }
        this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, this.anythingcounter < 0xa ? oV('scr_attackphase').call(this) : (this.defeated = 0x1, Ig.mnfight = 0x63, Ig.myfight = 0x63, this.con = 0x1, (Ig.flag ??= [])[0xf9] = 0x1)), this.actcon === 0x14 && !Ix(IJ(I5)) && (this.visible = 0x0, oW.with('obj_susieenemy', PD => {
          PD.visible = 0x0;
        }), oV('scr_monsterpop').call(this) === 0x1 && oW.with('obj_susieandlancer_event', PD => {
          PD.s.visible = 0x0;
        }), this.blocklan = oV('scr_dark_marker').call(this, this.x, this.y, 'spr_lancerbike_earcover'), this.blocklan.depth = this.depth, oV('snd_play').call(this, 'snd_bell'), (Ig.msg ??= [])[0x0] = "* (But Susie blocked the soundwaves before they reached Lancer!)/", oV('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Try convincing someone that can't HEAR YOU!/%", oV('scr_battletext_default').call(this), this.actcon = 0x15), this.actcon === 0x15 && !Ix(IJ(I5)) && (oD(this.blocklan, PD => {
          PD.instance_destroy();
        }), this.visible = 0x1, oW.with('obj_susieenemy', PD => {
          PD.visible = 0x1;
        }), oV('scr_monsterpop').call(this) === 0x1 && oW.with('obj_susieandlancer_event', PD => {
          PD.s.visible = 0x1;
        }), this.actcon = 0x1);
      }
      this.con === 0x1 && ((this.alarm ??= [])[0x4] = 0x5, this.con = 0x2), this.con === 0x3 && (oW.with('obj_susieenemy', PD => {
        PD.idlesprite = 'spr_susie_enemy';
      }), Ig.typer = 0x2e, Ig.fe = 0x4, Ig.fc = 0x5, (Ig.msg ??= [])[0x0] = "* Ow.../", oV('scr_susface').call(this, 0x1, 0x9), (Ig.msg ??= [])[0x2] = "* Hey^1, HEY^1! Enough's enough already!/", (Ig.msg ??= [])[0x3] = "* If you hit him any more^1, you might really hurt him!/", (Ig.msg ??= [])[0x4] = "\\E0* ... Lancer^1, you OK...?/", oV('scr_lanface').call(this, 0x5, 0x2), (Ig.msg ??= [])[0x6] = "* I..^1. I'm fine^1, Susie!/", (Ig.msg ??= [])[0x7] = "\\E7* My insides are just..^1. a little mixed up./", oV('scr_susface').call(this, 0x8, 0x0), (Ig.msg ??= [])[0x9] = "* Alright^1, fine^1! You guys win!/", oV('scr_ralface').call(this, 0xa, 0x6), (Ig.msg ??= [])[0xb] = "* (Kris^1, maybe we should have taken it easier...)/%", Ig.flag[0xf9] === 0x1 && ((Ig.msg ??= [])[0x0] = "* Uh oh./", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* What's wrong^1, dude?/", oV('scr_lanface').call(this, 0x3, 0x4), (Ig.msg ??= [])[0x4] = "* I accidentally started liking the enemies...!/", (Ig.msg ??= [])[0x5] = "\\E3* Now seeing them just makes me feel round and soft./", (Ig.msg ??= [])[0x6] = "\\E4* Bad atmosphere for battle^1, though./", oV('scr_susface').call(this, 0x7, 0x0), (Ig.msg ??= [])[0x8] = "* .../", (Ig.msg ??= [])[0x9] = "\\E1* Well^1, if you don't wanna fight,/", (Ig.msg ??= [])[0xa] = "\\E0* There's no point^1, I guess./", (Ig.msg ??= [])[0xb] = "\\E2* Battle's over!/%"), this.con = 0x4, oV('scr_battletext').call(this)), this.con === 0x4 && !Ix(IJ(I5)) && (this.con = 0x5, (this.alarm ??= [])[0x4] = 0x2, oW.with('obj_battlecontroller', PD => {
        PD.noreturn = 0x0, (PD.alarm ??= [])[0x2] = 0x4;
      })), this.con === 0x6 && (oW.with('obj_susieandlancer_event', PD => {
        PD.l.visible = 0x1;
      }), oW.with('obj_monsterparent', PD => {
        oV('scr_monsterdefeat').call(PD);
      }), this.instance_destroy(), this.con = 0x7);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(j9, 'obj_lancerboss3'), oA(j9, 'kinds', oM('obj_lancerboss3', Mu)), oA(j9, 'defaultDepth', 0x5a), oA(j9, 'defaultSprite', 'spr_lancerbike');
var jM = j9,
  jI = class X8 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.mytarget = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_diamondm_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_diamondm_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_diamondm_spared'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Message&A"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Message&B"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Message&C"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "Message&D"), (Ig.msg ??= [])[0x0] = "WlyWlyWlyWly&WlyWlyWlyWly&WlyWlyWlyWly&WlyWlyWlyWly", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.rr === 0x0 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x0, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.target = this.mytarget) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.target = this.mytarget), this.turns += 0x1, Ig.turntimer = 0x8c, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Placeholder Message A."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Placeholder Message B."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Placeholder Message C."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Placeholder Message D.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "A special&scenario&occurred!!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0xf, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* ENEMY - AT 1 DF 1&* I am your adversary./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.actcon = 0x1, Ig.automiss[this.myself] === 0x0 && ((Ig.msg ??= [])[0x0] = "* You warned the enemy^1.&* It guarded from Susie's attack./%", (Ig.monstercomment ??= [])[this.myself] = "(Warned)", (Ig.automiss ??= [])[this.myself] = 0x1), oV('scr_battletext_default').call(this)), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Its body was filled with a kind feeling./%", (Ig.mercymod ??= [])[this.myself] += 0xc8, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x4 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Its body will result in a kind feeling at the end of the combat./%", this.battlecancel = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x5 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Its body will result in a speech after attack./%", this.battlecancel = 0x2, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x6 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Its body became tired./%", (Ig.monstercomment ??= [])[this.myself] = "(Tired)", (Ig.monsterstatus ??= [])[this.myself] = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this))), Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jI, 'obj_placeholderenemy'), oA(jI, 'kinds', oM('obj_placeholderenemy', Mu)), oA(jI, 'defaultDepth', 0x5a), oA(jI, 'defaultSprite', 'spr_diamondm_idle');
var jo = jI,
  jy = class X9 extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x3c, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.eyex = 0x0, this.eyey = 0x0, this.eye_angle = 0x0, this.eye_radius = 0x0, this.ponman_eye = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.image_speed = 0x0, this.siner = 0x0, this.addup = 0x0, this.eyecon = 0x0, this.spinspeed = 0x0, this.shotrefresh = 0x0, this.x_angle = 0x0, this.spintype = 0x0, this.shotbuffer = 0x0, this.grandbuffer = 0x0, this.shotcount = 0x0, this.totalshotcount = 0x0, this.pontotal = 0x1, this.maxtimer = 0x0, this.activetimer = 0x0, this.testtimer = 0x0, this.sleeping = 0x0, this.sleep_index = 0x5, this.becomesleep = 0x0, this.this_index = 0x0, this.lullabied = 0x0, this.idlesprite = 'spr_ponman_idle', this.hurtsprite = 'spr_ponman_idle', this.sparedsprite = 'spr_ponman_appear';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Weak)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_ponman_idle', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.sleeping === 0x0 && PV.draw_sprite_ext('spr_ponman_eye', 0x0, this.x + 0x1c + this.eyex, this.y + 0x20 + this.eyey, 0x2, 0x2, 0x0, o4.white, 0x1), this.sleeping === 0x1 && (oV('scr_mercyadd').call(this, this.myself, -0x64), this.sprite_index = 'spr_ponman_idle', this.image_index = 0x0, this.sleeping = 0x0))), this.state === 0x0 && (this.thissprite = 'spr_ponman_idle', this.this_index = this.image_index, this.sleeping === 0x1 && (this.thissprite = 'spr_ponman_appear', this.this_index = this.sleep_index, this.sleep_index > 0.5 && (this.sleep_index -= 0.25)), PV.draw_sprite_ext(this.thissprite, this.this_index, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.sleeping === 0x0 && PV.draw_sprite_ext('spr_ponman_eye', 0x0, this.x + 0x1c + this.eyex, this.y + 0x20 + this.eyey, 0x2, 0x2, 0x0, o4.white, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.this_index, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent11"]() {}
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1) {
        if (Ig.mnfight === 0x1 && this.talked === 0x0 && (Ig.mercymod[this.myself] < 0x64 && oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = '\x20', this.g = oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), oD(this.g.mywriter, PV => {
          PV.instance_destroy();
        }), oD(this.g, PV => {
          PV.instance_destroy();
        }), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0x5), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0) {
          if (this.rtimer += 0x1, this.rtimer === 0xc) {
            for (Ig.turntimer = 0x96, this.pontotal = oV('scr_monsterpop').call(this), this.i = 0x0; this.i < 0x3; this.i += 0x1) Ig.monster[this.i] === 0x1 && Ig.mercymod[this.i] >= 0x64 && (this.pontotal -= 0x1);
            this.pontotal === 0x3 && (this.maxshot = 0x3), this.pontotal === 0x2 && (this.maxshot = 0x4), this.pontotal === 0x1 && (this.maxshot = 0x5), this.pontotal <= 0x0 && (Ig.turntimer = 0xa, this.maxshot = 0x6), this.shotcount = 0x0, this.totalshotcount = 0x0, this.activetimer = 0x1, this.shotbuffer = 0x8, Ig.mercymod[this.myself] < 0x64 && (this.eyecon = 0x14), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman advances one step at a time."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman listens politely^1, despite having no ears."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman seems hypnotized by your idle animation."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman gazes enigmatically."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like a pawn shop."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman can't keep its eye open."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Ponman looks dilated."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Ponman is sleeping soundly."), Ig.monstercomment[this.myself] === "(Sleepy)" && ((Ig.msg ??= [])[0x0] = "* The enemies became SLEEPY from Ralsei's lullaby!");
          } else Ig.turntimer = 0x78;
        }
        Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && oV('scr_mercyadd').call(this, this.myself, 0x64), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
          PV.noreturn = 0x1;
        }), this.con = 0x1, this.battlecancel = 0x3));
      }
      if (Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* PONMAN - AT 8 DF 0&* Its nucleus doubles as an eyespot./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You whispered goodnight to Ponman^1.&* It fell asleep.../%", this.sleeping = 0x1, oV('scr_mercyadd').call(this, this.myself, 0x64), oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (oV('snd_pause').call(this, Ig.batmusic[0x1]), this.lullabied === 0x0 ? (this.singy = oV('snd_play').call(this, 'snd_ralseising1'), oW.with(this.object_index, PV => {
          PV.lullabied = 0x1;
        })) : (this.singy = oV('snd_play').call(this, 'snd_ralseising2'), oW.with(this.object_index, PV => {
          PV.lullabied = 0x0;
        })), (Ig.msg ??= [])[0x0] = "* Ralsei sang a soft and entrancing lullaby!/%", oW.with('obj_heroralsei', PV => {
          PV.visible = 0x0;
        }), this.ralsing = oV('scr_dark_marker').call(this, MO('obj_heroralsei').x, MO('obj_heroralsei').y, 'spr_ralseib_sing'), oD(this.ralsing, PV => {
          PV.image_speed = 0.2;
        }), this.lullatimer = 0x0, oV('scr_battletext_default').call(this), this.actcon = 0xa), this.acting === 0x4 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You and Ralsei warned Ponman about Susie^1.&* The enemy went on guard.../%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        if (this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0xa && (this.lullatimer += 0x1, this.lullatimer >= 0x1e && (this.actcon = 0xb)), this.actcon === 0xb && IJ(I5) === 0x0) {
          if (oD(this.ralsing, PV => {
            PV.instance_destroy();
          }), oW.with('obj_heroralsei', PV => {
            PV.visible = 0x1;
          }), oV('snd_stop').call(this, this.singy), oV('snd_resume').call(this, Ig.batmusic[0x1]), (Ig.msg ??= [])[0x0] = "* PONMAN fell asleep^1!&* The enemies became TIRED!/%", oV('scr_monsterpop').call(this) > 0x1 && Ix(oV('scr_havechar').call(this, 0x2))) {
            for (this.dx = 0x0; this.dx < 0x3; this.dx += 0x1) Ig.char[this.dx] === 0x2 && Ig.charcond[this.dx] !== 0x5 && ((Ig.charcond ??= [])[this.dx] = 0x5, (Ig.faceaction ??= [])[this.dx] = 0x9, (Ig.charmove ??= [])[this.dx] = 0x0, (Ig.msg ??= [])[0x0] = "* PONMAN fell asleep^1!&* SUSIE fell asleep^1!&* The enemies became TIRED!/%");
          }
          this.sleeping = 0x1, oV('scr_mercyadd').call(this, this.myself, 0x64), oW.with('obj_monsterparent', PV => {
            (Ig.monstercomment ??= [])[PV.myself] = "(Sleepy)", (Ig.monsterstatus ??= [])[PV.myself] = 0x1;
          }), oV('scr_battletext_default').call(this), this.actcon = 0x1;
        }
      }
      Ig.myfight === 0x7 && (this.hspeed = 0xf), this.sleeping === 0x1 && (this.eyecon = 0x3e7), this.eyecon === 0x0 && (this.eye_angle = 0xb4 + IU(this.siner / 0x8) * 0x1e, this.eye_radius < 0x8 ? this.eye_radius += 0x2 : this.eye_radius = 0x8, this.addup === 0x0 ? this.image_index = 0x1 : this.image_index = 0x3, this.eye_angle > 0xc8 && (this.image_index = 0x0, this.addup = 0x1), this.eye_angle < 0xa0 && (this.image_index = 0x2, this.addup = 0x0)), this.eyecon === 0xa && (this.activetimer = 0x0, oW.with('obj_regularbullet', PV => {
        PV.active = 0x0, PV.image_alpha -= 0.1;
      }), this.image_index = 0x0, this.eye_radius *= 0.7, IL(this.eye_radius) < 0.5 && (this.eye_radius = 0x0, this.eye_angle = 0x0), Ig.turntimer <= 0x1 && (this.eyecon = 0x0)), this.eyecon === 0x14 && (this.spinspeed < 0xa && (this.spinspeed += 0x1), this.pontotal > 0x1 ? this.siner += this.spinspeed / 0x8 : this.siner += this.spinspeed / 0x14, this.eye_angle = 0xb4 + IU(this.siner / 0x8) * 0x46, this.eye_radius < 0x8 && (this.eye_radius += 0x1), this.grandbuffer -= 0x1, Ix(IJ(yH)) ? this.x_angle = oX(this.eyex + 0x1c + this.x, this.eyey + 0x20 + this.y, MO('obj_heart').x + 0x8, MO('obj_heart').y + 0x8) : this.x_angle = 0x0, IL(this.x_angle - this.eye_angle) < 0x19 && this.eye_angle >= 0x78 && this.eye_angle <= 0xf0 && this.shotbuffer < 0x0 && this.shotcount < 0x3 && this.totalshotcount < this.maxshot && (this.shotcount += 0x1, this.pontotal === 0x2 && (this.shotcount += 0x1), this.pontotal === 0x3 && (this.shotcount += 0x1), this.shotcount >= 0x3 && (this.totalshotcount += 0x1, this.shotcount = 0x0, this.pontotal === 0x1 && (this.shotbuffer = 0xa), this.pontotal === 0x2 && (this.shotbuffer = 0xd), this.pontotal === 0x3 && (this.shotbuffer = 0x16)), this.totalshotcount >= this.maxshot && (this.maxtimer = 0x1), oV('snd_play').call(this, 'snd_hurt1'), this.bul = oV('instance_create').call(this, this.eyex + 0x1c + this.x, this.eyey + 0x20 + this.y, I3), this.bul.speed = 0x2, this.bul.timepoints = 2.5, this.bul.target = this.mytarget, this.bul.damage = Ig.monsterat[this.myself] * 0x5, this.bul.friction = -0.11, this.pontotal === 0x1 && (this.bul.friction = -0.12), this.bul.direction = this.eye_angle, oD(this.bul, PV => {
        PV.sprite_index = 'spr_diamondbullet', PV.image_angle = PV.direction;
      })), this.maxtimer > 0x0 && (this.maxtimer += 0x1), Ig.turntimer < 0xa && (this.eyecon = 0xa)), this.siner += 0x1, this.shotbuffer -= 0x1, this.becomesleep === 0x1 && (this.eyecon = 0x3e7, this.sleeping = 0x1, this.becomesleep = 0x0, this.sleep_index = 0x5), this.eye_angle < 0x0 && (this.eye_angle += 0x168), this.eye_angle > 0x168 && (this.eye_angle -= 0x168), this.eyex = oy(this.eye_radius, this.eye_angle), this.eyey = om(this.eye_radius, this.eye_angle);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jy, 'obj_ponman_enemy'), oA(jy, 'kinds', oM('obj_ponman_enemy', Mu)), oA(jy, 'defaultDepth', 0x5a), oA(jy, 'defaultSprite', 'spr_ponman_idle');
var jE = jy,
  jj = class XM extends Mu {
    ["create"]() {
      this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.blowall = 0x0, this.blowing = 0x0, this.animsiner = 0x0, this.blowamt = 0x0, this.xx = 0x0, this.yy = 0x0, this.blowtimer = 0xb4, this.blowbuffer = 0x3, this.blown = 0x0, this.blowanimtimer = 0x0, this.blow_wait = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.onoff = 0x0, this.shakeamt = 0x0, this.originalwidth = this.sprite_width, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_rabbick_enemy', this.hurtsprite = 'spr_rabbick_enemy_hurt', this.sparedsprite = 'spr_rabbick_enemy_spared';
    }
    ["draw"](PV) {
      this.animsiner += 0x1, this.image_xscale = 0x2 - this.blowamt / 0x64, this.blown === 0x1 && (this.image_xscale = 0x2), this.xoff = 0x0, this.image_xscale < 0x2 && (this.xoff = (this.originalwidth - this.sprite_width) / 0x2), this.blowanimtimer -= 0x1, this.blowanimtimer > 0x6 && this.blown === 0x0 ? (this.onoff === 0x2 && (this.onoff = 0x0), this.onoff === 1.5 && (this.onoff = 0x2), this.onoff === 0.5 && (this.onoff = 0x1), this.onoff === 0x0 && (this.ashake = -this.shakeamt, this.onoff = 0.5), this.onoff === 0x1 && (this.ashake = this.shakeamt, this.shakeamt > 0x0 && (this.shakeamt -= 0x1), this.onoff = 1.5), this.image_xscale > 1.5 ? PV.draw_sprite_ext('spr_rabbick_enemy_hurt', 0x0, this.x + this.xoff + this.ashake, this.y, this.image_xscale, this.image_yscale, 0x0, o4.white, 0x1) : PV.draw_sprite_ext('spr_rabbick_enemy_hurt', 0x1, this.x + this.xoff + this.ashake - 0x8, this.y, this.image_xscale + 0.5, this.image_yscale, 0x0, o4.white, 0x1)) : (this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && oV('scr_defeatrun').call(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), this.thissprite = this.hurtsprite, this.image_xscale > 1.5 ? PV.draw_sprite_ext(this.thissprite, 0x0, this.x + this.xoff + this.shakex, this.y, this.image_xscale, this.image_yscale, 0x0, o4.white, 0x1) : PV.draw_sprite_ext(this.thissprite, 0x1, this.x + this.xoff + this.shakex - 0x8, this.y, this.image_xscale + 0.5, this.image_yscale, 0x0, o4.white, 0x1))), this.state === 0x0 && (this.thissprite = this.idlesprite, (Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] || this.blown === 0x1) && (this.thissprite = this.sparedsprite), PV.draw_sprite_ext(this.thissprite, this.animsiner / 0x5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.animsiner / 0x5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0x0, o4.white, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0);
    }
    ["userEvent2"]() {
      this.dustparticle = oV('instance_create').call(this, this.x + o7(this.sprite_width - 0xa) + 0xa, this.y + 0x14 + o7(this.sprite_height - 0x14), jz), oD(this.dustparticle, PV => {
        PV.sprite_index = 'spr_rabbick_dustorb', PV.speed = 0x6, PV.image_index = 0x1, PV.direction = 0xa + o7(0x46), PV.image_speed = 0.5, PV.image_xscale = 0x2, PV.image_yscale = 0x2, PV.gravity_direction = 0x0, PV.gravity = 0.7, PV.friction = 0.4, PV.image_alpha = 0.5, PV.depth = 0xf;
      }), this.blown === 0x1 && oD(this.dustparticle, PV => {
        PV.image_alpha = 0x1, PV.depth = -0xa;
      });
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rando = oq(o7(0x32)), this.rando === 0x0 && (this.rr = 0x4), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Snitter&snatter&what's the&matter"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Duruuuu---"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Hop^1, hop"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "Meow."), this.rr === 0x4 && ((Ig.msg ??= [])[0x0] = "Bunnies are&the sequel&to frogs."), this.blown === 0x1 && ((this.rr === 0x0 || this.rr === 0x4) && ((Ig.msg ??= [])[0x0] = "A soft and&clean boy."), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "A refreshing&boy."), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "A sweet and&fresh girl."), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "A nice and&tidy girl.")), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oI(0x0, 0x1), this.rr === 0x0 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1e, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x9, this.dc.timepoints = 0x3) : (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x20, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.grazepoints = 0x9, this.dc.timepoints = 0x3), this.turns += 0x1, Ig.turntimer = 0xaa, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Rabbick is looking for a couch to get stuck under."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Rabbick emits a musty groan."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Rabbick ambiently damages the soil."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* The battlefield is filled with the smell of dusty mustard."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Rabbick is starting to look wispy."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Rabbick is now nice and clean.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), Ig.myfight === 0x3) {
        if (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* RABBICK - AT 8 DF 1&* This dusty bunny needs a bit&  of spring cleaning./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (this.blowall = 0x0, this.input_name = oV('scr_get_input_name').call(this, 0x4), (Ig.msg ??= [])[0x0] = oV('scr_84_get_subst_string').call(this, "* Press ~1 repeatedly to blow air!", this.input_name), this.blown === 0x0 && (this.actcon = 0xa, this.blowing = 0x1, this.blowtimer = 0x5a, oV('scr_battletext_default').call(this)), this.blown === 0x1 && ((Ig.msg ??= [])[0x0] = "* Kris breathed on the Rabbick^1.&* It blew away entirely.../%", oV('scr_battletext_default').call(this), this.actcon = 0x14)), this.acting === 0x3 && this.actcon === 0x0) {
          this.blowall = 0x1, this.input_name = oV('scr_get_input_name').call(this, 0x4), (Ig.msg ??= [])[0x0] = oV('scr_84_get_subst_string').call(this, "* Press ~1 repeatedly to blow air!", this.input_name), this.actcon = 0xa, this.blowing = 0x1, this.blowtimer = 0x5a, oW.with('obj_rabbick_enemy', PV => {
            PV.bunnycount = 0x0;
          });
          {
            let PV = this;
            oW.with('obj_rabbick_enemy', PD => {
              PD.bunnyid = PV;
            });
          }
          oW.with('obj_rabbick_enemy', PD => {
            PD.blown === 0x0 && (PD.bunnyid.bunnycount += 0x1), PD.blowbuffer = 0x2, PD.blow_wait = 0x0, PD.blowall = 0x1, PD.blowing = 0x1, PD.blowtimer = 0x5a;
          }), this.bunnycount === 0x0 && oW.with('obj_rabbick_enemy', PD => {
            PD.blowing = 0x0, PD.blowtimer = -0x1, PD.actcon = 0x1e, (Ig.msg ??= [])[0x0] = "* The bunnies were blown away!/%";
          }), oV('scr_battletext_default').call(this);
        }
        if (this.acting === 0x4 && this.actcon === 0x0) {
          for (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* You and Ralsei warned Rabbick about Susie^1.&* The enemy went on guard.../%", oV('scr_monsterpop').call(this) > 0x1 && ((Ig.msg ??= [])[0x0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%"), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.monstercomment ??= [])[this.i] = "(Warned)", (Ig.automiss ??= [])[this.i] = 0x1;
          oV('scr_battletext_default').call(this);
        }
        if (this.actcon === 0xa && this.blowing === 0x0 && (oW.with('obj_writer', PD => {
          PD.instance_destroy();
        }), this.actcon = 0x1), this.actcon === 0x14 && !Ix(IJ(I5)) && (this.event_user(0xa), this.actcon = 0x1), this.actcon === 0x1e && !Ix(IJ(I5)) && (oW.with('obj_rabbick_enemy', PD => {
          PD.event_user(0xa);
        }), this.actcon = 0x1), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.blowing === 0x1) {
          if (this.blow_wait === 0x1 && (this.blowtimer -= 0x1), this.blowbuffer -= 0x1, this.blowamt > 0x0 && this.blowanimtimer <= 0x0 && (this.blowamt -= 0x1), this.blowbuffer <= 0x0 && Ix(oV('button1_p').call(this))) {
            this.blow_wait = 0x1, oV('snd_stop').call(this, 'snd_whistlebreath'), this.blowsnd = oV('snd_play').call(this, 'snd_whistlebreath'), oV('snd_pitch').call(this, this.blowsnd, 0x1 + this.blowamt / 0x64), this.onoff = 0x0, this.shakeamt = 0x5, this.blowamt += 0xc, this.blowbuffer = 0x2, this.blowanimtimer = 0x14;
            for (let PD = 0x0; PD < 0x6; PD++) this.event_user(0x2);
          }
          if (this.blowtimer <= 0x0 && (this.blowing = 0x0), this.blowamt >= 0x64 && this.blown === 0x0) {
            oV('scr_mercyadd').call(this, this.myself, 0x64), this.blown = 0x1, this.blowing = 0x0, this.blowanimtimer = 0x0;
            for (let PY = 0x0; PY < 0xf; PY++) this.event_user(0x2);
          }
          this.blowing;
        }
      }
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x2) return this.userEvent2();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jj, 'obj_rabbick_enemy'), oA(jj, 'kinds', oM('obj_rabbick_enemy', Mu)), oA(jj, 'defaultDepth', 0x5a), oA(jj, 'defaultSprite', 'spr_rabbick_enemy');
var jm = jj,
  jP = class XI extends Mu {
    ["create"]() {
      this.ambushed = 0x0, this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.attackedkris = 0x0, this.hurtkris = 0x0, this.attackcon = 0x0, this.attacktimer = 0x0, this.plot = 0x0, this.misstime = 0x0, this.hittime = 0x0, this.defendtime = 0x0, this.won = 0x0, this.hugtime = 0x0, this.hitdum = 0x0;
    }
    ["destroy"]() {}
    ["draw"](PV) {
      this.state === 0x3 && (this.hurttimer -= 0x1, this.hurttimer < 0x0 && (this.state = 0x0), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_ralseib_shock_enemy', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1)), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.sprite_index, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sprite_index), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x5, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      if (this.ambushed === 0x0 && (oV('scr_ambush').call(this), this.ambushed = 0x1), Ig.monster[this.myself] === 0x1) {
        if ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, Ig.mnfight === 0x1 && this.talked === 0x0) {
          if (this.attackcon === 0x0) {
            if (oV('scr_moveheart').call(this), this.abletotarget = 0x1, Ig.charcantarget[0x0] === 0x0 && Ig.charcantarget[0x1] === 0x0 && Ig.charcantarget[0x2] === 0x0 && (this.abletotarget = 0x0), this.mytarget = oI(0x0, 0x1, 0x2), this.abletotarget === 0x1) for (let PV = 0x0; Ig.charcantarget[this.mytarget] === 0x0;) {
              if (++PV > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
              this.mytarget = oI(0x0, 0x1, 0x2);
            } else this.target = 0x3;
            (Ig.targeted ??= [])[this.mytarget] = 0x1, oV('instance_create').call(this, 0x140, 0xaa, yW), oV('instance_create').call(this, 0x0, 0x0, IA);
          }
          Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* .../%", this.plot === 0x0 && (Ig.fe = 0x0, (Ig.flag ??= [])[0x1e] = 0x0, (Ig.msg ??= [])[0x0] = "* See that \\cRHEART\\cW, Kris?/", (Ig.msg ??= [])[0x1] = "* That's a \\cRSOUL\\cW, the culmination of a HUMAN's being!/", (Ig.msg ??= [])[0x2] = "* Not only does it represent one's WILL and COMPASSION.../", (Ig.msg ??= [])[0x3] = "* But it also has the power to DETERMINE FATE./", (Ig.msg ??= [])[0x4] = "* When enemies attack, BULLETS appear./", (Ig.msg ??= [])[0x5] = "* Please avoid them and protect your team's FATE!/", (Ig.msg ??= [])[0x6] = "* Ready^1, Kris^2?&* Let's try dodging!/%"), this.plot >= 0x1 && (this.dial = 0x0, Ig.charaction[0x0] === 0x1 && (this.dummyhp > Ig.monsterhp[0x0] && (this.dial = 0x1), this.myhp > Ig.monsterhp[0x1] && (this.dial = 0x4), this.dummyhp === Ig.monsterhp[0x0] && this.myhp === Ig.monsterhp[0x1] && this.plot === 0x1 && (this.dial = 0x2), this.dummyhp === Ig.monsterhp[0x0] && this.myhp === Ig.monsterhp[0x1] && this.misstime === 0x9 && this.plot === 0x2 && (this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x6), this.dial === 0x4 && this.hittime >= 0x2 && (this.hittime = 0x3, this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x3), this.dial === 0x1 && this.hitdum >= 0x3 && (this.hitdum = 0x4, this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x4)), Ig.charaction[0x0] === 0xa && (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./", (Ig.msg ??= [])[0x1] = "\\E8* It's not part of this lesson^1, though./%", this.defendtime === 0x1 && ((Ig.msg ??= [])[0x0] = "* Gee^1, Kris^1!&* You sure are good at defending!/", (Ig.msg ??= [])[0x1] = "\\E8* I'm not attacking^1, you^1, though, so...&* No need to defend!/%"), this.defendtime === 0x2 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Ummm..^1.&* Kris?/", (Ig.msg ??= [])[0x1] = "\\E8* There are no bullets^1, and you can't use TP.../", (Ig.msg ??= [])[0x2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%"), this.defendtime === 0x3 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "* .../%"), this.defendtime >= 0x4 && (this.dial = 0x3, (Ig.flag ??= [])[0xcd] = 0x5), this.defendtime += 0x1), Ig.charaction[0x0] === 0x4 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* You've got an item^1!&* That's^1, um^1, great^1, Kris.../%"), this.dial === 0x1 && (this.plot === 0x2 && this.hitdum === 0x0 && (this.hitdum = 0x1), this.plot = 0x2, Ig.fe = 0x3, this.dummyhp > Ig.monsterhp[0x0] + 0x32 ? ((Ig.msg ??= [])[0x0] = "* W-wow^1, Kris^1!&* That was an amazing attack!/", (Ig.msg ??= [])[0x1] = "\\E8* Have you done this before or something...?/") : ((Ig.msg ??= [])[0x0] = "* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../", (Ig.msg ??= [])[0x1] = "\\E8* Pressing Z when the cursor is RIGHT IN the box on the left!/"), this.misstime >= 0x6 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* Kris^1!&* You did it!!!/", (Ig.msg ??= [])[0x1] = "\\E8* (I was really just about at my limit...)/%"), (Ig.msg ??= [])[0x2] = "\\E1* Umm^1, anyway, let's move onto my favorite: \\cYACTING\\cW!/", (Ig.msg ??= [])[0x3] = "\\E0* Selecting the ACT ICON will let you do all sorts of things./", (Ig.msg ??= [])[0x4] = "\\E8* We'll even be able to get through battles without ATTACKing!/%", (Ig.battlemsg ??= [])[0x0] = "* Select the ACT ICON and HUG the Dummy!", this.hitdum === 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Ummm..^1. Kris^1?&* You don't need to hit it anymore./", (Ig.msg ??= [])[0x1] = "\\E8* I already know you're great at attacking!/%"), this.hitdum === 0x2 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Hey^1, Kris^1?&* I know you like attacking^1, but.../", (Ig.msg ??= [])[0x1] = "\\E8* Did you know you can win without having to?/%"), this.hitdum === 0x3 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "* .../", (Ig.msg ??= [])[0x1] = "\\E1* Kris^1, could you^1, um^1, stop...?/%"), this.hitdum += 0x1), this.dial === 0x2 && (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../", (Ig.msg ??= [])[0x1] = "\\E8* Press Z again when the cursor goes in the box!/%", this.misstime >= 0x1 && (Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%", this.misstime === 0x2 && ((Ig.msg ??= [])[0x0] = "* Press Z when the white rectangle's in the blue box!/%"), this.misstime === 0x3 && ((Ig.msg ??= [])[0x0] = "* Ummm..^1. you can press Z a lot^1, if it helps!/%"), this.misstime === 0x4 && ((Ig.msg ??= [])[0x0] = "* Kris..^1.&* Please try to press Z./%"), this.misstime === 0x5 && ((Ig.msg ??= [])[0x0] = "* Ummm^1, Kris^1?&* Can you see the white rectangle?/%"), this.misstime === 0x6 && ((Ig.msg ??= [])[0x0] = "* You know rectangles^1?&* They're like messed-up squares?/%"), this.misstime === 0x7 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "* .../%"), this.misstime === 0x8 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Umm^1, why don't we try something else?/%", (Ig.battlemsg ??= [])[0x0] = "* Select the ACT ICON and HUG the Dummy!", this.plot = 0x2)), this.misstime += 0x1), this.dial === 0x3 && (Ig.fe = 0x9, (Ig.msg ??= [])[0x0] = "* .../", (Ig.msg ??= [])[0x1] = "\\E8* Hey^1, Kris^1, I think I've^1, um.../", (Ig.msg ??= [])[0x2] = "\\E1* Reached the limits of what I can teach you today./", (Ig.msg ??= [])[0x3] = "\\E0* Let's go find Susie./%", this.hittime >= 0x3 && (Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* .../", (Ig.msg ??= [])[0x1] = "* Kris^1, it's um.../", (Ig.msg ??= [])[0x2] = "\\E3* Really hard for me to teach when you're hitting me./", (Ig.msg ??= [])[0x3] = "\\E8* Let's take a break and go find Susie^1, OK?/%"), this.won = 0x1), this.dial === 0x4 && (Ig.fe = 0x3, this.hittime === 0x0 && ((Ig.msg ??= [])[0x0] = "* K-Kris!?/", (Ig.msg ??= [])[0x1] = "\\E1* Y-you must have missed...&* H... Haha.../", this.plot === 0x2 && ((Ig.msg ??= [])[0x2] = "\\E3* W-wait^1, aren't you supposed to be ACTing!?/%"), this.plot === 0x1 && ((Ig.msg ??= [])[0x2] = "\\E3* A-anyway^1, now that you know how to attack.../", (Ig.msg ??= [])[0x3] = "\\E8* Let's try learning how to ACT^1, OK?/%", (Ig.battlemsg ??= [])[0x0] = "* Select the ACT ICON and HUG the Dummy!", this.plot = 0x2)), this.hittime === 0x1 && ((Ig.msg ??= [])[0x0] = "* K-Kris!^1?&* D-did you miss again!?/", (Ig.msg ??= [])[0x1] = "\\E1* .../", (Ig.msg ??= [])[0x2] = "\\E2* Though^1, I mean^1, if you wanted to hit me^1, that's ok, too.../%"), this.hittime += 0x1)), oV('scr_battletext').call(this), this.talked = 0x1, this.talktimer = 0x0;
        }
        this.talked === 0x1 && Ig.mnfight === 0x1 && IJ(I5) === 0x0 && (oW.with('obj_face', PD => {
          PD.instance_destroy();
        }), this.attackcon === 0x0 ? Ig.mnfight = 0x2 : (this.won === 0x1 && ((Ig.mercymod ??= [])[0x0] = 0x1869f, (Ig.mercymod ??= [])[0x1] = 0x1869f), oV('scr_mnendturn').call(this), this.dummyhp = Ig.monsterhp[0x0], this.myhp = Ig.monsterhp[0x1])), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.attacks === 0x0 && (this.attackcon = 0x1), this.turns += 0x1, Ig.turntimer = 0x3e7, this.attacked = 0x1, this.rr = oq(o7(0x0)), Ig.typer = 0x6, Ig.fc = 0x0, this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Ralsei looks on expectedly."));
      }
      this.attackcon < 0x5c && this.attackcon > 0x0 && (Ig.turntimer = 0x3e7, this.attackcon === 0x1 && (this.krishp = Ig.hp[0x1], this.b1 = oV('instance_create').call(this, MO('obj_heart').x + 0x96, MO('obj_heart').y, yJ), this.attackcon = 0x2, (this.alarm ??= [])[0x5] = 0x23), this.attackcon === 0x3 && (this.b2 = oV('instance_create').call(this, MO('obj_heart').x - 0x96, MO('obj_heart').y, yJ), this.attackcon = 0x4, (this.alarm ??= [])[0x5] = 0x23), this.attackcon === 0x5 && (this.b3 = oV('instance_create').call(this, MO('obj_heart').x + 0x8, MO('obj_heart').y - 0x96, yJ), this.attackcon = 0x6, (this.alarm ??= [])[0x5] = 0x3c), this.attackcon === 0x7 && (this.attackcon = 0x8, Ig.turntimer = 0x3e7, this.krishp === Ig.hp[0x1] ? (Ig.fc = 0x2, Ig.fe = 0x0, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* Yipee^1!&* You did it^1, Kris!/%", oV('scr_battletext').call(this), this.attackcon = 0x5a) : (Ig.fc = 0x2, Ig.fe = 0x3, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* O-oopsie..^2.&* Was that too many?/", (Ig.msg ??= [])[0x1] = "\\E8* Here^1, let's try just one!/%", oV('scr_battletext').call(this))), this.attackcon === 0x8 && IJ(I5) === 0x0 && (oW.with('obj_face', PD => {
        PD.instance_destroy();
      }), this.krishp = Ig.hp[0x1], this.b1 = oV('instance_create').call(this, MO('obj_heart').x + 0x8, MO('obj_heart').y - 0x96, yJ), this.attackcon = 0x9, (this.alarm ??= [])[0x5] = 0x3c), this.attackcon === 0xa && (this.attackcon = 0xb, Ig.turntimer = 0x3e7, this.krishp === Ig.hp[0x1] ? (Ig.fc = 0x2, Ig.fe = 0x0, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* Yipee^1!&* You did it^1, Kris!/%", oV('scr_battletext').call(this), this.attackcon = 0x5a) : (Ig.fc = 0x2, Ig.fe = 0x9, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "* .../%", oV('scr_battletext').call(this))), this.attackcon === 0xb && IJ(I5) === 0x0 && (this.b1 = oV('instance_create').call(this, this.xx + 0x1b8, MO('obj_heart').y + 0x8, yJ), oD(this.b1, PD => {
        PD.special = 0x1, (PD.alarm ??= [])[0x0] = 0x28;
      }), this.attackcon = 0xc, (this.alarm ??= [])[0x5] = 0x50), this.attackcon === 0xd && (Ig.fc = 0x2, Ig.fe = 0x8, Ig.typer = 0x2d, (Ig.msg ??= [])[0x0] = "\\E8* L-look^1, Kris^1!&* You dodged one!/%", oV('scr_battletext').call(this), this.attackcon = 0x5a), this.attackcon === 0x5a && IJ(I5) === 0x0 && (Ig.fc = 0x2, Ig.fe = 0x0, Ig.typer = 0x2d, Ig.charturn = 0x0, (Ig.msg ??= [])[0x0] = "* Now^1, let's talk about \\cYSELECTING COMMANDS\\cW./", (Ig.msg ??= [])[0x1] = "* These ICONS will let you ISSUE COMMANDS to YOUR TEAM./", (Ig.msg ??= [])[0x2] = "\\E0* The first ICON^1, THE SWORD^1, is the ATTACK COMMAND./", (Ig.msg ??= [])[0x3] = "\\E1* Using it lets you^1, um..^1.&* Hurt people.../", (Ig.msg ??= [])[0x4] = "\\E8* ... w-well^1, I guess we have to defend ourselves sometimes^1, right?/%", oV('scr_battletext').call(this), this.attackcon = 0x5b), this.attackcon === 0x5b && (Ig.turntimer = 0x3e7, IJ(I5) === 0x0 && (this.dummyhp = Ig.monsterhp[0x0], this.myhp = Ig.monsterhp[0x1], Ig.turntimer = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Select the SWORD ICON to ATTACK the Dummy!/%", this.plot = 0x1, this.attackcon = 0x5c))), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* RALSEI - AT 8 DF 12&* The fluffy prince.../%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && (oW.with('obj_herokris', PD => {
        (Ig.faceaction ??= [])[PD.myself] = 0x0, PD.state = 0x0, PD.acttimer = 0x0;
      }), this.actcon = 0xa, (Ig.msg ??= [])[0x0] = "* You hug RALSEI./%", oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0xa && (oD(Ig.charinstance[0x0], PD => {
        PD.visible = 0x0;
      }), this.k = oV('scr_dark_marker').call(this, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 'spr_kris_hug'), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, Ig.monsterx[0x1] - 0x2a, Ig.monstery[0x1] - 0x10, 0xf);
      }), this.actcon = 0xb, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0xc && (this.sprite_index = 'spr_ralseib_idle_enemy_blush', oD(this.k, PD => {
        PD.image_speed = 0.25;
      }), this.actcon = 0xd, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0xe && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), this.actcon = 0xf), this.actcon === 0xf && !Ix(IJ(I5)) && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* K..^1. Kris!?/%", this.hugtime === 0x0 && ((Ig.msg ??= [])[0x0] = "* K..^1. Kris!?/", (Ig.msg ??= [])[0x1] = "\\E8* Ummm^1, I don't think^1, um.../", (Ig.msg ??= [])[0x2] = "* This is what you're supposed to be doing./", (Ig.msg ??= [])[0x3] = "\\E2* (But I don't really want to tell you to stop...)/%"), this.hugtime === 0x1 && ((Ig.msg ??= [])[0x0] = "* Kris!?/", (Ig.msg ??= [])[0x1] = "\\E2* Umm^1, if that's what you r-really want.../", (Ig.msg ??= [])[0x2] = "\\E8* Then that's a victory in my book^1!&* You win!/%", (Ig.flag ??= [])[0xcd] = 0x2, this.won = 0x1), this.hugtime += 0x1, oV('scr_battletext').call(this), this.actcon = 0x10), this.actcon === 0x10 && !Ix(IJ(I5)) && (oD(this.myface, PD => {
        PD.instance_destroy();
      }), oD(this.k, PD => {
        PD.image_speed = -0.25;
      }), this.actcon = 0x11, (this.alarm ??= [])[0x4] = 0xc), this.actcon === 0x12 && (oD(this.k, PD => {
        PD.image_speed = 0x0;
      }), oD(this.k, PD => {
        oV('scr_move_to_point_over_time').call(PD, Ig.charinstance[0x0].x, Ig.charinstance[0x0].y, 0xf);
      }), this.actcon = 0x13, (this.alarm ??= [])[0x4] = 0x19), this.actcon === 0x14 && (this.sprite_index = 'spr_ralseib_idle_enemy', oD(this.k, PD => {
        PD.instance_destroy();
      }), Ig.charinstance[0x0].visible = 0x1, this.actcon = 0x1, this.won === 0x1 && ((Ig.mercymod ??= [])[0x0] = 0xf423f, (Ig.mercymod ??= [])[0x1] = 0xf423f))), this.con === 0x1 && ((this.alarm ??= [])[0x4] = 0x5, this.con = 0x2), this.con === 0x3 && (Ig.typer = 0x7, (Ig.msg ??= [])[0x0] = 'h/', (Ig.msg ??= [])[0x1] = 'h/', (Ig.msg ??= [])[0x2] = 'h/', (Ig.msg ??= [])[0x3] = 'h/', (Ig.msg ??= [])[0x4] = 'h/', (Ig.msg ??= [])[0x5] = "See you&in the&next hell^1,&losers!/%", this.con = 0x4, this.mywriter = oV('instance_create').call(this, this.x - 0xa0, this.y - 0x1e, I5)), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0x14, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PD => {
        PD.noreturn = 0x0, (PD.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && ((Ig.monsterexp ??= [])[this.myself] -= 0x0, (Ig.monstergold ??= [])[this.myself] += 0xa, oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      if (PV === 0x5) {
        this.attackcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jP, 'obj_ralseienemy'), oA(jP, 'kinds', oM('obj_ralseienemy', Mu)), oA(jP, 'defaultDepth', 0x5a), oA(jP, 'defaultSprite', 'spr_ralseib_idle_enemy');
var jX = jP,
  jK = class Xo extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.convinced = 0x0, this.complimented = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_daimond_knight_idle', this.hurtsprite = 'spr_diamond_knight_hurt', this.sparedsprite = 'spr_diamond_knight_spared';
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x2 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && oV('scr_defeatrun').call(this), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.sparedsprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent11"]() {}
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && (Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x32, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Long live&the king!"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Glimmer&glammor"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Perish,&Lightners!"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "I'm the,&diamond,&here's the&rough!"), this.acting === 0x2 && ((Ig.msg ??= [])[0x0] = "Enough!&You can't&convince&me!"), this.acting === 0x3 && ((this.rr === 0x0 || this.rr === 0x1) && ((Ig.msg ??= [])[0x0] = "No one ever&said THAT to&me before&..."), (this.rr === 0x2 || this.rr === 0x3) && ((Ig.msg ??= [])[0x0] = "The King&never said&THAT to me&before..."), this.complimented >= 0x2 && ((Ig.msg ??= [])[0x0] = "Yeah it&would be&weird.")), oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = IQ(this.object_index), this.rr === 0x63 ? (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x1, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.ratio = 0x1) : (this.visible = 0x0, this.dc = oV('instance_create').call(this, this.x, this.y, yj), this.dc.inv = 0x3c, this.dc.target = this.mytarget, this.dc.grazepoints = 0x6, this.dc.timepoints = 0x2, this.dc.active = 0x0, this.dc.creator = this, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, Ig.turntimer = 0xb4, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger gleams gallantly."), this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger puts a power limiter on its feelings."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger fantasizes about divine gems."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger pledges allegiance."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like crystal."), Ig.monsterstatus[this.myself] === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger is starting to fall asleep."), Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Rudinn Ranger's luster begins to fade."), Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && ((Ig.msg ??= [])[0x0] = "* Rudinn Ranger seems totally flattered.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3 && (Ig.typer = 0x32, (Ig.mercymod ??= [])[this.myself] = 0x3e7, (Ig.msg ??= [])[0x0] = "Alright^1,&you convinced&me!!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0xf, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* RUDINN RANGER - AT 8 DF 0&* Ideally multicolored, but they all wanted to be red./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You tried to explain why fighting is bad./", (Ig.msg ??= [])[0x1] = "* But Rudinn Ranger just became \\cBTIRED\\cW.../%", (Ig.monstercomment ??= [])[this.myself] = "(Tired)", (Ig.monsterstatus ??= [])[this.myself] = 0x1, oV('scr_mercyadd').call(this, this.myself, 0x32), oV('scr_battletext_default').call(this), this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* Susie COMPLIMENTed the enemy...?/", oV('scr_susface').call(this, 0x1, 0x2), this.rrr = oI(0x0, 0x1, 0x2), this.rrr === 0x0 && ((Ig.msg ??= [])[0x2] = "* \"Your outfit is NOT disgusting.\"/%"), this.rrr === 0x1 && ((Ig.msg ??= [])[0x2] = "* \"Please keep body tackling the soda machine.\"/%"), this.rrr === 0x2 && ((Ig.msg ??= [])[0x2] = "* Nice^1, you guys look like you're gonna kill me./%"), Ig.flag[0x1f7] === 0x0 && ((Ig.msg ??= [])[0x0] = "* You told Susie to COMPLIMENT the enemy!/", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* ... uhhh^1, are you serious?/", (Ig.msg ??= [])[0x3] = "\\E2* What good can I say about someone trying to kill us?/", oV('scr_ralface').call(this, 0x4, 0x6), (Ig.msg ??= [])[0x5] = "* Aww^1, Susie..^1. if you're stuck^1, why not try.../", (Ig.msg ??= [])[0x6] = "* ... saying something you wish someone'd say to you?/", oV('scr_susface').call(this, 0x7, 0x0), (Ig.msg ??= [])[0x8] = "* .../", (Ig.msg ??= [])[0x9] = "\\E2* \"You are unbanned from free ham sandwich day\"/%", (Ig.flag ??= [])[0x1f7] = 0x1), this.complimented >= 0x1 && ((Ig.msg ??= [])[0x0] = "* Susie actively didn't COMPLIMENT the enemy!/", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Look^1, it's just gonna be weird if I keep going./%", this.complimented = 0x2), oV('scr_battletext_default').call(this), this.actcon = 0x1, this.complimented === 0x0 && (this.complimented = 0x1)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.acting === 0x3 && oV('scr_mercyadd').call(this, this.myself, 0x64), this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0xa && IJ(I5) === 0x0 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "You kidding?&I can't quit.&Stopping you&is my job!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.actcon = 0xb), this.actcon === 0xb && IJ(I5) === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* Really^1?&* What do you spend your money on?/%", oV('scr_battletext').call(this), this.actcon = 0xc), this.actcon === 0xc && IJ(I5) === 0x0 && (Ig.typer = 0x32, (Ig.msg ??= [])[0x0] = "I'm a normal&person./", (Ig.msg ??= [])[0x1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.actcon = 0xe), this.actcon === 0xe && IJ(I5) === 0x0 && (Ig.typer = 0x2d, Ig.fc = 0x2, Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* (Kris^1, let's try CONVINCING them again...)/%", oV('scr_battletext').call(this), this.nexttry = 0x1, this.actcon = 0x1)), Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jK, 'obj_rudinnranger'), oA(jK, 'kinds', oM('obj_rudinnranger', Mu)), oA(jK, 'defaultDepth', 0x5a), oA(jK, 'defaultSprite', 'spr_daimond_knight_idle');
var jk = jK,
  jW = class Xy extends o8 {};
oH(jW, 'obj_scissordancer_Collision_obj'), oA(jW, 'kinds', oM('obj_scissordancer_Collision_obj', o8));
var jZ = jW,
  jq = class XE extends Mu {
    ["create"]() {
      this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.checkhp1 = Ig.hp[0x1], this.checkhp2 = Ig.hp[0x2], this.firstturn = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (Ig.monsterhp[this.myself] <= Ig.monstermaxhp[this.myself] / 0x3 && ((Ig.monsterstatus ??= [])[this.myself] = 0x1, Ig.monstercomment[this.myself] === '\x20' && ((Ig.monstercomment ??= [])[this.myself] = "(Tired)")), this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (this.hspeed = 0xc, this.turnt -= 0x8, this.vspeed = -0x4), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext('spr_smallchecker_hurt', 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = 'spr_smallchecker_idle', Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = 'spr_smallchecker_run'), PV.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x3, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + this.sprite_width / 0x2, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ix(IJ(MZ)) && (MO('obj_basicattack').sprite_index === 'spr_attack_cut1' && ((Ig.flag ??= [])[0xd3] = 0x3), MO('obj_basicattack').sprite_index === 'spr_attack_slap1' && ((Ig.flag ??= [])[0xd3] = 0x3)), Ig.monster[this.myself] === 0x1 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, Ig.mnfight === 0x1 && this.talked === 0x0 && (oV('scr_randomtarget').call(this), this.talked = 0x1, this.talktimer = 0x0), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, Ix(oV('button1_p').call(this)) && this.talktimer > 0x5 && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (Ig.mnfight = 0x2)), Ig.mnfight === 0x2 && this.attacked === 0x0 && (oW.with('obj_heartblcon', PV => {
        PV.instance_destroy();
      }), this.rtimer += 0x1, this.rtimer === 0xc ? (this.rr = oV('scr_monsterpop').call(this), Ig.turntimer = 0x1, this.rr === 0x3e7 && (this.dc = oV('instance_create').call(this, this.x, this.y, E2), this.dc.type = 0x0, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0), this.rr === 0x0 && ((Ig.battlemsg ??= [])[0x0] = "* C.Round continues to act extremely violent.")) : Ig.turntimer = 0x1), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (Ix(IJ(Io)) && this.firstturn === 0x0 && this.checkhp1 <= Ig.hp[0x1] && this.checkhp2 <= Ig.hp[0x2] && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), oW.with('obj_hathyfightevent', PV => {
        PV.con = 0xf;
      })), this.firstturn = 0x1, this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7))), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, (Ig.msg ??= [])[0x0] = "* C.ROUND - AT 1 DF 0&* Despite appearances^1, it's trying its best to defeat you./%", oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You ordered Susie to flatter the enemy!/", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* ... what^1? Why the HELL would I do that?/", (Ig.msg ??= [])[0x3] = "\\E1* IT attacked US^1.&* Let's smash it before it moves./", oV('scr_ralface').call(this, 0x4, 0x0), (Ig.msg ??= [])[0x5] = "* Aww^1, look^1, Susie^1!&* It seems harmless!/", (Ig.msg ??= [])[0x6] = "\\E8* If you act nice^1, we might win without hurting it!/", oV('scr_susface').call(this, 0x7, 0x0), (Ig.msg ??= [])[0x8] = "* .../", (Ig.msg ??= [])[0x9] = "\\E2* ... okay^1, okay./", (Ig.msg ??= [])[0xa] = "\\E1* Hey^1, little guy./", (Ig.msg ??= [])[0xb] = "\\E4* I really like the ax in your face./%", this.actcon = 0x5, oV('scr_battletext_default').call(this)), this.acting === 0x3 && this.actcon === 0x0 && (this.actcon = 0x5, (Ig.msg ??= [])[0x0] = "* You warned C.Round about Susie^1.&* It seems barely cognizant of what that means./", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Hey^1, wait^1.&* Why the hell are you giving the ENEMY advice?/", oV('scr_ralface').call(this, 0x3, 0x6), (Ig.msg ??= [])[0x4] = "* Umm^1, so we don't accidentally hurt it...?/", oV('scr_susface').call(this, 0x5, 0x0), (Ig.msg ??= [])[0x6] = "\\E0* .../", (Ig.msg ??= [])[0x7] = "\\E8* HURTING IT's the point^1, you MORON./", (Ig.msg ??= [])[0x8] = "\\E1* It attacked us^1.&* So it dies^1.&* Simple^1, right?/", oV('scr_ralface').call(this, 0x9, 0x8), (Ig.msg ??= [])[0xa] = "* B-but Susie^1, what if the enemy might be^1, um^1, nice?/", oV('scr_susface').call(this, 0xb, 0x0), (Ig.msg ??= [])[0xc] = "* .../", (Ig.msg ??= [])[0xd] = "\\E2* Okay^1, yeah^1, there's a word for that./", oV('scr_ralface').call(this, 0xe, 0x0), (Ig.msg ??= [])[0xf] = "* Oh^1?&* What is it?/", oV('scr_susface').call(this, 0x10, 0x4), (Ig.msg ??= [])[0x11] = "\\E4* Striking first./%", (Ig.monstercomment ??= [])[this.myself] = "(Warned)", (Ig.automiss ??= [])[0x0] = 0x1, oV('scr_battletext_default').call(this)), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this)), this.actcon === 0x5 && IJ(I5) === 0x0 && ((Ig.battleat ??= [])[0x1] = 0x5a, (Ig.battleat ??= [])[0x2] = 0x5a, this.actcon = 0x6, oW.with('obj_herosusie', PV => {
        PV.attacktimer = 0x0, PV.state = 0x1, PV.points = 0x64 + ok(o7(0x28)), (Ig.faceaction ??= [])[PV.myself] = 0x0, Ig.automiss[0x0] === 0x1 && (PV.points = 0x0), Ig.automiss[0x0] === 0x0 && oW.with('obj_event_manager', PD => {
          Mw(0x0, 0x16);
        });
      }), Ig.automiss[0x0] === 0x1 && (this.hspeed = 0x5, (Ig.mercymod ??= [])[this.myself] = 0xc8), (this.alarm ??= [])[0x4] = 0x32), this.actcon === 0x7 && ((Ig.monster ??= [])[this.myself] = 0x0, (Ig.msg ??= [])[0x0] = "* Where'd you get it^1?&* Heh heh heh heh./", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.flag ??= [])[0xd3] = 0x1, (Ig.msg ??= [])[0x2] = "* (Umm^1, Kris^1, maybe I should talk to her...)/%", Ig.automiss[0x0] === 0x1 && ((Ig.flag ??= [])[0xd3] = 0x2, (Ig.msg ??= [])[0x0] = "\\E7* Urgh^1, you IDIOTS^1!&* It got away!/", oV('scr_ralface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* (Wow^1, that was close^1, Kris...)/", (Ig.msg ??= [])[0x3] = "* (M-maybe I should talk to her...)/%"), oV('scr_battletext').call(this), this.actcon = 0x1)), Ig.myfight === 0x7 && (this.hspeed = 0xf);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.actcon += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jq, 'obj_smallcheckers_enemy'), oA(jq, 'kinds', oM('obj_smallcheckers_enemy', Mu)), oA(jq, 'defaultDepth', 0x5a), oA(jq, 'defaultSprite', 'spr_smallchecker_idle');
var ju = jq,
  jH = class Xj extends Mu {
    ["create"]() {
      Ig.turntimer = 0x0, this.bikeflip = 0x0, this.becomeflash = 0x0, this.turnt = 0x0, this.turns = 0x0, this.talktimer = 0x0, this.talkmax = 0x5a, this.state = 0x0, this.flash = 0x0, this.siner = 0x0, this.fsiner = 0x0, this.talked = 0x0, this.attacked = 0x0, this.hurt = 0x0, this.hurttimer = 0x0, this.hurtshake = 0x0, this.mywriter = 0x1475939f, this.acting = 0x0, this.actcon = 0x0, this.acttimer = 0x0, this.mercymod = 0x0, this.maxmercy = 0x270f, this.warned = 0x0, this.compliment = 0x0, this.tired = 0x0, this.attacks = 0x0, this.dodgetimer = 0x0, this.candodge = 0x0, this.con = 0x0, this.battlecancel = 0x0, this.nexttry = 0x0, this.mytarget = 0x3, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.idlesprite = 'spr_susie_enemy', this.hurtsprite = 'spr_susie_enemy_hurt', this.sparedsprite = 'spr_susie_enemy', this.attacktype = 0x0, this.sleeping = 0x0, this.sleepcounter = 0x63, this.lullabied = 0x0, this.lancer_act = 0x0, this.susie_act = 0x0, this.lancer_hurt = 0x0, this.pacifycon = 0x0, this.defeated = 0x0, this.lancerhurt = 0x0, this.anythingcounter = 0x0, this.anythingxcounter = 0x0, this.tirespare = 0x0, this.ears_blocked = 0x0, this.susie_anythingcounter = 0x0;
    }
    ["draw"](PV) {
      this.state === 0x3 && (this.sleepcounter = 0x63, this.sleeping = 0x0, (Ig.monstercomment ??= [])[this.myself] = "(Awake)", (Ig.monsterstatus ??= [])[this.myself] = 0x0, this.idlesprite = 'spr_susie_enemy', this.hurttimer -= 0x1, this.hurttimer < 0x0 ? this.state = 0x0 : (Ig.monster[this.myself] === 0x0 && (oV('snd_play').call(this, 'snd_sussurprise'), oW.with('obj_susieandlancer_event', PD => {
        oD(PD.s, PY => {
          PY.visible = 0x1, PY.sprite_index = 'spr_susie_enemy_defeat', PY.depth = 0x64;
        });
      }), this.visible = 0x0, this.instance_destroy()), this.hurtshake += 0x1, this.hurtshake > 0x1 && (this.shakex > 0x0 && (this.shakex -= 0x1), this.shakex < 0x0 && (this.shakex += 0x1), this.shakex = -this.shakex, this.hurtshake = 0x0), PV.draw_sprite_ext(this.hurtsprite, 0x0, this.x + this.shakex, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1))), this.state === 0x0 && (this.siner += 0x1, this.thissprite = this.idlesprite, Ig.mercymod[this.myself] >= Ig.mercymax[this.myself] && (this.thissprite = this.idlesprite), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, 0x1), this.flash === 0x1 && (this.fsiner += 0x1, oV('d3d_set_fog').call(this, 0x1, o4.white, 0x0, 0x1), PV.draw_sprite_ext(this.thissprite, this.siner / 0x6, this.x, this.y, 0x2, 0x2, 0x0, this.image_blend, -If(this.fsiner / 0x5) * 0.4 + 0.6), oV('d3d_set_fog').call(this, 0x0, o4.black, 0x0, 0x0))), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
    }
    ["userEvent1"]() {
      Ig.mnfight === 0x1 && this.talked === 0x0 && (this.awoke = 0x0, this.sleepcounter += 0x1, this.sleepcounter >= 0x3 && this.sleeping === 0x1 && (this.sleeping = 0x0, this.idlesprite = 'spr_susie_enemy', (Ig.monstercomment ??= [])[this.myself] = "(Awake)", (Ig.monsterstatus ??= [])[this.myself] = 0x0, this.sleepcounter = 0x63, this.awoke = 0x1), this.sleeping === 0x0 && oV('scr_randomtarget').call(this), Ix(IJ(IA)) || oV('instance_create').call(this, 0x0, 0x0, IA), Ig.typer = 0x35, this.rr = oI(0x0, 0x1, 0x2, 0x3), this.rr === 0x0 && ((Ig.msg ??= [])[0x0] = "Heh,&scared?"), this.rr === 0x1 && ((Ig.msg ??= [])[0x0] = "Weasel&out of&THIS!"), this.rr === 0x2 && ((Ig.msg ??= [])[0x0] = "Talk your&way out of&THIS!"), this.rr === 0x3 && ((Ig.msg ??= [])[0x0] = "Think&fast!"), this.lancer_hurt === 0x0 && Ig.monsterhp[0x1] <= Ig.monstermaxhp[0x1] * 0.5 && (this.lancer_hurt = 0x1, Ig.monsterhp[this.myself] === Ig.monstermaxhp[this.myself] ? (Ig.msg ??= [])[0x0] = "Hey^1, stop&ganging up&on him!" : (Ig.msg ??= [])[0x0] = "Hey^1, stop&hitting&him!"), this.acting === 0x2 && (this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "No way!&Shut up and&fight!!!"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "Really?&...&Shut up and&fight!!!"), this.anythingcounter === 0x3 && ((Ig.msg ??= [])[0x0] = "What are&you even&doing?"), this.anythingcounter === 0x4 && ((Ig.msg ??= [])[0x0] = " Really...?&No way, I&don't see&anything!"), this.anythingcounter >= 0x5 && ((Ig.msg ??= [])[0x0] = "Yeah, it's&hopeless.")), this.lancer_act === 0x3 && (this.anythingxcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "Flattery&won't&work on&US!!!"), this.anythingxcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "THAT'S&THE&POINT!!!"), this.anythingxcounter === 0x3 && ((Ig.msg ??= [])[0x0] = "Huh...?&I mean...&NO!!!"), this.anythingxcounter >= 0x4 && ((Ig.msg ??= [])[0x0] = "Heh,&score for&the BAD&GUYS!")), this.sleeping === 0x1 && ((Ig.msg ??= [])[0x0] = "(Zzzz...)"), this.awoke === 0x1 && ((Ig.msg ??= [])[0x0] = "(Yawn)&I'm awake,&did I miss&anything?"), this.awoke = 0x0, this.lancer_act = 0x0, oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.talked = 0x1, this.talktimer = 0x0);
    }
    ["userEvent11"]() {
      Mc === 'room_field1' && ((Ig.flag ??= [])[0x1f4] += 0x1), Mc === 'room_field2' && Ig.flag[0x32] !== 0x0 && ((Ig.flag ??= [])[0x1f5] = Ig.flag[0x32]);
    }
    ["userEvent12"]() {
      (Ig.monsterx ??= [])[this.myself] = this.x + 0x14, (Ig.monstery ??= [])[this.myself] = this.y + this.sprite_height / 0x2, oV('scr_monstersetup').call(this);
    }
    ["step"]() {
      Ig.monster[this.myself] === 0x1 && this.defeated === 0x0 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x4, this.event_user(0x1), this.talked === 0x1 && Ig.mnfight === 0x1 && (this.rtimer = 0x0, oV('scr_blconskip').call(this, 0xf), Ig.mnfight === 0x2 && (Ix(IJ(IH)) || oV('scr_moveheart').call(this), Ix(IJ(yW)) || oV('instance_create').call(this, 0x140, 0xaa, yW))), Ig.mnfight === 0x2 && this.attacked === 0x0 && (this.rtimer += 0x1, this.rtimer === 0xc ? (Ig.turntimer = 0xb4, this.attacktype === 0x2 && (this.dc = oV('instance_create').call(this, this.x + this.sprite_width / 0x2, this.y + this.sprite_height / 0x2, yI), this.dc.type = 0x55, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.timepoints = 0x3, this.dc.grazepoints = 0x5, this.sleeping === 0x1 && oD(this.dc, PV => {
        PV.instance_destroy();
      })), this.attacktype === 0x1 && (this.dc = oV('instance_create').call(this, this.x, this.y, yI), this.dc.type = 0x14, this.dc.target = this.mytarget, this.dc.damage = Ig.monsterat[this.myself] * 0x5, this.dc.timepoints = 0x3, this.dc.grazepoints = 0x3, this.sleeping === 0x1 && oD(this.dc, PV => {
        PV.instance_destroy();
      })), this.attacktype === 0x0 && this.sleeping === 0x0 && (this.bike = oV('instance_create').call(this, MO('obj_lancerboss3').x, MO('obj_lancerboss3').y, yw), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x0;
      }), this.bike.target = this.mytarget, this.bike.damage = Ig.monsterat[this.myself] * 0x5, Ig.turntimer = 0x3e7), this.attacktype += 0x1, this.attacktype >= 0x3 && (this.attacktype = 0x0), this.turns += 0x1, this.attacked = 0x1, Ig.typer = 0x6, Ig.fc = 0x0, this.rr = oI(0x0, 0x1, 0x2, 0x3, 0x4), (Ig.battlemsg ??= [])[0x0] = "* Susie and Lancer are making fun of you.", this.rr === 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* Susie and Lancer are gloating about how great their team is."), this.rr === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Susie and Lancer are having an evil laugh contest."), this.rr === 0x3 && ((Ig.battlemsg ??= [])[0x0] = "* Susie and Lancer are coming up with victory celebration plans."), this.rr === 0x4 && ((Ig.battlemsg ??= [])[0x0] = "* Smells like teamwork.")) : Ig.turntimer = 0x78), Ig.mnfight === 0x2 && Ig.turntimer <= 0x1 && (this.battlecancel === 0x1 && ((Ig.mercymod ??= [])[this.myself] = 0x3e7), this.battlecancel === 0x2 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x1;
      }), this.con = 0x1, this.battlecancel = 0x3))), this.con === 0x1 && (this.con = 0x2, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3 && (Ig.typer = 0x32, (Ig.mercymod ??= [])[this.myself] = 0x3e7, (Ig.msg ??= [])[0x0] = "Alright^1,&you convinced&me!!/%", oV('scr_enemyblcon').call(this, this.x - 0xa0, this.y, 0x3), this.con = 0x4), this.con === 0x4 && !Ix(IJ(I5)) && (this.hspeed = 0xf, this.con = 0x5, (this.alarm ??= [])[0x4] = 0xf, oW.with('obj_battlecontroller', PV => {
        (PV.alarm ??= [])[0x2] = 0x11;
      })), this.con === 0x6 && (oW.with('obj_battlecontroller', PV => {
        PV.noreturn = 0x0;
      }), oV('scr_monsterdefeat').call(this), this.instance_destroy(), this.con = 0x7), Ig.myfight === 0x3 && (this.xx = 0x0, this.yy = 0x0, this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, this._armordf = Ig.itemdf[0x2][0x0] + Ig.itemdf[0x2][0x1] + Ig.itemdf[0x2][0x2], this._armorat = Ig.itemat[0x2][0x0] + Ig.itemat[0x2][0x1] + Ig.itemat[0x2][0x2], this.totaldf = String(Ig.df[0x2] + this._armordf), this.totalat = String(Ig.at[0x2] + this._armorat), this.totalhp = String(Ig.maxhp[0x2]), (Ig.msg ??= [])[0x0] = oV('scr_84_get_subst_string').call(this, "* SUSIE - AT:~1 DF:~2 HP:~3&* If you read the status screen^1, you already knew that./%", this.totalat, this.totaldf, this.totalhp), this._armordf > 0x0 && ((Ig.msg ??= [])[0x0] = oV('scr_84_get_subst_string').call(this, "* SUSIE - AT:~1 DF:~2 HP:~3&* The armor you equipped her with just made her tougher!/%", this.totalat, this.totaldf, this.totalhp)), oV('scr_battletext_default').call(this)), this.acting === 0x2 && this.actcon === 0x0 && ((Ig.msg ??= [])[0x0] = "* You tried convincing Susie not to fight./", this.anythingcounter === 0x1 && ((Ig.msg ??= [])[0x0] = "* You tried telling Susie you like her hair./"), this.anythingcounter === 0x2 && ((Ig.msg ??= [])[0x0] = "* You growled at Susie like a bear./"), this.anythingcounter === 0x3 && ((Ig.msg ??= [])[0x0] = "* You told Susie you'd give her a picnic basket of worms./"), this.anythingcounter >= 0x4 && ((Ig.msg ??= [])[0x0] = "* You have no idea what to do what to Susie anymore./"), (Ig.msg ??= [])[0x1] = "* There was no effect!/%", this.anythingcounter >= 0x1 && ((Ig.msg ??= [])[0x1] = "* It seems this command is a total waste of time!/%"), oV('scr_battletext_default').call(this), this.anythingcounter += 0x1, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0 && (oW.with('obj_monsterparent', PV => {
        PV.susie_act = 0x3;
      }), oV('snd_pause').call(this, Ig.batmusic[0x1]), this.lullabied === 0x0 ? (this.singy = oV('snd_play').call(this, 'snd_ralseising1'), oW.with(this.object_index, PV => {
        PV.lullabied = 0x1;
      })) : (this.singy = oV('snd_play').call(this, 'snd_ralseising2'), oW.with(this.object_index, PV => {
        PV.lullabied = 0x0;
      })), (Ig.msg ??= [])[0x0] = "* Ralsei sang a soft and entrancing lullaby!/%", oW.with('obj_heroralsei', PV => {
        PV.visible = 0x0;
      }), this.ralsing = oV('scr_dark_marker').call(this, MO('obj_heroralsei').x, MO('obj_heroralsei').y, 'spr_ralseib_sing'), oD(this.ralsing, PV => {
        PV.image_speed = 0.2;
      }), this.lullatimer = 0x0, oV('scr_battletext_default').call(this), this.actcon = 0xa), this.actcon === 0xa && (this.lullatimer += 0x1, this.lullatimer >= 0x1e && (this.actcon = 0xb)), this.actcon === 0xb && IJ(I5) === 0x0 && (oD(this.ralsing, PV => {
        PV.instance_destroy();
      }), oW.with('obj_heroralsei', PV => {
        PV.visible = 0x1;
      }), oV('snd_stop').call(this, this.singy), oV('snd_resume').call(this, Ig.batmusic[0x1]), (Ig.msg ??= [])[0x0] = "* SUSIE fell asleep!/%", this.sleeping === 0x1 && ((Ig.msg ??= [])[0x0] = "* But SUSIE was already asleep...!/%"), this.idlesprite = 'spr_susie_enemy_defeat', this.sleepcounter = 0x0, this.sleeping = 0x1, (Ig.monstercomment ??= [])[this.myself] = "(Asleep)", (Ig.monsterstatus ??= [])[this.myself] = 0x1, oV('scr_battletext_default').call(this), this.actcon = 0x1), this.actcon === 0x1 && !Ix(IJ(I5)) && (this.actcon = 0x0, oV('scr_attackphase').call(this))), this.pacifycon > 0x0 && (Ig.spelldelay = 0x3e7, oW.with('obj_spellphase', PV => {
        PV.spelltimer > 0x1e && (PV.spelltimer = 0x1e);
      })), this.pacifycon === 0x1 && MO('obj_spellphase').spelltimer >= 0xf && (this.pacifytimer = 0x0, this.pacifycon = 0x2, oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x0;
      }), this.temp_l = oV('scr_dark_marker').call(this, this.x - 0x28, this.y + this.sprite_height, 'spr_lancerbike'), this.temp_l.depth = this.depth - 0x2), this.pacifycon === 0x2 && (oV('snd_play').call(this, 'snd_lancerwhistle'), oD(this.temp_l, PV => {
        PV.o = oV('scr_oflash').call(PV), PV.o.flashcolor = o4.blue;
      }), this.pacifycon = 0x3), this.pacifycon === 0x3 && (this.pacifytimer += 0x1, this.pacifytimer >= 0x1e && !Ix(IJ(I5)) && (oD(this.temp_l, PV => {
        PV.instance_destroy();
      }), oW.with('obj_lancerboss3', PV => {
        PV.visible = 0x1;
      }), this.pacifycon = 0x4, oW.with('obj_monsterparent', PV => {
        PV.susie_act = 0x9;
      }), (Ig.msg ??= [])[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", oV('scr_lanface').call(this, 0x1, 0x3), (Ig.msg ??= [])[0x2] = "* I'll never let you SPARE my friends!!!/", oV('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "* (Lancer's BIKE began to get tired??????????????)/%", this.tirespare === 0x1 && ((Ig.msg ??= [])[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", (Ig.msg ??= [])[0x1] = "* (The WHEEL of the BIKE became SPARED!)/", (Ig.msg ??= [])[0x2] = "* (It turned into a SPARED TIRE!)/", (Ig.msg ??= [])[0x3] = "* (... that didn't do anything though.)/", (Ig.msg ??= [])[0x4] = "* (Seems that PACIFYing won't work!)/%"), this.tirespare >= 0x2 && ((Ig.msg ??= [])[0x0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/", (Ig.msg ??= [])[0x1] = "* (Seems that nothing else interesting will happen!)/%"), oV('scr_battletext_default').call(this), this.pacifycon = 0x5, this.tirespare += 0x1)), this.pacifycon === 0x5 && !Ix(IJ(I5)) && (Ig.spelldelay = 0x14, oW.with('obj_spellphase', PV => {
        PV.spelltimer = 0x12;
      }), this.pacifycon = 0x0);
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x1) return this.userEvent1();
      if (PV === 0xb) return this.userEvent11();
      if (PV === 0xc) return this.userEvent12();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jH, 'obj_susieenemy'), oA(jH, 'kinds', oM('obj_susieenemy', Mu)), oA(jH, 'defaultDepth', 0x5f), oA(jH, 'defaultSprite', 'spr_susie_enemy');
var jG = jH,
  jA = class Xm extends o8 {
    ["collide_obj_mainchara"](PV) {
      this.event_user(0x0);
    }
    ["create"]() {
      oV('scr_depth').call(this), this.vspeed = 0xc, this.con = 0x0, this.image_speed = 0x0, this.image_xscale = 0x2, this.image_yscale = 0x2, this.frozen = 0x0, this.hadfrozen = 0x0, this.fliptimer = 0xf, this.touchsprite = 'spr_diamondm_hurt', this.slidesprite = 'spr_diamondm_idle', this.eraser = 0x0;
    }
    ["userEvent0"]() {
      Ig.interact === 0x0 && (Ig.specialbattle = 0x0, (Ig.flag ??= [])[0x9] = 0x1, (Ig.batmusic ??= [])[0x0] = oV('snd_init').call(this, "battle.ogg"), (this.alarm ??= [])[0x5] = -0x12c, this.vspeed = 0x0, Ig.interact = 0x1, this.con = 0x1);
    }
    ["step"]() {
      if (this.con === 0x0 && (Ig.interact === 0x0 && (this.frozen = 0x0), Ix(oV('scr_outside_camera').call(this, 0xc8)) ? this.frozen = 0x1 : this.frozen = 0x0, Ig.interact !== 0x0 && (this.frozen = 0x1), this.frozen === 0x1 && this.hadfrozen === 0x0 && (this.remspeed = this.speed, this.speed = 0x0, this.hadfrozen = 0x1), this.frozen === 0x0 && this.hadfrozen === 0x1 && (this.speed === 0x0 && (this.speed = this.remspeed), this.hadfrozen = 0x0), this.frozen === 0x0 && (this.fliptimer += 0x1, this.fliptimer >= 0x1e && (this.vspeed = -this.vspeed, this.fliptimer = 0x0))), this.con === 0x1 && (this.sprite_index = this.touchsprite, this.hnka = oV('snd_play').call(this, 'snd_tensionhorn'), this.con = 0x2, (this.alarm ??= [])[0x4] = 0x8), this.con === 0x3 && (this.hnkb = oV('snd_play').call(this, 'snd_tensionhorn'), oV('snd_pitch').call(this, this.hnkb, 1.1), this.con = 0x4, (this.alarm ??= [])[0x4] = 0xc), this.con === 0x5) {
        for (this.depth = 0x1388, oV('instance_create').call(this, 0x0, 0x0, M4), oV('instance_create').call(this, 0x0, 0x0, jY), this.con = 0x6, this.sprite_index = this.slidesprite, this.direction = oX(this.x, this.y, Ig.monstermakex[0x0], Ig.monstermakey[0x0]), this.speed = oK(this.x, this.y, Ig.monstermakex[0x0], Ig.monstermakey[0x0]) / 0xa, this.copyhave = 0x0, this.cc = 0x0; this.cc < 0x2; this.cc += 0x1) Ig.monstertype[Math.trunc(this.cc + 0x1)] !== 0x0 && (this.copyhave += 0x1, Ig.monstertype[Math.trunc(this.cc + 0x1)] === Ig.monstertype[0x0] ? ((this.copy ??= [])[this.cc] = oV('scr_dark_marker').call(this, this.x, this.y, this.sprite_index), this.copy[this.cc].direction = oX(this.x, this.y, Ig.monstermakex[Math.trunc(this.cc + 0x1)], Ig.monstermakey[Math.trunc(this.cc + 0x1)]), this.copy[this.cc].speed = oK(this.x, this.y, Ig.monstermakex[Math.trunc(this.cc + 0x1)], Ig.monstermakey[Math.trunc(this.cc + 0x1)]) / 0xa, this.copy[this.cc].depth = this.depth - 0x1 - this.cc) : ((this.copy ??= [])[this.cc] = oV('scr_dark_marker').call(this, Ig.monstermakex[Math.trunc(this.cc + 0x1)] + 0xc8, Ig.monstermakey[Math.trunc(this.cc + 0x1)], MF(Ig.monsterinstancetype[Math.trunc(this.cc + 0x1)])), this.copy[this.cc].cc = this.cc, this.copy[this.cc].depth = this.depth - 0x1 - this.cc, oD(this.copy[this.cc], PV => {
          PV.direction = oX(PV.x, PV.y, Ig.monstermakex[Math.trunc(PV.cc + 0x1)], Ig.monstermakey[Math.trunc(PV.cc + 0x1)]), PV.speed = oK(PV.x, PV.y, Ig.monstermakex[Math.trunc(PV.cc + 0x1)], Ig.monstermakey[Math.trunc(PV.cc + 0x1)]) / 0xa;
        })));
        (this.alarm ??= [])[0x4] = 0xa;
      }
      if (this.con === 0x7) {
        if (this.copyhave > 0x0) {
          for (this.c = 0x0; this.c < this.copyhave; this.c += 0x1) oD(this.copy[this.c], PV => {
            PV.speed = 0x0;
          });
        }
        if (this.speed = 0x0, Ix(IJ(Mk)) && (this.eraser === 0x1 && oW.with('obj_chaseenemy', PV => {
          PV.instance_destroy();
        }), this.instance_destroy(), this.copyhave > 0x0)) {
          for (this.c = 0x0; this.c < this.copyhave; this.c += 0x1) oD(this.copy[this.c], PV => {
            PV.instance_destroy();
          });
        }
      }
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x0) return this.userEvent0();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jA, 'obj_testoverworldenemy'), oA(jA, 'kinds', oM('obj_testoverworldenemy', o8)), oA(jA, 'defaultDepth', 0x0), oA(jA, 'defaultSprite', 'spr_diamondm_idle');
var jd = jA,
  jS = class XP extends o8 {};
oH(jS, 'obj_testoverworldenemy_Collision'), oA(jS, 'kinds', oM('obj_testoverworldenemy_Collision', o8));
var jR = jS,
  jv = class Xr extends o8 {
    ["animationEnd"]() {
      this.instance_destroy();
    }
  };
oH(jv, 'obj_animation'), oA(jv, 'kinds', oM('obj_animation', o8)), oA(jv, 'defaultDepth', 0x0);
var jz = jv,
  jb = class XX extends o8 {
    ["create"]() {
      this.type = 0x0, this.con = 0x0, this.subcon = 0x0, this.secondtime = 0x0, Mc === 'room_field_checkersboss' && (Ig.plot < 0x3c ? (this.con = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.subcon = 0x0) : this.instance_destroy()), Mc === 'room_cc_6f' && (this.secondtime = 0x1, this.con = 0x1, this.image_xscale = 0x2, this.image_yscale = 0x2, this.subcon = 0x0);
    }
    ["step"]() {
      if (this.type === 0x0) {
        if (this.con === 0x1 && (this.x = 0x320, this.image_speed = 0.2, this.sprite_index = 'spr_smallchecker_front', Ig.interact = 0x1, this.s = oV('scr_dark_marker').call(this, -0x64, Ig.cinstance[0x1].y, 'spr_susier_dark'), this.r = oV('scr_dark_marker').call(this, -0x32, Ig.cinstance[0x0].y, 'spr_ralseir'), this.k = oV('scr_dark_marker').call(this, 0x0, MO('obj_mainchara').y, 'spr_krisr_dark'), oW.with('obj_caterpillarchara', PV => {
          PV.visible = 0x0;
        }), oW.with('obj_mainchara', PV => {
          PV.visible = 0x0;
        }), oW.with('obj_marker', PV => {
          PV.hspeed = 0x5, PV.image_speed = 0.2;
        }), this.l = oV('scr_dark_marker').call(this, 0x1f4, MO('obj_mainchara').y, 'spr_lancer_rt'), this.con = -0x32, (this.alarm ??= [])[0x4] = 0x1c), this.con === -0x31 && (oV('snd_free_all').call(this), oW.with('obj_marker', PV => {
          oV('scr_halt').call(PV);
        }), this.con = -0x30, (this.alarm ??= [])[0x4] = 0xf), this.con === -0x2f && (Ig.typer = 0x20, Ig.fc = 0x5, Ig.fe = 0x0, this.name = 'Guys', Ig.flag[0xd6] === 0x1 && (this.name = "(name I'm not allowed to say)."), Ig.flag[0xd6] === 0x2 && (this.name = "Lancer Fan Club."), Ig.flag[0xd6] === 0x3 && (this.name = "Friendly Fun Gang."), (Ig.msg ??= [])[0x0] = "* Hohoho..^1.&* Well STEP on my BOOTS./", (Ig.msg ??= [])[0x1] = "* If it isn't the " + this.name + '/', (Ig.msg ??= [])[0x2] = "* You boys or girls had better turn back while you can./", oV('scr_ralface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* Lancer!!!&* What is it this time!?/", oV('scr_lanface').call(this, 0x5, 0x1), (Ig.msg ??= [])[0x6] = "* Hohoho..^1.&* I'm simply warning you...!/%", oV('instance_create').call(this, 0x0, 0x0, jn), this.con = -0x2e, this.warnpitch = 0x0), this.con === -0x2e && !Ix(oV('d_ex').call(this)) && (this.hitnoise = oV('snd_play').call(this, 'snd_orchhit'), oV('snd_pitch').call(this, this.hitnoise, 0x1 + this.warnpitch / 0x10), oD(this.l, PV => {
          PV.sprite_index = 'spr_lancer_lt', PV.hspeed = -0xa;
        }), this.con = -0x2d, (this.alarm ??= [])[0x4] = 0x3), this.con === -0x2c && (oD(this.l, PV => {
          oV('scr_halt').call(PV);
        }), this.con = -0x2b, (this.alarm ??= [])[0x4] = 0xf), this.con === -0x2a && (Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* Something EXTREMELY dangerous is lying ahead!/%", this.warnpitch === 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Hohoho^1! It's actually really inconvenient!/%"), this.warnpitch === 0x2 && (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* Ha^1! I can't go home at all because I'm so scared!/", oV('scr_susface').call(this, 0x1, 0x9), (Ig.msg ??= [])[0x2] = "* Wh..^1. What is it!?/%"), oV('instance_create').call(this, 0x0, 0x0, jn), this.warnpitch < 0x2 ? (this.con = -0x2e, this.warnpitch += 0x1) : this.con = -0x28), this.con === -0x28 && !Ix(oV('d_ex').call(this)) && (this.ltimer = 0x0, oW.with('obj_marker', PV => {
          PV.sprite_index !== 'spr_lancer_lt' ? (PV.hspeed = 0x5, PV.image_speed = 0.25) : (PV.sprite_index = 'spr_lancer_dt', PV.vspeed = -0x2, PV.depth = 0x186a0);
        }), this.con = -0xa, (this.alarm ??= [])[0x4] = 0x60), this.con === -0xa) {
          if (this.ltimer += 0x1, this.ltimer >= 0x14 && oD(this.l, PV => {
            oV('scr_halt').call(PV);
          }), this.k.x >= 0x8c) {
            let PV = this.k.x;
            oW.with('obj_mainchara', PD => {
              PD.x = PV;
            });
          }
          Ig.interact = 0x1;
        }
        if (this.con === -0x9) {
          oV('snd_free_all').call(this), Ig.facing = 0x1, this.con = -0x8, oW.with('obj_marker', PD => {
            oV('scr_halt').call(PD);
          });
          {
            let PD = this.k.x;
            oW.with('obj_mainchara', PY => {
              PY.x = PD;
            });
          }
          oW.with('obj_mainchara', PY => {
            PY.visible = 0x1;
          }), oW.with('obj_mainchara', PY => {
            PY.cutscene = 0x1;
          }), oD(this.l, PY => {
            PY.sprite_index = 'spr_lancer_rt';
          }), oD(this.k, PY => {
            PY.instance_destroy();
          }), (this.alarm ??= [])[0x4] = 0x10, oV('scr_pan').call(this, 0x5, 0x0, 0x10);
        }
        if (this.con === -0x7 && (Ig.fc = 0x2, Ig.fe = 0x8, Ig.typer = 0x1f, (Ig.msg ??= [])[0x0] = "* Oh^1, hey^1, little guy.../", oV('scr_susface').call(this, 0x1, 0x6), (Ig.msg ??= [])[0x2] = "* THAT??^1? THAT'S what you're afraid of???/", oV('scr_lanface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* W..^1. Wow^1, purple girl^1!&* You aren't scared!?/", oV('scr_susface').call(this, 0x5, 0x2), (Ig.msg ??= [])[0x6] = "* Heh^1, why would I be^1? What's it gonna do?/", oV('scr_lanface').call(this, 0x7, 0x6), (Ig.msg ??= [])[0x8] = "* Hmm^1, well^1, normally.../%", this.con = -5.2, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === -5.2 && oV('d_ex').call(this) === 0x0 && (this.sprite_index = 'spr_smallchecker_idle', this.image_index = 0x0, this.x += 0x28, this.image_xscale = -0x2, this.hspeed = 0x2, this.con = 0x2), this.con === 0x2 && this.x > 0x208 && (this.image_index = 0x0, this.image_xscale = 0x2, this.sprite_index = 'spr_smallchecker_front', this.hspeed = 0x0, this.x = 0x1e0, this.con = 1.1, (this.alarm ??= [])[0x4] = 0x1e), Math.abs(this.con - 2.1) < 0.00001) {
          for (oV('snd_play').call(this, 'snd_boost'), this.j = 0x0; this.j < 0x3; this.j += 0x1) (this.tile ??= [])[this.j] = oV('scr_marker').call(this, 0x1e0 - this.j * 0x28 + 0x190, 0xf0 + this.j * 0x28, 'spr_checkertile_bullet'), this.tile[this.j].image_alpha = 0x0, this.tile[this.j].depth = 0xaae60;
          this.ttimer = 0x0, this.con = 2.2;
        }
        if (Math.abs(this.con - 2.2) < 0.00001) {
          for (this.j = 0x0; this.j < 0x3; this.j += 0x1) this.tile[this.j].image_alpha += 0.1;
          this.ttimer += 0x1, this.ttimer >= 0xa && (this.con = 2.3);
        }
        if (Math.abs(this.con - 2.3) < 0.00001) {
          for (this.j = 0x0; this.j < 0x3; this.j += 0x1) this.tile[this.j].image_alpha -= 0.1;
          this.ttimer += 0x1, this.ttimer >= 0x1e && (this.con = 3.1);
        }
        Math.abs(this.con - 3.1) < 0.00001 && (this.con = 0x4), this.con === 0x4 && (this.sprite_index = 'spr_smallchecker_front', this.image_speed = 0x0, this.image_index = 0x0, this.crown = oV('instance_create').call(this, this.x + 0x8, -0x28, Ik), this.crown.image_xscale = 0x2, this.crown.image_yscale = 0x2, this.crown.sprite_index = 'spr_smallchecker_crown', this.crown.vspeed = 0x4, this.crown.depth = this.depth - 0x1, this.con = 0x5), this.con === 0x5 && this.crown.y >= this.y - 0xa && (this.sprite_index = 'spr_smallchecker_transform', this.y += 0x2, oV('snd_play').call(this, 'snd_shineselect'), oD(this.crown, PY => {
          PY.instance_destroy();
        }), this.con = 0x6, (this.alarm ??= [])[0x4] = 0x32), this.con === 0x7 && (oV('snd_play').call(this, 'snd_crowngrowth'), this.image_speed = 0.25, this.con = 0x8), this.con === 0x8 && (this.image_speed += 0.01, this.image_speed - 0.4 >= -0.00001 && (this.image_index = 0x1, this.image_speed = 0x0, this.con = 0x9, (this.alarm ??= [])[0x4] = 0x3c)), this.con === 0xa && (this.image_index = 0x0, this.sprite_index = 'spr_smallchecker_transform2', this.image_speed = 0.334, this.con = 0xb), this.con === 0xb && this.image_index >= 0x4 && (this.image_index = 0x4, this.image_speed = 0x0, this.con = 0xc, (this.alarm ??= [])[0x4] = 0x28), this.con === 0xd && (this.x -= 0x12, this.y -= 0x5a, oV('snd_play').call(this, 'snd_impact'), oD(this.s, PY => {
          PY.sprite_index = 'spr_susie_shock_r';
        }), oD(this.r, PY => {
          PY.sprite_index = 'spr_ralsei_shock_overworld';
        }), oV('instance_create').call(this, 0x0, 0x0, Id), this.sprite_index = 'spr_checkers_idle', this.image_speed = 0x0, this.image_index = 0x0, this.con = 0x10, (this.alarm ??= [])[0x4] = 0x1e), this.con === 0x11 && (oD(this.r, PY => {
          PY.sprite_index = 'spr_ralseir';
        }), oD(this.s, PY => {
          PY.sprite_index = 'spr_susier_dark';
        }), Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "* It crushes people to death^1, I think./%", this.con = 0x12, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x12 && !Ix(oV('d_ex').call(this)) && (oV('scr_unmarkify_caterpillar').call(this), Ig.facing = 0x1, oV('scr_caterpillar_facing').call(this, Ig.facing), Ig.encounterno = 0xc, oV('scr_encountersetup').call(this, Ig.encounterno), (Ig.flag ??= [])[0x9] = 0x1, (Ig.batmusic ??= [])[0x0] = oV('snd_init').call(this, "checkers.ogg"), Ig.specialbattle = 0x3, oV('instance_create').call(this, 0x0, 0x0, jY), oV('instance_create').call(this, 0x0, 0x0, M4), this.depth = 0xfa0, oV('scr_move_to_point_over_time').call(this, Ig.monstermakex[0x0], Ig.monstermakey[0x0], 0x14), this.con = 0x13, (this.alarm ??= [])[0x4] = 0x14), this.con === 0x14 && (this.speed = 0x0, this.con = 0x15, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x16 && (this.visible = 0x0, this.type = 0x2, this.con = 0x0, this.victimer = 0x0);
      }
      this.type === 0x1 && (this.con === 0x1 && (this.image_speed = 0x0, this.image_index = 0x0, this.crown = oV('instance_create').call(this, this.x + 0x18, this.y + 0xa, Ik), this.crown.image_xscale = 0x2, this.crown.image_yscale = 0x2, this.crown.sprite_index = 'spr_smallchecker_crown', this.crown.depth = this.depth - 0x1, this.sprite_index = 'spr_smallchecker_transform3', this.con = 0.4, this.windsound = 0x0, (this.alarm ??= [])[0x4] = 0x1e), Math.abs(this.con - 1.4) < 0.00001 && (this.windsound === 0x0 && (oV('snd_play').call(this, 'snd_whistlebreath'), this.windsound = 0x1), this.secondtime === 0x0 ? this.crown.hspeed += 0.2 : this.crown.hspeed += 0.4, this.crown.hspeed - 0x3 >= -0.00001 && (this.con = 1.5)), this.con === 1.5 && (oD(this.crown, PY => {
        PY.maxy = MO('obj_checker_animtest').y + MO('obj_checker_animtest').sprite_height, PY.image_angle = -0x2d, PY.y -= 0xa, PY.gravity = 0.5, PY.hspeed = 0x5, PY.friction = 0.2;
      }), this.con = 1.6), Math.abs(this.con - 1.6) < 0.00001 && this.crown.y >= this.crown.maxy - this.crown.sprite_height - 0xa && (this.crown.y += 0xa, this.crown.image_angle = 0x0, this.crown.gravity = 0x0, this.crown.vspeed = 0x0, this.crown.friction = 0x0, this.crown.hspeed = 0x1, this.con = 0.9, (this.alarm ??= [])[0x4] = 0x1e, this.secondtime === 0x1 && ((this.alarm ??= [])[0x4] = 0xa, this.interactcrown = oV('instance_create').call(this, this.crown.x, this.crown.y, jx), this.interactcrown.hspeed = 0x1, this.interactcrown.image_xscale = 1.6, this.interactcrown.image_yscale = 0x1)), Math.abs(this.con - 1.9) < 0.00001 && (this.image_speed = 0.25, oV('snd_play').call(this, 'snd_crownshrink'), this.con = 2.1), Math.abs(this.con - 2.1) < 0.00001 && (this.image_speed += 0.01, this.secondtime === 0x1 && (this.image_speed += 0.01), this.image_speed - 0.4 >= -0.00001 && (this.image_index = 0x1, this.image_speed = 0x0, this.con = 0x3, this.maxy = this.y + this.sprite_height - 0x1e, (this.alarm ??= [])[0x4] = 0x1e, this.secondtime === 0x1 && ((this.alarm ??= [])[0x4] = 0xa))), this.con === 0x4 && (this.x += 0x28, this.y += 0x2e, this.sprite_index = 'spr_smallchecker_legtuck', this.image_index = 0x0, this.image_speed = 0.25, this.vspeed = -0x3, this.gravity = 0x1, this.secondtime === 0x1 && (this.vspeed = -0x6, this.gravity = 0x2, this.image_speed = 0.5), this.con = 0x5), this.con === 0x5 && (this.image_index >= 0x2 && (this.image_speed = 0x0), this.y >= this.maxy - 0x4 && (this.y = this.maxy, this.gravity = 0x0, this.vspeed = 0x0, this.con = 0x6, (this.alarm ??= [])[0x4] = 0x1e, this.secondtime === 0x1 && ((this.alarm ??= [])[0x4] = 0xa))), this.con === 0x7 && (this.image_angle -= 0x5, this.hspeed = 0x3, this.secondtime === 0x1 && (this.hspeed = 0x6, this.image_angle -= 0x5), this.x >= 0x2d0 && (this.con = 0x8, (Ig.monster ??= [])[0x0] = 0x0, (Ig.monster ??= [])[0x1] = 0x0, (Ig.monster ??= [])[0x2] = 0x0, oV('scr_attackphase').call(this), oW.with('obj_monsterparent', PY => {
        PY.instance_destroy();
      }), this.instance_destroy()))), this.type === 0x2 && (this.con === 0x0 && (this.victimer += 0x1, this.victimer >= 0x3c && (this.con = 0x1)), this.con === 0x1 && Ig.fighting === 0x0 && (this.victimer = 0x0, this.con = 0x2), this.con === 0x2 && (this.victimer += 0x1, this.victimer >= 0xf && (Ig.typer = 0x1e, Ig.fe = 0x6, Ig.fc = 0x1, (Ig.msg ??= [])[0x0] = "* We..^1. We did it!?/%", oV('instance_create').call(this, 0x0, 0x0, jn), this.con = 0x3)), this.con === 0x3 && !Ix(oV('d_ex').call(this)) && (oD(this.l, PY => {
        PY.hspeed = 0x12;
      }), this.con = 0x4, (this.alarm ??= [])[0x4] = 0x14), this.con === 0x5 && (oD(this.l, PY => {
        oV('scr_halt').call(PY), PY.sprite_index = 'spr_lancer_lt';
      }), this.con = 0x6, (this.alarm ??= [])[0x4] = 0xf), this.con === 0x7 && (Ig.typer = 0x20, Ig.fc = 0x5, Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* Wow!^1! You clowns really ARE heroes!!/", (Ig.msg ??= [])[0x1] = "* You saved the next twenty minutes of my life!!/", oV('scr_susface').call(this, 0x2, 0x2), (Ig.msg ??= [])[0x3] = "* Yeah^1, yeah^1, I am pretty great^1, huh...?/%", oV('instance_create').call(this, 0x0, 0x0, jn), this.con = 7.2), Math.abs(this.con - 7.1) < 0.00001 && !Ix(oV('d_ex').call(this)) && (oV('snd_play').call(this, 'snd_suslaugh'), oD(this.s, PY => {
        PY.image_speed = 0.2;
      }), this.con = 6.2, (this.alarm ??= [])[0x4] = 0x3c), Math.abs(this.con - 7.2) < 0.00001 && !Ix(oV('d_ex').call(this)) && (oD(Ig.cinstance[0x0], PY => {
        PY.visible = 0x0;
      }), oD(Ig.cinstance[0x1], PY => {
        PY.visible = 0x0;
      }), oW.with('obj_mainchara', PY => {
        PY.visible = 0x0;
      }), this.r = oV('scr_dark_marker').call(this, Ig.cinstance[0x0].x, Ig.cinstance[0x0].y, 'spr_ralseil'), this.s = oV('scr_dark_marker').call(this, Ig.cinstance[0x1].x, Ig.cinstance[0x1].y, 'spr_susier_dark'), this.k = oV('scr_dark_marker').call(this, MO('obj_mainchara').x, MO('obj_mainchara').y, 'spr_krisl_dark'), Ig.typer = 0x1f, Ig.fc = 0x2, Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E8* Ummm^1, Susie...?/", (Ig.msg ??= [])[0x1] = "\\E8* Not to downplay your contributions^1, but.../", (Ig.msg ??= [])[0x2] = "\\E1* You..^1. didn't actually help at all./", (Ig.msg ??= [])[0x3] = "\\EB* You only made everything WORSE by attacking it./", (Ig.msg ??= [])[0x4] = "\\E1* If you had just acted nice to it in the first place.../", (Ig.msg ??= [])[0x5] = "\\E6* We could have avoided that entire battle./", oV('scr_susface').call(this, 0x6, 0x6), (Ig.msg ??= [])[0x7] = "* Huh^1?&* Are you FOR REAL?/", (Ig.msg ??= [])[0x8] = "\\E7* That thing was BLOODTHIRSTY!!!/", (Ig.msg ??= [])[0x9] = "\\E2* The only thing keeping it at bay was MY AX!/%", this.con = 0x32, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x32 && !Ix(oV('d_ex').call(this)) && (oD(this.r, PY => {
        PY.sprite_index = 'spr_ralseid';
      }), this.con = 0x33, (this.alarm ??= [])[0x4] = 0x1e), this.con === 0x34 && (oD(this.r, PY => {
        PY.sprite_index = 'spr_ralseil';
      }), Ig.fc = 0x2, Ig.fe = 0x6, Ig.typer = 0x1f, (Ig.msg ??= [])[0x0] = "* And^1, earlier^1, you terrorized those troops.../", oV('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Those guys were ENEMIES^1. They're FOR terrorizing./", oV('scr_lanface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* Yeah^1! She's right!!/", oV('scr_ralface').call(this, 0x5, 0x1), (Ig.msg ??= [])[0x6] = "* And before that^1, you ate an innocent person's cake.../%", this.con = 0x35, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x35 && !Ix(oV('d_ex').call(this)) && (oD(this.s, PY => {
        PY.sprite_index = 'spr_susied_dark';
      }), this.con = 0x36, (this.alarm ??= [])[0x4] = 0x1e), this.con === 0x37 && (oD(this.s, PY => {
        PY.sprite_index = 'spr_susier_dark';
      }), Ig.fc = 0x1, Ig.fe = 0x2, Ig.typer = 0x1e, (Ig.msg ??= [])[0x0] = "* Cakes..^1. are also my enemy./", oV('scr_ralface').call(this, 0x1, 'C'), (Ig.msg ??= [])[0x2] = "* .../", (Ig.msg ??= [])[0x3] = "\\E1* Susie..^1. Whether you like it or not.../", (Ig.msg ??= [])[0x4] = "\\E6* You're a hero./", (Ig.msg ??= [])[0x5] = "\\E0* One with the power to bring peace to the future./", (Ig.msg ??= [])[0x6] = "\\E5* Could you please start..^1. acting like one?/%", this.con = 0x38, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x38 && !Ix(oV('d_ex').call(this)) && (oD(this.s, PY => {
        PY.sprite_index = 'spr_susiel_dark_unhappy';
      }), this.con = 0x39, (this.alarm ??= [])[0x4] = 0x3c), this.con === 0x3a && (Ig.fc = 0x1, Ig.fe = 0x0, Ig.typer = 0x1e, (Ig.msg ??= [])[0x0] = "* Yeah^1, when you lay it out like that.../", (Ig.msg ??= [])[0x1] = "* I've been a pretty bad hero^1, haven't I?/", (Ig.msg ??= [])[0x2] = "* .../%", oV('instance_create').call(this, 0x0, 0x0, jn), this.con = 0x3b), this.con === 0x3b && !Ix(oV('d_ex').call(this)) && (oD(this.s, PY => {
        PY.vspeed = 0x2, PY.image_speed = 0.2, PY.sprite_index = 'spr_susied_dark_unhappy';
      }), this.con = 0x3c, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x3d && (oD(this.k, PY => {
        oV('scr_depth').call(PY);
      }), oD(this.r, PY => {
        oV('scr_depth').call(PY);
      }), oD(this.s, PY => {
        oV('scr_halt').call(PY), oV('scr_depth').call(PY);
      }), this.con = 0x3e, (this.alarm ??= [])[0x4] = 0x1e), this.con === 0x3f && ((Ig.msg ??= [])[0x0] = "* Alright^1, Ralsei^1.&* You got it^1.&* I'll change my ways./", (Ig.msg ??= [])[0x1] = "* From now on^1, I won't be such a rotten hero anymore./%", this.con = 0x40, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x40 && !Ix(oV('d_ex').call(this)) && (oD(this.s, PY => {
        PY.hspeed = 0xc, PY.sprite_index = 'spr_susier_dark', PY.image_speed = 0.5;
      }), this.con = 0x41), this.con === 0x41 && this.s.x >= 0x1cc && (oD(this.s, PY => {
        oV('scr_halt').call(PY);
      }), oD(this.s, PY => {
        PY.sprite_index = 'spr_susiel_dark';
      }), oD(this.k, PY => {
        PY.sprite_index = 'spr_krisr_dark';
      }), oD(this.r, PY => {
        PY.sprite_index = 'spr_ralseir';
      }), this.con = 0x42), this.con === 0x42 && (this.con = 0x43, Ig.fc = 0x1, Ig.fe = 0x3, Ig.typer = 0x1e, (Ig.msg ??= [])[0x0] = "* I'll just be one of the BAD GUYS instead!/%", oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x43 && !Ix(oV('d_ex').call(this)) && (oD(this.r, PY => {
        PY.sprite_index = 'spr_ralsei_shock_overworld';
      }), this.con = 0x44, (this.alarm ??= [])[0x4] = 0x14), this.con === 0x45 && ((Ig.currentsong ??= [])[0x0] = oV('snd_init').call(this, "lancer.ogg"), (Ig.currentsong ??= [])[0x1] = oV('mus_loop_ext').call(this, Ig.currentsong[0x0], 0.6, 0x1), oD(this.r, PY => {
        PY.sprite_index = 'spr_ralseir';
      }), Ig.fc = 0x5, Ig.typer = 0x20, Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* R... Really!?/", (Ig.msg ??= [])[0x1] = "\\E3* You're going to be on MY team?/", oV('scr_susface').call(this, 0x2, 0x2), (Ig.msg ??= [])[0x3] = "* Yeah^1, sounds way easier^1, honestly./", oV('scr_ralface').call(this, 0x4, 0x3), (Ig.msg ??= [])[0x5] = "* Susie^1, you can't just -/", oV('scr_lanface').call(this, 0x6, 0x1), (Ig.msg ??= [])[0x7] = "* Quiet^1, Toothpaste Boy^1! Susie is MY comrade now!/", oV('scr_susface').call(this, 0x8, 0x2), (Ig.msg ??= [])[0x9] = "* Hahaha^1, yeah^1, Toothpaste Boy!/", oV('scr_lanface').call(this, 0xa, 0x3), (Ig.msg ??= [])[0xb] = "* We're going to have monogrammed track jackets!/", oV('scr_susface').call(this, 0xc, 0x2), (Ig.msg ??= [])[0xd] = "* Yeah!/", oV('scr_lanface').call(this, 0xe, 0x1), (Ig.msg ??= [])[0xf] = "* And sleepovers^1! Where we tell each other secrets!/", oV('scr_susface').call(this, 0x10, 0x6), (Ig.msg ??= [])[0x11] = "* Ummm^1, yeah?/", (Ig.msg ??= [])[0x12] = "\\E2* Anyway^1, uhh^1, see you guys never./", oV('scr_lanface').call(this, 0x13, 0x3), (Ig.msg ??= [])[0x14] = "* Haha!^1! If you can even last that long!/%", oV('instance_create').call(this, 0x0, 0x0, jn), this.con = 0x46), this.con === 0x46 && !Ix(oV('d_ex').call(this)) && (oV('snd_volume').call(this, Ig.currentsong[0x1], 0x0, 0x32), oV('snd_play').call(this, 'snd_lancerlaugh'), oD(this.l, PY => {
        PY.sprite_index = 'spr_lancer_lt_laugh', PY.image_speed = 0.2, PY.hspeed = 0xc;
      }), oD(this.s, PY => {
        PY.sprite_index = 'spr_susier_dark', PY.image_speed = 0.5, PY.hspeed = 0xc;
      }), this.con = 0x47, (this.alarm ??= [])[0x4] = 0x46), this.con === 0x48 && (this.con = 0x16), this.con === 0x16 && !Ix(oV('d_ex').call(this)) && (oD(this.r, PY => {
        PY.hspeed = 0x6, PY.image_speed = 0.25;
      }), this.con = 0x17, (this.alarm ??= [])[0x4] = 0x14), this.con === 0x18 && (oV('snd_free_all').call(this), Ig.facing = 0x2, oD(this.r, PY => {
        oV('scr_halt').call(PY);
      }), Ig.fc = 0x2, Ig.typer = 0x1f, Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Kris.../", (Ig.msg ??= [])[0x1] = "\\E6* Perhaps I shouldn't have been so hard on her./", (Ig.msg ??= [])[0x2] = "\\E1* .../", (Ig.msg ??= [])[0x3] = "* But^1, I just worry that if Susie is too eager to fight.../", (Ig.msg ??= [])[0x4] = "\\E4* Then.../", (Ig.msg ??= [])[0x5] = "\\E6* Well^1, let's just be kind to her^1, OK^1, Kris?/", (Ig.msg ??= [])[0x6] = "\\E8* I'm sure Susie'll come around soon!/%", this.con = 0x1c, oV('instance_create').call(this, 0x0, 0x0, jn)), this.con === 0x1c && !Ix(oV('d_ex').call(this)) && (oD(this.k, PY => {
        PY.hspeed = 0x8, PY.image_speed = 0.25;
      }), oD(this.r, PY => {
        PY.hspeed = 0x8, PY.image_speed = 0.25, PY.sprite_index = 'spr_ralseir';
      }), this.con = 0x1d, (this.alarm ??= [])[0x4] = 0xa), this.con === 0x1e && (oV('instance_create').call(this, 0x0, 0x0, jc), this.con = 0x1f, (this.alarm ??= [])[0x4] = 0x1e), this.con === 0x20 && (Ig.plot < 0x3c && (Ig.plot = 0x3c, Ig.flag[0xd7] === 0x1 && ((Ig.flag ??= [])[0xfb] = 0x1)), oV('scr_losechar').call(this), oV('scr_getchar').call(this, 0x3), oV('instance_create').call(this, 0x0, 0x0, jg), Ig.interact = 0x3, Ig.entrance = 0x1, Mb()));
    }
    ["alarmEvent"](PV) {
      if (PV === 0x4) {
        this.con += 0x1;
        return;
      }
      return super.alarmEvent?.(PV);
    }
  };
oH(jb, 'obj_checker_animtest'), oA(jb, 'kinds', oM('obj_checker_animtest', o8)), oA(jb, 'defaultDepth', 0x0), oA(jb, 'defaultSprite', 'spr_smallchecker_idle');
var jV = jb,
  jD = class XK extends o8 {
    ["create"]() {
      for (Ig.interact = 0x2, Ig.flag[0x9] === 0x1 && oV('snd_volume').call(this, Ig.currentsong[0x1], 0x0, 0x14), oV('scr_encountersetup').call(this, Ig.encounterno), oW.with('obj_mainchara', PV => {
        PV.visible = 0x0;
      }), oD(Ig.cinstance[0x0], PV => {
        PV.visible = 0x0;
      }), oD(Ig.cinstance[0x1], PV => {
        PV.visible = 0x0;
      }), this.count = 0x0, (this.c ??= [])[0x0] = oV('scr_dark_marker').call(this, MO('obj_mainchara').x, MO('obj_mainchara').y, 'spr_krisr_dark'), Ix(IJ(Ig.cinstance[0x0])) && (this.count += 0x1, (this.c ??= [])[0x1] = oV('scr_dark_marker').call(this, Ig.cinstance[0x0].x, Ig.cinstance[0x0].y, Ig.cinstance[0x0].rsprite), Ig.cinstance[0x0].rsprite === 'spr_susier_dark' && (this.c[0x1].sprite_index = 'spr_susier_wall')), Ix(IJ(Ig.cinstance[0x1])) && (this.count += 0x1, (this.c ??= [])[0x2] = oV('scr_dark_marker').call(this, Ig.cinstance[0x1].x, Ig.cinstance[0x1].y, Ig.cinstance[0x1].rsprite), Ig.cinstance[0x1].rsprite === 'spr_susier_dark' && (this.c[0x2].sprite_index = 'spr_susier_wall')), this.i = 0x0; this.i < this.count + 0x1; this.i += 0x1) this.c[this.i].direction = oX(this.c[this.i].x, this.c[this.i].y, Ig.heromakex[this.i], Ig.heromakey[this.i]), this.c[this.i].speed = oK(this.c[this.i].x, this.c[this.i].y, Ig.heromakex[this.i], Ig.heromakey[this.i]) / 0xa, this.c[this.i].depth = 0xc8 - this.i * 0x14;
      this.fightcon = 0x1, this.counttimer = 0x0;
    }
    ["step"]() {
      if (this.fightcon === 0x1) {
        if (Ig.flag[0x9] === 0x1 && oV('snd_pause').call(this, Ig.currentsong[0x1]), this.counttimer += 0x1, this.counttimer < 0xa) {
          for (this.i = 0x0; this.i < this.count + 0x1; this.i += 0x1) oD(this.c[this.i], PV => {
            PV.af = oV('scr_afterimage').call(PV), PV.af.image_alpha = 0.5;
          });
        }
        if (this.counttimer >= 0xa) {
          for (this.wp = oV('snd_play').call(this, 'snd_impact'), oV('snd_volume').call(this, this.wp, 0.7, 0x0), this.wp2 = oV('snd_play').call(this, 'snd_weaponpull_fast'), oV('snd_volume').call(this, this.wp2, 0.8, 0x0), this.i = 0x0; this.i < this.count + 0x1; this.i += 0x1) this.c[this.i].speed = 0x0, this.c[this.i].image_index = 0x0, Ig.char[this.i] === 0x1 && (this.c[this.i].sprite_index = 'spr_krisb_attack'), Ig.char[this.i] === 0x2 && (this.c[this.i].sprite_index = 'spr_susieb_attack', Ig.charweapon[Ig.char[this.i]] === 0x0 && (this.c[this.i].sprite_index = 'spr_susieb_attack_unarmed')), Ig.char[this.i] === 0x3 && (this.c[this.i].sprite_index = 'spr_ralseib_battleintro'), this.c[this.i].image_speed = 0.5;
          this.fightcon = 0x2, this.counttimer = 0x0;
        }
      }
      if (this.fightcon === 0x2 && (this.counttimer += 0x1, this.counttimer >= 0xf)) {
        for (this.counttimer = 0x0, this.fightcon = 0x3, this.i = 0x0; this.i < this.count + 0x1; this.i += 0x1) oD(this.c[this.i], PV => {
          PV.instance_destroy();
        });
        oV('instance_create').call(this, 0x0, 0x0, Mk), this.instance_destroy();
      }
    }
  };
oH(jD, 'obj_encounterbasic'), oA(jD, 'kinds', oM('obj_encounterbasic', o8)), oA(jD, 'defaultDepth', 0x0);
var jY = jD,
  jw = class Xk extends o8 {
    ["collide_obj_throwtarget"](PV) {
      this.collided === 0x0 && (PV.good === 0x1 ? (oW.with('obj_checkers_enemy', PD => {
        PD.crown += 0x23;
      }), (Ig.msg ??= [])[0x0] = "* The crown greatly loosened!/%", oV('snd_play').call(this, 'snd_coin'), oD(PV, PD => {
        PD.offing === 0x1 ? (PD.con = 0x1, PD.vspeed = -0x8) : PD.con = 0x5;
      })) : (oV('snd_play').call(this, 'snd_noise'), oD(PV, PD => {
        PD.con = 0x7;
      }), oW.with('obj_checkers_enemy', PD => {
        PD.crown += 0x14;
      }), (Ig.msg ??= [])[0x0] = "* The crown loosened a little!/%", this.hspeed = -0xc, this.vspeed = -0x4, this.gravity = 0.5, this.con = 0x2), oV('scr_battletext_default').call(this), this.collided = 0x1);
    }
    ["create"]() {
      this.con = 0x0, this.yy = 0x0, this.xx = 0x0, this.timer = 0x0, this.collided = 0x0, this.mypower = 0xa;
    }
    ["step"]() {
      (this.con === 0x0 || this.con === 0x2) && (this.image_angle = this.direction), (this.x > this.xx + 0x2bc || this.y < this.yy - 0x28) && this.con === 0x0 && (this.gravity = 0x0, this.speed = 0x0, this.x = this.xx - 0x28, this.y = MO('obj_heroralsei').y, this.sprite_index = 'spr_ralseib_idle', this.image_angle = 0x0, this.hspeed = 0x14, this.con = 0xa), this.con === 0xa && (this.timer += 0x1, this.x >= MO('obj_heroralsei').x - 0xa && (this.collided === 0x0 && ((Ig.msg ??= [])[0x0] = "* Missed!/%", oV('scr_battletext_default').call(this)), oW.with('obj_heroralsei', PV => {
        PV.visible = 0x1;
      }), oW.with('obj_herosusie', PV => {
        PV.visible = 0x1;
      }), oW.with('obj_checkers_enemy', PV => {
        PV.actcon = 0x1, PV.visible = 0x1;
      }), oW.with('obj_throwtarget', PV => {
        PV.instance_destroy();
      }), oW.with('obj_throwralsei', PV => {
        PV.instance_destroy();
      }), this.instance_destroy())), this.con === 0x2 && (this.x < this.xx - 0x28 || this.y > this.yy + 0x208) && (this.timer = 0x0, this.gravity = 0x0, this.speed = 0x0, this.x = this.xx - 0x28, this.y = MO('obj_heroralsei').y, this.sprite_index = 'spr_ralseib_idle', this.image_angle = 0x0, this.hspeed = 0x14, this.con = 0xa);
    }
  };
oH(jw, 'obj_ralseithrown'), oA(jw, 'kinds', oM('obj_ralseithrown', o8)), oA(jw, 'defaultDepth', 0x1), oA(jw, 'defaultSprite', 'spr_ralsei_thrown');
var jp = jw,
  jC = class XW extends o8 {
    ["create"]() {
      this.cur_jewel = 0x0, this.active = 0x0, (this.alarm ??= [])[0x0] = 0x1, this.skippable = 0x1, this.free = 0x0, this.xxx = 0x0, this.yyy = 0x0, this.writer = 0x69930, this.side = 0x1, Ix(IJ(Ij)) && (Ig.darkzone === 0x0 && MO('obj_mainchara').y > this.yyy + 0x82 && (this.side = 0x0), Ig.darkzone === 0x1 && MO('obj_mainchara').y > this.yyy + 0xfa && (this.side = 0x0)), this.f = 0x1, Ig.darkzone === 0x1 && (this.f = 0x2);
    }
    ["destroy"]() {
      this.free === 0x1 && (Ig.interact = 0x0), oD(this.myface, PV => {
        PV.instance_destroy();
      });
    }
    ["draw"](PV) {
      this.active === 0x1 && (oV('scr_dbox').call(this), Ix(IJ(this.writer)) || this.instance_destroy());
    }
    ["userEvent0"]() {
      this.active = 0x1, this.xx = 0x13 * this.f + 0x0, this.yy = 0x14 * this.f + 0x0, this.xx = ok(this.xx), this.yy = ok(this.yy), this.side === 0x0 && (this.writer = oV('instance_create').call(this, this.xx + 0xa * this.f, this.yy - 0x5 * this.f, I5), oV('scr_facechoice').call(this), oD(this.writer, PV => {
        PV.dialoguer = 0x1;
      })), this.side === 0x1 && (this.writer = oV('instance_create').call(this, this.xx + 0xa * this.f, this.yy + 0x96 * this.f, I5), this.writer.skippable = this.skippable, oV('scr_facechoice').call(this), oD(this.writer, PV => {
        PV.dialoguer = 0x1;
      })), Ix(IJ(this.writer)) && Ig.fc !== 0x0 && oD(this.writer, PV => {
        PV.dialoguer = 0x1, PV.originalcharline === 0x21 && (PV.charline = 0x1a);
      });
    }
    ["alarmEvent"](PV) {
      if (PV === 0x0) {
        this.event_user(0x0);
        return;
      }
      return super.alarmEvent?.(PV);
    }
    ["userEvent"](PV) {
      if (PV === 0x0) return this.userEvent0();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jC, 'obj_dialoguer'), oA(jC, 'kinds', oM('obj_dialoguer', o8)), oA(jC, 'defaultDepth', 0x2);
var jn = jC,
  jO = class XZ extends o8 {
    ["create"]() {
      this.image_blend = o4.black, this.fadespeed = 0.08, MB === this.os_macosx && (this.fadespeed = 0.14), this.image_alpha = 0x0, this.length = 0xa + Mp / 0x4, this.height = 0xa + MC / 0x4, this.x = -0x14, this.y = -0x14;
    }
    ["draw"](PV) {
      this.image_alpha += this.fadespeed, PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.length, this.height, 0x0, this.image_blend, this.image_alpha);
    }
    ["roomEnd"]() {
      this.instance_destroy();
    }
  };
oH(jO, 'obj_fadeout'), oA(jO, 'kinds', oM('obj_fadeout', o8)), oA(jO, 'defaultDepth', -0x1869f), oA(jO, 'defaultSprite', 'spr_pixel_white');
var jc = jO,
  jN = class Xq extends o8 {
    ["create"]() {
      this.image_blend = o4.black, this.fadespeed = -0.08, this.image_alpha = 0x1, this.length = 0xa + Mp / 0x4, this.height = 0xa + MC / 0x4, this.x = -0x14, this.y = -0x14;
    }
    ["draw"](PV) {
      this.image_alpha += this.fadespeed, PV.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.length, this.height, 0x0, this.image_blend, this.image_alpha), this.image_alpha <= 0x0 && this.instance_destroy();
    }
  };
oH(jN, 'obj_persistentfadein'), oA(jN, 'kinds', oM('obj_persistentfadein', o8)), oA(jN, 'defaultDepth', -0x1869f), oA(jN, 'defaultSprite', 'spr_pixel_white');
var jg = jN,
  jB = class Xu extends o8 {
    ["create"]() {
      this.panx = 0x0, this.pany = 0x0, this.panmax = 0x1, this.pantimer = 0x0, Ig.plot < 0xb && (this.pantimer = -0x1);
    }
    ["step"]() {
      MY('XView', 0x0, MD('XView', 0x0) + this.panx), MY('YView', 0x0, MD('YView', 0x0) + this.pany), this.pantimer += 0x1, this.pantimer >= this.panmax && this.instance_destroy();
    }
  };
oH(jB, 'obj_panner'), oA(jB, 'kinds', oM('obj_panner', o8)), oA(jB, 'defaultDepth', 0x0);
var jL = jB,
  jU = {
    0x0: (PV, PD) => {
      PV.btimer >= PV.timermax * PV.ratio && (PV.btimer = 0x0, PV.dir = 0x1e + o7(0x78), PV.radius = 0x8c + o7(0x50), PV.xx = oy(PV.radius, PV.dir), PV.yy = om(PV.radius, PV.dir), PV.bm = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y7), PV.bm.y < 0x28 && (PV.bm.y = 0x28), PV.bm.damage = PV.damage, PV.bm.target = PV.target);
    },
    0x1: (PV, PD) => {
      PV.btimer >= 0x9 * PV.ratio && (PV.btimer = 0x0, PV.radius = 0x8c + o7(0x28), PV.yy = PV.radius * PV.side, PV.xx = -0x64 + o7(0xc8), PV.num = oI(0x0, 0x1, 0x2, 0x3), PV.num === 0x3 && (PV.xx = -0xa + o7(0x14)), PV.d = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y9), PV.d.damage = PV.damage, PV.d.target = PV.target);
    },
    0x2: (PV, PD) => {
      PV.btimer >= 0x14 * PV.ratio && (PV.xx = -0x14, PV.side === 0x1 && (PV.xx = 0x294), PV.yy = PV.miny + o7(PV.maxy - PV.miny), PV.bul = oV('instance_create').call(PV, PV.xx, PV.yy, y3), PV.bul.speed = 0xc, PV.bul.damage = PV.damage, PV.bul.target = PV.target, PV.side === 0x1 && (PV.bul.direction = 0xb4, PV.bul.image_angle = 0xb4), PV.btimer = 0x0);
    },
    0x3: (PV, PD) => {
      PV.btimer >= 0x14 * PV.ratio && (PV.btimer = 0x0, PV.side === 0x1 && (PV.dir = oI(0xe1, 0x13b)), PV.side === -0x1 && (PV.dir = oI(0x2d, 0x87)), PV.radius = 0x190, PV.xx = oy(PV.radius, PV.dir), PV.yy = om(PV.radius, PV.dir), PV.d = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y5), PV.d.direction = PV.dir + 0xb4, PV.d.speed = 0x14, PV.d.friction = 0x1, PV.d.damage = PV.damage, PV.d.target = PV.target, oD(PV.d, PY => {
        PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1);
    },
    0x4: (PV, PD) => {
      PV.btimer >= 0x1e * PV.ratio && (PV.btimer = 0x0, PV.side === -0x1 && (PV.dir = 0xe1), PV.side === 0x1 && (PV.dir = 0x13b), PV.radius = 0x190, PV.xx = oy(PV.radius, PV.dir), PV.yy = om(PV.radius, PV.dir), PV.d = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y5), PV.d.damage = PV.damage, PV.d.target = PV.target, PV.d.direction = PV.dir + 0xb4, PV.d.speed = 0x14, PV.d.friction = 0x1, oD(PV.d, PY => {
        PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1);
    },
    0x6: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made === 0x0 && (PV.d = oV('instance_create').call(PV, 0x12c + PV.xx, -0x14 + PV.yy, yy), PV.e = oV('instance_create').call(PV, 0x168 + PV.xx, -0x3c + PV.yy, yy), PV.d.target = PV.target, PV.d.damage = PV.damage, PV.e.target = PV.target, PV.e.damage = PV.damage, PV.made = 0x1);
    },
    0x7: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made < 0x3 && PV.btimer >= 0xf && (PV.btimer = 0x0, PV.mine = oV('instance_create').call(PV, 0x12c + PV.xx, -0x14 + PV.yy, yy), PV.mine.damage = PV.damage, PV.mine.target = PV.target, oW.with('obj_dicebul', PY => {
        PY.gravity = 0.15 + PY.gravbonus, PY.image_xscale = 0x1, PY.image_yscale = 0x1;
      }), PV.made += 0x1);
    },
    0x8: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made < 0x4 && PV.btimer >= 0xf && (PV.btimer = 0x0, PV.mine = oV('instance_create').call(PV, 0x12c + PV.xx, PV.yy - 0x28, yy), PV.mine.damage = PV.damage, PV.mine.target = PV.target, oD(PV.mine, PY => {
        PY.hspeed = 1.2 + o7(1.2), PY.hspeed *= oI(-0x1, 0x1), PY.gravbonus = o7(0.1), PY.gravity = 0.15 + PY.gravbonus, PY.image_xscale = 0.7, PY.image_yscale = 0.7;
      }), PV.made += 0x1);
    },
    0xa: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.btimer >= 0xf && (PV.btimer = 0x0, PV.dicecomet = oV('instance_create').call(PV, oI(PV.xx + 0x2a8, PV.xx - 0x64), 0x0 - o7(0x64), yy), PV.dicecomet.damage = PV.damage, PV.dicecomet.target = PV.target, oD(PV.dicecomet, PY => {
        PY.image_xscale = 0x2, PY.image_yscale = 0x2, PY.x > 0x140 ? PY.hspeed = -0x6 - o7(0x1) : PY.hspeed = 0x6 + o7(0x1), PY.vspeed = 0x2 + o7(0x2);
      }));
    },
    0xb: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made < 0x4 && PV.btimer >= 0xf && (PV.btimer = 0x0, PV.bb = oV('instance_create').call(PV, 0x12c + PV.xx, -0x14 + PV.yy, yy), PV.bb.damage = PV.damage, PV.bb.target = PV.target, oW.with('obj_dicebul', PY => {
        PY.gravity = 0.15 + PY.gravbonus, PY.image_xscale = 0x1, PY.image_yscale = 0x1;
      }), PV.made === 0x3 && oD(PV.bb, PY => {
        PY.green = 0x1, PY.image_blend = o4.lime;
      }), PV.made += 0x1);
    },
    0xc: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made === 0x0 && (PV.db = oV('instance_create').call(PV, 0x140 + PV.xx, -0x14 + PV.yy, yy), PV.db.image_xscale = 0x1, PV.db.image_yscale = 0x1, PV.db.damage = PV.damage, PV.db.target = PV.target, PV.made = 0x1);
    },
    0xd: (PV, PD) => {
      PV.xx = 0x0, PV.yy = 0x0, PV.made < 0x2 && PV.btimer >= 0x14 && ((PV.db ??= [])[PV.made] = oV('instance_create').call(PV, 0x140 + PV.xx, -0x14 + PV.yy, yy), PV.db[PV.made].image_xscale = 0x1, PV.db[PV.made].image_yscale = 0x1, PV.db[PV.made].damage = PV.damage, PV.db[PV.made].target = PV.target, PV.made === 0x1 && (oD(PV.db[0x1], PY => {
        PY.green = 0x1, PY.image_blend = o4.lime;
      }), PV.db[0x1].hspeed = -PV.db[0x0].hspeed), PV.made += 0x1);
    },
    0xe: (PV, PD) => {
      PV.btimer >= 0xa && (PV.xx = -0x14, PV.side === 0x1 && (PV.xx = 0x294), PV.yy = PV.miny + o7(PV.maxy - PV.miny), PV.bul = oV('instance_create').call(PV, PV.xx, PV.yy, I3), PV.bul.sprite_index = 'spr_smallbullet', PV.bul.hspeed = -0x8, PV.bul.damage = PV.damage, PV.bul.target = PV.target, PV.side === 0x1 && (PV.bul.direction = 0xb4, PV.bul.image_angle = 0xb4), PV.btimer = 0x0);
    },
    0x14: (PV, PD) => {
      Ix(IJ(jM)) && (PV.made === 0x0 && (oV('snd_play').call(PV, 'snd_lancerwhistle'), PV.whistletimer = 0x0, PV.made = 0x1, oW.with('obj_lancerboss3', PY => {
        PY.idlesprite = 'spr_lancerbike_l';
      })), PV.made === 0x1 && (PV.whistletimer += 0x1, PV.whistletimer >= 0x1e && (oW.with('obj_lancerboss3', PY => {
        PY.idlesprite = 'spr_lancerbike';
      }), PV.made = 0x2))), PV.type === 0x14 && (PV.bmax = 0x8), PV.type === 0x16 && (PV.bmax = 0x6), PV.btimer >= PV.bmax && (PV.radius = -0x50 + o7(0xa0) + 0x8, PV.fallspade = oV('instance_create').call(PV, MO('obj_heart').x + PV.radius, -0x14, I3), PV.fallspade.damage = PV.damage, PV.fallspade.target = PV.target, oD(PV.fallspade, PY => {
        PY.sprite_index = 'spr_spadebullet', PY.image_angle = 0x10e, PY.gravity = 0.3, PY.speed = 0x0, PY.vspeed = 0x3, PY.hspeed = -0.6 + o7(1.2);
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x15: (PV, PD) => {
      PV.type === 0x15 && (PV.bmax = 0x9), PV.type === 0x17 && (PV.bmax = 0x7), PV.type === 0x19 && (PV.bmax = 0x4), oW.with('obj_regularbullet', PY => {
        PY.image_alpha += 0.2;
      }), PV.btimer >= PV.bmax && (PV.side === 0x0 ? PV.radius = 0x50 : PV.radius = 0x230, (PV.sidespade ??= [])[PV.side] = oV('instance_create').call(PV, 0x0 + PV.radius, MO('obj_growtangle').y - MO('obj_growtangle').sprite_height / 0x2 + o7(MO('obj_growtangle').sprite_height), I3), PV.side === 0x0 && (PV.sidespade[PV.side].direction = 0x0), PV.side === 0x1 && (PV.sidespade[PV.side].direction = 0xb4), PV.sidespade[PV.side].image_alpha = 0x0, PV.sidespade[PV.side].damage = PV.damage, PV.sidespade[PV.side].target = PV.target, oD(PV.sidespade[PV.side], PY => {
        PY.sprite_index = 'spr_spadebullet', PY.speed = 0x5, PY.friction = -0.1, PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = 0x0 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x16: (PV, PD) => {
      Ix(IJ(jM)) && (PV.made === 0x0 && (oV('snd_play').call(PV, 'snd_lancerwhistle'), PV.whistletimer = 0x0, PV.made = 0x1, oW.with('obj_lancerboss3', PY => {
        PY.idlesprite = 'spr_lancerbike_l';
      })), PV.made === 0x1 && (PV.whistletimer += 0x1, PV.whistletimer >= 0x1e && (oW.with('obj_lancerboss3', PY => {
        PY.idlesprite = 'spr_lancerbike';
      }), PV.made = 0x2))), PV.type === 0x14 && (PV.bmax = 0x8), PV.type === 0x16 && (PV.bmax = 0x6), PV.btimer >= PV.bmax && (PV.radius = -0x50 + o7(0xa0) + 0x8, PV.fallspade = oV('instance_create').call(PV, MO('obj_heart').x + PV.radius, -0x14, I3), PV.fallspade.damage = PV.damage, PV.fallspade.target = PV.target, oD(PV.fallspade, PY => {
        PY.sprite_index = 'spr_spadebullet', PY.image_angle = 0x10e, PY.gravity = 0.3, PY.speed = 0x0, PY.vspeed = 0x3, PY.hspeed = -0.6 + o7(1.2);
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x17: (PV, PD) => {
      PV.type === 0x15 && (PV.bmax = 0x9), PV.type === 0x17 && (PV.bmax = 0x7), PV.type === 0x19 && (PV.bmax = 0x4), oW.with('obj_regularbullet', PY => {
        PY.image_alpha += 0.2;
      }), PV.btimer >= PV.bmax && (PV.side === 0x0 ? PV.radius = 0x50 : PV.radius = 0x230, (PV.sidespade ??= [])[PV.side] = oV('instance_create').call(PV, 0x0 + PV.radius, MO('obj_growtangle').y - MO('obj_growtangle').sprite_height / 0x2 + o7(MO('obj_growtangle').sprite_height), I3), PV.side === 0x0 && (PV.sidespade[PV.side].direction = 0x0), PV.side === 0x1 && (PV.sidespade[PV.side].direction = 0xb4), PV.sidespade[PV.side].image_alpha = 0x0, PV.sidespade[PV.side].damage = PV.damage, PV.sidespade[PV.side].target = PV.target, oD(PV.sidespade[PV.side], PY => {
        PY.sprite_index = 'spr_spadebullet', PY.speed = 0x5, PY.friction = -0.1, PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = 0x0 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x18: (PV, PD) => {
      PV.bmax = PV.difficulty + 0x5, oW.with('obj_regularbullet', PY => {
        Ix(IJ(yH)) && (PY.xdiff = PY.x - (MO('obj_heart').x + 0x8), PY.y >= MO('obj_heart').y - 0xf0 && IL(PY.xdiff) <= 0x1e && (PY.xdiff >= 0x0 && PY.hspeed < 0x5 && (PY.hspeed += 0.4), PY.xdiff < 0x0 && PY.hspeed > -0x5 && (PY.hspeed -= 0.4)), PY.y >= MO('obj_heart').y - 0x64 && IL(PY.xdiff) <= 0x3c && (PY.xdiff >= 0x0 ? (PY.hspeed < 0x2 && (PY.hspeed += 0.25), PY.xdiff < 0xa && (PY.x += 0x3), PY.xdiff < 0x14 && (PY.x += 0x3), PY.xdiff < 0x1e && (PY.x += 0x3), PY.xdiff < 0x28 && (PY.x += 0x2), PY.xdiff < 0x3c && (PY.x += 0x1)) : (PY.hspeed > -0x2 && (PY.hspeed -= 0.25), PY.xdiff > -0xa && (PY.x -= 0x3), PY.xdiff > -0x14 && (PY.x -= 0x3), PY.xdiff > -0x1e && (PY.x -= 0x3), PY.xdiff > -0x28 && (PY.x -= 0x2), PY.xdiff > -0x3c && (PY.x -= 0x1))));
      }), PV.btimer >= PV.bmax && (PV.radius = -0x50 + o7(0xa0) + 0x8, PV.fallspade = oV('instance_create').call(PV, MO('obj_heart').x + PV.radius, -0x14, I3), PV.fallspade.damage = PV.damage, PV.fallspade.target = PV.target, oD(PV.fallspade, PY => {
        PY.sprite_index = 'spr_spadebullet', PY.image_angle = 0x10e, PY.gravity = 0.3, PY.speed = 0x0, PY.vspeed = 0x3, PY.hspeed = -0.6 + o7(1.2);
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x19: (PV, PD) => {
      PV.type === 0x15 && (PV.bmax = 0x9), PV.type === 0x17 && (PV.bmax = 0x7), PV.type === 0x19 && (PV.bmax = 0x4), oW.with('obj_regularbullet', PY => {
        PY.image_alpha += 0.2;
      }), PV.btimer >= PV.bmax && (PV.side === 0x0 ? PV.radius = 0x50 : PV.radius = 0x230, (PV.sidespade ??= [])[PV.side] = oV('instance_create').call(PV, 0x0 + PV.radius, MO('obj_growtangle').y - MO('obj_growtangle').sprite_height / 0x2 + o7(MO('obj_growtangle').sprite_height), I3), PV.side === 0x0 && (PV.sidespade[PV.side].direction = 0x0), PV.side === 0x1 && (PV.sidespade[PV.side].direction = 0xb4), PV.sidespade[PV.side].image_alpha = 0x0, PV.sidespade[PV.side].damage = PV.damage, PV.sidespade[PV.side].target = PV.target, oD(PV.sidespade[PV.side], PY => {
        PY.sprite_index = 'spr_spadebullet', PY.speed = 0x5, PY.friction = -0.1, PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = 0x0 : PV.side = 0x1, PV.btimer = 0x0);
    },
    0x1a: (PV, PD) => {
      if (oW.with('obj_regularbullet', PY => {
        PY.sprite_index === 'spr_blockbullet' && (PY.image_alpha += 0.1);
      }), PV.timer = 0x23, oV('scr_monsterpop').call(PV) === 0x2 && (PV.timer = 52.5), oV('scr_monsterpop').call(PV) === 0x3 && (PV.timer = 0x4d), PV.btimer >= PV.timer) {
        for (PV.x_c = 0x12c, PV.y_c = 0x8c, PV.x_o = 0xc8, PV.y_o = -0x3c, PV.y_o_o = -0x50 + o7(0xa0), PV.y_o += PV.y_o_o, PV.v_s = -PV.y_o_o / 0xa0, PV.h_s = -0x2, PV.i = 0x0; PV.i < 0x2; PV.i += 0x1) for (PV.upallow = oI(0x0, 0x1, 0x2), PV.rightallow = oI(0x0, 0x1, 0x2), PV.j = 0x0; PV.j < 0x2; PV.j += 0x1) ((PV.bul ??= [])[PV.i] ??= [])[PV.j] = oV('instance_create').call(PV, PV.x_c + PV.x_o + PV.i * 0x50, PV.y_c + PV.y_o + PV.j * 0x50, I3), oV('scr_bullet_inherit').call(PV, PV.bul[PV.i][PV.j]), PV.j === PV.upallow && (PV.bul[PV.i][PV.j].y += oI(0x0, 0x28)), PV.i === 0x1 && PV.j === 0x1 && (PV.bul[PV.i][PV.j].x += oI(0x0, -0x28), PV.bul[PV.i][PV.j].y = PV.y_c + PV.y_o + oI(0x0, 0x28) + PV.j * 0x50), PV.bul[PV.i][PV.j].hspeed = PV.h_s, PV.bul[PV.i][PV.j].vspeed = PV.v_s, PV.bul[PV.i][PV.j].friction = -0.07, oV('scr_monsterpop').call(PV) >= 0x2 && (PV.bul[PV.i][PV.j].friction = -0.1), PV.bul[PV.i][PV.j].sprite_index = 'spr_blockbullet', PV.bul[PV.i][PV.j].image_alpha = 0x0;
        PV.btimer = 0x0;
      }
    },
    0x1b: (PV, PD) => {
      PV.timer = 0xf, oV('scr_monsterpop').call(PV) === 0x2 && (PV.timer = 25.5), oV('scr_monsterpop').call(PV) === 0x3 && (PV.timer = 34.5), PV.lx = MO('obj_battlesolid').x - MO('obj_battlesolid').sprite_width / 0x2 + 0x8, PV.ly = MO('obj_battlesolid').y + MO('obj_battlesolid').sprite_height / 0x2 - 0xf, PV.btimer >= PV.timer && (PV.prevmade = PV.made, PV.made = oI(0x0, 0x1, 0x2, 0x3), PV.made === PV.prevmade && (PV.made = oI(0x0, 0x1, 0x2, 0x3)), PV.btimer = 0x0, PV.block = oV('instance_create').call(PV, 0x64, 0x64, oO), PV.block.xpos = PV.made, oV('scr_bullet_inherit').call(PV, PV.block), PV.testblock = o0(PV.lx + PV.made * PV.block.sprite_width + 0x8, PV.ly - PV.block.sprite_height * 0x3 - 0xa, oO, 0x0, 0x1), PV.testblock > 0x1 && PV.testblock.halt === 0x1 && oD(PV.block, PY => {
        PY.instance_destroy();
      })), PV.legoa = o0(PV.lx + 0xf, PV.ly, oO, 0x0, 0x1), PV.legob = o0(PV.lx + 0xf + 0x22, PV.ly, oO, 0x0, 0x1), PV.legoc = o0(PV.lx + 0xf + 0x44, PV.ly, oO, 0x0, 0x1), PV.legod = o0(PV.lx + 0xf + 0x66, PV.ly, oO, 0x0, 0x1), PV.legoa > 0x1 && PV.legob > 0x1 && PV.legoc > 0x1 && PV.legod > 0x1 && (oD(PV.legoa, PY => {
        PY.con = 0x3;
      }), oD(PV.legob, PY => {
        PY.con = 0x3;
      }), oD(PV.legoc, PY => {
        PY.con = 0x3;
      }), oD(PV.legod, PY => {
        PY.con = 0x3;
      }));
    },
    0x1e: (PV, PD) => {
      PV.bmax = 0x22, oV('scr_monsterpop').call(PV) === 0x2 && (PV.bmax = 0x2e), oV('scr_monsterpop').call(PV) === 0x3 && (PV.bmax = 0x3c), PV.btimer >= PV.bmax && (PV.rab = oV('instance_create').call(PV, MO('obj_battlesolid').x + MO('obj_battlesolid').sprite_width, MO('obj_battlesolid').y, yx), oV('scr_bullet_inherit').call(PV, PV.rab), PV.btimer = 0x0);
    },
    0x20: (PV, PD) => {
      PV.skiprab = 0x0, Ix(IJ(oa)) && (PV.skiprab = 0x1, PV.type = 0x1e), PV.made === 0x0 && PV.skiprab === 0x0 && (PV.made = 0x1, PV.rab = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, oa), oV('scr_bullet_inherit').call(PV, PV.rab), PV.instance_destroy());
    },
    0x21: (PV, PD) => {
      PV.btimer >= 0x1a * PV.ratio && (PV.hs = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, yS), PV.hs.maxradius = 0x32, PV.hs.type = 0x1, PV.btimer = 0x0, PV.hs.thisx = MO('obj_battlesolid').x - 0x32 + o7(0x64), PV.hs.thisy = MO('obj_battlesolid').y - 0x32 + o7(0x64), oV('scr_bullet_inherit').call(PV, PV.hs));
    },
    0x22: (PV, PD) => {
      PV.btimer >= 0x1c && (PV.typechoice = oI(0x0, 0x1, 0x2, 0x3), PV.xx = 0x0, PV.yy = 0x0, (PV.typechoice === 0x0 || PV.typechoice === 0x3) && (PV.xx = 0x140 + o7(0x12c) - o7(0x12c), PV.yy = -0x3c), PV.typechoice === 0x1 && (PV.xx = -0x3c, PV.yy = o7(0x140)), PV.typechoice === 0x2 && (PV.xx = 0x2bc, PV.yy = o7(0x140)), PV.chain = oV('instance_create').call(PV, PV.xx, PV.yy, yl), oV('scr_bullet_inherit').call(PV, 0xff), PV.btimer = 0x0);
    },
    0x23: (PV, PD) => {
      PV.btimer >= 0x16 && (PV.typechoice = oI(0x0, 0x1, 0x2, 0x3), PV.xx = 0x0, PV.yy = 0x0, (PV.typechoice === 0x0 || PV.typechoice === 0x3) && (PV.xx = 0x140 + o7(0x12c) - o7(0x12c), PV.yy = -0x3c), PV.typechoice === 0x1 && (PV.xx = -0x3c, PV.yy = o7(0x140)), PV.typechoice === 0x2 && (PV.xx = 0x2bc, PV.yy = o7(0x140)), PV.chain = oV('instance_create').call(PV, PV.xx, PV.yy, yl), oV('scr_bullet_inherit').call(PV, PV.chain), PV.btimer = 0x0);
    },
    0x24: (PV, PD) => {
      PV.btimer >= 0x10 && (PV.typechoice = oI(0x0, 0x1, 0x2, 0x3), PV.xx = 0x0, PV.yy = 0x0, (PV.typechoice === 0x0 || PV.typechoice === 0x3) && (PV.xx = 0x140 + o7(0x12c) - o7(0x12c), PV.yy = -0x3c), PV.typechoice === 0x1 && (PV.xx = -0x3c, PV.yy = o7(0x140)), PV.typechoice === 0x2 && (PV.xx = 0x2bc, PV.yy = o7(0x140)), PV.chain = oV('instance_create').call(PV, PV.xx, PV.yy, yl), oV('scr_bullet_inherit').call(PV, PV.chain), PV.btimer = 0x0);
    },
    0x2d: (PV, PD) => {
      PV.btimer >= 0x12 && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type === 0x2 && (PV.bomb.type = oI(0x0, 0x1, 0x2, 0x3)), PV.btimer = 0x0);
    },
    0x2e: (PV, PD) => {
      PV.btimer >= 0xc && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type === 0x2 && (PV.bomb.type = oI(0x0, 0x1, 0x2, 0x3)), PV.btimer = 0x0);
    },
    0x2f: (PV, PD) => {
      PV.btimer >= 0xc && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type = 0x1, PV.btimer = 0x0);
    },
    0x30: (PV, PD) => {
      PV.btimer >= 0xc && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type = 0x0, PV.btimer = 0x0);
    },
    0x31: (PV, PD) => {
      PV.btimer >= 0x14 && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type = 0x2, PV.btimer = 0x0);
    },
    0x32: (PV, PD) => {
      PV.btimer >= 0xc && (PV.xx = oI(0x0, 0x1), PV.basex = 0x140, Ix(IJ(yW)) && (PV.basex = MO('obj_growtangle').x), PV.xx === 0x0 && (PV.idealx = PV.basex - 0xb4 - o7(0x64)), PV.xx === 0x1 && (PV.idealx = PV.basex + 0xb4 + o7(0x64)), PV.bomb = oV('instance_create').call(PV, PV.idealx, -0x14, E4), oV('scr_bullet_inherit').call(PV, PV.bomb), PV.bomb.type = 0x3, PV.btimer = 0x0);
    },
    0x37: (PV, PD) => {
      PV.btimer >= 0x28 && PV.made === 0x0 && (PV.btimer = 0x0, PV.made = 0x1, PV.scythe = oV('instance_create').call(PV, MO('obj_battlesolid').x - 0xc8, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(PV, PV.scythe), PV.scythe.image_angle = 0x10e + o7(0x78));
    },
    0x38: (PV, PD) => {
      PV.btimer >= 0x1d && PV.made === 0x0 && (PV.btimer = 0x0, PV.xchoose = oI(-0xfa), PV.scythe = oV('instance_create').call(PV, MO('obj_battlesolid').x + PV.xchoose, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(PV, PV.scythe), PV.scythe.image_angle = o7(0x5a), PV.scythe.type = 0x3, PV.scythe.friction = -0.25, PV.xchoose > 0x0 && (PV.scythe.hspeed = -0x1), PV.xchoose < 0x0 && (PV.scythe.hspeed = 0x1));
    },
    0x39: (PV, PD) => {
      PV.btimer >= 0x28 && PV.made === 0x0 && (PV.btimer = 0x0, PV.made = 0x1, PV.scythe = oV('instance_create').call(PV, MO('obj_battlesolid').x - 0x8c, MO('obj_battlesolid').y, oC), oV('scr_bullet_inherit').call(PV, PV.scythe), PV.scythe.anglespeed = -0xc, PV.scythe.image_angle = 0x10e + o7(0x78));
    },
    0x3a: (PV, PD) => {
      PV.btimer >= 0x28 && PV.made === 0x0 && (PV.btimer = 0x0, PV.made = 0x1, PV.scythe = oV('instance_create').call(PV, MO('obj_battlesolid').x - 0x96, MO('obj_battlesolid').y, oC), PV.scythe.anglespeed = -0x11, PV.scythe.image_angle = 0x10e + o7(0x78));
    },
    0x3c: (PV, PD) => {
      if (PV.btimer >= 0x28 && PV.made === 0x0) {
        for (PV.btimer = 0x0, PV.made = 0x1, PV.i = 0x0; PV.i < 0x3; PV.i += 0x1) for (PV.j = 0x0; PV.j < 0x7; PV.j += 0x1) PV.horse1 = oV('instance_create').call(PV, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + PV.i * 0x50, oN), PV.horse1.siner = PV.j * 0x12, PV.horse1.vsin = PV.j * 0x9, oV('scr_bullet_inherit').call(PV, PV.horse1);
      }
    },
    0x3d: (PV, PD) => {
      if (PV.btimer >= 0x28 && PV.made === 0x0) for (PV.btimer = 0x0, PV.made = 0x1, PV.horse = 0x0, PV.vseed = o7(0x12c), PV.j = 0x0; PV.j < 0x3; PV.j += 0x1) {
        for (PV.i = 0x0; PV.i < 0x3; PV.i += 0x1) PV.horse1 = oV('instance_create').call(PV, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + PV.i * 0x50, oN), PV.horse1.siner = PV.j * 0x2a, PV.horse1.vsin = 0x0 + PV.vseed, PV.horse1.image_index = 0x0, PV.horse1.altmode = 0x2, PV.horse1.sinspeed = 1.1, oV('scr_bullet_inherit').call(PV, PV.horse1), PV.horse1 = oV('instance_create').call(PV, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + PV.i * 0x50, oN), PV.horse1.siner = PV.j * 0x2a + 0x15, PV.horse1.vsin = 0x0 + PV.vseed, PV.horse1.image_index = 0x1, PV.horse1.altmode = 0x1, PV.horse1.sinspeed = 1.1, oV('scr_bullet_inherit').call(PV, PV.horse1), PV.chance = oq(o7(0x32)), PV.chance === 0x1 && (PV.horse1.image_index = 0x2);
        PV.horse === 0x0 ? PV.horse = 0x1 : PV.horse = 0x0;
      }
    },
    0x3e: (PV, PD) => {
      if (PV.btimer >= 0x28 && PV.made === 0x0) {
        for (PV.btimer = 0x0, PV.made = 0x1, PV.i = 0x0; PV.i < 0x3; PV.i += 0x1) for (PV.j = 0x0; PV.j < 0x7; PV.j += 0x1) PV.horse1 = oV('instance_create').call(PV, MO('obj_battlesolid').x + 0x96, MO('obj_battlesolid').y - 0x50 + PV.i * 0x50, oN), PV.horse1.siner = PV.j * 0x12, PV.horse1.vsin = PV.j * 0x9, PV.horse1.sinspeed = 1.15, PV.horse1.altmode = 0x3, oV('scr_bullet_inherit').call(PV, PV.horse1);
      }
    },
    0x41: (PV, PD) => {
      PV.btimer >= 0x3c && (PV.ring = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), PV.ring.maxspade = 0xa, PV.ring.grav = 0.4, oV('scr_bullet_inherit').call(PV, PV.ring), PV.btimer = 0x0);
    },
    0x42: (PV, PD) => {
      PV.btimer >= 0x1e && (PV.ring = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), PV.ring.maxspade = 0x6, PV.ring.grav = 0x3, PV.ring.size = 1.5, oV('scr_bullet_inherit').call(PV, PV.ring), PV.btimer = 0x0);
    },
    0x43: (PV, PD) => {
      PV.btimer >= 0x14 && (PV.ring = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), PV.ring.grav = 0.2, PV.ring.maxspade = 0x4, PV.ring.special = 0x1, oV('scr_bullet_inherit').call(PV, PV.ring), PV.btimer = 0x0);
    },
    0x44: (PV, PD) => {
      oW.with('obj_heart', PY => {
        PY.wspeed = 0x5;
      }), PV.btimer >= 0x36 && (PV.ring = oV('instance_create').call(PV, MO('obj_battlesolid').x, MO('obj_battlesolid').y, E0), PV.ring.side = oI(0x0, 0x1), PV.ring.grav = 0.45, PV.ring.maxspade = 0xa, oV('scr_bullet_inherit').call(PV, PV.ring), PV.btimer = 0x0);
    },
    0x46: (PV, PD) => {
      PV.btimer >= 0x14 && Ig.turntimer >= 0x1e && (PV.jokerx = oI(MO('obj_battlesolid').x - 0x64 - o7(0x64), MO('obj_battlesolid').x + 0x64 + o7(0x64)), PV.jokery = oI(MO('obj_battlesolid').y - o7(0x64), MO('obj_battlesolid').y + o7(0x64)), PV.jokern = oV('instance_create').call(PV, PV.jokerx, PV.jokery, yb), PV.jokern.type = 0x1, oV('scr_bullet_inherit').call(PV, PV.jokern), PV.jokern.active = 0x0, PV.btimer = 0x0);
    },
    0x47: (PV, PD) => {
      PV.btimer >= 0x9 && Ig.turntimer >= 0x14 && (PV.jokerx = oI(MO('obj_battlesolid').x - 0x64 - o7(0x64), MO('obj_battlesolid').x + 0x64 + o7(0x64)), PV.jokery = oI(MO('obj_battlesolid').y - o7(0x64), MO('obj_battlesolid').y + o7(0x64)), PV.jokern = oV('instance_create').call(PV, PV.jokerx, PV.jokery, yb), oV('scr_bullet_inherit').call(PV, PV.jokern), PV.jokern.active = 0x0, PV.btimer = 0x0);
    },
    0x48: (PV, PD) => {
      PV.btimer >= 0x12 && (PV.btimer = 0x0, PV.side === 0x1 && (PV.dir = oI(0xe1, 0x13b)), PV.side === -0x1 && (PV.dir = oI(0x2d, 0x87)), PV.radius = 0x168, PV.xx = oy(PV.radius, PV.dir), PV.yy = om(PV.radius, PV.dir), PV.d = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y5), PV.d.direction = PV.dir + 0xb4, PV.d.speed = 0x14, PV.d.friction = 0x1, PV.d.type = 0x2, PV.d.damage = PV.damage, PV.d.target = PV.target, oD(PV.d, PY => {
        PY.image_angle = PY.direction;
      }), PV.side === 0x1 ? PV.side = -0x1 : PV.side = 0x1);
    },
    0x49: (PV, PD) => {
      PV.btimer >= 0x4 && (PV.btimer = 0x0, PV.radius = 0x8c + o7(0x28), PV.yy = PV.radius * PV.side, PV.xx = -0x64 + o7(0xc8), PV.num = oI(0x0, 0x1, 0x2, 0x3), PV.num === 0x3 && (PV.xx = -0xa + o7(0x14)), Ix(IJ(Iq)) && (PV.db = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_battlesolid').y + 0x64, y9), oD(PV.db, PY => {
        PY.type = 0x1;
      }), PV.db.damage = PV.damage, PV.db.target = PV.target, PV.db.timepoints = 0x2));
    },
    0x4a: (PV, PD) => {
      PV.btimer >= 0x9 && (PV.btimer = 0x0, PV.radius = 0x8c + o7(0x28), PV.yy = PV.radius * PV.side, PV.xx = -0x64 + o7(0xc8), PV.num = oI(0x0, 0x1, 0x2, 0x3), PV.num === 0x3 && (PV.xx = -0xa + o7(0x14)), PV.d = oV('instance_create').call(PV, MO('obj_heart').x + 0x8 + PV.xx, MO('obj_heart').y + 0x8 + PV.yy, y9), PV.d.grazepoints = 0xc, PV.d.timepoints = 0x2, PV.d.damage = PV.damage, PV.d.target = PV.target);
    },
    0x4b: (PV, PD) => {
      if (PV.btimer >= 0x0 && PV.special === 0x0) {
        oV('snd_play').call(PV, 'snd_spearappear'), PV.scythe = oV('instance_create').call(PV, 0x0, 0x0, oL);
        {
          let PY = PV.damage;
          oW.with('obj_centerscythe', Pw => {
            Pw.damage = PY;
          });
        }
        {
          let Pw = PV.grazepoints;
          oW.with('obj_centerscythe', Pp => {
            Pp.grazepoints = Pw;
          });
        }
        {
          let Pp = PV.timepoints;
          oW.with('obj_centerscythe', PL => {
            PL.timepoints = Pp;
          });
        }
        {
          let PL = PV.inv;
          oW.with('obj_centerscythe', PU => {
            PU.inv = PL;
          });
        }
        {
          let PU = PV.target;
          oW.with('obj_centerscythe', Pf => {
            Pf.target = PU;
          });
        }
        oW.with('obj_centerscythe', Pf => {
          Pf.grazed = 0x0;
        }), oW.with('obj_centerscythe', Pf => {
          Pf.grazetimer = 0x0;
        }), PV.special = 0x1;
      }
    },
    0x4c: (PV, PD) => {
      if (PV.btimer >= 0x0 && PV.special === 0x0) {
        oV('snd_play').call(PV, 'snd_spearappear'), PV.scythe = oV('instance_create').call(PV, 0x0, 0x0, oL);
        {
          let PY = PV.damage;
          oW.with('obj_centerscythe', Pw => {
            Pw.damage = PY;
          });
        }
        {
          let Pw = PV.grazepoints;
          oW.with('obj_centerscythe', Pp => {
            Pp.grazepoints = Pw;
          });
        }
        {
          let Pp = PV.timepoints;
          oW.with('obj_centerscythe', PL => {
            PL.timepoints = Pp;
          });
        }
        {
          let PL = PV.inv;
          oW.with('obj_centerscythe', PU => {
            PU.inv = PL;
          });
        }
        {
          let PU = PV.target;
          oW.with('obj_centerscythe', Pf => {
            Pf.target = PU;
          });
        }
        oW.with('obj_centerscythe', Pf => {
          Pf.grazed = 0x0;
        }), oW.with('obj_centerscythe', Pf => {
          Pf.grazetimer = 0x0;
        }), PV.special = 0x1;
      }
    },
    0x4d: (PV, PD) => {
      Ig.sp = 0xa, oW.with('obj_heart', PY => {
        PY.wspeed = 0xa;
      }), PV.special === 0x0 && (oV('snd_play').call(PV, 'snd_joker_byebye'), PV.prevmake = 0x0, PV.special = 0x1, PV.rank = 0x10, PV.realtimer = 0x0, PV.chase = 0x0, PV.made = 0x0, PV.amount = 0x0, PV.jokertimer = 0x0, PV.darkfader = oV('scr_dark_marker').call(PV, 0x140, -0xa, 'spr_tallpx'), oD(PV.darkfader, PY => {
        PY.depth = 0x2, PY.image_alpha = 0x0, PY.image_blend = o4.black, PY.image_xscale = 0xc8, PY.image_yscale = 0x2;
      })), PV.realtimer >= 0x0 && PV.realtimer < 0xa && (oD(PV.darkfader, PY => {
        PY.image_alpha += 0.1;
      }), oW.with('obj_battlesolid', PY => {
        PY.image_alpha -= 0.1;
      }), oW.with('obj_heart', PY => {
        PY.y += 0x10, PY.boundaryup = 0xa0;
      })), PV.realtimer === 0xa && oW.with('obj_battlesolid', PY => {
        PY.instance_destroy();
      }), PV.realtimer === 0x14 && oV('instance_create').call(PV, 0x28, -0x3c, yC), PV.realtimer === 0x28 && oV('instance_create').call(PV, 0x23a, -0x3c, yC), PV.realtimer >= 0x3c && PV.amount < 0x1e && PV.btimer >= PV.rank && (PV.rank > 0x7 && (PV.rank -= 0x1), PV.which = oq(o7(0x5)), PV.which === PV.prevmake && (PV.which = oq(o7(0x5))), PV.chase === 0x3 && (PV.which = oq((MO('obj_heart').x + 0x8) / 0x5a), PV.chase = 0x0), PV.scythe = oV('instance_create').call(PV, 0x28 + 0x5a * PV.which, -0x3c, yC), PV.which === 0x1 && (PV.scythe2 = oV('instance_create').call(PV, 0x1ea, -0x3c, yC)), PV.which === 0x0 && (PV.scythe2 = oV('instance_create').call(PV, 0x244, -0x3c, yC)), PV.prevmake = PV.which, PV.btimer = 0x0, PV.chase += 0x1, PV.amount += 0x1), PV.amount >= 0x1d - PV.made && PV.special === 0x1 && (PV.jokertimer = 0x0, PV.jokerin = oV('instance_create').call(PV, 0x140, 0x64, yb), oD(PV.jokerin, PY => {
        PY.type = 0x42, PY.depth = -0x1e;
      }), PV.special = 0x2, PV.which2 = 0x0), PV.special === 0x2 && (PV.jokertimer += 0x1, PV.jokertimer === 0xa && oV('snd_play').call(PV, oV('scr_84_get_sound').call(PV, 'snd_joker_neochaos')), (PV.jokertimer === 0x28 || PV.jokertimer === 0x62) && (PV.scythe = oV('instance_create').call(PV, 0x28, -0x3c, yC), PV.scythe = oV('instance_create').call(PV, 0x244, -0x3c, yC)), (PV.jokertimer === 0x2e || PV.jokertimer === 0x56) && (PV.scythe = oV('instance_create').call(PV, 0x82, -0x3c, yC), PV.scythe = oV('instance_create').call(PV, 0x1ea, -0x3c, yC)), (PV.jokertimer === 0x34 || PV.jokertimer === 0x50) && (PV.scythe = oV('instance_create').call(PV, 0xdc, -0x3c, yC), PV.scythe = oV('instance_create').call(PV, 0x190, -0x3c, yC)), (PV.jokertimer === 0x42 || PV.jokertimer === 0x62) && (PV.scythe = oV('instance_create').call(PV, 0x136, -0x3c, yC)), PV.jokertimer === 0x82 && (PV.lastscythe = oV('instance_create').call(PV, 0x140, -0x140, yC), PV.p = 0x0, PV.vol = 0x0, PV.vol2 = 0x1, PV.rumnoise = o1('snd_rumble', 0x32, 0x1), oD(PV.lastscythe, PY => {
        PY.vspeed = 0x1, PY.gravity = 0.02, PY.image_xscale = 0x10, PY.image_yscale = 0x10, PY.scale = 0x10, PY.rotspeed = 0x0, PY.remrot = 0xa0, PY.image_angle = 0xa0;
      }), PV.fadewhite = oV('instance_create').call(PV, 0x140, -0x28, Ik), PV.fadewhite.sprite_index = 'spr_tallpx', PV.fadewhite.image_xscale = 0x190, PV.fadewhite.image_yscale = 0x2, PV.fadewhite.depth = -0x64, PV.fadewhite.image_alpha = -0.3), PV.jokertimer >= 0x83 && (oD(PV.lastscythe, PY => {
        PY.x = PY.xstart + o7(0x8);
      }), oD(PV.fadewhite, PY => {
        PY.image_alpha += 0.01;
      }), PV.vol += 0.01, PV.fadewhite.image_alpha >= 0x1 && (oD(PV.darkfader, PY => {
        PY.instance_destroy();
      }), oD(PV.lastscythe, PY => {
        PY.instance_destroy();
      })), PV.fadewhite.image_alpha >= 1.3 && (PV.special = 0x3))), PV.special === 0x3 && (oW.with('obj_heart', PY => {
        PY.x = 0x140, PY.y = 0x78;
      }), PV.vol -= 0.1, oo(PV.rumnoise, PV.vol, 0x0), oD(PV.fadewhite, PY => {
        PY.image_alpha -= 0.1;
      }), PV.fadewhite.image_alpha <= 0x0 && (o2(PV.rumnoise), Ig.turntimer = 0xb, PV.special = 0x4)), PV.realtimer += 0x1;
    },
    0x50: (PV, PD) => {
      PV.maxtimer = 0x28, PV.type === 0x51 && (PV.maxtimer = 0x1e), PV.type === 0x52 && (PV.maxtimer = 0x1a), PV.type === 0x53 && (PV.maxtimer = 0x13), PV.type === 0x54 && (PV.maxtimer = 0xe), PV.btimer >= PV.maxtimer && (PV.btimer = 0x0, PV.lx = MO('obj_battlesolid').x, PV.ly = MO('obj_battlesolid').y, PV.side = oI(0x0, 0x1), (PV.type === 0x51 || PV.type === 0x54) && (PV.side = PV.made, PV.made === 0x0 ? PV.made = 0x1 : PV.made = 0x0), PV.side === 0x0 && (PV.puzz1 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly - 0x96, yv), PV.puzz1.side = 0x3, PV.puzz2 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly + 0x96, yv), PV.puzz2.side = 0x1, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz1.timer = 0xf), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.side === 0x1 && (PV.puzz1 = oV('instance_create').call(PV, PV.lx + 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz1.side = 0x2, PV.puzz2 = oV('instance_create').call(PV, PV.lx - 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz2.side = 0x0, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), PV.type === 0x53 && (PV.puzz1.timer = 0xf), PV.type === 0x53 && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.type === 0x53 && oW.with('obj_jigsawbullet', PY => {
        PY.joker = 0x1;
      }));
    },
    0x51: (PV, PD) => {
      PV.maxtimer = 0x28, PV.type === 0x51 && (PV.maxtimer = 0x1e), PV.type === 0x52 && (PV.maxtimer = 0x1a), PV.type === 0x53 && (PV.maxtimer = 0x13), PV.type === 0x54 && (PV.maxtimer = 0xe), PV.btimer >= PV.maxtimer && (PV.btimer = 0x0, PV.lx = MO('obj_battlesolid').x, PV.ly = MO('obj_battlesolid').y, PV.side = oI(0x0, 0x1), (PV.type === 0x51 || PV.type === 0x54) && (PV.side = PV.made, PV.made === 0x0 ? PV.made = 0x1 : PV.made = 0x0), PV.side === 0x0 && (PV.puzz1 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly - 0x96, yv), PV.puzz1.side = 0x3, PV.puzz2 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly + 0x96, yv), PV.puzz2.side = 0x1, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz1.timer = 0xf), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.side === 0x1 && (PV.puzz1 = oV('instance_create').call(PV, PV.lx + 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz1.side = 0x2, PV.puzz2 = oV('instance_create').call(PV, PV.lx - 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz2.side = 0x0, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), PV.type === 0x53 && (PV.puzz1.timer = 0xf), PV.type === 0x53 && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.type === 0x53 && oW.with('obj_jigsawbullet', PY => {
        PY.joker = 0x1;
      }));
    },
    0x52: (PV, PD) => {
      PV.maxtimer = 0x28, PV.type === 0x51 && (PV.maxtimer = 0x1e), PV.type === 0x52 && (PV.maxtimer = 0x1a), PV.type === 0x53 && (PV.maxtimer = 0x13), PV.type === 0x54 && (PV.maxtimer = 0xe), PV.btimer >= PV.maxtimer && (PV.btimer = 0x0, PV.lx = MO('obj_battlesolid').x, PV.ly = MO('obj_battlesolid').y, PV.side = oI(0x0, 0x1), (PV.type === 0x51 || PV.type === 0x54) && (PV.side = PV.made, PV.made === 0x0 ? PV.made = 0x1 : PV.made = 0x0), PV.side === 0x0 && (PV.puzz1 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly - 0x96, yv), PV.puzz1.side = 0x3, PV.puzz2 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly + 0x96, yv), PV.puzz2.side = 0x1, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz1.timer = 0xf), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.side === 0x1 && (PV.puzz1 = oV('instance_create').call(PV, PV.lx + 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz1.side = 0x2, PV.puzz2 = oV('instance_create').call(PV, PV.lx - 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz2.side = 0x0, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), PV.type === 0x53 && (PV.puzz1.timer = 0xf), PV.type === 0x53 && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.type === 0x53 && oW.with('obj_jigsawbullet', PY => {
        PY.joker = 0x1;
      }));
    },
    0x53: (PV, PD) => {
      PV.maxtimer = 0x28, PV.type === 0x51 && (PV.maxtimer = 0x1e), PV.type === 0x52 && (PV.maxtimer = 0x1a), PV.type === 0x53 && (PV.maxtimer = 0x13), PV.type === 0x54 && (PV.maxtimer = 0xe), PV.btimer >= PV.maxtimer && (PV.btimer = 0x0, PV.lx = MO('obj_battlesolid').x, PV.ly = MO('obj_battlesolid').y, PV.side = oI(0x0, 0x1), (PV.type === 0x51 || PV.type === 0x54) && (PV.side = PV.made, PV.made === 0x0 ? PV.made = 0x1 : PV.made = 0x0), PV.side === 0x0 && (PV.puzz1 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly - 0x96, yv), PV.puzz1.side = 0x3, PV.puzz2 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly + 0x96, yv), PV.puzz2.side = 0x1, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz1.timer = 0xf), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.side === 0x1 && (PV.puzz1 = oV('instance_create').call(PV, PV.lx + 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz1.side = 0x2, PV.puzz2 = oV('instance_create').call(PV, PV.lx - 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz2.side = 0x0, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), PV.type === 0x53 && (PV.puzz1.timer = 0xf), PV.type === 0x53 && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.type === 0x53 && oW.with('obj_jigsawbullet', PY => {
        PY.joker = 0x1;
      }));
    },
    0x54: (PV, PD) => {
      PV.maxtimer = 0x28, PV.type === 0x51 && (PV.maxtimer = 0x1e), PV.type === 0x52 && (PV.maxtimer = 0x1a), PV.type === 0x53 && (PV.maxtimer = 0x13), PV.type === 0x54 && (PV.maxtimer = 0xe), PV.btimer >= PV.maxtimer && (PV.btimer = 0x0, PV.lx = MO('obj_battlesolid').x, PV.ly = MO('obj_battlesolid').y, PV.side = oI(0x0, 0x1), (PV.type === 0x51 || PV.type === 0x54) && (PV.side = PV.made, PV.made === 0x0 ? PV.made = 0x1 : PV.made = 0x0), PV.side === 0x0 && (PV.puzz1 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly - 0x96, yv), PV.puzz1.side = 0x3, PV.puzz2 = oV('instance_create').call(PV, MO('obj_heart').x + 0x8, PV.ly + 0x96, yv), PV.puzz2.side = 0x1, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz1.timer = 0xf), (PV.type === 0x53 || PV.type === 0x54) && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.side === 0x1 && (PV.puzz1 = oV('instance_create').call(PV, PV.lx + 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz1.side = 0x2, PV.puzz2 = oV('instance_create').call(PV, PV.lx - 0x96, MO('obj_heart').y + 0x8, yv), PV.puzz2.side = 0x0, PV.type === 0x52 && (PV.puzz1.timer = 0xa), PV.type === 0x52 && (PV.puzz2.timer = 0xa), PV.type === 0x53 && (PV.puzz1.timer = 0xf), PV.type === 0x53 && (PV.puzz2.timer = 0xf), oV('scr_bullet_inherit').call(PV, PV.puzz1), oV('scr_bullet_inherit').call(PV, PV.puzz2)), PV.type === 0x53 && oW.with('obj_jigsawbullet', PY => {
        PY.joker = 0x1;
      }));
    },
    0x55: (PV, PD) => {
      if (PV.made === 0x0 && (PV.cheer = 0x0, PV.cheertimer = 0x0, (PV.remhp ??= [])[0x0] = Ig.hp[Ig.char[0x0]], (PV.remhp ??= [])[0x1] = Ig.hp[Ig.char[0x1]], oW.with('obj_susieenemy', PY => {
        PY.visible = 0x0;
      }), oW.with('obj_lancerboss3', PY => {
        PY.visible = 0x0;
      }), PV.fakelan = oV('instance_create').call(PV, 0x244, MO('obj_battlesolid').y + 0xa0, I0), oD(PV.fakelan, PY => {
        PY.depth += 0x1, PY.image_xscale = 0x2, PY.image_yscale = 0x2, PY.visible = 0x1, PY.sprite_index = 'spr_lancerbike', PY.active = 0x0, PY.image_speed = 0.2;
      }), PV.fakesus = oV('instance_create').call(PV, 0x212, MO('obj_battlesolid').y - 0x28, I0), oD(PV.fakesus, PY => {
        PY.image_xscale = 0x2, PY.image_yscale = 0x2, PY.visible = 0x1, PY.sprite_index = 'spr_susie_enemy_attack', PY.active = 0x0, PY.image_speed = 0x0;
      }), PV.made = 0x1), PV.made === 0x1 && (Ix(IJ(PV.fakelan)) && (PV.cheer === 0x0 && Ig.inv > 0xa && (PV.cheer = 0x1, oV('snd_play').call(PV, 'snd_lancerwhistle'), oD(PV.fakelan, PY => {
        PY.sprite_index = 'spr_lancerbike_l';
      })), PV.cheer === 0x1 && (PV.cheertimer += 0x1, PV.cheertimer >= 0x1e && (PV.cheertimer = 0x0, oD(PV.fakelan, PY => {
        PY.sprite_index = 'spr_lancerbike';
      }), PV.cheer = 0x0))), Ix(IJ(PV.fakesus)) && oD(PV.fakesus, PY => {
        PY.image_index < 0x5 && (PY.image_index += 0.334);
      })), PV.made === 0x1 && Ig.turntimer <= 0xa && (oD(PV.fakesus, PY => {
        PY.visible = 0x0;
      }), oD(PV.fakelan, PY => {
        PY.visible = 0x0;
      }), oW.with('obj_susieenemy', PY => {
        PY.visible = 0x1;
      }), oW.with('obj_lancerboss3', PY => {
        PY.visible = 0x1;
      })), PV.btimer >= 0x1b && Ix(IJ(Iq)) && Ig.turntimer > 0xa) {
        for (oD(PV.fakesus, PY => {
          PY.image_index = 0x0, oV('snd_play').call(PY, 'snd_laz_c');
        }), PV.i = 0x0; PV.i < 0x1; PV.i += 0x1) (PV.axe ??= [])[PV.i] = oV('instance_create').call(PV, 0x21c, MO('obj_battlesolid').y, ow), oV('scr_bullet_inherit').call(PV, PV.axe[PV.i]);
        PV.btimer = 0x0;
      }
    }
  },
  jf = class XH extends o8 {
    ["create"]() {
      this.myinteract = 0x0, this.image_speed = 0x0, this.read = 0x0, this.tempvar = 0x0, Mc === 'room_dark3a' && Ig.flag[0x64] === 0x0 && (this.shine = oV('scr_dark_marker').call(this, this.x + 0xa, this.y + 0x6, 'spr_shine'), this.shine.image_speed = 0.1);
    }
    ["userEvent0"]() {
      this.myinteract = 0x3, Ig.msc = 0x0, Ig.typer = 0x5, Ig.darkzone === 0x1 && (Ig.typer = 0x6), Ig.fe = 0x0, Ig.fc = 0x0, Ig.interact = 0x1, oW.with('obj_darkcontroller', PV => {
        PV.charcon = 0x0;
      }), (Ig.msg ??= [])[0x0] = "* Suddenly^1, your body seizes up^1.&* What are you looking at?/%", Mc === 'room_krisroom' && (this.y < 0x96 ? ((Ig.msg ??= [])[0x0] = "* There are CDs under the bed^1.&* Classical^1, jazz^1, religious ska.../", (Ig.msg ??= [])[0x1] = "* There's also a game console^1.&* It has one normal controller^1, and one knock-off one./%") : (Ig.msg ??= [])[0x0] = "* It's a computer desk^1.&* There are many boxes under it filled with old books./%", this.x > 0x64 && ((Ig.msg ??= [])[0x0] = "* The drawer is mostly empty^1, except for.../", (Ig.msg ??= [])[0x1] = "* A school cross country shirt with a tear in it./%", Ig.filechoice === 0x1 && ((Ig.msg ??= [])[0x1] = "* A very old school ID with an embarrassing haircut./%"), Ig.filechoice === 0x2 && ((Ig.msg ??= [])[0x1] = "* A coupon book^1.&* Every coupon is for half-off a large pizza./", (Ig.msg ??= [])[0x2] = "* All the coupons expired before the book's print date./%"), this.read > 0x0 && ((Ig.msg ??= [])[0x0] = "* There's nothing useful in the drawer./%")), this.x > 0x88 && ((Ig.msg ??= [])[0x0] = "* It's a beautiful day outside./%"), this.x > 0xc0 && ((Ig.msg ??= [])[0x0] = "* Clothes drawer./%"), this.x > 0xdc && ((Ig.msg ??= [])[0x0] = "* Your bed./%", Ig.tempflag[0xa] === 0x1 && Ig.plot < 0xa && (Ig.msc = 0x192, oV('scr_text').call(this, Ig.msc)), Ig.plot >= 0xfa && (Ig.msc = 0x190, oV('scr_text').call(this, Ig.msc))), this.x > 0xfa && ((Ig.msg ??= [])[0x0] = "* It's stained./%")), Mc === 'room_krishallway' && ((Ig.msg ??= [])[0x0] = "* The door is locked./%", this.x > 0x78 && ((Ig.msg ??= [])[0x0] = "* It's only you./%"), this.x > 0x78 && this.x < 0xa0 && oW.with('obj_event_manager', PV => {
        Mw(0x0, 0x1c);
      }), this.x > 0xa0 && ((Ig.msg ??= [])[0x0] = "* There are crayons in the drawer^1. Their labels have long faded^1, and there's no green./%"), this.x > 0xdc && ((Ig.msg ??= [])[0x0] = "* A cactus^1.&* There's not much to say about it./%"), this.x > 0x140 && ((Ig.msg ??= [])[0x0] = "* There are many books./", (Ig.msg ??= [])[0x1] = "* Tales of Snails - A Story Book./", (Ig.msg ??= [])[0x2] = "* Snails Do Not Have Tails -&A Scientific Refutation./", (Ig.msg ??= [])[0x3] = "* Can Snails Help Your Garden? Um, Not Really./", (Ig.msg ??= [])[0x4] = "* And a signed copy of The History of Humans and Monsters, by Gerson Boom./%", this.read > 0x0 && ((Ig.msg ??= [])[0x0] = "* There's no time to read anything right now./%"))), Mc === 'room_torhouse' && (this.x > 0xbe && ((Ig.msg ??= [])[0x0] = "* There's a photo on the fridge^1. It's of you^1, your mother, and your brother./%"), this.x > 0xdc && ((Ig.msg ??= [])[0x0] = "* There is some white fur stuck in the drain./%"), this.x > 0x104 && ((Ig.msg ??= [])[0x0] = "* There's some cinnamony batter caked on the stovetop./%", Ig.plot >= 0xfa && ((Ig.msg ??= [])[0x0] = "* (It's a butterscotch-cinnamon pie.^1)&* (It's still cooling.)/%")), this.x > 0x12c && ((Ig.msg ??= [])[0x0] = "* (Cookie cutters for gingerbread monsters and gingerbread humans.)/%"), this.x > 0x154 && ((Ig.msg ??= [])[0x0] = "* It's a trashcan^1.&* Somehow^1, it's emitting a pleasant floral scent./%", Ig.flag[0x106] >= 0x4 && ((Ig.msg ??= [])[0x0] = "* It's a trashcan^1.&* Somehow^1, its floral scent has increased./%")), this.x > 0x171 && ((Ig.msg ??= [])[0x0] = "* It's a landline phone^1.&* But you already have a cell phone./%"), this.x > 0x1b8 && ((Ig.msg ??= [])[0x0] = "* It's the TV^1.&* Doesn't seem to even be plugged in anymore./%"), this.x > 0x230 && ((Ig.msg ??= [])[0x0] = "* It's a book of hymns./%")), Mc === 'room_torbathroom' && (this.x >= 0x64 && ((Ig.msg ??= [])[0x0] = "* On the shower ledge^1, there's a small container of apple-scented shampoo./", (Ig.msg ??= [])[0x1] = "* ... and a gallon-sized container of pet shampoo./%"), this.x >= 0xa0 && this.x <= 0xbe && (Ig.msc = 0x163, oV('scr_text').call(this, Ig.msc), oW.with('obj_event_manager', PV => {
        Mw(0x0, 0x19);
      })), this.x >= 0xbe && ((Ig.msg ??= [])[0x0] = "* You looked inside the sink cupboard^1.&* There's.../", (Ig.msg ??= [])[0x1] = "* A can of Ice-E's Cool Boys Body Spray \"Spray For The Boys,\" Flamin' Hot Pizza Flavor./", (Ig.msg ??= [])[0x2] = "* It seems to be almost entirely full./%")), Mc === 'room_schoollobby' && (this.x >= 0x8c && this.x < 0xf0 && (this.tempvar === 0x0 && ((Ig.msg ??= [])[0x0] = "* The locker is locked./%"), this.tempvar === 0x1 && ((Ig.msg ??= [])[0x0] = "* The locker's lock is locked./%"), this.tempvar === 0x2 && ((Ig.msg ??= [])[0x0] = "* The lock's locker is locked./%"), this.tempvar === 0x3 && ((Ig.msg ??= [])[0x0] = "* The locker's lock's locker is locked./%"), this.tempvar >= 0x4 && ((Ig.msg ??= [])[0x0] = "* The locker is locked./%"), oW.with('obj_readable_room1', PV => {
        PV.tempvar += 0x1;
      })), this.x === 0xf0 && ((Ig.msg ??= [])[0x0] = "* (The locker is covered in Jockington memorabilia.)/%"), this.x >= 0x118 && ((Ig.msg ??= [])[0x0] = "* (Are you ready for the Sadie Hawkman's dance?)/", (Ig.msg ??= [])[0x1] = "* (At this dance^1, all the chaperones wear giant hawk heads...)/", (Ig.msg ??= [])[0x2] = "* (... and screech at any students that make contact while dancing.)/%"), this.x < 0x8c && ((Ig.msg ??= [])[0x0] = "* (You look through the frosted window.)/", (Ig.msg ??= [])[0x1] = "* (A blurry yellow object is teaching a bunch of blurry bored-looking objects.)/%"), this.x >= 0x208 && ((Ig.msg ??= [])[0x0] = "* (You ran the water fountain.^1)&* (It's lukewarm.)/%", this.read === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You ran the water fountain.^1)&* (It's tepid.)/%"), this.read >= 0x2 && ((Ig.msg ??= [])[0x0] = "* (You ran the water fountain.^1)&* (It's refreshingly cool.)/%"), Ig.plot < 0xa && ((Ig.msg ??= [])[0x0] = "* (You drank from the water fountain.)/", oV('scr_susface').call(this, 0x1, 0x1), (Ig.msg ??= [])[0x2] = "* Heheh^1, people put their mouth on that^1, ya know./%", this.read >= 0x1 && (oV('scr_susface').call(this, 0x0, 0x9), (Ig.msg ??= [])[0x1] = "* That wasn't ENCOURAGEMENT^1, dumbass!/%"))), this.x >= 0x230 && ((Ig.msg ??= [])[0x0] = "* Do you like^1, breathing^1? Moving fast^1, with or without^1, legs?/", (Ig.msg ??= [])[0x1] = "* But usually^1, with legs?/", (Ig.msg ??= [])[0x2] = "* Join the Cross Country Team with Jockington^1, and Noelle!/%"), this.x >= 0x2b2 && ((Ig.msg ??= [])[0x0] = "* (Locker^1. It's locked.)/%"), this.x === 0x2f8 && ((Ig.msg ??= [])[0x0] = "* (This used to be your brother's locker.)/%"), this.x === 0x30c && ((Ig.msg ??= [])[0x0] = "* (It's your locker.^1)&* (It's empty.)/%")), Mc === 'room_alphysclass' && ((Ig.msg ??= [])[0x0] = "* (You checked the time.)/", (Ig.msg ??= [])[0x1] = "* (... It seems to be time for class.)/%", Ig.plot >= 0xfa && ((Ig.msg ??= [])[0x0] = "* (You checked the time.)/", (Ig.msg ??= [])[0x1] = "* (... It seems to not be time for class.)/%"), this.x > 0xf0 && (Ig.fe = 0x1, Ig.fc = 0xb, Ig.typer = 0x14, (Ig.msg ??= [])[0x0] = "* Um^1, Kris^1, the hope is that you.../", (Ig.msg ??= [])[0x1] = "\\E0* ... choose someone in the class?/%"), this.x < 0xc8 && ((Ig.msg ??= [])[0x0] = "* (The computer's wallpaper is a rotating slideshow of nature images.)/", (Ig.msg ??= [])[0x1] = "* (... and^1, rarely, an image of two buff superheroes embracing^1, blushing.)/%", Ig.plot >= 0xfa && ((Ig.msg ??= [])[0x0] = "* (The computer is turned off.)/", (Ig.msg ??= [])[0x1] = "* (Everything felt peaceful for a moment.)/%")), this.x < 0x96 && ((Ig.msg ??= [])[0x0] = "* (It's a bunch of roses.)/%"), this.x < 0x50 && ((Ig.msg ??= [])[0x0] = "* (Looks like motivational quotes from various literature.)/", (Ig.msg ??= [])[0x1] = "* \"Try your best^1, Astral Wolf^1!\"&* \"Even in your darkest hour...!\"/", (Ig.msg ??= [])[0x2] = "* (... that one seems to be from a video game.)/%")), Mc === 'room_torielclass' && (this.y <= MC / 0x2 ? (this.x >= 0x64 && ((Ig.msg ??= [])[0x0] = "* (\"Ms. Toriel\" is written in cursive on the dry-erase board.)/", (Ig.msg ??= [])[0x1] = "* (Seems like it hasn't been erased in a very long time.)/%"), this.x >= 0x82 && ((Ig.msg ??= [])[0x0] = "* (It's a computer.)/", (Ig.msg ??= [])[0x1] = "* (Its desktop wallpaper is you and your brother dressed up for Halloween 8 years ago.)/%"), this.x >= 0xaa && (Ig.msc = 0x15e, oV('scr_text').call(this, Ig.msc)), this.x >= 0xc6 && ((Ig.msg ??= [])[0x0] = "* (Some kind of teacher food.)/%"), this.x >= 0xcc && ((Ig.msg ??= [])[0x0] = "* (It's a poster of several basic shapes.^1)&* (Circle, Oval, Square...)/", (Ig.msg ??= [])[0x1] = "* (Hyperdodecahedron...)/%"), this.x >= 0xe6 && ((Ig.msg ??= [])[0x0] = "* (Kids' books.^1)&* (Some of them used to be yours.)/%"), this.x >= 0x100 && ((Ig.msg ??= [])[0x0] = "* (It's a primitive drawing of your mom.)/%")) : this.x <= Mp / 0x2 ? (Ig.msg ??= [])[0x0] = "* (Some kind of primitive sculpture.)&* (Who knows what it represents?)/%" : (Ig.msg ??= [])[0x0] = "* (The Throne of the Gods.)/%"), Mc === 'room_schooldoor' && ((Ig.msg ??= [])[0x0] = "* (The door is locked.)/%"), Mc === 'room_school_unusedroom' && (this.x < 0x50 && ((Ig.msg ??= [])[0x0] = "* (The door is locked.)/%"), this.x > 0x64 && ((Ig.msg ??= [])[0x0] = "* (It's a worn-down stuffed animal.)/%"), this.x > 0xa0 && this.y < 0x64 && ((Ig.msg ??= [])[0x0] = "* (It's a lightswitch.)/%"), this.x > 0xa0 && this.y > 0x64 && ((Ig.msg ??= [])[0x0] = "* (It's a checkerboard.^1)&* (There are pawns strewn on it.)/%"), this.x > 0xdc && ((Ig.msg ??= [])[0x0] = "* (Playing cards spill out of a deck in the closet.)/%"), this.x > 0xfa && ((Ig.msg ??= [])[0x0] = "* (It's a yellowed, poorly-drawn picture of a green turtle.)/", (Ig.msg ??= [])[0x1] = "* (It's signed 'Alvin.')/%")), Mc === 'room_hospital_lobby' && (this.x <= 0xa0 && ((Ig.msg ??= [])[0x0] = "* (It's one of those sliding bead toys that naturally spawns inside doctors' offices.)/", (Ig.msg ??= [])[0x1] = "* (The beads march grimly along their set path.)/%"), this.x >= 0xa0 && (Ig.msc = 0x168, oV('scr_text').call(this, Ig.msc))), (Mc === 'room_dark2' || Mc === 'room_dark3' || Mc === 'room_dark7') && ((Ig.msg ??= [])[0x0] = "* (It's too dark to see anything.)/%"), Mc === 'room_dark3a' && (Ig.msc = 0x6e, oV('scr_text').call(this, 0x6e)), Mc === 'room_dark_eyepuzzle' && ((Ig.msg ??= [])[0x0] = "* In this land^1, only eyes blinded by darkness can see the way.../%"), Mc === 'room_castle_town' && ((Ig.msg ??= [])[0x0] = "* (It looks like a shop^1, but the door is locked^1, and no one's inside...)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's locked.)/%"), oW.with('obj_readable_room1', PV => {
        PV.read += 0x1;
      })), Mc === 'room_castle_front' && (Ig.typer = 0x1f, Ig.fc = 0x2, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Hey^1, Kris^1, I really think we should catch up with Susie./", (Ig.msg ??= [])[0x1] = "\\E1* We can come back here after our adventure is over.../", (Ig.msg ??= [])[0x2] = "\\E8* ... and then I can bake you a yummy cake!/%", this.read > 0x0 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Kris^1, perhaps we should save the world first...?/", (Ig.msg ??= [])[0x1] = "\\E0* It seems a bit important./%")), Mc === 'room_castle_outskirts' && (Ig.typer = 0x1f, Ig.fc = 0x2, Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "* Come to think of it^1, how did Lancer get up there...?/", (Ig.msg ??= [])[0x1] = "\\E6* I suppose he rode his bike up the side of the cliff...?/%"), Mc === 'room_field_puzzle1' && ((Ig.msg ??= [])[0x0] = "* Check the clock^1.&* In order to solve this puzzle^1, you'll have to hurry./%"), Mc === 'room_field_shop1' && ((Ig.msg ??= [])[0x0] = "* (Store to the left.)&* (Come on in and buy something...)/", (Ig.msg ??= [])[0x1] = "* (Or don't.)/%"), (Mc === 'room_field_checkers1' || Mc === 'room_field_checkers4' || Mc === 'room_field_checkers6') && ((Ig.msg ??= [])[0x0] = "* (When you step into the light^1, you'll return to where you were before.)/%"), Mc === 'room_field_puzzletutorial' && (Ig.msc = 0xfa, oV('scr_text').call(this, Ig.msc)), Mc === 'room_field_checkers5' && ((Ig.msg ??= [])[0x0] = "* (Touching a wall slows your run.)/%"), Mc === 'room_forest_area3' && ((Ig.msg ??= [])[0x0] = "* (It looks like it's supposed to be the solution to a puzzle...)/", (Ig.msg ??= [])[0x1] = "* (But^1, it's been vandalized with a calligraphy pen.)/", (Ig.msg ??= [])[0x2] = "* (Looks like the order of symbols was RED-BLACK-RED.)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (Looks like the order of symbols was RED-BLACK-RED.)/%"), this.y >= 0x190 && (this.x < 0x258 ? ((Ig.msg ??= [])[0x0] = "* RK came by..^1. What a hunk!/", (Ig.msg ??= [])[0x1] = "* He vandalized the puzzle to stop the Lightners..^1.&* But WE know the answers^1!/", (Ig.msg ??= [])[0x2] = "* Oh, you wanna get through!^1?&* Of course we'll tell you!!!/", (Ig.msg ??= [])[0x3] = "* Ummm..^1. The first symbol is a HEART^1! Haha, just like LOVE^1! Does that help!?/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* Ummm..^1. The first symbol is a HEART^1! Haha, just like LOVE^1! Does that help!?/%")) : ((Ig.msg ??= [])[0x0] = "* Um^1, symbol puzzle...^1?&* All the symbols were different..^1. I think./", (Ig.msg ??= [])[0x1] = "* You can^1, um..^1. still see the colors they were^1, too.../", (Ig.msg ??= [])[0x2] = "* Sorry I can't be any more help.../%", this.x >= 0x44c && ((Ig.msg ??= [])[0x0] = "* Huh!^1? Symbol puzzle...!^1?&* Why should --WE-- care!?/", (Ig.msg ??= [])[0x1] = "* NONE of the symbols are CLUBs!/", (Ig.msg ??= [])[0x2] = "* ARRRGH^1, it's downright insulting!/%")), Ig.plot >= 0x4b && (this.holecon = 0x3e7, (Ig.msg ??= [])[0x0] = "* (Just a regular hole...)/%"))), Mc === 'room_forest_area5' && (this.x <= 0x154 && ((Ig.msg ??= [])[0x0] = "* (Revolve around the center^1, and look carefully.)/", (Ig.msg ??= [])[0x1] = "* (The darker it gets^1, the more you can see.)/%"), this.x >= 0x258 && this.x <= 0x514 && (Ig.flag[0xed] === 0x0 ? ((Ig.flag ??= [])[0xed] = 0x1, oV('snd_play').call(this, 'snd_screenshake'), oV('instance_create').call(this, 0x0, 0x0, Id), (Ig.msg ??= [])[0x0] = "* ..!/", (Ig.msg ??= [])[0x1] = "* (Though hard to see^1, there was a switch in the tree...!)/%", MO('obj_mainchara').becamebattle === 0x0 && ((Ig.msg ??= [])[0x0] = "* ..!/", (Ig.msg ??= [])[0x1] = "* (Though hard to see^1, there was a switch in the tree...!)/", oV('scr_ralface').call(this, 0x2, 0x1), (Ig.msg ??= [])[0x3] = "* ...^1?&* How'd you know that was there^1, Kris?/", (Ig.msg ??= [])[0x4] = "\\E6* You're really amazing^1, you know that^1, Kris...?/%"), oW.with('obj_tempblock_room', PV => {
        oD(PV.tree, PD => {
          PD.instance_destroy();
        }), oD(PV.block, PD => {
          PD.instance_destroy();
        }), oD(PV.talkto, PD => {
          PD.instance_destroy();
        });
      })) : (Ig.msg ??= [])[0x0] = "* (Doesn't seem to be anything else interesting in the tree.)/%"), this.x >= 0x546 && ((Ig.msg ??= [])[0x0] = "* (There's a tree blocking the way.)/", (Ig.msg ??= [])[0x1] = "* (Might look like you can walk around it^1, but that's definitely not the case.)/%")), Mc === 'room_forest_starwalker' && ((Ig.msg ??= [])[0x0] = "* (Can't get any more.)/%", this.read === 0x0 && (oV('snd_play').call(this, 'snd_item'), (Ig.msg ??= [])[0x0] = "* (Got $40 from Starwalker's ambient luster.)/%", Ig.gold += 0x28), this.read += 0x1), Mc === 'room_cc_prison_cells' && ((Ig.flag ??= [])[0xe7] += 0x1, this.x < 0x190 && (Ig.fc = 0x2, Ig.typer = 0x1f, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Susie's first solo puzzle..^1. what a nice memory./", oV('scr_susface').call(this, 0x1, 0x7), (Ig.msg ??= [])[0x2] = "* Stop remembering me fondly!!!/%"), this.x >= 0x258 && this.y < 0xc8 && ((Ig.msg ??= [])[0x0] = "* (There's a crack in the wall...^1)&* (What could be inside...?)/", (Ig.msg ??= [])[0x1] = "* (... it's more wall.)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (Nothing here except for poor architectural engineering.)/%")), this.x >= 0x258 && this.y > 0xc8 && ((Ig.msg ??= [])[0x0] = "* (It's a metal door.^1)&* (You rattle the bars...)/", (Ig.msg ??= [])[0x1] = "* (It's no use...)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's a metal door.^1)&* (It's locked.)/%"), Ig.plot >= 0x9b && ((Ig.msg ??= [])[0x0] = "* (There's a conspicuous absence of a metal door here.)/%")), this.x >= 0x2d0 && (Ig.msc = 0x127, oV('scr_text').call(this, Ig.msc), Ix(oV('scr_havechar').call(this, 0x2)) && (Ig.typer = 0x1e, Ig.fc = 0x1, Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "* What the hell^1? Your prison cell gets MOSS!?/", (Ig.msg ??= [])[0x1] = "\\E0* (That's unfair...)/%", Ig.flag[0x6a] === 0x1 && ((Ig.msg ??= [])[0x1] = "\\E0* (Didn't even save any for me...)/%")))), Mc === 'room_field_boxpuzzle' && ((Ig.msg ??= [])[0x0] = "* (The puzzle description has been smashed and graffiti'd.)/", (Ig.msg ??= [])[0x1] = "* (... but the graffiti is written in overwrought gothic calligraphy...)/%"), Mc === 'room_forest_thrashmaker' && (Ig.fc = 0x2, Ig.fe = 0x5, Ig.typer = 0x1f, (Ig.msg ??= [])[0x0] = "* It's nice Susie finally found a place she fits in.../", (Ig.msg ??= [])[0x1] = "\\E8* ... and she's getting along with Lancer^1, too!/%", Ix(oV('scr_havechar').call(this, 0x2)) && (Ig.fc = 0x1, Ig.fe = 0x0, Ig.typer = 0x1e, (Ig.msg ??= [])[0x0] = "* Hey^1, you two didn't mess with my hideout^1, did ya?/", oV('scr_ralface').call(this, 0x1, 0x1), (Ig.msg ??= [])[0x2] = "* I wonder if \"hideout\" might be overselling it a bit?/", oV('scr_susface').call(this, 0x3, 0x2), (Ig.msg ??= [])[0x4] = "* Nah^1, I took a nap in there so it's basically my house now./%")), Mc === 'room_forest_area1' && ((Ig.msg ??= [])[0x0] = "* (It's a stump with some kind of dinner hole in it.)/%"), Mc === 'room_man' && (this.y >= 0xdc ? Ig.flag[0x38e] < 0x2 ? (Ig.msg ??= [])[0x0] = "* (He is behind the tree.)/%" : (Ig.msg ??= [])[0x0] = "* (It is a tree.)/%" : Ig.flag[0x38e] >= 0x2 ? (Ig.msg ??= [])[0x0] = "* (Well^1, there is not a man here.)/%" : (Ig.msc = 0x258, oV('scr_text').call(this, Ig.msc))), Mc === 'room_cc_throneroom' && ((Ig.msg ??= [])[0x0] = "* (Wall banners^1. They seem to have been through some kind of struggle...)/%", this.y >= 0x104 && ((Ig.msg ??= [])[0x0] = "* (Riches.^1)&* (They shine with avarice.)/%")), Mc === 'room_cc_prison_prejoker' && (Ig.facing = 0x1, oW.with('obj_caterpillarchara', PV => {
        PV.sprite_index = PV.rsprite;
      }), Ig.typer = 0x23, Ig.fc = 0x0, Ig.msc = 0x195, oV('scr_keyitemcheck').call(this, 0x5) === 0x1 && (Ig.msc = 0x19a), Ig.flag[0xf1] >= 0x5 && (Ig.msc = 0x19f), oV('scr_text').call(this, Ig.msc)), Mc === 'room_cc_1f' && (this.x < 0x1f4 && ((Ig.msg ??= [])[0x0] = "* (Rudinn's Room.)&* (Yes, that's a door!)/%"), this.x < 0x514 && this.x > 0x1f4 && ((Ig.msg ??= [])[0x0] = "* (Elevator to Top Floor.)/", (Ig.msg ??= [])[0x1] = "* (Currently stuck at the top floor until someone rides it down.)/%", Ig.flag[0xf0] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (Elevator to Top Floor.)/", (Ig.msg ??= [])[0x1] = "* (No longer stuck at the top floor.)/%")), this.x > 0x514 && ((Ig.msg ??= [])[0x0] = "* (Elevator to Prison.)/", (Ig.msg ??= [])[0x1] = "* (Formerly known as Elevator to Basement^1, Which Just Happened to Have A Lot Of Cages.)/%")), Mc === 'room_cc_rudinn' && ((Ig.msg ??= [])[0x0] = "* (Normal everyday riches^1, acquired from a legitimate source.)/%", this.y < 0x82 && ((Ig.msg ??= [])[0x0] = "* (Looks like a family photograph.)/%")), Mc === 'room_cc_2f' && ((Ig.msg ??= [])[0x0] = "* (Castle Bathroom \"Royal Flush\")&* (Currently occupied.)/%", this.y < 0xfa && ((Ig.msg ??= [])[0x0] = "* (It's the number 2.^1)&* (It's reputed to be a pretty good number.)/%")), Mc === 'room_cc_rurus1' && (Ig.fc = 0x12, (Ig.msg ??= [])[0x0] = "\\E4* Lost...^1?&* Frightened...^1?&* Confused...?/", (Ig.msg ??= [])[0x1] = "\\E2* GOOD!^1! HA HA HA!!!/", (Ig.msg ??= [])[0x2] = "\\E0* Toileth in despair at the Worlde's strongest puzzle...!!!/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "\\E3* My^1, art thou still stucketh upon my Puzzle...?/", (Ig.msg ??= [])[0x1] = "\\E2* Trappedeth^1, hopelessly^1, like an Insecte in a Roach's Inn.../", (Ig.msg ??= [])[0x2] = "\\E4* Ah..^1. Perhaps I COULD find it in my heart to spare you.../", (Ig.msg ??= [])[0x3] = "\\E2* Should you GROVEL for One-Hundred-Years!!^1! Ha ha ha!!!/%")), Mc === 'room_cc_rurus2' && (Ig.fc = 0x12, (Ig.msg ??= [])[0x0] = "\\E2* Gehahaha..^1. Face the TRUE strongest puzzle^1, Worms!/", (Ig.msg ??= [])[0x1] = "\\E3* This time^1, the difficulty art MAGNITUDES grander!/", (Ig.msg ??= [])[0x2] = "\\E1* See thou in 100 years^1, thou feeble insects!/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "\\E4* Oh^1! Such despair^1! Oh^1, such sweet despair!/", (Ig.msg ??= [])[0x1] = "\\E2* Squirmst^1! Squirmst upon the Earth^1, like a Moiste Noodle!/%")), Mc === 'room_cc_6f' && ((Ig.msg ??= [])[0x0] = "* (Thar she blows...)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's going off to live a better life now...)/%")), Mc === 'room_cc_hathy' && ((Ig.msg ??= [])[0x0] = "* (Looks like a bed.^1)&* (Will you rest here?)/", (Ig.msg ??= [])[0x1] = "* (... No^1, you won't.^1)&* (It's not your bed.)/%", this.read === 0x0 && oW.with('obj_readable_room1', PV => {
        Ig.flag[0xfc] === 0x0 && (PV.tempvar += 0x1);
      }), this.tempvar === 0x4 && Ig.flag[0xfc] === 0x0 && ((Ig.msg ??= [])[0x0] = "* (You thoroughly investigated all of the beds.)/", (Ig.msg ??= [])[0x1] = "* (Your rank was upgraded to \"\\cYBed Inspector\\cW.\")/%", (Ig.flag ??= [])[0xfc] = 0x1, oW.with('obj_readable_room1', PV => {
        PV.tempvar = 0x63;
      }))), Mc === 'room_cc_clover' && ((Ig.msg ??= [])[0x0] = "* (It's a bed for three people^1, or one three-headed person.)/%", this.x > Mp / 0x2 && (this.y < MC / 0x2 ? ((Ig.msg ??= [])[0x0] = "* (It's a giant baseball.^1)&* (For parties.)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (Actually^1, seems the giant baseball is a soccer ball that's been painted over.)/", (Ig.msg ??= [])[0x1] = "* (It would be easier to draw that way.)/%")) : (Ig.msg ??= [])[0x0] = "* (It's a tree.^1)&* (For parties.)/%")), Mc === 'room_cc_lancer' && (this.y <= 0xdc ? (this.x < 0xc8 && ((Ig.msg ??= [])[0x0] = "* (A bicycle is lovingly tucked into bed.)/%"), this.x > 0x12c && this.x < 0x15e && ((Ig.msg ??= [])[0x0] = "* (It's a hole^1. Presumably dug for fun.)/%"), this.x > 0x15e && this.x < 0x190 && (Ig.msc = 0x1ae, oV('scr_text').call(this, Ig.msc)), this.x >= 0x190 && ((Ig.msg ??= [])[0x0] = "* (It's some kind of digging implement.)/%")) : (this.x < 0xc8 && ((Ig.msg ??= [])[0x0] = "* (You found 20 Rupys in the hole!)/", (Ig.msg ??= [])[0x1] = "* (Unfortunately^1, that's not a useful currency here...)/%"), this.x > 0xfa && this.x < 0x140 && ((Ig.msg ??= [])[0x0] = "* (It's a hole made recreationally.)/%"), this.x > 0x140 && ((Ig.msg ??= [])[0x0] = "* (There's salsa buried in the ground here.)/%"))), Mc === 'room_cc_prisonelevator' && (Ig.msc = 0x1b3, oV('scr_text').call(this, Ig.msc)), Mc === 'room_cc_elevator' && (Ig.msc = 0x1b8, oV('scr_text').call(this, Ig.msc)), Mc === 'room_cc_prisonlancer' && ((Ig.msg ??= [])[0x0] = "* Yeah^1, even I got arrested.../", (Ig.msg ??= [])[0x1] = "* And I'm just a pair of eyes^1! What's the world coming to!/%", this.x >= 0x230 && ((Ig.msg ??= [])[0x0] = "* (Solved puzzle.)/%", Ix(oV('scr_havechar').call(this, 0x2)) && Ix(oV('scr_havechar').call(this, 0x3)) && (Ig.fe = 0x0, Ig.fc = 0x2, Ig.typer = 0x1f, (Ig.msg ??= [])[0x0] = "* Aww^1, Susie^1, did you solve this puzzle all by yourself?/", (Ig.msg ??= [])[0x1] = "\\E7* You must really have wanted to save us.../", oV('scr_susface').call(this, 0x2, 0x7), (Ig.msg ??= [])[0x3] = "* Huh!^1? No way^1, I just...!/", (Ig.msg ??= [])[0x4] = "\\E6* I just solved it... on accident./", oV('scr_ralface').call(this, 0x5, 0x6), (Ig.msg ??= [])[0x6] = "* On accident?/", oV('scr_susface').call(this, 0x7, 0x2), (Ig.msg ??= [])[0x8] = "* I actually thought it was^1, uh^1, y'know^1, a slot machine./", (Ig.msg ??= [])[0x9] = "* But it turned out the prize was nerds./%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* Well^1, I'm proud of you^1, Susie./", oV('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Yeah^1, whatever./%")))), Mc === 'room_hospital_rudy' && (this.x <= 0x4b && this.y < 0xa0 && ((Ig.msg ??= [])[0x0] = "* (It's an angel doll.^1)&* (Its lack of facial features is unsettling.)/", oV('scr_rudface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* That angel^1?&* Noelle n' Dess made it in youth group./", (Ig.msg ??= [])[0x3] = "\\E2* It's kind of like a good luck charm to me now./", (Ig.msg ??= [])[0x4] = "\\E4* Oh^1, right^1, you and Azzy tried to make one too.../", (Ig.msg ??= [])[0x5] = "\\E7* But you wasted the whole time making huge wings for it!/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's an angel doll.^1)&* (Its lack of facial features is unsettling.)/%")), this.x <= 0x4b && this.y > 0xa0 && (Ig.flag[0x116] === 0x0 && ((Ig.flag ??= [])[0x116] = 0x1), Ig.flag[0xff] < 0x2 ? (Ig.typer = 0x37, Ig.fc = 0xf, Ig.fe = 0x4, (Ig.msg ??= [])[0x0] = "* Oh^1, so you're just here to use the sink^1, huh?/", (Ig.msg ??= [])[0x1] = "\\E7* Come on^1, Kris^1!&* Be a little friendlier!/%") : ((Ig.msg ??= [])[0x0] = "* (It's a sink.)/", oV('scr_rudface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Hey^1, Kris^1, is that sink really more interesting than me?/%")), this.x >= 0x5f && this.x <= 0x69 && ((Ig.msg ??= [])[0x0] = "* (Patient Name:)&* (Rudolph \"Rudy\" Holiday)/", oV('scr_rudface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Hey Kris^1, you forget my name or something!?/%", this.read >= 0x1 && (oV('scr_rudface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Kris^1, you jealous you don't have your own wall plaque?/", (Ig.msg ??= [])[0x3] = "* Amazing what's being done with our taxpayer dollars^1, huh?/%")), this.x === 0xcd && ((Ig.msg ??= [])[0x0] = "* (It's a bunch of roses in a glass container.)/", oV('scr_rudface').call(this, 0x1, 0x4), (Ig.msg ??= [])[0x2] = "* Hey^1, I'm happy your dad brought me flowers^1, but.../", (Ig.msg ??= [])[0x3] = "\\E2* Roses!^1? What is this^1, man^1? Beauty and the Beast?/", (Ig.msg ??= [])[0x4] = "\\E7* That ain't gonna work^1, man^1! We're both beasts!/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's a bunch of roses.^1)&* (They seem healthy.)/", oV('scr_rudface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Kris^1, I love your dad^1, but.../", (Ig.msg ??= [])[0x3] = "\\E7* Asgore^1, if you wanna go to prom with me^1, just ask!/%")), this.x > 0xd7 && ((Ig.msg ??= [])[0x0] = "* (It's a get well soon card from your mom.^1)&* (It's signed inside.)/", oV('scr_rudface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Hey^1, Kris^1, you KNOW you signed the inside^1, right?/", (Ig.msg ??= [])[0x3] = "\\E2* Why are you staring at it like you haven't seen it before?/", (Ig.msg ??= [])[0x4] = "\\E7* Is your penmanship that good??? Was I not moved enough???/%"), this.x > 0xe6 && ((Ig.msg ??= [])[0x0] = "* (It's a chair.)/%")), Mc === 'room_hospital_hallway' && ((Ig.msg ??= [])[0x0] = "* (It's a diagram showing a bunch of lines and a circle.)/%"), Mc === 'room_hospital_room2' && (this.y >= 0xa0 ? ((Ig.msg ??= [])[0x0] = "* (It's a regular sink.)/%", this.tempvar >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's a clone of the other sink.)/", (Ig.msg ??= [])[0x1] = "* (Perhaps there was originally one tall sink that was cut in half to create both of them.)/%"), oW.with('obj_readable_room1', PV => {
        PV.y >= 0xa0 && (PV.tempvar += 0x1);
      })) : (this.x <= 0x8c && ((Ig.msg ??= [])[0x0] = "* (You looked inside the cupboard.)/", (Ig.msg ??= [])[0x1] = "* (... a very small obligatory piano is hiding inside.)/%"), this.x >= 0x96 && ((Ig.msg ??= [])[0x0] = "* (It's a classic 1-to-10 pain scale^1, using ICE-E as a model.)/", (Ig.msg ??= [])[0x1] = "* (At 0 pain^1, he's happy.^1)&* (At 10 pain^1, he's happy and sweating.)/%", this.x < 0xc8 && oW.with('obj_event_manager', PV => {
        Mw(0x0, 0x5, 0x3a5);
      })), this.x >= 0xc8 && ((Ig.msg ??= [])[0x0] = "* This castle's WHITE WIZARDs relegated me to this HEALING CHAMBER.../", (Ig.msg ??= [])[0x1] = "* But my BLOOD is BOILING FOR BATTLE!!!/%"))), Mc === 'room_library' && (this.x < 0x50 && ((Ig.msg ??= [])[0x0] = "* \"Lord of the Hammer\"/", (Ig.msg ??= [])[0x1] = "* (First in the award-winning fiction series by lauded historian Gerson Boom.)/%", this.y > 0x50 && ((Ig.msg ??= [])[0x0] = "* (It's an unlabelled book. You look inside...)/", (Ig.msg ??= [])[0x1] = "* oh.... i accidentally returned my personal journal instead of my book.../", (Ig.msg ??= [])[0x2] = "* oh no.... they're putting it into their catalogue.../", (Ig.msg ??= [])[0x3] = "* oh no... i have to take it out every time i want to write a new entry.../%")), this.x > 0x46 && ((Ig.msg ??= [])[0x0] = "* \"Please remember my name. Please. I wrote a book to help you remember.\"/", (Ig.msg ??= [])[0x1] = "* (By Hots Fireguy)/%", this.y > 0x50 && ((Ig.msg ??= [])[0x0] = "* (There's a book here.^1)&* (You lick the page...^1)&* (It's delicious!)/", (Ig.msg ??= [])[0x1] = "* (This must be what they meant by flavor text.)/%")), this.x > 0x6e && ((Ig.msg ??= [])[0x0] = "* (Computer Lab.^1)&* (Please surf the web responsibly.)/", (Ig.msg ??= [])[0x1] = "* (In fact^1, maybe don't do it at all.)/%"), this.x > 0x8c && ((Ig.msg ??= [])[0x0] = "* (You looked through the window to the computer lab...)/", (Ig.msg ??= [])[0x1] = "* (There seems to be a dog inside working at a computer...)/", (Ig.msg ??= [])[0x2] = "* (Seems like it's making a game...)/", (Ig.msg ??= [])[0x3] = "* (Seems like you shouldn't interrupt it...)/", (Ig.msg ??= [])[0x4] = "* (Seems like when the game's finished^1, you can go in...)/", (Ig.msg ??= [])[0x5] = "* (You just have to trust the dog...)/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (You looked through the window to the computer lab...)/", (Ig.msg ??= [])[0x1] = "* (Now the dog is just playing the maracas...)/", (Ig.msg ??= [])[0x2] = "* (It's not doing any work...)/", (Ig.msg ??= [])[0x3] = "* (This might take a while...)/%")), this.x > 0xbe && ((Ig.msg ??= [])[0x0] = "* (There's a crude drawing of an ice-cube wearing a headband.)/", (Ig.msg ??= [])[0x1] = "* (\"The TeenZone: Where Teen's Can Be Kid's.\")/", (Ig.msg ??= [])[0x2] = "* (A feeling of immense relief washes over you.)/%"), this.x > 0xdc && (Ig.msc = 0xb9, oV('scr_text').call(this, Ig.msc))), Mc === 'room_graveyard' && ((Ig.msg ??= [])[0x0] = "* GERSON&* RENOWNED HISTORIAN, AUTHOR, AND TEACHER/%", this.x >= 0x96 && ((Ig.msg ??= [])[0x0] = "* CRYSTAL&* A SNOWY GEMSTONE FOR A PROUD MOTHER/%"), this.x >= 0xc8 && ((Ig.msg ??= [])[0x0] = "* MUTTLER&* A BIG BONE FOR THE LEADER OF THE PACK/%"), this.x >= 0x122 && ((Ig.msg ??= [])[0x0] = "* SHYRA&* A KARAOKE MICROPHONE FOR A BRAVE SINGER/%")), Mc === 'room_townhall' && (this.x >= 0xb4 && ((Ig.msg ??= [])[0x0] = "* (It's a painting of the town.)/%"), this.x >= 0xf0 && ((Ig.msg ??= [])[0x0] = "* (It's a small pine tree.)/%"), this.y >= 0xa0 && ((Ig.msg ??= [])[0x0] = "* (It's a chair.^1)&* (Maybe it's into politics.)/%")), Mc === 'room_beach' && (Ig.msc = 0xc0, oV('scr_text').call(this, Ig.msc)), Mc === 'room_diner' && ((Ig.msg ??= [])[0x0] = "* (Rave reviews and autographs.^1)&* (... from various normal townspeople.)/%"), Mc === 'room_flowershop_1f' && (this.y > 0x64 && (this.x < 0x64 && ((Ig.msg ??= [])[0x0] = "* (It's a cash register.^1)&* (There's not much change inside.)/%"), this.x < 0x46 && ((Ig.msg ??= [])[0x0] = "* (It's a flower.)/%"), this.x < 0x32 && ((Ig.msg ??= [])[0x0] = "* (It's some kind of catalogue..^1. There's a car magazine underneath.)/%")), this.y < 0x50 && (this.x === 0x8c && ((Ig.msg ??= [])[0x0] = "* (It's an expertly trimmed arrangement.)/%"), this.x !== 0x8c && ((Ig.msg ??= [])[0x0] = "* (There are various flowers inside.)/%"))), Mc === 'room_flowershop_2f' && (this.y < 0x32 && ((Ig.msg ??= [])[0x0] = "* (It's a door.^1)&* (It's locked.)/%"), this.y > 0x3c && ((Ig.msg ??= [])[0x0] = "* (Various bags of soil.)/%", this.x >= 0x3c && ((Ig.msg ??= [])[0x0] = "* (It's a dirty watering can.)/%"), this.x >= 0xb4 && ((Ig.msg ??= [])[0x0] = "* (There is some dirty fur stuck in the drain.)/%"), this.x >= 0x104 && ((Ig.msg ??= [])[0x0] = "* (It's a small TV.)&* (On top are some superhero comics.)/%")), this.y > 0x78 && (this.x < 0xa0 ? ((Ig.msg ??= [])[0x0] = "* (It's a note.)&* (It says...)/", (Ig.msg ??= [])[0x1] = "* No rent received. Again.&* Stop giving away flowers.&* Start selling them./", (Ig.msg ??= [])[0x2] = "* You have one month.& &         - C/%") : (this.read === 0x0 && ((Ig.msg ??= [])[0x0] = "* (It's an air mattress.^1)&* (It's certainly not king-sized...)/", oV('scr_asgface').call(this, 0x1, 0x4), (Ig.msg ??= [])[0x2] = "* Kris^1, do you want to sleep over?/", (Ig.msg ??= [])[0x3] = "\\E1* You could use that air mattress^1, and I could.../", (Ig.msg ??= [])[0x4] = "\\E2* Er^1, use those bags of soil..^1.&* Perhaps not./%"), this.read >= 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's an air mattress.^1)&* (It's certainly not king-sized...)/%"))), this.x === 0xe1 && (Ig.msc = 0xd2, oV('scr_text').call(this, Ig.msc))), Mc === 'room_alphysalley' && (this.x <= 0x82 ? (Ig.msg ??= [])[0x0] = "* (It's a saucer of milk.)/%" : ((Ig.msg ??= [])[0x0] = "* (It's a dirty trash can.)/%", this.y <= 0x64 && ((Ig.msg ??= [])[0x0] = "* (It's a trash can full of well-kept flowers.)/%"))), Mc === 'room_town_south' && (this.x <= 0x64 && ((Ig.msg ??= [])[0x0] = "* (Police tape is blocking the way.)/", (Ig.msg ??= [])[0x1] = "* (The tape simply reads \"NGAHHHHH!!!\")/%"), this.x > 0xc8 && this.x < 0x12c && (this.read === 0x0 ? (oV('snd_play').call(this, 'snd_knock'), (Ig.msg ??= [])[0x0] = "* (You knocked on the door to the Police Station.)/", (Ig.msg ??= [])[0x1] = "* (...)/", (Ig.msg ??= [])[0x2] = "* (Someone's coming up to the window.)/%", oW.with('obj_town_event', PV => {
        PV.con = 0x32;
      })) : (Ig.msg ??= [])[0x0] = "* (Seems like the police aren't really feelin' it right now...)/%")), Mc === 'room_town_mid' && (this.x > 0x104 && ((Ig.msg ??= [])[0x0] = "* (Here at ICE-E'S PEZZA, You're Family.)/", (Ig.msg ??= [])[0x1] = "* (... Is Going to Love it!)/%"), this.x >= 0x12c && ((Ig.msg ??= [])[0x0] = "* (The entrance is locked.^1)&* (No one's inside.)/", (Ig.msg ??= [])[0x1] = "* (Seems like all of the employees are outside in costume.)/%"), this.x >= 0x168 && ((Ig.msg ??= [])[0x0] = "* (Ice E's P\"E\"ZZA, You're number \"#1\" Spot for a piping hot pe\"E\"ce of PEZZA.)/%"), this.x >= 0x4d8 && (oV('snd_play').call(this, 'snd_knock'), (Ig.msg ??= [])[0x0] = "* (Knock knock knock...)/", (Ig.msg ??= [])[0x1] = "* (...)/", (Ig.msg ??= [])[0x2] = "* (No response...^1)&* (... but the distant trousle of bones.)/%", this.x >= 0x5dc && ((Ig.msg ??= [])[0x1] = "* Ooo^1, are you the human that lives at the top of town?/", (Ig.msg ??= [])[0x2] = "* Wow^1, my mommy told me about you.../", (Ig.msg ??= [])[0x3] = "* Does it hurt to be made of blood???/%"), this.x >= 0x668 && ((Ig.msg ??= [])[0x1] = "* Huh..^1. that sounds like the knock of a beginner./", (Ig.msg ??= [])[0x2] = "* Come back when you've gotten better at knocking!/%"), this.x >= 0x744 && ((Ig.msg ??= [])[0x1] = "* OY^1, Snowy^1, whaddid I TELL YAH about knockin' the door so hahd!/", (Ig.msg ??= [])[0x2] = "* Don't^1!&* Do^1!&* It!/", (Ig.msg ??= [])[0x3] = "* It's REALLY gonna hurt yah face^1! We don't have arms^1, yah know!/%"))), Mc === 'room_town_north' && (this.x <= 0xfa && ((Ig.msg ??= [])[0x0] = "* (It's an ornate gate.^1)&* (It appears to be locked.)/%"), this.x >= 0x1f4 && this.x <= 0x23a && (Ig.fc = 0x10, Ig.typer = 0x5, Ig.fe = 0x6, (Ig.msg ??= [])[0x0] = "* Aww^1, Kris^1, like^1, if you wanna come in.../", (Ig.msg ??= [])[0x1] = "\\E4* Our cat-flap^1, is like^1, always open to you.../%"), this.x >= 0x244 && ((Ig.msg ??= [])[0x0] = "* (Various cat-themed junk is piled up inside the house.)/", (Ig.msg ??= [])[0x1] = "* (It seems to be a bit of a cat-sty...)/%"), this.x >= 0x28a && ((Ig.msg ??= [])[0x0] = "* (It's a broken grill.)/", (Ig.msg ??= [])[0x1] = "* (... It smells like burnt cat food.)/%"), this.x >= 0x320 && ((Ig.msg ??= [])[0x0] = "* (There's some kind of scratching noise coming from inside...)/%"), this.x >= 0x442 && this.x <= 0x46a && (oV('snd_play').call(this, 'snd_knock'), (Ig.msg ??= [])[0x0] = "* (Knock knock knock...)/", (Ig.msg ??= [])[0x1] = "* Ah, I'm afraid no one's home right now^1, darling./", (Ig.msg ??= [])[0x2] = "* Now^1, why don't you prance on home?/%", this.read >= 0x1 && ((Ig.msg ??= [])[0x1] = "* I'm telling you^1, they're not home right now./", (Ig.msg ??= [])[0x2] = "* ... Ah^1, you just wanted to talk to me...?/", (Ig.msg ??= [])[0x3] = "* .../", (Ig.msg ??= [])[0x4] = "* My apologies^1, beautiful^1.&* I'm afraid I'm a bit of a nobody./%"))), Mc === 'room_town_shelter' && ((Ig.msg ??= [])[0x0] = "* (It's locked.)/%"), this.mydialoguer = oV('instance_create').call(this, 0x0, 0x0, jn), this.read += 0x1;
    }
    ["step"]() {
      this.myinteract === 0x3 && IJ(this.mydialoguer) === 0x0 && (Ig.interact = 0x0, this.myinteract = 0x0, oW.with('obj_mainchara', PV => {
        PV.onebuffer = 0x3;
      }));
    }
    ["userEvent"](PV) {
      if (PV === 0x0) return this.userEvent0();
      if (super.userEvent) return super.userEvent(PV);
    }
  };
oH(jf, 'obj_readable_room1'), oA(jf, 'kinds', oM('obj_readable_room1', o8)), oA(jf, 'defaultDepth', 0x0), oA(jf, 'defaultSprite', 'spr_interactable'), oA(jf, 'defaultVisible', !0x1);
var jx = jf;
ou({
  0x7: I6,
  0x8: Ed,
  0x9: jn,
  0xa: I5,
  0x11: Im,
  0x1e: Ij,
  0x2a: IE,
  0x2d: IX,
  0x2f: Ez,
  0x3b: Io,
  0x55: jz,
  0x56: Ik,
  0x58: jx,
  0x89: M3,
  0x8e: jL,
  0x8f: jc,
  0x91: jg,
  0x93: Id,
  0xa8: EY,
  0xa9: EZ,
  0xaa: jd,
  0xab: jY,
  0xb6: IP,
  0xbb: yO,
  0xbc: yN,
  0xbd: yU,
  0xbe: yB,
  0xc0: IW,
  0xc1: EX,
  0xc2: MH,
  0xc3: MZ,
  0xc4: Mk,
  0xc5: Iq,
  0xc6: I1,
  0xc7: I0,
  0xc9: I2,
  0xca: oT,
  0xcb: I3,
  0xcc: I4,
  0xcd: IA,
  0xce: Iu,
  0xd2: Iy,
  0xd3: yD,
  0xdb: IH,
  0xe9: yy,
  0xea: Ek,
  0xeb: y3,
  0xec: y5,
  0xed: y7,
  0xee: y9,
  0xef: yS,
  0xf0: E2,
  0xf1: yI,
  0xf2: Mu,
  0xf3: yJ,
  0xf4: Ex,
  0xf5: jX,
  0xf6: jo,
  0xf7: of,
  0xf8: oF,
  0xf9: oQ,
  0xfa: yP,
  0xfb: yK,
  0xfd: yq,
  0xfe: E8,
  0xff: yl,
  0x100: E6,
  0x101: yj,
  0x102: jk,
  0x103: yv,
  0x104: j0,
  0x105: EO,
  0x106: jV,
  0x107: EG,
  0x108: jp,
  0x109: Eu,
  0x10a: y1,
  0x10c: jE,
  0x10d: yA,
  0x10e: E4,
  0x10f: M2,
  0x110: oL,
  0x111: yC,
  0x112: oC,
  0x113: oN,
  0x114: yb,
  0x115: E0,
  0x117: oa,
  0x118: yx,
  0x119: jm,
  0x11a: oO,
  0x11b: EV,
  0x11c: yw,
  0x11d: ow,
  0x11e: j6,
  0x11f: j8,
  0x120: EU,
  0x121: jG,
  0x122: jM,
  0x123: j4,
  0x124: j2,
  0x125: EN,
  0x126: EB,
  0x127: El,
  0x128: EJ,
  0x129: ju,
  0x12c: EM,
  0x12d: Mq,
  0x12e: EE,
  0x131: Em,
  0x132: Eo,
  0x133: M4,
  0x134: MG,
  0x135: I9,
  0x137: yW,
  0x138: MW,
  0x139: yH,
  0x149: ER
}, 0x1, !0x1), IF({
  0x0: 'spr_face_susie_alt',
  0x1: 'spr_face_s0',
  0x2: 'spr_face_s1',
  0x3: 'spr_face_s2',
  0x4: 'spr_face_s3',
  0x5: 'spr_face_s4',
  0x6: 'spr_face_s5',
  0x7: 'spr_face_s6',
  0x8: 'spr_face_s7',
  0x9: 'spr_face_s8',
  0xa: 'spr_face_s9',
  0xb: 'spr_face_sA',
  0xc: 'spr_face_sB',
  0xd: 'spr_face_sC',
  0xe: 'spr_face_sD',
  0xf: 'spr_face_n0',
  0x10: 'spr_face_n1',
  0x11: 'spr_face_n2',
  0x12: 'spr_face_n3',
  0x13: 'spr_face_n4',
  0x14: 'spr_face_n5',
  0x15: 'spr_face_n6',
  0x16: 'spr_face_n7',
  0x17: 'spr_face_n8',
  0x18: 'spr_face_n9',
  0x19: 'spr_face_t0',
  0x1a: 'spr_face_t1',
  0x1b: 'spr_face_t2',
  0x1c: 'spr_face_t3',
  0x1d: 'spr_face_t4',
  0x1e: 'spr_face_t5',
  0x1f: 'spr_face_t6',
  0x20: 'spr_face_t7',
  0x21: 'spr_face_t8',
  0x22: 'spr_face_t9',
  0x23: 'spr_face_torielglasses',
  0x24: 'spr_face_b0',
  0x25: 'spr_face_b1',
  0x26: 'spr_face_b2',
  0x27: 'spr_face_b3',
  0x28: 'spr_face_b4',
  0x29: 'spr_face_b5',
  0x2a: 'spr_face_sans0',
  0x2b: 'spr_face_sans1',
  0x2c: 'spr_face_sans2',
  0x2d: 'spr_face_sans3',
  0x2e: 'spr_face_sans4',
  0x2f: 'spr_face_sans5',
  0x30: 'spr_face_c0',
  0x31: 'spr_face_c1',
  0x32: 'spr_face_c2',
  0x33: 'spr_face_jock0',
  0x35: 'spr_face_jock1',
  0x36: 'spr_face_jock2',
  0x37: 'spr_face_jock3',
  0x38: 'spr_face_jock4',
  0x39: 'spr_face_jock5',
  0x3a: 'spr_face_jock6',
  0x3b: 'spr_face_jock7',
  0x3c: 'spr_face_jock8',
  0x3d: 'spr_face_jock9',
  0x3e: 'spr_face_r_dark',
  0x3f: 'spr_face_r_nohat',
  0x40: 'spr_face_r_hood',
  0x41: 'spr_face_l0',
  0x42: 'spr_face_rudy',
  0x43: 'spr_face_asgore0',
  0x44: 'spr_face_asgore1',
  0x45: 'spr_face_asgore2',
  0x46: 'spr_face_asgore3',
  0x47: 'spr_face_asgore4',
  0x48: 'spr_face_asgore5',
  0x49: 'spr_face_asgore6',
  0x4a: 'spr_face_catty',
  0x4b: 'spr_face_bratty',
  0x4c: 'spr_face_burgerpants',
  0x4d: 'spr_face_rurus',
  0x4e: 'spr_face_undyne',
  0x4f: 'spr_smallface_a2',
  0x50: 'spr_smallface_s0',
  0x51: 'spr_face_king',
  0x52: 'spr_face_tbody',
  0x53: 'spr_alphysface',
  0x54: 'spr_pie',
  0x55: 'spr_chairiel',
  0x56: 'spr_chairiel_empty',
  0x57: 'spr_bedsheet',
  0x58: 'spr_redwagon',
  0x59: 'spr_housewindow',
  0x5a: 'spr_torcar_r',
  0x5b: 'spr_torcar_l',
  0x5c: 'spr_torcar_d',
  0x5d: 'spr_torcar_u',
  0x5e: 'spr_toriel_hug',
  0x5f: 'spr_toriel_handhold_r',
  0x60: 'spr_toriel_handhold_u',
  0x61: 'spr_toriel_d',
  0x62: 'spr_toriel_dt',
  0x63: 'spr_toriel_u',
  0x64: 'spr_toriel_windowopen',
  0x65: 'spr_toriel_ut',
  0x66: 'spr_toriel_r',
  0x67: 'spr_toriel_rt',
  0x68: 'spr_toriel_l',
  0x69: 'spr_toriel_lt',
  0x6a: 'spr_torielclass_sunsetoverlay',
  0x6b: 'spr_schoollobby_sunsetoverlay',
  0x6c: 'spr_doorarea_sunsetoverlay',
  0x6d: 'spr_papersit',
  0x6e: 'spr_paperfly',
  0x6f: 'spr_darkdoor',
  0x70: 'spr_godthrone',
  0x71: 'spr_toyblock',
  0x72: 'spr_smalldesk',
  0x73: 'spr_torieldesk',
  0x74: 'spr_classdesk',
  0x75: 'spr_alphysdesk',
  0x77: 'spr_classdoorslam',
  0x78: 'spr_classdoor',
  0x79: 'spr_alphysd',
  0x7a: 'spr_alphysu',
  0x7b: 'spr_alphysl',
  0x7c: 'spr_alphysr',
  0x7d: 'spr_alphysr_shock',
  0x7e: 'spr_noelle_dt',
  0x7f: 'spr_noelle_d',
  0x80: 'spr_noelle_r',
  0x81: 'spr_noelle_l',
  0x82: 'spr_noelle_rt',
  0x83: 'spr_noelle_lt',
  0x84: 'spr_noelle_ut',
  0x85: 'spr_noelle_ut_r',
  0x86: 'spr_noelle_ut_l',
  0x87: 'spr_berdly_dt',
  0x88: 'spr_berdly_ut',
  0x89: 'spr_berdly_library_u',
  0x8a: 'spr_berdly_library_r',
  0x8b: 'spr_berdly_ut_l',
  0x8c: 'spr_berdly_ut_r',
  0x8d: 'spr_catti_ut',
  0x8e: 'spr_jockington_ut',
  0x8f: 'spr_jockington_rt',
  0x90: 'spr_jockington_lt',
  0x91: 'spr_tem_sit',
  0x92: 'spr_tem_sit_l',
  0x93: 'spr_tem_sit_r',
  0x94: 'spr_tem_eggput',
  0x95: 'spr_egg',
  0x96: 'spr_snowy_ut',
  0x97: 'spr_snowy_dt',
  0x98: 'spr_snowy_ut_l',
  0x99: 'spr_snowy_ut_r',
  0x9a: 'spr_mkid_ut',
  0x9b: 'spr_mkid_dt',
  0x9c: 'spr_mkid_ut_r',
  0x9d: 'spr_mkid_ut_l',
  0x9e: 'spr_susie_dark_relax',
  0x9f: 'spr_npc_relaxchair',
  0xa0: 'spr_susie_grablancer',
  0xa1: 'spr_susie_laughlancer',
  0xa2: 'spr_susie_finelancer',
  0xa3: 'spr_susie_krisshoulder',
  0xa4: 'spr_susie_krisshoulder_r',
  0xa5: 'spr_susie_krisgrab',
  0xa6: 'spr_susie_grabsmile',
  0xa7: 'spr_susie_krisdrop',
  0xa8: 'spr_susie_krisgrab_eat',
  0xa9: 'spr_susie_fall',
  0xaa: 'spr_susie_eatchalk',
  0xab: 'spr_susiel',
  0xac: 'spr_susiel_plain',
  0xad: 'spr_susiel_eyes',
  0xae: 'spr_susier_eyes',
  0xaf: 'spr_susier',
  0xb0: 'spr_susier_plain',
  0xb1: 'spr_susier_lookup',
  0xb2: 'spr_susieu',
  0xb3: 'spr_susied',
  0xb4: 'spr_susied_eyes',
  0xb5: 'spr_susied_plain',
  0xb6: 'spr_susiel_dark',
  0xb7: 'spr_susielt_dark',
  0xb8: 'spr_susiel_dark_unhappy',
  0xb9: 'spr_susier_dark',
  0xba: 'spr_susiert_dark',
  0xbb: 'spr_susier_dark_unhappy',
  0xbc: 'spr_susier_headhand',
  0xbd: 'spr_susied_dark',
  0xbe: 'spr_susiedt_dark',
  0xbf: 'spr_susied_dark_unhappy',
  0xc0: 'spr_susieu_dark',
  0xc1: 'spr_susieu_dark_jump',
  0xc2: 'spr_susieut_dark',
  0xc3: 'spr_susie_shock',
  0xc4: 'spr_susie_shock_r',
  0xc5: 'spr_susier_wall',
  0xc6: 'spr_susier_dark_laugh',
  0xc7: 'spr_susiel_dark_laugh',
  0xc8: 'spr_susied_dark_eyes',
  0xc9: 'spr_susiel_dark_eyes',
  0xca: 'spr_susier_dark_eyes',
  0xcb: 'spr_ralsei_sit',
  0xcc: 'spr_ralsei_hood',
  0xcd: 'spr_ralsei_removehood',
  0xce: 'spr_ralseid',
  0xcf: 'spr_ralseid_blush',
  0xd0: 'spr_ralseiu',
  0xd1: 'spr_ralseil',
  0xd2: 'spr_ralseil_blush',
  0xd3: 'spr_ralseir',
  0xd5: 'spr_ralseir_blush',
  0xd6: 'spr_lancer_dt',
  0xd7: 'spr_lancer_pose',
  0xd8: 'spr_lancer_dt_unhappy',
  0xd9: 'spr_lancer_ut',
  0xda: 'spr_lancer_ut_unhappy',
  0xdb: 'spr_lancer_rt',
  0xdc: 'spr_lancer_rt_mustache',
  0xdd: 'spr_lancer_rt_unhappy',
  0xde: 'spr_lancer_lt_unhappy',
  0xdf: 'spr_lancer_lt',
  0xe0: 'spr_lancer_lt_mustache',
  0xe1: 'spr_lancer_lt_stool',
  0xe2: 'spr_lancer_lt_laugh',
  0xe3: 'spr_lancer_lt_laugh_mustache',
  0xe4: 'spr_lancer_rt_laugh',
  0xe5: 'spr_lancer_dark_relax',
  0xe6: 'spr_crappylightning',
  0xe7: 'spr_lancer_bucket',
  0xe8: 'spr_jailwall',
  0xe9: 'spr_ironshackle',
  0xea: 'spr_irondoor',
  0xeb: 'spr_suitsicon_fade',
  0xec: 'spr_suitsicon_vandal',
  0xed: 'spr_suitsicon',
  0xee: 'spr_suitsbutton',
  0xef: 'spr_fencedoor',
  0xf0: 'spr_drdoor',
  0xf1: 'spr_glowtile_off',
  0xf3: 'spr_treasurebox',
  0xf4: 'spr_hourglass_switch_on',
  0xf5: 'spr_hourglass_switch_off',
  0xf6: 'spr_glowtile_on',
  0xf7: 'spr_glowtile_step',
  0xf8: 'spr_spiketile',
  0xf9: 'spr_cakesmoke',
  0xfa: 'spr_smoldercake',
  0xfb: 'spr_rudy_d',
  0xfc: 'spr_rudy_cough',
  0xfd: 'spr_rudy_laugh',
  0xfe: 'spr_rudy_l',
  0xff: 'spr_onionblue',
  0x100: 'spr_onionsan_disappoint',
  0x101: 'spr_onionsan_kawaii',
  0x102: 'spr_onionsan_yhear',
  0x103: 'spr_onionsan_wistful',
  0x104: 'spr_onionsan_sing',
  0x105: 'spr_onionsan_menace',
  0x106: 'spr_npc_icewolf',
  0x107: 'spr_npc_qc',
  0x108: 'spr_npc_most_improved_1997',
  0x109: 'spr_npc_greenfire',
  0x10a: 'spr_npc_flanneldemon',
  0x10b: 'spr_npc_dragonfamily',
  0x10c: 'spr_npc_dresslion',
  0x10d: 'spr_npc_cattiwaitress',
  0x10e: 'spr_flowershop_counter',
  0x10f: 'spr_flowershop_flowers',
  0x110: 'spr_flowershop_lights',
  0x111: 'spr_flowercontainer',
  0x112: 'spr_asgored',
  0x113: 'spr_asgore_hug',
  0x114: 'spr_asgorel',
  0x115: 'spr_asgorer',
  0x116: 'spr_asgoreu_notpiss',
  0x117: 'spr_asgoreu',
  0x118: 'spr_npc_icemascot1',
  0x119: 'spr_npc_icemascot2',
  0x11a: 'spr_npc_icemascot_fake',
  0x11b: 'spr_npc_icemascot_takeoff',
  0x11c: 'spr_npc_burgerpants',
  0x11d: 'spr_undyne_dt',
  0x11e: 'spr_undyne_lt',
  0x11f: 'spr_undyne_rt',
  0x120: 'spr_undyne_ut',
  0x121: 'spr_npc_asgoretruck',
  0x122: 'spr_npc_cattydad',
  0x123: 'spr_npc_bratty',
  0x124: 'spr_npc_catty',
  0x125: 'spr_sans_d',
  0x126: 'spr_sans_l',
  0x127: 'spr_sans_r',
  0x129: 'spr_sans_u',
  0x12a: 'spr_npc_froggit',
  0x12b: 'spr_npc_heats',
  0x12c: 'spr_npc_heats_wave',
  0x12d: 'spr_npc_qc_stand',
  0x12e: 'spr_npc_qc_wave',
  0x12f: 'spr_npc_catty_wave',
  0x130: 'spr_npc_cattydad_wave',
  0x131: 'spr_undyne_d_wave',
  0x132: 'spr_npc_graveyardfence',
  0x133: 'spr_npc_beachtable',
  0x134: 'spr_npc_bench',
  0x135: 'spr_church',
  0x136: 'spr_shelter',
  0x137: 'spr_policewindow',
  0x138: 'spr_npc_donutcar',
  0x139: 'spr_npc_snailcar',
  0x13a: 'spr_npc_alvin',
  0x13b: 'spr_npc_rgbun',
  0x13c: 'spr_npc_rgdragon',
  0x13d: 'spr_npc_businessguy',
  0x13e: 'spr_npc_receptionist',
  0x140: 'spr_npc_politicsbear',
  0x141: 'spr_npc_nurse',
  0x142: 'spr_normalnpc',
  0x143: 'spr_rurus_idle',
  0x144: 'spr_rurus_appear',
  0x145: 'spr_puzzlemaster_beanie',
  0x146: 'spr_puzzlemaster_body',
  0x147: 'spr_puzzlemaster_face0',
  0x148: 'spr_puzzlemaster_face1',
  0x149: 'spr_npc_puzzlepiece',
  0x14a: 'spr_npc_puzzlepiece_happy',
  0x14b: 'spr_npc_puzzlepiece_shaved',
  0x14c: 'spr_npc_puzzlepiece_jail',
  0x14d: 'spr_npc_puzzlepiece_shock1',
  0x14e: 'spr_npc_puzzlepiece_shock2',
  0x14f: 'spr_thrashdesign',
  0x150: 'spr_hammerguy',
  0x151: 'spr_hammerguy_hit',
  0x152: 'spr_hammerguy_powerup_old',
  0x153: 'spr_hammerguy_powerup',
  0x154: 'spr_hammerguy_hit_old',
  0x155: 'spr_brokencake',
  0x156: 'spr_brokenkey',
  0x157: 'spr_jokerdoor',
  0x158: 'spr_jackperson',
  0x159: 'spr_ballperson',
  0x15a: 'spr_npc_gouldensam',
  0x15b: 'spr_blockler_b',
  0x15c: 'spr_blockler_o',
  0x15d: 'spr_bakesale_rudinn',
  0x15e: 'spr_bakesale_hathy',
  0x15f: 'spr_bakesale_lancer',
  0x160: 'spr_cc_boombox',
  0x161: 'spr_cc_lancerpainting',
  0x162: 'spr_elevator_floornum',
  0x163: 'spr_elevator_frontdoor',
  0x164: 'spr_darkmoney',
  0x165: 'spr_darkthrone',
  0x166: 'spr_npc_cage_king',
  0x167: 'spr_npc_cage_animals',
  0x168: 'spr_weirdlight',
  0x169: 'spr_starwalker_offswitch_b',
  0x16a: 'spr_starwalker_offswitch',
  0x16b: 'spr_shortcut_door',
  0x16c: 'spr_shortcut_door_off',
  0x16d: 'spr_npc_originalstarwalker',
  0x16e: 'spr_npc_mrelegance',
  0x16f: 'spr_npc_mrsociety',
  0x170: 'spr_npc_coody',
  0x171: 'spr_topchef',
  0x172: 'spr_npc_sign',
  0x173: 'spr_npc_block',
  0x174: 'spr_npc_block_broken',
  0x175: 'spr_npc_block_solved',
  0x176: 'spr_savepoint',
  0x177: 'spr_placeholder',
  0x178: 'spr_morearrow',
  0x179: 'spr_shopicon',
  0x17a: 'spr_musicer',
  0x17b: 'spr_interactable',
  0x17c: 'spr_event',
  0x17d: 'spr_exc',
  0x17e: 'spr_doorA',
  0x17f: 'spr_doorB',
  0x180: 'spr_doorC',
  0x181: 'spr_doorD',
  0x182: 'spr_doorE',
  0x183: 'spr_doorF',
  0x184: 'spr_doorX',
  0x185: 'spr_doorW',
  0x186: 'spr_markerA',
  0x187: 'spr_markerB',
  0x188: 'spr_markerC',
  0x189: 'spr_markerD',
  0x18a: 'spr_markerE',
  0x18b: 'spr_markerF',
  0x18c: 'spr_markerX',
  0x18d: 'spr_markerW',
  0x18e: 'spr_solidextall_2',
  0x18f: 'spr_solidexwide',
  0x190: 'spr_solidlong',
  0x191: 'spr_sdl',
  0x192: 'spr_sdl_dark',
  0x193: 'spr_sdr',
  0x194: 'spr_sul',
  0x195: 'spr_sur',
  0x196: 'spr_sur_dark',
  0x197: 'spr_solidsmall',
  0x198: 'spr_soliddark',
  0x199: 'spr_solidenemy',
  0x19a: 'spr_solidenemy_b',
  0x19b: 'spr_solidsmallthin',
  0x19c: 'spr_solidtall',
  0x19d: 'spr_solidwide',
  0x19e: 'spr_84_lang',
  0x19f: 'spr_attack_cut1',
  0x1a0: 'spr_attack_mash1',
  0x1a1: 'spr_attack_mash2',
  0x1a2: 'spr_attack_slap1',
  0x1a3: 'spr_attack_hit1',
  0x1a4: 'spr_attackspot',
  0x1a5: 'spr_chartarget',
  0x1a6: 'spr_diamondbullet',
  0x1a7: 'spr_diamondbullet_form',
  0x1a8: 'spr_dodgeheart',
  0x1a9: 'spr_dodgeheartmask',
  0x1aa: 'spr_grazeappear',
  0x1ab: 'spr_grazemask',
  0x1ac: 'spr_healsparkle',
  0x1ad: 'spr_heartoutline',
  0x1ae: 'spr_heartoutline2',
  0x1af: 'spr_krisplace',
  0x1b0: 'spr_lancerbike',
  0x1b1: 'spr_lancerbike_earcover',
  0x1b2: 'spr_lancerbike_hurt',
  0x1b3: 'spr_lancerbike_l',
  0x1b4: 'spr_lancernoise',
  0x1b5: 'spr_pressfront',
  0x1b6: 'spr_pressfront_b',
  0x1b7: 'spr_pressspot',
  0x1b8: 'spr_tensionbar',
  0x1b9: 'spr_tensionfilling',
  0x1ba: 'spr_tensionmarker',
  0x1bb: 'spr_tplogo',
  0x1bc: 'spr_turnarrow',
  0x1bd: 'spr_turnkris',
  0x1be: 'spr_turnralsei',
  0x1bf: 'spr_turnsusie',
  0x1c0: 'spr_turnturn',
  0x1c1: 'spr_whiteedge',
  0x1c2: 'spr_kris_hug',
  0x1c3: 'spr_krisb_pirouette',
  0x1c4: 'spr_krisb_bow',
  0x1c5: 'spr_krisb_victory',
  0x1c6: 'spr_krisb_defeat',
  0x1c7: 'spr_krisb_attackready',
  0x1c8: 'spr_krisb_act',
  0x1c9: 'spr_krisb_actready',
  0x1ca: 'spr_krisb_itemready',
  0x1cb: 'spr_krisb_item',
  0x1cc: 'spr_krisb_attack',
  0x1cd: 'spr_krisb_attack_old',
  0x1ce: 'spr_krisb_hurt',
  0x1cf: 'spr_krisb_intro',
  0x1d0: 'spr_krisb_idle',
  0x1d1: 'spr_krisb_defend',
  0x1d2: 'spr_susie_rudebuster',
  0x1d3: 'spr_susieb_victory',
  0x1d4: 'spr_susieb_spellready',
  0x1d5: 'spr_susieb_idle',
  0x1d6: 'spr_susieb_spell',
  0x1d7: 'spr_susieb_actready',
  0x1d8: 'spr_susieb_act',
  0x1d9: 'spr_susieb_itemready',
  0x1da: 'spr_susieb_item',
  0x1db: 'spr_susieb_hurt',
  0x1dc: 'spr_susieb_defend',
  0x1dd: 'spr_susieb_idle_serious',
  0x1de: 'spr_susieb_defeat',
  0x1df: 'spr_susieb_idle_unarmed',
  0x1e0: 'spr_susieb_attack',
  0x1e1: 'spr_susieb_attack_serious',
  0x1e2: 'spr_susieb_attack_unarmed',
  0x1e3: 'spr_susieb_attackready',
  0x1e4: 'spr_susieb_attackready_unhappy',
  0x1e5: 'spr_susieb_attackready_unarmed',
  0x1e6: 'spr_susieb_throwralseiready',
  0x1e7: 'spr_ralsei_thrown',
  0x1e8: 'spr_ralseib_idle',
  0x1e9: 'spr_ralseib_sing',
  0x1ea: 'spr_ralseib_act',
  0x1eb: 'spr_ralseib_actready',
  0x1ec: 'spr_ralseib_bow',
  0x1ed: 'spr_ralseib_defeat',
  0x1ee: 'spr_ralseib_victory',
  0x1ef: 'spr_ralseib_battleintro',
  0x1f0: 'spr_ralseib_attackready',
  0x1f1: 'spr_ralseib_attack',
  0x1f2: 'spr_ralseib_item',
  0x1f3: 'spr_ralseib_itemready',
  0x1f4: 'spr_ralseib_defend',
  0x1f5: 'spr_ralsei_shock',
  0x1f6: 'spr_ralsei_shock_overworld',
  0x1f7: 'spr_ralseib_spell',
  0x1f8: 'spr_ralseib_spellready',
  0x1f9: 'spr_diamond_overworld',
  0x1fa: 'spr_diamond_fan',
  0x1fb: 'spr_diamond_overworld_sleepy1',
  0x1fc: 'spr_diamond_overworld_sleepy2',
  0x1fd: 'spr_diamondm_idle',
  0x1fe: 'spr_diamondm_hurt',
  0x1ff: 'spr_diamond_trash',
  0x200: 'spr_diamondm_spared',
  0x201: 'spr_clubsball_a',
  0x202: 'spr_clubsball_b',
  0x203: 'spr_clubsball_c',
  0x204: 'spr_clubsbullet',
  0x205: 'spr_clubsbullet_dark',
  0x206: 'spr_diamondbullet_vert',
  0x207: 'spr_heartbullet',
  0x208: 'spr_spinheart',
  0x209: 'spr_spinheartmask',
  0x20a: 'spr_heartenemy_idle',
  0x20b: 'spr_heartenemy_overworld',
  0x20c: 'spr_heartenemy_spared',
  0x20d: 'spr_heartenemy_hurt',
  0x20e: 'spr_heartblcon_0',
  0x20f: 'spr_heartblcon_1',
  0x210: 'spr_heartblcon_2',
  0x211: 'spr_heartblcon_3',
  0x212: 'spr_clubs_idle',
  0x213: 'spr_clubs_overworld',
  0x214: 'spr_clubs_spared',
  0x215: 'spr_clubs_hurt',
  0x216: 'spr_cloverhole',
  0x217: 'spr_cloverhole_happy',
  0x218: 'spr_cloverhole_mad',
  0x219: 'spr_cloverhole_shy',
  0x21b: 'spr_battleblcon_clubs',
  0x21c: 'spr_smallchecker_front',
  0x21d: 'spr_smallchecker_hurt',
  0x21e: 'spr_smallchecker_idle',
  0x21f: 'spr_smallchecker_run',
  0x220: 'spr_checkers_milk',
  0x221: 'spr_checkers_crown',
  0x222: 'spr_checkers_idle_crownless',
  0x223: 'spr_smallchecker_crown',
  0x224: 'spr_smallchecker_legtuck',
  0x225: 'spr_smallchecker_transform',
  0x226: 'spr_smallchecker_transform2',
  0x227: 'spr_smallchecker_transform3',
  0x228: 'spr_throwarrow',
  0x229: 'spr_checkers_crouch',
  0x22a: 'spr_checkers_idle',
  0x22b: 'spr_checkers_idle_white',
  0x22c: 'spr_checkers_bow',
  0x22d: 'spr_checkers_leap',
  0x22e: 'spr_checkers_leg',
  0x22f: 'spr_checkers_magnificent',
  0x230: 'spr_checkershrapnel',
  0x231: 'spr_ponman_appear',
  0x232: 'spr_ponman_touched',
  0x233: 'spr_ponman_eye',
  0x234: 'spr_ponman_eyebullet',
  0x235: 'spr_ponman_idle',
  0x236: 'spr_ponman_jump',
  0x237: 'spr_lancer_battle',
  0x238: 'spr_lancer_battle_hurt',
  0x239: 'spr_hypnoring',
  0x23a: 'spr_pirouette_fx',
  0x23b: 'spr_uselessbird',
  0x23c: 'spr_bomb_club',
  0x23d: 'spr_bomb_diamond',
  0x23e: 'spr_bomb_heart',
  0x23f: 'spr_bomb_spade',
  0x240: 'spr_suitsbomb',
  0x242: 'spr_face_n_matome',
  0x243: 'spr_carousel',
  0x244: 'spr_tallpx',
  0x245: 'spr_joker_dance',
  0x246: 'spr_joker_dance_reverse',
  0x248: 'spr_joker_scythebody',
  0x249: 'spr_joker_scythebody_mask',
  0x24a: 'spr_joker_teleport',
  0x24b: 'spr_joker_teleport_r',
  0x24c: 'spr_jokerscythe_big',
  0x24d: 'spr_joker_main',
  0x24e: 'spr_joker_tired',
  0x24f: 'spr_jokerbody',
  0x250: 'spr_jokerchain',
  0x251: 'spr_jokerhead',
  0x252: 'spr_carrotbullet',
  0x253: 'spr_rabbitbullet',
  0x254: 'spr_rabbitthrower',
  0x255: 'spr_rabbick_dustorb',
  0x256: 'spr_rabbick_enemy',
  0x257: 'spr_rabbick_enemy_overworld',
  0x258: 'spr_rabbick_bushhole',
  0x259: 'spr_rabbick_enemy_hurt',
  0x25a: 'spr_rabbick_enemy_spared',
  0x25b: 'spr_blockguy_overworld',
  0x25c: 'spr_blockguy_part',
  0x25d: 'spr_blockguy_part_hurt',
  0x25e: 'spr_blockguy_spared',
  0x25f: 'spr_blockbullet',
  0x260: 'spr_blockbullet_mini',
  0x261: 'spr_jigsawbullet',
  0x262: 'spr_jigsawry_clobbered',
  0x263: 'spr_jigsawry_idle',
  0x264: 'spr_jigsawry_wounded',
  0x265: 'spr_jigsawry_hurt',
  0x266: 'spr_jigsawry_spared',
  0x267: 'spr_susie_enemy_attack',
  0x268: 'spr_susie_enemy_defeat',
  0x269: 'spr_susie_enemy_hurt',
  0x26a: 'spr_susie_enemy',
  0x26b: 'spr_axebullet_b',
  0x26c: 'spr_starbullet_test',
  0x26d: 'spr_starwalker_attack',
  0x26e: 'spr_starwalker_body',
  0x26f: 'spr_starwalker_idle',
  0x270: 'spr_starwalker_walk',
  0x271: 'spr_starwalker_wings',
  0x272: 'spr_diamondswordbullet',
  0x273: 'spr_diamond_knight_overworld',
  0x274: 'spr_diamond_knight_hurt',
  0x275: 'spr_diamond_knight_spared',
  0x276: 'spr_daimond_knight_idle',
  0x277: 'spr_diamond_knight_slash',
  0x278: 'spr_hathyx_idle',
  0x279: 'spr_hathyx_overworld',
  0x27a: 'spr_hathyx_spared',
  0x27b: 'spr_hathyx_hurt',
  0x27c: 'spr_heartblcon_4',
  0x27d: 'spr_heartblcon_5',
  0x27e: 'spr_battlebg_1',
  0x27f: 'spr_battlebg_2',
  0x280: 'spr_battlebg_spikes',
  0x281: 'spr_battlebg_wavechain',
  0x282: 'spr_bouncebox_spike',
  0x283: 'spr_chainfront',
  0x284: 'spr_chainking_idle',
  0x285: 'spr_chainking_hurt',
  0x286: 'spr_chainking_pullback',
  0x287: 'spr_chainking_receive',
  0x288: 'spr_chainking_spin',
  0x289: 'spr_chainking_toss',
  0x28a: 'spr_chainking_toss_idle',
  0x28b: 'spr_chainking_toss_old',
  0x28c: 'spr_chainpiece',
  0x28d: 'spr_dummymonster',
  0x28e: 'spr_dummynpc',
  0x28f: 'spr_smallbullet',
  0x290: 'spr_smallbullet_outline',
  0x291: 'spr_ralseib_idle_enemy',
  0x292: 'spr_ralseib_idle_enemy_blush',
  0x293: 'spr_ralseib_shock_enemy',
  0x294: 'spr_sparestar',
  0x295: 'spr_tiredmark',
  0x296: 'spr_battleblcon',
  0x297: 'spr_battleblcon_long',
  0x298: 'spr_battleblcon_long_tall',
  0x29a: 'spr_battleblcon_long_r',
  0x29b: 'spr_battleblcon_v',
  0x29c: 'spr_battlebg_0',
  0x29d: 'spr_bnamekris',
  0x29e: 'spr_bnameralsei',
  0x29f: 'spr_bnamesusie',
  0x2a0: 'spr_btact',
  0x2a1: 'spr_btact_old',
  0x2a2: 'spr_btdefend',
  0x2a3: 'spr_btfight',
  0x2a4: 'spr_btspare',
  0x2a5: 'spr_btdog',
  0x2a6: 'spr_btfight_old',
  0x2a7: 'spr_btitem',
  0x2a8: 'spr_btitem_old',
  0x2a9: 'spr_bttech',
  0x2aa: 'spr_headkris',
  0x2ab: 'spr_headralsei',
  0x2ac: 'spr_headsusie',
  0x2ad: 'spr_hpname',
  0x2ae: 'spr_hpslash',
  0x2af: 'spr_numbersfontbig',
  0x2b0: 'spr_battlemsg',
  0x2b1: 'spr_spadebullet',
  0x2b2: 'spr_ja_bnamekris',
  0x2b3: 'spr_ja_bnameralsei',
  0x2b4: 'spr_ja_bnamesusie',
  0x2b5: 'spr_ja_btact',
  0x2b6: 'spr_ja_btdefend',
  0x2b7: 'spr_ja_btfight',
  0x2b8: 'spr_ja_btitem',
  0x2b9: 'spr_ja_bttech',
  0x2ba: 'spr_ja_btspare',
  0x2bb: 'spr_darkponman_hole',
  0x2bc: 'spr_donation_hole_and_tree',
  0x2bd: 'spr_castle_shop',
  0x2be: 'spr_castle_fountain',
  0x2bf: 'spr_castle_torch',
  0x2c0: 'spr_castle_torch_white',
  0x2c1: 'spr_forest_pinkflame',
  0x2c2: 'spr_blocktree_block',
  0x2c3: 'spr_blocktree_parts',
  0x2c4: 'spr_blocktree_switch',
  0x2c5: 'spr_cardcastlefrontdoor',
  0x2c6: 'spr_darkcastle_bg',
  0x2c7: 'spr_candytree',
  0x2c8: 'spr_candytree_candies',
  0x2c9: 'spr_candytree_tall',
  0x2ca: 'spr_tile_darkgrass_middle',
  0x2cb: 'spr_tile_darkgrass_old',
  0x2cc: 'spr_purplegrass',
  0x2cd: 'spr_giantdarkdoor',
  0x2ce: 'spr_realisticexplosion',
  0x2cf: 'spr_krisandsusie_fall',
  0x2d0: 'spr_slidedust',
  0x2d1: 'spr_darklancer',
  0x2d2: 'spr_dustball',
  0x2d3: 'spr_dustpile',
  0x2d4: 'spr_dustpile_parts',
  0x2d5: 'spr_wobblything',
  0x2d6: 'spr_wobblebullet',
  0x2d7: 'spr_wobblything_evil',
  0x2d8: 'spr_ponman_dark',
  0x2d9: 'spr_scissordancer',
  0x2da: 'spr_scissordancer_precise',
  0x2db: 'spr_ponman_eye_white',
  0x2dc: 'spr_checkertile_bullet',
  0x2dd: 'spr_checkertile_bullet_mask',
  0x2de: 'spr_susiebush',
  0x2df: 'spr_susiebushdebris',
  0x2e0: 'spr_thrashfoot_b',
  0x2e1: 'spr_ja_thrashfoot_b',
  0x2e2: 'spr_thrashbody_b',
  0x2e3: 'spr_ja_thrashbody_b',
  0x2e4: 'spr_thrashbody',
  0x2e5: 'spr_thrashfoot',
  0x2e6: 'spr_thrashlogo',
  0x2e7: 'spr_ja_thrashlogo',
  0x2e8: 'spr_thrashstar',
  0x2e9: 'spr_thrashstats',
  0x2ea: 'spr_thrashweapon_flame_b',
  0x2eb: 'spr_thrashweapon_sword_b',
  0x2ec: 'spr_thrashweapon_laser_b',
  0x2ed: 'spr_thrashweapon_duck',
  0x2ee: 'spr_thrashweapon_flame',
  0x2ef: 'spr_thrashweapon_laser',
  0x2f0: 'spr_thrashweapon_sword',
  0x2f1: 'spr_ja_thrashstats',
  0x2f2: 'spr_cc_fountainbg',
  0x2f3: 'spr_crowdpiece',
  0x2f4: 'spr_king_battlepose',
  0x2f5: 'spr_king_droplancer',
  0x2f6: 'spr_king_fall',
  0x2f7: 'spr_king_kneel',
  0x2f9: 'spr_king_kneeldown',
  0x2fa: 'spr_king_liftkris',
  0x2fb: 'spr_king_liftlancer_old',
  0x2fc: 'spr_king_liftlancer',
  0x2fd: 'spr_king_shock',
  0x2fe: 'spr_kingcape',
  0x2ff: 'spr_kingl',
  0x300: 'spr_kingl_shadow',
  0x301: 'spr_king_pullweapon',
  0x302: 'spr_king_laugh',
  0x303: 'spr_kingr',
  0x304: 'spr_kingr_asleep',
  0x305: 'spr_kingr_fallasleep',
  0x306: 'spr_kingu_shadow',
  0x307: 'spr_kris_drop',
  0x308: 'spr_kris_fell',
  0x309: 'spr_krisr_kneel',
  0x30a: 'spr_lancer_l_unhappy',
  0x30b: 'spr_lancer_r_unhappy',
  0x30c: 'spr_ralsei_fell',
  0x30d: 'spr_ralsei_pullhat',
  0x30e: 'spr_ralsei_reveal',
  0x30f: 'spr_ralseid_pleased',
  0x310: 'spr_ralseir_kneel',
  0x311: 'spr_spadebullet_chunk',
  0x312: 'spr_susie_brave',
  0x313: 'spr_susie_brave_discouraged',
  0x314: 'spr_susie_brave_shock',
  0x315: 'spr_susie_fell',
  0x316: 'spr_susied_eye_dark',
  0x317: 'spr_susiel_eye_dark',
  0x318: 'spr_susiel_eye_dark_unhappy',
  0x319: 'spr_susier_eye_dark',
  0x31a: 'spr_susier_eye_dark_lookup',
  0x31b: 'spr_susier_eye_dark_unhappy',
  0x31c: 'spr_susier_kneel',
  0x31d: 'spr_fountainbottom',
  0x31e: 'spr_fountainedge',
  0x31f: 'spr_heart_centered',
  0x320: 'spr_krisd_bright',
  0x321: 'spr_krisl_bright',
  0x322: 'spr_krisr_bright',
  0x323: 'spr_krisu_bright',
  0x324: 'spr_susier_bright',
  0x325: 'spr_susieu_bright',
  0x326: 'spr_dog_sleep',
  0x327: 'spr_dmenu_captions',
  0x328: 'spr_dmenu_equip',
  0x329: 'spr_dmenu_items',
  0x32a: 'spr_ja_dmenu_captions',
  0x32b: 'spr_shine',
  0x32c: 'spr_textbox_topleft',
  0x32d: 'spr_textbox_top',
  0x32e: 'spr_textbox_left',
  0x32f: 'spr_darkconfigbt',
  0x330: 'spr_darkequipbt',
  0x332: 'spr_darkitembt',
  0x333: 'spr_darktalkbt',
  0x334: 'spr_darktechbt',
  0x335: 'spr_equipchar',
  0x336: 'spr_darkmenudesc',
  0x337: 'spr_heart_harrows',
  0x338: 'spr_heart_outline2',
  0x339: 'spr_susied_party',
  0x33a: 'spr_susiel_party',
  0x33b: 'spr_susier_party',
  0x33c: 'spr_susier_shadow',
  0x33d: 'spr_susieu_party',
  0x33e: 'spr_eyepuzzle_marking',
  0x33f: 'spr_darkeye',
  0x340: 'spr_magicalglass',
  0x341: 'spr_ja_darkmenudesc',
  0x342: 'spr_krisd_heart',
  0x343: 'spr_krisd_slide_heart',
  0x344: 'spr_krisu_heart',
  0x345: 'spr_krisl_heart',
  0x346: 'spr_krisr_heart',
  0x347: 'spr_krisd_dark',
  0x348: 'spr_kris_fallen_dark',
  0x349: 'spr_krisr_dark',
  0x34a: 'spr_krisu_dark',
  0x34b: 'spr_krisl_dark',
  0x34c: 'spr_krisd_slide',
  0x34d: 'spr_krisd_slide_light',
  0x34e: 'spr_krisr',
  0x34f: 'spr_krisr_sit',
  0x350: 'spr_krisl',
  0x351: 'spr_krisd',
  0x352: 'spr_kris_fall',
  0x353: 'spr_krisu',
  0x354: 'spr_introimage0',
  0x355: 'spr_introimage1',
  0x356: 'spr_introimage2',
  0x357: 'spr_introimage3',
  0x358: 'spr_introimage4',
  0x359: 'spr_introimage5',
  0x35a: 'spr_introimage6',
  0x35b: 'spr_rbook',
  0x35c: 'spr_battletarget_triangle',
  0x35d: 'spr_soulshining',
  0x35e: 'spr_defeatsweat',
  0x35f: 'spr_rudebuster_beam',
  0x360: 'spr_rudebuster_beam_red',
  0x361: 'spr_sparestar_anim',
  0x362: 'spr_swordstar_anim',
  0x363: 'spr_carouselbg',
  0x364: 'spr_graveyard_overlay',
  0x365: 'spr_torhouse_mirror',
  0x366: 'spr_leaves_shaking',
  0x367: 'spr_heartbreak',
  0x368: 'spr_heartshards',
  0x369: 'spr_lightfairy',
  0x36a: 'spr_fieldmuslogo',
  0x36b: 'spr_ja_fieldmuslogo',
  0x36c: 'spr_shop_rurusbg',
  0x36d: 'spr_shop_rurusface',
  0x36e: 'spr_shop_rurusfoot',
  0x36f: 'spr_shop_rurushand',
  0x370: 'spr_shop_rurussparkle',
  0x371: 'spr_shop_rurussteam',
  0x372: 'spr_shop_rurusworm',
  0x373: 'spr_shopbg1',
  0x374: 'spr_seam_idle',
  0x375: 'spr_seam_talk',
  0x376: 'spr_seam_oh',
  0x377: 'spr_seam_laugh',
  0x378: 'spr_seam_impatient',
  0x379: 'spr_asgore_eyeflash_serious',
  0x37a: 'spr_dkris_bed2',
  0x37b: 'spr_dkris_bedstruggle',
  0x37c: 'spr_dkris_dl',
  0x37d: 'spr_dkris_dr',
  0x37e: 'spr_dkris_glowheart',
  0x37f: 'spr_dkris_grabheart',
  0x380: 'spr_dkris_grabheart_old',
  0x381: 'spr_dkris_grabscream',
  0x382: 'spr_dkris_ground',
  0x383: 'spr_dkris_heartthrow',
  0x384: 'spr_pxwhite',
  0x385: 'spr_dkris_heartthrow_post',
  0x386: 'spr_dkris_heartwalk',
  0x387: 'spr_dkris_pullheart',
  0x388: 'spr_dkris_pullheart_old',
  0x389: 'spr_dkris_readyhand',
  0x38a: 'spr_dkris_ul',
  0x38b: 'spr_dkris_ur',
  0x38c: 'spr_dkris_ur_pullknife',
  0x38d: 'spr_wheelbarrow_parts',
  0x38e: 'spr_wheelbarrow_small',
  0x399: 'spr_numbersfontsmall',
  0x39a: 'spr_heart',
  0x39b: 'spr_pixel_white',
  0x39c: 'spr_heartsmall',
  0x39d: 'spr_solidblock',
  0x39e: 'spr_diagonalsolid',
  0x39f: 'spr_soliddiamond',
  0x3a0: 'spr_solidcircle',
  0x3a1: 'spr_mainchara',
  0x3a2: 'spr_quitmessage',
  0x407: 'spr_ja_quitmessage'
}, 0x1), od(EO, "G.mnfight = 2;G.mnfight = 2;"), od(Ex, "G.mnfight = 1;G.myfight = -(1);G.myfight = 999;G.mnfight = 999;"), od(EJ, "G.mnfight = 2;"), od(El, "G.mnfight = 2;"), od(j6, "G.mnfight = 2;"), od(j8, "G.myfight = 3;"), od(jM, "G.mnfight = 99;G.mnfight = 2;G.mnfight = 99;G.myfight = 99;"), od(jX, "G.mnfight = 2;"), od(ju, "G.mnfight = 2;"), od(jV, "room_goto_next()");
var jF = new Proxy({}, {
    'get': oH((PV, PD) => oz[PD] || IK[PD], 'get')
  }),
  jJ = oH(PV => ov[PV] || ob[PV] || MV[PV] || (() => {}), 'SCRIPT'),
  {
    scr_monsterdefeat_of: jQ,
    trigger_event: jl
  } = MV,
  jT = oH((PV, PD) => {
    if (typeof PV == 'number' && (PV = oP(PV)), typeof PV == 'function' || typeof PV == 'string') return oW.with(PV, PD);
    PV && typeof PV == 'object' && !PV.destroyed && PD(PV);
  }, 'withInst');
function m0(PV) {
  (Ig.msg ??= [])[PV] = "\\TX \\F0 \\T0 %";
}
oH(m0, 'scr_noface');
function m1(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FA \\TA %", String(PD));
}
oH(m1, 'scr_asgface');
function m2(...PV) {
  let PD = PV[0x0],
    PY = 0x1;
  this.length = ML(PD), this.pos = 0x0;
  for (let Pw = 0x0; PY < PV.length;) {
    if (++Pw > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    let Pp = '~' + String(PY);
    PD = MU(PD, Pp, PV[PY]), PY = PY + 0x1;
  }
  return PD;
}
oH(m2, 'scr_84_get_subst_string');
function m3() {
  return Ig.monster[0x0] + Ig.monster[0x1] + Ig.monster[0x2];
}
oH(m3, 'scr_monsterpop');
function m4(PV, PD, PY) {
  return this.thismarker = jJ('instance_create').call(this, PV, PD, jF.obj_marker), jT(this.thismarker, Pw => {
    Pw.sprite_index = PY, Pw.image_speed = 0x0, Pw.image_xscale = 0x2, Pw.image_yscale = 0x2;
  }), this.thismarker;
}
oH(m4, 'scr_dark_marker');
function m5() {
  Ig.mnfight !== 0x2 && this.instance_destroy(), this.x < 0x0 - this.sprite_width && this.instance_destroy(), this.x > 0x280 + this.sprite_width && this.instance_destroy(), this.y < 0x0 - this.sprite_height && this.instance_destroy(), this.y > 0x1e0 + this.sprite_height && this.instance_destroy();
}
oH(m5, 'scr_destroyoutside');
function m6(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FS \\TS %", String(PD));
}
oH(m6, 'scr_susface');
function m7() {
  if (Ig.monster[this.myself] === 0x1) {
    if ((Ig.monstergold ??= [])[0x3] += Ig.monstergold[this.myself], (Ig.monsterexp ??= [])[0x3] += Ig.monsterexp[this.myself], (Ig.monster ??= [])[this.myself] = 0x0, Ig.flag[Math.trunc(0x33 + this.myself)] === 0x0 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x2, Ig.monsterhp[this.myself] <= 0x0 && ((Ig.flag ??= [])[Math.trunc(0x33 + this.myself)] = 0x1)), Ig.flag[Math.trunc(0x33 + this.myself)] === 0x1 && ((Ig.flag ??= [])[0x28] += 0x1), Ig.flag[Math.trunc(0x33 + this.myself)] === 0x2 && ((Ig.flag ??= [])[0x29] += 0x1), Ig.flag[Math.trunc(0x33 + this.myself)] === 0x3 && ((Ig.flag ??= [])[0x2a] += 0x1), Ig.flag[Math.trunc(0x33 + this.myself)] === 0x5 && ((Ig.flag ??= [])[0x2b] += 0x1), jJ('scr_monsterpop').call(this) === 0x0) {
      for (this._amt_add = 0x0, this._violenced = 0x0, this._spared = 0x0, this._pacified = 0x0, this.d_i = 0x0; this.d_i < 0x3; this.d_i += 0x1) Ig.flag[Math.trunc(0x33 + this.d_i)] !== 0x0 && (this._amt_add += 0x1), Ig.flag[Math.trunc(0x33 + this.d_i)] === 0x1 && (this._violenced += 0x1), Ig.flag[Math.trunc(0x33 + this.d_i)] === 0x2 && (this._spared += 0x1), Ig.flag[Math.trunc(0x33 + this.d_i)] === 0x3 && (this._pacified += 0x1);
      this._pacified > 0x0 && ((Ig.flag ??= [])[0x32] = 0x3), this._spared > 0x0 && ((Ig.flag ??= [])[0x32] = 0x2), this._violenced > 0x0 && ((Ig.flag ??= [])[0x32] = 0x1);
    }
    this.event_user(0xb);
  }
}
oH(m7, 'scr_monsterdefeat');
function m8(PV) {
  this.getchar = 0x0, Ig.char[0x0] === 0x0 && ((Ig.char ??= [])[0x0] = PV, this.getchar = 0x1), Ig.char[0x1] === 0x0 && this.getchar === 0x0 && ((Ig.char ??= [])[0x1] = PV, this.getchar = 0x1), Ig.char[0x2] === 0x0 && this.getchar === 0x0 && ((Ig.char ??= [])[0x2] = PV, this.getchar = 0x1), oW.with('obj_darkcontroller', PD => {
    for (PD.chartotal = 0x0, (PD.havechar ??= [])[0x0] = 0x0, (PD.havechar ??= [])[0x1] = 0x0, (PD.havechar ??= [])[0x2] = 0x0, PD.i = 0x0; PD.i < 0x3; PD.i += 0x1) (Ig.faceaction ??= [])[PD.i] = 0x0, Ig.char[PD.i] !== 0x0 && (PD.chartotal += 0x1), Ig.char[PD.i] === 0x1 && ((PD.havechar ??= [])[0x0] = 0x1, (PD.charpos ??= [])[0x0] = PD.i), Ig.char[PD.i] === 0x2 && ((PD.havechar ??= [])[0x1] = 0x1, (PD.charpos ??= [])[0x1] = PD.i), Ig.char[PD.i] === 0x3 && ((PD.havechar ??= [])[0x2] = 0x1, (PD.charpos ??= [])[0x2] = PD.i);
  });
}
oH(m8, 'scr_getchar');
function m9(PV) {
  this._rreturn = 0x0;
  for (let PD = 0x0; PD < 0x3; PD++) Ig.char[PD] && IB(Ig.char[PD]) === PV && (this._rreturn = 0x1);
  return this._rreturn;
}
oH(m9, 'scr_havechar');
function mM() {
  Ig.monstertype[this.myself] === 0x1 && ((Ig.monstername ??= [])[this.myself] = 'Enemy', (Ig.monstermaxhp ??= [])[this.myself] = 0x82, (Ig.monsterhp ??= [])[this.myself] = 0x82, (Ig.monsterat ??= [])[this.myself] = 0x7, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Warning', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Victory', ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = "Victory (D)", ((Ig.canact ??= [])[this.myself] ??= [])[0x4] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x4] = "Victory (S)", ((Ig.canact ??= [])[this.myself] ??= [])[0x5] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x5] = 'Lecture', (Ig.battlemsg ??= [])[0x0] = "* You've come again to this wonderful place.&* Now tear off the mask beneath your face!"), Ig.monstertype[this.myself] === 0x2 && ((Ig.monstername ??= [])[this.myself] = 'Lancer', (Ig.monstermaxhp ??= [])[this.myself] = 0x21c, (Ig.monsterhp ??= [])[this.myself] = 0x21c, (Ig.monsterat ??= [])[this.myself] = 0x5, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x14, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Warning', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Compliment', (Ig.battlemsg ??= [])[0x0] = "* Lancer busts in!"), Ig.monstertype[this.myself] === 0x3 && ((Ig.monstername ??= [])[this.myself] = 'Dummy', (Ig.monstermaxhp ??= [])[this.myself] = 0x1c2, (Ig.monsterhp ??= [])[this.myself] = 0x1c2, (Ig.monsterat ??= [])[this.myself] = 0x0, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Hug', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "Hug Ralsei", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, (Ig.battlemsg ??= [])[0x0] = "* The tutorial begins."), Ig.monstertype[this.myself] === 0x4 && ((Ig.monstername ??= [])[this.myself] = 'Ralsei', (Ig.monstermaxhp ??= [])[this.myself] = 0x5a, (Ig.monsterhp ??= [])[this.myself] = 0x5a, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x6, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Hug', (Ig.battlemsg ??= [])[0x0] = "* The tutorial begins."), Ig.monstertype[this.myself] === 0x5 && ((Ig.monstername ??= [])[this.myself] = 'Rudinn', (Ig.monstermaxhp ??= [])[this.myself] = 0x78, (Ig.monsterhp ??= [])[this.myself] = 0x78, (Ig.monsterat ??= [])[this.myself] = 0x5, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x1e, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Convince', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Lecture', Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot < 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3)), Ig.monstertype[this.myself] === 0x6 && ((Ig.monstername ??= [])[this.myself] = 'Hathy', (Ig.monstermaxhp ??= [])[this.myself] = 0x96, (Ig.monsterhp ??= [])[this.myself] = 0x96, (Ig.monsterat ??= [])[this.myself] = 0x6, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x1c, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Flatter', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "X-Flatter", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, Ig.encounterno === 0x7 && (((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2, Ig.plot < 0x28 && (Ig.plot = 0x28)), Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot < 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3), Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot >= 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = "S-Flatter", ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x2)), Ig.monstertype[this.myself] === 0x7 && ((Ig.monstername ??= [])[this.myself] = 'Clover', (Ig.monstermaxhp ??= [])[this.myself] = 0x10e, (Ig.monsterhp ??= [])[this.myself] = 0x10e, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x2b, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', this.myact = oI(0x0, 0x1, 0x2), this.myact === 0x0 && (((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Politics', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Religion', ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Sports'), this.myact === 0x1 && (((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Kindness', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Cuteboys', ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'GunControl'), this.myact === 0x2 && (((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Trees', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Ghosts', ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Games'), Ix(jJ('scr_havechar').call(this, 0x2)) && (((Ig.canact ??= [])[this.myself] ??= [])[0x4] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x4] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x4] = 0x3)), Ig.monstertype[this.myself] === 0x8 && ((Ig.monstername ??= [])[this.myself] = 'Pippins', (Ig.monstermaxhp ??= [])[this.myself] = 0xaa, (Ig.monsterhp ??= [])[this.myself] = 0xaa, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x32, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Bet', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "X-Bet", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3), Ig.monstertype[this.myself] === 0x9 && ((Ig.monstername ??= [])[this.myself] = "C.Round", (Ig.monstermaxhp ??= [])[this.myself] = 0xa, (Ig.monsterhp ??= [])[this.myself] = 0xa, (Ig.monsterat ??= [])[this.myself] = 0x5, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0xa, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', Ig.encounterno === 0x7 && Ig.plot < 0x28 && (Ig.plot = 0x28), Ix(jJ('scr_havechar').call(this, 0x2)) && (((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x2, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = "X-Compliment", ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3)), Ig.monstertype[this.myself] === 0xa && ((Ig.monstername ??= [])[this.myself] = "K.Round", (Ig.monstermaxhp ??= [])[this.myself] = 0x514, (Ig.monsterhp ??= [])[this.myself] = 0x514, (Ig.monsterat ??= [])[this.myself] = 7.5, (Ig.monsterdf ??= [])[this.myself] = 0x3, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x64, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Bow', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "Deep Bow", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, Ix(jJ('scr_havechar').call(this, 0x2)) && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3)), Ig.monstertype[this.myself] === 0xb && ((Ig.monstername ??= [])[this.myself] = 'Ponman', (Ig.monstermaxhp ??= [])[this.myself] = 0x8c, (Ig.monsterhp ??= [])[this.myself] = 0x8c, (Ig.monsterat ??= [])[this.myself] = 0x7, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x17, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Goodnight', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Lullaby', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot < 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3)), Ig.monstertype[this.myself] === 0xc && ((Ig.monstername ??= [])[this.myself] = 'Lancer', (Ig.monstermaxhp ??= [])[this.myself] = 0x960, (Ig.monsterhp ??= [])[this.myself] = 0x960, (Ig.monsterat ??= [])[this.myself] = 0x4, (Ig.monsterdf ??= [])[this.myself] = -0x28, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check'), Ig.monstertype[this.myself] === 0xd && ((Ig.monstername ??= [])[this.myself] = 'Rabbick', (Ig.monstermaxhp ??= [])[this.myself] = 0x78, (Ig.monsterhp ??= [])[this.myself] = 0x78, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x26, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = "Blow On", ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'BreathAll', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot < 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3)), Ig.monstertype[this.myself] === 0xe && ((Ig.monstername ??= [])[this.myself] = 'Bloxer', (Ig.monstermaxhp ??= [])[this.myself] = 0x82, (Ig.monsterhp ??= [])[this.myself] = 0x82, (Ig.monsterat ??= [])[this.myself] = 0x9, (Ig.monsterdf ??= [])[this.myself] = 0x2, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x26, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Rearrange', Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot >= 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Rival', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2)), Ig.monstertype[this.myself] === 0xf && ((Ig.monstername ??= [])[this.myself] = 'Jigsawry', (Ig.monstermaxhp ??= [])[this.myself] = 0x5a, (Ig.monsterhp ??= [])[this.myself] = 0x5a, (Ig.monsterat ??= [])[this.myself] = 0x5, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x14, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Befriend', Ix(jJ('scr_havechar').call(this, 0x2)) && Ig.plot < 0x96 && (((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Warning', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3)), Ig.monstertype[this.myself] === 0x10 && ((Ig.monstername ??= [])[this.myself] = 'Clover', (Ig.monstermaxhp ??= [])[this.myself] = 0x10e, (Ig.monsterhp ??= [])[this.myself] = 0x10e, (Ig.monsterat ??= [])[this.myself] = 0x6, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x50, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'TalkBday', ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'TalkBoys', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'TalkSports', ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x4] = 'TalkAnimals', ((Ig.canact ??= [])[this.myself] ??= [])[0x4] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x5] = 'TalkTrees', ((Ig.canact ??= [])[this.myself] ??= [])[0x5] = 0x1, this.myact = oI(0x0, 0x1, 0x2)), Ig.monstertype[this.myself] === 0x11 && ((Ig.monstername ??= [])[this.myself] = 'DoomTank', (Ig.monstermaxhp ??= [])[this.myself] = 0x2bc, (Ig.monsterhp ??= [])[this.myself] = 0x2bc, (Ig.monsterat ??= [])[this.myself] = 0x6, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Hug', ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x3, ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Flatter', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3, ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Diplomacy', ((Ig.canact ??= [])[this.myself] ??= [])[0x4] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x4] = 'Smile'), Ig.monstertype[this.myself] === 0x12 && ((Ig.monstername ??= [])[this.myself] = 'Lancer', (Ig.monstermaxhp ??= [])[this.myself] = 0x320, (Ig.monsterhp ??= [])[this.myself] = 0x320, (Ig.monsterat ??= [])[this.myself] = 0x6, (Ig.monsterdf ??= [])[this.myself] = 0x1, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Anything', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "X-Anything", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3), Ig.monstertype[this.myself] === 0x13 && (this._armordf = Ig.itemdf[0x2][0x0] + Ig.itemdf[0x2][0x1] + Ig.itemdf[0x2][0x2], (Ig.monstername ??= [])[this.myself] = 'Susie', (Ig.monstermaxhp ??= [])[this.myself] = 0x78, (Ig.monsterhp ??= [])[this.myself] = 0x78, (Ig.monsterat ??= [])[this.myself] = 0x7, (Ig.monsterdf ??= [])[this.myself] = -0x5 + this._armordf, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Anything', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Sing', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x3), Ig.monstertype[this.myself] === 0x14 && ((Ig.monstername ??= [])[this.myself] = 'JEVIL', (Ig.monstermaxhp ??= [])[this.myself] = 0xdac, (Ig.monsterhp ??= [])[this.myself] = 0xdac, (Ig.monsterat ??= [])[this.myself] = 0xa, (Ig.monsterdf ??= [])[this.myself] = 0x5, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x3e7, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Pirouette', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x1] = "Random#Chaos", ((Ig.actcost ??= [])[this.myself] ??= [])[0x1] = 0x32, ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x4, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Hypnosis', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x2] = "Induce#TIRED", ((Ig.actcost ??= [])[this.myself] ??= [])[0x2] = 0x7d), Ig.monstertype[this.myself] === 0x15 && ((Ig.monstername ??= [])[this.myself] = "K.Round", (Ig.monstermaxhp ??= [])[this.myself] = 0x514, (Ig.monsterhp ??= [])[this.myself] = 0x514, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x3, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x64, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', Ig.flag[0xf6] === 0x1 && (((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Checkers'), ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Bow', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "Susie's Idea", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x4), Ig.monstertype[this.myself] === 0x16 && ((Ig.monstername ??= [])[this.myself] = "Rudinn Ranger", (Ig.monstermaxhp ??= [])[this.myself] = 0xaa, (Ig.monsterhp ??= [])[this.myself] = 0xaa, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x2d, (Ig.sparepoint ??= [])[this.myself] = 0x19, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Convince', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Compliment', ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2), Ig.monstertype[this.myself] === 0x17 && ((Ig.monstername ??= [])[this.myself] = "Head Hathy", (Ig.monstermaxhp ??= [])[this.myself] = 0xbe, (Ig.monsterhp ??= [])[this.myself] = 0xbe, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x28, (Ig.sparepoint ??= [])[this.myself] = 0xa, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x64, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Flirt', ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = "X-Flirt", ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2), Ig.monstertype[this.myself] === 0x19 && ((Ig.monstername ??= [])[this.myself] = 'King', (Ig.monstermaxhp ??= [])[this.myself] = 0xaf0, (Ig.monsterhp ??= [])[this.myself] = 0xaf0, (Ig.monsterat ??= [])[this.myself] = 0x8, (Ig.monsterdf ??= [])[this.myself] = 0x0, (Ig.monsterexp ??= [])[this.myself] = 0x0, (Ig.monstergold ??= [])[this.myself] = 0x0, (Ig.sparepoint ??= [])[this.myself] = 0x0, (Ig.mercymod ??= [])[this.myself] = 0x0, (Ig.mercymax ??= [])[this.myself] = 0x3e7, ((Ig.canact ??= [])[this.myself] ??= [])[0x0] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x0] = 'Check', ((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Talk', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x1] = '\x20', ((Ig.actcost ??= [])[this.myself] ??= [])[0x1] = 0x0, ((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'Talk', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x2] = '\x20', ((Ig.actcost ??= [])[this.myself] ??= [])[0x2] = 0x0, ((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'Talk', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x3] = '\x20', ((Ig.actcost ??= [])[this.myself] ??= [])[0x3] = 0x0, Ig.tempflag[0x5] === 0x1 && (((Ig.canact ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x1] = 0x1, ((Ig.actname ??= [])[this.myself] ??= [])[0x1] = 'Courage', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x1] = "Defense#Boost", ((Ig.actcost ??= [])[this.myself] ??= [])[0x1] = 0x3e), Ig.tempflag[0x6] === 0x1 && (((Ig.canact ??= [])[this.myself] ??= [])[0x2] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x2] = 0x2, ((Ig.actname ??= [])[this.myself] ??= [])[0x2] = 'RedBuster', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x2] = "Red#Damage", ((Ig.actcost ??= [])[this.myself] ??= [])[0x2] = 0x96), Ig.tempflag[0x7] === 0x1 && (((Ig.canact ??= [])[this.myself] ??= [])[0x3] = 0x1, ((Ig.actactor ??= [])[this.myself] ??= [])[0x3] = 0x3, ((Ig.actname ??= [])[this.myself] ??= [])[0x3] = 'DualHeal', ((Ig.actdesc ??= [])[this.myself] ??= [])[0x3] = "Heals#everyone", ((Ig.actcost ??= [])[this.myself] ??= [])[0x3] = 0x7d));
}
oH(mM, 'scr_monstersetup');
function mI(PV, PD) {
  Ig.plot >= 0xeb ? (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FK \\TK %", String(PD)) : (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\TK %", String(PD));
}
oH(mI, 'scr_kingface');
function mo(PV) {
  for (this.haveit = 0x0, this.itemcount = 0x0, this.i = 0x0; this.i < 0xc; this.i += 0x1) Ig.keyitem[this.i] === PV && (this.haveit = 0x1), Ig.keyitem[this.i] === PV && (this.itemcount += 0x1);
  return this.haveit;
}
oH(mo, 'scr_keyitemcheck');
function my(PV) {
  oW.with('obj_caterpillarchara', PD => {
    for (PD.i = 0x0; PD.i < 0x19; PD.i += 0x1) (PD.facing ??= [])[PD.i] = PV;
  });
}
oH(my, 'scr_caterpillar_facing');
function mE() {
  if (Ig.inv < 0x0) {
    for (jJ('scr_damage_cache').call(this), this.remdamage = this.damage, this.remtarget = this.target, Ix(IJ(jF.obj_shake)) || jJ('instance_create').call(this, 0x0, 0x0, jF.obj_shake), oW.with('obj_dmgwriter', PV => {
      PV.killactive = 0x1;
    }), jJ('snd_stop').call(this, 'snd_hurt1'), jJ('snd_play').call(this, 'snd_hurt1'), this.ti = 0x0; this.ti < 0x3; this.ti += 0x1) Ig.inv = -0x1, this.damage = this.remdamage, this.target = this.ti, this.tdamage = this.damage, jT(Ig.charinstance[this.target], PV => {
      PV.hurt = 0x1, PV.hurttimer = 0x0;
    }), this.hpdiff = this.tdamage, this.hpdiff >= Ig.hp[Ig.char[this.target]] && (this.hpdiff = Ig.hp[Ig.char[this.target]] - 0x1), this.d_cancel = 0x0, this.hpdiff <= 0x1 && (this.d_cancel = 0x1, this.hpdiff = 0x0), this.d_cancel === 0x0 && (this.doomtype = -0x1, (Ig.hp ??= [])[Ig.char[this.target]] -= this.hpdiff, this.dmgwriter = jJ('instance_create').call(this, Ig.charinstance[this.target].x, Ig.charinstance[this.target].y + Ig.charinstance[this.target].myheight - 0x18, jF.obj_dmgwriter), this.dmgwriter.damage = this.hpdiff, this.dmgwriter.type = this.doomtype), Ig.hp[Ig.char[this.target]] < 0x1 && ((Ig.hp ??= [])[Ig.char[this.target]] = 0x1);
    jJ('scr_damage_check').call(this), this.gameover = 0x1, Ig.char[0x0] !== 0x0 && Ig.hp[Ig.char[0x0]] > 0x1 && (this.gameover = 0x0), Ig.char[0x1] !== 0x0 && Ig.hp[Ig.char[0x1]] > 0x1 && (this.gameover = 0x0), Ig.char[0x2] !== 0x0 && Ig.hp[Ig.char[0x2]] > 0x1 && (this.gameover = 0x0), this.gameover === 0x1 && jJ('scr_gameover').call(this), this.target = this.remtarget, Ig.inv = Ig.invc * 0x28;
  }
}
oH(mE, 'scr_damage_all_overworld');
function mj() {
  Ig.damage_cache = [];
  for (let PV = 0x0; PV < 0x3; PV++) (Ig.damage_cache ??= [])[Mg(Ig.damage_cache)] = Ig.hp[Ig.char[PV]];
}
oH(mj, 'scr_damage_cache');
function mm() {
  Ix(Mx('damage_cache')) || (Ig.damage_cache = []);
  let PV = 0x0;
  for (let PD = 0x0; PD < Mg(Ig.damage_cache); PD++) {
    let PY = Ig.damage_cache[PD];
    if (Ig.hp[Ig.char[PD]] < PY) {
      PV = 0x1;
      break;
    }
  }
  Ix(PV) && oW.with('obj_event_manager', Pw => {
    jl(0x1);
  });
}
oH(mm, 'scr_damage_check');
function mP() {
  MQ(), jJ('snd_play').call(this, 'snd_hurt1'), Mc !== 'room_forest_fightsusie' ? (Ig.screenshot = oj(Mn, 0x0, 0x0, 0x280, 0x1e0, 0x0, 0x0, 0x0, 0x0), jJ('snd_free_all').call(this), Ml('room_gameover')) : (Ig.entrance = 0x0, (Ig.tempflag ??= [])[0x9] = 0x1, Ml('room_forest_savepoint3'));
}
oH(mP, 'scr_gameover');
function mX() {
  return this._oflash = jJ('instance_create').call(this, this.x, this.y, jF.obj_oflash), this._oflash.image_xscale = this.image_xscale, this._oflash.image_speed = 0x0, this._oflash.image_index = this.image_index, this._oflash.image_yscale = this.image_yscale, this._oflash.sprite_index = this.sprite_index, this._oflash.depth = this.depth - 0x1, this._oflash.target = this, this._oflash;
}
oH(mX, 'scr_oflash');
function mK() {
  return Ig.fc = 0x0, Ig.typer = 0x4, jJ('scr_battletext').call(this), this.battlewriter;
}
oH(mK, 'scr_battletext_default');
function mk() {
  return this.xx = 0x0, this.yy = 0x0, Ig.fc !== 0x0 && (this.battlewriter = jJ('instance_create').call(this, this.xx + 0x1e, this.yy + 0x178, jF.obj_writer)), Ig.fc === 0x0 && (this.battlewriter = jJ('instance_create').call(this, this.xx + 0x1e, this.yy + 0x178, jF.obj_writer)), this.myface = jJ('instance_create').call(this, this.xx + 0x1a, this.yy + 0x17c, jF.obj_face), jT(this.battlewriter, PV => {
    PV.dialoguer = 0x1, PV.facer = 0x1, Ig.fc === 0x0 && PV.originalcharline === 0x21 && (PV.charline = 0x1a);
  }), this.battlewriter;
}
oH(mk, 'scr_battletext');
function mW(PV) {
  switch (PV) {
    case 0x0:
      break;
    case 0xa:
      {
        (Ig.choicemsg ??= [])[0x1] = "#Yes", (Ig.choicemsg ??= [])[0x0] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* You really didn't want to throw it away./", (Ig.msg ??= [])[0x1] = "* Throw it away anyway?/", (Ig.msg ??= [])[0x2] = "\\C2";
        break;
      }
    case 0xb:
      {
        if (Ig.choice === 0x0) (Ig.msg ??= [])[0x0] = "* You felt a feeling of relief./%";else {
          for ((Ig.msg ??= [])[0x0] = "* Hand shaking^1, you dropped the ball of junk on the ground./", (Ig.msg ??= [])[0x1] = "* It broke into pieces./", (Ig.msg ??= [])[0x2] = "* You felt bitter./%", Mz(this, jJ('scr_litemshift'), Ig.menucoord[0x1], 0x0), this.i = 0x0; this.i < 0xc; this.i += 0x1) (Ig.item ??= [])[this.i] = 0x0, (Ig.weapon ??= [])[this.i] = 0x0, (Ig.armor ??= [])[this.i] = 0x0;
        }
        break;
      }
    case 0x64:
      {
        (Ig.msg ??= [])[0x0] = "* Hey, Kris^1! What's up^1?&* Didja lose your pencil again?/", (Ig.msg ??= [])[0x1] = "\\E4* Here^1, you want the candy-cane one or the one with lights on it?/", (Ig.msg ??= [])[0x2] = "\\E1* Huh^1?&* You want to be partners?/", (Ig.msg ??= [])[0x3] = "\\E4* Ummm..^1. Sorry..^1.&* Berdly already asked me.../", (Ig.msg ??= [])[0x4] = "\\E0* But I could ask Ms. Alphys if we could make a group of 3!/", (Ig.msg ??= [])[0x5] = "\\E4* I'll ask if you're sure!& &Not yet     Yes. Ask.\\C1 ", (Ig.msg ??= [])[0x6] = '\x20';
        break;
      }
    case 0x65:
      {
        Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* OK^1, I'll ask!/", (Ig.msg ??= [])[0x1] = "* Miss Alphys^1!&* Umm^1, is it OK if we have a group of 3?/%", oW.with('obj_classscene', PD => {
          PD.con = 0x14;
        })), Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E4* Yeah^1, I'm sure there's someone else you can ask!/%");
        break;
      }
    case 0x66:
      {
        (Ig.msg ??= [])[0x0] = "\\E0* Do you wanna be partners?&Not yet     Yes\\C1 ", (Ig.msg ??= [])[0x1] = '\x20';
        break;
      }
    case 0x67:
      {
        Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* OK^1, I'll ask!/", (Ig.msg ??= [])[0x1] = "* Miss Alphys^1!&* Umm^1, is it OK if we have a group of 3?/%", oW.with('obj_classscene', PD => {
          PD.con = 0x14;
        })), Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E4* Umm^1, OK^1.&* You just keep doing your thing^1, Kris./%");
        break;
      }
    case 0x68:
      {
        (Ig.msg ??= [])[0x0] = "\\E0* Alright^1.&* Let's get this over with./", (Ig.msg ??= [])[0x1] = "* We'll get more chalk^1.&* Mosey back to class^1.&* And then^1, Kris.../", (Ig.msg ??= [])[0x2] = "\\E2* YOU'LL do our project./", (Ig.msg ??= [])[0x3] = "* How's that sound?& &Good        Bad\\C1 ", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0x69:
      {
        (Ig.msg ??= [])[0x0] = " %%";
        break;
      }
    case 0x6e:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.flag[0x64] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (There's something glowing inside.)/", (Ig.msg ??= [])[0x1] = "* (Take it?)/ ", (Ig.msg ??= [])[0x2] = " \\C2") : (Ig.msg ??= [])[0x0] = "* (It's dark inside.)/%";
        break;
      }
    case 0x6f:
      {
        Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (You got the Glowshard.)/%", (Ig.flag ??= [])[0x64] = 0x1, jJ('scr_itemget').call(this, 0x3), oW.with('obj_readable_room1', PD => {
          jT(PD.shine, PY => {
            PY.instance_destroy();
          });
        })) : (Ig.msg ??= [])[0x0] = "* (It stayed.)/%";
        break;
      }
    case 0x78:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Listen", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Welcome^1.&* I am the \\cYPrince\\cW of this \\cYKingdom\\cW.../", (Ig.msg ??= [])[0x1] = "* The \\cYKINGDOM OF DARKNESS\\cW./", (Ig.msg ??= [])[0x2] = "* Kris^1, Susie..^1.&* There is a \\cYLEGEND\\cW in this land./", (Ig.msg ??= [])[0x3] = "* A LEGEND that one day^1, two \\cYHEROES of LIGHT\\cW will arrive,/", (Ig.msg ??= [])[0x4] = "* And fulfill the ancient prophecy^1, foretold by time and space./", (Ig.msg ??= [])[0x5] = "* Please^1, Heroes..^1.&* Listen to my tale.../", (Ig.msg ??= [])[0x6] = " \\C2 ", (Ig.msg ??= [])[0x7] = '\x20';
        break;
      }
    case 0x79:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Listen", (Ig.choicemsg ??= [])[0x1] = "#We know it#Already", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.choice === 0x0 ? (Ig.msg ??= [])[0x0] = "* Very well then.../%" : ((Ig.msg ??= [])[0x0] = "* .../", (Ig.msg ??= [])[0x1] = "\\E1* Umm, r-really^1?&* Are you sure^1?&* It's fairly important./", (Ig.msg ??= [])[0x2] = "* And... um^1, in my opinion^1, it's a really nice \\cYPROPHECY\\cW!/", (Ig.msg ??= [])[0x3] = "* I think you'd quite like it!/", (Ig.msg ??= [])[0x4] = "\\C2 ", (Ig.msg ??= [])[0x5] = '\x20');
        break;
      }
    case 0x7a:
      {
        Ig.choice === 0x0 ? (Ig.msg ??= [])[0x0] = "\\E0* Phew^1!&* Um^1, very well then.../%" : ((Ig.flag ??= [])[0xcb] = 0x1, oW.with('obj_darkcastle_event', PD => {
          PD.con = 0x1e;
        }), (Ig.msg ??= [])[0x0] = "* ... really^1?&* You've heard it already?/", (Ig.msg ??= [])[0x1] = "* Oh..^1. Perhaps I shouldn't have rehearsed it so much.../", jJ('scr_susface').call(this, 0x2, 0x0), (Ig.msg ??= [])[0x3] = "* Look^1, dude^1, we didn't come here for a bedtime story./", (Ig.msg ??= [])[0x4] = "* Just tell us how to get home./", jJ('scr_ralface').call(this, 0x5, 0x0), (Ig.msg ??= [])[0x6] = "* Ummm^1, the easiest way would be to seal the \\cYEastern FOUNTAIN\\cW./", jJ('scr_susface').call(this, 0x7, 0x0), (Ig.msg ??= [])[0x8] = "* Fountain?/", (Ig.msg ??= [])[0x9] = "\\E1* You mean^1, uh^1, like the water bubbler or something?/", jJ('scr_ralface').call(this, 0xa, 0x0), (Ig.msg ??= [])[0xb] = "* THE fountain^1.&* That which gives the \\cYDARK WORLD\\cW form./", (Ig.msg ??= [])[0xc] = "\\E1* ... umm^1, are you sure you actually know the legend?/", jJ('scr_susface').call(this, 0xd, 0x1), (Ig.msg ??= [])[0xe] = "* Look./", (Ig.msg ??= [])[0xf] = "* .../", (Ig.msg ??= [])[0x10] = "* No./", (Ig.msg ??= [])[0x11] = "* But I think I've got enough info./", (Ig.msg ??= [])[0x12] = "* See you two later./", jJ('scr_ralface').call(this, 0x13, 0x1), (Ig.msg ??= [])[0x14] = "* W-wait^1!&* Let me at least tell you how to.../%");
        break;
      }
    case 0x7d:
      {
        (Ig.choicemsg ??= [])[0x0] = "I'll be#Your#Subject", (Ig.choicemsg ??= [])[0x1] = "Keep#Dreaming", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* This is the CASTLE TOWN^2, where my subjects reside.../", (Ig.msg ??= [])[0x1] = "\\E1* Err, well, they would if I had any.../", (Ig.msg ??= [])[0x2] = "\\E8* Oh, don't worry about me, Kris!/", (Ig.msg ??= [])[0x3] = "\\E0* I'm certain I'll find a subject someday.../", (Ig.msg ??= [])[0x4] = " \\C2", (Ig.msg ??= [])[0x5] = '\x20';
        break;
      }
    case 0x7e:
      {
        Ig.choice === 0x0 ? (Ig.fe = 0x7, (Ig.flag ??= [])[0xcc] = 0x1, (Ig.msg ??= [])[0x0] = "\\E3* H..^1. Huh!?/", (Ig.msg ??= [])[0x1] = "\\E7* Why^1, Kris^1, you don't have to do that.../", (Ig.msg ??= [])[0x2] = "\\E1* ... but^1, if you insist.../", (Ig.msg ??= [])[0x3] = "\\E0* Kris, as your Prince and authority, I order you to...!/", (Ig.msg ??= [])[0x4] = "\\E8* Please let me know what to do!/%") : ((Ig.flag ??= [])[0xcc] = 0x2, Ig.fe = 0x8, (Ig.msg ??= [])[0x0] = "* Oh^1, thank you^1, Kris^2!&* I will!/%");
        break;
      }
    case 0x82:
      {
        (Ig.choicemsg ??= [])[0x0] = "#I know", (Ig.choicemsg ??= [])[0x1] = "#Really!?", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', this.input_name = jJ('scr_get_input_name').call(this, 0x5), (Ig.msg ??= [])[0x0] = jJ('scr_84_get_subst_string').call(this, "* Er^1, Kris^1, you know you can hold ~1 to run...?/", this.input_name), (Ig.msg ??= [])[0x1] = " \\C2", (Ig.msg ??= [])[0x2] = '\x20';
        break;
      }
    case 0x83:
      {
        Ig.choice === 0x0 ? (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* Really^1?&* And yet you choose not to...?/", (Ig.msg ??= [])[0x1] = "\\E6* Right^1, who knows how long these leisurely days will last.../", (Ig.msg ??= [])[0x2] = "\\E0* There's nothing wrong with taking your time^1, Kris./%") : (Ig.fe = 0x0, this.input_name = jJ('scr_get_input_name').call(this, 0x5), (Ig.msg ??= [])[0x0] = jJ('scr_84_get_subst_string').call(this, "* Right^1!&* You'll move faster by holding ~1!/", this.input_name), (Ig.msg ??= [])[0x1] = "\\E8* And I'll be right behind you^1, so don't worry!/", (Ig.msg ??= [])[0x2] = "\\E6* ... Unless you want to get away^1, in which case^1, sorry./%");
        break;
      }
    case 0x84:
      {
        (Ig.choicemsg ??= [])[0x0] = "#I know", (Ig.choicemsg ??= [])[0x1] = "#Really!?", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Umm^1, Kris^1, did you know.../", (Ig.msg ??= [])[0x1] = "* ... You can skip text by pressing " + jJ('scr_get_input_name').call(this, 0x5) + '?/', (Ig.msg ??= [])[0x2] = " \\C2", (Ig.msg ??= [])[0x3] = '\x20';
        break;
      }
    case 0x85:
      {
        Ig.choice === 0x0 ? (Ig.fe = 0x3, (Ig.msg ??= [])[0x0] = "* ... Really^1?&* So you've just been.../", (Ig.msg ??= [])[0x1] = "\\E2* Listening to me talk^1, because you wanted to?/", (Ig.msg ??= [])[0x2] = "\\E6* I'll try to make it worth your while^1, Kris!/%") : (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "* Right^1! In the case you read very quickly./", (Ig.msg ??= [])[0x1] = "\\E1* Or you're tired of what's being said./", (Ig.msg ??= [])[0x2] = "\\E6* ... No need to skip my text^1, right^1, Kris?/%");
        break;
      }
    case 0x87:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#Don't", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E3* Oh^1, Kris^1!&* It's the training dummy I made!/", (Ig.msg ??= [])[0x1] = "\\E8* Now seems like a great chance to prepare for the enemy./", (Ig.msg ??= [])[0x2] = "\\E0* Would you like me to teach you how to fight?/", (Ig.msg ??= [])[0x3] = " \\C2", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0x88:
      {
        Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = "\\E0* OK^1!&* Get ready, Kris!/%", oW.with('obj_tutorialbattleevent', PD => {
          PD.con = 0x14;
        })) : ((Ig.msg ??= [])[0x0] = "\\E3* Right^1, you already fought Lancer^1, didn't you...?/", (Ig.msg ??= [])[0x1] = "\\E1* I was so excited to teach you^1, I absolutely blanked!/", (Ig.msg ??= [])[0x2] = "\\E2* ... B-but^1, um..^1.&* Just in case you forgot anything.../", (Ig.msg ??= [])[0x3] = "\\E6* Here^1!&* I made a Manual for you and Susie!/", (Ig.msg ??= [])[0x4] = "\\E0* Press " + jJ('scr_get_input_name').call(this, 0x6) + " to open the menu and use it in your ITEMS./", jJ('scr_noface').call(this, 0x5), (Ig.msg ??= [])[0x6] = "* (You got the Manual.)/%");
        break;
      }
    case 0x8c:
      {
        (Ig.choicemsg ??= [])[0x0] = "#I can#handle it", (Ig.choicemsg ??= [])[0x1] = "#.....#", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E3* Oh my^2!&* The Great Door is opened?!/", (Ig.msg ??= [])[0x1] = "* No wonder Lancer was able to come through.../", (Ig.msg ??= [])[0x2] = "\\E1* .../", (Ig.msg ??= [])[0x3] = "* Kris, once we pass through this door.../", (Ig.msg ??= [])[0x4] = "* Our adventure will really begin./", (Ig.msg ??= [])[0x5] = "* A journey foretold exactly by the prophecy.../", (Ig.msg ??= [])[0x6] = "\\E6* But^1, Kris^1, I believe YOUR choices are important^1, too./", (Ig.msg ??= [])[0x7] = "\\E0* This world is full of all kinds of people^1, Kris./", (Ig.msg ??= [])[0x8] = "\\E6* In the end^1, how we treat them makes all the difference./", (Ig.msg ??= [])[0x9] = "\\E8* So let's try our best to get by without FIGHTing./", (Ig.msg ??= [])[0xa] = "\\E1* If we can manage to do that.../", (Ig.msg ??= [])[0xb] = "\\E0* I believe this tale may have a happy ending./", (Ig.msg ??= [])[0xc] = "\\E6* Otherwise^1, I fear that.../", (Ig.msg ??= [])[0xd] = "\\E1* ... you may not..^1. find the result favorable./", (Ig.msg ??= [])[0xe] = "\\E3* ... Oh^1, I'm sorry^1! Is that too much to ask?/", (Ig.msg ??= [])[0xf] = " \\C2", (Ig.msg ??= [])[0x10] = '\x20';
        break;
      }
    case 0x8d:
      {
        (Ig.msg ??= [])[0x0] = "\\E0* Kris^1, I knew you were a hero the moment I saw you./", (Ig.msg ??= [])[0x1] = "\\E8* Let's try our best^1, alright?/%", Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E3* O-oh^1, I'm sorry!/", (Ig.msg ??= [])[0x1] = "\\E6* Kris^1, in the end^1, what you choose is up to you./", (Ig.msg ??= [])[0x2] = "\\E8* As long as you're happy with it^1, I'm happy too./", (Ig.msg ??= [])[0x3] = "\\E0* So just try your best^1, and don't worry!/%");
        break;
      }
    case 0x91:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.flag[0x65] === 0x0 && ((Ig.msg ??= [])[0x0] = "* (There are two objects hanging from the tree.)/", (Ig.msg ??= [])[0x1] = "* (Take one?)/", (Ig.msg ??= [])[0x2] = "\\C2"), Ig.flag[0x65] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (There's a candy hanging from the tree.)/", (Ig.msg ??= [])[0x1] = "* (Take one?)/", (Ig.msg ??= [])[0x2] = "\\C2"), Ig.flag[0x65] >= 0x2 && ((Ig.msg ??= [])[0x0] = "* (There's nothing hanging low enough to take.)/%");
        break;
      }
    case 0x92:
      {
        Ig.choice === 0x0 ? (jJ('scr_itemget').call(this, 0x1), this.noroom === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (You got the Dark Candy.)/%", (Ig.flag ??= [])[0x65] += 0x1) : (Ig.msg ??= [])[0x0] = "* (You can't carry any more.)/%") : (Ig.msg ??= [])[0x0] = "* (You decided to let the tree keep it.)/%";
        break;
      }
    case 0x93:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.flag[0x66] === 0x0 && ((Ig.msg ??= [])[0x0] = "* (There are two objects hanging from the tree.)/", (Ig.msg ??= [])[0x1] = "* (Take one?)/", (Ig.msg ??= [])[0x2] = " \\C2"), Ig.flag[0x66] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (There's a candy hanging from the tree.)/", (Ig.msg ??= [])[0x1] = "* (Take one?)/", (Ig.msg ??= [])[0x2] = " \\C2"), Ig.flag[0x66] >= 0x2 && ((Ig.msg ??= [])[0x0] = "* (There's nothing hanging low enough to take.)/%");
        break;
      }
    case 0x94:
      {
        Ig.choice === 0x0 ? (jJ('scr_itemget').call(this, 0x1), this.noroom === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (You got the Dark Candy.)/%", (Ig.flag ??= [])[0x66] += 0x1) : (Ig.msg ??= [])[0x0] = "* (You can't carry any more.)/%") : (Ig.msg ??= [])[0x0] = "* (You decided to let the tree keep it.)/%";
        break;
      }
    case 0x95:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.flag[0x67] === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (The remains of the cake are still smoldering...)/", (Ig.msg ??= [])[0x1] = "* (Take a piece?)/", (Ig.msg ??= [])[0x2] = " \\C2") : (Ig.msg ??= [])[0x0] = "* (The remains of the cake are still smoldering...)/%";
        break;
      }
    case 0x96:
      {
        Ig.choice === 0x0 ? (jJ('scr_keyitemget').call(this, 0x3), this.noroom === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (The Broken Cake was added to your \\cYKEY ITEMS\\cW.)/%", (Ig.flag ??= [])[0x67] = 0x1) : (Ig.msg ??= [])[0x0] = "* (You can't carry any more.)/%") : (Ig.msg ??= [])[0x0] = "* (You decided putting cake in your pockets is a bad idea.)/%";
        break;
      }
    case 0xaf:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Crumpled#paper", (Ig.choicemsg ??= [])[0x1] = "LANCER#labelled#paper", (Ig.choicemsg ??= [])[0x2] = "Neat paper", (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Alright^1, everyone's put in their entries!/", (Ig.msg ??= [])[0x1] = "\\E2* Blue person^1, you can choose./", (Ig.msg ??= [])[0x2] = "\\E1* Since you look like you don't care./", (Ig.msg ??= [])[0x3] = "\\C3 ", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0xb0:
      {
        Ig.choice === 0x0 && (Ig.fc = 0x0, Ig.typer = 0x6, (Ig.msg ??= [])[0x0] = "* (You take the crumpled up piece of paper.)/", (Ig.msg ??= [])[0x1] = "* (You open it up.)/", jJ('scr_lanface').call(this, 0x2, 0x2), (Ig.msg ??= [])[0x3] = "* OK!!&* And your name is...!/", (Ig.msg ??= [])[0x4] = "\\E6* ... Hmm./", (Ig.msg ??= [])[0x5] = "\\E7* I don't think I'm allowed to say this one./", jJ('scr_susface').call(this, 0x6, 0x2), (Ig.msg ??= [])[0x7] = "* It's PRONOUNCED^1, \"The $!$? Squad.\"//", jJ('scr_lanface').call(this, 0x8, 0x7), (Ig.msg ??= [])[0x9] = "* Woah^1, I'm not allowed to say Tier-TWO swear words!/", (Ig.msg ??= [])[0xa] = "\\E3* Wow^1. You three's collective dad must be very cool./", jJ('scr_ralface').call(this, 0xb, 0x1), (Ig.msg ??= [])[0xc] = "* Er^1, could we PERHAPS consider a DIFFERENT name?/", jJ('scr_susface').call(this, 0xd, 0x2), (Ig.msg ??= [])[0xe] = "* Ralsei^1, you don't HAVE to be in our Squad./", jJ('scr_lanface').call(this, 0xf, 0x2), (Ig.msg ??= [])[0x10] = "* Yeah! How about I be in the Squad and YOU be the bad guy?/", (Ig.msg ??= [])[0x11] = "\\E1* Here^1.&* Call up my dad./", (Ig.msg ??= [])[0x12] = "* Tell him he has a new son./", (Ig.msg ??= [])[0x13] = "\\E3* One that has to take a shower every time he reads a swear word./", jJ('scr_ralface').call(this, 0x14, 'A'), (Ig.msg ??= [])[0x15] = "* OK^1, fine^1!&* We can keep the name^1!&* I just won't say it./", jJ('scr_lanface').call(this, 0x16, 0x2), (Ig.msg ??= [])[0x17] = "* Haha^1, me too!/", (Ig.msg ??= [])[0x18] = "\\E1* See ya^1, losers^1!&* It's shower time!/%", (Ig.flag ??= [])[0xd6] = 0x1), Ig.choice === 0x1 && (Ig.fc = 0x0, Ig.typer = 0x6, (Ig.msg ??= [])[0x0] = "* (You take the paper with \"LANCER\" written on the outside.)/", (Ig.msg ??= [])[0x1] = "* (You open it up.)/", (Ig.msg ??= [])[0x2] = "* (On the inside...)&* (It also says \"LANCER.\")/", jJ('scr_lanface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* Wow^1, who did that one^1?&* It's really good!/", jJ('scr_ralface').call(this, 0x5, 'A'), (Ig.msg ??= [])[0x6] = "* Wait^1, why do YOU get to choose the name?/", jJ('scr_susface').call(this, 0x7, 0x1), (Ig.msg ??= [])[0x8] = "* Hey^1.&* He didn't^1, Kris did./", jJ('scr_lanface').call(this, 0x9, 0x3), (Ig.msg ??= [])[0xa] = "* Yeah^1!&* It doesn't matter who MAY have written it!/", (Ig.msg ??= [])[0xb] = "\\E1* Regardless^1, LANCER's going to meet absolute doom!/", (Ig.msg ??= [])[0xc] = "\\E6* ... this name feels weird^1, actually./", (Ig.msg ??= [])[0xd] = "\\E4* Hmmm..../", (Ig.msg ??= [])[0xe] = "\\E3* I know^1! Let's call it the LANCER FAN CLUB for short!/", (Ig.msg ??= [])[0xf] = "\\E3* See you later^1, me!/%", (Ig.flag ??= [])[0xd6] = 0x2), Ig.choice === 0x2 && (Ig.fc = 0x0, Ig.typer = 0x6, (Ig.msg ??= [])[0x0] = "* (You take the neatly folded piece of paper.)/", (Ig.msg ??= [])[0x1] = "* (You open it up.)/", jJ('scr_lanface').call(this, 0x2, 0x7), (Ig.msg ??= [])[0x3] = "* \"The Legendary Heroes: The Herald of Fun and Friendship\"/", jJ('scr_ralface').call(this, 0x4, 0x8), (Ig.msg ??= [])[0x5] = "* Oh^1, oh!&* That's mine!/", (Ig.msg ??= [])[0x6] = "\\E0* See^1, I think it's the perfect name.../", (Ig.msg ??= [])[0x7] = "\\E6* Because we're all friends^1: That like to have a lot of fun./", jJ('scr_susface').call(this, 0x8, 0x0), (Ig.msg ??= [])[0x9] = "* Okay^1, first..^1. jeez^1, that's a mouthful^1, dude./", (Ig.msg ??= [])[0xa] = "* Second^1, what are our enemies gonna think?/", (Ig.msg ??= [])[0xb] = "\\E2* That we're gonna be BUDDIES with 'em?/", (Ig.msg ??= [])[0xc] = "* Let's change it to something SHORT^1! INTIMIDATING!/", (Ig.msg ??= [])[0xd] = "\\E4* Something PUNCHY^1! Something BAD-ASS!/", jJ('scr_ralface').call(this, 0xe, 0x1), (Ig.msg ??= [])[0xf] = "* ... like what?/", jJ('scr_susface').call(this, 0x10, 0x2), (Ig.msg ??= [])[0x11] = "* Well^1, uh..^1.&* Y'know^1, for starters.../", (Ig.msg ??= [])[0x12] = "\\E0* How about..^1.&* JUST^1, uh..^1./", (Ig.msg ??= [])[0x13] = "\\E6* \"The Fun Gang.\"/", (Ig.msg ??= [])[0x14] = "\\E6* Ya know^1, just^1, uh^1, concentrating on the \"Fun\" part./", jJ('scr_lanface').call(this, 0x15, 0x1), (Ig.msg ??= [])[0x16] = "* It's perfect!!!/", (Ig.msg ??= [])[0x17] = "* Well^1, see ya^1, Fun Gang!/", (Ig.msg ??= [])[0x18] = "* I've got to osmose my afternoon milk!/%", (Ig.flag ??= [])[0xd6] = 0x3);
        break;
      }
    case 0xb4:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E2* Well jingle my goshdarn bells^1! Looks like Krismas came early!/", (Ig.msg ??= [])[0x1] = "\\E1* Alright^1, Kris^1. Just gimme the straight shot./", (Ig.msg ??= [])[0x2] = "\\E2* Why you here^1?&* Did your mom make you come here?/", (Ig.msg ??= [])[0x3] = "\\C2 ", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0xb5:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Noelle", (Ig.choicemsg ??= [])[0x1] = " #Family", (Ig.choicemsg ??= [])[0x2] = 'Illness', (Ig.choicemsg ??= [])[0x3] = 'Nothing', (Ig.msg ??= [])[0x0] = "\\E0* Hey^1, Kris^1, you wanna chat or something?/", (Ig.msg ??= [])[0x1] = "\\E2* Don't worry^1, there's no way you can bore me right now!/", (Ig.msg ??= [])[0x2] = "\\C4 ", Ig.flag[0xff] < 0x2 && ((Ig.flag ??= [])[0xff] = 0x2, (Ig.msg ??= [])[0x0] = "\\E2* Hahaha^1, that's what I thought^1!&* She's a PEACH^1, huh...?/", (Ig.msg ??= [])[0x1] = "\\E7* Fuzzy n' sweet on the outside^1, a total NUT on the inside!/", (Ig.msg ??= [])[0x2] = "\\E0* Oh^1, your dad^1? Yeah^1, he's a real fruit himself too./", (Ig.msg ??= [])[0x3] = "\\E7* Which one^1? I dunno^1, probably a hairy one...^1 like a kiwi./", (Ig.msg ??= [])[0x4] = "\\E7* Hahahaha!!!/", (Ig.msg ??= [])[0x5] = "\\E0* Okay^1, okay^1, seriously^1, you wanna chat or something?/", Ig.choice === 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E1* Really^1?&* You've grown up a lot^1, Kris./", (Ig.msg ??= [])[0x1] = "\\E4* I'm proud of you./", (Ig.msg ??= [])[0x2] = "\\E5* Wasn't too long ago you were just the creepy kid next door./", (Ig.msg ??= [])[0x3] = "\\E7* Now you're the creepy kid right in front of me!/", (Ig.msg ??= [])[0x4] = "* Hahahaha!!!/", (Ig.msg ??= [])[0x5] = "\\E0* Okay^1, okay^1, seriously^1, you wanna chat or something?/"), (Ig.msg ??= [])[0x6] = "\\C4 ");
        break;
      }
    case 0xb6:
      {
        (Ig.msg ??= [])[0x0] = "* Huh?/%", Ig.choice === 0x0 && (Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "\\E4* She's a sweetheart^1, isn't she^1, Kris?/", (Ig.msg ??= [])[0x1] = "\\E0* Smart, kind, sweet... couldn't ask for a better daughter./", (Ig.msg ??= [])[0x2] = "\\E5* I just wish she wasn't so..^1. defenseless./", (Ig.msg ??= [])[0x3] = "\\E1* Scary movies^1, bugs^1, Santa Claus..^1. everything scares her./", (Ig.msg ??= [])[0x4] = "\\E5* And when it happens^1, she freezes like a deer in headlights./", (Ig.msg ??= [])[0x5] = "\\E0* Remember she used to even be afraid of humans under the bed?/", (Ig.msg ??= [])[0x6] = "\\E7* (Kris^1, it was NOT nice of you to hide under there^1, by the way!)/", (Ig.msg ??= [])[0x7] = "\\E1* ... anyhow^1, that's what's tough about being in here^1, Kris./", (Ig.msg ??= [])[0x8] = "\\E4* Not what's going on with me./", (Ig.msg ??= [])[0x9] = "\\E5* Just that..^1. in the meantime^1, I can't be there to protect her./", (Ig.msg ??= [])[0xa] = "\\E3* Keep an eye out for her^1, OK?/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E3* Kris^1, even if we've grown apart^1, we still love your family./", (Ig.msg ??= [])[0x1] = "\\E4* After all^1, me and Asgore were college pals^1, right?/", (Ig.msg ??= [])[0x2] = "\\E1* Oh hey..^1. now that Asriel's off to college.../", (Ig.msg ??= [])[0x3] = "\\E2* Y'think he's doing any CRAZY parties^1, like me and your dad?/", (Ig.msg ??= [])[0x4] = "\\E3* Heh^1, I'm just pulling your leg^1. Your dad was no party animal./", (Ig.msg ??= [])[0x5] = "\\E7* Your MOTHER on the other hand...^1! Whoo!/", (Ig.msg ??= [])[0x6] = "\\E4* She'd always fuss about going^1, but once the party started.../", (Ig.msg ??= [])[0x7] = "\\E7* Yikes^1, man!/", (Ig.msg ??= [])[0x8] = "\\E7* Once she hit me clear across the room with a key lime pie!/", (Ig.msg ??= [])[0x9] = "\\E2* I got smashed into the snack table and toppled everything!/", (Ig.msg ??= [])[0xa] = "\\E7* Tasty pie though^1. Couldn't complain./%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E1* ... So^1, why am I in here...?/", (Ig.msg ??= [])[0x1] = "\\E4* Well^1, they found some crap^1, so it's just some tests./", (Ig.msg ??= [])[0x2] = "\\E3* Yeah, it's no big deal^1. Nothing a Holiday can't handle./", (Ig.msg ??= [])[0x3] = "\\E4* I'll be outta here in a jiff, then I can go back to, I dunno.../", (Ig.msg ??= [])[0x4] = "\\E2* Yelling at you for getting tangled in our light display./%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E2* Then what the hell're you here for^1, Kris!^1? To gawk!?/", (Ig.msg ??= [])[0x1] = "\\E7* You thought this was the zoo or something!^1? C'mon!/%");
        break;
      }
    case 0xb9:
      {
        (Ig.choicemsg ??= [])[0x0] = "No No No#No No No#No No No", (Ig.choicemsg ??= [])[0x1] = " #Yes", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (There's an anime review.^1)&* (Read it?)/", (Ig.msg ??= [])[0x1] = "\\C2 ", (Ig.msg ??= [])[0x2] = '\x20';
        break;
      }
    case 0xba:
      {
        (Ig.msg ??= [])[0x0] = "* Teen'z Corner&Monthly Toon Review:&Mew Mew Kissy Cutie 2/", (Ig.msg ??= [])[0x1] = "* This reviewer had Mew Mew 2 as her first exposure to the series.../", (Ig.msg ??= [])[0x2] = "* And let her tell you^1, it makes Mew Mew 1 look like a dumpster with sparkly cat ears!/", (Ig.msg ??= [])[0x3] = "* With a darker storyline and more mature themes.../", (Ig.msg ??= [])[0x4] = "* The second one treats the viewer like a real adult.../", (Ig.msg ??= [])[0x5] = "* Instead of like an animal that will die if it goes ten seconds without seeing a beach ball./", (Ig.msg ??= [])[0x6] = "* Not to mention, Mew Mew's character in the first one.../", (Ig.msg ??= [])[0x7] = "* Is more stale than the ramen I eat at home by myself with the lights off./", (Ig.msg ??= [])[0x8] = "* Teens and older should check out this dark masterpiece!/", (Ig.msg ??= [])[0x9] = "* Signed^1,&The Anonymous Yellow Lizard/%", Ig.choice < 0x1 && ((Ig.msg ??= [])[0x0] = "* (You decide not to read it.)/%");
        break;
      }
    case 0xbe:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Sit", (Ig.choicemsg ??= [])[0x1] = " #Don't Sit", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Gerson Boom Memorial Bench)/", (Ig.msg ??= [])[0x1] = "* \"Throughout my career^1, some of my best ideas came from dreams.\"/", (Ig.msg ??= [])[0x2] = "* \"Take a rest here. If anyone asks -- you're writing!\"/%", (Ig.msg ??= [])[0x3] = "\\C2 ", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0xbf:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* (Didn't feel like it.)/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You decided not to sit.)/%");
        break;
      }
    case 0xc0:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Stick fingers", (Ig.choicemsg ??= [])[0x1] = " #Don't", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's a metal picnic table.^1)&* (Cigarette butts lay on the ground underneath it.)/", (Ig.msg ??= [])[0x1] = "* (Stick your fingers into the holes in the table?)/", (Ig.msg ??= [])[0x2] = "\\C2 ", (Ig.msg ??= [])[0x3] = '\x20', Ig.flag[0x101] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (It's a metal picnic table.^1)&* (Cigarette butts lay on the ground underneath it.)/%");
        break;
      }
    case 0xc1:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* (Your fingers don't fit through the top anymore.^1)&* (You try from below.)/", (Ig.msg ??= [])[0x1] = "* (... your hand became covered in cobwebs.)/%", (Ig.flag ??= [])[0x101] = 0x1), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You decided not to stick your fingers through.)/%");
        break;
      }
    case 0xc3:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\M0* Hey..^1. there..^1.&* Noticed you were..^1.&* Here.../", (Ig.msg ??= [])[0x1] = "\\M1* It's me^1!&* You know ME^1, right^1?&* Of course you do!/", (Ig.msg ??= [])[0x2] = "\\M0* I'm REAL popular^1!&* I just!/", (Ig.msg ??= [])[0x3] = "\\M3* Don't have any friends.../", (Ig.msg ??= [])[0x4] = "\\M1* But it's OK^1, y'hear^1!&* Because you're y'here!/", (Ig.msg ??= [])[0x5] = "\\M0* Will YOU be my friend?/", (Ig.msg ??= [])[0x6] = "\\C2 ", (Ig.msg ??= [])[0x7] = '\x20';
        break;
      }
    case 0xc4:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Kris", (Ig.choicemsg ??= [])[0x1] = " #Hippo-#potamus", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\M4* Oh^1! Oh^1!&* I'm so happy^1, y'hear!^1?&* I'm so happy I..^1. I.../", (Ig.msg ??= [])[0x1] = "\\M3* I don't know what to do^1!&* I don't remember being this happy before!/", (Ig.msg ??= [])[0x2] = "\\M2* What's your name^1, friend?/", (Ig.msg ??= [])[0x3] = "\\C2 ", (Ig.msg ??= [])[0x4] = '\x20'), Ig.choice === 0x1 && ((Ig.flag ??= [])[0x102] = 0x3, (Ig.flag ??= [])[0x14] = 0x1, (Ig.msg ??= [])[0x0] = "%%%");
        break;
      }
    case 0xc5:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Onion", (Ig.choicemsg ??= [])[0x1] = " #Beauty", (Ig.choicemsg ??= [])[0x2] = "Asriel II", (Ig.choicemsg ??= [])[0x3] = 'Disgusting', Ig.choice === 0x0 && ((Ig.flag ??= [])[0x103] = 0x1, (Ig.msg ??= [])[0x0] = "\\M0* Kris^1! That's you^1!&* That's a real nice name for a friend!/"), Ig.choice === 0x1 && ((Ig.flag ??= [])[0x103] = 0x2, (Ig.msg ??= [])[0x0] = "\\M0* H..^1. Hippa..^1. Hyper..^1. Hoper..^1.&* Um^1, Hippopotamus^1! That's you^1!&* Big name^1, but it's worth it!/"), (Ig.msg ??= [])[0x1] = "\\M1* Oh^1, excuse me^1!&* I forgot to introduce myself!/", (Ig.msg ??= [])[0x2] = "\\M1* .../", (Ig.msg ??= [])[0x3] = "\\M3* ... Actually^1, since no one talks to me^1, I forgot my own name.../", this.nn = 'Kris', Ig.flag[0x103] === 0x2 && (this.nn = 'Hippopotatomus'), (Ig.msg ??= [])[0x4] = jJ('scr_84_get_subst_string').call(this, "\\M1* ~1^1!&* Can you give me a name...?/", this.nn), (Ig.msg ??= [])[0x5] = "\\C4 ", (Ig.msg ??= [])[0x6] = '\x20';
        break;
      }
    case 0xc6:
      {
        Ig.choice === 0x0 && ((Ig.flag ??= [])[0x102] = 0x2, (Ig.flag ??= [])[0x104] = 0x1, (Ig.msg ??= [])[0x0] = "\\M0* Hmmm^1! It's perfect^1, y'hear^1!&* I don't know what it means^1, but it's perfect!/", (Ig.msg ??= [])[0x1] = "\\M4* Hmm!^1!&* Feels like it's shaped like me^1!&* Feels like it smells like me!/", (Ig.msg ??= [])[0x2] = "\\M2* Wait^1, what was the name^1?&* U..^1. Umyum^1? Yeah^1! It's perfect^1!&* Umyum^1, that's my name./"), Ig.choice === 0x1 && ((Ig.flag ??= [])[0x102] = 0x2, (Ig.flag ??= [])[0x104] = 0x2, (Ig.msg ??= [])[0x0] = "\\M0^1* Wow..^1.&* What a wonderful name!/", (Ig.msg ??= [])[0x1] = "\\M4* Feels like my self-esteem's in full bloom^1! Feels like my head's about to flower!/", (Ig.msg ??= [])[0x2] = "\\M2* Wait^1, what was the name^1?&* B..^1. Bootis^1? Yeah^1! Perfect^1!&* The taste^1, the smell^1, the.../"), Ig.choice === 0x2 && ((Ig.flag ??= [])[0x102] = 0x2, (Ig.flag ??= [])[0x104] = 0x3, (Ig.msg ??= [])[0x0] = "\\M2* Asriel II..^1. Mmm..^1.&* Sounds..^1. familiar^1.&* It feels like..^1. a memory!/", (Ig.msg ??= [])[0x1] = "\\M4* It feels like that good boy..^1.&* That threw those good corn flakes in the water for me./", (Ig.msg ??= [])[0x2] = "\\M2* Wait^1, what was the name^1?&* C..^1. Cereal^1? Yeah^1! I love Cereal^1! Bathe me in flakes!/"), Ig.choice === 0x3 && ((Ig.flag ??= [])[0x102] = 0x3, (Ig.flag ??= [])[0x104] = 0x4, (Ig.flag ??= [])[0x14] = 0x1, (Ig.msg ??= [])[0x0] = "%%%"), (Ig.msg ??= [])[0x3] = "\\M0* Thank you for giving me a name^1!&* I'll cherish it^1, y'hear!?/", (Ig.msg ??= [])[0x4] = "\\M0* .../", (Ig.msg ??= [])[0x5] = "\\M2* K..^1. Krismas^1?&* That's your name^1, right?/", Ig.flag[0x103] === 0x2 && ((Ig.msg ??= [])[0x5] = "\\M3* Um^1, H..^1. Hippa..^1. um..^1.&* Hyper Potato Mask^1.&* That's your name^1, right?/"), (Ig.msg ??= [])[0x6] = "\\M1* I wanna tell you..^1. something..^1. tomorrow.../", (Ig.msg ??= [])[0x7] = "\\M5* Somethin' I can only tell a friend.../", (Ig.msg ??= [])[0x8] = "\\M5* Come back soon, y'hear.../%";
        break;
      }
    case 0xd2:
      {
        (Ig.choicemsg ??= [])[0x0] = "Open#Fridge", (Ig.choicemsg ??= [])[0x1] = " #Don't", (Ig.choicemsg ??= [])[0x2] = "See photos", (Ig.choicemsg ??= [])[0x3] = '\x20', this.read === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (It's a rusty fridge with some photos on it.)/", jJ('scr_asgface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "\\E2* Oh^1, Kris^1.&* If you're hungry.../", (Ig.msg ??= [])[0x3] = "\\E0* ... help yourself to anything you want./", (Ig.msg ??= [])[0x4] = "\\C3 ") : ((Ig.msg ??= [])[0x0] = "* (It's a rusty fridge with some photos on it.)/", (Ig.msg ??= [])[0x1] = "\\C3 ");
        break;
      }
    case 0xd3:
      {
        if (Ig.fc = 0x0, Ig.typer = 0x5, (Ig.msg ??= [])[0x0] = "* Nothing happened./%", Ig.choice === 0x0 && (Ig.flag[0x107] === 0x2 && ((Ig.msg ??= [])[0x0] = "* (There are two Eggs inside the fridge.)/%"), Ig.flag[0x107] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (All that's inside is a jar with a single pickle in it...)/", (Ig.msg ??= [])[0x1] = "* (... and^1, for some reason^1, a lone egg.)/", (Ig.msg ??= [])[0x2] = "* (You decide to pass.)/%"), Ig.flag[0x107] === 0x0 && ((Ig.msg ??= [])[0x0] = "* (All that's inside is a jar with a single pickle in it.)/", (Ig.msg ??= [])[0x1] = "* (You decide to pass.)/%", (Ig.flag ??= [])[0x107] = 0x1, Ix(jJ('scr_litemcheck').call(this, 0x8))))) {
          for ((Ig.msg ??= [])[0x0] = "* (All that's inside is a jar with a single pickle in it.)/", (Ig.msg ??= [])[0x1] = "* (...)/", (Ig.msg ??= [])[0x2] = "* (You put the Egg you were carrying inside^1, too...)/%", this.i = 0x0; this.i < 0x8; this.i += 0x1) Ig.litem[this.i] === 0x8 && jJ('scr_litemshift').call(this, this.i, 0x0);
          (Ig.flag ??= [])[0x107] = 0x2;
        }
        Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You decide not to look.)/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* (A photo of your mother and father on their wedding day.)/", (Ig.msg ??= [])[0x1] = "* (She's holding a bouquet of seven flowers.)/", (Ig.msg ??= [])[0x2] = "* (A reindeer-looking monster stands nearby in a tuxedo.)/", (Ig.msg ??= [])[0x3] = "* (They all look happy.)/%");
        break;
      }
    case 0xd7:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Asriel", (Ig.choicemsg ??= [])[0x1] = " #Neighbors", (Ig.choicemsg ??= [])[0x2] = 'Sister', (Ig.choicemsg ??= [])[0x3] = 'Nothing', (Ig.msg ??= [])[0x0] = "\\E4* Lil Krissy!!^1!&* Like, what's up!^1?&* Give Aunt Catty a hug!/", (Ig.msg ??= [])[0x1] = "\\E2* Mwah^1!&* Mwah^1!&* Mwah!/", (Ig.msg ??= [])[0x2] = "\\E8* Ha ha ha^1!&* I'm not even actually your aunt!/", (Ig.msg ??= [])[0x3] = "\\E5* Oh my god..^1.&* Can I talk to you about something?/", (Ig.msg ??= [])[0x4] = "* .../", (Ig.msg ??= [])[0x5] = "\\E6* Actually^1, like^1, anything^1, though^1.&* Your choice./", (Ig.msg ??= [])[0x6] = "\\C4 ", Ig.flag[0x109] > 0x0 && ((Ig.msg ??= [])[0x0] = "\\E4* Lil Krissy^1!&* Did you wanna talk about something!?/", (Ig.msg ??= [])[0x1] = "\\C4 "), (Ig.flag ??= [])[0x109] = 0x1;
        break;
      }
    case 0xd8:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* Oh my god^1, Asriel^1!&* Like^1, what a cutie pie!/", (Ig.msg ??= [])[0x1] = "\\E6* Do you remember when me and him went to the dance?/", (Ig.msg ??= [])[0x2] = "\\E2* That was like..^1.&* The best night EVER!/", (Ig.msg ??= [])[0x3] = "\\E4* Even though I spilled the entire punch bowl all over him.../", (Ig.msg ??= [])[0x4] = "\\E6* And danced inappropriately in front of your mom.../", (Ig.msg ??= [])[0x5] = "\\E5* And got arrested in the parking lot for making a scene.../", (Ig.msg ??= [])[0x6] = "\\E2* Hahaha^1! That was SO much fun^1!&* Tell him I said hi!/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E1* Like^1, that green girl next door?/", (Ig.msg ??= [])[0x1] = "\\E5* Oh my god^1, Krissy^1.&* She's like..^1. my LIFE VILLAIN./", (Ig.msg ??= [])[0x2] = "\\E6* Like^1, the other day^1, I went to see Cat Petters 2.../", (Ig.msg ??= [])[0x3] = "\\E3* And the only other person in the theater was her!/", (Ig.msg ??= [])[0x4] = "\\E1* Then I went to QC's and ordered a Catpuccino.../", (Ig.msg ??= [])[0x5] = "\\E5* And she^1, like^1, was already drinking one!/", (Ig.msg ??= [])[0x6] = "\\E3* She's SUCH a copycat^1!&* ... uhh^1, copygator?/", (Ig.msg ??= [])[0x7] = "\\E5* Copysaurus^1?&* Copodile^1?&* IDK^1, she sucks!/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E6* Ooo^1, how's Catti doing^1?&* I have no idea./", (Ig.msg ??= [])[0x1] = "\\E5* We^1, like^1, totally can't connect at all!/", (Ig.msg ??= [])[0x2] = "\\E1* Yesterday^1, I asked if she wanted to hear me play the ukelele.../", (Ig.msg ??= [])[0x3] = "\\E5* She said no^1!&* And then she^1, like^1, told me.../", (Ig.msg ??= [])[0x4] = "\\E3* My playing is \"an anti-blessing from Planet Hell.\"/", (Ig.msg ??= [])[0x5] = "\\E5* What the HECK^1, Krissy?/", (Ig.msg ??= [])[0x6] = "\\E2* That's SOOO cute^1!&* I love my fricked-up lil sis!/%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E6* Oh^1, you gotta go^1?&* Do you have^1, like^1, homework...?/", (Ig.msg ??= [])[0x1] = "\\E0* You should^1, like^1, let me help!/", (Ig.msg ??= [])[0x2] = "\\E2* Hahaha^1, JK^1!&* I totally don't want to^1! Laters!/%");
        break;
      }
    case 0xdc:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Neighbor", (Ig.choicemsg ??= [])[0x1] = "#Memories", (Ig.choicemsg ??= [])[0x2] = "Go Away", (Ig.choicemsg ??= [])[0x3] = 'Nothing', (Ig.msg ??= [])[0x0] = "\\E4* Krissy!&* Like^1, long time no see!/", (Ig.msg ??= [])[0x1] = "\\E0* What's up^1?&* Did you wanna talk about something?/", (Ig.msg ??= [])[0x2] = "\\C4 ";
        break;
      }
    case 0xdd:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* Ugh^1, that chick next door drives me NUTS./", (Ig.msg ??= [])[0x1] = "\\E3* I keep seeing her EVERYWHERE I go^1.&* She's a TOTAL copycat./", (Ig.msg ??= [])[0x2] = "\\E5* Like^1, WHY though^1?&* Doesn't she realize she'll NEVER be me?/", (Ig.msg ??= [])[0x3] = "\\E6* Honestly^1, her whole family is^1, like^1, SO trashy./", (Ig.msg ??= [])[0x4] = "\\E3* Once her sister served me a coffee and I swear it was half cat fur./", (Ig.msg ??= [])[0x5] = "\\E6* Like^1, get a hairnet^1, girl^1. For^1, like^1, your whole body./%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* Remember that time you wanted to hang out with us big kids?/", (Ig.msg ??= [])[0x1] = "\\E6* I was like, \"yeah^1, of course! Just get us some burgers!\"/", (Ig.msg ??= [])[0x2] = "\\E3* Then^1, like^1, amazingly..^1.&* You ACTUALLY got them.../", (Ig.msg ??= [])[0x3] = "\\E4* So I told you to go back and get some french fries, too.../", (Ig.msg ??= [])[0x4] = "\\E5* ... then a dozen miniature cakes.../", (Ig.msg ??= [])[0x5] = "\\E6* They were SO good^1, I ate like six!/", (Ig.msg ??= [])[0x6] = "\\E3* Then I like..^1.&* Suddenly got so sick I had to go home./", (Ig.msg ??= [])[0x7] = "\\E1* Man./", (Ig.msg ??= [])[0x8] = "\\E5* So^1, like^1, anyway..^1.&* Kris^1, are you busy?/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E5* Aww^1, that's no way to talk to your almost-sister-in-law./", (Ig.msg ??= [])[0x1] = "\\E4* Nah^1, I'm joking^1.&* But^1, like.../", (Ig.msg ??= [])[0x2] = "\\E0* Remember that time I played truth or dare with Azzy?/", (Ig.msg ??= [])[0x3] = "\\E5* I^1, like^1, made him give me his first kiss.../", (Ig.msg ??= [])[0x4] = "\\E3* Then your mom found out he kissed someone^1, and.../", (Ig.msg ??= [])[0x5] = "\\E6* Like^1, I think she basically dialed 911./", (Ig.msg ??= [])[0x6] = "\\E5* I swear your family went to church^1, like.../", (Ig.msg ??= [])[0x7] = "\\E6* Every single day that week./%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E0* Aw^1, Krissy^1, you just wanted to say hi?/", (Ig.msg ??= [])[0x1] = "\\E6* That's adorable..^1.&* Now get out of here./%");
        break;
      }
    case 0xe1:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Hey^1.&* Hey kid./", (Ig.msg ??= [])[0x1] = "* ... ya wanna buy a tutorial?/", (Ig.msg ??= [])[0x2] = "* It's only 50 Dark Dollars./", (Ig.msg ??= [])[0x3] = "\\C2 ";
        break;
      }
    case 0xe2:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.choice === 0x0 ? (this.afford = 0x1, Ig.gold >= 0x32 ? Ig.gold -= 0x32 : this.afford = 0x0, this.afford === 0x1 ? ((Ig.msg ??= [])[0x0] = "\\M1* R-really!^1?&* You'll really buy it!?/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Right this way^1, gentleners!/%") : ((Ig.msg ??= [])[0x0] = "\\M1* R-really!^1?&* You'll really buy it!?/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Just hand over the money^1, and.../", (Ig.msg ??= [])[0x2] = "\\M1* .../", (Ig.msg ??= [])[0x3] = "\\M2* YOU DON'T HAVE ENOUGH MONEY!?/", (Ig.msg ??= [])[0x4] = "\\M1* Jumpin' jigsaws^1!&* You..^1.&* You...!/", (Ig.msg ??= [])[0x5] = "\\M0* You're just like us^1.&* An' people like us gotta help each other out./", (Ig.msg ??= [])[0x6] = "\\M0* C'mon this way./%"), oW.with('obj_npc_puzzlemaster1', PD => {
          PD.con = 0x5;
        })) : ((Ig.msg ??= [])[0x0] = "\\M1* HA^1! HA^1! Did I say FIFTY!^1?&* Well^1, we just went on sale!&* TWENTY^1! TWENTY Dark Dollars!/", (Ig.msg ??= [])[0x1] = "\\C2 ", this.afford = 0x0);
        break;
      }
    case 0xe3:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.choice === 0x0 ? (this.afford = 0x1, Ig.gold >= 0x14 ? Ig.gold -= 0x14 : this.afford = 0x0, this.afford === 0x1 ? ((Ig.msg ??= [])[0x0] = "\\M1* R-really!^1?&* You'll really buy it!?/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Right this way^1, gentleners!/%") : ((Ig.msg ??= [])[0x0] = "\\M1* R-really!^1?&* You'll really buy it!?/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Just hand over the money^1, and.../", (Ig.msg ??= [])[0x2] = "\\M1* .../", (Ig.msg ??= [])[0x3] = "\\M2* YOU DON'T HAVE ENOUGH MONEY!?/", (Ig.msg ??= [])[0x4] = "\\M1* Jumpin' jigsaws^1!&* You..^1.&* You...!/", (Ig.msg ??= [])[0x5] = "\\M0* You're just like us^1.&* An' people like us gotta help each other out./", (Ig.msg ??= [])[0x6] = "\\M0* C'mon this way./%"), oW.with('obj_npc_puzzlemaster1', PD => {
          PD.con = 0x5;
        })) : ((Ig.msg ??= [])[0x0] = "\\M2* ONE!!^1! ONLY ONE DOLLAR!!^1!&* PLEASE!!^1! PLEASE!!^1!&* I NEED THIS RIGHT NOW!!!/", (Ig.msg ??= [])[0x1] = "\\C2 ", this.afford = 0x0);
        break;
      }
    case 0xe4:
      {
        Ig.choice === 0x0 ? (this.afford = 0x1, Ig.gold >= 0x1 ? Ig.gold -= 0x1 : this.afford = 0x0, this.afford === 0x1 ? ((Ig.msg ??= [])[0x0] = "\\M1* R-really!^1?&* You changed your mind!?/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Right this way^1, gentleners!/%") : ((Ig.msg ??= [])[0x0] = "\\M1* F-Finally!/", (Ig.msg ??= [])[0x1] = "\\M0* Heheh..^1.&* Just hand over the money^1, and.../", (Ig.msg ??= [])[0x2] = "\\M1* .../", (Ig.msg ??= [])[0x3] = "\\M2* YOU DON'T HAVE A DOLLAR!?/", (Ig.msg ??= [])[0x4] = "\\M1* Jumpin' jigsaws^1!&* You..^1.&* You...!/", (Ig.msg ??= [])[0x5] = "\\M0* You're just like us^1.&* An' people like us gotta help each other out./", (Ig.msg ??= [])[0x6] = "\\M0* C'mon this way./%"), oW.with('obj_npc_puzzlemaster1', PD => {
          PD.con = 0x5;
        })) : (jJ('scr_ralface').call(this, 0x0, 0x6), (Ig.msg ??= [])[0x1] = "* Er^1, excuse me^1, Sir^1.&* I think I have a dollar./", jJ('scr_noface').call(this, 0x2), (Ig.msg ??= [])[0x3] = "\\M0* ... is it Dark?/", jJ('scr_ralface').call(this, 0x4, 0x1), (Ig.msg ??= [])[0x5] = "* Umm^1, yes?/", jJ('scr_noface').call(this, 0x6), (Ig.msg ??= [])[0x7] = "* Heheh^1, perfect^1!&* Right this way^1, gentleners!/%", oW.with('obj_npc_puzzlemaster1', PD => {
          PD.con = 0x5;
        }), this.afford = 0x0);
        break;
      }
    case 0xe6:
      {
        (Ig.choicemsg ??= [])[0x0] = " #What's TP?", (Ig.choicemsg ??= [])[0x1] = " #Secret", (Ig.choicemsg ??= [])[0x2] = "Gaining TP", (Ig.choicemsg ??= [])[0x3] = 'Bye', (Ig.msg ??= [])[0x0] = "* I'm TP Master^1.&* Ask me about TP's./", (Ig.msg ??= [])[0x1] = "\\C4 ";
        break;
      }
    case 0xe7:
      {
        (Ig.msg ??= [])[0x0] = "* Later^1, kid./%", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* TP^1? What's TP^1?&* That's what lets you cast SPELLS^1, see!?/", (Ig.msg ??= [])[0x1] = "* When you see that orange bar^1,&* Cast some SPELLS when it's filled up far./", (Ig.msg ??= [])[0x2] = "* TP...^1! It's quite a caper^1!&* TP^1! Stands for..^1.&* ... Toilet Paper!/", jJ('scr_ralface').call(this, 0x3, 0x9), (Ig.msg ??= [])[0x4] = "* ... no^1, it stands for Tension Points./", jJ('scr_noface').call(this, 0x5), (Ig.msg ??= [])[0x6] = "\\M1* What^1, really!?/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* TP only lasts^1, inside a fight^1.&* Once you win^1, it's out of sight./", (Ig.msg ??= [])[0x1] = "* Having extra^1, feels unbearable^1.&* No point in saving^1, it's straight-up terrible./", jJ('scr_ralface').call(this, 0x2, 0x1), (Ig.msg ??= [])[0x3] = "* But leftover TP turns into extra money at the end of battle.../", jJ('scr_noface').call(this, 0x4), (Ig.msg ??= [])[0x5] = "\\M1* You mean I only should have been using one square!?/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* You get TP when you DEFEND^1.&* Protect yourself^1, then cast SPELLs^1, friend./", (Ig.msg ??= [])[0x1] = "* You also get TP by getting close to bullets./", (Ig.msg ??= [])[0x2] = "* Look for the heart outline when you get close to bullets./", jJ('scr_susface').call(this, 0x3, 0x0), (Ig.msg ??= [])[0x4] = "* You rhymed \"bullets\" with \"bullets.\"/", jJ('scr_noface').call(this, 0x5), (Ig.msg ??= [])[0x6] = "\\M1* B-because it's important!/%", Ix(jJ('scr_havechar').call(this, 0x2)) || (jJ('scr_ralface').call(this, 0x3, 0x1), (Ig.msg ??= [])[0x4] = "* You rhymed \"bullets\" with \"bullets\"...?/"));
        break;
      }
    case 0xeb:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Pacify", (Ig.choicemsg ??= [])[0x1] = " #Healing", (Ig.choicemsg ??= [])[0x2] = 'Fact', (Ig.choicemsg ??= [])[0x3] = 'Bye', (Ig.msg ??= [])[0x0] = "* I'm Ralsei Master^1.&* Ask me about RALSEI's./", (Ig.msg ??= [])[0x1] = "\\C4 ";
        break;
      }
    case 0xec:
      {
        (Ig.msg ??= [])[0x0] = "* Later^1, kid./%", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* Ralsei's spell's called PACIFY^1.&* Use it on BABIES^1, before they CRY./", jJ('scr_ralface').call(this, 0x1, 0x9), (Ig.msg ??= [])[0x2] = "* What^1? It safely removes a \"TIRED\" enemy from combat./", jJ('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "\\M1* What if you're fighting a BABY!?/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* Ralsei has a spell that HEALS^1, dude./", (Ig.msg ??= [])[0x1] = "* Why use that^1, when you can eat FOOD?/", jJ('scr_ralface').call(this, 0x2, 0x1), (Ig.msg ??= [])[0x3] = "* Because you won't have to use up an ITEM?/", jJ('scr_noface').call(this, 0x4), (Ig.msg ??= [])[0x5] = "\\M1* I could have avoided all those empty calories!?/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* Ralsei loves when you give us MONEY./", (Ig.msg ??= [])[0x1] = "* He will hug you^1, and call you HONEY./", jJ('scr_ralface').call(this, 0x2, 'A'), (Ig.msg ??= [])[0x3] = "* Hey^1, that's not true!/", (Ig.msg ??= [])[0x4] = "\\E8* You don't need money to get me to do that!/%");
        break;
      }
    case 0xf0:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Warning", (Ig.choicemsg ??= [])[0x1] = " #Attack", (Ig.choicemsg ??= [])[0x2] = 'Fact', (Ig.choicemsg ??= [])[0x3] = 'Bye', (Ig.msg ??= [])[0x0] = "* I'm Susie Master^1.&* Ask me about SUSIE's./", (Ig.msg ??= [])[0x1] = "\\C4 ";
        break;
      }
    case 0xf1:
      {
        (Ig.msg ??= [])[0x0] = "* Later^1, kid./%", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* When KRIS uses WARNING^1, SUSIE can't hit^1.&* So make sure to -/", jJ('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* So there's no reason to use it./", jJ('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "\\M1* Unless..^1.&* Unless you wanted not to hurt -/", jJ('scr_susface').call(this, 0x5, 0x4), (Ig.msg ??= [])[0x6] = "* SO THERE'S NO REASON./%", Ix(jJ('scr_havechar').call(this, 0x2)) || ((Ig.msg ??= [])[0x0] = "* Susie's gone^1, I'm afraid^1, I'm afreet./", (Ig.msg ??= [])[0x1] = "*Seems like WARNING is obsolete./%"), Ig.plot >= 0x96 && ((Ig.msg ??= [])[0x0] = "* The days of WARNing^1, have long since past./", (Ig.msg ??= [])[0x1] = "* The circumstances^1, changed pretty fast./%")), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* Susie always attacks^1, the foe on top./", (Ig.msg ??= [])[0x1] = "* She'll smash them^1, with a crushing chop./", (Ig.msg ??= [])[0x2] = "* She always strikes^1, at the first thing she sees.../", jJ('scr_susface').call(this, 0x3, 0x2), (Ig.msg ??= [])[0x4] = "* .../", jJ('scr_noface').call(this, 0x5), (Ig.msg ??= [])[0x6] = "\\M1* Oh no^1, oh no^1!&* She's looking at ME!/%", Ix(jJ('scr_havechar').call(this, 0x2)) || ((Ig.msg ??= [])[0x0] = "* Susie's gone^1, so no attack./", (Ig.msg ??= [])[0x1] = "* Will you two pick up the slack?/%"), Ig.plot >= 0x96 && (this.input_name = jJ('scr_get_input_name').call(this, 0x4), (Ig.msg ??= [])[0x0] = "* Susie's BUSTER^1, RUDE as may be^1.../", (Ig.msg ??= [])[0x1] = jJ('scr_84_get_subst_string').call(this, "* Will deal more damage^1, if you just press ~1!/%", this.input_name))), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* Susie loves^1, when you give us MONEY^1.&* She will -/", jJ('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* Nope^1, don't care./", jJ('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "\\M1* Did I say something funny!?/%", Ix(jJ('scr_havechar').call(this, 0x2)) || ((Ig.msg ??= [])[0x0] = "* Susie's gone^1, so no facts./", (Ig.msg ??= [])[0x1] = "* Will you two pick up the slackts?/%"), Ig.plot >= 0x96 && ((Ig.msg ??= [])[0x0] = "* SUSIE seems to have changed^1, just a hair./", (Ig.msg ??= [])[0x1] = "* That kind of growth is actually rare./%"));
        break;
      }
    case 0xf5:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Reviving", (Ig.choicemsg ??= [])[0x1] = " #Acting", (Ig.choicemsg ??= [])[0x2] = 'Fact', (Ig.choicemsg ??= [])[0x3] = 'Bye', (Ig.msg ??= [])[0x0] = "* I'm Kris Master^1.&* Ask me about KRIS's./", (Ig.msg ??= [])[0x1] = "\\C4 ";
        break;
      }
    case 0xf6:
      {
        (Ig.msg ??= [])[0x0] = "* Later^1, kid./%", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* When HP goes negative^1, your friends fall down/", (Ig.msg ??= [])[0x1] = "* But bringing them back^1, is easy-town/", (Ig.msg ??= [])[0x2] = "* Plain foods and spells^1, work like a charm -/", (Ig.msg ??= [])[0x3] = "* And with a MINT^1, you can cure all HARM./", jJ('scr_ralface').call(this, 0x4, 0x0), (Ig.msg ??= [])[0x5] = "* Even normal items and spells can revive people^1, huh?/", jJ('scr_noface').call(this, 0x6), (Ig.msg ??= [])[0x7] = "* Yeah^1, that's what I'm saying!/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* If you only ACT^1, you might start to think -/", (Ig.msg ??= [])[0x1] = "* What about the guy with the scarf in pink?/", jJ('scr_ralface').call(this, 0x2, 0x0), (Ig.msg ??= [])[0x3] = "* If you know ACTing will make the enemy friendly -/", (Ig.msg ??= [])[0x4] = "* Then you can ask me to SPARE on the SAME TURN./", (Ig.msg ??= [])[0x5] = "* Or^1, cast PACIFY if you know they'll get TIRED./", (Ig.msg ??= [])[0x6] = "* If you plan ahead^1, a lot can happen in ONE TURN!/", jJ('scr_noface').call(this, 0x7), (Ig.msg ??= [])[0x8] = "\\M1* Hey^1, who's the MASTER here^1, me or you!?/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* It's a good idea^1, to give us BUCKs./", (Ig.msg ??= [])[0x1] = "* It'll make you happy^1, and fill you with LUCKs./", (Ig.msg ??= [])[0x2] = "* Over there^1, is our DONATION HOLE./", (Ig.msg ??= [])[0x3] = "* We had a BOX^1, but it got STOLE./%");
        break;
      }
    case 0xfa:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Throw $1", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* \"Donation Hole\"/", (Ig.msg ??= [])[0x1] = "* (If you like our tutorials^1, please throw your money into a hole.)/", (Ig.msg ??= [])[0x2] = "\\C2 ", Ig.flag[0xd8] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (The hole is filled to the brim with cash.)/%");
        break;
      }
    case 0xfb:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* (You put a dollar in the \"Hole.\")/", (Ig.msg ??= [])[0x1] = "* (The \"Hole\" became \"Full.\")/%", this.afford = 0x1, Ig.gold >= 0x1 ? Ig.gold -= 0x1 : this.afford = 0x0, this.afford === 0x1 && ((Ig.flag ??= [])[0xd8] = 0x1), this.afford === 0x0 && ((Ig.msg ??= [])[0x0] = "* (You don't have enough money.)/", (Ig.msg ??= [])[0x1] = "* (You failed to budget enough money to throw into a hole...)/%")), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You decided to save the dollar for a different hole.)/%");
        break;
      }
    case 0xff:
      {
        (Ig.choicemsg ??= [])[0x0] = "Make#Ralsei#try it", (Ig.choicemsg ??= [])[0x1] = "#Try it", (Ig.choicemsg ??= [])[0x2] = 'Decline', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* How's the evil scheming going?/", jJ('scr_susface').call(this, 0x1, 0x6), (Ig.msg ??= [])[0x2] = "* Huh^1? Oh^1, that?/", (Ig.msg ??= [])[0x3] = "\\E2* We^1, uh^1, got bored^1.&* So we're having a snack./", jJ('scr_ralface').call(this, 0x4, 0x1), (Ig.msg ??= [])[0x5] = "* ... I see./", jJ('scr_susface').call(this, 0x6, 0x7), (Ig.msg ??= [])[0x7] = "* C'mon^1! All I ate for breakfast was chalk!/", jJ('scr_lanface').call(this, 0x8, 0x3), (Ig.msg ??= [])[0x9] = "* And I didn't eat anything!/", jJ('scr_ralface').call(this, 0xa, 0x6), (Ig.msg ??= [])[0xb] = "* Sorry^1. What are you two having^1, exactly...?/", jJ('scr_lanface').call(this, 0xc, 0x2), (Ig.msg ??= [])[0xd] = "* Just a daily treasure I hid in this stump's orifice./", jJ('scr_ralface').call(this, 0xe, 0x8), (Ig.msg ??= [])[0xf] = "* And that is...?/", jJ('scr_lanface').call(this, 0x10, 0x1), (Ig.msg ??= [])[0x11] = "* Feast for yourself^1, my main man./", jJ('scr_ralface').call(this, 0x12, 0x8), (Ig.msg ??= [])[0x13] = "* Kris^1, do you want to^1, um^1, try it?/", (Ig.msg ??= [])[0x14] = "\\C3 ";
        break;
      }
    case 0x100:
      {
        (Ig.flag ??= [])[0xe8] = 0x1, Ig.choice === 0x0 && (jJ('scr_ralface').call(this, 0x0, 0x6), (Ig.msg ??= [])[0x1] = "\\E6* Oh^1, there's a..^1.&* Honeypot^1? Inside^1?/", (Ig.msg ??= [])[0x2] = "\\E1* ... It's full of salsa./", jJ('scr_lanface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "\\E3* Bingo^1, you sweet little pumpkin!/", (Ig.msg ??= [])[0x5] = "\\E1* It's my secret stash^1.&* A little snackeroo from me to you.../", jJ('scr_ralface').call(this, 0x6, 0x1), (Ig.msg ??= [])[0x7] = "* .../", (Ig.msg ??= [])[0x8] = "\\E8* Mmmm^1. Yummy^1. It's delicious.../", jJ('scr_susface').call(this, 0x9, 0x7), (Ig.msg ??= [])[0xa] = "* C'mon^1, you're just pretending to eat it!/", jJ('scr_lanface').call(this, 0xb, 0x3), (Ig.msg ??= [])[0xc] = "* Haha^1, yeah^1! That's what I do^1, too!/", jJ('scr_susface').call(this, 0xd, 0x6), (Ig.msg ??= [])[0xe] = "* ?????/%"), Ig.choice === 0x1 && (jJ('scr_noface').call(this, 0x0), (Ig.msg ??= [])[0x1] = "* (There was a honeypot of salsa inside the stump.)/", (Ig.msg ??= [])[0x2] = "* (You ate some salsa.)/", (Ig.msg ??= [])[0x3] = "* (It recovered... something.)/", (Ig.msg ??= [])[0x4] = "* (Not HP.^1)&* (Just... something.)/", jJ('scr_susface').call(this, 0x5, 0x2), (Ig.msg ??= [])[0x6] = "\\E2* Mmm..^1.&* Hey^1, what's in this?/", jJ('scr_lanface').call(this, 0x7, 0x3), (Ig.msg ??= [])[0x8] = "* I don't know!/%"), Ig.choice === 0x2 && (jJ('scr_susface').call(this, 0x0, 0x2), (Ig.msg ??= [])[0x1] = "* Look^1, if no one else will eat it^1, I'll try it!/", (Ig.msg ??= [])[0x2] = "\\E6* ... there's a jar of..^1. Blood...^1?&* In here./", jJ('scr_lanface').call(this, 0x3, 0x3), (Ig.msg ??= [])[0x4] = "* No^1, no^1.&* It's merely a pot of free-range salsa./", jJ('scr_susface').call(this, 0x5, 0x2), (Ig.msg ??= [])[0x6] = "\\E2* Thanks^1, that's actually more gross somehow./", jJ('scr_lanface').call(this, 0x7, 0x3), (Ig.msg ??= [])[0x8] = "\\E3* Any time!/", jJ('scr_susface').call(this, 0x9, 0x2), (Ig.msg ??= [])[0xa] = "\\E2* Mmm..^1.&* Hey^1, what's in this?/", jJ('scr_lanface').call(this, 0xb, 0x3), (Ig.msg ??= [])[0xc] = "* I don't know!/%");
        break;
      }
    case 0x10e:
      {
        this.addflag = 0x0, Ig.flag[0x10b] === -0xa && ((Ig.msg ??= [])[0x0] = "\\E5* Kris...?/%", this.addflag = 0x1), Ig.flag[0x10b] === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* Kris^1, honey^1, you have grown up so much.../", (Ig.msg ??= [])[0x1] = "\\E9* Someday soon you will be going off to university as well.../", (Ig.msg ??= [])[0x2] = "\\E1* .../", (Ig.msg ??= [])[0x3] = "\\E9* Remember when you were little.../", (Ig.msg ??= [])[0x4] = "\\E8* You asked when your horns were going to grow in?/", (Ig.msg ??= [])[0x5] = "\\E0* So we bought that headband with the little red horns on it./", (Ig.msg ??= [])[0x6] = "\\E4* Oh^1, you wore it for months! Whatever happened to it?/%", this.addflag = 0x1), Ig.flag[0x10b] === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E2* Kris^1, I need to grade these assignments./", (Ig.msg ??= [])[0x1] = "\\E0* Perhaps you should go to bed...?/", (Ig.msg ??= [])[0x2] = "\\E1* You do not look very well.../%"), this.addflag === 0x1 && ((Ig.flag ??= [])[0x10b] += 0x1);
        break;
      }
    case 0x11d:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Flowers", (Ig.choicemsg ??= [])[0x1] = " #Saucer", (Ig.choicemsg ??= [])[0x2] = 'Chalk', (Ig.choicemsg ??= [])[0x3] = 'Nothing', (Ig.msg ??= [])[0x0] = "* O..^1. Oh^1, Kris.../", (Ig.msg ??= [])[0x1] = "\\E4* D..^1. Did you want to talk about something?/", (Ig.msg ??= [])[0x2] = "\\C4 ";
        break;
      }
    case 0x11e:
      {
        (Ig.msg ??= [])[0x0] = "* Huh?/%", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E3* O-Oh^1, these flowers...^1? They're from your dad.../", (Ig.msg ??= [])[0x1] = "\\E0* He..^1. He always asks how you're doing in school.../", (Ig.msg ??= [])[0x2] = "\\E7* ... Then gives me a bouquet of them./", (Ig.msg ??= [])[0x3] = "\\E1* ... A-actually^1, that he always gives me flowers.../", (Ig.msg ??= [])[0x4] = "\\E4* ... R-really makes me w-wonder if he..^1. If he l-likes.../", (Ig.msg ??= [])[0x5] = "\\EB* I-if..^1. If he l-likes.../", (Ig.msg ??= [])[0x6] = "\\EA* ... The awesome comics I lent to him./", (Ig.msg ??= [])[0x7] = "\\EB* Honestly^1, HE kind of reminds me of a superhero^1, Kris./", (Ig.msg ??= [])[0x8] = "\\EA* (He's huge and could kick my ass.)/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* Oh^1, this saucer of milk?/", (Ig.msg ??= [])[0x1] = "\\E7* I-It's for my kitty^1, MewMew^1! She's a perfect angel!/", (Ig.msg ??= [])[0x2] = "\\E3* ... uh^1? What does she look like...?/", (Ig.msg ??= [])[0x3] = "\\E9* W..^1. well, I've never actually s-seen her^1, b-but.../", (Ig.msg ??= [])[0x4] = "\\E7* Ever since I started putting out milk^1, it's been disappearing./", (Ig.msg ??= [])[0x5] = "\\E6* S..^1. So I'd like to think that there's a cat./", (Ig.msg ??= [])[0x6] = "\\E9* M.^1.. My cat./%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E0* K..^1. Kris^1, even though you never got the chalk.../", (Ig.msg ??= [])[0x1] = "\\E0* You deserve an award for trying so hard to find it./", (Ig.msg ??= [])[0x2] = "\\E3* So^1, in return^1, I can let you borrow^1, um.../", (Ig.msg ??= [])[0x3] = "\\E0* M... My home-made DVD collection of the Symptons!/", (Ig.msg ??= [])[0x4] = "\\E7* Y-you know, the sitcom about the middle-class monster family./", (Ig.msg ??= [])[0x5] = "\\E3* It's got every episode in all 28 seasons!/", (Ig.msg ??= [])[0x6] = "\\E0* It's the funniest^1, most quotable show ever...!/", (Ig.msg ??= [])[0x7] = "\\E3* But make sure you don't watch past the second season %", (Ig.msg ??= [])[0x8] = "\\E9* Since they just rebooted it as Symptons Turbo %", (Ig.msg ??= [])[0x9] = "\\E8* They all started driving their own motor-vehicles %", (Ig.msg ??= [])[0xa] = "\\E3* And fighting giant giga-demons and stuff %", (Ig.msg ??= [])[0xb] = "\\E9* The main problem about that is that it kind of %", (Ig.msg ??= [])[0xc] = "\\E6* Lost the focus on family that it had earlier %", (Ig.msg ??= [])[0xd] = "\\E7* When their vehicles were shaped like animals %", (Ig.msg ??= [])[0xe] = "\\E5* And they were friends with the animal vehicles too %", (Ig.msg ??= [])[0xf] = "\\E3* And let's not get into Symptons Galaxy Force %", (Ig.msg ??= [])[0x10] = "\\E8* Where the Symptons discover another Earth %", (Ig.msg ??= [])[0x11] = "\\E9* On the other side of the Sun %", (Ig.msg ??= [])[0x12] = "\\E6* WOULDN'T THE GRAVITATIONAL FIELD JUST %", (Ig.msg ??= [])[0x13] = "\\E1* ... Huh?/", (Ig.msg ??= [])[0x14] = "\\E2* ... You don't want to watch it?/", (Ig.msg ??= [])[0x15] = "\\EB* ... Th-That's ok^1, Kris.../%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E1* OK^1, umm^1, if you ever need help with homework.../", (Ig.msg ??= [])[0x1] = "\\EA* My office hours are in this disgusting alley./", (Ig.msg ??= [])[0x2] = "\\EB* H..^1. Heheheh..^1. Umm^1, tell your mom I said hi./%");
        break;
      }
    case 0x122:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Add Spade", (Ig.choicemsg ??= [])[0x1] = " #Add Diamond", (Ig.choicemsg ??= [])[0x2] = 'Swap', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\C3 ", (Ig.msg ??= [])[0x1] = '\x20';
        break;
      }
    case 0x123:
      {
        Ig.choice === 0x0 && oW.with('obj_suitspuzz', PD => {
          PD.event_user(0x2);
        }), Ig.choice === 0x1 && oW.with('obj_suitspuzz', PD => {
          PD.event_user(0x3);
        }), Ig.choice === 0x2 && oW.with('obj_suitspuzz', PD => {
          PD.event_user(0x4);
        }), (Ig.msg ??= [])[0x0] = " %%";
        break;
      }
    case 0x127:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Perpetuate", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Life cannot exist without consuming.^1)&* (Even the moss drinks water.)/", (Ig.msg ??= [])[0x1] = "* (Perpetuate the cycle of existence?)/", (Ig.msg ??= [])[0x2] = "\\C2 ", (Ig.msg ??= [])[0x3] = '\x20', Ig.flag[0x6a] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (The moss has been eaten.^1)&* (The cycle continues...)/%");
        break;
      }
    case 0x128:
      {
        Ig.choice === 0x0 && ((Ig.hp ??= [])[0x1] = Ig.maxhp[0x1], jJ('snd_play').call(this, 'snd_swallow'), (Ig.msg ??= [])[0x0] = "* (You ate the moss.^1)&* (Tastes..^1. mossy.)/", (Ig.msg ??= [])[0x1] = "* (Your HP was mossed out.)/%", (Ig.flag ??= [])[0x6a] = 0x1, oW.with('obj_event_manager', PD => {
          jl(0x0, 0x9);
        })), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (The cycle ends here^1, in the corner of a small cell...)/%");
        break;
      }
    case 0x12c:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Take", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (These shackles seem oddly fashionable.)/", (Ig.msg ??= [])[0x1] = "* (Take them?)/", (Ig.msg ??= [])[0x2] = "\\C2 ", (Ig.msg ??= [])[0x3] = '\x20', Ig.flag[0x69] === 0x1 && ((Ig.msg ??= [])[0x0] = "* (Ain't nothin' to hold you down...)/%");
        break;
      }
    case 0x12d:
      {
        Ig.choice === 0x0 && (jJ('scr_armorget').call(this, 0x5), this.noroom === 0x1 ? (Ig.msg ??= [])[0x0] = "* (You're carrying too many ARMORs.)/%" : (oW.with('obj_npc_sign', PD => {
          PD.image_index = 0x1;
        }), (Ig.msg ??= [])[0x0] = "* (IRONSHACKLE was put in your ARMORs.)/%", (Ig.flag ??= [])[0x69] = 0x1)), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (Don't need nothin' to hold you down...)/%");
        break;
      }
    case 0x131:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #She'll be#fine", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E6* ... thanks for helping her^1, Kris^1. She appreciates it./", (Ig.msg ??= [])[0x1] = "\\E1* .../", (Ig.msg ??= [])[0x2] = "\\E1* Kris.../", (Ig.msg ??= [])[0x3] = "\\E6* Are you worried about Susie?/", (Ig.msg ??= [])[0x4] = "\\C2 ", (Ig.msg ??= [])[0x5] = '\x20';
        break;
      }
    case 0x132:
      {
        (Ig.msg ??= [])[0x0] = "\\E6* Well, regardless of how you feel.../", (Ig.msg ??= [])[0x1] = "\\E0* I don't think it would hurt to take a moment.../", (Ig.msg ??= [])[0x2] = "\\E6* Close your eyes^1, and think about what she's doing now.../%";
        break;
      }
    case 0x136:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Go Left", (Ig.choicemsg ??= [])[0x1] = " #Go Right", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E0* (Alright..^1. out of the cell...)/", (Ig.msg ??= [])[0x1] = "* (Where to next...?)/", (Ig.msg ??= [])[0x2] = "\\C2 ", (Ig.msg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0x137:
      {
        (Ig.msg ??= [])[0x0] = "\\E9* Huh...? Kris...^1? Did you say something back there?/", (Ig.msg ??= [])[0x1] = "\\E0* (... I can't hear them anymore...)/%";
        break;
      }
    case 0x13b:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Fix Item", (Ig.choicemsg ??= [])[0x1] = " #Leave", (Ig.choicemsg ??= [])[0x2] = "Fix Us", (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Well^1, well^1. I am the smith Malius^1. I can fix anything^1. Weapon, armor.../", (Ig.msg ??= [])[0x1] = "* ... I can even fix you^1! Well^1, well^1, what will it be?/", (Ig.msg ??= [])[0x2] = "\\C3 ";
        break;
      }
    case 0x13c:
      {
        (Ig.msg ??= [])[0x0] = "* Hm^1? What is it now?/%", Ig.choice === 0x0 && (this.which = 0x0, Ix(jJ('scr_keyitemcheck').call(this, 0x4)) && Ix(jJ('scr_keyitemcheck').call(this, 0x6)) && Ix(jJ('scr_keyitemcheck').call(this, 0x7)) && (this.which = 0x3), Ix(jJ('scr_keyitemcheck').call(this, 0x3)) && this.which === 0x0 && (this.which = 0x1, jJ('scr_itemget').call(this, 0x6), this.noroom === 0x1 && (this.which = 0x2)), this.which === 0x0 && ((Ig.msg ??= [])[0x0] = "* Well^1, well^1. You have nothing to fix^1./", (Ig.msg ??= [])[0x1] = "* But if you find anything BROKEN^1, return here./", (Ig.msg ??= [])[0x2] = "* After all^1, I can fix anything.../", (Ig.msg ??= [])[0x3] = "* ... except for a BROKEN HEART./%"), this.which === 0x1 && ((Ig.msg ??= [])[0x0] = "* Huh---^1! That CAKE is seething with energy^1! You must let me fix it!/", (Ig.msg ??= [])[0x1] = "* Huh-hah^1! Let's feel my technique!/%", oW.with('obj_npc_hammerguy', PD => {
          PD.con = 0x1e;
        })), this.which === 0x2 && ((Ig.msg ??= [])[0x0] = "* Huh---^1! That CAKE is seething with energy^1! You must let me fix it!/", (Ig.msg ??= [])[0x1] = "* ... actually^1, you will need a free space in your ITEMs first./%"), this.which === 0x3 && ((Ig.msg ??= [])[0x0] = "* Huh---^1! That KEY is seething with energy^1! You must let me fix it!/", (Ig.msg ??= [])[0x1] = "* Huh-hah^1! Let's feel my technique!/%", oW.with('obj_npc_hammerguy', PD => {
          PD.con = 0x32;
        }))), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* Well^1, well^1. Good journey^1, my friends./%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* Your body is a weapon^1, too^1. You must take care of it from time to time./", (Ig.msg ??= [])[0x1] = "* Huh-hah^1! Let's feel my technique./%", oW.with('obj_npc_hammerguy', PD => {
          PD.con = 0xa;
        }));
        break;
      }
    case 0x145:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Interested in a Choco Diamond^1? /", (Ig.msg ??= [])[0x1] = "* All proceeds go to Rudinn Relief Funds^1, I guess^1.&* It's only $40!/", (Ig.msg ??= [])[0x2] = "\\C2 ", (Ig.msg ??= [])[0x3] = '\x20', Ix(jJ('scr_itemcheck').call(this, 0xd)) && ((Ig.msg ??= [])[0x0] = "* Choco Diamonds^1, only $40^1, I guess./", (Ig.msg ??= [])[0x1] = "\\C2 ");
        break;
      }
    case 0x146:
      {
        Ig.choice === 0x0 ? Ig.gold >= 0x28 ? (jJ('scr_itemget').call(this, 0xd), this.noroom === 0x0 ? (Ig.gold -= 0x28, (Ig.msg ??= [])[0x0] = "* Thanks^1, I guess^1.&* (The Choco Diamond was added to your ITEMS.)/%") : (Ig.msg ??= [])[0x0] = "* ... You have too many ITEMS for this^1, I guess./%") : (Ig.msg ??= [])[0x0] = "* You don't have enough money^1, I guess./%" : (Ig.msg ??= [])[0x0] = "* Okay I guess./%";
        break;
      }
    case 0x147:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Hathy offers a Hearts Donut.^1)&* (Proceeds go to Hathy's Health. It costs $40.)/", (Ig.msg ??= [])[0x1] = "\\C2 ", (Ig.msg ??= [])[0x2] = '\x20';
        break;
      }
    case 0x148:
      {
        Ig.choice === 0x0 ? Ig.gold >= 0x28 ? (jJ('scr_itemget').call(this, 0xc), this.noroom === 0x0 ? (Ig.gold -= 0x28, (Ig.msg ??= [])[0x0] = "* (Hathy seemed happy.^1)&* (The Hearts Donut was added to your ITEMS.)/%") : (Ig.msg ??= [])[0x0] = "* (You didn't have enough room in your ITEMs.^1)&* (Hathy seemed sad.)/%") : (Ig.msg ??= [])[0x0] = "* (You didn't have enough money.^1)&* (Hathy seemed sad.)/%" : (Ig.msg ??= [])[0x0] = "* (Hathy accepted your choice.)/%";
        break;
      }
    case 0x14a:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Buy", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.fc = 0x5, Ig.typer = 0x20, Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* Greetings^1, gentleclowns./", (Ig.msg ??= [])[0x1] = "\\E1* May we interest you in a Lancer Cookie?/", jJ('scr_susface').call(this, 0x2, 0x2), (Ig.msg ??= [])[0x3] = "* All proceeds go to kicking your ass./", jJ('scr_lanface').call(this, 0x4, 0x3), (Ig.msg ??= [])[0x5] = "* It's a mere $40./", (Ig.msg ??= [])[0x6] = "\\C2 ", (Ig.msg ??= [])[0x7] = '\x20';
        break;
      }
    case 0x14b:
      {
        Ig.choice === 0x0 ? Ig.gold >= 0x28 ? (jJ('scr_itemget').call(this, 0x9), this.noroom === 0x0 ? (Ig.gold -= 0x28, Ig.fc = 0x1, Ig.fe = 0x1, Ig.typer = 0x1e, (Ig.msg ??= [])[0x0] = "* Heheheh^1, thanks.../", jJ('scr_noface').call(this, 0x1), (Ig.msg ??= [])[0x2] = "* (The LANCERCOOKIE was added to your ITEMs.)/", jJ('scr_susface').call(this, 0x3, 0x2), (Ig.msg ??= [])[0x4] = "\\E2* For getting CHEATED by us!!/", jJ('scr_lanface').call(this, 0x5, 0x1), (Ig.msg ??= [])[0x6] = "* Now we may fund our illicit plans!!/%", oW.with('obj_lancerbakesale_event', PD => {
          PD.con = 0xa;
        })) : (Ig.gold -= 0x28, Ig.fc = 0x0, Ig.fe = 0x0, Ig.typer = 0x6, (Ig.msg ??= [])[0x0] = "* (You bought LANCERCOOKIE.^1)&* (But you didn't have any room.)/", (Ig.msg ??= [])[0x1] = "* (So Lancer just dropped it on the ground and it broke.)/", jJ('scr_lanface').call(this, 0x2, 0x7), (Ig.msg ??= [])[0x3] = "* Oops./", jJ('scr_susface').call(this, 0x4, 0x2), (Ig.msg ??= [])[0x5] = "* Oh well^1. Buyers cryers./", jJ('scr_lanface').call(this, 0x6, 0x3), (Ig.msg ??= [])[0x7] = "* Thank you anyway for your contribution.../", jJ('scr_susface').call(this, 0x8, 0x2), (Ig.msg ??= [])[0x9] = "* ... to getting SWINDLED by us!/", jJ('scr_lanface').call(this, 0xa, 0x2), (Ig.msg ??= [])[0xb] = "* Now we can fund our illicit plans!!!/%", oW.with('obj_lancerbakesale_event', PD => {
          PD.con = 0xa;
        }))) : (Ig.typer = 0x20, Ig.fe = 0x6, Ig.fc = 0x5, (Ig.msg ??= [])[0x0] = "* ... You don't have enough funds./", jJ('scr_susface').call(this, 0x1, 0x0), (Ig.msg ??= [])[0x2] = "* What^1? What did you spend it on!^1? Pastries!?/", jJ('scr_lanface').call(this, 0x3, 0x6), (Ig.msg ??= [])[0x4] = "* That's irresponsible./%") : (Ig.typer = 0x20, Ig.fc = 0x5, Ig.fe = 0x2, (Ig.msg ??= [])[0x0] = "* Hey^1! You can't not buy from us!/", jJ('scr_susface').call(this, 0x1, 0x2), (Ig.msg ??= [])[0x2] = "* Hey DUMBASS^1!&* It's for a GOOD CAUSE!/", jJ('scr_ralface').call(this, 0x3, 0x6), (Ig.msg ??= [])[0x4] = "* (Let's just buy one^1, Kris.)/%");
        break;
      }
    case 0x14f:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Alphys", (Ig.choicemsg ??= [])[0x1] = "#Dark World", (Ig.choicemsg ??= [])[0x2] = "Help you", (Ig.choicemsg ??= [])[0x3] = 'Nothing', Ig.fe = 0x2, Ig.fc = 0x9, (Ig.msg ??= [])[0x0] = "\\E2* HEY^1, PUNK!!^1!&* GET OUT OF THE ROAD!!!/", (Ig.msg ??= [])[0x1] = "* YOU'RE BLOCKIN' TRAFFIC!!!!/", (Ig.msg ??= [])[0x2] = "\\E1* ... Oh^1, wait^1, it's just Asgore's kid./", (Ig.msg ??= [])[0x3] = "\\E7* Sorry^1, I'm a little^1, uh^1, worked up lately./", (Ig.msg ??= [])[0x4] = "\\E2* This job is SO boring^1.&* Nothing EVER happens in this town!/", (Ig.msg ??= [])[0x5] = "\\E4* Ngh..^1. I just wish SOMETHING would shake things up!/", (Ig.msg ??= [])[0x6] = "\\E7* ... Huh^1?&* You got somethin' to report?/", (Ig.msg ??= [])[0x7] = "\\C4 ", Ig.flag[0x10e] >= 0x1 && (Ig.fe = 0x1, (Ig.msg ??= [])[0x0] = "\\E1* Got somethin' to report?/", (Ig.msg ??= [])[0x1] = "\\C4 "), (Ig.flag ??= [])[0x10e] = 0x1;
        break;
      }
    case 0x150:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* ... Alphys?/", (Ig.msg ??= [])[0x1] = "\\E3* Who's Alphys^1?&* No idea who you're talking about./", (Ig.msg ??= [])[0x2] = "\\E2* ... Why^1, did they do something illegal!?/", (Ig.msg ??= [])[0x3] = "\\E5* Gotcha^1, if I see \"Alphys^1,\" I'll tackle 'em!!/", (Ig.msg ??= [])[0x4] = "* Fuhuhuhu!^1!&* They're as good as dead!!/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E1* What^1?&* There's a Dark World inside the school?/", (Ig.msg ??= [])[0x1] = "\\E2* Uh..^1. SURE^1, kid./", (Ig.msg ??= [])[0x2] = "\\E5* There's no law against Dark Worlds anyway!/", (Ig.msg ??= [])[0x3] = "* That's a job for the school board!/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E6* Aww^1, you wanna help me^1? Sure^1, punk./", (Ig.msg ??= [])[0x1] = "\\E5* Get someone to rob the bank so I can suplex them!/", (Ig.msg ??= [])[0x2] = "\\E1* ... wait^1, do we even have a bank?/", (Ig.msg ??= [])[0x3] = "\\E5* Hey^1, get someone to build a bank...!/%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E6* Don't do anything illegal^1, you little punk~!/", (Ig.msg ??= [])[0x1] = "\\E3* And lemme know if you get a lead on any purple girls./", (Ig.msg ??= [])[0x2] = "\\E4* There's one wanted on SEVERAL counts of Comic Mischief./%");
        break;
      }
    case 0x154:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Asriel", (Ig.choicemsg ??= [])[0x1] = "#Job", (Ig.choicemsg ??= [])[0x2] = "Co-Workers", (Ig.choicemsg ??= [])[0x3] = 'No', Ig.fe = 0x0, Ig.fc = 0x13, (Ig.msg ??= [])[0x0] = "\\E0* Little buddy^1!&* It's me!/", (Ig.msg ??= [])[0x1] = "\\E3* Wanna chat for a minute before I lose my mind?/", (Ig.msg ??= [])[0x2] = "\\C4 ", Ig.flag[0x10f] > 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* H... Hey!&* Hey little buddy^1!&* What's up?!/", (Ig.msg ??= [])[0x1] = "\\C4 "), (Ig.flag ??= [])[0x10f] = 0x2;
        break;
      }
    case 0x155:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* Do you know when Azzy's coming home?/", (Ig.msg ??= [])[0x1] = "\\E8* Y..^1. You can't tell him this^1, but I really miss the guy./", (Ig.msg ??= [])[0x2] = "\\E8* It'd be sweet to cruise around town like old times.../", (Ig.msg ??= [])[0x3] = "\\E3* Picking up^1, for example.../", (Ig.msg ??= [])[0x4] = "\\E4* CHICKS/", (Ig.msg ??= [])[0x5] = "\\E5* Which^1, as a matter of course/", (Ig.msg ??= [])[0x6] = "\\E6* May not have ever actually happened./", (Ig.msg ??= [])[0x7] = "\\E2* B-but one time Undyne made eye contact with me!/", (Ig.msg ??= [])[0x8] = "\\E7* ... while she was writing me a speeding ticket./%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E1* Make no mistake^1, little buddy./", (Ig.msg ??= [])[0x1] = "\\E2* ICE-E's P\"E\"ZZA is H\"E\"LL./", (Ig.msg ??= [])[0x2] = "\\E0* I can't slack off for SECONDS without hearing.../", (Ig.msg ??= [])[0x3] = "\\E3* \"Be a team player^1, there's no I in PEZZA!\"/", (Ig.msg ??= [])[0x4] = "\\E2* YES THERE IS^1.&* YOU JUST TOOK IT OUT./", (Ig.msg ??= [])[0x5] = "\\E3* But it's OK^1, little buddy^1.&* I've been saving up.../", (Ig.msg ??= [])[0x6] = "\\E8* ... To go to college where Azzy is!/", (Ig.msg ??= [])[0x7] = "\\E5* Then I'll get a theater degree^1, become a famous actor.../", (Ig.msg ??= [])[0x8] = "\\E1* And let the fangirls roll in, little buddy./%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E1* Ah^1, yes^1, Little Buddy^1. Good idea^1. Meet the Rogue's Gallery./", (Ig.msg ??= [])[0x1] = "\\E3* Blue Ears - Soft serve obsessed^1, no concept of personal space./", (Ig.msg ??= [])[0x2] = "\\E2* Keeps accidentally pouring slushies on me and giggling./", (Ig.msg ??= [])[0x3] = "\\E1* The Warrior - Thankfully absent due to pizza-related injuries./", (Ig.msg ??= [])[0x4] = "\\E2* Constantly terrorizing customers with war chants./", (Ig.msg ??= [])[0x5] = "\\E3* Purple Guy - Man^1, THAT GUY^1, you gotta.../", (Ig.msg ??= [])[0x6] = "\\E6* ... actually^1, does that guy even work here?/", (Ig.msg ??= [])[0x7] = "\\E3* Ah^1, my co-workers^1. Where would I be without them?/", (Ig.msg ??= [])[0x8] = "\\E1* A happy place^1, little buddy^1. A much happier place./%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E3* It's fine^1, Little Buddy^1. You don't have to watch me suffer./", (Ig.msg ??= [])[0x1] = "\\E1* Just enjoy your freedom... While it lasts.../%");
        break;
      }
    case 0x159:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Fruit Juice", (Ig.choicemsg ??= [])[0x1] = "#Nothing", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Kris..^1. What a pleasant surprise to see you here^1.&* And on a school day./", (Ig.msg ??= [])[0x1] = "* There must be a reason that you came here at such a time./", (Ig.msg ??= [])[0x2] = "* I^1, Father Alvin^1, implore you^1.&* If you have anything weighing on your mind^1, please^1, speak./", (Ig.msg ??= [])[0x3] = "\\C2 ";
        break;
      }
    case 0x15a:
      {
        Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = "* Kris, if you want some of our \"sick\" Fruit Juice^1, you should come to our service./", (Ig.msg ??= [])[0x1] = "* Our choir sounds a bit thinner since your brother went away./", (Ig.msg ??= [])[0x2] = "* Kris^1, it would be wonderful if you would sing with us./", (Ig.msg ??= [])[0x3] = "* Or even participated to any extent,/", (Ig.msg ??= [])[0x4] = "* Instead of just trying to drink the Fruit Juice./%") : ((Ig.msg ??= [])[0x0] = "* I understand^1.&* I hope in time you may find the words you seek./", (Ig.msg ??= [])[0x1] = "* Let the Angel's power light your way./%");
        break;
      }
    case 0x15e:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Scented markers.)/", (Ig.msg ??= [])[0x1] = "\\C2 ";
        break;
      }
    case 0x15f:
      {
        Ig.choice === 0x0 ? (Ig.msg ??= [])[0x0] = "* (You dig out the marshmallow one and start huffing it.)/%" : (Ig.msg ??= [])[0x0] = "* (The chocolate one smells too fake anyway.)/%";
        break;
      }
    case 0x163:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's a toilet.^1)&* (Flush it?)/", (Ig.msg ??= [])[0x1] = "& &         Yes         No\\C1", (Ig.msg ??= [])[0x2] = '\x20', Ig.plot >= 0x32 && ((Ig.msg ??= [])[0x1] = " \\C2");
        break;
      }
    case 0x164:
      {
        Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = '%%', oW.with('obj_town_event', PD => {
          PD.con = 0x3c;
        })) : (Ig.msg ??= [])[0x0] = "* (It's good to conserve water.)/%";
        break;
      }
    case 0x168:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Yes", (Ig.choicemsg ??= [])[0x1] = "#No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's an obligatory hospital piano^1, shrunk to fit in the corner.)/", (Ig.msg ??= [])[0x1] = "* (As a result, it's missing most of the good keys.)/", (Ig.msg ??= [])[0x2] = "* (Play it?)/", (Ig.msg ??= [])[0x3] = "\\C2 ";
        break;
      }
    case 0x169:
      {
        Ig.choice === 0x0 ? (oW.with('obj_npc_room', PD => {
          PD.tempvar = 0x1;
        }), jJ('snd_play').call(this, 'snd_pianonoise'), (Ig.msg ??= [])[0x0] = "* (Plink...)/%") : (Ig.msg ??= [])[0x0] = "* (Your hands linger over the keys doing nothing.)/%";
        break;
      }
    case 0x16d:
      {
        (Ig.msg ??= [])[0x0] = "* (Ring^1, ring...)/", jJ('scr_torface').call(this, 0x1, 0x8), (Ig.msg ??= [])[0x2] = "* K..^1. Kris!?/", (Ig.msg ??= [])[0x3] = "\\E1* Whatever have you been doing!?/", (Ig.msg ??= [])[0x4] = "\\E3* I sat in the car waiting for you after school for half an hour...!/", (Ig.msg ??= [])[0x5] = "\\E7* I called and called^1, but you never picked up.../", (Ig.msg ??= [])[0x6] = "\\E8* You had your poor mother worried sick!/", (Ig.msg ??= [])[0x7] = "\\E7* Kris^1, I am afraid I am going to have to punish you.../", (Ig.msg ??= [])[0x8] = "\\E8* ... huh?/", (Ig.msg ??= [])[0x9] = "\\E1* ... A friend?/", (Ig.msg ??= [])[0xa] = "\\E0* You were spending time with..^1. a friend?/", (Ig.msg ??= [])[0xb] = "\\E0* .../", (Ig.msg ??= [])[0xc] = "\\E9* Kris.../", (Ig.msg ??= [])[0xd] = "\\E0* I will make an exception this time./", (Ig.msg ??= [])[0xe] = "* You can continue your adventures a little longer./", (Ig.msg ??= [])[0xf] = "\\E1* But when you return home.../", (Ig.msg ??= [])[0x10] = "\\E5* You are going to have to go to bed early./", (Ig.msg ??= [])[0x11] = "\\E0* See you soon^1, honey./", jJ('scr_noface').call(this, 0x12), (Ig.msg ??= [])[0x13] = "* (Click...)/%";
        break;
      }
    case 0x172:
      {
        (Ig.choicemsg ??= [])[0x0] = "Great to#see you#again", (Ig.choicemsg ??= [])[0x1] = "Who the#hell are#you?", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E0* hey, look who's walkin' around./", (Ig.msg ??= [])[0x1] = "\\E2* how are ya^1, kid?/", (Ig.msg ??= [])[0x2] = "\\C2 ";
        break;
      }
    case 0x173:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Store", (Ig.choicemsg ??= [])[0x1] = "#Friends", (Ig.choicemsg ??= [])[0x2] = 'Leave', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* yeah^1, it's real nice^1, isn't it?/", (Ig.msg ??= [])[0x1] = "\\E5* especially considering i've never met you before./", (Ig.msg ??= [])[0x2] = "\\E0* the name's sans^1.&* sans the skeleton^1.&* i'm new in town./", (Ig.msg ??= [])[0x3] = "\\E2* what's up?/", (Ig.msg ??= [])[0x4] = "\\C3 "), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E3* hmm..^1. y'know^1, good question./", (Ig.msg ??= [])[0x1] = "\\E5* i'm sans^1.&* your friendly neighborhood skeleton./", (Ig.msg ??= [])[0x2] = "\\E2* what's up?/", (Ig.msg ??= [])[0x3] = "\\C3 "), Ig.flag[0x111] >= 0x1 && (Ig.fe = 0x5, (Ig.msg ??= [])[0x0] = "\\E5* what's up?/", (Ig.msg ??= [])[0x1] = "\\C3 "), Ig.flag[0x111] < 0x1 && ((Ig.flag ??= [])[0x111] = 0x1);
        break;
      }
    case 0x174:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Me", (Ig.choicemsg ??= [])[0x1] = "#My Mom", (Ig.choicemsg ??= [])[0x2] = "My Teacher", (Ig.choicemsg ??= [])[0x3] = 'Nobody', Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* behind me^1?&* yeah^1, that's the grocery store./", (Ig.msg ??= [])[0x1] = "\\E1* unfortunately^1, it's closed./", (Ig.msg ??= [])[0x2] = "\\E2* what a pain^1.&* i really wanted to buy some milk./", (Ig.msg ??= [])[0x3] = "\\E5* someone oughta complain to the guy who runs it./%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* we just moved here^1, so i hardly know anyone./", (Ig.msg ??= [])[0x1] = "\\E2* why^1, got anyone i should know better?/", (Ig.msg ??= [])[0x2] = "\\C4 "), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E2* oh^1, you've got something better to do?/", (Ig.msg ??= [])[0x1] = "\\E0* me too./", (Ig.msg ??= [])[0x2] = "\\E2* anyway^1, i'll be standing here doing nothing./%");
        break;
      }
    case 0x175:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* huh?/%", Ig.flag[0x112] === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E2* ah^1, sorry^1. i don't hang out with idiot babies./", (Ig.msg ??= [])[0x1] = "\\E5* they compete with my sociological niche./%"), Ig.flag[0x112] === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E5* hey^1, i gave you a number^1, what more do you want?/%"), Ig.flag[0x112] === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* woah there^1, tiger./", (Ig.msg ??= [])[0x1] = "\\E0* you can't just jump straight into friendship./", (Ig.msg ??= [])[0x2] = "\\E2* it takes time./", (Ig.msg ??= [])[0x3] = "\\E3* .../", (Ig.msg ??= [])[0x4] = "\\E2* alright^1, that's enough time./", (Ig.msg ??= [])[0x5] = "\\E0* take this./", (Ig.msg ??= [])[0x6] = "\\E5* call it whenever you feel like./", jJ('scr_noface').call(this, 0x7), (Ig.msg ??= [])[0x8] = "* (You got Sans's Number.)/%", (Ig.flag ??= [])[0x112] = 0x1, jJ('scr_phoneadd').call(this, 0xca))), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E1* your mother^1, huh...?/", (Ig.msg ??= [])[0x1] = "\\E0* too late./", (Ig.msg ??= [])[0x2] = "\\E5* i already \"befriended\" your mom last night./", (Ig.msg ??= [])[0x3] = "\\E2* she's great. came to the store to buy chocolate kisses./", (Ig.msg ??= [])[0x4] = "\\E3* said she's gotta lock her door to stop you from eating 'em./", (Ig.msg ??= [])[0x5] = "\\E5* heheheh... you sound like a fun kid^1, huh?/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E0* alphys^1. yeah^1. i know about her./", (Ig.msg ??= [])[0x1] = "\\E2* came into the store with a suitcase and sunglasses./", (Ig.msg ??= [])[0x2] = "\\E0* thought she was part of the mob./", (Ig.msg ??= [])[0x3] = "\\E2* she opened the case and stuffed it full of instant noodles./", (Ig.msg ??= [])[0x4] = "\\E0* paid in small bills,/", (Ig.msg ??= [])[0x5] = "\\E0* then slunk out of the place,/", (Ig.msg ??= [])[0x6] = "\\E2* pajamas trailing on the floor./", (Ig.msg ??= [])[0x7] = "\\E0* anyway^1, our relationship is^1, uh^1, purely business./", (Ig.msg ??= [])[0x8] = "\\E2* so^1, uh^1, i guess i'll just let her do her thing./%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E1* harsh^1, but fair./%");
        break;
      }
    case 0x177:
      {
        (Ig.choicemsg ??= [])[0x0] = '#1', (Ig.choicemsg ??= [])[0x1] = '#2', (Ig.choicemsg ??= [])[0x2] = '3', (Ig.choicemsg ??= [])[0x3] = '4', jJ('snd_play').call(this, 'snd_phone'), (Ig.msg ??= [])[0x0] = "* (Ring^1, ring...)/", (Ig.msg ??= [])[0x1] = "* Hello./", (Ig.msg ??= [])[0x2] = "* You have reached the Hotline for Idiot Babies./", (Ig.msg ??= [])[0x3] = "* Please press 1 for Idiots^1, 2 for Babies^1, 3 for Idiot Babies^1, and 4 for None./", (Ig.msg ??= [])[0x4] = "\\C4 ", Ig.flag[0x112] === 0x2 && ((Ig.msg ??= [])[0x0] = "* (Ring^1, ring...^1)&* (Ring^1, ring...^1)&* (Ring^1, ring...)/", (Ig.msg ??= [])[0x1] = "* (The phone kept ringing infinitely.)/%");
        break;
      }
    case 0x178:
      {
        Ig.flag[0x112] === 0x1 && ((Ig.flag ??= [])[0x112] = 0x2), jJ('scr_phonename').call(this), (Ig.msg ??= [])[0x0] = "* Huh!?/", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* Ah^1, you're an Idiot?/", (Ig.flag ??= [])[0x113] = 0x1), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* Ah^1, you're an Baby?/", (Ig.flag ??= [])[0x113] = 0x2), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "* Ah^1, you're an Idiot Baby?/", (Ig.flag ??= [])[0x113] = 0x3), (Ig.msg ??= [])[0x1] = "* .../", (Ig.msg ??= [])[0x2] = "* To tell you the truth^1, I'm one too./", (Ig.msg ??= [])[0x3] = "* Let's try our best^1, OK?/", (Ig.msg ??= [])[0x4] = "* (Click...)/%", Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "* Why'd you call the Hotline for Idiot Babies if you aren't an Idiot Baby?/", (Ig.msg ??= [])[0x1] = "* (Click...)/%");
        break;
      }
    case 0x17c:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "\\E1* ... hey bud./", (Ig.msg ??= [])[0x1] = "\\E2* ... are you busy tomorrow...?/", (Ig.msg ??= [])[0x2] = "\\E1* i need some help with something./", (Ig.msg ??= [])[0x3] = "\\E2* it'd be great if you could come over./", (Ig.msg ??= [])[0x4] = "\\E5* i live just next door^1, ya know./", (Ig.msg ??= [])[0x5] = "\\C2 ";
        break;
      }
    case 0x17d:
      {
        Ig.choice === 0x0 && (Ig.flag[0x21] < 0x28 && ((Ig.msg ??= [])[0x0] = "\\E2* wow..^1. you answered quickly^1, huh./", (Ig.msg ??= [])[0x1] = "\\E0* that's not good^1.&* i'm a total stranger./", (Ig.msg ??= [])[0x2] = "\\E5* you should probably hesitate more./"), Ig.flag[0x21] >= 0x28 && ((Ig.msg ??= [])[0x0] = "\\E2* wow^1, you were deliberating for a while./", (Ig.msg ??= [])[0x1] = "\\E0* gee^1, what's wrong?/", (Ig.msg ??= [])[0x2] = "\\E5* don't want to hang out with a stranger?/"), (Ig.msg ??= [])[0x3] = "\\E2* well, guess i shouldn't complain.../", (Ig.msg ??= [])[0x4] = "\\E0* huh...^1?&* what are we going to be doing?/", (Ig.msg ??= [])[0x5] = "\\E2* oh^1, i'm not going to be there./", (Ig.msg ??= [])[0x6] = "\\E5* that'd be weird./", (Ig.msg ??= [])[0x7] = "\\E2* it's just gonna be you and my little brother./", (Ig.msg ??= [])[0x8] = "\\E0* he needs friends./", (Ig.msg ??= [])[0x9] = "\\E2* thanks for hanging out with him./", (Ig.msg ??= [])[0xa] = "\\E5* see ya./%"), Ig.choice === 0x1 && (Ig.flag[0x21] < 0x28 && ((Ig.msg ??= [])[0x0] = "\\E2* ... well, that was quick./"), Ig.flag[0x21] >= 0x28 && ((Ig.msg ??= [])[0x0] = "\\E2* ... hmm, well, that's disappointing./"), (Ig.msg ??= [])[0x1] = "\\E1* alright^1, alright^1, lemme sweeten the deal for ya./", (Ig.msg ??= [])[0x2] = "\\E1* if you come over..^1. i^1, will personally,/", (Ig.msg ??= [])[0x3] = "\\E5* not even be there./", (Ig.msg ??= [])[0x4] = "\\E2* it'll just be you and my little brother./", (Ig.msg ??= [])[0x5] = "\\E0* since he's new here^1, he needs friends./", (Ig.msg ??= [])[0x6] = "\\E2* anyway^1, thanks for agreeing to hang out with him./", (Ig.msg ??= [])[0x7] = "\\E5* see ya./%");
        break;
      }
    case 0x181:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Susie", (Ig.choicemsg ??= [])[0x1] = " #Key", (Ig.choicemsg ??= [])[0x2] = 'Anything', (Ig.choicemsg ??= [])[0x3] = 'Nothing', (Ig.msg ??= [])[0x0] = "\\E0* Oh^1, hi^1, Kris!/", (Ig.msg ??= [])[0x1] = "* Did you need help with your homework again?/", (Ig.msg ??= [])[0x2] = "\\E4* I know you were having trouble last time^1, so^1, um,/", (Ig.msg ??= [])[0x3] = "\\E0* I actually got a few things ready for you^1, in case --/", (Ig.msg ??= [])[0x4] = "\\E2* Ah^1, wait^1, sorry^1! I can't right now.../", (Ig.msg ??= [])[0x5] = "\\E3* I forgot my house key again^1, and.../", (Ig.msg ??= [])[0x6] = "\\E4* Sorry^1, Kris^1, I'll help you later^1, if that's ok./", (Ig.msg ??= [])[0x7] = "\\E0* See you at school^1, Kris!/", (Ig.msg ??= [])[0x8] = "\\E1* .../", (Ig.msg ??= [])[0x9] = "\\E5* .../", (Ig.msg ??= [])[0xa] = "\\E4* Umm^1, Kris?/", (Ig.msg ??= [])[0xb] = "\\E0* Did you..^1. want to talk about something?/", (Ig.msg ??= [])[0xc] = "\\C4 ", Ig.flag[0x114] >= 0x1 && ((Ig.msg ??= [])[0x0] = "\\E0* Hi Kris^1!&* Is something up?/", (Ig.msg ??= [])[0x1] = "\\C4 "), Ig.flag[0x114] === 0x0 && ((Ig.flag ??= [])[0x114] = 0x1);
        break;
      }
    case 0x182:
      {
        (Ig.choicemsg ??= [])[0x0] = " #She's nice", (Ig.choicemsg ??= [])[0x1] = " #Terrible", (Ig.choicemsg ??= [])[0x2] = "Eats Chalk", (Ig.choicemsg ??= [])[0x3] = "...", Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E4* Susie^1! That's right^1, you were with Susie!/", (Ig.msg ??= [])[0x1] = "\\E3* When you didn't come back to class^1, I was worried^1, but.../", (Ig.msg ??= [])[0x2] = "\\E4* Everything turned out OK^1! I think?/", (Ig.msg ??= [])[0x3] = "\\E5* .../", (Ig.msg ??= [])[0x4] = "\\E3* ... Umm^1, Kris^1? Can I ask something^1, if that's OK?/", (Ig.msg ??= [])[0x5] = "\\E4* Susie..^1. I'm kind of..^1. curious what she's like^1, you know?/", (Ig.msg ??= [])[0x6] = "\\E8* I mean^1, who DOESN'T wonder about her^1? She never talks to anyone./", (Ig.msg ??= [])[0x7] = "\\E4* So^1, Kris^1, could you tell me about her^1? If that's ok.../", (Ig.msg ??= [])[0x8] = "\\C4 ", Ig.flag[0x114] >= 0x2 && ((Ig.msg ??= [])[0x0] = "\\E2* Oh^1, can I ask something else about her!?/", (Ig.msg ??= [])[0x1] = "\\E3* Well^1, did it seem like^1, she^1, um.../", (Ig.msg ??= [])[0x2] = "\\E8* (W-wait^1, you definitely wouldn't know THAT...)/%"), Ig.flag[0x114] < 0x2 && ((Ig.flag ??= [])[0x114] = 0x2)), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E2* ... huh^1? Why don't I ask my mom for the key?/", (Ig.msg ??= [])[0x1] = "\\E3* I..^1. I mean^1, um..^1. I..^1. you know,/", (Ig.msg ??= [])[0x2] = "\\E4* She doesn't like it when I bother her when she's working./", (Ig.msg ??= [])[0x3] = "\\E0* Don't worry^1, OK^1? I'll just go over to Catti's./%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E1* Umm..^1. Kris...^1? Are you feeling alright?/", (Ig.msg ??= [])[0x1] = "\\E5* Normally you're not so... talkative./", (Ig.msg ??= [])[0x2] = "\\E4* Oh! I don't mean to sound like something's wrong with you./", (Ig.msg ??= [])[0x3] = "\\E4* .../", (Ig.msg ??= [])[0x4] = "\\E2* Umm^1, Kris^1, is something wrong?/", (Ig.msg ??= [])[0x5] = "\\E3* Why did you go to the hospital to see my dad...?/", (Ig.msg ??= [])[0x6] = "\\E2* I mean^1, I'm sure he appreciated it^1, but... um.../", (Ig.msg ??= [])[0x7] = "\\E4* Gosh^1, I'm sorry^1, Kris^1. Forget I said anything!/%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E0* Tell Azzy I said hi^1, Kris!/%");
        break;
      }
    case 0x183:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E2* What...^1?&* She's..^1. a nice person?/", (Ig.msg ??= [])[0x1] = "* Really!^1? L-like, really!^1? Honestly!^1? Truly!?/", (Ig.msg ??= [])[0x2] = "\\E4* I mean^1, that's just what I was hoping^1, but.../", (Ig.msg ??= [])[0x3] = "\\E2* W-wait^1, this isn't another trick^1, is it^1, Kris?/", (Ig.msg ??= [])[0x4] = "\\E8* Like when you put ketchup on your arms and told me it was blood?/", (Ig.msg ??= [])[0x5] = "\\E2* ... R-really^1? You're serious^1? You're totally serious?/", (Ig.msg ??= [])[0x6] = "\\E6* ... gosh^1, then maybe I should try talking to her.../", (Ig.msg ??= [])[0x7] = "\\E8* B-but if I die^1, you're paying for my funeral^1, Kris!/", (Ig.msg ??= [])[0x8] = "\\E6* (Though^1, honestly^1, if she's nice^1 I might die^1, too...)/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E2* She WHAT^1? She smashed you against the LOCKERS?/", (Ig.msg ??= [])[0x1] = "\\E7* Gosh^1, Kris^1, I'm really sorry^1. That's just awful./", (Ig.msg ??= [])[0x2] = "\\E3* I..^1. I'd THOUGHT Susie was good^1, just.../", (Ig.msg ??= [])[0x3] = "\\E6* Maybe it would take someone special to find her good side./", (Ig.msg ??= [])[0x4] = "\\E7* ... but she really IS terrible^1, isn't she...?/", (Ig.msg ??= [])[0x5] = "\\E7* Kris..^1. I'm SO sorry you have to go through this./", (Ig.msg ??= [])[0x6] = "\\E4* In fact^1, I wonder if..^1. d-do you think...?/", (Ig.msg ??= [])[0x7] = "\\E3* I wonder if Alphys would let us switch partners^1, I mean?/", (Ig.msg ??= [])[0x8] = "\\E2* You know^1, so you wouldn't have to be the one^1, who^1, um,/", (Ig.msg ??= [])[0x9] = "\\E3* Gets to be^1, slammed into lockers^1, and stuff^1, anymore./", (Ig.msg ??= [])[0xa] = "\\E8* (Wait^1, I don't think I phrased that correctly...)/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E2* What^1?&* She was EATING the chalk???/", (Ig.msg ??= [])[0x1] = "* R..^1. really...?/", (Ig.msg ??= [])[0x2] = "\\E8* Wait^1! You're teasing me^1, aren't you^1, Kris?/", (Ig.msg ??= [])[0x3] = "\\E3* L-like when you told me ICE-E was real and eats kids.../", (Ig.msg ??= [])[0x4] = "\\E8* So Dess smacked you with a wiffle bat 'til you stopped lying./", (Ig.msg ??= [])[0x5] = "\\E2* ... Huh^1? You're telling the truth^1? Seriously^1?/", (Ig.msg ??= [])[0x6] = "\\E5* .../", (Ig.msg ??= [])[0x7] = "\\E0* Umm^1, then..^1. what color chalk does she like?/", (Ig.msg ??= [])[0x8] = "\\E4* And^1, do you think she likes the thin or the thick kind...?/", (Ig.msg ??= [])[0x9] = "\\E8* (Wait, maybe making her a lunchbox full of chalk is stupid...)/%"), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E2* Seriously^1, Kris^1? But I help you ALL the time!/", (Ig.msg ??= [])[0x1] = "\\E8* The LEAST you can do is give me a LITTLE information!/", (Ig.msg ??= [])[0x2] = "\\E2* Like^1, d-does she like metal music!?/", (Ig.msg ??= [])[0x3] = "\\E2* Is she really an obligate carnivore!?/", (Ig.msg ??= [])[0x4] = "\\E2* D..^1. Does she really have a tail underneath her jacket!?/", (Ig.msg ??= [])[0x5] = "\\E3* Or^1, or... or..^1./", (Ig.msg ??= [])[0x6] = "\\E4* Sorry Kris^1, it's not any of my business^1, is it...?/", (Ig.msg ??= [])[0x7] = "\\E8* (I blew it, didn't I...)/%");
        break;
      }
    case 0x190:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (If you go to bed^1, this chapter of your adventures will end.)/", (Ig.msg ??= [])[0x1] = "* (Will you go to bed?)/", (Ig.msg ??= [])[0x2] = "\\C2 ";
        break;
      }
    case 0x191:
      {
        Ig.choice === 0x0 && (oW.with('obj_krisroom', PD => {
          PD.con = 0x32;
        }), (Ig.msg ??= [])[0x0] = "* (You decided to go to bed.)/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You will sleep later.)/%");
        break;
      }
    case 0x192:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Sleep", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's your bed.)/", (Ig.msg ??= [])[0x1] = "* (If you go back to sleep^1, \\cYyou may miss a lot of important things\\cW.)/", (Ig.msg ??= [])[0x2] = "* (Will you go to bed?)/", (Ig.msg ??= [])[0x3] = "\\C2 ";
        break;
      }
    case 0x193:
      {
        Ig.choice === 0x0 && ((Ig.choicemsg ??= [])[0x0] = " #Sleep!!!", (Ig.choicemsg ??= [])[0x1] = " #Do not!!!", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', oW.with('obj_krisroom', PD => {
          PD.con = 0x64;
        }), (Ig.msg ??= [])[0x0] = "* (For some reason^1, you decided to go back to sleep...)/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* (You can sleep in class.)/%");
        break;
      }
    case 0x195:
      {
        (Ig.choicemsg ??= [])[0x0] = "Play#a game", (Ig.choicemsg ??= [])[0x1] = "Do not#play a#game", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* BOO HOO^1, BOO HOO^1, UEE HEE HEE./", (Ig.msg ??= [])[0x1] = "* SO LONELY^1, LONELY^1, I BE.../", (Ig.msg ??= [])[0x2] = "* BUT LO^1, THREE VISITORS STANDING INSIDE?/", (Ig.msg ??= [])[0x3] = "* WHO ARE YOU FEW?/", jJ('scr_ralface').call(this, 0x4, 0x0), (Ig.msg ??= [])[0x5] = "* Nice to meet you^1! I'm Ralsei^1, this is Kris^1, and.../", jJ('scr_susface').call(this, 0x6, 0x2), (Ig.msg ??= [])[0x7] = "* So^1, what the hell are you doing in there?/", jJ('scr_noface').call(this, 0x8), (Ig.msg ??= [])[0x9] = "\\TJ* I AM INNOCENT^1, INNOCENT^1.&* I JUST WANTED TO PLAY A GAME^1, GAME./", (Ig.msg ??= [])[0xa] = "* BUT THE BORING KINGS FOUND SUCH FUN TO BE A TROUBLE./", (Ig.msg ??= [])[0xb] = "* AS PUNISHMENT^1, THEY CRAVED TO IMPRISON MY BODY./", (Ig.msg ??= [])[0xc] = "* BUT I'M FAST^1, FAST^1, CLEVER^1, CLEVER./", (Ig.msg ??= [])[0xd] = "* THEY LOST THE CHASE^1, AND LOCKED UP THEIR ENTIRE RACE,/", (Ig.msg ??= [])[0xe] = "* BUILDING A PRISON AROUND THE WHOLE WORLD^1. NOW I'M THE ONLY FREE ONE./", jJ('scr_ralface').call(this, 0xf, 0x8), (Ig.msg ??= [])[0x10] = "* Huh^1? Free^1? But you're clearly the one behind bars.../", jJ('scr_noface').call(this, 0x11), (Ig.msg ??= [])[0x12] = "\\TJ* THINGS DON'T SEEM SUCH FROM HERE^1, LIGHTNERS!/", jJ('scr_susface').call(this, 0x13, 0x2), (Ig.msg ??= [])[0x14] = "* Well^1, sounds like you don't need any help^1, then./", jJ('scr_noface').call(this, 0x15), (Ig.msg ??= [])[0x16] = "\\TJ* THAT IS UN-SO^1.&* I GROW LONELY IN MY LITTLE FREEDOM./", (Ig.msg ??= [])[0x17] = "* SO^1, SHALL YOU PLAY A GAME WITH ME^1, ME...?/", (Ig.msg ??= [])[0x18] = "* I'LL SHOW YOU WHAT IT MEANS TO BE FREE!/", (Ig.msg ??= [])[0x19] = "\\C2 ", Ig.flag[0xf1] === 0x1 && ((Ig.msg ??= [])[0x0] = "* FIND THE KEY^1, AND I'LL LET YOU BE FREE^1, FREE./", (Ig.msg ??= [])[0x1] = "* THE KEY IS HIDDEN FROM THE EYES^1. THE OLD SHOPKEEPER KNOWS A SECRET./%");
        break;
      }
    case 0x196:
      {
        (Ig.choicemsg ??= [])[0x0] = "Play#a game", (Ig.choicemsg ??= [])[0x1] = "Do not#play a#game", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.flag[0xf1] === 0x0 && ((Ig.flag ??= [])[0xf1] = 0x1), Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "* FIND THE KEY^1, AND I'LL LET YOU BE FREE^1, FREE./", (Ig.msg ??= [])[0x1] = "* THE KEY IS HIDDEN FROM THE EYES^1. THE OLD SHOPKEEPER KNOWS A SECRET./%", oW.with('obj_event_room', PD => {
          PD.con = 0x14;
        })), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* BOO HOO^1, BOO HOO^1, UEE HEE HEE!!/", (Ig.msg ??= [])[0x1] = "* HOW CAN YOU REFUSE^1, WHEN YOU ARE ALREADY PLAYING...?/%", oW.with('obj_event_room', PD => {
          PD.con = 0x14;
        }));
        break;
      }
    case 0x19a:
      {
        (Ig.choicemsg ??= [])[0x0] = "#Use Key", (Ig.choicemsg ??= [])[0x1] = "#Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* UEE HEE HEE^1, THE KEY^1, THE KEY./", (Ig.msg ??= [])[0x1] = "* A MARVELLOUS FUN IS ABOUT TO BREAK FREE./", (Ig.msg ??= [])[0x2] = "* WON'T YOU LET YOURSELF OUTSIDE?/", (Ig.msg ??= [])[0x3] = "\\C2 ", (Ig.msg ??= [])[0x4] = '\x20';
        break;
      }
    case 0x19b:
      {
        Ig.flag[0xf1] < 0x5 && ((Ig.flag ??= [])[0xf1] = 0x5), jJ('scr_keyitemremove').call(this, 0x4), jJ('scr_keyitemremove').call(this, 0x5), jJ('scr_keyitemremove').call(this, 0x6), jJ('scr_keyitemremove').call(this, 0x7), Ig.choice === 0x0 && (jJ('scr_noface').call(this, 0x0), (Ig.msg ??= [])[0x1] = "* (You put the Door Key in front of the Door.)/%", oW.with('obj_event_room', PD => {
          PD.con = 0x5;
        })), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* YOU CAME TOO FAR^1! YOUR CHOICE HAS RUN OUT!/%", oW.with('obj_event_room', PD => {
          PD.con = 0x5;
        }));
        break;
      }
    case 0x19f:
      {
        (Ig.msg ??= [])[0x0] = "* DO NOT TARRY!/%";
        break;
      }
    case 0x1a4:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Blaze", (Ig.choicemsg ??= [])[0x1] = " #Do Not Blaze", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Blaze it./", (Ig.msg ??= [])[0x1] = "\\C2 ";
        break;
      }
    case 0x1a9:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Apologize#Profusely", (Ig.choicemsg ??= [])[0x1] = " #Intimidate", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Hey^1! You're the chumps that beat me up earlier!/", (Ig.msg ??= [])[0x1] = "* There's no way I'll forgive you^1, so scram!/", (Ig.msg ??= [])[0x2] = "\\C2 ";
        break;
      }
    case 0x1aa:
      {
        Ig.choice === 0x0 ? (jJ('scr_ralface').call(this, 0x0, 0x6), (Ig.msg ??= [])[0x1] = "* We're sorry^1, we made a mistake earlier./", (Ig.msg ??= [])[0x2] = "\\E8* We promise we won't do it again!/", jJ('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "* Huh...^1? You're apologizing^1? I guess I'll forgive you then.../", (Ig.msg ??= [])[0x5] = "* (Your violence against a single Rudinn was forgiven!)/%", (Ig.flag ??= [])[0x2b] = Ig.flag[0x2b] - Ig.flag[0x20b], Ig.flag[0x2b] < 0x0 && ((Ig.flag ??= [])[0x2b] = 0x0), this.normal_kills = Ig.flag[0x208] - Ig.flag[0x20b], (Ig.flag ??= [])[0x28] = Ig.flag[0x28] - this.normal_kills, Ig.flag[0x28] < 0x0 && ((Ig.flag ??= [])[0x28] = 0x0), (Ig.flag ??= [])[0xf3] = 0x1) : (jJ('scr_susface').call(this, 0x0, 0x1), (Ig.msg ??= [])[0x1] = "* Heh^1, you wanna act that way^1, huh...?/", (Ig.msg ??= [])[0x2] = "\\E3* Forgive me or I'll crush you^1, dweeb!!/", jJ('scr_noface').call(this, 0x3), (Ig.msg ??= [])[0x4] = "* I..^1. I'm sorry!!^1! I forgive you!!^1! Here^1, take this Choco Diamond!/", (Ig.msg ??= [])[0x5] = "* (You got the Choco Diamond.)/%", jJ('scr_itemget').call(this, 0xd), this.noroom === 0x1 && (jJ('scr_ralface').call(this, 0x5, 0x6), (Ig.msg ??= [])[0x6] = "* I'm sorry^1, but we don't have any room.../", jJ('scr_susface').call(this, 0x7, 0x2), (Ig.msg ??= [])[0x8] = "* Too late^1, I already ate it./%"), (Ig.flag ??= [])[0xf3] = 0x2);
        break;
      }
    case 0x1ae:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Listen", (Ig.choicemsg ??= [])[0x1] = " #Do Not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's a music player.^1)&* (Listen to the contents?)/", (Ig.msg ??= [])[0x1] = "\\C2 ";
        break;
      }
    case 0x1af:
      {
        Ig.choice === 0x0 ? (jJ('snd_play').call(this, 'snd_splat'), (Ig.msg ??= [])[0x0] = "* (...)/", (Ig.msg ??= [])[0x1] = "* (It's full of cartoon splat noises.)/%") : (Ig.msg ??= [])[0x0] = "* (You did not listen.)/%";
        break;
      }
    case 0x1b3:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Prison B1", (Ig.choicemsg ??= [])[0x1] = " #Floor 1F", (Ig.choicemsg ??= [])[0x2] = "??????", (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Where will you ride the elevator to?)/", (Ig.msg ??= [])[0x1] = "\\C3";
        break;
      }
    case 0x1b4:
      {
        (Ig.msg ??= [])[0x0] = '%%', Ig.choice === 0x0 && (Ig.flag[0xef] !== 0x0 ? oW.with('obj_elevatorcontroller', PD => {
          Ig.flag[0xef] === 0x1 ? (PD.dir = -0x1, PD.newcno = 0x0, PD.con = 0x64) : (PD.dir = 0x1, PD.newcno = 0x0, PD.con = 0x64);
        }) : (Ig.msg ??= [])[0x0] = "* (You're there.)/%"), Ig.choice === 0x1 && (Ig.flag[0xef] !== 0x1 ? oW.with('obj_elevatorcontroller', PD => {
          PD.dir = 0x1, PD.newcno = 0x1, PD.con = 0x64;
        }) : (Ig.msg ??= [])[0x0] = "* (You're there.)/%"), Ig.choice === 0x2 && (Ig.flag[0xef] !== 0x3 ? oW.with('obj_elevatorcontroller', PD => {
          PD.dir = -0x1, PD.newcno = 0x3, PD.con = 0x64;
        }) : (Ig.msg ??= [])[0x0] = "* (You're there.)/%");
        break;
      }
    case 0x1b8:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Ride", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Ride the elevator?)/", (Ig.msg ??= [])[0x1] = "\\C2";
        break;
      }
    case 0x1b9:
      {
        (Ig.msg ??= [])[0x0] = '%%', Ig.choice === 0x0 && oW.with('obj_elevatorcontroller', PD => {
          Ig.flag[0xef] === 0x1 ? (PD.dir = 0x1, PD.newcno = 0x2, PD.con = 0x64) : (PD.dir = -0x1, PD.newcno = 0x1, PD.con = 0x64);
        });
        break;
      }
    case 0x1bd:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #Don't", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ig.typer = 0x1e, Ig.fc = 0x1, Ig.fe = 0x0, (Ig.msg ??= [])[0x0] = "\\E0* Hey Kris./", (Ig.msg ??= [])[0x1] = "\\E0* W..^1. wait a second./", (Ig.msg ??= [])[0x2] = "\\E3* Ummm^1, I.../", (Ig.msg ??= [])[0x3] = "\\E1* Look./", (Ig.msg ??= [])[0x4] = "\\E2* I know you wanna give a REAL goodbye to everyone^1, right?/", (Ig.msg ??= [])[0x5] = "\\E3* I mean, I'm ALL for leaving right away^1, but.../", (Ig.msg ??= [])[0x6] = "\\E2* Y'know, we could go back a sec^1. If you wanted./", (Ig.msg ??= [])[0x7] = "\\C2";
        break;
      }
    case 0x1be:
      {
        Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = "\\E2* Well^1, then what are we waiting for?/", (Ig.msg ??= [])[0x1] = "\\E9* Let's head back!/%") : ((Ig.msg ??= [])[0x0] = "\\E4* C'mon^1, don't lie!/", (Ig.msg ??= [])[0x1] = "\\E9* Let's at least say goodbye to Lancer!/%");
        break;
      }
    case 0x1c2:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Let's Fight", (Ig.choicemsg ??= [])[0x1] = " #Let's Not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* If you can beat me^1, I'll go back to being a good guy./", (Ig.msg ??= [])[0x1] = "\\E0* But if you LOSE.../", (Ig.msg ??= [])[0x2] = "\\E2* YOU guys will have to become bad guys with US.../", (Ig.msg ??= [])[0x3] = "\\E4* ... and do WHATEVER we say./", jJ('scr_lanface').call(this, 0x4, 0x1), (Ig.msg ??= [])[0x5] = "* Ho ho ho!!^1! Our wish is your command!!!/", jJ('scr_susface').call(this, 0x6, 0x1), (Ig.msg ??= [])[0x7] = "\\E1* So^1, whaddya say...?/", (Ig.msg ??= [])[0x8] = "\\C2";
        break;
      }
    case 0x1c3:
      {
        (Ig.msg ??= [])[0x0] = "* Eh^1, don't bother answering./", (Ig.msg ??= [])[0x1] = "\\E2* We were just gonna thrash you anyway^1, so.../", (Ig.msg ??= [])[0x2] = "\\E3* See ya!/%";
        break;
      }
    case 0x1c7:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Me", (Ig.choicemsg ??= [])[0x1] = " #Asriel", (Ig.choicemsg ??= [])[0x2] = 'Pie', Ix(jJ('scr_litemcheck').call(this, 0x4)) && ((Ig.choicemsg ??= [])[0x2] = 'Flowers'), (Ig.choicemsg ??= [])[0x3] = 'Nevermind', (Ig.msg ??= [])[0x0] = "* Kris^1? What is it^1, honey?/", (Ig.msg ??= [])[0x1] = "\\C4 ";
        break;
      }
    case 0x1c8:
      {
        Ig.choice === 0x0 && ((Ig.msg ??= [])[0x0] = "\\E0* Kris^1, honey^1, you have grown up so much.../", (Ig.msg ??= [])[0x1] = "\\E9* Someday soon you will be going off to university as well.../", (Ig.msg ??= [])[0x2] = "\\E1* .../", (Ig.msg ??= [])[0x3] = "\\E9* Remember when you were little.../", (Ig.msg ??= [])[0x4] = "\\E8* You asked when your horns were going to grow in?/", (Ig.msg ??= [])[0x5] = "\\E0* So we bought that headband with the little red horns on it./", (Ig.msg ??= [])[0x6] = "\\E4* Oh^1, you wore it for months! Whatever happened to it?/%"), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "\\E9* Remember that video-game you and Asriel used to play?/", (Ig.msg ??= [])[0x1] = "\\E1* What was it called...^1? Super Smashing Fighters?/", (Ig.msg ??= [])[0x2] = "\\E0* When he was very little^1, he LOVED the green lizard from that./", (Ig.msg ??= [])[0x3] = "\\E9* We even had a birthday party for him themed around it./", (Ig.msg ??= [])[0x4] = "\\E0* Your father painted all these eggs with spots as decoration.../", (Ig.msg ??= [])[0x5] = "\\E9* Oh^1, your brother LOVED it...!/", (Ig.msg ??= [])[0x6] = "\\E5* Until the next day^1, your father cooked them all for breakfast./", (Ig.msg ??= [])[0x7] = "\\E8* Your brother just kept crying.../", (Ig.msg ??= [])[0x8] = "\\E4* Ever since^1, he's hated that book about eating green eggs!/%"), Ig.choice === 0x2 && ((Ig.msg ??= [])[0x0] = "\\E1* Kris^1, since only you and I are living here right now.../", (Ig.msg ??= [])[0x1] = "\\E9* It feels..^1. just a bit lonely^1, does it not...?/", (Ig.msg ??= [])[0x2] = "\\E0* But^1, fortunately^1, sharing a warm^1, freshly-made pie,/", (Ig.msg ??= [])[0x3] = "\\E9* Is the perfect cure for such a condition./", (Ig.msg ??= [])[0x4] = "\\E5* ... as long as I get to eat some^1, of course./%", Ix(jJ('scr_litemcheck').call(this, 0x4)) && ((Ig.msg ??= [])[0x0] = "\\E8* Oh^1, Kris...^1? Flowers^1? For your mother...?/", (Ig.msg ??= [])[0x1] = "\\E9* How sweet.../", (Ig.msg ??= [])[0x2] = "\\E9* .../", (Ig.msg ??= [])[0x3] = "\\E5* These are from HIM^1, are they not./", (Ig.msg ??= [])[0x4] = "\\E1* .../", (Ig.msg ??= [])[0x5] = "\\E0* Err^1, well^1, worry not^1, Kris^1, I will.../", (Ig.msg ??= [])[0x6] = "\\E5* ... find some place for them./%", jJ('scr_litemremove').call(this, 0x4), (Ig.flag ??= [])[0x106] = 0x3)), Ig.choice === 0x3 && ((Ig.msg ??= [])[0x0] = "\\E1* Kris^1, perhaps you should go to bed early tonight.../", (Ig.msg ??= [])[0x1] = "* You do not look quite yourself./%");
        break;
      }
    case 0x1cc:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Field", (Ig.choicemsg ??= [])[0x1] = " #Forest", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (It's a door.^1)&* (Where will you go?)/", (Ig.msg ??= [])[0x1] = "\\C2 ", Ig.plot >= 0x4b && ((Ig.choicemsg ??= [])[0x1] = " #Forest", (Ig.choicemsg ??= [])[0x2] = "Bake Sale", (Ig.msg ??= [])[0x1] = "\\C3 "), Ig.plot >= 0x9a && ((Ig.choicemsg ??= [])[0x3] = 'Castle', (Ig.msg ??= [])[0x1] = "\\C4 ");
        break;
      }
    case 0x1cd:
      {
        (Ig.msg ??= [])[0x0] = "* (But nothing happened.)/%", Ig.choice === 0x0 && oW.with('obj_shortcut_door', PD => {
          PD.door_destination = 0x3d;
        }), Ig.choice === 0x1 && oW.with('obj_shortcut_door', PD => {
          PD.door_destination = 0x49;
        }), Ig.choice === 0x2 && oW.with('obj_shortcut_door', PD => {
          PD.door_destination = 0x52;
        }), Ig.choice === 0x3 && oW.with('obj_shortcut_door', PD => {
          PD.door_destination = 0x61;
        }), oW.with('obj_shortcut_door', PD => {
          PD.door_destination === PD.door_location ? (Ig.msg ??= [])[0x0] = "* (Amazingly^1, you are already there.)/%" : ((Ig.msg ??= [])[0x0] = "* (The door opened...)/%", PD.con = 0x32);
        });
        break;
      }
    case 0x1d1:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Give Cake", (Ig.choicemsg ??= [])[0x1] = " #Do not", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* Marga riba^1!&* That cake^1!&* It's seething with power!/", (Ig.msg ??= [])[0x1] = "* It's my cake^1, isn't it!^1?&* Did you repair it!^1?&* Will you return it!?/", (Ig.msg ??= [])[0x2] = "\\C2 ";
        break;
      }
    case 0x1d2:
      {
        Ig.choice === 0x0 && (jJ('scr_itemremove').call(this, 0x6), jJ('scr_itemget').call(this, 0x7), (Ig.msg ??= [])[0x0] = "* Edamame^1! My old cake^1! I'm so happy I could spin!/", (Ig.msg ??= [])[0x1] = "* My friend^1, share in my riches^1! I have many worse cakes I do not want!/", (Ig.msg ??= [])[0x2] = "* If you're not carrying a Cake^1, come here and I'll give you one^1! Forever!/", (Ig.writersnd ??= [])[0x0] = 'snd_item', (Ig.msg ??= [])[0x3] = "\\S0* (You traded the TopCake for the SpinCake.)/", (Ig.msg ??= [])[0x4] = "* Now^1, I'm going to continue to spin and cry^1! Spin and cry!/%", (Ig.flag ??= [])[0xfd] = 0x1), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* Sweet in cake^1, but not in character^1! A tragedy!!/%");
        break;
      }
    case 0x1d6:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Take Cake", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', Ix(jJ('scr_itemcheck').call(this, 0x7)) ? (Ig.msg ??= [])[0x0] = "* Mama miba^1! How are you enjoying my rejected pastries?/%" : ((Ig.msg ??= [])[0x0] = "* Mom amiga^1! You want an inferior cake^1, my friend?/", (Ig.msg ??= [])[0x1] = "\\C2 ");
        break;
      }
    case 0x1d7:
      {
        Ig.choice === 0x0 && (jJ('scr_itemget').call(this, 0x7), (Ig.msg ??= [])[0x0] = "* Please take this cake^1! It's worthless^1, my dear friend!/", (Ig.writersnd ??= [])[0x0] = 'snd_item', (Ig.msg ??= [])[0x1] = "\\S0* (You got the SpinCake.)/%", this.noroom === 0x1 && ((Ig.msg ??= [])[0x0] = "* Mama shiba^1! You're carrying too many things that aren't cakes!/%")), Ig.choice === 0x1 && ((Ig.msg ??= [])[0x0] = "* I understand!^1! Too much cake will make you spin and cry!!/%");
        break;
      }
    case 0x258:
      {
        (Ig.choicemsg ??= [])[0x0] = " #Yes", (Ig.choicemsg ??= [])[0x1] = " #No", (Ig.choicemsg ??= [])[0x2] = '\x20', (Ig.choicemsg ??= [])[0x3] = '\x20', (Ig.msg ??= [])[0x0] = "* (Well^1, there is a man here.)/", (Ig.msg ??= [])[0x1] = "* (He offered you something.)/", (Ig.msg ??= [])[0x2] = "\\C2 ";
        break;
      }
    case 0x259:
      {
        (Ig.flag ??= [])[0x38e] = 0x2, Ig.choice === 0x0 ? ((Ig.msg ??= [])[0x0] = "* (You received an Egg.)/%", jJ('snd_play').call(this, 'snd_egg'), jJ('scr_keyitemget').call(this, 0x2)) : (Ig.msg ??= [])[0x0] = "* (Then he needn't be here.)/%";
        break;
      }
    default:
      break;
  }
}
oH(mW, 'scr_text');
function mZ(PV) {
  for (this.i = 0x0; this.i < 0x8; this.i += 0x1) Ig.litem[this.i] === PV && Mz(this, jJ('scr_litemshift'), this.i, 0x0);
}
oH(mZ, 'scr_litemremove');
function mq(PV, PD) {
  for ((Ig.litem ??= [])[0x8] = PD, this.i = PV; this.i < 0x8; this.i += 0x1) (Ig.litem ??= [])[this.i] = Ig.litem[Math.trunc(this.i + 0x1)];
  Mz(this, jJ('scr_litemname'));
}
oH(mq, 'scr_litemshift');
function mu() {
  for (this.i = 0x0; this.i < 0x8; this.i += 0x1) this.itemid = Ig.litem[this.i], this.itemid === 0x0 && ((Ig.litemname ??= [])[this.i] = '\x20'), this.itemid === 0x1 && ((Ig.litemname ??= [])[this.i] = "Hot Chocolate"), this.itemid === 0x2 && ((Ig.litemname ??= [])[this.i] = 'Pencil'), this.itemid === 0x3 && ((Ig.litemname ??= [])[this.i] = 'Bandage'), this.itemid === 0x4 && ((Ig.litemname ??= [])[this.i] = 'Bouquet'), this.itemid === 0x5 && ((Ig.litemname ??= [])[this.i] = "Ball of Junk"), this.itemid === 0x6 && ((Ig.litemname ??= [])[this.i] = "Halloween Pencil"), this.itemid === 0x7 && ((Ig.litemname ??= [])[this.i] = "Lucky Pencil"), this.itemid === 0x8 && ((Ig.litemname ??= [])[this.i] = 'Egg'), this.itemid === 0xb && ((Ig.litemname ??= [])[this.i] = 'Glass');
}
oH(mu, 'scr_litemname');
function mH(PV) {
  this.i = 0x0, this.loop = 0x1, this.noroom = 0x0, (Ig.item ??= [])[0xc] = 0x3e7;
  for (let PD = 0x0; this.loop === 0x1;) {
    if (++PD > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    if (Ig.keyitem[this.i] === 0x0) {
      (Ig.keyitem ??= [])[this.i] = PV;
      break;
    }
    if (this.i === 0xc) {
      this.noroom = 0x1;
      break;
    }
    this.i += 0x1;
  }
  Mz(this, jJ('scr_keyiteminfo_all'));
}
oH(mH, 'scr_keyitemget');
function mG() {
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) this.keyitemid = Ig.keyitem[this.i], (this.keyitemname ??= [])[this.i] = '\x20', jJ('scr_keyiteminfo').call(this, this.keyitemid), (this.keyitemusable ??= [])[this.i] = this.tempkeyitemusable, (this.keyitemname ??= [])[this.i] = this.tempkeyitemname, (this.keyitemdesc ??= [])[this.i] = this.tempkeyitemdesc;
}
oH(mG, 'scr_keyiteminfo_all');
function mA(PV) {
  switch (this.tempkeyitemdesc = "---", this.tempkeyitemname = '\x20', this.tempkeyitemusable = 0x0, PV) {
    case 0x0:
      {
        this.tempkeyitemdesc = "---", this.tempkeyitemname = '\x20';
        break;
      }
    case 0x1:
      {
        this.tempkeyitemdesc = "It can be used to make calls.", this.tempkeyitemname = "Cell Phone", this.tempkeyitemusable = 0x1;
        break;
      }
    case 0x2:
      {
        this.tempkeyitemdesc = "Not too important, not too unimportant.", this.tempkeyitemname = 'Egg', this.tempkeyitemusable = 0x1;
        break;
      }
    case 0x3:
      {
        this.tempkeyitemdesc = "Though broken, it seethes with power.#A master smith could fix it.", this.tempkeyitemname = 'BrokenCake';
        break;
      }
    case 0x4:
      {
        this.tempkeyitemdesc = "It's the top part of a key.#A smith could fix all three parts.", this.tempkeyitemname = "Broken Key A";
        break;
      }
    case 0x5:
      {
        this.tempkeyitemdesc = "The key to a mysterious cell.#Something feels strange about it.", this.tempkeyitemname = "Door Key";
        break;
      }
    case 0x6:
      {
        this.tempkeyitemdesc = "It's the middle part of a key.#A smith could fix all three parts.", this.tempkeyitemname = "Broken Key B";
        break;
      }
    case 0x7:
      {
        this.tempkeyitemdesc = "It's the bottom part of a key.#A smith could fix all three parts.", this.tempkeyitemname = "Broken Key C";
        break;
      }
    case 0xd:
      {
        this.tempkeyitemusable = 0x1, this.tempkeyitemdesc = "A sharp shadow moves like water in the hand.#You have collected 1.", this.tempkeyitemname = 'ShadowCrystal';
        break;
      }
  }
}
oH(mA, 'scr_keyiteminfo');
function md(PV) {
  this.i = 0x0, this.loop = 0x1, this.noroom = 0x0, (Ig.phone ??= [])[0x8] = 0x3e7;
  for (let PD = 0x0; this.loop === 0x1;) {
    if (++PD > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    if (Ig.phone[this.i] === 0x0) {
      (Ig.phone ??= [])[this.i] = PV;
      break;
    }
    if (this.i === 0x8) {
      this.noroom = 0x1;
      break;
    }
    this.i += 0x1;
  }
  jJ('scr_phonename').call(this);
}
oH(md, 'scr_phoneadd');
function mS() {
  for (this.i = 0x0; this.i < 0x8; this.i += 0x1) (Ig.phonename ??= [])[this.i] = '\x20';
  for (this.i = 0x0; this.i < 0x8; this.i += 0x1) switch (this.itemid = Ig.phone[this.i], this.itemid) {
    case 0xc9:
      {
        (Ig.phonename ??= [])[this.i] = "Call Home";
        break;
      }
    case 0xca:
      {
        (Ig.phonename ??= [])[this.i] = "Sans's Number", Ig.flag[0x112] >= 0x2 && ((Ig.phonename ??= [])[this.i] = "Not Sans's Number");
        break;
      }
  }
}
oH(mS, 'scr_phonename');
function mR(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FR \\TR %", String(PD));
}
oH(mR, 'scr_ralface');
function mv(PV) {
  this.i = 0x0, this.loop = 0x1, this.noroom = 0x0, (Ig.item ??= [])[0xc] = 0x3e7;
  for (let PD = 0x0; this.loop === 0x1;) {
    if (++PD > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    if (Ig.item[this.i] === 0x0) {
      (Ig.item ??= [])[this.i] = PV;
      break;
    }
    if (this.i === 0xc) {
      this.noroom = 0x1;
      break;
    }
    this.i += 0x1;
  }
  Mz(this, jJ('scr_iteminfo_all'));
}
oH(mv, 'scr_itemget');
function mz() {
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) this.itemid = Ig.item[this.i], jJ('scr_iteminfo').call(this, this.itemid), (Ig.itemnameb ??= [])[this.i] = this.itemnameb, (Ig.itemdescb ??= [])[this.i] = this.itemdescb, (Ig.itemvalue ??= [])[this.i] = this.value, (Ig.itemusable ??= [])[this.i] = this.usable;
}
oH(mz, 'scr_iteminfo_all');
function mb(PV) {
  switch (this.usable = 0x0, this.value = 0x0, this.itemtarget = 0x0, this.itemnameb = '\x20', this.itemdescb = '\x20', PV) {
    case 0x0:
      {
        this.itemnameb = '\x20', this.itemdescb = "---";
        break;
      }
    case 0x1:
      {
        this.itemnameb = "Dark Candy", this.itemdescb = "Heals#40HP", this.itemtarget = 0x1, this.value = 0x19, this.usable = 0x1;
        break;
      }
    case 0x2:
      {
        this.itemnameb = 'ReviveMint', this.itemdescb = "Heal#Downed#Ally", this.itemtarget = 0x1, this.value = 0x190, this.usable = 0x1;
        break;
      }
    case 0x3:
      {
        this.itemnameb = 'Glowshard', this.itemdescb = "Sell#at#shops", this.itemtarget = 0x0, this.value = 0xc8, this.usable = 0x0;
        break;
      }
    case 0x4:
      {
        this.itemnameb = 'Manual', this.itemdescb = "Read#out of#battle", this.itemtarget = 0x2, this.value = 0x1, this.usable = 0x0;
        break;
      }
    case 0x5:
      {
        this.itemnameb = 'BrokenCake', this.itemdescb = "Heals#20HP", this.itemtarget = 0x1, this.value = 0x5, this.usable = 0x1;
        break;
      }
    case 0x6:
      {
        this.itemnameb = "Top Cake", this.itemdescb = "Heals#team#160HP", this.itemtarget = 0x2, this.value = 0x96, this.usable = 0x1;
        break;
      }
    case 0x7:
      {
        this.itemnameb = 'Spincake', this.itemdescb = "Heals#team#80HP", this.itemtarget = 0x2, this.value = 0x5, this.usable = 0x1;
        break;
      }
    case 0x8:
      {
        this.itemnameb = 'Darkburger', this.itemdescb = "Heals#70HP", this.itemtarget = 0x1, this.value = 0x46, this.usable = 0x1;
        break;
      }
    case 0x9:
      {
        this.itemnameb = 'LancerCookie', this.itemdescb = "Heals#50HP", this.itemtarget = 0x1, this.value = 0xa, this.usable = 0x1;
        break;
      }
    case 0xa:
      {
        this.itemnameb = 'GigaSalad', this.itemdescb = "Heals#4HP", this.itemtarget = 0x1, this.value = 0xa, this.usable = 0x1;
        break;
      }
    case 0xb:
      {
        this.itemnameb = 'ClubsSandwich', this.itemdescb = "Heals#team#30HP", this.itemtarget = 0x2, this.value = 0x46, this.usable = 0x1;
        break;
      }
    case 0xc:
      {
        this.itemnameb = 'HeartsDonut', this.itemdescb = "Healing#varies", this.itemtarget = 0x1, this.value = 0x28, this.usable = 0x1;
        break;
      }
    case 0xd:
      {
        this.itemnameb = 'ChocDiamond', this.itemdescb = "Healing#varies", this.itemtarget = 0x1, this.value = 0x28, this.usable = 0x1;
        break;
      }
    case 0xe:
      {
        this.itemnameb = 'Favwich', this.itemdescb = "Heals#ALL HP", this.itemtarget = 0x1, this.value = 0xa, this.usable = 0x1;
        break;
      }
    case 0xf:
      {
        this.itemnameb = 'RouxlsRoux', this.itemdescb = "Heals#50 HP", this.itemtarget = 0x1, this.value = 0x32, this.usable = 0x1;
        break;
      }
  }
}
oH(mb, 'scr_iteminfo');
function mV(PV) {
  let PD = "[?]";
  if (Ix(Ig.is_console) || Ix(MO('obj_gamecontroller').gamepad_active)) {
    if (PD = Ig.input_g[PV], PD === this.gp_padr) return "\\*D  ";
    if (PD === this.gp_padl) return "\\*A  ";
    if (PD === Ig.button0) return "\\*Z  ";
    if (PD === Ig.button1) return "\\*X  ";
    if (PD === Ig.button2) return "\\*C  ";
  }
  let PY = (Ig.lang === 'en', '['),
    Pw = (Ig.lang === 'en', ']');
  if (PD = PY + Ig.asc_def[Ig.input_k[PV]] + Pw, !Ix(Mf(PD))) PD = "[?]";else return PD;
}
oH(mV, 'scr_get_input_name');
function mD(PV) {
  for (this.haveit = 0x0, this.itemcount = 0x0, this.i = 0x0; this.i < 0x8; this.i += 0x1) Ig.litem[this.i] === PV && (this.haveit = 0x1), Ig.litem[this.i] === PV && (this.itemcount += 0x1);
  return this.haveit;
}
oH(mD, 'scr_litemcheck');
function mY(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FL \\TL %", String(PD));
}
oH(mY, 'scr_lanface');
function mw(PV) {
  for (this.haveit = 0x0, this.itemcount = 0x0, this.i = 0x0; this.i < 0xc; this.i += 0x1) Ig.item[this.i] === PV && (this.haveit = 0x1), Ig.item[this.i] === PV && (this.itemcount += 0x1);
  return this.haveit;
}
oH(mw, 'scr_itemcheck');
function mp(PV) {
  this.removed = 0x0, jJ('scr_keyitemcheck').call(this, PV), this.haveit === 0x1 && (this.loc = 0x0, this.skip = 0x0, Ig.keyitem[0x0] === PV && this.skip === 0x0 && (this.loc = 0x0, this.skip = 0x1), Ig.keyitem[0x1] === PV && this.skip === 0x0 && (this.loc = 0x1, this.skip = 0x1), Ig.keyitem[0x2] === PV && this.skip === 0x0 && (this.loc = 0x2, this.skip = 0x1), Ig.keyitem[0x3] === PV && this.skip === 0x0 && (this.loc = 0x3, this.skip = 0x1), Ig.keyitem[0x4] === PV && this.skip === 0x0 && (this.loc = 0x4, this.skip = 0x1), Ig.keyitem[0x5] === PV && this.skip === 0x0 && (this.loc = 0x5, this.skip = 0x1), Ig.keyitem[0x6] === PV && this.skip === 0x0 && (this.loc = 0x6, this.skip = 0x1), Ig.keyitem[0x7] === PV && this.skip === 0x0 && (this.loc = 0x7, this.skip = 0x1), Ig.keyitem[0x8] === PV && this.skip === 0x0 && (this.loc = 0x8, this.skip = 0x1), Ig.keyitem[0x9] === PV && this.skip === 0x0 && (this.loc = 0x9, this.skip = 0x1), Ig.keyitem[0xa] === PV && this.skip === 0x0 && (this.loc = 0xa, this.skip = 0x1), Ig.keyitem[0xb] === PV && this.skip === 0x0 && (this.loc = 0xb, this.skip = 0x1), jJ('scr_keyitemshift').call(this, this.loc, 0x0), this.removed = 0x1);
}
oH(mp, 'scr_keyitemremove');
function mC(PV, PD) {
  for ((Ig.keyitem ??= [])[0xc] = PD, this.i = PV; this.i < 0xc; this.i += 0x1) (Ig.keyitem ??= [])[this.i] = Ig.keyitem[Math.trunc(this.i + 0x1)];
  jJ('scr_keyiteminfo_all').call(this);
}
oH(mC, 'scr_keyitemshift');
function mn(PV) {
  this.removed = 0x0, jJ('scr_itemcheck').call(this, PV), this.haveit === 0x1 && (this.loc = 0x0, this.skip = 0x0, Ig.item[0x0] === PV && this.skip === 0x0 && (this.loc = 0x0, this.skip = 0x1), Ig.item[0x1] === PV && this.skip === 0x0 && (this.loc = 0x1, this.skip = 0x1), Ig.item[0x2] === PV && this.skip === 0x0 && (this.loc = 0x2, this.skip = 0x1), Ig.item[0x3] === PV && this.skip === 0x0 && (this.loc = 0x3, this.skip = 0x1), Ig.item[0x4] === PV && this.skip === 0x0 && (this.loc = 0x4, this.skip = 0x1), Ig.item[0x5] === PV && this.skip === 0x0 && (this.loc = 0x5, this.skip = 0x1), Ig.item[0x6] === PV && this.skip === 0x0 && (this.loc = 0x6, this.skip = 0x1), Ig.item[0x7] === PV && this.skip === 0x0 && (this.loc = 0x7, this.skip = 0x1), Ig.item[0x8] === PV && this.skip === 0x0 && (this.loc = 0x8, this.skip = 0x1), Ig.item[0x9] === PV && this.skip === 0x0 && (this.loc = 0x9, this.skip = 0x1), Ig.item[0xa] === PV && this.skip === 0x0 && (this.loc = 0xa, this.skip = 0x1), Ig.item[0xb] === PV && this.skip === 0x0 && (this.loc = 0xb, this.skip = 0x1), jJ('scr_itemshift').call(this, this.loc, 0x0), this.removed = 0x1);
}
oH(mn, 'scr_itemremove');
function mO(PV, PD) {
  for ((Ig.item ??= [])[0xc] = PD, this.i = PV; this.i < 0xc; this.i += 0x1) (Ig.item ??= [])[this.i] = Ig.item[Math.trunc(this.i + 0x1)];
  jJ('scr_iteminfo_all').call(this), jJ('scr_itemname').call(this);
}
oH(mO, 'scr_itemshift');
function mc() {
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) this.itemid = Ig.item[this.i], jJ('scr_itemnamelist').call(this);
}
oH(mc, 'scr_itemname');
function mN() {
  switch (this.itemid) {
    case 0x0:
      {
        (Ig.itemname ??= [])[this.i] = '\x20';
        break;
      }
    case 0x1:
      {
        (Ig.itemname ??= [])[this.i] = "Dark Candy";
        break;
      }
    case 0x2:
      {
        (Ig.itemname ??= [])[this.i] = 'ReviveMint';
        break;
      }
    case 0x3:
      {
        (Ig.itemname ??= [])[this.i] = 'Glowshard';
        break;
      }
    case 0x4:
      {
        (Ig.itemname ??= [])[this.i] = 'Manual';
        break;
      }
    case 0x5:
      {
        (Ig.itemname ??= [])[this.i] = 'BrokenCake';
        break;
      }
    case 0x6:
      {
        (Ig.itemname ??= [])[this.i] = "Top Cake";
        break;
      }
    case 0x7:
      {
        (Ig.itemname ??= [])[this.i] = 'SpinCake';
        break;
      }
    case 0x8:
      {
        (Ig.itemname ??= [])[this.i] = 'Darkburger';
        break;
      }
    case 0x9:
      {
        (Ig.itemname ??= [])[this.i] = 'LancerCookie';
        break;
      }
    case 0xa:
      {
        (Ig.itemname ??= [])[this.i] = 'GigaSalad';
        break;
      }
    case 0xb:
      {
        (Ig.itemname ??= [])[this.i] = 'Clubswich';
        break;
      }
    case 0xc:
      {
        (Ig.itemname ??= [])[this.i] = 'HeartsDonut';
        break;
      }
    case 0xd:
      {
        (Ig.itemname ??= [])[this.i] = 'ChocDiamond';
        break;
      }
    case 0xe:
      {
        (Ig.itemname ??= [])[this.i] = 'FavSandwich';
        break;
      }
    case 0xf:
      {
        (Ig.itemname ??= [])[this.i] = 'RouxlsRoux';
        break;
      }
  }
}
oH(mN, 'scr_itemnamelist');
function mg(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\FT \\TT %", String(PD));
}
oH(mg, 'scr_torface');
function mB(PV) {
  this.i = 0x0, this.loop = 0x1, this.noroom = 0x0, (Ig.armor ??= [])[0xc] = 0x3e7;
  for (let PD = 0x0; this.loop === 0x1;) {
    if (++PD > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    if (Ig.armor[this.i] === 0x0) {
      (Ig.armor ??= [])[this.i] = PV;
      break;
    }
    if (this.i === 0xc) {
      this.noroom = 0x1;
      break;
    }
    this.i += 0x1;
  }
  Mz(this, jJ('scr_armorinfo_all'));
}
oH(mB, 'scr_armorget');
function mL() {
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) jJ('scr_armorinfo').call(this, Ig.armor[this.i]), (this.armorname ??= [])[this.i] = this.armornametemp, (this.armordesc ??= [])[this.i] = this.armordesctemp, (this.amessage2 ??= [])[this.i] = this.amessage2temp, (this.amessage3 ??= [])[this.i] = this.amessage3temp, (this.armorat ??= [])[this.i] = this.armorattemp, (this.armordf ??= [])[this.i] = this.armordftemp, (this.armormag ??= [])[this.i] = this.armormagtemp, (this.armorbolts ??= [])[this.i] = this.armorboltstemp, (this.armorgrazeamt ??= [])[this.i] = this.armorgrazeamttemp, (this.armorgrazesize ??= [])[this.i] = this.armorgrazesizetemp, (this.armorchar1 ??= [])[this.i] = this.armorchar1temp, (this.armorchar2 ??= [])[this.i] = this.armorchar2temp, (this.armorchar3 ??= [])[this.i] = this.armorchar3temp, (this.armorvalue ??= [])[this.i] = this.value, (this.armorability ??= [])[this.i] = this.armorabilitytemp, (this.armorabilityicon ??= [])[this.i] = this.armorabilityicontemp, (this.armoricon ??= [])[this.i] = this.armoricontemp;
}
oH(mL, 'scr_armorinfo_all');
function mU(PV) {
  switch (PV) {
    case 0x0:
      {
        this.armornametemp = '\x20', this.armordesctemp = '\x20', this.amessage2temp = "Hey, hands off!", this.amessage3temp = '\x20', this.armorattemp = 0x0, this.armordftemp = 0x0, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x0, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x0, this.value = 0x0;
        break;
      }
    case 0x1:
      {
        this.armornametemp = "Amber Card", this.armordesctemp = "A thin square charm that sticks#to you, increasing defense.", this.amessage2temp = "... better than nothing.", this.amessage3temp = "It's sticky, huh, Kris...", this.armorattemp = 0x0, this.armordftemp = 0x1, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x1, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x4, this.value = 0x64;
        break;
      }
    case 0x2:
      {
        this.armornametemp = "Dice Brace", this.armordesctemp = "A bracelet made out of various#symbol-inscribed cubes.", this.amessage2temp = "... okay.", this.amessage3temp = "It says \"Friendship!\"", this.armorattemp = 0x0, this.armordftemp = 0x2, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x1, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x4, this.value = 0x96;
        break;
      }
    case 0x3:
      {
        this.armornametemp = "Pink Ribbon", this.armordesctemp = "A cute hair ribbon that increases#the range bullets increase tension.", this.amessage2temp = "Nope. Not in 1st grade anymore.", this.amessage3temp = "Um... D-do I look cute...?", this.armorattemp = 0x0, this.armordftemp = 0x1, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x14, this.armorchar1temp = 0x1, this.armorchar2temp = 0x0, this.armorchar3temp = 0x1, this.armorabilitytemp = "TP Range", this.armorabilityicontemp = 0x7, this.armoricontemp = 0x4, this.value = 0x64;
        break;
      }
    case 0x4:
      {
        this.armornametemp = "White Ribbon", this.armordesctemp = "A crinkly hair ribbon that slightly#increases your defense.", this.amessage2temp = "Nope. Not in 1st grade anymore.", this.amessage3temp = "Um... D-do I look cute...?", Ix(IJ(jF.obj_hathyfightevent)) && (this.amessage3temp = '\x20'), this.armorattemp = 0x0, this.armordftemp = 0x2, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x0, this.armorchar3temp = 0x1, this.armorabilitytemp = 'Cuteness', this.armorabilityicontemp = 0x7, this.armoricontemp = 0x4, this.value = 0x5a;
        break;
      }
    case 0x5:
      {
        this.armornametemp = 'IronShackle', this.armordesctemp = "Shackle that ironically increases#your attack and defense.", this.amessage2temp = "(Damn, it's actually cool...)", this.amessage3temp = "*jingle jangle* Haha!", this.armorattemp = 0x1, this.armordftemp = 0x2, this.armormagtemp = 0x0, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x1, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x4, this.value = 0x96;
        break;
      }
    case 0x6:
      {
        this.armornametemp = 'MouseToken', this.armordesctemp = "A golden coin with a once-powerful mousewizard engraved on it.", this.amessage2temp = "This guy's... familiar?", this.amessage3temp = "Chu! Healing power UP!", this.armorattemp = 0x0, this.armordftemp = 0x0, this.armormagtemp = 0x2, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x1, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x4, this.value = 0x78;
        break;
      }
    case 0x7:
      {
        this.armornametemp = 'Jevilstail', this.armordesctemp = "A J-shaped tail that gives you devilenergy.", this.amessage2temp = "Figured I'd grow one someday.", this.amessage3temp = "I'm a good devil, OK?", this.armorattemp = 0x2, this.armordftemp = 0x2, this.armormagtemp = 0x2, this.armorboltstemp = 0x0, this.armorgrazeamttemp = 0x0, this.armorgrazesizetemp = 0x0, this.armorchar1temp = 0x1, this.armorchar2temp = 0x1, this.armorchar3temp = 0x1, this.armorabilitytemp = '\x20', this.armorabilityicontemp = 0x0, this.armoricontemp = 0x4, this.value = 0x0;
        break;
      }
  }
}
oH(mU, 'scr_armorinfo');
function mf() {
  let PV = 0x0;
  if (Ix(Mx('chemg_god_mode')) && (PV = Ig.chemg_god_mode), Ig.inv < 0x0 && PV === 0x0) {
    if (jJ('scr_damage_cache').call(this), this.target < 0x3 && Ig.hp[Ig.char[this.target]] <= 0x0 && (jJ('scr_randomtarget').call(this), this.target = this.mytarget, jT(Ig.charinstance[this.target], PD => {
      PD.image_blend = o4.white, PD.darkify = 0x0;
    })), this.chartarget = 0x3, this.tdamage = this.damage, this.target < 0x3 && (this.tdamage = oZ(this.tdamage - Ig.battledf[this.target] * 0x3), this.chartarget = Ig.char[this.target], Ig.charaction[this.target] === 0xa && (this.tdamage = oZ(0x2 * this.tdamage / 0x3)), this.tdamage < 0x1 && (this.tdamage = 0x1)), Ix(IJ(jF.obj_shake)) || jJ('instance_create').call(this, 0x0, 0x0, jF.obj_shake), jT(Ig.charinstance[this.target], PD => {
      PD.hurt = 0x1, PD.hurttimer = 0x0;
    }), this.hpdiff = this.tdamage, oW.with('obj_dmgwriter', PD => {
      PD.delaytimer >= 0x1 && (PD.killactive = 0x1);
    }), this.doomtype = -0x1, oW.with('obj_heart', PD => {
      PD.dmgnoise = 0x1;
    }), this.target < 0x3 && (Ig.hp[this.chartarget] <= 0x0 ? (this.doomtype = 0x4, (Ig.hp ??= [])[this.chartarget] -= ok(this.tdamage / 0x4), this.hpdiff = ok(this.tdamage / 0x4)) : ((Ig.hp ??= [])[this.chartarget] -= this.tdamage, Ig.hp[this.chartarget] <= 0x0 && (this.hpdiff = IL(Ig.hp[this.chartarget] - Ig.maxhp[this.chartarget] / 0x2), this.doomtype = 0x4, (Ig.hp ??= [])[this.chartarget] = ok(-Ig.maxhp[this.chartarget] / 0x2), jJ('scr_dead').call(this, this.target))), this.dmgwriter = jJ('instance_create').call(this, Ig.charinstance[this.target].x, Ig.charinstance[this.target].y + Ig.charinstance[this.target].myheight - 0x18, jF.obj_dmgwriter), this.dmgwriter.damage = this.hpdiff, this.dmgwriter.type = this.doomtype), this.target === 0x3) {
      for (this.hpi = 0x0; this.hpi < 0x3; this.hpi += 0x1) this.chartarget = Ig.char[this.hpi], Ig.hp[this.chartarget] >= 0x0 && (Ig.charaction[this.hpi] === 0xa ? (Ig.hp ??= [])[this.chartarget] -= oZ(this.tdamage / 0x2) : (Ig.hp ??= [])[this.chartarget] -= this.tdamage, Ig.hp[this.chartarget] <= 0x0 && ((Ig.hp ??= [])[this.chartarget] = ok(-Ig.maxhp[0x0] / 0x2)));
    }
    Ig.inv = Ig.invc * 0x28, jJ('scr_damage_check').call(this), this.gameover = 0x1, Ig.char[0x0] !== 0x0 && Ig.hp[Ig.char[0x0]] > 0x0 && (this.gameover = 0x0), Ig.char[0x1] !== 0x0 && Ig.hp[Ig.char[0x1]] > 0x0 && (this.gameover = 0x0), Ig.char[0x2] !== 0x0 && Ig.hp[Ig.char[0x2]] > 0x0 && (this.gameover = 0x0), this.gameover === 0x1 && jJ('scr_gameover').call(this);
  }
}
oH(mf, 'scr_damage');
function mx() {
  if (this.abletotarget = 0x1, Ig.charcantarget[0x0] === 0x0 && Ig.charcantarget[0x1] === 0x0 && Ig.charcantarget[0x2] === 0x0 && (this.abletotarget = 0x0), this.mytarget = oI(0x0, 0x1, 0x2), this.abletotarget === 0x1) for (let PV = 0x0; Ig.charcantarget[this.mytarget] === 0x0;) {
    if (++PV > 0x4c4b40) throw new Error("GML loop ran 5000000 times without ending");
    this.mytarget = oI(0x0, 0x1, 0x2);
  } else this.mytarget = 0x3;
  (Ig.targeted ??= [])[this.mytarget] = 0x1;
}
oH(mx, 'scr_randomtarget');
function mF(PV) {
  (Ig.charmove ??= [])[PV] = 0x0, (Ig.charcantarget ??= [])[PV] = 0x0, (Ig.chardead ??= [])[PV] = 0x1, (Ig.charaction ??= [])[PV] = 0x0, (Ig.charspecial ??= [])[PV] = 0x0;
}
oH(mF, 'scr_dead');
function mJ() {
  oW.with('obj_battlecontroller', PV => {
    PV.techwon = 0x0, jJ('scr_monsterpop').call(PV) === 0x0 && (PV.techwon = 0x1), PV.techwon === 0x0 ? (PV.fightphase = 0x1, Ig.charturn = M7(), (Ig.charaction[0x0] === 0x4 || Ig.charaction[0x0] === 0x2) && (PV.fightphase = 0x0), (Ig.charaction[0x1] === 0x4 || Ig.charaction[0x1] === 0x2) && (PV.fightphase = 0x0), (Ig.charaction[0x2] === 0x4 || Ig.charaction[0x2] === 0x2) && (PV.fightphase = 0x0), Ig.myfight === 0x4 && (PV.fightphase = 0x1), PV.fightphase === 0x1 ? (Ig.myfight = 0x1, jJ('instance_create').call(PV, PV.xx + 0x2, PV.yy + 0x16d, jF.obj_attackpress)) : (Ig.myfight = 0x4, jJ('instance_create').call(PV, 0x0, 0x0, jF.obj_spellphase))) : jJ('scr_wincombat').call(PV);
  });
}
oH(mJ, 'scr_attackphase');
function mQ() {
  for (Ig.myfight = 0x7, Ig.mnfight = -0x1, oW.with('obj_battlecontroller', PV => {
    PV.victory = 0x1;
  }), this.i = 0x0; this.i < 0x3; this.i += 0x1) Ig.monster[this.i] === 0x1 && Ix(IJ(Ig.monsterinstance[this.i])) && jT(Ig.monsterinstance[this.i], PV => {
    jJ('scr_monsterdefeat').call(PV);
  });
}
oH(mQ, 'scr_wincombat');
function ml() {
  if (Ig.inv < 0x0) {
    for (jJ('scr_damage_cache').call(this), this.remdamage = this.damage, this._temptarget = this.target, this.ti = 0x0; this.ti < 0x3; this.ti += 0x1) Ig.inv = -0x1, this.damage = this.remdamage, this.target = this.ti, Ig.hp[Ig.char[this.ti]] > 0x0 && Ig.char[this.ti] !== 0x0 && jJ('scr_damage').call(this);
    Ig.inv = Ig.invc * 0x28, this.target = this._temptarget, jJ('scr_damage_check').call(this);
  }
}
oH(ml, 'scr_damage_all');
function mT() {
  this.myface = jJ('instance_create').call(this, this.writer.x + 0x8 * this.f, this.writer.y + 0x5 * this.f, jF.obj_face);
}
oH(mT, 'scr_facechoice');
function P0() {
  this.depth = 0x186a0 - (this.y * 0xa + this.sprite_height * 0xa);
}
oH(P0, 'scr_depth');
function P1() {
  return this.afterimage = jJ('instance_create').call(this, this.x, this.y, jF.obj_afterimage), this.afterimage.sprite_index = this.sprite_index, this.afterimage.image_index = this.image_index, this.afterimage.image_blend = this.image_blend, this.afterimage.image_speed = 0x0, this.afterimage.depth = this.depth, this.afterimage.image_xscale = this.image_xscale, this.afterimage.image_yscale = this.image_yscale, this.afterimage.image_angle = this.image_angle, this.afterimage;
}
oH(P1, 'scr_afterimage');
function P2(PV) {
  Ix(IJ(PV)) && (PV.damage = this.damage, PV.grazepoints = this.grazepoints, PV.timepoints = this.timepoints, PV.inv = this.inv, PV.target = this.target, PV.grazed = 0x0, PV.grazetimer = 0x0);
}
oH(P2, 'scr_bullet_inherit');
function P3() {
  this.defeatanim = jJ('instance_create').call(this, this.x, this.y, jF.obj_defeatanim), this.defeatanim.sprite_index = this.sprite_index, this.defeatanim.sprite_index = this.hurtsprite, this.defeatanim.image_index = 0x0, this.defeatanim.image_xscale = this.image_xscale, this.defeatanim.image_yscale = this.image_yscale, this.instance_destroy();
}
oH(P3, 'scr_defeatrun');
function P4() {
  for (this._ti = 0x0; this._ti < 0x3; this._ti += 0x1) Ig.charcantarget[this._ti] === 0x1 && ((Ig.targeted ??= [])[this._ti] = 0x1);
  this.mytarget = 0x3, this.target = 0x3;
}
oH(P4, 'scr_targetall');
function P5(PV, PD, PY) {
  if (PY === 0x0) return this.mywriter = jJ('instance_create').call(this, PV, PD, jF.obj_writer), this.mywriter;
  if (PY === 0x1) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon;
  if (PY === 0x2) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_v', this.myblcon;
  if (PY === 0x3) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_long', this.myblcon;
  if (PY === 0x4) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_clubs', this.myblcon.image_index = 0x0, this.myblcon.image_speed = 0x0, this.myblcon;
  if (PY === 0x5) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_clubs', this.myblcon.image_index = 0x1, this.myblcon.image_speed = 0x0, this.myblcon;
  if (PY === 0x6) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_clubs', this.myblcon.image_index = 0x2, this.myblcon.image_speed = 0x0, this.myblcon;
  if (PY === 0x7) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_long_r', this.myblcon.image_index = 0x2, this.myblcon.image_speed = 0x0, this.myblcon;
  if (PY === 0x8) return this.myblcon = jJ('instance_create').call(this, PV, PD, jF.obj_battleblcon), this.myblcon.sprite_index = 'spr_battleblcon_long_tall', this.myblcon;
}
oH(P5, 'scr_enemyblcon');
function P6(PV) {
  return this._offcamera = 0x0, this.rightx = this.x + this.sprite_width, this.leftx = this.x, this.bottomy = this.y + this.sprite_height, this.topy = this.y, this.x > 0x280 + PV && (this._offcamera = 0x1), this.rightx < 0x0 - PV && (this._offcamera = 0x1), this.y > 0x1e0 + PV && (this._offcamera = 0x1), this.bottomy < 0x0 - PV && (this._offcamera = 0x1), this._offcamera;
}
oH(P6, 'scr_outside_camera');
function P7(PV, PD) {
  (Ig.mercymod ??= [])[PV] += PD, Ig.mercymod[PV] < 0x0 && ((Ig.mercymod ??= [])[PV] = 0x0);
}
oH(P7, 'scr_mercyadd');
function P8(PV, PD, PY) {
  this._mmm = jJ('instance_create').call(this, this.x, this.y, jF.obj_move_to_point), this._mmm.target = this, this._mmm.movex = PV, this._mmm.movey = PD, this._mmm.movemax = PY;
}
oH(P8, 'scr_move_to_point_over_time');
function P9() {
  this.image_index = 0x0, this.image_speed = 0x0, this.speed = 0x0;
}
oH(P9, 'scr_halt');
function PM(PV) {
  (Ig.charmove ??= [])[PV] = 0x1, (Ig.charcantarget ??= [])[PV] = 0x1, (Ig.chardead ??= [])[PV] = 0x0;
}
oH(PM, 'scr_revive');
function PI(PV) {
  for (this.xx = 0x0, this.yy = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.heromakex ??= [])[this.i] = this.xx + 0x50, (Ig.heromakey ??= [])[this.i] = this.yy + 0x32 + 0x50 * this.i, (Ig.monsterinstancetype ??= [])[this.i] = oE(jF.obj_lancerboss), (Ig.monstertype ??= [])[this.i] = 0x1, (Ig.monstermakex ??= [])[this.i] = this.xx + 0x21c, (Ig.monstermakey ??= [])[this.i] = this.yy + 0xa0 + 0x50 * this.i;
  switch (Ig.char[0x0] !== 0x0 && Ig.char[0x1] === 0x0 && Ig.char[0x2] === 0x0 && ((Ig.heromakey ??= [])[0x0] = this.yy + 0x8c), Ig.char[0x0] !== 0x0 && Ig.char[0x1] !== 0x0 && Ig.char[0x2] === 0x0 && ((Ig.heromakey ??= [])[0x0] = this.yy + 0x64, (Ig.heromakey ??= [])[0x1] = this.yy + 0xb4), PV) {
    case 0x0:
      break;
    case 0x1:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_placeholderenemy), (Ig.monstertype ??= [])[0x0] = 0x1, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_placeholderenemy), (Ig.monstertype ??= [])[0x1] = 0x1, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0;
        break;
      }
    case 0x2:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_lancerboss), (Ig.monstertype ??= [])[0x0] = 0x2, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x21c, (Ig.monstermakey ??= [])[0x0] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0;
        break;
      }
    case 0x3:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_dummyenemy), (Ig.monstertype ??= [])[0x0] = 0x3, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x0] = this.yy + 0xa0, Ix(IJ(jF.obj_npc_room)) && ((Ig.monstermakex ??= [])[0x0] = MO('obj_npc_room').xstart, (Ig.monstermakey ??= [])[0x0] = MO('obj_npc_room').ystart), (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0;
        break;
      }
    case 0x4:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x0] = 0x5, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x8c, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rudinn drew near!", Ig.flag[0x1f4] >= 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* A different Rudinn from last time drew near!"), Ig.flag[0x1f4] === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Assumedly another different Rudinn appeared!");
        break;
      }
    case 0x5:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x0] = 0x5, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x1] = 0x5, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 0x6:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x0] = 0x5, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x1] = 0x6, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 0x7:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_smallcheckers_enemy), (Ig.monstertype ??= [])[0x0] = 0x9, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1b8, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x96, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 0x8:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_clubsenemy), (Ig.monstertype ??= [])[0x0] = 0x10, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x190, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x78, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Clover grew close!";
        break;
      }
    case 0x9:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x0] = 0x6, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x1] = 0x6, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x2] = 0x6, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Three Hathys blocked the way!";
        break;
      }
    case 0xc:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_checkers_enemy), (Ig.monstertype ??= [])[0x0] = 0xa, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x78, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Here it comes!";
        break;
      }
    case 0xd:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_ponman_enemy), (Ig.monstertype ??= [])[0x0] = 0xb, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_ponman_enemy), (Ig.monstertype ??= [])[0x1] = 0xb, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.battlemsg ??= [])[0x0] = "* Ponman drew near!", (Ig.monstertype ??= [])[0x2] = 0x0;
        break;
      }
    case 0xe:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_ponman_enemy), (Ig.monstertype ??= [])[0x0] = 0xb, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_ponman_enemy), (Ig.monstertype ??= [])[0x1] = 0xb, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_ponman_enemy), (Ig.monstertype ??= [])[0x2] = 0xb, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Ponman drew near!";
        break;
      }
    case 0xf:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_clubsenemy), (Ig.monstertype ??= [])[0x0] = 0x7, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x190, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x1e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x1] = 0x6, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1a4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Clover and Hathy grew close!";
        break;
      }
    case 0x10:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x0] = 0xd, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x8c, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rabbick slithered in the way!";
        break;
      }
    case 0x11:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x0] = 0xd, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x3c, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x1] = 0xd, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xb4, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 0x12:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_bloxer_enemy), (Ig.monstertype ??= [])[0x0] = 0xe, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x8c, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Bloxer assembled!";
        break;
      }
    case 0x13:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_bloxer_enemy), (Ig.monstertype ??= [])[0x0] = 0xe, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x3c, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_bloxer_enemy), (Ig.monstertype ??= [])[0x1] = 0xe, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xb4, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Bloxers assembled!";
        break;
      }
    case 0x14:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_lancerboss2), (Ig.monstertype ??= [])[0x0] = 0xc, (Ig.heromakex ??= [])[0x0] = this.xx + 0x78, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0xa0, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Lancer blocked the way!";
        break;
      }
    case 0x15:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_jigsawryenemy), (Ig.monstertype ??= [])[0x0] = 0xf, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x8c, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Jigsawry drew near!", Ig.flag[0x1f4] >= 0x1 && ((Ig.battlemsg ??= [])[0x0] = "* A different Jigsawry from last time drew near!"), Ig.flag[0x1f4] === 0x2 && ((Ig.battlemsg ??= [])[0x0] = "* Assumedly another different Jigsawry appeared!");
        break;
      }
    case 0x16:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_jigsawryenemy), (Ig.monstertype ??= [])[0x0] = 0xf, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_jigsawryenemy), (Ig.monstertype ??= [])[0x1] = 0xf, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_jigsawryenemy), (Ig.monstertype ??= [])[0x2] = 0xf, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 0x17:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_jigsawryenemy), (Ig.monstertype ??= [])[0x0] = 0xf, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x1] = 0x5, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x2] = 0x6, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Smorgasboard.";
        break;
      }
    case 0x18:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x0] = 0xd, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x3c, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x1] = 0x5, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xb4, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rabbick slithered in the way!";
        break;
      }
    case 0x19:
      {
        (Ig.heromakex ??= [])[0x0] = this.xx + 0x50, (Ig.heromakey ??= [])[0x0] = this.yy + 0x64, (Ig.heromakex ??= [])[0x1] = this.xx + 0x5a, (Ig.heromakey ??= [])[0x1] = this.yy + 0x96, (Ig.heromakex ??= [])[0x2] = this.xx + 0x64, (Ig.heromakey ??= [])[0x2] = this.yy + 0xd2, (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_joker), (Ig.monstertype ??= [])[0x0] = 0x14, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x0] = this.yy + 0xa0, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 0x1b:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_checkers_enemy), (Ig.monstertype ??= [])[0x0] = 0x15, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x78, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Here it comes^1. Again.", (Ig.heromakey ??= [])[0x0] = this.yy + 0x41;
        break;
      }
    case 0x1c:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_rudinnranger), (Ig.monstertype ??= [])[0x0] = 0x16, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_rudinnranger), (Ig.monstertype ??= [])[0x1] = 0x16, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 0x1d:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_headhathy), (Ig.monstertype ??= [])[0x0] = 0x17, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x6e, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_headhathy), (Ig.monstertype ??= [])[0x1] = 0x17, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xc8, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 0x1e:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_headhathy), (Ig.monstertype ??= [])[0x0] = 0x17, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_headhathy), (Ig.monstertype ??= [])[0x1] = 0x17, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_headhathy), (Ig.monstertype ??= [])[0x2] = 0x17, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 0x1f:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_susieenemy), (Ig.monstertype ??= [])[0x0] = 0x13, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x208, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x50, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_lancerboss3), (Ig.monstertype ??= [])[0x1] = 0x12, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x21c, (Ig.monstermakey ??= [])[0x1] = this.yy + 0xf0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* Two bad guys blocked the way!";
        break;
      }
    case 0x20:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x0] = 0xd, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x1] = 0xd, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_rabbick_enemy), (Ig.monstertype ??= [])[0x2] = 0xd, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 0x21:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x0] = 0x5, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1e0, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x14, (Ig.monsterinstancetype ??= [])[0x1] = oE(jF.obj_heartenemy), (Ig.monstertype ??= [])[0x1] = 0x6, (Ig.monstermakex ??= [])[0x1] = this.xx + 0x1f4, (Ig.monstermakey ??= [])[0x1] = this.yy + 0x78, (Ig.monsterinstancetype ??= [])[0x2] = oE(jF.obj_diamondenemy), (Ig.monstertype ??= [])[0x2] = 0x5, (Ig.monstermakex ??= [])[0x2] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x2] = this.yy + 0xdc, (Ig.battlemsg ??= [])[0x0] = "* Various guys appeared!";
        break;
      }
    case 0x28:
      {
        (Ig.monsterinstancetype ??= [])[0x0] = oE(jF.obj_king_boss), (Ig.monstertype ??= [])[0x0] = 0x19, (Ig.monstermakex ??= [])[0x0] = this.xx + 0x1cc, (Ig.monstermakey ??= [])[0x0] = this.yy + 0x46, (Ig.monstertype ??= [])[0x1] = 0x0, (Ig.monstertype ??= [])[0x2] = 0x0, (Ig.battlemsg ??= [])[0x0] = "* King blocked the way!";
        break;
      }
  }
}
oH(PI, 'scr_encountersetup');
function Po(PV, PD, PY) {
  this.panner = jJ('instance_create').call(this, 0x0, 0x0, jF.obj_panner), this.panner.panmax = PY, this.panner.panx = PV, this.panner.pany = PD;
}
oH(Po, 'scr_pan');
function Py(PV) {
  PV !== -0x1 && (Ix(jJ('button1_p').call(this)) && this.talktimer > PV && (this.talktimer = this.talkmax), this.talktimer += 0x1, this.talktimer >= this.talkmax && (oW.with('obj_writer', PD => {
    PD.instance_destroy();
  }), Ig.mnfight = 0x2)), PV === -0x1 && IJ(jF.obj_writer) === 0x0 && (Ig.mnfight = 0x2);
}
oH(Py, 'scr_blconskip');
function PE() {
  if (this.xxx = 0x0, this.yyy = 0x0, Ig.darkzone === 0x0) {
    let PV = this.side * 0x9b;
    o3.draw_sprite_ext('spr_pxwhite', 0x0, this.xxx + 0x10, this.yyy + 0x5 + PV, 0x121, 0x4c, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_pxwhite', 0x0, this.xxx + 0x13, this.yyy + 0x8 + PV, 0x11b, 0x46, 0x0, o4.black, 0x1);
  }
  Ig.darkzone === 0x1 && (this.side === 0x0 ? (o3.draw_set_color(o4.black), o3.draw_rectangle(this.xxx + 0x26, this.yyy + 0x10, this.xxx + 0x25a, this.yyy + 0x9a, 0x0), jJ('scr_darkbox').call(this, this.xxx + 0x20 - 0x8, this.yyy + 0xa - 0x8, this.xxx + 0x260 + 0x8, this.yyy + 0xa0 + 0x8)) : (o3.draw_set_color(o4.black), o3.draw_rectangle(this.xxx + 0x26, this.yyy + 0x146, this.xxx + 0x25a, this.yyy + 0x1d0, 0x0), jJ('scr_darkbox').call(this, this.xxx + 0x20 - 0x8, this.yyy + 0x140 - 0x8, this.xxx + 0x260 + 0x8, this.yyy + 0x1d6 + 0x8)));
}
oH(PE, 'scr_dbox');
function Pj(PV, PD, PY, Pw) {
  this.cur_jewel += 0x1, this.textbox_width = PY - PV - 0x3f, this.textbox_width < 0x0 && (this.textbox_width = 0x0), this.textbox_height = Pw - PD - 0x3f, this.textbox_height < 0x0 && (this.textbox_height = 0x0), this.textbox_width > 0x0 && (o3.draw_sprite_stretched('spr_textbox_top', 0x0, PV + 0x20, PD, this.textbox_width, 0x20), o3.draw_sprite_ext('spr_textbox_top', 0x0, PV + 0x20, Pw + 0x1, this.textbox_width, -0x2, 0x0, o4.white, 0x1)), this.textbox_height > 0x0 && (o3.draw_sprite_ext('spr_textbox_left', 0x0, PY + 0x1, PD + 0x20, -0x2, this.textbox_height, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_left', 0x0, PV, PD + 0x20, 0x2, this.textbox_height, 0x0, o4.white, 0x1)), Ig.flag[0x8] === 0x0 ? (o3.draw_sprite_ext('spr_textbox_topleft', this.cur_jewel / 0xa, PV, PD, 0x2, 0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', this.cur_jewel / 0xa, PY + 0x1, PD, -0x2, 0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', this.cur_jewel / 0xa, PV, Pw + 0x1, 0x2, -0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', this.cur_jewel / 0xa, PY + 0x1, Pw + 0x1, -0x2, -0x2, 0x0, o4.white, 0x1)) : (o3.draw_sprite_ext('spr_textbox_topleft', 0x0, PV, PD, 0x2, 0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', 0x0, PY + 0x1, PD, -0x2, 0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', 0x0, PV, Pw + 0x1, 0x2, -0x2, 0x0, o4.white, 0x1), o3.draw_sprite_ext('spr_textbox_topleft', 0x0, PY + 0x1, Pw + 0x1, -0x2, -0x2, 0x0, o4.white, 0x1));
}
oH(Pj, 'scr_darkbox');
function Pm(PV) {
  jJ('scr_heal').call(this, this.star, PV), jT(Ig.charinstance[this.star], PD => {
    PD.ha = jJ('instance_create').call(PD, PD.x, PD.y, jF.obj_healanim), PD.ha.target = PD, PD.dmgwr = jJ('scr_dmgwriter_selfchar').call(PD), jT(PD.dmgwr, PY => {
      PY.delay = 0x8, PY.type = 0x3, PY.damage = PV;
    }), Ig.hp[Ig.char[PD.myself]] >= Ig.maxhp[Ig.char[PD.myself]] && jT(PD.dmgwr, PY => {
      PY.specialmessage = 0x3;
    }), PD.tu += 0x1;
  }), Ig.spelldelay = 0xf;
}
oH(Pm, 'scr_healitemspell');
function PP() {
  return jJ('instance_create').call(this, this.x, this.y + this.myheight - 0x18 - this.tu * 0x14, jF.obj_dmgwriter);
}
oH(PP, 'scr_dmgwriter_selfchar');
function PX(PV, PD) {
  return this.abovemaxhp = 0x0, this.belowzero = 0x0, this.hltarget = Ig.char[PV], this._curhp = Ig.hp[this.hltarget], Ig.hp[this.hltarget] <= 0x0 && (this.belowzero = 0x1), Ig.hp[this.hltarget] > Ig.maxhp[this.hltarget] && (this.abovemaxhp = 0x1), this.abovemaxhp === 0x0 && ((Ig.hp ??= [])[this.hltarget] += PD, Ig.hp[this.hltarget] > Ig.maxhp[this.hltarget] && ((Ig.hp ??= [])[this.hltarget] = Ig.maxhp[this.hltarget])), this.belowzero === 0x1 && Ig.hp[this.hltarget] >= 0x0 && (Ig.hp[this.hltarget] < oZ(Ig.maxhp[this.hltarget] / 0x6) && ((Ig.hp ??= [])[this.hltarget] = oZ(Ig.maxhp[this.hltarget] / 0x6)), jJ('scr_revive').call(this, PV)), jJ('snd_stop').call(this, 'snd_power'), jJ('snd_play').call(this, 'snd_power'), Ig.hp[this.hltarget] - this._curhp;
}
oH(PX, 'scr_heal');
function PK() {
  if (Ig.char[0x0] === 0x2 && (this.sus = 0x0), Ig.char[0x1] === 0x2 && (this.sus = 0x1), Ig.char[0x2] === 0x2 && (this.sus = 0x2), this.techwon = 0x0, jJ('scr_monsterpop').call(this) === 0x0 && (this.techwon = 0x1), this.techwon === 0x0) {
    for (jJ('scr_battlecursor_memory_reset').call(this), Ig.mnfight = 0x0, Ig.myfight = 0x0, Ig.bmenuno = 0x0, Ig.charturn = 0x0, this.skip = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) jT(Ig.charinstance[this.i], PV => {
      PV.tu = 0x0;
    }), this.hptarget = Ig.char[this.i], Ig.char[this.i] !== 0x0 && Ig.hp[this.hptarget] <= 0x0 && (this.healamt = oZ(Ig.maxhp[this.hptarget] / 0x8), this.dmgwr = jJ('instance_create').call(this, Ig.charinstance[this.i].x, Ig.charinstance[this.i].y + Ig.charinstance[this.i].myheight - 0x18, jF.obj_dmgwriter), jT(this.dmgwr, PV => {
      PV.delay = 0x1, PV.type = 0x3;
    }), this.dmgwr.damage = jJ('scr_heal').call(this, this.i, this.healamt), Ig.hp[this.hptarget] >= 0x1 && jT(this.dmgwr, PV => {
      PV.specialmessage = 0x4;
    }));
    for ((Ig.charmove[0x0] === 0x0 || Ig.charauto[Ig.char[0x0]] === 0x1) && (Ig.charturn = 0x1), Ig.charturn === 0x1 && (Ig.charmove[0x1] === 0x0 || Ig.charauto[Ig.char[0x1]] === 0x1) && (Ig.charturn = 0x2), Ig.charturn === 0x2 && (Ig.charmove[0x2] === 0x0 || Ig.charauto[Ig.char[0x2]] === 0x1) && (this.skip = 0x1), this.i = 0x0; this.i < 0x3; this.i += 0x1) (Ig.acting ??= [])[this.i] = 0x0, (Ig.temptension ??= [])[this.i] = Ig.tension, (Ig.charspecial ??= [])[this.i] = 0x0, (Ig.targeted ??= [])[this.i] = 0x0, (Ig.charaction ??= [])[this.i] = 0x0, (Ig.faceaction ??= [])[this.i] = 0x0;
    for (oW.with('obj_monsterparent', PV => {
      PV.attacked = 0x0, PV.talked = 0x0, PV.acting = 0x0;
    }), this.skip === 0x1 && (Ig.char[0x0] === 0x2 && Ig.charauto[0x2] === 0x1 && ((Ig.acting ??= [])[0x0] = 0x1, Ig.myfight = 0x3), jJ('scr_endturn').call(this)), this.i = 0x0; this.i < 0xc; this.i += 0x1) for (this.j = 0x0; this.j < 0x3; this.j += 0x1) ((this.tempitem ??= [])[this.i] ??= [])[this.j] = Ig.item[this.i];
  } else jJ('scr_wincombat').call(this);
}
oH(PK, 'scr_mnendturn');
function Pk() {
  if (Ig.flag[0xe] === 0x0) {
    for (this.i = 0x0; this.i < 0x14; this.i += 0x1) for (this.j = 0x0; this.j < 0x14; this.j += 0x1) ((Ig.bmenucoord ??= [])[this.i] ??= [])[this.j] = 0x0;
  }
}
oH(Pk, 'scr_battlecursor_memory_reset');
function PW() {
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) (Ig.item ??= [])[this.i] = this.tempitem[this.i][Ig.charturn];
  for (this.i = 0x0; this.i < 0xc; this.i += 0x1) for (this.j = 0x0; this.j < 0x3; this.j += 0x1) ((this.tempitem ??= [])[this.i] ??= [])[this.j] = Ig.item[this.i];
  for (this.moveswapped = 0x0, oW.with('obj_writer', PV => {
    PV.instance_destroy();
  }), oW.with('obj_face', PV => {
    PV.instance_destroy();
  }), oW.with('obj_smallface', PV => {
    PV.instance_destroy();
  }), Ig.attacking = 0x0, this.i = 0x0; this.i < 0x3; this.i += 0x1) Ig.charauto[Ig.char[this.i]] === 0x1 && Ig.hp[Ig.char[this.i]] > 0x0 && (Ig.monster[0x2] === 0x1 && ((Ig.chartarget ??= [])[this.i] = 0x2), Ig.monster[0x1] === 0x1 && ((Ig.chartarget ??= [])[this.i] = 0x1), Ig.monster[0x0] === 0x1 && ((Ig.chartarget ??= [])[this.i] = 0x0)), Ig.charaction[this.i] === 0x1 && (Ig.attacking = 0x1);
  Ig.acting[0x0] === 0x0 ? jJ('scr_attackphase').call(this) : (Ig.charturn = M7(), Ig.myfight = 0x3);
}
oH(PW, 'scr_endturn');
function PZ(PV, PD) {
  (Ig.msg ??= [])[PV] = jJ('scr_84_get_subst_string').call(this, "\\TX \\F0 \\E~1 \\Fr \\Tr %", String(PD));
}
oH(PZ, 'scr_rudface');
function Pq(PV, PD, PY) {
  return this.thismarker = jJ('instance_create').call(this, PV, PD, jF.obj_marker), jT(this.thismarker, Pw => {
    Pw.sprite_index = PY, Pw.image_speed = 0x0;
  }), this.thismarker;
}
oH(Pq, 'scr_marker');
function Pu() {
  oW.with('obj_writer', PV => {
    PV.instance_destroy();
  }), oW.with('obj_face', PV => {
    PV.instance_destroy();
  }), Ig.charturn = M7(), Ig.mnfight = 0x1, Ig.myfight = -0x1;
}
oH(Pu, 'scr_ambush');
function PH(PV) {
  for (jJ('scr_healall').call(this, PV), this.i = 0x0; this.i < 0x3; this.i += 0x1) jT(Ig.charinstance[this.i], PD => {
    PD.ha = jJ('instance_create').call(PD, PD.x, PD.y, jF.obj_healanim), PD.ha.target = PD, PD.dmgwr = jJ('scr_dmgwriter_selfchar').call(PD), jT(PD.dmgwr, PY => {
      PY.delay = 0x8, PY.type = 0x3, PY.damage = PV;
    }), Ig.hp[Ig.char[PD.myself]] >= Ig.maxhp[Ig.char[PD.myself]] && jT(PD.dmgwr, PY => {
      PY.specialmessage = 0x3;
    }), PD.tu += 0x1;
  });
  Ig.spelldelay = 0x14;
}
oH(PH, 'scr_healallitemspell');
function PG(PV) {
  for (this.i = 0x0; this.i < 0x3; this.i += 0x1) Ig.char[this.i] !== 0x0 && jJ('scr_heal').call(this, this.i, PV);
}
oH(PG, 'scr_healall');
function PA() {
  return jJ('instance_create').call(this, MO('obj_herokris').x + 0xa, MO('obj_herokris').y + 0x28, jF.obj_moveheart);
}
oH(PA, 'scr_moveheart');
function Pd() {
  for ((Ig.char ??= [])[0x2] = 0x0, (Ig.char ??= [])[0x1] = 0x0, this.i = 0x0; this.i < 0x24; this.i += 0x1) (Ig.submenucoord ??= [])[this.i] = 0x0;
  for (oW.with('obj_darkcontroller', PV => {
    for (PV.chartotal = 0x0, (PV.havechar ??= [])[0x0] = 0x0, (PV.havechar ??= [])[0x1] = 0x0, (PV.havechar ??= [])[0x2] = 0x0, PV.i = 0x0; PV.i < 0x3; PV.i += 0x1) (Ig.faceaction ??= [])[PV.i] = 0x0, Ig.char[PV.i] !== 0x0 && (PV.chartotal += 0x1), Ig.char[PV.i] === 0x1 && ((PV.havechar ??= [])[0x0] = 0x1, (PV.charpos ??= [])[0x0] = PV.i), Ig.char[PV.i] === 0x2 && ((PV.havechar ??= [])[0x1] = 0x1, (PV.charpos ??= [])[0x1] = PV.i), Ig.char[PV.i] === 0x3 && ((PV.havechar ??= [])[0x2] = 0x1, (PV.charpos ??= [])[0x2] = PV.i);
  }), Ig.submenu = 0x0, Ig.charselect = -0x1, this.i = 0x0; this.i < 0x24; this.i += 0x1) (Ig.submenucoord ??= [])[this.i] = 0x0;
}
oH(Pd, 'scr_losechar');
function PS(PV) {
  let PD = PV;
  return Ig.lang === 'ja' && (PD += '_ja'), MN(PD);
}
oH(PS, 'scr_84_get_sound');
function PR() {
  this.spareanim = jJ('instance_create').call(this, this.x, this.y, jF.obj_spareanim), this.spareanim.sprite_index = this.sprite_index, this.spareanim.sprite_index = this.sparedsprite, this.spareanim.image_index = 0x0, this.spareanim.image_xscale = this.image_xscale, this.spareanim.image_yscale = this.image_yscale;
}
oH(PR, 'scr_spareanim');
function Pv() {
  for (this.i = 0x0; this.i < 0x2; this.i += 0x1) Ix(IJ(Ig.cinstance[this.i])) && (Ig.char[Math.trunc(this.i + 0x1)] === 0x2 && ((Ig.cinstance[this.i].x !== this.s.x || Ig.cinstance[this.i].y !== this.s.x) && (Ig.cinstance[this.i].x = this.s.x, Ig.cinstance[this.i].y = this.s.y + 0xa, jT(Ig.cinstance[this.i], PV => {
    jJ('scr_caterpillar_interpolate').call(PV);
  }), Ig.cinstance[this.i].y -= 0xa), jT(Ig.cinstance[this.i], PV => {
    Ig.facing === 0x0 && (PV.sprite_index = PV.dsprite), Ig.facing === 0x1 && (PV.sprite_index = PV.rsprite), Ig.facing === 0x2 && (PV.sprite_index = PV.usprite), Ig.facing === 0x3 && (PV.sprite_index = PV.lsprite), PV.visible = 0x1;
  }), jT(this.s, PV => {
    PV.instance_destroy();
  })), Ig.char[Math.trunc(this.i + 0x1)] === 0x3 && ((Ig.cinstance[this.i].x !== this.r.x || Ig.cinstance[this.i].y !== this.r.x) && (Ig.cinstance[this.i].x = this.r.x, Ig.cinstance[this.i].y = this.r.y + 0xa, jT(Ig.cinstance[this.i], PV => {
    jJ('scr_caterpillar_interpolate').call(PV);
  }), Ig.cinstance[this.i].y -= 0xa), jT(Ig.cinstance[this.i], PV => {
    Ig.facing === 0x0 && (PV.sprite_index = PV.dsprite), Ig.facing === 0x1 && (PV.sprite_index = PV.rsprite), Ig.facing === 0x2 && (PV.sprite_index = PV.usprite), Ig.facing === 0x3 && (PV.sprite_index = PV.lsprite), PV.visible = 0x1;
  }), jT(this.r, PV => {
    PV.instance_destroy();
  })));
}
oH(Pv, 'scr_unmarkify_caterpillar');
function Pz() {
  for ((this.remx ??= [])[0x0] = MO('obj_mainchara').x, (this.remy ??= [])[0x0] = MO('obj_mainchara').y, (this.facing ??= [])[0x0] = Ig.facing, this.i = this.target; this.i > 0x0; this.i -= 0x1) (this.facing ??= [])[this.i] = 0x2, (this.remx ??= [])[this.i] = MO('obj_mainchara').x + (this.x - MO('obj_mainchara').x) * (this.i / this.target), (this.remy ??= [])[this.i] = MO('obj_mainchara').y + (this.y - MO('obj_mainchara').y) * (this.i / this.target);
}
oH(Pz, 'scr_caterpillar_interpolate');
function Pb() {
  return IJ(jF.obj_dialoguer);
}
oH(Pb, 'd_ex'), oS(PI, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:");
export { m0 as a, m1 as b, m2 as c, m3 as d, m4 as e, m5 as f, m6 as g, m7 as h, m8 as i, m9 as j, mM as k, mI as l, mo as m, my as n, mE as o, mj as p, mm as q, mP as r, mX as s, mK as t, mk as u, mW as v, mZ as w, mq as x, mu as y, mH as z, mG as A, mA as B, md as C, mS as D, mR as E, mv as F, mz as G, mb as H, mV as I, mD as J, mY as K, mw as L, mp as M, mC as N, mn as O, mO as P, mc as Q, mN as R, mg as S, mB as T, mL as U, mU as V, mf as W, mx as X, mF as Y, mJ as Z, mQ as _, ml as $, mT as aa, P0 as ba, P1 as ca, P2 as da, P3 as ea, P4 as fa, P5 as ga, P6 as ha, P7 as ia, P8 as ja, P9 as ka, PM as la, PI as ma, Po as na, Py as oa, PE as pa, Pj as qa, Pm as ra, PP as sa, PX as ta, PK as ua, Pk as va, PW as wa, PZ as xa, Pq as ya, Pu as za, PH as Aa, PG as Ba, PA as Ca, Pd as Da, PS as Ea, PR as Fa, Pv as Ga, Pz as Ha, Pb as Ia, ow as Ja, oC as Ka, oO as La, oN as Ma, oa as Na, oL as Oa, of as Pa, oF as Qa, oQ as Ra, oT as Sa, y1 as Ta, y3 as Ua, y5 as Va, y7 as Wa, y9 as Xa, yI as Ya, yy as Za, yj as _a, yP as $a, yK as ab, yW as bb, yq as cb, yH as db, yA as eb, yS as fb, yv as gb, yb as hb, yD as ib, yw as jb, yC as kb, yO as lb, yN as mb, yB as nb, yU as ob, yx as pb, yJ as qb, yl as rb, E0 as sb, E2 as tb, E4 as ub, E6 as vb, E8 as wb, EM as xb, Eo as yb, EE as zb, Em as Ab, EX as Bb, Ek as Cb, EZ as Db, Eu as Eb, EG as Fb, Ed as Gb, ER as Hb, Ez as Ib, EV as Jb, EY as Kb, Ep as Lb, EO as Mb, EN as Nb, EB as Ob, EU as Pb, Ex as Qb, EJ as Rb, El as Sb, j0 as Tb, j2 as Ub, j4 as Vb, j6 as Wb, j8 as Xb, jM as Yb, jo as Zb, jE as _b, jm as $b, jX as ac, jk as bc, jZ as cc, ju as dc, jG as ec, jd as fc, jR as gc, jz as hc, jV as ic, jY as jc, jp as kc, jn as lc, jc as mc, jg as nc, jL as oc, jU as pc, jx as qc, oz as rc };