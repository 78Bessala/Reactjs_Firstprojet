import Popul from "../../cardP.json"

const Populars = () => {

    return (
        <>
            <div className="populaires-cards">
                {Popul.map((Element) => (
                    <article className="card">
                        <img src={ require("../../images/hebergements/"+Element.image)} alt="Image de la chambre d'hôtel montrant un lit" />
                        <div className="card-content">
                            <div className="card-txt">
                                <h3 className="card-title">{Element.titre}</h3>
                                <p className="card-subtitle">{Element.description}<span className="euro">€</span></p>
                            </div>
                            <div className="card-rating">
                                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                <i className="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>
                                <span className="sr-only">Note de 4 sur 5</span>
                            </div>
                        </div>
                    </article>
                ))}

            </div>
        </>
    )
}

export default Populars;