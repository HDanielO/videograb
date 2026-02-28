import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>VIDEOGRAB</div>
      {/* <GiHamburgerMenu className={styles.menu} /> */}
    </div>
  );
};

export default NavBar;
