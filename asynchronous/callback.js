function imprimirDado(dado) {
  console.log('outras tarefas')
  console.log(dado())
}

imprimirDado(function () {
  return 'olá mundo'
})

// callback é uma função que é passada como um argumento para outra função e depois de algum momento ela será chamada de volta
