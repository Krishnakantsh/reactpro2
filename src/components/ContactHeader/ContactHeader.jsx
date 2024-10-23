import React from 'react'
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div >
      <div className={`${styles.container}`}>
      <h1 className={`${styles.h1}`}>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at obcaecati ea ex dolorum magnam culpa expedita odit facilis soluta nostrum maiores, autem ipsam molestiae a. Voluptate, quaerat tempore? Ratione, ea! Corrupti harum architecto inventore a dolores ipsam illum omnis. Praesentium natus in vero ea itaque iure atque dolor molestiae! </p>
      </div>
    </div>
  );
}

export default ContactHeader;