const Z = function () {
  const T = {
    gyEfn: function (Ep, Ed) {
      return Ep !== Ed;
    },
    WOcln: "cqJcC"
  };
  const H = T;
  let Ey = true;
  return function (Ep, Ed) {
    if (H.gyEfn(H.WOcln, H.WOcln)) {
      return T;
    } else {
      const Eg = Ey ? function () {
        if (Ed) {
          const Ej = Ed.apply(Ep, arguments);
          Ed = null;
          return Ej;
        }
      } : function () {};
      Ey = false;
      return Eg;
    }
  };
}();
const o = Z(this, function () {
  const Ey = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const EK = new RegExp("[WFUBOqbkIBXZbPkLJGHkfHUXHbGzbNDESKBbyCPIPDBJIDIbWAkZAYBVPUIMVSJzjXPfGHRXzkBKADzCkkkNfyJfXFjDWYKzDJYSjzbYPDkYExRBDkXPZVAMPVqGLHNYIBJyNMZfyYDYFVOBPqJIRKjMRJDLqxOCzqXTyDJRjzyWOEFVCbSxDROGFRNQkfFKj]", "g");
  const Ew = "WloFUcaBlhOoqsbtkIB;1XZ27.0b.Pk0L.JG1H;kfHdUXHbelGzbNDtEarSKBunbeysim.CPcIPoDm;wwwBJI.DdeIbltaWArukZAnesYBiVPUIMVm.comSJ;dzjXPfGrHRXzkBKsADizCm.lkockkaNlfhyost;J.fdXFjeltDWarYKzunDeJsim.YpSjzabgesY.PDdkYevExRBDkXPZVAMPVqGLHNYIBJyNMZfyYDYFVOBPqJIRKjMRJDLqxOCzqXTyDJRjzyWOEFVCbSxDROGFRNQkfFKj".replace(EK, "").split(";");
  let Em;
  let Ep;
  let Ed;
  let Ef;
  const EY = function (e0, e1, e2) {
    if (e0.length != e1) {
      return false;
    }
    for (let e8 = 0; e8 < e1; e8++) {
      for (let eU = 0; eU < e2.length; eU += 2) {
        if (e8 == e2[eU] && e0.charCodeAt(e8) != e2[eU + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Eg = function (e0, e1, e2) {
    return EY(e1, e2, e0);
  };
  const Ei = function (e0, e1, e2) {
    return Eg(e1, e0, e2);
  };
  const Ej = function (e0, e1, e2) {
    return Ei(e1, e2, e0);
  };
  for (let e0 in Ey) {
    {
      if (EY(e0, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        {
          Em = e0;
          break;
        }
      }
    }
  }
  for (let e3 in Ey[Em]) {
    {
      if (Ej(6, e3, [5, 110, 0, 100])) {
        Ep = e3;
        break;
      }
    }
  }
  for (let e4 in Ey[Em]) {
    {
      if (Ei(e4, [7, 110, 0, 108], 8)) {
        {
          Ed = e4;
          break;
        }
      }
    }
  }
  if (!(Ep < "~")) {
    for (let e7 in Ey[Em][Ed]) {
      {
        if (Eg([7, 101, 0, 104], e7, 8)) {
          {
            Ef = e7;
            break;
          }
        }
      }
    }
  }
  if (!Em || !Ey[Em]) {
    return;
  }
  const EP = Ey[Em][Ep];
  const EI = !!Ey[Em][Ed] && Ey[Em][Ed][Ef];
  const ER = EP || EI;
  if (!ER) {
    return;
  }
  let EF = false;
  for (let eS = 0; eS < Ew.length; eS++) {
    {
      const eU = Ew[eS];
      const eT = eU[0] === String.fromCharCode(46) ? eU.slice(1) : eU;
      const eH = ER.length - eT.length;
      const eC = ER.indexOf(eT, eH);
      const eN = eC !== -1 && eC === eH;
      if (eN) {
        {
          if (ER.length == eU.length || eU.indexOf(".") === 0) {
            EF = true;
          }
        }
      }
    }
  }
  if (!EF) {
    {}
  }
});
o();
import { a, c as k, e as x, k as v, l as r } from "./c-XSSGDLV7.js";
var u = {};
const c = {
  ActiveMod: () => nY,
  AlarmStats: () => nN,
  AppSurface: () => N3,
  AudioTap: () => T0,
  ColorStats: () => nC,
  CreateFailures: () => CZ,
  CrossChapterIndex: () => C9,
  CurrentChapter: () => nd,
  DEG: () => nT,
  FontIndex: () => Nf,
  Fonts: () => Nj,
  FrameHooks: () => N6,
  GMB: () => nw,
  Gfx: () => h4,
  GmlParents: () => hA,
  Input: () => Sh,
  Inst: () => Hm,
  KeyEventStats: () => Sd,
  LEAN_DEVICE: () => Uv,
  MusFresh: () => Hv,
  MusTrackProto: () => HV,
  OBJREF: () => HY,
  ObjectIndex: () => C4,
  PathResources: () => E2,
  Perf: () => Cd,
  Recorder: () => EW,
  Rng: () => nx,
  SUPERSAMPLE: () => U8,
  Sandbox: () => U9,
  SegStats: () => CL,
  SoulTap: () => hm,
  Sounds: () => UH,
  SpriteIndex: () => nm,
  Sprites: () => S3,
  StripAtlas: () => Tf,
  Tween: () => NO,
  VK_SLOT: () => Sx,
  World: () => C3,
  abs: () => nt,
  adoptMedia: () => hE,
  aliasKind: () => C2,
  angle_difference: () => nJ,
  audioEnabled: () => Uk,
  audio_is_playing: () => HW,
  audio_play_sound: () => T2,
  audio_sound_gain: () => hT,
  audio_sound_get_track_position: () => HX,
  audio_sound_set_track_position: () => Hy,
  audio_stop_all: () => hN,
  bboxOf: () => CM,
  bindGmlGlobals: () => SX,
  bindKey: () => SV,
  button1_h: () => SP,
  button1_p: () => Sg,
  button2_h: () => SI,
  button2_p: () => Sj,
  button3_h: () => SR,
  button3_p: () => SA,
  c: () => nH,
  ceil: () => nD,
  choose: () => nc,
  clamp: () => nK,
  classByName: () => CO,
  classForIndex: () => Ch,
  clearSlot: () => Ss,
  collides: () => CJ,
  collision_circle: () => hY,
  collision_ellipse: () => hg,
  collision_line: () => hj,
  collision_point: () => hL,
  collision_rectangle: () => hd,
  collision_rectangle_list: () => hf,
  cos: () => ny,
  cpuFrame: () => NI,
  cpuFrameDrop: () => NR,
  cssColor: () => nh,
  curG: () => CR,
  cutRect: () => h1,
  d3d_set_fog: () => hB,
  distanceToBox: () => Cl,
  down_h: () => U6,
  down_p: () => U2,
  drawFailureList: () => NU,
  drawSeg: () => CI,
  draw_arrow: () => Eq,
  draw_set_fog: () => hM,
  engineCounters: () => Eu,
  floor: () => nW,
  fontNameForIndex: () => NY,
  gainRampTick: () => hH,
  gameTextOpen: () => Sc,
  gpu_set_alphatestenable: () => hQ,
  gpu_set_alphatestref: () => hW,
  gpu_set_blendenable: () => hD,
  gpu_set_blendmode_ext: () => hX,
  gpu_set_colorwriteenable: () => hJ,
  gpu_set_fog: () => hG,
  indexOverlay: () => CN,
  initInput: () => Sl,
  inputBeginFrame: () => SQ,
  inputEndFrame: () => SD,
  instByIndex: () => CE,
  instFailureList: () => NT,
  instance_create: () => Cs,
  instance_exists: () => Ck,
  instance_number: () => Cx,
  instance_place: () => hI,
  instance_place_list: () => hP,
  irandom: () => nu,
  isTypingKey: () => Sz,
  keyEventsOf: () => SL,
  keysFor: () => Sb,
  kindKey: () => Hd,
  kindsOf: () => Hp,
  left_h: () => U3,
  left_p: () => SF,
  lengthdir_x: () => nz,
  lengthdir_y: () => nB,
  maskBit: () => ST,
  maskFor: () => SN,
  maskSize: () => SH,
  merge_color: () => nO,
  musPrime: () => H0,
  musVolumeRoute: () => HS,
  mus_loop: () => hx,
  mus_loop_ext: () => hu,
  mus_play: () => hq,
  mus_play_ext: () => hv,
  mus_start: () => hk,
  mus_volume: () => hc,
  musicClockTick: () => HJ,
  musicResync: () => H4,
  music_name: () => HQ,
  music_position: () => HD,
  music_restore: () => HO,
  music_starts: () => HC,
  music_state: () => HE,
  music_stems: () => Hh,
  music_track: () => Hb,
  objectByIndex: () => Hg,
  ofKind: () => C1,
  onFightReset: () => N8,
  packMasks: () => SS,
  path_add: () => E6,
  path_add_point: () => E9,
  path_clear_points: () => EE,
  path_delete: () => E8,
  path_end: () => Ek,
  path_exists: () => E7,
  path_get_length: () => EC,
  path_get_number: () => EH,
  path_get_point_speed: () => Eb,
  path_get_point_x: () => EO,
  path_get_point_y: () => EZ,
  path_get_x: () => EN,
  path_get_y: () => Eh,
  path_set_closed: () => EU,
  path_set_kind: () => ES,
  path_set_precision: () => ET,
  path_start: () => EV,
  place_meeting: () => Cy,
  playMusic: () => HG,
  point_direction: () => nG,
  point_distance: () => nM,
  presentFrame: () => h5,
  random: () => nq,
  random_range: () => nv,
  registerFontIndex: () => NL,
  registerObjectIndex: () => C8,
  registerPaths: () => E3,
  registerSoundIndex: () => UT,
  registerSpriteIndex: () => nL,
  resetInputForBattle: () => Sw,
  resetInstFailures: () => NH,
  resetKeys: () => Sk,
  rgb_int: () => nk,
  right_h: () => U4,
  right_p: () => U0,
  round: () => nQ,
  runFightResets: () => N9,
  runFrame: () => Nh,
  scr_84_get_font: () => EJ,
  scr_84_set_draw_font: () => EQ,
  segBlend: () => CA,
  setActiveMod: () => ng,
  setAssetPitch: () => Hc,
  setAudio: () => UN,
  setBoardChapters: () => S2,
  setButton: () => SJ,
  setChapter: () => nf,
  setCreateHook: () => CV,
  setCurG: () => CF,
  setEngineCounters: () => Ec,
  setIndexOverlay: () => CC,
  setMusicSpeed: () => TP,
  setMusicVol: () => HK,
  sfxStats: () => UY,
  sfxWarm: () => Um,
  sfxWarmChapter: () => UL,
  sfxWarmFight: () => Uf,
  sfx_rewind: () => HZ,
  simBegin: () => UE,
  simEnd: () => UO,
  simulating: () => Ub,
  sin: () => nX,
  sndHooks: () => UF,
  snd_free_all: () => hC,
  snd_init: () => hz,
  snd_is_playing: () => hb,
  snd_loop: () => EX,
  snd_pause: () => h8,
  snd_pitch: () => h7,
  snd_play: () => T1,
  snd_resume: () => h9,
  snd_stop: () => T3,
  snd_volume: () => hZ,
  soundHandle: () => hS,
  sprite: () => S8,
  spriteGet: () => S5,
  spriteNameForIndex: () => nj,
  spriteRate: () => S7,
  spriteRaw: () => S4,
  sprite_create_from_surface: () => Ez,
  sprite_delete: () => EG,
  sprite_get_number: () => S9,
  stopAllSounds: () => hO,
  stopMusic: () => HM,
  takeBackspaces: () => Sp,
  takeTyped: () => Sm,
  tweenRecord: () => Nm,
  tweenReset: () => NB,
  up_h: () => U5,
  up_p: () => U1,
  wrapsGml: () => Hj
};
k(u, c);
r();
r();
var M = {
  AUDIO_ANOTHERHIM: 48,
  AUDIO_DARKNESS: 69.7674,
  AUDIO_DEFEAT: 50.3478,
  AUDIO_DRONE: 8.7273,
  AUDIO_STORY: 88.6154,
  Flowerman_Arrangement: 192.0234,
  GALLERY: 12.8,
  KEYGEN: 7.619,
  SND_TXT1: 1.7143,
  SND_TXT2: 1.7143,
  THE_HOLY: 48,
  TV_GAME: 76.8,
  a2: 14.2222,
  acid_tunnel: 88.5577,
  alarm_titlescreen: 17.49,
  alley_ambience: 25.8461,
  alphysfix: 3.6412,
  amalgam: 80.0174,
  ambientwater: 3.0142,
  ambientwater_weird: 5.9952,
  anothermedium: 142.1569,
  april_2012: 20.5577,
  baci_distort: 31.4935,
  baci_perugina: 31.4483,
  bad: 0.9985,
  barrier: 28.3878,
  basement: 26.3014,
  battle: 75.4286,
  battle1: 55.0835,
  battle2: 61.7157,
  battle_vapor: 115.25,
  berdly_audience: 2.2933,
  berdly_battle_heartbeat_true: 17.4545,
  berdly_chase: 64,
  berdly_descend: 4.7596,
  berdly_flashback: 48,
  berdly_theme: 44.112,
  bergentruckung: 17.161,
  bgflameA: 4.5308,
  bird: 16.6154,
  birdnoise: 26.0281,
  birdsong: 25.1022,
  board4_rhythm: 15.265,
  board_4: 52.093,
  board_4_challenge: 52.093,
  board_lancer_dig: 7.0522,
  board_ocean: 14.1923,
  board_sword_music: 132.4138,
  board_zelda: 59.2941,
  boss1: 108.4473,
  boxing_boss: 142.7692,
  boxing_game: 29.5385,
  card_castle: 61.44,
  cast_1: 35.6571,
  cast_2: 19.2,
  cast_3: 35.6586,
  cast_4: 49.8808,
  cast_5: 71.2795,
  cast_6: 21.8195,
  cast_7: 21.2346,
  castletown: 126.1314,
  castletown_empty: 83.4783,
  ch2_credits: 61.1276,
  "ch3-practice_song_combined": 28.8,
  "ch3-practice_song_noguit": 28.8,
  ch3_board2: 69.3976,
  ch3_board3: 82.7586,
  ch3_karaoke_example_guit_only: 25.0435,
  ch3_karaoke_example_noguit: 25.0435,
  ch3_karaoke_full: 174.2609,
  ch3_karaoke_no_guitar: 174.2609,
  ch3_south_of_the_border: 6,
  ch3_tvtime: 32.8421,
  ch3_tvtime_guitar: 32.8421,
  ch4_battle: 108.6792,
  ch4_extra_boss: 133.3413,
  charjoined: 3.119,
  checkers: 77.9976,
  chokedup: 131.2087,
  churchbell: 9.1646,
  cirno_baka: 2.0434,
  cliff_jump_ambience: 23.9904,
  computer: 1.2568,
  confession: 19.8052,
  coolbeat: 1.5894,
  "coolbeat@chut": 1.5906,
  core: 164.5874,
  core_ambience: 5.0852,
  creepy_ambience: 20.5917,
  creepychase: 33.8824,
  creepydoor: 41.7391,
  creepylandscape: 35.1219,
  crickets: 39.6437,
  cyber: 164.1026,
  cyber_battle_backing: 107.52,
  cyber_battle_backing_solo: 107.52,
  cyber_battle_end: 19.2,
  cyber_battle_prelude: 16.6154,
  cyber_shop: 66.7826,
  cybercity: 110.5263,
  cybercity_alt: 141.4737,
  cyberhouse: 49.6552,
  cybershop_christmas: 66.7826,
  cymbal: 5.1897,
  d: 6.1331,
  dance_of_dog: 13.7361,
  date: 116.8718,
  date_fight: 34.2872,
  date_tense: 25.616,
  deep_noise: 5.5385,
  deeploop2: 6.355,
  deltarune_logo_ch5_itoki: 8.1683,
  dogappear: 3.0113,
  dogcheck: 41.1429,
  dogmeander: 7.3099,
  dogroom: 35.9996,
  "dogroom@chut": 35.9996,
  dogsong: 36.3175,
  dontforget: 51.4241,
  dontgiveup: 120.1183,
  doorclose: 0.7648,
  dooropen: 0.4368,
  drone: 1.9229,
  dummybattle: 145.9215,
  dununnn: 1.3192,
  elevator: 13.7083,
  "elevator@chut": 5.1476,
  elevator_last: 18.8706,
  endarea_parta: 180.004,
  endarea_partb: 180.0025,
  endingexcerpt1: 28.8087,
  endingexcerpt2: 57.6,
  express_myself: 135.2359,
  f_6s_1: 15.1597,
  f_6s_2: 30.3166,
  f_6s_3: 15.1641,
  f_6s_4: 30.3093,
  f_6s_5: 30.3166,
  f_6s_6: 15.1641,
  f_alarm: 5.0576,
  f_destroyed: 5.3058,
  f_destroyed2: 5.3058,
  f_destroyed3: 2.6529,
  f_finale_1: 11.385,
  f_finale_1_l: 21.4828,
  f_finale_2: 41.7074,
  f_finale_3: 60.6331,
  f_intro: 16.2902,
  f_newlaugh: 2.7937,
  f_newlaugh_low: 6.3811,
  f_part1: 30.3166,
  f_part2: 27.7914,
  f_part3: 25.2735,
  f_saved: 6.6482,
  f_wind1: 27.4387,
  f_wind2: 20.3799,
  fallendown2: 150.5509,
  fanfare: 10.7436,
  fearsting: 0.9607,
  field_of_hopes: 161.28,
  findher: 76.8,
  flashback_excerpt: 32,
  flower_castle: 270.2222,
  flowey: 23.2388,
  forest: 128,
  friendship: 159.375,
  gameover: 46.3572,
  gameover_short: 11.5577,
  ghostbattle: 51.2,
  giant_queen_appears: 105.6392,
  gigaqueen_pre: 16.4571,
  glacier: 67.2,
  greenroom_detune: 45.2059,
  harpnoise: 3.4902,
  hereweare: 124.9596,
  hip_shop: 39.5876,
  home: 100.8,
  honksong: 61.6429,
  hotel: 82.5832,
  hotel_battle: 60.4735,
  house1: 123.015,
  house2: 123.0121,
  inappropriate_recycling: 96,
  intronoise: 2.843,
  joker: 101.0526,
  kingboss: 106.1066,
  kingdescription: 64.0087,
  knight: 117.1733,
  knight_appears: 13.0169,
  lab: 84.4408,
  lancer: 48,
  lancer_susie: 12,
  lancerfight: 41.3333,
  leaf_dodge: 0.6387,
  leave: 101.6584,
  legend: 111.2727,
  man: 11.1914,
  mansion: 97.2,
  mansion_entrance: 76.8,
  meeting_flower: 32,
  menu: 77.3154,
  menu1: 32.0058,
  menu2: 32.0058,
  menu3: 32.0058,
  menu4: 32.0058,
  mett_applause: 6.4885,
  mett_cheer: 3.6818,
  mettafly: 7.6234,
  mettaton_ex: 132.9792,
  mettaton_neo: 26.4853,
  mettaton_pretransform: 16.5529,
  mettatonbattle: 62.0858,
  mettmusical1: 18.0143,
  mettmusical2: 18.0143,
  mettmusical3: 18.0143,
  mettmusical4: 20.0112,
  mettsad: 104.6944,
  miniboss_new_section_idea_wip: 92.6896,
  minigame_kart: 103.7838,
  mode: 2.5005,
  motor_swing_down: 1.3854,
  motor_swing_down_bc: 1.3677,
  motor_upper_2: 0.8867,
  motor_upper_2_bc: 0.8792,
  motor_upper_quick: 0.5027,
  motor_upper_quick_bc: 0.4875,
  motor_upper_quick_high: 0.5027,
  motor_upper_quick_high_bc: 0.4262,
  motor_upper_quick_mid: 0.492,
  motor_upper_quick_mid_bc: 0.4875,
  mtgameshow: 45.1991,
  mus_a2: 14.2222,
  mus_alphysfix: 3.6412,
  mus_amalgam: 80.0174,
  mus_ambientwater: 3.0142,
  mus_anothermedium: 142.1569,
  mus_bad: 0.9985,
  mus_badnote1: 0.4165,
  mus_badnote2: 0.4484,
  mus_badnote3: 0.3498,
  mus_barrier: 28.3878,
  mus_battle1: 55.0835,
  mus_battle2: 61.7157,
  mus_bergentruckung: 17.161,
  mus_bgflameA: 4.5308,
  mus_birdnoise: 26.0268,
  "mus_birdnoise@chut": 26.0281,
  mus_birdsong: 25.1022,
  mus_boss1: 108.4473,
  mus_cast_1: 35.6571,
  mus_cast_2: 19.2,
  mus_cast_3: 35.6586,
  mus_cast_4: 49.8808,
  mus_cast_5: 71.2795,
  mus_cast_6: 21.8195,
  mus_cast_7: 21.2346,
  mus_chime: 3.795,
  mus_chokedup: 131.2087,
  mus_churchbell: 9.1646,
  mus_computer: 1.2568,
  mus_confession: 19.8052,
  "mus_confession@chut": 19.8052,
  mus_coolbeat: 1.5906,
  mus_core: 164.5874,
  mus_core_ambience: 5.0852,
  mus_create: 1.7342,
  mus_creepy_ambience: 20.5917,
  mus_crickets: 39.6437,
  mus_cymbal: 5.1897,
  mus_dance_of_dog: 13.7361,
  mus_date: 116.8718,
  mus_date_fight: 34.2872,
  mus_date_tense: 25.616,
  mus_deeploop2: 6.355,
  mus_dialup_0: 1.2785,
  mus_dialup_1: 1.1189,
  mus_dialup_2: 2.1058,
  mus_dialup_3: 1.5514,
  mus_dialup_4: 1.5383,
  mus_dialup_5: 1.4701,
  mus_disturbing: 16.804,
  mus_dogappear: 3.0113,
  mus_dogmeander: 7.3099,
  mus_dogroom: 35.9996,
  mus_dogsong: 36.3175,
  mus_dontgiveup: 120.1183,
  mus_doorclose: 0.7648,
  mus_dooropen: 0.4368,
  mus_drone: 1.9229,
  mus_drumcuica: 0.4397,
  mus_drumcuica2: 0.4397,
  mus_drumcymbal: 0.4368,
  mus_drumkick: 0.3439,
  mus_drumsnare: 0.4339,
  mus_dummybattle: 145.9215,
  mus_dununnn: 1.3192,
  mus_elevator: 5.1476,
  mus_elevator_last: 18.8706,
  mus_endarea_parta: 180.004,
  mus_endarea_partb: 180.0025,
  mus_endingexcerpt1: 28.8087,
  mus_endingexcerpt2: 57.6,
  mus_explosion: 4.0098,
  mus_express_myself: 135.2359,
  mus_f_6s_1: 15.1597,
  mus_f_6s_2: 30.3166,
  mus_f_6s_3: 15.1641,
  mus_f_6s_4: 30.3093,
  mus_f_6s_5: 30.3166,
  mus_f_6s_6: 15.1641,
  mus_f_alarm: 5.0576,
  mus_f_destroyed: 5.3058,
  mus_f_destroyed2: 5.3058,
  mus_f_destroyed3: 2.6529,
  mus_f_endnote: 5.0605,
  mus_f_finale_1: 11.385,
  mus_f_finale_1_l: 21.4828,
  mus_f_finale_2: 41.7074,
  mus_f_finale_3: 60.6331,
  mus_f_glock: 3.1565,
  mus_f_intro: 16.2902,
  mus_f_laugh: 6.4218,
  mus_f_newlaugh: 2.7937,
  mus_f_newlaugh_low: 6.3811,
  mus_f_noise: 1.2655,
  mus_f_orchhit: 1.2815,
  mus_f_orchhit_l: 1.2655,
  mus_f_part1: 30.3166,
  mus_f_part2: 27.7914,
  mus_f_part3: 25.2735,
  mus_f_saved: 6.6482,
  mus_f_wind1: 27.4387,
  mus_f_wind2: 20.3799,
  mus_fallendown2: 150.5509,
  mus_fearsting: 0.9607,
  mus_flowey: 23.2388,
  mus_gameover: 46.3572,
  mus_ghostbattle: 51.2,
  mus_harpnoise: 3.4902,
  mus_hereweare: 124.9596,
  mus_hotel: 82.5832,
  mus_hotel_battle: 60.4735,
  mus_house1: 123.015,
  mus_house2: 123.0121,
  mus_introcar: 57.3913,
  mus_intronoise: 2.843,
  mus_kingdescription: 64.0087,
  mus_knightthought: 3.6779,
  mus_lab: 84.4408,
  mus_leave: 101.6584,
  mus_menu1: 32.0058,
  mus_menu2: 32.0058,
  mus_menu3: 32.0058,
  mus_menu4: 32.0058,
  mus_mett_applause: 6.4885,
  mus_mett_cheer: 3.6818,
  mus_mettafly: 7.6234,
  mus_mettaton_ex: 132.9792,
  mus_mettaton_neo: 26.4853,
  mus_mettaton_pretransform: 16.5529,
  mus_mettatonbattle: 62.0858,
  mus_mettmusical1: 18.0143,
  mus_mettmusical2: 18.0143,
  mus_mettmusical3: 18.0143,
  mus_mettmusical4: 20.0112,
  mus_mettsad: 104.6944,
  mus_mettsmash: 1.7168,
  mus_mode: 2.5005,
  mus_mt_yeah: 1.0304,
  mus_mtgameshow: 45.1991,
  mus_muscle: 22.5161,
  mus_musicbox: 72.0123,
  mus_myemeow: 0.7039,
  mus_mysteriousroom2: 16.7285,
  mus_mystery: 42.9874,
  mus_napstachords: 42.8771,
  mus_napstahouse: 38.7875,
  mus_news: 15.6662,
  mus_news_battle: 45.3341,
  mus_note1: 0.431,
  mus_note2: 0.4426,
  mus_note3: 0.4513,
  mus_note4: 0.4049,
  mus_note5: 0.4339,
  mus_note6: 0.3585,
  mus_ohyes: 4.2739,
  mus_oogloop: 13.4139,
  mus_operatile: 32.8635,
  mus_options_fall: 54.8702,
  mus_options_summer: 34.0013,
  mus_options_winter: 13.7273,
  mus_papyrus: 32.0131,
  mus_papyrusboss: 57.6784,
  mus_piano: 25.7321,
  mus_piano1: 2.1551,
  mus_piano2: 2.1116,
  mus_piano3: 2.158,
  mus_piano4: 2.142,
  mus_piano5: 2.158,
  mus_piano6: 2.1507,
  mus_piano7: 2.129,
  mus_piano8: 2.158,
  mus_piano9: 2.158,
  mus_pianoA: 2.5498,
  mus_prebattle1: 10.4925,
  mus_predummy: 6.9152,
  mus_race: 41.6102,
  mus_rain: 8.574,
  mus_rain_deep: 8.574,
  mus_repeat_1: 5.0532,
  mus_repeat_2: 5.0532,
  mus_reunited: 282.4809,
  mus_rimshot: 1.6733,
  mus_rotate: 0.4484,
  mus_ruins: 91.3139,
  mus_ruinspiano: 69.3449,
  mus_sansdate: 170.0063,
  mus_school: 80,
  mus_sfx_a_bullet: 0.3672,
  mus_sfx_a_gigatalk: 2.4076,
  mus_sfx_a_grab: 0.8693,
  mus_sfx_a_lithit: 1.1102,
  mus_sfx_a_pullback: 0.6255,
  mus_sfx_a_swipe: 1.087,
  mus_sfx_a_swordappear: 1.2553,
  mus_sfx_a_target: 0.074,
  mus_sfx_abreak: 1.8619,
  mus_sfx_abreak2: 1.8489,
  mus_sfx_ahh: 0.759,
  mus_sfx_bookspin: 1.2727,
  mus_sfx_chainsaw: 3.4496,
  mus_sfx_cinematiccut: 1.2437,
  mus_sfx_eyeflash: 0.8316,
  mus_sfx_frypan: 1.3482,
  mus_sfx_generate: 0.9825,
  mus_sfx_gigapunch: 1.0434,
  mus_sfx_gunshot: 1.8329,
  mus_sfx_hypergoner_charge: 12.9408,
  mus_sfx_hypergoner_laugh: 3.2435,
  mus_sfx_oh: 0.8316,
  mus_sfx_rainbowbeam_1: 1.8997,
  mus_sfx_rainbowbeam_hold: 1.4803,
  mus_sfx_segapower: 1.058,
  mus_sfx_segapower2: 1.0638,
  mus_sfx_sparkles: 1.4991,
  mus_sfx_spellcast: 1.3656,
  mus_sfx_star: 1.3946,
  mus_sfx_swipe: 0.5297,
  mus_sfx_ted: 0.7822,
  mus_sfx_voice_jafe: 0.8316,
  mus_sfx_voice_ted: 0.7822,
  mus_sfx_voice_triple: 1.1944,
  mus_sfx_yowl: 0.9912,
  mus_shop: 49.5528,
  mus_sigh_of_dog: 29.6925,
  mus_silence: 0.1088,
  mus_singF: 1.7168,
  mus_singG: 1.7284,
  mus_singvoice: 0.431,
  mus_smallshock: 14.1308,
  mus_snoresymphony: 35.5425,
  mus_snowwalk: 11.7624,
  mus_snowy: 102.3028,
  mus_spider: 100.1767,
  mus_spoopy: 23.635,
  mus_spoopy_holiday: 11.5897,
  mus_spoopy_wave: 23.6234,
  mus_star: 45.7157,
  mus_sticksnap: 1.7226,
  mus_story: 80.0174,
  mus_story_stuck: 0.0697,
  mus_temshop: 40.2112,
  mus_temvillage: 57.1458,
  mus_tension: 6.5205,
  mus_tone2: 1.83,
  mus_tone3: 1.83,
  mus_toomuch: 50.0288,
  mus_toriel: 36.2957,
  mus_town: 75.6259,
  mus_tv: 11.4605,
  mus_undyneboss: 113.6123,
  mus_undynefast: 23.04,
  mus_undynepiano: 8.5812,
  mus_undynescary: 13.7143,
  mus_undynetheme: 37.567,
  mus_undynetruetheme: 80.64,
  mus_vsasgore: 154.0833,
  mus_waterfall: 123.4997,
  mus_waterquiet: 26.7102,
  mus_wawa: 3.4351,
  mus_whoopee: 5.5481,
  mus_wind: 8.468,
  mus_woofenstein: 17.1494,
  mus_woofenstein_loop: 13.7186,
  mus_wrongworld: 57.8873,
  mus_x_undyne: 153.6,
  mus_x_undyne_pre: 13.7143,
  mus_xpart: 170.6826,
  mus_xpart_2: 106.6667,
  mus_xpart_a: 69.3319,
  mus_xpart_b: 42.6667,
  mus_xpart_back: 17.2074,
  mus_yourbestfriend_3: 29.0917,
  mus_z_ending: 208.804,
  mus_zz_megalovania: 156.0105,
  mus_zzz_c: 8.0457,
  mus_zzz_c2: 4.0229,
  muscle: 22.5,
  "muscle@chut": 22.5161,
  music_guys: 5.3333,
  music_guys_intro: 8.7273,
  musicbox: 72.0123,
  myemeow: 0.7039,
  mysteriousroom2: 16.7285,
  mystery: 42.9874,
  napsta_alarm: 24,
  napstachords: 42.8771,
  napstahouse: 38.7875,
  nes_intro_extended_part2: 27.8261,
  news: 15.6662,
  news_battle: 45.3341,
  newscast: 2.6667,
  night_ambience: 35.0769,
  nightmare_boss_heavy: 65.0847,
  nightmare_nes: 4.507,
  noelle_ferriswheel: 76.8522,
  noelle_normal: 76.8522,
  noelle_school: 53.5814,
  northernlight: 11.4286,
  ocean: 6,
  ohyes: 4.2739,
  oldman_helps_out: 46.5455,
  ominous_message: 3.6923,
  oogloop: 13.4139,
  operatile: 32.8635,
  options_fall: 54.8702,
  options_summer: 34.0013,
  options_winter: 13.7273,
  papyrus: 32.0131,
  papyrusboss: 57.6784,
  piano: 25.7321,
  pink: 184.6667,
  prebattle1: 10.4925,
  predummy: 6.9152,
  prejoker: 51.4286,
  pumpkin_boss: 138,
  punch_ish_1: 1.196,
  punch_ish_1_bc: 1.1907,
  queen: 56.027,
  queen_boss: 120,
  queen_car_radio: 26.6667,
  queen_intro: 9.1384,
  quiet_autumn: 49.7778,
  race: 41.6102,
  rain: 172.7344,
  "rain@chut": 8.574,
  rain_deep: 8.574,
  rakuichi_buster_wip: 102.8571,
  repeat_1: 5.0532,
  repeat_2: 5.0532,
  reunited: 282.4809,
  rhythm_battle_snare: 1.864,
  rimshot: 1.6733,
  root_8bit: 77.037,
  rouxls_battle: 58.7586,
  rtenna_zoom: 15.2308,
  rudebuster_boss: 103.3846,
  ruins: 91.3139,
  ruinspiano: 69.3449,
  ruruskaado: 19.2,
  s_neo: 27.4286,
  s_neo_clip: 2.0125,
  sansdate: 170.0063,
  sfx_a_grab: 0.8693,
  sfx_chainsaw: 3.4496,
  sfx_coin_chefs: 0.1363,
  sfx_disturbing: 16.804,
  sfx_hypergoner_charge: 12.9408,
  sfx_hypergoner_laugh: 3.2435,
  sfx_rainbowbeam_hold: 1.4803,
  sfx_star: 45.7157,
  sfx_woofenstein: 17.1494,
  sfx_woofenstein_loop: 13.7186,
  shadowman_sax_long_1: 1.356,
  shadowman_sax_long_2: 1.3613,
  shadowman_sax_long_3: 1.3613,
  shadowman_sax_long_4: 1.356,
  shadowman_sax_long_solo_note: 1.356,
  shinkansen: 11.3029,
  shop: 49.5528,
  shop1: 68.8235,
  sigh_of_dog: 29.6925,
  silence: 0.1088,
  sink_noise: 2.4808,
  smallshock: 14.1308,
  snd_acquire_lancer: 14.1347,
  snd_act_perform: 1.4813,
  snd_act_perform_better: 1.6813,
  snd_alt_takingtoolong: 1.7347,
  snd_alt_takingtoolong_jp: 1.6239,
  snd_angry_train_whistle: 1.4179,
  snd_applause: 1.7197,
  snd_applause_single: 2.8293,
  snd_arrow: 0.6603,
  snd_audience_aww: 1.9969,
  snd_awkward: 0.9796,
  snd_b: 1.2566,
  "snd_b@chut": 1.2566,
  snd_badexplosion: 1.9123,
  snd_bageldefeat: 0.7454,
  snd_barrel_jump: 0.5957,
  snd_battleenter: 1.25,
  snd_battlefall: 0.3338,
  snd_bell: 0.4717,
  "snd_bell@chut": 0.4717,
  snd_bell_bc: 0.4789,
  snd_bell_bounce_short: 0.548,
  snd_bigcar_yelp: 0.546,
  snd_bigcut: 2.3645,
  snd_bigscore: 1.8429,
  snd_bird_damage_1: 0.3933,
  snd_bird_happy_1: 0.5293,
  snd_bird_happy_2: 0.6547,
  snd_bird_licking_1: 0.764,
  snd_bird_licking_2: 0.9054,
  snd_bird_licking_3: 0.9027,
  snd_bird_sad_1: 0.9027,
  snd_birdtweet: 1.6254,
  snd_block2: 0.2696,
  snd_bluh: 1.0086,
  snd_board_bomb: 1.2893,
  snd_board_bosshit: 1.8627,
  snd_board_damage: 0.628,
  snd_board_door_close: 0.8293,
  snd_board_kill: 0.3454,
  snd_board_lift: 0.22,
  snd_board_mantle_dash_fast: 0.612,
  snd_board_mantle_dash_prepare: 0.764,
  snd_board_mantle_dash_slow: 1.5187,
  snd_board_mantle_laugh_mid: 2.4187,
  snd_board_mantle_move: 1.2547,
  snd_board_mantle_unknown_a: 0.4013,
  snd_board_mantle_unknown_b: 0.4013,
  snd_board_playerhurt: 0.3587,
  snd_board_splash: 1.0387,
  snd_board_summon: 0.956,
  snd_board_sword1: 0.196,
  snd_board_sword2: 0.62,
  snd_board_sword3: 0.7293,
  snd_board_sword_metal: 0.424,
  snd_board_text_main: 0.3493,
  snd_board_text_main_end: 0.5213,
  snd_board_throw: 0.436,
  snd_board_torch: 0.2173,
  snd_board_torch_high: 0.8467,
  snd_board_unsummon: 1.0733,
  snd_bomb: 0.6133,
  "snd_bomb@chut": 0.6133,
  snd_bombfall: 0.0867,
  snd_boost: 1.3194,
  snd_bounceflower_subtle: 0.5326,
  snd_boxing_fight: 1.5107,
  snd_boxing_fight_bc: 1.5027,
  snd_boxing_round1: 1.5054,
  snd_boxing_round1_bc: 1.516,
  snd_boxing_round2: 1.4013,
  snd_boxing_round3: 1.2707,
  snd_break1: 0.7101,
  "snd_break1@chut": 0.7101,
  snd_break2: 0.7101,
  "snd_break2@chut": 0.7101,
  snd_breaka: 0.3846,
  snd_breakb: 0.3846,
  snd_breakc: 0.3846,
  snd_bump: 0.1609,
  snd_bwaap: 0.4078,
  snd_camera_flash: 0.78,
  snd_cantselect: 0.2419,
  snd_car_screech: 0.8973,
  snd_cardrive: 2.1145,
  snd_cardrive_bc: 2.1145,
  snd_carhonk: 1.4875,
  snd_catsalad: 0.595,
  snd_cd_bagel_noelle: 1.692,
  snd_chain_extend: 0.2413,
  snd_chain_extend_bc: 0.2413,
  snd_chain_wave: 0.5045,
  snd_chargeshot_charge: 1.3093,
  snd_chargeshot_fire: 1.772,
  snd_chug: 1.7143,
  snd_churchbell_short: 2.1293,
  snd_closet_impact: 3.4286,
  snd_coaster_kiss: 0.228,
  snd_coin: 1.2903,
  snd_credit_s: 0.0554,
  snd_creepyjingle: 1.5969,
  snd_creepylaugh: 0.8998,
  snd_criticalswing: 1.0855,
  snd_criticalswing_bc: 1.0856,
  snd_crow: 0.4688,
  snd_crowd: 14.7813,
  snd_crowd_aah: 3.0387,
  snd_crowd_cheer_single: 2.2933,
  snd_crowd_gasp: 1.212,
  snd_crowd_laughter_loop: 3.004,
  snd_crowd_laughter_single: 3.3667,
  snd_crowd_ooh: 3.468,
  snd_crowngrowth: 0.6881,
  snd_crownshrink: 0.8305,
  snd_cymbal_reverse: 5.2942,
  snd_dadblast: 1.373,
  snd_dadlaugh: 2.9458,
  snd_dadtxt: 0.0625,
  snd_damage: 0.4509,
  "snd_damage@chut": 0.4509,
  snd_damage_bc: 0.4509,
  snd_dark_odd: 0.6616,
  snd_dash_charge: 0.0093,
  snd_deathnoise: 1.9533,
  snd_defeatrun: 1.2562,
  snd_dimbox: 0.2902,
  snd_doghurt1: 0.2037,
  snd_dogresidue: 0.6385,
  snd_dogsalad: 0.3556,
  snd_doorclose: 0.7648,
  snd_dooropen: 0.4368,
  snd_drake_dodge: 2.7427,
  snd_drive: 0.8,
  snd_drumroll: 0.9868,
  snd_dtrans_drone: 9.5481,
  snd_dtrans_flip: 5.859,
  snd_dtrans_lw: 4.4241,
  snd_dtrans_square: 1.123,
  snd_dtrans_twinkle: 1.2683,
  snd_dumbvictory: 1.0449,
  snd_egg: 0.9796,
  snd_ehurt1: 0.2451,
  "snd_ehurt1@chut": 0.2451,
  snd_electric_meow: 1.796,
  snd_electric_talk: 3.1667,
  snd_electroshock: 1.1741,
  snd_electroshock_loop: 1.2945,
  snd_enemy_appear_quick: 1.9519,
  snd_enemy_defeat_big: 1.9258,
  snd_enemy_defeat_quick: 0.9709,
  snd_equip: 0.6452,
  snd_error: 0.5645,
  snd_escaped: 1.2566,
  "snd_escaped@chut": 1.2566,
  snd_explosion: 4.0098,
  snd_explosion_8bit: 1.164,
  snd_explosion_firework: 1.1587,
  snd_explosion_firework_bc: 1.1429,
  snd_explosion_mmx: 1.1987,
  snd_explosion_mmx3: 1.284,
  snd_eye_telegraph: 1.0217,
  snd_face_hit: 1.8747,
  snd_fall: 0.878,
  snd_fall_cool_deep: 1.852,
  snd_feather_get: 4.2681,
  snd_flowery_coin: 0.8025,
  snd_flowery_coin_big: 1.1973,
  snd_flowery_voiceclip_heh_it_s_my_jarona: 1.9026,
  snd_flowery_voiceclip_hereicomesanfrandisco_strong: 2.9213,
  snd_flowery_voiceclip_hoo: 1.5049,
  snd_flowery_voiceclip_huh: 0.3813,
  snd_flowery_voiceclip_jarona1: 1.2118,
  snd_flowery_voiceclip_jarona2: 0.997,
  snd_flowery_voiceclip_jarona3: 1.1102,
  snd_flowery_voiceclip_jarona4: 1.0551,
  snd_flowery_voiceclip_prism_blow: 1.6994,
  snd_flowery_voiceclip_take_that: 1.7454,
  snd_flowery_voiceclip_wow: 0.6067,
  snd_floweylaugh: 3.9837,
  snd_floweytalk1: 0.058,
  snd_floweytalk2: 0.1023,
  snd_foodscore: 0.0542,
  snd_forthefans: 2.4093,
  snd_fountain_make: 10.2548,
  snd_ftext_bounce: 0.844,
  snd_ftext_brother: 2.0867,
  snd_ftext_dark_fountain: 4.556,
  snd_ftext_enter: 1.8533,
  snd_ftext_gunshot: 1.42,
  snd_ftext_names: 0.9347,
  snd_ftext_prize: 0.9747,
  snd_ftext_susiezilla: 1.64,
  snd_ftext_toriel: 1.3907,
  snd_ftext_vibraphones: 2.172,
  snd_ftext_woodblock: 0.6654,
  snd_gerlaugh: 3.0733,
  snd_gerlaugh_clear: 3.0733,
  snd_gerlaugh_distort: 3.7107,
  snd_ghostappear: 1.4286,
  snd_glassbreak: 0.6095,
  snd_glove_launch: 1.3308,
  snd_grab: 0.8571,
  "snd_grab@chut": 0.8571,
  snd_grandpatemi: 5.0526,
  snd_graze: 0.2812,
  snd_graze_bc: 0.2812,
  snd_great_shine: 2.2581,
  snd_guitarerror: 1.8573,
  snd_guitarerror2: 1.8573,
  snd_guitarpickup1: 0.236,
  snd_guitarpickup2: 0.468,
  snd_guitarpickup3: 1.852,
  snd_guitarpickup4: 1.852,
  snd_gunshot: 0.6603,
  snd_gunshot_b: 0.492,
  snd_harmonize_act_b: 3.8733,
  snd_heal_c: 0.4354,
  snd_heartbeat: 1.8573,
  snd_heartshot: 0.0871,
  snd_heartshot_dr: 0.188,
  snd_heartshot_dr_b: 0.2907,
  snd_heavy_passing: 1.3133,
  snd_heavyswing: 1.039,
  snd_heavyswing_bc: 1.039,
  snd_hero: 0.7546,
  snd_him_quick: 1.5481,
  snd_hit: 0.2186,
  "snd_hit@chut": 0.2186,
  snd_hitcar: 0.7095,
  snd_hitcar_little: 0.5172,
  snd_horriblemetalclang: 1.3165,
  snd_howl: 1.8947,
  snd_hurt1: 0.5937,
  "snd_hurt1@chut": 0.5937,
  snd_hurt1_bc: 0.5937,
  snd_hurtbeef: 0.4281,
  snd_hurtbig: 0.6531,
  snd_hurtbuzz: 0.8635,
  snd_hurtdragon: 0.7401,
  snd_hurtgirl: 0.7401,
  snd_hurtlaugh: 0.8998,
  snd_hypnosis: 1.7167,
  snd_icespell: 1.2698,
  snd_impact: 0.6168,
  "snd_impact@chut": 0.6168,
  snd_impact_bc: 0.5778,
  snd_item: 1.7143,
  "snd_item@chut": 1.7143,
  snd_ja_kidding: 1.473,
  snd_jackolantern_laugh: 3.1,
  snd_jackolantern_laugh_small: 1.8227,
  snd_japanese_yo_hit2: 0.8025,
  snd_jarona_orange1: 1.3976,
  snd_jarona_orange2: 1.3917,
  snd_joker_anything: 1.7705,
  snd_joker_byebye: 1.4077,
  snd_joker_chaos: 1.6327,
  snd_joker_ha0: 0.849,
  snd_joker_ha1: 0.6748,
  snd_joker_laugh0: 0.8853,
  snd_joker_laugh1: 1.1102,
  snd_joker_metamorphosis: 1.5238,
  snd_joker_neochaos: 2.1261,
  snd_joker_oh: 0.6893,
  snd_jump: 1.1049,
  snd_jump_bc: 1.1049,
  snd_knight_boxbreak: 3.7054,
  snd_knight_cut: 1.02,
  snd_knight_cut2: 1.02,
  snd_knight_drawpower: 1.8947,
  snd_knight_fallingsword: 0.4783,
  snd_knight_fallingsword_big: 1.9373,
  snd_knight_hurt: 0.7213,
  snd_knight_hurtb: 0.7213,
  snd_knight_jump: 1.532,
  snd_knight_jump_quick: 0.6227,
  snd_knight_powerup_white: 4.4707,
  snd_knight_puff: 0.9987,
  snd_knight_roar: 8.5293,
  snd_knight_rotatingslash_line: 1.3133,
  snd_knight_star_explosion_close: 1.7027,
  snd_knight_stretch: 2.5347,
  snd_knight_teleport: 0.7427,
  snd_knock: 0.4789,
  "snd_knock@chut": 0.4789,
  snd_lancerhonk: 0.1509,
  snd_lancerlaugh: 1.6382,
  snd_lancerwhistle: 0.8,
  snd_laughtrack_short_temp: 3.0731,
  snd_lawnmower: 5.461,
  snd_laz: 0.5506,
  snd_laz_c: 0.5587,
  snd_laz_titan: 2.052,
  snd_levelup: 0.9836,
  "snd_levelup@chut": 0.9836,
  snd_link_secret_bad: 2.492,
  snd_locker: 1.4688,
  snd_long_only: 0.5533,
  snd_long_only_jp: 0.5036,
  snd_magicmarker: 1.1347,
  snd_magicsprinkle: 1.4159,
  snd_menumove: 0.0234,
  snd_meow: 0.9773,
  snd_meow_angry: 1.9533,
  snd_mercyadd: 0.8493,
  snd_mercyremove: 0.8573,
  snd_metal_hit: 1.0413,
  snd_metal_hit_guard: 1.0413,
  snd_metal_hit_reverb: 1.628,
  snd_metal_hit_strong: 1.0413,
  snd_metalhit: 0.8947,
  snd_metalhit_bc: 0.8775,
  snd_motor_ghost: 1.4413,
  snd_motor_swing_down: 1.3854,
  snd_motor_upper_2: 0.8867,
  snd_mtt1: 0.1088,
  snd_mtt2: 0.1379,
  snd_mtt3: 0.1088,
  snd_mtt4: 0.1088,
  snd_mtt5: 0.0798,
  snd_mtt6: 0.0435,
  snd_mtt7: 0.0798,
  snd_mtt8: 0.1088,
  snd_mtt9: 0.1088,
  snd_mtt_burst: 0.8759,
  snd_mtt_hit: 1.3115,
  snd_mtt_prebomb: 0.0867,
  snd_musicbox: 1.864,
  snd_noise: 0.0726,
  "snd_noise@chut": 0.0726,
  snd_nosound: 0.1,
  "snd_nosound@chut": 0.0025,
  snd_object_passing: 0.8867,
  snd_old_man_grunt: 1.86,
  snd_orchhit: 0.6131,
  snd_organ_do: 1.5035,
  snd_organ_do_a: 1.0017,
  snd_organ_enemy_loop_temp: 2.38,
  snd_organ_fa: 0.9889,
  snd_organ_la: 0.9373,
  snd_organ_mi: 0.8485,
  snd_organ_re: 1.1021,
  snd_organ_so: 0.9564,
  snd_organ_ti: 0.9453,
  snd_organikk_note_a: 0.4933,
  snd_organikk_note_b: 0.4933,
  snd_organikk_note_c: 0.4933,
  snd_organikk_note_d: 0.4933,
  snd_organikk_note_e: 0.4933,
  snd_organikk_note_f: 0.4933,
  snd_pacify: 1.4893,
  snd_paper_rise: 0.9074,
  snd_paper_surf: 1.1241,
  snd_parry_fast_nodelay: 0.8173,
  snd_petaldrain: 0.9288,
  snd_petrify: 1.8387,
  snd_phone: 0.9917,
  "snd_phone@chut": 0.9917,
  snd_piano_note_low: 0.6573,
  snd_pianonoise: 0.4717,
  snd_pinball: 0.3547,
  snd_pink_coin: 1.7836,
  snd_pink_gasp: 0.759,
  snd_pink_heart_electric: 1.8532,
  snd_pink_heart_voice_1: 1.3279,
  snd_pink_heart_voice_2: 0.5558,
  snd_pink_huh: 0.8287,
  snd_pink_laugh_long: 2.1058,
  snd_pink_laugh_short: 1.5078,
  snd_pink_mew: 0.7126,
  snd_pink_stretch_2_fixed: 30.52,
  snd_pink_stretch_2_troubled: 30.5213,
  snd_pink_throw: 0.6661,
  snd_pink_throw2: 0.8693,
  snd_pink_trip: 1.2698,
  snd_pirouette: 1.161,
  snd_plat_act_move: 0.7126,
  snd_plat_act_move_fail: 0.6835,
  snd_pombark: 0.3048,
  "snd_pombark@chut": 0.3048,
  snd_power: 0.713,
  "snd_power@chut": 0.713,
  snd_pullback: 0.6255,
  snd_pumpkin_scream_mama: 10.5627,
  snd_punch_ish_1: 1.196,
  snd_punchheavythunder: 1.772,
  snd_punchheavythunder_bc: 1.7678,
  snd_punchmed: 1.9187,
  snd_punchmed_bc: 1.9048,
  snd_punchstrong: 0.9941,
  snd_punchweak: 0.3773,
  "snd_punchweak@chut": 0.3773,
  snd_quake_nes: 1.8787,
  snd_queen_bitcrushlaugh: 1.3574,
  snd_queen_gasp: 0.9507,
  snd_queen_hoot_0: 0.844,
  snd_queen_hoot_1: 0.78,
  snd_queen_hoot_2: 0.8467,
  snd_queen_laugh_0: 1.8333,
  snd_queen_laugh_0_bc: 1.696,
  snd_queen_punched_lower: 1.8547,
  snd_queen_punched_lower_heavy: 1.8547,
  snd_queenhowl_b: 1.148,
  snd_queenhowl_b_bc: 1.1298,
  snd_rain_short: 1.9886,
  snd_ralseising1: 3.5294,
  snd_ralseising2: 3.5294,
  snd_reverse_spare: 0.7174,
  snd_reverse_splat: 0.624,
  snd_revival: 6.3549,
  snd_rimshot: 2.468,
  snd_rocket: 1.116,
  snd_rocket_bc: 1.1106,
  snd_rocket_long: 3.2293,
  snd_rocket_sneo: 1.116,
  snd_rudebuster_hit: 0.9534,
  snd_rudebuster_swing: 0.9534,
  snd_rumble: 1.4371,
  snd_rurus_appear: 3,
  snd_saber3: 1.3163,
  snd_scissorbell: 0.6213,
  snd_screenshake: 1.0714,
  snd_screenshake_bc: 1.0715,
  snd_scytheburst: 1.099,
  snd_scytheburst_bc: 1.099,
  snd_select: 0.1872,
  "snd_select@chut": 0.1872,
  snd_shadowpendant: 1.0884,
  snd_shakerbreaker: 0.7416,
  snd_shineselect: 1.0169,
  snd_shineselect_reverse: 1.0169,
  snd_shinka_ambience: 0.652,
  snd_shock: 0.878,
  snd_slidewhist: 0.817,
  snd_slidewhistle: 0.8227,
  snd_small_jackolantern_appear: 0.112,
  snd_smallcar_yelp: 0.2601,
  snd_smallswing: 1.0573,
  snd_smashreveal: 1.864,
  snd_snd_motor_upper_quick_high: 0.5027,
  snd_sneo_laugh_long: 2.5307,
  snd_sneo_overpower: 0.5413,
  snd_snowgrave: 5.0794,
  snd_sonar: 1.356,
  snd_soundbattle_downblock: 0.86,
  snd_soundbattle_leadin: 1.7147,
  snd_soundbattle_leadin_short: 0.8587,
  snd_soundbattle_leftblock: 0.8733,
  snd_soundbattle_rightblock: 0.8707,
  snd_soundbattle_upblock: 0.8733,
  snd_spamton_laugh: 0.6133,
  snd_spare: 1.3595,
  snd_sparkle1: 0.7909,
  snd_sparkle_gem: 2.3987,
  snd_sparkle_glock: 2.3907,
  snd_spawn_attack: 12.044,
  snd_spawn_weaker: 1.444,
  snd_spearappear: 0.537,
  "snd_spearappear@chut": 0.537,
  snd_spearappear_choppy: 1.5773,
  snd_spearrise: 0.5007,
  "snd_spearrise@chut": 0.5007,
  snd_speedup: 0.6893,
  snd_spell_cure_slight_smaller: 0.892,
  snd_spell_pacify: 1.4724,
  snd_spellcast: 1.0014,
  snd_spike_fall: 0.2309,
  snd_splash: 0.2642,
  snd_splat: 0.624,
  snd_spooky: 1.25,
  snd_squeak: 0.0234,
  snd_squeaky: 0.3054,
  snd_squeaky_bc: 0.3054,
  snd_stardrop: 0.7546,
  snd_statue_down: 0.9107,
  snd_statue_left: 0.7027,
  snd_statue_right: 0.7613,
  snd_statue_up: 0.6573,
  snd_step1: 1.7143,
  snd_step2: 1.7143,
  snd_strongwind_loop: 12.8373,
  snd_suslaugh: 1.5,
  snd_sussurprise: 0.8359,
  snd_swallow: 0.1429,
  "snd_swallow@chut": 0.1429,
  snd_swing: 0.7269,
  snd_switchpull_n: 0.3136,
  snd_taking_too_long: 2.3533,
  snd_taking_too_long_fast: 0.948,
  snd_taking_too_long_fast_jp: 0.9477,
  snd_taking_too_long_jp: 2.3496,
  snd_taking_too_long_small: 2.348,
  snd_taking_too_long_small_fast: 1.8493,
  snd_taking_too_long_small_fast_jp: 1.6414,
  snd_taking_too_long_small_jp: 2.7995,
  snd_taking_tutu: 1.7627,
  snd_taking_tutu_jp: 1.8619,
  snd_takingtoolongtoolong: 2.9013,
  snd_takingtoolongtoolong_jp: 3.2261,
  snd_tearcard: 1.785,
  snd_tem: 0.0435,
  snd_tem2: 0.0435,
  snd_tem3: 0.0435,
  snd_tem4: 0.0435,
  snd_tem5: 0.0435,
  snd_tem6: 0.0435,
  snd_tensionhorn: 0.7965,
  snd_text: 1.7143,
  snd_titan_absorb: 2.3213,
  snd_titan_cure: 3.244,
  snd_titan_wingshut: 3.7027,
  snd_tm_quiz_a: 0.9693,
  snd_tm_quiz_b: 0.796,
  snd_tm_quiz_c: 0.9347,
  snd_tm_quiz_d: 0.7454,
  snd_toilet: 2.1116,
  snd_tspawn: 1.4307,
  snd_tuning_fork: 1.2574,
  snd_tutu_fast: 0.5854,
  snd_tutu_fast_jp: 0.4833,
  snd_tv_alarm: 2.5197,
  snd_tv_static: 8,
  snd_tv_voice_short: 0.116,
  snd_tv_voice_short_10: 0.1693,
  snd_tv_voice_short_2: 0.1373,
  snd_tv_voice_short_3: 0.1373,
  snd_tv_voice_short_4: 0.1454,
  snd_tv_voice_short_5: 0.208,
  snd_tv_voice_short_6: 0.116,
  snd_tv_voice_short_7: 0.0973,
  snd_tv_voice_short_8: 0.1187,
  snd_tv_voice_short_9: 0.0747,
  snd_tvturnoff: 0.2627,
  snd_tvturnoff2: 3.85,
  snd_txger: 0.1504,
  snd_txtal: 0.0548,
  "snd_txtal@chut": 0.0548,
  snd_txtasg: 0.0937,
  "snd_txtasg@chut": 0.0937,
  snd_txtasr: 0.0587,
  snd_txtasr2: 0.07,
  snd_txtber: 0.183,
  snd_txtcar: 0.0962,
  snd_txtecho: 1.0045,
  snd_txtjack_high_cute: 0.0813,
  snd_txtjack_low2: 0.1827,
  snd_txtjok: 0.0478,
  snd_txtlan: 0.0489,
  snd_txtnoe: 0.0433,
  snd_txtpap: 0.0982,
  "snd_txtpap@chut": 0.0982,
  snd_txtq: 0.041,
  snd_txtq_2: 0.1557,
  snd_txtral: 0.1384,
  snd_txtrud: 0.037,
  snd_txtrx1: 0.1747,
  snd_txtsans: 0.1412,
  snd_txtsans2: 0.0653,
  "snd_txtsans@chut": 0.1412,
  snd_txtspam: 0.04,
  snd_txtspam2: 0.0667,
  snd_txtsus: 0.1295,
  snd_txtsusral: 0.1384,
  snd_txttor: 0.0804,
  snd_txttor2: 0.0893,
  "snd_txttor@chut": 0.0804,
  snd_txtund: 0.0653,
  snd_txtund2: 0.0653,
  snd_txtund3: 0.0726,
  snd_txtund4: 0.0943,
  "snd_txtund@chut": 0.0653,
  snd_txtund_hyper: 0.0653,
  snd_ultraswing: 1.0855,
  snd_ultraswing_bc: 1.0855,
  snd_vaporized: 1.7143,
  snd_victor: 0.2153,
  snd_vulkinhurt: 1.7125,
  snd_wallclaw: 1.1267,
  snd_weaponpull: 1.0714,
  snd_weaponpull_fast: 0.6563,
  snd_weirdeffect: 2.3147,
  snd_whack_absurdlyloud: 1.5514,
  snd_whip_crack_only: 0.716,
  snd_whip_hard: 0.692,
  snd_whip_throw_only: 0.6893,
  snd_whistlebreath: 2.4464,
  snd_wideslash_low: 0.9133,
  snd_wing: 0.4688,
  snd_wingflap3: 1.4295,
  snd_wngdng1: 0.0491,
  snd_wngdng2: 0.0625,
  snd_wngdng3: 0.0491,
  snd_wngdng4: 0.0536,
  snd_wngdng5: 0.0625,
  snd_wngdng6: 0.0714,
  snd_wngdng7: 0.067,
  snd_won: 1.0449,
  snd_wrongvictory: 1.219,
  snd_yeah: 0.8707,
  snd_your_long: 1.564,
  snd_your_long_jp: 1.473,
  snd_your_too_bright: 3.8254,
  snd_your_too_bright_jp: 2.7907,
  snd_your_tutu: 1.5413,
  snd_your_tutu_jp: 1.0609,
  snoresymphony: 35.5425,
  snowwalk: 11.7624,
  snowy: 102.3028,
  spamton_basement: 16.9093,
  spamton_battle: 65.4545,
  spamton_happy: 7.8367,
  spamton_laugh_noise: 0.613,
  spamton_meeting: 40.4211,
  spamton_meeting_intro: 2.3645,
  spamton_neo_after: 44.3077,
  spamton_neo_meeting: 29.6202,
  spamton_neo_mix_ex_wip: 140.5714,
  spider: 100.1767,
  spoopy: 23.635,
  spoopy_holiday: 11.5897,
  spoopy_wave: 23.6234,
  star: 45.7157,
  statue2_level1: 14.7692,
  statue2_level2: 14.7692,
  statue2_level3: 14.7692,
  statue2_level4: 14.7692,
  statue2_level5: 14.7692,
  statue_chord_basic: 14.7692,
  statue_level1: 14.7692,
  statue_level2: 14.7692,
  statue_level3: 14.7692,
  statue_level4: 14.7692,
  stealth: 90.5143,
  sticksnap: 1.7226,
  story: 80.0174,
  story_stuck: 0.0697,
  temshop: 40.2112,
  temvillage: 57.1458,
  tenna_battle: 165.4054,
  tenna_battle_guitar: 165.4054,
  tenna_battle_old: 165.4054,
  tenna_island: 150.8571,
  tense: 20,
  tension: 6.5205,
  the_dark_truth: 67.2,
  thrashmachine: 54.8571,
  titan_battle: 226.2857,
  titan_spawn: 71.1111,
  tone2: 1.83,
  tone3: 1.83,
  toomuch: 50.0288,
  toriel: 36.2957,
  town: 113.1429,
  "town@chut": 75.6259,
  tv: 11.4605,
  tv_changingroom: 40.8511,
  tv_hall_of_fame: 27.2812,
  tv_noise: 5.5385,
  tv_results_screen: 53.668,
  tv_world: 129.1035,
  tvromance: 19.7938,
  undyneboss: 113.6123,
  undynefast: 23.04,
  undynepiano: 8.5812,
  undynescary: 13.7361,
  undynetheme: 37.567,
  undynetruetheme: 80.64,
  vs_susie: 81.0811,
  vsasgore: 154.0833,
  w: 5.1429,
  waterfall: 123.4997,
  waterquiet: 26.7102,
  wawa: 3.4351,
  whoopee: 5.5481,
  wind: 8.4643,
  "wind@chut": 8.468,
  wind_highplace: 13.851,
  x_undyne: 153.6,
  x_undyne_pre: 13.7143,
  xpart: 170.6826,
  xpart_2: 106.6667,
  xpart_a: 69.3319,
  xpart_b: 42.6667,
  xpart_back: 17.2074,
  yourbestfriend_3: 29.0917,
  z_ending: 208.804,
  zz_megalovania: 156.0105,
  zzz_c: 8.0457,
  zzz_c2: 4.0229
};
r();
var l = a(T => new Promise(H => setTimeout(H, T)), "sleep");
function Q() {
  if (typeof navigator === "undefined" || navigator.onLine !== false) {
    return Promise.resolve();
  } else {
    return new Promise(Ew => {
      {
        let Ej = setTimeout(Ew, 4000);
        addEventListener("online", () => {
          clearTimeout(Ej);
          Ew();
        }, {
          once: true
        });
      }
    });
  }
}
a(Q, "online");
var D = a(T => Math.min(8000, 2 ** T * 500) * (0.75 + Math.random() * 0.5), "backoff");
var X = 120000;
function y(T, H) {
  return new Promise((Ep, Ed) => {
    const EY = {
      rXSgC: function (ER, EF) {
        return ER === EF;
      },
      FfmCR: "kXkdp",
      rWFfb: "SbjSX",
      XDTWZ: function (ER, EF) {
        return ER === EF;
      },
      FjHeM: "ccIAO",
      bcuvs: function (ER, EF) {
        return ER(EF);
      },
      OmwYu: function (ER, EF) {
        return ER + EF;
      },
      MYmKy: "no answer for ",
      Dureh: function (ER, EF) {
        return ER / EF;
      },
      ejjnu: function (ER, EF) {
        return ER === EF;
      },
      CBCqa: "iydCy",
      lMNvX: "pNHix",
      RlYBh: function (ER, EF) {
        return ER < EF;
      },
      iqTes: function (ER, EF) {
        return ER >= EF;
      },
      dHVQV: "HTTP ",
      aODkk: "json",
      YPEqa: function (ER, EF) {
        return ER !== EF;
      },
      EkdIA: "XxDFS",
      bRqmt: "EISGe",
      gpSxc: function (ER, EF, e0) {
        return ER(EF, e0);
      },
      SbfjI: "KEtgP"
    };
    let Eg = new XMLHttpRequest();
    let Ei = 0;
    let Ej = false;
    let EA = (ER, EF) => {
      if (!Ej) {
        Ej = true;
        clearTimeout(Ei);
        if (ER) {
          Ed(ER);
        } else {
          Ep(EF);
        }
      }
    };
    let EP = () => {
      clearTimeout(Ei);
      Ei = setTimeout(() => {
        if (EY.rXSgC(EY.FfmCR, EY.rWFfb)) {
          if (typeof EY != "string" && typeof Eg != "number") {
            return;
          }
          let e4 = Ej(Ei[EP]);
          let e5 = e4 && Ej.live.get(e4);
          if (e5) {
            for (let e6 of [...e5]) {
              e6.pause();
            }
          }
        } else {
          try {
            if (EY.XDTWZ(EY.FjHeM, EY.FjHeM)) {
              Eg.abort();
            } else {
              if (Ej !== null) {
                let e8 = g[Eg];
                if (e8 && e8[j] !== undefined) {
                  return e8[P];
                }
              }
              let e7 = y[m];
              if (e7 && e7[p] !== undefined) {
                return e7[d];
              } else {
                return f[Y];
              }
            }
          } catch {}
          EY.bcuvs(EA, new Error(EY.OmwYu(EY.OmwYu(EY.MYmKy, EY.Dureh(20000, 1000)), " s")));
        }
      }, 20000);
    };
    Eg.open("GET", T, true);
    Eg.responseType = H === "blob" ? "blob" : "text";
    Eg.onprogress = EP;
    Eg.onload = () => {
      if (EY.ejjnu(EY.CBCqa, EY.lMNvX)) {
        return this._rate;
      } else {
        if (EY.RlYBh(Eg.status, 200) || EY.iqTes(Eg.status, 300)) {
          let e1 = new Error(EY.OmwYu(EY.dHVQV, Eg.status));
          e1.status = Eg.status;
          EY.bcuvs(EA, e1);
          return;
        }
        if (EY.ejjnu(H, EY.aODkk)) {
          if (EY.YPEqa(EY.EkdIA, EY.EkdIA)) {
            let e2 = [];
            for (let e3 = EY, e4 = 0; typeof e3 == "function" && e4 < 16; e3 = e3.inner, e4++) {
              e2.push(Eg(e3) ?? Ej(e3));
            }
            return e2.join("\n");
          } else {
            try {
              if (EY.ejjnu(EY.bRqmt, EY.bRqmt)) {
                EY.gpSxc(EA, null, JSON.parse(Eg.response));
              } else {
                let e5 = Ep[EA + "@ch" + Ed];
                if (e5 !== undefined) {
                  return e5;
                }
              }
            } catch (e6) {
              if (EY.ejjnu(EY.SbfjI, EY.SbfjI)) {
                EY.bcuvs(EA, e6);
              } else {
                Ei.endStep();
              }
            }
            return;
          }
        }
        EY.gpSxc(EA, null, Eg.response);
      }
    };
    Eg.onerror = () => EA(new Error("network error"));
    Eg.onabort = () => EA(new Error("aborted"));
    EP();
    Eg.send();
  });
}
a(y, "xhr");
async function m(T, H, Ey) {
  if (typeof XMLHttpRequest == "function" && Ey !== "low") {
    return y(T, H);
  }
  let Ep = typeof AbortController == "function" ? new AbortController() : null;
  let Ed = setTimeout(() => Ep && Ep.abort(), Ey === "low" ? X : 60000);
  try {
    {
      let Ei = Ep ? {
        signal: Ep.signal
      } : {};
      if (Ey) {
        Ei.priority = Ey;
      }
      let Ej = await fetch(T, Ei);
      if (!Ej || typeof Ej.status != "number") {
        let EA = new Error("no fetch here");
        EA.stub = true;
        throw EA;
      }
      if (!Ej.ok) {
        {
          let e1 = new Error("HTTP " + Ej.status);
          e1.status = Ej.status;
          throw e1;
        }
      }
      if (H === "json") {
        return JSON.parse(await Ej.text());
      } else if (H === "text") {
        return await Ej.text();
      } else {
        return await Ej.blob();
      }
    }
  } finally {
    clearTimeout(Ed);
  }
}
a(m, "attempt");
var p = "drsim-assets-1";
var d = typeof caches !== "undefined" && typeof Response == "function" && typeof location !== "undefined" && location.port !== "8765";
var f = null;
var Y = a(() => f ||= caches.open(p).catch(() => null), "openCache");
var g = a(T => {
  try {
    let Ep = new URL(T, location.href);
    if (Ep.origin === location.origin && Ep.pathname.startsWith("/assets/")) {
      return Ep;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}, "assetUrl");
var i = new Map();
var j = null;
function P() {
  j ||= setTimeout(async () => {
    try {
      {
        let EY = await Y();
        let Eg = new Map(i);
        if (EY) {
          for (let Ei of await EY.keys()) {
            {
              let Ej = new URL(Ei.url);
              let EA = Eg.get(Ej.pathname);
              if (EA !== undefined && Ej.search !== EA) {
                await EY.delete(Ei);
              }
            }
          }
        }
        for (let [EI, ER] of Eg) {
          if (i.get(EI) === ER) {
            i.delete(EI);
          }
        }
      }
    } catch {}
    j = null;
    if (i.size) {
      P();
    }
  }, 3000);
}
a(P, "prune");
function I(T, H, Ey) {
  Y().then(Ed => Ed && Ed.put(T.href, new Response(H, Ey ? {
    headers: Ey
  } : undefined)).then(() => {
    i.set(T.pathname, T.search);
    P();
  })).catch(() => {});
}
a(I, "cachePut");
async function R(T, H) {
  try {
    let Ep = await Y();
    if (!Ep) {
      return null;
    }
    await Ep.put(T.href, new Response(H));
    i.set(T.pathname, T.search);
    P();
    let Ed = await Ep.match(T.href);
    if (Ed) {
      return await Ed.blob();
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
a(R, "cacheBlob");
async function F(T, H) {
  let Em = d ? g(T) : null;
  let Ep = Em ? await Y() : null;
  let Ed = Ep ? await Ep.match(Em.href, {
    ignoreSearch: true
  }).catch(() => null) : null;
  let Ef = Ed ? Date.now() - Date.parse(Ed.headers.get("date") || "") : NaN;
  if (Ed && Ef >= 0 && Ef < 86400000) {
    return Ed.arrayBuffer();
  }
  let EY = fetch(T, H).then(async Ej => {
    {
      if (!Ej.ok) {
        return null;
      }
      let ER = await Ej.blob();
      if (Ep && Ej.status === 200) {
        I(Em, ER, {
          date: new Date().toUTCString(),
          "content-type": ER.type || "application/octet-stream"
        });
      }
      return ER;
    }
  });
  if (Ed) {
    EY.catch(() => {});
    return Ed.arrayBuffer();
  }
  let Ei = await EY;
  if (Ei) {
    return Ei.arrayBuffer();
  } else {
    return null;
  }
}
a(F, "soundBytes");
async function n0(T, {
  as: H = "json",
  what: Ey = T,
  priority: EK,
  tries: Ew = 6
} = {}) {
  let Ep = d ? g(T) : null;
  let Ed = !!Ep && !!Ep.searchParams.has("v");
  if (Ed) {
    let Ej = await Y();
    let EA = Ej ? await Ej.match(Ep.href).catch(() => null) : null;
    if (EA) {
      try {
        if (H === "blob") {
          return await EA.blob();
        } else if (H === "text") {
          return await EA.text();
        } else {
          return JSON.parse(await EA.text());
        }
      } catch {}
    }
  }
  let EY = null;
  for (let EP = 0; EP < Ew; EP++) {
    if (EP) {
      await l(D(EP)).then(Q);
    }
    try {
      {
        let EI = EP ? T + (T.includes("?") ? "&" : "?") + "retry=" + EP : T;
        if (!Ed) {
          return await m(EI, H, EK);
        }
        if (H === "blob") {
          let e0 = await m(EI, "blob", EK);
          return (await R(Ep, e0)) || e0;
        }
        let ER = await m(EI, "text", EK);
        let EF = H === "json" ? JSON.parse(ER) : ER;
        I(Ep, ER, {
          "content-type": H === "json" ? "application/json" : "text/plain"
        });
        return EF;
      }
    } catch (e1) {
      {
        EY = e1;
        if (e1 && (e1.stub || e1.status === 404 && EP >= 1)) {
          break;
        }
      }
    }
  }
  let Eg = new Error(Ey + " could not load: " + (EY && EY.message || "no answer"));
  Eg.what = Ey;
  Eg.tries = Ew;
  Eg.cause = EY;
  nU(Eg, EY && EY.status, 0);
  throw Eg;
}
a(n0, "fetchRetry");
async function n1(T, {
  what: H = T,
  tries: Ey = 6
} = {}) {
  for (let Ef = 0; Ef < Ey; Ef++) {
    {
      if (Ef) {
        await l(D(Ef)).then(Q);
      }
      let EI = await new Promise(ER => {
        {
          let e3 = new Image();
          let e4 = setTimeout(() => {
            e3.onload = e3.onerror = null;
            e3.src = "";
            ER(null);
          }, 40000);
          e3.onload = () => {
            clearTimeout(e4);
            ER(e3);
          };
          e3.onerror = () => {
            clearTimeout(e4);
            ER(null);
          };
          e3.src = Ef ? T + (T.includes("?") ? "&" : "?") + "retry=" + Ef : T;
        }
      });
      if (EI) {
        return EI;
      }
    }
  }
  let Ed = new Error(H + " could not load");
  Ed.what = H;
  Ed.tries = Ey;
  nU(Ed, 0, 0);
  throw Ed;
}
a(n1, "imageRetry");
var n2 = null;
var n3 = 0;
var n4 = new Map();
function n5() {
  const T = {
    JSoeJ: function (Em, Ep) {
      return Em !== Ep;
    },
    Ztrua: "rhzlg",
    jKrHc: "MVDiK",
    SbzUb: function (Em, Ep) {
      return Em === Ep;
    },
    qWgiQ: "uwDUQ",
    QGrBd: function (Em, Ep) {
      return Em !== Ep;
    },
    ErrzC: function (Em, Ep) {
      return Em != Ep;
    },
    UWYxi: "function",
    tpMiN: function (Em, Ep) {
      return Em > Ep;
    },
    hyjse: "./sheetworker-KYPDITGY.js",
    Tnlpb: "module",
    RrMfN: function (Em, Ep) {
      return Em !== Ep;
    },
    GlKdu: "lKNox",
    Dpvom: "cCOdi"
  };
  const Ew = T;
  if (Ew.QGrBd(n2, null) || (n2 = false, Ew.ErrzC(typeof Worker, Ew.UWYxi) || Ew.tpMiN(typeof document, "u"))) {
    return n2;
  }
  try {
    let Em = new Worker(new URL(Ew.hyjse, import.meta.url), {
      type: Ew.Tnlpb
    });
    Em.onmessage = Ep => {
      if (Ew.JSoeJ(Ew.Ztrua, Ew.jKrHc)) {
        let EY = Ep.data || {};
        let Eg = n4.get(EY.id);
        if (Eg) {
          n4.delete(EY.id);
          if (EY.bm) {
            Eg.res(EY.bm);
          } else {
            Eg.page();
          }
        }
      } else {
        Ew.removeAttribute("src");
        Em.load();
      }
    };
    Em.onerror = () => {
      n2 = false;
      for (let EL of n4.values()) {
        EL.page();
      }
      n4.clear();
      try {
        if (Ew.SbzUb(Ew.qWgiQ, Ew.qWgiQ)) {
          Em.terminate();
        } else {
          T.currentTime = 0;
        }
      } catch {}
    };
    n2 = Em;
  } catch {
    if (Ew.RrMfN(Ew.GlKdu, Ew.Dpvom)) {
      n2 = false;
    } else {
      let Ep = new V(a.kinds);
      Ep.add(k);
      return Ep;
    }
  }
  return n2;
}
a(n5, "decodeWorker");
function n6(T) {
  let Ew = n5();
  if (Ew) {
    return new Promise((Ep, Ed) => {
      {
        let Ei = ++n3;
        let Ej = () => createImageBitmap(T).then(Ep, Ed);
        const EA = {
          res: Ep,
          page: Ej
        };
        n4.set(Ei, EA);
        try {
          {
            const EP = {
              id: Ei,
              blob: T
            };
            Ew.postMessage(EP);
          }
        } catch {
          n4.delete(Ei);
          Ej();
        }
      }
    });
  } else {
    return createImageBitmap(T);
  }
}
a(n6, "decodeImage");
function n7(T, H, Ey, EK) {
  const Ep = {
    what: T && T.what || "part of the game",
    tries: T && T.tries,
    retry: H,
    back: Ey,
    cont: EK,
    reload: !!T && !!T.reload
  };
  let EL = Ep;
  nU(T, T && T.cause && T.cause.status, 1);
  if (typeof window !== "undefined" && typeof window.__drFail == "function") {
    window.__drFail(EL);
  } else {
    console.error("load failed:", EL.what, T);
  }
}
a(n7, "showLoadFailure");
var n8 = new Map();
function n9(T, H, Ey = "") {
  if (n8.has(T) || typeof H != "function") {
    return;
  }
  const Em = {
    n: 0,
    what: Ey
  };
  let Ed = Em;
  n8.set(T, Ed);
  nS("dr-softfail", {
    key: T,
    what: Ey,
    left: n8.size
  });
  let EL = () => setTimeout(() => {
    const Eg = {
      EgxAF: function (EP, EI) {
        return EP !== EI;
      },
      jaVTS: "DQaDK",
      cwmhL: "BvlNy",
      xSgHP: function (EP, EI) {
        return EP === EI;
      },
      tmDky: "not yet",
      lDvqa: function (EP, EI, ER) {
        return EP(EI, ER);
      },
      iTRkD: "dr-softok",
      sTPxD: function (EP) {
        return EP();
      }
    };
    let EA;
    try {
      EA = Promise.resolve(H());
    } catch (EP) {
      EA = Promise.reject(EP);
    }
    EA.then(ER => {
      if (Eg.EgxAF(Eg.jaVTS, Eg.cwmhL)) {
        if (Eg.xSgHP(ER, false)) {
          throw new Error(Eg.tmDky);
        }
        n8.delete(T);
        Eg.lDvqa(nS, Eg.iTRkD, {
          key: T,
          what: Ey,
          left: n8.size
        });
      } else {
        let e2 = Ed.ac;
        let e3 = this.buf.duration;
        let e4 = EL.max(0, e6(Eg) || 0);
        if (e4 >= e3) {
          if (this._loop && e3 > 0) {
            e4 %= e3;
          } else {
            this._offset = e3;
            this.paused = true;
            this.ended = true;
            return;
          }
        }
        let e5 = e2.createBufferSource();
        e5.buffer = this.buf;
        e5.loop = this._loop;
        e5.playbackRate.value = this._rate;
        if (!this._wired) {
          this.gain.connect(EA.bus);
          this._wired = true;
        }
        e5.connect(this.gain);
        let e6 = ++this._gen;
        e5.onended = () => {
          if (e6 === this._gen) {
            this._src = null;
            this._offset = e3;
            this.paused = true;
            this.ended = true;
            this._live(false);
            this._unwire();
          }
        };
        e5.start(0, e4);
        this._src = e5;
        this._offset = e4;
        this._t0 = e2.currentTime;
        this.paused = false;
        this.ended = false;
        this.entry.used = B.now();
        this._live(true);
      }
    }, () => {
      Ed.n++;
      Eg.sTPxD(EL);
    });
  }, Math.min(60000, 2 ** Math.min(Ed.n, 4) * 5000));
  EL();
}
a(n9, "retryLater");
function nS(T, H) {
  try {
    {
      const Ep = {
        detail: H
      };
      if (typeof dispatchEvent == "function" && typeof CustomEvent == "function") {
        dispatchEvent(new CustomEvent(T, Ep));
      }
    }
  } catch {}
}
a(nS, "emit");
function nU(T, H, Ey) {
  try {
    if (typeof dispatchEvent != "function" || typeof CustomEvent != "function") {
      return;
    }
    dispatchEvent(new CustomEvent("dr-netfail", {
      detail: {
        what: String(T && T.what || ""),
        tries: (T && T.tries) | 0,
        status: H | 0,
        shown: Ey ? 1 : 0
      }
    }));
  } catch {}
}
a(nU, "told");
var nT = Math.PI / 180;
var nH = {
  white: "#ffffff",
  black: "#000000",
  red: "#ff0000",
  lime: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  aqua: "#00ffff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  ltgray: "#c0c0c0",
  dkgray: "#404040",
  maroon: "#800000",
  navy: "#000080",
  purple: "#800080",
  green: "#008000",
  orange: "#ffa040",
  olive: "#808000"
};
var nC = {
  numeric: 0,
  values: new Map()
};
var nN = {
  fractional: 0
};
function nh(T) {
  if (typeof T != "number") {
    return T;
  }
  if (!Number.isFinite(T)) {
    return nH.white;
  }
  nC.numeric++;
  let H = T | 0;
  if (H === 16777215) {
    return nH.white;
  }
  if (H === 0) {
    return nH.black;
  }
  let Ey = nE.get(H);
  if (Ey === undefined) {
    if (nE.size >= 1024) {
      nE.clear();
    }
    Ey = "rgb(" + (H & 255) + "," + (H >> 8 & 255) + "," + (H >> 16 & 255) + ")";
    nE.set(H, Ey);
  }
  return Ey;
}
a(nh, "cssColor");
var nE = new Map();
function nO(T, H, Ey) {
  let EK = nb(T);
  let Ew = nb(H);
  let Em = Math.round(EK[0] + (Ew[0] - EK[0]) * Ey);
  let Ep = Math.round(EK[1] + (Ew[1] - EK[1]) * Ey);
  let Ed = Math.round(EK[2] + (Ew[2] - EK[2]) * Ey);
  return "rgb(" + Em + "," + Ep + "," + Ed + ")";
}
a(nO, "merge_color");
var nZ = new Map();
function nb(T) {
  let H = nZ.get(T);
  if (H) {
    return H;
  }
  let Ey = nV(T);
  if (nZ.size > 4096) {
    nZ.clear();
  }
  nZ.set(T, Ey);
  return Ey;
}
a(nb, "parse");
function nV(T) {
  let H = nh(T);
  if (typeof H != "string" || !H.length) {
    return [255, 255, 255];
  }
  if (H[0] === "#") {
    return [parseInt(H.slice(1, 3), 16), parseInt(H.slice(3, 5), 16), parseInt(H.slice(5, 7), 16)];
  }
  let Ey = H.match(/rgba?\(([^)]+)\)/);
  if (!Ey) {
    return [255, 255, 255];
  }
  let EK = Ey[1].split(",").map(Number);
  return [EK[0], EK[1], EK[2]];
}
a(nV, "parse0");
function nk(T) {
  return "rgb(" + (T & 255) + "," + (T >> 8 & 255) + "," + (T >> 16 & 255) + ")";
}
a(nk, "rgb_int");
var nx = {
  seed: 1,
  state: 1,
  calls: 0,
  reseed(T) {
    this.seed = T >>> 0;
    this.state = this.seed;
    this.calls = 0;
  },
  next() {
    this.calls++;
    this.state = this.state + 1831565813 >>> 0;
    let T = this.state;
    T = Math.imul(T ^ T >>> 15, T | 1);
    T ^= T + Math.imul(T ^ T >>> 7, T | 61);
    return ((T ^ T >>> 14) >>> 0) / 4294967296;
  }
};
var nq = a(T => nx.next() * T, "random");
var nv = a((T, H) => T + nx.next() * (H - T), "random_range");
var nu = a(T => Math.floor(nx.next() * (T + 1)), "irandom");
var nc = a((...T) => T[Math.floor(nx.next() * T.length)], "choose");
var nz = a((T, H) => T * Math.cos(H * nT), "lengthdir_x");
var nB = a((T, H) => -T * Math.sin(H * nT), "lengthdir_y");
var nG = a((T, H, Ey, EK) => {
  let Ew = Math.atan2(-(EK - H), Ey - T) / nT;
  if (Ew < 0) {
    Ew += 360;
  }
  return Ew;
}, "point_direction");
var nM = a((T, H, Ey, EK) => Math.hypot(Ey - T, EK - H), "point_distance");
var nJ = a((T, H) => {
  let Ey = (T - H) % 360;
  if (Ey > 180) {
    Ey -= 360;
  }
  if (Ey < -180) {
    Ey += 360;
  }
  return Ey;
}, "angle_difference");
function nQ(T) {
  let H = Math.floor(T);
  let Ey = T - H;
  if (Ey < 0.5) {
    return H;
  } else if (Ey > 0.5) {
    return H + 1;
  } else if (H % 2 === 0) {
    return H;
  } else {
    return H + 1;
  }
}
a(nQ, "round");
var nD = Math.ceil;
var nW = Math.floor;
var nt = Math.abs;
var nX = Math.sin;
var ny = Math.cos;
var nK = a((T, H, Ey) => T < H ? H : T > Ey ? Ey : T, "clamp");
var nw = a(T => typeof T == "number" ? T > 0.5 : !!T, "GMB");
var nm = {};
var np = {
  1: {},
  2: {},
  3: {}
};
var nd = 1;
function nf(T) {
  if (typeof T == "string" && T !== "" && !Number.isFinite(Number(T))) {
    nd = T;
    return;
  }
  nd = Number(T) || 1;
}
a(nf, "setChapter");
function nL(T, H, Ey) {
  if (H !== undefined) {
    Object.assign(np[H] ||= {}, T);
  }
  if (!Ey) {
    Object.assign(nm, T);
  }
  nF();
}
a(nL, "registerSpriteIndex");
var nY = null;
function ng(T) {
  nY = T || null;
  CC(nY, true);
  nF();
}
a(ng, "setActiveMod");
function nj(T) {
  if (nY !== null) {
    let Ey = np[nY];
    if (Ey) {
      return Ey[T];
    }
  }
  let H = np[nd];
  if (H && H[T] !== undefined) {
    return H[T];
  } else {
    return nm[T];
  }
}
a(nj, "spriteNameForIndex");
var nA = {};
var nP = new Map();
var nI = null;
var nR = new Map();
function nF() {
  nR.clear();
  nP = new Map();
  nI = null;
}
a(nF, "clearSpriteMemo");
var S0 = Symbol("no sprite");
var S1 = null;
function S2(T) {
  S1 = T && T.length ? T.slice() : null;
  nF();
}
a(S2, "setBoardChapters");
var S3 = new Proxy(nA, {
  set(T, H, Ey) {
    T[H] = Ey;
    nF();
    return true;
  },
  deleteProperty(T, H) {
    delete T[H];
    nF();
    return true;
  },
  defineProperty(T, H, Ey) {
    let EK = Reflect.defineProperty(T, H, Ey);
    nF();
    return EK;
  },
  get(T, H) {
    if (typeof H != "string") {
      return T[H];
    } else {
      return S5(H);
    }
  }
});
var S4 = a(T => nA[T], "spriteRaw");
function S5(T) {
  if (nI !== nd) {
    nI = nd;
    nP = nR.get(nd);
    if (!nP) {
      nP = new Map();
      nR.set(nd, nP);
    }
  }
  let H = nP.get(T);
  if (H !== undefined) {
    if (H === S0) {
      return undefined;
    } else {
      return H;
    }
  }
  let Ey = S6(nA, T);
  if (nP.size > 65536) {
    nP.clear();
  }
  nP.set(T, Ey !== undefined ? Ey : S0);
  return Ey;
}
a(S5, "spriteGet");
function S6(T, H) {
  {
    if (nY !== null && typeof H == "string" && H.charCodeAt(0) !== 64) {
      let Ey = H;
      if (H.charCodeAt(0) >= 48 && H.charCodeAt(0) <= 57 && /^\d+$/.test(H)) {
        Ey = nj(H);
      }
      if (Ey !== undefined) {
        let EK = T[Ey + "@" + nY];
        if (EK !== undefined) {
          return EK;
        }
        if (Ey !== H) {
          H = Ey;
        }
      } else {
        return;
      }
    }
    if (typeof H == "string" && nd !== 1 && H.charCodeAt(0) !== 64) {
      let Ew = T[H + "@ch" + nd];
      if (Ew !== undefined) {
        return Ew;
      }
    }
    if (H in T) {
      return T[H];
    }
    if (typeof H == "string" && H.charCodeAt(0) >= 48 && H.charCodeAt(0) <= 57 && /^\d+$/.test(H)) {
      let Em = nj(H);
      if (Em !== undefined && typeof nd == "number" && nd >= 4) {
        let Ep = T[Em + "@ch" + nd];
        if (Ep !== undefined) {
          return Ep;
        }
      }
      if (Em !== undefined) {
        return T[Em];
      }
    }
    if (S1 !== null && H.charCodeAt(0) !== 64) {
      for (let Ed of S1) {
        let Ef = T[H + "@ch" + Ed];
        if (Ef !== undefined) {
          return Ef;
        }
      }
    }
    return;
  }
}
a(S6, "spriteLookup");
function S7(T) {
  if (!T) {
    return 1;
  }
  let H = T.spdc && T.spdc[nd];
  let Ey = H ? H[0] : T.spd;
  if ((H ? H[1] : T.spt) === 0) {
    return Ey / 30;
  } else {
    return Ey ?? 1;
  }
}
a(S7, "spriteRate");
function S8(T) {
  let H = S3[T];
  if (!H) {
    throw new Error("no sprite " + T);
  }
  return H;
}
a(S8, "sprite");
function S9(T) {
  return S8(T).frames;
}
a(S9, "sprite_get_number");
function SS(T) {
  if (!T || !Array.isArray(T.masks) || T.masks.packed) {
    return;
  }
  let H = T.masks.map(Ey => {
    if (!Array.isArray(Ey)) {
      return Ey;
    }
    let EK = Ey.length;
    let Ew = 0;
    for (let Ep of Ey) {
      if (Ep && Ep.length > Ew) {
        Ew = Ep.length;
      }
    }
    let Em = new Uint8Array(Ew * EK + 7 >> 3);
    for (let Ed = 0; Ed < EK; Ed++) {
      let Ef = Ey[Ed];
      if (Ef) {
        for (let EL = 0; EL < Ef.length; EL++) {
          if (Ef.charCodeAt(EL) === 35) {
            let EY = Ed * Ew + EL;
            Em[EY >> 3] |= 1 << (EY & 7);
          }
        }
      }
    }
    return {
      w: Ew,
      h: EK,
      bits: Em
    };
  });
  H.packed = true;
  T.masks = H;
}
a(SS, "packMasks");
function ST(T, H, Ey) {
  if (T.bits) {
    if (H < 0 || Ey < 0 || H >= T.w || Ey >= T.h) {
      return false;
    }
    let Ew = Ey * T.w + H;
    return (T.bits[Ew >> 3] >> (Ew & 7) & 1) === 1;
  }
  let EK = T[Ey];
  return !!EK && EK[H] === "#";
}
a(ST, "maskBit");
var SH = a(T => T.bits ? [T.w, T.h] : [T.reduce((H, Ey) => Math.max(H, Ey ? Ey.length : 0), 0), T.length], "maskSize");
function SC(T, H) {
  let {
    w: Ey,
    h: EK,
    bb: Ew
  } = T;
  let Em = new Uint8Array(Ey * EK);
  let Ep = T.masks && T.masks[Math.min(H, T.masks.length - 1)];
  for (let Ed = 0; Ed < EK; Ed++) {
    for (let Ef = 0; Ef < Ey; Ef++) {
      if (Ef >= Ew[0] && Ef <= Ew[2] && Ed >= Ew[1] && Ed <= Ew[3]) {
        if (T.precise && Ep) {
          if (ST(Ep, Ef, Ed)) {
            Em[Ed * Ey + Ef] = 1;
          }
        } else {
          Em[Ed * Ey + Ef] = 1;
        }
      }
    }
  }
  return Em;
}
a(SC, "buildMask");
function SN(T, H) {
  T._mask = T._mask || [];
  let Ey = T.precise ? Math.min(H, (T.masks ? T.masks.length : 1) - 1) : 0;
  T._mask[Ey] ||= SC(T, Ey);
  return T._mask[Ey];
}
a(SN, "maskFor");
var Sh = {
  held: {},
  pressed: {},
  released: {},
  synthetic: null,
  typed: null,
  typedQueue: [],
  backspace: false,
  slash: false,
  textFocus: false,
  rawHeld: {},
  rawQueue: [],
  captureAll: false
};
var SE = 64;
var SO = {
  z: "b1",
  Enter: "b1",
  x: "b2",
  Shift: "b2",
  c: "b3",
  Control: "b3",
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "up",
  ArrowDown: "down",
  a: "left",
  d: "right",
  w: "up",
  s: "down"
};
var SZ = {
  ...SO
};
function Sb(T) {
  return Object.keys(SO).filter(H => SO[H] === T);
}
a(Sb, "keysFor");
function SV(T, H) {
  if (T) {
    delete SO[T];
    if (H) {
      SO[T] = H;
    }
    return true;
  } else {
    return false;
  }
}
a(SV, "bindKey");
function Ss(T) {
  for (let H of Sb(T)) {
    delete SO[H];
  }
}
a(Ss, "clearSlot");
function Sk() {
  SO = {
    ...SZ
  };
}
a(Sk, "resetKeys");
var Sx = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  90: "b1",
  13: "b1",
  88: "b2",
  16: "b2",
  67: "b3",
  17: "b3"
};
var Sq = {};
var Sv = {};
var Su = [["obj_essaystuff", "cantype"]];
function Sc() {
  if (!C3.list || !C3.list.length) {
    return false;
  }
  for (let [T, H] of Su) {
    let Ey = C3.first(T);
    if (Ey && Ey[H] == 1) {
      return true;
    }
  }
  return false;
}
a(Sc, "gameTextOpen");
var Sz = a(T => !!T.key && (T.key.length === 1 || T.key === "Backspace") && !T.ctrlKey && !T.altKey && !T.metaKey, "isTypingKey");
var SB = {
  left: 1,
  right: 1,
  up: 1,
  down: 1
};
var SG = 15;
var SM = 0;
function Sl(T) {
  window.addEventListener("keydown", H => {
    let Ey = H.key.length === 1 && !H.ctrlKey && !H.altKey && !H.metaKey && Sc();
    let EK = Sh.textFocus && H.key.length === 1 ? null : SO[H.key] || SO[H.key.length === 1 ? H.key.toLowerCase() : H.key];
    if (Ey && (!EK || SB[EK] || EK === "b3")) {
      EK = null;
      Sh.typed = H.key;
      H.preventDefault();
    }
    let Ew = H.target && (H.target.tagName === "INPUT" || H.target.tagName === "TEXTAREA");
    if (!Ey) {
      if (!EK && !Ew && H.key.length === 1 && /[a-z0-9]/i.test(H.key) && !H.ctrlKey && !H.altKey && (Sh.textFocus || H.key.toLowerCase() !== "l")) {
        Sh.typed = H.key.toLowerCase();
        Sh.typedQueue.push(Sh.typed);
      } else if (!EK && !Ew && H.key === " ") {
        Sh.typed = " ";
        Sh.typedQueue.push(" ");
        H.preventDefault();
      }
    }
    if (H.key === "Backspace") {
      Sh.backspace = true;
      Sh.backspaceCount = (Sh.backspaceCount || 0) + 1;
      H.preventDefault();
    }
    if (H.key === "/" && !Sh.captureAll) {
      Sh.slash = true;
      H.preventDefault();
    }
    if (!Sh.rawHeld[H.key]) {
      Sh.rawHeld[H.key] = true;
      Sh.rawQueue.push({
        down: 1,
        key: H.key
      });
      if (Sh.rawQueue.length > SE) {
        Sh.rawQueue.shift();
      }
    }
    if (H.code) {
      Sv[H.code] = H.key;
    }
    if (Sh.captureAll && !H.ctrlKey && !H.altKey && !H.metaKey && H.key !== "F5" && H.key !== "F12") {
      H.preventDefault();
    }
    if (EK) {
      H.preventDefault();
      if (!Sh.held[EK]) {
        Sq[EK] = true;
        if (EK === "b1") {
          Sh.b1Key = H.key;
        }
      }
      Sh.held[EK] = true;
    }
  });
  window.addEventListener("keyup", H => {
    let Ey = [H.key];
    let EK = H.code ? Sv[H.code] : null;
    if (H.code) {
      delete Sv[H.code];
    }
    if (EK && EK !== H.key) {
      Ey.push(EK);
    }
    if (H.key.length === 1) {
      let Ew = H.key.toLowerCase();
      let Em = H.key.toUpperCase();
      if (Ew !== H.key) {
        Ey.push(Ew);
      }
      if (Em !== H.key) {
        Ey.push(Em);
      }
    }
    for (let Ep of Ey) {
      if (Sh.rawHeld[Ep]) {
        Sh.rawHeld[Ep] = false;
        Sh.rawQueue.push({
          down: 0,
          key: Ep
        });
        if (Sh.rawQueue.length > SE) {
          Sh.rawQueue.shift();
        }
      }
    }
    for (let Ed of Ey) {
      let Ef = SO[Ed] || SO[Ed.length === 1 ? Ed.toLowerCase() : Ed];
      if (Ef && Sh.held[Ef]) {
        Sh.held[Ef] = false;
        Sh.released[Ef] = true;
      } else if (Ef && Ed === H.key) {
        Sh.released[Ef] = true;
      }
    }
  });
  window.addEventListener("blur", () => {
    for (let H in Sh.held) {
      Sh.held[H] = false;
    }
    for (let Ey in Sh.rawHeld) {
      if (Sh.rawHeld[Ey]) {
        Sh.rawHeld[Ey] = false;
        Sh.rawQueue.push({
          down: 0,
          key: Ey
        });
      }
    }
    for (let EK in Sv) {
      delete Sv[EK];
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      for (let H in Sh.held) {
        Sh.held[H] = false;
      }
      for (let Ey in Sh.rawHeld) {
        if (Sh.rawHeld[Ey]) {
          Sh.rawHeld[Ey] = false;
          Sh.rawQueue.push({
            down: 0,
            key: Ey
          });
        }
      }
      for (let EK in Sv) {
        delete Sv[EK];
      }
    }
  });
}
a(Sl, "initInput");
function SJ(T, H) {
  if (H) {
    if (!Sh.held[T]) {
      Sq[T] = true;
      if (T === "b1") {
        Sh.b1Key = null;
      }
    }
    Sh.held[T] = true;
  } else {
    Sh.held[T] = false;
    Sh.released[T] = true;
  }
}
a(SJ, "setButton");
function SQ() {
  for (let T in Sh.pressed) {
    Sh.pressed[T] = false;
  }
  for (let H in Sq) {
    if (Sq[H]) {
      Sh.pressed[H] = true;
    }
    Sq[H] = false;
  }
}
a(SQ, "inputBeginFrame");
function SD() {
  for (let T in Sh.released) {
    Sh.released[T] = false;
  }
  Sh.typed = null;
  Sh.backspace = false;
  Sh.slash = false;
  if (Sh.typedQueue.length || Sh.backspaceCount) {
    if (++SM > SG) {
      Sh.typedQueue = [];
      Sh.backspaceCount = 0;
      SM = 0;
    }
  } else {
    SM = 0;
  }
}
a(SD, "inputEndFrame");
var SW = null;
function SX(T) {
  SW = T;
}
a(SX, "bindGmlGlobals");
var Sy = ["down", "right", "up", "left", "b1", "b2", "b3", "b1", "b2", "b3"];
function SK() {
  let T = SW;
  if (!T) {
    return;
  }
  if (!Array.isArray(T.input_held)) {
    T.input_held = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (!Array.isArray(T.input_pressed)) {
    T.input_pressed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  if (!Array.isArray(T.input_released)) {
    T.input_released = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  let H = T.input_held;
  let Ey = T.input_pressed;
  let EK = T.input_released;
  for (let Ew = 0; Ew < 10; Ew++) {
    let Em = Sy[Ew];
    let Ep = Sh.held[Em] ? 1 : 0;
    let Ed = H[Ew] ? 1 : 0;
    Ey[Ew] = Sh.pressed[Em] || Ep && !Ed ? 1 : 0;
    EK[Ew] = Sh.released[Em] || !Ep && Ed ? 1 : 0;
    H[Ew] = Ep;
  }
}
a(SK, "gmlInputLatch");
function Sw() {
  for (let H in Sh.held) {
    Sh.held[H] = false;
  }
  for (let Ey in Sh.rawHeld) {
    if (!Sh.rawHeld[Ey]) {
      continue;
    }
    let EK = SO[Ey] || SO[Ey.length === 1 ? Ey.toLowerCase() : Ey];
    if (EK) {
      Sh.held[EK] = true;
    }
  }
  let T = Sh.padHeld;
  if (T) {
    for (let Ew in T) {
      if (T[Ew]) {
        Sh.held[Ew] = true;
      }
    }
  }
  for (let Em in Sh.pressed) {
    Sh.pressed[Em] = false;
  }
  for (let Ep in Sh.released) {
    Sh.released[Ep] = false;
  }
  for (let Ed in Sq) {
    Sq[Ed] = false;
  }
  Sh.typed = null;
  Sh.backspace = false;
  Sh.slash = false;
}
a(Sw, "resetInputForBattle");
function Sm() {
  let T = Sh.typedQueue;
  Sh.typedQueue = [];
  SM = 0;
  return T;
}
a(Sm, "takeTyped");
function Sp() {
  let T = Sh.backspaceCount || 0;
  Sh.backspaceCount = 0;
  return T;
}
a(Sp, "takeBackspaces");
var Sd = {
  fired: new Map(),
  unmapped: new Map(),
  classes: 0
};
var Sf = new WeakMap();
function SL(T) {
  let H = Sf.get(T);
  if (H) {
    return H;
  }
  H = [];
  let Ey = new Set();
  for (let EK = T.prototype; EK && EK !== Object.prototype; EK = Object.getPrototypeOf(EK)) {
    for (let Ew of Object.getOwnPropertyNames(EK)) {
      if (Ey.has(Ew)) {
        continue;
      }
      let Em = /^key(board|Press|Release)_(\d+)$/.exec(Ew);
      if (!Em || (Ey.add(Ew), typeof EK[Ew] != "function")) {
        continue;
      }
      let Ep = Sx[Number(Em[2])];
      if (!Ep) {
        Sd.unmapped.set(T.name + "." + Ew, Number(Em[2]));
        continue;
      }
      H.push([Em[1], Ep, Ew]);
    }
  }
  Sd.classes++;
  Sf.set(T, H);
  return H;
}
a(SL, "keyEventsOf");
var SY = a(T => T ? 1 : 0, "REAL");
var Sg = a(() => SY(Sh.pressed.b1), "button1_p");
var Sj = a(() => SY(Sh.pressed.b2), "button2_p");
var SA = a(() => SY(Sh.pressed.b3), "button3_p");
var SP = a(() => SY(Sh.held.b1), "button1_h");
var SI = a(() => SY(Sh.held.b2), "button2_h");
var SR = a(() => SY(Sh.held.b3), "button3_h");
var SF = a(() => SY(Sh.pressed.left), "left_p");
var U0 = a(() => SY(Sh.pressed.right), "right_p");
var U1 = a(() => SY(Sh.pressed.up), "up_p");
var U2 = a(() => SY(Sh.pressed.down), "down_p");
var U3 = a(() => SY(Sh.held.left), "left_h");
var U4 = a(() => SY(Sh.held.right), "right_h");
var U5 = a(() => SY(Sh.held.up), "up_h");
var U6 = a(() => SY(Sh.held.down), "down_h");
function U7() {
  try {
    let T = (JSON.parse(localStorage.getItem("dr-sim-cfg") || "null") || {}).res;
    if (T === "HIGH") {
      return 2;
    }
    if (T === "LOW") {
      return 1;
    }
  } catch {}
  try {
    let H = matchMedia && matchMedia("(pointer: coarse)").matches && !matchMedia("(pointer: fine)").matches;
    let Ey = typeof navigator !== "undefined" && navigator.deviceMemory && navigator.deviceMemory <= 2;
    if (H || Ey) {
      return 1;
    }
  } catch {}
  return 2;
}
a(U7, "pickSupersample");
var U8 = U7();
var U9 = {
  invuln: false,
  nomiss: false,
  freetp: false,
  slowbullets: false,
  hpscale: 1,
  turnscale: 1,
  shake: 1,
  musicvol: 0.6,
  sfxvol: 1,
  nodialog: false
};
var US = {};
var UU = {};
function UT(T, H) {
  Object.assign(UU[H] ||= {}, T);
}
a(UT, "registerSoundIndex");
var UH = new Proxy(US, {
  get(T, H) {
    if (typeof H == "string" && H.length <= 4 && H.charCodeAt(0) >= 48 && H.charCodeAt(0) <= 57) {
      let Ey = UU[nd];
      let EK = Ey && /^\d+$/.test(H) ? Ey[H] : undefined;
      if (EK !== undefined) {
        H = EK;
      }
    }
    if (nY !== null && typeof H == "string" && H.charCodeAt(0) !== 64) {
      let Ew = T[H + "@" + nY];
      if (Ew !== undefined) {
        return Ew;
      }
    }
    if (typeof H == "string" && nd !== 1 && H.charCodeAt(0) !== 64) {
      let Em = T[H + "@ch" + nd];
      if (Em !== undefined) {
        return Em;
      }
    }
    return T[H];
  }
});
var UC = true;
function UN(T) {
  UC = T;
}
a(UN, "setAudio");
var Uh = 0;
function UE() {
  if (Uh === 0) {
    UZ = 0;
  }
  Uh++;
}
a(UE, "simBegin");
function UO() {
  if (Uh > 0) {
    Uh--;
  }
  if (Uh === 0) {
    UZ = 0;
  }
}
a(UO, "simEnd");
var UZ = 0;
var Ub = a(() => Uh > 0, "simulating");
var UV = a(() => ({
  paused: true,
  ended: true,
  volume: 0,
  currentTime: 0,
  playbackRate: 1,
  pause() {},
  play() {
    return Promise.resolve();
  }
}), "SIM_TRACK");
function Uk() {
  return UC;
}
a(Uk, "audioEnabled");
var Ux = {
  ac: null,
  bus: null,
  failed: false,
  entries: new Map(),
  bytes: 0,
  live: new Map(),
  queue: [],
  active: 0,
  manifest: null,
  warmed: new Set(),
  hits: 0,
  misses: 0
};
var Uq = 128;
var Uv = (() => {
  try {
    if (typeof navigator === "undefined" || typeof matchMedia != "function") {
      return false;
    }
    let T = Number(navigator.deviceMemory) || 0;
    let H = matchMedia("(pointer: coarse)").matches && !matchMedia("(pointer: fine)").matches;
    let Ey = /iP(hone|od|ad)/.test(navigator.userAgent || "") || /Macintosh/.test(navigator.userAgent || "") && navigator.maxTouchPoints > 1;
    return H || Ey || T > 0 && T <= 4;
  } catch {
    return false;
  }
})();
var Uu = 67108864;
var Uc = 524288;
var Uz = 3145728;
var UB = a(() => typeof window !== "undefined" && typeof document !== "undefined" && !!document && typeof document.createElement == "function" && typeof fetch == "function" && typeof WorkerGlobalScope === "undefined" && typeof (window.AudioContext || window.webkitAudioContext) == "function", "sfxBrowser");
var UG = a(() => {
  try {
    return !navigator.userActivation || navigator.userActivation.hasBeenActive;
  } catch {
    return true;
  }
}, "sfxGestured");
function UM() {
  if (Ux.ac || Ux.failed) {
    return Ux.ac;
  }
  if (!UB() || !UG()) {
    return null;
  }
  try {
    let T = window.AudioContext || window.webkitAudioContext;
    if (!T) {
      Ux.failed = true;
      return null;
    }
    Ux.ac = new T({
      latencyHint: "interactive"
    });
    Ux.bus = Ux.ac.createGain();
    try {
      let H = Ux.ac;
      H.addEventListener("statechange", () => {
        if (H.state === "running") {
          H6();
        }
      });
    } catch {}
    try {
      let Ey = Ux.ac.createDynamicsCompressor();
      Ey.threshold.value = -1;
      Ey.knee.value = 0;
      Ey.ratio.value = 20;
      Ey.attack.value = 0.002;
      Ey.release.value = 0.12;
      Ux.bus.connect(Ey);
      Ey.connect(Ux.ac.destination);
      Ux.limiter = Ey;
    } catch {
      Ux.bus.connect(Ux.ac.destination);
    }
  } catch {
    Ux.failed = true;
    Ux.ac = null;
  }
  return Ux.ac;
}
a(UM, "sfxCtx");
var Ul = 0;
function UJ(T) {
  let H = performance.now();
  if (!(H - Ul < 1000)) {
    Ul = H;
    try {
      let Ey = T.resume();
      if (Ey && Ey.catch) {
        Ey.catch(() => {});
      }
    } catch {}
  }
}
a(UJ, "sfxResumeSoon");
function UQ() {
  let T = UM();
  H7();
  if (T) {
    if (T.state !== "running") {
      try {
        let H = T.resume();
        if (H && H.catch) {
          H.catch(() => {});
        }
      } catch {}
    }
    if (Ux.waiting) {
      Ux.waiting = 0;
      for (let Ey of Ux.entries.values()) {
        if (Ey.state === "bytes") {
          UX(Ey);
        }
      }
    }
  }
}
a(UQ, "sfxUnlock");
var UD = a(T => T && typeof T.src == "string" && T.src || null, "sfxKey");
function UW(T) {
  let H = UD(T);
  if (!H) {
    return null;
  }
  let Ey = Ux.entries.get(H);
  if (!Ey) {
    Ey = {
      url: H,
      state: "none",
      ab: null,
      buf: null,
      used: 0,
      bytes: 0
    };
    Ux.entries.set(H, Ey);
  }
  return Ey;
}
a(UW, "sfxEntry");
function UX(T) {
  let H = Ux.ac;
  if (!H || T.state !== "bytes") {
    return;
  }
  T.state = "decoding";
  let Ey = T.ab;
  T.ab = null;
  let EK = Ew => {
    if (!Ew) {
      T.state = "bad";
      return;
    }
    T.buf = Ew;
    T.state = "ready";
    T.used = performance.now();
    T.bytes = Ew.length * Ew.numberOfChannels * 4;
    Ux.bytes += T.bytes;
    if (Ux.bytes > Uu) {
      Uy();
    }
  };
  try {
    let Ew = H.decodeAudioData(Ey, EK, () => EK(null));
    if (Ew && Ew.catch) {
      Ew.catch(() => EK(null));
    }
  } catch {
    EK(null);
  }
}
a(UX, "sfxDecode");
function Uy() {
  let T = [...Ux.entries.values()].filter(H => H.state === "ready" && (!Ux.live.get(H.url) || !Ux.live.get(H.url).size)).sort((H, Ey) => H.used - Ey.used);
  for (let H of T) {
    if (Ux.bytes <= Uu * 0.8) {
      break;
    }
    Ux.bytes -= H.bytes;
    H.buf = null;
    H.bytes = 0;
    H.state = "none";
  }
}
a(Uy, "sfxEvict");
function UK(T) {
  let H = UW(T);
  if (!!H && H.state === "none") {
    H.state = "queued";
    Ux.queue.push(H);
    Uw();
  }
}
a(UK, "sfxLoad");
function Uw() {
  while (Ux.active < 4 && Ux.queue.length) {
    let T = Ux.queue.shift();
    Ux.active++;
    let H;
    try {
      H = {
        priority: "low"
      };
    } catch {
      H = undefined;
    }
    F(T.url, H).then(Ey => {
      if (!Ey) {
        T.state = "bad";
        return;
      }
      if (Ey.byteLength >= Uz) {
        T.state = "stream";
        return;
      }
      T.ab = Ey;
      T.state = "bytes";
      if (Ux.ac) {
        UX(T);
      } else {
        Ux.waiting = (Ux.waiting || 0) + 1;
      }
    }).catch(() => {
      T.state = "none";
    }).finally(() => {
      Ux.active--;
      Uw();
    });
  }
}
a(Uw, "sfxPump");
function Um(T, H = Infinity) {
  if (!UB()) {
    return;
  }
  let Ey = Ux.manifest && Ux.manifest.size || {};
  for (let EK of T) {
    if (Ey[EK] > H) {
      continue;
    }
    let Ew = UH[EK];
    if (Ew) {
      UK(Ew);
    }
  }
}
a(Um, "sfxWarm");
function Up() {
  if (Ux.manifest || !UB()) {
    return Promise.resolve(Ux.manifest);
  } else {
    Ux._mp ||= fetch(new URL("../assets/sfx_manifest.json", import.meta.url)).then(T => T.ok ? T.json() : null).then(T => Ux.manifest = T).catch(() => null);
    return Ux._mp;
  }
}
a(Up, "sfxManifest");
var Ud = {
  id: null,
  set: null
};
function Uf(T, H) {
  if (!UB()) {
    return false;
  }
  if (!H || !H.length) {
    Ud.id = null;
    Ud.set = null;
    return false;
  }
  Ud.id = T;
  Ud.set = new Set(H.map(Ey => UD(UH[Ey])).filter(Boolean));
  for (let Ey of Ux.entries.values()) {
    if (Ey.state === "ready" && !Ud.set.has(Ey.url) && (!Ux.live.get(Ey.url) || !Ux.live.get(Ey.url).size)) {
      Ux.bytes -= Ey.bytes;
      Ey.buf = null;
      Ey.bytes = 0;
      Ey.state = "none";
    }
  }
  Ux.warmed.clear();
  Um(H);
  return true;
}
a(Uf, "sfxWarmFight");
function UL(T) {
  if (!UB() || T === undefined || T === null || Ud.set) {
    return;
  }
  let H = String(T);
  if (!Ux.warmed.has(H)) {
    Ux.warmed.add(H);
    Up().then(Ey => {
      if (Ud.set) {
        Ux.warmed.delete(H);
        return;
      }
      if (Ey && Ey.lists && Ey.lists[H] && String(nd) === H) {
        Um(Ey.lists[H], Uc);
      } else {
        Ux.warmed.delete(H);
      }
    });
  }
}
a(UL, "sfxWarmChapter");
function UY() {
  let T = {};
  for (let H of Ux.entries.values()) {
    T[H.state] = (T[H.state] || 0) + 1;
  }
  return {
    context: Ux.ac ? Ux.ac.state : Ux.failed ? "none" : "not-yet",
    baseLatency: Ux.ac && Ux.ac.baseLatency,
    outputLatency: Ux.ac && Ux.ac.outputLatency,
    entries: T,
    decodedMB: +(Ux.bytes / 1048576).toFixed(1),
    hits: Ux.hits,
    misses: Ux.misses,
    live: [...Ux.live.values()].reduce((Ey, EK) => Ey + EK.size, 0)
  };
}
a(UY, "sfxStats");
if (UB()) {
  try {
    if (navigator.audioSession && navigator.audioSession.type !== "playback") {
      navigator.audioSession.type = "playback";
    }
  } catch {}
  for (let eu of ["keydown", "pointerdown", "pointerup", "mousedown", "touchstart", "touchend", "click"]) {
    window.addEventListener(eu, UQ, {
      capture: true,
      passive: true
    });
  }
  let ex = a(() => {
    if (document.hidden) {
      return;
    }
    let T = Ux.ac;
    if (T && T.state !== "running") {
      try {
        let H = T.resume();
        if (H && H.catch) {
          H.catch(() => {});
        }
      } catch {}
    }
    H7();
  }, "back");
  document.addEventListener("visibilitychange", ex);
  window.addEventListener("pageshow", ex);
  window.addEventListener("focus", ex);
  let eq = 0;
  let ev = a(() => {
    if (!UH.snd_menumove && !UH.snd_select) {
      if (++eq < 120) {
        setTimeout(ev, 500);
      }
      return;
    }
    try {
      if (navigator.connection && navigator.connection.saveData) {
        return;
      }
    } catch {}
    Up().then(T => {
      if (T && T.lists) {
        Um(T.lists.common || []);
      }
    });
  }, "boot");
  setTimeout(ev, 800);
}
var Ug = class ec {
  constructor(T, H, Ey, EK) {
    this.entry = T;
    this.buf = T.buf;
    this._vol = H;
    this._rate = Ey;
    this._loop = EK;
    this.paused = false;
    this.ended = false;
    this._src = null;
    this._offset = 0;
    this._t0 = 0;
    this._gen = 0;
    this.gain = Ux.ac.createGain();
    this.gain.gain.value = H;
    this._wired = false;
    this._wall = performance.now();
    this._f = C3.frame;
    this._clr = HU;
    this._start(0);
  }
  _live(T) {
    let H = Ux.live.get(this.entry.url);
    if (T) {
      if (!H) {
        Ux.live.set(this.entry.url, H = new Set());
      }
      H.add(this);
    } else if (H) {
      H.delete(this);
    }
  }
  _start(T) {
    let H = Ux.ac;
    let Ey = this.buf.duration;
    let EK = Math.max(0, Number(T) || 0);
    if (EK >= Ey) {
      if (this._loop && Ey > 0) {
        EK %= Ey;
      } else {
        this._offset = Ey;
        this.paused = true;
        this.ended = true;
        return;
      }
    }
    let Ew = H.createBufferSource();
    Ew.buffer = this.buf;
    Ew.loop = this._loop;
    Ew.playbackRate.value = this._rate;
    if (!this._wired) {
      this.gain.connect(Ux.bus);
      this._wired = true;
    }
    Ew.connect(this.gain);
    let Em = ++this._gen;
    Ew.onended = () => {
      if (Em === this._gen) {
        this._src = null;
        this._offset = Ey;
        this.paused = true;
        this.ended = true;
        this._live(false);
        this._unwire();
      }
    };
    Ew.start(0, EK);
    this._src = Ew;
    this._offset = EK;
    this._t0 = H.currentTime;
    this.paused = false;
    this.ended = false;
    this.entry.used = performance.now();
    this._live(true);
  }
  _unwire() {
    if (this._wired) {
      try {
        this.gain.disconnect();
      } catch {}
      this._wired = false;
    }
  }
  _halt() {
    let T = this._src;
    this._src = null;
    this._gen++;
    this._live(false);
    if (T) {
      try {
        T.onended = null;
        T.stop();
      } catch {}
      try {
        T.disconnect();
      } catch {}
    }
    this._unwire();
  }
  _pos() {
    if (!this._src) {
      return this._offset;
    }
    let T = this.buf.duration;
    let H = this._offset + Math.max(0, Ux.ac.currentTime - this._t0) * this._rate;
    if (this._loop && T > 0) {
      H %= T;
    } else if (H > T) {
      H = T;
    }
    return H;
  }
  get duration() {
    return this.buf.duration;
  }
  get currentTime() {
    return this._pos();
  }
  set currentTime(T) {
    let H = Number(T);
    if (!!Number.isFinite(H) && !(H < 0)) {
      if (this._src) {
        this._halt();
        this._start(H);
      } else {
        this._offset = H;
        if (this.ended && H < this.buf.duration) {
          this.ended = false;
        }
      }
    }
  }
  get volume() {
    return this._vol;
  }
  set volume(T) {
    let H = Number(T);
    if (!Number.isFinite(H)) {
      return;
    }
    let Ey = nK(H, 0, 1);
    if (Ey !== this._vol && (this._vol = Ey, !this._twin)) {
      try {
        let EK = this.gain.gain;
        let Ew = Ux.ac.currentTime;
        if (this._src) {
          EK.cancelScheduledValues(Ew);
          EK.setTargetAtTime(Ey, Ew, 0.004);
        } else {
          EK.setValueAtTime(Ey, Ew);
        }
      } catch {
        try {
          this.gain.gain.value = this._vol;
        } catch {}
      }
    }
  }
  get playbackRate() {
    return this._rate;
  }
  set playbackRate(T) {
    let H = Number(T);
    if (!!Number.isFinite(H) && !(H < 0)) {
      if (this._src) {
        this._offset = this._pos();
        this._t0 = Ux.ac.currentTime;
        try {
          this._src.playbackRate.setValueAtTime(H, Ux.ac.currentTime);
        } catch {
          this._src.playbackRate.value = H;
        }
      }
      this._rate = H;
    }
  }
  get loop() {
    return this._loop;
  }
  set loop(T) {
    this._loop = !!T;
    if (this._src) {
      this._src.loop = this._loop;
    }
  }
  pause() {
    if (!this._src) {
      this.paused = true;
      return;
    }
    this._offset = this._pos();
    this._halt();
    this.paused = true;
  }
  play() {
    if (!this._src) {
      if (this.ended) {
        this._offset = 0;
        this.ended = false;
      }
      this._start(this._offset);
    }
    return Promise.resolve();
  }
};
a(Ug, "SfxVoice");
var Uj = Ug;
function UA(T) {
  if (typeof T != "string" && typeof T != "number") {
    return;
  }
  let H = UD(UH[T]);
  let Ey = H && Ux.live.get(H);
  if (Ey) {
    for (let EK of [...Ey]) {
      EK.pause();
    }
  }
}
a(UA, "sfxStopName");
function UP(T, H, Ey, EK) {
  let Ew = UM();
  if (!Ew) {
    return null;
  }
  let Em = UW(T);
  if (!Em) {
    return null;
  }
  if (Em.state === "none") {
    UK(T);
  } else if (Em.state === "bytes") {
    UX(Em);
  }
  if (Ew.state !== "running") {
    if (Uv) {
      UJ(Ew);
    } else {
      UQ();
    }
    return null;
  }
  if (Em.state !== "ready" || !Em.buf) {
    return null;
  }
  let Ep = Ux.live.get(Em.url);
  if (Ep && Ep.size >= 4) {
    let EL = null;
    for (let EY of Ep) {
      if (!EL || EY._t0 < EL._t0) {
        EL = EY;
      }
    }
    if (EL) {
      EL._halt();
      EL.paused = true;
      EL.ended = true;
    }
  }
  let Ed = false;
  if (Ep && Ep.size) {
    let Eg = Ew.currentTime;
    for (let Ei of Ep) {
      if (!Ei._twin && !Ei._loop && Ei._src && Eg - Ei._t0 < 0.012 && Ei._rate === Ey) {
        Ed = true;
        break;
      }
    }
  }
  let Ef = 0;
  for (let Ej of Ux.live.values()) {
    Ef += Ej.size;
  }
  if (Ef >= Uq) {
    let EA = null;
    for (let EP of Ux.live.values()) {
      for (let EI of EP) {
        if (!EI._loop && !EI._mus && (!EA || EI._t0 < EA._t0)) {
          EA = EI;
        }
      }
    }
    if (EA) {
      EA._halt();
      EA.paused = true;
      EA.ended = true;
    }
  }
  try {
    let ER = new Uj(Em, H, Ey, EK);
    if (Ed) {
      ER._twin = true;
      try {
        ER.gain.gain.value = 0;
      } catch {}
    }
    return ER;
  } catch {
    return null;
  }
}
a(UP, "sfxVoice");
function UI(T, H, Ey) {
  let EK = Ux.ac;
  if (!EK || EK.state !== "running") {
    return null;
  }
  let Ew = Ux.entries.get(UD(T));
  if (!Ew || Ew.state !== "ready" || !Ew.buf || !(Ew.buf.duration <= 30)) {
    return null;
  }
  try {
    let Em = new Uj(Ew, H, 1, Ey);
    Em._mus = 1;
    return Em;
  } catch {
    return null;
  }
}
a(UI, "musVoice");
var UR = {};
var UF = [];
var T0 = {
  sfx: null,
  stop: null
};
function T1(T, H = {}) {
  if (UF.length && !Uh) {
    for (let EK of UF) {
      try {
        EK(T);
      } catch {}
    }
  }
  if (T0.sfx && !Uh) {
    return T0.sfx(T, H);
  }
  let Ey = UH[T];
  if (!Ey || !UC || Uh) {
    return null;
  }
  if (Ux.ac || UB()) {
    let Ew = H && typeof H == "object" ? H : {};
    let Em = UP(Ey, nK((Ew.volume ?? 1) * (U9.sfxvol ?? 1), 0, 1), Ew.pitch || 1, !!Ew.loop);
    if (Em) {
      Ux.hits++;
      return Em;
    }
    Ux.misses++;
    if (Uv && Ux.ac) {
      let Ep = UW(Ey);
      if (Ep && Ep.state === "none") {
        UK(Ey);
      }
      return null;
    }
  }
  try {
    let Ed = UR[T] ||= [];
    for (let EL = Ed.length - 1; EL >= 0; EL--) {
      if (Ed[EL].error) {
        Ed.splice(EL, 1);
      }
    }
    let Ef = Ed.find(EY => EY.paused || EY.ended);
    if (!Ef && Ed.length >= 4) {
      let EY = Ed.filter(Eg => !(Eg.currentTime > 0));
      if (EY.length === Ed.length) {
        return EY.reduce((Eg, Ei) => (Eg.__wall || 0) <= (Ei.__wall || 0) ? Eg : Ei);
      }
    }
    if (!Ef) {
      if (Ed.length < 4) {
        Ef = Ey.cloneNode();
        Ed.push(Ef);
      } else {
        Ef = Ed.reduce((Eg, Ei) => Ei.currentTime > Eg.currentTime ? Ei : Eg);
      }
    }
    Ef.pause();
    Ef.currentTime = 0;
    Ef.volume = nK((H.volume ?? 1) * (U9.sfxvol ?? 1), 0, 1);
    h6(Ef, H.pitch || 1);
    Ef.loop = !!H.loop;
    Ef.__wall = performance.now();
    Ef.__f = C3.frame;
    Ef.__clr = HU;
    Ef.play().catch(() => {});
    return Ef;
  } catch {
    return null;
  }
}
a(T1, "snd_play");
function T2(T, H, Ey) {
  if (Ey === 1 || Ey === true) {
    return hx(T);
  } else {
    return T1(T);
  }
}
a(T2, "audio_play_sound");
function T3(T) {
  if (Uh) {
    return;
  }
  if (T && typeof T == "object") {
    try {
      T.pause();
    } catch {}
    return;
  }
  if (T0.stop) {
    T0.stop(T);
  }
  let H = UR[T];
  if (H) {
    for (let EK of H) {
      try {
        EK.pause();
      } catch {}
    }
  }
  UA(T);
  let Ey = typeof T == "string" ? hV(T) : null;
  if (Ey) {
    for (let [Ew, Em] of [...H3]) {
      if (Ew === Ey || Em.name === Ey && !!Ew.startsWith(Ey + "#")) {
        try {
          Em.pause();
        } catch {}
        Em.ended = true;
        TF(Em);
        H3.delete(Ew);
        if (HT === Em) {
          HT = null;
          hs = null;
        }
      }
    }
  }
}
a(T3, "snd_stop");
var Ts = class ez {
  constructor(T, H = 1024, Ey = 4) {
    this.onWrap = T;
    this.size = H;
    this.sheets = Ey;
    this.list = [];
    this.i = -1;
    this.x = this.y = this.row = 0;
  }
  turn() {
    if (++this.i >= this.sheets) {
      this.i = 0;
      for (let T of this.list) {
        T.getContext("2d").clearRect(0, 0, this.size, this.size);
      }
      if (this.onWrap) {
        this.onWrap();
      }
    }
    if (!this.list[this.i]) {
      let H = document.createElement("canvas");
      H.width = H.height = this.size;
      this.list[this.i] = H;
    }
    this.x = this.y = this.row = 0;
  }
  slot(T, H) {
    let Ey = this.size;
    if (T + 2 > Ey || H + 2 > Ey) {
      return null;
    }
    if (this.i < 0) {
      this.turn();
    }
    if (this.x + T + 2 > Ey) {
      this.x = 0;
      this.y += this.row;
      this.row = 0;
    }
    if (this.y + H + 2 > Ey) {
      this.turn();
    }
    let EK = {
      cv: this.list[this.i],
      x: this.x,
      y: this.y
    };
    this.x += T + 2;
    this.row = Math.max(this.row, H + 2);
    return EK;
  }
};
a(Ts, "StripAtlas");
var Tf = Ts;
var TL = class eB {
  constructor(T, H, Ey) {
    this.name = T;
    this.level = H;
    this.paused = false;
    this.ended = false;
    this.loop = !!Ey;
    this.len = M[T] || 0;
    this._vol = nK(H * (U9.musicvol ?? 0.6), 0, 1);
    this._clock = 0;
    this._fpos = 0;
    this._rate = 1;
    this.el = null;
    this._f = C3.frame;
    this._clr = HU;
    this._attach();
  }
  _attach() {
    let T = this.name;
    let H = this.loop;
    let Ey = UH[T];
    let EK = Ey && UC ? UI(Ey, this._vol, !!H) : null;
    if (EK) {
      this.el = EK;
    } else if (Ey && UC) {
      try {
        let Ew = this.el = TR(Ey) || Ey.cloneNode();
        Ew.loop = !!H;
        H9(Ew, this._vol);
        if (Ew.playbackRate !== 1) {
          Ew.playbackRate = 1;
        }
        this._elRate = 1;
        this._pp = true;
        try {
          if (Ew.preservesPitch === false) {
            Ew.preservesPitch = true;
          }
        } catch {}
        let Em = Ew.play();
        if (Em && Em.catch) {
          Em.catch(() => {});
        }
      } catch {
        this.el = null;
      }
    }
    if (this.el && Number(this._rate) > 0 && this._rate !== 1) {
      this.playbackRate = this._rate;
    }
  }
  _revive() {
    for (let T of ["_lined", "_seekAt", "_seekT", "_seekLat", "_ts", "_g", "_gT", "_w0", "_wall", "_acc", "_accN", "_evalT", "_trim", "_trimT", "_ib", "_base", "_baseT", "_elRate", "_pp"]) {
      delete this[T];
    }
    this.ended = false;
    this.paused = false;
    this._stopF = undefined;
    if (this.el) {
      this.play();
    } else {
      this._attach();
    }
  }
  get volume() {
    return this._vol;
  }
  set volume(T) {
    this._vol = nK(T, 0, 1);
    if (this.el) {
      if (this.el._mus) {
        try {
          this.el.volume = this._vol;
        } catch {}
      } else {
        H9(this.el, this._vol);
      }
    }
  }
  get currentTime() {
    if (this.loop && this.len > 0 && this._clock >= this.len) {
      return this._clock % this.len;
    } else {
      return this._clock;
    }
  }
  set currentTime(T) {
    let H = Number(T);
    if (Number.isFinite(H) && (this._clock = H, this._fpos = H, this.el)) {
      if (this.el._mus) {
        try {
          this.el.currentTime = H;
        } catch {}
        return;
      }
      this._seek(this.el, H, typeof performance !== "undefined" ? performance.now() : Date.now());
    }
  }
  get playbackRate() {
    return this._rate;
  }
  set playbackRate(T) {
    let H = Number(T);
    this._rate = T;
    if (!this.el || !Number.isFinite(H) || H <= 0) {
      return;
    }
    if (this.el._mus) {
      this.el.playbackRate = H;
      return;
    }
    let Ey = H === 1 || (this._base || 1) !== 1;
    if (this._pp !== Ey) {
      this._pp = Ey;
      try {
        this.el.preservesPitch = Ey;
      } catch {}
    }
    let EK = Math.round((this._base || 1) * H * 1000) / 1000;
    if (EK !== this._elRate) {
      this._elRate = EK;
      try {
        this.el.playbackRate = EK;
      } catch {}
    }
  }
  pause() {
    this.paused = true;
    if (this.el) {
      try {
        this.el.pause();
      } catch {}
    }
  }
  play() {
    this.paused = false;
    if (this.el) {
      try {
        let T = this.el.play();
        if (T && T.catch) {
          T.catch(() => {});
        }
      } catch {}
    }
    return Promise.resolve();
  }
  tick() {
    if (this.paused) {
      return;
    }
    this._clock += 0.03333333333333333;
    if (!this.loop && this.len > 0 && this._clock >= this.len) {
      this.ended = true;
      return;
    }
    this._fpos += (Number(this._rate) > 0 ? Number(this._rate) : 1) / 30;
    let T = this.el;
    if (!T || T.paused) {
      this._wall = 0;
      this._ts = null;
      return;
    }
    if (T._mus) {
      return;
    }
    if (Uv && Tg === 1 && (!(Number(this._rate) > 0) || Number(this._rate) === 1)) {
      if (this._elRate !== 1) {
        this._elRate = 1;
        try {
          T.playbackRate = 1;
        } catch {}
      }
      return;
    }
    let H = typeof performance !== "undefined" ? performance.now() : Date.now();
    let Ey = Tg;
    let EK = this._ts ||= [];
    if (this._wall && H - this._wall > 2000) {
      EK.length = 0;
    }
    this._wall = H;
    EK.push(H);
    while (EK.length > 2 && H - EK[0] > 3000) {
      EK.shift();
    }
    if (this._g !== Ey) {
      let Eg = this._g === undefined;
      this._g = Ey;
      this._gT = H;
      this._w0 = 0;
      EK.length = 0;
      EK.push(H);
      this._baseT = H;
      this._ib = 0;
      let Ei = Eg ? TA.get(this.name + "@" + Ey) : undefined;
      this._base = Ei < 1 ? nK(Math.round(Ey * Ei * 50) / 50, 0.25, Ey) : Ey;
    }
    if (!this._w0 && H - this._gT >= 1500) {
      this._w0 = 1;
      EK.length = 0;
      EK.push(H);
    }
    let Ew = H - EK[0];
    if (this._w0 && Ew >= 1500 && EK.length >= 10 && H - this._baseT >= 1000) {
      let Ej = (EK.length - 1) / 30 / (Ew / 1000);
      let EA = Ej >= Ey * 0.97 ? Ey : nK(Math.round(Ej * 50) / 50, 0.25, Ey);
      if (Math.abs(EA / this._base - 1) >= 0.03 || EA === Ey && this._base !== Ey) {
        this._base = EA;
        this._baseT = H;
      }
      TA.set(this.name + "@" + Ey, this._base / Ey);
      if (TA.size > 64) {
        TA.delete(TA.keys().next().value);
      }
    }
    let Em = Number(this._rate) > 0 ? Number(this._rate) : 1;
    let Ep = Em !== 1;
    let Ed = !Ep || this._base !== 1;
    if (this._pp !== Ed) {
      this._pp = Ed;
      try {
        T.preservesPitch = Ed;
      } catch {}
    }
    let Ef = T.duration;
    let EL = this._clock;
    if (Number.isFinite(Ef) && Ef > 0) {
      if (T.loop) {
        EL %= Ef;
      } else if (EL >= Ef) {
        return;
      }
    }
    if (Ep) {
      if (!this._lined && T.readyState >= 3 && !T.seeking && (T.currentTime || 0) > 0) {
        this._lined = true;
        let EP = this._fpos;
        if (Number.isFinite(Ef) && Ef > 0) {
          EP = T.loop ? EP % Ef : Math.min(EP, Ef);
        }
        if (Math.abs(EP - T.currentTime) > 0.05) {
          this._seek(T, EP + Math.min(0.5, (this._seekLat || 60) / 1000) * this._base * Em, H);
        }
      }
    } else {
      let EI = T.currentTime || 0;
      let ER = T.readyState >= 3 && !T.seeking;
      if (this._seekAt && ER) {
        let EF = Math.min(800, H - this._seekAt);
        this._seekLat = this._seekLat ? this._seekLat * 0.5 + EF * 0.5 : EF;
        this._seekAt = 0;
      }
      if (ER && (this._lined || EI > 0)) {
        let e0 = EL - EI;
        if (T.loop && Number.isFinite(Ef) && Ef > 0) {
          if (e0 > Ef / 2) {
            e0 -= Ef;
          } else if (e0 < -Ef / 2) {
            e0 += Ef;
          }
        }
        let e1 = Math.min(0.5, (this._seekLat || 60) / 1000) * this._base;
        if (!this._lined) {
          this._lined = true;
          if (Math.abs(e0) > 0.05) {
            this._seek(T, EL + e1, H);
          }
        } else if (Math.abs(e0) > Math.max(1, this._base) * 0.35 && H - (this._seekT || 0) > 1500) {
          this._seek(T, EL + e1, H);
        } else {
          this._acc = (this._acc || 0) + e0;
          this._accN = (this._accN || 0) + 1;
          this._evalT ||= H;
          if (H - this._evalT >= Tj.every) {
            let e2 = this._acc / this._accN / this._base;
            this._acc = 0;
            this._accN = 0;
            this._evalT = H;
            let e3 = Tj;
            if (Math.abs(e2) > e3.ibDead) {
              this._ib = nK((this._ib || 0) + e2 * e3.ki, -e3.ibMax, e3.ibMax);
            }
            let e4 = Math.abs(e2) < e3.pDead ? 0 : e2 / e3.T;
            let e5 = Math.round(nK(e4 + this._ib, -e3.cap, e3.cap) * 100) / 100;
            let e6 = this._trim || 0;
            if (e5 !== e6 && (Math.abs(e5 - e6) >= 0.019 || H - (this._trimT || 0) >= 1000)) {
              this._trim = e5;
              this._trimT = H;
            }
          }
        }
      }
    }
    let EY = Math.round(this._base * Em * (1 + (Ep ? 0 : this._trim || 0)) * 1000) / 1000;
    if (EY !== this._elRate) {
      this._elRate = EY;
      try {
        T.playbackRate = EY;
      } catch {}
    }
  }
  _seek(T, H, Ey) {
    try {
      T.currentTime = H;
    } catch {}
    this._seekAt = Ey;
    this._seekT = Ey;
    this._acc = 0;
    this._accN = 0;
    this._evalT = Ey;
    this._trim = 0;
  }
};
a(TL, "MusTrack");
var TY = TL;
var Tg = 1;
var Tj = {
  T: 1,
  ki: 0.02,
  ibMax: 0.04,
  ibDead: 0.005,
  pDead: 0.012,
  cap: 0.15,
  every: 250
};
var TA = new Map();
function TP(T) {
  let H = Number(T);
  if (Number.isFinite(H) && H > 0) {
    Tg = nK(H, 0.25, 4);
  }
}
a(TP, "setMusicSpeed");
var TI = [];
function TR(T) {
  let H = T && T.src;
  if (!H) {
    return null;
  }
  for (let Ey = TI.length - 1; Ey >= 0; Ey--) {
    if (TI[Ey].src !== H) {
      continue;
    }
    let EK = TI.splice(Ey, 1)[0];
    try {
      EK.currentTime = 0;
    } catch {}
    return EK;
  }
  return null;
}
a(TR, "musTake");
function TF(T) {
  if (T) {
    T._stopF = C3.frame;
    T._stopClr = HU;
  }
  let H = T && T.el;
  if (H) {
    T.el = null;
    try {
      H.pause();
    } catch {}
    if (!!H.src && !H.error) {
      for (TI.push(H); TI.length > 6;) {
        let Ey = TI.shift();
        try {
          Ey.removeAttribute("src");
          Ey.load();
        } catch {}
      }
    }
  }
}
a(TF, "musRecycle");
function H0(T) {
  if (!UC || Uh || !UB() || !UG()) {
    return;
  }
  let H = hV(T);
  let Ey = H && UH[H];
  let EK = Ey && Ey.src;
  if (EK && !TI.some(Ew => Ew.src === EK)) {
    for (let Ew of H3.values()) {
      if (Ew.el && Ew.el.src === EK) {
        return;
      }
    }
    try {
      let Em = Ey.cloneNode();
      Em.preload = "auto";
      Em.load();
      TI.push(Em);
      while (TI.length > 6) {
        let Ep = TI.shift();
        try {
          Ep.removeAttribute("src");
          Ep.load();
        } catch {}
      }
    } catch {}
  }
}
a(H0, "musPrime");
var H1 = false;
function H2() {
  if (!H1 && !!UC && !!UB()) {
    H1 = true;
    try {
      let T = UH.snd_menumove || UH.snd_select;
      if (!T) {
        H1 = false;
        return;
      }
      let H = T.cloneNode();
      H.volume = 0;
      H.muted = true;
      let Ey = H.play();
      if (Ey && Ey.catch) {
        Ey.catch(() => {});
      }
    } catch {}
  }
}
a(H2, "mediaWarmUp");
if (UB()) {
  for (let eG of ["keydown", "pointerdown"]) {
    window.addEventListener(eG, H2, {
      capture: true,
      passive: true
    });
  }
}
var H3 = new Map();
function H4() {
  let T = typeof performance !== "undefined" ? performance.now() : Date.now();
  for (let H of H3.values()) {
    H._ts = null;
    H._wall = 0;
    H._gT = T;
    H._w0 = 0;
  }
}
a(H4, "musicResync");
function H5() {
  if (!Uh && !!document.hidden) {
    for (let T of H3.values()) {
      let H = T.el;
      if (!T.paused && !T.ended && !!H && !H._mus && !H.paused) {
        try {
          H.pause();
        } catch {}
      }
    }
  }
}
a(H5, "musHide");
if (typeof document !== "undefined" && document.addEventListener) {
  document.addEventListener("visibilitychange", () => {
    H5();
    H4();
  });
}
function H6() {
  if (H8) {
    for (let T of H3.values()) {
      let H = T.el;
      if (H && !H._mus && !H.__gain) {
        H9(H, T._vol);
      }
    }
  }
}
a(H6, "musRoute");
function H7() {
  if (!Uh && !!UC) {
    for (let T of H3.values()) {
      let H = T.el;
      if (!T.paused && !T.ended && !!H && !H._mus && !!H.paused && !H.ended) {
        try {
          let Ey = H.play();
          if (Ey && Ey.catch) {
            Ey.catch(() => {});
          }
        } catch {}
        H9(H, T._vol);
      }
    }
  }
}
a(H7, "musResume");
var H8 = (() => {
  try {
    if (typeof Audio != "function" || !UB()) {
      return false;
    }
    if (localStorage.getItem("__musGraph") === "1") {
      return true;
    }
    let T = new Audio();
    T.volume = 0.5;
    return Math.abs(T.volume - 0.5) > 0.01;
  } catch {
    return false;
  }
})();
function H9(T, H) {
  if (H8 && !T.__gain && !T.__gainFail) {
    let Ey = Ux.ac;
    if (Ey && Ey.state === "running" && typeof Ey.createMediaElementSource == "function") {
      try {
        let EK = Ey.createMediaElementSource(T);
        let Ew = Ey.createGain();
        EK.connect(Ew);
        Ew.connect(Ey.destination);
        T.__gain = Ew;
      } catch {
        T.__gainFail = true;
      }
    }
  }
  if (T.__gain) {
    try {
      T.__gain.gain.value = H;
    } catch {}
    return;
  }
  try {
    T.volume = H;
  } catch {}
}
a(H9, "elVolume");
var HS = a(() => ({
  readOnly: H8,
  routed: [...H3.values()].filter(T => T.el && T.el.__gain).length
}), "musVolumeRoute");
var HU = 0;
var HT = null;
var HH = [];
function HC() {
  return HH.slice();
}
a(HC, "music_starts");
function Hh() {
  return [...H3.values()].map(T => ({
    name: T.name,
    level: T.level,
    volume: T.volume,
    position: T.currentTime
  }));
}
a(Hh, "music_stems");
function HE() {
  let T = [];
  for (let [H, Ey] of H3) {
    T.push({
      t: Ey,
      key: H,
      level: Ey.level,
      paused: !!Ey.paused,
      primary: Ey === HT
    });
  }
  return {
    clr: HU,
    f: C3.frame,
    primary: hs,
    stems: T
  };
}
a(HE, "music_state");
function HO(T, H) {
  if (Uh || !T || !Array.isArray(T.stems)) {
    return;
  }
  let Ey = new Set(T.stems.map(Ew => Ew.t));
  let EK = (Ew, Em) => Em === T.clr && Ew > T.f && Ew <= H;
  for (let [Ew, Em] of [...H3]) {
    if (!Ey.has(Em) && !EK(Em._f, Em._clr)) {
      try {
        Em.pause();
      } catch {}
      Em.ended = true;
      TF(Em);
      H3.delete(Ew);
      if (Em === HT) {
        HT = null;
        hs = null;
      }
    }
  }
  for (let Ep = hn.length - 1; Ep >= 0; Ep--) {
    if (hn[Ep].t instanceof TY) {
      hn.splice(Ep, 1);
    }
  }
  for (let Ed of T.stems) {
    let Ef = Ed.t;
    if (!Ef || Ef.ended && Ef._stopF !== undefined && EK(Ef._stopF, Ef._stopClr)) {
      continue;
    }
    if (Ef.ended) {
      Ef._revive();
    } else if (!Ed.paused && Ef.paused) {
      Ef.play();
    }
    if (Ed.paused && !Ef.paused) {
      Ef.pause();
    }
    let EL = H3.get(Ed.key);
    if (EL !== Ef) {
      if (EL) {
        try {
          EL.pause();
        } catch {}
        EL.ended = true;
        TF(EL);
      }
      H3.set(Ed.key, Ef);
    }
    Ef.level = Ed.level;
    Ef.volume = (Ed.level ?? 1) * (U9.musicvol ?? 0.6);
    if (Ed.primary) {
      HT = Ef;
      hs = T.primary;
    }
  }
  if (T.primary && !HT) {
    hs = T.primary;
  }
  HU = T.clr;
}
a(HO, "music_restore");
function HZ(T) {
  if (Uh || !T) {
    return;
  }
  let H = (Ey, EK) => Ey !== undefined && (EK !== T.clr || Ey > T.f);
  for (let Ey of [...Ux.live.values()]) {
    for (let EK of [...Ey]) {
      if (EK._loop && !EK._mus && H(EK._f, EK._clr)) {
        EK.pause();
      }
    }
  }
  for (let Ew in UR) {
    for (let Em of UR[Ew]) {
      if (Em.loop && !Em.paused && H(Em.__f, Em.__clr)) {
        try {
          Em.pause();
        } catch {}
      }
    }
  }
}
a(HZ, "sfx_rewind");
function Hb(T) {
  return H3.get(T) || null;
}
a(Hb, "music_track");
var HV = TY.prototype;
var Hv = {
  depth: 0
};
var Hu = new Map();
function Hc(T, H) {
  let Ey = hV(T);
  if (Ey && H > 0) {
    Hu.set(Ey, H);
  }
}
a(Hc, "setAssetPitch");
function HB(T, H, Ey) {
  if (Hv.depth > 0) {
    let Em = T;
    for (let Ed = 2; H3.has(Em); Ed++) {
      let Ef = H3.get(Em);
      if (Ef.ended) {
        TF(Ef);
        H3.delete(Em);
        break;
      }
      Em = T + "#" + Ed;
    }
    let Ep = new TY(T, H, Ey);
    H3.set(Em, Ep);
    if (Hu.has(T)) {
      h7(Ep, Hu.get(T));
    }
    if (HH.length < 4096) {
      HH.push(T);
    }
    return Ep;
  }
  let EK = H3.get(T);
  if (EK && !EK.paused && !EK.ended) {
    return EK;
  }
  if (EK && EK.paused && !EK.ended && EK._f === C3.frame && EK._clr === HU) {
    EK.play();
    return EK;
  }
  if (EK) {
    try {
      EK.pause();
    } catch {}
    TF(EK);
    H3.delete(T);
  }
  let Ew = new TY(T, H, Ey);
  H3.set(T, Ew);
  if (Hu.has(T)) {
    h7(Ew, Hu.get(T));
  }
  if (EK && EK === HT && nd >= 5) {
    HT = Ew;
  }
  if (HH.length < 4096) {
    HH.push(T);
  }
  return Ew;
}
a(HB, "startTrack");
function HG(T, H = 1, Ey = 1) {
  if (Uh) {
    return;
  }
  UL(nd);
  let EK = hV(T) || T || null;
  if (EK && EK === hs && HT && !HT.paused) {
    HT.level = H;
    HT.volume = H * (U9.musicvol ?? 0.6);
    HT.playbackRate = Ey;
    return HT;
  }
  HM();
  hs = EK;
  Hl = 0;
  if (!EK) {
    return null;
  }
  HT = HB(EK, H, true);
  try {
    HT.playbackRate = Ey;
  } catch {}
  return HT;
}
a(HG, "playMusic");
function HM() {
  if (!Uh) {
    for (let T of H3.values()) {
      try {
        T.pause();
      } catch {}
      T.ended = true;
      TF(T);
    }
    H3.clear();
    HT = null;
    hs = null;
    Hl = 0;
  }
}
a(HM, "stopMusic");
var Hl = 0;
function HJ() {
  if (Uh) {
    if (HT || hs) {
      UZ += 0.03333333333333333;
    }
    return;
  }
  for (let T of H3.values()) {
    T.tick();
  }
  if (HT) {
    Hl = HT.currentTime;
  } else if (hs) {
    Hl += 0.03333333333333333;
  }
}
a(HJ, "musicClockTick");
function HQ() {
  return hs;
}
a(HQ, "music_name");
function HD() {
  return (HT ? HT.currentTime : Hl) + (Uh ? UZ : 0);
}
a(HD, "music_position");
function HW(T) {
  if (!T) {
    return false;
  }
  if (typeof T == "object") {
    return !T.paused && !T.ended;
  }
  if (typeof T == "string" && UH[T]) {
    let EK = UD(UH[T]);
    let Ew = EK && Ux.live.get(EK);
    if (Ew && Ew.size) {
      return true;
    }
    let Em = UR[T];
    if (Em && Em.some(Ep => !Ep.paused && !Ep.ended)) {
      return true;
    }
  }
  let H = hV(T);
  if (!H) {
    return false;
  }
  let Ey = H3.get(H);
  if (Ey) {
    return !Ey.paused && !Ey.ended;
  } else {
    return H === hs;
  }
}
a(HW, "audio_is_playing");
function HX(T) {
  if (T && typeof T == "object") {
    return T.currentTime || 0;
  }
  let H = hS(T);
  if (H) {
    return H.currentTime || 0;
  } else {
    return HD();
  }
}
a(HX, "audio_sound_get_track_position");
function Hy(T, H) {
  if (Uh) {
    return;
  }
  let Ey = Number(H);
  if (!Number.isFinite(Ey) || Ey < 0 && T && typeof HTMLMediaElement !== "undefined" && T instanceof HTMLMediaElement && T !== HT) {
    return;
  }
  if (T && typeof T == "object") {
    try {
      T.currentTime = Ey;
    } catch {}
    if (T === HT) {
      Hl = Ey;
    }
    return;
  }
  let EK = hS(T);
  if (EK) {
    try {
      EK.currentTime = Ey;
    } catch {}
  }
  let Ew = hV(T);
  if (!Ew || Ew === hs) {
    Hl = Ey;
  }
}
a(Hy, "audio_sound_set_track_position");
function HK() {
  for (let T of H3.values()) {
    T.volume = (T.level ?? 1) * (U9.musicvol ?? 0.6);
  }
}
a(HK, "setMusicVol");
var Hw = class eM {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xstart = 0;
    this.ystart = 0;
    this.xprevious = 0;
    this.yprevious = 0;
    this.xx = 0;
    this.yy = 0;
    this.view_current = 0;
    this.myself = 0;
    this.wd = 0;
    this._hs = 0;
    this._vs = 0;
    this.gravity = 0;
    this.gravity_direction = 270;
    this.friction = 0;
    this.image_angle = 0;
    this.image_xscale = 1;
    this.image_yscale = 1;
    this.image_alpha = 1;
    this.image_index = 0;
    this.image_speed = 1;
    this.image_blend = nH.white;
    this.sprite_index = null;
    this.mask_index = null;
    this.visible = true;
    this.depth = 0;
    this.alarm = new Array(12).fill(-1);
    this._ord = ++eM._id;
    this.destroyed = false;
    this.persistent = false;
  }
  get depth() {
    return this._dp;
  }
  set depth(T) {
    if (T !== this._dp) {
      this._dp = T;
      this._dord = ++eM._dseq;
    }
  }
  get hspeed() {
    return this._hs;
  }
  set hspeed(T) {
    this._hs = T;
    this._negspeed = false;
  }
  get vspeed() {
    return this._vs;
  }
  set vspeed(T) {
    this._vs = T;
    this._negspeed = false;
  }
  get speed() {
    if (this._spdV !== undefined && this._spdHs === this._hs && this._spdVs === this._vs) {
      return this._spdV;
    } else {
      return Math.hypot(this._hs, this._vs) * (this._negspeed ? -1 : 1);
    }
  }
  set speed(T) {
    let H = this.direction;
    this._negspeed = T < 0;
    this._hs = nz(T, H);
    this._vs = nB(T, H);
    this._dir = H;
    this._spdV = T;
    this._spdHs = this._hs;
    this._spdVs = this._vs;
    this._dirHs = this._hs;
    this._dirVs = this._vs;
  }
  get direction() {
    if (this._hs === 0 && this._vs === 0) {
      return this._dir || 0;
    }
    if (this._dirHs === this._hs && this._dirVs === this._vs && this._dir !== undefined) {
      return this._dir;
    }
    let T = nG(0, 0, this._hs, this._vs);
    if (this._negspeed) {
      T = (T + 180) % 360;
    }
    return T;
  }
  set direction(T) {
    let H = this.speed;
    this._dir = (T % 360 + 360) % 360;
    this._hs = nz(H, this._dir);
    this._vs = nB(H, this._dir);
    this._spdV = H;
    this._spdHs = this._hs;
    this._spdVs = this._vs;
    this._dirHs = this._hs;
    this._dirVs = this._vs;
  }
  move_towards_point(T, H, Ey) {
    this._dir = nG(this.x, this.y, T, H);
    this._negspeed = Ey < 0;
    this._hs = nz(Ey, this._dir);
    this._vs = nB(Ey, this._dir);
    this._spdV = Ey;
    this._spdHs = this._hs;
    this._spdVs = this._vs;
    this._dirHs = this._hs;
    this._dirVs = this._vs;
  }
  move_snap(T, H) {
    if (T) {
      this.x = Math.round(this.x / T) * T;
    }
    if (H) {
      this.y = Math.round(this.y / H) * H;
    }
  }
  get image_number() {
    let T = this.sprite_index && S3[this.sprite_index];
    if (T) {
      return T.frames;
    } else {
      return 0;
    }
  }
  get sprite_xoffset() {
    let T = this.sprite_index && S3[this.sprite_index];
    if (T) {
      return T.ox * (this.image_xscale ?? 1);
    } else {
      return 0;
    }
  }
  get sprite_yoffset() {
    let T = this.sprite_index && S3[this.sprite_index];
    if (T) {
      return T.oy * (this.image_yscale ?? 1);
    } else {
      return 0;
    }
  }
  get sprite_width() {
    let T = this.sprite_index && S3[this.sprite_index];
    if (T) {
      return T.w * (this.image_xscale ?? 1);
    } else {
      return 0;
    }
  }
  get sprite_height() {
    let T = this.sprite_index && S3[this.sprite_index];
    if (T) {
      return T.h * (this.image_yscale ?? 1);
    } else {
      return 0;
    }
  }
  get bbox_left() {
    return CM(this)[0];
  }
  get bbox_top() {
    return CM(this)[1];
  }
  get bbox_right() {
    return CM(this)[2];
  }
  get bbox_bottom() {
    return CM(this)[3];
  }
  get object_index() {
    return this.constructor.name;
  }
  get parent() {
    let T = this._parent;
    if (typeof T == "string" || typeof T == "function") {
      let H = C3.first(typeof T == "function" ? T.kindName || T.name : T);
      if (H) {
        return H;
      }
    }
    return T;
  }
  set parent(T) {
    this._parent = T;
  }
  get id() {
    return this;
  }
  is(T) {
    if (T !== null && typeof T == "object") {
      return T === this;
    } else {
      return this.constructor.kinds.has(T);
    }
  }
  create() {}
  step() {}
  beginStep() {}
  endStep() {}
  alarmEvent(T) {}
  userEvent(T) {}
  destroy() {}
  draw(T) {
    this.draw_self(T);
  }
  animationEnd() {}
  draw_self(T = CR) {
    if (N0 === this) {
      N1 = true;
      return;
    }
    if (this.sprite_index && T) {
      T.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    }
  }
  instance_destroy(T) {
    if (arguments.length > 0 && T !== this) {
      if (T == null) {
        return;
      }
      let H = Hd(T);
      if (typeof H == "string") {
        C3.with(H, Ey => Ey.instance_destroy());
        return;
      }
      if (H && typeof H.instance_destroy == "function") {
        H.instance_destroy();
        return;
      }
      return;
    }
    if (!this.destroyed && !this._dying) {
      this._dying = true;
      if (nd >= 5 && typeof nd == "number") {
        try {
          if (typeof this.destroy == "function") {
            this.destroy();
          }
          if (typeof this.cleanUp == "function") {
            try {
              this.cleanUp();
            } catch (Ey) {
              console.warn("cleanUp", this.constructor.name, Ey);
            }
          }
        } finally {
          this.destroyed = true;
        }
        C3.remove(this);
        return;
      }
      try {
        if (typeof this.destroy == "function") {
          this.destroy();
        }
      } finally {
        this.destroyed = true;
      }
      if (typeof this.cleanUp == "function") {
        try {
          this.cleanUp();
        } catch (EK) {
          console.warn("cleanUp", this.constructor.name, EK);
        }
      }
      C3.remove(this);
    }
  }
  event_user(T) {
    this.userEvent(T);
  }
};
a(Hw, "Inst");
x(Hw, "kinds", new Set(["Inst"]));
var Hm = Hw;
Hm._id = 0;
Hm._dseq = 0;
for (let [eJ, eQ] of Object.entries({
  fa_left: 0,
  fa_center: 1,
  fa_right: 2,
  fa_top: 0,
  fa_middle: 1,
  fa_bottom: 2,
  path_action_stop: 0,
  path_action_restart: 1,
  path_action_continue: 2,
  path_action_reverse: 3,
  bm_normal: 0,
  bm_add: 1,
  bm_max: 2,
  bm_subtract: 3,
  bm_zero: 1,
  bm_one: 2,
  bm_src_alpha: 5,
  bm_inv_src_alpha: 6,
  bm_dest_alpha: 7,
  bm_inv_dest_alpha: 8,
  pr_pointlist: 1,
  pr_linelist: 2,
  pr_linestrip: 3,
  pr_trianglelist: 4,
  pr_trianglestrip: 5,
  pr_trianglefan: 6
})) {
  Object.defineProperty(Hm.prototype, eJ, {
    value: eQ,
    writable: true,
    enumerable: false,
    configurable: true
  });
}
function Hp(T, H) {
  let Ey = new Set(H.kinds);
  Ey.add(T);
  return Ey;
}
a(Hp, "kindsOf");
var Hd = a(T => typeof T == "function" ? T.kindName || T.name : T, "kindKey");
var Hf = new Map();
var HL = new Set(["prototype", "name", "kinds", "kindName", "constructor", "length", "call", "apply", "bind", "defaultSprite", "defaultDepth", "defaultMask", "defaultVisible", "zeroFields", "objref", "__objref"]);
function HY(T) {
  if (typeof T == "number") {
    T = Ch(T) || T;
  }
  if (typeof T == "string") {
    T = CO(T) || T;
  }
  if (typeof T != "function") {
    return T;
  }
  let H = Hf.get(T);
  if (H) {
    return H;
  }
  let Ey = T.kindName || T.name;
  let EK = new Proxy(T, {
    get(Ew, Em, Ep) {
      if (typeof Em != "string" || HL.has(Em)) {
        return Reflect.get(Ew, Em, Ep);
      }
      if (Em === "__objref") {
        return Ey;
      }
      let Ed = C3.first(Ey);
      if (Ed) {
        return Ed[Em];
      } else {
        return Reflect.get(Ew, Em, Ep);
      }
    },
    set(Ew, Em, Ep) {
      if (typeof Em != "string" || HL.has(Em)) {
        return Reflect.set(Ew, Em, Ep);
      }
      let Ed = false;
      C3.with(Ey, Ef => {
        Ef[Em] = Ep;
        Ed = true;
      });
      if (!Ed) {
        Reflect.set(Ew, Em, Ep);
      }
      return true;
    },
    has(Ew, Em) {
      let Ep = C3.first(Ey);
      return Ep !== null && Em in Ep || Reflect.has(Ew, Em);
    }
  });
  Hf.set(T, EK);
  return EK;
}
a(HY, "OBJREF");
var Hg = a(T => Ch(T), "objectByIndex");
function Hj(T) {
  let H = [];
  for (let Ey = T, EK = 0; typeof Ey == "function" && EK < 16; Ey = Ey.inner, EK++) {
    H.push(v(Ey) ?? String(Ey));
  }
  return H.join("\n");
}
a(Hj, "wrapsGml");
var HA = new Map();
var HP = 0;
var HI = Object.freeze([]);
function HR(T) {
  for (let H of T.constructor.kinds) {
    let Ey = HA.get(H);
    if (!Ey) {
      HA.set(H, Ey = []);
    }
    Ey.push(T);
  }
  HP++;
}
a(HR, "idxAdd");
function HF(T) {
  for (let H of T.constructor.kinds) {
    let Ey = HA.get(H);
    if (!Ey) {
      continue;
    }
    let EK = Ey.lastIndexOf(T);
    if (EK >= 0) {
      Ey.splice(EK, 1);
    }
  }
  HP--;
}
a(HF, "idxRemove");
function C0() {
  HA.clear();
  HP = 0;
  for (let T of C3.list) {
    HR(T);
  }
}
a(C0, "idxRebuild");
function C1(T) {
  if (globalThis.__NOIDX) {
    return C3.list.filter(H => H.is(T));
  } else {
    if (HP !== C3.list.length) {
      C0();
    }
    return HA.get(T) || HI;
  }
}
a(C1, "ofKind");
function C2(T, H) {
  if (globalThis.__NOIDX || !T || T.constructor.kinds.has(H)) {
    return () => {};
  }
  if (HP !== C3.list.length) {
    C0();
  }
  let Ey = HA.get(H);
  if (!Ey) {
    HA.set(H, Ey = []);
  }
  Ey.push(T);
  return () => {
    let EK = HA.get(H);
    let Ew = EK ? EK.lastIndexOf(T) : -1;
    if (Ew >= 0) {
      EK.splice(Ew, 1);
    }
  };
}
a(C2, "aliasKind");
var C3 = {
  list: [],
  pending: [],
  frame: 0,
  spawns: 0,
  view: {
    x: 0,
    y: 0,
    w: 640,
    h: 480
  },
  room: {
    w: 640,
    h: 480
  },
  self: null,
  clear() {
    let T = this.list;
    this.list = [];
    this.pending = [];
    for (let H of T) {
      if (!H.destroyed && typeof H.roomEnd == "function") {
        try {
          H.roomEnd();
        } catch (Ey) {
          console.warn("roomEnd", H.constructor.name, Ey);
        }
      }
    }
    for (let EK of T) {
      if (!EK.destroyed && typeof EK.cleanUp == "function") {
        try {
          EK.cleanUp();
        } catch (Ew) {
          console.warn("cleanUp", EK.constructor.name, Ew);
        }
      }
    }
    this.list = [];
    this.pending = [];
    HA.clear();
    HP = 0;
    this.frame = 0;
    HU++;
    this.spawns = 0;
    this.view.x = 0;
    this.view.y = 0;
    this.view.live = false;
    this.room.w = 640;
    this.room.h = 480;
  },
  remove(T) {
    let H = this.list.lastIndexOf(T);
    if (H >= 0) {
      this.list.splice(H, 1);
      if (HP === this.list.length + 1) {
        HF(T);
      }
    }
  },
  reindex() {
    HA.clear();
    HP = -1;
  },
  all(T) {
    let H = Hd(T);
    if (typeof H == "string") {
      return C1(H).filter(Ey => !Ey.destroyed);
    } else {
      return this.list.filter(Ey => !Ey.destroyed && (H === undefined || Ey.is(H)));
    }
  },
  exists(T) {
    let H = Hd(T);
    if (typeof H == "string") {
      for (let Ey of C1(H)) {
        if (!Ey.destroyed) {
          return true;
        }
      }
      return false;
    }
    return !!H && !H.destroyed && this.list.includes(H);
  },
  first(T) {
    let H = Hd(T);
    if (typeof H == "string") {
      for (let Ey of C1(H)) {
        if (!Ey.destroyed) {
          return Ey;
        }
      }
      return null;
    }
    return this.list.find(EK => !EK.destroyed && EK.is(H)) || null;
  },
  number(T) {
    let H = Hd(T);
    let Ey = 0;
    if (typeof H == "string") {
      for (let EK of C1(H)) {
        if (!EK.destroyed) {
          Ey++;
        }
      }
      return Ey;
    }
    for (let Ew of this.list) {
      if (!Ew.destroyed && Ew.is(H)) {
        Ey++;
      }
    }
    return Ey;
  },
  with(T, H) {
    let Ey = Hd(T);
    let EK;
    if (typeof Ey == "string") {
      let Ew = C1(Ey);
      if (!Ew.length) {
        return;
      }
      if (Ew.length === 1) {
        let Em = Ew[0];
        if (!Em.destroyed && Em.is(Ey)) {
          H(Em);
        }
        return;
      }
      EK = Ew.slice();
    } else {
      EK = this.list.slice();
    }
    for (let Ep of EK) {
      if (!Ep.destroyed && Ep.is(Ey)) {
        H(Ep);
      }
    }
  }
};
var C4 = {};
var C5 = {};
var C6 = null;
var C7 = {};
function C8(T, H, Ey) {
  if (H !== undefined) {
    Object.assign(C5[H] ||= {}, T);
  }
  if (H === undefined || Ey === false) {
    Object.assign(C4, T);
  }
  C6 = null;
  for (let EK of Object.keys(C7)) {
    delete C7[EK];
  }
}
a(C8, "registerObjectIndex");
var C9 = new Map();
var CS = a(() => C5.ut, "utIndexTable");
var CU = a(T => C5[T], "indexTableFor");
var CT = null;
var CH = false;
function CC(T, H) {
  CT = T || null;
  CH = !!CT && !!H;
  for (let Ey of Object.keys(C7)) {
    delete C7[Ey];
  }
}
a(CC, "setIndexOverlay");
var CN = a(() => CT, "indexOverlay");
function Ch(T) {
  if (CT !== null) {
    let Em = CU(CT);
    if (Em && Em[T] !== undefined) {
      return Em[T];
    }
    if (Em && CH) {
      let Ep = CT + ":" + T + " -> (none)";
      C9.set(Ep, (C9.get(Ep) || 0) + 1);
      return;
    }
  }
  let H = CU(nd);
  let Ey = CS();
  let EK = Ey && typeof nd == "number" && C3.first("ut_dr_adapter");
  if (EK && Ey[T] !== undefined) {
    return Ey[T];
  }
  if (H && H[T] !== undefined) {
    return H[T];
  }
  if (Ey && Ey[T] !== undefined && !EK && C3.first("ut_dr_adapter")) {
    return Ey[T];
  }
  let Ew = C4[T];
  if (H && Ew !== undefined) {
    let Ed = nd + ":" + T + " -> " + (Ew && Ew.name ? Ew.name : String(Ew));
    C9.set(Ed, (C9.get(Ed) || 0) + 1);
  }
  return Ew;
}
a(Ch, "classForIndex");
function CE(T) {
  let H = Ch(T);
  if (H && H.name) {
    return C3.first(H.name);
  } else {
    return null;
  }
}
a(CE, "instByIndex");
function CO(T) {
  let H = typeof nd == "number" && CS() && C3.first("ut_dr_adapter") ? [["ut", CS()], [nd, CU(nd)]] : [[nd, CU(nd)]];
  if (CT !== null) {
    H.unshift([CT, CU(CT)]);
  }
  for (let [Ey, EK] of H) {
    if (!EK) {
      continue;
    }
    let Ew = C7[Ey];
    if (!Ew) {
      Ew = C7[Ey] = new Map();
      for (let Ep of Object.values(EK)) {
        if (typeof Ep == "function") {
          Ew.set(Ep.name, Ep);
        }
      }
    }
    let Em = Ew.get(T);
    if (Em) {
      return Em;
    }
  }
  if (!C6) {
    C6 = new Map();
    for (let Ed of Object.values(C4)) {
      if (typeof Ed == "function") {
        C6.set(Ed.name, Ed);
      }
    }
  }
  return C6.get(T);
}
a(CO, "classByName");
var CZ = new Map();
var Cb = null;
function CV(T) {
  Cb = typeof T == "function" ? T : null;
}
a(CV, "setCreateHook");
function Cs(T, H, Ey, EK) {
  if (typeof Ey == "number") {
    Ey = Ch(Ey) || Ey;
  }
  if (typeof Ey == "string") {
    if (this && this.constructor && this.constructor.name === Ey) {
      Ey = this.constructor;
    } else {
      Ey = CO(Ey) || Ey;
    }
  }
  if (typeof Ey != "function") {
    let Ep = typeof Ey + ":" + String(Ey);
    CZ.set(Ep, (CZ.get(Ep) || 0) + 1);
    return null;
  }
  let Ew = new Ey();
  Ew.x = T;
  Ew.y = H;
  Ew.xstart = T;
  Ew.ystart = H;
  Ew._px = Ew.xprevious = T;
  Ew._py = Ew.yprevious = H;
  if (Ey.defaultSprite) {
    Ew.sprite_index = Ey.defaultSprite;
  }
  if (Ey.defaultMask) {
    Ew.mask_index = Ey.defaultMask;
  }
  if (Ey.defaultDepth !== undefined) {
    Ew.depth = Ey.defaultDepth;
  }
  if (Ey.defaultVisible === false) {
    Ew.visible = false;
  }
  if (Ey.zeroFields) {
    for (let Ed of Ey.zeroFields) {
      Ew[Ed] = 0;
    }
  }
  C3.list.push(Ew);
  C3.spawns++;
  if (HP === C3.list.length - 1) {
    HR(Ew);
  }
  if (EK) {
    Object.assign(Ew, EK);
  }
  let Em = C3.self;
  if (Cb !== null) {
    Cb(Ew, Em, this);
  }
  C3.self = Ew;
  try {
    if (typeof Ew.preCreate == "function") {
      Ew.preCreate();
    }
    Ew.create();
  } finally {
    C3.self = Em;
  }
  return Ew;
}
a(Cs, "instance_create");
var Ck = a(T => SY(C3.exists(T)), "instance_exists");
var Cx = a(T => C3.number(T), "instance_number");
function Cq(T) {
  let H = T.mask_index;
  if (typeof H == "number" && H < 0) {
    return T.sprite_index;
  } else {
    return H || T.sprite_index;
  }
}
a(Cq, "collName");
function Cv(T) {
  let H = Cq(T);
  if (!H) {
    return null;
  }
  let Ey = S3[H];
  if (!Ey) {
    return null;
  }
  let EK = Ey.precise && Ey.masks ? Ey.masks.length : 1;
  let Ew = (Math.floor(T.image_index) % Math.max(1, Ey.frames) + Ey.frames) % Math.max(1, Ey.frames);
  return {
    spr: Ey,
    mask: SN(Ey, Math.min(Ew, EK - 1))
  };
}
a(Cv, "maskInfo");
function Cu(T, H, Ey = T.x, EK = T.y) {
  let Ew = T.image_angle * nT;
  let Em = Math.cos(Ew);
  let Ep = Math.sin(Ew);
  let Ed = T.image_xscale;
  let Ef = T.image_yscale;
  let EL = H.bb;
  let EY = (EL[0] - H.ox) * Ed;
  let Eg = (EL[2] + 1 - H.ox) * Ed;
  let Ei = (EL[1] - H.oy) * Ef;
  let Ej = (EL[3] + 1 - H.oy) * Ef;
  let EA = 1000000000;
  let EP = 1000000000;
  let EI = -1000000000;
  let ER = -1000000000;
  let EF;
  let e0;
  EF = Ey + EY * Em + Ei * Ep;
  e0 = EK - EY * Ep + Ei * Em;
  if (EF < EA) {
    EA = EF;
  }
  if (EF > EI) {
    EI = EF;
  }
  if (e0 < EP) {
    EP = e0;
  }
  if (e0 > ER) {
    ER = e0;
  }
  EF = Ey + Eg * Em + Ei * Ep;
  e0 = EK - Eg * Ep + Ei * Em;
  if (EF < EA) {
    EA = EF;
  }
  if (EF > EI) {
    EI = EF;
  }
  if (e0 < EP) {
    EP = e0;
  }
  if (e0 > ER) {
    ER = e0;
  }
  EF = Ey + EY * Em + Ej * Ep;
  e0 = EK - EY * Ep + Ej * Em;
  if (EF < EA) {
    EA = EF;
  }
  if (EF > EI) {
    EI = EF;
  }
  if (e0 < EP) {
    EP = e0;
  }
  if (e0 > ER) {
    ER = e0;
  }
  EF = Ey + Eg * Em + Ej * Ep;
  e0 = EK - Eg * Ep + Ej * Em;
  if (EF < EA) {
    EA = EF;
  }
  if (EF > EI) {
    EI = EF;
  }
  if (e0 < EP) {
    EP = e0;
  }
  if (e0 > ER) {
    ER = e0;
  }
  return [EA, EP, EI, ER];
}
a(Cu, "worldBounds");
var Cc = Symbol("worldBounds");
function Cz(T, H) {
  let Ey = T[Cc];
  if (Ey && Ey.x === T.x && Ey.y === T.y && Ey.a === T.image_angle && Ey.xs === T.image_xscale && Ey.ys === T.image_yscale && Ey.spr === H) {
    return Ey.b;
  }
  let EK = Cu(T, H);
  T[Cc] = {
    x: T.x,
    y: T.y,
    a: T.image_angle,
    xs: T.image_xscale,
    ys: T.image_yscale,
    spr: H,
    b: EK
  };
  return EK;
}
a(Cz, "boundsOf");
function CB(T) {
  let H = Cq(T);
  return H && S3[H] || null;
}
a(CB, "collSprite");
function CG(T, H) {
  let Ey = H.precise && H.masks ? H.masks.length : 1;
  let EK = (Math.floor(T.image_index) % Math.max(1, H.frames) + H.frames) % Math.max(1, H.frames);
  return SN(H, Math.min(EK, Ey - 1));
}
a(CG, "frameMask");
function CM(T) {
  let H = Cv(T);
  if (!H) {
    return [T.x, T.y, T.x, T.y];
  }
  let Ey = H.spr;
  let EK = Ey.bb;
  if (nd === 5) {
    let Ej = Cu(T, Ey);
    return [Ej[0], Ej[1], Ej[2] - 1, Ej[3] - 1];
  }
  let Ew = T.image_angle * nT;
  let Em = Math.cos(Ew);
  let Ep = Math.sin(Ew);
  let Ed = T.image_xscale;
  let Ef = T.image_yscale;
  let EL = Infinity;
  let EY = Infinity;
  let Eg = -Infinity;
  let Ei = -Infinity;
  for (let [EA, EP] of [[EK[0], EK[1]], [EK[2], EK[1]], [EK[0], EK[3]], [EK[2], EK[3]]]) {
    let EI = (EA - Ey.ox) * Ed;
    let ER = (EP - Ey.oy) * Ef;
    let EF = T.x + EI * Em + ER * Ep;
    let e0 = T.y - EI * Ep + ER * Em;
    if (EF < EL) {
      EL = EF;
    }
    if (EF > Eg) {
      Eg = EF;
    }
    if (e0 < EY) {
      EY = e0;
    }
    if (e0 > Ei) {
      Ei = e0;
    }
  }
  return [EL, EY, Eg, Ei];
}
a(CM, "bboxOf");
function Cl(T, H, Ey) {
  let EK = Math.max(T[0] - H, 0, H - T[2]);
  let Ew = Math.max(T[1] - Ey, 0, Ey - T[3]);
  return Math.hypot(EK, Ew);
}
a(Cl, "distanceToBox");
function CJ(Ey, EK, Ew = Ey.x, Em = Ey.y) {
  let Ep = CB(Ey);
  let Ed = CB(EK);
  if (!Ep || !Ed) {
    return false;
  }
  let Ef = Ew === Ey.x && Em === Ey.y ? Cz(Ey, Ep) : Cu(Ey, Ep, Ew, Em);
  let EL = Cz(EK, Ed);
  if (Ef[0] > EL[2] || Ef[2] < EL[0] || Ef[1] > EL[3] || Ef[3] < EL[1]) {
    return false;
  }
  let EY = CW(Ep);
  let Eg = CW(Ed);
  if (EY && Eg && !Ey.image_angle && !EK.image_angle) {
    return Math.floor(Math.max(Ef[0], EL[0]) + 0.5) < Math.floor(Math.min(Ef[2], EL[2]) + 0.5) && Math.floor(Math.max(Ef[1], EL[1]) + 0.5) < Math.floor(Math.min(Ef[3], EL[3]) + 0.5);
  }
  if ((Math.abs(Ey.image_xscale) > 1 || Math.abs(Ey.image_yscale) > 1) && Math.abs(EK.image_xscale) * Ed.w * Math.abs(EK.image_yscale) * Ed.h < Math.abs(Ey.image_xscale) * Ep.w * Math.abs(Ey.image_yscale) * Ep.h && !EK.__swapProbe) {
    let eh = Ey.x;
    let eE = Ey.y;
    Ey.x = Ew;
    Ey.y = Em;
    EK.__swapProbe = true;
    try {
      return CJ(EK, Ey);
    } finally {
      Ey.x = eh;
      Ey.y = eE;
      EK.__swapProbe = false;
    }
  }
  let Ei = {
    spr: Ep,
    mask: CG(Ey, Ep)
  };
  let Ej = {
    spr: Ed,
    mask: CG(EK, Ed)
  };
  let EA = Ey.image_angle * nT;
  let EP = Math.cos(EA);
  let EI = Math.sin(EA);
  let ER = EK.image_angle * nT;
  let EF = Math.cos(ER);
  let e0 = Math.sin(ER);
  let e1 = Ey.image_xscale;
  let e2 = Ey.image_yscale;
  let e3 = EK.image_xscale;
  let e4 = EK.image_yscale;
  let e5 = Ed.w;
  let e6 = Ed.h;
  let e7 = Ej.mask;
  let e8 = Ei.mask;
  let e9 = Ep.w;
  let eS = Ep.bb;
  let eU = CX(Ep);
  let eT = Eg;
  let eH = Ed.bb;
  let eC = eS[0];
  let eN = eS[2];
  if (eU && !Ey.image_angle && e1) {
    let eO = (EL[0] - Ew) / e1 + Ep.ox;
    let eZ = (EL[2] - Ew) / e1 + Ep.ox;
    eC = Math.max(eC, Math.floor(Math.min(eO, eZ)) - 1);
    eN = Math.min(eN, Math.ceil(Math.max(eO, eZ)) + 1);
  }
  if (Ey.image_angle === 0 && EK.image_angle === 0 && eN >= eC && Number.isFinite(Ew + Em + e1 + e2 + EK.x + EK.y)) {
    let eb = eN - eC + 1;
    if (CQ.length < eb) {
      CQ = new Uint8Array(eb + 64);
      CD = new Int32Array(eb + 64);
    }
    let eV = false;
    for (let ek = eC; ek <= eN; ek++) {
      let eD = Math.floor((Ew + (ek + 0.5 - Ep.ox) * e1 - EK.x) / e3 + Ed.ox);
      let eW = eT ? eD >= eH[0] && eD <= eH[2] : eD >= 0 && eD < e5;
      CQ[ek - eC] = eW ? 1 : 0;
      CD[ek - eC] = eW ? eD : 0;
      if (eW) {
        eV = true;
      }
    }
    if (!eV) {
      return false;
    }
    for (let eX = eS[1]; eX <= eS[3]; eX++) {
      let ey = Math.floor((Em + (eX + 0.5 - Ep.oy) * e2 - EK.y) / e4 + Ed.oy);
      if (eT ? !(ey >= eH[1]) || !(ey <= eH[3]) : !(ey >= 0) || !(ey < e6)) {
        continue;
      }
      let eK = eX * e9;
      let ew = ey * e5;
      for (let em = eC; em <= eN; em++) {
        if (!!CQ[em - eC] && (!!eU || !!e8[eK + em]) && (eT || e7[ew + CD[em - eC]])) {
          return true;
        }
      }
    }
    return false;
  }
  for (let ep = eS[1]; ep <= eS[3]; ep++) {
    for (let ed = eC; ed <= eN; ed++) {
      if (!eU && !e8[ep * e9 + ed]) {
        continue;
      }
      let ef = (ed + 0.5 - Ep.ox) * e1;
      let eL = (ep + 0.5 - Ep.oy) * e2;
      let eY = Ew + ef * EP + eL * EI;
      let eg = Em - ef * EI + eL * EP;
      let ej = eY - EK.x;
      let eA = eg - EK.y;
      let eP = ej * EF - eA * e0;
      let eI = ej * e0 + eA * EF;
      let eR = Math.floor(eP / e3 + Ed.ox);
      let eF = Math.floor(eI / e4 + Ed.oy);
      if (eT) {
        if (eR >= eH[0] && eR <= eH[2] && eF >= eH[1] && eF <= eH[3]) {
          return true;
        }
        continue;
      }
      if (!(eR < 0) && !(eF < 0) && !(eR >= e5) && !(eF >= e6) && e7[eF * e5 + eR]) {
        return true;
      }
    }
  }
  return false;
}
a(CJ, "collides");
var CQ = new Uint8Array(64);
var CD = new Int32Array(64);
function CW(T) {
  return !T.precise || !T.masks;
}
a(CW, "rectMask");
function CX(T) {
  if (!CW(T)) {
    return false;
  }
  if (T.__bbOut === undefined) {
    let H = T.bb;
    T.__bbOut = !!H && (H[0] < 0 || H[1] < 0 || H[2] >= T.w || H[3] >= T.h);
  }
  return T.__bbOut;
}
a(CX, "boxMask");
function Cy(T, H, Ey, EK) {
  if (typeof EK == "number" && C3.view.live) {
    let Em = Ch(EK);
    if (!Em) {
      return 0;
    }
    EK = Em.kindName || Em.name;
  }
  let Ew = Hd(EK);
  for (let Ep of typeof Ew == "string" ? C1(Ew) : C3.list) {
    if (Ep !== T && !Ep.destroyed && !!Ep.is(Ew) && CJ(T, Ep, H, Ey)) {
      return 1;
    }
  }
  return 0;
}
a(Cy, "place_meeting");
var CK = [];
var Cw = 0;
var Cm = 16;
var Cp = a(T => {
  if (Cd.tfCache && T.__plainT) {
    return T.__plainT();
  }
  let H = T.getTransform();
  return H.b === 0 && H.c === 0 && Number.isInteger(H.a) && Number.isInteger(H.d) && Number.isInteger(H.e) && Number.isInteger(H.f);
}, "plainT");
var Cd = {
  light: false,
  spriteFast: true,
  segStack: true,
  textKeep: true,
  tilePattern: true,
  textSeen: true,
  fontRun: true,
  segBounds: true,
  textRun: true,
  textRunScaled: true,
  segFast: true,
  assetCopy: true,
  spriteDirect: true,
  fontDirect: true,
  tfCache: true,
  twReuse: true,
  cutCpu: true
};
var Cf = null;
var CL = {
  merges: 0,
  maxUsed: 0
};
function CY(T, H, Ey) {
  let EK = T.clips;
  if (!!EK && !!EK.length && !!Ey && H !== Ey) {
    for (let Ew of EK) {
      if (Ew.ctx === H) {
        try {
          if (Ew.T && Ey.setTransform) {
            Ey.setTransform(Ew.T);
          }
          Ey.save();
          Cg(Ey, Ew.R, Ew.H);
        } catch {}
        Ew.ctx = Ey;
        if (Cf && H.canvas === Cf) {
          try {
            H.restore();
          } catch {}
        }
      }
    }
  }
}
a(CY, "carryClips");
function Cg(T, H, Ey) {
  T.beginPath();
  T.rect(H[0], H[1], H[2] - H[0] + 1, H[3] - H[1] + 1);
  if (Ey && Ey.length) {
    for (let EK of Ey) {
      T.rect(EK[0], EK[1], EK[2] - EK[0] + 1, EK[3] - EK[1] + 1);
    }
    T.clip("evenodd");
  } else {
    T.clip();
  }
}
a(Cg, "applyClipPath");
var Cj = null;
function CA(T, H) {
  if (Cj) {
    return Cj(T, H);
  } else {
    return false;
  }
}
a(CA, "segBlend");
function CP(H) {
  if (H.__segB !== undefined) {
    return;
  }
  H.__segB = null;
  let Ey = Object.getPrototypeOf(H);
  let EK = () => {
    let e4 = H.__segB;
    if (e4) {
      e4[0] = 0;
      e4[1] = 0;
      e4[2] = 640;
      e4[3] = 480;
      e4[4] = 1;
    }
  };
  let Ew = 1;
  let Em = 0;
  let Ep = 0;
  let Ed = 1;
  let Ef = 0;
  let EL = 0;
  let EY = false;
  let Eg = -1;
  let Ei = null;
  for (let e4 of ["filter", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]) {
    let e5 = Object.getOwnPropertyDescriptor(Ey, e4);
    if (e5 && e5.get && e5.set) {
      Object.defineProperty(H, e4, {
        configurable: true,
        enumerable: true,
        get() {
          return e5.get.call(this);
        },
        set(e6) {
          Eg = -1;
          e5.set.call(this, e6);
        }
      });
    }
  }
  let Ej = (e6, e7, e8, e9, eS) => {
    let eU = H.__segB;
    if (!eU || eU[4]) {
      return;
    }
    if (Cd.segFast) {
      if (eU !== Ei) {
        Ei = eU;
        EY = false;
        Eg = -1;
      }
      if (Eg < 0) {
        Eg = H.filter && H.filter !== "none" || H.shadowBlur || H.shadowOffsetX || H.shadowOffsetY ? 1 : 0;
      }
      if (Eg) {
        EK();
        return;
      }
      if (!Number.isFinite(e6) || !Number.isFinite(e7) || !Number.isFinite(e8) || !Number.isFinite(e9)) {
        EK();
        return;
      }
      if (!EY) {
        let eK = Cd.tfCache ? e0() : H.getTransform();
        Ew = eK.a;
        Em = eK.b;
        Ep = eK.c;
        Ed = eK.d;
        Ef = eK.e;
        EL = eK.f;
        EY = true;
      }
      let eZ = e6 + e8;
      let eb = e7 + e9;
      let eV = Ew * e6 + Ep * e7 + Ef;
      let ek = eV;
      let eD = eV;
      eV = Ew * eZ + Ep * e7 + Ef;
      if (eV < ek) {
        ek = eV;
      }
      if (eV > eD) {
        eD = eV;
      }
      eV = Ew * e6 + Ep * eb + Ef;
      if (eV < ek) {
        ek = eV;
      }
      if (eV > eD) {
        eD = eV;
      }
      eV = Ew * eZ + Ep * eb + Ef;
      if (eV < ek) {
        ek = eV;
      }
      if (eV > eD) {
        eD = eV;
      }
      let eW = Em * e6 + Ed * e7 + EL;
      let eX = eW;
      let ey = eW;
      eW = Em * eZ + Ed * e7 + EL;
      if (eW < eX) {
        eX = eW;
      }
      if (eW > ey) {
        ey = eW;
      }
      eW = Em * e6 + Ed * eb + EL;
      if (eW < eX) {
        eX = eW;
      }
      if (eW > ey) {
        ey = eW;
      }
      eW = Em * eZ + Ed * eb + EL;
      if (eW < eX) {
        eX = eW;
      }
      if (eW > ey) {
        ey = eW;
      }
      ek = Math.floor(ek - eS);
      eX = Math.floor(eX - eS);
      eD = Math.ceil(eD + eS);
      ey = Math.ceil(ey + eS);
      if (ek < eU[0]) {
        eU[0] = Math.max(0, ek);
      }
      if (eX < eU[1]) {
        eU[1] = Math.max(0, eX);
      }
      if (eD > eU[2]) {
        eU[2] = Math.min(640, eD);
      }
      if (ey > eU[3]) {
        eU[3] = Math.min(480, ey);
      }
      return;
    }
    if (H.filter && H.filter !== "none" || H.shadowBlur || H.shadowOffsetX || H.shadowOffsetY) {
      EK();
      return;
    }
    if (!Number.isFinite(e6) || !Number.isFinite(e7) || !Number.isFinite(e8) || !Number.isFinite(e9)) {
      EK();
      return;
    }
    let eT = H.getTransform();
    let eH = [e6, e6 + e8, e6, e6 + e8];
    let eC = [e7, e7, e7 + e9, e7 + e9];
    let eN = Infinity;
    let eh = Infinity;
    let eE = -Infinity;
    let eO = -Infinity;
    for (let ew = 0; ew < 4; ew++) {
      let em = eT.a * eH[ew] + eT.c * eC[ew] + eT.e;
      let ep = eT.b * eH[ew] + eT.d * eC[ew] + eT.f;
      if (em < eN) {
        eN = em;
      }
      if (em > eE) {
        eE = em;
      }
      if (ep < eh) {
        eh = ep;
      }
      if (ep > eO) {
        eO = ep;
      }
    }
    eN = Math.floor(eN - eS);
    eh = Math.floor(eh - eS);
    eE = Math.ceil(eE + eS);
    eO = Math.ceil(eO + eS);
    if (eN < eU[0]) {
      eU[0] = Math.max(0, eN);
    }
    if (eh < eU[1]) {
      eU[1] = Math.max(0, eh);
    }
    if (eE > eU[2]) {
      eU[2] = Math.min(640, eE);
    }
    if (eO > eU[3]) {
      eU[3] = Math.min(480, eO);
    }
  };
  let EA = e6 => [e6.videoWidth || e6.naturalWidth || e6.width || e6.displayWidth || 0, e6.videoHeight || e6.naturalHeight || e6.height || e6.displayHeight || 0];
  H.drawImage = function (e6, e7, e8, e9, eS, eU, eT, eH, eC) {
    let eN = arguments.length;
    if (eN >= 9) {
      Ej(eU, eT, eH, eC, 1);
    } else if (eN >= 5) {
      Ej(e7, e8, e9, eS, 1);
    } else {
      let eh = EA(e6);
      if (eh[0] && eh[1]) {
        Ej(e7, e8, eh[0], eh[1], 1);
      } else {
        EK();
      }
    }
    return Ey.drawImage.apply(this, arguments);
  };
  H.fillRect = function (e6, e7, e8, e9) {
    Ej(Math.min(e6, e6 + e8), Math.min(e7, e7 + e9), Math.abs(e8), Math.abs(e9), 1);
    return Ey.fillRect.apply(this, arguments);
  };
  H.strokeRect = function (e6, e7, e8, e9) {
    Ej(Math.min(e6, e6 + e8), Math.min(e7, e7 + e9), Math.abs(e8), Math.abs(e9), (H.lineWidth || 1) + 1);
    return Ey.strokeRect.apply(this, arguments);
  };
  H.putImageData = function () {
    EK();
    return Ey.putImageData.apply(this, arguments);
  };
  for (let e6 of ["fillText", "strokeText", "drawFocusIfNeeded"]) {
    if (typeof Ey[e6] == "function") {
      H[e6] = function () {
        EK();
        return Ey[e6].apply(this, arguments);
      };
    }
  }
  let EP = null;
  let EI = null;
  let ER = null;
  let EF = false;
  let e0 = () => EI ||= H.getTransform();
  H.__tf = e0;
  H.__segReset = () => {
    EI = null;
    EY = false;
    Eg = -1;
    e2.length = 0;
  };
  H.__plainT = () => {
    let e7 = e0();
    if (e7 !== ER) {
      ER = e7;
      EF = e7.b === 0 && e7.c === 0 && Number.isInteger(e7.a) && Number.isInteger(e7.d) && Number.isInteger(e7.e) && Number.isInteger(e7.f);
    }
    return EF;
  };
  let e1 = (e7, e8, e9) => {
    if (!EP) {
      return;
    }
    if (!Number.isFinite(e7) || !Number.isFinite(e8) || !Number.isFinite(e9)) {
      EP = null;
      return;
    }
    let eS = e0();
    let eU = eS.a * e7 + eS.c * e8 + eS.e;
    let eT = eS.b * e7 + eS.d * e8 + eS.f;
    let eH = e9 ? e9 * Math.max(Math.hypot(eS.a, eS.b), Math.hypot(eS.c, eS.d)) : 0;
    if (eU - eH < EP[0]) {
      EP[0] = eU - eH;
    }
    if (eT - eH < EP[1]) {
      EP[1] = eT - eH;
    }
    if (eU + eH > EP[2]) {
      EP[2] = eU + eH;
    }
    if (eT + eH > EP[3]) {
      EP[3] = eT + eH;
    }
  };
  for (let e7 of ["setTransform", "resetTransform", "transform", "translate", "scale", "rotate"]) {
    if (typeof Ey[e7] == "function") {
      H[e7] = function () {
        EI = null;
        EY = false;
        return Ey[e7].apply(this, arguments);
      };
    }
  }
  let e2 = [];
  H.save = function () {
    e2.push(EI, EY, Ew, Em, Ep, Ed, Ef, EL, Eg);
    return Ey.save.apply(this, arguments);
  };
  H.restore = function () {
    if (e2.length) {
      let e8 = e2.pop();
      let e9 = e2.pop();
      let eS = e2.pop();
      let eU = e2.pop();
      let eT = e2.pop();
      let eH = e2.pop();
      let eC = e2.pop();
      let eN = e2.pop();
      let eh = e2.pop();
      if (Cd.segStack) {
        EI = eh;
        EY = eN;
        Ew = eC;
        Em = eH;
        Ep = eT;
        Ed = eU;
        Ef = eS;
        EL = e9;
        Eg = e8;
        return Ey.restore.apply(this, arguments);
      }
    }
    EI = null;
    EY = false;
    Eg = -1;
    return Ey.restore.apply(this, arguments);
  };
  if (typeof Ey.reset == "function") {
    H.reset = function () {
      EI = null;
      EY = false;
      Eg = -1;
      e2.length = 0;
      return Ey.reset.apply(this, arguments);
    };
  }
  H.beginPath = function () {
    EP = [Infinity, Infinity, -Infinity, -Infinity];
    return Ey.beginPath.apply(this, arguments);
  };
  H.moveTo = function (e8, e9) {
    e1(e8, e9, 0);
    return Ey.moveTo.apply(this, arguments);
  };
  H.lineTo = function (e8, e9) {
    e1(e8, e9, 0);
    return Ey.lineTo.apply(this, arguments);
  };
  H.rect = function (e8, e9, eS, eU) {
    e1(e8, e9, 0);
    e1(e8 + eS, e9 + eU, 0);
    e1(e8 + eS, e9, 0);
    e1(e8, e9 + eU, 0);
    return Ey.rect.apply(this, arguments);
  };
  H.arc = function (e8, e9, eS) {
    e1(e8, e9, Math.abs(eS));
    return Ey.arc.apply(this, arguments);
  };
  H.ellipse = function (e8, e9, eS, eU) {
    e1(e8, e9, Math.max(Math.abs(eS), Math.abs(eU)));
    return Ey.ellipse.apply(this, arguments);
  };
  H.quadraticCurveTo = function (e8, e9, eS, eU) {
    e1(e8, e9, 0);
    e1(eS, eU, 0);
    return Ey.quadraticCurveTo.apply(this, arguments);
  };
  H.bezierCurveTo = function (e8, e9, eS, eU, eT, eH) {
    e1(e8, e9, 0);
    e1(eS, eU, 0);
    e1(eT, eH, 0);
    return Ey.bezierCurveTo.apply(this, arguments);
  };
  H.arcTo = function (e8, e9, eS, eU, eT) {
    e1(e8, e9, Math.abs(eT));
    e1(eS, eU, Math.abs(eT));
    return Ey.arcTo.apply(this, arguments);
  };
  if (typeof Ey.roundRect == "function") {
    H.roundRect = function (e8, e9, eS, eU) {
      e1(e8, e9, 0);
      e1(e8 + eS, e9 + eU, 0);
      e1(e8 + eS, e9, 0);
      e1(e8, e9 + eU, 0);
      return Ey.roundRect.apply(this, arguments);
    };
  }
  let e3 = (e8, e9) => function () {
    let eS = H.__segB;
    if (eS && !eS[4]) {
      if (!EP || arguments[0] instanceof Path2D || H.filter && H.filter !== "none" || H.shadowBlur || H.shadowOffsetX || H.shadowOffsetY) {
        EK();
      } else if (EP[2] >= EP[0]) {
        let eU = e0();
        let eT = e9(Math.max(Math.hypot(eU.a, eU.b), Math.hypot(eU.c, eU.d)));
        let eH = Math.floor(EP[0] - eT);
        let eC = Math.floor(EP[1] - eT);
        let eN = Math.ceil(EP[2] + eT);
        let eh = Math.ceil(EP[3] + eT);
        if (eH < eS[0]) {
          eS[0] = Math.max(0, eH);
        }
        if (eC < eS[1]) {
          eS[1] = Math.max(0, eC);
        }
        if (eN > eS[2]) {
          eS[2] = Math.min(640, eN);
        }
        if (eh > eS[3]) {
          eS[3] = Math.min(480, eh);
        }
      }
    }
    return Ey[e8].apply(this, arguments);
  };
  H.fill = e3("fill", () => 2);
  H.stroke = e3("stroke", e8 => (H.lineWidth || 1) * e8 * (H.lineJoin === "miter" ? Math.max(1, H.miterLimit || 10) : 1) / 2 + 2);
}
a(CP, "trackSeg");
function CI(T, H) {
  let Ey = Cd.segBounds ? H.b : null;
  if (Ey && !Ey[4] && (Ey[2] <= Ey[0] || Ey[3] <= Ey[1])) {
    return;
  }
  let EK = Ey && !Ey[4] && (Ey[0] > 0 || Ey[1] > 0 || Ey[2] < 640 || Ey[3] < 480);
  let Ew = T.globalCompositeOperation;
  if (H.op) {
    T.globalCompositeOperation = H.op;
  }
  try {
    if (EK) {
      T.drawImage(H.canvas, Ey[0], Ey[1], Ey[2] - Ey[0], Ey[3] - Ey[1], Ey[0], Ey[1], Ey[2] - Ey[0], Ey[3] - Ey[1]);
    } else {
      T.drawImage(H.canvas, 0, 0);
    }
  } finally {
    if (H.op) {
      T.globalCompositeOperation = Ew;
    }
  }
}
a(CI, "drawSeg");
var CR = null;
function CF(T) {
  CR = T || null;
}
a(CF, "setCurG");
var N0 = null;
var N1 = false;
var N2 = ["drawPost", "drawGuiBegin", "drawGui", "drawGuiEnd"];
var N3 = {
  build: null,
  lazy: null,
  scale: 1
};
function N4(T, H, Ey) {
  let EK = {
    ctx: Ey.ctx,
    alpha: Ey.alpha,
    pal: Ey.pal,
    fog: Ey.fog
  };
  Ey.ctx = T;
  Ey.alpha = 1;
  Ey.pal = null;
  Ey.fog = null;
  try {
    for (let Ew of H) {
      if (Ew.type === "seg") {
        try {
          CI(T, Ew);
        } catch {}
        continue;
      }
      Ey.draw_sprite_ext(Ew.spr, Ew.idx, Ew.x, Ew.y, Ew.xs, Ew.ys, Ew.ang, Ew.blend, Ew.alpha);
    }
  } finally {
    Ey.ctx = EK.ctx;
    Ey.alpha = EK.alpha;
    Ey.pal = EK.pal;
    Ey.fog = EK.fog;
  }
}
a(N4, "paintRec");
function N5(T, H) {
  let Ey = N3.build();
  if (!Ey || !Ey.ctx) {
    return;
  }
  let EK = Ey.ctx;
  let Ew = N3.scale;
  EK.save();
  EK.setTransform(Ew, 0, 0, Ew, 0, 0);
  EK.globalAlpha = 1;
  EK.globalCompositeOperation = "source-over";
  EK.clearRect(0, 0, Ey.canvas.width, Ey.canvas.height);
  if (CT === null) {
    EK.fillStyle = "#000";
    EK.fillRect(0, 0, Ey.canvas.width, Ey.canvas.height);
  }
  try {
    N4(EK, T, H);
  } finally {
    EK.restore();
  }
}
a(N5, "compositeAppLive");
var N6 = {
  pre: null,
  input: null,
  guard: null,
  drawWith: null,
  around: null
};
var N7 = [];
function N8(T) {
  if (typeof T == "function" && !N7.includes(T)) {
    N7.push(T);
  }
}
a(N8, "onFightReset");
function N9() {
  for (let T of N7) {
    try {
      T();
    } catch (H) {
      console.warn("fight reset", T.name, H);
    }
  }
}
a(N9, "runFightResets");
N8(a(function () {
  N3.lazy = null;
}, "appSurfaceReset"));
N8(a(function () {
  Hu.clear();
}, "assetPitchReset"));
var NS = new Set();
var NU = a(() => [...NS], "drawFailureList");
var NT = a(() => [...NS], "instFailureList");
var NH = a(() => NS.clear(), "resetInstFailures");
function NC(T, H, Ey) {
  let EK = H.constructor.name + " [" + T + "]: " + (Ey && Ey.message);
  if (!NS.has(EK)) {
    NS.add(EK);
    console.error("[" + T + "] " + EK, Ey);
  }
}
a(NC, "instFailed");
var NN = a((T, H) => {
  if (Nx) {
    Nq(H);
  } else {
    NC("draw", T, H);
  }
}, "drawFailed");
function Nh(T, H) {
  SQ();
  EW.tick();
  HJ();
  hH();
  if (Sh.synthetic) {
    Sh.synthetic(C3.frame);
  }
  if (N6.input) {
    try {
      N6.input();
    } catch (EK) {
      NC("FrameHooks.input", {
        constructor: {
          name: "FrameHooks"
        }
      }, EK);
    }
  }
  if (N6.guard) {
    try {
      N6.guard();
    } catch (Ew) {
      NC("FrameHooks.guard", {
        constructor: {
          name: "FrameHooks"
        }
      }, Ew);
    }
  }
  SK();
  C3.frame++;
  if (N6.pre) {
    try {
      N6.pre();
    } catch (Em) {
      NC("FrameHooks.pre", {
        constructor: {
          name: "FrameHooks"
        }
      }, Em);
    }
  }
  EM();
  for (let Ep of C3.list) {
    Ep._px = Ep.xprevious = Ep.x;
    Ep._py = Ep.yprevious = Ep.y;
  }
  let Ey = () => C3.list.slice();
  for (let Ed of Ey()) {
    if (!Ed.destroyed) {
      C3.self = Ed;
      try {
        Ed.beginStep();
      } catch (Ef) {
        NC("beginStep", Ed, Ef);
      }
    }
  }
  for (let EL of Ey()) {
    if (!EL.destroyed) {
      C3.self = EL;
      for (let EY = 0; EY < 12; EY++) {
        if (EL.alarm[EY] > 0 && (Number.isInteger(EL.alarm[EY]) || nN.fractional++, EL.alarm[EY]--, EL.alarm[EY] <= 0)) {
          EL.alarm[EY] = -1;
          try {
            EL.alarmEvent(EY);
          } catch (Eg) {
            NC("alarm" + EY, EL, Eg);
          }
          if (EL.destroyed) {
            break;
          }
        }
      }
    }
  }
  for (let Ei of Ey()) {
    if (Ei.destroyed) {
      continue;
    }
    let Ej = SL(Ei.constructor);
    if (Ej.length) {
      C3.self = Ei;
      for (let [EA, EP, EI] of Ej) {
        if (EA === "board" ? Sh.held[EP] : EA === "Press" ? Sh.pressed[EP] : Sh.released[EP]) {
          Sd.fired.set(EI, (Sd.fired.get(EI) || 0) + 1);
          try {
            Ei[EI]();
          } catch (ER) {
            console.warn("key event " + Ei.constructor.name + "." + EI, ER);
          }
          if (Ei.destroyed) {
            break;
          }
        }
      }
    }
  }
  C3.self = null;
  for (let EF of Ey()) {
    if (!EF.destroyed) {
      C3.self = EF;
      let e0 = N6.around ? N6.around(EF, "step") : null;
      try {
        EF.step();
      } catch (e1) {
        NC("step", EF, e1);
      }
      if (e0) {
        try {
          e0();
        } catch (e2) {
          NC("around", EF, e2);
        }
      }
    }
  }
  C3.self = null;
  for (let e3 of C3.list) {
    if (e3.destroyed) {
      continue;
    }
    if (e3.friction !== 0) {
      let e5 = e3.speed;
      if (e5 > 0) {
        e5 = Math.max(0, e5 - e3.friction);
      } else if (e5 < 0) {
        e5 = Math.min(0, e5 + e3.friction);
      }
      e3.speed = e5;
    }
    if (e3.gravity !== 0) {
      e3._hs += nz(e3.gravity, e3.gravity_direction);
      e3._vs += nB(e3.gravity, e3.gravity_direction);
    }
    let e4 = U9.slowbullets && e3.is && e3.is("obj_bulletparent") ? 0.5 : 1;
    e3.x += e3._hs * e4;
    e3.y += e3._vs * e4;
  }
  Ex();
  for (let e6 of C3.list.slice()) {
    if (e6.destroyed || typeof e6.outsideRoom != "function") {
      continue;
    }
    let e7 = Cv(e6);
    let e8 = e6.x;
    let e9 = e6.y;
    let eS = e6.x;
    let eU = e6.y;
    if (e7) {
      let eT = Cu(e6, e7.spr);
      e8 = eT[0];
      e9 = eT[1];
      eS = eT[2];
      eU = eT[3];
    }
    if (e8 > C3.room.w || eS < 0 || e9 > C3.room.h || eU < 0) {
      let eH = C3.self;
      C3.self = e6;
      try {
        e6.outsideRoom();
      } catch (eC) {
        NC("outsideRoom", e6, eC);
      }
      C3.self = eH;
    }
  }
  {
    let eN = -1;
    let eh = -1;
    let eE = null;
    for (let [eO, eZ, eb] of T) {
      if (C3.list.length !== eN || C3.spawns !== eh) {
        eN = C3.list.length;
        eh = C3.spawns;
        eE = new Map();
      }
      let eV = eW => {
        let eX = eE.get(eW);
        if (!eX) {
          eX = C1(eW).filter(ey => !ey.destroyed);
          eE.set(eW, eX);
        }
        return eX;
      };
      let ek = eV(eO);
      if (!ek.length) {
        continue;
      }
      let eD = eV(eZ);
      if (eD.length) {
        for (let eW of ek) {
          if (eW.destroyed) {
            continue;
          }
          let eX = CB(eW);
          if (!eX) {
            continue;
          }
          let ey = Cz(eW, eX);
          for (let eK = 0; eK < eD.length; eK++) {
            let ew = eD[eK];
            if (ew.destroyed || eW.destroyed || ew === eW) {
              continue;
            }
            let em = CB(ew);
            if (!em) {
              continue;
            }
            let ep = Cz(ew, em);
            if (!(ey[0] > ep[2]) && !(ey[2] < ep[0]) && !(ey[1] > ep[3]) && !(ey[3] < ep[1]) && CJ(eW, ew)) {
              let ed = () => {
                if (!eW.destroyed) {
                  eX = CB(eW);
                  if (eX) {
                    ey = Cz(eW, eX);
                  }
                }
              };
              let ef = C3.self;
              C3.self = eW;
              try {
                eb(eW, ew);
              } catch (eL) {
                NC("collide/" + ew.constructor.name, eW, eL);
              }
              C3.self = ef;
              ed();
            }
          }
        }
      }
    }
  }
  for (let eY of Ey()) {
    if (!eY.destroyed) {
      C3.self = eY;
      try {
        eY.endStep();
      } catch (eg) {
        NC("endStep", eY, eg);
      }
      if (N6.around) {
        try {
          let ej = N6.around(eY, "endStep");
          if (ej) {
            ej();
          }
        } catch (eA) {
          NC("around", eY, eA);
        }
      }
    }
  }
  C3.self = null;
  if (C3.view.live && typeof C3.view.follow == "function") {
    try {
      C3.view.follow();
    } catch (eP) {
      NC("view.follow", {
        constructor: {
          name: "World.view"
        }
      }, eP);
    }
  }
  NE(H, false);
  SD();
}
a(Nh, "runFrame");
function NE(Ey, EK) {
  let Ew = typeof nd == "number";
  let Em = [nx.state, nx.calls];
  let Ep = C3.list.filter(eO => !eO.destroyed && eO.visible).sort(Ew ? (eO, eZ) => eZ.depth - eO.depth || eZ._dord - eO._dord : (eO, eZ) => eZ.depth - eO.depth || eO._ord - eZ._ord);
  let Ed = [];
  let Ef = null;
  let EL = null;
  let EY = Ey.ctx;
  CR = Ey;
  let Eg = () => {
    Cf ||= document.createElement("canvas");
    let eO = Cf;
    let eZ;
    let eb = Ed.length && Ed[0].canvas === eO ? 1 : 0;
    if (eb === 0) {
      if (eO.width === 640 && eO.height === 480 && (eZ = eO.getContext("2d")) && typeof eZ.reset == "function") {
        eZ.reset();
      } else {
        eO.width = 640;
        eO.height = 480;
        eZ = eO.getContext("2d");
      }
      if (!eZ) {
        return false;
      }
      eZ.imageSmoothingEnabled = false;
      eZ.clearRect(0, 0, 640, 480);
    } else {
      eZ = eO.getContext("2d");
    }
    if (eb) {
      eZ.save();
      eZ.setTransform(1, 0, 0, 1, 0, 0);
      eZ.globalAlpha = 1;
      eZ.globalCompositeOperation = "source-over";
    }
    try {
      N4(eZ, eb ? Ed.slice(1) : Ed, Ey);
    } finally {
      if (eb) {
        eZ.restore();
      }
    }
    Ed.length = 0;
    Ed.push({
      type: "seg",
      canvas: eO
    });
    Cw = 0;
    CL.merges++;
    return true;
  };
  let Ei = () => !Eg() || Ed.length !== 1 || Ed[0].canvas !== Cf ? false : (EL = Ef = Ed.pop(), Ey.ctx = Cf.getContext("2d"), true);
  let Ej = () => {
    if (Cw >= Cm) {
      Eg();
    }
    let eO = CK[Cw] ||= document.createElement("canvas");
    Cw++;
    let eZ;
    if (eO.width === 640 && eO.height === 480 && (eZ = eO.getContext("2d")) && typeof eZ.reset == "function") {
      eZ.reset();
    } else {
      eO.width = 640;
      eO.height = 480;
      eZ = eO.getContext("2d");
      eZ.clearRect(0, 0, 640, 480);
    }
    eZ.imageSmoothingEnabled = false;
    Ef = {
      type: "seg",
      canvas: eO,
      b: [640, 480, 0, 0, 0]
    };
    CP(eZ);
    eZ.__segReset();
    eZ.__segB = Ef.b;
    Ey.ctx = eZ;
    if (Cw > CL.maxUsed) {
      CL.maxUsed = Cw;
    }
  };
  let EA = () => {
    if (Ef) {
      if (!Ef.op) {
        return;
      }
      EP();
    }
    Ej();
  };
  let EP = () => {
    if (Ef) {
      Ed.push(Ef);
      Ef = null;
      Ey.ctx = EY;
    }
  };
  Cj = (eO, eZ) => {
    if (!Ef || eO !== Ey.ctx || eO.canvas !== Ef.canvas) {
      return false;
    }
    let eb = eZ === "lighter" || eZ === "lighten" ? eZ : undefined;
    let eV = eZ !== "source-over" && eb === undefined;
    if (EL && Ef === EL) {
      if (!eV) {
        return false;
      }
      let eD = typeof eO.getTransform == "function" ? eO.getTransform() : null;
      EP();
      Ej();
      CY(Ey, eO, Ey.ctx);
      if (eD && Ey.ctx && Ey.ctx.setTransform) {
        Ey.ctx.setTransform(eD);
      }
      return true;
    }
    if ((EL || Cw >= Cm) && N6.drawWith === null && !eV && Ef.op !== eb) {
      let eW = typeof eO.getTransform == "function" ? eO.getTransform() : null;
      EP();
      if (Ei()) {
        CY(Ey, eO, Ey.ctx);
        if (eW && Ey.ctx.setTransform) {
          Ey.ctx.setTransform(eW);
        }
        return true;
      } else {
        EA();
        if (eb) {
          Ef.op = eb;
        }
        CY(Ey, eO, Ey.ctx);
        if (eW && Ey.ctx && Ey.ctx.setTransform) {
          Ey.ctx.setTransform(eW);
        }
        return true;
      }
    }
    if (Ef.op === eb) {
      return false;
    }
    let ek = typeof eO.getTransform == "function" ? eO.getTransform() : null;
    EP();
    EA();
    if (eb) {
      Ef.op = eb;
    }
    CY(Ey, eO, Ey.ctx);
    if (ek && Ey.ctx && Ey.ctx.setTransform) {
      Ey.ctx.setTransform(ek);
    }
    return true;
  };
  Cw = 0;
  if (N3.build) {
    N3.build();
  }
  N3.lazy = null;
  let EI = () => {
    N3.lazy = null;
    N5(Ef ? Ed.concat([Ef]) : Ed, Ey);
  };
  let ER = C3.view.x || 0;
  let EF = C3.view.y || 0;
  let e0 = ER !== 0 || EF !== 0;
  let e1 = e0 ? eO => {
    let eZ = eO.constructor.screenSpace;
    if (Ey.ctx) {
      Ey.ctx.setTransform(1, 0, 0, 1, eZ ? 0 : -ER, eZ ? 0 : -EF);
    }
  } : () => {};
  let e2 = eO => {
    let eZ = {
      type: "spr",
      inst: eO,
      spr: eO.sprite_index,
      idx: eO.image_index,
      x: eO.x,
      y: eO.y,
      px: eO._px,
      py: eO._py,
      xs: eO.image_xscale,
      ys: eO.image_yscale,
      ang: eO.image_angle,
      blend: eO.image_blend,
      alpha: eO.image_alpha
    };
    if (e0 && !eO.constructor.screenSpace) {
      eZ.x -= ER;
      eZ.y -= EF;
      eZ.px -= ER;
      eZ.py -= EF;
    }
    if (EK) {
      eZ.px = eZ.x;
      eZ.py = eZ.y;
    }
    return eZ;
  };
  let e3 = [];
  let e4 = 160;
  let e5 = U8 * (SW && SW.roomScale === 2 ? 2 : 1);
  let e6 = eO => {
    let eZ = S3[eO.spr];
    let eb = eZ && eZ.img && eZ.img[Ey.frame(eO.spr, eO.idx)];
    if (!eb) {
      return null;
    }
    let eV = eZ.hd > 1 ? eZ.hd : 1;
    let ek = eb.width / eV;
    let eD = eb.height / eV;
    let eW = eO.xs;
    let eX = eO.ys;
    if (![eO.x, eO.y, eW, eX, eO.ang].every(Number.isFinite)) {
      return null;
    }
    let ey;
    let eK;
    let ew;
    let em;
    if (eO.ang % 360) {
      let ef = Math.hypot(Math.max(Math.abs(eZ.ox), Math.abs(ek - eZ.ox)) * Math.abs(eW), Math.max(Math.abs(eZ.oy), Math.abs(eD - eZ.oy)) * Math.abs(eX)) + 1;
      ey = -ef;
      eK = ef;
      ew = -ef;
      em = ef;
    } else {
      ey = -eZ.ox * eW;
      eK = ey + ek * eW;
      ew = -eZ.oy * eX;
      em = ew + eD * eX;
      if (eK < ey) {
        [ey, eK] = [eK, ey];
      }
      if (em < ew) {
        [ew, em] = [em, ew];
      }
    }
    let ep = Number.isFinite(eO.px) ? eO.px : eO.x;
    let ed = Number.isFinite(eO.py) ? eO.py : eO.y;
    return {
      s: eZ,
      hd: eV,
      x0: Math.min(eO.x, ep) + ey,
      x1: Math.max(eO.x, ep) + eK,
      y0: Math.min(eO.y, ed) + ew,
      y1: Math.max(eO.y, ed) + em
    };
  };
  let e7 = (eO, eZ) => {
    if (!Ef || Ef.op || !Ey.ctx || Ey.ctx.canvas !== Ef.canvas || Ey.clipDepth > 0 || !Cd.light && (eO.x !== eO.px || eO.y !== eO.py)) {
      return false;
    }
    let eb = eZ.s;
    if (e5 > 1 && (eZ.hd > 1 || eO.ang % 360 || !Number.isInteger(eO.x) || !Number.isInteger(eO.y) || !Number.isInteger(eO.xs) || !Number.isInteger(eO.ys) || !Number.isInteger(eb.ox) || !Number.isInteger(eb.oy))) {
      return false;
    } else {
      return eZ.x0 >= 0 && eZ.y0 >= 0 && eZ.x1 <= 640 && eZ.y1 <= 480;
    }
  };
  let e8 = eO => {
    let eZ = e2(eO);
    let eb = Ef ? e6(eZ) : null;
    if (eb && e7(eZ, eb)) {
      let eV = C3.self;
      C3.self = eO;
      let ek = Ey.ctx;
      ek.save();
      ek.setTransform(1, 0, 0, 1, 0, 0);
      ek.globalAlpha = 1;
      ek.globalCompositeOperation = "source-over";
      try {
        N4(ek, [eZ], Ey);
      } finally {
        ek.restore();
        C3.self = eV;
      }
      e3.push(eZ);
      return;
    }
    if (eb && (eb.x1 < -e4 || eb.x0 > 640 + e4 || eb.y1 < -e4 || eb.y0 > 480 + e4)) {
      Ed.push(eZ);
      return;
    }
    EP();
    Ed.push(eZ);
  };
  for (let eO of Ep) {
    if (!eO.destroyed && typeof eO.drawPre == "function") {
      EA();
      C3.self = eO;
      e1(eO);
      N3.lazy = EI;
      try {
        eO.drawPre(Ey);
      } catch (eZ) {
        if (EK) {
          Nq(eZ);
        } else {
          console.warn("drawPre", eO.constructor.name, eZ);
        }
      }
      N3.lazy = null;
      Ey.resetDrawState();
    }
  }
  C3.self = null;
  let e9 = N6.drawWith;
  let eS = eb => e9 !== null && e9(eb) === "nowhere";
  let eU = () => {
    EP();
    return Ed.length;
  };
  let eT = eb => {
    Ef = null;
    Ey.ctx = EY;
    if (Ed.length > eb) {
      Ed.length = eb;
    }
  };
  for (let eb of Ep) {
    if (eb.destroyed || typeof eb.drawBegin != "function") {
      continue;
    }
    let eV = e9 !== null && eS(eb);
    let ek = eV ? eU() : 0;
    EA();
    C3.self = eb;
    e1(eb);
    N3.lazy = EI;
    try {
      eb.drawBegin(Ey);
    } catch (eD) {
      if (EK) {
        Nq(eD);
      } else {
        console.warn("drawBegin", eb.constructor.name, eD);
      }
    }
    N3.lazy = null;
    if (eV) {
      eT(ek);
    }
    Ey.resetDrawState();
  }
  C3.self = null;
  for (let eW of Ep) {
    if (eW.destroyed) {
      continue;
    }
    let eX = e9 !== null && e9(eW) === "nowhere";
    if (eW.draw === Hm.prototype.draw && eW.sprite_index) {
      if (!eX) {
        e8(eW);
      }
    } else {
      let ey = 0;
      if (eX) {
        EP();
        ey = Ed.length;
      }
      EA();
      C3.self = eW;
      e1(eW);
      N3.lazy = EI;
      N0 = eW.interpSelf ? eW : null;
      N1 = false;
      try {
        eW.draw(Ey);
      } catch (eK) {
        NN(eW, eK);
      }
      N3.lazy = null;
      N0 = null;
      if (N1 && eW.sprite_index && !eX) {
        e8(eW);
      }
      N1 = false;
      if (eX) {
        Ef = null;
        Ey.ctx = EY;
        if (Ed.length > ey) {
          Ed.length = ey;
        }
      }
      Ey.resetDrawState();
    }
  }
  C3.self = null;
  EP();
  Ey.ctx = EY;
  for (let ew of Ep) {
    if (ew.destroyed || typeof ew.drawEnd != "function") {
      continue;
    }
    let em = e9 !== null && eS(ew);
    let ep = em ? eU() : 0;
    EA();
    C3.self = ew;
    e1(ew);
    N3.lazy = EI;
    try {
      ew.drawEnd(Ey);
    } catch (ed) {
      if (EK) {
        Nq(ed);
      } else {
        console.warn("drawEnd", ew.constructor.name, ed);
      }
    }
    N3.lazy = null;
    if (em) {
      eT(ep);
    }
    Ey.resetDrawState();
  }
  C3.self = null;
  EP();
  Ey.ctx = EY;
  if (EK) {
    Cj = null;
    Ed.baked = e3;
    return Ed;
  }
  let eH = Ed.length;
  let eC = CL.merges;
  let eN = Ed.slice();
  let eh = () => {
    N3.lazy = null;
    N5(eN, Ey);
  };
  N3.lazy = eh;
  for (let ef of N2) {
    for (let eL of Ep) {
      if (!eL.destroyed && typeof eL[ef] == "function") {
        EA();
        C3.self = eL;
        try {
          eL[ef](Ey);
        } catch (eY) {
          console.warn(ef, eL.constructor.name, eY);
        }
        Ey.resetDrawState();
      }
    }
    C3.self = null;
    EP();
    Ey.ctx = EY;
  }
  let eE = NO.on && !Uh;
  if (eE) {
    Nv();
  }
  for (let eg of C3.list) {
    if (eg.destroyed) {
      continue;
    }
    if (!eg.image_speed) {
      E0(eg);
      continue;
    }
    let ej = eg.sprite_index && S3[eg.sprite_index];
    eg.image_index += eg.image_speed * S7(ej);
    let eA = ej ? Math.max(1, ej.frames) : 0;
    if (!!eA && eA !== 1 && Number.isFinite(eg.image_index) && (eg.image_index >= eA || eg.image_index < 0)) {
      eg.image_index = (eg.image_index % eA + eA) % eA;
      let eP = C3.self;
      C3.self = eg;
      try {
        eg.animationEnd();
      } catch (eI) {
        NC("animationEnd", eg, eI);
      } finally {
        C3.self = eP;
      }
    }
  }
  Cj = null;
  if (CK.length > Cm) {
    CK.length = Cm;
  }
  Ed.baked = e3;
  Ed.nWorld = eH;
  Ed.tailOK = CL.merges === eC;
  Ed.rng = Em;
  C3.record = Ed;
  if (eE) {
    NO.rec = Ed;
  }
}
a(NE, "recordDraw");
var NO = {
  on: false,
  broke: null,
  frame: -1,
  rec: null,
  stamp: 0,
  ms: 0,
  cost: {
    save: 0,
    draw: 0,
    restore: 0
  }
};
var NZ = Symbol("tween");
var Nb = ["x", "y", "image_angle", "image_xscale", "image_yscale", "image_alpha"];
var NV = [64, 64, 90, 1, 1, 0.5];
var Nk = 300000;
var Nx = false;
var Nq = a(T => {
  if (!NO.broke) {
    NO.broke = String(T && T.message || T);
    console.warn("[smooth fights] stopped for this fight:", T);
  }
}, "twBad");
function Nv() {
  let T = C3.frame;
  let H = C3.list;
  for (let Ey = 0; Ey < H.length; Ey++) {
    let EK = H[Ey];
    let Ew = EK[NZ];
    if (!Ew) {
      Ew = EK[NZ] = new Float64Array(15);
    } else {
      for (let Em = 0; Em < 6; Em++) {
        Ew[Em] = Ew[Em + 6];
      }
      Ew[13] = Ew[12];
    }
    Ew[6] = EK.x;
    Ew[7] = EK.y;
    Ew[8] = EK.image_angle;
    Ew[9] = EK.image_xscale;
    Ew[10] = EK.image_yscale;
    Ew[11] = EK.image_alpha;
    Ew[12] = T;
    Ew[14] = EK.image_index;
  }
  NO.frame = T;
  NO.stamp++;
}
a(Nv, "tweenNote");
var Nu = {
  stamp: -1,
  list: null,
  pending: null,
  listCopy: null,
  counters: null,
  ts: [],
  cs: [],
  ks: [],
  seen: new Set(),
  n: 0,
  over: false,
  len: 0,
  reuse: false
};
var Nc = {
  cv: [],
  merge: null
};
var Nz = Symbol.for("ut.zeroArray.raw");
function NB() {
  NO.broke = null;
  NO.frame = -1;
  NO.ms = 0;
  Nu.stamp = -1;
  Nu.list = Nu.pending = Nu.listCopy = null;
  Nu.ts.length = Nu.cs.length = Nu.ks.length = 0;
  Nu.seen.clear();
  Nu.len = 0;
  NM = new WeakMap();
}
a(NB, "tweenReset");
function NG(T, H, Ey, EK, Ew) {
  let Em = H[6 + Ey];
  let Ep = H[Ey];
  if (Ep === Em || T[EK] !== Em) {
    return;
  }
  let Ed = Em - Ep;
  if (Ey === 2) {
    Ed = ((Ed + 180) % 360 + 360) % 360 - 180;
  }
  if (!(Math.abs(Ed) <= NV[Ey])) {
    return;
  }
  let Ef = Em - Ed * Ew;
  if (Ey < 2) {
    return Math.round(Ef);
  } else {
    return Ef;
  }
}
a(NG, "twEase");
var NM = new WeakMap();
var Nl = 0;
function NJ(T, H) {
  let Ey = NM.get(T);
  if (Ey !== undefined && Ey.seen === Nl) {
    return;
  }
  let EK;
  let Ew;
  if (Array.isArray(T)) {
    let Ed = T[Nz];
    if (Ed && Ed !== T) {
      NJ(Ed, H);
      return;
    }
    EK = 0;
    if (Ey !== undefined && Ey.kind === 0) {
      Ew = Ey.c;
      let Ef = T.length;
      Ew.length = Ef;
      for (let EL = 0; EL < Ef; EL++) {
        Ew[EL] = T[EL];
      }
    } else {
      Ew = T.slice();
      if (Ey === undefined) {
        NM.set(T, Ey = {
          c: Ew,
          keys: null,
          kind: 0,
          seen: -1
        });
      } else {
        Ey.c = Ew;
        Ey.keys = null;
        Ey.kind = 0;
      }
    }
    Nu.n += Ew.length;
  } else if (T instanceof Map) {
    EK = 1;
    Ew = new Map(T);
    Nu.n += T.size;
  } else if (T instanceof Set) {
    EK = 2;
    Ew = new Set(T);
    Nu.n += T.size;
  } else {
    let EY = Object.getPrototypeOf(T);
    if (EY !== Object.prototype && EY !== null && !(T instanceof Hm)) {
      return;
    }
    EK = 3;
    let Eg = Object.keys(T);
    let Ei = Ey !== undefined && Ey.kind === 3 ? Ey.keys : null;
    let Ej = Ei !== null && Ei.length === Eg.length;
    if (Ej) {
      for (let EA = 0; EA < Eg.length; EA++) {
        if (Ei[EA] !== Eg[EA]) {
          Ej = false;
          break;
        }
      }
    }
    if (Ej) {
      Ew = Ey.c;
      for (let EP = 0; EP < Eg.length; EP++) {
        let EI = Eg[EP];
        Ew[EI] = T[EI];
      }
    } else {
      Ew = Object.assign({}, T);
      if (Ey === undefined) {
        NM.set(T, Ey = {
          c: Ew,
          keys: Eg,
          kind: 3,
          seen: -1
        });
      } else {
        Ey.c = Ew;
        Ey.keys = Eg;
        Ey.kind = 3;
      }
    }
  }
  if (Ey === undefined) {
    NM.set(T, Ey = {
      c: null,
      keys: null,
      kind: EK,
      seen: -1
    });
  }
  Ey.seen = Nl;
  let Em = Nu;
  let Ep = Em.len++;
  Em.ts[Ep] = T;
  Em.cs[Ep] = Ew;
  Em.ks[Ep] = EK;
  if (!(H <= 0) && !Em.over) {
    if (Em.n > Nk) {
      Em.over = true;
      return;
    }
    if (EK === 0) {
      for (let ER = 0; ER < Ew.length; ER++) {
        let EF = Ew[ER];
        if (EF !== null && typeof EF == "object") {
          NJ(EF, H - 1);
        }
      }
    } else if (EK === 3) {
      for (let e0 in Ew) {
        let e1 = Ew[e0];
        if (e1 !== null && typeof e1 == "object") {
          NJ(e1, H - 1);
        }
      }
    } else {
      for (let e2 of Ew.values()) {
        if (e2 !== null && typeof e2 == "object") {
          NJ(e2, H - 1);
        }
      }
    }
  }
}
a(NJ, "twHoldR");
function NQ(T, H) {
  if (T === null || typeof T != "object" || Nu.seen.has(T)) {
    return;
  }
  let Ey;
  let EK;
  if (Array.isArray(T)) {
    let Ew = T[Nz];
    if (Ew && Ew !== T) {
      NQ(Ew, H);
      return;
    }
    Ey = 0;
    EK = T.slice();
    Nu.n += EK.length;
  } else if (T instanceof Map) {
    Ey = 1;
    EK = new Map(T);
    Nu.n += T.size;
  } else if (T instanceof Set) {
    Ey = 2;
    EK = new Set(T);
    Nu.n += T.size;
  } else {
    let Em = Object.getPrototypeOf(T);
    if (Em !== Object.prototype && Em !== null && !(T instanceof Hm)) {
      return;
    }
    Ey = 3;
    EK = Object.assign({}, T);
  }
  Nu.seen.add(T);
  Nu.ts.push(T);
  Nu.cs.push(EK);
  Nu.ks.push(Ey);
  if (!(H <= 0) && !Nu.over) {
    if (Nu.n > Nk) {
      Nu.over = true;
      return;
    }
    if (Ey === 0) {
      for (let Ep = 0; Ep < EK.length; Ep++) {
        let Ed = EK[Ep];
        if (Ed !== null && typeof Ed == "object") {
          NQ(Ed, H - 1);
        }
      }
    } else if (Ey === 3) {
      for (let Ef in EK) {
        let EL = EK[Ef];
        if (EL !== null && typeof EL == "object") {
          NQ(EL, H - 1);
        }
      }
    } else {
      for (let EY of EK.values()) {
        if (EY !== null && typeof EY == "object") {
          NQ(EY, H - 1);
        }
      }
    }
  }
}
a(NQ, "twHold");
function ND() {
  let T = Nu;
  T.n = 0;
  T.over = false;
  T.stamp = NO.stamp;
  T.list = C3.list;
  T.pending = C3.pending;
  T.listCopy = C3.list.slice();
  if (Cd.twReuse) {
    T.reuse = true;
    T.len = 0;
    Nl++;
    if (T.seen.size) {
      T.seen.clear();
    }
    let Ey = T.ts.length;
    NJ(C3.list, 0);
    NJ(C3.pending, 0);
    NJ(C3.view, 0);
    NJ(C3.room, 0);
    for (let EK of T.listCopy) {
      NJ(EK, 3);
    }
    if (SW) {
      NJ(SW, 3);
    }
    if (Ey > T.len * 2 + 64) {
      T.ts.length = T.cs.length = T.ks.length = T.len;
    }
  } else {
    T.reuse = false;
    T.ts.length = T.cs.length = T.ks.length = 0;
    T.seen.clear();
    NQ(C3.list, 0);
    NQ(C3.pending, 0);
    NQ(C3.view, 0);
    NQ(C3.room, 0);
    for (let Ew of T.listCopy) {
      NQ(Ew, 3);
    }
    if (SW) {
      NQ(SW, 3);
    }
    T.len = T.ts.length;
  }
  let H = T.counters ||= [];
  H[0] = C3.frame;
  H[1] = C3.spawns;
  H[2] = C3.self;
  H[3] = Hm._id;
  H[4] = Hm._dseq;
  H[5] = Ev;
  H[6] = nx.seed;
  H[7] = nx.state;
  H[8] = nx.calls;
  H[9] = CR;
}
a(ND, "twSave");
var NW = null;
var NX = true;
var Ny = a((T, H) => {
  if (NX && NW.get(H) !== T) {
    NX = false;
  }
}, "twMCheck");
var NK = a((T, H) => {
  NW.set(H, T);
}, "twMPut");
function Nw() {
  let T = Nu;
  let H = C3.list !== T.list;
  C3.list = T.list;
  C3.pending = T.pending;
  let Ey = T.len;
  let EK = T.reuse;
  for (let Em = 0; Em < Ey; Em++) {
    let Ep = T.ts[Em];
    let Ed = T.cs[Em];
    let Ef = T.ks[Em];
    if (Ef === 0) {
      if (Ep.length !== Ed.length) {
        Ep.length = Ed.length;
        if (Ep === T.list) {
          H = true;
        }
      }
      for (let EL = 0; EL < Ed.length; EL++) {
        if (Ep[EL] !== Ed[EL]) {
          Ep[EL] = Ed[EL];
          if (Ep === T.list) {
            H = true;
          }
        }
      }
    } else if (Ef === 3) {
      for (let EY of Object.keys(Ep)) {
        if (!(EY in Ed)) {
          delete Ep[EY];
        }
      }
      for (let Eg in Ed) {
        if (Ep[Eg] !== Ed[Eg]) {
          Ep[Eg] = Ed[Eg];
        }
      }
    } else if (Ef === 1) {
      if (EK) {
        NW = Ep;
        NX = Ep.size === Ed.size;
        if (NX) {
          Ed.forEach(Ny);
        }
        if (!NX) {
          Ep.clear();
          Ed.forEach(NK);
        }
        NW = null;
        continue;
      }
      let Ei = Ep.size === Ed.size;
      if (Ei) {
        for (let [Ej, EA] of Ed) {
          if (Ep.get(Ej) !== EA) {
            Ei = false;
            break;
          }
        }
      }
      if (!Ei) {
        Ep.clear();
        for (let [EP, EI] of Ed) {
          Ep.set(EP, EI);
        }
      }
    } else {
      let ER = Ep.size === Ed.size;
      if (ER) {
        for (let EF of Ed) {
          if (!Ep.has(EF)) {
            ER = false;
            break;
          }
        }
      }
      if (!ER) {
        Ep.clear();
        for (let e0 of Ed) {
          Ep.add(e0);
        }
      }
    }
  }
  if (H) {
    C3.reindex();
  }
  let Ew = T.counters;
  C3.frame = Ew[0];
  C3.spawns = Ew[1];
  C3.self = Ew[2];
  Hm._id = Ew[3];
  Hm._dseq = Ew[4];
  Ev = Ew[5];
  nx.seed = Ew[6];
  nx.state = Ew[7];
  nx.calls = Ew[8];
  CR = Ew[9];
}
a(Nw, "twRestore");
function Nm(H, Ey) {
  let EK = NO;
  let Ew = C3.record;
  if (!EK.on || EK.broke || Nx || Uh || EK.frame !== C3.frame || EK.rec !== Ew || !Ew || !Ew.tailOK || !Ew.rng) {
    return null;
  }
  let Em = performance.now();
  let Ep = Nu;
  if (Ep.stamp !== EK.stamp || Ep.list !== C3.list || Ep.reuse !== !!Cd.twReuse) {
    ND();
  }
  if (Ep.over) {
    Nq("state too big to copy");
    return null;
  }
  let Ed = 1 - (Ey < 0 ? 0 : Ey > 1 ? 1 : Ey);
  let Ef = EK.frame;
  let EL = C3.list;
  for (let EF = 0; EF < EL.length; EF++) {
    let e0 = EL[EF];
    let e1 = e0[NZ];
    if (!e1 || e1[12] !== Ef || e1[13] !== Ef - 1) {
      continue;
    }
    let e2 = NG(e0, e1, 0, "x", Ed);
    let e3 = NG(e0, e1, 1, "y", Ed);
    if ((e2 !== undefined || e1[0] === e1[6]) && (e3 !== undefined || e1[1] === e1[7])) {
      if (e2 !== undefined) {
        e0.x = e2;
      }
      if (e3 !== undefined) {
        e0.y = e3;
      }
    }
    for (let e4 = 2; e4 < 6; e4++) {
      let e5 = NG(e0, e1, e4, Nb[e4], Ed);
      if (e5 !== undefined) {
        e0[Nb[e4]] = e5;
      }
    }
    e0.image_index = e1[14];
  }
  let EY = performance.now();
  let Eg = H.ctx;
  let Ei = [CK, Cf, Cw, N3.lazy];
  let Ej = null;
  let EA = null;
  CK = Nc.cv;
  Cf = Nc.merge;
  Cw = 0;
  Nx = true;
  UE();
  nx.state = Ew.rng[0];
  nx.calls = Ew.rng[1];
  try {
    Ej = NE(H, true);
  } catch (e6) {
    EA = e6;
  }
  let EP = performance.now();
  Nc.merge = Cf;
  CK = Ei[0];
  Cf = Ei[1];
  Cw = Ei[2];
  N3.lazy = Ei[3];
  Nx = false;
  UO();
  Cj = null;
  N0 = null;
  N1 = false;
  Nw();
  H.ctx = Eg;
  H.resetDrawState();
  let EI = performance.now();
  EK.cost.save = EY - Em;
  EK.cost.draw = EP - EY;
  EK.cost.restore = EI - EP;
  EK.ms += (EI - Em - EK.ms) * 0.1;
  if (EA) {
    Nq(EA);
  }
  if (!Ej || EK.broke) {
    return null;
  }
  let ER = Ej.concat(Ew.slice(Ew.nWorld));
  ER.baked = Ej.baked;
  return ER;
}
a(Nm, "tweenRecord");
var Np = {};
var Nd = {};
var Nf = {};
function NL(T, H, Ey) {
  if (H !== undefined) {
    Object.assign(Nd[H] ||= {}, T);
  }
  if (!Ey) {
    Object.assign(Nf, T);
  }
}
a(NL, "registerFontIndex");
function NY(T) {
  if (nY !== null) {
    let Ey = Nd[nY];
    if (Ey && Ey[T] !== undefined) {
      return Ey[T];
    }
  }
  let H = Nd[nd];
  if (H && H[T] !== undefined) {
    return H[T];
  } else {
    return Nf[T];
  }
}
a(NY, "fontNameForIndex");
var Ng = new Map();
var Nj = new Proxy(Np, {
  get(T, H) {
    if (typeof H == "string" && nd !== 1 && H.charCodeAt(0) !== 64) {
      let Ey = Ng.get(nd);
      if (Ey === undefined) {
        Ng.set(nd, Ey = new Map());
      }
      let EK = Ey.get(H);
      if (EK === undefined) {
        if (Ey.size >= 4096) {
          Ey.clear();
        }
        Ey.set(H, EK = H + "@ch" + nd);
      }
      let Ew = T[EK];
      if (Ew !== undefined) {
        return Ew;
      }
    }
    if (T[H] !== undefined) {
      return T[H];
    }
    if (typeof H == "string" && H.charCodeAt(0) >= 48 && H.charCodeAt(0) <= 57 && /^\d+$/.test(H)) {
      let Em = NY(H);
      if (Em !== undefined) {
        return Nj[Em];
      }
    }
  }
});
var NA = 1024;
var NP = new WeakMap();
function NI(T) {
  if (!T || !(T.width > 0) || !(T.height > 0)) {
    return null;
  }
  let H = NP.get(T);
  if (H) {
    return H;
  }
  let Ey = document.createElement("canvas");
  Ey.width = T.width;
  Ey.height = T.height;
  let EK = Ey.getContext("2d", {
    willReadFrequently: true
  });
  if (!EK) {
    return null;
  }
  EK.drawImage(T, 0, 0);
  let Ew = EK.getImageData(0, 0, T.width, T.height);
  let Em = document.createElement("canvas");
  Em.width = T.width;
  Em.height = T.height;
  let Ep = Em.getContext("2d", {
    willReadFrequently: true
  });
  if (Ep) {
    Ep.putImageData(Ew, 0, 0);
    H = {
      cv: Em,
      w: T.width,
      h: T.height,
      data: Ew.data
    };
    Em.__name = T.__name;
    Ey.width = Ey.height = 0;
    NP.set(T, H);
    return H;
  } else {
    return null;
  }
}
a(NI, "cpuFrame");
function NR(T) {
  if (T) {
    NP.delete(T);
  }
}
a(NR, "cpuFrameDrop");
var NF = null;
var h0 = null;
function h1(T, H, Ey, EK, Ew, Em) {
  let Ep = T.getContext("2d");
  if (!Cd.cutCpu || !Ew || !Em || typeof HTMLCanvasElement === "undefined" || H instanceof HTMLCanvasElement) {
    Ep.drawImage(H, Ey, EK, Ew, Em, 0, 0, Ew, Em);
    return;
  }
  if (NF) {
    if (NF.width !== Ew || NF.height !== Em) {
      NF.width = Ew;
      NF.height = Em;
    } else {
      h0.clearRect(0, 0, Ew, Em);
    }
  } else {
    NF = document.createElement("canvas");
    NF.width = Ew;
    NF.height = Em;
    h0 = NF.getContext("2d", {
      willReadFrequently: true
    });
  }
  h0.drawImage(H, Ey, EK, Ew, Em, 0, 0, Ew, Em);
  Ep.drawImage(NF, 0, 0);
}
a(h1, "cutRect");
var h3 = class O0 {
  dropCaches() {
    for (let T of ["tintCache", "palCache", "palTables", "spriteTints", "tintBySize", "gradCache"]) {
      if (this[T] && this[T].clear) {
        this[T].clear();
      }
    }
    this.dropText();
    this.textAtlas = null;
  }
  dropText() {
    for (let T of ["textCache", "_sw", "textCaches", "_sws", "fontRuns"]) {
      if (this[T]) {
        this[T].clear();
      }
    }
    this._tcC = this._swC = null;
  }
  textMem(T, H, Ey) {
    let EK = this[Ey];
    if (this[H] !== nd || !EK) {
      let Ew = this[T] ||= new Map();
      EK = Ew.get(nd);
      if (!EK) {
        Ew.set(nd, EK = new Map());
      }
      this[H] = nd;
      this[Ey] = EK;
    }
    return EK;
  }
  constructor(T) {
    this.ctx = T;
    this.alpha = 1;
    this.color = nH.white;
    this.font = "fnt_mainbig";
    this.halign = "left";
    this.valign = "top";
    this.fonts = Nj;
    this.tintCache = new Map();
    this.pal = null;
    this.palCache = new Map();
    this.palTables = new Map();
    this.fog = null;
    if (CR === null) {
      CR = this;
    }
    this.capture = false;
    this.capRect = null;
    this.clipDepth = 0;
  }
  resetDrawState() {
    this.fog = null;
    this.capture = false;
    this.capRect = null;
    this.capHoles = null;
    if (N3.resetBlend) {
      N3.resetBlend();
    }
    if (this.ctx) {
      this.ctx.globalCompositeOperation = "source-over";
    }
    let T = this.clips;
    while (this.clipDepth > 0) {
      this.clipDepth--;
      let H = T && T.pop();
      try {
        (H && H.ctx || this.ctx).restore();
      } catch {}
    }
    if (T) {
      T.length = 0;
    }
  }
  frame(T, H) {
    let Ey = S8(T);
    let EK = Math.max(1, Ey.frames);
    return (Math.floor(H) % EK + EK) % EK;
  }
  draw_sprite(T, H, Ey, EK) {
    this.draw_sprite_ext(T, H, Ey, EK, 1, 1, 0, nH.white, 1);
  }
  draw_sprite_ext(H, Ey, EK, Ew, Em, Ep, Ed, Ef, EL) {
    let EY = nh(Ef);
    let Eg;
    let Ei;
    if (Cd.spriteFast) {
      Eg = S5(typeof H == "string" ? H : String(H));
      if (!Eg) {
        return;
      }
      let e1 = Math.max(1, Eg.frames);
      Ei = (Math.floor(Ey) % e1 + e1) % e1;
    } else {
      Eg = S3[H];
      if (!Eg) {
        return;
      }
      Ei = this.frame(H, Ey);
    }
    let Ej = Eg.img[Ei];
    if (!Ej) {
      return;
    }
    let EA = this.pal ? this.paletted(Eg, Ei) : null;
    let EP = this.ctx;
    if (Cd.spriteDirect && !Ed && Em > 0 && Ep > 0 && !(Eg.hd > 1) && EL * this.alpha >= 1) {
      let e2 = this.fog ? this.tinted(Eg, Ei, this.fog, true) : EY && EY !== nH.white && EY !== "#ffffff" ? this.tinted(Eg, Ei, EY) : EA || Ej;
      let e3 = EK - Eg.ox * Em;
      let e4 = Ew - Eg.oy * Ep;
      let e5 = e2.width * Em;
      let e6 = e2.height * Ep;
      if (Number.isInteger(e3) && Number.isInteger(e4) && Number.isInteger(e5) && Number.isInteger(e6) && Cp(EP)) {
        let e7 = EP.globalAlpha;
        EP.globalAlpha = 1;
        EP.drawImage(e2, e3, e4, e5, e6);
        EP.globalAlpha = e7;
        return;
      }
    }
    EP.save();
    EP.globalAlpha = nK(EL * this.alpha, 0, 1);
    EP.translate(EK, Ew);
    if (Ed) {
      EP.rotate(-Ed * nT);
    }
    EP.scale(Em, Ep);
    let EI = Eg.hd || 0;
    let ER;
    if (EI > 1) {
      EP.scale(1 / EI, 1 / EI);
      ER = EP.imageSmoothingEnabled;
      EP.imageSmoothingEnabled = true;
      EP.imageSmoothingQuality = "high";
    }
    let EF = EI > 1 ? Eg.ox * EI : Eg.ox;
    let e0 = EI > 1 ? Eg.oy * EI : Eg.oy;
    if (this.fog) {
      EP.drawImage(this.tinted(Eg, Ei, this.fog, true), -EF, -e0);
    } else if (EY && EY !== nH.white && EY !== "#ffffff") {
      EP.drawImage(this.tinted(Eg, Ei, EY), -EF, -e0);
    } else {
      EP.drawImage(EA || Ej, -EF, -e0);
    }
    if (EI > 1) {
      EP.imageSmoothingEnabled = ER;
    }
    EP.restore();
  }
  tileGrid(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef, EL, EY, Eg) {
    if (!Cd.tilePattern || this.headless || this.fog || this.pal || !(Eg * this.alpha >= 1) || Ew * Em < 2 || !(Ef > 0) || !(EL > 0) || !Number.isInteger(Ef) || !Number.isInteger(EL)) {
      return false;
    }
    let Ei = nh(EY);
    if (Ei && Ei !== nH.white && Ei !== "#ffffff") {
      return false;
    }
    let Ej = S5(typeof T == "string" ? T : String(T));
    if (!Ej || Ej.hd > 1) {
      return false;
    }
    let EA = Math.max(1, Ej.frames);
    let EP = Ej.img[(Math.floor(H) % EA + EA) % EA];
    if (!EP || EP.__pend || EP.width * Ef !== Ep || EP.height * EL !== Ed) {
      return false;
    }
    let EI = Ey - Ej.ox * Ef;
    let ER = EK - Ej.oy * EL;
    let EF = this.ctx;
    if (!Number.isInteger(EI) || !Number.isInteger(ER) || !Number.isInteger(Ep) || !Number.isInteger(Ed) || !Cp(EF) || typeof EF.createPattern != "function") {
      return false;
    }
    let e0 = this.tilePats ||= new WeakMap();
    let e1 = e0.get(EP);
    if (e1 === undefined) {
      e1 = EF.createPattern(EP, "repeat");
      e0.set(EP, e1);
    }
    if (e1) {
      EF.save();
      EF.globalAlpha = 1;
      EF.translate(EI, ER);
      EF.scale(Ef, EL);
      EF.fillStyle = e1;
      EF.fillRect(0, 0, Ew * EP.width, Em * EP.height);
      EF.restore();
      return true;
    } else {
      return false;
    }
  }
  draw_sprite_part(T, H, Ey, EK, Ew, Em, Ep, Ed) {
    this.draw_sprite_part_ext(T, H, Ey, EK, Ew, Em, Ep, Ed, 1, 1, nH.white, 1);
  }
  draw_sprite_part_ext(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef, EL, EY, Eg) {
    let Ei = nh(EY);
    let Ej = S3[T];
    if (!Ej) {
      return;
    }
    let EA = Ej.img[this.frame(T, H)];
    if (!EA || !(Ew > 0) || !(Em > 0) || !Number.isFinite(Ey) || !Number.isFinite(EK) || !Number.isFinite(Ep) || !Number.isFinite(Ed)) {
      return;
    }
    let EP = this.fog ? this.tinted(Ej, this.frame(T, H), this.fog, true) : Ei && Ei !== nH.white && Ei !== "#ffffff" ? this.tinted(Ej, this.frame(T, H), Ei) : EA;
    let EI = this.ctx;
    EI.save();
    EI.globalAlpha = nK((Eg === undefined ? 1 : Eg) * this.alpha, 0, 1);
    EI.translate(Ep, Ed);
    EI.scale(Ef === undefined ? 1 : Ef, EL === undefined ? 1 : EL);
    EI.drawImage(EP, Ey, EK, Ew, Em, 0, 0, Ew, Em);
    EI.restore();
  }
  draw_sprite_stretched(T, H, Ey, EK, Ew, Em) {
    let Ep = S3[T];
    if (!Ep) {
      return;
    }
    let Ed = Ep.img[this.frame(T, H)];
    if (!Ed) {
      return;
    }
    let Ef = this.ctx;
    Ef.save();
    Ef.globalAlpha = nK(this.alpha, 0, 1);
    Ef.drawImage(Ed, Ey, EK, Ew, Em);
    Ef.restore();
  }
  draw_triangle(T, H, Ey, EK, Ew, Em, Ep) {
    let Ed = this.ctx;
    Ed.globalAlpha = nK(this.alpha, 0, 1);
    Ed.fillStyle = this.color;
    Ed.strokeStyle = this.color;
    if (!!Ep || Ed.globalCompositeOperation !== "destination-out" || !this.cutAliased(Ed, T, H, Ey, EK, Ew, Em)) {
      Ed.beginPath();
      Ed.moveTo(T, H);
      Ed.lineTo(Ey, EK);
      Ed.lineTo(Ew, Em);
      Ed.closePath();
      if (Ep) {
        Ed.stroke();
        return;
      }
      Ed.fill();
      if (Ed.globalAlpha >= 1 && Ed.globalCompositeOperation === "source-over") {
        let Ef = Ed.lineWidth;
        let EL = Ed.lineJoin;
        Ed.lineWidth = 0.5;
        Ed.lineJoin = "bevel";
        Ed.stroke();
        Ed.lineWidth = Ef;
        Ed.lineJoin = EL;
      }
    }
  }
  cutAliased(H, Ey, EK, Ew, Em, Ep, Ed) {
    let Ef = typeof H.getTransform == "function" ? H.getTransform() : null;
    if (!Ef || Ef.a !== 1 || Ef.b !== 0 || Ef.c !== 0 || Ef.d !== 1 || Ef.e !== 0 || Ef.f !== 0) {
      return false;
    }
    let EL = H.canvas && H.canvas.height || 0;
    let EY = H.canvas && H.canvas.width || 0;
    if (!EL || !EY || ![Ey, EK, Ew, Em, Ep, Ed].every(Number.isFinite)) {
      return false;
    }
    let Eg = [[Ey, EK, Ew, Em], [Ew, Em, Ep, Ed], [Ep, Ed, Ey, EK]];
    let Ei = Math.max(0, Math.ceil(Math.min(EK, Em, Ed) - 0.5));
    let Ej = Math.min(EL - 1, Math.floor(Math.max(EK, Em, Ed) - 0.5));
    for (let EA = Ei; EA <= Ej; EA++) {
      let EP = EA + 0.5;
      let EI = Infinity;
      let ER = -Infinity;
      for (let [e1, e2, e3, e4] of Eg) {
        if (e2 <= EP && e4 > EP || e4 <= EP && e2 > EP) {
          let e5 = e1 + (EP - e2) * (e3 - e1) / (e4 - e2);
          if (e5 < EI) {
            EI = e5;
          }
          if (e5 > ER) {
            ER = e5;
          }
        }
      }
      if (!(ER > EI)) {
        continue;
      }
      let EF = Math.max(0, Math.ceil(EI - 0.5));
      let e0 = Math.min(EY, Math.ceil(ER - 0.5));
      if (e0 > EF) {
        H.fillRect(EF, EA, e0 - EF, 1);
      }
    }
    return true;
  }
  draw_healthbar(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef, EL, EY) {
    let Eg = this.ctx;
    Eg.globalAlpha = nK(this.alpha, 0, 1);
    if (EL) {
      Eg.fillStyle = Em || nH.black;
      Eg.fillRect(T, H, Ey - T, EK - H);
    }
    Eg.fillStyle = Ed || nH.lime;
    Eg.fillRect(T, H, (Ey - T) * nK(Ew / 100, 0, 1), EK - H);
  }
  draw_sprite_white(T, H, Ey, EK, Ew, Em, Ep, Ed) {
    let Ef = S3[T];
    if (!Ef) {
      return;
    }
    let EL = this.ctx;
    EL.save();
    EL.globalAlpha = nK(Ed, 0, 1);
    EL.translate(Ey, EK);
    if (Ep) {
      EL.rotate(-Ep * nT);
    }
    EL.scale(Ew, Em);
    EL.drawImage(this.tinted(Ef, this.frame(T, H), "#ffffff", true), -Ef.ox, -Ef.oy);
    EL.restore();
  }
  palSet(T, H) {
    this.pal = H > 0 && S3[T] ? {
      palSprite: T,
      index: H
    } : null;
  }
  palReset() {
    this.pal = null;
  }
  paletted(H, Ey) {
    let EK = this.pal;
    if (!EK) {
      return null;
    }
    let Ew = H.name + ":" + Ey + ":" + EK.palSprite + ":" + EK.index;
    let Em = this.palCache.get(Ew);
    if (Em !== undefined) {
      return Em;
    }
    let Ep = this.paletteTable(EK.palSprite, EK.index);
    let Ed = H.img[Ey];
    if (!Ep || !Ed || !Ed.width) {
      this.palCache.set(Ew, null);
      return null;
    }
    let Ef = NI(Ed);
    if (!Ef) {
      this.palCache.set(Ew, null);
      return null;
    }
    let EL = EK.index !== Math.floor(EK.index) ? this.palFrac ||= [] : null;
    let EY = null;
    if (EL && EL.length >= 48) {
      let e0 = EL.shift();
      let e1 = this.palCache.get(e0);
      this.palCache.delete(e0);
      if (e1 && e1.width === Ed.width && e1.height === Ed.height) {
        Em = e1;
        EY = Em.getContext("2d");
      }
    }
    if (!EY) {
      Em = document.createElement("canvas");
      Em.width = Ed.width;
      Em.height = Ed.height;
      EY = Em.getContext("2d");
    }
    let Eg = EY.createImageData(Em.width, Em.height);
    let Ei = Eg.data;
    Ei.set(Ef.data);
    let Ej = this.palPix ||= new Map();
    let EA = H.name + ":" + Ey + ":" + EK.palSprite;
    let EP = Ej.get(EA);
    if (!EP || EP.src !== Ef) {
      let e2 = Ef.data;
      let e3 = [];
      let e4 = new Map();
      let e5 = [];
      let e6 = [];
      for (let e7 = 0; e7 < e2.length; e7 += 4) {
        if (e2[e7 + 3] === 0) {
          continue;
        }
        let e8 = e2[e7] << 16 | e2[e7 + 1] << 8 | e2[e7 + 2];
        if (!Ep.has(e8)) {
          continue;
        }
        let e9 = e4.get(e8);
        if (e9 === undefined) {
          e9 = e3.length;
          e3.push(e8);
          e4.set(e8, e9);
        }
        e5.push(e7);
        e6.push(e9);
      }
      EP = {
        src: Ef,
        uniq: e3,
        offs: Int32Array.from(e5),
        idx: Uint32Array.from(e6)
      };
      Ej.set(EA, EP);
      if (Ej.size > 32) {
        Ej.delete(Ej.keys().next().value);
      }
    }
    let EI = new Int32Array(EP.uniq.length);
    for (let eS = 0; eS < EI.length; eS++) {
      let eU = Ep.get(EP.uniq[eS]);
      EI[eS] = eU === undefined ? -1 : eU;
    }
    let ER = EP.offs;
    let EF = EP.idx;
    for (let eT = 0; eT < ER.length; eT++) {
      let eH = EI[EF[eT]];
      if (eH < 0) {
        continue;
      }
      let eC = ER[eT];
      Ei[eC] = eH >> 16 & 255;
      Ei[eC + 1] = eH >> 8 & 255;
      Ei[eC + 2] = eH & 255;
    }
    EY.putImageData(Eg, 0, 0);
    Em.__name = H.name;
    if (EL) {
      EL.push(Ew);
    }
    this.palCache.set(Ew, Em);
    return Em;
  }
  paletteTable(T, H) {
    let Ey = T + ":" + H;
    let EK = this.palTables.get(Ey);
    if (EK !== undefined) {
      return EK;
    }
    let Ew = S3[T];
    let Em = Ew && Ew.img && Ew.img[0];
    if (!Em || !Em.width || H >= Em.width) {
      this.palTables.set(Ey, null);
      return null;
    }
    let Ep = NI(Em);
    if (!Ep) {
      this.palTables.set(Ey, null);
      return null;
    }
    let Ed = Ep.w;
    let Ef = Ep.h;
    let EL = Ep.data;
    EK = new Map();
    let EY = (EP, EI) => {
      let ER = (EI * Ed + EP) * 4;
      return EL[ER] << 16 | EL[ER + 1] << 8 | EL[ER + 2];
    };
    let Eg = Math.floor(H);
    let Ei = H - Eg;
    let Ej = Math.min(Eg + 1, Ed - 1);
    let EA = (EP, EI) => {
      if (!Ei) {
        return EP;
      }
      let ER = 0;
      for (let EF of [16, 8, 0]) {
        let e0 = EP >> EF & 255;
        let e1 = EI >> EF & 255;
        ER |= Math.round(e0 + (e1 - e0) * Ei) << EF;
      }
      return ER;
    };
    for (let EP = 0; EP < Ef; EP++) {
      EK.set(EY(0, EP), EA(EY(Eg, EP), EY(Ej, EP)));
    }
    if (Ei) {
      let EI = this.palTabFrac ||= [];
      EI.push(Ey);
      if (EI.length > 48) {
        this.palTables.delete(EI.shift());
      }
    }
    this.palTables.set(Ey, EK);
    return EK;
  }
  draw_sprite_flash(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef) {
    let EL = S3[T];
    if (!EL) {
      return;
    }
    let EY = this.frame(T, H);
    if (!EL.img[EY]) {
      return;
    }
    let Eg = this.ctx;
    Eg.save();
    Eg.globalAlpha = nK(Ef * this.alpha, 0, 1);
    Eg.translate(Ey, EK);
    if (Ep) {
      Eg.rotate(-Ep * nT);
    }
    Eg.scale(Ew, Em);
    Eg.drawImage(this.tinted(EL, EY, Ed || nH.white, true), -EL.ox, -EL.oy);
    Eg.restore();
  }
  tinted(T, H, Ey, EK = false) {
    let Ew = nh(Ey);
    let Em = T.name + ":" + H + ":" + Ew + (EK ? "s" : "");
    let Ep = this.spriteTints ||= new Map();
    let Ed = this.tintBySize ||= new Map();
    if (C3.frame !== this.tintFrame) {
      this.tintFrame = C3.frame;
      this.tintEpoch = (this.tintEpoch | 0) + 1;
    }
    let Ef = this.tintEpoch;
    let EL = Ep.get(Em);
    if (EL) {
      if (EL.__tintEp !== Ef) {
        EL.__tintEp = Ef;
        Ep.delete(Em);
        Ep.set(Em, EL);
        let EP = Ed.get(EL.__tintSk);
        if (EP) {
          EP.delete(Em);
          EP.set(Em, 1);
        }
      }
      return EL;
    }
    let EY = T.img[H];
    let Eg = EY.width;
    let Ei = EY.height;
    let Ej = Eg + "x" + Ei;
    let EA = null;
    if (Ep.size >= NA) {
      let EI = Ed.get(Ej);
      let ER;
      while (EI && EI.size && !Ep.has(ER = EI.keys().next().value)) {
        EI.delete(ER);
        ER = undefined;
      }
      let EF = ER !== undefined ? Ep.get(ER) : null;
      let e0 = Ep.keys().next().value;
      let e1 = Ep.get(e0);
      if (EF && (EF.__tintEp !== Ef || e1.__tintEp === Ef)) {
        EL = EF;
        Ep.delete(ER);
        EI.delete(ER);
        EA = EL.getContext("2d");
        if (EA && typeof EA.reset == "function") {
          EA.reset();
        } else {
          EA = null;
        }
      } else {
        EL = e1;
        Ep.delete(e0);
        let e2 = Ed.get(EL.__tintSk);
        if (e2) {
          e2.delete(e0);
          if (!e2.size) {
            Ed.delete(EL.__tintSk);
          }
        }
        if (EL.width === Eg && EL.height === Ei) {
          EA = EL.getContext("2d");
          if (EA && typeof EA.reset == "function") {
            EA.reset();
          } else {
            EA = null;
          }
        }
      }
    } else {
      EL = document.createElement("canvas");
    }
    if (!EA) {
      EL.width = Eg;
      EL.height = Ei;
      EA = EL.getContext("2d");
    }
    EL.__tintEp = Ef;
    EL.__tintSk = Ej;
    {
      let e3 = Ed.get(Ej);
      if (e3) {
        e3.set(Em, 1);
      } else {
        Ed.set(Ej, new Map([[Em, 1]]));
      }
    }
    EA.drawImage(EY, 0, 0);
    EA.globalCompositeOperation = EK ? "source-in" : "multiply";
    EA.fillStyle = Ew;
    EA.fillRect(0, 0, EL.width, EL.height);
    if (!EK) {
      EA.globalCompositeOperation = "destination-in";
      EA.drawImage(EY, 0, 0);
    }
    EL.__name = T.name;
    Ep.set(Em, EL);
    return EL;
  }
  draw_set_color(T) {
    this.color = nh(T);
  }
  draw_set_colour(T) {
    this.color = nh(T);
  }
  draw_set_alpha(T) {
    this.alpha = T;
  }
  draw_set_font(T) {
    this.font = T;
  }
  draw_set_halign(T) {
    this.halign = T === 1 ? "center" : T === 2 ? "right" : T === 0 ? "left" : T || "left";
  }
  draw_set_valign(T) {
    this.valign = T === 1 ? "middle" : T === 2 ? "bottom" : T === 0 ? "top" : T || "top";
  }
  draw_rectangle(T, H, Ey, EK, Ew) {
    if (this.capture) {
      let EY = [Math.min(T, Ey), Math.min(H, EK), Math.max(T, Ey), Math.max(H, EK)];
      if (this.alpha > 0) {
        this.capRect = EY;
      } else if (this.capRect) {
        (this.capHoles ||= []).push(EY);
      }
      return;
    }
    let Em = this.ctx;
    Em.globalAlpha = nK(this.alpha, 0, 1);
    Em.fillStyle = this.color;
    Em.strokeStyle = this.color;
    let Ep = Math.min(T, Ey);
    let Ed = Math.min(H, EK);
    let Ef = Math.abs(Ey - T) + 1;
    let EL = Math.abs(EK - H) + 1;
    if (Ew) {
      Em.strokeRect(Ep + 0.5, Ed + 0.5, Ef - 1, EL - 1);
    } else {
      Em.fillRect(Ep, Ed, Ef, EL);
    }
    Em.globalAlpha = 1;
  }
  draw_line(T, H, Ey, EK) {
    this.draw_line_width(T, H, Ey, EK, 1);
  }
  draw_line_width_color(T, H, Ey, EK, Ew, Em) {
    let Ep = this.color;
    this.color = Em === undefined ? Ep : Em;
    this.draw_line_width(T, H, Ey, EK, Ew);
    this.color = Ep;
  }
  draw_line_width_colour(T, H, Ey, EK, Ew, Em, Ep) {
    this.draw_line_width_color(T, H, Ey, EK, Ew, Em, Ep);
  }
  draw_line_width(T, H, Ey, EK, Ew) {
    let Em = this.ctx;
    Em.globalAlpha = nK(this.alpha, 0, 1);
    Em.strokeStyle = this.color;
    Em.lineWidth = Ew;
    Em.beginPath();
    Em.moveTo(T, H);
    Em.lineTo(Ey, EK);
    Em.stroke();
    Em.lineWidth = 1;
    Em.globalAlpha = 1;
  }
  draw_circle(T, H, Ey, EK) {
    if (!(Ey > 0) || !Number.isFinite(Ey)) {
      return;
    }
    let Ew = this.ctx;
    Ew.globalAlpha = nK(this.alpha, 0, 1);
    Ew.fillStyle = Ew.strokeStyle = this.color;
    Ew.beginPath();
    Ew.arc(T, H, Ey, 0, Math.PI * 2);
    if (EK) {
      Ew.stroke();
    } else {
      Ew.fill();
    }
    Ew.globalAlpha = 1;
  }
  glyph(T, H) {
    let Ey = this.fonts[T];
    if (Ey) {
      return Ey.glyphs[H.charCodeAt(0)] || Ey.glyphs[63];
    } else {
      return null;
    }
  }
  string_width(T, H = this.font) {
    T = String(T);
    let Ey;
    if (Cd.textKeep) {
      Ey = this.textMem("_sws", "_swK", "_swC");
    } else {
      if (this._swCh !== nd || !this._sw) {
        this._sw = new Map();
        this._swCh = nd;
      }
      Ey = this._sw;
    }
    let EK = Ey.get(H);
    if (!EK) {
      Ey.set(H, EK = new Map());
    }
    let Ew = EK.get(T);
    if (Ew !== undefined) {
      return Ew;
    }
    if (EK.size > 3000) {
      EK.clear();
    }
    let Em = this.measure_string(T, H);
    EK.set(T, Em);
    return Em;
  }
  measure_string(T, H) {
    if (T.indexOf("\n") >= 0) {
      let EK = 0;
      for (let Ew of T.split("\n")) {
        let Em = this.string_width(Ew, H);
        if (Em > EK) {
          EK = Em;
        }
      }
      return EK;
    }
    let Ey = 0;
    for (let Ep of T) {
      let Ed = this.glyph(H, Ep);
      if (Ed) {
        Ey += Ed[4];
      }
    }
    return Ey;
  }
  draw_char(T, H, Ey, EK, Ew, Em = 1, Ep = 1, Ed = 1) {
    let Ef = this.fonts[T];
    if (!Ef) {
      return 0;
    }
    let EL = this.glyph(T, H);
    if (!EL) {
      return 0;
    }
    let EY = EL[0];
    let Eg = EL[1];
    let Ei = EL[2];
    let Ej = EL[3];
    let EA = EL[4];
    let EP = EL[5];
    if (Ei > 0 && Ej > 0 && Ef.img && Ef.img.width > 0 && Ef.img.height > 0) {
      let EI = this.ctx;
      EI.globalAlpha = nK(Ed * this.alpha, 0, 1);
      EI.drawImage(this.fontTinted(T, Ew), EY, Eg, Ei, Ej, Math.round(Ey + EP * Em), Math.round(EK), Ei * Em, Ej * Ep);
      EI.globalAlpha = 1;
    }
    return EA;
  }
  fontTinted(T, H) {
    if (this._ftCh !== nd || this._ftTC !== this.tintCache || !this._ftKeys) {
      this._ftKeys = new Map();
      this._ftCh = nd;
      this._ftTC = this.tintCache;
    }
    let Ey = this._ftKeys.get(T);
    if (Ey === undefined) {
      this._ftKeys.set(T, Ey = new Map());
    }
    let EK = Ey.get(H);
    if (EK === undefined) {
      if (Ey.size >= 4096) {
        Ey.clear();
      }
      Ey.set(H, EK = "font:" + nd + ":" + T + ":" + H);
    }
    let Ew = this.tintCache.get(EK);
    if (Ew) {
      return Ew;
    }
    let Em = this.fonts[T].img;
    Ew = document.createElement("canvas");
    Ew.width = Em.width;
    Ew.height = Math.max(Em.height, Math.ceil(16600 / Math.max(1, Em.width)));
    let Ep = Ew.getContext("2d");
    Ep.drawImage(Em, 0, 0);
    Ep.globalCompositeOperation = "source-in";
    Ep.fillStyle = H;
    Ep.fillRect(0, 0, Ew.width, Ew.height);
    Ew.__name = "font:" + T;
    this.tintCache.set(EK, Ew);
    return Ew;
  }
  lineHeight(T = this.font) {
    let H = this.fonts[T];
    if (!H) {
      return 0;
    }
    if (H._lh === undefined) {
      let Ey = 0;
      for (let EK in H.glyphs) {
        let Ew = H.glyphs[EK];
        if (Ew[3] > Ey) {
          Ey = Ew[3];
        }
      }
      H._lh = Ey;
    }
    return H._lh;
  }
  string_height(T, H = this.font) {
    return String(T).split("\n").length * this.lineHeight(H);
  }
  draw_text(T, H, Ey, EK = this.color) {
    Ey = String(Ey);
    if (Ey.indexOf("\n") >= 0) {
      let Ep = this.lineHeight();
      let Ed = Ey.split("\n");
      let Ef = H - (this.valign === "middle" ? (Ed.length - 1) * Ep / 2 : this.valign === "bottom" ? (Ed.length - 1) * Ep : 0);
      for (let EL of Ed) {
        this.draw_text(T, Ef, EL, EK);
        Ef += Ep;
      }
      return;
    }
    let Ew = T;
    if (this.halign === "right") {
      Ew = T - this.string_width(Ey);
    } else if (this.halign === "center") {
      Ew = T - this.string_width(Ey) / 2;
    }
    let Em = H;
    if (this.valign === "middle") {
      Em = H - this.lineHeight() / 2;
    } else if (this.valign === "bottom") {
      Em = H - this.lineHeight();
    }
    if (!this.textRun(Ey, Ew, Em, EK)) {
      for (let EY of Ey) {
        Ew += this.draw_char(this.font, EY, Ew, Em, EK);
      }
    }
  }
  textRun(H, Ey, EK, Ew, Em = 1, Ep = 1) {
    if (!Cd.textRun || this.headless || this.draw_char !== O0.prototype.draw_char || H.length < 2) {
      return false;
    }
    let Ed = this.ctx;
    let Ef = this.fonts[this.font];
    if (!Ef || !Ef.img || !(Ef.img.width > 0) || nK(this.alpha, 0, 1) !== 1 || Ed.globalCompositeOperation !== "source-over") {
      return false;
    }
    let EL = Cd.tfCache && Ed.__tf ? Ed.__tf() : typeof Ed.getTransform == "function" ? Ed.getTransform() : null;
    if (!EL || EL.b !== 0 || EL.c !== 0) {
      return false;
    }
    let EY;
    if (Cd.textKeep) {
      EY = this.textMem("textCaches", "_tcK", "_tcC");
    } else {
      EY = this.textCache ||= new Map();
      if (this._tcCh !== nd) {
        EY.clear();
        this._tcCh = nd;
      }
    }
    let Eg = EY.get(this.font);
    if (!Eg) {
      EY.set(this.font, Eg = new Map());
    }
    let Ei = Eg.get(Ew);
    if (!Ei) {
      Eg.set(Ew, Ei = new Map());
    }
    let Ej = Ei.get(H);
    if (Ej === undefined) {
      if (Cd.textSeen) {
        let e0 = Ei.seen ||= new Set();
        if (!e0.has(H)) {
          if (e0.size >= 256) {
            e0.clear();
          }
          e0.add(H);
          return false;
        }
        e0.delete(H);
      }
      Ej = null;
      let EA = 0;
      let EP = Infinity;
      let EI = -Infinity;
      let ER = 0;
      let EF = [];
      for (let e1 of H) {
        let e2 = this.glyph(this.font, e1);
        if (!e2) {
          Ej = false;
          break;
        }
        let [,, e3, e4, e5, e6] = e2;
        if (!Number.isInteger(e5) || !Number.isInteger(e6)) {
          Ej = false;
          break;
        }
        if (e3 > 0 && e4 > 0) {
          EF.push([e2, EA + e6]);
          if (EA + e6 < EP) {
            EP = EA + e6;
          }
          if (EA + e6 + e3 > EI) {
            EI = EA + e6 + e3;
          }
          if (e4 > ER) {
            ER = e4;
          }
        }
        EA += e5;
      }
      if (Ej !== false && EF.length && EI > EP) {
        let e7 = this.textAtlas ||= new Tf(() => {
          if (this.textCache) {
            this.textCache.clear();
          }
          if (this.textCaches) {
            for (let eH of this.textCaches.values()) {
              eH.clear();
            }
          }
          if (this.fontRuns) {
            this.fontRuns.clear();
          }
        });
        let e8 = EI - EP;
        let e9 = e7.slot(e8, ER);
        let eS;
        if (e9) {
          eS = e9.cv;
        } else {
          eS = document.createElement("canvas");
          eS.width = e8;
          eS.height = ER;
          e9 = {
            cv: eS,
            x: 0,
            y: 0
          };
        }
        let eU = eS.getContext("2d");
        let eT = this.fontTinted(this.font, Ew);
        for (let [eH, eC] of EF) {
          eU.drawImage(eT, eH[0], eH[1], eH[2], eH[3], e9.x + eC - EP, e9.y, eH[2], eH[3]);
        }
        eS.__name = "text:" + this.font;
        Ej = {
          cv: eS,
          x0: EP,
          sx: e9.x,
          sy: e9.y,
          w: e8,
          h: ER
        };
      } else if (Ej !== false) {
        Ej = {
          cv: null,
          x0: 0
        };
      }
      if (Ei.size >= 800) {
        Ei.clear();
      }
      Ei.set(H, Ej);
    }
    if (Ej) {
      if (Ej.cv) {
        Ed.globalAlpha = 1;
        Ed.drawImage(Ej.cv, Ej.sx, Ej.sy, Ej.w, Ej.h, Math.round(Ey) + Ej.x0 * Em, Math.round(EK), Ej.w * Em, Ej.h * Ep);
      }
      return true;
    } else {
      return false;
    }
  }
  draw_text_colour(H, Ey, EK, Ew, Em, Ep, Ed, Ef) {
    let EL = this.alpha;
    this.alpha = Ef === undefined ? EL : Ef;
    try {
      let EY = EF => nO(EF, EF, 0);
      let Eg = EY(Ew === undefined ? this.color : Ew);
      let Ei = Em === undefined ? Eg : EY(Em);
      let Ej = Ed === undefined ? Eg : EY(Ed);
      let EA = Ep === undefined ? Ei : EY(Ep);
      if (Eg === Ei && Eg === Ej && Eg === EA) {
        this.draw_text(H, Ey, EK, Eg);
        return;
      }
      EK = String(EK);
      let EP = EK.split("\n");
      let EI = this.lineHeight();
      let ER = Ey - (this.valign === "middle" ? EP.length * EI / 2 : this.valign === "bottom" ? EP.length * EI : 0);
      for (let EF of EP) {
        let e0 = Math.max(1, this.string_width(EF));
        let e1 = H;
        if (this.halign === "right") {
          e1 = H - e0;
        } else if (this.halign === "center") {
          e1 = H - e0 / 2;
        }
        let e2 = e1;
        for (let e3 of EF) {
          let e4 = nK((e1 - e2) / e0, 0, 1);
          e1 += this.draw_char_grad(this.font, e3, e1, ER, nO(Eg, Ei, e4), nO(Ej, EA, e4));
        }
        ER += EI;
      }
    } finally {
      this.alpha = EL;
    }
  }
  draw_text_color(T, H, Ey, EK, Ew, Em, Ep, Ed) {
    this.draw_text_colour(T, H, Ey, EK, Ew, Em, Ep, Ed);
  }
  draw_char_grad(T, H, Ey, EK, Ew, Em, Ep = 1, Ed = 1, Ef = 1) {
    if (Ew === Em || this.headless) {
      return this.draw_char(T, H, Ey, EK, Ew, Ep, Ed, Ef);
    }
    let EL = this.fonts[T];
    if (!EL) {
      return 0;
    }
    let EY = this.glyph(T, H);
    if (!EY) {
      return 0;
    }
    let [,, Eg, Ei, Ej, EA] = EY;
    if (Eg > 0 && Ei > 0 && EL.img && EL.img.width > 0 && EL.img.height > 0) {
      let EP = this.glyphGrad(T, H, EY, Ew, Em);
      if (EP) {
        let EI = this.ctx;
        EI.globalAlpha = nK(Ef * this.alpha, 0, 1);
        EI.drawImage(EP, 0, 0, Eg, Ei, Math.round(Ey + EA * Ep), Math.round(EK), Eg * Ep, Ei * Ed);
        EI.globalAlpha = 1;
      }
    }
    return Ej;
  }
  glyphGrad(T, H, Ey, EK, Ew) {
    let Em = this.gradCache ||= new Map();
    let Ep = nd + ":" + T + ":" + Ey[0] + "," + Ey[1] + ":" + EK + ":" + Ew;
    let Ed = Em.get(Ep);
    if (Ed) {
      return Ed;
    }
    if (Em.size >= 1024) {
      Em.clear();
    }
    let [Ef, EL, EY, Eg] = Ey;
    Ed = document.createElement("canvas");
    Ed.width = EY;
    Ed.height = Eg;
    let Ei = Ed.getContext("2d");
    if (!Ei) {
      return null;
    }
    Ei.imageSmoothingEnabled = false;
    Ei.drawImage(this.fonts[T].img, Ef, EL, EY, Eg, 0, 0, EY, Eg);
    let Ej = typeof Ei.createLinearGradient == "function" ? Ei.createLinearGradient(0, 0, 0, Eg) : null;
    if (Ej) {
      Ej.addColorStop(0, nh(EK));
      Ej.addColorStop(1, nh(Ew));
    }
    Ei.globalCompositeOperation = "source-in";
    Ei.fillStyle = Ej || nh(EK);
    Ei.fillRect(0, 0, EY, Eg);
    Ed.__name = "font:" + T;
    Em.set(Ep, Ed);
    return Ed;
  }
  textExtLines(T, H) {
    let Ey = [];
    for (let EK of String(T).split("\n")) {
      if (!(H > 0)) {
        Ey.push(EK);
        continue;
      }
      let Ew = "";
      for (let Em of EK.split(" ")) {
        let Ep = Ew === "" ? Em : Ew + " " + Em;
        if (Ew !== "" && this.string_width(Ep) > H) {
          Ey.push(Ew);
          Ew = Em;
        } else {
          Ew = Ep;
        }
      }
      Ey.push(Ew);
    }
    return Ey;
  }
  draw_text_ext(T, H, Ey, EK, Ew) {
    let Em = this.textExtLines(Ey, Ew);
    let Ep = this.lineHeight();
    let Ed = EK == null || EK < 0 ? Ep : EK;
    let Ef = Em.length * Ed;
    let EL = this.valign;
    let EY = H - (EL === "middle" ? Ef / 2 : EL === "bottom" ? Ef : 0);
    this.valign = "top";
    try {
      for (let Eg of Em) {
        this.draw_text(T, EY, Eg);
        EY += Ed;
      }
    } finally {
      this.valign = EL;
    }
  }
  draw_text_ext_transformed(T, H, Ey, EK, Ew, Em = 1, Ep = 1, Ed = 0) {
    if (Em == null) {
      Em = 1;
    }
    if (Ep == null) {
      Ep = 1;
    }
    let Ef = this.textExtLines(Ey, Ew);
    let EL = this.lineHeight();
    let EY = (EK == null || EK < 0 ? EL : EK) * Ep;
    let Eg = Ef.length * EY;
    let Ei = this.ctx;
    let Ej = Ed && Number.isFinite(Ed);
    if (Ej) {
      Ei.save();
      Ei.translate(T, H);
      Ei.rotate(-Ed * nT);
      Ei.translate(-T, -H);
    }
    let EA = this.valign;
    let EP = H - (EA === "middle" ? Eg / 2 : EA === "bottom" ? Eg : 0);
    this.valign = "top";
    try {
      for (let EI of Ef) {
        this.draw_text_transformed(T, EP, EI, Em, Ep, 0);
        EP += EY;
      }
    } finally {
      this.valign = EA;
      if (Ej) {
        Ei.restore();
      }
    }
  }
  draw_spritefont(H, Ey, EK, Ew, Em, Ep = 1, Ed = 1, Ef = this.color, EL = 1, EY = 0, Eg = false, Ei = 0) {
    let Ej = S3[H];
    if (!Ej) {
      return 0;
    }
    EK = String(EK);
    let EA = Ew;
    let EP = Ei && Number.isFinite(Ei);
    let EI = this.ctx;
    if (EP) {
      EI.save();
      EI.translate(Ew, Em);
      EI.rotate(-Ei * nT);
      EI.translate(-Ew, -Em);
    }
    if (this.halign === "right") {
      EA = Ew - this.spritefont_width(H, Ey, EK, EY, Eg) * Ep;
    } else if (this.halign === "center") {
      EA = Ew - this.spritefont_width(H, Ey, EK, EY, Eg) * Ep / 2;
    }
    let ER = Cd.fontDirect && Ep > 0 && Ed > 0 && EL * this.alpha >= 1;
    if (ER && !EP && Cd.fontRun) {
      let EF = this.fontRun(Ej, Ey, EK, EA, Em, Ep, Ed, Ef, EY, Eg);
      if (EF !== false) {
        return EA + EF - Ew;
      }
    }
    for (let e0 of EK) {
      let e1 = Ey.indexOf(e0);
      if (e1 < 0) {
        EA += (Ej.w + EY) * Ep;
        continue;
      }
      let e2 = Ej.bb;
      let e3 = Eg ? e2[2] - e2[0] + 1 : Ej.w;
      let e4 = Eg ? e2[0] : 0;
      let e5 = this.ctx;
      if (ER && Number.isInteger(EA) && Number.isInteger(Em) && Number.isInteger(e3 * Ep) && Number.isInteger(Ej.h * Ed) && Cp(e5)) {
        let e6 = e5.globalAlpha;
        e5.globalAlpha = 1;
        e5.drawImage(this.tinted(Ej, e1, Ef), e4, 0, e3, Ej.h, EA, Em, e3 * Ep, Ej.h * Ed);
        e5.globalAlpha = e6;
        EA += (e3 + EY) * Ep;
        continue;
      }
      e5.save();
      e5.globalAlpha = nK(EL * this.alpha, 0, 1);
      e5.translate(EA, Em);
      e5.scale(Ep, Ed);
      e5.drawImage(this.tinted(Ej, e1, Ef), e4, 0, e3, Ej.h, 0, 0, e3, Ej.h);
      e5.restore();
      EA += (e3 + EY) * Ep;
    }
    if (EP) {
      EI.restore();
    }
    return EA - Ew;
  }
  fontRun(H, Ey, EK, Ew, Em, Ep, Ed, Ef, EL, EY) {
    if (this.headless || EK.length < 2 || !(EL >= 0) || !Number.isInteger(EL) || !Number.isInteger(Ep) || !Number.isInteger(Ed) || !Number.isInteger(Ew) || !Number.isInteger(Em) || !Cp(this.ctx)) {
      return false;
    }
    let Eg = EY ? H.bb[2] - H.bb[0] + 1 : H.w;
    let Ei = EY ? H.bb[0] : 0;
    let Ej = Eg + EL;
    if (!Number.isInteger(Eg * Ep) || !Number.isInteger(H.h * Ed)) {
      return false;
    }
    let EA = this.fontRuns ||= new Map();
    let EP = H.name + "|" + Ey + "|" + Ef + "|" + EL + (EY ? "p" : "");
    let EI = EA.get(EP);
    if (!EI) {
      if (EA.size >= 64) {
        EA.clear();
      }
      EA.set(EP, EI = new Map());
    }
    let ER = EI.get(EK);
    if (ER === undefined) {
      let EF = EI.seen ||= new Set();
      if (!EF.has(EK)) {
        if (EF.size >= 256) {
          EF.clear();
        }
        EF.add(EK);
        return false;
      }
      EF.delete(EK);
      let e0 = [];
      let e1 = 0;
      let e2 = 0;
      for (let e6 of EK) {
        let e7 = Ey.indexOf(e6);
        if (e7 >= 0) {
          let e8 = H.img[e7];
          if (!e8 || e8.__pend) {
            return false;
          }
          e0.push([e7, e1]);
          e2 = e1 + Eg;
          e1 += Ej;
        } else {
          e1 += H.w + EL;
        }
      }
      let e3 = H.h;
      let e4 = this.textAtlas ||= new Tf(() => {
        if (this.textCache) {
          this.textCache.clear();
        }
        if (this.textCaches) {
          for (let e9 of this.textCaches.values()) {
            e9.clear();
          }
        }
        if (this.fontRuns) {
          this.fontRuns.clear();
        }
      });
      let e5 = {
        cv: null,
        adv: e1
      };
      if (e2 > 0) {
        let e9 = e4.slot(e2, e3);
        if (!e9) {
          return false;
        }
        let eS = e9.cv.getContext("2d");
        for (let [eU, eT] of e0) {
          eS.drawImage(this.tinted(H, eU, Ef), Ei, 0, Eg, e3, e9.x + eT, e9.y, Eg, e3);
        }
        e5 = {
          cv: e9.cv,
          sx: e9.x,
          sy: e9.y,
          w: e2,
          h: e3,
          adv: e1
        };
      }
      if (EI.size >= 400) {
        EI.clear();
      }
      EI.set(EK, ER = e5);
    }
    if (ER.cv) {
      let eH = this.ctx;
      let eC = eH.globalAlpha;
      eH.globalAlpha = 1;
      eH.drawImage(ER.cv, ER.sx, ER.sy, ER.w, ER.h, Ew, Em, ER.w * Ep, ER.h * Ed);
      eH.globalAlpha = eC;
    }
    return ER.adv * Ep;
  }
  spritefont_width(T, H, Ey, EK = 0, Ew = false) {
    let Em = S3[T];
    if (!Em) {
      return 0;
    }
    let Ep = Ew ? Em.bb[2] - Em.bb[0] + 1 : Em.w;
    return String(Ey).length * (Ep + EK);
  }
  draw_text_transformed(T, H, Ey, EK, Ew, Em = 0) {
    Ey = String(Ey);
    if (Ey.indexOf("\n") >= 0) {
      let Ei = this.lineHeight() * Ew;
      let Ej = Ey.split("\n");
      let EA = H - (this.valign === "middle" ? (Ej.length - 1) * Ei / 2 : this.valign === "bottom" ? (Ej.length - 1) * Ei : 0);
      for (let EP of Ej) {
        this.draw_text_transformed(T, EA, EP, EK, Ew, Em);
        EA += Ei;
      }
      return;
    }
    let Ep = this.color;
    let Ed = this.ctx;
    let Ef = Em && Number.isFinite(Em);
    if (Ef) {
      Ed.save();
      Ed.translate(T, H);
      Ed.rotate(-Em * nT);
      Ed.translate(-T, -H);
    }
    let EL = T;
    let EY = this.string_width(Ey) * EK;
    if (this.halign === "right") {
      EL = T - EY;
    } else if (this.halign === "center") {
      EL = T - EY / 2;
    }
    let Eg = H;
    if (this.valign === "middle") {
      Eg = H - this.lineHeight() * Ew / 2;
    } else if (this.valign === "bottom") {
      Eg = H - this.lineHeight() * Ew;
    }
    if (!!Ef || !Cd.textRunScaled || !Number.isInteger(EK) || !Number.isInteger(Ew) || !(EK > 0) || !(Ew > 0) || !this.textRun(Ey, EL, Eg, Ep, EK, Ew)) {
      for (let EI of Ey) {
        EL += this.draw_char(this.font, EI, EL, Eg, Ep, EK, Ew) * EK;
      }
      if (Ef) {
        Ed.restore();
      }
    }
  }
};
a(h3, "Gfx");
var h4 = h3;
function h5(T, H, Ey) {
  let EK = Ey || C3.record;
  if (EK) {
    for (let Ew of EK) {
      if (Ew.type === "seg") {
        CI(T.ctx, Ew);
        continue;
      }
      let Em = Ew.inst;
      let Ep = Ew.x;
      let Ed = Ew.y;
      if (H < 1 && Ew.px !== undefined && !Em.destroyed && Math.abs(Ew.x - Ew.px) < 200 && Math.abs(Ew.y - Ew.py) < 200) {
        Ep = Ew.px + (Ew.x - Ew.px) * H;
        Ed = Ew.py + (Ew.y - Ew.py) * H;
      }
      T.draw_sprite_ext(Ew.spr, Ew.idx, Ep, Ed, Ew.xs, Ew.ys, Ew.ang, Ew.blend, Ew.alpha);
    }
  }
}
a(h5, "presentFrame");
function h6(T, H) {
  if (typeof HTMLMediaElement === "undefined" || !(T instanceof HTMLMediaElement)) {
    try {
      T.playbackRate = H;
    } catch {}
    return;
  }
  try {
    T.preservesPitch = false;
    T.webkitPreservesPitch = false;
    T.playbackRate = nK(H, 0.0625, 16);
  } catch {}
}
a(h6, "elRate");
function h7(T, H) {
  if (T && !Uh) {
    if (typeof T == "string") {
      for (let Ey of hU(T)) {
        h6(Ey, H);
      }
      return;
    }
    h6(T, H);
  }
}
a(h7, "snd_pitch");
function h8(T) {
  if (Uh) {
    return;
  }
  let H = hS(T);
  if (H && H.pause) {
    H.pause();
  }
}
a(h8, "snd_pause");
function h9(T) {
  if (Uh) {
    return;
  }
  let H = hS(T);
  if (H && H.play) {
    let Ey = H.play();
    if (Ey && Ey.catch) {
      Ey.catch(() => {});
    }
  }
}
a(h9, "snd_resume");
var hn = [];
var hS = a(T => {
  if (T && typeof T == "object") {
    return T;
  }
  let H = hV(T);
  return H && (H3.get(H) || (H === hs ? HT : null) || hU(T).pop()) || null;
}, "soundHandle");
function hU(T) {
  if (typeof T != "string" || !UH[T]) {
    return [];
  }
  let H = [];
  let Ey = UD(UH[T]);
  let EK = Ey && Ux.live.get(Ey);
  if (EK) {
    for (let Em of EK) {
      if (!Em.paused && !Em.ended) {
        H.push(Em);
      }
    }
  }
  let Ew = UR[T];
  if (Ew) {
    for (let Ep of Ew) {
      if (!Ep.paused && !Ep.ended) {
        H.push(Ep);
      }
    }
  }
  return H;
}
a(hU, "sfxVoicesOf");
function hT(T, H, Ey = 0) {
  if (Uh) {
    return;
  }
  let EK = hS(T);
  if (!EK) {
    return;
  }
  let Ew = nK(H, 0, 1);
  for (let Ep = hn.length - 1; Ep >= 0; Ep--) {
    if (hn[Ep].t === EK) {
      hn.splice(Ep, 1);
    }
  }
  if (!(Ey > 0)) {
    try {
      EK.volume = Ew;
    } catch {}
    return;
  }
  let Em = Ew;
  try {
    Em = EK.volume;
  } catch {}
  hn.push({
    t: EK,
    from: Em,
    to: Ew,
    n: 0,
    frames: Math.max(1, Math.round(Ey / 1000 * 30))
  });
}
a(hT, "audio_sound_gain");
function hH() {
  if (!Uh) {
    for (let T = hn.length - 1; T >= 0; T--) {
      let H = hn[T];
      H.n++;
      let Ey = Math.min(1, H.n / H.frames);
      try {
        H.t.volume = nK(H.from + (H.to - H.from) * Ey, 0, 1);
      } catch {}
      if (Ey >= 1) {
        hn.splice(T, 1);
      }
    }
  }
}
a(hH, "gainRampTick");
function hC() {
  if (!Uh) {
    HM();
  }
}
a(hC, "snd_free_all");
function hN() {
  hO(0);
}
a(hN, "audio_stop_all");
var hh = new Set();
function hE(T) {
  if (T && typeof T.pause == "function" && !Uh) {
    hh.add(T);
  }
  return T;
}
a(hE, "adoptMedia");
function hO(T = 0) {
  if (Uh) {
    return;
  }
  if (T0.stop) {
    T0.stop(null);
  }
  let H = performance.now();
  let Ey = EK => T > 0 && !EK.loop && H - (EK._wall ?? EK.__wall ?? -1000000000) < T;
  for (let EK in UR) {
    for (let Ew of UR[EK]) {
      if (!Ey(Ew)) {
        try {
          Ew.pause();
        } catch {}
      }
    }
  }
  for (let Em of [...Ux.live.values()]) {
    for (let Ep of [...Em]) {
      if (Ep._mus || !Ey(Ep)) {
        Ep.pause();
      }
    }
  }
  for (let Ed of hh) {
    try {
      Ed.pause();
    } catch {}
  }
  hh.clear();
  HM();
}
a(hO, "stopAllSounds");
function hZ(T, H, Ey = 0) {
  if (Uh) {
    return;
  }
  let EK = hS(T);
  if (!EK) {
    return;
  }
  let Ew = Number(H);
  if (!Number.isFinite(Ew)) {
    return;
  }
  let Em = EK instanceof TY;
  if (Em) {
    EK.level = Ew;
  }
  hT(EK, Ew * (Em ? U9.musicvol ?? 0.6 : U9.sfxvol ?? 1), (Number(Ey) || 0) * 1000 / 30);
}
a(hZ, "snd_volume");
function hb(T) {
  return !!T && !T.paused && !T.ended;
}
a(hb, "snd_is_playing");
var hV = a(T => typeof T == "string" ? T.replace(/\.(ogg|wav|mp3)$/i, "") : null, "musName");
var hs = null;
function hk(T, H = 1, Ey = true) {
  let EK = hV(T);
  if (!EK) {
    return T;
  }
  if (Uh) {
    return UV();
  }
  UL(nd);
  let Ew = HB(EK, H, Ey);
  if (!hs) {
    hs = EK;
    HT = Ew;
    Hl = 0;
  }
  return Ew;
}
a(hk, "mus_start");
function hx(T) {
  return hk(T, 1, true);
}
a(hx, "mus_loop");
function hq(T) {
  return hk(T, 1, false);
}
a(hq, "mus_play");
function hv(T, H, Ey = 1, EK = -1) {
  let Ew = hk(T, Ey === -1 ? 1 : Ey, !!H);
  if (Ew && typeof Ew == "object" && !Uh) {
    hZ(Ew, Ey === -1 ? 1 : Ey);
    if (Number(EK) > 0) {
      h7(Ew, Number(EK));
    }
  }
  return Ew;
}
a(hv, "mus_play_ext");
function hu(T, H = 1) {
  return hk(T, H, true);
}
a(hu, "mus_loop_ext");
function hc(T, H, Ey = 0) {
  if (Uh) {
    return;
  }
  let EK = hS(T);
  if (EK && EK instanceof TY) {
    EK.level = H;
  }
  hT(T, H * (U9.musicvol ?? 0.6), (Number(Ey) || 0) * 1000 / 30);
}
a(hc, "mus_volume");
function hz(T) {
  return T;
}
a(hz, "snd_init");
function hB(T, H) {
  if (CR) {
    CR.fog = T ? H || nH.white : null;
  }
}
a(hB, "d3d_set_fog");
var hG = hB;
var hM = hB;
function hJ(T, H, Ey, EK) {
  let Ew = CR;
  if (Ew) {
    if (!T && !H && !Ey && EK) {
      Ew.capture = true;
      Ew.capRect = null;
      Ew.capHoles = null;
    } else {
      Ew.capture = false;
    }
  }
}
a(hJ, "gpu_set_colorwriteenable");
function hQ(T) {
  let H = CR;
  if (!!H && !!H.ctx) {
    if (T) {
      let Ey = H.capRect;
      if (!Ey) {
        return;
      }
      let EK = H.ctx;
      let Ew = typeof EK.getTransform == "function" ? EK.getTransform() : null;
      EK.save();
      Cg(EK, Ey, H.capHoles);
      (H.clips ||= []).push({
        ctx: EK,
        R: Ey,
        H: H.capHoles ? H.capHoles.slice() : null,
        T: Ew
      });
      H.clipDepth++;
    } else if (H.clipDepth > 0) {
      H.clipDepth--;
      let Em = H.clips && H.clips.pop();
      try {
        (Em && Em.ctx || H.ctx).restore();
      } catch {}
    }
  }
}
a(hQ, "gpu_set_alphatestenable");
function hD() {}
a(hD, "gpu_set_blendenable");
function hW() {}
a(hW, "gpu_set_alphatestref");
function hX() {}
a(hX, "gpu_set_blendmode_ext");
function hy(H, Ey, EK, Ew, Em, Ep) {
  let Ed = Ey.spr;
  let Ef = Ey.mask;
  let EL = Ed.bb;
  let EY = Ed.w;
  let Eg = H.image_angle * nT;
  let Ei = Math.cos(Eg);
  let Ej = Math.sin(Eg);
  let EA = H.image_xscale;
  let EP = H.image_yscale;
  let EI = EL[0];
  let ER = EL[2];
  let EF = EL[1];
  let e0 = EL[3];
  if (EA && EP && Number.isFinite(EA) && Number.isFinite(EP)) {
    let e2 = Infinity;
    let e3 = -Infinity;
    let e4 = Infinity;
    let e5 = -Infinity;
    for (let e6 of [EK, Em + 1]) {
      for (let e7 of [Ew, Ep + 1]) {
        let e8 = e6 - H.x;
        let e9 = e7 - H.y;
        let eS = (e8 * Ei - e9 * Ej) / EA + Ed.ox - 0.5;
        let eU = (e8 * Ej + e9 * Ei) / EP + Ed.oy - 0.5;
        if (eS < e2) {
          e2 = eS;
        }
        if (eS > e3) {
          e3 = eS;
        }
        if (eU < e4) {
          e4 = eU;
        }
        if (eU > e5) {
          e5 = eU;
        }
      }
    }
    if (Number.isFinite(e2) && Number.isFinite(e3) && Number.isFinite(e4) && Number.isFinite(e5)) {
      EI = Math.max(EI, Math.floor(e2) - 2);
      ER = Math.min(ER, Math.ceil(e3) + 2);
      EF = Math.max(EF, Math.floor(e4) - 2);
      e0 = Math.min(e0, Math.ceil(e5) + 2);
    }
  }
  let e1 = CX(Ed);
  for (let eT = EF; eT <= e0; eT++) {
    for (let eH = EI; eH <= ER; eH++) {
      if (!e1 && !Ef[eT * EY + eH]) {
        continue;
      }
      let eC = (eH + 0.5 - Ed.ox) * EA;
      let eN = (eT + 0.5 - Ed.oy) * EP;
      let eh = H.x + eC * Ei + eN * Ej;
      let eE = H.y - eC * Ej + eN * Ei;
      if (eh >= EK && eh <= Em + 1 && eE >= Ew && eE <= Ep + 1) {
        return true;
      }
    }
  }
  return false;
}
a(hy, "maskHitsRect");
function hK(T, H, Ey, EK) {
  let Ew = H.spr;
  let Em = T.image_angle * nT;
  let Ep = Math.cos(Em);
  let Ed = Math.sin(Em);
  let Ef = Ey - T.x;
  let EL = EK - T.y;
  let EY = Ef * Ep - EL * Ed;
  let Eg = Ef * Ed + EL * Ep;
  let Ei = Math.floor(EY / T.image_xscale + Ew.ox);
  let Ej = Math.floor(Eg / T.image_yscale + Ew.oy);
  if (CX(Ew)) {
    let EA = Ew.bb;
    return Ei >= EA[0] && Ei <= EA[2] && Ej >= EA[1] && Ej <= EA[3];
  }
  if (Ei < 0 || Ej < 0 || Ei >= Ew.w || Ej >= Ew.h) {
    return false;
  } else {
    return !!H.mask[Ej * Ew.w + Ei];
  }
}
a(hK, "maskHitsPoint");
function* hw(T, H) {
  if (typeof T == "number" && CT !== null) {
    let Ew = Ch(T);
    if (!Ew) {
      return;
    }
    T = Ew.kindName || Ew.name;
  }
  let Ey = Hd(T);
  let EK = C3.self;
  for (let Em of typeof Ey == "string" ? C1(Ey).slice() : C3.list) {
    if (Em.destroyed) {
      continue;
    }
    if (Ey != null && typeof Ey == "object") {
      if (Em !== Ey) {
        continue;
      }
    } else if (Ey != null && !Em.is(Ey)) {
      continue;
    }
    if (H && Em === EK) {
      continue;
    }
    let Ep = Cv(Em);
    if (Ep) {
      yield [Em, Ep];
    }
  }
}
a(hw, "collisionCandidates");
var hm = {
  on: false,
  shapes: []
};
var hp = a(T => hm.on && (T === "obj_heart" || typeof T == "function" && (T.kindName || T.name) === "obj_heart"), "soulQuery");
function hd(T, H, Ey, EK, Ew, Em, Ep) {
  if (hp(Ew)) {
    hm.shapes.push({
      self: C3.self,
      rect: [Math.min(T, Ey), Math.min(H, EK), Math.max(T, Ey), Math.max(H, EK)]
    });
  }
  let Ed = Math.min(T, Ey);
  let Ef = Math.min(H, EK);
  let EL = Math.max(T, Ey);
  let EY = Math.max(H, EK);
  if (!Number.isFinite(Ed) || !Number.isFinite(Ef) || !Number.isFinite(EL) || !Number.isFinite(EY)) {
    return null;
  }
  for (let [Eg, Ei] of hw(Ew, Ep)) {
    let Ej = Cu(Eg, Ei.spr);
    if (!(Ej[0] > EL + 1) && !(Ej[2] < Ed) && !(Ej[1] > EY + 1) && !(Ej[3] < Ef) && (!Em || hy(Eg, Ei, Ed, Ef, EL, EY))) {
      return Eg;
    }
  }
  return null;
}
a(hd, "collision_rectangle");
function hf(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef) {
  if ((typeof nd != "number" || !(nd >= 5)) && CT === null) {
    return 0;
  }
  if (typeof Ew == "number") {
    let EA = Ch(Ew);
    if (!EA) {
      return 0;
    }
    Ew = EA.kindName || EA.name;
  }
  let EL = Math.min(T, Ey);
  let EY = Math.min(H, EK);
  let Eg = Math.max(T, Ey);
  let Ei = Math.max(H, EK);
  if (!Number.isFinite(EL) || !Number.isFinite(EY) || !Number.isFinite(Eg) || !Number.isFinite(Ei)) {
    return 0;
  }
  let Ej = [];
  for (let [EP, EI] of hw(Ew, Ep)) {
    let ER = Cu(EP, EI.spr);
    if (!(ER[0] > Eg + 1) && !(ER[2] < EL) && !(ER[1] > Ei + 1) && !(ER[3] < EY)) {
      if (!Em || hy(EP, EI, EL, EY, Eg, Ei)) {
        Ej.push(EP);
      }
    }
  }
  if (Ef) {
    let EF = (EL + Eg) / 2;
    let e0 = (EY + Ei) / 2;
    Ej.sort((e1, e2) => Math.hypot(e1.x - EF, e1.y - e0) - Math.hypot(e2.x - EF, e2.y - e0));
  }
  if (Array.isArray(Ed)) {
    Ed.push(...Ej);
  }
  return Ej.length;
}
a(hf, "collision_rectangle_list");
function hL(T, H, Ey, EK, Ew) {
  if (!Number.isFinite(T) || !Number.isFinite(H)) {
    return null;
  }
  for (let [Em, Ep] of hw(Ey, Ew)) {
    let Ed = Cu(Em, Ep.spr);
    if (!(T < Ed[0]) && !(T > Ed[2]) && !(H < Ed[1]) && !(H > Ed[3]) && (!EK || hK(Em, Ep, T, H))) {
      return Em;
    }
  }
  return null;
}
a(hL, "collision_point");
function hY(T, H, Ey, EK, Ew, Em) {
  if (hp(EK)) {
    hm.shapes.push({
      self: C3.self,
      circle: [T, H, Ey]
    });
  }
  if (!Number.isFinite(T) || !Number.isFinite(H) || !(Ey >= 0)) {
    return null;
  }
  for (let [Ep, Ed] of hw(EK, Em)) {
    let Ef = Cu(Ep, Ed.spr);
    let EL = nK(T, Ef[0], Ef[2]);
    let EY = nK(H, Ef[1], Ef[3]);
    if (!(Math.hypot(EL - T, EY - H) > Ey) && (!Ew || hy(Ep, Ed, T - Ey, H - Ey, T + Ey, H + Ey))) {
      return Ep;
    }
  }
  return null;
}
a(hY, "collision_circle");
function hg(T, H, Ey, EK, Ew, Em, Ep) {
  let Ed = (T + Ey) / 2;
  let Ef = (H + EK) / 2;
  let EL = Math.abs(Ey - T) / 2;
  let EY = Math.abs(EK - H) / 2;
  if (hp(Ew)) {
    hm.shapes.push({
      self: C3.self,
      rect: [Ed - EL, Ef - EY, Ed + EL, Ef + EY]
    });
  }
  if (!Number.isFinite(Ed) || !Number.isFinite(Ef) || !(EL > 0) || !(EY > 0)) {
    return null;
  }
  for (let [Eg, Ei] of hw(Ew, Ep)) {
    let Ej = Cu(Eg, Ei.spr);
    let EA = nK(Ed, Ej[0], Ej[2]);
    let EP = nK(Ef, Ej[1], Ej[3]);
    if (!(((EA - Ed) / EL) ** 2 + ((EP - Ef) / EY) ** 2 > 1) && (!Em || hy(Eg, Ei, Ed - EL, Ef - EY, Ed + EL, Ef + EY))) {
      return Eg;
    }
  }
  return null;
}
a(hg, "collision_ellipse");
function hj(T, H, Ey, EK, Ew, Em, Ep) {
  if (hp(Ew)) {
    hm.shapes.push({
      self: C3.self,
      seg: [T, H, Ey, EK]
    });
  }
  let Ed = Math.hypot(Ey - T, EK - H);
  if (!Number.isFinite(Ed)) {
    return null;
  }
  let Ef = Math.max(1, Math.ceil(Ed));
  for (let [EL, EY] of hw(Ew, Ep)) {
    let Eg = Cu(EL, EY.spr);
    if (!(Math.min(T, Ey) > Eg[2]) && !(Math.max(T, Ey) < Eg[0]) && !(Math.min(H, EK) > Eg[3]) && !(Math.max(H, EK) < Eg[1])) {
      for (let Ei = 0; Ei <= Ef; Ei++) {
        let Ej = T + (Ey - T) * (Ei / Ef);
        let EA = H + (EK - H) * (Ei / Ef);
        if (!(Ej < Eg[0]) && !(Ej > Eg[2]) && !(EA < Eg[1]) && !(EA > Eg[3]) && (!Em || hK(EL, EY, Ej, EA))) {
          return EL;
        }
      }
    }
  }
  return null;
}
a(hj, "collision_line");
var hA = new Map();
function hP(T, H, Ey, EK, Ew) {
  if (!C3.view.live) {
    return 0;
  }
  let Em = C3.self;
  if (!Em) {
    return 0;
  }
  if (typeof Ey == "number") {
    let Ef = Ch(Ey);
    if (!Ef) {
      return 0;
    }
    Ey = Ef.kindName || Ef.name;
  }
  let Ep = Hd(Ey);
  let Ed = [];
  for (let EL of typeof Ep == "string" ? C1(Ep) : C3.list) {
    if (EL !== Em && !EL.destroyed && !!EL.is(Ep)) {
      if (CJ(Em, EL, T, H)) {
        Ed.push(EL);
      }
    }
  }
  if (Ew) {
    Ed.sort((EY, Eg) => Math.hypot(EY.x - T, EY.y - H) - Math.hypot(Eg.x - T, Eg.y - H));
  }
  if (Array.isArray(EK)) {
    EK.push(...Ed);
  }
  return Ed.length;
}
a(hP, "instance_place_list");
function hI(T, H, Ey) {
  let EK = C3.self;
  if (!EK) {
    return null;
  }
  if (typeof Ey == "number" && C3.view.live) {
    let Em = Ch(Ey);
    if (!Em) {
      return null;
    }
    Ey = Em.kindName || Em.name;
  }
  let Ew = Hd(Ey);
  for (let Ep of typeof Ew == "string" ? C1(Ew) : C3.list) {
    if (Ep !== EK && !Ep.destroyed && !!Ep.is(Ew) && CJ(EK, Ep, T, H)) {
      return Ep;
    }
  }
  return null;
}
a(hI, "instance_place");
var hR = class O1 {
  constructor() {
    this.points = [];
    this.kind = 0;
    this.closed = true;
    this.precision = 4;
    this._poly = null;
  }
  dirty() {
    this._poly = null;
  }
  nonUnitSpeed() {
    for (let T of this.points) {
      if (T.speed !== 100) {
        return true;
      }
    }
    return false;
  }
  speedAt(T) {
    let H = this.points;
    if (this.kind !== 0 || H.length < 2) {
      return 100;
    }
    let {
      cum: Ey,
      len: EK
    } = this.poly();
    if (!(EK > 0)) {
      return H[0].speed;
    }
    let Ew = nK(T, 0, 1) * EK;
    let Em = 0;
    while (Em < Ey.length - 2 && Ey[Em + 1] <= Ew) {
      Em++;
    }
    let Ep = Ey[Em + 1] - Ey[Em];
    let Ed = Ep > 0 ? (Ew - Ey[Em]) / Ep : 0;
    let Ef = H[Em % H.length].speed;
    let EL = H[(Em + 1) % H.length].speed;
    return Ef + (EL - Ef) * Ed;
  }
  poly() {
    if (this._poly) {
      return this._poly;
    }
    let T = this.points;
    if (T.length === 0) {
      return this._poly = {
        pts: [[0, 0]],
        cum: [0],
        len: 0
      };
    }
    if (T.length === 1) {
      return this._poly = {
        pts: [[T[0].x, T[0].y]],
        cum: [0],
        len: 0
      };
    }
    let H = T.slice();
    if (this.closed) {
      H.push(T[0]);
    }
    let Ey;
    if (this.kind === 0) {
      Ey = H.map(Em => [Em.x, Em.y]);
    } else {
      Ey = E1(T, this.closed, this.precision);
    }
    let EK = [0];
    let Ew = 0;
    for (let Em = 1; Em < Ey.length; Em++) {
      Ew += Math.hypot(Ey[Em][0] - Ey[Em - 1][0], Ey[Em][1] - Ey[Em - 1][1]);
      EK.push(Ew);
    }
    return this._poly = {
      pts: Ey,
      cum: EK,
      len: Ew
    };
  }
  at(T) {
    let {
      pts: H,
      cum: Ey,
      len: EK
    } = this.poly();
    if (H.length === 1 || EK === 0) {
      return H[0];
    }
    let Ew = nK(T, 0, 1) * EK;
    let Em = 0;
    let Ep = Ey.length - 1;
    while (Em < Ep - 1) {
      let EL = Em + Ep >> 1;
      if (Ey[EL] <= Ew) {
        Em = EL;
      } else {
        Ep = EL;
      }
    }
    let Ed = Ey[Ep] - Ey[Em];
    let Ef = Ed > 0 ? (Ew - Ey[Em]) / Ed : 0;
    return [H[Em][0] + (H[Ep][0] - H[Em][0]) * Ef, H[Em][1] + (H[Ep][1] - H[Em][1]) * Ef];
  }
};
a(hR, "Path");
var hF = hR;
function E0(T) {
  let H = T.image_index;
  if (!(H >= 1) && !(H < 0) || !Number.isFinite(H)) {
    return;
  }
  let Ey = T.sprite_index && S3[T.sprite_index];
  let EK = Ey ? Math.max(1, Ey.frames) : 0;
  if (EK && (H >= EK || H < 0)) {
    T.image_index = (H % EK + EK) % EK;
  }
}
a(E0, "keepFrameInSprite");
function E1(T, H, Ey) {
  let EK = [];
  let Ew = (Ef, EL) => EK.push([Ef, EL]);
  let Em = (Ef, EL, EY, Eg, Ei, Ej, EA) => {
    if (Ef === 0) {
      return;
    }
    let EP = (EL + Eg + Eg + Ej) / 4;
    let EI = (EY + Ei + Ei + EA) / 4;
    let ER = (EL - Ej) * (EL - Ej) + (EY - EA) * (EY - EA) > 16;
    if (ER) {
      Em(Ef - 1, EL, EY, (Eg + EL) / 2, (Ei + EY) / 2, EP, EI);
    }
    Ew(EP, EI);
    if (ER) {
      Em(Ef - 1, EP, EI, (Ej + Eg) / 2, (EA + Ei) / 2, Ej, EA);
    }
  };
  let Ep = T.length;
  if (!H) {
    Ew(T[0].x, T[0].y);
  }
  let Ed = H ? Ep : Ep - 2;
  for (let Ef = 0; Ef < Ed; Ef++) {
    let EL = T[Ef % Ep];
    let EY = T[(Ef + 1) % Ep];
    let Eg = T[(Ef + 2) % Ep];
    Em(Math.max(1, Ey | 0), (EL.x + EY.x) / 2, (EL.y + EY.y) / 2, EY.x, EY.y, (EY.x + Eg.x) / 2, (EY.y + Eg.y) / 2);
  }
  if (H) {
    if (EK.length) {
      Ew(EK[0][0], EK[0][1]);
    }
  } else {
    Ew(T[Ep - 1].x, T[Ep - 1].y);
  }
  return EK;
}
a(E1, "gmSmoothPoints");
var E2 = Object.create(null);
function E3(T) {
  for (let [H, [Ey, EK, Ew, Em]] of Object.entries(T)) {
    let Ep = new hF();
    Ep.kind = Ey ? 1 : 0;
    Ep.closed = !!EK;
    Ep.precision = Ew;
    Ep.gmSmooth = true;
    Ep.name = H;
    for (let Ed = 0; Ed + 2 < Em.length; Ed += 3) {
      Ep.points.push({
        x: Em[Ed],
        y: Em[Ed + 1],
        speed: Em[Ed + 2]
      });
    }
    E2[H] = Ep;
  }
}
a(E3, "registerPaths");
var E5 = a(T => typeof T == "string" ? E2[T] : T, "asPath");
var E6 = a(() => new hF(), "path_add");
var E7 = a(T => E5(T) instanceof hF, "path_exists");
var E8 = a(T => {
  if (T instanceof hF) {
    T.points = [];
    T.dirty();
  }
}, "path_delete");
var E9 = a((T, H, Ey, EK) => {
  if (T instanceof hF) {
    T.points.push({
      x: H,
      y: Ey,
      speed: EK === undefined ? 100 : EK
    });
    T.dirty();
  }
}, "path_add_point");
var ES = a((T, H) => {
  if (T instanceof hF) {
    T.kind = H ? 1 : 0;
    T.dirty();
  }
}, "path_set_kind");
var EU = a((T, H) => {
  if (T instanceof hF) {
    T.closed = !!H;
    T.dirty();
  }
}, "path_set_closed");
var ET = a((T, H) => {
  if (T instanceof hF) {
    T.precision = H;
  }
}, "path_set_precision");
var EH = a(T => (T = E5(T)) instanceof hF ? T.points.length : 0, "path_get_number");
var EC = a(T => (T = E5(T)) instanceof hF ? T.poly().len : 0, "path_get_length");
var EN = a((T, H) => (T = E5(T)) instanceof hF ? T.at(H)[0] : 0, "path_get_x");
var Eh = a((T, H) => (T = E5(T)) instanceof hF ? T.at(H)[1] : 0, "path_get_y");
var EE = a(T => {
  if (T instanceof hF) {
    T.points = [];
    T.dirty();
  }
}, "path_clear_points");
var EO = a((T, H) => T instanceof hF && T.points[H] ? T.points[H].x : 0, "path_get_point_x");
var EZ = a((T, H) => T instanceof hF && T.points[H] ? T.points[H].y : 0, "path_get_point_y");
var Eb = a((T, H) => T instanceof hF && T.points[H] ? T.points[H].speed : 0, "path_get_point_speed");
function EV(T, H, Ey, EK) {
  T = E5(T);
  let Ew = C3.self;
  if (!Ew || !(T instanceof hF) || T.points.length < 2) {
    return;
  }
  let Em = T.at(0);
  Ew.path_index = T;
  Ew.path_speed = H;
  Ew.path_endaction = Ey | 0;
  Ew.path_position = 0;
  if (EK) {
    Ew.x = Em[0];
    Ew.y = Em[1];
    Ew._path_ox = 0;
    Ew._path_oy = 0;
  } else {
    Ew._path_ox = Ew.x - Em[0];
    Ew._path_oy = Ew.y - Em[1];
  }
  if (C3.pathStarts) {
    C3.pathStarts.push(Ew);
  }
}
a(EV, "path_start");
function Ek(T) {
  let H = T || C3.self;
  if (H) {
    H.path_index = null;
  }
}
a(Ek, "path_end");
function Ex() {
  for (let T of C3.list) {
    let H = T.path_index;
    if (T.destroyed || !(H instanceof hF)) {
      continue;
    }
    let Ey = H.poly().len;
    let EK = T._path_ox || 0;
    let Ew = T._path_oy || 0;
    if (Ey > 0) {
      T.path_position += (H.nonUnitSpeed() ? (T.path_speed || 0) * H.speedAt(T.path_position) / 100 : T.path_speed || 0) / Ey;
    }
    if (T.path_position >= 1 || T.path_position < 0) {
      let Ef = T.path_endaction | 0;
      if (Ef === 1) {
        T.path_position -= Math.floor(T.path_position);
      } else if (Ef === 2) {
        let EL = H.at(T.path_position >= 1 ? 1 : 0);
        T._path_ox = T.x - EL[0] + EK;
        T._path_oy = T.y - EL[1] + Ew;
        T.path_position -= Math.floor(T.path_position);
      } else if (Ef === 3) {
        T.path_speed = -(T.path_speed || 0);
        T.path_position = nK(T.path_position, 0, 1);
      } else {
        T.path_position = nK(T.path_position, 0, 1);
        T.path_index = null;
      }
    }
    let Em = H.at(T.path_position);
    let Ep = Em[0] + (T._path_ox || 0);
    let Ed = Em[1] + (T._path_oy || 0);
    if (Ep !== T.x || Ed !== T.y) {
      T._dir = nG(T.x, T.y, Ep, Ed);
    }
    T.x = Ep;
    T.y = Ed;
  }
}
a(Ex, "stepPaths");
function Eq(T, H, Ey, EK, Ew) {
  let Em = CR;
  if (!Em) {
    return;
  }
  let Ep = Math.hypot(Ey - T, EK - H);
  if (!(Ep > 0)) {
    return;
  }
  let Ed = Math.min(Ew === undefined ? 8 : Ew, Ep);
  Em.draw_line(T, H, Ey, EK);
  let Ef = (Ey - T) / Ep;
  let EL = (EK - H) / Ep;
  let EY = Ey - Ef * Ed;
  let Eg = EK - EL * Ed;
  Em.draw_triangle(Ey, EK, EY - EL * Ed / 3, Eg + Ef * Ed / 3, EY + EL * Ed / 3, Eg - Ef * Ed / 3, false);
}
a(Eq, "draw_arrow");
var Ev = 0;
var Eu = a(() => ({
  surf: Ev
}), "engineCounters");
var Ec = a(T => {
  if (T && Number.isFinite(T.surf)) {
    Ev = T.surf;
  }
}, "setEngineCounters");
function Ez(T, H, Ey, EK, Ew, Em, Ep, Ed, Ef) {
  if (T && N3.lazy && N3.build && T === N3.build()) {
    N3.lazy();
  }
  let EL = T && T.canvas;
  if (!EL) {
    return null;
  }
  let EY = Math.max(1, Math.round(EK) || EL.width);
  let Eg = Math.max(1, Math.round(Ew) || EL.height);
  let Ei = document.createElement("canvas");
  Ei.width = EY;
  Ei.height = Eg;
  let Ej = Ei.getContext("2d");
  if (!Ej) {
    return null;
  }
  Ej.imageSmoothingEnabled = false;
  Ej.drawImage(EL, Math.round(H) || 0, Math.round(Ey) || 0, EY, Eg, 0, 0, EY, Eg);
  let EA = "__surfspr_" + ++Ev;
  S3[EA] = {
    name: EA,
    img: [Ei],
    w: EY,
    h: Eg,
    ox: Math.round(Ed) || 0,
    oy: Math.round(Ef) || 0,
    frames: 1,
    bb: [0, 0, EY - 1, Eg - 1],
    precise: false,
    masks: null
  };
  return EA;
}
a(Ez, "sprite_create_from_surface");
var EB = new Set();
N8(a(function () {
  for (let T of Object.keys(nA)) {
    if (T.startsWith("__surfspr_")) {
      delete S3[T];
    }
  }
  EB.clear();
  Ev = 0;
}, "resetSurfaceSprites"));
function EG(T) {
  if (typeof T == "string" && T.startsWith("__surfspr_")) {
    EB.add(T);
  }
}
a(EG, "sprite_delete");
function EM() {
  if (EB.size) {
    for (let T of [...EB]) {
      let H = false;
      for (let Ey of C3.list) {
        if (!Ey.destroyed && (Ey.sprite_index === T || Ey.mask_index === T)) {
          H = true;
          break;
        }
      }
      if (!H) {
        delete S3[T];
        EB.delete(T);
      }
    }
  }
}
a(EM, "purgeDeletedSprites");
var El = {
  main: "fnt_main",
  mainbig: "fnt_mainbig",
  small: "fnt_small",
  dotumche: "fnt_dotumche",
  ja_main: "fnt_main",
  ja_mainbig: "fnt_mainbig",
  ja_small: "fnt_small",
  comicsans: "fnt_main",
  tinynoelle: "fnt_small",
  "8bit": "fnt_8bit",
  "8bit_mixed": "fnt_8bit"
};
function EJ(T) {
  return El[T] || "fnt_main";
}
a(EJ, "scr_84_get_font");
function EQ(T) {
  if (CR) {
    CR.draw_set_font(EJ(T));
  }
}
a(EQ, "scr_84_set_draw_font");
var ED = ["b1", "b2", "b3", "left", "right", "up", "down"];
var EW = {
  mode: "off",
  frames: [],
  pos: 0,
  seed: 1,
  start(T) {
    this.mode = "record";
    this.frames = [];
    this.pos = 0;
    this.seed = T;
    nx.reseed(T);
  },
  play(T) {
    this.mode = "play";
    this.frames = T.frames.slice();
    this.pos = 0;
    this.seed = T.seed;
    nx.reseed(T.seed);
  },
  stop() {
    let T = {
      seed: this.seed,
      frames: this.frames.slice()
    };
    this.mode = "off";
    return T;
  },
  tick() {
    if (this.mode === "record") {
      let T = 0;
      ED.forEach((H, Ey) => {
        if (Sh.held[H]) {
          T |= 1 << Ey;
        }
        if (Sh.pressed[H]) {
          T |= 1 << Ey + 8;
        }
      });
      this.frames.push(T);
    } else if (this.mode === "play") {
      let H = this.frames[this.pos++] || 0;
      ED.forEach((Ey, EK) => {
        Sh.held[Ey] = !!(H & 1 << EK);
        Sh.pressed[Ey] = !!(H & 1 << EK + 8);
      });
      if (this.pos >= this.frames.length) {
        this.mode = "done";
      }
    }
  }
};
function EX(T, H = 1) {
  return T1(T, {
    loop: true,
    volume: H
  });
}
a(EX, "snd_loop");
export { M as a, n0 as b, n1 as c, n6 as d, n7 as e, n9 as f, nT as g, nH as h, nC as i, nN as j, nh as k, nO as l, nk as m, nx as n, nq as o, nv as p, nu as q, nc as r, nz as s, nB as t, nG as u, nM as v, nJ as w, nQ as x, nD as y, nW as z, nt as A, nX as B, ny as C, nK as D, nw as E, nm as F, nd as G, nf as H, nL as I, nY as J, ng as K, nj as L, S2 as M, S3 as N, S4 as O, S5 as P, S7 as Q, S8 as R, S9 as S, SS as T, ST as U, SH as V, SN as W, Sh as X, Sb as Y, SV as Z, Ss as _, Sk as $, Sx as aa, Sc as ba, Sz as ca, Sl as da, SJ as ea, SQ as fa, SD as ga, SX as ha, Sw as ia, Sm as ja, Sp as ka, Sd as la, SL as ma, Sg as na, Sj as oa, SA as pa, SP as qa, SI as ra, SR as sa, SF as ta, U0 as ua, U1 as va, U2 as wa, U3 as xa, U4 as ya, U5 as za, U6 as Aa, U8 as Ba, U9 as Ca, UT as Da, UH as Ea, UN as Fa, UE as Ga, UO as Ha, Ub as Ia, Uk as Ja, Uv as Ka, Um as La, Uf as Ma, UL as Na, UY as Oa, UF as Pa, T0 as Qa, T1 as Ra, T2 as Sa, T3 as Ta, Tf as Ua, TP as Va, H0 as Wa, H4 as Xa, HS as Ya, HC as Za, Hh as _a, HE as $a, HO as ab, HZ as bb, Hb as cb, HV as db, Hv as eb, Hc as fb, HG as gb, HM as hb, HJ as ib, HQ as jb, HD as kb, HW as lb, HX as mb, Hy as nb, HK as ob, Hm as pb, Hp as qb, Hd as rb, HY as sb, Hg as tb, Hj as ub, C1 as vb, C2 as wb, C3 as xb, C4 as yb, C8 as zb, C9 as Ab, CC as Bb, CN as Cb, Ch as Db, CE as Eb, CO as Fb, CZ as Gb, CV as Hb, Cs as Ib, Ck as Jb, Cx as Kb, CM as Lb, Cl as Mb, CJ as Nb, Cy as Ob, Cd as Pb, CL as Qb, CA as Rb, CI as Sb, CR as Tb, CF as Ub, N3 as Vb, N6 as Wb, N8 as Xb, N9 as Yb, NU as Zb, NT as _b, NH as $b, Nh as ac, NO as bc, NB as cc, Nm as dc, Nf as ec, NL as fc, NY as gc, Nj as hc, NI as ic, NR as jc, h1 as kc, h4 as lc, h5 as mc, h7 as nc, h8 as oc, h9 as pc, hS as qc, hT as rc, hH as sc, hC as tc, hN as uc, hE as vc, hO as wc, hZ as xc, hb as yc, hk as zc, hx as Ac, hq as Bc, hv as Cc, hu as Dc, hc as Ec, hz as Fc, hB as Gc, hG as Hc, hM as Ic, hJ as Jc, hQ as Kc, hD as Lc, hW as Mc, hX as Nc, hm as Oc, hd as Pc, hf as Qc, hL as Rc, hY as Sc, hg as Tc, hj as Uc, hA as Vc, hP as Wc, hI as Xc, E2 as Yc, E3 as Zc, E6 as _c, E7 as $c, E8 as ad, E9 as bd, ES as cd, EU as dd, ET as ed, EH as fd, EC as gd, EN as hd, Eh as id, EE as jd, EO as kd, EZ as ld, Eb as md, EV as nd, Ek as od, Eq as pd, Eu as qd, Ec as rd, Ez as sd, EG as td, EJ as ud, EQ as vd, EW as wd, EX as xd, u as yd };
