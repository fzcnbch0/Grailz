import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Choice from "../../components/choice";
import ItemList from "../../components/item";
import Filter from "../../components/filters";
import "./style.css";
function HomePage(){
    useEffect(() => {
        document.title = 'Enrage - Homepage';
    }, []);
  
    return(
        <>
        <Navbar/>
        <Choice/>
        <div id="heading">
            <a id="directory">View all products</a>
        </div>
        <ItemList/>
        </>
    )
}

export default HomePage;