"use strict";

Array.prototype.sample = function() {
    return this.at(Math.floor(Math.random() * this.length));
}

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
        // "As if margins should marginalize MY RIGHT to buy a blender for 99p!"?,
        "Can't you just crush things with a spoon?",
        "Once upon a time in a blog far far away...",
        "You encounter the Dread Gazebo. Roll for initiative.",
    ],
    "halloween": [
        "boo",
        "Are you signed up for the Skeleton Wars?",
        "Gimme some candy!",
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
        // Be-Spooky-Without-Referencing-LOCAL58 Challenge: Failed ❌
    ],
    "christmas": [
        "Bah! Humbug", // After they try to hype us for Christmas in September, we're tired of it by the time the big day arrives. There's no way this was an actual holidy before Sears & Roebuck came around.
        "Naughty children get coal to power their factory.", // Or is blasting all the biters in Factorio something good children do?
    ],
    "newYear": [
        `No more ${(new Date()).getFullYear()+1}! Y'all hosers can't behave!`,
    ],
    "nsfw": [
        "NO PANTS WILL BE LEFT UNSHAT!",
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
        if (NOW.getDay() > 25)
            relevantFortunes.push("newYear");
        else
            relevantFortunes.push("christmas");
        break;
    }

    // Not only did I actually find a use for flatMap() but
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
    // let fortune = document.createElement("span");
    // fortune.id = "fortune";
    // fortune.innerHTML = tellFortune();
    // document.getElementById("pageheader").appendChild(fortune);
    document.getElementById("fortune").innerHTML = tellFortune();
});
