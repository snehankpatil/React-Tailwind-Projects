// import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import data from './data'
import Heading from './components/Heading'; 
import Tours from './components/Tours'; 
import EmptyList from './components/EmptyList';


function App() {

    
  const [tours,setTours] = useState(data);

  function removeTour(id){
        const newTours = tours.filter( (tour) =>{
          if(tour.id != id){
            return tour;
          }
        } ) 
        setTours(newTours);
  }

  function refreshList(){
    setTours(data);
  }


  return (
    <div>
      
      {tours.length != 0? <Tours tours={tours} removeTour = {removeTour} > </Tours>:<EmptyList refreshList={refreshList} ></EmptyList>}
      
    </div>
  ) ;
}

export default App;
