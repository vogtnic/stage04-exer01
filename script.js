/*
Bora praticar e rever tudo o que foi ensinado na aula?
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar?

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

// soma +
alert(
  `A soma dos dois números digitados é: ${
    Number(numberOne) + Number(numberTwo)
  }.`
)
// subtração -
alert(
  `A subtração dos dois números digitados é: ${
    Number(numberOne) - Number(numberTwo)
  }.`
)
// multiplicação *
alert(
  `A multiplicação dos dois números digitados é: ${
    Number(numberOne) * Number(numberTwo)
  }.`
)
// divisão /
alert(
  `A divisão dos dois números digitados é: ${(
    Number(numberOne) / Number(numberTwo)
  ).toFixed(2)}.`
)
// o resto da divisão %
alert(
  `O resto da divisão dos dois números digitados é: ${
    Number(numberOne) % Number(numberTwo)
  }.`
)

// verificar se a soma dos dois números é par ou ímpar

let sum = Number(numberOne) + Number(numberTwo)

if (sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (Number(numberOne) === Number(numberTwo)) {
  alert(`Os dois números inseridos são iguais!`)
} else {
  alert(`Os dois números inseridos são diferentes!`)
}
