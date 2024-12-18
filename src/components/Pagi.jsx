import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagi(){

    const{page,handlepage}=useContext(AppContext)
    return(
        <div className="flex justify-center w-11/12 mx-auto gap-2">

           {
              page>1 && <button onClick={()=>handlepage(page-1)} className="bg-sky-900 text-white px-2 py-1">prev</button>
           }
           {
               page<100 && <button onClick={()=>handlepage(page+1)} className="bg-sky-900 text-white px-2 py-1">next</button>
           }


        </div>
    )
}

export default Pagi;