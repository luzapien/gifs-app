import { useEffect, useState } from 'react'
import GifList from '../src/gifs/components/GifList'
import PreviousSearches from './gifs/components/PreviousSearches'
import { CustomHeader } from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import { getGiftsByQuery } from './gifs/actions/get-gits-by-query-actions'
import type { Gif } from './gifs/interfaces/gif.interfce'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [currentGifs, setCurrentGifs] = useState<Gif[]>([])

    const handleTermClicked = async (term: string) => {
        console.log(term)
        const gifs = await getGiftsByQuery(term)
        setCurrentGifs(gifs)
        // setPreviousTerms([...previousTerms, term])
    }

    const handleSearch = async (query: string) => {
        query = query.trim().toLocaleLowerCase()
        if (query.length === 0) return
        if (previousTerms.includes(query)) return
        const newTerms = previousTerms.slice(0, 7)
        newTerms.unshift(query)
        setPreviousTerms(newTerms)
        const gifs = await getGiftsByQuery(query)
        setCurrentGifs(gifs)
        console.log(gifs)
    }
    useEffect(() => {}, [])
    return (
        <>
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/*Search*/}
            <SearchBar placeholder='Buscar gifs' onQuery={handleSearch} />

            {/* previous searchers */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={currentGifs} />
        </>
    )
}
