import { useState } from "react";
import Heb from "../../card.json"
import { Link } from "react-router-dom";

  const Heberge=()=>{

    return(
        <>
        <div className="photo">
            {
                Heb.map((element)=>(
                    <Link to={`/informations/${element.id}`}>
                    <article className="cardre">
                    <img src={require("../../images/hebergements/"+element.image) } alt="photo de chambre d hotel" className="im"/>
                    <div className="cardre-content">
                        <div className="cadre-text">
                            <h3 className="cadre-title">{element.titre}</h3>
                            <p className="cardre-subtitle">
                                {element.description}
                                
                                <span className="euro">£</span>
                            </p>
                        </div>
                        <div className="cardre-rating">
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                             <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i> 
                            <i className="fa-xs fa-solid  fa-star neutral-star  " aria-hidden="true"></i>
                            <span className="sr-only">Note de 4 sur 5</span>
                        </div>

                    </div>
                </article>
                </Link>
                ))
            }
                       
       </div>

       
       
        </>
    )
}


export default Heberge;

 
