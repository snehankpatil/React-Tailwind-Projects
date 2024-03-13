import data from "../data";
function EmptyList(props){

    function refreshHandler(){
        props.refreshList();
    }

    return (

        <div className="empty">
                
            <p className="empty-text" >it is empty page </p>
            <div onClick={refreshHandler} className="refresh-btn" >
                refresh
            </div>
        </div>

        

    );
}

export default EmptyList;