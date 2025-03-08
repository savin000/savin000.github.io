const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

document.querySelectorAll("h1, li").forEach(animateText);

function animateText(element) {
    const originalText = element.textContent;
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = originalText
            .split("")
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }

                const letter =
                    letters[Math.floor(Math.random() * letters.length)];

                return char === char.toUpperCase()
                    ? letter
                    : letter.toLowerCase();
            })
            .join("");

        if (iterations >= originalText.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
}
