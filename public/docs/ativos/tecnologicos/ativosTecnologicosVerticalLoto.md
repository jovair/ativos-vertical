# **Ativos Tecnológicos da Vertical Loto**

## **Informações Gerais**

- **Nome do Documento:** Ativos Tecnológicos da Vertical Loto
- **Versão:** 1.0
- **Data de Elaboração:** 26/06/2025
- **Data da Última Atualização:** 26/06/2025
- **Responsável pela Elaboração:** Kennedy – Tech Lead
- **Revisor(es):** Jovair Silva – Head de Projetos / Gisélio – Infraestrutura
- **Status do Documento:** Ativo

## **Introdução**

Este documento apresenta o mapeamento completo dos ativos tecnológicos da Vertical Loto, incluindo sistemas, plataformas, componentes da infraestrutura de cloud, banco de dados, rotas de API, ambientes e tecnologias empregadas. O objetivo é fornecer uma visão consolidada dos ativos digitais críticos da operação, com foco em segurança, escalabilidade e governança.

**Escopo:** abrange exclusivamente os ativos tecnológicos sob controle direto da Vertical Loto, implementados ou operados em nuvem, servidores ou ambientes locais vinculados à plataforma principal.

**Referências Normativas:** ISO 27001, GLI-19, boas práticas DevSecOps e arquitetura em nuvem.

## **Infraestrutura e Componentes Tecnológicos**

| Componente                 | Categoria         | Localização / Hosting           | Finalidade                          | Status  | Responsável |
|---------------------------|-------------------|----------------------------------|-------------------------------------|---------|-------------|
| Plataforma Vertical Loto | Plataforma SaaS   | AWS / EC2                        | Execução dos jogos e backend       | Ativo   | Kennedy     |
| Banco de Dados (PAM)     | Banco de dados    | AWS / RDS PostgreSQL             | Armazenamento de dados da operação | Ativo   | Kennedy     |
| Infraestrutura AWS       | Cloud / Infra     | AWS (múltiplas zonas)            | Infraestrutura de cloud computing  | Ativo   | Gisélio     |
| API REST Principal       | API Backend       | Cloud + Gateway de API           | Integração entre frontend e backend| Ativo   | Kennedy     |
| API Pública de Consulta  | API Externa       | Cloud + CDN                      | Consulta de resultados             | Ativo   | Kennedy     |
| Ambiente de Homologação  | Ambiente           | AWS                              | Testes e certificações             | Ativo   | Gisélio     |
| Ambiente de Produção     | Ambiente           | AWS                              | Execução oficial da plataforma     | Ativo   | Gisélio     |
| Dotfin ERP               | Sistema Financeiro | Interno                          | Gestão financeira e relatórios     | Ativo   | Mariana     |

## **Segurança, Backups e Monitoramento**

| Item                         | Tipo            | Descrição                                                   | Frequência / Status     | Responsável |
|------------------------------|------------------|-------------------------------------------------------------|--------------------------|-------------|
| Backup Automático            | Segurança        | Backups diários no RDS / Amazon S3                          | Diário / Ativo           | Gisélio     |
| Monitoramento de Logs        | Observabilidade  | CloudWatch + métricas customizadas                          | Ativo / Notificação via Slack | Kennedy     |
| Testes de Vulnerabilidade    | Segurança        | Scans manuais + automação com SonarCloud / GitHub Actions  | Mensal / Ativo           | Kennedy     |
| Controle de Acesso           | Segurança        | IAM segmentado por função e por stack                       | Ativo / Revisado mensalmente | Gisélio     |

## **Ambientes Segregados e Controles**

- Todos os ativos operam com ambientes segregados: produção, homologação e testes.
- A homologação é utilizada para fins de certificação e debug (GLI, SPA/MF).
- A produção possui controle de acesso restrito com auditoria ativa.
- Não existe acesso direto ao banco de produção por desenvolvedores.

## **Indicadores e Evidências**

- Relatórios de auditoria de acesso (últimos 3 meses)
- Prints do console AWS e CloudWatch
- Logs de backup e recuperação bem-sucedida
- Arquitetura de APIs documentada (Swagger)

## **Histórico de Alterações**

| Data       | Versão | Descrição da Alteração         | Responsável     |
|------------|--------|--------------------------------|-----------------|
| 26/06/2025 | 1.0    | Documento inicial padronizado | Kennedy         |
