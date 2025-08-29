# **Descrição Técnica – API da Plataforma Vertical Loto**

> A **API da Plataforma Vertical Loto** é a interface técnica que conecta todos os sistemas internos e externos da empresa, viabilizando a comunicação entre módulos como a engine de jogo, PAM, Dotfin, front-end dos jogadores, integrações regulatórias e parceiros comerciais. Baseada em arquitetura RESTful, é o elo digital que garante segurança, escalabilidade e interoperabilidade da operação.

## **Componentes técnicos:**

- **Endpoints RESTful Seguros  **
  A API expõe endpoints para transações, consultas, registros de apostas, atualizações de saldo, autenticação, extração de relatórios e mais. Todos operam com autenticação via token JWT e criptografia TLS.

- **Camada de Autenticação e Autorização  **
  Tokens de acesso são gerados via login com credenciais válidas e são validados em cada requisição. Perfis e escopos definem permissões por tipo de usuário (admin, financeiro, operador etc.).

- **Integração com Módulos Internos  **
  A API comunica diretamente com:

  - **PAM**: criação e autenticação de jogadores

  - **Engine de Regras**: registro e validação de apostas

  - **Dotfin**: controle de movimentações financeiras

  - **Backoffice**: geração de relatórios e logs administrativos

  - **IA Promotor**: ativação de sugestões e gatilhos

- **Logs e Monitoramento  **
  Todas as chamadas são logadas em banco de dados e monitoradas via CloudWatch. Erros, timeouts e falhas de autenticação são rastreados em tempo real com alertas para o time técnico.

- **Controle de Versões e Sandbox  **
  Versões da API são controladas e documentadas. Existe uma instância sandbox no ambiente de homologação para testes de novos recursos e certificações.

## **Finalidade Estratégica:**

A API é o **backbone técnico da comunicação da Vertical Loto**. Sua estabilidade e segurança são fundamentais para garantir a integridade dos jogos, a rastreabilidade exigida por reguladores e a escalabilidade da operação com parceiros e integrações futuras.

## **Observações:**

- Toda a documentação da API está disponível via Swagger interno.

- A performance é testada regularmente com testes de stress e carga.

- Integração futura prevista com novos produtos (e.g. IA Promotor 2.0, bilhete instantâneo, raspadinhas).
