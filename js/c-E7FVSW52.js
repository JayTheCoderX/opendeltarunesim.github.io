import { g as s } from './c-ZQQWH6UG.js';
import { Ac as e, Ca as g, G as n, Ia as T, Ib as x, Jb as t, Kb as m, Lb as d, N as w, Pc as k0, Ra as k1, Sc as k2, Ta as k3, Tb as k4, Uc as k5, Vb as k6, X as k7, Xb as k8, a as k9, aa as kk, g as kO, h as kM, k as ku, lb as kf, n as kv, nc as kV, nd as kl, oc as kS, od as kp, pb as ka, pc as kA, qb as ks, qc as kc, rc as ky, s as kg, sd as kR, t as kD, tb as kh, td as kP, u as kT, uc as kJ, xb as kN, xc as kz, zc as kq } from './c-PBMEVLU6.js';
import { a as kY, c as kB, e as kQ, l as kj } from './c-XSSGDLV7.js';
var kx = {};
kB(kx, {
  'RoomHooks': () => uN,
  'UT_FLED': () => uz,
  'action_create_object': () => MW,
  'action_kill_object': () => MU,
  'action_move': () => Mw,
  'action_move_point': () => fH,
  'action_move_to': () => MF,
  'action_set_alarm': () => Mm,
  'action_set_friction': () => ML,
  'action_set_gravity': () => MH,
  'action_set_hspeed': () => MG,
  'action_set_motion': () => fL,
  'action_set_relative': () => MI,
  'action_set_vspeed': () => MX,
  'application_surface': () => o8,
  'async_load': () => fJ,
  'audio_channel_num': () => fp,
  'audio_is_playing': () => kW,
  'audio_pause_all': () => fG,
  'audio_pause_sound': () => oJ,
  'audio_play_sound': () => fU,
  'audio_resume_all': () => fX,
  'audio_resume_sound': () => oN,
  'audio_sound_gain': () => oR,
  'audio_sound_get_gain': () => oP,
  'audio_sound_get_pitch': () => oh,
  'audio_sound_pitch': () => oD,
  'audio_stop_all': () => oz,
  'audio_stop_sound': () => fF,
  'buffer_async_group_begin': () => uk,
  'buffer_async_group_end': () => uO,
  'buffer_async_group_option': () => uM,
  'buffer_create': () => u3,
  'buffer_delete': () => u6,
  'buffer_get_size': () => u7,
  'buffer_load_async': () => u9,
  'buffer_read': () => u5,
  'buffer_save_async': () => u8,
  'buffer_write': () => u4,
  'chr': () => Ov,
  'collision_circle': () => kE,
  'collision_line': () => kC,
  'collision_rectangle': () => kb,
  'color_get_blue': () => Mp,
  'color_get_green': () => MS,
  'color_get_red': () => Ml,
  'control_check': () => M6,
  'control_check_pressed': () => M7,
  'control_clear': () => M8,
  'control_init': () => Mk,
  'control_update': () => M9,
  'degtorad': () => Ma,
  'display_get_height': () => uJ,
  'display_get_width': () => uT,
  'display_height': () => fT,
  'display_width': () => fP,
  'distance_to_object': () => Mc,
  'distance_to_point': () => Ms,
  'draw_ellipse_color': () => v0,
  'draw_ellipse_colour': () => v1,
  'draw_line_width_color': () => ok,
  'draw_line_width_colour': () => oO,
  'draw_set_circle_precision': () => ou,
  'draw_sprite_part': () => o9,
  'draw_text_ext': () => oM,
  'draw_triangle_color': () => fd,
  'draw_triangle_colour': () => fw,
  'dropDeactivated': () => fV,
  'ds_map_add': () => O2,
  'ds_map_clear': () => O9,
  'ds_map_create': () => O1,
  'ds_map_delete': () => O6,
  'ds_map_destroy': () => O7,
  'ds_map_exists': () => O5,
  'ds_map_find_value': () => O4,
  'ds_map_set': () => O3,
  'ds_map_size': () => O8,
  'ev_alarm': () => Mh,
  'ev_collision': () => MT,
  'ev_create': () => MR,
  'ev_destroy': () => MD,
  'ev_draw': () => MN,
  'ev_other': () => MJ,
  'ev_step': () => MP,
  'ev_user0': () => Mz,
  'ev_user1': () => Mq,
  'ev_user2': () => MY,
  'ev_user3': () => MB,
  'ev_user4': () => MQ,
  'ev_user5': () => Mj,
  'ev_user6': () => Mx,
  'ev_user7': () => MK,
  'ev_user8': () => Mb,
  'ev_user9': () => MC,
  'event_perform': () => ME,
  'extension_stubfunc_real': () => f7,
  'file_delete': () => oW,
  'file_exists': () => oI,
  'file_rename': () => oU,
  'file_text_close': () => oH,
  'file_text_eof': () => u2,
  'file_text_open_append': () => oX,
  'file_text_open_read': () => oF,
  'file_text_open_write': () => oG,
  'file_text_read_real': () => om,
  'file_text_read_string': () => oL,
  'file_text_readln': () => od,
  'file_text_write_real': () => u0,
  'file_text_write_string': () => ow,
  'file_text_writeln': () => u1,
  'game_end': () => ub,
  'game_restart': () => uC,
  'gamepad_button_check': () => M3,
  'gamepad_button_check_pressed': () => M5,
  'get_string_async': () => uS,
  'hashnl': () => oV,
  'ini_close': () => oj,
  'ini_key_exists': () => oE,
  'ini_open': () => oB,
  'ini_open_from_string': () => oQ,
  'ini_read_real': () => ox,
  'ini_read_string': () => oK,
  'ini_section_exists': () => oZ,
  'ini_write_real': () => ob,
  'ini_write_string': () => oC,
  'instance_activate_all': () => fv,
  'instance_activate_object': () => ff,
  'instance_change': () => fm,
  'instance_create': () => kH,
  'instance_deactivate_all': () => fO,
  'instance_deactivate_object': () => fM,
  'instance_exists': () => kL,
  'instance_find': () => Mg,
  'instance_number': () => kX,
  'instance_position': () => fl,
  'is_real': () => OO,
  'is_string': () => OM,
  'is_undefined': () => Ok,
  'joystick_check_button': () => M4,
  'json_decode': () => uf,
  'json_encode': () => uu,
  'keyboard_check': () => Od,
  'keyboard_check_direct': () => M1,
  'keyboard_check_pressed': () => Ow,
  'keyboard_check_released': () => M0,
  'keyboard_clear': () => M2,
  'keyboard_key': () => fz,
  'keyboard_lastchar': () => fY,
  'keyboard_lastkey': () => fq,
  'keyboard_string': () => fN,
  'make_color_hsv': () => Mv,
  'make_color_rgb': () => Mu,
  'make_colour_hsv': () => MV,
  'make_colour_rgb': () => Mf,
  'mouse_button': () => fI,
  'mouse_lastbutton': () => fW,
  'mouse_x': () => f3,
  'mouse_y': () => f4,
  'move_snap': () => My,
  'nomiss_bar': () => oS,
  'nomiss_check': () => oA,
  'obj_time': () => MM,
  'objectByIndex': () => kG,
  'ord': () => Of,
  'os_linux': () => f1,
  'os_macosx': () => f0,
  'os_type': () => ud,
  'os_unknown': () => f2,
  'os_windows': () => uw,
  'ossafe_savedata_load': () => uI,
  'ossafe_savedata_save': () => uZ,
  'path_end': () => kF,
  'path_start': () => kU,
  'radtodeg': () => MA,
  'randomize': () => fS,
  'real': () => Ou,
  'registerArrayGlobals': () => fC,
  'resetAssetAudioState': () => og,
  'resetUtRuntimeForFight': () => fB,
  'rnsound': () => f5,
  'room': () => uL,
  'room_battle': () => um,
  'room_goto': () => uY,
  'room_goto_next': () => uQ,
  'room_height': () => uU,
  'room_restart': () => ux,
  'room_width': () => uW,
  'script_execute': () => OT,
  'sleep_x': () => uE,
  'sprite_collision_mask': () => o5,
  'sprite_create_from_surface': () => kI,
  'sprite_delete': () => kZ,
  'sprite_get_height': () => o1,
  'sprite_get_width': () => o0,
  'sprite_get_xoffset': () => o2,
  'sprite_get_yoffset': () => o3,
  'sprite_replace': () => o4,
  'steam_file_delete': () => fa,
  'steam_file_exists': () => uV,
  'steam_file_write_file': () => uv,
  'steam_initialised': () => fA,
  'steam_is_overlay_enabled': () => ul,
  'string_byte_length': () => f6,
  'string_char_at': () => Ol,
  'string_copy': () => OS,
  'string_count': () => OP,
  'string_delete': () => Oa,
  'string_digits': () => OD,
  'string_height': () => ov,
  'string_insert': () => OA,
  'string_length': () => OV,
  'string_letters': () => Oh,
  'string_lower': () => Os,
  'string_pos': () => Op,
  'string_repeat': () => Oy,
  'string_replace': () => OR,
  'string_replace_all': () => Og,
  'string_upper': () => Oc,
  'string_width': () => of,
  'surface_get_height': () => o7,
  'surface_get_width': () => o6,
  'takeRoomChange': () => uB,
  'takeRoomRestart': () => uK,
  'utRuntimeRestore': () => fZ,
  'utRuntimeSave': () => fQ,
  'utText': () => ol,
  'view_angle': () => fR,
  'view_current': () => fs,
  'view_hview': () => uH,
  'view_visible': () => fc,
  'view_wview': () => uX,
  'view_xport': () => fy,
  'view_xview': () => uF,
  'view_yport': () => fg,
  'view_yview': () => uG,
  'vk_alt': () => Ox,
  'vk_anykey': () => OG,
  'vk_backspace': () => OC,
  'vk_control': () => Oj,
  'vk_delete': () => OZ,
  'vk_down': () => Oq,
  'vk_enter': () => OY,
  'vk_escape': () => Ob,
  'vk_f1': () => OI,
  'vk_f2': () => OW,
  'vk_f4': () => OU,
  'vk_f6': () => OF,
  'vk_left': () => OJ,
  'vk_nokey': () => OX,
  'vk_return': () => OB,
  'vk_right': () => Oz,
  'vk_shift': () => OQ,
  'vk_space': () => OK,
  'vk_tab': () => OE,
  'vk_up': () => ON,
  'vulnerable': () => op,
  'vulnerable_sans': () => oa,
  'window_center': () => up,
  'window_get_caption': () => uR,
  'window_get_fullscreen': () => uy,
  'window_get_height': () => uP,
  'window_get_width': () => uh,
  'window_get_x': () => uA,
  'window_get_y': () => us,
  'window_height': () => fh,
  'window_set_caption': () => ug,
  'window_set_fullscreen': () => uc,
  'window_set_position': () => ua,
  'window_set_size': () => uD,
  'window_width': () => fD,
  'zeroArray': () => fK
}), kj(), kj();
var kK = ['areapop', 'attacker', 'bmenucoord', 'bulletpwr', 'bulletvariable', 'choices', 'control_new_state', 'control_pressed', 'control_state', 'failure', 'flag', 'goldreward', 'hurtanim', 'idealborder', 'item', 'itemname', 'itemnameb', 'itemrewardchance', 'itemrewardid', 'menuchoice', 'menucoord', 'mnpwr', 'monster', 'monsteratk', 'monsterdef', 'monsterhp', 'monsterinstance', 'monstermaxhp', 'monstername', 'monstertype', 'msg', 'phone', 'phonename', 'specialdam', 'spell', 'tempvalue', 'xpreward'],
  kb = k0,
  kC = k5,
  kE = k2,
  kZ = kP;
