# **Descrição Técnica – Cloudflare**

> O Cloudflare é o serviço utilizado pela Vertical Loto para segurança de rede, distribuição de conteúdo e estabilidade de acesso. Atua como camada de proteção e desempenho entre os usuários e a infraestrutura hospedada na AWS, reduzindo latência, evitando ataques e fornecendo escalabilidade de acesso global.

## **Componentes técnicos:**

- **CDN**: entrega otimizada de arquivos estáticos, como imagens, folhas de estilo, JavaScript e vídeos (quando aplicável).

- **Proteção contra DDoS**: bloqueio automático de tráfego malicioso com regras e mitigação em tempo real.

- **SSL / HTTPS Gerenciado**: emissão e renovação automática de certificados SSL para todas as aplicações.

- **Políticas de Cache**: regras customizadas de cache para otimizar performance e reduzir carga nos servidores.

- **WAF (Web Application Firewall)**: aplicação de regras de segurança, incluindo proteção contra SQL Injection, XSS e bots.

- **Otimização de Desempenho**: compressão automática, minificação de scripts, e roteamento inteligente de tráfego.

## **Finalidade Estratégica:**

Garantir **segurança**, **desempenho** e **confiabilidade** no acesso às plataformas da Vertical Loto, especialmente para grandes volumes simultâneos em horários de pico (como nos sorteios ao vivo).

## **Observações:**

- Integração completa com os domínios e subdomínios operacionais da empresa.

- Parte das evidências exigidas na certificação GLI.

- Logs e relatórios de tráfego ficam disponíveis para o time de infraestrutura.
