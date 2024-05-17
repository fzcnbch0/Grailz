import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Choice from "../../components/choice";
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
        </>
    )
}

export default HomePage;