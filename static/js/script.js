window.onload = function() {
    const score = document.getElementById("score");
    const next = document.getElementById("next");

    const checkOuts = []

    fetch("scores.json")
        .then(response => response.json())
        .then(data => {
            checkOuts.push(...data);
        })
        .catch(error => {
            console.error("Error fetching scores.json:", error);
        });

    score.onchange = function() {
        const out = checkOuts.find(item => item.score === parseInt(score.value))
        if (!out) {
            next.innerHTML = "N/A";
            return;
        }
        next.innerHTML = out.next.join("<br>");
        buttonState();
    };

    const area = document.getElementById("buttons");

    const addButton = (i) => {
        const button = document.createElement("button");
        button.innerHTML = i;
        button.className = "numberButton";
        button.onclick = function(evt) {
            evt.preventDefault();
            const score = document.getElementById("score");
            score.value = score.value - i;
            score.dispatchEvent(new Event('change'));
        };
        area.appendChild(button);
    }

    const buttonState = () => {
        const buttons = document.getElementsByClassName("numberButton")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = (score.value === "" ? "disabled" : "");
        }
    }

    for (let i = 1; i <= 20; i++) {
        addButton(i);
    }

    addButton(25);

    buttonState();
};