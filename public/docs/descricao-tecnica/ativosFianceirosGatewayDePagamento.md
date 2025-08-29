# **Descrição Técnica – Gateway de Pagamento (Operadores)**

O Gateway de Pagamento dos Operadores é o canal técnico-financeiro que conecta a plataforma da Vertical Loto às soluções de pagamento utilizadas pelos operadores licenciados. Ele permite a entrada de créditos exclusivamente por meio de depósitos realizados pelos jogadores e a saída de créditos via saques solicitados, de forma segura, integrada e rastreável. Não envolve movimentação direta de fundos pela Vertical Loto; toda a gestão operacional é realizada pelo backoffice.

## **Modelo de Integração**

Cada operador utiliza um gateway homologado próprio, podendo ser PSPs tradicionais (PagSeguro, Pix, bancos digitais) ou APIs de pagamento com split e wallets integradas. A integração com o gateway do operador é feita via API REST e webhooks para confirmação assíncrona de status.

## **Entrada – Depósitos**

A entrada de créditos ocorre exclusivamente por meio de depósitos realizados diretamente pelo jogador. Esses depósitos são processados via gateway, creditados automaticamente na plataforma e ficam disponíveis no saldo da carteira do jogador, podendo ser utilizados em apostas ou sacados posteriormente. Créditos gerados por prêmios ganhos em sorteios não passam pelo gateway; são contabilizados internamente na plataforma e refletidos no saldo do jogador.

## **Saída – Saques**

Quando o jogador solicita um saque, o backoffice consulta o saldo disponível e gera a ordem de pagamento. A solicitação é enviada ao gateway do operador, que realiza a transferência ao jogador em nome próprio. Todo o processo é registrado e auditável.

##  **Segurança e Auditoria**

As transações possuem token único, timestamp e hash de integridade. Logs são mantidos por ambas as partes (Vertical Loto e operador) e retidos por no mínimo 5 anos. Em caso de falha no gateway, ocorre fallback e bloqueio temporário de ordens.

## **Indicadores Monitorados**

- Tempo médio de confirmação

- Volume diário de transações por operador

- Taxa de falhas por gateway

- Percentual de ordens liquidadas vs. pendentes

## **Finalidade Estratégica**

O gateway é essencial para garantir o fluxo correto de depósitos e saques, sem movimentação direta de fundos pela Vertical Loto, assegurando rastreabilidade, segurança e conformidade regulatória.

## **Observações**

- Todos os gateways são homologados e validados tecnicamente antes de integração

- Os relatórios do gateway são cruzados com os logs do backoffice para compliance e auditoria
