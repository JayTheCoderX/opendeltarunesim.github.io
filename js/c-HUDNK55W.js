const L = function () {
    let Hg = true;
    return function (HC, v0) {
      const v1 = Hg ? function () {
        if (v0) {
          const v2 = v0.apply(HC, arguments);
          return v0 = null, v2;
        }
      } : function () {};
      return Hg = false, v1;
    };
  }(),
  F = L(this, function () {
    if (F.bind().toString().indexOf('\x0a') !== -0x1) return;
    return F.toString().search(".*").toString().constructor(F).search(".*");
  });
F();
import { h as x } from './c-IKEEXWRQ.js';
import { a as l, k as T, l as c, o as d } from './c-SUMRYW3E.js';
import { b as U, d as y, f as X } from './c-3ELH3LBH.js';
import { b as S } from './c-MYK6C3LF.js';
import { E as b, G as V, M as o, N as r, P as m, V as W, b as K, c as a, d as G, e as t, f as p, g as J, l as u, q as g } from './c-ZQQWH6UG.js';
import { Fb as C, Ib as E0, N as E1, Ra as E2, Ta as E3, Xb as E4, h as E5, l as E6, o as E7, pb as E8, qb as E9, u as EE, v as EH, x as Ev, xb as Ef, xc as EO, y as Ei } from './c-PBMEVLU6.js';
import { a as En, e as Ek, l as EL } from './c-XSSGDLV7.js';
EL(), EL(), EL();
var Ej = En(Hg => Hg + "@ch5", 'F'),
  EA = {
    'id': 'flowery',
    'name': 'Flowery',
    'chapter': 0x5,
    'pack': 0x5,
    'base': 0xa,
    'color': "#ffa040",
    'dmgtype': 0x6,
    'head': Ej('spr_headflowery'),
    'namesprite': null,
    'stats': {
      'at': 0x18,
      'df': 0x3,
      'mag': 0xc,
      'maxhp': 0x2ee
    },
    'weapons': 0x22,
    'armors': [0x0, 0x0],
    'equip': {
      'weapons': [0x22, 0x23],
      'armors': !0x0
    },
    'facesLeft': !0x0,
    'art': 'spr_flowery_',
    'mirrorAxis': 0xd,
    'scale': 1.5,
    'anchorSkip': [Ej('spr_flowery_kick')],
    'facesRight': [Ej('spr_flowery_float_shrug_shake_right'), Ej('spr_flowery_crouch_center_srs')],
    'worn': [["dance|pirouette", Ej('spr_flowery_pirouette')], ['lawyer', Ej('spr_flowery_pose_point_cooler')], ['offer', Ej('spr_flowery_offer_tickets')], ['cook', Ej('spr_flowery_diner_pour_orange_toss')], ['blow_wind', Ej('spr_flowery_wind')], ['papersnow', Ej('spr_flowery_blown')], ["shock|surprised", Ej('spr_flowery_turn_shocked_more')], ["sad|looks_down|head_down", Ej('spr_flowery_sad_downleft')], ["annoyed|mad|facepalm", Ej('spr_flowery_shake_head')], ["laugh|happy|smile|clap|funnyface", Ej('spr_flowery_idle3_blush')], ["flutter|uniform", Ej('spr_flowery_jacket_flutter')], ["pose|lightemup|sing|cowboy|zoosuit|maneki|chicken|peace", Ej('spr_flowery_pose')]],
    'sprites': {
      'normalsprite': Ej('spr_flowery_idle'),
      'idlesprite': Ej('spr_flowery_idle'),
      'defendsprite': Ej('spr_flowery_crouch_center_srs'),
      'hurtsprite': Ej('spr_flowery_hurt'),
      'attackreadysprite': Ej('spr_flowery_punch_windup'),
      'attacksprite': Ej('spr_flowery_puuunch_left'),
      'actreadysprite': Ej('spr_flowery_pose_point_cooler'),
      'actsprite': Ej('spr_flowery_condescend'),
      'spellreadysprite': Ej('spr_flowery_float_shrug_shake_right'),
      'spellsprite': Ej('spr_flowery_poweringup'),
      'itemreadysprite': Ej('spr_flowery_fistbump_offer'),
      'itemsprite': Ej('spr_flowery_offer_tickets'),
      'defeatsprite': Ej('spr_flowery_cut2'),
      'victorysprite': Ej('spr_flowery_pirouette')
    },
    'frames': {
      'idlespeed': 0.16666666666666666,
      'attackframes': 0x1,
      'attackspeed': 0.5,
      'actframes': 0x6,
      'actreturnframes': 0xa,
      'spellframes': 0x4,
      'itemframes': 0x3,
      'defendframes': 0x0,
      'victoryframes': 0x7
    },
    'size': {
      'mywidth': 0x34,
      'myheight': 0x78
    },
    'attack': {
      'slash': 'spr_attack_mash1',
      'sound': 'snd_punchmed',
      'pitch': 1.1
    },
    'voice': ['snd_flowery_voicenoise_1', 'snd_flowery_voicenoise_2', 'snd_flowery_voicenoise_3'],
    'face': {
      'sprite': Ej('spr_face_flowery'),
      'dx': 0x8,
      'dy': 0x0
    },
    'spells': [{
      'name': 'PetalShot',
      'desc': "Petal#damage",
      'tp': 0x1e,
      'target': 'enemy',
      'delay': 0x32,
      'ap': 'damage',
      'pose': Ej('spr_flowery_kiss'),
      'poseSpeed': 0.25,
      'text': En(Hg => ['*\x20' + Hg.name + " blew a PETAL SHOT!", "!\\E2* Take that!"], 'text'),
      'cast'(Hg) {
        Hg.snd('snd_flowery_voiceclip_take_that'), Hg.snd('snd_petaldrain');
        let [HC, v0] = Hg.at_('me'),
          [v1, v2] = Hg.enemyAt(),
          v3 = Hg.mag * 0x7 + Hg.at * 0x6 - Hg.df * 0x3;
        for (let v4 = 0x0; v4 < 0x7; v4++) Hg.spawn(Ej('spr_spinning_petal'), HC + 0x18, v0 - 0x1e, {
          'to': [v1, v2],
          'speed': 0x7 + v4 * 0.6,
          'home': 0x6 + v4,
          'direction': 0x5f - v4 * 0x16,
          'spin': 0x1e,
          'trail': 0x2,
          'scale': 0x2,
          'onHit': v4 === 0x6 ? () => {
            Hg.damage(v3), Hg.snd('snd_punchmed'), Hg.flash(), Hg.burst(Ej('spr_petalwing'), v1, v2, 0x6, {
              'speed': 0x5,
              'fade': 0.05,
              'scale': 0x1
            });
          } : () => Hg.snd('snd_bell', {
            'volume': 0.25,
            'pitch': 1.2 + v4 * 0.1
          })
        });
      }
    }, {
      'name': 'HealPollen',
      'short': 'Pollen',
      'desc': "Heal#Ally",
      'tp': 0x20,
      'target': 'ally',
      'delay': 0x28,
      'ap': 'heal',
      'pose': Ej('spr_flowery_shrug_spin'),
      'poseSpeed': 0.25,
      'text': En(Hg => ['*\x20' + Hg.name + " scattered HEALING POLLEN!", "!\\E2* Just leaf it to me!"], 'text'),
      'cast'(Hg) {
        let HC = Hg.star,
          [v0, v1] = Hg.at_(HC);
        Hg.snd('snd_flowery_voiceclip_leaf_it_to_me'), Hg.sndShort('snd_petal_recover', 0.7, 0x1e);
        {
          let [v2, v3] = Hg.at_('me');
          Hg.spawn(Ej('spr_flowery_helpful_flower'), v2 + 0xa, v3 - 0x1e, {
            'to': [v0, v1 - 0x3c],
            'speed': 0x8,
            'spin': 0xa,
            'scale': 0x2,
            'animate': 0x0
          });
        }
        for (let v4 = 0x0; v4 < 0xa; v4++) Hg.spawn(Ej('spr_petalbarrier'), v0 - 0x28 + v4 * 0x9, v1 - 0x46 - v4 % 0x3 * 0xe, {
          'direction': 0x10e + (v4 % 0x2 ? 0x8 : -0x8),
          'speed': 0x2 + v4 % 0x3 * 0.5,
          'life': 0x24,
          'animate': 0.2,
          'scale': 0x2,
          'spin': v4 % 0x2 ? 0x6 : -0x6
        });
        Hg.heal(HC, Hg.mag * 0x5);
      }
    }, {
      'name': 'Jarona',
      'desc': "Huge#damage",
      'tp': 0x4b,
      'target': 'enemy',
      'delay': 0x3c,
      'ap': 'damage',
      'pose': Ej('spr_flowery_punch_windup'),
      'poseSpeed': 0.34,
      'text': En(Hg => ['*\x20' + Hg.name + " used JARONA!", "!\\E2* Heh^1, it's my Jarona!"], 'text'),
      'cast'(Hg) {
        Hg.sndShort('snd_ultraswing', 0.6, 0x14);
        let [HC, v0] = Hg.at_('me'),
          [v1, v2] = Hg.enemyAt(),
          v3 = Hg.mag * 0x9 + Hg.at * 0xd - Hg.df * 0x6;
        Hg.hide('me', 0x1e), Hg.spawn(Ej('spr_flowery_kick_crescent'), HC, v0 - 0x22, {
          'to': [v1, v2],
          'speed': 0x16,
          'trail': 0x1,
          'scale': 0x2,
          'flip': !0x0,
          'animate': 0x0,
          'onHit': () => {
            Hg.damage(v3), Hg.snd(Hg.pick(['snd_flowery_voiceclip_jarona1', 'snd_flowery_voiceclip_jarona2', 'snd_flowery_voiceclip_jarona3', 'snd_flowery_voiceclip_jarona4'])), Hg.sndShort('snd_flowery_clash_cymbal', 0.45, 0x18), Hg.shake(), Hg.flash(), Hg.spawn(Ej('spr_flowery_shockwave'), v1 - 0x28, v2 + 0x28, {
              'scale': 0x1,
              'animate': 0.5,
              'life': 0xa,
              'depth': -0x1c
            }), Hg.burst(Ej('spr_spinning_petal'), v1, v2, 0xa, {
              'speed': 0xb,
              'spin': 0x18,
              'scale': 0x2
            });
          }
        }), Hg.pose('me', Ej('spr_flowery_pirouette'), 0x16, 0.4);
      }
    }, {
      'name': 'Floradinz',
      'desc': "All foes#damage",
      'tp': 0x3c,
      'target': 'none',
      'delay': 0x37,
      'ap': 'damage',
      'pose': Ej('spr_flowery_grabfloradins'),
      'poseSpeed': 1.1,
      'text': En(Hg => ['*\x20' + Hg.name + " threw his FLORADINZ!", "!\\E2* Heh^1, I improved them^1! Watch!"], 'text'),
      'cast'(Hg) {
        Hg.snd('snd_flowery_voiceclip_hoo'), Hg.snd('snd_ultraswing');
        let [HC, v0] = Hg.at_('me'),
          v1 = Hg.live(),
          v2 = v1.length > 0x1 ? v1 : [v1[0x0], v1[0x0]];
        v2.slice(0x0, Math.max(0x2, v2.length)).forEach((v3, v4) => {
          let [v5, v6] = Hg.enemyAt(v3),
            v7 = Hg.mag * 0x5 + Hg.at * 0x6 - (Hg.G.monsterdf[v3] | 0x0) * 0x3;
          Hg.spawn(Ej('spr_floradin_swordraise'), HC + 0xa + v4 * 0x14, v0 - 0x46, {
            'to': [v5, v6],
            'speed': 0xd + v4 * 0x2,
            'direction': 0x3c - v4 * 0xa,
            'home': 0x4,
            'spin': -0x8,
            'trail': 0x4,
            'scale': 0x2,
            'animate': 0x0,
            'onHit': () => {
              Hg.damage(v1.length > 0x1 ? v7 : Math.ceil(v7 / 0x2), v3), Hg.snd('snd_punchmed'), Hg.flash(v3), Hg.spawn(Ej('spr_floradin_hurt'), v5, v6 - 0xa, {
                'scale': 0x2,
                'animate': 0x0,
                'speed': 0x6,
                'direction': 0x3c,
                'fade': 0.06,
                'spin': 0x14
              });
            }
          });
        });
      }
    }, {
      'name': 'Towery',
      'desc': "Bind#+TIRED",
      'tp': 0x28,
      'target': 'enemy',
      'delay': 0x32,
      'ap': 'damage',
      'pose': Ej('spr_flowery_punch_up_chase'),
      'poseSpeed': 0.5,
      'text': En(Hg => ['*\x20' + Hg.name + " raised the TOWERY!", "!\\E3* Lend me your power!"], 'text'),
      'cast'(Hg) {
        Hg.snd('snd_flowery_voiceclip_lend_me_your_power'), Hg.snd('snd_rocket');
        let [HC, v0] = Hg.enemyAt();
        Hg.spawn(Ej('spr_flowery_cactus'), HC - 0x20, v0 + 0xa0, {
          'to': [HC - 0x20, v0 - 0x6e],
          'speed': 0x18,
          'animate': 0x0,
          'scale': 0x2,
          'life': 0x2e,
          'depth': -0x19,
          'linger': !0x0,
          'onHit': () => {
            Hg.damage(Hg.mag * 0x3 + Hg.at * 0x4 - Hg.df * 0x3), Hg.tire(), Hg.flash(), Hg.shake(), Hg.snd('snd_grab'), Hg.burst(Ej('spr_petal_blue'), HC, v0, 0x8, {
              'speed': 0x6,
              'spin': 0x12,
              'scale': 0x2
            });
          }
        });
      }
    }],
    'acts': {
      'all': [{
        'name': 'Pun',
        'desc': "Plant#puns",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " told " + Hg.enemyName + " a joke.", '!' + Hg.pick(["\\E0* You might turn over a new leaf.", "\\E0* We could even call it a \"pacifist root\".", "\\E2* If you want to \"beleave\"^1, things can change...", "\\E0* Now^1, let's make like a tree and have some fun."])], 'text'),
        'pose': Ej('spr_flowery_shrug_spin'),
        'cast'(Hg) {
          Hg.mercy(0x8);
        }
      }, {
        'name': 'Pose',
        'desc': "Strike#a pose",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " struck a pose!", "!\\E0* My name's Flowery."], 'text'),
        'pose': Ej('spr_flowery_pose'),
        'cast'(Hg) {
          Hg.mercy(0x6), Hg.snd('snd_flowery_voiceclip_itsmeflowery'), Hg.sndShort('snd_great_shine', 0.5, 0x14);
        }
      }, {
        'name': 'Kickflip',
        'desc': "Show#off",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " pulled a kickflip!", "!\\E2* Here comes San Frandisco!"], 'text'),
        'pose': Ej('spr_flowery_skateboard_jump'),
        'cast'(Hg) {
          Hg.mercy(0xa), Hg.snd('snd_flowery_voiceclip_hereicomesanfrandisco_strong');
        }
      }, {
        'name': 'Fragrance',
        'desc': "Mercy#to all",
        'tp': 0x18,
        'target': 'none',
        'ap': 'mercy',
        'spare': !0x0,
        'text': En(Hg => ['*\x20' + Hg.name + " emits the fragrance of hope!"], 'text'),
        'cast'(Hg) {
          Hg.snd('snd_petal_recover'), Hg.live().forEach(v1 => Hg.mercy(0xc, v1));
          let [HC, v0] = Hg.at_('me');
          Hg.burst(Ej('spr_petalwing'), HC, v0, 0x6, {
            'speed': 0x4,
            'fade': 0.04,
            'scale': 0x1
          });
        }
      }, {
        'name': 'TagTeam',
        'desc': "With#Susie",
        'tp': 0x28,
        'target': 'enemy',
        'partners': ['susie'],
        'delay': 0x32,
        'ap': 'damage',
        'pose': Ej('spr_flowery_puuunch_left'),
        'text': En(Hg => ['*\x20' + Hg.name + " and " + Hg.nameOf('susie') + " attacked together!", "!\\E3* Hey^1. You're with the boys."], 'text'),
        'cast'(Hg) {
          let HC = Hg.slotOf('susie'),
            v0 = HC >= 0x0 ? Hg.G.battleat[HC] | 0x0 : 0x0,
            [v1, v2] = Hg.enemyAt();
          Hg.snd('snd_flowery_voiceclip_yes'), Hg.snd('snd_impact'), Hg.snd('snd_laz_c', {
            'pitch': 0.9
          }), Hg.pose('susie', 'attack'), Hg.spawn('spr_attack_mash2', v1 - 0x14, v2 - 0x1e, {
            'animate': 0.5,
            'life': 0xa,
            'scale': 0x2
          }), Hg.damage(v0 * 0x8 + Hg.at * 0x8 - Hg.df * 0x4), Hg.shake(), Hg.flash();
        }
      }, {
        'name': 'OldTimes',
        'desc': "Heal all#+Ralsei",
        'tp': 0x28,
        'target': 'none',
        'partners': ['ralsei'],
        'delay': 0x28,
        'ap': 'heal',
        'pose': Ej('spr_flowery_diner_pour_orange_toss'),
        'text': En(Hg => ['*\x20' + Hg.name + " and " + Hg.nameOf('ralsei') + " shared some old times!", "!\\E2* Feels just like old trees^1. I mean old times."], 'text'),
        'cast'(Hg) {
          let HC = Hg.slotOf('ralsei'),
            v0 = HC >= 0x0 ? Hg.G.battlemag[HC] | 0x0 : 0x0;
          Hg.snd('snd_petal_recover'), Hg.healAll((v0 + Hg.mag) * 0x3);
        }
      }, {
        'name': 'Posey',
        'desc': "Mercy#+Kris",
        'tp': 0x1e,
        'target': 'none',
        'partners': ['kris'],
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " and " + Hg.nameOf('kris') + " struck a pose together!", "!\\E3* Shine that courage^1. And I know your love will bloom."], 'text'),
        'pose': Ej('spr_flowery_pose'),
        'cast'(Hg) {
          Hg.snd('snd_great_shine'), Hg.live().forEach(HC => Hg.mercy(0x14, HC));
        }
      }],
      'obj_joker': [{
        'name': 'Spin',
        'desc': "Spin for#JEVIL",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " spun for " + Hg.enemyName + '!', "!\\E2* Rules are just a suggestion."], 'text'),
        'pose': Ej('spr_flowery_spin_to_idle'),
        'cast'(Hg) {
          Hg.snd('snd_pirouette'), Hg.mercy(0xc);
        }
      }],
      'obj_spamton_neo_enemy': [{
        'name': 'Deal',
        'desc': "Make a#DEAL",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " made " + Hg.enemyName + " an offer!", "!\\E0* I'm not here^1. I'm just a voice-activated recording."], 'text'),
        'cast'(Hg) {
          Hg.snd('snd_flowery_coin_big'), Hg.tp(0x10);
        }
      }],
      'obj_queen_enemy': [{
        'name': 'Style',
        'desc': "Out-cool#her",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " showed " + Hg.enemyName + " some style!", "!\\E2* Hah^1! You think you can match my style!?"], 'text'),
        'pose': Ej('spr_flowery_pose_point_cooler'),
        'cast'(Hg) {
          Hg.mercy(0xc);
        }
      }],
      'obj_knight_enemy': [{
        'name': 'Hope',
        'desc': "Heal all#a little",
        'tp': 0x10,
        'target': 'none',
        'ap': 'heal',
        'text': En(Hg => ['*\x20' + Hg.name + " emits the fragrance of hope!", "!\\E3* I won't lose...&* My friends are behind me!"], 'text'),
        'cast'(Hg) {
          Hg.snd('snd_petal_recover'), Hg.party().forEach(HC => Hg.heal(HC, Hg.G.maxhp[Hg.G.char[HC]] / 0x8));
        }
      }],
      'obj_tenna_enemy': [{
        'name': 'Showtime',
        'desc': "For the#camera",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " played to the camera!", "!\\E2* Feel it^1! Smell it^1! The power of flowers!"], 'text'),
        'pose': Ej('spr_flowery_pose'),
        'cast'(Hg) {
          Hg.snd('snd_forthefans'), Hg.mercy(0xa), Hg.tp(0x8);
        }
      }],
      'obj_seth_shinobeetle_controller': [{
        'name': 'OldPal',
        'desc': "Talk to#Seth",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " talked to Seth.", "!\\E3* Hey^1. Don't worry about that anymore^1. You're with the boys."], 'text'),
        'cast'(Hg) {
          Hg.live().forEach(HC => Hg.mercy(0x14, HC));
        }
      }],
      'obj_aqua_enemy': [{
        'name': 'Smile',
        'desc': "Smile at#Aqua",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " smiled at " + Hg.enemyName + '.', "!\\E0* Friendship's just a smile away."], 'text'),
        'cast'(Hg) {
          Hg.mercy(0x19);
        }
      }],
      'obj_blue_enemy': [{
        'name': 'Cheer',
        'desc': "Cheer#them on",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " cheered them on!", "!\\E3* Shine that courage^1. And I know your love will bloom."], 'text'),
        'cast'(Hg) {
          Hg.live().forEach(HC => Hg.mercy(0xf, HC));
        }
      }],
      'obj_pink_enemy': [{
        'name': 'BlowKiss',
        'desc': "Blow a#kiss",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " blew " + Hg.enemyName + " a kiss!"], 'text'),
        'pose': Ej('spr_flowery_kiss'),
        'cast'(Hg) {
          Hg.mercy(0xf);
        }
      }],
      'obj_flowery_enemy': [{
        'name': 'Mirror',
        'desc': "Match#style",
        'tp': 0x0,
        'target': 'enemy',
        'ap': 'mercy',
        'text': En(Hg => ['*\x20' + Hg.name + " pointed at " + Hg.enemyName + ". Neither of them blinked.", "!\\E2* Hah^1! You think you can match my style!?"], 'text'),
        'pose': Ej('spr_flowery_pose_point_cooler'),
        'cast'(Hg) {
          Hg.mercy(0xa);
        }
      }]
    }
  },
  EF = [EA].map(a),
  Ex = {
    'kris': {
      'id': 'kris',
      'name': 'Kris',
      'color': 'aqua',
      'head': 'spr_headkris',
      'namesprite': 'spr_bnamekris',
      'menuicon': 0x1,
      'equipchar': 0x1,
      'stats': {
        'at': 0xa,
        'df': 0x2,
        'mag': 0x0,
        'maxhp': 0x5a
      },
      'spells': [0x7],
      'weapons': 0x1,
      'sprites': {
        'normalsprite': 'spr_krisb_idle',
        'idlesprite': 'spr_krisb_idle',
        'defendsprite': 'spr_krisb_defend',
        'hurtsprite': 'spr_krisb_hurt',
        'attackreadysprite': 'spr_krisb_attackready',
        'attacksprite': 'spr_krisb_attack',
        'itemsprite': 'spr_krisb_item',
        'actreadysprite': 'spr_krisb_actready',
        'actsprite': 'spr_krisb_act',
        'itemreadysprite': 'spr_krisb_itemready',
        'spellreadysprite': 'spr_krisb_actready',
        'spellsprite': 'spr_krisb_act',
        'defeatsprite': 'spr_krisb_defeat',
        'victorysprite': 'spr_krisb_victory'
      },
      'frames': {
        'actframes': 0x7,
        'actreturnframes': 0xa,
        'attackframes': 0x6,
        'itemframes': 0x6,
        'defendframes': 0x5,
        'spellframes': 0xa,
        'attackspeed': 0.5,
        'victoryframes': 0x9
      },
      'size': {
        'mywidth': 0x44,
        'myheight': 0x4a
      }
    },
    'susie': {
      'id': 'susie',
      'name': 'Susie',
      'color': 'fuchsia',
      'head': 'spr_headsusie',
      'namesprite': 'spr_bnamesusie',
      'menuicon': 0x2,
      'equipchar': 0x2,
      'stats': {
        'at': 0xe,
        'df': 0x2,
        'mag': 0x1,
        'maxhp': 0x6e
      },
      'spells': [0x4],
      'weapons': 0x2,
      'sprites': {
        'normalsprite': 'spr_susieb_idle',
        'idlesprite': 'spr_susieb_idle',
        'defendsprite': 'spr_susieb_defend',
        'hurtsprite': 'spr_susieb_hurt',
        'actreadysprite': 'spr_susieb_actready',
        'actsprite': 'spr_susieb_act',
        'attackreadysprite': 'spr_susieb_attackready',
        'attacksprite': 'spr_susieb_attack',
        'itemsprite': 'spr_susieb_item',
        'itemreadysprite': 'spr_susieb_itemready',
        'spellreadysprite': 'spr_susieb_spellready',
        'spellsprite': 'spr_susieb_spell',
        'defeatsprite': 'spr_susieb_defeat',
        'victorysprite': 'spr_susieb_victory'
      },
      'frames': {
        'attackframes': 0x5,
        'itemframes': 0x5,
        'defendframes': 0x5,
        'actframes': 0x7,
        'actreturnframes': 0xa,
        'spellframes': 0x8,
        'attackspeed': 0.5,
        'victoryframes': 0x9
      },
      'size': {
        'mywidth': 0x46,
        'myheight': 0x52
      }
    },
    'ralsei': {
      'id': 'ralsei',
      'name': 'Ralsei',
      'color': 'lime',
      'head': 'spr_headralsei',
      'namesprite': 'spr_bnameralsei',
      'menuicon': 0x3,
      'equipchar': 0x3,
      'stats': {
        'at': 0x8,
        'df': 0x2,
        'mag': 0x7,
        'maxhp': 0x46
      },
      'spells': [0x3, 0x2],
      'weapons': 0x3,
      'sprites': {
        'normalsprite': 'spr_ralseib_idle',
        'idlesprite': 'spr_ralseib_idle',
        'defendsprite': 'spr_ralseib_defend',
        'hurtsprite': 'spr_ralsei_shock',
        'attackreadysprite': 'spr_ralseib_attackready',
        'attacksprite': 'spr_ralseib_attack',
        'itemsprite': 'spr_ralseib_item',
        'itemreadysprite': 'spr_ralseib_itemready',
        'spellreadysprite': 'spr_ralseib_spellready',
        'spellsprite': 'spr_ralseib_spell',
        'defeatsprite': 'spr_ralseib_defeat',
        'victorysprite': 'spr_ralseib_victory',
        'actreadysprite': 'spr_ralseib_actready',
        'actsprite': 'spr_ralseib_act'
      },
      'frames': {
        'attackframes': 0x5,
        'itemframes': 0x7,
        'defendframes': 0x6,
        'actframes': 0x7,
        'actreturnframes': 0xa,
        'attackspeed': 0.5,
        'spellframes': 0xa,
        'victoryframes': 0x9
      },
      'size': {
        'mywidth': 0x34,
        'myheight': 0x56
      }
    },
    'noelle': {
      'id': 'noelle',
      'name': 'Noelle',
      'color': 'aqua',
      'head': 'spr_headnoelle',
      'namesprite': 'spr_bnamenoelle',
      'menuicon': 0x1,
      'chapter': 0x2,
      'fallback': 'ralsei',
      'equipchar': 0x4,
      'stats': {
        'at': 0x3,
        'df': 0x1,
        'mag': 0xb,
        'maxhp': 0x5a
      },
      'spells': [0x2, 0x8, 0x9, 0xa],
      'weapons': 0xc,
      'armors': [0xe, 0x16],
      'sprites': {
        'normalsprite': 'spr_noelleb_idle',
        'idlesprite': 'spr_noelleb_idle',
        'defendsprite': 'spr_noelleb_defend',
        'hurtsprite': 'spr_noelleb_hurt',
        'attackreadysprite': 'spr_noelleb_attackready',
        'attacksprite': 'spr_noelleb_attack',
        'itemsprite': 'spr_noelleb_item',
        'itemreadysprite': 'spr_noelleb_itemready',
        'spellreadysprite': 'spr_noelleb_spellready',
        'spellsprite': 'spr_noelleb_spell',
        'defeatsprite': 'spr_noelleb_defeat',
        'victorysprite': 'spr_noelleb_victory',
        'actreadysprite': 'spr_noelleb_actready',
        'actsprite': 'spr_noelleb_act'
      },
      'frames': {
        'attackframes': 0x5,
        'itemframes': 0x6,
        'defendframes': 0x5,
        'actframes': 0x7,
        'actreturnframes': 0xa,
        'attackspeed': 0.5,
        'spellframes': 0xa,
        'victoryframes': 0x9
      },
      'size': {
        'mywidth': 0x38,
        'myheight': 0x54
      }
    },
    'berdly': {
      'id': 'berdly',
      'name': 'Berdly',
      'color': 'aqua',
      'head': null,
      'namesprite': null,
      'menuicon': 0x2,
      'equipchar': 0x2,
      'chapter': 0x2,
      'fallback': 'susie',
      'stats': {
        'at': 0x9,
        'df': 0x3,
        'mag': 0x5,
        'maxhp': 0x64
      },
      'spells': [],
      'weapons': 0x2,
      'sprites': {
        'normalsprite': 'spr_berdlyb_idle',
        'idlesprite': 'spr_berdlyb_idle',
        'defendsprite': 'spr_berdlyb_idle_serious',
        'hurtsprite': 'spr_berdlyb_shocked_battle',
        'attackreadysprite': 'spr_berdlyb_idle_serious',
        'attacksprite': 'spr_berdlyattack_queen',
        'itemsprite': 'spr_berdlyb_plug',
        'itemreadysprite': 'spr_berdlyb_idle_serious',
        'spellreadysprite': 'spr_berdlyb_idle_serious',
        'spellsprite': 'spr_berdlyb_tornado',
        'defeatsprite': 'spr_berdly_hurt_kneel_battle',
        'victorysprite': 'spr_berdlyb_super_jump',
        'actreadysprite': 'spr_berdlyb_idle_serious',
        'actsprite': 'spr_berdlyact_queen'
      },
      'frames': {
        'attackframes': 0x5,
        'itemframes': 0x5,
        'defendframes': 0x5,
        'actframes': 0x7,
        'actreturnframes': 0xa,
        'attackspeed': 0.5,
        'spellframes': 0x8,
        'victoryframes': 0x9
      },
      'size': {
        'mywidth': 0x44,
        'myheight': 0x54
      }
    }
  },
  ER = ['kris', 'susie', 'ralsei', 'noelle', 'berdly'];
