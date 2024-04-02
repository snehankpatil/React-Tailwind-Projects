

import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setLogIn } from "../redux/slices/CartSlice";
import { setOnLogin } from "../redux/slices/CartSlice";
import { useEffect } from "react";

function Navbar(){
    let list = useSelector( (store)=>(store.cart.list) );
    let loggedIn = useSelector((store)=>(store.cart.loggedIn));
    let onLogin = useSelector((store)=>(store.cart.onLogin));
    

    let dispatch = useDispatch();

    list = JSON.parse(JSON.stringify(list))
    let size = list.length;

    const navi = useNavigate();

    function toHome(){
        dispatch(setOnLogin(false));
    }

    // useEffect(()=>
    //     {
    //         navi('/');
    //     }, [onLogin,loggedIn])

    function logOutHandler(){
        dispatch(setLogIn()); 
        dispatch(setOnLogin(true));
       navi('/login')
    }

    function logInHandler(){
        navi('/login');
        dispatch(setOnLogin(true));
    }

    const logo = 'https://www.pngkey.com/png/detail/251-2510486_logo-ecom-e-commerce-logo.png'
    return (
        <div className="flex flex-row justify-around items-center py-1 bg-cyan-600 text-white z-50" >
            <NavLink to="/" >

                <img src={logo} alt='this is symbol'
                    className="h h-[4rem]"
                />
            </NavLink>

            <div  className="flex flex-row gap-x-5 items-center " >  
                

                <NavLink to="/cart" className={`${loggedIn?'flex':'hidden'}`} >
                    <BsCart4 className=" scale-150" /> 
                    <div className="relative left-[0] bottom-3 ">
                        <p className= {`${size >0 ? 'inline' : 'hidden'} bg-amber-400 rounded-full text-xs
                         text-teal-900 font-semibold px-[5px] py-[2px] `} > {size}  </p>
                    </div>
                </NavLink>

                <NavLink to="/" className="px-1 py-1  rounded-lg font-semibold border-2 border-blue-50">
                    <p className=" text-lg font-semibold" onClick={toHome} >Home</p>
                </NavLink>

                <NavLink to="/login" className={`${loggedIn?' flex':'hidden'} " text-lg  px-1 py-1  rounded-lg font-semibold border-2 border-blue-50" `} 
                onClick={logOutHandler} >
                        LogOut
                </NavLink>

                {/* <NavLink to="/login" className={`${loggedIn?'hidden':({onLogin === 500 ?'hidden':'inline'})} "text-lg  px-1 py-1  rounded-lg font-semibold border-2 border-blue-50" `} onClick={logInHandler} >
                        LogIn
                </NavLink> */}

                <p 
                    
                    className={`${
                        loggedIn || onLogin === true ? 'hidden' : 'inline'
                    } text-lg px-1 py-1 rounded-lg font-semibold border-2 border-blue-50`} 
                    onClick={logInHandler}>
                        LogIn
                </p>


                
            </div>
        </div>
    )
}

export default Navbar;