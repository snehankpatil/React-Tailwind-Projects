
import { useSelector,useDispatch } from "react-redux";
import { add } from "../redux/slices/CartSlice";
import { remove } from "../redux/slices/CartSlice";
import { useState } from "react";

function HomeCard(props){
    const {title,price,description,image} = props.post; 
    // console.log("inside the home",props.post);
    let list = useSelector( (store)=>(store.cart.list) ); 
 
    const x = props.post;
    const dispatch = useDispatch(); 

    const [isAdded,setIsAdded] = useState(false);

    function clickHandler(){
        if(isAdded){ 
            dispatch(remove(props.post.id))
        }
        else{
            dispatch(add(props.post));
        }
        setIsAdded(!isAdded);
    }

    return (
        <div className="flex flex-col  pb-12  shadow-md border border-x-gray-300 rounded-lg p-5 justify-between h-[23rem] 
            lg:w-[17rem] md:max-w-[21rem] max-w-[25rem] *
            h hover:scale-105 duration-500
            "   > 

            <h2 className=" text-green-700 text-xl font-semibold text-center " >
                {title.slice(0,15) }...
                
            </h2>

            <p className=" text-neutral-400 text-xs  text-center" >
                { description.slice(0,75)}
            </p>
            
            <img src= { image} className="h h-[10rem] object-contain" />

            <div className="flex flex-row justify-between items-center " >
                <p className=" text-green-700 text-xl font-semibold" >
                    ${price}
                </p> 
                <button onClick={ clickHandler }
                    className=" text-xs px-2 py-1 font-bold border-2 border-gray-800 rounded-xl hover:bg-slate-800 hover:text-gray-100 transition duration-00"
                >
                    {isAdded? <span>Remove Item</span>:<span>ADD TO CART</span>}
                    
                </button>



            </div>

        </div>
    )
}

export default HomeCard;
 