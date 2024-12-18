
import { useContext } from 'react'
import Movie from '../components/Movie'
import { AppContext } from '../Context/AppContext'
import Pagi from '../components/Pagi'


function Tag(){
    const {ind,post} =useContext(AppContext)
    
    return(
        <div className='flex flex-col justify-center items-center '>
            <div className='flex'>
           
            {
                ind?(
                <div className='flex justify-center  gap-10 shadow-2xl flex-wrap items-center'>
                <div className='w-[200px] '>
                <img src={ind.Poster} className='aspect-square'></img>
                </div>
                <div className='flex items-start flex-col'>
                   <p>Title:{ind.Title}</p> 
                   <p>Actor:{ind.Actors}</p>
                   <p>Year:{ind.Year}</p>
                   <p>Award:{ind.Awards}</p>
                   <p>Country:{ind.Country}</p>
                   <p>Language:{ind.Language}</p>

                </div>
                </div>
            
            ):(<p>not found</p>)

}          
            </div>
            <Movie></Movie>
            
       
       </div>
    )
}

export default Tag