#  **Descrição Técnica – Ambiente AWS**

> O Ambiente AWS é a infraestrutura de nuvem que sustenta todos os sistemas da Vertical Loto, incluindo a Plataforma de Jogos, Dotfin, IA Promotor e serviços de backoffice. A arquitetura foi planejada com foco em disponibilidade, escalabilidade e conformidade com padrões internacionais de segurança da informação.

## **Componentes técnicos:**

- **EC2**: instâncias de servidores responsáveis por hospedar a aplicação e APIs em produção e homologação.

- **RDS**: banco de dados PostgreSQL gerenciado, com replicação automatizada e snapshots diários.

- **S3**: repositório de arquivos estáticos, logs, evidências e backups dos jogos e da operação.

- **WAF e Segurança de Rede**: políticas configuradas de firewall, tráfego, bloqueio de IPs e proteção contra DDoS.

- **Segregação de Ambientes**: ambientes de produção e homologação isolados com variáveis e acessos distintos.

- **Monitoramento com CloudWatch**: acompanhamento contínuo de uso de CPU, memória, falhas e alarmes críticos.

- **Backup e Recuperação**: estratégias programadas de snapshot e scripts de recuperação para garantir continuidade.

## **Finalidade Estratégica:**

Oferecer uma base técnica segura, escalável e robusta para toda a operação da empresa. Também garante conformidade com exigências regulatórias (GLI, ISO, SPA/MF) e sustenta o crescimento sem reestruturações caras.

## **Observações:**

- Toda infraestrutura é mantida internamente com apoio de especialistas em AWS.

- Utiliza práticas de DevSecOps para deploys.

- Referência cruzada nos documentos técnicos da certificação GLI (SY, RN, CS).
