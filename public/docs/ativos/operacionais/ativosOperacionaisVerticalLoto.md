# **Ativos Operacionais da Vertical Loto**

## **Informações Gerais**

- **Nome do Documento:** Ativos Operacionais da Vertical Loto
- **Versão:** 1.0
- **Data de Elaboração:** 26/06/2025
- **Data da Última Atualização:** 26/06/2025
- **Responsável pela Elaboração:** Junior – Head de Projetos
- **Revisor(es):** Junior Moura – Líder de Estúdios / Equipe Técnica
- **Status do Documento:** Ativo

## **Introdução**

Este documento apresenta o mapeamento completo dos ativos operacionais da Vertical Loto, incluindo infraestrutura de estúdios, sistemas de transmissão, equipamentos auxiliares e ambientes de suporte às operações ao vivo e gravadas. O conteúdo está estruturado segundo as boas práticas de gestão de ativos operacionais, em alinhamento com a norma ISO 55000 e requisitos da GLI para certificações técnicas.

**Escopo:** ativos localizados fisicamente na sede da Vertical Loto ou vinculados diretamente à operação de estúdios, transmissões e sorteios.

**Referências Normativas:** ISO 55000, GLI-19, GLI-33, práticas de broadcast ao vivo (vMix, OBS).

## **Infraestrutura de Estúdios**

| Nome do Estúdio | Localização     | Equipamentos Principais                                                   | Capacidade Operacional       | Status   | Responsável   | Observações                                                 |
|------------------|------------------|---------------------------------------------------------------------------|-------------------------------|----------|----------------|--------------------------------------------------------------|
| Estúdio 1        | Sede – Sala A    | 3 câmeras, 3 softboxes, 1 microfone lapela, sorteadeira, chroma key      | Transmissões e gravações principais | Ativo    | Junior Moura   | Sorteadeira GLI, integração com vMix e Sala de Transmissão  |
| Estúdio 2        | Sede – Sala C    | 2 câmeras, 3 luzes, 1 microfone lapela, cenário fixo                      | Lives e gravações secundárias     | Planejado| Junior Moura   | Sem sorteadeira. Uso independente ou via Sala de Transmissão |
| Estúdio 3        | Sede – Sala D    | 2 câmeras, 3 luzes, banco de praça, roleta, chroma key                    | Conteúdo temático e promocional   | Planejado| Junior Moura   | Uso independente com cenário simulado de praça              |
| Sala de Transmissão | Sede – Sala B | 2 PCs, 4 monitores, vMix, OBS, interfaces AV                             | Controle central de transmissões   | Ativo    | Equipe Técnica | Conectado à internet dedicada e backups de vídeo            |

## **Sistemas e Equipamentos de Suporte**

| Equipamento             | Função                  | Localização         | Responsável   | Status | Observações                              |
|-------------------------|--------------------------|----------------------|---------------|--------|-------------------------------------------|
| Internet Dedicada       | Transmissões ao vivo     | Rack Central         | TI – João     | Ativo  | 500 Mbps com failover automático          |
| Link Redundante         | Backup de conectividade  | Rack Central         | TI – João     | Ativo  | Failover < 5s                             |
| Nobreak                 | Energia ininterrupta     | Subsolo              | Infra – Pedro | Ativo  | 30 min autonomia                          |
| Controle de Acesso      | Segurança física         | Entrada principal    | Junior Moura  | Ativo  | Fechadura eletrônica, controle por equipe |
| Armazenamento de Vídeo  | Backup de gravações      | Sala de Transmissão  | Auxiliares    | Ativo  | HD externo + nuvem, retenção indefinida   |
| Câmeras de Segurança    | Monitoramento 24h        | Estúdios e corredores| Segurança – Ana | Ativo | 8 câmeras integradas ao sistema de acesso |
| Sorteadeira Certificada | Equipamento de sorteios  | Estúdio 1            | Junior Moura  | Ativo  | Certificada GLI, uso diário, integrada ao vMix |

## **Software de Operação de Estúdio**

| Software     | Tipo de Licenciamento | Uso                       | Responsável   | Status | Observações                                      |
|--------------|------------------------|---------------------------|----------------|--------|-------------------------------------------------|
| vMix         | Licenciado             | Transmissão principal ao vivo | Técnico     | Ativo  | Integrado com sorteadeira e gravação            |
| Nanocosmo    | Licenciado             | Transmissão em baixa latência| TI – João    | Ativo  | Encoder principal para externas                 |
| OBS Studio   | Gratuito               | Contingência e testes         | Junior Moura | Ativo  | Sem plugins, uso eventual                      |

## **Interfaces e Dependências por Ativo**

| Ativo                | Interfaces/Dependências                                   |
|----------------------|----------------------------------------------------------|
| Estúdio 1            | vMix, Sala de Transmissão, Sorteadeira, Internet dedicada |
| Estúdio 2            | OBS Studio, Sala de Transmissão (opcional)               |
| Estúdio 3            | OBS Studio, equipamentos de gravação, Sala Transmissão   |
| Armazenamento de Vídeo | Sala de Transmissão, nuvem, HD externo                  |
| Sorteadeira          | vMix, Estúdio 1, software de sorteio                      |

## **Métricas por Ativo**

| Ativo          | Métrica Principal                          |
|----------------|---------------------------------------------|
| Estúdio 1      | Setup médio: 10 min / Disponibilidade: 99% |
| Sala de Transmissão | Tempo médio de reação a incidentes: 5 min |
| Sorteadeira     | Média de uso: 2 sessões/dia                |

## **Anexos e Evidências**

- Fotos dos estúdios
- Mapas de cabeamento e infraestrutura
- Prints das interfaces vMix e OBS
- Laudos de manutenção preventiva (GLI)

**Histórico de Alterações**
| Data       | Versão | Descrição da Alteração         | Responsável     |
|------------|--------|--------------------------------|-----------------|
| 26/06/2025 | 1.0    | Documento inicial padronizado | Jovair Silva    |
