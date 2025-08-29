# **Mapa de Dependências entre Ativos da Vertical Loto**

## **Objetivo do Documento**

Este documento apresenta o mapeamento completo das dependências e inter-relações entre os ativos da Vertical Loto, com foco nos produtos próprios (Bilhete Tradicional e Super 25). Ele reflete a infraestrutura real validada com base nos documentos técnicos atualizados da empresa, incluindo todos os ativos financeiros, tecnológicos, operacionais, humanos, comerciais e regulatórios.

## **Categorias Mapeadas**

- Ativos Tecnológicos

- Ativos Regulatórios

- Ativos Operacionais

- Ativos Humanos

- Ativos Comerciais

## **Dependências por Produto**

### **Produto Bilhete Tradicional**

**Dependente de:**

- Certificação GLI (produto)

- Plataforma Bilhete Tradicional (PAM + Engine)

- Sorteadeira Física Multipick 4 (GLI)

- Backoffice da Plataforma Vertical

- Webservice SIGAP (conformidade regulatória)

- Legitimus (validação KYC)

- Ambiente Produção (AWS)

- Dotfin ERP (relatórios financeiros)

- Estúdio 1 com vMix (operação ao vivo)

- OBS Studio (backup técnico)

- CapCut (edição de cortes)

- YouTube (distribuição)

### **Produto Super 25**

**Dependente de:**

- Resultado do Bilhete Tradicional

- Certificação GLI (produto)

- Plataforma Bilhete Tradicional

- Integração SIGAP

- IA Promotor (ativação)

- Dotfin ERP (controle financeiro)

- Estúdio 1 com vMix

## **Dependências Cruzadas entre Ativos**

| **Ativo** | **Depende de** | **Impacta em** |
|----|----|----|
| Plataforma Bilhete Trad. | AWS, GLI, SPA/MF, Legitimus | Todos os produtos, SIGAP, IA Promotor |
| Sorteadeira Multipick 4 | GLI, Estúdio, vMix | Bilhete Tradicional, Super 25 |
| IA Promotor | Plataforma, Banco de Dados | Conversão, ativação, recomendação |
| Legitimus | Plataforma, API externa | Conformidade, KYC, SIGAP |
| Dotfin ERP | PAM (leitura passiva), gateways | Relatórios, conciliações, fechamento GGR |
| Backoffice | PAM | Gestão operacional e dados estratégicos |
| Estúdio 1 | vMix, OBS, Sorteadeira | Transmissão ao vivo |
| Ambiente Produção (AWS) | Cloud AWS, DevOps | Execução dos produtos e sistema SIGAP |
| Webservice SIGAP | PAM, Certificado ICP-Brasil | SPA/MF e conformidade regulatória |
| CapCut / YouTube | Estúdios | Pós-produção e publicação |

## **Indicadores por Produto**

### **Bilhete Tradicional**

- RTP Validado (GLI)

- GGR por sorteio

- Taxa de conversão por horário

- Nível de participação (viewers por live)

### **Super 25**

- GGR diário

- Volume de bilhetes vendidos

- Índice de acerto por faixa

- Dependência direta do resultado do Bilhete Tradicional

- Volume/dia e retorno ao jogador

## **Organograma de Dependências**

![](media/image1.png)

## **Processos Regulatórios e Operacionais Mapeados**

### **Processos Regulatórios (SPA/MF e GLI)**

| **Processo** | **Responsável** | **Frequência** | **Ferramentas / Evidências** | **Ativos Relacionados** |
|----|----|----|----|----|
| Submissão GLI | Jurídico / Produto / Tech | Pontual | Documentação técnica, relatórios GLI | Plataforma, Produtos, Sorteios |
| Integração SIGAP | Tech / Jurídico | Diária | API, XMLs, logs | Plataforma, Webservice SIGAP, Dotfin |
| Auditoria GLI Trimestral | Compliance / Estúdios | Trimestral | Checklists ClickUp, vídeos, relatórios | Sorteadeira, Estúdios, SIGAP |
| Conformidade KYC | Compliance / Tech | Contínua | Legitimus, logs | Plataforma, Legitimus |
| Retenção de Vídeos | Segurança / Estúdios | Diária | Backups, links do YouTube, HDs externos | Estúdios, Sorteadora, SIGAP |
| Relatórios SPA/MF | Financeiro / Jurídico | Mensal | Extração Dotfin + Webservice | Dotfin, SIGAP |

### **Processos Operacionais**

| Processo | Responsável | Frequência | Ferramentas / Evidências | Ativos Relacionados |
|----|----|----|----|----|
| Transmissão ao vivo | Estúdios / Apresentadora | 8x por dia | vMix, OBS, Sorteadora | Estúdio, Produtos |
| Edição e upload de cortes | Auxiliar de Estúdio | Diária | CapCut, YouTube, checklist | CapCut, Estúdio |
| Apuração e publicação de resultado | Produto / QA | Diária | Plataforma, SIGAP, Dotfin | Produtos, Webservice |
| Ativação de jogos via IA | Produto / Marketing | Contínua | IA Promotor, dashboards | Produtos, Plataforma |
| Monitoramento e auditoria | QA / Infraestrutura | Pós-turno | Logs técnicos, relatórios | Plataforma, AWS, Sorteadora |
| Supervisão ao vivo | Pitboss / Estúdios | Cada sorteio | Formulários digitais, sistema | Sorteadora, Estúdios |

## **Indicadores de Valor por Ativo**

| **Ativo** | **Indicadores Estratégicos** |
|----|----|
| Plataforma Bilhete Trad. | Uptime (\>99,5%), GGR total, tempo de resposta, transações por segundo |
| Bilhete Tradicional | RTP GLI, GGR por sorteio, conversão, audiência média, índice de fidelidade |
| Super 25 | Volume diário, acerto por faixa, GGR diário, dependência do BT |
| RNG.ts | Confiabilidade estatística, retorno teórico médio, tempo de processamento |
| Sorteadora Multipick 4 | Sorteios/dia, falhas por turno, tempo médio de extração |
| Legitimus | % de aprovação, tempo de verificação, volume diário, rejeições |
| Dotfin ERP | SLA conciliação, divergência PAM, % automação bancária, volume processado |
| IA Promotor | CTR, apostas via IA, impacto no GGR, ativações por cluster |
| Estúdio 1 | Falhas técnicas, transmissões/dia, tempo de setup, aproveitamento de quadros |
| Ambiente Produção (AWS) | Uptime, escalabilidade, latência, custo por ambiente |
| Webservice SIGAP | % de XMLs aceitos, tempo de resposta, falhas de envio, logs retidos |
| CapCut / OBS / YouTube | Tempo de pós-produção, taxa de entrega, visualizações por corte |

## **Histórico de Alterações**

| Data | Versão | Descrição da Alteração | Responsável |
|----|----|----|----|
| 26/06/2025 | 1.0 | Criação do mapa inicial | Jovair Silva |
| 01/08/2025 | 2.0 | Atualização completa com base em novos documentos e validações | Jovair Silva |
