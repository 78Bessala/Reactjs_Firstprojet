import Myfonct from "../composants/comp1";
import { Link } from "react-router-dom";
import '../style/indexT.css'

const Home =()=>{
     

    return(
       <div className="one">
          <Myfonct/>
          <Link to={`/Pag2`} className="two"> route/ver/1/2</Link>
          <Link to={`/Pag3`} className="two"> route/ver/1/2/3</Link> 
       </div>
    )
}
export default Home;