var cachorros = [
  { nome: "Thor", imagem: "img/dog1.jpg" },
  { nome: "Zeca", imagem: "img/dog2.jpg" },
  { nome: "Zeus", imagem: "img/dog3.jpg" },
  { nome: "Pingo", imagem: "img/dog4.jpg" },
];

var gatos = [
  { nome: "Dunga", imagem: "img/cat1.jpg" },
  { nome: "Mika", imagem: " img/cat2.jpg" },
  { nome: "Conan", imagem: "img/cat3.jpg" },
  { nome: "Messi", imagem: "img/cat4.jpg" },
];

let select_animais = document.querySelector("#select_animais");
let container = document.querySelector("#container");
let nome = document.querySelector("#nome");
let linha = document.querySelector(".linha");

select_animais.addEventListener("input", () => {
  limparDivContainer();

  if (select_animais.value === "dog") {
    cachorros.forEach(function (c) {
      let dogs = document.createElement("img");

      dogs.src = c.imagem;
      dogs.id = c.nome;

      container.appendChild(dogs);

      linha.addEventListener("mouseover", (e) => {
        nome.innerHTML = e.target.id;
      });
    });
  } else {
    gatos.forEach(function (gat) {
      let gats = document.createElement("img");
      gats.src = gat.imagem;
      gats.id = gat.nome;
      container.appendChild(gats);

      linha.addEventListener("mouseover", (e) => {
        nome.innerHTML = e.target.id;
      });
    });
  }
});

container.addEventListener("mouseout", () => {
  p = document.querySelector("p");
  p.innerText = "";
});

function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
