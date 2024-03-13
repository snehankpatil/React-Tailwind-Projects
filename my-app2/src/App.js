import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';  
import Cards  from './components/Cards';
import Filter from './components/Filter'; 
import Spinner from './components/Spinner';

import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';

import {apiUrl } from "./data"
import { useEffect, useState } from 'react';

function App() {  
  const [courses,setCourses] = useState({}); 
  const [filterName,setFilterName] = useState("All"); 
  const [loading,setLoading] = useState(true); 

  const fetchData = async() =>{
    setLoading(true);
    try{
        const res = await fetch(apiUrl);
        const resJson =await res.json();

        setCourses(resJson.data); 
        console.log(resJson.data); 
    }
    catch(error){
        toast.error("something went wrong ");
    }

    setLoading(false);
  }

  useEffect(()=>{ 
      fetchData(); 
  },[]);

  function btnClickHandler(event){  
    toast.success("to fetch data form API"); 
    setFilterName(event.target.innerHTML);
  } 


  return (
    <div   >
      <Navbar  > </Navbar> 
      <Filter btnClickHandler= {btnClickHandler} filterName={filterName}  > </Filter> 
      {loading?(<Spinner></Spinner>):(<Cards filterName={filterName} courses={courses}> </Cards> )} 
    </div>
  ) 

}

export default App;

  // const [name,setName] = useState(""); 

  // useEffect is the props hook based on the UI rendering and change in the dependenceis 
  // at start of the app. the UI loading is obvoius

  // variation 1 
  // useEffect( () => {
  //   console.log("first type of the useEffect changing on each UI render")
  // } )
  
  // variation 2
  // useEffect(() =>{
  //   console.log("second type of the useEffect changing on first UI render only")
  // },[] )

  // variation 3
  // useEffect(()=>{
  //   console.log("third type of the useEffect get in effect when appl loads first time and the each time dependency changes");
  // },[name])

  
  // function changeHandler(event){
  //   setName(event.target.value)
  //   console.log(name);
  // }
  // return (
  //   <input type='text' onChange={changeHandler}>
  //   </input>
  // );
  

  // const [courses,setCourses] = useState("");
    
  //   useEffect(()=>{
  //       const fetchData = async() =>{
  //           try{
  //               const res = await fetch(apiUrl);
  //               const resJson =await res.json();

  //               setCourses(resJson.data); 
  //               console.log(resJson.data); 
  //           }
  //           catch(error){

  //           }

  //       }
  //       fetchData();
  //   },[])

  // React-Tailwind-Projects

  // rmdir .git 
  cd ..
  git rm --cached my-app2
  git rm -f --cached my-app2
  git add my-app2
  git commit -m "Added my-app2 to the project"
  git push
  git push origin main
  git branch    
  git push origin master
  git remote -v
  git remote add origin https://github.com/snehankpatil/React-Tailwind-Projects.git  
  git push origin main       
  git branch
  git push origin master