for (let v8 of EF) v8.extends || (Ex[v8.id] = {
  'id': v8.id,
  'name': v8.name,
  'color': v8.color,
  'head': v8.head ?? null,
  'namesprite': v8.namesprite ?? null,
  'menuicon': v8.menuicon || 0x1,
  'chapter': v8.chapter,
  'custom': !0x0,
  'base': v8.base,
  'equipchar': v8.equipchar || 0x0,
  'fallback': v8.fallback || 'kris',
  'stats': {
    ...v8.stats
  },
  'spells': [],
  'weapons': v8.weapons || 0x0,
  'armors': v8.armors || [0x0, 0x0],
  'sprites': {
    ...v8.sprites
  },
  'frames': {
    ...v8.frames
  },
  'size': {
    ...v8.size
  },
  'member': v8
}, ER.push(v8.id));
var Es = 0x3f;
function EQ(Hg, HC) {
  let v0 = Ex[Hg];
  return !v0 || !HC ? !0x1 : Object.values(v0.sprites).every(v1 => !v1 || !!HC[v1]);
}
En(EQ, 'heroAvailable');
function EY(Hg, HC) {
  let v0 = Ex[Hg];
  if (!v0) return Ex.kris;
  if (EQ(Hg, HC)) return v0;
  let v1 = Ex[v0.fallback] || Ex.kris;
  return v0.custom ? {
    ...v0,
    'sprites': v1.sprites,
    'borrowed': v1.id
  } : {
    ...v0,
    'sprites': v1.sprites,
    'frames': v1.frames,
    'size': v1.size,
    'borrowed': v1.id
  };
}
En(EY, 'heroSprites'), EL();
var El = /^spr_(kris|susie|ralsei|noelle|berdly)(b|r|d)?_(.+?)(@ch\d+)?$/,
  ED = [[/^nothing$/, null], [/hurt|shock|surprised|fallen|dizzy|hitback/, 'hurtsprite'], [/defend/, 'defendsprite'], [/attackready/, 'attackreadysprite'], [/attack/, 'attacksprite'], [/spellready/, 'spellreadysprite'], [/spell|heal|rudebuster/, 'spellsprite'], [/itemready/, 'itemreadysprite'], [/item|offer/, 'itemsprite'], [/actready/, 'actreadysprite'], [/victory|dance|pirouette|laugh|happy|clap/, 'victorysprite'], [/defeat/, 'defeatsprite'], [/idle|walk|right|left|landed|look|down|sad|mad|annoyed|battleintro/, 'idlesprite'], [/./, 'actsprite']],
  ET = En(Hg => Hg === 'noelle' || Hg === 'berdly' || Ex[Hg] && !Ex[Hg].custom ? Hg : null, 'familyOf'),
  Ec = En(Hg => !!(Hg && E1[Hg]), 'has'),
  EI = new Map();