function kI(v2, ...v3) {
  return v2 === -0x1 && k6.build && (v2 = k6.build()), kR(v2, ...v3);
}
kY(kI, 'sprite_create_from_surface');
function kW(v2) {
  let v3 = typeof v2 == 'string' && !T() ? kc(v2) : v2;
  return v3 && typeof v3 == 'object' && v3.loop === false && v3.len > 0x0 && v3.currentTime >= v3.len ? false : kf(v2);
}
kY(kW, 'audio_is_playing');
var kU = kl,
  kF = kp,
  kG = kh,
  kX = m,
  kH = x,
  kL = t,
  km = new Set();
function kd(v2, v3) {
  km.has(v2) || (km.add(v2), console.warn("ut_runtime: " + v3));
}
kY(kd, 'once');
var kw = new Map(),
  O0 = 0x1;
function O1() {
  let v2 = O0++;
  return kw.set(v2, new Map()), v2;
}
kY(O1, 'ds_map_create');
function O2(v2, v3, v4) {
  let v5 = kw.get(v2);
  return !v5 || v5.has(String(v3)) ? 0x0 : (v5.set(String(v3), v4), 0x1);
}
kY(O2, 'ds_map_add');
function O3(v2, v3, v4) {
  let v5 = kw.get(v2);
  return v5 ? (v5.set(String(v3), v4), 0x1) : 0x0;
}
kY(O3, 'ds_map_set');
function O4(v2, v3) {
  let v4 = kw.get(v2);
  if (v4) return v4.get(String(v3));
}
kY(O4, 'ds_map_find_value');
function O5(v2, v3) {
  let v4 = kw.get(v2);
  return v4 && v4.has(String(v3)) ? 0x1 : 0x0;
}
kY(O5, 'ds_map_exists');
function O6(v2, v3) {
  let v4 = kw.get(v2);
  return v4 && v4.delete(String(v3)), 0x0;
}
kY(O6, 'ds_map_delete');
function O7(v2) {
  return kw.delete(v2), 0x0;
}
kY(O7, 'ds_map_destroy');
function O8(v2) {
  let v3 = kw.get(v2);
  return v3 ? v3.size : 0x0;
}
kY(O8, 'ds_map_size');
function O9(v2) {
  let v3 = kw.get(v2);
  return v3 && v3.clear(), 0x0;
}
kY(O9, 'ds_map_clear');
function Ok(v2) {
  return v2 === void 0x0 ? 0x1 : 0x0;
}
kY(Ok, 'is_undefined');
function OO(v2) {
  return typeof v2 == 'number' ? 0x1 : 0x0;
}
kY(OO, 'is_real');
function OM(v2) {
  return typeof v2 == 'string' ? 0x1 : 0x0;
}
kY(OM, 'is_string');
function Ou(v2) {
  if (typeof v2 == 'number') return v2;
  let v3 = parseFloat(v2);
  return Number.isFinite(v3) ? v3 : 0x0;
}
kY(Ou, 'real');
function Of(v2) {
  return String(v2).charCodeAt(0x0) || 0x0;
}
kY(Of, 'ord');
function Ov(v2) {
  return String.fromCharCode(v2);
}
kY(Ov, 'chr');
function OV(v2) {
  return String(v2).length;
}
kY(OV, 'string_length');
function Ol(v2, v3) {
  return String(v2).charAt(v3 - 0x1);
}
kY(Ol, 'string_char_at');
function OS(v2, v3, v4) {
  return String(v2).substr(Math.max(0x0, v3 - 0x1), v4);
}
kY(OS, 'string_copy');
function Op(v2, v3) {
  return String(v3).indexOf(String(v2)) + 0x1;
}
kY(Op, 'string_pos');
function Oa(v2, v3, v4) {
  let v5 = String(v2);
  return v5.slice(0x0, Math.max(0x0, v3 - 0x1)) + v5.slice(Math.max(0x0, v3 - 0x1) + v4);
}
kY(Oa, 'string_delete');
function OA(v2, v3, v4) {
  let v5 = String(v3);
  return v5.slice(0x0, Math.max(0x0, v4 - 0x1)) + String(v2) + v5.slice(Math.max(0x0, v4 - 0x1));
}
kY(OA, 'string_insert');
function Os(v2) {
  return String(v2).toLowerCase();
}
kY(Os, 'string_lower');
function Oc(v2) {
  return String(v2).toUpperCase();
}
kY(Oc, 'string_upper');
function Oy(v2, v3) {
  return String(v2).repeat(Math.max(0x0, Math.floor(v3)));
}
kY(Oy, 'string_repeat');
function Og(v2, v3, v4) {
  return String(v2).split(String(v3)).join(String(v4));
}
kY(Og, 'string_replace_all');
function OR(v2, v3, v4) {
  return String(v2).replace(String(v3), String(v4));
}
kY(OR, 'string_replace');
function OD(v2) {
  return String(v2).replace(/[^0-9]/g, '');
}
kY(OD, 'string_digits');
function Oh(v2) {
  return String(v2).replace(/[^A-Za-z]/g, '');
}
kY(Oh, 'string_letters');
function OP(v2, v3) {
  return String(v3).split(String(v2)).length - 0x1;
}
kY(OP, 'string_count');
function OT(v2, v3, ...v4) {
  return typeof v3 != 'function' ? (kd("script_execute:" + String(v3), "script_execute called with a non-function (" + String(v3) + ')'), 0x0) : v3.apply(v2, v4);
}
kY(OT, 'script_execute');
var OJ = 0x25,
  ON = 0x26,
  Oz = 0x27,
  Oq = 0x28,
  OY = 0xd,
  OB = 0xd,
  OQ = 0x10,
  Oj = 0x11,
  Ox = 0x12,
  OK = 0x20,
  Ob = 0x1b,
  OC = 0x8,
  OE = 0x9,
  OZ = 0x2e,
  OI = 0x70,
  OW = 0x71,
  OU = 0x73,
  OF = 0x75,
  OG = 0x1,
  OX = 0x0;
