/*alert('Boas vindas ao nosso site');
let nome = Lua
let idade = 25
let numeoDeVendas = 50
let saldoDisponivel = 1000
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
let nome = prompt('Digite o seu nome');
let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}*/

/////////////////


/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let numeroDigitado = prompt('Escolha um número de 1 a 30');

if (numeroDigitado == numeroSecreto) {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
      alert('Parabéns! Você descobriu o número secreto ' + numeroSecreto);
} else {
    alert('Você errou')
}*/

/*alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let numeroDigitado = prompt('Escolha um número de 1 a 30');

if (numeroDigitado == numeroSecreto) {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
      alert('Parabéns! Você descobriu o número secreto ' + numeroSecreto);
} else {
    if (numeroDigitado > numeroSecreto){
        alert(`O número secreto é menor que ${numeroDigitado}`);
    } else {
        alert(`O número secreto é maior que ${numeroDigitado}`);
    }
};*/

alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 4000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;
while(numeroDigitado != numeroSecreto){
    numeroDigitado = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    if (numeroDigitado == numeroSecreto) {
        break;
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);

    } else {
      if (numeroDigitado > numeroSecreto){
        alert(`O número secreto é menor que ${numeroDigitado}`);
      } else {
        alert(`O número secreto é maior que ${numeroDigitado}`);
      }
      tentativas++;
    }
}
 
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`); 


//if(tentativas > 1){
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`); 
//} else {
//    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`); 
//}





/*let numero = prompt('Escolha um número');
let contador = 0

while (contador <= numero) {
    alert(contador)
    console.log(contador);
    contador++
    //contador = contador + 1;
}*/
////////////////


//alert('Vamos jogar?');
/*let diaSemana = prompt('Escolha um dia da semana');

if (diaSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('Bom final de semana');
} else {
    alert('Boa semana');
}*/

/*let diaSemana = prompt('Escolha um dia da semana');

if (diaSemana === 'Sábado') {
    alert('Bom final de semana');
} else if (diaSemana == 'Domingo'){
    alert('Bom final de semana');
} else if (diaSemana == 'Segunda'){
    alert('Boa segunda');
}
else {
    alert('Boa semana');
}*/


////////////////////

/*let numero = prompt('Digite um número');

if (numero >= '0') {
    alert('O número informado é positivo');
} else {
    alert('O número informado é negativo');
}*/

/////////////////////

/*let nome = prompt('Insira seu nome');
alert('Boas vindas ' + nome);*/