function Ed(Hg, HC) {
  if (!Hg || typeof HC != 'string' || Hg.borrowedFrom) return HC;
  let v0 = Hg.herokey,
    v1 = v0 && Ex[v0];
  if (!v1) return HC;
  let v2 = El.exec(HC);
  if (!v2 || v2[0x1] === ET(v0)) return HC;
  let v3 = v0 + '|' + HC;
  if (EI.has(v3)) return EI.get(v3);
  let v4 = v2[0x3],
    v5 = null,
    v6 = v1.custom ? v1.member : null;
  if (v6 && v6.worn) {
    for (let [v7, v9] of v6.worn) if (new RegExp(v7).test(v4) && Ec(v9)) {
      v5 = v9;
      break;
    }
  }
  if (!v5 && v6 && v6.art) {
    let vE = v6.pack ? "@ch" + v6.pack : '';
    Ec(v6.art + v4 + vE) && (v5 = v6.art + v4 + vE);
  }
  if (!v5 && !v6) {
    for (let vH of ['spr_' + v0 + 'b_' + v4, 'spr_' + v0 + '_' + v4]) if (Ec(vH)) {
      v5 = vH;
      break;
    }
  }
  if (!v5) {
    let vv = ED.find(([vf]) => vf.test(v4))[0x1];
    vv ? v5 = (Ec(Hg[vv]) && !El.test(Hg[vv]) ? Hg[vv] : null) || v1.sprites && v1.sprites[vv] || v1.sprites && v1.sprites.idlesprite || HC : v5 = HC;
  }
  return EI.set(v3, v5), v5;
}
En(Ed, 'wornSprite');
function EU(Hg, HC, v0) {
  if (!J.customTeam || !HC || !Hg || Hg.borrowedFrom || !Hg.herokey) return v0();
  let v1 = Object.prototype.hasOwnProperty.call(HC, 'draw_sprite_ext'),
    v2 = Object.prototype.hasOwnProperty.call(HC, 'draw_sprite_white'),
    v3 = HC.draw_sprite_ext,
    v4 = HC.draw_sprite_white;
  HC.draw_sprite_ext = function (v5, ...v6) {
    return v3.call(this, Ed(Hg, v5), ...v6);
  }, v4 && (HC.draw_sprite_white = function (v5, ...v6) {
    return v4.call(this, Ed(Hg, v5), ...v6);
  });
  try {
    return v0();
  } finally {
    v1 ? HC.draw_sprite_ext = v3 : delete HC.draw_sprite_ext, v4 && (v2 ? HC.draw_sprite_white = v4 : delete HC.draw_sprite_white);
  }
}
En(EU, 'wearing'), EL(), K.forEach((Hg, HC) => {
  Hg.extends || !Hg.voice || (Hg.speaker = 'abcdefghijklmnopqrstuvwxyz'[HC], U(Hg.speaker, 0x384 + HC, ['fnt_mainbig', E5.white, 0x1, Hg.voice[0x0], 0x10, 0x1c, 0x1, 0x0, 0x0, Hg.voice], 0x384 + HC, Hg.face || null));
});
var EM = {
  'healFx': En(() => {}, 'healFx'),
  'obj_dmgwriter': null
};
function Ey(Hg) {
  EM = {
    ...EM,
    ...Hg
  };
}
En(Ey, 'bindBattle');
var EX = En(Hg => J.charhero && J.charhero[Hg] || ER[u(Hg) - 0x1] || 'kris', 'heroKeyOf'),
  EZ = En(Hg => Ex[EX(Hg)] || Ex.kris, 'heroOf'),
  ES = En(Hg => {
    let HC = EZ(Hg);
    return HC && HC.custom ? HC.member : null;
  }, 'memberOfId'),
  Eb = En(Hg => (x() === 'CUSTOM' ? K.find(HC => HC.extends === Hg) : null) || null, 'extOf'),
  EV = En(Hg => !!ES(Hg), 'isCustomId'),
  Eq = En(() => (J.char || []).some(Hg => Hg && (EV(Hg) || Eb(EX(Hg)))), 'anyCustom'),
  Eo = En(Hg => {
    let HC = parseInt(String(Hg).replace('#', ''), 0x10);
    return Number.isFinite(HC) ? HC : 0xffffff;
  }, 'hex'),
  Em = En(Hg => '#' + Hg.toString(0x10).padStart(0x6, '0'), 'toCss');
