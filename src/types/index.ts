export type TabType = 'ativos' | 'descricao-tecnica' | 'mapeamento' | 'outros'

export interface Document {
  id: string
  title: string
  description: string
  category: string
  subcategory: string
  type: 'markdown' | 'image' | 'pdf'
  tags: string[]
  updatedAt: string
  url?: string
}

export interface Category {
  name: string
  subcategories: string[]
}
