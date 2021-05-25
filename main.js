/*- Mostrar uma tela de boas-vindas na qual se peça, através de prompt,
 o nome do usuário antes de começar a prova.*/

const userName = prompt("Coloque o seu nome:");
document.getElementById("helloUser").innerHTML = "Olá, " + userName + "!";

/*- - Mostrar uma tela na qual o usuário pode escolher se quer mesmo
 dar início a prova ou não.*/

const choice = prompt(
  "Você gostaria de começar o teste de conhecimento de comidas regionais?\n 1.Sim \n  2.Não "
);
console.log(choice);

/*Caso ele queira, seguirá para a próxima etapa, descrita no item*/

//condição sim, se o usuário desejar continuar:

if (choice == 1) {
  // primeira questão sobre comida
  let firtsQuestion = prompt(
    "1. Acarajé é de qual estado do Brasil? \n 1- Bahia \n 2-São Paulo"
  );

  if (firtsQuestion == 1) {
    document.getElementById("correta1").innerHTML = "Questão 1 correta";
  } else {
    document.getElementById("incorreta1").innerHTML = "Questão 1 incorreta";
  }

  //segunda questão sobre o comida
  let secondQuestion = prompt(
    "2. Feijoada é de qual país? \n 1- Brasil \n 2- China"
  );
  if (secondQuestion == 2) {
    document.getElementById("correta2").innerHTML = "Questão 2 correta";
  } else {
    document.getElementById("incorreta2").innerHTML = "Questão 2 incorreta";
  }
  //terceira questão sobre o comida
  let thirdQuestion = prompt(
    "3. Escolha um prato típico brasileiro  \n 1- Sushi. \n 2- Arroz e feijão."
  );

  if (thirdQuestion == 2) {
    document.getElementById("correta3").innerHTML = "Questão 3 correta";
  } else {
    document.getElementById("incorreta3").innerHTML = "Questão 3 incorreta";
  }

  document.getElementById("respostascertas").innerHTML = "Respostas certas:";

  document.getElementById("respostaserradas").innerHTML =
    "Respostas incorretas:";
} else {
  alert("Obrigado! Esperamos você em uma próxima oportunidade!");
}
