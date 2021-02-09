import React, {useState} from 'react';
import BechdelContainer from './bechdelContainer';


export default function SearchMovies() {
    
    const [query, setQuery] = useState('');

    const [moviesBechdel, setMoviesBechdel] = useState([]);


    const searchMoviesBechdel = async () => {

        const url = `https://gentle-atoll-20187.herokuapp.com/http://bechdeltest.com/api/v1/getMoviesByTitle?title=${query}`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMoviesBechdel(data);
        }catch(err){
            console.error(err);
        }
    };

    const searchMovies = (e) =>{
        e.preventDefault();
        searchMoviesBechdel();
    };

    return (
        <>
            <form className='form' onSubmit={searchMovies}>
                <label htmlFor='query' className='label'>Movie</label>
                <input className='input' type='text' placeholder='i.e. Mary Poppins' name='query' 
                value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className='button' type='submit'>Submit</button>
            </form>
            <div className="card-list">
                {moviesBechdel.map(movie =>
                   <BechdelContainer title={movie.title} rating={movie.rating} key={movie.id} />
                )}
            </div>
            <div className="card-list">
            </div>
        </>
    )
};
