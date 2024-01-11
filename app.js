const randomNumberFeedback = document.querySelector("#randomNumber");
const generateRandomBtn = document.querySelector("#generateRandomBtn");

generateRandomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Math.random() * (11 - 1) + 1;

    const feedbackMessage = `Random Number: ${randomNumber}`;
    console.log(feedbackMessage);

    randomNumberFeedback.innerHTML = feedbackMessage;
});