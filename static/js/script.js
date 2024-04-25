const checkOuts = [
    { score:   2, next: [ "D1" ] },
    { score:   3, next: [ "1, D1" ] },
    { score:   4, next: [ "D2" ] },
    { score:   5, next: [ "1, D2", "3, D1" ] },
    { score:   6, next: [ "D3", "2, D2" ] },
    { score:   7, next: [ "3", "D2" ] },
    { score:   8, next: [ "D4" ] },
    { score:   9, next: [ "1, D4" ] },
    { score:  10, next: [ "D5", "2, D4" ] },

    { score:  11, next: [ "3, D4" ] },
    { score:  12, next: [ "D6" ] },
    { score:  13, next: [ "5, D4" ] },
    { score:  14, next: [ "D7", "6, D4" ] },
    { score:  15, next: [ "7, D4", "3, D6" ] },
    { score:  16, next: [ "D8" ] },
    { score:  17, next: [ "1, D8", "9, D4 (beginners shot)" ] },
    { score:  18, next: [ "D9", "2, D8" ] },
    { score:  19, next: [ "3, D8", "11, D4 (avoid 19 bust)" ] },
    { score:  20, next: [ "D10" ] },

    { score:  21, next: [ "5, D8", "13, D4", "1, D10" ] },
    { score:  22, next: [ "D11", "6, D8", "2, D10" ] },
    { score:  23, next: [ "7, D8", "3, D10" ] },
    { score:  24, next: [ "D12" ] },
    { score:  25, next: [ "9, D8", "5, D10 (left handed)", "1, D12", "17, D4" ] },
    { score:  26, next: [ "D13", "10, D8", "2, D12", "6, D10" ] },
    { score:  27, next: [ "11, D8", "3, D12", "19, D4 (target 7-3)", "7, D10" ] },
    { score:  28, next: [ "D14" ] },
    { score:  29, next: [ "13, D8", "5, D12", "9, D10" ] }, 
    { score:  30, next: [ "D15", "10, D10", "14, D8", "6, D12" ] },

    { score:  31, next: [ "15, D8", "7, D12", "11, D10" ] },
    { score:  32, next: [ "D16" ] },
    { score:  33, next: [ "1, D16", "17, D8", "9, D12", "13, D10" ] },
    { score:  34, next: [ "D17", "2, D16", "10, D12", "14, D10" ] },
    { score:  35, next: [ "3, D16", "19, D8", "11, D12", "15, D10" ] },
    { score:  36, next: [ "D18" ] },
    { score:  37, next: [ "5, D16", "1, D18", "13, D12", "17, D10" ] },
    { score:  38, next: [ "D19", "6, D16", "2, D18", "14, D12", "18, D10" ] },
    { score:  39, next: [ "7, D16", "3, D18", "15, D12", "19, D10" ] },
    { score:  40, next: [ "D20" ] },

    { score: 60, next: [ "20, D20" ] },
    { score: 61, next: [ "O/B, D18", "T15, D8", "15, 6, D20", "T7, D20", "11, B", "T11, D14" ] }
]

window.onload = function() {
    const score = document.getElementById("score");
    const next = document.getElementById("next");
    score.onchange = function() {
        const out = checkOuts.find(item => item.score === parseInt(score.value))
        if (!out) {
            next.innerHTML = "N/A";
            return;
        }
        next.innerHTML = out.next.join("<br>");
    };


    const area = document.getElementById("buttons");

    const addButton = (i) => {
        const button = document.createElement("button");
        button.innerHTML = i;
        button.onclick = function(evt) {
            evt.preventDefault();
            const score = document.getElementById("score");
            score.value = score.value - i;
            score.dispatchEvent(new Event('change'));
        };
        area.appendChild(button);
    }

    for (let i = 1; i <= 20; i++) {
        addButton(i);
    }

    addButton(25);
};