function OH(v2) {
  return kk[v2 | 0x0];
}
kY(OH, 'slot');
function OL() {
  for (let v2 in k7.held) if (k7.held[v2]) return true;
  return false;
}
kY(OL, 'anyHeld');
function Om() {
  for (let v2 in k7.pressed) if (k7.pressed[v2]) return true;
  return k7.typed != null || !!k7.backspace;
}
kY(Om, 'anyPressed');
function Od(v2) {
  if (v2 === OG) return OL() ? 0x1 : 0x0;
  if (v2 === OX) return OL() ? 0x0 : 0x1;
  let v3 = OH(v2);
  return v3 && k7.held[v3] ? 0x1 : 0x0;
}
kY(Od, 'keyboard_check');
function Ow(v2) {
  if (v2 === OG) return Om() ? 0x1 : 0x0;
  if (v2 === OX) return Om() ? 0x0 : 0x1;
  let v3 = OH(v2);
  return !v3 && v2 === OC ? k7.backspace ? 0x1 : 0x0 : v3 && k7.pressed[v3] ? 0x1 : 0x0;
}
kY(Ow, 'keyboard_check_pressed');
function M0(v2) {
  let v3 = OH(v2);
  return v3 && k7.released[v3] ? 0x1 : 0x0;
}
kY(M0, 'keyboard_check_released');
function M1(v2) {
  return Od(v2);
}
kY(M1, 'keyboard_check_direct');
function M2() {
  return 0x0;
}
kY(M2, 'keyboard_clear');
function M3() {
  return 0x0;
}
kY(M3, 'gamepad_button_check');
function M4() {
  return 0x0;
}
kY(M4, 'joystick_check_button');
function M5() {
  return 0x0;
}
kY(M5, 'gamepad_button_check_pressed');
function M6(v2) {
  return s.control_state && s.control_state[v2] ? 0x1 : 0x0;
}
kY(M6, 'control_check');
function M7(v2) {
  return s.control_pressed && s.control_pressed[v2] ? 0x1 : 0x0;
}
kY(M7, 'control_check_pressed');
function M8(v2) {
  return s.control_pressed && (s.control_pressed[v2] = 0x0), 0x0;
}
kY(M8, 'control_clear');
function M9() {
  s.control_state || (s.control_state = [0x0, 0x0, 0x0], s.control_new_state = [0x0, 0x0, 0x0], s.control_pressed = [0x0, 0x0, 0x0]);
  let v2 = [k7.held.b1 || k7.pressed.b1 ? 0x1 : 0x0, k7.held.b2 || k7.pressed.b2 ? 0x1 : 0x0, k7.held.b3 || k7.pressed.b3 ? 0x1 : 0x0];
  for (let v3 = 0x0; v3 <= 0x2; v3++) s.control_new_state[v3] = v2[v3], s.control_pressed[v3] = !s.control_state[v3] && v2[v3] ? 0x1 : 0x0, s.control_state[v3] = v2[v3];
  return 0x0;
}
kY(M9, 'control_update');
function Mk() {
  return s.control_state = [0x0, 0x0, 0x0], s.control_new_state = [0x0, 0x0, 0x0], s.control_pressed = [0x0, 0x0, 0x0], 0x0;
}
kY(Mk, 'control_init'), Mk();
var MO = class v7 extends ka {
  ["create"]() {
    this.up = 0x0, this.down = 0x0, this.left = 0x0, this.right = 0x0, this.time = 0x0, this.canquit = 0x1, this.j_ch = 0x0, this.visible = false, s.osflavor === void 0x0 && (s.osflavor = 0x1), s.disable_os_pause === void 0x0 && (s.disable_os_pause = 0x0), s.savedata_async_id === void 0x0 && (s.savedata_async_id = -0x1), Mk();
  }
  ["beginStep"]() {
    if (uK() && uN.restart) {
      uN.restart();
      return;
    }
    let v2 = uB();
    v2 && uN.go && uN.go(v2);
  }
  ["step"]() {
    this.up = k7.held.up ? 0x1 : 0x0, this.down = k7.held.down ? 0x1 : 0x0, this.left = k7.held.left ? 0x1 : 0x0, this.right = k7.held.right ? 0x1 : 0x0, this.time = kN.frame, k7.typed != null && (fY = k7.typed), M9();
  }
  ["endStep"]() {
    kN.view.x = Number(uF[0x0]) || 0x0, kN.view.y = Number(uG[0x0]) || 0x0;
    let v2 = s.background_color,
      v3 = v2 == null ? null : ku(v2);
    this.bgcss = v3 && v3 !== kM.black && v3 !== "rgb(0, 0, 0)" && v3 !== "#000" ? v3 : null, this.visible = !!this.bgcss, this.depth = 0x3b9aca00;
  }
  ["draw"](v2) {
    if (!this.bgcss || !v2 || !v2.ctx) return;
    let v3 = v2.ctx;
    v3.save(), v3.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0), v3.globalAlpha = 0x1, v3.globalCompositeOperation = "source-over", v3.fillStyle = this.bgcss, v3.fillRect(0x0, 0x0, 0x280, 0x1e0), v3.restore();
  }
};
kY(MO, 'obj_time'), kQ(MO, 'kinds', ks('obj_time', ka));
var MM = MO;
MM.screenSpace = true;
function Mu(v2, v3, v4) {
  return (v4 & 0xff) << 0x10 | (v3 & 0xff) << 0x8 | v2 & 0xff;
}
kY(Mu, 'make_color_rgb');
function Mf(v2, v3, v4) {
  return Mu(v2, v3, v4);
}
kY(Mf, 'make_colour_rgb');
function Mv(v2, v3, v4) {
  let v5 = v2 / 0xff * 0x6,
    v6 = v3 / 0xff,
    v8 = v4 / 0xff,
    v9 = Math.floor(v5) % 0x6,
    vk = v5 - Math.floor(v5),
    vO = v8 * (0x1 - v6),
    vM = v8 * (0x1 - v6 * vk),
    vu = v8 * (0x1 - v6 * (0x1 - vk)),
    vf = 0x0,
    vv = 0x0,
    vV = 0x0;
  return v9 === 0x0 ? (vf = v8, vv = vu, vV = vO) : v9 === 0x1 ? (vf = vM, vv = v8, vV = vO) : v9 === 0x2 ? (vf = vO, vv = v8, vV = vu) : v9 === 0x3 ? (vf = vO, vv = vM, vV = v8) : v9 === 0x4 ? (vf = vu, vv = vO, vV = v8) : (vf = v8, vv = vO, vV = vM), Mu(Math.round(vf * 0xff), Math.round(vv * 0xff), Math.round(vV * 0xff));
}
kY(Mv, 'make_color_hsv');
function MV(v2, v3, v4) {
  return Mv(v2, v3, v4);
}
kY(MV, 'make_colour_hsv');
function Ml(v2) {
  return (v2 | 0x0) & 0xff;
}
kY(Ml, 'color_get_red');
function MS(v2) {
  return (v2 | 0x0) >> 0x8 & 0xff;
}
kY(MS, 'color_get_green');
function Mp(v2) {
  return (v2 | 0x0) >> 0x10 & 0xff;
}
kY(Mp, 'color_get_blue');
function Ma(v2) {
  return v2 * kO;
}
kY(Ma, 'degtorad');
function MA(v2) {
  return v2 / kO;
}
kY(MA, 'radtodeg');
function Ms(v2, v3) {
  let v4 = kN.self;
  if (!v4) return 0x0;
  let v5 = Math.max(v4.bbox_left - v2, 0x0, v2 - v4.bbox_right),
    v6 = Math.max(v4.bbox_top - v3, 0x0, v3 - v4.bbox_bottom);
  return Math.hypot(v5, v6);
}
kY(Ms, 'distance_to_point');
function Mc(v2) {
  let v3 = kN.self,
    v4 = v2 && typeof v2 == 'object' ? v2 : kN.first(typeof v2 == 'function' ? v2.kindName || v2.name : v2);
  if (!v3 || !v4 || v4.destroyed) return 0x186a0;
  let v5 = d(v3),
    v6 = d(v4);
  return Math.hypot(Math.max(v5[0x0] - v6[0x2], 0x0, v6[0x0] - v5[0x2]), Math.max(v5[0x1] - v6[0x3], 0x0, v6[0x1] - v5[0x3]));
}
kY(Mc, 'distance_to_object');
function My(v2, v3) {
  let v4 = kN.self;
  return v4 && v4.move_snap(v2, v3), 0x0;
}
kY(My, 'move_snap');
function Mg(v2, v3) {
  return kN.all(v2)[v3] || null;
}
kY(Mg, 'instance_find');
var MR = 0x0,
  MD = 0x1,
  Mh = 0x2,
  MP = 0x3,
  MT = 0x4,
  MJ = 0x7,
  MN = 0x8,
  Mz = 0xa,
  Mq = 0xb,
  MY = 0xc,
  MB = 0xd,
  MQ = 0xe,
  Mj = 0xf,
  Mx = 0x10,
  MK = 0x11,
  Mb = 0x12,
  MC = 0x13;
