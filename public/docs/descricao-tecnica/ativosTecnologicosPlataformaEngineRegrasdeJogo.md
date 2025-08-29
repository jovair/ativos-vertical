# **Descrição Técnica – Engine de Regras de Jogo**

> A **Engine de Regras de Jogo** é o componente lógico central da Plataforma Vertical Loto responsável por processar, validar e executar todas as regras relacionadas aos produtos de jogo. Ela define o comportamento matemático, operacional e regulatório de cada modalidade, garantindo previsibilidade e conformidade.

## **Componentes técnicos:**

- **Processamento de Apostas  **
  Recebe os dados enviados via API, interpreta os parâmetros da aposta (valores, cotações, regras especiais) e grava o registro com status pendente.

- **Validação de Regras  **
  Valida a integridade da aposta com base em regras pré-configuradas (ex: quantidade mínima/máxima de números, odds, cotações, formatos válidos, limite de repetição, data/hora do concurso).

- **Aplicação de Resultados  **
  Após o sorteio (via sorteadeira), a engine processa o resultado contra as apostas registradas, identifica ganhadores, aplica multiplicadores e atualiza os saldos.

- **Modularização por Produto  **
  Cada produto da plataforma (Bilhete Tradicional, Super 25, Raspadinha etc.) possui uma estrutura específica de regras configuradas no banco de dados e interpretadas dinamicamente pela engine.

- **Logs e Rastreabilidade  **
  Todas as execuções da engine geram logs detalhados que são armazenados em banco e exportáveis pelo backoffice, com informações de tempo de processamento, regras aplicadas e erros (se houver).

## **Finalidade Estratégica:**

É o núcleo inteligente da operação de jogos. Garante previsibilidade, auditabilidade e integridade matemática das regras, funcionando como base técnica para certificações (GLI-11, GLI-33) e validação regulatória.

## **Observações:**

- Atualizações de regras são feitas via banco de dados versionado e documentado.

- Toda a lógica é separada da interface visual e da camada de API.

- Roda em ambiente seguro, com logs protegidos e replicação de dados para evidência legal.

- É testada continuamente em ambiente de homologação antes de qualquer alteração em produção.
