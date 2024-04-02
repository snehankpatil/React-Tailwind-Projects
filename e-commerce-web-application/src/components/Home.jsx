
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import { setCategory } from "../redux/slices/CartSlice";

import { url } from "../data";
import Spinner from "./Spinner";
import Error from "./Error";   
import HomeCard from "./HomeCard";


function Home(){

    const [loading , setLoading] =useState(true);
    const [posts, setPosts] = useState([]);
    const [isSelected,setIsSelected] = useState(false);
    const [selectedCate,setSelectedCate] = useState("all");

    let dispatch = useDispatch();


    async function fetchData(){
        setLoading(true);
        let x = url;

        if(isSelected){
            x += `/category/${selectedCate}`;
        }
 
        try{
            console.log(x);
            const response = await fetch(x)
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        catch(error){

            setLoading(false)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])

    
    // const [isSelected,setIsSelected] = useState(false);
    // const [selectedCate,setSelectedCate] = useState("all");

    useEffect(()=>{
        fetchData();
    },[isSelected,selectedCate])

    function selectHandler(event) {
        let cate = event.target.value;
        console.log(cate);
        if(cate !== "all"){ 
            setIsSelected(true);
            setSelectedCate(cate); 
        }
        else{
            setIsSelected(false);
            setSelectedCate(cate); 
        }
    }

    return (
        <div className="my-12" >
            {loading === true ? (<Spinner/>) : 
            (
                    posts.length === 0 ? (<Error/> ):
                    (   
                        <div className=" w-10/12 mx-auto flex flex-col justify-center items-end space-y-5">
                        
                            <div>
                                <select onChange={selectHandler}>
                                    <option value="select list"  name ="categoty" >Select Category</option>
                                    <option value="electronics" name ="categoty" >Electronics</option> 
                                    <option value="jewelery" name ="categoty" >Jewelery</option>
                                    <option value="men's clothing" name ="categoty" >men's clothing</option>
                                    <option value="women's clothing" name ="categoty" >women's clothing</option>
                                    <option value="all" name ="categoty" >All</option>
                                </select>

                            </div>

                            <div className="flex flex-row flex-wrap gap-5 justify-center items-center" >
                                

                                {
                                    posts.map( (post) =>(<HomeCard post = {post} />))
                                }
                            
                            </div>

                        </div>
                         
                    )
                    
                    
            )}
            
        </div>
    )
}

export default Home;