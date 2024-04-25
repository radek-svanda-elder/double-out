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
    
    { score:  41, next: [ "9,D16", "1,D20", "5,D18", "17,D12" ] },
    { score:  42, next: [ "10,D16 (best)", "6,D18", "2,D20", "18,D12" ] },
    { score:  43, next: [ "11,D16", "7,D18", "3,D20", "19,D12" ] },
    { score:  44, next: [ "12,D16", "8,D18", "4,D20", "20,D12" ] },
    { score:  45, next: [ "13,D16", "9,D18", "5,D20" ] },
    { score:  46, next: [ "14,D16", "10,D18 (best)", "6,D20" ] },
    { score:  47, next: [ "15,D16", "7,D20", "11,D18" ] },
    { score:  48, next: [ "16,D16 (best)", "8,D20", "12,D18" ] },
    { score:  49, next: [ "17,D16", "9,D20", "13,D18" ]},
    { score:  50, next: [ "18,D16", "10,D20", "14,D18", "DB (single dart only)" ]},

    { score:  51, next: [ "19,D16", "11,D20", "15,D18" ]},
    { score:  52, next: [ "20,D16", "12,D20", "T12,D8", "16,D18" ]},
    { score:  53, next: [ "13,D20", "17,D18" ]},
    { score:  54, next: [ "14,D20", "18,D18" ]},
    { score:  55, next: [ "15,D20", "19,D18" ]},
    { score:  56, next: [ "16,D20", "20,D18" ]},
    { score:  57, next: [ "17,D20", "O/B,D16 (not recommended)" ]},
    { score:  58, next: [ "18,D20" ]},
    { score:  59, next: [ "19,D20" ]},
    
    { score: 60, next: [ "20, D20" ] },
    { score: 61, next: [ "O/B, D18", "T15, D8", "15, 6, D20", "T7, D20", 
                            "11, B (2 darts left)", 
                            "T11, D14 (2 darts left)" ] },
    { score: 62, next: [ "T10,D16", "T14,D10", "T18,D4", "12,B (2 darts left)", "T12,D13 (2 darts left)", ] },
    { score: 63, next: [ "T13,D12", "T17,D6", "T9,D18", "13,B (2 darts left)"] },
    { score: 64, next: [ "T16,D8", "T8,D20", "14,B (2 darts left)", 
    "T14,D11 (2 darts left)" ] },
    { score: 65, next: [ 
        "O/B,D20",
        "T15,D10",
        "15,B used with 2 darts left",
        "T11,D16",
        "T19,D4",
    ] },
    { score: 66, next: [
        "T10,D18",
        "B,D8",
        "T14,D12",
        "16,B Used with 2 darts left",
        "T16,D9 2 dart option when opponent on a finish",
    ]},
    { score: 67, next: [
        "T17,D8",
        "17,B Used with 2 darts left",
        "T9,D20 For folks who insist on D20. Least desirable route",
    ]},
    {score: 68, next: [
        "T20,D4",
        "T16,D10",
        "T12,D16",
        "18,B Used with 2 darts left",
        "T18,D7 2 dart option when opponent on a finish",
    ]},
    {score: 69, next: [
        "T15,D12",
        "T19,D6",
        "T11,D18",
        "19,B Used with 2 darts left",
    ]},

    {score: 70, next: [
        "T18,D8",
        "T10,D20",
        "20,B Used with 2 darts left only and opponent on a finish",
        "T20,D5 2 dart option when opponent on a finish",
    ]},
    {score: 71, next: [
        "T13,D16",
        "T17,D10",
    ]},
    {score: 72, next: [
        "T12,D18",
        "T16,D12",
        "T20,D6",
    ]},
    {score: 73, next: [
        "T19,D8",
        "T11,D20 (not recommended)",
    ]},
    {score: 74, next: [
        "T14,D16",
        "T18,D10",
    ]},
    {score: 75, next: [
        "T17,D12",
        "T13,D18 Not recommended",
        "O/B,B Used with 2 darts left",
        ]},
    {score: 76, next: [
        "T20,D8",
        "T12,D20 Not recommended",
        "D18,D20 Used when 2 darts left"
    ]},
    {score: 77, next: [
        "T19,D10",
        "T15,D16 Not recommended",
    ]},
    {score: 78, next: [
        "T18,D12",
        "T14,D18 Not recommended",
    ]},
    {score: 79, next: [
        "T19,D11 Unorthodox",
        "19,20,D20",
        "T13,D20 Not recommended",
    ]},

    {score: 80, next: [
        "T20,D10",
        "T16,D16 (not recommended)",
        "D20,D20 (2 darts left)",
    ]},
    {score: 81, next: [
        "T19,D12",
        "19,T12,D13 Used when opponent on a finish.",
        "19,12,B Used when opponent on a finish",
        "T15,D18",
        "15,T16,D9 Used when opponent on a finish",
        "15,16,B Used when opponent on a finish",
        "O/B,16,D20 3 dart finish when opponent not on finish.",
    ]},
    {score: 82, next: [
        "B,D16",
        "O/B,17,D20",
        "T14,D20",
        "14,18,B",
        "14,T18,D7",
    ]},
    {score: 83, next: [
        "T17,D16",
        "17,T16,D9",
        "17,16,B",
    ]},
    {score: 84, next: [
        "T20,D12",
        "20,T14,D11",
        "20,14,B",
        "20,T16,D8 Used only when opponent not on a finish",
        "T16,D18",
        "16,T18,D7",
        "16,18,B",
        "16,T20,D4 Used only when opponent not on a finish",
    ]},
    {score: 85, next: [
        "T15,D20",
        "15,T20,D5",
        "15,20,B",
        "T19,D14",
        "19,T16,D9",
        "19,16,B",
    ]},
    {score: 86, next: [
        "T18,D16",
        "18,T18,D7",
        "18,18,B",
    ]},
    {score: 87, next: [
        "T17,D18",
        "17,T20,D5",
        "17,20,B",
    ]},
    {score: 88, next: [
        "T20,D14",
        "20,T18,D7",
        "20,18,B",
        "T16,D20 Used only when opponent not on a finish.",
    ]},
    {score: 89, next: [
        "T19,D16",
        "19,T20,D5",
        "19,20,B",
    ]},

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