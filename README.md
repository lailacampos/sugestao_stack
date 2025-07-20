  <h1>Tech Stack Guide</h1>
  <p>
    Este projeto é um site de referência para escolhas de tecnologias e padrões de arquitetura de um sistema. Ele apresenta tabelas de comparação e seções detalhadas para o frontend, backend, SSR e padrões de projeto.
  </p>

  <h2>Sumário</h2>
  <ul>
    <li><a href="#features">Funcionalidades</a></li>
    <li><a href="#stack">Stack Tecnológica</a></li>
    <li><a href="#getting-started">Como Executar</a></li>
    <li><a href="#project-structure">Estrutura do Projeto</a></li>
  </ul>

  <h2 id="features">Funcionalidades</h2>
  <ul>
    <li>Visualização de tabelas com sugestões de tecnologias para Frontend, Backend e SSR</li>
    <li>Seção de detalhes explicando motivações e justificativas para cada tecnologia</li>
    <li>Mapeamento de padrões de projeto e arquitetura com comparações entre MVC e outros padrões</li>
    <li>Navegação por âncoras para salto rápido entre seções</li>
    <li>Layout responsivo com Tailwind CSS</li>
  </ul>

  <h2 id="stack">Stack Tecnológica</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
    <li><strong>SSR / SSG:</strong> Next.js (getServerSideProps, getStaticProps)</li>
    <li><strong>Cache em memória:</strong> Redis ou Memcached</li>
    <li><strong>Backend:</strong> Laravel, MySQL, Workers (Jobs, Filas)</li>
    <li><strong>Ferramentas:</strong> React Icons, ESLint, Prettier</li>
  </ul>

  <h2 id="getting-started">Como Executar</h2>
  <h3>Pré-requisitos</h3>
  <ul>
    <li>Yarn</li>
  </ul>

  <h3>Instalação</h3>
  <pre><code>git clone https://github.com/lailacampos/sugestao_stack.git
cd sugestao_stack
yarn install
</code></pre>

  <h3>Rodando em Desenvolvimento</h3>
  <pre><code>yarn dev
</code></pre>
  <p>
    Abra <code>http://localhost:3000</code> (ou porta equivalente) no navegador para ver o site.
  </p>

  <h3>Build para Produção</h3>
  <pre><code>yarn build && yarn start
</code></pre>
