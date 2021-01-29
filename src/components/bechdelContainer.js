import React, { useEffect, useState} from 'react';

export default function BechdelContainer({title, rating}) {

    const [movieDb, setMovieDb] = useState([]);
    const [passed, setPassed] = useState(false);

    const searchMoviesDb = async () => {

        const api_key = process.env.REACT_APP_API_KEY;
        const urlTwo = encodeURI(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`);
        
        try {
            const res = await fetch(urlTwo);
            const data  = await res.json();
            console.log(data.results[0]);           
            setMovieDb(data.results[0]);
        }catch(err){
            console.error(err);
           
        }
    }

    const test = () => {
        if (rating === 3) {
            setPassed(true);
        } else {
            setPassed(false);
        }
    };

    useEffect( () => {
        test();
        searchMoviesDb();
    }, [title]);      

    return !!movieDb?
            <div className="card" >
            <h3 className="card-title">{movieDb.title}</h3>
            <div className="card-content">
                <div className='card-info'>
                    <div className='test'>
                        {
                        passed ? 
                        <p className='passed'>Passed</p> : 
                        <p className='failed'>Failed</p>
                        }
                    </div>
                    <p className="card--desc">{movieDb.overview}</p>
                </div>
                <img className="card-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieDb.poster_path}`}
                alt={movieDb.title + ' poster'}
                />
            </div>
            <p><small>Bechdel Rating: {rating}</small></p>
        </div> :
        null
};
