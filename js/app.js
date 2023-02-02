/* --------------------------------------------------------------------------------------------------
Imports
---------------------------------------------------------------------------------------------------*/
async function fetchStats() {
    const response = await fetch('data.json');
    const json = await response.json();
    return json;
}

/* --------------------------------------------------------------------------------------------------
Variables
---------------------------------------------------------------------------------------------------*/
const stats = await fetchStats();

/* --------------------------------------------------------------------------------------------------
functions
---------------------------------------------------------------------------------------------------*/
function setCard(side, data) {
    const card = document.querySelector(`.${side}`);
    card.team = card.querySelector("h2");
    card.playerImg = card.querySelector("img");
    card.playerName = card.querySelector("h1");

    // set background Color
    document.body.style.setProperty(`--bg-${side}`, `var(--${data.team})`);
    // set team logo
    document.body.style.setProperty(`--bg-img-${side}`, `url(../img/${data.team}.svg)`);
    // set player name
    card.playerName.textContent = data.player;
    //set player picture
    card.playerImg.src = data.pic;
    //set team short name
    card.team.textContent = data.team;
    // set values 
    if (side === "left") {
        card.querySelector("[data-gp]").textContent = data["gp"];
        card.querySelector("[data-min]").textContent = data["min"];
        card.querySelector("[data-pts]").textContent = data["pts"];
        card.querySelector("[data-fgp]").textContent = data["fg%"];
        card.querySelector("[data-3pm]").textContent = data["3pm"];
        card.querySelector("[data-3pp]").textContent = data["3p%"];
        card.querySelector("[data-ftp]").textContent = data["ft%"];
        card.querySelector("[data-reb]").textContent = data["reb"];
        card.querySelector("[data-ast]").textContent = data["ast"];
        card.querySelector("[data-stl]").textContent = data["stl"];
        card.querySelector("[data-blk]").textContent = data["blk"];
        card.querySelector("[data-eff]").textContent = data["eff"];
    }
    card.querySelector("[data-gp]").dataset["gp"] = data["gp"];
    card.querySelector("[data-min]").dataset["min"] = data["min"];
    card.querySelector("[data-pts]").dataset["pts"] = data["pts"];
    card.querySelector("[data-fgp]").dataset["fgp"] = data["fg%"];
    card.querySelector("[data-3pm]").dataset["3pm"] = data["3pm"];
    card.querySelector("[data-3pp]").dataset["3pp"] = data["3p%"];
    card.querySelector("[data-ftp]").dataset["ftp"] = data["ft%"];
    card.querySelector("[data-reb]").dataset["reb"] = data["reb"];
    card.querySelector("[data-ast]").dataset["ast"] = data["ast"];
    card.querySelector("[data-stl]").dataset["stl"] = data["stl"];
    card.querySelector("[data-blk]").dataset["blk"] = data["blk"];
    card.querySelector("[data-eff]").dataset["eff"] = data["eff"];
}


String.prototype.shuffle = function () {
    var chars = this.split("");
    var charsAmount = chars.length;

    for (var i = charsAmount - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
    return chars.join("");
};

function compareValues(ev) {
    if (Object.keys(ev.target.dataset).length > 0) {
        const category = Object.keys(ev.target.dataset)[0];
        console.log(category);
    }
}

function init() {
    document.addEventListener("touchstart", function () { }, false);

    stats.sort((a, b) => 0.5 - Math.random());

    setCard("left", stats[0]);
    setCard("right", stats[1]);

    document.addEventListener("click", compareValues, false);
}

/* --------------------------------------------------------------------------------------------------
public members, exposed with return statement
---------------------------------------------------------------------------------------------------*/
window.app = {
    init
};

app.init();
