fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then (data => {
    let advice = data.slip.advice;
    let id = data.slip.id;
    document.getElementById("adviceText").innerHTML = `"${advice}"`;
    document.getElementById("adviceID").innerHTML = `ADVICE #${id}`;
})

document.getElementById("button").addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        let advice = data.slip.advice;
        let id = data.slip.id;
        document.getElementById("adviceText").innerHTML = `"${advice}"`;
        document.getElementById("adviceID").innerHTML = `Advice #${id}`;
    })
})

