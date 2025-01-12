<p align="center">
  <img src="src/assets/logo.svg" width="456px" height="120px"/>
</p>


<p align="center">
  <strong>
    EVOB - A melhor plataforma de cursos online
  </strong>
</p>

> [!IMPORTANT]
> 👉🏻 Acesse: [https://frontend-teste-2024.vercel.app/](https://frontend-teste-2024.vercel.app/)

<p>&nbsp;</p>

<p align="center">
  <img src="src/assets/capture.gif" width="80%" height="80%" max-width="100%" style="border-radius:8px" />
</p>

<p>&nbsp;</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulabelmiro/Frontend-teste-2024"> 
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/paulabelmiro/Frontend-teste-2024?style=social" >
</p>

<p align="center">
  <a href="#contexto">Contexto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuração">Configuração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clonando-o-repositório">Clonando o repositório</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciando-a-aplicação">Iniciando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-e-ferramentas">Tecnologias e Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#apresentação">Apresentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#autora">Autora</a>
</p>

### Contexto

Este projeto foi desenvolvido como parte de uma avaliação técnica da **Evob**, seguindo as instruções descritas no desafio proposto. O objetivo foi criar uma aplicação em Next.js utilizando TypeScript, com foco em boas práticas de desenvolvimento e implementação de funcionalidades exigidas.

**Principais escolhas de design**

<li><b>TypeScript</b>: Escolhido para evitar bugs relacionados a erros de digitação, garantir a segurança com a tipagem estática e melhorar a experiência do desenvolvedor com recursos como autocompletar, IntelliSense e refatoração eficiente.</li>

<li><b>Styled-components</b>: Utilizado para estilização devido à sua capacidade de criar estilos dinâmicos, escopados e reutilizáveis.</li>

<li><b>Mobile-first</b>: Todo o layout foi desenvolvido seguindo a abordagem "mobile-first" para garantir responsividade.</li>

<li><b>LocalStorage</b>: Utilizado para salvar os favoritos de forma persistente no navegador do usuário.</li>

<li><b>Hospedagem na Vercel</b>: Escolhida pela integração nativa com Next.js, o que simplifica o deploy e melhora o desempenho da aplicação em produção, além de oferecer ferramentas úteis como análises de desempenho e logs.</li>

---

### Funcionalidades

**Implementadas**

✅ **Listagem de cursos**: Apresentação de cursos consumindo dados diretamente da API;<br>
✅ **Favoritar cursos**: É possível adicionar cursos à lista de favoritos e persistir essas informações no localStorage;<br>
✅ **Remoção de favoritos**: O usuário pode desmarcar cursos como favoritos, atualizando a lista em tempo real;<br>
✅ **Detalhes do curso**: Cada curso possui uma rota específica que exibe seu banner e descrição dinâmicos;<br>
✅ **Compartilhamento via WhatsApp**: Botão flutuante que permite compartilhar o link do curso via API do WhatsApp;<br>
✅ **404 personalizado**: Redireciona o usuário para uma página de erro caso a slug do curso não seja válida;<br>
✅ **Responsividade**: O layout foi desenvolvido para dispositivos móveis e se adapta a telas maiores;<br>

**Todo (Bônus não implementado)**

- [ ] **Testes**: Implementação de testes automatizados para validar as funcionalidades e garantir a manutenção do projeto.

---

### Configuração

Para executar a aplicação localmente, siga as instruções abaixo.

**Requisitos**

- [Git](https://git-scm.com);
- [Node](https://nodejs.org/);

---

### Clonando o repositório

1. Abra o terminal e navegue até o diretório onde deseja clonar o repositório.

2. Execute o seguinte comando:

```bash
# clonando o repositório
git clone https://github.com/paulabelmiro/Frontend-teste-2024.git
```
3. Navegue até o diretório do projeto:

```bash
cd Frontend-teste-2024/evob
```

---

### Iniciando a aplicação

1. Crie um arquivo .env.local na raiz do projeto e adicione a seguinte variável de ambiente:

```bash
NEXT_PUBLIC_API_URL="https://api.evob.dev/content/"
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador e acesse: http://localhost:3000.


**Obs.** A API está funcionando diariamente entre 8:00 e 20:00, ao acessar fora deste horário não será possível obter as informações de banner e cursos.

---

### Tecnologias e Ferramentas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

<li>Next.js 15</li>

<li>React 19</li>

<li>TypeScript</li>

<li>Styled-components</li>

<li>LocalStorage</li>

<li>ESLint</li>

<li>Prettier</li>

<li>Emotion (is-prop-valid)</li>

---

### Deploy


A aplicação está hospedada na plataforma Vercel e pode ser acessada pelo link:
<a href="https://frontend-teste-2024.vercel.app/">Deploy da aplicação</a>

---

### Apresentação


Gravei um vídeo explicando a implementação e os desafios superados durante o desenvolvimento. Acesse pelo link:

<a href="https://frontend-teste-2024.vercel.app/">Link para o vídeo</a>

---

### Autora
<a href="https://www.linkedin.com/in/paulacbelmiro/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/103264615?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Paula Belmiro</b></sub></a>