const inputEl = document.getElementById("searchQuery");
const divEl = document.querySelector("div");
async function getWordmeaning(event) {
    try {
        event.preventDefault();
        const wordValue = inputEl.value;
        divEl.innerHTML = '';
        const fetchCall = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`);
        if(!fetchCall.ok){
            throw new Error(`Word not found : ${wordValue}`);
        }
        const response = await fetchCall.json();
        const createHeadingelement = document.createElement("h2");
        createHeadingelement.innerText = response[0].meanings[0].definitions[0].definition;
        divEl.appendChild(createHeadingelement);
    } catch (error) {
        alert(error);
    }
}