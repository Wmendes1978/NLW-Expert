const perguntas = [
  {
  pergunta: "Qual é o papel do agente comunitário de saúde?",
  respostas: [
  "Realizar atividades administrativas",
  "Conduzir tratamentos médicos",
  "Promover ações de saúde preventiva na comunidade"
  ],
  correta: 2
  },
  
  {
  pergunta: "Como os agentes comunitários de saúde podem auxiliar na prevenção de doenças?",
  respostas: [
  "Distribuindo medicamentos sem prescrição",
  "Realizando visitas domiciliares e orientando sobre hábitos saudáveis",
  "Promovendo festas na comunidade"
  ],
  correta: 1
  },
  
  {
  pergunta: "Qual é a importância da relação entre o agente comunitário de saúde e a comunidade?",
  respostas: [
  "Não possui relevância para o trabalho do agente de saúde",
  "Facilita a confiança e a adesão das pessoas às ações de saúde",
  "Cria distanciamento e desconfiança entre o agente e a comunidade"
  ],
  correta: 1
  },
  
  {
  pergunta: "Quais são os principais temas abordados nas orientações do agente comunitário de saúde?",
  respostas: [
  "Receitas culinárias",
  "Prevenção de doenças, cuidados com a higiene e promoção da saúde",
  "Técnicas de construção civil"
  ],
  correta: 1
  },
  
  {
  pergunta: "Como o agente comunitário de saúde pode identificar problemas de saúde na comunidade?",
  respostas: [
  "Realizando exames clínicos completos em todos os moradores",
  "Observando o ambiente e o comportamento das pessoas, além de coletar informações",
  "Não é responsabilidade do agente de saúde identificar problemas de saúde"
  ],
  correta: 1
  },
  
  {
  pergunta: "Quais são os benefícios das visitas domiciliares realizadas pelo agente comunitário de saúde?",
  respostas: [
  "Aumento do isolamento social dos moradores",
  "Identificação precoce de problemas de saúde e fortalecimento do vínculo com a comunidade",
  "Diminuição da confiança dos moradores nas ações de saúde"
  ],
  correta: 1
  },
  
  {
  pergunta: "Qual é a importância da educação em saúde promovida pelo agente comunitário?",
  respostas: [
  "Não há relação entre educação e saúde",
  "Contribui para a conscientização das pessoas sobre práticas saudáveis e prevenção de doenças",
  "Aumenta a incidência de problemas de saúde na comunidade"
  ],
  correta: 1
  },
  
  {
  pergunta: "Quais são as características necessárias para ser um bom agente comunitário de saúde?",
  respostas: [
  "Despreocupação com as necessidades da comunidade",
  "Empatia, comprometimento e habilidade de comunicação",
  "Foco exclusivo em tarefas administrativas"
  ],
  correta: 1
  },
  
  {
  pergunta: "Como o agente comunitário de saúde pode incentivar a participação da comunidade nas ações de saúde?",
  respostas: [
  "Ignorando as opiniões dos moradores",
  "Promovendo atividades de lazer exclusivamente",
  "Estimulando o envolvimento e a colaboração em iniciativas de saúde comunitária"
  ],
  correta: 2
  },
  
  {
  pergunta: "Quais são os desafios enfrentados pelo agente comunitário de saúde em sua prática diária?",
  respostas: [
  "Falta de interesse da comunidade em receber orientações de saúde",
  "Não há desafios na atuação do agente comunitário de saúde",
  "Dificuldades de acesso aos recursos e resistência a mudanças de hábitos"
  ],
  correta: 2
  },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  