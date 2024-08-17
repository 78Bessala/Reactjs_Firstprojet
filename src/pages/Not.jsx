import NotFound from "../composants/BooKiComposants/Introuvable";
import { Link } from "react-router-dom";


const Erreur=()=>{

    return(
        <>
          <NotFound />
          <Link to={`/`} className="two"> route/ver/1/2</Link>

        </>
    )

}
export default Erreur