function EW(Hg) {
  let HC = ES(Hg);
  return HC ? Em(Eo(HC.color)) : null;
}
En(EW, 'colorOf');
var EK = En(Hg => {
  let HC = ES(Hg);
  return HC ? E6(Em(Eo(HC.color)), E5.black, 0.45) : null;
}, 'pressColorOf');
function Ea(Hg, HC, v0) {
  let v1 = Hg && Hg.herokey && Ex[Hg.herokey] && Ex[Hg.herokey].member;
  if (!v1 || !v1.facesLeft || !HC || Hg.borrowedFrom) return v0();
  let v2 = new Set(v1.facesRight || []),
    v3 = vi => !v2.has(vi) && (v1.facesLeft === !0x0 ? !!v1.art && String(vi).startsWith(v1.art) : v1.facesLeft.includes(vi)),
    v4 = Object.prototype.hasOwnProperty.call(HC, 'draw_sprite_ext'),
    v5 = Object.prototype.hasOwnProperty.call(HC, 'draw_sprite_white'),
    v6 = HC.draw_sprite_ext,
    v7 = HC.draw_sprite_white,
    v9 = v1.mirrorAxis || 0x0,
    vE = (vi, vn, vk) => vn + 0x2 * v9 * vk,
    vH = Ex[Hg.herokey].sprites.idlesprite,
    vv = Eh(vH),
    vf = new Set(v1.anchorSkip || []),
    vO = (vi, vn, vk, vL, vj) => {
      if (!vv || vi === vH || vf.has(vi) || !String(vi).startsWith(v1.art || '\x20')) return [vn, vk];
      let vA = Eh(vi);
      if (!vA) return [vn, vk];
      let vF = Math.abs(vL),
        vx = (vv[0x1] - vA[0x1]) * Math.abs(vj);
      return v3(vi) ? [vn + (vv[0x0] - vA[0x0]) * vF, vk + vx] : [vn + (0x2 * v9 - vv[0x0] - vA[0x0]) * vF, vk + vx];
    };
  HC.draw_sprite_ext = function (vi, vn, vk, vL, vj, vA, ...vF) {
    let [vx, vR] = vO(vi, vk, vL, vj, vA);
    return v3(vi) ? v6.call(this, vi, vn, vE(vi, vx, vj), vR, -vj, vA, ...vF) : v6.call(this, vi, vn, vx, vR, vj, vA, ...vF);
  }, v7 && (HC.draw_sprite_white = function (vi, vn, vk, vL, vj, vA, ...vF) {
    let [vx, vR] = vO(vi, vk, vL, vj, vA);
    return v3(vi) ? v7.call(this, vi, vn, vE(vi, vx, vj), vR, -vj, vA, ...vF) : v7.call(this, vi, vn, vx, vR, vj, vA, ...vF);
  });
  try {
    return v0();
  } finally {
    v4 ? HC.draw_sprite_ext = v6 : delete HC.draw_sprite_ext, v7 && (v5 ? HC.draw_sprite_white = v7 : delete HC.draw_sprite_white);
  }
}
En(Ea, 'mirrored');
var EG = new Map();
function Eh(Hg) {
  if (EG.has(Hg)) return EG.get(Hg);
  let HC = E1[Hg],
    v0 = HC && HC.img && HC.img[0x0];
  if (!v0 || !v0.width || typeof document > 'u') return null;
  try {
    let v1 = document.createElement('canvas');
    v1.width = HC.w, v1.height = HC.h;
    let v2 = v1.getContext('2d');
    v2.drawImage(v0, 0x0, 0x0, HC.w, HC.h);
    let v3 = v2.getImageData(0x0, 0x0, HC.w, HC.h).data,
      v4 = (vE, vH) => v3[(vH * HC.w + vE) * 0x4 + 0x3] > 0x0,
      v5 = -0x1;
    for (let vE = HC.h - 0x1; vE >= 0x0 && v5 < 0x0; vE--) for (let vH = 0x0; vH < HC.w; vH++) if (v4(vH, vE)) {
      v5 = vE;
      break;
    }
    if (v5 < 0x0) return EG.set(Hg, null), null;
    let v6 = HC.w,
      v7 = -0x1;
    for (let vv = Math.max(0x0, v5 - 0xb); vv <= v5; vv++) for (let vf = 0x0; vf < HC.w; vf++) v4(vf, vv) && (vf < v6 && (v6 = vf), vf > v7 && (v7 = vf));
    let v9 = [(v6 + v7) / 0x2 - HC.ox, v5 + 0x1 - HC.oy];
    return EG.set(Hg, v9), v9;
  } catch {
    return EG.set(Hg, null), null;
  }
}
En(Eh, 'anchorOf');
var Ez = 0x2e;
function Ew(Hg) {
  let HC = Ex[Hg];
  if (!HC || !HC.custom) return 0x2;
  if (HC.member.scale) return HC.member.scale;
  let v0 = E1[HC.sprites.idlesprite];
  return !v0 || !v0.h ? 0x2 : Math.min(0x2, Math.max(0x1, Math.round(0x8 * Ez / v0.h) / 0x4));
}
En(Ew, 'scaleFor');
var Ep = En(Hg => Hg.borrowedFrom && !(Ex[Hg.herokey] && Ex[Hg.herokey].custom) ? 0x2 : Ew(Hg.herokey), 'battleScale'),
  EJ = new Set();
