import React  from "react";
import {useState} from 'react';
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
 


 

export default function Tag(){
 
// const[gif,setGif] = useState('');
// const[loading,setLoading] =useState('false');
const[tag,setTag] =useState('car')
 

// async function fetchData(){
//     setLoading(true)
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(url); 
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false)
// }

 

// useEffect(()=>{
//     fetchData();
// },[])

const {gif,loading,fetchData} = useGif(tag);

function clickHandler(){
 fetchData();
}

function changeHandler(event){
setTag(event.target.value)
 
}

    return(
    <div className="w-1/2   bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
          <h1 className=" mt-[15px] text-2xl underline uppercase font-bold" >A Random {tag} Gif </h1>

   {
    loading ? (<Spinner/>) : ( <img src={gif}  alt='loading...' width="450"/>)
   }

          
<input
className="w-10/12 py-2 rounded-lg uppercase text-lg mb-[3px] text-center"
onChange={changeHandler}
value={tag}


/>

          <button onClickCapture={() => fetchData(tag)} 
          className="w-10/12 bg-yellow-400 py-2 rounded-lg uppercase text-lg mb-[20px]"
          onClick={clickHandler} >
           Generate
          </button>



    </div>



    );

}