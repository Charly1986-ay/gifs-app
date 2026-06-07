import { mockGifs } from "../../mock-data/gifs.mock";

interface Props {
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

export const GifList = () => {
    return (
        <div className="gifs-container">
            {
                mockGifs.map(({ id, title, url, width, height }: Props) => (
                    <div key={id} className="gif-card" >
                        <img src={url} alt={title} />
                        <h3>{title}</h3>
                        <p>
                            {width}x{height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    );
};