
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

function CartCardMain(){ 
    let list = useSelector( (store)=>(store.cart.list) ); 
    list = JSON.parse(JSON.stringify(list))
    
    console.log(list);
    let cost = 0;
      return (
        <div className=" lg:flex lg:flex-row md:flex md:flex-row  justify-around  py-1  text-white w-10/12 mx-auto z-0 gap-6 items-stretch" >

            <div className=" basis-4/6 " >
                {
                    list.map( (post)=>{
                        cost+=post.price;
                        return  <CartCard post={post}/>
                    })
                } 
            </div>
            
            <div className=" basis-2/6  mt-6 flex flex-col gap-3 justify-between p-7">
                
                <div className="" >
                    <div>
                        <h2 className="t text-green-900 text-xl font-bold">Your Cart</h2>
                        <h1 className="t text-green-700 text-4xl font-bold">SUMMARY</h1>
                    </div>
                    <div className="flex space-x-1 mt-3">
                        <p  className="t text-gray-900 text-xl font-semibold" >Total Items: </p>
                        <p className="t text-gray-900 text-xl font-bold">{list.length} </p> 
                    </div>
                </div>
                <div>
                    <div  className="flex space-x-1">
                        <p className="t  text-xl text-black font-semibold">Total Cost: </p>
                        <p className="t text-black text-xl font-bold">${cost} </p>
                    </div>

                    <button className=" bg-green-700 text-2xl font-bold text-white px-5 py-1 rounded-md mt-5" >
                        Checkout Now
                    </button>

                </div>

                
                
                


            </div>

        </div>
    )
}

export default CartCardMain;



            
           
             