function EP() {
  for (let Hg of K) {
    let HC = Hg.pack;
    !HC || EJ.has(HC) || l[HC] && l[HC].state === 'ready' && c(HC) || (EJ.add(HC), d(HC).then(() => T(HC)).catch(() => EJ.delete(HC)));
  }
}
En(EP, 'ensureArt');
function EN(Hg) {
  if (!Hg || String(Hg.partystats || '').toUpperCase() !== 'CUSTOM' || !Array.isArray(Hg.slots)) return [];
  let HC = new Set();
  for (let v0 of Hg.slots) {
    if (!v0) continue;
    let v1 = Hg.roster && Hg.roster[v0],
      v2 = Ex[v1 && v1.hero || ER[v0 - 0x1]];
    v2 && v2.member && v2.member.pack && HC.add(v2.member.pack);
  }
  return [...HC];
}
En(EN, 'packsForParty');
function EB(Hg) {
  let HC = [],
    v0 = [];
  if (Hg <= 0x6) {
    for (let v5 = 0x0; v5 < Hg; v5++) v0.push(Ev(0x18 + 0xd4 * v5 / (Hg - 0x1))), HC.push(Ev(0x80 - v5 * 0x6 - (v5 % 0x2 === 0x1 ? 0x32 : 0x0)));
    return [HC, v0];
  }
  let v1 = Math.max(0x3, Math.ceil(Hg / 0x7)),
    v2 = Math.ceil(Hg / v1),
    v3 = Math.floor(0x58 / (v1 - 0.5)),
    v4 = Math.min(0x38, Math.floor(0xd4 / Math.max(0x1, v2 - 0x1)));
  for (let v6 = 0x0; v6 < Hg; v6++) {
    let v7 = Math.floor(v6 / v1),
      v9 = v6 % v1;
    HC.push(0x54 + v9 * v3 + v7 % 0x2 * Math.floor(v3 / 0x2)), v0.push(0x18 + v7 * v4);
  }
  return [HC, v0];
}
En(EB, 'formation');
var Eu = En(() => 0x1, 'heroScale'),
  Eg = En((Hg, HC) => HC > 0x6 ? 0xc8 - Hg * 0x2 : 0xc8 - Hg * 0x14, 'heroDepth'),
  EC = 0xbe;
function H0(Hg, HC) {
  if (HC <= 0x3) return null;
  let v0 = J.myfight === 0x0 && J.charturn >= 0x0 && J.charturn < HC ? J.charturn : -0x1;
  if (HC > 0x6) return H1(Hg, HC, v0);
  let v1 = Math.min(HC, 0x6);
  v0 >= 0x0 && (Hg._hudPage = Math.floor(v0 / v1));
  let v2 = Math.min(Hg._hudPage | 0x0, Math.ceil(HC / v1) - 0x1),
    v3 = v2 * v1,
    v4 = Math.min(v1, HC - v3),
    v5 = [];
  for (let v9 = 0x0; v9 < v4; v9++) v5.push(v0 < 0x0 ? 0x280 / v4 : v3 + v9 === v0 ? EC : (0x280 - EC) / (v4 - 0x1));
  (!Hg._bw || Hg._bw.length !== v4 || Hg._bwFirst !== v3) && (Hg._bw = v5.slice(), Hg._bwFirst = v3);
  for (let vE = 0x0; vE < v4; vE++) Hg._bw[vE] += (v5[vE] - Hg._bw[vE]) * 0.4;
  let v6 = [],
    v7 = 0x0;
  for (let vH = 0x0; vH < v4; vH++) {
    let vv = Ev(v7);
    v7 += Hg._bw[vH], v6.push({
      'slot': v3 + vH,
      'x': vv,
      'w': Ev(v7) - vv
    });
  }
  return v6.first = v3, v6.total = HC, v6;
}
En(H0, 'boxLayout');
function H1(Hg, HC, v0) {
  let v1 = [],
    v2 = {};
  for (let vH = 0x0; vH < HC; vH++) {
    let vv = J.char[HN(vH)];
    if (!vv) continue;
    let vf = EX(vv);
    v2[vf] === void 0x0 && (v2[vf] = v1.length, v1.push({
      'key': vf,
      'slots': []
    })), v1[v2[vf]].slots.push(vH);
  }
  let v3 = [],
    v4 = 0x0;
  v0 >= 0x0 && (v3.push({
    'slot': v0,
    'x': 0x0,
    'w': EC
  }), v4 = EC);
  let v5 = 0x280 - v4,
    v6 = Math.max(0x1, Math.min(v1.length, Math.floor(v5 / 0x5a))),
    v7 = Math.ceil(v1.length / v6);
  if (v0 >= 0x0) {
    let vO = v1.findIndex(vi => vi.slots.includes(v0));
    vO >= 0x0 && (Hg._grpPage = Math.floor(vO / v6));
  }
  let v9 = Math.min(Hg._grpPage | 0x0, v7 - 0x1),
    vE = v1.slice(v9 * v6, v9 * v6 + v6);
  return vE.forEach((vi, vn) => {
    let vk = v4 + Math.round(v5 * vn / vE.length);
    v3.push({
      'group': vi.slots,
      'key': vi.key,
      'x': vk,
      'w': v4 + Math.round(v5 * (vn + 0x1) / vE.length) - vk
    });
  }), v3.crowd = !0x0, v3.total = HC, v3.turn = v0, v3.page = v9, v3.pages = v7, v3;
}
En(H1, 'crowdLayout');
function H2(Hg) {
  if (Hg === 'all') return !0x0;
  let HC = /^ch(\d+):(\d+)$/.exec(Hg);
  return HC ? J.chapter === Number(HC[0x1]) && J.encounterno === Number(HC[0x2]) : Ef.exists(Hg);
}
En(H2, 'scopeLive');
function H3(Hg, HC) {
  for (let v0 = 0x0; v0 < g(); v0++) {
    let v1 = J.char[v0];
    if (!(!v1 || v0 === HC) && EX(v1) === Hg) return v0;
  }
  return -0x1;
}
En(H3, 'partnerSlot');
function H4(Hg) {
  let HC = J.char[Hg],
    v0 = ES(HC);
  if (!v0) return null;
  let v1 = [],
    v2 = new Set(),
    v3 = 0xc - v0.spells.length,
    v4 = v6 => {
      v2.has(v6.name) || (v6.partners || []).some(v7 => H3(v7, Hg) < 0x0) || (v2.add(v6.name), v1.push(v6));
    };
  for (let [v6, v7] of Object.entries(v0.acts)) v6 !== 'all' && H2(v6) && v7.forEach(v4);
  (v0.acts.all || []).forEach(v4);
  let v5 = v9 => !v9.partners && (v0.acts.all || []).includes(v9);
  for (let v9 of [vE => v5(vE) && vE.spare, v5, () => !0x0]) for (let vE = v1.length - 0x1; vE >= 0x0 && v1.length > v3; vE--) v9(v1[vE]) && v1.splice(vE, 0x1);
  return {
    'acts': v1.map(vH => vH.id),
    'spells': v0.spells.map(vH => vH.id)
  };
}
En(H4, 'menuIds');
var H5 = En((Hg, HC) => b(Hg, HC), 'info');
function H6(Hg, HC) {
  J.spell[Hg] || (J.spell[Hg] = []);
  for (let v0 = 0x0; v0 < 0xc; v0++) J.spell[Hg][v0] = HC[v0] || 0x0;
  for (let v1 of ['spellname', 'spellnameb', 'spellcost', 'spelldescb', 'spelltarget']) J[v1] || (J[v1] = []), J[v1][Hg] || (J[v1][Hg] = []);
  for (let v2 = 0x0; v2 < 0xc; v2++) {
    let v3 = H5(J.spell[Hg][v2], Hg);
    J.spellname[Hg][v2] = v3.spellname, J.spellnameb[Hg][v2] = v3.spellnameb, J.spellcost[Hg][v2] = v3.cost, J.spelldescb[Hg][v2] = v3.spelldescb, J.spelltarget[Hg][v2] = v3.spelltarget;
  }
}
En(H6, 'writeSpellList');
var H7 = ['battlespell', 'battlespellname', 'battlespelldesc', 'battlespellcost', 'battlespelltarget', 'battlespellspecial'];
function H8(Hg) {
  for (let HC of H7) Array.isArray(J[HC]) || (J[HC] = []), Array.isArray(J[HC][Hg]) || (J[HC][Hg] = new Array(0x12).fill(HC === 'battlespellname' || HC === 'battlespelldesc' ? '\x20' : HC === 'battlespelltarget' ? 0x2 : 0x0));
  Array.isArray(J.battleactcount) || (J.battleactcount = []), J.battleactcount[Hg] === void 0x0 && (J.battleactcount[Hg] = 0x0);
}
En(H8, 'ensureRow');
function H9(Hg, HC, v0) {
  H8(Hg);
  let v1 = HC.concat(v0),
    v2 = J.char[Hg];
  J.battleactcount[Hg] = HC.length;
  for (let v3 = 0x0; v3 < 0x12; v3++) {
    let v4 = v1[v3] || 0x0,
      v5 = H5(v4, v2);
    J.battlespell[Hg][v3] = v4, J.battlespellname[Hg][v3] = v4 ? v5.spellnameb : '\x20', J.battlespelldesc[Hg][v3] = v4 ? v5.spelldescb : '\x20', J.battlespellcost[Hg][v3] = v4 ? v5.cost : 0x0, J.battlespelltarget[Hg][v3] = v5.spelltarget, J.battlespellspecial[Hg][v3] = v3 < HC.length ? 0x1 : 0x0;
  }
}
En(H9, 'writeRow');
var HE = {
    0x1: '',
    0x2: 'sus',
    0x3: 'ral',
    0x4: 'noe'
  },
  HH = {
    'kris': '',
    'susie': 'sus',
    'ralsei': 'ral'
  },
  Hv = {
    '': 0x1,
    'sus': 0x2,
    'ral': 0x3,
    'noe': 0x4
  },
  Hf = En(Hg => Hg > 0x3 && (EX(Hg) === 'susie' || EX(Hg) === 'ralsei') ? HH[EX(Hg)] : void 0x0, 'recruitFam');
