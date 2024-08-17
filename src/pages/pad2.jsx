import Test from "../composants/comp2";
import { Link } from "react-router-dom";

const Bes=()=>{


    return(
        <>
            <Test/>
            <Link to={`/`}> route/ver/2/1</Link> 
            <Link to={`/Pag3`}> route/ver/2/3</Link> 
        </>
       
    )
}
export default Bes;