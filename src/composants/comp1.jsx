import { useState } from "react";


const Myfonct=()=>{
   
    const [courant,setCourant]=useState(false);


    return(
        <div>
            <div onClick={()=>setCourant(!courant)}>
                <h2>BESSALA ENOGO Jean Leonel</h2>
            </div>
    
          {courant && <p>Vous dit bonjour</p>}
        </div>
    )

}
export default Myfonct;