function HO(Hg) {
  let HC = J.char[Hg],
    v0 = Hf(HC),
    v1 = v0 !== void 0x0 ? v0 : HE[HC];
  H8(Hg);
  let v2 = [0x1, 0x2].some(v4 => J.monster[v4] === 0x1 && J.monstertype[v4] !== J.monstertype[0x0]),
    v3 = 0x0;
  for (let v4 = 0x0; v4 < 0x6; v4++) {
    if (J.battlespell[Hg][v4] = 0x0, v1 === void 0x0) continue;
    let v5 = J['canact' + v1] && J['canact' + v1][0x0];
    v5 && v5[v4] === 0x1 && (J.battlespell[Hg][v4] = -0x1, v3 = v4 + 0x1, J.battlespellcost[Hg][v4] = J['actcost' + v1][0x0][v4], J.battlespellname[Hg][v4] = J['actname' + v1][0x0][v4], J.battlespelldesc[Hg][v4] = J['actdesc' + v1][0x0][v4], J.battlespelltarget[Hg][v4] = v1 === '' ? 0x0 : 0x2, J.battlespellspecial[Hg][v4] = Hv[v1], v2 && v0 !== void 0x0 && v1 && (J.battlespellname[Hg][v4] = v1 === 'sus' ? "S-Action" : "R-Action"));
  }
  J.battleactcount[Hg] = v3;
  for (let v6 = 0x0; v6 < 0xc; v6++) {
    let v7 = v3 + v6,
      v9 = (J.spell[HC] || [])[v6] || 0x0,
      vE = H5(v9, HC);
    J.battlespell[Hg][v7] = v9, J.battlespellcost[Hg][v7] = vE.cost, J.battlespellname[Hg][v7] = vE.spellnameb, J.battlespelldesc[Hg][v7] = vE.spelldescb, J.battlespelltarget[Hg][v7] = vE.spelltarget, J.battlespellspecial[Hg][v7] = 0x0;
  }
}
En(HO, 'canonRow');
function Hi(Hg) {
  let HC = J.battlespell && J.battlespell[Hg];
  if (HC) {
    for (let v0 = 0x0; v0 < HC.length; v0++) if (G(HC[v0])) {
      let v1 = H5(HC[v0], J.char[Hg]);
      J.battlespellname[Hg][v0] = v1.spellnameb, J.battlespelldesc[Hg][v0] = v1.spelldescb, J.battlespellcost[Hg][v0] = v1.cost, J.battlespelltarget[Hg][v0] = v1.spelltarget;
    }
  }
}
En(Hi, 'fixRow');
var Hn = En(() => J.chapter !== 0x1 && J.flag && J.flag[0x22] === 0x0, 'techMenu');
function Hk() {
  let Hg = g();
  if (!(Hg <= 0x3 && !Eq() && !J.char.some(HC => HC && Hf(HC) !== void 0x0))) for (let HC = 0x0; HC < Hg; HC++) {
    let v0 = J.char[HC];
    if (!v0) continue;
    let v1 = H4(HC);
    if (v1) {
      H6(v0, v1.acts.concat(v1.spells)), Hn() && H9(HC, v1.acts, v1.spells);
      continue;
    }
    Hn() && (HC >= 0x3 || Hf(v0) !== void 0x0) && HO(HC), Hn() && Hi(HC);
  }
}
En(Hk, 'menuSetup');
function HL(Hg) {
  let HC = Eb(Hg);
  return HC ? HC.spells.map(v0 => v0.id) : [];
}
En(HL, 'extraSpells');
var Hj = {},
  HA = En(Hg => Object.values(Hj).some(HC => HC.some(v0 => v0.slot === Hg)), 'joined'),
  HF = En(Hg => {
    let HC = J.charaction[Hg] | 0x0;
    return HC === 0x0 || HC === 0x1 || HC === 0xa;
  }, 'freeFor');
function Hx(Hg, HC) {
  for (let v0 = 0x0; v0 < g(); v0++) {
    let v1 = J.char[v0];
    if (!(!v1 || v0 === HC || EX(v1) !== Hg) && J.hp[v1] > 0x0 && J.charmove[v0] === 0x1 && !HA(v0) && (v0 > HC || HF(v0))) return v0;
  }
  return -0x1;
}
En(Hx, 'readyPartner');
function HR(Hg, HC) {
  let v0 = t(Hg);
  return !v0 || !v0.entry.partners ? !0x0 : v0.entry.partners.every(v1 => Hx(v1, HC) >= 0x0);
}
En(HR, 'partnersReady');
function Hs(Hg, HC) {
  let v0 = t(Hg);
  !v0 || !v0.entry.partners || (Hj[HC] = v0.entry.partners.map(v1 => {
    let v2 = Hx(v1, HC),
      v3 = {
        'charaction': J.charaction[v2],
        'faceaction': J.faceaction[v2],
        'chartarget': J.chartarget[v2],
        'charspecial': J.charspecial[v2]
      };
    return J.charaction[v2] = 0x9, J.faceaction[v2] = 0x6, J.charspecial[v2] = 0x0, {
      'slot': v2,
      'prev': v3
    };
  }));
}
En(Hs, 'commitJoin');
function HQ(Hg) {
  let HC = Hj[Hg];
  if (HC) {
    for (let {
      slot: v0,
      prev: v1
    } of HC) J.charaction[v0] = v1.charaction, J.faceaction[v0] = v1.faceaction, J.chartarget[v0] = v1.chartarget, J.charspecial[v0] = v1.charspecial;
    delete Hj[Hg];
  }
}
En(HQ, 'undoJoin');
function HY() {
  Hj = {};
}
En(HY, 'clearJoins');
var Hl = class vs extends E8 {
  ["create"]() {
    Object.assign(this, {
      't': 0x0,
      'life': 0x0,
      'fade': 0x0,
      'spin': 0x0,
      'trail': 0x0,
      'target': null,
      'home': 0x0,
      'onHit': null,
      'hit': 0x0,
      'grow': 0x0,
      'image_xscale': 0x2,
      'image_yscale': 0x2,
      'image_speed': 0.25
    });
  }
  ["step"]() {
    if (this.t++, this.target && !this.hit) {
      let [Hg, HC] = this.target;
      if (this.home > 0x0) {
        let v0 = (EE(this.x, this.y, Hg, HC) - this.direction + 0x21c) % 0x168 - 0xb4;
        this.direction += v0 / this.home;
      }
      if (EH(this.x, this.y, Hg, HC) <= Math.max(0x10, this.speed) && (this.hit = 0x1, this.x = Hg, this.y = HC, this.speed = 0x0, this.onHit && this.onHit(this), !this.linger)) {
        this.instance_destroy();
        return;
      }
    }
    if (this.spin && (this.image_angle += this.spin), this.grow && (this.image_xscale += this.grow, this.image_yscale += this.grow), this.trail && this.t % this.trail === 0x0) {
      let v1 = E0(this.x, this.y, S);
      Object.assign(v1, {
        'sprite_index': this.sprite_index,
        'image_index': this.image_index,
        'image_speed': 0x0,
        'image_angle': this.image_angle,
        'image_xscale': this.image_xscale,
        'image_yscale': this.image_yscale,
        'image_blend': this.image_blend,
        'image_alpha': this.image_alpha * 0.6,
        'depth': this.depth + 0x1,
        'fadeSpeed': 0.1
      });
    }
    if (this.fade && (this.image_alpha -= this.fade, this.image_alpha <= 0x0)) {
      this.instance_destroy();
      return;
    }
    this.life && this.t >= this.life && this.instance_destroy();
  }
};
En(Hl, 'obj_partyfx'), Ek(Hl, 'kinds', E9('obj_partyfx', E8)), Ek(Hl, 'defaultDepth', -0x14);
var HD = Hl,
  HT = En(Hg => !!(Hg && E1[Hg]), 'hasSpr');
