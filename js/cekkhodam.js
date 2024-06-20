document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = [
      "Rawa Rontek",
      "Suster Ngesot",
      "Babi Ngepet",
      "Kosong",
      "Tuyul Mullet",
      "Sayur Rebus",
      "Cicak Sumbing",
      "WC Terbang",
      "Kunti Bogel",
      "Katak Merah",
      "Kelinci Pincang",
      "Ayam Tiren",
      "Uni Bakwan",
      "Kak Gem",
      "Naga Bonar",
      "Gardu PLN",
      "Royco Ayam",
      "Royco Sapi",
      "Bajai Jemping",
      "Cocomelon",
      "Ayam Jemping",
      "Kucing Disco",
      "Anjing Karate",
      "Ikan Terbang",
      "Burung Nyanyi",
      "Kupu-Kupu Dance",
      "Sapi Menari",
      "Domba Skateboard",
      "Kelinci Rap",
      "Harimau DJ",
      "Gajah Yoga",
      "Singa Selfie",
      "Ular Senam",
      "Kadal Breakdance",
      "Kura-Kura Surfing",
      "Tikus Hipster",
      "Badak Hula-Hoop",
      "Panda Balet",
      "Kucing Ninja",
      "Lumba-Lumba Clown",
      "Kera Superhero",
      "Kambing Jazz",
      "Bebek Hacker",
      "Angsa Samurai",
      "Rusa DJ",
      "Kuda Jemping",
      "Gajah Rollerblade",
      "Kucing Astronot",
      "Tikus Pilot",
      "Anjing Detektif",
      "Ikan Skating",
      "Burung DJ",
      "Kupu-Kupu Robot",
      "Sapi Astronaut",
      "Domba Pesta",
      "Kelinci Magician",
      "Harimau Detective",
      "Gajah Chef",
      "Singa Gamer",
      "Ular Pilot",
      "Kadal Chef",
      "Kura-Kura DJ",
      "Tikus Ninja",
      "Badak Astronaut",
      "Panda Surfer",
      "Kucing Detective",
      "Lumba-Lumba Spy",
      "Kera Rockstar",
      "Kambing Hacker"
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    const nameInput = document.getElementById("nameInput").value;

    const answerDisplay = document.getElementById("nameForm");
    answerDisplay.innerHTML = `Buset ${nameInput} Khodam Lu: <br> <span class="random-answer">${randomAnswer}</span>`;
    answerDisplay.classList.add("answer-style");
  });
