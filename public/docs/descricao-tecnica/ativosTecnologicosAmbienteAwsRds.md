# **Descrição Técnica – Banco de Dados (RDS PostgreSQL)**

> O banco de dados da Vertical Loto é baseado em **RDS PostgreSQL**, uma solução relacional gerenciada pela AWS. Ele armazena os dados mais críticos da operação: contas de jogadores, transações, apostas, sorteios, relatórios, integrações com o Dotfin e registros exigidos por órgãos reguladores.

## **Componentes técnicos:**

- **Estrutura Relacional Central**: modelos relacionais bem definidos, com chaves e integridade referencial.

- **Replicação e Backup**: snapshots diários, replica em tempo real, política de retenção e recuperação em desastre.

- **Segregação por Ambiente**: bancos distintos para produção e homologação, com permissões separadas.

- **Criptografia em Repouso**: uso de criptografia nativa da AWS (KMS) para dados armazenados.

- **Logs e Auditoria**: habilitação de logs de acesso, queries, alterações críticas e tentativas de acesso externo.

- **Interfaces**: conectividade com a Plataforma Vertical, Dotfin, Legitimus e SPA/MF (via camadas intermediárias).

## **Finalidade Estratégica:**

É o repositório fundamental da operação. Sem ele, não há continuidade dos jogos, nem compliance. Representa um dos ativos mais sensíveis e valiosos no valuation da Vertical Loto.

## **Observações:**

- Performance monitorada com métricas via CloudWatch.

- Documentação do modelo lógico disponível para auditorias.

- Plano de expansão prevê uso de banco separado por produto (multi-tenant controlado).
