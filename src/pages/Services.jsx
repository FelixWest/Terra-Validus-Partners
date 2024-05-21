import PageNav from "../components/PageNav";
import styles from "./Services.module.css";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <div className={styles.container}>
        <PageNav />
      </div>
      <main>
        <section className={styles.backgroundSection}>
          <h1>
            Jag skapar mina erbjudanden och anpassar uppdragen i samråd med er.
          </h1>
        </section>
        <div className={styles.serviceContainer}>
          {/* Text */}
          <div className={styles.serviceText}>
            <h2>Våra tjänster</h2>
            <p>
              Här får du en kort översikt av de tjänster jag erbjuder. Om du
              behöver hjälp med en specifik kombination av tjänster eller om det
              du söker inte nämns här, är du välkommen att kontakta mig. Jag är
              här för att bistå dig. Mitt fokus ligger alltid på att skapa
              skräddarsydda lösningar och anpassa uppdraget efter dina behov och
              önskemål.
            </p>
          </div>

          {/* Innehåll på vänster sida*/}
          <div className={styles.leftSide}>
            <img src="bg.jpg" alt="two women overlooking mountain" />
            <h2>Vägledning</h2>
            <p>
              Hur formar sig framtidens arbetsplats? Vilka förväntningar ställs
              från både medarbetare och kunder? Jag är redo att stödja
              företagsledningar i att utforska och hantera dessa frågor på ett
              kompetent sätt.
            </p>
            <button className="btn">Mer information</button>
          </div>

          {/* Innehåll på höger sida*/}
          <div className={styles.rightSide}>
            <img
              src="img-1.jpg"
              alt="person overlooking mountain during sunset"
            />
            <h2>Projektbaserad uthyrning</h2>
            <p>
              Har ni en stor vakans i en av era fastigheter eller överväger ni
              att bygga ett helt nytt kontor? På Terra Validus Partners erbjuder
              jag min kompetens och engagemang för att stötta er i dessa
              projekt.
            </p>
            <div className="btn-information">
              <button className="btn">Mer information</button>
            </div>
          </div>

          {/* Innehåll på vänster sida*/}
          <div className={styles.leftSide}>
            <img src="bg.jpg" alt="two women overlooking mountain" />
            <h2>Vägledning</h2>
            <p>
              Hur formar sig framtidens arbetsplats? Vilka förväntningar ställs
              från både medarbetare och kunder? Jag är redo att stödja
              företagsledningar i att utforska och hantera dessa frågor på ett
              kompetent sätt.
            </p>
            <button className="btn">Mer information</button>
          </div>

          {/* Innehåll på höger sida*/}
          <div className={styles.rightSide}>
            <img
              src="img-1.jpg"
              alt="person overlooking mountain during sunset"
            />
            <h2>Projektbaserad uthyrning</h2>
            <p>
              Har ni en stor vakans i en av era fastigheter eller överväger ni
              att bygga ett helt nytt kontor? På Terra Validus Partners erbjuder
              jag min kompetens och engagemang för att stötta er i dessa
              projekt.
            </p>
            <div className="btn-information">
              <button className="btn">Mer information</button>
            </div>
          </div>

          {/* Innehåll på vänster sida*/}
          <div className={styles.leftSide}>
            <img src="bg.jpg" alt="two women overlooking mountain" />
            <h2>Vägledning</h2>
            <p>
              Hur formar sig framtidens arbetsplats? Vilka förväntningar ställs
              från både medarbetare och kunder? Jag är redo att stödja
              företagsledningar i att utforska och hantera dessa frågor på ett
              kompetent sätt.
            </p>
            <button className="btn">Mer information</button>
          </div>

          {/* Innehåll på höger sida*/}
          <div className={styles.rightSide}>
            <img
              src="img-1.jpg"
              alt="person overlooking mountain during sunset"
            />
            <h2>Projektbaserad uthyrning</h2>
            <p>
              Har ni en stor vakans i en av era fastigheter eller överväger ni
              att bygga ett helt nytt kontor? På Terra Validus Partners erbjuder
              jag min kompetens och engagemang för att stötta er i dessa
              projekt.
            </p>
            <div className="btn-information">
              <button className="btn">Mer information</button>
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
