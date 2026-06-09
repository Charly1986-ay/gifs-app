import { useState } from "react";
import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";

import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previuosTerms, setPreviuosTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term })
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
    }

    return(
        <>
            {/* Header */}            
            <CustomHeader title="Buscador Gifs" description="Descubre y comparte el Gif perfecto." />

            {/* Search */}
            <SearchBar 
                placeholder="Busca lo que quieras" 
               //handleSearch={ (query: string) => handleSearch(query) }
               onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviousSearches searches={previuosTerms} onLabelClicked={handleTermClicked} />

            {/* GIFS */}
            <GifList gifs={gifs} />
        </>
    );
}