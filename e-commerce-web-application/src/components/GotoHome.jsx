
import { useNavigate } from "react-router-dom";

function GotoHome(){
    const navigate = useNavigate();

    function GotoHomeHandler(){
        navigate('/');
    }

    return (
        <div className=" w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden space-y-3 " >
            
            <p className="  font-semibold text-xl ">Your Cart is Empty !</p>
            
            <button onClick={GotoHomeHandler}
                className=" text-white bg-emerald-700 hover:bg-emerald-800 text-lg px-2 py-1 rounded-lg font-semibold border-2 border-cyan-800"
            >
                Start Shopping
            </button>
        </div>
    )
}

export default GotoHome;