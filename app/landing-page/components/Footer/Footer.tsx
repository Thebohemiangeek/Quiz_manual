import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "public/Logo/logo.svg";
import Image from "next/image";
import styles from "./footer.module.css";
import data from "public/data/footer.json";

const Footer = () => {
  const currentlyYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Image src={logo} alt="Manual.co" className={styles.footer_logo} />
        <div className={styles.footer_columns}>
          {data.links.map((column) => (
            <ul key={column.name} className={styles.footer_column}>
              <li className={styles.footer_column__title}>{column.name}</li>
              {column.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          ))}
          <div>
            <span className={styles.footer_socialMedia__title}>Follow us</span>
            <div className={styles.footer_socialMedia__list}>
              <FaGoogle />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.footer_separator} />
      <section className={styles.copyright}>
        <span className={styles.copyright__text} data-testid="copyright__text">
          © {currentlyYear} Manual. All rights reserved
        </span>
      </section>
    </footer>
  );
};
export default Footer;
