

// id	:	WD101
// title	:	Web Development Fundamentals
// description	:	This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.
// 	image		{2}
// url	:	https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png
// alt	:	Web Development Fundamentals

import React from 'react';
import { FcLike } from 'react-icons/fc'; // Material Design 
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';



function Card(props){
    const id = props.item.id;



    function clickHandler(event){  
        
        if(props.liked.includes(props.item)){
            let listDummy = props.liked.filter( (itemDummy)=>{
                if(itemDummy!==props.item){
                    return itemDummy;
                }
            })   
            event.target.style.opacity=0.5;
            toast.warning("You are moving to war") ;
            props.setLiked(listDummy); 

        }
        else{
            event.target.style.opacity=1;
            props.liked.push(props.item);
            toast.success("You are moving to peace");
            props.setLiked(props.liked);
        }
        
    }
    return (
        <div className='  w-[300px]  bg-slate-600 rounded-md overflow-hidden relative min-h-[400px]  ' >
            <div className='relative' >
                <img src= {props.item.image.url} alt={props.item.image.alt}/>
                <button  className='w-[30px] h-[30px] bg-white rounded-full absolute right-3  bottom-[-10px] grid place-items-center  ' 
                    onClick={clickHandler}
                >
                    <FcLike className=' scale-125 opacity-50' />
                </button>
            </div>
            
            <p className='text-white font-bold  my-2  mx-1' >{props.item.title}</p>
            <p className='text-white mx-1 '  >{props.item.description}</p> 
        </div>
    );
}

export default Card;