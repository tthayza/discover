**<h2>Prototype</h2>**

<p>A maioria dos dados em JS são encapsulados por um objeto, que herdam toda uma cadeia de protótipos ou prototype chain, que são funcionalidades/funções que são liberadas pela linguagem a depender do tipo de dado. Isso é conhecido também como ascender a um protótipo.
Por exemplo: uma string é descendente do objeto String, que constrói uma cadeia de protótipos dentre esses -> concat, toString, length, charAt, replace etc. </p>

**<h2>Type Conversion (typecasting) X Type Coersion </h2>**

- Utiliza-se para alterar um tipo de dado para outro tipo;

- **Type Conversion (typecasting)**

  - Capacidade do programador de fazer a troca.

- **Type Coersion**
  - Ato de forçar uma troca.

<h2> Alguns métodos... </h2>

- Para fixar uma quantidade de casas decimais: <code>.toFixed(n)</code>, retorna uma string.
- Para substituir uma caracter por outro:<code> .replace('isso', 'isto')</code>
- Transformar cada caractere de uma string em um elemento no array: <code>Array.from(stringAqui)</code>.
- Para adicionar um elemento no início do array: <code>array.unshift()</code>.
- Para remover elemento do fim do array: <code>array.shift()</code>.
- Para remover 1 ou + elementos de um array:
  <code>array.splice(primeiro elemento a ser retirado, até o último elemento a ser retirado)</code>
