import ContactCard from "@/components/ContactCard";
import React from "react";
import styles from "./contact.module.css";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>contact us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We'd love love to here <span>from you</span>
          </h2>
          <ContactForm />
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274241846!2d74.0047208632026!3d31.48310365832302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689002186627!5m2!1sen!2s"
          width={100}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className={styles.mapping}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default page;
 
// CulQWjLrMdzwQVhf