
import { useEffect, useState } from "react";
import { filterData,apiUrl } from "../data"

function Filter(props){

   
    // 

    
    return (
        <div className=" bg-slate-400   flex flex-wrap   space-x-4 gap-y-4 mx-auto py-4 justify-center " > 
            {
                filterData.map( (data)=>{ 
                    return (<button onClick={props.btnClickHandler}
                        className={` text-lg px-2 py-1 rounded-md font-medium
                        text-white bg-black hover:bg-opacity-50 border-2
                        ${props.filterName === data.title ? ' text-fuchsia-900':'  text-white '}
                        `}
                       
                        >{data.title}</button>);
                })
            }
        </div>
    )
}

export default Filter;