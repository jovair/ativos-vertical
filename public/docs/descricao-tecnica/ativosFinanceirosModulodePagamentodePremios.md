# **Descrição Técnica – Módulo de Pagamento de Prêmios**

O Módulo de Pagamento de Prêmios é o subsistema responsável por identificar, registrar, validar e encaminhar para execução todas as premiações derivadas dos resultados dos sorteios certificados. Ele funciona de forma totalmente integrada dentro da própria plataforma e sua gestão é feita no Backoffice, garantindo rastreabilidade e compliance com regras de negócio e exigências regulatórias.

## Fluxo Operacional

Identificação Automática Após o sorteio, o sistema cruza o número sorteado com os bilhetes vendidos e identifica automaticamente os bilhetes premiados, suas faixas e valores.

Geração de Ordem A plataforma gera a ordem de pagamento diretamente no Backoffice, contendo:

- ID do bilhete

- Valor da premiação

- Operador vinculado

- Timestamp e hash de verificação

Validação e Regra de Negócio Verifica condições como:

- Faixa de premiação (mínima ou máxima)

- Limite por CPF/conta

- Suspensões ou bloqueios regulatórios Marca ordens como Aprovada, Pendente de Análise ou Rejeitada.

Execução Ordens aprovadas são processadas diretamente no Backoffice e, uma vez pagas, são marcadas como “Liquidadas” no painel financeiro.

## Auditoria e Logs

Cada etapa do processo (identificação, geração, validação, execução) é registrada. Logs são armazenados por 5 anos, com:

- ID da premiação

- Horário da geração

- Status da liquidação

- Referência do sorteio

Possui painel de consulta por:

- Data

- Produto (Bilhete Tradicional, Super 25)

- Operador

- Faixa de valor

## Indicadores Monitorados

- Volume diário de prêmios por faixa

- Taxa de aprovação vs. rejeição

- Tempo médio de execução

- Total de prêmios pagos por operador / por produto

## Conformidade Regulatória

Compatível com exigências da GLI-11, GLI-33 e SPA/MF. Todas as premiações são verificáveis por:

- Sorteio

- Engine de jogo

- ID de bilhete e jogador Respeita limites definidos por contrato, compliance e regras de jogo responsável.

## Finalidade Estratégica

O Módulo de Pagamento de Prêmios é o elo técnico e regulatório entre o resultado de um sorteio e o reconhecimento financeiro do jogador. É um ativo crítico para garantir:

- Transparência na operação

- Confiabilidade frente a certificadoras

- Credibilidade da plataforma perante operadores e público final

## Observações

- Integra-se ao painel administrativo do Backoffice para consulta por supervisores.

- Premiações de alto valor (\> R\$5.000) podem exigir liberação adicional.

- A retenção de impostos ou deduções é de responsabilidade do operador.
