const b = function () {
  let kg = true;
  return function (ks, kl) {
    const kV = {
      YaMGo: function (kH, ku) {
        return kH !== ku;
      },
      FaHlB: "PDvnG",
      NDHLF: function (kH, ku) {
        return kH === ku;
      },
      PEINl: "HWIui",
      ajKuf: "yOcPP"
    };
    const kH = kg ? function () {
      if (kV.YaMGo(kV.FaHlB, kV.FaHlB)) {
        if (!kV.has(kH)) {
          d.add(s);
          n("Browser storage is full - " + r + " was not saved", {
            kind: "error",
            ms: 6000
          });
        }
        return false;
      } else if (kl) {
        if (kV.NDHLF(kV.PEINl, kV.ajKuf)) {
          GZ.strokeStyle = GU.faint;
          GO.lineWidth = 1;
          GB.strokeRect(Gf + 0.5, Gv + 0.5, 19, 17);
          let kI = /[\[\]<>\/]/.test(GX);
          let kP = kI ? 1 : 2;
          let kz = Gh.string_width(GF, "fnt_main") * kP;
          let kS = kI ? 1 : Gc === "`" ? 0 : GJ === "," || GL === "." ? -12 : -6;
          GD.save();
          GE.beginPath();
          Gi.rect(Gw + 1, GY + 1, 18, 16);
          GC.clip();
          GT.draw_set_color(GR);
          if (kP === 1) {
            GM.draw_text(GN + Gd.round((20 - kz) / 2), Gg + kS, __DECODE_0__, Gl);
          } else {
            GW.draw_text_transformed(Gr + Gq.round((20 - kz) / 2), GV + kS, GH, 2, 2, 0);
          }
          Gu.restore();
        } else {
          const kj = kl.apply(ks, arguments);
          kl = null;
          return kj;
        }
      }
    } : function () {};
    kg = false;
    return kH;
  };
}();
const O = b(this, function () {
  const kC = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const kT = new RegExp("[MCzIbHWRGBVzVqJNbMNyEOMOZUyxNYMWHJXzEUDMRGIJDqNXGWWqAXHEZfJZVGYDAYMCyDPHyHPXkPPHAOjPQBTERBORXSkRVFkSWJBCWAfxjDXERPSCHkFfBXkLzESPXBESjyJFMFkYUWAUCTGxKUBxKqHLMRxYNTAWSMALXfZNHAbfbkYAkAVHSLSSBNQjGLyHBqPyVSRJJPW]", "g");
  const kR = "MloCczaIbHlWhRosGt;127.B0V.0z.V1;dqJelNtbaMNyrunEOMeOsZUiyxNmYMWHJ.cXzoEUDmM;wwwR.dGIeJDqltaNXrunGesim.coWm;drWqsAXHEZimf.JloZVcalGYDAYMChoystDPHyH;P.deXklPPHtaruAOjPQBnesimT.paERgeBs.devORXSkRVFkSWJBCWAfxjDXERPSCHkFfBXkLzESPXBESjyJFMFkYUWAUCTGxKUBxKqHLMRxYNTAWSMALXfZNHAbfbkYAkAVHSLSSBNQjGLyHBqPyVSRJJPW".replace(kT, "").split(";");
  let kg;
  let ks;
  let kl;
  let kW;
  const kr = function (kj, ka, km) {
    {
      if (kj.length != ka) {
        return false;
      }
      for (let K3 = 0; K3 < ka; K3++) {
        for (let K4 = 0; K4 < km.length; K4 += 2) {
          {
            if (K3 == km[K4] && kj.charCodeAt(K3) != km[K4 + 1]) {
              return false;
            }
          }
        }
      }
      return true;
    }
  };
  const kq = function (kj, ka, km) {
    return kr(ka, km, kj);
  };
  const kH = function (kj, ka, km) {
    return kq(ka, kj, km);
  };
  const kA = function (kj, ka, km) {
    return kH(ka, km, kj);
  };
  for (let kj in kC) {
    if (kr(kj, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      {
        kg = kj;
        break;
      }
    }
  }
  for (let ka in kC[kg]) {
    {
      if (kA(6, ka, [5, 110, 0, 100])) {
        {
          ks = ka;
          break;
        }
      }
    }
  }
  for (let km in kC[kg]) {
    {
      if (kH(km, [7, 110, 0, 108], 8)) {
        {
          kl = km;
          break;
        }
      }
    }
  }
  if (!(ks < "~")) {
    for (let K8 in kC[kg][kl]) {
      {
        if (kq([7, 101, 0, 104], K8, 8)) {
          {
            kW = K8;
            break;
          }
        }
      }
    }
  }
  if (!kg || !kC[kg]) {
    return;
  }
  const kI = kC[kg][ks];
  const kP = !!kC[kg][kl] && kC[kg][kl][kW];
  const kz = kI || kP;
  if (!kz) {
    return;
  }
  let kS = false;
  for (let KG = 0; KG < kR.length; KG++) {
    {
      const Ko = kR[KG];
      const Ky = Ko[0] === String.fromCharCode(46) ? Ko.slice(1) : Ko;
      const Kk = kz.length - Ky.length;
      const KK = kz.indexOf(Ky, Kk);
      const Kx = KK !== -1 && KK === Kk;
      if (Kx) {
        if (kz.length == Ko.length || Ko.indexOf(".") === 0) {
          kS = true;
        }
      }
    }
  }
});
O();
import { g } from "./c-ZQQWH6UG.js";
import { G as c, H as t, Pb as i, Ua as e, X as M, Y as d, ea as s, h as n, xb as r } from "./c-PBMEVLU6.js";
import { a, c as u, l as A } from "./c-XSSGDLV7.js";
var I = {};
const S = {
  API_VERSION: () => G7,
  DEV_TOOLS: () => o1,
  GROUPS: () => Gj,
  GROUP_LABEL: () => Ga,
  HOOKS: () => GF,
  ICONS: () => kZ,
  ICONS12: () => G4,
  LIMITS: () => yh,
  RESERVED: () => ot,
  TOKENS: () => ya,
  allTools: () => oy,
  applyDevMode: () => o8,
  assist: () => Gr,
  blit: () => k5,
  claimTick: () => GC,
  clearedByEscape: () => GH,
  closeModal: () => oV,
  comboFromEvent: () => of,
  comboLabel: () => oc,
  ctx: () => GZ,
  cycleSetting: () => y9,
  devMode: () => o5,
  dispatchPointer: () => y1,
  download: () => yU,
  drawBanner: () => kw,
  drawIcon: () => kJ,
  drawKey: () => kG,
  drawToasts: () => kb,
  drawTop: () => kY,
  emit: () => GD
};
function G0(kC, kT, kR) {
  return __DECODE_0__(kC - -182, kT);
}
S.failures = () => Gv;
S.fightLeft = () => Gl;
S.fightStarted = () => Gg;
S.frame = () => k2;
S.frameAfter = () => GI;
S.frameBefore = () => GQ;
S.getHost = () => GK;
S.getMode = () => Gb;
S.getTool = () => oG;
S.handleKeyDown = () => og;
S.handleKeyUp = () => os;
S.iconFor = () => G6;
S.install = () => Gy;
S.isAssisted = () => Gq;
S.isChromeHidden = () => GY;
S.isDevOnly = () => o7;
S.isHeld = () => oW;
S.isInstalled = () => Gx;
S.keyBindings = () => oM;
S.keyConflicts = () => oR;
S.keyTable = () => oN;
S.keyWidth = () => k9;
S.lessMotion = () => kf;
S.limitNote = () => yi;
S.limitSeen = () => yD;
S.limitShort = () => yL;
S.limitText = () => yJ;
S.limitWasSeen = () => yE;
S.listCommands = () => y4;
S.listSettings = () => yo;
S.listTools = () => ok;
S.liveToasts = () => yX;
S.modalOpen = () => oS;
S.modalPauses = () => oj;
S.msSinceModalClose = () => oP;
S.normalizeCombo = () => oB;
S.note = () => GS;
S.on = () => Gt;
S.onHookError = () => Gh;
S.onInstall = () => Gk;
S.onPointer = () => y0;
S.openModal = () => oq;
S.panel = () => k1;
S.perfClock = () => kL;
S.pickFile = () => yO;
S.playerFought = () => GV;
S.pref = () => yx;
S.presentBegin = () => kD;
S.provide = () => yk;
S.registerCommand = () => y3;
S.registerKey = () => oC;
S.registerSetting = () => y7;
S.registerTool = () => o9;
S.reserveTop = () => ky;
S.runCommand = () => y5;
S.session = () => GT;
S.setBanner = () => ki;
S.setChromeHidden = () => Gw;
S.setKeyGlyphs = () => k7;
S.setMode = () => Gp;
S.setPref = () => yp;
S.settingRows = () => yG;
S.showValue = () => y8;
S.speak = () => kX;
S.statusTags = () => ob;
S.stepModal = () => oa;
S.store = () => yZ;
S.timeJumped = () => Gz;
S.toast = () => yv;
S.toolAvailable = () => oK;
S.toolOn = () => ox;
S.topModal = () => oz;
S.touchUI = () => oI;
S.uiHooks = () => kU;
S.unregisterKey = () => oT;
S.use = () => yK;
S.useIcons = () => kB;
S.useTool = () => op;
S.withChrome = () => k0;
u(I, S);
A();
A();
var G4 = {
  play: ["............", "...#........", "...##.......", "...###......", "...####.....", "...#####....", "...#####....", "...####.....", "...###......", "...##.......", "...#........", "............"],
  dice: ["############", "#..........#", "#.##....##.#", "#.##....##.#", "#..........#", "#....##....#", "#....##....#", "#..........#", "#.##....##.#", "#.##....##.#", "#..........#", "############"],
  calendar: ["..#......#..", "############", "#..#....#..#", "############", "#..........#", "#.##.##.##.#", "#..........#", "#.##.##.##.#", "#..........#", "#.##.#######", "#.......####", "############"],
  trophy: [".##########.", "##.######.##", "#..######..#", "#..######..#", "##.######.##", "..########..", "...######...", "....####....", ".....##.....", ".....##.....", "...######...", "..########.."],
  hearts3: ["............", ".##.##......", "#######.....", "#######.....", ".#####......", "..###.##.##.", "...#.#######", ".....#######", "......#####.", ".......###..", "........#...", "............"],
  target: ["....####....", "..##....##..", ".#..####..#.", ".#.#....#.#.", "#.#..##..#.#", "#.#.####.#.#", "#.#.####.#.#", "#.#..##..#.#", ".#.#....#.#.", ".#..####..#.", "..##....##..", "....####...."],
  loop: ["...######...", "..#......#..", ".#........#.", "#....##....#", "#...####...#", "#...####...#", "#....##....#", ".#........#.", "..#.....#.#.", "...####..##.", "........###.", "............"],
  prev: ["............", ".##.....#..#", ".##....##.##", ".##...######", ".##..#######", ".##.########", ".##.########", ".##..#######", ".##...######", ".##....##.##", ".##.....#..#", "............"],
  next: ["............", "#..#.....##.", "##.##....##.", "######...##.", "#######..##.", "########.##.", "########.##.", "#######..##.", "######...##.", "##.##....##.", "#..#.....##.", "............"],
  restart: ["....####.#..", "..##....###.", ".#.....####.", ".#..........", "#...........", "#.....##....", "#.....##....", "#..........#", ".#.........#", ".#........#.", "..##....##..", "....####...."],
  door: [".#######....", ".#.....#....", ".#.....#....", ".#.....#..#.", ".#.....#..##", ".#..#..#####", ".#.....#..##", ".#.....#..#.", ".#.....#....", ".#.....#....", ".#.....#....", "############"],
  flask: ["...######...", "....#..#....", "....#..#....", "....#..#....", "...#....#...", "..#......#..", ".#........#.", "#.########.#", "#.#.####.#.#", "#.########.#", "#..........#", ".##########."],
  pencil: [".........##.", "........#..#", ".......#.#.#", "......#.#.#.", ".....#.#.#..", "....#.#.#...", "...#.#.#....", "..#.#.#.....", ".##..#......", ".###.#......", ".####.......", "............"],
  medal: [".##......##.", "..##....##..", "...##..##...", "....####....", "...######...", "..##....##..", ".##..##..##.", ".#..####..#.", ".#..####..#.", ".##..##..##.", "..##....##..", "...######..."],
  keyboard: ["............", "############", "#..........#", "#.#.#.#.#.##", "#..........#", "#.#.#.#.#.##", "#..........#", "#.#.####.#.#", "#..........#", "############", "............", "............"],
  search: ["..#####.....", ".#.....#....", "#..##...#...", "#.#......#..", "#........#..", "#........#..", ".#......#...", "..######....", ".......###..", "........###.", ".........###", "..........#."],
  signpost: [".....##.....", ".#########..", ".##########.", ".#########..", ".....##.....", "..#########.", ".##########.", "..#########.", ".....##.....", ".....##.....", ".....##.....", "...######..."],
  gear: ["....####....", ".##.#..#.##.", ".#..####..#.", "..########..", "###.#..#.###", "#..#....#..#", "#..#....#..#", "###.#..#.###", "..########..", ".#..####..#.", ".##.#..#.##.", "....####...."],
  grid: ["#####..#####", "#...#..#...#", "#...#..#...#", "#...#..#...#", "#####..#####", "............", "............", "#####..#####", "#...#..#...#", "#...#..#...#", "#...#..#...#", "#####..#####"],
  pie: ["....####....", "..##.####...", ".#...#####..", ".#...######.", "#....#######", "#....#######", "#..........#", "#..........#", ".#........#.", ".#........#.", "..##....##..", "....####...."],
  rewind: ["............", ".....#....#.", "....##...##.", "...###..###.", "..####.####.", ".##########.", ".##########.", "..####.####.", "...###..###.", "....##...##.", ".....#....#.", "............"],
  speed: ["............", ".#....#.....", ".##...##....", ".###..###...", ".####.####..", ".##########.", ".##########.", ".####.####..", ".###..###...", ".##...##....", ".#....#.....", "............"],
  pause: ["............", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "............"],
  step: ["............", "..#.....##..", "..##....##..", "..###...##..", "..####..##..", "..#####.##..", "..#####.##..", "..####..##..", "..###...##..", "..##....##..", "..#.....##..", "............"],
  stepback: ["............", "..##.....#..", "..##....##..", "..##...###..", "..##..####..", "..##.#####..", "..##.#####..", "..##..####..", "..##...###..", "..##....##..", "..##.....#..", "............"],
  snail: ["............", ".#.#........", ".#.#........", ".###..####..", "..#..#....#.", "..#.#..##..#", "..#.#.#..#.#", "..#.#.#.#..#", "..#.#..#..#.", "..##########", ".###########", "............"],
  floppy: ["##########..", "#.#....#.##.", "#.#....#.#.#", "#.#....#.#.#", "#.######...#", "#..........#", "#.########.#", "#.#......#.#", "#.#......#.#", "#.#......#.#", "#.#......#.#", "############"],
  tape: ["............", "############", "#..........#", "#.########.#", "#.#..##..#.#", "#.#.#..#.#.#", "#.#..##..#.#", "#.########.#", "#...####...#", "#..#....#..#", "############", "............"],
  export: [".....##.....", "....####....", "...######...", ".....##.....", ".....##.....", ".....##.....", "#....##....#", "#..........#", "#..........#", "#..........#", "############", "............"],
  import: [".....##.....", ".....##.....", ".....##.....", ".....##.....", "...######...", "....####....", "#....##....#", "#..........#", "#..........#", "#..........#", "############", "............"],
  warning: [".....##.....", ".....##.....", "....#..#....", "....#..#....", "...#.##.#...", "...#.##.#...", "..#..##..#..", "..#..##..#..", ".#........#.", ".#...##...#.", "#..........#", "############"],
  hitbox: ["##.##.##.##.", "#..........#", "............", "#...##.....#", "#...###.....", "....####...#", "#...#####...", "#...######.#", "....###.....", "#...#.##...#", ".......##...", ".##.##.##.##"],
  log: ["############", "#..........#", "#.##.#####.#", "#..........#", "#.##.####..#", "#..........#", "#.##.######.", "#..........#", "#.##.###...#", "#..........#", "#.##.#####.#", "############"],
  bars: ["#...........", "#.......##..", "#.......##..", "#.......##..", "#...##..##..", "#...##..##..", "#...##..##..", "#...##..##..", "#.#.##..##..", "#.#.##..##..", "#.#.##..##..", "############"],
  dpad: ["....####....", "....#..#....", "....#..#....", "....#..#....", "#####..#####", "#..........#", "#..........#", "#####..#####", "....#..#....", "....#..#....", "....#..#....", "....####...."],
  camera: ["............", "...####.....", "############", "#..........#", "#...####...#", "#..#....#..#", "#..#.##.#..#", "#..#....#..#", "#...####...#", "#..........#", "############", "............"],
  film: ["############", "#.#.#.#.#.##", "############", "#....##....#", "#...#..#...#", "#..#....#..#", "#...#..#...#", "#....##....#", "############", "#.#.#.#.#.##", "############", "............"],
  viewfinder: ["###......###", "#..........#", "#..........#", "............", ".....##.....", "....####....", "....####....", ".....##.....", "............", "#..........#", "#..........#", "###......###"],
  recdot: ["....####....", "..##....##..", ".#........#.", ".#..####..#.", "#..######..#", "#..######..#", "#..######..#", "#..######..#", ".#..####..#.", ".#........#.", "..##....##..", "....####...."],
  outline: ["##.##.##.##.", "#..........#", "............", "#...####...#", "#..#....#..#", "...#....#...", "...#....#...", "#..#....#..#", "#...####...#", "............", "#..........#", ".##.##.##.##"],
  contrast: ["....####....", "..##.#####..", ".#...######.", ".#...######.", "#....#######", "#....#######", "#....#######", "#....#######", ".#...######.", ".#...######.", "..##.#####..", "....####...."],
  noflash: ["#.....####..", ".#...####...", "..#.####....", "...####.....", "..#######...", ".....###....", "....###.#...", "...###...#..", "..###.....#.", "..##.......#", "..#.........", "............"],
  hand: ["....##......", "....##......", "....##......", "....######..", "....#######.", ".##.########", ".###########", "..##########", "...#########", "....#######.", ".....######.", ".....######."],
  bug: ["..#......#..", "...#....#...", "....####....", "#..######..#", ".#.#.##.#.#.", "...######...", "###.####.###", "...######...", ".#.#.##.#.#.", "#..######..#", "....####....", "............"],
  eye: ["............", "............", "....####....", "..##....##..", ".#...##...#.", "#...####...#", "#...####...#", ".#...##...#.", "..##....##..", "....####....", "............", "............"],
  robot: [".....##.....", ".....##.....", ".##########.", ".#........#.", "##.##..##.##", "##.##..##.##", ".#........#.", ".#..####..#.", ".##########.", "...#....#...", ".##########.", ".#.#.##.#.#."],
  shield: [".##########.", "#..........#", "#.###..###.#", "#.###..###.#", "#..........#", "#.###..###.#", ".#.##..##.#.", ".#.##..##.#.", "..#......#..", "...#....#...", "....#..#....", ".....##....."],
  skull: ["...######...", ".##########.", "############", "###..##..###", "##....#...##", "###..##..###", ".#####.####.", "..###..###..", "...######...", "...#.##.#...", "...######...", "............"],
  star: [".....##.....", ".....##.....", "....####....", "....####....", "############", ".##########.", "..########..", "...######...", "...######...", "..###..###..", "..##....##..", ".#........#."],
  sword: ["..........##", ".........###", "........###.", ".......###..", "......###...", ".....###....", ".#..###.....", ".##.##......", "..###.......", "..###.......", ".##.##......", "##...#......"],
  crown: ["............", "#....##....#", "##..####..##", "###.####.###", "############", "############", "##.##..##.##", "############", "############", "............", "############", "............"],
  soul: ["............", ".###....###.", "#####..#####", "############", "############", "############", ".##########.", "..########..", "...######...", "....####....", ".....##.....", "............"],
  slider: ["............", "...##.......", "############", "...##.......", "............", "........##..", "############", "........##..", "............", ".....##.....", "############", ".....##....."]
};
var G5 = {
  resume: "play",
  "hub:resume": "play",
  "practice:resume": "play",
  random: "dice",
  "hub:random": "dice",
  daily: "calendar",
  "challenge.daily": "calendar",
  "hub:daily": "calendar",
  "practice:daily": "calendar",
  rush: "trophy",
  "challenge.rush": "trophy",
  "hub:rush": "trophy",
  gauntlet: "hearts3",
  "challenge.gauntlet": "hearts3",
  "hub:gauntlet": "hearts3",
  "practice:gauntlet": "hearts3",
  "practice:gauntlet:again": "hearts3",
  "practice:gauntlet:daily": "hearts3",
  practice: "target",
  "practice.pick": "target",
  "practice.here": "loop",
  "practice.prev": "prev",
  "practice.next": "next",
  "practice.restart": "restart",
  "practice.end": "door",
  lab: "flask",
  editor: "pencil",
  "hub:editor": "pencil",
  "challenge.badges": "medal",
  "hub:badges": "medal",
  keys: "keyboard",
  "hub:help": "keyboard",
  palette: "search",
  tour: "signpost",
  "hub:tour": "signpost",
  config: "gear",
  "hub:config": "gear",
  "hub:open": "grid",
  "hub:stats": "pie",
  "hub:star": "star",
  "hub:replays": "tape",
  rewind: "rewind",
  "tl-pause": "pause",
  "hub:pause": "pause",
  "tl-step": "step",
  "hub:step": "step",
  "tl-back": "stepback",
  "tl-slow": "snail",
  "hub:slow": "snail",
  "tl-speed": "speed",
  "hub:speed": "speed",
  "tl-states": "floppy",
  "tl-replays": "tape",
  "timeline:export-current": "export",
  "timeline:import": "import",
  danger: "warning",
  inspector: "hitbox",
  damagelog: "log",
  perf: "bars",
  inputs: "dpad",
  screenshot: "camera",
  gifclip: "film",
  clipbuffer: "recdot",
  photomode: "viewfinder",
  "a11y.outlines": "outline",
  "a11y.contrast": "contrast",
  "a11y.flash": "noflash",
  "a11y.touch": "hand",
  "hub:debugmenu": "bug",
  "hub:planner": "eye",
  "hub:autoplay": "robot",
  "hub:godmode": "shield",
  "hub:kill": "skull"
};
function G6(G, o = null) {
  let kW = String(G || "").replace(/^(tool|setting):/, "");
  return G5[kW] || (/^practice:rush:/.test(kW) ? "trophy" : null) || o;
}
a(G6, "iconFor");
var G7 = 1;
var G8 = null;
var G9 = false;
var GG = [];
var Go = null;
function Gy(G) {
  G8 = G || {};
  if (!G9) {
    G9 = true;
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("blur", ol);
    }
    for (let o of GG.splice(0)) {
      Gf("onInstall", o.owner, () => o(GZ()));
    }
  }
}
a(Gy, "install");
function Gk(G, o = "?") {
  G.owner = o;
  if (G9) {
    Gf("onInstall", o, () => G(GZ()));
  } else {
    GG.push(G);
  }
}
a(Gk, "onInstall");
var GK = a(() => G8, "getHost");
var Gx = a(() => G9, "isInstalled");
function Gp(G) {
  if (G !== Go) {
    Go = G || null;
    GD("stateChange", {
      mode: Go
    });
  }
}
a(Gp, "setMode");
var Gb = a(() => Go, "getMode");
function GZ() {
  return {
    state: G8 && G8.getState ? G8.getState() : "boot",
    mode: Go,
    fight: G8 && G8.getFight ? G8.getFight() : null,
    frame: r.frame,
    paused: !!G8 && !!G8.isPaused && !!G8.isPaused(),
    cfg: G8 && G8.cfg ? G8.cfg : {},
    G: g,
    World: r,
    Input: M,
    session: GT,
    host: G8,
    now: typeof performance !== "undefined" ? performance.now() : Date.now()
  };
}
a(GZ, "ctx");
function GU(G, o) {
  if (!G || !G.length || G.includes("any") || G.includes(o.state)) {
    return true;
  } else {
    return !!o.mode && !!G.includes(o.mode);
  }
}
a(GU, "stateMatch");
var GO = new Set();
function GB(G, kC, kT) {
  let kR = kT && kT.message || String(kT);
  let kg = G + "|" + kC + "|" + kR;
  if (!GO.has(kg)) {
    GO.add(kg);
    try {
      console.error("[apphooks] " + G + " failed in " + kC + ":", kT);
    } catch {}
    if (GX) {
      try {
        GX(G, kC, kT);
      } catch {}
    }
    yv(G + " failed: " + kR, {
      kind: "error",
      ms: 6000
    });
  }
}
a(GB, "report");
function Gf(G, kC, kT) {
  try {
    return kT();
  } catch (kR) {
    GB(kC || "?", G, kR);
    return;
  }
}
a(Gf, "guard");
var Gv = a(() => [...GO], "failures");
var GX = null;
function Gh(G) {
  GX = typeof G == "function" ? G : null;
}
a(Gh, "onHookError");
var GF = ["fightStart", "fightEnd", "beforeTick", "frameBefore", "frameAfter", "hit", "timeJump", "pausedTick", "presentWorld", "presentScreen", "menuDraw", "stateChange", "cfgChange", "fileDrop", "note", "overlay"];
var Gc = Object.fromEntries(GF.map(G => [G, []]));
function Gt(G, kC, kT = {}) {
  let kR = Gc[G];
  if (!kR) {
    throw new Error("apphooks: no hook named " + G + " (have " + GF.join(", ") + ")");
  }
  let kg = {
    fn: kC,
    owner: kT.owner || "?",
    priority: kT.priority || 0,
    seq: kR.length
  };
  kR.push(kg);
  kR.sort((ks, kl) => kl.priority - ks.priority || ks.seq - kl.seq);
  GL[G] = null;
  return () => {
    let ks = kR.indexOf(kg);
    if (ks >= 0) {
      kR.splice(ks, 1);
      GL[G] = null;
    }
  };
}
a(Gt, "on");
var GJ = new Set(["presentWorld", "presentScreen", "menuDraw", "overlay"]);
var GL = Object.create(null);
function GD(G, kC) {
  let kT = Gc[G];
  if (!kT || !kT.length) {
    return;
  }
  let kR = GL[G] ||= kT.slice();
  if (GJ.has(G)) {
    let ks = null;
    for (let kl = 0; kl < kR.length; kl++) {
      let kW = kR[kl];
      if (!Gi || !!Gi.has(kW.owner)) {
        if (!ks || !GE(ks)) {
          ks = GZ();
        }
        try {
          kW.fn(kC, ks);
        } catch (kr) {
          GB(kW.owner || "?", G, kr);
        }
      }
    }
    return;
  }
  let kg = GZ();
  for (let kq = 0; kq < kR.length; kq++) {
    let kV = kR[kq];
    try {
      kV.fn(kg, kC);
    } catch (kH) {
      GB(kV.owner || "?", G, kH);
    }
  }
}
a(GD, "emit");
var GE = a(G => G.mode === Go && G.state === (G8 && G8.getState ? G8.getState() : "boot") && G.frame === r.frame && G.paused === (!!G8 && !!G8.isPaused && !!G8.isPaused()) && G.fight === (G8 && G8.getFight ? G8.getFight() : null), "sameCtx");
var Gi = null;
function Gw(G) {
  Gi = G ? new Set(G) : null;
}
a(Gw, "setChromeHidden");
var GY = a(() => !!Gi, "isChromeHidden");
function GC() {
  let G = Gc.beforeTick;
  if (!G.length) {
    return null;
  }
  let o = GZ();
  for (let kC of G) {
    if (Gf("beforeTick", kC.owner, () => kC.fn(o)) === true) {
      return kC.owner;
    }
  }
  return null;
}
a(GC, "claimTick");
var GT = {
  active: false,
  id: 0,
  fight: null,
  seed: 0,
  mode: null,
  startFrame: 0,
  endFrame: 0,
  startedAt: 0,
  endedAt: 0,
  hits: 0,
  damage: 0,
  result: null,
  assisted: new Set(),
  flags: {}
};
var GR = null;
var GM = null;
var GN = 0;
var Gd = null;
function Gg(G, o = {}) {
  if (GT.active && !GT.result) {
    GW("restart");
  }
  Object.assign(GT, {
    active: true,
    id: GT.id + 1,
    fight: G,
    seed: o.seed ?? 0,
    mode: o.mode || null,
    startFrame: r.frame,
    endFrame: 0,
    startedAt: Date.now(),
    endedAt: 0,
    hits: 0,
    damage: 0,
    result: null,
    assisted: new Set(),
    flags: {}
  });
  GR = null;
  GM = null;
  GN = 0;
  Gd = null;
  GD("fightStart", {
    fight: G,
    seed: GT.seed,
    mode: GT.mode,
    session: GT
  });
}
a(Gg, "fightStarted");
function Gl() {
  if (GT.active && !GT.result) {
    GW("quit");
  }
  GT.active = false;
}
a(Gl, "fightLeft");
function GW(G) {
  GT.result = G;
  GT.endFrame = r.frame;
  GT.endedAt = Date.now();
  GD("fightEnd", {
    result: G,
    session: GT,
    frames: GT.endFrame - GT.startFrame
  });
}
a(GW, "endSession");
function Gr(G) {
  if (GT.active && G) {
    GT.assisted.add(String(G));
  }
}
a(Gr, "assist");
var Gq = a(() => GT.assisted.size > 0, "isAssisted");
function GV() {
  if (g.myfight !== 1) {
    return false;
  }
  if (GT.fight && GT.fight.game === "undertale" || !Array.isArray(g.charaction) || !Array.isArray(g.char) || !g.charauto) {
    return true;
  }
  for (let G = 0; G < g.charaction.length; G++) {
    if (g.charaction[G] === 1 && g.char[G] && g.charauto[g.char[G]] !== 1) {
      return true;
    }
  }
  return false;
}
a(GV, "playerFought");
function GH(G) {
  if (G !== "quit") {
    return false;
  }
  let o = r.first("obj_sim_undynechase");
  return !!o && o.con === 7;
}
a(GH, "clearedByEscape");
function Gu() {
  if (typeof g.hp == "number") {
    return [g.hp];
  }
  let G = [];
  let kC = g.char || [];
  for (let kT = 0; kT < kC.length; kT++) {
    let kR = kC[kT];
    G.push(kR && g.hp ? g.hp[kR] | 0 : 0);
  }
  return G;
}
a(Gu, "partyHp");
function GA() {
  if (Array.isArray(g.maxhp)) {
    return (g.char || []).map(G => G ? g.maxhp[G] | 0 : 0).join(",");
  } else {
    return "";
  }
}
a(GA, "partyMaxHp");
function GQ() {
  GD("frameBefore");
}
a(GQ, "frameBefore");
function GI() {
  if (GT.active && !GT.result) {
    Gf("hit detection", "apphooks", GP);
  }
  GD("frameAfter");
  if (GT.active && !GT.result) {
    let G = g.battleover || null;
    if (G && !Gd) {
      GW(G === "lose" || G === "ut-lose" ? "lose" : G === "restart" || G === "quit" ? "quit" : "win");
    }
    Gd = G;
  }
}
a(GI, "frameAfter");
function GP() {
  let G = Gu();
  let kC = GA();
  let kT = typeof g.karma == "number" ? g.karma : 0;
  if (!GR || GR.length !== G.length || kC !== GM) {
    GR = G;
    GM = kC;
    GN = kT;
    return;
  }
  let kR = 0;
  let kg = [];
  for (let kl = 0; kl < G.length; kl++) {
    let kW = GR[kl] - G[kl];
    if (kW > 0) {
      kR += kW;
      kg.push({
        slot: kl,
        id: Array.isArray(g.char) ? g.char[kl] : 0,
        amount: kW,
        hp: G[kl]
      });
    }
  }
  let ks = Math.max(0, GN - kT);
  if (kR > ks) {
    GT.hits++;
    GT.damage += kR - ks;
    GD("hit", {
      frame: r.frame,
      amount: kR - ks,
      members: kg,
      attack: (g.monsterattackname || []).filter(kr => typeof kr == "string" && kr.trim()).join(" / ")
    });
  }
  GR = G;
  GN = kT;
}
a(GP, "detectHits");
function Gz(G = {}) {
  GR = null;
  Gd = g.battleover || null;
  if (G8 && G8.resetAutoplay) {
    Gf("resetAutoplay", "host", () => G8.resetAutoplay());
  }
  GD("timeJump", G);
}
a(Gz, "timeJumped");
function GS(G, o) {
  if (G === "godmode" && o) {
    Gr("god mode");
  }
  if (G === "autoplay" && o) {
    Gr("autoplay");
  }
  if (G === "debugEdit" || G === "kill") {
    Gr(G === "kill" ? "kill party" : "debug menu");
  }
  GD("note", {
    kind: G,
    data: o,
    frame: r.frame
  });
}
a(GS, "note");
var Gj = ["time", "practice", "view", "capture", "access", "nav", "debug"];
var Ga = {
  time: "TIME",
  practice: "PRACTICE",
  view: "OVERLAYS",
  capture: "CAPTURE",
  access: "ACCESS",
  nav: "NAVIGATE",
  debug: "DEBUG"
};
var Gm = new Map();
var o0 = 0;
var o1 = new Set(["hub:planner", "perf", "inspector", "eggs.debug", "eggs.debugmenu"]);
var o2 = ["overlays.inspector", "eggs:debug"];
var o3 = null;
function o4() {
  if (o3 !== null) {
    return o3;
  }
  try {
    let G = typeof location !== "undefined" ? location : null;
    o3 = !!G && (/[?&]dev(=1|=true)?(&|$)/.test(String(G.search || "")) || /^#(.*&)?dev(=1)?(&|$)/.test(String(G.hash || "")));
  } catch {
    o3 = false;
  }
  return o3;
}
a(o4, "urlDevFlag");
function o5() {
  if (o4()) {
    return true;
  }
  let G = G8 && G8.cfg;
  if (G) {
    return G.devmode === true;
  }
  try {
    let o = JSON.parse(localStorage.getItem("dr-sim-cfg") || "null");
    return !!o && typeof o == "object" && o.devmode === true;
  } catch {
    return false;
  }
}
a(o5, "devMode");
function o6(G) {
  if (!G) {
    return false;
  }
  let o = Gm.get(G);
  if (!o1.has(G) && (!o || o.dev !== true) && (!y2.get(G) || y2.get(G).dev !== true)) {
    return false;
  } else {
    return !o5();
  }
}
a(o6, "devHidden");
var o7 = a(G => o1.has(G) || !!Gm.get(G) && Gm.get(G).dev === true, "isDevOnly");
function o8() {
  if (o5()) {
    return;
  }
  let G = G8 && G8.cfg;
  if (G && G.hitboxes) {
    G.hitboxes = false;
  }
  let o = yK("overlays");
  if (o && o.isOn && o.set) {
    Gf("devmode", "overlays", () => {
      if (o.isOn("perf")) {
        o.set("perf", false);
      }
    });
  }
  for (let kC of o2) {
    if (oS(kC)) {
      oV(kC);
    }
  }
}
a(o8, "applyDevMode");
Gk(() => o8(), "devmode");
function o9(G) {
  if (!G || !G.id || !G.name || !G.group) {
    GB(G && G.id || "?", "registerTool", new Error("a tool needs id, name and group"));
    return null;
  }
  if (Gm.has(G.id)) {
    GB(G.id, "registerTool", new Error("tool id already registered"));
    return null;
  }
  if (!Gj.includes(G.group)) {
    GB(G.id, "registerTool", new Error("unknown group " + G.group));
    return null;
  }
  let o = {
    desc: "",
    icon: null,
    key: null,
    states: ["battle"],
    seq: o0++,
    ...G
  };
  if (G6(o.id)) {
    o.icon = G6(o.id);
  }
  Gm.set(o.id, o);
  let kC = o.onKey || o.onUse;
  if (o.key && kC) {
    o.binding = oC({
      id: "tool:" + o.id,
      combo: o.key,
      label: o.name,
      states: o.keyStates || o.states,
      hold: !!o.hold,
      repeat: !!o.repeat,
      yieldMsg: o.yieldMsg,
      owner: o.id,
      onDown: (kT, kR) => kC(kT, kR),
      onUp: o.onKeyUp ? (kT, kR) => o.onKeyUp(kT, kR) : null
    });
  }
  if (o.step) {
    Gt("frameAfter", kT => o.step(kT), {
      owner: o.id
    });
  }
  if (o.drawWorld) {
    Gt("presentWorld", (kT, kR) => o.drawWorld(kT, kR), {
      owner: o.id
    });
  }
  if (o.drawOverlay) {
    Gt("presentScreen", (kT, kR) => o.drawOverlay(kT, kR), {
      owner: o.id
    });
  }
  if (o.drawMenu) {
    Gt("menuDraw", (kT, kR) => o.drawMenu(kT, kR), {
      owner: o.id
    });
  }
  if (o.palette !== false) {
    y3({
      id: "tool:" + o.id,
      title: o.name,
      group: Ga[o.group],
      keywords: (o.keywords || "") + " " + o.desc,
      key: o.key || o.keyHint,
      states: o.states,
      when: o.available,
      run: kT => op(o.id, kT),
      owner: o.id
    });
  }
  return o;
}
a(o9, "registerTool");
function oG(G) {
  return Gm.get(G) || null;
}
a(oG, "getTool");
var oy = a(() => [...Gm.values()], "allTools");
function ok(G = GZ(), o = null) {
  return [...Gm.values()].filter(kC => (!o || kC.group === o) && GU(kC.states, G) && !o6(kC.id)).sort((kC, kT) => Gj.indexOf(kC.group) - Gj.indexOf(kT.group) || kC.seq - kT.seq);
}
a(ok, "listTools");
function oK(G, o = GZ()) {
  return !G.available || !!Gf("available", G.id, () => G.available(o));
}
a(oK, "toolAvailable");
function ox(G, o = GZ()) {
  return !!G.isOn && !!Gf("isOn", G.id, () => G.isOn(o));
}
a(ox, "toolOn");
function op(G, kC = GZ()) {
  let kT = Gm.get(G);
  if (!kT || o6(kT.id)) {
    return false;
  }
  if (!oK(kT, kC)) {
    yv(kT.name + " is not available here", {
      kind: "warn"
    });
    return false;
  }
  let kR = kT.onUse || kT.onKey;
  if (kR) {
    Gf("onUse", kT.id, () => kR(kC));
    return true;
  } else {
    return false;
  }
}
a(op, "useTool");
function ob(G = GZ()) {
  let kC = [];
  for (let kT of Gm.values()) {
    if (kT.status && GU(kT.states, G)) {
      let kR = Gf("status", kT.id, () => kT.status(G));
      if (kR) {
        kC.push(kR);
      }
    }
  }
  return kC.join("  ");
}
a(ob, "statusTags");
var oZ = ["Ctrl", "Alt", "Shift"];
var oU = {
  esc: "Escape",
  escape: "Escape",
  space: "Space",
  " ": "Space",
  plus: "Plus",
  tab: "Tab",
  enter: "Enter",
  return: "Enter",
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
  backspace: "Backspace",
  home: "Home",
  end: "End",
  del: "Delete",
  delete: "Delete"
};
var oO = a(G => G.length === 1 && !/[A-Za-z0-9]/.test(G), "isSymbol");
function oB(G) {
  let kC = String(G || "").trim();
  if (!kC) {
    return "";
  }
  let kT = kC === "+" ? ["Plus"] : kC.split("+").filter((ks, kl, kW) => ks !== "" || kl === kW.length - 1);
  let kR = kT.pop() || "";
  let kg = new Set(kT.map(ks => {
    let kl = ks.toLowerCase();
    if (kl === "ctrl" || kl === "control" || kl === "cmd" || kl === "meta") {
      return "Ctrl";
    } else if (kl === "alt" || kl === "option") {
      return "Alt";
    } else if (kl === "shift") {
      return "Shift";
    } else {
      return ks;
    }
  }));
  kR = oU[kR.toLowerCase()] || (kR.length === 1 || /^f\d{1,2}$/i.test(kR) ? kR.toUpperCase() : kR);
  if (kR === "+") {
    kR = "Plus";
  }
  if (oO(kR)) {
    kg.delete("Shift");
  }
  return [...oZ.filter(ks => kg.has(ks)), kR].join("+");
}
a(oB, "normalizeCombo");
function of(G) {
  let kC;
  let kT = G.code || "";
  if (/^Key[A-Z]$/.test(kT)) {
    kC = /^[a-z]$/i.test(G.key) ? G.key.toUpperCase() : kT.slice(3);
  } else if (/^Digit[0-9]$/.test(kT)) {
    kC = kT.slice(5);
  } else if (G.key === " ") {
    kC = "Space";
  } else if (G.key === "+") {
    kC = "Plus";
  } else {
    kC = G.key.length === 1 ? G.key.toUpperCase() : G.key;
  }
  if (kC === "Control" || kC === "Shift" || kC === "Alt" || kC === "Meta") {
    return kC;
  }
  let kR = [];
  if (G.ctrlKey || G.metaKey) {
    kR.push("Ctrl");
  }
  if (G.altKey) {
    kR.push("Alt");
  }
  if (G.shiftKey && !oO(kC)) {
    kR.push("Shift");
  }
  return [...kR, kC].join("+");
}
a(of, "comboFromEvent");
var ov = a(G => {
  let o = G.split("+");
  return o[o.length - 1] || G;
}, "baseOf");
var oX = {
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  Escape: "ESC",
  Space: "SPACE",
  Plus: "+",
  Backspace: "BKSP",
  Enter: "ENTER",
  Delete: "DEL",
  PageUp: "PGUP",
  PageDown: "PGDN"
};
var oh = null;
var oF = new Map();
function oc(G) {
  if (!G) {
    return "";
  }
  if (oh) {
    let o = Gf("glyph label", "gamepad", () => oh.label(G));
    if (o) {
      return o;
    }
  }
  if (i.ovCache && typeof G == "string") {
    let kC = oF.get(G);
    if (kC === undefined) {
      kC = String(G).split("+").map(kT => oX[kT] || kT.toUpperCase()).join("+").replace(/\+\+$/, "+PLUS");
      if (oF.size > 300) {
        oF.clear();
      }
      oF.set(G, kC);
    }
    return kC;
  }
  return String(G).split("+").map(kT => oX[kT] || kT.toUpperCase()).join("+").replace(/\+\+$/, "+PLUS");
}
a(oc, "comboLabel");
var ot = [{
  combo: "[",
  states: ["menu"],
  what: "previous fight tab",
  owner: "main.js"
}, {
  combo: "]",
  states: ["menu"],
  what: "next fight tab",
  owner: "main.js"
}, {
  combo: "L",
  states: ["menu"],
  what: "Attack Lab on the highlighted fight",
  owner: "main.js"
}, {
  combo: "F2",
  states: ["menu"],
  what: "DOOM",
  owner: "main.js"
}, {
  combo: "/",
  states: ["menu"],
  what: "search the encounter list",
  owner: "gm.js/ui.js"
}, {
  combo: "Backspace",
  states: ["menu"],
  what: "delete a search character",
  owner: "gm.js/ui.js"
}, {
  combo: "Escape",
  states: ["battle"],
  what: "leave the fight",
  owner: "main.js"
}, {
  combo: "F1",
  states: ["battle"],
  what: "battle debug menu",
  owner: "main.js"
}, {
  combo: "P",
  states: ["battle"],
  what: "autoplay on/off",
  owner: "main.js"
}, {
  combo: "I",
  states: ["battle"],
  what: "god mode",
  owner: "main.js"
}, {
  combo: "K",
  states: ["battle"],
  what: "kill the party",
  owner: "main.js"
}, {
  combo: "N",
  states: ["battle"],
  what: "autoplay: distilled net",
  owner: "main.js"
}, {
  combo: "B",
  states: ["battle"],
  what: "autoplay: beam / planner",
  owner: "main.js"
}, {
  combo: "[",
  states: ["battle"],
  what: "beam width -2 (lyric offset in a lyrics fight)",
  owner: "main.js"
}, {
  combo: "]",
  states: ["battle"],
  what: "beam width +2 (lyric offset in a lyrics fight)",
  owner: "main.js"
}, {
  combo: "-",
  states: ["battle"],
  what: "game speed down (lyric rate in a lyrics fight)",
  owner: "main.js"
}, {
  combo: "=",
  states: ["battle"],
  what: "game speed up (lyric rate in a lyrics fight)",
  owner: "main.js"
}, {
  combo: "Plus",
  states: ["battle"],
  what: "game speed up",
  owner: "main.js"
}, {
  combo: "`",
  states: ["battle"],
  what: "pause / resume",
  owner: "main.js"
}, {
  combo: ".",
  states: ["battle"],
  what: "step one frame",
  owner: "main.js"
}, {
  combo: ">",
  states: ["battle"],
  what: "step ten frames",
  owner: "main.js"
}, {
  combo: "\\",
  states: ["battle"],
  what: "lyrics: load the measured tune",
  owner: "main.js",
  soft: true,
  active: a(G => !!G.fight && !!G.fight.lyrics, "active")
}, ..."0123456789".split("").map(G => ({
  combo: G,
  states: ["battle"],
  what: "game debug: next attack " + G,
  owner: "GML",
  soft: true,
  active: () => g.debug === 1
})), {
  combo: "Shift+Escape",
  states: ["doom"],
  what: "leave DOOM (every other key belongs to DOOM)",
  owner: "main.js"
}, {
  combo: "Escape",
  states: ["liquid", "cloth", "train", "lab"],
  what: "leave",
  owner: "main.js"
}, {
  combo: "Escape",
  states: ["blackjack"],
  what: "blackjack: pause (speed, how to play, leave table)",
  owner: "blackjack_table.js"
}, {
  combo: "Enter",
  states: ["blackjack"],
  what: "blackjack: confirm",
  owner: "blackjack_table.js"
}, {
  combo: "Backspace",
  states: ["blackjack"],
  what: "blackjack: back",
  owner: "blackjack_table.js"
}, {
  combo: "Space",
  states: ["train"],
  what: "trainer pause",
  owner: "main.js"
}, {
  combo: "S",
  states: ["train"],
  what: "trainer: print policy",
  owner: "main.js"
}, {
  combo: "-",
  states: ["train"],
  what: "trainer rate down",
  owner: "main.js"
}, {
  combo: "=",
  states: ["train"],
  what: "trainer rate up",
  owner: "main.js"
}, ...["F5", "F11", "F12", "Ctrl+R", "Ctrl+W", "Ctrl+T", "Ctrl+N", "Ctrl+Tab", "Ctrl+Shift+T", "Ctrl+Shift+I", "Ctrl+L", "Alt+ArrowLeft", "Alt+ArrowRight", ..."123456789".split("").map(G => "Ctrl+" + G)].map(G => ({
  combo: G,
  states: ["any"],
  what: "browser",
  owner: "browser"
}))].map(G => ({
  ...G,
  combo: oB(G.combo)
}));
var oJ = ["left", "right", "up", "down", "b1", "b2", "b3"];
function oL(G) {
  let kC = ov(G);
  for (let kT of oJ) {
    for (let kR of d(kT)) {
      if (oB(kR.length === 1 ? kR : kR === " " ? "Space" : kR) === kC || kR.length === 1 && kR.toUpperCase() === kC) {
        return kT;
      }
    }
  }
  return null;
}
a(oL, "gameButtonOf");
var oD = a(G => /^[A-Z0-9]$/.test(G) || G === "Space", "isTypedInMenu");
var oE = a((G, o) => G.includes("any") || o.includes("any") || G.some(kC => o.includes(kC)), "overlap");
var oi = [];
var ow = [];
var oY = new Map();
function oC(G) {
  let kC = oB(G && G.combo);
  let kT = {
    states: ["battle"],
    owner: G && G.owner || "?",
    ...G,
    combo: kC
  };
  if (!kT.id || !kC || typeof kT.onDown != "function") {
    ow.push({
      id: kT.id,
      combo: kC,
      reason: "needs id, combo and onDown"
    });
    return null;
  }
  let kR = ks => {
    ow.push({
      id: kT.id,
      combo: kC,
      owner: kT.owner,
      reason: ks
    });
    try {
      console.warn("[apphooks] key " + kC + " for " + kT.id + " refused: " + ks);
    } catch {}
    return null;
  };
  for (let ks of ot) {
    if (ks.combo === kC && !!oE(ks.states, kT.states) && !ks.moving) {
      if (ks.soft) {
        ow.push({
          id: kT.id,
          combo: kC,
          owner: kT.owner,
          reason: "shares " + kC + " with " + ks.owner + " (" + ks.what + "); yields while that is active",
          soft: true
        });
        continue;
      }
      if (!kT.override) {
        return kR("taken by " + ks.owner + ": " + ks.what);
      }
    }
  }
  if (kT.states.some(kl => kl === "menu" || kl === "any") && oD(kC) && !kT.override) {
    return kR("bare " + kC + " is typed text in the menu (type-to-jump / search)");
  }
  let kg = oL(kC);
  if (kg && !kT.gameKeyOk && !kT.override) {
    return kR("is a game button (" + kg + ")");
  }
  for (let kl of oi) {
    if (kl.combo === kC && oE(kl.states, kT.states) && !kl.when && !kT.when) {
      if (!kT.override) {
        return kR("already bound to " + kl.id);
      }
      ow.push({
        id: kl.id,
        combo: kC,
        owner: kl.owner,
        reason: "shadowed by " + kT.id,
        soft: true
      });
    }
  }
  oi.unshift(kT);
  return kT;
}
a(oC, "registerKey");
function oT(G) {
  let o = oi.findIndex(kC => kC.id === G);
  if (o >= 0) {
    oi.splice(o, 1);
  }
  oY.delete(G);
}
a(oT, "unregisterKey");
var oR = a(() => ow.slice(), "keyConflicts");
var oM = a(() => oi.slice(), "keyBindings");
function oN(G = GZ()) {
  let o = [];
  for (let kC of ot) {
    if (kC.owner !== "browser" && GU(kC.states, G) && (!kC.soft || !kC.active || !!Gf("active", kC.owner, () => kC.active(G)))) {
      o.push({
        combo: kC.combo,
        label: kC.what,
        owner: kC.owner,
        soft: !!kC.soft,
        reserved: true
      });
    }
  }
  for (let kT of oi) {
    if (GU(kT.states, G) && !o6(kT.owner)) {
      o.push({
        combo: kT.combo,
        label: kT.label || kT.id,
        owner: kT.owner,
        hold: !!kT.hold
      });
    }
  }
  return o;
}
a(oN, "keyTable");
var od = new Set();
function og(G) {
  if (!G9) {
    return false;
  }
  let kC = GZ();
  if (kC.state === "intro") {
    return false;
  }
  let kT = of(G);
  let kR = oz();
  if (kR && kR.onKey) {
    let kg = Gf("modal onKey", kR.owner || kR.id, () => kR.onKey(G, kT, kC));
    let ks = kR.text && G.key && G.key.length === 1 && !G.ctrlKey && !G.metaKey && !G.altKey && G.target && (G.target.tagName === "INPUT" || G.target.tagName === "TEXTAREA");
    if (kg) {
      if (!ks) {
        G.preventDefault();
      }
      return true;
    }
  }
  for (let kl of oi) {
    if (kl.combo !== kT || !GU(kl.states, kC) || o6(kl.owner) || M.textFocus && !kl.inText || kR && !kl.inModal && (kR.pauses !== false || !kl.states.includes("battle")) || kC.state === "doom" && !kl.states.includes("doom") || kl.when && !Gf("when", kl.owner, () => kl.when(kC))) {
      continue;
    }
    if (ot.find(kW => kW.soft && kW.combo === kT && GU(kW.states, kC) && kW.active && kW.active(kC))) {
      let kW = kl.id + "|" + GT.id;
      if (kl.yieldMsg && !od.has(kW)) {
        od.add(kW);
        yv(kl.yieldMsg, {
          kind: "warn"
        });
      }
      continue;
    }
    if (!kl.gameKeyOk && oL(kT)) {
      let kr = "gb|" + kl.id;
      if (!od.has(kr)) {
        od.add(kr);
        yv(oc(kT) + " is a game button now - use the Toolbox for " + (kl.label || kl.id), {
          kind: "warn"
        });
      }
      continue;
    }
    G.preventDefault();
    if (G.repeat && !kl.repeat) {
      return true;
    }
    if (kl.hold) {
      if (oY.has(kl.id)) {
        return true;
      }
      oY.set(kl.id, kl);
    }
    Gf("key " + kT, kl.owner, () => kl.onDown(kC, G));
    return true;
  }
  return false;
}
a(og, "handleKeyDown");
function os(G) {
  if (!G9 || !oY.size) {
    return false;
  }
  let kC = ov(of(G));
  let kT = false;
  for (let [kR, kg] of [...oY]) {
    if (ov(kg.combo) === kC) {
      oY.delete(kR);
      kT = true;
      if (kg.onUp) {
        Gf("keyup " + kg.combo, kg.owner, () => kg.onUp(GZ(), G));
      }
    }
  }
  return kT;
}
a(os, "handleKeyUp");
function ol() {
  for (let [G, o] of [...oY]) {
    oY.delete(G);
    if (o.onUp) {
      Gf("release " + o.combo, o.owner, () => o.onUp(GZ(), null));
    }
  }
}
a(ol, "releaseHolds");
var oW = a(G => oY.has(G), "isHeld");
var or = [];
function oq(G) {
  if (!G || !G.id || typeof G.draw != "function") {
    GB(G && G.id || "?", "openModal", new Error("a modal needs id and draw"));
    return null;
  }
  let kC = or.findIndex(kR => kR.id === G.id);
  if (kC >= 0) {
    or.splice(kC, 1);
  }
  let kT = {
    pauses: true,
    ...G,
    prevText: M.textFocus
  };
  or.push(kT);
  for (let kR of oJ) {
    if (M.held[kR]) {
      s(kR, false);
    }
  }
  M.textFocus = !!kT.text;
  if (kT.onOpen) {
    Gf("onOpen", kT.owner || kT.id, () => kT.onOpen(GZ()));
  }
  return kT;
}
a(oq, "openModal");
function oV(G) {
  let kC = G ? or.findIndex(kg => kg.id === G) : or.length - 1;
  if (kC < 0) {
    return false;
  }
  let [kT] = or.splice(kC, 1);
  oH = typeof performance !== "undefined" ? performance.now() : Date.now();
  let kR = oz();
  M.textFocus = kR ? !!kR.text : !!kT.prevText;
  if (kT.onClose) {
    Gf("onClose", kT.owner || kT.id, () => kT.onClose(GZ()));
  }
  return true;
}
a(oV, "closeModal");
var oH = -1000000000;
var ou;
var oA = false;
var oQ = true;
function oI() {
  let G = G8 && G8.cfg && G8.cfg.touchpad || "AUTO";
  if (G === "ON") {
    return true;
  }
  if (G === "OFF") {
    return false;
  }
  try {
    if (ou === undefined) {
      ou = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)") || null;
      if (ou && typeof ou.addEventListener == "function") {
        oA = !!ou.matches;
        ou.addEventListener("change", o => {
          oA = !!o.matches;
        });
        oQ = false;
      }
    }
    if (oQ) {
      return !!ou && !!ou.matches;
    } else {
      return oA;
    }
  } catch {
    return false;
  }
}
a(oI, "touchUI");
var oP = a(() => (typeof performance !== "undefined" ? performance.now() : Date.now()) - oH, "msSinceModalClose");
var oz = a(() => or[or.length - 1] || null, "topModal");
var oS = a(G => G ? or.some(o => o.id === G) : or.length > 0, "modalOpen");
var oj = a(() => or.some(G => G.pauses !== false), "modalPauses");
function oa() {
  let G = oz();
  if (G && G.step) {
    Gf("modal step", G.owner || G.id, () => G.step(GZ()));
  }
}
a(oa, "stepModal");
var om = [];
function y0(G, o = {}) {
  let kC = {
    fn: G,
    owner: o.owner || "?",
    priority: o.priority || 0,
    states: o.states || ["battle"]
  };
  om.push(kC);
  om.sort((kT, kR) => kR.priority - kT.priority);
  return () => {
    let kT = om.indexOf(kC);
    if (kT >= 0) {
      om.splice(kT, 1);
    }
  };
}
a(y0, "onPointer");
function y1(G) {
  if (!G9) {
    return false;
  }
  let kC = GZ();
  let kT = oz();
  if (kT) {
    return !!kT.onPointer && !!Gf("modal pointer", kT.owner || kT.id, () => kT.onPointer(G, kC));
  }
  for (let kR of om) {
    if (GU(kR.states, kC) && Gf("pointer", kR.owner, () => kR.fn(G, kC))) {
      return true;
    }
  }
  return false;
}
a(y1, "dispatchPointer");
var y2 = new Map();
function y3(G) {
  if (!G || !G.id || !G.title || typeof G.run != "function") {
    GB(G && G.id || "?", "registerCommand", new Error("a command needs id, title and run"));
    return null;
  }
  let o = {
    group: "COMMAND",
    keywords: "",
    states: ["any"],
    ...G
  };
  y2.set(o.id, o);
  return o;
}
a(y3, "registerCommand");
function y4(G = GZ()) {
  return [...y2.values()].filter(o => GU(o.states, G) && !o6(o.owner) && !o6(o.id) && (!o.when || Gf("when", o.owner, () => o.when(G))));
}
a(y4, "listCommands");
function y5(G, o = GZ()) {
  let kC = y2.get(G);
  if (!kC || o6(kC.owner) || o6(kC.id)) {
    return false;
  } else {
    Gf("command " + G, kC.owner, () => kC.run(o));
    return true;
  }
}
a(y5, "runCommand");
var y6 = [];
function y7(G) {
  if (!G || !G.id || !G.label || typeof G.get != "function" || typeof G.set != "function") {
    GB(G && G.id || "?", "registerSetting", new Error("a setting needs id, label, get and set"));
    return null;
  }
  let o = {
    section: "ACCESS",
    values: [false, true],
    ...G
  };
  y6.push(o);
  y3({
    id: "setting:" + o.id,
    title: o.label,
    group: "SETTING",
    keywords: o.section + " " + (o.desc || ""),
    states: ["any"],
    owner: o.owner,
    run: () => {
      y9(o, 1);
      yv(o.label + ": " + y8(o.get()));
    }
  });
  return o;
}
a(y7, "registerSetting");
var y8 = a(G => G === true ? "ON" : G === false ? "OFF" : String(G), "showValue");
function y9(G, kC) {
  let kT = G.values;
  let kR = G.get();
  let kg = Math.max(0, kT.findIndex(ks => ks === kR));
  Gf("setting " + G.id, G.owner || G.id, () => G.set(kT[(kg + (kC || 1) + kT.length) % kT.length]));
  if (G8 && G8.saveCfg) {
    G8.saveCfg();
  }
  GD("cfgChange", {
    id: G.id
  });
}
a(y9, "cycleSetting");
function yG() {
  let G = [];
  let kC = new Map();
  for (let kR of y6) {
    if (!kC.has(kR.section)) {
      kC.set(kR.section, []);
      G.push(kR.section);
    }
    kC.get(kR.section).push(kR);
  }
  let kT = [];
  for (let kg of G) {
    kT.push(["-- " + kg, null, null]);
    for (let ks of kC.get(kg)) {
      kT.push([ks.label, () => y8(ks.get()), kl => y9(ks, kl), ks]);
    }
  }
  return kT;
}
a(yG, "settingRows");
var yo = a(() => y6.slice(), "listSettings");
var yy = new Map();
function yk(G, o) {
  yy.set(G, o);
}
a(yk, "provide");
function yK(G) {
  return yy.get(G) || null;
}
a(yK, "use");
function yx(G, kC, kT) {
  let kR = G8 && G8.cfg;
  if (!kR) {
    return kT;
  }
  let kg = kR.app && kR.app[G];
  if (kg && kg[kC] !== undefined) {
    return kg[kC];
  } else {
    return kT;
  }
}
a(yx, "pref");
function yp(G, kC, kT) {
  let kR = G8 && G8.cfg;
  if (kR) {
    if (!kR.app || typeof kR.app != "object") {
      kR.app = {};
    }
    if (!kR.app[G] || typeof kR.app[G] != "object") {
      kR.app[G] = {};
    }
    kR.app[G][kC] = kT;
    if (G8.saveCfg) {
      G8.saveCfg();
    }
    GD("cfgChange", {
      ns: G,
      key: kC,
      value: kT
    });
  }
}
a(yp, "setPref");
var yb = new Set();
function yZ(G) {
  let o = "dr-sim-" + G;
  return {
    get(kC = null) {
      try {
        let kT = localStorage.getItem(o);
        if (kT == null) {
          return kC;
        } else {
          return JSON.parse(kT, (kR, kg) => kR === "__proto__" || kR === "constructor" || kR === "prototype" ? undefined : kg);
        }
      } catch {
        return kC;
      }
    },
    set(kC) {
      try {
        localStorage.setItem(o, JSON.stringify(kC));
        return true;
      } catch {
        if (!yb.has(G)) {
          yb.add(G);
          yv("Browser storage is full - " + G + " was not saved", {
            kind: "error",
            ms: 6000
          });
        }
        return false;
      }
    },
    remove() {
      try {
        localStorage.removeItem(o);
      } catch {}
    },
    key: o
  };
}
a(yZ, "store");
function yU(G, kC, kT = "application/octet-stream") {
  try {
    let kR = kC instanceof Blob ? kC : new Blob([typeof kC == "string" ? kC : JSON.stringify(kC)], {
      type: kT
    });
    let kg = URL.createObjectURL(kR);
    let ks = document.createElement("a");
    ks.href = kg;
    ks.download = G;
    document.body.appendChild(ks);
    ks.click();
    ks.remove();
    setTimeout(() => URL.revokeObjectURL(kg), 4000);
    return true;
  } catch (kl) {
    yv("Could not save " + G + ": " + kl.message, {
      kind: "error"
    });
    return false;
  }
}
a(yU, "download");
function yO(G = "") {
  return new Promise(o => {
    try {
      let kC = document.createElement("input");
      kC.type = "file";
      if (G) {
        kC.accept = G;
      }
      kC.style.display = "none";
      document.body.appendChild(kC);
      kC.addEventListener("change", () => {
        let kT = kC.files && kC.files[0];
        kC.remove();
        o(kT || null);
      });
      kC.addEventListener("cancel", () => {
        kC.remove();
        o(null);
      });
      kC.click();
    } catch {
      o(null);
    }
  });
}
a(yO, "pickFile");
var yB = [];
function yv(G, kC = {}) {
  let kT = typeof performance !== "undefined" ? performance.now() : Date.now();
  let kR = kC.kind || "info";
  if (kC.ms != null && kR !== "error" && kC.progress == null) {
    let ks = Math.max(4000, 1500 + String(G).length * 45);
    if (kC.ms > ks) {
      kC = {
        ...kC,
        ms: ks
      };
    }
  }
  let kg = kC.id ? yB.find(kl => kl.id === kC.id) : null;
  if (kg) {
    Object.assign(kg, {
      text: String(G),
      kind: kR,
      born: kT,
      ms: kC.ms ?? kg.ms,
      progress: kC.progress ?? kg.progress,
      key: kC.key ?? kg.key
    });
  } else {
    kg = {
      text: String(G),
      kind: kR,
      key: kC.key || "",
      born: kT,
      ms: kC.ms ?? (kR === "error" ? 6000 : 2200),
      id: kC.id || null,
      progress: kC.progress ?? null
    };
    yB.push(kg);
    while (yB.length > 3) {
      yB.shift();
    }
  }
  return {
    update(kl, kW) {
      if (kl != null) {
        kg.text = String(kl);
      }
      if (kW != null) {
        kg.progress = kW;
      }
      kg.born = typeof performance !== "undefined" ? performance.now() : Date.now();
    },
    close() {
      let kl = yB.indexOf(kg);
      if (kl >= 0) {
        yB.splice(kl, 1);
      }
    }
  };
}
a(yv, "toast");
var yX = a(() => yB.slice(), "liveToasts");
var yh = [{
  id: "customteam",
  text: "Fights with your own team do not earn achievements."
}, {
  id: "oldmenus",
  text: "The old menus get no new features and will retire in a later update. Settings > System > Menu style switches between them."
}, {
  id: "solo",
  text: "Made and maintained by one person. Things will break sometimes - please go easy on it."
}, {
  id: "fanmade",
  text: "Fan-made. Not made by, or affiliated with, Toby Fox."
}, {
  id: "phone",
  text: "Made for keyboard on a computer - the phone controls work but are not the intended way to play."
}, {
  id: "gamespeed",
  text: "Game speed above 1x can throw off music sync, rhythm parts, some scripted scenes and autoplay. 1x is the real game.",
  toast: "Above 1x, music sync and rhythm parts can differ. 1x is the real game."
}, {
  id: "autoplay",
  text: "Autoplay is not perfect: it can still get hit in some bosses (Spamton NEO, Queen, the Knight's split slash) and chapter 4/5 fights, it can stall in a few scenes with dialogue on, and it is heavy on slower PCs. Runs count as assisted.",
  toast: "Autoplay is not perfect - it can still get hit. Runs count as assisted."
}, {
  id: "nodialog",
  text: "Skip dialogue fast-forwards the text, so some story beats go by unseen."
}, {
  id: "assist",
  text: "The SANDBOX switches (enemy HP, turn length ...), god mode, rewind, save states and practice change the real game's balance. Easier runs count as assisted.",
  toast: "Sandbox tools change the real game's balance - easier runs count as assisted."
}, {
  id: "danger",
  text: "The danger view's fast estimate moves every bullet in a straight line - curves and homing are not predicted.",
  toast: "Fast estimate: straight lines only. Pause for the exact plan."
}, {
  id: "ch5",
  text: "Chapter 5 is still being ported - some fights may be incomplete."
}, {
  id: "heavy",
  text: "Some attacks are very heavy to draw (the Knight's final attack, Titan's big laser) and can lag on phones and older PCs. Closing other tabs helps."
}, {
  id: "browser",
  text: "Needs a recent browser: Chrome or Edge 93+, Firefox 91+, Safari 15+ (iPhone: iOS 15+)."
}, {
  id: "party",
  text: "Boss fights are made for their normal party. A custom party can confuse a few bosses that wait for Susie or Ralsei."
}, {
  id: "editor",
  text: "Custom encounters: every enemy attacks each turn unless the editor's \"Attackers per turn\" sets a limit. A boss attacks alone, and past 400 bullets on screen the oldest go."
}, {
  id: "offfight",
  text: "Scenes outside battle (climbs, chases, cutscenes between phases) are simplified in places."
}, {
  id: "canon",
  text: "Canon party stats follow the main path (no kills, free pickups); other routes can differ."
}, {
  id: "replay",
  text: "A replay or save state from another build, or of a fight that keeps state outside the snapshot, can drift.",
  toast: "A replay from another build, or of some fights, can drift."
}];
var yF = a(G => yh.find(o => o.id === G) || null, "limitById");
var yc = new Set();
var yJ = a(G => {
  let o = yF(G);
  if (o) {
    return o.text;
  } else {
    return "";
  }
}, "limitText");
var yL = a(G => {
  let o = yF(G);
  if (o) {
    return o.toast || o.text;
  } else {
    return "";
  }
}, "limitShort");
function yD(G) {
  yc.add(G);
  if (G8 && G8.cfg) {
    if (!yx("limits", G, false)) {
      yp("limits", G, true);
    }
  } else {
    Gk(() => {
      if (!yx("limits", G, false)) {
        yp("limits", G, true);
      }
    }, "limits");
  }
}
a(yD, "limitSeen");
var yE = a(G => yc.has(G) || !!yx("limits", G, false), "limitWasSeen");
function yi(G, kC = false) {
  let kT = yF(G);
  if (!kT || !kC && yE(G)) {
    return false;
  }
  yD(G);
  let kR = "* " + (kT.toast || kT.text);
  yv(kR, {
    id: "limit:" + G,
    ms: 1500 + kR.length * 45
  });
  return true;
}
a(yi, "limitNote");
var yw = ["autoplay", "gamespeed", "nodialog", "assist", "danger"];
function yj(G) {
  if (!G8 || !G8.cfg || yw.every(yE) || G.state === "battle" && (g.mnfight === 2 || G.mode === "replay")) {
    return;
  }
  let kC = G8.cfg;
  let kT = oG("danger");
  let kR = !!g.godmode || !!kC.invuln || !!kC.nomiss || !!kC.freetp || !!kC.slowbullets || (kC.hpscale ?? 1) !== 1 || (kC.turnscale ?? 1) !== 1 || !![...GT.assisted].some(ks => ks !== "autoplay");
  let kg = {
    autoplay: !!g.autoplay,
    gamespeed: (kC.gamespeed || 1) > 1,
    nodialog: !!kC.nodialog,
    assist: kR,
    danger: !!kT && !!ox(kT, G)
  };
  for (let ks of yw) {
    if (kg[ks] && yi(ks)) {
      return;
    }
  }
}
a(yj, "watchLimits");
Gt("menuDraw", (G, o) => yj(o), {
  owner: "limits"
});
Gt("frameBefore", G => yj(G), {
  owner: "limits"
});
Gt("fightStart", (G, o) => {
  let kC = o && o.fight;
  if (kC && kC.chapter === 5 && kC.game !== "undertale") {
    yi("ch5");
  }
}, {
  owner: "limits"
});
var ya = {
  text: n.white,
  dim: n.gray,
  faint: n.dkgray,
  select: n.yellow,
  key: n.yellow,
  ok: "#7ad17a",
  gold: "#e0c060",
  warn: n.orange,
  error: "#ff4040",
  hit: n.red,
  soul: n.red,
  panelFill: "rgba(0,0,0,0.78)",
  panelEdge: n.dkgray,
  hover: "#241a33",
  solid: n.black,
  frame: "#332033",
  heat: ["rgba(255,64,64,0.10)", "rgba(255,64,64,0.22)", "rgba(255,64,64,0.38)", "rgba(255,32,32,0.55)"],
  path: "rgba(0,255,0,0.9)",
  pathFade: "rgba(0,255,0,0.35)"
};
var ym = {
  info: n.gray,
  ok: "#7ad17a",
  warn: n.orange,
  error: "#ff4040"
};
function k0(G, kC) {
  let kT = {
    font: G.font,
    color: G.color,
    alpha: G.alpha,
    halign: G.halign,
    valign: G.valign
  };
  let kR = c;
  if (kR !== 1) {
    t(1);
  }
  if (G.ctx) {
    G.ctx.save();
  }
  try {
    G.draw_set_font("fnt_main");
    G.draw_set_alpha(1);
    G.draw_set_halign("left");
    return kC();
  } finally {
    if (G.ctx) {
      G.ctx.restore();
    }
    if (kR !== 1) {
      t(kR);
    }
    G.draw_set_font(kT.font);
    G.draw_set_color(kT.color);
    G.draw_set_alpha(kT.alpha);
    G.draw_set_halign(kT.halign);
    if (G.draw_set_valign) {
      G.draw_set_valign(kT.valign);
    }
  }
}
a(k0, "withChrome");
function k1(G, kC, kT, kR, kg, ks = "", kl = ya.panelEdge) {
  let kW = G.ctx;
  kW.fillStyle = ya.panelFill;
  kW.fillRect(kC, kT, kR - kC, kg - kT);
  kW.strokeStyle = kl;
  kW.lineWidth = 1;
  kW.strokeRect(kC + 0.5, kT + 0.5, kR - kC - 1, kg - kT - 1);
  if (ks) {
    G.draw_text(kC + 6, kT + 3, ks, ya.dim);
  }
}
a(k1, "panel");
function k2(G, kC, kT, kR, kg) {
  G.draw_set_color(n.black);
  G.draw_set_alpha(1);
  G.draw_rectangle(kC + 10, kT + 10, kR - 10, kg - 10, false);
  if (G8 && G8.darkbox) {
    G8.darkbox(G, kC, kT, kR, kg);
  } else {
    k1(G, kC, kT, kR, kg, "", n.white);
  }
}
a(k2, "frame");
var k3 = new Map();
i.ovCache = true;
function k4(G, kC, kT, kR, kg, ks, kl, kW) {
  let kr = G.ctx;
  if (!i.ovCache || !kr || !kr.getTransform || G.alpha !== 1 || kr.globalAlpha !== 1 || kr.globalCompositeOperation !== "source-over" || kr.filter !== "none" || kr.shadowBlur || kr.shadowOffsetX || kr.shadowOffsetY) {
    return false;
  }
  let kq = kr.getTransform();
  let kV = kq.a;
  if (kq.b !== 0 || kq.c !== 0 || kq.d !== kV || !(kV > 0) || G.halign !== "left" || G.valign && G.valign !== "top") {
    return false;
  }
  let kH = (kT - kl) * kV + kq.e;
  let ku = (kR - kl) * kV + kq.f;
  let kA = (kg + kl * 2) * kV;
  let kQ = (ks + kl * 2) * kV;
  if (!Number.isInteger(kT * kV) || !Number.isInteger(kR * kV) || !Number.isInteger(kH) || !Number.isInteger(ku) || !Number.isInteger(kA) || !Number.isInteger(kQ)) {
    return false;
  }
  let kI = G.fonts && G.fonts.fnt_main;
  if (!kI || !kI.img || !(kI.img.width > 0)) {
    return false;
  }
  let kP = kC + "|" + kV + "|" + G.font + "|" + c + "|" + kl + "|" + kA + "x" + kQ;
  let kz = k3.get(kP);
  if (!kz) {
    kz = document.createElement("canvas");
    kz.width = kA;
    kz.height = kQ;
    let kS = kz.getContext("2d");
    kS.imageSmoothingEnabled = false;
    kS.setTransform(kV, 0, 0, kV, (kl - kT) * kV, (kl - kR) * kV);
    let kj = G.ctx;
    G.ctx = kS;
    try {
      kW(kS);
    } finally {
      G.ctx = kj;
    }
    if (k3.size > 160) {
      k3.clear();
    }
    k3.set(kP, kz);
  }
  kr.drawImage(kz, kT - kl, kR - kl, kA / kV, kQ / kV);
  return true;
}
a(k4, "ovBlit");
var k5 = k4;
var k6 = a(G => G.length === 1 && /[`,.<>\/\-=;'\[\]]/.test(G), "isPunctChip");
function k7(G) {
  oh = G && typeof G.label == "function" && typeof G.shape == "function" ? G : null;
}
a(k7, "setKeyGlyphs");
var k8 = a(G => oh && Gf("glyph shape", "gamepad", () => oh.shape(G)) || null, "glyphShape");
function k9(G, o) {
  if (k8(o)) {
    return 20;
  }
  let kC = oc(o);
  if (kC) {
    if (k6(kC) && G.draw_text_transformed) {
      return 20;
    } else {
      return G.string_width(kC, "fnt_main") + 8;
    }
  } else {
    return 0;
  }
}
a(k9, "keyWidth");
function kG(G, kC, kT, kR, kg = ya.key) {
  let ks = k8(kR);
  if (ks && G.ctx) {
    let kV = G.ctx;
    kV.strokeStyle = ya.faint;
    kV.lineWidth = 1;
    kV.strokeRect(kC + 0.5, kT + 0.5, 19, 17);
    Gf("glyph draw", "gamepad", () => ks(kV, kC, kT, kg));
    return 20;
  }
  let kl = oc(kR);
  if (!kl) {
    return 0;
  }
  if (k6(kl) && G.draw_text_transformed) {
    let kH = "p|" + kl + "|" + kg;
    let ku = kA => {
      kA.strokeStyle = ya.faint;
      kA.lineWidth = 1;
      kA.strokeRect(kC + 0.5, kT + 0.5, 19, 17);
      let kQ = /[\[\]<>\/]/.test(kl);
      let kI = kQ ? 1 : 2;
      let kP = G.string_width(kl, "fnt_main") * kI;
      let kz = kQ ? 1 : kl === "`" ? 0 : kl === "," || kl === "." ? -12 : -6;
      kA.save();
      kA.beginPath();
      kA.rect(kC + 1, kT + 1, 18, 16);
      kA.clip();
      G.draw_set_color(kg);
      if (kI === 1) {
        G.draw_text(kC + Math.round((20 - kP) / 2), kT + kz, kl, kg);
      } else {
        G.draw_text_transformed(kC + Math.round((20 - kP) / 2), kT + kz, kl, 2, 2, 0);
      }
      kA.restore();
    };
    if (k4(G, kH, kC, kT, 20, 18, 4, ku)) {
      G.draw_set_color(kg);
      return 20;
    } else {
      ku(G.ctx);
      return 20;
    }
  }
  let kW = G.string_width(kl, "fnt_main") + 8;
  let kr = 18;
  let kq = kA => {
    kA.strokeStyle = ya.faint;
    kA.lineWidth = 1;
    kA.strokeRect(kC + 0.5, kT + 0.5, kW - 1, kr - 1);
    G.draw_text(kC + 4, kT + 1, kl, kg);
  };
  if (!k4(G, "k|" + kl + "|" + kg, kC, kT, kW, kr, 4, kq)) {
    kq(G.ctx);
  }
  return kW;
}
a(kG, "drawKey");
var ko = null;
function ky(G, o) {
  ko = {
    owner: G,
    bottom: o,
    t: typeof performance !== "undefined" ? performance.now() : Date.now()
  };
}
a(ky, "reserveTop");
function kK(G) {
  if (ko && G - ko.t < 250) {
    return ko.bottom;
  } else {
    return 0;
  }
}
a(kK, "reservedTop");
var kx = {
  info: ["toastinfo", "#9a9a9a"],
  ok: ["toastok", "#86a37e"],
  warn: ["toastwarn", "#c9a35c"],
  error: ["toasterr", "#c0605a"]
};
function kp(kC, kT, kR, kg, ks, kl, kW) {
  let kr = kU.kit;
  let kq = kC.ctx;
  let {
    t: kV,
    kw: kH,
    lines: ku,
    w: kA,
    h: kQ
  } = kT;
  let kI = kr.state();
  let kP = kr.pal(Math.round(kI.h), kI.s);
  let [kz, kS] = kx[kV.kind] || kx.info;
  let kj = kV.progress != null || G8 && G8.cfg && G8.cfg.uimotion === false;
  let ka = K4 => 1 - Math.pow(1 - Math.max(0, Math.min(1, K4)), 3);
  let km = kj ? 0 : Math.round((1 - ka(ks / 170)) * (kA + 16) + (kV.progress != null ? 0 : (1 - ka(kl / 170)) * (kA + 16)));
  let K0 = kR - kA + km;
  let K1 = K4 => {
    kr.stair(K4, K0 - 2, kg - 2, kA + 4, kQ + 4, 6, kr.BLACK);
    kr.stair(K4, K0, kg, kA, kQ, 4, kP.plate);
    kJ(kC, kz, K0 + 8, kg + 6, 2, kS);
    for (let K5 = 0; K5 < ku.length; K5++) {
      kr.say(kC, kr.FONT, ku[K5], K0 + 30, kg + 4 + K5 * 16, kV.kind === "error" ? kS : kr.WHITE);
    }
    if (kV.key) {
      kG(kC, kR - kH + 2 + km, kg + 4, kV.key);
    }
  };
  if (!!kV.key && !!k8(kV.key) || !k4(kC, "toast|" + kV.kind + "|" + kA + "|" + kQ + "|" + kH + "|" + kP.plate + "|" + (kV.key ? oc(kV.key) : "") + "|" + JSON.stringify(ku), K0 - 2, kg - 2, kA + 4, kQ + 4, 2, K1)) {
    K1(kq);
  }
  let K2 = kV.progress != null ? Math.max(0, Math.min(1, kV.progress)) : Math.max(0, Math.min(1, kl / kV.ms));
  let K3 = Math.round((kA - 12) * K2 / 2) * 2;
  if (K3 > 0) {
    kq.fillStyle = kS;
    kq.fillRect(K0 + 6, kg + kQ - 4, K3, 2);
  }
}
a(kp, "kitToast");
function kb(G, kC = {}) {
  if (!yB.length) {
    return;
  }
  let kT = typeof performance !== "undefined" ? performance.now() : Date.now();
  for (let kW = yB.length - 1; kW >= 0; kW--) {
    if (yB[kW].progress == null && kT - yB[kW].born > yB[kW].ms) {
      yB.splice(kW, 1);
    }
  }
  {
    let kr = yK("toastsDom");
    if (kr && kr.on && kr.on()) {
      return;
    }
  }
  let kR = kC.right ?? 632;
  let kg = !or.length && G8 && G8.getState && G8.getState() === "menu" && kC.top == null && kC.bottom == null;
  let ks = kC.bottom ?? (or.some(kq => kq.pauses !== false && kq.backdrop !== false) ? 476 : kg ? 404 : null);
  let kl = kC.top ?? 8;
  if (ks == null && G8 && G8.getState && G8.getState() === "menu" && kC.top == null) {
    kl = 36;
  }
  if (ks == null && kE) {
    kl = Math.max(kl, (kE.sub ? 40 : 22) + 6);
  }
  if (ks == null) {
    let kq = kK(kT);
    if (kq) {
      kl = Math.max(kl, kq + 6);
    }
  }
  k0(G, () => {
    let kV = yB.map(kH => {
      let ku = kH.key ? k9(G, kH.key) + 6 : 0;
      let kA = G.string_width("Wi", "fnt_main");
      let kQ = kH._lay;
      if (kQ && kQ.text === kH.text && kQ.kw === ku && kQ.fp === kA) {
        return {
          t: kH,
          kw: ku,
          lines: kQ.lines,
          w: kQ.w,
          h: kQ.h
        };
      }
      let kI = [];
      let kP = "";
      for (let ka of kH.text.split(/\s+/)) {
        if (!ka) {
          continue;
        }
        let km = kP ? kP + " " + ka : ka;
        let K0 = 300 - (kI.length ? 0 : ku);
        if (!kP || G.string_width(km, "fnt_main") <= K0) {
          kP = km;
        } else {
          kI.push(kP);
          kP = ka;
        }
      }
      if (kP || !kI.length) {
        kI.push(kP);
      }
      if (kI.length > 3) {
        kI.length = 3;
        let K1 = kI[2];
        while (K1.length > 4 && G.string_width(K1 + "...", "fnt_main") > 300) {
          K1 = K1.slice(0, -1);
        }
        kI[2] = K1 + "...";
      }
      let kz = Math.max(...kI.map((K2, K3) => G.string_width(K2, "fnt_main") + (K3 ? 0 : ku)));
      let kS = kU.kit;
      let kj = kS ? {
        t: kH,
        kw: ku,
        lines: kI,
        w: Math.min(344, kz + 44),
        h: 12 + kI.length * 16
      } : {
        t: kH,
        kw: ku,
        lines: kI,
        w: Math.min(316, kz + 16),
        h: 6 + kI.length * 16
      };
      kH._lay = {
        text: kH.text,
        kw: ku,
        fp: kA,
        lines: kI,
        w: kj.w,
        h: kj.h
      };
      return kj;
    });
    if (ks != null) {
      let kH = 0;
      for (let ku of kV) {
        kH += ku.h + 4;
      }
      kl = ks - kH + 4;
    }
    for (let kA of kV) {
      let {
        t: kQ,
        kw: kI,
        lines: kP,
        w: kz,
        h: kS
      } = kA;
      let kj = kT - kQ.born;
      let ka = kQ.ms - kj;
      let km = kQ.progress != null ? 1 : Math.max(0, Math.min(1, ka / 300));
      let K0 = kR - kz;
      if (kU.kit) {
        kp(G, kA, kR, kl, kj, ka, kT);
        kl += kS + 4;
        continue;
      }
      G.ctx.globalAlpha = km;
      k1(G, K0, kl, kR, kl + kS, "", ym[kQ.kind] || n.gray);
      for (let K1 = 0; K1 < kP.length; K1++) {
        G.draw_text(K0 + 8, kl + 2 + K1 * 16, kP[K1], kQ.kind === "error" ? ya.error : ya.text);
      }
      if (kQ.key) {
        kG(G, kR - kI + 2, kl + 2, kQ.key);
      }
      if (kQ.progress != null) {
        G.ctx.fillStyle = ya.select;
        G.ctx.fillRect(K0 + 1, kl + kS - 3, Math.round((kz - 2) * Math.max(0, Math.min(1, kQ.progress))), 2);
      }
      G.ctx.globalAlpha = 1;
      kl += kS + 4;
    }
  });
}
a(kb, "drawToasts");
var kZ = {
  toastinfo: ["...##...", "...##...", "........", "...##...", "...##...", "...##...", "...##...", "........"],
  toastok: ["........", "......##", ".....##.", "#...##..", "##.##...", ".###....", "..#.....", "........"],
  toastwarn: ["...##...", "...##...", "...##...", "...##...", "...##...", "........", "...##...", "...##..."],
  toasterr: ["##....##", ".##..##.", "..####..", "...##...", "...##...", "..####..", ".##..##.", "##....##"],
  rewind: ["........", "...#..#.", "..##.##.", ".######.", ".######.", "..##.##.", "...#..#.", "........"],
  play: ["........", "..#.....", "..##....", "..###...", "..###...", "..##....", "..#.....", "........"],
  pause: ["........", ".##..##.", ".##..##.", ".##..##.", ".##..##.", ".##..##.", ".##..##.", "........"],
  step: ["........", ".#..#...", ".#..##..", ".#..###.", ".#..###.", ".#..##..", ".#..#...", "........"],
  save: ["########", "#.####.#", "#.####.#", "#......#", "#.####.#", "#.#..#.#", "#.####.#", "########"],
  load: ["...##...", "...##...", "...##...", ".######.", "..####..", "...##...", "#......#", "########"],
  tape: ["........", "########", "#.#..#.#", "#.#..#.#", "#......#", "#.####.#", "########", "........"],
  target: ["...##...", "..#..#..", ".#....#.", "#..##..#", "#..##..#", ".#....#.", "..#..#..", "...##..."],
  eye: ["........", "..####..", ".#....#.", "#..##..#", "#..##..#", ".#....#.", "..####..", "........"],
  bug: [".#....#.", "..#..#..", ".######.", "#.####.#", ".######.", "#.####.#", ".######.", ".#....#."],
  gauge: ["........", "..####..", ".#....#.", "#....#.#", "#...#..#", "#..#...#", "#......#", "########"],
  keys: ["........", "...##...", "...##...", ".##..##.", ".##..##.", "...##...", "...##...", "........"],
  list: ["........", "##.#####", "........", "##.#####", "........", "##.#####", "........", "##.#####"],
  camera: ["........", "..###...", "########", "#..##..#", "#.#..#.#", "#..##..#", "########", "........"],
  film: ["########", "#.#..#.#", "########", "#......#", "#......#", "########", "#.#..#.#", "########"],
  star: ["...#....", "...#....", "..###...", "#######.", ".#####..", "..###...", ".##.##..", ".#...#.."],
  clock: ["..####..", ".#....#.", "#...#..#", "#...#..#", "#...###.", "#......#", ".#....#.", "..####.."],
  trophy: ["########", "#.####.#", ".######.", "..####..", "...##...", "...##...", "..####..", ".######."],
  search: [".####...", "#....#..", "#....#..", "#....#..", ".####...", ".....#..", "......#.", ".......#"],
  help: ["..####..", ".#....#.", "......#.", "....##..", "...#....", "...#....", "........", "...#...."],
  flag: ["#.......", "#####...", "#######.", "#####...", "#.......", "#.......", "#.......", "#......."],
  dice: ["########", "#......#", "#.#..#.#", "#......#", "#......#", "#.#..#.#", "#......#", "########"],
  contrast: ["..####..", ".#.####.", "#..#####", "#..#####", "#..#####", "#..#####", ".#.####.", "..####.."],
  hand: ["...#....", "...#.#..", "...#.#.#", ".#.#####", ".#######", ".######.", "..#####.", "...###.."],
  heart: ["........", ".##.##..", "#######.", "#######.", ".#####..", "..###...", "...#....", "........"],
  skull: ["..####..", ".######.", "#..##..#", "#..##..#", ".######.", "..#..#..", "..####..", "........"],
  gear: ["...##...", ".#.##.#.", "..####..", "###..###", "###..###", "..####..", ".#.##.#.", "...##..."]
};
var kU = {};
var kO = null;
function kB(G) {
  kO = G;
}
a(kB, "useIcons");
function kf() {
  let G = G8 && G8.cfg;
  return !!G && G.uimotion === false;
}
a(kf, "lessMotion");
var kv = "";
function kX(G) {
  if (!!G && G !== kv && !!yx("a11y", "speak", false)) {
    kv = G;
    try {
      let o = window.speechSynthesis;
      o.cancel();
      o.speak(new SpeechSynthesisUtterance(G));
    } catch {}
  }
}
a(kX, "speak");
var kh = new WeakMap();
var kF = null;
if (typeof window !== "undefined") {
  window.addEventListener("dr-gpureset", () => {
    kh = new WeakMap();
    kF = null;
  });
}
function kc(G, kC, kT, kR, kg, ks) {
  G.fillStyle = ks;
  if (typeof document === "undefined" || !Array.isArray(kC)) {
    for (let kV = 0; kV < kC.length; kV++) {
      for (let kH = 0; kH < kC[kV].length; kH++) {
        if (kC[kV][kH] === "#") {
          G.fillRect(kT + kH * kg, kR + kV * kg, kg, kg);
        }
      }
    }
    return;
  }
  let kl = kh.get(kC);
  if (!kl) {
    kh.set(kC, kl = new Map());
  }
  let kW = kg + ks;
  let kr = kl.get(kW);
  if (!kr) {
    kF ||= new e(() => {
      kh = new WeakMap();
      kh.set(kC, kl = new Map());
    });
    let ku = kC.reduce((kS, kj) => Math.max(kS, kj.length), 0);
    let kA = Math.max(1, Math.ceil(kg * 2));
    let kQ = Math.max(1, ku * kA);
    let kI = Math.max(1, kC.length * kA);
    let kP = kF.slot(kQ, kI);
    if (!kP) {
      return;
    }
    kr = {
      cv: kP.cv,
      sx: kP.x,
      sy: kP.y,
      pw: kQ,
      ph: kI,
      w: ku * kg,
      h: kC.length * kg
    };
    let kz = kP.cv.getContext("2d");
    kz.fillStyle = ks;
    for (let kS = 0; kS < kC.length; kS++) {
      for (let kj = 0; kj < kC[kS].length; kj++) {
        if (kC[kS][kj] === "#") {
          kz.fillRect(kP.x + kj * kA, kP.y + kS * kA, kA, kA);
        }
      }
    }
    kl.set(kW, kr);
  }
  let kq = G.imageSmoothingEnabled;
  if (kq) {
    G.imageSmoothingEnabled = false;
  }
  G.drawImage(kr.cv, kr.sx, kr.sy, kr.pw, kr.ph, kT, kR, kr.w, kr.h);
  if (kq) {
    G.imageSmoothingEnabled = true;
  }
}
a(kc, "blitIcon");
function kJ(G, kC, kT, kR, kg = 2, ks = ya.text) {
  if (!kC) {
    return;
  }
  if (kO && kO[kC]) {
    let kW = kO[kC];
    let kr = Math.max(1, Math.floor(kg));
    let kq = (kg * 8 - kW.length * kr) / 2;
    kc(G.ctx, kW, Math.round(kT + kq), Math.round(kR + kq), kr, ks);
    return;
  }
  if (typeof kC == "object" && !Array.isArray(kC) && kC.sprite) {
    G.draw_sprite_ext(kC.sprite, kC.frame || 0, kT, kR, kg / 2, kg / 2, 0, ks, 1);
    return;
  }
  let kl = Array.isArray(kC) ? kC : null;
  if (!kl) {
    let kV = G4[kC];
    let kH = kg * 8;
    if (kV && (kH % 12 === 0 || !kZ[kC])) {
      kl = kV;
      kg = Math.max(1, Math.round(kH / 12));
    } else {
      kl = kZ[kC];
    }
  }
  if (kl) {
    kc(G.ctx, kl, kT, kR, kg, ks);
  }
}
a(kJ, "drawIcon");
var kL = {
  presentStart: 0,
  presents: 0,
  alpha: 1
};
function kD(G = 1) {
  kL.presentStart = typeof performance !== "undefined" ? performance.now() : Date.now();
  kL.presents++;
  kL.alpha = Number.isFinite(G) ? Math.max(0, Math.min(1, G)) : 1;
}
a(kD, "presentBegin");
var kE = null;
function ki(G, kC, kT = ya.select, kR = "") {
  if (kC) {
    kE = {
      owner: G,
      text: String(kC),
      col: kT || ya.select,
      sub: kR ? String(kR) : ""
    };
  } else if (kE && kE.owner === G) {
    kE = null;
  }
}
a(ki, "setBanner");
function kw(G) {
  if (kE) {
    k0(G, () => {
      let o = Math.min(460, Math.max(G.string_width(kE.text, "fnt_main"), kE.sub ? G.string_width(kE.sub, "fnt_main") : 0) + 20);
      let kC = 320 - o / 2;
      k1(G, kC, 2, kC + o, kE.sub ? 40 : 22);
      G.draw_set_halign("center");
      G.draw_text(320, 5, kE.text, kE.col);
      if (kE.sub) {
        G.draw_text(320, 22, kE.sub, ya.dim);
      }
      G.draw_set_halign("left");
    });
  }
}
a(kw, "drawBanner");
function kY(G, o = {}) {
  if (Gi) {
    for (let kC of or.slice()) {
      if (Gi.has(kC.owner || kC.id)) {
        k0(G, () => Gf("modal draw", kC.owner || kC.id, () => kC.draw(G, GZ())));
      }
    }
    return;
  }
  kw(G);
  for (let kT of or.slice()) {
    k0(G, () => {
      if (kT.pauses !== false && kT.backdrop !== false && G.ctx) {
        let kR = G.ctx.canvas;
        G.ctx.save();
        G.ctx.setTransform(1, 0, 0, 1, 0, 0);
        G.ctx.globalAlpha = 1;
        G.ctx.fillStyle = "rgba(0,0,0,0.42)";
        G.ctx.fillRect(0, 0, kR.width, kR.height);
        G.ctx.restore();
      }
      Gf("modal draw", kT.owner || kT.id, () => kT.draw(G, GZ()));
    });
  }
  kb(G, o);
  GD("overlay", G);
}
a(kY, "drawTop");
export { G4 as a, G5 as b, G6 as c, Gy as d, Gk as e, GK as f, Gx as g, Gp as h, Gb as i, GZ as j, Gh as k, Gt as l, GD as m, Gw as n, GY as o, GC as p, GT as q, Gg as r, Gl as s, Gr as t, Gq as u, GV as v, GH as w, GQ as x, GI as y, Gz as z, GS as A, o5 as B, o8 as C, o9 as D, oG as E, ok as F, oK as G, ox as H, op as I, ob as J, oB as K, oc as L, ot as M, oC as N, oM as O, oN as P, og as Q, os as R, oq as S, oV as T, oI as U, oP as V, oz as W, oS as X, oj as Y, oa as Z, y0 as _, y1 as $, y3 as aa, y4 as ba, y5 as ca, y7 as da, y8 as ea, y9 as fa, yG as ga, yo as ha, yk as ia, yK as ja, yx as ka, yp as la, yZ as ma, yU as na, yO as oa, yv as pa, yX as qa, yh as ra, yJ as sa, yL as ta, yD as ua, yE as va, yi as wa, ya as xa, k0 as ya, k1 as za, k2 as Aa, k5 as Ba, k7 as Ca, k9 as Da, kG as Ea, ky as Fa, kU as Ga, kB as Ha, kf as Ia, kX as Ja, kJ as Ka, kL as La, kD as Ma, ki as Na, kY as Oa, I as Pa };
