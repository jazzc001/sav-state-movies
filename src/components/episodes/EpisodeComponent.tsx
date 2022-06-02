import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IEpisodeProps } from './IEposodeProps'


const EpisodeComponent = (props: { episode: IEpisodeProps[]}) => {
    // const [ message, setMessage ] = useState('');
    // const { number } = useParams();

    // useEffect(() => {
    //     if (number) 
    //     {
    //         setMessage(`The number is ${number}`)
    //     }
    //     else {
    //         setMessage('No number was provided')
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
        <div>
            { seasonLength > 0 ? Object.keys(seasonGroup).map(key => {
                return (
                <div>
                    <h2>Season {key}</h2>
                    {episode.map((e) => {
                        return (
                            <div className="episodes">

                                {e.season == Number(key) ? <img src={e.image.medium} alt={e.name}/> : null}
                            </div>
                        )
                    })}
                    
                </div>
                )}) :
                ('loading...')
            }
                       
        </div>
    );
};

export default EpisodeComponent;