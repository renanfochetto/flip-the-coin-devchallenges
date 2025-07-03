//Objeto que contém as informações das moedas
const coins = [
  {
    name: "Heads",
    image: "assets/images/heads.svg",
    alt: "Image of a coin showing heads"
  },
  {
    name: "Tails",
    image: "assets/images/tails.svg",
    alt: "Image of a coin showing tails"
  }
];

// Função para gerar tempo de duração aleatório
const getRandomDuration = () =>
  Math.floor(Math.random() * 900) + 1100;

// Função para obter uma moeda aleatória
const getRandomCoin = () =>
  Math.random() < 0.5 ? coins[0] : coins[1];

// Função para tocar o som de lançamento
const playSound = (audio) => {
  audio.currentTime = 0;
  audio.play();
};

// Função para animar a moeda
const animateCoin = (element, duration) => {
  element.classList.remove("flip-animation");
  void element.offsetWidth;
  element.style.animationDuration = `${duration}ms`;
  element.classList.add("flip-animation");
};

// Função para atualizar a exibição da moeda
const updateCoinDisplay = ({ name, image, alt }) => {
  const coin = document.getElementById("flip-result");
  const label = document.getElementById("coin-name");
  coin.setAttribute("src", image);
  coin.setAttribute("alt", alt);
  label.textContent = name;
};

// Função para lidar com o lançamento da moeda
const handleCoinFlip = () => {
  const coinElement = document.getElementById("flip-result");
  const flipSound = document.getElementById("flip-sound");

  const duration = getRandomDuration();

  animateCoin(coinElement, duration);
  playSound(flipSound);
  console.log(`Moeda lançada... girando por ${duration}ms`);

  setTimeout(() => {
    const result = getRandomCoin();
    console.log("Resultado revelado:", result.name);
    updateCoinDisplay(result);
  }, duration);
};

// Adiciona os eventos de clique e tecla para iniciar o lançamento da moeda
["click", "keydown"].forEach((evt) => {
  if (evt === "keydown") {
    document.addEventListener(evt, (e) =>
      e.key === "Enter" && handleCoinFlip()
    );
  } else {
    document.querySelector("button").addEventListener(evt, handleCoinFlip);
    document.getElementById("flip-result").addEventListener(evt, handleCoinFlip);
  }
});
