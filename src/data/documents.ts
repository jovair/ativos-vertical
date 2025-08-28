import { Document } from '@/types'

export const documents: Document[] = [
  // Ativos Comerciais
  {
    id: '1',
    title: 'Ativos Comerciais Vertical Loto',
    description: 'Visão geral dos ativos comerciais da empresa',
    category: 'comerciais',
    subcategory: 'Ativos Comerciais',
    type: 'markdown',
    path: '/docs/ativos-comerciais/ativos-comerciais-vertical-loto',
    updatedAt: '2024-01-15',
    tags: ['comercial', 'ativos', 'vertical']
  },
  {
    id: '2',
    title: 'Diferenciais de Mercado',
    description: 'Análise dos diferenciais competitivos no mercado',
    category: 'comerciais',
    subcategory: 'Diferenciais de Mercado',
    type: 'markdown',
    path: '/docs/ativos-comerciais/diferenciais-mercado',
    updatedAt: '2024-01-10',
    tags: ['comercial', 'mercado', 'diferenciais']
  },
  {
    id: '3',
    title: 'Direitos e Licenças',
    description: 'Documentação de direitos autorais e licenças comerciais',
    category: 'comerciais',
    subcategory: 'Direitos e Licenças',
    type: 'markdown',
    path: '/docs/ativos-comerciais/direitos-licencas',
    updatedAt: '2024-01-12',
    tags: ['comercial', 'direitos', 'licencas']
  },
  
  // Ativos Financeiros
  {
    id: '4',
    title: 'Dotfin - Orquestrador de Ordens',
    description: 'Documentação do sistema Dotfin para pagamentos',
    category: 'financeiros',
    subcategory: 'Dotfin',
    type: 'markdown',
    path: '/docs/ativos-financeiros/dotfin-orquestrador',
    updatedAt: '2024-01-12',
    tags: ['financeiro', 'dotfin', 'pagamentos']
  },
  {
    id: '5',
    title: 'Conciliação de GGR e Repasse',
    description: 'Processos de conciliação financeira e repasse',
    category: 'financeiros',
    subcategory: 'Conciliação',
    type: 'markdown',
    path: '/docs/ativos-financeiros/conciliacao-ggr',
    updatedAt: '2024-01-14',
    tags: ['financeiro', 'conciliacao', 'ggr']
  },
  
  // Ativos Humanos
  {
    id: '6',
    title: 'Squad de Tecnologia',
    description: 'Estrutura e responsabilidades da equipe de TI',
    category: 'humanos',
    subcategory: 'Squad de Tecnologia',
    type: 'markdown',
    path: '/docs/ativos-humanos/squad-tecnologia',
    updatedAt: '2024-01-08',
    tags: ['humanos', 'tecnologia', 'equipe']
  },
  {
    id: '7',
    title: 'Apresentadoras e Estúdio',
    description: 'Estrutura de apresentadoras e gestão de estúdio',
    category: 'humanos',
    subcategory: 'Apresentadoras',
    type: 'markdown',
    path: '/docs/ativos-humanos/apresentadoras-estudio',
    updatedAt: '2024-01-09',
    tags: ['humanos', 'apresentadoras', 'estudio']
  },
  
  // Ativos Operacionais
  {
    id: '8',
    title: 'Estúdios de Gravação',
    description: 'Infraestrutura e equipamentos dos estúdios',
    category: 'operacionais',
    subcategory: 'Estúdios',
    type: 'markdown',
    path: '/docs/ativos-operacionais/estudios-gravacao',
    updatedAt: '2024-01-11',
    tags: ['operacional', 'estudios', 'gravacao']
  },
  {
    id: '9',
    title: 'Procedimentos de Sorteio',
    description: 'Protocolos e procedimentos para sorteios ao vivo',
    category: 'operacionais',
    subcategory: 'Procedimentos',
    type: 'markdown',
    path: '/docs/ativos-operacionais/procedimentos-sorteio',
    updatedAt: '2024-01-13',
    tags: ['operacional', 'sorteio', 'procedimentos']
  },
  
  // Ativos Regulatórios
  {
    id: '10',
    title: 'Certificações GLI',
    description: 'Certificações de compliance e auditoria GLI',
    category: 'regulatorios',
    subcategory: 'Certificações',
    type: 'markdown',
    path: '/docs/ativos-regulatorios/certificacoes-gli',
    updatedAt: '2024-01-07',
    tags: ['regulatorio', 'gli', 'certificacoes']
  },
  {
    id: '11',
    title: 'Política de Jogo Responsável',
    description: 'Políticas e procedimentos de jogo responsável',
    category: 'regulatorios',
    subcategory: 'Jogo Responsável',
    type: 'markdown',
    path: '/docs/ativos-regulatorios/jogo-responsavel',
    updatedAt: '2024-01-16',
    tags: ['regulatorio', 'jogo', 'responsavel']
  },
  
  // Ativos Tecnológicos
  {
    id: '12',
    title: 'Plataforma Vertical Loto',
    description: 'Arquitetura e funcionalidades da plataforma principal',
    category: 'tecnologicos',
    subcategory: 'Plataforma',
    type: 'markdown',
    path: '/docs/ativos-tecnologicos/plataforma-vertical-loto',
    updatedAt: '2024-01-06',
    tags: ['tecnologico', 'plataforma', 'vertical']
  },
  {
    id: '13',
    title: 'Ambiente AWS',
    description: 'Infraestrutura em nuvem e configurações AWS',
    category: 'tecnologicos',
    subcategory: 'Infraestrutura',
    type: 'markdown',
    path: '/docs/ativos-tecnologicos/ambiente-aws',
    updatedAt: '2024-01-17',
    tags: ['tecnologico', 'aws', 'infraestrutura']
  },
  
  // Mapeamento de Processos
  {
    id: '14',
    title: 'Modelo Ágil Kanban',
    description: 'Fluxograma do processo operacional Kanban',
    category: 'processos',
    subcategory: 'Processos Operacionais',
    type: 'image',
    path: '/docs/processos/modelo-agil-kanban',
    updatedAt: '2024-01-05',
    tags: ['processos', 'kanban', 'agil']
  },
  {
    id: '15',
    title: 'Processos Departamentais',
    description: 'Mapeamento de processos por departamento',
    category: 'processos',
    subcategory: 'Processos Departamentais',
    type: 'markdown',
    path: '/docs/processos/processos-departamentais',
    updatedAt: '2024-01-18',
    tags: ['processos', 'departamentos', 'mapeamento']
  }
]
