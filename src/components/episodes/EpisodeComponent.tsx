import './Episodes.css'
import { IEpisodeProps } from './IEposodeProps'


const EpisodeComponent = (props: { episode: IEpisodeProps[]}) => {
    // const [ epId, setEpid ] = useState('');
    // const { epId } = useParams();

    // useEffect(() => {
    //     if (epId) 
    //     {
    //         setEpid(`The epId is ${epId}`)
    //     }
    //     else {
    //         setEpid('No epId was provided')
    //     }
    // }, [])


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
                                        <a href={e.url}>
                                            <img className='img__img' src={(e.image==null) ?  
                                                `https://media.comicbook.com/files/img/default-movie.png` : 
                                                e.image.medium} />
                                        </a>
                                        <p className='img__description'>episode {e.number}: {e.name}</p>
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