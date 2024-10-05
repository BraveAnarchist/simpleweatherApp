import { useEffect, useState } from "react";

export default function Hero({cities,setCities}) {
  const [inp, setInp] = useState("");
  const [cities2,setCities2]=useState([])

  useEffect(()=>{
    setCities2(cities.filter((ele)=>{
      if(ele.flag)
        return 1;
    }))
    console.log(cities)
  },[cities])

  function handleDelete(name){
    setCities(cities.map((ele)=>{
      if(name == ele.name)
      {
        return {...ele,flag:false};
      }
      else
        return ele;
    }));
   
  }
  function handleHighlight(){

    setCities(cities.map((ele)=>{
      if(inp==ele.name){
        return {...ele,flag2:true};
      }
      else return ele;
    }))
    setTimeout(()=>{setCities(cities.map((ele)=>{
      if(name==ele.name){
        return {...ele,flag2:false};
      }
      else return ele;
    }))},3000)
  }
  return (
    <>
      <div className="w-[100%] mt-[1vh]">
        <div className="flex justify-end mr-[3vw]">
          <input
            type="text"
            onChange={(e) => {
              setInp(e.target.value);
            }}
            placeholder="City Name"
            className="border-2 p-[1vh]"
          />
          <button className="bg-[#4472c4] text-white p-[1vh] mt-[1vh] rounded-md" onClick={handleHighlight}>
            Search
          </button>
        </div>

        <table className=" text-white block mx-[3vw] mt-[1vh] border-2 border-[#8f8f8f]">
          <tr className=" white bg-[#4472c4] block">
            <th className="border-2 white w-[16.66%] inline-block max-[783px]:text-xs">City</th>
            <th className="border-2 white  w-[16.66%] inline-block max-[783px]:text-xs">Description</th>
            <th className="border-2 white  w-[16.66%] inline-block max-[783px]:text-xs">Temprature</th>
            <th className="border-2 white  w-[16.66%] inline-block max-[783px]:text-xs">Pressure</th>
            <th className="border-2 white  w-[16.66%] inline-block max-[783px]:text-xs">Data age(hrs)</th>
            <th className="border-2 white  w-[16.66%] inline-block max-[783px]:text-xs"><i className="fa-solid fa-trash"></i></th>
          </tr>

          {cities2.length>0?(cities2.map((ele,idx)=>{
            return(<tr className="text-black block" key={idx}>
              <td className="w-[16.66%] inline-block text-center" style={{...(ele.flag2 && {background:"yellow"})}}><p>{ele.name}</p></td>
              <td className="w-[16.66%] inline-block text-center" ><input style={{...(ele.flag2 && {background:"yellow"})}} type="text" defaultValue={ele.description} className="border-2 "/></td>
              <td className="w-[16.66%] inline-block text-center" style={{...(ele.flag2 && {background:"yellow"})}}><p>{ele.temp_in_celsius}</p></td>
              <td className="w-[16.66%] inline-block text-center" style={{...(ele.flag2 && {background:"yellow"})}}><p>{ele.pressure_in_hPa}</p></td>
              <td className="w-[16.66%] inline-block text-center" style={{...(ele.flag2 && {background:"yellow"})}}><p>{ele.date}</p></td>
              <td className="w-[16.66%] inline-block text-center" style={{...(ele.flag2 && {background:"yellow"})}}><button onClick={()=>{handleDelete(ele.name)}}><i className="fa-solid fa-trash"></i></button></td>
            </tr>)
          })):<div><p  className="text-center text-black text-2xl">No Data</p></div>}
        </table>
        
      </div>
    </>
  );
}
