// console.log('pedir uber')
// const promessa = new Promise((resolve, rejected) => {

//     return resolve('carro chegou')
// })
// console.log('aguardando')

// promessa.then(result => console.log(result))
let aceitar = true
console.log('pedir uber')
const promessa = new Promise((resolve, rejected) => {
  if (aceitar) return resolve('pedido aceito!')
  return rejected('pedido negado!')
})
console.log('aguardando')

promessa
  .then((result) => console.log(result))
  .catch((erro) => console.log(erro))
  .finally(() => console.log('Promessa finalizada!'))
