import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <PageNav />
      </div>
      <main className={styles.contact}>
        <section className={styles.backgroundSection}>
          <h1>Vi på Terra validus Partners</h1>
        </section>
        <div className={styles.contactContainer}>
          {/* Text */}
          <div className={styles.teamText}>
            <h2>Vårt team</h2>
            <p>
              Vårt team har jobbat framgångsrikt tillsammans i olika
              konstellationer under många år. Vår gemensamma kompetens gör att
              vi kan ta oss an en stor bredd av uppdrag. Kontakta vem som helst
              av oss så guidar vi er till rätt person och kompetens för att
              hjälpa just ditt företag.
            </p>
          </div>

          {/* Picture */}
          <div className={styles.contactPicture}>
            <img src="img-4.jpeg" alt="man in suite" />
          </div>
          {/* Information Box */}
          <div className={styles.contactInfo}>
            <h5>VD / Grundare</h5>
            <h1>Erik Eriksson</h1>
            <p className={styles.contactInfoDescription}>
              Erik är en lovande talang inom fastighetsbranschen med en stark
              passion för att förstå och navigera marknadens komplexitet. Med
              sin bakgrund inom affärsutveckling och marknadsanalys är Erik
              driven av att förstå både de strategiska och taktiska aspekterna
              av fastighetsrådgivning. Han strävar alltid efter att hitta de
              bästa lösningarna för sina kunder och är redo att ta sig an
              utmaningarna inom fastighetsrådgivning med energi och entusiasm.
            </p>

            <p>+46 99 999 99 99</p>
            <p>johndoe@example.com</p>
          </div>

          {/* Information Box */}
          <div className={styles.contactInfo}>
            <h5>Partner</h5>
            <h1>Sven Svensson</h1>
            <p className={styles.contactInfoDescription}>
              Sven är en erfaren expert inom fastighetsbranschen med många års
              erfarenhet och en djupgående kunskap om marknadens komplexitet.
              Hans bakgrund inom försäljning och uthyrning av fastigheter har
              gett honom en unik förmåga att identifiera både långsiktiga
              strategier och kortsiktiga möjligheter. Sven är passionerad när
              det gäller att hitta innovativa lösningar för sina kunder och han
              tar sig an varje projekt med stor energi och en problemlösande
              inställning.
            </p>
            <div className={styles.contactDetails}>
              <p>+46 99 999 99 99</p>
              <p>johndoe@example.com</p>
            </div>
          </div>

          {/* Picture */}
          <div className={styles.contactPicture}>
            <img src="img-5.jpeg" alt="Blond man in suite" />
          </div>

          {/* Picture */}
          <div className={styles.contactPicture}>
            <img src="img-4.jpeg" alt="man in suite" />
          </div>
          {/* Information Box */}
          <div className={styles.contactInfo}>
            <h5>VD / Grundare</h5>
            <h1>Erik Eriksson</h1>
            <p>
              Eftersom Erik är grundaren och en riktig talang, så önskar vi
              presentera honom för er ännu en gång.
            </p>
            <p className={styles.contactInfoDescription}>
              Han är en lovande talang inom fastighetsbranschen med en stark
              passion för att förstå och navigera marknadens komplexitet. Med
              sin bakgrund inom affärsutveckling och marknadsanalys är Erik
              driven av att förstå både de strategiska och taktiska aspekterna
              av fastighetsrådgivning. Han strävar alltid efter att hitta de
              bästa lösningarna för sina kunder och är redo att ta sig an
              utmaningarna inom fastighetsrådgivning med energi och entusiasm.
            </p>
            <div className={styles.contactDetails}>
              <p>+46 99 999 99 99</p>
              <p>johndoe@example.com</p>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  );
}
