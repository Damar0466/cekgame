document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = [
      "a",
      "b",
      "c",
      "Maaf Jodoh Tidak Diketahui",
      "d",
      "e",
      "f",
      "Maaf Jodoh Tidak Diketahui",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "Maaf Jodoh Tidak Diketahui",
      "m",
      "n",
      "o",
      "p",
      "Maaf Jodoh Tidak Diketahui",
      "q",
      "r",
      "s",
      "Maaf Jodoh Tidak Diketahui",
      "t",
      "u",
      "v",
      "Maaf Jodoh Tidak Diketahui",
      "w",
      "x",
      "y",
      "z",
      "Maaf Jodoh Tidak Diketahui",
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    const nameInput = document.getElementById("nameInput").value;

    const answerDisplay = document.getElementById("nameForm");
    answerDisplay.innerHTML = `${nameInput} Inisial Jodoh Lu Adalah: <br> <span class="random-answer">${randomAnswer}</span>`;
    answerDisplay.classList.add("answer-style");
  });
