# **Descrição Técnica – Logs e Auditoria Financeira (Versão Final Focada)**

## **Finalidade**

Garantir rastreabilidade detalhada e integridade das movimentações financeiras e operacionais realizadas exclusivamente pela plataforma da Vertical Loto, apoiada pelo Backoffice e integrando dados ao webservice SPA/MF para fins regulatórios e de compliance.

## **Origem e Registro dos Logs**

### **Plataforma**

- Registra automaticamente todas as operações financeiras (depósitos, apostas, prêmios, saques) realizadas via integração com gateways de pagamento certificados.

- Mantém logs completos de cada transação: ID único, valor, tipo, status, timestamps, operador e origem.

- Geração automática de hash de integridade e vinculação ao histórico do jogador.

### **Backoffice**

- Gerência de intervenções manuais (ex.: aprovação de saques elevados).

- Armazena logs detalhados de acessos, permissões, aprovações, cancelamentos e ajustes operacionais.

### **Webservice SPA/MF**

- Registra logs de envios obrigatórios (diários e mensais) de relatórios financeiros e operacionais.

- Guarda protocolos de envio, confirmações de recebimento e hashes de validação de conformidade.

### ** Logs por Jogador**

- Registros de saldo anterior e posterior a cada operação.

- Origem: depósito, aposta, prêmio, bônus ou saque.

- Integrado ao sistema de KYC (Legitimus).

## **Consulta e Filtros**

Painel técnico-financeiro com filtros por data, tipo de transação, produto, operador e valor. Exportação em formatos PDF ou CSV.

## **Segurança e Armazenamento**

- Armazenamento redundante em AWS segregada.

- Retenção mínima de 5 anos, conforme exigências regulatórias.

- Acesso restrito com autenticação reforçada.

- Logs assinados digitalmente e backups diários.

## **Auditorias**

- Internas: compliance, produto, financeiro.

- Externas: GLI, SPA/MF, fundos, due diligence.

Principais relatórios: movimentação financeira, prêmios liquidados, divergências e conformidade geral.

## **Importância Estratégica**

- Sustenta confiança e transparência para valuation e investidores.

- Garante aderência plena a exigências legais e regulatórias.

- Assegura rastreabilidade completa para processos de auditoria.

### **📌 Observações**

- Alertas automáticos para divergências e inconsistências.

- Logs cruzados entre plataforma, Backoffice e webservice SPA/MF.

- Política de retenção validada e auditável conforme GLI e legislação vigente.

&nbsp;