function Hc(Hg) {
  if (J.monster[Hg] === 0x1) return Hg;
  for (let HC = 0x0; HC < 0x3; HC++) if (J.monster[HC] === 0x1) return HC;
  return Hg;
}
En(Hc, 'retarget');
function HI(Hg, HC) {
  let v0 = J.char[HC],
    v1 = p(Hg.entry) === 0x1 ? J.chartarget[HC] | 0x0 : Hc(J.chartarget[HC] | 0x0),
    v2 = J.charinstance && J.charinstance[HC],
    v3 = J.monsterinstance && J.monsterinstance[v1],
    v4 = vE => {
      let vH = (Hj[HC] || []).find(vv => EX(J.char[vv.slot]) === vE);
      return vH ? vH.slot : -0x1;
    },
    v5 = vE => vE === 'me' || vE === void 0x0 ? HC : typeof vE == 'number' ? vE : v4(vE) >= 0x0 ? v4(vE) : H3(vE, HC),
    v6 = vE => {
      let vH = v5(vE);
      return vH >= 0x0 && J.charinstance ? J.charinstance[vH] : null;
    },
    v7 = vE => vE ? [vE.x + (vE.mywidth || 0x3c) / 0x2, vE.y + (vE.myheight || 0x46) / 0x2] : [0x64, 0x96],
    v9 = {
      'G': J,
      'caster': HC,
      'star': v1,
      'id': v0,
      'me': v2,
      'enemy': v3,
      'entry': Hg.entry,
      'name': J.charname[v0] || Hg.member && Hg.member.name || '',
      'enemyName': J.monstername && J.monstername[v1] || "the enemy",
      'mag': J.battlemag[HC] | 0x0,
      'at': J.battleat[HC] | 0x0,
      'df': (J.monsterdf && J.monsterdf[v1]) | 0x0,
      'random': vE => E7(vE),
      'pick': vE => vE[Math.min(vE.length - 0x1, Math.floor(E7(vE.length)))],
      'enemyIs': vE => !!(v3 && !v3.destroyed && v3.is && v3.is(vE)),
      'inFight': vE => Ef.exists(vE),
      'tired': (vE = v1) => J.monsterstatus[vE] === 0x1,
      'mercyOf': (vE = v1) => J.mercymod[vE] | 0x0,
      'hpOf': vE => {
        let vH = v5(vE);
        return vH >= 0x0 ? J.hp[J.char[vH]] : 0x0;
      },
      'slotOf': v5,
      'nameOf': vE => {
        let vH = v5(vE);
        return vH >= 0x0 ? J.charname[J.char[vH]] : '';
      },
      'live': () => [0x0, 0x1, 0x2].filter(vE => J.monster[vE] === 0x1),
      'party': () => {
        let vE = [];
        for (let vH = 0x0; vH < g(); vH++) J.char[vH] && vE.push(vH);
        return vE;
      },
      'snd': (vE, vH) => E2(vE, vH),
      'sndShort': (vE, vH, vv) => {
        let vf = E2(vE, {
          'volume': vH
        });
        return vf && vv && EO(vf, 0x0, vv), vf;
      },
      'stop': vE => E3(vE),
      'delay': vE => {
        J.spelldelay = vE;
      },
      'tp': vE => V(Ev(vE / 0x64 * J.maxtension)),
      'mercy': (vE, vH = v1) => {
        J.monster[vH] === 0x1 && o(vH, vE);
      },
      'tire': (vE = v1) => {
        if (J.monster[vE] === 0x1 && (J.monsterstatus[vE] = 0x1, J.monstercomment[vE] = "(Tired)", J.chapter >= 0x3 && m.dmgwriter)) {
          let vH = m.dmgwriter(J.monsterx[vE], J.monstery[vE] + 0x14 - J.hittarget[vE] * 0x14);
          vH.type = 0xd;
        }
      },
      'damage': (vE, vH = v1) => {
        J.monster[vH] === 0x1 && W(vH, Math.max(0x0, Ei(vE)), HC);
      },
      'heal': (vE, vH) => {
        let vv = v5(vE);
        vv < 0x0 || !J.char[vv] || (r(vv, Ei(vH)), EM.healFx(vv, Ei(vH)));
      },
      'healAll': vE => {
        for (let vH = 0x0; vH < g(); vH++) J.char[vH] && (r(vH, Ei(vE)), EM.healFx(vH, Ei(vE)));
      },
      'pose': (vE, vH, vv = 0x1e, vf = 0.25) => {
        let vO = v6(vE);
        vO && (vH === 'attack' && (vH = vO.attacksprite, vf = vO.attackspeed || 0.5, vv = Ei(((vO.attackframes | 0x0) + 0x1) / vf) + 0x4), vH !== 'act' && !HT(vH) && (vH = vO.idlesprite), vO._pose = {
          'sprite': vH,
          'frames': vv,
          'speed': vf
        });
      },
      'hide': (vE, vH = 0x14) => {
        let vv = v6(vE);
        vv && (vv.visible = !0x1, vv._hideT = vH);
      },
      'at_': vE => v7(v6(vE)),
      'enemyAt': (vE = v1) => [J.monsterx[vE] + 0x14, J.monstery[vE] + 0x1e],
      'spawn': (vE, vH, vv, vf = {}) => {
        let vO = E0(vH, vv, HD);
        HT(vE) || (vO.visible = !0x1), vO.sprite_index = vE, vO.image_index = vf.frame || 0x0, vO.image_speed = vf.animate ?? 0.25, vf.scale && (vO.image_xscale = vf.scale, vO.image_yscale = vf.scale), vf.flip && (vO.image_xscale = -vO.image_xscale), vf.blend && (vO.image_blend = vf.blend), vf.depth !== void 0x0 && (vO.depth = vf.depth);
        let vi = vf.to === 'enemy' ? v9.enemyAt() : vf.to;
        return vi ? (vO.target = vi, vO.direction = vf.direction ?? EE(vH, vv, vi[0x0], vi[0x1]), vO.speed = vf.speed || 0x10, vO.home = vf.home || 0x0) : vf.speed && (vO.direction = vf.direction || 0x0, vO.speed = vf.speed), Object.assign(vO, {
          'life': vf.life || (vi ? 0x78 : 0x0),
          'fade': vf.fade || 0x0,
          'spin': vf.spin || 0x0,
          'trail': vf.trail || 0x0,
          'grow': vf.grow || 0x0,
          'linger': !!vf.linger
        }), vf.angle !== void 0x0 && (vO.image_angle = vf.angle), vf.onHit && (vO.onHit = () => vf.onHit(vO)), vO;
      },
      'burst': (vE, vH, vv, vf = 0x8, vO = {}) => {
        for (let vi = 0x0; vi < vf; vi++) v9.spawn(vE, vH, vv, {
          'direction': 0x168 / vf * vi + (vO.turn || 0x0),
          'speed': vO.speed || 0x8,
          'fade': vO.fade || 0.06,
          'scale': vO.scale,
          'spin': vO.spin,
          'animate': vO.animate,
          'blend': vO.blend,
          'angle': vO.angle ?? 0x168 / vf * vi
        });
      },
      'flash': (vE = v1) => {
        let vH = J.monsterinstance && J.monsterinstance[vE];
        vH && !vH.destroyed && (vH.flash = 0x1, vH.becomeflash = 0x1, vH.fsiner = 0x0);
      },
      'shake': () => {
        m.shake && m.shake();
      }
    };
  return v9;
}
En(HI, 'makeFx');
var Hd = En(Hg => Hg && Hg.speaker || '', 'speakerCode');
function HU(Hg, HC) {
  let v0 = [];
  return Hg.filter(v1 => v1 != null && v1 !== '').forEach(v1 => {
    let v2 = v1[0x0] === '!';
    v0.push(v2 ? '\x5cW' + Hd(HC) + v1.slice(0x1) : "\\W0" + v1);
  }), v0.map((v1, v2) => v1 + (v2 === v0.length - 0x1 ? '/%' : '/'));
}
En(HU, 'pages');
function HM(Hg, HC) {
  return ['*\x20' + HC.name + " tried " + String(Hg.entry.name).toUpperCase() + "...", "* But " + HC.enemyName + " didn't notice."];
}
En(HM, 'failLines');
var Hy = En((Hg, HC) => Hg.kind === 'act' && Hg.scope !== 'all' && !/^ch\d+:/.test(Hg.scope) && Ef.exists(Hg.scope) && Ef.first(Hg.scope).is('obj_monsterparent') && !HC.enemyIs(Hg.scope), 'scopedMiss');
function HX(Hg, HC) {
  let v0 = t(Hg);
  if (!v0) return !0x1;
  let v1 = HI(v0, HC),
    v2 = Hy(v0, v1) ? HM(v0, v1) : typeof v0.entry.text == 'function' ? v0.entry.text(v1) : v0.entry.text;
  return (!v2 || !v2.length) && (v2 = ['*\x20' + v1.name + " used " + String(v0.entry.name).toUpperCase() + '!']), typeof v2 == 'string' && (v2 = [v2]), J.msg = new Array(0x64).fill('\x20'), HU(v2, v0.member).forEach((v3, v4) => {
    J.msg[v4] = v3;
  }), !0x0;
}
En(HX, 'spellText');
function HZ(Hg) {
  if (!t(Hg)) return null;
  J.fc = 0x0, J.typer = 0x4;
  let HC = X();
  return Ef.exists('obj_face') || E0(0x1a, 0x17c, y), HC;
}
En(HZ, 'spellWriter');
function HS(Hg, HC) {
  let v0 = t(Hg);
  if (!v0) return !0x1;
  J.spelldelay = v0.entry.delay ?? 0x1e;
  let v1 = HI(v0, HC);
  if (Hy(v0, v1)) return !0x0;
  for (let v2 of v0.entry.partners || []) v1.pose(v2, 'act');
  return typeof v0.entry.cast == 'function' && v0.entry.cast(v1), !0x0;
}
En(HS, 'cast');
var Hb = En(Hg => {
  let HC = t(Hg);
  return !!HC && HC.kind === 'act';
}, 'isAct');
function HV(Hg, HC) {
  let v0 = t(HC);
  !Hg || !v0 || v0.kind !== 'spell' || !v0.entry.pose || !HT(v0.entry.pose) || (Hg._spellsprite === void 0x0 && (Hg._spellsprite = Hg.spellsprite, Hg._spellframes = Hg.spellframes), Hg.spellsprite = v0.entry.pose, Hg.spellframes = (E1[v0.entry.pose].frames || 0x1) - 0x1, Hg.spellspeed = v0.entry.poseSpeed || 0.5);
}
En(HV, 'castPose');
function Hq(Hg, HC) {
  let v0 = t(HC);
  !Hg || !v0 || !v0.entry.pose || !HT(v0.entry.pose) || (Hg._actsprite === void 0x0 && (Hg._actsprite = Hg.actsprite), Hg.actsprite = v0.entry.pose);
}
En(Hq, 'actPose');
var Ho = En(Hg => {
    let HC = t(Hg);
    return HC ? HC.entry.ap || (HC.kind === 'act' ? 'mercy' : p(HC.entry) === 0x1 ? 'heal' : 'damage') : null;
  }, 'spellKind'),
  Hm = ['char', 'charinstance', 'charaction', 'faceaction', 'charspecial', 'chartarget', 'targeted', 'charmove', 'charcantarget', 'chardead', 'charcond', 'battleat', 'battledf', 'battlemag', 'acting', 'actingsingle', 'actingsimul', 'actingtarget', 'temptension', 'heromakex', 'heromakey'],
  HW = null,
  HK = En(Hg => J.char[Hg] && J.hp[J.char[Hg]] > 0x0, 'alive');
