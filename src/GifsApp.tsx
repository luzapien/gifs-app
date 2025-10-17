import { useState } from 'react'
import GifList from './gifs/GifList'
import PreviousSearches from './gifs/PreviousSearches'
import { mockGifs, searches } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['goku', 'nana'])

    const handleTermClicked = (term: string) => {
        console.log(term)
        // setPreviousTerms([...previousTerms, term])
    }

    const handleSearch = (query: string) => {
        query = query.trim().toLocaleLowerCase()
        if (query.length === 0) return
        if (previousTerms.includes(query)) return
        const currentTerms = previousTerms.slice(0, 6)
        currentTerms.unshift(query)
        setPreviousTerms(currentTerms)
    }
    return (
        <>
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/*Search*/}
            <SearchBar placeholder='Buscar gifs' onQuery={handleSearch} />

            {/* previous searchers */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
