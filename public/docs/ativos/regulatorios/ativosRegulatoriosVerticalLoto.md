# **Ativos Regulatórios da Vertical Loto**

## **Informações Gerais**

- **Nome do Documento:** Ativos Regulatórios da Vertical Loto
- **Versão:** 1.0
- **Data de Elaboração:** 26/06/2025
- **Data da Última Atualização:** 26/06/2025
- **Responsável pela Elaboração:** Jovair Silva – Head de Projetos
- **Revisor(es):** Kennedy – Tech Lead / Isaac – CEO
- **Status do Documento:** Ativo

## **Introdução**

Este documento apresenta o mapeamento dos ativos regulatórios da Vertical Loto, incluindo certificações técnicas, homologações governamentais, contratos vinculantes e integrações legais com entidades externas. O objetivo é garantir a rastreabilidade, conformidade e valor estratégico desses ativos frente a processos de auditoria, valuation, certificações e expansão de mercado.

**Escopo:** abrange exclusivamente os ativos da Vertical Loto com vínculo direto a obrigações legais, certificações oficiais e integrações com sistemas governamentais ou exigidos por órgãos de certificação técnica.

**Referências Normativas:** GLI-19, GLI-33, ISO 27001, Portarias SPA/MF, critérios de compliance regulatório.

## **Certificações e Homologações Vigentes**

| Certificação / Homologação | Categoria           | Entidade Responsável     | Status  | Escopo                                  | Evidência Disponível |
|-----------------------------|----------------------|---------------------------|---------|------------------------------------------|----------------------|
| GLI-19                     | Certificação Técnica | Gaming Laboratories Int.  | Ativo   | Sorteadeira, sistema, jogos              | Sim                  |
| GLI-33                     | Certificação Técnica | Gaming Laboratories Int.  | Ativo   | Estúdio ao vivo, operação remota         | Sim                  |
| Portaria SPA/MF 722/2024  | Obrigação Legal      | Secretaria de Prêmios e Apostas | Ativo | Envio de dados SIGAP (operadores, apostas, prêmios) | Sim                  |
| Certificado de e-CNPJ     | Identificação Digital| ICP-Brasil / SERPRO       | Ativo   | Assinatura digital de XMLs SIGAP         | Sim                  |

## **Integrações Regulatórias Ativas**

| Sistema / Interface | Entidade / Plataforma         | Tipo de Integração   | Finalidade Regulatório                         | Status  | Responsável Técnico |
|---------------------|-------------------------------|----------------------|-----------------------------------------------|---------|---------------------|
| SIGAP               | SPA/MF                        | API REST + XML       | Envio diário/mensal de dados de operação       | Ativo   | Kennedy              |
| SERPRO              | ICP-Brasil / Receita Federal | Certificação Digital | Emissão de e-CNPJ e validação de assinatura    | Ativo   | Kennedy              |
| Dotfin ERP          | Plataforma Vertical           | Interna              | Geração de relatórios financeiros auditáveis   | Ativo   | Mariana              |

## **Riscos Associados e Controles Mitigadores**

| Risco Potencial                                   | Impacto         | Controle Mitigador                                             |
|--------------------------------------------------|------------------|-----------------------------------------------------------------|
| Perda de certificação GLI                        | Alto             | Auditoria interna contínua, controle de versões                |
| Falha no envio de dados ao SIGAP                 | Alto             | Monitoramento automatizado, alerta de falhas                   |
| Expiração de e-CNPJ                              | Médio            | Agendamento de renovação, gestão documental centralizada       |
| Divergência entre relatório Dotfin e SIGAP       | Médio            | Validação cruzada automática, reconciliação contábil semanal   |

## **Indicadores e Evidências**

- Certificados GLI disponíveis em PDF (Drive Regulatório)
- Logs de envio ao SIGAP (últimos 12 meses)
- Evidência de renovação do e-CNPJ
- Relatórios financeiros assinados e conferidos

## **Histórico de Alterações**

| Data       | Versão | Descrição da Alteração         | Responsável     |
|------------|--------|--------------------------------|-----------------|
| 26/06/2025 | 1.0    | Documento inicial padronizado | Jovair Silva    |
