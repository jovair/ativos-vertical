# **Mapeamento de Processos–Departamento de TI**

**Data de Elaboração: 14/07/2025**

**Responsável: Head de Tecnologia (Gisélio)**

**Versão: 1.0**

**Documento integrante da Fase 2 do Projeto de Valuation da Vertical Loto**

## **Visão Geral do Departamento de TI**

O departamento de Tecnologia da Informação da Vertical Loto é responsável pela infraestrutura tecnológica, segurança lógica, desenvolvimento, suporte de sistemas e operação de dados. Atua como pilar central para garantir alta disponibilidade, performance, compliance técnico e escalabilidade dos produtos e operações.

Os macroprocessos do departamento são divididos em:

1.  Gestão de Infraestrutura e Cloud

2.  Gestão de Bases de Dados e Backups

3.  Monitoramento e Segurança

4.  Desenvolvimento e Suporte a Sistemas

5.  Integrações Externas (Gateways, Operadores, SIGAP, KYC)

6.  Governança de Acessos e Compliance Técnico

7.  Gestão de Desastre / Recuperação

## **Gestão de Infraestrutura e Cloud**

- Gerenciamento de servidores (AWS, GCP e ambientes híbridos)

- Configuração de ambientes segregados (produção, staging, homologação)

- Monitoramento de recursos e otimização de custos

## **Gestão de Bases de Dados e Backups**

- Administração de bases relacionais (MySQL, PostgreSQL, SQLServer)

- Políticas de backup diário e retenção (mínimo 90 dias)

- Replicação e failover para ambientes críticos

## **Monitoramento e Segurança**

- Monitoramento em tempo real de aplicações e redes

- Firewall, WAF, proteção contra DDoS

- Gestão de vulnerabilidades e atualizações (patch management)

##  **Desenvolvimento e Suporte a Sistemas**

- Suporte à plataforma PAM, Backoffice, Dotfin ERP, módulos de sorteio, módulo de apuração,

- Manutenção de APIs e microserviços

- Gestão de releases, versionamento e homologação

## **Integrações Externas**

- Integração com gateways de pagamento e bancários

- Integração com operadores parceiros via API e iframe

- Integração com SIGAP (exportação e envio regulatório)

- Integração com KYC para validação de identidade, requisito obrigatório SPA/MF

## **Governança de Acessos e Compliance Técnico**

- Gestão de credenciais e MFA

- Controle de permissões por função e registro de logs de acesso

- Compliance com GLI, LGPD e requisitos SPA/MF

## **Matriz de Riscos – Departamento de TI (Bloco 2)**

| **Processo** | **Tipo de Risco** | **Impacto** | **Probabilidade** | **Mitigação / Plano de Ação** |
|----|----|----|----|----|
| Infraestrutura & Cloud | Técnico | Alto | Médio | Monitoramento 24/7, backups, arquitetura redundante |
| Bases de Dados & Backups | Técnico | Alto | Médio | Testes periódicos de restauração, auditorias de integridade |
| Segurança | Segurança | Alto | Médio | Atualizações regulares, firewall, WAF, testes de penetração |
| Desenvolvimento | Operacional | Médio | Médio | Pipeline de CI/CD controlado, ambiente de homologação separado |
| Integrações Externas | Técnico | Alto | Médio | Contratos com SLA, fallback de serviços, monitoramento de endpoints |
| Governança de Acessos | Compliance | Alto | Baixo | Revisão semestral de acessos, logs auditáveis, MFA obrigatório |

## **Matriz de Dependências – Departamento de TI**

| **Origem** | **Destino** | **Tipo de Dependência** | **Descrição** |
|----|----|----|----|
| TI | PAM | Técnica | Infraestrutura e APIs suportam operação e saldo |
| TI | Backoffice | Técnica | Disponibilidade de dados, integrações e suporte contínuo |
| TI | Dotfin ERP | Técnica | Sincronização de lançamentos e relatórios |
| TI | Estúdios | Técnica / Operacional | Conectividade e suporte em tempo real |
| TI | SIGAP | Técnica / Regulatório | Geração e envio de arquivos XML, infraestrutura segura |
| TI | KYC | Técnica / Regulatório | Validação de identidade obrigatória SPA/MF |

## **Indicadores Estratégicos – Departamento de TI**

| Indicador | Processo Relacionado | Fórmula / Métrica | Impacto no Valuation |
|----|----|----|----|
| Disponibilidade de infraestrutura | Infraestrutura | % uptime mensal | Confiabilidade e valor operacional |
| SLA de recuperação de falhas | Segurança / Backup | Tempo médio de restauração (RTO) | Robustez e mitigação de riscos críticos |
| Taxa de sucesso nas integrações | Integrações Externas | Nº integrações OK ÷ total × 100 | Escalabilidade e confiança técnica |
| Taxa de cobertura de logs | Governança de Acessos | % de logs capturados e validados | Compliance e rastreabilidade |
| Frequência de atualizações | Desenvolvimento | Nº releases / mês | Inovação e agilidade operacional |
| Taxa de incidentes críticos | Geral | Nº incidentes críticos ÷ total × 100 | Exposição a riscos e percepção de valor |

## **Sumário Executivo – Departamento de TI**

O departamento de TI da Vertical Loto garante alta disponibilidade, segurança robusta e suporte integral às operações e integrações, atuando como backbone tecnológico para transmissões ao vivo, sistemas internos e regulamentações obrigatórias.

Além de sustentar a operação, a TI se destaca pela fábrica de software estruturada e proprietária, responsável por todo o ciclo de vida dos produtos digitais. Essa estrutura permite a criação, evolução e personalização rápida de novos produtos, suportando estratégias comerciais e diferenciação de mercado.

- **Destaques Estratégicos**

  - Arquitetura em cloud resiliente, segregada e escalável.


  - Governança rigorosa de acessos e compliance (GLI, LGPD, SPA/MF), incluindo integrações obrigatórias com KYC.


  - Fábrica de software própria, com squads multidisciplinares, focada no desenvolvimento rápido e seguro de novos produtos (ex.: Bilhete Tradicional, Super 25 e futuros módulos instantâneos).


  - Pipeline de desenvolvimento ágil (CI/CD), homologação robusta e versionamento controlado.


  - Monitoramento contínuo de infraestrutura, aplicações e integrações externas.


- **Prontidão**

  - Alta maturidade em segurança, backup e arquitetura modular.


  - Indicadores diretamente associados à capacidade de inovação e escalabilidade técnica (impactando valuation).


  - Flexibilidade para atender demandas customizadas de operadores e parceiros B2B.


  - Conectividade garantida com sistemas críticos (PAM, Backoffice, Dotfin ERP, Estúdios, SIGAP e KYC).
