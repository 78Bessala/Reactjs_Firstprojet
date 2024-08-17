 import { useState } from "react";//hooks permet de gerer les etats


const Myfont=()=>{

 const [ bes,setBes]=useState(false);


 return(
    <div>

    <div onClick={()=>setBes(!bes)}>
        
        <h2> Bienvenue a la fonction react !</h2>
    </div>
    {bes &&  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta pariatur possimus alias enim nesciunt nemo expedita atque sunt. Assumenda natus dolorem temporibus recusandae, quaerat unde nisi atque quibusdam at.</p>
 }
    </div>
 )

}
export default Myfont;