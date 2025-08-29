# **Descrição Técnica – Integração com SPA/MF (Relatórios de Movimento e Conformidade)**

A integração com o Sistema de Prêmios e Apostas do Ministério da Fazenda (SPA/MF) é o processo oficial de envio de dados operacionais, financeiros e cadastrais da Vertical Loto, assegurando rastreabilidade, conformidade legal (Lei 14.790/2023) e habilitação para operação regulamentada.

## Escopo de Dados São enviados dados diários e mensais, incluindo:

- Volume de apostas (por operador e produto)

- Prêmios concedidos e liquidados

- Ordens de pagamento e status

- Dados de jogadores (anonimizados, com KYC)

- Logs técnicos e relatórios de movimentação

## Mecanismo de Integração

- API oficial ou upload direto à plataforma SPA/MF

- Dados criptografados, autenticados com e-CNPJ (certificado digital)

- Formato JSON ou XML, conforme padrão fornecido

- Confirmação de entrega via hash e protocolo de recebimento

## Governança e Segurança

- Logs de envio com timestamp, ID único e hash de integridade

- Retenção mínima de 5 anos em AWS segregado

- Acesso restrito a perfis de compliance e tecnologia

## Relatórios Vinculados

- Relatório diário de movimentação

- Relatório mensal de premiação

- Relatório de PLD (Prevenção à Lavagem de Dinheiro)

- Relatórios de incidentes técnicos e apostas de alto valor

##  Estratégia e Compliance 

A integração com SPA/MF é um ativo estratégico, viabilizando contratos com operadores e fortalecendo o valuation. Garante conformidade regulatória e suporte a auditorias (GLI, SPA/MF, ISO), comprovando robustez operacional e governança.

## Observações 

Falhas de envio são registradas, reprocessadas e auditáveis. Toda documentação é armazenada em ambiente redundante e auditável. O dossiê de conformidade pode ser gerado sob demanda para stakeholders internos e externos.

- 
