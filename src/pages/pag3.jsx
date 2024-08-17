import Mars from "../composants/comp3";
import { Link } from "react-router-dom";

const Leo=()=>{

    return(
        <>
          <Mars/>
          <Link to={`/Pag2`}> route/ver/3/2</Link> 
        </>
        

    )
}
export default Leo;