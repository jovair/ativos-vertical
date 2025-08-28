'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FileText, Settings, Code, Zap } from 'lucide-react'
import { categories } from '@/data/categories'

interface CategoryProps {
  category: {
    name: string
    subcategories: string[]
  }
  isExpanded: boolean
  onToggle: () => void
}

function Category({ category, isExpanded, onToggle }: CategoryProps) {
  return (
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="flex items-center w-full text-left p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group"
      >
                    <Folder className="h-4 w-4 mr-2 text-gray-500 group-hover:text-primary" />
        <span className="flex-1 text-sm font-medium">{category.name}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-gray-400" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="ml-6 space-y-1">
          {category.subcategories.map((subcategory, index) => (
            <button
              key={index}
              className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">{subcategory}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Ativos Comerciais']))
  const [expandedDescricaoTecnica, setExpandedDescricaoTecnica] = useState(true)
  const [expandedMapeamento, setExpandedMapeamento] = useState(true)

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName)
    } else {
      newExpanded.add(categoryName)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <aside className="w-80 bg-gray-50 border-r border-gray-200 min-h-screen overflow-y-auto">
      {/* Ativos Section */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
          <Settings className="h-4 w-4 mr-2 text-gray-500" />
          Ativos
        </h3>
        <div className="space-y-1">
          {categories.map((category) => (
            <Category
              key={category.name}
              category={category}
              isExpanded={expandedCategories.has(category.name)}
              onToggle={() => toggleCategory(category.name)}
            />
          ))}
        </div>
      </div>

      {/* Descrição Técnica Section */}
      <div className="p-6 border-b border-gray-200">
        <button
          onClick={() => setExpandedDescricaoTecnica(!expandedDescricaoTecnica)}
          className="flex items-center w-full text-left mb-4 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors group"
        >
          <Code className="h-4 w-4 mr-2 text-gray-500 group-hover:text-primary" />
          <span className="flex-1">Descrição Técnica</span>
          {expandedDescricaoTecnica ? (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
        </button>
        
        {expandedDescricaoTecnica && (
          <div className="space-y-1">
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Plataforma Vertical Loto</span>
            </button>
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Ambiente AWS</span>
            </button>
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Squad de Tecnologia</span>
            </button>
          </div>
        )}
      </div>

      {/* Mapeamento de Processos Section */}
      <div className="p-6 border-b border-gray-200">
        <button
          onClick={() => setExpandedMapeamento(!expandedMapeamento)}
          className="flex items-center w-full text-left mb-4 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors group"
        >
          <Zap className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
          <span className="flex-1">Mapeamento de Processos</span>
          {expandedMapeamento ? (
            <ChevronDown className="h-4 w-4 text-gray-400" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
        </button>
        
        {expandedMapeamento && (
          <div className="space-y-1">
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Modelo Ágil Kanban</span>
            </button>
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Processos Departamentais</span>
            </button>
            <button className="flex items-center w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group">
              <FileText className="h-4 w-4 mr-2 text-gray-400 group-hover:text-primary" />
              <span className="flex-1">Procedimentos de Sorteio</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200 mt-auto">
        <div className="text-xs text-gray-500 text-center">
          <p>Vertical Loto Docs</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>
    </aside>
  )
}
