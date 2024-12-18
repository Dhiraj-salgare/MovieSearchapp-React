import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Movie from "../components/Movie"
import Pagi from "../components/Pagi";


function Home(){
    const location=useLocation()
    return(
        <div>
            <Header></Header>

           
            <div className="w-11/12 mx-auto  flex justify-center items-center h-full my-10">
            <Movie></Movie>
            </div>
            <Pagi></Pagi>
            {
                console.log(location.pathname)
            }
        </div>
    )
}

export default Home