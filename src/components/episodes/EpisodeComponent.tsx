import './Episodes.css'
import { IEpisodeProps } from './IEposodeProps'


const EpisodeComponent = (props: { episode: IEpisodeProps[]}) => {
    
    const { episode } = props;
    
    // groupping the episodes in seasons as an object
    let seasonGroup = episode.reduce((r: any, a: any) => {
        r[a.season] = [...r[a.season]|| [], a];
        return r;
    }, {})

    //length of Season (Object)
    let seasonLength = Object.keys(seasonGroup).length;
    
    
    // Object.keys(seasonGroup).forEach(key => console.log(key))

    return (
        <div className='episode-container'>
            { seasonLength > 0 ? Object.keys(seasonGroup).map(key => {
                return (
                <div>
                    <h2 className='season'>Season {key}</h2>
                    <div className='episode'>
                        {episode.map((e) => {
                            return (
                                <div className='img__wrap'>
                                    {e.season == Number(key) ? 
                                    <div>
                                        <a role='episode-url' href={e.url}>
                                            <img role='episode-img' className='img-img' src={(e.image==null) ?  
                                                `https://media.comicbook.com/files/img/default-movie.png` : 
                                                e.image.medium} />
                                        </a>
                                        <p  className='img-description'>
                                            <div role='episode-number'>episode {e.number}:  </div>
                                            <div role='episode-name' >{e.name}</div>
                                        </p>
                                    </div>
                                    : null}
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
                )}) :
                ('loading...')
            }
                       
        </div>
    );
};

export default EpisodeComponent;