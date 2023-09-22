<h1>HTTP</h1>

**<h2>Conceitos</h2>**

- Foi feito pra ser simples e legível;
- Baseado entre cliente e servidor (requisição/resposta);
- _Stateless:_ não guarda informações(estados), não existe relação entre conexões, uso de sessões nos browsers(cookies, storages) a ser enviada na próxima conexão.
- Extensível: nos headers são trazidas informações para a comunicação de acordo com a necessidade e os conteúdos dentro do body contém corpo do pedido ou da resposta.

**<h2>Cliente</h2>**

- É o _User Agent_: browser (na maioria da vezes) ou cURL;
- É a entidade que sempre dá início a comunicação, que fazem pedidos ao servidor. Pedidos esses que são feitos por meio de ações do Cliente, envolvem os métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`.

**<h2>SERVIDOR</h2>**

<p>Trata-se de uma máquina em algum lugar do mundo que está preparada para ouvir e processar os dados. Na qual vários servidores podem estar em um computador como também podem haver vários computadores se apresentando como um servidor. É também responsável por fornecer a resposta, contendo headers que contém o status code e pode conter ou não o body.</p>

**<h2>PROXIES</h2>**

- Representantes, que estão entre o cliente e o servidor, ajudam a fazer o transporte de dados.
- Roteador é um exemplo de proxy.

<p>Possui algumas diversas funções:</p>

- cache, para redevolver informações mais rápidas;
- filtro, configuração para antivírus ou controle parental;
- load balancing, ou seja, a distribuição da carga;
- autenticação;
- autorização;

**<h3>URI: Uniforme Resource Identifier</h3>**

- É usado pra identificar um recurso, tanto pelo nome quanto pela localização, exemplo: eu sou um recurso que tem um nome e localização.

**<h3>Resource</h3>**

- O recurso é o alvo do pedido http, pode ser qualquer coisa identificável, ou entidade.
- Digital: acessado por mailto, como por exemplo, email@dominio.com
- Abstrata: uma sessão em uma entidade, antes de inciar a sessão passa pela autenticação que também é um recurso abstrato.
- Física: podendo ser produtos e usuários;
  Em geral, se trata de um recurso na web (intranet ou internet) quando é possível identificar, nomear, endereçar ou manipular.

<h3>Procurando um recurso pelo Locator (localizador)</h3>

- Uso de URL, uniforme resource locator.
- Acessado por meio de um endereço.
- Toda url será uma URI mas nem toda URI é uma URL.
- Url precisa ser composta por 2 componentes obrigatórios e 5 opcionais, sendo obrigatório: protocolo e dominio.

<p><b>exemplo</b>: https se refere ao protocolo, enquanto que google.com se refere a um domínio.

- Os componentes opcionais se referem a subdomínio se localiza antes do domínio
- Path é o caminho pós domínio;
- Parâmetros opcionais;
- Porta se localiza após o domínio (nome ou IP) que pode ou não estar aberta;
- Quando não há especificação de uma porta, a porta é 80(http) e 443(https)
- Âncora é um lugar dentro do documento
- Recurso nomeado sem saber o local dele, (URN- Uniforme Resource Name): sempre se inicia por 'urn:'

</p>

**<h2>HTTP MESSAGES</h2>**

<p>são existentes tanto na parte da request quanto na response</p>

**<h3>Requisição</h3>**

- **request-line:**

  - deve ser composta por método
  - versão do protocolo
  - URI
  - dependendo do tipo do metodo a requisição deve conter body

- **response**
  - contém por padrão:
  - protocolo
  - status code - nos diz qual o status da requisição
  - headers
  - status message

**<h2>MÉTODOS HTTP</h2>**

- Servem para indicar a ação que o cliente deseja operar;
- Podem ser chamados também de verbos HTTP;
- Alguns métodos de formatos verbais;
- Cada uma dessas chamadas ou usos tem a sua própria maneirar de operar;

<p> Características que esses métodos podem compartilhar: nem todos serão seguros e idempotentes.</p>

- Segurança (GET, HEAD)

  - Não altera o estado no servidor, somente leitura para cliente;
  - Não há carga extra nesse caso;
  - O servidor é responsável em manter o método seguro.

- Idempotente

  - Ao executar o método, a resposta deverá ser sempre a mesma;
  - Todos os métodos que são seguros são idempotentes;
  - PUT e DELETE são idempotentes mas não são seguros, por fazer alterações no servidor;
  - Status code poderá ser diferente;
  - O server tem a responsabilidade de retornar os dados da mesma maneira, que lê e aplica essa especificação;
  - Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente.

<hr>

**<h3>OPTIONS</h3>**

- Fornece informações sobre disponibilidade dos métodos da requisição;
- Uma de suas características é que não há body nem quando se trata de request quanto response;
- É seguro e idempotente;
- Não se faz uso em formulários;
- Não é cacheable.

**<h3>GET </h3>**

- Pegar um recurso
- Somente recebe dados
- Seguro, não faz alteração no servidor
- É idempotente, qualquer recurso com get deve retornar sempre as mesmas informações
- Não pode ser enviado nada no body, e se for enviado pode ser que algo dê problema
- Mas sua resposta deve conter um body como uma página
- Pode ser cacheable, possuir habilidade de armazenar respostas para obtê-la de maneira + rápida
- Podem ser usados em formulários, a depender do seu tipo

**<h3>HEAD</h3>**

- É recebido somente o cabeçalho;
- É seguro e idempotente;
- Não haverá body;
- Não se usa em formulários;
- É cacheable.

**<h3>POST</h3>**

- Pulicar/cadastrar/incluir recurso em algum lugar;
- Não é seguro e nem idempotente;
- Seu body será existente tanto na request quanto na response;
- Faz muito sentido usar em formulários;
- Poderá ser cacheable.

**<h3>PUT</h3>**

- Cria um novo recurso ou atualizar um recurso;
- É idempotente, não é seguro;
- Para criação deverá retornar 201;
- Para atualização 204 ou 200;
- Não tem body para a resposta mas tem para o pedido;
- Não se usa em formulários;
- Não é cacheable.

**<h3>PATCH</h3>**

- Modificação parcial em um recurso;
- Não é seguro, não é idempotente;
- Possui body em request e response;
- Não se usa em formulários;
- Não é cacheable.

**<h3>DELETE</h3>**

- Remove um recurso;
- Deve responder 202 accepted, 204 no content, 200 ok;
- Não é seguro, é idempotente;
- Body pode ser que precise ser enviado na request assim como na response;
- Não se usa em formulários;
- Não é cacheable.

**<h3>HEADER</h3>**

- São cabeçalhos;
- Fornecem informações adicionais para o pedido ou resposta:

`Nome: valor => Content-type: text/html`

- Tanto servem para response quanto requests: Response Headers ou Request Headers.
