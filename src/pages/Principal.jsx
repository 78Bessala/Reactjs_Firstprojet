import Header from "../composants/BooKiComposants/Header";
import Form from "../composants/BooKiComposants/Formulaire";
import Heberge from "../composants/BooKiComposants/HebergementsAndPpopular";
import Populars from "../composants/BooKiComposants/Popular";
import Activite from "../composants/BooKiComposants/Activity";
import Foot from "../composants/BooKiComposants/Footer";

const Principe = () => {

    return (
        <>
            <Header />
            <Form />

            <main>

                <div className="hebergements-and-populaires">
                    <section className="hebergements">
                        <div className="mot1"> <h4>Hebergements a Marseille</h4></div>
                        <Heberge />
                        <div class="mot2"><h4>Afficher plus</h4> </div>
                    </section>
                    <section class="populaires">
                        <div class="populaires-title">
                            <h2 class="section-title">Les plus populaires</h2>
                            <i class="fa-solid fa-chart-line" aria-hidden="true"></i>
                        </div>
                        <Populars/>
                    </section>

                </div>

                <div className="Mar"> <h3>Activites a Marseille</h3></div>
                <Activite/>
            </main>
            <Foot/>
            
                </>
                )
}
                export default Principe