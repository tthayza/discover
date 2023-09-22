**<h1>Node Package Manager - NPM (gerenciador de pacotes do node)</h1>**

- Dependências, pacotes, módulos -> que são colocadas no node.

- Para criar um pacote:
<p> <code>npm init</code> ou <code>npm init -y </code>(esse segundo modo não fará nenhuma pergunta e dará yes pra tudo)</p>

- JSON: Javascript Object Notation

- <code>npm install</code> - Instala qualquer módulo que está no repositório do npm (pode-se utilizar também o 'i' ao invés do install)

<h3>Dependências</h3>
<p> Ao final do argumento do npm install, pode-se acrescentar o -D para tornar aquela dependência, uma dependência de desenvolvimento.
Isso significa que é uma dependência exclusiva para ambiente de desenvolvimento, não sendo necessária sua instalação para apenas rodar em outra máquina.
Além disso, é permitido instalar vários módulos em uma linha de comando e não somente um.
Quando uma alteração de dependência é feita manualmente no arquivo package.json, (como por exemplo a manipulação de um módulo que era dependência de desenvolvimento e passou a ser apenas uma dependência, ou até mesmo excluindo dependências) faz-se necessário rodar o comando <code>npm update</code> para que possa ocorrer o remapeamento dessas dependências.
A pasta node modules contém nela todas as dependências que os módulos utilizados precisam.</p>

<h3>package-lock.json</h3>
<p>Serve para fazer o mapeamento de todas as dependências que existem no projeto, não deve ser alterado. É importante não deletar, pois faz tudo ficar mais rápido.</p>

<h3>Criar scripts para rodar com npm</h3>

- Para rodar o script: geralmente usa-se a palavra <b>start</b> e quando usada, não é necessário o run antes, sendo assim: <code>npm run start</code> ou <code>npm start</code>.

- No objeto de scripts deve estar especificado no valor da chave, que determinado arquivo deve ser rodado, sendo: <b>node 'nomearquivo'</b>

<h3>Instalando um pacote de maneira global </h3>
<p> Exemplo: <code>npm i lucide-react -g</code> </p>
<p>O comando acima instala de maneira global e não diretamente naquele projeto atual.</p>

<h3>Localização de Módulo</h3>

<p>Para saber onde um determinado módulo foi instalado basta rodar o comando: <code>npm root -g</code> <br> Dessa forma, será retornado o caminho de onde o módulo foi instalado.</p>
<p>
  Para desinstalar um pacote que foi instalado de maneira global, rodar o seguinte comando:<code> npm uninstall nomepacote -g</code> </p>

<h3> Para alterar a versão de pacotes instalados</h3>

- Sobre versão: major.minor.patch
  - patch significa que está resolvendo algum bug;
  - minor significa que está com alterações mas não há possibilidade de quebrar o que está acontecendo nesse pacote;
  - major significa que é a versão do projeto e que poderá até quebrar dependendo do que acontece.
- Símbolos na versão a partir da atualização via npm:
  - Nenhum símbolo: ele sempre irá manter aquela versão e nunca irá mudar;
  - Asterisco: significa que irá mudar todas as versões;
  - Acento Circunflexo: significa que irá mudar as versões de minor e patch;
  - Acento Til: significa que irá mudar somente o patch.
- Para mudar a versão
  <p>Basta rodar o comando <code>npm outdated</code> e será retornado as versões atuais, wanted e latest.
  Sendo assim, para seguir para uma versão mais atualizada basta rodar <code>npm upgrade</code> e pronto, será alterado diretamente no <b>package-lock</b>.
  Para retornar a versão anterior basta rodar <code>npm i nomepacote@latest</code>.</p>
- Para remover um pacote é só rodar <code>npm uninstall nomepacote</code>.
