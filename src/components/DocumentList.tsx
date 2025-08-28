'use client'

import { useState, useEffect } from 'react'
import { FileText, Image, File, ExternalLink, Calendar, Tag } from 'lucide-react'
import { TabType } from '@/types'
import { documents } from '@/data/documents'

interface DocumentListProps {
  activeTab: TabType
  searchQuery?: string
}

export default function DocumentList({ activeTab, searchQuery = '' }: DocumentListProps) {
  const [filteredDocuments, setFilteredDocuments] = useState(documents)

  useEffect(() => {
    // Filtrar documentos baseado na aba ativa e busca
    let filtered = documents.filter(doc => {
      // Primeiro filtra por categoria
      let categoryMatch = false
      switch (activeTab) {
        case 'ativos':
          // Para a aba "Ativos", incluir todos os documentos de ativos
          categoryMatch = doc.category === 'comerciais' || 
                        doc.category === 'financeiros' || 
                        doc.category === 'humanos' || 
                        doc.category === 'operacionais' || 
                        doc.category === 'regulatorios' || 
                        doc.category === 'tecnologicos'
          break
        case 'descricao-tecnica':
          // Para "Descrição Técnica", incluir documentos técnicos
          categoryMatch = doc.category === 'tecnologicos' || 
                        doc.subcategory.toLowerCase().includes('técnico') ||
                        doc.subcategory.toLowerCase().includes('sistema') ||
                        doc.subcategory.toLowerCase().includes('plataforma')
          break
        case 'mapeamento':
          // Para "Mapeamento de Processos", incluir documentos de processos
          categoryMatch = doc.category === 'processos' || 
                        doc.subcategory.toLowerCase().includes('processo') ||
                        doc.subcategory.toLowerCase().includes('fluxo')
          break
        case 'outros':
          // Para "Outros", incluir documentos que não se encaixam nas outras categorias
          categoryMatch = !(doc.category === 'comerciais' || 
                           doc.category === 'financeiros' || 
                           doc.category === 'humanos' || 
                           doc.category === 'operacionais' || 
                           doc.category === 'regulatorios' || 
                           doc.category === 'tecnologicos' ||
                           doc.category === 'processos')
          break
        default:
          categoryMatch = true
      }

      // Se não há busca, retorna apenas o filtro de categoria
      if (!searchQuery.trim()) {
        return categoryMatch
      }

      // Se há busca, verifica se o documento corresponde à busca
      const searchLower = searchQuery.toLowerCase()
      const titleMatch = doc.title.toLowerCase().includes(searchLower)
      const descriptionMatch = doc.description.toLowerCase().includes(searchLower)
      const tagsMatch = doc.tags.some(tag => tag.toLowerCase().includes(searchLower))
      const subcategoryMatch = doc.subcategory.toLowerCase().includes(searchLower)

      return categoryMatch && (titleMatch || descriptionMatch || tagsMatch || subcategoryMatch)
    })
    
    setFilteredDocuments(filtered)
  }, [activeTab, searchQuery])

  const getIcon = (type: string) => {
    switch (type) {
      case 'markdown':
        return <FileText className="h-5 w-5 text-blue-600" />
      case 'image':
        return <Image className="h-5 w-5 text-green-600" />
      default:
        return <File className="h-5 w-5 text-gray-600" />
    }
  }

  const handleDocumentClick = (doc: any) => {
    // TODO: Implementar visualizador de documento
    console.log('Abrir documento:', doc.title)
  }

  const getCategoryDisplayName = (tab: TabType) => {
    switch (tab) {
      case 'ativos':
        return 'Ativos'
      case 'descricao-tecnica':
        return 'Descrição Técnica'
      case 'mapeamento':
        return 'Mapeamento de Processos'
      case 'outros':
        return 'Outros'
      default:
        return 'Documentos'
    }
  }

  if (filteredDocuments.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-6">
          <FileText className="h-20 w-20 mx-auto" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">
          {searchQuery.trim() ? 'Nenhum resultado encontrado' : 'Nenhum documento encontrado'}
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          {searchQuery.trim() 
            ? `Não foram encontrados documentos para "${searchQuery}" nesta categoria.`
            : 'Não há documentos disponíveis para esta categoria no momento.'
          }
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Documentos encontrados
          </h3>
          <p className="text-sm text-gray-600">
            {filteredDocuments.length} documento{filteredDocuments.length !== 1 ? 's' : ''} 
            {searchQuery.trim() && ` para "${searchQuery}"`}
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Mostrando resultados da categoria: <span className="font-medium text-gray-700">
            {getCategoryDisplayName(activeTab)}
          </span>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <div 
            key={doc.id} 
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer group"
            onClick={() => handleDocumentClick(doc)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {getIcon(doc.type)}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {doc.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {doc.description}
                </p>
                
                <div className="space-y-3">
                  {/* Category Badge */}
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {doc.subcategory}
                    </span>
                  </div>
                  
                  {/* Date and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{doc.updatedAt}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-400 group-hover:text-primary transition-colors">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Abrir
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
