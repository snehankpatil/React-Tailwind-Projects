import Heading from "./Heading";
import Card from "./Card";
// we need to wrap the map function inside the { } .
function Tours(props){
    return (
        
        <div>
            <Heading></Heading>
            <div className="cards" >
                { 
                    props.tours.map( (tour) =>{
                        return <Card tour={tour} removeTour = {props.removeTour}  ></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;