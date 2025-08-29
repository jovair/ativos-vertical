# **Mapeamento de Processos – IA Promotor**

**Data de Elaboração: 14/07/2025**

**Responsável: Head Comercial + Squad de Tecnologia**

**Versão: 1.0**

## **Visão Geral**

O IA Promotor é um sistema interno de inteligência artificial, desenvolvido para recomendar jogos, personalizar ofertas e aumentar a retenção e o GGR dos produtos da Vertical Loto. Atua como motor de ativação comportamental, usando dados transacionais e operacionais para entregar mensagens personalizadas via front da plataforma, push, e-mail ou interfaces futuras.

Ele é crítico no contexto estratégico porque conecta os ativos tecnológicos (engine, plataforma), operacionais (produtos, sorteios) e comerciais (cross-sell, upsell).

## **Macroprocessos**

1.  Coleta e Organização de Dados

- Captura de dados transacionais (apostas, resultados, bilhetes).

- Logs de engajamento (horário, frequência de login, interações).

- Dados anonimizados de KYC (status verificado).

2.  Segmentação e Modelagem

- Classificação dos jogadores por perfil (ex.: novos, alta frequência, dormindo, VIP).

- Modelagem de escore de propensão à compra (machine learning).

- Definição de clusters comportamentais.

3.  Geração de Ofertas e Recomendações

- Criação automática de sugestões de jogos ou bilhetes.

- Ofertas personalizadas (ex.: "Promoção especial para seu perfil").

- Segmentação de comunicação (ex.: push only, email only, front-app).

4.  Disparo e Monitoramento

- Integração com front da plataforma, painel promocional e IA interna.

- Monitoramento de aceitação (cliques, apostas geradas).

- Ajustes automáticos de campanha conforme performance.

5.  Feedback e Aprendizado Contínuo

- Registro do resultado de cada ativação.

- Atualização do modelo de score.

- Inclusão de novos parâmetros (ex.: sazonalidade, quadros ao vivo).

## **Matriz de Riscos**

| **Processo** | **Tipo de Risco** | **Impacto** | **Probabilidade** | **Mitigação / Plano de Ação** |
|----|----|----|----|----|
| Coleta de dados | Compliance / LGPD | Alto | Médio | Dados anonimizados, consentimento registrado. |
| Modelagem e segmentação | Estratégico | Médio | Médio | Revisão mensal das bases e validação por QA técnico. |
| Disparo de campanhas | Reputacional | Médio | Baixo | Limites configurados por perfil, revisão por Produto. |
| Feedback e ajustes | Operacional | Médio | Médio | Logs completos, rollback automático em falhas. |

## **Matriz de Dependências**

| **Origem** | **Destino** | **Tipo de Dependência** | **Descrição** |
|----|----|----|----|
| Plataforma | IA Promotor | Técnica | Dados de transações, engajamento e login. |
| IA Promotor | Front da Plataforma | Técnica | Exibição de ofertas, campanhas ativas. |
| IA Promotor | Dotfin | Financeira | Atualização de resultados e valores. |
| IA Promotor | Marketing | Estratégica | Coordenação de mensagens e segmentação. |

## **Indicadores Estratégicos**

| **Indicador** | **Métrica** | **Impacto no Valuation** |
|----|----|----|
| CTR de campanhas IA | % cliques / visualizações | Eficácia da ativação, potencial de receita adicional. |
| Taxa de conversão pós-recomendação | % apostas geradas / recomendações | Aumento do GGR e receita incremental. |
| Ticket médio por campanha | Valor médio de apostas originadas | Margem operacional e potencial de margem líquida. |
| Taxa de churn mitigada | % de reativação de inativos | Redução do churn, maior lifetime value. |

## **Sumário Executivo**

O IA Promotor é um dos ativos intangíveis mais estratégicos da Vertical Loto, pois converte dados transacionais e operacionais em inteligência preditiva para gerar receita adicional e aumentar a retenção. Seu impacto direto no GGR e na ativação comportamental posiciona a empresa como provedora inovadora e preparada para modelos avançados de engajamento, requisito essencial para valuation elevado em mercados regulados.

A rastreabilidade de todas as campanhas, somada à integração com os ativos tecnológicos (Engine, PAM, Dotfin), garante governança e compliance contínuos.

A formalização deste processo fortalece a narrativa de inovação contínua da Vertical Loto, sendo pilar crítico para auditorias, captação e M&A.
