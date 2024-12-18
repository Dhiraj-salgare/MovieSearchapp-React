import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import Card from './Card'
import Spinner from './Spinner'
import Pagi from "./Pagi"
function Movie(){

    const {post,loading} =useContext(AppContext)
    return(
        <div>
            {
               loading?(<div className="flex justify-center item-center h-full"><Spinner></Spinner></div>):(post?(post.length==0?(<div>no post found</div>):(<div className="flex flex-wrap gap-[30px] justify-center">{post.map((single)=>(<Card key={single.imdbID} single={single}></Card>))}</div>)):(<p>not found</p>))
            }
          
        </div>
    )
}
export default Movie