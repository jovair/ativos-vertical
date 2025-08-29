# **Descrição Técnica – Conciliação de GGR e Repasse**

A Conciliação de GGR (Gross Gaming Revenue) e Repasse é o processo que calcula, valida e certifica os valores de receita bruta de jogo e os montantes a serem repassados à Vertical Loto pelos operadores licenciados. Este módulo integra dados do Dotfin, engine de sorteios e relatórios financeiros, sendo essencial para a rastreabilidade fiscal, conformidade regulatória e valuation.

📈 Cálculo de GGR GGR = Total apostado – Total pago em prêmios. Realizado por produto, operador e período (diário, semanal, mensal), com dados automáticos extraídos do Dotfin (ERP modular) e engine de jogos.

## Processo de Conciliação

- Relatórios internos (Dotfin e logs financeiros) por operador e produto.

- Validação cruzada com relatórios locais do operador.

- Conferência de apostas, premiações, estornos e ajustes.

- Emissão de resumo consolidado assinado digitalmente, incluindo tabelas de repasse.

- Integração ao plano de repasses comerciais e ao Dotfin para controle contábil.

## Painel de Monitoramento

Visualização de GGR acumulado, margens operacionais, comparativos históricos, e indicadores financeiros (fluxo de caixa, saldo, repasse previsto).

## Segurança e Governança 

Relatórios com timestamp, ID único, hash de integridade. Backups mensais em AWS segregado, seguindo política de retenção de 5 anos.

## Documentos Vinculados

- Planilhas de conciliação financeira

- Relatórios de logs (Dotfin e Auditoria)

- Tabelas de repasse digitais

- PDFs de aceite (assinados)

## Estratégia e Compliance 

A conciliação de GGR é um ativo crítico no valuation, garantindo governança, transparência e evidência em auditorias (GLI, SPA/MF, ISO). Não há movimentação de fundos próprios, reforçando o modelo de neutralidade financeira da Vertical Loto.

## Observações 

Conciliações mensais com checkpoints semanais; divergências levam a auditoria conjunta. Integração com SPA/MF via webservice e compliance contábil assegurado pelo Dotfin.
