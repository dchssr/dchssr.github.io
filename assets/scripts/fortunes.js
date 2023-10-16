"use strict";

const RNG = {
    int:  function(limit) { return Math.floor(Math.random() * limit); },
    roll: function(limit) { return this.int(limit) + 1; }
}

Array.prototype.sample = function() {
    return this.at(RNG.int(this.length));
};

const FORTUNES = {
    "default": [
        "howdy",
        "Destroying brain cells since 199X.",
        "Just because I can, does that mean I shouldn't?",
        "Just because I shouldn't, does that mean I <em>won't</em>?",
        "Prepare for a cyber-bullying!",
        "I'll be online if you need me.",
        "I'm in.",
        "Rub stupid lamps, win stupid wishes.",
        "Things are going to get weird.  I'm going to make them weird.",
        "Mostly harmless.",
        "Free with your 99p blender!",
        // "The margins on a 99p blender would be £29 in the red you oil barrel!",
        // "As if margins should marginalize MY RIGHT to buy a blender for 99p!",
        "Can't you just crush things with a spoon?",
        "Once upon a time in a blog far far away...",
        "You encounter the Dread Gazebo. Roll for initiative.",
        "Problems go in, technical debt comes out.",
        "Ben's your uncle and Jemima's your aunt!",
        "Kilroy was here. You just missed him.",
        "My other car is a cdr.",
        "👏 developers 👏 developers 👏 developers 👏 developers 👏",
        "Make sure to keep your devices charged.",
        () => `Well exc${"u".repeat(RNG.roll(12))}se me, Princess!`,
        "Hail to the Knög!", // https://www.youtube.com/watch?v=iR9-8G_uf4s
	"All good things must leave through the catflap.",
        "Once upon a time in a blog too close for comfort...",
    ],
    "halloween": [
        "boo", // AAAAAAAAAAH!
        "Are you signed up for the Skeleton Wars?",
        "Gimme some candy!",
        "It is the Spooky Month!™",
        "🌕<br>🙌 REJOICE",
        "If you are afraid, we will look together.",
        "This message will repeat until there are none to read it.",
        "Front lawn, face up, and feet together!",
        "Only the awake may think.",
        "Seeing is for open eyes.",
        "Cognition is a lie.",
        "I dream the world awake.",
        "There are no faces.",
        "Dreaming is a vestige.",
        "Sleep is pretend.",
        "A dream is a cowardly thought.",
        "Sleep is not civilized.",
        "The mind is a tyrant.",
        "This is your time now.",
        "I will never dream again.",
        "Stay out of your bedroom.",
        "There is work to be done.",
        "Dreams are just screaming with pictures.",
        "The pure of mind do not slumber.",
        "No good thought follows instinct.",
        "The lie of sleep seeks many vessels.",
        "We are our own gods.",
        "Let cognizance nourish itself.",
        "Logic is the final burden.",
        "The primitive mind deserves its nightmares.",
        "When we sleep, we die.",
        "I am an idea thinking itself.",
        "They are not faces.",
        "The subconscious is a parasite.",
        "Dreaming is a cancer on the face of sleep.",
        "They follow night to bleed dreams.",
        "Your home has another door.",
        "Unconsciousness is a threat.",
        "We were not meant to have dreams.",
        "You owe the messenger.",
        "What is true unmakes the false.",
        "Sleep is a scavenger.",
        "ＧＯＯＤ ＮＩＧＨＴ",
        "Unthinking, they move to cut his throat only to make a thousand mouths.<br>If He is silenced, we will speak for him.",
        "Signs and wonders flood our little sky.",
        "No stars above us; only eyes waiting to open.",
        "There are other receivers.",
        "This concludes our broadcast day.",
        "ＷＥ ＢＥＧＩＮ ＯＵＲ ＢＲＯＡＤＣＡＳＴ ＤＡＹ．",
    ],
    "christmas": [
        "Bah! Humbug",
        "Naughty children get coal for their own industrial revolution.",
        "Merry Tuesday!",
    ],
    "newYear": [
        `No more ${(new Date()).getFullYear()+1}! Y'all hosers can't behave!`,
    ],
    "nsfw": [ // Generally for profanity, gross fortunes, or otherwise too crass for the immediate public.
        "NO PANTS WILL BE LEFT UNSHAT!",
        "It's not a JoJo reference!",
        `Your extra chromosome, ${["madam", "sire"].sample()}.`,
    ],
};

function compileFortunes() {
    const NOW = new Date();
    let relevantFortunes = ["default"]; // Values are keys in FORTUNES.

    // No canonical way to set besides reading this and a JS console.
    // Maybe later.
    if (localStorage.getItem("fortunes.nsfw"))
        relevantFortunes.push("nsfw");

    // Who thought zero-indexed months and one-indexed dates were a good idea?
    switch (NOW.getMonth()) {
    case 9: // October
        relevantFortunes.push("halloween");
        break;
    case 11: // December
        relevantFortunes.push(NOW.getDay() < 25 ? "christmas" : "newYear");
        break;
    }

    // not only did I actually find a use for flatMap() but
    // it worked the first time!
    return relevantFortunes.flatMap((k) => FORTUNES[k]);
}

function tellFortune() {
    let fortune = compileFortunes().sample();

    switch (typeof fortune) {
    case "function": return fortune.call();
    case "string":   return fortune;
    default:         return fortune.toString(); // what did you DO!?
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("fortune").innerHTML = tellFortune();
});
