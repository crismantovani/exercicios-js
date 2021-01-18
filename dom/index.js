// Documentos de ajuda:
// https://tableless.com.br/entendendo-o-dom-document-object-model/
// https://evelisee.github.io/laboratoria/array-objetos.pdf
document.querySelector("#root").innerHTML = `
<h1>Olá, mundo!</h1>
  <div>Esse é um exercício pra te ajudar a virar crack em javascript ❤️
  <br>
    <button id="start-btn">Começar!</button>
    <p>Minha melhor característica é:</p>
      <select id="select-charac">
        <option value="">Selecione uma característica</option>
        <option value="Inteligente">Inteligente</option>
        <option value="Carinhosa">Carinhosa</option>
        <option value="Determinada">Determinada</option>
        <option value="Empoderada">Empoderada</option>
        <option value="Prestativa">Prestativa</option>
        <option value="Esperançosa">Esperançosa</option>
        </select>
  </div>
  <br />
  <p>Entrar</p>
  <div id="error"></div>
  <input id="email" type="email" placeholder="Insira seu email" required />
    <input id="inputpwd" type="password" placeholder="Insira uma senha" required />
  <br /><br />
    <button type="submit" id="login-button">Entrar</button>
  </div>
`;

//--------------------
// Manipulação do DOM
// --------------------

// Exercício 1
// Faça com que o botão "Começar" na página dispare um log no console com "Foi clicado";

// Fluxo botão start
// 1. Inserir a ID do botão no HTML manipulando o DOM
// 2. Declarar var buttonStart para o JS 'enxergar' o botão
// 3. Com getElementById, declarar a ID usada no passo 1.
// 4. Utilizar o addEventListener para observar a ação do usuário neste botão (buttonStart)
// 5. Com o evento 'click', assim que o botão for clicado, executar a função "startBtn"

const buttonStart = document.getElementById("start-btn");
buttonStart.addEventListener("click", startBtn);

// Fluxo função startBtn
// 1. Chamar a função.
// 2. Pedir para o JS printar no console, declarando a string "Foi Clicado".

function startBtn() {
  console.log("Foi clicado");
}

// ----------------------------------------------------

// Exercício 2
// Quando o usuário selecionar uma opção no campo "Selecione uma característica", mostre no console a opção selecionada via manipulação do DOM;

// Fluxo do Select
// 1. Declarada a id "select-charac" no HTML para o select;.
// 2. Declarada a const 'selectCharacteristic'.
// 2.2 Utilizado o querySelector para 'chamar' a id #select-charac.
// 3. Utilizado o addEventListener e o evento 'change', para escutar quando ocorrem mudanças.
// 3.3 Se ocorrer uma 'change', executar a função userOptionSelected.

const selectCharacteristic = document.querySelector("#select-charac");
selectCharacteristic.addEventListener("change", userOptionSelected);

// Fluxo da função userOptionSelected
// 1. Criada a função 'userOptionSelected' que chama o 'event'.
// 2. Solicitado ao JS que printe no console o event, o target e o value:
// event = Evento de change
// target = Alvo do evento, no caso o select-charac
// value = Exibir o dado selecionado dentro do select

function userOptionSelected(event) {
  console.log(event.target.value);
}

// ----------------------------------------------------

// Exercício 3
//Crie um elemento de "card" via javascript (não pode ser feito no arquivo .html) de um animal de sua preferência com as seguintes informações:
// Reino, Filo, Classe, Ordem, Subordem, Família, Gênero, Espécie.

const dogInfo = {
  title: "Vira Lata Caramelo",
  reino: "Animalia",
  filo: "Chordata",
  classe: "Mammalia",
  ordem: "Carnívora",
  subordem: "Caniformia",
  familia: "Canidae",
  genero: "Canis",
  especie: "Canis Lupus",
};

// console.log(dogInfo.title)

let divAnimal = document.createElement('div');
divAnimal.id = 'divAnimal';
divAnimal.innerHTML = `
<br />
<hr class="style1" />
  <h1>Card Animal</h1>
    <article class="card">
      <h3>${dogInfo.title}</h3>
        <img src="./img/caramelo.png" alt="Vira Lata Caramelo" class="images"><img>
          <p class="card-type"><strong>Reino:</strong> ${dogInfo.reino}</p>
          <p class="card-type"><strong>Filo:</strong> ${dogInfo.filo}</p>
          <p class="card-type"><strong>Classe:</strong> ${dogInfo.classe}</p>
          <p class="card-type"><strong>Ordem:</strong> ${dogInfo.ordem}</p>
          <p class="card-type"><strong>Subordem:</strong> ${dogInfo.subordem}</p>
          <p class="card-type"><strong>Família:</strong> ${dogInfo.familia}</p>
          <p class="card-type"><strong>Gênero:</strong> ${dogInfo.genero}</p>
          <p class="card-type"><strong>Espécie:</strong> ${dogInfo.especie}</p>
    </article>
`;
document.body.appendChild(divAnimal);

// 4. Ao clicar no botão de "entrar", faça uma validação nos campos de email e senha para saber se foram preenchidos.
// Caso contrário, mostre uma mensagem de erro na tela.

// Plus: Se o usuário digitar novamente e preencher os campos, limpe a mensagem de erro.

const loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", validator);

function validator(){
  const errorMessage = document.querySelector('#error');
  if (window.document.getElementById("email").value
  == "") {
    errorMessage.innerHTML = "O campo de email precisa ser preenchido";
    email.focus()
    return false
  }
  else if (window.document.getElementById("inputpwd").value
  == "") {
    errorMessage.innerHTML = "O campo de senha precisa ser preenchido";
    inputpwd.focus()
    return false
  }
};
