# **Mapeamento de Processos – Dotfin**

**Data de Elaboração:** 01/08/2025  
**Responsável:** Mariana (Financeiro) / Fernando (Tech)  
**Versão:** 1.1  
**Documento integrante da Fase 2 do Projeto de Valuation da Vertical Loto**

## **Visão Geral do Processo Dotfin**

O Dotfin ERP é o sistema financeiro oficial da Blow Marketplace, responsável pela gestão financeira da Vertical Loto e demais marcas. Atua de forma independente dos sistemas operacionais e regulatórios (Backoffice e SIGAP), sendo alimentado exclusivamente por planilhas de extratos bancários e leitura passiva do banco de dados do PAM.

É responsável por conciliações, relatórios gerenciais e análises contábeis, sem qualquer papel na premiação, apuração de resultados ou envio ao regulador. Sua função é garantir a integridade contábil e consolidar a saúde financeira dos produtos e operadores, com foco em rastreabilidade e auditoria.

## **Etapa de Entrada de Dados**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 1.1 | Leitura passiva dos dados de depósitos e saques (PAM) | Dotfin ERP | Sistema |
| 1.2 | Importação manual dos extratos dos gateways | Dotfin ERP | Financeiro |
| 1.3 | Classificação dos lançamentos por regra | Dotfin ERP | Financeiro |

## **Etapa de Conciliação Bancária**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 2.1 | Cruzamento entre extrato e dados da operação | Dotfin ERP | Sistema |
| 2.2 | Identificação de divergências automáticas | Dotfin ERP | Sistema |
| 2.3 | Tratativa manual de divergências críticas | Dotfin ERP | Financeiro |
| 2.4 | Conciliação final aprovada e registrada | Dotfin ERP | Financeiro |

Notas:

- Conciliação ocorre por empresa e por gateway.

- 65% das conciliações são automatizadas.

## **Etapa de Consolidação e Relatórios**

| **Etapa** | **Descrição** | **Sistema** | **Responsável** |
|----|----|----|----|
| 3.1 | Registro das movimentações consolidadas | Dotfin ERP | Sistema |
| 3.2 | Geração de DRE, Fluxo de Caixa, GGR e Balanço | Dotfin ERP | Financeiro |
| 3.3 | Exportação para análise da controladoria | Dotfin ERP | Financeiro |
| 3.4 | Geração de dashboards por marca, operador, produto | Dotfin ERP | Sistema |

## **Dependências Críticas**

| **Ativo** | **Papel** |
|----|----|
| Banco de Dados PAM | Fornece histórico de apostas, saques e depósitos |
| Extratos dos Gateways | Entrada primária para conciliação |
| Dotfin ERP | Registro contábil, rastreabilidade, geração de relatórios |
| Controladoria | Responsável por análise e fechamento contábil geral |

## **Matriz de Riscos – Dotfin ERP (Bloco 2)**

| **Ativo** | **Tipo de Risco** | **Impacto** | **Probabilidade** | **Mitigação / Plano de Ação** |
|----|----|----|----|----|
| Dotfin ERP | Técnico | Alto | Médio | Backup diário, validação cruzada, acesso controlado |
| Dotfin ERP | Operacional | Médio | Alto | Treinamento contínuo, processos padronizados |
| Dotfin ERP | Contábil | Alto | Baixo | Logs auditáveis, validação com controladoria |
| Gateways | Financeiro | Médio | Médio | Importação padronizada, protocolo de recebimento |
| Controladoria | Estratégico | Médio | Baixo | Checkpoints mensais e integração com dashboards |

## **Matriz de Dependências – Dotfin ERP (Bloco 3)**

| **Origem** | **Destino** | **Tipo de Dependência** | **Descrição** |
|----|----|----|----|
| PAM | Dotfin ERP | Técnica / Operacional | Dados operacionais de transações e ordens |
| Gateways | Dotfin ERP | Técnica / Financeira | Extratos financeiros para conciliação |
| Dotfin ERP | Controladoria | Técnica / Contábil | Base para relatórios gerenciais |
| Dotfin ERP | Diretoria | Estratégica | Indicadores financeiros e dashboards |

## **Indicadores Estratégicos – Dotfin ERP (Bloco 4)**

| **Indicador** | **Ativo Relacionado** | **Fórmula / Métrica** | **Impacto no Valuation** |
|----|----|----|----|
| SLA de conciliação bancária | Dotfin ERP | % de conciliações concluídas em D+1 | Governança e transparência financeira |
| % de automação bancária | Dotfin ERP | % de transações conciliadas automaticamente | Eficiência operacional |
| Volume total conciliado mensal | Dotfin ERP | Valor financeiro processado | Escala financeira |
| % de divergências não resolvidas | Dotfin ERP | Divergências ÷ total processado | Qualidade de dados e risco contábil |
| GGR total registrado | Dotfin ERP | Soma líquida dos jogos | Receita real sob gestão |

## **Sumário Executivo – Dotfin ERP (Bloco 5)**

O Dotfin ERP é a espinha dorsal financeira da operação, garantindo total rastreabilidade contábil com base em dados internos da empresa. Atua com autonomia plena em relação ao Backoffice e ao SIGAP, consolidando os fluxos reais da operação para fins de gestão, controle e prestação de contas internas.

- **Destaques Estratégicos**

  - 100% independente dos sistemas operacionais e regulatórios.


    - Conciliação estruturada por planilhas e dados internos (PAM).


    - Geração de relatórios fiscais e gerenciais compatíveis com auditorias.

- **Diferenciais Competitivos**

  - Segmentação contábil por marca, operador e produto.


    - Painéis visuais em tempo real para a controladoria e diretoria.


    - Maturidade no processo de fechamento e controle de GGR.


- **Prontidão para Due Diligence e Auditorias**

  - Logs, versões e histórico de lançamentos disponíveis sob demanda.
  
  
    - Indicadores integrados à estratégia financeira da empresa.
  
  
    - Processo auditável de ponta a ponta, com segregação de funções e acessos.
