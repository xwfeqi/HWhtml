document.addEventListener("DOMContentLoaded", function () {
    const sourceText = document.getElementById("source-text");
    const resultText = document.getElementById("result-text");
    const alphabetImagePath = "images/";

    document.getElementById("go").addEventListener("click", function () {
        const inputText = sourceText.value.toLowerCase();
        resultText.innerHTML = "";

        let delay = 0;

        for (const char of inputText) {
            if (char === " ") {
                const space = document.createElement("span");
                space.innerText = " ";
                resultText.appendChild(space);
            } else if (/^[a-z]$/.test(char)) {
                const image = new Image();
                image.src = `${alphabetImagePath}${char}.png`;
                image.alt = char;
                image.style.animation = `appears 1s ${delay}s both`;
                resultText.appendChild(image);
            }

            delay += 0.1;
        }
    });
});
