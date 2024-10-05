import axios from "axios";
import { useState ,useRef} from "react"



export default function Aside({cities,setCities}){

    
    const count = useRef(0);

    async function handleGetWeather(){
        if(count.current<cities.length)
        {   let weather=await axios.get("https://python3-dot-parul-arena-2.appspot.com/test?cityname="+cities[count.current].name);
            
            let dupli=[...cities]
            weather.data.date=((new Date()- new Date(weather.data.date_and_time))/60).toFixed(2)
            Object.assign(dupli[count.current],weather.data);

            dupli[count.current].flag=true;
            setCities(dupli);
            count.current = count.current + 1;
        }
    }

    return(
        <>
        <div className="w-[15%] border-r-4 border-black flex items-center flex-col ">
            <button className="bg-[#4472c4] text-[white] p-[1vh] mt-[1vh] rounded-md w-[80%] hover-bg-[#4472c4] max-[661px]:text-sm" onClick={handleGetWeather}>Get Weather</button>
            <div className=" w-[80%]">
                <p className="bg-[#4472c4] mt-[2vh] text-white px-[1vh]" >City</p>
                {cities.map((ele,idx)=>{
                    return(<p className={`border-2 ${ele.flag ? "border-[#7cfc00]" : "border-black"} `} key={idx}>
                        {ele.name}
                    </p>)
                })}
            </div>
        </div>
        </>
    )
}