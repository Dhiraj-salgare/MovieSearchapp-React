import { createContext,useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


export const AppContext=createContext()



export default function AppContextProvider({children}){
    const [loading,setLoading] =useState(false)
    const [post,setpost]=useState([])
    const [page,setpage]=useState()
    const navigation =useNavigate()
    const [input,setinput]=useState('dil')
    const [ind,setind]=useState({})



    async function fetchpost(input,page){
       
    
        setLoading(true)
        let url=`https://www.omdbapi.com/?apikey=d5422fae&s=${input}&page=${page}`
 
        

        try{
            const result=await fetch(url)
            const data=await result.json();
            console.log(data)
            console.log(data.Search)
            setpost(data.Search)
            setpage(page)
            
            

        }
        catch(eroor){
            console.log("error in fetching data")
        }

        setLoading(false)


    }


    async function fetchrelated(Id){
        setLoading(true)

            let newurl=`https://www.omdbapi.com/?apikey=d5422fae&i=${Id}`
            try{
                const newresult=await fetch(newurl)
                const newdata=await newresult.json();
                console.log(newdata)
               
                setind(newdata);
               
                
                
    
            }
            catch(eroor){
                console.log("error in fetching data")
            }
    
            setLoading(false)



            
            }


            function handlepage(page){
                navigation({search:`&page=${page}`})
                setpage(page)

          
               }


        async function searched(input,page){
            setLoading(true)
            let url=`https://www.omdbapi.com/?apikey=d5422fae&s=${input}&page=${page}`
            navigation({search:`&page=${page}`})
            setpage(page)
     
            
    
            try{
                const result=await fetch(url)
                const data=await result.json();
                console.log(data)
                console.log(data.Search)
                setpost(data.Search)
                setpage(page)
                
                
    
            }
            catch(eroor){
                console.log("error in fetching data")
            }
    
            setLoading(false)


        }


    const value={post,setpost,loading,setLoading,page,setpage,fetchpost,input,setinput,fetchrelated,ind,setind,handlepage,searched};

    return <AppContext.Provider value={value}>
        {children}

    </AppContext.Provider>

}