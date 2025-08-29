# **Descrição Técnica – Legitimuz (Cadastro e KYC de Apostadores)**

> O **Legitimuz** é o **serviço oficial de cadastro e verificação de identidade (KYC)** da **Vertical Loto**, integrado **ativamente** ao **PAM Vertical Loto** para **criação, atualização e validação** de contas de jogadores. Ele **não** executa **depósitos, saques** ou qualquer **comunicação com gateways de pagamento**. Seu foco é **identidade, elegibilidade e compliance regulatório**, garantindo que apenas usuários verificados operem na plataforma.

## **Funcionalidades Principais**

- **Cadastro de Conta**: criação de perfil do jogador no PAM, coleta de dados obrigatórios (nome, CPF, data de nascimento, endereço, contato) e aceite de termos.
- **KYC Documental**: captura e validação de **documentos oficiais** (RG/ CNH), **selfie liveness** e checagens de **prova de vida**.
- **Validações Automáticas**: verificação de **CPF/identidade**, **idade**, **pep/sanções/listas restritivas**, consistência de dados e **match face–documento**.
- **2FA e Segurança de Acesso**: ativação de múltiplos fatores (e‑mail, SMS, app) e políticas de recuperação com logs de aprovação.
- **Status e Regras de Elegibilidade**: estados da conta (**pendente, aprovado, reprovado, suspenso, autoexcluído**), bloqueios por risco e **revisão manual** com alçadas.
- **Logs e Evidências**: trilha completa de auditoria (request/response, metadados, hashes), retenção conforme políticas da Vertical.
- **Relatórios Operacionais**: painéis de **taxa de aprovação**, **tempo médio de verificação (TMA)**, motivos de reprovação e fila de revisões.

## **Integrações e Dependências**

- **PAM Vertical Loto**: integração **ativa** via API para **criação/atualização** de jogador, **status KYC**, **autoexclusão** e **limites**; idempotência assegurada.
- **Fontes Externas de Verificação**: serviços de checagem de identidade, PEP/sanções e validação documental (via provedores KYC homologados). **Sem** integração com **gateways de pagamento**.
- **SIGAP / SPA-MF**: suporte indireto via PAM aos requisitos regulatórios de **cadastros** e **logs**.

## **Arquitetura e Stack Tecnológica**

- **Backend**: Node.js, serviços modulares (cadastro, KYC, liveness, sanções, webhooks).
- **Banco de Dados**: PostgreSQL (transacional) e **Redis** (cache, filas, chaves de idempotência).
- **Cloud**: AWS (EC2, RDS, S3, CloudFront, API Gateway) com alta disponibilidade e segregação de ambientes (DEV, QA, PRD).
- **Segurança**: TLS 1.2/1.3, WAF Cloudflare, **RBAC**, **secrets vault**, criptografia em repouso e em trânsito, **assinaturas HMAC** para webhooks.
- **DevOps**: CI/CD, observabilidade (métricas/logs/traces), **canary/blue‑green** para integrações sensíveis e **backups diários**.

## **Compliance e Certificações**

- Alinhado à **Lei 14.790/2023**, **Portarias SPA/MF** (cadastro e KYC), **PLD/AML** e **LGPD**.
- Políticas de **KYC**, **lista restritiva**, **autoexclusão**, **limites** e **retenção de evidências**.
- Testes de integração e segurança com o **PAM** e provedores **KYC** homologados.

## **Finalidade Estratégica**

O Legitimuz é um ativo crítico para a operação da Vertical Loto, pois:

- Garante **onboarding seguro** e **compliance** do jogador antes de qualquer transação.
- Reduz **fraude de identidade** e risco operacional, elevando a **conversão** de cadastro aprovado.
- Mantém **rastreabilidade ponta a ponta** (account lifecycle) e suporte a **auditorias**.
- Separa responsabilidades: **Legitimuz** (identidade/KYC) × **PAM** (conta/saldo/regras) × **Dotfin/Backoffice** (financeiro/contábil).

## **Indicadores de Valor**

- **Taxa de aprovação KYC** e **tempo médio de verificação**.
- **Taxa de falsos positivos/negativos** (documento/face).
- **% de autoexclusão** e **aderência a limites** por CPF.
- **Disponibilidade da API** e **latência de webhooks**.
