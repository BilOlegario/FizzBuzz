function Calcular() {
  let numero1 = parseInt(document.getElementById("num1").value)
  let numero2 = parseInt(document.getElementById("num2").value)
  let valorContagemErrada = document.getElementById("valorContagemErrada")
  let valorContagem = document.getElementById("valorContagem")
  let quantidadeImpressa = parseInt(document.getElementById("contagemNumeros").value)
  let msgErro = []
  
  if (numero1 < 2 || numero2 < 2) { 
    msgErro.push("Somente números maiores ou iguais a 2.")
  } 
  if (numero1 > 20 || numero2 > 20) { 
    msgErro.push("Somente números menores ou iguais a 20.")
  } 
  if (numero1 == numero2) { 
    msgErro.push("Os números não devem ser iguais!")
  } 
  if (quantidadeImpressa < 21 || quantidadeImpressa > 500) { 
    msgErro.push("Somente números entre 20 e 500.")
  } 
  valorContagemErrada.innerHTML = "";
  valorContagem.innerHTML = "";
  if (msgErro.length <= 0) {
    const lista = imprimir(numero1, numero2, quantidadeImpressa)
    valorContagem.innerHTML = lista.join(" - ")
  } else {
    let listItem = document.createElement("ul")
    msgErro.forEach(msg => {
      let item = document.createElement("li")
      item.appendChild(document.createTextNode(msg))
      listItem.appendChild(item)
    })
      valorContagemErrada.appendChild(listItem)
  }
}


function imprimir(numero1, numero2, quantidadeImpressa) {
    let resultado = []
    for (var i = 1; i <= quantidadeImpressa; i++) {
      if (i % numero1 == 0 && i % numero2 == 0) {
      resultado.push("FizzBuzz")
      } else if (i % numero2 == 0) {
      resultado.push("Buzz")
      } else if (i % numero1 == 0) {
      resultado.push("Fizz")
      } else resultado.push(i)
    }
  return resultado
}