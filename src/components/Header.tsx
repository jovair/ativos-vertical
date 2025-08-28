'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useSearch } from '@/contexts/SearchContext'
import Image from 'next/image'

export default function Header() {
  const [searchInput, setSearchInput] = useState('')
  const { user, logout } = useAuth()
  const { setSearchQuery } = useSearch()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      setSearchQuery(searchInput.trim())
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value)
    setSearchQuery(value)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <Image
              src="/logo-vertical-loto.svg"
              alt="Vertical Loto"
              width={104}
              height={104}
              className="w-26 h-26"
            />
          </div>
          
          <div className="flex-1 max-w-lg mx-12">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar na documentação..."
                className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                value={searchInput}
                onChange={handleSearchChange}
              />
            </form>
          </div>
          
          <div className="flex items-center">
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
