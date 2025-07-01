// // ✅ Função pura: número aleatório no intervalo
// const gerarAleatorio = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
//
// // ✅ Função pura: define resultado a partir do valor
// const determinarFace = (valor) =>
//   valor % 2 === 0 ? "cara.png" : "coroa.png";
//
// // ⚙️ Função impura: controla tudo
// const girarMoeda = () => {
//   const valor = gerarAleatorio(1, 4);
//   const tempo = valor * 500; // entre 0.5s e 2s, por exemplo
//   const resultado = determinarFace(valor);
//
//   // animação / som
//   tocarSomMoeda(); // opcional
//   animarMoedaGirando();
//
//   setTimeout(() => {
//     const img = document.createElement("img");
//     img.src = resultado;
//     const div = document.getElementById("resultado");
//     div.innerHTML = "";
//     div.appendChild(img);
//   }, tempo);
// };
