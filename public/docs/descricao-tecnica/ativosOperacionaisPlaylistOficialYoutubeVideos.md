# **Descrição Técnica – Playlist Oficial (YouTube / Vídeos)**

> A **Playlist Oficial (YouTube / Vídeos)** é o repositório digital e público mantido pela **Vertical Loto** para distribuição e organização dos conteúdos em vídeo relacionados aos produtos da empresa (principalmente *Bilhete Tradicional* e *Super 25*). Ela garante padronização visual, centralização de acessos e registro histórico para fins de compliance, marketing e governança.

## **Funcionalidades Principais**

- **Armazenamento Público e Privado**: Organização de vídeos em playlists públicas (sorteios, resultados, cortes) e privadas (treinamentos, conteúdos internos).
- **Publicação Pós-Sorteio**: Upload automatizado ou manual de cortes editados após cada sorteio.
- **Streaming ao Vivo**: Hospedagem de transmissões dos sorteios com registro automático de replay.
- **Organização Temática**: Playlists segmentadas por produto, tipo de conteúdo e campanha.
- **Controle de Identidade Visual**: Aplicação de thumbnails padronizadas, títulos e descrições otimizadas.
- **Integração com Outros Canais**: Compartilhamento de vídeos para redes sociais e backoffice.
- **Indexação e Busca**: SEO interno e metadados configurados para aumentar visibilidade.
- **Histórico e Arquivo**: Manutenção de registros para compliance (retenção mínima de 5 anos para sorteios).

## **Integrações e Dependências**

- **Estúdio 1 / vMix**: Origem do streaming ao vivo.
- **OBS Studio (backup)**: Redundância para transmissões.
- **CapCut**: Edição dos cortes pós-sorteio.
- **Backoffice Vertical Loto**: Alimentação de links e metadados.
- **Ambiente Produção (AWS)**: Hospedagem e performance do streaming.
- **Compliance SPA/MF**: Playlist de sorteios serve como evidência de operação.
- **Marketing e Redes Sociais**: Distribuição de conteúdo derivado.

## **Arquitetura e Stack Tecnológica**

- **Plataforma**: YouTube Studio.
- **Edição**: CapCut (mobile e desktop) + Adobe Premiere (opcional).
- **Streaming**: vMix (principal) e OBS Studio (backup).
- **Infraestrutura**: CDN e recursos do YouTube para armazenamento e distribuição.
- **Segurança**: Controle de permissões de acesso via contas Google corporativas.
- **SEO e Metadados**: Padrão definido por checklist interno (título, descrição, tags, miniatura).

## **Compliance e Certificações**

- **Retenção de Conteúdo**: Arquivamento de todos os sorteios conforme exigência da **GLI** e **SPA/MF**.
- **Política de Privacidade**: Adequada à LGPD.
- **Evidência Regulatória**: Playlist oficial é aceita como registro válido de sorteio.
- **Controle de Alterações**: Edição de vídeos é restrita a casos de corte técnico, mantendo cópia original arquivada.

## **Finalidade Estratégica**

A Playlist Oficial é um ativo estratégico pois:

- Garante evidência audiovisual para auditorias e certificações.
- Centraliza o consumo de conteúdo institucional e promocional.
- Reforça a marca e amplia o alcance de produtos.
- Serve como canal oficial de relacionamento com o público.

## **Indicadores de Valor**

- **Visualizações por Playlist**.
- **Tempo Médio de Retenção**.
- **Taxa de Cliques em Miniatura (CTR)**.
- **Engajamento (comentários, likes, compartilhamentos)**.
- **Disponibilidade e Integridade dos Registros**.