import { useSelector } from "react-redux";
import { store } from "../redux/Store";
import { useEffect } from "react";

import CartCard from "./CartCard";
import CartCardMain from "./CartCardMain";
import GotoHome from "./GotoHome";

function Cart(){
    let list = useSelector( (store)=>(store.cart.list) ); 
    list = JSON.parse(JSON.stringify(list))
    
    console.log(list); 
    return (
        <div>

            {list.length === 0 ? <GotoHome/> : <CartCardMain/>}
            

        </div>
    )
}

export default Cart;