# **Mapeamento de Processos – Departamento Financeiro**

**Data de Elaboração:** 11/07/2025  
**Responsável:** Mariana/Fernando (Financeiro/Tech)  
**Versão:** 1.1  
**Documento integrante da Fase 2 do Projeto de Valuation da Vertical Loto**

## **Visão Geral do Processo Financeiro**

Este documento apresenta o fluxo prático e auditável do processo financeiro da Vertical Loto, com base nos ativos: **Dotfin ERP**, **Backoffice** e **Webservice SIGAP**. O sistema central da operação é o **PAM**, que concentra toda a movimentação de apostas, saldo, prêmios e ordens de saque. Os demais ativos se alimentam dele de forma independente.

O ciclo completo segue três macroetapas:

1.  Registro e execução no PAM

2.  Conciliação e geração de relatórios via Dotfin ERP

3.  Prestação de contas regulatória via Webservice SIGAP

## **Etapa Operacional – Registro no PAM**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 1.1 | Aposta realizada na plataforma | PAM | Jogador |
| 1.2 | Resultado calculado pela Engine | PAM | Sistema |
| 1.3 | Ordem de pagamento criada automaticamente | PAM | Sistema |
| 1.4 | Validação de limites, CPF, regras de saque | PAM | Sistema |
| 1.5 | Registro da ordem como Aprovada / Pendente | PAM | Sistema |

## **Etapa Financeira – Conciliação via Dotfin ERP**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 2.1 | Dados do PAM consumidos via leitura passiva | Dotfin ERP | Sistema |
| 2.2 | Importação dos extratos dos gateways | Dotfin ERP | Mariana |
| 2.3 | Conciliação automatizada de entradas/saídas | Dotfin ERP | Mariana |
| 2.4 | Análise de divergências e ajustes manuais | Dotfin ERP | Mariana |
| 2.5 | Geração de relatórios: DRE, GGR, Fluxo de Caixa | Dotfin ERP | Mariana |

**Notas:**

- 65% das conciliações são automáticas.

- Dotfin opera de forma independente do Backoffice.

- Não há integração entre Dotfin e gateways, apenas leitura de planilhas.

## **Etapa Regulatória – Envio ao SIGAP**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 3.1 | Extração de dados diretamente do PAM | Webservice SIGAP | Tech / Financeiro |
| 3.2 | Geração automática dos XMLs padronizados | SIGAP | Sistema |
| 3.3 | Assinatura digital via e-CNPJ ICP-Brasil | SIGAP | Sistema |
| 3.4 | Compactação Gzip + Base64 + envio via API | SIGAP | Sistema |
| 3.5 | Retenção de protocolo e log regulatório | SIGAP | Sistema |

Regras:

- Prazo de envio diário: até 06h do dia seguinte

- Logs regulatórios são mantidos por 5 anos

## **Dependências Críticas**

| **Ativo** | **Papel** |
|----|----|
| Plataforma PAM | Origem de todos os dados financeiros e operacionais |
| Dotfin ERP | Realiza conciliação bancária e gera relatórios contábeis |
| SIGAP Webservice | Responsável pelo envio obrigatório à SPA/MF |
| Certificado ICP-Brasil | Assinatura digital dos documentos XML enviados ao SIGAP |

## **Matriz de Riscos – Departamento Financeiro**

| **Ativo** | **Tipo de Risco** | **Impacto** | **Probabilidade** | **Mitigação / Plano de Ação** |
|----|----|----|----|----|
| Dotfin ERP | Técnico | Alto | Médio | Monitoramento contínuo, backups, validação manual |
| Dotfin ERP | Operacional | Médio | Alto | Capacitação de usuários-chave, protocolos de revisão |
| Dotfin ERP | Reputacional | Alto | Baixo | Logs auditáveis, exportações seguras e versionadas |
| SIGAP | Regulatório | Alto | Baixo | Verificações automatizadas e reenvio em caso de falha |
| SIGAP | Técnico | Alto | Médio | Monitoramento dos tokens, contingência para XML |
| Certificado ICP-Brasil | Regulatório | Alto | Baixo | Gestão centralizada e renovação com alertas antecipados |

## **Matriz de Dependências – Departamento Financeiro**

| **Origem** | **Destino** | **Tipo de Dependência** | **Descrição** |
|----|----|----|----|
| PAM | Dotfin ERP | Técnica / Operacional | Fornece dados históricos de depósitos e saques |
| Gateways | Dotfin ERP | Técnica / Financeira | Fornecimento de extratos para conciliação |
| PAM | SIGAP | Técnica / Regulatório | Geração de XMLs com dados de jogo, aposta e transações |
| ICP-Brasil | SIGAP | Técnica / Segurança | Assinatura digital obrigatória |
| Dotfin ERP | Relatórios | Técnica / Financeira | Base para DRE, GGR e análises operacionais |

## **Indicadores Estratégicos – Departamento Financeiro**

| **Indicador** | **Ativo Relacionado** | **Fórmula / Métrica** | **Impacto no Valuation** |
|----|----|----|----|
| SLA de conciliação bancária | Dotfin ERP | % de conciliações até 12h do dia seguinte | Confiabilidade e governança financeira |
| Taxa de conciliações automáticas | Dotfin ERP | % auto vs. total de lançamentos | Eficiência operacional |
| Tempo médio de geração de relatórios | Dotfin ERP | Dias úteis após fechamento | Maturidade contábil |
| Frequência de rejeição de XML SIGAP | SIGAP | % rejeições / total de envios | Conformidade regulatória |
| Volume total conciliado mensal | Dotfin ERP | Soma dos valores conciliados | Escala de operação |
| % divergências entre Dotfin e PAM | Dotfin ERP / PAM | Diferença ÷ volume total | Risco contábil e reputacional |
| Uptime mensal do Dotfin | Dotfin ERP | % disponibilidade registrada | Estabilidade do sistema |
| Envio no prazo ao SIGAP | SIGAP | % de envios dentro do SLA | Compliance institucional |

## **Sumário Executivo – Departamento Financeiro**

O processo financeiro da Vertical Loto opera com total centralização no PAM, que abastece dois sistemas independentes: Dotfin ERP e Webservice SIGAP. O Backoffice não integra esse fluxo.

- **Destaques Estratégicos**

  - Separação clara entre operação, gestão e conformidade regulatória


  - Dotfin opera com leitura passiva e conciliação independente


  - SIGAP consome diretamente os dados brutos do PAM, garantindo segurança regulatória


  - Conciliação automatizada representa mais de 60% dos lançamentos


- **Diferenciais Competitivos**

  - Estrutura pronta para auditorias e valuation


  - Rastreabilidade total dos lançamentos e relatórios


  - Modelo tributário consolidado no Dotfin ERP


  - Logs e relatórios da SPA/MF gerados com padrão GLI/ISO


- **Prontidão para Due Diligence e Auditorias**

  - Indicadores diretamente ligados à governança e escalabilidade


  - Separação entre as camadas técnicas garante controle e segurança


  - Todos os sistemas possuem controle de acesso e trilha de auditoria
