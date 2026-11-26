import { h as x } from "./c-IKEEXWRQ.js";
import { a as l, k as T, l as c, o as d } from "./c-SUMRYW3E.js";
import { b as U, d as y, f as X } from "./c-3ELH3LBH.js";
import { b as S } from "./c-MYK6C3LF.js";
import { E as b, G as V, M as o, N as r, P as m, V as W, b as K, c as a, d as G, e as t, f as p, g as J, l as u, q as g } from "./c-ZQQWH6UG.js";
import { Fb as C, Ib as E0, N as E1, Ra as E2, Ta as E3, Xb as E4, h as E5, l as E6, o as E7, pb as E8, qb as E9, u as EE, v as EH, x as Ev, xb as Ef, xc as EO, y as Ei } from "./c-PBMEVLU6.js";
import { a as En, e as Ek, l as EL } from "./c-XSSGDLV7.js";
EL();
EL();
EL();
var Ej = En(Hg => Hg + "@ch5", "F");
var EA = {
  id: "flowery",
  name: "Flowery",
  chapter: 5,
  pack: 5,
  base: 10,
  color: "#ffa040",
  dmgtype: 6,
  head: Ej("spr_headflowery"),
  namesprite: null,
  stats: {
    at: 24,
    df: 3,
    mag: 12,
    maxhp: 750
  },
  weapons: 34,
  armors: [0, 0],
  equip: {
    weapons: [34, 35],
    armors: true
  },
  facesLeft: true,
  art: "spr_flowery_",
  mirrorAxis: 13,
  scale: 1.5,
  anchorSkip: [Ej("spr_flowery_kick")],
  facesRight: [Ej("spr_flowery_float_shrug_shake_right"), Ej("spr_flowery_crouch_center_srs")],
  worn: [["dance|pirouette", Ej("spr_flowery_pirouette")], ["lawyer", Ej("spr_flowery_pose_point_cooler")], ["offer", Ej("spr_flowery_offer_tickets")], ["cook", Ej("spr_flowery_diner_pour_orange_toss")], ["blow_wind", Ej("spr_flowery_wind")], ["papersnow", Ej("spr_flowery_blown")], ["shock|surprised", Ej("spr_flowery_turn_shocked_more")], ["sad|looks_down|head_down", Ej("spr_flowery_sad_downleft")], ["annoyed|mad|facepalm", Ej("spr_flowery_shake_head")], ["laugh|happy|smile|clap|funnyface", Ej("spr_flowery_idle3_blush")], ["flutter|uniform", Ej("spr_flowery_jacket_flutter")], ["pose|lightemup|sing|cowboy|zoosuit|maneki|chicken|peace", Ej("spr_flowery_pose")]],
  sprites: {
    normalsprite: Ej("spr_flowery_idle"),
    idlesprite: Ej("spr_flowery_idle"),
    defendsprite: Ej("spr_flowery_crouch_center_srs"),
    hurtsprite: Ej("spr_flowery_hurt"),
    attackreadysprite: Ej("spr_flowery_punch_windup"),
    attacksprite: Ej("spr_flowery_puuunch_left"),
    actreadysprite: Ej("spr_flowery_pose_point_cooler"),
    actsprite: Ej("spr_flowery_condescend"),
    spellreadysprite: Ej("spr_flowery_float_shrug_shake_right"),
    spellsprite: Ej("spr_flowery_poweringup"),
    itemreadysprite: Ej("spr_flowery_fistbump_offer"),
    itemsprite: Ej("spr_flowery_offer_tickets"),
    defeatsprite: Ej("spr_flowery_cut2"),
    victorysprite: Ej("spr_flowery_pirouette")
  },
  frames: {
    idlespeed: 0.16666666666666666,
    attackframes: 1,
    attackspeed: 0.5,
    actframes: 6,
    actreturnframes: 10,
    spellframes: 4,
    itemframes: 3,
    defendframes: 0,
    victoryframes: 7
  },
  size: {
    mywidth: 52,
    myheight: 120
  },
  attack: {
    slash: "spr_attack_mash1",
    sound: "snd_punchmed",
    pitch: 1.1
  },
  voice: ["snd_flowery_voicenoise_1", "snd_flowery_voicenoise_2", "snd_flowery_voicenoise_3"],
  face: {
    sprite: Ej("spr_face_flowery"),
    dx: 8,
    dy: 0
  },
  spells: [{
    name: "PetalShot",
    desc: "Petal#damage",
    tp: 30,
    target: "enemy",
    delay: 50,
    ap: "damage",
    pose: Ej("spr_flowery_kiss"),
    poseSpeed: 0.25,
    text: En(Hg => ["* " + Hg.name + " blew a PETAL SHOT!", "!\\E2* Take that!"], "text"),
    cast(Hg) {
      Hg.snd("snd_flowery_voiceclip_take_that");
      Hg.snd("snd_petaldrain");
      let [HC, v0] = Hg.at_("me");
      let [v1, v2] = Hg.enemyAt();
      let v3 = Hg.mag * 7 + Hg.at * 6 - Hg.df * 3;
      for (let v4 = 0; v4 < 7; v4++) {
        Hg.spawn(Ej("spr_spinning_petal"), HC + 24, v0 - 30, {
          to: [v1, v2],
          speed: 7 + v4 * 0.6,
          home: 6 + v4,
          direction: 95 - v4 * 22,
          spin: 30,
          trail: 2,
          scale: 2,
          onHit: v4 === 6 ? () => {
            Hg.damage(v3);
            Hg.snd("snd_punchmed");
            Hg.flash();
            Hg.burst(Ej("spr_petalwing"), v1, v2, 6, {
              speed: 5,
              fade: 0.05,
              scale: 1
            });
          } : () => Hg.snd("snd_bell", {
            volume: 0.25,
            pitch: 1.2 + v4 * 0.1
          })
        });
      }
    }
  }, {
    name: "HealPollen",
    short: "Pollen",
    desc: "Heal#Ally",
    tp: 32,
    target: "ally",
    delay: 40,
    ap: "heal",
    pose: Ej("spr_flowery_shrug_spin"),
    poseSpeed: 0.25,
    text: En(Hg => ["* " + Hg.name + " scattered HEALING POLLEN!", "!\\E2* Just leaf it to me!"], "text"),
    cast(Hg) {
      let HC = Hg.star;
      let [v0, v1] = Hg.at_(HC);
      Hg.snd("snd_flowery_voiceclip_leaf_it_to_me");
      Hg.sndShort("snd_petal_recover", 0.7, 30);
      {
        let [v2, v3] = Hg.at_("me");
        Hg.spawn(Ej("spr_flowery_helpful_flower"), v2 + 10, v3 - 30, {
          to: [v0, v1 - 60],
          speed: 8,
          spin: 10,
          scale: 2,
          animate: 0
        });
      }
      for (let v4 = 0; v4 < 10; v4++) {
        Hg.spawn(Ej("spr_petalbarrier"), v0 - 40 + v4 * 9, v1 - 70 - v4 % 3 * 14, {
          direction: 270 + (v4 % 2 ? 8 : -8),
          speed: 2 + v4 % 3 * 0.5,
          life: 36,
          animate: 0.2,
          scale: 2,
          spin: v4 % 2 ? 6 : -6
        });
      }
      Hg.heal(HC, Hg.mag * 5);
    }
  }, {
    name: "Jarona",
    desc: "Huge#damage",
    tp: 75,
    target: "enemy",
    delay: 60,
    ap: "damage",
    pose: Ej("spr_flowery_punch_windup"),
    poseSpeed: 0.34,
    text: En(Hg => ["* " + Hg.name + " used JARONA!", "!\\E2* Heh^1, it's my Jarona!"], "text"),
    cast(Hg) {
      Hg.sndShort("snd_ultraswing", 0.6, 20);
      let [HC, v0] = Hg.at_("me");
      let [v1, v2] = Hg.enemyAt();
      let v3 = Hg.mag * 9 + Hg.at * 13 - Hg.df * 6;
      Hg.hide("me", 30);
      Hg.spawn(Ej("spr_flowery_kick_crescent"), HC, v0 - 34, {
        to: [v1, v2],
        speed: 22,
        trail: 1,
        scale: 2,
        flip: true,
        animate: 0,
        onHit: () => {
          Hg.damage(v3);
          Hg.snd(Hg.pick(["snd_flowery_voiceclip_jarona1", "snd_flowery_voiceclip_jarona2", "snd_flowery_voiceclip_jarona3", "snd_flowery_voiceclip_jarona4"]));
          Hg.sndShort("snd_flowery_clash_cymbal", 0.45, 24);
          Hg.shake();
          Hg.flash();
          Hg.spawn(Ej("spr_flowery_shockwave"), v1 - 40, v2 + 40, {
            scale: 1,
            animate: 0.5,
            life: 10,
            depth: -28
          });
          Hg.burst(Ej("spr_spinning_petal"), v1, v2, 10, {
            speed: 11,
            spin: 24,
            scale: 2
          });
        }
      });
      Hg.pose("me", Ej("spr_flowery_pirouette"), 22, 0.4);
    }
  }, {
    name: "Floradinz",
    desc: "All foes#damage",
    tp: 60,
    target: "none",
    delay: 55,
    ap: "damage",
    pose: Ej("spr_flowery_grabfloradins"),
    poseSpeed: 1.1,
    text: En(Hg => ["* " + Hg.name + " threw his FLORADINZ!", "!\\E2* Heh^1, I improved them^1! Watch!"], "text"),
    cast(Hg) {
      Hg.snd("snd_flowery_voiceclip_hoo");
      Hg.snd("snd_ultraswing");
      let [HC, v0] = Hg.at_("me");
      let v1 = Hg.live();
      let v2 = v1.length > 1 ? v1 : [v1[0], v1[0]];
      v2.slice(0, Math.max(2, v2.length)).forEach((v3, v4) => {
        let [v5, v6] = Hg.enemyAt(v3);
        let v7 = Hg.mag * 5 + Hg.at * 6 - (Hg.G.monsterdf[v3] | 0) * 3;
        Hg.spawn(Ej("spr_floradin_swordraise"), HC + 10 + v4 * 20, v0 - 70, {
          to: [v5, v6],
          speed: 13 + v4 * 2,
          direction: 60 - v4 * 10,
          home: 4,
          spin: -8,
          trail: 4,
          scale: 2,
          animate: 0,
          onHit: () => {
            Hg.damage(v1.length > 1 ? v7 : Math.ceil(v7 / 2), v3);
            Hg.snd("snd_punchmed");
            Hg.flash(v3);
            Hg.spawn(Ej("spr_floradin_hurt"), v5, v6 - 10, {
              scale: 2,
              animate: 0,
              speed: 6,
              direction: 60,
              fade: 0.06,
              spin: 20
            });
          }
        });
      });
    }
  }, {
    name: "Towery",
    desc: "Bind#+TIRED",
    tp: 40,
    target: "enemy",
    delay: 50,
    ap: "damage",
    pose: Ej("spr_flowery_punch_up_chase"),
    poseSpeed: 0.5,
    text: En(Hg => ["* " + Hg.name + " raised the TOWERY!", "!\\E3* Lend me your power!"], "text"),
    cast(Hg) {
      Hg.snd("snd_flowery_voiceclip_lend_me_your_power");
      Hg.snd("snd_rocket");
      let [HC, v0] = Hg.enemyAt();
      Hg.spawn(Ej("spr_flowery_cactus"), HC - 32, v0 + 160, {
        to: [HC - 32, v0 - 110],
        speed: 24,
        animate: 0,
        scale: 2,
        life: 46,
        depth: -25,
        linger: true,
        onHit: () => {
          Hg.damage(Hg.mag * 3 + Hg.at * 4 - Hg.df * 3);
          Hg.tire();
          Hg.flash();
          Hg.shake();
          Hg.snd("snd_grab");
          Hg.burst(Ej("spr_petal_blue"), HC, v0, 8, {
            speed: 6,
            spin: 18,
            scale: 2
          });
        }
      });
    }
  }],
  acts: {
    all: [{
      name: "Pun",
      desc: "Plant#puns",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " told " + Hg.enemyName + " a joke.", "!" + Hg.pick(["\\E0* You might turn over a new leaf.", "\\E0* We could even call it a \"pacifist root\".", "\\E2* If you want to \"beleave\"^1, things can change...", "\\E0* Now^1, let's make like a tree and have some fun."])], "text"),
      pose: Ej("spr_flowery_shrug_spin"),
      cast(Hg) {
        Hg.mercy(8);
      }
    }, {
      name: "Pose",
      desc: "Strike#a pose",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " struck a pose!", "!\\E0* My name's Flowery."], "text"),
      pose: Ej("spr_flowery_pose"),
      cast(Hg) {
        Hg.mercy(6);
        Hg.snd("snd_flowery_voiceclip_itsmeflowery");
        Hg.sndShort("snd_great_shine", 0.5, 20);
      }
    }, {
      name: "Kickflip",
      desc: "Show#off",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " pulled a kickflip!", "!\\E2* Here comes San Frandisco!"], "text"),
      pose: Ej("spr_flowery_skateboard_jump"),
      cast(Hg) {
        Hg.mercy(10);
        Hg.snd("snd_flowery_voiceclip_hereicomesanfrandisco_strong");
      }
    }, {
      name: "Fragrance",
      desc: "Mercy#to all",
      tp: 24,
      target: "none",
      ap: "mercy",
      spare: true,
      text: En(Hg => ["* " + Hg.name + " emits the fragrance of hope!"], "text"),
      cast(Hg) {
        Hg.snd("snd_petal_recover");
        Hg.live().forEach(v1 => Hg.mercy(12, v1));
        let [HC, v0] = Hg.at_("me");
        Hg.burst(Ej("spr_petalwing"), HC, v0, 6, {
          speed: 4,
          fade: 0.04,
          scale: 1
        });
      }
    }, {
      name: "TagTeam",
      desc: "With#Susie",
      tp: 40,
      target: "enemy",
      partners: ["susie"],
      delay: 50,
      ap: "damage",
      pose: Ej("spr_flowery_puuunch_left"),
      text: En(Hg => ["* " + Hg.name + " and " + Hg.nameOf("susie") + " attacked together!", "!\\E3* Hey^1. You're with the boys."], "text"),
      cast(Hg) {
        let HC = Hg.slotOf("susie");
        let v0 = HC >= 0 ? Hg.G.battleat[HC] | 0 : 0;
        let [v1, v2] = Hg.enemyAt();
        Hg.snd("snd_flowery_voiceclip_yes");
        Hg.snd("snd_impact");
        Hg.snd("snd_laz_c", {
          pitch: 0.9
        });
        Hg.pose("susie", "attack");
        Hg.spawn("spr_attack_mash2", v1 - 20, v2 - 30, {
          animate: 0.5,
          life: 10,
          scale: 2
        });
        Hg.damage(v0 * 8 + Hg.at * 8 - Hg.df * 4);
        Hg.shake();
        Hg.flash();
      }
    }, {
      name: "OldTimes",
      desc: "Heal all#+Ralsei",
      tp: 40,
      target: "none",
      partners: ["ralsei"],
      delay: 40,
      ap: "heal",
      pose: Ej("spr_flowery_diner_pour_orange_toss"),
      text: En(Hg => ["* " + Hg.name + " and " + Hg.nameOf("ralsei") + " shared some old times!", "!\\E2* Feels just like old trees^1. I mean old times."], "text"),
      cast(Hg) {
        let HC = Hg.slotOf("ralsei");
        let v0 = HC >= 0 ? Hg.G.battlemag[HC] | 0 : 0;
        Hg.snd("snd_petal_recover");
        Hg.healAll((v0 + Hg.mag) * 3);
      }
    }, {
      name: "Posey",
      desc: "Mercy#+Kris",
      tp: 30,
      target: "none",
      partners: ["kris"],
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " and " + Hg.nameOf("kris") + " struck a pose together!", "!\\E3* Shine that courage^1. And I know your love will bloom."], "text"),
      pose: Ej("spr_flowery_pose"),
      cast(Hg) {
        Hg.snd("snd_great_shine");
        Hg.live().forEach(HC => Hg.mercy(20, HC));
      }
    }],
    obj_joker: [{
      name: "Spin",
      desc: "Spin for#JEVIL",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " spun for " + Hg.enemyName + "!", "!\\E2* Rules are just a suggestion."], "text"),
      pose: Ej("spr_flowery_spin_to_idle"),
      cast(Hg) {
        Hg.snd("snd_pirouette");
        Hg.mercy(12);
      }
    }],
    obj_spamton_neo_enemy: [{
      name: "Deal",
      desc: "Make a#DEAL",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " made " + Hg.enemyName + " an offer!", "!\\E0* I'm not here^1. I'm just a voice-activated recording."], "text"),
      cast(Hg) {
        Hg.snd("snd_flowery_coin_big");
        Hg.tp(16);
      }
    }],
    obj_queen_enemy: [{
      name: "Style",
      desc: "Out-cool#her",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " showed " + Hg.enemyName + " some style!", "!\\E2* Hah^1! You think you can match my style!?"], "text"),
      pose: Ej("spr_flowery_pose_point_cooler"),
      cast(Hg) {
        Hg.mercy(12);
      }
    }],
    obj_knight_enemy: [{
      name: "Hope",
      desc: "Heal all#a little",
      tp: 16,
      target: "none",
      ap: "heal",
      text: En(Hg => ["* " + Hg.name + " emits the fragrance of hope!", "!\\E3* I won't lose...&* My friends are behind me!"], "text"),
      cast(Hg) {
        Hg.snd("snd_petal_recover");
        Hg.party().forEach(HC => Hg.heal(HC, Hg.G.maxhp[Hg.G.char[HC]] / 8));
      }
    }],
    obj_tenna_enemy: [{
      name: "Showtime",
      desc: "For the#camera",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " played to the camera!", "!\\E2* Feel it^1! Smell it^1! The power of flowers!"], "text"),
      pose: Ej("spr_flowery_pose"),
      cast(Hg) {
        Hg.snd("snd_forthefans");
        Hg.mercy(10);
        Hg.tp(8);
      }
    }],
    obj_seth_shinobeetle_controller: [{
      name: "OldPal",
      desc: "Talk to#Seth",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " talked to Seth.", "!\\E3* Hey^1. Don't worry about that anymore^1. You're with the boys."], "text"),
      cast(Hg) {
        Hg.live().forEach(HC => Hg.mercy(20, HC));
      }
    }],
    obj_aqua_enemy: [{
      name: "Smile",
      desc: "Smile at#Aqua",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " smiled at " + Hg.enemyName + ".", "!\\E0* Friendship's just a smile away."], "text"),
      cast(Hg) {
        Hg.mercy(25);
      }
    }],
    obj_blue_enemy: [{
      name: "Cheer",
      desc: "Cheer#them on",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " cheered them on!", "!\\E3* Shine that courage^1. And I know your love will bloom."], "text"),
      cast(Hg) {
        Hg.live().forEach(HC => Hg.mercy(15, HC));
      }
    }],
    obj_pink_enemy: [{
      name: "BlowKiss",
      desc: "Blow a#kiss",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " blew " + Hg.enemyName + " a kiss!"], "text"),
      pose: Ej("spr_flowery_kiss"),
      cast(Hg) {
        Hg.mercy(15);
      }
    }],
    obj_flowery_enemy: [{
      name: "Mirror",
      desc: "Match#style",
      tp: 0,
      target: "enemy",
      ap: "mercy",
      text: En(Hg => ["* " + Hg.name + " pointed at " + Hg.enemyName + ". Neither of them blinked.", "!\\E2* Hah^1! You think you can match my style!?"], "text"),
      pose: Ej("spr_flowery_pose_point_cooler"),
      cast(Hg) {
        Hg.mercy(10);
      }
    }]
  }
};
var EF = [EA].map(a);
var Ex = {
  kris: {
    id: "kris",
    name: "Kris",
    color: "aqua",
    head: "spr_headkris",
    namesprite: "spr_bnamekris",
    menuicon: 1,
    equipchar: 1,
    stats: {
      at: 10,
      df: 2,
      mag: 0,
      maxhp: 90
    },
    spells: [7],
    weapons: 1,
    sprites: {
      normalsprite: "spr_krisb_idle",
      idlesprite: "spr_krisb_idle",
      defendsprite: "spr_krisb_defend",
      hurtsprite: "spr_krisb_hurt",
      attackreadysprite: "spr_krisb_attackready",
      attacksprite: "spr_krisb_attack",
      itemsprite: "spr_krisb_item",
      actreadysprite: "spr_krisb_actready",
      actsprite: "spr_krisb_act",
      itemreadysprite: "spr_krisb_itemready",
      spellreadysprite: "spr_krisb_actready",
      spellsprite: "spr_krisb_act",
      defeatsprite: "spr_krisb_defeat",
      victorysprite: "spr_krisb_victory"
    },
    frames: {
      actframes: 7,
      actreturnframes: 10,
      attackframes: 6,
      itemframes: 6,
      defendframes: 5,
      spellframes: 10,
      attackspeed: 0.5,
      victoryframes: 9
    },
    size: {
      mywidth: 68,
      myheight: 74
    }
  },
  susie: {
    id: "susie",
    name: "Susie",
    color: "fuchsia",
    head: "spr_headsusie",
    namesprite: "spr_bnamesusie",
    menuicon: 2,
    equipchar: 2,
    stats: {
      at: 14,
      df: 2,
      mag: 1,
      maxhp: 110
    },
    spells: [4],
    weapons: 2,
    sprites: {
      normalsprite: "spr_susieb_idle",
      idlesprite: "spr_susieb_idle",
      defendsprite: "spr_susieb_defend",
      hurtsprite: "spr_susieb_hurt",
      actreadysprite: "spr_susieb_actready",
      actsprite: "spr_susieb_act",
      attackreadysprite: "spr_susieb_attackready",
      attacksprite: "spr_susieb_attack",
      itemsprite: "spr_susieb_item",
      itemreadysprite: "spr_susieb_itemready",
      spellreadysprite: "spr_susieb_spellready",
      spellsprite: "spr_susieb_spell",
      defeatsprite: "spr_susieb_defeat",
      victorysprite: "spr_susieb_victory"
    },
    frames: {
      attackframes: 5,
      itemframes: 5,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      spellframes: 8,
      attackspeed: 0.5,
      victoryframes: 9
    },
    size: {
      mywidth: 70,
      myheight: 82
    }
  },
  ralsei: {
    id: "ralsei",
    name: "Ralsei",
    color: "lime",
    head: "spr_headralsei",
    namesprite: "spr_bnameralsei",
    menuicon: 3,
    equipchar: 3,
    stats: {
      at: 8,
      df: 2,
      mag: 7,
      maxhp: 70
    },
    spells: [3, 2],
    weapons: 3,
    sprites: {
      normalsprite: "spr_ralseib_idle",
      idlesprite: "spr_ralseib_idle",
      defendsprite: "spr_ralseib_defend",
      hurtsprite: "spr_ralsei_shock",
      attackreadysprite: "spr_ralseib_attackready",
      attacksprite: "spr_ralseib_attack",
      itemsprite: "spr_ralseib_item",
      itemreadysprite: "spr_ralseib_itemready",
      spellreadysprite: "spr_ralseib_spellready",
      spellsprite: "spr_ralseib_spell",
      defeatsprite: "spr_ralseib_defeat",
      victorysprite: "spr_ralseib_victory",
      actreadysprite: "spr_ralseib_actready",
      actsprite: "spr_ralseib_act"
    },
    frames: {
      attackframes: 5,
      itemframes: 7,
      defendframes: 6,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 10,
      victoryframes: 9
    },
    size: {
      mywidth: 52,
      myheight: 86
    }
  },
  noelle: {
    id: "noelle",
    name: "Noelle",
    color: "aqua",
    head: "spr_headnoelle",
    namesprite: "spr_bnamenoelle",
    menuicon: 1,
    chapter: 2,
    fallback: "ralsei",
    equipchar: 4,
    stats: {
      at: 3,
      df: 1,
      mag: 11,
      maxhp: 90
    },
    spells: [2, 8, 9, 10],
    weapons: 12,
    armors: [14, 22],
    sprites: {
      normalsprite: "spr_noelleb_idle",
      idlesprite: "spr_noelleb_idle",
      defendsprite: "spr_noelleb_defend",
      hurtsprite: "spr_noelleb_hurt",
      attackreadysprite: "spr_noelleb_attackready",
      attacksprite: "spr_noelleb_attack",
      itemsprite: "spr_noelleb_item",
      itemreadysprite: "spr_noelleb_itemready",
      spellreadysprite: "spr_noelleb_spellready",
      spellsprite: "spr_noelleb_spell",
      defeatsprite: "spr_noelleb_defeat",
      victorysprite: "spr_noelleb_victory",
      actreadysprite: "spr_noelleb_actready",
      actsprite: "spr_noelleb_act"
    },
    frames: {
      attackframes: 5,
      itemframes: 6,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 10,
      victoryframes: 9
    },
    size: {
      mywidth: 56,
      myheight: 84
    }
  },
  berdly: {
    id: "berdly",
    name: "Berdly",
    color: "aqua",
    head: null,
    namesprite: null,
    menuicon: 2,
    equipchar: 2,
    chapter: 2,
    fallback: "susie",
    stats: {
      at: 9,
      df: 3,
      mag: 5,
      maxhp: 100
    },
    spells: [],
    weapons: 2,
    sprites: {
      normalsprite: "spr_berdlyb_idle",
      idlesprite: "spr_berdlyb_idle",
      defendsprite: "spr_berdlyb_idle_serious",
      hurtsprite: "spr_berdlyb_shocked_battle",
      attackreadysprite: "spr_berdlyb_idle_serious",
      attacksprite: "spr_berdlyattack_queen",
      itemsprite: "spr_berdlyb_plug",
      itemreadysprite: "spr_berdlyb_idle_serious",
      spellreadysprite: "spr_berdlyb_idle_serious",
      spellsprite: "spr_berdlyb_tornado",
      defeatsprite: "spr_berdly_hurt_kneel_battle",
      victorysprite: "spr_berdlyb_super_jump",
      actreadysprite: "spr_berdlyb_idle_serious",
      actsprite: "spr_berdlyact_queen"
    },
    frames: {
      attackframes: 5,
      itemframes: 5,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 8,
      victoryframes: 9
    },
    size: {
      mywidth: 68,
      myheight: 84
    }
  }
};
var ER = ["kris", "susie", "ralsei", "noelle", "berdly"];
for (let v8 of EF) {
  if (!v8.extends) {
    Ex[v8.id] = {
      id: v8.id,
      name: v8.name,
      color: v8.color,
      head: v8.head ?? null,
      namesprite: v8.namesprite ?? null,
      menuicon: v8.menuicon || 1,
      chapter: v8.chapter,
      custom: true,
      base: v8.base,
      equipchar: v8.equipchar || 0,
      fallback: v8.fallback || "kris",
      stats: {
        ...v8.stats
      },
      spells: [],
      weapons: v8.weapons || 0,
      armors: v8.armors || [0, 0],
      sprites: {
        ...v8.sprites
      },
      frames: {
        ...v8.frames
      },
      size: {
        ...v8.size
      },
      member: v8
    };
    ER.push(v8.id);
  }
}
var Es = 63;
function EQ(Hg, HC) {
  let v0 = Ex[Hg];
  if (!v0 || !HC) {
    return false;
  } else {
    return Object.values(v0.sprites).every(v1 => !v1 || !!HC[v1]);
  }
}
En(EQ, "heroAvailable");
function EY(Hg, HC) {
  let v0 = Ex[Hg];
  if (!v0) {
    return Ex.kris;
  }
  if (EQ(Hg, HC)) {
    return v0;
  }
  let v1 = Ex[v0.fallback] || Ex.kris;
  if (v0.custom) {
    return {
      ...v0,
      sprites: v1.sprites,
      borrowed: v1.id
    };
  } else {
    return {
      ...v0,
      sprites: v1.sprites,
      frames: v1.frames,
      size: v1.size,
      borrowed: v1.id
    };
  }
}
En(EY, "heroSprites");
EL();
var El = /^spr_(kris|susie|ralsei|noelle|berdly)(b|r|d)?_(.+?)(@ch\d+)?$/;
var ED = [[/^nothing$/, null], [/hurt|shock|surprised|fallen|dizzy|hitback/, "hurtsprite"], [/defend/, "defendsprite"], [/attackready/, "attackreadysprite"], [/attack/, "attacksprite"], [/spellready/, "spellreadysprite"], [/spell|heal|rudebuster/, "spellsprite"], [/itemready/, "itemreadysprite"], [/item|offer/, "itemsprite"], [/actready/, "actreadysprite"], [/victory|dance|pirouette|laugh|happy|clap/, "victorysprite"], [/defeat/, "defeatsprite"], [/idle|walk|right|left|landed|look|down|sad|mad|annoyed|battleintro/, "idlesprite"], [/./, "actsprite"]];
var ET = En(Hg => Hg === "noelle" || Hg === "berdly" || Ex[Hg] && !Ex[Hg].custom ? Hg : null, "familyOf");
var Ec = En(Hg => !!Hg && !!E1[Hg], "has");
var EI = new Map();
function Ed(Hg, HC) {
  if (!Hg || typeof HC != "string" || Hg.borrowedFrom) {
    return HC;
  }
  let v0 = Hg.herokey;
  let v1 = v0 && Ex[v0];
  if (!v1) {
    return HC;
  }
  let v2 = El.exec(HC);
  if (!v2 || v2[1] === ET(v0)) {
    return HC;
  }
  let v3 = v0 + "|" + HC;
  if (EI.has(v3)) {
    return EI.get(v3);
  }
  let v4 = v2[3];
  let v5 = null;
  let v6 = v1.custom ? v1.member : null;
  if (v6 && v6.worn) {
    for (let [v7, v9] of v6.worn) {
      if (new RegExp(v7).test(v4) && Ec(v9)) {
        v5 = v9;
        break;
      }
    }
  }
  if (!v5 && v6 && v6.art) {
    let vE = v6.pack ? "@ch" + v6.pack : "";
    if (Ec(v6.art + v4 + vE)) {
      v5 = v6.art + v4 + vE;
    }
  }
  if (!v5 && !v6) {
    for (let vH of ["spr_" + v0 + "b_" + v4, "spr_" + v0 + "_" + v4]) {
      if (Ec(vH)) {
        v5 = vH;
        break;
      }
    }
  }
  if (!v5) {
    let vv = ED.find(([vf]) => vf.test(v4))[1];
    if (vv) {
      v5 = (Ec(Hg[vv]) && !El.test(Hg[vv]) ? Hg[vv] : null) || v1.sprites && v1.sprites[vv] || v1.sprites && v1.sprites.idlesprite || HC;
    } else {
      v5 = HC;
    }
  }
  EI.set(v3, v5);
  return v5;
}
En(Ed, "wornSprite");
function EU(Hg, HC, v0) {
  if (!J.customTeam || !HC || !Hg || Hg.borrowedFrom || !Hg.herokey) {
    return v0();
  }
  let v1 = Object.prototype.hasOwnProperty.call(HC, "draw_sprite_ext");
  let v2 = Object.prototype.hasOwnProperty.call(HC, "draw_sprite_white");
  let v3 = HC.draw_sprite_ext;
  let v4 = HC.draw_sprite_white;
  HC.draw_sprite_ext = function (v5, ...v6) {
    return v3.call(this, Ed(Hg, v5), ...v6);
  };
  if (v4) {
    HC.draw_sprite_white = function (v5, ...v6) {
      return v4.call(this, Ed(Hg, v5), ...v6);
    };
  }
  try {
    return v0();
  } finally {
    if (v1) {
      HC.draw_sprite_ext = v3;
    } else {
      delete HC.draw_sprite_ext;
    }
    if (v4) {
      if (v2) {
        HC.draw_sprite_white = v4;
      } else {
        delete HC.draw_sprite_white;
      }
    }
  }
}
En(EU, "wearing");
EL();
K.forEach((Hg, HC) => {
  if (!Hg.extends && !!Hg.voice) {
    Hg.speaker = "abcdefghijklmnopqrstuvwxyz"[HC];
    U(Hg.speaker, 900 + HC, ["fnt_mainbig", E5.white, 1, Hg.voice[0], 16, 28, 1, 0, 0, Hg.voice], 900 + HC, Hg.face || null);
  }
});
var EM = {
  healFx: En(() => {}, "healFx"),
  obj_dmgwriter: null
};
function Ey(Hg) {
  EM = {
    ...EM,
    ...Hg
  };
}
En(Ey, "bindBattle");
var EX = En(Hg => J.charhero && J.charhero[Hg] || ER[u(Hg) - 1] || "kris", "heroKeyOf");
var EZ = En(Hg => Ex[EX(Hg)] || Ex.kris, "heroOf");
var ES = En(Hg => {
  let HC = EZ(Hg);
  if (HC && HC.custom) {
    return HC.member;
  } else {
    return null;
  }
}, "memberOfId");
var Eb = En(Hg => (x() === "CUSTOM" ? K.find(HC => HC.extends === Hg) : null) || null, "extOf");
var EV = En(Hg => !!ES(Hg), "isCustomId");
var Eq = En(() => (J.char || []).some(Hg => Hg && (EV(Hg) || Eb(EX(Hg)))), "anyCustom");
var Eo = En(Hg => {
  let HC = parseInt(String(Hg).replace("#", ""), 16);
  if (Number.isFinite(HC)) {
    return HC;
  } else {
    return 16777215;
  }
}, "hex");
var Em = En(Hg => "#" + Hg.toString(16).padStart(6, "0"), "toCss");
function EW(Hg) {
  let HC = ES(Hg);
  if (HC) {
    return Em(Eo(HC.color));
  } else {
    return null;
  }
}
En(EW, "colorOf");
var EK = En(Hg => {
  let HC = ES(Hg);
  if (HC) {
    return E6(Em(Eo(HC.color)), E5.black, 0.45);
  } else {
    return null;
  }
}, "pressColorOf");
function Ea(Hg, HC, v0) {
  let v1 = Hg && Hg.herokey && Ex[Hg.herokey] && Ex[Hg.herokey].member;
  if (!v1 || !v1.facesLeft || !HC || Hg.borrowedFrom) {
    return v0();
  }
  let v2 = new Set(v1.facesRight || []);
  let v3 = vi => !v2.has(vi) && (v1.facesLeft === true ? !!v1.art && String(vi).startsWith(v1.art) : v1.facesLeft.includes(vi));
  let v4 = Object.prototype.hasOwnProperty.call(HC, "draw_sprite_ext");
  let v5 = Object.prototype.hasOwnProperty.call(HC, "draw_sprite_white");
  let v6 = HC.draw_sprite_ext;
  let v7 = HC.draw_sprite_white;
  let v9 = v1.mirrorAxis || 0;
  let vE = (vi, vn, vk) => vn + v9 * 2 * vk;
  let vH = Ex[Hg.herokey].sprites.idlesprite;
  let vv = Eh(vH);
  let vf = new Set(v1.anchorSkip || []);
  let vO = (vi, vn, vk, vL, vj) => {
    if (!vv || vi === vH || vf.has(vi) || !String(vi).startsWith(v1.art || " ")) {
      return [vn, vk];
    }
    let vA = Eh(vi);
    if (!vA) {
      return [vn, vk];
    }
    let vF = Math.abs(vL);
    let vx = (vv[1] - vA[1]) * Math.abs(vj);
    if (v3(vi)) {
      return [vn + (vv[0] - vA[0]) * vF, vk + vx];
    } else {
      return [vn + (v9 * 2 - vv[0] - vA[0]) * vF, vk + vx];
    }
  };
  HC.draw_sprite_ext = function (vi, vn, vk, vL, vj, vA, ...vF) {
    let [vx, vR] = vO(vi, vk, vL, vj, vA);
    if (v3(vi)) {
      return v6.call(this, vi, vn, vE(vi, vx, vj), vR, -vj, vA, ...vF);
    } else {
      return v6.call(this, vi, vn, vx, vR, vj, vA, ...vF);
    }
  };
  if (v7) {
    HC.draw_sprite_white = function (vi, vn, vk, vL, vj, vA, ...vF) {
      let [vx, vR] = vO(vi, vk, vL, vj, vA);
      if (v3(vi)) {
        return v7.call(this, vi, vn, vE(vi, vx, vj), vR, -vj, vA, ...vF);
      } else {
        return v7.call(this, vi, vn, vx, vR, vj, vA, ...vF);
      }
    };
  }
  try {
    return v0();
  } finally {
    if (v4) {
      HC.draw_sprite_ext = v6;
    } else {
      delete HC.draw_sprite_ext;
    }
    if (v7) {
      if (v5) {
        HC.draw_sprite_white = v7;
      } else {
        delete HC.draw_sprite_white;
      }
    }
  }
}
En(Ea, "mirrored");
var EG = new Map();
function Eh(Hg) {
  if (EG.has(Hg)) {
    return EG.get(Hg);
  }
  let HC = E1[Hg];
  let v0 = HC && HC.img && HC.img[0];
  if (!v0 || !v0.width || typeof document === "undefined") {
    return null;
  }
  try {
    let v1 = document.createElement("canvas");
    v1.width = HC.w;
    v1.height = HC.h;
    let v2 = v1.getContext("2d");
    v2.drawImage(v0, 0, 0, HC.w, HC.h);
    let v3 = v2.getImageData(0, 0, HC.w, HC.h).data;
    let v4 = (vE, vH) => v3[(vH * HC.w + vE) * 4 + 3] > 0;
    let v5 = -1;
    for (let vE = HC.h - 1; vE >= 0 && v5 < 0; vE--) {
      for (let vH = 0; vH < HC.w; vH++) {
        if (v4(vH, vE)) {
          v5 = vE;
          break;
        }
      }
    }
    if (v5 < 0) {
      EG.set(Hg, null);
      return null;
    }
    let v6 = HC.w;
    let v7 = -1;
    for (let vv = Math.max(0, v5 - 11); vv <= v5; vv++) {
      for (let vf = 0; vf < HC.w; vf++) {
        if (v4(vf, vv)) {
          if (vf < v6) {
            v6 = vf;
          }
          if (vf > v7) {
            v7 = vf;
          }
        }
      }
    }
    let v9 = [(v6 + v7) / 2 - HC.ox, v5 + 1 - HC.oy];
    EG.set(Hg, v9);
    return v9;
  } catch {
    EG.set(Hg, null);
    return null;
  }
}
En(Eh, "anchorOf");
var Ez = 46;
function Ew(Hg) {
  let HC = Ex[Hg];
  if (!HC || !HC.custom) {
    return 2;
  }
  if (HC.member.scale) {
    return HC.member.scale;
  }
  let v0 = E1[HC.sprites.idlesprite];
  if (!v0 || !v0.h) {
    return 2;
  } else {
    return Math.min(2, Math.max(1, Math.round(Ez * 8 / v0.h) / 4));
  }
}
En(Ew, "scaleFor");
var Ep = En(Hg => Hg.borrowedFrom && (!Ex[Hg.herokey] || !Ex[Hg.herokey].custom) ? 2 : Ew(Hg.herokey), "battleScale");
var EJ = new Set();
function EP() {
  for (let Hg of K) {
    let HC = Hg.pack;
    if (!!HC && !EJ.has(HC) && (!l[HC] || l[HC].state !== "ready" || !c(HC))) {
      EJ.add(HC);
      d(HC).then(() => T(HC)).catch(() => EJ.delete(HC));
    }
  }
}
En(EP, "ensureArt");
function EN(Hg) {
  if (!Hg || String(Hg.partystats || "").toUpperCase() !== "CUSTOM" || !Array.isArray(Hg.slots)) {
    return [];
  }
  let HC = new Set();
  for (let v0 of Hg.slots) {
    if (!v0) {
      continue;
    }
    let v1 = Hg.roster && Hg.roster[v0];
    let v2 = Ex[v1 && v1.hero || ER[v0 - 1]];
    if (v2 && v2.member && v2.member.pack) {
      HC.add(v2.member.pack);
    }
  }
  return [...HC];
}
En(EN, "packsForParty");
function EB(Hg) {
  let HC = [];
  let v0 = [];
  if (Hg <= 6) {
    for (let v5 = 0; v5 < Hg; v5++) {
      v0.push(Ev(24 + v5 * 212 / (Hg - 1)));
      HC.push(Ev(128 - v5 * 6 - (v5 % 2 === 1 ? 50 : 0)));
    }
    return [HC, v0];
  }
  let v1 = Math.max(3, Math.ceil(Hg / 7));
  let v2 = Math.ceil(Hg / v1);
  let v3 = Math.floor(88 / (v1 - 0.5));
  let v4 = Math.min(56, Math.floor(212 / Math.max(1, v2 - 1)));
  for (let v6 = 0; v6 < Hg; v6++) {
    let v7 = Math.floor(v6 / v1);
    let v9 = v6 % v1;
    HC.push(84 + v9 * v3 + v7 % 2 * Math.floor(v3 / 2));
    v0.push(24 + v7 * v4);
  }
  return [HC, v0];
}
En(EB, "formation");
var Eu = En(() => 1, "heroScale");
var Eg = En((Hg, HC) => HC > 6 ? 200 - Hg * 2 : 200 - Hg * 20, "heroDepth");
var EC = 190;
function H0(Hg, HC) {
  if (HC <= 3) {
    return null;
  }
  let v0 = J.myfight === 0 && J.charturn >= 0 && J.charturn < HC ? J.charturn : -1;
  if (HC > 6) {
    return H1(Hg, HC, v0);
  }
  let v1 = Math.min(HC, 6);
  if (v0 >= 0) {
    Hg._hudPage = Math.floor(v0 / v1);
  }
  let v2 = Math.min(Hg._hudPage | 0, Math.ceil(HC / v1) - 1);
  let v3 = v2 * v1;
  let v4 = Math.min(v1, HC - v3);
  let v5 = [];
  for (let v9 = 0; v9 < v4; v9++) {
    v5.push(v0 < 0 ? 640 / v4 : v3 + v9 === v0 ? EC : (640 - EC) / (v4 - 1));
  }
  if (!Hg._bw || Hg._bw.length !== v4 || Hg._bwFirst !== v3) {
    Hg._bw = v5.slice();
    Hg._bwFirst = v3;
  }
  for (let vE = 0; vE < v4; vE++) {
    Hg._bw[vE] += (v5[vE] - Hg._bw[vE]) * 0.4;
  }
  let v6 = [];
  let v7 = 0;
  for (let vH = 0; vH < v4; vH++) {
    let vv = Ev(v7);
    v7 += Hg._bw[vH];
    v6.push({
      slot: v3 + vH,
      x: vv,
      w: Ev(v7) - vv
    });
  }
  v6.first = v3;
  v6.total = HC;
  return v6;
}
En(H0, "boxLayout");
function H1(Hg, HC, v0) {
  let v1 = [];
  let v2 = {};
  for (let vH = 0; vH < HC; vH++) {
    let vv = J.char[HN(vH)];
    if (!vv) {
      continue;
    }
    let vf = EX(vv);
    if (v2[vf] === undefined) {
      v2[vf] = v1.length;
      v1.push({
        key: vf,
        slots: []
      });
    }
    v1[v2[vf]].slots.push(vH);
  }
  let v3 = [];
  let v4 = 0;
  if (v0 >= 0) {
    v3.push({
      slot: v0,
      x: 0,
      w: EC
    });
    v4 = EC;
  }
  let v5 = 640 - v4;
  let v6 = Math.max(1, Math.min(v1.length, Math.floor(v5 / 90)));
  let v7 = Math.ceil(v1.length / v6);
  if (v0 >= 0) {
    let vO = v1.findIndex(vi => vi.slots.includes(v0));
    if (vO >= 0) {
      Hg._grpPage = Math.floor(vO / v6);
    }
  }
  let v9 = Math.min(Hg._grpPage | 0, v7 - 1);
  let vE = v1.slice(v9 * v6, v9 * v6 + v6);
  vE.forEach((vi, vn) => {
    let vk = v4 + Math.round(v5 * vn / vE.length);
    v3.push({
      group: vi.slots,
      key: vi.key,
      x: vk,
      w: v4 + Math.round(v5 * (vn + 1) / vE.length) - vk
    });
  });
  v3.crowd = true;
  v3.total = HC;
  v3.turn = v0;
  v3.page = v9;
  v3.pages = v7;
  return v3;
}
En(H1, "crowdLayout");
function H2(Hg) {
  if (Hg === "all") {
    return true;
  }
  let HC = /^ch(\d+):(\d+)$/.exec(Hg);
  if (HC) {
    return J.chapter === Number(HC[1]) && J.encounterno === Number(HC[2]);
  } else {
    return Ef.exists(Hg);
  }
}
En(H2, "scopeLive");
function H3(Hg, HC) {
  for (let v0 = 0; v0 < g(); v0++) {
    let v1 = J.char[v0];
    if (!!v1 && v0 !== HC && EX(v1) === Hg) {
      return v0;
    }
  }
  return -1;
}
En(H3, "partnerSlot");
function H4(Hg) {
  let HC = J.char[Hg];
  let v0 = ES(HC);
  if (!v0) {
    return null;
  }
  let v1 = [];
  let v2 = new Set();
  let v3 = 12 - v0.spells.length;
  let v4 = v6 => {
    if (!v2.has(v6.name) && !(v6.partners || []).some(v7 => H3(v7, Hg) < 0)) {
      v2.add(v6.name);
      v1.push(v6);
    }
  };
  for (let [v6, v7] of Object.entries(v0.acts)) {
    if (v6 !== "all" && H2(v6)) {
      v7.forEach(v4);
    }
  }
  (v0.acts.all || []).forEach(v4);
  let v5 = v9 => !v9.partners && (v0.acts.all || []).includes(v9);
  for (let v9 of [vE => v5(vE) && vE.spare, v5, () => true]) {
    for (let vE = v1.length - 1; vE >= 0 && v1.length > v3; vE--) {
      if (v9(v1[vE])) {
        v1.splice(vE, 1);
      }
    }
  }
  return {
    acts: v1.map(vH => vH.id),
    spells: v0.spells.map(vH => vH.id)
  };
}
En(H4, "menuIds");
var H5 = En((Hg, HC) => b(Hg, HC), "info");
function H6(Hg, HC) {
  J.spell[Hg] ||= [];
  for (let v0 = 0; v0 < 12; v0++) {
    J.spell[Hg][v0] = HC[v0] || 0;
  }
  for (let v1 of ["spellname", "spellnameb", "spellcost", "spelldescb", "spelltarget"]) {
    J[v1] ||= [];
    J[v1][Hg] ||= [];
  }
  for (let v2 = 0; v2 < 12; v2++) {
    let v3 = H5(J.spell[Hg][v2], Hg);
    J.spellname[Hg][v2] = v3.spellname;
    J.spellnameb[Hg][v2] = v3.spellnameb;
    J.spellcost[Hg][v2] = v3.cost;
    J.spelldescb[Hg][v2] = v3.spelldescb;
    J.spelltarget[Hg][v2] = v3.spelltarget;
  }
}
En(H6, "writeSpellList");
var H7 = ["battlespell", "battlespellname", "battlespelldesc", "battlespellcost", "battlespelltarget", "battlespellspecial"];
function H8(Hg) {
  for (let HC of H7) {
    if (!Array.isArray(J[HC])) {
      J[HC] = [];
    }
    if (!Array.isArray(J[HC][Hg])) {
      J[HC][Hg] = new Array(18).fill(HC === "battlespellname" || HC === "battlespelldesc" ? " " : HC === "battlespelltarget" ? 2 : 0);
    }
  }
  if (!Array.isArray(J.battleactcount)) {
    J.battleactcount = [];
  }
  if (J.battleactcount[Hg] === undefined) {
    J.battleactcount[Hg] = 0;
  }
}
En(H8, "ensureRow");
function H9(Hg, HC, v0) {
  H8(Hg);
  let v1 = HC.concat(v0);
  let v2 = J.char[Hg];
  J.battleactcount[Hg] = HC.length;
  for (let v3 = 0; v3 < 18; v3++) {
    let v4 = v1[v3] || 0;
    let v5 = H5(v4, v2);
    J.battlespell[Hg][v3] = v4;
    J.battlespellname[Hg][v3] = v4 ? v5.spellnameb : " ";
    J.battlespelldesc[Hg][v3] = v4 ? v5.spelldescb : " ";
    J.battlespellcost[Hg][v3] = v4 ? v5.cost : 0;
    J.battlespelltarget[Hg][v3] = v5.spelltarget;
    J.battlespellspecial[Hg][v3] = v3 < HC.length ? 1 : 0;
  }
}
En(H9, "writeRow");
var HE = {
  1: "",
  2: "sus",
  3: "ral",
  4: "noe"
};
var HH = {
  kris: "",
  susie: "sus",
  ralsei: "ral"
};
var Hv = {
  "": 1,
  sus: 2,
  ral: 3,
  noe: 4
};
var Hf = En(Hg => Hg > 3 && (EX(Hg) === "susie" || EX(Hg) === "ralsei") ? HH[EX(Hg)] : undefined, "recruitFam");
function HO(Hg) {
  let HC = J.char[Hg];
  let v0 = Hf(HC);
  let v1 = v0 !== undefined ? v0 : HE[HC];
  H8(Hg);
  let v2 = [1, 2].some(v4 => J.monster[v4] === 1 && J.monstertype[v4] !== J.monstertype[0]);
  let v3 = 0;
  for (let v4 = 0; v4 < 6; v4++) {
    J.battlespell[Hg][v4] = 0;
    if (v1 === undefined) {
      continue;
    }
    let v5 = J["canact" + v1] && J["canact" + v1][0];
    if (v5 && v5[v4] === 1) {
      J.battlespell[Hg][v4] = -1;
      v3 = v4 + 1;
      J.battlespellcost[Hg][v4] = J["actcost" + v1][0][v4];
      J.battlespellname[Hg][v4] = J["actname" + v1][0][v4];
      J.battlespelldesc[Hg][v4] = J["actdesc" + v1][0][v4];
      J.battlespelltarget[Hg][v4] = v1 === "" ? 0 : 2;
      J.battlespellspecial[Hg][v4] = Hv[v1];
      if (v2 && v0 !== undefined && v1) {
        J.battlespellname[Hg][v4] = v1 === "sus" ? "S-Action" : "R-Action";
      }
    }
  }
  J.battleactcount[Hg] = v3;
  for (let v6 = 0; v6 < 12; v6++) {
    let v7 = v3 + v6;
    let v9 = (J.spell[HC] || [])[v6] || 0;
    let vE = H5(v9, HC);
    J.battlespell[Hg][v7] = v9;
    J.battlespellcost[Hg][v7] = vE.cost;
    J.battlespellname[Hg][v7] = vE.spellnameb;
    J.battlespelldesc[Hg][v7] = vE.spelldescb;
    J.battlespelltarget[Hg][v7] = vE.spelltarget;
    J.battlespellspecial[Hg][v7] = 0;
  }
}
En(HO, "canonRow");
function Hi(Hg) {
  let HC = J.battlespell && J.battlespell[Hg];
  if (HC) {
    for (let v0 = 0; v0 < HC.length; v0++) {
      if (G(HC[v0])) {
        let v1 = H5(HC[v0], J.char[Hg]);
        J.battlespellname[Hg][v0] = v1.spellnameb;
        J.battlespelldesc[Hg][v0] = v1.spelldescb;
        J.battlespellcost[Hg][v0] = v1.cost;
        J.battlespelltarget[Hg][v0] = v1.spelltarget;
      }
    }
  }
}
En(Hi, "fixRow");
var Hn = En(() => J.chapter !== 1 && J.flag && J.flag[34] === 0, "techMenu");
function Hk() {
  let Hg = g();
  if (!(Hg <= 3) || !!Eq() || !!J.char.some(HC => HC && Hf(HC) !== undefined)) {
    for (let HC = 0; HC < Hg; HC++) {
      let v0 = J.char[HC];
      if (!v0) {
        continue;
      }
      let v1 = H4(HC);
      if (v1) {
        H6(v0, v1.acts.concat(v1.spells));
        if (Hn()) {
          H9(HC, v1.acts, v1.spells);
        }
        continue;
      }
      if (Hn() && (HC >= 3 || Hf(v0) !== undefined)) {
        HO(HC);
      }
      if (Hn()) {
        Hi(HC);
      }
    }
  }
}
En(Hk, "menuSetup");
function HL(Hg) {
  let HC = Eb(Hg);
  if (HC) {
    return HC.spells.map(v0 => v0.id);
  } else {
    return [];
  }
}
En(HL, "extraSpells");
var Hj = {};
var HA = En(Hg => Object.values(Hj).some(HC => HC.some(v0 => v0.slot === Hg)), "joined");
var HF = En(Hg => {
  let HC = J.charaction[Hg] | 0;
  return HC === 0 || HC === 1 || HC === 10;
}, "freeFor");
function Hx(Hg, HC) {
  for (let v0 = 0; v0 < g(); v0++) {
    let v1 = J.char[v0];
    if (!!v1 && v0 !== HC && EX(v1) === Hg && J.hp[v1] > 0 && J.charmove[v0] === 1 && !HA(v0) && (v0 > HC || HF(v0))) {
      return v0;
    }
  }
  return -1;
}
En(Hx, "readyPartner");
function HR(Hg, HC) {
  let v0 = t(Hg);
  if (!v0 || !v0.entry.partners) {
    return true;
  } else {
    return v0.entry.partners.every(v1 => Hx(v1, HC) >= 0);
  }
}
En(HR, "partnersReady");
function Hs(Hg, HC) {
  let v0 = t(Hg);
  if (!!v0 && !!v0.entry.partners) {
    Hj[HC] = v0.entry.partners.map(v1 => {
      let v2 = Hx(v1, HC);
      let v3 = {
        charaction: J.charaction[v2],
        faceaction: J.faceaction[v2],
        chartarget: J.chartarget[v2],
        charspecial: J.charspecial[v2]
      };
      J.charaction[v2] = 9;
      J.faceaction[v2] = 6;
      J.charspecial[v2] = 0;
      return {
        slot: v2,
        prev: v3
      };
    });
  }
}
En(Hs, "commitJoin");
function HQ(Hg) {
  let HC = Hj[Hg];
  if (HC) {
    for (let {
      slot: v0,
      prev: v1
    } of HC) {
      J.charaction[v0] = v1.charaction;
      J.faceaction[v0] = v1.faceaction;
      J.chartarget[v0] = v1.chartarget;
      J.charspecial[v0] = v1.charspecial;
    }
    delete Hj[Hg];
  }
}
En(HQ, "undoJoin");
function HY() {
  Hj = {};
}
En(HY, "clearJoins");
var Hl = class vs extends E8 {
  create() {
    Object.assign(this, {
      t: 0,
      life: 0,
      fade: 0,
      spin: 0,
      trail: 0,
      target: null,
      home: 0,
      onHit: null,
      hit: 0,
      grow: 0,
      image_xscale: 2,
      image_yscale: 2,
      image_speed: 0.25
    });
  }
  step() {
    this.t++;
    if (this.target && !this.hit) {
      let [Hg, HC] = this.target;
      if (this.home > 0) {
        let v0 = (EE(this.x, this.y, Hg, HC) - this.direction + 540) % 360 - 180;
        this.direction += v0 / this.home;
      }
      if (EH(this.x, this.y, Hg, HC) <= Math.max(16, this.speed) && (this.hit = 1, this.x = Hg, this.y = HC, this.speed = 0, this.onHit && this.onHit(this), !this.linger)) {
        this.instance_destroy();
        return;
      }
    }
    if (this.spin) {
      this.image_angle += this.spin;
    }
    if (this.grow) {
      this.image_xscale += this.grow;
      this.image_yscale += this.grow;
    }
    if (this.trail && this.t % this.trail === 0) {
      let v1 = E0(this.x, this.y, S);
      Object.assign(v1, {
        sprite_index: this.sprite_index,
        image_index: this.image_index,
        image_speed: 0,
        image_angle: this.image_angle,
        image_xscale: this.image_xscale,
        image_yscale: this.image_yscale,
        image_blend: this.image_blend,
        image_alpha: this.image_alpha * 0.6,
        depth: this.depth + 1,
        fadeSpeed: 0.1
      });
    }
    if (this.fade && (this.image_alpha -= this.fade, this.image_alpha <= 0)) {
      this.instance_destroy();
      return;
    }
    if (this.life && this.t >= this.life) {
      this.instance_destroy();
    }
  }
};
En(Hl, "obj_partyfx");
Ek(Hl, "kinds", E9("obj_partyfx", E8));
Ek(Hl, "defaultDepth", -20);
var HD = Hl;
var HT = En(Hg => !!Hg && !!E1[Hg], "hasSpr");
function Hc(Hg) {
  if (J.monster[Hg] === 1) {
    return Hg;
  }
  for (let HC = 0; HC < 3; HC++) {
    if (J.monster[HC] === 1) {
      return HC;
    }
  }
  return Hg;
}
En(Hc, "retarget");
function HI(Hg, HC) {
  let v0 = J.char[HC];
  let v1 = p(Hg.entry) === 1 ? J.chartarget[HC] | 0 : Hc(J.chartarget[HC] | 0);
  let v2 = J.charinstance && J.charinstance[HC];
  let v3 = J.monsterinstance && J.monsterinstance[v1];
  let v4 = vE => {
    let vH = (Hj[HC] || []).find(vv => EX(J.char[vv.slot]) === vE);
    if (vH) {
      return vH.slot;
    } else {
      return -1;
    }
  };
  let v5 = vE => vE === "me" || vE === undefined ? HC : typeof vE == "number" ? vE : v4(vE) >= 0 ? v4(vE) : H3(vE, HC);
  let v6 = vE => {
    let vH = v5(vE);
    if (vH >= 0 && J.charinstance) {
      return J.charinstance[vH];
    } else {
      return null;
    }
  };
  let v7 = vE => vE ? [vE.x + (vE.mywidth || 60) / 2, vE.y + (vE.myheight || 70) / 2] : [100, 150];
  let v9 = {
    G: J,
    caster: HC,
    star: v1,
    id: v0,
    me: v2,
    enemy: v3,
    entry: Hg.entry,
    name: J.charname[v0] || Hg.member && Hg.member.name || "",
    enemyName: J.monstername && J.monstername[v1] || "the enemy",
    mag: J.battlemag[HC] | 0,
    at: J.battleat[HC] | 0,
    df: (J.monsterdf && J.monsterdf[v1]) | 0,
    random: vE => E7(vE),
    pick: vE => vE[Math.min(vE.length - 1, Math.floor(E7(vE.length)))],
    enemyIs: vE => !!v3 && !v3.destroyed && !!v3.is && !!v3.is(vE),
    inFight: vE => Ef.exists(vE),
    tired: (vE = v1) => J.monsterstatus[vE] === 1,
    mercyOf: (vE = v1) => J.mercymod[vE] | 0,
    hpOf: vE => {
      let vH = v5(vE);
      if (vH >= 0) {
        return J.hp[J.char[vH]];
      } else {
        return 0;
      }
    },
    slotOf: v5,
    nameOf: vE => {
      let vH = v5(vE);
      if (vH >= 0) {
        return J.charname[J.char[vH]];
      } else {
        return "";
      }
    },
    live: () => [0, 1, 2].filter(vE => J.monster[vE] === 1),
    party: () => {
      let vE = [];
      for (let vH = 0; vH < g(); vH++) {
        if (J.char[vH]) {
          vE.push(vH);
        }
      }
      return vE;
    },
    snd: (vE, vH) => E2(vE, vH),
    sndShort: (vE, vH, vv) => {
      let vf = E2(vE, {
        volume: vH
      });
      if (vf && vv) {
        EO(vf, 0, vv);
      }
      return vf;
    },
    stop: vE => E3(vE),
    delay: vE => {
      J.spelldelay = vE;
    },
    tp: vE => V(Ev(vE / 100 * J.maxtension)),
    mercy: (vE, vH = v1) => {
      if (J.monster[vH] === 1) {
        o(vH, vE);
      }
    },
    tire: (vE = v1) => {
      if (J.monster[vE] === 1 && (J.monsterstatus[vE] = 1, J.monstercomment[vE] = "(Tired)", J.chapter >= 3 && m.dmgwriter)) {
        let vH = m.dmgwriter(J.monsterx[vE], J.monstery[vE] + 20 - J.hittarget[vE] * 20);
        vH.type = 13;
      }
    },
    damage: (vE, vH = v1) => {
      if (J.monster[vH] === 1) {
        W(vH, Math.max(0, Ei(vE)), HC);
      }
    },
    heal: (vE, vH) => {
      let vv = v5(vE);
      if (!(vv < 0) && !!J.char[vv]) {
        r(vv, Ei(vH));
        EM.healFx(vv, Ei(vH));
      }
    },
    healAll: vE => {
      for (let vH = 0; vH < g(); vH++) {
        if (J.char[vH]) {
          r(vH, Ei(vE));
          EM.healFx(vH, Ei(vE));
        }
      }
    },
    pose: (vE, vH, vv = 30, vf = 0.25) => {
      let vO = v6(vE);
      if (vO) {
        if (vH === "attack") {
          vH = vO.attacksprite;
          vf = vO.attackspeed || 0.5;
          vv = Ei(((vO.attackframes | 0) + 1) / vf) + 4;
        }
        if (vH !== "act" && !HT(vH)) {
          vH = vO.idlesprite;
        }
        vO._pose = {
          sprite: vH,
          frames: vv,
          speed: vf
        };
      }
    },
    hide: (vE, vH = 20) => {
      let vv = v6(vE);
      if (vv) {
        vv.visible = false;
        vv._hideT = vH;
      }
    },
    at_: vE => v7(v6(vE)),
    enemyAt: (vE = v1) => [J.monsterx[vE] + 20, J.monstery[vE] + 30],
    spawn: (vE, vH, vv, vf = {}) => {
      let vO = E0(vH, vv, HD);
      if (!HT(vE)) {
        vO.visible = false;
      }
      vO.sprite_index = vE;
      vO.image_index = vf.frame || 0;
      vO.image_speed = vf.animate ?? 0.25;
      if (vf.scale) {
        vO.image_xscale = vf.scale;
        vO.image_yscale = vf.scale;
      }
      if (vf.flip) {
        vO.image_xscale = -vO.image_xscale;
      }
      if (vf.blend) {
        vO.image_blend = vf.blend;
      }
      if (vf.depth !== undefined) {
        vO.depth = vf.depth;
      }
      let vi = vf.to === "enemy" ? v9.enemyAt() : vf.to;
      if (vi) {
        vO.target = vi;
        vO.direction = vf.direction ?? EE(vH, vv, vi[0], vi[1]);
        vO.speed = vf.speed || 16;
        vO.home = vf.home || 0;
      } else if (vf.speed) {
        vO.direction = vf.direction || 0;
        vO.speed = vf.speed;
      }
      Object.assign(vO, {
        life: vf.life || (vi ? 120 : 0),
        fade: vf.fade || 0,
        spin: vf.spin || 0,
        trail: vf.trail || 0,
        grow: vf.grow || 0,
        linger: !!vf.linger
      });
      if (vf.angle !== undefined) {
        vO.image_angle = vf.angle;
      }
      if (vf.onHit) {
        vO.onHit = () => vf.onHit(vO);
      }
      return vO;
    },
    burst: (vE, vH, vv, vf = 8, vO = {}) => {
      for (let vi = 0; vi < vf; vi++) {
        v9.spawn(vE, vH, vv, {
          direction: 360 / vf * vi + (vO.turn || 0),
          speed: vO.speed || 8,
          fade: vO.fade || 0.06,
          scale: vO.scale,
          spin: vO.spin,
          animate: vO.animate,
          blend: vO.blend,
          angle: vO.angle ?? 360 / vf * vi
        });
      }
    },
    flash: (vE = v1) => {
      let vH = J.monsterinstance && J.monsterinstance[vE];
      if (vH && !vH.destroyed) {
        vH.flash = 1;
        vH.becomeflash = 1;
        vH.fsiner = 0;
      }
    },
    shake: () => {
      if (m.shake) {
        m.shake();
      }
    }
  };
  return v9;
}
En(HI, "makeFx");
var Hd = En(Hg => Hg && Hg.speaker || "", "speakerCode");
function HU(Hg, HC) {
  let v0 = [];
  Hg.filter(v1 => v1 != null && v1 !== "").forEach(v1 => {
    let v2 = v1[0] === "!";
    v0.push(v2 ? "\\W" + Hd(HC) + v1.slice(1) : "\\W0" + v1);
  });
  return v0.map((v1, v2) => v1 + (v2 === v0.length - 1 ? "/%" : "/"));
}
En(HU, "pages");
function HM(Hg, HC) {
  return ["* " + HC.name + " tried " + String(Hg.entry.name).toUpperCase() + "...", "* But " + HC.enemyName + " didn't notice."];
}
En(HM, "failLines");
var Hy = En((Hg, HC) => Hg.kind === "act" && Hg.scope !== "all" && !/^ch\d+:/.test(Hg.scope) && Ef.exists(Hg.scope) && Ef.first(Hg.scope).is("obj_monsterparent") && !HC.enemyIs(Hg.scope), "scopedMiss");
function HX(Hg, HC) {
  let v0 = t(Hg);
  if (!v0) {
    return false;
  }
  let v1 = HI(v0, HC);
  let v2 = Hy(v0, v1) ? HM(v0, v1) : typeof v0.entry.text == "function" ? v0.entry.text(v1) : v0.entry.text;
  if (!v2 || !v2.length) {
    v2 = ["* " + v1.name + " used " + String(v0.entry.name).toUpperCase() + "!"];
  }
  if (typeof v2 == "string") {
    v2 = [v2];
  }
  J.msg = new Array(100).fill(" ");
  HU(v2, v0.member).forEach((v3, v4) => {
    J.msg[v4] = v3;
  });
  return true;
}
En(HX, "spellText");
function HZ(Hg) {
  if (!t(Hg)) {
    return null;
  }
  J.fc = 0;
  J.typer = 4;
  let HC = X();
  if (!Ef.exists("obj_face")) {
    E0(26, 380, y);
  }
  return HC;
}
En(HZ, "spellWriter");
function HS(Hg, HC) {
  let v0 = t(Hg);
  if (!v0) {
    return false;
  }
  J.spelldelay = v0.entry.delay ?? 30;
  let v1 = HI(v0, HC);
  if (Hy(v0, v1)) {
    return true;
  }
  for (let v2 of v0.entry.partners || []) {
    v1.pose(v2, "act");
  }
  if (typeof v0.entry.cast == "function") {
    v0.entry.cast(v1);
  }
  return true;
}
En(HS, "cast");
var Hb = En(Hg => {
  let HC = t(Hg);
  return !!HC && HC.kind === "act";
}, "isAct");
function HV(Hg, HC) {
  let v0 = t(HC);
  if (!!Hg && !!v0 && v0.kind === "spell" && !!v0.entry.pose && !!HT(v0.entry.pose)) {
    if (Hg._spellsprite === undefined) {
      Hg._spellsprite = Hg.spellsprite;
      Hg._spellframes = Hg.spellframes;
    }
    Hg.spellsprite = v0.entry.pose;
    Hg.spellframes = (E1[v0.entry.pose].frames || 1) - 1;
    Hg.spellspeed = v0.entry.poseSpeed || 0.5;
  }
}
En(HV, "castPose");
function Hq(Hg, HC) {
  let v0 = t(HC);
  if (!!Hg && !!v0 && !!v0.entry.pose && !!HT(v0.entry.pose)) {
    if (Hg._actsprite === undefined) {
      Hg._actsprite = Hg.actsprite;
    }
    Hg.actsprite = v0.entry.pose;
  }
}
En(Hq, "actPose");
var Ho = En(Hg => {
  let HC = t(Hg);
  if (HC) {
    return HC.entry.ap || (HC.kind === "act" ? "mercy" : p(HC.entry) === 1 ? "heal" : "damage");
  } else {
    return null;
  }
}, "spellKind");
var Hm = ["char", "charinstance", "charaction", "faceaction", "charspecial", "chartarget", "targeted", "charmove", "charcantarget", "chardead", "charcond", "battleat", "battledf", "battlemag", "acting", "actingsingle", "actingsimul", "actingtarget", "temptension", "heromakex", "heromakey"];
var HW = null;
var HK = En(Hg => J.char[Hg] && J.hp[J.char[Hg]] > 0, "alive");
function Ha(Hg) {
  for (let HC of Hm) {
    let v0 = J[HC];
    if (!Array.isArray(v0)) {
      continue;
    }
    let v1 = v0.slice();
    for (let v2 = 0; v2 < Hg.length; v2++) {
      v0[v2] = v1[Hg[v2]];
    }
  }
  for (let v3 = 0; v3 < Hg.length; v3++) {
    let v4 = J.charinstance[v3];
    if (v4) {
      v4.myself = v3;
    }
  }
}
En(Ha, "permute");
function HG(Hg) {
  let HC = [];
  let v0 = new Set();
  for (let v1 = 0; v1 < 3; v1++) {
    let v2 = [];
    for (let v4 = v1; v4 < Hg; v4 += 3) {
      if (HK(v4) && J.charcantarget[v4] === 1) {
        v2.push(v4);
      }
    }
    let v3 = v2.length ? v2[Math.min(v2.length - 1, Math.floor(E7(v2.length)))] : v1;
    HC.push(v3);
    v0.add(v3);
  }
  for (let v5 = 0; v5 < Hg; v5++) {
    if (!v0.has(v5)) {
      HC.push(v5);
    }
  }
  return HC;
}
En(HG, "pickOrder");
function Hh(Hg, HC) {
  return HC.map(v0 => Hg[v0]);
}
En(Hh, "compose");
function Hw(Hg) {
  let HC = g();
  if (!(HC <= 3)) {
    if (J.charturn === 3 && (J.myfight !== 0 || J.mnfight !== 0)) {
      J.charturn = HC;
    }
    if (J.myfight === 0) {
      Hg._lateSpells = 0;
    } else if (J.myfight === 4) {
      Hg._lateSpells = 1;
    } else if (J.myfight === 1 && !Hg._lateSpells && Ef.exists("obj_attackpress") && !Ef.exists("obj_spellphase")) {
      let v0 = false;
      for (let v2 = 3; v2 < HC; v2++) {
        if (J.charaction[v2] === 2 || J.charaction[v2] === 4) {
          v0 = true;
        }
      }
      let v1 = v0 ? C("obj_spellphase") : null;
      if (v1) {
        Ef.with("obj_attackpress", v3 => v3.instance_destroy());
        J.myfight = 4;
        Hg._lateSpells = 1;
        E0(0, 0, v1);
      }
    }
    HP("scr_damage", false);
    HP("scr_damage_all", true);
    if (HW === null && J.battleover == null && Hg.victory !== 1 && (J.mnfight === 1 || J.mnfight === 1.5 || J.mnfight === 2)) {
      let v3 = HG(HC);
      Ha(v3);
      HW = {
        ord: v3,
        flag35: J.flag[35]
      };
      if (J.flag[35] === 0) {
        J.flag[35] = 7;
      }
      return;
    }
    if (HW !== null) {
      if (J.mnfight === 0 && J.myfight === 0) {
        Hp();
        return;
      }
      if ([0, 1, 2].every(v4 => !HK(v4))) {
        let v4 = false;
        for (let v5 = 3; v5 < HC; v5++) {
          if (HK(v5)) {
            v4 = true;
          }
        }
        if (v4) {
          let v6 = HG(HC);
          Ha(v6);
          HW.ord = Hh(HW.ord, v6);
        } else if (J.battleover == null) {
          J.flag[35] = HW.flag35;
          if (m.gameover) {
            m.gameover();
          }
        }
      }
    }
  }
}
En(Hw, "laneStep");
function Hp() {
  if (HW === null) {
    return;
  }
  let Hg = [];
  HW.ord.forEach((HC, v0) => {
    Hg[HC] = v0;
  });
  Ha(Hg);
  if (J.flag[35] === 7) {
    J.flag[35] = HW.flag35;
  }
  HW = null;
}
En(Hp, "laneEnd");
function HJ(Hg) {
  let HC = g();
  if (!!HW && !(HC <= 3)) {
    for (let v0 = 3; v0 < HC; v0++) {
      let v1 = J.char[v0];
      if (!v1 || !(J.hp[v1] > 0)) {
        continue;
      }
      let v2 = Math.max(1, Ei((Hg.damage | 0) - (J.battledf[v0] | 0) * 3));
      if (J.charaction[v0] === 10) {
        v2 = Ei(v2 * 3 / 4);
      }
      J.hp[v1] -= v2;
      let v3 = J.charinstance[v0];
      if (v3) {
        v3.hurt = 1;
        v3.hurttimer = 0;
      }
      if (J.hp[v1] <= 0) {
        J.hp[v1] = Ev(-J.maxhp[v1] / 2);
        J.charmove[v0] = 0;
        J.charcantarget[v0] = 0;
        J.chardead[v0] = 1;
        J.charaction[v0] = 0;
      }
    }
  }
}
En(HJ, "backHit");
function HP(Hg, HC) {
  let v0 = m[Hg];
  if (typeof v0 != "function" || v0.__lanes) {
    return;
  }
  let v1 = function (...v2) {
    let v3 = J.inv;
    let v4 = v0.apply(this, v2);
    if (HW && v3 < 0 && J.inv >= 0 && (HC || this.target === 3)) {
      HJ(this);
    }
    return v4;
  };
  v1.__lanes = true;
  m[Hg] = v1;
}
En(HP, "wrapAll");
var HN = En(Hg => HW ? HW.ord.indexOf(Hg) : Hg, "slotOfOriginal");
function HB() {
  HW = null;
  Hj = {};
}
En(HB, "resetForFight");
E4(HB);
function Hu() {
  if (!J.charinstance) {
    return;
  }
  for (let HC of J.charinstance) {
    if (!HC) {
      continue;
    }
    let v0 = HC._pose;
    if (v0 && HC.state === 0 && !(HC._hideT > 0) && J.hp[J.char[HC.myself]] > 0) {
      HC._pose = null;
      if (v0.sprite === "act") {
        HC.state = 6;
        HC.acttimer = 0;
      } else {
        Object.assign(HC, {
          state: 8,
          sprite_index: v0.sprite,
          image_index: 0,
          image_speed: v0.speed,
          _poseT: v0.frames
        });
      }
    }
    if (HC._actsprite !== undefined && HC.state !== 6) {
      HC.actsprite = HC._actsprite;
      HC._actsprite = undefined;
    }
    if (HC._hideT > 0 && --HC._hideT === 0) {
      HC.visible = true;
    }
    if (HC._spellsprite !== undefined && HC.state !== 2) {
      HC.spellsprite = HC._spellsprite;
      HC.spellframes = HC._spellframes;
      HC._spellsprite = undefined;
      HC.spellspeed = undefined;
    }
    if (HC._poseT > 0) {
      HC._poseT--;
      if (HC._poseT === 0 && HC.state === 8) {
        HC.state = 0;
        HC.image_speed = 0;
      }
    }
  }
  let Hg = g();
  if (Hg > 6) {
    for (let v1 of J.charinstance) {
      if (!v1) {
        continue;
      }
      let v2 = J.myfight === 0 && J.mnfight === 0 && v1.myself === J.charturn;
      v1.depth = v2 ? 100 : Eg(v1.myself, Hg);
      let v3 = (J.heromakex || [])[v1.myself];
      if (v3 !== undefined && v1.state === 0) {
        v1.x = v3 + (v2 ? 16 : 0);
      }
      let v4 = (J.heromakey || [])[v1.myself];
      v1.depthShade = v2 || v4 === undefined ? 0 : Math.max(0, Math.min(1, (236 - v4) / 212)) * 0.45;
    }
  }
}
En(Hu, "poseStep");
export { Ex as a, ER as b, Es as c, EQ as d, EY as e, EU as f, Ey as g, EX as h, EZ as i, EW as j, EK as k, Ea as l, Eh as m, Ew as n, Ep as o, EP as p, EN as q, EB as r, Eu as s, Eg as t, H0 as u, Hk as v, HL as w, HA as x, HR as y, Hs as z, HQ as A, HY as B, HX as C, HZ as D, HS as E, Hb as F, HV as G, Hq as H, Ho as I, Hw as J, Hp as K, HN as L, Hu as M };
