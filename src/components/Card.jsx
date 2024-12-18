import { NavLink } from "react-router-dom"



function Card({single}){
    return(

      <NavLink to={`/ID/${single.imdbID}`}>
        <div className=" hover:scale-110 transition  duration-300 ease-in  w-[200px] shadow-2xl px-2 py-1 h-[250px]">
          <div>

          <img src={single.Poster} className="aspect-square"></img>
          </div>
          <div className="text-sm">
            <p><b>Title:</b>{single.Title}</p>
            <p><b>release:</b>{single.Year}</p>
          </div>

        </div>
        </NavLink>
    )
}


export default Card