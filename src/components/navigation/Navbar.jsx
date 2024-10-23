import styles from "./Navigation.module.css";

function Navbar() {

  return (
    <div>
      <nav className={`${styles.navigation}`} >
        <div className={`${styles.logo}`}>Logo</div>
        <div className={`${styles.navList}`}>
          <ul>
            <li className= {`${styles.listItem ,styles.active}`} ><a href="">Home</a></li>
            <li className={`${styles.listItem}`}><a href="">Trending</a></li>
            <li className={`${styles.listItem}`}><a href="">About</a></li>
            <li className={`${styles.listItem}`}><a href="">Contact</a></li>
            <li className={`${styles.listItem}`}><a href="">Services</a></li>
          </ul>
        </div>
        <button type="button">Login</button>
      </nav>

    </div>

  );
}

export default Navbar;