function Ha(Hg) {
  for (let HC of Hm) {
    let v0 = J[HC];
    if (!Array.isArray(v0)) continue;
    let v1 = v0.slice();
    for (let v2 = 0x0; v2 < Hg.length; v2++) v0[v2] = v1[Hg[v2]];
  }
  for (let v3 = 0x0; v3 < Hg.length; v3++) {
    let v4 = J.charinstance[v3];
    v4 && (v4.myself = v3);
  }
}
En(Ha, 'permute');
function HG(Hg) {
  let HC = [],
    v0 = new Set();
  for (let v1 = 0x0; v1 < 0x3; v1++) {
    let v2 = [];
    for (let v4 = v1; v4 < Hg; v4 += 0x3) HK(v4) && J.charcantarget[v4] === 0x1 && v2.push(v4);
    let v3 = v2.length ? v2[Math.min(v2.length - 0x1, Math.floor(E7(v2.length)))] : v1;
    HC.push(v3), v0.add(v3);
  }
  for (let v5 = 0x0; v5 < Hg; v5++) v0.has(v5) || HC.push(v5);
  return HC;
}
En(HG, 'pickOrder');
function Hh(Hg, HC) {
  return HC.map(v0 => Hg[v0]);
}
En(Hh, 'compose');
function Hw(Hg) {
  let HC = g();
  if (!(HC <= 0x3)) {
    if (J.charturn === 0x3 && !(J.myfight === 0x0 && J.mnfight === 0x0) && (J.charturn = HC), J.myfight === 0x0) Hg._lateSpells = 0x0;else {
      if (J.myfight === 0x4) Hg._lateSpells = 0x1;else {
        if (J.myfight === 0x1 && !Hg._lateSpells && Ef.exists('obj_attackpress') && !Ef.exists('obj_spellphase')) {
          let v0 = !0x1;
          for (let v2 = 0x3; v2 < HC; v2++) (J.charaction[v2] === 0x2 || J.charaction[v2] === 0x4) && (v0 = !0x0);
          let v1 = v0 ? C('obj_spellphase') : null;
          v1 && (Ef.with('obj_attackpress', v3 => v3.instance_destroy()), J.myfight = 0x4, Hg._lateSpells = 0x1, E0(0x0, 0x0, v1));
        }
      }
    }
    if (HP('scr_damage', !0x1), HP('scr_damage_all', !0x0), HW === null && J.battleover == null && Hg.victory !== 0x1 && (J.mnfight === 0x1 || J.mnfight === 1.5 || J.mnfight === 0x2)) {
      let v3 = HG(HC);
      Ha(v3), HW = {
        'ord': v3,
        'flag35': J.flag[0x23]
      }, J.flag[0x23] === 0x0 && (J.flag[0x23] = 0x7);
      return;
    }
    if (HW !== null) {
      if (J.mnfight === 0x0 && J.myfight === 0x0) {
        Hp();
        return;
      }
      if ([0x0, 0x1, 0x2].every(v4 => !HK(v4))) {
        let v4 = !0x1;
        for (let v5 = 0x3; v5 < HC; v5++) HK(v5) && (v4 = !0x0);
        if (v4) {
          let v6 = HG(HC);
          Ha(v6), HW.ord = Hh(HW.ord, v6);
        } else J.battleover == null && (J.flag[0x23] = HW.flag35, m.gameover && m.gameover());
      }
    }
  }
}
En(Hw, 'laneStep');
function Hp() {
  if (HW === null) return;
  let Hg = [];
  HW.ord.forEach((HC, v0) => {
    Hg[HC] = v0;
  }), Ha(Hg), J.flag[0x23] === 0x7 && (J.flag[0x23] = HW.flag35), HW = null;
}
En(Hp, 'laneEnd');
function HJ(Hg) {
  let HC = g();
  if (!(!HW || HC <= 0x3)) for (let v0 = 0x3; v0 < HC; v0++) {
    let v1 = J.char[v0];
    if (!v1 || !(J.hp[v1] > 0x0)) continue;
    let v2 = Math.max(0x1, Ei((Hg.damage | 0x0) - (J.battledf[v0] | 0x0) * 0x3));
    J.charaction[v0] === 0xa && (v2 = Ei(0x3 * v2 / 0x4)), J.hp[v1] -= v2;
    let v3 = J.charinstance[v0];
    v3 && (v3.hurt = 0x1, v3.hurttimer = 0x0), J.hp[v1] <= 0x0 && (J.hp[v1] = Ev(-J.maxhp[v1] / 0x2), J.charmove[v0] = 0x0, J.charcantarget[v0] = 0x0, J.chardead[v0] = 0x1, J.charaction[v0] = 0x0);
  }
}
En(HJ, 'backHit');
function HP(Hg, HC) {
  let v0 = m[Hg];
  if (typeof v0 != 'function' || v0.__lanes) return;
  let v1 = function (...v2) {
    let v3 = J.inv,
      v4 = v0.apply(this, v2);
    return HW && v3 < 0x0 && J.inv >= 0x0 && (HC || this.target === 0x3) && HJ(this), v4;
  };
  v1.__lanes = !0x0, m[Hg] = v1;
}
En(HP, 'wrapAll');
var HN = En(Hg => HW ? HW.ord.indexOf(Hg) : Hg, 'slotOfOriginal');
function HB() {
  HW = null, Hj = {};
}
En(HB, 'resetForFight'), E4(HB);
function Hu() {
  if (!J.charinstance) return;
  for (let HC of J.charinstance) {
    if (!HC) continue;
    let v0 = HC._pose;
    v0 && HC.state === 0x0 && !(HC._hideT > 0x0) && J.hp[J.char[HC.myself]] > 0x0 && (HC._pose = null, v0.sprite === 'act' ? (HC.state = 0x6, HC.acttimer = 0x0) : Object.assign(HC, {
      'state': 0x8,
      'sprite_index': v0.sprite,
      'image_index': 0x0,
      'image_speed': v0.speed,
      '_poseT': v0.frames
    })), HC._actsprite !== void 0x0 && HC.state !== 0x6 && (HC.actsprite = HC._actsprite, HC._actsprite = void 0x0), HC._hideT > 0x0 && --HC._hideT === 0x0 && (HC.visible = !0x0), HC._spellsprite !== void 0x0 && HC.state !== 0x2 && (HC.spellsprite = HC._spellsprite, HC.spellframes = HC._spellframes, HC._spellsprite = void 0x0, HC.spellspeed = void 0x0), HC._poseT > 0x0 && (HC._poseT--, HC._poseT === 0x0 && HC.state === 0x8 && (HC.state = 0x0, HC.image_speed = 0x0));
  }
  let Hg = g();
  if (Hg > 0x6) for (let v1 of J.charinstance) {
    if (!v1) continue;
    let v2 = J.myfight === 0x0 && J.mnfight === 0x0 && v1.myself === J.charturn;
    v1.depth = v2 ? 0x64 : Eg(v1.myself, Hg);
    let v3 = (J.heromakex || [])[v1.myself];
    v3 !== void 0x0 && v1.state === 0x0 && (v1.x = v3 + (v2 ? 0x10 : 0x0));
    let v4 = (J.heromakey || [])[v1.myself];
    v1.depthShade = v2 || v4 === void 0x0 ? 0x0 : 0.45 * Math.max(0x0, Math.min(0x1, (0xec - v4) / 0xd4));
  }
}
En(Hu, 'poseStep');
export { Ex as a, ER as b, Es as c, EQ as d, EY as e, EU as f, Ey as g, EX as h, EZ as i, EW as j, EK as k, Ea as l, Eh as m, Ew as n, Ep as o, EP as p, EN as q, EB as r, Eu as s, Eg as t, H0 as u, Hk as v, HL as w, HA as x, HR as y, Hs as z, HQ as A, HY as B, HX as C, HZ as D, HS as E, Hb as F, HV as G, Hq as H, Ho as I, Hw as J, Hp as K, HN as L, Hu as M };