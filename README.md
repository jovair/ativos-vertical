# Vertical Docs - Sistema de Documentação Vertical Loto

## 📋 **Visão Geral**

Sistema de documentação dinâmica para a Vertical Loto, desenvolvido com Next.js 15, TypeScript e Tailwind CSS. O projeto permite gerenciar e navegar por documentação técnica organizada por categorias e subcategorias.

## 🚀 **Funcionalidades Implementadas**

### **✅ Interface de Usuário**
- **Header responsivo** com altura otimizada (48px) similar ao Cursor AI
- **Logo otimizado** (104x104px) com proporções equilibradas
- **Sidebar expansível** com seções colapsáveis
- **Navegação por abas** organizada por categorias principais
- **Sistema de busca global** integrado em toda aplicação

### **✅ Navegação e Estrutura**
- **4 abas principais**: Ativos, Descrição Técnica, Mapeamento de Processos, Outros
- **Sidebar inteligente** com seções expansíveis:
  - **Ativos**: Comerciais, Financeiros, Humanos, Operacionais, Regulatórios, Tecnológicos
  - **Descrição Técnica**: Documentação técnica detalhada por categoria
  - **Mapeamento de Processos**: Processos departamentais e operacionais
  - **Outros**: Documentos complementares

### **✅ Sistema de Documentos**
- **Estrutura de pastas organizada** em `public/docs/`
- **Arquivos Markdown** com nomes em camelCase
- **Categorização automática** por tipo de ativo
- **Metadados estruturados** para cada documento

### **✅ Tecnologias e Configurações**
- **Next.js 15** com App Router e Turbopack
- **TypeScript** para tipagem estática
- **Tailwind CSS v3** com sistema de cores personalizado
- **PostCSS** configurado para processamento CSS
- **VS Code** configurado para Tailwind sem warnings

## 🏗️ **Arquitetura do Projeto**

### **Estrutura de Pastas**
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais e Tailwind
│   ├── layout.tsx         # Layout principal da aplicação
│   └── page.tsx           # Página inicial
├── components/             # Componentes React reutilizáveis
│   ├── Header.tsx         # Header com logo e busca
│   ├── Sidebar.tsx        # Sidebar expansível
│   ├── TabNavigation.tsx  # Navegação por abas
│   └── DocumentList.tsx   # Lista de documentos
├── contexts/               # Contextos React
│   ├── AuthContext.tsx    # Contexto de autenticação
│   └── SearchContext.tsx  # Contexto de busca global
├── data/                   # Dados estáticos
│   ├── categories.ts       # Categorias e subcategorias
│   └── documents.ts       # Lista de documentos
└── types/                  # Definições de tipos TypeScript
    └── index.ts           # Interfaces e tipos principais
```

### **Estrutura de Documentos**
```
public/docs/
├── ativos/                # Ativos principais
│   ├── comerciais/        # Ativos comerciais
│   ├── financeiros/       # Ativos financeiros
│   ├── humanos/           # Ativos humanos
│   ├── operacionais/      # Ativos operacionais
│   ├── regulatorios/      # Ativos regulatórios
│   └── tecnologicos/      # Ativos tecnológicos
├── descricao-tecnica/     # Documentação técnica
├── mapeamento-processos/  # Processos e fluxos
└── outros/                # Documentos complementares
```

## 🎨 **Sistema de Design**

### **Cores Personalizadas (Tailwind)**
```javascript
// tailwind.config.js
colors: {
  primary: '#3762D8',      // Azul principal
  secondary: '#ED373C',    // Vermelho secundário
  'dark-blue': '#0F1E31',  // Azul escuro
  'blue-light': '#34BDFB', // Azul claro
  'dark-red': '#B0070C',   // Vermelho escuro
  yellow: '#F7CA2E',       // Amarelo
  info: '#2F80ED',         // Azul informativo
  success: '#27AE60',      // Verde sucesso
  warning: '#E2B93B',      // Amarelo aviso
  error: '#EB5757',        // Vermelho erro
}
```

### **Componentes Estilizados**
- **Botões**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card`, `.card-hover`
- **Textos**: `.line-clamp-2`, `.line-clamp-3`

