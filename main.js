const fact = document.getElementById('fact');
const source = document.getElementById('source');
const button = document.getElementById("button")

button.addEventListener("click", () =>{
    async function fetchData(){
        await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => response.json())
        .then(data => {
            fact.innerHTML = data.text;
            source.innerHTML = "by " + data.source;
        })
    } 

    fetchData()
})