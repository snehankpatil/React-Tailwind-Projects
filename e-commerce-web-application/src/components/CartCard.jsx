
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartCard(props){
    const {title,price,description,image} = props.post; 
    const dispatch = useDispatch();
    return (

        <div className="lg:flex lg:flex-row space-x-9 p-5  text-black border-b-2 bottom-[-1rem] border-orange-400 relative gap-6  ">
             
            <div>
                <img src={image} alt="image is here"
                     className=" object-cover lg:w-[23rem] md:w-[18rem] w-[25rem]"
                />
            </div>

            <div className=" flex flex-col justify-around mr-4 " >
                <h2 className="t text-xl font-bold" >
                    {title}
                </h2>
                <p  className="text-[1.10rem] ">
                    {description.slice(0,150)}...
                </p>

                <div className="flex flex-row justify-between items-center" >
                    <p className="t text-xl font-bold text-emerald-700">
                        ${price}
                    </p>

                    <div onClick={()=>dispatch(remove(props.post.id))} 
                        className="t text-xl font-semibold p-1 border-2 border-amber-400 rounded-full hover:bg-red-300"
                    >
                        <MdDelete className="bg-[ #deb5b5] text-[#df3030]" />
                    </div>



                </div>
                
            </div>
            

            


        </div>
    )

}

export default CartCard;