## 🔧 **Configurações Técnicas**

### **Next.js**
- **Versão**: 15.5.2
- **Modo**: Desenvolvimento com hot reload
- **Porta**: 3000 (configurável)
- **Build**: Turbopack habilitado

### **PostCSS**
```javascript
// postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### **VS Code**
- **Configurações**: `.vscode/settings.json`
- **Dados CSS**: `.vscode/css_custom_data.json`
- **Tailwind CSS**: IntelliSense configurado

## 📚 **Como Usar**

### **Desenvolvimento Local**
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

### **Adicionar Novos Documentos**
1. Coloque arquivos `.md` na pasta `public/docs/` correspondente
2. Use nomes em **camelCase** (ex: `meuDocumento.md`)
3. O sistema automaticamente detecta e categoriza
4. Nomes legíveis são gerados automaticamente

### **Estrutura de Documentos Markdown**
```markdown
# Título do Documento

## Descrição
Descrição do ativo ou processo

## Categoria
- Tipo: [Comercial|Financeiro|Humano|Operacional|Regulatório|Tecnológico]
- Subcategoria: [Específica]

## Dependências
- Lista de dependências

## Status
- Ativo/Inativo
- Versão
```

## 🚧 **Funcionalidades Pendentes**

### **Sistema Dinâmico de Documentos**
- [ ] Leitura automática de arquivos Markdown
- [ ] Mapeamento camelCase → nomes legíveis
- [ ] Sidebar dinâmica baseada na estrutura real
- [ ] Metadados automáticos dos documentos
- [ ] Sistema de busca em conteúdo Markdown

### **Melhorias de UX**
- [ ] Filtros avançados por categoria
- [ ] Sistema de tags e etiquetas
- [ ] Histórico de navegação
- [ ] Favoritos e bookmarks
- [ ] Exportação de documentos

### **Funcionalidades Avançadas**
- [ ] Sistema de versionamento de documentos
- [ ] Controle de acesso e permissões
- [ ] Histórico de mudanças
- [ ] Integração com sistemas externos
- [ ] API REST para consumo externo

## 🔍 **Como Encontrar Informações**

### **Documentação do Código**
- **README.md**: Este arquivo com visão geral
- **src/types/index.ts**: Definições de tipos TypeScript
- **tailwind.config.js**: Configurações de design
- **next.config.ts**: Configurações do Next.js

### **Estrutura de Componentes**
- **Header**: `src/components/Header.tsx`
- **Sidebar**: `src/components/Sidebar.tsx`
- **Navegação**: `src/components/TabNavigation.tsx`
- **Lista de documentos**: `src/components/DocumentList.tsx`

### **Dados e Configurações**
- **Categorias**: `src/data/categories.ts`
- **Documentos**: `src/data/documents.ts`
- **Contextos**: `src/contexts/`
- **Estilos**: `src/app/globals.css`

## 📝 **Histórico de Desenvolvimento**

### **Versão Atual (v1.0.0)**
- ✅ Sistema de navegação completo
- ✅ Interface responsiva e moderna
- ✅ Estrutura de pastas organizada
- ✅ Configurações técnicas otimizadas
- ✅ Sistema de cores personalizado
- ✅ Sidebar expansível funcional

### **Próximas Versões**
- **v1.1.0**: Sistema dinâmico de documentos
- **v1.2.0**: Funcionalidades avançadas de busca
- **v1.3.0**: Sistema de usuários e permissões
- **v2.0.0**: API e integrações externas

## 🤝 **Contribuição**

Para contribuir com o projeto:
1. Faça fork do repositório
2. Crie uma branch para sua feature
3. Implemente as mudanças
4. Teste localmente
5. Faça commit e push
6. Abra um Pull Request

## 📄 **Licença**

Este projeto é privado e pertence à Vertical Loto.

---

**Desenvolvido com ❤️ para a Vertical Loto**
**Versão**: 1.0.0
**Última atualização**: Agosto 2024