function ME(v2, v3) {
  let v4 = kN.self;
  return !v4 || v2 === void 0x0 || v3 === void 0x0 ? (kd('event_perform', "event_perform called with an undefined event type/number - ev_* constants are not in the transpiler constant table, so the call performs nothing"), 0x0) : v2 === MJ && v3 >= Mz && v3 <= MC ? (v4.userEvent(v3 - Mz), 0x0) : v2 === Mh ? (v4.alarmEvent(v3), 0x0) : v2 === MP ? (v4.step(), 0x0) : v2 === MR ? (v4.create(), 0x0) : v2 === MD ? (v4.instance_destroy(), 0x0) : (kd("event_perform:" + v2 + ':' + v3, "event_perform(" + v2 + ',\x20' + v3 + ") is not dispatched"), 0x0);
}
kY(ME, 'event_perform');
var MZ = 0x0;
function MI(v2) {
  return MZ = v2 ? 0x1 : 0x0, 0x0;
}
kY(MI, 'action_set_relative');
function MW(v2, v3, v4) {
  let v5 = kN.self,
    v6 = MZ && v5 ? v5.x + v3 : v3,
    v8 = MZ && v5 ? v5.y + v4 : v4;
  return x(v6, v8, v2);
}
kY(MW, 'action_create_object');
function MU() {
  let v2 = kN.self;
  return v2 && v2.instance_destroy(), 0x0;
}
kY(MU, 'action_kill_object');
function MF(v2, v3) {
  let v4 = kN.self;
  return v4 && (MZ ? (v4.x += v2, v4.y += v3) : (v4.x = v2, v4.y = v3)), 0x0;
}
kY(MF, 'action_move_to');
function MG(v2) {
  let v3 = kN.self;
  return v3 && (v3.hspeed = MZ ? v3.hspeed + v2 : v2), 0x0;
}
kY(MG, 'action_set_hspeed');
function MX(v2) {
  let v3 = kN.self;
  return v3 && (v3.vspeed = MZ ? v3.vspeed + v2 : v2), 0x0;
}
kY(MX, 'action_set_vspeed');
function MH(v2, v3) {
  let v4 = kN.self;
  return v4 && (v4.gravity_direction = v2, v4.gravity = MZ ? v4.gravity + v3 : v3), 0x0;
}
kY(MH, 'action_set_gravity');
function ML(v2) {
  let v3 = kN.self;
  return v3 && (v3.friction = MZ ? v3.friction + v2 : v2), 0x0;
}
kY(ML, 'action_set_friction');
function Mm(v2, v3) {
  let v4 = kN.self;
  return v4 && (v4.alarm[v3] = MZ ? v4.alarm[v3] + v2 : v2), 0x0;
}
kY(Mm, 'action_set_alarm');
var Md = [0xe1, 0x10e, 0x13b, 0xb4, -0x1, 0x0, 0x87, 0x5a, 0x2d];
function Mw(v2, v3) {
  let v4 = kN.self;
  if (!v4) return 0x0;
  let v5 = String(v2),
    v6 = [];
  for (let v9 = 0x0; v9 < 0x9 && v9 < v5.length; v9++) v5.charAt(v9) === '1' && v6.push(Md[v9]);
  if (!v6.length) return 0x0;
  let v8 = v6[Math.floor(kv.next() * v6.length)];
  return v8 < 0x0 ? (v4.speed = 0x0, 0x0) : (v4.direction = v8, v4.speed = MZ ? v4.speed + v3 : v3, 0x0);
}
kY(Mw, 'action_move');
function o0(v2) {
  let v3 = w[v2];
  return v3 ? v3.w : 0x0;
}
kY(o0, 'sprite_get_width');
function o1(v2) {
  let v3 = w[v2];
  return v3 ? v3.h : 0x0;
}
kY(o1, 'sprite_get_height');
function o2(v2) {
  let v3 = w[v2];
  return v3 ? v3.ox : 0x0;
}
kY(o2, 'sprite_get_xoffset');
function o3(v2) {
  let v3 = w[v2];
  return v3 ? v3.oy : 0x0;
}
kY(o3, 'sprite_get_yoffset');
function o4() {
  return 0x0;
}
kY(o4, 'sprite_replace');
function o5(v2, v3, v4, v5, v6, v8, v9, vk) {
  let vO = w[v2];
  return vO && (Number(v4) === 0x2 && (vO.bb = [Number(v5), Number(v6), Number(v8), Number(v9)]), Number(vk) === 0x1 && (vO.precise = false)), 0x0;
}
kY(o5, 'sprite_collision_mask');
function o6() {
  return kN.room.w;
}
kY(o6, 'surface_get_width');
function o7() {
  return kN.room.h;
}
kY(o7, 'surface_get_height');
var o8 = -0x1;
function o9(v2, v3, v4, v5, v6, v8, v9, vk) {
  return k4 && k4.draw_sprite_part(v2, v3, v4, v5, v6, v8, v9, vk), 0x0;
}
kY(o9, 'draw_sprite_part');
function ok(v2, v3, v4, v5, v6, v8, v9) {
  return k4 && k4.draw_line_width_color(v2, v3, v4, v5, v6, ku(v8), ku(v9)), 0x0;
}
kY(ok, 'draw_line_width_color');
function oO(v2, v3, v4, v5, v6, v8, v9) {
  return ok(v2, v3, v4, v5, v6, v8, v9);
}
kY(oO, 'draw_line_width_colour');
function oM(v2, v3, v4, v5, v6) {
  if (!k4) return 0x0;
  let v8 = oV(v4),
    v9 = v5 > 0x0 ? v5 : k4.string_height('M');
  if (!(v6 > 0x0)) return k4.draw_text(v2, v3, v8), 0x0;
  let vk = v3;
  for (let vO of v8.split('\x0a')) {
    let vM = '';
    for (let vu of vO.split('\x20')) {
      let vf = vM ? vM + '\x20' + vu : vu;
      vM && k4.string_width(vf) > v6 ? (k4.draw_text(v2, vk, vM), vk += v9, vM = vu) : vM = vf;
    }
    k4.draw_text(v2, vk, vM), vk += v9;
  }
  return 0x0;
}
kY(oM, 'draw_text_ext');
function ou() {
  return 0x0;
}
kY(ou, 'draw_set_circle_precision');
function of(v2) {
  return k4 ? k4.string_width(oV(v2)) : 0x0;
}
kY(of, 'string_width');
function ov(v2) {
  return k4 ? k4.string_height(oV(v2)) : 0x0;
}
kY(ov, 'string_height');
function oV(v2) {
  let v3 = String(v2);
  return v3.indexOf('#') < 0x0 ? v3 : v3.replace(/\\#/g, '\x01').replace(/#/g, '\x0a').replace(/\u0001/g, '#');
}
kY(oV, 'hashnl');
var ol = {
  'draw_text'(v2, v3, v4, v5, ...v6) {
    return v2.draw_text(v3, v4, oV(v5), ...v6);
  },
  'draw_text_transformed'(v2, v3, v4, v5, ...v6) {
    return v2.draw_text_transformed(v3, v4, oV(v5), ...v6);
  }
};
function oS(v2) {
  if (!g.nomiss) return;
  let v3 = kN.first('obj_target');
  v3 && (v2.x = v3.x + (v3.sprite_width - v2.sprite_width) / 0x2);
}
kY(oS, 'nomiss_bar');
function op() {
  return s.invc < 0x1 && !g.invuln;
}
kY(op, 'vulnerable');
function oa() {
  return !g.invuln;
}
kY(oa, 'vulnerable_sans');
function oA(v2) {
  g.nomiss && v2.check && typeof v2.check == 'object' && (v2.check.x = v2.fatalx);
}
kY(oA, 'nomiss_check');
var os = new Map(),
  oc = new Map(),
  oy = kY(v2 => typeof v2 == 'string' || typeof v2 == 'number' ? String(v2) : null, 'assetKey');
function og() {
  os.clear(), oc.clear();
}
kY(og, 'resetAssetAudioState');
function oR(v2, v3, v4 = 0x0) {
  let v5 = oy(v2);
  if (v5 !== null && Number.isFinite(Number(v3))) {
    let v6 = Math.max(0x0, Math.min(0x1, Number(v3))),
      v8 = v4 > 0x0 ? Math.max(0x1, Math.round(v4 / 0x3e8 * 0x1e)) : 0x0;
    os.set(v5, {
      'from': v8 ? oP(v2) : v6,
      'to': v6,
      'start': kN.frame,
      'frames': v8
    });
  }
  return typeof v2 == 'string' || v2 && typeof v2 == 'object' ? kz(v2, v3, (Number(v4) || 0x0) * 0x1e / 0x3e8) : ky(v2, v3, v4);
}
kY(oR, 'audio_sound_gain');
function oD(v2, v3) {
  let v4 = oy(v2);
  v4 !== null && Number.isFinite(Number(v3)) && oc.set(v4, Number(v3)), kV(v2, v3);
  let v5 = v2 && typeof v2 == 'object' ? v2 : typeof v2 == 'string' && !T() ? kc(v2) : null;
  if (v5 && typeof v5 == 'object' && 'preservesPitch' in v5) try {
    v5.preservesPitch = Number(v3) === 0x1;
  } catch {}
  if (typeof v2 == 'string' && !T() && Number(v3) > 0x0) {
    let v6 = kc(v2);
    if (v6 && typeof v6 == 'object' && v6.paused !== void 0x0 && !v6.ended) try {
      v6.playbackRate = Number(v3);
    } catch {}
  }
  return 0x0;
}
kY(oD, 'audio_sound_pitch');
function oh(v2) {
  let v3 = oy(v2);
  return v3 !== null && oc.has(v3) ? oc.get(v3) : v2 && v2.playbackRate || 0x1;
}
kY(oh, 'audio_sound_get_pitch');
function oP(v2) {
  let v3 = oy(v2);
  if (v3 !== null && os.has(v3)) {
    let v4 = os.get(v3);
    if (!v4.frames) return v4.to;
    let v5 = Math.max(0x0, Math.min(0x1, (kN.frame - v4.start) / v4.frames));
    return v4.from + (v4.to - v4.from) * v5;
  }
  return v2 && v2.volume !== void 0x0 ? v2.volume : 0x1;
}
kY(oP, 'audio_sound_get_gain');
var oT = kY(v2 => typeof v2 == 'string' && !T() ? kc(v2) : v2, 'liveOf');
function oJ(v2) {
  return kS(oT(v2)), 0x0;
}
kY(oJ, 'audio_pause_sound');
function oN(v2) {
  let v3 = typeof v2 == 'string' && !T() ? kc(v2) : v2;
  return v3 && v3.paused && !v3.ended && kA(v3), 0x0;
}
kY(oN, 'audio_resume_sound');
function oz() {
  return kJ(), 0x0;
}
kY(oz, 'audio_stop_all');
var oq = new Map(),
  oY = kY((v2, v3) => String(v2) + '/' + String(v3), 'iniKey');
function oB() {
  return 0x0;
}
kY(oB, 'ini_open');
function oQ() {
  return 0x0;
}
kY(oQ, 'ini_open_from_string');
function oj() {
  return '';
}
kY(oj, 'ini_close');
function ox(v2, v3, v4) {
  let v5 = oY(v2, v3);
  if (oq.has(v5)) {
    let v6 = Number(oq.get(v5));
    return Number.isFinite(v6) ? v6 : 0x0;
  }
  return v4 === void 0x0 ? 0x0 : v4;
}
kY(ox, 'ini_read_real');
function oK(v2, v3, v4) {
  let v5 = oY(v2, v3);
  return oq.has(v5) ? String(oq.get(v5)) : v4 === void 0x0 ? '' : v4;
}
kY(oK, 'ini_read_string');
function ob(v2, v3, v4) {
  return oq.set(oY(v2, v3), Number(v4)), 0x0;
}
kY(ob, 'ini_write_real');
function oC(v2, v3, v4) {
  return oq.set(oY(v2, v3), String(v4)), 0x0;
}
kY(oC, 'ini_write_string');
function oE(v2, v3) {
  return oq.has(oY(v2, v3)) ? 0x1 : 0x0;
}
kY(oE, 'ini_key_exists');
function oZ(v2) {
  let v3 = String(v2) + '/';
  for (let v4 of oq.keys()) if (v4.startsWith(v3)) return 0x1;
  return 0x0;
}
kY(oZ, 'ini_section_exists');
function oI() {
  return 0x0;
}
kY(oI, 'file_exists');
function oW() {
  return 0x0;
}
kY(oW, 'file_delete');
function oU() {
  return 0x0;
}
kY(oU, 'file_rename');
function oF() {
  return -0x1;
}
kY(oF, 'file_text_open_read');
function oG() {
  return -0x1;
}
kY(oG, 'file_text_open_write');
function oX() {
  return -0x1;
}
kY(oX, 'file_text_open_append');
function oH() {
  return 0x0;
}
kY(oH, 'file_text_close');
function oL() {
  return '';
}
kY(oL, 'file_text_read_string');
function om() {
  return 0x0;
}
kY(om, 'file_text_read_real');
function od() {
  return '';
}
kY(od, 'file_text_readln');
function ow() {
  return 0x0;
}
kY(ow, 'file_text_write_string');
function u0() {
  return 0x0;
}
kY(u0, 'file_text_write_real');
function u1() {
  return 0x0;
}
kY(u1, 'file_text_writeln');
function u2() {
  return 0x1;
}
kY(u2, 'file_text_eof');
function u3() {
  return -0x1;
}
kY(u3, 'buffer_create');
function u4() {
  return 0x0;
}
kY(u4, 'buffer_write');
function u5() {
  return 0x0;
}
kY(u5, 'buffer_read');
function u6() {
  return 0x0;
}
kY(u6, 'buffer_delete');
function u7() {
  return 0x0;
}
kY(u7, 'buffer_get_size');
function u8() {
  return -0x1;
}
kY(u8, 'buffer_save_async');
function u9() {
  return -0x1;
}
kY(u9, 'buffer_load_async');
function uk() {
  return 0x0;
}
kY(uk, 'buffer_async_group_begin');
function uO() {
  return -0x1;
}
kY(uO, 'buffer_async_group_end');
function uM() {
  return 0x0;
}
kY(uM, 'buffer_async_group_option');
function uu() {
  return '';
}
kY(uu, 'json_encode');
function uf() {
  return -0x1;
}
kY(uf, 'json_decode');
function uv() {
  return 0x0;
}
kY(uv, 'steam_file_write_file');
function uV() {
  return 0x0;
}
kY(uV, 'steam_file_exists');
function ul() {
  return 0x0;
}
kY(ul, 'steam_is_overlay_enabled');
function uS() {
  return -0x1;
}
kY(uS, 'get_string_async');
function up() {
  return 0x0;
}
kY(up, 'window_center');
function ua() {
  return 0x0;
}
kY(ua, 'window_set_position');
function uA() {
  return 0x0;
}
kY(uA, 'window_get_x');
function us() {
  return 0x0;
}
kY(us, 'window_get_y');
function uc() {
  return 0x0;
}
kY(uc, 'window_set_fullscreen');
function uy() {
  return 0x0;
}
kY(uy, 'window_get_fullscreen');
function ug() {
  return 0x0;
}
kY(ug, 'window_set_caption');
function uR() {
  return '';
}
kY(uR, 'window_get_caption');
function uD() {
  return 0x0;
}
kY(uD, 'window_set_size');
function uh() {
  return kN.room.w;
}
kY(uh, 'window_get_width');
function uP() {
  return kN.room.h;
}
kY(uP, 'window_get_height');
function uT() {
  return kN.room.w;
}
kY(uT, 'display_get_width');
function uJ() {
  return kN.room.h;
}
kY(uJ, 'display_get_height');
var uN = {
    'restart': null,
    'go': null,
    'canStand': null,
    'fled': null,
    'exit': null,
    'boot': null
  },
  uz = 'quit',
  uq = null;
function uY(v2) {
  let v3 = String(v2);
  if (s.inbattle || uN.go) {
    if (s.battleover) return 0x0;
    let v4 = s.fightRoom || 'room_battle';
    if (uN.go && uN.canStand && uN.canStand(v3, v4)) return uq = v3, 0x0;
    if (v4 === 'room_gameover' || v3 === 'room_gameover') return s.battleover = "ut-lose", 0x0;
    let v5 = kN.first('obj_battlecontroller');
    if (v5 && v5.runaway === 0x1 && s.flag && s.flag[0xb] === 0x1) {
      let v8 = uN.fled ? uN.fled(v3) : null;
      return v8 ? (uq = v8, 0x0) : (s.battleover = uz, 0x0);
    }
    let v6 = uN.exit ? uN.exit(v3, kN.self) : null;
    return v6 ? (uq = v6, 0x0) : (s.battleover = "ut-win", 0x0);
  }
  return kd('room_goto', "room_goto(" + v3 + ") - no battle is running"), 0x0;
}
kY(uY, 'room_goto');
function uB() {
  let v2 = uq;
  return uq = null, v2;
}
kY(uB, 'takeRoomChange');
function uQ() {
  return uY('next');
}
kY(uQ, 'room_goto_next');
var uj = false;
function ux() {
  return s.inbattle && uN.restart ? (uj = true, 0x0) : (kd('room_restart', "room_restart() - the sim restarts a fight through its own shell"), 0x0);
}
kY(ux, 'room_restart');
function uK() {
  let v2 = uj;
  return uj = false, v2;
}
kY(uK, 'takeRoomRestart');
function ub() {
  return uN.boot && uN.go && (uq = uN.boot('end'), uq) || kd('game_end', "game_end() ignored"), 0x0;
}
kY(ub, 'game_end');
function uC() {
  return uN.boot && uN.go && (uq = uN.boot('restart'), uq) || kd('game_restart', "game_restart() ignored"), 0x0;
}
kY(uC, 'game_restart');
function uE() {
  return 0x0;
}
kY(uE, 'sleep_x');
function uZ() {
  return 0x0;
}
kY(uZ, 'ossafe_savedata_save');
function uI() {
  return 0x0;
}
kY(uI, 'ossafe_savedata_load');
var uW = kN.room.w,
  uU = kN.room.h,
  uF = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  uG = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  uX = [0x280, 0x280, 0x280, 0x280, 0x280, 0x280, 0x280, 0x280],
  uH = [0x1e0, 0x1e0, 0x1e0, 0x1e0, 0x1e0, 0x1e0, 0x1e0, 0x1e0],
  uL = 'room_battle',
  um = 'room_battle',
  ud = 0x0,
  uw = 0x0,
  f0 = 0x1,
  f1 = 0x4,
  f2 = -0x1,
  f3 = 0x0,
  f4 = 0x0,
  f5 = 0x0;
function f6(v2) {
  return String(v2).length;
}
kY(f6, 'string_byte_length');
function f7() {
  return 0x0;
}
kY(f7, 'extension_stubfunc_real');
var f8 = [],
  f9 = kY((v2, v3) => v3 === v2 || (typeof v3 == 'function' ? v2 instanceof v3 : v3 != null && v2.is(String(v3))), 'kindMatch');
function fk(v2) {
  kN.remove(v2), v2.destroyed = true, v2.__deactivated = true, f8.push(v2);
}
kY(fk, 'deactivate');
function fO(v2) {
  let v3 = kN.self;
  for (let v4 of kN.list.slice()) v4.destroyed || v2 && v4 === v3 || fk(v4);
  return 0x0;
}
kY(fO, 'instance_deactivate_all');
function fM(v2) {
  for (let v3 of kN.list.slice()) v3.destroyed || !f9(v3, v2) || fk(v3);
  return 0x0;
}
kY(fM, 'instance_deactivate_object');
function fu(v2) {
  let v3 = [],
    v4 = [];
  for (let v5 of f8) (v2(v5) ? v3 : v4).push(v5);
  if (!v3.length) return 0x0;
  f8 = v4;
  for (let v6 of v3) v6.destroyed = false, v6.__deactivated = false, kN.list.push(v6);
  return kN.reindex(), 0x0;
}
kY(fu, 'reactivate');
function ff(v2) {
  return fu(v3 => f9(v3, v2));
}
kY(ff, 'instance_activate_object');
function fv() {
  return fu(() => true);
}
kY(fv, 'instance_activate_all');
function fV() {
  f8 = [];
}
kY(fV, 'dropDeactivated');
function fl(v2, v3, v4) {
  for (let v5 of kN.all(v4)) {
    let v6 = Math.abs(v5.sprite_width) || 0x1,
      v8 = Math.abs(v5.sprite_height) || 0x1;
    if (v2 >= v5.x && v2 <= v5.x + v6 && v3 >= v5.y && v3 <= v5.y + v8) return v5;
  }
  return null;
}
kY(fl, 'instance_position');
function fS() {
  return 0x0;
}
kY(fS, 'randomize');
function fp() {
  return 0x0;
}
kY(fp, 'audio_channel_num');
function fa() {
  return 0x0;
}
kY(fa, 'steam_file_delete');
function fA() {
  return 0x0;
}
kY(fA, 'steam_initialised');
var fs = 0x0,
  fc = [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  fy = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  fg = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  fR = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  fD = 0x280,
  fh = 0x1e0,
  fP = 0x280,
  fT = 0x1e0,
  fJ = -0x1,
  fN = '',
  fz = 0x0,
  fq = 0x0,
  fY = '';
function fB() {
  uF.fill(0x0), uG.fill(0x0), uX.fill(0x280), uH.fill(0x1e0), kw.clear(), O0 = 0x1, MZ = 0x0, fY = '', uj = false, uq = null, uN.go = null, uN.canStand = null, uN.fled = null, uN.exit = null, uN.boot = null, oq.clear(), f8 = [], os.clear(), oc.clear(), delete s.background_color;
}
kY(fB, 'resetUtRuntimeForFight'), k8(fB);
function fQ() {
  let v2 = new Map();
  for (let [v3, v4] of os) v2.set(v3, {
    ...v4
  });
  return {
    'ini': new Map(oq),
    'vx': uF.slice(),
    'vy': uG.slice(),
    'vw': uX.slice(),
    'vh': uH.slice(),
    'pendingRoom': uq,
    'roomRestartPending': uj,
    'deactivated': f8.slice(),
    'actionRelative': MZ,
    'keyboard_lastchar': fY,
    'gains': v2,
    'pitches': new Map(oc)
  };
}
kY(fQ, 'utRuntimeSave');
var fj = Symbol.for("ut.zeroArray.raw"),
  fx = kY(v2 => {
    let v3 = v2.length;
    if (v3 === 0x0) return false;
    for (let v4 = 0x0; v4 < v3; v4++) {
      let v5 = v2.charCodeAt(v4);
      if (v5 < 0x30 || v5 > 0x39) return false;
    }
    return true;
  }, 'allDigits');
function fK(v2) {
  let v3 = v2 && v2[fj] || (Array.isArray(v2) ? v2 : []);
  return new Proxy(v3, {
    'get'(v4, v5) {
      return v5 === fj ? v4 : typeof v5 == 'string' && fx(v5) && v4[v5] === void 0x0 ? 0x0 : v4[v5];
    }
  });
}
kY(fK, 'zeroArray');
var fb = {
  'ut': kK
};
function fC(v2, v3) {
  fb[v2] = v3;
}
kY(fC, 'registerArrayGlobals');
function fE() {
  let v2 = fb[n];
  if (v2) for (let v3 of v2) {
    let v4 = s[v3];
    Array.isArray(v4) && !v4[fj] && !v4.__raw && (s[v3] = fK(v4));
  }
}
kY(fE, 'rewrapArrays');
function fZ(v2) {
  if (fE(), !!v2) {
    oq.clear();
    for (let [v3, v4] of v2.ini) oq.set(v3, v4);
    for (let v5 = 0x0; v5 < 0x8; v5++) uF[v5] = v2.vx[v5], uG[v5] = v2.vy[v5], uX[v5] = v2.vw[v5], uH[v5] = v2.vh[v5];
    uq = v2.pendingRoom, uj = v2.roomRestartPending, f8 = v2.deactivated.slice(), MZ = v2.actionRelative, fY = v2.keyboard_lastchar, os.clear();
    for (let [v6, v8] of v2.gains) os.set(v6, {
      ...v8
    });
    oc.clear();
    for (let [v9, vk] of v2.pitches) oc.set(v9, vk);
  }
}
kY(fZ, 'utRuntimeRestore');
var fI = 0x0,
  fW = 0x0;
function fU(v2, v3, v4) {
  if (v2 == null || v2 === -0x1) return -0x1;
  let v5 = String(v2);
  if (v4 === 0x1 || v4 === true) return e(v5);
  let v6 = k9[v5],
    v8 = v6 === void 0x0 && /^(snd_|mus_sfx_)/.test(String(v5));
  if (v6 > 0x0 && v6 <= 0xa || v8) {
    let v9 = k1(v5);
    if (v9) return v9;
  }
  return kq(v5, 0x1, false);
}
kY(fU, 'audio_play_sound');
function fF(v2) {
  return k3(v2), 0x0;
}
kY(fF, 'audio_stop_sound');
function fG() {
  return 0x0;
}
kY(fG, 'audio_pause_all');
function fX() {
  return 0x0;
}
kY(fX, 'audio_resume_all');
function fH(v2, v3, v4) {
  let v5 = kN.self;
  if (!v5) return 0x0;
  let v6 = MZ ? v5.x + v2 : v2,
    v8 = MZ ? v5.y + v3 : v3,
    v9 = kT(v5.x, v5.y, v6, v8);
  return v5.speed = v4, v5.direction = v9, 0x0;
}
kY(fH, 'action_move_point');
function fL(v2, v3) {
  let v4 = kN.self;
  return v4 ? MZ ? (v4.hspeed += kg(v3, v2), v4.vspeed += kD(v3, v2), 0x0) : (v4.direction = v2, v4.speed = v3, 0x0) : 0x0;
}
kY(fL, 'action_set_motion');
function fm(v2, v3) {
  let v4 = kN.self;
  if (!v4) return 0x0;
  if (kd('instance_change', "instance_change(" + (v2 && v2.name) + ") - the port keeps the instance and runs the new Create"), v3 && v2 && v2.prototype && typeof v2.prototype.create == 'function') try {
    v2.prototype.create.call(v4);
  } catch {}
  return 0x0;
}
kY(fm, 'instance_change');
function fd(v2, v3, v4, v5, v6, v8, v9, vk, vO, vM) {
  let vu = k4;
  if (!vu || !vu.ctx) return 0x0;
  let vf = vu.color;
  v9 !== void 0x0 && (vu.color = ku(v9));
  let vv = ku(v9),
    vV = vk === void 0x0 ? vv : ku(vk),
    vl = vu.ctx;
  if (!vM && vV !== vv && typeof vl.createLinearGradient == 'function') {
    let vS = vl.createLinearGradient(v2, v3, (v4 + v6) / 0x2, (v5 + v8) / 0x2);
    if (vS && typeof vS.addColorStop == 'function') return vS.addColorStop(0x0, vv), vS.addColorStop(0x1, vV), vl.save(), vl.globalAlpha = Math.max(0x0, Math.min(0x1, vu.alpha)), vl.fillStyle = vS, vl.beginPath(), vl.moveTo(v2, v3), vl.lineTo(v4, v5), vl.lineTo(v6, v8), vl.closePath(), vl.fill(), vl.restore(), vu.color = vf, 0x0;
  }
  return vu.draw_triangle(v2, v3, v4, v5, v6, v8, vM), vu.color = vf, 0x0;
}
kY(fd, 'draw_triangle_color');
var fw = fd;
function v0(v2, v3, v4, v5, v6, v8, v9) {
  let vk = k4;
  if (!vk || !vk.ctx) return 0x0;
  let vO = vk.ctx,
    vM = (v2 + v4) / 0x2,
    vu = (v3 + v5) / 0x2,
    vf = Math.abs(v4 - v2) / 0x2,
    vv = Math.abs(v5 - v3) / 0x2;
  if (!(vf > 0x0) || !(vv > 0x0)) return 0x0;
  vO.save(), vO.globalAlpha = Math.max(0x0, Math.min(0x1, vk.alpha)), vO.translate(vM, vu), vO.scale(0x1, vv / vf);
  let vV = ku(v6);
  if (typeof vO.createRadialGradient == 'function') {
    let vl = vO.createRadialGradient(0x0, 0x0, 0x0, 0x0, 0x0, vf);
    vl && typeof vl.addColorStop == 'function' && (vl.addColorStop(0x0, ku(v6)), vl.addColorStop(0x1, ku(v8)), vV = vl);
  }
  return vO.beginPath(), vO.arc(0x0, 0x0, vf, 0x0, Math.PI * 0x2), v9 ? (vO.strokeStyle = vV, vO.stroke()) : (vO.fillStyle = vV, vO.fill()), vO.restore(), 0x0;
}
kY(v0, 'draw_ellipse_color');
var v1 = v0;
export { kK as a, kb as b, kC as c, kE as d, kZ as e, kI as f, kW as g, kU as h, kF as i, kG as j, kX as k, kH as l, kL as m, O1 as n, O2 as o, O3 as p, O4 as q, O5 as r, O6 as s, O7 as t, O8 as u, O9 as v, Ok as w, OO as x, OM as y, Ou as z, Of as A, Ov as B, OV as C, Ol as D, OS as E, Op as F, Oa as G, OA as H, Os as I, Oc as J, Oy as K, Og as L, OR as M, OD as N, Oh as O, OP as P, OT as Q, OJ as R, ON as S, Oz as T, Oq as U, OY as V, OB as W, OQ as X, Oj as Y, Ox as Z, OK as _, Ob as $, OC as aa, OE as ba, OZ as ca, OI as da, OW as ea, OU as fa, OF as ga, OG as ha, OX as ia, Od as ja, Ow as ka, M0 as la, M1 as ma, M2 as na, M3 as oa, M4 as pa, M5 as qa, M6 as ra, M7 as sa, M8 as ta, M9 as ua, Mk as va, MM as wa, Mu as xa, Mf as ya, Mv as za, MV as Aa, Ml as Ba, MS as Ca, Mp as Da, Ma as Ea, MA as Fa, Ms as Ga, Mc as Ha, My as Ia, Mg as Ja, MR as Ka, MD as La, Mh as Ma, MP as Na, MT as Oa, MJ as Pa, MN as Qa, Mz as Ra, Mq as Sa, MY as Ta, MB as Ua, MQ as Va, Mj as Wa, Mx as Xa, MK as Ya, Mb as Za, MC as _a, ME as $a, MI as ab, MW as bb, MU as cb, MF as db, MG as eb, MX as fb, MH as gb, ML as hb, Mm as ib, Mw as jb, o0 as kb, o1 as lb, o2 as mb, o3 as nb, o4 as ob, o5 as pb, o6 as qb, o7 as rb, o8 as sb, o9 as tb, ok as ub, oO as vb, oM as wb, ou as xb, of as yb, ov as zb, oV as Ab, ol as Bb, oS as Cb, op as Db, oa as Eb, oA as Fb, og as Gb, oR as Hb, oD as Ib, oh as Jb, oP as Kb, oJ as Lb, oN as Mb, oz as Nb, oB as Ob, oQ as Pb, oj as Qb, ox as Rb, oK as Sb, ob as Tb, oC as Ub, oE as Vb, oZ as Wb, oI as Xb, oW as Yb, oU as Zb, oF as _b, oG as $b, oX as ac, oH as bc, oL as cc, om as dc, od as ec, ow as fc, u0 as gc, u1 as hc, u2 as ic, u3 as jc, u4 as kc, u5 as lc, u6 as mc, u7 as nc, u8 as oc, u9 as pc, uk as qc, uO as rc, uM as sc, uu as tc, uf as uc, uv as vc, uV as wc, ul as xc, uS as yc, up as zc, ua as Ac, uA as Bc, us as Cc, uc as Dc, uy as Ec, ug as Fc, uR as Gc, uD as Hc, uh as Ic, uP as Jc, uT as Kc, uJ as Lc, uN as Mc, uz as Nc, uY as Oc, uB as Pc, uQ as Qc, ux as Rc, uK as Sc, ub as Tc, uC as Uc, uE as Vc, uZ as Wc, uI as Xc, uW as Yc, uU as Zc, uF as _c, uG as $c, uX as ad, uH as bd, uL as cd, um as dd, ud as ed, uw as fd, f0 as gd, f1 as hd, f2 as id, f3 as jd, f4 as kd, f5 as ld, f6 as md, f7 as nd, fO as od, fM as pd, ff as qd, fv as rd, fV as sd, fl as td, fS as ud, fp as vd, fa as wd, fA as xd, fs as yd, fc as zd, fy as Ad, fg as Bd, fR as Cd, fD as Dd, fh as Ed, fP as Fd, fT as Gd, fJ as Hd, fN as Id, fz as Jd, fq as Kd, fY as Ld, fB as Md, fQ as Nd, fK as Od, fC as Pd, fZ as Qd, fI as Rd, fW as Sd, fU as Td, fF as Ud, fG as Vd, fX as Wd, fH as Xd, fL as Yd, fm as Zd, fd as _d, fw as $d, v0 as ae, v1 as be, kx as ce };