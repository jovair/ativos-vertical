'use client'

import { TabType } from '@/types'

interface TabNavigationProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const tabs = [
  { id: 'ativos', label: 'Ativos', description: 'Todos os ativos da empresa organizados por categoria', icon: '💼' },
  { id: 'descricao-tecnica', label: 'Descrição Técnica', description: 'Documentação técnica dos sistemas e plataformas', icon: '📋' },
  { id: 'mapeamento', label: 'Mapeamento de Processos', description: 'Fluxogramas e diagramas de processos organizacionais', icon: '🔄' },
  { id: 'outros', label: 'Outros', description: 'Conteúdo adicional e documentação complementar', icon: '📚' }
] as const

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="mb-8">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-3 px-4 border-b-2 font-medium text-sm transition-all duration-200 whitespace-nowrap flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-primary text-blue-600 bg-primary/5'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      {/* Active Tab Description */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">
            {tabs.find(tab => tab.id === activeTab)?.icon}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h3>
            <p className="text-gray-600">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
