// Tudo o que é "teu" e muda pouco está aqui. Edita este ficheiro primeiro.
export const site = {
  name: 'Nome Apelido',
  handle: 'nomeapelido',
  initials: 'NA',
  // Título grande do topo. Curto, na primeira pessoa, sobre o que fazes.
  headline: 'I build LLM systems and check that they actually work.',
  // Parágrafos curtos por baixo do título. Podes usar links HTML (<a href="...">).
  intro: [
    'I’m a junior AI engineer in Lisbon. I build retrieval and agent systems on top of language models, and I spend most of my time on the part that decides whether they’re any good: eval sets, reading failures and fixing retrieval.',
    'Right now I’m improving <a href="/projects/lexpt">LexPT</a>, a question-answering system over Portuguese law. I write down what I learn in <a href="/notes">my notes</a>.',
  ],
  // Frase de descrição para o Google e para links partilhados.
  tagline: 'Junior AI engineer in Lisbon. I build retrieval and agent systems, and I measure them.',
  role: 'Junior AI engineer',
  location: 'Lisbon',
  // Estado de procura de emprego. Deixa vazio ('') quando já não estiveres à procura.
  availability: 'Open to junior AI engineer roles in Lisbon or remote (EU).',
  email: 'nome.apelido@email.com',
  replyPromise: 'I reply within two working days.',
  // Põe a tua foto em public/portrait.jpg e escreve aqui '/portrait.jpg'. Vazio = iniciais.
  portrait: '',
  links: {
    github: 'https://github.com/nomeapelido',
    linkedin: 'https://www.linkedin.com/in/nomeapelido',
    cv: '/cv.pdf',
  },
  // Endpoint do teu RAG. Recebe POST {question} e devolve {answer, sources: [{title, url}]}.
  // Vazio = a caixa pesquisa no conteúdo do site e mostra as páginas relevantes.
  askEndpoint: '',
  // Título e subtítulo do topo (a caixa de perguntas).
  askTitle: 'What would you like to know about me?',
  askSubtitle: 'Ask about my work, my projects or me. Answers come from what I’ve written on this site.',
  // Exemplos que vão aparecendo dentro da caixa.
  askPlaceholders: [
    'How did you evaluate LexPT?',
    'What do you do outside work?',
    'What broke in TicketPilot?',
    'Are you open to new roles?',
  ],
  // Botões por baixo da caixa: texto do botão e pergunta que fazem.
  askChips: [
    { label: 'Who are you?', q: 'Who are you?' },
    { label: 'What have you built?', q: 'What have you built?' },
    { label: 'How do you work?', q: 'How do you work?' },
    { label: 'What are you learning?', q: 'What are you learning now?' },
    { label: 'How can I reach you?', q: 'How can I reach you?' },
  ],
  // Como trabalhas (aparece no About e nas respostas).
  howIWork: 'I start with the question a user actually asks, write down what a good answer looks like, and build the smallest thing that can be measured against it. Most of my time goes into eval sets, reading failures and fixing retrieval, not into prompts.',
  // URL de envio do formulário da newsletter (ex.: Buttondown). Vazio = esconde o formulário.
  newsletterAction: '',
  // Parte "About me" da página inicial: 2 parágrafos curtos, pessoais e concretos.
  aboutShort: [
    'I spent four years in operations, automating reports with Python until I realised the automation was the part of the job I liked. Since then I’ve been building with language models, and mostly learning how to tell when they are wrong.',
    'Outside work I run along the river in Belém, cook too much bacalhau, and read about how things are made.',
  ],
  // Secção "Now": o que estás a fazer este mês.
  now: {
    updated: '2026-11-14',
    items: [
      'Rebuilding the LexPT retriever with a reranker and writing up what changed.',
      'Reading Chip Huyen’s AI Engineering, one note per chapter.',
      'Practising AI system design out loud, twice a week.',
    ],
  },
};
