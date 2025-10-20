import axios from 'axios'
import type { GiphyResponse } from '../interfaces/giphy.response'
import type { Gif } from '../interfaces/gif.interfce'
import { giphyApi } from './api/giphyApi'

export const getGiftsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10,
        },
    })

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }))
    // fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=1FuBvkNv14fhDFFpfUhZzJPFbKUjpqlD&q=${query}&limit=10&rating=g&lang=en&bundle=messaging_non_clips`,
    // )
}
