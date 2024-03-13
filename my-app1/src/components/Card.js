
import React, { useState } from 'react';

function Card(props){
    const link = props.tour.image;
    const desc = props.tour.info;
    const preDesc = desc.substring(0,200);
    const [readMore,setReadMore] = useState(true);

    function readMoreHandler(){
        setReadMore(!readMore);
    }

   

    let desc1;
    return (
        // <div className='card'  >
            <div className='info'>
                <img src={link} className="image"></img>
                <div className="tourDetail" >
                    <h4 className='tour-price' >{props.tour.price}</h4>
                    <h4 className='tour-name'>{props.tour.name}</h4> 
                </div> 
                <div className="description" >
                    {/* <p> */}
                        {desc1 = readMore?preDesc: desc}
                        {desc1}....
                    {/* </p> */}
                    <span onClick={readMoreHandler} className='toggle-text' >
                        {readMore?`Read More`: `Show less`}
                    </span>
                </div>
  
                <div className='btn-red' onClick={ () => props.removeTour(props.tour.id) } >
                    Not Interested
                </div> 
                

            </div>

            
        // {/* // </div> */}
    );
}

export default Card;