import { c as F } from "./c-O567UJ4Y.js";
import { C as G, G as e, H as J, s as W } from "./c-QFDZPUX2.js";
import { f as x, g as V } from "./c-3ELH3LBH.js";
import { d as q, f as Q, n as X, p as R } from "./c-MYK6C3LF.js";
import { g as v } from "./c-ZQQWH6UG.js";
import { Ib as H, o as S, qb as N, xb as o } from "./c-PBMEVLU6.js";
import { a as D, e as z, g as L, l as M } from "./c-XSSGDLV7.js";
M();
function C(U) {
  v.monstername[U] = "Dummy";
  v.monstermaxhp[U] = 450;
  v.monsterhp[U] = 450;
  v.monsterat[U] = 0;
  v.monsterdf[U] = 0;
  v.monsterexp[U] = 0;
  v.monstergold[U] = 0;
  v.sparepoint[U] = 0;
  v.mercymod[U] = 0;
  v.mercymax[U] = 100;
  v.canact[U][0] = 1;
  v.actname[U][0] = "Check";
  v.canact[U][1] = 1;
  v.actname[U][1] = "Hug";
  v.canact[U][2] = 1;
  v.actname[U][2] = "Hug Ralsei";
  v.actactor[U][2] = 3;
  v.battlemsg[0] = "* The tutorial begins.";
}
D(C, "setupDummyStats");
var A = class Z4 extends W {
  create() {
    Object.assign(this, {
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
      mercymod: 0,
      acting: 0,
      actcon: 0,
      con: 0,
      plot: 0,
      checked: 0,
      r_hugtime: 0,
      hugtime: 0,
      dial: 0,
      attackcon: 0,
      misstime: 0,
      hittime: 0,
      defendtime: 0,
      won: 0,
      hitdum: 0,
      ambushed: 0,
      battlecancel: 0,
      spare_command: 0,
      spare_used: 0,
      item_command: 0,
      win_spare: 0,
      ral_wrongcommand: 0,
      ral_wrongcommand_count: 0,
      pacifycon: 0,
      sparecon: 0,
      rtimer: 0,
      dummyhp: 450,
      shakex: 0,
      wontimer: 0,
      mytarget: 0
    });
    this.kris_inithp = v.hp[1];
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.depth = 50;
  }
  userEvent(U) {
    if (U === 12) {
      v.monsterx[this.myself] = this.x + this.sprite_height / 2;
      v.monstery[this.myself] = this.y + this.sprite_height / 2 + 30;
    }
  }
  step() {
    let U = this.myself;
    if (this.ambushed === 0) {
      o.with("obj_writer", Z0 => Z0.instance_destroy());
      o.with("obj_face", Z0 => Z0.instance_destroy());
      v.charturn = G();
      v.mnfight = 1;
      v.myfight = -1;
      this.ambushed = 1;
    }
    if (this.plot !== 3) {
      v.charmove[0] = 1;
      v.charmove[1] = 0;
      this.spare_used = v.charspecial[0] === 100 ? 1 : 0;
    } else {
      v.charmove[0] = 0;
      v.charmove[1] = 1;
      if (v.charspecial[1] === 100) {
        this.ral_wrongcommand = 1;
      }
      if (v.charaction[1] === 4) {
        this.ral_wrongcommand = 1;
      }
      if (v.charaction[1] !== 2 && v.charaction[1] !== 4) {
        o.with("obj_attackpress", Z0 => {
          o.with("obj_heroparent", Z1 => {
            if (Z1.state === 1) {
              Z1.state = 0;
            }
            Z1.attacked = 0;
            Z1.itemed = 0;
          });
          v.mnfight = 1;
          v.myfight = -1;
          Z0.instance_destroy();
        });
        v.charaction[1] = 0;
        v.faceaction[1] = 0;
      }
    }
    if (v.monster[U] === 1) {
      v.flag[51 + U] = 4;
      let Z0 = 0;
      if (v.mnfight === 1 && this.talked === 0) {
        if (this.attackcon === 0) {
          X();
          this.mytarget = 0;
          v.targeted[0] = 1;
          this.attackcon = 1;
          H(320, 170, Q);
          H(0, 0, R);
        }
        v.typer = 45;
        v.fc = 2;
        v.fe = 1;
        v.msg = new Array(100).fill(" ");
        v.msg[0] = "* Skip/%";
        if (this.plot === 0 && this.attackcon === 1) {
          v.fe = 0;
          v.flag[30] = 0;
          v.msg[0] = "\\E0* See that \\cRHEART\\cW, Kris?/";
          v.msg[1] = "* That's your \\cRSOUL\\cW, the culmination of your being!/";
          v.msg[2] = "\\EB* Within^1, it holds your WILL..^1. your COMPASSION.../";
          v.msg[3] = "\\E1* ... and the FATE of the world./";
          v.msg[4] = "\\EB* If it gets hit^1, you and your friends will lose HP./";
          v.msg[5] = "\\E3* If everyone's HP reaches 0^1, we'll lose the battle./";
          v.msg[6] = "\\E0* So^1, please take care to avoid the enemy's attack./";
          v.msg[7] = "\\E8* Ready^1?&* Let's try dodging!/%";
        }
        if (this.plot >= 1) {
          this.dial = 0;
          if (v.charaction[0] === 1) {
            if (this.dummyhp > v.monsterhp[0]) {
              this.dial = 1;
            }
            if (this.dummyhp === v.monsterhp[0] && this.plot === 1) {
              this.dial = 2;
            }
            if (this.dummyhp === v.monsterhp[0] && this.misstime === 9 && this.plot === 2) {
              this.dial = 3;
              v.flag[205] = 6;
            }
            if (this.dial === 1 && this.hitdum >= 3) {
              this.hitdum = 4;
              this.dial = 3;
              v.flag[205] = 4;
            }
          }
          if (v.charaction[0] === 10 && Z0 === 0) {
            v.fe = 0;
            v.msg[0] = "\\E0* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./";
            v.msg[1] = "\\E8* You should learn to ATTACK first^1, though./%";
            if (this.defendtime === 1) {
              v.msg[0] = "\\E8* Gee^1, Kris^1!&* You sure are good at defending!/";
              v.msg[1] = "\\E6* I'm not attacking^1, you^1, though, so...&* No need to defend!/%";
            }
            if (this.defendtime === 2) {
              v.fe = 1;
              v.msg[0] = "\\E1* Ummm..^1.&* Kris?/";
              v.msg[1] = "\\E8* There are no bullets^1, and you can't use TP.../";
              v.msg[2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%";
            }
            if (this.defendtime === 3) {
              v.fe = 9;
              v.msg[0] = "\\E9* .../%";
            }
            if (this.plot === 2) {
              v.msg[0] = "\\E8* Great job^1, Kris^1!&* Now that you've gathered TP -/";
              v.msg[1] = "\\E0* How about spending that TP on one of my \\cYSPELLs\\cW?/";
              v.msg[2] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
              v.msg[3] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
              v.msg[4] = "\\E8* It'll fall asleep^1, and we'll win peacefully!/%";
              if (v.monsterhp[0] === v.monstermaxhp[0]) {
                v.msg[2] = "\\E1* If you had^1, um^1, hit the enemy^1, it'd be TIRED now./";
                v.msg[3] = "\\E0* In that case^1, we use my \\cYPACIFY\\cW spell on it.../";
              }
              v.monsterstatus[U] = 1;
              if (v.monstercomment[U] === " ") {
                v.monstercomment[U] = "(Tired)";
              }
              this.plot = 3;
              if (this.defendtime === 4) {
                this.defendtime = 3;
              }
            }
            if (this.defendtime >= 4) {
              this.dial = 3;
              v.flag[205] = 5;
            }
            this.defendtime++;
            Z0 = 1;
          }
          if (v.charaction[0] === 4 && Z0 === 0) {
            v.fe = 0;
            v.msg[0] = "\\E0* Oh^1, Kris^1, you found an \\cYITEM\\cW?/";
            v.msg[1] = "\\E1* I figured \\cYITEMs\\cW are self-explanatory^1, so.../";
            v.msg[2] = "\\E6* Let's skip over them for now^1, OK?/%";
            if (this.item_command === 1) {
              v.fe = 1;
              v.msg[0] = "\\E3* You really want to learn about \\cYITEMS\\cW, Kris...?/";
              v.msg[1] = "\\E0* OK^1, I'll teach you!/";
              v.msg[2] = "\\E1* Errm.../";
              v.msg[3] = "\\E0* You use them^1, and something happens./";
              v.msg[4] = "\\E8* ... is that sufficient?/%";
            }
            if (this.item_command === 2) {
              v.fe = 6;
              v.msg[0] = "\\E6* Yes^1, haha^1, that \\cYITEM\\cW is very pretty^1, isn't it?/";
              v.msg[1] = "\\E8* I'm glad you're enjoying yourself^1, Kris...!/%";
            }
            if (this.item_command === 3) {
              v.fe = 0;
              v.msg[0] = "\\E8* Kris^1, we can find lots more ITEMs on our journey!/";
              v.msg[1] = "\\E0* Which^1, will continue..^1. after this tutorial./%";
            }
            if (this.item_command >= 4) {
              this.dial = 3;
            }
            Z0 = 1;
            this.item_command++;
          }
          if (this.ral_wrongcommand === 1 && Z0 === 0) {
            v.msg[0] = "\\E8* Kris^1, please ask me to do a spell./%";
            let Z1 = this.ral_wrongcommand_count;
            if (Z1 === 0) {
              v.msg[0] = "\\E8* Kris^1, wouldn't you rather learn about \\cYSPELLs\\cW?/%";
            }
            if (Z1 === 1) {
              v.msg[0] = "\\E6* Kris^1, do you..^1. know what a \\cYSPELL\\cW is?/";
              v.msg[1] = "\\E1* Can humans not even ASK people to use them...?/%";
            }
            if (Z1 === 2) {
              v.msg[0] = "\\E6* Kris^1, what if you just give me a hand sign?/%";
            }
            if (Z1 === 3) {
              v.msg[0] = "*\\E8 Ummm^1, if this is too difficult.../";
              v.msg[1] = "* Let's move to the next lesson^1, OK?/";
              v.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
              v.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
              v.msg[4] = "* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
              if (this.plot === 3) {
                this.plot = 4;
              }
              if (v.mercymod[U] >= 100) {
                v.msg[2] = "\\EB* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
                v.msg[3] = "\\E0* Because of that^1, its name turned \\cYYELLOW\\cW!/";
                v.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
                this.plot = 5;
              }
            }
            this.ral_wrongcommand_count++;
            Z0 = 0;
          }
          if (v.charaction[1] === 2 && this.ral_wrongcommand === 0 && Z0 === 0) {
            v.msg[0] = "\\E0* Great^1, Kris^1! A healing spell works too!/";
            v.msg[1] = "* Now I have just a little more to teach you!/";
            v.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
            v.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
            v.msg[4] = "\\E6* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
            if (this.pacifycon === 1) {
              v.msg[0] = "\\E0* Great^1, Kris^1! We would have won the battle by now!/";
              if (v.monsterstatus[U] === 0) {
                v.msg[0] = "\\E0* Great^1, Kris^1! If it was TIRED we would have won!/";
              }
            }
            this.plot = 4;
            if (v.mercymod[U] >= 100) {
              v.msg[2] = "\\E0* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
              v.msg[3] = "* Because of that^1, its name turned \\cYYELLOW\\cW!/";
              v.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
              this.plot = 5;
            }
            Z0 = 1;
          }
          if (this.spare_used === 1 && Z0 === 0) {
            if (this.plot < 5) {
              v.fe = 0;
              if (this.spare_command === 0) {
                v.msg[0] = "\\E8* Ah^1, Kris^1, don't worry about that command yet!/%";
              }
              if (this.spare_command === 1) {
                v.msg[0] = "\\E6* You're really merciful^1, aren't you^1, Kris?/%";
              }
              if (this.spare_command >= 2) {
                v.msg[0] = "\\E1* Kris^1, you are aware it's just a dummy^1, right...?/%";
              }
              if (v.mercymod[U] >= 100) {
                this.win_spare++;
              }
              if (this.win_spare === 1) {
                v.fe = 6;
                v.msg[0] = "\\E0* Kris^1, since you SPARED an enemy after ACTING,/";
                v.msg[1] = "\\E1* You would have won in a real battle, but, um.../";
                v.msg[2] = "\\E0* Don't you want to learn other things^1, first?/%";
              }
              if (this.win_spare === 2) {
                v.fe = 6;
                v.msg[0] = "\\E0* I see..^1. Then^1, perhaps we can just end here./";
                v.msg[1] = "\\E1* You know how to win peacefully, so.../";
                v.msg[2] = "\\E8* That's good enough for me!/%";
                this.won = 1;
              }
            }
            if (this.plot === 5) {
              v.msg[0] = "\\E0* Great job^1, Kris^1!&* That'd be the end in a real battle!/";
              v.msg[1] = "\\E8* I'm really happy I had the chance to teach you^1, Kris!/%";
              this.won = 1;
            }
            this.spare_used = 0;
            this.spare_command++;
            Z0 = 1;
          }
          if (this.dial === 1) {
            if (this.plot === 1) {
              v.fe = 3;
              if (this.dummyhp > v.monsterhp[0] + 50) {
                v.msg[0] = "\\E3* W-wow^1, Kris^1!&* That was an amazing attack!/";
                v.msg[1] = "\\E8* Have you done this before or something...?/";
              } else {
                v.msg[0] = "\\E0* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../";
                v.msg[1] = "\\E8* Pressing Z when the cursor enters the box on the left!/";
              }
              if (this.misstime >= 6) {
                v.fe = 8;
                v.msg[0] = "\\E3* Kris^1!&* You did it!!!/";
                v.msg[1] = "\\E8* (I was really just about at my limit...)/";
              }
              v.msg[2] = "\\E0* OK, next let's try DEFENDING. (\\I1    )/";
              v.msg[3] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
              v.msg[4] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
              v.msg[5] = "* (Watch the orange big bar on the left^1! I'll explain it next!)/%";
              this.plot = 2;
              if (this.defendtime >= 1) {
                v.msg[2] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                v.msg[3] = "* The big orange TP bar on the left filled up a bit!/";
                v.msg[4] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                v.msg[5] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                v.msg[6] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                v.msg[7] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                this.plot = 3;
                v.monsterstatus[U] = 1;
                v.monstercomment[U] = "(Tired)";
              }
            } else {
              if (this.hitdum === 0) {
                v.fe = 1;
                v.msg[0] = "\\E1* Ummm..^1. Kris^1?&* You don't need to hit it anymore./";
                v.msg[1] = "\\E8* I already know you're great at attacking!/%";
              }
              if (this.hitdum === 1) {
                v.fe = 1;
                v.msg[0] = "\\E1* U-umm^1, Kris..^1. H-How do I put this...?/";
                v.msg[1] = "\\E1* Kris^1, seeing you^1, um^1, attack an effigy of myself.../";
                v.msg[2] = "\\E6* ... Kris^1, are you trying to say something?/%";
              }
              if (this.hitdum === 2) {
                v.fe = 6;
                v.msg[0] = "\\E6* Ah^1, Kris..^1. I..^1. um^1, I think I understand./";
                v.msg[1] = "\\E1* W^1-well^1, if..^1. during our adventure,/";
                v.msg[2] = "\\E7* ... if you want to hit me^1, that's OK^1, too!/%";
              }
              if (this.hitdum >= 3) {
                this.dial = 3;
              }
              this.hitdum++;
            }
          }
          if (this.dial === 2) {
            v.fe = 3;
            v.msg[0] = "\\E3* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../";
            v.msg[1] = "\\E8* Press Z again when the cursor goes in the box!/%";
            if (this.misstime >= 1) {
              v.fe = 8;
              v.msg[0] = "\\E8* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%";
              let Z2 = this.misstime;
              if (Z2 === 2) {
                v.msg[0] = "\\E8* Press Z when the white rectangle's in the blue box!/%";
              }
              if (Z2 === 3) {
                v.msg[0] = "\\E6* Ummm..^1. you can press Z a lot^1, if it helps!/%";
              }
              if (Z2 === 4) {
                v.msg[0] = "\\E6* Kris..^1.&* Please try to press Z./%";
              }
              if (Z2 === 5) {
                v.msg[0] = "\\E6* Ummm^1, Kris^1?&* Can you see the white rectangle?/%";
              }
              if (Z2 === 6) {
                v.msg[0] = "\\E8* You know rectangles^1?&* They're like messed-up squares?/%";
              }
              if (Z2 === 7) {
                v.fe = 9;
                v.msg[0] = "\\E9* .../%";
              }
              if (Z2 === 8) {
                v.fe = 1;
                v.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/%";
                this.plot = 2;
                if (this.defendtime >= 1) {
                  v.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/";
                  v.msg[1] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                  v.msg[2] = "* The big orange TP bar on the left filled up a bit!/";
                  v.msg[3] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                  v.msg[4] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                  v.msg[5] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                  v.msg[6] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                  this.plot = 3;
                  v.monsterstatus[U] = 1;
                  v.monstercomment[U] = "(Tired)";
                }
              }
            }
            this.misstime++;
          }
          if (this.dial === 3) {
            v.fe = 9;
            v.msg[0] = "\\E9* .../";
            v.msg[1] = "\\E8* Kris^1, I think I've^1, um^1, perhaps.../";
            v.msg[2] = "\\E1* Reached the limits of what I can teach you today./";
            v.msg[3] = "\\E0* Let's go find Susie./%";
            if (this.hitdum >= 4) {
              v.msg[0] = "\\E9* Kris^1, I don't mean to interrupt^1, but.../";
              v.msg[1] = "\\E3* You're going to break the dummy at this rate./";
              v.msg[2] = "\\E1* I suppose we'll have to stop here for now./%";
            }
            this.won = 1;
            v.myfight = 999;
            v.mnfight = 999;
          }
        }
        x();
        if (v.msg[0] === "* Skip/%") {
          o.with("obj_writer", Z3 => Z3.instance_destroy());
          o.with("obj_face", Z3 => Z3.instance_destroy());
        }
        this.acting = 0;
        this.spare_used = 0;
        this.dummyhp = v.monsterhp[U];
        this.talked = 1;
        this.talktimer = 0;
        this.ral_wrongcommand = 0;
      }
      if (this.talked === 1 && v.mnfight === 1) {
        if (this.won === 0) {
          this.rtimer = 0;
          if (!o.exists("obj_writer")) {
            v.mnfight = 2;
          }
          if (v.mnfight === 2 && this.attackcon === 1) {
            if (!o.exists("obj_moveheart") && !o.exists("obj_heart")) {
              X();
            }
            if (!o.exists("obj_growtangle")) {
              H(320, 170, Q);
            }
          }
        } else if (!o.exists("obj_writer")) {
          this.scr_monsterdefeat();
          J();
        }
      }
      if (v.mnfight === 2 && this.attacked === 0) {
        if (this.attackcon !== 1) {
          this.rtimer = 8;
        }
        this.rtimer++;
        if (this.rtimer >= 8) {
          let Z3 = H(this.x, this.y, F);
          Z3.type = 14;
          Z3.target = this.mytarget;
          Z3.damage = v.monsterat[U] * 5;
          this.turns++;
          v.turntimer = 150;
          if (this.attackcon === 1) {
            this.battlecancel = 2;
          }
          if (this.attackcon !== 1) {
            v.turntimer = -100;
            Z3.instance_destroy();
          }
          this.attackcon = 2;
          this.attacked = 1;
          v.typer = 6;
          v.fc = 0;
          v.battlemsg[0] = "* What?";
          if (this.plot === 1) {
            v.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0    )";
          }
          if (this.plot === 2) {
            v.battlemsg[0] = "* Let's try DEFENDing!&  (\\I1    )";
          }
          if (this.plot === 3) {
            v.battlemsg[0] = "* Let's try SPELLs!&  (\\I2    )";
          }
          if (this.plot === 4) {
            v.battlemsg[0] = "* Let's ACT!&  (\\I3    )";
          }
          if (this.plot === 5) {
            v.battlemsg[0] = "* Let's SPARE!&  (\\I4    )";
          }
          this.spare_used = 0;
          this.ral_wrongcommand = 0;
        } else {
          v.turntimer = 150;
        }
      }
      if (v.mnfight === 2 && v.turntimer <= 1 && this.battlecancel === 2) {
        let Z5 = o.first("obj_battlecontroller");
        if (Z5) {
          Z5.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[5] = 2;
    }
    if (this.con === 3) {
      v.typer = 45;
      v.fc = 2;
      v.fe = 0;
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* Great job^1, Kris^1!&* You're a natural!/";
      if (this.kris_inithp > v.hp[1]) {
        v.fe = 6;
        v.msg[0] = "\\E6* Ouch^1, it's OK^1, Kris^1! You're still learning!/";
      }
      v.msg[1] = "\\E8* Anyhow^1, after the enemy attacks^1, it's our turn^1, Kris!/";
      v.msg[2] = "\\E0* First^1, I'll teach you how to \\cYFIGHT\\cW (\\I0    )./";
      v.msg[3] = "\\E1* Though \\cYFIGHTing\\cW is unnecessary in this world.../";
      v.msg[4] = "\\E8* There's no harm in a thorough lesson!/%";
      v.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0   )";
      x();
      this.con = 6;
    }
    if (this.con === 6 && !o.exists("obj_writer")) {
      let Z6 = o.first("obj_battlecontroller");
      if (Z6) {
        Z6.noreturn = 0;
        Z6.alarm[2] = 2;
      }
      this.battlecancel = 0;
      if (this.plot === 0) {
        this.plot = 1;
      }
      this.con = 7;
    }
    if (v.myfight === 3) {
      this.actStep();
    }
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
    if (this.shakex > 0) {
      this.shakex -= 1;
    }
  }
  alarmEvent(U) {
    if (U === 5) {
      this.con = 3;
    }
    if (U === 4) {
      this.actcon++;
    }
  }
  actStep() {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./%";
      if (this.checked === 0) {
        v.msg[0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./";
        v.fc = 2;
        v.fe = 6;
        v.msg[1] = "* Er^1, sorry^1, it kind of looks like me.../";
        v.msg[2] = "\\E1* I've been alone^1, so I didn't have anyone to model it after.../";
        v.msg[3] = "\\E6* Kris^1, since it's me^1, please be kind to it^1, OK?/%";
        v.typer = 45;
        x();
      } else {
        V();
      }
      this.checked++;
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 10;
      let U = o.first("obj_herokris");
      if (U) {
        v.faceaction[U.myself] = 0;
        U.state = 0;
        U.acttimer = 0;
      }
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* You hug the DUMMY./%";
      V();
    }
    if (this.actcon === 1 && !o.exists("obj_writer")) {
      v.acting = [0, 0, 0];
      this.actcon = 0;
      this.acting = -1;
      e();
    }
    if (this.actcon === 10) {
      let Z0 = o.first("obj_herokris");
      Z0.visible = false;
      this.k = q(Z0.x, Z0.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = 0;
      this.moveTo(this.k, v.monsterx[0] - 42, v.monstery[0] - 30, 15);
      this.actcon = 11;
      this.alarm[4] = 25;
    }
    if (this.actcon === 12) {
      this.k.image_speed = 0.25;
      this.actcon = 13;
      this.alarm[4] = 12;
    }
    if (this.actcon === 14) {
      this.k.image_speed = 0;
      this.actcon = 15;
    }
    if (this.actcon === 15 && !o.exists("obj_writer")) {
      v.flag[205] = 1;
      v.typer = 45;
      v.fc = 2;
      v.fe = 0;
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* How caring^1, Kris!/%";
      if (this.plot === 5) {
        v.msg[0] = "* That's great^1, Kris^1!&* Just one hug is enough^1, though!/%";
        if (this.hugtime >= 1) {
          v.msg[0] = "\\E8* Kris^1, you don't need to hug it anymore./%";
        }
        this.hugtime++;
      }
      if (this.plot === 1) {
        v.fe = 3;
        v.msg[0] = "* Huh...^1? Kris^1, you'd rather hug it out than fight?/";
        v.msg[1] = "\\E1* .../";
        v.msg[2] = "\\E8* You know what^1, that's fine^1! We don't need to fight!/";
        v.msg[3] = "* OK, next let's try DEFENDING. (\\I1    )/";
        v.msg[4] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
        v.msg[5] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
        v.msg[6] = "* (Watch the orange big bar on the left^1! I'll explain it next!/%";
        this.plot = 2;
        if (this.defendtime >= 1) {
          v.msg[3] = "* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
          v.msg[4] = "* The big orange TP bar on the left filled up a bit!/";
          v.msg[5] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
          v.msg[6] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
          v.msg[7] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
          v.msg[8] = "* It'll fall asleep^1, and we'll win peacefully!/%";
          this.plot = 3;
        }
      }
      if (this.plot === 4) {
        v.fe = 8;
        v.msg[0] = "* Aww^1, that's great^1, Kris!/";
        v.msg[1] = "\\E0* Each enemy has different ACTs that satisfy them./";
        v.msg[2] = "* When an enemy is satisfied^1, its name turns \\cYYELLOW\\cW./";
        v.msg[3] = "* When that happens^1, you can defeat it by SPARING (\\I4    ) it!/";
        v.msg[4] = "* If we \\cYSPARE\\cW all the enemies we meet^1, we'll never have to \\cYFIGHT\\cW!/%";
        this.plot = 5;
      }
      x();
      this.actcon = 16;
    }
    if (this.actcon === 16 && !o.exists("obj_writer")) {
      o.with("obj_face", Z1 => Z1.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 17;
      this.alarm[4] = 12;
    }
    if (this.actcon === 18) {
      this.k.image_speed = 0;
      let Z1 = o.first("obj_herokris");
      this.moveTo(this.k, Z1.x, Z1.y, 15);
      this.actcon = 19;
      this.alarm[4] = 25;
    }
    if (this.actcon === 20) {
      this.k.instance_destroy();
      v.mercymod[0] = 100;
      v.mercymod[1] = 100;
      o.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      let Z2 = o.first("obj_herokris");
      let Z3 = o.first("obj_heroralsei");
      if (Z2) {
        v.faceaction[Z2.myself] = 0;
        Z2.state = 0;
        Z2.acttimer = 0;
      }
      if (Z3) {
        v.faceaction[Z3.myself] = 0;
        Z3.state = 0;
        Z3.acttimer = 0;
      }
      this.actcon = 30;
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* You hug RALSEI./%";
      V();
    }
    if (this.actcon === 30) {
      let Z5 = o.first("obj_herokris");
      let Z6 = o.first("obj_heroralsei");
      Z5.visible = false;
      this.k = q(Z5.x, Z5.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = -100;
      this.moveTo(this.k, Z6.x - 24, Z6.y + 10, 15);
      this.actcon = 31;
      this.alarm[4] = 25;
    }
    if (this.actcon === 32) {
      let Z7 = o.first("obj_heroralsei");
      Z7.visible = false;
      this.rb = q(Z7.x, Z7.y, "spr_ralseil_blush");
      this.rb.depth = -99;
      this.rb.image_speed = 0;
      this.k.image_speed = 0.25;
      this.actcon = 33;
      this.alarm[4] = 12;
    }
    if (this.actcon === 34) {
      this.k.image_speed = 0;
      this.actcon = 35;
    }
    if (this.actcon === 35 && !o.exists("obj_writer")) {
      v.typer = 45;
      v.fc = 2;
      v.fe = 2;
      v.msg = new Array(100).fill(" ");
      v.msg[0] = "* K..^1. Kris!?/%";
      let Z8 = this.r_hugtime;
      if (Z8 === 0) {
        v.msg[0] = "* K..^1. Kris!?/";
        v.msg[1] = "\\E8* Ummm^1, I don't think^1, um.../";
        v.msg[2] = "* This is what you're supposed to be doing./";
        v.msg[3] = "\\E2* ... but.../%";
      }
      if (Z8 === 1) {
        v.msg[0] = "* Kris...?/";
        v.msg[1] = "\\E2* Are you trying^1, to^1, um.../";
        v.msg[2] = "\\E6* Ask me to give you a tutorial on hugging...?/%";
      }
      if (Z8 === 2) {
        v.msg[0] = "* Ummm^1, I've never hugged anyone before.../";
        v.msg[1] = "\\E1* (Besides the dummy^1, to test it out,)/";
        v.msg[2] = "\\E2* So I don't know anything about it^1, sorry.../";
        v.msg[3] = "\\E7* I suppose you're the one teaching me^1, haha!/%";
      }
      if (Z8 >= 3) {
        v.msg[0] = "\\E2* .../%";
      }
      this.r_hugtime++;
      x();
      this.actcon = 36;
    }
    if (this.actcon === 36 && !o.exists("obj_writer")) {
      o.with("obj_face", Z9 => Z9.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 37;
      this.alarm[4] = 12;
    }
    if (this.actcon === 38) {
      this.k.image_speed = 0;
      let Z9 = o.first("obj_herokris");
      this.moveTo(this.k, Z9.x, Z9.y, 15);
      this.actcon = 39;
      this.alarm[4] = 25;
    }
    if (this.actcon === 40) {
      if (this.rb) {
        this.rb.instance_destroy();
      }
      o.first("obj_heroralsei").visible = true;
      this.k.instance_destroy();
      o.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.k && !this.k.destroyed) {
      if (this.k.image_index < 0) {
        this.k.image_index = 0;
      }
      if (this.k.image_index > 3) {
        this.k.image_index = 3;
      }
    }
  }
  moveTo(U, Z0, Z1, Z2) {
    let Z3 = Math.hypot(Z0 - U.x, Z1 - U.y);
    U.move_towards_point(Z0, Z1, Z3 / Z2);
    U.alarm[0] = Z2;
    U.alarmEvent = function (Z5) {
      if (Z5 === 0) {
        this.x = Z0;
        this.y = Z1;
        this.speed = 0;
      }
    };
  }
  draw(U) {
    let Z0 = this.shakex > 0 ? S(this.shakex * 2) - this.shakex : 0;
    U.draw_sprite_ext("spr_dummymonster", 0, this.x + Z0, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
    if (this.flash === 1) {
      this.fsiner++;
      U.draw_sprite_white("spr_dummymonster", 0, this.x + Z0, this.y, 2, 2, 0, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
D(A, "obj_dummyenemy");
z(A, "kinds", N("obj_dummyenemy", W));
z(A, "defaultDepth", 90);
z(A, "defaultSprite", "spr_dummymonster");
var j = A;
L(j, "G.mnfight = 1;G.mnfight = 1;G.myfight = 999;G.mnfight = 999;G.mnfight = 2;");
export { C as a, j as b };
