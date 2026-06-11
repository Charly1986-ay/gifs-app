import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";


export const GifsApp = () => {
    const { gifs, previuosTerms, handleSearch, handleTermClicked } = useGifs();

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