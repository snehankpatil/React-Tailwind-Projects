
// import {apiUrl } from "../data" 
// import { useEffect, useState } from 'react';
import Card from "./Card";
import { useEffect, useState } from "react";


function Cards(props){ 
    

    const [liked,setLiked] = useState([]);

    let allCourses =[] ;  
    const [list,setList] = useState([]);


    useEffect( ()=>{
        function getCorses(){ 
            
            Object.entries(props.courses).forEach( (category) =>{

               
                     
                if( props.filterName === "All" ){ 
                    category[1].forEach( (course) =>{ 
                        allCourses.push(course);
                    } )
                }
                else{
                    if(props.filterName === category[0]){
                         
                        category[1].forEach( (course) =>{
                            allCourses.push(course);
                        } )
                    }
    
                }
                
            } )
            setList(allCourses);
            // return ;
        }
        getCorses(); 
        console.log(list);
    },[props.filterName]);
    

    return ( 
        <div className="  bg-slate-400  " >
            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-baseline space-x-3 space-y-3 " >
                { 
                    list.map((item)=>{
                        return <Card item = {item} filterName={props.filterName} setLiked={setLiked} liked={liked}>  </Card>
                    })
                }
            </div>

        </div>
    )
}

export default Cards;