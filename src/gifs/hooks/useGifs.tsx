import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

//const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previuosTerms, setPreviuosTerms] = useState<string[]>([]);  
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
    }

    const handleSearch = async(query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previuosTerms.includes(query)) return;

        // Crea un nuevo array colocando query al principio 
        // y luego todos los elementos que ya estaban
        setPreviuosTerms([query, ...previuosTerms].slice(0, 7));

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);
        gifsCache.current[query] = gifs;
    }

    return {
        // properties
        gifs,

        // methods
        previuosTerms,
        handleTermClicked,        
        handleSearch,        
    }
}