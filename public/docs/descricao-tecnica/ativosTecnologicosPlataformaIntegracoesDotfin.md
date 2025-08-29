# **Descrição Técnica – Dotfin ERP (Módulo Financeiro iGaming)**

> O **Dotfin ERP** é o módulo financeiro oficial da **Vertical Loto**, projetado para integração exclusiva com o **PAM Vertical Loto**, atendendo às exigências de conciliação, auditoria e compliance financeiro. Ele realiza a gestão completa do fluxo monetário dos operadores, com foco em segurança, rastreabilidade e conformidade regulatória.

## **Funcionalidades Principais**

- **Pagamentos**: Geração de ordens de pagamento, verificação antifraude e conciliação automática.
- **Saques**: Solicitação, análise de elegibilidade, conciliação e atendimento ao SLA regulatório.
- **Antifraude**: Análise de padrões de transação, bloqueio preventivo e revisão manual.
- **Conciliação Financeira**: Relatórios diários, auditoria contábil e cruzamento de dados com o PAM.
- **Compliance Financeiro**: Requisitos legais (SPA/MF), prevenção à lavagem de dinheiro e detecção de operações suspeitas.
- **Controle de Comissão**: Cálculo e pagamento automático, com painel de acompanhamento.
- **Relatórios e Auditoria**: Geração de relatórios gerenciais, fiscais e integração com auditorias da Blow Marketplace.

## **Integrações e Dependências**

- **PAM Vertical Loto**: Integração exclusiva e leitura passiva para relatórios e conciliações.

## **Arquitetura e Stack Tecnológica**

- **Backend**: Node.js, arquitetura modular orientada a serviços.
- **Banco de Dados**: PostgreSQL (principal) e Redis (cache e sessões).
- **Cloud**: AWS (EC2, RDS, S3, CloudFront, API Gateway).
- **Segurança**: Criptografia TLS 1.2/1.3, WAF Cloudflare, segregação de ambientes (DEV, QA, PRD).
- **DevOps**: CI/CD via GitLab, backups automáticos e snapshots diários.

## **Compliance e Certificações**

- Conformidade com **Lei 14.790/2023** (loterias de quota fixa).
- Certificação **GLI** para integrações e processos de sorteio.
- Compatível com padrões de segurança da **ISO 27001**.

## **Finalidade Estratégica**

O Dotfin é um ativo crítico para a operação da Vertical Loto, pois:

- Centraliza e garante a precisão dos dados financeiros.
- Suporta auditorias e due diligence com evidências detalhadas.
- Reduz riscos operacionais e de conformidade.
- Melhora a eficiência na gestão de pagamentos, saques e conciliações.

## **Indicadores de Valor**

- SLA de conciliação.
- Divergência PAM (%).
- Volume processado (R$).