# **Descrição Técnica – Ambiente Homologado (Staging)**

> O **Ambiente Homologado da Vertical Loto** é uma instância técnica isolada da plataforma, configurada para replicar integralmente as condições do ambiente de produção, mas sem afetar apostas ou transações reais. Ele é utilizado para testes de novos produtos, validações regulatórias, auditorias da GLI e simulações para a SPA/MF. É um ativo regulatório obrigatório e de alto valor estratégico.

## **Características Técnicas**

- Ambiente hospedado na mesma estrutura de cloud (AWS), com:

  - Banco de dados independente

  - Engine de sorteio simulada (modo homologação)

  - Painel administrativo e backoffice completo

  - IA Promotor e Dotfin operando em modo simulado

- URLs e acessos restritos a perfis autorizados de teste e certificação

## **Segurança e Isolamento**

- Não há comunicação com o ambiente de produção

- Qualquer dado gerado é fictício e não afeta o sistema real

- Monitoramento ativo de acessos com autenticação por IP, usuário e camada extra de segurança

## **Usos e Aplicações**

- **Testes de novas funcionalidades antes do deploy  **

- **Auditorias técnicas da GLI  **

  - Validação de sorteios, prêmios e lógica

- **Validação de relatórios e integração com SPA/MF  **

- **Treinamento interno e demonstração para parceiros  **

## **Rotina de Atualização**

- Sincronização periódica com produção (código e estrutura)

- Banco de dados limpo para simulações

- Checklists de testes técnicos e operacionais aplicados em cada ciclo de validação

## **Documentação Vinculada**

- Manual de homologação aprovado pela GLI

- Procedimentos para staging vs. produção

- Registro de auditorias realizadas no ambiente

- Logs de acesso e execução de testes

## **Finalidade Estratégica**

O ambiente homologado é um **ativo regulatório e operacional essencial**, pois:

- Permite garantir qualidade sem riscos à operação ao vivo

- Atende exigências de auditoria e certificação

- Oferece uma base segura para testes, validações e treinamentos

- Suporta lançamentos com previsibilidade e segurança jurídica

## **Observações**

- A GLI exige que qualquer produto certificado tenha seu comportamento validado em staging

- O ambiente pode ser clonado para simulações específicas de operadores ou investigações técnicas

- Toda alteração em staging é documentada
