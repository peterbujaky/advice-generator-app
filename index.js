fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then (data => {
    const advice = data.slip.advice;
    const id = data.slip.id;
    document.getElementById("adviceText").innerHTML = `"${advice}"`;
    document.getElementById("adviceID").innerHTML = `Advice #${id}`;
})

