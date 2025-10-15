import { useState, useEffect } from 'react'

interface SearchBarProps {
    placeholder?: string
    onQuery: (query: string) => void
}

export default function SearchBar({ placeholder = 'Buscar', onQuery }: SearchBarProps) {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        onQuery(query)
        setQuery('')
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault
        if (e.key === 'Enter') handleSearch()
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query)
        }, 700)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [query, onQuery])

    return (
        <div className='search-container'>
            <input
                type='text'
                value={query}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
