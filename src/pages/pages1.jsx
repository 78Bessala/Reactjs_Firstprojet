import Myfont from "../composants/composant1";
import { Link } from "react-router-dom";

const Accueil=()=>{



    return(

        <>
          <Myfont/>
          <Link to={`/Page1`}> vroute vers 1222  </Link>
        </>

    )
}

export default Accueil;