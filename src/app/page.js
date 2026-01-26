import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "../components/NavBar/Navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main className={styles.main}>
        <h2 className={styles.header}>
          Download Videos From Your Favorite Social Media
        </h2>
        <div className={styles.socialMediaIcons}>
          <FaFacebook className={styles.icon}></FaFacebook>
          <FaTwitter className={styles.icon}></FaTwitter>
          <FaInstagram className={styles.icon}></FaInstagram>
          <FaTiktok className={styles.icon}></FaTiktok>
        </div>
        
        <select className={styles.select}>
          <option disabled selected>
            Select Options
          </option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
          <option value="tiktok">TikTok</option>
        </select>
      </main>
    </div>
  );
}
