'use client'

import { useState } from 'react'
import TabNavigation from '@/components/TabNavigation'
import DocumentList from '@/components/DocumentList'
import { TabType } from '@/types'
import { useSearch } from '@/contexts/SearchContext'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('ativos')
  const { searchQuery } = useSearch()

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Documentação Vertical Loto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acesse toda a documentação técnica, ativos e processos da Vertical Loto organizados por categoria. 
            Encontre rapidamente o que você precisa para trabalhar com nossos sistemas.
          </p>
        </div>
      </div>

      {/* Documentation Navigation */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Navegar por Categoria</h2>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Document List */}
      <DocumentList activeTab={activeTab} searchQuery={searchQuery} />
    </div>
  )
}
