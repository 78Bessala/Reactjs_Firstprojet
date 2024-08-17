import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pt from "../../card.json"
import NotFound from "./Introuvable";
import { Navigate } from "react-router-dom";

const Inf = () => {

    const { id } = useParams();
    const [art, setArt] = useState(null);
    const bArt = Pt.find((item) => item.id === parseInt(id));
    //  const Qt=Pt.find((item)=>item.id)
    console.log(bArt);

    const imag = Pt.find((item) => item.id === (id))

    //  useEffect(()=>{

    //     setArt(bArt);
    //  },[id ]);

    //    if(!art ){
    //     return <div>Art non trouve</div>
    //    }
    if (!bArt) {
        return (

            <Navigate to={`*`}>

            </Navigate>



        )
    }

    return (
        <>

            <img src={require("../../images/hebergements/" + bArt.image)} />
            <h1>{bArt.titre}</h1>
            <p> {bArt.description}</p>
            <p> {bArt.Hotel}</p>
            <p> {bArt.altTxt}</p>


        </>
    )
}
export default Inf;