import { c as F } from './c-O567UJ4Y.js';
import { C as G, G as e, H as J, s as W } from './c-QFDZPUX2.js';
import { f as x, g as V } from './c-3ELH3LBH.js';
import { d as q, f as Q, n as X, p as R } from './c-MYK6C3LF.js';
import { g as v } from './c-ZQQWH6UG.js';
import { Ib as H, o as S, qb as N, xb as o } from './c-PBMEVLU6.js';
import { a as D, e as z, g as L, l as M } from './c-XSSGDLV7.js';
M();
function C(U) {
  v.monstername[U] = 'Dummy', v.monstermaxhp[U] = 0x1c2, v.monsterhp[U] = 0x1c2, v.monsterat[U] = 0x0, v.monsterdf[U] = 0x0, v.monsterexp[U] = 0x0, v.monstergold[U] = 0x0, v.sparepoint[U] = 0x0, v.mercymod[U] = 0x0, v.mercymax[U] = 0x64, v.canact[U][0x0] = 0x1, v.actname[U][0x0] = 'Check', v.canact[U][0x1] = 0x1, v.actname[U][0x1] = 'Hug', v.canact[U][0x2] = 0x1, v.actname[U][0x2] = "Hug Ralsei", v.actactor[U][0x2] = 0x3, v.battlemsg[0x0] = "* The tutorial begins.";
}
D(C, 'setupDummyStats');
var A = class Z4 extends W {
  ["create"]() {
    Object.assign(this, {
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
      'mercymod': 0x0,
      'acting': 0x0,
      'actcon': 0x0,
      'con': 0x0,
      'plot': 0x0,
      'checked': 0x0,
      'r_hugtime': 0x0,
      'hugtime': 0x0,
      'dial': 0x0,
      'attackcon': 0x0,
      'misstime': 0x0,
      'hittime': 0x0,
      'defendtime': 0x0,
      'won': 0x0,
      'hitdum': 0x0,
      'ambushed': 0x0,
      'battlecancel': 0x0,
      'spare_command': 0x0,
      'spare_used': 0x0,
      'item_command': 0x0,
      'win_spare': 0x0,
      'ral_wrongcommand': 0x0,
      'ral_wrongcommand_count': 0x0,
      'pacifycon': 0x0,
      'sparecon': 0x0,
      'rtimer': 0x0,
      'dummyhp': 0x1c2,
      'shakex': 0x0,
      'wontimer': 0x0,
      'mytarget': 0x0
    }), this.kris_inithp = v.hp[0x1], this.image_xscale = 0x2, this.image_yscale = 0x2, this.depth = 0x32;
  }
  ["userEvent"](U) {
    U === 0xc && (v.monsterx[this.myself] = this.x + this.sprite_height / 0x2, v.monstery[this.myself] = this.y + this.sprite_height / 0x2 + 0x1e);
  }
  ["step"]() {
    let U = this.myself;
    if (this.ambushed === 0x0 && (o.with('obj_writer', Z0 => Z0.instance_destroy()), o.with('obj_face', Z0 => Z0.instance_destroy()), v.charturn = G(), v.mnfight = 0x1, v.myfight = -0x1, this.ambushed = 0x1), this.plot !== 0x3 ? (v.charmove[0x0] = 0x1, v.charmove[0x1] = 0x0, this.spare_used = v.charspecial[0x0] === 0x64 ? 0x1 : 0x0) : (v.charmove[0x0] = 0x0, v.charmove[0x1] = 0x1, v.charspecial[0x1] === 0x64 && (this.ral_wrongcommand = 0x1), v.charaction[0x1] === 0x4 && (this.ral_wrongcommand = 0x1), v.charaction[0x1] !== 0x2 && v.charaction[0x1] !== 0x4 && (o.with('obj_attackpress', Z0 => {
      o.with('obj_heroparent', Z1 => {
        Z1.state === 0x1 && (Z1.state = 0x0), Z1.attacked = 0x0, Z1.itemed = 0x0;
      }), v.mnfight = 0x1, v.myfight = -0x1, Z0.instance_destroy();
    }), v.charaction[0x1] = 0x0, v.faceaction[0x1] = 0x0)), v.monster[U] === 0x1) {
      v.flag[0x33 + U] = 0x4;
      let Z0 = 0x0;
      if (v.mnfight === 0x1 && this.talked === 0x0) {
        if (this.attackcon === 0x0 && (X(), this.mytarget = 0x0, v.targeted[0x0] = 0x1, this.attackcon = 0x1, H(0x140, 0xaa, Q), H(0x0, 0x0, R)), v.typer = 0x2d, v.fc = 0x2, v.fe = 0x1, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* Skip/%", this.plot === 0x0 && this.attackcon === 0x1 && (v.fe = 0x0, v.flag[0x1e] = 0x0, v.msg[0x0] = "\\E0* See that \\cRHEART\\cW, Kris?/", v.msg[0x1] = "* That's your \\cRSOUL\\cW, the culmination of your being!/", v.msg[0x2] = "\\EB* Within^1, it holds your WILL..^1. your COMPASSION.../", v.msg[0x3] = "\\E1* ... and the FATE of the world./", v.msg[0x4] = "\\EB* If it gets hit^1, you and your friends will lose HP./", v.msg[0x5] = "\\E3* If everyone's HP reaches 0^1, we'll lose the battle./", v.msg[0x6] = "\\E0* So^1, please take care to avoid the enemy's attack./", v.msg[0x7] = "\\E8* Ready^1?&* Let's try dodging!/%"), this.plot >= 0x1) {
          if (this.dial = 0x0, v.charaction[0x0] === 0x1 && (this.dummyhp > v.monsterhp[0x0] && (this.dial = 0x1), this.dummyhp === v.monsterhp[0x0] && this.plot === 0x1 && (this.dial = 0x2), this.dummyhp === v.monsterhp[0x0] && this.misstime === 0x9 && this.plot === 0x2 && (this.dial = 0x3, v.flag[0xcd] = 0x6), this.dial === 0x1 && this.hitdum >= 0x3 && (this.hitdum = 0x4, this.dial = 0x3, v.flag[0xcd] = 0x4)), v.charaction[0x0] === 0xa && Z0 === 0x0 && (v.fe = 0x0, v.msg[0x0] = "\\E0* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./", v.msg[0x1] = "\\E8* You should learn to ATTACK first^1, though./%", this.defendtime === 0x1 && (v.msg[0x0] = "\\E8* Gee^1, Kris^1!&* You sure are good at defending!/", v.msg[0x1] = "\\E6* I'm not attacking^1, you^1, though, so...&* No need to defend!/%"), this.defendtime === 0x2 && (v.fe = 0x1, v.msg[0x0] = "\\E1* Ummm..^1.&* Kris?/", v.msg[0x1] = "\\E8* There are no bullets^1, and you can't use TP.../", v.msg[0x2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%"), this.defendtime === 0x3 && (v.fe = 0x9, v.msg[0x0] = "\\E9* .../%"), this.plot === 0x2 && (v.msg[0x0] = "\\E8* Great job^1, Kris^1!&* Now that you've gathered TP -/", v.msg[0x1] = "\\E0* How about spending that TP on one of my \\cYSPELLs\\cW?/", v.msg[0x2] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", v.msg[0x3] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", v.msg[0x4] = "\\E8* It'll fall asleep^1, and we'll win peacefully!/%", v.monsterhp[0x0] === v.monstermaxhp[0x0] && (v.msg[0x2] = "\\E1* If you had^1, um^1, hit the enemy^1, it'd be TIRED now./", v.msg[0x3] = "\\E0* In that case^1, we use my \\cYPACIFY\\cW spell on it.../"), v.monsterstatus[U] = 0x1, v.monstercomment[U] === '\x20' && (v.monstercomment[U] = "(Tired)"), this.plot = 0x3, this.defendtime === 0x4 && (this.defendtime = 0x3)), this.defendtime >= 0x4 && (this.dial = 0x3, v.flag[0xcd] = 0x5), this.defendtime++, Z0 = 0x1), v.charaction[0x0] === 0x4 && Z0 === 0x0 && (v.fe = 0x0, v.msg[0x0] = "\\E0* Oh^1, Kris^1, you found an \\cYITEM\\cW?/", v.msg[0x1] = "\\E1* I figured \\cYITEMs\\cW are self-explanatory^1, so.../", v.msg[0x2] = "\\E6* Let's skip over them for now^1, OK?/%", this.item_command === 0x1 && (v.fe = 0x1, v.msg[0x0] = "\\E3* You really want to learn about \\cYITEMS\\cW, Kris...?/", v.msg[0x1] = "\\E0* OK^1, I'll teach you!/", v.msg[0x2] = "\\E1* Errm.../", v.msg[0x3] = "\\E0* You use them^1, and something happens./", v.msg[0x4] = "\\E8* ... is that sufficient?/%"), this.item_command === 0x2 && (v.fe = 0x6, v.msg[0x0] = "\\E6* Yes^1, haha^1, that \\cYITEM\\cW is very pretty^1, isn't it?/", v.msg[0x1] = "\\E8* I'm glad you're enjoying yourself^1, Kris...!/%"), this.item_command === 0x3 && (v.fe = 0x0, v.msg[0x0] = "\\E8* Kris^1, we can find lots more ITEMs on our journey!/", v.msg[0x1] = "\\E0* Which^1, will continue..^1. after this tutorial./%"), this.item_command >= 0x4 && (this.dial = 0x3), Z0 = 0x1, this.item_command++), this.ral_wrongcommand === 0x1 && Z0 === 0x0) {
            v.msg[0x0] = "\\E8* Kris^1, please ask me to do a spell./%";
            let Z1 = this.ral_wrongcommand_count;
            Z1 === 0x0 && (v.msg[0x0] = "\\E8* Kris^1, wouldn't you rather learn about \\cYSPELLs\\cW?/%"), Z1 === 0x1 && (v.msg[0x0] = "\\E6* Kris^1, do you..^1. know what a \\cYSPELL\\cW is?/", v.msg[0x1] = "\\E1* Can humans not even ASK people to use them...?/%"), Z1 === 0x2 && (v.msg[0x0] = "\\E6* Kris^1, what if you just give me a hand sign?/%"), Z1 === 0x3 && (v.msg[0x0] = "*\\E8 Ummm^1, if this is too difficult.../", v.msg[0x1] = "* Let's move to the next lesson^1, OK?/", v.msg[0x2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../", v.msg[0x3] = "\\E8* Can be defeated through various \\I3   s of kindness!/", v.msg[0x4] = "* Kris^1, though it's just a dummy^1, why not give it a HUG?/%", this.plot === 0x3 && (this.plot = 0x4), v.mercymod[U] >= 0x64 && (v.msg[0x2] = "\\EB* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/", v.msg[0x3] = "\\E0* Because of that^1, its name turned \\cYYELLOW\\cW!/", v.msg[0x4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%", this.plot = 0x5)), this.ral_wrongcommand_count++, Z0 = 0x0;
          }
          if (v.charaction[0x1] === 0x2 && this.ral_wrongcommand === 0x0 && Z0 === 0x0 && (v.msg[0x0] = "\\E0* Great^1, Kris^1! A healing spell works too!/", v.msg[0x1] = "* Now I have just a little more to teach you!/", v.msg[0x2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../", v.msg[0x3] = "\\E8* Can be defeated through various \\I3   s of kindness!/", v.msg[0x4] = "\\E6* Kris^1, though it's just a dummy^1, why not give it a HUG?/%", this.pacifycon === 0x1 && (v.msg[0x0] = "\\E0* Great^1, Kris^1! We would have won the battle by now!/", v.monsterstatus[U] === 0x0 && (v.msg[0x0] = "\\E0* Great^1, Kris^1! If it was TIRED we would have won!/")), this.plot = 0x4, v.mercymod[U] >= 0x64 && (v.msg[0x2] = "\\E0* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/", v.msg[0x3] = "* Because of that^1, its name turned \\cYYELLOW\\cW!/", v.msg[0x4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%", this.plot = 0x5), Z0 = 0x1), this.spare_used === 0x1 && Z0 === 0x0 && (this.plot < 0x5 && (v.fe = 0x0, this.spare_command === 0x0 && (v.msg[0x0] = "\\E8* Ah^1, Kris^1, don't worry about that command yet!/%"), this.spare_command === 0x1 && (v.msg[0x0] = "\\E6* You're really merciful^1, aren't you^1, Kris?/%"), this.spare_command >= 0x2 && (v.msg[0x0] = "\\E1* Kris^1, you are aware it's just a dummy^1, right...?/%"), v.mercymod[U] >= 0x64 && this.win_spare++, this.win_spare === 0x1 && (v.fe = 0x6, v.msg[0x0] = "\\E0* Kris^1, since you SPARED an enemy after ACTING,/", v.msg[0x1] = "\\E1* You would have won in a real battle, but, um.../", v.msg[0x2] = "\\E0* Don't you want to learn other things^1, first?/%"), this.win_spare === 0x2 && (v.fe = 0x6, v.msg[0x0] = "\\E0* I see..^1. Then^1, perhaps we can just end here./", v.msg[0x1] = "\\E1* You know how to win peacefully, so.../", v.msg[0x2] = "\\E8* That's good enough for me!/%", this.won = 0x1)), this.plot === 0x5 && (v.msg[0x0] = "\\E0* Great job^1, Kris^1!&* That'd be the end in a real battle!/", v.msg[0x1] = "\\E8* I'm really happy I had the chance to teach you^1, Kris!/%", this.won = 0x1), this.spare_used = 0x0, this.spare_command++, Z0 = 0x1), this.dial === 0x1 && (this.plot === 0x1 ? (v.fe = 0x3, this.dummyhp > v.monsterhp[0x0] + 0x32 ? (v.msg[0x0] = "\\E3* W-wow^1, Kris^1!&* That was an amazing attack!/", v.msg[0x1] = "\\E8* Have you done this before or something...?/") : (v.msg[0x0] = "\\E0* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../", v.msg[0x1] = "\\E8* Pressing Z when the cursor enters the box on the left!/"), this.misstime >= 0x6 && (v.fe = 0x8, v.msg[0x0] = "\\E3* Kris^1!&* You did it!!!/", v.msg[0x1] = "\\E8* (I was really just about at my limit...)/"), v.msg[0x2] = "\\E0* OK, next let's try DEFENDING. (\\I1    )/", v.msg[0x3] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../", v.msg[0x4] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/", v.msg[0x5] = "* (Watch the orange big bar on the left^1! I'll explain it next!)/%", this.plot = 0x2, this.defendtime >= 0x1 && (v.msg[0x2] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/", v.msg[0x3] = "* The big orange TP bar on the left filled up a bit!/", v.msg[0x4] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", v.msg[0x5] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", v.msg[0x6] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", v.msg[0x7] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3, v.monsterstatus[U] = 0x1, v.monstercomment[U] = "(Tired)")) : (this.hitdum === 0x0 && (v.fe = 0x1, v.msg[0x0] = "\\E1* Ummm..^1. Kris^1?&* You don't need to hit it anymore./", v.msg[0x1] = "\\E8* I already know you're great at attacking!/%"), this.hitdum === 0x1 && (v.fe = 0x1, v.msg[0x0] = "\\E1* U-umm^1, Kris..^1. H-How do I put this...?/", v.msg[0x1] = "\\E1* Kris^1, seeing you^1, um^1, attack an effigy of myself.../", v.msg[0x2] = "\\E6* ... Kris^1, are you trying to say something?/%"), this.hitdum === 0x2 && (v.fe = 0x6, v.msg[0x0] = "\\E6* Ah^1, Kris..^1. I..^1. um^1, I think I understand./", v.msg[0x1] = "\\E1* W^1-well^1, if..^1. during our adventure,/", v.msg[0x2] = "\\E7* ... if you want to hit me^1, that's OK^1, too!/%"), this.hitdum >= 0x3 && (this.dial = 0x3), this.hitdum++)), this.dial === 0x2) {
            if (v.fe = 0x3, v.msg[0x0] = "\\E3* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../", v.msg[0x1] = "\\E8* Press Z again when the cursor goes in the box!/%", this.misstime >= 0x1) {
              v.fe = 0x8, v.msg[0x0] = "\\E8* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%";
              let Z2 = this.misstime;
              Z2 === 0x2 && (v.msg[0x0] = "\\E8* Press Z when the white rectangle's in the blue box!/%"), Z2 === 0x3 && (v.msg[0x0] = "\\E6* Ummm..^1. you can press Z a lot^1, if it helps!/%"), Z2 === 0x4 && (v.msg[0x0] = "\\E6* Kris..^1.&* Please try to press Z./%"), Z2 === 0x5 && (v.msg[0x0] = "\\E6* Ummm^1, Kris^1?&* Can you see the white rectangle?/%"), Z2 === 0x6 && (v.msg[0x0] = "\\E8* You know rectangles^1?&* They're like messed-up squares?/%"), Z2 === 0x7 && (v.fe = 0x9, v.msg[0x0] = "\\E9* .../%"), Z2 === 0x8 && (v.fe = 0x1, v.msg[0x0] = "\\E6* Umm^1, perhaps we should try something else?/%", this.plot = 0x2, this.defendtime >= 0x1 && (v.msg[0x0] = "\\E6* Umm^1, perhaps we should try something else?/", v.msg[0x1] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/", v.msg[0x2] = "* The big orange TP bar on the left filled up a bit!/", v.msg[0x3] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", v.msg[0x4] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", v.msg[0x5] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", v.msg[0x6] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3, v.monsterstatus[U] = 0x1, v.monstercomment[U] = "(Tired)"));
            }
            this.misstime++;
          }
          this.dial === 0x3 && (v.fe = 0x9, v.msg[0x0] = "\\E9* .../", v.msg[0x1] = "\\E8* Kris^1, I think I've^1, um^1, perhaps.../", v.msg[0x2] = "\\E1* Reached the limits of what I can teach you today./", v.msg[0x3] = "\\E0* Let's go find Susie./%", this.hitdum >= 0x4 && (v.msg[0x0] = "\\E9* Kris^1, I don't mean to interrupt^1, but.../", v.msg[0x1] = "\\E3* You're going to break the dummy at this rate./", v.msg[0x2] = "\\E1* I suppose we'll have to stop here for now./%"), this.won = 0x1, v.myfight = 0x3e7, v.mnfight = 0x3e7);
        }
        x(), v.msg[0x0] === "* Skip/%" && (o.with('obj_writer', Z3 => Z3.instance_destroy()), o.with('obj_face', Z3 => Z3.instance_destroy())), this.acting = 0x0, this.spare_used = 0x0, this.dummyhp = v.monsterhp[U], this.talked = 0x1, this.talktimer = 0x0, this.ral_wrongcommand = 0x0;
      }
      if (this.talked === 0x1 && v.mnfight === 0x1 && (this.won === 0x0 ? (this.rtimer = 0x0, o.exists('obj_writer') || (v.mnfight = 0x2), v.mnfight === 0x2 && this.attackcon === 0x1 && (!o.exists('obj_moveheart') && !o.exists('obj_heart') && X(), o.exists('obj_growtangle') || H(0x140, 0xaa, Q))) : o.exists('obj_writer') || (this.scr_monsterdefeat(), J())), v.mnfight === 0x2 && this.attacked === 0x0) {
        if (this.attackcon !== 0x1 && (this.rtimer = 0x8), this.rtimer++, this.rtimer >= 0x8) {
          let Z3 = H(this.x, this.y, F);
          Z3.type = 0xe, Z3.target = this.mytarget, Z3.damage = v.monsterat[U] * 0x5, this.turns++, v.turntimer = 0x96, this.attackcon === 0x1 && (this.battlecancel = 0x2), this.attackcon !== 0x1 && (v.turntimer = -0x64, Z3.instance_destroy()), this.attackcon = 0x2, this.attacked = 0x1, v.typer = 0x6, v.fc = 0x0, v.battlemsg[0x0] = "* What?", this.plot === 0x1 && (v.battlemsg[0x0] = "* Let's try FIGHTing!&  (\\I0    )"), this.plot === 0x2 && (v.battlemsg[0x0] = "* Let's try DEFENDing!&  (\\I1    )"), this.plot === 0x3 && (v.battlemsg[0x0] = "* Let's try SPELLs!&  (\\I2    )"), this.plot === 0x4 && (v.battlemsg[0x0] = "* Let's ACT!&  (\\I3    )"), this.plot === 0x5 && (v.battlemsg[0x0] = "* Let's SPARE!&  (\\I4    )"), this.spare_used = 0x0, this.ral_wrongcommand = 0x0;
        } else v.turntimer = 0x96;
      }
      if (v.mnfight === 0x2 && v.turntimer <= 0x1 && this.battlecancel === 0x2) {
        let Z5 = o.first('obj_battlecontroller');
        Z5 && (Z5.noreturn = 0x1), this.con = 0x1, this.battlecancel = 0x3;
      }
    }
    if (this.con === 0x1 && (this.con = 0x2, this.alarm[0x5] = 0x2), this.con === 0x3 && (v.typer = 0x2d, v.fc = 0x2, v.fe = 0x0, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* Great job^1, Kris^1!&* You're a natural!/", this.kris_inithp > v.hp[0x1] && (v.fe = 0x6, v.msg[0x0] = "\\E6* Ouch^1, it's OK^1, Kris^1! You're still learning!/"), v.msg[0x1] = "\\E8* Anyhow^1, after the enemy attacks^1, it's our turn^1, Kris!/", v.msg[0x2] = "\\E0* First^1, I'll teach you how to \\cYFIGHT\\cW (\\I0    )./", v.msg[0x3] = "\\E1* Though \\cYFIGHTing\\cW is unnecessary in this world.../", v.msg[0x4] = "\\E8* There's no harm in a thorough lesson!/%", v.battlemsg[0x0] = "* Let's try FIGHTing!&  (\\I0   )", x(), this.con = 0x6), this.con === 0x6 && !o.exists('obj_writer')) {
      let Z6 = o.first('obj_battlecontroller');
      Z6 && (Z6.noreturn = 0x0, Z6.alarm[0x2] = 0x2), this.battlecancel = 0x0, this.plot === 0x0 && (this.plot = 0x1), this.con = 0x7;
    }
    v.myfight === 0x3 && this.actStep(), this.state === 0x3 && (this.hurttimer--, this.hurttimer < 0x0 && (this.state = 0x0)), this.shakex > 0x0 && (this.shakex -= 0x1);
  }
  ["alarmEvent"](U) {
    U === 0x5 && (this.con = 0x3), U === 0x4 && this.actcon++;
  }
  ["actStep"]() {
    if (this.acting === 0x1 && this.actcon === 0x0 && (this.actcon = 0x1, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./%", this.checked === 0x0 ? (v.msg[0x0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./", v.fc = 0x2, v.fe = 0x6, v.msg[0x1] = "* Er^1, sorry^1, it kind of looks like me.../", v.msg[0x2] = "\\E1* I've been alone^1, so I didn't have anyone to model it after.../", v.msg[0x3] = "\\E6* Kris^1, since it's me^1, please be kind to it^1, OK?/%", v.typer = 0x2d, x()) : V(), this.checked++), this.acting === 0x2 && this.actcon === 0x0) {
      this.actcon = 0xa;
      let U = o.first('obj_herokris');
      U && (v.faceaction[U.myself] = 0x0, U.state = 0x0, U.acttimer = 0x0), v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* You hug the DUMMY./%", V();
    }
    if (this.actcon === 0x1 && !o.exists('obj_writer') && (v.acting = [0x0, 0x0, 0x0], this.actcon = 0x0, this.acting = -0x1, e()), this.actcon === 0xa) {
      let Z0 = o.first('obj_herokris');
      Z0.visible = false, this.k = q(Z0.x, Z0.y, 'spr_kris_hug'), this.k.image_speed = 0x0, this.k.depth = 0x0, this.moveTo(this.k, v.monsterx[0x0] - 0x2a, v.monstery[0x0] - 0x1e, 0xf), this.actcon = 0xb, this.alarm[0x4] = 0x19;
    }
    if (this.actcon === 0xc && (this.k.image_speed = 0.25, this.actcon = 0xd, this.alarm[0x4] = 0xc), this.actcon === 0xe && (this.k.image_speed = 0x0, this.actcon = 0xf), this.actcon === 0xf && !o.exists('obj_writer') && (v.flag[0xcd] = 0x1, v.typer = 0x2d, v.fc = 0x2, v.fe = 0x0, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* How caring^1, Kris!/%", this.plot === 0x5 && (v.msg[0x0] = "* That's great^1, Kris^1!&* Just one hug is enough^1, though!/%", this.hugtime >= 0x1 && (v.msg[0x0] = "\\E8* Kris^1, you don't need to hug it anymore./%"), this.hugtime++), this.plot === 0x1 && (v.fe = 0x3, v.msg[0x0] = "* Huh...^1? Kris^1, you'd rather hug it out than fight?/", v.msg[0x1] = "\\E1* .../", v.msg[0x2] = "\\E8* You know what^1, that's fine^1! We don't need to fight!/", v.msg[0x3] = "* OK, next let's try DEFENDING. (\\I1    )/", v.msg[0x4] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../", v.msg[0x5] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/", v.msg[0x6] = "* (Watch the orange big bar on the left^1! I'll explain it next!/%", this.plot = 0x2, this.defendtime >= 0x1 && (v.msg[0x3] = "* Kris^1, if you didn't notice^1, when you DEFENDED before -/", v.msg[0x4] = "* The big orange TP bar on the left filled up a bit!/", v.msg[0x5] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/", v.msg[0x6] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./", v.msg[0x7] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../", v.msg[0x8] = "* It'll fall asleep^1, and we'll win peacefully!/%", this.plot = 0x3)), this.plot === 0x4 && (v.fe = 0x8, v.msg[0x0] = "* Aww^1, that's great^1, Kris!/", v.msg[0x1] = "\\E0* Each enemy has different ACTs that satisfy them./", v.msg[0x2] = "* When an enemy is satisfied^1, its name turns \\cYYELLOW\\cW./", v.msg[0x3] = "* When that happens^1, you can defeat it by SPARING (\\I4    ) it!/", v.msg[0x4] = "* If we \\cYSPARE\\cW all the enemies we meet^1, we'll never have to \\cYFIGHT\\cW!/%", this.plot = 0x5), x(), this.actcon = 0x10), this.actcon === 0x10 && !o.exists('obj_writer') && (o.with('obj_face', Z1 => Z1.instance_destroy()), this.k.image_speed = -0.25, this.actcon = 0x11, this.alarm[0x4] = 0xc), this.actcon === 0x12) {
      this.k.image_speed = 0x0;
      let Z1 = o.first('obj_herokris');
      this.moveTo(this.k, Z1.x, Z1.y, 0xf), this.actcon = 0x13, this.alarm[0x4] = 0x19;
    }
    if (this.actcon === 0x14 && (this.k.instance_destroy(), v.mercymod[0x0] = 0x64, v.mercymod[0x1] = 0x64, o.first('obj_herokris').visible = true, this.actcon = 0x1), this.acting === 0x3 && this.actcon === 0x0) {
      let Z2 = o.first('obj_herokris'),
        Z3 = o.first('obj_heroralsei');
      Z2 && (v.faceaction[Z2.myself] = 0x0, Z2.state = 0x0, Z2.acttimer = 0x0), Z3 && (v.faceaction[Z3.myself] = 0x0, Z3.state = 0x0, Z3.acttimer = 0x0), this.actcon = 0x1e, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* You hug RALSEI./%", V();
    }
    if (this.actcon === 0x1e) {
      let Z5 = o.first('obj_herokris'),
        Z6 = o.first('obj_heroralsei');
      Z5.visible = false, this.k = q(Z5.x, Z5.y, 'spr_kris_hug'), this.k.image_speed = 0x0, this.k.depth = -0x64, this.moveTo(this.k, Z6.x - 0x18, Z6.y + 0xa, 0xf), this.actcon = 0x1f, this.alarm[0x4] = 0x19;
    }
    if (this.actcon === 0x20) {
      let Z7 = o.first('obj_heroralsei');
      Z7.visible = false, this.rb = q(Z7.x, Z7.y, 'spr_ralseil_blush'), this.rb.depth = -0x63, this.rb.image_speed = 0x0, this.k.image_speed = 0.25, this.actcon = 0x21, this.alarm[0x4] = 0xc;
    }
    if (this.actcon === 0x22 && (this.k.image_speed = 0x0, this.actcon = 0x23), this.actcon === 0x23 && !o.exists('obj_writer')) {
      v.typer = 0x2d, v.fc = 0x2, v.fe = 0x2, v.msg = new Array(0x64).fill('\x20'), v.msg[0x0] = "* K..^1. Kris!?/%";
      let Z8 = this.r_hugtime;
      Z8 === 0x0 && (v.msg[0x0] = "* K..^1. Kris!?/", v.msg[0x1] = "\\E8* Ummm^1, I don't think^1, um.../", v.msg[0x2] = "* This is what you're supposed to be doing./", v.msg[0x3] = "\\E2* ... but.../%"), Z8 === 0x1 && (v.msg[0x0] = "* Kris...?/", v.msg[0x1] = "\\E2* Are you trying^1, to^1, um.../", v.msg[0x2] = "\\E6* Ask me to give you a tutorial on hugging...?/%"), Z8 === 0x2 && (v.msg[0x0] = "* Ummm^1, I've never hugged anyone before.../", v.msg[0x1] = "\\E1* (Besides the dummy^1, to test it out,)/", v.msg[0x2] = "\\E2* So I don't know anything about it^1, sorry.../", v.msg[0x3] = "\\E7* I suppose you're the one teaching me^1, haha!/%"), Z8 >= 0x3 && (v.msg[0x0] = "\\E2* .../%"), this.r_hugtime++, x(), this.actcon = 0x24;
    }
    if (this.actcon === 0x24 && !o.exists('obj_writer') && (o.with('obj_face', Z9 => Z9.instance_destroy()), this.k.image_speed = -0.25, this.actcon = 0x25, this.alarm[0x4] = 0xc), this.actcon === 0x26) {
      this.k.image_speed = 0x0;
      let Z9 = o.first('obj_herokris');
      this.moveTo(this.k, Z9.x, Z9.y, 0xf), this.actcon = 0x27, this.alarm[0x4] = 0x19;
    }
    this.actcon === 0x28 && (this.rb && this.rb.instance_destroy(), o.first('obj_heroralsei').visible = true, this.k.instance_destroy(), o.first('obj_herokris').visible = true, this.actcon = 0x1), this.k && !this.k.destroyed && (this.k.image_index < 0x0 && (this.k.image_index = 0x0), this.k.image_index > 0x3 && (this.k.image_index = 0x3));
  }
  ["moveTo"](U, Z0, Z1, Z2) {
    let Z3 = Math.hypot(Z0 - U.x, Z1 - U.y);
    U.move_towards_point(Z0, Z1, Z3 / Z2), U.alarm[0x0] = Z2, U.alarmEvent = function (Z5) {
      Z5 === 0x0 && (this.x = Z0, this.y = Z1, this.speed = 0x0);
    };
  }
  ["draw"](U) {
    let Z0 = this.shakex > 0x0 ? S(this.shakex * 0x2) - this.shakex : 0x0;
    U.draw_sprite_ext('spr_dummymonster', 0x0, this.x + Z0, this.y, 0x2, 0x2, 0x0, this.image_blend, this.image_alpha), this.flash === 0x1 && (this.fsiner++, U.draw_sprite_white('spr_dummymonster', 0x0, this.x + Z0, this.y, 0x2, 0x2, 0x0, -Math.cos(this.fsiner / 0x5) * 0.4 + 0.6)), this.becomeflash === 0x0 && (this.flash = 0x0), this.becomeflash = 0x0;
  }
};
D(A, 'obj_dummyenemy'), z(A, 'kinds', N('obj_dummyenemy', W)), z(A, 'defaultDepth', 0x5a), z(A, 'defaultSprite', 'spr_dummymonster');
var j = A;
L(j, "G.mnfight = 1;G.mnfight = 1;G.myfight = 999;G.mnfight = 999;G.mnfight = 2;");
export { C as a, j as b };