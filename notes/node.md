**<h1> Node </h1>**

<p>Node é single-threaded, non-blocking e asynchronous</p>

<code>\_\_filename = nome do arquivo atual</code>

**<h2>require</h2>**

<p>require() precisa de um argumento, é uma maneira de chamar módulos que são nativos do nodejs ou que vão ser criados e até mesmo instalar no node.</p>

**<h2>path</h2>**

<p>.basename() retorna a última porção do caminho do path.</p>
<p>path: módulo que existe dentro do node, fornece utilidades para trabalhar com caminhos de arquivos e diretórios.</p>

**<h2>module</h2>**

<p>Para criar um módulo que seja possível ser exportado:
<code>module.exports = "Enviando dados do meu módulo"</code></p>

<p>Para importar o módulo criado anteriormente, basta na pasta da importação escrever:
<code>const myModule = require('./caminhoDeOndeEstaMeuModulo')</code></p>

**<h2>process</h2>**

- **argv**: em termo de estrutura, se trata de um array contendo o node dentro de um bin e o arquivo atual. Ou seja, uma lista de argumentos que está rodando no node. Então, tudo o que está sendo rodado, está sendo inserido em uma posição dentro desse array. Podendo gerar interações através desses dados que estão sendo rodados no node, através da manipulação dos dados em suas devidas posições.

- **flags**: para gerar flags que recebem valores, basta rodar --nomeFlag "valorFlag" e para salvar ctrl+S.

**<h2>Node + EJS</h2>**

- EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JS.

- Permite que crie Front-edn com html dentro do node, renderizado pelo JS.
