import { useState } from "react";

const Form=()=>{

    return(
        <>
          <section className="sect">
            <form className="fornmulaire">
                <div className="solids"><i className="fa-solid fa-location-dot"></i></div>
                    {/* <!-- <img src="./images/logo/Booki.png" className="po"> --> */}
                
                <input type="text" placeholder="Marseile,France" className="ecriture"/>
                <button className="button"><i className="fa-solid fa-magnifying-glass"></i> Rechercher</button>

            </form>
               <div className="cl">
               <h3 className="np"> Filtre </h3>
                <div className="block">
                    <button className="but"> <i className="fa-solid fa-money-bill"></i>  Economie</button>
                    <button className="but"><i className="fa-solid fa-person"></i>  Familial</button>
                    <button className="but"><i className="fa-solid fa-heart"></i> Romantique</button>
                    <button className="but"><i className="fa-solid fa-fire"></i>  Nos pepites</button>
                </div>
              
               </div>
         </section>
        
          <div className="dr"><i className="fa-solid fa-circle-info"></i>   Plus de 500 logements disponible dans cette ville</div>
        </>
    )
}
export default Form;