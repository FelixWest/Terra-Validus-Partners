import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <hr className={styles.footerSeperator} />
      <section className={styles.footerSocialMedia}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </section>
      <section className={styles.footerInfo}>
        <section className={styles.footerInfoLeft}>
          <section className={styles.footerInfoName}>Information</section>
          <section className={styles.footerInfoReturns}>
            Returns Policy
            <br />
            Delivery
          </section>
        </section>
        <section className={styles.footerInfoCenter}>
          <section className={styles.footerInfoEmail}>info@domain.com</section>
          <section className={styles.footerInfoTerms}>
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className={styles.footerInfoRight}>
          <section className={styles.footerInfoNumber}>
            +46 99 999 99 99
          </section>
          <section className={styles.footerInfoContact}>
            My Story
            <br />
            Contact Us
          </section>
        </section>
      </section>
      <hr className={styles.footerSeperator} />
    </section>
  );
}
