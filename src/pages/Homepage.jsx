import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <div className={styles.container}>
        <PageNav />
      </div>
      <main className={styles.contact}>
        <section className={styles.backgroundSection}>
          <h1>Välkommen till Terra Validus Partners</h1>
        </section>
        <div className={styles.aboutUs}>
          {/* Text */}
          <div className={styles.aboutUsText}>
            <h2>Om oss</h2>
            <p>
              Välkommen till Terra Validus Partners, din partner inom rådgivning
              för uthyrning och hyresgäster. Med kunskap från både
              fastighetsägar- och hyresgästsidan är jag redo att erbjuda
              skräddarsydda lösningar för dina behov inom fastighetsbranschen.
              Med min engagemang och dedikation strävar jag efter att vara din
              pålitliga rådgivare och leverera resultat som överträffar dina
              förväntningar.
            </p>
          </div>

          <div className="aboutUsPicture">
            <img src="img-3.jpeg" alt="profile picture of a woman" />

            <h2>Jag finns här för dig</h2>
            <p>
              Jag kan hantera allt från komplexa hyresavtal till stora projekt
              med uthyrning och anpassning för hyresgäster. Jag skräddarsyr
              varje uppdrag efter dina behov. Mitt fokus ligger på att leverera
              högkvalitativa resultat som gör verklig skillnad för dig som kund.
              Jag värdesätter varje kund jag arbetar med och strävar efter
              långsiktiga relationer som gynnar oss båda. Jag tar mig an varje
              uppdrag med energi, närvaro och glädje, och jag är alltid rak och
              enkel att kommunicera med.
            </p>

            <NavLink to="/contact">
              {/* skulle vilja ändra så att jag får det här istället, 
            men fuckar upp hela sidan 
           <Link to="/app">Go to the app</Link> 
           */}
              <button className="btn btnContact">Contact</button>
            </NavLink>
          </div>
        </div>
      </main>
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  );
}
