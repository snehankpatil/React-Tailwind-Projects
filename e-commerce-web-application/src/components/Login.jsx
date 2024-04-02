
import { useDispatch } from "react-redux";
import { setLogIn } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { setOnLogin } from "../redux/slices/CartSlice";

import { FcGoogle } from "react-icons/fc"; 
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useEffect } from "react";

// import {cover_ecommerce} from '../assets/cover_ecommerce' ;
// import {  } from "";

function Login(){

    let dispatch = useDispatch(); 
    let navi = useNavigate();



    function loginHandler(){
        dispatch(setLogIn());
        dispatch(setOnLogin(false));
        navi('/');
    }

     

    return (
        // <div>
        //     <p>
        //     this is login pagw
        //     </p>

        //     <button onClick={loginHandler}>
        //         login Now
        //     </button>  
        // </div>
        <div className="flex flex-row  w-full justify-around bg-slate-300 items-center py-24 px-7">
        
            <div className=" bg-slate-900 md:basis-2/5  flex flex-col p-7" >
                    <h2 className="fles text-4xl text-white" >Welcome Back</h2>
                    <p className="fles text-xl text-gray-500"  >Build skills for today, tomorrow, and beyond.</p>
                    <p className="fles text-xl text-sky-600"  >Education to future-proof your career.</p>
                        
                    <form  
                    onSubmit={loginHandler}
                    >

                        <label>

                            <p className="fles text-md text-gray-100 pb-1 pt-4" >Email <span className="mx-1 text-red-600 inline" >*</span> </p>
                            <input type="email" placeholder="Ex. Xyz@xys.com" name="email" required 
                            className="  bg-slate-800 py-2 w-full " 
                            />

                        </label>

                        <br></br>

                        <label  className="relative">

                            <p  className="fles text-md text-gray-100 pb-1 pt-4"  >Password <span className="mx-1 text-red-600 inline" >*</span> </p>
                            <input 
                            // type={`${pass?'text':'password'}`}
                            placeholder="Enter your password"  
                            required
                            className="  bg-slate-800 py-2 w-full" 
                            />

                            <div className="absolute left-96 bottom-0 " >
                                <FaEye 
                                // className={`${pass?'hidden':''}`} 
                                // onClick={passwordHandler}
                                />
                                <IoMdEyeOff 
                                // className={`${pass?'':'hidden'}`} 
                                // onClick={passwordHandler}
                                />
                            </div>

                        </label>

                        <br></br>

                        <div className="flex w-full justify-end text-green-600" > 
                            <button> Forgot Password </button>
                        </div>

                        
                        <div className="flex w-full justify-end text-green-600" > 
                                <button type="submit" className="w-full bg-yellow-300 py-2 text-gray-700 font-semibold mt-1 rounded-md"  > Sign IN </button> 
                        </div>
                        
                        <br></br>

                    </form>

                        
                    <div className="flex flex-row items-center space-x-1" >
                        <div className="fles basis-6/12 w-full h-[1px] bg-slate-600" ></div>
                        <p className=" text-gray-600 ">OR</p>
                        <div className="fles basis-6/12 w-full h-[1px] bg-slate-600" ></div>
                    </div>

                    <button className="flex flex-row my-2 w-full border border-gray-100 py-2 rounded-md justify-center items-center space-x-1" >
                        <FcGoogle className="flex scale-100" />
                        <p className="font-semibold text-gray-300 text-sm" > Sign Up With Google </p>
                    </button>

            </div>

            <div className="m hidden md:block">
                <img src="https://msatechnosoft.in/images/e-commerce-website-and-payment-gateway-integration.png"
                    className="md:w-[20rem] lg:w-[25rem]"
                />

            </div>

        </div>
         
    
    )
}

export default Login;