import { useState } from "react";
import Img from "../../images/logo/Booki.png"
import { Link } from "react-router-dom";


const Header=()=>{


    return (
        
        <header class="mane">
        <div class="div">
            <img src={Img} alt="logo" className="logo"/>

        </div> 
        <nav class="nave">
            <ul class="bp">
                <Link  to={`/`} className="Made"><li class="At"> Hebergmements</li></Link>  
                <Link to={`/`} className="Made" ><li class="At"> Activites</li></Link> 
            </ul>
            
        </nav>
    </header>
    )
}
export default Header;
