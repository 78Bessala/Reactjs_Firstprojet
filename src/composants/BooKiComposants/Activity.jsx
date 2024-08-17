import Act from "../../cardA.json"

const Activite=()=>{

    return(
        <>
            <div className="CAd">
                {Act.map((element)=>(
                     <article className="cad">
                     <img src={require("../../images/activites/"+element.image)} className="mg"/>
                     <div className="cad-content">
                         <h3>Vieux port</h3>
                     </div>
                 </article>
                ))}
             </div>
           
        </>
    )
}
export default Activite;