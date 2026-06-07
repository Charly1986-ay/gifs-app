import { PreviousSearches } from "./gifs/Components/PreviousSearches";
//import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { GifList } from "./shared/components/GifList";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    return(
        <>
            {/* Header */}            
            <CustomHeader title="Buscador Gifs" description="Descubre y comparte el Gif perfecto." />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" />

            {/* Busquedas previas */}
            <PreviousSearches />

            {/* Busquedas previas */}
            <GifList />
        </>
    );
}