# **Ativos Financeiros da Vertical Loto**

## **Informações Gerais**

- **Nome do Documento:** Ativos Financeiros da Vertical Loto
- **Versão:** 2.1
- **Data de Elaboração:** 10/07/2025
- **Data da Última Atualização:** 01/08/2025
- **Responsáveis pela Elaboração:** Mariana (Financeiro) / Fernando (Tech)
- **Revisores:** Fernando (Tech Lead), Jovair Silva (Head de Projetos)
- **Status do Documento:** Ativo

## **Introdução**

Este documento apresenta o mapeamento atualizado e padronizado dos ativos financeiros da Vertical Loto, contemplando os três sistemas principais que sustentam a governança contábil, operação financeira e conformidade regulatória: Dotfin ERP, Backoffice e Webservice de Prestação de Contas — SIGAP.

Cada sistema possui responsabilidades e integrações distintas, sendo essencial compreender suas fronteiras funcionais, fluxos de dados e interfaces. Este documento estrutura tais informações conforme padrão de governança corporativa, atendendo aos requisitos de valuation, auditoria e certificações GLI, ISO e SPA/MF.

## **Inventário de Ativos Financeiros e Subprocessos**

### **Dotfin ERP — Sistema Financeiro Modular**

- **Descrição funcional:** Sistema corporativo de gestão financeira, responsável por centralizar lançamentos, realizar conciliações bancárias, gerar relatórios gerenciais e apoiar a consolidação contábil da Blow e suas plataformas (Tradicional, Bravo, ApostaTudo).
- **Principais funções:**
  - Conciliação bancária automatizada com base em arquivos de extrato
  - Geração de DRE, fluxo de caixa, balanço patrimonial, relatório PIS/COFINS e GGR financeiro
  - Permissões segmentadas por usuário, região e empresa
  - Leitura passiva de dados armazenados no PAM
- **Fronteira funcional:** Sistema 100% interno. Alimenta-se exclusivamente dos dados do banco de dados do PAM e dos arquivos dos gateways. Não envia dados ao SIGAP. Não integra com o Backoffice.
- **Status:** Ativo, em evolução para versão 2.0

### **Backoffice — Sistema Modular de Operação e Finanças**

- **Descrição funcional:** Sistema administrativo principal da Plataforma Vertical Loto. Controla as operações de apostas, saldos, prêmios, saques, permissões, produtos e entidades. Também permite abrir chamados internos e fazer gestão de afiliados.
- **Principais funções:**
  - Cadastro de operadores, contas, produtos, POS, limites, meios de pagamento e jogadores
  - Processamento de ajustes e gestão de operações financeiras entre jogadores e a plataforma (PAM)
  - Geração de relatórios operacionais e de auditoria
- **Fronteira funcional:** Atua como sistema de gestão da operação financeira e operacional. Não envia dados ao SIGAP. Não integra com o Dotfin. Depende diretamente do banco de dados do PAM.
- **Status:** Ativo, com estrutura estável, rastreável e auditável

### **Webservice de Prestação de Contas — SIGAP / SPA-MF**

- **Descrição funcional:** Webservice regulatório utilizado para envio obrigatório à SPA/MF dos dados diários e mensais de operação financeira, apostas, prêmios e cadastros, conforme Portaria SPA/MF nº 722/2024.
- **Principais funções:**
  - Geração automática de XMLs regulatórios (Carteira, Apostador, Operador, Jogos, Apostas)
  - Assinatura digital com e-CNPJ ICP-Brasil
  - Envio via API REST com criptografia TLS 1.2
  - Retenção de logs por 5 anos
- **Fronteira funcional:** Interface externa exclusiva para conformidade legal. Consome dados exclusivamente do PAM. Não integra com Backoffice nem com Dotfin.
- **Status:** Ativo, com atualizações regulares conforme normativos da SPA/MF

## **Interfaces e Dependências**

| Sistema       | Função Principal                                | Dependências Críticas               |
|---------------|--------------------------------------------------|-------------------------------------|
| Dotfin ERP    | Gestão financeira, contábil e relatórios internos| Banco de dados do PAM              |
| Backoffice    | Gestão operacional e controle financeiro de jogadores | Banco de dados do PAM          |
| SIGAP Webservice | Conformidade regulatória com governo federal     | Banco de dados do PAM, Certificado e-CNPJ |

## **Indicadores e Métricas Associadas**

| Indicador                      | Sistema         | Valor Atual / Meta      |
|-------------------------------|------------------|--------------------------|
| Volume médio de transações/mês| Dotfin ERP       | ~900                     |
| SLA de fechamento contábil    | Dotfin ERP       | D+1                      |
| % de aut. de conciliação      | Dotfin ERP       | 65% (meta: 100%)         |
| GGR mensal processado         | Dotfin ERP       | ~R$ 2,5 milhões          |
| Volume médio de saques/dia    | Backoffice       | ~R$ 70.000               |
| SLA envio ao SIGAP (diário)   | SIGAP Webservice | Até 06h (cumprido)       |
| SLA envio ao SIGAP (mensal)   | SIGAP Webservice | Até 5º dia útil (ok)     |

## **Anexos e Evidências**

- Prints de dashboards Dotfin v1.5
- Relatórios de conciliação bancária
- Exemplos de XMLs enviados ao SIGAP
- Modelos de relatórios gerenciais (DRE, fluxo de caixa)
- Logs de compliance e rastreabilidade (Backoffice e Webservice)

## **Histórico de Alterações**

| Data       | Versão | Descrição da Alteração                                         | Responsável          |
|------------|--------|----------------------------------------------------------------|----------------------|
| 05/07/2025 | 1.1    | Documento inicial focado no Dotfin                             | Mariana / Jovair     |
| 10/07/2025 | 2.0    | Inclusão de Backoffice e Webservice SIGAP                      | Gisélio / Mariana / Juan / Jovair |
| 01/08/2025 | 2.1    | Correção de fronteiras funcionais conforme documentos oficiais | Jovair Silva         |
