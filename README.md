✈️ PousarTrip - Protótipo Visual
"Porque Pousar é melhor que decolar!"

Este repositório contém o protótipo visual e os componentes de front-end para a PousarTrip, uma agência de milhas.

[🔗 Acesse a demonstração ao vivo aqui](https://pousartrip-wireframe.vercel.app/)


Índice
📝 Sobre o Projeto

✨ Funcionalidades

🚀 Tecnologias Utilizadas

🏗️ Processo de Desenvolvimento

📂 Estrutura do Repositório

🖼️ Como Visualizar

👨‍💻 Autor

📄 Licença

📝 Sobre o Projeto
O PousarTrip Wireframe é um projeto de front-end que serve como um protótipo de alta fidelidade para uma plataforma de agência de viagens. O objetivo principal deste repositório é documentar e apresentar os componentes visuais da interface de forma clara, organizada e portátil.

O projeto foi originalmente desenvolvido utilizando um stack moderno para garantir agilidade e qualidade, e o resultado final foi estruturado como código estático (HTML, CSS, JS) para facilitar a consulta, o compartilhamento e a integração com outras plataformas.

✨ Funcionalidades
Busca de Passagens e Hotéis: Componente principal para pesquisa.

Cards de Pacotes: Exibição de pacotes em destaque com contador regressivo.

Listagem de Hotéis: Seção com filtros e categorias de hotéis.

Cards de Destinos: Apresentação visual dos principais destinos.

Prova Social: Seção de avaliações e depoimentos de clientes.

FAQ (Dúvidas Frequentes): Componente de "acordeão" para perguntas e respostas.

Design Responsivo: A interface se adapta a diferentes tamanhos de tela (desktop e mobile).

🚀 Tecnologias Utilizadas
O projeto foi construído com duas abordagens distintas: uma para o desenvolvimento e outra para a documentação final no repositório.

Fase de Desenvolvimento do Protótipo:
Next.js: Framework React para renderização e estruturação.

React: Biblioteca para construção de interfaces componentizadas.

Tailwind CSS: Framework CSS utility-first para estilização rápida e consistente.

Estrutura Final do Repositório:
HTML5: Para a estrutura semântica do conteúdo.

CSS3: Para a estilização visual dos componentes.

JavaScript: Para interatividade e funcionalidades dinâmicas.

🏗️ Processo de Desenvolvimento
Prototipagem Rápida: A interface foi construída de forma ágil no ambiente Next.js + Tailwind CSS, permitindo a criação de componentes reutilizáveis e um fluxo de desenvolvimento moderno.

Exportação do Código: Após a finalização do design visual, o código HTML e CSS renderizado foi extraído.

Documentação Estática: O código extraído foi separado em arquivos estáticos (.html, .css, .js) e organizado por seções, transformando o repositório em uma documentação visual e funcional do projeto.

📂 Estrutura do Repositório
O repositório está organizado em duas partes principais: o código-fonte original do projeto Next.js e a versão estática pronta para visualização.

```
pousartrip-wireframe/
│
├── /app/               # Código-fonte das páginas (Next.js App Router)
├── /components/        # Componentes React reutilizáveis
├── /hooks/             # Hooks customizados do React
├── /lib/               # Funções utilitárias e lógicas
├── /public/            # Arquivos estáticos (imagens, fontes)
│
├── /static-version/    # 👈 VERSÃO ESTÁTICA E DOCUMENTADA
│   ├── index.html
│   └── /assets/
│       ├── /css/
│       ├── /js/
│       └── /images/
│
├── next.config.mjs     # Arquivo de configuração do Next.js
├── package.json        # Dependências e scripts do projeto
└── ...                 # Outros arquivos de configuração
```

Código-fonte (Pastas principais): Contém toda a lógica, componentes e estilos utilizados durante o desenvolvimento com Next.js e React.

Pasta static-version: Contém a versão final do site em HTML, CSS e JS puros, ideal para visualização rápida, documentação e portabilidade.

🖼️ Como Visualizar o Projeto
Você pode visualizar o resultado final de duas maneiras:

Opção 1: Acessar a Versão Estática (Recomendado)
A forma mais rápida de ver o site é através da pasta static-version.

Acesse o link da demonstração ao vivo:

🔗 [🔗 Acesse a demonstração ao vivo aqui](https://pousartrip-wireframe.vercel.app/)

Ou visualize localmente:

Clone o repositório.

Navegue até a pasta static-version.

Abra o arquivo index.html no seu navegador.

Opção 2: Executar o Projeto Next.js (Para Desenvolvedores)
Se você deseja explorar o código-fonte, modificar os componentes ou rodar o ambiente de desenvolvimento:

Clone o repositório:

Bash

git clone https://github.com/jfeernandezo/pousartrip-wireframe.git
Acesse a pasta do projeto:

Bash

cd pousartrip-wireframe
Instale as dependências (recomendo usar pnpm como no projeto):

Bash

pnpm install
Inicie o servidor de desenvolvimento:

Bash

pnpm run dev
Abra http://localhost:3000 no seu navegador.
